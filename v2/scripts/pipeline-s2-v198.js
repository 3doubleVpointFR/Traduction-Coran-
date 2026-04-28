const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 198
// verse_id=205, analysis_id=562
// "Ce n'est pas un penchant pour vous de rechercher une
//  faveur de votre Seigneur. Puis quand vous deferlez
//  depuis Arafat, rappelez Dieu pres du lieu de culte
//  sacre. Et rappelez-Le comme Il vous a guides, meme si
//  avant cela vous etiez parmi les egares."
// Pelerinage, commerce licite, Arafat, rappel de Dieu
// =====================================================

const verseData = {
  198: {
    verse_id: 205,
    analysis_id: 562,
    translation_arab: "Il n'y a pas de penchant sur vous a ce que vous recherchiez une faveur de votre Seigneur. Puis quand vous deferlez depuis Arafat, rappelez Dieu pres du lieu de culte sacre. Et rappelez-Le comme Il vous a guides, meme si avant cela vous etiez parmi les egares.",
    full_translation: "Ce n'est pas un peche pour vous de rechercher quelque grace de votre Seigneur. Puis quand vous deferlerez depuis Arafat, invoquez Allah, a al-Mash'ar-al-Haram. Et invoquez-Le comme Il vous a guides, quoique auparavant vous etiez du nombre des egares.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre avec une formule de levee d'interdit : **laysa alaykum junahun** (il n'y a pas de penchant/inclination [vers le mal] sur vous). Le mot **junahun** est un nom indefini au nominatif de la racine j-n-h. Le Lane's donne : inclination, penchant, deviation vers un cote, aile (d'un oiseau). Le janah est l'inclination d'un cote — comme l'aile d'un oiseau qui penche. La formule « laysa alaykum junah » est une construction nominale negative qui leve un interdit ou une gene : il n'y a pas d'inclination vers le mal sur vous, c'est-a-dire pas de faute. Le verbe **tabtaghu** est un inaccompli 2MP de la forme VIII (iftaala) de la racine b-gh-y. Le Lane's donne pour la forme VIII : rechercher, desirer ardemment, queter, aspirer a obtenir. La forme VIII (tabtaghu) est reflexive et intensive — celui qui recherche le fait activement et pour lui-meme. L'inaccompli marque une action en cours ou habituelle — la recherche n'est pas ponctuelle mais continue. Le nom **fadlan** est un nom accusatif indefini de la racine f-d-l. Le Lane's donne : excellence, surplus, surplus de merite, faveur, grace, bienfait, reste. Le fadl est ce qui depasse le necessaire — l'excellence est le surplus qui va au-dela du minimum. Le nom est indefini (fadlan, pas al-fadl) — une faveur, sans preciser laquelle. Le nom **rabbikum** est un nom defini avec pronom suffixe 2MP de la racine r-b-b. Le Lane's donne : seigneur, maitre, celui qui eleve et fait croitre, autorite bienveillante. Le rabb est celui qui accompagne la croissance — il ne domine pas par la force mais par l'accompagnement. Le pronom suffixe (kum = votre) marque la relation directe entre Dieu et les croyants. Le verbe **afadtum** est un accompli 2MP de la forme IV (af'ala) de la racine f-d-w (ou f-y-d). Le Lane's donne pour la forme IV : se repandre en masse, deferler, se deverser depuis un lieu eleve vers un lieu bas, couler abondamment. La forme IV (ifada) ajoute l'idee de faire jaillir, de se deverser avec force. L'accompli dans une proposition conditionnelle (idha afadtum) generalise l'action — quand vous deferlez (a chaque pelerinage). Le nom **Arafat** est un nom propre de lieu, pluriel feminin indefini de la racine '-r-f. Le Lane's donne pour la racine : connaitre, reconnaitre, savoir, identifier. Le lieu est nomme Arafat — les sources etymologiques indiquent que le nom est lie a la connaissance ou a la reconnaissance. Le texte ne precise pas pourquoi ce lieu porte ce nom ; il designe simplement le lieu connu d'ou les pelerins deferlent. Le nom **Allah** est le nom propre de Dieu, defini, de la racine a-l-h. Le Lane's donne : divinite, ce qui est adore, ce vers quoi on se tourne avec devotion. Le mot est defini par nature — il designe LE Dieu, la divinite unique et connue. Le nom **al-mash'ari** est un nom defini de la racine sh-'-r, au schema maf'al qui designe le lieu ou se fait l'action. Le Lane's donne pour sh-'-r : sentir, percevoir, etre conscient, accomplir un rite. Le mash'ar est le lieu ou l'on accomplit un rite, le lieu de culte. L'article al- le definit comme LE lieu de culte connu — al-Mash'ar al-Haram. Le nom **al-harami** est un nom defini de la racine h-r-m. Le Lane's donne : interdit, sacre, inviolable, ce qui est protege par un interdit. Le haram est ce dont l'acces ou la violation est interdit — le sacre est ce qui est protege. Le qualificatif « sacre » s'ajoute au lieu de culte pour former « le lieu de culte sacre » — un lieu ou le rite est accompli et dont la violation est interdite. Le verbe **udhkuruhu** est un imperatif 2MP de la racine dh-k-r avec pronom suffixe 3MS. Le Lane's donne : se souvenir, rappeler, mentionner, evoquer, garder en memoire. Le dhikr est l'acte de ramener a la conscience ce qui risque d'etre oublie. L'imperatif marque un ordre direct — rappelez-Le, c'est une injonction. Le pronom suffixe (-hu = Le) renvoie a Dieu. Le verbe **hadakum** est un accompli 3MS de la racine h-d-y avec pronom suffixe 2MP. Le Lane's donne : guider, diriger, montrer le chemin, mener vers la bonne voie. La guidance est un acte exterieur et directif — celui qui guide montre le chemin a celui qui est guide. L'accompli marque que la guidance a deja eu lieu — Dieu vous a guides, c'est un fait accompli. Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister, se trouver dans un etat. Le verbe kana au passe marque un etat revolu — vous etiez (mais vous ne l'etes plus necessairement). Le nom **qablihi** est un nom avec pronom suffixe 3MS de la racine q-b-l. Le Lane's donne : avant, anterieurement, ce qui precede dans le temps. Le pronom suffixe (-hi) renvoie a la guidance — avant cela, avant que Dieu ne vous guide. Le nom **ad-dallin** est un participe actif pluriel defini de la racine d-l-l. Le Lane's donne : s'egarer, devier du chemin, perdre la voie, errer, disparaitre. Le participe actif marque une action continue — les egares sont ceux qui font activement l'action de s'egarer, ils sont en etat constant de deviation. L'article al- et le pluriel designent une categorie connue : LES egares, un groupe identifie. La particule « la-min » (certes parmi) est une double emphase : vous etiez CERTAINEMENT PARMI les egares.

§JUSTIFICATION§
**penchant** — Le sens retenu est « Inclination/Penchant ». Le mot « penchant » est choisi car junah designe etymologiquement l'inclination d'un cote, comme l'aile (janah) qui fait pencher. L'alternative « peche » (utilisee par Hamidullah et d'autres) est ecartee car elle ajoute une connotation religieuse chretienne absente de la racine — j-n-h est l'inclination physique, pas la faute morale au sens theologique. « Faute » est egalement ecarte car trop juridique. Le texte dit qu'il n'y a pas d'inclination vers le mal dans le fait de rechercher une faveur de Dieu.

**recherchiez** — Le sens retenu est « Recherche/Quete ». Le mot « rechercher » est choisi car la forme VIII (tabtaghu) marque une quete active et reflexive — on cherche pour soi-meme. L'alternative « transgresser » (sens premier de b-gh-y) est ecartee car la forme VIII deplait l'idee de transgression vers celle de quete ardente — celui qui recherche aspire a obtenir quelque chose. Le contexte (rechercher une faveur de Dieu) confirme que c'est la quete, pas la transgression.

**faveur** — Le sens retenu est « Excellence/Faveur ». Le mot « faveur » est choisi car fadl designe le surplus, l'excellence qui depasse le necessaire. L'alternative « grace » est ecartee car elle appartient au vocabulaire religieux chretien. L'alternative « surplus » est ecartee car trop materiel — le fadl de Dieu est plus large qu'un simple surplus economique. Le texte parle d'une faveur de votre Seigneur, ce qui couvre le commerce, la subsistance, et tout bienfait.

**votre Seigneur** — Le sens retenu est « Seigneurie/Autorite bienveillante ». Le mot « Seigneur » est choisi car rabb designe celui qui accompagne la croissance et exerce une autorite bienveillante. L'alternative « maitre » est ecartee car trop autoritaire — rabb implique l'accompagnement, pas la domination. L'alternative « educateur » est ecartee car trop restreint au domaine pedagogique.

**deferlez** — Le sens retenu est « Espace/Debordement ». Le mot « deferler » est choisi car la forme IV (afada) designe le fait de se repandre en masse depuis un lieu eleve — les pelerins quittent Arafat et deferlent comme un flot. L'alternative « couler » est ecartee car trop liquide — les pelerins sont des etres humains qui se deplacent en masse, pas un fluide. « Se repandre » est egalement possible mais « deferler » capture mieux la force et le mouvement collectif.

**Arafat** — Le sens retenu est « Connaissance/Reconnaissance ». Le mot est un nom propre de lieu et reste tel quel dans la traduction. La racine '-r-f signifie connaitre et reconnaitre — le lieu est nomme pour son lien avec la connaissance, mais le texte l'utilise comme toponyme sans developper l'etymologie.

**Dieu** — Le sens retenu est « Divinite ». Le mot « Dieu » est la traduction standard d'Allah — la divinite unique.

**le lieu de culte** — Le sens retenu est « Rituel/Culte ». Le mot « lieu de culte » est choisi car mash'ar est un nom de lieu (schema maf'al) de la racine sh-'-r qui designe le lieu ou l'on accomplit un rite. L'alternative « conscience/perception » (sens premier de sh-'-r) est ecartee car le schema maf'al designe specifiquement un lieu, pas un etat mental. Al-Mash'ar al-Haram est le lieu de culte sacre, connu sous le nom de Muzdalifa.

**sacre** — Le sens retenu est « Interdiction/Sacre ». Le mot « sacre » est choisi car haram designe ce qui est protege par un interdit — l'acces ou la violation sont interdits. L'alternative « interdit » seul est ecartee car en francais « lieu interdit » signifie qu'on n'a pas le droit d'y aller, alors que « lieu sacre » signifie que le lieu est protege et inviolable.

**rappelez** — Le sens retenu est « Memoire/Rappel ». Le mot « rappeler » est choisi car dhikr est l'acte de ramener a la conscience. L'alternative « mentionner » est ecartee car trop superficiel — le dhikr est plus profond qu'une simple mention, c'est un acte de memoire active. L'alternative « invoquer » (utilisee par Hamidullah) est ecartee car elle ajoute une connotation de supplication absente de la racine — rappeler et invoquer sont deux actes differents.

**guides** — Le sens retenu est « Guidance/Direction ». Le mot « guider » est choisi car hada designe l'acte de montrer le chemin. L'alternative « diriger » est ecartee car trop autoritaire — guider implique montrer la voie que l'autre peut suivre ou non.

**vous etiez** — Le sens retenu est « Etre/Existence ». Le verbe kuntum marque un etat passe revolu.

**avant cela** — Le sens retenu est « Anteriorite/Passe ». Le mot « avant » est choisi car qablihi designe le temps qui precede la guidance. L'alternative « reception/accueil » est ecartee car le contexte est clairement temporel (avant la guidance), pas un acte de recevoir.

**les egares** — Le sens retenu est « Egarement/Deviation ». Le mot « egares » est choisi car le participe actif ad-dallin designe ceux qui devient du chemin. L'alternative « disparus » est ecartee car trop physique — l'egarement ici est celui de la voie, pas la disparition materielle. Le verset mentionne la guidance (hada) — les egares sont ceux qui n'avaient pas encore recu cette guidance.

§CRITIQUE§
Le mot le plus significatif est **junah** traduit par « peche » dans les traductions courantes (Hamidullah, Blachere, Berque). Ce choix vient du vocabulaire religieux chretien ou « peche » est le terme standard pour toute faute devant Dieu. Mais la racine j-n-h signifie « pencher d'un cote, incliner » — le janah est l'aile qui fait pencher. Le junah est donc une inclination vers le mal, un penchant, pas un peche au sens theologique. La difference est importante : « il n'y a pas de peche » implique une transgression morale pardonnee, alors que « il n'y a pas de penchant vers le mal » dit simplement que l'acte n'a rien de mauvais en soi. Le texte ne pardonne pas une faute — il affirme qu'il n'y a aucune faute. Le mot **fadl** est traduit par « grace » par Hamidullah. Ce mot appartient au vocabulaire chretien de la grace divine. Le fadl est etymologiquement le surplus, l'excellence, la faveur — un bienfait concret, pas la grace theologique. Le mot **invoquez** (Hamidullah pour udhkuru) est une interpretation : le texte dit « rappelez » (dhikr = memoire/rappel), pas « invoquez » (du'a = supplication). Rappeler Dieu et invoquer Dieu sont deux actes differents — le premier ramene a la conscience, le second demande quelque chose. La racine dh-k-r ne contient pas l'idee de supplication.`,
    segments: [
      { fr: "il n'y a pas de", phon: "laysa", arabic: "\u0644\u064e\u064a\u0652\u0633\u064e", is_particle: true, position: 0 },
      { fr: "penchant", pos: "nom", phon: "junahun", arabic: "\u062c\u064f\u0646\u064e\u0627\u062d\u064c", word_key: "jnh", is_particle: false, sense_retenu: "penchant", position: 1 },
      { fr: "sur vous", phon: "alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652", is_particle: true, position: 2 },
      { fr: "a ce que", phon: "an", arabic: "\u0623\u064e\u0646", is_particle: true, position: 3 },
      { fr: "vous recherchiez", pos: "verbe", phon: "tabtaghu", arabic: "\u062a\u064e\u0628\u0652\u062a\u064e\u063a\u064f\u0648\u0627\u06df", word_key: "bghy", is_particle: false, sense_retenu: "rechercher", position: 4 },
      { fr: "une faveur", pos: "nom", phon: "fadlan", arabic: "\u0641\u064e\u0636\u0652\u0644\u064b\u0627", word_key: "fdl", is_particle: false, sense_retenu: "faveur", position: 5 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646", is_particle: true, position: 6 },
      { fr: "votre Seigneur", pos: "nom", phon: "rabbikum", arabic: "\u0631\u0651\u064e\u0628\u0651\u0650\u0643\u064f\u0645\u0652", word_key: "rbb", is_particle: false, sense_retenu: "Seigneur", position: 7 },
      { fr: "puis quand", phon: "fa-idha", arabic: "\u0641\u064e\u0625\u0650\u0630\u064e\u0627\u0653", is_particle: true, position: 8 },
      { fr: "vous deferlez", pos: "verbe", phon: "afadtum", arabic: "\u0623\u064e\u0641\u064e\u0636\u0652\u062a\u064f\u0645", word_key: "fdw", is_particle: false, sense_retenu: "deferler", position: 9 },
      { fr: "depuis", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 10 },
      { fr: "Arafat", pos: "nom", phon: "Arafat", arabic: "\u0639\u064e\u0631\u064e\u0641\u064e\u0640\u0670\u062a\u064d", word_key: "erf", is_particle: false, sense_retenu: "Arafat", position: 11 },
      { fr: "rappelez", pos: "verbe", phon: "udhkuru", arabic: "\u0641\u064e\u0671\u0630\u0652\u0643\u064f\u0631\u064f\u0648\u0627\u06df", word_key: "dhkr", is_particle: false, sense_retenu: "rappeler", position: 12 },
      { fr: "Dieu", pos: "nom", phon: "Allah", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 13 },
      { fr: "pres de", phon: "'inda", arabic: "\u0639\u0650\u0646\u062f\u064e", is_particle: true, position: 14 },
      { fr: "le lieu de culte", pos: "nom", phon: "al-mash'ari", arabic: "\u0671\u0644\u0652\u0645\u064e\u0634\u0652\u0639\u064e\u0631\u0650", word_key: "sher", is_particle: false, sense_retenu: "lieu de culte", position: 15 },
      { fr: "sacre", pos: "nom", phon: "al-harami", arabic: "\u0671\u0644\u0652\u062d\u064e\u0631\u064e\u0627\u0645\u0650", word_key: "hrm", is_particle: false, sense_retenu: "sacre", position: 16 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 17 },
      { fr: "rappelez-Le", pos: "verbe", phon: "udhkuruhu", arabic: "\u0671\u0630\u0652\u0643\u064f\u0631\u064f\u0648\u0647\u064f", word_key: "dhkr", is_particle: false, sense_retenu: "rappeler", position: 18 },
      { fr: "comme", phon: "kama", arabic: "\u0643\u064e\u0645\u064e\u0627", is_particle: true, position: 19 },
      { fr: "Il vous a guides", pos: "verbe", phon: "hadakum", arabic: "\u0647\u064e\u062f\u064e\u0649\u0640\u0670\u0643\u064f\u0645\u0652", word_key: "hdy", is_particle: false, sense_retenu: "guider", position: 20 },
      { fr: "et meme si", phon: "wa-in", arabic: "\u0648\u064e\u0625\u0650\u0646", is_particle: true, position: 21 },
      { fr: "vous etiez", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064f\u0646\u062a\u064f\u0645", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 22 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646", is_particle: true, position: 23 },
      { fr: "avant cela", pos: "nom", phon: "qablihi", arabic: "\u0642\u064e\u0628\u0652\u0644\u0650\u0647\u0650\u06e6", word_key: "qbl", is_particle: false, sense_retenu: "avant", position: 24 },
      { fr: "certes parmi", phon: "la-min", arabic: "\u0644\u064e\u0645\u0650\u0646\u064e", is_particle: true, position: 25 },
      { fr: "les egares", pos: "nom", phon: "ad-dallin", arabic: "\u0671\u0644\u0636\u0651\u064e\u0640\u0670\u0644\u0651\u0650\u064a\u0646\u064e", word_key: "dll", is_particle: false, sense_retenu: "egares", position: 26 }
    ],
    words: [
      // jnh pos=1
      {
        word_key: "jnh", position: 1, sense_chosen: "penchant",
        analysis_axes: {
          sense_chosen: "penchant",
          concept_chosen: "Inclination/Penchant",
          concepts: {
            "Inclination/Penchant": {
              status: "retenu",
              senses: ["pencher", "incliner", "dévier d'un côté", "penchant", "tendance", "inclination vers le mal"],
              proof_ctx: "Le nom junahun est un nom indefini au nominatif de la racine j-n-h. Le Lane's donne : inclination, penchant, deviation d'un cote, l'acte de pencher vers quelque chose. Le janah est l'aile d'un oiseau — ce qui fait pencher d'un cote. Le junah est donc l'inclination vers quelque chose, le penchant vers un acte. La construction « laysa alaykum junah » leve un interdit : il n'y a pas d'inclination vers le mal dans le fait de rechercher une faveur de Dieu. Le concept d'inclination est un etat interieur qui se manifeste par un mouvement vers l'exterieur — on penche vers quelque chose, on devie d'un cote. Le nom est indefini (junahun, pas al-junah) — un penchant quelconque, pas un penchant specifique. Le sens de « Transgression/Injustice » (autre concept de la racine) est ecarte car le junah n'est pas une transgression active mais une inclination, une tendance — le texte dit qu'il n'y a meme pas de tendance vers le mal, pas qu'il n'y a pas de transgression commise.",
              axe1_verset: "Le mot junahun ouvre le verset en levant un interdit suppose. Le champ lexical (rechercher, faveur, Seigneur, Arafat, lieu de culte, rappel, guidance) est entierement lie au pelerinage et au rapport avec Dieu. La question sous-jacente est : peut-on faire du commerce pendant le pelerinage ? La reponse est qu'il n'y a pas d'inclination vers le mal dans le fait de rechercher une faveur de Dieu — le commerce pendant le pelerinage n'est pas une deviation. Le junah est place en position de sujet nie (laysa junahun) — c'est l'absence d'inclination qui est affirmee, pas la presence d'une permission.",
              axe2_voisins: "Le verset 2:197 posait les regles du pelerinage : pas de rapport sexuel, pas de perversite, pas de dispute. Le verset 2:198 leve une inquietude liee a ces interdits : si tout acte mondain est interdit pendant le pelerinage, qu'en est-il du commerce ? Le texte repond : il n'y a pas de penchant vers le mal dans la recherche d'une faveur de Dieu. Le verset 2:199 continuera avec les rites de deferlement. La sequence montre que le pelerinage a des interdits precis (2:197) mais que le commerce n'en fait pas partie (2:198).",
              axe3_sourate: "La racine j-n-h apparait dans la sourate al-Baqarah en 2:229, 2:230, 2:233, 2:234, 2:235, 2:236 avec la meme construction « la junaha alaykuma/alayha » (pas de penchant sur vous/elle). Chaque occurrence leve un interdit dans un domaine specifique : le divorce, le remariage, l'allaitement, le delai de viduité. La sourate utilise junah comme terme technique pour lever des interdits — chaque « la junah » est une autorisation divine explicite.",
              axe4_coherence: "La racine j-n-h apparait environ 24 fois dans le Coran. La construction « la junaha » apparait dans les versets legislatifs pour lever des interdits presumes : 2:158 (parcourir Safa et Marwa), 2:198 (commerce pendant le pelerinage), 2:229-236 (regles du divorce). Le Coran utilise junah pour dire qu'un acte que les gens croyaient interdit ne l'est pas — c'est une correction d'une croyance erronee. Le junah est toujours nie (la junah) — il n'apparait presque jamais pour affirmer une faute mais pour nier une fausse interdiction.",
              axe5_frequence: "Pour la mission du khalifa, la levee des faux interdits est essentielle. Le khalifa ne doit pas s'imposer des restrictions que Dieu n'a pas posees — le commerce pendant le pelerinage est licite parce que Dieu le dit. Le khalifa qui s'interdit ce que Dieu a permis ajoute a la religion ce qui n'en fait pas partie. La formule « la junaha » libere le khalifa des superstitions et des interdits inventes par les hommes."
            },
            "Transgression/Injustice": {
              status: "peu_probable",
              senses: ["transgression", "injustice", "péché", "faute", "délit"],
              proof_ctx: "Le sens de transgression est atteste dans la racine j-n-h au sens large — le janah peut etre une deviation qui constitue une faute. Le Lane's donne junah comme « inclination towards sin ». Mais la distinction philosophique est que l'inclination vers le mal est un etat prealable a la transgression — on penche d'abord, puis on transgresse. Le junah est le penchant, pas l'acte transgresse lui-meme. Le texte nie le penchant (laysa junahun), pas la transgression — il dit qu'il n'y a meme pas d'inclination vers le mal, ce qui est plus fort que de dire qu'il n'y a pas de transgression.",
              axe1_verset: "Le mot junahun dans le contexte du pelerinage et du commerce pourrait etre lu comme une transgression rituelle. Le champ lexical (pelerinage, Arafat, lieu sacre) est religieux, ce qui pourrait favoriser le sens de transgression. Cependant, la construction negative (laysa junahun) est une formule de levee d'interdit, pas une formule de pardon de transgression — le texte ne pardonne pas un peche commis mais affirme l'absence de tout penchant vers le mal.",
              axe2_voisins: "Le verset 2:197 interdisait la perversite (fusuq) et la dispute pendant le pelerinage. Si le verset 2:198 utilisait « transgression » pour le commerce, cela mettrait le commerce au meme niveau que la perversite. Or le texte distingue clairement : la perversite est interdite (2:197), le commerce ne l'est pas (2:198). Le junah est donc plus doux qu'une transgression — c'est un simple penchant qui est nie.",
              axe3_sourate: "La sourate al-Baqarah utilise d'autres mots pour la transgression active : fasiq (pervers), zalim (injuste), 'asi (desobeissant). Le junah est reserve a la levee d'interdits, pas a la condamnation de transgressions. Le choix de junah plutot que dhanb (peche) ou ithm (faute) confirme que le texte parle d'un penchant, pas d'une transgression.",
              axe4_coherence: "Le Coran utilise des mots specifiques pour la transgression : dhanb (peche), ithm (faute grave), fisq (perversite), zulm (injustice). Le junah n'apparait jamais dans un contexte de condamnation mais toujours dans un contexte de permission. La racine j-n-h dans le Coran est systematiquement liee a la levee d'interdits, pas a la designation de fautes.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est un acte grave qui merite une sanction. Le junah est un simple penchant qui est nie — ce n'est pas du meme ordre. Confondre les deux alourdit la mission du khalifa en transformant des actes permis en fautes."
            },
            "Aile/Côté": {
              status: "nul",
              senses: ["aile d'oiseau", "flanc", "côté du corps"],
              proof_ctx: "Le sens physique d'aile est l'etymologie premiere de la racine j-n-h — le janah est l'aile de l'oiseau. Mais dans le verset, le mot junah est utilise dans une construction juridique (laysa alaykum junah) qui designe un penchant moral, pas une aile physique. Le sens concret est a l'origine du sens abstrait mais n'est pas applicable ici."
            }
          }
        }
      },
      // bghy pos=4
      {
        word_key: "bghy", position: 4, sense_chosen: "rechercher",
        analysis_axes: {
          sense_chosen: "rechercher",
          concept_chosen: "Recherche/Quête",
          concepts: {
            "Recherche/Quête": {
              status: "retenu",
              senses: ["rechercher", "désirer", "quêter", "aspirer à obtenir", "chercher ardemment"],
              proof_ctx: "Le verbe tabtaghu est un inaccompli 2MP de la forme VIII (iftaala) de la racine b-gh-y. Le Lane's donne pour la forme VIII : chercher, rechercher, desirer ardemment, aspirer a obtenir quelque chose. La forme VIII est reflexive et intensive — celui qui recherche le fait activement et pour son propre compte. L'inaccompli marque une action en cours ou habituelle — la recherche d'une faveur de Dieu n'est pas un acte ponctuel mais une quete continue. Le concept de recherche est un acte exterieur et actif — le chercheur se met en mouvement vers ce qu'il desire. La direction est claire : on recherche une faveur (fadl) de son Seigneur (rabb). Le sens de « Transgression/Injustice » est ecarte car la forme VIII deplait l'idee de transgression vers celle de quete — la forme I (bagha) peut signifier transgresser, mais la forme VIII (ibtagha) signifie rechercher.",
              axe1_verset: "Le verbe tabtaghu est l'objet de la levee d'interdit : il n'y a pas de penchant vers le mal dans le fait de rechercher. Le champ lexical (faveur, Seigneur, pelerinage) montre que la recherche porte sur les bienfaits divins — probablement le commerce pendant le pelerinage. La forme VIII (reflexive) souligne que chaque pelerin recherche pour lui-meme — c'est une quete individuelle au sein du rite collectif. L'inaccompli place la recherche dans la duree — les pelerins recherchent continuellement, pas en une seule fois.",
              axe2_voisins: "Le verset 2:197 posait les interdits du pelerinage. Le verset 2:198 autorise la recherche d'une faveur divine malgre ces interdits. La recherche (ibtigha) est distinguee des actes interdits (rapport sexuel, perversite, dispute) — elle appartient a un autre registre. Les versets voisins montrent que le pelerinage n'est pas une renonciation totale au monde mais un rite qui s'accommode de la recherche licite de subsistance.",
              axe3_sourate: "La racine b-gh-y apparait dans la sourate al-Baqarah en 2:90 (baghy = transgression par envie) et en 2:198 (ibtigha = recherche). La sourate utilise la forme I pour la transgression et la forme VIII pour la quete licite. Cette distinction de forme est significative : la meme racine porte le sens negatif de transgression (forme I) et le sens positif de recherche (forme VIII). Le contexte determine lequel s'applique.",
              axe4_coherence: "La racine b-gh-y apparait environ 92 fois dans le Coran. La forme VIII (ibtagha) est utilisee positivement en 2:198, 4:34, 5:2, 17:66, 28:73, 30:46, 45:12 pour la recherche d'une faveur divine ou d'un bienfait. La forme I (bagha) est utilisee negativement pour la transgression et l'injustice. Le Coran maintient cette distinction de forme de maniere coherente — ibtagha est toujours une quete licite, bagha est souvent une transgression.",
              axe5_frequence: "Pour la mission du khalifa, la recherche d'une faveur divine est au coeur de la mission. Le khalifa ne vit pas dans l'ascetisme total — il recherche les bienfaits de Dieu pour les distribuer avec justice. Le commerce pendant le pelerinage est un acte de recherche licite qui montre que le khalifa sait combiner le rite et la vie pratique. La quete du fadl est un acte positif qui s'inscrit dans la mission civilisationnelle du khalifa."
            },
            "Transgression/Injustice": {
              status: "peu_probable",
              senses: ["transgresser", "être injuste", "opprimer", "outrepasser les limites"],
              proof_ctx: "Le sens de transgression est le sens premier de la forme I de b-gh-y — bagha signifie transgresser, etre injuste, outrepasser les limites. Le Lane's donne : he acted wrongfully, he transgressed, he sought to do what was not right. Mais la forme VIII (tabtaghu) deplait ce sens vers la recherche active. La distinction philosophique est que la transgression est un acte de violation d'une limite, tandis que la recherche est un acte d'aspiration vers un objectif. La transgression franchit une frontiere interdite ; la recherche se dirige vers un but desire. Le contexte (rechercher une faveur de Dieu) exclut la transgression — on ne transgresse pas pour obtenir une faveur divine, on la recherche.",
              axe1_verset: "Le verbe dans le contexte « an tabtaghu fadlan min rabbikum » (que vous recherchiez une faveur de votre Seigneur) ne peut pas etre une transgression — on ne « transgresse pas une faveur de Dieu ». Le complement (fadlan min rabbikum) impose le sens de recherche, pas de transgression. La structure grammaticale rend la transgression semantiquement impossible dans cette phrase.",
              axe2_voisins: "Le verset 2:197 utilisait des mots specifiques pour les interdits : rafath (rapport sexuel), fusuq (perversite), jidal (dispute). Si le verset 2:198 voulait parler de transgression, il utiliserait baghy (forme I), pas ibtigha (forme VIII). Le changement de forme est delibere — la forme VIII marque la recherche licite.",
              axe3_sourate: "La sourate al-Baqarah distingue clairement la transgression (baghy en 2:90) de la recherche (ibtigha en 2:198). La racine est la meme mais les formes verbales creent des sens opposes. Cette distinction est une preuve de la precision du texte coranique dans le choix des formes.",
              axe4_coherence: "Le Coran utilise la forme I de b-gh-y (bagha) pour la transgression dans 2:90, 3:83, 10:23, 42:42 et la forme VIII (ibtagha) pour la recherche licite. La coherence est totale : les formes ne se melangent pas.",
              axe5_frequence: "La transgression est un acte qui corrompt l'ordre social. La recherche d'une faveur divine est un acte qui le construit. Les deux sont philosophiquement opposes — le khalifa recherche et ne transgresse pas."
            }
          }
        }
      },
      // fdl pos=5
      {
        word_key: "fdl", position: 5, sense_chosen: "faveur",
        analysis_axes: {
          sense_chosen: "faveur",
          concept_chosen: "Excellence/Faveur",
          concepts: {
            "Excellence/Faveur": {
              status: "retenu",
              senses: ["excellence", "surplus", "faveur", "grâce", "bienfait", "mérite supérieur", "reste", "ce qui dépasse"],
              proof_ctx: "Le nom fadlan est un nom accusatif indefini de la racine f-d-l. Le Lane's donne : excellence, superiority in quality, a surplus, a favour, a bounty, grace, that which exceeds, the remainder. Le fadl est ce qui depasse le necessaire — l'excellence est le surplus qui va au-dela du minimum requis. Le mot est indefini (fadlan, pas al-fadl) — une faveur non determinee, ce qui couvre le commerce, la subsistance, et tout bienfait divin. Le concept d'excellence est un etat de surplus positif — ce qui est en plus de ce qui est du. La faveur divine est le surplus que Dieu accorde a ceux qui le recherchent. Le fadl n'est pas une remuneration meritee mais un don qui depasse ce qui est du — c'est pourquoi il est attribue a Dieu (min rabbikum).",
              axe1_verset: "Le mot fadlan est l'objet de la recherche (tabtaghu fadlan). Le champ lexical (rechercher, Seigneur, pelerinage) montre que la faveur est le but de la quete autorisee. Le verset autorise les pelerins a rechercher une faveur de Dieu — ce qui inclut le commerce et toute activite lucrative licite. Le mot est indefini — aucune faveur specifique n'est designee, ce qui elargit la permission a toute forme de bienfait divin. La preposition « min » (de) attribue la faveur a Dieu — meme le commerce est un fadl de Dieu.",
              axe2_voisins: "Le verset 2:197 posait les interdits du pelerinage. Le verset 2:198 autorise la recherche d'un fadl — la faveur divine. La sequence montre que les interdits du pelerinage concernent les comportements moraux (perversite, dispute), pas les activites economiques. La faveur de Dieu est plus large que le commerce — elle englobe tout bienfait que Dieu accorde a ses serviteurs pendant et en dehors du pelerinage.",
              axe3_sourate: "La racine f-d-l apparait dans la sourate al-Baqarah en 2:64 (« sans le fadl de Dieu et Sa misericorde »), 2:90 (« que Dieu fasse descendre Son fadl »), 2:105 (« Dieu specialise de Son fadl qui Il veut »). La sourate presente le fadl comme un attribut divin — c'est Dieu qui accorde le surplus, l'excellence, la faveur. Le fadl est toujours divin dans la sourate — il vient de Dieu, pas des hommes.",
              axe4_coherence: "La racine f-d-l apparait environ 104 fois dans le Coran. L'expression « fadl min Allah » ou « fadl min rabbikum » est frequente : 3:174, 4:73, 57:21, 62:10. En 62:10, « dispersez-vous sur terre et recherchez le fadl de Dieu » — le meme verbe ibtaghu et le meme objet fadl qu'en 2:198. Le Coran lie systematiquement la recherche du fadl a l'activite terrestre licite : le commerce, le travail, la subsistance sont des formes du fadl divin.",
              axe5_frequence: "Pour la mission du khalifa, le fadl est l'instrument de la mission civilisationnelle. Le khalifa recherche la faveur de Dieu non pas pour accumuler mais pour distribuer avec justice. Le fadl est le surplus qui permet la generosite — celui qui n'a que le necessaire ne peut pas donner. La recherche du fadl pendant le pelerinage montre que la mission du khalifa ne s'arrete pas pendant les rites — elle continue a travers l'activite economique licite."
            }
          }
        }
      },
      // rbb pos=7
      {
        word_key: "rbb", position: 7, sense_chosen: "Seigneur",
        analysis_axes: {
          sense_chosen: "Seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maître", "celui qui élève", "celui qui fait croître", "autorité bienveillante", "éducateur"],
              proof_ctx: "Le nom rabbikum est un nom defini avec pronom suffixe 2MP de la racine r-b-b. Le Lane's donne : lord, master, possessor, owner, he who has the authority over, he who rears and fosters and nourishes. Le rabb est celui qui exerce une autorite bienveillante — il ne domine pas par la force mais accompagne la croissance. Le pronom suffixe (kum = votre) marque la relation directe : votre Seigneur, celui qui vous accompagne. Le concept de seigneurie est un acte permanent et exterieur — le rabb agit continuellement sur ceux qu'il eleve. La mention « fadlan min rabbikum » (une faveur de votre Seigneur) montre que le fadl vient du rabb — c'est le Seigneur qui accorde le surplus, pas le pelerin qui le merite. Le sens de « Croissance/Augmentation » est ecarte comme sens premier ici car le contexte utilise rabb comme titre de Dieu, pas comme description d'un processus de croissance.",
              axe1_verset: "Le mot rabbikum est la source de la faveur recherchee. Le champ lexical (faveur, rechercher, Dieu, lieu de culte, guidance) montre que le Seigneur est au centre du verset — Il est la source du bienfait (fadl), l'objet du rappel (dhikr), et l'agent de la guidance (hada). Le pronom suffixe « kum » (votre) insiste sur la relation personnelle entre les pelerins et leur Seigneur. Le Seigneur n'est pas une entite distante — Il est « votre » Seigneur, celui qui vous appartient et a qui vous appartenez.",
              axe2_voisins: "Le verset 2:196 mentionnait le pelerinage et la visite pieuse « pour Dieu » (lillahi). Le verset 2:198 mentionne « votre Seigneur » (rabbikum). Le passage alterne entre Allah (le nom propre) et Rabb (le titre de seigneurie) — chaque mention souligne un aspect different de la relation avec Dieu. Allah est le nom de la divinite ; Rabb est le titre de l'autorite bienveillante.",
              axe3_sourate: "La racine r-b-b est omnipresente dans la sourate al-Baqarah. En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:62, « ils ont leur recompense aupres de leur Seigneur ». En 2:198, « une faveur de votre Seigneur ». La sourate utilise rabb pour marquer la relation de dependance et de confiance entre les croyants et Dieu — le rabb est la source de tout bienfait.",
              axe4_coherence: "La racine r-b-b apparait environ 980 fois dans le Coran sous la forme Rabb. C'est le titre le plus frequent de Dieu dans le Coran. En 1:2, « Seigneur des mondes ». En 114:1, « Seigneur des hommes ». Le Coran presente Dieu comme Rabb — celui qui eleve, accompagne et nourrit sa creation. Le titre est toujours suivi d'un complement (des mondes, des hommes, votre, leur) qui marque la relation.",
              axe5_frequence: "Pour la mission du khalifa, le rabb est le garant de la mission. Le khalifa n'est pas autonome — il agit sous l'autorite bienveillante de son Seigneur. La recherche du fadl « de votre Seigneur » montre que l'activite economique du khalifa est encadree par la relation avec Dieu. Le khalifa ne cherche pas le profit pour lui-meme mais la faveur de son Seigneur — ce qui transforme le commerce en acte de foi."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["faire croître", "augmenter", "élever", "nourrir", "éduquer"],
              proof_ctx: "Le sens de croissance est un sens fondamental de la racine r-b-b — le Lane's donne : he reared, he fostered, he nourished, he brought up. Le rabb est etymologiquement celui qui fait croitre. La distinction philosophique avec la seigneurie est que la croissance est un processus (faire grandir, augmenter), tandis que la seigneurie est un statut (etre le maitre qui accompagne). Dans le verset, rabbikum est utilise comme titre de Dieu (votre Seigneur), pas comme description d'un processus de croissance. Le titre englobe la croissance comme l'une de ses dimensions mais ne s'y reduit pas."
            },
            "Éducation/Accompagnement": {
              status: "probable",
              senses: ["éduquer", "accompagner", "former", "discipliner avec bienveillance"],
              proof_ctx: "Le sens d'education est un sens derive de la racine r-b-b — le rabb eduque, forme et accompagne. Le Lane's donne le tarbiya (education) comme derive de r-b-b. La distinction philosophique avec la seigneurie est que l'education est un acte specifique (transmettre un savoir, former un caractere), tandis que la seigneurie est un statut global qui englobe l'education, la protection, la subsistance et l'autorite. Dans le verset, le titre « votre Seigneur » couvre toutes ces dimensions sans se limiter a l'education."
            }
          }
        }
      },
      // fdw pos=9
      {
        word_key: "fdw", position: 9, sense_chosen: "deferler",
        analysis_axes: {
          sense_chosen: "deferler",
          concept_chosen: "Espace/Débordement",
          concepts: {
            "Espace/Débordement": {
              status: "retenu",
              senses: ["se répandre en masse", "déferler", "se déverser", "couler abondamment", "déborder", "jaillir"],
              proof_ctx: "Le verbe afadtum est un accompli 2MP de la forme IV (af'ala) de la racine f-d-w (ou f-y-d). Le Lane's donne : he poured, he overflowed, he rushed forth, the people poured forth from Arafat. La forme IV (ifada) ajoute l'idee causative de faire jaillir, de se deverser avec force et en masse. L'accompli dans une proposition conditionnelle (idha afadtum) generalise l'action — quand vous deferlez (a chaque pelerinage). Le concept de debordement est un mouvement physique intense et collectif — la masse des pelerins quitte Arafat et se deverse vers Muzdalifa comme un flot qui deborde de son lit. C'est un mouvement directionnel (de haut en bas, d'un lieu eleve vers un lieu bas), collectif (toute la foule se met en mouvement) et puissant (le deferlement est irresistible). L'ifada est devenue un terme technique du pelerinage — le tawaf al-ifada est le tour rituel qui suit le deferlement depuis Arafat.",
              axe1_verset: "Le verbe afadtum marque la transition entre la station a Arafat et le deplacement vers le lieu de culte sacre (al-Mash'ar al-Haram). Le champ lexical (Arafat, lieu de culte, sacre, rappeler, Dieu) est celui du pelerinage en mouvement. Le deferlement est le moment ou les pelerins quittent Arafat en masse et se dirigent vers Muzdalifa. Le verbe est a l'accompli dans une conditionnelle (idha afadtum min Arafat) — quand vous deferlez depuis Arafat, faites ceci. L'image du deferlement capture la realite physique du pelerinage : des milliers de personnes quittent simultanement un lieu et se deversent vers un autre.",
              axe2_voisins: "Le verset 2:197 posait les regles du pelerinage. Le verset 2:199 reprendra le deferlement avec « afidu min haythu afada an-nas » (deferlez d'ou les gens deferlent). La repetition du verbe afada dans deux versets voisins montre l'importance du deferlement dans le rituel du pelerinage. Le verset 2:198 situe le deferlement depuis Arafat, le verset 2:199 generalisera en disant de deferler d'ou les gens deferlent — eliminant tout privilege de lieu.",
              axe3_sourate: "La racine f-d-w (ou f-y-d) apparait dans la sourate al-Baqarah principalement en 2:198 et 2:199. Les deux occurrences sont liees au pelerinage et au deferlement rituel. La sourate consacre les versets 196-203 au pelerinage, et le deferlement est le moment central du rituel — le passage d'Arafat a Muzdalifa qui marque la fin de la station et le debut du mouvement.",
              axe4_coherence: "La racine f-y-d apparait dans le Coran principalement dans le contexte du pelerinage. En 2:198-199, le deferlement depuis Arafat est un acte rituel collectif. L'image du deversement est physique et puissante — les pelerins ne marchent pas calmement, ils deferlent comme un flot. Le Coran utilise cette image pour montrer que le pelerinage est un acte collectif et puissant, pas une promenade individuelle. Le deferlement est l'unite de la communaute en mouvement.",
              axe5_frequence: "Pour la mission du khalifa, le deferlement est l'image de la mission collective. Le khalifa ne vit pas seul — il est partie d'une communaute qui se met en mouvement ensemble. Le deferlement depuis Arafat montre que la mission du khalifa s'inscrit dans un mouvement collectif plus large que lui. L'ifada est un acte d'humilite — chaque pelerin est un parmi des milliers, le deferlement efface les differences individuelles dans le mouvement commun."
            }
          }
        }
      },
      // erf pos=11
      {
        word_key: "erf", position: 11, sense_chosen: "Arafat",
        analysis_axes: {
          sense_chosen: "Arafat",
          concept_chosen: "Connaissance/Reconnaissance",
          concepts: {
            "Connaissance/Reconnaissance": {
              status: "retenu",
              senses: ["connaître", "reconnaître", "savoir", "identifier", "ce qui est connu", "ce qui est reconnu comme juste", "norme"],
              proof_ctx: "Le nom Arafat est un nom propre de lieu, pluriel feminin indefini de la racine '-r-f. Le Lane's donne pour la racine : he knew, he recognized, he was acquainted with, knowledge, cognizance. Le lieu Arafat tire son nom de la racine '-r-f qui signifie connaitre et reconnaitre. Les sources etymologiques indiquent que le nom est lie a la connaissance — le lieu ou l'on connait, le lieu de la reconnaissance. Cependant, le texte utilise Arafat comme toponyme sans developper explicitement l'etymologie — c'est le nom du lieu d'ou les pelerins deferlent. Le sens de « ce qui est reconnu comme juste » (ma'ruf) est un derive de la meme racine utilise en 2:180 pour « de maniere reconnue ». Ici le mot est un nom propre et fonctionne comme tel dans la phrase. L'analyse porte sur le toponyme et son lien etymologique avec la connaissance, sans forcer une interpretation que le texte ne developpe pas.",
              axe1_verset: "Le mot Arafat est le point de depart du deferlement. Le champ lexical (deferler, lieu de culte, sacre, rappeler, Dieu) est celui du pelerinage en deplacement. Arafat est le lieu d'ou l'on part — la station a Arafat est le sommet du pelerinage, et le deferlement depuis Arafat marque le mouvement vers le lieu de culte sacre. Le nom est un pluriel feminin indefini — les Arafat, ce qui pourrait designer plusieurs collines ou lieux de station. La preposition « min » (depuis) marque le point de depart.",
              axe2_voisins: "Le verset 2:197 posait les regles generales du pelerinage. Le verset 2:198 introduit le lieu specifique d'Arafat comme point de depart du deferlement. Le verset 2:199 generalisera « deferlez d'ou les gens deferlent ». La mention d'Arafat en 2:198 est la seule occurrence du toponyme dans la sourate — elle ancre le rituel dans un lieu geographique precis avant que le verset suivant n'elargisse.",
              axe3_sourate: "La racine '-r-f est presente dans la sourate al-Baqarah sous la forme ma'ruf (ce qui est reconnu) en de nombreuses occurrences (2:178, 2:180, 2:228, 2:229, 2:231, 2:232, 2:233, 2:234, 2:235, 2:236). Le toponyme Arafat en 2:198 est la seule occurrence de la racine comme nom propre. La sourate lie la connaissance/reconnaissance a la justice sociale (bi-l-ma'ruf) et au pelerinage (Arafat) — les deux dimensions de la racine '-r-f sont presentes.",
              axe4_coherence: "La racine '-r-f apparait environ 71 fois dans le Coran. Le toponyme Arafat n'apparait qu'en 2:198 dans tout le Coran — c'est un hapax pour la forme toponymique. Le Coran mentionne Arafat une seule fois pour situer le deferlement du pelerinage. Les autres occurrences de la racine designent la connaissance, la reconnaissance, la norme sociale (ma'ruf) et la negation de la norme (munkar).",
              axe5_frequence: "Pour la mission du khalifa, Arafat est le lieu de la connaissance et de la reconnaissance. Le pelerinage est un acte de connaissance — le khalifa reconnait son Seigneur, reconnait ses pairs, reconnait sa place dans l'univers. Le lien etymologique entre Arafat (le lieu) et ma'rifa (la connaissance) suggere que la station a Arafat est un moment de prise de conscience collective."
            }
          }
        }
      },
      // alh pos=13
      {
        word_key: "alh", position: 13, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "ce qui est adoré", "ce vers quoi on se tourne avec dévotion"],
              proof_ctx: "Le nom Allah est le nom propre de Dieu, defini par nature, de la racine a-l-h. Le Lane's donne : a god, an object of worship, the God. Le mot est le nom propre de la divinite unique — il ne se decline pas et ne se met pas au pluriel (contrairement a ilah = une divinite). Allah est le nom qui designe Dieu dans sa totalite — tous ses attributs, toutes ses qualites, toute sa realite. Dans le verset, Allah est l'objet du rappel (udhkuru Allah) — les pelerins doivent rappeler Dieu pres du lieu de culte sacre. Le nom est place apres l'imperatif comme objet direct — rappelez DIEU, pas autre chose.",
              axe1_verset: "Le mot Allah est l'objet du rappel ordonne aux pelerins. Le champ lexical (deferler, Arafat, lieu de culte, sacre, rappeler, guider) montre que Dieu est au centre du pelerinage — c'est Lui qu'on rappelle, c'est Lui qui guide, c'est Sa faveur qu'on recherche. Le nom Allah apparait une fois dans le verset mais le pronom suffixe -hu (Le) en 2:198 y renvoie une deuxieme fois (udhkuruhu = rappelez-Le). Dieu est mentionne trois fois dans le verset : rabbikum (votre Seigneur), Allah (Dieu), -hu (Le) — chaque mention souligne un aspect different de la relation.",
              axe2_voisins: "Le verset 2:197 mentionnait les regles du pelerinage sans nommer Dieu directement. Le verset 2:198 nomme Dieu trois fois (rabbikum, Allah, -hu). Le verset 2:199 mentionnera la demande de pardon (istighfar). La sequence montre une progression : regles (197) → rappel de Dieu (198) → demande de pardon (199). Le pelerinage est structure autour de la relation avec Dieu.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah — il apparait dans presque chaque passage. La sourate utilise alternativement Allah (le nom propre) et Rabb (le titre de seigneurie). Dans le verset 2:198, les deux sont presents : rabbikum pour la faveur et Allah pour le rappel. La distinction est significative — on recherche la faveur de son Seigneur (relation personnelle) et on rappelle Dieu (nom universel).",
              axe4_coherence: "Le nom Allah apparait environ 2700 fois dans le Coran. C'est le nom le plus frequent du texte coranique. Le Coran utilise Allah comme nom propre unique et definitif de Dieu — il n'a pas besoin d'article car il est defini par nature. Chaque mention d'Allah dans le Coran est un rappel de l'unicite divine.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le donneur d'ordre de la mission. Le khalifa ne s'auto-nomme pas — il est nomme par Dieu (2:30). Le rappel de Dieu pendant le pelerinage est un acte de reaffirmation de cette mission — le khalifa rappelle Celui qui l'a envoye sur terre pour empecher la corruption et etablir la justice."
            }
          }
        }
      },
      // sher pos=15
      {
        word_key: "sher", position: 15, sense_chosen: "lieu de culte",
        analysis_axes: {
          sense_chosen: "lieu de culte",
          concept_chosen: "Rituel/Culte",
          concepts: {
            "Rituel/Culte": {
              status: "retenu",
              senses: ["rite", "culte", "cérémonie sacrée", "pratique rituelle", "lieu de culte", "signe rituel"],
              proof_ctx: "Le nom al-mash'ari est un nom defini au schema maf'al de la racine sh-'-r. Le Lane's donne pour la racine : he perceived, he felt, he was conscious, he knew by means of the senses, a sign, a rite, a religious observance. Le mash'ar (schema maf'al) designe le lieu ou l'on accomplit un rite — le lieu de culte. Le schema maf'al en arabe designe le lieu ou le temps de l'action (comme masjid = lieu de prosternation, maktab = lieu d'ecriture). Le mash'ar est donc le lieu ou l'on accomplit les rites, le lieu de perception religieuse. L'article al- le definit comme LE lieu de culte connu — al-Mash'ar al-Haram, identifie comme Muzdalifa. Le sens de « Conscience/Perception » est ecarte comme sens premier ici car le schema maf'al designe un lieu, pas un etat mental.",
              axe1_verset: "Le mot al-mash'ari est le lieu ou les pelerins doivent rappeler Dieu apres le deferlement depuis Arafat. Le champ lexical (deferler, Arafat, Dieu, sacre, rappeler) montre que le lieu de culte est l'etape suivante du pelerinage : Arafat (station) → deferlement → Mash'ar al-Haram (rappel). Le mot est defini (al-) et qualifie de « sacre » (al-haram) — c'est un lieu specifique, connu et protege. La preposition « 'inda » (pres de, aupres de) situe le rappel de Dieu dans l'espace — pres du lieu de culte sacre.",
              axe2_voisins: "Le verset 2:197 parlait du pelerinage en general. Le verset 2:198 nomme deux lieux precis : Arafat et al-Mash'ar al-Haram. Le verset 2:199 parlera du deferlement general. La mention du Mash'ar en 2:198 ancre le rituel dans un lieu geographique — le pelerinage n'est pas une abstraction mais un deplacement entre des lieux precis, chacun associe a un acte rituel specifique.",
              axe3_sourate: "La racine sh-'-r apparait dans la sourate al-Baqarah en 2:154 (« mais vous ne percevez pas » — la sha'ara), 2:158 (sha'a'ir Allah = les rites de Dieu, pour Safa et Marwa) et 2:198 (al-mash'ar al-haram). La sourate utilise la racine pour la perception (2:154), les rites (2:158) et le lieu de culte (2:198). Les trois dimensions sont liees : les rites sont des signes que l'on percoit dans des lieux specifiques.",
              axe4_coherence: "La racine sh-'-r apparait environ 28 fois dans le Coran. Le terme sha'a'ir (rites, signes) apparait en 2:158, 5:2, 22:32, 22:36 pour designer les rites du pelerinage et les signes de Dieu. Le mash'ar n'apparait qu'en 2:198 — c'est un hapax coranique pour cette forme. Le Coran utilise sha'a'ir au pluriel pour les rites en general et mash'ar au singulier pour un lieu precis.",
              axe5_frequence: "Pour la mission du khalifa, le lieu de culte est l'espace ou la mission se reaffirme. Le khalifa rappelle Dieu dans un lieu sacre — le rituel ancre la mission dans l'espace et le temps. Le mash'ar est le lieu ou la perception du divin est la plus intense — le khalifa y rappelle Celui qui l'a envoye. La sacralite du lieu protege l'acte de rappel de toute profanation."
            },
            "Conscience/Perception": {
              status: "probable",
              senses: ["percevoir", "sentir", "être conscient", "avoir connaissance par les sens", "ressentir"],
              proof_ctx: "Le sens de perception est le sens premier de la racine sh-'-r — le Lane's donne : he perceived, he felt, he knew by means of the senses. La sha'ira est l'acte de percevoir par les sens, d'etre conscient de quelque chose. La distinction philosophique avec le rituel est que la perception est un acte interieur (sentir, etre conscient), tandis que le rituel est un acte exterieur (accomplir une ceremonie). Le schema maf'al oriente vers le lieu (le lieu de perception / de rite), pas vers l'acte mental. Dans le contexte du pelerinage, le mash'ar est un lieu physique — pas un etat de conscience. Le nom de lieu prime sur le sens abstrait de perception."
            }
          }
        }
      },
      // hrm pos=16
      {
        word_key: "hrm", position: 16, sense_chosen: "sacre",
        analysis_axes: {
          sense_chosen: "sacre",
          concept_chosen: "Interdiction/Sacré",
          concepts: {
            "Interdiction/Sacré": {
              status: "retenu",
              senses: ["interdit", "sacré", "inviolable", "protégé par un interdit", "sanctuaire", "ce dont la violation est interdite"],
              proof_ctx: "Le nom al-harami est un nom defini de la racine h-r-m. Le Lane's donne : forbidden, prohibited, sacred, inviolable, that which is protected by a prohibition. Le haram est ce qui est protege par un interdit — la sacralite vient de l'interdiction de violer. Le sacre n'est pas une qualite mystique mais une protection juridique — le haram est sacre parce que sa violation est interdite. L'adjectif al-haram qualifie al-mash'ar — le lieu de culte sacre, le lieu dont la violation est interdite. La construction « al-mash'ar al-haram » est un syntagme defini qui designe un lieu precis et connu. Le concept d'interdiction/sacralite est un etat permanent et exterieur — le lieu est sacre en permanence, pas seulement pendant le pelerinage.",
              axe1_verset: "Le mot al-harami qualifie le lieu de culte (al-mash'ar). Le champ lexical (deferler, Arafat, Dieu, rappeler) montre que la sacralite est la qualite qui distingue ce lieu des autres — on ne rappelle pas Dieu n'importe ou mais pres du lieu de culte SACRE. Le qualificatif « sacre » ajoute une dimension de protection et d'inviolabilite au lieu — il est protege par un interdit divin. La sacralite du lieu garantit la purete du rappel de Dieu.",
              axe2_voisins: "Le verset 2:196 mentionnait « al-masjid al-haram » (la mosquee sacree). Le verset 2:198 mentionne « al-mash'ar al-haram » (le lieu de culte sacre). Les deux syntagmes utilisent al-haram pour qualifier un lieu sacre du pelerinage. La sourate construit une geographie sacree : la mosquee sacree (Masjid al-Haram a La Mecque), le lieu de culte sacre (Mash'ar al-Haram a Muzdalifa), et Arafat. Chaque lieu est un point du parcours du pelerin.",
              axe3_sourate: "La racine h-r-m est tres frequente dans la sourate al-Baqarah. En 2:144, « tourne ton visage vers al-Masjid al-Haram ». En 2:191, « ne les combattez pas pres d'al-Masjid al-Haram ». En 2:194, « le mois sacre (ash-shahru al-haram) ». En 2:196, « jusqu'a ce que l'offrande atteigne son lieu ». En 2:198, « al-Mash'ar al-Haram ». La sourate utilise h-r-m pour les lieux sacres, les mois sacres, les rites sacres — la sacralite est un theme majeur de la section sur le pelerinage.",
              axe4_coherence: "La racine h-r-m apparait environ 83 fois dans le Coran. Le Coran utilise al-haram pour qualifier les lieux (masjid, mash'ar), les mois (shahru al-haram), et les actes (ce qui est interdit). La sacralite coranique est toujours liee a un interdit — le sacre est ce qui est protege par une interdiction de violer. Le Coran ne connait pas le sacre mystique — le sacre est juridique et protecteur.",
              axe5_frequence: "Pour la mission du khalifa, le sacre est le cadre de la mission. Le khalifa respecte les lieux sacres, les mois sacres, les interdits sacres — cette sacralite protege l'ordre social contre la corruption. Le respect du haram est un acte fondateur de la civilisation — sans limites sacrees, tout est permis et la corruption s'installe. Le khalifa qui respecte al-Mash'ar al-Haram reconnait que certains lieux et certains temps sont proteges par Dieu."
            }
          }
        }
      },
      // dhkr pos=18
      {
        word_key: "dhkr", position: 18, sense_chosen: "rappeler",
        analysis_axes: {
          sense_chosen: "rappeler",
          concept_chosen: "Mémoire/Rappel",
          concepts: {
            "Mémoire/Rappel": {
              status: "retenu",
              senses: ["se souvenir", "rappeler", "mentionner", "évoquer", "garder en mémoire", "rappel", "mémoire active"],
              proof_ctx: "Le verbe udhkuruhu est un imperatif 2MP de la racine dh-k-r avec pronom suffixe 3MS (-hu = Le). Le Lane's donne : he remembered, he called to mind, he bore in mind, he mentioned, he spoke of. Le dhikr est l'acte de ramener a la conscience ce qui risque d'etre oublie — la memoire active, pas la memoire passive. L'imperatif marque un ordre direct : rappelez-Le, c'est une injonction divine. Le pronom suffixe (-hu) renvoie a Dieu — rappelez Dieu, ramenez Dieu a votre conscience. Le concept de memoire/rappel est un acte interieur qui se manifeste exterieurement — on rappelle dans son coeur et on manifeste ce rappel par des paroles et des actes. La particule « kama » (comme) qui suit cree une comparaison : rappelez-Le COMME Il vous a guides — le rappel doit etre a la mesure de la guidance recue.",
              axe1_verset: "Le verbe udhkuruhu est le deuxieme imperatif du verset (apres udhkuru Allah en position 12). Le champ lexical (Dieu, lieu de culte, sacre, guider) montre que le rappel est l'acte central du pelerinage apres le deferlement. Le verset ordonne deux rappels : rappeler Dieu pres du lieu de culte sacre (premier imperatif), et Le rappeler comme Il vous a guides (deuxieme imperatif). Le double imperatif insiste sur l'importance du dhikr — ce n'est pas un acte optionnel mais une injonction repetee. La comparaison « kama hadakum » (comme Il vous a guides) proportionne le rappel a la guidance — plus la guidance est grande, plus le rappel doit etre intense.",
              axe2_voisins: "Le verset 2:197 posait les regles du pelerinage (pas de perversite, pas de dispute). Le verset 2:198 donne l'acte positif a accomplir : le rappel de Dieu. Le verset 2:199 ordonnera le pardon (istighfar). La sequence montre une progression : interdits negatifs (197) → acte positif de rappel (198) → demande de pardon (199). Le pelerinage n'est pas seulement une liste d'interdits — il est structure autour d'actes positifs dont le rappel est le principal.",
              axe3_sourate: "La racine dh-k-r est frequente dans la sourate al-Baqarah. En 2:40, « rappelez-vous Mon bienfait ». En 2:47, « rappelez-vous que Je vous ai favorises ». En 2:152, « rappelez-Moi et Je vous rappellerai ». En 2:198, « rappelez-Le ». La sourate utilise dh-k-r comme un fil conducteur — le rappel est l'acte central de la relation entre Dieu et les croyants. Le verset 2:152 est particulierement eclairant : le rappel est reciproque — les croyants rappellent Dieu et Dieu les rappelle.",
              axe4_coherence: "La racine dh-k-r apparait environ 292 fois dans le Coran. Le dhikr est l'un des actes les plus mentionnes dans le Coran. En 33:41, « rappelez Dieu d'un rappel abondant ». En 13:28, « les coeurs s'apaisent par le rappel de Dieu ». Le Coran presente le dhikr comme un acte fondamental de la foi — plus fondamental que la priere rituelle meme, car le rappel est permanent tandis que la priere est ponctuelle.",
              axe5_frequence: "Pour la mission du khalifa, le rappel est le moteur permanent de la mission. Le khalifa ne travaille pas par automatisme — il rappelle constamment Celui qui l'a envoye. Le rappel de Dieu pendant le pelerinage est un acte d'ancrage : le khalifa se reconnecte a la source de sa mission. Le dhikr empeche l'oubli — et l'oubli de Dieu est la premiere cause de corruption sur terre (selon le Coran, ceux qui oublient Dieu s'oublient eux-memes, 59:19)."
            }
          }
        }
      },
      // hdy pos=20
      {
        word_key: "hdy", position: 20, sense_chosen: "guider",
        analysis_axes: {
          sense_chosen: "guider",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger", "montrer le chemin", "mener vers la bonne voie", "guidance", "direction"],
              proof_ctx: "Le verbe hadakum est un accompli 3MS de la racine h-d-y avec pronom suffixe 2MP (-kum = vous). Le Lane's donne : he guided, he directed, he showed the way, he led to the right path. La guidance est un acte exterieur et directif — celui qui guide montre le chemin a celui qui est guide. L'accompli marque que la guidance a deja eu lieu — Dieu vous A guides, c'est un fait accompli et irreversible. Le pronom suffixe (-kum = vous) fait des croyants les destinataires directs de la guidance. La construction « kama hadakum » (comme Il vous a guides) cree un lien de proportion entre la guidance recue et le rappel du — rappelez-Le a la mesure de ce qu'Il vous a donne comme guidance. Le concept de guidance est un acte de transmission — le guide possede le savoir du chemin et le transmet au guide.",
              axe1_verset: "Le verbe hadakum est la motivation du rappel : rappelez-Le COMME Il vous a guides. Le champ lexical (rappeler, Dieu, egares, avant) montre que la guidance est le bienfait qui transforme les egares en guides. Le verset pose un contraste temporel : avant (qablihi) vous etiez parmi les egares, maintenant Dieu vous a guides — donc rappelez-Le. La guidance est le tournant qui change tout — elle justifie le rappel, elle fonde la gratitude. L'accompli (hada) marque que la guidance est un fait — elle n'est pas une promesse future mais un don deja recu.",
              axe2_voisins: "Le verset 2:197 posait les regles du pelerinage. Le verset 2:198 mentionne la guidance comme motivation du rappel. Le verset 2:199 ordonnera le pardon. La guidance est le fondement de tout le pelerinage — sans guidance, les pelerins ne sauraient ni ou aller, ni quoi faire, ni comment rappeler Dieu. Le verset 2:198 rappelle aux pelerins que leur capacite meme a accomplir le pelerinage vient de la guidance divine.",
              axe3_sourate: "La racine h-d-y est tres frequente dans la sourate al-Baqarah. En 2:2, « une guidance pour les muttaqin ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:16, « ils ont echange la guidance contre l'egarement ». En 2:38, « quand une guidance vous viendra de Moi ». La sourate construit la guidance comme le theme central — toute la sourate tourne autour de la question : qui est guide et qui est egare ? Le verset 2:198 reprend ce theme dans le contexte du pelerinage.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. C'est l'un des concepts les plus developpes du texte coranique. En 1:6, « guide-nous sur le chemin droit ». En 6:161, « mon Seigneur m'a guide vers un chemin droit ». Le Coran presente la guidance comme l'acte divin par excellence — Dieu guide, et tout le reste en decoule. La guidance precede le rappel, le rappel precede la gratitude, la gratitude precede l'obeissance.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est la condition de la mission. Le khalifa ne peut pas accomplir sa mission sans etre guide — il a besoin de Dieu pour connaitre le chemin. Le verset 2:198 montre que la guidance est un don deja recu (accompli) et que le rappel est la reponse appropriee. Le khalifa guide rappelle Celui qui l'a guide — le rappel est la boucle de retour de la guidance."
            }
          }
        }
      },
      // kwn pos=22
      {
        word_key: "kwn", position: 22, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être", "exister", "se trouver dans un état", "devenir", "avoir lieu"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP de la racine k-w-n. Le Lane's donne : he was, he existed, he became, he was in a state. Le kana au passe marque un etat revolu — vous etiez dans un etat qui n'est plus necessairement le votre. La construction « wa-in kuntum min qablihi la-min ad-dallin » (et meme si vous etiez avant cela certes parmi les egares) pose un contraste temporel : l'etat d'egarement etait votre etat passe, mais la guidance divine a change cet etat. Le verbe kana est un verbe d'etat, pas d'action — etre egare est un etat dans lequel on se trouve, pas un acte que l'on commet. L'accompli confirme que cet etat est revolu — vous ETIEZ, ce qui implique que vous ne l'etes plus.",
              axe1_verset: "Le verbe kuntum introduit l'etat passe des croyants. Le champ lexical (guider, egares, avant) montre que le verbe kana sert de pont entre le passe (egarement) et le present (guidance). Le verset construit un avant/apres : avant la guidance vous etiez egares, maintenant vous etes guides — donc rappelez Dieu. Le verbe d'etat (kana) au passe montre que l'egarement n'etait pas un choix mais un etat — on se trouvait dans l'egarement sans necessairement l'avoir voulu.",
              axe2_voisins: "Le verset 2:198 utilise kuntum pour marquer un contraste temporel avec la guidance. Les versets voisins (196-199) sont consacres au pelerinage — le rappel de l'etat passe d'egarement donne au pelerinage sa profondeur : les pelerins ne sont pas des gens qui ont toujours ete guides, ils sont des gens qui ont ete transformes par la guidance divine.",
              axe3_sourate: "La racine k-w-n sous la forme kana est extremement frequente dans la sourate al-Baqarah — elle apparait dans presque chaque passage narratif et legislatif. Le verbe kana est le verbe d'etat par excellence en arabe — il situe des etats dans le temps. En 2:198, il situe l'egarement dans le passe pour mieux souligner la transformation operee par la guidance.",
              axe4_coherence: "La racine k-w-n apparait environ 1390 fois dans le Coran sous la forme kana et ses derives. C'est le verbe le plus frequent du texte coranique. Le Coran utilise kana pour decrire des etats passes, des transformations, des conditions. En 2:198, kuntum min ad-dallin (vous etiez parmi les egares) est une declaration qui transforme le rappel en gratitude — on rappelle Dieu parce qu'on sait ce qu'on etait avant Sa guidance.",
              axe5_frequence: "Pour la mission du khalifa, le verbe d'etat rappelle que le khalifa n'est pas parfait par nature — il etait dans l'egarement avant la guidance. Cette conscience de son etat passe donne au khalifa l'humilite necessaire pour sa mission. Le khalifa qui se souvient qu'il etait egare ne s'enorgueillit pas de sa guidance — il rappelle Dieu avec gratitude."
            }
          }
        }
      },
      // qbl pos=24
      {
        word_key: "qbl", position: 24, sense_chosen: "avant",
        analysis_axes: {
          sense_chosen: "avant",
          concept_chosen: "Antériorité/Passé",
          concepts: {
            "Antériorité/Passé": {
              status: "retenu",
              senses: ["avant", "auparavant", "antérieurement", "ce qui précède dans le temps", "le passé"],
              proof_ctx: "Le nom qablihi est un nom avec pronom suffixe 3MS de la racine q-b-l. Le Lane's donne : before, in front of, what precedes in time, the past, prior to. Le qabl est ce qui se situe avant dans le temps — l'anteriorite est une relation temporelle qui situe un evenement par rapport a un autre. Le pronom suffixe (-hi = cela, renvoyant a la guidance) situe l'anteriorite par rapport a la guidance : avant CELA, avant la guidance. Le concept d'anteriorite est une relation temporelle pure — il situe un etat (l'egarement) dans le passe par rapport a un evenement (la guidance). Le sens de « Reception/Accueil » est ecarte car le contexte est clairement temporel — « min qablihi » signifie « avant cela », pas « de sa reception ». Le sens d'« Orientation/Direction » est egalement ecarte car la preposition « min » suivie de « qablihi » forme une locution temporelle fixe.",
              axe1_verset: "Le mot qablihi situe l'egarement dans le passe. Le champ lexical (guider, etre, egares) montre que l'anteriorite cree le contraste central du verset : avant la guidance, l'egarement ; apres la guidance, le rappel. Le pronom suffixe (-hi) renvoie a la guidance (hadakum) — avant que Dieu ne vous guide, vous etiez egares. L'anteriorite est le pivot temporel du verset — tout bascule autour du moment de la guidance. Le mot est dans une locution prepositionnelle (min qablihi = avant cela) qui est courante en arabe pour marquer le temps passe.",
              axe2_voisins: "Le verset 2:198 utilise l'anteriorite pour donner de la profondeur au pelerinage. Les versets voisins (196-199) decrivent les rites du pelerinage. La mention « avant cela vous etiez egares » transforme le pelerinage en acte de gratitude : les pelerins savent d'ou ils viennent (l'egarement) et ou ils sont maintenant (la guidance). L'anteriorite rend la gratitude concrete — on ne rappelle pas Dieu dans le vide mais en se souvenant de ce qu'on etait avant.",
              axe3_sourate: "La racine q-b-l apparait dans la sourate al-Baqarah sous plusieurs formes. En 2:176, « min qablu » (d'avant). En 2:214, « min qablikum » (avant vous). En 2:198, « min qablihi » (avant cela). La sourate utilise regulierement l'anteriorite pour situer les evenements dans le temps — le passe est toujours le fond sur lequel se detache le present.",
              axe4_coherence: "La racine q-b-l apparait environ 264 fois dans le Coran sous diverses formes. Le sens temporel (avant, auparavant) est le plus frequent dans les locutions prepositionnelles (min qablu, min qablihi, min qablihim). Le Coran utilise l'anteriorite pour creer des contrastes entre l'avant et l'apres — avant la revelation et apres, avant la guidance et apres, avant l'islam et apres. Le verset 2:198 s'inscrit dans cette logique de transformation.",
              axe5_frequence: "Pour la mission du khalifa, l'anteriorite est la conscience du parcours. Le khalifa sait qu'il a un passe — il n'est pas ne guide, il a ete guide. Cette conscience de l'anteriorite fonde l'humilite et la gratitude. Le khalifa qui oublie son passe d'egarement risque l'orgueil ; celui qui s'en souvient reste reconnaissant et continue a rappeler Dieu."
            },
            "Réception/Accueil": {
              status: "nul",
              senses: ["recevoir", "accueillir", "accepter"],
              proof_ctx: "Le sens de reception est un sens atteste de la racine q-b-l — le Lane's donne qabila : he accepted, he received. Mais dans le verset, le mot est utilise dans la locution « min qablihi » qui est une locution temporelle figee signifiant « avant cela ». Le sens de reception est incompatible avec cette construction grammaticale."
            },
            "Orientation/Direction": {
              status: "nul",
              senses: ["en face de", "en direction de", "se tourner vers"],
              proof_ctx: "Le sens d'orientation est un sens atteste de la racine q-b-l — la qibla est la direction vers laquelle on se tourne. Mais dans le verset, « min qablihi » est une locution temporelle, pas spatiale. Le sens de direction est hors sujet dans cette construction."
            }
          }
        }
      },
      // dll pos=26
      {
        word_key: "dll", position: 26, sense_chosen: "egares",
        analysis_axes: {
          sense_chosen: "egares",
          concept_chosen: "Égarement/Déviation",
          concepts: {
            "Égarement/Déviation": {
              status: "retenu",
              senses: ["s'égarer", "dévier du chemin", "perdre la voie", "errer", "se tromper de direction"],
              proof_ctx: "Le nom ad-dallin est un participe actif pluriel defini de la racine d-l-l. Le Lane's donne : he erred, he went astray, he deviated from the right path, he lost his way, he was lost. Le dalal est l'acte de s'ecarter du chemin droit — l'egare a quitte la voie et ne sait plus ou il va. Le participe actif marque une action continue — les egares sont ceux qui font activement et continuellement l'action de s'egarer, ils sont en etat permanent de deviation. L'article al- et le pluriel defini designent une categorie connue : LES egares, un groupe identifie. La construction « la-min ad-dallin » (certes parmi les egares) est une double emphase : le lam de serment (la-) et la preposition « min » (parmi) affirment avec force que l'etat passe etait bien l'egarement. Le sens de « Disparition/Perte » est ecarte car le contexte est celui de la guidance et du chemin — l'egarement est une deviation par rapport a une voie, pas une disparition physique.",
              axe1_verset: "Le mot ad-dallin est le dernier mot significatif du verset — il ferme le contraste temporel ouvert par la guidance. Le champ lexical (guider, avant, etre) montre que l'egarement est le point de depart dont la guidance a sorti les croyants. Le verset se termine sur l'egarement pour que le rappel de Dieu soit motive par la conscience de ce qu'on a quitte. Le participe actif pluriel defini (ad-dallin) est le meme mot qu'en sourate al-Fatiha (1:7) — « ceux qui se sont egares ». Le lien avec la Fatiha est significatif : les croyants demandent a Dieu de ne pas etre parmi les egares (1:7) et le verset 2:198 leur rappelle qu'ils ETAIENT parmi les egares avant la guidance.",
              axe2_voisins: "Le verset 2:197 posait les regles du pelerinage. Le verset 2:198 se termine par le rappel de l'egarement passe. Le verset 2:199 ordonnera le pardon. La sequence montre que le pelerinage est un acte de transformation : les egares deviennent des guides, les oublieux deviennent des rappeleurs, les eloignes deviennent des proches. L'egarement passe donne sa profondeur au pelerinage — il n'est pas un acte de routine mais de gratitude pour la transformation operee.",
              axe3_sourate: "La racine d-l-l est frequente dans la sourate al-Baqarah. En 2:16, « ils ont echange la guidance contre l'egarement ». En 2:108, « celui qui echange la foi contre l'incredulite s'est egare du chemin droit ». En 2:175, « ils ont achete l'egarement au prix de la guidance ». La sourate presente l'egarement et la guidance comme deux poles opposes — on est soit dans l'un soit dans l'autre. Le verset 2:198 rappelle aux pelerins qu'ils ont quitte le pole de l'egarement pour celui de la guidance.",
              axe4_coherence: "La racine d-l-l apparait environ 191 fois dans le Coran. L'egarement est oppose a la guidance dans tout le Coran. En 1:7, « ceux qui se sont egares ». En 2:198, « vous etiez parmi les egares ». En 93:7, « Il t'a trouve egare et Il t'a guide ». Le Coran presente l'egarement comme un etat dont Dieu fait sortir par la guidance — l'egarement n'est pas une condamnation definitive mais un etat dont on peut etre sorti par la volonte divine. Le verset 2:198 confirme cette lecture : vous ETIEZ egares (passe) mais Il vous a guides (fait accompli).",
              axe5_frequence: "Pour la mission du khalifa, l'egarement est l'antithese de la mission. Le khalifa qui s'egare ne peut pas guider les autres — il doit d'abord etre guide pour pouvoir accomplir sa mission. Le rappel de l'egarement passe est un acte d'humilite qui preserve le khalifa de l'arrogance. Le khalifa qui se souvient de son egarement reste vigilant — il sait que sans la guidance divine, il retomberait dans la deviation."
            },
            "Disparition/Perte": {
              status: "peu_probable",
              senses: ["disparaître", "se perdre", "être introuvable", "périr", "s'évanouir"],
              proof_ctx: "Le sens de disparition est un sens atteste de la racine d-l-l — le Lane's donne : he perished, he became lost, he disappeared. La dalle est la perte, la disparition, l'aneantissement. Mais le contexte du verset est celui de la guidance et du chemin — les egares ne sont pas des disparus physiques mais des gens qui ont quitte le chemin droit. La distinction philosophique est que la disparition est un aneantissement physique (on n'est plus la), tandis que l'egarement est une deviation directionnelle (on est la mais on ne sait pas ou on va). Le verset mentionne la guidance (hada) — les egares sont ceux qui n'avaient pas encore recu la direction, pas ceux qui avaient disparu.",
              axe1_verset: "Dans le contexte du pelerinage et de la guidance divine, la disparition physique n'est pas pertinente. Les pelerins n'ont pas disparu — ils etaient egares, c'est-a-dire sans direction. Le champ lexical (guider, chemin, rappeler) est celui de la direction, pas de la disparition.",
              axe2_voisins: "Les versets voisins parlent de pelerinage, de rites, de deplacement entre des lieux — le vocabulaire est celui du mouvement et de la direction, pas de la disparition. Le deferlement (afada), le lieu de culte (mash'ar), Arafat sont des references spatiales qui cadrent l'egarement comme une deviation de direction.",
              axe3_sourate: "La sourate al-Baqarah utilise d-l-l toujours en opposition avec h-d-y (guidance). En 2:16, « ils ont achete l'egarement au prix de la guidance ». La paire egarement/guidance est directionnelle — on est egare quand on n'a pas de guide. La disparition ne forme pas cette paire logique avec la guidance.",
              axe4_coherence: "Le Coran utilise systematiquement d-l-l en opposition avec h-d-y. La paire est stable dans tout le texte : egarer vs guider. La disparition n'est jamais l'oppose de la guidance dans le Coran — l'oppose de la guidance est toujours l'egarement directionnel.",
              axe5_frequence: "La disparition est un aneantissement qui met fin a la mission. L'egarement est un etat dont on peut sortir — la mission du khalifa n'est pas terminee quand il est egare, elle est en suspens en attendant la guidance."
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

  const verseIds = [205];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 198 ===\n');
  await processVerse(198);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V198 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
