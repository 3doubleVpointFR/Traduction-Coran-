// Pipeline S90 — Étape 2 : Création des 5 racines manquantes
// kbd (كبد), lbd (لبد), njd (نجد), shfh (شفه), Ans (أنس)
// + Fix wld(2576) root_ar=null

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function insertMeaning(analysis_id, sense, concept, description, display_order) {
  const { error } = await sb.from('word_meanings').insert({
    analysis_id, sense, concept, description,
    meaning_type: 'etymology', display_order,
    status: 'pending', occ_count: 0, occ_refs: []
  });
  if (error) console.log(`  ERROR inserting ${sense}: ${error.message}`);
  else console.log(`  ✓ ${sense} → [${concept}]`);
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysis_id);
  if (count > 0) { console.log(`  Daily SKIP (${count} exist) for id=${analysis_id}`); return; }
  const rows = french.map(fr => ({ analysis_id, sense, arabic, phon, french: fr }));
  await sb.from('word_daily').insert(rows);
  console.log(`  ✓ ${french.length} daily phrases`);
}

(async () => {
  console.log('=== ÉTAPE 2 : CRÉATION DES RACINES MANQUANTES ===\n');

  // ============================================================
  // 1. kbd (كبد) — foie, difficulté, milieu, endurance
  // Lane's: 14 entries. Quran 90:4
  // ============================================================
  console.log('--- ROOT kbd (ك ب د) ---');
  const { data: kbd_wa, error: kbd_err } = await sb.from('word_analyses').insert({
    word_key: 'kbd', root_ar: 'ك ب د', total_occurrences: 1
  }).select().single();
  if (kbd_err) { console.log('ERROR:', kbd_err.message); return; }
  const kbd = kbd_wa.id;
  console.log(`Created kbd id=${kbd}`);

  // Concept 1: Foie/Organe (3 sens)
  await insertMeaning(kbd, 'foie', 'Foie/Organe', "Organe vital situé au centre du tronc, dans la partie supérieure droite de l'abdomen. Le foie est une réalité anatomique concrète et permanente. C'est le siège physique de la vitalité — les Arabes considéraient qu'un froid extrême ne peut atteindre que les foies, signe de sa position centrale et vulnérable.", 1);
  await insertMeaning(kbd, 'douleur au foie', 'Foie/Organe', "Souffrance localisée dans l'organe hépatique.", 2);
  await insertMeaning(kbd, 'côté du foie', 'Foie/Organe', "La zone extérieure du corps correspondant à l'emplacement du foie.", 3);

  // Concept 2: Difficulté/Épreuve (4 sens)
  await insertMeaning(kbd, 'difficulté', 'Difficulté/Épreuve', "État de souffrance imposée de l'extérieur qui enveloppe la personne et la contraint. La difficulté est un poids qui pèse sur celui qui la subit — on tombe dans la difficulté, on n'y va pas volontairement. C'est un état subi, permanent tant que la cause persiste, et qui affecte la personne dans sa totalité.", 4);
  await insertMeaning(kbd, 'détresse', 'Difficulté/Épreuve', "Souffrance intense causée par une situation oppressante.", 5);
  await insertMeaning(kbd, 'affliction', 'Difficulté/Épreuve', "Épreuve qui s'abat sur quelqu'un et le comprime.", 6);
  await insertMeaning(kbd, 'le froid les a affectés sévèrement', 'Difficulté/Épreuve', "Action extérieure qui frappe et contraint.", 7);

  // Concept 3: Endurance/Lutte (3 sens)
  await insertMeaning(kbd, 'endurer', 'Endurance/Lutte', "Acte actif de résistance face à un obstacle extérieur. L'endurance est un effort intérieur continu dirigé contre une difficulté — la personne ne subit plus passivement mais résiste activement. C'est directionnel (vers l'obstacle) et requiert de la volonté.", 8);
  await insertMeaning(kbd, 'lutter contre la difficulté', 'Endurance/Lutte', "Affronter activement ce qui oppresse.", 9);
  await insertMeaning(kbd, 'affronter les ténèbres de la nuit', 'Endurance/Lutte', "Braver l'obscurité et ses dangers.", 10);

  // Concept 4: Centre/Milieu (5 sens)
  await insertMeaning(kbd, 'milieu de toute chose', 'Centre/Milieu', "Position spatiale désignant le cœur ou le point central d'une chose. Le centre est ce qui est à la croisée, au point le plus dense et le plus important. Le milieu du ciel est le zénith, le milieu de la terre est son intérieur profond, le milieu du désert est sa partie la plus vaste.", 11);
  await insertMeaning(kbd, 'intérieur de la terre', 'Centre/Milieu', "Les profondeurs et les richesses enfouies au cœur du sol.", 12);
  await insertMeaning(kbd, 'milieu du ciel (zénith)', 'Centre/Milieu', "Le point culminant du soleil dans sa course.", 13);
  await insertMeaning(kbd, 'se diriger vers le centre', 'Centre/Milieu', "Tendre vers le cœur d'un lieu ou d'une affaire.", 14);
  await insertMeaning(kbd, 'poignée de l\'arc', 'Centre/Milieu', "La partie centrale de l'arc que la main saisit.", 15);

  // Concept 5: Épaisseur/Grosseur (3 sens)
  await insertMeaning(kbd, 'être gros au milieu du corps', 'Épaisseur/Grosseur', "Qualité physique de volume et de densité au centre d'une chose. L'épaisseur est un état permanent de ce qui est dense ou volumineux en son milieu — la chose prend de la place et résiste au mouvement.", 16);
  await insertMeaning(kbd, 'lait épaissi comme du foie', 'Épaisseur/Grosseur', "Liquide devenu dense et tremblant par coagulation.", 17);
  await insertMeaning(kbd, 'homme lent à cause de sa corpulence', 'Épaisseur/Grosseur', "Personne dont le volume au milieu du corps ralentit la marche.", 18);

  console.log(`[kbd] 18 sens → 5 concepts\n`);

  // ============================================================
  // 2. lbd (لبد) — adhérer, compact, feutre, abondant
  // Lane's: 23 entries. Quran 90:6, 72:19
  // ============================================================
  console.log('--- ROOT lbd (ل ب د) ---');
  const { data: lbd_wa, error: lbd_err } = await sb.from('word_analyses').insert({
    word_key: 'lbd', root_ar: 'ل ب د', total_occurrences: 2
  }).select().single();
  if (lbd_err) { console.log('ERROR:', lbd_err.message); return; }
  const lbd = lbd_wa.id;
  console.log(`Created lbd id=${lbd}`);

  // Concept 1: Adhésion/Fixation (5 sens)
  await insertMeaning(lbd, 'adhérer au sol', 'Adhésion/Fixation', "Acte de se fixer à une surface ou un lieu par un mouvement vers le bas qui aboutit à un état stable. L'adhésion est un passage du mobile à l'immobile — la chose ou la personne se colle et ne bouge plus. C'est permanent tant que rien ne détache.", 1);
  await insertMeaning(lbd, 'se coucher sur sa poitrine (oiseau)', 'Adhésion/Fixation', "S'aplatir contre le sol pour se dissimuler.", 2);
  await insertMeaning(lbd, 'rester fixé et observer', 'Adhésion/Fixation', "Demeurer immobile en un point pour regarder.", 3);
  await insertMeaning(lbd, 'demeurer en un lieu', 'Adhésion/Fixation', "Séjourner et s'attacher à un endroit.", 4);
  await insertMeaning(lbd, 'chameau étouffé par excès de nourriture', 'Adhésion/Fixation', "Animal immobilisé par la masse ingérée.", 5);

  // Concept 2: Compactage/Feutre (5 sens)
  await insertMeaning(lbd, 'laine compactée', 'Compactage/Feutre', "Résultat physique de l'agglomération de fibres en une masse solide et cohérente. Le compactage transforme des éléments épars en un tout unifié — les fils de laine ou de poils s'enchevêtrent pour former une surface résistante. C'est un état permanent du matériau transformé.", 6);
  await insertMeaning(lbd, 'feutre', 'Compactage/Feutre', "Tissu obtenu par compression de fibres animales.", 7);
  await insertMeaning(lbd, 'tapis de feutre', 'Compactage/Feutre', "Revêtement de sol en matériau compacté.", 8);
  await insertMeaning(lbd, 'tapis de selle', 'Compactage/Feutre', "Protection placée sous la selle, faite de feutre.", 9);
  await insertMeaning(lbd, 'pluie compactant le sol', 'Compactage/Feutre', "L'eau qui tasse et durcit la surface de la terre.", 10);

  // Concept 3: Abondance/Accumulation (3 sens)
  await insertMeaning(lbd, 'richesse abondante', 'Abondance/Accumulation', "Quantité accumulée qui forme une masse imposante dont on ne craint pas l'épuisement. L'abondance est un état de surplus — tellement de choses rassemblées qu'elles forment un bloc compact et inépuisable. C'est un état permanent tant que rien n'entame la réserve.", 11);
  await insertMeaning(lbd, 'richesse collectée', 'Abondance/Accumulation', "Biens rassemblés en un tout.", 12);
  await insertMeaning(lbd, 'foule compacte', 'Abondance/Accumulation', "Groupe de personnes agglomérées les unes sur les autres.", 13);

  // Concept 4: Crinière/Lion (2 sens)
  await insertMeaning(lbd, 'crinière du lion', 'Crinière/Lion', "Masse de poils enchevêtrés entre les épaules du lion, symbole d'invulnérabilité. La crinière est le résultat naturel du compactage des poils — elle protège la zone vitale et inspire la crainte.", 14);
  await insertMeaning(lbd, 'le lion', 'Crinière/Lion', "L'animal lui-même, désigné par sa crinière compacte.", 15);

  console.log(`[lbd] 15 sens → 4 concepts\n`);

  // ============================================================
  // 3. njd (نجد) — élévation, voie, courage, victoire, détresse
  // Lane's: 28 entries. Quran 90:10
  // ============================================================
  console.log('--- ROOT njd (ن ج د) ---');
  const { data: njd_wa, error: njd_err } = await sb.from('word_analyses').insert({
    word_key: 'njd', root_ar: 'ن ج د', total_occurrences: 2
  }).select().single();
  if (njd_err) { console.log('ERROR:', njd_err.message); return; }
  const njd = njd_wa.id;
  console.log(`Created njd id=${njd}`);

  // Concept 1: Élévation/Hauteur (4 sens)
  await insertMeaning(njd, 'terre élevée', 'Élévation/Hauteur', "Position physique en hauteur par rapport au terrain environnant. L'élévation est un état permanent du relief qui domine et surplombe ce qui l'entoure. Le haut plateau est dur, rocailleux, et se dresse comme une barrière visible de loin.", 1);
  await insertMeaning(njd, 'haut plateau', 'Élévation/Hauteur', "Terre haute, dure et rocailleuse.", 2);
  await insertMeaning(njd, 'région du Nejd', 'Élévation/Hauteur', "La partie haute de la péninsule arabique, opposée à la plaine côtière.", 3);
  await insertMeaning(njd, 'lieu sans arbres', 'Élévation/Hauteur', "Terrain élevé et dénudé.", 4);

  // Concept 2: Voie/Chemin (4 sens)
  await insertMeaning(njd, 'route apparente et élevée', 'Voie/Chemin', "Direction visible et praticable qui se distingue du terrain environnant par sa clarté. La voie est un tracé évident que l'on peut suivre — elle est manifeste, apparente, et mène quelque part de précis. Le duel « les deux voies » désigne les deux directions possibles, visibles et claires.", 5);
  await insertMeaning(njd, 'les deux voies (bien et mal)', 'Voie/Chemin', "Les deux directions clairement visibles entre lesquelles l'homme choisit.", 6);
  await insertMeaning(njd, 'chemin dans une montagne', 'Voie/Chemin', "Sentier tracé à travers un relief élevé.", 7);
  await insertMeaning(njd, 'chose apparente et manifeste', 'Voie/Chemin', "Ce qui est clair et visible pour tous.", 8);

  // Concept 3: Courage/Vaillance (3 sens)
  await insertMeaning(njd, 'être courageux et vigoureux', 'Courage/Vaillance', "Force intérieure qui pousse à affronter l'obstacle et à accomplir ce que d'autres ne peuvent pas. Le courage est un état d'âme actif et permanent chez celui qui le possède — il ne fuit pas la difficulté mais l'affronte. C'est une qualité qui se manifeste dans l'action.", 9);
  await insertMeaning(njd, 'vaillant dans les affaires difficiles', 'Courage/Vaillance', "Celui qui excelle dans ce qui est ardu.", 10);
  await insertMeaning(njd, 'celui qui surmonte les difficultés', 'Courage/Vaillance', "Expert qui maîtrise les affaires par son expérience.", 11);

  // Concept 4: Victoire/Domination (2 sens)
  await insertMeaning(njd, 'vaincre', 'Victoire/Domination', "Acte extérieur de prendre le dessus sur l'autre. La domination sort du vainqueur et atteint le vaincu — c'est directionnel et ponctuel comme acte, mais permanent comme résultat.", 12);
  await insertMeaning(njd, 'conquérir et soumettre', 'Victoire/Domination', "Exercer sa force pour dominer l'adversaire.", 13);

  // Concept 5: Détresse/Affliction (3 sens)
  await insertMeaning(njd, 'être affligé par le chagrin', 'Détresse/Affliction', "État intérieur de souffrance causé par l'anxiété ou le chagrin. La détresse est une émotion qui reste chez celui qui la ressent — elle ne sort pas vers l'extérieur mais comprime de l'intérieur.", 14);
  await insertMeaning(njd, 'suer d\'anxiété ou de travail', 'Détresse/Affliction', "Manifestation physique de l'effort ou du tourment intérieur.", 15);
  await insertMeaning(njd, 'secours et assistance', 'Détresse/Affliction', "Aide apportée à celui qui est en difficulté.", 16);

  // Concept 6: Ornement/Mobilier (2 sens)
  await insertMeaning(njd, 'mobilier de maison', 'Ornement/Mobilier', "Ensemble des objets qui décorent et meublent un intérieur — tapis, coussins, rideaux. L'ornement transforme un espace vide en lieu habité et accueillant.", 17);
  await insertMeaning(njd, 'décorer une tente', 'Ornement/Mobilier', "Garnir un espace de meubles et d'ornements.", 18);

  // Concept 7: Sein/Poitrine (1 sens)
  await insertMeaning(njd, 'sein de femme', 'Sein/Poitrine', "Partie proéminente de la poitrine féminine. Le Lane's mentionne cette lecture alternative pour le verset 90:10 — les deux seins plutôt que les deux voies.", 19);

  console.log(`[njd] 19 sens → 7 concepts\n`);

  // ============================================================
  // 4. shfh (شفه) — lèvre, parole, consommation, réputation
  // Lane's: 11 entries. Quran 90:9
  // ============================================================
  console.log('--- ROOT shfh (ش ف ه) ---');
  const { data: shfh_wa, error: shfh_err } = await sb.from('word_analyses').insert({
    word_key: 'shfh', root_ar: 'ش ف ه', total_occurrences: 1
  }).select().single();
  if (shfh_err) { console.log('ERROR:', shfh_err.message); return; }
  const shfh = shfh_wa.id;
  console.log(`Created shfh id=${shfh}`);

  // Concept 1: Lèvre/Bouche (3 sens)
  await insertMeaning(shfh, 'lèvre', 'Lèvre/Bouche', "Organe physique qui couvre la bouche, la frontière entre l'intérieur et l'extérieur du corps. Les deux lèvres sont les couvercles de la bouche chez l'être humain — elles retiennent ou libèrent la parole, la nourriture, le souffle. C'est une réalité anatomique permanente, propre à l'homme.", 1);
  await insertMeaning(shfh, 'les deux couvercles de la bouche', 'Lèvre/Bouche', "Les lèvres supérieure et inférieure qui ferment la bouche.", 2);
  await insertMeaning(shfh, 'frapper la lèvre de quelqu\'un', 'Lèvre/Bouche', "Atteindre physiquement cet organe.", 3);

  // Concept 2: Parole/Expression (3 sens)
  await insertMeaning(shfh, 'parler face à face', 'Parole/Expression', "Acte de communiquer lèvre contre lèvre, sans intermédiaire. La parole est ce qui sort des lèvres pour atteindre l'autre — c'est directionnel, de celui qui parle vers celui qui écoute. Le face-à-face rend la communication directe et intime.", 4);
  await insertMeaning(shfh, 'un mot (fille de la lèvre)', 'Parole/Expression', "L'unité de parole qui naît sur les lèvres.", 5);
  await insertMeaning(shfh, 'être proche d\'une affaire', 'Parole/Expression', "Approcher quelque chose au point de le toucher des lèvres.", 6);

  // Concept 3: Consommation/Épuisement (4 sens)
  await insertMeaning(shfh, 'eau fréquentée par beaucoup de buveurs', 'Consommation/Épuisement', "Acte de puiser dans une ressource par de nombreuses bouches jusqu'à l'épuiser. La consommation réduit ce qui est consommé — chaque lèvre qui boit diminue la quantité restante. C'est un processus collectif et progressif.", 7);
  await insertMeaning(shfh, 'nourriture mangée par beaucoup', 'Consommation/Épuisement', "Repas diminué par le nombre de mangeurs.", 8);
  await insertMeaning(shfh, 'importuner par la demande jusqu\'à épuiser', 'Consommation/Épuisement', "Harceler quelqu'un de demandes jusqu'à consumer ses biens.", 9);
  await insertMeaning(shfh, 'la famille a presque consommé mes biens', 'Consommation/Épuisement', "Les bouches à nourrir qui épuisent les ressources.", 10);

  // Concept 4: Réputation/Renommée (2 sens)
  await insertMeaning(shfh, 'louange parmi les gens', 'Réputation/Renommée', "Ce que les lèvres des autres disent de quelqu'un. La réputation est un état extérieur — elle vit sur les lèvres des autres, pas chez la personne elle-même. Elle peut être bonne ou mauvaise.", 11);
  await insertMeaning(shfh, 'bonne réputation parmi nous', 'Réputation/Renommée', "L'estime publique qui circule de bouche en bouche.", 12);

  console.log(`[shfh] 12 sens → 4 concepts\n`);

  // ============================================================
  // 5. Ans (أنس) — humanité, sociabilité, joie, compagnon, perception
  // Lane's: 29 entries. Quran: ~97 occurrences
  // ============================================================
  console.log('--- ROOT Ans (أ ن س) ---');
  const { data: Ans_wa, error: Ans_err } = await sb.from('word_analyses').insert({
    word_key: 'Ans', root_ar: 'أ ن س', total_occurrences: 97
  }).select().single();
  if (Ans_err) { console.log('ERROR:', Ans_err.message); return; }
  const Ans = Ans_wa.id;
  console.log(`Created Ans id=${Ans}`);

  // Concept 1: Humanité/Espèce (5 sens)
  await insertMeaning(Ans, 'êtres humains', 'Humanité/Espèce', "L'espèce humaine en tant que catégorie d'êtres vivants, opposée aux djinns. L'humanité est un état permanent et essentiel — on est humain par nature, pas par choix. C'est ce qui distingue fondamentalement l'homme des autres créatures visibles et invisibles.", 1);
  await insertMeaning(Ans, 'être humain', 'Humanité/Espèce', "L'individu humain en tant que membre de l'espèce.", 2);
  await insertMeaning(Ans, 'peuple résidant en un lieu', 'Humanité/Espèce', "Les habitants d'un endroit, la communauté humaine d'un territoire.", 3);
  await insertMeaning(Ans, 'domestique (opposé de sauvage)', 'Humanité/Espèce', "Ce qui est apprivoisé et familier, par opposition à ce qui est farouche.", 4);
  await insertMeaning(Ans, 'le côté gauche de l\'animal', 'Humanité/Espèce', "Le côté par lequel l'humain monte et trait — le côté « humain » de la bête.", 5);

  // Concept 2: Sociabilité/Familiarité (4 sens)
  await insertMeaning(Ans, 'être sociable et familier', 'Sociabilité/Familiarité', "Inclination naturelle vers la compagnie d'autrui, contraire de la sauvagerie et de l'isolement. La sociabilité est un état intérieur qui se manifeste dans la relation — elle sort de la personne sous forme de chaleur et d'aisance envers l'autre. C'est un trait permanent du caractère humain.", 6);
  await insertMeaning(Ans, 'être à l\'aise et tranquille avec quelqu\'un', 'Sociabilité/Familiarité', "État de confiance et d'absence de méfiance envers l'autre.", 7);
  await insertMeaning(Ans, 'rendre familier ou apprivoisé', 'Sociabilité/Familiarité', "Transformer le sauvage ou l'étranger en quelque chose de familier.", 8);
  await insertMeaning(Ans, 'ami choisi et compagnon intime', 'Sociabilité/Familiarité', "La personne avec qui on est le plus à l'aise.", 9);

  // Concept 3: Joie/Réconfort (3 sens)
  await insertMeaning(Ans, 'être réjoui par la compagnie', 'Joie/Réconfort', "Émotion intérieure de bonheur et d'apaisement ressentie en présence d'autrui. La joie est un état qui reste chez celui qui la ressent — c'est la compagnie de l'autre qui la déclenche, mais l'émotion appartient à celui qui la vit.", 10);
  await insertMeaning(Ans, 'se réjouir de quelqu\'un', 'Joie/Réconfort', "Trouver du plaisir dans la présence d'une personne.", 11);
  await insertMeaning(Ans, 'être consolé et apaisé', 'Joie/Réconfort', "Retrouver la tranquillité grâce à une présence rassurante.", 12);

  // Concept 4: Perception/Connaissance (3 sens)
  await insertMeaning(Ans, 'percevoir', 'Perception/Connaissance', "Acte de saisir le monde par les sens — voir, entendre, savoir. La perception est la faculté fondamentale qui permet à l'être conscient de connaître ce qui l'entoure. Certains grammairiens dérivent le nom « insân » de cette racine car l'humain est celui qui perçoit.", 13);
  await insertMeaning(Ans, 'voir et connaître', 'Perception/Connaissance', "Acquérir une connaissance par l'observation directe.", 14);
  await insertMeaning(Ans, 'pupille de l\'œil (insân al-ayn)', 'Perception/Connaissance', "Le point central de l'œil où se forme l'image — l'humain dans l'œil.", 15);

  // Concept 5: Oubli (1 sens)
  await insertMeaning(Ans, 'oubli (insiyân)', 'Oubli', "Certains grammairiens dérivent le mot « insân » du verbe « nasiya » (oublier), l'homme étant celui qui oublie. C'est une étymologie alternative contestée.", 16);

  console.log(`[Ans] 16 sens → 5 concepts\n`);

  // ============================================================
  // FIX: wld(2576) root_ar=null, occ=0
  // ============================================================
  console.log('--- FIX wld(2576) ---');
  const { error: wldErr } = await sb.from('word_analyses').update({
    root_ar: 'و ل د', total_occurrences: 102
  }).eq('id', 2576);
  if (wldErr) console.log('ERROR fixing wld:', wldErr.message);
  else console.log('✓ wld(2576) root_ar and occ fixed');

  // ============================================================
  // DAILY PHRASES for new roots
  // ============================================================
  console.log('\n--- DAILY PHRASES ---');
  await insertDaily(kbd, 'difficulté', 'كَبَد', 'kabad', [
    "La vie est pleine de difficultés, mais on apprend à les surmonter.",
    "Il a traversé cette épreuve avec une endurance remarquable.",
    "Chaque difficulté rencontrée renforce notre caractère."
  ]);
  await insertDaily(lbd, 'richesse abondante', 'لُبَد', 'lubad', [
    "Il a accumulé une richesse abondante au fil des années.",
    "Les ressources semblaient inépuisables, tant elles étaient compactes.",
    "La foule était si dense qu'on ne pouvait plus avancer."
  ]);
  await insertDaily(njd, 'route apparente et élevée', 'نَجْد', 'najd', [
    "Le chemin est clair devant toi, il suffit de le suivre.",
    "Il a choisi la voie la plus élevée et la plus difficile.",
    "Les deux directions étaient visibles, mais il fallait choisir."
  ]);
  await insertDaily(shfh, 'lèvre', 'شَفَة', 'shafa', [
    "Il a murmuré ces mots du bout des lèvres.",
    "Les paroles qui sortent de nos lèvres ont un poids.",
    "Elle n'a pas prononcé un seul mot — pas une fille de sa lèvre."
  ]);
  await insertDaily(Ans, 'êtres humains', 'إِنْس', 'ins', [
    "L'être humain est fait pour vivre en société.",
    "La familiarité entre les gens crée des liens durables.",
    "L'homme est sociable par nature, il cherche la compagnie."
  ]);

  console.log('\n=== ÉTAPE 2 TERMINÉE ===');
  console.log(`5 racines créées: kbd(${kbd}), lbd(${lbd}), njd(${njd}), shfh(${shfh}), Ans(${Ans})`);
  console.log('wld(2576) corrigé');
})();
