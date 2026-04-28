// FIX — Sourate 112 — Réécriture des axes PAR VERSET dans verse_word_analyses.analysis_axes
// Chaque mot dans chaque verset a ses propres axes adaptés au contexte de CE verset
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function upd(verseId, wordKey, position, axes) {
  const {error} = await db.from('verse_word_analyses')
    .update({ analysis_axes: axes })
    .eq('verse_id', verseId).eq('word_key', wordKey).eq('position', position)
  if (error) console.log('    ERREUR: ' + error.message)
  else console.log('    ' + wordKey + ' (pos=' + position + ') -> axes insérés')
}

async function run() {
  console.log('============================================')
  console.log('  FIX — AXES PAR VERSET — SOURATE 112')
  console.log('============================================')
  console.log('')

  // ══════════════════════════════════════
  // VERSET 112:1 — قُلْ هُوَ ٱللَّهُ أَحَدٌ
  // ══════════════════════════════════════
  console.log('>>> VERSET 112:1')

  // alh (position 3) — sens retenu : divinité
  await upd(6222, 'alh', 3, {
    sense_chosen: 'divinité',
    proof_ctx: "Le verset dit \"huwa llahu ahadun\" (Il est Dieu, unique). Allah est le nom propre qui désigne la Divinité. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine a-l-h a pour sens premier \"adorer, servir\", et ilah est l'objet d'adoration. Allah est le nom propre de cette Divinité. Test grammatical : le mot est un nom propre défini. \"Il est Dieu\" fonctionne en français courant. Distinction avec \"adorer\" : adorer est l'action du fidèle (ce qu'on fait), la divinité est l'objet de cette action (ce vers quoi on se tourne). Le verset identifie qui est Dieu, il ne décrit pas l'acte d'adorer.",
    axe1_verset: "Le verset dit \"huwa llahu ahadun\" (Il est Dieu, unique). Le champ lexical est celui de l'identité : on déclare QUI est Dieu et QUELLE est Sa nature. Le mot Allah identifie la Divinité, le mot ahad qualifie Sa nature (unique, indivisible). Le verset est une déclaration d'identité, pas un récit d'actions.",
    axe2_voisins: "Le verset 2 qualifie Dieu d'as-samad (celui vers qui on se tourne). Les versets 3-4 nient l'engendrement et l'existence d'un égal. Le verset 1 ouvre cette série en identifiant Dieu : d'abord on dit qui Il est (Dieu, unique), puis on le qualifie (v2), puis on dit ce qu'Il n'est pas (v3-4).",
    axe3_sourate: "La sourate Al-Ikhlas est une sourate de définition identitaire de Dieu. Le verset 1 est le fondement de cette définition : tout commence par l'identification. Nommer Dieu est le premier acte avant de Le qualifier.",
    axe4_coherence: "Le Coran utilise Allah comme nom propre de Dieu des milliers de fois. C'est le mot le plus fréquent du Coran. L'usage est constant : Allah désigne toujours la Divinité suprême, l'objet d'adoration unique.",
    axe5_frequence: "Reconnaître la Divinité est le fondement de la mission du khalifa. Sans cette reconnaissance, pas de cadre pour la justice ni la civilisation. Le verset 1 pose ce fondement en une phrase.",
  })

  // ahd (position 4) — sens retenu : unique
  await upd(6222, 'ahd', 4, {
    sense_chosen: 'unique',
    proof_ctx: "\"Unique\" désigne ce qui est indivisible, ce qui ne peut pas être séparé en parties, d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863). Le mot ahad est un nom indéfini en position d'attribut (c'est ce qu'on appelle un khabar, la partie de la phrase qui dit ce qu'est le sujet). Test grammatical : \"Il est unique\" fonctionne en français courant. Distinction avec \"un\" : \"un\" est un nombre (il y en a un, pas deux), \"unique\" est une qualité (il est indivisible, sans pareil). D'après les sources étymologiques, ce qui est ahad ne peut pas être divisé en parties, alors que wahid peut apparaître divisible. Le Coran utilise wahid ailleurs pour le nombre (\"ilahun wahid\" = une seule divinité), mais ici il choisit ahad pour la qualité d'indivisibilité.",
    axe1_verset: "Le verset dit \"huwa llahu ahadun\" (Il est Dieu, unique). Le champ lexical est celui de l'identité absolue : on définit ce que Dieu EST dans sa nature profonde. Le mot ahad en position d'attribut indéfini qualifie la nature de Dieu, pas son nombre. D'après les sources étymologiques, ahad désigne ce qui ne peut pas être divisé en parties, ce qui est indivisible. Cette indivisibilité n'est pas une quantité mais une qualité intrinsèque.",
    axe2_voisins: "Le verset 2 dit que Dieu est as-samad (celui vers qui on se tourne). Le verset 3 dit qu'Il n'engendre pas et n'a pas été engendré. Le verset 4 dit que personne ne Lui est égal. Les versets 3-4 développent l'unicité en niant toute relation qui supposerait une division : engendrer suppose une partie de soi qui se sépare, avoir un égal suppose quelqu'un de même nature.",
    axe3_sourate: "Al-Ikhlas signifie \"la pureté\". La sourate définit Dieu dans sa pureté absolue : unique, vers qui tout se tourne, sans engendrement, sans égal. L'unicité est le fondement sur lequel reposent les trois autres versets.",
    axe4_coherence: "Le Coran utilise wahid quand il veut exprimer le nombre \"un seul\" (sourate 2:163). Le choix de ahad au lieu de wahid n'est pas anodin. D'après les sources étymologiques, wahid peut désigner quelque chose qui apparaît divisible, ahad désigne ce qui est absolument indivisible.",
    axe5_frequence: "L'unicité de Dieu est le fondement de la mission du khalifa. Si Dieu est unique et indivisible, la relation avec Lui est directe, sans intermédiaire. Le khalifa n'a pas besoin de passer par un autre pour accomplir sa mission de justice.",
  })
  console.log('')

  // ══════════════════════════════════════
  // VERSET 112:2 — ٱللَّهُ ٱلصَّمَدُ
  // ══════════════════════════════════════
  console.log('>>> VERSET 112:2')

  // alh (position 1) — sens retenu : divinité
  await upd(6223, 'alh', 1, {
    sense_chosen: 'divinité',
    proof_ctx: "Le verset dit \"allahu s-samadu\" (Dieu, celui vers qui on se tourne). Allah ouvre le verset comme sujet. Le verset 2 n'est pas une nouvelle identification mais une qualification : on ne dit plus QUI est Dieu (v1) mais CE QU'Il est (v2). Test grammatical : \"Dieu\" fonctionne comme sujet en français courant.",
    axe1_verset: "Le verset dit \"allahu s-samadu\". Allah est le sujet de la phrase nominale. Le champ lexical est celui de la qualification : après l'identification (v1), on qualifie Dieu avec un attribut (as-samad).",
    axe2_voisins: "Le verset 1 identifie Dieu comme unique. Le verset 2 ajoute un attribut : celui vers qui on se tourne. La progression va de l'identité (v1) à la relation (v2). Allah est le fil conducteur entre les deux versets.",
    axe3_sourate: "La sourate répète Allah dans les versets 1 et 2 pour ancrer la définition. Le verset 2 est la deuxième face de la définition : après l'unicité, la centralité.",
    axe4_coherence: "Le Coran utilise Allah suivi d'un attribut dans de nombreuses formules (Allah al-ghafur, Allah ar-rahim). La structure \"Allah + attribut\" est un modèle coranique classique.",
    axe5_frequence: "Le sujet de la phrase est Dieu. Pour le khalifa, la centralité de Dieu (celui vers qui tout se tourne) fonde la direction de la mission : tout converge vers un seul point.",
  })

  // smd (position 2) — sens retenu : celui vers qui on se tourne
  await upd(6223, 'smd', 2, {
    sense_chosen: 'celui vers qui on se tourne',
    proof_ctx: "\"Celui vers qui on se tourne\" est le sens nominal de la racine quand elle est appliquée comme épithète, d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863). Le mot as-samad est un nom défini avec l'article al- (une forme qui désigne un titre permanent). Test grammatical : \"Dieu est celui vers qui on se tourne\" fonctionne en français courant. Distinction avec \"celui qui dure éternellement\" : \"celui vers qui on se tourne\" décrit une relation (les autres convergent vers Lui), \"celui qui dure éternellement\" décrit un état (Il existe pour toujours). Le Coran a d'autres mots pour l'éternité (al-hayy, al-qayyum). Le choix de as-samad, mot unique dans le Coran, suggère un sens non couvert par ces mots. Distinction avec \"solide\" : \"solide\" est physique (plein, sans creux), le Coran ne décrit pas Dieu en termes de composition matérielle.",
    axe1_verset: "Le verset dit \"allahu s-samadu\" (Dieu, celui vers qui on se tourne). Le mot as-samad est défini avec l'article al-, ce qui en fait un titre permanent. Le champ lexical est celui de la centralité : tout converge vers Dieu. D'après les sources étymologiques, la racine s-m-d a pour sens premier \"se diriger vers\". As-samad est celui vers qui cette direction converge.",
    axe2_voisins: "Le verset 1 dit que Dieu est unique (indivisible). Le verset 2 ajoute qu'Il est celui vers qui on se tourne. La progression est logique : s'il n'y a qu'un seul être indivisible, c'est vers Lui que tout converge. Les versets 3-4 nient l'engendrement et l'existence d'un égal, ce qui renforce la centralité : pas de concurrent, pas de dérivé.",
    axe3_sourate: "Al-Ikhlas définit Dieu en quatre attributs. Le samad est le deuxième, celui qui qualifie la relation entre Dieu et tout le reste. L'unicité (v1) est intrinsèque, le samad est ce qui en découle pour les autres : puisqu'Il est unique, c'est vers Lui que tout se dirige.",
    axe4_coherence: "Le mot as-samad n'apparaît qu'une seule fois dans tout le Coran, dans ce verset. C'est un mot rare et unique dans le texte coranique. Le Coran a choisi ce mot unique pour un attribut unique, dans une sourate sur l'unicité.",
    axe5_frequence: "Celui vers qui on se tourne est la référence ultime pour le khalifa. La mission de justice et de civilisation a un point de convergence unique. La dignité humaine est préservée car cette convergence est naturelle, pas forcée.",
  })
  console.log('')

  // ══════════════════════════════════════
  // VERSET 112:3 — لَمْ يَلِدْ وَلَمْ يُولَدْ
  // ══════════════════════════════════════
  console.log('>>> VERSET 112:3')

  // wld actif (position 2) — sens retenu : engendrer
  await upd(6224, 'wld', 2, {
    sense_chosen: 'engendrer',
    proof_ctx: "\"Engendrer\" est l'acte de donner naissance à un autre être. Le mot yalid est un verbe inaccompli forme I voix active (une forme qui décrit l'action faite par le sujet). Avec la particule lam, il devient une négation du passé : \"Il n'a pas engendré\". Test grammatical : \"Il n'a pas engendré\" fonctionne en français courant. En français, \"engendrer\" est neutre en genre, ce qui correspond au verbe arabe yalid. Distinction avec \"enfanter\" : enfanter est spécifiquement l'acte maternel (porter et mettre au monde), engendrer est plus large (être à l'origine biologique sans précision de genre).",
    axe1_verset: "Le verset dit \"lam yalid\" (Il n'a pas engendré). Le champ lexical est celui de la négation de toute procréation. Engendrer signifie être à l'origine biologique d'un autre être. La négation est absolue : Dieu n'a jamais engendré, il n'y a pas eu de séparation d'une partie de Lui pour former un autre être.",
    axe2_voisins: "Le verset 1 dit que Dieu est unique (indivisible). Engendrer suppose qu'une partie de soi se sépare pour former un autre être. Si Dieu est indivisible (ahad), aucune partie ne peut se séparer. La deuxième partie du verset (\"et Il n'a pas été engendré\") nie l'inverse : Il n'est pas non plus le produit d'un autre être.",
    axe3_sourate: "Al-Ikhlas définit Dieu par ce qu'Il est (v1-2) puis par ce qu'Il n'est pas (v3-4). L'engendrement est la première chose niée. Cette négation est structurelle : si Dieu est unique et indivisible, toute forme de reproduction est impossible.",
    axe4_coherence: "Le Coran nie explicitement l'engendrement divin dans plusieurs passages (19:35, 72:3). Le verset 112:3 est la formulation la plus directe. L'usage du verbe yalid plutôt qu'un nom insiste sur l'acte même, pas juste sur le résultat.",
    axe5_frequence: "La négation de l'engendrement libère le khalifa de toute idée de filiation divine. La dignité humaine est accordée à tous, pas réservée à une \"progéniture divine\". L'égalité fondamentale repose sur l'absence de lien de parenté privilégié.",
  })

  // wld passif (position 5) — sens retenu : engendrer (passif)
  await upd(6224, 'wld', 5, {
    sense_chosen: 'engendrer',
    proof_ctx: "Le mot yulad est le même verbe que yalid mais à la voix passive (une forme qui dit que l'action est subie, pas faite). \"Il n'a pas été engendré\" nie que Dieu soit le produit d'un autre être. Test grammatical : \"Il n'a pas été engendré\" fonctionne en français courant. La voix passive complète la voix active : ni producteur (v3a) ni produit (v3b).",
    axe1_verset: "Le verset dit \"wa lam yulad\" (et Il n'a pas été engendré). Le mot yulad est à la voix passive (une forme qui dit que l'action est subie). Le champ lexical est celui de la négation de l'origine : Dieu n'a pas de source, Il n'est pas le produit d'un autre être.",
    axe2_voisins: "La première partie du verset nie que Dieu engendre (pas de descendance). La deuxième partie nie que Dieu soit engendré (pas d'origine). Ensemble, les deux négations isolent Dieu de toute chaîne de filiation. Le verset 1 (unique) et le verset 4 (sans égal) encadrent ces négations.",
    axe3_sourate: "La sourate coupe Dieu de toute relation de filiation dans les deux directions : pas d'enfant (voix active), pas de parent (voix passive). C'est une négation totale de la filiation.",
    axe4_coherence: "Le Coran nie que Dieu ait été engendré implicitement dans plusieurs passages où il affirme que Dieu est le Premier (al-Awwal) : s'Il est le Premier, rien ne Le précède.",
    axe5_frequence: "Nier que Dieu ait été engendré signifie qu'Il n'a pas d'origine extérieure. Pour le khalifa, cela fonde l'autonomie de la source de la mission : Dieu ne dépend de rien ni de personne.",
  })
  console.log('')

  // ══════════════════════════════════════
  // VERSET 112:4 — وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ
  // ══════════════════════════════════════
  console.log('>>> VERSET 112:4')

  // kwn (position 2) — sens retenu : être
  await upd(6225, 'kwn', 2, {
    sense_chosen: 'être',
    proof_ctx: "\"Être\" est le verbe d'existence fondamental. Le mot yakun est kana à l'inaccompli (une forme qui décrit l'action en cours ou habituelle), nié par lam. Test grammatical : \"Il n'y a pas pour Lui d'égal\" fonctionne. Le verbe kana fonctionne ici comme verbe incomplet (c'est-à-dire qu'il a besoin d'un sujet ET d'un attribut). Le sujet est ahadun (quiconque), l'attribut est kufuwan (égal). C'est un usage grammatical : le verbe porte la négation.",
    axe1_verset: "Le verset dit \"wa lam yakun lahu kufuwan ahadun\" (et il n'y a pas pour Lui d'égal, personne). Le mot yakun est le verbe kana nié par lam. C'est le support grammatical de la négation : sans ce verbe, la phrase ne pourrait pas nier l'existence d'un égal.",
    axe2_voisins: "Le verset 3 nie l'engendrement avec lam yalid. Le verset 4 nie l'égalité avec lam yakun. Les deux versets utilisent la même structure négative (lam + verbe inaccompli) pour nier des réalités différentes. Le verbe kana est l'outil de construction de la deuxième négation.",
    axe3_sourate: "La sourate se termine par une négation structurelle portée par le verbe être. Après avoir nié l'engendrement (v3), elle nie l'existence même d'un comparable (v4). Le verbe kana porte le poids de cette dernière négation.",
    axe4_coherence: "Le Coran utilise lam yakun dans de nombreux contextes pour nier l'existence de quelque chose. C'est une construction grammaticale standard. L'usage ici est parfaitement cohérent.",
    axe5_frequence: "Le verbe être porte la négation finale de la sourate : personne n'est l'égal de Dieu. Pour le khalifa, cette négation fonde l'impossibilité de prétendre au rang divin.",
  })

  // kfw (position 4) — sens retenu : égal
  await upd(6225, 'kfw', 4, {
    sense_chosen: 'égal',
    proof_ctx: "\"Égal\" signifie celui qui est du même rang, du même niveau, d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863). Le Lane's donne \"like him, equal to him\". Le mot kufuwan est un nom accusatif indéfini en position d'attribut. Test grammatical : \"personne n'est égal à Lui\" fonctionne en français courant. Distinction avec \"semblable\" : \"semblable\" insiste sur la ressemblance extérieure, \"égal\" insiste sur le rang et le statut. Le verset nie le rang, pas la ressemblance. Distinction avec \"compenser\" : la compensation est transactionnelle, l'égalité est existentielle.",
    axe1_verset: "Le verset dit \"lam yakun lahu kufuwan ahadun\" (il n'y a personne d'égal à Lui). Le mot kufuwan est en position d'attribut : il dit CE QUE personne n'est par rapport à Dieu. D'après les sources étymologiques, kufu signifie \"celui qui est du même niveau, du même rang\". Le verset nie qu'il existe quiconque de même rang que Dieu.",
    axe2_voisins: "Le verset 1 dit que Dieu est unique. Le verset 3 nie l'engendrement. Le verset 4 complète en niant l'existence d'un égal. La progression est logique : unique (v1) → pas d'enfant (v3) → pas d'égal (v4). Le mot kufu (égal) est la conclusion de la sourate.",
    axe3_sourate: "Al-Ikhlas se termine par la négation la plus absolue : personne n'est l'égal de Dieu. Le mot kufu porte tout le poids de cette conclusion. La sourate passe de l'affirmation (v1-2) à la négation (v3-4), et le mot kufu est le dernier élément de cette négation.",
    axe4_coherence: "Le mot kufuwan n'apparaît qu'une seule fois dans le Coran. Comme as-samad, c'est un mot rare réservé à un contexte unique. Le Coran utilise mithl et nazir pour la ressemblance, kufu pour l'égalité de rang.",
    axe5_frequence: "L'absence d'égal fonde l'autorité unique de Dieu pour le khalifa. Si personne n'est l'égal de Dieu, aucun humain ne peut prétendre à Son rang. Tous les humains sont au même niveau devant Dieu.",
  })

  // ahd en contexte négatif (position 5) — sens retenu : quiconque
  // Déjà fait précédemment, mais on vérifie
  const {data: existing} = await db.from('verse_word_analyses')
    .select('analysis_axes').eq('verse_id', 6225).eq('word_key', 'ahd').eq('position', 5)
  if (existing && existing[0] && existing[0].analysis_axes) {
    console.log('    ahd (pos=5) -> axes déjà présents (fait précédemment)')
  } else {
    console.log('    ahd (pos=5) -> MANQUANT, à ajouter')
  }

  console.log('')
  console.log('============================================')
  console.log('  FIX TERMINÉ — Axes par verset pour sourate 112')
  console.log('  8 verse_word_analyses mis à jour')
  console.log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
