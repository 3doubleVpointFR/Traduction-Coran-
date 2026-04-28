// Pipeline Maison — Verset 1:1 — ÉTAPE 3 — Axes détaillés
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  console.log('════════════════════════════════════════')
  console.log('  ÉTAPE 3 — VERSET 1:1 — AXES DÉTAILLÉS')
  console.log('  بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ')
  console.log('════════════════════════════════════════')
  console.log('')

  // ═══════════════════════════════════════
  // MOT 1 : ism (smw) — nom en idafa avec Allah
  // Forme : nom génitif, en idafa → test philosophique : le concept peut-il être rattaché à Dieu dans une relation d'appartenance ?
  // ═══════════════════════════════════════
  console.log('[smw] ism — nom en idafa avec Allah')
  console.log('  Forme grammaticale : nom génitif en idafa')
  console.log('  Test philosophique : le concept peut-il être rattaché à Dieu ?')
  console.log('')

  // Classification NUL — sens physiques de hauteur/ciel (le mot est ism, pas sama)
  const smwNul = {
    'être haut': 'Le mot dans le verset est ism (nom), pas sama (hauteur). La hauteur physique ne peut pas être rattachée à Dieu dans une idafa ("hauteur de Dieu" ne correspond pas à la formule bi-smi llahi).',
    'forme vue de loin': 'Le mot est ism, pas samawa. La silhouette vue de loin est un concept visuel sans rapport avec la formule d\'invocation.',
    'lune qui se dresse': 'Phénomène céleste spécifique. Le mot est ism, pas sama.',
    'ciel': 'Le mot est ism, pas sama\'. "Au ciel de Dieu" ne correspond pas à la formule bi-smi llahi.',
    'toit': 'Le mot est ism, pas sama\'. Sens architectural sans rapport.',
    'nuage': 'Le mot est ism, pas sama\'. Phénomène météorologique.',
    'pluie': 'Le mot est ism, pas sama\'. "À la pluie de Dieu" n\'est pas le sens de la formule.',
    'herbage': 'Le mot est ism, pas sama\'. Végétation sans rapport.',
    'dos': 'Le mot est ism, pas sama\'. Anatomie sans rapport.',
    'semelle supérieure': 'Le mot est ism, pas sama\'. Objet sans rapport.',
    'pièce de tissu supérieure': 'Le mot est ism, pas sama\'. Textile sans rapport.',
    'chaussettes de chasseur': 'Le mot est ism. Objet utilitaire sans rapport.',
    'se diriger vers': 'Sens verbal. Le mot dans le verset est un nom, pas un verbe.',
    'lever le regard': 'Sens verbal. Le mot est un nom.',
    'aspirer': 'Sens verbal. Le mot est un nom.',
    'dépasser en nombre': 'Sens verbal. Le mot est un nom.',
    'chasser': 'Sens verbal. Le mot est un nom.',
    'étalon qui bondit': 'Sens verbal animal. Le mot est un nom.',
    'désir qui resurgit': 'Sens verbal émotionnel. Le mot est un nom.',
    'noble': 'Adjectif de rang. Le mot est ism (nom propre), pas sami (noble).',
    'rivaliser en éminence': 'Sens verbal. Le mot est un nom.',
    'rival en éminence': 'Le mot est ism, pas samiyy. Sens de compétition sans rapport avec l\'invocation.',
    'égal': 'Le mot est ism, pas samiyy. Le verset invoque Dieu, il ne parle pas d\'égalité.',
    'homonyme': 'Le mot est ism, pas samiyy. "À l\'homonyme de Dieu" n\'a pas de sens dans cette formule.',
    'élever quelqu\'un': 'Sens verbal causatif. Le mot est un nom.',
    'faire partir': 'Sens verbal causatif. Le mot est un nom.',
    'monter à cheval': 'Sens verbal. Le mot est un nom.',
    'bounty': 'Le mot est ism, pas sama\'. "À la générosité de Dieu" serait une autre formule.',
    'choisir': 'Sens verbal. Le mot est un nom.',
    'visiter': 'Sens verbal. Le mot est un nom.',
    'se nommer': 'Sens verbal réflexif. Le mot est un nom.',
    's\'appeler mutuellement': 'Sens verbal réciproque. Le mot est un nom.',
    'demander le nom': 'Sens verbal. Le mot est un nom.',
    'nominal': 'Concept grammatical technique. Pas un sens utilisable dans le verset.',
    'qualité de nom': 'Concept grammatical abstrait. Pas un sens utilisable.',
    'nommé': 'Participe passif. Le mot est un nom actif (ism), pas un participe.',
    'céleste': 'Adjectif dérivé de ciel. Le mot est ism, pas sama\'iyy.',
    'hautain': 'Adjectif négatif. Le mot est ism, pas sami.',
    'chasseurs': 'Pluriel d\'un nom d\'agent. Le mot est ism.',
    'revendiquer une parenté': 'Sens verbal. Le mot est un nom.',
    'inciter à chasser': 'Sens verbal causatif. Le mot est un nom.',
    'regarder la silhouette': 'Sens verbal. Le mot est un nom.',
    'se diriger vers Es-Semaweh': 'Sens toponymique. Le mot est ism.',
    'tester une chamelle': 'Sens verbal spécifique. Le mot est un nom.',
  }

  // Sens NON-NUL pour smw
  const smwAxes = {
    'nom': {
      status: 'retenu',
      axe1_verset: 'Le verset dit "bi-smi llahi" (au nom de Dieu). Le mot ism est le cœur de la formule d\'invocation. Le champ lexical est celui de l\'identification et de l\'autorité : dire "au nom de" c\'est placer ce qui suit sous l\'identité de celui qui est nommé. Le nom est ce qui permet d\'identifier, de distinguer, de s\'adresser à quelqu\'un. Sans nom, pas de communication, pas de relation possible. Le Lane\'s dit : "a sign such as may be uttered or written conveying knowledge" — le nom est un signe qui transmet la connaissance de ce qu\'il désigne.',
      axe2_voisins: 'Les versets suivants qualifient Dieu : Seigneur des mondes (v2), le Miséricordieux (v3), Maître du Jour (v4). Le nom ouvre cette série de qualifications. La progression est logique : d\'abord on nomme (on identifie), ensuite on qualifie (on décrit). Le verset 1 est le point d\'entrée, les autres développent ce que le nom contient. Le nom est la porte d\'accès à la connaissance de Dieu dans la sourate.',
      axe3_sourate: 'La Fatiha est la sourate d\'ouverture du Coran tout entier. Commencer par "au nom de" c\'est poser le cadre : tout ce qui suit est dit au nom de Dieu. Le nom est le fondement de l\'acte d\'ouverture. La sourate ne pourrait pas commencer par autre chose qu\'un nom, car sans identification, il n\'y a pas de relation possible. Le nom ouvre la relation entre l\'humain et Dieu.',
      axe4_coherence: 'Le Coran utilise "bi-smi llahi" comme formule d\'ouverture au début de 113 sourates sur 114. L\'usage est constant et univoque : c\'est toujours le nom, jamais la hauteur, le ciel, la renommée ou un autre sens de la racine. Cette constance confirme que ism dans cette formule signifie exclusivement "nom". Le Coran utilise aussi "ism" dans d\'autres contextes (sourate 96:1 "iqra bi-smi rabbika" = lis au nom de ton Seigneur) avec le même sens.',
      axe5_frequence: 'Le nom est l\'outil fondamental qui permet au khalifa de connaître et d\'identifier. La mission de justice commence par la capacité de nommer : nommer les choses, nommer les personnes, nommer les principes. Commencer par le nom de Dieu c\'est reconnaître Son identité comme fondement de toute action. La dignité humaine passe par le fait d\'être nommé et reconnu.',
      proof_ctx: 'Le Lane\'s définit ism comme "a sign such as may be uttered or written conveying knowledge" — un signe qui transmet la connaissance. Le nom est une réalité extérieure (il peut être prononcé ou écrit), permanente (il persiste après l\'acte de nommer) et relationnelle (il permet aux autres d\'identifier). Test de compatibilité grammaticale : le mot est en idafa (annexion) avec Allah. Le concept de "nom" peut-il être rattaché à Dieu dans une relation d\'appartenance ? Oui : "nom de Dieu" exprime naturellement que le nom appartient à Dieu, qu\'il L\'identifie. Distinction avec "renommée" : la renommée est la propagation du nom dans la société — c\'est un effet secondaire du nom, pas le nom lui-même. Le verset dit "au nom de Dieu", pas "à la renommée de Dieu". Le nom identifie, la renommée diffuse. La formule est une invocation d\'autorité (on agit au nom de quelqu\'un), pas une déclaration de célébrité. Distinction avec "nommer" : nommer est l\'action de donner un nom, le nom est le résultat de cette action. Le verset utilise le résultat (ism = le nom), pas l\'action (samma = nommer).',
    },
    'renommée': {
      status: 'probable',
      axe1_verset: 'Le verset dit "bi-smi llahi". La renommée est la propagation du nom parmi les gens. "Au renom de Dieu" pourrait fonctionner comme formule d\'invocation, mais le sens est moins direct que "au nom de Dieu". Le champ lexical du verset est celui de l\'invocation et de l\'identification, pas de la célébrité. La renommée suppose un public qui connaît le nom, le verset s\'adresse directement à Dieu sans intermédiaire social.',
      axe2_voisins: 'Les versets suivants décrivent les attributs de Dieu (Seigneur, Miséricordieux, Maître). Cette description est une qualification directe, pas un constat de réputation. Les versets disent ce que Dieu EST, pas ce que les gens pensent de Lui. La renommée est dans le regard des autres, les versets décrivent la réalité intrinsèque.',
      axe3_sourate: 'La Fatiha est une prière directe entre l\'humain et Dieu. La renommée est un phénomène social qui nécessite un public. La prière n\'a pas de public, elle est intime. La sourate pose une relation directe, pas une perception sociale.',
      axe4_coherence: 'Le Coran utilise "bi-smi" dans d\'autres contextes (96:1, 11:41) toujours dans le sens d\'invocation au nom de Dieu, jamais dans le sens de célébrité ou de réputation. L\'usage coranique est constant.',
      axe5_frequence: 'La renommée est un phénomène social passif (les autres parlent de vous). Pour le khalifa, l\'invocation au nom de Dieu est un acte actif et fondateur, pas un constat de popularité.',
      proof_ctx: 'La renommée est la propagation du nom parmi les gens, un phénomène social. Le verset est une invocation directe à Dieu, pas un constat de réputation. La frontière philosophique : le nom identifie (il pointe vers ce qu\'il désigne), la renommée diffuse (elle se répand parmi les gens). Le verset est un acte d\'identification ("au nom de"), pas un constat de diffusion ("à la renommée de").',
    },
    'nommer': {
      status: 'probable',
      axe1_verset: 'Le verset dit "bi-smi llahi". "Nommer" est l\'acte de donner un nom, le verset utilise le résultat de cet acte (le nom). Le champ lexical est celui de l\'identité posée, pas de l\'acte de poser l\'identité. Le verset utilise la formule "au nom de", qui présuppose que le nom existe déjà — on ne le crée pas ici, on l\'invoque.',
      axe2_voisins: 'Les versets suivants utilisent le nom déjà établi pour qualifier Dieu. La progression part du nom vers les qualifications. Le nom est un acquis, pas un acte en cours.',
      axe3_sourate: 'La sourate utilise le nom comme point de départ, pas comme objectif. On ne nomme pas Dieu dans la Fatiha, on invoque Son nom déjà connu.',
      axe4_coherence: 'Le Coran distingue ism (le nom, substantif) de samma (nommer, verbe). La construction bi-smi utilise le substantif, pas le verbe.',
      axe5_frequence: 'Nommer est un acte ponctuel (on nomme une fois), le nom est un résultat permanent (il persiste). Pour le khalifa, c\'est le résultat permanent qui fonde l\'action, pas l\'acte ponctuel.',
      proof_ctx: 'Nommer est l\'action de donner un nom, le nom est le résultat de cette action. Le verset utilise le substantif ism (le nom), pas le verbe samma (nommer). La frontière philosophique : nommer est un acte ponctuel et transitoire (on nomme une fois), le nom est un résultat permanent (il persiste indéfiniment). Le verset invoque un nom qui existe déjà, il ne le crée pas.',
    },
    'prononcer le nom de Dieu': {
      status: 'probable',
      axe1_verset: 'Le verset dit "bi-smi llahi" qui est effectivement un acte de prononciation du nom de Dieu. Le champ lexical est celui de l\'invocation. Ce sens est très proche du sens retenu car il est l\'usage concret du nom. Cependant, le mot ism désigne le nom lui-même, pas l\'acte de le prononcer. La formule "au nom de" utilise le nom comme référence, pas comme acte de prononciation.',
      axe2_voisins: 'Les versets suivants ne sont pas des actes de prononciation mais des descriptions. Le verset 1 pose un nom qui sera développé ensuite. C\'est le nom qui est posé, pas l\'acte de prononcer.',
      axe3_sourate: 'La sourate est une prière qui commence par invoquer un nom. L\'invocation utilise le nom, elle ne décrit pas l\'acte de prononcer.',
      axe4_coherence: 'Le Coran utilise samma quand il parle de l\'acte de prononcer le nom de Dieu sur quelque chose (6:118, 6:121). Ici, la construction est bi-smi (avec/au nom), pas samma (prononcer le nom).',
      axe5_frequence: 'Prononcer le nom de Dieu est l\'usage du nom, pas le nom lui-même. Pour le khalifa, c\'est le nom qui fonde l\'action, pas l\'acte de le prononcer.',
      proof_ctx: 'Prononcer le nom de Dieu est l\'acte concret d\'utiliser le nom, c\'est un usage du nom. Le mot ism dans le verset désigne le nom lui-même, pas l\'acte de le prononcer. La frontière philosophique : prononcer est un acte ponctuel (on prononce à un moment), le nom est la réalité permanente qui rend cet acte possible. Le Coran utilise samma pour l\'acte de prononcer, et ism pour le nom.',
    },
  }

  // Mise à jour word_meanings pour smw
  const {data: smwMeanings} = await db.from('word_meanings').select('id, sense').eq('analysis_id', 249).order('display_order')
  for (const m of smwMeanings) {
    if (smwNul[m.sense]) {
      await db.from('word_meanings').update({status: 'nul', proof_ctx: smwNul[m.sense]}).eq('id', m.id)
      console.log('  ' + m.sense + ' → NUL')
    } else if (smwAxes[m.sense]) {
      const ax = smwAxes[m.sense]
      await db.from('word_meanings').update({
        status: ax.status, proof_ctx: ax.proof_ctx,
        axe1_verset: ax.axe1_verset, axe2_voisins: ax.axe2_voisins,
        axe3_sourate: ax.axe3_sourate, axe4_coherence: ax.axe4_coherence, axe5_frequence: ax.axe5_frequence
      }).eq('id', m.id)
      const tag = ax.axe1_verset ? '(5 axes)' : ''
      console.log('  ' + m.sense + ' → ' + ax.status.toUpperCase() + ' ' + tag)
    }
  }
  console.log('')

  // ═══════════════════════════════════════
  // MOT 2 : allah (alh) — nom défini
  // Forme : nom propre défini, génitif → test : le concept identifie-t-il une réalité connue et définie ?
  // ═══════════════════════════════════════
  console.log('[alh] allah — nom propre défini')

  const alhNul = {
    'être perplexe': 'État intérieur de confusion. Le verset nomme Dieu dans une formule d\'invocation, il ne décrit pas un état de confusion.',
    'se lamenter': 'Expression de détresse véhémente. Le verset est une ouverture sereine, pas une lamentation.',
    'demeurer': 'Rester dans un lieu. Aucun rapport avec l\'identification de Dieu dans la formule d\'invocation.',
    'asservir': 'Réduire en esclavage. Forme II causative. Le verset nomme Dieu, il ne décrit pas un acte d\'asservissement.',
    'faire adorer': 'Pousser quelqu\'un à adorer. Forme II causative. Le verset nomme, il ne cause pas l\'adoration.',
    'diviniser': 'Considérer comme un dieu. Le verset utilise le nom propre Allah, pas le concept de divinisation.',
    'se dévouer au culte': 'Se consacrer aux pratiques. Forme V réflexive. Le verset nomme Dieu, il ne décrit pas la dévotion.',
    'divinité (concept)': 'Concept abstrait de l\'état d\'être divin. Le verset utilise un nom propre (Allah), pas un concept abstrait (ilahiyya).',
    'théologie': 'Science des attributs de Dieu. Discipline intellectuelle. Le verset est une invocation, pas une étude.',
    'exclamation divine': 'Forme d\'invocation "Ô Dieu" (allahumma). Le verset utilise Allah, pas allahumma. Forme différente.',
    'oui certes': 'Particule d\'affirmation. Le verset utilise Allah comme nom propre, pas comme particule.',
  }

  const alhAxes = {
    'divinité': {
      status: 'retenu',
      axe1_verset: 'Le verset dit "bi-smi llahi" (au nom de Dieu). Le mot Allah est le nom propre de la Divinité, l\'objet d\'adoration par excellence. Le champ lexical est celui de l\'identification divine : on nomme celui au nom duquel on agit. Le mot Allah identifie la Divinité de manière unique et absolue. Le Lane\'s dit : "the Being who exists necessarily, by Himself, comprising all the attributes of perfection". Le concept de divinité est ce que le nom Allah désigne : l\'être vers lequel converge l\'adoration.',
      axe2_voisins: 'Les versets suivants qualifient cette divinité : Seigneur des mondes (v2), Miséricordieux (v3), Maître du Jour (v4). Le verset 1 la nomme, les suivants la décrivent. La progression va de l\'identification à la qualification. Sans le concept de divinité posé au verset 1, les qualifications des versets suivants n\'auraient pas de support.',
      axe3_sourate: 'La Fatiha pose la relation entre l\'humain et Dieu. Nommer la Divinité en premier est le fondement de cette relation. On ne peut pas qualifier quelqu\'un qu\'on n\'a pas d\'abord identifié. La divinité est le concept premier qui rend possible tout le reste de la sourate.',
      axe4_coherence: 'Le Coran utilise Allah comme nom propre de la Divinité des milliers de fois. Le mot ilah (divinité) est le concept dont Allah est le nom propre. Le Coran dit "la ilaha illa llah" (pas de divinité sauf Dieu), ce qui montre que ilah est le concept et Allah est le nom. L\'usage est constant dans tout le Coran.',
      axe5_frequence: 'Reconnaître la Divinité est le fondement de la mission du khalifa. Sans cette reconnaissance, pas de cadre pour la justice ni la civilisation. La dignité humaine est accordée par cette Divinité (sourate 17:70). Toute la mission du khalifa repose sur l\'identification de cette source.',
      proof_ctx: 'Le Lane\'s définit ilah comme "anything that is taken as an object of worship, accord. to him who takes it as such". La divinité est ce qui reçoit l\'adoration, c\'est une position relationnelle. Test de compatibilité grammaticale : le mot est un nom propre défini. Le concept de divinité peut-il être identifié comme une réalité connue et définie ? Oui : Allah est le nom propre qui désigne LA divinité par excellence. Distinction avec "adorer" : adorer est l\'action du fidèle (ce qu\'on FAIT), la divinité est l\'objet de cette action (ce que Dieu EST). Le verset identifie QUI est Dieu, il ne décrit pas l\'acte d\'adorer. L\'adoration viendra au verset 5 de la sourate (iyyaka nabudu). Distinction avec "protéger" : protéger est un acte de Dieu vers l\'humain, la divinité est ce que Dieu est en Lui-même. Le verset dit ce que Dieu EST, pas ce qu\'Il FAIT.',
    },
    'adorer': {
      status: 'probable',
      axe1_verset: 'Le verset dit "bi-smi llahi". Adorer est le sens premier de la racine a-l-h. Cependant, le verset nomme Dieu dans une formule d\'identification, il ne décrit pas l\'acte d\'adorer. Le champ lexical est celui de l\'invocation (nommer quelqu\'un), pas de la dévotion (servir quelqu\'un). Le mot Allah dans la formule bi-smi fonctionne comme un nom propre qui identifie, pas comme un verbe qui décrit une action.',
      axe2_voisins: 'L\'adoration est mentionnée explicitement au verset 5 (iyyaka nabudu = c\'est Toi seul que nous adorons). Le verset 1 nomme, le verset 5 adore. La sourate sépare les deux actes : d\'abord l\'identification (v1), puis l\'adoration (v5). Fusionner les deux au verset 1 anticiperait le verset 5.',
      axe3_sourate: 'La Fatiha progresse de l\'identification (v1) à la description (v2-4) à l\'engagement (v5-7). L\'adoration appartient à la phase d\'engagement, pas à la phase d\'identification. Le verset 1 est dans la première phase.',
      axe4_coherence: 'Le Coran distingue le nom Allah (l\'identité) de l\'acte d\'adorer (ibada). Quand le Coran veut parler d\'adoration, il utilise le verbe abada et ses dérivés (nabudu, ibada, abd). Il n\'utilise pas le nom Allah pour désigner l\'acte d\'adorer.',
      axe5_frequence: 'L\'adoration est une action du khalifa envers Dieu, pas l\'identité de Dieu. Pour le khalifa, identifier la source (divinité) précède l\'action envers cette source (adoration).',
      proof_ctx: 'Adorer est le sens premier de la racine a-l-h : servir, vouer un culte. Mais le verset utilise le nom propre Allah dans une formule d\'identification ("au nom de"), pas dans un contexte d\'adoration. La frontière philosophique : adorer est ce qu\'on FAIT envers Dieu (action du fidèle), la divinité est ce que Dieu EST (identité de Dieu). Le verset 1 dit ce que Dieu est, le verset 5 dit ce qu\'on fait envers Lui.',
    },
    'chercher refuge': {
      status: 'peu_probable',
      axe1_verset: 'Le verset dit "bi-smi llahi". Chercher refuge est un acte de demande de protection. La formule "au nom de Dieu" est une invocation d\'autorité, pas une demande de refuge. Le champ lexical est celui de l\'identification et de l\'ouverture, pas de la crainte et de la protection. Chercher refuge suppose une menace, le verset est une ouverture sereine.',
      axe2_voisins: 'Les versets voisins qualifient Dieu par des attributs positifs (miséricorde, seigneurie). Le registre est celui de la reconnaissance, pas de la fuite devant un danger.',
      axe3_sourate: 'La Fatiha est une prière de louange et de demande de guidance. Le refuge est un thème des sourates 113-114 (al-Falaq, an-Nas), pas de la sourate 1.',
      axe4_coherence: 'Le Coran utilise des formules spécifiques pour le refuge : "audhu billahi" (je cherche refuge auprès de Dieu). La formule "bi-smi llahi" n\'est jamais utilisée pour le refuge.',
      axe5_frequence: 'Chercher refuge est une action ponctuelle et réactive (on fuit un danger). L\'invocation au nom de Dieu est un acte fondateur et proactif (on ouvre une action).',
      proof_ctx: 'Chercher refuge est un acte de fuite vers un protecteur face à une menace. Le verset est une formule d\'ouverture sereine, pas une fuite. La frontière philosophique : le refuge est réactif (on réagit à un danger), l\'invocation au nom de Dieu est proactive (on ouvre une action). Le Coran utilise "audhu billahi" pour le refuge, pas "bi-smi llahi".',
    },
    'protéger': {
      status: 'peu_probable',
      axe1_verset: 'Le verset dit "bi-smi llahi". Protéger est un acte de Dieu envers l\'humain. Le mot Allah dans la formule n\'est pas utilisé pour décrire un acte de protection mais pour identifier la Divinité au nom de laquelle on agit. Le champ lexical est celui de l\'identification, pas de la protection.',
      axe2_voisins: 'Les versets voisins décrivent les qualités de Dieu (miséricorde, seigneurie), pas ses actions de protection. Le registre est descriptif, pas narratif.',
      axe3_sourate: 'La Fatiha ne parle pas de protection mais de louange, de miséricorde et de guidance. La protection est un thème d\'autres sourates.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour la protection divine (hafiza, nasara, waqaa). Le mot Allah n\'est pas utilisé comme synonyme de protection.',
      axe5_frequence: 'Protéger est un acte de Dieu, pas Son identité. Le verset pose l\'identité de Dieu, pas ses actes.',
      proof_ctx: 'Protéger est un acte dirigé vers l\'autre (on protège quelqu\'un). Mais le verset identifie Dieu, il ne décrit pas son action de protection. La frontière philosophique : protéger est ce que Dieu FAIT, la divinité est ce que Dieu EST. Le verset dit ce qu\'Il est.',
    },
    'Dieu': {
      status: 'probable',
      axe1_verset: 'Le verset dit "bi-smi llahi". Le mot Allah est effectivement le nom propre de Dieu. Ce sens est le plus littéral : le mot veut dire "Dieu". Cependant, au niveau étymologique, "Dieu" n\'est pas un sens de la racine a-l-h — c\'est un nom propre formé sur cette racine. Le sens de la racine est "divinité" (objet d\'adoration), "Dieu" est le nom propre qui désigne la Divinité unique.',
      axe2_voisins: 'Les versets suivants utilisent le nom Allah pour qualifier Dieu avec des attributs. Le nom propre est le support des qualifications.',
      axe3_sourate: 'Le nom propre Allah est le pivot de toute la sourate. Chaque verset s\'y rattache.',
      axe4_coherence: 'Le Coran utilise Allah comme nom propre de Dieu des milliers de fois. C\'est le mot le plus fréquent du texte.',
      axe5_frequence: 'Le nom propre Dieu est le point de référence de toute la mission du khalifa.',
      proof_ctx: '"Dieu" est le nom propre formé sur la racine a-l-h. Au niveau étymologique, le sens de la racine est "divinité" (objet d\'adoration). "Dieu" est le nom propre qui désigne cette divinité unique. La frontière : "divinité" est le concept (ce qu\'on adore), "Dieu" est le nom propre (qui on adore). Les deux sont très proches mais "divinité" est plus profond étymologiquement car il explique POURQUOI on appelle Dieu ainsi : parce qu\'Il est l\'objet d\'adoration.',
    },
  }

  const {data: alhMeanings} = await db.from('word_meanings').select('id, sense').eq('analysis_id', 250).order('display_order')
  for (const m of alhMeanings) {
    if (alhNul[m.sense]) {
      await db.from('word_meanings').update({status: 'nul', proof_ctx: alhNul[m.sense]}).eq('id', m.id)
      console.log('  ' + m.sense + ' → NUL')
    } else if (alhAxes[m.sense]) {
      const ax = alhAxes[m.sense]
      await db.from('word_meanings').update({
        status: ax.status, proof_ctx: ax.proof_ctx,
        axe1_verset: ax.axe1_verset || null, axe2_voisins: ax.axe2_voisins || null,
        axe3_sourate: ax.axe3_sourate || null, axe4_coherence: ax.axe4_coherence || null, axe5_frequence: ax.axe5_frequence || null
      }).eq('id', m.id)
      console.log('  ' + m.sense + ' → ' + ax.status.toUpperCase() + ' (5 axes)')
    }
  }
  console.log('')

  // ═══════════════════════════════════════
  // MOT 3+4 : ar-rahman / ar-rahim (rhm) — adjectifs définis
  // Forme : adjectif défini avec al- → test : le concept peut-il être identifié comme une qualité connue et permanente ?
  // ═══════════════════════════════════════
  console.log('[rhm] ar-rahman / ar-rahim — adjectifs définis')

  const rhmNul = {
    'utérus': 'Sens physique premier (organe maternel). Le verset utilise des adjectifs (ar-rahman, ar-rahim) pour qualifier Dieu, pas des noms anatomiques.',
    'vulve': 'Organe génital. Réalité anatomique sans rapport avec la qualification de Dieu.',
    'maladie de l\'utérus': 'Complication médicale. Sans rapport avec la qualification de Dieu.',
    'outre abîmée': 'Récipient détérioré. Sans rapport avec la qualification de Dieu.',
    'utérus gonflé': 'État pathologique. Sans rapport.',
    'chamelle malade post-partum': 'Réalité vétérinaire. Sans rapport.',
    'sortie de l\'utérus': 'Réalité médicale. Sans rapport.',
    'La Mecque': 'Nom propre de lieu. Le verset utilise des adjectifs, pas des noms de lieu.',
    'Médine': 'Nom propre de lieu. Le verset utilise des adjectifs.',
    'parents par les femmes': 'Catégorie juridique de parenté. Le verset qualifie Dieu, pas les liens familiaux humains.',
    'parent interdit au mariage': 'Catégorie juridique. Sans rapport.',
    'sentiment de parenté': 'État intérieur de connexion familiale. Le verset qualifie Dieu, pas les sentiments humains.',
    'connecté par parenté': 'État relationnel familial. Le verset qualifie Dieu.',
    'dire "que Dieu te fasse miséricorde"': 'Formule de bénédiction. Acte de parole ponctuel. Le verset utilise un adjectif permanent, pas une formule ponctuelle.',
    'se forcer à la compassion': 'Effort intérieur pour être compatissant. Implique une difficulté, un manque naturel. L\'adjectif ar-rahman exprime le degré maximum naturel, pas un effort.',
    'miséricorde réciproque': 'Compassion mutuelle entre personnes. Le verset qualifie Dieu dans une relation non réciproque (Dieu donne, l\'humain reçoit).',
    'demander la miséricorde': 'Acte de demande. Forme X verbale. Le verset utilise un adjectif, pas un verbe de demande.',
    'prophétie': 'Don spécifique accordé par Dieu. Extension très spécifique. Le verset qualifie la nature de Dieu, pas un don particulier.',
    'plus miséricordieux': 'Superlatif comparatif. Le verset utilise les formes ar-rahman et ar-rahim, pas le superlatif arham.',
    'objet de miséricorde': 'Participe passif (celui qui reçoit). Le verset utilise des adjectifs actifs (celui qui donne la miséricorde), pas le passif.',
    'traité avec beaucoup de compassion': 'Participe passif intensif. Même raison que ci-dessus.',
    'la crainte vaut mieux que la pitié': 'Expression proverbiale. Sans rapport avec la qualification de Dieu.',
  }

  const rhmAxes = {
    'miséricorde': {
      status: 'retenu',
      axe1_verset: 'Le verset dit "ar-rahmani r-rahimi" (le Tout-Miséricordieux, le Miséricordieux). Les deux mots qualifient Dieu avec des adjectifs définis. Le champ lexical est celui de la tendresse, de la bonté et de la bienveillance. Le Lane\'s dit : "tenderness of heart, inclination to favour, inclination requiring the exercise of favour and beneficence". La miséricorde est le mouvement intérieur de tendresse qui se dirige vers l\'extérieur en actes de bienfaisance. Les deux mots viennent de la même racine mais sur des modèles morphologiques différents : ar-rahman (degré maximum, qui déborde) et ar-rahim (qualité permanente, qui ne s\'arrête jamais).',
      axe2_voisins: 'Le verset 2 continue avec la louange et la seigneurie, le verset 3 répète ar-rahman ar-rahim. Cette répétition montre l\'importance de la miséricorde comme attribut fondamental. La miséricorde est mentionnée avant la seigneurie (v2) et la maîtrise (v4), ce qui lui donne la priorité dans la description de Dieu. Les versets 5-7 montreront l\'engagement de l\'humain, qui découle de cette miséricorde.',
      axe3_sourate: 'La Fatiha s\'ouvre et se rappelle la miséricorde comme fondement de la relation avec Dieu. C\'est le premier attribut associé à Dieu dans le Coran tout entier. Sa double mention (v1 et v3) encadre la description de Dieu et montre son importance structurelle. La miséricorde est le cadre dans lequel toute la sourate se déploie.',
      axe4_coherence: 'Le Coran utilise ar-rahman et ar-rahim des centaines de fois pour décrire Dieu. La formule "bi-smi llahi r-rahmani r-rahimi" ouvre 113 sourates sur 114. Cet usage massif et constant confirme que la miséricorde est l\'attribut premier de Dieu dans le Coran. Aucun autre attribut n\'est répété avec cette fréquence.',
      axe5_frequence: 'La miséricorde est le fondement de la relation entre le khalifa et les autres êtres humains. C\'est par la miséricorde que la dignité humaine est préservée. Sans miséricorde, la justice devient tyrannie, l\'autorité devient domination. La miséricorde oriente la mission du khalifa vers le soin et la bienveillance.',
      proof_ctx: 'Le Lane\'s définit rahma comme "tenderness of heart, inclination to favour, pardon, forgiveness, beneficence". La miséricorde est un mouvement intérieur (la tendresse) qui se dirige vers l\'extérieur (l\'acte de bienfaisance). Test de compatibilité grammaticale : les mots ar-rahman et ar-rahim sont des adjectifs définis avec al-. Le concept de miséricorde peut-il être identifié comme une qualité connue et permanente ? Oui : la miséricorde est une qualité stable et identifiable. Distinction avec "pardon" : le pardon est un acte ponctuel (on pardonne une faute précise), la miséricorde est une disposition permanente du cœur qui englobe le pardon mais le dépasse. La miséricorde peut se manifester même sans faute à pardonner. Distinction avec "traiter avec compassion" : traiter avec compassion est l\'acte extérieur, la miséricorde est la qualité intérieure qui motive cet acte. Les adjectifs ar-rahman et ar-rahim décrivent la qualité, pas l\'acte. Distinction avec "lien de parenté" : le lien de parenté vient de la même racine (r-h-m = utérus → ceux qui partagent le même utérus sont liés). Mais le verset qualifie Dieu avec des adjectifs, pas avec des noms de parenté. La miséricorde est l\'extension de la douceur protectrice de l\'utérus vers le domaine moral.',
    },
    'pardon': {
      status: 'probable',
      axe1_verset: 'Le verset qualifie Dieu avec ar-rahman et ar-rahim. Le pardon est un acte ponctuel (on pardonne une faute précise à un moment précis). Les adjectifs définis en arabe expriment des qualités permanentes, pas des actes ponctuels. Le champ lexical est celui de la qualification permanente, pas de l\'acte ponctuel.',
      axe2_voisins: 'Les versets voisins décrivent des qualités permanentes de Dieu (seigneurie, maîtrise). Le pardon comme acte ponctuel ne s\'inscrit pas dans cette série de qualités permanentes. La miséricorde, comme qualité permanente, est cohérente avec les autres attributs.',
      axe3_sourate: 'La Fatiha décrit Dieu par ses qualités fondamentales. Le pardon est une manifestation de la miséricorde, pas la miséricorde elle-même. La sourate pose les fondements (la miséricorde), pas les manifestations (le pardon).',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour le pardon (ghafara, afa). Quand le Coran veut parler spécifiquement de pardon, il n\'utilise pas rahman ou rahim. La distinction lexicale est maintenue dans tout le texte.',
      axe5_frequence: 'Le pardon est un acte ponctuel qui nécessite une faute préalable. La miséricorde est une disposition permanente qui ne nécessite pas de faute. Pour le khalifa, la mission repose sur une disposition permanente, pas sur des réactions à des fautes.',
      proof_ctx: 'Le pardon est un acte ponctuel qui efface une faute précise. La miséricorde est une disposition permanente du cœur qui pousse à faire du bien, avec ou sans faute à pardonner. La frontière philosophique : le pardon est conditionnel (il faut une faute à pardonner), la miséricorde est inconditionnelle (elle peut se manifester sans faute). Les adjectifs définis ar-rahman et ar-rahim expriment une qualité permanente, pas un acte conditionnel.',
    },
    'traiter avec compassion': {
      status: 'probable',
      axe1_verset: 'Le verset qualifie Dieu avec des adjectifs. Traiter avec compassion est un acte extérieur (ce qu\'on fait), les adjectifs décrivent une qualité intérieure (ce qu\'on est). Le champ lexical est celui de la qualification, pas de l\'action. Les adjectifs disent ce que Dieu EST, pas ce qu\'Il FAIT.',
      axe2_voisins: 'Les versets voisins décrivent des qualités (miséricordieux, seigneur, maître), pas des actions. La compassion comme acte ne s\'inscrit pas dans cette série de qualités.',
      axe3_sourate: 'La sourate pose des fondements identitaires, pas des récits d\'actions. Traiter avec compassion serait narratif, la sourate est descriptive.',
      axe4_coherence: 'Le Coran utilise le verbe rahima (avoir pitié) quand il décrit l\'acte. Les adjectifs ar-rahman et ar-rahim décrivent la qualité, pas l\'acte.',
      axe5_frequence: 'Traiter avec compassion est l\'application concrète de la miséricorde. La miséricorde est la source, le traitement compatissant est le résultat.',
      proof_ctx: 'Traiter avec compassion est l\'acte extérieur qui manifeste la miséricorde intérieure. Les adjectifs ar-rahman et ar-rahim décrivent la qualité intérieure, pas l\'acte extérieur. La frontière : la miséricorde est la disposition (ce qu\'on est), la compassion est l\'application (ce qu\'on fait). Le verset dit ce que Dieu EST.',
    },
    'lien de parenté': {
      status: 'peu_probable',
      axe1_verset: 'Le verset qualifie Dieu avec des adjectifs. Le lien de parenté est une relation entre humains qui partagent un utérus (rahim). Le champ lexical du verset est celui de la qualification divine, pas des relations familiales humaines. L\'étymologie relie la miséricorde à l\'utérus (le lieu de la douceur première), mais le verset utilise des adjectifs de qualité, pas des noms de parenté.',
      axe2_voisins: 'Les versets voisins ne parlent pas de relations familiales. Ils décrivent des attributs divins. Le lien de parenté est un thème absent de la sourate.',
      axe3_sourate: 'La Fatiha traite de la relation entre Dieu et l\'humain, pas des relations entre humains. Le lien de parenté est une réalité inter-humaine.',
      axe4_coherence: 'Le Coran utilise rahim (utérus/parenté) distinctement de rahman/rahim (adjectifs de qualité). Les deux viennent de la même racine mais ont des usages distincts.',
      axe5_frequence: 'Le lien de parenté est une relation horizontale (entre humains). La miséricorde divine dans le verset est une relation verticale (de Dieu vers les humains).',
      proof_ctx: 'Le lien de parenté vient de la même racine (r-h-m = utérus → ceux qui partagent le même utérus sont liés). Mais le verset utilise des adjectifs qui qualifient Dieu, pas des noms qui décrivent des relations humaines. La frontière philosophique : le lien de parenté est une relation horizontale entre humains (on est parent de quelqu\'un), la miséricorde est une qualité qui descend verticalement (Dieu est miséricordieux envers les créatures).',
    },
    'subsistance': {
      status: 'peu_probable',
      axe1_verset: 'Le verset qualifie Dieu avec des adjectifs. La subsistance est une réalité matérielle (nourriture, moyens de vivre), pas une qualité morale. Le champ lexical est celui de la qualification morale de Dieu, pas de la provision matérielle.',
      axe2_voisins: 'Les versets voisins décrivent des attributs moraux (miséricorde, seigneurie, maîtrise). La subsistance serait un attribut matériel qui détonne dans cette série.',
      axe3_sourate: 'La Fatiha opère dans un registre moral et spirituel, pas matériel.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour la subsistance (rizq). Le mot rahma est parfois utilisé pour la subsistance mais c\'est une extension, pas le sens premier.',
      axe5_frequence: 'La subsistance est un besoin matériel. La miséricorde est une qualité morale qui peut inclure la subsistance mais la dépasse.',
      proof_ctx: 'La subsistance est une réalité matérielle concrète (les moyens de vivre). La miséricorde est une qualité morale qui peut se manifester par la subsistance mais ne s\'y réduit pas. La frontière : la subsistance est matérielle et ponctuelle (on mange aujourd\'hui), la miséricorde est morale et permanente (elle est une disposition du cœur). Les adjectifs ar-rahman et ar-rahim décrivent une qualité permanente.',
    },
    'pluie': {
      status: 'peu_probable',
      axe1_verset: 'Le verset qualifie Dieu avec des adjectifs. La pluie est un phénomène physique concret. Le champ lexical est celui de la qualification morale, pas de la météorologie.',
      axe2_voisins: 'Les versets voisins sont abstraits et moraux. La pluie serait trop concrète dans cette série.',
      axe3_sourate: 'La Fatiha est abstraite et morale. La pluie est concrète et physique.',
      axe4_coherence: 'Le Coran utilise rahma pour la pluie dans certains versets (30:46) mais comme extension métaphorique. Les adjectifs ar-rahman et ar-rahim ne sont jamais utilisés pour la pluie.',
      axe5_frequence: 'La pluie est un bienfait matériel ponctuel. La miséricorde est une qualité permanente.',
      proof_ctx: 'La pluie est une manifestation physique de la miséricorde, pas la miséricorde elle-même. La frontière : la pluie est concrète et ponctuelle (il pleut aujourd\'hui), la miséricorde est abstraite et permanente (elle est une qualité de Dieu). Le verset décrit une qualité permanente avec des adjectifs définis.',
    },
    'abondance': {
      status: 'peu_probable',
      axe1_verset: 'Le verset qualifie Dieu avec des adjectifs. L\'abondance est une quantité de biens matériels, pas une qualité morale. Le champ lexical est moral, pas matériel.',
      axe2_voisins: 'Les versets voisins décrivent des qualités morales. L\'abondance matérielle n\'est pas dans cette série.',
      axe3_sourate: 'La Fatiha est morale, pas matérielle.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour l\'abondance (kathir, wafir). Rahma n\'est pas synonyme d\'abondance.',
      axe5_frequence: 'L\'abondance est matérielle et mesurable. La miséricorde est morale et qualitative.',
      proof_ctx: 'L\'abondance est une question de quantité matérielle. La miséricorde est une question de qualité morale. La frontière : l\'abondance mesure combien (quantitatif), la miséricorde décrit comment (qualitatif). Les adjectifs ar-rahman et ar-rahim décrivent une qualité, pas une quantité.',
    },
    'le Compatissant': {
      status: 'probable',
      axe1_verset: 'Le verset dit "ar-rahmani r-rahimi". Le Lane\'s décrit ar-rahman comme "the Possessor of the utmost degree of mercy". C\'est un titre qui exprime le degré maximum de la miséricorde. Le sens est très proche de "miséricorde" mais au degré superlatif. Le champ lexical est celui de la qualification avec intensité maximale.',
      axe2_voisins: 'Les versets voisins qualifient Dieu avec des titres de plus en plus forts. Ar-rahman est le premier titre après le nom. Sa position initiale lui donne une importance particulière.',
      axe3_sourate: 'Le titre ar-rahman ouvre la qualification de Dieu dans la sourate. Il pose le degré maximum comme point de départ.',
      axe4_coherence: 'Ar-rahman est utilisé comme titre de Dieu dans de nombreuses sourates. Certaines utilisent ar-rahman comme alternative au nom Allah.',
      axe5_frequence: 'Le degré maximum de miséricorde est le fondement le plus solide pour la mission du khalifa. Plus la miséricorde est intense, plus la mission est fondée.',
      proof_ctx: '"Le Compatissant" est le titre qui exprime le degré maximum de miséricorde. C\'est très proche du sens retenu "miséricorde" — la différence est que "le Compatissant" est un titre (un nom qui identifie) alors que "miséricorde" est la qualité elle-même (ce que le titre désigne). La frontière : le titre est un label, la qualité est la réalité derrière le label. L\'étape 3 analyse la racine r-h-m et son concept profond (la miséricorde), pas les titres dérivés.',
    },
  }

  const {data: rhmMeanings} = await db.from('word_meanings').select('id, sense').eq('analysis_id', 251).order('display_order')
  for (const m of rhmMeanings) {
    if (rhmNul[m.sense]) {
      await db.from('word_meanings').update({status: 'nul', proof_ctx: rhmNul[m.sense]}).eq('id', m.id)
      console.log('  ' + m.sense + ' → NUL')
    } else if (rhmAxes[m.sense]) {
      const ax = rhmAxes[m.sense]
      await db.from('word_meanings').update({
        status: ax.status, proof_ctx: ax.proof_ctx,
        axe1_verset: ax.axe1_verset || null, axe2_voisins: ax.axe2_voisins || null,
        axe3_sourate: ax.axe3_sourate || null, axe4_coherence: ax.axe4_coherence || null, axe5_frequence: ax.axe5_frequence || null
      }).eq('id', m.id)
      console.log('  ' + m.sense + ' → ' + ax.status.toUpperCase() + ' (5 axes)')
    }
  }
  console.log('')

  // ═══════════════════════════════════════
  // INSERTION verse_word_analyses avec analysis_axes
  // ═══════════════════════════════════════
  console.log('>>> Insertion verse_word_analyses')

  const vwa = [
    {
      verse_id: 1, word_key: 'smw', sense_chosen: 'nom', position: 2,
      analysis_axes: {
        sense_chosen: 'nom',
        senses: Object.fromEntries(
          [...Object.entries(smwAxes)].map(([k,v]) => [k, {
            status: v.status, proof_ctx: v.proof_ctx,
            ...(v.axe1_verset ? {axe1_verset: v.axe1_verset, axe2_voisins: v.axe2_voisins, axe3_sourate: v.axe3_sourate, axe4_coherence: v.axe4_coherence, axe5_frequence: v.axe5_frequence} : {})
          }])
        )
      }
    },
    {
      verse_id: 1, word_key: 'alh', sense_chosen: 'divinité', position: 3,
      analysis_axes: {
        sense_chosen: 'divinité',
        senses: Object.fromEntries(
          [...Object.entries(alhAxes)].map(([k,v]) => [k, {
            status: v.status, proof_ctx: v.proof_ctx,
            ...(v.axe1_verset ? {axe1_verset: v.axe1_verset, axe2_voisins: v.axe2_voisins, axe3_sourate: v.axe3_sourate, axe4_coherence: v.axe4_coherence, axe5_frequence: v.axe5_frequence} : {})
          }])
        )
      }
    },
    {
      verse_id: 1, word_key: 'rhm', sense_chosen: 'miséricorde', position: 4,
      analysis_axes: {
        sense_chosen: 'miséricorde',
        senses: Object.fromEntries(
          [...Object.entries(rhmAxes)].map(([k,v]) => [k, {
            status: v.status, proof_ctx: v.proof_ctx,
            ...(v.axe1_verset ? {axe1_verset: v.axe1_verset, axe2_voisins: v.axe2_voisins, axe3_sourate: v.axe3_sourate, axe4_coherence: v.axe4_coherence, axe5_frequence: v.axe5_frequence} : {})
          }])
        )
      }
    },
    {
      verse_id: 1, word_key: 'rhm', sense_chosen: 'miséricorde', position: 5,
      analysis_axes: {
        sense_chosen: 'miséricorde',
        senses: Object.fromEntries(
          [...Object.entries(rhmAxes)].map(([k,v]) => [k, {
            status: v.status, proof_ctx: v.proof_ctx,
            ...(v.axe1_verset ? {axe1_verset: v.axe1_verset, axe2_voisins: v.axe2_voisins, axe3_sourate: v.axe3_sourate, axe4_coherence: v.axe4_coherence, axe5_frequence: v.axe5_frequence} : {})
          }])
        )
      }
    },
  ]

  const {error: vwaErr} = await db.from('verse_word_analyses').insert(vwa)
  if (vwaErr) console.log('  ERREUR: ' + vwaErr.message)
  else console.log('  ' + vwa.length + ' verse_word_analyses insérés')

  console.log('')
  console.log('════════════════════════════════════════')
  console.log('  ÉTAPE 3 TERMINÉE — VERSET 1:1')
  console.log('  smw → nom (RETENU)')
  console.log('  alh → divinité (RETENU)')
  console.log('  rhm → miséricorde (RETENU)')
  console.log('════════════════════════════════════════')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
