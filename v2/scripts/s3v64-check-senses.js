const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  for (const key of ['elw','dwn']) {
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', key);
    const { data: wm } = await db.from('word_meanings').select('sense,concept,status').eq('analysis_id', wa[0].id).order('display_order');
    console.log('\n=== ' + key + ' ===');
    for (const r of wm) console.log('  "' + r.sense + '" [' + r.concept + '] status=' + r.status);
  }
}
run().catch(console.error);
