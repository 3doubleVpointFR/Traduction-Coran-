const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

// Verse IDs for sourate 109
const V = { 1: 6208, 2: 6209, 3: 6210, 4: 6211, 5: 6212, 6: 6213 }

// ==================== ÉTAPE 3 — ANALYSIS AXES ====================

const qwl_axes = {
  sense_chosen: "dis",
  concept_chosen: "Parole/Énonciation",
  concepts: {
    "Parole/Énonciation": {
      status: "retenu",
      senses: ["dire", "parler", "parole", "discours", "affirmer"],
      proof_ctx: "Le sens retenu est « Parole/Énonciation ». Le mot qul est un verbe à l'impératif — c'est un ordre de prononcer des mots précis. Le vocatif ya ayyuha qui suit confirme qu'il s'agit d'un discours adressé à des personnes. L'impératif « dis ! » est un ordre de produire une parole, pas de former une opinion. La sourate entière est le contenu de ce qui doit être dit — les versets 2 à 6 sont les mots exacts que le Prophète doit prononcer. Distinction avec « Pensée/Avis » : la pensée est un acte intérieur qui reste dans celui qui pense. La parole est un acte extérieur qui sort du locuteur et atteint l'auditeur. Le vocatif ya ayyuha exige la parole, pas la pensée — on ne s'adresse pas à quelqu'un en pensant.",
      axe1_verset: "Le verset ouvre par un ordre de parler adressé au Prophète. Le verbe qul est suivi d'un vocatif ya ayyuha qui introduit un discours direct aux personnes qui rejettent. La parole est l'acte central du verset — tout ce qui suit est le contenu de ce qui doit être dit. Le champ lexical est celui de la communication directe et du discours ordonné.",
      axe2_voisins: "Les versets 2 à 6 sont le contenu de ce qui doit être dit — une série de déclarations de séparation dans l'adoration. Le qul du verset 1 ouvre le discours, les versets suivants le développent. L'acte de parole est le cadre de toute la sourate. Sans le qul, les versets suivants n'auraient pas de locuteur identifié.",
      axe3_sourate: "La sourate est un discours ordonné par Dieu au Prophète pour adresser ceux qui rejettent. Le thème central est la déclaration verbale de séparation — je ne fais pas ce que vous faites. La parole est le véhicule de ce message de clarification. Le qul est le point de départ de cette clarification.",
      axe4_coherence: "Le Coran utilise qul plus de 300 fois comme ouverture de discours ordonné par Dieu au Prophète. C'est un schéma récurrent et bien établi — dis ceci, dis cela. Aucune contradiction avec un autre verset. Le qul est toujours un ordre de prononcer, jamais un ordre de penser.",
      axe5_frequence: "Dire la vérité clairement fait partie de la mission de l'être humain responsable. La parole claire qui sépare le vrai du faux contribue à la justice et empêche la corruption. Le qul est l'outil de la clarification — sans parole prononcée, le message ne peut pas atteindre ceux qui doivent l'entendre."
    },
    "Pensée/Avis": {
      status: "peu_probable",
      senses: ["opinion", "avis", "doctrine"],
      proof_ctx: "Le vocatif ya ayyuha après le verbe indique un discours adressé à des gens, pas une réflexion intérieure. L'impératif de penser ne se construit pas avec un vocatif — on ne dit pas « pense ô vous les gens ». La pensée est un acte intérieur qui ne sort pas, la parole est un acte extérieur qui atteint l'autre.",
      axe1_verset: "Le vocatif ya ayyuha après le verbe indique un discours adressé à des gens, pas une réflexion intérieure. L'opinion ne s'adresse pas avec un vocatif — la pensée reste intérieure et ne nécessite pas d'interlocuteur identifié. Le champ lexical du verset est celui du discours, pas de la réflexion.",
      axe2_voisins: "Les versets 2 à 6 sont des déclarations verbales prononcées — « je n'adore pas ce que vous adorez ». Ce sont des paroles formulées, pas des opinions pensées en silence. Le contenu exige d'être dit, pas d'être pensé.",
      axe3_sourate: "La sourate est un discours public de séparation, pas une méditation privée. Le thème exige la parole prononcée pour que la séparation soit déclarée et entendue par les deux parties.",
      axe4_coherence: "Quand le Coran veut dire « penser » ou « opiner », il utilise d'autres verbes comme zanna ou hasiba. Le qul impératif est toujours « dis », jamais « pense » dans l'usage coranique.",
      axe5_frequence: "L'opinion intérieure ne contribue pas directement à la mission de clarification — il faut la parole prononcée pour que le message atteigne ceux qui doivent l'entendre et que la justice soit établie."
    },
    "Sens isolé/Puissance": {
      status: "nul",
      senses: ["puissance"],
      proof_ctx: "Sens concret isolé sans rapport avec le contexte de discours de la sourate."
    },
    "Corps/Anatomie": {
      status: "nul",
      senses: ["troupeau"],
      proof_ctx: "Sens concret isolé sans rapport avec le contexte."
    }
  }
}

const kfr_axes = {
  sense_chosen: "ceux qui rejettent",
  concept_chosen: "Rejet/Ingratitude",
  concepts: {
    "Rejet/Ingratitude": {
      status: "retenu",
      senses: ["nier", "être ingrat", "renier un bienfait", "rejeter", "mécréant"],
      proof_ctx: "Le sens retenu est « Rejet/Ingratitude ». Le mot al-kafirun est un participe actif pluriel défini avec al- — il désigne une catégorie de personnes identifiées par leur acte continu de rejet. Le participe actif indique une action que la personne fait activement et en permanence : « ceux qui rejettent » est leur identité. Le test de compatibilité : un participe actif défini peut-il désigner des gens qui rejettent activement ? Oui — c'est exactement ce que la forme dit. Distinction avec « Couverture/Dissimulation » : la couverture est un acte physique sur un objet — elle cache ce qui est dessous. Le rejet est un acte intérieur qui se manifeste vers l'extérieur — il nie et repousse ce qui est proposé. Le participe actif avec al- désigne une identité permanente de rejeteurs, pas des gens qui couvrent des objets. L'étymologie de couvrir est le sens physique premier, mais dans le Coran le mot a évolué vers le sens de rejet actif de la vérité.",
      axe1_verset: "Le mot est précédé de ya ayyuha (ô vous) — un vocatif qui s'adresse à des personnes identifiées. Les kafirun sont les destinataires du discours. Le champ lexical est celui du refus et de l'opposition dans l'adoration — les versets suivants détaillent ce que ces personnes rejettent et ce que le Prophète ne rejette pas.",
      axe2_voisins: "Les versets 2 à 5 opposent deux adorations incompatibles. Les kafirun sont ceux qui adorent autre chose que ce que le Prophète adore — ils ont rejeté la voie divine. Le rejet est actif, continu, et définit leur identité dans toute la sourate.",
      axe3_sourate: "La sourate entière est une déclaration de séparation entre deux types d'adoration. Les kafirun sont le second pôle — ceux qui ont fait le choix du rejet. Sans leur rejet, il n'y aurait pas besoin de cette sourate. Le rejet est le thème central du côté des interlocuteurs.",
      axe4_coherence: "Le Coran utilise al-kafirun systématiquement pour désigner ceux qui rejettent le message divin — dans la sourate 2 (verset 6-7), dans la sourate 3, partout. Le mot est toujours lié au refus actif de la vérité, jamais à la simple couverture physique d'un objet.",
      axe5_frequence: "Identifier ceux qui rejettent la vérité est nécessaire pour la mission de justice. On ne peut pas construire une civilisation juste sans distinguer ceux qui acceptent la vérité de ceux qui la rejettent. La clarification est le premier pas vers la justice."
    },
    "Couverture/Dissimulation": {
      status: "peu_probable",
      senses: ["couvrir", "cacher", "la nuit qui couvre"],
      proof_ctx: "La couverture est un acte physique sur un objet — elle cache ce qui est dessous. Dans le verset, il ne s'agit pas de personnes qui couvrent des objets mais de personnes qui rejettent une vérité. Le sens physique de couvrir est l'étymologie première de la racine, mais le Coran a fait évoluer le mot vers le sens de rejet actif. Le participe actif défini (al-kafirun) identifie une catégorie de personnes par leur comportement, pas par un acte physique de couverture.",
      axe1_verset: "Le verset ne parle pas de quelque chose qui est caché ou couvert physiquement. Le contexte est un discours adressé à des personnes identifiées par leur attitude, pas par un geste physique. Aucun objet n'est couvert dans ce verset.",
      axe2_voisins: "Les versets parlent d'adoration et de refus d'adorer. La couverture physique n'a pas de lien avec l'adoration. On ne « couvre » pas une adoration — on l'accepte ou on la rejette.",
      axe3_sourate: "La sourate ne traite pas de voilement ou de dissimulation d'objets mais de séparation entre deux voies de croyance. Le thème est le refus, pas la couverture.",
      axe4_coherence: "Le sens physique de « couvrir » est attesté dans le Coran (la nuit qui couvre le jour, par exemple) mais dans un tout autre contexte. Quand le Coran parle de kafirun, il parle toujours de ceux qui rejettent le message, pas de ceux qui couvrent quelque chose.",
      axe5_frequence: "La couverture physique d'un objet ne contribue pas à la mission de justice dans ce contexte. La distinction entre ceux qui acceptent et ceux qui rejettent, oui."
    },
    "Expiation/Réparation": {
      status: "nul",
      senses: ["expier", "effacer les péchés"],
      proof_ctx: "Aucun élément du verset ne renvoie à l'expiation. Les interlocuteurs sont blâmés pour leur rejet, pas invités à expier."
    },
    "Sens isolé/Cultivateur": { status: "nul", senses: ["cultivateur"], proof_ctx: "Hors sujet." },
    "Sens isolé/Goudron": { status: "nul", senses: ["goudron"], proof_ctx: "Hors sujet." },
    "Sens isolé/Village": { status: "nul", senses: ["village"], proof_ctx: "Hors sujet." }
  }
}

const ebd_axes = {
  sense_chosen: "adorer",
  concept_chosen: "Adoration/Dévotion",
  concepts: {
    "Adoration/Dévotion": {
      status: "retenu",
      senses: ["adorer", "servir", "vouer un culte", "se dévouer", "dévotion", "adoration"],
      proof_ctx: "Le sens retenu est « Adoration/Dévotion ». La sourate oppose deux adorations — celle du Prophète et celle des rejeteurs. Le verbe abd apparaît sous quatre formes différentes dans les versets 2 à 5 : verbe inaccompli (j'adore / vous adorez), participe actif (adorateurs), verbe accompli (vous avez adoré). Chaque forme est compatible avec l'adoration : l'inaccompli dit que l'adoration est en cours et habituelle, le participe actif dit que c'est l'identité de la personne, l'accompli dit que c'est un fait passé. Distinction avec « Servitude/Esclavage » : la servitude est un état imposé de l'extérieur — l'esclave n'a pas choisi. L'adoration est un acte volontaire de l'intérieur — celui qui adore choisit ce qu'il adore. La sourate traite du choix (« je n'adore pas / vous n'adorez pas ») — c'est la liberté de l'adoration, pas la contrainte de la servitude. Le Prophète ne dit pas « je ne vous sers pas » mais « je n'adore pas ce que vous adorez ».",
      axe1_verset: "La sourate oppose deux types de pratiques : ce que le Prophète adore et ce que les rejeteurs adorent. Le champ lexical est celui du culte et de la dévotion. Les mots qui entourent sont la négation (la) et le pronom relatif (ma = ce que) — ce qui est adoré. L'adoration est l'acte central de la sourate.",
      axe2_voisins: "Chaque verset de 2 à 5 répète le mot abd sous différentes formes grammaticales. La répétition insiste sur la nature fondamentale de l'acte — ce n'est pas un service passager mais une dévotion qui définit l'identité de la personne. Le participe actif aabidun dit que c'est ce qu'ils SONT, pas seulement ce qu'ils font.",
      axe3_sourate: "La sourate entière est une déclaration de séparation dans l'adoration. Le thème est : mon adoration n'est pas la vôtre, la vôtre n'est pas la mienne. L'adoration est le sujet même de la sourate — le mot abd est le mot le plus répété.",
      axe4_coherence: "Le Coran distingue clairement l'adoration de Dieu seul de l'adoration d'autres que Dieu. La sourate 112 dit que Dieu est un. La sourate 109 dit que l'adoration du Prophète n'est pas celle des rejeteurs. Les deux sourates se complètent dans l'affirmation du monothéisme.",
      axe5_frequence: "L'adoration correcte est le fondement de la mission de l'être humain responsable. Adorer le vrai Dieu permet de construire une civilisation juste fondée sur la vérité. Adorer de faux dieux mène à la corruption car la base même de l'orientation est faussée."
    },
    "Servitude/Esclavage": {
      status: "probable",
      senses: ["serviteur", "esclave", "être humain", "asservir", "rendre soumis", "aplanir un chemin"],
      proof_ctx: "La servitude est un état imposé de l'extérieur — l'esclave n'a pas choisi son maître. L'adoration est un acte volontaire de l'intérieur — celui qui adore choisit ce qu'il adore. La sourate traite du choix personnel (« je n'adore pas ce que vous adorez ») — c'est une déclaration de liberté dans le culte, pas une description de servitude forcée. De plus, le pronom « ma » (ce que) renvoie à l'objet d'adoration, pas à un maître qui possède des esclaves.",
      axe1_verset: "La sourate ne parle pas de maîtres et d'esclaves. Il n'y a pas de relation de possession entre un maître humain et un serviteur. Le contexte est religieux — ce qu'on adore, pas à qui on est asservi physiquement.",
      axe2_voisins: "Le pronom « ma » (ce que) renvoie à l'objet d'adoration, pas à un maître qui possède. « Ce que vous adorez » est un objet de culte, pas un propriétaire d'esclaves.",
      axe3_sourate: "La servitude physique n'est pas le sujet de la sourate. Le sujet est le choix religieux — quelle divinité on adore, pas quel maître on sert.",
      axe4_coherence: "Quand le Coran parle de servitude physique, il utilise abd comme nom (un abd = un serviteur/esclave). Ici le verbe et le participe actif renvoient à l'acte d'adorer, pas au statut de serviteur.",
      axe5_frequence: "La servitude physique n'est pas le sujet de la sourate. La liberté de l'adoration — choisir ce qu'on adore — est un fondement de la responsabilité humaine."
    },
    "Sens isolé/Être": { status: "nul", senses: ["être en colère"], proof_ctx: "Hors sujet." },
    "Sens isolé/Mépriser": { status: "nul", senses: ["mépriser"], proof_ctx: "Hors sujet." },
    "Sens isolé/Colérique": { status: "nul", senses: ["colérique"], proof_ctx: "Hors sujet." }
  }
}

const dyn_axes = {
  sense_chosen: "voie",
  concept_chosen: "Religion/Système",
  concepts: {
    "Religion/Système": {
      status: "retenu",
      senses: ["religion", "système de croyances", "pratique", "coutume", "habitude"],
      proof_ctx: "Le sens retenu est « Religion/Système ». Le verset dit « à vous votre din, à moi mon din ». Le possessif rattache le din à la personne — chacun a le sien. Le din est le cadre global de croyances et de pratiques qui définit l'identité de la personne. Le test de compatibilité : un nom en idafa (votre din) peut-il désigner un système de vie qui appartient à quelqu'un ? Oui — « votre voie » est naturel et complet. Distinction avec « Rétribution/Compte » : la rétribution est ce que l'on reçoit en retour de ses actes — c'est ponctuel et lié au Jour du Jugement. La religion/voie est le système complet de croyances et de pratiques — c'est permanent et définit l'identité. Le verset dit « à vous le vôtre » — il parle d'un système qui appartient, pas d'un résultat qui sera donné. Distinction avec « Obéissance/Soumission » : l'obéissance est un acte à l'intérieur du système. La religion est le système qui contient l'obéissance. Le verset ne dit pas « à vous votre obéissance » mais « à vous votre voie complète ».",
      axe1_verset: "Le verset dit « lakum dinukum waliya dini » — à vous votre din, à moi mon din. Le possessif (votre/mon) rattache le din à la personne. Le champ lexical est celui de l'appartenance et de la séparation — chacun a le sien, et ils sont incompatibles. Le din est ce qui définit la personne dans sa totalité.",
      axe2_voisins: "Les versets 2 à 5 parlent d'adoration. Le verset 6 conclut en disant que chacun a sa propre voie. Le din est le cadre global qui englobe l'adoration — la voie est le système dans lequel l'adoration s'exerce. C'est la conclusion logique après avoir détaillé les différences d'adoration.",
      axe3_sourate: "La sourate sépare deux voies — celle du Prophète et celle des rejeteurs. Le din est le mot qui nomme cette séparation au niveau le plus large. Ce n'est plus seulement l'adoration (abd) mais tout le système de vie (din). Chacun a sa voie, et elles sont incompatibles.",
      axe4_coherence: "Le Coran utilise din dans le sens de voie/religion dans de nombreux versets. Le verset 3:19 dit « la voie auprès de Dieu est l'islam ». Le verset 5:3 dit « j'ai parachevé pour vous votre voie ». Le sens de système de vie complet est le plus fréquent et le plus cohérent.",
      axe5_frequence: "La liberté de voie fait partie de la mission de l'être humain responsable. « À vous votre voie, à moi la mienne » établit le principe que chacun est responsable de son propre chemin. Ce n'est pas de la tolérance passive — c'est la reconnaissance que la responsabilité est individuelle."
    },
    "Rétribution/Compte": {
      status: "probable",
      senses: ["rétribution", "récompense", "punition", "compensation", "rendre ce qui est dû", "jugement"],
      proof_ctx: "La rétribution est ce que l'on reçoit en retour de ses actes — c'est ponctuel et lié au Jour du Jugement. La voie est le système complet qui définit l'identité — c'est permanent. Le possessif « votre din » s'applique plus naturellement à « votre voie » qu'à « votre rétribution ». On ne dit pas habituellement « à vous votre rétribution, à moi la mienne » pour exprimer une séparation de croyance.",
      axe1_verset: "Le verset ne parle pas de récompense ni de punition. Le possessif « votre din / mon din » ne s'applique pas naturellement à la rétribution — on ne possède pas une rétribution comme on possède une voie de vie.",
      axe2_voisins: "Les versets précédents parlent d'adoration, pas de jugement final. La rétribution serait une conclusion sur les conséquences des actes, alors que le verset 6 est une conclusion sur la séparation des voies.",
      axe3_sourate: "La sourate est une déclaration de séparation dans la croyance, pas une annonce de jugement. Le thème est « nos voies sont différentes », pas « vous serez punis ».",
      axe4_coherence: "Le sens de rétribution est attesté dans d'autres contextes coraniques (yawm ad-din = jour de la rétribution, sourate 1:4). Mais dans la sourate 109, le contexte de séparation des voies oriente vers le sens de système de vie.",
      axe5_frequence: "La rétribution est la conséquence du choix de voie, pas le sujet de cette sourate. Le sujet est le choix lui-même — quelle voie on suit."
    },
    "Obéissance/Soumission": {
      status: "peu_probable",
      senses: ["obéir", "se soumettre", "soumission", "assujettissement"],
      proof_ctx: "L'obéissance est un acte à l'intérieur de la voie — c'est une composante, pas le tout. Le din ici est le cadre global, pas un acte isolé d'obéissance. « À vous votre obéissance » est réducteur par rapport à « à vous votre voie complète ».",
      axe1_verset: "Le verset ne décrit pas un acte d'obéissance mais un système complet. Le possessif « votre din » englobe tout — croyances, pratiques, orientation de vie — pas seulement l'acte d'obéir.",
      axe2_voisins: "Les versets précédents ont déjà traité de l'acte spécifique (l'adoration). Le verset 6 passe au niveau supérieur — le système global. L'obéissance serait redondante avec l'adoration déjà mentionnée.",
      axe3_sourate: "Le thème de la sourate monte en généralité : du discours (v1) à l'adoration (v2-5) à la voie globale (v6). L'obéissance est un niveau intermédiaire qui ne capte pas cette montée.",
      axe4_coherence: "Le Coran utilise taaa pour l'obéissance spécifique. Le din est plus large que l'obéissance.",
      axe5_frequence: "L'obéissance est un acte dans le cadre de la voie, pas la voie elle-même."
    },
    "Dette/Obligation": {
      status: "nul",
      senses: ["dette", "créance", "obligation financière", "prêt"],
      proof_ctx: "Aucune relation financière dans cette sourate. Totalement hors contexte."
    },
    "Sens isolé/Maladie": { status: "nul", senses: ["maladie"], proof_ctx: "Hors sujet." },
    "Eau/Liquide": { status: "nul", senses: ["pluie continue"], proof_ctx: "Hors sujet." }
  }
}

// ==================== ÉTAPE 4 — TRANSLATIONS ====================

const translations = {
  1: {
    verse_id: V[1],
    translation_arab: "Dis : « Ô vous qui rejetez,",
    translation_explanation: "Le verset commence par un ordre divin au Prophète de prononcer un discours. Le mot qul (dis) est un impératif — Dieu ordonne au Prophète de dire ces mots précis. Le vocatif ya ayyuha (ô vous) interpelle directement les destinataires. Le mot al-kafirun est un participe actif (une forme qui dit que l'action est faite activement et en permanence) avec l'article défini al- (qui identifie un groupe connu). Ce sont donc « ceux qui rejettent activement » — leur rejet n'est pas un accident, c'est leur identité. Le mot « mécréant » n'a pas été retenu car c'est du vocabulaire religieux chargé — « ceux qui rejettent » décrit l'acte philosophique sans connotation.",
    segments: [
      {fr:"dis",pos:"verbe",phon:"qul",arabic:"قُلْ",position:1,word_key:"qwl",is_particle:false,sense_retenu:"parole"},
      {fr:"ô vous",phon:"ya ayyuha",arabic:"يَٰٓأَيُّهَا",position:2,word_key:null,is_particle:true},
      {fr:"qui rejetez",pos:"nom",phon:"al-kafirun",arabic:"ٱلْكَٰفِرُونَ",position:3,word_key:"kfr",is_particle:false,sense_retenu:"rejet"}
    ]
  },
  2: {
    verse_id: V[2],
    translation_arab: "je n'adore pas ce que vous adorez,",
    translation_explanation: "Le verset est la première déclaration de séparation. La particule la (ne...pas) nie l'action. Le verbe a'budu est à l'inaccompli première personne (une forme qui dit que l'action est en cours et habituelle) — « je n'adore pas en ce moment et je n'adorerai pas ». Le pronom ma (ce que) introduit l'objet de l'adoration des rejeteurs. Le verbe ta'budun est à l'inaccompli deuxième personne pluriel — « ce que vous adorez habituellement ». Le mot « adorer » a été retenu plutôt que « servir » car la sourate traite du choix volontaire de culte, pas de la servitude forcée.",
    segments: [
      {fr:"ne...pas",phon:"la",arabic:"لَآ",position:1,word_key:null,is_particle:true},
      {fr:"j'adore",pos:"verbe",phon:"a'budu",arabic:"أَعْبُدُ",position:2,word_key:"ebd",is_particle:false,sense_retenu:"adoration"},
      {fr:"ce que",phon:"ma",arabic:"مَا",position:3,word_key:null,is_particle:true},
      {fr:"vous adorez",pos:"verbe",phon:"ta'budun",arabic:"تَعْبُدُونَ",position:4,word_key:"ebd",is_particle:false,sense_retenu:"adoration"}
    ]
  },
  3: {
    verse_id: V[3],
    translation_arab: "et vous n'êtes pas des adorateurs de ce que j'adore,",
    translation_explanation: "Le verset inverse la perspective. La conjonction wa (et) lie au verset précédent. La particule la nie. Le pronom antum (vous) désigne les rejeteurs. Le mot aabidun est un participe actif pluriel (une forme qui dit que c'est ce que les gens SONT, pas seulement ce qu'ils font) — « adorateurs ». Le pronom ma (ce que) introduit l'objet d'adoration du Prophète. Le verbe a'budu est à l'inaccompli — « ce que j'adore habituellement ». La nuance avec le verset 2 : le verset 2 nie l'acte (je n'adore pas), le verset 3 nie l'identité (vous n'êtes pas des adorateurs de).",
    segments: [
      {fr:"et ne...pas",phon:"wa la",arabic:"وَلَآ",position:1,word_key:null,is_particle:true},
      {fr:"vous",phon:"antum",arabic:"أَنتُمْ",position:2,word_key:null,is_particle:true},
      {fr:"adorateurs",pos:"nom",phon:"aabidun",arabic:"عَٰبِدُونَ",position:3,word_key:"ebd",is_particle:false,sense_retenu:"adoration"},
      {fr:"de ce que",phon:"ma",arabic:"مَآ",position:4,word_key:null,is_particle:true},
      {fr:"j'adore",pos:"verbe",phon:"a'budu",arabic:"أَعْبُدُ",position:5,word_key:"ebd",is_particle:false,sense_retenu:"adoration"}
    ]
  },
  4: {
    verse_id: V[4],
    translation_arab: "et je ne suis pas un adorateur de ce que vous avez adoré,",
    translation_explanation: "Le verset revient au Prophète. Le mot aabid est un participe actif singulier indéfini (une forme qui dit : quelqu'un qui adore activement). Le verbe abadtum est à l'accompli (une forme qui dit que l'action a eu lieu dans le passé comme un fait achevé) — « ce que vous avez adoré ». La nuance temporelle est importante : le verset 2 parle du présent (je n'adore pas), le verset 4 ajoute le passé (ce que vous avez adoré) — la séparation est totale, présent et passé.",
    segments: [
      {fr:"et ne...pas",phon:"wa la",arabic:"وَلَآ",position:1,word_key:null,is_particle:true},
      {fr:"moi",phon:"ana",arabic:"أَنَاٞ",position:2,word_key:null,is_particle:true},
      {fr:"adorateur",pos:"nom",phon:"aabid",arabic:"عَابِدٌ",position:3,word_key:"ebd",is_particle:false,sense_retenu:"adoration"},
      {fr:"de ce que",phon:"ma",arabic:"مَّا",position:4,word_key:null,is_particle:true},
      {fr:"vous avez adoré",pos:"verbe",phon:"abadtum",arabic:"عَبَدتُّمْ",position:5,word_key:"ebd",is_particle:false,sense_retenu:"adoration"}
    ]
  },
  5: {
    verse_id: V[5],
    translation_arab: "et vous n'êtes pas des adorateurs de ce que j'adore.",
    translation_explanation: "Le verset 5 répète le verset 3 mot pour mot. Cette répétition n'est pas un hasard — elle ferme le cycle de la séparation. Après avoir dit dans les versets 2 et 4 que le Prophète n'adore pas ce que les rejeteurs adorent (au présent et au passé), les versets 3 et 5 confirment que les rejeteurs ne sont pas des adorateurs de ce que le Prophète adore. La répétition insiste et scelle la séparation.",
    segments: [
      {fr:"et ne...pas",phon:"wa la",arabic:"وَلَآ",position:1,word_key:null,is_particle:true},
      {fr:"vous",phon:"antum",arabic:"أَنتُمْ",position:2,word_key:null,is_particle:true},
      {fr:"adorateurs",pos:"nom",phon:"aabidun",arabic:"عَٰبِدُونَ",position:3,word_key:"ebd",is_particle:false,sense_retenu:"adoration"},
      {fr:"de ce que",phon:"ma",arabic:"مَآ",position:4,word_key:null,is_particle:true},
      {fr:"j'adore",pos:"verbe",phon:"a'budu",arabic:"أَعْبُدُ",position:5,word_key:"ebd",is_particle:false,sense_retenu:"adoration"}
    ]
  },
  6: {
    verse_id: V[6],
    translation_arab: "À vous votre voie, et à moi ma voie. »",
    translation_explanation: "Le verset conclut la sourate par la séparation la plus large. Le mot dinukum est un nom avec possessif (votre din) — il rattache la voie à ses adeptes. Le mot waliya dini (et à moi mon din) fait de même pour le Prophète. Le mot « voie » a été retenu plutôt que « religion » car religion évoque une institution organisée avec clergé et dogmes — un concept chrétien. Le din est plus large : c'est le système complet de croyances, de pratiques et d'orientation de vie. « Voie » capture cette totalité sans connotation institutionnelle. Le verset ne dit pas « à vous votre punition » ni « à vous votre obéissance » — il dit « à vous votre voie entière ».",
    segments: [
      {fr:"à vous",phon:"lakum",arabic:"لَكُمْ",position:1,word_key:null,is_particle:true},
      {fr:"votre voie",pos:"nom",phon:"dinukum",arabic:"دِينُكُمْ",position:2,word_key:"dyn",is_particle:false,sense_retenu:"voie"},
      {fr:"et à moi",phon:"wa liya",arabic:"وَلِىَ",position:3,word_key:null,is_particle:true},
      {fr:"ma voie",pos:"nom",phon:"dini",arabic:"دِينِ",position:4,word_key:"dyn",is_particle:false,sense_retenu:"voie"}
    ]
  }
}

// ==================== INSERTION EN BASE ====================

async function run() {
  console.log('=== INSERTION SOURATE 109 ===')

  // 1. Insert verse_word_analyses
  const wordAnalyses = [
    { verse_id: V[1], word_key: 'qwl', sense_chosen: 'parole', analysis_axes: qwl_axes, position: 1 },
    { verse_id: V[1], word_key: 'kfr', sense_chosen: 'rejet', analysis_axes: kfr_axes, position: 3 },
    { verse_id: V[2], word_key: 'ebd', sense_chosen: 'adoration', analysis_axes: ebd_axes, position: 2 },
    { verse_id: V[2], word_key: 'ebd', sense_chosen: 'adoration', analysis_axes: ebd_axes, position: 4 },
    { verse_id: V[3], word_key: 'ebd', sense_chosen: 'adoration', analysis_axes: ebd_axes, position: 3 },
    { verse_id: V[3], word_key: 'ebd', sense_chosen: 'adoration', analysis_axes: ebd_axes, position: 5 },
    { verse_id: V[4], word_key: 'ebd', sense_chosen: 'adoration', analysis_axes: ebd_axes, position: 3 },
    { verse_id: V[4], word_key: 'ebd', sense_chosen: 'adoration', analysis_axes: ebd_axes, position: 5 },
    { verse_id: V[5], word_key: 'ebd', sense_chosen: 'adoration', analysis_axes: ebd_axes, position: 3 },
    { verse_id: V[5], word_key: 'ebd', sense_chosen: 'adoration', analysis_axes: ebd_axes, position: 5 },
    { verse_id: V[6], word_key: 'dyn', sense_chosen: 'voie', analysis_axes: dyn_axes, position: 2 },
    { verse_id: V[6], word_key: 'dyn', sense_chosen: 'voie', analysis_axes: dyn_axes, position: 4 },
  ]

  // Clear existing
  for (const vid of Object.values(V)) {
    await db.from('verse_word_analyses').delete().eq('verse_id', vid)
  }

  const {error: e1} = await db.from('verse_word_analyses').insert(wordAnalyses)
  if (e1) console.log('ERR verse_word_analyses:', e1.message)
  else console.log('✅ verse_word_analyses: ' + wordAnalyses.length + ' insérées')

  // 2. Update verse_analyses
  for (const [vnum, t] of Object.entries(translations)) {
    const {error} = await db.from('verse_analyses').update({
      translation_arab: t.translation_arab,
      translation_explanation: t.translation_explanation,
      segments: t.segments
    }).eq('verse_id', t.verse_id)
    if (error) console.log('ERR verse ' + vnum + ':', error.message)
    else console.log('✅ verset ' + vnum + ': ' + t.translation_arab)
  }

  // 3. Insert word_daily (3 phrases du quotidien)
  const dailyPhrases = [
    // qwl
    {word_key:'qwl', sense:'parole', arabic:'قُلْ لِي الحَقِيقَة', phon:'qul li al-haqiqa', french:'Dis-moi la vérité.'},
    {word_key:'qwl', sense:'parole', arabic:'مَا تَقُول؟', phon:'ma taqul?', french:'Qu\'est-ce que tu dis ?'},
    {word_key:'qwl', sense:'parole', arabic:'قَالَ لِي إنَّهُ مَشغُول', phon:'qala li innahu mashghul', french:'Il m\'a dit qu\'il était occupé.'},
    // kfr
    {word_key:'kfr', sense:'rejet', arabic:'كَفَرَ بِالنِّعمَة', phon:'kafara bi-n-ni\'ma', french:'Il a rejeté le bienfait (il a été ingrat).'},
    {word_key:'kfr', sense:'rejet', arabic:'لَا تَكفُر بِمَا أُعطِيتَ', phon:'la takfur bima u\'tita', french:'Ne rejette pas ce qu\'on t\'a donné.'},
    {word_key:'kfr', sense:'rejet', arabic:'الكُفرُ بِالظُّلمِ وَاجِب', phon:'al-kufr bi-z-zulm wajib', french:'Rejeter l\'injustice est un devoir.'},
    // ebd
    {word_key:'ebd', sense:'adoration', arabic:'نَعبُدُ اللهَ وَحدَهُ', phon:'na\'budu llaha wahdahu', french:'Nous adorons Dieu seul.'},
    {word_key:'ebd', sense:'adoration', arabic:'العِبَادَة لَيسَت فَقَط الصَّلَاة', phon:'al-\'ibada laysat faqat as-salat', french:'L\'adoration ne se limite pas à la prière.'},
    {word_key:'ebd', sense:'adoration', arabic:'كُلُّ عَمَلٍ صَالِحٍ عِبَادَة', phon:'kullu \'amalin salih \'ibada', french:'Toute bonne action est une forme d\'adoration.'},
    // dyn
    {word_key:'dyn', sense:'voie', arabic:'الدِّينُ يُسر', phon:'ad-dinu yusr', french:'La voie est facilité.'},
    {word_key:'dyn', sense:'voie', arabic:'لَا إكرَاهَ فِي الدِّين', phon:'la ikraha fi d-din', french:'Pas de contrainte dans la voie (de chacun).'},
    {word_key:'dyn', sense:'voie', arabic:'دِينُكَ هُوَ اختِيَارُكَ', phon:'dinuka huwa ikhtiyaruka', french:'Ta voie, c\'est ton choix.'},
  ]

  // Get analysis_ids for word_daily
  for (const p of dailyPhrases) {
    const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', p.word_key).limit(1)
    if (wa && wa[0]) {
      const {error} = await db.from('word_daily').insert({
        analysis_id: wa[0].id,
        sense: p.sense,
        arabic: p.arabic,
        phon: p.phon,
        french: p.french
      })
      if (error && !error.message.includes('duplicate')) console.log('ERR daily ' + p.word_key + ':', error.message)
    }
  }
  console.log('✅ word_daily: ' + dailyPhrases.length + ' phrases insérées')

  console.log('\n=== LOGS FINAUX ===')
  for (const [vnum, t] of Object.entries(translations)) {
    const words = t.segments.filter(s => !s.is_particle).map(s => s.word_key + ' → ' + s.sense_retenu + ' → "' + s.fr + '"').join(', ')
    console.log('VERSET 109:' + vnum + ' — ' + words)
    console.log('  Traduction : ' + t.translation_arab)
  }
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
