// Pipeline S89 — Étape 2 : Création des 4 racines manquantes
// wtr (و ت ر), Sxr (ص خ ر), wtd (و ت د), wdy (و د ي)
// + daily phrases manquantes pour racines existantes
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
  console.log('=== ÉTAPE 2 : 4 RACINES MANQUANTES S89 ===\n');

  // ============================================================
  // 1. wtr (و ت ر) — impair, seul, corde d'arc, vengeance
  // Lane's: 19 entries. Quran 89:3 al-watr = l'impair
  // corpus.quran.com: 2 occurrences
  // ============================================================
  console.log('--- ROOT wtr (و ت ر) ---');
  const { data: wtr_wa, error: e1 } = await sb.from('word_analyses').insert({
    word_key: 'wtr', root_ar: 'و ت ر', total_occurrences: 2
  }).select().single();
  if (e1) { console.log('ERR:', e1.message); return; }
  const wtr = wtr_wa.id;
  console.log(`Created wtr id=${wtr}`);

  // Concept 1: Unité/Imparité (5 sens)
  await ins(wtr, 'seul, unique', 'Unité/Imparité', "État de ce qui est un et non accompagné — l'impair est ce qui reste seul quand on a fait toutes les paires. L'unité est permanente et irréductible : le un ne peut pas être divisé en deux parts égales. C'est un état fondamental, pas un choix — l'impair EST seul par nature.", 1);
  await ins(wtr, 'impair', 'Unité/Imparité', "Nombre qui n'est pas divisible en deux parts égales.", 2);
  await ins(wtr, 'rendre impair', 'Unité/Imparité', "Transformer un nombre pair en impair en ajoutant un.", 3);
  await ins(wtr, 'prière impaire (witr)', 'Unité/Imparité', "Prière de nuit en nombre impair de cycles.", 4);
  await ins(wtr, 'manière constante', 'Unité/Imparité', "Façon de faire régulière et continue.", 5);

  // Concept 2: Corde/Tension (4 sens)
  await ins(wtr, 'corde d\'arc', 'Corde/Tension', "La corde tendue entre les deux extrémités de l'arc. La corde est un lien directionnel et tendu — elle relie deux points et permet de projeter. C'est un objet extérieur, permanent tant qu'il est tendu, et fonctionnel : sans corde, l'arc est inutile.", 6);
  await ins(wtr, 'tendre la corde', 'Corde/Tension', "Attacher et tirer la corde pour la rendre fonctionnelle.", 7);
  await ins(wtr, 'nerf tendu', 'Corde/Tension', "Un nerf ou veine qui se tend comme une corde d'arc.", 8);
  await ins(wtr, 'cloison du nez', 'Corde/Tension', "Le septum nasal qui sépare les deux narines.", 9);

  // Concept 3: Succession/Intervalles (3 sens)
  await ins(wtr, 'successif avec intervalles', 'Succession/Intervalles', "Ce qui vient l'un après l'autre avec des pauses entre chaque. La succession par intervalles est un mouvement temporel régulier — chaque élément arrive après le précédent, pas en bloc mais espacé. C'est directionnel (du premier au dernier) et continu.", 10);
  await ins(wtr, 'envoyer successivement', 'Succession/Intervalles', "Transmettre des messages ou des choses l'un après l'autre.", 11);
  await ins(wtr, 'venir l\'un après l\'autre', 'Succession/Intervalles', "Arriver en séquence, pas en groupe.", 12);

  // Concept 4: Perte/Vengeance de sang (3 sens)
  await ins(wtr, 'priver de ses proches', 'Perte/Vengeance de sang', "Perdre un proche par la mort et rester seul sans avoir obtenu réparation. La perte est un état subi — on ne choisit pas de perdre un proche. Le lien avec l'imparité est profond : celui qui perd un proche devient impair, seul, incomplet.", 13);
  await ins(wtr, 'vengeance de sang', 'Perte/Vengeance de sang', "L'acte de chercher réparation pour un proche tué.", 14);
  await ins(wtr, 'celui qui a perdu un proche sans réparation', 'Perte/Vengeance de sang', "La personne qui reste seule après la perte.", 15);

  console.log('[wtr] 15 sens → 4 concepts\n');

  // ============================================================
  // 2. Sxr (ص خ ر) — rocher, roche
  // Lane's: 10 entries.
  // corpus.quran.com: 3 occurrences
  // ============================================================
  console.log('--- ROOT Sxr (ص خ ر) ---');
  const { data: Sxr_wa, error: e2 } = await sb.from('word_analyses').insert({
    word_key: 'Sxr', root_ar: 'ص خ ر', total_occurrences: 3
  }).select().single();
  if (e2) { console.log('ERR:', e2.message); return; }
  const Sxr = Sxr_wa.id;
  console.log(`Created Sxr id=${Sxr}`);

  // Concept 1: Roche/Solidité (4 sens)
  await ins(Sxr, 'roche', 'Roche/Solidité', "Grande masse de pierre dure. La roche est permanente, massive et résistante — elle ne se déplace pas, elle résiste aux éléments. C'est un objet extérieur, fixe et fondamental dans le paysage. La roche symbolise la solidité et la durabilité — ce qui résiste au temps.", 1);
  await ins(Sxr, 'rocher', 'Roche/Solidité', "Bloc de pierre isolé, plus grand qu'une simple pierre.", 2);
  await ins(Sxr, 'lieu rocheux', 'Roche/Solidité', "Endroit abondant en roches.", 3);
  await ins(Sxr, 'son du fer sur le fer', 'Roche/Solidité', "Bruit métallique de la frappe sur la roche.", 4);

  // Concept 2: Dureté/Insensibilité (2 sens)
  await ins(Sxr, 'visage dur (sans honte)', 'Dureté/Insensibilité', "Personne au visage dur qui n'éprouve pas de honte. La dureté est un état intérieur qui se manifeste extérieurement — le visage dur est le signe visible de l'insensibilité. C'est permanent et caractéristique de la personne.", 5);
  await ins(Sxr, 'récipient en terre', 'Dureté/Insensibilité', "Vaisselle de terre cuite, solide et dure.", 6);

  // Concept 3: Sens isolé/Plante (1 sens)
  await ins(Sxr, 'plante', 'Sens isolé/Plante', "Sens isolé désignant un type de plante.", 7);

  console.log('[Sxr] 7 sens → 3 concepts\n');

  // ============================================================
  // 3. wtd (و ت د) — piquet, pieu
  // Lane's: 8 entries.
  // corpus.quran.com: 3 occurrences (38:12, 78:7, 89:10)
  // ============================================================
  console.log('--- ROOT wtd (و ت د) ---');
  const { data: wtd_wa, error: e3 } = await sb.from('word_analyses').insert({
    word_key: 'wtd', root_ar: 'و ت د', total_occurrences: 3
  }).select().single();
  if (e3) { console.log('ERR:', e3.message); return; }
  const wtd = wtd_wa.id;
  console.log(`Created wtd id=${wtd}`);

  // Concept 1: Fixation/Ancrage (4 sens)
  await ins(wtd, 'enfoncer un piquet', 'Fixation/Ancrage', "Acte de planter un piquet dans le sol pour le fixer solidement. La fixation est un acte extérieur, directionnel (de haut en bas) et permanent — le piquet une fois enfoncé reste en place. C'est un acte de stabilisation : le piquet fixe ce qui sans lui serait instable.", 1);
  await ins(wtd, 'piquet', 'Fixation/Ancrage', "Pièce de bois ou de métal plantée dans le sol.", 2);
  await ins(wtd, 'piquets (awtâd)', 'Fixation/Ancrage', "Pluriel : les piquets qui fixent et stabilisent.", 3);
  await ins(wtd, 'maillet', 'Fixation/Ancrage', "Outil pour enfoncer les piquets.", 4);

  // Concept 2: Stabilité/Immobilité (2 sens)
  await ins(wtd, 'se tenir debout fermement', 'Stabilité/Immobilité', "État de celui qui est fixe et immobile comme un piquet. La stabilité est un état permanent — la personne est ancrée et ne bouge pas. C'est la métaphore du piquet appliquée à l'être humain : être ferme et inébranlable.", 5);
  await ins(wtd, 'corne dressée', 'Stabilité/Immobilité', "Corne d'animal qui se tient droite et fixe.", 6);

  // Concept 3: Sens isolé/Fixé (1 sens)
  await ins(wtd, 'piquet fixé (participe passif)', 'Sens isolé/Fixé', "Piquet qui a été enfoncé et fixé solidement.", 7);

  console.log('[wtd] 7 sens → 3 concepts\n');

  // ============================================================
  // 4. wdy (و د ي) — vallée, prix du sang
  // Lane's: 7 entries under wdY
  // Note: différent de wdy(1745) = و ذ ي (nuire) — ici c'est و د ي (vallée)
  // corpus.quran.com: 12 occurrences pour wâdî
  // ============================================================
  console.log('--- ROOT wdy_v (و د ي) — vallée ---');
  const { data: wdy_wa, error: e4 } = await sb.from('word_analyses').insert({
    word_key: 'wdy_v', root_ar: 'و د ي', total_occurrences: 12
  }).select().single();
  if (e4) { console.log('ERR:', e4.message); return; }
  const wdy_v = wdy_wa.id;
  console.log(`Created wdy_v id=${wdy_v}`);

  // Concept 1: Vallée/Cours d'eau (2 sens)
  await ins(wdy_v, 'vallée', 'Vallée/Cours d\'eau', "Espace entre deux montagnes ou collines à travers lequel un cours d'eau peut s'écouler. La vallée est un lieu permanent et naturel — elle est creusée par l'eau et le temps. C'est un espace extérieur, directionnel (l'eau y coule dans une direction) et fondamental dans le paysage. La vallée est le passage naturel entre les hauteurs.", 1);
  await ins(wdy_v, 'cours d\'eau', 'Vallée/Cours d\'eau', "L'eau qui coule dans la vallée, le torrent.", 2);

  // Concept 2: Prix du sang/Compensation (3 sens)
  await ins(wdy_v, 'prix du sang', 'Prix du sang/Compensation', "La somme versée aux héritiers d'une personne tuée comme compensation. Le prix du sang est un acte extérieur et directionnel : il sort de celui qui paie et atteint les héritiers de la victime. C'est un acte de réparation qui met fin au cycle de la vengeance.", 3);
  await ins(wdy_v, 'payer le prix du sang', 'Prix du sang/Compensation', "Verser la compensation financière pour un homicide.", 4);
  await ins(wdy_v, 'prendre le prix du sang', 'Prix du sang/Compensation', "Recevoir la compensation en tant qu'héritier.", 5);

  // Concept 3: Sens isolé/Destruction (1 sens)
  await ins(wdy_v, 'détruire', 'Sens isolé/Destruction', "Emporter, faire disparaître — dit de la mort.", 6);

  // Concept 4: Sens isolé/Palmier (1 sens)
  await ins(wdy_v, 'jeune palmier', 'Sens isolé/Palmier', "Rejeton de palmier coupé et transplanté.", 7);

  console.log('[wdy_v] 7 sens → 4 concepts\n');

  // ============================================================
  // DAILY PHRASES — pour racines sans daily
  // ============================================================
  console.log('--- DAILY PHRASES ---');

  await daily(wtr, 'seul, unique', 'وِتْر', 'witr', [
    "Le nombre impair a une place particulière dans la tradition.",
    "Seul et unique, il ne se divise pas en deux parts égales.",
    "La prière de la nuit se termine par un nombre impair."
  ]);

  await daily(Sxr, 'roche', 'صَخْر', 'ṣakhr', [
    "Les rochers de la montagne résistent à l'érosion depuis des siècles.",
    "Il a taillé sa maison dans la roche solide.",
    "La roche est le symbole de ce qui dure et ne change pas."
  ]);

  await daily(wtd, 'piquet', 'وَتَد', 'watad', [
    "Il a enfoncé les piquets pour fixer la tente au sol.",
    "Les montagnes sont comme des piquets qui stabilisent la terre.",
    "Sans piquets solides, la structure ne tient pas."
  ]);

  await daily(wdy_v, 'vallée', 'وَادٍ', 'wâdin', [
    "La vallée entre les deux montagnes était fertile et verte.",
    "L'eau du torrent coule au fond de la vallée.",
    "Ils ont traversé la vallée pour rejoindre l'autre côté."
  ]);

  // Daily for existing roots that have 0 daily
  await daily(589, 'dix', 'عَشْر', 'ʿashr', [
    "Ils sont arrivés au bout de dix jours de marche.",
    "Le groupe de dix personnes était au complet.",
    "Dix est le nombre de la complétude dans de nombreuses traditions."
  ]);

  await daily(533, 'intercéder', 'شَفَاعَة', 'shafāʿa', [
    "Il a intercédé auprès du juge pour son ami.",
    "L'intercession est un acte de solidarité et de soutien.",
    "Les nombres pairs sont ceux qui ont un compagnon."
  ]);

  await daily(523, 'voyager de nuit', 'سَرَى', 'sarā', [
    "Ils ont voyagé de nuit pour éviter la chaleur du jour.",
    "La marche nocturne est silencieuse et discrète.",
    "Le voyageur de nuit ne voit que les étoiles."
  ]);

  await daily(963, 'répondre', 'أَجَابَ', 'ajāba', [
    "Il a répondu à l'appel sans hésiter.",
    "La réponse est venue après une longue attente.",
    "Quand on l'interrogeait, il répondait avec clarté."
  ]);

  await daily(2599, 'exemple', 'مَثَل', 'mathal', [
    "Il a donné un exemple pour illustrer son propos.",
    "La parabole rend l'idée abstraite concrète et vivante.",
    "Rien de semblable n'a été créé dans les contrées."
  ]);

  console.log('\n=== ÉTAPE 2 TERMINÉE ===');
  console.log(`4 racines créées: wtr(${wtr}), Sxr(${Sxr}), wtd(${wtd}), wdy_v(${wdy_v})`);
})();
