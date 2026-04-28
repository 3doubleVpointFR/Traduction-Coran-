// Pipeline S88 — Étape 2 : Création des 3 racines manquantes
// Hmy (ح م ي), ana2 (أ ن ي/bouillant), Dre2 (ض ر ع)
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
  else console.log(`  + ${sense} → [${concept}]`);
}

async function daily(aid, sense, arabic, phon, french) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', aid);
  if (count > 0) { console.log(`  Daily SKIP (${count}) id=${aid}`); return; }
  await sb.from('word_daily').insert(french.map(fr => ({ analysis_id: aid, sense, arabic, phon, french: fr })));
  console.log(`  + ${french.length} daily id=${aid}`);
}

(async () => {
  console.log('=== ÉTAPE 2 : 3 RACINES MANQUANTES S88 ===\n');

  // ============================================================
  // 1. Hmy (ح م ي) — protéger, être brûlant, fierté
  // Lane's broot=HmY : ~15 entries
  // corpus.quran.com: ~10 occurrences
  // ============================================================
  console.log('--- ROOT Hmy (ح م ي) ---');
  const { data: Hmy_wa, error: e1 } = await sb.from('word_analyses').insert({
    word_key: 'Hmy', root_ar: 'ح م ي', total_occurrences: 10
  }).select().single();
  if (e1) { console.log('ERR:', e1.message); return; }
  const Hmy = Hmy_wa.id;
  console.log(`Created Hmy id=${Hmy}`);

  // Concept 1: Protection/Interdiction (7 sens)
  await ins(Hmy, 'protéger', 'Protection/Interdiction', "Acte de mettre quelque chose ou quelqu'un a l'abri d'une atteinte exterieure. La protection est un acte dirige vers l'exterieur — celui qui protege empeche l'agression d'atteindre ce qu'il defend. C'est un acte permanent et vigilant : le protecteur reste en position tant que la menace existe. La protection cree un espace inviolable autour de ce qui est protege.", 1);
  await ins(Hmy, 'défendre', 'Protection/Interdiction', "Repousser une agression pour garder quelque chose intact.", 2);
  await ins(Hmy, 'interdire', 'Protection/Interdiction', "Empecher l'acces a un lieu ou a une chose — rendre un espace inviolable.", 3);
  await ins(Hmy, 'garder', 'Protection/Interdiction', "Maintenir la surveillance sur un lieu ou une personne.", 4);
  await ins(Hmy, 'lieu protégé', 'Protection/Interdiction', "Paturage ou espace reserve, interdit aux autres.", 5);
  await ins(Hmy, 's\'abstenir de nourriture', 'Protection/Interdiction', "Le malade qui se protege en s'abstenant de ce qui lui nuit.", 6);
  await ins(Hmy, 'se garder de', 'Protection/Interdiction', "Se proteger soi-meme en evitant ce qui est nuisible.", 7);

  // Concept 2: Chaleur/Brûlure (4 sens)
  await ins(Hmy, 'être brûlant', 'Chaleur/Brûlure', "Etat de ce qui a atteint un degre intense de chaleur. La brulure est un etat exterieur et observable — on sent la chaleur qui emane de la chose brulante. C'est un etat qui atteint ce qui se trouve a proximite : le feu brulant transmet sa chaleur a tout ce qui l'entoure. La chaleur intense sort de la source et atteint ce qui est autour.", 8);
  await ins(Hmy, 'chauffer intensément', 'Chaleur/Brûlure', "Rendre le soleil ou le feu brulant — acte de faire atteindre un degre extreme de chaleur.", 9);
  await ins(Hmy, 'rougir au feu', 'Chaleur/Brûlure', "Chauffer un morceau de fer dans le feu jusqu'a ce qu'il rougisse.", 10);
  await ins(Hmy, 'brûlant', 'Chaleur/Brûlure', "Qualificatif de ce qui a atteint un degre extreme de chaleur — se dit du feu, du soleil.", 11);

  // Concept 3: Fierté/Indignation (3 sens)
  await ins(Hmy, 'dédain', 'Fierté/Indignation', "Etat interieur de refus face a ce qui est indigne. La fierte est un etat interieur et reactif — celui qui l'eprouve refuse l'injustice ou la bassesse. C'est une reaction de l'ame qui protege sa dignite, un lien etymologique avec la protection : la fierte protege l'ame de la soumission.", 12);
  await ins(Hmy, 'indignation', 'Fierté/Indignation', "Colere provoquee par ce qui est injuste ou deshonorant.", 13);
  await ins(Hmy, 'refuser l\'injustice', 'Fierté/Indignation', "Ne pas accepter un traitement injuste — proteger sa dignite.", 14);

  // Concept 4: Venin/Poison (2 sens)
  await ins(Hmy, 'venin', 'Venin/Poison', "Substance nocive emise par un animal (scorpion, serpent). Le venin sort de l'animal et atteint la victime.", 15);
  await ins(Hmy, 'aiguillon', 'Venin/Poison', "L'organe par lequel le venin est injecte.", 16);

  console.log('[Hmy] 16 sens → 4 concepts\n');

  // ============================================================
  // 2. ana2 (أ ن ي) — temps/maturité/bouillant (sens différent du interrogatif)
  // Lane's broot=AnY (partie non-interrogative)
  // corpus.quran.com: ~4 occurrences (آنية 88:5, آن 55:44, إناه 33:53, أنى 57:16)
  // ============================================================
  console.log('--- ROOT ana2 (أ ن ي — sens temporel/bouillant) ---');
  const { data: ana2_wa, error: e2 } = await sb.from('word_analyses').insert({
    word_key: 'ana2', root_ar: 'أ ن ي', total_occurrences: 4
  }).select().single();
  if (e2) { console.log('ERR:', e2.message); return; }
  const ana2 = ana2_wa.id;
  console.log(`Created ana2 id=${ana2}`);

  // Concept 1: Maturité/Cuisson (5 sens)
  await ins(ana2, 'atteindre sa maturité', 'Maturité/Cuisson', "Etat de ce qui a atteint son point final, son terme. La maturite est un etat interieur et definitif — la chose a parcouru tout son processus de developpement et a atteint sa pleine forme. C'est un etat qui resulte d'un processus temporel : il faut du temps pour atteindre la maturite. Le Lane's donne : « il est arrive a son temps plein, a son etat final, a la maturite ».", 1);
  await ins(ana2, 'être cuit à point', 'Maturité/Cuisson', "Se dit de la nourriture qui a atteint la cuisson complete.", 2);
  await ins(ana2, 'bouillir', 'Maturité/Cuisson', "Se dit de l'eau chaude qui a atteint le degre extreme de chaleur.", 3);
  await ins(ana2, 'être brûlant', 'Maturité/Cuisson', "Se dit de l'eau chauffee au plus haut degre. Le Lane's precise : l'eau chaude est devenue chauffee au degre le plus extreme.", 4);
  await ins(ana2, 'mûrir', 'Maturité/Cuisson', "Se dit d'un fruit ou d'une plante qui a atteint son terme.", 5);

  // Concept 2: Temps/Échéance (3 sens)
  await ins(ana2, 'le temps est venu', 'Temps/Échéance', "Le moment arrive, l'echeance se presente. Le temps est un repere exterieur et objectif — il arrive independamment de la volonte de la personne. Le Lane's donne : « son temps est venu, il etait proche ». C'est une realite impersonnelle : le temps ne se force pas, il se presente quand il est la.", 6);
  await ins(ana2, 'être proche', 'Temps/Échéance', "Le moment qui approche, qui est imminent.", 7);
  await ins(ana2, 'être présent', 'Temps/Échéance', "Le moment qui est la, maintenant.", 8);

  // Concept 3: Patience/Délibération (3 sens)
  await ins(ana2, 'agir avec patience', 'Patience/Délibération', "Prendre son temps avant d'agir, ne pas se presser. La patience est un etat interieur de maitrise — celui qui patiente choisit de ne pas agir impulsivement. C'est un acte volontaire de retenue temporelle.", 9);
  await ins(ana2, 'agir avec douceur', 'Patience/Délibération', "Proceder avec moderation et gentillesse, sans brusquerie.", 10);
  await ins(ana2, 'attendre', 'Patience/Délibération', "Rester sans agir en attendant le bon moment.", 11);

  // Concept 4: Retard/Arriération (2 sens)
  await ins(ana2, 'être en retard', 'Retard/Arriération', "Se trouver apres son temps, etre arrive trop tard. Le retard est l'inverse du temps venu — au lieu d'etre a l'heure, on est apres.", 12);
  await ins(ana2, 'tarder', 'Retard/Arriération', "Mettre du temps avant de se presenter ou d'agir.", 13);

  console.log('[ana2] 13 sens → 4 concepts\n');

  // ============================================================
  // 3. Dre2 (ض ر ع) — implorer, mamelle, plante épineuse
  // Lane's broot=DrE : ~8 entries
  // corpus.quran.com: ~7 occurrences
  // ============================================================
  console.log('--- ROOT Dre2 (ض ر ع) ---');
  const { data: Dre2_wa, error: e3 } = await sb.from('word_analyses').insert({
    word_key: 'Dre2', root_ar: 'ض ر ع', total_occurrences: 7
  }).select().single();
  if (e3) { console.log('ERR:', e3.message); return; }
  const Dre2 = Dre2_wa.id;
  console.log(`Created Dre2 id=${Dre2}`);

  // Concept 1: Humilité/Imploration (5 sens)
  await ins(Dre2, 'être humble', 'Humilité/Imploration', "Etat de celui qui se met en position basse devant un autre. L'humilite est un etat interieur de soumission volontaire — celui qui est humble reconnait sa faiblesse. C'est un etat qui sort de la personne et se manifeste dans son attitude corporelle et ses paroles. Le Lane's donne : « il etait, ou devint, humble, soumis ». L'imploration est l'extension de l'humilite : celui qui implore se met en position basse pour demander.", 1);
  await ins(Dre2, 'implorer', 'Humilité/Imploration', "Demander avec insistance et soumission.", 2);
  await ins(Dre2, 'supplier', 'Humilité/Imploration', "Demander humblement en montrant sa faiblesse.", 3);
  await ins(Dre2, 'être faible', 'Humilité/Imploration', "Etat de celui qui n'a pas de force — l'origine physique de l'humilite.", 4);
  await ins(Dre2, 'se soumettre', 'Humilité/Imploration', "Accepter la position basse devant un plus fort.", 5);

  // Concept 2: Mamelle/Allaitement (3 sens)
  await ins(Dre2, 'mamelle', 'Mamelle/Allaitement', "Organe du corps qui produit le lait. La mamelle est un element physique exterieur et visible, lie a la nourriture et a la survie du petit. Le Lane's donne le sens premier physique : le petit qui prend la mamelle de sa mere. Le lien entre la mamelle et l'humilite est le geste du petit qui se met en position basse pour teter.", 6);
  await ins(Dre2, 'téter', 'Mamelle/Allaitement', "L'acte du petit animal qui prend la mamelle de sa mere.", 7);
  await ins(Dre2, 'aux mamelles abondantes', 'Mamelle/Allaitement', "Se dit d'une brebis ou d'une femme aux mamelles grandes.", 8);

  // Concept 3: Plante épineuse/Fourrage (3 sens)
  await ins(Dre2, 'plante épineuse sèche', 'Plante épineuse/Fourrage', "Plante a grosses epines qui, une fois seche, devient un mauvais fourrage sur lequel le betail ne peut ni prendre de la chair ni de la graisse. Le Lane's precise : « en arabe du Hijaz, on appelle dari' la plante shibriqi quand elle est seche. C'est une plante dont le betail ne s'approche pas a cause de sa mauvaise qualite ». Cette plante est l'image d'une nourriture qui ne nourrit pas — elle occupe l'estomac sans apporter de bienfait.", 9);
  await ins(Dre2, 'fourrage sec', 'Plante épineuse/Fourrage', "Herbage sec de toute espece d'arbre, en particulier les plantes epineuses.", 10);
  await ins(Dre2, 'plante dans eau stagnante', 'Plante épineuse/Fourrage', "Plante qui pousse dans une eau alteree, avec des racines qui n'atteignent pas le sol.", 11);

  // Concept 4: Ressemblance (1 sens)
  await ins(Dre2, 'ressembler', 'Sens isolé/Ressemblance', "Etre semblable a un autre — le Lane's mentionne cette extension.", 12);

  console.log('[Dre2] 12 sens → 4 concepts\n');

  // ============================================================
  // DAILY PHRASES
  // ============================================================
  console.log('--- DAILY PHRASES ---');

  await daily(Hmy, 'protéger', 'حَمَى', 'ḥamā', [
    "Le gardien protege l'entree du batiment jour et nuit.",
    "Elle a protege son enfant de la pluie avec son manteau.",
    "Ce mur protege le jardin du vent froid."
  ]);

  await daily(ana2, 'bouillir', 'آنِيَة', 'āniya', [
    "L'eau a bouilli, elle est prete pour le the.",
    "Attends que la soupe atteigne son point de cuisson.",
    "Le lait est devenu brulant a force de chauffer."
  ]);

  await daily(Dre2, 'implorer', 'ضَرَعَ', 'ḍaraʿa', [
    "Il a implore son voisin de l'aider a porter ses affaires.",
    "L'enfant supplie sa mere de le laisser jouer dehors.",
    "Ils se sont humilies devant le juge pour obtenir la clemence."
  ]);

  console.log('\n=== ÉTAPE 2 TERMINÉE ===');
  console.log(`3 racines créées: Hmy(${Hmy}), ana2(${ana2}), Dre2(${Dre2})`);
})();
