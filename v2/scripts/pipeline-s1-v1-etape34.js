// Pipeline V2 — Sourate 1 Verset 1 — ÉTAPES 3+4
// بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const VERSE_ID = 1

async function run() {
  console.log('============================================')
  console.log('  VERSET 1:1 — ÉTAPES 3+4')
  console.log('  بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ')
  console.log('============================================')
  console.log('')

  // ═══════════════════════════════════════
  // ÉTAPE 3 — AXES PAR CONCEPT
  // ═══════════════════════════════════════

  // ── smw (249) — ismi — nom en idafa avec Allah ──
  console.log('>>> ÉTAPE 3 — smw (ismi, nom en idafa)')
  const smwAxes = {
    sense_chosen: 'nom',
    concept_chosen: 'Nom/Identification',
    concepts: {
      'Nom/Identification': {
        status: 'retenu',
        senses: ['nom', 'nommer', 'prononcer le nom de Dieu', 'se nommer', 's\'appeler mutuellement', 'demander le nom', 'renommée', 'nommé', 'homonyme', 'nominal', 'qualité de nom', 'revendiquer une parenté'],
        proof_ctx: 'Le sens retenu est "Nom/Identification". Le mot ismi est en idafa (c\'est quand deux mots sont liés pour dire que le premier appartient au second) avec Allah. La réalité de ce sens est extérieure et permanente : le nom est un signe qui identifie et qui permet de communiquer. La formule bi-smi llahi (au nom de Dieu) est une formule d\'invocation qui place ce qui suit sous l\'identité de Dieu. Distinction avec "Hauteur/Élévation" : la hauteur est une position spatiale, le nom est un outil d\'identification. Le mot ismi dans la construction bi-smi ne peut pas signifier "à la hauteur de" — c\'est une formule figée d\'invocation. Distinction avec "Ciel/Ce qui couvre" : le ciel est une réalité physique au-dessus de la terre, le nom est un signe linguistique. "Au ciel de Dieu" ne correspond pas à la formule d\'invocation.',
        axe1_verset: 'Le verset dit bi-smi llahi ar-rahmani ar-rahimi (au nom de Dieu, le Tout-Miséricordieux, le Miséricordieux). Le mot ismi ouvre la formule d\'invocation. Le champ lexical est celui de l\'identification et de la qualification : on identifie Dieu par Son nom, puis on Le qualifie par deux attributs. Le nom est le point d\'entrée qui permet aux qualificatifs qui suivent de s\'attacher à une identité précise. Sans le nom, les qualificatifs n\'auraient pas de support.',
        axe2_voisins: 'Le verset 2 continue la qualification de Dieu : la louange est pour Dieu, Seigneur des mondes. Le verset 1 nomme, le verset 2 loue et qualifie davantage. La progression est logique : d\'abord on identifie (v1), puis on décrit (v2-4), puis on s\'engage (v5-7). Le nom est le fondement de cette progression.',
        axe3_sourate: 'La Fatiha est la sourate d\'ouverture du Coran. Commencer par "au nom de" c\'est poser le cadre : tout ce qui suit est dit sous l\'identité de Dieu. Cette formule ouvre 113 des 114 sourates du Coran, ce qui montre son importance structurelle. Le nom est le premier mot significatif de la relation entre l\'humain et le texte.',
        axe4_coherence: 'Le Coran utilise bi-smi llahi comme formule d\'ouverture constante. L\'usage est univoque : c\'est toujours le nom dans le sens d\'identification, jamais la hauteur ni le ciel. Aucun verset du Coran ne contredit cette lecture. La formule est tellement constante qu\'elle est devenue un marqueur structurel du texte.',
        axe5_frequence: 'Nommer est l\'acte fondamental qui permet de connaître et d\'identifier. Sans nom, pas d\'identité, pas de relation possible. Commencer par le nom de Dieu c\'est reconnaître Son identité avant d\'agir. Pour la mission de justice et de civilisation, l\'identification de la source d\'autorité est le premier pas.',
      },
      'Hauteur/Élévation': {
        status: 'nul',
        senses: ['être haut', 'se dresser', 'monter', 'lever le regard', 'aspirer', 'noble', 'hautain', 'rivaliser en éminence', 'élever quelqu\'un', 'dépasser en nombre', 'étalon qui bondit', 'forme vue de loin', 'lune qui se dresse', 'surpasser', 'éminent'],
        proof_ctx: 'La hauteur est une position spatiale. La construction bi-smi est une formule figée d\'invocation qui signifie "au nom de", pas "à la hauteur de".',
      },
      'Ciel/Ce qui couvre': {
        status: 'nul',
        senses: ['ciel', 'toit', 'nuage', 'pluie', 'herbage', 'dos', 'semelle supérieure', 'pièce de tissu supérieure', 'céleste', 'bounty'],
        proof_ctx: 'Le ciel est une réalité physique au-dessus de la terre. "Au ciel de Dieu" ne correspond pas à la formule d\'invocation bi-smi.',
      },
      'Chasse': {
        status: 'nul',
        senses: ['chasser', 'chasseurs', 'chaussettes de chasseur', 'inciter à chasser', 'tester une chamelle'],
        proof_ctx: 'La chasse est une activité physique de poursuite. Aucun rapport avec la formule d\'invocation.',
      },
      'Divers': {
        status: 'nul',
        senses: ['égal', 'choisir', 'visiter', 'se diriger vers Es-Semaweh', 'faire partir', 'monter à cheval', 'regarder la silhouette', 'désir qui resurgit'],
        proof_ctx: 'Sens isolés sans rapport avec la formule d\'invocation.',
      },
    }
  }
  const {error: e1} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'smw', position: 2, sense_chosen: 'nom', analysis_axes: smwAxes
  })
  console.log('  smw → Nom/Identification → "nom"' + (e1 ? ' ERREUR: '+e1.message : ' ✓'))

  // ── alh (250) — allahi — nom propre défini ──
  console.log('>>> ÉTAPE 3 — alh (allahi, nom propre défini)')
  const alhAxes = {
    sense_chosen: 'divinité',
    concept_chosen: 'Divinité',
    concepts: {
      'Divinité': {
        status: 'retenu',
        senses: ['divinité', 'divinité (concept)', 'Dieu', 'théologie', 'exclamation divine', 'oui certes'],
        proof_ctx: 'Le sens retenu est "Divinité". Allah est le nom propre de la Divinité, ce vers quoi se dirige l\'adoration. Le mot est un nom propre défini, il identifie une réalité connue et précise. Le test de compatibilité : un nom propre défini peut-il désigner la divinité ? Oui — Allah est par définition le nom propre de la Divinité. Distinction avec "Adoration/Dévotion" : l\'adoration est l\'acte du fidèle (ce qu\'on fait), la divinité est l\'identité de Dieu (ce qu\'Il est). Le verset 1 identifie, il ne décrit pas l\'acte d\'adorer. L\'adoration viendra au verset 5 (iyyaka na\'budu).',
        axe1_verset: 'Le verset dit bi-smi llahi (au nom de Dieu). Le mot allahi est en position de complément du nom (ismi). Le champ lexical est celui de l\'identification et de l\'invocation. On nomme Dieu, on L\'identifie. Les deux attributs qui suivent (ar-rahmani ar-rahimi) qualifient cette identité. La divinité est le concept que le nom propre Allah désigne.',
        axe2_voisins: 'Le verset 2 continue la qualification : Seigneur des mondes. Les versets 3-4 ajoutent d\'autres attributs. Le verset 1 pose l\'identité de base (la Divinité), les versets suivants la développent. La progression va de l\'identité (v1) à la description (v2-4) à l\'engagement (v5-7).',
        axe3_sourate: 'La Fatiha pose la relation entre l\'humain et Dieu. Nommer la Divinité en premier est le fondement de cette relation. Avant de qualifier, de louer ou de demander, il faut identifier à qui on s\'adresse. La divinité est le premier concept posé.',
        axe4_coherence: 'Le Coran utilise Allah comme nom propre de la Divinité des milliers de fois. C\'est le mot le plus fréquent du texte. L\'usage est constant et univoque. Le mot ilah (divinité en tant que concept) et Allah (nom propre de la Divinité) sont distincts mais liés par la même racine.',
        axe5_frequence: 'Reconnaître la Divinité est le fondement de la mission de justice et de civilisation. Sans cette reconnaissance, pas de cadre pour l\'action. Le verset 1 pose ce cadre en une formule.',
      },
      'Adoration/Dévotion': {
        status: 'probable',
        senses: ['adorer', 'faire adorer', 'se dévouer au culte', 'diviniser'],
        proof_ctx: 'L\'adoration est l\'acte du fidèle : ce qu\'on fait envers Dieu. La divinité est l\'identité de Dieu : ce qu\'Il est. Le verset 1 identifie Dieu dans une formule d\'invocation, il ne décrit pas l\'acte d\'adorer. L\'adoration apparaîtra au verset 5 (iyyaka na\'budu). La frontière philosophique : adorer est une action (mouvement du fidèle vers Dieu), la divinité est une identité (ce que Dieu est en soi).',
        axe1_verset: 'Le verset est une formule d\'invocation (au nom de Dieu). Le champ lexical est celui de l\'identification, pas de l\'action de dévotion. On nomme, on ne pratique pas. Le verbe "adorer" décrirait une action, mais le verset ne contient pas de verbe d\'action — c\'est une phrase nominale qui identifie.',
        axe2_voisins: 'L\'adoration est mentionnée explicitement au verset 5 (iyyaka na\'budu = c\'est Toi seul que nous adorons). Le verset 1 nomme et identifie, le verset 5 est l\'acte d\'adoration. Les deux sont distincts dans la structure de la sourate.',
        axe3_sourate: 'La Fatiha sépare l\'identification (v1) de l\'adoration (v5). Le verset 1 est dans la partie identification, pas dans la partie engagement. Placer l\'adoration au verset 1 anticiperait sur le verset 5.',
        axe4_coherence: 'Le Coran distingue le nom Allah (l\'identité) de l\'acte d\'adorer (ibada). Quand le Coran veut parler d\'adoration, il utilise le verbe abada et ses dérivés, pas le nom Allah seul.',
        axe5_frequence: 'L\'adoration est une action du fidèle. Le verset pose l\'identité de Dieu, pas l\'action du fidèle. Pour la mission de justice, il faut d\'abord identifier (v1) avant d\'agir (v5).',
      },
      'Détresse': {
        status: 'nul',
        senses: ['être perplexe', 'se lamenter'],
        proof_ctx: 'La détresse est un état émotionnel intérieur. Le verset est une ouverture sereine, pas un cri de détresse.',
      },
      'Refuge/Protection': {
        status: 'peu_probable',
        senses: ['chercher refuge', 'protéger', 'demeurer'],
        proof_ctx: 'Chercher refuge est une action vers Dieu. Le verset invoque, il ne demande pas de refuge. Le Coran utilise d\'autres formules pour le refuge (audhu billahi). La frontière philosophique : chercher refuge est une demande motivée par la peur, l\'invocation du verset 1 est une formule d\'ouverture, pas de demande.',
        axe1_verset: 'Le verset est une formule d\'invocation (au nom de Dieu). Le champ lexical est celui de l\'identification, pas de la protection. On nomme Dieu, on ne Lui demande pas de protection. La demande viendra aux versets 5-7.',
        axe2_voisins: 'Les versets voisins qualifient Dieu (miséricordieux, seigneur, maître). Aucun ne parle de refuge ou de protection. Le registre est identitaire et qualificatif, pas protecteur.',
        axe3_sourate: 'La Fatiha pose une relation de louange et de demande de guidance, pas de refuge. Le refuge est un thème des sourates 113-114 (al-Falaq, an-Nas).',
        axe4_coherence: 'Le Coran utilise audhu billahi (je cherche refuge auprès de Dieu) pour le refuge. Cette formule est distincte de bi-smi llahi (au nom de Dieu). Les deux constructions ont des fonctions différentes.',
        axe5_frequence: 'Chercher refuge est une action ponctuelle motivée par la peur. Le verset 1 pose un cadre permanent pour tout ce qui suit.',
      },
      'Domination': {
        status: 'nul',
        senses: ['asservir'],
        proof_ctx: 'L\'asservissement est un acte de domination. Le verset identifie Dieu, il ne parle pas de domination.',
      },
    }
  }
  const {error: e2} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'alh', position: 3, sense_chosen: 'divinité', analysis_axes: alhAxes
  })
  console.log('  alh → Divinité → "divinité"' + (e2 ? ' ERREUR: '+e2.message : ' ✓'))

  // ── rhm (251) — ar-rahmani — adjectif défini ──
  console.log('>>> ÉTAPE 3 — rhm (ar-rahmani, adjectif défini)')
  const rhmAxes = {
    sense_chosen: 'miséricorde',
    concept_chosen: 'Miséricorde/Tendresse',
    concepts: {
      'Miséricorde/Tendresse': {
        status: 'retenu',
        senses: ['miséricorde', 'pardon', 'traiter avec compassion', 'dire "que Dieu te fasse miséricorde"', 'se forcer à la compassion', 'miséricorde réciproque', 'demander la miséricorde', 'le Compatissant', 'plus miséricordieux', 'objet de miséricorde', 'traité avec beaucoup de compassion'],
        proof_ctx: 'Le sens retenu est "Miséricorde/Tendresse". Les mots ar-rahmani et ar-rahimi sont des adjectifs définis avec l\'article al- (une forme qui identifie une qualité connue et permanente). La miséricorde est un mouvement intérieur de tendresse qui se dirige vers l\'extérieur en actes de bienfaisance. Le test de compatibilité : un adjectif défini peut-il identifier la miséricorde comme une qualité connue et permanente ? Oui — la miséricorde est une qualité stable et identifiable. Le Coran utilise cette qualification au début de 113 sourates. Distinction avec "Parenté/Lien familial" : la parenté est une relation horizontale entre humains liés par le sang, la miséricorde est une qualité qui se dirige du haut vers le bas (de Dieu vers les humains dans ce verset). Distinction avec "Provision/Bienfait matériel" : la provision est le résultat concret et matériel de la miséricorde, la miséricorde est la qualité intérieure qui motive ce résultat. Les adjectifs ar-rahmani et ar-rahimi décrivent la qualité, pas le résultat.',
        axe1_verset: 'Le verset dit bi-smi llahi ar-rahmani ar-rahimi. Les deux mots ar-rahmani et ar-rahimi qualifient Allah. Le champ lexical est celui de la qualification divine : après l\'identification (Allah), on décrit la première qualité de Dieu. La miséricorde est le premier attribut mentionné, ce qui lui donne une importance centrale. Les deux mots viennent de la même racine mais sur des modèles différents : ar-rahmani exprime le degré le plus intense, ar-rahimi exprime la permanence.',
        axe2_voisins: 'Le verset 2 ajoute la louange et la seigneurie. Le verset 3 répète ar-rahmani ar-rahimi, ce qui crée un encadrement. Le verset 4 ajoute la maîtrise du Jour. La miséricorde encadre les autres attributs : elle est la première (v1) et elle est rappelée (v3). Cette répétition montre son importance dans la structure de la sourate.',
        axe3_sourate: 'La Fatiha s\'ouvre et se rappelle la miséricorde comme fondement de la relation avec Dieu. C\'est le premier attribut mentionné (v1) et il est répété (v3). Tout ce qui suit dans la sourate (seigneurie, maîtrise, adoration, guidance) est encadré par la miséricorde.',
        axe4_coherence: 'Le Coran utilise ar-rahmani et ar-rahimi des centaines de fois pour décrire Dieu. La formule bi-smi llahi ar-rahmani ar-rahimi ouvre 113 sourates sur 114. L\'usage est constant et central dans tout le texte coranique.',
        axe5_frequence: 'La miséricorde est le fondement de la relation entre le khalifa et les autres êtres humains. C\'est par la miséricorde que la justice ne devient pas tyrannie. Sans miséricorde, l\'autorité écrase au lieu d\'élever.',
      },
      'Utérus/Reproduction': {
        status: 'nul',
        senses: ['utérus', 'vulve', 'maladie de l\'utérus', 'utérus gonflé', 'chamelle malade post-partum', 'sortie de l\'utérus'],
        proof_ctx: 'L\'utérus est le sens physique premier de la racine. Le verset qualifie Dieu avec des adjectifs, pas des termes anatomiques.',
      },
      'Parenté/Lien familial': {
        status: 'peu_probable',
        senses: ['lien de parenté', 'parents par les femmes', 'parent interdit au mariage', 'sentiment de parenté', 'connecté par parenté'],
        proof_ctx: 'La parenté est une relation horizontale entre humains liés par le sang. Le verset qualifie Dieu avec des adjectifs qui décrivent une qualité descendante (de Dieu vers les humains), pas une relation horizontale entre pairs.',
        axe1_verset: 'Le verset qualifie Dieu avec ar-rahmani et ar-rahimi. Ce sont des adjectifs qui décrivent une qualité de Dieu, pas une relation de parenté entre Dieu et les humains. Le champ lexical est celui de la qualification divine, pas des liens familiaux.',
        axe2_voisins: 'Les versets voisins décrivent des attributs de Dieu (seigneurie, maîtrise). Aucun ne parle de parenté. La sourate ne traite pas des relations familiales.',
        axe3_sourate: 'La Fatiha pose la relation entre l\'humain et Dieu, pas les relations entre humains. La parenté est un thème d\'autres passages coraniques.',
        axe4_coherence: 'Le Coran utilise ar-rahmani et ar-rahimi comme qualificatifs de Dieu, jamais dans le sens de parenté. Le mot rahim (utérus/parenté) est distinct de rahim (adjectif de miséricorde) même s\'ils partagent la même racine.',
        axe5_frequence: 'La parenté est une relation entre humains. Le verset parle de la qualité de Dieu, pas des relations humaines.',
      },
      'Provision/Bienfait matériel': {
        status: 'peu_probable',
        senses: ['subsistance', 'pluie', 'abondance', 'prophétie'],
        proof_ctx: 'La provision est le résultat concret et matériel de la miséricorde. Le verset utilise des adjectifs (ar-rahmani, ar-rahimi) qui décrivent la qualité intérieure qui MOTIVE le résultat, pas le résultat lui-même. La frontière philosophique : la qualité (miséricorde) est permanente et intérieure, le résultat (provision) est ponctuel et matériel.',
        axe1_verset: 'Le verset qualifie Dieu avec des adjectifs. Les adjectifs décrivent des qualités, pas des actes matériels. "Le Tout-Miséricordieux" décrit ce que Dieu EST, pas ce qu\'Il DONNE. La provision serait un verbe ou un nom d\'action, pas un adjectif.',
        axe2_voisins: 'Les versets voisins décrivent des qualités permanentes (seigneur, maître). La provision serait un acte ponctuel dans une série de qualités permanentes. Elle détonne dans la progression.',
        axe3_sourate: 'La Fatiha pose des fondements permanents. La provision est ponctuelle et matérielle.',
        axe4_coherence: 'Le Coran utilise ar-rahmani et ar-rahimi pour la qualité de miséricorde, pas pour les actes matériels. Quand le Coran parle de provision, il utilise d\'autres mots (rizq).',
        axe5_frequence: 'La provision est matérielle. Le verset parle de la qualité qui motive la provision, pas de la provision elle-même.',
      },
      'Divers': {
        status: 'nul',
        senses: ['La Mecque', 'Médine', 'outre abîmée', 'la crainte vaut mieux que la pitié'],
        proof_ctx: 'Noms propres et proverbes sans rapport avec la qualification divine du verset.',
      },
    }
  }
  // Position 4 = ar-rahmani
  const {error: e3} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'rhm', position: 4, sense_chosen: 'miséricorde', analysis_axes: rhmAxes
  })
  console.log('  rhm (pos=4) → Miséricorde/Tendresse → "miséricorde"' + (e3 ? ' ERREUR: '+e3.message : ' ✓'))

  // Position 5 = ar-rahimi (même concept, même axes mais pour cette position)
  const {error: e4} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'rhm', position: 5, sense_chosen: 'miséricorde', analysis_axes: rhmAxes
  })
  console.log('  rhm (pos=5) → Miséricorde/Tendresse → "miséricorde"' + (e4 ? ' ERREUR: '+e4.message : ' ✓'))

  // ═══════════════════════════════════════
  // ÉTAPE 4 — TRADUCTION
  // ═══════════════════════════════════════
  console.log('')
  console.log('>>> ÉTAPE 4 — TRADUCTION')

  const segments = [
    {fr:'au', phon:'bi', arabic:'بِ', word_key:null, is_particle:true, position:1},
    {fr:'nom', pos:'nom', phon:'ismi', arabic:'ٱسْمِ', word_key:'smw', is_particle:false, sense_retenu:'nom', position:2},
    {fr:'de Dieu', pos:'nom', phon:'allahi', arabic:'ٱللَّهِ', word_key:'alh', is_particle:false, sense_retenu:'divinité', position:3},
    {fr:'le Tout-Miséricordieux', pos:'adjectif', phon:'ar-rahmani', arabic:'ٱلرَّحْمَـٰنِ', word_key:'rhm', is_particle:false, sense_retenu:'miséricorde', position:4},
    {fr:'le Miséricordieux', pos:'adjectif', phon:'ar-rahimi', arabic:'ٱلرَّحِيمِ', word_key:'rhm', is_particle:false, sense_retenu:'miséricorde', position:5},
  ]

  const explanation = [
    '§DEMARCHE§',
    'La particule **bi** (au/avec) introduit le **nom** (ismi) qui est rattaché à **Allah** par une idafa (c\'est quand deux mots sont liés pour dire que le premier appartient au second). Ensemble ils forment bi-smi llahi, "au nom de Dieu". C\'est une formule d\'ouverture qui place tout ce qui suit sous l\'identité de Dieu.',
    'Les deux mots **ar-rahmani** et **ar-rahimi** qualifient Dieu. Ils viennent de la même racine (r-h-m, qui a pour sens physique premier l\'utérus, le lieu où la vie se forme dans la douceur et la protection). Ar-rahmani est construit sur un modèle (qu\'on appelle en arabe un wazn, c\'est comme un moule qui donne une forme particulière au mot) qui exprime le plus haut degré possible, comme si la miséricorde débordait de partout. C\'est pour ça qu\'on traduit "le Tout-Miséricordieux". Ar-rahimi est construit sur un modèle qui exprime une qualité permanente, qui ne s\'arrête jamais, un trait de caractère constant. C\'est pour ça qu\'on traduit "le Miséricordieux" (sans "Tout").',
    '§JUSTIFICATION§',
    '**nom** — Le sens retenu est "Nom/Identification". Le mot "nom" est choisi car il capture directement la réalité d\'identification de la formule bi-smi. L\'alternative "renommée" est écartée car la renommée est la propagation du nom (sa réputation), pas l\'identité elle-même. L\'alternative "appellation" est écartée car c\'est du registre administratif, pas du français courant.',
    '**Dieu** — Le sens retenu est "Divinité". Allah est le nom propre de la Divinité, traduit par "Dieu" en français (règle des noms propres).',
    '**miséricorde** — Le sens retenu est "Miséricorde/Tendresse". Le mot "miséricorde" est choisi car il capture le mouvement intérieur de tendresse qui se dirige vers l\'extérieur. L\'alternative "compassion" est écartée car la compassion est plus ponctuelle (on a compassion face à une situation), alors que la miséricorde est une qualité permanente. L\'alternative "grâce" est écartée car c\'est du vocabulaire religieux chrétien.',
  ].join('\n\n')

  const {error: e5} = await db.from('verse_analyses').update({
    translation_arab: 'Au nom de Dieu, le Tout-Miséricordieux, le Miséricordieux.',
    translation_explanation: explanation,
    segments: segments,
  }).eq('verse_id', VERSE_ID)
  console.log('  Traduction : "Au nom de Dieu, le Tout-Miséricordieux, le Miséricordieux."' + (e5 ? ' ERREUR: '+e5.message : ' ✓'))

  // Phrases du quotidien
  const daily = [
    {analysis_id:249, sense:'nom', arabic:'مَا ٱسْمُكَ؟', phon:'ma ismuka?', french:'Quel est ton nom ?'},
    {analysis_id:249, sense:'nom', arabic:'بِسْمِ ٱللَّهِ', phon:'bi-smi llahi', french:'Au nom de Dieu'},
    {analysis_id:249, sense:'nom', arabic:'سَمَّيْتُ ٱبْنِي أَحْمَدَ', phon:'sammaytou ibni ahmad', french:'J\'ai nommé mon fils Ahmad'},
    {analysis_id:250, sense:'divinité', arabic:'لَا إِلٰهَ إِلَّا ٱللَّهُ', phon:'la ilaha illa llah', french:'Il n\'y a de divinité que Dieu'},
    {analysis_id:250, sense:'divinité', arabic:'هُوَ إِلٰهُ ٱلنَّاسِ', phon:'huwa ilahu n-nas', french:'Il est la divinité des gens'},
    {analysis_id:250, sense:'divinité', arabic:'مَنْ إِلٰهُكُمْ؟', phon:'man ilahukum?', french:'Qui est votre divinité ?'},
    {analysis_id:251, sense:'miséricorde', arabic:'يَرْحَمُكَ ٱللَّهُ', phon:'yarhamuka llah', french:'Que Dieu te fasse miséricorde'},
    {analysis_id:251, sense:'miséricorde', arabic:'ٱلْأُمُّ أَرْحَمُ ٱلنَّاسِ', phon:'al-ummu arhamu n-nas', french:'La mère est la plus miséricordieuse des gens'},
    {analysis_id:251, sense:'miséricorde', arabic:'صِلَةُ ٱلرَّحِمِ وَاجِبَةٌ', phon:'silatu r-rahimi wajiba', french:'Maintenir les liens de parenté est obligatoire'},
  ]
  const {error: e6} = await db.from('word_daily').insert(daily)
  console.log('  ' + daily.length + ' phrases du quotidien insérées' + (e6 ? ' ERREUR: '+e6.message : ' ✓'))

  console.log('')
  console.log('VERSET 1:1 — TERMINÉ')
  console.log('  ismi (smw) → sens "Nom/Identification" → mot français "nom"')
  console.log('  allahi (alh) → sens "Divinité" → mot français "divinité"')
  console.log('  ar-rahmani (rhm) → sens "Miséricorde/Tendresse" → mot français "miséricorde"')
  console.log('  ar-rahimi (rhm) → sens "Miséricorde/Tendresse" → mot français "miséricorde"')
  console.log('  Traduction : "Au nom de Dieu, le Tout-Miséricordieux, le Miséricordieux."')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
