const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const ids = { dhhy: 286, amn: 287, eml: 393, slh: 326, wfy: 487, jwr: 1285, ajr: 609, alh: 250, hbb: 930, zlm: 354 };
  for (const [k, id] of Object.entries(ids)) {
    const { data: wa } = await db.from('word_analyses').select('root_ar, root_phon, analysis_step, total_occurrences').eq('id', id).single();
    const { data: wm } = await db.from('word_meanings').select('concept, sense, status').eq('analysis_id', id);
    const concepts = wm ? [...new Set(wm.map(x => x.concept))].filter(Boolean) : [];
    console.log(`\n${k} (id=${id}, root=${wa?.root_ar} [${wa?.root_phon}], step=${wa?.analysis_step}, occ=${wa?.total_occurrences}) → ${wm?.length||0} sens`);
    console.log(`  concepts: [${concepts.join(' | ')}]`);
    if (wm && wm.length) wm.slice(0, 15).forEach(x => console.log(`    - [${x.concept}] ${x.sense} (${x.status})`));
  }
}
run().catch(console.error);
