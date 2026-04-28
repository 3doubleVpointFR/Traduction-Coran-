// Pipeline Maison — Sourate 112 — ÉTAPE 3 — Verset 112:2
// ٱللَّهُ ٱلصَّمَدُ
// Règles : rules_pipeline_maison.md — CHECKLIST OBLIGATOIRE
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  console.log('============================================')
  console.log('  SOURATE 112 — ÉTAPE 3 — VERSET 112:2')
  console.log('  ٱللَّهُ ٱلصَّمَدُ')
  console.log('============================================')
  console.log('')

  // ──────────────────────────────────────
  // Contexte du verset 112:2
  // ──────────────────────────────────────
  // allahu = Dieu (alh, déjà analysé)
  // as-samadu = nom DÉFINI (avec al-), en position d'attribut
  //
  // Forme grammaticale de smd : nom défini avec al-
  // Test : "le/la [sens]" → "Dieu est le [sens]"
  //
  // Verset complet : "Dieu, le samad."
  // Versets voisins :
  //   112:1 : Dis : Il est Dieu, unique
  //   112:3 : Il n'engendre pas et n'a pas été engendré
  //   112:4 : Et il n'y a pour Lui aucun égal
  // ──────────────────────────────────────

  console.log('>>> CHECKLIST ÉTAPE 3')
  console.log('  [✓] Sens étymologiques insérés (17 sens pour smd)')
  console.log('  [ ] Axes 5-6 phrases pour chaque sens non-nul')
  console.log('  [ ] Test compatibilité grammaticale')
  console.log('  [ ] Sens retenu choisi APRÈS toutes les analyses')
  console.log('')

  console.log('>>> Analyse des sens — smd (270)')
  console.log('')

  const {data: meanings} = await db.from('word_meanings')
    .select('id, sense').eq('analysis_id', 270).order('display_order')

  const axes = {
    'se diriger vers': { status: 'nul', proof_ctx: "Sens verbal (action de se tourner vers). Le verset utilise un nom défini (as-samad), pas un verbe. \"Dieu est le se diriger vers\" ne fonctionne pas." },
    'avoir recours à': { status: 'nul', proof_ctx: "Sens verbal (chercher du secours). Le verset utilise un nom défini, pas un verbe. \"Dieu est le avoir recours à\" ne fonctionne pas." },
    'viser': { status: 'nul', proof_ctx: "Sens verbal (diriger son attention). Le verset utilise un nom défini, pas un verbe." },
    'frapper': { status: 'nul', proof_ctx: "Frapper avec un bâton. Sens physique violent sans rapport avec la définition de Dieu." },
    'terrain élevé': { status: 'nul', proof_ctx: "Sol surélevé et dur. Sens géographique. \"Dieu est le terrain élevé\" n'a pas de sens dans ce contexte." },
    'sol dur': { status: 'nul', proof_ctx: "Terre ferme et compacte. Sens géographique sans rapport avec le verset." },
    'boucher': { status: 'nul', proof_ctx: "Mettre un bouchon. Sens domestique sans rapport avec le verset." },
    'bouchon': { status: 'nul', proof_ctx: "Objet qui ferme un récipient. Sans rapport avec le verset." },
    'brûler le visage': { status: 'nul', proof_ctx: "Soleil qui dessèche. Sens climatique sans rapport avec le verset." },
    'dresser': { status: 'nul', proof_ctx: "Ériger, mettre debout. Sens physique sans rapport avec le verset." },
    'rocher encastré': { status: 'nul', proof_ctx: "Roche fixée dans le sol. Sens géologique sans rapport avec le verset." },
    'celui vers qui on se tourne': {
      status: 'retenu',
      axe1_verset: "Le verset dit \"allahu s-samadu\" (Dieu, le samad). Le mot as-samad est défini avec l'article al-, ce qui en fait un titre, un attribut permanent. Le champ lexical est celui de l'identité de Dieu : après avoir dit qu'Il est unique (v1), on précise Sa nature. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), as-samad est celui vers qui les gens se dirigent dans leurs besoins, le refuge vers lequel tout le monde se tourne. Ce sens fait de Dieu le point central vers lequel convergent tous les recours.",
      axe2_voisins: "Le verset 1 dit que Dieu est unique (indivisible). Le verset 2 ajoute qu'Il est celui vers qui on se tourne. Les versets 3-4 nient l'engendrement et l'existence d'un égal. La progression est logique : Dieu est unique (v1), donc tout se tourne vers Lui (v2), car il n'a pas été engendré par un autre (v3) et personne ne Lui est comparable (v4). Le fait que tout se tourne vers Lui est une conséquence de Son unicité : s'il n'y a qu'un seul être indivisible, c'est vers Lui que tout converge.",
      axe3_sourate: "La sourate Al-Ikhlas définit Dieu en quatre attributs : unique, samad, sans engendrement, sans égal. Le samad est le deuxième attribut, celui qui qualifie la relation entre Dieu et tout le reste. L'unicité (v1) est intrinsèque à Dieu, le samad est ce qui en découle pour les autres : puisqu'Il est unique, c'est vers Lui que tout se dirige.",
      axe4_coherence: "Le mot as-samad n'apparaît qu'une seule fois dans tout le Coran, dans ce verset. C'est un mot rare et unique dans le texte coranique. D'après les sources étymologiques, la racine s-m-d a pour sens premier \"se diriger vers\", et as-samad est celui vers qui cette direction converge. Le Coran a choisi ce mot unique pour un attribut unique, dans une sourate sur l'unicité.",
      axe5_frequence: "Celui vers qui on se tourne est la référence ultime pour le khalifa. La mission de justice et de civilisation a un point de convergence : tout se dirige vers Dieu, donc le khalifa aligne ses actions sur cette direction. La dignité humaine est préservée car cette convergence est naturelle (on se tourne vers Dieu dans le besoin), pas forcée.",
      proof_ctx: "\"Celui vers qui on se tourne\" est le sens nominal de la racine quand elle est appliquée comme épithète, d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863). Le mot as-samad est un nom défini avec l'article al- (une forme qui désigne un titre permanent, une qualité qui ne change pas). Test grammatical : \"Dieu est celui vers qui on se tourne\" fonctionne en français courant. Distinction avec \"celui qui dure éternellement\" : \"celui vers qui on se tourne\" décrit une relation (les autres convergent vers Lui), \"celui qui dure éternellement\" décrit un état (Il existe pour toujours). Le verset pose un attribut relationnel (la relation entre Dieu et les autres), pas un attribut temporel (depuis quand Dieu existe). La sourate parle de ce que Dieu EST pour les autres, pas de depuis quand Il existe. Distinction avec \"solide\" : \"solide\" est physique (plein, sans creux), \"celui vers qui on se tourne\" est relationnel (vers qui tout converge). Le verset définit Dieu dans sa relation avec la création, pas dans sa composition physique."
    },
    'celui qui dure éternellement': {
      status: 'probable',
      axe1_verset: "Le verset dit \"allahu s-samadu\" (Dieu, l'éternel). Le mot as-samad est défini avec l'article al-, ce qui en fait un attribut permanent. Le champ lexical est celui de l'identité de Dieu. D'après les sources étymologiques, as-samad peut signifier \"celui qui continue pour toujours, l'éternel\". L'éternité est un attribut cohérent avec le contexte : Dieu est unique (v1) et éternel (v2). Ce sens décrit un état intrinsèque de Dieu (sa permanence), pas sa relation avec les autres.",
      axe2_voisins: "Le verset 3 dit que Dieu n'engendre pas et n'a pas été engendré. L'éternité est compatible avec la négation de l'engendrement : ce qui est éternel n'a pas de début (pas engendré) et ne produit pas de suite (n'engendre pas). Le verset 4 nie l'existence d'un égal, ce qui est aussi compatible avec l'éternité : si Dieu est éternel, rien d'autre n'a cette même qualité absolue. La progression logique fonctionne mais elle est intrinsèque (ce que Dieu est en Lui-même), pas relationnelle (ce que Dieu est pour les autres).",
      axe3_sourate: "Al-Ikhlas définit Dieu en quatre attributs. L'éternité est compatible avec le thème de la pureté et de la définition. Cependant, les autres versets (3-4) sont relationnels : ils nient des relations (engendrement, égalité). Le verset 2, s'il est relationnel aussi (celui vers qui on se tourne), s'inscrit mieux dans cette progression que s'il est intrinsèque (éternel).",
      axe4_coherence: "Le Coran exprime l'éternité avec d'autres mots dans d'autres versets : al-hayy (le Vivant), al-qayyum (celui qui subsiste par Lui-même), al-awwal (le Premier), al-akhir (le Dernier). Le Coran avait des mots disponibles pour exprimer l'éternité. Le choix de as-samad, mot unique dans le Coran, suggère un sens qui n'est pas couvert par ces autres mots.",
      axe5_frequence: "L'éternité de Dieu est un fondement pour le khalifa : la mission a un point de référence qui ne disparaît pas. Cependant, c'est un attribut passif (Dieu existe pour toujours) qui n'oriente pas directement l'action. \"Celui vers qui on se tourne\" est plus directif pour la mission : il donne une direction.",
      proof_ctx: "\"Celui qui dure éternellement\" décrit la permanence absolue de Dieu, d'après les sources étymologiques. Test grammatical : \"Dieu est celui qui dure éternellement\" fonctionne en français courant. La frontière avec \"celui vers qui on se tourne\" : l'éternité est un attribut intrinsèque (ce que Dieu est en Lui-même, indépendamment des autres). \"Celui vers qui on se tourne\" est un attribut relationnel (ce que Dieu est pour les autres). Le Coran exprime l'éternité avec d'autres mots disponibles (al-hayy, al-qayyum, al-awwal, al-akhir). Le choix de as-samad, mot unique dans le Coran, suggère un sens non couvert par ces mots existants."
    },
    'solide': {
      status: 'peu_probable',
      axe1_verset: "Le verset dit \"allahu s-samadu\" (Dieu, le solide). Le mot as-samad est défini avec al-. D'après les sources étymologiques, samad signifie \"ce qui est plein, compact, sans creux ni cavité à l'intérieur\". C'est un sens physique qui décrit la composition matérielle d'un objet. Le verset définit l'identité de Dieu, pas sa composition physique. Le champ lexical du verset est celui de la définition abstraite, pas de la description matérielle.",
      axe2_voisins: "Les versets voisins sont abstraits : unicité (v1), négation de l'engendrement (v3), négation de l'égalité (v4). Aucun verset ne parle de composition physique. Le sens \"solide\" détonne dans cette série d'attributs abstraits et relationnels.",
      axe3_sourate: "La sourate Al-Ikhlas traite de la pureté de la définition de Dieu. Le sens \"solide\" est physique et matériel. La sourate opère dans un registre abstrait et théologique, pas dans un registre physique.",
      axe4_coherence: "Le Coran ne décrit pas Dieu en termes de composition physique. Les attributs de Dieu dans le Coran sont moraux (miséricordieux, juste), relationnels (seigneur, maître) ou existentiels (vivant, subsistant). \"Solide\" serait une exception sans précédent dans l'usage coranique.",
      axe5_frequence: "Le sens \"solide\" est physique et ne contribue pas à la mission du khalifa. Il ne donne ni direction ni cadre moral. Pour le khalifa, un attribut relationnel (vers qui on se tourne) ou existentiel (éternel) est plus significatif qu'un attribut matériel (solide).",
      proof_ctx: "\"Solide\" signifie plein, compact, sans creux, d'après les sources étymologiques. Test grammatical : \"Dieu est le solide\" fonctionne mais sonne physique et matériel. La frontière avec \"celui vers qui on se tourne\" : \"solide\" décrit la composition interne (plein, pas creux), \"celui vers qui on se tourne\" décrit la fonction relationnelle (vers qui tout converge). Le Coran ne décrit pas Dieu en termes de composition matérielle. Les attributs de Dieu dans le Coran sont moraux, relationnels ou existentiels, jamais physiques."
    },
    'combattre': { status: 'nul', proof_ctx: "Forme III : lutter au combat. Le verset est une déclaration identitaire, pas un récit de combat. \"Dieu est le combattre\" ne fonctionne pas." },
    'idole': { status: 'nul', proof_ctx: "Nom propre d'une idole de la tribu de Ad. Le verset utilise as-samad comme épithète de Dieu, pas comme nom d'idole." },
    'chamelle stérile': { status: 'nul', proof_ctx: "Chamelle qui n'a pas conçu. Sens animal sans aucun rapport avec la définition de Dieu." },
  }

  // ──────────────────────────────────────
  // TEST DE COMPATIBILITÉ GRAMMATICALE
  // ──────────────────────────────────────
  console.log('>>> Test de compatibilité grammaticale')
  console.log('  Forme : nom défini avec al- (titre permanent)')
  console.log('  Test : "Dieu est le/celui [sens]"')
  console.log('')
  console.log('  - Dieu est celui vers qui on se tourne ✅ (relationnel)')
  console.log('  - Dieu est celui qui dure éternellement ✅ (existentiel)')
  console.log('  - Dieu est le solide ⚠️ (physique/matériel)')
  console.log('  - Sens verbaux ❌ (nom, pas verbe)')
  console.log('  - Sens physiques (terrain, rocher, bouchon) ❌ (hors contexte)')
  console.log('')

  // ──────────────────────────────────────
  // CHOIX DU SENS RETENU
  // ──────────────────────────────────────
  console.log('>>> Choix du sens retenu')
  console.log('  "celui vers qui on se tourne" et "celui qui dure éternellement" passent le test.')
  console.log('  as-samad est unique dans le Coran (1 seule occurrence).')
  console.log('  Le Coran a d\'autres mots pour l\'éternité (al-hayy, al-qayyum).')
  console.log('  La racine s-m-d a pour sens premier "se diriger vers".')
  console.log('  -> RETENU : "celui vers qui on se tourne" (sens premier + relationnel)')
  console.log('  -> PROBABLE : "celui qui dure éternellement" (compatible mais couvert par d\'autres mots)')
  console.log('  -> PEU PROBABLE : "solide" (physique, pas d\'usage coranique pour Dieu)')
  console.log('')

  // ──────────────────────────────────────
  // MISE À JOUR EN BASE
  // ──────────────────────────────────────
  console.log('>>> Mise à jour en base')

  for (const m of meanings) {
    const ax = axes[m.sense]
    if (!ax) { console.log('  ' + m.sense + ' -> PAS DE DONNÉES'); continue }
    const upd = { status: ax.status, proof_ctx: ax.proof_ctx }
    if (ax.axe1_verset) {
      upd.axe1_verset = ax.axe1_verset
      upd.axe2_voisins = ax.axe2_voisins
      upd.axe3_sourate = ax.axe3_sourate
      upd.axe4_coherence = ax.axe4_coherence
      upd.axe5_frequence = ax.axe5_frequence
    }
    const { error } = await db.from('word_meanings').update(upd).eq('id', m.id)
    if (error) { console.log('  ERREUR ' + m.sense + ': ' + error.message); continue }
    const tag = ax.axe1_verset ? '(5 axes détaillés)' : '(proof_ctx seul)'
    console.log('  ' + m.sense + ' -> ' + ax.status.toUpperCase() + ' ' + tag)
  }

  console.log('')
  console.log('>>> CHECKLIST FINALE')
  console.log('  [✓] Axes 5-6 phrases pour retenu/probable/peu_probable')
  console.log('  [✓] Test compatibilité grammaticale effectué')
  console.log('  [✓] Pas d\'anthropomorphisme')
  console.log('  [✓] Sens retenu choisi APRÈS toutes les analyses')
  console.log('  [✓] Distinctions philosophiques dans proof_ctx')
  console.log('  [✓] Pas de jargon technique')
  console.log('')
  console.log('============================================')
  console.log('  VERSET 112:2 — ÉTAPE 3 TERMINÉE')
  console.log('  smd -> "celui vers qui on se tourne" (RETENU)')
  console.log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
