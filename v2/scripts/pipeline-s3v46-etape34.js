// Pipeline S3:V46 — Étapes 2-3-4
// Verset: وَيُكَلِّمُ ٱلنَّاسَ فِى ٱلْمَهْدِ وَكَهْلًا وَمِنَ ٱلصَّٰلِحِينَ
// verse_id=339, VA_ID=698

const { createClient } = require('@supabase/supabase-js');
const sb = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const VERSE_ID = 339;
const VA_ID = 698;

async function main() {
  console.log('=== PIPELINE S3:V46 ===\n');

  // =====================================================
  // 1a. ENRICHIR klm (478) — 5→8 sens
  // =====================================================
  console.log('--- 1a. Enrichir klm (ك ل م) ---');
  const { data: klmExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', 478);
  console.log('klm existant: ' + klmExisting.length + ' sens');

  const klmNew = [
    {
      analysis_id: 478, sense: "s'adresser à", concept: "Parole/Discours",
      description: "Diriger la parole vers quelqu'un en particulier — la forme II (kallama) ajoute l'intensité et la transitivité : on ne parle pas dans le vide, on parle À quelqu'un directement.",
      meaning_type: 'etymology', display_order: 6
    },
    {
      analysis_id: 478, sense: "discours", concept: "Parole/Discours",
      description: "Série de paroles organisées formant un message cohérent — allocution, propos suivis.",
      meaning_type: 'etymology', display_order: 7
    },
    {
      analysis_id: 478, sense: "expression", concept: "Parole/Discours",
      description: "Formulation d'une idée en mots — assertion, avis formulé, opinion exprimée.",
      meaning_type: 'etymology', display_order: 8
    }
  ];
  const { error: klmErr } = await sb.from('word_meanings').insert(klmNew);
  if (klmErr) { console.log('ERREUR klm:', klmErr.message); return; }
  console.log('klm insert: ' + klmNew.length + ' sens OK → ' + (klmExisting.length + klmNew.length) + ' total');
  await sb.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 478);

  // =====================================================
  // 1b. ENRICHIR mhd (1003) — 5→15 sens
  // =====================================================
  console.log('\n--- 1b. Enrichir mhd (م ه د) ---');
  const { data: mhdExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', 1003);
  console.log('mhd existant: ' + mhdExisting.length + ' sens');

  const mhdNew = [
    // Nouveau concept: Terre/Étendue
    {
      analysis_id: 1003, sense: "terre étendue", concept: "Terre/Étendue",
      description: "La terre comme surface aplanie et étendue — le sol rendu habitable et praticable. La terre-étendue est un lieu permanent, passif, qui accueille ceux qui y vivent. Le Lane's cite le verset coranique 78:6 : n'avons-nous pas fait la terre une étendue adaptée pour être parcourue.",
      meaning_type: 'etymology', display_order: 6
    },
    {
      analysis_id: 1003, sense: "terrain élevé", concept: "Terre/Étendue",
      description: "Portion de terre qui s'élève — colline ou butte.",
      meaning_type: 'etymology', display_order: 7
    },
    {
      analysis_id: 1003, sense: "terrain plat", concept: "Terre/Étendue",
      description: "Portion de terre basse, lisse et régulière — déprimée et aplanie.",
      meaning_type: 'etymology', display_order: 8
    },
    // Nouveau concept: Subsistance/Effort
    {
      analysis_id: 1003, sense: "gagner sa subsistance", concept: "Subsistance/Effort",
      description: "Travailler pour obtenir de quoi vivre — le gain est un acte extérieur de préparation de soi pour soi. C'est un effort dirigé vers l'extérieur qui revient vers celui qui le fournit. Le Lane's cite mahada li-nafsihi : il a gagné et cherché sa subsistance pour lui-même.",
      meaning_type: 'etymology', display_order: 9
    },
    {
      analysis_id: 1003, sense: "travailler pour soi", concept: "Subsistance/Effort",
      description: "Fournir un effort personnel pour préparer son avenir — acte de prévoyance.",
      meaning_type: 'etymology', display_order: 10
    },
    // Enrichir concept existant: Préparation/Aplanissement
    {
      analysis_id: 1003, sense: "arranger une affaire", concept: "Préparation/Aplanissement",
      description: "Régler et aplanir une situation compliquée — rendre les choses lisses et faciles. Le Lane's cite mahhada (forme II) : il a arrangé, réglé une affaire et l'a rendue facile.",
      meaning_type: 'etymology', display_order: 11
    },
    {
      analysis_id: 1003, sense: "accepter une excuse", concept: "Préparation/Aplanissement",
      description: "Admettre une excuse — aplanir le terrain de la relation en laissant passer la faute.",
      meaning_type: 'etymology', display_order: 12
    },
    {
      analysis_id: 1003, sense: "disposer son esprit", concept: "Préparation/Aplanissement",
      description: "Préparer son esprit, se disposer intérieurement à faire quelque chose — soumettre sa volonté à une tâche.",
      meaning_type: 'etymology', display_order: 13
    },
    // Nouveau concept: Sens isolé/Divers
    {
      analysis_id: 1003, sense: "beurre pur", concept: "Sens isolé/Divers",
      description: "Le beurre le plus pur quand il est fondu — le Lane's cite mahīd comme le beurre le plus pur, celui qui contient le moins de lait.",
      meaning_type: 'etymology', display_order: 14
    },
    {
      analysis_id: 1003, sense: "eau tiède", concept: "Sens isolé/Divers",
      description: "Eau ni chaude ni froide — température modérée, aplanie entre les extrêmes.",
      meaning_type: 'etymology', display_order: 15
    }
  ];
  const { error: mhdErr } = await sb.from('word_meanings').insert(mhdNew);
  if (mhdErr) { console.log('ERREUR mhd:', mhdErr.message); return; }
  console.log('mhd insert: ' + mhdNew.length + ' sens OK → ' + (mhdExisting.length + mhdNew.length) + ' total');
  await sb.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 1003);

  // =====================================================
  // 1c. CRÉER kahl (ك ه ل) — nouvelle racine
  // =====================================================
  console.log('\n--- 1c. Créer kahl (ك ه ل) ---');

  // Vérifier si kahl existe déjà
  const { data: kahlCheck } = await sb.from('word_analyses').select('id').eq('word_key', 'kahl');
  let kahlAid;

  if (kahlCheck && kahlCheck.length > 0) {
    kahlAid = kahlCheck[0].id;
    console.log('kahl existe déjà: aid=' + kahlAid);
  } else {
    const { data: kahlInsert, error: kahlCreateErr } = await sb.from('word_analyses').insert({
      word_key: 'kahl',
      root_ar: 'ك ه ل',
      root_phon: 'khl',
      analysis_step: 'etymology',
      total_occurrences: 2
    }).select('id').single();
    if (kahlCreateErr) { console.log('ERREUR kahl create:', kahlCreateErr.message); return; }
    kahlAid = kahlInsert.id;
    console.log('kahl créé: aid=' + kahlAid + ', occurrences=2 (S3:46, S5:110)');
  }

  // Vérifier si des sens existent déjà
  const { data: kahlExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', kahlAid);
  if (kahlExisting && kahlExisting.length > 0) {
    console.log('kahl: ' + kahlExisting.length + ' sens existent déjà → SKIP');
  } else {
    const kahlSenses = [
      // Concept: Maturité/Plénitude
      {
        analysis_id: kahlAid, sense: "être d'âge mûr", concept: "Maturité/Plénitude",
        description: "État d'avoir atteint la pleine maturité physique et intellectuelle — entre la jeunesse et la vieillesse. La maturité est un état permanent dans sa phase : on y est tant qu'on n'a pas vieilli. C'est un état intérieur de plénitude, pas un acte dirigé vers l'extérieur. Le Lane's définit kahl comme l'homme entre la jeunesse (shabāb) et l'apparition des cheveux gris mêlés de blanc.",
        meaning_type: 'etymology', display_order: 1
      },
      {
        analysis_id: kahlAid, sense: "homme mûr", concept: "Maturité/Plénitude",
        description: "L'homme qui a atteint l'âge de pleine maturité — ni jeune ni vieux.",
        meaning_type: 'etymology', display_order: 2
      },
      {
        analysis_id: kahlAid, sense: "maturité", concept: "Maturité/Plénitude",
        description: "La phase de vie entre la jeunesse et la vieillesse — la kuhūla.",
        meaning_type: 'etymology', display_order: 3
      },
      {
        analysis_id: kahlAid, sense: "atteindre la pleine croissance", concept: "Maturité/Plénitude",
        description: "Se dit d'une plante qui a atteint sa taille maximale. Le Lane's cite ikhtahala : la plante est devenue haute et pleinement développée.",
        meaning_type: 'etymology', display_order: 4
      },
      {
        analysis_id: kahlAid, sense: "s'épanouir", concept: "Maturité/Plénitude",
        description: "Fleurir, atteindre la plénitude de son développement — se dit d'une plante qui fleurit à pleine maturité.",
        meaning_type: 'etymology', display_order: 5
      },
      // Concept: Anatomie/Corps
      {
        analysis_id: kahlAid, sense: "garrot", concept: "Anatomie/Corps",
        description: "Partie anatomique entre les épaules, à la base du cou — le point le plus élevé du dos chez le cheval. C'est un lieu physique précis sur le corps. Le Lane's définit kāhil comme la partie antérieure du haut du dos, à côté du cou, contenant six vertèbres, ou la partie entre les deux omoplates, ou la jonction entre le cou et le dos.",
        meaning_type: 'etymology', display_order: 6
      },
      {
        analysis_id: kahlAid, sense: "base du cou", concept: "Anatomie/Corps",
        description: "La jonction entre le cou et le haut du dos — partie postérieure du cou.",
        meaning_type: 'etymology', display_order: 7
      }
    ];
    const { error: kahlSensesErr } = await sb.from('word_meanings').insert(kahlSenses);
    if (kahlSensesErr) { console.log('ERREUR kahl senses:', kahlSensesErr.message); return; }
    console.log('kahl insert: ' + kahlSenses.length + ' sens OK (2 concepts)');
  }

  // =====================================================
  // 2. VÉRIFIER RICHESSE APRÈS ENRICHISSEMENT
  // =====================================================
  console.log('\n--- 2. Richesse des racines ---');
  const rootChecks = [
    { key: 'klm', aid: 478 },
    { key: 'nws', aid: 303 },
    { key: 'mhd', aid: 1003 },
    { key: 'kahl', aid: kahlAid },
    { key: 'slh', aid: 326 }
  ];
  const conceptsMap = {};
  for (const r of rootChecks) {
    const { data: meanings } = await sb.from('word_meanings').select('sense,concept,description').eq('analysis_id', r.aid).order('display_order');
    const concepts = {};
    meanings.forEach(m => {
      if (!concepts[m.concept]) concepts[m.concept] = [];
      concepts[m.concept].push(m.sense);
    });
    conceptsMap[r.key] = concepts;
    const cNames = Object.keys(concepts);
    console.log(`${r.key} (aid=${r.aid}): ${meanings.length} sens, ${cNames.length} concepts`);
  }

  // =====================================================
  // 3. CORRIGER LES SEGMENTS
  // =====================================================
  console.log('\n--- 3. Fix segments ---');
  const { data: vaData } = await sb.from('verse_analyses').select('segments_step1').eq('id', VA_ID).single();
  const segs = vaData.segments_step1;

  // pos=3: fix corrupted phon/arabic "فِY" → "فِى"
  const seg3 = segs.find(s => s.position === 3);
  if (seg3) {
    seg3.phon = 'فِى';
    seg3.arabic = 'فِى';
    console.log('pos=3: phon/arabic "فِY" → "فِى"');
  }

  // pos=5: key "khl" → "kahl", fix root association
  const seg5 = segs.find(s => s.position === 5);
  if (seg5) {
    seg5.key = 'kahl';
    seg5.word_key = 'kahl';
    console.log('pos=5: key "khl" → "kahl" (root ك ه ل)');
  }

  const { error: segErr } = await sb.from('verse_analyses').update({ segments_step1: segs }).eq('id', VA_ID);
  if (segErr) { console.log('ERREUR segments:', segErr.message); return; }
  console.log('Segments mis à jour');
  const important = segs.filter(s => s.type === 'important');
  const particles = segs.filter(s => s.type === 'particle');
  console.log(`Important: ${important.length} | Particle: ${particles.length} | Total: ${segs.length}`);

  // =====================================================
  // 4. VWA — 5 entries
  // =====================================================
  console.log('\n--- 4. VWA ---');
  await sb.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);

  const vwaEntries = [
    // pos=1: yukallim → klm(478) — parler
    {
      verse_id: VERSE_ID, word_key: 'klm', root: 'ك ل م', position: 1,
      sense_chosen: 'parler',
      analysis_axes: {
        concept_chosen: "Parole/Discours",
        sense_chosen: "parler",
        concepts: {
          "Parole/Discours": {
            status: "retenu",
            senses: conceptsMap.klm["Parole/Discours"],
            proof_ctx: "Le verbe yukallim à l'inaccompli forme II (une forme intensive et transitive) désigne l'acte de s'adresser directement à quelqu'un. Le sujet est Jésus (référé depuis le verset 45), l'objet est an-nāsa (les gens). C'est un acte de parole directionnel — la parole sort du locuteur et atteint les auditeurs. Le contexte (berceau et âge mûr) souligne que cette capacité de parole est miraculeuse dans le premier cas et normale dans le second. Contrairement à Blessure, aucune violence dans le contexte — il s'agit de communication."
          },
          "Blessure": {
            status: "nul",
            senses: conceptsMap.klm["Blessure"],
            proof_ctx: "Le contexte est une annonce de bonne nouvelle, pas une blessure."
          }
        }
      }
    },
    // pos=2: an-nāsa → nws(303) — gens
    {
      verse_id: VERSE_ID, word_key: 'nws', root: 'ن و س', position: 2,
      sense_chosen: 'gens',
      analysis_axes: {
        concept_chosen: "Humanité/Peuple",
        sense_chosen: "gens",
        concepts: {
          "Humanité/Peuple": {
            status: "retenu",
            senses: conceptsMap.nws["Humanité/Peuple"],
            proof_ctx: "Le nom an-nāsa au pluriel défini accusatif désigne l'ensemble des gens — l'audience à laquelle Jésus s'adressera. Le nom est à l'accusatif car il est l'objet direct de yukallim (il s'adresse AUX gens). Le sens d'humanité/peuple est le seul cohérent — il ne s'agit pas de voir de loin ni d'oublier."
          },
          "Perception/Visibilité": {
            status: "nul",
            senses: conceptsMap.nws["Perception/Visibilité"],
            proof_ctx: "Le contexte est la communication, pas la vision."
          },
          "Sens isolé/Oublier": {
            status: "nul",
            senses: conceptsMap.nws["Sens isolé/Oublier"],
            proof_ctx: "Hors sujet."
          },
          "Sens isolé/Être": {
            status: "nul",
            senses: conceptsMap.nws["Sens isolé/Être"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=4: al-mahdi → mhd(1003) — berceau
    {
      verse_id: VERSE_ID, word_key: 'mhd', root: 'م ه د', position: 4,
      sense_chosen: 'berceau',
      analysis_axes: {
        concept_chosen: "Berceau/Couche",
        sense_chosen: "berceau",
        concepts: {
          "Berceau/Couche": {
            status: "retenu",
            senses: conceptsMap.mhd["Berceau/Couche"],
            proof_ctx: "Le nom al-mahd au défini génitif (après la préposition fī) désigne le berceau — le lieu préparé pour l'enfant. Le contexte oppose le berceau (enfance) à l'âge mûr (kahlan), ce qui confirme que al-mahd désigne ici le lieu de l'enfance, pas une surface plane quelconque. Le sens de Berceau/Couche est le seul qui crée un contraste temporel avec kahlan. Contrairement à Préparation/Aplanissement, le texte désigne un lieu physique identifiable (avec fī), pas un acte de préparer."
          },
          "Préparation/Aplanissement": {
            status: "peu_probable",
            senses: conceptsMap.mhd["Préparation/Aplanissement"],
            proof_ctx: "L'acte de préparer ou d'aplanir ne convient pas après fī (dans) — on ne parle pas « dans la préparation ». Le texte désigne un lieu, pas une action."
          },
          "Terre/Étendue": {
            status: "nul",
            senses: conceptsMap.mhd["Terre/Étendue"],
            proof_ctx: "La terre étendue est hors sujet — le contraste avec kahlan (âge mûr) impose un sens temporel/vital, pas géographique."
          },
          "Subsistance/Effort": {
            status: "nul",
            senses: conceptsMap.mhd["Subsistance/Effort"],
            proof_ctx: "Le contexte n'est pas la subsistance mais une étape de vie."
          },
          "Sens isolé/Divers": {
            status: "nul",
            senses: conceptsMap.mhd["Sens isolé/Divers"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=5: kahlan → kahl(new) — être d'âge mûr
    {
      verse_id: VERSE_ID, word_key: 'kahl', root: 'ك ه ل', position: 5,
      sense_chosen: "être d'âge mûr",
      analysis_axes: {
        concept_chosen: "Maturité/Plénitude",
        sense_chosen: "être d'âge mûr",
        concepts: {
          "Maturité/Plénitude": {
            status: "retenu",
            senses: conceptsMap.kahl["Maturité/Plénitude"],
            proof_ctx: "Le nom kahl à l'accusatif indéfini fonctionne comme un ḥāl (une forme qui décrit l'état dans lequel se trouve la personne) : il décrit Jésus dans son état d'homme mûr, en parallèle avec fī l-mahdi (dans le berceau). Le contraste berceau/âge mûr montre deux phases de vie pendant lesquelles Jésus s'adressera aux gens. Le sens de maturité — état d'avoir atteint la pleine croissance entre jeunesse et vieillesse — est le seul cohérent ici. Contrairement à Anatomie/Corps, le contexte décrit une phase de vie, pas une partie du corps."
          },
          "Anatomie/Corps": {
            status: "nul",
            senses: conceptsMap.kahl["Anatomie/Corps"],
            proof_ctx: "Le garrot ou la base du cou sont des parties du corps physique — hors sujet dans un contexte de phases de vie."
          }
        }
      }
    },
    // pos=7: aṣ-ṣāliḥīna → slh(326) — vertueux
    {
      verse_id: VERSE_ID, word_key: 'slh', root: 'ص ل ح', position: 7,
      sense_chosen: 'vertueux',
      analysis_axes: {
        concept_chosen: "Bonté/Rectitude",
        sense_chosen: "vertueux",
        concepts: {
          "Bonté/Rectitude": {
            status: "retenu",
            senses: conceptsMap.slh["Bonté/Rectitude"],
            proof_ctx: "Le participe actif aṣ-ṣāliḥīna (une forme qui dit que la personne FAIT activement l'action) au pluriel masculin défini, après min (parmi), désigne ceux qui font activement le bien — les vertueux, les intègres. Le participe actif exige une action continue et volontaire, ce qui correspond à la rectitude comme mode de vie choisi. La description de Jésus comme « parmi les vertueux » complète le portrait annoncé par les messagers : éminent, qui s'adresse aux gens, et vertueux. Contrairement à Sens isolé/Paix, la paix est un résultat ou un état, pas une action que la personne fait activement — le participe actif ne convient pas."
          },
          "Sens isolé/Paix": {
            status: "nul",
            senses: conceptsMap.slh["Sens isolé/Paix"],
            proof_ctx: "Le contexte décrit une qualité personnelle active, pas un état de paix."
          }
        }
      }
    }
  ];

  const { error: vwaErr } = await sb.from('verse_word_analyses').insert(vwaEntries);
  if (vwaErr) { console.log('ERREUR VWA:', vwaErr.message); return; }
  console.log(`VWA insert: ${vwaEntries.length} entries OK`);

  // =====================================================
  // 5. TRADUCTION
  // =====================================================
  console.log('\n--- 5. Translation ---');

  const translation_arab = `Et il s'adressera aux gens au berceau et adulte, et parmi les vertueux.`;

  const full_translation = `Il parlera aux gens, dans le berceau et en son âge mûr et il sera du nombre des gens de bien.`;

  const translation_explanation = `§DEMARCHE§
Ce verset poursuit la description des qualités de Jésus annoncées à Marie par les messagers. Après l'avoir présenté comme « le Messie, Jésus fils de Marie, éminent dans l'ici-bas et l'au-delà, et parmi les rapprochés » (verset 45), les messagers ajoutent ici deux qualités supplémentaires : il s'adressera aux gens dès le berceau, et il sera parmi les vertueux.

**yukallim** (il s'adresse) est un verbe à l'inaccompli (une forme qui indique une action en cours ou habituelle) à la 3ème personne du masculin singulier de la racine k-l-m, forme II (une forme intensive et transitive). La forme II ajoute la transitivité : là où la forme I (kalama) signifie « parler », la forme II (kallama) signifie « s'adresser à quelqu'un, parler directement à ». Le sujet est Jésus, référé depuis le verset 45. L'inaccompli exprime ici une action future (il s'adressera) car le verset décrit des qualités annoncées par les messagers avant la naissance de Jésus. La conjonction **wa** (et) relie cette qualité à celles du verset 45 : éminent, parmi les rapprochés, ET il s'adressera aux gens. On traduit par « il s'adressera ».

**an-nāsa** (les gens) est un nom pluriel défini (avec l'article al-) de la racine n-w-s à l'accusatif (objet direct de yukallim). Le sens premier est « les gens, les êtres humains » — l'ensemble de l'humanité sans distinction. L'accusatif indique que les gens sont ceux À QUI Jésus s'adresse. On traduit par « aux gens ».

**al-mahdi** (le berceau) est un nom masculin défini (avec l'article al-) de la racine m-h-d au génitif, précédé de la préposition **fī** (dans). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le sens premier de la racine m-h-d est « aplanir, rendre lisse, étendre ». Le mahd est le lieu préparé et aplani pour que l'enfant y dorme — le berceau. L'article al- identifie une réalité connue : LE berceau, pas un berceau quelconque. La préposition fī indique le lieu : « dans le berceau » signifie « alors qu'il est encore nourrisson ». On traduit par « au berceau ».

**kahlan** (adulte) est un nom masculin de la racine k-h-l à l'accusatif indéfini, en position de ḥāl (une forme qui décrit l'état dans lequel se trouve la personne). Le Lane's définit kahl comme « l'homme d'âge mûr, entre la jeunesse et l'apparition des cheveux gris ». En arabe, le ḥāl répond à la question « dans quel état ? » — ici, Jésus s'adresse aux gens dans deux états : en tant que nourrisson (fī l-mahdi) et en tant qu'adulte (kahlan). Le contraste entre le berceau et l'âge adulte souligne le caractère miraculeux de la première situation : parler au berceau est extraordinaire, parler adulte est normal. L'accusatif sans préposition est la marque grammaticale du ḥāl. On traduit par « adulte ».

**aṣ-ṣāliḥīna** (les vertueux) est un participe actif (une forme qui dit que la personne FAIT activement l'action) de la racine ṣ-l-ḥ au pluriel masculin défini, au génitif (après la préposition min = parmi). Le sens premier de ṣ-l-ḥ est « être bon, être intègre, être dans un état de rectitude ». Le participe actif ṣāliḥ désigne celui qui fait activement le bien — pas celui qui reçoit le bien passivement, mais celui qui le produit. Le pluriel défini aṣ-ṣāliḥīna identifie une catégorie connue : LES vertueux — un groupe reconnu. La préposition **min** (parmi) et la conjonction **wa** (et) ajoutent cette qualité à la description de Jésus : il est parmi les vertueux. On traduit par « les vertueux ».

§JUSTIFICATION§
**il s'adressera** — Le sens retenu est « parler » de la racine k-l-m. Le mot « s'adressera » est choisi car la forme II (kallama) porte le sens de parler À quelqu'un directement — c'est une parole dirigée vers un interlocuteur. L'alternative « parlera » est acceptable comme synonyme mais « s'adresser à » rend mieux la transitivité de la forme II. L'alternative « blessera » est écartée car c'est le sens du second groupe de la racine (blessure), hors sujet ici.

**aux gens** — Le sens retenu est « gens » de la racine n-w-s. Le mot « gens » est choisi car il désigne l'ensemble des personnes de manière neutre et courante. L'alternative « êtres humains » est écartée car plus formel. L'alternative « peuple » est écartée car elle implique un groupe organisé politiquement, ce que le texte ne précise pas.

**au berceau** — Le sens retenu est « berceau » de la racine m-h-d. Le mot « berceau » est choisi car il désigne le lieu de repos du nourrisson — le mahd est étymologiquement « ce qui a été aplani et préparé pour l'enfant ». L'alternative « couche » est écartée car plus générique — une couche peut être pour n'importe qui, le berceau est spécifiquement pour l'enfant, ce qui renforce le contraste avec « adulte ».

**adulte** — Le sens retenu est « être d'âge mûr » de la racine k-h-l. Le mot « adulte » est choisi car il est le français courant le plus naturel pour exprimer le contraste avec « au berceau ». L'alternative « homme mûr » est acceptable mais « adulte » est plus immédiatement compréhensible. L'alternative « vieillard » est écartée car le kahl est spécifiquement ENTRE la jeunesse et la vieillesse — pas un vieillard.

**les vertueux** — Le sens retenu est « vertueux » de la racine ṣ-l-ḥ. Le mot « les vertueux » est choisi car le participe actif ṣāliḥ désigne celui qui fait activement le bien de manière continue. L'alternative « les gens de bien » est un synonyme courant mais « vertueux » est plus précis — il met l'accent sur la qualité morale de la personne. L'alternative « les réformateurs » est écartée car le sens de réforme (iṣlāḥ) est la forme IV, pas la forme I dont vient ṣāliḥ.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens pour ce verset. Les choix de mots diffèrent légèrement mais ne changent pas le sens global.

**s'adressera vs parlera** : les traductions courantes donnent « parlera » pour yukallim. La nuance est fine : la forme II (kallama) porte une transitivité que « parler » seul ne rend pas — on « parle » en général, mais on « s'adresse » à quelqu'un. Le texte dit yukallim an-nāsa (il s'adresse AUX gens), ce qui implique un discours dirigé, pas une parole en l'air. Cette nuance n'est pas un renversement de sens mais une précision.

**ajout invisible** : les traductions courantes ajoutent « il sera du nombre des » pour rendre wa-min aṣ-ṣāliḥīn. Le texte dit simplement « et parmi les vertueux » sans verbe « être » — en arabe, la structure wa-min (et parmi) suffit à exprimer l'appartenance à une catégorie. L'ajout de « il sera » est une interprétation grammaticale qui transforme une description en prédiction, ce que le texte ne fait pas explicitement.`;

  // Segments d'affichage
  const displaySegments = [
    { fr: "et il s'adressera", pos: "V", phon: "wa-yukallim", arabic: "وَيُكَلِّمُ", word_key: "klm", is_particle: false, sense_retenu: "parler", position: 1 },
    { fr: "aux gens", pos: "N", phon: "an-nāsa", arabic: "ٱلنَّاسَ", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 2 },
    { fr: "dans", pos: "", phon: "fī", arabic: "فِى", word_key: null, is_particle: true, sense_retenu: null, position: 3 },
    { fr: "le berceau", pos: "N", phon: "al-mahdi", arabic: "ٱلْمَهْدِ", word_key: "mhd", is_particle: false, sense_retenu: "berceau", position: 4 },
    { fr: "et adulte", pos: "N", phon: "wa-kahlan", arabic: "وَكَهْلًا", word_key: "kahl", is_particle: false, sense_retenu: "être d'âge mûr", position: 5 },
    { fr: "et parmi", pos: "", phon: "wa-mina", arabic: "وَمِنَ", word_key: null, is_particle: true, sense_retenu: null, position: 6 },
    { fr: "les vertueux", pos: "N", phon: "aṣ-ṣāliḥīna", arabic: "ٱلصَّٰلِحِينَ", word_key: "slh", is_particle: false, sense_retenu: "vertueux", position: 7 }
  ];

  const { error: transErr } = await sb.from('verse_analyses').update({
    translation_arab,
    full_translation,
    translation_explanation,
    segments: displaySegments
  }).eq('id', VA_ID);

  if (transErr) { console.log('ERREUR translation:', transErr.message); return; }
  console.log('Translation save: OK');

  // =====================================================
  // 6. DAILY PHRASES — toutes les racines ont déjà 3 phrases → SKIP
  // =====================================================
  console.log('\n--- 6. Daily phrases ---');

  // Vérifier kahl (nouvelle racine)
  const { count: kahlDailyCount } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', kahlAid);

  if (kahlDailyCount > 0) {
    console.log('kahl(' + kahlAid + '): ' + kahlDailyCount + ' phrases → SKIP');
  } else {
    const kahlDaily = [
      {
        analysis_id: kahlAid,
        sense: "être d'âge mûr",
        arabic: "كهل",
        phon: "kahl",
        french: "C'est un homme mûr, il a de l'expérience."
      },
      {
        analysis_id: kahlAid,
        sense: "maturité",
        arabic: "كهولة",
        phon: "kuhūla",
        french: "Il a atteint l'âge de la maturité."
      },
      {
        analysis_id: kahlAid,
        sense: "atteindre la pleine croissance",
        arabic: "اكتهل",
        phon: "ikhtahala",
        french: "La plante a atteint sa pleine croissance et a fleuri."
      }
    ];
    const { error: kahlDailyErr } = await sb.from('word_daily').insert(kahlDaily);
    if (kahlDailyErr) { console.log('ERREUR daily kahl:', kahlDailyErr.message); return; }
    console.log('kahl(' + kahlAid + '): INSERT 3 phrases OK');
  }

  // Vérifier les autres racines
  for (const r of rootChecks.filter(r => r.key !== 'kahl')) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    console.log(`${r.key} (aid=${r.aid}): ${count} phrases → SKIP`);
  }

  // =====================================================
  // 7. VÉRIFICATION FINALE
  // =====================================================
  console.log('\n--- 7. Vérification finale ---');

  const { data: finalVA } = await sb.from('verse_analyses').select('segments,translation_arab,full_translation,translation_explanation').eq('id', VA_ID).single();
  const impSegs = finalVA.segments.filter(s => !s.is_particle);
  const partSegs = finalVA.segments.filter(s => s.is_particle);
  console.log(`Segments: ${impSegs.length} important, ${partSegs.length} particle, ${finalVA.segments.length} total`);

  const { data: finalVWA } = await sb.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log(`VWA: ${finalVWA.length} entries`);
  finalVWA.forEach(w => console.log(`  pos=${w.position} ${w.word_key} → ${w.sense_chosen}`));

  const vwaPositions = finalVWA.map(w => w.position).sort((a, b) => a - b);
  const segPositions = impSegs.map(s => s.position).sort((a, b) => a - b);
  console.log(`Positions match: ${JSON.stringify(vwaPositions) === JSON.stringify(segPositions) ? 'OK' : 'MISMATCH!'}`);
  if (JSON.stringify(vwaPositions) !== JSON.stringify(segPositions)) {
    console.log('  VWA positions:', vwaPositions);
    console.log('  Seg positions:', segPositions);
  }

  console.log(`full_translation: ${finalVA.full_translation ? 'OK' : 'MISSING!'}`);
  console.log(`translation: ${finalVA.translation_arab ? 'OK' : 'MISSING!'}`);
  console.log(`explanation: ${finalVA.translation_explanation ? 'OK (' + finalVA.translation_explanation.length + ' chars)' : 'MISSING!'}`);

  // Verify sense_retenu matches word_meanings
  const aidMap = { klm: 478, nws: 303, mhd: 1003, kahl: kahlAid, slh: 326 };
  for (const seg of impSegs) {
    const aid = aidMap[seg.word_key];
    if (aid) {
      const { data: meanings } = await sb.from('word_meanings').select('sense').eq('analysis_id', aid);
      const senses = meanings.map(m => m.sense);
      const match = senses.includes(seg.sense_retenu);
      if (!match) console.log(`  ⚠️ pos=${seg.position} sense_retenu="${seg.sense_retenu}" NOT in word_meanings!`);
    }
  }
  console.log('Sense_retenu verification: done');

  // Check for forbidden words
  const hasConceptWord = finalVA.translation_explanation.match(/\bconcept\b/gi);
  const hasPipelineWord = finalVA.translation_explanation.match(/\bpipeline\b/gi);
  if (hasConceptWord) console.log('⚠️ Mot "concept" trouvé dans translation_explanation!');
  if (hasPipelineWord) console.log('⚠️ Mot "pipeline" trouvé dans translation_explanation!');
  if (!hasConceptWord && !hasPipelineWord) console.log('Mots interdits: aucun trouvé ✅');

  console.log('\n=== PIPELINE S3:V46 TERMINÉE ===');
  console.log(`\nVERSET 3:46 — TERMINÉ`);
  finalVWA.forEach(w => console.log(`  ${w.word_key} → sens "${w.sense_chosen}"`));
  console.log(`Traduction : "${finalVA.translation_arab}"`);
}

main().catch(e => console.error(e));
