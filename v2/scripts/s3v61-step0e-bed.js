// S3:V61 — step0e : find the real b-ʿ-d (بعد = after) root analysis
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // search for root ب ع د (after) vs ب ع ض (some)
  const { data: r1 } = await db.from('word_analyses').select('*').or('word_key.eq.bed,word_key.eq.bad,word_key.eq.beyd,root_ar.eq.ب ع د');
  console.log('=== ROOTS containing ب ع ===');
  console.log(JSON.stringify(r1, null, 2));
}
run().catch(e => { console.error(e); process.exit(1); });
