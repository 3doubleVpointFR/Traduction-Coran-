const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Verify daily count and retrieve "akhz" sample to confirm "adopter" is retenu
  const ids = { amr: 428, akhz: 929, mlk: 256, nba: 418, rbb: 253, kfr: 294, baed: 926, slm: 627 };
  for (const [k, id] of Object.entries(ids)) {
    const wd = await db.from('word_daily').select('arabic,french,sense').eq('analysis_id', id);
    console.log(`${k} (id=${id}): ${wd.data?.length} daily`);
    wd.data?.forEach(d => console.log(`  - ${d.sense}: ${d.french}`));
  }
}
run().catch(console.error);
