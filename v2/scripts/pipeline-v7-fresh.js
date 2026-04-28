// Pipeline Maison — Verset 1:7 — Script NEUF (réflexion de zéro)
// Généré après consultation du Lane's Arabic-English Lexicon (Edward Lane, 1863)
// Règles appliquées : rules_pipeline_maison.md
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

async function run() {

log('============================================')
log('  PIPELINE MAISON — VERSET 1:7 (SCRIPT NEUF)')
log('============================================')
log('')
log('>>> ÉTAPE 1 — déjà exécutée via LLM')
log('  Résultat : 9 segments, 6 racines (srt, nem, ely, ghyr, ghdb, dll)')
log('')

// ═══ ÉTAPE 2 — Sens étymologiques ═══
log('>>> ÉTAPE 2 — SENS ÉTYMOLOGIQUES')
log('  Source : Lane\'s Arabic-English Lexicon (Edward Lane, 1863)')
log('')

const roots = {
  srt: { id: 262, senses: [
    { sense: 'avaler', sense_ar: 'سَرَطَ', description: 'Faire passer dans la gorge d\'un trait, ingurgiter rapidement sans mâcher. Sens physique premier de la racine, partagé avec la variante s-r-t.', display_order: 1 },
    { sense: 'chemin', sense_ar: 'صِرَاط', description: 'Route, voie que l\'on emprunte pour se déplacer. Le Lane\'s le définit comme "a road, or way". Extension du sens physique : le chemin englobe celui qui y marche comme la gorge englobe ce qui y passe.', display_order: 2 },
    { sense: 'pont', sense_ar: 'صِرَاط', description: 'Passage qui relie deux rives. Le Lane\'s mentionne aussi le sens théologique d\'un pont au-dessus de l\'enfer, mais le sens premier est simplement un passage étroit.', display_order: 3 },
    { sense: 'épée longue', sense_ar: 'صُرَاط', description: 'Longue épée. Sens attesté dans le Lane\'s comme variante dialectale.', display_order: 4 },
  ]},
  nem: { id: 264, senses: [
    { sense: 'douceur', sense_ar: 'نَعُمَ', description: 'Être doux, tendre et lisse au toucher, en particulier ce qui touche les pieds. Sens physique premier de la racine : la qualité tactile de ce qui est souple et agréable.', display_order: 1 },
    { sense: 'vie agréable', sense_ar: 'نَعِمَ', description: 'Mener une vie abondante, facile et plaisante. Quand la vie est douce, sans manque ni privation.', display_order: 2 },
    { sense: 'accorder une faveur', sense_ar: 'أَنْعَمَ', description: 'Conférer un bienfait à quelqu\'un, lui accorder une faveur. Forme IV du verbe : faire en sorte que la vie de l\'autre devienne douce.', display_order: 3 },
    { sense: 'bienfait', sense_ar: 'نِعْمَة', description: 'Faveur, bénédiction, cause de bonheur. Ce qui améliore la condition de celui qui le reçoit, que ce soit matériel ou immatériel.', display_order: 4 },
    { sense: 'jouissance', sense_ar: 'نَعِيم', description: 'Plaisir, délice, abondance et aisance. La vie rendue douce par la profusion de biens.', display_order: 5 },
    { sense: 'bétail', sense_ar: 'نَعَم', description: 'Troupeau d\'animaux domestiques qui paissent : chameaux, vaches, moutons et chèvres. Source concrète de richesse dans la vie arabe.', display_order: 6 },
    { sense: 'oui', sense_ar: 'نَعَمْ', description: 'Particule d\'affirmation et d\'approbation. Mot utilisé pour confirmer ou accepter.', display_order: 7 },
    { sense: 'choyer', sense_ar: 'نَعَّمَ', description: 'Nourrir bien, dorloter, rendre la vie douce à quelqu\'un par des soins attentifs. Forme II du verbe.', display_order: 8 },
  ]},
  ely: { id: 265, senses: [
    { sense: 'hauteur', sense_ar: 'عُلُوّ', description: 'Position élevée dans l\'espace, être en haut physiquement. Sens physique premier de la racine.', display_order: 1 },
    { sense: 'sur', sense_ar: 'عَلَى', description: 'Préposition indiquant la position au-dessus de quelque chose, en contact ou en surplomb.', display_order: 2 },
    { sense: 'dominer', sense_ar: 'عَلَا', description: 'Exercer un contrôle ou une autorité depuis une position supérieure.', display_order: 3 },
    { sense: 'monter', sense_ar: 'عَلَا', description: 'S\'élever vers le haut, grimper, prendre de l\'altitude.', display_order: 4 },
    { sense: 'surpasser', sense_ar: 'تَعَالَى', description: 'Dépasser les autres en rang ou en qualité. Extension abstraite de la hauteur.', display_order: 5 },
    { sense: 'éminent', sense_ar: 'عَلِيّ', description: 'De rang élevé, qui occupe une position haute.', display_order: 6 },
  ]},
  ghyr: { id: 266, senses: [
    { sense: 'changer', sense_ar: 'غَيَّرَ', description: 'Modifier l\'état d\'une chose, la transformer. Sens premier de la racine : passer d\'un état à un autre.', display_order: 1 },
    { sense: 'autre', sense_ar: 'غَيْر', description: 'Ce qui est différent de ce qui est mentionné, distinct et séparé.', display_order: 2 },
    { sense: 'sauf', sense_ar: 'غَيْر', description: 'Exclusion d\'un élément du reste du groupe. Séparer activement ce qui est différent.', display_order: 3 },
    { sense: 'jalousie', sense_ar: 'غَيْرَة', description: 'Sentiment protecteur intense envers ce qu\'on possède et qu\'on refuse de voir menacé par le changement.', display_order: 4 },
    { sense: 'nuage', sense_ar: 'غَيْر', description: 'Masse qui change l\'état du ciel, qui couvre et transforme l\'apparence.', display_order: 5 },
    { sense: 'puits', sense_ar: 'غَيْر', description: 'Cavité qui altère le terrain, changement dans la surface du sol.', display_order: 6 },
  ]},
  ghdb: { id: 267, senses: [
    { sense: 'pierre dure', sense_ar: 'غَضْبَة', description: 'Roche compacte et dure fichée dans une montagne. Sens physique premier de la racine : la dureté brute.', display_order: 1 },
    { sense: 'éminence', sense_ar: 'غَضْبَة', description: 'Monticule, petite colline. Élévation naturelle du sol.', display_order: 2 },
    { sense: 'protubérance de chair', sense_ar: 'غَضْبَة', description: 'Bosse au-dessus ou en dessous des yeux, gonflement naturel de la paupière.', display_order: 3 },
    { sense: 'cuir épais', sense_ar: 'غَضِب', description: 'Peau résistante non tannée, épaisse et dure. Matériau brut.', display_order: 4 },
    { sense: 'bouclier en cuir', sense_ar: 'غَضْبَة', description: 'Protection faite de peau de chameau pliée pour le combat.', display_order: 5 },
    { sense: 'peau de chèvre', sense_ar: 'غَضْبَة', description: 'Cuir dur de chèvre de montagne, de poisson, ou de taureau entre les cornes.', display_order: 6 },
    { sense: 'rougeur intense', sense_ar: 'غَضْب', description: 'Rouge profond et dense. Le sang qui afflue et change la couleur de la surface.', display_order: 7 },
    { sense: 'éruption cutanée', sense_ar: 'غِضَاب', description: 'Maladie de la peau, éruption ou marque de variole. Changement pathologique.', display_order: 8 },
    { sense: 'durcir', sense_ar: 'غَضِبَ', description: 'Passer d\'un état souple à un état dur et rigide. Le processus qui rend quelque chose inflexible.', display_order: 9 },
    { sense: 'bouillonnement', sense_ar: 'تَغَضَّبَ', description: 'La marmite qui bout férocement. Métaphore du sang qui bout intérieurement.', display_order: 10 },
    { sense: 'colère', sense_ar: 'غَضَب', description: 'Le Lane\'s le définit comme "un état d\'excitation du sang du coeur en vue de revanche". Réaction émotionnelle violente et spontanée qui durcit le visage et fait rougir. Extension du durcissement intérieur vers l\'extérieur.', display_order: 11 },
    { sense: 'rancœur', sense_ar: 'غَضَب', description: 'Colère latente qui persiste dans le temps. Le Lane\'s distingue ghadhab (latent) de ghayz (plus véhément mais ponctuel). État durable de mécontentement intérieur.', display_order: 12 },
    { sense: 'désapprobation', sense_ar: 'غَضَب', description: 'Le Lane\'s note que la désapprobation de Dieu mène à la punition. Jugement négatif sévère qui se traduit par des conséquences. Quand on refuse d\'accepter le comportement de quelqu\'un et qu\'on le signale activement.', display_order: 13 },
    { sense: 'insatisfaction', sense_ar: 'غَضَب', description: 'Le Lane\'s définit ghadhab explicitement comme "le contraire de al-rida (la satisfaction)". État de non-contentement. Jugement rationnel que quelque chose ne correspond pas à ce qu\'on attendait.', display_order: 14 },
    { sense: 'sévérité', sense_ar: 'غَضُوب', description: 'État de fermeté dure et austère. Visage fermé et sévère. Le Lane\'s utilise ghadhub pour décrire une femme au visage sévère.', display_order: 15 },
    { sense: 'sévir', sense_ar: 'غَضِبَ', description: 'Agir avec rigueur et fermeté contre quelqu\'un, traiter durement. L\'action concrète de punir.', display_order: 16 },
    { sense: 'rupture', sense_ar: 'غَاضَبَ', description: 'Rompre les liens avec quelqu\'un par colère ou désaccord. Forme III du verbe : se séparer dans l\'animosité.', display_order: 17 },
  ]},
  dll: { id: 268, senses: [
    { sense: 'disparaître', sense_ar: 'ضَلَّ', description: 'Se perdre physiquement, devenir introuvable. Le Lane\'s donne : "a thing became lost; it perished, came to nought". Sens physique premier.', display_order: 1 },
    { sense: 'égarer', sense_ar: 'ضَلَّ', description: 'Dévier de la bonne voie, manquer ou perdre le droit chemin. Le Lane\'s donne : "deviated from the right way". Le contraire de la guidance (huda).', display_order: 2 },
    { sense: 'se cacher', sense_ar: 'ضَلَّ', description: 'Devenir imperceptible, latent, caché. Le Lane\'s note : "was, or became, unperceived or imperceptible, hidden".', display_order: 3 },
    { sense: 'oublier', sense_ar: 'ضَلَّ', description: 'Perdre le souvenir de quelque chose. Le Lane\'s note que la mémoire "devient absente".', display_order: 4 },
    { sense: 'périr', sense_ar: 'ضَلَّ', description: 'Se perdre définitivement, disparaître sans retour possible. Sens extrême de la disparition.', display_order: 5 },
    { sense: 'enterrer', sense_ar: 'أَضَلَّ', description: 'Enfouir et cacher quelque chose dans la terre. Forme IV : faire disparaître en enterrant.', display_order: 6 },
    { sense: 'errer', sense_ar: 'ضَلَّ', description: 'Vagabonder sans direction ni but. Marcher sans savoir où l\'on va, sans chemin à suivre.', display_order: 7 },
  ]},
}

let totalSenses = 0
for (const [key, root] of Object.entries(roots)) {
  const senses = root.senses.map(s => ({...s, analysis_id: root.id, meaning_type: 'etymology'}))
  const {error} = await db.from('word_meanings').insert(senses)
  if (error) { log('  ERREUR ' + key + ': ' + error.message); continue }
  totalSenses += senses.length
  log('  [' + key + '] ' + senses.length + ' sens insérés')
  for (const s of senses) log('    ' + s.display_order + '. ' + s.sense + ' — ' + s.description.substring(0, 70) + '...')
  log('')
}
log('  TOTAL : ' + totalSenses + ' sens pour ' + Object.keys(roots).length + ' racines')
log('')

// ═══ ÉTAPE 3 — Analyse ═══
log('>>> ÉTAPE 3 — ANALYSE DES SENS')
log('  Règle appliquée : compatibilité grammaticale (test subir/faire)')
log('')

const axes = {
  srt: {
    chemin: {
      status: 'retenu',
      axe1_verset: 'Le verset distingue trois groupes selon leur chemin. Le mot sirat prolonge directement le verset 6 qui demande "guide-nous sur le droit chemin". Le champ lexical du verset tourne entièrement autour de la guidance, des voies à suivre et des groupes qui les empruntent. "Chemin" est le mot central de ce champ lexical, il est le sujet même du verset.',
      axe2_voisins: 'Le verset 6 dit "ihdina s-sirata l-mustaqim" (guide-nous sur le droit chemin). Le verset 7 reprend le même mot sirat pour préciser de quel chemin il s\'agit : celui de ceux qui ont reçu les bienfaits. La continuité entre les deux versets est directe.',
      axe3_sourate: 'Al-Fatiha pose les fondements de la relation entre l\'humain et Dieu : louange, miséricorde, adoration, demande d\'aide, et enfin guidance. Le chemin droit est le coeur de la demande faite à Dieu dans les versets 6-7.',
      axe4_coherence: 'Le Coran utilise le mot sirat des dizaines de fois, toujours dans le sens de voie ou chemin de guidance. Aucun verset ne contredit cette lecture.',
      axe5_frequence: 'Le chemin est la direction que le khalifa suit pour accomplir sa mission de justice. Il respecte la dignité humaine car il est proposé, pas imposé. Le verset montre que certains le suivent et d\'autres non, ce qui implique le libre choix.',
      proof_ctx: '"Chemin" s\'inscrit parfaitement dans la continuité du verset 6 et dans l\'usage coranique du mot sirat. Distinction avec "pont" : le pont est un passage ponctuel entre deux rives, on le traverse une fois et c\'est fini. Le chemin est un parcours continu tout au long de la vie. Le qualificatif "droit" (mustaqim) du verset 6 s\'applique naturellement à un chemin qu\'on emprunte au quotidien.',
    },
    avaler: { status: 'nul', proof_ctx: 'Sens physique premier de la racine. Totalement absent du registre coranique pour ce mot. Le Coran utilise sirat exclusivement dans le sens de voie ou chemin.' },
    pont: {
      status: 'peu_probable',
      axe1_verset: 'Le pont comme passage au-dessus d\'un vide ne s\'inscrit pas dans le champ lexical de la guidance et des bienfaits. Le verset parle de parcours de vie, pas de traversée.',
      axe2_voisins: 'Le verset 6 qualifie le sirat de "droit" (mustaqim), ce qui décrit naturellement un chemin qu\'on emprunte, pas un pont qu\'on traverse.',
      axe3_sourate: 'La sourate traite d\'une relation continue avec Dieu, pas d\'un événement ponctuel.',
      axe4_coherence: 'Le Coran utilise sirat pour des chemins de vie, pas pour des ponts physiques.',
      axe5_frequence: 'Le pont est un passage, pas une direction de vie. La mission du khalifa est un parcours continu.',
      proof_ctx: 'Le pont est un passage ponctuel. Le verset parle d\'un parcours de vie continu. Le pont implique une traversée unique, le verset décrit des gens qui suivent ou quittent activement leur voie.',
    },
    'épée longue': { status: 'nul', proof_ctx: 'Variante dialectale pour une longue épée. Aucun rapport avec le contexte de guidance du verset.' },
  },
  nem: {
    bienfait: {
      status: 'retenu',
      axe1_verset: 'Le verset oppose ceux qui ont reçu les bienfaits à ceux qui ont subi la désapprobation et ceux qui s\'égarent. "Bienfait" est le pivot positif de cette opposition. La forme IV du verbe (an\'ama) signifie précisément "accorder un bienfait, conférer une faveur à quelqu\'un".',
      axe2_voisins: 'Les versets voisins parlent de louange (verset 2 : on loue pour les bienfaits reçus), de miséricorde (versets 1 et 3 : la miséricorde est le bienfait premier), de guidance (verset 6 : la guidance est un bienfait). Le bienfait est le fil conducteur de tous ces thèmes.',
      axe3_sourate: 'La Fatiha établit une relation d\'échange entre Dieu qui accorde et l\'humain qui loue et demande. Le bienfait est au coeur de cet échange.',
      axe4_coherence: 'Le Coran utilise ni\'ma (bienfait) et an\'ama (accorder un bienfait) massivement pour les faveurs divines. Le verset 14:34 dit qu\'on ne pourrait dénombrer les bienfaits de Dieu.',
      axe5_frequence: 'Le bienfait inclut la guidance sur le chemin droit, condition nécessaire pour la mission du khalifa. La dignité humaine elle-même est un bienfait accordé par Dieu.',
      proof_ctx: '"Bienfait" est ce qui rend la vie douce, extension naturelle du sens physique "douceur". La forme IV du verbe (an\'ama) confirme : accorder quelque chose qui adoucit la vie. Distinction avec "confort" : le confort est strictement matériel. Le bienfait englobe le matériel et l\'immatériel : la guidance, le savoir, la paix intérieure. Un prophète guidé mais persécuté a reçu le bienfait sans le confort. Distinction avec "jouissance" : la jouissance est un plaisir personnel. Le bienfait est une faveur reçue, pas un plaisir recherché.',
    },
    'vie agréable': {
      status: 'probable',
      axe1_verset: 'La "vie agréable" s\'inscrit dans le champ lexical positif du verset. Cependant le verset parle de ce que Dieu a accordé (forme IV), pas de l\'état de vie de ceux qui reçoivent.',
      axe2_voisins: 'Les versets voisins parlent de miséricorde et de guidance, pas de qualité de vie.',
      axe3_sourate: 'La sourate traite de la relation avec Dieu, pas de la qualité de vie personnelle.',
      axe4_coherence: 'Le Coran utilise la forme IV an\'ama pour l\'acte d\'accorder, pas pour décrire un état de vie.',
      axe5_frequence: 'La vie agréable peut être une conséquence du bienfait mais n\'est pas le bienfait lui-même.',
      proof_ctx: 'La "vie agréable" décrit un état personnel. Le verset utilise la forme IV du verbe (an\'ama = accorder), qui décrit l\'acte de donner, pas l\'état de celui qui reçoit. Le bienfait est la faveur accordée, la vie agréable est sa conséquence possible.',
    },
    'accorder une faveur': {
      status: 'probable',
      axe1_verset: 'C\'est exactement la forme verbale utilisée dans le verset (an\'amta = Tu as accordé une faveur). Cependant c\'est le verbe, pas le nom. Le sens retenu doit être le nom correspondant à cette action : le bienfait.',
      axe2_voisins: 'Parfaitement cohérent avec les versets voisins.',
      axe3_sourate: 'Cohérent avec le thème de la sourate.',
      axe4_coherence: 'Usage coranique standard.',
      axe5_frequence: 'L\'acte d\'accorder contribue à la mission du khalifa.',
      proof_ctx: '"Accorder une faveur" est l\'action verbale dont "bienfait" est le résultat nominal. Le verset utilise le verbe (an\'amta), mais le sens retenu pour la racine doit être le concept global : le bienfait. L\'action d\'accorder et le bienfait accordé sont deux faces de la même racine.',
    },
    jouissance: {
      status: 'peu_probable',
      axe1_verset: 'La jouissance est un plaisir personnel. Le verset parle de ce que Dieu a accordé, pas de plaisir individuel.',
      axe2_voisins: 'Les versets voisins parlent de miséricorde et de guidance, pas de plaisir.',
      axe3_sourate: 'La sourate ne traite pas de plaisir personnel.',
      axe4_coherence: 'Le Coran utilise na\'im (jouissance) souvent pour le paradis, pas dans ce contexte de guidance.',
      axe5_frequence: 'La jouissance n\'est pas la condition première de la mission du khalifa.',
      proof_ctx: 'La jouissance est un plaisir personnel ressenti. Le bienfait est une faveur accordée par un autre. Le verset parle de ce que Dieu donne, pas de ce que les gens ressentent.',
    },
    douceur: { status: 'nul', proof_ctx: 'Sens physique premier (être lisse au toucher). La forme IV du verbe a transformé ce sens en "accorder ce qui rend la vie douce".' },
    'bétail': { status: 'nul', proof_ctx: 'Troupeau d\'animaux domestiques. Le verbe an\'amta (forme IV) veut dire "accorder un bienfait", pas "donner du bétail".' },
    oui: { status: 'nul', proof_ctx: 'Particule d\'affirmation sans lien avec le contexte verbal du verset.' },
    choyer: { status: 'nul', proof_ctx: 'Nourrir et dorloter (forme II). Le verset utilise la forme IV (accorder un bienfait), pas la forme II.' },
  },
  ely: {
    sur: {
      status: 'retenu',
      axe1_verset: '\'Alayhim fonctionne comme préposition dans ce verset. Elle relie le verbe an\'amta à son complément. La construction "an\'amta \'alayhim" est une expression arabe standard.',
      axe2_voisins: 'Usage prépositional standard dans les versets voisins.',
      axe3_sourate: 'Fonction grammaticale pure.',
      axe4_coherence: 'Le Coran utilise \'ala comme préposition des milliers de fois.',
      axe5_frequence: 'Fonction grammaticale, pas de sens autonome à analyser.',
      proof_ctx: 'Fonction de préposition pure. \'Alayhim signifie "sur eux". Les autres sens de la racine ne s\'appliquent pas en position de préposition.',
    },
    hauteur: { status: 'nul', proof_ctx: 'Sens physique premier. Ici \'ala est préposition, pas nom.' },
    dominer: { status: 'nul', proof_ctx: 'Position de préposition, pas de verbe.' },
    monter: { status: 'nul', proof_ctx: 'Fonction prépositionnelle.' },
    surpasser: { status: 'nul', proof_ctx: 'Fonction prépositionnelle.' },
    'éminent': { status: 'nul', proof_ctx: 'Fonction prépositionnelle, pas d\'adjectif.' },
  },
  ghyr: {
    sauf: {
      status: 'retenu',
      axe1_verset: 'Le verset trace une frontière nette entre ceux qui ont reçu les bienfaits et deux groupes négatifs. "Sauf" est le mot qui trace cette frontière, il exclut activement les deux groupes.',
      axe2_voisins: 'Le verset 6 demande un chemin précis. Le verset 7 le définit par inclusion puis par exclusion ("sauf"). "Sauf" est l\'outil de cette exclusion.',
      axe3_sourate: 'La Fatiha pose les catégories fondamentales. "Sauf" les sépare proprement.',
      axe4_coherence: 'Le Coran utilise ghayri comme exclusion dans de nombreux passages. Structure classique.',
      axe5_frequence: 'Distinguer quel chemin suivre et lequel éviter est fondamental pour le khalifa. "Sauf" trace cette limite. Il exclut des chemins, pas des personnes de leur dignité.',
      proof_ctx: '"Sauf" sépare activement ce qui est différent du reste. Distinction avec "autre" : "autre" constate passivement la différence. "Sauf" exclut activement. Le verset ne constate pas qu\'il existe d\'autres personnes, il exclut deux groupes du chemin des bienfaits.',
    },
    autre: {
      status: 'probable',
      axe1_verset: '"Autre" indique la différence. Compatible mais manque d\'intentionnalité.',
      axe2_voisins: 'Compatible mais ne marque pas l\'exclusion nette que le verset construit.',
      axe3_sourate: 'Compatible avec le thème.',
      axe4_coherence: 'Le Coran utilise ghayri dans les deux sens. Cohérent.',
      axe5_frequence: '"Autre" constate la différence sans tracer de limite active.',
      proof_ctx: '"Autre" indique la différence. "Sauf" exclut activement. Le verset exclut deux groupes, il ne constate pas juste qu\'il existe d\'autres personnes.',
    },
    changer: {
      status: 'peu_probable',
      axe1_verset: 'Sens premier de la racine mais ici ghayri est en position nominale et fonctionne comme une exclusion.',
      axe2_voisins: 'Les versets ne parlent pas de changement.',
      axe3_sourate: 'La sourate ne traite pas du changement.',
      axe4_coherence: 'Le verbe ghayyara est utilisé pour "changer", ici ghayri est un nom d\'exclusion.',
      axe5_frequence: 'Le changement n\'est pas pertinent dans ce contexte de catégorisation.',
      proof_ctx: 'Sens premier (transformation). Mais ici ghayri est en position nominale et fonctionne comme exclusion.',
    },
    jalousie: { status: 'nul', proof_ctx: 'Sentiment protecteur sans rapport avec l\'exclusion entre groupes.' },
    nuage: { status: 'nul', proof_ctx: 'Phénomène météorologique sans rapport avec la guidance.' },
    puits: { status: 'nul', proof_ctx: 'Formation géologique sans rapport avec le verset.' },
  },
  ghdb: {
    'désapprobation': {
      status: 'retenu',
      axe1_verset: 'Le verset oppose trois groupes : ceux qui ont reçu les bienfaits (approbation implicite), ceux qui ont subi la désapprobation, et ceux qui s\'égarent. L\'opposition approbation et désapprobation structure le verset. La racine nem (bienfait, marque de satisfaction et d\'approbation) face à la racine ghdb (désapprobation, rejet du comportement) forme un couple cohérent.',
      axe2_voisins: 'Les versets voisins parlent de louange (verset 2 : on loue car Dieu approuve), de miséricorde (versets 1 et 3 : la miséricorde est l\'expression de Son approbation), de guidance (verset 6 : guider est un acte d\'approbation). La désapprobation est le contraire de cet ensemble positif.',
      axe3_sourate: 'La Fatiha présente la miséricorde (approbation divine) en ouverture, puis la désapprobation en fermeture. La sourate encadre l\'expérience humaine entre ces deux pôles : l\'approbation qui se manifeste par les bienfaits, et la désapprobation qui se manifeste par leur retrait.',
      axe4_coherence: 'D\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme "le contraire de al-rida (la satisfaction)" et la "désapprobation de Dieu" est notée comme menant à la punition. Le Coran utilise rida pour Dieu à de nombreuses reprises : radiya llahu \'anhum (Dieu a approuvé/est satisfait d\'eux) dans les versets 5:119, 9:100, 58:22, 98:8. Si le Coran attribue l\'approbation à Dieu, son contraire (la désapprobation) est un attribut valide. Quand le Coran veut préciser la source, il le fait : bi-ghadhabin min allah (2:61), ghadhabii (20:81). Ici aucune source n\'est précisée.',
      axe5_frequence: 'Al-maghdhubi est un participe passif (une forme qui dit que l\'action est subie). Test de compatibilité grammaticale : "subir la désapprobation" se dit naturellement en français courant. La désapprobation est un jugement rationnel, pas une émotion. Pour le khalifa, comprendre que certains chemins mènent à la désapprobation est un avertissement fondamental. Ce sens respecte la dignité humaine car il décrit un jugement sur des actes, pas une condamnation des personnes.',
      proof_ctx: 'D\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme "le contraire de al-rida (la satisfaction)" et la désapprobation de Dieu est explicitement mentionnée comme menant à des conséquences. Le Coran utilise rida (approbation) pour Dieu (radiya llahu anhum), ce qui rend la désapprobation applicable sans anthropomorphisme. Test de compatibilité grammaticale : le mot est au participe passif (maghdhub = ceux sur qui c\'est tombé). "Subir la désapprobation" se dit naturellement en français. Distinction avec colère : la colère est une émotion violente et spontanée. L\'attribuer à Dieu sans que le texte le dise serait de l\'anthropomorphisme. La désapprobation est un jugement rationnel, pas un sentiment. Distinction avec insatisfaction : "subir l\'insatisfaction" ne se dit pas en français courant. L\'insatisfaction est un état intérieur qu\'on ressent, pas quelque chose qu\'on fait subir à quelqu\'un. La désapprobation est un jugement qu\'on exprime et que l\'autre subit. Distinction avec durcir : le durcissement est le sens physique brut de la racine. Le verset parle d\'une relation entre Dieu et des groupes humains, pas de physique.',
    },
    insatisfaction: {
      status: 'probable',
      axe1_verset: 'L\'insatisfaction comme contraire de la satisfaction s\'inscrit dans l\'opposition du verset (bienfaits vs insatisfaction). C\'est la définition étymologique première donnée par le Lane\'s. Cependant, "subir l\'insatisfaction" ne se dit pas en français courant.',
      axe2_voisins: 'Compatible avec les versets voisins qui parlent de satisfaction divine (louange, miséricorde).',
      axe3_sourate: 'Compatible avec la structure de la sourate.',
      axe4_coherence: 'Définition directe du Lane\'s : "le contraire de al-rida". Parfaitement attesté.',
      axe5_frequence: 'L\'insatisfaction est un jugement rationnel. Cependant, le participe passif exige un sens qu\'on peut subir, et "subir l\'insatisfaction" ne passe pas le test de compatibilité grammaticale en français courant.',
      proof_ctx: 'L\'insatisfaction est la définition étymologique directe du Lane\'s pour ghadhab : "le contraire de al-rida (la satisfaction)". C\'est un sens parfaitement attesté et non anthropomorphique. Cependant, le test de compatibilité grammaticale l\'élimine du choix retenu : le mot est au participe passif (maghdhub), et "subir l\'insatisfaction" ne se dit pas en français courant. L\'insatisfaction est un état intérieur que l\'on ressent, pas quelque chose que l\'on fait subir. La désapprobation, elle, est un jugement qu\'on exprime et que l\'autre subit.',
    },
    'colère': {
      status: 'probable',
      axe1_verset: 'La colère s\'inscrit dans le champ lexical de la conséquence. Cependant, la colère est le sentiment de l\'émetteur, pas l\'expérience du receveur. Le verset décrit ce que les gens subissent (participe passif).',
      axe2_voisins: 'Compatible mais le texte ne précise pas de qui elle vient. Quand le Coran veut parler de la colère de Dieu, il le précise avec "min allah" ou un pronom possessif.',
      axe3_sourate: 'La sourate présente la miséricorde en ouverture. La colère comme son contraire est compatible mais c\'est une émotion, pas un jugement.',
      axe4_coherence: 'Le Coran utilise ghadhab fréquemment. Quand la source est Dieu, il le précise : bi-ghadhabin min allah (2:61), ghadhabii (20:81). Ici rien n\'est précisé.',
      axe5_frequence: 'La colère est une émotion humaine. L\'attribuer à Dieu sans que le texte le dise serait de l\'anthropomorphisme. "Subir la colère" fonctionne en français, mais le problème est l\'anthropomorphisme, pas la compatibilité grammaticale.',
      proof_ctx: 'La colère est le sens le plus courant de la racine. "Subir la colère" fonctionne en français (compatibilité grammaticale OK). Cependant, la colère est une émotion humaine violente et spontanée. L\'attribuer à Dieu sans que le texte le dise explicitement serait de l\'anthropomorphisme. Le Coran attribue la satisfaction (rida) à Dieu, pas la colère. Son contraire direct est la désapprobation (jugement rationnel), pas la colère (réaction émotionnelle).',
    },
    'rancœur': {
      status: 'probable',
      axe1_verset: 'La rancœur comme colère latente et durable colle avec le participe passif (état permanent). "Subir la rancœur" fonctionne en français.',
      axe2_voisins: 'Compatible avec les versets voisins.',
      axe3_sourate: 'La rancœur comme état permanent est compatible avec la structure.',
      axe4_coherence: 'Les sources étymologiques distinguent ghadhab (latent) de ghayz (véhément). La rancœur correspond à cette latence.',
      axe5_frequence: 'La rancœur est une émotion humaine. L\'attribuer à Dieu sans que le texte le dise serait de l\'anthropomorphisme.',
      proof_ctx: 'La rancœur est une colère latente et durable. "Subir la rancœur" fonctionne en français (compatibilité grammaticale OK). Cependant, la rancœur est une émotion humaine. L\'attribuer à Dieu sans que le texte le dise serait de l\'anthropomorphisme. La désapprobation est un jugement rationnel, pas un sentiment.',
    },
    durcir: {
      status: 'probable',
      axe1_verset: 'Le durcissement comme changement d\'état fonctionne en opposition avec les bienfaits (douceur vs dureté). L\'opposition étymologique entre nem (douceur) et ghdb (durcissement) est cohérente.',
      axe2_voisins: 'Compatible avec les versets voisins.',
      axe3_sourate: 'La sourate oppose miséricorde (douceur) et ce que subissent les déviants (dureté).',
      axe4_coherence: 'Les sources étymologiques définissent le mot comme "le contraire de la satisfaction", pas comme "durcissement". La définition abstraite est plus précise que le sens physique.',
      axe5_frequence: '"Subir le durcissement" est bancal en français. Le test de compatibilité grammaticale pose question.',
      proof_ctx: '"Durcir" est le sens physique qui sous-tend tous les sens abstraits. L\'opposition avec bienfait (nem = douceur) fonctionne au niveau physique. Cependant, "subir le durcissement" est bancal en français, et les sources étymologiques donnent une définition abstraite plus précise. Le verset parle d\'une relation, pas de physique.',
    },
    'sévérité': {
      status: 'peu_probable',
      axe1_verset: 'La sévérité décrit un visage fermé et inflexible. Qualité de caractère, pas un état relationnel.',
      axe2_voisins: 'Compatible partiellement.',
      axe3_sourate: 'Trop centré sur le caractère de l\'émetteur, pas sur l\'expérience du receveur.',
      axe4_coherence: 'Le Lane\'s utilise ghadhub pour la sévérité (adjectif), mais le verset utilise le participe passif maghdhub.',
      axe5_frequence: 'La sévérité est une qualité de l\'émetteur. Le participe passif décrit l\'expérience du receveur.',
      proof_ctx: 'La sévérité est une qualité de celui qui l\'exerce, pas de celui qui la subit. Le verset parle de ceux qui subissent. "Subir la sévérité" fonctionne en français mais le sens est trop centré sur le caractère de l\'émetteur.',
    },
    'sévir': {
      status: 'peu_probable',
      axe1_verset: 'Sévir est l\'action concrète de punir. Le participe passif décrit un état permanent, pas une action en cours.',
      axe2_voisins: 'Les versets décrivent des états, pas des actions ponctuelles.',
      axe3_sourate: 'Trop ponctuel pour le ton de la Fatiha.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour punir (\'aqaba, \'adh-dhaba).',
      axe5_frequence: 'Sévir est une action ponctuelle. Le verset décrit un état permanent.',
      proof_ctx: 'Sévir est l\'action concrète de punir. Le verset décrit un état permanent (participe passif), pas une action ponctuelle.',
    },
    rupture: {
      status: 'peu_probable',
      axe1_verset: 'La rupture est l\'acte de rompre les liens. Le participe passif décrit un état subi, pas un acte de séparation.',
      axe2_voisins: 'Les versets posent des catégories, pas des actes de rupture.',
      axe3_sourate: 'La sourate catégorise, elle ne raconte pas des ruptures.',
      axe4_coherence: 'La forme III (ghadhaba) porte le sens de rupture. Le verset utilise le participe passif de la forme I.',
      axe5_frequence: 'La rupture est un acte ponctuel. Le verset décrit un état durable.',
      proof_ctx: 'La rupture est l\'acte de rompre les liens (forme III). Le verset utilise le participe passif de la forme I, pas la forme III.',
    },
    'pierre dure': { status: 'nul', proof_ctx: 'Roche compacte. Le verset parle de groupes humains, pas de géologie.' },
    'éminence': { status: 'nul', proof_ctx: 'Monticule, bosse de terrain. Hors contexte moral.' },
    'protubérance de chair': { status: 'nul', proof_ctx: 'Relief anatomique. Aucun rapport avec le verset.' },
    'cuir épais': { status: 'nul', proof_ctx: 'Matériau artisanal. Sans rapport.' },
    'bouclier en cuir': { status: 'nul', proof_ctx: 'Protection de combat. Hors contexte.' },
    'peau de chèvre': { status: 'nul', proof_ctx: 'Cuir dur. Hors contexte.' },
    'rougeur intense': { status: 'nul', proof_ctx: 'Changement de couleur physique. Le verset décrit un état de vie, pas une réaction corporelle.' },
    'éruption cutanée': { status: 'nul', proof_ctx: 'Maladie de la peau. Aucun rapport.' },
    bouillonnement: { status: 'nul', proof_ctx: 'Métaphore de la marmite qui bout. Sens physique sans rapport avec la guidance.' },
  },
  dll: {
    'égarer': {
      status: 'retenu',
      axe1_verset: 'Le verset oppose le chemin droit (sirat, guidance) à l\'égarement (dalal). "Égarer" est le contraire direct de "guider" (hdy, verset 6). Le champ lexical est parfaitement aligné : guidance, chemin, égarement.',
      axe2_voisins: 'Le verset 6 dit "guide-nous sur le droit chemin". Le verset 7 montre trois résultats : bienfaits, désapprobation, égarement. L\'égarement est le contraire thématique de la guidance demandée.',
      axe3_sourate: 'La sourate est construite autour de la guidance. L\'égarement est sa conclusion logique, le rappel qu\'on peut perdre le chemin.',
      axe4_coherence: 'Le Coran utilise dalla et dalal massivement pour ceux qui quittent la voie de guidance. Plus de 190 occurrences. Parfaitement cohérent.',
      axe5_frequence: 'Ad-dalliina est un participe actif, "ceux qui s\'égarent activement". Test de compatibilité grammaticale : "ceux qui s\'égarent" fonctionne parfaitement. Le participe actif montre que l\'égarement est fait par les personnes elles-mêmes. Comparaison avec le mot précédent (maghdhub, participe passif) : la désapprobation est subie (passif), l\'égarement est fait (actif). Le verset distingue deux mauvais chemins : celui qu\'on subit et celui qu\'on choisit.',
      proof_ctx: '"Égarer" est l\'extension de "disparaître" vers le domaine moral : disparaître du chemin connu. Le participe actif montre que l\'égarement est un processus en cours dont les personnes sont les agents. Distinction avec "errer" : "errer" est vagabonder sans but, il n\'y a jamais eu de chemin. "Égarer" signifie qu\'il y avait un chemin et qu\'on l\'a perdu. Le verset mentionne explicitement le sirat (chemin), les égarés l\'ont quitté.',
    },
    errer: {
      status: 'probable',
      axe1_verset: '"Errer" est compatible avec le champ lexical. Cependant, errer implique qu\'il n\'y a jamais eu de direction. Le verset présuppose l\'existence d\'un chemin.',
      axe2_voisins: 'Le contraire partiel de la guidance. Mais le verset implique que le chemin existe et a été montré.',
      axe3_sourate: 'Compatible mais moins précis. La sourate parle d\'un chemin connu.',
      axe4_coherence: 'Le Coran utilise dalla pour ceux qui ont quitté un chemin connu, pas pour ceux qui n\'ont jamais eu de direction.',
      axe5_frequence: '"Ceux qui errent" fonctionne (compatibilité grammaticale OK). Mais errer ne distingue pas entre perte de chemin et absence de chemin.',
      proof_ctx: '"Errer" est vagabonder sans but. "Égarer" signifie qu\'il y avait un chemin et qu\'on l\'a perdu. Le verset mentionne le sirat (chemin), les égarés l\'ont quitté.',
    },
    'disparaître': {
      status: 'peu_probable',
      axe1_verset: '"Disparaître" est trop physique. Les gens ne disparaissent pas littéralement. Le champ lexical est moral.',
      axe2_voisins: 'Le contraire de la guidance c\'est perdre son chemin, pas disparaître.',
      axe3_sourate: 'Hors thème pour une sourate sur la guidance.',
      axe4_coherence: 'Le Coran utilise dalla pour l\'égarement moral, pas la disparition physique.',
      axe5_frequence: '"Ceux qui disparaissent" est bancal pour des groupes humains dans un contexte de guidance.',
      proof_ctx: 'Sens physique premier. Le verset parle de groupes humains et de chemins de vie, pas de disparition physique.',
    },
    'se cacher': {
      status: 'peu_probable',
      axe1_verset: 'Se cacher est un acte volontaire. Le verset parle d\'un processus d\'égarement, pas d\'un acte de dissimulation.',
      axe2_voisins: 'Les versets ne parlent pas de dissimulation.',
      axe3_sourate: 'Hors thème.',
      axe4_coherence: 'Le Coran utilise dalla pour l\'égarement, pas la dissimulation.',
      axe5_frequence: '"Ceux qui se cachent" ne correspond pas au contexte de guidance et de chemin.',
      proof_ctx: 'Se cacher est un acte volontaire de dissimulation. Le verset parle de gens qui perdent leur chemin, pas de gens qui se cachent.',
    },
    oublier: {
      status: 'peu_probable',
      axe1_verset: '"Oublier" est un processus mental interne. Le verset parle d\'un chemin extérieur qu\'on quitte.',
      axe2_voisins: 'Les versets parlent de guidance et de direction, pas de mémoire.',
      axe3_sourate: 'Le thème est la guidance, pas la mémoire.',
      axe4_coherence: 'Le Coran utilise dalla pour dévier du chemin, pas pour oublier.',
      axe5_frequence: '"Ceux qui oublient" ne correspond pas au participe actif dallin qui implique un mouvement.',
      proof_ctx: '"Oublier" est un processus interne de la mémoire. Le verset parle d\'un chemin extérieur qu\'on quitte. Le participe actif indique un mouvement, pas un état mental statique.',
    },
    'périr': { status: 'nul', proof_ctx: 'Irréversible et définitif. Le Coran présente l\'égarement comme souvent réversible. Le participe actif (en cours) contredit l\'idée de périr (terminé).' },
    enterrer: { status: 'nul', proof_ctx: 'Enfouir dans la terre (forme IV). Le verset utilise le participe actif de la forme I, pas la forme IV. Hors contexte.' },
  },
}

let updatedCount = 0
for (const [rootKey, rootAxes] of Object.entries(axes)) {
  log('  [' + rootKey + ']')
  const {data: meanings} = await db.from('word_meanings')
    .select('id, sense').eq('analysis_id', roots[rootKey].id).order('display_order')
  for (const m of meanings) {
    const axeData = rootAxes[m.sense]
    if (!axeData) { log('    ' + m.sense + ' : pas de données'); continue }
    const upd = { status: axeData.status, proof_ctx: axeData.proof_ctx }
    if (axeData.axe1_verset) upd.axe1_verset = axeData.axe1_verset
    if (axeData.axe2_voisins) upd.axe2_voisins = axeData.axe2_voisins
    if (axeData.axe3_sourate) upd.axe3_sourate = axeData.axe3_sourate
    if (axeData.axe4_coherence) upd.axe4_coherence = axeData.axe4_coherence
    if (axeData.axe5_frequence) upd.axe5_frequence = axeData.axe5_frequence
    const {error} = await db.from('word_meanings').update(upd).eq('id', m.id)
    if (error) { log('    ERREUR ' + m.sense + ': ' + error.message); continue }
    const hasAxes = axeData.axe1_verset ? ' (5 axes)' : ''
    log('    ' + m.sense + ' -> ' + axeData.status.toUpperCase() + hasAxes)
    updatedCount++
  }
  log('')
}
log('  ' + updatedCount + ' sens mis à jour')

// verse_word_analyses
const vwa = [
  {verse_id:7,word_key:'srt',sense_chosen:'chemin',position:1},
  {verse_id:7,word_key:'nem',sense_chosen:'bienfait',position:3},
  {verse_id:7,word_key:'ely',sense_chosen:'sur',position:4},
  {verse_id:7,word_key:'ghyr',sense_chosen:'sauf',position:5},
  {verse_id:7,word_key:'ghdb',sense_chosen:'désapprobation',position:6},
  {verse_id:7,word_key:'ely',sense_chosen:'sur',position:7},
  {verse_id:7,word_key:'dll',sense_chosen:'égarer',position:9},
]
const {error: vwaErr} = await db.from('verse_word_analyses').insert(vwa)
if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)
else log('  ' + vwa.length + ' verse_word_analyses insérés')
log('')

log('  RÉSUMÉ :')
log('  srt -> chemin (RETENU) | pont (PEU PROBABLE)')
log('  nem -> bienfait (RETENU) | vie agréable, accorder une faveur (PROBABLE) | jouissance (PEU PROBABLE)')
log('  ely -> sur (RETENU)')
log('  ghyr -> sauf (RETENU) | autre (PROBABLE) | changer (PEU PROBABLE)')
log('  ghdb -> désapprobation (RETENU) | insatisfaction, colère, rancœur, durcir (PROBABLE) | sévérité, sévir, rupture (PEU PROBABLE)')
log('  dll -> égarer (RETENU) | errer (PROBABLE) | disparaître, se cacher, oublier (PEU PROBABLE)')
log('')

// ═══ ÉTAPE 4 — Traduction ═══
log('>>> ÉTAPE 4 — TRADUCTION')
log('')

const va = {
  verse_id: 7,
  translation_arab: "Le chemin de ceux à qui Tu as accordé Tes bienfaits, non pas ceux qui ont subi la désapprobation, ni ceux qui s'égarent.",
  translation_explanation: "Le verset 7 complète la demande de guidance du verset 6. Il précise quel chemin est demandé : celui de ceux qui ont reçu les bienfaits (an'amta 'alayhim, le pronom \"Tu\" est intégré dans le verbe an'amta, c'est ce qu'on appelle en arabe un pronom sujet rattaché au verbe). Le mot ghayri introduit une exclusion, c'est comme dire \"sauf\" ou \"à l'exception de\". Ensuite viennent deux groupes. Le premier est al-maghdhubi 'alayhim, un participe passif (une forme du mot qui dit que l'action est subie, pas faite). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme \"le contraire de al-rida (la satisfaction)\" et la désapprobation de Dieu est mentionnée comme menant à des conséquences. Donc \"ceux sur qui la désapprobation est tombée\". Ce sens ne tombe pas dans l'anthropomorphisme car le Coran Lui-même utilise rida (l'approbation, la satisfaction) pour Dieu (radiya llahu 'anhum, Dieu a approuvé/est satisfait d'eux). Si Dieu peut approuver, Il peut désapprouver, c'est un jugement rationnel, pas une émotion. Le texte ne précise pas de qui vient cette désapprobation, quand le Coran veut préciser, il le fait clairement (bi-ghadhabin min allah en 2:61, ghadhabii en 20:81). Ici il ne le fait pas, c'est un choix. Le deuxième groupe est ad-dalliina, un participe actif (une forme qui dit que l'action est en cours et faite par les personnes elles-mêmes). Ceux qui s'égarent, ils quittent activement le chemin. La différence entre les deux groupes est dans la grammaire : le premier subit (participe passif), le second agit (participe actif).",
  segments: [
    {fr:"le chemin",pos:"nom",phon:"sirata",arabic:"صِرَٰطَ",word_key:"srt",is_particle:false,sense_retenu:"chemin"},
    {fr:"de ceux qui",phon:"alladhina",arabic:"ٱلَّذِينَ",word_key:null,is_particle:true},
    {fr:"Tu as accordé Tes bienfaits",pos:"verbe",phon:"an'amta",arabic:"أَنْعَمْتَ",word_key:"nem",is_particle:false,sense_retenu:"bienfait"},
    {fr:"sur eux",pos:"préposition",phon:"'alayhim",arabic:"عَلَيْهِمْ",word_key:"ely",is_particle:false,sense_retenu:"sur"},
    {fr:"non pas",pos:"nom",phon:"ghayri",arabic:"غَيْرِ",word_key:"ghyr",is_particle:false,sense_retenu:"sauf"},
    {fr:"ceux qui ont subi la désapprobation",pos:"participe_passif",phon:"al-maghdhubi",arabic:"ٱلْمَغْضُوبِ",word_key:"ghdb",is_particle:false,sense_retenu:"désapprobation"},
    {fr:"sur eux",pos:"préposition",phon:"'alayhim",arabic:"عَلَيْهِمْ",word_key:"ely",is_particle:false,sense_retenu:"sur"},
    {fr:"et ne pas",phon:"wa-la",arabic:"وَلَا",word_key:null,is_particle:true},
    {fr:"ceux qui s'égarent",pos:"participe_actif",phon:"ad-dalliina",arabic:"ٱلضَّآلِّينَ",word_key:"dll",is_particle:false,sense_retenu:"égarer"},
  ]
}
const {error: vaErr} = await db.from('verse_analyses').insert(va)
if (vaErr) log('  ERREUR: ' + vaErr.message)
else log('  Traduction + segments + démarche insérés')

// Daily
const daily = [
  {analysis_id:267,sense:'désapprobation',arabic:'أَبْدَى عَدَمَ مُوَافَقَتِهِ',phon:'abda adama muwafaqatihi',french:'Il a exprimé sa désapprobation'},
  {analysis_id:267,sense:'désapprobation',arabic:'لَمْ يُوَافِقْ عَلَى تَصَرُّفِهِمْ',phon:'lam yuwafiq ala tasarrufihim',french:"Il n'a pas approuvé leur comportement"},
  {analysis_id:267,sense:'désapprobation',arabic:'أَظْهَرَ اسْتِيَاءَهُ مِنْ عَمَلِهِمْ',phon:'azhara istiyaahu min amalihim',french:'Il a montré sa désapprobation de leur travail'},
  {analysis_id:268,sense:'égarer',arabic:'ضَلَّ الطَّرِيقَ',phon:'dalla t-tariqa',french:"Il s'est égaré du chemin"},
  {analysis_id:268,sense:'égarer',arabic:'لَا تَضِلُّوا عَنِ الْحَقِّ',phon:'la tadillu ani l-haqq',french:'Ne vous égarez pas de la vérité'},
  {analysis_id:268,sense:'égarer',arabic:'ضَلَّ سَعْيُهُمْ',phon:'dalla sayuhum',french:'Leurs efforts se sont égarés'},
  {analysis_id:262,sense:'chemin',arabic:'هَذَا صِرَاطٌ مُسْتَقِيمٌ',phon:'hadha siratun mustaqim',french:'Ceci est un chemin droit'},
  {analysis_id:262,sense:'chemin',arabic:'سَلَكَ الصِّرَاطَ',phon:'salaka s-sirata',french:'Il a emprunté le chemin'},
  {analysis_id:262,sense:'chemin',arabic:'أَرِنَا الصِّرَاطَ',phon:'arina s-sirata',french:'Montre-nous le chemin'},
  {analysis_id:264,sense:'bienfait',arabic:'هَذِهِ نِعْمَةٌ مِنَ اللَّهِ',phon:'hadhihi nimatun min allah',french:'Ceci est un bienfait de Dieu'},
  {analysis_id:264,sense:'bienfait',arabic:'اُذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ',phon:'udhkuru nimata allahi alaykum',french:'Rappelez-vous le bienfait de Dieu sur vous'},
  {analysis_id:264,sense:'bienfait',arabic:'النِّعْمَةُ تَزُولُ بِالْجُحُودِ',phon:'an-nimatu tazulu bi-l-juhud',french:"Le bienfait disparaît avec l'ingratitude"},
  {analysis_id:266,sense:'sauf',arabic:'جَاءَ الْجَمِيعُ غَيْرَ زَيْدٍ',phon:'jaa l-jamiu ghayra zaydin',french:'Tout le monde est venu sauf Zayd'},
  {analysis_id:266,sense:'sauf',arabic:'كُلُّهُمْ نَجَحُوا غَيْرَ وَاحِدٍ',phon:'kulluhum najabu ghayra wahidin',french:'Ils ont tous réussi sauf un'},
  {analysis_id:266,sense:'sauf',arabic:'حَضَرَ الْجَمِيعُ غَيْرَ أَحْمَدَ',phon:'hadara l-jamiu ghayra ahmad',french:'Tout le monde était présent sauf Ahmad'},
  {analysis_id:265,sense:'sur',arabic:'الْكِتَابُ عَلَى الطَّاوِلَةِ',phon:'al-kitabu ala t-tawila',french:'Le livre est sur la table'},
  {analysis_id:265,sense:'sur',arabic:'سَلِّمْ عَلَيْهِ',phon:'sallim alayhi',french:'Salue-le (passe le salam sur lui)'},
  {analysis_id:265,sense:'sur',arabic:'عَلَيْكَ أَنْ تَجْتَهِدَ',phon:'alayka an tajtahida',french:"Il t'incombe (sur toi) de faire des efforts"},
]
const {error: dailyErr} = await db.from('word_daily').insert(daily)
if (dailyErr) log('  ERREUR daily: ' + dailyErr.message)
else log('  ' + daily.length + ' phrases du quotidien insérées')

log('')
log('  TRADUCTION : "' + va.translation_arab + '"')
log('')
log('============================================')
log('  PIPELINE MAISON — VERSET 1:7 — TERMINÉ')
log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
