const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // List first 3 rows to get structure
  const { data: wa } = await db.from('word_analyses').select('*').limit(3);
  console.log('=== word_analyses sample ===');
  console.log(JSON.stringify(wa, null, 2));

  // look for the Arabic root "ح ق ق" or "haqq"
  const { data: hq } = await db.from('word_analyses').select('id, word_key, root_arabic, total_occurrences, analysis_step').or('word_key.eq.haqq,word_key.eq.hqq,word_key.ilike.%hqq%,word_key.ilike.%haqq%,root_arabic.eq.ح ق ق').limit(10);
  console.log('\n=== search hqq/haqq ===');
  console.log(JSON.stringify(hq, null, 2));
}
run().catch(console.error);
