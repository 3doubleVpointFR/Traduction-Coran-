const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function fix() {
  let ok = 0, err = 0;

  // === 1. Fix rbh total_occurrences ===
  {
    const { error } = await db.from('word_analyses').update({ total_occurrences: 2 }).eq('id', 339);
    if (error) { console.log('ERR rbh occ:', error.message); err++; }
    else { console.log('OK rbh total_occurrences = 2'); ok++; }
  }

  // === 2. Add missing senses to word_meanings ===
  const missingSenses = [
    // slh needs "réformer" sense
    { analysis_id: 326, concept: 'Bonté/Rectitude', sense: 'réformer', display_order: 8 },
    // kll needs "Totalité" concept with "tout" sense
    { analysis_id: 372, concept: 'Totalité', sense: 'tout', display_order: 7,
      description: 'Totalité sans exception — kull englobe chaque élément sans en laisser aucun de côté. C\'est un quantificateur universel permanent.' },
    { analysis_id: 372, concept: 'Totalité', sense: 'chaque', display_order: 8 },
    { analysis_id: 372, concept: 'Totalité', sense: 'totalité', display_order: 9 },
    // hḏr needs "précaution" sense
    { analysis_id: 363, concept: 'Prudence/Vigilance', sense: 'précaution', display_order: 6 },
  ];
  for (const s of missingSenses) {
    const ins = { analysis_id: s.analysis_id, concept: s.concept, sense: s.sense, display_order: s.display_order };
    if (s.description) ins.description = s.description;
    const { error } = await db.from('word_meanings').insert(ins);
    if (error) { console.log('ERR add sense', s.sense, ':', error.message); err++; }
    else { console.log('OK added sense', s.sense, 'to', s.concept); ok++; }
  }

  // === 3. Fix sense_retenu in segments ===
  const segFixes = [
    // V12 (verse_id=19): sher "percevoir" → "sentir"
    { verse_id: 19, word_key: 'sher', old_sense: 'percevoir', new_sense: 'sentir' },
    // V14 (verse_id=21): xlw "se retirer" → "être seul"
    { verse_id: 21, word_key: 'xlw', old_sense: 'se retirer', new_sense: 'être seul' },
    // V15 (verse_id=22): mdd "prolonger" → "étendre"
    { verse_id: 22, word_key: 'mdd', old_sense: 'prolonger', new_sense: 'étendre' },
    // V16 (verse_id=23): kwn "être" → "être (verbe incomplet)"
    { verse_id: 23, word_key: 'kwn', old_sense: 'être', new_sense: 'être (verbe incomplet)' },
    // V19 (verse_id=26): swb "pluie torrentielle" → "pluie abondante"
    { verse_id: 26, word_key: 'swb', old_sense: 'pluie torrentielle', new_sense: 'pluie abondante' },
    // V19: sbe "doigts" → "doigt"
    { verse_id: 26, word_key: 'sbe', old_sense: 'doigts', new_sense: 'doigt' },
    // V19: adhn "oreilles" → "oreille"
    { verse_id: 26, word_key: 'adhn', old_sense: 'oreilles', new_sense: 'oreille' },
    // V19: seq "foudres" → "foudroyer"
    { verse_id: 26, word_key: 'seq', old_sense: 'foudres', new_sense: 'foudroyer' },
    // V19: kfr "recouvrants" → "mécréant"
    { verse_id: 26, word_key: 'kfr', old_sense: 'recouvrants', new_sense: 'mécréant' },
    // V20 (verse_id=27): kwd "imminence" → "être sur le point de"
    { verse_id: 27, word_key: 'kwd', old_sense: 'imminence', new_sense: 'être sur le point de' },
    // V20: zlm "s'obscurcir" → "obscurité"
    { verse_id: 27, word_key: 'zlm', old_sense: "s'obscurcir", new_sense: 'obscurité' },
    // V20: qwm "s'arrêter" → "se tenir debout"
    { verse_id: 27, word_key: 'qwm', old_sense: "s'arrêter", new_sense: 'se tenir debout' },
    // V20: dhb "emporter" → "partir"
    { verse_id: 27, word_key: 'dhb', old_sense: 'emporter', new_sense: 'partir' },
    // V20: sme "audition" → "ouïe"
    { verse_id: 27, word_key: 'sme', old_sense: 'audition', new_sense: 'ouïe' },
    // V20: kll "totalité" → "totalité" (now added to word_meanings)
    // V20: qdr "puissant" → "pouvoir"
    { verse_id: 27, word_key: 'qdr', old_sense: 'puissant', new_sense: 'pouvoir' },
  ];

  // Fix bsr "vues" → "vue" in V20 (both occurrences)
  segFixes.push({ verse_id: 27, word_key: 'bsr', old_sense: 'vues', new_sense: 'vue' });

  for (const fix of segFixes) {
    const { data: va } = await db.from('verse_analyses').select('segments').eq('verse_id', fix.verse_id).single();
    if (!va || !va.segments) { console.log('SKIP no segments for v', fix.verse_id); continue; }

    let changed = false;
    const segs = va.segments.map(s => {
      if (s.word_key === fix.word_key && s.sense_retenu === fix.old_sense) {
        changed = true;
        return { ...s, sense_retenu: fix.new_sense };
      }
      // For bsr fix all occurrences
      if (fix.word_key === 'bsr' && s.word_key === 'bsr' && s.sense_retenu === fix.old_sense) {
        changed = true;
        return { ...s, sense_retenu: fix.new_sense };
      }
      return s;
    });

    if (changed) {
      const { error } = await db.from('verse_analyses').update({ segments: segs }).eq('verse_id', fix.verse_id);
      if (error) { console.log('ERR seg fix', fix.word_key, 'v' + fix.verse_id, error.message); err++; }
      else { console.log('OK seg fix', fix.word_key, fix.old_sense, '→', fix.new_sense, 'v' + fix.verse_id); ok++; }
    } else {
      console.log('SKIP', fix.word_key, 'v' + fix.verse_id, '- sense not found');
    }
  }

  // === 4. Fix concept_chosen in VWA analysis_axes ===
  const conceptFixes = [
    // xlw: "Vide/Solitude" → "Vacuité/Solitude"
    { word_key: 'xlw', old_concept: 'Vide/Solitude', new_concept: 'Vacuité/Solitude' },
    // tjr: "Commerce/Négoce" → "Commerce"
    { word_key: 'tjr', old_concept: 'Commerce/Négoce', new_concept: 'Commerce' },
    // wqd: "Combustion/Feu" → "Feu/Combustion"
    { word_key: 'wqd', old_concept: 'Combustion/Feu', new_concept: 'Feu/Combustion' },
    // trk: "Abandon/Délaissement" → "Abandon/Renoncement"
    { word_key: 'trk', old_concept: 'Abandon/Délaissement', new_concept: 'Abandon/Renoncement' },
  ];

  for (const fix of conceptFixes) {
    const { data: vwas } = await db.from('verse_word_analyses').select('id, analysis_axes')
      .eq('word_key', fix.word_key).in('verse_id', [18,19,20,21,22,23,24,25,26,27]);

    for (const vwa of (vwas || [])) {
      const ax = vwa.analysis_axes;
      if (!ax) continue;
      let changed = false;

      // Fix concept_chosen
      if (ax.concept_chosen === fix.old_concept) {
        ax.concept_chosen = fix.new_concept;
        changed = true;
      }

      // Fix concepts key
      if (ax.concepts && ax.concepts[fix.old_concept]) {
        ax.concepts[fix.new_concept] = ax.concepts[fix.old_concept];
        delete ax.concepts[fix.old_concept];
        changed = true;
      }

      if (changed) {
        const { error } = await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', vwa.id);
        if (error) { console.log('ERR concept fix', fix.word_key, error.message); err++; }
        else { console.log('OK concept fix', fix.word_key, fix.old_concept, '→', fix.new_concept); ok++; }
      }
    }
  }

  // === 5. Fix kll concept in VWA (add Totalité to concepts object) ===
  {
    const { data: vwas } = await db.from('verse_word_analyses').select('id, analysis_axes')
      .eq('word_key', 'kll').in('verse_id', [27]);
    for (const vwa of (vwas || [])) {
      const ax = vwa.analysis_axes;
      if (!ax || !ax.concepts) continue;
      // If concept_chosen is "Totalité" and concepts has it, it's fine now that we added it to word_meanings
      // Just make sure the concept key matches
      if (ax.concepts['Totalité']) {
        console.log('OK kll already has Totalité concept');
      }
    }
  }

  console.log(`\nDone: ${ok} OK, ${err} errors`);
}

fix().catch(console.error);
