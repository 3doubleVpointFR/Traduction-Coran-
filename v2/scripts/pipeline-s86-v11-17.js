require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    if (error) console.log('  ERR update VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA updated ' + word_key + ' (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log('  ERR insert VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA created ' + word_key + ' (id=' + data.id + ')');
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    if (error) console.log('  ERR update VA: ' + error.message);
    else console.log('  ✓ VA updated (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log('  ERR insert VA: ' + error.message);
    else console.log('  ✓ VA created (id=' + data.id + ')');
  }
}

(async () => {
  console.log('=== PIPELINE S86 v11-17 — ÉTAPES 2-3-4 ===\n');

  // ============================================================
  // ÉTAPE 2 — Création des racines manquantes
  // ============================================================

  // --- ArD (أ ر ض) — Terre ---
  console.log('--- ÉTAPE 2 : Création racine ArD (أ-ر-ض) ---');
  let ArDId;
  const { data: existArD } = await sb.from('word_analyses').select('id').eq('word_key', 'ArD');
  if (existArD && existArD.length > 0) {
    ArDId = existArD[0].id;
    console.log('  ArD existe déjà (id=' + ArDId + ')');
  } else {
    const { data: waArD } = await sb.from('word_analyses').insert({
      word_key: 'ArD', root_ar: 'أ ر ض', root_phon: 'ArD', root_meaning: '',
      model_used: 'claude-pipeline', prompt_version: 'v7-maison',
      total_occurrences: 461, analysis_step: 'meanings'
    }).select().single();
    ArDId = waArD.id;
    console.log('  ✓ word_analyses ArD créé (id=' + ArDId + ')');

    await sb.from('word_meanings').insert([
      { analysis_id: ArDId, sense: 'terre', concept: 'Terre/Sol', status: null, meaning_type: 'etymology', display_order: 1, description: "Surface solide sur laquelle vivent les etres humains. C'est la base physique de l'existence terrestre — ce qui porte, ce qui soutient, ce qui recoit. La terre est le lieu de la vie, de la mort et de la croissance. Le Lane's donne : ce sur quoi se trouvent les etres humains. C'est l'oppose du ciel (sama'). La terre est receptive — elle recoit la pluie, les graines, les morts. C'est une realite passive qui attend d'etre fecondee." },
      { analysis_id: ArDId, sense: 'sol', concept: 'Terre/Sol', status: null, meaning_type: 'etymology', display_order: 2, description: "Surface sur laquelle on marche et on s'assoit." },
      { analysis_id: ArDId, sense: 'pays', concept: 'Terre/Sol', status: null, meaning_type: 'etymology', display_order: 3, description: "Territoire, region, etendue de terre habitee." },
      { analysis_id: ArDId, sense: 'terrain', concept: 'Terre/Sol', status: null, meaning_type: 'etymology', display_order: 4, description: "Portion de terre consideree dans sa qualite (fertile, aride, etc.)." },
      { analysis_id: ArDId, sense: 'etre fertile', concept: 'Fertilité/Production', status: null, meaning_type: 'etymology', display_order: 5, description: "Etat d'une terre qui produit abondamment, qui est luxuriante en herbage. Le Lane's donne : la terre devint prospere, productive, agreable a l'oeil, disposee par nature a donner de bonnes recoltes. C'est un etat actif de la terre — elle ne recoit pas seulement, elle produit. La fertilite est la capacite de transformer ce qui est recu (pluie, graines) en vie nouvelle." },
      { analysis_id: ArDId, sense: 'produire de l herbage', concept: 'Fertilité/Production', status: null, meaning_type: 'etymology', display_order: 6, description: "Terre qui fait pousser de l'herbe en abondance." },
      { analysis_id: ArDId, sense: 'collecter l humidite', concept: 'Fertilité/Production', status: null, meaning_type: 'etymology', display_order: 7, description: "Terre douce au toucher, agreable pour s'asseoir, qui retient l'eau." },
      { analysis_id: ArDId, sense: 'rester au sol', concept: 'Fixité/Attachement', status: null, meaning_type: 'etymology', display_order: 8, description: "S'attacher a la terre, ne pas la quitter. Le Lane's donne : il resta attache au sol, il ne le quitta pas. C'est un etat d'immobilite liee a la terre — rester fixe, ne pas s'elever. Extension metaphorique : la soumission, l'humilite (celui qui est bas, proche du sol)." },
      { analysis_id: ArDId, sense: 'attendre', concept: 'Fixité/Attachement', status: null, meaning_type: 'etymology', display_order: 9, description: "Rester en un lieu et attendre, immobile sur le sol." },
      { analysis_id: ArDId, sense: 'etre humble', concept: 'Fixité/Attachement', status: null, meaning_type: 'etymology', display_order: 10, description: "Homme soumis, dispose par nature a faire le bien. Extension metaphorique de la proximite avec le sol." },
      { analysis_id: ArDId, sense: 'termite', concept: 'Insecte/Vermissure', status: null, meaning_type: 'etymology', display_order: 11, description: "Insecte blanc qui ronge le bois, semblable a la fourmi." },
      { analysis_id: ArDId, sense: 'bois ronge', concept: 'Insecte/Vermissure', status: null, meaning_type: 'etymology', display_order: 12, description: "Bois mange par les termites." },
      { analysis_id: ArDId, sense: 'rhume', concept: 'Sens isolé/Maladie', status: null, meaning_type: 'etymology', display_order: 13, description: "Etre atteint de rhume. Sens atteste mais isole." },
      { analysis_id: ArDId, sense: 'chercher un paturage', concept: 'Fertilité/Production', status: null, meaning_type: 'etymology', display_order: 14, description: "Chercher un lieu pour camper, rechercher un bon terrain." }
    ]);
    console.log('  ✓ word_meanings ArD insérés (14 sens, 4 groupes)');
  }

  // --- SdE (ص-د-ع) — Fissure ---
  console.log('--- ÉTAPE 2 : Création racine SdE (ص-د-ع) ---');
  let SdEId;
  const { data: existSdE } = await sb.from('word_analyses').select('id').eq('word_key', 'SdE');
  if (existSdE && existSdE.length > 0) {
    SdEId = existSdE[0].id;
    console.log('  SdE existe déjà (id=' + SdEId + ')');
  } else {
    const { data: waSdE } = await sb.from('word_analyses').insert({
      word_key: 'SdE', root_ar: 'ص د ع', root_phon: 'SdE', root_meaning: '',
      model_used: 'claude-pipeline', prompt_version: 'v7-maison',
      total_occurrences: 3, analysis_step: 'meanings'
    }).select().single();
    SdEId = waSdE.id;
    console.log('  ✓ word_analyses SdE créé (id=' + SdEId + ')');

    await sb.from('word_meanings').insert([
      { analysis_id: SdEId, sense: 'fendre', concept: 'Fissure/Fente', status: null, meaning_type: 'etymology', display_order: 1, description: "Acte de separer une chose dure en la coupant dans sa longueur. Le Lane's donne : fendre, couper, fissurer une chose dure comme un verre, un mur. La fissure est directionnelle — elle suit une ligne, elle ouvre ce qui etait ferme. C'est un mouvement de separation qui cree un passage la ou il n'y en avait pas. La fente peut etre partielle (fissure sans separation complete) ou totale (division en deux moities)." },
      { analysis_id: SdEId, sense: 'fissurer', concept: 'Fissure/Fente', status: null, meaning_type: 'etymology', display_order: 2, description: "Creer une fissure dans une surface dure." },
      { analysis_id: SdEId, sense: 'couper en deux', concept: 'Fissure/Fente', status: null, meaning_type: 'etymology', display_order: 3, description: "Diviser en deux moities egales." },
      { analysis_id: SdEId, sense: 'craquer', concept: 'Fissure/Fente', status: null, meaning_type: 'etymology', display_order: 4, description: "Se fissurer sous l'effet d'une pression." },
      { analysis_id: SdEId, sense: 'traverser', concept: 'Traversée/Passage', status: null, meaning_type: 'etymology', display_order: 5, description: "Traverser un desert, une etendue — comme si on le fendait. Le Lane's donne : il traversa le desert. Extension metaphorique de la fissure vers le deplacement : traverser c'est fendre l'espace. Le mouvement est directionnel et continu — on perce l'etendue d'un bout a l'autre." },
      { analysis_id: SdEId, sense: 'voyager de nuit', concept: 'Traversée/Passage', status: null, meaning_type: 'etymology', display_order: 6, description: "Fendre la nuit par le voyage." },
      { analysis_id: SdEId, sense: 'route qui traverse', concept: 'Traversée/Passage', status: null, meaning_type: 'etymology', display_order: 7, description: "Route qui fend une terre d'un bout a l'autre." },
      { analysis_id: SdEId, sense: 'separer', concept: 'Séparation/Dispersion', status: null, meaning_type: 'etymology', display_order: 8, description: "Disperser un groupe, separer les parties. Le Lane's donne : il separa, dispersa le peuple. C'est un acte qui va vers l'exterieur — les parties s'eloignent les unes des autres a partir du point de fissure." },
      { analysis_id: SdEId, sense: 'disperser', concept: 'Séparation/Dispersion', status: null, meaning_type: 'etymology', display_order: 9, description: "Eparpiller, repandre dans toutes les directions." },
      { analysis_id: SdEId, sense: 'plantes de la terre', concept: 'Germination/Émergence', status: null, meaning_type: 'etymology', display_order: 10, description: "Les plantes qui fendent la terre pour sortir. Le Lane's cite explicitement le Coran 86:12 sous ce sens : wa-al-ardi dhati as-sad'i = la terre qui se fend pour laisser passer les plantes et les sources. La terre fissure est celle d'ou emerge la vie. La fissure est ici un acte de creation — la terre se fend pour donner naissance." },
      { analysis_id: SdEId, sense: 'aube', concept: 'Germination/Émergence', status: null, meaning_type: 'etymology', display_order: 11, description: "L'aube est le moment ou la nuit se fend pour laisser passer la lumiere." },
      { analysis_id: SdEId, sense: 'lait frais', concept: 'Sens isolé/Lait', status: null, meaning_type: 'etymology', display_order: 12, description: "Lait frais dont on ecume la pellicule de surface." },
      { analysis_id: SdEId, sense: 'homme mince', concept: 'Sens isolé/Corpulence', status: null, meaning_type: 'etymology', display_order: 13, description: "Homme leger de chair, de taille moyenne." },
      { analysis_id: SdEId, sense: 'groupe hostile', concept: 'Séparation/Dispersion', status: null, meaning_type: 'etymology', display_order: 14, description: "Groupe uni dans l'hostilite contre d'autres — une faction separee." }
    ]);
    console.log('  ✓ word_meanings SdE insérés (14 sens, 5 groupes)');
  }

  // --- fSl (ف-ص-ل) — Séparation ---
  console.log('--- ÉTAPE 2 : Création racine fSl (ف-ص-ل) ---');
  let fSlId;
  const { data: existFSl } = await sb.from('word_analyses').select('id').eq('word_key', 'fSl');
  if (existFSl && existFSl.length > 0) {
    fSlId = existFSl[0].id;
    console.log('  fSl existe déjà (id=' + fSlId + ')');
  } else {
    const { data: waFSl } = await sb.from('word_analyses').insert({
      word_key: 'fSl', root_ar: 'ف ص ل', root_phon: 'fSl', root_meaning: '',
      model_used: 'claude-pipeline', prompt_version: 'v7-maison',
      total_occurrences: 43, analysis_step: 'meanings'
    }).select().single();
    fSlId = waFSl.id;
    console.log('  ✓ word_analyses fSl créé (id=' + fSlId + ')');

    await sb.from('word_meanings').insert([
      { analysis_id: fSlId, sense: 'separer', concept: 'Séparation/Distinction', status: null, meaning_type: 'etymology', display_order: 1, description: "Acte de diviser une chose en deux parties distinctes. Le Lane's donne : separer, diviser, mettre a part. La separation est nette et definitive — elle cree une frontiere entre ce qui etait uni. C'est un acte exterieur, directionnel et irreversible. La separation est le contraire de la confusion — elle clarifie, elle distingue, elle met de l'ordre dans ce qui etait melange." },
      { analysis_id: fSlId, sense: 'diviser', concept: 'Séparation/Distinction', status: null, meaning_type: 'etymology', display_order: 2, description: "Mettre en parties separees." },
      { analysis_id: fSlId, sense: 'distinguer', concept: 'Séparation/Distinction', status: null, meaning_type: 'etymology', display_order: 3, description: "Faire la difference entre deux choses." },
      { analysis_id: fSlId, sense: 'trancher un litige', concept: 'Jugement/Décision', status: null, meaning_type: 'etymology', display_order: 4, description: "Decider un differend de maniere definitive. Le Lane's donne : trancher les litiges, les disputes. C'est l'application de la separation au domaine du jugement — on separe le vrai du faux, le juste de l'injuste. L'acte est definitif et autoritaire — une fois tranche, le litige est clos. Le qawl fasl (parole tranchante) est une parole qui separe le vrai du faux sans ambiguite." },
      { analysis_id: fSlId, sense: 'decider', concept: 'Jugement/Décision', status: null, meaning_type: 'etymology', display_order: 5, description: "Prendre une decision definitive." },
      { analysis_id: fSlId, sense: 'parole claire', concept: 'Jugement/Décision', status: null, meaning_type: 'etymology', display_order: 6, description: "Discours qui ne laisse pas de place a l'ambiguite." },
      { analysis_id: fSlId, sense: 'sevrer', concept: 'Sevrage/Départ', status: null, meaning_type: 'etymology', display_order: 7, description: "Separer le nourrisson du sein de sa mere. Le Lane's donne : sevrer le nourrisson. C'est une separation qui marque une etape de croissance — l'enfant passe d'un etat de dependance a un etat d'autonomie. Le sevrage est une rupture necessaire pour le developpement." },
      { analysis_id: fSlId, sense: 'partir', concept: 'Sevrage/Départ', status: null, meaning_type: 'etymology', display_order: 8, description: "Quitter un lieu, se separer d'un endroit." },
      { analysis_id: fSlId, sense: 'transplanter', concept: 'Sevrage/Départ', status: null, meaning_type: 'etymology', display_order: 9, description: "Deplacer un arbre d'un lieu a un autre." },
      { analysis_id: fSlId, sense: 'saison', concept: 'Division/Portion', status: null, meaning_type: 'etymology', display_order: 10, description: "Division de l'annee en quatre saisons. Le Lane's donne les saisons comme des divisions du temps. La separation du temps en periodes distinctes est une application de la racine a la temporalite." },
      { analysis_id: fSlId, sense: 'chapitre', concept: 'Division/Portion', status: null, meaning_type: 'etymology', display_order: 11, description: "Section d'un livre, portion separee d'un ensemble." },
      { analysis_id: fSlId, sense: 'articulation', concept: 'Division/Portion', status: null, meaning_type: 'etymology', display_order: 12, description: "Point de jonction entre deux os — lieu de separation et de reunion." },
      { analysis_id: fSlId, sense: 'branche de parente', concept: 'Division/Portion', status: null, meaning_type: 'etymology', display_order: 13, description: "Les branches d'une famille, par opposition aux racines (usul)." },
      { analysis_id: fSlId, sense: 'jeune chameau sevre', concept: 'Sevrage/Départ', status: null, meaning_type: 'etymology', display_order: 14, description: "Jeune chameau separe de sa mere." }
    ]);
    console.log('  ✓ word_meanings fSl insérés (14 sens, 4 groupes)');
  }

  // --- hzl (ه-ز-ل) — Plaisanterie ---
  console.log('--- ÉTAPE 2 : Création racine hzl (ه-ز-ل) ---');
  let hzlId;
  const { data: existHzl } = await sb.from('word_analyses').select('id').eq('word_key', 'hzl');
  if (existHzl && existHzl.length > 0) {
    hzlId = existHzl[0].id;
    console.log('  hzl existe déjà (id=' + hzlId + ')');
  } else {
    const { data: waHzl } = await sb.from('word_analyses').insert({
      word_key: 'hzl', root_ar: 'ه ز ل', root_phon: 'hzl', root_meaning: '',
      model_used: 'claude-pipeline', prompt_version: 'v7-maison',
      total_occurrences: 1, analysis_step: 'meanings'
    }).select().single();
    hzlId = waHzl.id;
    console.log('  ✓ word_analyses hzl créé (id=' + hzlId + ')');

    await sb.from('word_meanings').insert([
      { analysis_id: hzlId, sense: 'plaisanter', concept: 'Plaisanterie/Frivolité', status: null, meaning_type: 'etymology', display_order: 1, description: "Le contraire du serieux. Le Lane's donne : il plaisanta, il ne fut pas serieux. C'est un etat de parole ou d'action qui manque de serieux — on dit ou fait quelque chose sans y mettre de poids, sans intention reelle. La plaisanterie est legere, elle n'engage pas celui qui la prononce. Elle s'oppose au jidd (le serieux, l'engagement). C'est un etat interieur qui se manifeste dans la parole ou l'action." },
      { analysis_id: hzlId, sense: 'ne pas etre serieux', concept: 'Plaisanterie/Frivolité', status: null, meaning_type: 'etymology', display_order: 2, description: "Manque de serieux dans les propos ou les actes." },
      { analysis_id: hzlId, sense: 'etre maigre', concept: 'Maigreur/Émaciation', status: null, meaning_type: 'etymology', display_order: 3, description: "Etat de maigreur, d'emaciation. Le Lane's donne : maigreur, le contraire de l'embonpoint. C'est un etat physique de manque — le corps n'a pas de substance, pas de poids. L'extension vers la plaisanterie vient de cette idee : la parole qui n'a pas de poids, qui est legere comme un corps amaigri." },
      { analysis_id: hzlId, sense: 'emacier', concept: 'Maigreur/Émaciation', status: null, meaning_type: 'etymology', display_order: 4, description: "Devenir maigre, perdre de la chair." }
    ]);
    console.log('  ✓ word_meanings hzl insérés (4 sens, 2 groupes)');
  }

  // --- Vérifier occurrences mhl ---
  console.log('--- ÉTAPE 2 : Vérifier occurrences mhl ---');
  const { data: mhlData } = await sb.from('word_analyses').select('id, total_occurrences').eq('word_key', 'mhl');
  if (mhlData && mhlData[0].total_occurrences === 0) {
    await sb.from('word_analyses').update({ total_occurrences: 8 }).eq('id', mhlData[0].id);
    console.log('  ✓ mhl occurrences mises à jour : 8');
  } else {
    console.log('  mhl occurrences OK : ' + (mhlData ? mhlData[0].total_occurrences : '?'));
  }

  console.log('\n--- ÉTAPE 2 TERMINÉE ---\n');

  // ============================================================
  // ÉTAPES 3-4 — Analyse par verset
  // ============================================================

  // ========== VERSET 11 (5942) ==========
  // وَٱلسَّمَآءِ ذَاتِ ٱلرَّجْعِ
  console.log('--- v11 (5942): wa-as-sama\'i dhati ar-raj\'i ---');

  await upsertVWA(5942, 'smw', 'ciel', {
    sense_chosen: 'ciel',
    concept_chosen: 'Ciel/Ce qui couvre',
    concepts: {
      'Ciel/Ce qui couvre': {
        senses: ['ciel', 'toit', 'nuage', 'pluie', 'herbage', 'dos', 'celeste'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-m-w porte le sens de ce qui est au-dessus, ce qui couvre — le ciel. Le mot as-sama'i est au cas genitif apres la particule de serment wa (par). Ce verset ouvre un nouveau serment, parallele au serment du verset 1 (wa-as-sama'i wa-at-tariqi). Mais ici, le ciel est qualifie par dhati ar-raj'i (celle qui possede le retour). Le ciel est la voute d'ou revient la pluie — il est le lieu du cycle de retour. Le sens de hauteur/elevation est abstrait et ne s'applique pas a l'objet physique du serment.",
        axe1_verset: "Le mot as-sama'i est un nom feminin defini au cas genitif, complement de la particule de serment wa. Le champ lexical du verset est celui du serment cosmique et du cycle naturel. Le ciel est qualifie par dhati ar-raj'i — celle qui possede le retour. Le ciel et le retour forment une paire : le contenant et sa propriete essentielle. Le serment porte sur la capacite du ciel a faire revenir quelque chose — la pluie, la lumiere, les cycles.",
        axe2_voisins: "Le verset 12 fera un serment parallele : par la terre qui possede la fissure. La paire v11-v12 est un diptique cosmique : le ciel (qui fait revenir) et la terre (qui se fend). Les versets 13-14 tireront la conclusion : c'est une parole tranchante, ce n'est pas une plaisanterie. Le serment v11-v12 sert de fondation a l'affirmation v13-v14.",
        axe3_sourate: "La sourate 86 utilise deux serments par le ciel : le premier (v1) par le ciel et le visiteur nocturne, le second (v11) par le ciel et le retour. Le premier introduit la surveillance, le second introduit la certitude de la parole. La repetition du serment par le ciel structure la sourate en deux parties.",
        axe4_coherence: "Le Coran utilise le serment par le ciel dans plusieurs sourates. En 51:7, wa-as-sama'i dhati al-hubuk (par le ciel aux voies). En 85:1, wa-as-sama'i dhati al-buruj (par le ciel aux constellations). Ici, dhati ar-raj'i ajoute la dimension du cycle et du retour — le ciel n'est pas statique, il est le lieu d'ou les choses reviennent.",
        axe5_frequence: "Le ciel qui fait revenir est un modele pour le khalifa. Le cycle de retour — la pluie monte, se condense, redescend — est le modele de toute regeneration. Le khalifa comprend que les cycles naturels servent l'ordre et la justice : ce qui part revient, ce qui est donne est rendu."
      },
      'Hauteur/Élévation': {
        senses: ['etre haut', 'se dresser', 'monter', 'noble', 'hautain'],
        status: 'nul',
        proof_ctx: "Le sens abstrait de hauteur ne s'applique pas ici. Le serment porte sur un objet concret — la voute celeste et sa propriete de retour."
      },
      'Nom/Identification': {
        senses: ['nom', 'nommer', 'renommee'],
        status: 'nul',
        proof_ctx: "Aucun rapport avec le serment cosmique."
      }
    }
  }, 1);

  await upsertVWA(5942, 'rje', 'retour', {
    sense_chosen: 'retour',
    concept_chosen: 'Retour/Réversion',
    concepts: {
      'Retour/Réversion': {
        senses: ['retourner', 'revenir', 'reverter', 'faire revenir', 'renvoyer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine r-j-e signifie retourner, revenir. Le mot ar-raj'i est un masdar (nom verbal) defini au cas genitif, en idafa avec dhati (celle qui possede). Le ciel est qualifie comme dhati ar-raj'i — celle qui possede le retour, la capacite de faire revenir. La pluie monte du sol par evaporation, se condense dans le ciel, puis revient sur terre. C'est le cycle du retour. Le Lane's donne egalement raj' comme la pluie elle-meme — parce qu'elle est ce qui revient. Le sens de repetition est trop restrictif. Le sens de profit est isole et hors contexte.",
        axe1_verset: "Le mot ar-raj'i est un masdar defini au cas genitif, complement de l'idafa dhati ar-raj'i (celle qui possede le retour). Le champ lexical est celui du cycle cosmique — le ciel possede la propriete de faire revenir. Le retour est une propriete permanente du ciel, pas un evenement ponctuel. L'idafa dhati + masdar indique une propriete essentielle, constitutive — le ciel est defini par sa capacite de retour.",
        axe2_voisins: "Le verset 11 dit : par le ciel, celle qui possede le retour. Le verset 8 disait : il est capable de le faire revenir (raj'ihi). Le meme mot (raj') apparait dans les deux contextes. Au verset 8, le retour etait celui de l'etre humain. Au verset 11, le retour est celui du ciel (la pluie). Le texte relie les deux retours : le ciel qui fait revenir la pluie est le modele du retour de l'etre humain.",
        axe3_sourate: "La sourate 86 est structuree autour du retour. Le verset 8 affirme la capacite du retour, le verset 11 en donne la preuve par le ciel. Le serment par le ciel du retour est l'argument naturel : si le ciel fait revenir la pluie (observable), le retour de l'etre humain est d'autant plus credible.",
        axe4_coherence: "Le Coran relie la pluie au retour dans d'autres passages. En 30:48, allahu alladhi yursilu ar-riyaha fa-tuthiru sahaban... (c'est Dieu qui envoie les vents, qui soulevent les nuages...). Le cycle de l'eau est un signe de la capacite de regeneration. En 50:9-11, wa-nazzalna mina as-sama'i ma'an mubarakan fa-anbatna bihi jannatin (nous avons fait descendre du ciel une eau benie et nous avons fait pousser des jardins).",
        axe5_frequence: "Le retour est le fondement de l'ordre. Le khalifa sait que les cycles naturels garantissent la continuite — ce qui est investi revient, ce qui est plante pousse. Le retour est le cadre qui rend la mission de justice viable dans la duree."
      },
      'Pluie/Renouvellement': {
        senses: ['pluie'],
        status: 'probable',
        proof_ctx: "Le Lane's donne raj' comme la pluie elle-meme, parce qu'elle est ce qui revient du ciel. Dans le contexte de dhati ar-raj'i, ce sens est tres proche du sens retenu. La distinction philosophique est subtile : « pluie » est le produit concret du retour, tandis que « retour » est le processus lui-meme. Le ciel ne possede pas « la pluie » comme propriete essentielle — il possede « le retour », dont la pluie est une manifestation. Dhati ar-raj'i decrit une capacite, pas un produit.",
        axe1_verset: "Le mot ar-raj'i dans dhati ar-raj'i pourrait signifier « la pluie » — celle qui possede la pluie. Le champ lexical serait coherent : le ciel est le lieu d'ou vient la pluie. Mais dhati + nom indique une propriete essentielle, pas un contenu. Le ciel possede le retour comme propriete, pas la pluie comme objet.",
        axe2_voisins: "Le verset 8 utilise le meme mot (raj') pour le retour de l'etre humain. Si raj' au verset 11 signifie pluie, le lien avec le verset 8 est perdu. Si raj' signifie retour, les deux versets se repondent : le retour de l'etre humain (v8) est garanti par le retour du ciel (v11).",
        axe3_sourate: "La sourate est construite autour du retour (v8, v11). Traduire raj' par pluie au verset 11 affaiblit la structure thematique. Le retour est le fil conducteur.",
        axe4_coherence: "Le Coran utilise raj' au sens de retour dans de nombreux passages. Le sens de pluie est un derive specifique. Le retour est le sens premier et le plus large.",
        axe5_frequence: "La pluie est un phenomene, le retour est un principe. Le khalifa comprend les principes, pas seulement les phenomenes."
      },
      'Répétition': {
        senses: ['repeter', 'reponse'],
        status: 'nul',
        proof_ctx: "Le sens de repetition est trop restreint. Le retour est plus large que la simple repetition."
      }
    }
  }, 2);

  await upsertVA(5942, {
    translation_arab: "Par le ciel, celle qui possede le retour",
    full_translation: "Par le ciel qui envoie la pluie",
    segments: [
      { fr: "Par", pos: "PART", phon: "wa", arabic: "وَ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "le ciel", pos: "N", phon: "as-sama'i", arabic: "ٱلسَّمَآءِ", position: 2, word_key: "smw", is_particle: false, sense_retenu: "ciel" },
      { fr: "celle qui possede", pos: "N", phon: "dhati", arabic: "ذَاتِ", position: 3, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "le retour", pos: "N", phon: "ar-raj'i", arabic: "ٱلرَّجْعِ", position: 4, word_key: "rje", is_particle: false, sense_retenu: "retour" }
    ],
    translation_explanation: `§DEMARCHE§
Le verset ouvre un deuxieme serment dans la sourate. La particule **wa** suivie d'un nom au genitif forme un serment en arabe — « par le ciel ».

Le mot **as-sama'i** est un nom feminin defini au cas genitif. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-m-w designe ce qui est au-dessus, le ciel, la voute celeste.

Le mot **dhati** est un nom feminin au cas genitif, en accord avec as-sama'i (feminin). Dhati signifie « celle qui possede, celle qui est dotee de ». C'est une construction d'idafa (annexion) : dhati ar-raj'i = celle qui possede le retour.

Le mot **ar-raj'i** est un masdar (nom verbal, une forme qui transforme le verbe en nom — « le retour ») de la racine r-j-e, defini au cas genitif. D'apres les sources etymologiques, raj'a signifie retourner, revenir. Le masdar designe le processus de retour. Le ciel est celui d'ou les choses reviennent — la pluie monte par evaporation, se condense et redescend. Le Lane's donne egalement raj' comme la pluie elle-meme, parce qu'elle est ce qui revient.

§JUSTIFICATION§
**ciel** — Le sens retenu est « ciel ». C'est le sens direct de sama' dans un contexte de serment cosmique, le meme mot qu'au verset 1.

**retour** — Le sens retenu est « retour ». Ce mot est choisi car raj' est le masdar de raja'a (retourner). L'alternative « pluie » est ecartee car la pluie est le produit du retour, pas le retour lui-meme — dhati ar-raj'i decrit une propriete essentielle (la capacite de faire revenir), pas un contenu (la pluie). De plus, le meme mot raj' apparait au verset 8 pour le retour de l'etre humain, et garder « retour » aux deux endroits preserve le lien thematique.

§CRITIQUE§
**retour vs pluie** — Hamidullah traduit « le ciel qui envoie la pluie ». Cette traduction remplace raj' (retour) par « pluie », ce qui est une interpretation. Le Lane's donne bien raj' comme la pluie, mais c'est un sens derive — le sens premier est le retour. Traduire par « pluie » brise le lien avec le verset 8 (capable de le faire revenir) et reduit un principe cosmique (le retour) a un phenomene meteorologique (la pluie).`
  });

  console.log('VERSET 86:11 — TERMINÉ');
  console.log('  smw → Ciel/Ce qui couvre → "ciel"');
  console.log('  rje → Retour/Réversion → "retour"');

  // ========== VERSET 12 (5943) ==========
  // وَٱلْأَرْضِ ذَاتِ ٱلصَّدْعِ
  console.log('\n--- v12 (5943): wa-al-ardi dhati as-sad\'i ---');

  await upsertVWA(5943, 'ArD', 'terre', {
    sense_chosen: 'terre',
    concept_chosen: 'Terre/Sol',
    concepts: {
      'Terre/Sol': {
        senses: ['terre', 'sol', 'pays', 'terrain'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine a-r-d designe la terre, le sol, le territoire. Le mot al-ardi est un nom feminin defini au cas genitif, complement du serment wa. La terre est l'objet du serment, en parallele avec le ciel du verset 11. Le ciel (v11) possede le retour, la terre (v12) possede la fissure. La paire ciel-terre forme le diptique cosmique complet — le haut et le bas, ce qui envoie et ce qui recoit. Le sens de fertilite est un derive actif qui ne s'applique pas ici ou la terre est qualifiee par une propriete (la fissure), pas par une action.",
        axe1_verset: "Le mot al-ardi est un nom feminin defini au cas genitif, deuxieme element du serment (parallele a as-sama'i du verset 11). Le champ lexical est celui du serment cosmique — le ciel et la terre forment une paire. La terre est qualifiee par dhati as-sad'i (celle qui possede la fissure). La terre est le sol physique qui se fend pour laisser passer la vegetation.",
        axe2_voisins: "Le verset 11 jurait par le ciel du retour. Le verset 12 jure par la terre de la fissure. Les deux proprietes sont complementaires : le ciel fait revenir (la pluie), la terre se fend (pour les plantes). Le cycle pluie-germination est le modele du cycle mort-retour evoque au verset 8.",
        axe3_sourate: "La sourate 86 va du ciel (v1-3) a l'ame (v4) a la creation (v5-7) au retour (v8-10), puis revient au ciel et a la terre (v11-12) pour conclure. La terre est le pendant du ciel — ensemble ils forment la preuve naturelle de la parole tranchante (v13).",
        axe4_coherence: "Le Coran associe regulierement le ciel et la terre dans les serments. En 51:7 et 51:48, les deux sont mentionnes comme signes. La paire ciel-terre est un fondement cosmique recurrent.",
        axe5_frequence: "La terre est le lieu de la mission du khalifa. C'est sur la terre qu'il exerce la justice et la civilisation. La terre qui se fend pour laisser passer la vegetation est le modele de la terre qui recoit l'effort et produit des fruits."
      },
      'Fertilité/Production': {
        senses: ['etre fertile', 'produire de l herbage', 'collecter l humidite', 'chercher un paturage'],
        status: 'nul',
        proof_ctx: "Le sens de fertilite decrit un etat de la terre, pas un objet du serment. Ici la terre est l'objet du serment, qualifiee par sa propriete de fissure."
      },
      'Fixité/Attachement': {
        senses: ['rester au sol', 'attendre', 'etre humble'],
        status: 'nul',
        proof_ctx: "Le sens de fixite/humilite est metaphorique. Le contexte est un serment par la terre physique."
      },
      'Insecte/Vermissure': {
        senses: ['termite', 'bois ronge'],
        status: 'nul',
        proof_ctx: "Aucun rapport avec le serment cosmique."
      }
    }
  }, 1);

  await upsertVWA(5943, 'SdE', 'fissure', {
    sense_chosen: 'fissure',
    concept_chosen: 'Fissure/Fente',
    concepts: {
      'Fissure/Fente': {
        senses: ['fendre', 'fissurer', 'couper en deux', 'craquer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine s-d-e signifie fendre, fissurer, couper une chose dure. Le mot as-sad'i est un masdar defini au cas genitif, en idafa avec dhati (celle qui possede la fissure). La terre se fend pour laisser passer la vegetation et les sources. Le Lane's cite explicitement le Coran 86:12 : la terre qui se fend par les plantes et les sources. La fissure est le mecanisme de la germination — la graine pousse et la terre s'ouvre. Le sens de germination/emergence est tres proche mais il decrit le resultat (ce qui emerge), pas l'acte (la fente elle-meme). Le masdar sad' designe l'acte de se fendre, pas ce qui emerge.",
        axe1_verset: "Le mot as-sad'i est un masdar defini au cas genitif, complement de dhati. Le champ lexical est celui du sol qui s'ouvre — la fissure est la propriete de la terre qui permet l'emergence de la vegetation. La construction dhati as-sad'i est parallele a dhati ar-raj'i (v11) : le ciel possede le retour, la terre possede la fissure. Les deux masdar designent des proprietes permanentes, pas des evenements ponctuels.",
        axe2_voisins: "Le verset 11 qualifiait le ciel par le retour (la pluie revient). Le verset 12 qualifie la terre par la fissure (les plantes sortent). La sequence est logique : la pluie descend (v11), la terre se fend (v12), la vie emerge. Les versets 13-14 tireront la conclusion de ce diptique.",
        axe3_sourate: "La fissure de la terre complete le theme de l'emergence dans la sourate 86. L'astre perce l'obscurite (v3, racine th-q-b = percer), la terre se fend pour les plantes (v12, racine s-d-e = fendre). Les deux utilisent l'image de la penetration — la lumiere perce la nuit, la plante fend la terre. Rien ne reste ferme indefiniment.",
        axe4_coherence: "Le Coran mentionne la terre qui se fend dans d'autres passages. En 80:26, thumma shaqaqna al-arda shaqqa (puis nous avons fendu la terre de fissures). Le verbe shaqqa est un synonyme de sada'a. La terre qui se fend pour la germination est un signe coranique recurrent.",
        axe5_frequence: "La fissure est le mecanisme de la creation. Rien ne nait sans rupture — la graine fend la terre, le poussin fend l'oeuf. Le khalifa comprend que la creation de l'ordre et de la justice exige des ruptures avec le desordre."
      },
      'Germination/Émergence': {
        senses: ['plantes de la terre', 'aube'],
        status: 'probable',
        proof_ctx: "Le Lane's donne explicitement as-sad' comme les plantes qui emergent en fendant la terre. Ce sens est atteste pour ce verset coranique. La distinction avec le sens retenu est fine : « fissure » designe l'acte de se fendre (le processus), « germination » designe ce qui emerge (le resultat). Dhati as-sad'i decrit la propriete de la terre — cette propriete est de se fendre (processus), pas de faire germer (resultat). La terre se fend ; la germination est la consequence, pas la propriete.",
        axe1_verset: "Le mot as-sad'i dans dhati as-sad'i pourrait etre compris comme « les plantes de la terre ». Le champ lexical serait coherent : la terre est le lieu d'ou emergent les plantes. Mais dhati + masdar decrit une propriete, pas un contenu.",
        axe2_voisins: "Le verset 11 qualifiait le ciel par le retour (un processus), pas par la pluie (un produit). Par symetrie, le verset 12 qualifie la terre par la fissure (un processus), pas par la germination (un produit).",
        axe3_sourate: "La germination est le resultat de la fissure. Les deux sont lies, mais la sourate insiste sur les proprietes essentielles (le retour, la fissure), pas sur les produits.",
        axe4_coherence: "Le Coran utilise la racine s-d-e dans d'autres passages pour la fissure et l'emergence. Les deux sens coexistent dans la langue.",
        axe5_frequence: "La germination est le fruit de la fissure. Le khalifa comprend que le processus (la rupture) precede le resultat (la croissance)."
      },
      'Traversée/Passage': {
        senses: ['traverser', 'voyager de nuit', 'route qui traverse'],
        status: 'nul',
        proof_ctx: "Le sens de traversee s'applique a des personnes ou des routes, pas a une propriete de la terre dans un serment."
      },
      'Séparation/Dispersion': {
        senses: ['separer', 'disperser', 'groupe hostile'],
        status: 'nul',
        proof_ctx: "Le sens de dispersion est social. Le contexte est une propriete physique de la terre."
      }
    }
  }, 2);

  await upsertVA(5943, {
    translation_arab: "Et par la terre, celle qui possede la fissure",
    full_translation: "et par la terre qui se fend",
    segments: [
      { fr: "Et par", pos: "PART", phon: "wa", arabic: "وَ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "la terre", pos: "N", phon: "al-ardi", arabic: "ٱلْأَرْضِ", position: 2, word_key: "ArD", is_particle: false, sense_retenu: "terre" },
      { fr: "celle qui possede", pos: "N", phon: "dhati", arabic: "ذَاتِ", position: 3, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "la fissure", pos: "N", phon: "as-sad'i", arabic: "ٱلصَّدْعِ", position: 4, word_key: "SdE", is_particle: false, sense_retenu: "fissure" }
    ],
    translation_explanation: `§DEMARCHE§
Le verset 12 est le deuxieme element du serment commence au verset 11. La structure est identique : wa + nom au genitif + dhati + masdar au genitif.

Le mot **al-ardi** est un nom feminin defini au cas genitif. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine a-r-d designe la terre, le sol, le territoire. La terre est l'oppose du ciel — le bas par rapport au haut.

Le mot **dhati** est la meme construction qu'au verset 11 : « celle qui possede ». La terre possede la propriete de la fissure.

Le mot **as-sad'i** est un masdar (nom verbal) de la racine s-d-e, defini au cas genitif. D'apres les sources etymologiques, sada'a signifie fendre, fissurer, couper une chose dure. Le masdar sad' designe l'acte de se fendre. La terre se fend pour laisser passer la vegetation et les sources. Le Lane's cite ce verset sous ce sens : la terre qui se fend par les plantes et les sources.

La paire v11-v12 forme un diptique : le ciel possede le retour (la pluie revient), la terre possede la fissure (les plantes sortent). Le cycle est complet : le ciel envoie, la terre recoit et produit.

§JUSTIFICATION§
**terre** — Le sens retenu est « terre ». C'est le sens direct de ard dans un contexte de serment cosmique.

**fissure** — Le sens retenu est « fissure ». Ce mot est choisi car sad' est le masdar de sada'a (fendre). L'alternative « germination » est ecartee car la germination est le resultat de la fissure, pas la fissure elle-meme — dhati as-sad'i decrit la propriete de se fendre, pas ce qui emerge. L'alternative « fente » est tres proche mais « fissure » est plus courant en francais.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « la terre qui se fend ». Notre traduction preservee la structure dhati + masdar (« celle qui possede la fissure ») plutot que de transformer en proposition relative (« qui se fend »), mais le sens est le meme.`
  });

  console.log('VERSET 86:12 — TERMINÉ');
  console.log('  ArD → Terre/Sol → "terre"');
  console.log('  SdE → Fissure/Fente → "fissure"');

  // ========== VERSET 13 (5944) ==========
  // إِنَّهُۥ لَقَوْلٌ فَصْلٌ
  console.log('\n--- v13 (5944): innahu la-qawlun faslun ---');

  await upsertVWA(5944, 'qwl', 'parole', {
    sense_chosen: 'parole',
    concept_chosen: 'Parole/Énonciation',
    concepts: {
      'Parole/Énonciation': {
        senses: ['dire', 'parler', 'parole', 'discours', 'affirmer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine q-w-l designe la parole, le discours, l'enonciation. Le mot qawlun est un nom masculin indefini au cas nominatif, predicat de la phrase inna-hu. Le lam devant qawlun est le lam d'insistance (la-qawlun = c'est assurement une parole). Le pronom -hu (il, cela) renvoie au Coran ou au message qui precede. Le sens de pensee/avis est trop abstrait — le contexte parle d'une parole prononcee, pas d'une opinion. Le qawl fasl est une expression arabe attestee : une parole tranchante, qui separe le vrai du faux.",
        axe1_verset: "Le mot qawlun est un nom masculin indefini au cas nominatif, predicat de inna-hu. Le lam de tawkid (insistance) renforce l'affirmation : c'est assurement une parole. Le champ lexical est celui de l'affirmation solennelle — apres les deux serments (ciel v11, terre v12), la conclusion est enoncee : c'est une parole tranchante. Le verset est bref et percutant — quatre mots qui concentrent toute la force de l'affirmation.",
        axe2_voisins: "Les versets 11-12 formaient le serment. Le verset 13 est la conclusion du serment : c'est une parole tranchante. Le verset 14 completera : ce n'est pas une plaisanterie. La sequence v11-v14 est un argument complet : serment (v11-12) → affirmation (v13) → negation de la frivolite (v14).",
        axe3_sourate: "La sourate 86 culmine au verset 13. Tout ce qui precede — l'astre percant, la surveillance, la creation, le retour, le ciel et la terre — converge vers cette affirmation : c'est une parole tranchante. Le Coran se decrit comme une parole qui separe.",
        axe4_coherence: "Le Coran utilise qawl fasl dans d'autres passages. En 37:21, hadha yawmu al-fasli (c'est le jour de la separation). En 42:21, wa-al-qawlu al-faslu (la parole tranchante). Le qawl fasl est une parole definitive, sans ambiguite.",
        axe5_frequence: "La parole tranchante est l'instrument du khalifa. La justice exige des paroles claires qui separent le vrai du faux. Une parole qui ne tranche pas laisse la confusion — et la confusion engendre l'injustice."
      },
      'Pensée/Avis': {
        senses: ['opinion', 'avis', 'doctrine'],
        status: 'nul',
        proof_ctx: "Le sens d'opinion est trop subjectif. Le verset decrit une parole prononcee, pas une pensee. L'expression qawl fasl designe une parole qui tranche, pas une opinion."
      }
    }
  }, 1);

  await upsertVWA(5944, 'fSl', 'tranchante', {
    sense_chosen: 'tranchante',
    concept_chosen: 'Jugement/Décision',
    concepts: {
      'Séparation/Distinction': {
        senses: ['separer', 'diviser', 'distinguer'],
        status: 'probable',
        proof_ctx: "Le sens de separation physique est le sens premier de la racine. Mais dans l'expression qawl fasl, la separation s'applique au domaine du jugement — la parole separe le vrai du faux. La distinction avec le sens retenu (Jugement/Decision) est celle entre le mecanisme (separer) et son application (trancher un litige). Le mot faslun qualifie qawlun : c'est une parole qui separe — mais qui separe dans le sens de trancher, decider, pas dans le sens physique de diviser en deux morceaux.",
        axe1_verset: "Le mot faslun est un nom masculin indefini au cas nominatif, en apposition avec qawlun (parole tranchante). Le sens de separation ferait de faslun une parole qui divise, qui coupe. Le champ lexical (parole + serment solennel) oriente vers la separation intellectuelle, pas physique.",
        axe2_voisins: "Le verset 14 dira : ce n'est pas une plaisanterie. Le contraste est entre la parole serieuse (fasl) et la plaisanterie (hazl). Le sens de separation s'inscrit bien dans ce contraste — mais c'est la separation entre vrai et faux, pas une separation physique.",
        axe3_sourate: "La sourate aboutit a la qualification de la parole. Le sens de separation physique serait deplace dans ce contexte de qualification du discours.",
        axe4_coherence: "Le Coran utilise fasl dans le sens de jugement. En 37:21, yawmu al-fasli est le jour du jugement qui separe les justes des injustes.",
        axe5_frequence: "La separation entre vrai et faux est un acte de justice. Mais le sens de jugement est plus precis que celui de separation."
      },
      'Jugement/Décision': {
        senses: ['trancher un litige', 'decider', 'parole claire'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine f-s-l signifie separer, diviser. Le Lane's donne explicitement qawl fasl comme une parole qui tranche les litiges, qui separe le vrai du faux sans ambiguite — le contraire du hazl (plaisanterie). Le mot faslun est un nom masculin indefini au cas nominatif, en apposition avec qawlun. La construction qawlun faslun est un nom + adjectif : une parole tranchante. Le sens retenu est celui du jugement/decision car dans l'expression qawl fasl, la separation s'applique au discours — trancher c'est separer le vrai du faux par la parole. Le sens de sevrage et de division en portions est hors contexte. La distinction avec le sens de separation est la suivante : la separation est le mecanisme physique, le jugement est son application au discours et a la verite. Fasl qualifiant qawl (parole) designe forcement un jugement discursif, pas une division physique.",
        axe1_verset: "Le mot faslun est un nom en apposition avec qawlun. La construction nom + nom en apposition (qawlun faslun) est une qualification : une parole qui est un jugement. Le champ lexical est celui de l'affirmation solennelle et de la decision — c'est une parole definitive, sans appel, qui met fin a l'ambiguite. Le lam de tawkid devant qawlun renforce cette gravite.",
        axe2_voisins: "Le verset 14 oppose fasl a hazl (plaisanterie). Le contraste est entre la parole serieuse qui tranche et la parole legere qui n'engage pas. Fasl est le contraire de hazl — le serieux absolu oppose a la frivolite. Ce contraste confirme que fasl designe la qualite de la parole (tranchante vs frivole), pas une action physique.",
        axe3_sourate: "La sourate 86 se conclut par trois affirmations : c'est une parole tranchante (v13), ce n'est pas une plaisanterie (v14), et un avertissement (v15-17). Le jugement est le couronnement de toute la sourate — la surveillance (v4), le retour (v8), le ciel et la terre (v11-12) menent a cette conclusion.",
        axe4_coherence: "Le Coran utilise yawmu al-fasli (le jour de la separation/du jugement) dans plusieurs passages. En 77:13-14, li-yawmi al-fasli wa-ma adraka ma yawmu al-fasli. En 37:21, hadha yawmu al-fasli. La racine f-s-l est systematiquement associee au jugement definitif.",
        axe5_frequence: "La parole tranchante est l'instrument premier de la justice. Le khalifa tranche entre le vrai et le faux — c'est son role fondamental. Une parole qui ne tranche pas est une plaisanterie (hazl). La mission de justice exige des paroles claires et definitives."
      },
      'Sevrage/Départ': {
        senses: ['sevrer', 'partir', 'transplanter', 'jeune chameau sevre'],
        status: 'nul',
        proof_ctx: "Le sens de sevrage n'a aucun rapport avec une parole tranchante."
      },
      'Division/Portion': {
        senses: ['saison', 'chapitre', 'articulation', 'branche de parente'],
        status: 'nul',
        proof_ctx: "Le sens de division en portions (saison, chapitre) ne s'applique pas a la qualification d'une parole."
      }
    }
  }, 2);

  await upsertVA(5944, {
    translation_arab: "C'est assurement une parole tranchante",
    full_translation: "Ceci est certes une parole décisive",
    segments: [
      { fr: "C'est assurement", pos: "PART", phon: "innahu la-", arabic: "إِنَّهُۥ لَ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "une parole", pos: "N", phon: "qawlun", arabic: "قَوْلٌ", position: 2, word_key: "qwl", is_particle: false, sense_retenu: "parole" },
      { fr: "tranchante", pos: "N", phon: "faslun", arabic: "فَصْلٌ", position: 3, word_key: "fSl", is_particle: false, sense_retenu: "tranchante" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **inna** + le pronom **-hu** (il, cela) ouvre une phrase emphatique. Le pronom renvoie au Coran ou au message dont la sourate traite. Le **lam** devant qawlun est le lam de tawkid (insistance) — « c'est assurement ». La combinaison inna...la- est la formule d'affirmation la plus forte en arabe.

Le mot **qawlun** est un nom masculin indefini au cas nominatif, predicat de inna-hu. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine q-w-l designe la parole, le discours, l'enonciation. Un qawl est une parole prononcee — un enonce qui porte un sens.

Le mot **faslun** est un nom masculin indefini au cas nominatif, en apposition avec qawlun (ou qualificatif). D'apres les sources etymologiques, la racine f-s-l signifie separer, diviser, trancher. Le Lane's donne qawl fasl comme une parole qui tranche entre le vrai et le faux, qui ne laisse pas de place a l'ambiguite. C'est le contraire du hazl (la plaisanterie, le non-serieux) — opposition qui sera explicitee au verset 14.

§JUSTIFICATION§
**parole** — Le sens retenu est « parole ». C'est le sens direct de qawl. L'alternative « discours » est ecartee car discours implique une longueur, tandis que parole peut etre breve et percutante.

**tranchante** — Le sens retenu est « tranchante ». Ce mot est choisi car fasl qualifie la parole comme quelque chose qui separe le vrai du faux — qui tranche. L'alternative « decisive » est ecartee car « decisive » met l'accent sur le resultat (la decision), tandis que « tranchante » met l'accent sur l'acte (couper entre vrai et faux). L'alternative « distinctive » est ecartee car elle est trop technique.

§CRITIQUE§
**tranchante vs decisive** — Hamidullah traduit « parole decisive ». Les deux mots sont proches. « Decisive » met l'accent sur l'aboutissement d'un processus, « tranchante » sur l'acte de separation. L'etymologie de f-s-l (separer, fendre) est mieux rendue par « tranchante » qui preserve l'image physique de la coupure. Mais la difference est mineure — les deux traductions donnent sensiblement le meme sens.`
  });

  console.log('VERSET 86:13 — TERMINÉ');
  console.log('  qwl → Parole/Énonciation → "parole"');
  console.log('  fSl → Jugement/Décision → "tranchante"');

  // ========== VERSET 14 (5945) ==========
  // وَمَا هُوَ بِٱلْهَزْلِ
  console.log('\n--- v14 (5945): wa-ma huwa bi-al-hazli ---');

  await upsertVWA(5945, 'hzl', 'plaisanterie', {
    sense_chosen: 'plaisanterie',
    concept_chosen: 'Plaisanterie/Frivolité',
    concepts: {
      'Plaisanterie/Frivolité': {
        senses: ['plaisanter', 'ne pas etre serieux'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine h-z-l signifie plaisanter, ne pas etre serieux. Le Lane's donne : le contraire du serieux (jidd). Le mot al-hazli est un masdar defini au cas genitif (apres la preposition bi). La structure ma huwa bi-al-hazli est une negation emphatique : « il n'est pas une plaisanterie ». Le hazl est l'oppose du fasl (v13) — la parole legere qui n'engage pas, qui ne tranche rien. Le sens de maigreur est un derive physique qui ne s'applique pas dans ce contexte de qualification d'une parole.",
        axe1_verset: "Le mot al-hazli est un masdar defini au cas genitif, complement de la preposition bi. La structure ma...bi est une negation emphatique en arabe : il n'est absolument pas une plaisanterie. Le champ lexical est celui de l'opposition fasl/hazl — le serieux tranchant (v13) versus la frivolite (v14). La negation renforce par contraste l'affirmation du verset 13.",
        axe2_voisins: "Le verset 13 affirmait : c'est une parole tranchante. Le verset 14 nie le contraire : ce n'est pas une plaisanterie. L'affirmation suivie de la negation du contraire est un procede rhetorique qui ne laisse aucune echappatoire — c'est serieux ET ce n'est pas une blague. Les versets 15-17 montreront les consequences : les adversaires rusent, mais Dieu agit.",
        axe3_sourate: "La negation de la plaisanterie est le dernier mot de l'argument de la sourate 86. Apres l'astre percant, la surveillance, la creation, le retour, le serment par le ciel et la terre, et l'affirmation de la parole tranchante — le texte conclut en eliminant toute possibilite de frivolite. La gravite est totale.",
        axe4_coherence: "Le Coran utilise le contraste serieux/plaisanterie dans d'autres passages. En 21:55, a bi-al-haqqi ji'tana am anta mina al-la'ibina (nous apportes-tu la verite ou es-tu de ceux qui jouent ?). Le texte se defend regulierement contre l'accusation de frivolite.",
        axe5_frequence: "La negation de la plaisanterie est un rappel au khalifa : la mission est serieuse. La justice ne tolere pas la frivolite. La parole du Coran est tranchante — elle exige une reponse serieuse, pas un haussement d'epaules."
      },
      'Maigreur/Émaciation': {
        senses: ['etre maigre', 'emacier'],
        status: 'nul',
        proof_ctx: "Le sens de maigreur est physique. Le contexte est la qualification d'une parole (v13-14), pas un etat corporel."
      }
    }
  }, 1);

  await upsertVA(5945, {
    translation_arab: "Et ce n'est pas une plaisanterie",
    full_translation: "et ce n'est pas une plaisanterie",
    segments: [
      { fr: "Et", pos: "CONJ", phon: "wa", arabic: "وَ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "ce n'est pas", pos: "PART", phon: "ma huwa bi", arabic: "مَا هُوَ بِ", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "une plaisanterie", pos: "N", phon: "al-hazli", arabic: "ٱلْهَزْلِ", position: 3, word_key: "hzl", is_particle: false, sense_retenu: "plaisanterie" }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) lie ce verset au verset 13 — les deux forment une seule affirmation en deux temps.

La structure **ma huwa bi** est une negation emphatique. **Ma** est la particule de negation, **huwa** (il, cela) est le pronom qui renvoie au meme referent que le verset 13, et **bi** est une preposition qui renforce la negation (en arabe, la preposition bi devant le predicat dans une negation par ma est un renforcement — « il n'est absolument pas »).

Le mot **al-hazli** est un masdar (nom verbal) de la racine h-z-l, defini au cas genitif (apres bi). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), hazala signifie plaisanter, ne pas etre serieux — c'est le contraire du jidd (le serieux). Le hazl est la parole qui n'engage pas, qui n'a pas de poids, qui ne tranche rien.

Les versets 13-14 forment une paire : affirmation positive (c'est une parole tranchante) + negation du contraire (ce n'est pas une plaisanterie). Ce procede ne laisse aucune ambiguite.

§JUSTIFICATION§
**plaisanterie** — Le sens retenu est « plaisanterie ». Ce mot est choisi car hazl designe le non-serieux, la parole legere. L'alternative « blague » est ecartee car elle est trop familiere. L'alternative « badinerie » est ecartee car elle est trop litteraire. « Plaisanterie » est le mot le plus courant et le plus juste en francais.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « ce n'est pas une plaisanterie ». La traduction est identique.`
  });

  console.log('VERSET 86:14 — TERMINÉ');
  console.log('  hzl → Plaisanterie/Frivolité → "plaisanterie"');

  // ========== VERSET 15 (5946) ==========
  // إِنَّهُمْ يَكِيدُونَ كَيْدًا
  console.log('\n--- v15 (5946): innahum yakiduna kaydan ---');

  await upsertVWA(5946, 'kyd', 'ruse', {
    sense_chosen: 'ruse',
    concept_chosen: 'Ruse/Stratagème',
    concepts: {
      'Ruse/Stratagème': {
        senses: ['ruser', 'comploter', 'stratageme'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine k-y-d signifie ruser, comploter, tramer un stratageme. Le verbe yakiduna est a l'inaccompli (une forme qui indique une action en cours ou habituelle). Le sujet est -hum (ils), qui renvoie aux adversaires mentionnes implicitement. Le complement kaydan est un masdar en objet absolu (maf'ul mutlaq) qui renforce le verbe : ils rusent une ruse, ils trament un stratageme. L'inaccompli indique que la ruse est en cours, pas ponctuelle — c'est un etat permanent d'hostilite. Il n'y a qu'un seul groupe de sens pour cette racine.",
        axe1_verset: "Le verbe yakiduna est a l'inaccompli, 3e personne du pluriel, de la racine k-y-d. Le complement kaydan est un objet absolu (maf'ul mutlaq) — une construction arabe qui repete le verbe sous forme nominale pour l'intensifier : « ils rusent une ruse ». Le champ lexical est celui de la conspiration — les adversaires trament en secret contre le message. Le passage du discours cosmique (v11-14) aux adversaires (v15) marque un changement de ton.",
        axe2_voisins: "Le verset 14 disait : ce n'est pas une plaisanterie. Le verset 15 enchaine : eux, ils rusent. Le contraste est entre la gravite du message (v13-14) et la legerete des adversaires qui pensent pouvoir le contourner par la ruse. Le verset 16 repondra : et je ruse aussi. La sequence v15-v16 oppose deux ruses.",
        axe3_sourate: "Les adversaires du message apparaissent a la fin de la sourate. Apres l'argumentation cosmique (v1-14), la sourate se tourne vers ceux qui refusent de prendre le message au serieux. La ruse est leur reponse a la parole tranchante — au lieu d'y repondre, ils trament.",
        axe4_coherence: "Le Coran utilise la racine k-y-d dans de nombreux passages. En 12:5, inna ash-shaytana li-al-insani aduwwun mubinun (le diable est un ennemi declare de l'etre humain). En 86:16, wa-akidu kaydan (et je ruse une ruse). La ruse est un theme coranique recurrent — la ruse des adversaires est toujours surpassee par la ruse divine.",
        axe5_frequence: "La ruse des adversaires est un obstacle a la mission du khalifa. Mais le texte montre que cette ruse est derisoire face a la ruse divine (v16). Le khalifa ne doit pas craindre les complots — il doit perseverer dans la justice en sachant que la verite l'emporte."
      }
    }
  }, 1);

  await upsertVA(5946, {
    translation_arab: "Ils trament une ruse",
    full_translation: "Ils rusent d'une ruse",
    segments: [
      { fr: "Certes ils", pos: "PART", phon: "innahum", arabic: "إِنَّهُمْ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "trament", pos: "V", phon: "yakiduna", arabic: "يَكِيدُونَ", position: 2, word_key: "kyd", is_particle: false, sense_retenu: "ruse" },
      { fr: "une ruse", pos: "N", phon: "kaydan", arabic: "كَيْدًا", position: 3, word_key: "kyd", is_particle: false, sense_retenu: "ruse" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **inna** + le pronom **-hum** (ils) ouvre une phrase emphatique : « certes ils ». Le pronom renvoie aux adversaires du message — ceux qui refusent la parole tranchante des versets 13-14. Le texte ne nomme pas ces adversaires — il les designe par un pronom.

Le verbe **yakiduna** est a l'inaccompli (une forme qui indique une action en cours, continue ou habituelle) de la racine k-y-d. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), kada signifie ruser, comploter, tramer un stratageme en secret. L'inaccompli indique que la ruse est en cours — ce n'est pas un evenement passe, c'est une activite continue.

Le mot **kaydan** est un masdar (nom verbal) au cas accusatif, utilise comme objet absolu (maf'ul mutlaq, une construction arabe qui repete le verbe sous forme nominale pour l'intensifier). La construction yakiduna kaydan signifie litteralement « ils rusent une ruse » — la repetition donne de l'emphase.

§JUSTIFICATION§
**trament** — Le sens retenu est « tramer ». Ce mot est choisi car il combine l'idee de ruse et de complot en secret. L'alternative « complotent » est ecartee car elle est plus lourde. L'alternative « rusent » est possible mais « tramer » ajoute l'idee du travail en coulisse.

**ruse** — C'est le masdar direct de la racine k-y-d. Pas d'alternative necessaire.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « ils rusent d'une ruse ». La traduction est tres proche.`
  });

  console.log('VERSET 86:15 — TERMINÉ');
  console.log('  kyd → Ruse/Stratagème → "ruse"');

  // ========== VERSET 16 (5947) ==========
  // وَأَكِيدُ كَيْدًا
  console.log('\n--- v16 (5947): wa-akidu kaydan ---');

  await upsertVWA(5947, 'kyd', 'ruse', {
    sense_chosen: 'ruse',
    concept_chosen: 'Ruse/Stratagème',
    concepts: {
      'Ruse/Stratagème': {
        senses: ['ruser', 'comploter', 'stratageme'],
        status: 'retenu',
        proof_ctx: "Meme racine que le verset 15 mais le sujet change : c'est Dieu qui parle a la premiere personne (akidu = je ruse/j'agis). Le verbe akidu est a l'inaccompli, 1ere personne du singulier. Le parallele yakiduna/akidu (ils rusent/je ruse) est delibere — il oppose la ruse des adversaires a l'action divine. Le meme mot est utilise pour les deux, mais la realite est differente : la ruse humaine est limitee et faillible, l'action divine est souveraine et infaillible. Le texte ne precise pas la nature de cette « ruse » divine — il dit simplement : eux aussi agissent, et moi aussi j'agis.",
        axe1_verset: "Le verbe akidu est a l'inaccompli, 1ere personne du singulier. Le complement kaydan est le meme objet absolu qu'au verset 15. Le parallelisme entre yakiduna kaydan (v15) et akidu kaydan (v16) est le coeur rhetorique du passage. Le changement de sujet (ils → je) renverse la situation : la ruse des adversaires est derisoire face a l'action divine.",
        axe2_voisins: "Le verset 15 decrivait la ruse des adversaires. Le verset 16 repond par l'action divine. Le verset 17 tirera la conclusion : accorde-leur un delai, un court repit. La sequence v15-v17 est : ils trament → je trame aussi → laisse-les un peu.",
        axe3_sourate: "La sourate 86 se termine par une confrontation entre la ruse humaine et l'action divine. Apres l'argumentation cosmique et la parole tranchante, le texte montre que les adversaires ne peuvent rien contre la verite — leur ruse est surpassee.",
        axe4_coherence: "Le Coran utilise cette opposition dans d'autres passages. En 3:54, wa-makaru wa-makara allahu wa-allahu khayru al-makirina (ils ont ruse et Dieu a ruse, et Dieu est le meilleur des ruseurs). En 8:30, meme structure. Le texte utilise le meme mot pour les deux parties pour montrer la superiorite divine.",
        axe5_frequence: "L'action divine garantit que la ruse des adversaires est vaine. Le khalifa agit avec confiance, sachant que l'ordre divin surpasse tous les complots. La justice finit toujours par triompher — le temps joue en sa faveur."
      }
    }
  }, 1);

  await upsertVA(5947, {
    translation_arab: "Et je trame une action",
    full_translation: "et Moi aussi Je ruse d'une ruse",
    segments: [
      { fr: "Et", pos: "CONJ", phon: "wa", arabic: "وَ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "je trame", pos: "V", phon: "akidu", arabic: "أَكِيدُ", position: 2, word_key: "kyd", is_particle: false, sense_retenu: "ruse" },
      { fr: "une action", pos: "N", phon: "kaydan", arabic: "كَيْدًا", position: 3, word_key: "kyd", is_particle: false, sense_retenu: "ruse" }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) lie ce verset au verset 15.

Le verbe **akidu** est a l'inaccompli (une forme qui indique une action en cours) de la racine k-y-d, 1ere personne du singulier. Le sujet est Dieu — c'est un discours divin direct. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), kada signifie ruser, comploter, agir en secret. Le meme verbe et la meme racine sont utilises au verset 15 pour les adversaires (yakiduna) et au verset 16 pour Dieu (akidu). Ce parallelisme est delibere.

Le mot **kaydan** est le meme objet absolu qu'au verset 15. La structure akidu kaydan est le miroir de yakiduna kaydan.

Le texte ne precise pas la nature de cette action divine — il dit simplement que Dieu agit aussi, et que son action surpasse celle des adversaires.

§JUSTIFICATION§
**trame** — Le sens retenu est « tramer ». Le meme verbe est utilise pour la coherence avec le verset 15. L'alternative « ruse » est possible mais « tramer » a ete choisi au verset 15 et la coherence impose le meme mot.

**action** — Le masdar kaydan est traduit « action » plutot que « ruse » pour eviter d'attribuer la ruse a Dieu. Le texte utilise le meme mot pour les deux parties, mais la traduction peut nuancer : les adversaires « trament une ruse », Dieu « trame une action ». Le texte arabe utilise le meme mot — le lecteur comprendra la nuance par le contexte.

§CRITIQUE§
**action vs ruse** — Hamidullah traduit « Moi aussi Je ruse d'une ruse ». Notre traduction dit « je trame une action » pour eviter d'attribuer explicitement la ruse a Dieu, tout en preservant le parallelisme. Le texte arabe utilise le meme mot (kayd) pour les deux — c'est un procede rhetorique qui montre la superiorite divine en utilisant les memes termes que les adversaires. La nuance est delicate : le texte ne dit pas que Dieu ruse au meme titre que les humains, mais qu'il agit dans le meme registre et les surpasse.`
  });

  console.log('VERSET 86:16 — TERMINÉ');
  console.log('  kyd → Ruse/Stratagème → "ruse"');

  // ========== VERSET 17 (5948) ==========
  // فَمَهِّلِ ٱلْكَـٰفِرِينَ أَمْهِلْهُمْ رُوَيْدًۢا
  console.log('\n--- v17 (5948): fa-mahhili al-kafirina amhilhum ruwaydan ---');

  await upsertVWA(5948, 'mhl', 'delai', {
    sense_chosen: 'delai',
    concept_chosen: 'Délai/Sursis',
    concepts: {
      'Délai/Sursis': {
        senses: ['accorder un delai', 'reporter'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine m-h-l signifie accorder un delai, reporter, donner du temps. Le verbe mahhil est a l'imperatif forme II (une forme intensive qui ajoute de l'emphase — accorde-leur un vrai delai). Le verbe amhil est a l'imperatif forme IV (une forme qui signifie « faire faire » — fais-les attendre). Les deux imperatifs se renforcent mutuellement : accorde-leur un delai, fais-les attendre. L'imperatif est adresse au Prophete — c'est un ordre de patience. Le delai n'est pas une faveur faite aux adversaires, c'est un sursis avant la consequence.",
        axe1_verset: "Le verbe mahhili est a l'imperatif forme II de la racine m-h-l. Le complement est al-kafirina (ceux qui couvrent/rejettent). Le deuxieme verbe amhilhum est a l'imperatif forme IV avec le pronom -hum (eux). Le mot ruwaydan est un diminutif de rawd (douceur, lenteur) utilise comme adverbe — « un petit peu, doucement, lentement ». Le champ lexical est celui de la patience et du sursis — accorder un delai bref aux adversaires.",
        axe2_voisins: "Le verset 15 montrait la ruse des adversaires. Le verset 16 montrait l'action divine. Le verset 17 conclut : laisse-les un peu. La sequence dit : ils rusent, je trame aussi, alors laisse-les — leur delai est court. Le ruwaydan (un petit peu) minimise le sursis : ce n'est pas un long repit, c'est un court moment.",
        axe3_sourate: "La sourate 86 se termine par un ordre de patience. L'ensemble de la sourate — l'astre percant, la surveillance, la creation, le retour, la parole tranchante — culmine dans ce message : laisse-les, leur temps est compte. La patience est la conclusion logique de la certitude : celui qui sait que la parole est tranchante (v13) peut se permettre d'attendre.",
        axe4_coherence: "Le Coran utilise la racine m-h-l dans d'autres passages avec le meme sens de sursis. En 73:11, wa-mahilhum qalilan (et accorde-leur un court delai). En 86:17, la formule est tres proche. Le sursis coranique est toujours bref — il n'est pas une grace, c'est un compte a rebours.",
        axe5_frequence: "La patience est la vertu du khalifa. Accorder un delai aux adversaires n'est pas de la faiblesse — c'est la confiance en la justice du temps. Le khalifa ne panique pas face aux complots. Il sait que le delai est court et que la verite finit par triompher."
      }
    }
  }, 1);

  await upsertVWA(5948, 'kfr', 'ceux qui couvrent', {
    sense_chosen: 'ceux qui couvrent',
    concept_chosen: 'Couverture/Dissimulation',
    concepts: {
      'Couverture/Dissimulation': {
        senses: ['couvrir', 'cacher', 'la nuit qui couvre'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine k-f-r signifie couvrir, cacher, dissimuler. Le Lane's donne : couvrir une chose pour la cacher. Le mot al-kafirina est un participe actif pluriel defini au cas accusatif (complement de mahhil). Le participe actif designe ceux qui FONT l'action de couvrir — ceux qui couvrent, dissimulent, recouvrent la verite. C'est le sens etymologique premier de la racine. Le sens de rejet/ingratitude est une extension metaphorique : celui qui couvre la verite la rejette. Le sens de couverture est plus large et plus fidele a l'etymologie — il inclut le rejet comme une de ses manifestations sans s'y limiter.",
        axe1_verset: "Le mot al-kafirina est un participe actif pluriel masculin defini au cas accusatif, complement direct de mahhil. Le champ lexical est celui de l'opposition a la verite — ceux qui couvrent sont ceux qui refusent la parole tranchante (v13). Le participe actif avec l'article al- et le pluriel designent une categorie connue de personnes. Le texte ne les nomme pas par un autre attribut — il les designe par leur acte fondamental : couvrir.",
        axe2_voisins: "Le verset 15 les decrivait comme ceux qui trament une ruse. Le verset 17 les designe comme ceux qui couvrent. Les deux qualificatifs se completent : ils couvrent la verite ET ils rusent pour la contourner. Le delai qui leur est accorde est un sursis avant que leurs actions ne les rattrapent.",
        axe3_sourate: "La sourate 86 met en evidence la tension entre la verite qui perce (l'astre percant v3, la parole tranchante v13) et ceux qui couvrent (al-kafirina v17). L'astre perce l'obscurite, la parole tranche entre le vrai et le faux — mais ceux qui couvrent tentent de recouvrir ce qui a ete devoile.",
        axe4_coherence: "Le Coran utilise le participe actif kafir (celui qui couvre) dans des centaines de passages. Le sens etymologique de couverture est le sens premier — le Lane's donne d'abord « couvrir une chose » puis les sens derives. En 57:20, ka-matalhi ghaythin a'jaba al-kuffara nabatuhu (comme une pluie dont la vegetation plait aux cultivateurs) — ici kuffar signifie cultivateurs (ceux qui couvrent la graine de terre). Cela confirme que le sens premier est couvrir.",
        axe5_frequence: "Ceux qui couvrent la verite sont les adversaires de la mission du khalifa. Le khalifa sait que la verite finit par percer toute couverture — l'astre percant (v3) et la parole tranchante (v13) sont les instruments de ce devoilement. La patience (v17) est la reponse a ceux qui tentent de recouvrir la verite."
      },
      'Rejet/Ingratitude': {
        senses: ['nier', 'etre ingrat', 'renier un bienfait', 'rejeter', 'mecreant'],
        status: 'probable',
        proof_ctx: "Le sens de rejet/ingratitude est une extension metaphorique tres courante de la racine k-f-r. Celui qui couvre la verite la rejette — les deux sens sont lies. La distinction philosophique est la suivante : « couvrir » est un acte physique qui decrit ce que fait la personne (elle dissimule, elle cache) ; « rejeter » est un etat mental (elle refuse). L'acte de couvrir est plus fidele a l'etymologie et plus concret — on voit ce que fait la personne, on ne juge pas son etat mental. De plus, « rejeter » implique un jugement sur la verite (on sait qu'elle est vraie et on la refuse), tandis que « couvrir » decrit simplement l'acte sans presumer de l'intention.",
        axe1_verset: "Le mot al-kafirina au sens de « ceux qui rejettent » serait coherent : ils rejettent la parole tranchante. Le champ lexical (parole tranchante, plaisanterie, ruse) s'accorde avec l'idee de rejet.",
        axe2_voisins: "Le rejet est compatible avec les versets precedents — ceux qui refusent le message et trament contre lui. Mais le sens de couverture est plus riche : ils ne se contentent pas de rejeter, ils recouvrent, ils dissimulent.",
        axe3_sourate: "La sourate oppose la lumiere qui perce (v3) et la parole qui tranche (v13) a ceux qui couvrent (v17). Le sens de couverture s'oppose directement a celui de percement — couvrir est l'inverse de percer.",
        axe4_coherence: "Le Coran utilise kfr dans les deux sens. Le sens de rejet est le plus courant dans les traductions, mais le sens de couverture est le plus fidele a l'etymologie.",
        axe5_frequence: "Le rejet est un acte ponctuel. La couverture est un etat continu. Le participe actif (celui qui couvre) indique une action continue, pas un acte ponctuel."
      },
      'Expiation/Réparation': {
        senses: ['expier', 'effacer les peches'],
        status: 'nul',
        proof_ctx: "Le sens d'expiation n'est pas pertinent dans ce contexte d'adversaires qui trament une ruse."
      }
    }
  }, 2);

  await upsertVWA(5948, 'rwd', 'un peu', {
    sense_chosen: 'un peu',
    concept_chosen: 'Douceur/Lenteur',
    concepts: {
      'Douceur/Lenteur': {
        senses: ['agir doucement'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine r-w-d porte le sens de douceur, lenteur. Le mot ruwaydan est un diminutif (la forme fu'ayl est un schema de diminutif en arabe) utilise comme adverbe — « un petit peu, doucement, lentement ». C'est le diminutif de rawd. Le diminutif reduit la quantite ou l'intensite — ruwaydan signifie « un tout petit delai, un court moment ». Le sens de mouvement/recherche ne s'applique pas ici ou le mot est un adverbe de quantite, pas un verbe d'action.",
        axe1_verset: "Le mot ruwaydan est un adverbe au cas accusatif, modifiant le verbe amhilhum. Le champ lexical est celui du sursis bref — le diminutif reduit le delai au minimum. Le verset ne dit pas « laisse-les longtemps » mais « laisse-les un tout petit peu ». La brievete du sursis est le message essentiel — le temps des adversaires est presque ecoule.",
        axe2_voisins: "Le verset 16 montrait l'action divine. Le verset 17 conclut par un ordre de patience breve. Le ruwaydan (diminutif) minimise le sursis : ce n'est pas une longue attente, c'est un moment fugace. La sourate se termine sur cette note de certitude imminente.",
        axe3_sourate: "La sourate 86 se termine sur le mot ruwaydan — un petit peu. C'est le dernier mot de la sourate, et il porte tout le message : le sursis est bref, la conclusion est proche. La sourate va du cosmique (v1-3) a l'imminent (ruwaydan).",
        axe4_coherence: "Le Coran utilise ruwaydan dans un autre passage. En 73:11, wa-mahilhum qalilan (accorde-leur un court delai). La formule est tres proche de 86:17. Le sursis coranique est toujours court — le Coran ne parle jamais de longs delais pour les adversaires.",
        axe5_frequence: "Le court sursis est un rappel que le temps joue en faveur de la verite. Le khalifa n'a pas besoin de se presser ni de paniquer — un petit delai suffit pour que la verite eclate. La patience est la vertu de celui qui sait que le temps est de son cote."
      },
      'Mouvement/Recherche': {
        senses: ['aller et venir', 'chercher a convaincre', 'desirer'],
        status: 'nul',
        proof_ctx: "Le sens de mouvement/recherche s'applique au verbe rawada, pas au diminutif adverbial ruwaydan utilise ici."
      }
    }
  }, 3);

  await upsertVA(5948, {
    translation_arab: "Alors accorde un delai a ceux qui couvrent, accorde-leur un court repit",
    full_translation: "Laisse donc les mécréants, accorde-leur un court répit",
    segments: [
      { fr: "Alors", pos: "PART", phon: "fa", arabic: "فَ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "accorde un delai (a)", pos: "V", phon: "mahhili", arabic: "مَهِّلِ", position: 2, word_key: "mhl", is_particle: false, sense_retenu: "delai" },
      { fr: "ceux qui couvrent", pos: "N", phon: "al-kafirina", arabic: "ٱلْكَـٰفِرِينَ", position: 3, word_key: "kfr", is_particle: false, sense_retenu: "ceux qui couvrent" },
      { fr: "accorde-leur un repit", pos: "V", phon: "amhilhum", arabic: "أَمْهِلْهُمْ", position: 4, word_key: "mhl", is_particle: false, sense_retenu: "delai" },
      { fr: "un court moment", pos: "ADV", phon: "ruwaydan", arabic: "رُوَيْدًۢا", position: 5, word_key: "rwd", is_particle: false, sense_retenu: "un peu" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **fa** (alors, donc) tire la conclusion de ce qui precede — puisqu'ils rusent et que Dieu agit aussi, alors accorde-leur un delai.

Le verbe **mahhili** est a l'imperatif forme II (une forme intensive, qui ajoute de l'emphase) de la racine m-h-l. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), mahhala signifie accorder un delai, donner du temps. La forme II (avec le doublement de la deuxieme lettre) intensifie le sens — « accorde-leur un vrai delai ». L'imperatif est adresse au Prophete.

Le mot **al-kafirina** est un participe actif pluriel (une forme qui designe ceux qui FONT l'action activement) de la racine k-f-r, defini au cas accusatif (complement de mahhil). D'apres les sources etymologiques, la racine k-f-r signifie couvrir, cacher, dissimuler. Les kafirina sont ceux qui couvrent — ils recouvrent la verite, la dissimulent. Le sens premier de la racine est physique : le Lane's donne d'abord « couvrir une chose pour la cacher ».

Le verbe **amhilhum** est a l'imperatif forme IV (une forme qui signifie « faire faire ») de la meme racine m-h-l, avec le pronom **-hum** (eux). La forme IV ajoute l'idee de « leur faire avoir un delai ». La repetition du verbe sous deux formes differentes (II et IV) renforce l'ordre de patience.

Le mot **ruwaydan** est un diminutif (la forme fu'ayl est un schema de diminutif en arabe — la version « petite » du mot) de rawd, de la racine r-w-d (douceur, lenteur). Le diminutif reduit la quantite : ruwaydan signifie « un tout petit peu, un court moment ». C'est le dernier mot de la sourate — il porte le message final : le sursis est bref.

§JUSTIFICATION§
**accorde un delai** — Le sens retenu est « accorder un delai ». Ce mot est choisi car mahhala signifie donner du temps, reporter. L'alternative « laisse » est ecartee car laisser est passif (on abandonne), tandis qu'accorder un delai est actif (on decide de la duree). L'alternative « patiente avec » est ecartee car la patience est une vertu du sujet, tandis que le delai est accorde a l'autre.

**ceux qui couvrent** — Le sens retenu est « couvrir ». Ce mot est choisi car la racine k-f-r signifie etymologiquement couvrir, cacher. L'alternative « mecreants » est ecartee car c'est une traduction-interpretation qui a pris un sens pejoratif et religieux en francais. L'alternative « ceux qui rejettent » est ecartee car le rejet est un etat mental, tandis que couvrir est un acte concret — et le participe actif designe ceux qui font l'action.

**un court moment** — Le sens retenu est « un peu, doucement ». Ce mot est choisi car ruwaydan est le diminutif de rawd — un tout petit peu. L'alternative « un instant » est ecartee car l'instant est trop ponctuel, tandis que ruwaydan designe un court delai qui a une duree.

§CRITIQUE§
**ceux qui couvrent vs mecreants** — Hamidullah traduit « les mecreants ». Le mot « mecreant » en francais designe quelqu'un qui ne croit pas en Dieu — c'est une interpretation theologique. Le texte dit al-kafirina, de la racine k-f-r (couvrir). Le participe actif designe ceux qui font l'action de couvrir. Le Lane's donne d'abord « couvrir une chose » avant les sens derives. Traduire par « mecreants » impose une lecture religieuse qui n'est pas dans l'etymologie. L'etymologie pure donne « ceux qui couvrent [la verite] », ce qui decrit un acte, pas une identite religieuse. En 57:20, le meme mot kuffar est utilise pour les cultivateurs (ceux qui couvrent la graine de terre), ce qui confirme que le sens premier est couvrir.`
  });

  console.log('VERSET 86:17 — TERMINÉ');
  console.log('  mhl → Délai/Sursis → "delai"');
  console.log('  kfr → Couverture/Dissimulation → "ceux qui couvrent"');
  console.log('  rwd → Douceur/Lenteur → "un peu"');

  // --- Phrases du quotidien pour mhl (pas encore de phrases) ---
  console.log('\n--- PHRASES DU QUOTIDIEN mhl ---');
  const mhlId = 2258;
  const { count: mhlDaily } = await sb.from('word_daily').select('id', { count: 'exact' }).eq('analysis_id', mhlId);
  if (mhlDaily > 0) {
    console.log('  mhl: ' + mhlDaily + ' phrases existantes — SKIP');
  } else {
    await sb.from('word_daily').insert([
      { analysis_id: mhlId, sense: 'accorder un delai', arabic: 'مَهِّلْنِي', phon: 'mahhilni', french: 'Accorde-moi un delai pour finir ce travail.' },
      { analysis_id: mhlId, sense: 'accorder un delai', arabic: 'أَمْهِلْهُ', phon: 'amhilhu', french: 'Donne-lui un peu de temps, il va se rattraper.' },
      { analysis_id: mhlId, sense: 'accorder un delai', arabic: 'لَا تُمْهِلْ', phon: 'la tumhil', french: 'N\'accorde plus de delai, le temps est ecoule.' }
    ]);
    console.log('  ✓ 3 phrases du quotidien mhl insérées');
  }

  // --- Phrases pour les nouvelles racines ---
  console.log('\n--- PHRASES DU QUOTIDIEN nouvelles racines ---');

  // ArD
  const { count: ArDDaily } = await sb.from('word_daily').select('id', { count: 'exact' }).eq('analysis_id', ArDId);
  if (ArDDaily > 0) { console.log('  ArD: ' + ArDDaily + ' existantes — SKIP'); }
  else {
    await sb.from('word_daily').insert([
      { analysis_id: ArDId, sense: 'terre', arabic: 'الأَرْض', phon: 'al-ard', french: 'La terre est seche, il n\'a pas plu depuis des semaines.' },
      { analysis_id: ArDId, sense: 'sol', arabic: 'أَرْض', phon: 'ard', french: 'Le sol de cette region est tres fertile.' },
      { analysis_id: ArDId, sense: 'terrain', arabic: 'أَرَاضِي', phon: 'aradi', french: 'Il a achete un terrain pour construire sa maison.' }
    ]);
    console.log('  ✓ 3 phrases ArD');
  }

  // SdE
  const { count: SdEDaily } = await sb.from('word_daily').select('id', { count: 'exact' }).eq('analysis_id', SdEId);
  if (SdEDaily > 0) { console.log('  SdE: ' + SdEDaily + ' existantes — SKIP'); }
  else {
    await sb.from('word_daily').insert([
      { analysis_id: SdEId, sense: 'fendre', arabic: 'صَدَعَ', phon: 'sada\'a', french: 'Le mur s\'est fissure a cause du froid.' },
      { analysis_id: SdEId, sense: 'fissurer', arabic: 'صَدْع', phon: 'sad\'', french: 'Il y a une fissure dans le plafond qu\'il faut reparer.' },
      { analysis_id: SdEId, sense: 'traverser', arabic: 'صَدَعَ الفَلَاة', phon: 'sada\'a al-falat', french: 'Il a traverse le desert d\'un bout a l\'autre.' }
    ]);
    console.log('  ✓ 3 phrases SdE');
  }

  // fSl
  const { count: fSlDaily } = await sb.from('word_daily').select('id', { count: 'exact' }).eq('analysis_id', fSlId);
  if (fSlDaily > 0) { console.log('  fSl: ' + fSlDaily + ' existantes — SKIP'); }
  else {
    await sb.from('word_daily').insert([
      { analysis_id: fSlId, sense: 'separer', arabic: 'فَصَلَ', phon: 'fasala', french: 'Il a separe les documents en deux piles.' },
      { analysis_id: fSlId, sense: 'trancher un litige', arabic: 'فَصْل', phon: 'fasl', french: 'Le juge a tranche le differend entre les deux parties.' },
      { analysis_id: fSlId, sense: 'saison', arabic: 'فُصُول', phon: 'fusul', french: 'L\'automne est ma saison preferee.' }
    ]);
    console.log('  ✓ 3 phrases fSl');
  }

  // hzl
  const { count: hzlDaily } = await sb.from('word_daily').select('id', { count: 'exact' }).eq('analysis_id', hzlId);
  if (hzlDaily > 0) { console.log('  hzl: ' + hzlDaily + ' existantes — SKIP'); }
  else {
    await sb.from('word_daily').insert([
      { analysis_id: hzlId, sense: 'plaisanter', arabic: 'هَزَلَ', phon: 'hazala', french: 'Arrete de plaisanter, c\'est serieux.' },
      { analysis_id: hzlId, sense: 'ne pas etre serieux', arabic: 'هَزْل', phon: 'hazl', french: 'Ce n\'est pas du hazl, c\'est une affaire serieuse.' },
      { analysis_id: hzlId, sense: 'etre maigre', arabic: 'هُزَال', phon: 'huzal', french: 'Le cheval est maigre apres la longue marche.' }
    ]);
    console.log('  ✓ 3 phrases hzl');
  }

  console.log('\n=== PIPELINE S86 v11-17 TERMINÉE ===');
})();
