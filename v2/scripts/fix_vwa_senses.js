const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Fix: align sense_chosen in VWA with actual senses in word_meanings
const fixes = [
  { word_key: 'qwm', new_sense: 'se lever' },
  { word_key: 'rja', new_sense: 'retourner' },
  { word_key: 'hkm', new_sense: 'juger' }
];

(async () => {
  for (const f of fixes) {
    // get current VWA
    const { data: vwa } = await db.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 348).eq('word_key', f.word_key).single();
    const axes = vwa.analysis_axes;
    axes.sense_chosen = f.new_sense;
    const { error } = await db.from('verse_word_analyses').update({
      sense_chosen: f.new_sense,
      analysis_axes: axes
    }).eq('id', vwa.id);
    if (error) console.log('ERR', f.word_key, error.message);
    else console.log('OK', f.word_key, '->', f.new_sense);
  }
})();
