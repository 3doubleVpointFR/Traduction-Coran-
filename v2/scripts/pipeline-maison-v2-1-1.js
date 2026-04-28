// Pipeline Maison V2 — Verset 1:1 — Approche par CONCEPTS
// Étapes 2 + 3 + 4
const { createClient } = require('@supabase/supabase-js')
const Database = require('better-sqlite3')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const ldb = new Database(require('path').join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'))

function extractLanes(root) {
  const entries = ldb.prepare('SELECT headword, xml FROM entry WHERE root = ? ORDER BY id').all(root)
  let count = 0
  const results = []
  for (const e of entries) {
    const parts = e.xml.split(/<sense[^>]*>[^<]*<\/sense>/)
    for (const part of parts) {
      const defs = []
      const regex = /<hi rend="ital">(.*?)<\/hi>/g
      let match
      while ((match = regex.exec(part)) !== null) { defs.push(match[1]) }
      if (defs.length > 0) {
        const fullDef = defs.join(' ').replace(/\s+/g, ' ').trim()
        if (fullDef.length > 3) { count++; results.push({ n: count, hw: e.headword, def: fullDef }) }
      }
    }
  }
  return results
}

async function run() {
  console.log('════════════════════════════════════════')
  console.log('  PIPELINE MAISON V2 — VERSET 1:1')
  console.log('  بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ')
  console.log('════════════════════════════════════════')
  console.log('')

  // ═══════════════════════════════════════
  // ÉTAPE 2 — Extraction + Regroupement
  // ═══════════════════════════════════════
  console.log('>>> ÉTAPE 2 — EXTRACTION + CONCEPTS')
  console.log('')

  // ── smw (249) ──
  const smwRaw = extractLanes('سمو')
  console.log('[smw] ' + smwRaw.length + ' sens extraits → 5 concepts')

  const smwConcepts = {
    'Hauteur/Élévation': {
      description: "Réalité physique et abstraite de s'élever, de se dresser vers le haut. C'est un mouvement ou un état qui se manifeste extérieurement et qui est visible par les autres. Peut être physique (se lever, monter) ou moral (noblesse, aspiration). C'est un état qui peut être permanent (une montagne est haute) ou ponctuel (quelqu'un se lève).",
      senses: ['être haut','forme vue de loin','lune qui se dresse','se diriger vers','lever le regard','aspirer','dépasser en nombre','étalon qui bondit','désir qui resurgit','noble','rivaliser en éminence','rival en éminence','élever quelqu\'un','faire partir','monter à cheval','hautain','regarder la silhouette','égal']
    },
    'Ciel/Ce qui couvre': {
      description: "Ce qui est au-dessus et qui enveloppe. Le ciel, le toit, la couverture, la pluie qui descend. Réalité extérieure, permanente, qui surplombe et protège. Par extension : ce qui vient d'en haut (la pluie, la générosité, l'herbage qui en résulte).",
      senses: ['ciel','toit','nuage','pluie','herbage','dos','semelle supérieure','pièce de tissu supérieure','céleste','bounty']
    },
    'Nom/Identification': {
      description: "Réalité extérieure et permanente qui permet d'identifier, de distinguer et de communiquer. Le nom est un signe qui pointe vers ce qu'il désigne — il sort de celui qui nomme et atteint ce qui est nommé. Il crée un pont entre la chose et celui qui la connaît. Sans nom, pas d'identification, pas de communication possible. Ce concept couvre l'acte de nommer, le résultat (le nom), sa propagation (la renommée) et ses usages sociaux (s'appeler, demander le nom).",
      senses: ['nommer','prononcer le nom de Dieu','se nommer','s\'appeler mutuellement','demander le nom','nom','renommée','nominal','qualité de nom','nommé','homonyme','revendiquer une parenté']
    },
    'Chasse': {
      description: "Activité extérieure de poursuite et de capture. Mouvement actif vers l'extérieur dirigé vers une proie. Réalité physique et ponctuelle.",
      senses: ['chasser','chasseurs','chaussettes de chasseur','inciter à chasser','tester une chamelle']
    },
    'Divers': {
      description: "Sens isolés qui ne forment pas de champ sémantique cohérent avec les autres concepts.",
      senses: ['choisir','visiter','se diriger vers Es-Semaweh']
    },
  }

  const smwSenses = []
  let order = 0
  for (const [concept, data] of Object.entries(smwConcepts)) {
    for (const sense of data.senses) {
      order++
      smwSenses.push({ analysis_id: 249, sense, sense_ar: '', description: data.description, display_order: order, meaning_type: 'etymology', concept })
    }
  }
  const {error: smwErr} = await db.from('word_meanings').insert(smwSenses)
  if (smwErr) console.log('  ERREUR: ' + smwErr.message)
  else {
    for (const [c, d] of Object.entries(smwConcepts)) console.log('  ' + c + ' (' + d.senses.length + ' sens)')
  }
  console.log('')

  // ── alh (250) ──
  const alhRaw = extractLanes('اله')
  console.log('[alh] ' + alhRaw.length + ' sens extraits → 5 concepts')

  const alhConcepts = {
    'Adoration/Dévotion': {
      description: "Acte extérieur dirigé vers l'objet d'adoration. Celui qui adore dirige sa dévotion vers ce qu'il adore. C'est une action relationnelle qui sort de l'adorateur et atteint l'adoré. Peut être ponctuel (un acte de dévotion) ou permanent (une vie de dévotion). Couvre aussi l'acte de faire adorer quelqu'un d'autre et celui de se consacrer soi-même au culte.",
      senses: ['adorer','faire adorer','se dévouer au culte','diviniser']
    },
    'Divinité': {
      description: "Position relationnelle : ce qui reçoit l'adoration, ce vers quoi on se tourne avec dévotion. Ce n'est pas une qualité intérieure — c'est une position définie par la relation entre l'adorateur et l'adoré. Le concept existe dans cette relation. Couvre le concept abstrait (divinité), le nom propre (Dieu), et les extensions linguistiques (théologie, exclamation).",
      senses: ['divinité','divinité (concept)','Dieu','théologie','exclamation divine','oui certes']
    },
    'Détresse': {
      description: "État intérieur de confusion ou de chagrin intense. La perplexité bloque celui qui la vit, la lamentation déborde vers l'extérieur par des manifestations visibles. Ces états restent principalement chez celui qui les ressent.",
      senses: ['être perplexe','se lamenter']
    },
    'Refuge/Protection': {
      description: "Mouvement vers un protecteur ou acte de protection envers l'autre. Réalité relationnelle qui nécessite deux parties : celui qui cherche le refuge et celui qui l'offre. Couvre les deux directions : chercher la protection et accorder la protection.",
      senses: ['chercher refuge','protéger','demeurer']
    },
    'Domination': {
      description: "Acte de soumettre l'autre, de le réduire en servitude. Acte extérieur dirigé vers l'autre qui change son statut contre sa volonté.",
      senses: ['asservir']
    },
  }

  const alhSenses = []
  order = 0
  for (const [concept, data] of Object.entries(alhConcepts)) {
    for (const sense of data.senses) {
      order++
      alhSenses.push({ analysis_id: 250, sense, sense_ar: '', description: data.description, display_order: order, meaning_type: 'etymology', concept })
    }
  }
  const {error: alhErr} = await db.from('word_meanings').insert(alhSenses)
  if (alhErr) console.log('  ERREUR: ' + alhErr.message)
  else {
    for (const [c, d] of Object.entries(alhConcepts)) console.log('  ' + c + ' (' + d.senses.length + ' sens)')
  }
  console.log('')

  // ── rhm (251) ──
  const rhmRaw = extractLanes('رحم')
  console.log('[rhm] ' + rhmRaw.length + ' sens extraits → 5 concepts')

  const rhmConcepts = {
    'Utérus/Reproduction': {
      description: "Réalité physique concrète : l'organe maternel, le lieu où la vie se forme dans la douceur et la protection. C'est un espace intérieur qui accueille, nourrit et protège. Extension vers les complications médicales liées à cet organe.",
      senses: ['utérus','vulve','maladie de l\'utérus','utérus gonflé','chamelle malade post-partum','sortie de l\'utérus']
    },
    'Parenté/Lien familial': {
      description: "Relation permanente entre personnes qui partagent un lien de sang. Extension de l'utérus : ceux qui partagent la même matrice sont liés. C'est une réalité relationnelle extérieure (le lien existe entre les personnes) et permanente (il ne peut pas être supprimé). Couvre le lien lui-même, les catégories juridiques de parenté, et le sentiment de connexion familiale.",
      senses: ['lien de parenté','parents par les femmes','parent interdit au mariage','sentiment de parenté','connecté par parenté']
    },
    'Miséricorde/Tendresse': {
      description: "Mouvement intérieur de tendresse du cœur qui se dirige vers l'extérieur en actes de bienfaisance. Ce n'est pas un sentiment qui reste enfermé : la miséricorde sort de celui qui la ressent et atteint celui qui la reçoit. Elle est permanente comme disposition du cœur, et ponctuelle dans chacune de ses manifestations. Couvre la qualité elle-même (miséricorde), ses manifestations (pardon, compassion), ses formes verbales (demander, accorder, exprimer) et ses degrés (le Compatissant = degré maximum).",
      senses: ['miséricorde','pardon','traiter avec compassion','dire "que Dieu te fasse miséricorde"','se forcer à la compassion','miséricorde réciproque','demander la miséricorde','le Compatissant','plus miséricordieux','objet de miséricorde','traité avec beaucoup de compassion']
    },
    'Provision/Bienfait matériel': {
      description: "Manifestation concrète et matérielle de la bonté : nourriture, pluie, abondance. Ce qui descend d'en haut et nourrit ce qui est en bas. Réalité extérieure, tangible et ponctuelle. C'est le résultat concret de la miséricorde, pas la miséricorde elle-même.",
      senses: ['subsistance','pluie','abondance','prophétie']
    },
    'Divers': {
      description: "Sens isolés : noms propres de lieux, proverbes, objets sans lien sémantique direct avec les autres concepts.",
      senses: ['La Mecque','Médine','outre abîmée','la crainte vaut mieux que la pitié']
    },
  }

  const rhmSenses = []
  order = 0
  for (const [concept, data] of Object.entries(rhmConcepts)) {
    for (const sense of data.senses) {
      order++
      rhmSenses.push({ analysis_id: 251, sense, sense_ar: '', description: data.description, display_order: order, meaning_type: 'etymology', concept })
    }
  }
  const {error: rhmErr} = await db.from('word_meanings').insert(rhmSenses)
  if (rhmErr) console.log('  ERREUR: ' + rhmErr.message)
  else {
    for (const [c, d] of Object.entries(rhmConcepts)) console.log('  ' + c + ' (' + d.senses.length + ' sens)')
  }
  console.log('')

  const totalSenses = smwSenses.length + alhSenses.length + rhmSenses.length
  console.log('  TOTAL: ' + totalSenses + ' sens insérés en ' + (Object.keys(smwConcepts).length + Object.keys(alhConcepts).length + Object.keys(rhmConcepts).length) + ' concepts')
  console.log('')

  // ═══════════════════════════════════════
  // ÉTAPE 3 — Axes par CONCEPT
  // ═══════════════════════════════════════
  console.log('>>> ÉTAPE 3 — AXES PAR CONCEPT')
  console.log('')

  // Contexte : bi-smi llahi r-rahmani r-rahimi
  // ism = nom génitif en idafa avec Allah
  // Allah = nom propre défini
  // ar-rahman / ar-rahim = adjectifs définis

  // ── smw — ism en idafa ──
  console.log('[smw] ism — nom en idafa avec Allah')
  const smwAxes = {
    'Hauteur/Élévation': { status: 'nul', proof_ctx: 'Le mot dans le verset est ism (nom), en idafa avec Allah. Le concept de hauteur/élévation ne peut pas être rattaché à Dieu dans cette construction d\'invocation. "À la hauteur de Dieu" ne correspond pas à la formule bi-smi llahi.' },
    'Ciel/Ce qui couvre': { status: 'nul', proof_ctx: 'Le mot est ism, pas sama\'. "Au ciel de Dieu" ne correspond pas à la formule d\'invocation bi-smi llahi.' },
    'Nom/Identification': {
      status: 'retenu',
      proof_ctx: "Le concept de nom/identification est une réalité extérieure et permanente qui permet d'identifier et de communiquer. La formule bi-smi llahi (au nom de Dieu) utilise exactement ce concept : on identifie celui au nom duquel on agit. Test de compatibilité grammaticale : le mot est en idafa (annexion) avec Allah. Le concept d'identification peut-il être rattaché à Dieu dans une relation d'appartenance ? Oui : le nom appartient à Dieu, il L'identifie. Le Coran utilise cette formule au début de 113 sourates sur 114, toujours dans le sens d'identification. Aucun autre concept de la racine smw n'est utilisé dans la construction bi-smi.",
      axe1_verset: "Le verset dit \"bi-smi llahi\" (au nom de Dieu). Le concept d'identification est le cœur de la formule d'invocation. Le champ lexical est celui de l'autorité et de l'identité : dire \"au nom de\" c'est placer ce qui suit sous l'identité de celui qui est nommé. Les mots suivants (ar-rahman, ar-rahim) qualifient cette identité, ce qui confirme que le verset commence par un acte d'identification. Sans le nom, les qualifications qui suivent n'auraient pas de support.",
      axe2_voisins: "Les versets suivants qualifient Dieu : Seigneur des mondes (v2), le Miséricordieux (v3), Maître du Jour (v4). Le nom ouvre cette série de qualifications. La progression est logique : d'abord on identifie (on nomme), ensuite on qualifie (on décrit). Le verset 1 est le point d'entrée dans la connaissance de Dieu, les autres développent ce que le nom contient.",
      axe3_sourate: "La Fatiha est la sourate d'ouverture du Coran tout entier. Commencer par \"au nom de\" c'est poser le cadre : tout ce qui suit est dit au nom de Dieu. Le concept d'identification est le fondement de l'acte d'ouverture. La sourate ne pourrait pas commencer par autre chose qu'un nom, car sans identification, il n'y a pas de relation possible.",
      axe4_coherence: "Le Coran utilise \"bi-smi llahi\" comme formule d'ouverture au début de 113 sourates sur 114. L'usage est constant et univoque : c'est toujours le concept de nom/identification, jamais la hauteur, le ciel ou un autre concept de la racine. Le Coran utilise aussi \"ism\" dans d'autres contextes (sourate 96:1 \"iqra bi-smi rabbika\") avec le même concept.",
      axe5_frequence: "Le concept de nom/identification est l'outil fondamental qui permet au khalifa de connaître et d'identifier. La mission de justice commence par la capacité de nommer : nommer les choses, nommer les personnes, nommer les principes. Commencer par le nom de Dieu c'est reconnaître Son identité comme fondement de toute action. La dignité humaine passe par le fait d'être nommé et reconnu.",
    },
    'Chasse': { status: 'nul', proof_ctx: 'Activité physique de poursuite. Aucun rapport avec la formule d\'invocation au nom de Dieu.' },
    'Divers': { status: 'nul', proof_ctx: 'Sens isolés sans rapport avec la formule d\'invocation.' },
  }
  for (const [c, ax] of Object.entries(smwAxes)) {
    const tag = ax.axe1_verset ? '(5 axes)' : ''
    console.log('  ' + c + ' → ' + ax.status.toUpperCase() + ' ' + tag)
  }
  // Mettre à jour le statut des sens dans word_meanings
  for (const [concept, ax] of Object.entries(smwAxes)) {
    await db.from('word_meanings').update({ status: ax.status, proof_ctx: ax.proof_ctx }).eq('analysis_id', 249).eq('concept', concept)
  }
  console.log('')

  // ── alh — Allah nom propre défini ──
  console.log('[alh] Allah — nom propre défini')
  const alhAxes = {
    'Adoration/Dévotion': {
      status: 'probable',
      proof_ctx: "L'adoration est le sens premier de la racine a-l-h : un acte dirigé vers l'objet d'adoration. Mais le verset nomme Dieu dans une formule d'identification, il ne décrit pas l'acte d'adorer. L'adoration viendra au verset 5 (iyyaka nabudu). La frontière philosophique : l'adoration est ce qu'on FAIT envers Dieu (action du fidèle), la divinité est ce que Dieu EST (identité). Le verset dit ce qu'Il est, pas ce qu'on fait.",
      axe1_verset: "Le verset dit \"bi-smi llahi\". Le champ lexical est celui de l'identification divine, pas de l'action de dévotion. Le mot Allah dans la formule bi-smi fonctionne comme un nom propre qui identifie, pas comme une référence à l'acte d'adorer. La formule est une invocation d'autorité (\"au nom de\"), pas une déclaration de dévotion (\"nous adorons\").",
      axe2_voisins: "L'adoration est mentionnée explicitement au verset 5 (iyyaka nabudu). Le verset 1 nomme, le verset 5 adore. La sourate sépare les deux actes : d'abord l'identification, puis l'adoration. Fusionner les deux au verset 1 anticiperait le verset 5 et briserait la progression logique de la sourate.",
      axe3_sourate: "La Fatiha progresse de l'identification (v1) à la description (v2-4) à l'engagement (v5-7). L'adoration appartient à la phase d'engagement, pas à la phase d'identification. Le verset 1 est dans la première phase.",
      axe4_coherence: "Le Coran distingue le nom Allah (l'identité) de l'acte d'adorer (ibada). Quand le Coran veut parler d'adoration, il utilise abada et ses dérivés (nabudu, ibada, abd), jamais le nom Allah seul.",
      axe5_frequence: "L'adoration est une action du khalifa envers Dieu, pas l'identité de Dieu. Pour le khalifa, identifier la source (divinité) précède l'action envers cette source (adoration). Le verset pose l'identité, l'action viendra après.",
    },
    'Divinité': {
      status: 'retenu',
      proof_ctx: "La divinité est la position relationnelle de ce qui reçoit l'adoration. Le mot Allah est le nom propre qui désigne cette divinité. Test de compatibilité : le mot est un nom propre défini. Le concept de divinité peut-il être identifié comme une réalité connue et définie ? Oui : Allah est le nom propre qui identifie LA divinité par excellence. Distinction avec \"Adoration/Dévotion\" : l'adoration est ce qu'on FAIT envers Dieu (action du fidèle), la divinité est ce que Dieu EST (son identité). Le verset identifie QUI est Dieu (divinité), il ne décrit pas ce qu'on fait envers Lui (adoration). Distinction avec \"Refuge/Protection\" : le refuge est une action vers Dieu (on cherche sa protection), la divinité est ce que Dieu EST. Le verset dit ce qu'Il est.",
      axe1_verset: "Le verset dit \"bi-smi llahi\" (au nom de Dieu). Le mot Allah est le nom propre de la Divinité. Le champ lexical est celui de l'identification divine : on nomme celui au nom duquel on agit. Le concept de divinité est ce que le nom Allah désigne : l'être vers lequel converge l'adoration. Les qualificatifs qui suivent (ar-rahman, ar-rahim) développent cette identité divine.",
      axe2_voisins: "Les versets suivants qualifient cette divinité : Seigneur des mondes (v2), Miséricordieux (v3), Maître du Jour (v4). Le verset 1 la nomme, les suivants la décrivent. La progression va de l'identification à la qualification. Sans le concept de divinité posé au verset 1, les qualifications des versets suivants n'auraient pas de support.",
      axe3_sourate: "La Fatiha pose la relation entre l'humain et Dieu. Nommer la Divinité en premier est le fondement de cette relation. On ne peut pas qualifier quelqu'un qu'on n'a pas d'abord identifié. La divinité est le concept premier qui rend possible tout le reste de la sourate.",
      axe4_coherence: "Le Coran utilise Allah comme nom propre de la Divinité des milliers de fois. Le mot ilah (divinité) est le concept dont Allah est le nom propre. Le Coran dit \"la ilaha illa llah\" (pas de divinité sauf Dieu), ce qui montre que ilah est le concept et Allah est le nom.",
      axe5_frequence: "Reconnaître la Divinité est le fondement de la mission du khalifa. Sans cette reconnaissance, pas de cadre pour la justice ni la civilisation. La dignité humaine est accordée par cette Divinité. Toute la mission du khalifa repose sur l'identification de cette source.",
    },
    'Détresse': { status: 'nul', proof_ctx: 'État intérieur de confusion ou de chagrin. Le verset est une ouverture sereine, pas un cri de détresse.' },
    'Refuge/Protection': {
      status: 'peu_probable',
      proof_ctx: "Le refuge est un mouvement vers un protecteur face à une menace. Le verset est une formule d'ouverture sereine, pas une fuite. La frontière philosophique : le refuge est réactif (on réagit à un danger), l'invocation au nom de Dieu est proactive (on ouvre une action). Le Coran utilise \"audhu billahi\" pour le refuge, pas \"bi-smi llahi\".",
      axe1_verset: "Le verset dit \"bi-smi llahi\". La formule est une invocation d'autorité, pas une demande de refuge. Le champ lexical est celui de l'identification et de l'ouverture, pas de la crainte et de la protection. Chercher refuge suppose une menace, le verset est une ouverture sereine.",
      axe2_voisins: "Les versets voisins qualifient Dieu par des attributs positifs (miséricorde, seigneurie). Le registre est celui de la reconnaissance, pas de la fuite devant un danger.",
      axe3_sourate: "La Fatiha est une prière de louange et de demande de guidance. Le refuge est un thème des sourates 113-114 (al-Falaq, an-Nas), pas de la sourate 1.",
      axe4_coherence: "Le Coran utilise des formules spécifiques pour le refuge : \"audhu billahi\" (je cherche refuge auprès de Dieu). La formule \"bi-smi llahi\" n'est jamais utilisée pour le refuge dans le Coran.",
      axe5_frequence: "Chercher refuge est une action ponctuelle et réactive (on fuit un danger). L'invocation au nom de Dieu est un acte fondateur et proactif (on ouvre une action). Pour le khalifa, l'acte fondateur précède la réaction.",
    },
    'Domination': { status: 'nul', proof_ctx: 'Acte de soumettre l\'autre. Le verset identifie Dieu dans une invocation, il ne parle pas de domination.' },
  }
  for (const [c, ax] of Object.entries(alhAxes)) {
    const tag = ax.axe1_verset ? '(5 axes)' : ''
    console.log('  ' + c + ' → ' + ax.status.toUpperCase() + ' ' + tag)
  }
  for (const [concept, ax] of Object.entries(alhAxes)) {
    await db.from('word_meanings').update({ status: ax.status, proof_ctx: ax.proof_ctx }).eq('analysis_id', 250).eq('concept', concept)
  }
  console.log('')

  // ── rhm — ar-rahman / ar-rahim adjectifs définis ──
  console.log('[rhm] ar-rahman / ar-rahim — adjectifs définis')
  const rhmAxes = {
    'Utérus/Reproduction': { status: 'nul', proof_ctx: 'Réalité anatomique. Le verset qualifie Dieu avec des adjectifs moraux, pas des termes anatomiques.' },
    'Parenté/Lien familial': {
      status: 'peu_probable',
      proof_ctx: "La parenté vient de la même racine (r-h-m = utérus → ceux qui partagent le même utérus sont liés). Mais le verset qualifie Dieu avec des adjectifs, pas avec des noms de parenté. La frontière philosophique : le lien de parenté est une relation horizontale entre humains (on est parent de quelqu'un), la miséricorde est une qualité qui descend verticalement (Dieu est miséricordieux envers les créatures).",
      axe1_verset: "Le verset dit \"ar-rahmani r-rahimi\". Les deux mots sont des adjectifs qui qualifient Dieu. Le champ lexical est celui de la qualification divine, pas des relations familiales humaines. L'étymologie relie la miséricorde à l'utérus (le lieu de la douceur première), mais le verset utilise des adjectifs de qualité, pas des noms de parenté.",
      axe2_voisins: "Les versets voisins ne parlent pas de relations familiales. Ils décrivent des attributs divins (seigneurie, maîtrise). Le lien de parenté est un thème absent de cette sourate.",
      axe3_sourate: "La Fatiha traite de la relation entre Dieu et l'humain, pas des relations entre humains. La parenté est une réalité inter-humaine qui n'est pas le sujet de la sourate.",
      axe4_coherence: "Le Coran utilise rahim (utérus/parenté) distinctement de rahman/rahim (adjectifs de qualité). Les deux viennent de la même racine mais ont des usages distincts dans le Coran.",
      axe5_frequence: "Le lien de parenté est une relation horizontale entre humains. La miséricorde divine dans le verset est une relation verticale. Pour le khalifa, les deux sont importants mais le verset traite de la relation verticale.",
    },
    'Miséricorde/Tendresse': {
      status: 'retenu',
      proof_ctx: "La miséricorde est un mouvement intérieur de tendresse qui se dirige vers l'extérieur en actes de bienfaisance. Test de compatibilité : les mots ar-rahman et ar-rahim sont des adjectifs définis avec al-. Le concept de miséricorde peut-il être identifié comme une qualité connue et permanente ? Oui : la miséricorde est une qualité stable et identifiable. Le Coran utilise cette qualification au début de 113 sourates. Distinction avec \"Parenté\" : la parenté est une relation horizontale entre humains, la miséricorde est une qualité qui descend verticalement de Dieu. Distinction avec \"Provision\" : la provision est le résultat concret et matériel, la miséricorde est la qualité intérieure qui motive ce résultat. Les adjectifs décrivent la qualité, pas le résultat.",
      axe1_verset: "Le verset dit \"ar-rahmani r-rahimi\". Les deux mots qualifient Dieu avec des adjectifs définis. Le champ lexical est celui de la tendresse et de la bienveillance. La miséricorde est un mouvement intérieur qui se dirige vers l'extérieur. Les deux adjectifs viennent de la même racine mais sur des modèles morphologiques différents : ar-rahman (degré maximum, qui déborde) et ar-rahim (qualité permanente, qui ne s'arrête jamais).",
      axe2_voisins: "Le verset 2 continue avec la louange et la seigneurie, le verset 3 répète ar-rahman ar-rahim. Cette répétition montre l'importance de la miséricorde comme attribut fondamental. La miséricorde est mentionnée avant la seigneurie et la maîtrise, ce qui lui donne la priorité dans la description de Dieu.",
      axe3_sourate: "La Fatiha s'ouvre et se rappelle la miséricorde comme fondement de la relation avec Dieu. C'est le premier attribut associé à Dieu dans le Coran tout entier. Sa double mention (v1 et v3) encadre la description de Dieu et montre son importance structurelle.",
      axe4_coherence: "Le Coran utilise ar-rahman et ar-rahim des centaines de fois pour décrire Dieu. La formule \"bi-smi llahi r-rahmani r-rahimi\" ouvre 113 sourates sur 114. Cet usage massif et constant confirme que la miséricorde est l'attribut premier de Dieu dans le Coran.",
      axe5_frequence: "La miséricorde est le fondement de la relation entre le khalifa et les autres êtres humains. C'est par la miséricorde que la dignité humaine est préservée. Sans miséricorde, la justice devient tyrannie, l'autorité devient domination.",
    },
    'Provision/Bienfait matériel': {
      status: 'peu_probable',
      proof_ctx: "La provision est la manifestation concrète et matérielle de la miséricorde : nourriture, pluie, abondance. Mais le verset utilise des adjectifs de qualité, pas des noms concrets. La frontière : la provision est le résultat (ce qui est donné), la miséricorde est la qualité (ce qui motive le don). Les adjectifs ar-rahman et ar-rahim décrivent la qualité, pas le résultat.",
      axe1_verset: "Le verset qualifie Dieu avec des adjectifs. La provision est une réalité matérielle, pas une qualité morale. Le champ lexical du verset est celui de la qualification morale, pas de la fourniture matérielle.",
      axe2_voisins: "Les versets voisins décrivent des attributs moraux (miséricorde, seigneurie, maîtrise). La provision matérielle n'est pas dans cette série d'attributs.",
      axe3_sourate: "La Fatiha opère dans un registre moral et spirituel, pas matériel. La provision est un thème d'autres sourates.",
      axe4_coherence: "Le Coran utilise d'autres mots pour la provision (rizq). Le mot rahma est parfois utilisé pour la provision mais c'est une extension, pas le sens premier.",
      axe5_frequence: "La provision est un besoin matériel ponctuel. La miséricorde est une qualité morale permanente. Pour le khalifa, la qualité permanente fonde la mission, pas le besoin ponctuel.",
    },
    'Divers': { status: 'nul', proof_ctx: 'Noms propres de lieux et proverbes sans rapport avec la qualification de Dieu.' },
  }
  for (const [c, ax] of Object.entries(rhmAxes)) {
    const tag = ax.axe1_verset ? '(5 axes)' : ''
    console.log('  ' + c + ' → ' + ax.status.toUpperCase() + ' ' + tag)
  }
  for (const [concept, ax] of Object.entries(rhmAxes)) {
    await db.from('word_meanings').update({ status: ax.status, proof_ctx: ax.proof_ctx }).eq('analysis_id', 251).eq('concept', concept)
  }
  console.log('')

  // ── Insertion verse_word_analyses avec analysis_axes par concept ──
  console.log('>>> Insertion verse_word_analyses')
  const vwa = [
    { verse_id: 1, word_key: 'smw', sense_chosen: 'nom', position: 2,
      analysis_axes: { sense_chosen: 'nom', concept_chosen: 'Nom/Identification', concepts: smwAxes } },
    { verse_id: 1, word_key: 'alh', sense_chosen: 'divinité', position: 3,
      analysis_axes: { sense_chosen: 'divinité', concept_chosen: 'Divinité', concepts: alhAxes } },
    { verse_id: 1, word_key: 'rhm', sense_chosen: 'miséricorde', position: 4,
      analysis_axes: { sense_chosen: 'miséricorde', concept_chosen: 'Miséricorde/Tendresse', concepts: rhmAxes } },
    { verse_id: 1, word_key: 'rhm', sense_chosen: 'miséricorde', position: 5,
      analysis_axes: { sense_chosen: 'miséricorde', concept_chosen: 'Miséricorde/Tendresse', concepts: rhmAxes } },
  ]
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(vwa)
  if (vwaErr) console.log('  ERREUR: ' + vwaErr.message)
  else console.log('  ' + vwa.length + ' verse_word_analyses insérés')
  console.log('')

  // ═══════════════════════════════════════
  // ÉTAPE 4 — Traduction
  // ═══════════════════════════════════════
  console.log('>>> ÉTAPE 4 — TRADUCTION')

  // Choix du mot français dans chaque concept retenu :
  // smw → concept "Nom/Identification" → "nom" (identifie, pas renommée ni nommer)
  // alh → concept "Divinité" → "divinité" (traduit par "Dieu" dans la traduction)
  // rhm → concept "Miséricorde/Tendresse" → "miséricorde" (qualité permanente, pas pardon ni compassion)

  const segments = [
    { fr: 'au', phon: 'bi', arabic: '\u0628\u0650', word_key: null, is_particle: true, position: 1 },
    { fr: 'nom', pos: 'nom', phon: 'ismi', arabic: '\u0671\u0633\u0652\u0645\u0650', word_key: 'smw', is_particle: false, sense_retenu: 'nom', position: 2 },
    { fr: 'de Dieu', pos: 'nom', phon: 'allahi', arabic: '\u0671\u0644\u0644\u0651\u064E\u0647\u0650', word_key: 'alh', is_particle: false, sense_retenu: 'divinit\u00e9', position: 3 },
    { fr: 'le Tout-Mis\u00e9ricordieux', pos: 'adjectif', phon: 'ar-rahmani', arabic: '\u0671\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0640\u0670\u0646\u0650', word_key: 'rhm', is_particle: false, sense_retenu: 'mis\u00e9ricorde', position: 4 },
    { fr: 'le Mis\u00e9ricordieux', pos: 'adjectif', phon: 'ar-rahimi', arabic: '\u0671\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650', word_key: 'rhm', is_particle: false, sense_retenu: 'mis\u00e9ricorde', position: 5 },
  ]

  const translation_arab = "Au nom de Dieu, le Tout-Mis\u00e9ricordieux, le Mis\u00e9ricordieux."
  const translation_explanation = "La particule bi (au/avec) introduit le mot ism (nom), qui est rattach\u00e9 \u00e0 Allah par ce qu'on appelle en arabe une idafa (c'est quand deux mots sont li\u00e9s pour dire que le premier appartient ou est li\u00e9 au second, comme quand on dit \"la porte de la maison\"). Ici : le nom de Dieu. Ensemble, bi-smi llahi forme \"au nom de Dieu\", une formule qui place tout ce qui suit sous l'autorit\u00e9 et l'identit\u00e9 de Dieu. Le mot ism vient d'une racine dont les concepts couvrent la hauteur, le ciel et le nom. Ici c'est le concept de nom/identification qui est retenu car la construction bi-smi est une formule d'identification : on dit au nom de qui on agit. Les deux mots ar-rahman et ar-rahim qualifient Dieu. Ils viennent de la m\u00eame racine (r-h-m, dont le concept physique premier est l'ut\u00e9rus, le lieu o\u00f9 la vie se forme dans la douceur et la protection). Ar-rahman est construit sur un mod\u00e8le (qu'on appelle en arabe un wazn, c'est comme un moule qui donne une forme particuli\u00e8re au mot) qui exprime le plus haut degr\u00e9 possible, comme si la mis\u00e9ricorde d\u00e9bordait de partout. C'est pour \u00e7a qu'on traduit \"le Tout-Mis\u00e9ricordieux\". Ar-rahim est construit sur un mod\u00e8le qui exprime une qualit\u00e9 permanente, qui ne s'arr\u00eate jamais, un trait de caract\u00e8re constant. C'est pour \u00e7a qu'on traduit \"le Mis\u00e9ricordieux\" (sans \"Tout\")."

  const {error: vaErr} = await db.from('verse_analyses').update({ translation_arab, translation_explanation, segments }).eq('verse_id', 1)
  if (vaErr) console.log('  ERREUR: ' + vaErr.message)
  else console.log('  Traduction : "' + translation_arab + '"')

  // Phrases du quotidien
  const daily = [
    { analysis_id: 249, sense: 'nom', arabic: '\u0645\u064E\u0627 \u0671\u0633\u0652\u0645\u064F\u0643\u064E\u061F', phon: 'ma ismuka?', french: 'Quel est ton nom ?' },
    { analysis_id: 249, sense: 'nom', arabic: '\u0633\u064E\u0645\u0651\u064E\u064A\u0652\u062A\u064F \u0671\u0628\u0652\u0646\u0650\u064A \u0623\u064E\u062D\u0652\u0645\u064E\u062F\u064E', phon: 'sammaytu ibni ahmad', french: "J'ai nomm\u00e9 mon fils Ahmad" },
    { analysis_id: 249, sense: 'nom', arabic: '\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064E\u0647\u0650', phon: 'bi-smi llahi', french: 'Au nom de Dieu' },
    { analysis_id: 250, sense: 'divinit\u00e9', arabic: '\u0644\u064E\u0627 \u0625\u0650\u0644\u0640\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0671\u0644\u0644\u0651\u064E\u0647\u064F', phon: 'la ilaha illa llah', french: "Il n'y a de divinit\u00e9 que Dieu" },
    { analysis_id: 250, sense: 'divinit\u00e9', arabic: '\u0647\u064F\u0648\u064E \u0625\u0650\u0644\u0640\u0670\u0647\u064F \u0671\u0644\u0646\u0651\u064E\u0627\u0633\u0650', phon: 'huwa ilahu n-nas', french: 'Il est la divinit\u00e9 des gens' },
    { analysis_id: 250, sense: 'divinit\u00e9', arabic: '\u0645\u064E\u0646\u0652 \u0625\u0650\u0644\u0640\u0670\u0647\u064F\u0643\u064F\u0645\u0652\u061F', phon: 'man ilahukum?', french: 'Qui est votre divinit\u00e9 ?' },
    { analysis_id: 251, sense: 'mis\u00e9ricorde', arabic: '\u064A\u064E\u0631\u0652\u062D\u064E\u0645\u064F\u0643\u064E \u0671\u0644\u0644\u0651\u064E\u0647\u064F', phon: 'yarhamuka llah', french: 'Que Dieu te fasse mis\u00e9ricorde' },
    { analysis_id: 251, sense: 'mis\u00e9ricorde', arabic: '\u0671\u0644\u0652\u0623\u064F\u0645\u0651\u064F \u0623\u064E\u0631\u0652\u062D\u064E\u0645\u064F \u0671\u0644\u0646\u0651\u064E\u0627\u0633\u0650', phon: 'al-ummu arhamu n-nas', french: 'La m\u00e8re est la plus mis\u00e9ricordieuse des gens' },
    { analysis_id: 251, sense: 'mis\u00e9ricorde', arabic: '\u0635\u0650\u0644\u064E\u0629\u064F \u0671\u0644\u0631\u0651\u064E\u062D\u0650\u0645\u0650 \u0648\u064E\u0627\u062C\u0650\u0628\u064E\u0629\u0651', phon: 'silatu r-rahimi wajiba', french: 'Maintenir les liens de parent\u00e9 est obligatoire' },
  ]
  const {error: dailyErr} = await db.from('word_daily').insert(daily)
  if (dailyErr) console.log('  ERREUR daily: ' + dailyErr.message)
  else console.log('  ' + daily.length + ' phrases du quotidien')

  console.log('')
  console.log('════════════════════════════════════════')
  console.log('  VERSET 1:1 — TERMINÉ')
  console.log('  ism (smw) → concept "Nom/Identification" → mot "nom"')
  console.log('  allah (alh) → concept "Divinité" → mot "divinité"')
  console.log('  ar-rahman (rhm) → concept "Miséricorde/Tendresse" → mot "miséricorde"')
  console.log('  ar-rahim (rhm) → concept "Miséricorde/Tendresse" → mot "miséricorde"')
  console.log('  Traduction : "' + translation_arab + '"')
  console.log('════════════════════════════════════════')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
