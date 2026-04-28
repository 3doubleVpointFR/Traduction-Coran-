// FIX — Réécriture COMPLÈTE des axes PAR VERSET pour sourate 112
// Chaque mot a ses axes analysés dans le contexte de SON verset
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function upd(verseId, wordKey, position, axes) {
  const {error} = await db.from('verse_word_analyses')
    .update({ analysis_axes: axes })
    .eq('verse_id', verseId).eq('word_key', wordKey).eq('position', position)
  if (error) console.log('    ERREUR: ' + error.message)
  else console.log('    ' + wordKey + ' (pos=' + position + ') -> OK (' + Object.keys(axes.senses).length + ' sens)')
}

async function run() {
  console.log('============================================')
  console.log('  RÉÉCRITURE AXES PAR VERSET — SOURATE 112')
  console.log('============================================')

  // ══════════════════════════════════════════════════
  // VERSET 112:1 — قُلْ هُوَ ٱللَّهُ أَحَدٌ
  // Contexte : déclaration d'identité, "Dis : Il est Dieu, unique"
  // ══════════════════════════════════════════════════
  console.log('')
  console.log('>>> VERSET 112:1 — "Dis : Il est Dieu, unique"')

  await upd(6222, 'alh', 3, { sense_chosen: 'divinité', senses: {
    'divinité': {
      status: 'retenu',
      proof_ctx: "Le verset 112:1 dit \"huwa llahu ahadun\" (Il est Dieu, unique). Allah est le nom propre de la Divinité, l'objet d'adoration, d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863). Le mot est un nom propre défini. Test grammatical : \"Il est Dieu\" fonctionne en français courant. Distinction avec \"adorer\" : adorer est l'action du fidèle, la divinité est l'objet de cette action. Le verset identifie QUI est Dieu, il ne décrit pas l'acte d'adorer. Distinction avec \"chercher refuge\" : chercher refuge est une action vers Dieu, la divinité est ce que Dieu EST. Le verset dit ce que Dieu est, pas ce qu'on fait vers Lui.",
      axe1_verset: "Le verset dit \"huwa llahu ahadun\" (Il est Dieu, unique). Le champ lexical est celui de l'identité : on déclare QUI est Dieu et QUELLE est Sa nature. Le mot Allah identifie la Divinité, le mot ahad qualifie Sa nature (unique, indivisible). Le verset est une déclaration d'identité, pas un récit d'actions. Le mot Allah est le pivot entre le pronom \"Il\" et la qualité \"unique\".",
      axe2_voisins: "Le verset 2 qualifie Dieu d'as-samad (celui vers qui on se tourne). Les versets 3-4 nient l'engendrement et l'existence d'un égal. Le verset 1 ouvre cette série en identifiant Dieu : d'abord on dit qui Il est (Dieu, unique), puis on le qualifie (v2), puis on dit ce qu'Il n'est pas (v3-4). Allah est le premier mot significatif de cette définition.",
      axe3_sourate: "La sourate Al-Ikhlas est une sourate de définition de Dieu. Le verset 1 pose le fondement en nommant Dieu. Tout commence par l'identification : avant de qualifier, il faut nommer. La divinité est le concept que le nom Allah désigne.",
      axe4_coherence: "Le Coran utilise Allah comme nom propre de Dieu des milliers de fois. C'est le mot le plus fréquent du texte coranique. L'usage est constant et univoque : Allah désigne toujours la Divinité suprême.",
      axe5_frequence: "Reconnaître la Divinité est le fondement de la mission du khalifa. Sans cette reconnaissance, pas de cadre pour la justice ni la civilisation. Le verset 1 pose ce fondement en une phrase."
    },
    'adorer': {
      status: 'probable',
      proof_ctx: "\"Adorer\" est le sens premier de la racine a-l-h : servir, vouer un culte. Le verset 112:1 nomme Dieu, il ne décrit pas l'acte d'adorer. L'adoration est l'action du fidèle, le verset parle de l'identité de Dieu. La frontière : adorer est ce qu'on FAIT, la divinité est ce que Dieu EST.",
      axe1_verset: "Le verset est une déclaration d'identité (\"Il est Dieu, unique\"), pas une injonction d'adoration. Le champ lexical est celui de la définition, pas de la dévotion. Adorer viendrait après l'identification : on identifie d'abord, on adore ensuite.",
      axe2_voisins: "Les versets suivants qualifient Dieu (v2) et nient des relations (v3-4). Aucun verset de la sourate ne parle d'adoration. La sourate définit, elle n'ordonne pas d'adorer.",
      axe3_sourate: "Al-Ikhlas est une sourate de définition, pas d'injonction. L'adoration est un thème d'autres sourates (comme la Fatiha, verset 5). Ici, le registre est identitaire.",
      axe4_coherence: "Le Coran distingue le nom Allah (l'identité) de l'acte d'adorer (ibada). Quand le Coran veut parler d'adoration, il utilise le verbe abada et ses dérivés, pas le nom Allah.",
      axe5_frequence: "L'adoration est une action du khalifa, pas l'identité de Dieu. Le verset pose l'identité, pas l'action."
    },
    'chercher refuge': {
      status: 'peu_probable',
      proof_ctx: "\"Chercher refuge\" est un sens attesté de la racine a-l-h. Mais le verset 112:1 est une déclaration d'identité, pas une demande de refuge. Le Coran utilise d'autres formules pour le refuge (audhu billahi). La frontière : chercher refuge est une action vers Dieu, la divinité est ce que Dieu EST.",
      axe1_verset: "Le verset dit \"Il est Dieu, unique\". C'est une déclaration, pas une demande. Le champ lexical est celui de l'identification, pas de la protection. \"Chercher refuge\" serait une action, le verset décrit une identité.",
      axe2_voisins: "Les versets voisins qualifient Dieu (v2) et nient des relations (v3-4). Aucun ne parle de refuge ou de protection. Le registre est identitaire, pas protecteur.",
      axe3_sourate: "La sourate définit Dieu, elle ne demande pas sa protection. Le refuge est un thème de la sourate 113-114 (al-Falaq, an-Nas), pas de 112.",
      axe4_coherence: "Le Coran utilise audhu billahi (je cherche refuge auprès de Dieu) quand il parle de refuge. La formule est distincte du nom Allah utilisé seul.",
      axe5_frequence: "Chercher refuge est une action ponctuelle. Le verset pose une vérité permanente sur l'identité de Dieu."
    }
  }})

  await upd(6222, 'ahd', 4, { sense_chosen: 'unique', senses: {
    'unique': {
      status: 'retenu',
      proof_ctx: "\"Unique\" désigne ce qui est indivisible, ce qui ne peut pas être séparé en parties, d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863). Le mot ahad est un nom indéfini en position d'attribut (c'est ce qu'on appelle un khabar, la partie de la phrase qui dit ce qu'est le sujet). Test grammatical : \"Il est unique\" fonctionne en français courant. Distinction avec \"un\" : \"un\" est un nombre (combien il y en a), \"unique\" est une qualité (ce qu'Il est). D'après les sources étymologiques, ce qui est ahad ne peut pas être divisé en parties, alors que wahid peut apparaître divisible. Le Coran utilise wahid ailleurs pour le nombre (\"ilahun wahid\"), mais ici il choisit ahad pour la qualité d'indivisibilité.",
      axe1_verset: "Le verset dit \"huwa llahu ahadun\" (Il est Dieu, unique). Le champ lexical est celui de l'identité absolue : on définit ce que Dieu EST dans sa nature profonde. Le mot ahad en position d'attribut indéfini qualifie la nature de Dieu, pas son nombre. D'après les sources étymologiques, ahad désigne ce qui ne peut pas être divisé en parties. Cette indivisibilité n'est pas une quantité mais une qualité intrinsèque.",
      axe2_voisins: "Le verset 2 dit que Dieu est as-samad (celui vers qui on se tourne). Le verset 3 nie l'engendrement. Le verset 4 nie l'existence d'un égal. Les versets 3-4 développent l'unicité en niant toute relation qui supposerait une division : engendrer suppose une partie de soi qui se sépare, avoir un égal suppose quelqu'un de même nature.",
      axe3_sourate: "Al-Ikhlas signifie \"la pureté\". La sourate définit Dieu dans sa pureté absolue : unique, vers qui tout se tourne, sans engendrement, sans égal. L'unicité est le fondement sur lequel reposent les trois autres versets.",
      axe4_coherence: "Le Coran utilise wahid quand il veut exprimer le nombre (sourate 2:163). Le choix de ahad au lieu de wahid n'est pas anodin. D'après les sources étymologiques, wahid peut désigner quelque chose qui apparaît divisible, ahad désigne ce qui est absolument indivisible.",
      axe5_frequence: "L'unicité de Dieu est le fondement de la mission du khalifa. Si Dieu est unique et indivisible, la relation avec Lui est directe, sans intermédiaire."
    },
    'un': {
      status: 'probable',
      proof_ctx: "\"Un\" est le sens arithmétique : combien il y a de dieux. Test grammatical : \"Il est un\" fonctionne en français courant. La frontière avec \"unique\" : \"un\" compte (pas deux, pas trois), \"unique\" qualifie (indivisible). Le Coran utilise wahid quand il veut dire le nombre. Le choix de ahad au lieu de wahid suggère une nuance au-delà du simple nombre.",
      axe1_verset: "Le verset dit \"huwa llahu ahadun\". Le nombre \"un\" est une quantification : Dieu est un (pas deux). Le mot ahad est indéfini (pas d'article al-), ce qui en arabe peut exprimer une qualité absolue plutôt qu'une simple quantité. Le champ lexical est celui de la déclaration identitaire, pas du comptage.",
      axe2_voisins: "Les versets 3-4 nient des relations (engendrement, égalité), ce qui développe l'idée de qualité plutôt que de nombre. Dire \"Dieu est un\" pose un nombre, les versets suivants développent une qualité.",
      axe3_sourate: "La sourate semble aller plus loin que le nombre car les versets suivants décrivent des qualités, pas des quantités. Le registre est qualitatif, pas arithmétique.",
      axe4_coherence: "Le Coran utilise wahid dans d'autres versets pour dire \"un seul Dieu\" (ilahun wahid). Si le sens ici était simplement le nombre, le Coran aurait pu utiliser wahid comme ailleurs.",
      axe5_frequence: "Le nombre \"un\" est un constat objectif qui ne porte pas de jugement moral. Pour le khalifa, l'unicité qualitative oriente plus l'action que le simple comptage."
    },
    'quiconque': {
      status: 'peu_probable',
      proof_ctx: "\"Quiconque\" fonctionne dans les phrases négatives et interrogatives. Le verset 112:1 est une affirmation (\"Il est Dieu, ahad\"). Test grammatical : \"Il est quiconque\" ne correspond pas à une affirmation identitaire. Ce sens est pertinent pour le verset 112:4 (contexte négatif) mais pas pour 112:1. La frontière : \"quiconque\" est un pronom indéfini, \"unique\" est un adjectif de qualité.",
      axe1_verset: "Le verset est une déclaration affirmative, pas négative. \"Il est Dieu, quiconque\" ne fonctionne pas : le verset définit la nature de Dieu, il ne parle pas de n'importe qui. Le champ lexical est celui de l'identité, pas de l'indéfinition.",
      axe2_voisins: "Les versets voisins développent l'identité de Dieu. \"Quiconque\" est un pronom neutre qui ne contribue pas à cette définition. Le verset 4 utilise ahad en contexte négatif où \"quiconque\" est approprié, mais pas le verset 1.",
      axe3_sourate: "La sourate définit positivement Dieu (v1-2) puis négativement (v3-4). Le verset 1 est dans la partie positive. \"Quiconque\" appartient aux contextes négatifs.",
      axe4_coherence: "Le Coran utilise ahad dans le sens de \"quiconque\" exclusivement dans des phrases négatives ou interrogatives. Le verset 112:1 est affirmatif.",
      axe5_frequence: "\"Quiconque\" est un pronom neutre sans charge morale. Il ne contribue pas à la définition de Dieu."
    }
  }})
  console.log('')

  // ══════════════════════════════════════════════════
  // VERSET 112:2 — ٱللَّهُ ٱلصَّمَدُ
  // Contexte : qualification, "Dieu, celui vers qui on se tourne"
  // ══════════════════════════════════════════════════
  console.log('>>> VERSET 112:2 — "Dieu, celui vers qui on se tourne"')

  await upd(6223, 'alh', 1, { sense_chosen: 'divinité', senses: {
    'divinité': {
      status: 'retenu',
      proof_ctx: "Le verset 112:2 dit \"allahu s-samadu\" (Dieu, celui vers qui on se tourne). Allah ouvre le verset comme sujet d'une phrase nominale. Ici, le contexte est celui de la qualification : on ne dit plus QUI est Dieu (v1) mais CE QU'Il est (v2, as-samad). Test grammatical : \"Dieu\" fonctionne comme sujet. Distinction avec \"adorer\" : le verset qualifie Dieu, il ne parle pas de l'acte d'adorer.",
      axe1_verset: "Le verset dit \"allahu s-samadu\". Allah est le sujet de la phrase nominale. Le champ lexical est celui de la qualification : après l'identification (v1), on qualifie Dieu avec un attribut (as-samad = celui vers qui on se tourne). Le mot Allah relie les deux versets : même sujet, nouvel attribut.",
      axe2_voisins: "Le verset 1 identifie Dieu comme unique. Le verset 2 ajoute un attribut relationnel : celui vers qui on se tourne. La progression va de l'identité intrinsèque (unique) à la relation avec les autres (celui vers qui on se tourne). Allah est le fil conducteur.",
      axe3_sourate: "La sourate répète Allah dans les versets 1 et 2 pour ancrer la définition. Le verset 2 est la deuxième face : après l'unicité (ce que Dieu est en Lui-même), la centralité (ce que Dieu est pour les autres).",
      axe4_coherence: "Le Coran utilise Allah suivi d'attributs dans de nombreuses formules. La structure \"Allah + attribut\" est un modèle coranique classique.",
      axe5_frequence: "La centralité de Dieu (celui vers qui tout se tourne) fonde la direction de la mission du khalifa : tout converge vers un seul point."
    },
    'adorer': {
      status: 'probable',
      proof_ctx: "\"Adorer\" est le sens premier de la racine. Le verset 112:2 qualifie Dieu avec un attribut, il ne parle pas d'adoration. La frontière : le verset dit ce que Dieu EST (celui vers qui on se tourne), pas ce qu'on FAIT envers Lui (adorer).",
      axe1_verset: "Le verset qualifie Dieu (\"Dieu, as-samad\"). Le champ lexical est celui de l'attribution d'une qualité, pas de l'action de dévotion. Le verset décrit Dieu, il n'ordonne pas d'adorer.",
      axe2_voisins: "Aucun verset de la sourate ne parle d'adoration. Les versets qualifient (v1-2) et nient (v3-4).",
      axe3_sourate: "Le registre est identitaire, pas dévotionnel. L'adoration serait hors registre dans cette sourate.",
      axe4_coherence: "Le Coran distingue le nom Allah de l'acte d'adorer (ibada). Quand le Coran parle d'adoration, il utilise abada.",
      axe5_frequence: "L'adoration est une action, le verset décrit une identité."
    },
    'chercher refuge': {
      status: 'peu_probable',
      proof_ctx: "Le verset 112:2 qualifie Dieu, il ne demande pas de refuge. Le Coran utilise d'autres formules pour le refuge (audhu billahi). Le registre est identitaire, pas protecteur.",
      axe1_verset: "Le verset est une qualification (\"Dieu, celui vers qui on se tourne\"), pas une demande. Chercher refuge serait une action, le verset décrit un attribut.",
      axe2_voisins: "Aucun verset de la sourate ne parle de refuge.",
      axe3_sourate: "Le refuge est un thème des sourates 113-114, pas de 112.",
      axe4_coherence: "Le Coran utilise audhu billahi pour le refuge, pas la structure \"Allah + attribut\".",
      axe5_frequence: "Le refuge est une action ponctuelle. Le verset pose un attribut permanent."
    }
  }})

  await upd(6223, 'smd', 2, { sense_chosen: 'celui vers qui on se tourne', senses: {
    'celui vers qui on se tourne': {
      status: 'retenu',
      proof_ctx: "\"Celui vers qui on se tourne\" est le sens nominal de la racine quand elle est appliquée comme épithète, d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863). Le mot as-samad est un nom défini avec l'article al- (une forme qui désigne un titre permanent, une qualité qui ne change pas). Test grammatical : \"Dieu est celui vers qui on se tourne\" fonctionne en français courant. Distinction avec \"celui qui dure éternellement\" : \"celui vers qui on se tourne\" est relationnel (la relation entre Dieu et les autres), \"celui qui dure éternellement\" est temporel (depuis quand Dieu existe). Le Coran a d'autres mots pour l'éternité (al-hayy, al-qayyum). Le choix de as-samad, mot unique dans le Coran, suggère un sens non couvert par ces mots. Distinction avec \"solide\" : \"solide\" est physique (plein, sans creux), le Coran ne décrit pas Dieu en termes de composition matérielle.",
      axe1_verset: "Le verset dit \"allahu s-samadu\" (Dieu, celui vers qui on se tourne). Le mot as-samad est défini avec l'article al-, ce qui en fait un titre permanent. Le champ lexical est celui de la centralité : tout converge vers Dieu. D'après les sources étymologiques, la racine s-m-d a pour sens premier \"se diriger vers\". As-samad est celui vers qui cette direction converge.",
      axe2_voisins: "Le verset 1 dit que Dieu est unique (indivisible). Le verset 2 ajoute qu'Il est celui vers qui on se tourne. S'il n'y a qu'un seul être indivisible, c'est vers Lui que tout converge. Les versets 3-4 nient l'engendrement et l'existence d'un égal, ce qui renforce la centralité : pas de concurrent, pas de dérivé.",
      axe3_sourate: "Al-Ikhlas définit Dieu en quatre attributs. Le samad est le deuxième, celui qui qualifie la relation entre Dieu et tout le reste. L'unicité (v1) est intrinsèque, le samad est ce qui en découle pour les autres.",
      axe4_coherence: "Le mot as-samad n'apparaît qu'une seule fois dans tout le Coran. C'est un mot rare et unique. Le Coran a choisi ce mot unique pour un attribut unique, dans une sourate sur l'unicité.",
      axe5_frequence: "Celui vers qui on se tourne est la référence ultime pour le khalifa. La mission a un point de convergence unique. La dignité humaine est préservée car cette convergence est naturelle, pas forcée."
    },
    'celui qui dure éternellement': {
      status: 'probable',
      proof_ctx: "\"Celui qui dure éternellement\" décrit la permanence absolue. Test grammatical : \"Dieu est celui qui dure éternellement\" fonctionne. La frontière : l'éternité est intrinsèque (ce que Dieu est en Lui-même), \"celui vers qui on se tourne\" est relationnel (ce que Dieu est pour les autres). Le Coran a d'autres mots pour l'éternité (al-hayy, al-qayyum, al-awwal, al-akhir). Le choix de as-samad, mot unique dans le Coran, suggère un sens non couvert par ces mots existants.",
      axe1_verset: "Le verset dit \"allahu s-samadu\". L'éternité est un attribut cohérent : Dieu est unique (v1) et éternel (v2). Mais ce sens décrit un état intrinsèque (sa permanence), pas une relation avec les autres. Le verset 2 est le seul attribut positif de Dieu dans la sourate avant les négations (v3-4), ce qui lui donne un rôle relationnel plutôt que temporel.",
      axe2_voisins: "Les versets 3-4 nient des relations (engendrement, égalité). Si le verset 2 est aussi relationnel (celui vers qui on se tourne), la sourate a une cohérence thématique. Si le verset 2 est temporel (éternel), il détonne dans une série relationnelle.",
      axe3_sourate: "La sourate traite de la définition de Dieu par rapport aux autres : unique (pas comme les autres), celui vers qui on se tourne (relation avec les autres), pas d'enfant (pas de lien filial), pas d'égal (pas de comparable). L'éternité serait le seul attribut non-relationnel.",
      axe4_coherence: "Le Coran exprime l'éternité avec d'autres mots : al-hayy (le Vivant, sourate 2:255), al-qayyum (celui qui subsiste par Lui-même), al-awwal wal-akhir (le Premier et le Dernier, sourate 57:3). Le Coran avait des mots disponibles pour l'éternité.",
      axe5_frequence: "L'éternité est un attribut passif (Dieu existe pour toujours) qui n'oriente pas directement l'action du khalifa. \"Celui vers qui on se tourne\" donne une direction."
    },
    'solide': {
      status: 'peu_probable',
      proof_ctx: "\"Solide\" signifie plein, compact, sans creux, d'après les sources étymologiques. Test grammatical : \"Dieu est le solide\" fonctionne mais sonne physique et matériel. La frontière : \"solide\" décrit la composition interne (plein, pas creux), le Coran ne décrit pas Dieu en termes de composition matérielle. Les attributs de Dieu dans le Coran sont moraux, relationnels ou existentiels, jamais physiques.",
      axe1_verset: "Le verset dit \"allahu s-samadu\". Le mot as-samad est défini avec al-, ce qui en fait un titre. \"Le solide\" est un attribut physique. Le champ lexical du verset est celui de la qualification divine, pas de la description matérielle.",
      axe2_voisins: "Les versets voisins sont abstraits : unicité (v1), négation de l'engendrement (v3), négation de l'égalité (v4). Aucun ne parle de composition physique. \"Solide\" détonne dans cette série.",
      axe3_sourate: "La sourate opère dans un registre abstrait et identitaire, pas dans un registre physique.",
      axe4_coherence: "Le Coran ne décrit pas Dieu en termes de composition physique. Les attributs sont moraux (miséricordieux), relationnels (seigneur) ou existentiels (vivant). \"Solide\" serait une exception sans précédent.",
      axe5_frequence: "\"Solide\" est physique et ne donne ni direction ni cadre moral au khalifa."
    }
  }})
  console.log('')

  // ══════════════════════════════════════════════════
  // VERSET 112:3 — لَمْ يَلِدْ وَلَمْ يُولَدْ
  // Contexte : négation de l'engendrement
  // ══════════════════════════════════════════════════
  console.log('>>> VERSET 112:3 — "Il n\'a pas engendré et Il n\'a pas été engendré"')

  await upd(6224, 'wld', 2, { sense_chosen: 'engendrer', senses: {
    'engendrer': {
      status: 'retenu',
      proof_ctx: "\"Engendrer\" est l'acte de donner naissance, d'être à l'origine biologique d'un autre être. Le mot yalid est un verbe inaccompli forme I voix active (une forme qui décrit l'action faite par le sujet). Avec la particule lam, il devient une négation du passé : \"Il n'a pas engendré\". Test grammatical : \"Il n'a pas engendré\" fonctionne en français courant. En français, \"engendrer\" est neutre en genre, ce qui correspond au verbe arabe yalid. Distinction avec \"enfanter\" : enfanter est spécifiquement l'acte maternel (porter et mettre au monde), engendrer est plus large (être à l'origine biologique sans précision de genre). Le contexte parle de Dieu sans genre, \"engendrer\" est plus adapté.",
      axe1_verset: "Le verset dit \"lam yalid\" (Il n'a pas engendré). Le champ lexical est celui de la négation de toute procréation. La négation est absolue : Dieu n'a jamais engendré, aucune partie de Lui ne s'est séparée pour former un autre être. Le verbe yalid est à la voix active : c'est Dieu qui n'a PAS FAIT l'action d'engendrer.",
      axe2_voisins: "Le verset 1 dit que Dieu est unique (indivisible). Engendrer suppose qu'une partie de soi se sépare pour former un autre être. Si Dieu est indivisible (ahad), aucune partie ne peut se séparer. La deuxième partie du verset (\"et Il n'a pas été engendré\") nie l'inverse : Il n'est pas non plus le produit d'un autre être.",
      axe3_sourate: "Al-Ikhlas définit Dieu par ce qu'Il est (v1-2) puis par ce qu'Il n'est pas (v3-4). L'engendrement est la première chose niée. Cette négation découle de l'unicité : si Dieu est indivisible, toute forme de reproduction est impossible.",
      axe4_coherence: "Le Coran nie l'engendrement divin dans plusieurs passages (19:35, 72:3). Le verset 112:3 est la formulation la plus directe. L'usage du verbe yalid plutôt qu'un nom insiste sur l'acte même, pas juste sur le résultat.",
      axe5_frequence: "La négation de l'engendrement libère le khalifa de toute idée de filiation divine. La dignité humaine est accordée à tous, pas réservée à une progéniture divine. L'égalité repose sur l'absence de lien de parenté privilégié."
    },
    'enfanter': {
      status: 'probable',
      proof_ctx: "\"Enfanter\" est l'acte maternel de mettre au monde. Test grammatical : \"Il n'a pas enfanté\" fonctionne en français courant. La frontière avec \"engendrer\" : enfanter est spécifiquement l'acte de la mère (porter dans le ventre et mettre au monde), engendrer est neutre en genre (être à l'origine biologique). Le verbe arabe yalid ne précise pas le genre. En français, \"engendrer\" couvre les deux sans présupposer de genre, ce qui correspond mieux au contexte.",
      axe1_verset: "Le verset dit \"lam yalid\". \"Enfanter\" fonctionne grammaticalement mais implique un acte spécifiquement maternel. Le verset parle de Dieu sans genre, donc un verbe neutre en genre est plus adapté.",
      axe2_voisins: "Les versets voisins ne précisent pas de genre pour Dieu. Le verset 1 dit \"huwa\" (il) mais c'est un pronom grammatical, pas une attribution de genre. \"Enfanter\" introduirait une dimension de genre qui n'est pas dans le texte.",
      axe3_sourate: "La sourate définit Dieu en termes abstraits (unique, celui vers qui on se tourne). \"Enfanter\" est plus physique et genré qu'\"engendrer\".",
      axe4_coherence: "Le Coran utilise walada dans les deux sens (engendrer et enfanter) selon le contexte. Ici, le sujet est Dieu, donc le sens neutre en genre est préférable.",
      axe5_frequence: "\"Enfanter\" et \"engendrer\" ont la même implication pour le khalifa : pas de filiation divine. La distinction est linguistique, pas morale."
    }
  }})

  await upd(6224, 'wld', 5, { sense_chosen: 'engendrer', senses: {
    'engendrer': {
      status: 'retenu',
      proof_ctx: "Le mot yulad est le même verbe que yalid mais à la voix passive (une forme qui dit que l'action est subie, pas faite). \"Il n'a pas été engendré\" nie que Dieu soit le produit d'un autre être. Test grammatical : \"Il n'a pas été engendré\" fonctionne en français courant. La voix passive complète la voix active du début du verset : ni producteur (lam yalid) ni produit (lam yulad). Distinction avec \"enfanter\" : même raisonnement que pour la voix active, \"engendrer\" est neutre en genre.",
      axe1_verset: "Le verset dit \"wa lam yulad\" (et Il n'a pas été engendré). Le mot yulad est à la voix passive (l'action est subie). Dieu n'est pas le produit d'un autre être, Il n'a pas de source extérieure. Le champ lexical est celui de la négation de l'origine : Dieu n'a pas de parent, pas de précurseur.",
      axe2_voisins: "La première partie du verset nie que Dieu engendre (pas de descendance). La deuxième nie que Dieu soit engendré (pas d'origine). Ensemble, les deux coupent Dieu de toute chaîne de filiation dans les deux directions. Le verset 1 (unique) et le verset 4 (sans égal) encadrent ces négations.",
      axe3_sourate: "La sourate coupe Dieu de toute relation de filiation : pas d'enfant (voix active), pas de parent (voix passive). C'est une négation totale de la filiation, cohérente avec l'unicité du verset 1.",
      axe4_coherence: "Le Coran affirme que Dieu est al-Awwal (le Premier) dans la sourate 57:3. S'Il est le Premier, rien ne Le précède, donc Il n'a pas été engendré. Les deux affirmations sont cohérentes.",
      axe5_frequence: "Nier que Dieu ait été engendré fonde l'autonomie de la source pour le khalifa : Dieu ne dépend de rien ni de personne. La mission vient d'une source autonome et indépendante."
    },
    'enfanter': {
      status: 'probable',
      proof_ctx: "\"Être enfanté\" est la forme passive d'enfanter. Test grammatical : \"Il n'a pas été enfanté\" fonctionne. La frontière avec \"engendrer\" : même distinction que pour la voix active — \"enfanter\" est spécifiquement maternel, \"engendrer\" est neutre en genre. Le verbe arabe yulad ne précise pas le genre.",
      axe1_verset: "Le verset dit \"wa lam yulad\". \"Être enfanté\" fonctionne mais implique une naissance maternelle spécifique. \"Être engendré\" est plus neutre et plus adapté au contexte.",
      axe2_voisins: "Même raisonnement que pour la voix active : pas de genre dans le contexte.",
      axe3_sourate: "Même raisonnement : le registre est abstrait, pas physiquement genré.",
      axe4_coherence: "Le Coran utilise walada sans distinction de genre quand le sujet est Dieu.",
      axe5_frequence: "Même implication pour le khalifa que \"engendrer\" à la voix passive."
    }
  }})
  console.log('')

  // ══════════════════════════════════════════════════
  // VERSET 112:4 — وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ
  // Contexte : négation de l'égalité, "Et personne n'est égal à Lui"
  // ══════════════════════════════════════════════════
  console.log('>>> VERSET 112:4 — "Et personne n\'est égal à Lui"')

  await upd(6225, 'kwn', 2, { sense_chosen: 'être', senses: {
    'être': {
      status: 'retenu',
      proof_ctx: "\"Être\" est le verbe d'existence fondamental. Le mot yakun est kana à l'inaccompli (une forme qui décrit l'action en cours ou habituelle), nié par lam. Test grammatical : \"il n'y a pas pour Lui d'égal\" fonctionne. Le verbe kana fonctionne ici comme verbe incomplet (c'est-à-dire un verbe qui a besoin d'un sujet ET d'un attribut pour avoir un sens complet). Le sujet est ahadun (personne), l'attribut est kufuwan (égal). C'est un usage grammatical : le verbe porte la négation. Distinction avec \"exister\" : \"exister\" est le sens complet du verbe (il se suffit à lui-même), \"être\" est le sens incomplet (il a besoin d'un attribut). Le verset a un attribut (kufuwan), donc c'est l'usage incomplet.",
      axe1_verset: "Le verset dit \"wa lam yakun lahu kufuwan ahadun\". Le mot yakun est le verbe kana nié par lam. C'est le support grammatical de la négation : sans ce verbe, la phrase ne pourrait pas nier l'existence d'un égal. Le verbe kana est ici un outil de construction, pas un attribut de Dieu.",
      axe2_voisins: "Le verset 3 nie l'engendrement avec lam yalid. Le verset 4 nie l'égalité avec lam yakun. Les deux utilisent la même structure négative (lam + verbe inaccompli). Le verbe kana est l'outil de la deuxième négation.",
      axe3_sourate: "La sourate se termine par une négation portée par le verbe être. Après avoir nié l'engendrement (v3), elle nie l'existence même d'un comparable (v4).",
      axe4_coherence: "Le Coran utilise lam yakun dans de nombreux contextes pour nier l'existence. C'est une construction grammaticale standard.",
      axe5_frequence: "Le verbe être porte la négation finale : personne n'est l'égal de Dieu. Pour le khalifa, cela fonde l'impossibilité de prétendre au rang divin."
    },
    'exister': {
      status: 'probable',
      proof_ctx: "\"Exister\" est le sens complet de kana (avoir une existence réelle). Test grammatical : \"Il n'existe pas pour Lui d'égal\" fonctionne. La frontière avec \"être\" : \"exister\" est le sens complet (il se suffit à lui-même), \"être\" est le sens incomplet (il a besoin d'un attribut). Le verset a un attribut (kufuwan = égal), ce qui indique l'usage incomplet. Les deux sont compatibles mais \"être\" correspond mieux à la structure grammaticale.",
      axe1_verset: "Le verset dit \"lam yakun lahu kufuwan ahadun\". La présence de l'attribut kufuwan indique que le verbe kana fonctionne comme verbe incomplet (être + attribut), pas comme verbe complet (exister).",
      axe2_voisins: "Les versets voisins utilisent des structures simples pour nier des réalités. \"Exister\" est compatible mais le verbe a un attribut, ce qui indique l'usage incomplet.",
      axe3_sourate: "La sourate nie des réalités. Le verbe kana sert de support à ces négations. \"Exister\" est un sens possible mais moins précis que \"être\" dans ce contexte grammatical.",
      axe4_coherence: "Le Coran utilise kana comme verbe complet et comme verbe incomplet. La présence de l'attribut ici indique l'usage incomplet.",
      axe5_frequence: "Le résultat est le même pour le khalifa : personne n'est comparable à Dieu."
    }
  }})

  await upd(6225, 'kfw', 4, { sense_chosen: 'égal', senses: {
    'égal': {
      status: 'retenu',
      proof_ctx: "\"Égal\" signifie celui qui est du même rang, du même niveau, d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863). Le Lane's donne \"like him, equal to him\". Le mot kufuwan est un nom accusatif indéfini en position d'attribut (la partie de la phrase qui dit ce qu'est le sujet). Test grammatical : \"personne n'est égal à Lui\" fonctionne en français courant. Distinction avec \"semblable\" : \"semblable\" insiste sur la ressemblance extérieure, \"égal\" insiste sur le rang et le statut. Le verset nie le rang, pas la ressemblance : personne n'est au même niveau que Dieu. Distinction avec \"compenser\" : la compensation est transactionnelle (rendre la pareille), l'égalité est existentielle (être au même rang).",
      axe1_verset: "Le verset dit \"lam yakun lahu kufuwan ahadun\" (il n'y a personne d'égal à Lui). Le mot kufuwan est en position d'attribut : il dit CE QUE personne n'est par rapport à Dieu. D'après les sources étymologiques, kufu signifie \"celui qui est du même niveau, du même rang\". Le verset nie qu'il existe quiconque de même rang que Dieu.",
      axe2_voisins: "Le verset 1 dit que Dieu est unique. Le verset 3 nie l'engendrement. Le verset 4 complète : unique (v1) → pas d'enfant (v3) → pas d'égal (v4). Le mot kufu est la conclusion de la sourate.",
      axe3_sourate: "Al-Ikhlas se termine par la négation la plus absolue : personne n'est l'égal de Dieu. Le mot kufu porte le poids de cette conclusion.",
      axe4_coherence: "Le mot kufuwan n'apparaît qu'une seule fois dans le Coran, comme as-samad. C'est un mot rare pour un contexte unique. Le Coran utilise mithl et nazir pour la ressemblance, kufu pour l'égalité de rang.",
      axe5_frequence: "L'absence d'égal fonde l'autorité unique de Dieu. Si personne n'est l'égal de Dieu, aucun humain ne peut prétendre à Son rang. Tous les humains sont au même niveau devant Dieu."
    },
    'semblable': {
      status: 'probable',
      proof_ctx: "\"Semblable\" insiste sur la ressemblance extérieure. Test grammatical : \"personne n'est semblable à Lui\" fonctionne. La frontière avec \"égal\" : être semblable est superficiel (on peut ressembler sans être du même rang), être égal est profond (on est exactement au même niveau). D'après les sources étymologiques, kufu insiste sur l'égalité de rang, pas sur la ressemblance extérieure. Le Coran utilise mithl et nazir pour la ressemblance, kufu pour l'égalité.",
      axe1_verset: "Le verset nie que quiconque soit comparable à Dieu. \"Semblable\" fonctionne mais est moins fort qu'\"égal\". Nier la ressemblance est une négation extérieure, nier l'égalité est une négation de rang.",
      axe2_voisins: "La sourate va vers l'absolu. Le dernier verset devrait être la négation la plus forte. \"Pas d'égal\" est plus fort que \"pas de semblable\".",
      axe3_sourate: "La sourate culmine dans la négation la plus absolue. \"Pas d'égal\" est plus absolu que \"pas de semblable\".",
      axe4_coherence: "Le Coran utilise mithl et nazir pour la ressemblance. Le choix de kufu plutôt que mithl suggère un sens d'égalité de rang, pas de ressemblance.",
      axe5_frequence: "Nier la ressemblance est important mais nier l'égalité est plus fondamental pour le khalifa."
    },
    'compenser': {
      status: 'peu_probable',
      proof_ctx: "\"Compenser\" est un sens verbal de la forme III (kafaa = rendre la pareille). Le verset utilise un nom (kufuwan), pas un verbe. Test grammatical : \"personne n'est compensation à Lui\" est bancal. La frontière : la compensation est transactionnelle (on rend la pareille), l'égalité est existentielle (on est au même rang). Le verset parle d'existence, pas de transaction.",
      axe1_verset: "Le verset nie l'existence d'un comparable. La compensation est une action, pas un état d'existence. Le champ lexical est existentiel, pas transactionnel.",
      axe2_voisins: "Les versets ne parlent pas de transactions. Le registre est identitaire.",
      axe3_sourate: "La sourate définit Dieu, elle ne parle pas de compensation ou de rétribution.",
      axe4_coherence: "Le Coran utilise d'autres mots pour la compensation (jaza, din).",
      axe5_frequence: "La compensation ne contribue pas à la définition de Dieu dans ce contexte."
    }
  }})

  // ahd en position 5 — déjà fait avec les bons axes spécifiques au verset 4
  console.log('    ahd (pos=5) -> DÉJÀ FAIT')

  console.log('')
  console.log('============================================')
  console.log('  RÉÉCRITURE TERMINÉE — 8 mots mis à jour')
  console.log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
