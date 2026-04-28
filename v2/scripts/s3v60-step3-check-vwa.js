const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Check existing VWA for verse 353
  const { data: vwa } = await db.from('verse_word_analyses').select('*').eq('verse_id', 353);
  console.log('VWA for verse 353:', JSON.stringify(vwa, null, 2));

  // Sample structure from any other verse
  const { data: sample } = await db.from('verse_word_analyses').select('*').eq('verse_id', 352).limit(1);
  console.log('\nSample VWA (verse 352):', JSON.stringify(sample, null, 2));
}
run().catch(console.error);
