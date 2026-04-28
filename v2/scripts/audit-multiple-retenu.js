/**
 * Audit : VWA avec plus d'un concept en status="retenu" dans analysis_axes.concepts
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const allVwa = [];
  let off = 0;
  while (true) {
    const { data } = await db.from('verse_word_analyses')
      .select('id, verse_id, word_key, position, analysis_axes')
      .range(off, off + 999);
    if (!data || data.length === 0) break;
    allVwa.push(...data);
    if (data.length < 1000) break;
    off += 1000;
  }

  const issues = [];
  const noneRetenu = [];
  for (const v of allVwa) {
    const concepts = v.analysis_axes?.concepts || {};
    const retenus = Object.entries(concepts).filter(([n, b]) => b.status === 'retenu').map(([n]) => n);
    if (retenus.length > 1) {
      issues.push({ ...v, retenus });
    } else if (retenus.length === 0 && v.analysis_axes?.concept_chosen) {
      noneRetenu.push({ ...v, cc: v.analysis_axes.concept_chosen });
    }
  }

  // verse map
  const vidSet = [...new Set([...issues, ...noneRetenu].map(x => x.verse_id))];
  const vmap = {};
  for (let i = 0; i < vidSet.length; i += 100) {
    const chunk = vidSet.slice(i, i + 100);
    const { data } = await db.from('verses').select('id, surah_id, verse_num').in('id', chunk);
    for (const v of data ?? []) vmap[v.id] = `S${v.surah_id}V${v.verse_num}`;
  }

  console.log(`\n=== ${issues.length} VWA avec PLUSIEURS retenu ===\n`);
  for (const v of issues) {
    console.log(`${vmap[v.verse_id] || v.verse_id} pos=${v.position} word=${v.word_key} → retenus: ${v.retenus.join(', ')} (concept_chosen=${v.analysis_axes.concept_chosen})`);
  }

  console.log(`\n=== ${noneRetenu.length} VWA avec AUCUN retenu (mais concept_chosen défini) ===\n`);
  for (const v of noneRetenu.slice(0, 20)) {
    console.log(`${vmap[v.verse_id] || v.verse_id} pos=${v.position} word=${v.word_key} → cc="${v.cc}" (aucun status retenu)`);
  }
  if (noneRetenu.length > 20) console.log(`... +${noneRetenu.length - 20} autres`);
}
run().catch(e => { console.error(e); process.exit(1); });
