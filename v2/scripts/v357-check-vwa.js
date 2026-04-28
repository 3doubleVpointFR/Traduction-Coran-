const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data } = await db.from('verse_word_analyses').select('*').eq('analysis_id', 711);
  console.log('Existing VWA for analysis_id=711:', data?.length || 0);
  if (data) data.forEach(x => console.log(`  pos=${x.position} word=${x.word_phon} sense_chosen=${x.sense_chosen}`));
  
  // Verify columns
  const { data: sample } = await db.from('verse_word_analyses').select('*').limit(1);
  console.log('\n=== VWA columns ===');
  if (sample && sample[0]) console.log(Object.keys(sample[0]));
}
run().catch(console.error);
