const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const ids = { amn: 287, eml: 393, slh: 326, wfy: 487, ajr: 609, alh: 250, hbb: 930, zlm: 354 };
  for (const [k, id] of Object.entries(ids)) {
    const { data } = await db.from('word_daily').select('id, phrase_fr').eq('analysis_id', id);
    console.log(`${k} (${id}): ${data?.length || 0} phrases`);
  }
}
run().catch(console.error);
