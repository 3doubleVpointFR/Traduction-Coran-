const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data } = await db.from('word_analyses').select('*').limit(1);
  console.log('word_analyses sample:', data && data[0]);
  const { data: wly } = await db.from('word_analyses').select('*').ilike('root_arabic', '%و%ل%ي%').limit(5);
  console.log('\nWLY search:', wly);
  const { data: qwl } = await db.from('word_analyses').select('id,word_key,root_arabic').ilike('word_key','qwl%').limit(5);
  console.log('\nqwl-ish:', qwl);
  // try exact w-l-y
  const { data: all } = await db.from('word_analyses').select('id,word_key,root_arabic').eq('root_arabic','و ل ي').limit(5);
  console.log('\nexact w-l-y:', all);
}
run().catch(console.error);
