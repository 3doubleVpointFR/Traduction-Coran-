const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data: vs } = await db.from('verses').select('*').limit(1);
  console.log('VERSES sample:', vs && vs[0]);
  const { data: vr } = await db.from('verses').select('*').eq('id', 357).limit(1);
  console.log('VERSES id=357:', vr && vr[0]);
  // Get va existing
  const { data: va } = await db.from('verse_analyses').select('*').eq('verse_id', 357).limit(1);
  if (va && va[0]) {
    console.log('\nva id=', va[0].id);
    console.log('segments_step1:', JSON.stringify(va[0].segments_step1));
    console.log('full_translation:', va[0].full_translation);
    console.log('translation_arab:', va[0].translation_arab);
  }
}
run().catch(console.error);
