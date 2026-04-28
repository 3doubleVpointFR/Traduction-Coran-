const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// Normalize concept name for fuzzy matching
function normalize(s) {
  if (!s) return '';
  return s
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // strip accents
    .replace(/[\/\-_]/g, ' ')  // slashes, dashes, underscores → space
    .replace(/\s+/g, ' ')
    .trim();
}

function fuzzyMatch(a, b) {
  const na = normalize(a);
  const nb = normalize(b);
  if (!na || !nb) return 0;
  if (na === nb) return 1.0;
  if (na.includes(nb) || nb.includes(na)) return 0.8;
  // check word overlap
  const wa = new Set(na.split(' '));
  const wb = new Set(nb.split(' '));
  const inter = [...wa].filter(x => wb.has(x)).length;
  const union = new Set([...wa, ...wb]).size;
  return inter / union; // Jaccard
}

// Paginated fetch
async function fetchAllPaginated(queryFn) {
  const PAGE = 1000;
  let all = [];
  let from = 0;
  while (true) {
    const { data, error } = await queryFn(from, from + PAGE - 1);
    if (error) throw new Error(`Fetch error: ${error.message}`);
    if (!data || data.length === 0) break;
    all = all.concat(data);
    if (data.length < PAGE) break;
    from += PAGE;
  }
  return all;
}

// Extract axes from a concept data object - handles both naming conventions
function extractAxes(cData) {
  if (!cData || typeof cData !== 'object') return null;
  const axes = {};

  // Try both naming conventions
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
  // ─── STEP 1: Sample and understand structure ───
  console.log('=== STEP 1: Sample VWA axes structure ===\n');
  const { data: samples } = await supabase
    .from('verse_word_analyses')
    .select('id, verse_id, word_key, analysis_axes')
    .not('analysis_axes', 'is', null)
    .limit(3);

  if (samples) {
    for (const s of samples) {
      const axes = s.analysis_axes;
      const concepts = axes?.concepts || axes;
      console.log(`VWA id=${s.id}, word_key=${s.word_key}`);
      if (typeof concepts === 'object') {
        const keys = Object.keys(concepts);
        for (const k of keys) {
          const c = concepts[k];
          console.log(`  Concept "${k}" status=${c?.status}, fields: ${Object.keys(c || {}).join(', ')}`);
        }
      }
      if (axes?.concept_chosen) console.log(`  concept_chosen: "${axes.concept_chosen}"`);
      if (axes?.sense_chosen) console.log(`  sense_chosen: "${axes.sense_chosen}"`);
      console.log('');
    }
  }

  // ─── STEP 2: Find word_meanings missing axes ───
  console.log('=== STEP 2: Fetching word_meanings missing axes ===');

  const wmNull = await fetchAllPaginated((from, to) =>
    supabase.from('word_meanings')
      .select('id, analysis_id, concept, sense, axe1_verset')
      .is('axe1_verset', null)
      .range(from, to)
  );
  const wmEmpty = await fetchAllPaginated((from, to) =>
    supabase.from('word_meanings')
      .select('id, analysis_id, concept, sense, axe1_verset')
      .eq('axe1_verset', '')
      .range(from, to)
  );
  const wmMissing = [...wmNull, ...wmEmpty];
  console.log(`  NULL axe1: ${wmNull.length}, empty axe1: ${wmEmpty.length}, total: ${wmMissing.length}`);
  if (wmMissing.length === 0) { console.log('Nothing to migrate!'); return; }

  // Show some sample concepts from wmMissing
  console.log('\n  Sample wm concepts:', wmMissing.slice(0, 10).map(w => `"${w.concept}"`).join(', '));

  // ─── STEP 3: Build lookup maps ───
  console.log('\n=== STEP 3: Building lookup maps ===');

  const analysisIds = [...new Set(wmMissing.map(w => w.analysis_id).filter(Boolean))];
  console.log(`  Unique analysis_ids: ${analysisIds.length}`);

  // word_analyses: analysis_id → word_key
  const waMap = new Map();
  const PAGE = 1000;
  for (let i = 0; i < analysisIds.length; i += PAGE) {
    const batch = analysisIds.slice(i, i + PAGE);
    const { data, error } = await supabase
      .from('word_analyses')
      .select('id, word_key')
      .in('id', batch);
    if (error) { console.error('WA error:', error.message); continue; }
    for (const wa of (data || [])) waMap.set(wa.id, wa.word_key);
  }
  console.log(`  word_analyses mapped: ${waMap.size}`);

  const wordKeys = [...new Set([...waMap.values()])];
  console.log(`  Unique word_keys: ${wordKeys.length}`);

  // VWA by word_key (with analysis_axes)
  const vwaByKey = new Map();
  for (let i = 0; i < wordKeys.length; i += PAGE) {
    const batch = wordKeys.slice(i, i + PAGE);
    const { data, error } = await supabase
      .from('verse_word_analyses')
      .select('id, word_key, analysis_axes')
      .in('word_key', batch)
      .not('analysis_axes', 'is', null);
    if (error) { console.error('VWA error:', error.message); continue; }
    for (const vwa of (data || [])) {
      if (!vwa.analysis_axes) continue;
      if (!vwaByKey.has(vwa.word_key)) vwaByKey.set(vwa.word_key, []);
      vwaByKey.get(vwa.word_key).push(vwa);
    }
  }
  console.log(`  VWA with axes for ${vwaByKey.size} / ${wordKeys.length} word_keys`);

  // ─── STEP 4: Migrate ───
  console.log('\n=== STEP 4: Migrating ===');
  let updated = 0, noWa = 0, noVwa = 0, noMatch = 0, noAxes = 0, errors = 0;
  let debugSamples = [];

  for (const wm of wmMissing) {
    const wordKey = waMap.get(wm.analysis_id);
    if (!wordKey) { noWa++; continue; }

    const vwaEntries = vwaByKey.get(wordKey);
    if (!vwaEntries || vwaEntries.length === 0) { noVwa++; continue; }

    let bestAxes = null;
    let bestScore = -1;
    let bestLen = 0;
    let debugInfo = null;

    for (const vwa of vwaEntries) {
      const axesData = vwa.analysis_axes;
      const concepts = axesData?.concepts;

      if (!concepts || typeof concepts !== 'object') {
        // Maybe the axes are at root level (no concepts wrapper)?
        const rootAxes = extractAxes(axesData);
        if (rootAxes) {
          const totalLen = Object.values(rootAxes).filter(Boolean).join('').length;
          if (totalLen > bestLen) {
            bestAxes = rootAxes;
            bestScore = 0.5;
            bestLen = totalLen;
          }
        }
        continue;
      }

      // Strategy 1: Match by concept_chosen if it matches wm.concept
      const chosen = axesData.concept_chosen;
      if (chosen && concepts[chosen]) {
        const score = fuzzyMatch(wm.concept || '', chosen);
        const axes = extractAxes(concepts[chosen]);
        if (axes) {
          const totalLen = Object.values(axes).filter(Boolean).join('').length;
          if (score > bestScore || (score === bestScore && totalLen > bestLen)) {
            bestAxes = axes;
            bestScore = score;
            bestLen = totalLen;
            debugInfo = { wmConcept: wm.concept, vwaConcept: chosen, score };
          }
        }
      }

      // Strategy 2: Try all concepts for best match
      for (const [cName, cData] of Object.entries(concepts)) {
        if (!cData || typeof cData !== 'object') continue;

        const score = fuzzyMatch(wm.concept || '', cName);
        const axes = extractAxes(cData);
        if (!axes) continue;

        const totalLen = Object.values(axes).filter(Boolean).join('').length;
        if (score > bestScore || (score === bestScore && totalLen > bestLen)) {
          bestAxes = axes;
          bestScore = score;
          bestLen = totalLen;
          debugInfo = { wmConcept: wm.concept, vwaConcept: cName, score };
        }
      }

      // Strategy 3: If concept_chosen matches AND wm has no concept, use chosen
      if (!wm.concept && chosen && concepts[chosen]) {
        const axes = extractAxes(concepts[chosen]);
        if (axes) {
          const totalLen = Object.values(axes).filter(Boolean).join('').length;
          if (0.5 > bestScore || (0.5 === bestScore && totalLen > bestLen)) {
            bestAxes = axes;
            bestScore = 0.5;
            bestLen = totalLen;
            debugInfo = { wmConcept: '(null)', vwaConcept: chosen, score: 0.5 };
          }
        }
      }
    }

    // Collect debug samples for low-score or no-match cases
    if (bestScore < 0.3 && debugSamples.length < 10) {
      // Show what concepts were available vs what wm.concept is
      const availableConcepts = [];
      for (const vwa of vwaEntries) {
        const concepts = vwa.analysis_axes?.concepts;
        if (concepts) availableConcepts.push(...Object.keys(concepts));
      }
      debugSamples.push({
        wmId: wm.id,
        wmConcept: wm.concept,
        wmSense: wm.sense,
        wordKey,
        availableConcepts: [...new Set(availableConcepts)],
        bestScore
      });
    }

    if (!bestAxes || bestScore < 0.2) { noMatch++; continue; }
    if (Object.keys(bestAxes).length === 0) { noAxes++; continue; }

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

  // ─── Debug: show mismatched samples ───
  if (debugSamples.length > 0) {
    console.log('\n=== DEBUG: Sample concept mismatches ===');
    for (const d of debugSamples) {
      console.log(`  wm.id=${d.wmId} concept="${d.wmConcept}" sense="${d.wmSense}" wordKey=${d.wordKey}`);
      console.log(`    VWA concepts available: ${d.availableConcepts.join(', ')}`);
      console.log(`    Best score: ${d.bestScore}`);
    }
  }

  // ─── STEP 5: Summary ───
  console.log('\n=== SUMMARY ===');
  console.log(`Total word_meanings missing axes: ${wmMissing.length}`);
  console.log(`Successfully updated:             ${updated}`);
  console.log(`No word_analysis mapping:         ${noWa}`);
  console.log(`No VWA with axes:                 ${noVwa}`);
  console.log(`No concept match (score < 0.2):   ${noMatch}`);
  console.log(`No extractable axes:              ${noAxes}`);
  console.log(`Update errors:                    ${errors}`);
  console.log(`Still missing after migration:    ${wmMissing.length - updated}`);
}

main().catch(e => console.error('FATAL:', e));
