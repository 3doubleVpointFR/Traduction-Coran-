const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Pick one VWA from V79 to see schema
  const vwa = await db.from('verse_word_analyses').select('*').eq('verse_id', 372).order('position').limit(2);
  console.log('=== V79 VWA schema ===');
  console.log(JSON.stringify(vwa.data, null, 2));

  // word_daily schema
  const wd = await db.from('word_daily').select('*').eq('analysis_id', 627).limit(2);
  console.log('\n=== word_daily slm sample ===');
  console.log(JSON.stringify(wd.data, null, 2));
}
run().catch(console.error);
