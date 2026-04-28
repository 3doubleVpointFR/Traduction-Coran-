// Pipeline Maison — Verset 1:7 — Version industrialisée avec logs live
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

function log(msg) { console.log(msg); }

async function run() {

log('============================================')
log('  PIPELINE MAISON — VERSET 1:7')
log('  Étape 1: LLM | Étapes 2-3-4: Claude')
log('============================================')
log('')

// ── ÉTAPE 1 — Appel LLM ──
log('>>> ÉTAPE 1 — TAG VERSE (GPT-4.1-mini)')
log('  Appel LLM en cours...')
const resp = await fetch('http://localhost:3000/api/analyze/step1-only', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ surah_id: 1, verse_num: 7 })
})
if (!resp.ok) { log('  ERREUR étape 1: HTTP ' + resp.status); process.exit(1) }
const s1 = await resp.json()
log('  ' + s1.segments.length + ' segments identifiés')
for (const s of s1.segments) {
  if (s.type === 'particle') log('  ' + s.position + '. [PARTICULE] ' + s.arabic + ' (' + s.phon + ') -> "' + s.fr + '"')
  else log('  ' + s.position + '. [IMPORTANT] ' + s.arabic + ' (' + s.key + ') — ' + s.pos + (s.definite ? ', DÉFINI' : '') + (s.voice === 'passif' ? ', voix passive' : ''))
}
const uniqueRoots = [...new Set(s1.segments.filter(s => s.type === 'important').map(s => s.key))]
log('  Racines uniques : ' + uniqueRoots.join(', '))
log('')

// ── ÉTAPE 2 — Sens étymologiques ──
log('>>> ÉTAPE 2 — SENS ÉTYMOLOGIQUES (Claude)')
log('  Source : Lane\'s Arabic-English Lexicon (Edward Lane, 1863)')
log('')

const roots = {
  srt: { id: 262, senses: [
    { sense: 'avaler', sense_ar: 'سَرَطَ', description: 'Faire passer dans la gorge d\'un trait, ingurgiter rapidement. Sens physique premier de la racine : l\'acte brut d\'engloutir sans mâcher.', display_order: 1 },
    { sense: 'chemin', sense_ar: 'صِرَاط', description: 'Voie large et dégagée que l\'on parcourt sans obstacle. Extension du sens d\'avaler : le chemin englobe et emmène celui qui y marche, comme la gorge englobe ce qui y passe.', display_order: 2 },
    { sense: 'pont', sense_ar: 'صِرَاط', description: 'Passage étroit qui relie deux rives au-dessus d\'un vide. Structure qui permet de traverser d\'un point à un autre.', display_order: 3 },
  ]},
  nem: { id: 264, senses: [
    { sense: 'douceur', sense_ar: 'نَعُمَ', description: 'Être doux et lisse au toucher, texture agréable et sans rugosité. Sens physique premier : la qualité tactile de ce qui est tendre et souple.', display_order: 1 },
    { sense: 'bétail', sense_ar: 'نَعَم', description: 'Troupeau d\'animaux domestiques (chameaux, vaches, moutons). Source concrète de richesse et de bien-être dans la vie arabe : celui qui a du bétail a la vie douce.', display_order: 2 },
    { sense: 'bienfait', sense_ar: 'نِعْمَة', description: 'Faveur qui adoucit la vie de celui qui la reçoit. Extension de douceur : ce qui rend la vie douce, que ce soit matériel ou immatériel (guidance, savoir, paix).', display_order: 3 },
    { sense: 'confort', sense_ar: 'نَعِيم', description: 'État de bien-être et d\'aisance matérielle où rien ne manque. La vie rendue douce par l\'abondance de biens physiques.', display_order: 4 },
    { sense: 'oui', sense_ar: 'نَعَمْ', description: 'Particule d\'affirmation et d\'approbation. Mot utilisé pour confirmer, accepter ou approuver ce qui est dit.', display_order: 5 },
    { sense: 'abondance', sense_ar: 'نَعْمَاء', description: 'Vie large et généreuse, profusion de biens. L\'excès de douceur matérielle.', display_order: 6 },
    { sense: 'délicatesse', sense_ar: 'نَاعِم', description: 'Finesse et raffinement, ce qui est délicat au toucher. Qualité de ce qui est subtil et tendre.', display_order: 7 },
  ]},
  ely: { id: 265, senses: [
    { sense: 'hauteur', sense_ar: 'عُلُوّ', description: 'Position élevée dans l\'espace, être en haut physiquement. Sens physique premier : l\'élévation spatiale par rapport à ce qui est en bas.', display_order: 1 },
    { sense: 'sur', sense_ar: 'عَلَى', description: 'Position au-dessus de quelque chose, en contact ou en surplomb. Préposition qui exprime la relation spatiale de supériorité.', display_order: 2 },
    { sense: 'dominer', sense_ar: 'عَلَا', description: 'Exercer un contrôle ou une autorité depuis une position supérieure. Celui qui est en haut contrôle ce qui est en bas.', display_order: 3 },
    { sense: 'monter', sense_ar: 'عَلَا', description: 'S\'élever vers le haut, grimper, prendre de l\'altitude. Le mouvement actif de celui qui va vers le haut.', display_order: 4 },
    { sense: 'surpasser', sense_ar: 'تَعَالَى', description: 'Dépasser les autres en rang ou en qualité. Extension abstraite de la hauteur physique : être au-dessus dans la hiérarchie.', display_order: 5 },
    { sense: 'éminent', sense_ar: 'عَلِيّ', description: 'Celui qui est au-dessus des autres, de rang élevé. Qualité de celui qui occupe une position haute dans la société.', display_order: 6 },
  ]},
  ghyr: { id: 266, senses: [
    { sense: 'changer', sense_ar: 'غَيَّرَ', description: 'Modifier l\'état d\'une chose, la transformer en quelque chose de différent. Sens premier : passer d\'un état à un autre, altérer ce qui était.', display_order: 1 },
    { sense: 'autre', sense_ar: 'غَيْر', description: 'Ce qui est différent de ce qui est mentionné, distinct et séparé. Le résultat du changement : ce qui n\'est plus pareil.', display_order: 2 },
    { sense: 'sauf', sense_ar: 'غَيْر', description: 'Exclusion d\'un élément du reste du groupe. Extension de la différence : séparer activement ce qui est différent.', display_order: 3 },
    { sense: 'jalousie', sense_ar: 'غَيْرَة', description: 'Sentiment protecteur intense envers ce qu\'on possède et qu\'on refuse de voir changer ou menacé par un autre.', display_order: 4 },
    { sense: 'nuage', sense_ar: 'غَيْر', description: 'Masse qui change l\'état du ciel, qui couvre et transforme l\'apparence de ce qui était clair.', display_order: 5 },
    { sense: 'puits', sense_ar: 'غَيْر', description: 'Cavité qui altère le terrain, changement dans la surface du sol. Ce qui transforme la terre.', display_order: 6 },
  ]},
  ghdb: { id: 267, senses: [
    { sense: 'pierre dure', sense_ar: 'غَضْبَة', description: 'Roche compacte fichée dans une montagne, dure et résistante. Sens physique premier de la racine : la dureté brute de la pierre qui ne cède pas.', display_order: 1 },
    { sense: 'éminence', sense_ar: 'غَضْبَة', description: 'Monticule, petite colline, bosse de terrain. Élévation naturelle du sol, relief qui dépasse de la surface.', display_order: 2 },
    { sense: 'protubérance de chair', sense_ar: 'غَضْبَة', description: 'Bosse au-dessus ou en dessous des yeux, gonflement naturel de la paupière supérieure. Relief anatomique produit par la nature.', display_order: 3 },
    { sense: 'cuir épais', sense_ar: 'غَضِب', description: 'Peau résistante non tannée, épaisse et dure. Matériau brut qui n\'a pas été assoupli par le travail de l\'artisan.', display_order: 4 },
    { sense: 'bouclier en cuir', sense_ar: 'غَضْبَة', description: 'Protection faite de peau de chameau pliée sur elle-même pour le combat. Objet dur fait de matière brute.', display_order: 5 },
    { sense: 'peau de chèvre', sense_ar: 'غَضْبَة', description: 'Cuir dur de chèvre de montagne, de poisson, ou de taureau (entre les cornes). Matériau résistant et rugueux.', display_order: 6 },
    { sense: 'rougeur intense', sense_ar: 'غَضْب', description: 'Rouge profond et dense, changement de couleur vers un rouge vif. Le sang qui afflue et change l\'apparence de la surface.', display_order: 7 },
    { sense: 'éruption cutanée', sense_ar: 'غِضَاب', description: 'Maladie de la peau, éruption ou marque de variole. Changement pathologique de la surface du corps.', display_order: 8 },
    { sense: 'durcir', sense_ar: 'غَضِبَ', description: 'Passer d\'un état souple à un état dur et rigide. Le processus de transformation qui rend quelque chose résistant et inflexible.', display_order: 9 },
    { sense: 'bouillonnement', sense_ar: 'تَغَضَّبَ', description: 'La marmite qui bout férocement, le liquide en ébullition violente. Métaphore du sang qui bout intérieurement.', display_order: 10 },
    { sense: 'colère', sense_ar: 'غَضَب', description: 'État d\'excitation du sang du c\u0153ur en vue de revanche. Réaction émotionnelle violente et spontanée qui durcit le visage et fait rougir.', display_order: 11 },
    { sense: 'rancœur', sense_ar: 'غَضَب', description: 'Colère latente qui persiste dans le temps, contrairement à la rage (ghayz) qui est plus véhémente mais ponctuelle. État durable de mécontentement intérieur.', display_order: 12 },
    { sense: 'désapprobation', sense_ar: 'غَضَب', description: 'Jugement négatif sévère qui mène à des conséquences. Quand l\'insatisfaction se transforme en position active de rejet. Le Lane\'s note que la "désapprobation de Dieu" mène à la punition.', display_order: 13 },
    { sense: 'insatisfaction', sense_ar: 'غَضَب', description: 'Le contraire de la satisfaction (al-rida) d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863). État de non-contentement, jugement rationnel que quelque chose ne correspond pas à ce qu\'on attendait.', display_order: 14 },
    { sense: 'sévérité', sense_ar: 'غَضُوب', description: 'État de fermeté dure et austère. Visage fermé et sévère qui ne montre aucune douceur. Qualité de celui qui est inflexible.', display_order: 15 },
    { sense: 'sévir', sense_ar: 'غَضِبَ', description: 'Agir avec rigueur et fermeté contre quelqu\'un, traiter durement. L\'action concrète qui découle de la colère ou de la désapprobation.', display_order: 16 },
    { sense: 'rupture', sense_ar: 'غَاضَبَ', description: 'Rompre les liens avec quelqu\'un par colère ou désaccord. Se séparer d\'une personne suite à un conflit. Forme III du verbe.', display_order: 17 },
  ]},
  dll: { id: 268, senses: [
    { sense: 'disparaître', sense_ar: 'ضَلَّ', description: 'Se perdre physiquement, devenir introuvable, comme un objet ou un animal qui s\'est perdu. Sens physique premier : ne plus être là où on devrait être.', display_order: 1 },
    { sense: 'égarer', sense_ar: 'ضَلَّ', description: 'Perdre son chemin, dévier de la route que l\'on suivait. Extension de disparaître : celui qui s\'égare disparaît du chemin connu, il quitte la voie qu\'il empruntait.', display_order: 2 },
    { sense: 'oublier', sense_ar: 'ضَلَّ', description: 'Perdre le souvenir de quelque chose, ne plus retrouver une information. Ce qui a disparu de la mémoire, comme un objet qui a disparu du regard.', display_order: 3 },
    { sense: 'errer', sense_ar: 'ضَلَّ', description: 'Vagabonder sans direction ni but, marcher sans savoir où l\'on va. Contrairement à s\'égarer, errer implique qu\'il n\'y a jamais eu de chemin.', display_order: 4 },
    { sense: 'périr', sense_ar: 'ضَلَّ', description: 'Se perdre définitivement, disparaître sans retour possible. Sens extrême de la disparition : ce qui est parti pour toujours.', display_order: 5 },
    { sense: 'se mélanger', sense_ar: 'ضَلَّ', description: 'Se perdre dans un ensemble, devenir indistinct dans la masse. Disparaître en se fondant dans un tout.', display_order: 6 },
    { sense: 'couler', sense_ar: 'ضَلَّ', description: 'L\'eau qui disparaît dans le sol, s\'infiltrer et se perdre dans la terre. Sens physique de la disparition par absorption.', display_order: 7 },
  ]},
}

let totalSenses = 0
for (const [key, root] of Object.entries(roots)) {
  const senses = root.senses.map(s => ({...s, analysis_id: root.id, meaning_type: 'etymology'}))
  const {error} = await db.from('word_meanings').insert(senses)
  if (error) { log('  ERREUR ' + key + ': ' + error.message); continue }
  totalSenses += senses.length
  log('  [' + key + '] ' + senses.length + ' sens insérés :')
  for (const s of senses) log('    ' + s.display_order + '. ' + s.sense + ' — ' + s.description.substring(0, 80) + '...')
  log('')
}
log('  TOTAL : ' + totalSenses + ' sens insérés pour ' + Object.keys(roots).length + ' racines')
log('')

// ── ÉTAPE 3 — Analyse des sens ──
log('>>> ÉTAPE 3 — ANALYSE DES SENS (Claude)')
log('')

const axes = {
  srt: {
    chemin: {
      status: 'retenu',
      axe1_verset: 'Le verset distingue trois groupes selon leur chemin. Le mot sirat prolonge directement le verset 6 qui demande "guide-nous sur le droit chemin". Le champ lexical du verset tourne autour de la guidance, des voies à suivre et des groupes qui les empruntent. "Chemin" est le mot central de ce champ lexical, il est le sujet même du verset. L\'opposition entre le chemin des bienfaits et les chemins de l\'insatisfaction et de l\'égarement structure tout le verset.',
      axe2_voisins: 'Le verset 6 dit "ihdina s-sirata l-mustaqim" (guide-nous sur le droit chemin). Le verset 7 reprend le même mot sirat pour préciser de quel chemin il s\'agit : celui de ceux qui ont reçu les bienfaits. La continuité entre les deux versets est directe et logique. Le verset 7 est la réponse au verset 6.',
      axe3_sourate: 'Al-Fatiha est la sourate d\'ouverture du Coran. Elle pose les fondements de la relation entre l\'humain et Dieu : louange, miséricorde, adoration, demande d\'aide, et enfin guidance. Le chemin droit est le thème central des versets 6-7, le coeur de la demande faite à Dieu.',
      axe4_coherence: 'Le Coran utilise le mot sirat des dizaines de fois, toujours dans le sens de voie ou chemin de guidance. Le mot est systématiquement associé à la direction morale ou spirituelle. Aucun verset ne contredit cette lecture.',
      axe5_frequence: 'Le chemin est la direction que le khalifa suit pour accomplir sa mission de justice et de civilisation. Sans chemin, pas de direction, pas de mission possible. Il respecte la dignité humaine car il est proposé, pas imposé. Le verset montre que certains le suivent et d\'autres non, ce qui implique le libre choix.',
      proof_ctx: '"Chemin" s\'inscrit parfaitement dans la continuité du verset 6, dans le thème de la sourate et dans l\'usage coranique du mot sirat. Distinction avec "pont" : le pont est un passage ponctuel entre deux rives, on le traverse et c\'est fini. Le chemin est un parcours continu tout au long de la vie. Le qualificatif "droit" (mustaqim) du verset 6 s\'applique naturellement à un chemin qu\'on emprunte au quotidien.',
    },
    avaler: { status: 'nul', proof_ctx: 'Avaler est le sens physique premier de la racine. Mais il est totalement absent du registre coranique pour ce mot. Le Coran utilise sirat exclusivement dans le sens de voie ou chemin.' },
    pont: {
      status: 'peu_probable',
      axe1_verset: 'Le pont comme passage étroit au-dessus d\'un vide ne s\'inscrit pas dans le champ lexical de la guidance et des bienfaits. Le verset parle de gens qui suivent un parcours de vie, pas de gens qui traversent un passage.',
      axe2_voisins: 'Le verset 6 parle de sirat mustaqim (droit), ce qui qualifie naturellement un chemin qu\'on emprunte au quotidien, pas un pont qu\'on traverse une seule fois.',
      axe3_sourate: 'La sourate traite de la relation continue avec Dieu, pas d\'un événement ponctuel de traversée.',
      axe4_coherence: 'Le Coran utilise sirat dans le sens de chemin de vie, pas de pont physique.',
      axe5_frequence: 'Le pont est un passage, pas une direction de vie. Pour le khalifa, la mission est un parcours continu.',
      proof_ctx: 'Le pont est un passage ponctuel entre deux points. Le verset parle d\'un parcours de vie continu. Le pont implique un passage unique tandis que le verset décrit des gens qui suivent ou quittent activement leur voie.',
    },
  },
  nem: {
    bienfait: {
      status: 'retenu',
      axe1_verset: 'Le verset oppose ceux qui ont reçu les bienfaits à ceux qui ont subi l\'insatisfaction et ceux qui s\'égarent. "Bienfait" est le pivot positif de cette opposition. La forme IV du verbe (an\'ama) signifie précisément "accorder un bienfait, rendre la vie douce à quelqu\'un".',
      axe2_voisins: 'Les versets voisins parlent de louange (verset 2 : on loue pour les bienfaits reçus), de miséricorde (versets 1 et 3 : la miséricorde est le bienfait premier), de guidance (verset 6 : la guidance est un bienfait). Le bienfait est le fil conducteur qui relie tous ces thèmes.',
      axe3_sourate: 'La Fatiha établit une relation d\'échange entre Dieu qui accorde et l\'humain qui loue et demande. Le bienfait est au coeur de cet échange : c\'est ce que Dieu donne et ce pour quoi l\'humain exprime sa gratitude.',
      axe4_coherence: 'Le Coran utilise ni\'ma (bienfait) et an\'ama (accorder un bienfait) massivement pour décrire les faveurs divines. Le verset 14:34 dit que si l\'on comptait les bienfaits de Dieu, on ne pourrait les dénombrer. Parfaitement cohérent.',
      axe5_frequence: 'Le bienfait dans ce verset inclut la guidance sur le chemin droit, condition nécessaire pour que le khalifa accomplisse sa mission de justice. La dignité humaine elle-même est un bienfait accordé par Dieu à tous les êtres humains.',
      proof_ctx: '"Bienfait" est l\'extension naturelle du sens physique "douceur", ce qui rend la vie douce. La forme IV du verbe (an\'ama) confirme ce sens. Distinction avec "confort" : le confort est strictement matériel (un bon lit, de la nourriture). Le bienfait englobe le matériel et l\'immatériel : la guidance, le savoir, la paix intérieure. Un prophète guidé mais persécuté a reçu le bienfait sans le confort.',
    },
    confort: {
      status: 'probable',
      axe1_verset: 'Le confort comme état de bien-être s\'inscrit dans le champ lexical positif du verset. Cependant, le verset parle de guidance et de chemins de vie, pas de conditions matérielles.',
      axe2_voisins: 'Les versets voisins parlent de miséricorde et de guidance, des concepts immatériels. Le confort matériel ne couvre pas ces dimensions.',
      axe3_sourate: 'La sourate traite de la relation spirituelle avec Dieu, pas de bien-être physique.',
      axe4_coherence: 'Le Coran utilise na\'im (confort, délice) dans d\'autres contextes, souvent pour le paradis. Mais ici la forme IV an\'ama pointe vers le bienfait accordé.',
      axe5_frequence: 'Le confort matériel peut aider le khalifa mais n\'est pas la condition première. La guidance est plus fondamentale.',
      proof_ctx: 'Le confort désigne un bien-être matériel. Le bienfait peut exister sans confort (un prophète guidé mais persécuté). Le bienfait est la cause, le confort est parfois une conséquence.',
    },
    abondance: {
      status: 'peu_probable',
      axe1_verset: 'L\'abondance est une forme de bienfait réduite à la dimension quantitative. Le verset ne parle pas de quantité mais de la nature de ce qui a été accordé.',
      axe2_voisins: 'Les versets voisins parlent de qualités (miséricorde, guidance), pas de quantités.',
      axe3_sourate: 'La sourate ne traite pas d\'abondance matérielle.',
      axe4_coherence: 'Le Coran utilise na\'ma pour l\'abondance mais pas dans ce contexte de guidance.',
      axe5_frequence: 'L\'abondance ne contribue pas directement à la mission du khalifa dans ce contexte.',
      proof_ctx: 'L\'abondance est une forme de bienfait réduite à la quantité. Le verset parle de la nature de ce qui a été accordé, pas de combien.',
    },
    douceur: { status: 'nul', proof_ctx: 'Sens physique premier (être lisse au toucher). La forme IV du verbe (an\'ama) a transformé ce sens en "accorder ce qui rend la vie douce".' },
    'bétail': { status: 'nul', proof_ctx: 'Source concrète de richesse. Mais le verbe an\'amta (forme IV) veut dire "accorder un bienfait", pas "donner du bétail".' },
    oui: { status: 'nul', proof_ctx: 'Particule d\'affirmation sans lien avec le contexte verbal du verset.' },
    'délicatesse': { status: 'nul', proof_ctx: 'Sens trop raffiné et physique pour ce contexte de guidance et de chemins de vie.' },
  },
  ely: {
    sur: {
      status: 'retenu',
      axe1_verset: '\'Alayhim fonctionne comme préposition dans ce verset. Elle relie le verbe an\'amta (Tu as accordé) à son complément (eux). La construction "an\'amta \'alayhim" est une expression arabe standard.',
      axe2_voisins: 'Les versets voisins utilisent des constructions similaires. \'Ala est la préposition naturelle pour exprimer la relation "sur eux".',
      axe3_sourate: 'Fonction grammaticale pure, cohérente avec le style de la sourate.',
      axe4_coherence: 'Le Coran utilise \'ala comme préposition des milliers de fois. Usage standard.',
      axe5_frequence: 'Fonction grammaticale qui relie les mots entre eux. Pas de sens autonome à analyser pour la mission du khalifa.',
      proof_ctx: 'Fonction de préposition pure. \'Alayhim signifie "sur eux". Les autres sens de la racine ne s\'appliquent pas quand le mot est en position de préposition.',
    },
    hauteur: { status: 'nul', proof_ctx: 'Sens physique premier. Mais ici \'ala est utilisé comme préposition, pas comme nom.' },
    dominer: { status: 'nul', proof_ctx: 'Le mot est en position de préposition, pas de verbe.' },
    monter: { status: 'nul', proof_ctx: 'Fonction prépositionnelle, pas de sens verbal ici.' },
    surpasser: { status: 'nul', proof_ctx: 'Fonction prépositionnelle dans ce verset.' },
    'éminent': { status: 'nul', proof_ctx: 'Fonction prépositionnelle, pas d\'adjectif ici.' },
  },
  ghyr: {
    sauf: {
      status: 'retenu',
      axe1_verset: 'Le verset trace une frontière nette entre deux catégories : ceux qui ont reçu les bienfaits d\'un côté, et deux groupes négatifs de l\'autre. "Sauf" est le mot qui trace cette frontière, il exclut activement les deux groupes négatifs.',
      axe2_voisins: 'Le verset 6 demande un chemin précis. Le verset 7 définit ce chemin d\'abord par inclusion puis par exclusion ("sauf"). "Sauf" est l\'outil de cette exclusion. Sans lui, la demande du verset 6 resterait vague.',
      axe3_sourate: 'La sourate Al-Fatiha pose les catégories fondamentales de l\'expérience humaine. "Sauf" sépare ces catégories proprement.',
      axe4_coherence: 'Le Coran utilise ghayri comme exclusion dans de nombreux passages. La construction "sirata lladhina an\'amta \'alayhim ghayri..." est classique.',
      axe5_frequence: 'Pour le khalifa, distinguer quel chemin suivre et lequel éviter est fondamental. "Sauf" trace cette limite. Il respecte la dignité humaine car il exclut des chemins, pas des personnes de leur dignité.',
      proof_ctx: '"Sauf" est l\'extension du sens "changer" vers l\'exclusion, séparer ce qui est différent du reste. Distinction avec "autre" : "autre" constate passivement la différence. "Sauf" pose un acte d\'exclusion actif. Le verset exclut activement deux groupes du chemin des bienfaits.',
    },
    autre: {
      status: 'probable',
      axe1_verset: '"Autre" indique que les groupes suivants sont différents du premier. Cependant, "autre" constate simplement la différence sans la charger d\'intentionnalité.',
      axe2_voisins: '"Autre" est compatible mais manque de force pour marquer l\'exclusion nette que le verset construit.',
      axe3_sourate: 'Compatible avec le thème de la sourate qui distingue des catégories.',
      axe4_coherence: 'Le Coran utilise ghayri dans les deux sens (autre et sauf). Les deux sont cohérents.',
      axe5_frequence: '"Autre" constate la différence sans tracer de limite active. Pour le khalifa, la limite claire est plus utile.',
      proof_ctx: '"Autre" indique simplement la différence. "Sauf" pose un acte d\'exclusion actif. Le verset exclut activement deux groupes, il ne constate pas juste qu\'il existe d\'autres personnes.',
    },
    changer: {
      status: 'peu_probable',
      axe1_verset: 'Le sens "changer" est le sens premier de la racine mais dans ce verset ghayri est en position nominale et fonctionne comme une exclusion.',
      axe2_voisins: 'Les versets voisins ne parlent pas de changement ou de transformation.',
      axe3_sourate: 'La sourate ne traite pas du changement d\'état.',
      axe4_coherence: 'Le Coran utilise le verbe ghayyara pour "changer" mais ici ghayri est un nom fonctionnant comme exclusion.',
      axe5_frequence: 'Le changement n\'est pas pertinent dans ce contexte de catégorisation.',
      proof_ctx: 'Sens premier (passer d\'un état à un autre). Mais ici ghayri est en position nominale et fonctionne comme une exclusion.',
    },
    jalousie: { status: 'nul', proof_ctx: 'Sentiment protecteur sans rapport avec le contexte d\'exclusion entre groupes.' },
    nuage: { status: 'nul', proof_ctx: 'Phénomène météorologique sans rapport avec le contexte de guidance.' },
    puits: { status: 'nul', proof_ctx: 'Formation géologique sans rapport avec le verset.' },
  },
  ghdb: {
    insatisfaction: {
      status: 'probable',
      axe1_verset: 'Le verset oppose trois groupes. Ceux qui ont reçu les bienfaits (la satisfaction implicite, on accorde des bienfaits à ceux dont on est satisfait) face à ceux qui ont subi l\'insatisfaction. L\'opposition bienfait et insatisfaction structure le verset de manière claire et équilibrée. La racine nem (bienfait, ce qui rend la vie douce, marque de satisfaction) face à la racine ghdb (insatisfaction, contraire de la satisfaction) forme un couple étymologique cohérent.',
      axe2_voisins: 'Les versets voisins parlent de louange (verset 2 : on loue car Dieu est satisfait et accorde), de miséricorde (versets 1 et 3 : la miséricorde est l\'expression de Sa satisfaction), de guidance (verset 6 : guider est un acte de satisfaction envers le guidé). L\'insatisfaction est le contraire de cet ensemble positif.',
      axe3_sourate: 'La Fatiha présente la miséricorde (satisfaction divine qui se manifeste comme douceur) dans les versets 1 à 3, puis l\'insatisfaction dans le verset 7. La sourate encadre l\'expérience humaine entre ces deux pôles.',
      axe4_coherence: 'D\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini explicitement comme le contraire de al-rida (la satisfaction). Le Coran utilise rida pour Dieu à de nombreuses reprises : radiya llahu \'anhum (Dieu est satisfait d\'eux) dans les versets 5:119, 9:100, 58:22, 98:8. Si le Coran attribue la satisfaction à Dieu, son contraire est un attribut valide. Quand le Coran veut préciser la source, il le fait : bi-ghadhabin min allah (2:61), ghadhabii (20:81). Ici aucune source n\'est précisée.',
      axe5_frequence: 'Al-maghdhubi est un participe passif (une forme qui dit que l\'action est subie, pas faite), donc "ceux sur qui l\'insatisfaction est tombée". C\'est un état relationnel, pas une émotion. Pour le khalifa, comprendre que certains chemins mènent à l\'insatisfaction est un avertissement fondamental. Ce sens respecte la dignité humaine car il décrit un état, pas une condamnation des personnes.',
      proof_ctx: 'D\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme le contraire de al-rida (la satisfaction). Le Coran utilise rida pour Dieu (radiya llahu anhum), ce qui rend son contraire applicable sans anthropomorphisme. Le participe passif (maghdhub) confirme que c\'est un état subi, pas une émotion ressentie. Distinction avec colère : la colère est une émotion violente et spontanée, l\'attribuer à Dieu sans que le texte le dise explicitement serait de l\'anthropomorphisme. L\'insatisfaction est un jugement rationnel, pas un sentiment. Distinction avec désapprobation : la désapprobation est plus active, elle implique un rejet explicite. L\'insatisfaction est un état qui précède la désapprobation. Le texte décrit un état (participe passif), pas une action. Distinction avec durcir : le durcissement est le sens physique brut. Le verset parle d\'une relation, pas de physique.',
    },
    'désapprobation': {
      status: 'retenu',
      axe1_verset: 'La désapprobation comme jugement négatif actif s\'inscrit dans le champ lexical du verset. Elle implique un rejet explicite de ce que les gens ont fait. Cependant, le participe passif (maghdhub) décrit un état subi, pas une action émise.',
      axe2_voisins: 'Les versets voisins posent un cadre de guidance. La désapprobation est compatible : ceux qui ne suivent pas la guidance subissent la désapprobation.',
      axe3_sourate: 'La sourate présente la miséricorde en ouverture (approbation) et la désapprobation en fermeture. Compatible avec la structure.',
      axe4_coherence: 'D\'après les sources étymologiques, la désapprobation de Dieu mène à la punition. C\'est un sens attesté. Cependant, le participe passif pointe vers un état subi plus que vers une action de rejet.',
      axe5_frequence: 'La désapprobation est un jugement actif. Le participe passif décrit un état passif. L\'insatisfaction (état) colle mieux avec le passif que la désapprobation (action).',
      proof_ctx: 'La désapprobation est le rejet actif et explicite de quelque chose. C\'est un sens attesté dans les sources étymologiques pour ghadhab. Cependant, le participe passif (maghdhub) pointe vers un état subi plutôt qu\'une action émise. L\'insatisfaction est un état, la désapprobation est une action. Le verset décrit des gens qui subissent, pas des gens sur qui on agit activement.',
    },
    'colère': {
      status: 'probable',
      axe1_verset: 'La colère comme émotion s\'inscrit dans le champ lexical de la conséquence. Cependant, la colère est le sentiment de l\'émetteur, pas l\'expérience du receveur. Le verset décrit ce que les gens subissent (participe passif), pas ce que quelqu\'un ressent.',
      axe2_voisins: 'Les versets voisins posent un cadre de guidance. La colère est compatible mais le texte ne précise pas de qui elle vient ni pourquoi.',
      axe3_sourate: 'La sourate présente la miséricorde en ouverture. La colère comme son contraire est compatible. Cependant, le contraire étymologique de la satisfaction (rida) c\'est l\'insatisfaction, pas la colère.',
      axe4_coherence: 'Le Coran utilise ghadhab fréquemment. Quand la source est Dieu, il le précise : bi-ghadhabin min allah (2:61), ghadhabii (20:81). Ici rien n\'est précisé. La colère implique un émetteur que le texte ne nomme pas.',
      axe5_frequence: 'La colère est une émotion humaine. L\'attribuer à Dieu sans que le texte le dise explicitement serait de l\'anthropomorphisme. Le participe passif décrit un état subi, pas une émotion ressentie.',
      proof_ctx: 'La colère est l\'extension émotionnelle du sens physique "durcir". C\'est le sens le plus courant de la racine. Cependant, la colère est une réaction émotionnelle violente et spontanée. L\'attribuer à Dieu sans que le texte le dise explicitement serait de l\'anthropomorphisme. Le Coran attribue la satisfaction (rida) à Dieu, son contraire direct est l\'insatisfaction, pas la colère.',
    },
    'rancœur': {
      status: 'probable',
      axe1_verset: 'La rancœur comme colère latente et durable s\'inscrit dans le champ lexical du verset. Le participe passif (état permanent) colle avec un sentiment durable comme la rancœur. Cependant, la rancœur est une émotion, pas un état rationnel.',
      axe2_voisins: 'Compatible avec les versets voisins. La rancœur est la conséquence durable du rejet de la guidance.',
      axe3_sourate: 'Compatible avec la structure de la sourate. La rancœur est un état permanent, comme le participe passif le suggère.',
      axe4_coherence: 'Les sources étymologiques distinguent ghadhab (latent) de ghayz (véhément). La rancœur correspond bien à cette latence. Cependant, attribuer la rancœur à Dieu serait de l\'anthropomorphisme.',
      axe5_frequence: 'La rancœur est un sentiment humain. L\'attribuer à Dieu sans que le texte le dise serait de l\'anthropomorphisme. L\'insatisfaction est un jugement rationnel, pas un sentiment.',
      proof_ctx: 'La rancœur est une colère latente et durable, distincte de la rage (ghayz) qui est plus véhémente mais ponctuelle. Les sources étymologiques confirment cette distinction. Le participe passif (état permanent) colle avec la durée de la rancœur. Cependant, la rancœur est une émotion humaine. L\'attribuer à Dieu sans que le texte le dise serait de l\'anthropomorphisme. L\'insatisfaction est un jugement rationnel, pas un sentiment.',
    },
    durcir: {
      status: 'probable',
      axe1_verset: 'Le durcissement comme changement d\'état (souple vers rigide) peut s\'inscrire dans l\'opposition avec les bienfaits (douceur vers dureté). L\'opposition étymologique fonctionne : la racine nem signifie douceur, la racine ghdb dans son sens physique signifie durcissement.',
      axe2_voisins: 'Compatible avec les versets voisins qui posent un cadre de guidance. Le durcissement des conditions de vie peut être vu comme une conséquence.',
      axe3_sourate: 'La sourate oppose miséricorde (douceur, tendresse) et ce que subissent ceux qui sont sur le mauvais chemin. Le durcissement est compatible.',
      axe4_coherence: 'Le Coran utilise ghadhab avec des conséquences concrètes comme des destructions, des exils, des conditions de vie durcies. Cependant, d\'après les sources étymologiques, le mot est défini comme "le contraire de la satisfaction", pas comme "durcissement".',
      axe5_frequence: 'Le participe passif décrit un état subi. Le durcissement est neutre. Cependant, les sources étymologiques donnent une définition plus précise que le sens physique brut pour un verset qui parle d\'une relation.',
      proof_ctx: '"Durcir" est le sens physique qui sous-tend tous les sens abstraits de la racine. L\'opposition étymologique avec bienfait (nem signifie douceur) fonctionne au niveau physique. Cependant, d\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme le contraire de la satisfaction (rida). Cette définition est plus précise que le sens physique brut pour un verset qui parle d\'une relation, pas de physique.',
    },
    'sévérité': {
      status: 'peu_probable',
      axe1_verset: 'La sévérité comme état de fermeté dure s\'inscrit dans le champ lexical du verset. Elle décrit un visage fermé et inflexible. Cependant, elle est plus une qualité de caractère qu\'un état relationnel.',
      axe2_voisins: 'Compatible avec les versets voisins. La sévérité est le contraire de la miséricorde (douceur).',
      axe3_sourate: 'La sourate oppose miséricorde et sévérité. Compatible mais trop centré sur le caractère de l\'émetteur, pas sur l\'expérience du receveur.',
      axe4_coherence: 'Les sources étymologiques utilisent ghadhub (celui qui est sévère) comme adjectif. Mais le verset utilise le participe passif maghdhub (celui qui subit), pas l\'adjectif.',
      axe5_frequence: 'La sévérité est une qualité de l\'émetteur. Le participe passif décrit l\'expérience du receveur. Ce qui est subi, c\'est l\'insatisfaction, pas la sévérité.',
      proof_ctx: 'La sévérité est un état de fermeté dure et austère. Les sources étymologiques attestent ce sens pour l\'adjectif ghadhub. Mais le verset utilise le participe passif maghdhub (celui qui subit), pas l\'adjectif. La sévérité est une qualité de celui qui l\'exerce, pas de celui qui la subit. Le verset parle de ceux qui subissent.',
    },
    'sévir': {
      status: 'peu_probable',
      axe1_verset: 'Sévir est l\'action concrète de punir. Le verset utilise un participe passif qui décrit un état permanent, pas une action en cours.',
      axe2_voisins: 'Les versets voisins décrivent des états et des relations, pas des actions ponctuelles.',
      axe3_sourate: 'Sévir est trop ponctuel pour le ton de la Fatiha qui est une ouverture.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour sévir et punir (\'aqaba, \'adh-dhaba). Ghadhab décrit l\'état, pas l\'acte.',
      axe5_frequence: 'Sévir est une action ponctuelle. Le verset décrit un état permanent.',
      proof_ctx: 'Sévir est l\'action concrète de punir. Le verset décrit un état permanent (participe passif), pas une action ponctuelle. Le Coran utilise d\'autres mots pour l\'acte de punir (\'aqaba, \'adh-dhaba).',
    },
    'rupture': {
      status: 'peu_probable',
      axe1_verset: 'La rupture comme fait de rompre les liens s\'inscrit partiellement dans le champ lexical du verset. Cependant, le verset décrit un état subi (participe passif), pas une action de séparation.',
      axe2_voisins: 'Les versets voisins parlent de guidance et de relations. La rupture est une conséquence possible mais le verset décrit un état, pas un acte.',
      axe3_sourate: 'La sourate pose des catégories, pas des actes de rupture.',
      axe4_coherence: 'La forme III du verbe (ghadhaba) signifie rompre les liens par colère. Mais le verset utilise le participe passif de la forme I, pas la forme III.',
      axe5_frequence: 'La rupture est un acte ponctuel. Le verset décrit un état durable.',
      proof_ctx: 'La rupture est l\'acte de rompre les liens avec quelqu\'un par colère. La forme III du verbe (ghadhaba) porte ce sens. Mais le verset utilise le participe passif de la forme I, pas la forme III. La rupture est un acte, le verset décrit un état.',
    },
    bouillonnement: { status: 'nul', proof_ctx: 'Métaphore de la marmite qui bout. Le verset parle de groupes humains et de chemins de vie, pas de phénomènes physiques.' },
    'pierre dure': { status: 'nul', proof_ctx: 'Roche compacte fichée dans une montagne. Le verset parle de groupes humains, pas de géologie.' },
    'éminence': { status: 'nul', proof_ctx: 'Monticule, bosse de terrain. Hors du contexte moral du verset.' },
    'protubérance de chair': { status: 'nul', proof_ctx: 'Relief anatomique. Aucun rapport avec le verset.' },
    'cuir épais': { status: 'nul', proof_ctx: 'Matériau artisanal. Sans rapport avec le contexte.' },
    'bouclier en cuir': { status: 'nul', proof_ctx: 'Protection de combat. Hors contexte.' },
    'peau de chèvre': { status: 'nul', proof_ctx: 'Cuir dur. Hors contexte.' },
    'rougeur intense': { status: 'nul', proof_ctx: 'Changement physique de couleur. Le verset décrit un état de vie, pas une réaction corporelle.' },
    'éruption cutanée': { status: 'nul', proof_ctx: 'Maladie de la peau. Aucun rapport avec le verset.' },
  },
  dll: {
    'égarer': {
      status: 'retenu',
      axe1_verset: 'Le verset oppose le chemin droit (sirat, guidance) à l\'égarement (dalal). "Égarer" est le contraire direct de "guider" (hdy, verset 6). Le champ lexical est parfaitement aligné : guidance, chemin, égarement.',
      axe2_voisins: 'Le verset 6 dit "guide-nous sur le droit chemin" (ihdina). Le verset 7 montre les trois résultats possibles : bienfaits, insatisfaction, égarement. L\'égarement est le contraire thématique de la guidance.',
      axe3_sourate: 'La sourate Al-Fatiha est construite autour de la guidance. L\'égarement est sa conclusion logique, le rappel qu\'on peut perdre le chemin.',
      axe4_coherence: 'Le Coran utilise dalla et dalal massivement pour ceux qui quittent la voie de guidance. Le mot apparaît dans plus de 190 versets. Parfaitement cohérent.',
      axe5_frequence: 'Ad-dalliina est un participe actif, "ceux qui s\'égarent activement". Comparaison essentielle avec le mot précédent (maghdhub, participe passif) : l\'insatisfaction est subie (passif), l\'égarement est fait (actif). Le verset distingue deux types de mauvais chemin : celui qu\'on subit et celui qu\'on fait soi-même. Pour le khalifa, cette distinction respecte la dignité humaine en reconnaissant la complexité des parcours.',
      proof_ctx: '"Égarer" est l\'extension de "disparaître" (sens physique premier) vers le domaine moral : disparaître du chemin connu. Le participe actif montre que l\'égarement est un processus en cours dont les personnes sont les agents. Distinction avec "errer" : "errer" est vagabonder sans but, il n\'y a jamais eu de chemin. "Égarer" signifie qu\'il y avait un chemin et qu\'on l\'a perdu. Le verset mentionne explicitement le sirat (chemin), les égarés l\'ont quitté.',
    },
    errer: {
      status: 'probable',
      axe1_verset: '"Errer" est compatible avec le champ lexical du verset. Cependant, errer implique qu\'il n\'y a jamais eu de direction, on vagabonde dans le vide. Le verset présuppose l\'existence d\'un chemin.',
      axe2_voisins: 'Les versets voisins parlent de guidance. Errer est le contraire partiel de la guidance. Mais le verset implique que le chemin existe et a été montré.',
      axe3_sourate: 'Compatible mais moins précis que "égarer". La sourate parle d\'un chemin connu.',
      axe4_coherence: 'Le Coran utilise dalla pour ceux qui ont quitté un chemin connu, pas pour ceux qui n\'ont jamais eu de direction.',
      axe5_frequence: 'Errer ne distingue pas entre celui qui a perdu son chemin et celui qui n\'en a jamais eu. Pour le khalifa, cette distinction est importante.',
      proof_ctx: '"Errer" est vagabonder sans but. "Égarer" signifie qu\'il y avait un chemin et qu\'on l\'a perdu. Le verset mentionne le sirat (chemin), les égarés l\'ont quitté. Le participe actif implique un processus actif de déviation, pas un état passif de vagabondage.',
    },
    'disparaître': {
      status: 'peu_probable',
      axe1_verset: 'Le verset parle de chemins et de groupes humains. "Disparaître" est trop physique, les gens ne disparaissent pas littéralement.',
      axe2_voisins: 'Le contraire de la guidance c\'est perdre son chemin, pas disparaître physiquement.',
      axe3_sourate: 'Hors thème pour une sourate sur la guidance.',
      axe4_coherence: 'Le Coran utilise dalla pour l\'égarement moral, pas la disparition physique.',
      axe5_frequence: 'La disparition physique ne contribue pas à la mission du khalifa ici.',
      proof_ctx: '"Disparaître" est le sens physique premier. Le verset parle de groupes humains et de chemins de vie. L\'extension "égarer" correspond mieux au contexte coranique.',
    },
    oublier: {
      status: 'peu_probable',
      axe1_verset: '"Oublier" est un processus mental interne. Le verset parle d\'un chemin extérieur qu\'on quitte, pas d\'une information en mémoire.',
      axe2_voisins: 'Les versets voisins parlent de guidance et de direction, pas de mémoire.',
      axe3_sourate: 'Le thème de la sourate est la guidance, pas la mémoire.',
      axe4_coherence: 'Le Coran utilise dalla dans le sens de dévier du chemin, pas d\'oublier.',
      axe5_frequence: 'L\'oubli ne contribue pas directement à la mission du khalifa ici.',
      proof_ctx: '"Oublier" est un processus interne de la mémoire. Le verset parle d\'un chemin extérieur qu\'on quitte.',
    },
    'périr': { status: 'nul', proof_ctx: 'Irréversible et définitif. Le Coran présente souvent l\'égarement comme réversible. Le participe actif (en cours) contredit l\'idée de périr (terminé).' },
    'se mélanger': { status: 'nul', proof_ctx: 'Se perdre dans un ensemble. Hors contexte du verset qui parle de chemins individuels.' },
    couler: { status: 'nul', proof_ctx: 'L\'eau qui disparaît dans le sol. Sens physique sans rapport avec des groupes humains.' },
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
log('  srt -> chemin (RETENU) | pont (PEU PROBABLE) | avaler (NUL)')
log('  nem -> bienfait (RETENU) | confort (PROBABLE) | abondance (PEU PROBABLE)')
log('  ely -> sur (RETENU)')
log('  ghyr -> sauf (RETENU) | autre (PROBABLE) | changer (PEU PROBABLE)')
log('  ghdb -> désapprobation (RETENU) | insatisfaction, colère, rancœur, durcir (PROBABLE) | sévérité, sévir, rupture (PEU PROBABLE)')
log('  dll -> égarer (RETENU) | errer (PROBABLE) | disparaître, oublier (PEU PROBABLE)')
log('')

// ── ÉTAPE 4 — Traduction ──
log('>>> ÉTAPE 4 — TRADUCTION (Claude)')
log('')

const va = {
  verse_id: 7,
  translation_arab: "Le chemin de ceux à qui Tu as accordé Tes bienfaits, non pas ceux qui ont subi la désapprobation, ni ceux qui s'égarent.",
  translation_explanation: "Le verset 7 complète la demande de guidance du verset 6. Il précise quel chemin est demandé : celui de ceux qui ont reçu les bienfaits (an'amta 'alayhim, le pronom \"Tu\" est intégré dans le verbe an'amta, c'est ce qu'on appelle en arabe un pronom sujet rattaché au verbe). Le mot ghayri introduit une exclusion, c'est comme dire \"sauf\" ou \"à l'exception de\". Ensuite viennent deux groupes. Le premier est al-maghdhubi 'alayhim, un participe passif (une forme du mot qui dit que l'action est subie, pas faite). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme \"le contraire de al-rida (la satisfaction)\". Donc \"ceux sur qui l'insatisfaction est tombée\". Ce sens ne tombe pas dans l'anthropomorphisme car le Coran Lui-même utilise rida (la satisfaction) pour Dieu (radiya llahu 'anhum, Dieu est satisfait d'eux). Si Dieu peut être satisfait, Son contraire (l'insatisfaction) est un attribut valide. Le texte ne précise pas de qui vient cette insatisfaction, quand le Coran veut préciser, il le fait clairement (bi-ghadhabin min allah en 2:61, ghadhabii en 20:81). Ici il ne le fait pas, c'est un choix. Le deuxième groupe est ad-dalliina, un participe actif (une forme qui dit que l'action est en cours et faite par les personnes elles-mêmes). Ceux qui s'égarent, ils quittent activement le chemin. La différence entre les deux groupes est dans la grammaire : le premier subit (participe passif), le second agit (participe actif).",
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

const daily = [
  {analysis_id:267,sense:'insatisfaction',arabic:'أَبْدَى عَدَمَ رِضَاهُ',phon:'abda adama ridahu',french:'Il a exprimé son insatisfaction'},
  {analysis_id:267,sense:'insatisfaction',arabic:'لَمْ يَكُنْ رَاضِيًا عَنْهُمْ',phon:'lam yakun radiyan anhum',french:"Il n'était pas satisfait d'eux"},
  {analysis_id:267,sense:'insatisfaction',arabic:'غَضِبَ مِنْ سُوءِ عَمَلِهِمْ',phon:'ghadiba min sui amalihim',french:'Il fut insatisfait de leur mauvais travail'},
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
