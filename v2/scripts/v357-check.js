const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // verse_id=350 for 3:57
  const { data: verse, error: e1 } = await db.from('verses').select('*').eq('id', 350).single();
  console.log('=== VERSE 350 (3:57) ===');
  console.log(JSON.stringify(verse, null, 2));
  if (e1) console.log('ERR', e1);

  // Check verse_analyses for 350
  const { data: va } = await db.from('verse_analyses').select('*').eq('verse_id', 350);
  console.log('\n=== verse_analyses for verse_id=350 ===');
  console.log(JSON.stringify(va, null, 2));

  // verse 3:56 context
  const { data: v56 } = await db.from('verses').select('*').eq('id', 349).single();
  console.log('\n=== VERSE 349 (3:56) ===');
  console.log(JSON.stringify(v56, null, 2));
  
  // verse 3:58 context
  const { data: v58 } = await db.from('verses').select('*').eq('id', 351).single();
  console.log('\n=== VERSE 351 (3:58) ===');
  console.log(JSON.stringify(v58, null, 2));
}
run().catch(console.error);
