const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const keys = ['dhhy', 'amn', 'eml', 'slh', 'wfy', 'jwr', 'ajr', 'alh', 'hbb', 'zlm'];
  for (const k of keys) {
    const { data: wa, error: e } = await db.from('word_analyses').select('*').eq('word_key', k).maybeSingle();
    if (!wa) { console.log(k, '→ NOT FOUND', e?.message); continue; }
    const { data: wm } = await db.from('word_meanings').select('id, concept, meaning_fr').eq('analysis_id', wa.id);
    const concepts = wm ? [...new Set(wm.map(x => x.concept))] : [];
    console.log(`${k} (id=${wa.id}, root=${wa.root_arab}, step=${wa.analysis_step}, occ=${wa.total_occurrences}) → ${wm?.length||0} sens, concepts: [${concepts.join(' | ')}]`);
  }
}
run().catch(console.error);
