// Pipeline V2 — Sourate 112, Verset 4 — وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

async function run() {
  log('════════════════════════════════════════')
  log('  PIPELINE V2 — VERSET 112:4')
  log('  وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ')
  log('════════════════════════════════════════')
  log('')

  // ═══ ÉTAPE 2 ═══
  log('>>> ÉTAPE 2 — SENS ÉTYMOLOGIQUES')
  log('  [ahd] SKIP — déjà analysé (verset 112:1)')

  // kwn
  let kwnId
  const {data: kwnEx} = await db.from('word_analyses').select('id').eq('word_key', 'kwn')
  if (kwnEx && kwnEx.length > 0) { kwnId = kwnEx[0].id }
  else { const {data: c} = await db.from('word_analyses').insert({word_key: 'kwn'}).select('id'); kwnId = c[0].id }
  log('  [kwn] analysis_id=' + kwnId + ' — 9 sens → 3 concepts')

  const kwnSenses = [
    {sense:'être (verbe incomplet)',sense_ar:'كَانَ',description:'Le verbe d\'existence fondamental quand il est suivi d\'un attribut. Il lie un sujet à une qualité ou un état. C\'est un outil grammatical qui porte le temps et la négation — il ne décrit pas une réalité en soi mais sert de support à l\'attribution.',display_order:1,concept:'Être/Existence'},
    {sense:'venir à l\'existence',sense_ar:'تَكَوَّنَ',description:'Recevoir son être, naître à l\'existence, passer du néant à l\'être. C\'est un changement d\'état ponctuel et fondamental.',display_order:2,concept:'Être/Existence'},
    {sense:'être humble soumis',sense_ar:'اِسْتَكَانَ',description:'Se mettre dans un état de soumission et d\'abaissement. État intérieur de petitesse volontaire.',display_order:3,concept:'Humilité/Soumission'},
    {sense:'lieu',sense_ar:'مَكَانَة',description:'Endroit précis où quelque chose se trouve. Réalité spatiale extérieure.',display_order:4,concept:'Lieu/État'},
    {sense:'reste à ta place',sense_ar:'مَكَانَة',description:'Injonction de ne pas bouger, de rester où l\'on est. Acte spatial.',display_order:5,concept:'Lieu/État'},
    {sense:'état condition',sense_ar:'مَكَانَة',description:'Situation dans laquelle on se trouve. Réalité intérieure ou extérieure.',display_order:6,concept:'Lieu/État'},
    {sense:'motif raison',sense_ar:'مَكَانَة',description:'Ce qui justifie une parole ou un acte. Réalité intellectuelle.',display_order:7,concept:'Lieu/État'},
    {sense:'devenir comme',sense_ar:'مَكَانَة',description:'Prendre l\'apparence ou la qualité de quelque chose. Transformation.',display_order:8,concept:'Lieu/État'},
  ]
  let toInsert = kwnSenses.map(s => ({...s, analysis_id: kwnId, meaning_type: 'etymology'}))
  let {error: insErr} = await db.from('word_meanings').insert(toInsert)
  if (insErr) log('  ERREUR kwn: ' + insErr.message)

  const kwnDescs = {
    'Être/Existence': 'Le verbe fondamental d\'existence et d\'attribution. Quand il est incomplet (suivi d\'un attribut), il sert de support grammatical : il porte le temps et la négation sans décrire une réalité en soi. Quand il est complet, il décrit le passage du néant à l\'être.',
    'Humilité/Soumission': 'État intérieur de petitesse et d\'abaissement volontaire. C\'est un état ressenti par celui qui se soumet.',
    'Lieu/État': 'Réalité spatiale ou situationnelle — l\'endroit ou la condition dans laquelle on se trouve.',
  }
  for (const [c, d] of Object.entries(kwnDescs)) {
    await db.from('word_meanings').update({description: d}).eq('analysis_id', kwnId).eq('concept', c)
  }

  // kfw (كفأ)
  let kfwId
  const {data: kfwEx} = await db.from('word_analyses').select('id').eq('word_key', 'kfa')
  if (kfwEx && kfwEx.length > 0) { kfwId = kfwEx[0].id }
  else { const {data: c} = await db.from('word_analyses').insert({word_key: 'kfa'}).select('id'); kfwId = c[0].id }
  log('  [kfa] analysis_id=' + kfwId + ' — 51 sens → 5 concepts')

  const kfwSenses = [
    // Égalité/Équivalence
    {sense:'être semblable égal',sense_ar:'كَافَأَ',description:'Être du même niveau, du même rang que quelqu\'un d\'autre. C\'est une réalité relationnelle permanente : l\'égalité est un état qui existe entre deux parties.',display_order:1,concept:'Égalité/Équivalence'},
    {sense:'égalité',sense_ar:'كَفَاء',description:'L\'état d\'être au même niveau. Réalité abstraite et permanente.',display_order:2,concept:'Égalité/Équivalence'},
    {sense:'semblable égal (nom)',sense_ar:'كَفَاء',description:'Celui qui est du même rang, du même niveau. Réalité extérieure et relationnelle.',display_order:3,concept:'Égalité/Équivalence'},
    {sense:'il n\'y a personne de semblable',sense_ar:'كَفَاء',description:'Négation de l\'existence d\'un égal. Le Lane\'s note cette construction.',display_order:4,concept:'Égalité/Équivalence'},
    {sense:'être égaux l\'un l\'autre',sense_ar:'تَكَافَآ',description:'Deux êtres qui sont au même niveau mutuellement. Relation réciproque.',display_order:5,concept:'Égalité/Équivalence'},
    {sense:'sang également rétribué',sense_ar:'تَكَافَآ',description:'Leurs sangs seront également compensés. Égalité dans la justice.',display_order:6,concept:'Égalité/Équivalence'},
    {sense:'égalité de rang lignée',sense_ar:'كَفَاءَة',description:'Égalité en rang, religion, lignée. Concept social de compatibilité.',display_order:7,concept:'Égalité/Équivalence'},
    {sense:'étant égal à',sense_ar:'مُكَافِئ',description:'Celui qui est l\'égal de. Participe actif.',display_order:8,concept:'Égalité/Équivalence'},
    {sense:'moutons d\'âge égal',sense_ar:'مُكَافِئ',description:'Deux animaux de même âge, similaires. Égalité physique.',display_order:9,concept:'Égalité/Équivalence'},

    // Retournement/Inversion
    {sense:'retourner inverser',sense_ar:'كَفَأَ',description:'Mettre à l\'envers, renverser un récipient. Acte physique extérieur et ponctuel.',display_order:10,concept:'Retournement/Inversion'},
    {sense:'incliner pencher',sense_ar:'كَفَأَ',description:'Faire pencher d\'un côté. Mouvement physique.',display_order:11,concept:'Retournement/Inversion'},
    {sense:'être retourné',sense_ar:'تَكَفَّأَ',description:'Être mis à l\'envers. Passif du retournement.',display_order:12,concept:'Retournement/Inversion'},
    {sense:'se balancer pencher',sense_ar:'تَكَفَّأَ',description:'Mouvement du corps d\'un côté à l\'autre. Mouvement physique.',display_order:13,concept:'Retournement/Inversion'},
    {sense:'être renversé défait',sense_ar:'اِنْكَفَأَ',description:'Être mis en déroute, vaincu. Extension militaire.',display_order:14,concept:'Retournement/Inversion'},

    // Compensation/Rétribution
    {sense:'compenser rétribuer',sense_ar:'كَافَأَ',description:'Rendre la pareille, donner en retour ce qui est dû. Acte extérieur et directionnel : quelque chose sort de celui qui compense et atteint celui qui est compensé.',display_order:15,concept:'Compensation/Rétribution'},
    {sense:'je n\'ai pas le pouvoir de le rétribuer',sense_ar:'كَافَأَ',description:'Impossibilité de rendre la pareille. Constat d\'impuissance face à l\'obligation.',display_order:16,concept:'Compensation/Rétribution'},
    {sense:'quantité égale à ce qui est dû',sense_ar:'كَفَاء',description:'La mesure exacte de ce qui doit être rendu. Équivalence quantitative.',display_order:17,concept:'Compensation/Rétribution'},

    // Détournement/Éloignement
    {sense:'détourner repousser',sense_ar:'كَفَأَ',description:'Faire se détourner quelqu\'un, le repousser. Acte extérieur de rejet.',display_order:18,concept:'Détournement/Éloignement'},
    {sense:'chasser',sense_ar:'كَفَأَ',description:'Éloigner par la force. Acte physique violent.',display_order:19,concept:'Détournement/Éloignement'},
    {sense:'se détourner revenir',sense_ar:'اِنْكَفَأَ',description:'Se retourner, revenir en arrière. Mouvement de retrait.',display_order:20,concept:'Détournement/Éloignement'},
    {sense:'dévier de sa route',sense_ar:'أَكْفَأَ',description:'S\'écarter de son objectif. Mouvement de déviation.',display_order:21,concept:'Détournement/Éloignement'},

    // Divers
    {sense:'poursuivre',sense_ar:'كَفَأَ',description:'Suivre quelqu\'un. Mouvement directionnel.',display_order:22,concept:'Divers'},
    {sense:'couleur changée',sense_ar:'كَفَأَ',description:'Changement d\'apparence. Transformation physique.',display_order:23,concept:'Divers'},
    {sense:'surveiller observer',sense_ar:'كَافَأَ',description:'Regarder attentivement. Acte d\'attention.',display_order:24,concept:'Divers'},
    {sense:'rideau de tente',sense_ar:'كَفَاء',description:'Pièce de tissu au fond de la tente. Objet physique.',display_order:25,concept:'Divers'},
    {sense:'production annuelle des chameaux',sense_ar:'كَفْأَة',description:'Les petits, le lait et la laine d\'une année. Sens pastoral.',display_order:26,concept:'Divers'},
    {sense:'bosse de chameau penchée',sense_ar:'أَكْفَأُ',description:'Chameau dont la bosse penche. Sens animal.',display_order:27,concept:'Divers'},
    {sense:'lettres proches en prononciation',sense_ar:'أَكْفَأَ',description:'Changement d\'une lettre à une autre proche. Sens linguistique.',display_order:28,concept:'Divers'},
    {sense:'sincère dans sa profession de foi',sense_ar:'مُكَافِئ',description:'Personne reconnue pour sa sincérité religieuse.',display_order:29,concept:'Divers'},
  ]

  toInsert = kfwSenses.map(s => ({...s, analysis_id: kfwId, meaning_type: 'etymology'}))
  insErr = (await db.from('word_meanings').insert(toInsert)).error
  if (insErr) log('  ERREUR kfa: ' + insErr.message)

  const kfwDescs = {
    'Égalité/Équivalence': 'Réalité relationnelle d\'être au même niveau, au même rang qu\'un autre. L\'égalité est permanente et extérieure : elle existe entre deux parties et peut être constatée objectivement. Le Lane\'s (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) donne "semblable, égal, du même rang" et note la construction "il n\'y a personne de semblable à lui".',
    'Retournement/Inversion': 'Acte physique de mettre à l\'envers, renverser, faire pencher. Mouvements ponctuels et extérieurs.',
    'Compensation/Rétribution': 'Acte de rendre la pareille, de donner en retour ce qui est dû. Relation transactionnelle entre deux parties.',
    'Détournement/Éloignement': 'Mouvement de se détourner, de repousser, de s\'écarter. Actes physiques de séparation.',
    'Divers': 'Sens isolés (poursuivre, surveiller, rideau, production animale, linguistique).',
  }
  for (const [c, d] of Object.entries(kfwDescs)) {
    await db.from('word_meanings').update({description: d}).eq('analysis_id', kfwId).eq('concept', c)
  }
  log('  ' + kwnSenses.length + ' + ' + kfwSenses.length + ' sens insérés')
  log('')

  // ═══ ÉTAPE 3 ═══
  log('>>> ÉTAPE 3 — ANALYSE DES CONCEPTS (verset 112:4)')
  log('')
  // Contexte : وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
  // yakun = verbe inaccompli nié par lam, 3ème personne
  // kufuwan = nom accusatif indéfini (attribut)
  // ahadun = nom nominatif indéfini (sujet)

  // kwn concepts
  const kwnAxes = {
    'Être/Existence': {
      status: 'retenu',
      senses: ['être (verbe incomplet)','venir à l\'existence'],
      axe1_verset: 'Le verset dit "wa lam yakun lahu kufuwan ahadun" (et personne n\'est égal à Lui). Le verbe yakun est kana à l\'inaccompli nié par lam. C\'est un verbe incomplet (suivi d\'un attribut kufuwan = égal). Il sert de support grammatical à la négation : sans ce verbe, la phrase ne pourrait pas nier l\'existence d\'un égal. Le champ lexical est celui de la négation d\'existence.',
      axe2_voisins: 'Le verset 3 nie l\'engendrement avec lam yalid. Le verset 4 nie l\'égalité avec lam yakun. Les deux utilisent la même structure négative (lam + verbe inaccompli). Le verbe kana est l\'outil de la deuxième négation, parallèle au verbe walada de la première.',
      axe3_sourate: 'La sourate se termine par une négation portée par le verbe être. Après avoir nié l\'engendrement (v3), elle nie l\'existence même d\'un comparable (v4). Le verbe être porte la négation la plus fondamentale : pas juste "il n\'a pas fait" mais "il n\'existe pas".',
      axe4_coherence: 'Le Coran utilise lam yakun dans de nombreux contextes pour nier l\'existence. C\'est une construction grammaticale standard et constante.',
      axe5_frequence: 'Le verbe être porte la négation finale : personne n\'est l\'égal de Dieu. Pour le khalifa, cela fonde l\'impossibilité de prétendre au rang divin, ce qui empêche la corruption par l\'auto-divinisation.',
      proof_ctx: 'Le verbe kana fonctionne ici comme verbe incomplet : il lie le sujet (ahadun = personne) à l\'attribut (kufuwan = égal). C\'est un support grammatical de négation. Test de compatibilité : un verbe incomplet peut-il porter une négation existentielle ? Oui : c\'est son rôle grammatical fondamental. Distinction avec "Humilité/Soumission" : l\'humilité est un état intérieur, le verbe être ici est un outil grammatical sans contenu propre. Distinction avec "Lieu/État" : le lieu est spatial, le verbe être ici est existentiel.',
    },
    'Humilité/Soumission': {
      status: 'nul',
      senses: ['être humble soumis'],
      proof_ctx: 'Le verset utilise kana comme verbe incomplet (outil grammatical), pas dans le sens de soumission (forme X istakaana). La forme et le sens sont différents.',
    },
    'Lieu/État': {
      status: 'nul',
      senses: ['lieu','reste à ta place','état condition','motif raison','devenir comme'],
      proof_ctx: 'Le verset utilise kana comme verbe d\'existence, pas dans le sens de lieu (makaana) ni d\'état. Le verbe est à l\'inaccompli nié, pas un nom de lieu.',
    },
  }

  // kfa concepts
  const kfaAxes = {
    'Égalité/Équivalence': {
      status: 'retenu',
      senses: ['être semblable égal','égalité','semblable égal (nom)','il n\'y a personne de semblable','être égaux l\'un l\'autre','sang également rétribué','égalité de rang lignée','étant égal à','moutons d\'âge égal'],
      axe1_verset: 'Le verset dit "lam yakun lahu kufuwan ahadun" (personne n\'est égal à Lui). Le mot kufuwan est en position d\'attribut (accusatif), il qualifie le sujet ahadun par rapport à Dieu. Le champ lexical est celui de la comparaison et de l\'équivalence. Le verset nie que quiconque puisse être au même rang que Dieu. Le Lane\'s note explicitement la construction "il n\'y a personne de semblable à lui" qui correspond exactement au verset.',
      axe2_voisins: 'Le verset 1 dit que Dieu est unique (indivisible). Le verset 3 nie l\'engendrement. Le verset 4 complète en niant l\'existence d\'un comparable. La progression va de l\'essence (unique) aux relations (pas d\'enfant, pas d\'égal). Le mot kufu est la conclusion de cette chaîne de négations.',
      axe3_sourate: 'Al-Ikhlas se termine par la négation la plus absolue : personne n\'est l\'égal de Dieu. Le mot kufu porte le poids de cette conclusion. C\'est le dernier mot significatif de la sourate.',
      axe4_coherence: 'Le mot kufuwan n\'apparaît qu\'une seule fois dans tout le Coran, comme as-samad. C\'est un mot rare pour un contexte unique. Le Coran utilise mithl et nazir pour la ressemblance dans d\'autres contextes, mais kufu pour l\'égalité de rang ici.',
      axe5_frequence: 'L\'absence d\'égal fonde l\'unicité de l\'autorité pour le khalifa. Si personne n\'est l\'égal de Dieu, aucun humain ne peut prétendre à Son rang. Tous les humains sont au même niveau entre eux devant Dieu, ce qui empêche la corruption par l\'auto-élévation.',
      proof_ctx: 'Le concept d\'égalité/équivalence décrit la réalité relationnelle d\'être au même rang. Le verset nie cette réalité : personne n\'est au rang de Dieu. Le Lane\'s donne "semblable, égal, du même rang" pour kufu et note la construction "il n\'y a personne de semblable à lui". Test de compatibilité : un nom accusatif indéfini en position d\'attribut peut-il porter ce concept ? Oui : l\'attribut dit ce que le sujet EST par rapport à Dieu, et le concept d\'égalité est exactement une relation entre deux parties. Distinction avec "Compensation/Rétribution" : la compensation est transactionnelle (rendre la pareille), l\'égalité est existentielle (être au même rang). Le verset parle d\'existence ("personne n\'existe qui soit égal"), pas de transaction. Distinction avec "Retournement/Inversion" : sens physique de renverser, sans rapport avec la comparaison de rang.',
    },
    'Compensation/Rétribution': {
      status: 'probable',
      senses: ['compenser rétribuer','je n\'ai pas le pouvoir de le rétribuer','quantité égale à ce qui est dû'],
      axe1_verset: 'La compensation est un acte transactionnel (rendre la pareille). Le verset ne parle pas de transaction mais d\'existence. "Personne n\'est l\'égal de Lui" est un constat existentiel, pas "personne ne peut Lui rendre la pareille" qui serait transactionnel. Le champ lexical est celui de l\'identité et de la comparaison, pas de l\'échange.',
      axe2_voisins: 'Les versets précédents nient des réalités existentielles (engendrement v3), pas des transactions. La sourate est dans un registre identitaire, pas transactionnel.',
      axe3_sourate: 'La sourate définit l\'identité de Dieu, elle ne parle pas d\'échanges ni de commerce.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour la compensation et la rétribution (jaza, din). Le choix de kufu plutôt que ces mots indique un sens d\'égalité de rang, pas de compensation.',
      axe5_frequence: 'La compensation est un acte réciproque entre égaux. Mais le verset nie précisément qu\'il existe un égal, donc la compensation est impossible par définition.',
      proof_ctx: 'La compensation est transactionnelle (rendre la pareille), l\'égalité est existentielle (être au même rang). Le verset nie l\'existence d\'un égal, pas la capacité de compenser. Le Coran utilise d\'autres mots pour la compensation (jaza, din).',
    },
    'Retournement/Inversion': {
      status: 'nul',
      senses: ['retourner inverser','incliner pencher','être retourné','se balancer pencher','être renversé défait'],
      proof_ctx: 'Sens physiques de retournement et d\'inversion. Sans rapport avec la comparaison de rang dans le verset.',
    },
    'Détournement/Éloignement': {
      status: 'nul',
      senses: ['détourner repousser','chasser','se détourner revenir','dévier de sa route'],
      proof_ctx: 'Mouvements physiques de séparation. Le verset ne parle pas de mouvement mais de comparaison de rang.',
    },
    'Divers': {
      status: 'nul',
      senses: ['poursuivre','couleur changée','surveiller observer','rideau de tente','production annuelle des chameaux','bosse de chameau penchée','lettres proches en prononciation','sincère dans sa profession de foi'],
      proof_ctx: 'Sens isolés sans rapport avec le contexte du verset.',
    },
  }

  // ahd dans le contexte du verset 4 (négatif) → quiconque/personne
  const ahdAxes_v4 = {
    'Quiconque/Indéfini': {
      status: 'retenu',
      senses: ['quiconque','personne','quelque chose'],
      axe1_verset: 'Le verset dit "lam yakun lahu kufuwan ahadun" (personne n\'est égal à Lui). Le mot ahadun est le sujet de la phrase négative. Dans ce contexte négatif (lam), ahad signifie "personne, quiconque". Le Lane\'s note que ahad fonctionne comme pronom indéfini dans les phrases négatives. Le champ lexical est celui de la négation absolue : on nie l\'existence de QUICONQUE qui serait l\'égal de Dieu.',
      axe2_voisins: 'Le verset 1 utilise ahad en contexte affirmatif (unique, qualité). Le verset 4 utilise ahad en contexte négatif (personne). Le même mot change de sens selon la structure grammaticale. Le Lane\'s atteste les deux usages. Les versets 3-4 sont dans la partie négative de la sourate, où ahad fonctionne comme "personne".',
      axe3_sourate: 'La sourate se termine par la négation la plus complète : "et personne n\'est égal à Lui". Le mot ahad en position de sujet d\'une phrase négative ferme la porte à tout concurrent.',
      axe4_coherence: 'Le Coran utilise ahad dans le sens de "quiconque/personne" dans les phrases négatives de manière constante. Cette alternance entre le sens affirmatif (unique) et négatif (personne) est propre au mot ahad.',
      axe5_frequence: 'Nier que quiconque soit l\'égal de Dieu fonde l\'égalité entre les humains : si personne n\'est au rang de Dieu, tous les humains sont au même niveau entre eux.',
      proof_ctx: 'Le mot ahad en contexte négatif (lam yakun) fonctionne comme pronom indéfini signifiant "personne, quiconque". Le Lane\'s atteste cet usage dans les phrases négatives et interrogatives. Test de compatibilité : un nom nominatif indéfini en position de sujet d\'une phrase négative peut-il porter ce concept ? Oui : c\'est exactement la position grammaticale du pronom indéfini. Distinction avec "Unicité/Indivisibilité" : en contexte affirmatif (verset 1), ahad qualifie la nature de Dieu (indivisible). En contexte négatif (verset 4), ahad nie l\'existence de quiconque. Le même mot, deux contextes, deux sens.',
    },
    'Unicité/Indivisibilité': {
      status: 'probable',
      senses: ['déclarer l\'unicité','un (premier des nombres)','l\'Indivisible','unité'],
      axe1_verset: 'L\'unicité est la qualité d\'être indivisible. Le verset 4 est une phrase négative. "Personne d\'unique n\'est à Lui" ne fait pas le même sens que "personne n\'est égal à Lui". En contexte négatif, ahad fonctionne comme pronom ("personne"), pas comme adjectif ("unique"). Le Lane\'s note cette distinction contextuelle.',
      axe2_voisins: 'Le verset 1 a déjà posé l\'unicité en contexte affirmatif. Répéter l\'unicité au verset 4 serait redondant. Le verset 4 ajoute une information nouvelle : l\'absence d\'égal.',
      axe3_sourate: 'La sourate pose l\'unicité (v1) puis l\'absence d\'engendrement (v3) puis l\'absence d\'égal (v4). Chaque verset ajoute quelque chose de nouveau. Si le verset 4 répète l\'unicité, la progression est brisée.',
      axe4_coherence: 'Le Coran utilise ahad dans le sens de "personne" dans de nombreuses phrases négatives. Le contexte grammatical détermine le sens.',
      axe5_frequence: 'L\'unicité a déjà été posée au verset 1. Le verset 4 ajoute la conséquence : si Dieu est unique, personne ne peut être Son égal.',
      proof_ctx: 'L\'unicité est posée au verset 1. Le verset 4 est en contexte négatif (lam yakun). En arabe, ahad en phrase négative fonctionne comme "personne", pas comme "unique". Le Lane\'s atteste les deux usages selon le contexte.',
    },
    'Nombre/Quantification': {
      status: 'nul',
      senses: ['rendre onze','un des plusieurs','un par un'],
      proof_ctx: 'Le verset ne compte pas, il nie l\'existence de quiconque. Le nombre est hors contexte.',
    },
    'Solitude/Isolement': {
      status: 'nul',
      senses: ['être seul','ne pas connaître'],
      proof_ctx: 'Le verset ne parle pas de solitude mais d\'absence d\'égal. Les deux sont différents : être seul est un état ressenti, ne pas avoir d\'égal est un constat objectif.',
    },
    'Divers': {
      status: 'nul',
      senses: ['dimanche','calamité','tradition isolée'],
      proof_ctx: 'Sens isolés sans rapport avec le contexte.',
    },
  }

  // Logs
  log('  [kwn]')
  for (const [c, ax] of Object.entries(kwnAxes)) {
    const tag = ax.axe1_verset ? '(5 axes)' : '(proof_ctx seul)'
    log('    ' + c + ' → ' + ax.status.toUpperCase() + ' ' + tag)
    await db.from('word_meanings').update({status: ax.status, proof_ctx: ax.proof_ctx}).eq('analysis_id', kwnId).eq('concept', c)
  }
  log('  [kfa]')
  for (const [c, ax] of Object.entries(kfaAxes)) {
    const tag = ax.axe1_verset ? '(5 axes)' : '(proof_ctx seul)'
    log('    ' + c + ' → ' + ax.status.toUpperCase() + ' ' + tag)
    await db.from('word_meanings').update({status: ax.status, proof_ctx: ax.proof_ctx}).eq('analysis_id', kfwId).eq('concept', c)
  }
  log('  [ahd] → contexte négatif → Quiconque/Indéfini RETENU')
  log('')

  // verse_word_analyses
  const {data: ahdWA} = await db.from('word_analyses').select('id').eq('word_key', 'ahd')
  const ahdId = ahdWA[0].id

  const vwaData = [
    {verse_id: 6225, word_key: 'kwn', sense_chosen: 'être', position: 2},
    {verse_id: 6225, word_key: 'kfa', sense_chosen: 'égal', position: 4},
    {verse_id: 6225, word_key: 'ahd', sense_chosen: 'personne', position: 5},
  ]
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(vwaData)
  if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)

  // analysis_axes
  await db.from('verse_word_analyses').update({
    analysis_axes: { sense_chosen: 'être', concept_chosen: 'Être/Existence', concepts: kwnAxes }
  }).eq('verse_id', 6225).eq('word_key', 'kwn')

  await db.from('verse_word_analyses').update({
    analysis_axes: { sense_chosen: 'égal', concept_chosen: 'Égalité/Équivalence', concepts: kfaAxes }
  }).eq('verse_id', 6225).eq('word_key', 'kfa')

  await db.from('verse_word_analyses').update({
    analysis_axes: { sense_chosen: 'personne', concept_chosen: 'Quiconque/Indéfini', concepts: ahdAxes_v4 }
  }).eq('verse_id', 6225).eq('word_key', 'ahd')

  log('  verse_word_analyses et analysis_axes insérés')
  log('')

  // ═══ ÉTAPE 4 ═══
  log('>>> ÉTAPE 4 — TRADUCTION')

  const translation_arab = 'Et personne n\'est égal à Lui.'
  const translation_explanation = [
    '§DEMARCHE§',
    '**Wa** est une conjonction de coordination : "et".',
    '**Lam yakun** : lam est une particule de négation, yakun est le verbe kana (être) à l\'inaccompli. Ensemble, ils nient de manière catégorique. Le verbe kana fonctionne ici comme verbe incomplet (il a besoin d\'un sujet et d\'un attribut).',
    '**Lahu** : la préposition li (pour/à) suivie du pronom hu (lui). "Pour Lui" ou "à Lui" — indique à qui la comparaison se rapporte.',
    '**Kufuwan** est un nom à l\'accusatif indéfini, en position d\'attribut (la partie de la phrase qui dit ce qu\'est le sujet). Il qualifie le sujet ahadun par rapport à Dieu.',
    '**Ahadun** est un nom au nominatif indéfini, en position de sujet. En contexte négatif (lam yakun), ahad signifie "personne, quiconque" — il nie l\'existence de tout être qui pourrait être l\'égal de Dieu.',
    '§JUSTIFICATION§',
    '**être** — Le concept retenu est "Être/Existence". Le verbe kana sert de support grammatical à la négation. Il lie le sujet (personne) à l\'attribut (égal). C\'est un outil de construction, pas un attribut de Dieu.',
    '**égal** — Le concept retenu est "Égalité/Équivalence". Le mot "égal" est choisi car il capture la relation de rang entre deux parties. Le Lane\'s (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) donne "semblable, égal, du même rang" pour kufu et note la construction "il n\'y a personne de semblable à lui". Le mot "semblable" (concept probable de "Compensation/Rétribution") est écarté car la compensation est transactionnelle (rendre la pareille), alors que le verset parle d\'existence (être au même rang). Le mot "comparable" aurait aussi fonctionné mais "égal" est plus courant en français.',
    '**personne** — Le concept retenu est "Quiconque/Indéfini". Le mot "personne" est choisi car en contexte négatif ("personne n\'est"), il capture la négation absolue de l\'existence de tout être qui pourrait être l\'égal de Dieu. Au verset 1, ahad signifie "unique" (contexte affirmatif). Au verset 4, ahad signifie "personne" (contexte négatif). Le même mot arabe, deux contextes, deux mots français différents.',
  ].join('\n\n')

  const segments = [
    {fr:'et',phon:'wa',arabic:'وَ',word_key:null,is_particle:true,position:1},
    {fr:'n\'est pas',pos:'verbe',phon:'lam yakun',arabic:'لَمْ يَكُن',word_key:'kwn',is_particle:false,sense_retenu:'être',position:2},
    {fr:'à Lui',phon:'lahu',arabic:'لَّهُۥ',word_key:null,is_particle:true,position:3},
    {fr:'égal',pos:'nom',phon:'kufuwan',arabic:'كُفُوًا',word_key:'kfa',is_particle:false,sense_retenu:'égal',position:4},
    {fr:'personne',pos:'nom',phon:'ahadun',arabic:'أَحَدٌۢ',word_key:'ahd',is_particle:false,sense_retenu:'personne',position:5},
  ]

  await db.from('verse_analyses').update({translation_arab, translation_explanation, segments}).eq('verse_id', 6225)
  log('  Traduction : "' + translation_arab + '"')

  // Daily pour kfa
  const daily = [
    {analysis_id: kfwId, sense: 'égal', arabic: 'لَيْسَ لَهُ كُفُوٌ', phon: 'laysa lahu kufuwun', french: 'Il n\'a pas d\'égal'},
    {analysis_id: kfwId, sense: 'égal', arabic: 'هُمْ أَكْفَاءٌ', phon: 'hum akfaaun', french: 'Ils sont des égaux'},
    {analysis_id: kfwId, sense: 'égal', arabic: 'كَافَأَهُ عَلَى عَمَلِهِ', phon: 'kaafaahu ala amalihi', french: 'Il l\'a rétribué pour son travail'},
  ]
  const {error: dailyErr} = await db.from('word_daily').insert(daily)
  if (dailyErr) log('  ERREUR daily: ' + dailyErr.message)
  else log('  3 phrases du quotidien insérées')

  log('')
  log('════════════════════════════════════════')
  log('VERSET 112:4 — TERMINÉ')
  log('  kwn → concept "Être/Existence" → "être"')
  log('  kfa → concept "Égalité/Équivalence" → "égal"')
  log('  ahd → concept "Quiconque/Indéfini" → "personne"')
  log('  Traduction : "Et personne n\'est égal à Lui."')
  log('════════════════════════════════════════')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
