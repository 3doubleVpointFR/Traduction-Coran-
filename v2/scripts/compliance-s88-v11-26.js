// Compliance check S88 v11-26 against rules_pipeline_maison.md
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  console.log('=== COMPLIANCE CHECK S88 v11-26 ===\n');
  let issues = 0;

  const { data: vwas } = await sb.from('verse_word_analyses').select('*').gte('verse_id', 5978).lte('verse_id', 5993);
  const { data: vas } = await sb.from('verse_analyses').select('*').gte('verse_id', 5978).lte('verse_id', 5993);

  // 1. concept_chosen matches word_meanings
  console.log('--- 1. concept_chosen in word_meanings ---');
  let c1 = 0;
  for (const vwa of vwas) {
    if (!vwa.analysis_axes) continue;
    const cc = vwa.analysis_axes.concept_chosen;
    const { data: wa } = await sb.from('word_analyses').select('id').eq('word_key', vwa.word_key);
    if (wa && wa.length > 0) {
      const { data: wm } = await sb.from('word_meanings').select('concept').eq('analysis_id', wa[0].id);
      const names = [...new Set(wm.map(m => m.concept))];
      if (!names.includes(cc)) {
        c1++; console.log('  X ' + vwa.word_key + ' v' + (vwa.verse_id-5967) + ': "' + cc + '" not in: ' + names.join(', '));
      }
    }
  }
  console.log(c1 === 0 ? '  OK' : '  ' + c1 + ' issues');
  issues += c1;

  // 2. No Arabic in axes/proof_ctx
  console.log('--- 2. No Arabic in axes ---');
  let c2 = 0;
  for (const vwa of vwas) {
    if (!vwa.analysis_axes || !vwa.analysis_axes.concepts) continue;
    for (const [name, c] of Object.entries(vwa.analysis_axes.concepts)) {
      for (const f of ['proof_ctx','axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence']) {
        if (c[f] && c[f].match(/[\u0600-\u06FF]{3,}/)) { c2++; console.log('  X ' + vwa.word_key + '/' + name + '/' + f); }
      }
    }
  }
  console.log(c2 === 0 ? '  OK' : '  ' + c2 + ' issues');
  issues += c2;

  // 3. No Arabic in translation_explanation
  console.log('--- 3. No Arabic in explanations ---');
  let c3 = 0;
  for (const va of vas) {
    if (va.translation_explanation && va.translation_explanation.match(/[\u0600-\u06FF]{3,}/)) {
      c3++; console.log('  X v' + (va.verse_id-5967));
    }
  }
  console.log(c3 === 0 ? '  OK' : '  ' + c3 + ' issues');
  issues += c3;

  // 4. Three sections
  console.log('--- 4. Three sections ---');
  let c4 = 0;
  for (const va of vas) {
    if (!va.translation_explanation) { c4++; continue; }
    const te = va.translation_explanation;
    for (const s of ['DEMARCHE','JUSTIFICATION','CRITIQUE']) {
      if (!te.includes('§' + s + '§')) { c4++; console.log('  X v' + (va.verse_id-5967) + ': missing §' + s + '§'); }
    }
  }
  console.log(c4 === 0 ? '  OK' : '  ' + c4 + ' issues');
  issues += c4;

  // 5. Hamidullah
  console.log('--- 5. Hamidullah ---');
  let c5 = 0;
  for (const va of vas) {
    if (!va.full_translation) { c5++; console.log('  X v' + (va.verse_id-5967)); }
  }
  console.log(c5 === 0 ? '  OK' : '  ' + c5 + ' issues');
  issues += c5;

  // 6. No jargon
  console.log('--- 6. No jargon ---');
  let c6 = 0;
  for (const va of vas) {
    if (va.translation_explanation) {
      if (va.translation_explanation.includes('pipeline')) { c6++; }
      if (/\bconcept\b/i.test(va.translation_explanation)) { c6++; console.log('  X v' + (va.verse_id-5967) + ': concept in explanation'); }
    }
  }
  console.log(c6 === 0 ? '  OK' : '  ' + c6 + ' issues');
  issues += c6;

  // 7. Exactly 1 retenu
  console.log('--- 7. One retenu per VWA ---');
  let c7 = 0;
  for (const vwa of vwas) {
    if (!vwa.analysis_axes || !vwa.analysis_axes.concepts) continue;
    const n = Object.values(vwa.analysis_axes.concepts).filter(c => c.status === 'retenu').length;
    if (n !== 1) { c7++; console.log('  X ' + vwa.word_key + ': ' + n); }
  }
  console.log(c7 === 0 ? '  OK' : '  ' + c7 + ' issues');
  issues += c7;

  // 8. Segment consistency
  console.log('--- 8. Segment sense consistency ---');
  let c8 = 0;
  for (const va of vas) {
    if (!va.segments) continue;
    for (const seg of va.segments) {
      if (seg.word_key && !seg.is_particle) {
        const vwa = vwas.find(v => v.verse_id === va.verse_id && v.word_key === seg.word_key);
        if (vwa && seg.sense_retenu !== vwa.sense_chosen) {
          c8++; console.log('  X v' + (va.verse_id-5967) + ' ' + seg.word_key + ': "' + seg.sense_retenu + '" vs "' + vwa.sense_chosen + '"');
        }
      }
    }
  }
  console.log(c8 === 0 ? '  OK' : '  ' + c8 + ' issues');
  issues += c8;

  // 9. Positions
  console.log('--- 9. Position in segments ---');
  let c9 = 0;
  for (const va of vas) {
    if (!va.segments) continue;
    for (const seg of va.segments) {
      if (seg.position === undefined || seg.position === null) { c9++; }
    }
  }
  console.log(c9 === 0 ? '  OK' : '  ' + c9 + ' missing positions');
  issues += c9;

  // 10. No anthropomorphism
  console.log('--- 10. No anthropomorphism ---');
  let c10 = 0;
  const anthro = ['colere de dieu', 'colere divine', 'vengeance de dieu'];
  for (const va of vas) {
    if (va.translation_explanation) {
      for (const a of anthro) {
        if (va.translation_explanation.toLowerCase().includes(a)) { c10++; }
      }
    }
  }
  console.log(c10 === 0 ? '  OK' : '  ' + c10 + ' issues');
  issues += c10;

  console.log('\n=== TOTAL: ' + issues + ' issues ===');
  console.log(issues === 0 ? 'COMPLIANCE OK' : 'NEEDS FIXES');
})();
