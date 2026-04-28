const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 185
// verse_id=192, analysis_id=552
// "Le mois de Ramadan au cours duquel le Coran a ete
//  descendu comme guide pour les gens, et preuves claires
//  de la bonne direction et du discernement. Quiconque
//  est present en ce mois, qu'il jeune. Et quiconque est
//  malade ou en voyage, alors un nombre d'autres jours.
//  Dieu veut pour vous la facilite et ne veut pas pour
//  vous la difficulte. Completez le nombre, glorifiez Dieu
//  pour vous avoir guides, et peut-etre serez-vous
//  reconnaissants."
// Ramadan, jeune, facilite divine, gratitude
// =====================================================

const verseData = {
  185: {
    verse_id: 192,
    analysis_id: 552,
    translation_arab: "Le mois de la chaleur ardente, dans lequel fut descendue la recitation, guidance pour les gens et preuves evidentes de direction et de distinction. Quiconque parmi vous est temoin du mois, qu'il s'en abstienne. Et quiconque est malade ou en deplacement, alors un nombre d'autres jours. Dieu veut pour vous l'aisance et ne veut pas pour vous la gene. Completez le nombre, glorifiez Dieu pour vous avoir guides, et peut-etre serez-vous reconnaissants.",
    full_translation: "Le mois de Ramadan au cours duquel le Coran a ete descendu comme guide pour les gens, et preuves claires de la bonne direction et du discernement. Donc quiconque d'entre vous est present en ce mois, qu'il jeune ! Et quiconque est malade ou en voyage, alors qu'il jeune un nombre egal d'autres jours. Dieu veut pour vous la facilite, Il ne veut pas la difficulte pour vous, afin que vous en completiez le nombre et que vous proclamiez la grandeur de Dieu pour vous avoir guides, et afin que vous soyez reconnaissants !",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset ouvre par la designation du mois de Ramadan comme periode de la revelation. Le nom **shahru** est un nom nominatif defini singulier de la racine sh-h-r. Le Lane's donne : mois, lune, periode lunaire, ce qui est apparent et connu. Le mois est une division temporelle basee sur le cycle lunaire — il est « apparent » parce que la lune nouvelle le rend visible a tous. Le nom est au nominatif comme sujet de la phrase nominale qui ouvre le verset. Le nom **ramadana** est un nom propre au genitif de la racine r-m-d. Le Lane's donne : chaleur intense, ardeur, brulure du soleil, chaleur du sol. Ramadan est le mois de la chaleur ardente — le nom est un idafa (annexion) qui qualifie le mois par sa caracteristique thermique. Le pronom relatif **alladhi** introduit la proposition relative qui qualifie le mois. Le verbe **unzila** est un accompli passif 4FS de la racine n-z-l. Le Lane's donne : descendre, faire descendre, reveler, envoyer d'en haut. Le passif marque une action divine — c'est Dieu qui fait descendre, mais le passif efface l'agent pour mettre en avant l'acte de descente. La forme IV (anzala/unzila) marque la causalite — faire descendre, pas simplement descendre. Le nom **al-qur'anu** est un nom nominatif defini singulier de la racine q-r-a. Le Lane's donne : lecture, recitation, ce qui est lu et recite. Le Coran est le recite par excellence — l'article al- en fait un nom propre, la recitation supreme. Le nom **hudan** est un nom accusatif indefini singulier de la racine h-d-y. Le Lane's donne : guidance, direction, voie droite, ce qui mene au but. Le mot est un hal (etat) — le Coran a ete descendu EN TANT QUE guidance. La guidance n'est pas un attribut secondaire mais la raison d'etre de la revelation. Le nom **li-l-nasi** est un nom genitif defini pluriel de la racine n-w-s. Le Lane's donne : gens, humanite, peuple, les hommes en general. La preposition li- marque la destination — la guidance est POUR les gens. Le nom **bayyinatin** est un nom genitif indefini pluriel de la racine b-y-n. Le Lane's donne : preuve claire, evidence, ce qui est evident et manifeste. Les bayyinat sont les preuves claires — elles rendent visible ce qui etait cache. Le mot est coordonne a hudan — le Coran est guidance ET preuves claires. Le nom **al-huda** est un nom genitif defini singulier de la meme racine h-d-y. Le Lane's donne : la guidance, la direction. L'article al- definit la guidance comme un concept absolu — LA guidance, pas une guidance parmi d'autres. Les bayyinat sont « de la guidance » — les preuves claires emanent de la guidance et la rendent visible. Le nom **al-furqani** est un nom genitif defini singulier de la racine f-r-q. Le Lane's donne : separation, distinction, ce qui separe le vrai du faux, le critere de discernement. Le furqan est la capacite de distinguer — il separe la verite du mensonge, le licite de l'illicite. L'article al- le definit comme LE critere absolu de distinction. Le verbe **shahida** est un accompli 3MS de la racine sh-h-d. Le Lane's donne : temoigner, etre present, assister, voir de ses propres yeux. Le temoignage ici est la presence — celui qui est present (shahida) au mois, c'est-a-dire celui qui est la quand le mois arrive. Le verbe **falyasumhu** est un jussif 3MS de la racine s-w-m avec la particule fa- et la- du commandement. Le Lane's donne : s'abstenir, jeuner, cesser de manger et boire, se retenir. Le jussif marque un ordre — qu'il jeune, qu'il s'abstienne. Le pronom suffixe -hu renvoie au mois — qu'il le jeune (le mois). Le verbe **kana** est un accompli 3MS de la racine k-w-n. Le Lane's donne : etre, exister, se trouver dans un etat. Le verbe introduit une condition : « et quiconque est (kana) malade ». Le nom **maridan** est un nom accusatif indefini de la racine m-r-d. Le Lane's donne : etre malade, etre faible, etre affaibli par la maladie. Le malade est celui dont le corps est affaibli — la maladie est un etat de faiblesse qui empeche l'accomplissement normal des obligations. Le nom **safarin** est un nom genitif indefini de la racine s-f-r. Le Lane's donne : voyage, deplacement, sortir de chez soi, parcourir une distance. Le voyageur est celui qui se deplace loin de chez lui — le voyage cree une difficulte qui justifie l'exemption. Le nom **fa-iddatun** est un nom nominatif indefini de la racine '-d-d. Le Lane's donne : nombre, compte, calcul, denombrement. La iddatun est un nombre (de jours) a compter et a accomplir en remplacement. Le nom **ayyamin** est un nom genitif indefini pluriel de la racine y-w-m. Le Lane's donne : jour, journee, periode de temps. Les jours sont l'unite de compte du rattrapage — un nombre de jours d'autres (periodes). Le nom **ukhara** est un nom genitif de la racine a-kh-r. Le Lane's donne : autre, posterieur, dernier, ce qui vient apres. Les jours sont « autres » — ils ne sont pas dans le mois de Ramadan mais apres, dans d'autres periodes. Le verbe **yuridu** est un inaccompli 3MS de la racine r-w-d. Le Lane's donne : vouloir, chercher, desirer, avoir l'intention. La forme IV (arada/yuridu) marque l'intention deliberee — Dieu veut, il a l'intention. Le nom **allahu** est un nom nominatif defini de la racine a-l-h. Le Lane's donne : Dieu, la divinite, celui qui est adore. Dieu est le sujet de l'intention — c'est Lui qui veut la facilite. Le nom **al-yusra** est un nom accusatif defini de la racine y-s-r. Le Lane's donne : facilite, aisance, abondance, ce qui est facile et accessible. La facilite est l'objet de la volonte divine — Dieu veut que les choses soient faciles pour les croyants. Le nom **al-'usra** est un nom accusatif defini de la racine '-s-r. Le Lane's donne : difficulte, gene, contrainte, ce qui est penible et difficile. La difficulte est ce que Dieu NE veut PAS — la negation (wa la yuridu) marque le rejet divin de la gene. Le verbe **wa-litukmiloo** est un subjonctif 2MP de la racine k-m-l. Le Lane's donne : completer, parfaire, achever, mener a terme. La forme IV (akmala) intensifie : completer pleinement, achever sans manque. La conjonction wa-li- introduit une finalite — POUR QUE vous completiez. Le nom **al-iddata** est un nom accusatif defini de la racine '-d-d. Le Lane's donne : le nombre, le compte, le total. L'article al- definit le nombre — LE nombre prescrit de jours de jeune. Le verbe **wa-litukabbiroo** est un subjonctif 2MP de la racine k-b-r. Le Lane's donne : glorifier, magnifier, proclamer la grandeur, dire Allahou Akbar. La forme II (kabbara) est intensive — glorifier grandement, proclamer la grandeur avec emphase. Le nom **allaha** est un nom accusatif defini — Dieu est l'objet de la glorification. Le verbe **hadakum** est un accompli 3MS de la racine h-d-y avec pronom suffixe 2MP. Le Lane's donne : guider, mener, diriger vers le bon chemin. Le verbe est a l'accompli — Dieu VOUS A guides, c'est un fait accompli. La causalite est posee : glorifiez Dieu POUR vous avoir guides. Le verbe **tashkuruna** est un inaccompli 2MP de la racine sh-k-r. Le Lane's donne : remercier, etre reconnaissant, retribuer le bienfait. La construction « wa-la'allakum tashkuruna » exprime l'espoir — peut-etre serez-vous reconnaissants. La gratitude est le couronnement du verset — le jeune, la facilite, la guidance, tout converge vers la gratitude.

\u00a7JUSTIFICATION\u00a7
**mois** — Le sens retenu est « mois/periode lunaire ». Le nom shahru designe la division temporelle lunaire. L'alternative « apparition/eclat » est ecartee car le contexte temporel (mois de Ramadan) impose le sens calendaire.

**chaleur ardente** — Le sens retenu est « chaleur intense ». Le nom ramadana est de la racine r-m-d qui designe la brulure et l'ardeur. L'alternative « calcination » est ecartee car le mot est devenu un nom propre designant un mois specifique, mais la racine porte bien le sens de chaleur.

**fut descendue** — Le sens retenu est « faire descendre/reveler ». Le verbe unzila au passif marque la revelation divine. L'alternative « descendre physiquement » est ecartee car l'objet est le Coran — la descente est spirituelle et cognitive, pas spatiale.

**la recitation** — Le sens retenu est « lecture/recitation ». Le nom al-qur'anu designe ce qui est recite. L'alternative « rassemblement » est ecartee car la tradition lexicale retient le sens de recitation pour ce nom propre.

**guidance** — Le sens retenu est « direction/guidance ». Le nom hudan designe la voie droite. L'alternative « cadeau/don » est ecartee car le contexte de la revelation impose le sens de guidance, pas de present materiel.

**les gens** — Le sens retenu est « humanite/peuple ». Le nom al-nas designe les humains en general. Aucune alternative pertinente — le sens est univoque.

**preuves evidentes** — Le sens retenu est « preuves claires ». Le nom bayyinatin designe ce qui est evident et manifeste. L'alternative « separation » est ecartee car le contexte des preuves de guidance impose le sens d'evidence, pas de coupure.

**distinction** — Le sens retenu est « separation/discernement ». Le nom al-furqani designe le critere qui separe le vrai du faux. L'alternative « aube/matin » est ecartee car le contexte des attributs du Coran impose le sens de discernement.

**est temoin** — Le sens retenu est « temoigner/etre present ». Le verbe shahida marque la presence au mois. L'alternative « temoignage juridique » est ecartee car le contexte est la presence physique au mois, pas un temoignage devant un tribunal.

**qu'il s'en abstienne** — Le sens retenu est « jeuner/s'abstenir ». Le verbe falyasumhu est un ordre de jeuner le mois. L'alternative « se taire/garder le silence » est ecartee car le contexte du mois de Ramadan impose le sens de jeune alimentaire.

**est** — Le sens retenu est « etre/exister ». Le verbe kana introduit une condition d'etat. Aucune alternative pertinente — le sens est grammatical et univoque.

**malade** — Le sens retenu est « maladie/faiblesse ». Le nom maridan designe l'etat de maladie. L'alternative « doute/hesitation » est ecartee car le contexte de l'exemption de jeune impose le sens de maladie physique.

**deplacement** — Le sens retenu est « voyage ». Le nom safarin designe le fait de parcourir une distance. L'alternative « devoilement/revelation » est ecartee car le contexte de l'exemption impose le sens de deplacement physique.

**un nombre** — Le sens retenu est « compte/denombrement ». Le nom iddatun designe le nombre de jours a rattraper. L'alternative « preparation/equipement » est ecartee car le contexte du rattrapage impose le sens numerique.

**jours** — Le sens retenu est « jour/periode ». Le nom ayyamin designe les unites de temps. Aucune alternative pertinente — le sens est univoque.

**autres** — Le sens retenu est « autre/posterieur ». Le nom ukhara designe les jours en dehors de Ramadan. Aucune alternative pertinente — le sens est grammatical.

**veut** — Le sens retenu est « vouloir/desirer ». Le verbe yuridu marque l'intention divine. L'alternative « recherche/quete » est ecartee car le sujet est Dieu dont la volonte est un decret, pas une quete incertaine.

**Dieu** — Le sens retenu est « la divinite ». Le nom allahu designe Dieu. Aucune alternative pertinente — le sens est univoque.

**l'aisance** — Le sens retenu est « facilite/aisance ». Le nom al-yusra designe ce qui est facile. L'alternative « richesse materielle » est ecartee car le contexte de la legislation sur le jeune impose le sens de facilite des obligations.

**la gene** — Le sens retenu est « difficulte/contrainte ». Le nom al-'usra designe ce qui est penible. L'alternative « pauvrete » est ecartee car le contexte est la difficulte des obligations, pas la misere materielle.

**completez** — Le sens retenu est « completer/achever ». Le verbe litukmiloo marque l'achevement du nombre de jours. L'alternative « embellir/orner » est ecartee car le contexte du compte de jours impose le sens d'achevement.

**le nombre** — Le sens retenu est « le compte/total ». Le nom al-iddata est le meme que fa-iddatun avec l'article defini. Le sens est le meme : le nombre prescrit de jours.

**glorifiez** — Le sens retenu est « magnifier/proclamer la grandeur ». Le verbe litukabbiroo est une forme II intensive de k-b-r. L'alternative « grandir/vieillir » est ecartee car la forme II est declarative (proclamer grand), pas descriptive (devenir grand).

**vous a guides** — Le sens retenu est « guider/mener ». Le verbe hadakum marque la guidance accomplie par Dieu. L'alternative « cadeau » est ecartee car le verbe a l'accompli avec pronom suffixe impose le sens verbal de guider.

**reconnaissants** — Le sens retenu est « gratitude/reconnaissance ». Le verbe tashkuruna marque la gratitude des croyants. L'alternative « retribution/recompense » est ecartee car le contexte final du verset vise la gratitude morale, pas la recompense materielle.

\u00a7CRITIQUE\u00a7
Les traductions courantes rendent « shahru ramadana » par « le mois de Ramadan » en traitant Ramadan comme un nom propre sans le traduire. Notre traduction « le mois de la chaleur ardente » restitue le sens etymologique de la racine r-m-d mais peut surprendre un lecteur habitue au nom propre. Le mot « al-furqan » est diversement traduit : « le discernement » (Hamidullah), « le critere » (Blachere), « la salvation » (certains traducteurs). Notre choix de « distinction » est fidele a la racine f-r-q qui porte le sens de separation. La phrase « faman shahida minkumu al-shahra falyasumhu » est classiquement traduite « quiconque d'entre vous est present en ce mois, qu'il le jeune ». Notre traduction « quiconque est temoin du mois, qu'il s'en abstienne » est plus proche du sens etymologique de sh-h-d (temoigner) et de s-w-m (s'abstenir) mais s'ecarte de la formulation conventionnelle.`,
    segments: [
      { fr: "le mois", pos: "nom", phon: "shahru", arabic: "\u0634\u064e\u0647\u0652\u0631\u064f", word_key: "shhr", is_particle: false, sense_retenu: "mois", position: 1 },
      { fr: "de la chaleur ardente", pos: "nom", phon: "ramadana", arabic: "\u0631\u064e\u0645\u064e\u0636\u064e\u0627\u0646\u064e", word_key: "rmd", is_particle: false, sense_retenu: "chaleur intense", position: 2 },
      { fr: "dans lequel", phon: "alladhi", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064aY\u0653", is_particle: true, position: 3 },
      { fr: "fut descendue", pos: "verbe", phon: "unzila", arabic: "\u0623\u064f\u0646\u0632\u0650\u0644\u064e", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 4 },
      { fr: "en lui", phon: "fihi", arabic: "\u0641\u0650\u064a\u0647\u0650", is_particle: true, position: 5 },
      { fr: "la recitation", pos: "nom", phon: "al-qur'anu", arabic: "\u0671\u0644\u0652\u0642\u064f\u0631\u0652\u0621\u064e\u0627\u0646\u064f", word_key: "qra", is_particle: false, sense_retenu: "recitation", position: 6 },
      { fr: "guidance", pos: "nom", phon: "hudan", arabic: "\u0647\u064f\u062f\u064b\u0649", word_key: "hdy", is_particle: false, sense_retenu: "guidance", position: 7 },
      { fr: "pour les gens", pos: "nom", phon: "li-l-nasi", arabic: "\u0644\u0650\u0651\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 8 },
      { fr: "et preuves evidentes", pos: "nom", phon: "wa-bayyinatin", arabic: "\u0648\u064e\u0628\u064e\u064a\u0651\u0650\u0646\u064e\u0640\u0670\u062a\u064d", word_key: "byn", is_particle: false, sense_retenu: "preuves claires", position: 9 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0651\u0646\u064e", is_particle: true, position: 10 },
      { fr: "la direction", pos: "nom", phon: "al-huda", arabic: "\u0671\u0644\u0652\u0647\u064f\u062f\u064e\u0649\u0640\u0670", word_key: "hdy", is_particle: false, sense_retenu: "guidance", position: 11 },
      { fr: "et la distinction", pos: "nom", phon: "wa-l-furqani", arabic: "\u0648\u064e\u0671\u0644\u0652\u0641\u064f\u0631\u0652\u0642\u064e\u0627\u0646\u0650", word_key: "frq", is_particle: false, sense_retenu: "distinction", position: 12 },
      { fr: "quiconque", phon: "faman", arabic: "\u0641\u064e\u0645\u064e\u0646", is_particle: true, position: 13 },
      { fr: "est temoin", pos: "verbe", phon: "shahida", arabic: "\u0634\u064e\u0647\u0650\u062f\u064e", word_key: "shhd", is_particle: false, sense_retenu: "temoigner", position: 14 },
      { fr: "parmi vous", phon: "minkumu", arabic: "\u0645\u0650\u0646\u0643\u064f\u0645\u064f", is_particle: true, position: 15 },
      { fr: "le mois", pos: "nom", phon: "al-shahra", arabic: "\u0671\u0644\u0634\u0651\u064e\u0647\u0652\u0631\u064e", word_key: "shhr", is_particle: false, sense_retenu: "mois", position: 16 },
      { fr: "qu'il s'en abstienne", pos: "verbe", phon: "falyasumhu", arabic: "\u0641\u064e\u0644\u0652\u064a\u064e\u0635\u064f\u0645\u0652\u0647\u064f", word_key: "swm", is_particle: false, sense_retenu: "jeuner", position: 17 },
      { fr: "et quiconque", phon: "wa-man", arabic: "\u0648\u064e\u0645\u064e\u0646", is_particle: true, position: 18 },
      { fr: "est", pos: "verbe", phon: "kana", arabic: "\u0643\u064e\u0627\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 19 },
      { fr: "malade", pos: "nom", phon: "maridan", arabic: "\u0645\u064e\u0631\u0650\u064a\u0636\u064b\u0627", word_key: "mrd", is_particle: false, sense_retenu: "malade", position: 20 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064e\u0648\u0652", is_particle: true, position: 21 },
      { fr: "en", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649Y", is_particle: true, position: 22 },
      { fr: "deplacement", pos: "nom", phon: "safarin", arabic: "\u0633\u064e\u0641\u064e\u0631\u064d", word_key: "sfr", is_particle: false, sense_retenu: "voyage", position: 23 },
      { fr: "alors un nombre", pos: "nom", phon: "fa-'iddatun", arabic: "\u0641\u064e\u0639\u0650\u062f\u0651\u064e\u0629\u064c", word_key: "edd", is_particle: false, sense_retenu: "nombre", position: 24 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 25 },
      { fr: "jours", pos: "nom", phon: "ayyamin", arabic: "\u0623\u064e\u064a\u0651\u064e\u0627\u0645\u064d", word_key: "ywm", is_particle: false, sense_retenu: "jours", position: 26 },
      { fr: "autres", pos: "nom", phon: "ukhara", arabic: "\u0623\u064f\u062e\u064e\u0631\u064e", word_key: "axr", is_particle: false, sense_retenu: "autres", position: 27 },
      { fr: "veut", pos: "verbe", phon: "yuridu", arabic: "\u064a\u064f\u0631\u0650\u064a\u062f\u064f", word_key: "rwd", is_particle: false, sense_retenu: "vouloir", position: 28 },
      { fr: "Dieu", pos: "nom", phon: "allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 29 },
      { fr: "pour vous", phon: "bikumu", arabic: "\u0628\u0650\u0643\u064f\u0645\u064f", is_particle: true, position: 30 },
      { fr: "l'aisance", pos: "nom", phon: "al-yusra", arabic: "\u0671\u0644\u0652\u064a\u064f\u0633\u0652\u0631\u064e", word_key: "ysr", is_particle: false, sense_retenu: "facilite", position: 31 },
      { fr: "et ne", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 32 },
      { fr: "veut", pos: "verbe", phon: "yuridu", arabic: "\u064a\u064f\u0631\u0650\u064a\u062f\u064f", word_key: "rwd", is_particle: false, sense_retenu: "vouloir", position: 33 },
      { fr: "pour vous", phon: "bikumu", arabic: "\u0628\u0650\u0643\u064f\u0645\u064f", is_particle: true, position: 34 },
      { fr: "la gene", pos: "nom", phon: "al-'usra", arabic: "\u0671\u0644\u0652\u0639\u064f\u0633\u0652\u0631\u064e", word_key: "esr", is_particle: false, sense_retenu: "difficulte", position: 35 },
      { fr: "et completez", pos: "verbe", phon: "wa-litukmiloo", arabic: "\u0648\u064e\u0644\u0650\u062a\u064f\u0643\u0652\u0645\u0650\u0644\u064f\u0648\u0627\u06df", word_key: "kml", is_particle: false, sense_retenu: "completer", position: 36 },
      { fr: "le nombre", pos: "nom", phon: "al-'iddata", arabic: "\u0671\u0644\u0652\u0639\u0650\u062f\u0651\u064e\u0629\u064e", word_key: "edd", is_particle: false, sense_retenu: "nombre", position: 37 },
      { fr: "et glorifiez", pos: "verbe", phon: "wa-litukabbiroo", arabic: "\u0648\u064e\u0644\u0650\u062a\u064f\u0643\u064e\u0628\u0651\u0650\u0631\u064f\u0648\u0627\u06df", word_key: "kbr", is_particle: false, sense_retenu: "glorifier", position: 38 },
      { fr: "Dieu", pos: "nom", phon: "allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 39 },
      { fr: "pour", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649Y", is_particle: true, position: 40 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 41 },
      { fr: "Il vous a guides", pos: "verbe", phon: "hadakum", arabic: "\u0647\u064e\u062f\u064e\u0649\u0640\u0670\u0643\u064f\u0645\u0652", word_key: "hdy", is_particle: false, sense_retenu: "guider", position: 42 },
      { fr: "et peut-etre", phon: "wa-la'allakum", arabic: "\u0648\u064e\u0644\u064e\u0639\u064e\u0644\u0651\u064e\u0643\u064f\u0645\u0652", is_particle: true, position: 43 },
      { fr: "serez-vous reconnaissants", pos: "verbe", phon: "tashkuruna", arabic: "\u062a\u064e\u0634\u0652\u0643\u064f\u0631\u064f\u0648\u0646\u064e", word_key: "shkr", is_particle: false, sense_retenu: "etre reconnaissant", position: 44 }
    ],
    words: [
      // shhr pos=1
      {
        word_key: "shhr", position: 1, sense_chosen: "mois",
        analysis_axes: {
          sense_chosen: "mois",
          concept_chosen: "Temps/Mois",
          concepts: {
            "Temps/Mois": {
              status: "retenu",
              senses: ["mois", "lune", "periode lunaire", "ce qui est apparent", "cycle mensuel"],
              proof_ctx: "Le nom shahru est un nom nominatif defini singulier de la racine sh-h-r. Le Lane's donne : mois, lune, periode lunaire, ce qui est apparent et connu de tous. La racine porte l'idee de ce qui est visible et connu — le mois est « celebre » parce que la lune nouvelle le rend visible a tous. Le shahru est une division temporelle basee sur le cycle lunaire — chaque mois commence avec l'observation de la lune nouvelle. Le concept de temps mensuel est un concept concret et observable — il n'est pas abstrait mais ancre dans l'observation du ciel. Le mois est un cadre temporel qui structure la vie sociale, cultuelle et juridique de la communaute.",
              axe1_verset: "Le mot shahru ouvre le verset en posant le cadre temporel de toute la legislation qui suit. Le champ lexical (Ramadan, descente, Coran, guidance, temoignage, jeune) tourne autour du mois comme periode sacree. Le mois n'est pas une simple unite de temps — c'est le cadre dans lequel la revelation a eu lieu et dans lequel le jeune est prescrit. La position initiale du mot montre que le temps est le fondement de la legislation : c'est PARCE QUE c'est ce mois-la que le jeune est obligatoire. Le mois de Ramadan est singularise parmi les douze mois de l'annee lunaire par la descente du Coran.",
              axe2_voisins: "Le verset 2:183 posait l'obligation du jeune (kutiba alaykum al-siyamu). Le verset 2:184 mentionnait « des jours comptes » (ayyaman ma'dudatin). Le verset 2:185 precise enfin QUEL est ce temps : le mois de Ramadan. La sequence montre une progression pedagogique : d'abord l'obligation (183), puis la duree approximative (184), enfin la designation exacte du mois (185). Le mois est la reponse a la question implicite posee par les versets precedents : quand jeuner ?",
              axe3_sourate: "La racine sh-h-r apparait dans la sourate al-Baqarah en plusieurs occurrences. En 2:185, le mois de Ramadan. En 2:194, « le mois sacre pour le mois sacre ». En 2:197, « le pelerinage a lieu en des mois connus ». La sourate utilise le mois comme unite structurante de la legislation : le jeune a son mois (Ramadan), le pelerinage a ses mois, les mois sacres ont leurs regles. Le temps lunaire est le cadre de toute la legislation cultuelle.",
              axe4_coherence: "La racine sh-h-r apparait environ 21 fois dans le Coran. En 9:36, « le nombre de mois aupres de Dieu est de douze mois dans le Livre de Dieu ». En 97:3, « la nuit du destin est meilleure que mille mois ». Le Coran structure le temps en mois lunaires et leur attribue des valeurs differentes — certains mois sont sacres, un mois est celui du jeune, une nuit vaut mille mois. Le mois n'est pas neutre — il porte une charge spirituelle et legislative.",
              axe5_frequence: "Pour la mission du khalifa, le temps est le cadre de la mission. Le khalifa vit dans un calendrier sacre ou chaque mois a sa signification et ses obligations. Le mois de Ramadan est le mois de la discipline — le khalifa s'abstient pour se purifier et se rapprocher de sa mission. Le cadre temporel empeche l'anarchie spirituelle : le khalifa ne jeune pas quand il veut mais quand le mois l'exige. La soumission au temps lunaire est une soumission a l'ordre divin qui structure la vie du khalifa."
            },
            "Notoriete/Publicite": {
              status: "probable",
              senses: ["ce qui est apparent", "celebre", "connu", "notoire", "publicite"],
              proof_ctx: "Le sens de notoriete est un sens etymologique de la racine sh-h-r — ce qui est shahir est ce qui est connu et apparent. Le Lane's indique que la racine porte l'idee de ce qui est visible et connu de tous — le mois est « celebre » parce qu'il est visible par la lune. Mais le contexte du verset designe specifiquement la periode temporelle (le mois de Ramadan), pas le concept abstrait de notoriete. La distinction philosophique est que le mois est un cadre temporel concret, tandis que la notoriete est un etat de reconnaissance sociale. Le mois tire son nom de sa visibilite lunaire, mais dans le verset c'est le cadre temporel qui prime."
            }
          }
        }
      },
      // rmd pos=2
      {
        word_key: "rmd", position: 2, sense_chosen: "chaleur intense",
        analysis_axes: {
          sense_chosen: "chaleur intense",
          concept_chosen: "Chaleur/Ardeur",
          concepts: {
            "Chaleur/Ardeur": {
              status: "retenu",
              senses: ["chaleur intense", "ardeur", "brulure", "calcination", "sol brulant"],
              proof_ctx: "Le nom ramadana est un nom propre au genitif de la racine r-m-d. Le Lane's donne : chaleur intense du sol causee par le soleil, ardeur, brulure, calcination. Le ramad est la pierre brulee par le soleil — la chaleur est si intense que le sol calcine. Le nom est devenu un nom propre designant le neuvieme mois du calendrier lunaire, probablement parce qu'il tombait dans une periode de grande chaleur quand le nom fut attribue. La racine porte l'idee de purification par la chaleur — le feu du jeune brule les impuretes de l'ame comme le soleil calcine la pierre. Le concept de chaleur est un concept sensoriel concret qui devient metaphore spirituelle.",
              axe1_verset: "Le mot ramadana qualifie le mois — c'est le mois de la chaleur ardente. Le champ lexical (mois, descente, Coran, jeune, abstinence) montre que Ramadan est le mois ou la chaleur du jeune et la lumiere de la revelation se conjuguent. Le nom est en annexion (idafa) avec shahru — mois-de-chaleur-ardente, une seule unite semantique. La chaleur qualifie l'experience du mois : jeuner en periode de chaleur est l'epreuve par excellence. Le sens etymologique enrichit le nom propre — Ramadan n'est pas un nom arbitraire mais un nom qui porte le sens de l'epreuve par la chaleur.",
              axe2_voisins: "Le verset 2:183 parlait du jeune sans nommer le mois. Le verset 2:184 mentionnait des « jours comptes ». Le verset 2:185 identifie enfin le mois par son nom. La sequence montre que le nom Ramadan est un aboutissement — il couronne la progression legislative en designant le temps exact de l'obligation. Le nom propre ancre l'obligation dans un mois specifique et non dans une duree abstraite.",
              axe3_sourate: "La racine r-m-d n'apparait qu'une seule fois dans le Coran, ici en 2:185. C'est un hapax coranique — un mot unique dans tout le texte sacre. Cette unicite renforce le caractere exceptionnel du mois de Ramadan : il n'y a qu'un seul mois de jeune, et ce mois a un nom unique. La sourate al-Baqarah est le seul endroit du Coran qui nomme Ramadan explicitement.",
              axe4_coherence: "La racine r-m-d est un hapax coranique. Le mois de Ramadan est mentionne une seule fois par son nom dans tout le Coran. Les autres references au jeune (sourate 33:35, sourate 19:26) ne mentionnent pas Ramadan par son nom. Cette unicite onomastique montre que le Coran considere le nom comme suffisamment etabli pour n'avoir besoin que d'une seule mention. Le verset 2:185 est le verset fondateur de toute la legislation du Ramadan.",
              axe5_frequence: "Pour la mission du khalifa, la chaleur ardente est la metaphore de l'epreuve. Le khalifa traverse des periodes de chaleur — des moments ou la mission est difficile, ou l'abstinence est penible, ou la discipline est eprouvante. Ramadan est le mois d'entrainement du khalifa : il apprend a supporter la chaleur de la privation pour etre capable de supporter la chaleur des responsabilites. La brulure du jeune forge le caractere du khalifa et le prepare aux epreuves de sa mission sur terre."
            }
          }
        }
      },
      // nzl pos=4
      {
        word_key: "nzl", position: 4, sense_chosen: "faire descendre",
        analysis_axes: {
          sense_chosen: "faire descendre",
          concept_chosen: "Descente/Revelation",
          concepts: {
            "Descente/Revelation": {
              status: "retenu",
              senses: ["descendre", "faire descendre", "reveler", "envoyer d'en haut", "deposer"],
              proof_ctx: "Le verbe unzila est un accompli passif de la forme IV de la racine n-z-l. Le Lane's donne : descendre, faire descendre, reveler, envoyer d'en haut, deposer en un lieu. La forme IV (anzala) marque la causalite — faire descendre, pas simplement descendre. Le passif (unzila) efface l'agent divin pour mettre en avant l'acte de descente. La descente est un mouvement vertical — du haut vers le bas, du ciel vers la terre, du divin vers l'humain. Le concept de revelation est inseparable de la descente : reveler c'est faire descendre un savoir qui etait en haut vers ceux qui sont en bas.",
              axe1_verset: "Le verbe unzila est le pivot de la premiere partie du verset — c'est dans ce mois que le Coran fut descendu. Le champ lexical (mois, Coran, guidance, preuves, direction, distinction) montre que la descente est l'evenement fondateur qui donne au mois sa sacralite. Le passif met l'accent sur la descente elle-meme, pas sur celui qui fait descendre — c'est le fait que le Coran ait ete descendu qui sacralise le mois. La proposition relative (alladhi unzila fihi) fait de la descente la definition meme du mois de Ramadan.",
              axe2_voisins: "Le verset 2:176 utilisait nazzala pour la descente du Livre. Le verset 2:185 utilise unzila pour la descente du Coran dans le mois de Ramadan. La distinction entre nazzala (forme II, progressive) et anzala/unzila (forme IV, globale) est significative : en 2:185, la descente est globale — le Coran a ete descendu comme un tout dans le mois de Ramadan, meme si sa revelation progressive a dure 23 ans.",
              axe3_sourate: "La racine n-z-l est parmi les plus frequentes de la sourate al-Baqarah. En 2:2, le Livre qui ne porte pas de doute. En 2:4, « ce qui t'a ete descendu et ce qui a ete descendu avant toi ». En 2:23, « si vous etes en doute de ce que Nous avons descendu ». En 2:185, la descente est localisee dans le temps — le mois de Ramadan. La sourate utilise n-z-l pour construire le concept de revelation progressive et la rattacher a un moment precis.",
              axe4_coherence: "La racine n-z-l apparait environ 293 fois dans le Coran. En 97:1, « Nous l'avons descendu dans la nuit du destin ». En 44:3, « Nous l'avons descendu dans une nuit benie ». Le Coran localise sa propre descente dans le temps — le mois de Ramadan, la nuit du destin. Ces versets se completent : le Coran a ete descendu dans le mois de Ramadan (2:185), precisement dans la nuit du destin qui est dans ce mois (97:1). La descente a un lieu temporel precis.",
              axe5_frequence: "Pour la mission du khalifa, la descente est la transmission de la guidance. Le khalifa recoit la guidance d'en haut — elle ne vient pas de lui mais elle descend vers lui. La descente du Coran dans le mois de Ramadan montre que la guidance a un temps et un lieu — elle n'est pas permanente et diffuse mais concentree dans des moments privilegies. Le khalifa qui jeune en Ramadan communie avec le moment fondateur de la revelation — il revit chaque annee la descente du Livre."
            }
          }
        }
      },
      // qra pos=6
      {
        word_key: "qra", position: 6, sense_chosen: "recitation",
        analysis_axes: {
          sense_chosen: "recitation",
          concept_chosen: "Lecture/Recitation",
          concepts: {
            "Lecture/Recitation": {
              status: "retenu",
              senses: ["lecture", "recitation", "ce qui est recite", "rassemblement de texte", "proclamation"],
              proof_ctx: "Le nom al-qur'anu est un nom nominatif defini singulier de la racine q-r-a. Le Lane's donne : lire, reciter, rassembler, proclamer a voix haute. Le qur'an est le masdar (nom verbal) de qara'a — c'est la recitation par excellence. L'article al- en fait un nom propre — LE Coran, la recitation supreme qui surpasse toute autre recitation. Le concept de lecture implique un acte vocal et public — on recite a voix haute, on proclame. Le Coran n'est pas un texte silencieux mais une parole recitee, entendue et transmise oralement.",
              axe1_verset: "Le mot al-qur'anu est l'objet de la descente — c'est la recitation qui fut descendue dans le mois de Ramadan. Le champ lexical (descente, guidance, preuves, direction, distinction) montre que le Coran est qualifie par ses attributs : il est guidance, preuves claires, direction et distinction. Le Coran n'est pas seulement un livre — il est un acte de recitation qui guide, prouve, dirige et distingue. La position du mot apres unzila (fut descendu) fait du Coran le sujet passif de la descente divine.",
              axe2_voisins: "Le verset 2:183 ne mentionnait pas le Coran. Le verset 2:185 introduit le Coran comme la raison pour laquelle le mois de Ramadan est sacre. La sequence montre que le jeune n'est pas une fin en soi mais un acte qui s'inscrit dans le mois de la revelation. Le lien entre jeune et Coran est fondateur : on jeune dans le mois ou la recitation fut descendue — le jeune et la recitation sont lies dans le meme mois.",
              axe3_sourate: "La racine q-r-a apparait dans la sourate al-Baqarah principalement a travers le nom al-qur'an. En 2:185, le Coran est l'objet de la descente. La sourate est elle-meme la plus longue sourate du Coran — elle est le coeur de la recitation. Le Coran se nomme lui-meme dans le verset du Ramadan, creant une auto-reference : la recitation parle de sa propre descente dans le mois ou on la recite le plus.",
              axe4_coherence: "La racine q-r-a apparait environ 88 fois dans le Coran. En 96:1, « Recite au nom de ton Seigneur » — le premier commandement de la revelation est de reciter. En 17:78, « le qur'an de l'aube » designe la priere du matin par son acte de recitation. En 75:17-18, « c'est a Nous de le rassembler et de le reciter ». Le Coran se definit comme une recitation — un acte performatif de proclamation, pas un texte statique.",
              axe5_frequence: "Pour la mission du khalifa, la recitation est l'outil de la mission. Le khalifa ne se contente pas de lire — il recite, il proclame, il transmet oralement. La descente du Coran dans le mois de Ramadan fait de ce mois le mois de la recitation intensive. Le khalifa qui recite le Coran en Ramadan reactualise la revelation — il fait descendre la parole divine dans son coeur et dans sa communaute. La recitation est l'acte fondamental de la mission du khalifa."
            }
          }
        }
      },
      // hdy pos=7
      {
        word_key: "hdy", position: 7, sense_chosen: "guidance",
        analysis_axes: {
          sense_chosen: "guidance",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guidance", "direction", "voie droite", "mener au but", "guidage"],
              proof_ctx: "Le nom hudan est un nom accusatif indefini singulier de la racine h-d-y. Le Lane's donne : guidance, direction, voie droite, ce qui mene au but, don de direction. Le huda est un concept actif — il ne s'agit pas d'un chemin statique mais d'un acte de direction qui mene quelqu'un d'un point a un autre. Le mot est au tanwin (indefini) — une guidance, marquant que c'est un attribut parmi d'autres du Coran. Le concept de guidance est un concept relationnel — il implique un guide, un guide et une destination. La guidance n'existe pas en soi, elle existe dans la relation entre celui qui guide et celui qui est guide.",
              axe1_verset: "Le mot hudan qualifie le Coran en position de hal (etat) — le Coran a ete descendu EN TANT QUE guidance. Le champ lexical (Coran, gens, preuves, direction, distinction) montre que la guidance est le premier attribut du Coran mentionne dans le verset. La guidance est pour les gens (li-l-nasi) — elle a une destination universelle. Le verset pose un triple attribut du Coran : guidance, preuves claires de direction, et distinction. La guidance ouvre cette enumeration comme l'attribut fondamental.",
              axe2_voisins: "Le verset 2:2 ouvrait la sourate par « guidance pour les muttaqin ». Le verset 2:185 dit « guidance pour les gens ». La progression est significative : au debut de la sourate, la guidance est pour les pieux ; au coeur de la sourate, elle est pour tous les gens. Le verset elargit le public de la guidance — le Coran n'est pas seulement pour une elite spirituelle mais pour l'humanite entiere.",
              axe3_sourate: "La racine h-d-y est parmi les plus recurrentes de la sourate al-Baqarah. En 2:2, huda pour les muttaqin. En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:38, « quiconque suit Ma guidance ». En 2:97, « guidance et bonne nouvelle ». En 2:120, « la guidance de Dieu est LA guidance ». En 2:185, la guidance est mentionnee trois fois dans le meme verset. La sourate construit la guidance comme le fil conducteur de toute la revelation.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. C'est l'une des racines les plus frequentes du texte sacre. En 1:6, « guide-nous dans la voie droite ». En 20:50, « Notre Seigneur est celui qui a donne a chaque chose sa creation puis l'a guidee ». La guidance est un attribut divin fondamental — Dieu guide toute la creation, pas seulement les humains. Le Coran est un instrument de cette guidance universelle.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est la boussole de la mission. Le khalifa n'erre pas — il est guide par la revelation descendue dans le mois de Ramadan. La guidance pour les gens signifie que le khalifa n'est pas guide pour lui seul mais pour transmettre cette guidance a l'humanite. Le khalifa est un relais de la guidance divine — il recoit la direction et la transmet. Le mois de Ramadan est le mois ou cette guidance est reactualisee par la recitation et le jeune."
            }
          }
        }
      },
      // nws pos=8
      {
        word_key: "nws", position: 8, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanite/Peuple",
          concepts: {
            "Humanite/Peuple": {
              status: "retenu",
              senses: ["gens", "humanite", "peuple", "les hommes", "les etres humains"],
              proof_ctx: "Le nom al-nasi est un nom genitif defini pluriel de la racine n-w-s (ou n-a-s). Le Lane's donne : les gens, l'humanite, les hommes en general, le genre humain. Le mot designe l'ensemble des etres humains sans distinction de croyance, de race ou de statut. L'article al- definit les gens comme la totalite — LES gens, tous les gens, l'humanite entiere. Le concept d'humanite est un concept inclusif et universel — il n'exclut personne de la destination de la guidance coranique.",
              axe1_verset: "Le mot li-l-nasi complete la qualification du Coran : guidance POUR LES GENS. Le champ lexical (guidance, preuves, direction, distinction) montre que les gens sont les destinataires de tous ces attributs. La preposition li- marque la destination et le benefice — la guidance est au service des gens, pas contre eux. L'universalite du destinataire (les gens, pas les croyants ni les muttaqin) elargit la portee du Coran a l'humanite entiere.",
              axe2_voisins: "Le verset 2:183 s'adressait aux croyants (ya ayyuha alladhina amanu). Le verset 2:185 elargit aux gens (li-l-nasi). La sequence montre que le jeune est prescrit aux croyants mais que le Coran est une guidance pour tous. L'obligation cultuelle est specifique, mais la guidance est universelle. Les versets precedents etaient legislatifs (pour les croyants), le verset 185 est doctrinal (pour l'humanite).",
              axe3_sourate: "La racine n-w-s est omnipresente dans la sourate al-Baqarah. En 2:8, « parmi les gens, il y a ceux qui disent ». En 2:13, « comme les gens ont cru ». En 2:21, « o les gens, adorez votre Seigneur ». En 2:164, « des signes pour un peuple qui raisonne ». La sourate utilise al-nas pour designer tantot l'humanite entiere, tantot un groupe specifique. En 2:185, c'est l'humanite entiere qui est destinataire.",
              axe4_coherence: "La racine n-w-s apparait environ 241 fois dans le Coran. En 114:1-6, la sourate al-Nas est entierement consacree aux gens. En 2:185, les gens sont les destinataires de la guidance. En 3:138, « ceci est un expose pour les gens et une guidance et une exhortation pour les muttaqin ». Le Coran distingue entre l'expose general (pour les gens) et la guidance specifique (pour les pieux).",
              axe5_frequence: "Pour la mission du khalifa, les gens sont le public de la mission. Le khalifa n'est pas khalifa pour lui-meme — il est khalifa pour les gens, pour l'humanite. La guidance descendue dans le mois de Ramadan est destinee a tous les gens, ce qui signifie que la mission du khalifa a une portee universelle. Le khalifa porte une responsabilite envers l'humanite entiere — la guidance qu'il recoit n'est pas un privilege personnel mais un depot a transmettre."
            }
          }
        }
      },
      // byn pos=9
      {
        word_key: "byn", position: 9, sense_chosen: "preuves claires",
        analysis_axes: {
          sense_chosen: "preuves claires",
          concept_chosen: "Clarte/Evidence",
          concepts: {
            "Clarte/Evidence": {
              status: "retenu",
              senses: ["preuve claire", "evidence", "ce qui est manifeste", "separation", "distinction", "ce qui rend visible"],
              proof_ctx: "Le nom bayyinatin est un nom genitif indefini pluriel feminin de la racine b-y-n. Le Lane's donne : ce qui est clair et evident, preuve manifeste, argument qui rend visible la verite, ce qui separe le vrai du faux. La bayyina est ce qui rend les choses evidentes — elle eclaire ce qui etait obscur. Le pluriel indefini (bayyinatin) marque la multiplicite — les preuves sont nombreuses et variees. Le concept de clarte est un concept epistemologique — il s'agit de rendre visible et comprehensible ce qui etait cache ou confus.",
              axe1_verset: "Le mot bayyinatin est le deuxieme attribut du Coran apres hudan. Le champ lexical (guidance, direction, distinction) montre que les preuves claires sont des manifestations concretes de la guidance. Le verset construit une hierarchie : le Coran est guidance (concept general) ET preuves claires de la guidance et de la distinction (manifestations concretes). Les preuves claires sont « de la guidance » (mina al-huda) — elles emanent de la guidance et la rendent tangible.",
              axe2_voisins: "Le verset 2:159 mentionnait « les preuves claires et la guidance que Nous avons descendues ». Le verset 2:185 reprend les memes termes dans le contexte du Ramadan. La sequence montre que les preuves claires sont un attribut constant de la revelation — elles accompagnent chaque descente divine. Les bayyinat sont le pont entre la revelation et la comprehension humaine.",
              axe3_sourate: "La racine b-y-n est tres frequente dans la sourate al-Baqarah. En 2:99, « Nous avons descendu vers toi des signes clairs (ayatin bayyinatin) ». En 2:159, « ceux qui cachent les preuves claires ». En 2:185, les preuves claires qualifient le Coran. En 2:187, « les fils blanc et noir de l'aube sont distingues (yatabayyana) ». La sourate utilise b-y-n pour la clarte de la revelation et la clarte de la perception — voir clair intellectuellement et physiquement.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. En 3:138, « ceci est un expose (bayan) pour les gens ». En 55:4, « Il lui a enseigne le discours clair (al-bayan) ». Le Coran se presente comme un ensemble de preuves claires — il ne demande pas la foi aveugle mais offre des evidences qui eclairent la raison. Les bayyinat sont l'argument rationnel de la revelation.",
              axe5_frequence: "Pour la mission du khalifa, les preuves claires sont les outils de la mission. Le khalifa ne guide pas par l'arbitraire mais par l'evidence — il montre, il prouve, il eclaire. Les bayyinat descendues avec le Coran sont les instruments que le khalifa utilise pour convaincre et guider. La clarte est une exigence de la mission : le khalifa doit rendre visible ce qui est cache, comprehensible ce qui est obscur, evident ce qui est douteux."
            }
          }
        }
      },
      // hdy pos=11 (same root as pos=7, second occurrence)
      {
        word_key: "hdy", position: 11, sense_chosen: "guidance",
        analysis_axes: {
          sense_chosen: "guidance",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guidance", "direction", "voie droite", "mener au but", "guidage"],
              proof_ctx: "Le nom al-huda est un nom genitif defini singulier de la racine h-d-y. Le Lane's donne : guidance, direction, voie droite, ce qui mene au but, don de direction. Le huda est un concept actif — il ne s'agit pas d'un chemin statique mais d'un acte de direction qui mene quelqu'un d'un point a un autre. L'article al- definit la guidance comme un concept absolu — LA guidance, pas une guidance parmi d'autres. Le concept de guidance est un concept relationnel — il implique un guide, un guide et une destination. La guidance n'existe pas en soi, elle existe dans la relation entre celui qui guide et celui qui est guide.",
              axe1_verset: "Le mot al-huda apparait ici comme la source des preuves claires : « des preuves evidentes DE LA GUIDANCE ». Le champ lexical (guidance pos=7, preuves, distinction) montre que la guidance est repetee pour en faire la source des preuves. La premiere occurrence (hudan pos=7) qualifie le Coran, la deuxieme (al-huda pos=11) est la source des preuves. La repetition cree une circularite : le Coran est guidance, et les preuves viennent de la guidance — la guidance engendre ses propres preuves.",
              axe2_voisins: "Le verset 2:2 ouvrait la sourate par « guidance pour les muttaqin ». Le verset 2:185 dit « guidance pour les gens » (pos=7) puis « preuves de la guidance » (pos=11). La progression montre que la sourate approfondit le concept de guidance : d'abord comme attribut du Livre, puis comme source de preuves. La guidance n'est pas un concept vague — elle produit des preuves concretes qui la rendent verifiable.",
              axe3_sourate: "La racine h-d-y est parmi les plus recurrentes de la sourate al-Baqarah. En 2:2, huda pour les muttaqin. En 2:5, « ceux-la sont sur une guidance ». En 2:120, « la guidance de Dieu est LA guidance ». En 2:185, le mot apparait trois fois dans le meme verset (pos=7, 11, 42). La sourate fait de la guidance un leitmotiv obsedant — elle revient sans cesse pour rappeler que la direction divine est la realite centrale.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. La repetition de huda dans un meme verset est un procede rhetorique coranique — la guidance est si importante qu'elle doit etre mentionnee plusieurs fois. En 2:185, la triple occurrence (hudan, al-huda, hadakum) cree un crescendo : le Coran est guidance (attribut), il contient des preuves de LA guidance (source), et Dieu vous a guides (acte accompli). La guidance passe du concept a la preuve a l'acte.",
              axe5_frequence: "Pour la mission du khalifa, la guidance comme source de preuves signifie que la mission est fondee sur l'evidence, pas sur l'opinion. Le khalifa ne guide pas a l'aveugle — il s'appuie sur les preuves claires qui emanent de la guidance divine. La guidance produit ses propres preuves, ce qui rend la mission du khalifa verifiable et argumentable. Le khalifa peut montrer les preuves de la guidance — il n'est pas dans la croyance aveugle mais dans la conviction fondee."
            }
          }
        }
      },
      // frq pos=12
      {
        word_key: "frq", position: 12, sense_chosen: "distinction",
        analysis_axes: {
          sense_chosen: "distinction",
          concept_chosen: "Separation/Distinction",
          concepts: {
            "Separation/Distinction": {
              status: "retenu",
              senses: ["distinguer", "separer le vrai du faux", "discernement", "critere", "separation"],
              proof_ctx: "Le nom al-furqani est un nom genitif defini singulier de la racine f-r-q. Le Lane's donne : separer, distinguer, diviser, discerner, critere de separation entre le vrai et le faux. Le furqan est l'instrument de separation — il permet de distinguer la verite du mensonge, le licite de l'illicite, le juste de l'injuste. L'article al- le definit comme LE critere absolu de distinction. Le concept de separation est un concept epistemologique et ethique — il s'agit de savoir distinguer, de ne pas confondre les categories.",
              axe1_verset: "Le mot al-furqani est le troisieme attribut du Coran avec la guidance et les preuves claires. Le champ lexical (guidance, preuves, direction) montre que la distinction est l'aboutissement de la qualification : le Coran guide, prouve et distingue. La distinction est la fonction pratique du Coran — il ne se contente pas de guider, il separe le vrai du faux pour que le croyant sache ou il va. La conjonction wa- (et le furqan) coordonne la distinction avec la guidance comme des attributs complementaires.",
              axe2_voisins: "Le verset 2:53 mentionnait le furqan donne a Moise : « Nous avons donne a Moise le Livre et le furqan ». Le verset 2:185 attribue le furqan au Coran. La sequence montre une continuite entre la Torah et le Coran — les deux sont des instruments de distinction. Le furqan n'est pas l'apanage d'une seule revelation — chaque revelation porte la capacite de distinguer le vrai du faux.",
              axe3_sourate: "La racine f-r-q apparait dans la sourate al-Baqarah en 2:53 (le furqan de Moise), 2:185 (le furqan du Coran), et en 2:102 (la separation entre l'homme et son epouse par la sorcellerie). La sourate montre que la separation peut etre positive (discerner le vrai) ou negative (separer les couples). Le furqan en 2:185 est la separation positive par excellence — celle qui eclaire la conscience.",
              axe4_coherence: "La racine f-r-q apparait environ 72 fois dans le Coran. En 3:4, « Il a descendu le furqan ». En 8:29, « si vous premunissez Dieu, Il vous donnera un furqan ». En 25:1, « beni soit Celui qui a descendu le furqan sur Son serviteur ». La sourate 25 porte meme le nom d'al-Furqan. Le Coran est fondamentalement un instrument de distinction — il separe le bien du mal, le vrai du faux, le juste de l'injuste.",
              axe5_frequence: "Pour la mission du khalifa, la distinction est la competence centrale de la mission. Le khalifa doit distinguer le vrai du faux dans chaque situation — il ne peut pas gouverner dans la confusion. Le furqan est l'outil intellectuel du khalifa : grace a lui, il sait ce qui est juste et ce qui est injuste, ce qui est licite et ce qui est illicite. Sans distinction, la mission du khalifa tombe dans l'arbitraire et la corruption. Le Ramadan, mois du furqan, est le mois ou le khalifa affine sa capacite de discernement."
            }
          }
        }
      },
      // shhd pos=14
      {
        word_key: "shhd", position: 14, sense_chosen: "temoigner",
        analysis_axes: {
          sense_chosen: "temoigner",
          concept_chosen: "Temoignage/Presence",
          concepts: {
            "Temoignage/Presence": {
              status: "retenu",
              senses: ["temoigner", "etre present", "assister", "voir de ses propres yeux", "attester"],
              proof_ctx: "Le verbe shahida est un accompli 3MS de la racine sh-h-d. Le Lane's donne : temoigner, etre present, assister, voir de ses propres yeux, attester, etre temoin. La racine porte l'idee de presence active — le shahid est celui qui est la et qui voit. Le temoignage n'est pas passif — il implique une presence consciente et une observation directe. En contexte, shahida al-shahra signifie « etre present au mois », c'est-a-dire etre la quand le mois de Ramadan arrive, ne pas etre absent (en voyage). Le temoignage est un acte de presence qui cree une obligation.",
              axe1_verset: "Le verbe shahida ouvre la deuxieme partie du verset — la partie legislative. Le champ lexical (mois, jeune, maladie, voyage) montre que le temoignage est la condition de l'obligation de jeuner. Celui qui « temoigne » du mois — c'est-a-dire celui qui est present et non en voyage — doit jeuner. Le temoignage est le critere de l'obligation : la presence rend le jeune obligatoire, l'absence (voyage) le suspend. Le verbe fait pivoter le verset de la doctrine (la descente du Coran) a la legislation (l'obligation de jeuner).",
              axe2_voisins: "Le verset 2:183 posait l'obligation du jeune. Le verset 2:184 mentionnait des exemptions. Le verset 2:185 precise la condition : celui qui est present au mois. La sequence montre que la legislation du jeune se construit par etapes — l'obligation generale, les exemptions, puis la condition precise de presence. Le temoignage du mois est le critere qui determine qui doit jeuner immediatement et qui peut reporter.",
              axe3_sourate: "La racine sh-h-d apparait frequemment dans la sourate al-Baqarah. En 2:23, « appelez vos temoins ». En 2:143, « vous serez temoins sur les gens ». En 2:185, le temoignage est une presence au mois. En 2:282, « prenez deux temoins ». La sourate utilise sh-h-d pour le temoignage juridique (2:282), le temoignage cosmique (2:143) et le temoignage temporel (2:185 — etre present a un moment donne).",
              axe4_coherence: "La racine sh-h-d apparait environ 160 fois dans le Coran. En 3:18, « Dieu temoigne qu'il n'y a de divinite que Lui ». En 4:135, « soyez temoins de la justice ». En 85:7, « ils sont temoins de ce qu'ils font aux croyants ». Le temoignage dans le Coran a une dimension juridique (attester), spirituelle (confesser la foi) et temporelle (etre present). En 2:185, c'est la dimension temporelle qui prime.",
              axe5_frequence: "Pour la mission du khalifa, le temoignage est la presence responsable. Le khalifa n'est pas un spectateur — il est temoin, c'est-a-dire present et conscient. Temoigner du mois de Ramadan signifie etre la, present, et accepter l'obligation que cette presence impose. Le khalifa qui est present ne peut pas se derober — sa presence meme est un engagement. La mission du khalifa est un temoignage permanent : il est temoin de la verite et sa presence engage sa responsabilite."
            }
          }
        }
      },
      // shhr pos=16 (same root as pos=1, second occurrence)
      {
        word_key: "shhr", position: 16, sense_chosen: "mois",
        analysis_axes: {
          sense_chosen: "mois",
          concept_chosen: "Temps/Mois",
          concepts: {
            "Temps/Mois": {
              status: "retenu",
              senses: ["mois", "lune", "periode lunaire", "ce qui est apparent", "cycle mensuel"],
              proof_ctx: "Le nom al-shahra est un nom accusatif defini singulier de la racine sh-h-r. Le Lane's donne : mois, lune, periode lunaire, ce qui est apparent et connu de tous. La racine porte l'idee de ce qui est visible et connu — le mois est « celebre » parce que la lune nouvelle le rend visible a tous. Le shahru est une division temporelle basee sur le cycle lunaire — chaque mois commence avec l'observation de la lune nouvelle. L'article al- definit le mois comme LE mois dont il est question — le mois de Ramadan mentionne plus haut.",
              axe1_verset: "Le mot al-shahra est l'objet du temoignage : « quiconque est temoin du mois ». Le champ lexical (temoigner, jeuner) montre que le mois est le cadre de l'obligation. La repetition du mot (shahru pos=1 et al-shahra pos=16) cree un effet de boucle : le verset ouvre par le mois (shahru ramadana) et y revient pour poser l'obligation (faman shahida al-shahra). Le mois est a la fois le theme doctrinal (la descente du Coran) et le cadre legal (l'obligation de jeuner).",
              axe2_voisins: "Le verset 2:184 mentionnait « des jours comptes » sans nommer le mois. Le verset 2:185 nomme le mois deux fois — comme objet de la revelation et comme cadre du jeune. La repetition montre que le mois est central : ce n'est pas seulement un conteneur temporel mais un sujet a part entiere du verset. Les versets precedents preparaient cette identification du mois.",
              axe3_sourate: "La racine sh-h-r apparait dans la sourate al-Baqarah en 2:185 (deux fois), 2:194 et 2:197. La sourate utilise le mois comme unite structurante de la legislation cultuelle. Le jeune a son mois (Ramadan), le pelerinage a ses mois, les mois sacres ont leurs regles. Le verset 2:185 est le verset qui ancre le jeune dans un mois specifique.",
              axe4_coherence: "La racine sh-h-r apparait environ 21 fois dans le Coran. La repetition du mot dans un meme verset est un procede coranique de mise en relief — le mois est si important qu'il est nomme deux fois. En 9:36, les douze mois sont mentionnes. En 2:185, un seul mois est nomme — celui de Ramadan. Le Coran individualise ce mois parmi les douze pour en faire le mois du jeune.",
              axe5_frequence: "Pour la mission du khalifa, la repetition du mois dans le verset montre que le temps est le cadre incontournable de la mission. Le khalifa ne choisit pas son temps — il est soumis au calendrier lunaire et a ses obligations. La double mention du mois renforce l'idee que le temps sacre est une structure qui s'impose au khalifa. Le khalifa qui « temoigne » du mois est celui qui accepte que le temps divin structure sa vie et sa mission."
            },
            "Notoriete/Publicite": {
              status: "probable",
              senses: ["ce qui est apparent", "celebre", "connu", "notoire", "publicite"],
              proof_ctx: "Le sens de notoriete est un sens etymologique de la racine sh-h-r — ce qui est shahir est ce qui est connu et apparent. Mais le contexte du verset designe specifiquement la periode temporelle (le mois), pas le concept abstrait de notoriete. La distinction est la meme qu'en pos=1 : le mois tire son nom de sa visibilite lunaire, mais dans le verset c'est le cadre temporel qui prime."
            }
          }
        }
      },
      // swm pos=17
      {
        word_key: "swm", position: 17, sense_chosen: "jeuner",
        analysis_axes: {
          sense_chosen: "jeuner",
          concept_chosen: "Abstinence/Jeune",
          concepts: {
            "Abstinence/Jeune": {
              status: "retenu",
              senses: ["jeuner", "s'abstenir", "se retenir", "cesser", "garder le silence"],
              proof_ctx: "Le verbe falyasumhu est un jussif 3MS de la racine s-w-m, precede de la particule fa- et la lam du commandement. Le Lane's donne : s'abstenir, jeuner, cesser de manger et de boire, se retenir de toute chose, garder le silence. Le sawm est un acte d'abstinence volontaire — le jeune n'est pas seulement l'abstention de nourriture mais l'abstention de toute chose qui rompt le jeune. Le jussif avec lam marque un ordre ferme — qu'il jeune ! C'est un commandement, pas une suggestion. Le pronom suffixe -hu renvoie au mois — qu'il le jeune, qu'il s'abstienne pendant ce mois.",
              axe1_verset: "Le verbe falyasumhu est le point culminant de la partie legislative du verset — c'est l'obligation concrete qui decoule du temoignage du mois. Le champ lexical (temoigner, mois, maladie, voyage, nombre, jours) montre que le jeune est entoure de conditions (presence) et d'exemptions (maladie, voyage). Le verbe est au jussif — c'est la forme de l'ordre en arabe. La particule fa- (donc, alors) lie le jeune au temoignage : SI tu es present au mois, ALORS jeune-le. Le pronom suffixe -hu fait du mois l'objet du jeune — on ne jeune pas en general, on jeune LE mois.",
              axe2_voisins: "Le verset 2:183 posait l'obligation du jeune avec le verbe kutiba (il vous est prescrit le sawm). Le verset 2:185 precise QUAND jeuner (le mois de Ramadan) et QUI doit jeuner (celui qui est present). La sequence 183-185 construit la legislation du jeune par couches : l'obligation (183), la duree et les exemptions (184), le mois et la condition de presence (185). Le verbe falyasumhu est la concretisation de kutiba alaykum al-siyamu.",
              axe3_sourate: "La racine s-w-m apparait dans la sourate al-Baqarah en 2:183 (al-siyamu, le jeune), 2:185 (falyasumhu, qu'il le jeune), 2:187 (al-siyami, le jeune en contexte de rapports conjugaux), et 2:196 (siyamu, le jeune comme expiation du pelerinage). La sourate consacre un bloc entier (183-187) au jeune de Ramadan et y revient en 196. Le jeune est l'un des grands sujets legislatifs de la sourate.",
              axe4_coherence: "La racine s-w-m apparait environ 14 fois dans le Coran. En 19:26, Marie dit « j'ai voue un jeune (sawman) au Tout-Misericordieux ». En 33:35, « les jeuneurs et les jeuneuses ». En 58:4, le jeune comme expiation du serment. Le Coran utilise le jeune comme acte cultuel (Ramadan), comme expiation (serment, pelerinage) et comme voeu volontaire (Marie). Le jeune est un acte d'abstinence polyvalent qui sert plusieurs fonctions spirituelles.",
              axe5_frequence: "Pour la mission du khalifa, le jeune est la discipline de la mission. Le khalifa apprend a se retenir — a dominer ses appetits, a maitriser ses pulsions, a s'abstenir de ce qui corrompt. Le mois de Ramadan est le mois d'entrainement ou le khalifa forge sa discipline par l'abstinence. Le jeune n'est pas une punition mais une preparation — le khalifa qui sait jeuner sait aussi se retenir de l'injustice, de la corruption et de l'exces. L'abstinence forme le caractere necessaire a la mission."
            }
          }
        }
      },
      // kwn pos=19
      {
        word_key: "kwn", position: 19, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Etre/Existence",
          concepts: {
            "Etre/Existence": {
              status: "retenu",
              senses: ["etre", "exister", "se trouver", "devenir", "se trouver dans un etat"],
              proof_ctx: "Le verbe kana est un accompli 3MS de la racine k-w-n. Le Lane's donne : etre, exister, se trouver dans un etat, devenir, avoir lieu. Le verbe kana est le verbe d'existence par excellence en arabe — il introduit un etat ou une condition. En contexte conditionnel (wa-man kana maridan), il signifie « quiconque EST malade » — il pose un etat de fait qui conditionne la regle juridique. Le concept d'existence ici est conditionnel — il ne s'agit pas de l'existence ontologique mais de l'etat dans lequel se trouve la personne.",
              axe1_verset: "Le verbe kana introduit l'exemption : « et quiconque est malade ou en voyage ». Le champ lexical (malade, voyage, nombre, jours, autres) montre que kana ouvre la proposition conditionnelle qui suspend l'obligation du jeune. Le verbe n'est pas descriptif mais juridique — il pose une condition d'etat qui modifie l'obligation. La formule « wa-man kana » est une structure legislative coranique qui introduit les cas particuliers apres la regle generale.",
              axe2_voisins: "Le verset 2:184 mentionnait deja « quiconque parmi vous est malade ou en voyage ». Le verset 2:185 repete la meme exemption apres avoir pose la condition de presence. La repetition montre que l'exemption est confirmee et renforcee — le Coran insiste sur la facilite divine en mentionnant deux fois l'exemption pour les malades et les voyageurs.",
              axe3_sourate: "La racine k-w-n est la racine la plus frequente de la sourate al-Baqarah et du Coran. Le verbe kana apparait des centaines de fois dans des fonctions grammaticales variees. En 2:185, il est un verbe conditionnel qui introduit un cas d'exemption. La sourate utilise kana pour poser des conditions, decrire des etats et introduire des recits historiques.",
              axe4_coherence: "La racine k-w-n apparait plus de 1300 fois dans le Coran. C'est la racine la plus frequente du texte sacre. En 2:117, « kun fayakunu » (sois ! et cela est) montre que kana/yakun porte le pouvoir createur de Dieu. En 2:185, kana est un simple verbe d'etat conditionnel. La meme racine porte le pouvoir createur divin et la condition humaine — etre est a la fois un acte divin et un etat humain.",
              axe5_frequence: "Pour la mission du khalifa, l'etre conditionnel montre que la mission s'adapte aux etats de chacun. Le khalifa n'est pas soumis a une obligation uniforme — son etat (malade, voyageur, present) determine ses obligations. La mission du khalifa prend en compte la realite humaine — la maladie, le voyage, la difficulte. L'etre conditionnel montre que la legislation divine est flexible et adaptee a la condition humaine."
            }
          }
        }
      },
      // mrd pos=20
      {
        word_key: "mrd", position: 20, sense_chosen: "malade",
        analysis_axes: {
          sense_chosen: "malade",
          concept_chosen: "Maladie/Faiblesse",
          concepts: {
            "Maladie/Faiblesse": {
              status: "retenu",
              senses: ["malade", "faible", "affaibli", "souffrant", "atteint d'une maladie"],
              proof_ctx: "Le nom maridan est un nom accusatif indefini singulier de la racine m-r-d. Le Lane's donne : etre malade, etre faible, etre affaibli par la maladie, souffrir. Le marid est celui dont le corps est affaibli par la maladie — il ne peut pas accomplir normalement ses obligations physiques. L'accusatif (maridan) est un attribut (khabar) de kana — « quiconque est malade ». L'indefini marque que la maladie est un etat generique — toute maladie qui empeche le jeune justifie l'exemption.",
              axe1_verset: "Le mot maridan est la premiere condition d'exemption du jeune. Le champ lexical (voyage, nombre, jours, facilite, difficulte) montre que la maladie est un obstacle reconnu par la legislation divine. Le verset ne definit pas quelle maladie justifie l'exemption — il laisse l'appreciation au malade et a la communaute. La mention de la maladie avant le voyage montre une hierarchie de l'urgence : la maladie est plus contraignante que le voyage.",
              axe2_voisins: "Le verset 2:184 mentionnait deja la meme exemption pour le malade. Le verset 2:185 la confirme. La double mention dans deux versets consecutifs montre l'insistance du Coran sur la facilite pour le malade — le malade n'est jamais oublie dans la legislation. Le verset 2:185 ajoute la finalite : « Dieu veut pour vous la facilite » — l'exemption du malade est une manifestation de la volonte divine de faciliter.",
              axe3_sourate: "La racine m-r-d apparait dans la sourate al-Baqarah en 2:10 (« dans leurs coeurs il y a une maladie ») et en 2:184-185 (la maladie physique). La sourate distingue entre la maladie du coeur (hypocrisie, doute) et la maladie du corps (faiblesse physique). En 2:185, la maladie est physique et justifie une exemption concrete. La distinction est importante : la maladie du coeur n'exempte de rien, la maladie du corps exempte du jeune.",
              axe4_coherence: "La racine m-r-d apparait environ 24 fois dans le Coran. En 73:20, « il y a parmi vous des malades ». En 4:43, « si vous etes malades ou en voyage ». En 5:6, meme formulation. Le Coran mentionne systematiquement le malade dans les exemptions legislatives — ablutions, jeune, priere. Le malade est une categorie protegee par la legislation divine : ses obligations sont allegees, pas supprimees.",
              axe5_frequence: "Pour la mission du khalifa, la maladie est une epreuve qui ne dispense pas de la mission mais en modifie les modalites. Le khalifa malade ne cesse pas d'etre khalifa — il adapte ses obligations. L'exemption du jeune pour le malade montre que la mission divine prend en compte la fragilite humaine. Le khalifa n'est pas un surhomme — il est un etre humain soumis a la maladie, et la legislation divine reconnait cette realite sans l'abandonner."
            }
          }
        }
      },
      // sfr pos=23
      {
        word_key: "sfr", position: 23, sense_chosen: "voyage",
        analysis_axes: {
          sense_chosen: "voyage",
          concept_chosen: "Voyage/Deplacement",
          concepts: {
            "Voyage/Deplacement": {
              status: "retenu",
              senses: ["voyage", "deplacement", "parcourir une distance", "sortir de chez soi", "expedition"],
              proof_ctx: "Le nom safarin est un nom genitif indefini singulier de la racine s-f-r. Le Lane's donne : voyager, se deplacer, sortir de chez soi, parcourir une distance, devoiler (au sens de decouvrir en voyageant). Le safar est le deplacement loin de chez soi — il implique une distance et une absence du domicile. L'indefini (safarin) marque que tout voyage justifie l'exemption — le Coran ne pose pas de distance minimale dans ce verset. La preposition « ala » (en/sur) indique un etat — etre SUR un voyage, c'est-a-dire en situation de deplacement.",
              axe1_verset: "Le mot safarin est la deuxieme condition d'exemption apres la maladie. Le champ lexical (malade, nombre, jours, facilite, difficulte) montre que le voyage est un obstacle reconnu au meme titre que la maladie. Le verset pose une alternative : malade OU en voyage — les deux conditions sont suffisantes separement. Le voyage cree une difficulte pratique (pas de domicile fixe, fatigue du deplacement) qui justifie le report du jeune, pas sa suppression.",
              axe2_voisins: "Le verset 2:184 mentionnait deja la meme exemption pour le voyageur. Le verset 2:185 la confirme. La repetition montre l'insistance du Coran sur la facilite pour le voyageur. Le verset 2:173 exemptait le voyageur de l'interdiction alimentaire dans le cas de necessite. La sourate montre que le voyage est une circonstance attenuante reconnue dans plusieurs domaines legislatifs.",
              axe3_sourate: "La racine s-f-r apparait dans la sourate al-Baqarah en 2:184 et 2:185 (voyage comme exemption de jeune) et en 2:283 (voyage comme contexte de la dette). La sourate utilise le voyage comme circonstance qui modifie les obligations — le voyageur a des regles allegees pour le jeune et pour les transactions commerciales. Le voyage est une situation de vulnerabilite qui justifie des accommodements.",
              axe4_coherence: "La racine s-f-r apparait environ 12 fois dans le Coran. En 4:43, « si vous etes malades ou en voyage ». En 5:6, meme formulation pour les ablutions. En 62:11, « quand ils voient un commerce ou un divertissement ». Le Coran mentionne le voyage comme une excuse universelle — il allege les obligations du voyageur dans tous les domaines. La coherence est totale : partout le voyage justifie un allegement.",
              axe5_frequence: "Pour la mission du khalifa, le voyage est un etat de la mission. Le khalifa est parfois en deplacement — il parcourt la terre pour accomplir sa mission. Le voyage n'annule pas la mission mais en modifie les conditions. L'exemption du jeune pour le voyageur montre que la mission divine est realiste : elle ne demande pas l'impossible a celui qui est en deplacement. Le khalifa voyageur rattrape plus tard ce qu'il n'a pas pu faire en route."
            }
          }
        }
      },
      // edd pos=24
      {
        word_key: "edd", position: 24, sense_chosen: "nombre",
        analysis_axes: {
          sense_chosen: "nombre",
          concept_chosen: "Denombrement/Calcul",
          concepts: {
            "Denombrement/Calcul": {
              status: "retenu",
              senses: ["nombre", "compte", "calcul", "denombrement", "quantite comptee"],
              proof_ctx: "Le nom fa-iddatun est un nom nominatif indefini singulier de la racine '-d-d. Le Lane's donne : compter, denombrer, calculer, enumerer. La idda est le nombre, le compte, la quantite denombree. La particule fa- marque la consequence : ALORS un nombre (de jours). L'indefini (iddatun) marque que le nombre n'est pas fixe — c'est un nombre egal au nombre de jours manques. Le concept de denombrement est un concept mathematique et juridique — il s'agit de compter exactement pour rattraper exactement.",
              axe1_verset: "Le mot fa-iddatun pose la solution pour le malade et le voyageur : un nombre d'autres jours. Le champ lexical (jours, autres, completer, nombre) montre que le denombrement est au coeur du rattrapage. Le verset ne dit pas « jeunez plus tard » de maniere vague — il dit « un nombre de jours d'autres periodes », ce qui implique un comptage precis. La phrase est elliptique (fa-iddatun min ayyamin ukhara = alors un nombre d'autres jours) — le verbe « qu'il jeune » est sous-entendu.",
              axe2_voisins: "Le verset 2:184 contenait la meme expression « fa-iddatun min ayyamin ukhara ». Le verset 2:185 la repete. La repetition confirme la regle du rattrapage : le malade et le voyageur rattrapent les jours manques dans d'autres periodes. La coherence entre les deux versets est totale — les memes mots sont utilises pour les memes regles.",
              axe3_sourate: "La racine '-d-d apparait dans la sourate al-Baqarah en 2:80 (« des jours comptes »), 2:184, 2:185 (iddatun, le nombre de jours de rattrapage), et 2:185 (al-iddata, le nombre a completer). La sourate utilise le denombrement dans des contextes differents : les jours comptes des chatiments et les jours comptes du jeune. Le comptage est un outil de precision legislative.",
              axe4_coherence: "La racine '-d-d apparait environ 57 fois dans le Coran. En 72:28, « Il a denombre toute chose en nombre ». En 14:34, « si vous comptiez les bienfaits de Dieu, vous ne les denombreriez pas ». Le Coran utilise le denombrement comme un attribut divin (Dieu compte tout) et comme une obligation humaine (compter les jours de rattrapage). Le denombrement est precision et justice — compter exactement pour rendre exactement.",
              axe5_frequence: "Pour la mission du khalifa, le denombrement est la precision de la mission. Le khalifa ne fait pas les choses approximativement — il compte, il calcule, il est precis. Le rattrapage du jeune exige un comptage exact : chaque jour manque doit etre rattrape. La precision du denombrement reflete la justice divine : rien n'est oublie, rien n'est perdu, tout est compte. Le khalifa vit dans un univers de precision ou chaque acte est comptabilise."
            }
          }
        }
      },
      // ywm pos=26
      {
        word_key: "ywm", position: 26, sense_chosen: "jours",
        analysis_axes: {
          sense_chosen: "jours",
          concept_chosen: "Temps/Periode",
          concepts: {
            "Temps/Periode": {
              status: "retenu",
              senses: ["jour", "journee", "periode", "temps", "epoque"],
              proof_ctx: "Le nom ayyamin est un nom genitif indefini pluriel de la racine y-w-m. Le Lane's donne : jour, journee, periode de temps, epoque. Le yawm est l'unite de temps fondamentale — la journee du lever au coucher du soleil. Le pluriel ayyam designe les jours comme unites de rattrapage — le malade et le voyageur rattrapent jour pour jour. L'indefini (ayyamin) marque que les jours ne sont pas specifies — ce sont des jours quelconques en dehors de Ramadan. Le concept de temps periodique est concret et mesurable.",
              axe1_verset: "Le mot ayyamin est l'unite de mesure du rattrapage. Le champ lexical (nombre, autres, completer) montre que les jours sont les briques du rattrapage — on rattrape en jours, pas en heures ni en semaines. Le verset est precis : un nombre DE JOURS d'autres (periodes). Les jours sont la monnaie du jeune — chaque jour manque vaut un jour de rattrapage. La precision temporelle empeche l'approximation et l'injustice.",
              axe2_voisins: "Le verset 2:184 mentionnait « des jours comptes » (ayyaman ma'dudatin) pour la duree du jeune. Le verset 2:185 mentionne « des jours autres » (ayyamin ukhara) pour le rattrapage. Les jours sont utilises differemment dans les deux versets : en 184, ils sont l'objet du jeune ; en 185, ils sont l'unite du rattrapage. La coherence temporelle est maintenue dans les deux usages.",
              axe3_sourate: "La racine y-w-m est parmi les plus frequentes de la sourate al-Baqarah. En 2:8, « le dernier jour ». En 2:48, « un jour ou nulle ame ne sera compensee ». En 2:184, « des jours comptes ». En 2:185, les jours de rattrapage. La sourate utilise le jour comme unite temporelle a toutes les echelles — le jour quotidien, le jour eschatologique, le jour du jeune.",
              axe4_coherence: "La racine y-w-m apparait environ 475 fois dans le Coran. C'est l'une des racines les plus frequentes du texte sacre. Le Coran structure le temps en jours — le jour de la resurrection (yawm al-qiyama), le jour du jugement (yawm al-din), les jours du jeune, les jours de la creation. Le jour est l'unite fondamentale du temps coranique, aussi bien pour la legislation que pour l'eschatologie.",
              axe5_frequence: "Pour la mission du khalifa, les jours sont le cadre quotidien de la mission. Le khalifa vit jour par jour — chaque journee est une unite de la mission. Le rattrapage en jours montre que le temps perdu peut etre recupere — la mission n'est pas perdue si un jour est manque, il peut etre rattrape. La vie du khalifa est un comptage de jours — chaque jour vecu dans l'obeissance rapproche de l'accomplissement de la mission."
            }
          }
        }
      },
      // axr pos=27
      {
        word_key: "axr", position: 27, sense_chosen: "autres",
        analysis_axes: {
          sense_chosen: "autres",
          concept_chosen: "Posteriorite/Retard",
          concepts: {
            "Posteriorite/Retard": {
              status: "retenu",
              senses: ["autre", "posterieur", "dernier", "ce qui vient apres", "restant"],
              proof_ctx: "Le nom ukhara est un nom feminin pluriel de la racine a-kh-r. Le Lane's donne : autre, posterieur, dernier, ce qui vient apres, ce qui reste. Le akhar est ce qui n'est pas le meme — l'autre, le different, le posterieur. Le feminin pluriel (ukhara) s'accorde avec ayyam (jours) — des jours autres, c'est-a-dire des jours qui ne sont pas dans le mois de Ramadan. Le concept de posteriorite implique un decalage temporel — les jours de rattrapage viennent APRES le mois de Ramadan.",
              axe1_verset: "Le mot ukhara qualifie les jours de rattrapage — des jours AUTRES que ceux du Ramadan. Le champ lexical (nombre, jours, completer) montre que l'alterite est temporelle — les jours de rattrapage sont dans une autre periode. Le mot cree une distinction entre le temps du jeune (Ramadan) et le temps du rattrapage (apres Ramadan). La flexibilite du rattrapage est dans cette alterite — les jours ne sont pas fixes, ils sont simplement « autres ».",
              axe2_voisins: "Le verset 2:184 contenait la meme expression « min ayyamin ukhara ». La repetition confirme que les jours de rattrapage sont dans une autre periode que Ramadan. Le verset 2:185 ne change pas la regle — il la confirme. La coherence entre les deux versets montre que la legislation est stable et coherente.",
              axe3_sourate: "La racine a-kh-r est tres frequente dans la sourate al-Baqarah. En 2:8, « le jour dernier (al-akhir) ». En 2:86, « la vie derniere ». En 2:102, « ils n'ont rien dans l'autre monde ». En 2:185, les jours autres. La sourate utilise a-kh-r pour l'eschatologie (le jour dernier) et pour la legislation (les jours de rattrapage). L'alterite est a la fois temporelle (les jours autres) et ontologique (le monde autre).",
              axe4_coherence: "La racine a-kh-r apparait environ 250 fois dans le Coran. Le Coran structure la realite en deux — le monde present et l'autre monde, les jours du Ramadan et les autres jours. La dualite est un procede fondamental de la pensee coranique : chaque chose a son autre, chaque temps a son autre temps. Le rattrapage en « jours autres » est une application concrete de cette structure duale.",
              axe5_frequence: "Pour la mission du khalifa, l'alterite temporelle montre que la mission n'est pas figee dans un seul temps. Le khalifa peut rattraper, compenser, reporter — la mission est souple et s'adapte aux circonstances. Les jours autres sont des jours de seconde chance — le khalifa qui a manque son obligation peut la rattraper plus tard. La posteriorite n'est pas un echec mais une adaptation de la mission au temps reel de la vie humaine."
            }
          }
        }
      },
      // rwd pos=28
      {
        word_key: "rwd", position: 28, sense_chosen: "vouloir",
        analysis_axes: {
          sense_chosen: "vouloir",
          concept_chosen: "Mouvement/Recherche",
          concepts: {
            "Mouvement/Recherche": {
              status: "retenu",
              senses: ["vouloir", "chercher", "desirer", "avoir l'intention", "rechercher"],
              proof_ctx: "Le verbe yuridu est un inaccompli 3MS de la forme IV de la racine r-w-d. Le Lane's donne : aller et venir, chercher, vouloir, desirer, avoir l'intention. La forme IV (arada/yuridu) marque l'intention deliberee — c'est un acte de volonte, pas un souhait passif. Le concept de mouvement dans la racine (r-w-d = aller et venir, chercher) montre que la volonte est un mouvement vers un but — vouloir c'est se diriger vers ce qu'on cherche. Quand le sujet est Dieu, la volonte est un decret — ce que Dieu veut se realise necessairement.",
              axe1_verset: "Le verbe yuridu ouvre la troisieme partie du verset — la justification theologique : « Dieu veut pour vous la facilite ». Le champ lexical (Dieu, facilite, difficulte) montre que la volonte divine est le fondement de toute la legislation du jeune. L'inaccompli marque une volonte permanente et continue — Dieu veut toujours la facilite, pas seulement dans ce contexte. La phrase « yuridu allahu bikumu al-yusra wa la yuridu bikumu al-'usra » est l'un des enonces theologiques les plus importants du Coran — il pose la facilite comme volonte divine fondamentale.",
              axe2_voisins: "Le verset 2:185 utilise yuridu deux fois — une fois positivement (Il veut la facilite) et une fois negativement (Il ne veut pas la difficulte). L'antithese est un procede rhetorique puissant — elle renforce l'affirmation par la negation de son contraire. Les versets 2:183-185 construisent une sequence ou l'obligation (le jeune) est temperee par la facilite (les exemptions) et justifiee par la volonte divine (Dieu veut la facilite).",
              axe3_sourate: "La racine r-w-d apparait dans la sourate al-Baqarah en plusieurs occurrences. En 2:26, « que veut Dieu par cette parabole ? ». En 2:185, « Dieu veut pour vous la facilite ». En 2:253, « si Dieu avait voulu ». La sourate montre que la volonte divine est le moteur de toute la legislation — les regles existent parce que Dieu le veut, et Dieu veut la facilite pour ses creatures.",
              axe4_coherence: "La racine r-w-d apparait environ 139 fois dans le Coran. En 4:26-28, « Dieu veut vous eclairer, Dieu veut alleger vos charges, l'homme a ete cree faible ». En 5:6, « Dieu ne veut pas vous mettre en difficulte mais vous purifier ». Le Coran repete le theme de la volonte divine de facilite — chaque legislation est accompagnee d'une justification qui rattache l'obligation a la bienveillance divine. La volonte de facilite est un principe transversal.",
              axe5_frequence: "Pour la mission du khalifa, la volonte divine de facilite est le cadre moral de la mission. Le khalifa ne rend pas les choses difficiles — il facilite, il allege, il simplifie. La volonte divine de facilite est un modele pour le khalifa : comme Dieu veut la facilite pour ses creatures, le khalifa veut la facilite pour sa communaute. Le khalifa qui complique inutilement les choses trahit la volonte divine. La facilite n'est pas le laxisme — c'est la justice qui prend en compte la fragilite humaine."
            }
          }
        }
      },
      // alh pos=29
      {
        word_key: "alh", position: 29, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "la divinite", "celui qui est adore", "le Seigneur", "l'Etre supreme"],
              proof_ctx: "Le nom allahu est un nom nominatif defini de la racine a-l-h. Le Lane's donne : Dieu, la divinite, celui qui est adore, l'Etre supreme vers lequel on se tourne. Le nom Allah est le nom propre de Dieu en arabe — il designe l'Etre unique et absolu. L'article al- est integre au nom et en fait un nom propre exclusif — il n'y a qu'un seul Allah. Le concept de divinite est le concept central du Coran — tout tourne autour de Dieu, de sa volonte, de ses attributs et de ses commandements.",
              axe1_verset: "Le mot allahu est le sujet de la volonte divine : « Dieu veut pour vous la facilite ». Le champ lexical (vouloir, facilite, difficulte, completer, glorifier, guider) montre que Dieu est l'agent de tout le verset — Il descend le Coran, Il veut la facilite, Il guide, Il est glorifie. Le verset est theocentrique : tout part de Dieu et tout revient a Dieu. La mention de Dieu comme sujet de yuridu (veut) fait de la facilite legislative un attribut divin.",
              axe2_voisins: "Le verset 2:183 ne mentionnait pas Dieu explicitement (passif kutiba). Le verset 2:185 nomme Dieu deux fois — comme sujet de la volonte (yuridu allahu) et comme objet de la glorification (wa-litukabbiroo allaha). Le passage du passif (Dieu absent grammaticalement) a l'actif (Dieu present comme sujet) montre que le verset 2:185 est le point culminant theologique de la section sur le jeune.",
              axe3_sourate: "La racine a-l-h et le nom Allah sont omnipresents dans la sourate al-Baqarah. En 2:163, « votre Dieu est un Dieu unique ». En 2:186, « quand Mes serviteurs t'interrogent sur Moi, Je suis proche ». Le verset 2:185 est enchasse entre la mention de la volonte divine (185) et la proximite divine (186). La sourate construit une image de Dieu a la fois legislateur (Il prescrit), bienveillant (Il veut la facilite) et proche (Il est pres de Ses serviteurs).",
              axe4_coherence: "Le nom Allah apparait environ 2699 fois dans le Coran. C'est le mot le plus frequent du texte sacre. Le Coran est fondamentalement un discours sur Dieu — ses attributs, ses actes, ses commandements, sa relation avec les creatures. En 2:185, Dieu est presente comme celui qui veut la facilite — un attribut de misericorde qui tempere la rigueur de la loi. Le Coran equilibre constamment la rigueur legislative et la misericorde divine.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandataire de la mission. Le khalifa n'agit pas pour lui-meme — il agit pour Dieu, au nom de Dieu, selon la volonte de Dieu. La mention de Dieu dans le verset du jeune rappelle que le jeune n'est pas un acte humain autonome mais un acte d'obeissance a Dieu. Le khalifa qui jeune obeit a Dieu, et Dieu en retour veut la facilite pour lui. La relation est bilaterale : le khalifa obeit, Dieu facilite."
            }
          }
        }
      },
      // ysr pos=31
      {
        word_key: "ysr", position: 31, sense_chosen: "facilite",
        analysis_axes: {
          sense_chosen: "facilite",
          concept_chosen: "Facilite/Aisance",
          concepts: {
            "Facilite/Aisance": {
              status: "retenu",
              senses: ["facilite", "aisance", "abondance", "ce qui est facile", "ce qui est accessible"],
              proof_ctx: "Le nom al-yusra est un nom accusatif defini singulier de la racine y-s-r. Le Lane's donne : etre facile, etre aise, abondance, richesse, ce qui est accessible et a portee de main. Le yusr est l'oppose du 'usr (difficulte) — il designe tout ce qui est facile, accessible, a portee. L'article al- definit la facilite comme un concept absolu — LA facilite, pas une facilite parmi d'autres. Le concept de facilite est un concept existentiel — il s'agit de la facilite de la vie, de l'allegement des charges, de l'accessibilite des obligations.",
              axe1_verset: "Le mot al-yusra est l'objet de la volonte divine : Dieu veut la facilite pour les croyants. Le champ lexical (vouloir, Dieu, difficulte) montre que la facilite est l'objectif declare de la legislation. Le verset pose un principe fondamental : la legislation divine vise la facilite, pas la difficulte. L'article al- fait de la facilite un principe absolu — ce n'est pas une facilite ponctuelle mais LA facilite comme principe directeur de toute la loi divine.",
              axe2_voisins: "Le verset 2:184 offrait une alternative au jeune (nourrir un pauvre). Le verset 2:185 justifie les exemptions par la volonte divine de facilite. La sequence montre que la facilite n'est pas un accident de la legislation mais son principe fondateur. Chaque exemption, chaque alternative, chaque allegement est une manifestation de ce principe : Dieu veut la facilite.",
              axe3_sourate: "La racine y-s-r apparait dans la sourate al-Baqarah en 2:185 et en 2:280 (« si le debiteur est en difficulte, alors un delai jusqu'a l'aisance »). La sourate utilise la facilite dans la legislation du jeune (2:185) et dans la legislation financiere (2:280). Le principe de facilite traverse tous les domaines legislatifs — cultuel et economique.",
              axe4_coherence: "La racine y-s-r apparait environ 39 fois dans le Coran. En 94:5-6, « avec la difficulte il y a une facilite, oui avec la difficulte il y a une facilite ». En 92:7, « Nous lui faciliterons la voie facile ». Le Coran repete que la facilite accompagne la difficulte — la difficulte n'est jamais seule, elle est toujours suivie ou accompagnee de la facilite. Le verset 2:185 est l'application legislative de ce principe : le jeune est difficile, mais Dieu veut la facilite.",
              axe5_frequence: "Pour la mission du khalifa, la facilite est le style de la mission. Le khalifa facilite la vie des gens — il ne complique pas les choses, il ne surcharge pas les obligations, il cherche l'aisance et l'accessibilite. La volonte divine de facilite est un modele pour la gouvernance du khalifa : une legislation juste mais accessible, des obligations reelles mais proportionnees, une discipline exigeante mais humaine. Le khalifa qui rend les choses difficiles agit contre la volonte divine."
            }
          }
        }
      },
      // rwd pos=33 (same root as pos=28, second occurrence)
      {
        word_key: "rwd", position: 33, sense_chosen: "vouloir",
        analysis_axes: {
          sense_chosen: "vouloir",
          concept_chosen: "Mouvement/Recherche",
          concepts: {
            "Mouvement/Recherche": {
              status: "retenu",
              senses: ["vouloir", "chercher", "desirer", "avoir l'intention", "rechercher"],
              proof_ctx: "Le verbe yuridu est un inaccompli 3MS de la forme IV de la racine r-w-d. Le Lane's donne : aller et venir, chercher, vouloir, desirer, avoir l'intention. La forme IV (arada/yuridu) marque l'intention deliberee — c'est un acte de volonte, pas un souhait passif. Le concept de mouvement dans la racine (r-w-d = aller et venir, chercher) montre que la volonte est un mouvement vers un but — vouloir c'est se diriger vers ce qu'on cherche. Quand le sujet est Dieu, la volonte est un decret — ce que Dieu veut se realise necessairement.",
              axe1_verset: "Le verbe yuridu en deuxieme occurrence est negatif : « et Il ne veut PAS pour vous la difficulte ». Le champ lexical (Dieu, facilite, difficulte) montre que la double mention de yuridu cree une antithese — Il veut la facilite / Il ne veut pas la difficulte. La negation (la yuridu) renforce l'affirmation — ce n'est pas seulement que Dieu veut la facilite, c'est qu'Il rejette activement la difficulte. Le demi-verset est un principe theologique majeur exprime par l'antithese.",
              axe2_voisins: "La repetition de yuridu dans le meme verset cree un parallele antithetique typique du style coranique. Le verset 2:185 est un concentre de rhetoric coranique : repetitions (shahru x2, huda x3, yuridu x2, allah x2), antitheses (facilite/difficulte), finalites (pour que vous completiez, glorifiiez, soyez reconnaissants). Les versets voisins (183-187) ne contiennent pas de telles antitheses — elles sont concentrees en 2:185.",
              axe3_sourate: "La racine r-w-d apparait dans la sourate al-Baqarah avec le sujet divin en plusieurs endroits. La volonte divine est un theme recurrent de la sourate — Dieu veut, Dieu ne veut pas, Dieu decide. La double mention en 2:185 est le point culminant de ce theme dans la section du jeune.",
              axe4_coherence: "La racine r-w-d apparait environ 139 fois dans le Coran. L'expression « la yuridu bikum al-'usr » (Il ne veut pas la difficulte pour vous) est unique dans le Coran — elle n'apparait qu'ici. Cette unicite en fait un enonce theologique majeur. Le Coran affirme ailleurs que Dieu veut la facilite, mais c'est ici qu'Il nie le plus explicitement la volonte de difficulte.",
              axe5_frequence: "Pour la mission du khalifa, le rejet divin de la difficulte est un principe de gouvernance. Le khalifa ne cherche pas a rendre la vie difficile — il rejette la difficulte inutile comme Dieu la rejette. La negation active (la yuridu = Il ne veut pas) montre que la difficulte n'est pas un objectif de la legislation divine. Le khalifa qui impose des difficultes inutiles agit contre la volonte divine explicite."
            }
          }
        }
      },
      // esr pos=35
      {
        word_key: "esr", position: 35, sense_chosen: "difficulte",
        analysis_axes: {
          sense_chosen: "difficulte",
          concept_chosen: "Difficulte/Gene",
          concepts: {
            "Difficulte/Gene": {
              status: "retenu",
              senses: ["difficulte", "gene", "contrainte", "ce qui est penible", "etroitesse"],
              proof_ctx: "Le nom al-'usra est un nom accusatif defini singulier de la racine '-s-r. Le Lane's donne : etre difficile, etre gene, contrainte, etroitesse, ce qui est penible et dur. Le 'usr est l'oppose du yusr (facilite) — il designe tout ce qui est penible, contraint, etroit. L'article al- definit la difficulte comme un concept absolu — LA difficulte, pas une difficulte ponctuelle. Le concept de difficulte est un concept existentiel — il s'agit de la gene de la vie, de la surcharge des obligations, de l'inaccessibilite des commandements.",
              axe1_verset: "Le mot al-'usra est l'objet du rejet divin : Dieu ne veut PAS la difficulte pour les croyants. Le champ lexical (vouloir, Dieu, facilite) montre que la difficulte est explicitement rejetee par la volonte divine. Le verset pose la difficulte comme l'antithese de la facilite — les deux forment un couple indissociable qui definit l'intention divine. L'article al- fait de la difficulte un concept absolu rejete — ce n'est pas une difficulte particuliere mais LE principe de difficulte qui est refuse.",
              axe2_voisins: "Le verset 2:184 offrait des alternatives pour eviter la difficulte. Le verset 2:185 nomme explicitement la difficulte pour la rejeter. La sequence montre une progression : d'abord les solutions concretes (alternatives, exemptions), puis la justification theologique (Dieu rejette la difficulte). La legislation du jeune est construite pour eviter la gene, et cette construction est fondee sur la volonte divine.",
              axe3_sourate: "La racine '-s-r apparait dans la sourate al-Baqarah en 2:185 (la difficulte rejetee) et en 2:280 (le debiteur en difficulte). La sourate montre que la difficulte est une realite humaine reconnue par la legislation divine — elle n'est pas ignoree mais prise en compte et allegee. En 2:185, la difficulte est rejetee comme objectif ; en 2:280, la difficulte du debiteur est traitee par un delai.",
              axe4_coherence: "La racine '-s-r apparait environ 12 fois dans le Coran. En 94:5-6, « avec la difficulte il y a une facilite ». En 65:7, « Dieu n'impose a aucune ame que ce qu'Il lui a donne, Dieu fera suivre la difficulte de facilite ». Le Coran promet que la difficulte est toujours suivie de facilite — la difficulte est temporaire, la facilite est le but. Le verset 2:185 est l'expression legislative de cette promesse.",
              axe5_frequence: "Pour la mission du khalifa, la difficulte est l'obstacle a la mission, pas son objectif. Le khalifa rencontre des difficultes mais ne les recherche pas — il les surmonte et les allege pour les autres. La difficulte rejetee par Dieu est un modele pour le khalifa : la bonne gouvernance ne rend pas les choses difficiles, elle les facilite. Le khalifa qui impose des difficultes inutiles va contre la volonte divine et compromet sa mission."
            }
          }
        }
      },
      // kml pos=36
      {
        word_key: "kml", position: 36, sense_chosen: "completer",
        analysis_axes: {
          sense_chosen: "completer",
          concept_chosen: "Completude/Perfection",
          concepts: {
            "Completude/Perfection": {
              status: "retenu",
              senses: ["completer", "parfaire", "achever", "mener a terme", "accomplir pleinement"],
              proof_ctx: "Le verbe wa-litukmiloo est un subjonctif 2MP de la forme IV de la racine k-m-l. Le Lane's donne : etre complet, parfaire, achever, mener a terme, ne rien laisser de manquant. La forme IV (akmala) intensifie l'achevement — completer pleinement, sans manque. La conjonction wa-li- introduit une finalite — POUR QUE vous completiez. Le concept de completude est un concept de perfection — il s'agit de ne rien laisser d'inacheve, de mener le nombre de jours a son terme. La completude est l'antithese de l'abandon — le croyant ne laisse pas son jeune inacheve.",
              axe1_verset: "Le verbe wa-litukmiloo ouvre la quatrieme et derniere partie du verset — les finalites. Le champ lexical (nombre, glorifier, guider, reconnaissants) montre que l'achevement du nombre est la premiere des trois finalites du jeune. Le verset construit un triple objectif : completer le nombre, glorifier Dieu, etre reconnaissant. L'achevement est le premier pas — avant de glorifier et de remercier, il faut d'abord accomplir pleinement l'obligation.",
              axe2_voisins: "Le verset 2:184 mentionnait des « jours comptes ». Le verset 2:185 ordonne de « completer le nombre ». La sequence montre que les jours comptes (184) doivent etre menes a leur terme (185). La legislation ne se contente pas de poser l'obligation — elle exige son accomplissement complet. Le verbe litukmiloo ferme la boucle ouverte par ayyaman ma'dudatin.",
              axe3_sourate: "La racine k-m-l n'apparait qu'ici dans la sourate al-Baqarah. C'est un hapax de la sourate — l'achevement du jeune est mentionne une seule fois car une seule mention suffit pour poser l'obligation de completude. La rarete du mot renforce son importance — completer est un commandement unique et decisif.",
              axe4_coherence: "La racine k-m-l apparait environ 5 fois dans le Coran. En 5:3, « aujourd'hui J'ai complete pour vous votre religion ». En 2:185, « pour que vous completiez le nombre ». Le Coran utilise k-m-l pour les achevement majeurs — la completion de la religion et la completion du jeune. La completude est un attribut divin (Dieu complete la religion) et une obligation humaine (le croyant complete le nombre de jours).",
              axe5_frequence: "Pour la mission du khalifa, la completude est l'exigence de la mission. Le khalifa ne laisse pas les choses inachevees — il complete, il acheve, il mene a terme. Le jeune complet est un symbole de la mission accomplie — le khalifa qui complete ses trente jours de jeune a montre qu'il peut mener une tache a son terme. L'inachevement est un echec de la mission ; la completude est la marque du khalifa accompli."
            }
          }
        }
      },
      // edd pos=37 (same root as pos=24, second occurrence)
      {
        word_key: "edd", position: 37, sense_chosen: "nombre",
        analysis_axes: {
          sense_chosen: "nombre",
          concept_chosen: "Denombrement/Calcul",
          concepts: {
            "Denombrement/Calcul": {
              status: "retenu",
              senses: ["nombre", "compte", "calcul", "denombrement", "quantite comptee"],
              proof_ctx: "Le nom al-'iddata est un nom accusatif defini singulier de la racine '-d-d. Le Lane's donne : compter, denombrer, calculer, enumerer. L'article al- definit le nombre — LE nombre prescrit de jours de jeune. Le concept est le meme qu'en pos=24 (iddatun), mais ici il est defini par l'article al- : c'est le nombre total de jours de Ramadan qu'il faut completer. L'accusatif marque que le nombre est l'objet de l'action de completer (wa-litukmiloo al-iddata).",
              axe1_verset: "Le mot al-'iddata est l'objet direct de litukmiloo — « completez LE nombre ». Le champ lexical (completer, glorifier, guider) montre que le nombre est le premier objectif a atteindre avant les objectifs spirituels. La premiere occurrence (iddatun pos=24) etait le nombre de jours de rattrapage ; cette occurrence (al-iddata pos=37) est le nombre total de jours de jeune. La premiere est indefinie (un nombre), la seconde est definie (LE nombre) — passage du particulier au general.",
              axe2_voisins: "Le verset 2:184 mentionnait « des jours comptes (ma'dudat) ». Le verset 2:185 passe du comptage (iddatun) a l'achevement du nombre (al-iddata). La sequence montre une progression : compter les jours (184) → rattraper un nombre (185a) → completer LE nombre (185b). Le denombrement est le fil conducteur de la legislation du jeune.",
              axe3_sourate: "La racine '-d-d apparait dans la sourate al-Baqarah en 2:80, 2:184, 2:185 (deux fois). La sourate utilise le denombrement pour le chatiment (2:80, « des jours comptes ») et pour le jeune (2:184-185). Le comptage est un outil de precision qui s'applique aussi bien a la punition qu'a l'obligation cultuelle.",
              axe4_coherence: "La racine '-d-d apparait environ 57 fois dans le Coran. En 18:22, « mon Seigneur connait mieux leur nombre ». En 19:94, « Il les a denombres et comptes un par un ». Le Coran montre que Dieu est le compteur ultime — Il connait le nombre exact de toute chose. Le croyant qui complete le nombre de jours de jeune imite la precision divine.",
              axe5_frequence: "Pour la mission du khalifa, le nombre a completer est la mesure de la mission. Le khalifa ne fait pas les choses a moitie — il complete le nombre requis. La precision du denombrement reflete la rigueur de la mission : chaque jour compte, chaque acte est comptabilise. Le khalifa vit dans un univers de precision divine ou rien n'est approximatif."
            }
          }
        }
      },
      // kbr pos=38
      {
        word_key: "kbr", position: 38, sense_chosen: "glorifier",
        analysis_axes: {
          sense_chosen: "glorifier",
          concept_chosen: "Grandeur/Importance",
          concepts: {
            "Grandeur/Importance": {
              status: "retenu",
              senses: ["glorifier", "magnifier", "proclamer la grandeur", "dire Allahou Akbar", "exalter"],
              proof_ctx: "Le verbe wa-litukabbiroo est un subjonctif 2MP de la forme II de la racine k-b-r. Le Lane's donne : etre grand, grandir, devenir important. La forme II (kabbara) est declarative et intensive — proclamer grand, declarer la grandeur avec emphase. Le takbir est l'acte de dire « Allahou Akbar » (Dieu est le plus grand). La conjonction wa-li- introduit la deuxieme finalite du jeune — POUR QUE vous proclamiez la grandeur de Dieu. Le concept de grandeur est un concept comparatif et absolu — Dieu est plus grand que tout, et le croyant le proclame.",
              axe1_verset: "Le verbe wa-litukabbiroo est la deuxieme finalite du verset apres l'achevement du nombre. Le champ lexical (completer, Dieu, guider, reconnaissants) montre que la glorification est une reponse a la guidance divine : vous glorifiez Dieu POUR vous avoir guides. La finalite n'est pas seulement d'accomplir une obligation (completer le nombre) mais de transformer cette obligation en acte d'adoration (glorifier Dieu). Le jeune culmine dans la glorification — le takbir de fin de Ramadan est l'aboutissement du mois.",
              axe2_voisins: "Le verset 2:185 passe de l'obligation concrete (jeuner) aux finalites spirituelles (glorifier, etre reconnaissant). Les versets 2:183-184 etaient purement legislatifs. Le verset 2:185 ajoute la dimension theologique — le jeune n'est pas une fin en soi mais un moyen de glorifier Dieu. La glorification est le pont entre la pratique (le jeune) et la spiritualite (la reconnaissance de la grandeur divine).",
              axe3_sourate: "La racine k-b-r apparait dans la sourate al-Baqarah en 2:185 (litukabbiroo) et en 2:219 (kabir, grand, a propos du peche du vin). La sourate utilise k-b-r pour la grandeur de Dieu (glorification) et pour la gravite du peche (grand peche). La grandeur a donc deux faces : la grandeur divine a proclamer et la gravite du mal a eviter.",
              axe4_coherence: "La racine k-b-r apparait environ 161 fois dans le Coran. En 17:111, « et proclame Sa grandeur avec eclat (wa-kabbirhu takbiran) ». En 74:3, « et ton Seigneur, proclame Sa grandeur ». En 22:37, « pour que vous proclamiez la grandeur de Dieu pour vous avoir guides ». Le verset 22:37 est presque identique a 2:185 — la glorification pour la guidance. La formule est reprise dans le contexte du sacrifice des animaux (22:37) et du jeune (2:185), montrant que chaque acte cultuel culmine dans le takbir.",
              axe5_frequence: "Pour la mission du khalifa, la glorification est l'acte de reconnaissance de la hierarchie cosmique. Le khalifa proclame que Dieu est le plus grand — il reconnait que sa propre grandeur est relative et derivee. Le takbir de fin de Ramadan est l'acte par lequel le khalifa remet sa mission dans son contexte cosmique : il a jeune, il a complete le nombre, et maintenant il proclame que Dieu est plus grand que tout cela. La glorification empeche l'orgueil — le khalifa ne s'attribue pas le merite du jeune mais le remet a Dieu."
            }
          }
        }
      },
      // alh pos=39 (same root as pos=29, second occurrence)
      {
        word_key: "alh", position: 39, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "la divinite", "celui qui est adore", "le Seigneur", "l'Etre supreme"],
              proof_ctx: "Le nom allaha est un nom accusatif defini de la racine a-l-h. Le Lane's donne : Dieu, la divinite, celui qui est adore, l'Etre supreme vers lequel on se tourne. Le nom Allah est le nom propre de Dieu en arabe — il designe l'Etre unique et absolu. L'accusatif marque que Dieu est l'objet de la glorification (litukabbiroo allaha) — on glorifie DIEU, c'est Lui qu'on proclame grand. Le concept de divinite est ici l'objet de l'adoration — Dieu est celui vers qui la glorification est dirigee.",
              axe1_verset: "Le mot allaha est l'objet direct de la glorification : « glorifiez DIEU ». Le champ lexical (glorifier, guider, reconnaissants) montre que Dieu est a la fois l'objet de la glorification et la cause de la guidance. La premiere occurrence (allahu pos=29) etait le sujet de la volonte ; cette occurrence (allaha pos=39) est l'objet de la glorification. Dieu passe de sujet actif (Il veut) a objet d'adoration (glorifiez-Le) — les deux roles se completent dans le verset.",
              axe2_voisins: "La double mention de Dieu dans le verset 2:185 reflete la structure theocentrique du passage. Les versets 183-184 ne mentionnaient pas Dieu par son nom. Le verset 185 le nomme deux fois pour ancrer la legislation du jeune dans la volonte et la grandeur divines. Le verset 2:186 continuera avec « quand Mes serviteurs t'interrogent sur Moi » — Dieu parle a la premiere personne, montrant Sa proximite.",
              axe3_sourate: "Le nom Allah est omnipresent dans la sourate al-Baqarah. La double mention dans un meme verset souligne l'importance theologique de ce verset particulier. La sourate al-Baqarah est la sourate de la legislation — et cette legislation est toujours rattachee a Dieu comme source et destinataire.",
              axe4_coherence: "Le nom Allah apparait environ 2699 fois dans le Coran. La repetition du nom dans un meme verset est un procede de renforcement — Dieu est mentionne comme sujet et comme objet dans le meme verset, montrant que tout le verset tourne autour de Lui. Le Coran est fondamentalement un discours sur Dieu et vers Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la double mention de Dieu montre que la mission a sa source en Dieu (Il veut) et sa finalite en Dieu (glorifiez-Le). Le khalifa vit entre la volonte divine et la glorification divine — il recoit l'ordre et il repond par l'adoration. La mission du khalifa est un circuit complet : de Dieu vers le khalifa (volonte) et du khalifa vers Dieu (glorification). Le khalifa est le pont entre la volonte divine et sa realisation sur terre."
            }
          }
        }
      },
      // hdy pos=42 (same root as pos=7 and pos=11, third occurrence)
      {
        word_key: "hdy", position: 42, sense_chosen: "guider",
        analysis_axes: {
          sense_chosen: "guider",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guidance", "direction", "voie droite", "mener au but", "guidage"],
              proof_ctx: "Le verbe hadakum est un accompli 3MS de la racine h-d-y avec pronom suffixe 2MP. Le Lane's donne : guider, mener, diriger vers le bon chemin. Le verbe est a l'accompli — Dieu VOUS A guides, c'est un fait accompli et irreversible. Le pronom suffixe -kum (vous) montre que la guidance est personnelle et directe — Dieu vous a guides, vous specifiquement. Le concept de guidance ici est un acte accompli, pas un attribut — c'est l'acte de guider qui est mentionne, pas la guidance comme concept abstrait.",
              axe1_verset: "Le verbe hadakum est la raison de la glorification : « glorifiez Dieu POUR vous avoir guides ». Le champ lexical (glorifier, Dieu, reconnaissants) montre que la guidance accomplie est la cause de la gratitude et de la glorification. La triple occurrence de h-d-y dans le verset (hudan pos=7, al-huda pos=11, hadakum pos=42) cree un crescendo : le Coran est guidance (attribut) → il contient des preuves de LA guidance (source) → Dieu VOUS A guides (acte accompli). La guidance passe du concept a l'acte personnel.",
              axe2_voisins: "Le verset 2:185 contient trois occurrences de h-d-y. Le verset 2:186 continuera par « Je suis proche, Je reponds a l'appel ». La sequence montre que la guidance (185) mene a la proximite divine (186). Celui qui est guide par le Coran et qui glorifie Dieu est recompense par la proximite divine — Dieu repond a son appel. La guidance est le chemin vers la proximite.",
              axe3_sourate: "La racine h-d-y est la racine thematique de la sourate al-Baqarah. De 2:2 (guidance pour les muttaqin) a 2:185 (Dieu vous a guides), la sourate developpe le concept de guidance sur plus de 180 versets. Le verset 2:185 est le point culminant de ce developpement — la guidance est a la fois l'attribut du Coran, la source des preuves, et l'acte accompli de Dieu envers les croyants.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. L'expression « 'ala ma hadakum » (pour vous avoir guides) apparait en 2:185 et en 22:37 — dans les deux cas comme justification de la glorification. Le Coran lie la glorification a la guidance : on glorifie Dieu PARCE QU'Il a guide. La guidance est le bienfait divin qui justifie la reponse humaine de glorification et de gratitude.",
              axe5_frequence: "Pour la mission du khalifa, la guidance accomplie montre que la mission a ete preparee par Dieu. Le khalifa n'est pas seul — il a ete guide avant meme de commencer sa mission. La guidance est un fait accompli (hadakum, a l'accompli) qui fonde la mission sur un acte divin prealable. Le khalifa glorifie Dieu pour l'avoir guide — sa mission est une reponse a la guidance divine, pas une initiative humaine autonome."
            }
          }
        }
      },
      // shkr pos=44
      {
        word_key: "shkr", position: 44, sense_chosen: "etre reconnaissant",
        analysis_axes: {
          sense_chosen: "etre reconnaissant",
          concept_chosen: "Gratitude/Reconnaissance",
          concepts: {
            "Gratitude/Reconnaissance": {
              status: "retenu",
              senses: ["remercier", "etre reconnaissant", "gratitude", "rendre graces", "apprecier le bienfait"],
              proof_ctx: "Le verbe tashkuruna est un inaccompli 2MP de la racine sh-k-r. Le Lane's donne : remercier, etre reconnaissant, retribuer le bienfait, apprecier ce qu'on a recu. Le shukr est la reconnaissance du bienfait recu — le shakir est celui qui reconnait que le bien qu'il a recu vient d'un autre et qui en exprime sa gratitude. L'inaccompli marque un etat continu — vous serez reconnaissants de maniere permanente, pas ponctuelle. La construction « wa-la'allakum tashkuruna » (et peut-etre serez-vous reconnaissants) exprime l'espoir — le « peut-etre » montre que la gratitude n'est pas automatique mais souhaitee.",
              axe1_verset: "Le verbe tashkuruna ferme le verset comme la troisieme et derniere finalite : completer le nombre → glorifier Dieu → etre reconnaissant. Le champ lexical (completer, glorifier, Dieu, guider) montre que la gratitude est l'aboutissement de tout le verset — la descente du Coran, le jeune, la facilite, l'achevement, la glorification, tout converge vers la gratitude. Le « peut-etre » (la'alla) montre que la gratitude n'est pas une certitude mais un espoir — Dieu espere que les croyants seront reconnaissants, mais Il ne le force pas.",
              axe2_voisins: "Le verset 2:185 se termine par la gratitude. Le verset 2:186 commencera par la proximite divine (« Je suis proche »). La sequence montre que la gratitude ouvre la porte de la proximite divine — celui qui est reconnaissant se rapproche de Dieu, et Dieu se rapproche de lui. La gratitude est le pont entre la legislation (2:185) et la spiritualite (2:186).",
              axe3_sourate: "La racine sh-k-r apparait dans la sourate al-Baqarah en 2:52 (« peut-etre serez-vous reconnaissants »), 2:56 (idem), 2:152 (« remerciez-Moi et ne soyez pas ingrats »), 2:158 (« Dieu est reconnaissant »), 2:185 (« peut-etre serez-vous reconnaissants »). La sourate repete la formule « la'allakum tashkuruna » comme un refrain — elle revient apres chaque bienfait divin pour rappeler que la reponse attendue est la gratitude.",
              axe4_coherence: "La racine sh-k-r apparait environ 75 fois dans le Coran. En 14:7, « si vous etes reconnaissants, Je vous augmenterai ». En 31:12, « remercie Dieu ; et quiconque remercie, remercie pour lui-meme ». Le Coran fait de la gratitude un acte qui profite d'abord a celui qui l'exprime. La gratitude n'est pas un paiement envers Dieu — c'est un acte qui enrichit celui qui l'exprime en l'ouvrant a davantage de bienfaits.",
              axe5_frequence: "Pour la mission du khalifa, la gratitude est la finalite de la mission. Le khalifa ne cherche pas le pouvoir ou la gloire — il cherche a etre reconnaissant pour la guidance recue. La gratitude est le sommet de la hierarchie spirituelle du verset : completer (discipline), glorifier (adoration), etre reconnaissant (transformation interieure). Le khalifa reconnaissant est le khalifa accompli — il a recu la guidance, il a accompli ses obligations, il a glorifie Dieu, et maintenant il est transforme par la gratitude."
            },
            "Retribution": {
              status: "probable",
              senses: ["retribuer", "recompenser", "rendre la pareille", "payer en retour"],
              proof_ctx: "Le sens de retribution est un sens profond de la racine sh-k-r — le Lane's indique que le shukr peut signifier retribuer un bienfait par un autre bienfait. Le shakir retribue en reconnaissant le bienfait et en agissant en consequence. Mais le contexte du verset vise la gratitude interieure (reconnaissance morale) plutot que la retribution exterieure (recompense materielle). La distinction philosophique est que la gratitude est un etat interieur de reconnaissance, tandis que la retribution est un acte exterieur de compensation. Le verset vise la transformation interieure (etre reconnaissant) pas la compensation exterieure (retribuer)."
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

  const verseIds = [192];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 185 ===\n');
  await processVerse(185);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V185 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
