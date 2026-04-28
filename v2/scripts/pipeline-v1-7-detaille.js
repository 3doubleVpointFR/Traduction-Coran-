// Pipeline Maison — Verset 1:7 — AXES DÉTAILLÉS + SENS EXHAUSTIFS
// صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

const ROOTS = {
  srt: { id: 262, senses: [
    { sense: 'avaler', sense_ar: 'سَرَطَ', description: 'Faire passer dans la gorge d\'un trait, ingurgiter. C\'est le sens physique premier de la racine.', display_order: 1 },
    { sense: 'chemin', sense_ar: 'صِرَاط', description: 'Voie large et dégagée que l\'on parcourt sans obstacle. Extension du sens d\'avaler : le chemin englobe et emmène celui qui y marche.', display_order: 2 },
    { sense: 'pont', sense_ar: 'صِرَاط', description: 'Passage étroit qui relie deux rives au-dessus d\'un vide.', display_order: 3 },
  ]},
  nem: { id: 264, senses: [
    { sense: 'douceur', sense_ar: 'نَعُمَ', description: 'Être doux et lisse au toucher, texture agréable. C\'est le sens physique premier de la racine.', display_order: 1 },
    { sense: 'bétail', sense_ar: 'نَعَم', description: 'Troupeau d\'animaux domestiques (chameaux, vaches, moutons). Source concrète de richesse et de bien-être dans la vie arabe.', display_order: 2 },
    { sense: 'bienfait', sense_ar: 'نِعْمَة', description: 'Faveur qui adoucit la vie de celui qui la reçoit. Extension de douceur : ce qui rend la vie douce.', display_order: 3 },
    { sense: 'confort', sense_ar: 'نَعِيم', description: 'État de bien-être et d\'aisance où rien ne manque. La vie rendue douce par l\'abondance.', display_order: 4 },
    { sense: 'oui', sense_ar: 'نَعَمْ', description: 'Particule d\'affirmation et d\'approbation.', display_order: 5 },
    { sense: 'abondance', sense_ar: 'نَعْمَاء', description: 'Vie large et généreuse, profusion de biens.', display_order: 6 },
    { sense: 'délicatesse', sense_ar: 'نَاعِم', description: 'Finesse et raffinement, ce qui est délicat au toucher.', display_order: 7 },
  ]},
  ely: { id: 265, senses: [
    { sense: 'hauteur', sense_ar: 'عُلُوّ', description: 'Position élevée dans l\'espace, être en haut physiquement. Sens physique premier.', display_order: 1 },
    { sense: 'sur', sense_ar: 'عَلَى', description: 'Position au-dessus de quelque chose, en contact ou en surplomb. Préposition dérivée de la hauteur.', display_order: 2 },
    { sense: 'dominer', sense_ar: 'عَلَا', description: 'Exercer un contrôle depuis une position supérieure.', display_order: 3 },
    { sense: 'monter', sense_ar: 'عَلَا', description: 'S\'élever vers le haut, grimper, prendre de l\'altitude.', display_order: 4 },
    { sense: 'surpasser', sense_ar: 'تَعَالَى', description: 'Dépasser les autres en rang ou en qualité. Extension abstraite de la hauteur.', display_order: 5 },
    { sense: 'éminent', sense_ar: 'عَلِيّ', description: 'Celui qui est au-dessus des autres, de rang élevé.', display_order: 6 },
  ]},
  ghyr: { id: 266, senses: [
    { sense: 'changer', sense_ar: 'غَيَّرَ', description: 'Modifier l\'état d\'une chose, transformer. Sens premier : passer d\'un état à un autre.', display_order: 1 },
    { sense: 'autre', sense_ar: 'غَيْر', description: 'Ce qui est différent de ce qui est mentionné, distinct et séparé.', display_order: 2 },
    { sense: 'sauf', sense_ar: 'غَيْر', description: 'Exclusion d\'un élément du reste du groupe. Extension : séparer ce qui est différent.', display_order: 3 },
    { sense: 'jalousie', sense_ar: 'غَيْرَة', description: 'Sentiment protecteur intense envers ce qu\'on possède et qu\'on refuse de voir menacé.', display_order: 4 },
    { sense: 'nuage', sense_ar: 'غَيْر', description: 'Masse qui change l\'état du ciel, qui couvre et transforme l\'apparence.', display_order: 5 },
    { sense: 'puits', sense_ar: 'غَيْر', description: 'Cavité qui altère le terrain, changement dans la surface du sol.', display_order: 6 },
  ]},
  ghdb: { id: 267, senses: [
    // Sens physiques/concrets
    { sense: 'pierre dure', sense_ar: 'غَضْبَة', description: 'Roche compacte fichée dans une montagne. Sens physique premier de la racine.', display_order: 1 },
    { sense: 'éminence', sense_ar: 'غَضْبَة', description: 'Monticule, bosse de terrain. Élévation naturelle du sol.', display_order: 2 },
    { sense: 'protubérance de chair', sense_ar: 'غَضْبَة', description: 'Bosse au-dessus ou en dessous des yeux. Relief anatomique.', display_order: 3 },
    { sense: 'cuir épais', sense_ar: 'غَضِب', description: 'Peau résistante non tannée, épaisse et dure. Matériau brut.', display_order: 4 },
    { sense: 'bouclier en cuir', sense_ar: 'غَضْبَة', description: 'Protection faite de peau de chameau pour le combat.', display_order: 5 },
    { sense: 'peau de chèvre', sense_ar: 'غَضْبَة', description: 'Cuir dur de chèvre de montagne ou de poisson.', display_order: 6 },
    { sense: 'peau de tête', sense_ar: 'غَضْبَة', description: 'Cuir du crâne, la peau qui recouvre la tête. Extension du sens de cuir épais vers une partie spécifique du corps.', display_order: 7 },
    { sense: 'peau entre les cornes', sense_ar: 'غَضْبَة', description: 'Cuir entre les cornes du taureau. Zone de peau particulièrement dure et résistante.', display_order: 8 },
    { sense: 'rougeur intense', sense_ar: 'غَضْب', description: 'Rouge profond et dense, changement de couleur.', display_order: 9 },
    { sense: 'marque de variole', sense_ar: 'غَضْبَة', description: 'Cicatrice laissée par la maladie sur la peau.', display_order: 10 },
    { sense: 'motes dans l\'œil', sense_ar: 'غَضْبَة', description: 'Impuretés dans les yeux, petites particules qui gênent la vision.', display_order: 11 },
    { sense: 'durcir', sense_ar: 'غَضِبَ', description: 'Passer d\'un état souple à un état dur et rigide.', display_order: 12 },
    // Sens abstraits/émotionnels
    { sense: 'colère', sense_ar: 'غَضَب', description: 'État d\'excitation du sang du cœur en vue de revanche. Extension du durcissement intérieur qui se manifeste à l\'extérieur.', display_order: 13 },
    { sense: 'insatisfaction', sense_ar: 'غَضَب', description: 'Le Lane\'s définit ghadhab comme le contraire de al-rida. L\'insatisfaction est un état de non-contentement, l\'absence de contentement face à quelque chose.', display_order: 14 },
    { sense: 'rancœur', sense_ar: 'غَضَب', description: 'Colère latente qui persiste dans le temps, ressentiment durable. Le Lane\'s distingue ghadhab de ghayz qui est plus véhémente et explosive.', display_order: 15 },
    { sense: 'désapprobation', sense_ar: 'غَضَب', description: 'Jugement négatif rationnel qui mène à la punition ou au retrait de faveur. Un constat raisonné que quelque chose ne correspond pas à ce qui est attendu.', display_order: 16 },
    { sense: 'sévérité', sense_ar: 'غَضِب', description: 'État de fermeté dure et sévère, attitude rigide et inflexible.', display_order: 17 },
    { sense: 'sévir', sense_ar: 'غَضِبَ', description: 'Agir avec rigueur et fermeté contre quelqu\'un, traiter durement.', display_order: 18 },
    { sense: 'rupture', sense_ar: 'غَضِبَ', description: 'Rompre les liens avec quelqu\'un par mécontentement. Couper la relation suite à une insatisfaction.', display_order: 19 },
    { sense: 'austérité', sense_ar: 'غَضْبَة', description: 'Visage sévère et fermé, expression faciale dure et inflexible.', display_order: 20 },
    { sense: 'bouillonnement', sense_ar: 'غَضَب', description: 'Comme une marmite qui bout férocement, agitation intérieure intense. Métaphore physique du durcissement intérieur.', display_order: 21 },
    { sense: 'mordre le mors', sense_ar: 'غَضَب', description: 'Un cheval qui mâche son mors avec force, qui résiste au contrôle. Métaphore de tension intérieure.', display_order: 22 },
  ]},
  dll: { id: 268, senses: [
    { sense: 'disparaître', sense_ar: 'ضَلَّ', description: 'Se perdre physiquement, devenir introuvable, comme un objet ou un animal perdu. Sens physique premier.', display_order: 1 },
    { sense: 'égarer', sense_ar: 'ضَلَّ', description: 'Perdre son chemin, dévier de la route que l\'on suivait. Extension : comme celui qui disparaît du chemin connu.', display_order: 2 },
    { sense: 'oublier', sense_ar: 'ضَلَّ', description: 'Perdre le souvenir de quelque chose, ne plus retrouver une information. Ce qui a disparu de la mémoire.', display_order: 3 },
    { sense: 'errer', sense_ar: 'ضَلَّ', description: 'Vagabonder sans direction ni but, marcher sans savoir où l\'on va.', display_order: 4 },
    { sense: 'périr', sense_ar: 'ضَلَّ', description: 'Se perdre définitivement, disparaître sans retour possible. Sens extrême de la disparition.', display_order: 5 },
    { sense: 'se mélanger', sense_ar: 'ضَلَّ', description: 'Se perdre dans un ensemble, devenir indistinct dans la masse.', display_order: 6 },
    { sense: 'couler', sense_ar: 'ضَلَّ', description: 'L\'eau qui disparaît dans le sol, s\'infiltrer et se perdre.', display_order: 7 },
  ]},
}

const AXES = {
  srt: {
    chemin: {
      status: 'retenu',
      axe1_verset: 'Le verset distingue trois groupes selon leur chemin. Le mot sirat prolonge directement le verset 6 qui demande "guide-nous sur le droit chemin". Le champ lexical du verset tourne autour de la guidance, des voies à suivre et des groupes qui les empruntent. "Chemin" est le mot central de ce champ lexical, il est le sujet même du verset. L\'opposition entre le chemin des bienfaits et les chemins de l\'insatisfaction et de l\'égarement structure tout le verset.',
      axe2_voisins: 'Le verset 6 dit "ihdina s-sirata l-mustaqim" (guide-nous sur le droit chemin). Le verset 7 reprend le même mot sirat pour préciser de quel chemin il s\'agit : celui de ceux qui ont reçu les bienfaits. La continuité entre les deux versets est directe et logique. Le verset 7 est la réponse au verset 6 : le chemin demandé est celui des gens que Dieu a favorisés, pas n\'importe quel chemin.',
      axe3_sourate: 'Al-Fatiha est la sourate d\'ouverture du Coran. Elle pose les fondements de la relation entre l\'humain et Dieu : louange, miséricorde, adoration, demande d\'aide, et enfin guidance. Le chemin droit est le thème central des versets 6-7, le cœur de la demande faite à Dieu. Toute la sourate converge vers cette demande de direction.',
      axe4_coherence: 'Le Coran utilise le mot sirat des dizaines de fois, toujours dans le sens de voie ou chemin de guidance. Le mot est systématiquement associé à la direction morale ou spirituelle. Aucun verset ne contredit cette lecture. On retrouve "as-sirat al-mustaqim" (le chemin droit) comme expression récurrente dans tout le Coran.',
      axe5_frequence: 'Le chemin est la direction que le khalifa suit pour accomplir sa mission de justice et de civilisation. Sans chemin, pas de direction, pas de mission possible. Il respecte la dignité humaine car il est proposé, pas imposé. Le verset montre que certains le suivent et d\'autres non, ce qui implique le libre choix. Le chemin n\'est pas une contrainte mais une offre.',
      proof_ctx: '"Chemin" s\'inscrit parfaitement dans la continuité du verset 6, dans le thème de la sourate et dans l\'usage coranique du mot sirat. Distinction avec "pont" : le pont est un passage ponctuel entre deux rives, on le traverse et c\'est fini. Le chemin est un parcours continu tout au long de la vie. Le verset parle d\'une direction permanente, pas d\'un passage unique. Le qualificatif "droit" (mustaqim) du verset 6 s\'applique naturellement à un chemin qu\'on emprunte au quotidien, pas à un pont qu\'on traverse une seule fois.'
    },
    avaler: { status: 'nul', proof_ctx: 'Avaler est le sens physique premier de la racine, faire passer dans la gorge d\'un trait. Mais il est totalement absent du registre coranique pour ce mot. Le Coran utilise sirat exclusivement dans le sens de voie ou chemin.' },
    pont: {
      status: 'peu_probable',
      axe1_verset: 'Le pont comme passage étroit au-dessus d\'un vide ne s\'inscrit pas dans le champ lexical de la guidance et des bienfaits. Le verset parle de gens qui suivent un parcours de vie, pas de gens qui traversent un passage.',
      axe2_voisins: 'Le verset 6 parle de sirat mustaqim (droit), ce qui qualifie naturellement un chemin qu\'on emprunte au quotidien, pas un pont qu\'on traverse une seule fois.',
      axe3_sourate: 'La sourate traite de la relation continue avec Dieu, pas d\'un événement ponctuel de traversée.',
      axe4_coherence: 'Le Coran utilise sirat dans le sens de chemin de vie, pas de pont physique. L\'usage coranique est cohérent et constant.',
      axe5_frequence: 'Le pont est un passage, pas une direction de vie. Pour le khalifa, la mission est un parcours continu, pas une traversée ponctuelle.',
      proof_ctx: 'Le pont est un passage ponctuel entre deux points. Le verset parle d\'un parcours de vie continu. Le qualificatif "droit" du verset 6 s\'applique à un chemin, pas à un pont.'
    },
  },
  nem: {
    bienfait: {
      status: 'retenu',
      axe1_verset: 'Le verset oppose ceux qui ont reçu les bienfaits à ceux qui ont subi l\'insatisfaction et ceux qui s\'égarent. "Bienfait" est le pivot positif de cette opposition. La construction "an\'amta \'alayhim" (Tu as accordé sur eux) est naturelle en arabe. La forme IV du verbe (an\'ama) signifie précisément "accorder un bienfait, rendre la vie douce à quelqu\'un".',
      axe2_voisins: 'Les versets voisins parlent de louange (verset 2 : on loue pour quoi ? pour les bienfaits reçus), de miséricorde (versets 1 et 3 : la miséricorde est le bienfait premier), de guidance (verset 6 : la guidance est un bienfait). Le bienfait est le fil conducteur qui relie tous ces thèmes entre eux. Sans bienfait, pas de louange.',
      axe3_sourate: 'La Fatiha établit une relation d\'échange entre Dieu qui accorde et l\'humain qui loue et demande. Le bienfait est au cœur de cet échange : c\'est ce que Dieu donne et ce pour quoi l\'humain exprime sa gratitude.',
      axe4_coherence: 'Le Coran utilise ni\'ma (bienfait) et an\'ama (accorder un bienfait) massivement pour décrire les faveurs divines. Le verset 14:34 dit que si l\'on comptait les bienfaits de Dieu, on ne pourrait les dénombrer. Parfaitement cohérent avec cet usage.',
      axe5_frequence: 'Le bienfait dans ce verset inclut la guidance sur le chemin droit, c\'est la condition nécessaire pour que le khalifa accomplisse sa mission de justice et de civilisation. Sans le bienfait de la guidance, pas de direction, pas de mission possible. La dignité humaine elle-même est un bienfait accordé par Dieu à tous les êtres humains.',
      proof_ctx: '"Bienfait" est l\'extension naturelle du sens physique "douceur", ce qui rend la vie douce. La forme IV du verbe (an\'ama) confirme ce sens : accorder quelque chose qui adoucit la vie. Distinction avec "confort" : le confort est strictement matériel, un bon lit, de la nourriture, un abri. Le bienfait englobe le matériel et l\'immatériel : la guidance, le savoir, la paix intérieure. Un prophète guidé mais persécuté a reçu le bienfait de la guidance sans le confort matériel.'
    },
    confort: {
      status: 'probable',
      axe1_verset: 'Le confort comme état de bien-être s\'inscrit dans le champ lexical positif du verset. Cependant, le verset parle de guidance et de chemins de vie, pas de conditions matérielles. Le confort est une forme de bienfait mais réduite à sa dimension matérielle.',
      axe2_voisins: 'Les versets voisins parlent de miséricorde et de guidance, des concepts immatériels. Le confort matériel ne couvre pas ces dimensions spirituelles.',
      axe3_sourate: 'La sourate traite de la relation spirituelle avec Dieu, pas de bien-être physique. Le confort est trop limité pour le thème de la sourate.',
      axe4_coherence: 'Le Coran utilise na\'im (confort, délice) dans d\'autres contextes, souvent pour le paradis. Mais ici la forme IV du verbe an\'ama pointe vers le bienfait accordé, pas le confort reçu.',
      axe5_frequence: 'Le confort matériel peut aider le khalifa dans sa mission mais n\'est pas sa condition première. La guidance (bienfait immatériel) est plus fondamentale que le confort pour accomplir la mission de justice.',
      proof_ctx: 'Le confort désigne un bien-être matériel et physique. Le bienfait peut exister sans confort : un prophète guidé mais persécuté a reçu le bienfait sans le confort. Le bienfait est la cause, le confort est parfois une conséquence.'
    },
    abondance: {
      status: 'peu_probable',
      axe1_verset: 'L\'abondance est une forme de bienfait mais réduite à la dimension quantitative. Le verset ne parle pas de quantité mais de la nature de ce qui a été accordé.',
      axe2_voisins: 'Les versets voisins parlent de qualités (miséricorde, guidance), pas de quantités. L\'abondance ne s\'inscrit pas dans cette dynamique qualitative.',
      axe3_sourate: 'La sourate ne traite pas d\'abondance matérielle mais de relation spirituelle.',
      axe4_coherence: 'Le Coran utilise na\'ma\' pour l\'abondance mais pas dans ce contexte de guidance.',
      axe5_frequence: 'L\'abondance ne contribue pas directement à la mission du khalifa dans ce contexte de guidance spirituelle.',
      proof_ctx: 'L\'abondance est une forme de bienfait réduite à la quantité. Le verset ne parle pas de combien on a reçu mais de la nature de ce qui a été accordé.'
    },
    douceur: { status: 'nul', proof_ctx: 'Sens physique premier (être lisse au toucher). La forme IV du verbe (an\'ama) a transformé ce sens concret en "accorder ce qui rend la vie douce". Le verset utilise cette forme IV, pas la forme I.' },
    'bétail': { status: 'nul', proof_ctx: 'Source concrète de richesse. Le verbe an\'amta (forme IV) veut dire "accorder un bienfait", pas "donner du bétail".' },
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
      axe3_sourate: 'La sourate Al-Fatiha pose les catégories fondamentales de l\'expérience humaine. "Sauf" est le mot qui sépare ces catégories proprement.',
      axe4_coherence: 'Le Coran utilise ghayri comme exclusion dans de nombreux passages. La construction "sirata lladhina an\'amta \'alayhim ghayri..." est une structure classique d\'inclusion suivie d\'exclusion. Parfaitement cohérent.',
      axe5_frequence: 'Pour le khalifa, la capacité de distinguer clairement quel chemin suivre et lequel éviter est fondamentale pour accomplir sa mission de justice. "Sauf" trace cette limite de manière non ambiguë. Il respecte la dignité humaine car il exclut des chemins, pas des personnes de leur dignité.',
      proof_ctx: '"Sauf" est l\'extension du sens "changer" vers l\'exclusion : séparer ce qui est différent du reste. Distinction avec "autre" : "autre" constate passivement la différence, "sauf" pose un acte d\'exclusion actif. Le verset exclut activement deux groupes du chemin des bienfaits.'
    },
    autre: {
      status: 'probable',
      axe1_verset: '"Autre" indique que les groupes suivants sont différents du premier. Le champ lexical de la séparation est compatible avec le verset. Cependant, "autre" constate simplement la différence sans la charger d\'intentionnalité.',
      axe2_voisins: 'Les versets voisins posent un cadre de guidance. "Autre" est compatible mais manque de force pour marquer l\'exclusion nette que le verset construit entre les trois groupes.',
      axe3_sourate: 'Compatible avec le thème de la sourate qui distingue des catégories humaines.',
      axe4_coherence: 'Le Coran utilise ghayri dans les deux sens (autre et sauf). Les deux lectures sont cohérentes.',
      axe5_frequence: '"Autre" constate la différence sans tracer de limite active. Pour le khalifa, la limite claire (sauf) est plus utile que le simple constat de différence (autre).',
      proof_ctx: '"Autre" indique simplement la différence. "Sauf" pose un acte d\'exclusion actif. Le verset n\'observe pas qu\'il existe d\'autres personnes, il exclut activement deux groupes du chemin des bienfaits.'
    },
    changer: {
      status: 'peu_probable',
      axe1_verset: 'Le sens "changer" est le sens premier de la racine mais dans ce verset ghayri est en position nominale et fonctionne comme une exclusion, pas comme un verbe de transformation.',
      axe2_voisins: 'Les versets voisins ne parlent pas de changement ou de transformation. Le contexte est celui de la catégorisation.',
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
      status: 'probable',
      axe1_verset: 'Le verset oppose trois groupes. Ceux qui ont reçu les bienfaits face à ceux qui ont subi le ghadhab et ceux qui s\'égarent. L\'insatisfaction comme "état de non-contentement" pourrait structurer cette opposition. Cependant, le test de compatibilité grammaticale pose problème : le participe passif (maghdhub) impose que le sens puisse être subi, et "subir l\'insatisfaction" ne se dit pas en français courant.',
      axe2_voisins: 'Les versets voisins parlent de louange (verset 2), de miséricorde (versets 1 et 3), de guidance (verset 6). Le ghadhab est le contraire de cet ensemble positif. L\'insatisfaction pourrait s\'inscrire dans cette opposition, mais la formulation passive ("subir l\'insatisfaction") reste bancale en français.',
      axe3_sourate: 'La Fatiha présente la miséricorde dans les versets 1 à 3, puis le ghadhab dans le verset 7. L\'insatisfaction est compatible avec cette structure mais la compatibilité grammaticale avec le participe passif est insuffisante.',
      axe4_coherence: 'D\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme "le contraire de al-rida". Le mot rida n\'a pas encore été analysé par la pipeline, donc on ne se prononce pas sur son sens exact. L\'insatisfaction est une traduction possible du "contraire de al-rida".',
      axe5_frequence: 'Al-maghdhubi est un participe passif. Le test grammatical "subir l\'insatisfaction" ne fonctionne pas naturellement en français courant. Ce sens est éliminé par le test de compatibilité grammaticale, même s\'il est étymologiquement valide.',
      proof_ctx: '"Insatisfaction" est étymologiquement valide : le Lane\'s définit ghadhab comme "le contraire de al-rida". Cependant, le test de compatibilité grammaticale avec le participe passif l\'élimine : "subir l\'insatisfaction" ne se dit pas en français courant. La désapprobation passe ce test ("subir la désapprobation" fonctionne). La frontière : l\'insatisfaction décrit un état intérieur, la désapprobation décrit un acte extérieur qui peut être subi.'
    },
    'colère': {
      status: 'probable',
      axe1_verset: 'La colère comme émotion s\'inscrit dans le champ lexical de la conséquence, c\'est un sentiment négatif en opposition avec les bienfaits. Cependant, la colère est le sentiment de l\'émetteur, pas l\'expérience du receveur. Le verset décrit ce que les gens subissent (participe passif), pas ce que quelqu\'un ressent. "Subir la colère" fonctionne en français courant, le test grammatical passe.',
      axe2_voisins: 'Les versets voisins posent un cadre de guidance et de relation avec Dieu. La colère est compatible mais le texte ne précise pas de qui elle vient ni pourquoi. Quand le Coran veut parler de la colère divine, il le précise explicitement : "bi-ghadhabin min allah" (2:61), "ghadhabii" (20:81). Dans le verset 1:7, rien n\'est précisé.',
      axe3_sourate: 'La sourate présente la miséricorde en ouverture. La colère comme son contraire est compatible avec la structure. Cependant, la colère est une émotion humaine : l\'attribuer implicitement à Dieu sans que le texte le dise serait de l\'anthropomorphisme.',
      axe4_coherence: 'Le Coran utilise ghadhab fréquemment. Quand la source est Dieu, il le précise explicitement. Dans le verset 1:7, rien n\'est précisé. La colère comme émotion implique un émetteur que le texte ne nomme pas. L\'attribuer implicitement serait de l\'interprétation.',
      axe5_frequence: 'La colère est une émotion humaine. L\'attribuer à Dieu sans que le texte le dise explicitement serait de l\'anthropomorphisme. Le participe passif décrit un état subi, pas une émotion ressentie. La désapprobation (jugement rationnel) est plus compatible avec un participe passif que la colère (émotion).',
      proof_ctx: 'La colère est l\'extension émotionnelle du sens physique "durcir". "Subir la colère" fonctionne en français courant (test grammatical OK). Cependant, la colère est une émotion humaine, et l\'attribuer à Dieu dans ce verset (qui ne précise pas la source) serait de l\'anthropomorphisme. La désapprobation est un jugement rationnel qui ne nécessite pas d\'émotion.'
    },
    durcir: {
      status: 'probable',
      axe1_verset: 'Le durcissement comme changement d\'état (souple vers rigide) peut s\'inscrire dans l\'opposition avec les bienfaits (douceur vers dureté). L\'opposition étymologique fonctionne : la racine nem signifie douceur, la racine ghdb dans son sens physique signifie durcissement.',
      axe2_voisins: 'Compatible avec les versets voisins qui posent un cadre de guidance. Le durcissement des conditions de vie peut être vu comme une conséquence de ne pas suivre le chemin.',
      axe3_sourate: 'La sourate oppose miséricorde (douceur, tendresse) et ce que subissent ceux qui sont sur le mauvais chemin. Le durcissement est compatible comme contraire de la douceur.',
      axe4_coherence: 'Le Coran utilise ghadhab avec des conséquences concrètes comme des destructions, des exils, des conditions de vie durcies. Le durcissement des conditions est une lecture possible. Cependant, les sources étymologiques définissent le mot explicitement comme "le contraire de al-rida", pas comme "durcissement".',
      axe5_frequence: 'Le participe passif (maghdhub) décrit un état subi. Le durcissement est neutre, il ne dit pas qui a durci ni pourquoi. Cependant, les sources étymologiques donnent une définition plus précise que le sens physique brut.',
      proof_ctx: '"Durcir" est le sens physique qui sous-tend tous les sens abstraits de la racine. L\'opposition étymologique avec bienfait (nem signifie douceur) fonctionne. Cependant, les sources étymologiques définissent explicitement ghadhab comme "le contraire de al-rida". Cette définition abstraite est plus précise que le sens physique brut pour un verset qui parle de la relation entre Dieu et des groupes humains.'
    },
    'désapprobation': {
      status: 'retenu',
      axe1_verset: 'La désapprobation est un jugement négatif rationnel, un constat que quelque chose ne correspond pas à ce qui est attendu. Le verset oppose les bienfaités (ceux qui ont reçu les bienfaits) aux maghdhub (ceux qui ont subi le ghadhab). L\'opposition bienfait/désapprobation est structurellement cohérente. Le participe passif (maghdhub) fonctionne avec le test : "subir la désapprobation" se dit en français courant.',
      axe2_voisins: 'Les versets voisins parlent de bienfaits accordés, de miséricorde, de guidance. Le ghadhab est le contraire de cet ensemble positif. La désapprobation s\'inscrit comme contraire de cette dynamique de bienfaisance. Le Coran utilise le verbe radiya pour Dieu dans d\'autres versets, ce qui montre que Dieu peut approuver ou désapprouver, sans anthropomorphisme.',
      axe3_sourate: 'La Fatiha oppose les bienfaits (verset 7a) et le ghadhab (verset 7b). La désapprobation est un jugement rationnel qui ne nécessite pas d\'émotion, ce qui évite l\'anthropomorphisme. Elle s\'inscrit dans le ton de la sourate qui pose des catégories claires sans attribuer d\'émotions humaines à Dieu.',
      axe4_coherence: 'Le Lane\'s définit ghadhab comme "le contraire de al-rida". Le mot rida n\'a pas encore été analysé par la pipeline, donc on ne se prononce pas sur son sens exact. Ce qu\'on peut dire : "subir la désapprobation" fonctionne en français courant avec le participe passif, et la désapprobation est un jugement rationnel, pas une émotion. Le Coran utilise radiya pour Dieu, ce qui confirme que le champ du jugement (approuver/désapprouver) est applicable à Dieu sans anthropomorphisme.',
      axe5_frequence: 'La désapprobation est un jugement rationnel, pas une émotion. Pour le khalifa, comprendre que certains chemins sont désapprouvés est un avertissement fondamental. Ce sens respecte la dignité humaine car il décrit un jugement sur les actes, pas une condamnation des personnes. La désapprobation peut être levée si le chemin change, contrairement à la colère qui est une réaction irrationnelle.',
      proof_ctx: 'Le Lane\'s définit ghadhab comme "le contraire de al-rida". Le mot rida n\'a pas encore été analysé par la pipeline. Test de compatibilité grammaticale : "subir la désapprobation" fonctionne en français courant avec le participe passif. La désapprobation est un jugement rationnel, pas une émotion, ce qui évite l\'anthropomorphisme. Distinction avec "colère" : la colère est une émotion humaine, la désapprobation est un jugement. Le texte ne précise pas de qui vient le ghadhab. Distinction avec "insatisfaction" : "subir l\'insatisfaction" ne se dit pas en français courant, ce qui élimine ce sens par le test grammatical.'
    },
    'sévir': {
      status: 'peu_probable',
      axe1_verset: 'Sévir est l\'action concrète de punir quelqu\'un. Le verset utilise un participe passif qui décrit un état permanent ("ceux sur qui c\'est tombé"), pas une action en cours. Sévir implique un moment précis de punition, le verset décrit une condition permanente.',
      axe2_voisins: 'Les versets voisins décrivent des états et des relations, pas des actions ponctuelles de punition. Sévir serait une rupture de ton.',
      axe3_sourate: 'Sévir est trop ponctuel pour le ton de la Fatiha qui est une ouverture, pas un rappel de punitions passées.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour sévir et punir (\'aqaba, \'adh-dhaba). Ghadhab décrit l\'état qui précède l\'action, pas l\'acte de punir.',
      axe5_frequence: 'Sévir est une action ponctuelle. Le verset décrit un état permanent (participe passif). Le verset parle d\'états durables.',
      proof_ctx: 'Sévir est l\'action concrète de punir. Le verset décrit un état permanent (participe passif), pas une action ponctuelle. Le Coran utilise d\'autres mots pour l\'acte de punir.'
    },
    'rancœur': {
      status: 'peu_probable',
      axe1_verset: 'La rancœur est une colère latente qui persiste. Le verset utilise un participe passif (maghdhub) qui décrit un état subi, pas un sentiment ressenti. Le champ lexical du verset est celui de la catégorisation de groupes humains, pas de sentiments intérieurs.',
      axe2_voisins: 'Les versets voisins posent un cadre de guidance et de miséricorde. La rancœur serait un sentiment personnel qui ne s\'inscrit pas dans ce cadre.',
      axe3_sourate: 'La Fatiha traite de la relation entre l\'humain et Dieu avec des attributs comme la miséricorde. La rancœur est un sentiment humain, l\'attribuer à Dieu serait de l\'anthropomorphisme.',
      axe4_coherence: 'Le Lane\'s distingue ghadhab de ghayz (colère plus véhémente). La rancœur est plus proche de ghayz que de ghadhab. Le Lane\'s note que ghadhab est le contraire de rida, pas un synonyme de rancœur.',
      axe5_frequence: 'La rancœur est un sentiment humain de ressentiment durable. L\'attribuer à Dieu sans indication explicite du texte serait de l\'interprétation.',
      proof_ctx: 'La rancœur est une colère latente et persistante. Le Lane\'s distingue ghadhab de ghayz. La rancœur se rapproche plus de ghayz que de ghadhab. Le participe passif décrit un état subi, pas un sentiment ressenti.'
    },
    'sévérité': {
      status: 'peu_probable',
      axe1_verset: 'La sévérité est un état de fermeté dure. Le verset utilise un participe passif (maghdhub) qui décrit un état subi. "Subir la sévérité" fonctionne en français courant mais le mot est moins précis que désapprobation pour traduire "le contraire de al-rida".',
      axe2_voisins: 'Les versets voisins posent un cadre de miséricorde. La sévérité est compatible comme contraire de la douceur mais le Lane\'s définit ghadhab comme le contraire de al-rida, pas comme le contraire de rahma (miséricorde).',
      axe3_sourate: 'La sourate oppose miséricorde et conséquences négatives. La sévérité est une conséquence possible mais moins précise étymologiquement.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour la sévérité (shadid, qaswa). Ghadhab est défini par le Lane\'s comme le contraire de al-rida.',
      axe5_frequence: 'La sévérité décrit une attitude, pas un état relationnel. Le verset parle de la relation entre Dieu et des groupes humains.',
      proof_ctx: 'La sévérité est un état de fermeté dure. Le Lane\'s définit ghadhab comme le contraire de al-rida, pas comme synonyme de sévérité. Le Coran utilise d\'autres mots pour la sévérité (shadid, qaswa).'
    },
    'rupture': {
      status: 'peu_probable',
      axe1_verset: 'La rupture est l\'acte de couper les liens. Le verset utilise un participe passif qui décrit un état permanent, pas un acte ponctuel de séparation.',
      axe2_voisins: 'Les versets voisins ne parlent pas de rupture de liens mais de chemins et de guidance.',
      axe3_sourate: 'La Fatiha pose des fondements de relation, pas des récits de rupture.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour la rupture (qata\'a). Ghadhab n\'est pas synonyme de rupture.',
      axe5_frequence: 'La rupture est un acte ponctuel. Le verset décrit un état permanent (participe passif).',
      proof_ctx: 'La rupture est l\'acte de couper les liens. Le verset décrit un état permanent (participe passif), pas un acte ponctuel. Le Coran utilise d\'autres mots pour la rupture (qata\'a).'
    },
    'pierre dure': { status: 'nul', proof_ctx: 'Roche compacte fichée dans une montagne. Le verset parle de groupes humains et de chemins de vie, pas de géologie.' },
    'éminence': { status: 'nul', proof_ctx: 'Monticule, bosse de terrain. Hors du contexte moral du verset.' },
    'protubérance de chair': { status: 'nul', proof_ctx: 'Relief anatomique. Aucun rapport avec le verset.' },
    'cuir épais': { status: 'nul', proof_ctx: 'Matériau artisanal. Sans rapport avec le contexte.' },
    'bouclier en cuir': { status: 'nul', proof_ctx: 'Protection de combat. Hors contexte.' },
    'peau de chèvre': { status: 'nul', proof_ctx: 'Cuir dur. Hors contexte.' },
    'peau de tête': { status: 'nul', proof_ctx: 'Cuir du crâne. Sens anatomique sans rapport avec le contexte moral du verset.' },
    'peau entre les cornes': { status: 'nul', proof_ctx: 'Zone de peau dure du taureau. Sens anatomique animal sans rapport.' },
    'rougeur intense': { status: 'nul', proof_ctx: 'Changement physique de couleur. Le verset décrit un état de vie, pas une réaction corporelle.' },
    'marque de variole': { status: 'nul', proof_ctx: 'Cicatrice de maladie. Aucun rapport avec le verset.' },
    'motes dans l\'œil': { status: 'nul', proof_ctx: 'Impuretés oculaires. Sens médical sans rapport avec le contexte de guidance.' },
    'austérité': { status: 'nul', proof_ctx: 'Visage sévère et fermé. Sens trop spécifique et physique pour un verset qui parle de groupes humains et de chemins de vie.' },
    'bouillonnement': { status: 'nul', proof_ctx: 'Métaphore physique d\'agitation intérieure. Sens trop imagé pour le contexte moral du verset.' },
    'mordre le mors': { status: 'nul', proof_ctx: 'Métaphore équestre de résistance au contrôle. Sens trop spécifique pour le contexte du verset.' },
  },
  dll: {
    'égarer': {
      status: 'retenu',
      axe1_verset: 'Le verset oppose le chemin droit (sirat, guidance) à l\'égarement (dalal). "Égarer" est le contraire direct de "guider" (hdy, verset 6). Le champ lexical est parfaitement aligné : guidance, chemin, égarement. Le verset nomme trois destins possibles, les bienfaits, l\'insatisfaction, l\'égarement, et "égarer" est le troisième.',
      axe2_voisins: 'Le verset 6 dit "guide-nous sur le droit chemin" (ihdina). Le verset 7 montre les trois résultats possibles : bienfaits, insatisfaction, égarement. L\'égarement est le contraire thématique de la guidance demandée au verset 6.',
      axe3_sourate: 'La sourate Al-Fatiha est construite autour de la guidance. L\'égarement est sa conclusion logique, le rappel qu\'on peut perdre le chemin.',
      axe4_coherence: 'Le Coran utilise dalla et dalal massivement pour décrire ceux qui quittent la voie de guidance. Le mot apparaît dans plus de 190 versets. Parfaitement cohérent.',
      axe5_frequence: 'Ad-dalliina est un participe actif, "ceux qui s\'égarent activement". Le participe actif montre que l\'action est en cours et faite par les personnes elles-mêmes. Comparaison avec le mot précédent (maghdhub, participe passif) : l\'insatisfaction est subie (passif), l\'égarement est fait (actif). Le verset distingue deux types de mauvais chemin : celui qu\'on subit et celui qu\'on fait soi-même.',
      proof_ctx: '"Égarer" est l\'extension de "disparaître" (sens physique premier) vers le domaine moral : disparaître du chemin connu. Le participe actif montre que l\'égarement est un processus en cours dont les personnes sont les agents actifs. Distinction avec "errer" : "errer" est vagabonder sans but, il n\'y a jamais eu de chemin. "Égarer" signifie qu\'il y avait un chemin et qu\'on l\'a perdu. Le verset mentionne explicitement le sirat (chemin), les égarés l\'ont quitté.'
    },
    errer: {
      status: 'probable',
      axe1_verset: '"Errer" est compatible avec le champ lexical du verset qui parle de chemins et de direction. Cependant, errer implique qu\'il n\'y a jamais eu de direction, on vagabonde dans le vide. Le verset présuppose l\'existence d\'un chemin (le sirat), ce que "errer" ne capture pas.',
      axe2_voisins: 'Les versets voisins parlent de guidance. Errer est le contraire partiel de la guidance, celui qui erre n\'est pas guidé. Mais le verset implique que le chemin existe et a été montré.',
      axe3_sourate: 'Compatible avec le thème de la sourate mais moins précis que "égarer". La sourate parle d\'un chemin connu, errer implique l\'absence de chemin.',
      axe4_coherence: 'Le Coran utilise dalla pour ceux qui ont quitté un chemin connu, pas pour ceux qui n\'ont jamais eu de direction.',
      axe5_frequence: 'Errer ne distingue pas entre celui qui a perdu son chemin et celui qui n\'en a jamais eu. Pour le khalifa, cette distinction est importante.',
      proof_ctx: '"Errer" est vagabonder sans but, il n\'y a jamais eu de chemin. "Égarer" signifie qu\'il y avait un chemin et qu\'on l\'a perdu. Le verset mentionne explicitement le sirat (chemin), les égarés l\'ont quitté.'
    },
    'disparaître': {
      status: 'peu_probable',
      axe1_verset: 'Le verset parle de chemins et de groupes humains. "Disparaître" est trop physique, les gens ne disparaissent pas littéralement.',
      axe2_voisins: 'Le verset 6 demande la guidance. Le contraire de la guidance c\'est perdre son chemin, pas disparaître physiquement.',
      axe3_sourate: 'Hors thème pour une sourate centrée sur la guidance spirituelle.',
      axe4_coherence: 'Le Coran utilise dalla pour l\'égarement moral, pas la disparition physique.',
      axe5_frequence: 'La disparition physique ne contribue pas à la mission du khalifa dans ce contexte de guidance.',
      proof_ctx: '"Disparaître" est le sens physique premier. Le verset parle de groupes humains en lien avec un chemin de vie. L\'extension "égarer" (disparaître du chemin) correspond mieux au contexte coranique.'
    },
    oublier: {
      status: 'peu_probable',
      axe1_verset: '"Oublier" est un processus mental interne. Le verset parle d\'un chemin extérieur qu\'on quitte, pas d\'une information qu\'on perd en mémoire.',
      axe2_voisins: 'Les versets voisins parlent de guidance et de direction, pas de mémoire.',
      axe3_sourate: 'Le thème de la sourate est la guidance, pas la mémoire.',
      axe4_coherence: 'Le Coran utilise dalla dans le sens de dévier du chemin, pas d\'oublier une information.',
      axe5_frequence: 'L\'oubli ne contribue pas directement à la mission du khalifa dans ce contexte.',
      proof_ctx: '"Oublier" est un processus interne de la mémoire. Le verset parle d\'un chemin extérieur qu\'on quitte. Le participe actif dallin indique un mouvement vers l\'extérieur, pas un état mental statique.'
    },
    'périr': { status: 'nul', proof_ctx: 'Irréversible et définitif. Le Coran présente souvent l\'égarement comme réversible. Le participe actif (en cours) contredit l\'idée de périr (terminé).' },
    'se mélanger': { status: 'nul', proof_ctx: 'Se perdre dans un ensemble, devenir indistinct. Hors contexte du verset qui parle de chemins individuels.' },
    couler: { status: 'nul', proof_ctx: 'L\'eau qui disparaît dans le sol. Sens physique sans rapport avec des groupes humains et la guidance.' },
  },
}

// ÉTAPE 4
const VERSE = {
  verse_id: 7,
  words: [
    {verse_id:7, word_key:'srt', sense_chosen:'chemin', position:1},
    {verse_id:7, word_key:'nem', sense_chosen:'bienfait', position:3},
    {verse_id:7, word_key:'ely', sense_chosen:'sur', position:4},
    {verse_id:7, word_key:'ghyr', sense_chosen:'sauf', position:5},
    {verse_id:7, word_key:'ghdb', sense_chosen:'désapprobation', position:6},
    {verse_id:7, word_key:'ely', sense_chosen:'sur', position:7},
    {verse_id:7, word_key:'dll', sense_chosen:'égarer', position:9},
  ],
  translation_arab: "Le chemin de ceux à qui Tu as accordé Tes bienfaits, non pas ceux qui ont subi la désapprobation, ni ceux qui s'égarent.",
  translation_explanation: "Le verset 7 complète la demande de guidance du verset 6. Il précise quel chemin est demandé : celui de ceux qui ont reçu les bienfaits (an'amta 'alayhim, le pronom \"Tu\" est intégré dans le verbe an'amta, c'est ce qu'on appelle en arabe un pronom sujet rattaché au verbe). Le mot ghayri introduit une exclusion, c'est comme dire \"sauf\" ou \"à l'exception de\". Ensuite viennent deux groupes. Le premier est al-maghdhubi 'alayhim, un participe passif (une forme du mot qui dit que l'action est subie, pas faite). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme \"le contraire de al-rida\". Le mot rida n'a pas encore été analysé par la pipeline. Le test de compatibilité grammaticale avec le participe passif impose que le sens puisse être subi en français courant : \"subir la désapprobation\" fonctionne, c'est un jugement rationnel qui peut être subi. De plus, la désapprobation n'est pas une émotion humaine, ce qui évite l'anthropomorphisme. Le texte ne précise pas de qui vient cette désapprobation, quand le Coran veut préciser, il le fait clairement (bi-ghadhabin min allah en 2:61, ghadhabii en 20:81). Ici il ne le fait pas, c'est un choix. Le deuxième groupe est ad-dalliina, un participe actif (une forme qui dit que l'action est en cours et faite par les personnes elles-mêmes). Ceux qui s'égarent, ils quittent activement le chemin. La différence entre les deux groupes est dans la grammaire : le premier subit (participe passif), le second agit (participe actif).",
  segments: [
    {fr:"le chemin",pos:"nom",phon:"ṣirāṭa",arabic:"صِرَٰطَ",word_key:"srt",is_particle:false,sense_retenu:"chemin"},
    {fr:"de ceux qui",phon:"alladhīna",arabic:"ٱلَّذِينَ",word_key:null,is_particle:true},
    {fr:"Tu as accordé Tes bienfaits",pos:"verbe",phon:"anʿamta",arabic:"أَنْعَمْتَ",word_key:"nem",is_particle:false,sense_retenu:"bienfait"},
    {fr:"sur eux",pos:"préposition",phon:"ʿalayhim",arabic:"عَلَيْهِمْ",word_key:"ely",is_particle:false,sense_retenu:"sur"},
    {fr:"non pas",pos:"nom",phon:"ghayri",arabic:"غَيْرِ",word_key:"ghyr",is_particle:false,sense_retenu:"sauf"},
    {fr:"ceux qui ont subi la désapprobation",pos:"participe_passif",phon:"al-maghḍūbi",arabic:"ٱلْمَغْضُوبِ",word_key:"ghdb",is_particle:false,sense_retenu:"désapprobation"},
    {fr:"sur eux",pos:"préposition",phon:"ʿalayhim",arabic:"عَلَيْهِمْ",word_key:"ely",is_particle:false,sense_retenu:"sur"},
    {fr:"et ne pas",phon:"wa-lā",arabic:"وَلَا",word_key:null,is_particle:true},
    {fr:"ceux qui s'égarent",pos:"participe_actif",phon:"aḍ-ḍāllīna",arabic:"ٱلضَّآلِّينَ",word_key:"dll",is_particle:false,sense_retenu:"égarer"},
  ]
}

const DAILY = [
  {analysis_id:267,sense:'désapprobation',arabic:'أَبْدَى عَدَمَ رِضَاهُ',phon:'abdā ʿadama riḍāhu',french:'Il a exprimé sa désapprobation'},
  {analysis_id:267,sense:'désapprobation',arabic:'لَمْ يَكُنْ رَاضِيًا عَنْهُمْ',phon:'lam yakun rāḍiyan ʿanhum',french:'Il n\'était pas satisfait d\'eux'},
  {analysis_id:267,sense:'désapprobation',arabic:'غَضِبَ مِنْ سُوءِ عَمَلِهِمْ',phon:'ghaḍiba min sūʾi ʿamalihim',french:'Il fut désapprobateur de leur mauvais travail'},
  {analysis_id:268,sense:'égarer',arabic:'ضَلَّ الطَّرِيقَ',phon:'ḍalla ṭ-ṭarīqa',french:'Il s\'est égaré du chemin'},
  {analysis_id:268,sense:'égarer',arabic:'لَا تَضِلُّوا عَنِ الْحَقِّ',phon:'lā taḍillū ʿani l-ḥaqq',french:'Ne vous égarez pas de la vérité'},
  {analysis_id:268,sense:'égarer',arabic:'ضَلَّ سَعْيُهُمْ',phon:'ḍalla saʿyuhum',french:'Leurs efforts se sont égarés'},
  {analysis_id:262,sense:'chemin',arabic:'هَذَا صِرَاطٌ مُسْتَقِيمٌ',phon:'hādhā ṣirāṭun mustaqīm',french:'Ceci est un chemin droit'},
  {analysis_id:262,sense:'chemin',arabic:'سَلَكَ الصِّرَاطَ',phon:'salaka ṣ-ṣirāṭa',french:'Il a emprunté le chemin'},
  {analysis_id:262,sense:'chemin',arabic:'أَرِنَا الصِّرَاطَ',phon:'arinā ṣ-ṣirāṭa',french:'Montre-nous le chemin'},
  {analysis_id:264,sense:'bienfait',arabic:'هَذِهِ نِعْمَةٌ مِنَ اللَّهِ',phon:'hādhihi niʿmatun min allāh',french:'Ceci est un bienfait de Dieu'},
  {analysis_id:264,sense:'bienfait',arabic:'اُذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ',phon:'udhkurū niʿmata llāhi ʿalaykum',french:'Rappelez-vous le bienfait de Dieu sur vous'},
  {analysis_id:264,sense:'bienfait',arabic:'النِّعْمَةُ تَزُولُ بِالْجُحُودِ',phon:'an-niʿmatu tazūlu bi-l-juḥūd',french:'Le bienfait disparaît avec l\'ingratitude'},
  {analysis_id:266,sense:'sauf',arabic:'جَاءَ الْجَمِيعُ غَيْرَ زَيْدٍ',phon:'jāʾa l-jamīʿu ghayra zaydin',french:'Tout le monde est venu sauf Zayd'},
  {analysis_id:266,sense:'sauf',arabic:'كُلُّهُمْ نَجَحُوا غَيْرَ وَاحِدٍ',phon:'kulluhum najaḥū ghayra wāḥidin',french:'Ils ont tous réussi sauf un'},
  {analysis_id:266,sense:'sauf',arabic:'حَضَرَ الْجَمِيعُ غَيْرَ أَحْمَدَ',phon:'ḥaḍara l-jamīʿu ghayra aḥmad',french:'Tout le monde était présent sauf Ahmad'},
  {analysis_id:265,sense:'sur',arabic:'الْكِتَابُ عَلَى الطَّاوِلَةِ',phon:'al-kitābu ʿalā ṭ-ṭāwila',french:'Le livre est sur la table'},
  {analysis_id:265,sense:'sur',arabic:'سَلِّمْ عَلَيْهِ',phon:'sallim ʿalayhi',french:'Salue-le (passe le salam sur lui)'},
  {analysis_id:265,sense:'sur',arabic:'عَلَيْكَ أَنْ تَجْتَهِدَ',phon:'ʿalayka an tajtahida',french:'Il t\'incombe (sur toi) de faire des efforts'},
]

async function run() {
  log('============================================')
  log('  PIPELINE MAISON — VERSET 1:7 — AXES DÉTAILLÉS')
  log('  22 sens pour ghdb (exhaustif Lane\'s)')
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
  log('  VERSET 1:7 — TERMINÉ (22 sens ghdb)')
  log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
