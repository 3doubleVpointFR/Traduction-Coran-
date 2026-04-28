const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // S3 V49 → verse_id = 293 + 49 = 342
  const VID = 342;
  const { data: vwas } = await db.from('verse_word_analyses').select('*').eq('verse_id', VID).order('position');
  console.log(`VWA pour V49 (verse_id=${VID}) :`);
  for (const v of vwas) {
    console.log(`\nposition=${v.position}  word_key=${v.word_key}  phon=${v.phon}  sense_chosen="${v.sense_chosen}"  concept_chosen="${v.concept_chosen}"`);
    if (v.word_key === 'rsl' || (v.phon||'').includes('rasul')) {
      console.log('  >>> analysis_axes :');
      console.log(JSON.stringify(v.analysis_axes, null, 2));
    }
  }
}
run().catch(e => { console.error(e); process.exit(1); });
