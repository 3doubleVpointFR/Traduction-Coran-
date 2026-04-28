const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data } = await db.from('word_meanings').select('*').eq('id', 6861).single();
  console.log('description:', JSON.stringify(data.description));
  console.log('axe1_verset:', JSON.stringify(data.axe1_verset));
  console.log('status:', data.status);
}
run().catch(console.error);
