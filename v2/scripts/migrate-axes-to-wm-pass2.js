const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// Extract axes from a concept data object
function extractAxes(cData) {
  if (!cData || typeof cData !== 'object') return null;
  const axes = {};
  if (cData.axe1_champ_lexical) axes.axe1_verset = cData.axe1_champ_lexical;
  else if (cData.axe1_verset) axes.axe1_verset = cData.axe1_verset;
  if (cData.axe2_versets_voisins) axes.axe2_voisins = cData.axe2_versets_voisins;
  else if (cData.axe2_voisins) axes.axe2_voisins = cData.axe2_voisins;
  if (cData.axe3_theme_sourate) axes.axe3_sourate = cData.axe3_theme_sourate;
  else if (cData.axe3_sourate) axes.axe3_sourate = cData.axe3_sourate;
  if (cData.axe4_coherence_coranique) axes.axe4_coherence = cData.axe4_coherence_coranique;
  else if (cData.axe4_coherence) axes.axe4_coherence = cData.axe4_coherence;
  if (cData.axe5_finalite_khalifa) axes.axe5_frequence = cData.axe5_finalite_khalifa;
  else if (cData.axe5_frequence) axes.axe5_frequence = cData.axe5_frequence;
  if (cData.resume) axes.proof_ctx = cData.resume;
  else if (cData.proof_ctx) axes.proof_ctx = cData.proof_ctx;
  if (Object.keys(axes).length === 0) return null;
  return axes;
}

async function main() {
  // Pass 2: For remaining word_meanings with no axes, use concept_chosen from VWA
  // even if concept name doesn't match (same word_key = same root, axes are per-verse anyway)
  console.log('=== PASS 2: Fallback — use concept_chosen axes for remaining mismatches ===\n');

  const PAGE = 1000;

  // Get word_meanings still missing axes
  let wmMissing = [];
  let from = 0;
  while (true) {
    const { data, error } = await supabase
      .from('word_meanings')
      .select('id, analysis_id, concept, sense')
      .is('axe1_verset', null)
      .range(from, from + PAGE - 1);
    if (error) { console.error('Error:', error.message); break; }
    if (!data || data.length === 0) break;
    wmMissing = wmMissing.concat(data);
    if (data.length < PAGE) break;
    from += PAGE;
  }
  console.log(`Still missing axes: ${wmMissing.length}`);

  // Get analysis_ids and map to word_keys
  const analysisIds = [...new Set(wmMissing.map(w => w.analysis_id).filter(Boolean))];
  const waMap = new Map();
  for (let i = 0; i < analysisIds.length; i += PAGE) {
    const batch = analysisIds.slice(i, i + PAGE);
    const { data } = await supabase.from('word_analyses').select('id, word_key').in('id', batch);
    for (const wa of (data || [])) waMap.set(wa.id, wa.word_key);
  }

  const wordKeys = [...new Set([...waMap.values()])];
  const vwaByKey = new Map();
  for (let i = 0; i < wordKeys.length; i += PAGE) {
    const batch = wordKeys.slice(i, i + PAGE);
    const { data } = await supabase
      .from('verse_word_analyses')
      .select('id, word_key, analysis_axes')
      .in('word_key', batch)
      .not('analysis_axes', 'is', null);
    for (const vwa of (data || [])) {
      if (!vwa.analysis_axes) continue;
      if (!vwaByKey.has(vwa.word_key)) vwaByKey.set(vwa.word_key, []);
      vwaByKey.get(vwa.word_key).push(vwa);
    }
  }
  console.log(`VWA with axes for ${vwaByKey.size} word_keys`);

  let updated = 0, noVwa = 0, noAxes = 0, errors = 0;

  for (const wm of wmMissing) {
    const wordKey = waMap.get(wm.analysis_id);
    if (!wordKey) continue;

    const vwaEntries = vwaByKey.get(wordKey);
    if (!vwaEntries || vwaEntries.length === 0) { noVwa++; continue; }

    // Fallback: use concept_chosen from VWA, regardless of wm.concept match
    let bestAxes = null;
    let bestLen = 0;

    for (const vwa of vwaEntries) {
      const axesData = vwa.analysis_axes;
      const concepts = axesData?.concepts;
      if (!concepts || typeof concepts !== 'object') continue;

      // Prefer concept_chosen
      const chosen = axesData.concept_chosen;
      if (chosen && concepts[chosen]) {
        const axes = extractAxes(concepts[chosen]);
        if (axes) {
          const totalLen = Object.values(axes).filter(Boolean).join('').length;
          if (totalLen > bestLen) {
            bestAxes = axes;
            bestLen = totalLen;
          }
        }
      }

      // Also try any retenu concept
      for (const [cName, cData] of Object.entries(concepts)) {
        if (cData?.status !== 'retenu') continue;
        const axes = extractAxes(cData);
        if (!axes) continue;
        const totalLen = Object.values(axes).filter(Boolean).join('').length;
        if (totalLen > bestLen) {
          bestAxes = axes;
          bestLen = totalLen;
        }
      }
    }

    if (!bestAxes) { noAxes++; continue; }

    const { error } = await supabase
      .from('word_meanings')
      .update(bestAxes)
      .eq('id', wm.id);

    if (error) {
      errors++;
      if (errors <= 3) console.error(`  Update error wm.id=${wm.id}: ${error.message}`);
    } else {
      updated++;
    }
  }

  console.log('\n=== PASS 2 SUMMARY ===');
  console.log(`Attempted:       ${wmMissing.length}`);
  console.log(`Updated:         ${updated}`);
  console.log(`No VWA axes:     ${noVwa}`);
  console.log(`No axes found:   ${noAxes}`);
  console.log(`Errors:          ${errors}`);
  console.log(`Still missing:   ${wmMissing.length - updated}`);
}

main().catch(e => console.error('FATAL:', e));
