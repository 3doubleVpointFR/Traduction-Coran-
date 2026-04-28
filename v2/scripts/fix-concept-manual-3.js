const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Mapping manuel pour les 3 cas que la fuzzy n'a pas résolus
const MAPPING = {
  hya: { from: 'Forme/Apparence', to: 'Préparation/Disposition' },
  akl: { from: 'Nourriture/Manger', to: 'Alimentation/Consommation' },
  dlk: { from: 'Démonstratif', to: 'Démonstration/Distance' },
};

async function run() {
  // Charger word_meanings.concept par word_key (paginé)
  const was = [];
  let off = 0;
  while (true) {
    const { data } = await db.from('word_analyses').select('id, word_key').range(off, off + 999);
    if (!data || data.length === 0) break;
    was.push(...data);
    if (data.length < 1000) break;
    off += 1000;
  }
  const wkById = Object.fromEntries(was.map(w => [w.id, w.word_key]));
  const conceptsByKey = {};
  off = 0;
  while (true) {
    const { data } = await db.from('word_meanings').select('analysis_id, concept').range(off, off + 999);
    if (!data || data.length === 0) break;
    for (const m of data) {
      const k = wkById[m.analysis_id];
      if (!k) continue;
      if (!conceptsByKey[k]) conceptsByKey[k] = new Set();
      if (m.concept) conceptsByKey[k].add(m.concept);
    }
    if (data.length < 1000) break;
    off += 1000;
  }

  for (const [key, { from, to }] of Object.entries(MAPPING)) {
    const { data: vwas } = await db.from('verse_word_analyses')
      .select('id, verse_id, position, analysis_axes')
      .eq('word_key', key);

    const validList = [...(conceptsByKey[key] || [])];

    for (const v of vwas) {
      if (v.analysis_axes?.concept_chosen !== from) continue;
      const oldC = v.analysis_axes.concepts || {};
      const newC = {};
      for (const [name, body] of Object.entries(oldC)) {
        const renamed = (name === from) ? to : name;
        newC[renamed] = { ...body };
      }
      for (const validC of validList) {
        if (!newC[validC]) newC[validC] = { senses: [], status: 'nul', proof_ctx: 'Hors sujet.' };
      }
      if (newC[to]) newC[to].status = 'retenu';

      const newAxes = { ...v.analysis_axes, concept_chosen: to, concepts: newC };
      const { error } = await db.from('verse_word_analyses').update({ analysis_axes: newAxes }).eq('id', v.id);
      if (error) { console.log('❌', key, v.id, error.message); continue; }
      console.log(`✓ ${key} pos=${v.position} (vid=${v.verse_id}) : "${from}" → "${to}"`);
    }
  }
}
run().catch(e => { console.error(e); process.exit(1); });
