const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const rootsAr = ['ح ق ق', 'ر ب ب', 'ك و ن', 'م ر ي', 'م ر ر'];
  const keys = ['hqq', 'rbb', 'kwn', 'mry', 'mrr'];

  for (const k of keys) {
    const { data: wa } = await db.from('word_analyses').select('*').eq('word_key', k);
    console.log(`\n=== word_analyses[word_key=${k}] ===`);
    console.log(JSON.stringify(wa, null, 2));
    if (wa && wa[0]) {
      const { data: wm } = await db.from('word_meanings').select('*').eq('analysis_id', wa[0].id).order('order_index');
      console.log(`--- word_meanings count=${wm?.length} ---`);
      console.log(JSON.stringify(wm, null, 2));
    }
  }

  // also search by root_ar
  for (const ar of rootsAr) {
    const { data: wa } = await db.from('word_analyses').select('id, word_key, root_ar, analysis_step').eq('root_ar', ar);
    console.log(`\n=== root_ar="${ar}" ===`);
    console.log(JSON.stringify(wa, null, 2));
  }
}
run().catch(console.error);
