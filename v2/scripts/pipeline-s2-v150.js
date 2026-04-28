const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 150
// verse_id=157, analysis_id=516
// "Et d'ou que tu sortes, tourne ton visage vers la Mosquee
//  sacree, et ou que vous soyez, tournez vos visages dans
//  sa direction, afin que les gens n'aient pas d'argument
//  contre vous — sauf ceux qui sont injustes — ne les
//  craignez pas, mais craignez-Moi, afin que J'acheve Mon
//  bienfait sur vous, et peut-etre serez-vous guides."
// 3e rappel qibla + finalite (bienfait + guidance)
// =====================================================

const verseData = {
  150: {
    verse_id: 157,
    analysis_id: 516,
    translation_arab: "Et d'ou que tu sortes, tourne ton visage vers la Mosquee sacree. Et ou que vous soyez, tournez vos visages dans sa direction, afin que les gens n'aient pas d'argument contre vous — sauf ceux d'entre eux qui sont injustes — ne les craignez pas, mais craignez-Moi, afin que J'acheve Mon bienfait sur vous, et peut-etre serez-vous guides.",
    full_translation: "Et d'ou que tu sortes, tourne ton visage du cote de la Mosquee sacree. Et ou que vous soyez, tournez-y vos visages afin que les gens n'aient pas d'argument contre vous, sauf ceux d'entre eux qui prevariquent. Ne les craignez donc pas, mais craignez-Moi pour que Je paracheve Mon bienfait a votre egard, et que vous soyez guides.",
    translation_explanation: `§DEMARCHE§
Le verset est le troisieme rappel de la qibla dans cette sequence (apres 2:144 et 2:149) mais il ajoute une dimension nouvelle : la finalite. Les deux premiers rappels se concentraient sur l'ordre de tourner le visage vers la Mosquee sacree. Ce troisieme rappel reprend le meme ordre mais ajoute trois consequences : supprimer l'argument des adversaires, achever le bienfait divin, et atteindre la guidance. Le verbe **kharajta** est un accompli 2MS de la racine x-r-j. Le Lane's donne : sortir, passer de l'interieur a l'exterieur. L'accompli avec la 2e personne est ici dans une structure conditionnelle (haythu-ma kharajta = d'ou que tu sortes) — il ne designe pas un acte passe mais une generalisation : quel que soit l'endroit d'ou tu sors. Le verbe **walli** est un imperatif 2MS de la racine w-l-y a la forme II. Le Lane's donne : tourner, diriger vers. L'imperatif marque un ordre direct et immediat. La forme II (tawalliya) intensifie : tourner activement, pas juste se tourner. Le nom **wajhaka** est un nom accusatif singulier de la racine w-j-h avec pronom suffixe 2MS. Le Lane's donne : visage, face, ce qui est tourne vers l'autre. Tourner son visage c'est orienter tout son etre — le visage est la partie la plus noble et la plus identifiante du corps. Le nom **al-masjidi** est au genitif de la racine s-j-d. Le Lane's donne : lieu de prosternation, mosquee. Le masjid est le lieu ou l'on se prosterne — le nom tire son sens de l'acte de prosternation (sujud). L'adjectif **al-harami** est au genitif de la racine h-r-m. Le Lane's donne : sacre, interdit, inviolable. La Mosquee sacree est celle de La Mecque — le mot haram marque son caractere inviolable et mis a part. Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne : etre. Dans la structure « haythu-ma kuntum » (ou que vous soyez), kuntum ne designe pas un passe mais une generalisation spatiale — quel que soit le lieu ou vous etes. Le verbe **fawallU** est un imperatif 2MP de la racine w-l-y a la forme II avec le fa de consequence. Le Lane's donne : tourner. Le fa lie cet imperatif au precedent — la consequence est que tous doivent tourner, pas seulement le Prophete. Le passage du singulier (tourne ton visage) au pluriel (tournez vos visages) montre que l'ordre concerne d'abord le Prophete puis la communaute entiere. Le nom **wujuhakum** est un pluriel de la racine w-j-h avec pronom 2MP. Le Lane's donne : visages. Le pluriel des visages correspond au pluriel des destinataires — chaque croyant tourne son propre visage. Le nom **shatrahu** est de la racine sh-t-r avec pronom 3MS. Le Lane's donne : cote, direction, moitie. Le shatr est le cote vers lequel on se tourne — c'est la direction, pas la moitie ici. Le pronom « hu » renvoie a la Mosquee sacree. Le verbe **yakuna** est un inaccompli apocopé 3MS de la racine k-w-n. Le Lane's donne : etre. Avec la negation « li-alla » (afin que ne pas), il forme la finalite negative : afin que ce ne soit pas le cas que les gens aient un argument. Le nom **an-nasi** est de la racine n-w-s (ou n-s-y selon les lectures). Le Lane's donne : gens, etres humains. Les gens sont l'ensemble de l'humanite — ici ceux qui pourraient contester. Le nom **hujjatun** est un nom feminin singulier indefini de la racine h-j-j. Le Lane's donne : argument, preuve, ce par quoi on triomphe dans une dispute. La hujja est l'argument qu'on oppose dans un debat. L'indefini marque « un quelconque argument » — meme le moindre argument est supprime par l'obeissance a l'ordre de la qibla. Le pronom relatif **alladhina** introduit l'exception : sauf ceux qui sont injustes — ceux-la continueront de contester malgre tout. Le verbe **zalamu** est un accompli 3MP de la racine z-l-m. Le Lane's donne : etre injuste, placer quelque chose hors de sa place. Les injustes sont ceux qui mettent les choses hors de leur place — ils contestent meme quand il n'y a plus de raison de contester. Le mot **minhum** est une preposition composee de la racine m-n-h. « D'entre eux » precise que ces injustes sont une partie du groupe plus large. Le verbe **takhshawhum** est un inaccompli 2MP de la racine kh-sh-y avec pronom suffixe 3MP. Le Lane's donne : craindre, avoir peur de. La khashya est une crainte melee de respect — craindre quelqu'un c'est le redouter. Le verbe est precede de la negation « fa-la » — ne les craignez pas. Le verbe **ikhshawni** est un imperatif 2MP de la racine kh-sh-y avec pronom suffixe 1S (Moi). Le Lane's donne : craindre. L'imperatif avec le pronom de la premiere personne cree un contraste direct : ne craignez pas eux, mais craignez-Moi (Dieu). Le transfert de la crainte est un acte de liberation — craindre Dieu seul libere de la crainte des hommes. Le verbe **li-utimma** est un subjonctif 1S de la racine a-t-m avec le lam de finalite. Le Lane's donne : achever, completer, mener a terme. L'achevement est le fait de ne rien laisser d'inacheve — Dieu acheve Son bienfait en donnant la qibla definitive. Le nom **ni'mati** est un nom feminin singulier de la racine n-'-m avec pronom suffixe 1S. Le Lane's donne : bienfait, faveur, grace. Le bienfait est l'acte d'accorder quelque chose de bon — ici c'est le bienfait de Dieu (Mon bienfait) qui est acheve par l'etablissement de la qibla. Le verbe **tahtaduna** est un inaccompli 2MP de la racine h-d-y. Le Lane's donne : etre guide, trouver le bon chemin. La forme VIII (ihtada) indique la reflexivite : se guider soi-meme, etre guide. La guidance est la finalite ultime — tout l'ordre de la qibla vise a ce que les croyants soient guides.

§JUSTIFICATION§
**sortes** — Le sens retenu est « sortir ». Le verbe kharajta designe le mouvement de l'interieur vers l'exterieur. L'alternative « expulser » est ecartee car le verbe est a la forme I intransitive — le Prophete sort lui-meme, il n'est pas expulse.

**tourne** — Le sens retenu est « tourner/diriger vers ». Le verbe walli est un imperatif de la forme II de w-l-y. L'alternative « proteger/allier » est ecartee car la forme II + wajh (visage) donne specifiquement le sens de tourner le visage vers.

**ton visage** — Le sens retenu est « visage ». Le mot wajhaka designe la face. L'alternative « direction/maniere » est ecartee car le pronom possessif 2MS (ka) montre qu'il s'agit du visage physique du Prophete.

**Mosquee** — Le sens retenu est « lieu de prosternation ». Le mot al-masjid est le lieu ou l'on se prosterne. L'alternative « se prosterner » comme verbe est ecartee car le mot est un nom de lieu.

**sacree** — Le sens retenu est « sacre/inviolable ». Le mot al-haram qualifie la Mosquee de La Mecque. L'alternative « interdire » comme verbe est ecartee car le mot est un adjectif qualificatif.

**soyez** — Le sens retenu est « etre ». Le verbe kuntum est un verbe incomplet qui porte la generalisation spatiale. L'alternative « lieu » est ecartee car le mot est un verbe, pas un nom.

**tournez** — Le sens retenu est « tourner ». Le verbe fawallU est le meme verbe qu'au singulier, au pluriel. La repetition confirme que l'ordre s'etend a toute la communaute.

**vos visages** — Le sens retenu est « visages ». Le mot wujuhakum est le pluriel de wajh avec pronom 2MP. Le pluriel correspond aux destinataires pluriels.

**direction** — Le sens retenu est « cote/direction ». Le mot shatrahu designe le cote vers lequel on se tourne. L'alternative « moitie » est ecartee car le contexte est la direction, pas la division.

**soit** — Le sens retenu est « etre ». Le verbe yakuna est dans une structure de finalite negative (li-alla yakuna = afin que ne soit pas).

**gens** — Le sens retenu est « gens/etres humains ». Le mot an-nasi designe l'ensemble des gens. L'alternative « oublier » est ecartee car le mot est un nom, pas un verbe.

**argument** — Le sens retenu est « argument/preuve ». Le mot hujjatun designe ce qu'on oppose dans un debat. L'alternative « pelerinage » est ecartee car le contexte est la dispute, pas le voyage sacre.

**sont injustes** — Le sens retenu est « etre injuste ». Le verbe zalamu designe l'acte de mettre les choses hors de leur place. L'alternative « obscurite » est ecartee car le verbe est a l'accompli 3MP, pas un nom.

**d'entre eux** — Le sens retenu est « parmi eux ». Le mot minhum est une preposition partitive. Il indique que les injustes sont une partie d'un ensemble plus large.

**ne les craignez pas** — Le sens retenu est « craindre ». Le verbe takhshawhum designe la crainte. La negation « la » transforme le sens en interdiction de craindre les gens.

**craignez-Moi** — Le sens retenu est « craindre ». Le verbe ikhshawni est le meme verbe mais avec le pronom divin. Le contraste est le coeur du verset : ne craignez pas eux, craignez-Moi.

**J'acheve** — Le sens retenu est « achever/completer ». Le verbe li-utimma designe l'achevement. L'alternative « parfaire » est ecartee car « achever » est plus courant et plus precis — l'idee est de mener a terme, pas d'atteindre la perfection.

**Mon bienfait** — Le sens retenu est « bienfait ». Le mot ni'mati designe la faveur divine. L'alternative « douceur » est ecartee car le contexte est le bienfait actif de Dieu, pas un etat passif de confort.

**guides** — Le sens retenu est « etre guide ». Le verbe tahtaduna designe la guidance. L'alternative « cadeau » est ecartee car le verbe est un verbe d'orientation, pas un nom de don.

§CRITIQUE§
Les traductions courantes rendent ce verset de facon quasi identique. La seule nuance notable concerne le mot « shatrahu » traduit ici par « dans sa direction ». Hamidullah donne « tournez-y vos visages » avec un « y » qui renvoie a la Mosquee sacree. Notre traduction explicite le mot shatr (cote/direction) pour rester fidele a la racine. Le mot « prevariquent » utilise par certains traducteurs est remplace ici par « sont injustes » qui est plus courant et plus proche de la racine z-l-m (placer hors de sa place).`,
    segments: [
      { fr: "et d'ou que", phon: "wa-haythu-ma", arabic: "\u0648\u064e\u0645\u0650\u0646\u0652 \u062d\u064e\u064a\u0652\u062b\u064f", is_particle: true, position: 0 },
      { fr: "tu sortes", pos: "verbe", phon: "kharajta", arabic: "\u062e\u064e\u0631\u064e\u062c\u0652\u062a\u064e", word_key: "xrj", is_particle: false, sense_retenu: "sortir", position: 1 },
      { fr: "tourne", pos: "verbe", phon: "walli", arabic: "\u0641\u064e\u0648\u064e\u0644\u0651\u0650", word_key: "wly", is_particle: false, sense_retenu: "tourner", position: 2 },
      { fr: "ton visage", pos: "nom", phon: "wajhaka", arabic: "\u0648\u064e\u062c\u0652\u0647\u064e\u0643\u064e", word_key: "wjh", is_particle: false, sense_retenu: "visage", position: 3 },
      { fr: "la Mosquee", pos: "nom", phon: "al-masjidi", arabic: "\u0671\u0644\u0652\u0645\u064e\u0633\u0652\u062c\u0650\u062f\u0650", word_key: "sjd", is_particle: false, sense_retenu: "lieu de prosternation", position: 4 },
      { fr: "sacree", pos: "adjectif", phon: "al-harami", arabic: "\u0671\u0644\u0652\u062d\u064e\u0631\u064e\u0627\u0645\u0650", word_key: "hrm", is_particle: false, sense_retenu: "sacre", position: 5 },
      { fr: "et ou que", phon: "wa-haythu-ma", arabic: "\u0648\u064e\u062d\u064e\u064a\u0652\u062b\u064f \u0645\u064e\u0627", is_particle: true, position: 6 },
      { fr: "vous soyez", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064f\u0646\u062a\u064f\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 7 },
      { fr: "tournez", pos: "verbe", phon: "fawallU", arabic: "\u0641\u064e\u0648\u064e\u0644\u0651\u064f\u0648\u0627\u06df", word_key: "wly", is_particle: false, sense_retenu: "tourner", position: 8 },
      { fr: "vos visages", pos: "nom", phon: "wujuhakum", arabic: "\u0648\u064f\u062c\u064f\u0648\u0647\u064e\u0643\u064f\u0645\u0652", word_key: "wjh", is_particle: false, sense_retenu: "visage", position: 9 },
      { fr: "dans sa direction", pos: "nom", phon: "shatrahu", arabic: "\u0634\u064e\u0637\u0652\u0631\u064e\u0647\u064f", word_key: "shtr", is_particle: false, sense_retenu: "cote", position: 10 },
      { fr: "que soit", pos: "verbe", phon: "yakuna", arabic: "\u064a\u064e\u0643\u064f\u0648\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 11 },
      { fr: "les gens", pos: "nom", phon: "an-nasi", arabic: "\u0644\u0650\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 12 },
      { fr: "afin que ne pas", phon: "li-alla", arabic: "\u0644\u0650\u0626\u064e\u0644\u0651\u064e\u0627", is_particle: true, position: 13 },
      { fr: "un argument", pos: "nom", phon: "hujjatun", arabic: "\u062d\u064f\u062c\u0651\u064e\u0629\u064c", word_key: "hjj", is_particle: false, sense_retenu: "argument", position: 14 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", word_key: "dhyy", is_particle: true, position: 15 },
      { fr: "sont injustes", pos: "verbe", phon: "zalamu", arabic: "\u0638\u064e\u0644\u064e\u0645\u064f\u0648\u0627\u06df", word_key: "zlm", is_particle: false, sense_retenu: "etre injuste", position: 16 },
      { fr: "d'entre eux", phon: "minhum", arabic: "\u0645\u0650\u0646\u0652\u0647\u064f\u0645\u0652", word_key: "mnh", is_particle: true, position: 17 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 18 },
      { fr: "ne les craignez pas", pos: "verbe", phon: "takhshawhum", arabic: "\u0641\u064e\u0644\u064e\u0627 \u062a\u064e\u062e\u0652\u0634\u064e\u0648\u0652\u0647\u064f\u0645\u0652", word_key: "kshy", is_particle: false, sense_retenu: "craindre", position: 19 },
      { fr: "craignez-Moi", pos: "verbe", phon: "ikhshawni", arabic: "\u0648\u064e\u0671\u062e\u0652\u0634\u064e\u0648\u0652\u0646\u0650\u0649", word_key: "kshy", is_particle: false, sense_retenu: "craindre", position: 20 },
      { fr: "afin que J'acheve", pos: "verbe", phon: "li-utimma", arabic: "\u0648\u064e\u0644\u0650\u0623\u064f\u062a\u0650\u0645\u0651\u064e", word_key: "atm", is_particle: false, sense_retenu: "achever", position: 21 },
      { fr: "Mon bienfait", pos: "nom", phon: "ni'mati", arabic: "\u0646\u0650\u0639\u0652\u0645\u064e\u062a\u0650\u0649", word_key: "nem", is_particle: false, sense_retenu: "bienfait", position: 22 },
      { fr: "et peut-etre", phon: "wa-la'allakum", arabic: "\u0648\u064e\u0644\u064e\u0639\u064e\u0644\u0651\u064e\u0643\u064f\u0645\u0652", is_particle: true, position: 23 },
      { fr: "serez-vous guides", pos: "verbe", phon: "tahtaduna", arabic: "\u062a\u064e\u0647\u0652\u062a\u064e\u062f\u064f\u0648\u0646\u064e", word_key: "hdy", is_particle: false, sense_retenu: "etre guide", position: 24 }
    ],
    words: [
      // xrj pos=1
      {
        word_key: "xrj", position: 1, sense_chosen: "sortir",
        analysis_axes: {
          sense_chosen: "sortir",
          concept_chosen: "Sortie/Émergence",
          concepts: {
            "Sortie/Émergence": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "émerger", "produire"],
              proof_ctx: "Le verbe kharajta est un accompli 2MS de la racine x-r-j. Le Lane's donne : sortir, passer de l'interieur vers l'exterieur. Le mouvement de sortie est directionnel — on quitte un espace clos pour un espace ouvert. Ici la structure « haythu-ma kharajta » (d'ou que tu sortes) utilise l'accompli dans une proposition conditionnelle generalisant — quel que soit le lieu d'ou tu sors. Cette generalisation spatiale est essentielle : l'ordre de tourner le visage vers la Mosquee sacree ne depend pas de l'endroit ou le Prophete se trouve.",
              axe1_verset: "Le verbe kharajta ouvre le verset en posant la condition spatiale : d'ou que tu sortes. Le champ lexical du verset tourne autour de l'orientation (tourner, visage, direction, Mosquee sacree). La sortie est le prealable de l'orientation — avant de se tourner vers la qibla, il faut etre quelque part, avoir un point de depart. Le verset montre que le point de depart n'a pas d'importance — c'est la direction qui compte. Le mouvement de sortie est suivi immediatement par l'ordre de tourner, creant un enchainement : sortir puis se diriger.",
              axe2_voisins: "Le verset 149 commencait par la meme expression : « D'ou que tu sortes, tourne ton visage vers la Mosquee sacree ». Le verset 150 reprend cette ouverture mot pour mot avant d'ajouter la finalite. La repetition en 149 et 150 montre l'insistance divine sur cet ordre. Le verset 144 etait le premier rappel, 149 le deuxieme, 150 le troisieme — la sortie est le point de depart invariable de chaque rappel.",
              axe3_sourate: "La racine x-r-j apparait dans la sourate al-Baqarah dans differents contextes : en 2:61, Moussa fait sortir (sortie d'Egypte) ; en 2:167, les hypocrites voudraient qu'on les fasse sortir du Feu. En 2:150, la sortie est spatiale et conditionnelle — elle n'est pas une fuite mais un point de depart pour l'orientation. La sourate montre que la sortie peut etre une delivrance (2:61) ou un point de depart pour l'obeissance (2:150).",
              axe4_coherence: "La racine x-r-j apparait environ 183 fois dans le Coran. Le schema « haythu-ma kharajta » est specifique aux versets 149-150 de la sourate 2. La sortie est un des grands themes coraniques : sortir de l'ignorance vers la lumiere (2:257), sortir de la terre au Jour du Jugement (54:7). Ici la sortie est le prealable a l'orientation — elle montre que la guidance est accessible depuis n'importe quel point de depart.",
              axe5_frequence: "Pour la mission du khalifa, la sortie est le premier mouvement de la mission. Le khalifa doit quitter son confort, son lieu habituel, pour s'orienter vers Dieu. Le verset montre que le point de depart ne compte pas — seule la direction compte. La mission commence la ou on se trouve, quel que soit cet endroit. Sortir c'est accepter de quitter le familier pour se tourner vers le sacre."
            },
            "Tribut/Revenu": {
              status: "nul",
              senses: ["impôt", "revenu"],
              proof_ctx: "Le sens de revenu/impot est hors sujet — le verbe kharajta est un verbe intransitif de mouvement spatial (sortir), pas un nom designant un prelevement financier."
            }
          }
        }
      },
      // wly pos=2 (1ere occurrence : imperatif 2MS « tourne »)
      {
        word_key: "wly", position: 2, sense_chosen: "tourner",
        analysis_axes: {
          sense_chosen: "tourner",
          concept_chosen: "Proximité/Protection",
          concepts: {
            "Proximité/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allié"],
              proof_ctx: "Le verbe walli est un imperatif 2MS de la forme II de la racine w-l-y. Le Lane's donne : tourner (vers), diriger (vers), se rapprocher de. La racine w-l-y porte fondamentalement le sens de proximite — le wali est celui qui est proche. La forme II (tawalliya) avec wajh (visage) donne le sens specifique de « tourner son visage vers » — se rapprocher de la direction de la Mosquee sacree. L'imperatif marque un ordre divin direct et immediat. Tourner son visage vers c'est s'orienter vers, se rapprocher spirituellement de la qibla.",
              axe1_verset: "Le verbe walli est l'ordre central du verset — tourne ton visage. Le champ lexical (visage, Mosquee, sacree) montre que l'orientation physique est l'expression d'un rapprochement spirituel. Tourner le visage vers la Mosquee sacree c'est diriger tout son etre vers le lieu le plus proche de Dieu. Le verset construit un mouvement : sortir (kharajta) → tourner (walli) → direction (shatr). L'ordre est adresse au Prophete au singulier, montrant que le guide doit etre le premier a obeir.",
              axe2_voisins: "Le verset 144 contenait le meme imperatif « tourne ton visage vers la Mosquee sacree ». Le verset 149 le repetait. Le verset 150 le repete une troisieme fois. La triple repetition en six versets montre l'importance capitale de cet ordre. Chaque repetition ajoute une dimension : 144 pose l'ordre, 149 le confirme, 150 en donne la finalite (bienfait + guidance).",
              axe3_sourate: "La racine w-l-y est une des plus frequentes de la sourate al-Baqarah. En 2:107, Dieu est le wali (protecteur). En 2:120, les Gens du Livre ne seront satisfaits que si tu suis leur qibla. La sourate utilise w-l-y pour exprimer a la fois la proximite, la protection et l'orientation. Tourner le visage vers la qibla est un acte de rapprochement (wala') avec Dieu.",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. Le sens de « tourner vers » est specifique aux versets de la qibla (2:144, 149, 150). Dans le reste du Coran, w-l-y designe surtout la protection et l'alliance. Le Coran lie l'orientation physique (tourner) et la proximite spirituelle (etre proche de Dieu) par la meme racine.",
              axe5_frequence: "Pour la mission du khalifa, tourner le visage vers la Mosquee sacree est l'acte fondateur de l'orientation. Le khalifa doit s'orienter vers Dieu dans toutes ses actions — la qibla physique est le symbole de la qibla spirituelle. Tourner son visage c'est choisir sa direction de vie, son allegiance, sa loyaute. La mission commence par une orientation claire et definitive."
            },
            "Autorité": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est hors sujet — le verbe est a la forme II avec wajh et designe l'acte de tourner le visage vers une direction, pas l'exercice du pouvoir."
            }
          }
        }
      },
      // wjh pos=3 (1ere occurrence : singulier « ton visage »)
      {
        word_key: "wjh", position: 3, sense_chosen: "visage",
        analysis_axes: {
          sense_chosen: "visage",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le mot wajhaka est un nom accusatif singulier de la racine w-j-h avec pronom suffixe 2MS. Le Lane's donne : visage, face, ce qui est tourne vers l'autre. Le visage est la partie du corps qui fait face — il montre vers ou on regarde, il revele l'identite et l'intention. Ici « wajhaka » (ton visage) est adresse au Prophete en particulier. Le visage est au singulier car l'ordre est d'abord personnel — le Prophete tourne SON visage avant que les autres ne soient invites a faire de meme.",
              axe1_verset: "Le mot wajhaka est l'objet du verbe walli — c'est le visage qui est tourne. Le champ lexical (tourner, Mosquee, direction) montre que le visage est le vecteur de l'orientation. Tourner le visage ce n'est pas seulement tourner la tete — c'est diriger tout son etre vers la qibla. Le visage represente la personne entiere dans la culture semitique. Le verset utilise d'abord le singulier (ton visage) puis le pluriel (vos visages), montrant la progression du Prophete a la communaute.",
              axe2_voisins: "Le verset 144 disait « Nous voyons ton visage se tourner vers le ciel ». Le verset 149 repetait « tourne ton visage vers la Mosquee sacree ». Le verset 150 reprend la meme expression. Le visage du Prophete est le theme recurrent — c'est par son visage que se manifeste son desir d'obeir et son orientation vers Dieu.",
              axe3_sourate: "La racine w-j-h est presente dans les passages de la qibla (2:115, 2:144, 2:149-150) et dans le theme de la face de Dieu (2:115 « ou que vous vous tourniez, la est la face de Dieu »). La sourate lie le visage humain (qui se tourne) et la face divine (qui est partout). Tourner son visage vers la Mosquee sacree est une reponse humaine a l'omnipresence de la face divine.",
              axe4_coherence: "La racine w-j-h apparait environ 73 fois dans le Coran. Le visage designe tantot la face physique, tantot la direction, tantot la face de Dieu. En 6:79, Ibrahim dit « j'ai tourne mon visage vers Celui qui a cree les cieux et la terre ». Le Coran utilise le visage comme symbole de l'orientation totale de l'etre.",
              axe5_frequence: "Pour la mission du khalifa, le visage est ce qui revele l'orientation du coeur. Tourner son visage vers la Mosquee sacree c'est declarer publiquement sa direction de vie. Le khalifa ne peut pas regarder dans une direction et marcher dans une autre — le visage doit correspondre a la destination. Le visage est l'expression visible de la mission interieure."
            },
            "Sens isolé/Manière": {
              status: "nul",
              senses: ["manière"],
              proof_ctx: "Le sens de maniere est hors sujet — le pronom possessif 2MS (ka) montre qu'il s'agit du visage physique du Prophete, pas d'une maniere de faire."
            },
            "Sens isolé/Noble": {
              status: "nul",
              senses: ["noble"],
              proof_ctx: "Le sens de noble est hors sujet — le contexte est l'orientation physique du visage vers la qibla."
            }
          }
        }
      },
      // sjd pos=4
      {
        word_key: "sjd", position: 4, sense_chosen: "lieu de prosternation",
        analysis_axes: {
          sense_chosen: "lieu de prosternation",
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "obéir"],
              proof_ctx: "Le mot al-masjidi est un nom de lieu au genitif de la racine s-j-d. Le Lane's donne : lieu de prosternation, l'endroit ou l'on se prosterne. Le masjid tire son nom de l'acte de sujud (prosternation) — c'est le lieu defini par l'acte d'adoration qui s'y accomplit. L'article defini (al-) et l'adjectif al-haram (sacre) identifient specifiquement la Mosquee de La Mecque. La distinction avec le concept « lieu de prosternation » (nul) est que le concept retenu est la prosternation comme acte fondateur du lieu, pas le lieu en tant que tel.",
              axe1_verset: "Le mot al-masjidi est la destination de l'orientation — c'est vers la Mosquee sacree que le visage est tourne. Le champ lexical (tourner, visage, direction, sacre) construit un mouvement directionnel vers un point fixe. La Mosquee sacree est le centre — tout le verset rayonne a partir d'elle. L'ordre de tourner le visage vers la Mosquee est donne trois fois (2:144, 149, 150), ce qui en fait le centre de gravite de ce passage.",
              axe2_voisins: "Le verset 144 mentionnait la Mosquee sacree comme nouvelle qibla. Le verset 149 la repetait. Le verset 150 la mentionne une troisieme fois. Les versets 142-150 forment un bloc consacre au changement de qibla — la Mosquee sacree est le mot-cle qui structure ce bloc. Chaque repetition renforce l'autorite de l'ordre.",
              axe3_sourate: "La racine s-j-d est fondamentale dans la sourate al-Baqarah. En 2:34, les anges se prosternent devant Adam — c'est la premiere prosternation mentionnee. En 2:125, la Maison (Ka'ba) est designee comme lieu de priere. La sourate construit progressivement le lien entre la prosternation (acte), la Mosquee (lieu) et l'orientation (qibla). Le verset 150 est l'aboutissement de ce lien.",
              axe4_coherence: "La racine s-j-d apparait environ 92 fois dans le Coran. Le mot masjid (mosquee) apparait environ 28 fois. L'expression « al-masjid al-haram » (la Mosquee sacree) est specifique a la Ka'ba. En 17:1, la Mosquee sacree est le point de depart du voyage nocturne. Le Coran etablit la Mosquee sacree comme le centre de l'adoration, le point fixe autour duquel tourne toute orientation.",
              axe5_frequence: "Pour la mission du khalifa, la Mosquee sacree est le symbole de la mission commune. Tous les croyants se tournent vers le meme point — cette unite directionnelle est le fondement de l'unite communautaire. Le khalifa doit savoir ou il se tourne et pourquoi. La Mosquee sacree n'est pas un simple lieu geographique — c'est le signe de la mission partagee par toute l'humanite croyante."
            },
            "Lieu de prosternation": {
              status: "nul",
              senses: ["mosquée"],
              proof_ctx: "Le sens de mosquee comme simple lieu est englobé par le concept retenu — le masjid tire son sens de la prosternation (sujud). Le lieu n'a de valeur que par l'acte qui s'y accomplit."
            }
          }
        }
      },
      // hrm pos=5
      {
        word_key: "hrm", position: 5, sense_chosen: "sacre",
        analysis_axes: {
          sense_chosen: "sacre",
          concept_chosen: "Interdiction/Sacré",
          concepts: {
            "Interdiction/Sacré": {
              status: "retenu",
              senses: ["interdire", "sacré", "sanctuaire", "illicite", "priver", "respecter"],
              proof_ctx: "Le mot al-harami est un adjectif au genitif de la racine h-r-m. Le Lane's donne : sacre, interdit, inviolable. Le haram est ce qui est mis hors d'atteinte — l'interdiction cree la sacralite. La Mosquee sacree est sacree parce qu'elle est interdite a toute profanation. L'adjectif qualifie al-masjid — il ne s'agit pas de n'importe quelle mosquee mais de la Mosquee sacree de La Mecque. La sacralite de ce lieu est permanente et absolue — elle ne depend pas des circonstances.",
              axe1_verset: "Le mot al-harami qualifie la Mosquee — il precise que c'est la Mosquee sacree, celle de La Mecque. Le champ lexical (Mosquee, visage, tourner) montre que la sacralite de la destination donne son sens a l'orientation. On ne tourne pas son visage vers n'importe quel lieu mais vers un lieu sacre — un lieu mis a part, interdit a la profanation. La sacralite de la destination ennoblit l'acte de s'y tourner.",
              axe2_voisins: "Les versets 144 et 149 mentionnaient deja al-masjid al-haram. Le verset 150 reprend la meme expression pour la troisieme fois. La triple repetition de « Mosquee sacree » inscrit ce lieu comme le centre incontestable de l'orientation. Aucun autre lieu ne recoit cette insistance dans le passage.",
              axe3_sourate: "La racine h-r-m apparait frequemment dans la sourate al-Baqarah. En 2:194, les mois sacres et la Mosquee sacree. En 2:196, le pelerinage a la Mosquee sacree. En 2:217, combattre pres de la Mosquee sacree. La sourate tisse un reseau de lois autour du sacre — ce qui est haram est protege, et cette protection est une responsabilite de la communaute.",
              axe4_coherence: "La racine h-r-m apparait environ 83 fois dans le Coran. L'expression « al-masjid al-haram » apparait environ 15 fois. La sacralite de ce lieu est un des piliers de l'organisation spatiale coranique. En 5:2, « ne profanez pas les rites sacres de Dieu ». Le Coran construit un systeme ou le sacre est protege par l'interdit — la limite cree le respect.",
              axe5_frequence: "Pour la mission du khalifa, le sacre est ce qui est mis a part pour Dieu. Le khalifa doit respecter les limites divines (hudud) et reconnaitre la sacralite de ce que Dieu a declare sacre. La Mosquee sacree est le symbole de toutes les limites divines — la respecter c'est respecter l'ordre divin dans son ensemble. La mission du khalifa passe par le respect du sacre."
            },
            "Sens isolé/Épouse": {
              status: "nul",
              senses: ["épouse"],
              proof_ctx: "Le sens d'epouse est hors sujet — le mot al-haram est un adjectif qualifiant la Mosquee, pas un nom designant une personne."
            }
          }
        }
      },
      // kwn pos=7 (1ere occurrence : « vous soyez »)
      {
        word_key: "kwn", position: 7, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être (verbe incomplet)", "venir à l'existence"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister. Ici le verbe est incomplet — il sert de support grammatical dans la structure conditionnelle « haythu-ma kuntum » (ou que vous soyez). L'accompli dans cette structure ne designe pas un passe mais une generalisation spatiale — quel que soit le lieu ou vous etes presentement. Le verbe ne decrit pas une existence en soi mais situe les croyants dans l'espace pour poser la condition de l'orientation.",
              axe1_verset: "Le verbe kuntum pose la deuxieme condition spatiale du verset — apres « d'ou que tu sortes » (singulier), vient « ou que vous soyez » (pluriel). Le passage du singulier au pluriel est significatif : l'ordre de la qibla concerne d'abord le Prophete puis toute la communaute. Le champ lexical (tourner, visages, direction) montre que l'etre-quelque-part est le prealable de l'orientation — il faut etre quelque part pour se tourner vers la Mosquee sacree.",
              axe2_voisins: "Le verset 144 utilisait la meme expression « ou que vous soyez, tournez vos visages ». Le verset 149 ne reprenait que la partie adressee au Prophete (singulier). Le verset 150 combine les deux : singulier puis pluriel. La repetition montre que l'universalite de l'ordre est reaffirmee — ou que les croyants soient dans le monde, l'orientation reste la meme.",
              axe3_sourate: "La racine k-w-n est le verbe le plus frequent de la langue arabe. Dans la sourate al-Baqarah, il structure les descriptions d'etats et les injonctions conditionnelles. En 2:23, « si vous etes sinceres ». En 2:111, « si vous etes veridiques ». Le verbe sert de charniere logique — il pose la condition pour l'action qui suit.",
              axe4_coherence: "La racine k-w-n apparait environ 1390 fois dans le Coran. Le schema « haythu-ma kuntum » (ou que vous soyez) est recurrent — en 4:78, « ou que vous soyez, la mort vous atteindra ». En 2:148, « ou que vous soyez, Dieu vous rassemblera tous ». Le Coran utilise cette structure pour montrer l'universalite des lois divines — elles s'appliquent partout, sans exception geographique.",
              axe5_frequence: "Pour la mission du khalifa, etre quelque part est la condition de la mission. Le khalifa accomplit sa mission la ou il est — la mission n'est pas reservee a un lieu particulier. L'universalite de la condition (ou que vous soyez) montre que la mission est portative — elle accompagne le khalifa partout."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["être humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — le verbe kuntum est un verbe incomplet servant de support grammatical, pas un verbe d'etat moral."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste à ta place", "état condition", "motif raison", "devenir comme"],
              proof_ctx: "Le sens de lieu est distinct — kuntum est un verbe (etre), pas un nom de lieu (makan). Le contexte est la generalisation spatiale, pas la designation d'un endroit precis."
            }
          }
        }
      },
      // wly pos=8 (2e occurrence : imperatif 2MP « tournez »)
      {
        word_key: "wly", position: 8, sense_chosen: "tourner",
        analysis_axes: {
          sense_chosen: "tourner",
          concept_chosen: "Proximité/Protection",
          concepts: {
            "Proximité/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allié"],
              proof_ctx: "Le verbe fawallU est un imperatif 2MP de la forme II de la racine w-l-y avec le fa de consequence. Le Lane's donne : tourner (vers), diriger. C'est le meme verbe que walli (pos=2) mais au pluriel — l'ordre passe du Prophete (singulier) a la communaute (pluriel). Le fa initial marque la consequence — puisque le Prophete se tourne, les croyants doivent aussi se tourner. Le pluriel montre que l'orientation est un acte collectif, pas seulement individuel.",
              axe1_verset: "Le verbe fawallU est la version plurielle de l'ordre donne au Prophete en walli (pos=2). Le passage du singulier au pluriel structure le verset en deux parties : d'abord l'ordre au Prophete, puis l'ordre a la communaute. Le fa (alors) lie les deux parties — si le Prophete se tourne, les croyants doivent le suivre. Le champ lexical (visages au pluriel, direction) confirme que l'orientation est desormais collective.",
              axe2_voisins: "Le verset 144 contenait deja cette double structure singulier-pluriel. Le verset 150 la reprend pour la troisieme fois. La repetition du schema « tourne ton visage / tournez vos visages » montre que l'ordre individuel precede toujours l'ordre collectif — le guide agit avant que la communaute ne le suive.",
              axe3_sourate: "La racine w-l-y au pluriel apparait dans differents contextes de la sourate. En 2:257, « Dieu est le wali (protecteur) de ceux qui croient ». En 2:150, le pluriel fawallU lie la protection divine a l'orientation — se tourner vers la Mosquee sacree c'est se placer sous la protection de Dieu. La sourate construit un lien entre orientation et protection.",
              axe4_coherence: "Le schema imperatif singulier + imperatif pluriel est specifique aux versets de la qibla. Dans le reste du Coran, les ordres sont generalement donnes au pluriel directement. La progression singulier-pluriel des versets 144-150 montre une pedagogie divine : d'abord le guide, puis la communaute. Cette progression est unique dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, l'orientation collective est le prolongement de l'orientation individuelle. Le khalifa ne peut pas demander aux autres de se tourner vers Dieu s'il ne l'a pas fait lui-meme d'abord. Le fa (alors, en consequence) montre que l'orientation des autres decoule de la sienne. La mission est contagieuse — elle se transmet par l'exemple."
            },
            "Autorité": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est hors sujet — le verbe fawallU est un imperatif de la forme II avec wujuh (visages) et designe l'acte de tourner les visages vers la direction de la qibla."
            }
          }
        }
      },
      // wjh pos=9 (2e occurrence : pluriel « vos visages »)
      {
        word_key: "wjh", position: 9, sense_chosen: "visage",
        analysis_axes: {
          sense_chosen: "visage",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le mot wujuhakum est un nom pluriel accusatif de la racine w-j-h avec pronom suffixe 2MP. Le Lane's donne : visages, faces. Le pluriel des visages correspond au pluriel des destinataires — chaque croyant tourne son propre visage. Wujuh (pluriel) fait echo a wajhaka (singulier, pos=3) — le meme mot passe du singulier au pluriel. Cette repetition avec changement de nombre montre que l'orientation est a la fois personnelle et collective.",
              axe1_verset: "Le mot wujuhakum est l'objet du verbe fawallU — les croyants tournent leurs visages. Le pluriel des visages amplifie l'image : ce ne sont plus un seul visage mais tous les visages de la communaute qui se tournent vers la meme direction. Le champ lexical (tourner, direction) montre que l'orientation est unanime — tous les visages convergent vers le meme point. L'unanimite de la direction physique est le fondement de l'unite spirituelle.",
              axe2_voisins: "Le verset 144 contenait la meme expression « tournez vos visages dans sa direction ». Le verset 150 la reprend. La repetition des « visages » au pluriel montre l'importance de l'orientation collective. Le verset 148 disait « chaque communaute a sa direction » — le verset 150 montre que cette communaute a desormais une seule direction.",
              axe3_sourate: "La racine w-j-h au pluriel apparait dans les passages de la qibla (2:144, 150) et en 2:177 (« la piete n'est pas de tourner vos visages vers l'orient ou l'occident »). La sourate distingue l'orientation physique (qibla) de l'orientation morale (piete). Les deux sont necessaires mais la piete depasse la simple orientation physique.",
              axe4_coherence: "Le pluriel wujuh apparait environ 29 fois dans le Coran. En 3:106, « le Jour ou des visages seront blancs et d'autres noirs ». En 39:60, « les visages de ceux qui mentent seront noircis ». Le Coran utilise les visages au pluriel pour decrire l'etat de groupes entiers — l'orientation des visages revele l'orientation des coeurs.",
              axe5_frequence: "Pour la mission du khalifa, les visages tournes ensemble symbolisent l'unite de la mission. Tous les khalifas partagent la meme direction — la mission est une et les missionnaires sont multiples. Tourner ses visages ensemble c'est reconnaitre une autorite commune, un centre commun, une mission commune."
            },
            "Sens isolé/Manière": {
              status: "nul",
              senses: ["manière"],
              proof_ctx: "Le sens de maniere est hors sujet — le pronom possessif 2MP (kum) montre qu'il s'agit des visages physiques de la communaute."
            },
            "Sens isolé/Noble": {
              status: "nul",
              senses: ["noble"],
              proof_ctx: "Le sens de noble est hors sujet — le contexte est l'orientation collective des visages vers la qibla."
            }
          }
        }
      },
      // shtr pos=10
      {
        word_key: "shtr", position: 10, sense_chosen: "cote",
        analysis_axes: {
          sense_chosen: "cote",
          concept_chosen: "Direction/Orientation",
          concepts: {
            "Direction/Orientation": {
              status: "retenu",
              senses: ["se diriger vers", "côté"],
              proof_ctx: "Le mot shatrahu est un nom accusatif de la racine sh-t-r avec pronom suffixe 3MS. Le Lane's donne : cote, direction, moitie. Le shatr est le cote vers lequel on se tourne — la moitie de l'horizon qui fait face. Ici le pronom « hu » renvoie a la Mosquee sacree (al-masjid al-haram). La distinction avec le sens de « moitie » est que le contexte est l'orientation spatiale — les croyants se tournent vers le cote de la Mosquee sacree, pas vers sa moitie.",
              axe1_verset: "Le mot shatrahu precise la direction de l'orientation — les croyants tournent leurs visages vers le cote de la Mosquee sacree. Le champ lexical (tourner, visages) montre que le shatr est le complement directionnel de l'orientation. Sans le shatr, l'ordre serait incomplet — tourner vos visages, oui mais vers ou ? Le shatr repond a cette question : vers le cote de la Mosquee sacree. Le pronom « hu » cree un lien anaphorique avec al-masjid al-haram mentionne plus haut.",
              axe2_voisins: "Le verset 144 utilisait le meme mot shatrahu dans la meme position. Le verset 149 aussi. Le verset 150 reprend le meme mot pour la troisieme fois. La repetition du shatr montre que la direction est fixe et invariable — elle ne change pas selon les circonstances. Les trois versets forment un refrain : tourne ton visage / tournez vos visages vers le cote de la Mosquee sacree.",
              axe3_sourate: "La racine sh-t-r n'apparait dans la sourate al-Baqarah que dans les versets de la qibla (2:144, 149, 150). C'est un usage tres specifique — le mot shatr est reserve a la designation de la direction de la priere. Cette exclusivite montre que le shatr est un terme technique de l'orientation rituelle.",
              axe4_coherence: "La racine sh-t-r apparait rarement dans le Coran — elle est concentree dans les versets de la qibla. Le sens de « moitie » apparait en 73:20 (« la moitie de la nuit »). Le sens de « direction/cote » est specifique aux versets 2:144, 149, 150. Le Coran reserve ce mot pour l'orientation vers la qibla, ce qui en fait un terme presque liturgique.",
              axe5_frequence: "Pour la mission du khalifa, le shatr est la direction de la mission. Le khalifa doit savoir vers quel cote il se tourne — la direction doit etre claire, nette, invariable. Changer de direction sans raison divine est une trahison de la mission. Le shatr est fixe par Dieu, pas par les hommes."
            },
            "Division/Moitié": {
              status: "nul",
              senses: ["moitié", "couper en deux"],
              proof_ctx: "Le sens de moitie est hors sujet ici — le contexte est l'orientation vers la Mosquee sacree, pas la division d'un objet en deux parties egales."
            }
          }
        }
      },
      // kwn pos=11 (2e occurrence : « que soit »)
      {
        word_key: "kwn", position: 11, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être (verbe incomplet)", "venir à l'existence"],
              proof_ctx: "Le verbe yakuna est un inaccompli apocope 3MS de la racine k-w-n. Le Lane's donne : etre. Ici le verbe est dans la structure de finalite negative « li-alla yakuna li-n-nasi hujjatun » (afin que les gens n'aient pas d'argument). Le verbe incomplet sert de support : il porte la negation et la finalite. L'apocope est cause par la particule de negation « la » (li-alla = li-an-la). Le verbe ne decrit pas une existence en soi mais la possibilite d'un etat — l'existence d'un argument.",
              axe1_verset: "Le verbe yakuna introduit la premiere finalite du verset : supprimer l'argument des adversaires. Le champ lexical (gens, argument, injustes) montre que cette partie du verset traite de la contestation. Le verbe sert de charniere entre l'ordre (tournez vos visages) et la raison (afin que les gens n'aient pas d'argument). La structure est : ordre → finalite — l'obeissance a l'ordre atteint un objectif precis.",
              axe2_voisins: "Le verset 150 est le seul des trois versets de la qibla (144, 149, 150) a mentionner la finalite de l'ordre. Les versets 144 et 149 donnaient l'ordre sans l'expliquer. Le verset 150 complete en donnant les raisons : supprimer l'argument, achever le bienfait, guider. Le verbe yakuna ouvre cette section des raisons.",
              axe3_sourate: "La racine k-w-n dans des structures de finalite apparait regulierement dans la sourate. En 2:145, « si tu suivais leurs passions, tu serais des injustes ». En 2:150, le verbe pose la condition pour eviter l'argument des adversaires. La sourate utilise kwn pour structurer les alternatives : faire ceci pour que cela soit ou ne soit pas.",
              axe4_coherence: "Le schema « li-alla yakuna » (afin que ne soit pas) est une structure coranique de finalite negative. En 4:165, « afin que les gens n'aient pas d'argument contre Dieu apres les envoyes ». Le Coran montre que Dieu agit pour supprimer les pretextes — l'envoi des prophetes et l'etablissement de la qibla servent a lever toute excuse.",
              axe5_frequence: "Pour la mission du khalifa, l'etre ou le non-etre des arguments des adversaires depend de l'obeissance du khalifa. L'obeissance aux ordres divins supprime les pretextes des contestataires. Le khalifa qui obeit prive ses adversaires de toute raison valable de contester. La mission correctement accomplie est sa propre defense."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["être humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — yakuna est un verbe incomplet servant de support dans une proposition de finalite negative."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste à ta place", "état condition", "motif raison", "devenir comme"],
              proof_ctx: "Le sens de lieu est distinct — yakuna est un verbe (etre), pas un nom de lieu. Le contexte est la negation d'un etat (absence d'argument)."
            }
          }
        }
      },
      // nws pos=12
      {
        word_key: "nws", position: 12, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanité/Peuple",
          concepts: {
            "Humanité/Peuple": {
              status: "retenu",
              senses: ["gens", "êtres humains", "peuple"],
              proof_ctx: "Le mot an-nasi est un nom masculin pluriel au genitif de la racine n-w-s. Le Lane's donne : gens, etres humains, peuple. Les gens designent l'ensemble des etres humains — ici ceux qui pourraient opposer un argument. L'article defini (al-nas) designe les gens en general, pas un groupe specifique. La distinction avec le sens de « voir de loin » (nul) est evidente : le mot est un nom collectif, pas un verbe de perception.",
              axe1_verset: "Le mot an-nasi designe ceux qui pourraient avoir un argument contre les croyants. Le champ lexical (argument, injustes, craindre) montre que les gens sont les adversaires potentiels. Le verset distingue trois categories : les gens en general (qui perdent leur argument), les injustes (qui persistent dans la contestation), et Dieu (qui seul merite d'etre craint). Les gens sont le groupe le plus large — l'obeissance a la qibla supprime leur argument.",
              axe2_voisins: "Le verset 142 mentionnait « les imbeciles parmi les gens » qui contestent le changement de qibla. Le verset 143 disait « pour que vous soyez temoins contre les gens ». Le verset 150 ferme le passage en montrant que les gens n'ont plus d'argument. Les versets 142-150 tracent un arc : contestation des gens → temoignage contre les gens → suppression de l'argument des gens.",
              axe3_sourate: "Le mot al-nas est un des mots les plus frequents de la sourate al-Baqarah. En 2:8, « parmi les gens il y a ceux qui disent ». En 2:21, « o les gens, adorez votre Seigneur ». La sourate classe les gens en categories selon leur reaction a la verite. Le verset 150 montre que l'obeissance a la qibla prive les gens de pretexte.",
              axe4_coherence: "Le mot al-nas apparait environ 241 fois dans le Coran. En 4:165, « afin que les gens n'aient pas d'argument contre Dieu apres les envoyes ». Le schema « li-alla yakuna li-n-nasi hujja » est un refrain coranique — Dieu agit pour que les gens n'aient pas de pretexte. Le Coran montre que Dieu laisse les hommes sans excuse.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont le terrain de la mission. Le khalifa vit parmi les gens et sa mission concerne les gens. L'obeissance aux ordres divins prive les gens de pretexte pour contester — la meilleure defense de la mission est son execution correcte. Le khalifa n'a pas besoin de se justifier par des discours mais par ses actes d'obeissance."
            },
            "Perception/Visibilité": {
              status: "nul",
              senses: ["voir de loin", "être visible"],
              proof_ctx: "Le sens de perception est hors sujet — le mot an-nasi est un nom collectif designant l'ensemble des etres humains, pas un verbe de vision."
            },
            "Sens isolé/Oublier": {
              status: "nul",
              senses: ["oublier"],
              proof_ctx: "Le sens d'oublier est hors sujet — le mot est un nom collectif, pas un verbe d'oubli."
            },
            "Sens isolé/Être": {
              status: "nul",
              senses: ["être agité"],
              proof_ctx: "Le sens d'agitation est hors sujet — le mot designe les gens comme groupe, pas un etat d'agitation."
            }
          }
        }
      },
      // hjj pos=14
      {
        word_key: "hjj", position: 14, sense_chosen: "argument",
        analysis_axes: {
          sense_chosen: "argument",
          concept_chosen: "Pèlerinage/Preuve",
          concepts: {
            "Pèlerinage/Preuve": {
              status: "retenu",
              senses: ["pèlerinage", "argument", "preuve", "disputer"],
              proof_ctx: "Le mot hujjatun est un nom feminin singulier indefini de la racine h-j-j. Le Lane's donne : argument, preuve, ce par quoi on triomphe dans une dispute ; aussi pelerinage. La hujja est l'argument qu'on oppose pour convaincre ou vaincre dans un debat. Ici le contexte est la dispute — les gens cherchent un argument contre les croyants. L'indefini (hujjatun) marque « un quelconque argument » — meme le moindre pretexte est supprime par l'obeissance a l'ordre de la qibla. La distinction avec le pelerinage est que le contexte est le debat, pas le voyage sacre.",
              axe1_verset: "Le mot hujjatun est l'objet de la proposition de finalite : afin que les gens n'aient pas d'argument. Le champ lexical (gens, injustes, craindre) montre que le verset traite de la contestation et de la defense. La hujja est ce que les adversaires pourraient opposer — l'obeissance a la qibla la supprime. Le verset montre que l'obeissance est la meilleure defense contre la contestation.",
              axe2_voisins: "Le verset 142 montrait les gens contestant le changement de qibla (« qu'est-ce qui les a detournes de leur qibla ? »). Le verset 150 repond a cette contestation en montrant que l'obeissance a l'ordre divin supprime tout argument. Les versets 142-150 forment un arc de contestation-reponse : la question des adversaires trouve sa resolution dans l'obeissance.",
              axe3_sourate: "La racine h-j-j apparait dans la sourate al-Baqarah sous ses deux sens principaux. En 2:76, les juifs qui « disputent ». En 2:196-197, le pelerinage. Le verset 150 utilise le sens d'argument/preuve — la dispute intellectuelle. La sourate montre que la hujja peut etre une arme offensive (disputer) ou une arme defensive (avoir un argument).",
              axe4_coherence: "La racine h-j-j apparait environ 31 fois dans le Coran. En 6:149, « a Dieu appartient l'argument decisif ». En 4:165, « afin que les gens n'aient pas d'argument contre Dieu ». Le Coran montre que Dieu detient l'argument ultime et que Ses actes (envoi de prophetes, etablissement de la qibla) visent a supprimer les pretextes humains.",
              axe5_frequence: "Pour la mission du khalifa, la hujja est ce qui justifie ou invalide une position. Le khalifa qui obeit aux ordres divins supprime la hujja de ses adversaires. La mission correctement accomplie est invulnerable a la critique — elle parle d'elle-meme. Les adversaires ne peuvent contester que si le khalifa desobeit."
            }
          }
        }
      },
      // zlm pos=16
      {
        word_key: "zlm", position: 16, sense_chosen: "etre injuste",
        analysis_axes: {
          sense_chosen: "etre injuste",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["opprimer", "être injuste", "injustice", "oppresseur"],
              proof_ctx: "Le verbe zalamu est un accompli 3MP de la racine z-l-m. Le Lane's donne : etre injuste, placer quelque chose hors de sa place. L'injustice (zulm) est l'acte de mettre les choses la ou elles ne doivent pas etre. Ici « alladhina zalamu minhum » (ceux qui sont injustes parmi eux) designe un sous-groupe d'adversaires qui persistent dans la contestation malgre l'absence de tout argument valide. L'accompli marque que leur injustice est un fait etabli — ce sont des gens qui ont deja commis l'injustice.",
              axe1_verset: "Le verbe zalamu introduit l'exception : sauf ceux qui sont injustes. Le verset dit que l'obeissance a la qibla supprime l'argument des gens — SAUF ceux qui sont injustes. Ces derniers continueront de contester meme sans raison valable. Le champ lexical (argument, gens, craindre) montre que les injustes sont un sous-groupe irrecuperable — leur contestation n'est pas fondee sur la raison mais sur l'injustice deliberee.",
              axe2_voisins: "Le verset 145 avertissait : « si tu suivais leurs passions, tu serais parmi les injustes ». Le verset 150 montre que les injustes sont ceux qui persistent dans la contestation sans argument. Les versets 145-150 opposent l'obeissance (qui sauve de l'injustice) et la passion (qui mene a l'injustice). Les injustes sont ceux qui suivent leurs passions au lieu de la verite.",
              axe3_sourate: "La racine z-l-m est une des racines les plus frequentes de la sourate al-Baqarah. En 2:35, « vous seriez parmi les injustes ». En 2:51, « vous avez ete injustes ». En 2:124, « Mon engagement ne concerne pas les injustes ». La sourate trace une ligne nette entre les justes et les injustes — l'injustice est un choix qui exclut de l'alliance divine.",
              axe4_coherence: "La racine z-l-m apparait environ 289 fois dans le Coran. L'injustice est le contraire de la mise en place correcte (adl = justice). En 2:150, les injustes sont ceux qui mettent la contestation la ou devrait etre l'acceptation. Le Coran montre que l'injustice est un derangement de l'ordre — mettre les choses hors de leur place naturelle.",
              axe5_frequence: "Pour la mission du khalifa, l'injustice est le contraire de la mission. Le khalifa est charge de mettre chaque chose a sa place — c'est la definition meme de la justice (adl). Les injustes sont ceux qui s'opposent a cette mise en ordre. La mission du khalifa inclut de ne pas craindre les injustes mais de craindre Dieu seul."
            },
            "Obscurité/Ténèbres": {
              status: "nul",
              senses: ["obscurité", "ténèbres"],
              proof_ctx: "Le sens de tenebres est une extension metaphorique de z-l-m — les tenebres sont l'absence de lumiere comme l'injustice est l'absence de justice. Le contexte est l'acte d'etre injuste (verbe accompli 3MP), pas l'etat d'obscurite."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["se faire du tort"],
              proof_ctx: "Le sens de se faire du tort est un sous-cas de l'injustice — le contexte ici est l'injustice envers les autres (contester sans raison), pas envers soi-meme."
            }
          }
        }
      },
      // kshy pos=19 (1ere occurrence : « ne les craignez pas »)
      {
        word_key: "kshy", position: 19, sense_chosen: "craindre",
        analysis_axes: {
          sense_chosen: "craindre",
          concept_chosen: "Crainte",
          concepts: {
            "Crainte": {
              status: "retenu",
              senses: ["craindre"],
              proof_ctx: "Le verbe takhshawhum est un inaccompli 2MP de la racine kh-sh-y avec pronom suffixe 3MP. Le Lane's donne : craindre, avoir peur de, redouter. La khashya est une crainte melee de respect et de consideration — craindre quelqu'un c'est le prendre en compte dans ses decisions. Ici le verbe est precede de « fa-la » (alors ne... pas) — l'interdiction de craindre les gens. Le pronom suffixe « hum » renvoie aux injustes (alladhina zalamu). L'inaccompli marque que la crainte est un etat continu qu'on interdit de maintenir — cessez de les craindre.",
              axe1_verset: "Le verbe takhshawhum est la premiere partie de l'opposition centrale du verset : ne les craignez pas / craignez-Moi. Le champ lexical (injustes, gens, argument) montre que la crainte des gens est un obstacle a l'obeissance. Le verset libere les croyants de la crainte des hommes pour les orienter vers la seule crainte qui vaille — celle de Dieu. Le transfert de la crainte est un acte de liberation spirituelle.",
              axe2_voisins: "Le verset 150 est le seul des trois versets de la qibla (144, 149, 150) a mentionner la crainte. Les versets 144 et 149 donnaient l'ordre sans parler de la crainte. Le verset 150 ajoute cette dimension psychologique : ne craignez pas les gens mais craignez Dieu. Cette ajout montre que l'obeissance peut etre entravee par la peur des hommes.",
              axe3_sourate: "La racine kh-sh-y apparait plusieurs fois dans la sourate al-Baqarah. En 2:74, « des pierres d'ou coulent les ruisseaux par crainte de Dieu ». En 2:150, la crainte est transferee des hommes vers Dieu. La sourate montre que la crainte de Dieu est feconde (les pierres en tremblent) tandis que la crainte des hommes est paralysante.",
              axe4_coherence: "La racine kh-sh-y apparait environ 48 fois dans le Coran. Le schema « ne craignez pas les gens, craignez-Moi » apparait en 5:3 et 5:44. Le Coran oppose systematiquement la crainte de Dieu (constructive) et la crainte des hommes (destructrice). La khashya de Dieu est une vertu — elle mene a l'obeissance et a la piete.",
              axe5_frequence: "Pour la mission du khalifa, la crainte des hommes est le premier obstacle a la mission. Le khalifa qui craint les gens ne peut pas accomplir sa mission — il sera paralyse par les critiques et les menaces. Le verset ordonne de supprimer cette crainte pour la remplacer par la seule crainte de Dieu. La mission exige le courage de desobeir aux hommes pour obeir a Dieu."
            }
          }
        }
      },
      // kshy pos=20 (2e occurrence : « craignez-Moi »)
      {
        word_key: "kshy", position: 20, sense_chosen: "craindre",
        analysis_axes: {
          sense_chosen: "craindre",
          concept_chosen: "Crainte",
          concepts: {
            "Crainte": {
              status: "retenu",
              senses: ["craindre"],
              proof_ctx: "Le verbe ikhshawni est un imperatif 2MP de la racine kh-sh-y avec pronom suffixe 1S (Moi = Dieu). Le Lane's donne : craindre. L'imperatif avec le pronom de la premiere personne divine cree un contraste saisissant avec le verbe precedent (takhshawhum = ne les craignez pas). Le transfert de la crainte est explicite : d'eux vers Moi. L'imperatif marque un ordre direct — la crainte de Dieu n'est pas optionnelle mais obligatoire. Le pronom « ni » (Moi) est la voix divine directe qui reclame la crainte exclusive.",
              axe1_verset: "Le verbe ikhshawni est la seconde partie de l'opposition : ne les craignez pas / craignez-Moi. Le champ lexical du verset passe des adversaires (gens, injustes) a Dieu (Moi, Mon bienfait, guides). Le transfert de la crainte est le pivot du verset — il separe la partie defensive (supprimer l'argument) de la partie constructive (achever le bienfait, guider). Craindre Dieu seul est la condition pour recevoir le bienfait et la guidance.",
              axe2_voisins: "Le verset 150 est le seul a contenir ce contraste direct « ne les craignez pas / craignez-Moi ». Les versets precedents ne mentionnaient pas la crainte. Ce contraste est le coeur du message ajoute par le troisieme rappel de la qibla — l'orientation physique doit etre accompagnee d'une orientation spirituelle de la crainte.",
              axe3_sourate: "La crainte de Dieu (taqwa) est un theme majeur de la sourate al-Baqarah. En 2:2, le Livre est « une guidance pour les pieux (muttaqin) ». En 2:41, « craignez-Moi ». En 2:150, le meme imperatif revient — craignez-Moi. La sourate montre que la crainte de Dieu est le fondement de la piete et la condition de la guidance.",
              axe4_coherence: "L'imperatif « ikhshawni » (craignez-Moi) ou ses equivalents apparaissent dans plusieurs sourates. En 5:3, « ne les craignez pas mais craignez-Moi ». En 16:51, « craignez-Moi ». Le Coran fait de la crainte de Dieu le principe organisateur de la vie — elle remplace toutes les craintes subalternes et libere l'etre humain de la servitude envers les hommes.",
              axe5_frequence: "Pour la mission du khalifa, la crainte de Dieu est le moteur de la mission. Le khalifa craint Dieu seul — cette crainte le rend libre face aux hommes et courageux face aux difficultes. La crainte de Dieu n'est pas la terreur mais le respect profond qui motive l'obeissance. Le khalifa qui craint Dieu accomplit sa mission sans devier, sans craindre les critiques, sans chercher l'approbation des hommes."
            }
          }
        }
      },
      // atm pos=21
      {
        word_key: "atm", position: 21, sense_chosen: "achever",
        analysis_axes: {
          sense_chosen: "achever",
          concept_chosen: "Accomplissement/Plénitude",
          concepts: {
            "Accomplissement/Plénitude": {
              status: "retenu",
              senses: ["achever", "compléter", "parfaire", "mener à terme"],
              proof_ctx: "Le verbe li-utimma est un subjonctif 1S de la racine a-t-m avec le lam de finalite. Le Lane's donne : achever, completer, mener une chose a son terme final, ne rien laisser d'inacheve. L'achevement cree un etat permanent de completude — rien ne manque apres l'achevement. La forme I (atamma) est directe et transitive — le sujet (Dieu) acheve son bienfait sur les destinataires. Le lam de finalite montre que l'achevement est le but de tout ce qui precede : l'ordre de la qibla → la crainte de Dieu → l'achevement du bienfait.",
              axe1_verset: "Le verbe li-utimma introduit la deuxieme finalite du verset : achever le bienfait. Le champ lexical (bienfait, guides) montre que l'achevement du bienfait mene a la guidance. Le verset construit une progression de finalites : supprimer l'argument (defensif) → achever le bienfait (constructif) → guider (ultime). L'achevement est l'etape intermediaire entre la defense et la guidance. L'etablissement de la qibla est l'acte qui complete le bienfait divin.",
              axe2_voisins: "Le verset 150 est le seul des trois versets de la qibla a mentionner l'achevement du bienfait. Le verset 151 continuera avec « comme Nous vous avons envoye un messager » — l'envoi du messager est un autre bienfait. Les versets 150-152 montrent que le bienfait divin se manifeste en etapes : la qibla, le messager, la purification, l'enseignement.",
              axe3_sourate: "La racine a-t-m apparait dans la sourate al-Baqarah en 2:150 (achever le bienfait) et en 2:187 (achever le jeune). L'achevement est un concept cle de la sourate — chaque pratique doit etre menee a son terme. La qibla, le jeune, le pelerinage doivent etre accomplis completement, sans demi-mesure.",
              axe4_coherence: "La racine a-t-m apparait environ 12 fois dans le Coran. En 5:3, « J'ai acheve pour vous votre religion et J'ai accompli sur vous Mon bienfait ». En 2:150, le bienfait n'est pas encore acheve — il le sera par l'etablissement de la qibla. Le Coran montre que le bienfait divin se construit progressivement et atteint son achevement a un moment precis.",
              axe5_frequence: "Pour la mission du khalifa, l'achevement est le but de la mission. La mission ne doit pas etre laissee inachevee — le khalifa doit mener ses taches a terme. L'achevement du bienfait divin depend de l'obeissance des serviteurs — chaque acte d'obeissance est une brique de l'edifice. Le khalifa contribue a l'achevement du bienfait en obeissant aux ordres divins."
            }
          }
        }
      },
      // nem pos=22
      {
        word_key: "nem", position: 22, sense_chosen: "bienfait",
        analysis_axes: {
          sense_chosen: "bienfait",
          concept_chosen: "Bienfait/Faveur",
          concepts: {
            "Bienfait/Faveur": {
              status: "retenu",
              senses: ["bienfait", "faveur", "bénédiction", "richesse", "accorder un bienfait", "nourrir bien"],
              proof_ctx: "Le mot ni'mati est un nom feminin singulier de la racine n-'-m avec pronom suffixe 1S. Le Lane's donne : bienfait, faveur, grace, ce qui rend la vie agreable. Le bienfait (ni'ma) est un acte exterieur d'accorder quelque chose de bon — il sort de celui qui donne et atteint celui qui recoit. Le pronom « i » (Mon) attribue le bienfait a Dieu Lui-meme — c'est le bienfait de Dieu, pas celui des hommes. La forme construct (ni'mat-i) cree un lien de possession : MON bienfait — Dieu revendique la propriete du bienfait.",
              axe1_verset: "Le mot ni'mati est l'objet du verbe li-utimma — c'est le bienfait que Dieu acheve. Le champ lexical (achever, guides) montre que le bienfait est la condition de la guidance. Le verset construit une chaine : obeissance a la qibla → crainte de Dieu → achevement du bienfait → guidance. Le bienfait n'est pas un luxe mais un prealable a la guidance. Sans le bienfait acheve, la guidance ne peut pas atteindre les croyants.",
              axe2_voisins: "Le verset 150 est le seul a mentionner le bienfait dans le passage de la qibla. Le verset 151 dira « comme Nous vous avons envoye un messager pour vous purifier et vous enseigner ». L'envoi du messager est un bienfait — le verset 150 annonce l'achevement et le verset 151 en donne le contenu. Les versets 150-151 montrent que le bienfait divin est concret : qibla, messager, enseignement.",
              axe3_sourate: "La racine n-'-m apparait dans la sourate al-Baqarah sous plusieurs formes. En 2:40, « rappelez-vous Mon bienfait ». En 2:47, « rappelez-vous Mon bienfait dont je vous ai gratifies ». En 2:150, le bienfait est acheve. La sourate montre la progression : rappel du bienfait passe → achevement du bienfait present. Le bienfait n'est pas statique — il evolue et s'acheve.",
              axe4_coherence: "La racine n-'-m apparait environ 143 fois dans le Coran. L'expression « ni'mati » (Mon bienfait) avec le pronom divin apparait dans les passages de rappel des bienfaits divins. En 5:3, « J'ai accompli sur vous Mon bienfait ». En 2:150, le bienfait est en cours d'achevement — l'etablissement de la qibla est une etape. Le Coran montre que le bienfait divin est progressif et vise un achevement total.",
              axe5_frequence: "Pour la mission du khalifa, le bienfait de Dieu est le cadre de la mission. Le khalifa recoit le bienfait divin et doit le reconnaitre. L'achevement du bienfait depend de l'obeissance — chaque acte d'obeissance est un bienfait recu et reconnu. Le khalifa qui nie les bienfaits de Dieu trahit sa mission fondamentale."
            },
            "Douceur/Aisance": {
              status: "probable",
              senses: ["douceur", "tendresse", "souplesse", "délicatesse", "vie agréable", "confort", "aisance", "fraîcheur", "floraison"],
              proof_ctx: "Le sens de douceur/aisance est le fondement sensoriel de la racine n-'-m — le Lane's lie la racine a ce qui est doux au toucher, agreable, confortable. La ni'ma (bienfait) tire son origine de la na'ama (douceur) : accorder un bienfait c'est adoucir la vie de quelqu'un. Le mot ni'mati dans le verset porte ce sens en arriere-plan — le bienfait de Dieu rend la vie agreable et douce. Mais le contexte immediate designe l'acte d'accorder (bienfait), pas l'etat de douceur."
            }
          }
        }
      },
      // hdy pos=24
      {
        word_key: "hdy", position: 24, sense_chosen: "etre guide",
        analysis_axes: {
          sense_chosen: "etre guide",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-même"],
              proof_ctx: "Le verbe tahtaduna est un inaccompli 2MP de la forme VIII de la racine h-d-y. Le Lane's donne : etre guide, trouver le bon chemin, se guider soi-meme. La forme VIII (ihtada) est reflexive — elle indique que les croyants trouvent la guidance en eux-memes, par leur propre reception de la guidance divine. L'inaccompli avec la'alla (peut-etre) marque une esperance — peut-etre serez-vous guides. L'esperance (la'alla) n'est pas un doute mais une invitation a faire l'effort pour atteindre la guidance.",
              axe1_verset: "Le verbe tahtaduna ferme le verset avec la finalite ultime : etre guide. Le champ lexical (tourner, visage, Mosquee, craindre, bienfait) montre que toutes les actions precedentes convergent vers cette finalite. La progression est : orientation physique (qibla) → orientation spirituelle (craindre Dieu) → achevement du bienfait → guidance. La guidance est le sommet de la pyramide — tout le verset tend vers elle. Le mot « la'alla » (peut-etre) tempere l'affirmation — la guidance n'est pas automatique, elle demande un effort.",
              axe2_voisins: "Le verset 144 se terminait par « Dieu n'est pas inattentif a ce que vous faites ». Le verset 149 se terminait par « n'est pas en reste de ce que vous faites ». Le verset 150 se termine par « peut-etre serez-vous guides ». La progression des conclusions montre un crescendo : observation (144) → attention (149) → guidance (150). Le troisieme rappel vise le plus haut : la guidance.",
              axe3_sourate: "La racine h-d-y est la premiere racine thematique de la sourate al-Baqarah. En 2:2, le Livre est « une guidance (hudan) pour les pieux ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:150, la guidance est la finalite de l'obeissance a la qibla. La sourate commence par la guidance et y revient regulierement — la guidance est le fil conducteur de la sourate.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. La forme VIII (ihtada) souligne l'effort personnel — on ne recoit pas la guidance passivement, on la cherche activement. En 17:15, « quiconque se guide ne se guide que pour lui-meme ». Le Coran montre que la guidance est un bien individuel qui profite d'abord a celui qui la cherche.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est le but ultime de la mission. Le khalifa existe pour etre guide et pour guider les autres. L'orientation vers la qibla, la crainte de Dieu, le bienfait divin — tout cela converge vers la guidance. Le khalifa qui est guide accomplit sa mission ; celui qui s'egare la trahit. La guidance n'est pas un etat acquis une fois pour toutes mais un effort continu qui demande vigilance et obeissance."
            },
            "Conduite/Comportement": {
              status: "nul",
              senses: ["conduite", "manière d'agir", "comportement calme"],
              proof_ctx: "Le sens de conduite est un sens secondaire de h-d-y. Le contexte est la guidance divine — etre guide vers le bon chemin, pas simplement avoir une bonne conduite."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice", "présent"],
              proof_ctx: "Le sens de cadeau/offrande est un sens concret de h-d-y — le hadiya est le cadeau qu'on offre. Le contexte est la guidance spirituelle, pas le don materiel."
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

  const verseIds = [157];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 150 ===\n');
  await processVerse(150);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V150 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
