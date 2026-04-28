const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data: va } = await db.from('verse_analyses').select('*').eq('verse_id', 350).single();
  const segs = va.segments;
  // Find ujūrahum
  const i = segs.findIndex(s => s.phon === 'ujūrahum');
  console.log('Found at index:', i, 'current key:', segs[i].key, 'root:', segs[i].root);
  // Fix: key=ajr, root=أ ج ر
  segs[i].key = 'ajr';
  segs[i].root = 'أ ج ر';
  
  const { error } = await db.from('verse_analyses').update({ segments: segs }).eq('id', va.id);
  if (error) console.error(error); else console.log('Updated segments: ujūrahum → key=ajr root=أ ج ر');
}
run().catch(console.error);
