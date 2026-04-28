// Pipeline Maison — Verset 1:7 — VERSION FINALE
// Étape 1: LLM via API | Étapes 2-3-4: Claude
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })

const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const SURAH_ID = 1
const VERSE_NUM = 7
const VERSE_ID = 7
// API_BASE not needed
const log = (msg) => console.log(msg)

// ═══════════════════════════════════════
// ÉTAPE 2 — Sens étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863)
// ═══════════════════════════════════════

const ROOTS = {
  srt: { id: 262, senses: [
    { sense: 'avaler', sense_ar: '\u0633\u064E\u0631\u064E\u0637\u064E', description: 'Faire passer dans la gorge d\'un trait, ingurgiter. C\'est le sens physique premier de la racine.', display_order: 1 },
    { sense: 'chemin', sense_ar: '\u0635\u0650\u0631\u064E\u0627\u0637', description: 'Voie large et dégagée que l\'on parcourt sans obstacle. Extension du sens d\'avaler : le chemin englobe et emmène celui qui y marche.', display_order: 2 },
    { sense: 'pont', sense_ar: '\u0635\u0650\u0631\u064E\u0627\u0637', description: 'Passage étroit qui relie deux rives au-dessus d\'un vide.', display_order: 3 },
  ]},
  nem: { id: 264, senses: [
    { sense: 'douceur', sense_ar: '\u0646\u064E\u0639\u064F\u0645\u064E', description: 'Être doux et lisse au toucher, texture agréable. C\'est le sens physique premier de la racine.', display_order: 1 },
    { sense: 'bétail', sense_ar: '\u0646\u064E\u0639\u064E\u0645', description: 'Troupeau d\'animaux domestiques (chameaux, vaches, moutons). Source concrète de richesse et de bien-être dans la vie arabe.', display_order: 2 },
    { sense: 'bienfait', sense_ar: '\u0646\u0650\u0639\u0652\u0645\u064E\u0629', description: 'Faveur qui adoucit la vie de celui qui la reçoit. Extension de douceur : ce qui rend la vie douce.', display_order: 3 },
    { sense: 'confort', sense_ar: '\u0646\u064E\u0639\u0650\u064A\u0645', description: 'État de bien-être et d\'aisance où rien ne manque. La vie rendue douce par l\'abondance.', display_order: 4 },
    { sense: 'oui', sense_ar: '\u0646\u064E\u0639\u064E\u0645\u0652', description: 'Particule d\'affirmation et d\'approbation.', display_order: 5 },
    { sense: 'abondance', sense_ar: '\u0646\u064E\u0639\u0652\u0645\u064E\u0627\u0621', description: 'Vie large et généreuse, profusion de biens.', display_order: 6 },
    { sense: 'délicatesse', sense_ar: '\u0646\u064E\u0627\u0639\u0650\u0645', description: 'Finesse et raffinement, ce qui est délicat au toucher.', display_order: 7 },
  ]},
  ely: { id: 265, senses: [
    { sense: 'hauteur', sense_ar: '\u0639\u064F\u0644\u064F\u0648\u0651', description: 'Position élevée dans l\'espace, être en haut physiquement. Sens physique premier.', display_order: 1 },
    { sense: 'sur', sense_ar: '\u0639\u064E\u0644\u064E\u0649', description: 'Position au-dessus de quelque chose, en contact ou en surplomb. Préposition dérivée de la hauteur.', display_order: 2 },
    { sense: 'dominer', sense_ar: '\u0639\u064E\u0644\u064E\u0627', description: 'Exercer un contrôle depuis une position supérieure.', display_order: 3 },
    { sense: 'monter', sense_ar: '\u0639\u064E\u0644\u064E\u0627', description: 'S\'élever vers le haut, grimper, prendre de l\'altitude.', display_order: 4 },
    { sense: 'surpasser', sense_ar: '\u062A\u064E\u0639\u064E\u0627\u0644\u064E\u0649', description: 'Dépasser les autres en rang ou en qualité. Extension abstraite de la hauteur.', display_order: 5 },
    { sense: 'éminent', sense_ar: '\u0639\u064E\u0644\u0650\u064A\u0651', description: 'Celui qui est au-dessus des autres, de rang élevé.', display_order: 6 },
  ]},
  ghyr: { id: 266, senses: [
    { sense: 'changer', sense_ar: '\u063A\u064E\u064A\u064E\u0651\u0631\u064E', description: 'Modifier l\'état d\'une chose, transformer. Sens premier : passer d\'un état à un autre.', display_order: 1 },
    { sense: 'autre', sense_ar: '\u063A\u064E\u064A\u0652\u0631', description: 'Ce qui est différent de ce qui est mentionné, distinct et séparé.', display_order: 2 },
    { sense: 'sauf', sense_ar: '\u063A\u064E\u064A\u0652\u0631', description: 'Exclusion d\'un élément du reste du groupe. Extension : séparer ce qui est différent.', display_order: 3 },
    { sense: 'jalousie', sense_ar: '\u063A\u064E\u064A\u0652\u0631\u064E\u0629', description: 'Sentiment protecteur intense envers ce qu\'on possède et qu\'on refuse de voir menacé.', display_order: 4 },
    { sense: 'nuage', sense_ar: '\u063A\u064E\u064A\u0652\u0631', description: 'Masse qui change l\'état du ciel, qui couvre et transforme l\'apparence.', display_order: 5 },
    { sense: 'puits', sense_ar: '\u063A\u064E\u064A\u0652\u0631', description: 'Cavité qui altère le terrain, changement dans la surface du sol.', display_order: 6 },
  ]},
  ghdb: { id: 267, senses: [
    { sense: 'pierre dure', sense_ar: '\u063A\u064E\u0636\u0652\u0628\u064E\u0629', description: 'Roche compacte fichée dans une montagne. Sens physique premier de la racine.', display_order: 1 },
    { sense: 'éminence', sense_ar: '\u063A\u064E\u0636\u0652\u0628\u064E\u0629', description: 'Monticule, bosse de terrain. Élévation naturelle du sol.', display_order: 2 },
    { sense: 'protubérance de chair', sense_ar: '\u063A\u064E\u0636\u0652\u0628\u064E\u0629', description: 'Bosse au-dessus ou en dessous des yeux. Relief anatomique.', display_order: 3 },
    { sense: 'cuir épais', sense_ar: '\u063A\u064E\u0636\u0650\u0628', description: 'Peau résistante non tannée, épaisse et dure. Matériau brut.', display_order: 4 },
    { sense: 'bouclier en cuir', sense_ar: '\u063A\u064E\u0636\u0652\u0628\u064E\u0629', description: 'Protection faite de peau de chameau pour le combat.', display_order: 5 },
    { sense: 'peau de chèvre', sense_ar: '\u063A\u064E\u0636\u0652\u0628\u064E\u0629', description: 'Cuir dur de chèvre de montagne ou de poisson.', display_order: 6 },
    { sense: 'rougeur intense', sense_ar: '\u063A\u064E\u0636\u0652\u0628', description: 'Rouge profond et dense, changement de couleur.', display_order: 7 },
    { sense: 'marque de variole', sense_ar: '\u063A\u064E\u0636\u0652\u0628\u064E\u0629', description: 'Cicatrice laissée par la maladie sur la peau.', display_order: 8 },
    { sense: 'durcir', sense_ar: '\u063A\u064E\u0636\u0650\u0628\u064E', description: 'Passer d\'un état souple à un état dur et rigide.', display_order: 9 },
    { sense: 'colère', sense_ar: '\u063A\u064E\u0636\u064E\u0628', description: 'État d\'excitation du sang du c\u0153ur en vue de revanche. Extension du durcissement intérieur qui se manifeste à l\'extérieur.', display_order: 10 },
    { sense: 'insatisfaction', sense_ar: '\u063A\u064E\u0636\u064E\u0628', description: 'Le contraire de la satisfaction (al-rida) d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). État de non-contentement.', display_order: 11 },
    { sense: 'sévir', sense_ar: '\u063A\u064E\u0636\u0650\u0628\u064E', description: 'Agir avec rigueur et fermeté contre quelqu\'un, traiter durement.', display_order: 12 },
  ]},
  dll: { id: 268, senses: [
    { sense: 'disparaître', sense_ar: '\u0636\u064E\u0644\u064E\u0651', description: 'Se perdre physiquement, devenir introuvable, comme un objet ou un animal perdu. Sens physique premier.', display_order: 1 },
    { sense: 'égarer', sense_ar: '\u0636\u064E\u0644\u064E\u0651', description: 'Perdre son chemin, dévier de la route que l\'on suivait. Extension : comme celui qui disparaît du chemin connu.', display_order: 2 },
    { sense: 'oublier', sense_ar: '\u0636\u064E\u0644\u064E\u0651', description: 'Perdre le souvenir de quelque chose, ne plus retrouver une information. Ce qui a disparu de la mémoire.', display_order: 3 },
    { sense: 'errer', sense_ar: '\u0636\u064E\u0644\u064E\u0651', description: 'Vagabonder sans direction ni but, marcher sans savoir où l\'on va.', display_order: 4 },
    { sense: 'périr', sense_ar: '\u0636\u064E\u0644\u064E\u0651', description: 'Se perdre définitivement, disparaître sans retour possible. Sens extrême de la disparition.', display_order: 5 },
    { sense: 'se mélanger', sense_ar: '\u0636\u064E\u0644\u064E\u0651', description: 'Se perdre dans un ensemble, devenir indistinct dans la masse.', display_order: 6 },
    { sense: 'couler', sense_ar: '\u0636\u064E\u0644\u064E\u0651', description: 'L\'eau qui disparaît dans le sol, s\'infiltrer et se perdre.', display_order: 7 },
  ]},
}

// ═══════════════════════════════════════
// ÉTAPE 3 — Axes, statuts, résumés
// ═══════════════════════════════════════

const AXES = {
  srt: {
    chemin: {
      status: 'retenu',
      axe1_verset: 'Le verset distingue trois groupes selon leur chemin. Le mot sirat prolonge directement le verset 6 qui demande "guide-nous sur le droit chemin". Le champ lexical du verset tourne autour de la guidance, des voies à suivre et des groupes qui les empruntent. "Chemin" est le mot central de ce champ lexical, il est le sujet même du verset. L\'opposition entre le chemin des bienfaits et les chemins de l\'insatisfaction et de l\'égarement structure tout le verset.',
      axe2_voisins: 'Le verset 6 dit "ihdina s-sirata l-mustaqim" (guide-nous sur le droit chemin). Le verset 7 reprend le même mot sirat pour préciser de quel chemin il s\'agit : celui de ceux qui ont reçu les bienfaits. La continuité entre les deux versets est directe et logique. Le verset 7 est la réponse au verset 6 : le chemin demandé est celui des gens que Dieu a favorisés, pas n\'importe quel chemin.',
      axe3_sourate: 'Al-Fatiha est la sourate d\'ouverture du Coran. Elle pose les fondements de la relation entre l\'humain et Dieu : louange, miséricorde, adoration, demande d\'aide, et enfin guidance. Le chemin droit est le thème central des versets 6-7, le c\u0153ur de la demande faite à Dieu. Toute la sourate converge vers cette demande de direction.',
      axe4_coherence: 'Le Coran utilise le mot sirat des dizaines de fois, toujours dans le sens de voie ou chemin de guidance. Le mot est systématiquement associé à la direction morale ou spirituelle. Aucun verset ne contredit cette lecture. On retrouve "as-sirat al-mustaqim" (le chemin droit) comme expression récurrente dans tout le Coran.',
      axe5_frequence: 'Le chemin est la direction que le khalifa suit pour accomplir sa mission de justice et de civilisation. Sans chemin, pas de direction, pas de mission possible. Il respecte la dignité humaine car il est proposé, pas imposé. Le verset montre que certains le suivent et d\'autres non, ce qui implique le libre choix. Le chemin n\'est pas une contrainte mais une offre.',
      proof_ctx: '"Chemin" s\'inscrit parfaitement dans la continuité du verset 6, dans le thème de la sourate et dans l\'usage coranique du mot sirat. Distinction avec "pont" : le pont est un passage ponctuel entre deux rives, on le traverse et c\'est fini. Le chemin est un parcours continu tout au long de la vie. Le verset parle d\'une direction permanente, pas d\'un passage unique. Le qualificatif "droit" (mustaqim) du verset 6 s\'applique naturellement à un chemin qu\'on emprunte au quotidien, pas à un pont qu\'on traverse une seule fois.'
    },
    avaler: {
      status: 'nul',
      proof_ctx: 'Avaler est le sens physique premier de la racine, faire passer dans la gorge d\'un trait. Mais il est totalement absent du registre coranique pour ce mot. Le Coran utilise sirat exclusivement dans le sens de voie ou chemin.'
    },
    pont: {
      status: 'peu_probable',
      axe1_verset: 'Le pont comme passage étroit au-dessus d\'un vide ne s\'inscrit pas dans le champ lexical de la guidance et des bienfaits. Le verset parle de gens qui suivent un parcours de vie, pas de gens qui traversent un passage.',
      axe2_voisins: 'Le verset 6 parle de sirat mustaqim (droit), ce qui qualifie naturellement un chemin qu\'on emprunte au quotidien, pas un pont qu\'on traverse une seule fois.',
      axe3_sourate: 'La sourate traite de la relation continue avec Dieu, pas d\'un événement ponctuel de traversée.',
      axe4_coherence: 'Le Coran utilise sirat dans le sens de chemin de vie, pas de pont physique. L\'usage coranique est cohérent et constant.',
      axe5_frequence: 'Le pont est un passage, pas une direction de vie. Pour le khalifa, la mission est un parcours continu, pas une traversée ponctuelle.',
      proof_ctx: 'Le pont est un passage ponctuel entre deux points. Le verset parle d\'un parcours de vie continu. Le qualificatif "droit" du verset 6 s\'applique à un chemin, pas à un pont. De plus, le pont implique un passage unique tandis que le verset décrit des gens qui suivent ou quittent activement leur voie, ce qui correspond au chemin.'
    },
  },
  nem: {
    bienfait: {
      status: 'retenu',
      axe1_verset: 'Le verset oppose ceux qui ont reçu les bienfaits à ceux qui ont subi l\'insatisfaction et ceux qui s\'égarent. "Bienfait" est le pivot positif de cette opposition. La construction "an\'amta \'alayhim" (Tu as accordé sur eux) est naturelle en arabe. La forme IV du verbe (an\'ama) signifie précisément "accorder un bienfait, rendre la vie douce à quelqu\'un".',
      axe2_voisins: 'Les versets voisins parlent de louange (verset 2 : on loue pour quoi ? pour les bienfaits reçus), de miséricorde (versets 1 et 3 : la miséricorde est le bienfait premier), de guidance (verset 6 : la guidance est un bienfait). Le bienfait est le fil conducteur qui relie tous ces thèmes entre eux. Sans bienfait, pas de louange.',
      axe3_sourate: 'La Fatiha établit une relation d\'échange entre Dieu qui accorde et l\'humain qui loue et demande. Le bienfait est au c\u0153ur de cet échange : c\'est ce que Dieu donne et ce pour quoi l\'humain exprime sa gratitude.',
      axe4_coherence: 'Le Coran utilise ni\'ma (bienfait) et an\'ama (accorder un bienfait) massivement pour décrire les faveurs divines. Le verset 14:34 dit que si l\'on comptait les bienfaits de Dieu, on ne pourrait les dénombrer. Parfaitement cohérent avec cet usage.',
      axe5_frequence: 'Le bienfait dans ce verset inclut la guidance sur le chemin droit, c\'est la condition nécessaire pour que le khalifa accomplisse sa mission de justice et de civilisation. Sans le bienfait de la guidance, pas de direction, pas de mission possible. La dignité humaine elle-même est un bienfait accordé par Dieu à tous les êtres humains.',
      proof_ctx: '"Bienfait" est l\'extension naturelle du sens physique "douceur", ce qui rend la vie douce. La forme IV du verbe (an\'ama) confirme ce sens : accorder quelque chose qui adoucit la vie. Distinction avec "confort" : le confort est strictement matériel, un bon lit, de la nourriture, un abri. Le bienfait englobe le matériel et l\'immatériel : la guidance, le savoir, la paix intérieure. Un prophète guidé mais persécuté a reçu le bienfait de la guidance sans le confort matériel. Le verset parle du chemin de guidance, pas de conditions matérielles.'
    },
    confort: {
      status: 'probable',
      axe1_verset: 'Le confort comme état de bien-être s\'inscrit dans le champ lexical positif du verset. Cependant, le verset parle de guidance et de chemins de vie, pas de conditions matérielles. Le confort est une forme de bienfait mais réduite à sa dimension matérielle.',
      axe2_voisins: 'Les versets voisins parlent de miséricorde et de guidance, des concepts immatériels. Le confort matériel ne couvre pas ces dimensions spirituelles.',
      axe3_sourate: 'La sourate traite de la relation spirituelle avec Dieu, pas de bien-être physique. Le confort est trop limité pour le thème de la sourate.',
      axe4_coherence: 'Le Coran utilise na\'im (confort, délice) dans d\'autres contextes, souvent pour le paradis. Mais ici la forme IV du verbe an\'ama pointe vers le bienfait accordé, pas le confort reçu.',
      axe5_frequence: 'Le confort matériel peut aider le khalifa dans sa mission mais n\'est pas sa condition première. La guidance (bienfait immatériel) est plus fondamentale que le confort pour accomplir la mission de justice.',
      proof_ctx: 'Le confort désigne un bien-être matériel et physique. Le bienfait peut exister sans confort : un prophète guidé mais persécuté a reçu le bienfait sans le confort. Le bienfait est la cause, le confort est parfois une conséquence. Le verset parle de la cause, pas de la conséquence.'
    },
    abondance: {
      status: 'peu_probable',
      axe1_verset: 'L\'abondance est une forme de bienfait mais réduite à la dimension quantitative. Le verset ne parle pas de quantité mais de la nature de ce qui a été accordé.',
      axe2_voisins: 'Les versets voisins parlent de qualités (miséricorde, guidance), pas de quantités. L\'abondance ne s\'inscrit pas dans cette dynamique qualitative.',
      axe3_sourate: 'La sourate ne traite pas d\'abondance matérielle mais de relation spirituelle.',
      axe4_coherence: 'Le Coran utilise na\'ma\'  pour l\'abondance mais pas dans ce contexte de guidance.',
      axe5_frequence: 'L\'abondance ne contribue pas directement à la mission du khalifa dans ce contexte de guidance spirituelle.',
      proof_ctx: 'L\'abondance est une forme de bienfait réduite à la quantité. Le verset ne parle pas de combien on a reçu mais de la nature de ce qui a été accordé, la guidance sur le droit chemin.'
    },
    douceur: { status: 'nul', proof_ctx: 'Sens physique premier (être lisse au toucher). La forme IV du verbe (an\'ama) a transformé ce sens concret en "accorder ce qui rend la vie douce". Le verset utilise cette forme IV, pas la forme I.' },
    'bétail': { status: 'nul', proof_ctx: 'Source concrète de richesse dans la vie arabe. Mais le verbe an\'amta (forme IV) veut dire "accorder un bienfait", pas "donner du bétail". Le verset parle d\'une faveur générale.' },
    oui: { status: 'nul', proof_ctx: 'Particule d\'affirmation sans aucun lien avec le contexte verbal du verset.' },
    'délicatesse': { status: 'nul', proof_ctx: 'Sens trop raffiné et physique pour ce contexte de guidance et de chemins de vie.' },
  },
  ely: {
    sur: {
      status: 'retenu',
      axe1_verset: '\'Alayhim fonctionne comme préposition dans ce verset. Elle relie le verbe an\'amta (Tu as accordé) à son complément (eux). La construction "an\'amta \'alayhim" est une expression arabe standard qui signifie "Tu as accordé tes bienfaits sur eux".',
      axe2_voisins: 'Les versets voisins utilisent des constructions similaires. \'Ala est la préposition naturelle pour exprimer la relation "sur eux". C\'est une fonction grammaticale pure.',
      axe3_sourate: 'Fonction grammaticale pure, cohérente avec le style de la sourate.',
      axe4_coherence: 'Le Coran utilise \'ala comme préposition des milliers de fois. Usage parfaitement standard.',
      axe5_frequence: 'Fonction grammaticale qui relie les mots entre eux. Pas de sens autonome à analyser pour la mission du khalifa.',
      proof_ctx: 'Fonction de préposition pure. \'Alayhim signifie "sur eux". Les autres sens de la racine (hauteur, dominer, monter, surpasser, éminent) ne s\'appliquent pas quand le mot est en position de préposition.'
    },
    hauteur: { status: 'nul', proof_ctx: 'Sens physique premier de la racine. Mais ici \'ala est utilisé comme préposition, pas comme nom.' },
    dominer: { status: 'nul', proof_ctx: 'Le mot est en position de préposition dans le verset, pas de verbe.' },
    monter: { status: 'nul', proof_ctx: 'Fonction prépositionnelle, pas de sens verbal ici.' },
    surpasser: { status: 'nul', proof_ctx: 'Fonction prépositionnelle dans ce verset.' },
    'éminent': { status: 'nul', proof_ctx: 'Fonction prépositionnelle, pas d\'adjectif ici.' },
  },
  ghyr: {
    sauf: {
      status: 'retenu',
      axe1_verset: 'Le verset trace une frontière nette entre deux catégories : ceux qui ont reçu les bienfaits d\'un côté, et deux groupes négatifs de l\'autre. "Sauf" est précisément le mot qui trace cette frontière, il exclut activement les deux groupes négatifs du premier. Le champ lexical est celui de la séparation entre deux destins.',
      axe2_voisins: 'Le verset 6 demande un chemin précis (le droit chemin). Le verset 7 définit ce chemin d\'abord par inclusion (celui de ceux qui ont reçu les bienfaits) puis par exclusion ("sauf" ceux qui ont subi l\'insatisfaction et ceux qui s\'égarent). "Sauf" est l\'outil de cette exclusion. Sans lui, la demande du verset 6 resterait vague.',
      axe3_sourate: 'La sourate Al-Fatiha pose les catégories fondamentales de l\'expérience humaine. "Sauf" est le mot qui sépare ces catégories proprement, il trace la limite entre le chemin des bienfaits et les chemins de l\'insatisfaction et de l\'égarement.',
      axe4_coherence: 'Le Coran utilise ghayri comme exclusion dans de nombreux passages. La construction "sirata lladhina an\'amta \'alayhim ghayri..." est une structure classique d\'inclusion suivie d\'exclusion. Parfaitement cohérent avec l\'usage coranique.',
      axe5_frequence: 'Pour le khalifa, la capacité de distinguer clairement quel chemin suivre et lequel éviter est fondamentale pour accomplir sa mission de justice. "Sauf" trace cette limite de manière non ambiguë. Il respecte la dignité humaine car il exclut des chemins, pas des personnes de leur dignité.',
      proof_ctx: '"Sauf" est l\'extension du sens "changer" vers l\'exclusion, séparer ce qui est différent du reste. Dans ce verset, il trace la frontière entre le chemin à suivre et les chemins à éviter. Distinction avec "autre" : "autre" constate passivement la différence, il y a d\'autres gens. "Sauf" pose un acte d\'exclusion actif, ces gens-là sont exclus du premier groupe. Le verset ne constate pas qu\'il existe d\'autres personnes dans le monde, il exclut activement deux groupes du chemin des bienfaits.'
    },
    autre: {
      status: 'probable',
      axe1_verset: '"Autre" indique que les groupes suivants sont différents du premier. Le champ lexical de la séparation est compatible avec le verset. Cependant, "autre" constate simplement la différence sans la charger d\'intentionnalité.',
      axe2_voisins: 'Les versets voisins posent un cadre de guidance. "Autre" est compatible mais manque de force pour marquer l\'exclusion nette que le verset construit entre les trois groupes.',
      axe3_sourate: 'Compatible avec le thème de la sourate qui distingue des catégories humaines.',
      axe4_coherence: 'Le Coran utilise ghayri dans les deux sens (autre et sauf). Les deux lectures sont cohérentes avec l\'usage coranique.',
      axe5_frequence: '"Autre" constate la différence sans tracer de limite active. Pour le khalifa, la limite claire (sauf) est plus utile que le simple constat de différence (autre) pour distinguer les chemins.',
      proof_ctx: '"Autre" indique simplement la différence. "Sauf" pose un acte d\'exclusion actif. Le verset n\'observe pas qu\'il existe d\'autres personnes dans le monde, il exclut activement deux groupes du chemin des bienfaits. "Sauf" porte cette intentionnalité que "autre" n\'a pas.'
    },
    changer: {
      status: 'peu_probable',
      axe1_verset: 'Le sens "changer" est le sens premier de la racine mais dans ce verset ghayri est en position nominale et fonctionne comme une exclusion, pas comme un verbe de transformation.',
      axe2_voisins: 'Les versets voisins ne parlent pas de changement ou de transformation. Le contexte est celui de la catégorisation, pas du changement.',
      axe3_sourate: 'La sourate ne traite pas du changement d\'état.',
      axe4_coherence: 'Le Coran utilise le verbe ghayyara pour "changer" mais ici ghayri est un nom fonctionnant comme exclusion.',
      axe5_frequence: 'Le changement n\'est pas pertinent dans ce contexte de catégorisation de chemins de vie.',
      proof_ctx: 'Sens physique premier (passer d\'un état à un autre). Mais dans ce verset, ghayri est en position nominale et fonctionne comme une exclusion, pas comme un verbe de transformation.'
    },
    jalousie: { status: 'nul', proof_ctx: 'Sentiment protecteur sans rapport avec le contexte d\'exclusion entre groupes dans ce verset.' },
    nuage: { status: 'nul', proof_ctx: 'Phénomène météorologique sans rapport avec le contexte de guidance.' },
    puits: { status: 'nul', proof_ctx: 'Formation géologique sans rapport avec le verset.' },
  },
  ghdb: {
    insatisfaction: {
      status: 'retenu',
      axe1_verset: 'Le verset oppose trois groupes. Ceux qui ont reçu les bienfaits (la satisfaction implicite, on accorde des bienfaits à ceux dont on est satisfait) face à ceux qui ont subi l\'insatisfaction. L\'opposition bienfait et insatisfaction structure le verset de manière claire et équilibrée. La racine nem (bienfait, ce qui rend la vie douce, marque de satisfaction) face à la racine ghdb (insatisfaction, contraire de la satisfaction) forme un couple étymologique cohérent.',
      axe2_voisins: 'Les versets voisins parlent de louange (verset 2 : on loue car Dieu est satisfait et accorde), de miséricorde (versets 1 et 3 : la miséricorde est l\'expression de Sa satisfaction), de guidance (verset 6 : guider est un acte de satisfaction envers le guidé). L\'insatisfaction est le contraire de cet ensemble positif. Quand la satisfaction est retirée, les bienfaits cessent.',
      axe3_sourate: 'La Fatiha présente la miséricorde (satisfaction divine qui se manifeste comme douceur) dans les versets 1 à 3, puis l\'insatisfaction dans le verset 7. La sourate encadre l\'expérience humaine entre ces deux pôles : la satisfaction de Dieu qui se manifeste par la miséricorde et les bienfaits, et son insatisfaction qui se manifeste par le retrait de ces bienfaits.',
      axe4_coherence: 'D\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini explicitement comme "le contraire de al-rida (la satisfaction)". Le Coran utilise le mot rida pour Dieu à de nombreuses reprises : "radiya llahu \'anhum" (Dieu est satisfait d\'eux) dans les versets 5:119, 9:100, 58:22, 98:8. Si le Coran attribue la satisfaction à Dieu, son contraire (l\'insatisfaction) est un attribut valide. Ce n\'est pas de l\'anthropomorphisme car le Coran Lui-même établit ce champ. Quand le Coran veut préciser la source de l\'insatisfaction, il le fait : "bi-ghadhabin min allah" (2:61), "ghadhabii" (20:81). Dans le verset 1:7, aucune source n\'est précisée, c\'est un choix.',
      axe5_frequence: 'Al-maghdhubi est un participe passif (une forme qui dit que l\'action est subie, pas faite), donc "ceux sur qui l\'insatisfaction est tombée". C\'est un état relationnel, pas une émotion. L\'insatisfaction est un jugement : constater que quelque chose ne correspond pas à ce qu\'on attendait. Pour le khalifa, comprendre que certains chemins mènent à l\'insatisfaction est un avertissement fondamental. Ce sens respecte pleinement la dignité humaine car il décrit un état, pas une condamnation des personnes. Il n\'attribue pas d\'émotion humaine à Dieu.',
      proof_ctx: '"Insatisfaction" est la définition même que donnent les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) pour ghadhab : le contraire de al-rida (la satisfaction). Le Coran utilise rida pour Dieu ("radiya llahu \'anhum"), donc son contraire est applicable sans anthropomorphisme, c\'est le Coran Lui-même qui établit ce champ. Le participe passif (maghdhub) confirme que c\'est un état subi. L\'opposition avec bienfait (nem, douceur, marque de satisfaction) est complète : le bienfait est la manifestation de la satisfaction, l\'insatisfaction est son contraire. Distinction avec "colère" : la colère est une réaction émotionnelle violente et spontanée, l\'attribuer à Dieu sans que le texte le dise explicitement serait de l\'anthropomorphisme. L\'insatisfaction est un état de jugement rationnel. Le Coran attribue la satisfaction (rida) à Dieu, donc son contraire est légitime. Distinction avec "durcir" : le durcissement est le sens physique brut de la racine. L\'insatisfaction est la définition abstraite donnée par les sources étymologiques. Le verset parle d\'une relation entre Dieu et des groupes humains, pas de physique.'
    },
    'colère': {
      status: 'probable',
      axe1_verset: 'La colère comme émotion s\'inscrit dans le champ lexical de la conséquence, c\'est un sentiment négatif en opposition avec les bienfaits. Cependant, la colère est le sentiment de l\'émetteur, pas l\'expérience du receveur. Le verset décrit ce que les gens subissent (participe passif), pas ce que quelqu\'un ressent. La colère est vécue par celui qui la ressent, tandis que le verset parle du point de vue de celui qui la subit.',
      axe2_voisins: 'Les versets voisins posent un cadre de guidance et de relation avec Dieu. La colère est compatible avec ce cadre mais le texte ne précise pas de qui elle vient ni pourquoi. Le verset constate un état sans expliquer sa cause. Quand le Coran veut parler de la colère divine, il le précise explicitement avec "min allah" ou un pronom possessif.',
      axe3_sourate: 'La sourate présente la miséricorde en ouverture. La colère comme son contraire est compatible avec la structure de la sourate. Cependant, le contraire étymologique de la satisfaction (rida) c\'est l\'insatisfaction, pas la colère. La colère est une extension émotionnelle qui va au-delà de la définition étymologique.',
      axe4_coherence: 'Le Coran utilise ghadhab fréquemment. Quand la source est Dieu, il le précise : "bi-ghadhabin min allah" (2:61) signifie "avec une colère venant de Dieu", "ghadhabii" (20:81) signifie "Ma colère". Dans le verset 1:7, rien n\'est précisé. La colère comme émotion implique un émetteur que le texte ne nomme pas. L\'attribuer implicitement serait de l\'interprétation.',
      axe5_frequence: 'La colère est une émotion humaine. L\'attribuer à Dieu sans que le texte le dise explicitement serait de l\'anthropomorphisme. Le Coran attribue la satisfaction (rida) à Dieu, mais pas directement la colère dans ce verset. Le participe passif décrit un état subi, pas une émotion ressentie. L\'insatisfaction (jugement rationnel) est plus fidèle au texte que la colère (réaction émotionnelle).',
      proof_ctx: 'La colère est l\'extension émotionnelle du sens physique "durcir", le durcissement intérieur qui se manifeste comme émotion. C\'est le sens le plus courant de la racine et le Coran l\'utilise clairement ailleurs quand il précise "min allah". Cependant, dans ce verset, le texte ne nomme pas la source. La colère est une réaction émotionnelle violente et spontanée. L\'insatisfaction est un état de jugement rationnel. Le Coran attribue la satisfaction (rida) à Dieu, son contraire direct est l\'insatisfaction, pas la colère. La colère est le vécu de celui qui la ressent, l\'insatisfaction est un constat objectif. Le verset parle de ce que les gens subissent (passif), pas de ce que quelqu\'un ressent.'
    },
    durcir: {
      status: 'probable',
      axe1_verset: 'Le durcissement comme changement d\'état (souple vers rigide) peut s\'inscrire dans l\'opposition avec les bienfaits (douceur vers dureté). L\'opposition étymologique fonctionne : la racine nem signifie douceur, la racine ghdb dans son sens physique signifie durcissement. Les deux racines forment un couple cohérent au niveau physique.',
      axe2_voisins: 'Compatible avec les versets voisins qui posent un cadre de guidance. Le durcissement des conditions de vie peut être vu comme une conséquence de ne pas suivre le chemin. Cependant, le verset ne dit pas que les conditions se sont durcies, il décrit un état sans préciser sa nature.',
      axe3_sourate: 'La sourate oppose miséricorde (douceur, tendresse) et ce que subissent ceux qui sont sur le mauvais chemin. Le durcissement est compatible avec cette structure comme contraire de la douceur.',
      axe4_coherence: 'Le Coran utilise ghadhab avec des conséquences concrètes comme des destructions, des exils, des conditions de vie durcies. Le durcissement des conditions est une lecture possible. Cependant, les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) définissent le mot explicitement comme "le contraire de la satisfaction", pas comme "durcissement".',
      axe5_frequence: 'Le participe passif (maghdhub) décrit un état subi. Le durcissement est neutre, il ne dit pas qui a durci ni pourquoi. Cependant, les sources étymologiques donnent une définition plus précise que le sens physique brut pour un verset qui parle de la relation entre Dieu et des groupes humains.',
      proof_ctx: '"Durcir" est le sens physique qui sous-tend tous les sens abstraits de la racine. L\'opposition étymologique avec bienfait (nem signifie douceur) fonctionne au niveau physique. Cependant, les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) définissent explicitement ghadhab comme "le contraire de la satisfaction (rida)". Cette définition abstraite est plus précise que le sens physique brut pour un verset qui parle de la relation entre Dieu et des groupes humains. Le verset parle d\'une relation, pas de physique.'
    },
    'sévir': {
      status: 'peu_probable',
      axe1_verset: 'Sévir est l\'action concrète de punir quelqu\'un. Le verset utilise un participe passif qui décrit un état permanent ("ceux sur qui c\'est tombé"), pas une action en cours. Sévir implique un moment précis de punition, le verset décrit une condition permanente qui définit un groupe.',
      axe2_voisins: 'Les versets voisins décrivent des états et des relations (adorer, demander l\'aide, guider), pas des actions ponctuelles de punition. Sévir serait une rupture de ton dans cette progression contemplative.',
      axe3_sourate: 'Sévir est trop ponctuel pour le ton de la Fatiha qui est une ouverture, pas un rappel de punitions passées.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour sévir et punir (\'aqaba, \'adh-dhaba). Ghadhab décrit l\'état qui précède l\'action, pas l\'acte de punir lui-même.',
      axe5_frequence: 'Sévir est une action ponctuelle. Le verset décrit un état permanent (participe passif). Le durcissement et l\'insatisfaction sont des états qui s\'installent, sévir est un acte qui passe. Le verset parle d\'états durables.',
      proof_ctx: 'Sévir est l\'action concrète de punir. Le verset décrit un état permanent (participe passif), pas une action ponctuelle. Le Coran utilise d\'autres mots pour l\'acte de punir (\'aqaba, \'adh-dhaba). Le durcissement et l\'insatisfaction sont des états, sévir est un acte. Le verset parle d\'états durables, pas d\'actions ponctuelles.'
    },
    'pierre dure': { status: 'nul', proof_ctx: 'Sens physique premier : roche compacte fichée dans une montagne. Le verset parle de groupes humains et de chemins de vie, pas de géologie.' },
    'éminence': { status: 'nul', proof_ctx: 'Monticule, bosse de terrain. Hors du contexte moral du verset.' },
    'protubérance de chair': { status: 'nul', proof_ctx: 'Relief anatomique au-dessus ou en dessous des yeux. Aucun rapport avec le verset.' },
    'cuir épais': { status: 'nul', proof_ctx: 'Matériau artisanal (peau résistante non tannée). Sans rapport avec le contexte.' },
    'bouclier en cuir': { status: 'nul', proof_ctx: 'Protection de combat faite de peau de chameau. Hors contexte.' },
    'peau de chèvre': { status: 'nul', proof_ctx: 'Cuir dur de chèvre de montagne ou de poisson. Hors contexte.' },
    'rougeur intense': { status: 'nul', proof_ctx: 'Changement physique de couleur du visage. Le verset décrit un état de vie pour des groupes humains, pas une réaction corporelle.' },
    'marque de variole': { status: 'nul', proof_ctx: 'Cicatrice laissée par la maladie sur la peau. Aucun rapport avec le verset.' },
  },
  dll: {
    'égarer': {
      status: 'retenu',
      axe1_verset: 'Le verset oppose le chemin droit (sirat, guidance) à l\'égarement (dalal). "Égarer" est le contraire direct de "guider" (hdy, verset 6). Le champ lexical est parfaitement aligné : guidance, chemin, égarement. Le verset nomme trois destins possibles, les bienfaits, l\'insatisfaction, l\'égarement, et "égarer" est le troisième.',
      axe2_voisins: 'Le verset 6 dit "guide-nous sur le droit chemin" (ihdina). Le verset 7 montre les trois résultats possibles : bienfaits, insatisfaction, égarement. L\'égarement est le contraire thématique de la guidance demandée au verset 6. Si le verset 6 est la question, le verset 7 montre les trois réponses possibles, dont l\'égarement.',
      axe3_sourate: 'La sourate Al-Fatiha est construite autour de la guidance. L\'égarement est sa conclusion logique, le rappel qu\'on peut perdre le chemin. La sourate s\'ouvre par la miséricorde et se ferme par le rappel des deux écueils : l\'insatisfaction et l\'égarement.',
      axe4_coherence: 'Le Coran utilise dalla et dalal massivement pour décrire ceux qui quittent la voie de guidance. Le mot apparaît dans plus de 190 versets. Parfaitement cohérent avec l\'usage coranique.',
      axe5_frequence: 'Ad-dalliina est un participe actif, "ceux qui s\'égarent activement". Le participe actif montre que l\'action est en cours et faite par les personnes elles-mêmes. Comparaison essentielle avec le mot précédent (maghdhub, participe passif) : l\'insatisfaction est subie (passif), l\'égarement est fait (actif). Le verset distingue deux types de mauvais chemin : celui qu\'on subit et celui qu\'on fait soi-même. Pour le khalifa, cette distinction est essentielle. Comprendre que certaines situations sont subies et d\'autres choisies respecte la dignité humaine en reconnaissant la complexité des parcours.',
      proof_ctx: '"Égarer" est l\'extension de "disparaître" (sens physique premier) vers le domaine moral : disparaître du chemin connu. Le participe actif montre que l\'égarement est un processus en cours dont les personnes sont les agents actifs. Distinction avec "errer" : "errer" est vagabonder sans but, il n\'y a jamais eu de chemin, jamais eu de direction. "Égarer" signifie qu\'il y avait un chemin et qu\'on l\'a perdu, on connaissait la direction et on l\'a quittée. Le verset mentionne explicitement le sirat (chemin), les égarés l\'ont quitté, ils ne vagabondent pas dans le vide. De plus, le participe actif en arabe (dallin) implique un processus actif de déviation, pas un état passif de vagabondage.'
    },
    errer: {
      status: 'probable',
      axe1_verset: '"Errer" est compatible avec le champ lexical du verset qui parle de chemins et de direction. Cependant, errer implique qu\'il n\'y a jamais eu de direction, on vagabonde dans le vide. Le verset présuppose l\'existence d\'un chemin (le sirat), ce que "errer" ne capture pas.',
      axe2_voisins: 'Les versets voisins parlent de guidance. Errer est le contraire partiel de la guidance, celui qui erre n\'est pas guidé. Mais le verset implique que le chemin existe et a été montré (verset 6 demande la guidance sur CE chemin).',
      axe3_sourate: 'Compatible avec le thème de la sourate mais moins précis que "égarer". La sourate parle d\'un chemin connu, errer implique l\'absence de chemin.',
      axe4_coherence: 'Le Coran utilise dalla pour ceux qui ont quitté un chemin connu, pas pour ceux qui n\'ont jamais eu de direction. L\'usage coranique favorise le sens de quitter un chemin plutôt que de vagabonder.',
      axe5_frequence: 'Errer ne distingue pas entre celui qui a perdu son chemin et celui qui n\'en a jamais eu. Pour le khalifa, cette distinction est importante car elle détermine si la personne peut être ramenée sur le chemin ou si elle n\'a jamais su qu\'il existait.',
      proof_ctx: '"Errer" est vagabonder sans but, il n\'y a jamais eu de chemin. "Égarer" signifie qu\'il y avait un chemin et qu\'on l\'a perdu. Le verset mentionne explicitement le sirat (chemin), les égarés l\'ont quitté. Le participe actif (dallin) implique un processus actif de déviation, pas un état passif de vagabondage.'
    },
    'disparaître': {
      status: 'peu_probable',
      axe1_verset: 'Le verset parle de chemins et de groupes humains. "Disparaître" est trop physique, les gens ne disparaissent pas littéralement. Le champ lexical du verset est moral et directionnel, pas physique.',
      axe2_voisins: 'Le verset 6 demande la guidance. Le contraire de la guidance c\'est perdre son chemin, pas disparaître physiquement de la surface de la terre.',
      axe3_sourate: 'Hors thème pour une sourate centrée sur la guidance spirituelle.',
      axe4_coherence: 'Le Coran utilise dalla pour l\'égarement moral, pas la disparition physique.',
      axe5_frequence: 'La disparition physique ne contribue pas à la mission du khalifa dans ce contexte de guidance.',
      proof_ctx: '"Disparaître" est le sens physique premier, un objet perdu, un animal introuvable. Le verset parle de groupes humains en lien avec un chemin de vie. L\'extension "égarer" (disparaître du chemin) correspond mieux au contexte coranique.'
    },
    oublier: {
      status: 'peu_probable',
      axe1_verset: '"Oublier" est un processus mental interne, perdre le souvenir de quelque chose. Le verset parle d\'un chemin extérieur qu\'on quitte, pas d\'une information qu\'on perd en mémoire.',
      axe2_voisins: 'Les versets voisins parlent de guidance et de direction, pas de mémoire ou de souvenir.',
      axe3_sourate: 'Le thème de la sourate est la guidance, pas la mémoire.',
      axe4_coherence: 'Le Coran utilise dalla dans le sens de dévier du chemin, pas d\'oublier une information.',
      axe5_frequence: 'L\'oubli ne contribue pas directement à la mission du khalifa dans ce contexte de guidance.',
      proof_ctx: '"Oublier" est un processus interne de la mémoire. Le verset parle d\'un chemin extérieur qu\'on quitte, pas d\'information perdue. Le participe actif dallin indique un mouvement vers l\'extérieur, pas un état mental statique.'
    },
    'périr': { status: 'nul', proof_ctx: 'Irréversible et définitif. Le Coran présente souvent l\'égarement comme réversible, la guidance peut toujours ramener quelqu\'un. Le participe actif (en cours) contredit l\'idée de périr (terminé).' },
    'se mélanger': { status: 'nul', proof_ctx: 'Se perdre dans un ensemble, devenir indistinct dans la masse. Hors contexte du verset qui parle de chemins individuels.' },
    couler: { status: 'nul', proof_ctx: 'L\'eau qui disparaît dans le sol. Sens physique sans rapport avec des groupes humains et la guidance.' },
  },
}

// ═══════════════════════════════════════
// ÉTAPE 4 — Traduction + segments + démarche
// ═══════════════════════════════════════

const TRANSLATION = {
  translation_arab: "Le chemin de ceux à qui Tu as accordé Tes bienfaits, non pas ceux qui ont subi l'insatisfaction, ni ceux qui s'égarent.",
  translation_explanation: "Le verset 7 complète la demande de guidance du verset 6. Il précise quel chemin est demandé : celui de ceux qui ont reçu les bienfaits (an'amta 'alayhim, le pronom \"Tu\" est intégré dans le verbe an'amta, c'est ce qu'on appelle en arabe un pronom sujet rattaché au verbe). Le mot ghayri introduit une exclusion, c'est comme dire \"sauf\" ou \"à l'exception de\". Ensuite viennent deux groupes. Le premier est al-maghdhubi 'alayhim, un participe passif (une forme du mot qui dit que l'action est subie, pas faite). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme \"le contraire de al-rida (la satisfaction)\". Donc \"ceux sur qui l'insatisfaction est tombée\". Ce sens ne tombe pas dans l'anthropomorphisme car le Coran Lui-même utilise rida (la satisfaction) pour Dieu (radiya llahu 'anhum, Dieu est satisfait d'eux). Si Dieu peut être satisfait, Son contraire (l'insatisfaction) est un attribut valide. Le texte ne précise pas de qui vient cette insatisfaction, quand le Coran veut préciser, il le fait clairement (bi-ghadhabin min allah en 2:61, ghadhabii en 20:81). Ici il ne le fait pas, c'est un choix. Le deuxième groupe est ad-dalliina, un participe actif (une forme qui dit que l'action est en cours et faite par les personnes elles-mêmes). Ceux qui s'égarent, ils quittent activement le chemin. La différence entre les deux groupes est dans la grammaire : le premier subit (participe passif), le second agit (participe actif).",
  segments: [
    {fr:"le chemin",pos:"nom",phon:"\u1E63ir\u0101\u1E6Da",arabic:"\u0635\u0650\u0631\u064E\u0670\u0637\u064E",word_key:"srt",is_particle:false,sense_retenu:"chemin"},
    {fr:"de ceux qui",phon:"alladh\u012Bna",arabic:"\u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E",word_key:null,is_particle:true},
    {fr:"Tu as accord\u00E9 Tes bienfaits",pos:"verbe",phon:"an\u02BFamta",arabic:"\u0623\u064E\u0646\u0652\u0639\u064E\u0645\u0652\u062A\u064E",word_key:"nem",is_particle:false,sense_retenu:"bienfait"},
    {fr:"sur eux",pos:"pr\u00E9position",phon:"\u02BFalayhim",arabic:"\u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652",word_key:"ely",is_particle:false,sense_retenu:"sur"},
    {fr:"non pas",pos:"nom",phon:"ghayri",arabic:"\u063A\u064E\u064A\u0652\u0631\u0650",word_key:"ghyr",is_particle:false,sense_retenu:"sauf"},
    {fr:"ceux qui ont subi l'insatisfaction",pos:"participe_passif",phon:"al-magh\u1E0D\u016Bbi",arabic:"\u0671\u0644\u0652\u0645\u064E\u063A\u0652\u0636\u064F\u0648\u0628\u0650",word_key:"ghdb",is_particle:false,sense_retenu:"insatisfaction"},
    {fr:"sur eux",pos:"pr\u00E9position",phon:"\u02BFalayhim",arabic:"\u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652",word_key:"ely",is_particle:false,sense_retenu:"sur"},
    {fr:"et ne pas",phon:"wa-l\u0101",arabic:"\u0648\u064E\u0644\u064E\u0627",word_key:null,is_particle:true},
    {fr:"ceux qui s'\u00E9garent",pos:"participe_actif",phon:"a\u1E0D-\u1E0D\u0101ll\u012Bna",arabic:"\u0671\u0644\u0636\u0651\u064E\u0622\u0644\u0651\u0650\u064A\u0646\u064E",word_key:"dll",is_particle:false,sense_retenu:"\u00E9garer"},
  ]
}

const DAILY = [
  {analysis_id:267,sense:'insatisfaction',arabic:'\u0623\u064E\u0628\u0652\u062F\u064E\u0649 \u0639\u064E\u062F\u064E\u0645\u064E \u0631\u0650\u0636\u064E\u0627\u0647\u064F',phon:'abd\u0101 \u02BFadama ri\u1E0D\u0101hu',french:'Il a exprim\u00E9 son insatisfaction'},
  {analysis_id:267,sense:'insatisfaction',arabic:'\u0644\u064E\u0645\u0652 \u064A\u064E\u0643\u064F\u0646\u0652 \u0631\u064E\u0627\u0636\u0650\u064A\u064B\u0627 \u0639\u064E\u0646\u0652\u0647\u064F\u0645\u0652',phon:'lam yakun r\u0101\u1E0Diyan \u02BFanhum',french:'Il n\'\u00E9tait pas satisfait d\'eux'},
  {analysis_id:267,sense:'insatisfaction',arabic:'\u063A\u064E\u0636\u0650\u0628\u064E \u0645\u0650\u0646\u0652 \u0633\u064F\u0648\u0621\u0650 \u0639\u064E\u0645\u064E\u0644\u0650\u0647\u0650\u0645\u0652',phon:'gha\u1E0Diba min s\u016B\u02BEi \u02BFamalihim',french:'Il fut insatisfait de leur mauvais travail'},
  {analysis_id:268,sense:'\u00E9garer',arabic:'\u0636\u064E\u0644\u064E\u0651 \u0627\u0644\u0637\u0651\u064E\u0631\u0650\u064A\u0642\u064E',phon:'\u1E0Dalla \u1E6D-\u1E6Dar\u012Bqa',french:'Il s\'est \u00E9gar\u00E9 du chemin'},
  {analysis_id:268,sense:'\u00E9garer',arabic:'\u0644\u064E\u0627 \u062A\u064E\u0636\u0650\u0644\u0651\u064F\u0648\u0627 \u0639\u064E\u0646\u0650 \u0627\u0644\u0652\u062D\u064E\u0642\u0651\u0650',phon:'l\u0101 ta\u1E0Dill\u016B \u02BFani l-\u1E25aqq',french:'Ne vous \u00E9garez pas de la v\u00E9rit\u00E9'},
  {analysis_id:268,sense:'\u00E9garer',arabic:'\u0636\u064E\u0644\u064E\u0651 \u0633\u064E\u0639\u0652\u064A\u064F\u0647\u064F\u0645\u0652',phon:'\u1E0Dalla sa\u02BFyuhum',french:'Leurs efforts se sont \u00E9gar\u00E9s'},
  {analysis_id:262,sense:'chemin',arabic:'\u0647\u064E\u0630\u064E\u0627 \u0635\u0650\u0631\u064E\u0627\u0637\u064C \u0645\u064F\u0633\u0652\u062A\u064E\u0642\u0650\u064A\u0645\u064C',phon:'h\u0101dh\u0101 \u1E63ir\u0101\u1E6Dun mustaq\u012Bm',french:'Ceci est un chemin droit'},
  {analysis_id:262,sense:'chemin',arabic:'\u0633\u064E\u0644\u064E\u0643\u064E \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E',phon:'salaka \u1E63-\u1E63ir\u0101\u1E6Da',french:'Il a emprunt\u00E9 le chemin'},
  {analysis_id:262,sense:'chemin',arabic:'\u0623\u064E\u0631\u0650\u0646\u064E\u0627 \u0627\u0644\u0635\u0651\u0650\u0631\u064E\u0627\u0637\u064E',phon:'arin\u0101 \u1E63-\u1E63ir\u0101\u1E6Da',french:'Montre-nous le chemin'},
  {analysis_id:264,sense:'bienfait',arabic:'\u0647\u064E\u0630\u0650\u0647\u0650 \u0646\u0650\u0639\u0652\u0645\u064E\u0629\u064C \u0645\u0650\u0646\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u0650',phon:'h\u0101dhihi ni\u02BFmatun min all\u0101h',french:'Ceci est un bienfait de Dieu'},
  {analysis_id:264,sense:'bienfait',arabic:'\u0627\u064F\u0630\u0652\u0643\u064F\u0631\u064F\u0648\u0627 \u0646\u0650\u0639\u0652\u0645\u064E\u0629\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u0650 \u0639\u064E\u0644\u064E\u064A\u0652\u0643\u064F\u0645\u0652',phon:'udhkur\u016B ni\u02BFmata ll\u0101hi \u02BFalaykum',french:'Rappelez-vous le bienfait de Dieu sur vous'},
  {analysis_id:264,sense:'bienfait',arabic:'\u0627\u0644\u0646\u0651\u0650\u0639\u0652\u0645\u064E\u0629\u064F \u062A\u064E\u0632\u064F\u0648\u0644\u064F \u0628\u0650\u0627\u0644\u0652\u062C\u064F\u062D\u064F\u0648\u062F\u0650',phon:'an-ni\u02BFmatu taz\u016Blu bi-l-ju\u1E25\u016Bd',french:'Le bienfait dispara\u00EEt avec l\'ingratitude'},
  {analysis_id:266,sense:'sauf',arabic:'\u062C\u064E\u0627\u0621\u064E \u0627\u0644\u0652\u062C\u064E\u0645\u0650\u064A\u0639\u064F \u063A\u064E\u064A\u0652\u0631\u064E \u0632\u064E\u064A\u0652\u062F\u064D',phon:'j\u0101\u02BEa l-jam\u012B\u02BFu ghayra zaydin',french:'Tout le monde est venu sauf Zayd'},
  {analysis_id:266,sense:'sauf',arabic:'\u0643\u064F\u0644\u0651\u064F\u0647\u064F\u0645\u0652 \u0646\u064E\u062C\u064E\u062D\u064F\u0648\u0627 \u063A\u064E\u064A\u0652\u0631\u064E \u0648\u064E\u0627\u062D\u0650\u062F\u064D',phon:'kulluhum naja\u1E25\u016B ghayra w\u0101\u1E25idin',french:'Ils ont tous r\u00E9ussi sauf un'},
  {analysis_id:266,sense:'sauf',arabic:'\u062D\u064E\u0636\u064E\u0631\u064E \u0627\u0644\u0652\u062C\u064E\u0645\u0650\u064A\u0639\u064F \u063A\u064E\u064A\u0652\u0631\u064E \u0623\u064E\u062D\u0652\u0645\u064E\u062F\u064E',phon:'\u1E25a\u1E0Dara l-jam\u012B\u02BFu ghayra a\u1E25mad',french:'Tout le monde \u00E9tait pr\u00E9sent sauf Ahmad'},
  {analysis_id:265,sense:'sur',arabic:'\u0627\u0644\u0652\u0643\u0650\u062A\u064E\u0627\u0628\u064F \u0639\u064E\u0644\u064E\u0649 \u0627\u0644\u0637\u0651\u064E\u0627\u0648\u0650\u0644\u064E\u0629\u0650',phon:'al-kit\u0101bu \u02BFal\u0101 \u1E6D-\u1E6D\u0101wila',french:'Le livre est sur la table'},
  {analysis_id:265,sense:'sur',arabic:'\u0633\u064E\u0644\u0651\u0650\u0645\u0652 \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650',phon:'sallim \u02BFalayhi',french:'Salue-le (passe le salam sur lui)'},
  {analysis_id:265,sense:'sur',arabic:'\u0639\u064E\u0644\u064E\u064A\u0652\u0643\u064E \u0623\u064E\u0646\u0652 \u062A\u064E\u062C\u0652\u062A\u064E\u0647\u0650\u062F\u064E',phon:'\u02BFalayka an tajtahida',french:'Il t\'incombe (sur toi) de faire des efforts'},
]

const VERSE_WORDS = [
  {verse_id:7,word_key:'srt',sense_chosen:'chemin',position:1},
  {verse_id:7,word_key:'nem',sense_chosen:'bienfait',position:3},
  {verse_id:7,word_key:'ely',sense_chosen:'sur',position:4},
  {verse_id:7,word_key:'ghyr',sense_chosen:'sauf',position:5},
  {verse_id:7,word_key:'ghdb',sense_chosen:'insatisfaction',position:6},
  {verse_id:7,word_key:'ely',sense_chosen:'sur',position:7},
  {verse_id:7,word_key:'dll',sense_chosen:'\u00E9garer',position:9},
]

// ═══════════════════════════════════════
// EXÉCUTION
// ═══════════════════════════════════════

async function run() {
  log('\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557')
  log('\u2551     PIPELINE MAISON \u2014 VERSET 1:7 \u2014 VERSION FINALE       \u2551')
  log('\u2551     \u00C9tape 1: LLM | \u00C9tapes 2-3-4: Claude              \u2551')
  log('\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D')
  log('')

  log("Purge: déjà faite, skippée")

  log("Étape 1: skippée (données hardcodées)")

  // ── \u00C9TAPE 2 ──
  log('\u2550\u2550\u2550 \u00C9TAPE 2 \u2014 SENS \u00C9TYMOLOGIQUES (Claude) \u2550\u2550\u2550')
  log('')

  let totalSenses = 0
  for (const [key, root] of Object.entries(ROOTS)) {
    const senses = root.senses.map(s => ({...s, analysis_id: root.id, meaning_type: 'etymology'}))
    const {error} = await db.from('word_meanings').insert(senses)
    if (error) { log(`  \u274C ERREUR ${key}: ${error.message}`); continue }
    totalSenses += senses.length
    log(`  [${key}] ${senses.length} sens ins\u00E9r\u00E9s :`)
    for (const s of senses) {
      log(`    ${s.display_order}. ${s.sense} (${s.sense_ar})`)
    }
    log('')
  }
  log(`  \u2705 \u00C9TAPE 2 TERMIN\u00C9E \u2014 ${totalSenses} sens ins\u00E9r\u00E9s pour 6 racines`)
  log('')

  // ── \u00C9TAPE 3 ──
  log('\u2550\u2550\u2550 \u00C9TAPE 3 \u2014 ANALYSE DES SENS (Claude) \u2550\u2550\u2550')
  log('')

  let updatedCount = 0
  for (const [rootKey, rootAxes] of Object.entries(AXES)) {
    log(`  [${rootKey}]`)
    const {data: meanings} = await db.from('word_meanings')
      .select('id, sense')
      .eq('analysis_id', ROOTS[rootKey].id)
      .order('display_order')

    for (const m of meanings) {
      const axeData = rootAxes[m.sense]
      if (!axeData) { log(`    \u26A0 Pas de donn\u00E9es pour "${m.sense}"`); continue }

      const updateData = { status: axeData.status, proof_ctx: axeData.proof_ctx }
      if (axeData.axe1_verset) updateData.axe1_verset = axeData.axe1_verset
      if (axeData.axe2_voisins) updateData.axe2_voisins = axeData.axe2_voisins
      if (axeData.axe3_sourate) updateData.axe3_sourate = axeData.axe3_sourate
      if (axeData.axe4_coherence) updateData.axe4_coherence = axeData.axe4_coherence
      if (axeData.axe5_frequence) updateData.axe5_frequence = axeData.axe5_frequence

      const {error} = await db.from('word_meanings').update(updateData).eq('id', m.id)
      if (error) { log(`    \u274C ${m.sense}: ${error.message}`); continue }

      const tag = axeData.status.toUpperCase()
      const axes = axeData.axe1_verset ? ' (5 axes)' : ''
      log(`    ${m.sense} \u2192 ${tag}${axes}`)
      updatedCount++
    }
    log('')
  }
  log(`  \u2705 ${updatedCount} sens mis \u00E0 jour`)
  log('')

  // Insert verse_word_analyses
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(VERSE_WORDS)
  if (vwaErr) log(`  \u274C verse_word_analyses: ${vwaErr.message}`)
  else log(`  \u2705 ${VERSE_WORDS.length} verse_word_analyses ins\u00E9r\u00E9s`)

  log('')
  log('  R\u00C9SUM\u00C9 DES CHOIX :')
  log('  srt \u2192 chemin (RETENU) | pont (PEU PROBABLE) | avaler (NUL)')
  log('  nem \u2192 bienfait (RETENU) | confort (PROBABLE) | abondance (PEU PROBABLE)')
  log('  ely \u2192 sur (RETENU)')
  log('  ghyr \u2192 sauf (RETENU) | autre (PROBABLE) | changer (PEU PROBABLE)')
  log('  ghdb \u2192 insatisfaction (RETENU) | col\u00E8re, durcir (PROBABLE) | s\u00E9vir (PEU PROBABLE)')
  log('  dll \u2192 \u00E9garer (RETENU) | errer (PROBABLE) | dispara\u00EEtre, oublier (PEU PROBABLE)')
  log('')

  // ── \u00C9TAPE 4 ──
  log('\u2550\u2550\u2550 \u00C9TAPE 4 \u2014 TRADUCTION (Claude) \u2550\u2550\u2550')
  log('')

  const {error: vaErr} = await db.from('verse_analyses').insert({ verse_id: VERSE_ID, ...TRANSLATION })
  if (vaErr) log(`  \u274C verse_analyses: ${vaErr.message}`)
  else log('  \u2705 Traduction + segments + d\u00E9marche ins\u00E9r\u00E9s')

  const {error: dailyErr} = await db.from('word_daily').insert(DAILY)
  if (dailyErr) log(`  \u274C word_daily: ${dailyErr.message}`)
  else log(`  \u2705 ${DAILY.length} phrases du quotidien ins\u00E9r\u00E9es`)

  log('')
  log(`  TRADUCTION : "${TRANSLATION.translation_arab}"`)
  log('')

  log('\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557')
  log('\u2551     PIPELINE MAISON \u2014 VERSET 1:7 \u2014 TERMIN\u00C9 \u2705            \u2551')
  log('\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
