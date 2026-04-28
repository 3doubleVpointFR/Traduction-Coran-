// Pipeline S89 v11-20 — Étape 2 : Création des 3 racines manquantes
// Sbb (ص ب ب), swT (س و ط), jmm (ج م م)
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
  console.log('=== ÉTAPE 2 : 3 RACINES MANQUANTES S89 v11-20 ===\n');

  // ============================================================
  // 1. Sbb (ص ب ب) — verser, s'écouler, amour passionné
  // Lane's broot=Sb : ~20 entries
  // corpus.quran.com: 2 occurrences (صَبَّ 89:13, يَنصَبّ)
  // ============================================================
  console.log('--- ROOT Sbb (ص ب ب) ---');
  const { data: Sbb_wa, error: e1 } = await sb.from('word_analyses').insert({
    word_key: 'Sbb', root_ar: 'ص ب ب', total_occurrences: 2
  }).select().single();
  if (e1) { console.log('ERR:', e1.message); return; }
  const Sbb = Sbb_wa.id;
  console.log(`Created Sbb id=${Sbb}`);

  // Concept 1: Versement/Écoulement (7 sens)
  await ins(Sbb, 'verser', 'Versement/Écoulement', "Acte de faire couler un liquide d'un contenant vers le bas. Le versement est un acte extérieur, directionnel (de haut en bas) et soudain — le liquide sort de celui qui verse et atteint ce qui est en dessous. C'est un mouvement gravitaire qui ne peut être retenu une fois amorcé.", 1);
  await ins(Sbb, 's\'écouler', 'Versement/Écoulement', "Se dit de l'eau qui coule d'elle-même, sans intervention humaine.", 2);
  await ins(Sbb, 'couler de la montagne', 'Versement/Écoulement', "L'eau qui descend peu à peu de la montagne.", 3);
  await ins(Sbb, 'payer d\'un coup', 'Versement/Écoulement', "Extension métaphorique : verser une somme d'argent d'un seul coup.", 4);
  await ins(Sbb, 'baisser la corde dans le puits', 'Versement/Écoulement', "Faire descendre la corde — mouvement de haut en bas.", 5);
  await ins(Sbb, 'suer', 'Versement/Écoulement', "La sueur qui coule du corps.", 6);
  await ins(Sbb, 'saigner', 'Versement/Écoulement', "Le sang qui coule d'une blessure.", 7);

  // Concept 2: Penchant/Descente (3 sens)
  await ins(Sbb, 'descendre un versant', 'Penchant/Descente', "Prendre le chemin d'une pente descendante. La descente est un mouvement directionnel et continu — une fois qu'on descend, la gravité accompagne le mouvement. C'est un état extérieur et spatial, lié à la topographie.", 8);
  await ins(Sbb, 'pente', 'Penchant/Descente', "Terrain en déclivité par lequel on descend.", 9);
  await ins(Sbb, 'ne pas se laver la tête', 'Penchant/Descente', "Laisser ses cheveux retomber sans les relever — sens physique.", 10);

  // Concept 3: Amour/Désir ardent (3 sens)
  await ins(Sbb, 'amour passionné', 'Amour/Désir ardent', "État intérieur d'attachement intense qui consume celui qui le ressent. L'amour passionné reste chez celui qui aime — il ne sort pas vers l'autre comme un acte, il brûle en dedans. C'est un état permanent et involontaire, une soif qui ne s'étanche pas.", 11);
  await ins(Sbb, 'désirer ardemment', 'Amour/Désir ardent', "Éprouver un désir intense et douloureux.", 12);
  await ins(Sbb, 'tendresse du désir', 'Amour/Désir ardent', "La douceur mêlée à l'ardeur du désir.", 13);

  // Concept 4: Dispersion/Anéantissement (2 sens)
  await ins(Sbb, 'anéantir', 'Dispersion/Anéantissement', "Faire disparaître complètement une chose. L'anéantissement est un acte extérieur et définitif — ce qui est anéanti ne revient pas. C'est l'aboutissement ultime du versement : tout est déversé jusqu'à ce qu'il ne reste rien.", 14);
  await ins(Sbb, 'disperser', 'Dispersion/Anéantissement', "Éparpiller une armée ou des biens dans toutes les directions.", 15);

  console.log('[Sbb] 15 sens → 4 concepts\n');

  // ============================================================
  // 2. swT (س و ط) — mélanger, fouet
  // Lane's broot=swT : ~12 entries
  // corpus.quran.com: 1 occurrence (سَوْطَ 89:13)
  // ============================================================
  console.log('--- ROOT swT (س و ط) ---');
  const { data: swT_wa, error: e2 } = await sb.from('word_analyses').insert({
    word_key: 'swT', root_ar: 'س و ط', total_occurrences: 1
  }).select().single();
  if (e2) { console.log('ERR:', e2.message); return; }
  const swT = swT_wa.id;
  console.log(`Created swT id=${swT}`);

  // Concept 1: Mélange/Agitation (4 sens)
  await ins(swT, 'mélanger', 'Mélange/Agitation', "Acte de mettre deux choses ensemble dans un récipient puis de les battre avec la main jusqu'à ce qu'elles se confondent. Le mélange est un acte extérieur et transformateur — les deux éléments perdent leur identité séparée pour devenir un tout nouveau. C'est un processus irréversible : une fois mélangées, les choses ne se séparent plus.", 1);
  await ins(swT, 'remuer', 'Mélange/Agitation', "Agiter le contenu d'un récipient avec un ustensile.", 2);
  await ins(swT, 'confondre', 'Mélange/Agitation', "Se dit d'une affaire qui devient embrouillée et confuse.", 3);
  await ins(swT, 'être mélangé', 'Mélange/Agitation', "État de ce qui est devenu un mélange indistinct.", 4);

  // Concept 2: Fouet/Correction (4 sens)
  await ins(swT, 'fouet', 'Fouet/Correction', "Lanière de cuir tressée avec laquelle on frappe. Le fouet est un objet extérieur, directionnel (il part de celui qui frappe et atteint ce qui est frappé) et violent. Le Lane's explique que le fouet est ainsi nommé parce qu'il mélange la chair avec le sang — le nom même du fouet vient du mélange que produit l'impact.", 5);
  await ins(swT, 'frapper avec un fouet', 'Fouet/Correction', "L'acte de donner des coups de fouet.", 6);
  await ins(swT, 'celui qui porte le fouet', 'Fouet/Correction', "L'officier de police qui tient le fouet.", 7);
  await ins(swT, 'ustensile pour remuer', 'Fouet/Correction', "Bâton ou outil servant à mélanger — lien entre le fouet et l'agitation.", 8);

  // Concept 3: Sens isolé/Plante (1 sens)
  await ins(swT, 'tige de poireau', 'Sens isolé/Plante', "Les tiges que le poireau fait pousser, comparées à des lanières de fouet.", 9);

  console.log('[swT] 9 sens → 3 concepts\n');

  // ============================================================
  // 3. jmm (ج م م) — abondance, repos, chevelure
  // Lane's broot=jm : ~30 entries
  // corpus.quran.com: 1 occurrence (جَمًّا 89:20)
  // ============================================================
  console.log('--- ROOT jmm (ج م م) ---');
  const { data: jmm_wa, error: e3 } = await sb.from('word_analyses').insert({
    word_key: 'jmm', root_ar: 'ج م م', total_occurrences: 1
  }).select().single();
  if (e3) { console.log('ERR:', e3.message); return; }
  const jmm = jmm_wa.id;
  console.log(`Created jmm id=${jmm}`);

  // Concept 1: Abondance/Accumulation (6 sens)
  await ins(jmm, 'être abondant', 'Abondance/Accumulation', "État de ce qui est en grande quantité. L'abondance est un état extérieur et observable — on voit que quelque chose est en grande quantité. C'est un état permanent tant que rien ne diminue la quantité. L'accumulation est le processus par lequel une chose devient abondante : elle se rassemble peu à peu jusqu'à devenir beaucoup.", 1);
  await ins(jmm, 'devenir nombreux', 'Abondance/Accumulation', "Se dit d'un groupe qui s'agrandit.", 2);
  await ins(jmm, 's\'accumuler', 'Abondance/Accumulation', "Se dit de l'eau qui se rassemble dans un puits après qu'on l'a tirée.", 3);
  await ins(jmm, 'remplir avec excès', 'Abondance/Accumulation', "Remplir une mesure au-delà de sa capacité — ce qui déborde au-dessus.", 4);
  await ins(jmm, 'beaucoup', 'Abondance/Accumulation', "Adjectif : en grande quantité. Le Coran dit : « ils aiment les biens d'un amour abondant » (89:20).", 5);
  await ins(jmm, 'péché abondant', 'Abondance/Accumulation', "Se dit d'une grande quantité de péchés.", 6);

  // Concept 2: Repos/Récupération (3 sens)
  await ins(jmm, 'se reposer', 'Repos/Récupération', "État de celui qui cesse toute activité pour récupérer ses forces. Le repos est un état intérieur et temporaire — on se repose pour pouvoir repartir. C'est le contraire du mouvement : l'immobilité choisie pour restaurer l'énergie.", 7);
  await ins(jmm, 'faire reposer un cheval', 'Repos/Récupération', "Laisser un cheval sans le monter pour qu'il retrouve ses forces.", 8);
  await ins(jmm, 'reposer le cœur', 'Repos/Récupération', "Consolider le cœur et compléter sa vivacité.", 9);

  // Concept 3: Chevelure/Tête (3 sens)
  await ins(jmm, 'chevelure abondante', 'Chevelure/Tête', "Masse de cheveux qui descend jusqu'aux épaules. La chevelure est un signe extérieur et visible d'abondance — le lien avec le sens premier est l'idée de quantité qui se rassemble et devient visible.", 10);
  await ins(jmm, 'crâne', 'Chevelure/Tête', "L'os qui contient le cerveau.", 11);
  await ins(jmm, 'parler indistinctement', 'Chevelure/Tête', "Parler de manière confuse, comme si la parole était emmêlée.", 12);

  // Concept 4: Sens isolé/Herbage (1 sens)
  await ins(jmm, 'herbage abondant', 'Sens isolé/Herbage', "Plante qui se dresse et se répand sur le terrain.", 13);

  console.log('[jmm] 13 sens → 4 concepts\n');

  // ============================================================
  // DAILY PHRASES — pour les nouvelles racines + celles sans daily
  // ============================================================
  console.log('--- DAILY PHRASES ---');

  await daily(Sbb, 'verser', 'صَبَّ', 'ṣabba', [
    "Il a versé l'eau dans le verre d'un seul geste.",
    "La pluie s'est versée sur la ville toute la nuit.",
    "Elle a versé le thé chaud pour ses invités."
  ]);

  await daily(swT, 'fouet', 'سَوْط', 'sawṭ', [
    "Le cavalier a donné un coup de fouet pour faire avancer le cheval.",
    "Le fouet claque dans l'air avant de toucher sa cible.",
    "Les lanières du fouet sont tressées les unes avec les autres."
  ]);

  await daily(jmm, 'être abondant', 'جَمّ', 'jamm', [
    "L'eau du puits est devenue abondante après les pluies.",
    "Il possède des biens en quantité abondante.",
    "Après le repos, son énergie était redevenue abondante."
  ]);

  // Daily pour racines existantes sans daily
  await daily(2024, 'guetter', 'رَصَد', 'raṣad', [
    "Le chasseur guette sa proie depuis des heures.",
    "Il est à l'affût, rien ne lui échappe.",
    "La sentinelle surveille le passage jour et nuit."
  ]);

  await daily(1470, 'généreux', 'كَرَم', 'karam', [
    "C'est un homme généreux qui donne sans compter.",
    "La générosité est une qualité des personnes nobles.",
    "Il a accueilli ses hôtes avec une générosité remarquable."
  ]);

  await daily(1726, 'goûter', 'طَعَام', 'ṭaʿām', [
    "Goûte ce plat, tu vas voir comme il est bon.",
    "La nourriture du marché avait une saveur excellente.",
    "Ils n'ont pas goûté à la nourriture depuis le matin."
  ]);

  await daily(1480, 'hériter', 'وَرِثَ', 'wariṯa', [
    "Il a hérité de la maison de son père.",
    "L'héritage a été partagé entre les enfants.",
    "Elle a hérité du savoir-faire de sa grand-mère."
  ]);

  await daily(473, 'rassembler', 'لَمَّ', 'lamma', [
    "Il a rassemblé toutes ses affaires avant de partir.",
    "Elle a tout ramassé d'un seul coup sans rien laisser.",
    "Le vent a rassemblé les feuilles en un seul tas."
  ]);

  console.log('\n=== ÉTAPE 2 TERMINÉE ===');
  console.log(`3 racines créées: Sbb(${Sbb}), swT(${swT}), jmm(${jmm})`);
})();
