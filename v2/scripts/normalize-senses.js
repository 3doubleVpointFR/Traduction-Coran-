const {createClient} = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Normalize all VWA sense_chosen and concept_chosen to match word_meanings exactly
(async () => {
  console.log('=== NORMALISATION DES SENSE_CHOSEN ===\n');

  // 1. Get ALL word_analyses (root → analysis_id)
  let allWA = [];
  let offset = 0;
  while (true) {
    const {data} = await supabase.from('word_analyses')
      .select('id, word_key')
      .range(offset, offset + 999);
    if (!data || data.length === 0) break;
    allWA = allWA.concat(data);
    offset += 1000;
    if (data.length < 1000) break;
  }
  const waMap = {}; // word_key → analysis_id
  for (const w of allWA) waMap[w.word_key] = w.id;

  // 2. Get ALL word_meanings (the reference)
  let allWM = [];
  offset = 0;
  while (true) {
    const {data} = await supabase.from('word_meanings')
      .select('analysis_id, sense, concept, meaning_type')
      .eq('meaning_type', 'etymology')
      .range(offset, offset + 999);
    if (!data || data.length === 0) break;
    allWM = allWM.concat(data);
    offset += 1000;
    if (data.length < 1000) break;
  }

  // Build reference: analysis_id → { concepts: Set, senses: Map<sense, concept>, allSenses: [] }
  const ref = {};
  for (const m of allWM) {
    if (!ref[m.analysis_id]) ref[m.analysis_id] = { concepts: new Set(), senseToConc: {}, allSenses: [] };
    ref[m.analysis_id].concepts.add(m.concept);
    ref[m.analysis_id].senseToConc[m.sense.toLowerCase()] = m.concept;
    ref[m.analysis_id].allSenses.push({ sense: m.sense, concept: m.concept });
  }

  // 3. Get ALL VWA for sourate 2
  let allVWA = [];
  offset = 0;
  while (true) {
    const {data} = await supabase.from('verse_word_analyses')
      .select('id, verse_id, word_key, sense_chosen, analysis_axes')
      .gte('verse_id', 8).lte('verse_id', 293)
      .range(offset, offset + 999);
    if (!data || data.length === 0) break;
    allVWA = allVWA.concat(data);
    offset += 1000;
    if (data.length < 1000) break;
  }

  console.log('VWA total:', allVWA.length);
  console.log('word_meanings total:', allWM.length);
  console.log('word_analyses total:', allWA.length);

  // 4. For each VWA, check if sense_chosen matches a reference sense
  let fixed = 0, noRef = 0, alreadyOk = 0, cantFix = 0;
  const cantFixList = [];

  for (const vwa of allVWA) {
    const aid = waMap[vwa.word_key];
    if (!aid || !ref[aid]) {
      noRef++;
      continue;
    }

    const r = ref[aid];
    const sc = vwa.sense_chosen || '';
    const scLower = sc.toLowerCase().trim();
    const axes = vwa.analysis_axes || {};
    const cc = axes.concept_chosen || '';

    // Check if already matching
    const senseMatch = r.allSenses.some(s => s.sense.toLowerCase() === scLower);
    const conceptMatch = r.concepts.has(cc);

    if (senseMatch && conceptMatch) {
      alreadyOk++;
      continue;
    }

    // Try to find the best matching sense from reference
    let bestSense = null;
    let bestConcept = null;

    // Strategy 1: concept_chosen matches a reference concept → find best sense in that concept
    if (conceptMatch || r.concepts.has(cc)) {
      const targetConcept = conceptMatch ? cc : null;
      // Find a sense in this concept that matches
      const conceptSenses = r.allSenses.filter(s => s.concept === cc);
      if (conceptSenses.length > 0) {
        // Try fuzzy match
        bestSense = fuzzyMatchSense(scLower, conceptSenses);
        if (bestSense) bestConcept = bestSense.concept;
      }
    }

    // Strategy 2: Try to match concept name approximately
    if (!bestSense) {
      const matchedConcept = fuzzyMatchConcept(cc, [...r.concepts]);
      if (matchedConcept) {
        const conceptSenses = r.allSenses.filter(s => s.concept === matchedConcept);
        bestSense = fuzzyMatchSense(scLower, conceptSenses);
        if (bestSense) bestConcept = matchedConcept;
      }
    }

    // Strategy 3: Try to match sense across all concepts
    if (!bestSense) {
      bestSense = fuzzyMatchSense(scLower, r.allSenses);
      if (bestSense) bestConcept = bestSense.concept;
    }

    // Strategy 4: Use concept_chosen from axes.concepts to find the retenu concept
    if (!bestSense && axes.concepts) {
      for (const [conceptName, conceptData] of Object.entries(axes.concepts)) {
        if (conceptData.status === 'retenu') {
          const matchedConcept = fuzzyMatchConcept(conceptName, [...r.concepts]);
          if (matchedConcept) {
            const conceptSenses = r.allSenses.filter(s => s.concept === matchedConcept);
            bestSense = fuzzyMatchSense(scLower, conceptSenses);
            if (bestSense) bestConcept = matchedConcept;
            break;
          }
        }
      }
    }

    if (bestSense && bestConcept) {
      // Update VWA
      const newAxes = { ...axes, concept_chosen: bestConcept };
      const {error} = await supabase.from('verse_word_analyses')
        .update({ sense_chosen: bestSense.sense, analysis_axes: newAxes })
        .eq('id', vwa.id);

      if (!error) {
        fixed++;
        if (fixed <= 30) {
          console.log(`  V${vwa.verse_id-7} (${vwa.word_key}): "${sc}" → "${bestSense.sense}" [${bestConcept}]`);
        }
      }
    } else {
      cantFix++;
      if (cantFix <= 20) {
        cantFixList.push(`V${vwa.verse_id-7} (${vwa.word_key}): "${sc}" concept="${cc}" → pas de match`);
      }
    }
  }

  console.log('\n=== RESULTATS ===');
  console.log('Deja OK:', alreadyOk);
  console.log('Corriges:', fixed);
  console.log('Sans reference (pas de word_meanings):', noRef);
  console.log('Pas de match trouve:', cantFix);

  if (cantFixList.length) {
    console.log('\nExemples non resolus:');
    cantFixList.forEach(c => console.log('  X', c));
  }
})();

function fuzzyMatchSense(input, refSenses) {
  // Exact match
  for (const s of refSenses) {
    if (s.sense.toLowerCase() === input) return s;
  }

  // Contains match
  for (const s of refSenses) {
    const sl = s.sense.toLowerCase();
    if (input.includes(sl) || sl.includes(input)) return s;
  }

  // Keyword overlap
  const inputWords = input.replace(/[^a-zàâéèêëïîôùûüç]/gi, ' ').split(/\s+/).filter(w => w.length > 2);
  let bestScore = 0;
  let bestMatch = null;

  for (const s of refSenses) {
    const sWords = s.sense.toLowerCase().replace(/[^a-zàâéèêëïîôùûüç]/gi, ' ').split(/\s+/).filter(w => w.length > 2);
    let score = 0;
    for (const iw of inputWords) {
      for (const sw of sWords) {
        if (iw === sw) score += 3;
        else if (iw.startsWith(sw) || sw.startsWith(iw)) score += 2;
        // Stem match (first 4 chars)
        else if (iw.length >= 4 && sw.length >= 4 && iw.substring(0, 4) === sw.substring(0, 4)) score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = s;
    }
  }

  return bestScore >= 2 ? bestMatch : null;
}

function fuzzyMatchConcept(input, refConcepts) {
  if (!input) return null;
  const il = input.toLowerCase().replace(/[^a-zàâéèêëïîôùûüç\/]/gi, '');

  // Exact
  for (const c of refConcepts) {
    if (c.toLowerCase().replace(/[^a-zàâéèêëïîôùûüç\/]/gi, '') === il) return c;
  }

  // Without accents match
  const norm = s => s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z\/]/gi, '');

  const inorm = norm(input);
  for (const c of refConcepts) {
    if (norm(c) === inorm) return c;
  }

  // Partial/reversed match: "Foi/Adhésion" vs "Adhésion/Foi"
  const iParts = input.split('/').map(p => p.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
  for (const c of refConcepts) {
    const cParts = c.split('/').map(p => p.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    // Check if all parts of input are in concept (any order)
    if (iParts.every(ip => cParts.some(cp => cp.includes(ip) || ip.includes(cp)))) return c;
  }

  // First word match
  for (const c of refConcepts) {
    const cFirst = norm(c.split('/')[0]);
    const iFirst = norm(input.split('/')[0]);
    if (cFirst === iFirst) return c;
  }

  return null;
}
