const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Get columns of verses table (sample row)
  const { data: s, error } = await db.from('verses').select('*').eq('surah_id', 3).gte('verse_num', 58).lte('verse_num', 62).order('verse_num');
  console.log('ERR', error);
  console.log('=== NEIGHBORS s3 v58-62 ===');
  console.log(JSON.stringify(s, null, 2));

  // word_keys check
  const keys = ['hqq', 'rbb', 'kwn', 'mry', 'mrr'];
  for (const k of keys) {
    const { data: wa } = await db.from('word_analyses').select('id, word_key, root_arabic, total_occurrences, analysis_step').eq('word_key', k);
    console.log(`\n=== word_analyses[${k}] ===`);
    console.log(JSON.stringify(wa, null, 2));
    if (wa && wa[0]) {
      const { data: wm } = await db.from('word_meanings').select('id, sense, concept, concept_desc, order_index').eq('analysis_id', wa[0].id).order('order_index');
      console.log(`--- word_meanings[${k}] count=${wm?.length} ---`);
      console.log(JSON.stringify(wm, null, 2));
    }
  }
}
run().catch(console.error);
