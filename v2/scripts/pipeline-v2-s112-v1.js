// Pipeline V2 — Sourate 112, Verset 1 — قُلْ هُوَ ٱللَّهُ أَحَدٌ
// Étapes 2-3-4 (étape 1 déjà faite via QAC)
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

async function run() {
  log('════════════════════════════════════════')
  log('  PIPELINE V2 — VERSET 112:1')
  log('  قُلْ هُوَ ٱللَّهُ أَحَدٌ')
  log('════════════════════════════════════════')
  log('')

  // ═══ ÉTAPE 2 — SENS ÉTYMOLOGIQUES + CONCEPTS ═══
  log('>>> ÉTAPE 2 — SENS ÉTYMOLOGIQUES')
  log('')

  // alh (250) — déjà fait en sourate 1 → SKIP
  log('  [alh] SKIP — déjà analysé (sourate 1)')

  // qwl — déjà fait → SKIP
  log('  [qwl] SKIP — déjà analysé')

  // ahd — NOUVEAU
  const {data: ahdWA} = await db.from('word_analyses').select('id').eq('word_key', 'ahd')
  if (!ahdWA || ahdWA.length === 0) { log('  ERREUR: racine ahd non trouvée'); return }
  const ahdId = ahdWA[0].id
  log('  [ahd] analysis_id=' + ahdId)
  log('  [ahd] analysis_id=' + ahdId + ' — 15 sens extraits du Lane\'s → 5 concepts')

  const ahdSenses = [
    // Concept: Unicité/Indivisibilité
    {sense:'déclarer l\'unicité',sense_ar:'أحّد',description:'Acte de proclamer que quelque chose est un et indivisible. C\'est un acte dirigé vers l\'extérieur : on déclare, on proclame. L\'acte sort de celui qui déclare et atteint ceux qui écoutent.',display_order:1,concept:'Unicité/Indivisibilité'},
    {sense:'un (premier des nombres)',sense_ar:'أَحَد',description:'Le chiffre un comme point de départ de la numération. C\'est un constat objectif et extérieur : on compte, on quantifie. Mais le Lane\'s distingue ahad de wahid : ahad est l\'indivisible, wahid est le premier des nombres.',display_order:2,concept:'Unicité/Indivisibilité'},
    {sense:'l\'Indivisible',sense_ar:'أَحَد',description:'Celui qui n\'a pas de second dans son essence, qui ne peut pas être divisé en parties. C\'est un état permanent et absolu qui définit la nature profonde. Le Lane\'s précise : celui qui n\'a pas de second pour partager sa seigneurie, ni dans son essence, ni dans ses attributs.',display_order:3,concept:'Unicité/Indivisibilité'},
    {sense:'unité',sense_ar:'أَحَدِيَّة',description:'Le concept abstrait d\'être un. C\'est une qualité essentielle et permanente, pas un nombre. La réalité de l\'unité est intérieure et définitoire : elle dit ce que la chose EST.',display_order:4,concept:'Unicité/Indivisibilité'},

    // Concept: Solitude/Isolement
    {sense:'être seul',sense_ar:'اِسْتَأْحَد',description:'État de celui qui est à l\'écart des autres, sans compagnie. C\'est un état qui peut être subi ou choisi. La réalité de la solitude est intérieure : elle est ressentie par celui qui est seul, elle ne sort pas vers l\'autre.',display_order:5,concept:'Solitude/Isolement'},
    {sense:'ne pas connaître',sense_ar:'اِسْتَأْحَد',description:'Ne pas avoir connaissance de quelque chose, ne pas percevoir les détails. C\'est un état intérieur de méconnaissance. La réalité reste chez celui qui ne sait pas.',display_order:6,concept:'Solitude/Isolement'},

    // Concept: Quiconque/Indéfini
    {sense:'quiconque',sense_ar:'أَحَد',description:'N\'importe quelle personne avec qui on peut parler ou interagir. C\'est un pronom indéfini qui nie l\'existence ou questionne l\'identité. La réalité est extérieure et relationnelle : elle porte sur l\'existence ou l\'absence d\'autrui. Utilisé dans les phrases négatives et interrogatives.',display_order:7,concept:'Quiconque/Indéfini'},
    {sense:'personne',sense_ar:'أَحَد',description:'Dans les phrases négatives : "il n\'y a personne". C\'est la négation de l\'existence de quiconque. La réalité est extérieure : on constate l\'absence d\'autrui.',display_order:8,concept:'Quiconque/Indéfini'},
    {sense:'quelque chose',sense_ar:'أَحَد',description:'N\'importe quoi, dans les phrases négatives : "il n\'y a rien dans la maison". Extension du pronom indéfini aux choses.',display_order:9,concept:'Quiconque/Indéfini'},

    // Concept: Nombre/Quantification
    {sense:'rendre onze',sense_ar:'أحّد',description:'Faire passer de dix à onze, ajouter un à un nombre. C\'est une opération arithmétique extérieure et ponctuelle.',display_order:10,concept:'Nombre/Quantification'},
    {sense:'un des plusieurs',sense_ar:'أَحَد',description:'Un parmi un groupe (un des trois, un des sept). C\'est un constat de position dans un ensemble. La réalité est extérieure et quantitative.',display_order:11,concept:'Nombre/Quantification'},
    {sense:'un par un',sense_ar:'أُحَاد',description:'Ils sont venus un par un, un à la fois. C\'est une manière de compter le passage des individus. La réalité est extérieure et séquentielle.',display_order:12,concept:'Nombre/Quantification'},

    // Concept: Divers
    {sense:'dimanche',sense_ar:'أَحَد',description:'Le premier jour de la semaine (ou le second selon les traditions). Un nom propre de jour dérivé du nombre un.',display_order:13,concept:'Divers'},
    {sense:'calamité',sense_ar:'أَحَد',description:'Un événement terrible, un grand malheur. Le Lane\'s note ce sens parmi les usages rares du mot.',display_order:14,concept:'Divers'},
    {sense:'tradition isolée',sense_ar:'أَحَد',description:'Ce qui a été transmis par un petit nombre de personnes, pas par un grand groupe. Terme technique de la science du hadith.',display_order:15,concept:'Divers'},
  ]

  const toInsert = ahdSenses.map(s => ({...s, analysis_id: ahdId, meaning_type: 'etymology'}))
  const {error: insErr} = await db.from('word_meanings').insert(toInsert)
  if (insErr) log('  ERREUR insertion: ' + insErr.message)
  else log('  15 sens insérés en 5 concepts')

  // Concepts avec descriptions philosophiques
  const conceptDescriptions = {
    'Unicité/Indivisibilité': 'Qualité intrinsèque d\'être un et indivisible, qui ne peut pas être séparé en parties. C\'est un état permanent et absolu qui définit la nature profonde de ce qui est qualifié. Le Lane\'s (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) distingue explicitement ahad de wahid : ahad est l\'indivisible qui n\'a pas de second, wahid est le premier des nombres. Cette distinction fait de ahad un mot de qualité, pas de quantité.',
    'Solitude/Isolement': 'État de celui qui est à l\'écart des autres, sans compagnie ni partage. C\'est un état intérieur qui reste chez celui qui le vit. La solitude n\'atteint pas l\'autre, elle est ressentie par celui qui est seul.',
    'Quiconque/Indéfini': 'Pronom indéfini qui désigne n\'importe quelle personne ou chose, utilisé dans les phrases négatives et interrogatives pour nier l\'existence ou questionner l\'identité. C\'est un outil grammatical dont la réalité est extérieure et relationnelle.',
    'Nombre/Quantification': 'Le chiffre un comme quantité arithmétique mesurable. C\'est un constat objectif de combien il y en a, pas une qualification de ce que la chose est. La réalité est extérieure et comptable.',
    'Divers': 'Sens isolés qui ne forment pas de champ sémantique cohérent (dimanche, calamité, tradition isolée).',
  }

  // Mettre à jour les descriptions de concept dans word_meanings
  for (const [concept, desc] of Object.entries(conceptDescriptions)) {
    await db.from('word_meanings').update({description: desc}).eq('analysis_id', ahdId).eq('concept', concept)
  }
  log('')
  for (const [concept, desc] of Object.entries(conceptDescriptions)) {
    const count = ahdSenses.filter(s => s.concept === concept).length
    log('  ' + concept + ' (' + count + ' sens)')
  }
  log('')

  // ═══ ÉTAPE 3 — ANALYSE DES CONCEPTS SUR 5 AXES ═══
  log('>>> ÉTAPE 3 — ANALYSE DES CONCEPTS (verset 112:1)')
  log('')

  // Contexte du verset: قُلْ هُوَ ٱللَّهُ أَحَدٌ — "Dis : Il est Dieu, ahad"
  // ahad est un nom indéfini au nominatif, en position d'attribut (khabar)

  // D'abord analyser TOUS les concepts non-nul sur les 5 axes

  const conceptAxes = {
    'Unicité/Indivisibilité': {
      status: 'retenu',
      senses: ['déclarer l\'unicité', 'un (premier des nombres)', 'l\'Indivisible', 'unité'],
      axe1_verset: 'Le verset dit "qul huwa llahu ahadun" (dis : Il est Dieu, ahad). Le champ lexical est celui de la déclaration d\'identité : on définit ce que Dieu EST dans sa nature profonde. Le mot ahad est en position d\'attribut (khabar), la partie de la phrase qui qualifie le sujet. Le verset ne compte pas combien de dieux il y a, il qualifie la nature de Dieu. Le mot est indéfini (pas d\'article al-), ce qui en arabe peut exprimer une qualité absolue plutôt qu\'une simple quantité.',
      axe2_voisins: 'Le verset 2 qualifie Dieu d\'as-samad. Les versets 3-4 nient l\'engendrement et l\'existence d\'un égal. Les versets 3-4 développent l\'idée d\'indivisibilité : engendrer suppose qu\'une partie de soi se sépare, avoir un égal suppose quelqu\'un de même nature. Ces négations sont les conséquences logiques de l\'indivisibilité posée au verset 1. Si Dieu est indivisible, aucune partie ne peut se séparer (v3) et rien ne peut être de même nature (v4).',
      axe3_sourate: 'La sourate Al-Ikhlas (la pureté) définit Dieu dans sa nature pure. L\'indivisibilité est le fondement de cette pureté : ce qui est indivisible est pur par définition, car la division introduirait de la multiplicité dans l\'essence. Le mot ahad porte cette idée de pureté essentielle. Le Lane\'s note que ahad désigne celui qui ne peut pas être divisé en parties, ce qui correspond exactement au thème de la sourate.',
      axe4_coherence: 'Le Coran utilise wahid quand il veut exprimer le nombre (sourate 2:163 "ilahun wahid" = une seule divinité). Le choix de ahad au lieu de wahid dans la sourate 112 n\'est pas anodin : le Coran avait un mot pour le nombre (wahid) et a choisi un mot pour la qualité (ahad). Cette distinction est maintenue dans tout le Coran. D\'après le Lane\'s, wahid peut désigner quelque chose qui apparaît divisible, ahad désigne ce qui est absolument indivisible.',
      axe5_frequence: 'L\'indivisibilité fonde l\'unicité de la source pour le khalifa. Si la source de la mission est indivisible, elle ne peut pas être fragmentée ni partagée avec un concurrent. La mission de justice et de civilisation a un fondement unique et non négociable. Cette indivisibilité empêche la corruption car elle exclut toute fragmentation de l\'autorité.',
      proof_ctx: 'Le concept d\'unicité/indivisibilité décrit une qualité intrinsèque et permanente qui définit la nature profonde de ce qui est qualifié. Le Lane\'s distingue explicitement ahad de wahid : ahad est l\'indivisible qui n\'a pas de second dans son essence, wahid est le premier des nombres. Le mot ahad en position d\'attribut indéfini qualifie la nature, pas le nombre. Test de compatibilité philosophique : le concept d\'indivisibilité est-il compatible avec un nom indéfini en position d\'attribut ? Oui : l\'indéfini en arabe peut exprimer une qualité absolue, et l\'attribut dit ce que le sujet EST. L\'indivisibilité est une qualité essentielle. Distinction avec "Nombre/Quantification" : le nombre compte (combien il y en a), l\'indivisibilité qualifie (ce que c\'est). Le verset ne dit pas "Dieu est un" (quantité) mais "Dieu est ahad" (qualité). Distinction avec "Quiconque/Indéfini" : le pronom indéfini fonctionne dans les phrases négatives ("il n\'y a personne"), le verset 112:1 est une phrase affirmative. Distinction avec "Solitude/Isolement" : la solitude est un état ressenti intérieurement, l\'indivisibilité est une qualité essentielle. Dieu n\'est pas décrit comme seul (triste, isolé) mais comme indivisible (nature profonde).',
    },
    'Nombre/Quantification': {
      status: 'probable',
      senses: ['rendre onze', 'un des plusieurs', 'un par un'],
      axe1_verset: 'Le verset dit "huwa llahu ahadun" (Il est Dieu, ahad). Si ahad est un nombre, le verset dirait "Il est Dieu, un" — c\'est-à-dire "il y a un seul Dieu". Le champ lexical est celui de la déclaration d\'identité, pas du comptage. Cependant, le nombre "un" est compatible grammaticalement avec la position d\'attribut. Le verset pourrait être lu comme une quantification : combien de dieux ? Un seul.',
      axe2_voisins: 'Les versets 3-4 nient des relations (engendrement, égalité), ce qui développe l\'idée de qualité plutôt que de nombre. Si le verset 1 posait juste un nombre, les versets suivants développeraient des quantités (pas deux, pas trois). Au lieu de ça, ils développent des qualités (pas d\'enfant, pas d\'égal).',
      axe3_sourate: 'La sourate semble aller plus loin que le nombre car les versets suivants décrivent des qualités, pas des quantités. Le registre est qualitatif, pas arithmétique. Cependant, le nombre "un" est le fondement sur lequel repose la qualité d\'indivisibilité.',
      axe4_coherence: 'Le Coran utilise wahid dans d\'autres versets pour dire "un seul Dieu" (sourate 2:163). Si le sens ici était simplement le nombre, le Coran aurait utilisé wahid comme ailleurs. Le choix de ahad au lieu de wahid indique une nuance différente du simple nombre.',
      axe5_frequence: 'Le nombre "un" est un constat objectif qui ne porte pas de charge morale en soi. Pour le khalifa, l\'indivisibilité qualitative oriente plus l\'action que le simple comptage.',
      proof_ctx: 'Le nombre compte combien il y en a, l\'indivisibilité qualifie ce que c\'est. Le Coran utilise wahid pour le nombre et ahad pour la qualité. Le Lane\'s distingue explicitement les deux. Le verset est une déclaration d\'identité (ce que Dieu EST), pas de quantification (combien il y en a).',
    },
    'Quiconque/Indéfini': {
      status: 'peu_probable',
      senses: ['quiconque', 'personne', 'quelque chose'],
      axe1_verset: 'Le verset est une phrase affirmative ("Il est Dieu, ahad"). Le pronom indéfini "quiconque" fonctionne dans les phrases négatives ("il n\'y a personne") et interrogatives ("quelqu\'un a-t-il vu ?"). Dans une phrase affirmative, "Il est Dieu, quiconque" ne correspond pas à une déclaration d\'identité.',
      axe2_voisins: 'Les versets voisins développent l\'identité de Dieu. "Quiconque" est un pronom neutre qui ne contribue pas à cette définition. Le verset 4 utilise ahad en contexte négatif ("lam yakun lahu kufuwan ahad" = personne n\'est son égal), où "quiconque/personne" est approprié. Mais pas au verset 1.',
      axe3_sourate: 'La sourate définit positivement Dieu (v1-2) puis négativement (v3-4). Le verset 1 est dans la partie positive. "Quiconque" appartient aux contextes négatifs.',
      axe4_coherence: 'Le Coran utilise ahad dans le sens de "quiconque" exclusivement dans des phrases négatives ou interrogatives. Le verset 112:1 est affirmatif.',
      axe5_frequence: '"Quiconque" est un pronom neutre sans charge morale. Il ne contribue pas à la définition de la source de la mission du khalifa.',
      proof_ctx: '"Quiconque" fonctionne dans les phrases négatives et interrogatives. Le verset 112:1 est affirmatif. "Il est Dieu, quiconque" ne fait pas sens comme déclaration d\'identité. Ce sens est approprié pour le verset 112:4 (contexte négatif) mais pas pour 112:1.',
    },
    'Solitude/Isolement': {
      status: 'nul',
      senses: ['être seul', 'ne pas connaître'],
      proof_ctx: 'La solitude est un état ressenti intérieurement, souvent négatif (tristesse, manque de compagnie). Le verset ne décrit pas Dieu comme triste ou isolé mais comme ayant une nature indivisible.',
    },
    'Divers': {
      status: 'nul',
      senses: ['dimanche', 'calamité', 'tradition isolée'],
      proof_ctx: 'Sens isolés sans rapport avec le contexte du verset (jour de la semaine, malheur, terme technique du hadith).',
    },
  }

  for (const [concept, ax] of Object.entries(conceptAxes)) {
    const tag = ax.axe1_verset ? '(5 axes)' : '(proof_ctx seul)'
    log('  ' + concept + ' (' + ax.senses.length + ' sens) → ' + ax.status.toUpperCase() + ' ' + tag)
  }
  log('')

  // Mettre à jour les statuts dans word_meanings
  for (const [concept, ax] of Object.entries(conceptAxes)) {
    await db.from('word_meanings').update({
      status: ax.status, proof_ctx: ax.proof_ctx
    }).eq('analysis_id', ahdId).eq('concept', concept)
  }

  // Pour alh — déjà analysé en sourate 1, les concepts existent
  // Pour qwl — verbe impératif "dis", pas de sens à analyser (c'est un verbe d'introduction)

  // Insérer verse_word_analyses
  const vwaData = [
    {verse_id: 6222, word_key: 'alh', sense_chosen: 'divinité', position: 3},
    {verse_id: 6222, word_key: 'ahd', sense_chosen: 'unique', position: 4},
  ]
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(vwaData)
  if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)

  // Stocker les axes dans analysis_axes
  // ahd
  await db.from('verse_word_analyses').update({
    analysis_axes: {
      sense_chosen: 'unique',
      concept_chosen: 'Unicité/Indivisibilité',
      concepts: conceptAxes
    }
  }).eq('verse_id', 6222).eq('word_key', 'ahd')

  // alh — réutiliser les axes de la sourate 1 adaptés au contexte 112:1
  const alhAxes112 = {
    sense_chosen: 'divinité',
    concept_chosen: 'Divinité',
    concepts: {
      'Divinité': {
        status: 'retenu',
        senses: ['divinité', 'Dieu', 'théologie'],
        proof_ctx: 'Le verset 112:1 dit "huwa llahu ahadun" (Il est Dieu, unique). Allah est le nom propre de la Divinité, l\'objet vers lequel se dirige l\'adoration. Le verset identifie Dieu dans une déclaration d\'identité absolue. Le concept de divinité est ce que le nom Allah désigne : l\'être vers lequel tout se tourne.',
        axe1_verset: 'Le verset est une déclaration d\'identité : "Il est Dieu, unique". Le mot Allah identifie la Divinité, le mot ahad qualifie sa nature. Le champ lexical est celui de l\'identité absolue. Allah est le pivot entre le pronom "Il" (huwa) et la qualité "unique" (ahad). Le verset nomme d\'abord (Allah) puis qualifie (ahad).',
        axe2_voisins: 'Le verset 2 qualifie Dieu d\'as-samad. Les versets 3-4 nient l\'engendrement et l\'existence d\'un égal. Le verset 1 ouvre cette série en nommant Dieu : d\'abord on dit qui Il est (Dieu, unique), puis on le qualifie (v2), puis on dit ce qu\'Il n\'est pas (v3-4). Allah est le premier mot significatif de cette définition.',
        axe3_sourate: 'La sourate Al-Ikhlas est une sourate de définition de Dieu. Le verset 1 pose le fondement en nommant Dieu. Tout commence par l\'identification : avant de qualifier, il faut nommer. La divinité est le concept que le nom Allah identifie.',
        axe4_coherence: 'Le Coran utilise Allah comme nom propre de Dieu des milliers de fois. C\'est le mot le plus fréquent du texte coranique. L\'usage est constant : Allah désigne toujours la Divinité.',
        axe5_frequence: 'Reconnaître la Divinité est le fondement de la mission du khalifa. Sans cette reconnaissance, pas de cadre pour la justice ni la civilisation.',
      },
      'Adoration/Dévotion': {
        status: 'probable',
        senses: ['adorer', 'faire adorer', 'se dévouer au culte', 'diviniser'],
        proof_ctx: 'Adorer est le sens premier de la racine a-l-h. Mais le verset nomme Dieu, il ne décrit pas l\'acte d\'adorer. L\'adoration est l\'action du fidèle, le verset parle de l\'identité de Dieu. La distinction : adorer est ce qu\'on FAIT, la divinité est ce que Dieu EST.',
        axe1_verset: 'Le verset est une déclaration d\'identité ("Il est Dieu, unique"), pas une injonction d\'adoration. Le champ lexical est celui de la définition, pas de la dévotion. Adorer viendrait après l\'identification : on identifie d\'abord, on adore ensuite.',
        axe2_voisins: 'Aucun verset de la sourate ne parle d\'adoration. Les versets qualifient (v1-2) et nient (v3-4). La sourate définit, elle n\'ordonne pas d\'adorer.',
        axe3_sourate: 'Al-Ikhlas est une sourate de définition, pas d\'injonction. L\'adoration est un thème d\'autres sourates.',
        axe4_coherence: 'Le Coran distingue le nom Allah (l\'identité) de l\'acte d\'adorer (ibada). Quand le Coran veut parler d\'adoration, il utilise le verbe abada.',
        axe5_frequence: 'L\'adoration est une action du khalifa, pas l\'identité de Dieu.',
      },
      'Refuge/Protection': {
        status: 'nul',
        senses: ['chercher refuge', 'protéger', 'demeurer'],
        proof_ctx: 'Le verset est une déclaration d\'identité, pas une demande de refuge. Le Coran utilise d\'autres formules pour le refuge (audhu billahi).',
      },
      'Détresse': {
        status: 'nul',
        senses: ['être perplexe', 'se lamenter'],
        proof_ctx: 'Le verset est une ouverture sereine et déclarative, pas un cri de détresse.',
      },
      'Domination': {
        status: 'nul',
        senses: ['asservir'],
        proof_ctx: 'Le verset identifie Dieu, il ne parle pas d\'asservissement.',
      },
    }
  }
  await db.from('verse_word_analyses').update({analysis_axes: alhAxes112}).eq('verse_id', 6222).eq('word_key', 'alh')

  log('  verse_word_analyses et analysis_axes insérés')
  log('')

  // ═══ ÉTAPE 4 — TRADUCTION ═══
  log('>>> ÉTAPE 4 — TRADUCTION')
  log('')

  // Choix des mots français :
  // alh → concept "Divinité" → "Dieu" (nom propre, règle Allah → Dieu)
  // ahd → concept "Unicité/Indivisibilité" → "unique"
  //   Justification : "unique" capture la qualité d'indivisibilité mieux que "un" (quantité).
  //   Le Lane's distingue ahad (indivisible) de wahid (premier nombre).
  //   "Unique" qualifie la nature, "un" quantifie le nombre.
  //   "Unique" n'est pas dans les sens des autres concepts (quiconque, dimanche, etc.)
  // qwl → verbe impératif → "dis" (traduction directe de l'impératif)

  const translation_arab = 'Dis : Il est Dieu, unique.'

  const translation_explanation = [
    '§DEMARCHE§',
    'Le mot **qul** est un verbe à l\'impératif (une forme qui donne un ordre, une instruction). "Dis" : c\'est une instruction adressée à quelqu\'un de prononcer ce qui suit.',
    '**Huwa** est un pronom personnel de la 3ème personne (il/lui). "Il" : le pronom introduit le sujet dont on va parler.',
    'Le mot **allahu** est un nom propre au nominatif (le cas qui marque le sujet de la phrase). C\'est le sujet de la phrase nominale. En arabe, quand une phrase commence par un nom et pas par un verbe, c\'est une phrase nominale qui exprime une vérité permanente.',
    'Le mot **ahadun** est un nom indéfini au nominatif, en position d\'attribut (c\'est ce qu\'on appelle un khabar, la partie de la phrase qui dit ce qu\'est le sujet). Il qualifie Dieu dans sa nature profonde.',
    '§JUSTIFICATION§',
    '**Dieu** — Le concept retenu est "Divinité". Allah est le nom propre de la Divinité. La règle des noms propres impose Allah → "Dieu" en français.',
    '**unique** — Le concept retenu est "Unicité/Indivisibilité". Le mot "unique" est choisi car il capture la qualité d\'indivisibilité décrite par le Lane\'s (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) : ahad est celui qui ne peut pas être divisé en parties, qui n\'a pas de second dans son essence. "Unique" qualifie la nature (ce que Dieu EST), alors que "un" quantifierait le nombre (combien de dieux il y a). Le Lane\'s distingue explicitement ahad (indivisible, qualité) de wahid (premier des nombres, quantité). Le Coran utilise wahid ailleurs pour le nombre, mais choisit ahad ici pour la qualité.',
  ].join('\n\n')

  const segments = [
    {fr:'dis',pos:'verbe',phon:'qul',arabic:'قُلْ',word_key:'qwl',is_particle:false,sense_retenu:'dire'},
    {fr:'Il',phon:'huwa',arabic:'هُوَ',word_key:null,is_particle:true},
    {fr:'Dieu',pos:'nom',phon:'allahu',arabic:'ٱللَّهُ',word_key:'alh',is_particle:false,sense_retenu:'divinité'},
    {fr:'unique',pos:'nom',phon:'ahadun',arabic:'أَحَدٌ',word_key:'ahd',is_particle:false,sense_retenu:'unique'},
  ]

  await db.from('verse_analyses').update({
    translation_arab, translation_explanation, segments
  }).eq('verse_id', 6222)

  log('  Traduction : "' + translation_arab + '"')
  log('')

  // Phrases du quotidien
  const daily = [
    {analysis_id: ahdId, sense: 'unique', arabic: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ', phon: 'qul huwa llahu ahad', french: 'Dis : Il est Dieu, unique'},
    {analysis_id: ahdId, sense: 'unique', arabic: 'لَا إِلٰهَ إِلَّا ٱللَّهُ وَحْدَهُ', phon: 'la ilaha illa llahu wahdahu', french: 'Il n\'y a de divinité que Dieu seul'},
    {analysis_id: ahdId, sense: 'unique', arabic: 'هُوَ أَحَدٌ لَا شَرِيكَ لَهُ', phon: 'huwa ahadun la sharika lahu', french: 'Il est unique, pas d\'associé pour Lui'},
  ]
  const {error: dailyErr} = await db.from('word_daily').insert(daily)
  if (dailyErr) log('  ERREUR daily: ' + dailyErr.message)
  else log('  ' + daily.length + ' phrases du quotidien insérées')

  log('')
  log('════════════════════════════════════════')
  log('VERSET 112:1 — TERMINÉ')
  log('  alh → concept "Divinité" → mot français "Dieu"')
  log('  ahd → concept "Unicité/Indivisibilité" → mot français "unique"')
  log('  Traduction : "Dis : Il est Dieu, unique."')
  log('════════════════════════════════════════')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
