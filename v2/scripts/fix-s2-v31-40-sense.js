const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// All 26 fixes keyed by VWA id
// type: 'sense' = just change sense_chosen, 'concept' = also change concept_chosen
const fixes = [
  { id: 1232, newSense: 'époux', type: 'sense' },
  { id: 1235, newSense: 'sans contrainte', type: 'sense' },
  { id: 1239, newSense: 'être (verbe incomplet)', type: 'sense' },
  { id: 1240, newSense: 'obscurité', type: 'sense' },
  { id: 1241, newSense: 'glisser', type: 'sense' },
  { id: 1242, type: 'concept_lookup', lookupConcept: 'Diable/Satan', fallbackSenses: ['diable', 'shaytan', 'satan'] },
  { id: 1244, newSense: 'être (verbe incomplet)', type: 'sense' },
  { id: 1250, newSense: "s'établir", type: 'sense' },
  { id: 1251, newSense: null, type: 'sense_lookup', conceptHint: 'Jouissance/Profit', fallbackSenses: ['jouir', 'faire profiter', 'profit'] },
  { id: 1257, newSense: 'le Compatissant', type: 'sense' },
  { id: 1258, newSense: 'enseignement', type: 'sense' },
  { id: 1261, newSense: 'exposer', type: 'sense' },
  { id: 1265, newSense: 'être (verbe incomplet)', type: 'sense' },
  { id: 1266, newSense: 'dire vrai', type: 'sense' },
  { id: 1270, newSense: 'être sage', type: 'sense' },
  { id: 1275, newSense: "l'invisible", type: 'sense' },
  { id: 1277, newSense: 'se montrer', type: 'sense' },
  { id: 1278, newSense: 'être (verbe incomplet)', type: 'sense' },
  { id: 1285, newSense: 'être (verbe incomplet)', type: 'sense' },
  { id: 1286, newSense: 'couvrir', type: 'sense' },
  { id: 1330, newSense: 'arriver', type: 'sense' },
  { id: 1332, type: 'concept_lookup_any', fallbackSenses: ['suivre'], conceptHints: ['Suite', 'Succession', 'Suivi'] },
  { id: 1333, newSense: 'craindre', type: 'sense' },
  { id: 1335, newSense: 'couvrir', type: 'sense' },
  { id: 1337, type: 'concept_lookup_any', fallbackSenses: ['signe', 'preuve', 'verset'], conceptHints: ['Signe', 'Preuve', 'Miracle'] },
  { id: 1344, newSense: null, type: 'sense_lookup', conceptHint: 'Fidélité/Accomplissement', fallbackSenses: ['tenir sa promesse', "être fidèle", 'accomplir'] },
];

function normalize(s) { return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim(); }

async function fix() {
  let ok = 0, err = 0;

  // 1. Get all VWAs we need to fix
  const vwaIds = fixes.map(f => f.id);
  const { data: vwas, error: vwaErr } = await db.from('verse_word_analyses')
    .select('id, word_key, verse_id, sense_chosen, position, analysis_axes')
    .in('id', vwaIds);
  if (vwaErr) { console.error('Failed to fetch VWAs:', vwaErr); return; }
  console.log(`Fetched ${vwas.length} VWAs`);

  // 2. Get all word_analyses + word_meanings for the word_keys involved
  const wordKeys = [...new Set(vwas.map(v => v.word_key))];
  const { data: was } = await db.from('word_analyses').select('id, word_key').in('word_key', wordKeys);
  const waIds = was.map(w => w.id);
  const { data: wms } = await db.from('word_meanings').select('id, analysis_id, concept, sense').in('analysis_id', waIds);

  // Build maps
  const waByKey = {};
  for (const wa of was) waByKey[wa.word_key] = wa;

  // conceptMap: word_key -> { concept -> [senses] }
  const conceptMap = {};
  for (const wm of wms) {
    const wa = was.find(w => w.id === wm.analysis_id);
    if (!wa) continue;
    if (!conceptMap[wa.word_key]) conceptMap[wa.word_key] = {};
    if (!conceptMap[wa.word_key][wm.concept]) conceptMap[wa.word_key][wm.concept] = [];
    conceptMap[wa.word_key][wm.concept].push(wm.sense);
  }

  // 3. Get all verse_analyses for affected verses to update segments
  const verseIds = [...new Set(vwas.map(v => v.verse_id))];
  const { data: vas } = await db.from('verse_analyses').select('id, verse_id, segments').in('verse_id', verseIds);
  const vaByVerse = {};
  for (const va of vas) vaByVerse[va.verse_id] = va;

  // 4. Process each fix
  for (const fix of fixes) {
    const vwa = vwas.find(v => v.id === fix.id);
    if (!vwa) { console.error(`VWA ${fix.id} not found`); err++; continue; }

    const axes = { ...vwa.analysis_axes };
    const oldSense = vwa.sense_chosen;
    const oldConcept = axes.concept_chosen;
    let newSense = fix.newSense;
    let newConcept = oldConcept;
    const concepts = conceptMap[vwa.word_key] || {};

    // Resolve sense and concept based on fix type
    if (fix.type === 'sense') {
      // Simple sense replacement — verify it exists in DB
      const allSenses = Object.values(concepts).flat();
      if (!allSenses.includes(newSense)) {
        // Try normalized match
        const normNew = normalize(newSense);
        const match = allSenses.find(s => normalize(s) === normNew);
        if (match) {
          newSense = match;
        } else {
          console.warn(`  [WARN] VWA ${fix.id} [${vwa.word_key}]: sense "${newSense}" not found in word_meanings. Adding it.`);
          // Add it to the correct concept
          const waId = waByKey[vwa.word_key]?.id;
          if (waId) {
            await db.from('word_meanings').insert({ analysis_id: waId, concept: oldConcept, sense: newSense });
            console.log(`    Added sense "${newSense}" to concept "${oldConcept}"`);
          }
        }
      }
    } else if (fix.type === 'concept_lookup') {
      // Need to find the right concept and sense
      const targetConcept = Object.keys(concepts).find(c => {
        const nc = normalize(c);
        return normalize(fix.lookupConcept).split('/').some(p => nc.includes(normalize(p)));
      });
      if (targetConcept) {
        newConcept = targetConcept;
        const senses = concepts[targetConcept];
        // Find best sense
        newSense = fix.fallbackSenses.find(fs => senses.includes(fs))
          || fix.fallbackSenses.find(fs => senses.find(s => normalize(s) === normalize(fs)))
          || senses[0];
        // Use exact DB value if normalized match
        const exactMatch = senses.find(s => fix.fallbackSenses.some(fs => normalize(s) === normalize(fs)));
        if (exactMatch) newSense = exactMatch;
        console.log(`  VWA ${fix.id} [${vwa.word_key}]: concept "${oldConcept}" -> "${newConcept}", sense -> "${newSense}"`);
      } else {
        console.error(`  [ERROR] VWA ${fix.id}: concept matching "${fix.lookupConcept}" not found for word_key "${vwa.word_key}". Available: ${Object.keys(concepts).join(', ')}`);
        err++; continue;
      }
    } else if (fix.type === 'concept_lookup_any') {
      // Search across all concepts for the word_key to find one matching hints
      let found = false;
      for (const [concept, senses] of Object.entries(concepts)) {
        const nc = normalize(concept);
        if (fix.conceptHints.some(h => nc.includes(normalize(h)))) {
          newConcept = concept;
          newSense = fix.fallbackSenses.find(fs => senses.includes(fs))
            || fix.fallbackSenses.find(fs => senses.find(s => normalize(s) === normalize(fs)))
            || senses[0];
          const exactMatch = senses.find(s => fix.fallbackSenses.some(fs => normalize(s) === normalize(fs)));
          if (exactMatch) newSense = exactMatch;
          found = true;
          console.log(`  VWA ${fix.id} [${vwa.word_key}]: concept "${oldConcept}" -> "${newConcept}", sense -> "${newSense}"`);
          break;
        }
      }
      if (!found) {
        // If no concept matches hints, just use first sense from fallback in any concept
        console.warn(`  [WARN] VWA ${fix.id} [${vwa.word_key}]: no concept matching hints ${fix.conceptHints.join(',')}. Available concepts: ${Object.keys(concepts).join(', ')}`);
        // Try to find any concept that has one of the fallback senses
        for (const [concept, senses] of Object.entries(concepts)) {
          const match = fix.fallbackSenses.find(fs => senses.includes(fs) || senses.find(s => normalize(s) === normalize(fs)));
          if (match) {
            newConcept = concept;
            const exactMatch = senses.find(s => normalize(s) === normalize(match));
            newSense = exactMatch || match;
            found = true;
            console.log(`    Found sense "${newSense}" in concept "${newConcept}"`);
            break;
          }
        }
        if (!found) {
          console.error(`  [ERROR] VWA ${fix.id}: cannot resolve. Adding sense "${fix.fallbackSenses[0]}" to current concept "${oldConcept}".`);
          newSense = fix.fallbackSenses[0];
          const waId = waByKey[vwa.word_key]?.id;
          if (waId) {
            await db.from('word_meanings').insert({ analysis_id: waId, concept: oldConcept, sense: newSense });
          }
        }
      }
    } else if (fix.type === 'sense_lookup') {
      // Find a sense from fallbacks in the hinted concept
      const targetConcept = Object.keys(concepts).find(c => {
        const nc = normalize(c);
        return normalize(fix.conceptHint).split('/').some(p => nc.includes(normalize(p)));
      });
      if (targetConcept) {
        const senses = concepts[targetConcept];
        newSense = fix.fallbackSenses.find(fs => senses.includes(fs))
          || fix.fallbackSenses.find(fs => senses.find(s => normalize(s) === normalize(fs)))
          || senses[0];
        const exactMatch = senses.find(s => fix.fallbackSenses.some(fs => normalize(s) === normalize(fs)));
        if (exactMatch) newSense = exactMatch;
      } else {
        newSense = fix.fallbackSenses[0];
        console.warn(`  [WARN] VWA ${fix.id}: concept "${fix.conceptHint}" not found. Using "${newSense}".`);
      }
    }

    if (!newSense) {
      console.error(`  [ERROR] VWA ${fix.id}: could not determine new sense`);
      err++; continue;
    }

    // 4a. Update analysis_axes
    axes.sense_chosen = newSense;
    if (newConcept !== oldConcept) {
      axes.concept_chosen = newConcept;
    }

    // 4b. Update VWA
    const { error: upErr } = await db.from('verse_word_analyses').update({
      sense_chosen: newSense,
      analysis_axes: axes
    }).eq('id', fix.id);

    if (upErr) {
      console.error(`  [ERROR] VWA ${fix.id} update failed:`, upErr.message);
      err++; continue;
    }

    // 4c. Update verse_analyses.segments sense_retenu
    const va = vaByVerse[vwa.verse_id];
    if (va && va.segments) {
      const segments = [...va.segments];
      // Find segment matching this word by position or word_key
      let updated = false;
      for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        // Match by position (0-indexed in segments vs 1-indexed position)
        if (seg.word_key === vwa.word_key || seg.position === vwa.position || i === (vwa.position - 1)) {
          if (seg.sense_retenu === oldSense || normalize(seg.sense_retenu || '') === normalize(oldSense || '')) {
            segments[i] = { ...seg, sense_retenu: newSense };
            if (newConcept !== oldConcept && seg.concept) {
              segments[i].concept = newConcept;
            }
            updated = true;
            break;
          }
        }
      }
      // If not found by position, try scanning all segments for matching sense
      if (!updated) {
        for (let i = 0; i < segments.length; i++) {
          const seg = segments[i];
          if (seg.sense_retenu === oldSense && (seg.root === vwa.word_key || seg.racine === vwa.word_key)) {
            segments[i] = { ...seg, sense_retenu: newSense };
            if (newConcept !== oldConcept && seg.concept) {
              segments[i].concept = newConcept;
            }
            updated = true;
            break;
          }
        }
      }
      if (updated) {
        await db.from('verse_analyses').update({ segments }).eq('id', va.id);
      } else {
        console.warn(`  [WARN] VWA ${fix.id}: could not find matching segment in verse_analyses ${va.id} for sense_retenu update`);
      }
    }

    console.log(`  [OK] VWA ${fix.id} [${vwa.word_key}]: "${oldSense}" -> "${newSense}"${newConcept !== oldConcept ? ` (concept: "${oldConcept}" -> "${newConcept}")` : ''}`);
    ok++;
  }

  console.log(`\n=== DONE: ${ok} fixed, ${err} errors ===`);
}

fix().catch(e => console.error('Fatal:', e));
