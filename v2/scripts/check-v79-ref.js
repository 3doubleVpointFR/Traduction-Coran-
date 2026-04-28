const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const va = await db.from('verse_analyses').select('*').eq('verse_id', 372).single();
  console.log('=== V79 verse_analyses ===');
  console.log('translation_arab:', va.data.translation_arab);
  console.log('full_translation:', va.data.full_translation);
  console.log('\nsegments:');
  const segs = typeof va.data.segments === 'string' ? JSON.parse(va.data.segments) : va.data.segments;
  console.log(JSON.stringify(segs, null, 2));
  console.log('\nFIRST 200 chars translation_explanation:');
  console.log(va.data.translation_explanation?.substring(0, 200));

  // Check VWA structure
  const vwa = await db.from('verse_word_analyses').select('*').eq('verse_id', 372).order('position').limit(3);
  console.log('\n=== V79 VWA samples ===');
  console.log(JSON.stringify(vwa.data, null, 2));
}
run().catch(console.error);
