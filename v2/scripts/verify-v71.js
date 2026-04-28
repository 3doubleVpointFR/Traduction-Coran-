const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 364; // V71 = 293+71
  const { data: va } = await db.from('verse_analyses').select('full_translation, translation_arab, translation_explanation, segments').eq('verse_id', vid).single();
  console.log('HAMIDULLAH: ' + va.full_translation);
  console.log('NOTRE:      ' + va.translation_arab);

  // Segments
  const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
  const fields = Object.keys(segs[0]);
  console.log('\nSegments fields: ' + fields.join(','));
  const emptyFr = segs.filter(s => !s.fr).length;
  const nullSenseRetenu = segs.filter(s => !s.is_particle && s.word_key && !s.sense_retenu).length;
  console.log('  emptyFr=' + emptyFr + ' nullSenseRetenu=' + nullSenseRetenu);

  // VWA
  const { data: vwa } = await db.from('verse_word_analyses').select('position, word_key, sense_chosen, analysis_axes').eq('verse_id', vid).order('position');
  console.log('\nVWA (' + vwa.length + '):');
  for (const v of vwa) {
    const a = typeof v.analysis_axes === 'string' ? JSON.parse(v.analysis_axes) : v.analysis_axes;
    const isV3 = !!a.concepts;
    console.log('  pos=' + v.position + ' ' + v.word_key + ' → ' + a.concept_chosen + ' / ' + v.sense_chosen + ' V3=' + isV3);
  }

  // Check meaning_type de chaque sense_chosen
  console.log('\nCheck meaning_type accessibility :');
  for (const v of vwa) {
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', v.word_key).maybeSingle();
    if (!wa) { console.log('  ' + v.word_key + ': word_analyses MANQUANT'); continue; }
    const { data: wm } = await db.from('word_meanings').select('meaning_type').eq('analysis_id', wa.id).eq('sense', v.sense_chosen);
    const types = (wm || []).map(m => m.meaning_type);
    const ok = types.includes('etymology') || types.includes('quranic');
    console.log('  ' + v.word_key + ' "' + v.sense_chosen + '": ' + types.join(',') + (ok ? ' ✓' : ' ❌'));
  }

  // Vérifier doublons racine
  console.log('\nCheck doublons word_analyses pour chaque racine utilisée :');
  for (const v of vwa) {
    const { data: wa } = await db.from('word_analyses').select('id,word_key,root_ar').eq('word_key', v.word_key).maybeSingle();
    if (!wa) continue;
    const { data: dupes } = await db.from('word_analyses').select('word_key,root_ar').eq('root_ar', wa.root_ar);
    if (dupes.length > 1) {
      const others = dupes.filter(d => d.word_key !== v.word_key).map(d => d.word_key);
      console.log('  ⚠ ' + v.word_key + ' (root=' + wa.root_ar + ') : doublons existent → [' + others.join(', ') + ']');
    }
  }

  // §DEMARCHE§ intro
  const demStart = va.translation_explanation.indexOf('§DEMARCHE§');
  const justStart = va.translation_explanation.indexOf('§JUSTIFICATION§');
  const critStart = va.translation_explanation.indexOf('§CRITIQUE§');
  const demarche = va.translation_explanation.substring(demStart + 10, justStart).trim();
  console.log('\n=== §DEMARCHE§ intro ===');
  console.log(demarche.split('\n\n')[0]);

  console.log('\n=== §CRITIQUE§ ===');
  console.log(va.translation_explanation.substring(critStart));
}
run().catch(console.error);
