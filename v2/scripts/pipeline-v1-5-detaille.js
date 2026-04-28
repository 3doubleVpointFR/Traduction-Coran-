// Pipeline Maison — Verset 1:5 — AXES DÉTAILLÉS
// إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

const ROOTS = {
  ebd: { id: 259, senses: [
    { sense: 'adorer', sense_ar: 'عَبَدَ', description: 'Servir, vouer un culte, se dévouer entièrement. L\'acte de dévotion totale envers Dieu ou ce qu\'on prend pour divinité. Le Lane\'s donne "he served, worshipped, or adored".', display_order: 1 },
    { sense: 'serviteur', sense_ar: 'عَبْد', description: 'Celui qui sert et obéit. Aussi : esclave, celui dont la volonté est soumise à un autre. Contraire de libre (hurr).', display_order: 2 },
    { sense: 'être humain', sense_ar: 'عَبْد', description: 'L\'homme en tant que serviteur de Dieu. Le Lane\'s note que abd peut signifier "a man, or human being" dans le sens de créature soumise à Dieu.', display_order: 3 },
    { sense: 'soumettre', sense_ar: 'عَبَّدَ', description: 'Rendre soumis, assujettir. Forme II : forcer quelqu\'un à la servitude ou aplanir un chemin (le rendre praticable).', display_order: 4 },
    { sense: 'être en colère', sense_ar: 'عَبِدَ', description: 'Être furieux, indigné, méprisant. Sens secondaire attesté dans le Lane\'s.', display_order: 5 },
  ]},
  ewn: { id: 260, senses: [
    { sense: 'aide', sense_ar: 'عَوْن', description: 'Secours, assistance, soutien. Ce qui permet d\'accomplir ce qu\'on ne peut pas faire seul.', display_order: 1 },
    { sense: 'aider', sense_ar: 'أَعَانَ', description: 'Prêter secours à quelqu\'un, lui apporter son soutien. Forme IV : accorder l\'aide activement.', display_order: 2 },
    { sense: "demander l'aide", sense_ar: 'اِسْتَعَانَ', description: 'Chercher activement le secours de quelqu\'un. Forme X : la demande d\'assistance. C\'est cette forme qui est utilisée dans le verset 1:5 (nastainu).', display_order: 3 },
    { sense: "s'entraider", sense_ar: 'تَعَاوَنُوا', description: 'Se prêter mutuellement assistance. Forme VI : l\'aide réciproque entre plusieurs personnes.', display_order: 4 },
    { sense: 'serviteur', sense_ar: 'عَوْن', description: 'Celui qui assiste, le garde armé. Extension : la personne qui fournit l\'aide.', display_order: 5 },
  ]},
}

const AXES = {
  ebd: {
    adorer: {
      status: 'retenu',
      axe1_verset: 'Le verset dit "iyyaka nabudu" (c\'est Toi seul que nous adorons). Le verbe nabudu est la forme I du verbe abada au présent, première personne du pluriel : nous adorons. Le champ lexical est celui de la dévotion exclusive et de l\'engagement total. La structure du verset place le complément (iyyaka = Toi) avant le verbe (nabudu = nous adorons), ce qui en arabe crée une exclusivité : pas n\'importe qui, mais Toi seul. L\'adoration est l\'acte central de ce verset, c\'est la déclaration d\'engagement de l\'humain envers Dieu.',
      axe2_voisins: 'Les versets 1-4 décrivent qui est Dieu (miséricordieux, seigneur, maître). Le verset 5 est le pivot de la sourate : après avoir décrit Dieu, l\'humain s\'engage. C\'est la réponse naturelle à la description : on a appris qui est Dieu, maintenant on déclare ce qu\'on fait envers Lui. Les versets 6-7 continueront avec les demandes (guidance), mais le verset 5 pose d\'abord l\'engagement avant la demande. On s\'engage d\'abord, on demande ensuite.',
      axe3_sourate: 'La Fatiha est structurée en deux moitiés : la description de Dieu (v1-4) et l\'engagement de l\'humain (v5-7). L\'adoration est le premier acte de cette deuxième moitié, ce qui lui donne une importance structurelle centrale. L\'adoration est le pivot qui fait passer la sourate de la contemplation (regarder Dieu) à l\'action (s\'engager envers Dieu). Sans ce pivot, la sourate resterait une description passive.',
      axe4_coherence: 'Le Coran utilise le verbe abada (adorer) et ses dérivés des centaines de fois. L\'adoration est le thème central du Coran : "Je n\'ai créé les djinns et les humains que pour qu\'ils M\'adorent" (51:56). Le verbe nabudu (nous adorons) dans la Fatiha est cohérent avec cet usage massif. L\'adoration dans le Coran est toujours un acte volontaire et conscient, pas une soumission aveugle.',
      axe5_frequence: 'L\'adoration est la mission première du khalifa : reconnaître la Divinité et s\'engager dans une relation de dévotion. C\'est par l\'adoration qu\'on reconnaît l\'autorité sous laquelle on agit. L\'adoration fonde la mission de justice car elle pose le cadre moral : on agit au nom de Dieu, donc selon Ses principes. La dignité humaine est respectée car l\'adoration est un choix libre, pas une contrainte.',
      proof_ctx: '"Adorer" est le sens premier de la racine e-b-d : servir, vouer un culte, se dévouer entièrement, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). Test de compatibilité grammaticale : verbe inaccompli (action en cours, présent). "Nous adorons" fonctionne parfaitement en français courant. Distinction avec "serviteur" : le serviteur (abd) est celui qui adore, l\'adoration (ibada) est l\'action qu\'il fait. Le verset utilise le verbe nabudu (nous adorons = l\'action), pas le nom abd (serviteur = la personne). La frontière philosophique : le serviteur est une identité (ce qu\'on est), l\'adoration est un acte (ce qu\'on fait). Le verset déclare ce que l\'humain FAIT, pas ce qu\'il EST.',
    },
    serviteur: {
      status: 'probable',
      axe1_verset: 'Le serviteur (abd) est celui qui sert et obéit. Le verset utilise le verbe nabudu (nous adorons), pas le nom abd (serviteur). Le champ lexical du verset est celui de l\'action (adorer, demander l\'aide), pas de l\'identité (être serviteur). Le verset déclare ce que l\'humain fait, pas ce qu\'il est. Cependant, le lien est intime : on ne peut adorer que si on est serviteur, l\'acte présuppose l\'identité.',
      axe2_voisins: 'Les versets voisins sont des actions et des demandes : adorer (v5), demander l\'aide (v5), guider (v6). La séquence est celle d\'actes, pas d\'identités. Le serviteur serait un concept d\'identité qui ne s\'inscrit pas dans cette série d\'actions. Le verset 5 agit, il ne se définit pas.',
      axe3_sourate: 'La Fatiha passe de la description (v1-4) à l\'action (v5-7). Le serviteur serait une description (ce qu\'on est), pas une action (ce qu\'on fait). La deuxième moitié de la sourate est active : on adore, on demande l\'aide, on demande la guidance. L\'identité de serviteur est implicite dans ces actions mais ce n\'est pas le sujet direct du verset.',
      axe4_coherence: 'Le Coran utilise abd (serviteur) et abada (adorer) distinctement. Les deux viennent de la même racine mais ont des fonctions grammaticales différentes. Quand le Coran veut parler de l\'identité de serviteur, il utilise le nom abd. Quand il veut parler de l\'acte d\'adoration, il utilise le verbe abada. Le verset utilise le verbe, pas le nom.',
      axe5_frequence: 'Le serviteur est l\'identité fondamentale du khalifa devant Dieu : il est abd (serviteur) avant d\'être khalifa (représentant). Cependant, le verset déclare l\'action d\'adorer, pas l\'identité de serviteur. Le khalifa agit (il adore) parce qu\'il est (serviteur), mais le verset met en avant l\'action, pas l\'identité.',
      proof_ctx: 'Le serviteur (abd) est celui qui adore. L\'adoration (ibada) est l\'acte qu\'il fait. Le verset utilise le verbe nabudu (nous adorons), pas le nom abd (serviteur). La frontière : le serviteur est une identité permanente, l\'adoration est un acte renouvelé. Le verset déclare un acte, pas une identité.',
    },
    'être humain': { status: 'nul', proof_ctx: 'L\'homme en tant que créature de Dieu. Le verset parle de l\'acte d\'adorer, pas de la nature humaine. Le sens est trop général pour ce contexte d\'engagement actif.' },
    soumettre: { status: 'nul', proof_ctx: 'Rendre soumis, assujettir (forme II : abbada). Le verset utilise la forme I (abada = adorer), pas la forme II (abbada = soumettre). Les deux formes ont des sens différents.' },
    'être en colère': { status: 'nul', proof_ctx: 'Être furieux, indigné. Sens secondaire rare. Aucun rapport avec le contexte d\'adoration et de dévotion du verset.' },
  },
  ewn: {
    "demander l'aide": {
      status: 'retenu',
      axe1_verset: 'Le verset dit "iyyaka nastainu" (c\'est Toi seul dont nous demandons l\'aide). Le verbe nastainu est la forme X du verbe aana au présent : nous demandons activement l\'aide. La forme X en arabe ajoute systématiquement l\'idée de chercher ou demander activement quelque chose. Le champ lexical est celui de la demande active et de l\'exclusivité : on ne demande l\'aide qu\'à Dieu seul. La structure est parallèle à la première moitié du verset : comme pour l\'adoration, le complément (iyyaka = Toi) précède le verbe pour marquer l\'exclusivité.',
      axe2_voisins: 'Le verset 5 déclare deux choses en parallèle : l\'adoration exclusive et la demande d\'aide exclusive. Les deux sont complémentaires et structurellement identiques. L\'adoration est l\'engagement (ce qu\'on donne à Dieu), la demande d\'aide est le besoin (ce qu\'on reçoit de Dieu). Le verset 6 continue avec une demande concrète (guide-nous), ce qui montre que la demande d\'aide du verset 5 se concrétise au verset 6. La progression est logique : on s\'engage, on reconnaît son besoin, puis on formule sa demande.',
      axe3_sourate: 'La Fatiha place la demande d\'aide juste après l\'adoration, ce qui crée un ordre significatif : on s\'engage d\'abord (j\'adore), puis on reconnaît son besoin (je demande l\'aide). Cet ordre enseigne que l\'engagement précède la demande : on ne commence pas par demander, on commence par s\'engager. La demande d\'aide est un acte d\'humilité qui complète l\'adoration : adorer c\'est reconnaître la grandeur de Dieu, demander l\'aide c\'est reconnaître sa propre faiblesse.',
      axe4_coherence: 'Le Coran utilise la forme X istaana (demander l\'aide) dans plusieurs passages pour la demande active d\'assistance. Cette forme est distincte de la forme I aana (aider = donner l\'aide) et de la forme VI taawana (s\'entraider = aide réciproque). Le Coran maintient cette distinction de manière constante : la forme X implique toujours une démarche active de celui qui cherche l\'aide, pas une réception passive.',
      axe5_frequence: 'Demander l\'aide est l\'humilité du khalifa : reconnaître qu\'on ne peut pas accomplir la mission de justice et de civilisation seul. Le khalifa a besoin de l\'aide de Dieu pour réussir sa mission. Cette demande n\'est pas un aveu de faiblesse mais une reconnaissance de la réalité : la mission est trop grande pour être accomplie sans aide. La dignité humaine est préservée car la demande d\'aide est volontaire et active, pas subie.',
      proof_ctx: '"Demander l\'aide" (forme X : istaana) est le sens exact du verbe utilisé dans le verset (nastainu), d\'après les sources étymologiques. La forme X en arabe ajoute l\'idée de chercher activement. Test de compatibilité grammaticale : verbe inaccompli. "Nous demandons l\'aide" fonctionne en français courant. Distinction avec "aide" : l\'aide (awn) est le résultat (ce qu\'on reçoit), demander l\'aide (istaana) est l\'action (ce qu\'on fait). Le verset utilise le verbe (l\'action de demander), pas le nom (l\'aide reçue). La frontière philosophique : l\'aide est passive (on la reçoit), la demande d\'aide est active (on la cherche). Le verset insiste sur l\'action active de l\'humain, pas sur la réception passive.',
    },
    aide: {
      status: 'probable',
      axe1_verset: 'L\'aide (awn) est le secours, l\'assistance, le soutien. Le verset utilise le verbe nastainu (nous demandons l\'aide, forme X), pas le nom awn (l\'aide). Le champ lexical du verset est celui de l\'action (demander), pas du résultat (recevoir). L\'aide est ce qu\'on espère obtenir par la demande, pas le sujet du verset. Cependant, sans l\'aide comme concept, la demande n\'a pas d\'objet.',
      axe2_voisins: 'Les versets voisins sont des actions : adorer (v5), demander l\'aide (v5), demander la guidance (v6). La série est celle d\'actes, pas de résultats. L\'aide serait un résultat (ce qu\'on reçoit), pas un acte (ce qu\'on fait). Le verset est tourné vers l\'action de l\'humain, pas vers ce qu\'il reçoit en retour.',
      axe3_sourate: 'La Fatiha dans sa deuxième moitié est active : on adore, on demande l\'aide, on demande la guidance. L\'aide serait un concept passif (ce qui est reçu), alors que la sourate met en avant l\'initiative humaine. La demande d\'aide est un acte d\'humilité active, pas une réception passive de secours.',
      axe4_coherence: 'Le Coran distingue awn (l\'aide, le nom) de istaana (demander l\'aide, forme X). Les deux sont liés mais grammaticalement et sémantiquement distincts. Le verset utilise la forme verbale active, pas la forme nominale. Quand le Coran parle de l\'aide comme résultat, il utilise d\'autres constructions.',
      axe5_frequence: 'L\'aide est ce dont le khalifa a besoin pour sa mission. C\'est un concept fondamental. Cependant, le verset met en avant l\'action de demander, pas le résultat de recevoir. Pour le khalifa, c\'est l\'attitude active (demander l\'aide) qui est valorisée, pas l\'attente passive (recevoir l\'aide).',
      proof_ctx: 'L\'aide (awn) est le résultat (ce qu\'on reçoit). Demander l\'aide (istaana) est l\'action (ce qu\'on fait). Le verset utilise le verbe nastainu (forme X = demander activement), pas le nom awn (aide). La frontière : l\'aide est un objet, la demande d\'aide est un acte. Le verset valorise l\'acte.',
    },
    aider: { status: 'nul', proof_ctx: 'Aider (forme IV : aana) est l\'acte de donner l\'aide. Le verset utilise la forme X (demander l\'aide), pas la forme IV (donner l\'aide). Le verset parle de ce que l\'humain fait (demander), pas de ce que Dieu fait (donner).' },
    "s'entraider": { status: 'nul', proof_ctx: 'Aide réciproque (forme VI : taawana). Le verset parle de demander l\'aide à Dieu (relation verticale), pas d\'entraide entre humains (relation horizontale). Les formes verbales sont différentes.' },
    serviteur: { status: 'nul', proof_ctx: 'Celui qui assiste, le garde. Le verset parle de l\'acte de demander l\'aide (verbe), pas de la personne qui aide (nom). Le contexte est celui d\'une prière adressée à Dieu, pas d\'une description de personnel.' },
  },
}

const VERSE = {
  verse_id: 5,
  words: [
    {verse_id:5, word_key:'ebd', sense_chosen:'adorer', position:2},
    {verse_id:5, word_key:'ewn', sense_chosen:"demander l'aide", position:5},
  ],
  translation_arab: "C'est Toi seul que nous adorons et c'est Toi seul dont nous demandons l'aide.",
  translation_explanation: "En arabe, quand on place le complément avant le verbe (ce qu'on appelle le taqdim), ça sert à marquer l'exclusivité : seulement Toi. C'est pour ça qu'on traduit \"c'est Toi seul\". Cette structure est répétée deux fois dans le verset, ce qui crée un parallélisme (deux phrases construites de la même façon). La première fois pour l'adoration : na'budu (nous adorons, forme I, la forme de base du verbe). La deuxième pour l'aide : nasta'inu (nous demandons l'aide, forme X, cette forme en arabe ajoute l'idée de chercher ou demander activement quelque chose). Nous ne recevons pas l'aide passivement, nous la demandons activement.",
  segments: [
    {fr:"c'est Toi seul",phon:"iyyaka",arabic:"إِيَّاكَ",word_key:null,is_particle:true},
    {fr:"que nous adorons",pos:"verbe",phon:"na'budu",arabic:"نَعْبُدُ",word_key:"ebd",is_particle:false,sense_retenu:"adorer"},
    {fr:"et",phon:"wa",arabic:"وَ",word_key:null,is_particle:true},
    {fr:"c'est Toi seul",phon:"iyyaka",arabic:"إِيَّاكَ",word_key:null,is_particle:true},
    {fr:"dont nous demandons l'aide",pos:"verbe",phon:"nasta'inu",arabic:"نَسْتَعِينُ",word_key:"ewn",is_particle:false,sense_retenu:"demander l'aide"},
  ],
}

const DAILY = [
  {analysis_id:259,sense:'adorer',arabic:'إِيَّاكَ نَعْبُدُ',phon:'iyyaka nabudu',french:"C'est Toi seul que nous adorons"},
  {analysis_id:259,sense:'adorer',arabic:'ٱعْبُدُوا ٱللَّهَ',phon:'ubudu llaha',french:'Adorez Dieu'},
  {analysis_id:259,sense:'adorer',arabic:'هُوَ عَبْدُ ٱللَّهِ',phon:'huwa abdu llah',french:'Il est le serviteur de Dieu'},
  {analysis_id:260,sense:"demander l'aide",arabic:'إِيَّاكَ نَسْتَعِينُ',phon:'iyyaka nastainu',french:"C'est Toi seul dont nous demandons l'aide"},
  {analysis_id:260,sense:"demander l'aide",arabic:'اِسْتَعِنْ بِٱللَّهِ',phon:'istain bi-llah',french:"Demande l'aide de Dieu"},
  {analysis_id:260,sense:"demander l'aide",arabic:'تَعَاوَنُوا عَلَى ٱلْبِرِّ',phon:'taawanu ala l-birr',french:'Entraidez-vous pour le bien'},
]

async function run() {
  log('============================================')
  log('  PIPELINE MAISON — VERSET 1:5 — AXES DÉTAILLÉS')
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
  log('  VERSET 1:5 — TERMINÉ')
  log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
