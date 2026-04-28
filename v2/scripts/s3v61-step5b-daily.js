// Check word_daily schema and existing for bhl/elw/nsw, then add if missing
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data: sample } = await db.from('word_daily').select('*').limit(2);
  console.log('=== word_daily sample schema ===');
  console.log(JSON.stringify(sample, null, 2));

  for (const aid of [1287, 371, 2198]) {
    const { data } = await db.from('word_daily').select('*').eq('analysis_id', aid);
    console.log('\naid=' + aid + ' : ' + (data ? data.length : 0) + ' phrases');
    if (data && data.length) for (const d of data) console.log(JSON.stringify(d));
  }
}
run().catch(e => { console.error(e); process.exit(1); });
