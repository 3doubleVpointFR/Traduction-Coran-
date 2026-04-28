const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Check word_analyses for all keys
  const keys = ['dhhy', 'amn', 'eml', 'slh', 'wfy', 'jwr', 'ajr', 'alh', 'hbb', 'zlm'];
  for (const k of keys) {
    const { data } = await db.from('word_analyses').select('id, word_key, root_arab, root_translit, total_occurrences, analysis_step').eq('word_key', k);
    console.log(k, '→', JSON.stringify(data));
  }
  
  console.log('\n=== word_meanings counts ===');
  for (const k of keys) {
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', k).single();
    if (!wa) continue;
    const { data: wm } = await db.from('word_meanings').select('id, concept, meaning_fr').eq('analysis_id', wa.id);
    console.log(k, `(analysis_id=${wa.id})`, '→', wm?.length, 'sens');
    if (wm) {
      const concepts = [...new Set(wm.map(x => x.concept))];
      console.log('  concepts:', concepts);
    }
  }
}
run().catch(console.error);
