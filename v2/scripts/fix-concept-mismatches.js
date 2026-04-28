/**
 * Corrige les VWA dont concept_chosen n'existe pas dans word_meanings.
 *
 * Stratégie :
 * - Groupe A (la racine a des concepts valides en base) :
 *     fuzzy-match concept_chosen → concept valide le plus proche.
 *     Réécrit analysis_axes.concept_chosen + reconstruit concepts dict
 *     avec les vrais noms (les senses sont préservés).
 * - Groupe B (la racine n'a aucun concept en base) :
 *     enrichit word_meanings en ajoutant les concepts inventés (avec leurs senses)
 *     comme nouvelles lignes meaning_type='etymology'.
 *     Si la racine n'a même pas d'entrée word_analyses, on skip et on signale.
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Normalisation pour comparaison fuzzy
function norm(s) {
  return (s || '').toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip accents
    .replace(/[^a-z0-9]/g, ' ')
    .trim();
}

function tokens(s) {
  return new Set(norm(s).split(/\s+/).filter(t => t.length > 2));
}

// Score de similarité : Jaccard sur tokens + bonus si un token commun
function similarity(a, b) {
  const ta = tokens(a), tb = tokens(b);
  if (ta.size === 0 || tb.size === 0) return 0;
  let inter = 0;
  for (const t of ta) if (tb.has(t)) inter++;
  const union = new Set([...ta, ...tb]).size;
  return inter / union;
}

// Trouve le meilleur match parmi des candidats
function bestMatch(target, candidates) {
  let best = null, bestScore = 0;
  for (const c of candidates) {
    const s = similarity(target, c);
    if (s > bestScore) { bestScore = s; best = c; }
  }
  return { match: best, score: bestScore };
}

async function run() {
  // 1. Charger word_analyses (paginé)
  const was = [];
  let waOff = 0;
  while (true) {
    const { data } = await db.from('word_analyses').select('id, word_key').range(waOff, waOff + 999);
    if (!data || data.length === 0) break;
    was.push(...data);
    if (data.length < 1000) break;
    waOff += 1000;
  }
  const waIdByKey = {};
  for (const w of was) waIdByKey[w.word_key] = w.id;
  const wkById = Object.fromEntries(was.map(w => [w.id, w.word_key]));
  console.log(`Chargé ${was.length} word_analyses.`);

  // 2. Charger tous les word_meanings (paginé)
  const conceptsByKey = {};
  let off = 0;
  while (true) {
    const { data } = await db.from('word_meanings').select('analysis_id, concept').range(off, off + 999);
    if (!data || data.length === 0) break;
    for (const m of data) {
      const key = wkById[m.analysis_id];
      if (!key) continue;
      if (!conceptsByKey[key]) conceptsByKey[key] = new Set();
      if (m.concept) conceptsByKey[key].add(m.concept);
    }
    if (data.length < 1000) break;
    off += 1000;
  }

  // 3. Charger toutes les VWA
  const allVwa = [];
  off = 0;
  while (true) {
    const { data } = await db.from('verse_word_analyses')
      .select('id, verse_id, word_key, position, analysis_axes')
      .range(off, off + 999);
    if (!data || data.length === 0) break;
    allVwa.push(...data);
    if (data.length < 1000) break;
    off += 1000;
  }

  // 4. Détecter les mismatches
  const mismatches = [];
  for (const v of allVwa) {
    const cc = v.analysis_axes?.concept_chosen;
    if (!cc) continue;
    const validSet = conceptsByKey[v.word_key];
    if (!validSet || !validSet.has(cc)) {
      mismatches.push(v);
    }
  }

  console.log(`\nDétecté ${mismatches.length} VWA avec mismatch.\n`);

  // 5. Trier en groupes
  const groupA = []; // racine a des concepts valides
  const groupB_hasWA = []; // racine pas de concepts mais a une word_analyses
  const groupB_noWA = []; // racine n'a même pas de word_analyses

  for (const v of mismatches) {
    const validSet = conceptsByKey[v.word_key];
    if (validSet && validSet.size > 0) {
      groupA.push(v);
    } else if (waIdByKey[v.word_key]) {
      groupB_hasWA.push(v);
    } else {
      groupB_noWA.push(v);
    }
  }

  console.log(`Groupe A (fuzzy-match) : ${groupA.length}`);
  console.log(`Groupe B (enrichir word_meanings) : ${groupB_hasWA.length}`);
  console.log(`Groupe C (racine sans word_analyses) : ${groupB_noWA.length}`);

  // ===== GROUPE A : fuzzy-match =====
  console.log(`\n=== GROUPE A : fuzzy-match ===\n`);
  let fixedA = 0, skippedA = 0;
  for (const v of groupA) {
    const validList = [...conceptsByKey[v.word_key]];
    const cc = v.analysis_axes.concept_chosen;
    const { match, score } = bestMatch(cc, validList);
    if (!match || score < 0.3) {
      console.log(`  ⚠ skip ${v.word_key} pos=${v.position} : "${cc}" → pas de match (best="${match}" score=${score.toFixed(2)})`);
      skippedA++;
      continue;
    }

    // Reconstruit concepts en remplaçant le mauvais nom par le bon
    const oldConcepts = v.analysis_axes.concepts || {};
    const newConcepts = {};
    for (const [name, body] of Object.entries(oldConcepts)) {
      const renamed = (name === cc) ? match : name;
      newConcepts[renamed] = { ...body };
    }
    // S'assurer que tous les concepts valides sont présents (status nul pour les non-retenus)
    for (const validC of validList) {
      if (!newConcepts[validC]) {
        newConcepts[validC] = { senses: [], status: 'nul', proof_ctx: 'Hors sujet.' };
      }
    }
    // Marquer le match comme retenu
    if (newConcepts[match]) newConcepts[match].status = 'retenu';

    const newAxes = {
      ...v.analysis_axes,
      concept_chosen: match,
      concepts: newConcepts,
    };

    const { error } = await db.from('verse_word_analyses').update({ analysis_axes: newAxes }).eq('id', v.id);
    if (error) { console.log(`  ❌ err ${v.id}: ${error.message}`); skippedA++; continue; }
    console.log(`  ✓ ${v.word_key} pos=${v.position} : "${cc}" → "${match}" (score=${score.toFixed(2)})`);
    fixedA++;
  }

  // ===== GROUPE B : enrichir word_meanings =====
  console.log(`\n=== GROUPE B : enrichir word_meanings ===\n`);
  let fixedB = 0;
  // Grouper par word_key, collecter concept→senses depuis analysis_axes
  const enrichByKey = {};
  for (const v of groupB_hasWA) {
    const key = v.word_key;
    if (!enrichByKey[key]) enrichByKey[key] = {};
    const concepts = v.analysis_axes?.concepts || {};
    for (const [name, body] of Object.entries(concepts)) {
      if (!enrichByKey[key][name]) enrichByKey[key][name] = new Set();
      for (const s of body.senses || []) enrichByKey[key][name].add(s);
    }
  }

  for (const [key, concepts] of Object.entries(enrichByKey)) {
    const aId = waIdByKey[key];
    if (!aId) continue;
    let order = 0;
    for (const [conceptName, senseSet] of Object.entries(concepts)) {
      for (const sense of senseSet) {
        const { error } = await db.from('word_meanings').insert({
          analysis_id: aId,
          concept: conceptName,
          sense: sense,
          status: 'nul',
          proof_ctx: '',
          display_order: order++,
          meaning_type: 'etymology',
          description: '',
        });
        if (error && !error.message.includes('duplicate')) {
          console.log(`  ❌ ${key} "${conceptName}/${sense}": ${error.message}`);
          continue;
        }
        fixedB++;
      }
    }
    console.log(`  ✓ ${key} : ${Object.keys(concepts).length} concepts ajoutés (${[...Object.values(concepts)].reduce((a,b)=>a+b.size,0)} senses)`);
  }

  // ===== GROUPE C : signaler =====
  console.log(`\n=== GROUPE C : racines sans word_analyses (signalement) ===\n`);
  const orphanKeys = new Set(groupB_noWA.map(v => v.word_key));
  console.log(`  ${orphanKeys.size} racines orphelines : ${[...orphanKeys].join(', ')}`);

  console.log(`\n\n╔═══ RÉCAPITULATIF ═══╗`);
  console.log(`Groupe A (fuzzy)      : ${fixedA} corrigés / ${skippedA} skippés`);
  console.log(`Groupe B (enrichi)    : ${fixedB} word_meanings ajoutés (${Object.keys(enrichByKey).length} racines)`);
  console.log(`Groupe C (orphelins)  : ${orphanKeys.size} racines à créer manuellement`);
}

run().catch(e => { console.error(e); process.exit(1); });
