// Fix S89 v1-10 validation errors
// 1. Fix missing accents in concept_chosen and sense_chosen in VWA
// 2. Fix missing accents in sense_retenu in segments
// 3. Fix v6-10 translation_arab (contains Arabic instead of French)
// 4. Fix jargon "concept" in translation_explanation and axes
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  console.log('=== FIX S89 VALIDATION ERRORS ===\n');

  // Fix 1: VWA concept_chosen accent fixes
  const conceptFixes = [
    { verse_id: 5994, word_key: 'fjr', old: 'Commencement/Lumiere', new_: 'Commencement/Lumière' },
    { verse_id: 5995, word_key: 'eshr', old: 'Nombre/Completude', new_: 'Nombre/Complétude' },
    { verse_id: 5996, word_key: 'wtr', old: 'Unite/Imparite', new_: 'Unité/Imparité' },
    { verse_id: 5995, word_key: 'lyl', old: 'Nuit/Obscurite', new_: 'Nuit/Obscurité' },
    { verse_id: 5997, word_key: 'lyl', old: 'Nuit/Obscurite', new_: 'Nuit/Obscurité' },
    { verse_id: 5996, word_key: 'shfe', old: 'Parite/Couple', new_: 'Parité/Couple' },
    { verse_id: 6001, word_key: 'mvl', old: 'Ressemblance/Identite', new_: 'Ressemblance/Identité' },
    { verse_id: 6002, word_key: 'jwb', old: 'Traversee/Percement', new_: 'Traversée/Percement' },
    { verse_id: 5999, word_key: 'rbb', old: 'Seigneurie/Autorite bienveillante', new_: 'Seigneurie/Autorité bienveillante' },
    { verse_id: 6001, word_key: 'xlq', old: 'Creation/Production', new_: 'Création/Production' },
    { verse_id: 6002, word_key: 'wdy_v', old: 'Vallee/Cours d\'eau', new_: 'Vallée/Cours d\'eau' },
    { verse_id: 6001, word_key: 'bld', old: 'Territoire/Cite', new_: 'Territoire/Cité' },
    { verse_id: 6002, word_key: 'Sxr', old: 'Roche/Solidite', new_: 'Roche/Solidité' },
  ];

  for (const fix of conceptFixes) {
    const { data } = await sb.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', fix.verse_id).eq('word_key', fix.word_key);
    if (!data || data.length === 0) { console.log(`  SKIP ${fix.word_key} v${fix.verse_id} not found`); continue; }
    const axes = data[0].analysis_axes;
    if (axes.concept_chosen === fix.old) {
      axes.concept_chosen = fix.new_;
      console.log(`  Fixed concept_chosen: ${fix.word_key} v${fix.verse_id} → ${fix.new_}`);
    }
    // Also fix concept names in the concepts object
    if (axes.concepts && axes.concepts[fix.old]) {
      axes.concepts[fix.new_] = axes.concepts[fix.old];
      delete axes.concepts[fix.old];
      console.log(`  Fixed concept name: ${fix.old} → ${fix.new_}`);
    }
    await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', data[0].id);
  }

  // Fix 2: sense_retenu in segments
  const segFixes = [
    { verse_id: 5997, word_key: 'sry', old_sense: "s'ecouler", new_sense: "couler" },
    { verse_id: 5998, word_key: 'qsm', old_sense: "serment", new_sense: "jurer (qasam)" },
    { verse_id: 5998, word_key: 'hjr', old_sense: "raison", new_sense: "interdit" },
    { verse_id: 6001, word_key: 'xlq', old_sense: "creer", new_sense: "créer" },
    { verse_id: 6001, word_key: 'bld', old_sense: "cite", new_sense: "cité" },
    { verse_id: 6002, word_key: 'jwb', old_sense: "tailler", new_sense: "creuser" },
    { verse_id: 6002, word_key: 'wdy_v', old_sense: "vallee", new_sense: "vallée" },
  ];

  for (const fix of segFixes) {
    const { data } = await sb.from('verse_analyses').select('id, segments').eq('verse_id', fix.verse_id);
    if (!data || data.length === 0) continue;
    let segs = data[0].segments;
    if (typeof segs === 'string') segs = JSON.parse(segs);
    let changed = false;
    for (const s of segs) {
      if (s.word_key === fix.word_key && s.sense_retenu === fix.old_sense) {
        s.sense_retenu = fix.new_sense;
        changed = true;
      }
    }
    if (changed) {
      await sb.from('verse_analyses').update({ segments: segs }).eq('id', data[0].id);
      console.log(`  Fixed segment sense_retenu: ${fix.word_key} v${fix.verse_id} → ${fix.new_sense}`);
    }
  }

  // Also fix VWA sense_chosen for those
  const senseChosenFixes = [
    { verse_id: 5997, word_key: 'sry', new_sense: "couler" },
    { verse_id: 5998, word_key: 'qsm', new_sense: "jurer (qasam)" },
    { verse_id: 5998, word_key: 'hjr', new_sense: "interdit" },
    { verse_id: 6001, word_key: 'xlq', new_sense: "créer" },
    { verse_id: 6001, word_key: 'bld', new_sense: "cité" },
    { verse_id: 6002, word_key: 'jwb', new_sense: "creuser" },
    { verse_id: 6002, word_key: 'wdy_v', new_sense: "vallée" },
  ];

  for (const fix of senseChosenFixes) {
    const { data } = await sb.from('verse_word_analyses').select('id, analysis_axes, sense_chosen').eq('verse_id', fix.verse_id).eq('word_key', fix.word_key);
    if (!data || data.length === 0) continue;
    const axes = data[0].analysis_axes;
    axes.sense_chosen = fix.new_sense;
    await sb.from('verse_word_analyses').update({ sense_chosen: fix.new_sense, analysis_axes: axes }).eq('id', data[0].id);
    console.log(`  Fixed VWA sense_chosen: ${fix.word_key} v${fix.verse_id} → ${fix.new_sense}`);
  }

  // Fix 3: v6-10 translation_arab (stored Arabic instead of French)
  const translationFixes = [
    { verse_id: 5999, translation_arab: "N'as-tu pas vu comment ton seigneur a agi envers Ad" },
    { verse_id: 6000, translation_arab: "Iram aux piliers" },
    { verse_id: 6001, translation_arab: "Dont la pareille n'a pas été créée dans les cités" },
    { verse_id: 6002, translation_arab: "Et Thamoud qui ont taillé la roche dans la vallée" },
    { verse_id: 6003, translation_arab: "Et Pharaon aux piquets" },
  ];

  for (const fix of translationFixes) {
    const { data } = await sb.from('verse_analyses').select('id, translation_arab').eq('verse_id', fix.verse_id);
    if (!data || data.length === 0) continue;
    // Check if it has Arabic chars
    if (/[\u0600-\u06FF]/.test(data[0].translation_arab)) {
      await sb.from('verse_analyses').update({ translation_arab: fix.translation_arab }).eq('id', data[0].id);
      console.log(`  Fixed translation_arab v${fix.verse_id}`);
    } else {
      console.log(`  SKIP translation_arab v${fix.verse_id} (already French)`);
    }
  }

  // Fix 4: Remove jargon "concept" from translation_explanation v2
  const { data: v2 } = await sb.from('verse_analyses').select('id, translation_explanation').eq('verse_id', 5995);
  if (v2 && v2.length > 0 && v2[0].translation_explanation) {
    let te = v2[0].translation_explanation;
    te = te.replace(/\bconcept\b/gi, 'sens');
    await sb.from('verse_analyses').update({ translation_explanation: te }).eq('id', v2[0].id);
    console.log('  Fixed jargon "concept" in v2 translation_explanation');
  }

  // Fix jargon in wtr axes
  const { data: wtrVwa } = await sb.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 5996).eq('word_key', 'wtr');
  if (wtrVwa && wtrVwa.length > 0) {
    const axes = wtrVwa[0].analysis_axes;
    let changed = false;
    for (const [cname, cdata] of Object.entries(axes.concepts || {})) {
      for (const key of ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence','proof_ctx']) {
        if (cdata[key] && /\bconcept\b/i.test(cdata[key])) {
          cdata[key] = cdata[key].replace(/\bconcept\b/gi, 'sens');
          changed = true;
        }
      }
    }
    if (changed) {
      await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', wtrVwa[0].id);
      console.log('  Fixed jargon "concept" in wtr axes');
    }
  }

  // Fix accents in v1-5 translation_arab
  const accentFixes = [
    { verse_id: 5997, old: "Et par la nuit quand elle s'ecoule", new_: "Et par la nuit quand elle s'écoule" },
  ];
  for (const fix of accentFixes) {
    const { data } = await sb.from('verse_analyses').select('id, translation_arab').eq('verse_id', fix.verse_id);
    if (data && data.length > 0 && data[0].translation_arab === fix.old) {
      await sb.from('verse_analyses').update({ translation_arab: fix.new_ }).eq('id', data[0].id);
      console.log(`  Fixed accent in translation_arab v${fix.verse_id}`);
    }
  }

  console.log('\n=== FIXES TERMINÉS ===');
})();
