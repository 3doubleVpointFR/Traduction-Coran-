// Pipeline Maison — Verset 1:1 — AXES DÉTAILLÉS
// بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
// Source : Lane's Arabic-English Lexicon (Edward Lane, 1863)
// Règles : rules_pipeline_maison.md
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

// ═══════════════════════════════════════
// ÉTAPE 2 — SENS ÉTYMOLOGIQUES
// ═══════════════════════════════════════

const ROOTS = {
  smw: { id: 249, senses: [
    { sense: 'être haut', sense_ar: 'سَمَا', description: 'Être élevé, haut, en position haute. Sens physique premier de la racine : ce qui se dresse vers le haut, qui dépasse en hauteur.', display_order: 1 },
    { sense: 'ciel', sense_ar: 'سَمَاء', description: 'La voûte céleste, le toit du monde, ce qui est au-dessus de la terre. Aussi : tout ce qui sert de toit ou de couverture au-dessus de quelque chose.', display_order: 2 },
    { sense: 'pluie', sense_ar: 'سَمَاء', description: 'L\'eau qui tombe du ciel, la bonne pluie. Extension du sens de ciel : ce qui vient d\'en haut.', display_order: 3 },
    { sense: 'nom', sense_ar: 'اِسْم', description: 'Désignation ou appellation d\'une chose. Ce par quoi on identifie et on distingue quelque chose des autres. Le Lane\'s note que le mot ism est dérivé de la racine s-m-w par l\'idée d\'élévation : le nom élève la chose en la rendant identifiable et distincte parmi les autres.', display_order: 4 },
    { sense: 'nommer', sense_ar: 'سَمَّى', description: 'Donner un nom à quelqu\'un ou quelque chose, le désigner par une appellation. Aussi : prononcer le nom de Dieu sur quelque chose (nourriture, animal sacrifié). La forme II (samma) ajoute l\'idée de faire activement l\'action de nommer, par opposition au nom qui est le résultat.', display_order: 5 },
    { sense: 'noble', sense_ar: 'سَامٍ', description: 'Celui qui est haut en rang, élevé en dignité. Extension abstraite de la hauteur physique vers la noblesse sociale.', display_order: 6 },
    { sense: 'aspirer', sense_ar: 'سَمَا', description: 'Tendre vers le haut, avoir l\'ambition d\'atteindre des choses élevées. L\'oeil ou l\'esprit qui se lève vers quelque chose.', display_order: 7 },
    { sense: 'surpasser', sense_ar: 'سَمَا', description: 'Dépasser en nombre ou en rang. Aller au-delà d\'une certaine mesure.', display_order: 8 },
    { sense: 'apparence', sense_ar: 'سَمَاوَة', description: 'La forme ou la figure que l\'on voit de loin. L\'aspect extérieur de quelque chose.', display_order: 9 },
    { sense: 'chasser', sense_ar: 'سَمَا', description: 'Poursuivre le gibier, chasser les animaux sauvages. Sens attesté dans le Lane\'s.', display_order: 10 },
  ]},
  alh: { id: 250, senses: [
    { sense: 'adorer', sense_ar: 'أَلَهَ', description: 'Servir, vouer un culte, se dévouer à quelqu\'un ou quelque chose. Le Lane\'s donne : "he served, worshipped, or adored". Sens premier de la racine qui exprime la dévotion totale, l\'acte de se tourner vers quelque chose avec une soumission complète.', display_order: 1 },
    { sense: 'divinité', sense_ar: 'إِلٰه', description: 'Objet d\'adoration, ce vers quoi on se tourne avec dévotion. Tout ce qui est adoré, qu\'il soit légitime ou non. Le Lane\'s précise que ilah est "any object of worship", c\'est le concept qui désigne ce qui reçoit l\'adoration, indépendamment de sa nature.', display_order: 2 },
    { sense: 'être perplexe', sense_ar: 'أَلِهَ', description: 'Être confondu, désorienté, incapable de voir la bonne direction. L\'état de celui qui ne sait plus où aller, qui a perdu ses repères. Le Lane\'s note ce sens comme un état de confusion mentale profonde.', display_order: 3 },
    { sense: 'se lamenter', sense_ar: 'أَلِهَ', description: 'Manifester une détresse véhémente, une agitation intense de chagrin. Le bouleversement intérieur qui déborde vers l\'extérieur. Le Lane\'s donne "he was, or became, confounded, or perplexed, and unable to see his right course".', display_order: 4 },
    { sense: 'chercher refuge', sense_ar: 'أَلَهَ', description: 'Se tourner vers quelqu\'un pour demander protection, chercher un abri ou un secours. L\'acte de celui qui, dans le besoin, se dirige vers ce qui peut le protéger. Ce sens lie l\'adoration au besoin de protection.', display_order: 5 },
    { sense: 'demeurer', sense_ar: 'أَلَهَ', description: 'Rester, séjourner, habiter dans un lieu. S\'installer quelque part de manière stable.', display_order: 6 },
    { sense: 'protéger', sense_ar: 'أَلَهَ', description: 'Accorder un refuge, préserver, sauver du mal. L\'acte de celui qui protège, le versant actif de "chercher refuge".', display_order: 7 },
    { sense: 'serpent', sense_ar: 'إِلَاهَة', description: 'Le grand serpent. Objet d\'adoration dans l\'Arabie ancienne.', display_order: 8 },
    { sense: 'soleil', sense_ar: 'إِلَاهَة', description: 'Le soleil, appelé ainsi car il était adoré. Extension du sens de divinité vers l\'objet céleste vénéré.', display_order: 9 },
    { sense: 'lune', sense_ar: 'إِلَاهَة', description: 'La nouvelle lune (hilal). Autre objet céleste vénéré dans l\'Arabie ancienne.', display_order: 10 },
  ]},
  rhm: { id: 251, senses: [
    { sense: 'miséricorde', sense_ar: 'رَحْمَة', description: 'Tendresse du coeur, inclination qui pousse à accorder faveur et bienfaisance. Le mouvement intérieur qui pousse à faire du bien à l\'autre. Le Lane\'s donne "tenderness of heart, compassion, pity, mercy". C\'est un état permanent qui se manifeste par des actes concrets de bonté.', display_order: 1 },
    { sense: 'pardonner', sense_ar: 'رَحِمَ', description: 'Accorder le pardon, excuser une faute. L\'acte ponctuel de celui qui efface l\'erreur de l\'autre. Le pardon est une manifestation de la miséricorde mais il ne la résume pas : on peut être miséricordieux sans avoir de faute à pardonner.', display_order: 2 },
    { sense: 'utérus', sense_ar: 'رَحِم', description: 'L\'organe maternel, la matrice, le lieu d\'origine du jeune dans le ventre. Sens physique premier de la racine : le lieu où la vie se forme dans la douceur et la protection. C\'est de ce sens concret que dérive la miséricorde : la douceur protectrice de la mère pour ce qui grandit en elle.', display_order: 3 },
    { sense: 'lien de parenté', sense_ar: 'رَحِم', description: 'La relation de sang, les liens de famille, la connexion par la naissance. Extension de l\'utérus : ceux qui partagent la même matrice sont liés entre eux par un lien indissoluble. Le Lane\'s note "relationship, or nearness of kin".', display_order: 4 },
    { sense: 'pluie', sense_ar: 'رَحْمَة', description: 'La pluie comme manifestation concrète de la miséricorde. L\'eau qui tombe du ciel et nourrit la terre et ses habitants. Le Coran utilise rahma dans ce sens concret dans plusieurs passages.', display_order: 5 },
    { sense: 'subsistance', sense_ar: 'رَحْمَة', description: 'Les moyens de vivre, ce qui nourrit et fait vivre. Extension de la miséricorde vers le concret : ce dont on a besoin pour survivre.', display_order: 6 },
    { sense: 'abondance', sense_ar: 'رَحْمَة', description: 'La profusion d\'herbage et de biens nécessaires à la vie. Quand la miséricorde se manifeste par la générosité de la terre.', display_order: 7 },
    { sense: 'révérer', sense_ar: 'اِحْتَرَمَ', description: 'Tenir en respect, honorer, traiter avec révérence. Forme VIII de la racine : le respect profond envers quelqu\'un qui mérite considération.', display_order: 8 },
  ]},
}

// ═══════════════════════════════════════
// ÉTAPE 3 — AXES DÉTAILLÉS (5-6 phrases par axe)
// ═══════════════════════════════════════

const AXES = {
  smw: {
    nom: {
      status: 'retenu',
      axe1_verset: 'Le verset est la formule d\'ouverture "bi-smi llahi" (au nom de Dieu). Le champ lexical est celui de l\'invocation et de l\'identification : on commence par nommer avant de décrire. Le mot ism (nom) est le pivot de la formule, c\'est lui qui relie la préposition bi (au/avec) au nom propre Allah. Sans le mot "nom", la formule perd sa structure : on ne dirait pas "avec Dieu" mais "au nom de Dieu", ce qui implique l\'autorité et l\'identité. Le nom est l\'outil qui permet d\'invoquer, de désigner et de placer ce qui suit sous une autorité identifiée.',
      axe2_voisins: 'Le verset 1 ouvre la sourate et le Coran tout entier. Les versets suivants qualifient Dieu par ses attributs : Seigneur des mondes (v2), le Miséricordieux (v3), Maître du Jour (v4). Le "nom" est ce qui introduit cette série de qualifications : d\'abord on identifie par le nom, ensuite on développe les attributs. Cette progression est logique et naturelle : on ne peut pas décrire quelqu\'un avant de l\'avoir nommé. Le verset 1 pose l\'identité, les versets 2-4 posent les qualités.',
      axe3_sourate: 'La Fatiha est la sourate d\'ouverture du Coran, celle qui pose le cadre de tout ce qui va suivre. Commencer par "au nom de" c\'est poser l\'autorité sous laquelle le texte se place. C\'est une formule d\'ouverture solennelle que l\'on retrouve dans les traditions anciennes : on ouvre un discours en invoquant le nom de l\'autorité. Le thème central de la Fatiha est la relation entre l\'humain et Dieu, et cette relation commence par l\'identification : qui est Dieu, quel est Son nom, quels sont Ses attributs.',
      axe4_coherence: 'Le Coran utilise "bi-smi llahi r-rahmani r-rahim" comme formule d\'ouverture au début de 113 sourates sur 114. L\'usage est constant, systématique et univoque : c\'est toujours le nom (ism), jamais la hauteur, le ciel ou un autre sens de la racine s-m-w. Cette répétition dans tout le Coran confirme que le sens "nom" est le seul applicable dans cette construction. Aucun verset coranique n\'utilise bi-smi dans un autre sens que "au nom de".',
      axe5_frequence: 'Nommer est l\'acte fondamental qui permet au khalifa de connaître, d\'identifier et d\'entrer en relation. Sans nom, pas d\'identité, pas de distinction entre les choses, pas de communication possible. Commencer par le nom de Dieu c\'est reconnaître Son identité avant d\'agir, c\'est placer ses actes sous une autorité reconnue. Cette formule enseigne au khalifa que toute action commence par la reconnaissance de ce qui la fonde. La dignité humaine elle-même repose sur la capacité à nommer et à être nommé.',
      proof_ctx: '"Nom" est le seul sens qui structure la formule d\'ouverture "bi-smi llahi" (au nom de Dieu). Test de compatibilité grammaticale : le mot est en idafa (annexion) avec Allah. "Nom de Dieu" fonctionne parfaitement en français courant. En revanche, "hauteur de Dieu", "ciel de Dieu" ou "pluie de Dieu" ne fonctionnent pas dans cette construction grammaticale. Le Coran utilise cette formule au début de presque chaque sourate, toujours dans le sens de "nom", ce qui confirme que c\'est le seul sens viable. Distinction avec "nommer" : "nommer" est l\'action verbale (samma, forme II), "nom" est le résultat de cette action (ism). Le verset utilise le nom (le résultat), pas le verbe (l\'action). Les deux sont liés par la même racine mais le verset choisit l\'objet, pas le processus.',
    },
    nommer: {
      status: 'probable',
      axe1_verset: 'Nommer est l\'action de donner un nom, de désigner quelque chose par une appellation. Le verset utilise le résultat de cette action (ism = le nom), pas l\'action elle-même (samma = nommer). Le champ lexical du verset est celui de l\'invocation par le nom, pas de l\'acte de nommer. Cependant, le lien entre nommer et nom est direct et intime : il n\'y a pas de nom sans l\'acte de nommer. Le verset présuppose que Dieu a été nommé pour qu\'on puisse invoquer Son nom.',
      axe2_voisins: 'Les versets suivants qualifient Dieu par ses attributs, ce qui est une forme de description et de nomination. Nommer est compatible avec cette progression : d\'abord on nomme (v1), puis on décrit (v2-4). Cependant, les versets voisins développent les qualités, ils ne racontent pas l\'acte de nommer. Le verset 1 utilise le nom comme outil d\'invocation, pas comme récit de l\'acte de nommer.',
      axe3_sourate: 'La Fatiha s\'ouvre par une formule d\'invocation, pas par un récit. Nommer serait un acte narratif (on raconte qu\'on nomme), alors que le verset est performatif (on invoque le nom). La sourate est une prière, pas un récit de comment Dieu a été nommé. Le sens "nommer" est donc en décalage avec la fonction du verset dans la sourate.',
      axe4_coherence: 'Le Coran distingue clairement ism (le nom) de samma (nommer). Dans la construction "bi-smi llahi", c\'est toujours le nom qui est utilisé, jamais le verbe nommer. Le Coran utilise samma dans d\'autres contextes (nommer un enfant, donner des noms aux choses), mais jamais dans la formule d\'ouverture. Cette distinction est constante et cohérente dans tout le texte.',
      axe5_frequence: 'Nommer est un acte qui permet au khalifa de connaître et de classer le monde. C\'est une capacité fondamentale mentionnée dans le Coran quand Dieu enseigne les noms à Adam. Cependant, dans ce verset précis, il ne s\'agit pas de l\'acte de nommer mais de l\'utilisation du nom déjà établi pour invoquer. La mission du khalifa commence par la reconnaissance d\'un nom existant, pas par la création d\'un nouveau nom.',
      proof_ctx: '"Nommer" est l\'action verbale dont "nom" est le résultat. Les deux partagent la même racine s-m-w et sont intimement liés. Cependant, le verset utilise la forme nominale ism (nom), pas la forme verbale samma (nommer). La formule "bi-smi" est une invocation qui utilise un nom déjà connu, pas un récit de l\'acte de nommer. La frontière philosophique entre les deux : le nom est un outil de relation (on invoque quelqu\'un par son nom), nommer est un acte de pouvoir (on donne une identité à quelque chose). Le verset place l\'humain dans la relation, pas dans le pouvoir.',
    },
    'être haut': { status: 'nul', proof_ctx: 'Sens physique premier de la racine (être élevé). La construction "bi-smi" est une formule figée en arabe qui signifie "au nom de". "À la hauteur de Dieu" ne fonctionne pas dans cette construction grammaticale.' },
    ciel: { status: 'nul', proof_ctx: 'Le ciel est une extension de la hauteur physique. "Au ciel de Dieu" ne fonctionne pas dans la construction bi-smi qui exige un sens compatible avec l\'invocation.' },
    pluie: { status: 'nul', proof_ctx: 'La pluie vient du ciel. "À la pluie de Dieu" n\'a aucun sens dans cette construction d\'invocation.' },
    noble: { status: 'nul', proof_ctx: 'Extension abstraite de la hauteur vers la noblesse sociale. "Au noble de Dieu" ne fonctionne pas dans la construction bi-smi.' },
    aspirer: { status: 'nul', proof_ctx: 'Tendre vers le haut, ambition. "À l\'aspiration de Dieu" n\'a pas de sens dans cette formule d\'invocation.' },
    surpasser: { status: 'nul', proof_ctx: 'Dépasser en rang. "Au surpassement de Dieu" ne fonctionne pas dans cette construction.' },
    apparence: { status: 'nul', proof_ctx: 'La forme vue de loin. "À l\'apparence de Dieu" ne fonctionne pas dans cette construction.' },
    chasser: { status: 'nul', proof_ctx: 'Poursuivre le gibier. Aucun rapport avec une formule d\'invocation divine.' },
  },
  alh: {
    'divinité': {
      status: 'retenu',
      axe1_verset: 'Le verset invoque Dieu par Son nom (Allah). Le champ lexical est celui de l\'identité divine et de l\'invocation. "Divinité" est le concept fondamental que le nom Allah porte : ce qui est adoré, l\'objet ultime de la dévotion. Dans le verset, les qualificatifs qui suivent (ar-rahman, ar-rahim) décrivent les attributs de cette Divinité, mais c\'est d\'abord Son identité qui est posée par le nom Allah. Le mot "divinité" capture exactement ce que le nom Allah désigne : l\'être qui reçoit l\'adoration.',
      axe2_voisins: 'Les versets suivants développent les attributs de cette Divinité : Seigneur des mondes (v2), Miséricordieux (v3), Maître du Jour (v4). Le verset 1 la nomme et la qualifie de miséricordieuse, les versets 2-4 approfondissent ces qualités. La progression est cohérente : d\'abord l\'identité (la Divinité), puis les caractéristiques (seigneurie, miséricorde, maîtrise). C\'est un portrait qui se construit verset après verset, à partir de l\'identité fondamentale posée au verset 1.',
      axe3_sourate: 'La Fatiha pose la relation entre l\'humain et la Divinité. Nommer la Divinité en premier est le fondement de cette relation : on ne peut pas se tourner vers quelqu\'un qu\'on n\'a pas identifié. La sourate passe ensuite de la description de la Divinité (v1-4) à l\'engagement de l\'humain (v5-7). Le concept de divinité est le socle sur lequel toute la sourate repose : c\'est parce qu\'il y a une Divinité qu\'il y a de la louange, de la miséricorde, de la rétribution, de l\'adoration et de la guidance.',
      axe4_coherence: 'Le Coran utilise le nom Allah comme nom propre de la Divinité des milliers de fois. Le mot ilah (divinité) est le concept dont Allah est le nom propre, comme "humain" est le concept dont un prénom est le nom propre. Le Coran fait cette distinction explicitement : "la ilaha illa llah" (il n\'y a de divinité que Dieu). Le concept de divinité (ilah) est universel (tout ce qui est adoré), le nom Allah est spécifique (la Divinité véritable). Cette cohérence traverse tout le texte coranique sans exception.',
      axe5_frequence: 'Reconnaître la Divinité est le fondement de la mission du khalifa. Sans cette reconnaissance, il n\'y a pas de cadre pour la justice ni la civilisation : la dignité humaine est accordée par cette Divinité et la mission de justice découle de cette relation. Le khalifa agit au nom de Dieu, c\'est-à-dire sous l\'autorité de la Divinité qu\'il a reconnue. La formule "au nom de Dieu" place chaque acte sous cette autorité, ce qui implique une responsabilité permanente.',
      proof_ctx: '"Divinité" est l\'objet d\'adoration, le concept fondamental dont Allah est le nom propre. Test de compatibilité grammaticale : le mot est défini (avec al- intégré dans Allah). "La Divinité" fonctionne naturellement en français. Le Coran fait la distinction entre ilah (le concept, ce qui est adoré) et Allah (le nom propre). Distinction avec "adorer" : adorer est l\'action du fidèle qui se tourne vers la Divinité. La divinité est ce vers quoi on se tourne. Le verset nomme l\'objet de l\'invocation (Allah = la Divinité), il ne décrit pas l\'action d\'adorer, qui viendra au verset 5 (iyyaka nabudu). La frontière philosophique est celle entre l\'agent et l\'objet : adorer est ce que fait l\'humain, la divinité est ce qu\'est Dieu.',
    },
    adorer: {
      status: 'probable',
      axe1_verset: 'Adorer est le sens premier de la racine : servir, vouer un culte, se dévouer entièrement. Le verset 1 utilise le nom Allah, qui dérive de cette racine. Le champ lexical du verset est celui de l\'invocation, pas de l\'adoration active. On ne dit pas "au adorer de Dieu" mais "au nom de Dieu". L\'adoration est le fondement étymologique du nom, mais ce n\'est pas le sens utilisé dans le verset. Le verset pose l\'identité de Celui qu\'on adorera plus tard.',
      axe2_voisins: 'L\'adoration est mentionnée explicitement au verset 5 (iyyaka nabudu = c\'est Toi seul que nous adorons). Le verset 1 identifie la Divinité, le verset 5 déclare l\'adoration. Cette progression montre que le verset 1 n\'est pas le lieu de l\'adoration mais celui de l\'identification. Les versets 2-4 décrivent les attributs de Dieu, ce qui précède logiquement l\'engagement de l\'adoration au verset 5.',
      axe3_sourate: 'La sourate est structurée en deux moitiés : la description de Dieu (v1-4) et l\'engagement de l\'humain (v5-7). L\'adoration appartient à la deuxième moitié. Le verset 1 est une formule d\'ouverture qui pose l\'identité, pas un acte d\'adoration. La sourate sépare clairement ces deux fonctions : connaître d\'abord (nommer), puis s\'engager (adorer).',
      axe4_coherence: 'Le Coran distingue le nom Allah (l\'identité de la Divinité) de l\'acte d\'adorer (ibada). Les deux sont liés par la racine commune mais le Coran ne les confond pas. Allah est utilisé des milliers de fois comme nom propre, pas comme verbe d\'adoration. L\'acte d\'adorer utilise le verbe abada (une autre racine, e-b-d), pas la racine a-l-h.',
      axe5_frequence: 'Adorer est une action du khalifa, un engagement personnel. La divinité est l\'objet de cet engagement. Le verset 1 pose l\'objet (qui est Dieu), le verset 5 pose l\'action (nous L\'adorons). Pour le khalifa, la mission commence par la connaissance (identifier la Divinité) avant l\'action (adorer). Confondre les deux reviendrait à agir avant de savoir au nom de qui on agit.',
      proof_ctx: '"Adorer" est le sens premier de la racine a-l-h, l\'action fondamentale de dévotion. Mais le verset utilise le nom propre Allah (la Divinité), pas le verbe alaha (adorer). La frontière philosophique : adorer est ce que fait l\'humain, la divinité est ce qu\'est Dieu. Le verset 1 définit Dieu, le verset 5 définit ce que l\'humain fait envers Dieu. L\'adoration est la raison d\'être du concept de divinité, mais dans ce verset précis, c\'est l\'identité qui est posée, pas l\'acte.',
    },
    'chercher refuge': {
      status: 'peu_probable',
      axe1_verset: 'Chercher refuge est un sens attesté de la racine a-l-h : se tourner vers quelqu\'un pour demander protection. Le verset est une formule d\'ouverture solennelle, pas une demande de protection. Le champ lexical de l\'invocation ("au nom de") ne contient pas l\'idée de refuge : on invoque un nom, on ne cherche pas un abri. La formule "bi-smi llahi" est une déclaration d\'autorité, pas un cri de détresse.',
      axe2_voisins: 'Les versets voisins qualifient Dieu par ses attributs positifs (miséricorde, seigneurie). Ils ne décrivent pas un contexte de danger ou de besoin de protection. La séquence est celle d\'une présentation ordonnée, pas d\'une situation d\'urgence. Le ton est solennel et serein, pas anxieux.',
      axe3_sourate: 'La Fatiha est une prière d\'ouverture qui pose les fondements de la relation avec Dieu. Cette relation commence par la reconnaissance et la louange, pas par la demande de refuge. Le refuge est un thème coranique réel (on le trouve dans les sourates 113 et 114 avec "audhu bi-llahi"), mais il n\'est pas le thème de la Fatiha.',
      axe4_coherence: 'Le Coran utilise d\'autres formules pour exprimer la demande de refuge : "audhu bi-llahi" (je cherche refuge auprès de Dieu). Cette formule utilise le verbe adha (chercher refuge) de la racine e-w-dh, pas la racine a-l-h. Le Coran distingue clairement les deux concepts et utilise des mots différents pour chacun.',
      axe5_frequence: 'Chercher refuge est un acte ponctuel de protection face à un danger. La formule d\'ouverture du Coran n\'est pas une réponse à un danger mais un acte de reconnaissance permanente. Pour le khalifa, la relation avec Dieu commence par la reconnaissance de Son identité, pas par la fuite vers un abri. Le refuge viendra quand il sera nécessaire, mais ce n\'est pas le point de départ de la relation.',
      proof_ctx: 'Chercher refuge est un sens attesté de la racine mais la formule "bi-smi llahi" est une invocation d\'autorité, pas une demande de protection. Le Coran utilise "audhu bi-llahi" (d\'une autre racine) pour le refuge, pas "bi-smi llahi". La frontière philosophique : invoquer le nom c\'est reconnaître l\'identité pour établir une relation, chercher refuge c\'est fuir un danger pour trouver une protection. Le verset 1 est un commencement serein, pas une réaction de peur.',
    },
    'être perplexe': { status: 'nul', proof_ctx: 'État de confusion et de désorientation. Le verset 1 est une formule d\'ouverture claire et solennelle. Aucune confusion possible dans "au nom de Dieu".' },
    'se lamenter': { status: 'nul', proof_ctx: 'Détresse véhémente et agitation de chagrin. Le verset est une ouverture sereine, pas une lamentation.' },
    demeurer: { status: 'nul', proof_ctx: 'Rester dans un lieu. Aucun rapport avec la formule d\'invocation du verset.' },
    'protéger': { status: 'nul', proof_ctx: 'Accorder un refuge. C\'est une action, pas l\'identité de Dieu dans ce verset. Le verset nomme, il ne raconte pas une action.' },
    serpent: { status: 'nul', proof_ctx: 'Objet d\'adoration dans l\'Arabie ancienne. Complètement hors du contexte coranique de ce verset.' },
    soleil: { status: 'nul', proof_ctx: 'Objet céleste vénéré. Hors contexte.' },
    lune: { status: 'nul', proof_ctx: 'Nouvelle lune. Hors contexte.' },
  },
  rhm: {
    'miséricorde': {
      status: 'retenu',
      axe1_verset: 'Le verset qualifie Dieu avec deux mots de la même racine : ar-rahman et ar-rahim. Les deux viennent de la miséricorde (rahma), cette tendresse du coeur qui pousse à faire du bien. Le champ lexical est celui de la bonté, de la tendresse et de la bienveillance. La miséricorde est le sens central qui unit les deux qualificatifs et leur donne leur force. Le doublement du même concept sous deux formes différentes montre que c\'est l\'attribut que le texte veut mettre en avant avant tout autre.',
      axe2_voisins: 'Le verset 3 répète exactement ar-rahman ar-rahim, ce qui crée un encadrement : la miséricorde ouvre la sourate (v1) et elle est rappelée (v3) après la louange (v2). Cette répétition montre que la miséricorde est le premier attribut que la Fatiha associe à Dieu, avant même la seigneurie (v2) ou la maîtrise (v4). Les versets voisins construisent un portrait de Dieu qui commence et revient à la miséricorde comme fondement.',
      axe3_sourate: 'La Fatiha est la sourate d\'ouverture du Coran. Que les deux premiers qualificatifs de Dieu soient liés à la miséricorde n\'est pas anodin : le texte pose la miséricorde comme le premier attribut de Dieu avant la puissance, la royauté ou la justice. Cela donne le ton de toute la relation : Dieu se présente d\'abord par Sa tendresse, pas par Son autorité. La miséricorde est le cadre dans lequel tout le reste s\'inscrit.',
      axe4_coherence: 'Le Coran utilise ar-rahman et ar-rahim des centaines de fois pour décrire Dieu. La formule "bi-smi llahi r-rahmani r-rahim" ouvre 113 sourates sur 114, ce qui en fait la phrase la plus répétée de tout le Coran. L\'usage est constant, central et univoque : ces deux mots sont toujours associés à la miséricorde divine, jamais à un autre sens de la racine r-h-m. Cette cohérence massive confirme que la miséricorde est le seul sens applicable.',
      axe5_frequence: 'La miséricorde est le fondement de la relation entre le khalifa et les autres êtres humains. C\'est par la miséricorde que la dignité humaine est préservée et respectée : on ne peut pas exercer la justice sans tendresse pour ceux qu\'on juge. Sans miséricorde, la justice devient tyrannie et l\'autorité devient oppression. Le fait que Dieu se présente d\'abord par Sa miséricorde enseigne au khalifa que la bonté précède le pouvoir dans l\'ordre des priorités.',
      proof_ctx: '"Miséricorde" est le sens central de la racine r-h-m : la tendresse du coeur qui pousse à faire du bien, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). Les deux mots ar-rahman et ar-rahim sont construits sur des modèles différents. Ar-rahman suit un modèle (wazn fa\'lan) qui exprime le plus haut degré possible, comme si la miséricorde débordait de partout sans limite. Ar-rahim suit un modèle (wazn fa\'il) qui exprime une qualité permanente qui ne s\'arrête jamais, un trait de caractère constant et stable. Distinction avec "pardonner" : le pardon est un acte ponctuel qui répond à une faute précise, on pardonne une erreur identifiée. La miséricorde est un état permanent qui ne nécessite aucune faute pour exister : on peut être miséricordieux envers quelqu\'un qui n\'a rien fait de mal. La miséricorde englobe le pardon mais le dépasse largement. Distinction avec "utérus" : l\'utérus est le sens physique premier de la racine, le lieu où la vie se forme dans la douceur et la protection. La miséricorde est l\'extension abstraite de cette douceur protectrice vers le domaine moral. Le lien est profond : comme l\'utérus protège ce qui est vulnérable, la miséricorde protège ce qui a besoin de bonté.',
    },
    pardonner: {
      status: 'probable',
      axe1_verset: 'Le pardon est un acte de miséricorde : excuser une faute, effacer une erreur. Dans le verset, les deux qualificatifs ar-rahman et ar-rahim décrivent un état permanent de Dieu, pas un acte ponctuel. Le champ lexical du verset est celui de la tendresse permanente, pas de la réponse à une faute. Le pardon est une manifestation de la miséricorde, mais la miséricorde existe sans le pardon : on peut être miséricordieux envers quelqu\'un qui n\'a commis aucune faute.',
      axe2_voisins: 'Les versets voisins décrivent les qualités permanentes de Dieu : seigneurie (v2), miséricorde à nouveau (v3), maîtrise (v4). Le pardon est un acte circonstanciel qui n\'apparaît pas dans cette liste de qualités permanentes. Les qualificatifs du verset sont des adjectifs qui décrivent ce que Dieu est en permanence, pas ce qu\'Il fait ponctuellement. Le pardon serait un verbe, pas un adjectif.',
      axe3_sourate: 'La Fatiha décrit des qualités fondamentales et éternelles de Dieu, pas des actions spécifiques. Le pardon est une action qui suppose une faute à pardonner, un contexte précis. La sourate pose des attributs universels et intemporels. Le pardon est trop spécifique pour résumer ce que ar-rahman ar-rahim veut dire dans cette ouverture du Coran.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour le pardon : ghafara (pardonner), afu (effacer). La racine r-h-m est systématiquement utilisée pour la miséricorde globale, pas pour le pardon spécifique. Cette distinction lexicale est constante dans tout le Coran et montre que les deux concepts, bien que liés, sont différents. Le Coran ne confond jamais rahma (miséricorde) et maghfira (pardon).',
      axe5_frequence: 'Le pardon est un acte important du khalifa mais il est réactif : il répond à une faute. La miséricorde est proactive : elle pousse à faire du bien sans attendre qu\'il y ait une faute. Pour le khalifa, la mission ne commence pas par le pardon (il n\'y a rien à pardonner au départ) mais par la miséricorde (la tendresse qui fonde la relation). Le pardon viendra quand il sera nécessaire, mais la miséricorde est le point de départ.',
      proof_ctx: 'Le pardon est un acte ponctuel (on pardonne une faute précise). La miséricorde est un état permanent (une disposition du coeur qui ne dépend d\'aucune circonstance). Le verset utilise des adjectifs définis (ar-rahman, ar-rahim) qui décrivent des qualités permanentes de Dieu, pas des verbes qui décrivent des actions. La frontière philosophique : le pardon suppose une faute, la miséricorde n\'en a pas besoin. Le pardon est inclus dans la miséricorde mais la miséricorde le dépasse.',
    },
    'utérus': {
      status: 'peu_probable',
      axe1_verset: 'L\'utérus est le sens physique premier de la racine r-h-m : le lieu où la vie se forme dans la douceur et la protection. Le verset utilise des adjectifs qui qualifient Dieu (ar-rahman, ar-rahim), pas des noms d\'organes physiques. Le champ lexical du verset est celui des qualités morales et des attributs, pas de l\'anatomie. Un adjectif comme "le miséricordieux" décrit un trait de caractère, pas un organe.',
      axe2_voisins: 'Les versets voisins qualifient Dieu par des attributs moraux et de puissance : seigneurie, miséricorde, maîtrise. Aucun verset de la Fatiha ne fait référence au corps ou à l\'anatomie. Le contexte est entièrement abstrait et moral. L\'utérus comme sens physique n\'a pas de place dans cette série de qualifications.',
      axe3_sourate: 'La Fatiha traite de la relation spirituelle et morale entre l\'humain et Dieu. La sourate pose des attributs abstraits et universels. L\'utérus est un organe concret et spécifique. Le registre de la sourate est celui de la théologie et de la prière, pas de la biologie.',
      axe4_coherence: 'Le Coran n\'utilise jamais ar-rahman ou ar-rahim dans le sens d\'utérus. Ce sont des adjectifs de qualité morale dans tous les contextes coraniques. Quand le Coran parle de l\'utérus ou des liens de parenté, il utilise le nom rahim (avec un sens différent), pas les adjectifs rahman/rahim. La distinction entre le nom (organe) et les adjectifs (qualités) est claire dans tout le Coran.',
      axe5_frequence: 'L\'utérus est le lieu physique de la protection première, l\'origine biologique de la miséricorde comme concept. Le lien étymologique est profond et riche : la douceur protectrice de la mère pour ce qui grandit en elle est la racine de toute miséricorde. Cependant, dans le verset, c\'est l\'extension morale (la miséricorde) qui est utilisée, pas le sens physique (l\'utérus). Le khalifa est appelé à la miséricorde, pas à une réflexion anatomique.',
      proof_ctx: 'L\'utérus est le sens physique premier de la racine : le lieu où la vie se forme dans la douceur et la protection. La miséricorde est l\'extension abstraite de cette douceur protectrice. Le verset utilise des adjectifs (ar-rahman, ar-rahim) qui décrivent des qualités morales de Dieu, pas le nom physique rahim (utérus). Le lien étymologique est réel et profond, mais le verset a choisi l\'extension morale, pas le sens concret.',
    },
    'lien de parenté': {
      status: 'peu_probable',
      axe1_verset: 'Le lien de parenté est l\'extension de l\'utérus : ceux qui partagent la même matrice sont liés entre eux. Le verset qualifie Dieu par des adjectifs de miséricorde, pas par des noms de relations familiales. Le champ lexical du verset est celui de la bonté divine, pas des liens familiaux. Les adjectifs ar-rahman et ar-rahim ne décrivent pas une parenté mais une disposition du coeur.',
      axe2_voisins: 'Les versets voisins ne parlent pas de famille, de parenté ou de liens de sang. La Fatiha décrit la relation entre Dieu et l\'ensemble de la création (les mondes), pas les relations entre humains. Le lien de parenté est un concept horizontal (entre humains), alors que le verset décrit une relation verticale (entre Dieu et les êtres).',
      axe3_sourate: 'La sourate traite de la relation fondamentale avec Dieu, pas des relations familiales entre humains. Les liens de parenté sont un thème coranique important mais ils ne sont pas le sujet de la Fatiha. La sourate pose des fondements théologiques et moraux, pas des structures sociales.',
      axe4_coherence: 'Le Coran utilise rahim (parenté) distinctement de rahman/rahim (qualités de miséricorde). La distinction est claire : silat ar-rahim (les liens de parenté) utilise le nom, ar-rahman ar-rahim (le Miséricordieux) utilise les adjectifs. Le Coran ne confond jamais ces deux usages de la même racine.',
      axe5_frequence: 'Les liens de parenté sont importants pour la mission du khalifa : maintenir les relations familiales est une valeur coranique forte. Cependant, le verset 1 ne parle pas des relations entre humains mais de la nature de Dieu. Les liens de parenté sont une conséquence de la miséricorde (on prend soin de ses proches par miséricorde), pas le sens du verset.',
      proof_ctx: 'Le lien de parenté vient de l\'utérus (ceux qui partagent la même matrice). C\'est un concept de relations humaines. Le verset qualifie Dieu par des adjectifs de miséricorde, pas par des concepts de parenté. Le Coran distingue clairement silat ar-rahim (liens de parenté, nom) de ar-rahman ar-rahim (qualités de miséricorde, adjectifs).',
    },
    pluie: { status: 'nul', proof_ctx: 'La pluie comme manifestation concrète de la miséricorde. Le verset utilise des adjectifs qui décrivent des qualités permanentes, pas des phénomènes météorologiques.' },
    subsistance: { status: 'nul', proof_ctx: 'Les moyens de vivre. Extension trop concrète pour des adjectifs qui qualifient Dieu dans une formule d\'ouverture.' },
    abondance: { status: 'nul', proof_ctx: 'Profusion de biens matériels. Trop matériel pour ce contexte de qualifications morales de Dieu.' },
    'révérer': { status: 'nul', proof_ctx: 'Tenir en respect (forme VIII : ihtarama). Le verset utilise des adjectifs de forme fa\'lan et fa\'il, pas la forme VIII. Le respect est ce que l\'humain doit à Dieu, pas ce que Dieu est.' },
  },
}

// ═══════════════════════════════════════
// ÉTAPE 4 — TRADUCTION + SEGMENTS
// ═══════════════════════════════════════

const VERSE = {
  verse_id: 1,
  words: [
    {verse_id:1, word_key:'smw', sense_chosen:'nom', position:2},
    {verse_id:1, word_key:'alh', sense_chosen:'divinité', position:3},
    {verse_id:1, word_key:'rhm', sense_chosen:'miséricorde', position:4},
    {verse_id:1, word_key:'rhm', sense_chosen:'miséricorde', position:5},
  ],
  translation_arab: "Au nom de Dieu, le Tout-Miséricordieux, le Miséricordieux.",
  translation_explanation: "La particule bi (avec/au) introduit le nom (ism) qui est rattaché à Allah, ensemble ils forment bi-smi llahi, \"au nom de Dieu\". C'est une formule d'ouverture qui place tout ce qui suit sous l'autorité de Dieu. Les deux mots ar-rahman et ar-rahim qualifient Dieu. Ils viennent de la même racine (r-h-m, qui a pour sens physique premier l'utérus, le lieu où la vie se forme dans la douceur et la protection). Ar-rahman est construit sur un modèle (qu'on appelle en arabe un wazn, c'est comme un moule qui donne une forme particulière au mot) qui exprime le plus haut degré possible, comme si la miséricorde débordait de partout. C'est pour ça qu'on traduit \"le Tout-Miséricordieux\". Ar-rahim est construit sur un modèle qui exprime une qualité permanente, qui ne s'arrête jamais, un trait de caractère constant. C'est pour ça qu'on traduit \"le Miséricordieux\" (sans \"Tout\"). Dans la traduction, Allah est rendu par \"Dieu\" (règle des noms propres). Le mot \"divinité\" (sens étymologique retenu) est le concept, \"Dieu\" est le nom propre utilisé en français.",
  segments: [
    {fr:"au",phon:"bi",arabic:"بِ",word_key:null,is_particle:true},
    {fr:"nom",pos:"nom",phon:"ismi",arabic:"ٱسْمِ",word_key:"smw",is_particle:false,sense_retenu:"nom"},
    {fr:"de Dieu",pos:"nom",phon:"allahi",arabic:"ٱللَّهِ",word_key:"alh",is_particle:false,sense_retenu:"divinité"},
    {fr:"le Tout-Miséricordieux",pos:"adjectif",phon:"ar-rahmani",arabic:"ٱلرَّحْمَـٰنِ",word_key:"rhm",is_particle:false,sense_retenu:"miséricorde"},
    {fr:"le Miséricordieux",pos:"adjectif",phon:"ar-rahimi",arabic:"ٱلرَّحِيمِ",word_key:"rhm",is_particle:false,sense_retenu:"miséricorde"},
  ],
}

const DAILY = [
  {analysis_id:249,sense:'nom',arabic:'مَا ٱسْمُكَ؟',phon:'ma ismuka?',french:'Quel est ton nom ?'},
  {analysis_id:249,sense:'nom',arabic:'سَمَّيْتُ ٱبْنِي أَحْمَدَ',phon:'sammaytou ibni ahmad',french:"J'ai nommé mon fils Ahmad"},
  {analysis_id:249,sense:'nom',arabic:'بِسْمِ ٱللَّهِ',phon:'bi-smi llahi',french:'Au nom de Dieu'},
  {analysis_id:250,sense:'divinité',arabic:'لَا إِلٰهَ إِلَّا ٱللَّهُ',phon:'la ilaha illa llah',french:'Il n\'y a de divinité que Dieu'},
  {analysis_id:250,sense:'divinité',arabic:'هُوَ إِلٰهُ ٱلنَّاسِ',phon:'huwa ilahu n-nas',french:'Il est la divinité des gens'},
  {analysis_id:250,sense:'divinité',arabic:'مَنْ إِلٰهُكُمْ؟',phon:'man ilahukum?',french:'Qui est votre divinité ?'},
  {analysis_id:251,sense:'miséricorde',arabic:'يَرْحَمُكَ ٱللَّهُ',phon:'yarhamuka llah',french:'Que Dieu te fasse miséricorde'},
  {analysis_id:251,sense:'miséricorde',arabic:'ٱلْأُمُّ أَرْحَمُ ٱلنَّاسِ',phon:'al-ummu arhamu n-nas',french:'La mère est la plus miséricordieuse des gens'},
  {analysis_id:251,sense:'miséricorde',arabic:'صِلَةُ ٱلرَّحِمِ وَاجِبَةٌ',phon:'silatu r-rahimi wajiba',french:'Maintenir les liens de parenté est obligatoire'},
]

// ═══════════════════════════════════════
// EXÉCUTION
// ═══════════════════════════════════════

async function run() {
  log('============================================')
  log('  PIPELINE MAISON — VERSET 1:1 — AXES DÉTAILLÉS')
  log('============================================')
  log('')

  // ÉTAPE 2 — Insertion des sens
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

  // ÉTAPE 3 — Axes et statuts
  log('>>> ÉTAPE 3 — ANALYSE DES SENS (axes détaillés)')
  let updatedCount = 0
  for (const [rootKey, rootAxes] of Object.entries(AXES)) {
    log('  [' + rootKey + ']')
    const rootId = ROOTS[rootKey].id
    const {data: meanings} = await db.from('word_meanings')
      .select('id, sense').eq('analysis_id', rootId).order('display_order')
    for (const m of meanings) {
      const axeData = rootAxes[m.sense]
      if (!axeData) { log('    ' + m.sense + ' : pas de données axes'); continue }
      const upd = { status: axeData.status, proof_ctx: axeData.proof_ctx }
      if (axeData.axe1_verset) upd.axe1_verset = axeData.axe1_verset
      if (axeData.axe2_voisins) upd.axe2_voisins = axeData.axe2_voisins
      if (axeData.axe3_sourate) upd.axe3_sourate = axeData.axe3_sourate
      if (axeData.axe4_coherence) upd.axe4_coherence = axeData.axe4_coherence
      if (axeData.axe5_frequence) upd.axe5_frequence = axeData.axe5_frequence
      const {error} = await db.from('word_meanings').update(upd).eq('id', m.id)
      if (error) { log('    ERREUR ' + m.sense + ': ' + error.message); continue }
      const hasAxes = axeData.axe1_verset ? ' (5 axes détaillés)' : ''
      log('    ' + m.sense + ' -> ' + axeData.status.toUpperCase() + hasAxes)
      updatedCount++
    }
    log('')
  }
  log('  ' + updatedCount + ' sens mis à jour')
  log('')

  // ÉTAPE 4 — Traduction + segments
  log('>>> ÉTAPE 4 — TRADUCTION')
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(VERSE.words)
  if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)
  else log('  ' + VERSE.words.length + ' verse_word_analyses insérés')

  const {error: vaErr} = await db.from('verse_analyses').insert({
    verse_id: VERSE.verse_id,
    translation_arab: VERSE.translation_arab,
    translation_explanation: VERSE.translation_explanation,
    segments: VERSE.segments,
  })
  if (vaErr) log('  ERREUR va: ' + vaErr.message)
  else log('  Traduction : "' + VERSE.translation_arab + '"')

  const {error: dailyErr} = await db.from('word_daily').insert(DAILY)
  if (dailyErr) log('  ERREUR daily: ' + dailyErr.message)
  else log('  ' + DAILY.length + ' phrases du quotidien insérées')

  log('')
  log('============================================')
  log('  VERSET 1:1 — TERMINÉ (axes détaillés)')
  log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
