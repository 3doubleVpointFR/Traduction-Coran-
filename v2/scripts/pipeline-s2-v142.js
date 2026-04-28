const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 142
// verse_id=149, analysis_id=509
// "Les insenses parmi les gens diront : 'Qu'est-ce qui
//  les a detournes de la direction de priere vers laquelle
//  ils se tournaient ?' Dis : 'A Dieu appartiennent l'Orient
//  et l'Occident. Il guide qui Il veut vers un chemin droit.'"
// =====================================================

const verseData = {
  142: {
    verse_id: 149,
    analysis_id: 509,
    translation_arab: "Diront les insenses parmi les gens : qu'est-ce qui les a detournes de leur direction de priere vers laquelle ils etaient ? Dis : a Dieu appartiennent l'orient et l'occident. Il guide qui Il veut vers un chemin droit.",
    full_translation: "Les faibles d'esprit parmi les gens vont dire : \"Qui les a detournes de la direction (de La Mecque) vers laquelle ils s'orientaient ?\" Dis : \"C'est a Allah qu'appartiennent le Levant et le Couchant. Il guide qui Il veut vers un chemin droit.\"",
    translation_explanation: `§DEMARCHE§
Le verset inaugure la section sur le changement de qibla (de Jerusalem vers la Mecque). Il se divise en deux parties : la question moqueuse des insenses et la reponse divine. Le verbe **sayaqulu** est un inaccompli 3MP precede de la particule du futur « sa- » de la racine q-w-l. Le Lane's donne : dire, prononcer, parler. L'inaccompli avec « sa- » indique une action future certaine — les insenses diront cela. Ce n'est pas une hypothese mais une prediction : Dieu annonce a l'avance la reaction des detracteurs. Le nom **as-sufaha'u** est un pluriel brise masculin defini de la racine s-f-h. Le Lane's donne : insense, leger d'esprit, stupide, celui qui manque de discernement. Le pluriel brise (sufaha') indique une pluralite eclatee — des individus disperses unis par un trait commun : leur legerete d'esprit. L'article defini « al- » marque une categorie connue — les insenses, ceux qu'on connait pour leur legerete. Le nom **an-nasi** est un nom collectif defini de la racine n-w-s. Le Lane's donne : gens, etres humains, humanite. La preposition « min » (parmi) situe les insenses dans l'ensemble des gens — ils en font partie mais ne le representent pas en totalite. Le verbe **wallahum** est un accompli 3MS de la racine w-l-y avec pronom suffixe 3MP. Le Lane's donne : tourner, se detourner, confier. La forme tawalla/walla signifie tourner le dos ou se detourner. Ici la question porte sur ce qui les a detournes de leur qibla. Le nom **qiblatihimu** est un nom feminin singulier defini au genitif avec pronom suffixe 3MP de la racine q-b-l. Le Lane's donne : direction vers laquelle on fait face, direction de priere. La qibla est la direction que l'on prend pour prier — c'est un point d'orientation physique et spirituel. Le pronom « him » (leur) rattache la qibla aux musulmans — c'etait leur direction de priere habituelle. Le verbe **kanu** est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister. L'accompli de « kana » cree un passe revolu — ils etaient sur cette qibla mais ne le sont plus. Ce verbe marque le changement d'etat — avant ils se tournaient vers Jerusalem, maintenant ce n'est plus le cas. Le nom **al-mashriqu** est un nom de lieu defini de la racine sh-r-q. Le Lane's donne : lieu du lever du soleil, orient, est. Le mashriq est le point cardinal ou le soleil apparait. L'article defini « al- » marque l'unicite — il n'y a qu'un orient. Le nom **al-maghribu** est un nom de lieu defini de la racine gh-r-b. Le Lane's donne : lieu du coucher du soleil, occident, ouest. Le maghrib est le point cardinal ou le soleil disparait. Ensemble, le mashriq et le maghrib designent la totalite de l'espace terrestre — d'est en ouest, tout appartient a Dieu. Le verbe **yahdi** est un inaccompli 3MS de la racine h-d-y. Le Lane's donne : guider, diriger vers la bonne voie, montrer le chemin. L'inaccompli indique une action continue et renouvelable — Dieu guide sans cesse. Le verbe **yasha'u** est un inaccompli 3MS de la racine sh-y-a. Le Lane's donne : vouloir, desirer. L'inaccompli indique que la volonte divine est permanente et active. Le « man yasha'u » (qui Il veut) montre que la guidance est un acte de volonte divine — Dieu choisit qui guider. Le nom **siratin** est un nom masculin singulier indefini au genitif de la racine s-r-t. Le Lane's donne : chemin, voie, route. Le sirat est le chemin qu'on emprunte — directionnel et concret. L'indefini marque un chemin parmi les chemins possibles, mais qualifie par « mustaqim » il devient le chemin par excellence. Le nom **mustaqimin** est un participe actif de la forme X de la racine q-w-m au genitif. Le Lane's donne : droit, sans deviation, correct. La forme X (istaqama) signifie se tenir droit par soi-meme, etre rectiligne. Le participe actif qualifie le chemin — c'est un chemin qui se tient droit, sans courbe ni deviation. Le sirat mustaqim est le chemin droit de Dieu.

§JUSTIFICATION§
**diront** — Le sens retenu est « dire ». Le verbe sayaqulu est un inaccompli avec « sa- » qui annonce une parole future. L'alternative « opinion » est ecartee car le contexte est une parole prononcee, pas une pensee interieure.

**les insenses** — Le sens retenu est « insense ». Le mot as-sufaha'u designe ceux qui manquent de discernement et de sagesse. L'alternative « agitation » est ecartee car le contexte qualifie des personnes par leur etat mental, pas par un mouvement physique.

**les gens** — Le sens retenu est « gens ». Le mot an-nasi designe les etres humains collectivement. L'alternative « voir de loin » est ecartee car le mot est un nom collectif, pas un verbe de perception.

**les a detournes** — Le sens retenu est « tourner/detourner ». Le verbe wallahum designe l'acte de se detourner d'une direction. L'alternative « protecteur » est ecartee car le contexte est un mouvement directionnel, pas une relation de protection.

**leur direction de priere** — Le sens retenu est « direction/se tourner vers ». Le mot qiblatihimu designe la direction vers laquelle on se tourne pour prier. L'alternative « recevoir » est ecartee car le contexte est une orientation spatiale, pas une reception.

**ils etaient** — Le sens retenu est « etre ». Le verbe kanu est un verbe incomplet qui porte le temps (passe revolu). L'alternative « lieu » est ecartee car le verbe est utilise comme copule, pas comme nom.

**l'orient** — Le sens retenu est « orient ». Le mot al-mashriqu designe le point cardinal du lever du soleil. Il n'y a pas d'alternative concurrente serieuse dans ce contexte.

**l'occident** — Le sens retenu est « occident ». Le mot al-maghribu designe le point cardinal du coucher du soleil. L'alternative « etranger » est ecartee car le contexte est spatial, pas social.

**guide** — Le sens retenu est « guider ». Le verbe yahdi designe l'acte de montrer le chemin. L'alternative « cadeau » est ecartee car le verbe est a l'inaccompli actif, pas un nom.

**Il veut** — Le sens retenu est « vouloir ». Le verbe yasha'u designe la volonte divine. L'alternative « chose » est ecartee car le verbe est a l'inaccompli, pas un nom.

**un chemin** — Le sens retenu est « chemin ». Le mot siratin designe une voie qu'on emprunte. L'alternative « epee longue » est ecartee car le contexte est la guidance divine vers une voie, pas un objet guerrier.

**droit** — Le sens retenu est « droit ». Le mot mustaqimin qualifie le chemin comme rectiligne et sans deviation. L'alternative « peuple » est ecartee car le mot est un adjectif qualifiant le chemin, pas un nom designant des gens.

§CRITIQUE§
La traduction de Hamidullah donne « les faibles d'esprit » pour as-sufaha'u, ce qui est une traduction legitime mais interpretative — « faibles d'esprit » evoque un handicap mental, alors que s-f-h designe la legerete et l'insensibilite, un defaut de caractere plus qu'un handicap. Nous retenons « insenses » qui est plus proche de l'etymologie. Hamidullah ajoute « (de La Mecque) » entre parentheses pour preciser la nouvelle direction, ce qui est une glose interpretative absente du texte arabe. Nous ne l'ajoutons pas. Le reste de la traduction est equivalent dans les deux versions.`,
    segments: [
      { fr: "diront", pos: "verbe", phon: "sayaqulu", arabic: "\u0633\u064e\u064a\u064e\u0642\u064f\u0648\u0644\u064f", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "les insenses", pos: "nom", phon: "as-sufaha'u", arabic: "\u0671\u0644\u0633\u0651\u064f\u0641\u064e\u0647\u064e\u0627\u0653\u0621\u064f", word_key: "sfh", is_particle: false, sense_retenu: "insense", position: 2 },
      { fr: "parmi les gens", pos: "nom", phon: "mina an-nasi", arabic: "\u0645\u0650\u0646\u064e \u0671\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 3 },
      { fr: "qu'est-ce qui les a detournes", pos: "verbe", phon: "ma wallahum", arabic: "\u0645\u064e\u0627 \u0648\u064e\u0644\u0651\u0640\u0670\u0647\u064f\u0645\u0652", word_key: "wly", is_particle: false, sense_retenu: "detourner", position: 4 },
      { fr: "de leur direction de priere", pos: "nom", phon: "'an qiblatihimu", arabic: "\u0639\u064e\u0646 \u0642\u0650\u0628\u0652\u0644\u064e\u062a\u0650\u0647\u0650\u0645\u064f", word_key: "qbl", is_particle: false, sense_retenu: "direction de priere", position: 5 },
      { fr: "vers laquelle", phon: "allati", arabic: "\u0671\u0644\u0651\u064e\u062a\u0650\u0649", is_particle: true, position: 6 },
      { fr: "ils etaient", pos: "verbe", phon: "kanu", arabic: "\u0643\u064e\u0627\u0646\u064f\u0648\u0627\u06df", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 7 },
      { fr: "sur elle", phon: "'alayha", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u064e\u0627", is_particle: true, position: 8 },
      { fr: "l'orient", pos: "nom", phon: "al-mashriqu", arabic: "\u0671\u0644\u0652\u0645\u064e\u0634\u0652\u0631\u0650\u0642\u064f", word_key: "shrq", is_particle: false, sense_retenu: "orient", position: 9 },
      { fr: "et l'occident", pos: "nom", phon: "wa-al-maghribu", arabic: "\u0648\u064e\u0671\u0644\u0652\u0645\u064e\u063a\u0652\u0631\u0650\u0628\u064f", word_key: "ghrb", is_particle: false, sense_retenu: "occident", position: 10 },
      { fr: "Il guide", pos: "verbe", phon: "yahdi", arabic: "\u064a\u064e\u0647\u0652\u062f\u0650\u0649", word_key: "hdy", is_particle: false, sense_retenu: "guider", position: 11 },
      { fr: "qui", phon: "man", arabic: "\u0645\u064e\u0646", is_particle: true, position: 12 },
      { fr: "Il veut", pos: "verbe", phon: "yasha'u", arabic: "\u064a\u064e\u0634\u064e\u0627\u0653\u0621\u064f", word_key: "shy", is_particle: false, sense_retenu: "vouloir", position: 13 },
      { fr: "un chemin", pos: "nom", phon: "siratin", arabic: "\u0635\u0650\u0631\u064e\u0640\u0637\u064d", word_key: "srt", is_particle: false, sense_retenu: "chemin", position: 14 },
      { fr: "droit", pos: "adjectif", phon: "mustaqimin", arabic: "\u0645\u0651\u064f\u0633\u0652\u062a\u064e\u0642\u0650\u064a\u0645\u064d", word_key: "qwm", is_particle: false, sense_retenu: "droit", position: 15 }
    ],
    words: [
      // qwl pos=1
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe sayaqulu est un inaccompli 3MP de la racine q-w-l precede de la particule du futur « sa- ». Le Lane's donne : dire, prononcer, enoncer, parler. Le qawl est l'acte de produire une parole articulee. L'inaccompli avec « sa- » indique une action future certaine — Dieu annonce ce que les insenses diront. La parole est l'acte premier de la contestation : avant d'agir contre le changement de qibla, ils parlent. La distinction avec le sens de « pensee/avis » est claire : le verbe decrit un acte vocal exterieur, pas une reflexion interieure.",
              axe1_verset: "Le verbe sayaqulu ouvre le verset en introduisant la parole future des insenses. Toute la premiere partie du verset est leur discours rapporte — une question moqueuse sur le changement de direction. Le champ lexical (insenses, gens, detourner, direction) montre que la parole est un outil de critique. La particule « sa- » transforme la parole en prophetie — Dieu sait ce qu'ils diront avant qu'ils ne le disent. Le verset oppose ensuite la parole humaine (question moqueuse) a la parole divine (reponse souveraine : « Dis »).",
              axe2_voisins: "Le verset 141 concluait la section precedente avec « Vous ne serez pas interroges sur ce qu'ils faisaient ». Le verset 142 ouvre une nouvelle section avec une parole future — la transition est de l'action passee a la parole future. Le verset 143 repondra en expliquant pourquoi cette communaute est « du juste milieu ». La parole des insenses en 142 est le point de depart d'une argumentation divine qui se deploie sur plusieurs versets.",
              axe3_sourate: "La racine q-w-l est une des racines les plus frequentes de la sourate al-Baqarah. En 2:11, « quand on leur dit ». En 2:80, « ils disent ». En 2:111, « ils disent ». La sourate est structuree autour de paroles rapportees — ce que les gens disent, ce que Dieu repond. Le verset 142 s'inscrit dans ce schema dialogique ou la parole humaine est constamment confrontee a la parole divine.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran — c'est la racine la plus frequente apres les particules. Le schema « sayaqulu » (ils diront) est utilise pour annoncer des paroles futures que Dieu revele a l'avance. En 2:142, en 3:154, en 18:22. Le Coran anticipe les objections pour mieux y repondre — la prophetie de la parole montre l'omniscience divine.",
              axe5_frequence: "Pour la mission du khalifa, la parole est un outil central. Les insenses utilisent la parole pour critiquer et semer le doute. Le khalifa doit repondre par la parole divine — « Dis » (qul) est l'imperatif qui transforme la parole en mission. La parole du khalifa doit porter la reponse de Dieu, pas ses propres opinions."
            },
            "Pens\u00e9e/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le contexte est une parole prononcee (sayaqulu — ils diront), pas une pensee interieure. La racine q-w-l porte ici le sens de dire, pas de penser."
            },
            "Sens isol\u00e9/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: "Le sens de puissance est un usage marginal de q-w-l. Le contexte est la parole des insenses, pas une demonstration de force."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: "Le sens de troupeau est un usage concret et marginal de q-w-l. Le contexte est la parole humaine, pas l'elevage."
            }
          }
        }
      },
      // sfh pos=2
      {
        word_key: "sfh", position: 2, sense_chosen: "insense",
        analysis_axes: {
          sense_chosen: "insense",
          concept_chosen: "L\u00e9g\u00e8ret\u00e9/Stupidit\u00e9",
          concepts: {
            "L\u00e9g\u00e8ret\u00e9/Stupidit\u00e9": {
              status: "retenu",
              senses: ["etre insense", "leger d'esprit", "stupide", "declarer insense", "agir de maniere insensee"],
              proof_ctx: "Le mot as-sufaha'u est un pluriel brise defini de la racine s-f-h. Le Lane's donne : insense, leger d'esprit, qui manque de jugement et de discernement, dont l'intellect est deficient. Le safih est celui dont le jugement est si leger qu'il ne pese pas les consequences de ses actes et de ses paroles. Le pluriel brise (sufaha') marque une pluralite eclatee — pas un groupe organise mais des individus epars unis par leur deficience. L'article defini « al- » fait des insenses une categorie connue et identifiable.",
              axe1_verset: "Le mot as-sufaha'u est le sujet du verbe sayaqulu — ce sont les insenses qui parlent. Le verset qualifie d'emblee les critiques du changement de qibla comme des insenses. Le champ lexical (insenses, parmi les gens, detourner, direction) montre que la critique vient de personnes dont le jugement est deficient. La qualification « parmi les gens » (mina an-nasi) precise que les insenses sont une fraction de l'humanite, pas sa totalite. Le verset disqualifie la critique avant meme de la formuler — celui qui parle est insense, donc sa parole est sans poids.",
              axe2_voisins: "Le verset 130 demandait : « Qui donc se detourne de la religion d'Ibrahim sinon celui qui s'insensibilise ? ». Le verset 142 reprend le theme de l'insensibilite — ceux qui critiquent le changement de qibla sont de la meme categorie que ceux qui se detournent d'Ibrahim. Le verset 143 qualifiera ensuite cette communaute de « communaute du juste milieu » — l'antithese des insenses.",
              axe3_sourate: "La racine s-f-h apparait dans la sourate al-Baqarah en 2:13 (« ce sont eux les insenses mais ils ne savent pas ») et en 2:130 (« celui qui s'insensibilise »). La sourate utilise cette racine pour qualifier ceux qui rejettent la verite par legerete d'esprit. En 2:142, les insenses sont ceux qui contestent le changement de qibla — un nouveau cas d'insensibilite face a un commandement divin.",
              axe4_coherence: "La racine s-f-h apparait environ 11 fois dans le Coran. En 4:5, « ne donnez pas aux insenses vos biens ». En 7:155, Moussa parle des insenses de son peuple. Le Coran utilise safih pour designer celui dont le jugement est trop leger pour meriter qu'on lui confie quelque chose d'important. En 2:142, les insenses ne meritent pas qu'on tienne compte de leur critique.",
              axe5_frequence: "Pour la mission du khalifa, l'insensibilite est l'ennemi de la mission. L'insense ne comprend pas les changements divins — il reste accroche a l'habitude et critique ce qu'il ne saisit pas. Le khalifa doit se garder de l'insensibilite en cherchant toujours la sagesse derriere les commandements divins. La legerete d'esprit empeche de voir la verite."
            },
            "Agitation/Mouvement": {
              status: "nul",
              senses: ["agitation"],
              proof_ctx: "Le sens d'agitation physique est un usage secondaire de s-f-h. Le contexte qualifie des personnes par leur etat mental, pas par un mouvement physique."
            },
            "Sens isol\u00e9/Soif": {
              status: "nul",
              senses: ["soif violente"],
              proof_ctx: "Le sens de soif est un usage concret et marginal de s-f-h. Le contexte est la qualification morale de critiques, pas un etat physique."
            },
            "Sens isol\u00e9/Se": {
              status: "nul",
              senses: ["se quereller"],
              proof_ctx: "Le sens de querelle est un usage derive de s-f-h. Le contexte qualifie l'etat mental des critiques, pas une altercation."
            }
          }
        }
      },
      // nws pos=3
      {
        word_key: "nws", position: 3, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanit\u00e9/Peuple",
          concepts: {
            "Humanit\u00e9/Peuple": {
              status: "retenu",
              senses: ["gens", "etres humains", "peuple"],
              proof_ctx: "Le mot an-nasi est un nom collectif defini de la racine n-w-s. Le Lane's donne : gens, etres humains, humanite. An-nas designe l'ensemble des etres humains consideres collectivement. L'article defini « al- » marque la totalite — les gens en general, pas un groupe specifique. La preposition « min » (parmi) partitionne cet ensemble : les insenses font partie des gens mais n'en sont qu'une fraction. La distinction avec « voir de loin » (nul) est evidente : le mot est un nom collectif, pas un verbe de perception.",
              axe1_verset: "Le mot an-nasi situe les insenses dans un ensemble plus large. Le verset dit « les insenses parmi les gens » — pas tous les gens sont insenses, mais les insenses viennent des gens. Le champ lexical (insenses, gens, dire, detourner) montre que le debat se situe au niveau humain — les gens parlent, critiquent et contestent. La reponse divine (« Dis ») transcende ce niveau humain en renvoyant a la souverainete de Dieu sur l'orient et l'occident.",
              axe2_voisins: "Le verset 143 qualifiera la communaute musulmane de « communaute du juste milieu » et mentionnera les gens comme temoins (« pour que vous soyez temoins sur les gens »). Le verset 142 pose les gens comme le lieu d'ou surgit la critique, le verset 143 les pose comme le lieu ou s'exerce le temoignage. Les gens sont a la fois l'obstacle et la finalite de la mission.",
              axe3_sourate: "La racine n-w-s est une des racines les plus frequentes de la sourate al-Baqarah. En 2:8, « parmi les gens, il y a ceux qui disent ». En 2:13, « quand on leur dit : croyez comme les gens ont cru ». La sourate categorise les gens en groupes — croyants, dissimulateurs, insenses. Le verset 142 ajoute une nouvelle categorisation : les insenses parmi les gens.",
              axe4_coherence: "La racine n-w-s apparait environ 241 fois dans le Coran. An-nas est le dernier mot de la derniere sourate (114:6, « min al-jinnati wa an-nas »). Le Coran s'adresse aux gens et parle des gens constamment. En 2:142, les gens sont le terrain ou se manifeste l'insensibilite — mais aussi le terrain ou Dieu guide qui Il veut.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont le destinataire de la mission. Le khalifa vit parmi les gens et doit faire face a leurs critiques, y compris celles des insenses. La mission ne se fait pas dans l'isolement mais au coeur de l'humanite — avec ses insenses et ses sages. Les gens sont a la fois le defi et la raison d'etre de la mission."
            },
            "Perception/Visibilit\u00e9": {
              status: "nul",
              senses: ["voir de loin", "etre visible"],
              proof_ctx: "Le sens de perception est un usage etymologique de n-w-s. Le contexte utilise an-nas comme nom collectif designant les gens, pas un verbe de vision."
            },
            "Sens isol\u00e9/Oublier": {
              status: "nul",
              senses: ["oublier"],
              proof_ctx: "Le sens d'oubli est un usage derive de n-w-s. Le contexte est la designation d'un ensemble humain, pas un acte d'oubli."
            },
            "Sens isol\u00e9/\u00catre": {
              status: "nul",
              senses: ["etre agite"],
              proof_ctx: "Le sens d'agitation est un usage marginal de n-w-s. Le contexte est la designation collective des etres humains."
            }
          }
        }
      },
      // wly pos=4
      {
        word_key: "wly", position: 4, sense_chosen: "detourner",
        analysis_axes: {
          sense_chosen: "detourner",
          concept_chosen: "Proximit\u00e9/Protection",
          concepts: {
            "Proximit\u00e9/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Le verbe wallahum est un accompli 3MS de la forme II (tawalla/walla) de la racine w-l-y avec pronom suffixe 3MP. Le Lane's donne pour cette forme : tourner, se detourner, confier la direction. La racine w-l-y porte fondamentalement le sens de proximite et de prise en charge — le wali est celui qui est proche et qui gere. Ici le verbe est utilise au sens de « tourner/detourner » — ce qui les a detournes de leur direction. La question « ma wallahum » (qu'est-ce qui les a detournes) utilise le sens directionnel de la racine. Le concept de proximite reste le fondement : on tourne vers ce dont on est proche, on se detourne de ce qu'on quitte. La distinction avec « gouverner » est que le contexte est un changement de direction, pas un acte d'autorite.",
              axe1_verset: "Le verbe wallahum est le pivot de la question moqueuse — « qu'est-ce qui les a detournes ? ». La question implique que le changement de qibla est un egarement alors que la reponse divine montre que c'est une guidance. Le champ lexical (detourner, direction, orient, occident, guider, chemin droit) tourne autour du mouvement directionnel. Le detournement est vu negativement par les insenses mais positivement par Dieu — c'est une redirection, pas un egarement.",
              axe2_voisins: "Le verset 144 ordonnera : « Tourne donc ton visage vers la Mosquee sacree ». Le verbe « walli » de la meme racine w-l-y sera utilise positivement — tourner le visage vers la nouvelle qibla. Le verset 142 utilise wallahum negativement (detourner) tandis que le 144 l'utilise positivement (tourner vers). La meme racine porte les deux sens selon la direction.",
              axe3_sourate: "La racine w-l-y est omnipresente dans la sourate al-Baqarah. En 2:107, « vous n'avez en dehors de Dieu ni protecteur ni auxiliaire ». En 2:120, « Dieu est votre Protecteur ». En 2:144, « tourne ton visage vers la Mosquee sacree ». La sourate utilise la racine pour exprimer a la fois la protection divine et le mouvement directionnel de la priere.",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. Elle couvre un champ semantique large — proximite, protection, autorite, direction. En 2:142, le sens de direction/detournement est central. En 3:28, « ne prenez pas les dissimulateurs pour allies ». La racine relie la direction physique (qibla) a la direction spirituelle (alliance) — se tourner vers une qibla c'est declarer son alliance.",
              axe5_frequence: "Pour la mission du khalifa, le detournement est un enjeu central. Le khalifa doit savoir vers quoi se tourner et de quoi se detourner. Le changement de qibla montre que la direction peut changer sur ordre divin — le khalifa doit etre pret a suivre les nouvelles directives sans s'accrocher aux anciennes par habitude. La proximite avec Dieu se manifeste par l'obeissance aux changements qu'Il ordonne."
            },
            "Autorit\u00e9": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens d'autorite est un usage derive de w-l-y. Le contexte est un changement de direction de priere, pas un acte de gouvernance."
            }
          }
        }
      },
      // qbl pos=5
      {
        word_key: "qbl", position: 5, sense_chosen: "direction de priere",
        analysis_axes: {
          sense_chosen: "direction de priere",
          concept_chosen: "Orientation/Direction",
          concepts: {
            "R\u00e9ception/Accueil": {
              status: "probable",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Le sens de reception est un sens majeur de q-b-l — recevoir ce qui vient. La qibla derive du sens de « faire face » — on recoit en faisant face a ce qui arrive. Le mot qiblatihimu dans ce verset est specifiquement la direction de priere, pas l'acte de recevoir. Mais la reception reste un sens fondamental de la racine.",
              axe1_verset: "Le mot qiblatihimu pourrait theoriquement porter le sens de reception — ce qui fait face est aussi ce qui recoit. Mais le contexte est specifiquement la direction vers laquelle on prie, pas un acte de reception. Le complement « 'alayha » (sur elle) confirme qu'il s'agit d'une direction spatiale, pas d'un acte de reception.",
              axe2_voisins: "Le verset 144 utilisera qibla au sens de direction de priere — « Nous avons vu ton visage se tourner vers le ciel, et Nous allons certes te tourner vers une qibla qui te plaira ». Le contexte des versets voisins confirme le sens de direction, pas de reception.",
              axe3_sourate: "La racine q-b-l dans la sourate al-Baqarah apparait principalement dans le contexte du changement de qibla (versets 142-145). Le sens de direction domine dans ce passage. Le sens de reception apparait dans d'autres contextes de la sourate.",
              axe4_coherence: "La racine q-b-l apparait environ 131 fois dans le Coran. Le mot qibla apparait 4 fois, toujours dans le contexte de la direction de priere (2:142, 2:143, 2:144, 2:145). Le sens de reception apparait dans d'autres formes de la racine (qabila, taqabbala).",
              axe5_frequence: "La reception est un acte fondamental de la mission du khalifa — recevoir la guidance divine. Mais dans ce verset, la qibla comme direction montre que la mission a une orientation concrete, pas seulement une reception passive."
            },
            "Orientation/Direction": {
              status: "retenu",
              senses: ["se tourner vers", "faire face", "venir vers"],
              proof_ctx: "Le mot qiblatihimu est un nom feminin singulier defini au genitif avec pronom suffixe 3MP de la racine q-b-l. Le Lane's donne pour qibla : direction vers laquelle on fait face, direction de priere, point d'orientation. La qibla est la direction que le prieur prend pour sa priere — c'est un concept spatial et spirituel. Le pronom « him » (leur) rattache la qibla aux musulmans. Le suffixe possessif montre que la qibla leur appartenait — c'etait LEUR direction. Le changement de qibla les en prive, d'ou la question des insenses.",
              axe1_verset: "Le mot qiblatihimu est l'objet du detournement — « qu'est-ce qui les a detournes de leur qibla ? ». La qibla est le centre du debat dans ce verset et dans toute la section 142-145. Le champ lexical (detourner, direction, orient, occident, chemin droit) tourne autour de l'orientation spatiale et spirituelle. La qibla est le point fixe autour duquel tourne tout le passage — ironiquement, c'est le changement de ce point fixe qui declenche la controverse.",
              axe2_voisins: "Le verset 143 expliquera le sens du changement — « Nous n'avions etabli la qibla que tu avais que pour savoir qui suit le Messager ». Le verset 144 ordonnera la nouvelle direction : « tourne ton visage vers la Mosquee sacree ». Le verset 145 conclura que chacun a sa direction. Les versets 142-145 forment un ensemble thematique centre sur la qibla.",
              axe3_sourate: "La qibla n'apparait dans la sourate al-Baqarah que dans ce passage (142-145). C'est un moment unique et crucial de la sourate — le changement de direction de priere marque la rupture avec Jerusalem et l'affirmation de la Mecque comme centre de la nouvelle communaute. La qibla est un marqueur d'identite communautaire.",
              axe4_coherence: "Le mot qibla apparait 4 fois dans le Coran, exclusivement en 2:142-145. C'est un terme technique specifique a ce passage. La racine q-b-l apparait ailleurs (en 3:44, taqabbala ; en 5:27, tuqubbila) au sens de reception. La qibla est le sens derive specifique de « faire face » applique a la priere — un usage technique unique dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la qibla symbolise l'orientation de la mission. Le changement de qibla montre que l'orientation peut etre modifiee par Dieu — le khalifa doit etre flexible et obeissant. La direction physique de la priere est le signe visible de l'allegiance spirituelle. Changer de qibla c'est reorienter toute sa mission vers le nouveau commandement divin."
            },
            "Ant\u00e9riorit\u00e9/Pass\u00e9": {
              status: "nul",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le sens d'anteriorite est un usage temporal de q-b-l. Le contexte est la direction de priere (qibla), pas une reference temporelle."
            },
            "Sens isol\u00e9/Tribu": {
              status: "nul",
              senses: ["tribu"],
              proof_ctx: "Le sens de tribu est un usage concret et marginal de q-b-l. Le contexte est la direction de priere."
            },
            "Sens isol\u00e9/Embrasser": {
              status: "nul",
              senses: ["embrasser"],
              proof_ctx: "Le sens d'embrasser est un usage concret de q-b-l. Le contexte est l'orientation spatiale, pas un geste physique."
            },
            "Sens isol\u00e9/Garantie": {
              status: "nul",
              senses: ["garantie"],
              proof_ctx: "Le sens de garantie est un usage marginal de q-b-l. Le contexte est la direction de priere, pas un engagement contractuel."
            }
          }
        }
      },
      // kwn pos=7
      {
        word_key: "kwn", position: 7, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "\u00catre/Existence",
          concepts: {
            "\u00catre/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kanu est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister, venir a l'existence. Ici kanu est utilise comme verbe incomplet (kana naqisa) — il porte le temps passe et s'associe a un attribut ou une circonstance. La phrase « kanu 'alayha » (ils etaient sur elle, c'est-a-dire sur cette qibla) decrit un etat revolu — ils priaient dans cette direction mais ne le font plus. L'accompli de kana cree une rupture temporelle : avant le changement, ils etaient sur cette qibla.",
              axe1_verset: "Le verbe kanu cree la dimension temporelle de la question moqueuse — les insenses demandent pourquoi les musulmans ont ete detournes de la direction sur laquelle ils ETAIENT. Le champ lexical (detourner, direction, etre) montre que le changement est le coeur du debat. Le verbe kanu marque le contraste entre l'avant et l'apres — entre l'ancienne qibla et la nouvelle. Sans ce verbe, la question n'aurait pas de poids — c'est le fait qu'ils y etaient qui rend le changement significatif aux yeux des insenses.",
              axe2_voisins: "Le verset 143 utilisera aussi kana : « Nous n'avions etabli la qibla que tu avais que pour savoir qui suit le Messager ». Le verbe kana lie l'ancienne qibla a un test — elle n'etait pas la destination finale mais une etape. Le verset 142 pose la question (pourquoi ont-ils change ?), le verset 143 donne la reponse (l'ancienne qibla etait un test).",
              axe3_sourate: "La racine k-w-n est la racine la plus frequente de la sourate al-Baqarah apres les particules. Le verbe kana structure le recit historique — « quand ils etaient » (kanu), « ils n'etaient pas » (ma kanu). En 2:142, kanu ancre la question dans le passe — les musulmans etaient sur cette direction, ce qui rend le changement perceptible et contestable.",
              axe4_coherence: "La racine k-w-n apparait environ 1358 fois dans le Coran. Le verbe kana est le verbe auxiliaire par excellence — il porte le temps et la modalite. En 2:142, l'accompli de kana cree un contraste temporel qui est au coeur du debat sur le changement de qibla. Le Coran utilise kana pour ancrer les evenements dans le temps et montrer les changements d'etat.",
              axe5_frequence: "Pour la mission du khalifa, le verbe kana rappelle que les etats sont transitoires. Ce qui etait peut ne plus etre — les directions changent, les commandements evoluent. Le khalifa ne doit pas s'accrocher a ce qui etait mais suivre ce qui est ordonne maintenant. L'etre est dynamique dans la mission divine — ce n'est pas un etat fige mais un processus d'obeissance continue."
            },
            "Humilit\u00e9/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est un usage derive de k-w-n. Le contexte utilise kanu comme verbe auxiliaire temporel, pas comme verbe d'humilite."
            },
            "Lieu/\u00c9tat": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Le sens de lieu est un usage nominal de k-w-n. Le contexte utilise kanu comme verbe auxiliaire a l'accompli, pas comme nom de lieu."
            }
          }
        }
      },
      // shrq pos=9
      {
        word_key: "shrq", position: 9, sense_chosen: "orient",
        analysis_axes: {
          sense_chosen: "orient",
          concept_chosen: "Orient/Lumi\u00e8re",
          concepts: {
            "Orient/Lumi\u00e8re": {
              status: "retenu",
              senses: ["est", "lever", "orient"],
              proof_ctx: "Le mot al-mashriqu est un nom de lieu defini (maf'il) de la racine sh-r-q. Le Lane's donne : lieu du lever du soleil, orient, est. Le mashriq est le point cardinal ou le soleil apparait — c'est un lieu permanent et observable. L'article defini « al- » marque l'unicite — il n'y a qu'un mashriq. La racine sh-r-q porte fondamentalement le sens de briller, eclater de lumiere — le mashriq est le lieu ou la lumiere eclate. Dans le verset, le mashriq est mentionne avec le maghrib pour designer la totalite de l'espace — tout appartient a Dieu.",
              axe1_verset: "Le mot al-mashriqu fait partie de la reponse divine a la question moqueuse des insenses. « A Dieu appartiennent l'orient et l'occident » — la reponse transcende le debat sur la direction en affirmant la souverainete de Dieu sur tout l'espace. Le champ lexical (orient, occident, guider, chemin) montre que la direction n'est pas une question de lieu mais d'obeissance. Si l'orient et l'occident sont a Dieu, alors toute direction est sienne — changer de qibla est dans Son pouvoir.",
              axe2_voisins: "Le verset 115 affirmait deja : « A Dieu appartiennent l'orient et l'occident — ou que vous vous tourniez, la est le visage de Dieu ». Le verset 142 reprend cette affirmation dans le contexte du changement de qibla. Les deux versets se renforcent : la souverainete de Dieu sur l'espace rend legitime tout changement de direction qu'Il ordonne.",
              axe3_sourate: "La racine sh-r-q apparait dans la sourate al-Baqarah en 2:115, 2:142, 2:177 et 2:258. En 2:177, « la piete ne consiste pas a tourner vos visages vers l'orient ou l'occident ». La sourate utilise le mashriq pour relativiser l'importance de la direction physique au profit de l'obeissance spirituelle — l'orient n'est qu'un point cardinal, pas une fin en soi.",
              axe4_coherence: "La racine sh-r-q apparait environ 17 fois dans le Coran. Le mot mashriq apparait souvent en paire avec maghrib pour designer la totalite spatiale. En 26:28, « le Seigneur de l'orient et de l'occident ». En 55:17, « le Seigneur des deux orients et des deux occidents ». Le Coran utilise cette paire pour affirmer la souverainete divine sur tout l'espace.",
              axe5_frequence: "Pour la mission du khalifa, l'orient represente le commencement — le lever est le debut. La mission du khalifa s'etend d'orient en occident, sans limite geographique. L'orient et l'occident sont a Dieu, donc la mission du khalifa ne connait pas de frontiere. L'espace entier est le terrain de la mission — aucune direction n'est interdite, aucune n'est privilegiee en soi."
            }
          }
        }
      },
      // ghrb pos=10
      {
        word_key: "ghrb", position: 10, sense_chosen: "occident",
        analysis_axes: {
          sense_chosen: "occident",
          concept_chosen: "Occident/Disparition",
          concepts: {
            "Occident/Disparition": {
              status: "retenu",
              senses: ["ouest", "coucher", "etranger"],
              proof_ctx: "Le mot al-maghribu est un nom de lieu defini (maf'il) de la racine gh-r-b. Le Lane's donne : lieu du coucher du soleil, occident, ouest. Le maghrib est le point cardinal ou le soleil disparait — c'est un lieu permanent et observable. La racine gh-r-b porte fondamentalement le sens de s'eloigner, disparaitre — le gharib est l'etranger, celui qui est loin de chez lui. Le maghrib est le lieu ou la lumiere disparait. Dans le verset, le maghrib complete le mashriq pour former la totalite de l'espace sous la souverainete divine.",
              axe1_verset: "Le mot al-maghribu complete al-mashriqu pour exprimer la totalite. « A Dieu appartiennent l'orient et l'occident » — du lever au coucher du soleil, tout est a Dieu. Le champ lexical (orient, occident, guider, chemin droit) montre que la reponse divine depasse la question locale (quelle direction ?) pour affirmer une verite universelle (tout l'espace est a Dieu). Le maghrib avec le mashriq neutralise le debat — si tout est a Dieu, le choix de la direction Lui revient.",
              axe2_voisins: "Le verset 115 associait deja mashriq et maghrib a la souverainete de Dieu. Le verset 177 dira que la piete n'est pas de tourner le visage vers l'orient ou l'occident. Les versets 115, 142 et 177 forment un triptyque : l'orient et l'occident sont a Dieu (115), donc Il change la direction comme Il veut (142), et la vraie piete n'est pas dans la direction mais dans la foi et les actes (177).",
              axe3_sourate: "La racine gh-r-b apparait dans la sourate al-Baqarah en 2:115, 2:142, 2:177, 2:258. En 2:258, Ibrahim argue : « Dieu fait lever le soleil de l'orient — fais-le donc lever de l'occident ». La sourate utilise le mashriq et le maghrib comme des preuves de la souverainete divine — celui qui controle le lever et le coucher du soleil controle tout.",
              axe4_coherence: "La racine gh-r-b apparait environ 14 fois dans le Coran. Le mot maghrib apparait toujours en opposition ou en complement du mashriq. En 73:9, « le Seigneur de l'orient et de l'occident ». La paire mashriq-maghrib est un merisma coranique — nommer les deux extremes pour designer tout ce qui est entre eux. Le Coran affirme ainsi la souverainete totale de Dieu sur l'espace.",
              axe5_frequence: "Pour la mission du khalifa, l'occident represente la fin apparente — le coucher est la disparition. Mais la disparition du soleil n'est que temporaire — il se releve a l'orient. La mission du khalifa ne connait pas de fin definitive meme quand elle semble disparaitre. L'occident rappelle que chaque fin est suivie d'un nouveau commencement. Le khalifa doit perseverer meme dans les periodes d'obscurite."
            }
          }
        }
      },
      // hdy pos=11
      {
        word_key: "hdy", position: 11, sense_chosen: "guider",
        analysis_axes: {
          sense_chosen: "guider",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-meme"],
              proof_ctx: "Le verbe yahdi est un inaccompli 3MS de la racine h-d-y. Le Lane's donne : guider, diriger vers la bonne voie, montrer le chemin, mener a destination. Le huda est la guidance — l'acte de prendre quelqu'un par la main et de le conduire la ou il doit aller. L'inaccompli indique une action continue et renouvelable — Dieu guide sans cesse, pas une seule fois. Le sujet est implicitement Dieu — c'est Lui qui guide. L'objet est « man yasha'u » (qui Il veut) — la guidance divine n'est pas automatique mais selective.",
              axe1_verset: "Le verbe yahdi est le pivot de la reponse divine. Apres avoir affirme que l'orient et l'occident sont a Dieu, le verset conclut par « Il guide qui Il veut vers un chemin droit ». La guidance est la reponse au detournement — les insenses parlent de detournement, Dieu parle de guidance. Le champ lexical (guider, chemin, droit) oppose directement la critique (detourner) a la verite (guider). Le changement de qibla n'est pas un detournement mais une guidance vers un chemin droit.",
              axe2_voisins: "Le verset 143 prolongera en expliquant le sens de la guidance : « Dieu n'est pas de ceux qui perdent votre foi ». Le verset 144 concretisera la guidance : « Nous te tournerons vers une qibla qui te plaira ». Les versets 142-144 forment une progression : affirmation du pouvoir de guider (142), explication (143), application concrete (144).",
              axe3_sourate: "La racine h-d-y est structurante dans la sourate al-Baqarah. En 2:2, « guide pour les pieux ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:120, « la guidance de Dieu est la guidance ». La sourate presente la guidance comme le fil conducteur — chaque passage revient a la question : qui est guide et qui est egare ?",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. Le verbe yahdi (Il guide) est une des expressions les plus frequentes. En 6:39, « Dieu guide qui Il veut vers un chemin droit ». En 10:25, « Dieu guide qui Il veut vers un chemin droit ». Cette expression est un refrain coranique qui affirme la souverainete de Dieu dans le choix de ceux qu'Il guide.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est le coeur de la mission. Le khalifa est a la fois guide (il guide les autres) et guide (il est guide par Dieu). Le verbe yahdi montre que la guidance est un don divin — le khalifa ne guide pas par sa propre sagesse mais par la guidance que Dieu lui accorde. La mission depend de la guidance divine, pas de l'initiative humaine."
            },
            "Conduite/Comportement": {
              status: "nul",
              senses: ["conduite", "maniere d'agir", "comportement calme"],
              proof_ctx: "Le sens de conduite est un usage derive de h-d-y. Le contexte est l'acte de guider vers un chemin, pas un comportement personnel."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice", "present"],
              proof_ctx: "Le sens de cadeau est un usage concret de h-d-y. Le contexte est la guidance spirituelle, pas un don materiel."
            }
          }
        }
      },
      // shy pos=13
      {
        word_key: "shy", position: 13, sense_chosen: "vouloir",
        analysis_axes: {
          sense_chosen: "vouloir",
          concept_chosen: "Volont\u00e9",
          concepts: {
            "Volont\u00e9": {
              status: "retenu",
              senses: ["vouloir"],
              proof_ctx: "Le verbe yasha'u est un inaccompli 3MS de la racine sh-y-a. Le Lane's donne : vouloir, desirer, decider. La mashi'a est la volonte — l'acte interieur de diriger son intention vers un objet. L'inaccompli indique que la volonte divine est permanente et active. Le « man yasha'u » (qui Il veut) exprime la souverainete de la volonte divine dans le choix de ceux qu'Il guide. La volonte de Dieu n'est pas arbitraire — elle est la source de la guidance. La distinction avec « chose » est claire : le verbe est a l'inaccompli actif, pas un nom designant un objet.",
              axe1_verset: "Le verbe yasha'u conditionne la guidance — « Il guide qui Il veut ». La volonte divine est le critere de selection pour la guidance. Le champ lexical (guider, vouloir, chemin droit) montre que la guidance n'est pas aleatoire mais soumise a la volonte de Dieu. Le verset oppose la volonte humaine (les insenses veulent contester) a la volonte divine (Dieu veut guider). La volonte divine prevaut — c'est elle qui determine la direction, pas les protestations humaines.",
              axe2_voisins: "Le verset 143 precisera que Dieu « ne fera pas perir votre foi » — la volonte divine preserve les croyants. Le verset 146 dira que les detenteurs du Livre « le reconnaissent comme ils reconnaissent leurs fils, mais un groupe d'entre eux cache la verite alors qu'ils savent ». La volonte divine de guider est confrontee a la volonte humaine de dissimuler.",
              axe3_sourate: "La racine sh-y-a apparait frequemment dans la sourate al-Baqarah. En 2:20, « si Dieu avait voulu, Il leur aurait enleve l'ouie et la vue ». En 2:105, « Dieu reserve Sa grace a qui Il veut ». En 2:253, « si Dieu avait voulu, ceux qui sont venus apres eux ne se seraient pas entre-tues ». La sourate affirme constamment la souverainete de la volonte divine sur les evenements humains.",
              axe4_coherence: "La racine sh-y-a apparait environ 507 fois dans le Coran. L'expression « man yasha'u » (qui Il veut) apparait dans de nombreux versets pour conditionner les actes divins — guider, pardonner, chatier, enrichir. En 24:45, « Dieu cree ce qu'Il veut ». La volonte divine est le principe directeur du Coran — tout decoule de la volonte de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la volonte divine est la source de la mission. Le khalifa ne choisit pas sa mission — c'est Dieu qui veut et qui guide. La volonte du khalifa doit s'aligner sur la volonte divine. Le « man yasha'u » rappelle que la guidance n'est pas un droit acquis mais un don conditionnel — le khalifa doit rester digne de la volonte divine de le guider."
            },
            "Chose/\u00catre": {
              status: "nul",
              senses: ["chose", "quelque chose"],
              proof_ctx: "Le sens de chose est un usage nominal de sh-y-a. Le contexte utilise le verbe yasha'u a l'inaccompli, designant la volonte divine, pas un objet."
            }
          }
        }
      },
      // srt pos=14
      {
        word_key: "srt", position: 14, sense_chosen: "chemin",
        analysis_axes: {
          sense_chosen: "chemin",
          concept_chosen: "Chemin/Voie",
          concepts: {
            "Chemin/Voie": {
              status: "retenu",
              senses: ["chemin", "route", "voie"],
              proof_ctx: "Le mot siratin est un nom masculin singulier indefini au genitif de la racine s-r-t. Le Lane's donne : chemin, route, voie qu'on emprunte. Le sirat est un chemin clair et large qu'on peut suivre sans hesitation. L'indefini (sans article) ne diminue pas sa specificite — la qualification « mustaqim » (droit) en fait le chemin par excellence. Le sirat est directionnel — il mene d'un point a un autre. La distinction avec « epee longue » est evidente : le contexte est la guidance vers une voie, pas un objet guerrier.",
              axe1_verset: "Le mot siratin est le but de la guidance — « Il guide qui Il veut vers un chemin droit ». Le chemin est la destination de la guidance divine. Le champ lexical (guider, vouloir, chemin, droit) forme une chaine coherente : Dieu guide → par Sa volonte → vers un chemin → qui est droit. Le verset oppose le detournement (question des insenses) au chemin droit (reponse divine). Le changement de qibla est une guidance vers le chemin droit, pas un detournement.",
              axe2_voisins: "Le verset 143 parlera de la « communaute du juste milieu » — le milieu est un chemin entre les extremes. Le chemin droit du verset 142 est developpe en 143 comme le chemin de la moderation. Les versets 142-143 lient le chemin droit a la communaute du milieu — la droiture est la voie du milieu.",
              axe3_sourate: "La racine s-r-t apparait dans la sourate al-Baqarah en 2:142 et 2:213 (« Il les a guides vers un chemin droit »). Le sirat mustaqim est aussi le chemin invoque dans la Fatiha (1:6, « guide-nous vers le chemin droit »). La sourate al-Baqarah est la reponse a cette invocation — elle montre le chemin droit et ses obstacles.",
              axe4_coherence: "La racine s-r-t apparait environ 45 fois dans le Coran. Le sirat mustaqim (chemin droit) est une expression centrale qui apparait dans al-Fatiha et dans de nombreuses sourates. En 6:153, « ceci est Mon chemin droit — suivez-le ». Le chemin droit est le fil conducteur du Coran — chaque verset, chaque commandement vise a y conduire.",
              axe5_frequence: "Pour la mission du khalifa, le chemin droit est la voie de la mission. Le khalifa est charge de suivre le chemin droit et d'y guider les autres. Le chemin est droit — sans deviation, sans detour, sans ambiguite. La mission du khalifa exige la rectitude : pas de compromis avec le faux, pas de deviation vers l'injustice. Le chemin droit est l'itineraire de la mission."
            },
            "Arme/Combat": {
              status: "nul",
              senses: ["epee longue"],
              proof_ctx: "Le sens d'epee est un usage concret et marginal de s-r-t. Le contexte est la guidance divine vers une voie, pas un objet guerrier."
            },
            "Sens isol\u00e9/Pont": {
              status: "nul",
              senses: ["pont de l'au-dela"],
              proof_ctx: "Le sens eschatologique de pont est un usage specifique de s-r-t. Le contexte est la guidance dans cette vie vers un chemin, pas le passage vers l'au-dela."
            }
          }
        }
      },
      // qwm pos=15
      {
        word_key: "qwm", position: 15, sense_chosen: "droit",
        analysis_axes: {
          sense_chosen: "droit",
          concept_chosen: "Verticalit\u00e9/Droiture",
          concepts: {
            "Verticalit\u00e9/Droiture": {
              status: "retenu",
              senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger", "se tenir debout"],
              proof_ctx: "Le mot mustaqimin est un participe actif de la forme X (istaqama) de la racine q-w-m au genitif indefini. Le Lane's donne : droit, rectiligne, sans deviation, correct, juste. La forme X (istaf'ala) signifie chercher a se tenir droit, se rendre droit par soi-meme — c'est un effort actif de droiture. Le participe actif qualifie le chemin (sirat) — c'est un chemin qui se tient droit activement, sans courbe ni deviation. Le mustaqim n'est pas droit passivement — il est activement rectiligne. La distinction avec « peuple » est claire : le mot est un adjectif qualifiant le chemin, pas un nom designant des gens.",
              axe1_verset: "Le mot mustaqimin qualifie le chemin vers lequel Dieu guide. « Un chemin droit » (siratin mustaqimin) est le but final de la guidance divine. Le champ lexical du verset oppose le detournement (wallahum) a la droiture (mustaqim). Les insenses parlent de detournement — Dieu repond par la droiture. Le chemin droit est la refutation de l'accusation de detournement : ce qui semble un detournement est en realite un redressement vers la droiture.",
              axe2_voisins: "Le verset 143 qualifiera la communaute de « juste milieu » (ummatan wasatan) — le milieu et la droiture sont lies. Le chemin droit n'est pas un chemin d'extremes mais un chemin de milieu. Le verset 142 pose le chemin droit comme destination, le verset 143 montre que la communaute guidee vers ce chemin est une communaute equilibree.",
              axe3_sourate: "Le mot mustaqim apparait dans la sourate al-Baqarah en 2:142 et 2:213. La Fatiha (sourate 1) invoquait « guide-nous vers le chemin droit ». La sourate al-Baqarah repond a cette invocation en montrant les details du chemin droit — ses commandements, ses interdits, ses exemples. Le verset 142 rappelle que ce chemin droit inclut le changement de qibla.",
              axe4_coherence: "Le mot mustaqim apparait environ 37 fois dans le Coran, presque toujours qualifiant le sirat ou le sabil (chemin/voie). En 1:6, « guide-nous vers le chemin droit ». En 6:153, « ceci est Mon chemin droit ». En 36:61, « adorez-Moi, ceci est un chemin droit ». La droiture est une constante du discours coranique — le chemin de Dieu est toujours qualifie de droit.",
              axe5_frequence: "Pour la mission du khalifa, la droiture est l'essence de la mission. Le khalifa doit se tenir droit — physiquement dans la priere et moralement dans la gouvernance. Le mustaqim est celui qui ne devie pas — il maintient le cap malgre les critiques, les doutes et les obstacles. La mission du khalifa est un chemin droit au milieu des courbes du monde."
            },
            "Peuple/Communaut\u00e9": {
              status: "nul",
              senses: ["peuple", "communaute", "tribu", "nation", "groupe"],
              proof_ctx: "Le sens de peuple est un usage nominal majeur de q-w-m. Le contexte utilise mustaqimin comme adjectif qualifiant le chemin, pas comme nom designant un peuple."
            },
            "Gestion/Administration": {
              status: "nul",
              senses: ["gerer", "administrer", "prendre en charge", "diriger"],
              proof_ctx: "Le sens de gestion est un usage verbal de q-w-m. Le contexte utilise mustaqimin comme participe adjectival qualifiant le chemin droit, pas un acte d'administration."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  let okCount = 0, errCount = 0;

  for (const word of data.words) {
    const { error: insertErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes,
      model_used: 'claude-opus-4',
      prompt_version: 'v2-pipeline-maison'
    });

    if (insertErr) {
      console.error(`  ERREUR insertion vwa ${word.word_key}:`, insertErr.message);
      errCount++;
    } else {
      console.log(`  OK VWA ${word.word_key} pos=${word.position}`);
      okCount++;
    }
  }

  const { error: updateErr } = await supabase.from('verse_analyses').update({
    segments: data.segments,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    full_translation: data.full_translation
  }).eq('id', data.analysis_id);

  if (updateErr) {
    console.error(`  ERREUR update verse_analyses:`, updateErr.message);
    errCount++;
  } else {
    console.log(`  OK verse_analyses V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — ${okCount} OK, ${errCount} erreurs`);
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [149];
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', verseIds);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnee a synchroniser');
    return;
  }

  const processed = new Set();
  for (const vwa of vwas) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.concepts) continue;

    const key = vwa.word_key;
    if (processed.has(key)) continue;
    processed.add(key);

    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', key)
      .single();

    if (!wa) {
      console.log(`  ${key} non trouve dans word_analyses — skip`);
      continue;
    }

    for (const [conceptName, conceptData] of Object.entries(axes.concepts)) {
      const { error } = await supabase.from('word_meanings')
        .update({
          status: conceptData.status,
          proof_ctx: conceptData.proof_ctx || null,
          axe1_verset: conceptData.axe1_verset || null,
          axe2_voisins: conceptData.axe2_voisins || null,
          axe3_sourate: conceptData.axe3_sourate || null,
          axe4_coherence: conceptData.axe4_coherence || null,
          axe5_frequence: conceptData.axe5_frequence || null
        })
        .eq('analysis_id', wa.id)
        .eq('concept', conceptName);

      if (error) {
        console.error(`  ERREUR sync ${key}/${conceptName}:`, error.message);
      }
    }
    console.log(`  ${key} -> synced`);
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — VERSET 142 ===\n');
  await processVerse(142);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V142 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
