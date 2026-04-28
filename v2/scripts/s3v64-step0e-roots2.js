const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const ROOTS = ['qwl','ahl','ktb','elw','klm','swy','byn','ebd','alh','shrk','shyy','axdh','bed','rbb','dwn','wly','shhd','slm'];

async function run() {
  for (const key of ROOTS) {
    const { data: wa } = await db.from('word_analyses').select('id,word_key,root_ar,analysis_step,total_occurrences').eq('word_key', key);
    if (!wa || !wa.length) {
      console.log('  [MANQUANT] ' + key);
      continue;
    }
    const aid = wa[0].id;
    const { data: wm } = await db.from('word_meanings').select('id,sense,concept_group').eq('analysis_id', aid);
    const n = wm ? wm.length : 0;
    const concepts = wm ? Array.from(new Set(wm.map(x => x.concept_group).filter(Boolean))) : [];
    console.log(key.padEnd(5) + ' aid=' + aid + ' root=' + wa[0].root_ar + ' step=' + wa[0].analysis_step + ' occ=' + wa[0].total_occurrences + ' → ' + n + ' sens');
    console.log('     concepts=' + JSON.stringify(concepts));
  }
}
run().catch(console.error);
