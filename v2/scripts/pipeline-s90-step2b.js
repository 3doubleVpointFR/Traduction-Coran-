// Pipeline S90 part 2 — Étape 2 : Création des 3 racines manquantes
// qHm (قحم), sghb (سغب), shAm (شأم)
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function ins(aid, sense, concept, desc, order) {
  const { error } = await sb.from('word_meanings').insert({
    analysis_id: aid, sense, concept, description: desc,
    meaning_type: 'etymology', display_order: order,
    status: 'pending', occ_count: 0, occ_refs: []
  });
  if (error) console.log(`  ERR ${sense}: ${error.message}`);
  else console.log(`  ✓ ${sense} → [${concept}]`);
}

async function daily(aid, sense, arabic, phon, french) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', aid);
  if (count > 0) { console.log(`  Daily SKIP (${count}) id=${aid}`); return; }
  await sb.from('word_daily').insert(french.map(fr => ({ analysis_id: aid, sense, arabic, phon, french: fr })));
  console.log(`  ✓ ${french.length} daily id=${aid}`);
}

(async () => {
  console.log('=== ÉTAPE 2b : 3 RACINES MANQUANTES ===\n');

  // ============================================================
  // 1. qHm (قحم) — se précipiter, plonger dans
  // Lane's: 5 entries. Form VIII iqtaHama = plunger dans
  // ============================================================
  console.log('--- ROOT qHm (ق ح م) ---');
  const { data: qHm_wa, error: e1 } = await sb.from('word_analyses').insert({
    word_key: 'qHm', root_ar: 'ق ح م', total_occurrences: 2
  }).select().single();
  if (e1) { console.log('ERR:', e1.message); return; }
  const qHm = qHm_wa.id;
  console.log(`Created qHm id=${qHm}`);

  // Concept 1: Précipitation/Plongée (3 sens)
  await ins(qHm, 'se jeter dans une affaire sans réflexion', 'Précipitation/Plongée', "Acte impulsif de se jeter dans quelque chose de difficile ou de dangereux sans considération préalable. La précipitation est un mouvement soudain et directionnel — la personne quitte un état de sécurité pour plonger dans le danger. C'est ponctuel, volontaire et irréversible une fois lancé.", 1);
  await ins(qHm, 'plonger dans les dangers', 'Précipitation/Plongée', "Affronter les périls en s'y jetant tête baissée.", 2);
  await ins(qHm, 'franchir un obstacle en se précipitant', 'Précipitation/Plongée', "Surmonter une difficulté par un élan brusque et courageux.", 3);

  // Concept 2: Sécheresse/Disette (1 sens)
  await ins(qHm, 'souffrir de sécheresse', 'Sécheresse/Disette', "État de privation causé par le manque de pluie. La disette est une condition subie, pas choisie.", 4);

  // Concept 3: Sens isolé/Vieillesse (1 sens)
  await ins(qHm, 'vieille femme', 'Sens isolé/Vieillesse', "Sens isolé désignant une femme âgée.", 5);

  // Concept 4: Sens isolé/Redondance (1 sens)
  await ins(qHm, 'mot redondant ou superflu', 'Sens isolé/Redondance', "Terme linguistique désignant un élément ajouté sans nécessité.", 6);

  console.log('[qHm] 6 sens → 4 concepts\n');

  // ============================================================
  // 2. sghb (سغب) — faim, famine
  // Lane's: 9 entries. Quran 90:14
  // ============================================================
  console.log('--- ROOT sghb (س غ ب) ---');
  const { data: sghb_wa, error: e2 } = await sb.from('word_analyses').insert({
    word_key: 'sghb', root_ar: 'س غ ب', total_occurrences: 1
  }).select().single();
  if (e2) { console.log('ERR:', e2.message); return; }
  const sghb = sghb_wa.id;
  console.log(`Created sghb id=${sghb}`);

  // Concept 1: Faim/Famine (6 sens)
  await ins(sghb, 'avoir faim', 'Faim/Famine', "État intérieur de manque de nourriture qui affaiblit le corps et cause une souffrance physique. La faim est un état subi, permanent tant que la cause persiste, et qui pousse à chercher de quoi se nourrir. Le Lane's ajoute que la faim s'accompagne souvent de fatigue — c'est une privation totale.", 1);
  await ins(sghb, 'faim', 'Faim/Famine', "Le manque de nourriture en tant qu'état.", 2);
  await ins(sghb, 'faim accompagnée de fatigue', 'Faim/Famine', "Privation de nourriture combinée à l'épuisement physique.", 3);
  await ins(sghb, 'jour de famine', 'Faim/Famine', "Période où la nourriture manque pour la communauté.", 4);
  await ins(sghb, 'être affamé', 'Faim/Famine', "Celui qui souffre de la faim.", 5);
  await ins(sghb, 'entrer dans un état de faim', 'Faim/Famine', "Le début de la privation alimentaire.", 6);

  // Concept 2: Soif (1 sens)
  await ins(sghb, 'avoir soif (rare)', 'Soif', "Sens marginal : le manque d'eau. Attesté comme sens secondaire dans le Lane's.", 7);

  console.log('[sghb] 7 sens → 2 concepts\n');

  // ============================================================
  // 3. shAm (شأم) — malchance, gauche, Syrie
  // Lane's: 18 entries under broot=$A^m
  // ============================================================
  console.log('--- ROOT shAm (ش أ م) ---');
  const { data: shAm_wa, error: e3 } = await sb.from('word_analyses').insert({
    word_key: 'shAm', root_ar: 'ش أ م', total_occurrences: 5
  }).select().single();
  if (e3) { console.log('ERR:', e3.message); return; }
  const shAm = shAm_wa.id;
  console.log(`Created shAm id=${shAm}`);

  // Concept 1: Malchance/Mauvais augure (5 sens)
  await ins(shAm, 'être de mauvais augure', 'Malchance/Mauvais augure', "État ou qualité de ce qui porte malheur. La malchance est une réalité extérieure qui s'abat sur ceux qui en sont affectés — elle sort de la source et atteint les victimes. C'est le contraire exact de la bénédiction (yumn). Le Lane's donne pour mashʾama dans le Coran 90:19 : ceux qui reçoivent leur registre dans la main gauche, ou les occupants du lieu bas, ou ceux qui ont l'infortune.", 1);
  await ins(shAm, 'porter malheur à son peuple', 'Malchance/Mauvais augure', "Causer l'infortune aux autres par sa présence ou ses actes.", 2);
  await ins(shAm, 'infortune et malchance', 'Malchance/Mauvais augure', "Le malheur en tant qu'état — contraire de la prospérité.", 3);
  await ins(shAm, 'trouver quelque chose de mauvais augure', 'Malchance/Mauvais augure', "Considérer une chose comme porteuse de malheur.", 4);
  await ins(shAm, 'personne malchanceuse', 'Malchance/Mauvais augure', "Celui qui porte le malheur sur lui-même et sur les autres.", 5);

  // Concept 2: Gauche/Direction gauche (3 sens)
  await ins(shAm, 'le côté gauche', 'Gauche/Direction gauche', "La direction gauche, opposée à la droite (yamîn). La gauche est associée au mauvais augure dans la tradition arabe — prendre la direction de la gauche signifie aller vers ce qui est défavorable. C'est une position spatiale qui porte une charge symbolique.", 6);
  await ins(shAm, 'prendre la direction de la gauche', 'Gauche/Direction gauche', "Se diriger vers le côté gauche.", 7);
  await ins(shAm, 'la main gauche', 'Gauche/Direction gauche', "Le membre opposé à la main droite.", 8);

  // Concept 3: Syrie/Géographie (3 sens)
  await ins(shAm, 'la Syrie (al-Shâm)', 'Syrie/Géographie', "Le pays situé au nord de la péninsule arabique. La Syrie est une réalité géographique permanente — le nom désigne la direction du nord.", 9);
  await ins(shAm, 'venir en Syrie', 'Syrie/Géographie', "Se déplacer vers le nord.", 10);
  await ins(shAm, 'syrien', 'Syrie/Géographie', "Qui est relatif à la Syrie.", 11);

  // Concept 4: Nature/Caractère (1 sens)
  await ins(shAm, 'nature innée et disposition', 'Nature/Caractère', "La disposition naturelle d'une personne — son tempérament inné.", 12);

  console.log('[shAm] 12 sens → 4 concepts\n');

  // ============================================================
  // DAILY PHRASES
  // ============================================================
  console.log('--- DAILY PHRASES ---');
  await daily(qHm, 'se jeter dans une affaire sans réflexion', 'قَحَمَ', 'qaHama', [
    "Il s'est jeté dans cette affaire sans réfléchir aux conséquences.",
    "Elle a franchi l'obstacle d'un seul élan, sans hésiter.",
    "Ne te précipite pas dans les dangers sans préparation."
  ]);
  await daily(sghb, 'avoir faim', 'سَغِبَ', 'saghiba', [
    "Après une longue journée de marche, la faim les a frappés.",
    "En ce jour de famine, il n'y avait rien à manger.",
    "La faim mêlée à la fatigue les a épuisés complètement."
  ]);
  await daily(shAm, 'être de mauvais augure', 'شُؤْم', 'shuʾm', [
    "Il considérait ce signe comme un mauvais augure.",
    "La malchance les a suivis partout où ils sont allés.",
    "Prendre la direction de la gauche, c'était aller vers l'infortune."
  ]);

  // Also add missing daily for rqb, qrb, trb, ymn
  await daily(955, 'surveiller', 'رَقَبَ', 'raqaba', [
    "Il surveille l'horizon en attendant le retour des siens.",
    "La vigilance constante est la marque d'un bon gardien.",
    "Libérer un captif est un acte de grande noblesse."
  ]);
  await daily(467, 'être proche', 'قَرُبَ', 'qaruba', [
    "Sa maison est proche de la mosquée.",
    "Les proches parents ont des droits les uns sur les autres.",
    "Rapproche-toi de ceux qui t'aiment sincèrement."
  ]);
  await daily(1156, 'terre', 'تُرَاب', 'turâb', [
    "L'homme a été créé de terre selon le texte.",
    "Il était si pauvre que la poussière était son seul compagnon.",
    "La terre est à la fois humble et nourricière."
  ]);
  await daily(1028, 'droite', 'يَمِين', 'yamîn', [
    "Il a prêté serment de sa main droite.",
    "La droite est le côté de la bénédiction.",
    "Les gens de la droite sont ceux qui prospèrent."
  ]);

  console.log('\n=== ÉTAPE 2b TERMINÉE ===');
  console.log(`3 racines créées: qHm(${qHm}), sghb(${sghb}), shAm(${shAm})`);
})();
