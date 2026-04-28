const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Dump full row for amn
  const { data: wa } = await db.from('word_analyses').select('*').eq('id', 287).single();
  console.log('=== amn (287) full row ===');
  console.log(JSON.stringify(wa, null, 2));
  
  // Dump word_meanings columns (first row)
  const { data: wm } = await db.from('word_meanings').select('*').limit(1);
  console.log('\n=== word_meanings sample ===');
  console.log(JSON.stringify(wm, null, 2));
}
run().catch(console.error);
