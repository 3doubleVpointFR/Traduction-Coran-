const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const V = { 1: 6231, 2: 6232, 3: 6233, 4: 6234, 5: 6235, 6: 6236 }

// ==================== ÉTAPE 3 — ANALYSIS AXES ====================

// QWL — même analyse que sourate 109 (impératif = dis)
const qwl_axes = {
  sense_chosen: "dis",
  concept_chosen: "Parole/Énonciation",
  concepts: {
    "Parole/Énonciation": {
      status: "retenu",
      senses: ["dire", "parler", "parole", "discours", "affirmer"],
      proof_ctx: "Le sens retenu est « Parole/Énonciation ». Le mot qul est un impératif — un ordre de prononcer des mots. Ce qui suit est une invocation (a'udhu = je cherche refuge). Le qul ouvre un discours ordonné par Dieu au Prophète, comme dans la sourate 109 et plus de 300 occurrences coraniques.",
      axe1_verset: "Le verset ouvre par un ordre de parler suivi d'une invocation de protection. Le champ lexical est celui de la communication directe — Dieu ordonne, le Prophète prononce. Le qul est le cadre qui porte tout le reste de la sourate.",
      axe2_voisins: "Les versets 2-6 développent le contenu de l'invocation : la description de Celui auprès de qui on cherche refuge et de ce contre quoi on se protège. Le qul est le point de départ de tout ce discours.",
      axe3_sourate: "La sourate est une prière de protection ordonnée par Dieu. Le qul transforme cette prière en acte de parole obligatoire — ce n'est pas une suggestion mais un ordre divin de prononcer ces mots.",
      axe4_coherence: "Le Coran utilise qul systématiquement pour introduire les discours que le Prophète doit prononcer. La sourate 113 (Al-Falaq) commence aussi par qul a'udhu — même structure, même fonction.",
      axe5_frequence: "Prononcer la demande de protection fait partie de la mission de l'être humain responsable. La parole claire et la demande d'aide à Dieu sont des actes de lucidité qui empêchent la corruption intérieure."
    },
    "Pensée/Avis": { status: "nul", senses: ["opinion", "avis"], proof_ctx: "L'impératif suivi d'une invocation exige la parole prononcée, pas la pensée." },
    "Sens isolé/Puissance": { status: "nul", senses: ["puissance"], proof_ctx: "Hors sujet." },
    "Corps/Anatomie": { status: "nul", senses: ["troupeau"], proof_ctx: "Hors sujet." }
  }
}

// EWDH — chercher refuge
const ewdh_axes = {
  sense_chosen: "je cherche refuge",
  concept_chosen: "Protection",
  concepts: {
    "Protection": {
      status: "retenu",
      senses: ["chercher refuge"],
      proof_ctx: "Le sens retenu est « Protection ». Le verbe a'udhu est à l'inaccompli première personne (une forme qui dit que l'action est en cours et habituelle) — « je cherche refuge habituellement ». La préposition bi (auprès de) qui suit indique vers qui on se dirige pour la protection. Le test grammatical : un verbe inaccompli peut-il exprimer une demande de refuge en cours ? Oui — la demande est continue et habituelle. L'acte de chercher refuge est directionnel : de celui qui est menacé vers celui qui protège.",
      axe1_verset: "Le verbe a'udhu est le cœur du verset — c'est l'acte principal après l'ordre de dire. Le champ lexical est celui de la protection : on cherche refuge auprès d'un protecteur (rabb) contre un danger (le murmureur des versets suivants).",
      axe2_voisins: "Les versets 2-3 décrivent le protecteur avec trois qualités (Seigneur, Roi, Divinité des gens). Les versets 4-6 décrivent le danger (le murmureur). Le a'udhu est le pont entre le protecteur et le danger.",
      axe3_sourate: "La sourate entière est structurée autour de l'acte de chercher refuge. C'est le thème central — la protection divine contre le mal invisible.",
      axe4_coherence: "Le Coran utilise a'udhu dans la sourate 113 (Al-Falaq) avec la même structure. Les deux sourates sont appelées les « deux protectrices » (al-mu'awwidhatayn).",
      axe5_frequence: "Chercher refuge auprès de Dieu est un acte fondamental de la mission humaine — reconnaître sa fragilité face au mal invisible et se tourner vers la seule source de protection efficace."
    }
  }
}

// RBB — Seigneur
const rbb_axes = {
  sense_chosen: "Seigneur",
  concept_chosen: "Seigneurie/Autorité bienveillante",
  concepts: {
    "Seigneurie/Autorité bienveillante": {
      status: "retenu",
      senses: ["seigneur", "maître", "propriétaire", "celui qui élève", "celui qui entretient", "gouverner"],
      proof_ctx: "Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot rabbi est un nom en idafa rattaché à an-nas (les gens) — « le Seigneur des gens ». Le Seigneur est celui qui élève, nourrit, entretient et protège. C'est le premier des trois attributs de Dieu dans cette sourate : Seigneur (v1), Roi (v2), Divinité (v3). Distinction avec « Croissance/Augmentation » : la croissance est le processus, la seigneurie est l'autorité qui dirige ce processus. Le verset parle de l'autorité de Dieu sur les gens, pas du processus de croissance en soi.",
      axe1_verset: "Le mot rabbi est rattaché à an-nas par une idafa — le Seigneur des gens. Le champ lexical est celui de l'autorité protectrice. On cherche refuge AUPRÈS du Seigneur, ce qui implique qu'il a le pouvoir de protéger.",
      axe2_voisins: "Les versets 2-3 ajoutent deux autres qualités : Roi et Divinité. La séquence Seigneur → Roi → Divinité est une montée en généralité : le Seigneur élève et protège, le Roi gouverne et organise, la Divinité reçoit l'adoration.",
      axe3_sourate: "La sourate est une prière de protection. Le Seigneur est celui vers qui on se tourne car il a l'autorité bienveillante sur les gens — il les élève et les protège.",
      axe4_coherence: "Le Coran utilise rabb systématiquement pour désigner l'autorité bienveillante de Dieu. La sourate 1 dit « rabb al-alamin » (Seigneur des mondes). La sourate 114 dit « rabb an-nas » (Seigneur des gens).",
      axe5_frequence: "Reconnaître la seigneurie de Dieu est le premier pas de la mission humaine — celui qui reconnaît son Seigneur sait vers qui se tourner pour la protection et la guidance."
    },
    "Croissance/Augmentation": {
      status: "peu_probable",
      senses: ["augmenter", "croître", "faire grandir", "nourrir"],
      proof_ctx: "La croissance est le processus biologique ou matériel d'augmentation. Le verset ne parle pas d'un processus de croissance mais d'une relation d'autorité protectrice. Le Seigneur est celui qui gouverne les gens, pas celui qui les fait grandir physiquement dans ce contexte.",
      axe1_verset: "Le champ lexical est celui de la protection, pas de la croissance. On cherche refuge auprès d'une autorité, pas auprès d'un processus de croissance.",
      axe2_voisins: "Les versets suivants décrivent un Roi et une Divinité — des autorités, pas des processus de croissance.",
      axe3_sourate: "Le thème est la protection contre le mal, pas la croissance.",
      axe4_coherence: "Le sens de croissance est attesté mais dans d'autres contextes (agriculture, éducation). Ici le contexte est celui de l'autorité protectrice.",
      axe5_frequence: "La croissance ne contribue pas directement au thème de la protection dans cette sourate."
    },
    "Éducation/Accompagnement": { status: "nul", senses: ["élever un enfant", "éduquer"], proof_ctx: "Le contexte est celui de la protection divine, pas de l'éducation." },
    "Commerce/Usure": { status: "nul", senses: ["usure", "intérêt"], proof_ctx: "Hors sujet." },
    "Souffle/Vent": { status: "nul", senses: ["essoufflement"], proof_ctx: "Hors sujet." },
    "Sens isolé/Fixer": { status: "nul", senses: ["fixer"], proof_ctx: "Hors sujet." },
    "Sens isolé/Rassembler": { status: "nul", senses: ["rassembler"], proof_ctx: "Hors sujet." },
    "Sens isolé/Groupe": { status: "nul", senses: ["groupe"], proof_ctx: "Hors sujet." },
    "Sens isolé/Confiture": { status: "nul", senses: ["confiture"], proof_ctx: "Hors sujet." }
  }
}

// NAS — les gens
const nas_axes = {
  sense_chosen: "les gens",
  concept_chosen: "Humanité/Peuple",
  concepts: {
    "Humanité/Peuple": {
      status: "retenu",
      senses: ["gens", "humanité", "peuple"],
      proof_ctx: "Le sens retenu est « Humanité/Peuple ». Le mot an-nas est un nom défini avec al- qui désigne l'ensemble des êtres humains. Il revient 5 fois dans la sourate — dans chaque verset sauf le verset 4. Le test grammatical : un nom défini peut-il désigner une réalité connue ? Oui — les gens sont une réalité universelle et identifiée. An-nas est le complément de rabb, malik et ilah — le Seigneur DES GENS, le Roi DES GENS, la Divinité DES GENS.",
      axe1_verset: "Le mot an-nas complète chaque attribut de Dieu — il est le bénéficiaire de la seigneurie, de la royauté et de la divinité. Le champ lexical est celui de l'humanité comme objet de la protection divine.",
      axe2_voisins: "La répétition d'an-nas dans chaque verset insiste sur le fait que cette protection concerne tous les êtres humains sans exception.",
      axe3_sourate: "La sourate est une prière pour la protection des gens. Le thème tourne autour de l'humanité — ses protecteurs (Dieu) et ses ennemis (le murmureur).",
      axe4_coherence: "Le Coran utilise an-nas pour désigner l'humanité dans de nombreux contextes. Pas de contradiction.",
      axe5_frequence: "La protection de l'humanité entière est au cœur de la mission du khalifa — les gens sont le sujet et le bénéficiaire de la justice divine."
    }
  }
}

// MLK — Roi
const mlk_axes = {
  sense_chosen: "Roi",
  concept_chosen: "Royauté/Souveraineté",
  concepts: {
    "Royauté/Souveraineté": {
      status: "retenu",
      senses: ["roi", "royaume", "règne", "souverain", "couronnement", "trône"],
      proof_ctx: "Le sens retenu est « Royauté/Souveraineté ». Le mot maliki est un nom en idafa rattaché à an-nas — le Roi des gens. C'est le deuxième attribut après Seigneur. Le Roi est celui qui gouverne avec autorité sur un peuple. Le test grammatical : un nom en idafa peut-il désigner un roi rattaché à son peuple ? Oui — « le Roi des gens » est naturel. Distinction avec « Possession/Autorité » : le possesseur détient des biens, le roi gouverne des personnes. Le verset parle des gens, pas des biens — c'est la gouvernance, pas la possession matérielle.",
      axe1_verset: "Le mot maliki est le deuxième dans la séquence Seigneur → Roi → Divinité. Le champ lexical est celui de l'autorité hiérarchique. Le Roi gouverne et organise la vie du peuple.",
      axe2_voisins: "Après le Seigneur qui élève et protège (v1), le Roi gouverne et organise (v2), puis la Divinité reçoit l'adoration (v3). C'est une montée en autorité.",
      axe3_sourate: "Le thème de la protection exige un protecteur qui a le pouvoir de gouverner — le Roi a l'autorité suprême sur les affaires des gens.",
      axe4_coherence: "Le Coran utilise malik pour Dieu dans d'autres contextes (maliki yawm ad-din, sourate 1:4). La royauté divine est un attribut récurrent.",
      axe5_frequence: "La royauté de Dieu sur les gens signifie qu'Il est le gouvernant ultime — celui qui a le dernier mot sur les affaires humaines."
    },
    "Possession/Autorité": {
      status: "probable",
      senses: ["posséder", "maître", "possesseur", "propriété"],
      proof_ctx: "La possession est la détention de biens avec droit d'en disposer. La royauté est la gouvernance de personnes. Le verset parle de « malik an-nas » — il s'agit de gouverner les gens, pas de posséder des biens. Le possesseur détient des objets, le roi gouverne des sujets.",
      axe1_verset: "Le complément est an-nas (les gens). On possède des objets, on règne sur des personnes. Le champ lexical oriente vers la gouvernance.",
      axe2_voisins: "La séquence Seigneur → Roi → Divinité décrit des niveaux d'autorité sur les gens, pas des niveaux de possession matérielle.",
      axe3_sourate: "La protection exige la gouvernance — le possesseur protège ses biens, le roi protège son peuple.",
      axe4_coherence: "Le Coran distingue malik (roi) de maalik (possesseur). La lecture ici est maliki avec un i long — plus proche de la royauté.",
      axe5_frequence: "La gouvernance divine sur les gens contribue directement à la mission de justice."
    },
    "Ange/Messager": { status: "nul", senses: ["ange", "messager"], proof_ctx: "Le contexte est celui de l'attribut divin, pas des anges." },
    "Sens isolé/Pâte": { status: "nul", senses: ["pâte"], proof_ctx: "Hors sujet." },
    "Sens isolé/Maîtriser": { status: "nul", senses: ["maîtriser soi-même"], proof_ctx: "Hors sujet." },
    "Eau/Liquide": { status: "nul", senses: ["eau stagnante"], proof_ctx: "Hors sujet." }
  }
}

// ALH — Divinité
const alh_axes = {
  sense_chosen: "Divinité",
  concept_chosen: "Divinité",
  concepts: {
    "Divinité": {
      status: "retenu",
      senses: ["divinité", "divinité (concept)", "Dieu", "théologie"],
      proof_ctx: "Le sens retenu est « Divinité ». Le mot ilahi est un nom en idafa rattaché à an-nas — la Divinité des gens. C'est le troisième et dernier attribut : Seigneur → Roi → Divinité. La Divinité est ce vers quoi se dirige l'adoration — c'est l'identité ultime de Dieu. Le test grammatical : un nom en idafa peut-il désigner la divinité d'un peuple ? Oui — « la Divinité des gens » identifie le seul vrai objet d'adoration pour l'humanité.",
      axe1_verset: "Le mot ilahi complète la triple qualification de Dieu. Le champ lexical culmine avec l'adoration — le Seigneur élève, le Roi gouverne, la Divinité est adorée.",
      axe2_voisins: "Après les deux premiers attributs, la Divinité ferme la qualification avant le danger (v4). Toute la puissance protectrice de Dieu est résumée en trois mots.",
      axe3_sourate: "La protection vient de celui qui est Seigneur, Roi et Divinité — la triple légitimité de la protection.",
      axe4_coherence: "Le Coran affirme partout qu'il n'y a qu'une seule divinité. La sourate 114 dit : la Divinité des gens est une seule.",
      axe5_frequence: "Reconnaître la divinité unique permet de ne pas se tourner vers de faux protecteurs — c'est le fondement de la mission humaine."
    },
    "Adoration/Dévotion": { status: "nul", senses: ["adorer", "se dévouer"], proof_ctx: "Le verset identifie QUI est adoré (la divinité), pas l'acte d'adorer." },
    "Détresse": { status: "nul", senses: ["être perplexe", "se lamenter"], proof_ctx: "Le contexte est celui de la qualification divine, pas de la détresse." },
    "Refuge/Protection": { status: "nul", senses: ["chercher refuge"], proof_ctx: "La protection est dans a'udhu (v1), pas dans ilah." },
    "Domination": { status: "nul", senses: ["asservir"], proof_ctx: "Hors contexte." }
  }
}

// SHRR — mal
const shrr_axes = {
  sense_chosen: "mal",
  concept_chosen: "Mal/Méchanceté",
  concepts: {
    "Mal/Méchanceté": {
      status: "retenu",
      senses: ["mal", "être mauvais", "méchanceté"],
      proof_ctx: "Le sens retenu est « Mal/Méchanceté ». Le mot sharri est un nom en idafa rattaché à al-waswas (le murmureur) — « le mal du murmureur ». Le mal est ce contre quoi on cherche refuge. Le test grammatical : un nom en idafa peut-il désigner le mal qui appartient à quelqu'un ? Oui — « le mal du murmureur » identifie le type de nuisance.",
      axe1_verset: "Le mot sharri est introduit par min (de/contre) — on cherche refuge CONTRE le mal du murmureur. Le champ lexical est celui du danger et de la nuisance.",
      axe2_voisins: "Après trois versets décrivant le protecteur (v1-3), le verset 4 nomme le danger. Le mal est le point de bascule de la sourate.",
      axe3_sourate: "La sourate oppose le protecteur (Dieu) au danger (le mal du murmureur). Le sharr est le thème négatif de la sourate.",
      axe4_coherence: "Le Coran utilise sharr dans la sourate 113 aussi (min sharri ma khalaq = du mal de ce qu'Il a créé). Les deux sourates protectrices commencent par nommer le mal.",
      axe5_frequence: "Identifier le mal est le premier pas pour le combattre. La mission de justice exige de nommer ce qui nuit."
    },
    "Sens isolé/Étincelle": { status: "nul", senses: ["étincelle"], proof_ctx: "Hors sujet." }
  }
}

// WSWS — murmurer
const wsws_axes = {
  sense_chosen: "murmureur",
  concept_chosen: "Murmure/Tentation",
  concepts: {
    "Murmure/Tentation": {
      status: "retenu",
      senses: ["murmurer", "tenter", "chuchoter"],
      proof_ctx: "Le sens retenu est « Murmure/Tentation ». Le mot al-waswas est un nom défini avec al- (le/la) qui identifie le murmureur comme une réalité connue. Dans le verset 5, le verbe yuwaswisu est à l'inaccompli — le murmure est en cours et habituel, il ne s'arrête pas. Le murmure est un acte insidieux : il sort du murmureur et atteint la poitrine (l'intériorité) de la victime. C'est directionnel et caché.",
      axe1_verset: "Le mot al-waswas est rattaché à sharri — le mal du murmureur. Le champ lexical est celui de la tentation invisible. Le murmure est la méthode du mal dans cette sourate.",
      axe2_voisins: "Le verset 5 détaille la méthode : « celui qui murmure dans les poitrines des gens ». Le verset 4 nomme l'agent (le murmureur), le verset 5 décrit son action (murmurer dans les poitrines).",
      axe3_sourate: "Le murmure est l'ennemi spécifique de cette sourate — le danger invisible contre lequel on cherche la protection divine.",
      axe4_coherence: "Le Coran décrit le waswas comme le mode opératoire du diable (sourate 7:20 — le diable murmura à Adam). C'est un thème récurrent.",
      axe5_frequence: "Reconnaître le murmure intérieur comme une tentation extérieure (et non comme sa propre pensée) est fondamental pour la mission humaine — on ne peut combattre ce qu'on ne reconnaît pas."
    }
  }
}

// XNS — se retirer/se cacher
const xns_axes = {
  sense_chosen: "celui qui se dérobe",
  concept_chosen: "Retrait/Dissimulation",
  concepts: {
    "Retrait/Dissimulation": {
      status: "retenu",
      senses: ["se retirer", "reculer", "se cacher"],
      proof_ctx: "Le sens retenu est « Retrait/Dissimulation ». Le mot al-khannas est un adjectif défini au superlatif (une forme qui exprime l'intensité de l'action) — celui qui se retire constamment, qui se dérobe sans cesse. C'est le deuxième qualificatif du murmureur : il murmure PUIS se cache. Le test grammatical : un adjectif superlatif défini peut-il désigner un être qui se retire intensément ? Oui — al-khannas est « le grand reculeur », celui dont le retrait est permanent et répété.",
      axe1_verset: "Le mot al-khannas qualifie al-waswas — le murmureur qui se dérobe. Le champ lexical combine le murmure (action) et le retrait (dissimulation après l'action). C'est une description d'un ennemi qui opère dans l'ombre.",
      axe2_voisins: "Le verset 5 dit que ce murmureur agit dans les poitrines — il pénètre l'intériorité de l'homme puis se retire. Le mouvement est : s'avancer pour murmurer, reculer pour se cacher.",
      axe3_sourate: "Le retrait est la caractéristique qui rend le murmureur dangereux — il est invisible, il se cache quand on invoque Dieu, il revient quand on est négligent.",
      axe4_coherence: "Les commentateurs classiques disent que le khannas recule quand le serviteur mentionne Dieu et revient quand il est distrait. Ce mouvement d'aller-retour est la nature même du murmure diabolique.",
      axe5_frequence: "Comprendre que le mal se déguise et se cache est essentiel pour la vigilance — la mission humaine exige de ne pas être trompé par ce qui se dérobe."
    },
    "Corps/Anatomie": { status: "nul", senses: ["nez"], proof_ctx: "Le nez est le sens concret premier de la racine mais hors contexte ici." }
  }
}

// SDR — poitrine
const sdr_axes = {
  sense_chosen: "poitrines",
  concept_chosen: "Poitrine/Intériorité",
  concepts: {
    "Poitrine/Intériorité": {
      status: "retenu",
      senses: ["poitrine", "cœur (intérieur)"],
      proof_ctx: "Le sens retenu est « Poitrine/Intériorité ». Le mot sudur est le pluriel de sadr — les poitrines. Il est en idafa avec an-nas (sudur an-nas = les poitrines des gens). La poitrine est le siège des émotions et des pensées secrètes dans la vision coranique. Le murmureur murmure DANS les poitrines — il pénètre l'intériorité de l'homme.",
      axe1_verset: "Le mot sudur est le lieu où le murmure se produit — « dans les poitrines des gens ». Le champ lexical est celui de l'intériorité attaquée.",
      axe2_voisins: "Le verset 4 nomme l'agent (le murmureur), le verset 5 décrit l'action (murmurer) et le lieu (les poitrines). La progression est logique : qui → que fait-il → où.",
      axe3_sourate: "La poitrine est le champ de bataille entre la protection divine et le murmure diabolique. C'est dans l'intériorité de l'homme que le combat se joue.",
      axe4_coherence: "Le Coran utilise sadr/sudur pour désigner l'intériorité dans de nombreux versets (sourate 94 : « n'avons-nous pas ouvert ta poitrine ? »). La poitrine est le lieu des secrets.",
      axe5_frequence: "Protéger son intériorité contre les murmures est fondamental — la corruption commence dans la poitrine avant de se manifester dans les actes."
    },
    "Émission/Sortie": { status: "nul", senses: ["sortir", "émettre"], proof_ctx: "Le verset parle de l'intériorité (DANS les poitrines), pas de la sortie." },
    "Eau/Liquide": { status: "nul", senses: ["source"], proof_ctx: "Hors sujet." }
  }
}

// JNN — djinn
const jnn_axes = {
  sense_chosen: "des djinns",
  concept_chosen: "Êtres cachés",
  concepts: {
    "Êtres cachés": {
      status: "retenu",
      senses: ["djinn"],
      proof_ctx: "Le sens retenu est « Êtres cachés ». Le mot al-jinna est un nom défini — les djinns, les êtres cachés aux sens humains. Le verset 6 précise que le murmureur peut venir « des djinns ET des gens ». La menace n'est pas seulement invisible (djinns) — elle est aussi humaine (des gens). Le test grammatical : un nom défini peut-il identifier les djinns comme réalité connue ? Oui — les djinns sont une réalité identifiée dans le Coran.",
      axe1_verset: "Le mot al-jinna est lié à an-nas par wa (et) — « des djinns et des gens ». Le champ lexical identifie les deux sources du murmure.",
      axe2_voisins: "Après avoir décrit l'action du murmureur (v4-5), le verset 6 identifie ses deux origines. C'est la conclusion qui complète le tableau.",
      axe3_sourate: "La sourate protège contre tout murmure — qu'il vienne des êtres invisibles ou des êtres humains. La protection est totale.",
      axe4_coherence: "Le Coran mentionne les djinns comme des êtres créés de feu qui coexistent avec les humains. La sourate 72 est entièrement dédiée aux djinns.",
      axe5_frequence: "Reconnaître que le mal peut venir de sources invisibles ET humaines est une lucidité nécessaire pour la mission de justice."
    },
    "Dissimulation/Couverture": { status: "nul", senses: ["cacher", "couvrir"], proof_ctx: "Le verset parle de l'identité des êtres (djinns), pas de l'acte de cacher." },
    "Jardin/Paradis": { status: "nul", senses: ["jardin", "paradis"], proof_ctx: "Le contexte parle d'êtres qui murmurent, pas de jardins." },
    "Sens isolé/Folie": { status: "nul", senses: ["folie"], proof_ctx: "Hors sujet." },
    "Sens isolé/Bouclier": { status: "nul", senses: ["bouclier"], proof_ctx: "Hors sujet." },
    "Sens isolé/Embryon": { status: "nul", senses: ["embryon"], proof_ctx: "Hors sujet." }
  }
}

// ==================== ÉTAPE 4 — TRANSLATIONS ====================

const translations = {
  1: {
    verse_id: V[1],
    translation_arab: "Dis : « Je cherche refuge auprès du Seigneur des gens,",
    translation_explanation: `§DEMARCHE§

Le mot **qul** est un verbe à l'impératif (une forme qui donne un ordre) — c'est Dieu qui ordonne au Prophète de prononcer cette invocation de protection. L'impératif indique que cette prière n'est pas spontanée mais ordonnée.

Le verbe **a'udhu** est à l'inaccompli première personne (une forme qui dit que l'action est en cours et habituelle) — « je cherche refuge habituellement ». La forme inaccomplie montre que la demande de protection n'est pas ponctuelle — c'est un acte continu et répété.

La préposition **bi** (auprès de) introduit Celui vers qui on se tourne pour la protection. Elle marque la direction du refuge : du menacé vers le protecteur.

Le mot **rabbi** est un nom rattaché à **an-nas** par une idafa (c'est quand deux mots sont liés pour dire que le premier appartient au second). Rabbi an-nas = le Seigneur des gens. Le Seigneur est celui qui élève, nourrit et protège — c'est le premier des trois attributs de Dieu dans cette sourate.

Le mot **an-nas** (les gens) revient 5 fois dans cette sourate — c'est l'humanité entière qui est le bénéficiaire de cette protection.

§JUSTIFICATION§

**dis** — Le sens retenu est « Parole/Énonciation ». Le mot « dis » est choisi car c'est l'impératif direct qui capture l'ordre de prononcer. L'alternative « parle » est écartée car « parle » est plus vague. L'alternative « déclare » est écartée car c'est du registre officiel.

**je cherche refuge** — Le sens retenu est « Protection ». L'expression « je cherche refuge » est choisie car elle capture le mouvement actif de se mettre sous la protection de quelqu'un. L'alternative « je me réfugie » est écartée car elle est plus passive — « chercher refuge » implique un acte volontaire et continu.

**Seigneur** — Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot « Seigneur » est choisi car il capture l'autorité qui élève et protège. L'alternative « maître » est écartée car « maître » insiste sur le pouvoir de commander, alors que « Seigneur » insiste sur la responsabilité de nourrir et protéger. L'alternative « éducateur » est écartée car c'est du registre moderne.

**les gens** — Le sens retenu est « Humanité/Peuple ». Le mot « les gens » est choisi car c'est le français courant pour désigner l'ensemble des êtres humains. L'alternative « les hommes » est écartée car « hommes » peut être compris comme masculin seulement. L'alternative « l'humanité » est écartée car c'est plus abstrait.`,
    segments: [
      {fr:"dis",pos:"verbe",phon:"qul",arabic:"قُلْ",position:1,word_key:"qwl",is_particle:false,sense_retenu:"parole"},
      {fr:"je cherche refuge",pos:"verbe",phon:"a'udhu",arabic:"أَعُوذُ",position:2,word_key:"ewdh",is_particle:false,sense_retenu:"protection"},
      {fr:"auprès du Seigneur",pos:"nom",phon:"bi rabbi",arabic:"بِرَبِّ",position:3,word_key:"rbb",is_particle:false,sense_retenu:"seigneur"},
      {fr:"des gens",pos:"nom",phon:"an-nas",arabic:"ٱلنَّاسِ",position:4,word_key:"nws",is_particle:false,sense_retenu:"gens"}
    ]
  },
  2: {
    verse_id: V[2],
    translation_arab: "le Roi des gens,",
    translation_explanation: `§DEMARCHE§

Le mot **maliki** est un nom rattaché à **an-nas** par une idafa — le Roi des gens. C'est le deuxième attribut de Dieu dans cette sourate. Après le Seigneur qui élève et protège (v1), le Roi gouverne et organise. La séquence Seigneur → Roi → Divinité est une montée en autorité : le Seigneur est proche et nourricier, le Roi est souverain et gouvernant, la Divinité est l'objet ultime d'adoration.

La forme **maliki** (avec un i long, kasra) indique la royauté — l'autorité suprême sur un peuple. C'est différent de **maaliki** (avec un a long, qui signifie possesseur/propriétaire).

§JUSTIFICATION§

**Roi** — Le sens retenu est « Royauté/Souveraineté ». Le mot « Roi » est choisi car il capture l'autorité suprême exercée sur un peuple. L'alternative « possesseur » est écartée car le possesseur détient des biens, le roi gouverne des personnes — le verset parle des gens, pas des biens. L'alternative « souverain » est écartée car c'est du registre diplomatique, moins courant.`,
    segments: [
      {fr:"Roi",pos:"nom",phon:"maliki",arabic:"مَلِكِ",position:1,word_key:"mlk",is_particle:false,sense_retenu:"roi"},
      {fr:"des gens",pos:"nom",phon:"an-nas",arabic:"ٱلنَّاسِ",position:2,word_key:"nws",is_particle:false,sense_retenu:"gens"}
    ]
  },
  3: {
    verse_id: V[3],
    translation_arab: "la Divinité des gens,",
    translation_explanation: `§DEMARCHE§

Le mot **ilahi** est un nom rattaché à **an-nas** par une idafa — la Divinité des gens. C'est le troisième et dernier attribut de Dieu. La séquence est complète : Seigneur (celui qui élève) → Roi (celui qui gouverne) → Divinité (celui qu'on adore). La triple qualification donne la légitimité totale de la protection : Dieu protège car Il est à la fois le nourricier, le gouvernant et l'objet d'adoration des gens.

La Divinité est ce vers quoi se dirige l'adoration — c'est l'identité ultime de Dieu, pas un de ses actes. Le Seigneur fait (il élève), le Roi fait (il gouverne), la Divinité EST (elle est l'objet d'adoration).

§JUSTIFICATION§

**Divinité** — Le sens retenu est « Divinité ». Le mot « Divinité » est choisi car il identifie QUI est adoré, pas l'acte d'adorer. L'alternative « Dieu » est écartée car « Dieu » est le nom propre (Allah), alors que « Divinité » est la qualité (ilah) — ce verset dit « la Divinité des gens », pas « le Dieu des gens ». L'alternative « objet d'adoration » est écartée car c'est une périphrase trop longue.`,
    segments: [
      {fr:"Divinité",pos:"nom",phon:"ilahi",arabic:"إِلَـٰهِ",position:1,word_key:"alh",is_particle:false,sense_retenu:"divinité"},
      {fr:"des gens",pos:"nom",phon:"an-nas",arabic:"ٱلنَّاسِ",position:2,word_key:"nws",is_particle:false,sense_retenu:"gens"}
    ]
  },
  4: {
    verse_id: V[4],
    translation_arab: "contre le mal du murmureur qui se dérobe,",
    translation_explanation: `§DEMARCHE§

La préposition **min** (de/contre) introduit ce contre quoi on cherche refuge. Elle complète le verbe a'udhu du verset 1 — « je cherche refuge auprès du Seigneur des gens CONTRE le mal du murmureur ».

Le mot **sharri** est un nom en idafa rattaché à al-waswas — le mal du murmureur. Le sharr est ce qui nuit et détruit. C'est la raison de la demande de protection.

Le mot **al-waswas** est un nom défini avec al- qui identifie le murmureur comme une réalité connue et reconnue. Le waswas est celui qui souffle des pensées mauvaises de façon insidieuse et répétée. Le redoublement de la racine (was-was) intensifie le sens : ce n'est pas un murmure isolé mais un murmure insistant et continu.

Le mot **al-khannas** est un adjectif au superlatif défini (une forme qui exprime l'intensité maximale de l'action) — « celui qui se retire constamment ». Le khannas qualifie le waswas : le murmureur est celui qui avance pour murmurer puis recule et se cache. C'est un ennemi qui opère par cycles : s'avancer → murmurer → se dérober.

§JUSTIFICATION§

**mal** — Le sens retenu est « Mal/Méchanceté ». Le mot « mal » est choisi car c'est le mot français courant le plus direct pour sharr. L'alternative « méchanceté » est écartée car la méchanceté est une qualité de caractère, alors que le mal est plus large — il inclut la nuisance sous toutes ses formes.

**murmureur** — Le sens retenu est « Murmure/Tentation ». Le mot « murmureur » est choisi car il décrit exactement l'action : celui qui parle à voix basse dans l'oreille intérieure. L'alternative « tentateur » est écartée car le tentateur est plus large — le murmureur est un type spécifique de tentateur qui agit par le chuchotement insidieux.

**celui qui se dérobe** — Le sens retenu est « Retrait/Dissimulation ». L'expression « qui se dérobe » est choisie car elle capture le mouvement de recul et de dissimulation après l'acte. L'alternative « qui se cache » est écartée car « se cacher » est statique, alors que « se dérober » implique un mouvement de retrait actif après avoir été visible.`,
    segments: [
      {fr:"contre",phon:"min",arabic:"مِن",position:1,word_key:null,is_particle:true},
      {fr:"le mal",pos:"nom",phon:"sharri",arabic:"شَرِّ",position:2,word_key:"shrr",is_particle:false,sense_retenu:"mal"},
      {fr:"du murmureur",pos:"nom",phon:"al-waswas",arabic:"ٱلْوَسْوَاسِ",position:3,word_key:"wsws",is_particle:false,sense_retenu:"murmure"},
      {fr:"qui se dérobe",pos:"adjectif",phon:"al-khannas",arabic:"ٱلْخَنَّاسِ",position:4,word_key:"xns",is_particle:false,sense_retenu:"retrait"}
    ]
  },
  5: {
    verse_id: V[5],
    translation_arab: "celui qui murmure dans les poitrines des gens,",
    translation_explanation: `§DEMARCHE§

Le pronom relatif **alladhi** (celui qui) introduit une description du murmureur — il détaille sa méthode.

Le verbe **yuwaswisu** est à l'inaccompli troisième personne (une forme qui dit que l'action est en cours et habituelle) — « il murmure habituellement ». L'inaccompli montre que le murmure n'est pas un événement isolé mais une action continue et répétée.

La préposition **fi** (dans) indique le lieu de l'action.

Le mot **suduri** est le pluriel de sadr (poitrine) rattaché à **an-nas** par une idafa — les poitrines des gens. La poitrine dans la vision coranique est le siège des émotions, des pensées secrètes et des intentions. Le murmureur ne parle pas à l'oreille extérieure — il pénètre directement dans l'intériorité de l'homme.

§JUSTIFICATION§

**murmure** — Le sens retenu est « Murmure/Tentation ». Le verbe « murmurer » est choisi car il capture l'action insidieuse et répétée. L'alternative « chuchoter » est écartée car le chuchotement est plus neutre — on peut chuchoter un secret innocent. Le murmure a une connotation de tentation et de suggestion mauvaise.

**poitrines** — Le sens retenu est « Poitrine/Intériorité ». Le mot « poitrines » est choisi car il rend le pluriel arabe sudur et capture le lieu intime des émotions. L'alternative « cœurs » est écartée car le cœur (qalb) est un autre mot arabe — le Coran distingue sadr (poitrine, espace intérieur) de qalb (cœur, organe de la compréhension).`,
    segments: [
      {fr:"celui qui",phon:"alladhi",arabic:"ٱلَّذِى",position:1,word_key:null,is_particle:true},
      {fr:"murmure",pos:"verbe",phon:"yuwaswisu",arabic:"يُوَسْوِسُ",position:2,word_key:"wsws",is_particle:false,sense_retenu:"murmure"},
      {fr:"dans",phon:"fi",arabic:"فِى",position:3,word_key:null,is_particle:true},
      {fr:"les poitrines",pos:"nom",phon:"suduri",arabic:"صُدُورِ",position:4,word_key:"sdr",is_particle:false,sense_retenu:"poitrine"},
      {fr:"des gens",pos:"nom",phon:"an-nas",arabic:"ٱلنَّاسِ",position:5,word_key:"nws",is_particle:false,sense_retenu:"gens"}
    ]
  },
  6: {
    verse_id: V[6],
    translation_arab: "qu'il soit des djinns ou des gens. »",
    translation_explanation: `§DEMARCHE§

La préposition **mina** (parmi/de) introduit les deux catégories d'où peut venir le murmureur. Ce verset est la conclusion qui identifie les deux sources du danger.

Le mot **al-jinna** est un nom défini — les djinns, les êtres cachés aux sens humains. La racine j-n-n a pour sens premier « cacher, couvrir ». Les djinns sont des créatures invisibles qui coexistent avec les humains.

La conjonction **wa** (et) lie les deux catégories.

Le mot **an-nas** (les gens) revient une dernière fois — cette fois comme source du murmure, pas comme bénéficiaire de la protection. C'est un renversement : dans les versets 1-3, les gens sont protégés. Dans le verset 6, les gens peuvent être eux-mêmes le danger. Le murmureur peut être un djinn invisible OU un être humain bien réel.

§JUSTIFICATION§

**djinns** — Le sens retenu est « Êtres cachés ». Le mot « djinns » est conservé en français car c'est un mot qui est passé dans l'usage courant et qui n'a pas d'équivalent exact en français. L'alternative « esprits » est écartée car « esprits » est trop vague et peut évoquer des fantômes ou des âmes, ce qui n'est pas le sens coranique. L'alternative « démons » est écartée car tous les djinns ne sont pas mauvais — le Coran mentionne des djinns croyants.

**les gens** — Le sens retenu est « Humanité/Peuple ». Même justification que le verset 1. Le mot « les gens » capture l'ensemble des êtres humains dans le français courant.`,
    segments: [
      {fr:"parmi",phon:"mina",arabic:"مِنَ",position:1,word_key:null,is_particle:true},
      {fr:"les djinns",pos:"nom",phon:"al-jinna",arabic:"ٱلْجِنَّةِ",position:2,word_key:"jnn",is_particle:false,sense_retenu:"djinns"},
      {fr:"et les gens",pos:"nom",phon:"wa an-nas",arabic:"وَٱلنَّاسِ",position:3,word_key:"nws",is_particle:false,sense_retenu:"gens"}
    ]
  }
}

// ==================== INSERTION ====================

async function run() {
  console.log('=== INSERTION SOURATE 114 ===')

  // 1. verse_word_analyses
  const wordAnalyses = [
    {verse_id:V[1],word_key:'qwl',sense_chosen:'parole',analysis_axes:qwl_axes,position:1},
    {verse_id:V[1],word_key:'ewdh',sense_chosen:'protection',analysis_axes:ewdh_axes,position:2},
    {verse_id:V[1],word_key:'rbb',sense_chosen:'seigneur',analysis_axes:rbb_axes,position:3},
    {verse_id:V[1],word_key:'nws',sense_chosen:'gens',analysis_axes:nas_axes,position:4},
    {verse_id:V[2],word_key:'mlk',sense_chosen:'roi',analysis_axes:mlk_axes,position:1},
    {verse_id:V[2],word_key:'nws',sense_chosen:'gens',analysis_axes:nas_axes,position:2},
    {verse_id:V[3],word_key:'alh',sense_chosen:'divinité',analysis_axes:alh_axes,position:1},
    {verse_id:V[3],word_key:'nws',sense_chosen:'gens',analysis_axes:nas_axes,position:2},
    {verse_id:V[4],word_key:'shrr',sense_chosen:'mal',analysis_axes:shrr_axes,position:2},
    {verse_id:V[4],word_key:'wsws',sense_chosen:'murmure',analysis_axes:wsws_axes,position:3},
    {verse_id:V[4],word_key:'xns',sense_chosen:'retrait',analysis_axes:xns_axes,position:4},
    {verse_id:V[5],word_key:'wsws',sense_chosen:'murmure',analysis_axes:wsws_axes,position:2},
    {verse_id:V[5],word_key:'sdr',sense_chosen:'poitrine',analysis_axes:sdr_axes,position:4},
    {verse_id:V[5],word_key:'nws',sense_chosen:'gens',analysis_axes:nas_axes,position:5},
    {verse_id:V[6],word_key:'jnn',sense_chosen:'djinns',analysis_axes:jnn_axes,position:2},
    {verse_id:V[6],word_key:'nws',sense_chosen:'gens',analysis_axes:nas_axes,position:3},
  ]

  for (const vid of Object.values(V)) {
    await db.from('verse_word_analyses').delete().eq('verse_id', vid)
  }

  const {error: e1} = await db.from('verse_word_analyses').insert(wordAnalyses)
  if (e1) console.log('ERR verse_word_analyses:', e1.message)
  else console.log('✅ verse_word_analyses: ' + wordAnalyses.length + ' insérées')

  // 2. verse_analyses
  for (const [vnum, t] of Object.entries(translations)) {
    const {error} = await db.from('verse_analyses').update({
      translation_arab: t.translation_arab,
      translation_explanation: t.translation_explanation,
      segments: t.segments
    }).eq('verse_id', t.verse_id)
    if (error) console.log('ERR verse ' + vnum + ':', error.message)
    else console.log('✅ verset ' + vnum + ': ' + t.translation_arab)
  }

  // 3. word_daily
  const dailyPhrases = [
    {word_key:'ewdh',sense:'protection',arabic:'أعوذ بالله من الشيطان الرجيم',phon:"a'udhu billahi min ash-shaytani ar-rajim",french:"Je cherche refuge auprès de Dieu contre le diable banni."},
    {word_key:'ewdh',sense:'protection',arabic:'أعوذ بك من كل شر',phon:"a'udhu bika min kulli sharr",french:'Je cherche refuge auprès de toi contre tout mal.'},
    {word_key:'ewdh',sense:'protection',arabic:'عوذوا أطفالكم',phon:"a'widhu atfalakum",french:'Protégez vos enfants (en demandant le refuge divin).'},
    {word_key:'wsws',sense:'murmure',arabic:'لا تسمع للوسوسة',phon:'la tasma li-l-waswasa',french:'Ne prête pas attention au murmure (intérieur).'},
    {word_key:'wsws',sense:'murmure',arabic:'الوسواس يضعف مع الذكر',phon:"al-waswas yad'afu ma'a adh-dhikr",french:"Le murmure s'affaiblit avec le rappel (de Dieu)."},
    {word_key:'wsws',sense:'murmure',arabic:'كل إنسان عنده وسواس',phon:"kullu insan 'indahu waswas",french:'Tout être humain a un murmureur.'},
    {word_key:'xns',sense:'retrait',arabic:'الشيطان خناس',phon:'ash-shaytan khannas',french:'Le diable est celui qui se dérobe (quand on invoque Dieu).'},
    {word_key:'xns',sense:'retrait',arabic:'خنس عندما رآه',phon:'khanasa indama ra-ahu',french:"Il a reculé quand il l'a vu."},
    {word_key:'xns',sense:'retrait',arabic:'لا تكن خناسا',phon:'la takun khannasan',french:'Ne sois pas quelqu\'un qui se dérobe.'},
  ]

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
  console.log('✅ word_daily: ' + dailyPhrases.length + ' phrases')

  // LOGS
  console.log('\n=== LOGS FINAUX ===')
  for (const [vnum, t] of Object.entries(translations)) {
    const words = t.segments.filter(s => !s.is_particle).map(s => s.word_key + ' → "' + s.fr + '"').join(', ')
    console.log('VERSET 114:' + vnum + ' — ' + words)
    console.log('  Traduction : ' + t.translation_arab)
  }
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
