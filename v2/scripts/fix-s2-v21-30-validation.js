const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function fix() {
  let ok = 0, err = 0;
  const verseIds = [28,29,30,31,32,33,34,35,36,37];

  // Step 1: Get all word_analyses and word_meanings for roots used
  const { data: vwas } = await db.from('verse_word_analyses').select('id, word_key, verse_id, analysis_axes').in('verse_id', verseIds).order('id');
  const wordKeys = [...new Set(vwas.map(v => v.word_key))];
  const { data: was } = await db.from('word_analyses').select('id, word_key').in('word_key', wordKeys);
  const waMap = {};
  for (const wa of was) waMap[wa.word_key] = wa;
  const waIds = was.map(w => w.id);
  const { data: wms } = await db.from('word_meanings').select('analysis_id, concept, sense').in('analysis_id', waIds);

  // Build concept map: word_key -> { conceptName -> [senses] }
  const conceptMap = {};
  for (const wm of wms) {
    const wa = was.find(w => w.id === wm.analysis_id);
    if (!wa) continue;
    if (!conceptMap[wa.word_key]) conceptMap[wa.word_key] = {};
    if (!conceptMap[wa.word_key][wm.concept]) conceptMap[wa.word_key][wm.concept] = [];
    conceptMap[wa.word_key][wm.concept].push(wm.sense);
  }

  // Helper: find best matching concept name (fuzzy match ignoring accents)
  function normalize(s) { return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim(); }

  function findConcept(wordKey, badName) {
    const concepts = conceptMap[wordKey] || {};
    // Exact match
    if (concepts[badName]) return badName;
    // Normalized match
    const normBad = normalize(badName);
    for (const c of Object.keys(concepts)) {
      if (normalize(c) === normBad) return c;
    }
    // Partial match
    for (const c of Object.keys(concepts)) {
      const nc = normalize(c);
      const parts = normBad.split('/');
      if (parts.some(p => nc.includes(p))) return c;
    }
    return null;
  }

  function findSense(wordKey, badSense) {
    const concepts = conceptMap[wordKey] || {};
    const allSenses = Object.values(concepts).flat();
    // Exact match
    if (allSenses.includes(badSense)) return badSense;
    // Normalized match
    const normBad = normalize(badSense);
    for (const s of allSenses) {
      if (normalize(s) === normBad) return s;
    }
    return null;
  }

  // Manual mappings for senses that need specific corrections
  const senseOverrides = {
    // V21
    'rbb:maitre': 'celui qui possède',
    'xlq:creer': 'créer',
    'wqy:se premunir': 'se prémunir',
    // V22
    'bny:structure': 'construire',
    'rzq:provision': 'subsistance',
    'ndd:rival': 'égal',
    'frš:lit': 'étendre',
    // V23
    'kwn:etre': 'être (verbe incomplet)',
    'ryb:doute': 'douter',
    'swr:chapitre': 'forme',
    'dwn:en dehors de': 'en dessous',
    'sdq:veridique': 'dire vrai',
    'mvl:semblable': null, // will search
    // V24
    'edd:preparer': 'préparer',
    'kfr:recouvrant': 'mécréant',
    'hjr:pierre': null, // will search
    // V25
    'bshr:annoncer': 'annoncer une bonne nouvelle',
    'amn:adherer': 'croire',
    'eml:faire': 'travailler',
    'slh:reformer': 'réformer',
    'nhr:riviere': 'rivière',
    'zwj:conjoint': 'époux',
    'xld:eternel': 'demeurer éternellement',
    'thr:purifier': null, // will search
    'jnn:jardin': null, // will search
    'jry:couler': 'couler',
    'tht:sous': null, // will search
    'thmr:fruit': null, // will search
    // V26
    'hyy:avoir honte': 'pudeur',
    'hqq:verite': 'vérité',
    'rbb:maitre': 'celui qui possède',
    'kfr:recouvrir': 'mécréant',
    'rwd:vouloir': 'désirer',
    'dll:egarer': 'faire égarer',
    'fsq:deviant': 'sortir de l\'obéissance',
    'drb:frapper': null, // will search
    'bed:moustique': 'moustique',
    // V27
    'khsr:perdant': 'perdre',
    'nqd:rompre': 'rompre',
    'ehd:pacte': null, // will search
    'wthq:lier solidement': 'lier solidement',
    'qte:couper': null, // will search
    'amr:ordonner': 'ordonner',
    'wsl:joindre': 'joindre',
    'fsd:corrompre': null, // will search
    'baed:apres': 'après',
    // V28
    'mwt:faire mourir': 'mourir',
    'hyy:donner la vie': 'donner la vie',
    'rje:retourner': null, // will search
    // V29
    'jme:entierement': 'rassembler',
    'swy:se tourner vers': 'se tenir droit',
    'swy:faconner': 'achever',
    'elm:connaisseur': null, // will search
    // V30
    'mlk:ange': null, // will search
    'xlf:successeur': 'succéder',
    'sfk:verser': null, // will search
    'dmw:sang': null, // will search
    'sbh:glorifier': null, // will search
    'hmd:louange': null, // will search
    'qds:sanctifier': 'sanctifier',
  };

  // Concept name overrides
  const conceptOverrides = {
    'nws:Humanite/Peuple': 'Humanité/Peuple',
    'ebd:Soumission/Servitude': 'Servitude/Esclavage',
    'rbb:Maitrise/Possession': 'Seigneurie/Autorité bienveillante',
    'xlq:Creation/Production': 'Création/Production',
    'qbl:Anteriorite/Precedence': 'Antériorité/Passé',
    'wqy:Protection/Prevention': 'Protection/Préservation',
    'jel:Action/Realisation': 'Action/Réalisation',
    'frš:Etalement/Literie': 'Étalement/Literie',
    'bny:Construction/Edification': 'Construction/Édification',
    'nzl:Descente/Revelation': 'Descente/Révélation',
    'xrj:Sortie/Extraction': 'Sortie/Émergence',
    'rzq:Provision/Subsistance': 'Subsistance/Provision',
    'alh:Divinite': 'Divinité',
    'ndd:Rivalite/Egalite': null, // need fuzzy match
    'aty:Venue/Apport': 'Venue/Arrivée',
    'swr:Rangee/Section': 'Forme/Image',
    'mvl:Ressemblance/Equivalence': 'Similitude/Comparaison',
    'dwn:Inferiorite/Exclusion': 'Infériorité/En-dessous',
    'sdq:Verite/Sincerite': 'Vérité/Sincérité',
    'fel:Action/Realisation': 'Action/Acte',
    'nwr:Feu/Chaleur': null, // need search
    'hjr:Pierre/Roche': null, // need search
    'edd:Preparation': null, // need search
    'kfr:Couverture/Dissimulation': null, // need search
    'bshr:Annonce/Rejouissance': null, // need search
    'amn:Foi/Adhesion': null, // need search
    'eml:Action/Travail': null, // need search
    'slh:Bonte/Rectitude': null, // need search
    'jnn:Jardin/Paradis': null, // need search
    'jry:Ecoulement/Mouvement': null, // need search
    'tht:Position inferieure': null, // need search
    'nhr:Cours d\'eau': null, // need search
    'zwj:Couple/Paire': null, // need search
    'thr:Purete/Proprete': null, // need search
    'xld:Eternite/Permanence': null, // need search
    'hyy:Pudeur/Honte': null, // need search
    'drb:Exemple/Parabole': null, // need search
    'hqq:Verite/Realite': null, // need search
    'rwd:Volonte/Intention': null, // need search
    'dll:Egarement/Deviation': null, // need search
    'kṯr:Abondance/Multiplicite': null, // need search
    'hdy:Guidance/Direction': null, // need search
    'fsq:Deviation/Sortie': null, // need search
    'nqd:Rupture/Dissolution': null, // need search
    'ehd:Pacte/Engagement': null, // need search
    'baed:Posteriorite': null, // need search
    'wthq:Fermete/Confiance': null, // need search
    'qte:Coupure/Separation': null, // need search
    'amr:Commandement/Autorite': null, // need search
    'wsl:Liaison/Connexion': null, // need search
    'fsd:Corruption/Desordre': null, // need search
    'khsr:Perte/Diminution': null, // need search
    'mwt:Mort/Cessation': null, // need search
    'hyy:Vie/Existence': null, // need search
    'rje:Retour/Reversion': null, // need search
    'jme:Totalite': null, // need search
    'swy:Direction/Orientation': null, // need search
    'swy:Rectitude/Perfection': null, // need search
    'smw:Ciel/Ce qui couvre': null, // need search
    'kll:Totalite': null, // need search
    'elm:Savoir/Connaissance': null, // need search
    'qwl:Parole/Enonciation': null, // need search
    'mlk:Ange/Messager': null, // need search
    'xlf:Succession/Remplacement': null, // need search
    'sfk:Ecoulement/Versement': null, // need search
    'dmw:Sang': null, // need search
    'sbh:Glorification/Louange': null, // need search
    'hmd:Louange/Eloge': null, // need search
    'qds:Sacralite/Purete': null, // need search
    'kwn:Etre/Existence': null, // need search
    'bed:Sens isole/Moustique': null, // need search
    'bed:Partie/Division': null, // need search
  };

  // ============================================
  // FIX 1: Fix concept_chosen in VWAs
  // ============================================
  console.log('=== FIX 1: concept_chosen dans VWA ===');
  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax || !ax.concepts) continue;

    const cc = ax.concept_chosen;
    const concepts = conceptMap[vwa.word_key] || {};
    let changed = false;

    // Check if concept_chosen needs fixing
    if (cc && !concepts[cc]) {
      // Try override
      const overrideKey = vwa.word_key + ':' + cc;
      let newConcept = conceptOverrides[overrideKey];
      if (!newConcept) {
        // Try fuzzy match
        newConcept = findConcept(vwa.word_key, cc);
      }
      if (newConcept && concepts[newConcept]) {
        ax.concept_chosen = newConcept;
        changed = true;
      }
    }

    // Also fix concept keys in the concepts object
    const conceptKeys = Object.keys(ax.concepts);
    for (const ck of conceptKeys) {
      if (!concepts[ck]) {
        const overrideKey = vwa.word_key + ':' + ck;
        let newKey = conceptOverrides[overrideKey];
        if (!newKey) newKey = findConcept(vwa.word_key, ck);
        if (newKey && newKey !== ck) {
          ax.concepts[newKey] = ax.concepts[ck];
          delete ax.concepts[ck];
          changed = true;
        }
      }
    }

    if (changed) {
      const { error: e } = await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', vwa.id);
      if (e) { console.log('ERR VWA', vwa.id, vwa.word_key, e.message); err++; }
      else { console.log('OK concept fix VWA', vwa.id, vwa.word_key, '→', ax.concept_chosen); ok++; }
    }
  }

  // ============================================
  // FIX 2: Fix sense_retenu in segments
  // ============================================
  console.log('\n=== FIX 2: sense_retenu dans segments ===');
  const { data: verses } = await db.from('verse_analyses').select('verse_id, segments').in('verse_id', verseIds);

  for (const v of verses) {
    const segs = v.segments || [];
    let changed = false;

    for (const seg of segs) {
      if (seg.is_particle || !seg.word_key || !seg.sense_retenu) continue;

      const wk = seg.word_key;
      const sr = seg.sense_retenu;
      const concepts = conceptMap[wk] || {};
      const allSenses = Object.values(concepts).flat();

      if (allSenses.length > 0 && !allSenses.includes(sr)) {
        // Try override
        const key = wk + ':' + sr;
        let newSense = senseOverrides[key];
        if (!newSense) newSense = findSense(wk, sr);
        if (!newSense && allSenses.length > 0) {
          // Last resort: pick first sense that normalize-matches
          const normSr = normalize(sr);
          newSense = allSenses.find(s => normalize(s).includes(normSr) || normSr.includes(normalize(s)));
        }

        if (newSense) {
          seg.sense_retenu = newSense;
          changed = true;
        }
      }
    }

    if (changed) {
      const { error: e } = await db.from('verse_analyses').update({ segments: segs }).eq('verse_id', v.verse_id);
      if (e) { console.log('ERR segs v' + v.verse_id, e.message); err++; }
      else { console.log('OK segs v' + v.verse_id); ok++; }
    }
  }

  // ============================================
  // FIX 3: Fix sense_chosen in VWAs
  // ============================================
  console.log('\n=== FIX 3: sense_chosen dans VWA ===');
  // Re-fetch VWAs after concept fix
  const { data: vwas2 } = await db.from('verse_word_analyses').select('id, word_key, verse_id, analysis_axes').in('verse_id', verseIds).order('id');
  // Re-fetch segments
  const { data: verses2 } = await db.from('verse_analyses').select('verse_id, segments').in('verse_id', verseIds);
  const segMap = {};
  for (const v of verses2) {
    for (const seg of (v.segments || [])) {
      if (seg.word_key && seg.sense_retenu) {
        const key = v.verse_id + ':' + seg.word_key;
        if (!segMap[key]) segMap[key] = seg.sense_retenu;
      }
    }
  }

  for (const vwa of vwas2) {
    const ax = vwa.analysis_axes;
    if (!ax) continue;
    const key = vwa.verse_id + ':' + vwa.word_key;
    const segSense = segMap[key];
    if (segSense && ax.sense_chosen !== segSense) {
      ax.sense_chosen = segSense;
      const { error: e } = await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', vwa.id);
      if (e) { console.log('ERR sense_chosen VWA', vwa.id, e.message); err++; }
      else { console.log('OK sense_chosen VWA', vwa.id, vwa.word_key, '→', segSense); ok++; }
    }
  }

  console.log(`\nDone: ${ok} OK, ${err} errors`);
}

fix().catch(console.error);
