// S3:V61 — step0c : inspect schema of word_analyses and word_meanings
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data: wa } = await db.from('word_analyses').select('*').limit(2);
  console.log('=== word_analyses sample ===');
  console.log(JSON.stringify(wa, null, 2));

  const { data: wm } = await db.from('word_meanings').select('*').limit(2);
  console.log('\n=== word_meanings sample ===');
  console.log(JSON.stringify(wm, null, 2));
}
run().catch(e => { console.error(e); process.exit(1); });
