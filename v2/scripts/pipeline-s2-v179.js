const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 179
// verse_id=186, analysis_id=544
// "And in retribution there is life for you, O people
//  of understanding, that you may be mindful."
// Sagesse du qisas : la retribution preserve la vie
// =====================================================

const verseData = {
  179: {
    verse_id: 186,
    analysis_id: 544,
    translation_arab: "Et dans le suivi/pistage il y a vie pour vous, o ceux qui possedent l'intelligence/essence, afin que vous vous preserviez.",
    full_translation: "Et dans le chatiment legal, il y a vie pour vous, o doues d'intelligence, afin que vous soyez pieux.",
    translation_explanation: `§DEMARCHE§
Le verset est une des formulations les plus concises et les plus profondes de la sourate al-Baqarah. Il enonce un paradoxe apparent : dans le qisas (suivi/pistage, retribution), il y a la vie. Le verset vient apres les versets sur le qisas (2:178) et en donne la sagesse. La brievete du verset contraste avec la longueur des prescriptions precedentes — une fois la loi enoncee, sa sagesse tient en une phrase.

Le nom **al-qisasi** est un nom au genitif de la racine q-s-s. Le Lane's donne : suivre les traces de quelqu'un, pister, poursuivre pas a pas, narrer en suivant le fil d'un recit. Le qisas est le fait de suivre exactement les traces — dans le contexte juridique, c'est l'application d'une peine proportionnelle qui suit exactement le crime commis. L'article defini (al-) renvoie au qisas mentionne dans le verset precedent (2:178). Le sens fondamental de suivi/pistage est essentiel : le qisas n'est pas une vengeance aveugle mais un suivi precis, une correspondance exacte entre l'acte commis et la consequence.

Le nom **hayatun** est un nom feminin singulier indefini au nominatif de la racine h-y-y. Le Lane's donne : vie, le fait d'etre vivant, vitalite, existence. Le mot est indefini (hayatun, pas al-hayatu) — ce n'est pas « la vie » definie mais « une vie », c'est-a-dire un principe de vie, une preservation de la vie. L'indefini amplifie : il ne s'agit pas d'une vie particuliere mais du principe meme de la vie. Le paradoxe est saisissant — dans ce qui semble etre la mort (la retribution), se trouve la vie. Le qisas preserve la vie collective en dissuadant le meurtre.

Le nom **uli** est un nom pluriel invariable de la racine a-w-l. Le Lane's donne : ceux qui possedent, les detenteurs de. Le mot uli est toujours en etat construit — il doit etre suivi d'un nom qu'il qualifie. Uli n'est pas un simple pronom relatif : il designe activement ceux qui possedent, qui detiennent une qualite. Le sens de gouvernance est lie — celui qui possede une qualite est en position de l'exercer. L'interpellation « ya uli al-albab » s'adresse a ceux qui ont la capacite de comprendre.

Le nom **al-albabi** est un nom pluriel au genitif de la racine l-b-b. Le Lane's donne : coeur, essence, noyau, intelligence pure, ce qui est au centre de quelque chose. Le lubb est le noyau depouille de son ecorce — l'intelligence pure debarrassee des apparences. Al-albab est le pluriel de lubb — les intelligences, les essences. L'expression « uli al-albab » (ceux qui possedent les intelligences/essences) designe ceux qui voient au-dela de la surface, qui saisissent le sens profond des choses. C'est un appel a la reflexion profonde — seuls ceux qui ont l'intelligence essentielle peuvent comprendre le paradoxe du qisas.

Le verbe **tattaquna** est un inaccompli 2MP de la racine w-q-y. Le Lane's donne : se proteger, se premunir, prendre des precautions, se garder de. La taqwa est le fait de se placer sous une protection — proteger son ame du mal, se premunir contre les consequences de ses actes. L'inaccompli marque la continuite — la protection est un etat permanent, pas un acte ponctuel. La forme VIII (ittaqa) ajoute la reflexivite : se proteger soi-meme. Le verbe avec « la'allakum » (peut-etre que vous) forme une finalite esperee — le qisas est institue dans l'espoir que les gens se protegent, se preservent du mal.

§JUSTIFICATION§
**suivi/pistage** — Le sens retenu est « suivi/pistage ». Le nom al-qisasi designe le fait de suivre les traces exactement. L'alternative « narration/recit » est classee probable car la racine q-s-s porte aussi le sens de raconter en suivant le fil — mais le contexte juridique (apres 2:178 sur la retribution) impose le sens de retribution proportionnelle. L'alternative « narration » est exclue du sens retenu car le verset parle de loi, pas de recit.

**vie** — Le sens retenu est « vie/vivant ». Le nom hayatun designe le principe de vie. Il n'y a pas d'alternative serieuse — la racine h-y-y porte exclusivement le sens de vie et de vitalite.

**ceux qui possedent** — Le sens retenu est « gouvernance » ou « famille/appartenance ». Le nom uli designe ceux qui possedent, les detenteurs. Le sens de gouvernance est premier car posseder une qualite c'est la gouverner. Le sens de famille/appartenance est probable car uli peut aussi designer ceux qui appartiennent a un groupe defini par une qualite.

**intelligence/essence** — Le sens retenu est « intelligence/essence ». Le nom al-albabi designe les noyaux, les essences, les intelligences pures. Il n'y a pas d'alternative serieuse dans ce contexte — le lubb est l'essence depouillee.

**vous preserviez** — Le sens retenu est « protection/preservation ». Le verbe tattaquna designe l'acte de se proteger, de se premunir. L'alternative « craindre » est courante dans les traductions mais reductrice — la taqwa n'est pas la peur mais la preservation active de soi contre le mal. Le Lane's confirme que le sens premier est la protection, pas la crainte.

§CRITIQUE§
Les traductions courantes rendent « qisas » par « talion » ou « chatiment legal ». Notre traduction retient « suivi/pistage » qui est le sens premier de la racine q-s-s — le talion est un suivi exact du crime par la peine. Le mot « talion » est un emprunt latin qui perd le sens arabe de pistage. Pour « tattaquna », les traductions donnent generalement « pieuse crainte » ou « piete ». Notre traduction retient « vous preserviez » qui rend mieux le sens de la racine w-q-y (protection) sans introduire la notion de peur absente de la racine. Hamidullah donne « peut-etre serez-vous pieux » — nous preferons « afin que vous vous preserviez » qui est plus fidele a l'etymologie.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "dans le suivi/pistage", pos: "nom", phon: "al-qisasi", arabic: "\u0641\u0650\u064a \u0671\u0644\u0652\u0642\u0650\u0635\u064e\u0627\u0635\u0650", word_key: "qss", is_particle: false, sense_retenu: "suivi/pistage", position: 1 },
      { fr: "pour vous", phon: "lakum", arabic: "\u0644\u064e\u0643\u064f\u0645\u0652", is_particle: true, position: 2 },
      { fr: "vie", pos: "nom", phon: "hayatun", arabic: "\u062d\u064e\u064a\u064e\u0648\u0670\u0629\u064c", word_key: "hyy", is_particle: false, sense_retenu: "vie", position: 3 },
      { fr: "o", phon: "ya", arabic: "\u064a\u064e\u0670", is_particle: true, position: 4 },
      { fr: "ceux qui possedent", pos: "nom", phon: "uli", arabic: "\u0623\u064f\u0648\u06df\u0644\u0650\u0649", word_key: "awl", is_particle: false, sense_retenu: "gouvernance", position: 5 },
      { fr: "l'intelligence/essence", pos: "nom", phon: "al-albabi", arabic: "\u0671\u0644\u0652\u0623\u064e\u0644\u0652\u0628\u064e\u0670\u0628\u0650", word_key: "lbb", is_particle: false, sense_retenu: "intelligence/essence", position: 6 },
      { fr: "peut-etre que vous", phon: "la'allakum", arabic: "\u0644\u064e\u0639\u064e\u0644\u0651\u064e\u0643\u064f\u0645\u0652", is_particle: true, position: 7 },
      { fr: "vous preserviez", pos: "verbe", phon: "tattaquna", arabic: "\u062a\u064e\u062a\u0651\u064e\u0642\u064f\u0648\u0646\u064e", word_key: "wqy", is_particle: false, sense_retenu: "protection/preservation", position: 8 }
    ],
    words: [
      // qss pos=1
      {
        word_key: "qss", position: 1, sense_chosen: "suivi/pistage",
        analysis_axes: {
          sense_chosen: "suivi/pistage",
          concept_chosen: "Suivi/Pistage",
          concepts: {
            "Suivi/Pistage": {
              status: "retenu",
              senses: ["suivre les traces", "pister", "retribution proportionnelle", "appliquer la peine correspondante"],
              proof_ctx: "Le nom al-qisasi est un masdar au genitif de la racine q-s-s. Le Lane's donne : suivre les traces de quelqu'un pas a pas, pister, poursuivre en suivant exactement les empreintes. Le qisas est le fait de suivre exactement — dans le contexte juridique, c'est l'application d'une peine qui correspond exactement au crime commis. L'article defini (al-) renvoie au qisas prescrit dans le verset precedent (2:178). Le sens fondamental de suivi/pistage est premier : la retribution n'est pas une vengeance arbitraire mais un suivi rigoureux, une correspondance precise entre l'acte et sa consequence.",
              axe1_verset: "Le mot al-qisasi ouvre le verset apres la particule « wa-fi » (et dans). Le champ lexical est paradoxal : dans le suivi/pistage (qui evoque la mort du coupable) se trouve la vie. Ce paradoxe est le coeur du verset — la retribution preserve la vie collective en dissuadant le crime. Le verset est d'une brievete remarquable — six mots en arabe pour enoncer une sagesse fondamentale. Le qisas est presente non comme une punition mais comme une source de vie, ce qui en inverse la perception courante.",
              axe2_voisins: "Le verset 178 prescrivait le qisas en detail : le libre pour le libre, l'esclave pour l'esclave. Le verset 179 en donne la sagesse en une phrase. Le verset 178 etait long et juridique, le verset 179 est court et philosophique. Ce contraste entre la prescription et sa justification montre que la loi divine n'est pas arbitraire — elle a une finalite (la preservation de la vie). Le passage de la regle a la sagesse est marque par la brievete.",
              axe3_sourate: "La racine q-s-s apparait dans la sourate al-Baqarah principalement dans les versets 178-179 sur le qisas. Mais la racine porte aussi le sens de narration — en 2:76, les hypocrites se demandent « pourquoi leur racontez-vous (tuhaddithunahum) » ce que Dieu a revele. Le sens de suivi est present dans les deux usages : suivre les traces (qisas juridique) et suivre le fil d'un recit (qisas narratif). La sourate montre que suivre est un acte de precision, que ce soit dans la justice ou dans la narration.",
              axe4_coherence: "La racine q-s-s apparait environ 30 fois dans le Coran. En 12:3, Dieu raconte (naqussu) la meilleure des narrations (ahsan al-qasas). En 28:11, la soeur de Moussa suit ses traces (qassat). En 18:64, Moussa et son serviteur reviennent sur leurs traces (fa-irtadda 'ala atharihima qasasan). Le Coran utilise q-s-s pour tout acte de suivi precis — qu'il s'agisse de pister des traces physiques, de suivre le fil d'un recit, ou d'appliquer une correspondance exacte entre crime et peine.",
              axe5_frequence: "Pour la mission du khalifa, le qisas incarne le principe de correspondance exacte entre l'acte et sa consequence. Le khalifa ne gouverne pas par l'arbitraire mais par la precision — chaque acte a une consequence proportionnelle. Le suivi/pistage est une methode de gouvernance : suivre les traces du reel, ne pas inventer des punitions qui depassent le crime. La justice du khalifa est une justice de correspondance, pas de vengeance."
            },
            "Narration/Recit": {
              status: "probable",
              senses: ["raconter", "narrer", "suivre le fil d'un recit", "rapporter"],
              proof_ctx: "Le sens de narration est un sens atteste de la racine q-s-s. Le Lane's donne : raconter en suivant le fil des evenements, narrer pas a pas. Le qasas est le recit qui suit l'ordre des faits — il raconte en pistant les evenements. Ce sens est atteste en 12:3 (ahsan al-qasas = la meilleure des narrations) et en 28:25 (elle lui raconta le recit = qassat 'alayhi al-qasas). Le lien entre narration et pistage est etymologique : narrer c'est suivre les traces des evenements. Dans le contexte de 2:179, le sens juridique est premier mais le sens narratif enrichit la comprehension — le qisas est un suivi qui raconte la correspondance entre le crime et sa consequence.",
              axe1_verset: "Le sens narratif de q-s-s n'est pas directement actif dans le verset 179 qui traite du qisas juridique. Cependant, le paradoxe « dans le suivi/pistage il y a vie » peut se lire aussi a travers le prisme narratif : dans le recit (de la justice, de la correspondance exacte) se trouve un principe de vie. Le recit de la justice dissuade le crime en racontant ses consequences. La narration de la loi divine est elle-meme source de vie pour ceux qui l'ecoutent et la comprennent.",
              axe2_voisins: "Le verset 178 enonce la loi du qisas en detail — il est lui-meme un recit de la loi. Le verset 179 resume la sagesse de cette loi. Le passage de 178 a 179 est un passage de la narration detaillee au resume essentiel. La racine q-s-s porte les deux dimensions : la precision du suivi juridique (178) et la capacite a resumer l'essentiel (179).",
              axe3_sourate: "La sourate al-Baqarah contient de nombreux recits (qisas) : l'histoire d'Adam, de Moussa, d'Ibrahim. La racine q-s-s comme narration est implicitement presente dans toute la structure narrative de la sourate. Le verset 179 est un point ou la dimension juridique et la dimension narrative se rejoignent — la loi est racontee et la sagesse de la loi est narree.",
              axe4_coherence: "La dimension narrative de q-s-s est dominante dans le Coran en termes de frequence. La sourate Yusuf (12) est appelee « la meilleure des narrations » (ahsan al-qasas). En 7:176, « raconte-leur le recit ». En 18:13, « Nous te racontons leur recit en toute verite ». Le Coran est fondamentalement un recit qui suit les traces de la verite — le sens narratif et le sens de pistage sont indissociables.",
              axe5_frequence: "Pour la mission du khalifa, la narration est un outil de gouvernance. Le khalifa raconte la loi divine pour la faire comprendre — il ne se contente pas de l'imposer. Le recit de la sagesse du qisas (dans la retribution il y a vie) est un acte de narration pedagogique. Le khalifa doit savoir raconter la verite en suivant ses traces, sans detourner ni embellir."
            }
          }
        }
      },
      // hyy pos=3
      {
        word_key: "hyy", position: 3, sense_chosen: "vie",
        analysis_axes: {
          sense_chosen: "vie",
          concept_chosen: "Vie/Vivant",
          concepts: {
            "Vie/Vivant": {
              status: "retenu",
              senses: ["vie", "vivant", "vitalite", "existence", "faire vivre"],
              proof_ctx: "Le nom hayatun est un nom feminin singulier indefini au nominatif de la racine h-y-y. Le Lane's donne : vie, le fait d'etre vivant, vitalite, existence animee. Le mot est indefini (hayatun et non al-hayatu) — ce n'est pas « la vie » definie mais « une vie », c'est-a-dire un principe de vie, une source de vitalite. L'indefini amplifie le sens plutot que de le restreindre — il s'agit du concept meme de vie, pas d'une vie particuliere. Le paradoxe central du verset repose sur ce mot : dans ce qui semble impliquer la mort (le qisas) se trouve la vie.",
              axe1_verset: "Le mot hayatun est le predicat du verset — c'est ce qui se trouve dans le qisas. Le champ lexical oppose suivi/pistage (qui evoque la retribution, la mort du coupable) et vie — le paradoxe est maximal. Le verset affirme que la retribution n'est pas un acte de mort mais un acte de vie : en punissant le meurtrier, on preserve la vie des innocents. L'indefini hayatun (une vie, de la vie) montre que le qisas ne sauve pas une vie particuliere mais le principe meme de la vie en societe.",
              axe2_voisins: "Le verset 178 prescrivait le qisas pour le meurtre — la peine de mort pour le meurtrier. Le verset 179 renverse la perspective : cette peine de mort est en fait source de vie. Le verset 177 parlait de la piete veritable. Le passage de la piete (177) au qisas (178-179) montre que la justice fait partie de la piete — preserver la vie par la loi est un acte de piete. Le verset 180 enchainera sur le testament — un autre moyen de preserver l'ordre apres la mort.",
              axe3_sourate: "La racine h-y-y apparait dans la sourate al-Baqarah dans des contextes fondamentaux. En 2:28, « comment pouvez-vous renier Dieu alors que vous etiez morts et qu'Il vous a donne la vie ». En 2:154, « ne dites pas de ceux qui sont tues dans le chemin de Dieu qu'ils sont morts — ils sont vivants ». La sourate construit un theme ou la vie transcende la mort apparente — le qisas en est une illustration juridique.",
              axe4_coherence: "La racine h-y-y apparait environ 184 fois dans le Coran. En 2:260, Ibrahim demande a voir comment Dieu ressuscite les morts. En 36:33, la terre morte que Dieu fait revivre. En 67:2, « Celui qui a cree la mort et la vie pour vous eprouver ». Le Coran presente la vie comme un don divin qui peut surgir de ce qui semble etre la mort — le qisas en est l'application sociale.",
              axe5_frequence: "Pour la mission du khalifa, la vie est l'objectif premier de la mission. Le khalifa est place sur terre pour preserver et developper la vie — pas pour la detruire. Le paradoxe du verset enseigne que la justice, meme quand elle semble severe, est au service de la vie. Le khalifa doit comprendre que certaines decisions difficiles (comme le qisas) sont des actes de preservation, pas de destruction. La mission est une mission de vie."
            }
          }
        }
      },
      // awl pos=5
      {
        word_key: "awl", position: 5, sense_chosen: "gouvernance",
        analysis_axes: {
          sense_chosen: "gouvernance",
          concept_chosen: "Gouvernance",
          concepts: {
            "Gouvernance": {
              status: "retenu",
              senses: ["ceux qui possedent", "detenteurs de", "maitres de", "gouvernants"],
              proof_ctx: "Le nom uli est un nom pluriel invariable en etat construit de la racine a-w-l. Le Lane's donne : ceux qui possedent, les detenteurs de, les maitres de quelque chose. Le mot uli est toujours suivi d'un complement qui precise ce que ses referents possedent. Ici « uli al-albab » designe ceux qui possedent les intelligences/essences. Le sens de gouvernance est premier : posseder une qualite c'est la maitriser, l'exercer avec autorite. Les « uli al-albab » ne sont pas simplement ceux qui ont de l'intelligence — ils en sont les maitres, ceux qui la gouvernent et l'exercent activement.",
              axe1_verset: "Le mot uli introduit l'interpellation « ya uli al-albab » (o detenteurs des intelligences). Le verset s'adresse specifiquement a ceux qui ont la capacite de comprendre le paradoxe du qisas. Le champ lexical (qisas, vie, intelligence, preservation) montre que la sagesse de la loi n'est accessible qu'a ceux qui possedent l'intelligence essentielle. Le verset ne s'adresse pas a tous mais a ceux qui gouvernent leur intelligence — qui la maitrisent et l'utilisent pour saisir les verites profondes.",
              axe2_voisins: "L'expression « uli al-albab » n'apparait pas dans les versets immediatement voisins (178, 180) mais elle est un marqueur recurrent de la sourate al-Baqarah et du Coran en general. Le verset 178 prescrivait la loi, le verset 179 en donne la sagesse en s'adressant a ceux qui peuvent la comprendre. Le passage de la loi brute a l'interpellation des intelligents montre une pedagogie divine a deux niveaux : la regle pour tous, la sagesse pour ceux qui reflechissent.",
              axe3_sourate: "La racine a-w-l dans le sens de « posseder, detenir » est presente dans toute la sourate al-Baqarah a travers l'expression « uli al-albab ». En 2:197, « craignez-Moi, o uli al-albab » — la meme interpellation dans le contexte du pelerinage. En 2:269, « seuls s'en souviennent les uli al-albab ». La sourate utilise cette expression pour marquer les moments ou la reflexion profonde est requise — le qisas en est un.",
              axe4_coherence: "L'expression « uli al-albab » apparait environ 16 fois dans le Coran. En 3:7, « seuls les uli al-albab s'en souviennent ». En 12:111, « un enseignement pour les uli al-albab ». En 38:29, « afin qu'ils meditent ses versets et que s'en souviennent les uli al-albab ». Le Coran utilise cette expression comme un marqueur de profondeur — elle signale que le passage requiert une intelligence active, une reflexion qui depasse la surface des mots.",
              axe5_frequence: "Pour la mission du khalifa, les « uli al-albab » sont ceux qui gouvernent leur intelligence au service de la mission. Le khalifa ideal est un « possesseur d'intelligence » — il ne subit pas la realite mais la comprend en profondeur. La gouvernance de l'intelligence est le prealable a la gouvernance de la terre. Le verset montre que la sagesse de la loi divine est accessible a ceux qui exercent activement leur intelligence — la mission du khalifa exige cette maitrise intellectuelle."
            },
            "Famille/Appartenance": {
              status: "probable",
              senses: ["famille", "proches", "ceux qui appartiennent a", "gens de"],
              proof_ctx: "Le sens de famille/appartenance est un sens atteste de la racine a-w-l. Le Lane's donne aussi : les proches, les membres d'un groupe defini par une qualite. Le mot uli peut designer ceux qui appartiennent a un groupe — les « uli al-albab » seraient alors « ceux qui appartiennent au groupe des intelligents ». Ce sens d'appartenance est plus passif que le sens de gouvernance : on appartient a un groupe plutot qu'on en maitrise la qualite definitoire.",
              axe1_verset: "Le sens de famille/appartenance dans le verset 179 ajouterait une dimension communautaire : les « uli al-albab » ne seraient pas seulement des individus intelligents mais une famille, un groupe lie par la qualite commune de l'intelligence essentielle. Le verset s'adresserait alors a une communaute de comprehension — ceux qui partagent la capacite de saisir le paradoxe du qisas forment une famille spirituelle. Cette lecture enrichit le sens sans contredire la lecture principale.",
              axe2_voisins: "Le verset 178 parlait de la communaute des croyants (le libre pour le libre, etc.) — les « uli al-albab » du verset 179 seraient alors la sous-communaute de ceux qui comprennent la sagesse de cette loi. Le passage de la communaute entiere (178) aux intelligents (179) montre une hierarchie de comprehension au sein de la communaute.",
              axe3_sourate: "La sourate al-Baqarah est structuree autour de groupes : les croyants, les mecreants, les hypocrites. Les « uli al-albab » seraient un sous-groupe des croyants — ceux qui ne se contentent pas d'obeir mais qui comprennent pourquoi ils obeissent. Cette famille de l'intelligence est transversale — elle ne depend pas de la naissance mais de la capacite de reflexion.",
              axe4_coherence: "Dans le Coran, les « uli al-albab » apparaissent comme un groupe recurent interpelle directement. En 65:10, « craignez Dieu, o uli al-albab qui croyez ». Ce verset confirme que les uli al-albab forment un groupe identifiable — une famille de la comprehension au sein de la communaute croyante. Le Coran les traite comme un interlocuteur privilegie.",
              axe5_frequence: "Pour la mission du khalifa, le sens d'appartenance montre que l'intelligence n'est pas une qualite isolee mais communautaire. Les khalifas intelligents forment une famille — ils se reconnaissent mutuellement par leur capacite de comprehension. La mission est portee par cette famille de l'intelligence qui traverse les generations et les geographies."
            }
          }
        }
      },
      // lbb pos=6
      {
        word_key: "lbb", position: 6, sense_chosen: "intelligence/essence",
        analysis_axes: {
          sense_chosen: "intelligence/essence",
          concept_chosen: "Intelligence/Essence",
          concepts: {
            "Intelligence/Essence": {
              status: "retenu",
              senses: ["intelligence pure", "essence", "noyau", "coeur de la chose", "raison profonde"],
              proof_ctx: "Le nom al-albabi est un nom pluriel au genitif de la racine l-b-b. Le Lane's donne : le lubb est le noyau d'un fruit, ce qui reste quand on enleve l'ecorce, l'essence d'une chose, l'intelligence pure. Le pluriel albab designe les intelligences essentielles — les capacites de comprehension depouillees de tout superflu. L'article defini (al-) marque la totalite : les intelligences en tant que telles, le concept meme d'intelligence pure. Le lubb est ce qui reste quand on enleve les couches superficielles — l'intelligence essentielle qui saisit directement la verite sans se laisser distraire par les apparences.",
              axe1_verset: "Le mot al-albabi complete l'interpellation « ya uli al-albab ». Le champ lexical (qisas, vie, posseder, intelligence, preservation) montre que le verset s'adresse a l'intelligence essentielle — celle qui peut saisir le paradoxe (dans la retribution il y a la vie). Comprendre ce paradoxe requiert de depasser la surface : la surface dit « retribution = mort » mais l'essence dit « retribution = vie ». Seule l'intelligence depouillee (lubb) peut operer ce renversement de perspective.",
              axe2_voisins: "Le verset 178 enoncait la loi du qisas sans demander de comprehension particuliere — la loi est pour tous. Le verset 179 interpelle les intelligences essentielles pour reveler la sagesse de cette loi. Le passage de la loi a la sagesse marque le passage de l'obeissance a la comprehension. Les versets suivants (180 et suivants) passeront au testament — un sujet qui requiert aussi la sagesse et la reflexion.",
              axe3_sourate: "La racine l-b-b apparait dans la sourate al-Baqarah en 2:179, 2:197 et 2:269. Chaque occurrence marque un moment de sagesse profonde : 2:179 (sagesse du qisas), 2:197 (sagesse du pelerinage), 2:269 (sagesse comme don divin). La sourate utilise al-albab comme un signal — quand ce mot apparait, le lecteur doit activer son intelligence essentielle pour saisir ce qui suit.",
              axe4_coherence: "La racine l-b-b apparait environ 16 fois dans le Coran, toujours dans l'expression « uli al-albab ». En 3:190, « dans la creation des cieux et de la terre il y a des signes pour les uli al-albab ». En 39:18, « ceux-la sont les uli al-albab ». Le Coran associe toujours l'intelligence essentielle a la capacite de voir les signes divins — dans la nature (3:190), dans la loi (2:179), dans la revelation (38:29). Le lubb est l'organe de la comprehension des signes.",
              axe5_frequence: "Pour la mission du khalifa, l'intelligence essentielle est l'outil principal de la mission. Le khalifa ne gouverne pas par la force brute mais par la comprehension profonde des realites. Le lubb — l'intelligence depouillee — lui permet de voir au-dela des apparences et de saisir les verites essentielles. La mission du khalifa est une mission d'intelligence : comprendre les lois divines, en saisir la sagesse, et les appliquer avec discernement."
            }
          }
        }
      },
      // wqy pos=8
      {
        word_key: "wqy", position: 8, sense_chosen: "protection/preservation",
        analysis_axes: {
          sense_chosen: "protection/preservation",
          concept_chosen: "Protection/Preservation",
          concepts: {
            "Protection/Preservation": {
              status: "retenu",
              senses: ["se proteger", "se premunir", "se preserver", "prendre des precautions", "se garder de"],
              proof_ctx: "Le verbe tattaquna est un inaccompli 2MP de la forme VIII de la racine w-q-y. Le Lane's donne : se proteger, se premunir contre un danger, se garder de, prendre des precautions. La forme VIII (ittaqa) ajoute la reflexivite au sens de base (waqa = proteger) — se proteger soi-meme. La taqwa n'est pas la peur mais la preservation active : mettre un bouclier entre soi et le danger. L'inaccompli marque la continuite — la protection est un etat permanent, pas un acte ponctuel. Le verbe avec « la'allakum » (peut-etre que vous) forme une finalite esperee : le qisas est institue dans l'espoir que les gens se preservent.",
              axe1_verset: "Le verbe tattaquna ferme le verset en donnant la finalite ultime du qisas : la preservation. Le champ lexical construit une chaine logique : suivi/pistage → vie → intelligence → preservation. Le qisas preserve la vie, la vie est comprise par l'intelligence, et la comprehension mene a la preservation de soi. La taqwa est l'aboutissement — celui qui comprend la sagesse du qisas se preserve du mal. Le verset se lit comme un syllogisme : si le qisas preserve la vie, alors comprendre le qisas mene a se preserver soi-meme.",
              axe2_voisins: "Le verset 178 prescrivait le qisas et ajoutait « et dans le pardon il y a un allegement de votre Seigneur et une misericorde ». Le verset 179 ajoute que dans le qisas il y a vie et preservation. Les deux versets se completent : le qisas comme loi (178) et le qisas comme sagesse (179). Le verbe tattaquna fait echo a la dimension de misericorde du verset 178 — la preservation de soi est une forme de misericorde envers soi-meme.",
              axe3_sourate: "La racine w-q-y est omnipresente dans la sourate al-Baqarah. En 2:2, « guidance pour les muttaqin (ceux qui se preservent) ». En 2:21, « adorez votre Seigneur afin que vous vous preserviez (tattaquna) ». En 2:183, « le jeune vous a ete prescrit afin que vous vous preserviez ». La sourate utilise la taqwa comme finalite recurrente de chaque prescription — le qisas (179), le jeune (183), le pelerinage (197) visent tous la meme finalite : la preservation.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. En 3:102, « craignez Dieu comme Il merite d'etre craint ». En 59:18, « craignez Dieu et que chaque ame regarde ce qu'elle a avance pour demain ». Le Coran fait de la taqwa (protection/preservation) le concept central de la relation entre l'homme et Dieu. La taqwa n'est pas la peur paralysante mais la vigilance protectrice — se premunir activement contre ce qui nuit a l'ame.",
              axe5_frequence: "Pour la mission du khalifa, la preservation est la finalite de toute action. Le khalifa ne detruit pas — il preserve. Il preserve la vie (par le qisas), l'intelligence (par l'enseignement), la societe (par la justice). La taqwa du khalifa est double : il se preserve lui-meme du mal et il preserve les autres par l'application de la loi divine. La mission du khalifa est fondamentalement une mission de preservation — proteger ce que Dieu a cree et ce que Dieu a prescrit."
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

  const verseIds = [186];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 179 ===\n');
  await processVerse(179);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V179 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
