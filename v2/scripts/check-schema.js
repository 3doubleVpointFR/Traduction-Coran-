const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Get a few word_analyses to see schema
  const wa = await db.from('word_analyses').select('*').limit(3);
  console.log('word_analyses sample:');
  console.log(JSON.stringify(wa.data, null, 2).substring(0, 1500));

  // Find by various fields
  const r1 = await db.from('word_analyses').select('id,root_key,root_meaning').or('root_key.eq.rbb').limit(5);
  console.log('\nrbb search:', r1.data);

  const r2 = await db.from('word_analyses').select('id,root_key,root_meaning').eq('id', 253).maybeSingle();
  console.log('\nid=253:', r2.data);

  const r3 = await db.from('word_analyses').select('id,root_key,root_meaning').limit(20).order('id');
  console.log('\nFirst 20 by id:');
  r3.data?.forEach(w => console.log(`  id=${w.id} root_key=${w.root_key}`));
}
run().catch(console.error);
