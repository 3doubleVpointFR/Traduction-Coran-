const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data: wm, error } = await db.from('word_meanings').select('*').limit(2);
  console.log('err:', error);
  console.log('sample:', JSON.stringify(wm, null, 2));

  // Fetch meanings for our roots
  const ids = { hqq: 409, rbb: 253, kwn: 2577, mry: 691, mrr: 839, kan: 1516 };
  for (const [name, id] of Object.entries(ids)) {
    const { data } = await db.from('word_meanings').select('*').eq('analysis_id', id);
    console.log(`\n=== ${name} (analysis_id=${id}) count=${data?.length || 0} ===`);
    console.log(JSON.stringify(data, null, 2));
  }
}
run().catch(console.error);
