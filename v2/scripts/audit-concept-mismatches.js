/**
 * Audit : trouve toutes les VWA dont le concept_chosen n'existe pas
 * dans les word_meanings de la racine.
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // 1. Récupérer toutes les word_analyses (id → word_key) — paginé
  const was = [];
  let waOff = 0;
  while (true) {
    const { data } = await db.from('word_analyses').select('id, word_key').range(waOff, waOff + 999);
    if (!data || data.length === 0) break;
    was.push(...data);
    if (data.length < 1000) break;
    waOff += 1000;
  }
  const wkById = Object.fromEntries(was.map(w => [w.id, w.word_key]));
  const idByKey = {};
  for (const w of was) {
    if (!idByKey[w.word_key]) idByKey[w.word_key] = [];
    idByKey[w.word_key].push(w.id);
  }

  // 2. Récupérer tous les word_meanings et grouper par word_key
  const conceptsByKey = {};
  let off = 0;
  while (true) {
    const { data } = await db.from('word_meanings').select('analysis_id, concept').range(off, off + 999);
    if (!data || data.length === 0) break;
    for (const m of data) {
      const key = wkById[m.analysis_id];
      if (!key) continue;
      if (!conceptsByKey[key]) conceptsByKey[key] = new Set();
      if (m.concept) conceptsByKey[key].add(m.concept);
    }
    if (data.length < 1000) break;
    off += 1000;
  }

  // 3. Récupérer toutes les VWA et chercher les mismatch
  const mismatches = [];
  off = 0;
  while (true) {
    const { data } = await db.from('verse_word_analyses')
      .select('id, verse_id, word_key, position, analysis_axes')
      .range(off, off + 999);
    if (!data || data.length === 0) break;
    for (const v of data) {
      const cc = v.analysis_axes?.concept_chosen;
      if (!cc) continue;
      const validSet = conceptsByKey[v.word_key];
      if (!validSet || !validSet.has(cc)) {
        mismatches.push({
          id: v.id, vid: v.verse_id, pos: v.position, key: v.word_key,
          concept_chosen: cc,
          valid: validSet ? [...validSet] : []
        });
      }
    }
    if (data.length < 1000) break;
    off += 1000;
  }

  console.log(`\n=== ${mismatches.length} VWA avec concept_chosen invalide ===\n`);
  // Get verse num for context
  const vidSet = [...new Set(mismatches.map(m => m.vid))];
  const versesMap = {};
  for (let i = 0; i < vidSet.length; i += 100) {
    const chunk = vidSet.slice(i, i + 100);
    const { data: vs } = await db.from('verses').select('id, surah_id, verse_num').in('id', chunk);
    for (const x of vs ?? []) versesMap[x.id] = `S${x.surah_id}V${x.verse_num}`;
  }

  for (const m of mismatches) {
    console.log(`${versesMap[m.vid] || ('vid=' + m.vid)} pos=${m.pos} word=${m.key}`);
    console.log(`  ❌ concept_chosen="${m.concept_chosen}"`);
    console.log(`  ✓ valides: ${m.valid.join(' | ') || '(aucun)'}`);
  }

  console.log(`\nTotal : ${mismatches.length}`);
}
run().catch(e => { console.error(e); process.exit(1); });
