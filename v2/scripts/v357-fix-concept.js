const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

function clean(s) {
  if (!s) return s;
  return s
    .replace(/\bce concept\b/g, 'ce sens')
    .replace(/\ble concept\b/g, 'le sens')
    .replace(/\bconcept au nom ambigu\b/g, 'sens au nom ambigu')
    .replace(/\bconcept arabe\b/g, 'mot arabe')
    .replace(/\bconcept\b/g, 'sens');
}

async function run() {
  // Fix translation_explanation
  const { data: va } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 350).single();
  const te2 = clean(va.translation_explanation);
  const { error: e1 } = await db.from('verse_analyses').update({ translation_explanation: te2 }).eq('verse_id', 350);
  if (e1) console.error('TE err:', e1); else console.log('TE cleaned');
  
  // Fix VWA proof_ctx
  const { data: vwa } = await db.from('verse_word_analyses').select('*').eq('verse_id', 350);
  for (const v of vwa) {
    const axes = v.analysis_axes;
    let changed = false;
    for (const [cname, cv] of Object.entries(axes.concepts)) {
      const newPC = clean(cv.proof_ctx);
      if (newPC !== cv.proof_ctx) {
        cv.proof_ctx = newPC;
        changed = true;
      }
    }
    if (changed) {
      const { error } = await db.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', v.id);
      if (error) console.error(v.word_key, 'err:', error); else console.log(v.word_key, 'cleaned');
    }
  }
}
run().catch(console.error);
