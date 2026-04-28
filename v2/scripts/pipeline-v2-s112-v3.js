// Pipeline V2 — Sourate 112, Verset 3 — لَمْ يَلِدْ وَلَمْ يُولَدْ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

async function run() {
  log('════════════════════════════════════════')
  log('  PIPELINE V2 — VERSET 112:3')
  log('  لَمْ يَلِدْ وَلَمْ يُولَدْ')
  log('════════════════════════════════════════')
  log('')

  // ═══ ÉTAPE 2 — wld (ولد) ═══
  log('>>> ÉTAPE 2 — SENS ÉTYMOLOGIQUES')

  let wldId
  const {data: existing} = await db.from('word_analyses').select('id').eq('word_key', 'wld')
  if (existing && existing.length > 0) {
    wldId = existing[0].id
  } else {
    const {data: created} = await db.from('word_analyses').insert({word_key: 'wld'}).select('id')
    wldId = created[0].id
  }
  log('  [wld] analysis_id=' + wldId + ' — 47 sens extraits → 5 concepts')

  const wldSenses = [
    // Engendrer/Naissance
    {sense:'mettre au monde',sense_ar:'وَلَدَتْ',description:'Acte physique de donner naissance, faire sortir un être vivant de soi. C\'est un acte extérieur et ponctuel : quelque chose sort de celui qui engendre et devient un être séparé. L\'acte implique qu\'une partie de soi se détache pour former un autre.',display_order:1,concept:'Engendrer/Naissance'},
    {sense:'engendrer',sense_ar:'وَلَدَ',description:'Être à l\'origine biologique d\'un autre être. L\'acte de celui qui est la source de la descendance. C\'est extérieur et directionnel : quelque chose sort du géniteur.',display_order:2,concept:'Engendrer/Naissance'},
    {sense:'la terre produit',sense_ar:'وَلَدَتْ',description:'Extension métaphorique : la terre produit du safran comme une mère produit un enfant. Production naturelle.',display_order:3,concept:'Engendrer/Naissance'},
    {sense:'les nuits sont enceintes',sense_ar:'وَلَدَتْ',description:'Métaphore : les nuits portent en elles ce qu\'elles vont produire, on ne sait pas ce qu\'elles enfanteront.',display_order:4,concept:'Engendrer/Naissance'},
    {sense:'accoucher (aider)',sense_ar:'وَلَّدَ',description:'Aider quelqu\'un à mettre au monde, rôle de sage-femme. Acte extérieur d\'assistance.',display_order:5,concept:'Engendrer/Naissance'},
    {sense:'rendre mère',sense_ar:'وَلَّدَ',description:'Faire en sorte qu\'une femme ait des enfants. Acte causatif.',display_order:6,concept:'Engendrer/Naissance'},
    {sense:'approcher de l\'accouchement',sense_ar:'أَوْلَدَتْ',description:'Atteindre le moment de mettre au monde. État transitoire.',display_order:7,concept:'Engendrer/Naissance'},
    {sense:'rendre enceinte',sense_ar:'اِسْتَوْلَدَ',description:'Causer la grossesse. Acte extérieur dirigé vers l\'autre.',display_order:8,concept:'Engendrer/Naissance'},
    {sense:'se multiplier par reproduction',sense_ar:'تَوَالَدُوا',description:'Se reproduire mutuellement, devenir nombreux par propagation. Acte réciproque et continu.',display_order:9,concept:'Engendrer/Naissance'},
    {sense:'grossesse',sense_ar:'وِلَاد',description:'État de porter un enfant. État intérieur temporaire.',display_order:10,concept:'Engendrer/Naissance'},
    {sense:'prolifique',sense_ar:'وَلُود',description:'Qui engendre beaucoup, qui produit abondamment. Qualité permanente.',display_order:11,concept:'Engendrer/Naissance'},
    {sense:'sage-femme',sense_ar:'مُوَلِّدَة',description:'Celle qui aide à l\'accouchement. Rôle social.',display_order:12,concept:'Engendrer/Naissance'},

    // Enfant/Descendance
    {sense:'enfant',sense_ar:'وَلَد',description:'Fils, fille, progéniture, jeune être. Le résultat de l\'engendrement. Réalité extérieure et permanente : une fois né, l\'enfant existe indépendamment.',display_order:13,concept:'Enfant/Descendance'},
    {sense:'nouveau-né',sense_ar:'وَلِيد',description:'Enfant qui vient de naître. État transitoire de l\'être juste après sa sortie.',display_order:14,concept:'Enfant/Descendance'},
    {sense:'garçon serviteur',sense_ar:'وَلِيد',description:'Jeune qui n\'a pas atteint la puberté, serviteur. Extension sociale.',display_order:15,concept:'Enfant/Descendance'},
    {sense:'contemporain de naissance',sense_ar:'لِدَة',description:'Né en même temps qu\'un autre. Relation temporelle.',display_order:16,concept:'Enfant/Descendance'},
    {sense:'père / mère / parents',sense_ar:'وَالِد',description:'Celui ou celle qui a engendré. Le géniteur vu depuis l\'enfant.',display_order:17,concept:'Enfant/Descendance'},
    {sense:'peuple tribu famille',sense_ar:'وُلْد',description:'Les gens d\'une même lignée. Extension collective de la descendance.',display_order:18,concept:'Enfant/Descendance'},
    {sense:'enfance',sense_ar:'وُلُودِيَّة',description:'Période de la vie où l\'on est enfant. État temporaire.',display_order:19,concept:'Enfant/Descendance'},
    {sense:'lieu de naissance',sense_ar:'مَوْلِد',description:'Endroit où quelqu\'un est né. Réalité spatiale.',display_order:20,concept:'Enfant/Descendance'},
    {sense:'moment de naissance',sense_ar:'مِيلَاد',description:'Instant de la naissance. Réalité temporelle.',display_order:21,concept:'Enfant/Descendance'},

    // Éducation/Croissance
    {sense:'élever éduquer',sense_ar:'وَلَّدَ',description:'Faire grandir un enfant, le nourrir et l\'instruire. Acte extérieur permanent et directionnel : on élève quelqu\'un d\'autre.',display_order:22,concept:'Éducation/Croissance'},
    {sense:'rudesse illettrisme',sense_ar:'وُلُودِيَّة',description:'Manque d\'éducation, grossièreté. État intérieur négatif lié au manque de croissance.',display_order:23,concept:'Éducation/Croissance'},

    // Production/Innovation
    {sense:'innover produire',sense_ar:'وَلَّدَ',description:'Créer quelque chose de nouveau, générer une idée ou une chose qui n\'existait pas. Acte extérieur créatif.',display_order:24,concept:'Production/Innovation'},
    {sense:'être engendré (chose)',sense_ar:'تَوَلَّدَ',description:'Une chose qui naît d\'une autre, qui est produite. Résultat passif de la production.',display_order:25,concept:'Production/Innovation'},
    {sense:'esprit de parti engendré',sense_ar:'تَوَلَّدَ',description:'Un sentiment collectif qui naît, qui émerge. Production sociale.',display_order:26,concept:'Production/Innovation'},
    {sense:'post-classique innovant',sense_ar:'مُوَلَّد',description:'Ce qui est créé après l\'époque classique, modernisé, innovant. Qualité temporelle.',display_order:27,concept:'Production/Innovation'},
    {sense:'forgé falsifié',sense_ar:'مُوَلَّد',description:'Document ou preuve fabriqué, non authentique. Résultat négatif de la production.',display_order:28,concept:'Production/Innovation'},

    // Divers
    {sense:'poule domestique',sense_ar:'وَلِيد',description:'La poule comme animal qui produit des œufs régulièrement.',display_order:29,concept:'Divers'},
    {sense:'brebis enceinte',sense_ar:'وَالِد',description:'Brebis qui porte un petit. État animal.',display_order:30,concept:'Divers'},
    {sense:'un seul petit',sense_ar:'مُوحِد',description:'Qui met au monde un seul petit à la fois.',display_order:31,concept:'Divers'},
    {sense:'société productive',sense_ar:'وَلَّادَة',description:'Compagnie dont la fréquentation produit du bien.',display_order:32,concept:'Divers'},
    {sense:'homme sans lignée connue',sense_ar:'وَلَد',description:'Personne dont on ne connaît pas l\'origine.',display_order:33,concept:'Divers'},
    {sense:'herbe fraîche',sense_ar:'وَلِيد',description:'Herbage nouveau dans la terre.',display_order:34,concept:'Divers'},
    {sense:'enfant mort en bas âge au paradis',sense_ar:'وَلِيد',description:'Le Lane\'s note cette tradition.',display_order:35,concept:'Divers'},
  ]

  const toInsert = wldSenses.map(s => ({...s, analysis_id: wldId, meaning_type: 'etymology'}))
  const {error: insErr} = await db.from('word_meanings').insert(toInsert)
  if (insErr) log('  ERREUR insertion: ' + insErr.message)
  else log('  ' + wldSenses.length + ' sens insérés en 5 concepts')

  const conceptDescs = {
    'Engendrer/Naissance': 'Acte de donner naissance, de faire sortir un être vivant de soi. C\'est un processus où une partie de celui qui engendre se sépare pour devenir un être indépendant. L\'engendrement est un acte extérieur et directionnel — quelque chose SORT de la source. Il implique une division : avant l\'engendrement, il y a un seul être ; après, il y en a deux.',
    'Enfant/Descendance': 'Le résultat de l\'engendrement : l\'être qui a été produit. L\'enfant est une réalité extérieure et permanente qui existe indépendamment de sa source une fois né. Ce concept couvre le produit (enfant), le producteur (parent), et les relations qui en découlent (famille, tribu).',
    'Éducation/Croissance': 'L\'acte de faire grandir un enfant après sa naissance — nourrir, instruire, élever. C\'est un processus extérieur, permanent et directionnel : on fait grandir quelqu\'un d\'autre.',
    'Production/Innovation': 'Extension métaphorique de l\'engendrement vers la création intellectuelle ou matérielle. Produire quelque chose de nouveau qui n\'existait pas avant.',
    'Divers': 'Sens isolés (poule, brebis, herbe, société productive).',
  }
  for (const [concept, desc] of Object.entries(conceptDescs)) {
    await db.from('word_meanings').update({description: desc}).eq('analysis_id', wldId).eq('concept', concept)
  }
  log('')

  // ═══ ÉTAPE 3 ═══
  log('>>> ÉTAPE 3 — ANALYSE DES CONCEPTS (verset 112:3)')
  log('')
  // Contexte : لَمْ يَلِدْ وَلَمْ يُولَدْ
  // yalid = verbe inaccompli forme I voix active, nié par lam, 3ème personne
  // yulad = verbe inaccompli forme I voix passive, nié par lam, 3ème personne

  const conceptAxes = {
    'Engendrer/Naissance': {
      status: 'retenu',
      senses: ['mettre au monde','engendrer','la terre produit','les nuits sont enceintes','accoucher (aider)','rendre mère','approcher de l\'accouchement','rendre enceinte','se multiplier par reproduction','grossesse','prolifique','sage-femme'],
      axe1_verset: 'Le verset dit "lam yalid wa lam yulad" (Il n\'a pas engendré et Il n\'a pas été engendré). Le champ lexical est entièrement celui de l\'engendrement et de la naissance. Le verbe yalid est à la voix active (l\'action est faite par le sujet) et yulad à la voix passive (l\'action est subie par le sujet). Le verset nie les deux directions de l\'engendrement : ni producteur ni produit. C\'est une double négation qui coupe toute chaîne de filiation.',
      axe2_voisins: 'Le verset 1 dit que Dieu est unique (ahad, indivisible). L\'engendrement suppose qu\'une partie de soi se sépare pour former un autre être. Si Dieu est indivisible (v1), aucune partie ne peut se séparer pour engendrer. Le verset 3 est la conséquence logique du verset 1. Le verset 4 complète en niant l\'existence d\'un égal, ce qui élimine aussi la possibilité d\'une relation de même nature.',
      axe3_sourate: 'Al-Ikhlas définit Dieu d\'abord positivement (unique v1, celui vers qui on se tourne v2) puis négativement (pas d\'engendrement v3, pas d\'égal v4). L\'engendrement est la première réalité niée. Cette négation découle de l\'indivisibilité : ce qui est indivisible ne peut pas se diviser pour produire un autre.',
      axe4_coherence: 'Le Coran nie l\'engendrement divin dans plusieurs passages (sourate 19:35, 72:3, 6:101). Le verset 112:3 est la formulation la plus directe et la plus complète car il nie les deux directions (engendrer et être engendré). L\'usage du verbe walada est constant dans le Coran pour la procréation.',
      axe5_frequence: 'La négation de l\'engendrement fonde l\'égalité pour le khalifa. Si Dieu n\'a pas de progéniture, aucun être ne peut prétendre à un lien de parenté privilégié avec Dieu. Tous les êtres humains sont au même niveau devant Dieu, ce qui empêche la corruption par la prétention à un statut héréditaire.',
      proof_ctx: 'Le concept d\'engendrement/naissance décrit l\'acte de faire sortir un être vivant de soi, un processus où une partie se sépare pour devenir un être indépendant. Les deux formes du verbe dans le verset (active et passive) nient les deux directions : Dieu n\'engendre pas (rien ne sort de Lui) et n\'est pas engendré (Il ne vient de rien). Test de compatibilité philosophique : un verbe inaccompli nié par lam peut-il porter ce concept ? Oui : la négation par lam de l\'inaccompli en arabe nie le passé de manière catégorique ("n\'a jamais engendré"). Le concept d\'engendrement est un acte extérieur (quelque chose sort) ce qui est compatible avec un verbe d\'action. Distinction avec "Production/Innovation" : la production intellectuelle (innover, créer des idées) est une extension métaphorique. Le verset utilise le verbe walada qui est spécifiquement biologique, pas métaphorique. Le Coran utilise d\'autres mots pour la création (khalaqa, ja\'ala).',
    },
    'Enfant/Descendance': {
      status: 'probable',
      senses: ['enfant','nouveau-né','garçon serviteur','contemporain de naissance','père / mère / parents','peuple tribu famille','enfance','lieu de naissance','moment de naissance'],
      axe1_verset: 'Le verset utilise le verbe walada (engendrer), pas le nom walad (enfant). Le champ lexical est celui de l\'acte d\'engendrer, pas du résultat (l\'enfant). Cependant, nier l\'engendrement nie implicitement l\'existence d\'un enfant : si l\'acte n\'a pas eu lieu, le résultat n\'existe pas. Le concept d\'enfant/descendance est une conséquence du concept d\'engendrement.',
      axe2_voisins: 'Les versets voisins parlent d\'identité et de relations. L\'enfant est le résultat d\'une relation d\'engendrement. Nier l\'engendrement (v3) revient à nier l\'existence d\'un enfant divin.',
      axe3_sourate: 'La sourate définit Dieu par ce qu\'Il est et ce qu\'Il n\'est pas. L\'absence d\'enfant est une conséquence de l\'absence d\'engendrement.',
      axe4_coherence: 'Le Coran nie explicitement que Dieu ait un enfant (walad) dans plusieurs passages (sourate 2:116, 19:88-92). Le verset 112:3 nie l\'acte plutôt que le résultat, ce qui est plus fondamental.',
      axe5_frequence: 'L\'absence de descendance divine empêche toute prétention héréditaire au pouvoir divin.',
      proof_ctx: 'Le concept d\'enfant/descendance est le résultat de l\'engendrement. Le verset nie l\'acte (le verbe walada) pas le résultat (le nom walad). Nier l\'acte est plus fondamental car si l\'acte n\'a jamais eu lieu, le résultat ne peut pas exister. La distinction : l\'engendrement est le processus (quelque chose sort), l\'enfant est le produit (ce qui est sorti). Le verset parle du processus.',
    },
    'Éducation/Croissance': {
      status: 'nul',
      senses: ['élever éduquer','rudesse illettrisme'],
      proof_ctx: 'Le verset parle d\'engendrement biologique (walada), pas d\'éducation. Le Coran utilise rabba pour élever et éduquer.',
    },
    'Production/Innovation': {
      status: 'nul',
      senses: ['innover produire','être engendré (chose)','esprit de parti engendré','post-classique innovant','forgé falsifié'],
      proof_ctx: 'Le verset utilise walada qui est spécifiquement biologique, pas métaphorique. Le Coran utilise d\'autres verbes pour la création intellectuelle ou matérielle (khalaqa, ja\'ala, bada\'a).',
    },
    'Divers': {
      status: 'nul',
      senses: ['poule domestique','brebis enceinte','un seul petit','société productive','homme sans lignée connue','herbe fraîche','enfant mort en bas âge au paradis'],
      proof_ctx: 'Sens isolés sans rapport avec le contexte du verset.',
    },
  }

  for (const [concept, ax] of Object.entries(conceptAxes)) {
    const tag = ax.axe1_verset ? '(5 axes)' : '(proof_ctx seul)'
    log('  ' + concept + ' (' + ax.senses.length + ' sens) → ' + ax.status.toUpperCase() + ' ' + tag)
    await db.from('word_meanings').update({status: ax.status, proof_ctx: ax.proof_ctx}).eq('analysis_id', wldId).eq('concept', concept)
  }
  log('')

  // verse_word_analyses — deux occurrences de wld (active et passive)
  const vwaData = [
    {verse_id: 6224, word_key: 'wld', sense_chosen: 'engendrer', position: 2},
    {verse_id: 6224, word_key: 'wld', sense_chosen: 'engendrer', position: 4},
  ]
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(vwaData)
  if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)

  // analysis_axes pour les deux occurrences
  for (const pos of [2, 4]) {
    const voiceNote = pos === 2 ? 'voix active — Il n\'a pas engendré (l\'action est faite par Lui)' : 'voix passive — Il n\'a pas été engendré (l\'action est subie par Lui)'
    await db.from('verse_word_analyses').update({
      analysis_axes: {
        sense_chosen: 'engendrer',
        concept_chosen: 'Engendrer/Naissance',
        voice_note: voiceNote,
        concepts: conceptAxes
      }
    }).eq('verse_id', 6224).eq('word_key', 'wld').eq('position', pos)
  }

  log('  verse_word_analyses et analysis_axes insérés')
  log('')

  // ═══ ÉTAPE 4 ═══
  log('>>> ÉTAPE 4 — TRADUCTION')

  const translation_arab = 'Il n\'a pas engendré et Il n\'a pas été engendré.'
  const translation_explanation = [
    '§DEMARCHE§',
    '**Lam** est une particule de négation qui, suivie d\'un verbe à l\'inaccompli, nie le passé de manière catégorique : "n\'a jamais fait".',
    '**Yalid** est un verbe à l\'inaccompli (une forme qui décrit l\'action en cours ou habituelle), voix active (l\'action est faite par le sujet), 3ème personne. Nié par lam : "Il n\'a pas engendré".',
    '**Wa** est une conjonction de coordination : "et".',
    '**Lam yulad** : même structure mais à la voix passive (une forme qui dit que l\'action est subie, pas faite). "Il n\'a pas été engendré".',
    'Les deux négations coupent Dieu de toute chaîne de filiation dans les deux directions : ni en amont (pas de parent) ni en aval (pas d\'enfant).',
    '§JUSTIFICATION§',
    '**engendrer** — Le concept retenu est "Engendrer/Naissance". Le mot "engendrer" est choisi car il est neutre en genre (contrairement à "enfanter" qui est spécifiquement maternel) et couvre l\'acte biologique de donner naissance. Le Lane\'s (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) donne "she brought forth" et "he begot" pour walada — les deux genres sont couverts. "Engendrer" capture l\'idée que quelque chose SORT de la source pour devenir un être séparé, ce qui est précisément ce que le verset nie.',
  ].join('\n\n')

  const segments = [
    {fr:'ne pas',phon:'lam',arabic:'لَمْ',word_key:null,is_particle:true,position:1},
    {fr:'engendrer',pos:'verbe',phon:'yalid',arabic:'يَلِدْ',word_key:'wld',is_particle:false,sense_retenu:'engendrer',position:2},
    {fr:'et',phon:'wa',arabic:'وَ',word_key:null,is_particle:true,position:3},
    {fr:'ne pas être engendré',pos:'verbe',phon:'lam yulad',arabic:'لَمْ يُولَدْ',word_key:'wld',is_particle:false,sense_retenu:'engendrer',position:4},
  ]

  await db.from('verse_analyses').update({translation_arab, translation_explanation, segments}).eq('verse_id', 6224)
  log('  Traduction : "' + translation_arab + '"')

  // Daily
  const daily = [
    {analysis_id: wldId, sense: 'engendrer', arabic: 'وَلَدَتْ وَلَدًا', phon: 'waladat waladan', french: 'Elle a mis au monde un enfant'},
    {analysis_id: wldId, sense: 'engendrer', arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', phon: 'lam yalid wa lam yulad', french: 'Il n\'a pas engendré et n\'a pas été engendré'},
    {analysis_id: wldId, sense: 'engendrer', arabic: 'مَوْلِدُهُ فِي مَكَّةَ', phon: 'mawliduhu fi makkata', french: 'Son lieu de naissance est à La Mecque'},
  ]
  const {error: dailyErr} = await db.from('word_daily').insert(daily)
  if (dailyErr) log('  ERREUR daily: ' + dailyErr.message)
  else log('  3 phrases du quotidien insérées')

  log('')
  log('════════════════════════════════════════')
  log('VERSET 112:3 — TERMINÉ')
  log('  wld (voix active) → concept "Engendrer/Naissance" → "engendrer"')
  log('  wld (voix passive) → concept "Engendrer/Naissance" → "engendrer"')
  log('  Traduction : "Il n\'a pas engendré et Il n\'a pas été engendré."')
  log('════════════════════════════════════════')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
