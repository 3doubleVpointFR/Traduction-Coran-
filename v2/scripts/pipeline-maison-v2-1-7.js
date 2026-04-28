// Pipeline Maison V2 — Verset 1:7 — Approche par CONCEPTS
const { createClient } = require('@supabase/supabase-js')
const Database = require('better-sqlite3')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const ldb = new Database(require('path').join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'))

function extractLanes(root) {
  const entries = ldb.prepare('SELECT headword, xml FROM entry WHERE root = ? ORDER BY id').all(root)
  let count = 0, results = []
  for (const e of entries) {
    const parts = e.xml.split(/<sense[^>]*>[^<]*<\/sense>/)
    for (const part of parts) {
      const regex = /<hi rend="ital">(.*?)<\/hi>/g
      let match, defs = []
      while ((match = regex.exec(part)) !== null) defs.push(match[1])
      if (defs.length > 0) {
        const d = defs.join(' ').replace(/\s+/g, ' ').trim()
        if (d.length > 3) { count++; results.push({n:count, hw:e.headword, def:d}) }
      }
    }
  }
  return results
}

async function insertRoot(analysisId, concepts, rootKey) {
  const senses = []
  let order = 0
  for (const [concept, data] of Object.entries(concepts)) {
    for (const sense of data.senses) {
      order++
      senses.push({ analysis_id: analysisId, sense, sense_ar: '', description: data.description, display_order: order, meaning_type: 'etymology', concept })
    }
  }
  const {error} = await db.from('word_meanings').insert(senses)
  if (error) console.log('  ERREUR ' + rootKey + ': ' + error.message)
  else {
    for (const [c, d] of Object.entries(concepts)) console.log('  ' + c + ' (' + d.senses.length + ' sens)')
  }
  return senses.length
}

async function updateConceptStatus(analysisId, axes) {
  for (const [concept, ax] of Object.entries(axes)) {
    await db.from('word_meanings').update({ status: ax.status, proof_ctx: ax.proof_ctx }).eq('analysis_id', analysisId).eq('concept', concept)
  }
}

async function run() {
  console.log('════════════════════════════════════════')
  console.log('  PIPELINE MAISON V2 — VERSET 1:7')
  console.log('  صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ')
  console.log('════════════════════════════════════════')
  console.log('')
  console.log('>>> ÉTAPE 2 — EXTRACTION + CONCEPTS')
  console.log('')

  // ═══ srt (262) — 3 sens ═══
  const srtRaw = extractLanes('صرط')
  console.log('[srt] ' + srtRaw.length + ' sens → 2 concepts')
  const srtC = {
    'Chemin/Voie': {
      description: "Réalité extérieure et permanente sur laquelle on se déplace. Un chemin est visible, partagé, et directionnel : il mène quelque part. C'est une réalité relationnelle car le chemin relie un point de départ à une destination. Celui qui est sur le chemin avance vers quelque chose, celui qui le quitte perd sa direction.",
      senses: ['route','voie','chemin']
    },
    'Divers': {
      description: "Sens isolés sans lien sémantique direct avec le concept de chemin.",
      senses: ['longue épée','pont de l\'enfer']
    },
  }
  await insertRoot(262, srtC, 'srt')
  console.log('')

  // ═══ nem (264) — 32 sens ═══
  const nemRaw = extractLanes('نعم')
  console.log('[nem] ' + nemRaw.length + ' sens → 4 concepts')
  const nemC = {
    'Douceur/Aisance': {
      description: "État de bien-être physique et matériel : la vie est douce, tendre, agréable. C'est un état extérieur et perceptible (on voit que quelqu'un vit dans l'aisance). Il peut être permanent (une vie de confort) ou ponctuel (un moment de douceur). La douceur est passive : on la reçoit, on en profite, on ne la dirige pas vers l'extérieur.",
      senses: ['vie aisée','doux au toucher','nourrir bien','bien pétrir','bien cuire','vie délicate','fraîcheur florissante','aisance et abondance','douceur de la jeunesse','tendresse','vie plaisante']
    },
    'Bienfait/Faveur': {
      description: "Acte extérieur dirigé vers l'autre : quelqu'un accorde quelque chose de bon à quelqu'un d'autre. Le bienfait sort de celui qui donne et atteint celui qui reçoit. C'est un acte relationnel qui change la situation du receveur. Le Lane's dit pour la forme IV (an'ama) : 'He conferred, or bestowed, upon him a thing as a favour'. C'est un acte ponctuel dans sa manifestation mais permanent dans ses effets.",
      senses: ['accorder un bienfait','bénéfice','faveur','bienfait divin','bénédiction','richesse','propriété','cause de bonheur','excellent']
    },
    'Bétail/Nature': {
      description: "Réalité concrète et matérielle : les animaux domestiques (chameaux, vaches, moutons), l'autruche, les étoiles. Source de richesse tangible dans la vie arabe.",
      senses: ['bétail','autruche','tibia','veine de la jambe','sentier battu','cheval vif','étoiles du Sagittaire']
    },
    'Divers': {
      description: "Sens isolés sans lien sémantique direct.",
      senses: ['oui','noirceur','réjouissance']
    },
  }
  await insertRoot(264, nemC, 'nem')
  console.log('')

  // ═══ ely (265) — 109 sens ═══
  const elyRaw = extractLanes('علو')
  console.log('[ely] ' + elyRaw.length + ' sens → 5 concepts')
  const elyC = {
    'Hauteur/Élévation': {
      description: "Réalité physique et abstraite de s'élever, de se dresser vers le haut, d'être en position élevée. C'est un état extérieur et visible. Peut être physique (monter, grimper) ou moral (noblesse, éminence). La hauteur est un état qui se manifeste extérieurement et qui est perceptible par les autres.",
      senses: ['être haut','monter','s\'élever au-dessus','dépasser en hauteur','supérieur en noblesse','lieu élevé','rang élevé','fort et robuste','le Très-Haut','exalté','enclume','chamelle haute','pierre de séchage','récipient de traite','histoire élevée','titre','grand et corpulent','hyène haute','voix haute','meubles','noblesse','nourriture sucrée','hautain','lèvre supérieure','partie haute de Mudar','plus élevé','plus approuvé','plus connaissant','plus honorant','main chaste','flèche du jeu','trayeur','ayant capacité','lion','étage supérieur','planche de balance','lieu au septième ciel','élevé et noble','sang qui monte','d\'autorité élevée']
    },
    'Sur/Au-dessus (préposition)': {
      description: "Position relative : être au-dessus de quelque chose, en surplomb, en contact par-dessus. C'est une réalité spatiale et relationnelle — elle décrit la position d'une chose par rapport à une autre. Extension vers des sens abstraits : 'sur' peut signifier à cause de, malgré, selon, pendant, contre.",
      senses: ['sur','au-dessus','sur lui','fuir sur eux','sur le navire','malgré','à cause de','pendant','selon','sur la condition de','prendre pleinement','au nom de Dieu','malgré le mal','s\'appuyer sur','prends Zeyd','donne-moi Zeyd','côté au vent']
    },
    'Domination/Supériorité': {
      description: "Acte extérieur de prendre le dessus sur l'autre : vaincre, soumettre, maîtriser. C'est un mouvement de l'agent vers l'objet qui change le rapport de force. L'agent impose sa position supérieure sur l'autre. Peut être physique (frapper, prendre par force) ou moral (s'exalter, se montrer orgueilleux).",
      senses: ['avoir l\'ascendant','vaincre','soumettre','frapper avec l\'épée','s\'exalter orgueilleusement','rivaliser en éminence','prendre par force','élever quelqu\'un','monter sur le chameau','descendre du chameau','faire monter','annoncer la mort','éloigne-toi de moi','la chose est au-delà de mon pouvoir']
    },
    'Région géographique': {
      description: "Nom propre de la région haute du Nejd, s'étendant vers le Hijaz et la Mecque. Sens toponymique.",
      senses: ['région haute du Nejd','de la région Aliyeh','tête de montagne','partie haute du fleuve','lance partie haute','superscription']
    },
    'Divers': {
      description: "Sens isolés sans lien sémantique direct.",
      senses: ['se purifier après l\'accouchement','venir soudainement','tomber court','parole courante sur la langue','atteindre le but','lettres élevées','agir efféminé']
    },
  }
  await insertRoot(265, elyC, 'ely')
  console.log('')

  // ═══ ghyr (266) — 36 sens ═══
  const ghyrRaw = extractLanes('غير')
  console.log('[ghyr] ' + ghyrRaw.length + ' sens → 4 concepts')
  const ghyrC = {
    'Changement/Altération': {
      description: "Processus de transformation : quelque chose passe d'un état à un autre. C'est un mouvement qui modifie la réalité existante. Le changement peut être ponctuel (un acte de modification) ou permanent (les accidents du temps qui altèrent). Réalité extérieure et observable.",
      senses: ['altérer','changer','échanger','arracher les cheveux blancs','réparer la selle','devenir autre','être échangé','différer l\'un de l\'autre','les accidents du temps','mensonge']
    },
    'Autre/Exclusion': {
      description: "Réalité relationnelle de séparation entre deux catégories. 'Autre' pose une frontière entre ce qui est mentionné et ce qui ne l'est pas. 'Sauf' exclut activement un élément du groupe. C'est un acte de catégorisation qui divise la réalité en deux : ce qui est inclus et ce qui est exclu. La séparation est permanente tant que la catégorisation tient.",
      senses: ['autre','n\'est pas','sauf','sans','et cætera','non transgressant']
    },
    'Jalousie/Protection': {
      description: "État intérieur intense de protection envers ce qu'on possède. La jalousie est un sentiment qui reste chez celui qui la ressent mais qui se manifeste par des actes de protection. C'est un état permanent (trait de caractère) qui pousse à des actes extérieurs de surveillance.",
      senses: ['être jaloux','rendre jalouse','très jaloux','plus jaloux que la fièvre','signe distinctif des non-musulmans']
    },
    'Divers': {
      description: "Sens isolés sans lien sémantique direct.",
      senses: ['provision de blé','donner le prix du sang','troquer','obtenir un bénéfice','terre arrosée','décharger le chameau','parole dans sa forme propre']
    },
  }
  await insertRoot(266, ghyrC, 'ghyr')
  console.log('')

  // ═══ ghdb (267) — 33 sens ═══
  // Consulter aussi rida car le Lane's dit "contraire de al-rida"
  // Le Lane's définit rida comme : pleased, content, satisfied, approved, liked, consented
  const ghdbRaw = extractLanes('غضب')
  console.log('[ghdb] ' + ghdbRaw.length + ' sens → 5 concepts')
  const ghdbC = {
    'Dureté/Matériau': {
      description: "Réalité physique concrète de ce qui est dur, résistant, épais. Couvre les roches, les cuirs, les peaux animales, les boucliers. Ce sont des matériaux qui résistent à la pression extérieure. La dureté est un état permanent et extérieur.",
      senses: ['pierre dure','roche ronde','rougeur intense','rouge dense','épais','éminence colline','protubérance de chair dans la paupière','bouclier en cuir de chameau','vêtement de combat en cuir','peau de chèvre','peau de poisson','peau de tête','peau entre les cornes','marque de variole','lion','taureau','cent chameaux','partie anatomique']
    },
    'Contraire de al-rida': {
      description: "Le Lane's définit ghadhab comme 'le contraire de al-rida'. Le Lane's définit rida comme : pleased, content, satisfied, approved, liked, consented. Le contraire couvre donc un spectre qui va de l'insatisfaction à la désapprobation. Le Lane's ajoute 'a state of excitement of the blood of the heart for the purpose of revenge' et 'a passion accompanied by an eagerness to obtain revenge'. Pour le ghadhab divin spécifiquement, le Lane's écrit : 'his disapproving of the conduct of him who disobeys Him, and whom He will therefore punish'. Ce concept contient à la fois la dimension émotionnelle (excitation intérieure) et la dimension rationnelle (désapprobation de la conduite).",
      senses: ['être en colère','être en colère pour le compte de quelqu\'un','être en colère pour Dieu','contraire de al-rida','excitation du sang du cœur','passion de revanche','accès de colère','en colère rapidement','objet de colère','rendre mutuellement en colère','rendre en colère','devenir en colère progressivement']
    },
    'Rupture/Séparation': {
      description: "Acte ponctuel de couper les liens avec quelqu'un par mécontentement. C'est un mouvement vers l'extérieur qui met fin à une relation. La rupture est un acte, pas un état : elle se produit à un moment précis et ses conséquences sont permanentes.",
      senses: ['rompre avec quelqu\'un par colère']
    },
    'Maladie/Corps': {
      description: "Réalités médicales : éruption cutanée, motes dans l'œil, variole. États physiques du corps sans rapport avec la dimension morale.",
      senses: ['maladie ghidab','impuretés dans l\'œil','éruption cutanée','variole','atteint de variole']
    },
    'Divers': {
      description: "Sens isolés : métaphores animales et culinaires, traits de caractère spécifiques.",
      senses: ['mordre le mors','marmite qui bout','austère du regard','serpent malveillant','perturbé dans les relations','faculté irascible']
    },
  }
  await insertRoot(267, ghdbC, 'ghdb')
  console.log('')

  // ═══ dll (268) — 44 sens ═══
  const dllRaw = extractLanes('ضل')
  console.log('[dll] ' + dllRaw.length + ' sens → 4 concepts')
  const dllC = {
    'Égarement/Déviation': {
      description: "Mouvement actif de quitter le bon chemin, de dévier de la direction correcte. L'égarement présuppose qu'il existait un chemin connu et qu'on l'a quitté. C'est un mouvement extérieur et visible : celui qui s'égare change de direction. Le Lane's dit 'deviated from the right way, course'. L'égarement est un acte (on s'égare) dont l'état résultant peut être permanent (on reste égaré).",
      senses: ['s\'égarer','dévier du droit chemin','perdre le chemin','être confondu et perplexe','faire s\'égarer','mener à l\'erreur','faire trouver égaré','feindre l\'égarement','son égarement le poussa à s\'égarer davantage','erreur contraire de guidance','persévérer dans l\'erreur','très égaré','égaré','route qui égare','cause d\'égarement','tu guideras l\'égaré mais pas celui qui feint']
    },
    'Disparition/Perte': {
      description: "Réalité de ne plus être trouvable, de cesser d'exister dans le champ de perception. C'est un état extérieur : ce qui a disparu n'est plus visible ni accessible. La disparition peut être ponctuelle (un objet perdu) ou permanente (la mort). Le Lane's dit 'it became lost, it perished, came to nought'.",
      senses: ['se perdre','périr','devenir imperceptible','être caché','s\'en aller loin','eau qui disparaît','s\'évanouir','état de perdition','état perdu et annulé','absence','animal égaré','il est l\'inconnu fils de l\'inconnu','tomber dans le vain','chose vaine']
    },
    'Oubli/Enterrement': {
      description: "Réalité intérieure de perdre le souvenir, ou acte extérieur d'enfouir et cacher. L'oubli est un processus intérieur : l'information disparaît de la mémoire. L'enterrement est un acte extérieur : on cache quelque chose dans la terre.",
      senses: ['oublier','faire oublier','enterrer','cacher','mourir et devenir poussière','femme qui oublie ses menstruations','sang non vengé','fils illégitime','envoyer paître librement']
    },
    'Divers': {
      description: "Sens isolés sans lien sémantique direct.",
      senses: ['terre rugueuse','lieu pierreux','pierre que l\'homme peut porter','guide habile','restes d\'eau','habileté à guider']
    },
  }
  await insertRoot(268, dllC, 'dll')
  console.log('')

  const total = Object.values(srtC).reduce((s,c) => s+c.senses.length, 0)
    + Object.values(nemC).reduce((s,c) => s+c.senses.length, 0)
    + Object.values(elyC).reduce((s,c) => s+c.senses.length, 0)
    + Object.values(ghyrC).reduce((s,c) => s+c.senses.length, 0)
    + Object.values(ghdbC).reduce((s,c) => s+c.senses.length, 0)
    + Object.values(dllC).reduce((s,c) => s+c.senses.length, 0)
  const totalC = Object.keys(srtC).length + Object.keys(nemC).length + Object.keys(elyC).length + Object.keys(ghyrC).length + Object.keys(ghdbC).length + Object.keys(dllC).length
  console.log('  TOTAL: ' + total + ' sens en ' + totalC + ' concepts')
  console.log('')

  // ═══════════════════════════════════════
  // ÉTAPE 3 — AXES PAR CONCEPT
  // ═══════════════════════════════════════
  console.log('>>> ÉTAPE 3 — AXES PAR CONCEPT')
  console.log('')

  // ── srt — sirata (nom en idafa avec alladhina) ──
  console.log('[srt] sirata — nom en idafa')
  const srtAxes = {
    'Chemin/Voie': {
      status: 'retenu',
      proof_ctx: "Le concept de chemin/voie est une réalité extérieure, permanente et directionnelle sur laquelle on se déplace. Le mot sirata est en idafa avec alladhina (ceux qui). 'Chemin de ceux qui' exprime naturellement que le chemin appartient à un groupe, qu'il est le parcours qu'ils suivent. Le Coran utilise sirat des dizaines de fois, toujours dans le sens de voie ou direction morale. Le verset 6 demande 'guide-nous sur le droit chemin', le verset 7 précise lequel : celui des bienfaités, pas celui des deux autres groupes.",
      axe1_verset: "Le verset distingue trois groupes selon leur chemin. Le mot sirata prolonge directement le verset 6 qui demande 'guide-nous sur le droit chemin'. Le champ lexical tourne autour de la guidance, des voies à suivre et des groupes qui les empruntent. Le chemin est le mot central du verset, il est le sujet même de la distinction entre les groupes. L'opposition entre le chemin des bienfaités et les chemins des deux autres groupes structure tout le verset.",
      axe2_voisins: "Le verset 6 dit 'ihdina s-sirata l-mustaqim' (guide-nous sur le droit chemin). Le verset 7 reprend le même mot sirat pour préciser de quel chemin il s'agit. La continuité entre les deux versets est directe et logique. Le verset 7 est la réponse au verset 6 : le chemin demandé est celui des gens qui ont été favorisés, pas n'importe quel chemin.",
      axe3_sourate: "La Fatiha est la sourate d'ouverture. Elle pose les fondements de la relation entre l'humain et Dieu : louange, miséricorde, adoration, demande d'aide, et enfin guidance. Le chemin droit est le thème central des versets 6-7, le cœur de la demande faite à Dieu. Toute la sourate converge vers cette demande de direction.",
      axe4_coherence: "Le Coran utilise le mot sirat des dizaines de fois, toujours dans le sens de voie ou chemin de guidance. Le mot est systématiquement associé à la direction morale. On retrouve 'as-sirat al-mustaqim' comme expression récurrente dans tout le Coran. Aucun verset ne contredit cette lecture.",
      axe5_frequence: "Le chemin est la direction que le khalifa suit pour accomplir sa mission de justice et de civilisation. Sans chemin, pas de direction, pas de mission possible. Le verset montre que certains le suivent et d'autres non, ce qui implique le libre choix.",
    },
    'Divers': { status: 'nul', proof_ctx: "Épée et pont eschatologique. Le verset parle de groupes humains et de parcours de vie, pas d'armes ni de ponts." },
  }
  await updateConceptStatus(262, srtAxes)
  for (const [c, ax] of Object.entries(srtAxes)) console.log('  ' + c + ' → ' + ax.status.toUpperCase() + (ax.axe1_verset ? ' (5 axes)' : ''))
  console.log('')

  // ── nem — an'amta (verbe accompli forme IV) ──
  console.log('[nem] an\'amta — verbe accompli forme IV')
  const nemAxes = {
    'Douceur/Aisance': {
      status: 'peu_probable',
      proof_ctx: "La douceur est un état passif qu'on reçoit et dont on profite. Le mot an'amta est un verbe accompli forme IV (une forme qui ajoute l'idée de 'accorder, faire en sorte que'). La forme IV est active et dirigée vers l'extérieur : 'Tu as accordé'. La douceur est un état intérieur qu'on ressent, pas un acte qu'on dirige vers quelqu'un. La frontière avec 'Bienfait/Faveur' : la douceur est l'état qui résulte du bienfait, pas le bienfait lui-même. Le verset dit ce que Dieu a FAIT (accordé), pas l'état qui en résulte (douceur).",
      axe1_verset: "Le verset dit 'an'amta alayhim' (Tu as accordé sur eux). Le champ lexical est celui de l'acte d'accorder, pas de l'état de confort. Le verbe est à la forme IV qui exprime un acte causatif : faire en sorte que quelqu'un reçoive quelque chose. La douceur est un résultat, pas un acte. Le verset décrit l'acte, pas le résultat.",
      axe2_voisins: "Les versets voisins décrivent des actes de Dieu (miséricorde, seigneurie, maîtrise, guidance). La douceur serait un état passif dans une série d'actes actifs, ce qui crée une rupture de registre.",
      axe3_sourate: "La Fatiha décrit des attributs et des actes de Dieu, pas des états de confort. Le registre est celui de l'action, pas de la contemplation.",
      axe4_coherence: "Le Coran utilise la forme IV an'ama dans le sens d'accorder un bienfait, pas dans le sens de rendre doux. La forme I na'ima signifie être dans l'aisance, mais la forme IV an'ama signifie accorder.",
      axe5_frequence: "La douceur est un état passif. Pour le khalifa, c'est l'acte d'accorder qui oriente la mission, pas l'état de confort qui en résulte.",
    },
    'Bienfait/Faveur': {
      status: 'retenu',
      proof_ctx: "Le concept de bienfait/faveur est un acte extérieur dirigé vers l'autre : quelqu'un accorde quelque chose de bon à quelqu'un d'autre. Le mot an'amta est un verbe accompli forme IV : 'Tu as accordé'. La forme IV en arabe ajoute l'idée de 'faire en sorte que, accorder'. Test de compatibilité : la réalité philosophique d'un bienfait est-elle compatible avec un verbe accompli forme IV ? Oui : le bienfait est un acte qui a eu lieu (accompli) et qui est dirigé vers l'autre (forme IV causative). Distinction avec 'Douceur' : la douceur est l'état passif qui résulte du bienfait, le bienfait est l'acte actif qui cause la douceur. Le verset décrit l'acte (Tu as accordé), pas l'état résultant.",
      axe1_verset: "Le verset dit 'an'amta alayhim' (Tu as accordé sur eux). Le champ lexical est celui de la faveur divine : Dieu accorde quelque chose aux bienfaités. Le mot est un verbe accompli forme IV, ce qui confirme qu'il s'agit d'un acte achevé. Le bienfait est le pivot du verset : il sépare le premier groupe (les bienfaités) des deux autres (ceux qui ont subi le ghadhab et les égarés). Sans bienfait, pas de distinction entre les groupes.",
      axe2_voisins: "Le verset 5 dit 'c'est Toi seul que nous adorons et Toi seul dont nous demandons l'aide'. Le verset 6 dit 'guide-nous'. Le verset 7 précise la nature de cette guidance : c'est le chemin de ceux à qui Dieu a accordé Ses bienfaits. La progression va de la demande d'aide (v5) à la demande de guidance (v6) à la précision de cette guidance (v7). Le bienfait est la réponse à la demande.",
      axe3_sourate: "La Fatiha pose la relation entre l'humain et Dieu : d'abord la louange (v2), puis la miséricorde (v1,3), puis la demande (v5-6), puis la réponse (v7). Le bienfait est l'acte de Dieu qui répond à la demande de l'humain. Il s'inscrit dans le thème central de la sourate : la relation d'échange entre l'humain et Dieu.",
      axe4_coherence: "Le Coran utilise la forme IV an'ama dans de nombreux passages pour l'acte de Dieu qui accorde Ses faveurs. L'expression 'an'amta alayhim' est spécifique à ce verset mais le concept est constant dans le Coran.",
      axe5_frequence: "Le bienfait est un acte qui crée une obligation de reconnaissance. Pour le khalifa, reconnaître les bienfaits reçus motive l'action juste. La mission de civilisation repose sur la reconnaissance de ce qui a été accordé.",
    },
    'Bétail/Nature': { status: 'nul', proof_ctx: "Animaux et étoiles. Le verset parle d'un acte divin envers des groupes humains, pas de bétail." },
    'Divers': { status: 'nul', proof_ctx: "Sens isolés (oui, noirceur) sans rapport avec l'acte d'accorder un bienfait." },
  }
  await updateConceptStatus(264, nemAxes)
  for (const [c, ax] of Object.entries(nemAxes)) console.log('  ' + c + ' → ' + ax.status.toUpperCase() + (ax.axe1_verset ? ' (5 axes)' : ''))
  console.log('')

  // ── ely — alayhim (préposition + pronom) ──
  console.log('[ely] alayhim — préposition + pronom')
  const elyAxes = {
    'Hauteur/Élévation': { status: 'nul', proof_ctx: "Le mot dans le verset est alayhim (sur eux), une préposition avec pronom. C'est un usage fonctionnel de la racine, pas le concept de hauteur." },
    'Sur/Au-dessus (préposition)': {
      status: 'retenu',
      proof_ctx: "Le mot alayhim est la préposition 'ala + le pronom him (eux). C'est l'usage prépositionnel de la racine : 'sur eux'. Dans le verset, 'an'amta alayhim' signifie 'Tu as accordé sur eux', c'est-à-dire que le bienfait est tombé SUR eux, il les a atteints. La préposition 'ala indique la direction du bienfait : de Dieu vers les bienfaités. C'est un usage grammatical standard.",
      axe1_verset: "Le verset dit 'an'amta alayhim' (Tu as accordé sur eux). La préposition 'ala dirige le bienfait vers ses destinataires. Le champ lexical est celui de la direction : le bienfait vient de Dieu et tombe SUR les bienfaités. La préposition est le lien entre l'acte (accorder) et les destinataires (eux).",
      axe2_voisins: "Le verset 7 utilise alayhim deux fois : une pour les bienfaités ('an'amta alayhim'), une pour ceux qui subissent le ghadhab ('al-maghdhubi alayhim'). Les deux usages sont prépositionnels : quelque chose tombe SUR des gens. La symétrie confirme l'usage prépositionnel.",
      axe3_sourate: "La Fatiha utilise des constructions simples et directes. La préposition 'ala est un outil grammatical qui relie les actes aux destinataires. Pas de métaphore, pas de profondeur cachée.",
      axe4_coherence: "Le Coran utilise 'ala comme préposition des milliers de fois. C'est l'usage le plus fréquent de cette racine. Aucune ambiguïté.",
      axe5_frequence: "La préposition 'ala dirige l'action vers ses destinataires. Pour le khalifa, savoir vers qui l'action est dirigée est essentiel : le bienfait a des destinataires précis.",
    },
    'Domination/Supériorité': { status: 'nul', proof_ctx: "Le mot alayhim est un usage prépositionnel simple ('sur eux'), pas un concept de domination. Le verset ne parle pas de rapport de force." },
    'Région géographique': { status: 'nul', proof_ctx: "Nom propre de lieu. Le verset ne parle pas de géographie." },
    'Divers': { status: 'nul', proof_ctx: "Sens isolés sans rapport." },
  }
  await updateConceptStatus(265, elyAxes)
  for (const [c, ax] of Object.entries(elyAxes)) console.log('  ' + c + ' → ' + ax.status.toUpperCase() + (ax.axe1_verset ? ' (5 axes)' : ''))
  console.log('')

  // ── ghyr — ghayri (nom en idafa) ──
  console.log('[ghyr] ghayri — nom en position d\'exclusion')
  const ghyrAxes = {
    'Changement/Altération': {
      status: 'peu_probable',
      proof_ctx: "Le changement est un processus de transformation d'un état à un autre. Le mot ghayri dans le verset n'est pas utilisé comme verbe de transformation mais comme outil de catégorisation. Il ne dit pas que quelque chose change, il dit que quelque chose est exclu du premier groupe. La frontière avec 'Autre/Exclusion' : le changement est un processus temporel (quelque chose se transforme dans le temps), l'exclusion est une catégorisation spatiale (quelque chose est séparé du reste).",
      axe1_verset: "Le verset dit 'ghayri l-maghdhubi alayhim'. Le mot ghayri sépare le premier groupe (les bienfaités) du deuxième (ceux qui subissent le ghadhab). Le champ lexical est celui de la catégorisation, pas de la transformation. Le verset ne raconte pas un changement, il trace une frontière entre des groupes.",
      axe2_voisins: "Les versets voisins catégorisent : louange (v2), miséricorde (v3), maîtrise (v4), adoration (v5), guidance (v6). Le verset 7 continue cette catégorisation en distinguant trois groupes. Aucun verset ne parle de transformation.",
      axe3_sourate: "La Fatiha catégorise la réalité : Dieu est miséricordieux (pas cruel), Seigneur (pas serviteur), Maître du Jour (pas sujet). Le verset 7 catégorise les humains : bienfaités, ghadhab-subissants, égarés.",
      axe4_coherence: "Le Coran utilise ghayri dans le sens d'exclusion des dizaines de fois. L'usage est constant : ghayri sépare ce qui est mentionné de ce qui ne l'est pas.",
      axe5_frequence: "Le changement est un processus. L'exclusion est une catégorisation. Pour le khalifa, savoir quelles catégories existent est plus utile que savoir ce qui change.",
    },
    'Autre/Exclusion': {
      status: 'retenu',
      proof_ctx: "Le concept d'autre/exclusion est une réalité relationnelle de séparation entre deux catégories. Le mot ghayri dans le verset exclut activement le deuxième groupe (ceux qui subissent le ghadhab) du premier (les bienfaités). Test de compatibilité : le mot est en position nominale. Le concept d'exclusion peut-il fonctionner comme un outil de catégorisation nominale ? Oui : ghayri pose une frontière active entre deux groupes. Le Coran utilise ghayri dans cette fonction des dizaines de fois. Distinction avec 'Changement' : le changement transforme dans le temps, l'exclusion sépare dans l'espace. Le verset sépare, il ne transforme pas.",
      axe1_verset: "Le verset dit 'ghayri l-maghdhubi alayhim wa-la d-dallin'. Le mot ghayri est le pivot qui sépare les bienfaités des deux autres groupes. Le champ lexical est celui de la catégorisation : le chemin des uns n'est pas celui des autres. Le mot ghayri est l'outil linguistique qui trace cette frontière.",
      axe2_voisins: "Le verset 6 demande le droit chemin. Le verset 7 précise : le chemin des bienfaités, EXCLUANT celui des deux autres groupes. Le mot ghayri est la charnière entre la définition positive (le chemin des bienfaités) et la définition négative (pas celui des deux autres).",
      axe3_sourate: "La Fatiha progresse vers la précision. Le mot ghayri apporte la dernière précision : non seulement le chemin est celui des bienfaités, mais il EXCLUT celui des deux autres groupes. La sourate se ferme par une double exclusion.",
      axe4_coherence: "Le Coran utilise ghayri comme outil d'exclusion de manière constante. L'expression 'ghayri l-maghdhubi' est spécifique à ce verset mais la fonction d'exclusion de ghayri est universelle dans le Coran.",
      axe5_frequence: "L'exclusion trace des frontières claires. Pour le khalifa, savoir quel chemin est exclu est aussi important que savoir quel chemin est retenu.",
    },
    'Jalousie/Protection': { status: 'nul', proof_ctx: "Sentiment intérieur de protection envers ses proches. Le verset utilise ghayri comme outil d'exclusion, pas comme expression de jalousie." },
    'Divers': { status: 'nul', proof_ctx: "Sens isolés (provision, prix du sang) sans rapport avec l'exclusion dans le verset." },
  }
  await updateConceptStatus(266, ghyrAxes)
  for (const [c, ax] of Object.entries(ghyrAxes)) console.log('  ' + c + ' → ' + ax.status.toUpperCase() + (ax.axe1_verset ? ' (5 axes)' : ''))
  console.log('')

  // ── ghdb — al-maghdhubi (participe passif, défini) ──
  console.log('[ghdb] al-maghdhubi — participe passif défini')
  const ghdbAxes = {
    'Dureté/Matériau': { status: 'nul', proof_ctx: "Matériaux physiques (pierre, cuir, peau). Le verset parle de groupes humains et de leur relation avec le chemin, pas de matériaux." },
    'Contraire de al-rida': {
      status: 'retenu',
      proof_ctx: "Le Lane's définit ghadhab comme 'le contraire de al-rida'. Le Lane's définit rida comme : pleased, content, satisfied, approved, liked, consented. Ce concept contient une dimension émotionnelle (excitation intérieure) et une dimension rationnelle (désapprobation de la conduite). Le mot al-maghdhubi est un participe passif (une forme qui dit que l'action est subie, pas faite). Le test de compatibilité philosophique : la réalité du concept sort-elle de celui qui l'émet et atteint-elle celui qui la reçoit ? La dimension émotionnelle (excitation du sang, colère) est un état intérieur qui reste chez celui qui le ressent — l'autre personne ne subit pas l'émotion elle-même. La dimension rationnelle (désapprobation de la conduite) est un jugement dirigé vers l'extérieur qui sort de celui qui juge et atteint celui qui est jugé. Le participe passif impose que la réalité soit dirigée vers l'extérieur. Seule la dimension rationnelle est compatible. Le Lane's confirme : pour le ghadhab divin, il écrit 'his disapproving of the conduct of him who disobeys Him'. Distinction avec 'Rupture' : la rupture met fin à la relation, le contraire de al-rida maintient la relation avec un jugement négatif. Le verset catégorise des groupes dans une relation existante, pas des groupes dont la relation est coupée.",
      axe1_verset: "Le verset oppose les bienfaités (ceux à qui le bienfait a été accordé) aux maghdhub (ceux qui subissent le ghadhab). L'opposition bienfait/ghadhab est structurellement cohérente si les deux sont des actes relationnels : le bienfait est un acte positif dirigé vers l'autre, le contraire de al-rida est un acte négatif dirigé vers l'autre. Le participe passif (maghdhub) confirme que c'est un état subi par le groupe. Le champ lexical est celui de la catégorisation morale des groupes humains.",
      axe2_voisins: "Les versets 1 et 3 qualifient Dieu de miséricordieux. Le verset 5 parle d'adoration et de demande d'aide. Le verset 7 oppose les bienfaités aux maghdhub. La miséricorde des versets précédents est un acte positif de Dieu vers les humains. Le contraire de al-rida est un acte négatif. Les deux sont des actes relationnels, ce qui maintient la cohérence du registre.",
      axe3_sourate: "La Fatiha pose les fondements de la relation entre l'humain et Dieu avec des actes relationnels : miséricorde, seigneurie, guidance, bienfait. Le contraire de al-rida s'inscrit dans ce registre relationnel : c'est un acte de Dieu vers certains humains, pas une émotion intérieure.",
      axe4_coherence: "Le Lane's lui-même écrit pour le ghadhab divin : 'his disapproving of the conduct of him who disobeys Him, and whom He will therefore punish'. Le Lane's utilise 'disapproving' pour le ghadhab de Dieu, ce qui confirme la dimension rationnelle. Le Coran distingue un ghadhab 'loué' (pour la vérité) et un ghadhab 'blâmé' (injuste), ce qui montre que le concept n'est pas purement émotionnel.",
      axe5_frequence: "Le contraire de al-rida est un avertissement : certaines conduites ne sont pas approuvées. Pour le khalifa, c'est un critère de distinction entre les chemins. La mission de justice et de civilisation repose sur la capacité de distinguer ce qui est approuvé de ce qui ne l'est pas.",
    },
    'Rupture/Séparation': {
      status: 'peu_probable',
      proof_ctx: "La rupture est un acte ponctuel qui met fin à une relation. Le participe passif dans le verset décrit un état permanent dans une relation existante, pas la fin d'une relation. La frontière avec 'Contraire de al-rida' : la rupture ferme la porte (c'est terminé), le contraire de al-rida la laisse ouverte (le jugement existe mais la relation continue). Le verset classe des groupes dans une relation avec le chemin, pas des groupes dont la relation est coupée.",
      axe1_verset: "Le verset catégorise trois groupes dans une relation avec le chemin. La rupture supposerait que le deuxième groupe n'a plus de relation du tout. Mais le verset les inclut dans la catégorisation, ce qui signifie qu'ils sont encore dans une relation (négative).",
      axe2_voisins: "Les versets voisins posent un cadre de relations continues (miséricorde, seigneurie, guidance). La rupture briserait cette continuité.",
      axe3_sourate: "La Fatiha est une prière, un dialogue continu entre l'humain et Dieu. La rupture mettrait fin au dialogue.",
      axe4_coherence: "Le Lane's donne la rupture pour la forme III (ghaadhaba), pas la forme I. Le verset utilise le participe passif de la forme I.",
      axe5_frequence: "La rupture est définitive. Pour le khalifa, un avertissement (contraire de al-rida) est plus utile qu'une sentence définitive.",
    },
    'Maladie/Corps': { status: 'nul', proof_ctx: "Réalités médicales (éruption cutanée, motes dans l'œil). Le verset parle de groupes humains dans un cadre moral." },
    'Divers': { status: 'nul', proof_ctx: "Métaphores animales et culinaires, traits de caractère spécifiques. Aucun rapport avec la catégorisation morale du verset." },
  }
  await updateConceptStatus(267, ghdbAxes)
  for (const [c, ax] of Object.entries(ghdbAxes)) console.log('  ' + c + ' → ' + ax.status.toUpperCase() + (ax.axe1_verset ? ' (5 axes)' : ''))
  console.log('')

  // ── dll — ad-dalliina (participe actif, défini, pluriel) ──
  console.log('[dll] ad-dalliina — participe actif défini')
  const dllAxes = {
    'Égarement/Déviation': {
      status: 'retenu',
      proof_ctx: "L'égarement est un mouvement actif de quitter le bon chemin, de dévier de la direction correcte. Le mot ad-dalliina est un participe actif (une forme qui dit que l'action est faite par les personnes elles-mêmes, pas subie). Test de compatibilité philosophique : l'égarement est-il une action que la personne FAIT activement ? Oui : s'égarer est un mouvement actif de déviation. Le Lane's dit 'deviated from the right way'. Le verset mentionne le sirat (chemin) aux versets 6-7, ce qui présuppose l'existence d'un chemin connu. Les dallin l'ont quitté. Distinction avec 'Disparition' : la disparition est un état passif (on n'est plus là), l'égarement est un mouvement actif (on quitte le chemin). Le participe actif impose un mouvement, pas un état passif. Distinction avec 'Oubli' : l'oubli est un processus intérieur (dans la mémoire), l'égarement est un mouvement extérieur (on quitte le chemin).",
      axe1_verset: "Le verset dit 'wa-la d-dallin' (ni les égarés). Le mot dallin est un participe actif pluriel qui décrit des personnes qui FONT activement l'action de s'égarer. Le champ lexical du verset tourne autour du chemin (sirat), des bienfaités, du ghadhab et de l'égarement. L'égarement est le troisième terme de la catégorisation : le chemin des bienfaités, excluant les maghdhub et les dallin. Le mot dallin est le dernier mot de la sourate, il ferme la catégorisation.",
      axe2_voisins: "Le verset 6 demande le droit chemin (sirat mustaqim). Le verset 7 précise : pas le chemin de ceux qui s'égarent. L'égarement est le contraire de la guidance demandée au verset 6. Les égarés sont ceux qui ont quitté le chemin droit que le verset 6 demandait.",
      axe3_sourate: "La Fatiha se ferme par une double exclusion : pas le chemin des maghdhub, ni celui des dallin. L'égarement est la dernière réalité nommée dans la sourate, celle qui clôt le cadre. La sourate commence par le nom de Dieu et se termine par les égarés : du sommet au point le plus éloigné.",
      axe4_coherence: "Le Coran utilise la racine d-l-l des dizaines de fois pour l'égarement moral. Le participe actif dallin est utilisé dans de nombreux passages pour ceux qui ont quitté le chemin. L'usage est constant et univoque.",
      axe5_frequence: "L'égarement est le risque fondamental du khalifa : quitter le chemin de la mission. La sourate se ferme sur cet avertissement : ne sois pas de ceux qui s'égarent. La mission de justice et de civilisation suppose de rester sur le chemin.",
    },
    'Disparition/Perte': {
      status: 'probable',
      proof_ctx: "La disparition est un état passif de ne plus être trouvable. Le participe actif (dallin) impose un mouvement actif, pas un état passif. La frontière avec 'Égarement' : la disparition est un état (on n'est plus là), l'égarement est un mouvement (on quitte activement le chemin). Le verset mentionne le chemin (sirat), ce qui présuppose un mouvement par rapport à ce chemin, pas une simple absence.",
      axe1_verset: "Le verset oppose trois groupes en relation avec un chemin. La disparition supposerait que le troisième groupe n'existe plus. Mais le verset les nomme et les catégorise, ce qui signifie qu'ils existent encore — ils ont simplement quitté le chemin.",
      axe2_voisins: "Le verset 6 parle de guidance sur un chemin. Le verset 7 parle de ceux qui l'ont quitté. La disparition serait hors du cadre du chemin, l'égarement est dans le cadre (on était sur le chemin, on l'a quitté).",
      axe3_sourate: "La Fatiha maintient tous les groupes dans un cadre relationnel. La disparition retirerait le troisième groupe de ce cadre. L'égarement le garde dans le cadre mais dans une position de déviation.",
      axe4_coherence: "Le Coran utilise la racine d-l-l dans les deux sens (égarement et disparition). Mais dans le contexte d'un chemin (sirat), c'est l'égarement (déviation par rapport au chemin) qui domine, pas la disparition.",
      axe5_frequence: "La disparition est un état final. L'égarement est un mouvement qui peut être corrigé. Pour le khalifa, la possibilité de correction est plus utile que le constat d'absence.",
    },
    'Oubli/Enterrement': {
      status: 'peu_probable',
      proof_ctx: "L'oubli est un processus intérieur de la mémoire. Le participe actif (dallin) décrit un mouvement extérieur, pas un processus intérieur. La frontière avec 'Égarement' : l'oubli efface (dans la mémoire), l'égarement dévie (dans l'espace). Le verset parle d'un chemin extérieur qu'on quitte, pas d'une information qu'on perd en mémoire.",
      axe1_verset: "Le verset parle d'un chemin extérieur. L'oubli est un phénomène intérieur. Le champ lexical est spatial (chemin, groupes, direction), pas mnésique (mémoire, souvenir).",
      axe2_voisins: "Les versets voisins ne parlent pas de mémoire. Ils parlent de direction, de guidance, de chemin.",
      axe3_sourate: "La Fatiha est spatiale et directionnelle, pas mnésique.",
      axe4_coherence: "Le Coran utilise nasiya (oublier) pour l'oubli, pas dalla. Les deux racines ont des champs sémantiques distincts.",
      axe5_frequence: "L'oubli est passif. L'égarement est actif. Le participe actif impose l'activité.",
    },
    'Divers': { status: 'nul', proof_ctx: "Terre, pierres, eau. Réalités physiques sans rapport avec l'égarement moral du verset." },
  }
  await updateConceptStatus(268, dllAxes)
  for (const [c, ax] of Object.entries(dllAxes)) console.log('  ' + c + ' → ' + ax.status.toUpperCase() + (ax.axe1_verset ? ' (5 axes)' : ''))
  console.log('')

  // ═══ Insertion verse_word_analyses ═══
  console.log('>>> Insertion verse_word_analyses')
  const vwa = [
    { verse_id: 7, word_key: 'srt', sense_chosen: 'chemin', position: 1, analysis_axes: { sense_chosen: 'chemin', concept_chosen: 'Chemin/Voie', concepts: srtAxes } },
    { verse_id: 7, word_key: 'nem', sense_chosen: 'bienfait', position: 3, analysis_axes: { sense_chosen: 'bienfait', concept_chosen: 'Bienfait/Faveur', concepts: nemAxes } },
    { verse_id: 7, word_key: 'ely', sense_chosen: 'sur', position: 4, analysis_axes: { sense_chosen: 'sur', concept_chosen: 'Sur/Au-dessus (préposition)', concepts: elyAxes } },
    { verse_id: 7, word_key: 'ghyr', sense_chosen: 'sauf', position: 5, analysis_axes: { sense_chosen: 'sauf', concept_chosen: 'Autre/Exclusion', concepts: ghyrAxes } },
    { verse_id: 7, word_key: 'ghdb', sense_chosen: 'désapprobation', position: 6, analysis_axes: { sense_chosen: 'désapprobation', concept_chosen: 'Contraire de al-rida', concepts: ghdbAxes } },
    { verse_id: 7, word_key: 'ely', sense_chosen: 'sur', position: 7, analysis_axes: { sense_chosen: 'sur', concept_chosen: 'Sur/Au-dessus (préposition)', concepts: elyAxes } },
    { verse_id: 7, word_key: 'dll', sense_chosen: 'égarement', position: 9, analysis_axes: { sense_chosen: 'égarement', concept_chosen: 'Égarement/Déviation', concepts: dllAxes } },
  ]
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(vwa)
  if (vwaErr) console.log('  ERREUR: ' + vwaErr.message)
  else console.log('  ' + vwa.length + ' verse_word_analyses insérés')
  console.log('')

  // ═══ ÉTAPE 4 — TRADUCTION ═══
  console.log('>>> ÉTAPE 4 — TRADUCTION')

  // Choix des mots français :
  // srt → concept "Chemin/Voie" → "chemin" (parcours directionnel qu'on emprunte)
  // nem → concept "Bienfait/Faveur" → "bienfait" (acte d'accorder, pas vocabulaire chrétien "grâce")
  // ely → concept "Sur/Au-dessus" → "sur" (préposition standard)
  // ghyr → concept "Autre/Exclusion" → "sauf" (exclusion active, pas constat passif "autre")
  // ghdb → concept "Contraire de al-rida" → "désapprobation" (jugement rationnel dirigé vers l'extérieur, compatible avec le participe passif)
  // dll → concept "Égarement/Déviation" → "égarement" (mouvement actif de quitter le chemin, compatible avec le participe actif)

  const segments = [
    { fr: 'le chemin', pos: 'nom', phon: 'sirata', arabic: '\u0635\u0650\u0631\u064E\u0640\u0670\u0637\u064E', word_key: 'srt', is_particle: false, sense_retenu: 'chemin', position: 1 },
    { fr: 'de ceux qui', phon: 'alladhina', arabic: '\u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E', word_key: null, is_particle: true, position: 2 },
    { fr: 'Tu as accord\u00e9 Tes bienfaits', pos: 'verbe', phon: "an'amta", arabic: '\u0623\u064E\u0646\u0652\u0639\u064E\u0645\u0652\u062A\u064E', word_key: 'nem', is_particle: false, sense_retenu: 'bienfait', position: 3 },
    { fr: 'sur eux', phon: "'alayhim", arabic: '\u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652', word_key: 'ely', is_particle: false, sense_retenu: 'sur', position: 4 },
    { fr: 'non pas', phon: 'ghayri', arabic: '\u063A\u064E\u064A\u0652\u0631\u0650', word_key: 'ghyr', is_particle: false, sense_retenu: 'sauf', position: 5 },
    { fr: 'ceux qui ont subi la d\u00e9sapprobation', pos: 'nom', phon: 'al-maghdhubi', arabic: '\u0671\u0644\u0652\u0645\u064E\u063A\u0652\u0636\u064F\u0648\u0628\u0650', word_key: 'ghdb', is_particle: false, sense_retenu: 'd\u00e9sapprobation', position: 6 },
    { fr: 'sur eux', phon: "'alayhim", arabic: '\u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652', word_key: 'ely', is_particle: false, sense_retenu: 'sur', position: 7 },
    { fr: 'et ne pas', phon: 'wa-la', arabic: '\u0648\u064E\u0644\u064E\u0627', word_key: null, is_particle: true, position: 8 },
    { fr: "ceux qui s'\u00e9garent", pos: 'nom', phon: 'ad-dallina', arabic: '\u0671\u0644\u0636\u0651\u064E\u0622\u0644\u0651\u0650\u064A\u0646\u064E', word_key: 'dll', is_particle: false, sense_retenu: '\u00e9garement', position: 9 },
  ]

  const translation_arab = "Le chemin de ceux \u00e0 qui Tu as accord\u00e9 Tes bienfaits, non pas ceux qui ont subi la d\u00e9sapprobation, ni ceux qui s'\u00e9garent."
  const translation_explanation = "Le mot sirata (chemin) est rattach\u00e9 \u00e0 alladhina (ceux qui) par une idafa (c'est quand deux mots sont li\u00e9s pour dire que le premier appartient au second). Le chemin des bienfait\u00e9s. Le mot an'amta est un verbe accompli forme IV (une forme qui ajoute l'id\u00e9e de 'accorder, faire en sorte que'). 'Tu as accord\u00e9' : l'acte est achev\u00e9 et le bienfait a \u00e9t\u00e9 donn\u00e9. Le mot ghayri exclut le deuxi\u00e8me groupe du premier : non pas ceux-l\u00e0. Al-maghdhubi est un participe passif (une forme du mot qui dit que l'action est subie, pas faite). Le Lane's d\u00e9finit ghadhab comme 'le contraire de al-rida'. Le participe passif impose que le concept soit dirig\u00e9 vers l'ext\u00e9rieur pour pouvoir \u00eatre subi. Le texte ne pr\u00e9cise pas de qui vient cette d\u00e9sapprobation. Ad-dalliina est un participe actif pluriel (une forme qui dit que l'action est faite par les personnes elles-m\u00eames, pas subie). Les \u00e9gar\u00e9s sont ceux qui ont activement quitt\u00e9 le chemin droit demand\u00e9 au verset 6."

  const {error: vaErr} = await db.from('verse_analyses').update({ translation_arab, translation_explanation, segments }).eq('verse_id', 7)
  if (vaErr) console.log('  ERREUR: ' + vaErr.message)
  else console.log('  Traduction : "' + translation_arab + '"')

  const daily = [
    { analysis_id: 262, sense: 'chemin', arabic: '\u0671\u0647\u0652\u062F\u0650\u0646\u064E\u0627 \u0671\u0644\u0635\u0651\u0650\u0631\u064E\u0640\u0670\u0637\u064E', phon: 'ihdina s-sirata', french: 'Guide-nous sur le chemin' },
    { analysis_id: 262, sense: 'chemin', arabic: '\u0647\u064E\u0630\u064E\u0627 \u0635\u0650\u0631\u064E\u0627\u0637\u0651 \u0645\u064F\u0633\u0652\u062A\u064E\u0642\u0650\u064A\u0645\u0651', phon: 'hadha siratun mustaqim', french: 'Ceci est un chemin droit' },
    { analysis_id: 262, sense: 'chemin', arabic: '\u0623\u064E\u064A\u0651\u064F \u0635\u0650\u0631\u064E\u0627\u0637\u064D \u062A\u064E\u0633\u0652\u0644\u064F\u0643\u064F\u061F', phon: 'ayyu siratin tasluku?', french: 'Quel chemin prends-tu ?' },
    { analysis_id: 264, sense: 'bienfait', arabic: '\u0623\u064E\u0646\u0652\u0639\u064E\u0645\u064E \u0671\u0644\u0644\u0651\u064E\u0647\u064F \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650', phon: "an'ama llahu 'alayhi", french: 'Dieu lui a accord\u00e9 Son bienfait' },
    { analysis_id: 264, sense: 'bienfait', arabic: '\u0646\u0650\u0639\u0652\u0645\u064E\u0629\u064F \u0671\u0644\u0644\u0651\u064E\u0647\u0650 \u0639\u064E\u0644\u064E\u064A\u0652\u0643\u064F\u0645\u0652', phon: "ni'matu llahi 'alaykum", french: 'Le bienfait de Dieu est sur vous' },
    { analysis_id: 264, sense: 'bienfait', arabic: '\u0627\u064F\u0630\u0652\u0643\u064F\u0631\u064F\u0648\u0627 \u0646\u0650\u0639\u0652\u0645\u064E\u0629\u064E \u0671\u0644\u0644\u0651\u064E\u0647\u0650', phon: "udhkuru ni'mata llahi", french: 'Rappelez-vous le bienfait de Dieu' },
    { analysis_id: 267, sense: 'd\u00e9sapprobation', arabic: '\u063A\u064E\u0636\u0650\u0628\u064E \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650', phon: "ghadhiba 'alayhi", french: 'Il l\'a d\u00e9sapprouv\u00e9' },
    { analysis_id: 267, sense: 'd\u00e9sapprobation', arabic: '\u0644\u064E\u0627 \u062A\u064E\u063A\u0652\u0636\u064E\u0628\u0652', phon: 'la taghdhab', french: 'Ne te mets pas en col\u00e8re' },
    { analysis_id: 267, sense: 'd\u00e9sapprobation', arabic: '\u0671\u0644\u0652\u0645\u064E\u063A\u0652\u0636\u064F\u0648\u0628\u0650 \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652', phon: 'al-maghdhubi alayhim', french: 'Ceux qui ont subi la d\u00e9sapprobation' },
    { analysis_id: 268, sense: '\u00e9garement', arabic: '\u0636\u064E\u0644\u0651\u064E \u0639\u064E\u0646\u0650 \u0671\u0644\u0637\u0651\u064E\u0631\u0650\u064A\u0642\u0650', phon: "dalla 'ani t-tariqi", french: 'Il s\'est \u00e9gar\u00e9 du chemin' },
    { analysis_id: 268, sense: '\u00e9garement', arabic: '\u0644\u064E\u0627 \u062A\u064E\u0636\u0650\u0644\u0651\u064F\u0648\u0627', phon: 'la tadillu', french: 'Ne vous \u00e9garez pas' },
    { analysis_id: 268, sense: '\u00e9garement', arabic: '\u0645\u064E\u0646\u0652 \u064A\u064E\u0647\u0652\u062F\u0650 \u0671\u0644\u0644\u0651\u064E\u0647\u064F \u0641\u064E\u0644\u064E\u0627 \u0645\u064F\u0636\u0650\u0644\u0651\u064E \u0644\u064E\u0647\u064F', phon: 'man yahdi llahu fala mudilla lahu', french: 'Celui que Dieu guide, personne ne peut l\'\u00e9garer' },
  ]
  const {error: dailyErr} = await db.from('word_daily').insert(daily)
  if (dailyErr) console.log('  ERREUR daily: ' + dailyErr.message)
  else console.log('  ' + daily.length + ' phrases du quotidien')

  console.log('')
  console.log('════════════════════════════════════════')
  console.log('  VERSET 1:7 — TERMINÉ')
  console.log('  sirata (srt) → concept "Chemin/Voie" → mot "chemin"')
  console.log('  an\'amta (nem) → concept "Bienfait/Faveur" → mot "bienfait"')
  console.log('  alayhim (ely) → concept "Sur/Au-dessus" → mot "sur"')
  console.log('  ghayri (ghyr) → concept "Autre/Exclusion" → mot "sauf"')
  console.log('  al-maghdhubi (ghdb) → concept "Contraire de al-rida" → mot "désapprobation"')
  console.log('  ad-dalliina (dll) → concept "Égarement/Déviation" → mot "égarement"')
  console.log('  Traduction : "Le chemin de ceux à qui Tu as accordé Tes bienfaits, non pas ceux qui ont subi la désapprobation, ni ceux qui s\'égarent."')
  console.log('════════════════════════════════════════')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
