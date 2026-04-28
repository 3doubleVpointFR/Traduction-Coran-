// Pipeline V2 — Sourate 1 Verset 6 — ÉTAPES 3+4
// ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const VERSE_ID = 6

async function run() {
  console.log('============================================')
  console.log('  VERSET 1:6 — ÉTAPES 3+4')
  console.log('  ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ')
  console.log('============================================')
  console.log('')

  // ── hdy (261) — ihdina — verbe impératif forme I ──
  console.log('>>> ÉTAPE 3 — hdy (ihdina, verbe impératif)')
  const hdyAxes = {
    sense_chosen: 'guider',
    concept_chosen: 'Guidance/Direction',
    concepts: {
      'Guidance/Direction': {
        status: 'retenu',
        senses: ['guider', 'diriger vers la bonne voie', 'montrer le chemin correct', 'trouver le chemin', 'se guider soi-même', 'être guidé'],
        proof_ctx: 'Le sens retenu est "Guidance/Direction". Le mot ihdina est un verbe impératif (une demande adressée à Dieu) avec le suffixe na (nous). Le test de compatibilité : la guidance est une action qui peut être demandée et qui a un résultat concret — c\'est compatible avec l\'impératif. La guidance est un acte dirigé vers l\'extérieur : celui qui guide montre la direction à celui qui est guidé. C\'est un mouvement permanent (pas ponctuel) car on peut être guidé en continu. Distinction avec "Conduite/Comportement" : la conduite est le comportement de la personne elle-même (comment elle agit), la guidance est la direction qu\'on lui montre (où aller). Le verset demande la direction, pas le comportement. Distinction avec "Don/Offrande" : le don est un objet matériel qu\'on offre, la guidance est une direction qu\'on montre. Le verset demande une direction, pas un objet.',
        axe1_verset: 'Le verset dit ihdina s-sirata l-mustaqima (guide-nous sur le droit chemin). Le mot ihdina ouvre la demande. Le champ lexical est celui de la direction et du chemin : guider + chemin + droit. Les trois mots forment un ensemble cohérent. La guidance est l\'acte, le chemin est la direction, le droit est la qualité de cette direction. Le verbe impératif montre que c\'est une demande active, pas un constat.',
        axe2_voisins: 'Le verset 5 déclarait l\'engagement (adoration) et le besoin (aide). Le verset 6 précise quel type d\'aide on demande : la guidance. La progression est logique : on s\'engage (v5a), on reconnaît le besoin d\'aide (v5b), on demande l\'aide spécifique (v6). Le verset 7 précisera davantage : quel chemin exactement.',
        axe3_sourate: 'La Fatiha culmine dans cette demande de guidance. Tout ce qui précède (louange, qualification, engagement) converge vers cette demande. La guidance est le but de la prière : on reconnaît Dieu (v1-4), on s\'engage (v5), et on demande la direction (v6-7). C\'est la conclusion logique.',
        axe4_coherence: 'Le Coran utilise le verbe hada (guider) massivement — c\'est l\'un des verbes les plus fréquents du texte. La demande ihdina est la forme la plus directe de cette demande. L\'usage est constant et univoque.',
        axe5_frequence: 'La guidance est la condition première pour que le khalifa accomplisse sa mission de justice. Sans direction, l\'action est aveugle. Demander la guidance montre que l\'humain reconnaît qu\'il ne peut pas trouver la bonne direction seul — il a besoin d\'être orienté.',
      },
      'Conduite/Comportement': {
        status: 'probable',
        senses: ['conduite', 'manière d\'agir', 'comportement calme et posé', 'mode de vie'],
        proof_ctx: 'La conduite est le comportement de la personne (comment elle agit au quotidien). La guidance est la direction qu\'on lui montre (où aller). Le verset demande "guide-nous SUR le chemin" — c\'est une demande de direction, pas une demande de comportement. La frontière philosophique : la conduite est ce qu\'on fait (l\'action de la personne), la guidance est ce qu\'on reçoit (la direction donnée par un autre). Le verset est tourné vers Dieu (donne-nous la direction), pas vers soi (améliore notre comportement).',
        axe1_verset: 'Le verset dit ihdina s-sirata (guide-nous sur le chemin). Le complément est un chemin (une direction), pas un comportement. Si le sens était "conduite", le complément serait une manière d\'agir, pas un chemin physique/métaphorique.',
        axe2_voisins: 'Le verset 7 précise quel chemin : celui des bienfaités. C\'est une direction externe (un chemin à suivre), pas une conduite interne (un comportement à adopter).',
        axe3_sourate: 'La Fatiha demande une direction (v6) et précise laquelle (v7). Le registre est celui de l\'orientation extérieure, pas du développement personnel intérieur.',
        axe4_coherence: 'Le Coran utilise hada dans le sens de guider (montrer la direction) dans la majorité de ses occurrences. Le sens de "conduite" est plus rare et contextuel.',
        axe5_frequence: 'La conduite est le résultat de la guidance : une fois guidé, on adopte la bonne conduite. Mais le verset demande la cause (la guidance), pas le résultat (la conduite).',
      },
      'Don/Offrande': {
        status: 'nul',
        senses: ['cadeau', 'offrande', 'animal sacrifié', 'conduire une mariée'],
        proof_ctx: 'Le don est un objet matériel. Le verset demande une direction, pas un objet.',
      },
      'Divers': {
        status: 'nul',
        senses: ['présent envoyé en courtoisie'],
        proof_ctx: 'Sens isolé sans rapport avec la demande de direction du verset.',
      },
    }
  }
  const {error: e1} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'hdy', position: 1, sense_chosen: 'guider', analysis_axes: hdyAxes
  })
  console.log('  hdy → Guidance/Direction → "guider"' + (e1 ? ' ERREUR: '+e1.message : ' ✓'))

  // ── srt (262) — as-sirata — nom défini à l'accusatif ──
  console.log('>>> ÉTAPE 3 — srt (as-sirata, nom défini)')
  const srtAxes = {
    sense_chosen: 'chemin',
    concept_chosen: 'Chemin/Voie',
    concepts: {
      'Chemin/Voie': {
        status: 'retenu',
        senses: ['chemin', 'route', 'voie large et dégagée', 'pont'],
        proof_ctx: 'Le sens retenu est "Chemin/Voie". Le mot as-sirata est un nom défini avec l\'article al- à l\'accusatif (le cas du complément direct du verbe). Le test de compatibilité : un nom défini peut-il identifier le chemin comme une réalité connue ? Oui — l\'article al- montre que c\'est LE chemin précis et connu, pas n\'importe quel chemin. Le chemin est une réalité extérieure et directionnelle : on s\'y déplace, on le suit ou on le quitte. C\'est permanent (le chemin existe indépendamment de celui qui le parcourt). Le Lane\'s note que sirat vient d\'une racine qui signifie "avaler" — le chemin englobe et emmène celui qui y marche.',
        axe1_verset: 'Le verset dit ihdina s-sirata l-mustaqima (guide-nous sur le droit chemin). Le mot as-sirata est le complément direct de ihdina : c\'est ce vers quoi on demande d\'être guidé. Le champ lexical est celui de la direction : guider + chemin + droit. Le chemin est le support physique/métaphorique de la guidance. L\'article défini al- (le) montre que c\'est un chemin précis et identifié, pas un chemin vague.',
        axe2_voisins: 'Le verset 7 reprend le mot sirat pour le préciser : le chemin de ceux qui ont reçu les bienfaits. Le chemin est le fil conducteur des deux derniers versets de la sourate. Le verset 6 demande LE chemin, le verset 7 dit LEQUEL.',
        axe3_sourate: 'La Fatiha converge vers la demande du chemin. Tout ce qui précède (identité de Dieu, engagement, aide) mène à cette demande. Le chemin est la réponse à la question implicite de la sourate : "que demander à Dieu ?" — la direction.',
        axe4_coherence: 'Le Coran utilise sirat des dizaines de fois, toujours dans le sens de voie ou chemin de direction. L\'expression as-sirat al-mustaqim (le chemin droit) est une des expressions les plus récurrentes du texte. L\'usage est constant.',
        axe5_frequence: 'Le chemin est la direction que le khalifa suit pour accomplir sa mission. Sans chemin, pas de direction, pas de mission possible. Le chemin est proposé, pas imposé — le verset le demande, ce qui implique le libre choix de le suivre ou non.',
      },
      'Divers': {
        status: 'nul',
        senses: ['longue épée'],
        proof_ctx: 'Objet physique sans rapport avec la demande de direction.',
      },
    }
  }
  const {error: e2} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'srt', position: 2, sense_chosen: 'chemin', analysis_axes: srtAxes
  })
  console.log('  srt → Chemin/Voie → "chemin"' + (e2 ? ' ERREUR: '+e2.message : ' ✓'))

  // ── qwm (263) — al-mustaqima — adjectif défini forme X ──
  console.log('>>> ÉTAPE 3 — qwm (al-mustaqima, adjectif défini forme X)')
  const qwmAxes = {
    sense_chosen: 'droit',
    concept_chosen: 'Verticalité/Droiture',
    concepts: {
      'Verticalité/Droiture': {
        status: 'retenu',
        senses: ['se lever', 'se tenir debout', 'droit', 'rectitude', 'redresser', 'corriger', 'se tenir parfaitement droit'],
        proof_ctx: 'Le sens retenu est "Verticalité/Droiture". Le mot al-mustaqima est un adjectif défini forme X (une forme qui ajoute l\'idée de "se tenir par soi-même"). Le test de compatibilité : un adjectif défini peut-il identifier la droiture comme une qualité connue du chemin ? Oui — le chemin droit est une réalité identifiable, c\'est celui qui ne dévie pas. La droiture est une qualité permanente et extérieure : elle caractérise le chemin, pas celui qui le parcourt. La forme X (mustaqim) insiste sur l\'idée de "se maintenir droit par soi-même" — le chemin est intrinsèquement droit, pas redressé par quelqu\'un. Distinction avec "Peuple/Communauté" : le peuple est un groupe de personnes, la droiture est une qualité du chemin. Le verset qualifie le chemin, pas un peuple. Distinction avec "Gestion/Administration" : la gestion est l\'acte d\'organiser des affaires, la droiture est l\'état de ce qui ne dévie pas. Le verset décrit un état, pas une action d\'organisation.',
        axe1_verset: 'Le verset dit ihdina s-sirata l-mustaqima. Le mot al-mustaqima qualifie as-sirata : c\'est le chemin qui est droit. Le champ lexical est celui de la direction et de la qualité de cette direction : guider + chemin + droit. Le droit qualifie le chemin, pas la personne ni l\'action. L\'article défini al- et la forme X ensemble montrent que c\'est une qualité intrinsèque et identifiée du chemin.',
        axe2_voisins: 'Le verset 7 précisera quel est ce chemin droit : celui des bienfaités, pas celui des désapprouvés ni des égarés. Le qualificatif "droit" prépare cette distinction : le chemin a une qualité qui le distingue des autres voies.',
        axe3_sourate: 'La Fatiha demande LE chemin DROIT — pas n\'importe quel chemin. La droiture est la qualité qui fait la différence entre les chemins. C\'est le critère de sélection.',
        axe4_coherence: 'Le Coran utilise l\'expression as-sirat al-mustaqim comme formule récurrente. La forme X (mustaqim) est toujours utilisée pour qualifier le chemin de droit. L\'usage est constant dans tout le texte.',
        axe5_frequence: 'La droiture est la qualité fondamentale du chemin que le khalifa doit suivre. Sans rectitude, la mission de justice dévie. Le chemin droit est le chemin qui mène à la justice sans détour ni corruption.',
      },
      'Peuple/Communauté': {
        status: 'nul',
        senses: ['peuple', 'groupe de personnes', 'tribu', 'communauté', 'les gens qui se tiennent ensemble'],
        proof_ctx: 'Le verset qualifie le chemin avec un adjectif, il ne parle pas d\'un peuple. Le mot mustaqim est un adjectif de forme X, pas un nom collectif.',
      },
      'Gestion/Administration': {
        status: 'nul',
        senses: ['gérer', 'administrer', 'prendre en charge', 'diriger une affaire'],
        proof_ctx: 'La gestion est une action d\'organisation. Le verset décrit la qualité d\'un chemin (droit), pas une action d\'organisation.',
      },
      'Valeur/Mesure': {
        status: 'nul',
        senses: ['valeur', 'prix', 'estimation juste'],
        proof_ctx: 'La valeur est une mesure quantitative. Le verset qualifie un chemin, pas une mesure.',
      },
      'Subsistance': {
        status: 'nul',
        senses: ['nourriture', 'ce qui fait vivre', 'ce qui soutient la vie'],
        proof_ctx: 'La subsistance est matérielle. Le verset parle de la qualité d\'un chemin, pas de nourriture.',
      },
      'Divers': {
        status: 'nul',
        senses: ['stature', 'taille debout'],
        proof_ctx: 'La stature est physique. Le verset qualifie un chemin métaphorique.',
      },
    }
  }
  const {error: e3} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'qwm', position: 3, sense_chosen: 'droit', analysis_axes: qwmAxes
  })
  console.log('  qwm → Verticalité/Droiture → "droit"' + (e3 ? ' ERREUR: '+e3.message : ' ✓'))

  // ═══════════════════════════════════════
  // ÉTAPE 4 — TRADUCTION
  // ═══════════════════════════════════════
  console.log('')
  console.log('>>> ÉTAPE 4 — TRADUCTION')

  const segments = [
    {fr:'guide-nous', pos:'verbe', phon:'ihdina', arabic:'ٱهْدِنَا', word_key:'hdy', is_particle:false, sense_retenu:'guider', position:1},
    {fr:'le chemin', pos:'nom', phon:'as-sirata', arabic:'ٱلصِّرَٰطَ', word_key:'srt', is_particle:false, sense_retenu:'chemin', position:2},
    {fr:'le droit', pos:'adjectif', phon:'al-mustaqima', arabic:'ٱلْمُسْتَقِيمَ', word_key:'qwm', is_particle:false, sense_retenu:'droit', position:3},
  ]

  const explanation = [
    '§DEMARCHE§',
    '**Ihdina** est un verbe à l\'impératif (une forme qui exprime une demande) avec le suffixe na (nous), donc "guide-nous". C\'est une demande adressée à Dieu.',
    '**As-sirata** est le chemin, le complément du verbe : c\'est ce vers quoi on demande d\'être guidé. L\'article défini al- (le) devant sirat est important : il montre que c\'est LE chemin précis et connu, pas n\'importe quel chemin. On ne demande pas un chemin au hasard, on demande celui qui est déjà établi.',
    '**Al-mustaqima** est un adjectif qui qualifie le chemin : il est droit, sans déviation. C\'est la forme X du verbe qama (se lever, se tenir debout), qui ajoute le sens de "se tenir parfaitement droit par soi-même". L\'article défini al- devant mustaqim confirme que c\'est une qualité connue et identifiée.',
    '§JUSTIFICATION§',
    '**guider** — Le sens retenu est "Guidance/Direction". Le mot "guider" est choisi car il capture l\'acte de montrer la direction à quelqu\'un. L\'alternative "diriger" est écartée car "diriger" implique le contrôle (on dirige une entreprise), alors que "guider" implique l\'accompagnement (on guide quelqu\'un qui reste libre de suivre ou non). L\'alternative "orienter" est écartée car c\'est un registre plus technique.',
    '**chemin** — Le sens retenu est "Chemin/Voie". Le mot "chemin" est choisi car il capture la réalité d\'un parcours qu\'on emprunte et qu\'on suit au quotidien. L\'alternative "route" est écartée car "route" est plus large et physique (route goudronnée), alors que "chemin" peut être physique ou métaphorique. L\'alternative "voie" est écartée car c\'est un registre plus littéraire.',
    '**droit** — Le sens retenu est "Verticalité/Droiture". Le mot "droit" est choisi car il capture la qualité de ce qui ne dévie pas. L\'alternative "rectiligne" est écartée car c\'est du registre géométrique. L\'alternative "juste" est écartée car "juste" qualifie une action morale, alors que "droit" qualifie une direction physique ou métaphorique.',
  ].join('\n\n')

  const {error: e4} = await db.from('verse_analyses').update({
    translation_arab: 'Guide-nous sur le droit chemin.',
    translation_explanation: explanation,
    segments: segments,
  }).eq('verse_id', VERSE_ID)
  console.log('  Traduction : "Guide-nous sur le droit chemin."' + (e4 ? ' ERREUR: '+e4.message : ' ✓'))

  const daily = [
    {analysis_id:261, sense:'guider', arabic:'ٱهْدِنَا ٱلصِّرَاطَ', phon:'ihdina s-sirata', french:'Guide-nous sur le chemin'},
    {analysis_id:261, sense:'guider', arabic:'هَدَاهُ ٱللَّهُ', phon:'hadahu llah', french:'Dieu l\'a guidé'},
    {analysis_id:261, sense:'guider', arabic:'هَلْ مِنْ هَادٍ؟', phon:'hal min hadin?', french:'Y a-t-il un guide ?'},
    {analysis_id:262, sense:'chemin', arabic:'ٱلصِّرَاطَ ٱلْمُسْتَقِيمَ', phon:'as-sirata l-mustaqim', french:'Le chemin droit'},
    {analysis_id:262, sense:'chemin', arabic:'صِرَاطُ ٱللَّهِ', phon:'siratu llahi', french:'Le chemin de Dieu'},
    {analysis_id:262, sense:'chemin', arabic:'عَلَى صِرَاطٍ مُسْتَقِيمٍ', phon:'ala siratin mustaqimin', french:'Sur un chemin droit'},
    {analysis_id:263, sense:'droit', arabic:'ٱلصِّرَاطَ ٱلْمُسْتَقِيمَ', phon:'as-sirata l-mustaqim', french:'Le chemin droit'},
    {analysis_id:263, sense:'droit', arabic:'قُمْ مُسْتَقِيمًا', phon:'qum mustaqiman', french:'Tiens-toi droit'},
    {analysis_id:263, sense:'droit', arabic:'اِسْتَقَامَ عَلَى أَمْرِهِ', phon:'istaqama ala amrihi', french:'Il est resté droit dans sa conduite'},
  ]
  const {error: e5} = await db.from('word_daily').insert(daily)
  console.log('  ' + daily.length + ' phrases du quotidien insérées' + (e5 ? ' ERREUR: '+e5.message : ' ✓'))

  console.log('')
  console.log('VERSET 1:6 — TERMINÉ')
  console.log('  ihdina (hdy) → sens "Guidance/Direction" → mot français "guider"')
  console.log('  as-sirata (srt) → sens "Chemin/Voie" → mot français "chemin"')
  console.log('  al-mustaqima (qwm) → sens "Verticalité/Droiture" → mot français "droit"')
  console.log('  Traduction : "Guide-nous sur le droit chemin."')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
