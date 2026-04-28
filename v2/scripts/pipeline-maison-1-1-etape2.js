// Pipeline Maison — Verset 1:1 — ÉTAPE 2 — Sens étymologiques depuis Lane's SQLite
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  console.log('════════════════════════════════════════')
  console.log('  ÉTAPE 2 — VERSET 1:1 — SENS ÉTYMOLOGIQUES')
  console.log('════════════════════════════════════════')
  console.log('')

  // ═══ RACINE smw (249) — ism ═══
  console.log('[smw] 57 sens extraits du Lane\'s')
  const smwSenses = [
    // Sens physiques/concrets (du physique vers l'abstrait)
    { sense: 'être haut', sense_ar: 'سَمَا', description: 'Réalité physique de s\'élever dans l\'espace, de se dresser vers le haut. C\'est un mouvement vers le haut qui se manifeste extérieurement et qui est visible par les autres. État qui peut être permanent (une montagne est haute) ou temporel (quelqu\'un se lève).', display_order: 1 },
    { sense: 'forme vue de loin', sense_ar: 'سَمَاوَة', description: 'Apparence extérieure d\'une chose vue à distance, sa silhouette qui se découpe dans l\'espace. C\'est une réalité extérieure et visible : la forme existe dans le regard de celui qui observe. État permanent tant que l\'objet est visible.', display_order: 2 },
    { sense: 'lune qui se dresse', sense_ar: 'سَمَا', description: 'La lune au début de son cycle qui se dresse verticalement, pas couchée. Extension spécifique du sens de hauteur appliquée à un phénomène céleste. Réalité extérieure et observable.', display_order: 3 },
    { sense: 'ciel', sense_ar: 'سَمَاء', description: 'La voûte céleste, ce qui est au-dessus de la terre. Par extension : tout ce qui sert de toit ou de couverture au-dessus de quelque chose. Réalité extérieure, permanente, qui enveloppe et surplombe.', display_order: 4 },
    { sense: 'toit', sense_ar: 'سَمَاء', description: 'Tout ce qui couvre par-dessus : plafond, canopée, couverture supérieure. Extension concrète du ciel comme couverture. Réalité extérieure et fonctionnelle.', display_order: 5 },
    { sense: 'nuage', sense_ar: 'سَمَاء', description: 'Les nuages qui couvrent le ciel. Extension de la couverture céleste vers un phénomène météorologique concret.', display_order: 6 },
    { sense: 'pluie', sense_ar: 'سَمَاء', description: 'L\'eau qui tombe du ciel, la bonne pluie. Ce qui vient d\'en haut et atteint ce qui est en bas. Réalité extérieure qui descend d\'une source élevée vers un destinataire.', display_order: 7 },
    { sense: 'herbage', sense_ar: 'سَمَاء', description: 'Végétation qui pousse grâce à la pluie. Extension de la pluie vers son résultat concret. Ce qui pousse vers le haut depuis le sol.', display_order: 8 },
    { sense: 'dos', sense_ar: 'سَمَاء', description: 'La partie supérieure du corps, le dos. Partie haute d\'un être vivant. Réalité anatomique.', display_order: 9 },
    { sense: 'semelle supérieure', sense_ar: 'سَمَاء', description: 'Surface supérieure de la semelle, celle sur laquelle le pied se pose. Partie haute d\'un objet du quotidien.', display_order: 10 },
    { sense: 'pièce de tissu supérieure', sense_ar: 'سَمَاء', description: 'Morceau de tissu oblong qui se trouve sous la partie la plus haute d\'un vêtement ou d\'un objet textile.', display_order: 11 },
    { sense: 'chaussettes de chasseur', sense_ar: 'مِسْمَاة', description: 'Chaussettes portées par un chasseur pour se protéger de la chaleur du sol brûlant pendant la chasse aux gazelles. Objet concret et utilitaire.', display_order: 12 },
    // Sens d'action/mouvement
    { sense: 'se diriger vers', sense_ar: 'سَمَا', description: 'Se lever et se diriger vers quelqu\'un ou quelque chose. Mouvement actif et volontaire dirigé vers l\'extérieur. L\'agent décide de la direction. Action ponctuelle et intentionnelle.', display_order: 13 },
    { sense: 'lever le regard', sense_ar: 'سَمَا', description: 'Diriger ses yeux vers le haut, regarder avec hauteur. Peut être physique (regarder en l\'air) ou moral (regarder avec orgueil). Action qui part de l\'intérieur et se manifeste à l\'extérieur.', display_order: 14 },
    { sense: 'aspirer', sense_ar: 'سَمَا', description: 'Tendre vers des choses élevées, avoir l\'ambition d\'atteindre l\'éminence. État intérieur de désir dirigé vers le haut. C\'est une disposition permanente de l\'âme qui pousse vers la grandeur.', display_order: 15 },
    { sense: 'dépasser en nombre', sense_ar: 'سَمَا', description: 'Aller au-delà d\'une certaine quantité, excéder. Extension abstraite de la hauteur : ce qui dépasse le niveau attendu. Réalité extérieure et mesurable.', display_order: 16 },
    { sense: 'chasser', sense_ar: 'سَمَا', description: 'Sortir pour poursuivre le gibier, chasser les animaux sauvages dans leurs déserts. Action extérieure, active, dirigée vers une proie. Mouvement vers l\'extérieur.', display_order: 17 },
    { sense: 'étalon qui bondit', sense_ar: 'سَمَا', description: 'Le chameau mâle qui saute sur les femelles. Extension physique et animale du mouvement vers le haut.', display_order: 18 },
    { sense: 'désir qui resurgit', sense_ar: 'سَمَا', description: 'Un désir ou une nostalgie de l\'âme qui se réveille après avoir cessé. État intérieur qui remonte à la surface après une période de dormance.', display_order: 19 },
    // Sens de noblesse/rang
    { sense: 'noble', sense_ar: 'سَامٍ', description: 'Celui qui est haut en rang, élevé en dignité sociale. Extension abstraite de la hauteur physique vers la noblesse. C\'est un état permanent qui définit la position de quelqu\'un par rapport aux autres. Réalité sociale, extérieure et reconnue par les autres.', display_order: 20 },
    { sense: 'rivaliser en éminence', sense_ar: 'سَامَى', description: 'Entrer en compétition avec quelqu\'un pour la supériorité en rang, en gloire. Action extérieure et relationnelle : deux personnes se mesurent l\'une à l\'autre.', display_order: 21 },
    { sense: 'rival en éminence', sense_ar: 'سَمِيّ', description: 'Celui qui est au même niveau de compétition en rang et en gloire. Réalité relationnelle qui définit un rapport d\'égalité dans la hauteur.', display_order: 22 },
    { sense: 'égal', sense_ar: 'سَمِيّ', description: 'Celui qui est semblable, du même niveau. Extension du rival vers l\'idée d\'équivalence pure. Réalité relationnelle extérieure.', display_order: 23 },
    { sense: 'homonyme', sense_ar: 'سَمِيّ', description: 'Celui qui porte le même nom. Extension de l\'égalité vers le partage d\'un nom. Réalité sociale extérieure.', display_order: 24 },
    { sense: 'élever quelqu\'un', sense_ar: 'أَسْمَى', description: 'Faire monter quelqu\'un, l\'exalter. Forme IV : c\'est un acte dirigé vers l\'extérieur, qui change la position d\'un autre. Action causative et transitoire.', display_order: 25 },
    { sense: 'faire partir', sense_ar: 'أَسْمَى', description: 'Faire quitter une ville ou un pays à quelqu\'un. Action extérieure dirigée vers l\'autre. Mouvement imposé.', display_order: 26 },
    { sense: 'monter à cheval', sense_ar: 'تَسَامَى', description: 'Monter sur les chevaux. Forme VI : action réciproque ou collective. Mouvement vers le haut concret.', display_order: 27 },
    { sense: 'bounty', sense_ar: 'سَمَاء', description: 'Générosité, don venant d\'en haut. Extension de la pluie/ciel vers l\'idée de bienfaisance qui descend. Ce qui est donné depuis une position élevée vers celui qui est en bas.', display_order: 28 },
    { sense: 'choisir', sense_ar: 'اِسْتَمَى', description: 'Prendre en préférence, sélectionner. Extension abstraite de la chasse : on poursuit et on attrape le meilleur. Action intérieure de jugement qui se manifeste par un choix extérieur.', display_order: 29 },
    { sense: 'visiter', sense_ar: 'اِسْتَمَى', description: 'Rendre visite à quelqu\'un, percevoir en lui du bien. Action extérieure dirigée vers l\'autre. Mouvement relationnel.', display_order: 30 },
    // Sens de NOM — les plus pertinents pour le verset
    { sense: 'nommer', sense_ar: 'سَمَّى', description: 'Donner un nom à quelqu\'un ou quelque chose. Acte extérieur et créatif : celui qui nomme impose une identité à ce qui est nommé. Le nom sort de celui qui nomme et atteint ce qui est nommé. C\'est un acte fondateur car sans nom, rien ne peut être identifié ni distingué. Action ponctuelle dont le résultat est permanent.', display_order: 31 },
    { sense: 'prononcer le nom de Dieu', sense_ar: 'سَمَّى', description: 'Dire le nom de Dieu sur quelque chose (nourriture, sacrifice). Acte rituel extérieur qui place une chose sous l\'autorité de Dieu. Le nom est prononcé et il marque ce sur quoi il est prononcé.', display_order: 32 },
    { sense: 'se nommer', sense_ar: 'تَسَمَّى', description: 'Se donner un nom à soi-même, ou être nommé par les autres. Acte qui peut être intérieur (on choisit son nom) ou extérieur (on reçoit un nom).', display_order: 33 },
    { sense: 's\'appeler mutuellement', sense_ar: 'تَسَامَوْ', description: 'S\'appeler les uns les autres par les noms. Acte réciproque et social : les noms circulent entre les personnes. Réalité relationnelle.', display_order: 34 },
    { sense: 'demander le nom', sense_ar: 'اِسْتَسْمَى', description: 'Demander à quelqu\'un son nom. Acte social extérieur dirigé vers l\'autre. Le nom est demandé pour pouvoir identifier.', display_order: 35 },
    { sense: 'nom', sense_ar: 'اِسْم', description: 'Désignation par laquelle on identifie et on distingue quelque chose de tout le reste. Le Lane\'s dit : "a sign such as may be uttered or written conveying knowledge". Le nom est extérieur (il peut être prononcé ou écrit), permanent (il persiste après l\'acte de nommer), et relationnel (il permet aux autres d\'identifier). C\'est un pont entre la chose et celui qui la connaît. Sans nom, pas d\'identification, pas de communication possible.', display_order: 36 },
    { sense: 'renommée', sense_ar: 'اِسْم', description: 'La réputation, la célébrité. Extension du nom vers sa propagation dans la société. Le nom qui se répand parmi les gens. Réalité extérieure et sociale : la renommée existe dans la perception des autres, pas dans celui qui la porte.', display_order: 37 },
    { sense: 'nominal', sense_ar: 'اِسْمِيّ', description: 'Ce qui est relatif au nom ou au substantif. Concept grammatical : une proposition nominale. Réalité linguistique technique.', display_order: 38 },
    { sense: 'qualité de nom', sense_ar: 'اِسْمِيَّة', description: 'La propriété d\'être un nom. Concept grammatical abstrait.', display_order: 39 },
    { sense: 'nommé', sense_ar: 'مُسَمًّى', description: 'Celui qui a reçu un nom. Participe passif : l\'action de nommer a été subie. Par extension : celui qui est parmi les meilleurs de son groupe.', display_order: 40 },
    { sense: 'céleste', sense_ar: 'سَمَائِيّ', description: 'Ce qui est relatif au ciel. Adjectif dérivé de ciel. Réalité descriptive.', display_order: 41 },
    { sense: 'hautain', sense_ar: 'سَامٍ', description: 'Celui qui regarde de haut avec dédain, le nez levé. Extension négative de la hauteur : la hauteur comme mépris. État intérieur (l\'orgueil) qui se manifeste extérieurement (le regard méprisant).', display_order: 42 },
    { sense: 'chasseurs', sense_ar: 'سَامٍ', description: 'Ceux qui sortent chasser, les chasseurs diurnes. Pluriel de celui qui chasse. Activité extérieure.', display_order: 43 },
    { sense: 'revendiquer une parenté', sense_ar: 'تَسَمَّى', description: 'Se donner un nom de relation pour revendiquer une appartenance à un groupe. Acte social extérieur de revendication identitaire.', display_order: 44 },
    { sense: 'inciter à chasser', sense_ar: 'أَسْمَى', description: 'Pousser quelqu\'un à aller chasser. Forme IV causative : acte extérieur dirigé vers l\'autre.', display_order: 45 },
    { sense: 'regarder la silhouette', sense_ar: 'أَسْمَى', description: 'Observer la forme ou silhouette de quelqu\'un vue de loin. Acte visuel extérieur.', display_order: 46 },
    { sense: 'se diriger vers Es-Semaweh', sense_ar: 'أَسْمَى', description: 'Prendre la direction d\'un lieu géographique précis (un point d\'eau entre Kufa et la Syrie). Sens toponymique.', display_order: 47 },
    { sense: 'tester une chamelle', sense_ar: 'اِسْتَمَى', description: 'Examiner une jeune chamelle pour savoir si elle est enceinte. Action d\'évaluation extérieure.', display_order: 48 },
  ]

  const {error: smwErr} = await db.from('word_meanings').insert(
    smwSenses.map(s => ({...s, analysis_id: 249, meaning_type: 'etymology'}))
  )
  if (smwErr) console.log('  ERREUR smw: ' + smwErr.message)
  else {
    console.log('  ' + smwSenses.length + ' sens insérés')
    for (const s of smwSenses) console.log('    ' + s.display_order + '. ' + s.sense)
  }
  console.log('')

  // ═══ RACINE alh (250) — allah ═══
  console.log('[alh] 16 sens extraits du Lane\'s')
  const alhSenses = [
    { sense: 'adorer', sense_ar: 'أَلَهَ', description: 'Servir, vouer un culte, se dévouer entièrement à quelqu\'un ou quelque chose. Acte extérieur dirigé vers l\'objet d\'adoration : celui qui adore dirige sa dévotion vers ce qu\'il adore. C\'est une action relationnelle qui sort de l\'adorateur et atteint l\'adoré. Peut être ponctuel (un acte de dévotion) ou permanent (une vie de dévotion).', display_order: 1 },
    { sense: 'être perplexe', sense_ar: 'أَلِهَ', description: 'Être confondu, désorienté, incapable de voir la bonne direction. État intérieur qui reste chez celui qui le ressent. La perplexité ne sort pas vers l\'extérieur, elle bloque celui qui la vit dans son incapacité à agir. État ponctuel ou prolongé selon les circonstances.', display_order: 2 },
    { sense: 'se lamenter', sense_ar: 'أَلِهَ', description: 'Manifester une détresse véhémente, une agitation intense de chagrin. Le Lane\'s dit "vehement grief". État intérieur émotionnel qui déborde vers l\'extérieur par des manifestations visibles (cris, pleurs). L\'émotion part de l\'intérieur mais se montre.', display_order: 3 },
    { sense: 'chercher refuge', sense_ar: 'أَلَهَ', description: 'Se tourner vers quelqu\'un pour demander protection, chercher un abri par crainte. Acte extérieur dirigé vers celui qui peut protéger. L\'agent quitte sa position vulnérable pour aller vers une source de sécurité. Action relationnelle : elle nécessite deux parties (celui qui cherche et celui qui offre le refuge).', display_order: 4 },
    { sense: 'demeurer', sense_ar: 'أَلَهَ', description: 'Rester, séjourner, habiter dans un lieu. État extérieur permanent : on est quelque part et on y reste. Pas d\'émotion, pas de jugement, juste une présence dans un espace.', display_order: 5 },
    { sense: 'protéger', sense_ar: 'أَلَهَ', description: 'Accorder un refuge, préserver du mal, sauver. Acte extérieur dirigé vers celui qui est protégé. L\'agent (le protecteur) étend sa protection sur l\'autre. Action relationnelle qui sort du protecteur et atteint le protégé.', display_order: 6 },
    { sense: 'asservir', sense_ar: 'تَأْلِيه', description: 'Réduire quelqu\'un en esclavage, le prendre comme serviteur. Forme II : acte extérieur dirigé vers l\'autre, qui change son statut. Action de domination relationnelle.', display_order: 7 },
    { sense: 'faire adorer', sense_ar: 'تَأْلِيه', description: 'Amener quelqu\'un à adorer, à vouer un culte. Forme II causative : acte extérieur qui pousse l\'autre à l\'adoration.', display_order: 8 },
    { sense: 'diviniser', sense_ar: 'تَأْلِيه', description: 'Considérer quelqu\'un comme un dieu, le compter parmi les dieux. Acte intérieur de jugement (on décide que quelqu\'un est divin) qui se manifeste extérieurement (on le traite comme tel).', display_order: 9 },
    { sense: 'se dévouer au culte', sense_ar: 'تَأَلَّهَ', description: 'Se consacrer aux pratiques religieuses, s\'appliquer aux actes de dévotion. Forme V réflexive : l\'action revient sur soi. État intérieur de choix qui se manifeste par des actes extérieurs.', display_order: 10 },
    { sense: 'divinité', sense_ar: 'إِلٰه', description: 'Objet d\'adoration, ce vers quoi on se tourne avec dévotion. Le Lane\'s dit : "anything that is taken as an object of worship, accord. to him who takes it as such". Ce n\'est pas une qualité intérieure — c\'est une position relationnelle : la divinité est ce que les autres adorent. Le concept existe dans la relation entre l\'adorateur et l\'adoré. Par extension : le serpent, le soleil, la lune — des objets qui ont été pris pour divinités. La divinité est ce qui reçoit l\'adoration, pas celui qui la donne.', display_order: 11 },
    { sense: 'divinité (concept)', sense_ar: 'إِلَاهَة', description: 'L\'état d\'être divin, la qualité de dieu. Concept abstrait qui décrit non pas une personne mais une propriété. Réalité abstraite et permanente.', display_order: 12 },
    { sense: 'théologie', sense_ar: 'الإِلٰهِيَّة', description: 'Science de l\'être et des attributs de Dieu. Discipline intellectuelle humaine. Réalité abstraite et sociale.', display_order: 13 },
    { sense: 'Dieu', sense_ar: 'اللّٰه', description: 'Le Lane\'s dit : "the Being who exists necessarily, by Himself, comprising all the attributes of perfection". Nom propre qui désigne l\'être dont l\'existence ne dépend de rien d\'autre. Ce n\'est pas un concept, c\'est un nom qui identifie. Le nom est extérieur (il peut être prononcé), permanent (il ne change pas) et relationnel (il permet aux humains de s\'adresser à cet être).', display_order: 14 },
    { sense: 'exclamation divine', sense_ar: 'اللّٰهُمَّ', description: 'Forme d\'invocation "Ô Dieu". Expression utilisée pour s\'adresser directement à Dieu. Acte de parole extérieur et ponctuel.', display_order: 15 },
    { sense: 'oui certes', sense_ar: 'اللّٰهُمَّ', description: 'Particule d\'affirmation ou de serment. Extension de l\'invocation divine vers l\'affirmation. Acte de parole.', display_order: 16 },
  ]

  const {error: alhErr} = await db.from('word_meanings').insert(
    alhSenses.map(s => ({...s, analysis_id: 250, meaning_type: 'etymology'}))
  )
  if (alhErr) console.log('  ERREUR alh: ' + alhErr.message)
  else {
    console.log('  ' + alhSenses.length + ' sens insérés')
    for (const s of alhSenses) console.log('    ' + s.display_order + '. ' + s.sense)
  }
  console.log('')

  // ═══ RACINE rhm (251) — rahman/rahim ═══
  console.log('[rhm] 30 sens extraits du Lane\'s')
  const rhmSenses = [
    // Sens physiques/concrets
    { sense: 'utérus', sense_ar: 'رَحِم', description: 'L\'organe maternel, la matrice, le lieu d\'origine du jeune dans le ventre. Réalité physique concrète : un espace intérieur qui accueille, nourrit et protège la vie en formation. C\'est le lieu de la douceur première, où la vie est enveloppée et soutenue avant de naître.', display_order: 1 },
    { sense: 'vulve', sense_ar: 'رَحِم', description: 'L\'organe génital féminin. Réalité anatomique concrète liée à la reproduction.', display_order: 2 },
    { sense: 'maladie de l\'utérus', sense_ar: 'رَحِمَ', description: 'Complication post-partum de l\'utérus pouvant être fatale, ou empêchant la fécondation. Réalité médicale.', display_order: 3 },
    { sense: 'outre abîmée', sense_ar: 'رَحِمَ', description: 'Récipient en cuir laissé à l\'abandon qui se détériore et ne retient plus l\'eau. Réalité matérielle concrète.', display_order: 4 },
    { sense: 'utérus gonflé', sense_ar: 'رَاحِم', description: 'État pathologique de l\'utérus. Réalité médicale.', display_order: 5 },
    { sense: 'chamelle malade post-partum', sense_ar: 'رَحُوم', description: 'Chamelle ayant une complication utérine après la mise-bas. Réalité vétérinaire.', display_order: 6 },
    { sense: 'sortie de l\'utérus', sense_ar: 'رَحَم', description: 'Le fait que l\'utérus sorte à cause d\'une maladie. Réalité médicale.', display_order: 7 },
    { sense: 'La Mecque', sense_ar: 'رُحْم', description: 'Nom propre de lieu. Le Lane\'s lie ce nom à la source de la miséricorde.', display_order: 8 },
    { sense: 'Médine', sense_ar: 'مَرْحُوم', description: 'Nom propre de lieu. Extension géographique.', display_order: 9 },
    // Sens relationnels (parenté)
    { sense: 'lien de parenté', sense_ar: 'رَحِم', description: 'La relation de sang, les liens de famille, la connexion par la naissance. Extension de l\'utérus : ceux qui partagent la même matrice sont liés. Réalité relationnelle permanente qui existe entre les personnes. Le Lane\'s dit : "whoso maketh thee close, I will make him close; and who severeth thee, I will sever him". Ce lien est extérieur (il existe entre les personnes) et permanent (il ne peut pas être supprimé).', display_order: 10 },
    { sense: 'parents par les femmes', sense_ar: 'رَحِم', description: 'Les relations familiales du côté maternel, ceux qui n\'héritent pas par la voie principale. Extension spécifique du lien de parenté vers la lignée féminine.', display_order: 11 },
    { sense: 'parent interdit au mariage', sense_ar: 'رَحِم', description: 'Un parent si proche qu\'il est interdit de l\'épouser (mère, sœur, tante). Réalité juridique et sociale.', display_order: 12 },
    { sense: 'sentiment de parenté', sense_ar: 'رَحِم', description: 'La sympathie naturelle du sang, le sentiment de connexion avec ses proches. État intérieur qui naît de la conscience du lien familial.', display_order: 13 },
    { sense: 'connecté par parenté', sense_ar: 'رَحِمَ', description: 'Le fait d\'être lié par le sang à quelqu\'un. État relationnel permanent.', display_order: 14 },
    // Sens abstraits (miséricorde et extensions)
    { sense: 'miséricorde', sense_ar: 'رَحْمَة', description: 'Tendresse du cœur, inclination qui pousse à accorder faveur et bienfaisance. Le Lane\'s donne plusieurs facettes : "tenderness of heart", "inclination to favour", "pardon, forgiveness", "beneficence". C\'est un mouvement intérieur (la tendresse) qui se dirige vers l\'extérieur (l\'acte de bienfaisance). La miséricorde n\'est pas un sentiment qui reste enfermé : elle sort de celui qui la ressent et atteint celui qui la reçoit. Elle est permanente comme disposition du cœur, et ponctuelle dans chacune de ses manifestations.', display_order: 15 },
    { sense: 'pardon', sense_ar: 'رَحِمَ', description: 'Excuser une faute, effacer une erreur. Le Lane\'s inclut "pardoned, forgave" dans la définition de rahima. Acte extérieur dirigé vers celui qui a fauté : le pardon sort de celui qui pardonne et libère celui qui est pardonné. Action ponctuelle (on pardonne un acte précis) mais dont l\'effet est permanent.', display_order: 16 },
    { sense: 'traiter avec compassion', sense_ar: 'رَحِمَ', description: 'Regarder quelqu\'un avec tendresse et bienveillance, le traiter favorablement. Acte extérieur dirigé vers l\'autre : celui qui est compatissant modifie son comportement envers l\'autre. La compassion est un état intérieur qui se manifeste par des actes extérieurs.', display_order: 17 },
    { sense: 'dire "que Dieu te fasse miséricorde"', sense_ar: 'رَحَّمَ', description: 'Prononcer une formule de bénédiction pour quelqu\'un. Forme II : acte de parole extérieur dirigé vers l\'autre. Action ponctuelle et sociale.', display_order: 18 },
    { sense: 'se forcer à la compassion', sense_ar: 'تَرَحَّمَ', description: 'S\'efforcer de montrer de la pitié, contraindre son cœur à la tendresse. Forme V réflexive : l\'effort vient de l\'intérieur et se dirige vers l\'expression extérieure de la compassion.', display_order: 19 },
    { sense: 'miséricorde réciproque', sense_ar: 'تَرَاحَمُوا', description: 'Se traiter mutuellement avec compassion. Forme VI réciproque : la miséricorde circule dans les deux sens entre les personnes.', display_order: 20 },
    { sense: 'demander la miséricorde', sense_ar: 'اِسْتَرْحَمَ', description: 'Solliciter activement la compassion de quelqu\'un. Forme X : acte extérieur de demande dirigé vers celui qui peut accorder la miséricorde.', display_order: 21 },
    { sense: 'prophétie', sense_ar: 'رَحْمَة', description: 'Le Lane\'s mentionne que rahma peut désigner la mission prophétique : "God distinguishes with his gift of prophecy whom He will". Extension de la miséricorde vers un don spécifique accordé par Dieu.', display_order: 22 },
    { sense: 'subsistance', sense_ar: 'رَحْمَة', description: 'Les moyens de vivre, ce qui nourrit et fait vivre. Extension concrète de la miséricorde : ce dont on a besoin pour survivre. Réalité extérieure qui descend de Dieu vers les créatures.', display_order: 23 },
    { sense: 'pluie', sense_ar: 'رَحْمَة', description: 'L\'eau qui tombe du ciel. Manifestation concrète de la miséricorde dans le monde physique. Réalité extérieure et tangible.', display_order: 24 },
    { sense: 'abondance', sense_ar: 'رَحْمَة', description: 'Profusion d\'herbage et de biens nécessaires à la vie. Extension de la miséricorde vers la générosité matérielle. Réalité extérieure et mesurable.', display_order: 25 },
    { sense: 'le Compatissant', sense_ar: 'الرَّحْمٰن', description: 'Le Lane\'s dit : "the Possessor of the utmost degree of mercy". Nom qui exprime le degré le plus élevé possible de miséricorde. Le modèle morphologique (fa\'lan) en arabe indique l\'intensité maximale, comme si la miséricorde débordait de toutes parts.', display_order: 26 },
    { sense: 'plus miséricordieux', sense_ar: 'أَرْحَم', description: 'Superlatif de miséricordieux. Le Lane\'s dit "the Most Merciful of those that have mercy". Comparatif/superlatif : plus miséricordieux que tous les autres.', display_order: 27 },
    { sense: 'objet de miséricorde', sense_ar: 'مَرْحُوم', description: 'Celui sur qui la miséricorde est tombée. Participe passif : la miséricorde a été reçue. Par extension : le défunt (celui qui a reçu la miséricorde ultime).', display_order: 28 },
    { sense: 'traité avec beaucoup de compassion', sense_ar: 'مُرَحَّم', description: 'Celui qui a reçu une compassion abondante. Participe passif de la forme II : intensité de la miséricorde reçue.', display_order: 29 },
    { sense: 'la crainte vaut mieux que la pitié', sense_ar: 'رَحَمُوت', description: 'Expression proverbiale : "être craint vaut mieux qu\'être pris en pitié". Réalité sociale : la pitié place celui qui la reçoit en position d\'infériorité. Sens contextuel dans un proverbe.', display_order: 30 },
  ]

  const {error: rhmErr} = await db.from('word_meanings').insert(
    rhmSenses.map(s => ({...s, analysis_id: 251, meaning_type: 'etymology'}))
  )
  if (rhmErr) console.log('  ERREUR rhm: ' + rhmErr.message)
  else {
    console.log('  ' + rhmSenses.length + ' sens insérés')
    for (const s of rhmSenses) console.log('    ' + s.display_order + '. ' + s.sense)
  }

  console.log('')
  console.log('════════════════════════════════════════')
  console.log('  ÉTAPE 2 TERMINÉE')
  console.log('  smw: ' + smwSenses.length + ' sens')
  console.log('  alh: ' + alhSenses.length + ' sens')
  console.log('  rhm: ' + rhmSenses.length + ' sens')
  console.log('  TOTAL: ' + (smwSenses.length + alhSenses.length + rhmSenses.length) + ' sens')
  console.log('════════════════════════════════════════')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
