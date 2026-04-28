// Pipeline V2 — Sourate 1 Verset 5 — ÉTAPES 3+4
// إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const VERSE_ID = 5

async function run() {
  console.log('============================================')
  console.log('  VERSET 1:5 — ÉTAPES 3+4')
  console.log('  إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ')
  console.log('============================================')
  console.log('')

  // ── ebd (259) — na'budu — verbe inaccompli forme I, 1ère personne pluriel ──
  console.log('>>> ÉTAPE 3 — ebd (na\'budu, verbe inaccompli forme I)')
  const ebdAxes = {
    sense_chosen: 'adorer',
    concept_chosen: 'Adoration/Dévotion',
    concepts: {
      'Adoration/Dévotion': {
        status: 'retenu',
        senses: ['adorer', 'servir', 'vouer un culte', 'se dévouer entièrement', 'dévotion totale', 'pratiquer le culte'],
        proof_ctx: 'Le sens retenu est "Adoration/Dévotion". Le mot na\'budu est un verbe inaccompli forme I à la 1ère personne du pluriel (nous adorons). Le test de compatibilité philosophique : l\'adoration est une action que les personnes FONT activement et en continu — c\'est compatible avec le verbe inaccompli qui exprime une action en cours ou habituelle. L\'adoration est un mouvement intérieur de dévotion qui se manifeste par des actes extérieurs. Elle est permanente et active. Distinction avec "Servitude/Esclavage" : la servitude est un état imposé de l\'extérieur (on est forcé à servir), l\'adoration est un acte volontaire de l\'intérieur (on choisit d\'adorer). Le verset dit "nous adorons" — c\'est une déclaration volontaire, pas un constat de contrainte. La structure iyyaka na\'budu (c\'est Toi seul que nous adorons) marque l\'exclusivité par choix, pas par force.',
        axe1_verset: 'Le verset dit iyyaka na\'budu wa iyyaka nasta\'inu (c\'est Toi seul que nous adorons et c\'est Toi seul dont nous demandons l\'aide). Le mot na\'budu est le premier verbe d\'action de la sourate — tous les versets précédents étaient des phrases nominales (descriptions). Le passage à l\'action marque un tournant. Le champ lexical est celui de l\'engagement et de l\'exclusivité : la structure iyyaka (c\'est Toi seul) répétée deux fois marque l\'exclusivité de la relation.',
        axe2_voisins: 'Les versets 1-4 décrivent Dieu (identité, attributs). Le verset 5 est le pivot : on passe de la description de Dieu à l\'engagement de l\'humain. Après avoir identifié qui est Dieu (v1-4), on déclare ce qu\'on fait envers Lui (v5). C\'est la réponse logique : on reconnaît d\'abord, puis on s\'engage.',
        axe3_sourate: 'La Fatiha se divise en deux : la première moitié (v1-4) parle de Dieu, la seconde moitié (v5-7) parle de l\'humain. Le verset 5 est la charnière. L\'adoration est le premier acte de l\'humain dans cette sourate, ce qui montre son importance : avant de demander (v6-7), on s\'engage (v5).',
        axe4_coherence: 'Le Coran utilise na\'budu (nous adorons) dans d\'autres passages pour l\'acte d\'adoration. Le verbe abada et ses dérivés sont parmi les plus fréquents du texte. La forme I est toujours utilisée pour l\'adoration directe.',
        axe5_frequence: 'L\'adoration est l\'engagement fondamental du khalifa : reconnaître l\'autorité de Dieu avant d\'agir en Son nom. Sans cette reconnaissance volontaire, la mission de justice n\'a pas de fondement. L\'adoration précède la demande d\'aide (deuxième partie du verset), ce qui montre que l\'engagement vient avant le besoin.',
      },
      'Servitude/Esclavage': {
        status: 'probable',
        senses: ['serviteur', 'esclave', 'être humain en tant que serviteur', 'soumettre', 'asservir', 'rendre soumis', 'aplanir un chemin'],
        proof_ctx: 'La servitude est un état imposé de l\'extérieur : quelqu\'un d\'autre vous force à servir. L\'adoration est un acte volontaire de l\'intérieur : on choisit de se dévouer. Le verset dit "nous adorons" (na\'budu, forme I = acte volontaire), pas "nous sommes asservis" (forme II ou passif = état imposé). La structure iyyaka (c\'est Toi seul) marque un choix exclusif, pas une contrainte subie. La frontière philosophique : la servitude est la soumission du corps (on obéit physiquement), l\'adoration est l\'engagement de l\'être entier (corps, esprit, volonté).',
        axe1_verset: 'Le verset déclare "c\'est Toi seul que nous adorons". La structure iyyaka + verbe marque l\'exclusivité volontaire. La servitude serait une contrainte, mais la structure grammaticale (iyyaka en tête) insiste sur le choix. On ne dit pas "nous sommes forcés de Te servir" mais "c\'est Toi que nous choisissons d\'adorer".',
        axe2_voisins: 'Les versets précédents ont décrit Dieu comme miséricordieux (v1,3) et seigneur (v2). La réponse naturelle à la miséricorde est l\'adoration volontaire, pas la servitude forcée. La miséricorde appelle la gratitude et l\'engagement, pas la soumission contrainte.',
        axe3_sourate: 'La Fatiha est une prière, un dialogue volontaire. La servitude impliquerait un monologue de soumission, pas un dialogue de relation. La sourate est structurée comme une relation bilatérale, pas comme un rapport de domination.',
        axe4_coherence: 'Le Coran utilise la forme I (abada) pour l\'adoration volontaire et la forme II (abbada) pour l\'asservissement. La distinction est maintenue dans tout le texte. Le verset utilise la forme I.',
        axe5_frequence: 'La servitude est un rapport de force. L\'adoration est un rapport de reconnaissance. Pour la mission de justice, le khalifa agit par reconnaissance volontaire, pas par contrainte.',
      },
      'Divers': {
        status: 'nul',
        senses: ['être en colère', 'être furieux', 'indigné'],
        proof_ctx: 'Sens secondaire rare. Le verset est une déclaration d\'adoration, pas de colère.',
      },
    }
  }
  const {error: e1} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'ebd', position: 2, sense_chosen: 'adorer', analysis_axes: ebdAxes
  })
  console.log('  ebd → Adoration/Dévotion → "adorer"' + (e1 ? ' ERREUR: '+e1.message : ' ✓'))

  // ── ewn (260) — nasta'inu — verbe inaccompli forme X, 1ère personne pluriel ──
  console.log('>>> ÉTAPE 3 — ewn (nasta\'inu, verbe inaccompli forme X)')
  const ewnAxes = {
    sense_chosen: 'demander l\'aide',
    concept_chosen: 'Demande d\'aide',
    concepts: {
      'Demande d\'aide': {
        status: 'retenu',
        senses: ['demander l\'aide', 'chercher activement le secours', 'solliciter l\'assistance'],
        proof_ctx: 'Le sens retenu est "Demande d\'aide". Le mot nasta\'inu est un verbe inaccompli forme X (une forme qui ajoute l\'idée de chercher activement quelque chose) à la 1ère personne du pluriel. Le test de compatibilité : la demande d\'aide est une action que les personnes FONT activement et en continu — c\'est compatible avec le verbe inaccompli. La forme X insiste sur l\'initiative : on ne reçoit pas passivement l\'aide, on la cherche activement. Distinction avec "Aide/Assistance" : l\'aide est le résultat (ce qu\'on reçoit), la demande d\'aide est l\'action (ce qu\'on fait). Le verset utilise un verbe d\'action (nasta\'inu = nous demandons l\'aide), pas un nom de résultat. Distinction avec "Entraide/Réciprocité" : l\'entraide est réciproque (on s\'aide mutuellement), la demande d\'aide est unidirectionnelle (on demande à Dieu). Le verset dit "c\'est de Toi seul que nous demandons l\'aide" — une direction unique, pas une réciprocité.',
        axe1_verset: 'Le verset dit iyyaka nasta\'inu (c\'est Toi seul dont nous demandons l\'aide). Le mot nasta\'inu est le deuxième verbe d\'action du verset, parallèle à na\'budu. La structure est identique : iyyaka + verbe, ce qui crée un parallélisme. Le champ lexical est celui de l\'engagement et de la demande : d\'abord on s\'engage (adorer), puis on demande (l\'aide). La forme X (chercher activement) montre que ce n\'est pas une attente passive.',
        axe2_voisins: 'Le verset 5 est le pivot entre la description de Dieu (v1-4) et la demande de guidance (v6-7). La demande d\'aide prépare la demande de guidance : on reconnaît d\'abord qu\'on a besoin d\'aide, puis on précise quel type d\'aide on veut (la guidance, v6). C\'est une progression logique.',
        axe3_sourate: 'La Fatiha construit une progression : reconnaître (v1-4) → s\'engager (v5a) → demander l\'aide (v5b) → préciser la demande (v6-7). La demande d\'aide est l\'étape qui relie l\'engagement à la demande concrète.',
        axe4_coherence: 'Le Coran utilise la forme X (istaana) pour la demande active d\'aide dans plusieurs passages. La distinction entre la forme I (aider = donner l\'aide) et la forme X (demander l\'aide = chercher activement) est maintenue dans tout le texte.',
        axe5_frequence: 'La demande d\'aide est l\'acte d\'humilité du khalifa : reconnaître qu\'on ne peut pas accomplir la mission de justice seul. On a besoin d\'aide pour agir justement. Cette reconnaissance précède la demande de guidance (v6), ce qui montre que l\'humilité vient avant la direction.',
      },
      'Aide/Assistance': {
        status: 'probable',
        senses: ['aide', 'secours', 'assistance', 'soutien', 'ce qui permet d\'accomplir'],
        proof_ctx: 'L\'aide est le résultat : ce qu\'on reçoit. La demande d\'aide est l\'action : ce qu\'on fait. Le verset utilise un verbe d\'action à la forme X (nasta\'inu = nous demandons activement), pas un nom de résultat (awn = aide). La frontière philosophique : l\'aide est passive (on la reçoit), la demande d\'aide est active (on la cherche). Le verbe inaccompli décrit une action en cours, pas un résultat obtenu.',
        axe1_verset: 'Le verset utilise un verbe (nasta\'inu), pas un nom (awn). Le champ lexical est celui de l\'action, pas du résultat. Le parallélisme avec na\'budu (nous adorons) renforce : les deux sont des verbes d\'action, pas des noms de résultat.',
        axe2_voisins: 'Les versets suivants (v6-7) sont aussi des demandes actives (guide-nous). Le contexte est celui de l\'action et de la demande, pas de la réception passive.',
        axe3_sourate: 'La deuxième moitié de la sourate est active : adorer, demander l\'aide, demander la guidance. Tout est dans l\'action du locuteur, pas dans la réception passive.',
        axe4_coherence: 'Le Coran distingue awn (aide, nom) de istaana (demander l\'aide, verbe forme X). Le verset utilise la forme X.',
        axe5_frequence: 'L\'aide est le résultat espéré. La demande d\'aide est l\'acte d\'humilité qui précède le résultat. Pour le khalifa, c\'est l\'acte de demander qui compte, pas la certitude de recevoir.',
      },
      'Entraide/Réciprocité': {
        status: 'nul',
        senses: ['s\'entraider', 'aide réciproque', 'aide mutuelle'],
        proof_ctx: 'L\'entraide est réciproque (forme VI, entre humains). Le verset parle d\'une demande unidirectionnelle à Dieu (forme X, de l\'humain vers Dieu).',
      },
      'Divers': {
        status: 'nul',
        senses: ['serviteur', 'garde armé', 'celui qui assiste', 'âge moyen', 'guerre récurrente', 'captif'],
        proof_ctx: 'Sens isolés sans rapport avec la demande d\'aide dans le verset.',
      },
    }
  }
  const {error: e2} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'ewn', position: 5, sense_chosen: 'demander l\'aide', analysis_axes: ewnAxes
  })
  console.log('  ewn → Demande d\'aide → "demander l\'aide"' + (e2 ? ' ERREUR: '+e2.message : ' ✓'))

  // ═══════════════════════════════════════
  // ÉTAPE 4 — TRADUCTION
  // ═══════════════════════════════════════
  console.log('')
  console.log('>>> ÉTAPE 4 — TRADUCTION')

  const segments = [
    {fr:'c\'est Toi seul', phon:'iyyaka', arabic:'إِيَّاكَ', word_key:null, is_particle:true, position:1},
    {fr:'que nous adorons', pos:'verbe', phon:'na\'budu', arabic:'نَعْبُدُ', word_key:'ebd', is_particle:false, sense_retenu:'adorer', position:2},
    {fr:'et', phon:'wa', arabic:'وَ', word_key:null, is_particle:true, position:3},
    {fr:'c\'est Toi seul', phon:'iyyaka', arabic:'إِيَّاكَ', word_key:null, is_particle:true, position:4},
    {fr:'dont nous demandons l\'aide', pos:'verbe', phon:'nasta\'inu', arabic:'نَسْتَعِينُ', word_key:'ewn', is_particle:false, sense_retenu:'demander l\'aide', position:5},
  ]

  const explanation = [
    '§DEMARCHE§',
    'En arabe, quand on place le complément avant le verbe (ce qu\'on appelle le taqdim), ça sert à marquer l\'exclusivité : seulement Toi. C\'est pour ça qu\'on traduit "c\'est Toi seul". Cette structure est répétée deux fois dans le verset, ce qui crée un parallélisme (deux phrases construites de la même façon).',
    'La première fois pour l\'adoration : **na\'budu** (nous adorons, forme I, la forme de base du verbe). C\'est un verbe inaccompli (une forme qui dit que l\'action est en cours ou habituelle) à la 1ère personne du pluriel.',
    'La deuxième fois pour l\'aide : **nasta\'inu** (nous demandons l\'aide, forme X). Cette forme en arabe ajoute l\'idée de chercher activement quelque chose. Nous ne recevons pas l\'aide passivement, nous la demandons activement.',
    'Ce verset est le pivot de la sourate : les versets 1-4 parlaient de Dieu, à partir du verset 5 c\'est l\'humain qui s\'engage.',
    '§JUSTIFICATION§',
    '**adorer** — Le sens retenu est "Adoration/Dévotion". Le mot "adorer" est choisi car il capture l\'engagement volontaire et total envers Dieu. L\'alternative "servir" est écartée car "servir" peut impliquer une contrainte extérieure (on sert un maître), alors que "adorer" est un acte intérieur et volontaire. L\'alternative "vénérer" est écartée car c\'est un registre plus littéraire, moins courant au quotidien.',
    '**demander l\'aide** — Le sens retenu est "Demande d\'aide". L\'expression "demander l\'aide" est choisie car elle capture l\'action active et volontaire de la forme X (chercher activement). L\'alternative "implorer" est écartée car c\'est un registre dramatique qui implique le désespoir, alors que le verset est une déclaration sereine. L\'alternative "solliciter" est écartée car c\'est un registre administratif.',
  ].join('\n\n')

  const {error: e3} = await db.from('verse_analyses').update({
    translation_arab: 'C\'est Toi seul que nous adorons et c\'est Toi seul dont nous demandons l\'aide.',
    translation_explanation: explanation,
    segments: segments,
  }).eq('verse_id', VERSE_ID)
  console.log('  Traduction : "C\'est Toi seul que nous adorons et c\'est Toi seul dont nous demandons l\'aide."' + (e3 ? ' ERREUR: '+e3.message : ' ✓'))

  const daily = [
    {analysis_id:259, sense:'adorer', arabic:'إِيَّاكَ نَعْبُدُ', phon:'iyyaka na\'budu', french:'C\'est Toi seul que nous adorons'},
    {analysis_id:259, sense:'adorer', arabic:'ٱعْبُدُوا ٱللَّهَ', phon:'u\'budu llaha', french:'Adorez Dieu'},
    {analysis_id:259, sense:'adorer', arabic:'هُوَ عَبْدُ ٱللَّهِ', phon:'huwa abdu llah', french:'Il est le serviteur de Dieu'},
    {analysis_id:260, sense:'demander l\'aide', arabic:'إِيَّاكَ نَسْتَعِينُ', phon:'iyyaka nasta\'inu', french:'C\'est Toi seul dont nous demandons l\'aide'},
    {analysis_id:260, sense:'demander l\'aide', arabic:'اِسْتَعِنْ بِٱللَّهِ', phon:'ista\'in bi-llah', french:'Demande l\'aide de Dieu'},
    {analysis_id:260, sense:'demander l\'aide', arabic:'تَعَاوَنُوا عَلَى ٱلْبِرِّ', phon:'ta\'awanu ala l-birr', french:'Entraidez-vous pour le bien'},
  ]
  const {error: e4} = await db.from('word_daily').insert(daily)
  console.log('  ' + daily.length + ' phrases du quotidien insérées' + (e4 ? ' ERREUR: '+e4.message : ' ✓'))

  console.log('')
  console.log('VERSET 1:5 — TERMINÉ')
  console.log('  na\'budu (ebd) → sens "Adoration/Dévotion" → mot français "adorer"')
  console.log('  nasta\'inu (ewn) → sens "Demande d\'aide" → mot français "demander l\'aide"')
  console.log('  Traduction : "C\'est Toi seul que nous adorons et c\'est Toi seul dont nous demandons l\'aide."')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
