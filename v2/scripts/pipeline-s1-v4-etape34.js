// Pipeline V2 — Sourate 1 Verset 4 — ÉTAPES 3+4
// مَـٰلِكِ يَوْمِ ٱلدِّينِ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const VERSE_ID = 4

async function run() {
  console.log('============================================')
  console.log('  VERSET 1:4 — ÉTAPES 3+4')
  console.log('  مَـٰلِكِ يَوْمِ ٱلدِّينِ')
  console.log('============================================')
  console.log('')

  // ── mlk (256) — maliki — participe actif en idafa avec yawm ──
  console.log('>>> ÉTAPE 3 — mlk (maliki, participe actif en idafa)')
  const mlkAxes = {
    sense_chosen: 'maître',
    concept_chosen: 'Possession/Autorité',
    concepts: {
      'Possession/Autorité': {
        status: 'retenu',
        senses: ['posséder', 'maître', 'possesseur', 'avoir autorité', 'détenir', 'commander', 'propriété', 'esclave', 'maîtriser soi-même'],
        proof_ctx: 'Le sens retenu est "Possession/Autorité". Le mot maliki est un participe actif (une forme qui dit que la personne FAIT l\'action activement et en continu) en idafa avec yawm (Jour). Le test de compatibilité philosophique : la possession est une réalité permanente et active — le possesseur exerce son autorité en continu sur ce qu\'il possède. C\'est compatible avec le participe actif. Le Lane\'s distingue malik (avec a long = participe actif, celui qui possède activement) de malik (avec a court = roi, celui qui règne). Le verset utilise la forme avec a long. Distinction avec "Royauté/Souveraineté" : la royauté est un titre social (on est roi d\'un peuple), la possession est une relation directe avec ce qu\'on possède (on est maître de quelque chose). Le verset dit "maître DU Jour", pas "roi du Jour" — c\'est une relation de possession, pas de règne.',
        axe1_verset: 'Le verset dit maliki yawmi d-dini (Maître du Jour de la rétribution). Le mot maliki est en idafa avec yawmi : il dit QUI possède le Jour. Le champ lexical est celui de l\'autorité et de la possession. Le verset ajoute une dimension temporelle aux attributs de Dieu : après la miséricorde (v1,3) et la seigneurie (v2), Il est aussi maître du temps. L\'idafa crée un lien de propriété : le Jour APPARTIENT au Maître.',
        axe2_voisins: 'Le verset 2 dit que Dieu est Seigneur des mondes (autorité spatiale). Le verset 4 ajoute qu\'Il est Maître du Jour (autorité temporelle). La progression va de l\'espace (les mondes) au temps (le Jour). Les versets 1-3 décrivent des attributs permanents, le verset 4 ajoute un moment spécifique. La maîtrise du Jour complète la seigneurie des mondes.',
        axe3_sourate: 'La Fatiha décrit Dieu avec des attributs de plus en plus spécifiques : miséricordieux (général), Seigneur des mondes (spatial), Maître du Jour (temporel). La possession du Jour est le dernier attribut avant le pivot vers l\'engagement humain (v5). C\'est la conclusion du portrait divin.',
        axe4_coherence: 'Le Coran utilise malik et malik pour Dieu dans différents contextes. Les deux lectures coraniques (avec a long et a court) sont attestées pour ce verset. La forme participe actif (malik avec a long) insiste sur la possession active, pas sur le titre de roi.',
        axe5_frequence: 'Le Maître du Jour possède le moment où les actes sont évalués. Pour le khalifa humain, cette maîtrise divine donne un cadre : les actes ont des conséquences, il y a un moment de compte. La mission de justice est significative parce que les actes comptent.',
      },
      'Royauté/Souveraineté': {
        status: 'probable',
        senses: ['roi', 'souverain', 'royaume', 'régner', 'royauté'],
        proof_ctx: 'La royauté est un titre social : le roi règne sur un peuple, il commande et interdit. La possession est une relation directe avec ce qu\'on possède. Le Lane\'s distingue malik (a long = possesseur, participe actif) de malik (a court = roi). Le verset utilise la forme avec a long dans la lecture la plus répandue. La frontière philosophique : le roi a un peuple (relation sociale), le maître a un objet de possession (relation directe). Le verset dit "maître DU Jour" — le Jour est possédé, pas gouverné.',
        axe1_verset: 'Le verset dit maliki yawmi d-dini. Si le sens était "roi", on attendrait "roi du peuple du Jour" ou une construction similaire. Le verset dit "maître DU Jour" — le Jour est l\'objet de possession, pas un peuple à gouverner. Le champ lexical est celui de la possession, pas du règne.',
        axe2_voisins: 'Le verset 2 utilise rabb (seigneur), pas malik (roi). Si le verset 4 utilisait aussi un titre de souveraineté, il y aurait redondance avec la seigneurie. La possession apporte une nuance différente de la seigneurie : le seigneur élève, le maître possède.',
        axe3_sourate: 'La Fatiha utilise des attributs distincts pour chaque verset : miséricordieux (qualité), seigneur (relation d\'élévation), maître (relation de possession). La royauté serait une variante de la seigneurie, pas un attribut distinct.',
        axe4_coherence: 'Les deux lectures (malik et malik) sont attestées. Le Coran utilise les deux formes dans des contextes différents. La forme participe actif (a long) est la lecture la plus répandue pour ce verset.',
        axe5_frequence: 'La royauté est un modèle de pouvoir centralisé. La possession est un modèle de responsabilité directe. Pour le khalifa, la responsabilité directe (possession) est plus pertinente que le pouvoir centralisé (royauté).',
      },
      'Ange/Messager': {
        status: 'nul',
        senses: ['ange', 'messager', 'envoyé'],
        proof_ctx: 'Les anges sont des êtres créés. Le verset qualifie Dieu, pas les anges.',
      },
      'Divers': {
        status: 'nul',
        senses: ['pâte', 'argile', 'ciment', 'chemin battu'],
        proof_ctx: 'Sens concrets sans rapport avec l\'autorité divine du verset.',
      },
    }
  }
  const {error: e1} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'mlk', position: 1, sense_chosen: 'maître', analysis_axes: mlkAxes
  })
  console.log('  mlk → Possession/Autorité → "maître"' + (e1 ? ' ERREUR: '+e1.message : ' ✓'))

  // ── ywm (257) — yawmi — nom en idafa (complément de maliki, et avec ad-dini) ──
  console.log('>>> ÉTAPE 3 — ywm (yawmi, nom en double idafa)')
  const ywmAxes = {
    sense_chosen: 'jour',
    concept_chosen: 'Temps/Période',
    concepts: {
      'Temps/Période': {
        status: 'retenu',
        senses: ['jour', 'journée', 'période', 'temps', 'époque', 'distance d\'un jour de marche'],
        proof_ctx: 'Le sens retenu est "Temps/Période". Le mot yawmi est en double idafa : il est complément de maliki (maître) et il est rattaché à ad-dini (la rétribution). Le Lane\'s donne pour yawm : "un temps, que ce soit le jour ou la nuit ; le temps absolument". Le test de compatibilité : un nom en idafa peut-il être rattaché à la rétribution dans une relation d\'appartenance ? Oui — le Jour DE la rétribution, le moment qui contient la rétribution. Distinction avec "Événement/Moment marquant" : l\'événement est ce qui arrive, le jour est le moment où ça arrive. Le verset parle du moment (yawm), pas de ce qui s\'y passe.',
        axe1_verset: 'Le verset dit maliki yawmi d-dini (Maître du Jour de la rétribution). Le mot yawmi est le pivot de la triple idafa : il relie le maître à la rétribution. Le champ lexical est celui du temps et de l\'échéance. Le Jour est le contenant temporel dans lequel la rétribution se déroule.',
        axe2_voisins: 'Le verset 2 couvre l\'espace (les mondes). Le verset 4 couvre le temps (le Jour). Les deux versets ensemble montrent que l\'autorité de Dieu couvre tout : l\'espace et le temps. Le Jour ajoute la dimension temporelle que la seigneurie spatiale ne couvrait pas.',
        axe3_sourate: 'La Fatiha qualifie Dieu hors du temps (miséricordieux, permanent) et dans le temps (maître du Jour, ponctuel). Le Jour est le seul élément temporel spécifique de la sourate. Il introduit l\'idée que l\'histoire a un aboutissement.',
        axe4_coherence: 'Le Coran utilise yawm pour des jours spécifiques (Jour de la résurrection, Jour du jugement). L\'expression yawm ad-din revient dans d\'autres passages avec le même sens de moment d\'échéance.',
        axe5_frequence: 'Le Jour de la rétribution est le moment où les actes du khalifa sont évalués. L\'existence de ce Jour donne un cadre temporel à la mission de justice : les actes ont une échéance et des conséquences.',
      },
      'Événement/Moment marquant': {
        status: 'probable',
        senses: ['événement', 'accident', 'fait marquant', 'bataille', 'jour de combat'],
        proof_ctx: 'L\'événement est ce qui arrive, le jour est le moment où ça arrive. Le verset dit yawm (le contenant temporel), pas ce qui s\'y passe (le contenu). La frontière philosophique : l\'événement est le contenu (ce qui se passe), le jour est le contenant (quand ça se passe). Le verset insiste sur le QUAND, pas sur le QUOI.',
        axe1_verset: 'Le verset dit maliki yawmi d-dini. Le mot yawmi est en idafa avec d-dini qui précise le contenu du Jour. Si le sens était "événement", le mot ad-din serait redondant (un événement de rétribution est une tautologie). Le Jour est le contenant temporel, la rétribution est le contenu.',
        axe2_voisins: 'Les versets voisins posent des attributs permanents. Le Jour ajoute un point temporel spécifique. L\'événement serait plus vague et moins spécifique.',
        axe3_sourate: 'La Fatiha pose des fondements clairs et précis. Le Jour est précis (un moment identifié), l\'événement est plus vague.',
        axe4_coherence: 'Le Coran utilise yawm pour le temps et des mots différents pour les événements (amr, hadath). La distinction est maintenue.',
        axe5_frequence: 'Le Jour donne un cadre temporel à la mission. L\'événement serait moins structurant.',
      },
      'Divers': {
        status: 'nul',
        senses: ['chameau noir', 'nuage'],
        proof_ctx: 'Sens isolés sans rapport avec le contexte de maîtrise divine.',
      },
    }
  }
  const {error: e2} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'ywm', position: 2, sense_chosen: 'jour', analysis_axes: ywmAxes
  })
  console.log('  ywm → Temps/Période → "jour"' + (e2 ? ' ERREUR: '+e2.message : ' ✓'))

  // ── dyn (258) — ad-dini — nom défini en idafa avec yawm ──
  console.log('>>> ÉTAPE 3 — dyn (ad-dini, nom défini)')
  const dynAxes = {
    sense_chosen: 'rétribution',
    concept_chosen: 'Rétribution/Compte',
    concepts: {
      'Rétribution/Compte': {
        status: 'retenu',
        senses: ['rétribution', 'récompense', 'punition selon les actes', 'rendre à chacun ce qu\'il mérite', 'requital', 'compensation'],
        proof_ctx: 'Le sens retenu est "Rétribution/Compte". Le mot ad-dini est un nom défini avec l\'article al- en idafa avec yawm. Le Lane\'s donne pour din dans ce sens : "le fait de rendre à chacun ce qu\'il mérite, récompense ou punition selon les actes". Le test de compatibilité : un nom défini peut-il identifier la rétribution comme une réalité connue ? Oui — la rétribution est un mécanisme connu et identifiable. Distinction avec "Religion/Système" : la religion est le système de croyances et de pratiques qu\'on suit, la rétribution est le résultat final quand les comptes sont rendus. "Jour de la religion" ne fonctionne pas en français courant comme expression, "Jour de la rétribution" fonctionne. Distinction avec "Obéissance/Soumission" : l\'obéissance est l\'acte du fidèle (ce qu\'on fait), la rétribution est la conséquence des actes (ce qu\'on reçoit). Le verset parle du Jour du RÉSULTAT, pas du Jour de l\'ACTION.',
        axe1_verset: 'Le verset dit maliki yawmi d-dini (Maître du Jour de la rétribution). Le mot ad-dini est le dernier maillon de la triple idafa : il précise le contenu du Jour. Le champ lexical est celui de l\'échéance et des conséquences : le Jour où les comptes sont rendus. La rétribution est ce qui remplit le Jour de son contenu.',
        axe2_voisins: 'Les versets précédents posent les attributs de Dieu : miséricorde (v1,3) et seigneurie (v2). Le verset 4 ajoute la maîtrise de la rétribution : la miséricorde n\'exclut pas les conséquences. Les versets suivants (v5-7) montreront l\'engagement de l\'humain, qui sait que ses actes ont des conséquences.',
        axe3_sourate: 'La Fatiha pose les fondements : miséricorde ET rétribution. Les deux coexistent. La miséricorde est la qualité permanente de Dieu, la rétribution est le mécanisme par lequel les actes ont des conséquences. La sourate ne dit pas que la miséricorde annule la rétribution.',
        axe4_coherence: 'Le Coran utilise yawm ad-din dans d\'autres passages pour le Jour où chacun reçoit ce qu\'il mérite. L\'expression est récurrente et son sens est constant. Le Coran distingue din (rétribution) de din (religion) par le contexte.',
        axe5_frequence: 'La rétribution est le mécanisme qui rend la mission de justice significative : les actes ont des conséquences. Sans rétribution, pas de responsabilité. Le khalifa sait que ses actes sont évalués.',
      },
      'Religion/Système': {
        status: 'probable',
        senses: ['religion', 'système de croyances', 'pratiques', 'règles', 'mode de vie'],
        proof_ctx: 'La religion est le système de croyances et de pratiques qu\'on suit au quotidien. La rétribution est le résultat final quand les comptes sont rendus. Le Jour de la religion ne fait pas sens en français courant : le Jour est un moment d\'aboutissement, la religion est une pratique quotidienne. La frontière philosophique : la religion est le chemin (ce qu\'on fait au quotidien), la rétribution est la destination (ce qui arrive à la fin du chemin).',
        axe1_verset: 'Le verset dit maliki yawmi d-dini. "Maître du Jour de la religion" est grammaticalement possible mais sémantiquement bancal : un Jour de la religion ne désigne pas un moment précis d\'aboutissement. "Maître du Jour de la rétribution" désigne un moment d\'échéance identifiable.',
        axe2_voisins: 'Les versets voisins posent des attributs de Dieu dans sa relation avec la création. La rétribution est un acte de Dieu vers les humains (Il rend à chacun ce qu\'il mérite). La religion est un acte des humains vers Dieu (ils suivent un système). Le verset décrit ce que Dieu fait, pas ce que les humains font.',
        axe3_sourate: 'La Fatiha va de Dieu (v1-4) vers l\'humain (v5-7). Le verset 4 est encore dans la partie qui décrit Dieu. La rétribution est un acte de Dieu, la religion est un acte des humains.',
        axe4_coherence: 'Le Coran utilise din dans les deux sens (rétribution et religion) selon le contexte. Le contexte de yawm ad-din indique la rétribution (le Jour des comptes).',
        axe5_frequence: 'La religion est le système que le khalifa suit. La rétribution est ce qui donne à ce système ses conséquences. Les deux sont liés mais le verset parle du résultat, pas du système.',
      },
      'Obéissance/Soumission': {
        status: 'peu_probable',
        senses: ['obéir', 'se soumettre', 'être assujetti', 'soumission'],
        proof_ctx: 'L\'obéissance est l\'acte de se soumettre à une autorité. Le Jour de l\'obéissance ne désigne pas un moment d\'aboutissement. L\'obéissance est un acte quotidien, pas un événement ponctuel. La frontière philosophique : l\'obéissance est un processus (on obéit chaque jour), la rétribution est un résultat (on reçoit les conséquences une fois).',
        axe1_verset: '"Maître du Jour de l\'obéissance" ne fonctionne pas : le Jour n\'est pas un moment d\'obéissance mais un moment de comptes. Le champ lexical est celui de l\'échéance, pas de la soumission.',
        axe2_voisins: 'L\'obéissance viendra au verset 5 (iyyaka na\'budu). Le verset 4 est dans la partie descriptive de Dieu, pas dans la partie engagement de l\'humain.',
        axe3_sourate: 'L\'obéissance est un thème de la deuxième moitié de la sourate (v5-7), pas de la première (v1-4).',
        axe4_coherence: 'Le Coran utilise d\'autres mots pour l\'obéissance (ta\'a). Le mot din dans le contexte de yawm ad-din est toujours compris comme rétribution.',
        axe5_frequence: 'L\'obéissance est le processus, la rétribution est le résultat. Le verset parle du résultat.',
      },
      'Dette/Obligation': {
        status: 'peu_probable',
        senses: ['dette', 'obligation financière', 'créance', 'débiteur', 'créancier'],
        proof_ctx: 'La dette est une obligation financière entre deux parties. Le Jour de la dette ne désigne pas un moment cosmique d\'aboutissement. La frontière philosophique : la dette est matérielle et entre humains, la rétribution est universelle et de Dieu vers les humains.',
        axe1_verset: '"Maître du Jour de la dette" ne fonctionne pas dans le contexte cosmique du verset. Le champ lexical est celui de l\'autorité divine, pas du commerce.',
        axe2_voisins: 'Les versets voisins parlent d\'attributs cosmiques (Seigneur des mondes, miséricordieux). La dette serait hors registre.',
        axe3_sourate: 'La Fatiha opère dans un registre de relation entre Dieu et la création, pas dans un registre commercial.',
        axe4_coherence: 'Le Coran utilise dayn pour la dette financière (sourate 2:282). Le mot din dans yawm ad-din est distinct de dayn.',
        axe5_frequence: 'La dette est matérielle. Le verset parle de conséquences universelles, pas de transactions.',
      },
      'Divers': {
        status: 'nul',
        senses: ['habitude', 'coutume', 'pratique établie', 'pluie', 'caractère'],
        proof_ctx: 'Sens isolés sans rapport avec le contexte de maîtrise divine et d\'échéance.',
      },
    }
  }
  const {error: e3} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'dyn', position: 3, sense_chosen: 'rétribution', analysis_axes: dynAxes
  })
  console.log('  dyn → Rétribution/Compte → "rétribution"' + (e3 ? ' ERREUR: '+e3.message : ' ✓'))

  // ═══════════════════════════════════════
  // ÉTAPE 4 — TRADUCTION
  // ═══════════════════════════════════════
  console.log('')
  console.log('>>> ÉTAPE 4 — TRADUCTION')

  const segments = [
    {fr:'Maître', pos:'nom', phon:'maliki', arabic:'مَـٰلِكِ', word_key:'mlk', is_particle:false, sense_retenu:'maître', position:1},
    {fr:'du Jour', pos:'nom', phon:'yawmi', arabic:'يَوْمِ', word_key:'ywm', is_particle:false, sense_retenu:'jour', position:2},
    {fr:'de la rétribution', pos:'nom', phon:'ad-dini', arabic:'ٱلدِّينِ', word_key:'dyn', is_particle:false, sense_retenu:'rétribution', position:3},
  ]

  const explanation = [
    '§DEMARCHE§',
    'Le verset est construit comme un enchaînement d\'idafas (c\'est quand un mot est rattaché au suivant pour dire qu\'il lui appartient, comme "la porte de la maison"). Ici c\'est une triple idafa : **maliki** (le maître) possède le **yawm** (Jour), et ce Jour est celui de la **din** (rétribution). Chaque mot complète le précédent.',
    'La forme **maliki** (avec un a long) est un participe actif (une forme qui dit que la personne fait l\'action activement). C\'est celui qui possède en continu, avec autorité. C\'est différent de **malik** (avec un a court) qui veut dire roi. Le Lane\'s distingue les deux : le maître possède avec autorité, le roi règne sur un peuple.',
    'Le mot **yawm** désigne un temps, une période. Dans cette construction, il est le contenant temporel : le moment où la rétribution a lieu.',
    'Le mot **ad-din** avec l\'article al- (le/la) identifie une réalité connue et précise. Le Lane\'s donne pour din dans ce contexte : le fait de rendre à chacun ce qu\'il mérite.',
    '§JUSTIFICATION§',
    '**maître** — Le sens retenu est "Possession/Autorité". Le mot "maître" est choisi car il capture la relation de possession directe avec autorité. L\'alternative "possesseur" est écartée car c\'est un registre plus juridique, moins courant. L\'alternative "propriétaire" est écartée car c\'est un registre immobilier. L\'alternative "roi" est écartée car c\'est un autre sens (malik avec a court = titre social), pas la possession active (malik avec a long = participe actif).',
    '**jour** — Le sens retenu est "Temps/Période". Le mot "jour" est choisi car c\'est le mot français courant pour yawm. L\'alternative "journée" est écartée car elle se limite à la période de lumière, alors que yawm couvre tout le temps. L\'alternative "moment" est écartée car il est trop vague — le Jour est un moment précis et identifié.',
    '**rétribution** — Le sens retenu est "Rétribution/Compte". Le mot "rétribution" est choisi car il capture le mécanisme de rendre à chacun ce qu\'il mérite (récompense ou punition). L\'alternative "jugement" est écartée car le jugement est le processus d\'évaluation, alors que la rétribution est le résultat de cette évaluation. L\'alternative "compte" est écartée car c\'est un registre comptable, moins courant pour un contexte cosmique.',
  ].join('\n\n')

  const {error: e4} = await db.from('verse_analyses').update({
    translation_arab: 'Maître du Jour de la rétribution.',
    translation_explanation: explanation,
    segments: segments,
  }).eq('verse_id', VERSE_ID)
  console.log('  Traduction : "Maître du Jour de la rétribution."' + (e4 ? ' ERREUR: '+e4.message : ' ✓'))

  const daily = [
    {analysis_id:256, sense:'maître', arabic:'مَالِكِ يَوْمِ ٱلدِّينِ', phon:'maliki yawmi d-din', french:'Maître du Jour de la rétribution'},
    {analysis_id:256, sense:'maître', arabic:'هُوَ مَالِكُ ٱلْبَيْتِ', phon:'huwa maliku l-bayt', french:'Il est le maître de la maison'},
    {analysis_id:256, sense:'maître', arabic:'مَلَكَ نَفْسَهُ', phon:'malaka nafsahu', french:'Il a maîtrisé lui-même'},
    {analysis_id:257, sense:'jour', arabic:'يَوْمٌ جَمِيلٌ', phon:'yawmun jamil', french:'Une belle journée'},
    {analysis_id:257, sense:'jour', arabic:'فِي يَوْمٍ مِنَ ٱلْأَيَّامِ', phon:'fi yawmin min al-ayyam', french:'Un jour parmi les jours'},
    {analysis_id:257, sense:'jour', arabic:'يَوْمَ ٱلْقِيَامَةِ', phon:'yawma l-qiyama', french:'Le Jour de la résurrection'},
    {analysis_id:258, sense:'rétribution', arabic:'كَمَا تَدِينُ تُدَانُ', phon:'kama tadinu tudan', french:'Comme tu traites tu seras traité'},
    {analysis_id:258, sense:'rétribution', arabic:'يَوْمُ ٱلدِّينِ', phon:'yawmu d-din', french:'Le Jour de la rétribution'},
    {analysis_id:258, sense:'rétribution', arabic:'لَهُ دَيْنٌ عَلَيَّ', phon:'lahu daynun alayya', french:'Il a une dette sur moi'},
  ]
  const {error: e5} = await db.from('word_daily').insert(daily)
  console.log('  ' + daily.length + ' phrases du quotidien insérées' + (e5 ? ' ERREUR: '+e5.message : ' ✓'))

  console.log('')
  console.log('VERSET 1:4 — TERMINÉ')
  console.log('  maliki (mlk) → sens "Possession/Autorité" → mot français "maître"')
  console.log('  yawmi (ywm) → sens "Temps/Période" → mot français "jour"')
  console.log('  ad-dini (dyn) → sens "Rétribution/Compte" → mot français "rétribution"')
  console.log('  Traduction : "Maître du Jour de la rétribution."')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
