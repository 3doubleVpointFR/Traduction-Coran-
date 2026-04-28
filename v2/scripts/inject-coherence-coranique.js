/**
 * Injecte l'axe cohérence coranique dans le proof_ctx du concept retenu
 * pour chaque VWA.
 *
 * Source : word_meanings.axe4_coherence (déjà rempli pour la plupart des sens)
 *
 * Format ajouté au proof_ctx :
 *   ...proof_ctx existant...
 *
 *   **Cohérence coranique** : [axe4_coherence du sense retenu]
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const MARKER = '**Cohérence coranique**';

async function run() {
  // 1. Charger word_analyses (paginé)
  const was = [];
  let off = 0;
  while (true) {
    const { data } = await db.from('word_analyses').select('id, word_key').range(off, off + 999);
    if (!data || data.length === 0) break;
    was.push(...data);
    if (data.length < 1000) break;
    off += 1000;
  }
  const waIdByKey = Object.fromEntries(was.map(w => [w.word_key, w.id]));

  // 2. Charger word_meanings (paginé) → indexer par (analysis_id, concept, sense)
  const wmIndex = {};
  off = 0;
  while (true) {
    const { data } = await db.from('word_meanings')
      .select('analysis_id, concept, sense, axe4_coherence')
      .range(off, off + 999);
    if (!data || data.length === 0) break;
    for (const m of data) {
      const key = `${m.analysis_id}|${m.concept}|${m.sense}`;
      wmIndex[key] = m.axe4_coherence;
    }
    if (data.length < 1000) break;
    off += 1000;
  }
  console.log(`Index word_meanings : ${Object.keys(wmIndex).length} entrées`);

  // 3. Charger toutes les VWA avec concept_chosen
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

  // 4. Pour chaque VWA, injecter le axe4_coherence dans le proof_ctx du concept retenu
  let injected = 0, skippedAlready = 0, skippedNoData = 0, skippedNoConcept = 0;
  const missingByKey = {}; // pour rapport final

  for (const v of allVwa) {
    const ax = v.analysis_axes;
    const cc = ax?.concept_chosen;
    const sc = ax?.sense_chosen;
    if (!cc || !sc || !ax.concepts || !ax.concepts[cc]) {
      skippedNoConcept++;
      continue;
    }
    const proofCtx = ax.concepts[cc].proof_ctx || '';
    if (proofCtx.includes(MARKER)) {
      skippedAlready++;
      continue;
    }

    // Chercher axe4_coherence : (analysis_id, concept_chosen, sense_chosen)
    const aid = waIdByKey[v.word_key];
    if (!aid) { skippedNoData++; continue; }
    let coherence = wmIndex[`${aid}|${cc}|${sc}`];
    if (!coherence) {
      // Fallback : chercher n'importe quel sense du même concept
      for (const k of Object.keys(wmIndex)) {
        if (k.startsWith(`${aid}|${cc}|`) && wmIndex[k]) {
          coherence = wmIndex[k];
          break;
        }
      }
    }
    if (!coherence) {
      skippedNoData++;
      const mk = `${v.word_key} (${cc})`;
      missingByKey[mk] = (missingByKey[mk] || 0) + 1;
      continue;
    }

    ax.concepts[cc].proof_ctx = proofCtx
      ? `${proofCtx}\n\n${MARKER} : ${coherence}`
      : `${MARKER} : ${coherence}`;

    const { error } = await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', v.id);
    if (error) { console.log('❌', v.id, error.message); continue; }
    injected++;
  }

  console.log(`\n╔══ RÉCAPITULATIF ══╗`);
  console.log(`✓ Injectés      : ${injected}`);
  console.log(`⊙ Déjà présent  : ${skippedAlready}`);
  console.log(`⊘ Pas de data   : ${skippedNoData}  (axe4_coherence vide)`);
  console.log(`⊘ Pas de concept: ${skippedNoConcept}`);

  if (Object.keys(missingByKey).length > 0) {
    console.log(`\n=== Sens sans axe4_coherence (à enrichir manuellement / via LLM) ===`);
    const sorted = Object.entries(missingByKey).sort((a, b) => b[1] - a[1]).slice(0, 30);
    for (const [k, n] of sorted) console.log(`  ${k} (${n}x)`);
  }
}
run().catch(e => { console.error(e); process.exit(1); });
