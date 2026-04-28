const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data } = await db.from('verse_word_analyses').select('*').eq('verse_id', 350);
  console.log('Existing VWA for verse_id=350:', data?.length || 0);
  if (data) data.forEach(x => console.log(`  pos=${x.position} word=${x.word_key} sense_chosen=${x.sense_chosen}`));
  
  // Look at a sample VWA to see full structure
  const { data: sample } = await db.from('verse_word_analyses').select('*').eq('verse_id', 349).limit(2);
  console.log('\n=== Sample VWA (verse 349) ===');
  if (sample) sample.forEach(r => console.log(JSON.stringify(r, null, 2).slice(0, 1500)));
}
run().catch(console.error);
