const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  // 1. Fix sense_chosen in VWA to match sense_retenu
  const fixes = {
    'hjj': 'disputer',    // was "disputé"
    'qwl': 'dire',        // was "dis"
    'slm': 'soumission',  // was "remis"
    'tba': 'suivre',      // was "suivi"
  };

  const {data:vwas} = await db.from('verse_word_analyses').select('id,word_key,analysis_axes').eq('verse_id',313);
  let fixCount = 0;
  for(const vwa of vwas) {
    if(fixes[vwa.word_key]) {
      const axes = vwa.analysis_axes;
      axes.sense_chosen = fixes[vwa.word_key];
      const {error} = await db.from('verse_word_analyses').update({analysis_axes: axes}).eq('id',vwa.id);
      if(error) console.log('ERROR fixing ' + vwa.word_key + ':', error.message);
      else { console.log(vwa.word_key + ': sense_chosen → ' + fixes[vwa.word_key]); fixCount++; }
    }
  }
  console.log(fixCount + ' sense_chosen fixés');

  // 2. Add VWA for slm pos=16 and slm pos=19
  const slmVwa = vwas.find(v => v.word_key === 'slm');
  const slmAxes = slmVwa.analysis_axes;

  const newVwas = [
    {verse_id: 313, word_key: 'slm', position: 16, analysis_axes: slmAxes},
    {verse_id: 313, word_key: 'slm', position: 19, analysis_axes: slmAxes},
  ];

  const {error:e2} = await db.from('verse_word_analyses').insert(newVwas);
  if(e2) console.log('ERROR inserting slm VWA:', e2.message);
  else console.log('2 VWA slm ajoutées (pos=16, pos=19)');

  console.log('Done');
})();
