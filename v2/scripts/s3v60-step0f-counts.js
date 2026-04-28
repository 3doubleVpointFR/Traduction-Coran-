const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const ids = { hqq: 409, rbb: 253, kwn: 2577, kan: 1516, knw: 2117, mry: 691, mrr: 839 };
  for (const [name, id] of Object.entries(ids)) {
    const { data } = await db.from('word_meanings').select('sense, status, concept, display_order').eq('analysis_id', id).order('display_order');
    console.log(`\n=== ${name} (id=${id}) count=${data?.length || 0} ===`);
    if (data) {
      const concepts = {};
      for (const m of data) {
        if (!concepts[m.concept]) concepts[m.concept] = [];
        concepts[m.concept].push(`${m.sense} (${m.status})`);
      }
      for (const [c, list] of Object.entries(concepts)) {
        console.log(`  [${c}] ${list.join(' | ')}`);
      }
    }
  }
}
run().catch(console.error);
