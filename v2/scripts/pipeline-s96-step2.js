const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function createMissingRoots() {
  // ========== RACINE SFE (سفع) ==========
  console.log('=== Création racine SFE (سفع) ===');

  const {data: sfeWA, error: sfeErr} = await sb.from('word_analyses').insert({
    word_key: 'sfe',
    root_ar: 'س ف ع',
    root_phon: 'sfe',
    total_occurrences: 2,
    analysis_step: 2
  }).select().single();

  if (sfeErr) { console.error('Error creating sfe:', sfeErr.message); return; }
  console.log('Created sfe id=' + sfeWA.id);

  const sfeMeanings = [
    // Concept 1: Saisie/Agrippement
    { analysis_id: sfeWA.id, sense: 'saisir par le toupet', status: 'pending', concept: 'Saisie/Agrippement',
      description: "Acte physique de saisir violemment quelqu'un par le devant de la tête et de le tirer. La saisie est directionnelle — elle part de celui qui saisit et atteint celui qui est saisi. C'est un acte ponctuel et extérieur de domination physique. Le Lane's donne : il a saisi et tiré sa nāṣiya (le devant de la tête). L'acte implique la force et la contrainte — on saisit pour soumettre, pour déplacer contre la volonté de l'autre.",
      meaning_type: 'etymology', display_order: 1 },
    { analysis_id: sfeWA.id, sense: 'agripper', status: 'pending', concept: 'Saisie/Agrippement',
      description: "Saisir fermement et ne pas lâcher — usage avec la main ou le pied.",
      meaning_type: 'etymology', display_order: 2 },
    { analysis_id: sfeWA.id, sense: 'tirer avec violence', status: 'pending', concept: 'Saisie/Agrippement',
      description: "Tirer quelqu'un par une partie du corps pour le traîner.",
      meaning_type: 'etymology', display_order: 3 },
    { analysis_id: sfeWA.id, sense: 'empoigner', status: 'pending', concept: 'Saisie/Agrippement',
      description: "Prendre fermement avec la main — souvent pour immobiliser ou relever.",
      meaning_type: 'etymology', display_order: 4 },

    // Concept 2: Brûlure/Noircissement
    { analysis_id: sfeWA.id, sense: 'brûler légèrement', status: 'pending', concept: 'Brûlure/Noircissement',
      description: "Altération de la surface de la peau par le feu, le vent chaud ou le soleil. Le Lane's donne : le vent chaud (samūm) a frappé son visage légèrement de sorte que la couleur de la peau a changé et noirci. C'est un acte extérieur et ponctuel qui laisse une marque visible et permanente. La brûlure altère l'apparence — elle est directionnelle du feu vers la peau.",
      meaning_type: 'etymology', display_order: 5 },
    { analysis_id: sfeWA.id, sense: 'noircir', status: 'pending', concept: 'Brûlure/Noircissement',
      description: "Rendre noir le visage — marque de honte ou d'altération par le feu.",
      meaning_type: 'etymology', display_order: 6 },
    { analysis_id: sfeWA.id, sense: 'marquer au fer', status: 'pending', concept: 'Brûlure/Noircissement',
      description: "Imprimer une marque par le feu sur le corps.",
      meaning_type: 'etymology', display_order: 7 },
    { analysis_id: sfeWA.id, sense: 'altérer la couleur', status: 'pending', concept: 'Brûlure/Noircissement',
      description: "Changement de teint par la peur, la maladie ou le feu.",
      meaning_type: 'etymology', display_order: 8 },

    // Concept 3: Frappe/Gifle
    { analysis_id: sfeWA.id, sense: 'gifler', status: 'pending', concept: 'Frappe/Gifle',
      description: "Frapper au visage avec la main ouverte. Le Lane's donne : il l'a giflé avec la main. C'est un acte ponctuel de violence physique, directionnel de la main vers le visage. La gifle est publique et humiliante.",
      meaning_type: 'etymology', display_order: 9 },
    { analysis_id: sfeWA.id, sense: 'frapper avec un bâton', status: 'pending', concept: 'Frappe/Gifle',
      description: "Battre quelqu'un avec un objet.",
      meaning_type: 'etymology', display_order: 10 },
    { analysis_id: sfeWA.id, sense: "battre des ailes", status: 'pending', concept: 'Frappe/Gifle',
      description: "Un oiseau qui frappe sa proie avec ses ailes.",
      meaning_type: 'etymology', display_order: 11 },

    // Concept 4: Avilissement/Humiliation
    { analysis_id: sfeWA.id, sense: 'avilir', status: 'pending', concept: 'Avilissement/Humiliation',
      description: "Rabaisser la dignité de quelqu'un, le rendre méprisable. Le Lane's donne parmi les interprétations du verset 96:15 : nous le rendrons certes méprisable, nous l'abaisserons. C'est un acte extérieur et directionnel qui atteint la dignité de l'autre. L'avilissement est l'effet social de la saisie — saisir quelqu'un par le front devant les autres détruit sa dignité.",
      meaning_type: 'etymology', display_order: 12 },
    { analysis_id: sfeWA.id, sense: 'rendre méprisable', status: 'pending', concept: 'Avilissement/Humiliation',
      description: "Réduire quelqu'un à un état de mépris public.",
      meaning_type: 'etymology', display_order: 13 },
    { analysis_id: sfeWA.id, sense: 'humilier', status: 'pending', concept: 'Avilissement/Humiliation',
      description: "Rabaisser publiquement — faire perdre la face.",
      meaning_type: 'etymology', display_order: 14 },
  ];

  const {error: sfeInsErr} = await sb.from('word_meanings').insert(sfeMeanings);
  if (sfeInsErr) console.error('Error inserting sfe meanings:', sfeInsErr.message);
  else {
    console.log('[SFE] 14 sens → 4 concepts');
    console.log('  Saisie/Agrippement (4 sens)');
    console.log('  Brûlure/Noircissement (4 sens)');
    console.log('  Frappe/Gifle (3 sens)');
    console.log('  Avilissement/Humiliation (3 sens)');
  }

  // ========== RACINE ZBN (زبن) ==========
  console.log('\n=== Création racine ZBN (زبن) ===');

  const {data: zbnWA, error: zbnErr} = await sb.from('word_analyses').insert({
    word_key: 'zbn',
    root_ar: 'ز ب ن',
    root_phon: 'zbn',
    total_occurrences: 1,
    analysis_step: 2
  }).select().single();

  if (zbnErr) { console.error('Error creating zbn:', zbnErr.message); return; }
  console.log('Created zbn id=' + zbnWA.id);

  const zbnMeanings = [
    // Concept 1: Repoussement/Expulsion
    { analysis_id: zbnWA.id, sense: 'repousser', status: 'pending', concept: 'Repoussement/Expulsion',
      description: "Acte physique de pousser violemment quelqu'un ou quelque chose pour l'éloigner. Le Lane's donne : il l'a poussé, ou repoussé ; il l'a poussé loin de lui. La chamelle repousse son trayeur avec ses jarrets. C'est un acte extérieur, directionnel et ponctuel — la force va de celui qui repousse vers celui qui est repoussé. Le repoussement implique le refus et la violence.",
      meaning_type: 'etymology', display_order: 1 },
    { analysis_id: zbnWA.id, sense: 'expulser', status: 'pending', concept: 'Repoussement/Expulsion',
      description: "Pousser quelqu'un hors d'un lieu.",
      meaning_type: 'etymology', display_order: 2 },
    { analysis_id: zbnWA.id, sense: 'éloigner', status: 'pending', concept: 'Repoussement/Expulsion',
      description: "Se retirer à distance ou faire s'éloigner.",
      meaning_type: 'etymology', display_order: 3 },

    // Concept 2: Combat/Confrontation
    { analysis_id: zbnWA.id, sense: 'se battre en se repoussant', status: 'pending', concept: 'Combat/Confrontation',
      description: "Lutte réciproque où chacun repousse l'autre — le Lane's donne la forme III (zābanahu) : il s'est battu avec lui en se repoussant mutuellement. C'est un combat extérieur et réciproque. La confrontation est l'escalade du repoussement — quand les deux parties refusent de céder.",
      meaning_type: 'etymology', display_order: 4 },
    { analysis_id: zbnWA.id, sense: 'lutter', status: 'pending', concept: 'Combat/Confrontation',
      description: "Combattre physiquement, s'affronter.",
      meaning_type: 'etymology', display_order: 5 },

    // Concept 3: Garde/Surveillance brutale
    { analysis_id: zbnWA.id, sense: 'gardiens', status: 'pending', concept: 'Garde/Surveillance brutale',
      description: "Les zabāniya sont les gardes qui repoussent avec violence — les braves d'une armée ou les agents de la police. Le Lane's donne : chez les Arabes classiques, ce mot signifie les shuraṭ (braves de l'armée, ou soldats armés du préfet de police). C'est un corps de gardes dont la fonction est de repousser, de saisir et de châtier. Leur nature est extérieure et directionnelle — ils agissent sur ceux qu'ils surveillent.",
      meaning_type: 'etymology', display_order: 6 },
    { analysis_id: zbnWA.id, sense: 'agents de la force', status: 'pending', concept: 'Garde/Surveillance brutale',
      description: "Soldats ou policiers qui appliquent l'ordre par la force.",
      meaning_type: 'etymology', display_order: 7 },

    // Concept 4: Tromperie/Duperie
    { analysis_id: zbnWA.id, sense: 'duper', status: 'pending', concept: 'Tromperie/Duperie',
      description: "Traiter quelqu'un comme un sot, le tromper dans une transaction. Le Lane's donne la forme X (istazbanahu) : il l'a traité comme un zabūn (un simplet qu'on trompe facilement). C'est un acte extérieur et directionnel — le trompeur exploite la faiblesse de l'autre.",
      meaning_type: 'etymology', display_order: 8 },
    { analysis_id: zbnWA.id, sense: 'escroquer', status: 'pending', concept: 'Tromperie/Duperie',
      description: "Tromper dans une vente par estimation sans mesure.",
      meaning_type: 'etymology', display_order: 9 },

    // Concept 5: Orgueil/Fierté
    { analysis_id: zbnWA.id, sense: 'orgueil', status: 'pending', concept: 'Orgueil/Fierté',
      description: "Le Lane's donne zabbūna : orgueil (kibr). Un homme dhū zabbūna est celui qui défend son honneur et repousse quiconque le menace. C'est un état intérieur de fierté qui se manifeste par le repoussement de l'autre.",
      meaning_type: 'etymology', display_order: 10 },
    { analysis_id: zbnWA.id, sense: "défendre son honneur", status: 'pending', concept: 'Orgueil/Fierté',
      description: "Repousser quiconque atteint à sa dignité.",
      meaning_type: 'etymology', display_order: 11 },
  ];

  const {error: zbnInsErr} = await sb.from('word_meanings').insert(zbnMeanings);
  if (zbnInsErr) console.error('Error inserting zbn meanings:', zbnInsErr.message);
  else {
    console.log('[ZBN] 11 sens → 5 concepts');
    console.log('  Repoussement/Expulsion (3 sens)');
    console.log('  Combat/Confrontation (2 sens)');
    console.log('  Garde/Surveillance brutale (2 sens)');
    console.log('  Tromperie/Duperie (2 sens)');
    console.log('  Orgueil/Fierté (2 sens)');
  }

  console.log('\n=== ÉTAPE 2 TERMINÉE ===');
}

createMissingRoots().catch(console.error);
