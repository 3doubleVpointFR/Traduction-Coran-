const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data } = await db.from('word_meanings').select('*').limit(3);
  console.log('word_meanings sample:', data);
  // For wly (aid 599)
  const { data: w2 } = await db.from('word_meanings').select('*').eq('analysis_id', 599).limit(20);
  console.log('\nwly aid=599 (' + (w2 ? w2.length : 0) + ' rows):');
  if (w2) for (const r of w2) console.log('  ', r.sense, '|', r.concept_group);
}
run().catch(console.error);
