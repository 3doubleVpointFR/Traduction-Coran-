const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const V = { 1: 6226, 2: 6227, 3: 6228, 4: 6229, 5: 6230 }

// ========================================================================
// ÉTAPE 3 — ANALYSIS AXES
// Noms de concepts EXACTS depuis word_meanings (vérifiés par SELECT)
// ========================================================================

const qwl_axes = {
  sense_chosen: "dis",
  concept_chosen: "Parole/Énonciation", // EXACT from DB
  concepts: {
    "Parole/Énonciation": {
      status: "retenu",
      senses: ["dire", "parler", "parole", "discours", "affirmer"],
      proof_ctx: "Le sens retenu est « Parole/Énonciation ». Le mot qul est un impératif — un ordre de prononcer. Ce qui suit est une invocation de protection (a'udhu). Le qul ouvre un discours ordonné par Dieu au Prophète. Même analyse que dans les sourates 109 et 114.",
      axe1_verset: "Le verset ouvre par un ordre de parler suivi d'une invocation de protection. Le champ lexical est celui de la communication directe — Dieu ordonne, le Prophète prononce. Le qul est le cadre qui porte tout le reste de la sourate. Sans cette parole prononcée, la protection ne serait pas demandée.",
      axe2_voisins: "Les versets 2-5 développent le contenu de l'invocation : la description de ce contre quoi on cherche refuge — le mal de ce qu'Il a créé, de l'obscurité, des souffleuses, de l'envieux. Le qul est le point de départ de toute cette demande de protection.",
      axe3_sourate: "La sourate est une prière de protection ordonnée par Dieu. Le qul transforme cette prière en acte de parole obligatoire — ce n'est pas une suggestion mais un ordre divin de prononcer ces mots de protection.",
      axe4_coherence: "Le Coran utilise qul plus de 300 fois pour introduire les discours que le Prophète doit prononcer. La sourate 114 commence aussi par qul a'udhu — même structure. Les deux sourates sont appelées les deux protectrices.",
      axe5_frequence: "Prononcer la demande de protection fait partie de la mission de l'être humain responsable. La parole claire et la demande d'aide à Dieu sont des actes de lucidité qui empêchent la corruption intérieure causée par le mal invisible."
    },
    "Pensée/Avis": { status: "nul", senses: ["opinion", "avis", "doctrine"], proof_ctx: "L'impératif suivi d'une invocation exige la parole prononcée, pas la pensée intérieure." },
    "Sens isolé/Puissance": { status: "nul", senses: ["puissance"], proof_ctx: "Hors sujet." },
    "Corps/Anatomie": { status: "nul", senses: ["troupeau"], proof_ctx: "Hors sujet." }
  }
}

const ew_axes = {
  sense_chosen: "je cherche refuge",
  concept_chosen: "Refuge/Protection", // EXACT from DB
  concepts: {
    "Refuge/Protection": {
      status: "retenu",
      senses: ["chercher refuge", "se réfugier", "demander protection"],
      proof_ctx: "Le sens retenu est « Refuge/Protection ». Le verbe a'udhu est à l'inaccompli première personne — « je cherche refuge habituellement ». La préposition bi (auprès de) qui suit indique vers qui on se dirige pour la protection. L'acte de chercher refuge est directionnel : du menacé vers le protecteur. L'inaccompli montre que la demande est continue et habituelle, pas ponctuelle.",
      axe1_verset: "Le verbe a'udhu est le cœur du verset — c'est l'acte principal après l'ordre de dire. Le champ lexical est celui de la protection : on cherche refuge auprès du Seigneur de l'aube contre les maux listés dans les versets suivants.",
      axe2_voisins: "Les versets 2-5 listent quatre types de mal contre lesquels on se protège. Le a'udhu du verset 1 est le verbe qui gouverne toute la sourate — chaque « min sharri » (contre le mal de) dépend de ce verbe initial.",
      axe3_sourate: "La sourate entière est structurée autour de l'acte de chercher refuge. C'est le thème central — la protection divine contre les maux du monde créé et les maux humains.",
      axe4_coherence: "Le Coran utilise a'udhu dans la sourate 114 avec la même structure. Les deux sourates protectrices partagent cette ouverture : qul a'udhu bi rabbi. Le verbe est le même, seul le complément change (al-falaq vs an-nas).",
      axe5_frequence: "Chercher refuge auprès de Dieu est un acte fondamental de la mission humaine — reconnaître sa fragilité face aux maux du monde et se tourner vers la seule source de protection efficace empêche la corruption causée par la peur ou l'orgueil."
    }
  }
}

const rbb_axes = {
  sense_chosen: "Seigneur",
  concept_chosen: "Seigneurie/Autorité bienveillante", // EXACT from DB
  concepts: {
    "Seigneurie/Autorité bienveillante": {
      status: "retenu",
      senses: ["seigneur", "maître", "propriétaire", "celui qui élève", "celui qui entretient", "celui qui possède", "gouverner"],
      proof_ctx: "Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot rabbi est un nom en idafa rattaché à al-falaq (l'aube) — « le Seigneur de l'aube ». Le Seigneur est celui qui possède, élève et protège. On cherche refuge auprès de Lui car Il a l'autorité sur ce qui menace. Distinction avec « Croissance/Augmentation » : la croissance est le processus, la seigneurie est l'autorité qui gouverne ce processus. Le verset ne parle pas de croître mais de se protéger — c'est l'autorité du Seigneur qui rend la protection possible.",
      axe1_verset: "Le mot rabbi est rattaché à al-falaq par une idafa — le Seigneur de l'aube. Le champ lexical est celui de l'autorité protectrice. On cherche refuge AUPRÈS du Seigneur, ce qui implique qu'Il a le pouvoir de protéger contre les maux listés dans les versets suivants.",
      axe2_voisins: "Les versets 2-5 listent les dangers : le mal de la création, de l'obscurité, des souffleuses, de l'envieux. Le Seigneur de l'aube est celui qui a pouvoir sur tous ces dangers car Il les gouverne.",
      axe3_sourate: "La sourate est une prière de protection. Le Seigneur est le protecteur — Son autorité bienveillante est la raison pour laquelle on se tourne vers Lui et non vers un autre.",
      axe4_coherence: "Le Coran utilise rabb systématiquement pour désigner l'autorité bienveillante de Dieu. La sourate 1 dit rabb al-alamin (Seigneur des mondes), la sourate 114 dit rabb an-nas (Seigneur des gens), et la sourate 113 dit rabb al-falaq (Seigneur de l'aube). Le schéma est le même.",
      axe5_frequence: "Reconnaître la seigneurie de Dieu est le premier pas de la mission humaine — celui qui reconnaît son Seigneur sait vers qui se tourner pour la protection et la guidance face aux maux du monde."
    },
    "Croissance/Augmentation": {
      status: "peu_probable",
      senses: ["augmenter", "croître", "faire grandir", "nourrir", "développer", "excès", "colline", "éminence"],
      proof_ctx: "La croissance est un processus biologique ou matériel d'augmentation. Le verset ne parle pas d'un processus de croissance mais d'une relation de protection. Le Seigneur est celui qui gouverne et protège, pas celui qui fait croître physiquement dans ce contexte. Le champ lexical est celui du refuge, pas de l'agriculture ou de l'éducation.",
      axe1_verset: "Le champ lexical est celui de la protection et du refuge, pas de la croissance. On cherche refuge auprès d'une autorité protectrice, pas auprès d'un processus de développement.",
      axe2_voisins: "Les versets suivants parlent de maux à combattre — obscurité, sorcellerie, envie. La croissance n'a pas de lien avec ces dangers. La protection, oui.",
      axe3_sourate: "Le thème est la protection contre le mal, pas la croissance ou l'augmentation. Le sens de croissance est hors du champ thématique de cette sourate.",
      axe4_coherence: "Le sens de croissance est attesté dans d'autres contextes mais quand le Coran associe rabb à un complément comme al-falaq, le sens est toujours celui de la seigneurie et de l'autorité.",
      axe5_frequence: "La croissance ne contribue pas directement au thème de la protection contre le mal dans cette sourate."
    },
    "Éducation/Accompagnement": { status: "nul", senses: ["élever un enfant", "éduquer", "former", "accompagner la croissance"], proof_ctx: "Le contexte est la protection divine, pas l'éducation." },
    "Commerce/Usure": { status: "nul", senses: ["usure", "augmentation de dette", "intérêt"], proof_ctx: "Hors sujet — aucune relation financière dans cette sourate." },
    "Souffle/Vent": { status: "nul", senses: ["essoufflement"], proof_ctx: "Hors sujet." },
    "Sens isolé/Fixer": { status: "nul", senses: ["fixer"], proof_ctx: "Hors sujet." },
    "Sens isolé/Rassembler": { status: "nul", senses: ["rassembler"], proof_ctx: "Hors sujet." },
    "Sens isolé/Groupe": { status: "nul", senses: ["groupe"], proof_ctx: "Hors sujet." },
    "Sens isolé/Confiture": { status: "nul", senses: ["confiture"], proof_ctx: "Hors sujet." }
  }
}

const flq_axes = {
  sense_chosen: "l'aube",
  concept_chosen: "Fission/Aube", // EXACT from DB
  concepts: {
    "Fission/Aube": {
      status: "retenu",
      senses: ["fendre", "aube", "séparer"],
      proof_ctx: "Le sens retenu est « Fission/Aube ». Le mot al-falaq est un nom défini avec al- — il identifie une réalité connue. Le falaq est ce qui fend — l'aube qui fend l'obscurité, la graine qui fend la terre. Le test grammatical : un nom défini en idafa peut-il désigner l'aube rattachée à son Seigneur ? Oui — « le Seigneur de l'aube » identifie Dieu comme celui qui commande le moment où la lumière déchire les ténèbres. La fission est l'acte de séparer l'obscurité de la lumière — c'est le pouvoir créateur qui s'oppose au mal de l'obscurité mentionné au verset 3.",
      axe1_verset: "Le mot al-falaq est rattaché à rabbi par une idafa — le Seigneur de ce qui fend. Le champ lexical est celui de la rupture de l'obscurité par la lumière. On cherche refuge auprès de celui qui a le pouvoir de fendre les ténèbres.",
      axe2_voisins: "Le verset 3 mentionne le mal de l'obscurité quand elle envahit. L'aube est l'opposé direct de cette obscurité — le Seigneur de l'aube est donc le protecteur naturel contre le mal de la nuit.",
      axe3_sourate: "La sourate oppose la lumière (l'aube qui fend) aux ténèbres (l'obscurité qui envahit). Le protecteur est le maître de la lumière, les dangers sont dans l'obscurité.",
      axe4_coherence: "Le Coran utilise falaq dans la sourate 6:96 — « Celui qui fend le grain et le noyau ». La fission est un attribut de Dieu : Il fend l'aube, le grain, le noyau. C'est le pouvoir créateur qui sépare et fait naître.",
      axe5_frequence: "L'aube qui fend les ténèbres est le symbole de la vérité qui dissipe le mensonge. La mission humaine de justice est un falaq — fendre l'obscurité de l'injustice par la lumière de la vérité."
    }
  }
}

const shrr_axes = {
  sense_chosen: "mal",
  concept_chosen: "Mal/Méchanceté", // EXACT from DB
  concepts: {
    "Mal/Méchanceté": {
      status: "retenu",
      senses: ["mal", "être mauvais", "méchanceté"],
      proof_ctx: "Le sens retenu est « Mal/Méchanceté ». Le mot sharri est un nom en idafa. Dans le verset 2 il est rattaché à « ma khalaqa » (ce qu'Il a créé), dans le verset 3 à « ghasiq » (obscurité), dans le verset 4 à « an-naffathat » (les souffleuses), dans le verset 5 à « hasid » (envieux). Le sharr est ce contre quoi on cherche refuge — c'est le fil conducteur des versets 2 à 5.",
      axe1_verset: "Le mot sharri est introduit par min (contre) — on cherche refuge CONTRE le mal. Le champ lexical est celui du danger et de la nuisance. Le mal est nommé quatre fois dans la sourate — une fois par type de danger.",
      axe2_voisins: "Chaque verset de 2 à 5 nomme un type de mal différent : le mal de la création, le mal de l'obscurité, le mal des souffleuses, le mal de l'envieux. Le sharr est la catégorie commune qui les relie tous.",
      axe3_sourate: "La sourate est une prière de protection contre le mal. Le sharr est le thème négatif central — c'est ce que la protection divine combat.",
      axe4_coherence: "Le Coran utilise sharr dans la sourate 114 aussi (min sharri al-waswas). Les deux sourates protectrices nomment le mal comme objet de la protection.",
      axe5_frequence: "Identifier et nommer le mal est le premier pas pour le combattre. La mission de justice exige de reconnaître ce qui nuit pour pouvoir le repousser."
    },
    "Sens isolé/Étincelle": { status: "nul", senses: ["étincelle"], proof_ctx: "Hors sujet dans cette sourate." }
  }
}

const xlq_axes = {
  sense_chosen: "Il a créé",
  concept_chosen: "Création/Production", // EXACT from DB
  concepts: {
    "Création/Production": {
      status: "retenu",
      senses: ["créer", "création", "créature", "façonner", "nature", "caractère"],
      proof_ctx: "Le sens retenu est « Création/Production ». Le verbe khalaqa est à l'accompli troisième personne (une forme qui dit que l'action a eu lieu comme fait achevé) — « Il a créé ». Le sujet implicite est Dieu (le Seigneur de l'aube du verset 1). Le verset dit : du mal de ce qu'Il a créé. Toute la création contient du mal potentiel — c'est contre ce mal général qu'on se protège en premier.",
      axe1_verset: "Le verbe khalaqa est relié à « ma » (ce que) et à « sharri » (le mal de). Le champ lexical est celui de la création comme source potentielle de danger. On cherche refuge contre le mal qui existe dans ce que Dieu a créé.",
      axe2_voisins: "Le verset 2 est la protection la plus générale — le mal de TOUTE la création. Les versets 3-5 détaillent ensuite des maux spécifiques (obscurité, sorcellerie, envie). Le verset 2 est le cadre général, les versets 3-5 sont les cas particuliers.",
      axe3_sourate: "La sourate progresse du général au spécifique : d'abord le mal de toute la création (v2), puis le mal de l'obscurité (v3), puis le mal de la sorcellerie (v4), puis le mal de l'envie (v5). La création est le point de départ.",
      axe4_coherence: "Le Coran affirme que Dieu a tout créé (sourate 39:62). La sourate 113 ne contredit pas cela — elle dit simplement que dans cette création, il y a du mal contre lequel il faut se protéger.",
      axe5_frequence: "Reconnaître que le mal existe dans la création est un acte de lucidité — la mission humaine n'est pas de nier le mal mais de le combattre avec l'aide divine."
    },
    "Sens isolé/Lisse": { status: "nul", senses: ["lisse"], proof_ctx: "Hors sujet." },
    "Sens isolé/Mensonge": { status: "nul", senses: ["mensonge"], proof_ctx: "Hors sujet — le verset parle de la création, pas du mensonge." }
  }
}

const gsq_axes = {
  sense_chosen: "obscurité",
  concept_chosen: "Obscurité/Nuit", // EXACT from DB
  concepts: {
    "Obscurité/Nuit": {
      status: "retenu",
      senses: ["obscurité", "nuit tombante", "crépuscule", "ténèbres"],
      proof_ctx: "Le sens retenu est « Obscurité/Nuit ». Le mot ghasiq est un participe actif indéfini (une forme qui dit que c'est ce que la chose FAIT activement) — « une obscurité (qui agit) ». Le test grammatical : un participe actif indéfini peut-il désigner une obscurité qui envahit activement ? Oui — le ghasiq est l'obscurité en mouvement, pas un état passif. Le verset dit « le mal d'une obscurité quand elle pénètre » — l'obscurité est un agent actif du mal.",
      axe1_verset: "Le mot ghasiq est rattaché à sharri (le mal de) et suivi de idha waqab (quand elle pénètre). Le champ lexical est celui de l'obscurité envahissante — un danger qui vient de l'extérieur et s'introduit.",
      axe2_voisins: "Après le mal général de la création (v2), le verset 3 nomme le premier mal spécifique : l'obscurité qui pénètre. L'aube (v1) et l'obscurité (v3) sont les deux pôles de la sourate — lumière contre ténèbres.",
      axe3_sourate: "L'obscurité est l'ennemi naturel de l'aube. Le Seigneur de l'aube (celui qui fend les ténèbres) protège contre le mal de l'obscurité (celle qui envahit). La sourate est construite sur cette opposition.",
      axe4_coherence: "Le Coran mentionne les ténèbres comme cadre du mal dans de nombreux versets. La nuit est le moment où le mal opère — la sourate 113 confirme cette réalité.",
      axe5_frequence: "Reconnaître que l'obscurité — physique et morale — est un cadre propice au mal est une lucidité nécessaire. La mission humaine est de chercher la lumière et de se protéger quand les ténèbres arrivent."
    }
  }
}

const wqb_axes = {
  sense_chosen: "pénètre",
  concept_chosen: "Pénétration/Invasion", // EXACT from DB
  concepts: {
    "Pénétration/Invasion": {
      status: "retenu",
      senses: ["pénétrer", "envahir", "entrer dans", "se répandre"],
      proof_ctx: "Le sens retenu est « Pénétration/Invasion ». Le verbe waqaba est à l'accompli (une forme qui dit que l'action a eu lieu comme fait achevé) — « quand elle a pénétré ». La pénétration de l'obscurité est un mouvement de l'extérieur vers l'intérieur — les ténèbres envahissent l'espace comme un liquide qui se répand. Le test grammatical : un verbe accompli peut-il exprimer la pénétration comme événement achevé ? Oui — le moment où la nuit tombe est un fait ponctuel et décisif.",
      axe1_verset: "Le verbe waqaba complète ghasiq — il décrit ce que fait l'obscurité : elle pénètre. Le champ lexical est celui de l'invasion silencieuse. L'obscurité ne frappe pas — elle s'infiltre.",
      axe2_voisins: "Le verbe waqaba précise le moment du danger : quand l'obscurité pénètre. Ce n'est pas l'obscurité en soi qui est dangereuse, mais le moment où elle envahit — le basculement de la lumière vers les ténèbres.",
      axe3_sourate: "La pénétration de l'obscurité est le moment critique. La sourate protège contre ce moment précis — quand le mal profite du passage de la lumière aux ténèbres.",
      axe4_coherence: "Le Coran décrit la nuit comme un voile qui s'étend (sourate 91:4). Le verbe waqaba précise que cette extension est une pénétration, un envahissement actif.",
      axe5_frequence: "Reconnaître le moment où l'obscurité pénètre — physiquement et moralement — permet de se préparer et de chercher la protection. La vigilance est un devoir du khalifa."
    }
  }
}

const nfv_axes = {
  sense_chosen: "les souffleuses",
  concept_chosen: "Souffle/Crachat", // EXACT from DB
  concepts: {
    "Souffle/Crachat": {
      status: "retenu",
      senses: ["souffler", "cracher légèrement", "expectorer", "insuffler"],
      proof_ctx: "Le sens retenu est « Souffle/Crachat ». Le mot an-naffathat est un participe actif féminin pluriel défini avec al- (une forme qui dit que ce sont des personnes qui FONT l'action activement et en continu) — « les souffleuses ». Ce sont celles qui soufflent sur les nœuds — un acte de sorcellerie. Le souffle est directionnel : il sort de la bouche et atteint les nœuds. Le test grammatical : un participe actif féminin pluriel défini peut-il désigner des personnes qui soufflent activement ? Oui — les naffathat sont identifiées par leur acte continu de souffler.",
      axe1_verset: "Le mot an-naffathat est rattaché à sharri (le mal de) et complété par fi al-uqad (dans les nœuds). Le champ lexical est celui de la sorcellerie — le souffle sur les nœuds est un acte magique.",
      axe2_voisins: "Après le mal de la création (v2) et le mal de l'obscurité (v3), le verset 4 nomme le mal de la sorcellerie. La progression va du naturel (création, obscurité) vers l'humain (sorcellerie, envie).",
      axe3_sourate: "La sourate couvre tous les types de mal : naturel (v2-3) et humain (v4-5). Les souffleuses représentent le mal intentionnel — quelqu'un qui utilise un savoir pour nuire.",
      axe4_coherence: "Le Coran mentionne la sorcellerie dans la sourate 2:102 (les deux anges de Babylone). La sourate 113 protège contre ce type de mal sans entrer dans les détails de la sorcellerie.",
      axe5_frequence: "Se protéger contre le mal intentionnel — la manipulation, la sorcellerie — fait partie de la vigilance du khalifa. Le mal n'est pas toujours accidentel, il peut être prémédité."
    }
  }
}

const eqd_axes = {
  sense_chosen: "les nœuds",
  concept_chosen: "Nœud/Contrat", // EXACT from DB
  concepts: {
    "Nœud/Contrat": {
      status: "retenu",
      senses: ["nouer", "contracter", "pacte"],
      proof_ctx: "Le sens retenu est « Nœud/Contrat ». Le mot al-uqad est le pluriel de uqda (nœud) défini avec al- — les nœuds connus. Dans ce contexte, ce sont les nœuds sur lesquels on souffle pour faire de la sorcellerie. Le nœud est un acte de lier — la sorcellerie lie et emprisonne. Le test grammatical : un nom défini pluriel peut-il désigner les nœuds comme réalité connue ? Oui — les nœuds de sorcellerie sont un phénomène identifié.",
      axe1_verset: "Le mot al-uqad est le lieu où les souffleuses exercent leur mal — « dans les nœuds ». Le champ lexical est celui de l'entrave et de la ligature magique.",
      axe2_voisins: "Le verset 4 combine les souffleuses et les nœuds — le souffle et la ligature sont les deux composantes de l'acte de sorcellerie. C'est une description complète du processus.",
      axe3_sourate: "Les nœuds sont l'outil de la sorcellerie mentionnée dans cette sourate — le mal intentionnel qui emprisonne et entrave.",
      axe4_coherence: "Le Coran mentionne le fait de nouer dans d'autres contextes (pactes, serments). Dans la sourate 113, le nœud est spécifiquement le nœud de sorcellerie.",
      axe5_frequence: "Se libérer des entraves — physiques et morales — est nécessaire pour accomplir la mission de justice. Les nœuds de sorcellerie symbolisent tout ce qui emprisonne l'esprit et empêche d'agir librement."
    },
    "Détermination": {
      status: "peu_probable",
      senses: ["résolution ferme"],
      proof_ctx: "La détermination est un nœud intérieur de la volonté — une décision ferme. Le verset parle de nœuds extérieurs sur lesquels on souffle pour faire de la sorcellerie. La résolution est positive (se décider fermement), les nœuds de sorcellerie sont négatifs (entraver quelqu'un). Le contexte exclut le sens de détermination.",
      axe1_verset: "Le champ lexical est celui de la sorcellerie (souffleuses + nœuds). La détermination n'a pas de place dans ce contexte de mal intentionnel.",
      axe2_voisins: "Les versets voisins parlent de maux — création, obscurité, envie. La résolution ferme n'est pas un mal.",
      axe3_sourate: "Le thème est la protection contre le mal, pas la résolution personnelle.",
      axe4_coherence: "Le sens de résolution est attesté dans d'autres contextes mais jamais associé à des souffleuses.",
      axe5_frequence: "La résolution ferme est positive et ne peut pas être objet de protection contre le mal."
    },
    "Sens isolé/Nœud": { status: "nul", senses: ["nœud de magie"], proof_ctx: "Ce sens rejoint le concept principal Nœud/Contrat dans ce contexte de sorcellerie." }
  }
}

const hsd_axes = {
  sense_chosen: "envieux",
  concept_chosen: "Envie/Jalousie", // EXACT from DB
  concepts: {
    "Envie/Jalousie": {
      status: "retenu",
      senses: ["envier", "jalousie", "convoitise"],
      proof_ctx: "Le sens retenu est « Envie/Jalousie ». Le mot hasid est un participe actif indéfini (une forme qui dit que la personne FAIT l'action activement) — « un envieux ». Le verbe hasada qui suit est à l'accompli — « quand il a envié ». Le participe actif montre que l'envie est une action continue chez l'envieux, et l'accompli précise le moment du danger : quand l'envie se déclenche comme acte. Le mal de l'envieux est directionnel — il sort de l'envieux et vise celui qui possède ce qu'il n'a pas.",
      axe1_verset: "Le mot hasid est rattaché à sharri (le mal de) et suivi de idha hasada (quand il a envié). Le champ lexical est celui de la convoitise destructrice — l'envieux veut que l'autre perde ce qu'il a.",
      axe2_voisins: "Après le mal naturel (v2-3) et le mal de la sorcellerie (v4), le verset 5 nomme le mal le plus humain : l'envie. La progression est complète — du cosmique au personnel.",
      axe3_sourate: "L'envie est le dernier mal nommé dans la sourate — le plus intime et le plus humain. La sourate se termine par le mal qui naît dans le cœur des gens, pas dans la nature.",
      axe4_coherence: "Le Coran mentionne l'envie dans d'autres contextes (sourate 2:109 — beaucoup de gens du Livre voudraient vous ramener à la mécréance par envie). L'envie est un danger récurrent identifié par le Coran.",
      axe5_frequence: "Se protéger contre l'envie — celle des autres et la sienne — est fondamental pour la mission de justice. L'envie corrompt les relations humaines et détruit la confiance nécessaire à la civilisation."
    }
  }
}

// ========================================================================
// ÉTAPE 4 — TRANSLATIONS
// ========================================================================

const translations = {
  1: {
    verse_id: V[1],
    translation_arab: "Dis : « Je cherche refuge auprès du Seigneur de l'aube,",
    translation_explanation: `§DEMARCHE§

Le mot **qul** est un verbe à l'impératif (une forme qui donne un ordre) — c'est Dieu qui ordonne au Prophète de prononcer cette invocation de protection. Cette sourate et la sourate 114 (an-Nas) sont appelées « les deux protectrices » car elles commencent toutes les deux par cet ordre de demander refuge.

Le verbe **a'udhu** est à l'inaccompli première personne (une forme qui dit que l'action est en cours et habituelle) — « je cherche refuge habituellement ». Ce n'est pas une demande ponctuelle mais une habitude de vie.

La préposition **bi** (auprès de) indique vers qui on se tourne pour la protection. Elle est suivie de **rabbi** (le Seigneur), rattaché à **al-falaq** par une idafa (c'est quand deux mots sont liés pour dire que le premier appartient au second). Rabbi al-falaq = le Seigneur de l'aube.

Le mot **al-falaq** vient d'une racine qui signifie « fendre, séparer ». L'aube est le moment où la lumière fend l'obscurité. On cherche refuge auprès de Celui qui a le pouvoir de déchirer les ténèbres — et les versets suivants vont justement parler du mal de l'obscurité.

§JUSTIFICATION§

**dis** — Le sens retenu est « Parole/Énonciation ». Le mot « dis » est choisi car c'est l'impératif direct en français courant. L'alternative « parle » est écartée car « parle » est plus vague. L'alternative « déclare » est écartée car c'est du registre officiel.

**je cherche refuge** — Le sens retenu est « Refuge/Protection ». L'expression « je cherche refuge » est choisie car elle capture le mouvement actif de se mettre sous la protection de quelqu'un. L'alternative « je me réfugie » est écartée car elle est plus passive.

**Seigneur** — Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot « Seigneur » est choisi car il capture l'autorité qui élève et protège. L'alternative « maître » est écartée car elle insiste sur le pouvoir de commander, alors que « Seigneur » insiste sur la responsabilité de protéger.

**l'aube** — Le sens retenu est « Fission/Aube ». Le mot « aube » est choisi car il capture le moment où la lumière fend l'obscurité — le sens premier de la racine f-l-q. L'alternative « fissure » est écartée car elle est trop abstraite. L'alternative « lever du jour » est écartée car c'est une périphrase.`,
    segments: [
      {fr:"dis",pos:"verbe",phon:"qul",arabic:"قُلْ",position:1,word_key:"qwl",is_particle:false,sense_retenu:"parole"},
      {fr:"je cherche refuge",pos:"verbe",phon:"a'udhu",arabic:"أَعُوذُ",position:2,word_key:"ew",is_particle:false,sense_retenu:"protection"},
      {fr:"auprès du Seigneur",pos:"nom",phon:"bi rabbi",arabic:"بِرَبِّ",position:3,word_key:"rbb",is_particle:false,sense_retenu:"seigneur"},
      {fr:"de l'aube",pos:"nom",phon:"al-falaq",arabic:"ٱلْفَلَقِ",position:4,word_key:"flq",is_particle:false,sense_retenu:"aube"}
    ]
  },
  2: {
    verse_id: V[2],
    translation_arab: "contre le mal de ce qu'Il a créé,",
    translation_explanation: `§DEMARCHE§

La préposition **min** (de/contre) complète le verbe a'udhu du verset 1 — « je cherche refuge contre ». Elle introduit le premier des quatre maux contre lesquels on se protège.

Le mot **sharri** est un nom en idafa rattaché à **ma khalaqa** (ce qu'Il a créé) — le mal de ce qu'Il a créé. C'est la protection la plus générale : tout ce que Dieu a créé peut contenir du mal potentiel.

Le pronom relatif **ma** (ce que) introduit le complément.

Le verbe **khalaqa** est à l'accompli troisième personne (une forme qui dit que l'action a eu lieu comme fait achevé) — « Il a créé ». Le sujet implicite est Dieu, le Seigneur de l'aube mentionné au verset 1. L'accompli indique que la création est un fait achevé — elle existe déjà et contient en elle du mal contre lequel il faut se prémunir.

§JUSTIFICATION§

**mal** — Le sens retenu est « Mal/Méchanceté ». Le mot « mal » est choisi car c'est le français courant le plus direct pour sharr. L'alternative « méchanceté » est écartée car elle désigne un caractère, alors que « mal » est plus large — il couvre toute nuisance.

**Il a créé** — Le sens retenu est « Création/Production ». L'expression « Il a créé » rend le verbe accompli à la 3ème personne. L'alternative « Sa création » (nom) est écartée car le texte utilise un verbe, pas un nom — il dit « ce qu'Il a créé » (action achevée), pas « Sa création » (résultat statique).`,
    segments: [
      {fr:"contre",phon:"min",arabic:"مِن",position:1,word_key:null,is_particle:true},
      {fr:"le mal",pos:"nom",phon:"sharri",arabic:"شَرِّ",position:2,word_key:"shrr",is_particle:false,sense_retenu:"mal"},
      {fr:"de ce que",phon:"ma",arabic:"مَا",position:3,word_key:null,is_particle:true},
      {fr:"Il a créé",pos:"verbe",phon:"khalaqa",arabic:"خَلَقَ",position:4,word_key:"xlq",is_particle:false,sense_retenu:"création"}
    ]
  },
  3: {
    verse_id: V[3],
    translation_arab: "et contre le mal d'une obscurité quand elle pénètre,",
    translation_explanation: `§DEMARCHE§

La conjonction **wa** (et) lie ce verset au précédent — c'est le deuxième mal contre lequel on se protège. La préposition **min** (contre) et le mot **sharri** (le mal de) sont répétés.

Le mot **ghasiq** est un participe actif indéfini (une forme qui dit que c'est ce que la chose FAIT activement, sans article défini ce qui laisse le sens ouvert et général) — « une obscurité (active) ». Le participe actif dit que l'obscurité n'est pas un état passif mais un agent qui agit.

La particule **idha** (quand) introduit une condition temporelle — le danger est lié à un moment précis.

Le verbe **waqaba** est à l'accompli (une forme qui dit que l'action a eu lieu comme fait achevé) — « quand elle a pénétré ». Le verbe waqaba signifie pénétrer, envahir. La nuit ne tombe pas simplement — elle pénètre, elle envahit l'espace. C'est un mouvement actif et directionnel.

L'opposition avec le verset 1 est frappante : le Seigneur de l'aube (celui qui fend les ténèbres) protège contre l'obscurité qui pénètre. Lumière contre ténèbres.

§JUSTIFICATION§

**obscurité** — Le sens retenu est « Obscurité/Nuit ». Le mot « obscurité » est choisi car il capture l'état actif d'assombrissement. L'alternative « nuit » est écartée car « nuit » est neutre (on peut avoir une belle nuit), alors que « obscurité » porte la connotation de danger et d'absence de lumière. L'alternative « ténèbres » est écartée car c'est du registre littéraire.

**pénètre** — Le sens retenu est « Pénétration/Invasion ». Le mot « pénètre » est choisi car il capture le mouvement d'invasion — l'obscurité entre dans l'espace comme un intrus. L'alternative « tombe » (la nuit tombe) est écartée car « tomber » est vertical et passif, alors que « pénétrer » est horizontal et actif — l'obscurité s'infiltre de partout.`,
    segments: [
      {fr:"et contre",phon:"wa min",arabic:"وَمِن",position:1,word_key:null,is_particle:true},
      {fr:"le mal",pos:"nom",phon:"sharri",arabic:"شَرِّ",position:2,word_key:"shrr",is_particle:false,sense_retenu:"mal"},
      {fr:"d'une obscurité",pos:"nom",phon:"ghasiq",arabic:"غَاسِقٍ",position:3,word_key:"gsq",is_particle:false,sense_retenu:"obscurité"},
      {fr:"quand",phon:"idha",arabic:"إِذَا",position:4,word_key:null,is_particle:true},
      {fr:"elle pénètre",pos:"verbe",phon:"waqab",arabic:"وَقَبَ",position:5,word_key:"wqb",is_particle:false,sense_retenu:"pénétration"}
    ]
  },
  4: {
    verse_id: V[4],
    translation_arab: "et contre le mal des souffleuses dans les nœuds,",
    translation_explanation: `§DEMARCHE§

La conjonction **wa** et la préposition **min sharri** (et contre le mal de) introduisent le troisième type de mal.

Le mot **an-naffathat** est un participe actif féminin pluriel défini avec al- (une forme qui dit que ce sont des personnes identifiées qui FONT l'action activement et en continu) — « les souffleuses ». Le féminin pluriel indique des femmes qui pratiquent la sorcellerie par le souffle. Le participe actif dit que c'est leur activité permanente, pas un acte isolé.

La préposition **fi** (dans) indique le lieu de l'action.

Le mot **al-uqad** est le pluriel de uqda (nœud) défini avec al- — les nœuds. Les souffleuses soufflent sur des nœuds pour pratiquer la sorcellerie. Le souffle sur les nœuds est un acte de magie qui lie et entrave — c'est le mal intentionnel, contrairement au mal naturel de l'obscurité (verset 3).

§JUSTIFICATION§

**les souffleuses** — Le sens retenu est « Souffle/Crachat ». Le mot « souffleuses » est choisi car il capture l'acte précis : des personnes qui soufflent. L'alternative « les ensorceleuses » est écartée car c'est du vocabulaire d'exégèse — le texte décrit l'acte (souffler), pas le statut (sorcière). L'alternative « celles qui crachent » est écartée car le nafth est un souffle léger, pas un crachat.

**les nœuds** — Le sens retenu est « Nœud/Contrat ». Le mot « nœuds » est choisi car il décrit exactement l'objet physique sur lequel on souffle. L'alternative « liens » est écartée car « lien » est plus abstrait — le nœud est concret et visible. L'alternative « pactes » est écartée car le contexte est la sorcellerie, pas les accords.`,
    segments: [
      {fr:"et contre",phon:"wa min",arabic:"وَمِن",position:1,word_key:null,is_particle:true},
      {fr:"le mal",pos:"nom",phon:"sharri",arabic:"شَرِّ",position:2,word_key:"shrr",is_particle:false,sense_retenu:"mal"},
      {fr:"des souffleuses",pos:"nom",phon:"an-naffathat",arabic:"ٱلنَّفَّـٰثَـٰتِ",position:3,word_key:"nfv",is_particle:false,sense_retenu:"souffle"},
      {fr:"dans",phon:"fi",arabic:"فِى",position:4,word_key:null,is_particle:true},
      {fr:"les nœuds",pos:"nom",phon:"al-uqad",arabic:"ٱلْعُقَدِ",position:5,word_key:"eqd",is_particle:false,sense_retenu:"nœud"}
    ]
  },
  5: {
    verse_id: V[5],
    translation_arab: "et contre le mal d'un envieux quand il envie. »",
    translation_explanation: `§DEMARCHE§

La conjonction **wa** et la préposition **min sharri** (et contre le mal de) introduisent le quatrième et dernier type de mal.

Le mot **hasid** est un participe actif indéfini (une forme qui dit que la personne FAIT l'action activement, sans article défini ce qui généralise — n'importe quel envieux) — « un envieux ». Le participe actif dit que l'envie est ce que la personne fait activement et continuellement — c'est son identité.

La particule **idha** (quand) introduit la condition temporelle — le mal de l'envieux se déclenche à un moment précis.

Le verbe **hasada** est à l'accompli (une forme qui dit que l'action a eu lieu comme fait achevé) — « quand il a envié ». L'accompli marque le moment où l'envie passe de l'état latent à l'acte — quand le sentiment intérieur se transforme en intention de nuire.

La progression de la sourate est complète : le mal de toute la création (v2, le plus général), le mal de l'obscurité (v3, naturel), le mal de la sorcellerie (v4, intentionnel par un savoir), le mal de l'envie (v5, intentionnel par un sentiment). Du cosmique à l'intime.

§JUSTIFICATION§

**envieux** — Le sens retenu est « Envie/Jalousie ». Le mot « envieux » est choisi car il désigne celui qui pratique l'envie comme trait de caractère (participe actif). L'alternative « jaloux » est écartée car la jalousie est la peur de perdre ce qu'on a, alors que l'envie (hasad) est le désir que l'autre perde ce qu'il a — c'est plus destructeur. L'alternative « convoiteur » est écartée car la convoitise est le désir d'avoir, alors que l'envie est le désir que l'autre n'ait plus.

**envie** — Le verbe « envie » rend l'accompli arabe hasada. L'alternative « a été jaloux » est écartée pour la même raison — la jalousie n'est pas le hasad.`,
    segments: [
      {fr:"et contre",phon:"wa min",arabic:"وَمِن",position:1,word_key:null,is_particle:true},
      {fr:"le mal",pos:"nom",phon:"sharri",arabic:"شَرِّ",position:2,word_key:"shrr",is_particle:false,sense_retenu:"mal"},
      {fr:"d'un envieux",pos:"nom",phon:"hasid",arabic:"حَاسِدٍ",position:3,word_key:"hsd",is_particle:false,sense_retenu:"envie"},
      {fr:"quand",phon:"idha",arabic:"إِذَا",position:4,word_key:null,is_particle:true},
      {fr:"il envie",pos:"verbe",phon:"hasad",arabic:"حَسَدَ",position:5,word_key:"hsd",is_particle:false,sense_retenu:"envie"}
    ]
  }
}

// ========================================================================
// INSERTION + VÉRIFICATION FINALE
// ========================================================================

async function run() {
  console.log('=== INSERTION SOURATE 113 ===')

  // 1. verse_word_analyses
  const wordAnalyses = [
    {verse_id:V[1],word_key:'qwl',sense_chosen:'parole',analysis_axes:qwl_axes,position:1},
    {verse_id:V[1],word_key:'ew',sense_chosen:'protection',analysis_axes:ew_axes,position:2},
    {verse_id:V[1],word_key:'rbb',sense_chosen:'seigneur',analysis_axes:rbb_axes,position:3},
    {verse_id:V[1],word_key:'flq',sense_chosen:'aube',analysis_axes:flq_axes,position:4},
    {verse_id:V[2],word_key:'shrr',sense_chosen:'mal',analysis_axes:shrr_axes,position:2},
    {verse_id:V[2],word_key:'xlq',sense_chosen:'création',analysis_axes:xlq_axes,position:4},
    {verse_id:V[3],word_key:'shrr',sense_chosen:'mal',analysis_axes:shrr_axes,position:2},
    {verse_id:V[3],word_key:'gsq',sense_chosen:'obscurité',analysis_axes:gsq_axes,position:3},
    {verse_id:V[3],word_key:'wqb',sense_chosen:'pénétration',analysis_axes:wqb_axes,position:5},
    {verse_id:V[4],word_key:'shrr',sense_chosen:'mal',analysis_axes:shrr_axes,position:2},
    {verse_id:V[4],word_key:'nfv',sense_chosen:'souffle',analysis_axes:nfv_axes,position:3},
    {verse_id:V[4],word_key:'eqd',sense_chosen:'nœud',analysis_axes:eqd_axes,position:5},
    {verse_id:V[5],word_key:'shrr',sense_chosen:'mal',analysis_axes:shrr_axes,position:2},
    {verse_id:V[5],word_key:'hsd',sense_chosen:'envie',analysis_axes:hsd_axes,position:3},
    {verse_id:V[5],word_key:'hsd',sense_chosen:'envie',analysis_axes:hsd_axes,position:5},
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
    {word_key:'flq',sense:'aube',arabic:'سُبحَانَ رَبِّ الفَلَق',phon:'subhana rabbi al-falaq',french:'Gloire au Seigneur de l\'aube.'},
    {word_key:'flq',sense:'aube',arabic:'الفَلَقُ يَبدَأُ',phon:'al-falaqu yabda\'u',french:'L\'aube commence (la lumière fend l\'obscurité).'},
    {word_key:'flq',sense:'aube',arabic:'فَلَقَ الحَبَّ وَالنَّوَى',phon:'falaqa al-habba wa an-nawa',french:'Il a fendu le grain et le noyau.'},
    {word_key:'hsd',sense:'envie',arabic:'الحَسَدُ يَأكُلُ الحَسَنَات',phon:'al-hasadu ya\'kulu al-hasanat',french:'L\'envie consume les bonnes actions.'},
    {word_key:'hsd',sense:'envie',arabic:'لا تَحسُد أَخَاكَ',phon:'la tahsud akhaka',french:'N\'envie pas ton frère.'},
    {word_key:'hsd',sense:'envie',arabic:'الحَسَدُ دَاءُ الأُمَم',phon:'al-hasadu da\'u al-umam',french:'L\'envie est la maladie des nations.'},
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

  // ========================================================================
  // VÉRIFICATION FINALE — Checklist
  // ========================================================================
  console.log('\n=== VÉRIFICATION CHECKLIST ===')

  // Check concept_chosen matches word_meanings for ALL entries
  let mismatches = 0
  for (const wa of wordAnalyses) {
    const axes = wa.analysis_axes
    if (!axes || !axes.concept_chosen) continue
    const {data: waData} = await db.from('word_analyses').select('id').eq('word_key', wa.word_key).limit(1)
    if (!waData || !waData[0]) continue
    const {data: m} = await db.from('word_meanings').select('concept').eq('analysis_id', waData[0].id).not('concept','is',null)
    const wmConcepts = [...new Set(m.map(x => x.concept))]
    if (!wmConcepts.includes(axes.concept_chosen)) {
      console.log('❌ MISMATCH: ' + wa.word_key + ' concept_chosen="' + axes.concept_chosen + '" not in word_meanings')
      mismatches++
    }
  }
  if (mismatches === 0) console.log('✅ Tous les concept_chosen matchent word_meanings')

  // Check no English in axes
  let englishFound = false
  for (const wa of wordAnalyses) {
    const axes = wa.analysis_axes
    if (!axes || !axes.concepts) continue
    for (const [name, c] of Object.entries(axes.concepts)) {
      const texts = [c.proof_ctx, c.axe1_verset, c.axe2_voisins, c.axe3_sourate, c.axe4_coherence, c.axe5_frequence].filter(Boolean)
      for (const t of texts) {
        if (t.match(/\b(the|and|of|that|which|this|from|with|has|have|was|were|been|being)\b/i)) {
          console.log('❌ English found in ' + wa.word_key + '/' + name)
          englishFound = true
        }
      }
    }
  }
  if (!englishFound) console.log('✅ Pas d\'anglais dans les axes')

  // Check no "concept" word in translations
  let conceptWordFound = false
  for (const [vnum, t] of Object.entries(translations)) {
    if (t.translation_explanation.match(/\bconcept\b/i)) {
      console.log('❌ Mot "concept" trouvé dans verset ' + vnum)
      conceptWordFound = true
    }
  }
  if (!conceptWordFound) console.log('✅ Pas de mot "concept" dans les démarches')

  // Check §DEMARCHE§ and §JUSTIFICATION§ in all translations
  let missingStructure = false
  for (const [vnum, t] of Object.entries(translations)) {
    if (!t.translation_explanation.includes('§DEMARCHE§')) {
      console.log('❌ §DEMARCHE§ manquant dans verset ' + vnum)
      missingStructure = true
    }
    if (!t.translation_explanation.includes('§JUSTIFICATION§')) {
      console.log('❌ §JUSTIFICATION§ manquant dans verset ' + vnum)
      missingStructure = true
    }
  }
  if (!missingStructure) console.log('✅ §DEMARCHE§ et §JUSTIFICATION§ présents dans tous les versets')

  // LOGS
  console.log('\n=== LOGS FINAUX ===')
  for (const [vnum, t] of Object.entries(translations)) {
    const words = t.segments.filter(s => !s.is_particle).map(s => s.word_key + ' → "' + s.fr + '"').join(', ')
    console.log('VERSET 113:' + vnum + ' — ' + words)
    console.log('  Traduction : ' + t.translation_arab)
  }
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
