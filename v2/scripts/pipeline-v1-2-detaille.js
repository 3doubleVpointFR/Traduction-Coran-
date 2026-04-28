// Pipeline Maison — Verset 1:2 — AXES DÉTAILLÉS
// ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

const ROOTS = {
  hmd: { id: 252, senses: [
    { sense: 'louange', sense_ar: 'حَمْدٌ', description: 'Éloge adressé à quelqu\'un pour ses qualités ou ses actes. Contrairement à la gratitude (shukr) qui nécessite un bienfait reçu, la louange peut être donnée sans avoir reçu de faveur. Le Lane\'s note "the act of praising, eulogizing, commending" : c\'est une expression verbale d\'admiration pour ce que l\'autre est ou fait.', display_order: 1 },
    { sense: 'gratitude', sense_ar: 'حَمِدَ', description: 'Remercier quelqu\'un pour un bienfait reçu, avec admiration et respect. Quand la louange est motivée par une faveur accordée. Le Lane\'s précise que hamd dans ce sens se rapproche de shukr mais s\'en distingue : la gratitude est une louange conditionnée par un bienfait.', display_order: 2 },
    { sense: 'être satisfait', sense_ar: 'حَمِيد', description: 'Être content, approuver. Trouver que quelque chose est digne d\'éloge et de contentement. État intérieur de satisfaction face à quelque chose qui mérite l\'approbation.', display_order: 3 },
    { sense: 'être en colère', sense_ar: 'حَمِدَ', description: 'Sens secondaire attesté dans le Lane\'s dans la construction "hamida alayhi" : être en colère contre quelqu\'un. Usage rare et contextuel.', display_order: 4 },
    { sense: 'récompenser', sense_ar: 'حَمْد', description: 'Donner en retour, compenser. Le Lane\'s note le sens de récompense et de rétribution comme extension de la louange.', display_order: 5 },
  ]},
  rbb: { id: 253, senses: [
    { sense: 'augmenter', sense_ar: 'رَبَا', description: 'Croître, s\'accroître, devenir plus grand. Sens physique premier de la racine : la croissance naturelle des choses, l\'augmentation progressive.', display_order: 1 },
    { sense: 'élever', sense_ar: 'رَبَّى', description: 'Élever un enfant, le faire grandir, le nourrir et l\'éduquer. L\'acte de celui qui accompagne la croissance de l\'autre, qui prend en charge son développement complet du début à la maturité.', display_order: 2 },
    { sense: 'seigneur', sense_ar: 'رَبّ', description: 'Maître, celui qui possède et qui gère. Celui qui a l\'autorité et la responsabilité sur quelque chose ou quelqu\'un. Le Lane\'s donne "lord, master, owner, possessor" et ajoute que rabb implique l\'idée de nourrir et faire grandir ce qu\'on possède.', display_order: 3 },
    { sense: 'éminence', sense_ar: 'رُبْوَة', description: 'Colline, élévation de terrain. Extension physique de la croissance : ce qui a grandi et dépasse le reste du paysage.', display_order: 4 },
    { sense: 'usure', sense_ar: 'رِبًا', description: 'Addition obtenue dans le commerce par un moyen illicite. Augmentation injuste d\'une dette. Le Coran condamne cette forme de croissance.', display_order: 5 },
    { sense: 'entretenir', sense_ar: 'رَبَّ', description: 'Prendre soin de quelque chose, le maintenir en bon état. Gérer et administrer avec attention. Le Lane\'s note ce sens de "he reared, fostered, brought up".', display_order: 6 },
    { sense: 'essoufflement', sense_ar: 'رَبْو', description: 'État de celui qui est à bout de souffle, respiration coupée par la fatigue. Sens physique de gonflement intérieur.', display_order: 7 },
  ]},
  elm: { id: 254, senses: [
    { sense: 'savoir', sense_ar: 'عِلْم', description: 'Connaissance acquise, science. La qualité la plus haute comme attribut selon le Lane\'s. Certitude et compréhension profonde d\'une chose telle qu\'elle est réellement.', display_order: 1 },
    { sense: 'connaître', sense_ar: 'عَلِمَ', description: 'Prendre conscience de quelque chose, être informé. L\'acte d\'acquérir la connaissance, le passage de l\'ignorance au savoir.', display_order: 2 },
    { sense: 'marquer', sense_ar: 'عَلَمَ', description: 'Faire une marque distinctive, désigner par un signe. Sens physique de la racine : rendre visible et identifiable par une marque.', display_order: 3 },
    { sense: 'enseigner', sense_ar: 'عَلَّمَ', description: 'Transmettre un savoir à quelqu\'un. Forme II du verbe : faire en sorte que l\'autre sache, lui communiquer la connaissance.', display_order: 4 },
    { sense: 'monde', sense_ar: 'عَالَم', description: 'L\'ensemble des créatures, l\'univers. Ce par quoi on connaît le Créateur : le monde est un signe (une marque) de Celui qui l\'a créé. Le Lane\'s note que alam désigne "the beings, or things, that are in the universe" et le lie à la racine "marquer" car le monde est la marque visible du Créateur.', display_order: 5 },
    { sense: 'drapeau', sense_ar: 'عَلَم', description: 'Étendard, bannière. Marque distinctive visible de loin. Extension du sens de marquer vers un objet concret qui signale et identifie.', display_order: 6 },
    { sense: 'montagne', sense_ar: 'عَلَم', description: 'Repère naturel, ce qui sert de point de référence dans le paysage. Comme un drapeau naturel qui marque le territoire.', display_order: 7 },
    { sense: 'savant', sense_ar: 'عَالِم', description: 'Celui qui possède le savoir, le lettré. Extension humaine du savoir : la personne qui incarne la connaissance.', display_order: 8 },
  ]},
}

const AXES = {
  hmd: {
    louange: {
      status: 'retenu',
      axe1_verset: 'Le verset déclare "al-hamdu li-llahi" (la louange est pour Dieu). Le mot al-hamd est le sujet de la phrase, c\'est le concept central autour duquel tout le verset s\'organise. Le champ lexical est celui de la déclaration solennelle et de l\'attribution : on déclare que la louange revient à Dieu. La structure est une phrase nominale (pas de verbe), ce qui en arabe exprime une vérité permanente et universelle. La louange n\'est pas un acte ponctuel ici, c\'est un état de fait permanent : la louange appartient à Dieu par nature.',
      axe2_voisins: 'Les versets suivants qualifient Dieu par ses attributs : Seigneur des mondes (suite du v2), Miséricordieux (v3), Maître du Jour (v4). La louange ouvre cette série de qualifications : on loue d\'abord, puis on explique pourquoi. C\'est une progression logique : la louange est la conclusion naturelle de la découverte des attributs de Dieu, mais le texte la place en premier pour poser le cadre. Les versets 5-7 montreront l\'engagement de l\'humain, qui découle de cette louange initiale.',
      axe3_sourate: 'La Fatiha s\'ouvre par la louange après la formule d\'invocation (v1), ce qui pose le ton de toute la sourate : reconnaissance et éloge. La louange est le premier mot significatif de la sourate après la basmala, ce qui lui donne une importance structurelle majeure. Toute la relation entre l\'humain et Dieu dans la Fatiha est fondée sur cette louange initiale : on reconnaît avant de demander, on loue avant de prier.',
      axe4_coherence: 'Le Coran utilise "al-hamdu li-llahi" dans de nombreux passages comme formule de louange universelle. On la retrouve au début de plusieurs sourates (sourates 6, 18, 34, 35) et dans de nombreux contextes de reconnaissance. L\'usage est constant et univoque : al-hamd est toujours la louange, jamais la gratitude ni la satisfaction. Le Coran distingue clairement hamd (louange) de shukr (gratitude) en utilisant des mots différents pour chaque concept.',
      axe5_frequence: 'La louange est l\'attitude fondamentale du khalifa envers Dieu : reconnaître les qualités de Celui au nom duquel on agit. C\'est la reconnaissance qui motive l\'action juste, car on ne peut pas agir au nom de quelqu\'un qu\'on ne reconnaît pas. La louange n\'est pas conditionnelle (on ne loue pas parce qu\'on a reçu quelque chose), elle est permanente (on loue pour ce que Dieu est). Cette attitude fonde la dignité de la mission : le khalifa agit par reconnaissance, pas par intérêt.',
      proof_ctx: 'La louange est l\'éloge adressé pour les qualités ou les actes, sans condition de bienfait reçu, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). Test de compatibilité grammaticale : nom défini avec al-. "La louange" fonctionne parfaitement en français courant. Le verset dit "la louange est pour Dieu", c\'est une déclaration universelle et permanente. Distinction avec "gratitude" : la gratitude est conditionnelle, elle nécessite un bienfait reçu en amont (on remercie quelqu\'un POUR quelque chose). La louange est inconditionnelle, elle peut être donnée librement pour ce que l\'autre EST, pas seulement pour ce qu\'il a FAIT. La frontière philosophique est celle entre la reconnaissance de l\'être (louange) et la reconnaissance de l\'acte (gratitude). Le verset pose la louange comme universelle et permanente, ce qui exclut la conditionnalité de la gratitude.',
    },
    gratitude: {
      status: 'probable',
      axe1_verset: 'La gratitude est le remerciement pour un bienfait reçu, l\'expression de reconnaissance face à une faveur accordée. Le verset déclare "al-hamdu li-llahi" comme une vérité permanente, pas comme une réaction à un bienfait spécifique. La structure de phrase nominale en arabe exprime un état de fait universel, pas une réponse circonstancielle. La gratitude supposerait un bienfait identifié, alors que le verset ne mentionne aucun bienfait précis. Le champ lexical est celui de la déclaration permanente, pas du remerciement ponctuel.',
      axe2_voisins: 'Les versets voisins décrivent les qualités permanentes de Dieu (seigneurie, miséricorde, maîtrise), pas les bienfaits reçus par l\'humain. La séquence va de la louange aux attributs de Dieu, pas de la louange aux faveurs accordées. Si le verset exprimait la gratitude, on attendrait une mention des bienfaits en retour, mais les versets suivants continuent de décrire Dieu, pas ses dons. La progression est théologique (qui est Dieu), pas transactionnelle (qu\'a-t-Il donné).',
      axe3_sourate: 'La Fatiha pose une relation fondamentale, pas une transaction. La gratitude implique un échange (bienfait reçu → remerciement donné), alors que la sourate pose une relation de reconnaissance permanente. Le ton de la sourate est solennel et universel, pas circonstanciel. La louange ouvre un discours sur l\'identité de Dieu, la gratitude ouvrirait un discours sur les faveurs de Dieu.',
      axe4_coherence: 'Le Coran distingue hamd (louange) de shukr (gratitude). Les deux sont des concepts positifs mais ils ne sont pas interchangeables. Quand le Coran veut exprimer la gratitude, il utilise le verbe shakara et ses dérivés. Quand il veut exprimer la louange, il utilise hamida. Cette distinction lexicale est maintenue dans tout le Coran et montre que les deux concepts ont des champs sémantiques différents.',
      axe5_frequence: 'La gratitude est une vertu importante du khalifa mais elle est réactive : on remercie en réponse à un don. La louange est proactive : on loue sans attendre de recevoir. Pour le khalifa, la mission commence par la reconnaissance de ce que Dieu est (louange), pas par le remerciement de ce que Dieu a donné (gratitude). La gratitude viendra quand les bienfaits seront mentionnés, mais la Fatiha commence par l\'identité, pas par les dons.',
      proof_ctx: 'La gratitude est le remerciement conditionné par un bienfait reçu. La louange est l\'éloge inconditionnel pour ce que l\'autre est. Le verset dit "la louange est pour Dieu" comme une vérité permanente (phrase nominale), pas comme une réaction à un bienfait. La frontière philosophique : la gratitude crée une dette (on remercie parce qu\'on a reçu), la louange crée une relation (on loue parce qu\'on reconnaît). Le Coran distingue hamd de shukr avec des mots différents.',
    },
    'être satisfait': {
      status: 'peu_probable',
      axe1_verset: 'Être satisfait est un état intérieur, un sentiment de contentement personnel. Le verset "al-hamdu li-llahi" est une déclaration active, une expression verbale adressée à Dieu, pas un constat d\'état intérieur. Le champ lexical du verset est celui de la proclamation et de l\'attribution, pas de l\'introspection. La structure grammaticale (phrase nominale avec la préposition li = pour) indique que quelque chose est DONNÉ à Dieu (la louange), pas qu\'on RESSENT quelque chose (la satisfaction).',
      axe2_voisins: 'Les versets voisins sont des qualifications actives de Dieu : Seigneur des mondes, Miséricordieux, Maître du Jour. Chaque verset ajoute une couche de description. La satisfaction serait un repli sur soi (comment je me sens), alors que les versets sont tournés vers Dieu (qui Il est). La progression de la sourate est centrifuge (vers Dieu), pas centripète (vers soi).',
      axe3_sourate: 'La Fatiha est une prière active, une suite de déclarations et de demandes. La satisfaction est un état passif, un constat intérieur. La sourate agit (louer, qualifier, adorer, demander), elle ne constate pas des émotions. Le registre est celui de l\'engagement, pas de la contemplation intérieure.',
      axe4_coherence: 'Le Coran utilise hamd pour la louange exprimée, pas pour la satisfaction ressentie. Pour exprimer la satisfaction, le Coran utilise radiya (être satisfait) de la racine r-d-y. Cette distinction est constante : hamd est toujours une expression active dirigée vers l\'extérieur, jamais un état intérieur passif.',
      axe5_frequence: 'La satisfaction est un état personnel qui ne contribue pas directement à la mission du khalifa. La louange est un acte public qui engage le khalifa dans une relation de reconnaissance. Pour la mission de justice et de civilisation, c\'est l\'engagement actif (louange) qui compte, pas le confort intérieur (satisfaction).',
      proof_ctx: 'Être satisfait est un état intérieur passif. La louange est un acte extérieur actif. Le verset est une déclaration (on proclame), pas un constat (on ressent). Le Coran utilise radiya pour la satisfaction, pas hamd. La frontière : la satisfaction regarde en soi, la louange regarde vers Dieu.',
    },
    'être en colère': { status: 'nul', proof_ctx: 'Sens secondaire rare dans la construction spécifique "hamida alayhi" (être en colère contre quelqu\'un). Aucun rapport avec le verset qui est une déclaration de louange pour Dieu.' },
    'récompenser': { status: 'nul', proof_ctx: 'Sens de rétribution et de compensation. Le verset parle de louange donnée à Dieu, pas de récompense reçue de Dieu ou donnée par Dieu.' },
  },
  rbb: {
    seigneur: {
      status: 'retenu',
      axe1_verset: 'Le verset dit "rabbi l-alamin" (Seigneur des mondes). Le mot rabb est rattaché à alamin par une idafa (annexion), ce qui crée une relation de possession et de responsabilité : le Seigneur DES mondes, celui qui a autorité SUR la totalité de la création. Le champ lexical est celui de l\'autorité bienveillante et de la gouvernance universelle. Le mot rabb ne désigne pas un tyran qui domine mais un maître qui élève, nourrit et fait grandir ce qu\'il possède. C\'est le deuxième qualificatif de Dieu après la miséricorde, ce qui montre que la seigneurie est tempérée par la bonté.',
      axe2_voisins: 'Le verset 1 nomme Dieu et Le qualifie de miséricordieux. Le verset 2 ajoute la louange et la seigneurie. Le verset 3 rappelle la miséricorde. Le verset 4 ajoute la maîtrise du Jour de la rétribution. La progression va de la miséricorde (v1) à la seigneurie (v2) à la maîtrise (v4), montrant des facettes complémentaires de Dieu. La seigneurie (rabb) s\'inscrit entre la miséricorde et l\'autorité : celui qui élève avec tendresse et qui a le pouvoir sur le temps.',
      axe3_sourate: 'La Fatiha décrit Dieu sous plusieurs facettes pour poser les fondements de la relation avec l\'humain. La seigneurie est la première qualification active après la louange : Dieu n\'est pas seulement loué, Il est le Seigneur qui élève et entretient. Ce qualificatif donne à la louange son fondement : on loue Dieu PARCE QU\'Il est le Seigneur des mondes. La sourate construit un portrait cohérent où chaque attribut justifie le précédent.',
      axe4_coherence: 'Le Coran utilise rabb des milliers de fois pour Dieu. C\'est l\'un des mots les plus fréquents du texte coranique. L\'expression "rabbi l-alamin" (Seigneur des mondes) revient dans plusieurs sourates. L\'usage est constant : rabb désigne toujours celui qui possède avec autorité et qui élève avec soin. Le Coran ne confond jamais rabb (seigneur qui élève) avec malik (roi qui règne) ou ilah (divinité qui reçoit l\'adoration).',
      axe5_frequence: 'Le seigneur qui élève et entretient est le modèle du khalifa : diriger en nourrissant et en faisant grandir, pas en dominant ni en écrasant. La racine r-b-b porte l\'idée de croissance accompagnée : le rabb fait grandir ce qui est sous sa responsabilité. Pour le khalifa, la mission de justice et de civilisation passe par l\'éducation et le développement, pas par le contrôle. La dignité humaine est respectée quand on élève l\'autre au lieu de l\'asservir.',
      proof_ctx: 'Le "seigneur" (rabb) est celui qui possède, élève et entretient, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). Le Lane\'s donne la racine comme "augmenter, croître" et rabb comme celui qui fait croître et gère. Test de compatibilité grammaticale : le mot est en idafa avec al-alamin. "Seigneur des mondes" fonctionne parfaitement en français courant. Distinction avec "élever" : élever est le sens verbal de la racine (l\'action), seigneur est le nom d\'agent (celui qui fait l\'action). Le verset utilise le nom rabb (celui qui élève), pas le verbe rabba (élever). Les deux sont intimement liés mais le verset identifie la personne, pas l\'action. Distinction avec "entretenir" : entretenir est une des fonctions du rabb, mais ce n\'est qu\'une partie du sens. Le seigneur élève ET entretient ET possède avec autorité. "Entretenir" seul est trop partiel pour capturer la richesse du mot rabb.',
    },
    'élever': {
      status: 'probable',
      axe1_verset: 'Élever est le sens verbal de la racine r-b-b : faire grandir, nourrir, éduquer. Le verset utilise le nom rabb (celui qui élève), pas le verbe rabba (élever). Le champ lexical du verset est celui de l\'identité (qui est Dieu) pas de l\'action (ce qu\'Il fait). Cependant, le lien entre le nom et le verbe est direct : le rabb est par définition celui qui élève. Le sens "élever" est contenu dans "seigneur" comme l\'action est contenue dans l\'agent.',
      axe2_voisins: 'Les versets voisins qualifient Dieu par des noms (miséricordieux, maître), pas par des verbes d\'action. La progression de la sourate est celle d\'un portrait, pas d\'un récit d\'actions. Élever serait un verbe narratif (Dieu élève les mondes), alors que le verset est descriptif (Dieu est le Seigneur des mondes). La distinction est fine mais réelle : le verset dit ce que Dieu EST, pas ce qu\'Il FAIT.',
      axe3_sourate: 'La Fatiha pose des identités et des qualités permanentes. Élever est une action qui suppose un début et une fin (on élève un enfant jusqu\'à sa maturité). La seigneurie est un état permanent (on est seigneur en permanence). La sourate décrit des attributs éternels, pas des actions temporelles.',
      axe4_coherence: 'Le Coran utilise le verbe rabba dans d\'autres contextes pour l\'action d\'élever. Mais dans la formule "rabbi l-alamin", c\'est toujours le nom rabb qui est utilisé, jamais le verbe. Cette distinction est maintenue dans tout le Coran : la Fatiha identifie Dieu comme rabb (agent), elle ne raconte pas l\'action d\'élever (verbe).',
      axe5_frequence: 'Élever est l\'action fondamentale du khalifa envers ceux dont il a la charge : faire grandir, éduquer, accompagner le développement. C\'est une action concrète et noble. Cependant, dans le verset, c\'est l\'identité du Seigneur qui est posée, pas l\'action d\'élever. Le khalifa doit d\'abord reconnaître le Seigneur (identité) avant d\'imiter son action (élever).',
      proof_ctx: 'Élever est le sens verbal de la racine (l\'action de faire grandir). Le seigneur est le nom d\'agent (celui qui fait grandir). Le verset utilise le nom rabb, pas le verbe rabba. La frontière philosophique : l\'action (élever) est temporelle et ciblée, l\'identité (seigneur) est permanente et universelle. Le verset pose une identité permanente, pas une action ponctuelle. Cependant, le lien est intime : on ne peut pas être seigneur sans élever.',
    },
    entretenir: {
      status: 'probable',
      axe1_verset: 'Entretenir est une des fonctions du rabb : prendre soin, maintenir en bon état, gérer avec attention. Le verset dit "rabb al-alamin" (Seigneur des mondes), ce qui englobe l\'entretien mais ne s\'y réduit pas. Le champ lexical du verset est celui de l\'autorité globale, pas de la maintenance spécifique. Entretenir est une partie du tout : le seigneur entretient, mais il fait aussi bien plus (il élève, il possède, il gouverne).',
      axe2_voisins: 'Les versets voisins décrivent des attributs complets de Dieu (miséricordieux, maître), pas des actions partielles. L\'entretien serait une facette parmi d\'autres de la seigneurie. Les versets construisent un portrait global, pas une liste de tâches. Le mot rabb capture la totalité de la relation, l\'entretien n\'en capture qu\'un aspect.',
      axe3_sourate: 'La Fatiha pose des fondements larges et universels. L\'entretien est une activité spécifique et pratique. La sourate cherche à décrire la nature de Dieu dans sa globalité, pas à détailler ses activités. Le ton est celui de la grandeur et de l\'universalité, pas de la gestion quotidienne.',
      axe4_coherence: 'Le Coran utilise rabb dans un sens qui englobe l\'entretien mais le dépasse. Le mot rabb inclut la possession, l\'éducation, la protection et l\'entretien. Réduire rabb à "entretenir" serait perdre la richesse du mot. Le Coran n\'utilise pas rabb comme synonyme d\'entretenir : il l\'utilise comme titre d\'autorité bienveillante globale.',
      axe5_frequence: 'L\'entretien est une responsabilité concrète du khalifa : maintenir ce qui existe, prendre soin de ce qui lui est confié. C\'est une partie de la mission, pas sa totalité. Le khalifa doit entretenir mais aussi élever, développer, protéger. Le mot rabb capture cette mission globale, pas juste l\'aspect maintenance.',
      proof_ctx: 'Entretenir est une des fonctions du rabb (prendre soin, maintenir en bon état). Mais c\'est une partie du sens, pas le tout. Le seigneur élève ET entretient ET possède avec autorité. La frontière philosophique : entretenir est conservateur (maintenir ce qui existe), la seigneurie est dynamique (faire grandir ce qui est sous sa charge). Le verset parle d\'un Seigneur des mondes, pas d\'un gestionnaire des mondes.',
    },
    augmenter: { status: 'nul', proof_ctx: 'Sens physique premier de la racine (croître, devenir plus grand). Le verset parle de la relation entre Dieu et les mondes, pas de croissance physique.' },
    'éminence': { status: 'nul', proof_ctx: 'Colline, élévation de terrain. Extension physique de la croissance. Complètement hors du contexte du verset.' },
    usure: { status: 'nul', proof_ctx: 'Addition illicite dans le commerce. Augmentation injuste d\'une dette. Hors contexte.' },
    essoufflement: { status: 'nul', proof_ctx: 'État physique de fatigue, respiration coupée. Aucun rapport avec le verset.' },
  },
  elm: {
    monde: {
      status: 'retenu',
      axe1_verset: 'Le verset dit "rabbi l-alamin" (Seigneur des mondes). Le mot alamin est le pluriel de alam (monde), et il désigne l\'ensemble de la création dans sa totalité. Le champ lexical est celui de l\'universalité et de la création : la seigneurie de Dieu ne se limite pas à un groupe ou à une espèce, elle englobe TOUS les mondes. Le pluriel est significatif : ce ne sont pas "le monde" mais "les mondes", ce qui inclut tout ce qui existe, visible et invisible, humain et non-humain.',
      axe2_voisins: 'Les versets voisins élargissent progressivement la portée de la description de Dieu : miséricordieux (v1/3), Seigneur des mondes (v2), Maître du Jour (v4). Le passage de la miséricorde (qualité morale) aux mondes (étendue spatiale) au Jour (étendue temporelle) montre une expansion progressive. Les mondes représentent la dimension spatiale de la seigneurie de Dieu : Il est Seigneur de tout l\'espace, de tout ce qui existe.',
      axe3_sourate: 'La Fatiha pose Dieu comme Seigneur de tout ce qui existe, sans exception ni limite. Les "mondes" établissent l\'universalité de cette seigneurie : elle ne concerne pas un peuple, une nation ou une espèce, mais la totalité de la création. Ce thème d\'universalité traverse toute la sourate : la louange est universelle, la miséricorde est universelle, la seigneurie est universelle.',
      axe4_coherence: 'Le Coran utilise alamin dans de nombreux passages pour désigner l\'ensemble de la création. L\'expression "rabbi l-alamin" est récurrente et son sens est constant : les mondes sont la totalité des êtres créés. Le Lane\'s note que alam dérive de la racine "marquer" : le monde est ce par quoi on connaît le Créateur, car la création est la marque visible de Celui qui l\'a faite. Cette étymologie profonde relie le monde au savoir par la racine commune.',
      axe5_frequence: 'Les mondes incluent tous les êtres, donc tous les porteurs de dignité humaine et au-delà. Le khalifa est responsable non seulement des humains mais de l\'ensemble de la création qui l\'entoure. La seigneurie universelle de Dieu fonde la responsabilité universelle du khalifa : si Dieu est Seigneur de tout, le khalifa doit prendre soin de tout. La dignité ne se limite pas aux humains : elle s\'étend à tout ce que Dieu a créé.',
      proof_ctx: 'Le "monde" (alam) est l\'ensemble des créatures, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). Le pluriel alamin (les mondes) indique la totalité de la création. Le Lane\'s lie ce mot à la racine "marquer" : le monde est ce par quoi on connaît le Créateur, un signe qui pointe vers Celui qui l\'a fait. Test de compatibilité grammaticale : nom défini avec al-. "Les mondes" fonctionne parfaitement. Distinction avec "savoir" : le savoir (ilm) est la connaissance acquise, le monde (alam) est ce qui est connu. Les deux viennent de la même racine car le monde est la marque visible du Créateur, mais le verset utilise le nom alam (monde), pas le nom ilm (savoir). La frontière philosophique : le savoir est dans l\'esprit de celui qui connaît, le monde est la réalité extérieure qui est connue. Le verset parle de la seigneurie sur la réalité extérieure (les mondes), pas sur la connaissance intérieure (le savoir).',
    },
    savoir: {
      status: 'probable',
      axe1_verset: 'Le savoir est le sens premier du verbe de la racine e-l-m : la connaissance, la science, la certitude. Le verset utilise le nom alam (monde), pas ilm (savoir). Le champ lexical du verset est celui de la seigneurie sur la création, pas de la connaissance. Cependant, le lien étymologique entre alam (monde) et ilm (savoir) est profond et réel : le monde est appelé alam parce qu\'il est le signe par lequel on SAIT que le Créateur existe.',
      axe2_voisins: 'Les versets voisins décrivent les attributs de Dieu dans sa relation avec la création, pas le savoir en soi. Le savoir n\'apparaît pas dans la série des qualificatifs de la Fatiha (miséricordieux, seigneur, maître). Le contexte est celui de l\'autorité et de la bonté, pas de la connaissance. Cependant, la seigneurie implique la connaissance de ce qu\'on gouverne.',
      axe3_sourate: 'La Fatiha pose des attributs relationnels de Dieu (comment Dieu est en relation avec la création), pas des attributs intellectuels (ce que Dieu sait). Le savoir est un attribut important de Dieu dans le Coran mais il n\'est pas le sujet de la Fatiha. La sourate parle de miséricorde, de seigneurie, de maîtrise, d\'adoration et de guidance, pas de science.',
      axe4_coherence: 'Le Coran distingue clairement alam (monde) de ilm (savoir). Les deux mots viennent de la même racine mais ont des sens différents et des usages distincts. Quand le Coran veut parler du savoir de Dieu, il utilise ilm ou alim, pas alam. La formule "rabbi l-alamin" est toujours traduite et comprise comme "Seigneur des mondes", jamais comme "Seigneur des savoirs".',
      axe5_frequence: 'Le savoir est fondamental pour le khalifa : c\'est par la connaissance qu\'il peut exercer sa mission de justice. Cependant, dans le verset, c\'est le monde (ce qui est gouverné) qui est mentionné, pas le savoir (comment on gouverne). Le khalifa a besoin des deux mais le verset pose d\'abord l\'objet de la seigneurie (les mondes), pas l\'outil de la seigneurie (le savoir).',
      proof_ctx: 'Le savoir (ilm) est le sens verbal premier de la racine. Le monde (alam) est un nom dérivé. Le verset utilise alamin (pluriel de alam = monde), pas ilm (savoir). La frontière philosophique : le savoir est intérieur (dans l\'esprit), le monde est extérieur (dans la réalité). Le verset parle de la seigneurie sur la réalité extérieure. Le lien étymologique est réel (le monde est la marque par laquelle on sait) mais le sens utilisé dans le verset est "monde", pas "savoir".',
    },
    marquer: { status: 'nul', proof_ctx: 'Faire une marque distinctive. Sens physique premier de la racine. Le verset parle des mondes, pas de marques. Le lien étymologique existe (le monde est une marque du Créateur) mais ce n\'est pas le sens utilisé.' },
    enseigner: { status: 'nul', proof_ctx: 'Transmettre un savoir (forme II). Le verset parle de la seigneurie sur les mondes, pas de l\'enseignement.' },
    drapeau: { status: 'nul', proof_ctx: 'Étendard, marque visible. Extension physique du sens de marquer. Complètement hors du contexte du verset.' },
    montagne: { status: 'nul', proof_ctx: 'Repère naturel dans le paysage. Hors contexte de la seigneurie universelle.' },
    savant: { status: 'nul', proof_ctx: 'Celui qui possède le savoir. Le verset parle des mondes gouvernés, pas des personnes savantes.' },
    'connaître': { status: 'nul', proof_ctx: 'Prendre conscience de quelque chose. Le verset utilise alam (monde), pas le verbe alima (connaître). Ce sont deux formes différentes de la même racine avec des sens distincts.' },
  },
}

// ÉTAPE 4
const VERSE = {
  verse_id: 2,
  words: [
    {verse_id:2, word_key:'hmd', sense_chosen:'louange', position:1},
    {verse_id:2, word_key:'alh', sense_chosen:'divinité', position:3},
    {verse_id:2, word_key:'rbb', sense_chosen:'seigneur', position:4},
    {verse_id:2, word_key:'elm', sense_chosen:'monde', position:5},
  ],
  translation_arab: "La louange est pour Dieu, Seigneur des mondes.",
  translation_explanation: "Al-hamdu (la louange) est le sujet de la phrase. En arabe, quand une phrase commence par un nom et pas par un verbe, on appelle ça une phrase nominale (jumla ismiyya), et ça donne un sens de vérité permanente : la louange est pour Dieu, ça a toujours été et ça sera toujours. La particule li (pour) indique à qui elle est destinée : la louange revient à Dieu. Ensuite, rabbi l-alamin : le mot rabb est rattaché à alamin par ce qu'on appelle en arabe une idafa (annexion), c'est quand deux mots sont liés pour dire que le premier appartient ou est lié au second, comme quand on dit \"la porte de la maison\". Ici : le Seigneur des mondes. Le mot rabb vient d'une racine qui signifie faire grandir, élever et entretenir. Le pluriel \"mondes\" (alamin) montre que cette seigneurie ne concerne pas seulement les humains mais toute la création.",
  segments: [
    {fr:"la louange",pos:"nom",phon:"al-hamdu",arabic:"ٱلْحَمْدُ",word_key:"hmd",is_particle:false,sense_retenu:"louange"},
    {fr:"pour",phon:"li",arabic:"لِ",word_key:null,is_particle:true},
    {fr:"Dieu",pos:"nom",phon:"allahi",arabic:"ٱللَّهِ",word_key:"alh",is_particle:false,sense_retenu:"divinité"},
    {fr:"Seigneur",pos:"nom",phon:"rabbi",arabic:"رَبِّ",word_key:"rbb",is_particle:false,sense_retenu:"seigneur"},
    {fr:"des mondes",pos:"nom",phon:"al-alamin",arabic:"ٱلْعَـٰلَمِينَ",word_key:"elm",is_particle:false,sense_retenu:"monde"},
  ],
}

const DAILY = [
  {analysis_id:252,sense:'louange',arabic:'اَلْحَمْدُ لِلَّهِ',phon:'al-hamdu li-llahi',french:'La louange est pour Dieu'},
  {analysis_id:252,sense:'louange',arabic:'حَمِدْتُهُ عَلَى صَنِيعِهِ',phon:'hamidtuhu ala sanihi',french:"Je l'ai loué pour son acte"},
  {analysis_id:252,sense:'louange',arabic:'هُوَ مَحْمُودٌ عِنْدَ النَّاسِ',phon:'huwa mahmud inda n-nas',french:'Il est loué chez les gens'},
  {analysis_id:253,sense:'seigneur',arabic:'رَبِّ ٱلْعَالَمِينَ',phon:'rabbi l-alamin',french:'Seigneur des mondes'},
  {analysis_id:253,sense:'seigneur',arabic:'رَبَّيْتُ وَلَدِي',phon:'rabbaytu waladi',french:"J'ai élevé mon enfant"},
  {analysis_id:253,sense:'seigneur',arabic:'مَنْ رَبُّكَ؟',phon:'man rabbuka?',french:'Qui est ton seigneur ?'},
  {analysis_id:254,sense:'monde',arabic:'رَبِّ ٱلْعَالَمِينَ',phon:'rabbi l-alamin',french:'Seigneur des mondes'},
  {analysis_id:254,sense:'monde',arabic:'ٱلْعَالَمُ كَبِيرٌ',phon:'al-alamu kabir',french:'Le monde est grand'},
  {analysis_id:254,sense:'monde',arabic:'عَلَّمْتُهُ ٱلْقِرَاءَةَ',phon:'allamtuhu l-qiraata',french:"Je lui ai enseigné la lecture"},
]

async function run() {
  log('============================================')
  log('  PIPELINE MAISON — VERSET 1:2 — AXES DÉTAILLÉS')
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
      if (axeData.axe1_verset) { upd.axe1_verset = axeData.axe1_verset; upd.axe2_voisins = axeData.axe2_voisins; upd.axe3_sourate = axeData.axe3_sourate; upd.axe4_coherence = axeData.axe4_coherence; upd.axe5_frequence = axeData.axe5_frequence }
      const {error} = await db.from('word_meanings').update(upd).eq('id', m.id)
      if (error) { log('    ERREUR ' + m.sense + ': ' + error.message); continue }
      const hasAxes = axeData.axe1_verset ? ' (5 axes détaillés)' : ''
      if (axeData.axe1_verset) totalWithAxes++
      log('    ' + m.sense + ' -> ' + axeData.status.toUpperCase() + hasAxes)
      updatedCount++
    }
    log('')
  }
  log('  ' + updatedCount + ' sens mis à jour dont ' + totalWithAxes + ' avec axes détaillés')
  log('')

  log('>>> ÉTAPE 4 — TRADUCTION')
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(VERSE.words)
  if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)
  else log('  ' + VERSE.words.length + ' verse_word_analyses insérés')
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
  log('  VERSET 1:2 — TERMINÉ (axes détaillés)')
  log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
