require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 90 — AL-BALAD — VERSETS 1 À 5
// verse_id=6024 (90:1), verse_id=6025 (90:2), verse_id=6026 (90:3),
// verse_id=6027 (90:4), verse_id=6028 (90:5)
// =====================================================
// Étapes 3-4 : analyse des concepts sur 5 axes + traduction + segments
// concept_chosen names read from DB (exact match with word_meanings)
// =====================================================

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    console.log(`  VWA UPDATE ${word_key} pos=${position}`);
  } else {
    const { error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position });
    if (error) console.log(`  VWA ERROR ${word_key}: ${error.message}`);
    else console.log(`  VWA INSERT ${word_key} pos=${position}`);
  }
}

async function upsertVA(verse_id, data) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    await sb.from('verse_analyses').update(data).eq('id', existing[0].id);
    console.log(`  VA UPDATE verse_id=${verse_id}`);
  } else {
    await sb.from('verse_analyses').insert({ verse_id, ...data });
    console.log(`  VA INSERT verse_id=${verse_id}`);
  }
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysis_id);
  if (count > 0) { console.log(`  Daily SKIP (${count} exist) for id=${analysis_id}`); return; }
  const rows = french.map(fr => ({ analysis_id, sense, arabic, phon, french: fr }));
  await sb.from('word_daily').insert(rows);
  console.log(`  ✓ ${french.length} daily phrases for id=${analysis_id}`);
}

(async () => {
  console.log('=== PIPELINE SOURATE 90 (AL-BALAD) — VERSETS 1 À 5 ===\n');

  // =====================================================
  // Étape préliminaire : lire les concepts depuis la base
  // =====================================================
  const rootIds = [1433, 793, 939, 2576, 344, 2630, 2626, 996, 373, 578];
  const { data: allMeanings, error: meaningsErr } = await sb.from('word_meanings').select('analysis_id, concept, sense').in('analysis_id', rootIds);
  if (meaningsErr) { console.log('ERROR fetching meanings:', meaningsErr.message); return; }
  if (!allMeanings || allMeanings.length === 0) { console.log('ERROR: no meanings found'); return; }

  const conceptsByRoot = {};
  for (const m of allMeanings) {
    if (!conceptsByRoot[m.analysis_id]) conceptsByRoot[m.analysis_id] = {};
    if (!conceptsByRoot[m.analysis_id][m.concept]) conceptsByRoot[m.analysis_id][m.concept] = [];
    conceptsByRoot[m.analysis_id][m.concept].push(m.sense);
  }

  console.log('Concepts lus depuis la base :');
  for (const [rootId, concepts] of Object.entries(conceptsByRoot)) {
    const names = Object.keys(concepts);
    console.log(`  Root ${rootId}: ${names.join(', ')}`);
  }
  console.log('');

  // Helper to get exact concept name from DB
  function getConceptName(rootId, approxName) {
    const concepts = conceptsByRoot[rootId];
    if (!concepts) { console.log(`  WARNING: no concepts for root ${rootId}`); return approxName; }
    for (const name of Object.keys(concepts)) {
      if (name === approxName) return name;
    }
    // Fuzzy match
    for (const name of Object.keys(concepts)) {
      if (name.toLowerCase().includes(approxName.toLowerCase().split('/')[0])) return name;
    }
    console.log(`  WARNING: concept "${approxName}" not found for root ${rootId}, available: ${Object.keys(concepts).join(', ')}`);
    return approxName;
  }

  function getConceptSenses(rootId, conceptName) {
    const concepts = conceptsByRoot[rootId];
    if (!concepts || !concepts[conceptName]) return [];
    return concepts[conceptName];
  }

  // =====================================================
  // VERSET 90:1 (verse_id=6024)
  // لَآ أُقْسِمُ بِهَـٰذَا ٱلْبَلَدِ
  // "Non ! Je jure par cette cité"
  // =====================================================
  console.log('--- VERSET 90:1 (id=6024) ---');

  const qsm_concept = getConceptName(1433, 'Serment');
  const qsm_senses = getConceptSenses(1433, qsm_concept);
  const qsm_partage_concept = getConceptName(1433, 'Partage/Division');
  const qsm_partage_senses = getConceptSenses(1433, qsm_partage_concept);

  const bld_concept = getConceptName(793, 'Territoire/Cité');
  const bld_senses = getConceptSenses(793, bld_concept);

  await upsertVWA(6024, 'qsm', 'jurer', {
    sense_chosen: 'jurer',
    concept_chosen: qsm_concept,
    concepts: {
      [qsm_concept]: {
        status: 'retenu',
        senses: qsm_senses,
        proof_ctx: "Le verbe uqsimu est un inaccompli 1S de la racine q-s-m. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), qasama signifie « il a jure, il a prete serment ». La forme inaccomplie a la premiere personne donne « je jure ». Le serment est un acte de parole solennel, dirige vers l'exterieur — celui qui jure engage sa parole envers un temoignage. La formule la uqsimu (litteralement « non, je jure ») est une formule coranique de serment emphatique. Le « la » (non) ne nie pas le serment mais le renforce — c'est une particule d'insistance qui precede le serment. Ce sens est le seul compatible avec la structure grammaticale du verset : un verbe inaccompli a la premiere personne suivi de la preposition « bi » (par) qui introduit l'objet du serment. Le sens de partage ou de division ne s'applique pas car le verset ne contient aucun objet a diviser — l'objet du verbe est la cite, introduite par la preposition « par », qui est la marque typique du serment.",
        axe1_verset: "Le verbe uqsimu ouvre le verset par un serment solennel. Le champ lexical du verset est celui de l'attestation : jurer (uqsimu), par (bi), cette (hadha), la cite (al-balad). Chaque mot contribue a la formule du serment — le verbe designe l'acte, la preposition introduit l'objet du serment, le demonstratif designe un lieu precis. Le « la » initial n'est pas une negation mais une particule d'insistance qui amplifie la solennite du serment. L'ensemble forme une declaration solennelle d'ouverture, typique des sourates mecquoises qui commencent par des serments divins.",
        axe2_voisins: "Le verset 2 poursuit en disant « et toi, tu es libre dans cette cite ». Le verset 3 jure par « un geniteur et ce qu'il a engendre ». Les versets voisins forment une serie de serments qui s'enchainent — d'abord la cite, puis la presence du prophete dans cette cite, puis la filiation. Cette serie de serments construit un crescendo solennel avant la declaration du verset 4 (« Nous avons cree l'etre humain dans l'epreuve »). Le serment du verset 1 est le premier maillon de cette chaine.",
        axe3_sourate: "La sourate 90 (al-Balad) traite de la cite, de l'epreuve humaine, des choix moraux (liberer un captif, nourrir un orphelin). Le serment par la cite ouvre cette reflexion sur les responsabilites humaines dans la cite. Jurer par la cite, c'est donner a cet espace une valeur sacree — la cite n'est pas un simple lieu de residence mais un espace de responsabilite morale. Le theme de la sourate est que la vie en cite impose des devoirs envers les faibles (captifs, orphelins, pauvres). Le serment initial ancre cette reflexion dans la sacralite du lieu.",
        axe4_coherence: "La racine q-s-m dans le sens de serment apparait dans de nombreux verments coraniques. En 56:75-76, « Non ! Je jure par les positions des etoiles, et c'est un serment immense si vous saviez ». En 75:1-2, « Non ! Je jure par le Jour de la Resurrection, Non ! Je jure par l'ame qui se blame ». La formule « la uqsimu » est recurrente pour ouvrir des passages solennels. Le Coran utilise cette formule pour attirer l'attention sur ce qui suit le serment — l'objet du serment est toujours un signe divin (les etoiles, la resurrection, la cite).",
        axe5_frequence: "Pour la mission du khalifa, le serment par la cite etablit que l'espace de vie est sacre. Le khalifa (representant de Dieu sur terre) a une responsabilite envers la cite et ses habitants. Jurer par la cite, c'est rappeler que cet espace est un depot confie a l'etre humain — il doit y etablir la justice et y empecher la corruption. La sourate developpera ensuite les actes concrets de cette responsabilite (liberer les captifs, nourrir les pauvres). Le serment initial lie la sacralite du lieu a la mission morale de l'etre humain."
      },
      [qsm_partage_concept]: {
        status: 'nul',
        senses: qsm_partage_senses,
        proof_ctx: "Le sens de partage ou de division ne s'applique pas au verset 90:1. Le verbe uqsimu est suivi de la preposition « bi » (par), qui est la marque exclusive du serment en arabe. Si le verbe signifiait « je divise », il serait suivi d'un complement direct (l'objet a diviser) et non de la preposition « bi ». De plus, le verset ne contient aucun objet a diviser — la cite est l'objet du serment, pas un objet a partager."
      }
    }
  }, 2);

  await upsertVWA(6024, 'bld', 'cite', {
    sense_chosen: 'cite',
    concept_chosen: bld_concept,
    concepts: {
      [bld_concept]: {
        status: 'retenu',
        senses: bld_senses,
        proof_ctx: "Le mot al-baladi est un nom defini au genitif de la racine b-l-d. D'apres les sources etymologiques, balad signifie « ville, cite, territoire, pays ». L'article defini « al- » designe une cite connue et specifique. Le demonstratif « hadha » (cette) confirme qu'il s'agit d'un lieu precis que l'interlocuteur connait. Le genitif est regi par la preposition « bi » (par) dans la formule du serment. La cite est l'objet du serment — jurer par un territoire, c'est lui donner une valeur sacree. Le texte ne precise pas le nom de la cite ; il dit simplement « cette cite », laissant l'identification au contexte.",
        axe1_verset: "Le mot al-baladi est l'objet central du serment. Le champ lexical du verset tourne autour de la solennite : le serment (uqsimu) porte sur un lieu (al-balad) designe avec precision (hadha, cette). L'article defini « al- » et le demonstratif « hadha » creent une double determination — cette cite est connue, proche, identifiable. Le mot balad designe un espace habite, un territoire ou vivent des gens. C'est un lieu de vie collective, pas un paysage vide.",
        axe2_voisins: "Le verset 2 reprend le meme mot (hadha al-balad, cette cite) pour dire « et toi, tu es libre dans cette cite ». La repetition du mot balad dans deux versets consecutifs insiste sur l'importance de ce lieu. La cite n'est pas seulement l'objet du serment — elle est aussi le cadre de la liberte du prophete. Le verset 3 elargit le propos a la filiation (geniteur et engendre), puis le verset 4 declare la creation de l'etre humain dans l'epreuve. La cite est le point de depart qui mene a une reflexion universelle.",
        axe3_sourate: "La sourate porte le nom « al-Balad » (la Cite). Le mot balad est donc le mot-cle qui structure toute la sourate. La cite est le lieu ou se jouent les choix moraux — liberer un captif (v. 13), nourrir un orphelin (v. 15), nourrir un pauvre (v. 16). La cite n'est pas un decor mais le theatre de l'action morale. Jurer par la cite, c'est jurer par le lieu ou l'etre humain est mis a l'epreuve et ou il doit agir.",
        axe4_coherence: "La racine b-l-d apparait 19 fois dans le Coran. En 14:35, Ibrahim dit « Seigneur, rends cette cite sure ». En 27:91, « il m'a ete ordonne d'adorer le Seigneur de cette cite ». En 95:3, « par cette cite sure ». La cite est systematiquement associee a la sacralite et a la securite dans le Coran. Jurer par la cite dans la sourate 90 s'inscrit dans cette tradition coranique de sacralisation de l'espace habite.",
        axe5_frequence: "Pour la mission du khalifa, la cite est l'espace de la responsabilite. Le khalifa est place sur terre pour y etablir l'ordre et la justice — la cite est le lieu concret de cette mission. Jurer par la cite rappelle que l'espace de vie collective n'est pas un bien a exploiter mais un depot sacre. La sourate montrera que dans cette cite, l'etre humain doit franchir l'obstacle (v. 11) en liberant des captifs et en nourrissant les orphelins. La cite est le lieu ou la mission du khalifa se realise ou echoue."
      }
    }
  }, 4);

  await upsertVA(6024, {
    translation_arab: "Non ! Je jure par cette cite",
    full_translation: "Non !... Je jure par cette Cité !",
    translation_explanation: `§DEMARCHE§
Le mot **la** est une particule de negation qui, placee devant le verbe du serment, fonctionne comme une particule d'insistance emphatique. Elle ne nie pas le serment mais le renforce — c'est une tournure rhetorique arabe qui signifie « assurement, je jure ». Le verbe **uqsimu** est un inaccompli a la premiere personne singuliere (une forme qui dit que l'action est en cours ou habituelle) de la racine q-s-m. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), qasama signifie « jurer, preter serment ». L'inaccompli a la premiere personne donne « je jure » — l'action du serment est presentee comme actuelle. La preposition **bi** (par) introduit l'objet du serment — c'est la construction typique du serment en arabe : « je jure PAR ». Le demonstratif **hadha** (ce, cette) designe un objet proche et connu de l'interlocuteur. Le mot **al-baladi** est un nom defini au genitif de la racine b-l-d. Le Lane's donne « ville, cite, territoire ». L'article defini « al- » plus le demonstratif « hadha » creent une double determination — cette cite est specifique et connue. Le genitif est regi par la preposition « bi ».

§JUSTIFICATION§
**jure** — Le sens retenu est « serment ». Le mot « jure » est choisi car c'est l'equivalent direct du verbe uqsimu en francais courant. L'alternative « divise » est ecartee car la preposition « bi » (par) est incompatible avec le sens de division — on ne dit pas « je divise par cette cite ».

**cite** — Le sens retenu est « territoire/cite ». Le mot « cite » est choisi car il designe un espace habite, un lieu de vie collective. L'alternative « pays » est ecartee car trop vague — le demonstratif « cette » pointe vers un lieu precis et proche, pas vers un pays entier. L'alternative « terre » est ecartee car balad designe specifiquement un lieu habite, pas la terre en general.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. La formule « Non ! Je jure par cette cite » est largement partagee. La seule variation notable concerne le « la » initial que certains traducteurs rendent par « Non » (Hamidullah) et d'autres par « Je jure » en omettant la negation. Le texte dit « la uqsimu » — la particule « la » devant le serment est une formule d'insistance, pas une negation du serment. Les deux traductions sont defensables.`,
    segments: JSON.stringify([
      { fr: "Non !", phon: "la", arabic: "لَآ", is_particle: true, position: 1 },
      { fr: "Je jure", pos: "verbe", phon: "uqsimu", arabic: "أُقْسِمُ", word_key: "qsm", is_particle: false, sense_retenu: "jurer", position: 2 },
      { fr: "par", phon: "bi", arabic: "بِ", is_particle: true, position: 3 },
      { fr: "cette", phon: "hadha", arabic: "هَـٰذَا", is_particle: true, position: 4 },
      { fr: "cite", pos: "nom", phon: "al-baladi", arabic: "ٱلْبَلَدِ", word_key: "bld", is_particle: false, sense_retenu: "cite", position: 5 }
    ])
  });

  console.log('  Verset 90:1 terminé\n');


  // =====================================================
  // VERSET 90:2 (verse_id=6025)
  // وَأَنتَ حِلٌّۢ بِهَـٰذَا ٱلْبَلَدِ
  // "Et toi, tu es libre dans cette cité"
  // =====================================================
  console.log('--- VERSET 90:2 (id=6025) ---');

  const hll_liceite = getConceptName(939, 'Licéité/Permission');
  const hll_liceite_senses = getConceptSenses(939, hll_liceite);
  const hll_install = getConceptName(939, 'Installation');
  const hll_install_senses = getConceptSenses(939, hll_install);
  const hll_dissol = getConceptName(939, 'Dissolution/Libération');
  const hll_dissol_senses = getConceptSenses(939, hll_dissol);

  await upsertVWA(6025, 'hll', 'libre', {
    sense_chosen: 'libre',
    concept_chosen: hll_liceite,
    concepts: {
      [hll_liceite]: {
        status: 'retenu',
        senses: hll_liceite_senses,
        proof_ctx: "Le mot hillun est un nom indefini au nominatif de la racine h-l-l. D'apres les sources etymologiques, halla signifie « etre licite, etre permis ». Le Lane's donne pour hillun « one for whom a thing is, or has become, lawful or allowable ». Le mot hillun designe donc une personne pour qui quelque chose est licite — ici, la cite lui est licite, il y est en droit. C'est un etat de droit, pas un acte de dissolution. La liceite est un jugement normatif qui dit que la personne a le droit d'etre la et d'y agir. Le sens d'installation est proche mais secondaire : le Lane's donne aussi « one who has alighted, descended, or settled » — mais la structure du verset (« tu es hillun dans cette cite ») met l'accent sur le statut (licite, libre) plutot que sur l'acte physique de s'installer. La distinction philosophique entre la liceite et l'installation est que la liceite decrit un DROIT (une permission), tandis que l'installation decrit un FAIT (une presence physique). Le verset dit « tu es libre/licite DANS cette cite » — c'est le statut de la personne dans la cite qui est en jeu, pas son acte d'y habiter.",
        axe1_verset: "Le mot hillun qualifie le statut du « tu » (anta) dans la cite. Le champ lexical du verset est celui de la presence legitime : toi (anta), libre/licite (hillun), dans (bi), cette (hadha), la cite (al-balad). Le verset dit que la personne a un statut de liceite dans cet espace sacre. Le mot hillun est un predicat nominal — il decrit un etat permanent, pas une action ponctuelle. La phrase nominale (anta hillun) exprime une verite stable : tu ES libre dans cette cite, c'est ton etat.",
        axe2_voisins: "Le verset 1 jurait par la cite. Le verset 2 precise que le « tu » est libre dans cette meme cite. Le passage du serment (verset 1) a la declaration de liberte (verset 2) cree un lien entre la sacralite du lieu et le droit de la personne d'y etre. Le verset 3 poursuivra avec un autre serment (par le geniteur et ce qu'il a engendre). Le verset 2 est une parenthese entre deux serments — il insere une declaration de statut dans une serie de serments. Cette insertion souligne l'importance du lien entre la personne et la cite.",
        axe3_sourate: "La sourate traite des choix moraux dans la cite : liberer des captifs, nourrir des orphelins. Que le « tu » soit libre dans la cite signifie qu'il a le droit d'y agir — sa liberte est la condition de sa responsabilite morale. On ne peut exiger des choix moraux que de quelqu'un qui est libre. La sourate pose d'abord le cadre (la cite est sacree, tu y es libre) puis les exigences (liberer, nourrir, croire). La liceite est le fondement de la responsabilite.",
        axe4_coherence: "La racine h-l-l apparait 53 fois dans le Coran. En 2:275, « Dieu a rendu licite (ahalla) le commerce et interdit l'usure ». En 5:2, « quand vous quittez l'etat de sacralisation, chassez ». La liceite dans le Coran est toujours un statut normatif — ce qui est permis par opposition a ce qui est interdit. En 9:37, « ils rendent licite une annee et sacree une autre ». Le mot hillun dans 90:2 s'inscrit dans ce registre normatif : la personne est dans un etat de liceite dans la cite.",
        axe5_frequence: "Pour la mission du khalifa, la liberte dans la cite est la condition de l'action morale. Le khalifa ne peut accomplir sa mission de justice et de prevention de la corruption que s'il est libre d'agir dans son espace. Le verset 2 etablit que la personne a ce statut de liberte — elle n'est pas contrainte, elle est en droit. Cette liberte implique une responsabilite : si tu es libre dans cette cite, tu dois y agir pour le bien. La liceite est un privilege qui appelle un devoir."
      },
      [hll_install]: {
        status: 'probable',
        senses: hll_install_senses,
        proof_ctx: "Le sens d'installation est atteste dans les sources etymologiques : hillun peut signifier « celui qui s'est installe, qui a pose ses bagages ». La distinction philosophique avec la liceite est que l'installation decrit un FAIT PHYSIQUE (la personne est la, elle s'est etablie) tandis que la liceite decrit un DROIT NORMATIF (la personne a la permission d'etre la). La structure du verset « tu es hillun dans cette cite » favorise le statut (liceite) plutot que le fait physique (installation), car la phrase nominale en arabe exprime un etat constitutif, pas une circonstance passagere. Cependant, l'installation reste un sens coherent — la personne est un resident etabli dans la cite.",
        axe1_verset: "Le mot hillun dans le sens d'installation decrirait le fait que la personne est un resident de la cite. Le champ lexical du verset (toi, dans cette cite) est compatible avec ce sens — la personne est physiquement presente et etablie dans ce lieu. La phrase nominale (anta hillun) exprimerait alors un etat de residence permanente. Cependant, le verset ne met pas l'accent sur la residence physique mais sur le statut de la personne dans la cite.",
        axe2_voisins: "Le verset 1 jure par la cite et le verset 3 jure par le geniteur. Le verset 2 est une parenthese qui precise le lien entre la personne et la cite. Si hillun signifie « installe », le verset dirait « tu es un resident de cette cite ». C'est coherent mais moins fort que « tu es libre dans cette cite » — l'installation est un fait, la liceite est un droit. Le contexte solennel des serments appelle un sens plus fort qu'une simple constatation de residence.",
        axe3_sourate: "La sourate parle de responsabilite morale dans la cite. L'installation serait le lien physique entre la personne et la cite — tu es la, donc tu as des responsabilites envers ses habitants. C'est coherent avec le theme de la sourate mais moins profond que la liceite qui etablit un lien de droit. La responsabilite morale vient du droit d'agir, pas seulement du fait d'etre present.",
        axe4_coherence: "La racine h-l-l dans le sens d'installation apparait en 2:196 et 5:2 dans le contexte du pelerinage — les pelerins « descendent » (yahilluna) de leur etat de sacralisation. Le sens de descendre et s'installer est lie au contexte du voyage et du pelerinage. En 90:2, le contexte n'est pas celui d'un voyage mais d'un statut permanent dans la cite. Le sens d'installation est possible mais moins precis que celui de liceite pour ce contexte.",
        axe5_frequence: "L'installation dans la cite est un prerequis de la mission du khalifa — il faut etre present pour agir. Mais la mission du khalifa ne se limite pas a la presence physique, elle exige un droit d'agir. L'installation est la condition materielle, la liceite est la condition juridique et morale. Le verset semble viser la condition morale plutot que materielle."
      },
      [hll_dissol]: {
        status: 'peu_probable',
        senses: hll_dissol_senses,
        proof_ctx: "Le sens de dissolution ou de liberation est atteste dans les sources etymologiques : halla signifie aussi « il a delie, il a dissous ». Mais le mot hillun dans le verset est un NOM qui decrit un etat de la personne (« tu es hillun »), pas un verbe qui decrit une action de deliaison. Le sens de dissolution impliquerait que la personne a ete deliee de quelque chose — or le verset ne mentionne aucun lien dont la personne aurait ete liberee. La dissolution est un acte ponctuel (on delie quelque chose), tandis que le verset decrit un etat permanent (tu ES hillun). La nature philosophique de la dissolution (un acte de rupture) est incompatible avec la structure nominale du verset (un etat constitutif).",
        axe1_verset: "Le mot hillun dans le sens de dissolution decrirait la personne comme « deliee » dans la cite. Le champ lexical du verset ne contient aucun terme de contrainte dont la personne aurait ete liberee — il n'y a pas de chaines, de serment rompu, ou de lien dissous. Le verset pose un etat (tu es hillun) sans mentionner un etat anterieur de contrainte. La dissolution presuppose un lien prealable qui est rompu, mais le verset ne mentionne pas ce lien.",
        axe2_voisins: "Les versets voisins (serments par la cite, par le geniteur) ne contiennent aucun theme de contrainte ou de liberation. Le passage de serments en serments ne cree pas un contexte de dissolution. Le verset 4 parle de l'epreuve de la creation, pas d'une liberation. Le contexte narratif ne soutient pas le sens de dissolution.",
        axe3_sourate: "La sourate parle de liberer des captifs (v. 13) — mais c'est une action morale recommandee, pas un etat de la personne dans la cite. Le sens de dissolution dans le verset 2 ne fait pas echo au theme de la liberation des captifs car la structure est differente : au verset 2, c'est la personne qui EST dans un etat ; au verset 13, c'est la personne qui FAIT l'acte de liberer. Confondre les deux serait une interpretation.",
        axe4_coherence: "La racine h-l-l dans le sens de dissolution apparait en 2:227 pour le divorce (dissolution du mariage). Ce sens est toujours lie a la rupture d'un lien specifique. En 90:2, aucun lien specifique n'est mentionne — le verset decrit un etat general, pas la rupture d'un lien particulier.",
        axe5_frequence: "La dissolution n'est pas directement liee a la mission du khalifa dans ce contexte. Le khalifa a besoin de liberte (liceite) pour agir, pas necessairement d'une dissolution de liens anterieurs. Le verset etablit un droit, pas une liberation."
      }
    }
  }, 2);

  // bld for v2 is same root as v1
  await upsertVWA(6025, 'bld', 'cite', {
    sense_chosen: 'cite',
    concept_chosen: bld_concept,
    concepts: {
      [bld_concept]: {
        status: 'retenu',
        senses: bld_senses,
        proof_ctx: "Meme analyse que le verset 1. Le mot al-baladi est repris a l'identique — meme racine, meme forme definie, meme genitif. La repetition de « cette cite » (hadha al-balad) dans deux versets consecutifs renforce l'importance de ce lieu. La cite est a la fois l'objet du serment (v. 1) et le cadre de la liberte du « tu » (v. 2).",
        axe1_verset: "Le mot al-baladi est le complement circonstanciel de lieu — c'est le cadre dans lequel la personne est libre/licite. Le champ lexical du verset est celui du statut dans un lieu : toi (anta), libre (hillun), dans (bi), cette cite (hadha al-balad). La cite est l'espace de la liberte. Sans la cite, la declaration de liceite n'aurait pas de cadre. Le territoire est ici le support physique du droit moral.",
        axe2_voisins: "La repetition de hadha al-balad entre le verset 1 et le verset 2 cree un lien etroit entre le serment et la declaration de liberte. Le verset 1 sacralise la cite par le serment ; le verset 2 declare la liberte de la personne dans cette cite sacree. Le verset 3 elargira le propos a la filiation, quittant momentanement le theme de la cite. Le mot balad revient deux fois en deux versets pour ancrer solidement le theme du lieu.",
        axe3_sourate: "La cite est le theme central de la sourate qui porte son nom. Au verset 2, la cite est le lieu ou la personne est libre — cette liberte appelle des responsabilites morales que la sourate detaillera ensuite. Le cadre spatial (la cite) est pose des les deux premiers versets pour preparer l'enseignement moral qui suivra. La cite n'est pas un decor mais l'espace moral de l'epreuve humaine.",
        axe4_coherence: "La racine b-l-d dans le sens de cite apparait dans les memes contextes de sacralisation que dans le verset 1 : Ibrahim priant pour la securite de la cite (14:35), le serment par la cite sure (95:3). La cite est toujours un lieu de responsabilite sacree dans le Coran. En 90:2, la cite est le lieu ou la personne a un statut de droit — ce droit est la base de la responsabilite morale.",
        axe5_frequence: "Pour la mission du khalifa, la cite est le lieu concret de l'action. Le khalifa est libre dans la cite pour y agir — sa liberte n'est pas une fin en soi mais le moyen de sa mission. La cite est le depot que le khalifa doit gerer avec justice. La repetition du mot balad dans les deux premiers versets souligne que la mission du khalifa est ancree dans un lieu reel, pas dans l'abstraction."
      }
    }
  }, 4);

  await upsertVA(6025, {
    translation_arab: "Et toi, tu es libre dans cette cite",
    full_translation: "et toi, tu es résident dans cette cité -",
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) relie ce verset au serment du verset 1. Le pronom **anta** (toi) est un pronom personnel independant 2MS qui sert de sujet a une phrase nominale. En arabe, la phrase nominale (sujet + predicat sans verbe « etre ») exprime un etat constitutif, permanent — pas une action passagere. Le mot **hillun** est un nom indefini de la racine h-l-l au nominatif. D'apres les sources etymologiques, hill signifie « celui pour qui une chose est licite, celui qui est en etat de permission ». Le Lane's donne « one for whom a thing is, or has become, lawful ». Le mot est au nominatif car il est le predicat de la phrase nominale (anta hillun = tu [es] libre/licite). La preposition **bi** (dans) introduit le complement de lieu. Le demonstratif **hadha** (cette) designe la cite deja mentionnee au verset 1. Le mot **al-baladi** est le meme nom defini qu'au verset 1. La structure complete est : « et toi, tu es un-etre-licite dans cette cite ».

§JUSTIFICATION§
**libre** — Le sens retenu est « liceite/permission ». Le mot « libre » est choisi car il rend en francais courant l'idee d'une personne pour qui les choses sont licites dans un lieu. L'alternative « resident » est ecartee car elle ne rend que le fait physique de la presence, pas le statut de droit. L'alternative « licite » est ecartee comme mot de traduction car « tu es licite » ne se dit pas en francais courant — « tu es libre » est l'expression naturelle pour rendre cette idee de droit et de permission.

**cite** — Meme justification qu'au verset 1. Le mot « cite » designe un espace habite specifique.

§CRITIQUE§
**libre vs resident** — Hamidullah traduit « tu es resident dans cette cite ». Ce choix privilegia le sens d'installation (h-l-l = descendre, s'installer). Les sources etymologiques donnent les deux sens (licite et installe), mais « resident » ne rend que le fait physique de la presence. Le mot hillun, d'apres le Lane's, signifie d'abord « celui pour qui une chose est licite ». « Libre » rend mieux ce statut de droit — la personne n'est pas seulement presente dans la cite, elle y a des droits. La difference change la portee du verset : « tu es resident » constate un fait ; « tu es libre » etablit un droit qui appelle une responsabilite.`,
    segments: JSON.stringify([
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 1 },
      { fr: "toi", phon: "anta", arabic: "أَنتَ", is_particle: true, position: 2 },
      { fr: "libre", pos: "nom", phon: "hillun", arabic: "حِلٌّۢ", word_key: "hll", is_particle: false, sense_retenu: "libre", position: 3 },
      { fr: "dans", phon: "bi", arabic: "بِ", is_particle: true, position: 4 },
      { fr: "cette", phon: "hadha", arabic: "هَـٰذَا", is_particle: true, position: 5 },
      { fr: "cite", pos: "nom", phon: "al-baladi", arabic: "ٱلْبَلَدِ", word_key: "bld", is_particle: false, sense_retenu: "cite", position: 6 }
    ])
  });

  console.log('  Verset 90:2 terminé\n');


  // =====================================================
  // VERSET 90:3 (verse_id=6026)
  // وَوَالِدٍ وَمَا وَلَدَ
  // "Et un géniteur et ce qu'il a engendré"
  // =====================================================
  console.log('--- VERSET 90:3 (id=6026) ---');

  const wld_engendrer = getConceptName(2576, 'Engendrer/Naissance');
  const wld_engendrer_senses = getConceptSenses(2576, wld_engendrer);
  const wld_enfant = getConceptName(2576, 'Enfant/Descendance');
  const wld_enfant_senses = getConceptSenses(2576, wld_enfant);

  await upsertVWA(6026, 'wld', 'engendrer', {
    sense_chosen: 'engendrer',
    concept_chosen: wld_engendrer,
    concepts: {
      [wld_engendrer]: {
        status: 'retenu',
        senses: wld_engendrer_senses,
        proof_ctx: "Le verset contient deux formes de la racine w-l-d : **walidin** (participe actif indefini au genitif, « un geniteur ») et **walada** (verbe accompli 3MS, « il a engendre »). D'apres les sources etymologiques, walada signifie « elle a enfante, elle a mis au monde ». Le participe actif walidin designe « celui qui engendre » — c'est la personne qui fait l'acte de generation. Le verbe walada a la troisieme personne masculine accompli signifie « il a engendre » — l'acte est accompli et acheve. Le sens d'engendrement ou de naissance est directement atteste par les deux formes grammaticales : le participe actif (l'agent de l'acte) et le verbe accompli (l'acte realise). Le sens de descendance est lie mais secondaire : walidin est le PARENT (celui qui engendre), pas l'enfant (celui qui est engendre). Le pronom relatif « ma » (ce que) dans « ma walada » renvoie a ce qui a ete engendre — l'objet de l'acte, pas l'agent. La distinction philosophique est que l'engendrement est l'ACTE de donner la vie, tandis que la descendance est le RESULTAT de cet acte. Le verset nomme les deux (l'agent et l'objet) mais le sens premier de la racine ici est l'acte d'engendrer.",
        axe1_verset: "Le verset contient un geniteur (walidin) et ce qu'il a engendre (ma walada). Le champ lexical est celui de la filiation : un parent et sa progeniture. Les deux termes couvrent l'ensemble de la chaine de generation — celui qui donne la vie et ce qui recoit la vie. Le verset est structure en parallele : « et un geniteur / et ce qu'il a engendre ». La conjonction « wa » (et) cree une paire indissociable. Le verbe walada a l'accompli indique que l'engendrement est un fait accompli — la progeniture existe deja.",
        axe2_voisins: "Le verset 1 jurait par la cite, le verset 2 declarait la liberte du « tu » dans la cite. Le verset 3 ajoute un deuxieme objet de serment : le geniteur et ce qu'il a engendre. Les versets 1-3 forment une serie de serments — la cite, la personne libre, le geniteur et sa descendance. Ces trois serments preparent la declaration du verset 4 (« Nous avons cree l'etre humain dans l'epreuve »). Le geniteur et sa descendance sont lies au theme de la creation humaine qui sera explicite au verset 4.",
        axe3_sourate: "La sourate traite de la responsabilite morale dans la cite. Le geniteur et sa descendance sont la communaute humaine qui habite cette cite. Le serment par la filiation rappelle que les etres humains sont lies entre eux par les liens du sang — cette solidarite naturelle est le fondement de la solidarite morale que la sourate exigera ensuite (nourrir les orphelins, les pauvres). L'orphelin mentionne au verset 15 est precisement celui qui a perdu son geniteur — le lien entre le verset 3 et les versets 15-16 est direct.",
        axe4_coherence: "La racine w-l-d apparait 102 fois dans le Coran. En 31:33 et 35:5, « que la vie d'ici-bas ne vous trompe pas, et que le Trompeur ne vous trompe pas au sujet de Dieu ». En 71:27, Nouh dit « si Tu les laisses, ils egareront Tes serviteurs et n'engendreront que des depraves ingrats ». L'engendrement dans le Coran est toujours lie a la responsabilite — le parent engendre et est responsable de ce qu'il transmet. En 90:3, le serment par le geniteur et sa descendance rappelle cette chaine de responsabilite.",
        axe5_frequence: "Pour la mission du khalifa, l'engendrement est la perpetuation de la mission a travers les generations. Le geniteur transmet a sa descendance non seulement la vie mais aussi la responsabilite de gerer la terre avec justice. Le serment par le geniteur et ce qu'il a engendre rappelle que la mission du khalifa n'est pas individuelle mais generationnelle — chaque generation recoit la responsabilite de la precedente. La filiation est le vehicule de la transmission de la mission."
      },
      [wld_enfant]: {
        status: 'probable',
        senses: wld_enfant_senses,
        proof_ctx: "Le sens de descendance est present dans le verset a travers « ma walada » (ce qu'il a engendre). La descendance est le RESULTAT de l'engendrement, tandis que l'engendrement est l'ACTE. Le verset mentionne les deux : l'agent (walidin, le geniteur) et le resultat (ma walada, ce qui a ete engendre). Le sens de descendance est atteste par le Lane's qui donne walad comme « enfant, progeniture ». La distinction philosophique est que le sens d'engendrement met l'accent sur l'acte de donner la vie (dynamique, actif), tandis que le sens de descendance met l'accent sur le produit de cet acte (statique, resultat). Le participe actif walidin est grammaticalement oriente vers l'acte (celui qui FAIT l'action), ce qui favorise le sens d'engendrement comme sens premier.",
        axe1_verset: "Le verset nomme un walidin (geniteur) et ma walada (ce qu'il a engendre). Si l'on retient le sens de descendance, le verset parlerait d'un parent et de sa descendance — ce qui est coherent avec le champ lexical de la filiation. Le verset formerait un tout centré sur la famille : le parent et ses enfants. Cette lecture est valide mais met l'accent sur les personnes plutot que sur l'acte de generation.",
        axe2_voisins: "Le verset 4 declare que Dieu a cree l'etre humain dans l'epreuve. Si le verset 3 parle de descendance, le lien avec le verset 4 serait : les parents et les enfants sont tous crees dans l'epreuve. La descendance serait le prolongement du theme de la creation humaine. Cette lecture est coherente mais moins dynamique que celle de l'engendrement.",
        axe3_sourate: "La sourate mentionne les orphelins (v. 15) — un orphelin est un enfant (walad) qui a perdu son parent (walid). Le sens de descendance ferait echo directement au theme de l'orphelin. Si le serment porte sur la descendance, c'est la valeur de l'enfant qui est sacree — et l'orphelin est l'enfant le plus vulnerable. Cette lecture est riche mais le sens d'engendrement est plus large car il englobe l'acte et le resultat.",
        axe4_coherence: "La racine w-l-d dans le sens d'enfant/descendance est tres frequente dans le Coran : walad (enfant), awlad (enfants), mawlud (nouveau-ne). En 31:14, « Nous avons recommande a l'homme ses deux parents — sa mere l'a porte dans la faiblesse sur la faiblesse ». Le Coran valorise la descendance et la responsabilite envers les enfants. En 90:3, le serment par la descendance s'inscrirait dans cette valorisation.",
        axe5_frequence: "Pour la mission du khalifa, la descendance est ce qui perpetue la mission dans le temps. Les enfants heritent de la responsabilite de leurs parents. Le serment par la descendance rappelerait que la mission du khalifa se transmet de generation en generation."
      }
    }
  }, 2);

  await upsertVA(6026, {
    translation_arab: "Et un geniteur et ce qu'il a engendre",
    full_translation: "et par le géniteur et ce qu'il a engendré !",
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) relie ce verset a la serie de serments commencee au verset 1. Le mot **walidin** est un participe actif indefini au genitif de la racine w-l-d. Un participe actif est une forme qui dit que la personne FAIT l'action activement — walidin signifie « celui qui engendre, un geniteur ». L'indefini (pas d'article « al- ») signifie que le verset parle d'un geniteur en general, pas d'un geniteur specifique. Le genitif est regi par le serment du verset 1 (je jure par... et par un geniteur). La conjonction **wa** (et) introduit le deuxieme element : **ma** est un pronom relatif neutre (ce que, ce qui). Le verbe **walada** est un accompli 3MS (une forme qui dit que l'action est achevee et passee) — « il a engendre ». L'accompli indique que l'engendrement est un fait accompli. La structure « ma walada » signifie « ce qu'il a engendre » — le pronom relatif « ma » renvoie a tout ce qui a ete engendre, sans restriction.

§JUSTIFICATION§
**geniteur** — Le sens retenu est « engendrer/naissance ». Le mot « geniteur » est choisi car il traduit directement le participe actif walidin — celui qui fait l'acte d'engendrer. L'alternative « parent » est ecartee car « parent » est plus large (il inclut l'adoption, l'education) tandis que walidin est specifiquement celui qui engendre biologiquement. L'alternative « pere » est ecartee car le participe walidin est generique (masculin ou feminin dans l'usage) et ne se limite pas au pere.

**engendre** — Le verbe walada est traduit par « engendrer » car c'est le sens premier de la racine : donner naissance, mettre au monde. L'alternative « enfanter » est ecartee car « enfanter » est du registre litteraire, pas du francais courant.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « par le geniteur et ce qu'il a engendre ». La seule nuance est que certains traducteurs ajoutent « par » devant « le geniteur » pour expliciter le serment. Le texte arabe ne repete pas la preposition « bi » (par) — le genitif seul suffit a indiquer que c'est un complement du serment. L'ajout de « par » est un ajout de clarification, pas une trahison du texte.`,
    segments: JSON.stringify([
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 1 },
      { fr: "un geniteur", pos: "nom", phon: "walidin", arabic: "وَالِدٍ", word_key: "wld", is_particle: false, sense_retenu: "engendrer", position: 2 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 3 },
      { fr: "ce qu'", phon: "ma", arabic: "مَا", is_particle: true, position: 4 },
      { fr: "il a engendre", pos: "verbe", phon: "walada", arabic: "وَلَدَ", word_key: "wld", is_particle: false, sense_retenu: "engendrer", position: 5 }
    ])
  });

  console.log('  Verset 90:3 terminé\n');


  // =====================================================
  // VERSET 90:4 (verse_id=6027)
  // لَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ فِى كَبَدٍ
  // "Certes, Nous avons créé l'être humain dans l'épreuve"
  // =====================================================
  console.log('--- VERSET 90:4 (id=6027) ---');

  const xlq_concept = getConceptName(344, 'Création/Production');
  const xlq_senses = getConceptSenses(344, xlq_concept);
  const xlq_lisse = getConceptName(344, 'Sens isolé/Lisse');
  const xlq_lisse_senses = getConceptSenses(344, xlq_lisse);
  const xlq_mensonge = getConceptName(344, 'Sens isolé/Mensonge');
  const xlq_mensonge_senses = getConceptSenses(344, xlq_mensonge);

  const Ans_humanite = getConceptName(2630, 'Humanité/Espèce');
  const Ans_humanite_senses = getConceptSenses(2630, Ans_humanite);
  const Ans_sociabilite = getConceptName(2630, 'Sociabilité/Familiarité');
  const Ans_sociabilite_senses = getConceptSenses(2630, Ans_sociabilite);
  const Ans_joie = getConceptName(2630, 'Joie/Réconfort');
  const Ans_joie_senses = getConceptSenses(2630, Ans_joie);
  const Ans_perception = getConceptName(2630, 'Perception/Connaissance');
  const Ans_perception_senses = getConceptSenses(2630, Ans_perception);
  const Ans_oubli = getConceptName(2630, 'Oubli');
  const Ans_oubli_senses = getConceptSenses(2630, Ans_oubli);

  const kbd_difficulte = getConceptName(2626, 'Difficulté/Épreuve');
  const kbd_difficulte_senses = getConceptSenses(2626, kbd_difficulte);
  const kbd_endurance = getConceptName(2626, 'Endurance/Lutte');
  const kbd_endurance_senses = getConceptSenses(2626, kbd_endurance);
  const kbd_foie = getConceptName(2626, 'Foie/Organe');
  const kbd_foie_senses = getConceptSenses(2626, kbd_foie);
  const kbd_centre = getConceptName(2626, 'Centre/Milieu');
  const kbd_centre_senses = getConceptSenses(2626, kbd_centre);
  const kbd_epaisseur = getConceptName(2626, 'Épaisseur/Grosseur');
  const kbd_epaisseur_senses = getConceptSenses(2626, kbd_epaisseur);

  // xlq — Création/Production
  await upsertVWA(6027, 'xlq', 'creer', {
    sense_chosen: 'creer',
    concept_chosen: xlq_concept,
    concepts: {
      [xlq_concept]: {
        status: 'retenu',
        senses: xlq_senses,
        proof_ctx: "Le verbe khalaqna est un accompli 1PP de la racine kh-l-q. D'apres les sources etymologiques, khalaqa signifie « il a cree, il a produit, il a fait exister ». Le pluriel de majeste (na, Nous) designe Dieu. Le verbe a l'accompli indique que la creation est un fait acheve — l'etre humain a deja ete cree. Le sens de creation est le sens premier et direct de la racine dans cette forme. Les sens isoles (lisse, mensonge) sont hors sujet car le verbe est utilise dans son sens fondamental de creation avec Dieu comme sujet.",
        axe1_verset: "Le verbe khalaqna ouvre la declaration principale du verset. Le champ lexical est celui de l'origine : creer (khalaqna), l'etre humain (al-insan), dans (fi), l'epreuve (kabad). Dieu cree l'etre humain — c'est l'acte fondateur qui precede tout le reste. Le verbe a l'accompli indique un fait etabli, pas une hypothese. La creation est posee comme un fait indiscutable avant de preciser la condition dans laquelle l'etre humain a ete cree (l'epreuve).",
        axe2_voisins: "Les versets 1-3 sont des serments preparatoires. Le verset 4 est la declaration que ces serments appuient : l'etre humain a ete cree dans l'epreuve. La transition des serments a la declaration est marquee par « laqad » (certes, assurement) — une particule d'emphase qui souligne la certitude. Apres avoir jure par la cite, la liberte et la filiation, Dieu declare que la creation humaine est une epreuve. Les serments sacralise le cadre ; la declaration revele le contenu.",
        axe3_sourate: "La sourate traite des choix moraux dans la cite. La creation dans l'epreuve est le fondement de ce theme — si l'etre humain est cree dans l'epreuve, alors les choix moraux (liberer des captifs, nourrir des orphelins) sont des reponses a cette epreuve. La creation n'est pas un acte neutre mais le debut d'une mise a l'epreuve. Tout ce qui suit dans la sourate (les deux chemins, l'obstacle a franchir) decoule de cette declaration initiale.",
        axe4_coherence: "La racine kh-l-q apparait 261 fois dans le Coran. En 2:30, « Je vais placer sur terre un khalifa ». En 51:56, « Je n'ai cree les djinns et les humains que pour qu'ils M'adorent ». En 67:2, « Celui qui a cree la mort et la vie pour vous eprouver, lequel de vous est le meilleur en acte ». La creation dans le Coran est toujours associee a un objectif — l'epreuve, l'adoration, le khilafa. En 90:4, la creation est explicitement associee a l'epreuve (kabad).",
        axe5_frequence: "Pour la mission du khalifa, la creation est le point de depart de la mission. Dieu cree l'etre humain et lui assigne une mission — gerer la terre avec justice. La creation dans l'epreuve signifie que la mission du khalifa n'est pas facile — elle exige de l'effort, de la lutte, du sacrifice. Le khalifa est cree POUR l'epreuve, pas malgre elle. L'epreuve est le moyen de la maturation morale necessaire a la mission."
      },
      ...(xlq_lisse ? { [xlq_lisse]: {
        status: 'nul',
        senses: xlq_lisse_senses,
        proof_ctx: "Le sens de lisse est un sens isole de la racine kh-l-q (peau lisse, surface lisse). Il n'a aucun rapport avec le contexte du verset 90:4 ou le verbe khalaqna est utilise avec Dieu comme sujet et l'etre humain comme objet. La creation divine est le sens evident et unique dans ce contexte."
      }} : {}),
      ...(xlq_mensonge ? { [xlq_mensonge]: {
        status: 'nul',
        senses: xlq_mensonge_senses,
        proof_ctx: "Le sens de mensonge est un sens isole de la racine kh-l-q (fabriquer un mensonge, inventer). Il est incompatible avec le contexte du verset 90:4 ou Dieu est le sujet du verbe. Dieu cree l'etre humain — il ne « fabrique pas un mensonge concernant l'etre humain ». Le sens de creation est le seul sens possible avec ce sujet et cet objet."
      }} : {})
    }
  }, 2);

  // Ans — Humanité
  await upsertVWA(6027, 'Ans', 'etre humain', {
    sense_chosen: 'etre humain',
    concept_chosen: Ans_humanite,
    concepts: {
      [Ans_humanite]: {
        status: 'retenu',
        senses: Ans_humanite_senses,
        proof_ctx: "Le mot al-insana est un nom defini a l'accusatif de la racine a-n-s. D'apres les sources etymologiques, al-insan signifie « l'etre humain, l'homme en tant qu'espece ». L'article defini « al- » donne au mot une valeur generique — il ne s'agit pas d'un individu precis mais de l'espece humaine dans son ensemble. Le Lane's donne « man, human being, mankind ». La declaration « Nous avons cree l'etre humain dans l'epreuve » porte sur toute l'humanite, pas sur un individu. Le sens de sociabilite est lie (insan vient de uns, l'intimite) mais le mot al-insan dans le Coran est toujours utilise pour designer l'espece humaine en general, pas la qualite de sociabilite. Les sens de joie, de perception et d'oubli sont des derivations etymologiques qui ne s'appliquent pas a ce contexte — le verset utilise al-insan comme nom d'espece, pas comme qualificatif.",
        axe1_verset: "Le mot al-insana est l'objet direct du verbe khalaqna (Nous avons cree). Le champ lexical du verset est celui de l'origine et de la condition humaine : creer (khalaqna), l'etre humain (al-insan), dans l'epreuve (fi kabad). Le mot al-insan designe le sujet de la creation — c'est l'humanite entiere qui est creee dans l'epreuve, pas un groupe specifique. L'article defini donne au mot sa portee universelle. Le mot est a l'accusatif car il est l'objet direct de la creation divine.",
        axe2_voisins: "Les versets 1-3 juraient par la cite, la liberte et la filiation. Le verset 4 declare la condition universelle de l'etre humain : cree dans l'epreuve. Le passage du particulier (une cite, une personne, un geniteur) a l'universel (l'etre humain) elargit le propos. Le verset 5 posera une question rhetorique sur un individu qui croit que personne n'aura de pouvoir sur lui — le retour au particulier apres l'universel souligne le contraste entre la condition reelle (epreuve) et l'illusion individuelle (toute-puissance).",
        axe3_sourate: "La sourate traite des responsabilites morales de l'etre humain dans la cite. Le mot al-insan designe celui qui porte ces responsabilites — c'est l'espece humaine dans son ensemble qui est creee dans l'epreuve et qui doit franchir l'obstacle (v. 11). La sourate ne s'adresse pas a un peuple ou a une classe mais a l'etre humain en tant que tel. La portee est universelle.",
        axe4_coherence: "La racine a-n-s dans le sens d'etre humain apparait plus de 60 fois dans le Coran. En 76:1, « s'est ecoule pour l'etre humain (al-insan) un laps de temps ou il n'etait pas une chose mentionnable ». En 103:2, « l'etre humain est certes en perdition ». En 55:3, « Il a cree l'etre humain ». Le mot al-insan est systematiquement utilise pour designer l'espece humaine dans sa globalite — c'est un terme generique, pas individuel.",
        axe5_frequence: "Pour la mission du khalifa, al-insan est le porteur de la mission. Dieu cree l'etre humain — pas les anges, pas les djinns — pour etre Son khalifa sur terre. La declaration « Nous avons cree l'etre humain dans l'epreuve » signifie que la mission du khalifa est inscrite dans la condition humaine. L'epreuve n'est pas un accident mais la nature meme de la condition du khalifa — etre responsable est une epreuve permanente."
      },
      [Ans_sociabilite]: {
        status: 'peu_probable',
        senses: Ans_sociabilite_senses,
        proof_ctx: "Le sens de sociabilite vient de l'etymologie profonde de la racine a-n-s : uns signifie « intimite, familiarite ». Le Lane's donne « he was, or became, sociable, companionable, familiar ». Mais le mot al-insan dans le Coran est un nom d'espece — il designe l'etre humain, pas la qualite de sociabilite. Dire « Nous avons cree la sociabilite dans l'epreuve » serait un contresens. Le mot al-insan a acquis un sens technique de « l'etre humain » qui depasse son etymologie de sociabilite.",
        axe1_verset: "Si al-insan signifiait « la sociabilite » dans ce verset, la phrase serait « Nous avons cree la sociabilite dans l'epreuve ». Cette lecture est grammaticalement possible mais semantiquement etrange — on ne cree pas la sociabilite « dans l'epreuve ». Le verbe khalaqna attend un objet concret (un etre) plutot qu'une qualite abstraite. Le champ lexical du verset (creer, dans l'epreuve) pointe vers un etre vivant mis dans une condition, pas vers une qualite abstraite produite dans une condition.",
        axe2_voisins: "Le verset 5 pose une question sur un individu (« pense-t-il que personne n'aura de pouvoir sur lui ? »). Le pronom 3MS (il) renvoie a al-insan du verset 4 compris comme un etre humain, pas comme une qualite abstraite. Si al-insan etait la sociabilite, le verset 5 n'aurait pas de referent personnel. Le contexte impose la lecture « etre humain ».",
        axe3_sourate: "La sourate parle de choix moraux faits par des personnes — liberer des captifs, nourrir des orphelins. Ces actions sont faites par des etres humains, pas par la sociabilite en tant que qualite. Le sujet moral de la sourate est l'etre humain comme agent, pas une qualite abstraite.",
        axe4_coherence: "Le mot al-insan apparait plus de 60 fois dans le Coran et designe toujours l'etre humain comme espece. Il n'est jamais utilise pour designer la qualite de sociabilite dans le Coran. L'usage coranique impose la lecture « etre humain ».",
        axe5_frequence: "Le khalifa est un etre humain, pas une qualite. La mission du khalifa est portee par des personnes, pas par des concepts abstraits. Le sens de sociabilite ne contribue pas directement a la comprehension de ce verset dans le cadre de la mission humaine."
      },
      [Ans_joie]: {
        status: 'nul',
        senses: Ans_joie_senses,
        proof_ctx: "Le sens de joie ou de reconfort est un derivé de la racine a-n-s (le plaisir de la compagnie). Il est incompatible avec l'usage du mot al-insan dans ce verset — « Nous avons cree la joie dans l'epreuve » serait contradictoire avec le sens general du passage."
      },
      [Ans_perception]: {
        status: 'nul',
        senses: Ans_perception_senses,
        proof_ctx: "Le sens de perception ou de connaissance est un derivé etymologique de a-n-s. Le mot al-insan dans le Coran est un nom d'espece qui designe l'etre humain — il n'est jamais utilise dans le sens de « la perception ». Le contexte du verset ne traite pas de la connaissance mais de la condition humaine."
      },
      [Ans_oubli]: {
        status: 'nul',
        senses: Ans_oubli_senses,
        proof_ctx: "Le sens d'oubli est un derivé contesté de la racine a-n-s (certains etymologistes derivent insan de nasiya, oublier). Meme si cette etymologie est retenue, le mot al-insan dans le Coran est un nom d'espece, pas un qualificatif d'oubli. « Nous avons cree l'oubli dans l'epreuve » serait incomprehensible dans ce contexte."
      }
    }
  }, 3);

  // kbd — Difficulté/Épreuve
  await upsertVWA(6027, 'kbd', 'epreuve', {
    sense_chosen: 'epreuve',
    concept_chosen: kbd_difficulte,
    concepts: {
      [kbd_difficulte]: {
        status: 'retenu',
        senses: kbd_difficulte_senses,
        proof_ctx: "Le mot kabadin est un nom indefini au genitif de la racine k-b-d. D'apres les sources etymologiques, kabad signifie « difficulte, detresse, affliction, peine ». Le Lane's cite explicitement ce verset : « Verily we have created man in difficulty ». Le genitif est regi par la preposition « fi » (dans) — l'etre humain est cree DANS l'epreuve. Le mot est indefini (pas d'article « al- »), ce qui donne un sens general : une epreuve non specifique, une condition permanente de difficulte. La distinction philosophique avec l'endurance est que la difficulte decrit la CONDITION dans laquelle l'etre humain se trouve, tandis que l'endurance decrit la REPONSE de l'etre humain a cette condition. Le verset dit que l'etre humain est cree dans la difficulte (la condition), pas dans l'endurance (la reponse). Le mot kabadin est un NOM (un etat), pas un verbe (une action) — il decrit une situation, pas un effort.",
        axe1_verset: "Le mot kabadin est le complement circonstanciel de condition — il decrit dans quel etat l'etre humain est cree. Le champ lexical du verset est celui de la condition originelle : creer (khalaqna), l'etre humain (al-insan), dans (fi), l'epreuve (kabad). La preposition « fi » (dans) indique que l'epreuve n'est pas un evenement exterieur mais la condition meme de l'existence. L'etre humain n'est pas cree PUIS mis dans l'epreuve — il est cree DANS l'epreuve, comme si la difficulte etait le milieu naturel de la vie humaine.",
        axe2_voisins: "Les versets 1-3 ont sacralise le cadre (la cite, la liberte, la filiation) par des serments. Le verset 4 revele pourquoi ces serments : l'etre humain est cree dans l'epreuve. Le verset 5 montrera un individu qui ignore cette realite (« pense-t-il que personne n'aura de pouvoir sur lui ? »). La progression est : cadre sacre (v. 1-3), condition reelle (v. 4, epreuve), illusion individuelle (v. 5). Le mot kabad est le pivot qui revele la verite de la condition humaine.",
        axe3_sourate: "La sourate detaillera les formes de cette epreuve : l'obstacle a franchir (v. 11-12), liberer un captif (v. 13), nourrir un orphelin dans la famine (v. 14-15), nourrir un pauvre couvert de poussiere (v. 16). Chacun de ces actes est une reponse a l'epreuve. La difficulte du verset 4 est le fondement de toute la sourate — parce que la vie est une epreuve, il faut franchir l'obstacle par des actes moraux. La sourate ne promet pas que l'epreuve cessera mais montre comment la traverser.",
        axe4_coherence: "La racine k-b-d est rare dans le Coran — elle n'apparait qu'en 90:4. Mais le theme de l'epreuve est omnipresent. En 67:2, « Celui qui a cree la mort et la vie pour vous eprouver ». En 2:155, « Nous vous eprouverons par un peu de peur, de faim ». En 29:2, « Les gens pensent-ils qu'on les laissera dire 'nous croyons' sans etre eprouves ? ». L'epreuve est une constante de la condition humaine dans le Coran. Le mot kabad en 90:4 exprime cette meme realite avec la nuance de difficulte physique et morale.",
        axe5_frequence: "Pour la mission du khalifa, l'epreuve est la condition de l'exercice de la responsabilite. Le khalifa n'est pas cree dans le confort mais dans la difficulte — c'est la difficulte qui revele la qualite du khalifa. Celui qui franchit l'obstacle (liberer les captifs, nourrir les pauvres) est un bon khalifa ; celui qui se vante de depenser (v. 6) sans aider les faibles echoue dans sa mission. L'epreuve est le creuset qui forge ou revele la qualite morale du khalifa."
      },
      [kbd_endurance]: {
        status: 'probable',
        senses: kbd_endurance_senses,
        proof_ctx: "Le sens d'endurance ou de lutte est atteste pour la racine k-b-d. Le Lane's donne aussi « hardship, toil, struggle ». Hamidullah traduit « pour une vie de lutte ». La distinction philosophique avec la difficulte est que l'endurance decrit la REPONSE active de l'etre humain a la condition difficile, tandis que la difficulte decrit la CONDITION elle-meme. Le mot kabadin est un NOM au genitif apres « fi » (dans) — il decrit une condition dans laquelle l'etre humain est place, pas une action que l'etre humain fait. « Cree dans l'endurance » signifierait que l'endurance est la condition de depart, ce qui est conceptuellement different de « cree dans la difficulte ». La difficulte est une realite exterieure ; l'endurance est une qualite interieure. Le verset semble decrire la realite exterieure (le milieu) plutot que la qualite interieure (la reponse).",
        axe1_verset: "Le mot kabadin dans le sens d'endurance decrirait l'etre humain comme cree dans la lutte. Le champ lexical du verset (creer, l'etre humain, dans) est compatible avec ce sens — l'etre humain est cree pour lutter. Cependant, le mot kabadin est un nom (un etat), pas un masdar d'action (un acte de lutter). La structure « fi kabadin » (dans une epreuve/lutte) favorise l'etat plutot que l'action.",
        axe2_voisins: "Le verset 5 montrera un individu qui croit que personne n'aura de pouvoir sur lui. Si le verset 4 parle d'endurance, le contraste serait entre l'endurance (la condition reelle) et l'arrogance (l'illusion). Cette lecture est coherente — l'etre humain est cree pour lutter mais certains croient pouvoir echapper a cette lutte. La progression narrative fonctionne avec les deux sens.",
        axe3_sourate: "La sourate parle de franchir l'obstacle (al-aqaba, v. 11) par des actes concrets. Si kabadin signifie endurance, le lien avec l'obstacle est direct — l'etre humain est cree dans l'endurance, et cette endurance doit se manifester dans le franchissement de l'obstacle. Hamidullah a retenu ce sens (« vie de lutte ») et la lecture est riche.",
        axe4_coherence: "Le theme de l'endurance est present dans le Coran sans utiliser cette racine specifique. En 2:45, « cherchez aide dans la patience et la priere ». En 103:3, « ceux qui s'exhortent mutuellement a la patience ». L'endurance est une vertu coranique centrale. En 90:4, si kabadin signifie endurance, le verset s'inscrirait dans ce theme de la patience active face a l'epreuve.",
        axe5_frequence: "L'endurance est une qualite essentielle du khalifa. Le khalifa doit endurer les difficultes de sa mission — gerer la terre avec justice n'est pas facile. Si kabadin signifie endurance, le verset dirait que l'etre humain est cree avec la capacite d'endurer, ce qui est le prerequis de la mission."
      },
      [kbd_foie]: {
        status: 'peu_probable',
        senses: kbd_foie_senses,
        proof_ctx: "Le sens premier et physique de kabad est « foie » — l'organe central du corps. Le Lane's donne « liver ». Mais l'expression « Nous avons cree l'etre humain dans un foie » est absurde en francais et en arabe. Le foie est un organe, pas un milieu dans lequel on est cree. Certains commentateurs ont tente de lire « cree avec un foie » (c'est-a-dire avec un centre vital), mais la preposition « fi » (dans) ne soutient pas cette lecture — « fi » indique l'interieur d'un milieu, pas l'accompagnement d'un organe.",
        axe1_verset: "Le mot kabadin dans le sens de foie signifierait « Nous avons cree l'etre humain dans un foie ». Le champ lexical du verset (creer, l'etre humain, dans) n'est pas compatible avec cette lecture — la preposition « fi » (dans) attend un complement de lieu ou de condition, pas un organe. « Dans une difficulte » est naturel ; « dans un foie » ne l'est pas. Le foie est un objet concret, pas un milieu.",
        axe2_voisins: "Le verset 5 pose une question sur la puissance et l'arrogance — aucun lien avec l'anatomie. Les versets voisins ne contiennent aucun champ lexical medical ou anatomique. Le sens de foie est completement isole du contexte narratif de la sourate.",
        axe3_sourate: "La sourate traite de choix moraux, de liberte, d'epreuve, de solidarite. Le foie comme organe n'a aucun rapport avec ces themes. La sourate ne contient aucun autre terme anatomique qui pourrait justifier une lecture physique.",
        axe4_coherence: "La racine k-b-d n'apparait qu'une fois dans le Coran (en 90:4). On ne peut pas comparer avec d'autres usages coraniques. Mais le contexte (creation divine de l'etre humain + preposition « fi ») oriente clairement vers un sens de condition, pas d'organe.",
        axe5_frequence: "Le foie comme organe n'a aucun rapport avec la mission du khalifa. Le sens est hors sujet pour ce verset."
      },
      [kbd_centre]: {
        status: 'peu_probable',
        senses: kbd_centre_senses,
        proof_ctx: "Le sens de centre ou de milieu est atteste pour kabad : le Lane's donne « the middle, the midst ». « Nous avons cree l'etre humain dans le milieu » pourrait signifier que l'etre humain est cree au centre de la creation, dans un point median. Mais cette lecture est abstraite et ne s'inscrit pas dans le contexte de la sourate qui traite de l'epreuve morale, pas de la position cosmique de l'etre humain. Le Lane's cite explicitement ce verset avec le sens de « difficulty, distress » — c'est l'interpretation lexicographique directe.",
        axe1_verset: "Le mot kabadin dans le sens de centre signifierait « Nous avons cree l'etre humain dans un milieu ». Le champ lexical du verset ne contient aucun element spatial ou cosmique qui soutiendrait cette lecture. Le verset parle de creation et de condition, pas de position. « Dans une difficulte » est plus naturel que « dans un milieu » apres le verbe creer.",
        axe2_voisins: "Le verset 5 parle de pouvoir et d'arrogance — aucun lien avec la position centrale. Les versets voisins ne contiennent aucun theme spatial ou cosmique. Le contexte narratif ne soutient pas cette lecture.",
        axe3_sourate: "La sourate traite de choix moraux dans la cite, pas de cosmologie. Le sens de centre est hors du theme de la sourate.",
        axe4_coherence: "Le Coran place l'etre humain comme khalifa sur terre (2:30), ce qui implique une position centrale dans la creation. Mais ce sens est exprime par d'autres mots et d'autres racines, pas par kabad. En 90:4, le Lane's cite directement le sens de difficulte.",
        axe5_frequence: "Le sens de centre ne contribue pas directement a la comprehension de la mission du khalifa dans ce verset. La mission est definie par l'epreuve (la difficulte a surmonter), pas par la position (le centre de la creation)."
      },
      [kbd_epaisseur]: {
        status: 'nul',
        senses: kbd_epaisseur_senses,
        proof_ctx: "Le sens d'epaisseur ou de grosseur est un sens physique de kabad (epaisseur d'un objet, grosseur du corps). Il est incompatible avec le contexte du verset — « Nous avons cree l'etre humain dans une epaisseur » est absurde. Ce sens physique s'applique aux objets et au corps, pas a la condition de la creation."
      }
    }
  }, 4);

  await upsertVA(6027, {
    translation_arab: "Certes, Nous avons cree l'etre humain dans l'epreuve",
    full_translation: "Nous avons certes créé l'homme pour une vie de lutte.",
    translation_explanation: `§DEMARCHE§
La particule **laqad** est une combinaison de « la » (particule d'insistance) et « qad » (particule de certitude devant un verbe accompli). Cette combinaison signifie « assurement, certes » — elle introduit un fait indiscutable. Le verbe **khalaqna** est un accompli 1PP (une forme qui dit que l'action est achevee et passee) de la racine kh-l-q. Le pluriel de majeste « na » (Nous) designe Dieu. D'apres les sources etymologiques, khalaqa signifie « creer, produire, faire exister ». L'accompli indique que la creation est un fait accompli. Le mot **al-insana** est un nom defini a l'accusatif (complement d'objet direct) de la racine a-n-s. Le Lane's donne « man, human being, mankind ». L'article defini « al- » donne une portee universelle — c'est l'espece humaine entiere, pas un individu. La preposition **fi** (dans) introduit le complement circonstanciel de condition — elle indique le milieu ou la condition dans laquelle la creation a lieu. Le mot **kabadin** est un nom indefini au genitif de la racine k-b-d. Le Lane's cite ce verset et donne « difficulty, distress, affliction ». L'indefini exprime une generalite — une epreuve non specifique, une condition permanente.

§JUSTIFICATION§
**cree** — Le sens retenu est « creation/production ». Le mot « cree » est la traduction directe de khalaqna. Pas d'alternative pertinente dans ce contexte — le verbe est utilise dans son sens premier avec Dieu comme sujet.

**etre humain** — Le sens retenu est « humanite/espece ». Le mot « etre humain » est choisi car il designe l'espece humaine en francais courant. L'alternative « homme » est ecartee car ambigue (homme vs femme). L'alternative « humain » seul est ecartee car c'est un adjectif, pas un nom en francais courant.

**epreuve** — Le sens retenu est « difficulte/epreuve ». Le mot « epreuve » est choisi car il rend l'idee de difficulte comme condition de l'existence. L'alternative « lutte » est ecartee car la lutte est une action (la reponse humaine), tandis que kabadin est une condition (le milieu dans lequel l'etre humain est place). L'alternative « difficulte » est synonyme mais « epreuve » est plus riche — une epreuve teste la qualite de celui qui la traverse, ce qui correspond au theme de la sourate.

§CRITIQUE§
**epreuve vs lutte** — Hamidullah traduit « pour une vie de lutte ». Ce choix transforme la condition (dans une epreuve) en une finalite (pour une vie de lutte). Le texte dit « fi kabadin » (DANS une epreuve), pas « li kabadin » (POUR une lutte). La preposition « fi » indique le milieu, pas la finalite. De plus, « lutte » est une action humaine, tandis que kabad est un etat — les sources etymologiques donnent « difficulty, distress, affliction » (des conditions), pas « struggle, fight » (des actions). La traduction « pour une vie de lutte » ajoute une idee de finalite et d'action qui n'est pas dans le texte. Le texte dit simplement que l'etre humain est cree DANS la difficulte — c'est sa condition d'existence, pas son programme d'action.`,
    segments: JSON.stringify([
      { fr: "Certes,", phon: "laqad", arabic: "لَقَدْ", is_particle: true, position: 1 },
      { fr: "Nous avons cree", pos: "verbe", phon: "khalaqna", arabic: "خَلَقْنَا", word_key: "xlq", is_particle: false, sense_retenu: "creer", position: 2 },
      { fr: "l'etre humain", pos: "nom", phon: "al-insana", arabic: "ٱلْإِنسَـٰنَ", word_key: "Ans", is_particle: false, sense_retenu: "etre humain", position: 3 },
      { fr: "dans", phon: "fi", arabic: "فِى", is_particle: true, position: 4 },
      { fr: "l'epreuve", pos: "nom", phon: "kabadin", arabic: "كَبَدٍ", word_key: "kbd", is_particle: false, sense_retenu: "epreuve", position: 5 }
    ])
  });

  console.log('  Verset 90:4 terminé\n');


  // =====================================================
  // VERSET 90:5 (verse_id=6028)
  // أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ
  // "Pense-t-il que personne n'aura de pouvoir sur lui ?"
  // =====================================================
  console.log('--- VERSET 90:5 (id=6028) ---');

  const hsb_calcul = getConceptName(996, 'Calcul/Évaluation');
  const hsb_calcul_senses = getConceptSenses(996, hsb_calcul);
  const hsb_suffisance = getConceptName(996, 'Suffisance');
  const hsb_suffisance_senses = getConceptSenses(996, hsb_suffisance);
  const hsb_noblesse = getConceptName(996, 'Sens isolé/Noblesse');
  const hsb_noblesse_senses = getConceptSenses(996, hsb_noblesse);

  const qdr_mesure = getConceptName(373, 'Mesure/Détermination');
  const qdr_mesure_senses = getConceptSenses(373, qdr_mesure);
  const qdr_puissance = getConceptName(373, 'Puissance/Capacité');
  const qdr_puissance_senses = getConceptSenses(373, qdr_puissance);
  const qdr_marmite = getConceptName(373, 'Sens isolé/Marmite');
  const qdr_marmite_senses = getConceptSenses(373, qdr_marmite);

  const whd_unicite = getConceptName(578, 'Unicité/Unité');
  const whd_unicite_senses = getConceptSenses(578, whd_unicite);

  // hsb — Calcul/Évaluation
  await upsertVWA(6028, 'hsb', 'penser', {
    sense_chosen: 'penser',
    concept_chosen: hsb_calcul,
    concepts: {
      [hsb_calcul]: {
        status: 'retenu',
        senses: hsb_calcul_senses,
        proof_ctx: "Le verbe yahsabu est un inaccompli 3MS de la racine h-s-b. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), hasiba signifie « il a pense, il a estime, il a calcule mentalement ». Le Lane's donne « he thought, supposed, reckoned, computed ». L'inaccompli a la troisieme personne donne « il pense, il estime ». Le « a » interrogatif (a-yahsabu) transforme la phrase en question rhetorique : « pense-t-il que... ? ». Le sens de calcul/evaluation est le sens premier — penser c'est evaluer mentalement, calculer les possibilites. La question rhetorique denonce une erreur d'evaluation — cet individu fait un mauvais calcul. Le sens de suffisance (il suffit) est incompatible avec la forme verbale yahsabu qui est clairement un verbe d'opinion/pensee dans ce contexte, pas de suffisance.",
        axe1_verset: "Le verbe yahsabu ouvre la question rhetorique du verset. Le champ lexical est celui de l'erreur mentale : penser (yahsabu), que (an), personne ne (lan... ahadun), avoir pouvoir (yaqdira). L'etre humain PENSE faussement que personne n'aura de pouvoir sur lui — c'est un calcul errone. La question rhetorique denonce cette pensee comme une illusion. Le verbe yahsabu est au centre de la denonciation — le probleme n'est pas une action mais une PENSEE fausse.",
        axe2_voisins: "Le verset 4 declarait que l'etre humain est cree dans l'epreuve. Le verset 5 montre un individu qui ignore cette realite — il pense que personne n'aura de pouvoir sur lui. Le contraste est saisissant : la condition reelle est l'epreuve (v. 4), mais l'individu PENSE etre au-dessus de tout (v. 5). Le verbe yahsabu souligne que l'arrogance est d'abord une erreur de pensee. Le verset 6 poursuivra avec « il dit : j'ai depense une fortune » — l'erreur de pensee (v. 5) precede la vantardise (v. 6).",
        axe3_sourate: "La sourate oppose deux attitudes face a l'epreuve. La premiere est l'arrogance (v. 5-7) : penser qu'on est au-dessus des epreuves, se vanter de depenser. La seconde est la solidarite (v. 12-16) : franchir l'obstacle par des actes moraux. Le verbe yahsabu introduit la premiere attitude — l'erreur de calcul qui mene a l'arrogance. La sourate corrige cette pensee en montrant que la vraie reponse a l'epreuve n'est pas la vantardise mais l'action morale.",
        axe4_coherence: "La racine h-s-b dans le sens de penser apparait frequemment dans le Coran. En 2:214, « pensez-vous (am hasbitum) que vous entrerez au Paradis sans que ne vous touche ce qui a touche ceux d'avant vous ? ». En 29:2, « les gens pensent-ils (a-hasiba) qu'on les laissera dire nous croyons sans etre eprouves ? ». La formule interrogative « a-yahsabu/a-hasiba » est utilisee dans le Coran pour denoncer des pensees fausses. En 90:5, la meme structure denonce l'illusion de toute-puissance.",
        axe5_frequence: "Pour la mission du khalifa, la pensee juste est le prerequis de l'action juste. L'individu qui pense faussement qu'il est au-dessus de tout ne peut pas etre un bon khalifa — sa mauvaise evaluation l'empeche de voir sa responsabilite. Le khalifa doit reconnaitre sa condition (l'epreuve) et agir en consequence (la solidarite). La pensee fausse (v. 5) est l'obstacle interieur que le khalifa doit franchir avant de franchir l'obstacle exterieur (v. 11)."
      },
      [hsb_suffisance]: {
        status: 'nul',
        senses: hsb_suffisance_senses,
        proof_ctx: "Le sens de suffisance (il suffit, hasbi = Dieu me suffit) est atteste pour la racine h-s-b. Mais le verbe yahsabu a la forme I inaccompli 3MS signifie « il pense, il estime » — pas « il suffit ». Le sens de suffisance est porte par d'autres formes (hasbuna = il nous suffit). Dans le contexte interrogatif (a-yahsabu), le verbe ne peut signifier que « pense-t-il ». La phrase « lui suffit-il que personne n'aura de pouvoir sur lui ? » n'a pas de sens."
      },
      [hsb_noblesse]: {
        status: 'nul',
        senses: hsb_noblesse_senses,
        proof_ctx: "Le sens de noblesse est un sens isole et rare de la racine h-s-b (hasab = noblesse hereditaire). Il est incompatible avec la forme verbale yahsabu qui est un verbe d'opinion. La noblesse est un nom, pas une action mentale. Ce sens est hors sujet pour ce verset."
      }
    }
  }, 2);

  // qdr — Puissance/Capacité
  await upsertVWA(6028, 'qdr', 'avoir pouvoir', {
    sense_chosen: 'avoir pouvoir',
    concept_chosen: qdr_puissance,
    concepts: {
      [qdr_puissance]: {
        status: 'retenu',
        senses: qdr_puissance_senses,
        proof_ctx: "Le verbe yaqdira est un inaccompli 3MS (subjonctif apres « lan ») de la racine q-d-r. D'apres les sources etymologiques, qadara 'alayhi signifie « il a eu pouvoir sur lui, il a ete capable contre lui ». Le Lane's donne « he had power, or ability, over him or it ». La construction yaqdira 'alayhi (avoir pouvoir SUR lui) avec la preposition 'ala (sur) indique la domination, la capacite d'agir sur quelqu'un. Le sens de puissance/capacite est le seul compatible avec cette construction — yaqdira 'alayhi signifie « avoir du pouvoir sur lui ». La negation « lan » (jamais) donne « personne n'aura jamais de pouvoir sur lui ». Le sens de mesure/determination est atteste pour la racine q-d-r mais la construction avec 'ala oriente clairement vers le pouvoir : « mesurer sur lui » ne forme pas une expression naturelle, tandis que « avoir pouvoir sur lui » est une expression directe et naturelle.",
        axe1_verset: "Le verbe yaqdira est le noyau de la proposition subordonnee : « que personne n'aura de pouvoir sur lui ». Le champ lexical est celui du rapport de force : penser (yahsabu), pouvoir (yaqdira), sur lui ('alayhi), personne (ahadun). Le verset decrit un individu qui croit etre invulnerable — personne ne pourra rien contre lui. Le verbe yaqdira exprime la capacite de domination. La negation « lan » (jamais) renforce l'absolu de cette illusion — il ne s'agit pas d'un doute mais d'une certitude fausse.",
        axe2_voisins: "Le verset 4 declarait que l'etre humain est cree dans l'epreuve. Le verset 5 montre un individu qui croit echapper a tout pouvoir exterieur — c'est l'inverse de l'epreuve. Si l'on est cree dans l'epreuve, alors des forces agissent sur nous. Penser que personne n'a de pouvoir sur soi, c'est nier la condition de l'epreuve. Le verset 6 montrera que cet individu se vante de depenser — son illusion de puissance se manifeste par la vantardise financiere.",
        axe3_sourate: "La sourate oppose l'arrogance a la solidarite. L'individu du verset 5 croit que personne n'a de pouvoir sur lui — il se croit tout-puissant. Mais la sourate montrera que la vraie puissance est dans l'acte moral (liberer un captif, nourrir un orphelin). La fausse puissance est l'illusion d'invulnerabilite ; la vraie puissance est la capacite d'agir pour le bien des autres. Le verbe yaqdira lie ces deux themes — la puissance niee (v. 5) et la puissance reelle (l'action morale).",
        axe4_coherence: "La racine q-d-r dans le sens de puissance est utilisee dans le Coran pour decrire la puissance divine. En 2:20, « Dieu est capable (qadir) de toute chose ». En 6:37, « Dieu est capable (qadir) d'envoyer un signe ». La puissance est d'abord un attribut divin dans le Coran. En 90:5, l'individu pense que personne n'a de pouvoir sur lui — il s'attribue une invulnerabilite qui nie la puissance de Dieu. La question rhetorique denonce cette pretention.",
        axe5_frequence: "Pour la mission du khalifa, la conscience de la puissance divine est essentielle. Le khalifa est un representant, pas un souverain absolu. Penser que personne n'a de pouvoir sur soi, c'est se prendre pour un souverain absolu — c'est l'echec de la mission du khalifa. Le bon khalifa reconnait que Dieu a pouvoir sur lui et agit en consequence avec humilite et responsabilite."
      },
      [qdr_mesure]: {
        status: 'peu_probable',
        senses: qdr_mesure_senses,
        proof_ctx: "Le sens de mesure/determination est le sens premier de la racine q-d-r : qadara signifie « il a mesure, il a determine, il a fixe ». Mais la construction yaqdira 'alayhi (avec la preposition 'ala, « sur ») oriente vers le pouvoir, pas vers la mesure. « Mesurer sur lui » ne forme pas une expression naturelle en francais ni en arabe — on mesure quelque chose, on ne mesure pas SUR quelqu'un. « Avoir pouvoir sur lui » est l'expression directe de yaqdira 'alayhi. Le test de naturalite semantique ecarte le sens de mesure dans ce contexte.",
        axe1_verset: "Si yaqdira signifiait « mesurer », le verset dirait « pense-t-il que personne ne mesurera sur lui ». Cette phrase est inintelligible — on ne mesure pas SUR quelqu'un. Le champ lexical du verset (pensee fausse, question rhetorique) attend un verbe de domination ou de capacite, pas un verbe de calcul ou d'evaluation physique. La mesure est hors du champ lexical de ce verset.",
        axe2_voisins: "Le verset 4 parle de creation dans l'epreuve. Le verset 5 denonce une pensee fausse. Le sens de mesure ne s'inscrit pas dans cette progression — la mesure est neutre, tandis que le verset denonce une pretention. Le pouvoir est beaucoup plus adapte au ton rhetorique du verset.",
        axe3_sourate: "La sourate traite d'epreuve, d'arrogance et de solidarite. Le sens de mesure est neutre et technique — il ne contribue pas au theme moral de la sourate. Le pouvoir est directement lie au theme de l'arrogance (se croire invulnerable) que la sourate denonce.",
        axe4_coherence: "La construction qadir 'ala dans le Coran signifie toujours « capable de, ayant pouvoir sur ». En 2:20, qadir 'ala kulli shay' = « capable de toute chose ». La preposition 'ala apres q-d-r oriente systematiquement vers le pouvoir dans tout le Coran. Le sens de mesure utilise d'autres constructions (qaddara, sans 'ala).",
        axe5_frequence: "Le sens de mesure ne contribue pas a la comprehension de la mission du khalifa dans ce verset. Le verset denonce une illusion de toute-puissance, pas une erreur de mesure."
      },
      [qdr_marmite]: {
        status: 'nul',
        senses: qdr_marmite_senses,
        proof_ctx: "Le sens de marmite est un sens isole et concret de la racine q-d-r (qidr = marmite, recipient de cuisson). Il est totalement incompatible avec la forme verbale yaqdira et le contexte du verset. Un verbe de cuisson dans une question rhetorique sur la puissance est absurde."
      }
    }
  }, 3);

  // whd — Unicité/Unité
  await upsertVWA(6028, 'whd', 'personne', {
    sense_chosen: 'personne',
    concept_chosen: whd_unicite,
    concepts: {
      [whd_unicite]: {
        status: 'retenu',
        senses: whd_unicite_senses,
        proof_ctx: "Le mot ahadun est un nom indefini au nominatif de la racine w-h-d. D'apres les sources etymologiques, ahad signifie « un, quelqu'un, personne (en contexte negatif) ». Le Lane's donne « one, anyone, someone ». En contexte negatif (apres « lan », jamais), ahad signifie « personne » — « personne ne pourra ». Le mot est au nominatif car il est le sujet du verbe yaqdira (avoir pouvoir). L'indefini souligne le caractere absolu de la negation — pas UN seul etre n'aura de pouvoir. Le sens d'unicite est directement present : ahad vient de la racine wahid (un, unique). « Personne » est le sens pragmatique de « pas un seul ». La racine exprime l'unicite et l'individualite — quand elle est niee, elle donne « aucun individu, personne ».",
        axe1_verset: "Le mot ahadun est le sujet du verbe yaqdira — c'est celui dont l'individu nie l'existence. « Personne n'aura de pouvoir sur lui » — le mot ahad exprime l'absolu de la negation. Le champ lexical du verset est celui de la negation absolue : penser (yahsabu), jamais (lan), personne (ahad). L'individu nie totalement et absolument que quiconque puisse avoir un pouvoir sur lui. Le mot ahad au nominatif indefini souligne cette totalite — il ne dit pas « untel n'aura pas de pouvoir » mais « PERSONNE n'aura de pouvoir ».",
        axe2_voisins: "Le verset 4 posait une verite universelle (l'etre humain est cree dans l'epreuve). Le verset 5 montre un individu qui nie cette verite de maniere absolue — personne n'aura de pouvoir sur lui. Le mot ahad porte cette negation absolue. Le contraste entre l'universel (v. 4) et le refus individuel (v. 5) est renforce par l'absolu de la negation : ce n'est pas un doute partiel mais un rejet total.",
        axe3_sourate: "La sourate opposera ensuite ceux qui croient et ceux qui ne croient pas (v. 17-20). Le mot ahad dans la negation absolue du verset 5 prefigure l'attitude de ceux qui nient — ils nient totalement, absolument. Cette negation absolue est le symptome de l'arrogance que la sourate denonce. Le mot ahad porte le poids de cette negation totale.",
        axe4_coherence: "La racine w-h-d est fondamentale dans le Coran — ahad designe l'unicite divine (112:1, « Dis : Lui, Dieu, est un/ahad »). Le mot ahad porte l'idee d'unicite et d'absolu. Quand il est utilise dans une negation (lan yaqdira 'alayhi ahadun), il exprime une negation absolue — pas un seul, pas meme un. L'individu du verset 5 pretend a une invulnerabilite absolue, ce qui est une forme de pretention a l'unicite — se croire au-dessus de tout comme si l'on etait le seul maitre.",
        axe5_frequence: "Pour la mission du khalifa, l'unicite appartient a Dieu. Le khalifa qui nie que « quiconque » (ahad) puisse avoir pouvoir sur lui s'attribue une qualite divine — l'invulnerabilite absolue. C'est l'echec ultime de la mission du khalifa : au lieu de reconnaitre sa dependance envers Dieu, il se proclame independant de tout. Le mot ahad rappelle que l'unicite absolue est divine, pas humaine."
      }
    }
  }, 4);

  await upsertVA(6028, {
    translation_arab: "Pense-t-il que personne n'aura de pouvoir sur lui ?",
    full_translation: "Pense-t-il que personne ne pourra rien contre lui ?",
    translation_explanation: `§DEMARCHE§
La particule **a** (hamza interrogative) transforme le verset en question rhetorique — une question dont la reponse est evidente (« non, bien sur que non »). Le verbe **yahsabu** est un inaccompli 3MS (une forme qui dit que l'action est en cours ou habituelle) de la racine h-s-b. D'apres les sources etymologiques, hasiba signifie « penser, estimer, calculer mentalement ». L'inaccompli indique que cette pensee est habituelle — il pense regulierement, pas une seule fois. La conjonction **an** (que) introduit la proposition subordonnee qui est le contenu de sa pensee. La particule **lan** est une particule de negation du futur — elle nie de maniere absolue un evenement futur (« jamais ne »). Le verbe **yaqdira** est un inaccompli 3MS au subjonctif (apres « lan ») de la racine q-d-r. Le Lane's donne pour qadara 'ala « he had power over, he was able against ». La preposition **'alayhi** (sur lui) est composee de 'ala (sur) + pronom suffixe hi (lui). La construction yaqdira 'alayhi signifie « avoir pouvoir sur lui ». Le mot **ahadun** est un nom indefini au nominatif (sujet) de la racine w-h-d. En contexte negatif, ahad signifie « personne, aucun ».

§JUSTIFICATION§
**pense** — Le sens retenu est « calcul/evaluation ». Le mot « pense » est choisi car c'est l'equivalent direct en francais courant de yahsabu au sens de « il estime, il croit ». L'alternative « calcule » est ecartee car trop technique — en francais courant, « il pense » est plus naturel que « il calcule ». L'alternative « suppose » est ecartee car trop faible — la question rhetorique denonce une certitude fausse, pas une simple supposition.

**pouvoir** — Le sens retenu est « puissance/capacite ». Le mot « pouvoir » est choisi car il traduit directement yaqdira 'ala — avoir du pouvoir sur quelqu'un. L'alternative « mesurer » est ecartee car « mesurer sur lui » ne forme pas une expression naturelle en francais. L'alternative « determiner » est ecartee pour la meme raison. La construction avec la preposition 'ala impose le sens de pouvoir/domination.

**personne** — Le sens retenu est « unicite/unite ». Le mot « personne » est choisi car en contexte negatif, ahad signifie « aucun etre, personne ». L'alternative « quelqu'un » est ecartee car le contexte est negatif (lan = jamais). L'alternative « un » est ecartee car trop ambigu en francais — « un n'aura de pouvoir sur lui » ne se dit pas.

§CRITIQUE§
**pouvoir vs rien contre** — Hamidullah traduit « personne ne pourra rien contre lui ». Notre traduction dit « personne n'aura de pouvoir sur lui ». Les deux traductions sont proches. La difference est que « ne pourra rien contre lui » est une formulation indirecte (pouvoir + rien + contre), tandis que « n'aura de pouvoir sur lui » est plus litterale (yaqdira 'alayhi = avoir pouvoir sur lui). La nuance est minime — les deux traductions rendent le meme sens. Le texte ne precise pas la nature de ce pouvoir ni l'identite de celui qui le detiendrait.`,
    segments: JSON.stringify([
      { fr: "Pense-t-il", pos: "verbe", phon: "a-yahsabu", arabic: "أَيَحْسَبُ", word_key: "hsb", is_particle: false, sense_retenu: "penser", position: 1 },
      { fr: "que", phon: "an", arabic: "أَن", is_particle: true, position: 2 },
      { fr: "jamais", phon: "lan", arabic: "لَّن", is_particle: true, position: 3 },
      { fr: "n'aura de pouvoir", pos: "verbe", phon: "yaqdira", arabic: "يَقْدِرَ", word_key: "qdr", is_particle: false, sense_retenu: "avoir pouvoir", position: 4 },
      { fr: "sur lui", phon: "'alayhi", arabic: "عَلَيْهِ", is_particle: true, position: 5 },
      { fr: "personne", pos: "nom", phon: "ahadun", arabic: "أَحَدٌ", word_key: "whd", is_particle: false, sense_retenu: "personne", position: 6 }
    ])
  });

  console.log('  Verset 90:5 terminé\n');

  console.log('=== PIPELINE SOURATE 90 (AL-BALAD) — VERSETS 1 À 5 TERMINÉ ===');
})();
