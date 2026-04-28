// S3:V61 — step0b : vérifier existence + richesse de toutes les racines du verset
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// racines candidates pour V61 (à partir du segments_step1 LLM + analyse humaine)
const CANDIDATE_KEYS = [
  'mny',  // man (qui)
  'hjj',  // ḥājja (argumenter)
  'bed',  // baʿd (après)
  'jyy',  // jāʾa (venir) - possible variante 'jya'
  'jya',
  'elm',  // ʿilm (savoir)
  'qwl',  // qul (dire)
  'elw',  // taʿālaw (venez!) - racine ع ل و
  'dew',  // nadʿu (nous appelons) - racine د ع و
  'dea',
  'bny',  // abnāʾ (fils)
  'nsw',  // nisāʾ (femmes)
  'nsa',
  'nfs',  // anfus (soi-même)
  'bhl',  // nabtahil (invoquer humblement)
  'jel',  // najʿal (placer)
  'len',  // laʿnat (malédiction/éloignement)
  'alh',  // allāh
  'kdhb'  // kādhibīn (menteurs)
];

async function run() {
  for (const key of CANDIDATE_KEYS) {
    const { data: wa } = await db.from('word_analyses').select('id,word_key,root_phonetic,total_occurrences,analysis_step').eq('word_key', key);
    if (!wa || !wa.length) {
      console.log('MISSING key=' + key);
      continue;
    }
    for (const row of wa) {
      const { data: wm } = await db.from('word_meanings').select('id,concept_name,sense').eq('analysis_id', row.id);
      const senseCount = wm ? wm.length : 0;
      const concepts = new Set((wm || []).map(m => m.concept_name).filter(Boolean));
      console.log(
        'key=' + row.word_key +
        ' aid=' + row.id +
        ' root_phon=' + (row.root_phonetic || '') +
        ' step=' + row.analysis_step +
        ' occ=' + row.total_occurrences +
        ' senses=' + senseCount +
        ' concepts=' + concepts.size +
        (senseCount < 5 ? '  <<< SUSPECT' : '')
      );
    }
  }
}
run().catch(e => { console.error(e); process.exit(1); });
