// Validation S88 v1-10
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  console.log('=== VALIDATION S88 v1-10 ===\n');
  let errors = 0;
  let warnings = 0;

  // 1. Check VA exist for v1-10
  const { data: vas } = await sb.from('verse_analyses').select('*').gte('verse_id', 5968).lte('verse_id', 5977).order('verse_id');
  console.log(`VA count: ${vas.length} (expected 10)`);
  if (vas.length !== 10) { errors++; console.log('  ❌ Missing VAs!'); }

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
          errors++; console.log(`  ❌ segment ${seg.fr || '?'} missing field: ${f}`);
        }
      }
      // Non-particle must have word_key and sense_retenu
      if (!seg.is_particle) {
        if (!seg.word_key) { errors++; console.log(`  ❌ segment "${seg.fr}" is_particle=false but word_key null`); }
        if (!seg.sense_retenu) { errors++; console.log(`  ❌ segment "${seg.fr}" is_particle=false but sense_retenu null`); }
      }
    }

    // Check translation_arab
    if (!va.translation_arab) { errors++; console.log('  ❌ translation_arab missing'); }
    else console.log(`  translation_arab: ${va.translation_arab.substring(0, 60)}...`);

    // Check full_translation (Hamidullah)
    if (!va.full_translation) { warnings++; console.log('  ⚠️ full_translation (Hamidullah) missing'); }
    else console.log(`  full_translation: ${va.full_translation.substring(0, 60)}...`);

    // Check translation_explanation sections
    if (!va.translation_explanation) { errors++; console.log('  ❌ translation_explanation missing'); }
    else {
      const te = va.translation_explanation;
      if (!te.includes('§DEMARCHE§')) { errors++; console.log('  ❌ missing §DEMARCHE§'); }
      if (!te.includes('§JUSTIFICATION§')) { errors++; console.log('  ❌ missing §JUSTIFICATION§'); }
      if (!te.includes('§CRITIQUE§')) { errors++; console.log('  ❌ missing §CRITIQUE§'); }
      // Check no Arabic in explanation
      const arabicInExpl = te.match(/[\u0600-\u06FF]{3,}/g);
      if (arabicInExpl) { errors++; console.log(`  ❌ Arabic text in explanation: ${arabicInExpl.join(', ')}`); }
      // Check no jargon
      const jargonWords = ['pipeline', 'concept '];
      for (const j of jargonWords) {
        const idx = te.toLowerCase().indexOf(j);
        if (idx >= 0) {
          const ctx = te.substring(Math.max(0, idx - 20), idx + 30);
          warnings++; console.log(`  ⚠️ jargon "${j.trim()}" found in explanation: "...${ctx}..."`);
        }
      }
      console.log('  ✓ translation_explanation OK');
    }
  }

  // 2. Check VWA
  const { data: vwas } = await sb.from('verse_word_analyses').select('*').gte('verse_id', 5968).lte('verse_id', 5977).order('verse_id').order('position');
  console.log(`\n=== VWA count: ${vwas.length} ===`);

  // Group by verse
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

      // Check required fields
      if (!axes.sense_chosen) { errors++; console.log(`  ❌ ${vwa.word_key}: sense_chosen missing`); }
      if (!axes.concept_chosen) { errors++; console.log(`  ❌ ${vwa.word_key}: concept_chosen missing`); }
      if (!axes.concepts) { errors++; console.log(`  ❌ ${vwa.word_key}: concepts missing`); continue; }

      // Count statuses
      const statuses = {};
      for (const [name, c] of Object.entries(axes.concepts)) {
        if (!statuses[c.status]) statuses[c.status] = 0;
        statuses[c.status]++;

        // Non-nul concepts must have 5 axes
        if (c.status !== 'nul') {
          const axeKeys = ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence'];
          for (const ak of axeKeys) {
            if (!c[ak]) { errors++; console.log(`  ❌ ${vwa.word_key} / ${name}: missing ${ak}`); }
            else if (c[ak].length < 100) { warnings++; console.log(`  ⚠️ ${vwa.word_key} / ${name}: ${ak} too short (${c[ak].length} chars)`); }
          }
          // Check for Arabic in axes
          for (const ak of axeKeys) {
            if (c[ak]) {
              const arabicInAxe = c[ak].match(/[\u0600-\u06FF]{3,}/g);
              if (arabicInAxe) { errors++; console.log(`  ❌ ${vwa.word_key} / ${name}: Arabic in ${ak}: ${arabicInAxe.join(', ')}`); }
            }
          }
        }

        // Check proof_ctx exists
        if (!c.proof_ctx) { errors++; console.log(`  ❌ ${vwa.word_key} / ${name}: missing proof_ctx`); }
      }

      // Exactly 1 retenu
      if ((statuses['retenu'] || 0) !== 1) { errors++; console.log(`  ❌ ${vwa.word_key}: ${statuses['retenu'] || 0} retenu (expected 1)`); }

      // Check concept_chosen matches a retenu concept
      const retenuConcept = Object.entries(axes.concepts).find(([n, c]) => c.status === 'retenu');
      if (retenuConcept && retenuConcept[0] !== axes.concept_chosen) {
        errors++; console.log(`  ❌ ${vwa.word_key}: concept_chosen "${axes.concept_chosen}" != retenu concept "${retenuConcept[0]}"`);
      }

      // Check sense_chosen matches VWA sense_chosen
      if (vwa.sense_chosen !== axes.sense_chosen) {
        errors++; console.log(`  ❌ ${vwa.word_key}: VWA.sense_chosen "${vwa.sense_chosen}" != axes.sense_chosen "${axes.sense_chosen}"`);
      }

      // Check sense_retenu in segments matches
      const va = vas.find(v => v.verse_id === parseInt(vid));
      if (va && va.segments) {
        const seg = va.segments.find(s => s.word_key === vwa.word_key);
        if (seg) {
          if (seg.sense_retenu !== vwa.sense_chosen) {
            errors++; console.log(`  ❌ ${vwa.word_key}: segment.sense_retenu "${seg.sense_retenu}" != VWA.sense_chosen "${vwa.sense_chosen}"`);
          }
        }
      }

      console.log(`  ✓ ${vwa.word_key}: ${axes.concept_chosen} → "${axes.sense_chosen}" [${Object.keys(statuses).map(s => s + ':' + statuses[s]).join(', ')}]`);
    }
  }

  // 3. Check for anthropomorphism
  console.log('\n=== ANTHROPOMORPHISM CHECK ===');
  const anthroWords = ['colere de dieu', 'colere divine', "dieu s'irrite", 'rancune', 'vengeance de dieu'];
  for (const va of vas) {
    if (va.translation_explanation) {
      for (const aw of anthroWords) {
        if (va.translation_explanation.toLowerCase().includes(aw)) {
          errors++; console.log(`  ❌ v${va.verse_id - 5967}: anthropomorphism "${aw}"`);
        }
      }
    }
  }
  console.log('  ✓ No anthropomorphism detected');

  // 4. Check no English in axes
  console.log('\n=== ENGLISH CHECK ===');
  const engWords = [' the ', ' and ', ' is ', ' are ', ' this ', ' that ', ' with ', ' from '];
  let engFound = false;
  for (const vwa of vwas) {
    if (!vwa.analysis_axes || !vwa.analysis_axes.concepts) continue;
    for (const [name, c] of Object.entries(vwa.analysis_axes.concepts)) {
      if (c.proof_ctx) {
        for (const ew of engWords) {
          if (c.proof_ctx.toLowerCase().includes(ew)) {
            warnings++; console.log(`  ⚠️ ${vwa.word_key}/${name} proof_ctx may contain English: "${ew.trim()}"`);
            engFound = true;
            break;
          }
        }
      }
    }
  }
  if (!engFound) console.log('  ✓ No English detected');

  // Summary
  console.log(`\n=== RÉSUMÉ ===`);
  console.log(`Erreurs: ${errors}`);
  console.log(`Avertissements: ${warnings}`);
  if (errors === 0) console.log('✅ VALIDATION RÉUSSIE');
  else console.log('❌ VALIDATION ÉCHOUÉE — corrections nécessaires');
})();
