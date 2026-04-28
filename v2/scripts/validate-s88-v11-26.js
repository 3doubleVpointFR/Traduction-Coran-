// Validation S88 v11-26
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  console.log('=== VALIDATION S88 v11-26 ===\n');
  let errors = 0;
  let warnings = 0;

  // 1. Check VA exist for v11-26 (IDs 5978-5993)
  const { data: vas } = await sb.from('verse_analyses').select('*').gte('verse_id', 5978).lte('verse_id', 5993).order('verse_id');
  console.log(`VA count: ${vas.length} (expected 16)`);
  if (vas.length !== 16) { errors++; console.log('  ❌ Missing VAs!'); }

  for (const va of vas) {
    const vid = va.verse_id;
    const vnum = vid - 5967;
    console.log(`\n--- v${vnum} (${vid}) ---`);

    // Check segments
    if (!va.segments || !Array.isArray(va.segments)) {
      errors++; console.log('  ❌ segments missing or not array');
      continue;
    }
    console.log(`  segments: ${va.segments.length}`);

    // Check each segment has required fields
    for (const seg of va.segments) {
      const fields = ['fr', 'pos', 'phon', 'arabic', 'word_key', 'is_particle', 'sense_retenu', 'position'];
      for (const f of fields) {
        if (seg[f] === undefined) {
          errors++; console.log(`  ❌ segment "${seg.fr || '?'}" missing field: ${f}`);
        }
      }
      // Non-particle with word_key must have sense_retenu
      if (!seg.is_particle && seg.word_key) {
        if (!seg.sense_retenu) { errors++; console.log(`  ❌ segment "${seg.fr}" has word_key but no sense_retenu`); }
      }
    }

    // Check translation_arab
    if (!va.translation_arab) { errors++; console.log('  ❌ translation_arab missing'); }
    else console.log(`  translation: ${va.translation_arab.substring(0, 70)}`);

    // Check full_translation (Hamidullah)
    if (!va.full_translation) { warnings++; console.log('  ⚠️ full_translation missing'); }

    // Check translation_explanation sections
    if (!va.translation_explanation) { errors++; console.log('  ❌ translation_explanation missing'); }
    else {
      const te = va.translation_explanation;
      if (!te.includes('§DEMARCHE§')) { errors++; console.log('  ❌ missing §DEMARCHE§'); }
      if (!te.includes('§JUSTIFICATION§')) { errors++; console.log('  ❌ missing §JUSTIFICATION§'); }
      if (!te.includes('§CRITIQUE§')) { errors++; console.log('  ❌ missing §CRITIQUE§'); }
      // Check no Arabic in explanation
      const arabicInExpl = te.match(/[\u0600-\u06FF]{3,}/g);
      if (arabicInExpl) { errors++; console.log(`  ❌ Arabic in explanation: ${arabicInExpl.slice(0,5).join(', ')}`); }
      // Check no jargon
      if (te.toLowerCase().includes('concept ') || te.toLowerCase().includes('pipeline')) {
        warnings++; console.log('  ⚠️ jargon found in explanation');
      }
    }
  }

  // 2. Check VWA
  const { data: vwas } = await sb.from('verse_word_analyses').select('*').gte('verse_id', 5978).lte('verse_id', 5993).order('verse_id').order('position');
  console.log(`\n=== VWA total: ${vwas.length} ===`);

  const byVerse = {};
  vwas.forEach(v => {
    if (!byVerse[v.verse_id]) byVerse[v.verse_id] = [];
    byVerse[v.verse_id].push(v);
  });

  for (const [vid, vwaList] of Object.entries(byVerse)) {
    const vnum = vid - 5967;
    console.log(`\n--- VWA v${vnum} (${vid}): ${vwaList.length} entries ---`);

    for (const vwa of vwaList) {
      const axes = vwa.analysis_axes;
      if (!axes) { errors++; console.log(`  ❌ ${vwa.word_key}: analysis_axes null`); continue; }
      if (!axes.sense_chosen) { errors++; console.log(`  ❌ ${vwa.word_key}: sense_chosen missing`); }
      if (!axes.concept_chosen) { errors++; console.log(`  ❌ ${vwa.word_key}: concept_chosen missing`); }
      if (!axes.concepts) { errors++; console.log(`  ❌ ${vwa.word_key}: concepts missing`); continue; }

      const statuses = {};
      for (const [name, c] of Object.entries(axes.concepts)) {
        if (!statuses[c.status]) statuses[c.status] = 0;
        statuses[c.status]++;

        if (c.status !== 'nul') {
          const axeKeys = ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence'];
          for (const ak of axeKeys) {
            if (!c[ak]) { errors++; console.log(`  ❌ ${vwa.word_key}/${name}: missing ${ak}`); }
            else if (c[ak].length < 100) { warnings++; console.log(`  ⚠️ ${vwa.word_key}/${name}: ${ak} short (${c[ak].length})`); }
          }
          // Check Arabic in axes
          for (const ak of axeKeys) {
            if (c[ak]) {
              const arab = c[ak].match(/[\u0600-\u06FF]{3,}/g);
              if (arab) { errors++; console.log(`  ❌ ${vwa.word_key}/${name}: Arabic in ${ak}`); }
            }
          }
        }
        if (!c.proof_ctx) { errors++; console.log(`  ❌ ${vwa.word_key}/${name}: missing proof_ctx`); }
      }

      // Exactly 1 retenu
      if ((statuses['retenu'] || 0) !== 1) { errors++; console.log(`  ❌ ${vwa.word_key}: ${statuses['retenu'] || 0} retenu`); }

      // concept_chosen matches retenu
      const ret = Object.entries(axes.concepts).find(([n, c]) => c.status === 'retenu');
      if (ret && ret[0] !== axes.concept_chosen) {
        errors++; console.log(`  ❌ ${vwa.word_key}: concept_chosen "${axes.concept_chosen}" != retenu "${ret[0]}"`);
      }

      // sense_chosen consistency
      if (vwa.sense_chosen !== axes.sense_chosen) {
        errors++; console.log(`  ❌ ${vwa.word_key}: VWA.sense "${vwa.sense_chosen}" != axes.sense "${axes.sense_chosen}"`);
      }

      // Check segment match
      const va = vas.find(v => v.verse_id === parseInt(vid));
      if (va && va.segments) {
        const seg = va.segments.find(s => s.word_key === vwa.word_key);
        if (seg && seg.sense_retenu !== vwa.sense_chosen) {
          errors++; console.log(`  ❌ ${vwa.word_key}: seg.sense "${seg.sense_retenu}" != "${vwa.sense_chosen}"`);
        }
      }

      console.log(`  ✓ ${vwa.word_key}: ${axes.concept_chosen} → "${axes.sense_chosen}" [${Object.keys(statuses).map(s => s+':'+statuses[s]).join(', ')}]`);
    }
  }

  // 3. Anthropomorphism check
  console.log('\n=== ANTHROPOMORPHISM CHECK ===');
  const anthro = ['colere de dieu', 'colere divine', "dieu s'irrite", 'vengeance de dieu'];
  let anthroFound = false;
  for (const va of vas) {
    if (va.translation_explanation) {
      for (const a of anthro) {
        if (va.translation_explanation.toLowerCase().includes(a)) {
          errors++; console.log(`  ❌ v${va.verse_id-5967}: "${a}"`);
          anthroFound = true;
        }
      }
    }
  }
  if (!anthroFound) console.log('  ✓ OK');

  // 4. Jargon "concept" in proof_ctx
  console.log('\n=== JARGON CHECK ===');
  let jargonFound = false;
  for (const vwa of vwas) {
    if (!vwa.analysis_axes || !vwa.analysis_axes.concepts) continue;
    for (const [name, c] of Object.entries(vwa.analysis_axes.concepts)) {
      if (c.proof_ctx && c.proof_ctx.toLowerCase().includes('concept ')) {
        // Check if it's the technical term, not "concept philosophique" etc.
        const matches = c.proof_ctx.match(/concept\s/gi);
        if (matches) {
          warnings++; console.log(`  ⚠️ ${vwa.word_key}/${name}: "concept" in proof_ctx`);
          jargonFound = true;
        }
      }
    }
  }
  if (!jargonFound) console.log('  ✓ OK');

  // Summary
  console.log(`\n=== RÉSUMÉ ===`);
  console.log(`Erreurs: ${errors}`);
  console.log(`Avertissements: ${warnings}`);
  if (errors === 0) console.log('✅ VALIDATION RÉUSSIE');
  else console.log('❌ VALIDATION ÉCHOUÉE — corrections nécessaires');
})();
