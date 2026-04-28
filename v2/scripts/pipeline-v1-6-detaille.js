// Pipeline Maison — Verset 1:6 — AXES DÉTAILLÉS
// ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

const ROOTS = {
  hdy: { id: 261, senses: [
    { sense: 'guider', sense_ar: 'هَدَى', description: 'Diriger quelqu\'un vers la bonne voie, lui montrer le chemin correct. Le Lane\'s donne "he directed him aright, or caused him to take a right way". C\'est l\'acte de celui qui connaît le chemin et qui l\'indique à celui qui ne le connaît pas.', display_order: 1 },
    { sense: 'conduite', sense_ar: 'هَدْي', description: 'Manière d\'agir, comportement calme et posé. Le Lane\'s donne "a way, course, method, mode, or manner of acting or conduct". La façon dont quelqu\'un se comporte au quotidien.', display_order: 2 },
    { sense: 'cadeau', sense_ar: 'هَدِيَّة', description: 'Présent envoyé en signe de courtoisie ou d\'honneur. Ce qu\'on offre à quelqu\'un pour marquer une relation ou un événement.', display_order: 3 },
    { sense: 'offrande', sense_ar: 'هَدْي', description: 'Animal amené comme sacrifice à La Mecque. Le don sacré fait dans le cadre du pèlerinage. Le Lane\'s note "a beast driven or brought as an offering".', display_order: 4 },
    { sense: 'conduire une mariée', sense_ar: 'هَدَى', description: 'Accompagner la mariée vers la maison de son époux. Sens spécifique de guider dans le contexte du mariage. Le Lane\'s donne "he led, or conveyed, a bride to her husband".', display_order: 5 },
    { sense: 'trouver le chemin', sense_ar: 'اِهْتَدَى', description: 'Prendre la bonne direction soi-même, se guider. Forme VIII : la guidance intérieure, quand on trouve le chemin par soi-même sans aide extérieure.', display_order: 6 },
    { sense: 'avancer doucement', sense_ar: 'هَدَى', description: 'Marcher calmement, avancer avec mesure et tranquillité. Le Lane\'s note ce sens de mouvement posé et mesuré, sans précipitation.', display_order: 7 },
    { sense: 'envoyer', sense_ar: 'أَهْدَى', description: 'Forme IV : envoyer un présent, faire parvenir un cadeau à quelqu\'un. Extension du sens de cadeau vers l\'action d\'offrir.', display_order: 8 },
  ]},
  qwm: { id: 263, senses: [
    { sense: 'se lever', sense_ar: 'قَامَ', description: 'Se mettre debout, se dresser. Sens physique premier de la racine : passer de la position assise ou couchée à la position debout.', display_order: 1 },
    { sense: 'droit', sense_ar: 'مُسْتَقِيم', description: 'Ce qui est droit, sans déviation ni courbure. Forme X : ce qui se tient parfaitement droit. C\'est cette forme qui est utilisée dans le verset 1:6. Le Lane\'s donne "straight, direct, right".', display_order: 2 },
    { sense: 'peuple', sense_ar: 'قَوْم', description: 'Un groupe de personnes, une communauté. Les gens qui se tiennent ensemble, unis par un lien commun.', display_order: 3 },
    { sense: 'gérer', sense_ar: 'قَامَ بِ', description: 'Prendre en charge une affaire, l\'administrer, la diriger. Celui qui se lève pour s\'occuper de quelque chose.', display_order: 4 },
    { sense: 'valeur', sense_ar: 'قِيمَة', description: 'Le prix réel d\'une chose, ce qu\'elle vaut. L\'estimation juste et droite.', display_order: 5 },
    { sense: 'stature', sense_ar: 'قَامَة', description: 'La taille d\'une personne debout. Extension physique du sens de se lever.', display_order: 6 },
    { sense: 'redresser', sense_ar: 'قَوَّمَ', description: 'Remettre droit ce qui était tordu, corriger. Forme II : faire en sorte que quelque chose soit droit.', display_order: 7 },
    { sense: 'subsistance', sense_ar: 'قُوت', description: 'La nourriture qui fait vivre, ce qui soutient la vie. Ce grâce à quoi on se tient debout (on survit).', display_order: 8 },
    { sense: 'résider', sense_ar: 'أَقَامَ', description: 'Forme IV : s\'établir dans un lieu, y rester debout de manière stable. Le Lane\'s donne "he remained, stayed, dwelt, abode".', display_order: 9 },
    { sense: 'accomplir', sense_ar: 'أَقَامَ', description: 'Forme IV : établir quelque chose, le mettre en place. "Aqama as-salat" = accomplir la prière (la faire tenir debout, la réaliser pleinement).', display_order: 10 },
  ]},
}

const AXES = {
  hdy: {
    guider: {
      status: 'retenu',
      axe1_verset: 'Le verset dit "ihdina s-sirata l-mustaqim" (guide-nous sur le droit chemin). Le verbe ihdina est un impératif de la forme I de hada, avec le suffixe na (nous) : guide-nous. Le champ lexical est celui de la direction, de la guidance et du chemin. C\'est une demande adressée à Dieu, une prière qui dit : montre-nous la bonne voie. Le verbe guider implique que celui qui guide connaît le chemin et que celui qui est guidé en a besoin. La demande est directe et personnelle.',
      axe2_voisins: 'Le verset 5 déclare l\'adoration et la demande d\'aide. Le verset 6 précise ce qu\'on demande : la guidance sur le droit chemin. La progression est logique : on s\'engage (v5), puis on formule sa demande concrète (v6). Le verset 7 précisera encore davantage quel est ce chemin droit : celui de ceux qui ont reçu les bienfaits, pas celui des égarés. La guidance du verset 6 est la demande générale, le verset 7 en donne le contenu spécifique.',
      axe3_sourate: 'La Fatiha culmine dans cette demande de guidance. Toute la sourate converge vers cette prière : on nomme Dieu (v1), on Le loue (v2), on décrit Ses attributs (v3-4), on s\'engage (v5), et finalement on demande la guidance (v6-7). La guidance est l\'aboutissement de la sourate, ce vers quoi tout le reste mène. C\'est la demande la plus importante, celle pour laquelle tout le reste est préparation.',
      axe4_coherence: 'Le Coran utilise le verbe hada (guider) massivement, des dizaines de fois. C\'est l\'un des concepts les plus fréquents du texte coranique. L\'impératif ihdina (guide-nous) est la forme de prière par excellence. Le sens est parfaitement cohérent avec l\'usage coranique global : guider signifie toujours montrer la bonne voie, diriger vers ce qui est juste. Aucune ambiguïté dans cet usage.',
      axe5_frequence: 'La guidance est la condition première pour que le khalifa accomplisse sa mission de justice et de civilisation. Sans direction, pas d\'action juste possible : on ne peut pas faire le bien si on ne sait pas où aller. La guidance précède l\'action comme la carte précède le voyage. Le khalifa demande la guidance parce qu\'il reconnaît que la mission est trop complexe pour être accomplie sans direction divine. C\'est un acte d\'humilité et de sagesse, pas de faiblesse.',
      proof_ctx: '"Guider" est le sens premier de la racine h-d-y : diriger quelqu\'un vers la bonne voie, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). Le Lane\'s donne "he directed him aright". Test de compatibilité grammaticale : verbe impératif. "Guide-nous" fonctionne parfaitement en français courant. Distinction avec "conduite" : la conduite est le comportement (comment on agit), guider est la direction (vers où on va). Le verset demande la direction (guide-nous sur le chemin), pas le comportement (donne-nous une bonne conduite). La frontière philosophique : la conduite est un résultat (comment on se comporte après avoir été guidé), la guidance est la cause (ce qui permet d\'adopter la bonne conduite). Le verset demande la cause, pas le résultat. Distinction avec "trouver le chemin" : trouver le chemin (forme VIII : ihtada) est un acte autonome (on trouve par soi-même), guider (forme I : hada) est un acte relationnel (quelqu\'un nous montre). Le verset demande à Dieu de montrer, pas de laisser trouver seul.',
    },
    conduite: {
      status: 'probable',
      axe1_verset: 'La conduite est la manière d\'agir, le comportement posé et mesuré. Le verset demande la guidance (ihdina = guide-nous), pas la conduite. Le champ lexical du verset est celui de la direction et du chemin, pas du comportement. Guider c\'est montrer la voie, la conduite c\'est comment on marche une fois la voie trouvée. Le verset est tourné vers la direction à prendre, pas vers la manière de marcher.',
      axe2_voisins: 'Le verset 7 précise quel est le chemin demandé (celui des bienfaités, pas celui des égarés). Le complément du verbe est "le chemin" (as-sirat), pas "la manière" ou "le comportement". Les versets voisins parlent de chemins et de groupes qui les empruntent, pas de comportements. La conduite serait hors de la métaphore du chemin qui structure les versets 6-7.',
      axe3_sourate: 'La Fatiha demande une direction, pas un comportement. La sourate est orientée vers un but (trouver le bon chemin), pas vers un mode d\'être (adopter la bonne conduite). La guidance est prospective (vers où aller), la conduite est descriptive (comment on agit maintenant). La sourate regarde devant, pas autour.',
      axe4_coherence: 'Le Coran utilise hady pour la conduite dans certains contextes ("husnu l-hady" = la belle conduite). Mais dans le verset 1:6, le verbe ihdina est suivi du complément "as-sirat" (le chemin), ce qui oriente le sens vers la direction, pas vers le comportement. Quand le Coran associe hada à sirat, c\'est toujours dans le sens de guider vers un chemin, pas d\'adopter une conduite.',
      axe5_frequence: 'La conduite est importante pour le khalifa : comment on agit reflète ce qu\'on est. Cependant, le verset demande la direction (vers où aller), pas le mode d\'action (comment y aller). La direction est la priorité : il faut d\'abord savoir où aller avant de savoir comment y aller. Le khalifa demande la direction parce que c\'est le prérequis de tout le reste.',
      proof_ctx: 'La conduite est la manière d\'agir. La guidance est la direction à prendre. Le verset demande "guide-nous SUR LE CHEMIN", ce qui oriente vers la direction, pas vers le comportement. La frontière : la conduite est descriptive (comment on est), la guidance est directionnelle (vers où on va). Le complément "as-sirat" (le chemin) confirme le sens directionnel.',
    },
    'trouver le chemin': {
      status: 'probable',
      axe1_verset: 'Trouver le chemin (forme VIII : ihtada) est l\'acte de se guider soi-même, de découvrir la bonne direction par ses propres moyens. Le verset utilise la forme I (hada = guider), pas la forme VIII (ihtada = se guider). Le verset est une demande adressée à Dieu : "guide-nous", pas "fais que nous trouvions par nous-mêmes". La différence est celle entre recevoir la guidance et la découvrir seul.',
      axe2_voisins: 'Le verset 5 dit "c\'est Toi seul dont nous demandons l\'aide", ce qui montre que l\'humain reconnaît avoir besoin de Dieu. Le verset 6 continue dans la même logique : on demande à Dieu de guider, pas de laisser trouver seul. L\'auto-guidance serait en contradiction avec la demande d\'aide du verset 5. Les deux versets sont cohérents : on demande l\'aide (v5) et on demande la guidance (v6).',
      axe3_sourate: 'La Fatiha est une prière adressée à Dieu. Trouver le chemin par soi-même serait un acte d\'autonomie qui ne nécessite pas de prière. Si l\'humain pouvait trouver seul, il n\'aurait pas besoin de demander. La sourate est fondée sur la relation entre l\'humain et Dieu, pas sur l\'autonomie de l\'humain.',
      axe4_coherence: 'Le Coran distingue hada (guider, forme I, quelqu\'un guide quelqu\'un d\'autre) de ihtada (se guider, forme VIII, on trouve par soi-même). Les deux formes existent et sont utilisées dans des contextes différents. Le verset 1:6 utilise la forme I : c\'est Dieu qui guide, pas l\'humain qui trouve. Cette distinction est constante dans le Coran.',
      axe5_frequence: 'Trouver le chemin par soi-même est une capacité précieuse du khalifa. Mais le verset reconnaît que pour la guidance fondamentale (le droit chemin), l\'humain a besoin de Dieu. L\'auto-guidance fonctionne pour les décisions quotidiennes, la guidance divine est nécessaire pour la direction de vie. Le khalifa combine les deux mais le verset parle de la guidance divine, pas de l\'auto-guidance.',
      proof_ctx: 'Trouver le chemin (forme VIII : ihtada) est un acte autonome. Guider (forme I : hada) est un acte relationnel. Le verset demande à Dieu de guider (forme I), pas de laisser trouver seul (forme VIII). La frontière : la forme I implique une relation (guide-moi), la forme VIII implique l\'autonomie (je trouve seul). Le verset est une prière, donc un acte relationnel.',
    },
    cadeau: { status: 'nul', proof_ctx: 'Présent offert en courtoisie. Le verset est une demande de guidance, pas un échange de cadeaux. Hors contexte.' },
    offrande: { status: 'nul', proof_ctx: 'Animal sacrifié au pèlerinage. Le verset est une prière de guidance, pas un rituel de sacrifice. Hors contexte.' },
    'conduire une mariée': { status: 'nul', proof_ctx: 'Accompagner la mariée vers son époux. Sens spécifique du mariage. Complètement hors du contexte de demande de guidance divine.' },
    'avancer doucement': { status: 'nul', proof_ctx: 'Marcher calmement et posément. Le verset demande une direction, pas une allure de marche.' },
    envoyer: { status: 'nul', proof_ctx: 'Envoyer un présent (forme IV). Le verset utilise la forme I (guider), pas la forme IV (envoyer un cadeau). Hors contexte.' },
  },
  qwm: {
    droit: {
      status: 'retenu',
      axe1_verset: 'Le verset dit "as-sirata l-mustaqim" (le chemin droit). Le mot mustaqim est la forme X de la racine q-w-m : ce qui se tient parfaitement droit, sans aucune déviation ni courbure. Le champ lexical est celui de la rectitude et de la perfection directionnelle. Mustaqim qualifie le chemin (sirat) : ce n\'est pas n\'importe quel chemin, c\'est le chemin DROIT, celui qui ne dévie ni à gauche ni à droite. L\'article défini al- devant les deux mots (as-sirat al-mustaqim) montre que c\'est LE chemin droit connu et défini, pas un chemin droit parmi d\'autres.',
      axe2_voisins: 'Le verset 7 précise quel est ce chemin droit : celui de ceux qui ont reçu les bienfaits, pas celui des égarés ni de ceux qui ont subi la désapprobation. La rectitude du chemin (v6) est définie par ses occupants (v7). Le chemin est droit PARCE QUE c\'est celui des bienfaités, il ne dévie pas PARCE QU\'il évite l\'égarement et la désapprobation. Les deux versets forment un tout : le v6 demande le chemin droit, le v7 dit quel il est.',
      axe3_sourate: 'La Fatiha demande le chemin droit comme aboutissement de la prière. Toute la sourate converge vers cette demande : on reconnaît Dieu (v1-4), on s\'engage (v5), et on demande la direction droite (v6-7). La rectitude (mustaqim) est la qualité fondamentale du chemin demandé : ce n\'est pas juste un chemin, c\'est un chemin sans déviation. La sourate se termine par la définition de ce chemin, ce qui en fait le message central.',
      axe4_coherence: 'Le Coran utilise l\'expression "as-sirat al-mustaqim" (le chemin droit) comme une formule récurrente et centrale. On la retrouve dans de nombreuses sourates. Le sens est toujours le même : la voie droite, sans déviation, qui mène au bien. La forme X (mustaqim = ce qui se tient parfaitement droit) est systématiquement utilisée avec sirat dans tout le Coran. C\'est l\'une des expressions les plus reconnaissables du texte coranique.',
      axe5_frequence: 'La rectitude est la qualité fondamentale du chemin du khalifa. Sans rectitude, la justice dévie, la civilisation se corrompt, la dignité humaine est compromise. Le chemin droit est la direction que le khalifa doit maintenir en permanence, sans dévier vers l\'excès ni vers le manque. La droiture n\'est pas rigidité (un chemin peut être droit et long), c\'est constance (ne pas quitter la bonne direction). Pour le khalifa, la droiture est la condition de la justice.',
      proof_ctx: '"Droit" (mustaqim, forme X de qama) signifie ce qui se tient parfaitement droit, sans déviation, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). Le Lane\'s lie la forme X à l\'idée de se tenir debout de manière parfaitement droite. Test de compatibilité grammaticale : adjectif défini avec al-. "Le droit" fonctionne comme qualificatif du chemin. Distinction avec "se lever" : se lever (qama, forme I) est l\'action physique de se mettre debout. Droit (mustaqim, forme X) est l\'état résultant de la perfection de cette position. Le verset décrit l\'état du chemin (droit), pas l\'action de se lever. Distinction avec "redresser" : redresser (qawwama, forme II) est l\'action de remettre droit ce qui était tordu. Le chemin mustaqim est le résultat de ce redressement : il est déjà droit. Le verset demande d\'être guidé vers le chemin déjà droit, pas de redresser un chemin tordu.',
    },
    redresser: {
      status: 'probable',
      axe1_verset: 'Redresser (qawwama, forme II) est l\'action de remettre droit ce qui était tordu. Le verset utilise mustaqim (forme X = ce qui est droit), pas muqawwam (forme II = ce qui a été redressé). Le champ lexical du verset est celui de l\'état (le chemin EST droit), pas de l\'action (le chemin A ÉTÉ redressé). Cependant, le lien est direct : ce qui est droit est le résultat du redressement. La forme X présuppose la forme II.',
      axe2_voisins: 'Les versets voisins décrivent un chemin déjà établi (celui des bienfaités, v7), pas un chemin en cours de redressement. Le chemin droit existe déjà, on demande à être guidé vers lui, pas à le construire ou à le redresser. Les versets présentent le chemin comme un fait accompli, pas comme un chantier en cours.',
      axe3_sourate: 'La Fatiha demande d\'être guidé vers un chemin existant, pas de créer ou de réparer un chemin. La sourate est orientée vers la réception (guide-nous), pas vers l\'action de transformation (redresse le chemin). Le ton est celui de la demande humble, pas de l\'action constructive.',
      axe4_coherence: 'Le Coran utilise qawwama (redresser, forme II) dans d\'autres contextes pour l\'action de corriger. Mais avec sirat, c\'est toujours mustaqim (forme X = déjà droit) qui est utilisé, jamais une forme qui impliquerait un redressement en cours. Le chemin dans le Coran est toujours présenté comme déjà droit, pas comme ayant besoin d\'être redressé.',
      axe5_frequence: 'Redresser est une mission du khalifa : corriger ce qui est tordu, remettre la justice en place. C\'est une action noble et nécessaire. Cependant, le verset parle d\'un chemin déjà droit vers lequel on demande à être guidé. Le khalifa redresse ce qui l\'entoure, mais le chemin divin est déjà droit, il n\'a pas besoin d\'être redressé.',
      proof_ctx: 'Redresser (forme II) est l\'action de remettre droit. Droit (forme X) est l\'état résultant. Le verset utilise la forme X (l\'état), pas la forme II (l\'action). La frontière : redresser est un processus (en cours), droit est un résultat (achevé). Le chemin est présenté comme déjà droit, pas comme nécessitant un redressement.',
    },
    'se lever': { status: 'nul', proof_ctx: 'Action physique de se mettre debout (forme I). Le verset utilise la forme X (mustaqim = droit), pas la forme I (qama = se lever). Le contexte est celui d\'un qualificatif de chemin, pas d\'un mouvement physique.' },
    peuple: { status: 'nul', proof_ctx: 'Communauté, groupe de personnes. Le verset qualifie le chemin par sa rectitude, il ne parle pas de gens. Hors contexte.' },
    'gérer': { status: 'nul', proof_ctx: 'Administrer une affaire. Le verset qualifie le chemin, pas une gestion. Hors contexte.' },
    valeur: { status: 'nul', proof_ctx: 'Prix d\'une chose. Hors du contexte de rectitude du chemin.' },
    stature: { status: 'nul', proof_ctx: 'Taille physique d\'une personne debout. Hors contexte.' },
    subsistance: { status: 'nul', proof_ctx: 'Nourriture qui fait vivre. Hors du contexte de la rectitude du chemin.' },
    'résider': { status: 'nul', proof_ctx: 'S\'établir dans un lieu (forme IV). Le verset utilise la forme X (mustaqim = droit), pas la forme IV (aqama = résider). Contextes différents.' },
    accomplir: { status: 'nul', proof_ctx: 'Établir quelque chose, réaliser (forme IV). Le verset utilise la forme X comme adjectif du chemin, pas la forme IV comme verbe d\'action.' },
  },
}

const VERSE = {
  verse_id: 6,
  words: [
    {verse_id:6, word_key:'hdy', sense_chosen:'guider', position:1},
    {verse_id:6, word_key:'srt', sense_chosen:'chemin', position:2},
    {verse_id:6, word_key:'qwm', sense_chosen:'droit', position:3},
  ],
  translation_arab: "Guide-nous sur le droit chemin.",
  translation_explanation: "Ihdina est un verbe à l'impératif (c'est un ordre, une demande) avec le suffixe na (nous), donc \"guide-nous\". C'est ce qu'on appelle en arabe un verbe au mode jussif utilisé comme prière. As-sirata est le chemin, le complément du verbe, ce vers quoi on demande à être guidé. Al-mustaqima est un adjectif qui qualifie le chemin : il est droit, sans déviation. C'est la forme X du verbe qama (se lever, se tenir debout), qui ajoute le sens de \"se tenir parfaitement droit\". L'article défini al- (le) devant sirat et mustaqim est important : il montre que c'est LE chemin précis et connu, pas n'importe quel chemin. On ne demande pas un chemin au hasard, on demande celui qui est déjà établi.",
  segments: [
    {fr:"guide-nous",pos:"verbe",phon:"ihdina",arabic:"ٱهْدِنَا",word_key:"hdy",is_particle:false,sense_retenu:"guider"},
    {fr:"le chemin",pos:"nom",phon:"as-sirata",arabic:"ٱلصِّرَٰطَ",word_key:"srt",is_particle:false,sense_retenu:"chemin"},
    {fr:"le droit",pos:"adjectif",phon:"al-mustaqima",arabic:"ٱلْمُسْتَقِيمَ",word_key:"qwm",is_particle:false,sense_retenu:"droit"},
  ],
}

const DAILY = [
  {analysis_id:261,sense:'guider',arabic:'ٱهْدِنَا ٱلصِّرَاطَ',phon:'ihdina s-sirata',french:'Guide-nous sur le chemin'},
  {analysis_id:261,sense:'guider',arabic:'هَدَاهُ ٱللَّهُ',phon:'hadahu llah',french:'Dieu l\'a guidé'},
  {analysis_id:261,sense:'guider',arabic:'هَلْ مِنْ هَادٍ؟',phon:'hal min hadin?',french:'Y a-t-il un guide ?'},
  {analysis_id:263,sense:'droit',arabic:'ٱلصِّرَاطَ ٱلْمُسْتَقِيمَ',phon:'as-sirata l-mustaqim',french:'Le chemin droit'},
  {analysis_id:263,sense:'droit',arabic:'قُمْ مُسْتَقِيمًا',phon:'qum mustaqiman',french:'Tiens-toi droit'},
  {analysis_id:263,sense:'droit',arabic:'اِسْتَقَامَ عَلَى أَمْرِهِ',phon:'istaqama ala amrihi',french:'Il est resté droit dans sa conduite'},
]

async function run() {
  log('============================================')
  log('  PIPELINE MAISON — VERSET 1:6 — AXES DÉTAILLÉS')
  log('============================================')
  log('')

  log('>>> ÉTAPE 2 — SENS ÉTYMOLOGIQUES')
  let totalSenses = 0
  for (const [key, root] of Object.entries(ROOTS)) {
    const senses = root.senses.map(s => ({...s, analysis_id: root.id, meaning_type: 'etymology'}))
    const {error} = await db.from('word_meanings').insert(senses)
    if (error) { log('  ERREUR ' + key + ': ' + error.message); continue }
    totalSenses += senses.length
    log('  [' + key + '] ' + senses.length + ' sens insérés')
    for (const s of senses) log('    ' + s.display_order + '. ' + s.sense)
  }
  log('  TOTAL : ' + totalSenses + ' sens')
  log('')

  log('>>> ÉTAPE 3 — ANALYSE DES SENS (axes détaillés)')
  let updatedCount = 0
  let totalWithAxes = 0
  for (const [rootKey, rootAxes] of Object.entries(AXES)) {
    log('  [' + rootKey + ']')
    const rootId = ROOTS[rootKey].id
    const {data: meanings} = await db.from('word_meanings')
      .select('id, sense').eq('analysis_id', rootId).order('display_order')
    for (const m of meanings) {
      const axeData = rootAxes[m.sense]
      if (!axeData) { log('    ' + m.sense + ' : pas de données axes'); continue }
      const upd = { status: axeData.status, proof_ctx: axeData.proof_ctx }
      if (axeData.axe1_verset) { upd.axe1_verset=axeData.axe1_verset; upd.axe2_voisins=axeData.axe2_voisins; upd.axe3_sourate=axeData.axe3_sourate; upd.axe4_coherence=axeData.axe4_coherence; upd.axe5_frequence=axeData.axe5_frequence; totalWithAxes++ }
      const {error} = await db.from('word_meanings').update(upd).eq('id', m.id)
      if (error) { log('    ERREUR ' + m.sense + ': ' + error.message); continue }
      const tag = axeData.axe1_verset ? '(5 axes détaillés)' : '(proof_ctx seul)'
      log('    ' + m.sense + ' -> ' + axeData.status.toUpperCase() + ' ' + tag)
      updatedCount++
    }
    log('')
  }
  log('  ' + updatedCount + ' sens mis à jour dont ' + totalWithAxes + ' avec axes détaillés')
  log('')

  log('>>> ÉTAPE 4 — TRADUCTION')
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(VERSE.words)
  if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)
  else {
    log('  verse_word_analyses : ' + VERSE.words.length + ' mots insérés')
    for (const w of VERSE.words) log('    ' + w.word_key + ' -> ' + w.sense_chosen + ' (pos ' + w.position + ')')
  }
  const {error: vaErr} = await db.from('verse_analyses').insert({
    verse_id: VERSE.verse_id, translation_arab: VERSE.translation_arab,
    translation_explanation: VERSE.translation_explanation, segments: VERSE.segments,
  })
  if (vaErr) log('  ERREUR va: ' + vaErr.message)
  else log('  Traduction : "' + VERSE.translation_arab + '"')
  const {error: dailyErr} = await db.from('word_daily').insert(DAILY)
  if (dailyErr) log('  ERREUR daily: ' + dailyErr.message)
  else log('  ' + DAILY.length + ' phrases du quotidien')

  log('')
  log('============================================')
  log('  VERSET 1:6 — TERMINÉ')
  log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
