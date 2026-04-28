// S3:V61 — step0d : vérifier richesse racines avec colonnes correctes
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const CANDIDATE_KEYS = [
  'mny','hjj','bed','jyy','jya','elm','qwl','elw','dew','dea',
  'bny','nsw','nsa','nfs','bhl','jel','len','alh','kdhb','k','abn'
];

async function run() {
  for (const key of CANDIDATE_KEYS) {
    const { data: wa } = await db.from('word_analyses').select('*').eq('word_key', key);
    if (!wa || !wa.length) {
      console.log('MISSING key=' + key);
      continue;
    }
    for (const row of wa) {
      const { data: wm } = await db.from('word_meanings').select('id,concept,sense').eq('analysis_id', row.id);
      const senses = wm || [];
      const concepts = new Set(senses.map(m => m.concept).filter(Boolean));
      const flag = senses.length < 5 ? '  <<< SUSPECT' : '';
      console.log(
        'key=' + row.word_key +
        ' aid=' + row.id +
        ' root_ar=' + (row.root_ar || '') +
        ' step=' + row.analysis_step +
        ' occ=' + row.total_occurrences +
        ' senses=' + senses.length +
        ' concepts=' + concepts.size +
        flag
      );
    }
  }
}
run().catch(e => { console.error(e); process.exit(1); });
