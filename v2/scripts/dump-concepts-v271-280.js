const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // All keys from V271-280 segments (important type only)
  const keys = [
    'bdw','sdq','nem','xfy','aty','fq r','khyr','kfr','sya','eml','khbr',
    'hdy','nfq','nfs','bghy','wjh','wfy','zlm',
    'dh y','h s r','s b l','t w e','d r b','a r d','h s b','j h l','gh n y','e f f','e r f','s w m','s a l','n w s','l h f','n f q','kh y r','e l m',
    'mlk','lyl','nhr','srr','eln','ajr','end','rbb','khw','hzn',
    'akl','rbw','qwm','dhwy','xbt','mss','qwl','bye','hll','hrm','jaa','wez','nhy','slf','amr','ewd','shb','nwr',
    'mhq','hbb','kll','athm',
    'amn','slh','slw','zkw','xwf',
    'wqy','bqy','kwn','dhru',
    'fel','adhn','hrb','rsl','twb','ras','mwl',
    'esr','nzr','ysr','elm'
  ];

  const { data: was } = await supabase.from('word_analyses').select('id,word_key').in('word_key', keys);
  const idByKey = {};
  for (const wa of (was||[])) idByKey[wa.word_key] = wa.id;

  // Also special keys with spaces
  const specialKeys = ['fq r','dh y','h s r','s b l','t w e','d r b','a r d','h s b','j h l','gh n y','e f f','e r f','s w m','s a l','n w s','l h f','n f q','kh y r','e l m'];

  const ids = Object.values(idByKey);
  const batchSize = 50;
  const allWms = [];
  for (let i = 0; i < ids.length; i += batchSize) {
    const batch = ids.slice(i, i+batchSize);
    const { data } = await supabase.from('word_meanings').select('analysis_id,concept,sense,display_order')
      .in('analysis_id', batch).not('concept','is',null).order('analysis_id').order('display_order');
    allWms.push(...(data||[]));
  }

  const byAid = {};
  for (const wm of allWms) {
    if (!byAid[wm.analysis_id]) byAid[wm.analysis_id] = {};
    if (!byAid[wm.analysis_id][wm.concept]) byAid[wm.analysis_id][wm.concept] = [];
    byAid[wm.analysis_id][wm.concept].push(wm.sense);
  }

  const result = {};
  for (const [key, id] of Object.entries(idByKey)) {
    result[key] = { id, concepts: byAid[id] || {} };
  }

  console.log('=== CONCEPTS PAR RACINE ===');
  for (const [key, v] of Object.entries(result)) {
    const cnames = Object.keys(v.concepts);
    console.log(`"${key}" (aid=${v.id}): ${cnames.join(' | ')}`);
  }

  console.log('\n=== DETAIL ===');
  for (const [key, v] of Object.entries(result)) {
    console.log(`\n--- ${key} (aid=${v.id}) ---`);
    for (const [c, senses] of Object.entries(v.concepts)) {
      console.log(`  "${c}": ${JSON.stringify(senses)}`);
    }
  }
}
main().catch(console.error);
