// Pipeline Maison — Sourate 112 — ÉTAPE 3 — Versets 112:3 et 112:4
// 112:3 : لَمْ يَلِدْ وَلَمْ يُولَدْ
// 112:4 : وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ
// Règles : rules_pipeline_maison.md — CHECKLIST OBLIGATOIRE
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  console.log('============================================')
  console.log('  SOURATE 112 — ÉTAPE 3 — VERSETS 112:3-4')
  console.log('============================================')
  console.log('')

  // ══════════════════════════════════════
  // VERSET 112:3 — لَمْ يَلِدْ وَلَمْ يُولَدْ
  // ══════════════════════════════════════
  console.log('──────────────────────────────────────')
  console.log('  VERSET 112:3')
  console.log('  لَمْ يَلِدْ وَلَمْ يُولَدْ')
  console.log('──────────────────────────────────────')
  console.log('')

  // Contexte :
  // lam yalid = Il n'a pas engendré (verbe accompli négatif, forme I, voix active)
  // wa lam yulad = et Il n'a pas été engendré (verbe accompli négatif, forme I, voix passive)
  //
  // Forme grammaticale de wld :
  //   yalid = verbe inaccompli forme I voix active (il engendre)
  //   yulad = verbe inaccompli forme I voix passive (il est engendré)
  // Avec lam = négation du passé : "il n'a pas engendré" / "il n'a pas été engendré"
  //
  // Test actif : "Il n'a pas [fait le sens]"
  // Test passif : "Il n'a pas été [subi le sens]"

  console.log('>>> Analyse des sens — wld (271)')
  console.log('  Forme active : verbe inaccompli + lam = "Il n\'a pas [fait le sens]"')
  console.log('  Forme passive : verbe inaccompli passif + lam = "Il n\'a pas été [subi le sens]"')
  console.log('')

  const {data: wldMeanings} = await db.from('word_meanings')
    .select('id, sense').eq('analysis_id', 271).order('display_order')

  const wldAxes = {
    'enfanter': {
      status: 'probable',
      axe1_verset: "Le verset dit \"lam yalid\" (Il n'a pas enfanté). Le champ lexical est celui de la négation de la reproduction. \"Enfanter\" est l'acte de la mère : mettre au monde un enfant. Le verset nie que Dieu ait mis au monde un être. Le mot yalid est à la voix active, ce qui correspond à l'acte de produire un enfant. Cependant, \"enfanter\" est spécifiquement l'acte féminin de donner naissance, alors que le contexte parle de Dieu sans genre.",
      axe2_voisins: "Le verset 1 dit que Dieu est unique (indivisible). Le verset 2 dit qu'Il est celui vers qui on se tourne. La négation de l'enfantement (v3) développe l'unicité : si Dieu est indivisible, alors aucune partie de Lui ne peut se séparer pour former un autre être. Le verset 4 complète en niant l'existence d'un égal. L'enfantement et l'engendrement sont deux facettes de la même négation.",
      axe3_sourate: "Al-Ikhlas nie toute relation de filiation avec Dieu. L'enfantement est l'acte maternel de mise au monde. La sourate nie à la fois l'engendrement (paternel) et l'enfantement (maternel), couvrant les deux aspects de la procréation.",
      axe4_coherence: "Le Coran utilise walada et ses dérivés dans de nombreux passages. Le verbe yalid peut couvrir l'enfantement comme l'engendrement selon le contexte. Le Coran nie explicitement que Dieu ait un enfant dans plusieurs sourates (sourate 19:35, sourate 72:3).",
      axe5_frequence: "Nier l'enfantement libère le khalifa de toute idée de filiation divine. La dignité humaine n'est pas fondée sur un lien de parenté avec Dieu mais sur la mission confiée par Dieu.",
      proof_ctx: "\"Enfanter\" est l'acte féminin de mettre au monde. Test grammatical : \"Il n'a pas enfanté\" fonctionne en français courant. La frontière avec \"engendrer\" : enfanter est l'acte physique de la mère (porter et mettre au monde), engendrer est l'acte du père (être à l'origine biologique). Le verbe arabe yalid couvre les deux sens sans préciser le genre. En français, \"engendrer\" est plus neutre et s'applique sans distinction de genre, ce qui correspond mieux au contexte."
    },
    'engendrer': {
      status: 'retenu',
      axe1_verset: "Le verset dit \"lam yalid\" (Il n'a pas engendré). Le champ lexical est celui de la négation de toute procréation. \"Engendrer\" est l'acte de donner naissance, d'être à l'origine biologique d'un autre être. Le mot yalid est un verbe inaccompli forme I voix active (une forme qui décrit l'action en cours ou habituelle, niée ici par lam qui transforme en passé). La négation est absolue : Dieu n'a jamais engendré, il n'y a pas eu de séparation d'une partie de Lui pour former un autre être.",
      axe2_voisins: "Le verset 1 dit que Dieu est unique (indivisible). Le verset 2 dit qu'Il est celui vers qui on se tourne. La négation de l'engendrement (v3) est le développement logique de l'unicité : engendrer suppose qu'une partie de soi se sépare pour former un autre être. Si Dieu est indivisible (ahad), alors aucune partie ne peut se séparer. La deuxième partie du verset (\"et Il n'a pas été engendré\") nie l'inverse : Il n'est pas non plus le produit d'un autre être.",
      axe3_sourate: "Al-Ikhlas définit Dieu par ce qu'Il est (v1-2) puis par ce qu'Il n'est pas (v3-4). L'engendrement est la première chose niée. Cette négation est structurelle : si Dieu est unique et indivisible, toute forme de reproduction est impossible. La sourate utilise la négation pour renforcer la définition positive des versets 1-2.",
      axe4_coherence: "Le Coran nie explicitement l'engendrement divin dans plusieurs passages. Le verset 19:35 dit que Dieu ne prend pas d'enfant. Le verset 72:3 critique ceux qui attribuent une progéniture à Dieu. Le verset 112:3 est la formulation la plus directe et la plus concise de cette négation. L'usage du verbe yalid (engendrer) plutôt qu'un nom (walad = enfant) insiste sur l'acte même, pas juste sur le résultat.",
      axe5_frequence: "La négation de l'engendrement libère le khalifa de toute idée de filiation divine. La dignité humaine est accordée par Dieu à tous les êtres humains, pas réservée à une \"progéniture divine\". L'égalité fondamentale des humains devant Dieu repose sur l'absence de lien de parenté privilégié. Si Dieu n'engendre pas, personne ne peut revendiquer un statut supérieur par la naissance divine.",
      proof_ctx: "\"Engendrer\" est l'acte de donner naissance à un autre être, d'être à l'origine biologique. Le mot yalid est un verbe inaccompli forme I voix active (une forme qui décrit l'action faite par le sujet). Avec la particule lam, il devient une négation du passé : \"Il n'a pas engendré\". Test grammatical : \"Il n'a pas engendré\" fonctionne en français courant. En français, \"engendrer\" est neutre en genre (pas spécifiquement masculin ou féminin), ce qui correspond au verbe arabe yalid qui ne précise pas le genre. Distinction avec \"enfanter\" : enfanter est spécifiquement l'acte maternel (porter et mettre au monde), engendrer est plus large (être à l'origine biologique sans précision de genre). Le contexte parle de Dieu sans genre, donc \"engendrer\" est plus adapté."
    },
    'enfant': { status: 'nul', proof_ctx: "Nom (fils, fille, progéniture). Le verset utilise un verbe (yalid), pas un nom. \"Il n'a pas enfant\" ne fonctionne pas grammaticalement." },
    'nouveau-né': { status: 'nul', proof_ctx: "Nom (nourrisson). Le verset utilise un verbe, pas un nom." },
    'accoucher': { status: 'nul', proof_ctx: "Forme II : assister à l'accouchement. Le verset utilise la forme I (engendrer/enfanter), pas la forme II." },
    'élever un enfant': { status: 'nul', proof_ctx: "Forme II : nourrir et éduquer. Le verset parle de l'acte de donner naissance, pas d'éducation." },
    'esclave': { status: 'nul', proof_ctx: "Personne née en servitude. Sans rapport avec le verset qui nie l'engendrement." },
    'se multiplier': { status: 'nul', proof_ctx: "Forme VI : se reproduire en nombre. Le verset utilise la forme I, pas la forme VI." },
    'rendre enceinte': { status: 'nul', proof_ctx: "Forme X : féconder. Le verset utilise la forme I, pas la forme X." },
    'lieu de naissance': { status: 'nul', proof_ctx: "Nom de lieu. Le verset utilise un verbe." },
    'moment de naissance': { status: 'nul', proof_ctx: "Nom de temps. Le verset utilise un verbe." },
    'père': { status: 'nul', proof_ctx: "Participe actif : celui qui engendre. Le verset utilise un verbe nié, pas un participe." },
    'mère': { status: 'nul', proof_ctx: "Participe actif féminin. Le verset utilise un verbe nié." },
    'innover': { status: 'nul', proof_ctx: "Créer quelque chose de nouveau. Sens figuré trop éloigné du contexte de procréation du verset." },
    'contemporain de naissance': { status: 'nul', proof_ctx: "Personne née en même temps. Sans rapport avec le verset." },
    'de sang mêlé': { status: 'nul', proof_ctx: "Origine mixte. Sans rapport avec le verset." },
    'document falsifié': { status: 'nul', proof_ctx: "Écrit forgé. Sans rapport avec le verset." },
  }

  console.log('>>> Test de compatibilité grammaticale — wld')
  console.log('  Forme active : "Il n\'a pas [fait le sens]"')
  console.log('  - Il n\'a pas engendré ✅ (neutre en genre)')
  console.log('  - Il n\'a pas enfanté ✅ (mais spécifiquement maternel)')
  console.log('  Forme passive : "Il n\'a pas été [subi le sens]"')
  console.log('  - Il n\'a pas été engendré ✅')
  console.log('  -> RETENU : "engendrer" (neutre en genre, couvre actif et passif)')
  console.log('  -> PROBABLE : "enfanter" (grammaticalement OK mais spécifiquement maternel)')
  console.log('')

  console.log('>>> Mise à jour en base — wld')
  for (const m of wldMeanings) {
    const ax = wldAxes[m.sense]
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

  // ══════════════════════════════════════
  // VERSET 112:4 — وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ
  // ══════════════════════════════════════
  console.log('──────────────────────────────────────')
  console.log('  VERSET 112:4')
  console.log('  وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ')
  console.log('──────────────────────────────────────')
  console.log('')

  // Contexte :
  // wa lam yakun = et il n'y a pas / il n'a pas été (kwn, verbe inaccompli + lam)
  // lahu = pour Lui (pronom)
  // kufuwan = égal/semblable (kfw, nom indéfini accusatif = attribut)
  // ahadun = quiconque/personne (ahd, nom indéfini en contexte négatif)
  //
  // kwn : verbe inaccompli + lam = "il n'y a pas eu"
  // kfw : nom accusatif indéfini en position d'attribut = "égal"
  // ahd : nom nominatif indéfini en contexte négatif = "quiconque/personne"

  // ── kwn (272) ──
  console.log('>>> Analyse des sens — kwn (272)')
  console.log('  Forme : verbe inaccompli + lam (négation du passé)')
  console.log('  Test : "Il n\'y a pas [sens]" ou "Il n\'a pas [sens]"')
  console.log('')

  const {data: kwnMeanings} = await db.from('word_meanings')
    .select('id, sense').eq('analysis_id', 272).order('display_order')

  const kwnAxes = {
    'être': {
      status: 'retenu',
      axe1_verset: "Le verset dit \"wa lam yakun lahu kufuwan ahadun\" (et il n'y a pas pour Lui d'égal, quiconque). Le mot yakun est le verbe kana (être) à l'inaccompli, nié par lam. C'est le verbe d'existence le plus fondamental de l'arabe. Dans ce verset, il fonctionne comme verbe incomplet (ce qu'on appelle un verbe naqis en arabe, c'est-à-dire un verbe qui a besoin d'un sujet ET d'un attribut pour avoir un sens complet). Le sujet est ahadun (quiconque) et l'attribut est kufuwan (égal).",
      axe2_voisins: "Les versets précédents affirment l'unicité (v1), la nature de celui vers qui on se tourne (v2), et nient l'engendrement (v3). Le verset 4 complète les négations : pas d'enfant (v3), pas d'égal (v4). Le verbe \"être\" est ici un outil grammatical qui porte la négation : il n'y a pas, il n'existe pas d'égal.",
      axe3_sourate: "La sourate utilise des verbes d'existence pour nier des relations. Le verbe kana est le support grammatical de la négation : sans ce verbe, la phrase ne pourrait pas nier l'existence d'un égal. C'est un rôle structurel dans la phrase, pas un attribut de Dieu.",
      axe4_coherence: "Le Coran utilise kana des milliers de fois. C'est le verbe le plus fréquent du texte coranique. Son usage ici est purement grammatical : il sert à construire la phrase négative. Le Coran utilise lam yakun dans de nombreux contextes pour nier l'existence de quelque chose.",
      axe5_frequence: "Le verbe \"être\" est un outil de construction de phrase, pas un concept moral. Sa présence dans le verset sert la négation de l'égalité, ce qui est le message important pour le khalifa : personne n'est l'égal de Dieu, donc personne ne peut prétendre à Son autorité absolue.",
      proof_ctx: "\"Être\" est le verbe d'existence fondamental. Le mot yakun est kana à l'inaccompli (une forme qui décrit l'action en cours ou habituelle), nié par lam (particule de négation qui transforme en passé). Test grammatical : \"Il n'y a pas pour Lui d'égal\" fonctionne. Le verbe kana fonctionne ici comme verbe incomplet (il a besoin d'un sujet et d'un attribut). Le sujet est ahadun (quiconque), l'attribut est kufuwan (égal). C'est un usage grammatical, pas un attribut de Dieu."
    },
    'exister': {
      status: 'probable',
      axe1_verset: "\"Exister\" est le sens complet du verbe kana (affirmer qu'une chose existe). Dans le verset, le verbe est nié (lam yakun = il n'existe pas). \"Il n'existe pas pour Lui d'égal\" fonctionne mais le verbe kana ici est incomplet (il a un attribut kufuwan), pas complet. Le sens complet (exister) supposerait que le verbe se suffit à lui-même, sans attribut.",
      axe2_voisins: "Les versets voisins utilisent des structures simples pour nier des réalités. Le sens \"exister\" est compatible mais le verbe dans ce verset a un attribut (kufuwan = égal), ce qui indique qu'il fonctionne comme verbe incomplet, pas comme verbe d'existence pure.",
      axe3_sourate: "La sourate nie des réalités (engendrement, égalité). Le verbe kana sert de support à ces négations. \"Exister\" est un sens possible mais moins précis que \"être\" dans ce contexte grammatical.",
      axe4_coherence: "Le Coran utilise kana comme verbe complet (exister) dans certains passages et comme verbe incomplet (être + attribut) dans d'autres. Dans ce verset, la présence de l'attribut kufuwan indique l'usage incomplet.",
      axe5_frequence: "Nier l'existence d'un égal est le message du verset. Que le verbe soit \"être\" ou \"exister\", le résultat est le même pour le khalifa : personne n'est comparable à Dieu.",
      proof_ctx: "\"Exister\" est le sens complet de kana (avoir une existence réelle). Test grammatical : \"Il n'existe pas pour Lui d'égal\" fonctionne en français courant. La frontière avec \"être\" : \"exister\" est le sens complet du verbe (il se suffit à lui-même), \"être\" est le sens incomplet (il a besoin d'un attribut). Le verset a un attribut (kufuwan = égal), ce qui indique l'usage incomplet. Les deux sont compatibles mais \"être\" correspond mieux à la structure grammaticale du verset."
    },
    'devenir': { status: 'nul', proof_ctx: "Passer d'un état à un autre. Le verset nie une réalité permanente (personne n'est l'égal de Dieu), pas un changement d'état." },
    "venir à l'existence": { status: 'nul', proof_ctx: "Forme V : commencer à exister. Le verset utilise la forme I, pas la forme V." },
    "s'humilier": { status: 'nul', proof_ctx: "Forme X : devenir humble. Le verset utilise la forme I, pas la forme X. De plus, le verset parle de l'absence d'un égal, pas d'humiliation." },
    'lieu': { status: 'nul', proof_ctx: "Nom de lieu (makan). Le verset utilise un verbe (yakun), pas un nom." },
    'état': { status: 'nul', proof_ctx: "Condition, situation (makana). Le verset utilise un verbe, pas un nom." },
  }

  console.log('>>> Mise à jour en base — kwn')
  for (const m of kwnMeanings) {
    const ax = kwnAxes[m.sense]
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

  // ── kfw (273) ──
  console.log('>>> Analyse des sens — kfw (273)')
  console.log('  Forme : nom accusatif indéfini en position d\'attribut')
  console.log('  Test : "personne n\'est [sens] à Lui"')
  console.log('')

  const {data: kfwMeanings} = await db.from('word_meanings')
    .select('id, sense').eq('analysis_id', 273).order('display_order')

  const kfwAxes = {
    'retourner': { status: 'nul', proof_ctx: "Tourner à l'envers. Sens physique (inverser un objet). Le verset utilise un nom (kufuwan), pas un verbe. \"Personne n'est retourner à Lui\" ne fonctionne pas." },
    'renverser': { status: 'nul', proof_ctx: "Mettre sens dessus dessous. Sens physique. Le verset utilise un nom, pas un verbe." },
    'incliner': { status: 'nul', proof_ctx: "Pencher sur le côté. Sens physique. Le verset utilise un nom, pas un verbe." },
    'détourner': { status: 'nul', proof_ctx: "Faire changer de direction. Sens physique. Le verset utilise un nom, pas un verbe." },
    'chasser': { status: 'nul', proof_ctx: "Pousser au loin. Sens physique. Le verset utilise un nom, pas un verbe." },
    'poursuivre': { status: 'nul', proof_ctx: "Suivre quelqu'un. Sens physique. Le verset utilise un nom, pas un verbe." },
    'changer de couleur': { status: 'nul', proof_ctx: "Modification de couleur. Sens figuré du retournement. Sans rapport avec le verset." },
    'égal': {
      status: 'retenu',
      axe1_verset: "Le verset dit \"lam yakun lahu kufuwan ahadun\" (il n'y a pas pour Lui d'égal, quiconque). Le mot kufuwan est un nom en position d'attribut (ce qu'on appelle en arabe le khabar de kana, c'est-à-dire la partie de la phrase qui dit ce qu'est le sujet). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), kufu signifie \"like him, equal to him\" : celui qui est du même niveau, du même rang. Le champ lexical est celui de la comparaison et de l'absence de comparaison : le verset nie qu'il existe quiconque de même rang que Dieu.",
      axe2_voisins: "Le verset 1 dit que Dieu est unique (indivisible). Le verset 3 nie l'engendrement. Le verset 4 complète en niant l'existence d'un égal. La progression est logique : unique (v1) → pas d'enfant (v3) → pas d'égal (v4). Nier l'égalité est le point final de la sourate : non seulement Dieu n'a pas de descendance, mais personne n'est même comparable à Lui. C'est la conclusion de la définition.",
      axe3_sourate: "Al-Ikhlas se termine par la négation la plus absolue : personne n'est l'égal de Dieu. Cette conclusion scelle la définition : Dieu est unique (v1), vers qui tout converge (v2), sans descendance (v3), sans égal (v4). Le mot kufu (égal) porte tout le poids de cette conclusion.",
      axe4_coherence: "Le mot kufuwan n'apparaît qu'une seule fois dans le Coran, dans ce verset. Comme as-samad, c'est un mot rare réservé à un contexte unique. Le Coran a choisi un mot rare pour exprimer une idée absolue : l'absence totale de comparable. D'autres mots existent pour la ressemblance (mithl, nazir) mais le Coran choisit kufu qui insiste sur l'égalité de rang, pas juste la ressemblance.",
      axe5_frequence: "L'absence d'égal fonde l'autorité unique de Dieu pour le khalifa. Si personne n'est l'égal de Dieu, alors aucun humain ne peut prétendre à Son autorité absolue. Le khalifa agit par délégation, pas par égalité. La dignité humaine est préservée car tous les humains sont au même niveau devant Dieu : aucun n'est Son égal, donc aucun ne peut dominer les autres au nom de Dieu.",
      proof_ctx: "\"Égal\" signifie celui qui est du même rang, du même niveau, du même statut, d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863). Le Lane's donne \"like him, equal to him\". Le mot kufuwan est un nom accusatif indéfini en position d'attribut (la partie de la phrase qui dit ce qu'est le sujet). Test grammatical : \"personne n'est égal à Lui\" fonctionne en français courant. Distinction avec \"semblable\" : \"semblable\" insiste sur la ressemblance extérieure (qui ressemble à), \"égal\" insiste sur le rang et le statut (qui est au même niveau que). Le verset nie le rang, pas la ressemblance : personne n'est au même niveau que Dieu, pas juste personne ne Lui ressemble. La différence philosophique : être semblable est superficiel (on peut ressembler sans être du même rang), être égal est profond (on est exactement au même niveau)."
    },
    'compenser': {
      status: 'peu_probable',
      axe1_verset: "\"Compenser\" est un sens verbal de la forme III (kafaa = rendre la pareille, requiter). Le verset utilise un nom (kufuwan), pas un verbe. \"Personne n'est compensation à Lui\" ne fonctionne pas naturellement en français. Le champ lexical du verset est celui de la comparaison (égal/semblable), pas de la rétribution (compenser/requiter).",
      axe2_voisins: "Les versets voisins parlent d'identité et de relations (unicité, engendrement, égalité), pas de compensation ou de rétribution. La compensation est un concept transactionnel, les versets sont des définitions existentielles.",
      axe3_sourate: "La sourate définit Dieu, elle ne parle pas de transactions ni de compensations. Le registre est identitaire, pas économique.",
      axe4_coherence: "Le Coran utilise d'autres mots pour la compensation et la rétribution (jaza, din). Le mot kufu n'est pas utilisé dans le Coran pour exprimer la compensation.",
      axe5_frequence: "La compensation est un concept transactionnel qui ne contribue pas à la définition de Dieu dans ce contexte.",
      proof_ctx: "\"Compenser\" est un sens de la forme III (kafaa). Le verset utilise un nom (kufuwan), pas un verbe. Test grammatical : \"personne n'est compensation à Lui\" est bancal en français courant. La frontière avec \"égal\" : la compensation est une action (rendre la pareille), l'égalité est un état (être au même niveau). Le verset décrit un état (personne n'est égal), pas une action (personne ne compense)."
    },
    'semblable': {
      status: 'probable',
      axe1_verset: "Le verset dit \"lam yakun lahu kufuwan ahadun\" (il n'y a personne de semblable à Lui). Le mot kufuwan en position d'attribut qualifie ce que personne n'est par rapport à Dieu. \"Semblable\" insiste sur la ressemblance : personne ne ressemble à Dieu. C'est un sens compatible avec le contexte de négation de toute comparaison. Cependant, \"semblable\" est plus superficiel qu'\"égal\" : on peut ressembler sans être du même rang.",
      axe2_voisins: "Les versets voisins nient des relations profondes (engendrement, v3) et des comparaisons (v4). La ressemblance est compatible avec cette série de négations. Cependant, nier la ressemblance est moins fort que nier l'égalité : dire \"personne ne Lui ressemble\" est moins absolu que \"personne n'est Son égal\".",
      axe3_sourate: "La sourate Al-Ikhlas va vers l'absolu : unique (v1), celui vers qui on se tourne (v2), pas d'engendrement (v3), pas de comparable (v4). Le dernier verset devrait être la négation la plus forte. \"Pas d'égal\" est plus fort que \"pas de semblable\".",
      axe4_coherence: "Le Coran utilise d'autres mots pour la ressemblance : mithl (pareil), nazir (comparable). Le choix de kufu plutôt que mithl ou nazir suggère un sens différent de la simple ressemblance. D'après les sources étymologiques, kufu insiste sur l'égalité de rang, pas sur la ressemblance extérieure.",
      axe5_frequence: "Nier la ressemblance est important pour le khalifa mais nier l'égalité est plus fondamental. \"Personne ne Lui ressemble\" interdit la comparaison visuelle. \"Personne n'est Son égal\" interdit la prétention au même rang.",
      proof_ctx: "\"Semblable\" insiste sur la ressemblance extérieure (qui ressemble à). Test grammatical : \"personne n'est semblable à Lui\" fonctionne en français courant. La frontière avec \"égal\" : être semblable est superficiel (on peut ressembler sans être du même rang), être égal est profond (on est exactement au même niveau). D'après les sources étymologiques, kufu insiste sur l'égalité de rang (\"equal to him\"), pas sur la ressemblance extérieure (\"like him\" au sens visuel). Le Coran utilise mithl et nazir pour la ressemblance, kufu pour l'égalité de rang."
    },
  }

  console.log('>>> Test de compatibilité grammaticale — kfw')
  console.log('  Forme : nom accusatif indéfini en position d\'attribut')
  console.log('  Test : "personne n\'est [sens] à Lui"')
  console.log('')
  console.log('  - personne n\'est égal à Lui ✅ (rang, statut)')
  console.log('  - personne n\'est semblable à Lui ✅ (ressemblance)')
  console.log('  - personne n\'est compensation à Lui ❌ (bancal)')
  console.log('  - Sens physiques (retourner, incliner, etc.) ❌ (verbes, pas noms)')
  console.log('  -> RETENU : "égal" (rang + Lane\'s insiste sur "equal to him")')
  console.log('  -> PROBABLE : "semblable" (compatible mais moins profond)')
  console.log('  -> PEU PROBABLE : "compenser" (transactionnel, pas identitaire)')
  console.log('')

  console.log('>>> Mise à jour en base — kfw')
  for (const m of kfwMeanings) {
    const ax = kfwAxes[m.sense]
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

  // ── ahd en contexte négatif (112:4) ──
  // ahd dans 112:4 = "quiconque/personne" (contexte négatif lam yakun)
  // Pas besoin de nouveaux axes : les axes de 112:1 couvrent tous les sens
  // Le sens retenu pour 112:4 sera "quiconque" (peu_probable en 112:1 mais retenu en 112:4)
  // Ceci sera géré dans verse_word_analyses (étape 4)
  console.log('')
  console.log('  NOTE : ahd en 112:4 = "quiconque" (contexte négatif)')
  console.log('  Les axes sont déjà écrits. Le sens sera géré dans verse_word_analyses.')

  console.log('')
  console.log('============================================')
  console.log('  VERSETS 112:3-4 — ÉTAPE 3 TERMINÉE')
  console.log('  wld -> "engendrer" (RETENU)')
  console.log('  kwn -> "être" (RETENU)')
  console.log('  kfw -> "égal" (RETENU)')
  console.log('  ahd en 112:4 -> "quiconque" (contexte négatif)')
  console.log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
