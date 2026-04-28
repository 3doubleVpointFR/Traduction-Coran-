const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  for (const [k, id] of Object.entries({ kfr: 294, akhz: 929 })) {
    const wm = await db.from('word_meanings').select('sense,concept,status,description').eq('analysis_id', id).order('display_order');
    console.log(`\n=== ${k} (id=${id}) all meanings ===`);
    wm.data.forEach(m => console.log(`  ${m.concept} | ${m.sense} | ${m.status || '-'} | ${m.description?.substring(0, 80) || ''}`));
  }
}
run().catch(console.error);
