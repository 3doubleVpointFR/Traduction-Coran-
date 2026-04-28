const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 105, 106, 107
// 2:105 → verse_id=112, analysis_id=472
// 2:106 → verse_id=113, analysis_id=471
// 2:107 → verse_id=114, analysis_id=473
// =====================================================

const verseData = {
  105: {
    verse_id: 112,
    analysis_id: 472,
    translation_arab: "Ne souhaitent pas ceux qui ont couvert parmi les gens du Livre, ni les associateurs, qu'un bien soit fait descendre sur vous de la part de votre Seigneur. Et Dieu reserve a qui Il veut de Sa misericorde. Et Dieu est le Detenteur de la grace immense.",
    full_translation: "Ni les mecreants parmi les gens du Livre, ni les Associateurs n'aiment qu'on fasse descendre sur vous un bienfait de la part de votre Seigneur. Or Allah reserve a qui Il veut sa Misericorde. Et c'est Allah le Detenteur de l'abondante grace.",
    translation_explanation: `§DEMARCHE§
Le verset oppose le souhait negatif des dissimulateurs et des associateurs au decret divin de misericorde. Le verbe **yawaddu** est un inaccompli 3MS de la racine w-d-d. Le Lane's donne : aimer, souhaiter, desirer. L'inaccompli indique un etat continu — ils ne cessent de ne pas souhaiter. La negation **ma** precede le verbe et porte sur l'ensemble : ils ne souhaitent pas qu'un bien descende sur vous. Le verbe **kafaru** est un accompli 3MP de la racine k-f-r. Le Lane's donne : couvrir, cacher, dissimuler. L'accompli marque que l'acte de couverture est acheve — ils ont deja couvert la verite. Le participe **al-mushrikin** est de la forme IV de la racine sh-r-k et designe ceux qui associent. Le verbe **yunazzala** est un inaccompli passif 3MS de la forme II de la racine n-z-l. Le Lane's donne : faire descendre, reveler. La forme II intensifie — il ne s'agit pas d'une simple descente mais d'un envoi repete et delibere d'en haut vers le bas. Le passif indique que le bien est fait descendre par un agent non nomme (Dieu). Le nom **khayrin** est un nom masculin singulier indefini de la racine kh-y-r. Le Lane's donne : bien, excellence, ce qui est meilleur. L'indefini (sans article) avec la preposition min donne un sens partitif : « un bien quelconque ». Ils ne souhaitent meme pas qu'un seul bien descende. Le nom **rabbikum** est de la racine r-b-b avec pronom suffixe 2MP. Le Lane's donne : seigneur, celui qui eleve et entretient. Le Seigneur est lie directement aux croyants (votre Seigneur) — le bien vient de Celui qui les eleve. Le nom **ahl** est de la racine a-h-l. Le Lane's donne : gens de, famille, ceux qui appartiennent a. « Ahl al-kitab » designe les gens du Livre — ceux qui appartiennent a la communaute du Livre revele. Le verbe **yakhtassu** est un inaccompli 3MS de la forme VIII de la racine kh-s-s. Le Lane's donne : specifier, reserver, distinguer. La forme VIII (ifta'ala) est reflexive — Dieu Se reserve le choix, Il distingue de Lui-meme qui Il veut. Le nom **rahmatihi** est de la racine r-h-m avec pronom 3MS. Le Lane's donne : misericorde, tendresse, compassion. La misericorde est un mouvement interieur qui se dirige vers l'exterieur en actes de bienfaisance. Le nom **al-fadl** est de la racine f-d-l. Le Lane's donne : grace, faveur, excellence, ce qui depasse. Le fadl est ce que Dieu donne en plus de ce qui est du — c'est la generosite pure. L'adjectif **al-'azim** est de la racine '-z-m. Le Lane's donne : immense, grandiose, ce qui depasse en taille et en importance. L'immensité qualifie la grace — elle est sans limite.

§JUSTIFICATION§
**ne souhaitent pas** — Le sens retenu est « aimer/souhaiter ». Le verbe yawaddu avec la negation ma exprime le non-souhait. L'alternative « affection » est ecartee car le contexte est un desir (ils desirent que le bien ne descende pas), pas un sentiment d'amour.

**ont couvert** — Le sens retenu est « couvrir/cacher ». Le verbe kafaru designe ceux qui ont couvert la verite. L'alternative « etre ingrat » est ecartee car le sens premier de k-f-r est physique (couvrir), et le contexte parle de ceux qui refusent la verite, ce qui correspond a la couverture.

**gens** — Le sens retenu est « gens de/famille ». Le mot ahl designe l'appartenance a un groupe. L'alternative « digne de » est ecartee car le contexte est l'identification d'un groupe, pas le merite.

**le Livre** — Le sens retenu est « livre/ecrit ». Le mot al-kitab designe l'ecriture revelee. Meme usage que dans les versets precedents.

**soit fait descendre** — Le sens retenu est « faire descendre/reveler ». Le verbe yunazzala au passif de la forme II designe la descente de la revelation ou du bien depuis le ciel. L'alternative « s'installer » est ecartee car le contexte est la descente d'un bien, pas une installation.

**un bien** — Le sens retenu est « bien/excellence ». Le mot khayr designe ce qui est bon et benefique. L'alternative « meilleur » est ecartee car le mot est ici un nom indefini (un bien), pas un comparatif.

**votre Seigneur** — Le sens retenu est « seigneur/celui qui eleve ». Le mot rabb designe l'autorite bienveillante qui eleve et entretient. L'alternative « augmenter » est ecartee car le mot est un nom (Seigneur), pas un verbe.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite unique.

**reserve** — Le sens retenu est « specifier/distinguer ». Le verbe yakhtassu a la forme VIII signifie que Dieu Se reserve le choix de Sa misericorde. L'alternative « elite » est ecartee car le verbe est une action, pas un nom.

**Sa misericorde** — Le sens retenu est « misericorde/tendresse ». Le mot rahma designe la tendresse divine qui se manifeste en actes. L'alternative « uterus » est ecartee car le contexte est la generosite divine, pas la reproduction.

**grace** — Le sens retenu est « excellence/faveur ». Le mot fadl designe la grace divine, ce qui est donne en plus. L'alternative « surplus » est ecartee car le contexte est l'abondance divine, pas un reste.

**immense** — Le sens retenu est « grandeur/importance ». Le mot 'azim qualifie la grace comme immense. L'alternative « os » est ecartee car le mot est un adjectif de grandeur, pas un nom anatomique.

§CRITIQUE§
La traduction d'Hamidullah donne « mecreants » pour kafaru — nous donnons « ceux qui ont couvert » pour rester au plus pres de la racine k-f-r dont le sens premier est couvrir/cacher. Hamidullah donne « bienfait » pour khayr — nous donnons « bien » qui est plus neutre et plus proche du Lane's. Hamidullah donne « abondante grace » pour al-fadl al-'azim — nous donnons « grace immense » qui preserve la construction adjectif + nom. Les differences sont stylistiques, le sens global est identique.`,
    segments: [
      { fr: "ne", phon: "ma", arabic: "\u0645\u0651\u064e\u0627", is_particle: true, position: 0 },
      { fr: "souhaitent", pos: "verbe", phon: "yawaddu", arabic: "\u064a\u064e\u0648\u064e\u062f\u0651\u064f", word_key: "wdd", is_particle: false, sense_retenu: "souhaiter", position: 1 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 2 },
      { fr: "ont couvert", pos: "verbe", phon: "kafaru", arabic: "\u0643\u064e\u0641\u064e\u0631\u064f\u0648\u0627\u06df", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 3 },
      { fr: "parmi", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 4 },
      { fr: "les gens", pos: "nom", phon: "ahli", arabic: "\u0623\u064e\u0647\u0652\u0644\u0650", word_key: "ahl", is_particle: false, sense_retenu: "gens de", position: 5 },
      { fr: "du Livre", pos: "nom", phon: "al-kitabi", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0628\u0650", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 6 },
      { fr: "ni les", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 7 },
      { fr: "associateurs", phon: "al-mushrikina", arabic: "\u0671\u0644\u0652\u0645\u064f\u0634\u0652\u0631\u0650\u0643\u0650\u064a\u0646\u064e", is_particle: true, position: 8 },
      { fr: "que", phon: "an", arabic: "\u0623\u064e\u0646", is_particle: true, position: 9 },
      { fr: "soit fait descendre", pos: "verbe", phon: "yunazzala", arabic: "\u064a\u064f\u0646\u064e\u0632\u0651\u064e\u0644\u064e", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 10 },
      { fr: "sur vous", phon: "'alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645", is_particle: true, position: 11 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 12 },
      { fr: "un bien", pos: "nom", phon: "khayrin", arabic: "\u062e\u064e\u064a\u0652\u0631\u064d", word_key: "xyr", is_particle: false, sense_retenu: "bien", position: 13 },
      { fr: "de la part de", phon: "min", arabic: "\u0645\u0650\u0651\u0646", is_particle: true, position: 14 },
      { fr: "votre Seigneur", pos: "nom", phon: "rabbikum", arabic: "\u0631\u0651\u064e\u0628\u0651\u0650\u0643\u064f\u0645\u0652", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 15 },
      { fr: "et Dieu", pos: "nom", phon: "wa-Allahu", arabic: "\u0648\u064e\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 16 },
      { fr: "reserve", pos: "verbe", phon: "yakhtassu", arabic: "\u064a\u064e\u062e\u0652\u062a\u064e\u0635\u0651\u064f", word_key: "khs", is_particle: false, sense_retenu: "reserver", position: 17 },
      { fr: "de Sa misericorde", pos: "nom", phon: "bi-rahmatihi", arabic: "\u0628\u0650\u0631\u064e\u062d\u0652\u0645\u064e\u062a\u0650\u0647\u0650", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 18 },
      { fr: "qui", phon: "man", arabic: "\u0645\u064e\u0646", is_particle: true, position: 19 },
      { fr: "Il veut", phon: "yasha'u", arabic: "\u064a\u064e\u0634\u064e\u0622\u0621\u064f", is_particle: true, position: 20 },
      { fr: "et Dieu", pos: "nom", phon: "wa-Allahu", arabic: "\u0648\u064e\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 21 },
      { fr: "Detenteur", phon: "dhu", arabic: "\u0630\u064f\u0648", is_particle: true, position: 22 },
      { fr: "de la grace", pos: "nom", phon: "al-fadli", arabic: "\u0671\u0644\u0652\u0641\u064e\u0636\u0652\u0644\u0650", word_key: "fdl", is_particle: false, sense_retenu: "grace", position: 23 },
      { fr: "immense", pos: "adjectif", phon: "al-'azimi", arabic: "\u0671\u0644\u0652\u0639\u064e\u0638\u0650\u064a\u0645\u0650", word_key: "ezm", is_particle: false, sense_retenu: "immense", position: 24 }
    ],
    words: [
      // wdd pos=1
      {
        word_key: "wdd", position: 1, sense_chosen: "souhaiter",
        analysis_axes: {
          sense_chosen: "souhaiter",
          concept_chosen: "Amour/Affection",
          concepts: {
            "Amour/Affection": {
              status: "retenu",
              senses: ["aimer", "affection", "souhaiter"],
              proof_ctx: "Le verbe yawaddu est un inaccompli 3MS de la racine w-d-d. Le Lane's donne : aimer, souhaiter, desirer avec ardeur. Le wudd est l'inclination du coeur vers ce qu'il desire. Ici la negation ma precede — « ils ne souhaitent pas ». L'inaccompli indique un etat continu : ils persistent dans ce non-souhait. Le souhait est une forme d'amour applique a un objet futur — souhaiter c'est aimer que quelque chose advienne. La negation montre que leur coeur est hostile au bien des croyants.",
              axe1_verset: "Le verbe yawaddu ouvre le verset en revelant l'etat interieur des adversaires : ils ne souhaitent pas que le bien descende sur les croyants. Le champ lexical du verset oppose le souhait negatif (ne pas vouloir) au decret positif de Dieu (Il reserve Sa misericorde a qui Il veut). Le verset construit un contraste entre la jalousie humaine et la generosite divine. Le non-souhait des dissimulateurs est impuissant face au decret divin.",
              axe2_voisins: "Le verset 104 avertissait les croyants de ne pas dire « observe-nous » mais « regarde-nous ». Le verset 105 revele maintenant la motivation profonde des adversaires — ils ne veulent pas que les croyants recoivent le bien. Le verset 106 montrera que Dieu abroge et remplace les signes comme Il veut. La sequence montre que l'hostilite des adversaires est vaine car Dieu est maitre de Sa revelation.",
              axe3_sourate: "La racine w-d-d apparait dans la sourate al-Baqarah dans des contextes d'hostilite voilee. En 2:96, « tu les trouveras les plus avides de vie ». En 2:109, « beaucoup parmi les gens du Livre souhaiteraient (wadda) vous faire redevenir mecreants apres votre foi, par jalousie ». La sourate montre que le souhait des adversaires est motive par la jalousie, pas par la raison.",
              axe4_coherence: "La racine w-d-d apparait environ 29 fois dans le Coran. En 3:69, « un groupe parmi les gens du Livre souhaiterait vous egarer ». En 4:89, « ils souhaiteraient que vous mécroiyez comme eux ». Le Coran utilise cette racine pour reveler les intentions cachees des adversaires — leur souhait est un mouvement interieur d'hostilite envers les croyants.",
              axe5_frequence: "Pour la mission du khalifa, le souhait des adversaires ne doit pas decourager. Le verset montre que leur non-souhait est impuissant face a la misericorde divine. Le khalifa doit savoir que sa mission rencontrera de l'hostilite interieure — des gens qui ne veulent pas que le bien arrive. Mais le decret de Dieu prime sur les souhaits humains."
            }
          }
        }
      },
      // kfr pos=3
      {
        word_key: "kfr", position: 3, sense_chosen: "couvrir",
        analysis_axes: {
          sense_chosen: "couvrir",
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le verbe kafaru est un accompli 3MP de la racine k-f-r. Le Lane's donne : couvrir, cacher, dissimuler. Le sens physique premier est l'acte de recouvrir quelque chose pour le rendre invisible — le laboureur (kafir) couvre la graine de terre. L'accompli marque que l'acte est acheve — ils ont deja couvert la verite. Le pronom 3MP montre que c'est un groupe collectif. Dans le contexte, ce sont ceux parmi les gens du Livre qui ont couvert la verite de leurs propres ecritures.",
              axe1_verset: "Le verbe kafaru qualifie un sous-groupe des gens du Livre — « alladhina kafaru min ahli al-kitab » (ceux qui ont couvert parmi les gens du Livre). Le verset distingue au sein des gens du Livre ceux qui ont couvert et les autres. Le champ lexical (gens du Livre, associateurs, bien, Seigneur) montre que la couverture vise la verite contenue dans leurs propres ecritures. Le verset ne generalise pas — seuls ceux qui ont couvert sont concernes.",
              axe2_voisins: "Le verset 102 parlait de ceux qui ont suivi ce que les demons racontaient. Le verset 104 avertissait les croyants contre les pieges linguistiques. Le verset 105 identifie maintenant les deux groupes hostiles : les dissimulateurs parmi les gens du Livre et les associateurs. La couverture est le mecanisme commun — ils cachent la verite a eux-memes et aux autres.",
              axe3_sourate: "La racine k-f-r est une des plus frequentes de la sourate al-Baqarah. En 2:6, « ceux qui ont couvert, c'est egal pour eux ». En 2:89, « quand leur vint ce qu'ils reconnaissaient, ils le couvrirent ». La sourate trace l'histoire de la couverture — le refus delibere de reconnaitre ce qui est vrai.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le sens physique de couverture eclaire le sens spirituel — couvrir la verite c'est la rendre invisible a soi-meme et aux autres. Le Coran utilise la meme racine pour le laboureur (al-kuffar en 57:20) et pour les dissimulateurs, montrant que les deux actes sont structurellement identiques.",
              axe5_frequence: "Pour la mission du khalifa, la couverture est l'obstacle principal. Ceux qui couvrent la verite empechent la mission d'avancer. Le khalifa doit decouvrir — c'est-a-dire enlever les couvertures qui cachent la verite. La mission est un acte de devoilement permanent face a la couverture permanente."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["renier un bienfait", "rejeter", "mecreant", "etre ingrat", "nier"],
              proof_ctx: "Le sens de rejet est une extension du sens de couverture — rejeter c'est couvrir de refus. Le verbe kafaru peut se lire comme « ils ont rejete » dans le sens d'un refus actif de la verite. Le contexte est compatible avec les deux lectures : ils ont couvert la verite (sens premier) ou ils ont rejete la verite (sens derive). Le sens de couverture est retenu car il est plus precis et plus proche de la racine.",
              axe1_verset: "Le mot kafaru pourrait porter le sens de rejet pur — ils ont rejete la verite. Mais le verset parle specifiquement des gens du Livre qui connaissent la verite et l'ont cachee, ce qui correspond davantage a la couverture qu'au simple rejet.",
              axe2_voisins: "Les versets voisins (101-104) traitent du rejet actif des ecritures et des pieges linguistiques. Le rejet est une dimension presente mais secondaire par rapport a la couverture deliberee.",
              axe3_sourate: "La sourate utilise kafaru dans des contextes ou la connaissance prealable est etablie — les gens du Livre savaient et ont couvert. Le rejet est la consequence de la couverture.",
              axe4_coherence: "Le Coran utilise kafaru dans des contextes varies — parfois le rejet est premier (les peuples anciens qui rejetent les prophetes), parfois la couverture est premiere (les gens du Livre qui cachent). Ici le contexte favorise la couverture.",
              axe5_frequence: "Le rejet et la couverture sont deux faces du meme obstacle pour la mission du khalifa. Rejeter c'est tourner le dos, couvrir c'est cacher. Les deux empechent la mission."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les peches"],
              proof_ctx: "Le sens d'expiation est hors sujet — le contexte est l'identification d'un groupe hostile, pas un acte reparateur."
            }
          }
        }
      },
      // ahl pos=5
      {
        word_key: "ahl", position: 5, sense_chosen: "gens de",
        analysis_axes: {
          sense_chosen: "gens de",
          concept_chosen: "Famille/Communauté",
          concepts: {
            "Famille/Communauté": {
              status: "retenu",
              senses: ["famille", "gens de", "peuple"],
              proof_ctx: "Le mot ahli est un nom masculin genitif de la racine a-h-l. Le Lane's donne : gens de, famille, ceux qui appartiennent a un lieu ou un domaine. Dans l'expression « ahl al-kitab » (les gens du Livre), ahl designe l'appartenance a la communaute qui a recu le Livre revele. Le mot marque un lien d'identite collective — les gens du Livre sont definis par leur relation au Livre. La distinction avec « digne de » est que le contexte est l'identification d'un groupe, pas un jugement de merite.",
              axe1_verset: "Le mot ahli situe le premier groupe hostile — les gens du Livre. L'expression « min ahli al-kitab » (parmi les gens du Livre) precise que la couverture est le fait d'un sous-groupe au sein de cette communaute. Le verset distingue deux groupes : les gens du Livre qui ont couvert et les associateurs. Le champ lexical (Livre, Seigneur, Dieu, grace) montre que le verset traite de la revelation et de sa reception.",
              axe2_voisins: "Le verset 101 parlait de « ceux a qui le Livre a ete donne ». Le verset 105 reprend le meme groupe sous le nom « ahl al-kitab ». Les versets 101-105 traitent de la reaction des gens du Livre face a la revelation. Le mot ahl identifie une communaute historique par son lien au Livre.",
              axe3_sourate: "L'expression « ahl al-kitab » apparait frequemment dans la sourate al-Baqarah. En 2:109, « beaucoup parmi les gens du Livre souhaiteraient ». En 2:145, « meme si tu apportais aux gens du Livre toutes les preuves ». La sourate adresse specifiquement les gens du Livre comme une communaute qui a recu la verite mais l'a en partie negligee.",
              axe4_coherence: "L'expression « ahl al-kitab » apparait environ 31 fois dans le Coran. Elle designe les communautes juive et chretienne en tant que depositaires d'ecritures revelees. Le Coran reconnait leur reception du Livre tout en critiquant leur couverture de certaines verites.",
              axe5_frequence: "Pour la mission du khalifa, les gens du Livre sont une communaute qui a recu une mission anterieure. Le khalifa doit connaitre cette realite — le Livre a ete donne avant lui, et des communautes entieres l'ont recu. La mission du khalifa s'inscrit dans cette continuite de reception du Livre."
            },
            "Mérite/Aptitude": {
              status: "nul",
              senses: ["digne de"],
              proof_ctx: "Le sens de merite est hors sujet — le mot est ici dans l'expression « ahl al-kitab » qui designe un groupe, pas une qualite."
            }
          }
        }
      },
      // ktb pos=6
      {
        word_key: "ktb", position: 6, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["contrat de mariage", "contrat d'affranchissement", "ecriture revelee", "livre", "registre", "contrat ecrit"],
              proof_ctx: "Le mot al-kitabi est un nom masculin singulier defini genitif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee. L'article defini (al-) designe LE Livre connu — l'ecriture revelee. Dans l'expression « ahl al-kitab », le Livre est ce qui definit la communaute. Le mot est au genitif car il est complement de ahl (les gens DU Livre). C'est le meme usage que dans les versets precedents.",
              axe1_verset: "Le mot al-kitab definit la communaute des gens du Livre — c'est le Livre qui les identifie. Le verset oppose les gens du Livre (qui devraient reconnaitre la verite puisqu'ils l'ont recue) aux associateurs (qui n'ont pas de Livre). Les deux groupes partagent le meme non-souhait — ni les uns ni les autres ne veulent que le bien descende. Le Livre est le critere d'identification, pas le critere de comportement.",
              axe2_voisins: "Le verset 101 utilisait « al-kitab » comme objet du don et du rejet. Le verset 105 utilise le meme mot comme identifiant de communaute. La continuité montre que le Livre est central dans ce passage — il est l'objet recu, rejete et definissant.",
              axe3_sourate: "Le mot al-kitab structure la sourate al-Baqarah comme le fil conducteur. En 2:2, « ce Livre, nul doute en lui ». En 2:105, le Livre identifie une communaute. La sourate est un Livre qui parle du Livre et des communautes du Livre.",
              axe4_coherence: "L'expression « ahl al-kitab » est propre au Coran — elle designe les communautes qui ont recu des ecritures anterieures. Le Coran se situe dans la continuite des ecritures precedentes tout en les confirmant et en les corrigeant.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le mandat de la mission. Appartenir au Livre c'est avoir recu la mission. Le khalifa doit etre un homme du Livre — defini par sa relation au texte revele."
            }
          }
        }
      },
      // nzl pos=10
      {
        word_key: "nzl", position: 10, sense_chosen: "faire descendre",
        analysis_axes: {
          sense_chosen: "faire descendre",
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              senses: ["pluie qui descend", "faire descendre", "reveler", "descendre", "envoyer d'en haut"],
              proof_ctx: "Le verbe yunazzala est un inaccompli passif 3MS de la forme II de la racine n-z-l. Le Lane's donne : faire descendre, envoyer d'en haut, reveler. La forme II (fa''ala) intensifie l'action — il ne s'agit pas d'une descente simple mais d'un envoi delibere et repete d'en haut vers le bas. Le passif indique que l'agent (Dieu) n'est pas nomme explicitement dans cette proposition — le bien est fait descendre. L'objet de la descente est « khayr » (un bien). La distinction avec « s'installer » (nul) est claire : le contexte est la descente du bien d'en haut, pas une installation.",
              axe1_verset: "Le verbe yunazzala est au coeur de la proposition : les adversaires ne souhaitent pas qu'un bien soit fait descendre sur les croyants. Le champ lexical (bien, Seigneur, misericorde, grace) montre que la descente est un acte de generosite divine. Le verset oppose le souhait negatif des adversaires a la descente positive du bien. La descente est le mouvement que les adversaires veulent empecher — mais ils ne peuvent pas.",
              axe2_voisins: "Le verset 97 parlait de la descente de la revelation par Djibril. Le verset 106 parlera de l'abrogation et du remplacement des signes. Le verset 105 montre que la descente du bien est un processus continu que Dieu controle — les adversaires ne peuvent pas l'arreter.",
              axe3_sourate: "La racine n-z-l est structurante dans la sourate al-Baqarah. En 2:4, « ce qui a ete fait descendre sur toi et ce qui a ete fait descendre avant toi ». En 2:90, « mecreants en ce que Dieu a fait descendre ». La descente est le mouvement divin par excellence — du haut vers le bas, du ciel vers la terre.",
              axe4_coherence: "La racine n-z-l apparait environ 293 fois dans le Coran. Le verbe nazzala a la forme II souligne l'envoi delibere et progressif — contrairement a anzala (forme IV) qui designe une descente globale. La forme II est utilisee pour la revelation progressive, signe par signe.",
              axe5_frequence: "Pour la mission du khalifa, la descente du bien est le soutien divin de la mission. Le khalifa doit savoir que Dieu fait descendre le bien sur qui Il veut — la mission est soutenue d'en haut. Les adversaires ne peuvent pas empecher cette descente."
            },
            "Halte/Séjour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "lieu de descente", "hote"],
              proof_ctx: "Le sens de halte est hors sujet — le contexte est la descente d'un bien depuis le ciel, pas une installation dans un lieu."
            }
          }
        }
      },
      // xyr pos=13
      {
        word_key: "xyr", position: 13, sense_chosen: "bien",
        analysis_axes: {
          sense_chosen: "bien",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "meilleur", "mieux"],
              proof_ctx: "Le mot khayrin est un nom masculin singulier indefini genitif de la racine kh-y-r. Le Lane's donne : bien, ce qui est bon, excellence, ce qui est meilleur. Le khayr est l'oppose du sharr (mal). Le mot est indefini (sans article) avec la preposition min, ce qui donne un sens partitif : « un bien quelconque ». Les adversaires ne souhaitent pas que le moindre bien descende. La distinction avec « meilleur » (comparatif) est que le mot est ici un nom simple, pas un comparatif.",
              axe1_verset: "Le mot khayrin est l'objet de la descente que les adversaires ne souhaitent pas. Le champ lexical (faire descendre, Seigneur, misericorde, grace) montre que le bien est un don divin. Le verset oppose le non-souhait des adversaires a l'abondance de la grace divine. Le bien est indefini — les adversaires ne veulent meme pas qu'un seul bien descende, quel qu'il soit. Leur hostilite est totale.",
              axe2_voisins: "Le verset 103 parlait de ce qui est « meilleur » (khayrun) pour ceux qui croient. Le verset 105 utilise le meme mot pour designer l'objet de la jalousie des adversaires. Le verset 106 utilisera « khayrin » pour le signe meilleur que Dieu apporte en remplacement. Le khayr est le fil conducteur de ce passage.",
              axe3_sourate: "La racine kh-y-r est frequente dans la sourate al-Baqarah. En 2:54, « c'est mieux (khayr) aupres de votre Createur ». En 2:184, « celui qui fait le bien volontairement, c'est mieux pour lui ». La sourate utilise khayr comme critere de valeur — ce qui est bien vient de Dieu et retourne a Lui.",
              axe4_coherence: "La racine kh-y-r apparait environ 176 fois dans le Coran. Le khayr est un concept central — il designe tout ce qui est bon, benefique et conforme a la volonte divine. En 2:105, le bien est ce que Dieu fait descendre. En 2:106, le bien est ce que Dieu apporte en remplacement. Le Coran presente Dieu comme la source unique du bien.",
              axe5_frequence: "Pour la mission du khalifa, le bien est l'objectif de la mission. Le khalifa est charge de recevoir et de transmettre le bien qui descend de Dieu. Les adversaires veulent empecher cette reception — mais le decret divin prime. La mission du khalifa est un canal du bien divin vers les humains."
            }
          }
        }
      },
      // rbb pos=15
      {
        word_key: "rbb", position: 15, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "celui qui possede", "proprietaire", "maitre", "gouverner", "celui qui eleve", "celui qui entretient"],
              proof_ctx: "Le mot rabbikum est un nom masculin genitif de la racine r-b-b avec pronom suffixe 2MP (votre). Le Lane's donne : seigneur, maitre, celui qui possede et eleve, celui qui entretient et fait grandir. Le rabb combine la possession et l'education — c'est une autorite bienveillante qui prend soin de ce qu'elle possede. Le pronom « kum » (votre) lie directement le Seigneur aux croyants — c'est votre Seigneur, Celui qui vous eleve et vous entretient.",
              axe1_verset: "Le mot rabbikum situe la source du bien — il vient de votre Seigneur. Le champ lexical (bien, faire descendre, misericorde, grace) montre que le Seigneur est la source de tout bienfait. Le verset oppose les adversaires qui ne veulent pas que le bien descende et le Seigneur qui est la source de ce bien. Le Seigneur est lie aux croyants par le possessif « votre » — cette relation est personnelle.",
              axe2_voisins: "Le verset 104 avertissait les croyants. Le verset 105 rappelle que le Seigneur est la source du bien malgre l'hostilite. Le verset 106 montrera que Dieu est omnipotent. La progression montre que le Seigneur est a la fois protecteur (il fait descendre le bien) et souverain (il abroge et remplace comme Il veut).",
              axe3_sourate: "La racine r-b-b est fondamentale dans la sourate al-Baqarah. En 2:5, « guides de la part de leur Seigneur ». En 2:62, « leur recompense aupres de leur Seigneur ». La sourate insiste sur la relation personnelle entre le Seigneur et Ses creatures — Il les eleve, les guide et les recompense.",
              axe4_coherence: "La racine r-b-b apparait environ 980 fois dans le Coran. Le mot rabb est le deuxieme nom le plus frequent apres Allah. Il souligne la relation d'education et de soin entre Dieu et Ses creatures. Le Seigneur n'est pas un maitre distant — c'est Celui qui accompagne la croissance.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est le mandant de la mission. Le bien vient du Seigneur — le khalifa est le recepteur et le transmetteur. La relation de seigneurie implique que le khalifa est eleve et accompagne dans sa mission par Celui qui l'a mandate."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["colline", "eminence", "developper", "augmenter", "croitre", "exces", "faire grandir", "nourrir"],
              proof_ctx: "Le sens de croissance est le fondement etymologique de rabb — celui qui fait croitre. Le Lane's lie rabb a l'idee de faire grandir progressivement. Le Seigneur est celui qui fait croitre Ses creatures. Le mot rabbikum porte en lui cette idee de croissance personnalisee — votre Seigneur est Celui qui vous fait grandir.",
              axe1_verset: "Le mot rabbikum pourrait etre lu comme « Celui qui vous fait croitre ». Le bien qui descend est un instrument de croissance — le Seigneur fait descendre le bien pour faire grandir les croyants. Les adversaires ne veulent pas cette croissance.",
              axe2_voisins: "Les versets voisins montrent la croissance de la revelation — chaque signe est remplace par un meilleur ou un semblable. La seigneurie implique une croissance progressive.",
              axe3_sourate: "La sourate al-Baqarah presente la seigneurie comme un processus d'education continue. Le Seigneur guide, nourrit, fait grandir. La croissance est le mode operatoire de la seigneurie.",
              axe4_coherence: "Le Coran associe rabb a l'education des peuples — chaque communaute recoit un seigneur qui la fait croitre. Le sens de croissance eclaire la seigneurie de l'interieur.",
              axe5_frequence: "La croissance est le resultat attendu de la mission du khalifa. Le Seigneur fait croitre a travers la mission — le khalifa est l'instrument de cette croissance."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["augmentation de dette", "usure", "interet"],
              proof_ctx: "Le sens d'usure est hors sujet — le mot est rabb (Seigneur), pas riba (usure). Le contexte est la source divine du bien."
            }
          }
        }
      },
      // alh pos=16
      {
        word_key: "alh", position: 16, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Premiere occurrence d'Allah dans le verset — au nominatif dans la phrase « wa-Allahu yakhtassu bi-rahmatihi man yasha'u » (et Dieu reserve de Sa misericorde a qui Il veut). Allah est ici le sujet actif — c'est Lui qui reserve, c'est Lui qui choisit. Le nom propre marque la souverainete du choix divin face a l'impuissance des adversaires.",
              axe1_verset: "Le nom Allah apparait deux fois dans le verset : une fois comme sujet du choix (Il reserve) et une fois comme Detenteur de la grace. La premiere occurrence oppose le decret divin au non-souhait des adversaires. Dieu reserve Sa misericorde — les adversaires ne peuvent rien contre ce choix. Le verset construit un contraste : impuissance humaine vs souverainete divine.",
              axe2_voisins: "Les versets 103-104 avertissaient les croyants. Le verset 105 revele que Dieu est le maitre du bien et de la misericorde. Le verset 106 montrera que Dieu est omnipotent. La sequence montre Dieu comme le souverain absolu qui n'est pas affecte par l'hostilite des adversaires.",
              axe3_sourate: "Le nom Allah structure toute la sourate al-Baqarah. En 2:105, Il est le sujet du choix et le detenteur de la grace. La sourate montre que tout depend de Dieu — le bien, la misericorde, le choix, la grace.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:105, la double occurrence souligne la souverainete divine — Dieu choisit et Dieu possede la grace. Le Coran insiste sur le fait que Dieu est la source et le proprietaire de tout bien.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant absolu. Sa souverainete garantit que la mission sera soutenue malgre l'hostilite. Le khalifa s'appuie sur le choix divin, pas sur l'approbation humaine."
            }
          }
        }
      },
      // khs pos=17
      {
        word_key: "khs", position: 17, sense_chosen: "reserver",
        analysis_axes: {
          sense_chosen: "reserver",
          concept_chosen: "Particularité/Exclusivité",
          concepts: {
            "Particularité/Exclusivité": {
              status: "retenu",
              senses: ["specifier", "distinguer", "elite"],
              proof_ctx: "Le verbe yakhtassu est un inaccompli 3MS de la forme VIII de la racine kh-s-s. Le Lane's donne : specifier, reserver a quelqu'un en particulier, distinguer du general. La forme VIII (ifta'ala) est reflexive — le sujet agit sur lui-meme. Dieu Se reserve le choix de Sa misericorde, Il distingue de Lui-meme qui Il veut. L'inaccompli indique un acte continu — Dieu ne cesse de reserver Sa misericorde a qui Il veut. Le choix divin n'est pas arbitraire mais delibere et souverain.",
              axe1_verset: "Le verbe yakhtassu est l'acte central de la deuxieme partie du verset. Face au non-souhait des adversaires, Dieu oppose Sa prerogative : Il reserve Sa misericorde a qui Il veut. Le champ lexical (misericorde, grace, Dieu, vouloir) montre que la reservation est un acte de souverainete pure. Le verset oppose l'impuissance des adversaires a la toute-puissance du choix divin.",
              axe2_voisins: "Le verset 104 avertissait les croyants. Le verset 105 montre que Dieu choisit souverainement. Le verset 106 montrera que Dieu abroge et remplace comme Il veut. La sequence montre la souverainete divine dans tous les domaines — misericorde, revelation, decret.",
              axe3_sourate: "La racine kh-s-s est rare dans la sourate al-Baqarah — cette occurrence est significative. Elle montre que la misericorde divine n'est pas automatique mais reservee a qui Dieu veut. La sourate insiste sur le choix divin comme prerogative absolue.",
              axe4_coherence: "La racine kh-s-s apparait peu dans le Coran mais toujours dans des contextes de prerogative divine ou de distinction. En 2:105, la reservation divine s'oppose au souhait humain. Le Coran montre que le choix appartient a Dieu seul.",
              axe5_frequence: "Pour la mission du khalifa, la reservation divine est un rappel que la mission est un don specifique, pas un droit. Dieu reserve Sa misericorde a qui Il veut — le khalifa recoit cette misericorde par choix divin, pas par merite humain."
            }
          }
        }
      },
      // rhm pos=18
      {
        word_key: "rhm", position: 18, sense_chosen: "misericorde",
        analysis_axes: {
          sense_chosen: "misericorde",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["traiter avec compassion", "se forcer a la compassion", "misericorde reciproque", "dire que Dieu te fasse misericorde", "misericorde", "pardon", "demander la misericorde", "le Compatissant", "plus misericordieux", "objet de misericorde", "traite avec beaucoup de compassion"],
              proof_ctx: "Le mot rahmatihi est un nom feminin genitif de la racine r-h-m avec pronom suffixe 3MS (Sa). Le Lane's donne : misericorde, tendresse, compassion qui se manifeste en actes de bienfaisance. La rahma est un mouvement interieur qui se dirige vers l'exterieur — la tendresse du coeur qui se traduit en actes concrets de bien. Le pronom « hi » (Sa) rattache la misericorde a Dieu — c'est Sa misericorde, elle Lui appartient. La preposition « bi » (de) indique l'instrument : Dieu reserve DE Sa misericorde.",
              axe1_verset: "Le mot rahmatihi est l'objet de la reservation divine — Dieu reserve de Sa misericorde a qui Il veut. Le champ lexical (bien, faire descendre, grace, Seigneur) montre que la misericorde est le moteur de la generosite divine. Le verset oppose le non-souhait jaloux des adversaires a la misericorde illimitee de Dieu. La misericorde est ce que les adversaires voudraient empecher — mais elle est la prerogative de Dieu.",
              axe2_voisins: "Le verset 100 parlait de la rupture des engagements. Le verset 105 montre que malgre la rupture et l'hostilite, la misericorde divine continue. Le verset 106 montrera la puissance divine. La misericorde est le lien entre la souverainete de Dieu et Sa bienveillance envers les croyants.",
              axe3_sourate: "La racine r-h-m est fondamentale dans la sourate al-Baqarah. En 2:54, Dieu « accueillit votre repentir car Il est le Repentant, le Misericordieux ». En 2:163, « le Compatissant, le Misericordieux ». La sourate presente la misericorde comme un attribut permanent de Dieu qui se manifeste dans tous Ses actes.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran. La misericorde est l'attribut le plus cite de Dieu apres la divinite. Chaque sourate (sauf une) commence par « au nom de Dieu, le Compatissant, le Misericordieux ». Le Coran presente la misericorde comme le fondement de la relation entre Dieu et Ses creatures.",
              axe5_frequence: "Pour la mission du khalifa, la misericorde divine est le soutien de la mission. Le khalifa recoit la misericorde et la transmet. La mission n'est pas un acte de force mais de misericorde — Dieu accompagne le khalifa par Sa tendresse."
            },
            "Utérus/Reproduction": {
              status: "nul",
              senses: ["vulve", "uterus gonfle", "uterus"],
              proof_ctx: "Le sens d'uterus est le sens physique premier de r-h-m. Le contexte est la misericorde divine, pas la reproduction."
            },
            "Parenté/Lien familial": {
              status: "nul",
              senses: ["sentiment de parente", "lien de parente"],
              proof_ctx: "Le sens de parente est hors sujet — le contexte est la misericorde divine, pas les liens familiaux."
            }
          }
        }
      },
      // alh pos=21 (2nd occurrence)
      {
        word_key: "alh", position: 21, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Deuxieme occurrence d'Allah dans le verset — au nominatif dans la phrase « wa-Allahu dhu al-fadli al-'azim » (et Dieu est le Detenteur de la grace immense). Ici Allah est qualifie par un attribut : Il est Detenteur (dhu) de la grace (fadl) immense ('azim). Memes analyses que la premiere occurrence en position 16.",
              axe1_verset: "Cette deuxieme occurrence cloture le verset par un attribut divin : Dieu est le Detenteur de la grace immense. Apres avoir montre que Dieu reserve Sa misericorde (choix), le verset affirme que Dieu possede la grace en abondance (quantite). Le choix et l'abondance se completent — Dieu choisit souverainement parmi une grace qui est immense.",
              axe2_voisins: "Le verset 105 se conclut par un attribut de grandeur divine. Le verset 106 debutera par une prerogative divine (abroger et remplacer). Les deux versets montrent Dieu dans Sa souverainete — gracieux et omnipotent.",
              axe3_sourate: "Les attributs divins ponctuent la sourate al-Baqarah. En 2:105, Dieu est Detenteur de la grace immense. En 2:106, Dieu est Omnipotent. La sourate enumere les attributs divins pour montrer la plenitude de la souverainete.",
              axe4_coherence: "Le Coran termine souvent les versets par des attributs divins qui resument le message. En 2:105, la grace immense est la reponse divine a la jalousie des adversaires — ce qu'ils veulent empecher est immense et leur volonte est derisoire.",
              axe5_frequence: "Pour la mission du khalifa, la grace immense de Dieu est la source inepuisable de la mission. Le khalifa ne manquera jamais de ressources car la grace divine est sans limite."
            }
          }
        }
      },
      // fdl pos=23
      {
        word_key: "fdl", position: 23, sense_chosen: "grace",
        analysis_axes: {
          sense_chosen: "grace",
          concept_chosen: "Excellence/Faveur",
          concepts: {
            "Excellence/Faveur": {
              status: "retenu",
              senses: ["etre superieur", "grace", "faveur", "merite"],
              proof_ctx: "Le mot al-fadli est un nom masculin singulier defini genitif de la racine f-d-l. Le Lane's donne : grace, faveur, excellence, ce qui depasse en qualite et en quantite. Le fadl est ce que Dieu donne en plus de ce qui est du — c'est la generosite pure qui depasse le strict necessaire. L'article defini (al-) marque que c'est LA grace connue — la grace divine par excellence. La distinction avec « surplus » (nul) est que le contexte est la generosite divine, pas un reste.",
              axe1_verset: "Le mot al-fadl qualifie Dieu — Il est le Detenteur (dhu) de la grace. L'expression « dhu al-fadl al-'azim » (Detenteur de la grace immense) cloture le verset par un attribut de generosite sans limite. Le champ lexical (bien, misericorde, Seigneur, grace) montre que le verset est un hymne a la generosite divine face a la jalousie humaine.",
              axe2_voisins: "Le verset 105 se conclut par la grace immense. Le verset 106 montrera que Dieu remplace les signes par de meilleurs. La grace est le principe qui explique pourquoi Dieu donne, abroge et remplace — Il agit par grace, pas par necessite.",
              axe3_sourate: "La racine f-d-l apparait dans la sourate al-Baqarah dans des contextes de generosite divine. En 2:64, « sans la grace de Dieu et Sa misericorde ». En 2:198, « pas de faute pour vous si vous cherchez la grace de votre Seigneur ». La grace est le mode operatoire de la divinite — Dieu agit par grace.",
              axe4_coherence: "La racine f-d-l apparait environ 104 fois dans le Coran. L'expression « dhu al-fadl al-'azim » (Detenteur de la grace immense) est une formule qui apparait plusieurs fois pour qualifier Dieu. En 3:174, « Dieu est le Detenteur de la grace immense ». Le Coran insiste sur l'immensité de la grace divine — elle depasse toute mesure humaine.",
              axe5_frequence: "Pour la mission du khalifa, la grace divine est le carburant de la mission. Le khalifa agit par grace recue — il donne ce qu'il a recu de Dieu. La mission est un canal de la grace divine vers les humains."
            },
            "Reste/Surplus": {
              status: "nul",
              senses: ["surplus", "reste"],
              proof_ctx: "Le sens de surplus est hors sujet — le contexte est l'attribut divin de generosite, pas un reste."
            }
          }
        }
      },
      // ezm pos=24
      {
        word_key: "ezm", position: 24, sense_chosen: "immense",
        analysis_axes: {
          sense_chosen: "immense",
          concept_chosen: "Grandeur/Importance",
          concepts: {
            "Grandeur/Importance": {
              status: "retenu",
              senses: ["etre grand", "grandir", "immense", "magnifier"],
              proof_ctx: "Le mot al-'azimi est un adjectif masculin singulier defini genitif de la racine '-z-m. Le Lane's donne : grand, immense, ce qui depasse en taille, en rang ou en importance. L'article defini (al-) et le genitif montrent qu'il est qualificatif de al-fadl (la grace). L'adjectif 'azim qualifie la grace comme immense — elle depasse toute limite humaine. La distinction avec « os » (sens physique) est evidente : le contexte est la grandeur d'un attribut divin.",
              axe1_verset: "Le mot al-'azim cloture le verset en qualifiant la grace divine comme immense. L'expression « al-fadl al-'azim » (la grace immense) est un superlatif — il n'y a pas de limite a cette grace. Le verset construit une progression : non-souhait des adversaires → choix divin de la misericorde → grace immense. L'immensité de la grace ecrase la jalousie des adversaires.",
              axe2_voisins: "Le verset 105 finit par l'immensité. Le verset 106 commence par l'omnipotence. Les deux attributs se completent — la grace est immense et le pouvoir est omnipotent. Dieu est a la fois genereux et puissant.",
              axe3_sourate: "La racine '-z-m apparait dans la sourate al-Baqarah pour qualifier les attributs divins et les realites graves. En 2:7, « un chatiment immense ». En 2:114, « une humiliation immense ». La grandeur s'applique aussi bien a la grace qu'au chatiment — Dieu est immense en tout.",
              axe4_coherence: "La racine '-z-m apparait environ 104 fois dans le Coran. L'adjectif 'azim qualifie les realites divines — le chatiment, la recompense, la grace, le trone. En 2:255, « Son trone embrasse les cieux et la terre ». L'immensité est un attribut de tout ce qui touche a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'immensité de la grace divine est une garantie. La mission est soutenue par une grace sans limite — le khalifa ne manquera jamais de soutien divin s'il reste dans le cadre de la mission."
            }
          }
        }
      }
    ]
  },
  106: {
    verse_id: 113,
    analysis_id: 471,
    translation_arab: "Ce que Nous abrogeons comme signe ou le faisons oublier, Nous apportons un meilleur que lui ou un semblable a lui. Ne sais-tu pas que Dieu est sur toute chose Omnipotent ?",
    full_translation: "Si Nous abrogeons un verset quelconque ou que Nous le fassions oublier, Nous en apportons un meilleur, ou un semblable. Ne sais-tu pas qu'Allah est Omnipotent ?",
    translation_explanation: `§DEMARCHE§
Le verset traite de l'abrogation et du remplacement des signes divins. Le verbe **nansakh** est un inaccompli 1PL de la racine n-s-kh. Le Lane's donne : abroger, transcrire, copier, remplacer. L'inaccompli indique une action en cours ou repetee — chaque fois que Nous abrogeons. Le sujet est la premiere personne du pluriel (Nous) — c'est le pluriel de majeste divin. Le mot **ayatin** est un nom feminin singulier indefini genitif de la racine a-y-y. Le Lane's donne : signe, miracle, preuve, verset. L'indefini (sans article) avec min donne un sens partitif : « un signe quelconque parmi les signes ». Le verbe **nunsiha** est un inaccompli 1PL de la forme IV de la racine n-s-y. Le Lane's donne : faire oublier, faire negliger. La forme IV (af'ala) est causative — Nous faisons oublier (pas Nous oublions). Le pronom suffixe « ha » (elle) renvoie au signe (feminin). Le verbe **na'ti** est un inaccompli 1PL de la racine a-t-y. Le Lane's donne : apporter, venir avec. Nous apportons — le sujet divin apporte un remplacement. Le mot **khayrin** est un nom masculin genitif de la racine kh-y-r. Le Lane's donne : meilleur, mieux. Ici le mot fonctionne comme un comparatif : « un meilleur qu'elle ». Le mot **mithliha** est un nom masculin genitif de la racine m-th-l avec pronom 3FS. Le Lane's donne : semblable, pareil, equivalent. Le verset offre deux options : un signe meilleur ou un signe semblable. Le verbe **ta'lam** est un inaccompli 2MS de la racine '-l-m. Le Lane's donne : savoir, connaitre. La question « ne sais-tu pas » est rhetorique — elle affirme que tu sais. Le nom **kulli** est de la racine k-l-l. Le Lane's donne : chaque, tout, totalite. « Sur toute chose » marque l'universalite du pouvoir divin. Le nom **qadirun** est de la racine q-d-r. Le Lane's donne : omnipotent, capable, puissant. Dieu est Omnipotent — Sa puissance s'etend a toute chose sans exception.

§JUSTIFICATION§
**abrogeons** — Le sens retenu est « abroger/transcrire ». Le verbe nansakh designe l'acte de remplacer un signe par un autre. L'alternative « copier » est ecartee car le contexte est le remplacement, pas la reproduction a l'identique.

**signe** — Le sens retenu est « signe/preuve ». Le mot aya designe un signe divin au sens large — pas seulement un verset mais tout signe de Dieu. L'alternative « verset » est un sous-sens specifique ; « signe » est plus large et plus fidele au Lane's.

**faisons oublier** — Le sens retenu est « oubli/negligence ». Le verbe nunsiha a la forme IV signifie que Dieu fait oublier un signe. L'alternative « negliger » est ecartee car la forme IV est causative — c'est Dieu qui fait oublier, pas les humains qui negligent.

**apportons** — Le sens retenu est « apporter/venir avec ». Le verbe na'ti designe l'acte divin d'apporter un remplacement. L'alternative « detruire » est ecartee car le contexte est l'apport d'un meilleur, pas la destruction.

**meilleur** — Le sens retenu est « bien/meilleur ». Le mot khayr est ici un comparatif : « meilleur qu'elle ». L'alternative « bien » (nom) est ecartee car la construction min-ha (qu'elle) impose le sens comparatif.

**semblable** — Le sens retenu est « ressemblance/identite ». Le mot mithliha designe un equivalent, un pareil. L'alternative « parabole » est ecartee car le contexte est l'equivalence, pas la comparaison pedagogique.

**sais** — Le sens retenu est « savoir/connaissance ». Le verbe ta'lam dans la question rhetorique « ne sais-tu pas » affirme la certitude. Meme usage que dans les versets precedents.

**toute** — Le sens retenu est « totalite ». Le mot kulli designe l'universalite — toute chose sans exception. L'alternative « fardeau » est ecartee car le mot est un quantificateur universel.

**chose** — Particule is_particle=true, non analysee.

**Omnipotent** — Le sens retenu est « puissance/capacite ». Le mot qadir designe celui qui a le pouvoir absolu. L'alternative « mesure » est ecartee car le contexte est la puissance divine, pas la mesure.

§CRITIQUE§
Hamidullah donne « verset » pour aya — nous donnons « signe » qui est plus large et plus proche du Lane's. Un verset est un type de signe, mais aya dans le Coran designe tout signe de Dieu (phenomenes naturels, miracles, versets). Cette difference est importante car elle elargit le sens de l'abrogation — il ne s'agit pas seulement de versets mais de tout signe divin. Hamidullah donne « Omnipotent » que nous conservons car c'est le meilleur equivalent francais de qadir.`,
    segments: [
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 0 },
      { fr: "Nous abrogeons", pos: "verbe", phon: "nansakh", arabic: "\u0646\u064e\u0646\u0633\u064e\u062e\u0652", word_key: "nsx", is_particle: false, sense_retenu: "abroger", position: 1 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 2 },
      { fr: "signe", pos: "nom", phon: "ayatin", arabic: "\u0621\u064e\u0627\u064a\u064e\u0629\u064d", word_key: "ayt", is_particle: false, sense_retenu: "signe", position: 3 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064e\u0648\u0652", is_particle: true, position: 4 },
      { fr: "le faisons oublier", pos: "verbe", phon: "nunsiha", arabic: "\u0646\u064f\u0646\u0633\u0650\u0647\u064e\u0627", word_key: "nsy", is_particle: false, sense_retenu: "faire oublier", position: 5 },
      { fr: "Nous apportons", pos: "verbe", phon: "na'ti", arabic: "\u0646\u064e\u0623\u0652\u062a\u0650", word_key: "aty", is_particle: false, sense_retenu: "apporter", position: 6 },
      { fr: "un meilleur", pos: "nom", phon: "bi-khayrin", arabic: "\u0628\u0650\u062e\u064e\u064a\u0652\u0631\u064d", word_key: "xyr", is_particle: false, sense_retenu: "meilleur", position: 7 },
      { fr: "qu'elle ou", phon: "minha aw", arabic: "\u0645\u0650\u0651\u0646\u0652\u0647\u064e\u0622 \u0623\u064e\u0648\u0652", is_particle: true, position: 8 },
      { fr: "un semblable", phon: "aw", arabic: "\u0623\u064e\u0648\u0652", is_particle: true, position: 9 },
      { fr: "un semblable a elle", pos: "nom", phon: "mithliha", arabic: "\u0645\u0650\u062b\u0652\u0644\u0650\u0647\u064e\u0622", word_key: "mvl", is_particle: false, sense_retenu: "semblable", position: 10 },
      { fr: "ne", phon: "a-lam", arabic: "\u0623\u064e\u0644\u064e\u0645\u0652", is_particle: true, position: 11 },
      { fr: "sais-tu pas", pos: "verbe", phon: "ta'lam", arabic: "\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u0652", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 12 },
      { fr: "que", phon: "anna", arabic: "\u0623\u064e\u0646\u0651\u064e", is_particle: true, position: 13 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 14 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064eY\u0670", is_particle: true, position: 15 },
      { fr: "toute", pos: "nom", phon: "kulli", arabic: "\u0643\u064f\u0644\u0650\u0651", word_key: "kll", is_particle: false, sense_retenu: "totalite", position: 16 },
      { fr: "chose", phon: "shay'in", arabic: "\u0634\u064eY\u0652\u0621\u064d", is_particle: true, position: 17 },
      { fr: "Omnipotent", pos: "nom", phon: "qadirun", arabic: "\u0642\u064e\u062f\u0650\u064a\u0631\u064c", word_key: "qdr", is_particle: false, sense_retenu: "omnipotent", position: 18 }
    ],
    words: [
      // nsx pos=1
      {
        word_key: "nsx", position: 1, sense_chosen: "abroger",
        analysis_axes: {
          sense_chosen: "abroger",
          concept_chosen: "Abrogation/Transcription",
          concepts: {
            "Abrogation/Transcription": {
              status: "retenu",
              senses: ["abroger", "transcrire", "copier"],
              proof_ctx: "Le verbe nansakh est un inaccompli 1PL de la racine n-s-kh. Le Lane's donne : abroger, annuler, remplacer par autre chose, transcrire, copier. Le sens premier est enlever et remplacer — naskh c'est oter un texte ou un signe et mettre un autre a sa place. L'inaccompli avec la premiere personne du pluriel (Nous) indique le pluriel de majeste divin. L'abrogation est un acte souverain — seul Dieu a le pouvoir d'abroger Ses propres signes. La distinction avec « copier » est que le contexte est le remplacement, pas la reproduction.",
              axe1_verset: "Le verbe nansakh ouvre la proposition conditionnelle — « ce que Nous abrogeons comme signe ». Le champ lexical (signe, faire oublier, apporter, meilleur, semblable) montre que l'abrogation n'est pas une destruction mais un remplacement. Le verset pose deux options : Dieu apporte un meilleur ou un semblable. L'abrogation est un acte de renouvellement, pas d'annulation. Le verset repond aux adversaires qui contestent les changements dans la revelation.",
              axe2_voisins: "Le verset 105 montrait l'hostilite des adversaires envers le bien qui descend. Le verset 106 repond en affirmant la souverainete divine sur la revelation — Dieu abroge et remplace comme Il veut. Le verset 107 consolidera en affirmant la souverainete sur les cieux et la terre. La sequence repond a l'hostilite par l'affirmation de la souverainete.",
              axe3_sourate: "La racine n-s-kh apparait rarement dans le Coran — elle est specifique a ce passage sur l'abrogation. La sourate al-Baqarah est le lieu principal ou la question de l'abrogation est traitee. Le verset 106 est un verset fondateur de la theologie de l'abrogation coranique.",
              axe4_coherence: "La racine n-s-kh apparait en 7:154 (« il prit les tablettes et dans leur copie ») et en 22:52 (« Dieu abroge ce que le diable suggere »). Le Coran utilise cette racine dans des contextes de remplacement souverain — l'abrogation est un acte d'autorite divine sur Sa propre revelation.",
              axe5_frequence: "Pour la mission du khalifa, l'abrogation montre que la revelation est vivante — elle se renouvelle et s'adapte. Le khalifa doit comprendre que les signes de Dieu sont progressifs. L'abrogation n'est pas un defaut mais un signe de la sagesse divine qui adapte Sa guidance aux circonstances."
            }
          }
        }
      },
      // ayt pos=3
      {
        word_key: "ayt", position: 3, sense_chosen: "signe",
        analysis_axes: {
          sense_chosen: "signe",
          concept_chosen: "Signe/Preuve",
          concepts: {
            "Signe/Preuve": {
              status: "retenu",
              senses: ["signe", "miracle", "preuve"],
              proof_ctx: "Le mot ayatin est un nom feminin singulier indefini genitif de la racine a-y-y. Le Lane's donne : signe, miracle, preuve, ce qui montre autre chose que soi. L'indefini (sans article) avec min donne un sens partitif : « un signe quelconque ». Le aya est un signe au sens large — pas seulement un verset du Coran mais tout signe de Dieu. La distinction avec « verset » (probable) est que le sens de signe est plus general et couvre tous les types de manifestation divine.",
              axe1_verset: "Le mot ayatin est l'objet de l'abrogation — Dieu abroge un signe. Le champ lexical (abroger, faire oublier, apporter, meilleur, semblable) montre que le signe est un objet temporaire que Dieu peut remplacer. Le verset ne dit pas que les signes sont imparfaits — il dit que Dieu les renouvelle par de meilleurs ou des semblables.",
              axe2_voisins: "Le verset 99 parlait des « signes clairs » que Dieu a fait descendre. Le verset 106 traite maintenant du remplacement de ces signes. Les versets 99-106 montrent que les signes sont a la fois clairs et renouvelables — la clarte et le renouvellement coexistent.",
              axe3_sourate: "La racine a-y-y est tres frequente dans la sourate al-Baqarah. En 2:39, « ceux qui traitent de mensonges Nos signes ». En 2:99, « Nous avons fait descendre sur toi des signes clairs ». La sourate est structuree autour des signes — Dieu les envoie, les humains les acceptent ou les rejettent.",
              axe4_coherence: "La racine a-y-y apparait environ 382 fois dans le Coran. Le mot aya couvre un spectre large : versets du Coran, miracles des prophetes, phenomenes naturels, preuves historiques. En 2:106, le sens large est preferable car l'abrogation s'applique a differents types de signes.",
              axe5_frequence: "Pour la mission du khalifa, les signes sont les outils de la mission. Le khalifa doit lire les signes de Dieu — dans la revelation, dans la creation, dans l'histoire. Le renouvellement des signes montre que la mission est dynamique, pas statique."
            },
            "Révélation/Parole": {
              status: "probable",
              senses: ["verset"],
              proof_ctx: "Le sens de verset est un sous-sens de signe — le verset est un signe verbal specifique. Le contexte de 2:106 pourrait designer specifiquement des versets reveles, mais le sens de signe est plus large et couvre davantage de possibilites. Le sens de verset est probable car beaucoup de commentateurs le retiennent.",
              axe1_verset: "Le mot aya pourrait designer un verset revele — les adversaires contestaient les changements dans la revelation. Le verset repondrait alors : quand Nous abrogeons un verset, Nous en apportons un meilleur.",
              axe2_voisins: "Les versets voisins traitent de la revelation et de son envoi. Le sens de verset est coherent avec le contexte.",
              axe3_sourate: "La sourate utilise aya dans les deux sens selon le contexte. En 2:99, « signes clairs » est plus general. En 2:106, le sens de verset est possible.",
              axe4_coherence: "Le Coran utilise aya pour les deux sens. Le contexte determine le choix.",
              axe5_frequence: "Les versets sont les briques de la mission — chaque verset porte un message specifique que le khalifa doit comprendre et appliquer."
            }
          }
        }
      },
      // nsy pos=5
      {
        word_key: "nsy", position: 5, sense_chosen: "faire oublier",
        analysis_axes: {
          sense_chosen: "faire oublier",
          concept_chosen: "Oubli/Négligence",
          concepts: {
            "Oubli/Négligence": {
              status: "retenu",
              senses: ["oublier", "negliger", "omettre", "laisser"],
              proof_ctx: "Le verbe nunsiha est un inaccompli 1PL de la forme IV (causative) de la racine n-s-y. Le Lane's donne : faire oublier, faire perdre le souvenir de quelque chose. La forme IV transforme le verbe intransitif (oublier) en transitif (faire oublier). Le sujet est Dieu (Nous) et l'objet est le signe (ha, elle). Dieu fait oublier un signe — il le retire de la memoire collective. Ce n'est pas un oubli humain mais un acte divin delibere. Le pronom suffixe « ha » renvoie au signe (feminin).",
              axe1_verset: "Le verbe nunsiha offre la deuxieme option apres l'abrogation : ou Nous le faisons oublier. Le champ lexical (abroger, oublier, apporter, meilleur, semblable) montre deux mecanismes de renouvellement : l'abrogation (remplacement explicite) et l'oubli (disparition de la memoire). Dans les deux cas, Dieu apporte un remplacement. Le verset montre que Dieu gere la revelation avec souverainete — Il abroge ou fait oublier selon Sa sagesse.",
              axe2_voisins: "Le verset 101 montrait ceux qui agissent « comme s'ils ne savaient pas ». Le verset 106 montre un oubli different — celui que Dieu cause deliberement. L'oubli humain est un choix coupable (101), l'oubli divin est un acte souverain (106).",
              axe3_sourate: "La racine n-s-y apparait dans la sourate al-Baqarah dans des contextes varies. En 2:44, « oubliez-vous vous-memes ? ». En 2:286, « notre Seigneur, ne nous blame pas si nous avons oublie ». La sourate traite de l'oubli comme un theme central — l'oubli humain est blamable, l'oubli divin est souverain.",
              axe4_coherence: "La racine n-s-y apparait environ 45 fois dans le Coran. En 7:51, « ils ont oublie ce jour ». En 20:115, « il oublia et Nous ne lui avons pas trouve de determination ». Le Coran distingue l'oubli humain (faiblesse) de l'oubli divin (souverainete) et de l'oubli cause par Dieu (retrait delibere).",
              axe5_frequence: "Pour la mission du khalifa, l'oubli divin montre que certains signes sont retires de la memoire collective par sagesse divine. Le khalifa doit accepter cette souverainete — tout ce qui est retire est remplace par un meilleur ou un semblable."
            }
          }
        }
      },
      // aty pos=6
      {
        word_key: "aty", position: 6, sense_chosen: "apporter",
        analysis_axes: {
          sense_chosen: "apporter",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["apporter", "donner", "arriver", "venir", "commettre"],
              proof_ctx: "Le verbe na'ti est un inaccompli 1PL de la racine a-t-y. Le Lane's donne : apporter, venir avec quelque chose. Le sujet est Dieu (Nous) et l'objet implicite est le remplacement. Apporter est un mouvement directionnel — Dieu apporte quelque chose vers les destinataires. L'inaccompli indique que cet apport est continu — chaque fois qu'un signe est abroge, un remplacement est apporte. La distinction avec « detruire » (nul) est claire : le contexte est l'apport d'un remplacement, pas la destruction.",
              axe1_verset: "Le verbe na'ti introduit la consequence de l'abrogation ou de l'oubli : Nous apportons un meilleur ou un semblable. Le champ lexical (abroger, oublier, apporter, meilleur, semblable) montre que le mouvement du verset est : retrait → remplacement. L'apport est la promesse divine — ce qui est retire est toujours remplace. Le verset rassure : l'abrogation n'est pas une perte.",
              axe2_voisins: "Le verset 101 utilisait la racine a-t-y au passif (utu, ils ont recu). Le verset 106 l'utilise a l'actif (na'ti, Nous apportons). Le changement de voix montre le passage du passif au divin actif — Dieu apporte directement.",
              axe3_sourate: "La racine a-t-y est une des plus frequentes de la sourate al-Baqarah. En 2:23, « apportez une sourate semblable ». En 2:258, « Dieu apporte le soleil de l'orient ». La sourate utilise cette racine pour des apports de natures differentes — revelation, preuves, phenomenes naturels.",
              axe4_coherence: "La racine a-t-y apparait environ 550 fois dans le Coran. L'apport divin est un theme central — Dieu apporte la revelation, les preuves, les ressources. L'apport est toujours positif quand il vient de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'apport divin est la garantie de la continuite. Chaque fois qu'un signe est retire, un autre est apporte. Le khalifa doit avoir confiance dans la continuite de l'apport divin."
            }
          }
        }
      },
      // xyr pos=7
      {
        word_key: "xyr", position: 7, sense_chosen: "meilleur",
        analysis_axes: {
          sense_chosen: "meilleur",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "meilleur", "mieux"],
              proof_ctx: "Le mot khayrin est ici un comparatif — « bi-khayrin minha » (un meilleur qu'elle). Le Lane's donne : meilleur, ce qui excelle. Le khayr comme comparatif marque la superiorite du remplacement sur l'original. Dieu n'apporte pas un simple equivalent mais un meilleur — le renouvellement est une amelioration. Le genitif avec bi (avec) indique l'instrument ou l'objet de l'apport.",
              axe1_verset: "Le mot khayrin dans « bi-khayrin minha » (un meilleur qu'elle) est la premiere option du remplacement. Le verset offre deux possibilites : un meilleur ou un semblable. La premiere option montre que l'abrogation est un progres — le remplacement est superieur. Le champ lexical (abroger, apporter, meilleur, semblable, Omnipotent) montre que l'abrogation est un acte de sagesse qui ameliore ou maintient la qualite.",
              axe2_voisins: "Le verset 103 utilisait khayr pour « ce qui est meilleur aupres de Dieu ». Le verset 105 utilisait khayr pour « un bien fait descendre ». Le verset 106 utilise khayr comme comparatif — le remplacement est meilleur. La racine kh-y-r lie ces trois versets en un fil de qualite divine.",
              axe3_sourate: "La sourate al-Baqarah utilise khayr frequemment comme critere de choix. En 2:184, « le bien volontaire est meilleur ». En 2:263, « une parole convenable est meilleure qu'une aumone suivie de tort ». La sourate etablit une hierarchie du bien — le meilleur est le critere du choix divin.",
              axe4_coherence: "Le khayr comme comparatif est frequent dans le Coran. En 2:106, il justifie l'abrogation — le remplacement est meilleur, donc l'abrogation est un progres. Le Coran presente l'abrogation comme un raffinement, pas comme une correction d'erreur.",
              axe5_frequence: "Pour la mission du khalifa, le meilleur est la direction de la mission. Le khalifa doit toujours chercher le meilleur — la mission est un mouvement vers l'excellence, pas la stagnation."
            }
          }
        }
      },
      // mvl pos=10
      {
        word_key: "mvl", position: 10, sense_chosen: "semblable",
        analysis_axes: {
          sense_chosen: "semblable",
          concept_chosen: "Ressemblance/Identité",
          concepts: {
            "Ressemblance/Identité": {
              status: "retenu",
              senses: ["ressembler", "etre semblable", "pareil", "equivalent"],
              proof_ctx: "Le mot mithliha est un nom masculin genitif de la racine m-th-l avec pronom suffixe 3FS. Le Lane's donne : semblable, pareil, ce qui correspond a un modele. Le mithl est l'equivalent — ce qui a les memes qualites sans etre identique. Le pronom « ha » (elle) renvoie au signe abroge. L'expression « aw mithliha » (ou un semblable a elle) offre la deuxieme option apres le meilleur : si le remplacement n'est pas meilleur, il est au moins equivalent.",
              axe1_verset: "Le mot mithliha offre la deuxieme option du remplacement. Le verset pose deux alternatives : meilleur ou semblable. Il n'y a pas de troisieme option (inferieur) — le remplacement est toujours au moins aussi bon. Le champ lexical montre que l'abrogation divine est un processus qui maintient ou ameliore la qualite. Le verset rassure : rien n'est perdu dans l'abrogation.",
              axe2_voisins: "Le verset 23 demandait : « apportez une sourate semblable (min mithlihi) ». Le verset 106 utilise le meme concept de similitude mais applique au remplacement divin. La similitude est un critere de qualite — ce qui est semblable a l'original est aussi bon que l'original.",
              axe3_sourate: "La racine m-th-l est importante dans la sourate al-Baqarah. En 2:17, « leur exemple est comme celui qui a allume un feu ». En 2:26, « Dieu n'a pas honte de prendre comme exemple un moustique ». La sourate utilise les similitudes pour enseigner — le semblable eclaire l'inconnu par le connu.",
              axe4_coherence: "La racine m-th-l apparait environ 169 fois dans le Coran. Le mithl comme equivalent est utilise pour montrer que Dieu peut produire des equivalents de tout — en 2:23, le defi est de produire « un semblable ». En 2:106, Dieu Lui-meme produit des semblables de Ses propres signes.",
              axe5_frequence: "Pour la mission du khalifa, le semblable est un outil de comprehension. Le khalifa doit reconnaitre les similitudes entre les signes — l'ancien et le nouveau portent la meme verite sous des formes differentes."
            },
            "Similitude/Comparaison": {
              status: "nul",
              senses: ["exemple", "parabole", "similitude", "comparaison", "semblable"],
              proof_ctx: "Le sens de comparaison pedagogique est hors sujet — le contexte est l'equivalence entre deux signes, pas une parabole d'enseignement."
            }
          }
        }
      },
      // elm pos=12
      {
        word_key: "elm", position: 12, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "certitude", "enseignement", "connaitre", "etre informe", "savoir", "savant"],
              proof_ctx: "Le verbe ta'lam est un inaccompli 2MS de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe. La question « a-lam ta'lam » (ne sais-tu pas ?) est rhetorique — elle affirme en demandant. Le verset s'adresse au Prophete pour affirmer une verite que tout le monde devrait connaitre : Dieu est Omnipotent. Le savoir vise ici est la certitude — tu sais avec certitude que Dieu est sur toute chose Omnipotent.",
              axe1_verset: "Le verbe ta'lam introduit la question rhetorique qui cloture le verset. Le champ lexical (abroger, apporter, meilleur, Omnipotent) montre que la question porte sur la puissance divine. Ne sais-tu pas que Dieu peut tout ? La question est un rappel — apres avoir montre l'abrogation et le remplacement, le verset affirme le fondement : Dieu est Omnipotent, donc Il peut abroger et remplacer.",
              axe2_voisins: "Le verset 107 reprendra la meme formule « a-lam ta'lam » (ne sais-tu pas). Les deux questions rhetoriques se repondent : Dieu est Omnipotent (106) et Dieu possede le royaume des cieux et de la terre (107). Les deux versets etablissent les fondements de la souverainete divine.",
              axe3_sourate: "La formule « a-lam ta'lam » (ne sais-tu pas) est rare dans la sourate al-Baqarah — elle apparait en 106 et 107 pour creer un effet de repetition rhetorique qui martele la souverainete divine.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. La question rhetorique « ne sais-tu pas » est un procede coranique pour affirmer une verite fondamentale. Le Coran ne demande pas si tu sais — il affirme que tu sais.",
              axe5_frequence: "Pour la mission du khalifa, le savoir de la toute-puissance divine est le fondement de la confiance. Le khalifa sait que Dieu est Omnipotent — cette certitude soutient la mission dans les moments de doute."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["univers", "monde"],
              proof_ctx: "Le mot est un verbe (savoir), pas un nom (monde). Le contexte est la connaissance, pas la creation."
            }
          }
        }
      },
      // alh pos=14
      {
        word_key: "alh", position: 14, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allaha est au accusatif dans la proposition « anna Allaha 'ala kulli shay'in qadir » (que Dieu est sur toute chose Omnipotent). Dieu est le sujet de l'omnipotence — c'est Lui qui a le pouvoir sur toute chose. Cette occurrence rappelle que l'abrogation et le remplacement sont des manifestations de la puissance divine.",
              axe1_verset: "Le nom Allah est au centre de la question rhetorique — ne sais-tu pas que DIEU est Omnipotent. Le verset lie l'abrogation a la puissance divine : Dieu peut abroger parce qu'Il est Omnipotent. La puissance justifie l'abrogation — ce n'est pas une faiblesse mais un acte de pouvoir.",
              axe2_voisins: "Le verset 105 mentionnait Dieu comme source de la misericorde. Le verset 106 Le montre comme Omnipotent. Le verset 107 Le montrera comme possesseur du royaume. La sequence construit un portrait complet de la souverainete divine.",
              axe3_sourate: "Le nom Allah dans les questions rhetoriques de la sourate al-Baqarah sert a affirmer les attributs divins. Chaque question rhetorique revele un aspect de Dieu que les humains devraient connaitre.",
              axe4_coherence: "Le Coran associe le nom Allah a l'omnipotence dans de nombreux versets. La formule « Dieu est sur toute chose Omnipotent » est une des plus frequentes du Coran — elle cloture de nombreux versets.",
              axe5_frequence: "Pour la mission du khalifa, la divinite est le fondement absolu de la mission. Dieu est Omnipotent — la mission est soutenue par une puissance sans limite."
            }
          }
        }
      },
      // kll pos=16
      {
        word_key: "kll", position: 16, sense_chosen: "totalite",
        analysis_axes: {
          sense_chosen: "totalite",
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              senses: ["chaque", "tout", "totalite"],
              proof_ctx: "Le mot kulli est un nom masculin genitif de la racine k-l-l. Le Lane's donne : chaque, tout, totalite. Le mot kull est un quantificateur universel — il englobe tout sans exception. Dans l'expression « 'ala kulli shay'in qadir » (sur toute chose Omnipotent), kull marque que le pouvoir divin ne connait aucune exception. Chaque chose, sans exception, est sous le pouvoir de Dieu.",
              axe1_verset: "Le mot kulli dans « 'ala kulli shay'in qadir » (sur toute chose Omnipotent) universalise la puissance divine. Le verset lie l'abrogation a la toute-puissance — Dieu peut abroger parce que Sa puissance couvre toute chose. Le mot kull ecarte toute exception — il n'y a rien qui echappe au pouvoir divin.",
              axe2_voisins: "Le verset 106 affirme la puissance sur toute chose. Le verset 107 affirmera la possession du royaume des cieux et de la terre. La totalite (kull) est le pont entre les deux — toute chose est sous le pouvoir et toute chose est dans le royaume.",
              axe3_sourate: "Le mot kull apparait frequemment dans la sourate al-Baqarah pour marquer l'universalite. En 2:20, « Dieu est sur toute chose Omnipotent ». En 2:148, « chacun a une direction ». La sourate utilise kull pour montrer que rien n'echappe a l'ordre divin.",
              axe4_coherence: "La racine k-l-l apparait environ 380 fois dans le Coran. Le mot kull est un des plus frequents — il marque l'universalite du decret divin. Le Coran insiste sur le fait que rien n'echappe a Dieu — ni dans le pouvoir, ni dans le savoir, ni dans la creation.",
              axe5_frequence: "Pour la mission du khalifa, la totalite du pouvoir divin est la garantie absolue. Rien n'echappe a Dieu — le khalifa est protege par une puissance qui couvre toute chose sans exception."
            }
          }
        }
      },
      // qdr pos=18
      {
        word_key: "qdr", position: 18, sense_chosen: "omnipotent",
        analysis_axes: {
          sense_chosen: "omnipotent",
          concept_chosen: "Puissance/Capacité",
          concepts: {
            "Puissance/Capacité": {
              status: "retenu",
              senses: ["pouvoir", "etre capable"],
              proof_ctx: "Le mot qadirun est un adjectif masculin singulier indefini nominatif de la racine q-d-r. Le Lane's donne : capable, puissant, qui a le pouvoir de faire. Le qadir est celui qui possede la qudra (puissance) de maniere permanente et absolue. L'indefini marque la predication — Dieu est Omnipotent (pas « l'Omnipotent » comme titre mais comme qualite permanente). La distinction avec « mesure » (probable) est que le contexte est la puissance absolue, pas la mesure precise.",
              axe1_verset: "Le mot qadirun cloture le verset par l'affirmation de la toute-puissance. Le champ lexical (abroger, apporter, meilleur, toute chose) montre que la toute-puissance est le fondement de l'abrogation. Dieu abroge et remplace parce qu'Il est Omnipotent — Sa puissance justifie Sa prerogative. Le verset repond aux adversaires : Dieu peut ce qu'Il veut.",
              axe2_voisins: "Le verset 106 finit par l'omnipotence. Le verset 107 finira par l'absence de protecteur et de secoureur en dehors de Dieu. Les deux finales se completent : Dieu est Omnipotent ET il n'y a personne d'autre vers qui se tourner.",
              axe3_sourate: "La formule « 'ala kulli shay'in qadir » (sur toute chose Omnipotent) apparait plusieurs fois dans la sourate al-Baqarah — en 2:20, 2:106, 2:109, 2:148, 2:259, 2:284. C'est un refrain qui martele la toute-puissance divine comme verite fondamentale.",
              axe4_coherence: "La racine q-d-r apparait environ 132 fois dans le Coran. Le mot qadir est un des noms divins les plus frequents. En 2:106, la toute-puissance justifie l'abrogation — Dieu a le pouvoir de faire et de defaire. Le Coran ne presente jamais la toute-puissance comme arbitraire mais toujours comme sagesse.",
              axe5_frequence: "Pour la mission du khalifa, la toute-puissance divine est le roc sur lequel la mission repose. Le khalifa sait que rien n'est impossible pour Dieu — cette certitude nourrit la determination face aux obstacles."
            },
            "Mesure/Détermination": {
              status: "probable",
              senses: ["mesurer", "determiner", "decreter", "destin", "valeur"],
              proof_ctx: "Le sens de mesure est un sens majeur de q-d-r — le qadr est la mesure et le decret divin. Le mot qadir porte en lui l'idee que la puissance divine est mesuree et precise, pas aveugle. Dieu est Omnipotent ET Il mesure tout avec precision. Le contexte favorise le sens de puissance car la question porte sur la capacite de Dieu, mais la mesure eclaire cette capacite — la puissance divine est ordonnee.",
              axe1_verset: "Le mot qadir pourrait porter le sens de « Celui qui mesure tout » — Dieu abroge et remplace avec mesure et precision. L'abrogation est un acte mesure, pas arbitraire.",
              axe2_voisins: "Les versets 106-107 montrent un Dieu souverain qui mesure Ses actes — Il abroge avec mesure et possede le royaume avec autorite.",
              axe3_sourate: "La sourate al-Baqarah utilise q-d-r dans les deux sens — puissance et mesure. Les deux se completent dans la theologie coranique.",
              axe4_coherence: "Le Coran associe puissance et mesure — la toute-puissance n'est pas chaotique mais ordonnee. Le qadr (destin) est la mesure divine de toute chose.",
              axe5_frequence: "La mesure divine garantit que la mission du khalifa est dans un plan — rien n'est laisse au hasard."
            }
          }
        }
      }
    ]
  },
  107: {
    verse_id: 114,
    analysis_id: 473,
    translation_arab: "Ne sais-tu pas que Dieu, a Lui le royaume des cieux et de la terre, et que vous n'avez en dehors de Dieu ni protecteur ni secoureur ?",
    full_translation: "Ne sais-tu pas qu'a Allah, appartient le royaume des cieux et de la terre, et qu'en dehors d'Allah vous n'avez ni protecteur ni secoureur ?",
    translation_explanation: `§DEMARCHE§
Le verset affirme la souverainete absolue de Dieu sur les cieux et la terre et l'absence de tout protecteur ou secoureur en dehors de Lui. Le verbe **ta'lam** est un inaccompli 2MS de la racine '-l-m. Le Lane's donne : savoir, connaitre. La question « a-lam ta'lam » (ne sais-tu pas ?) est rhetorique — elle affirme une verite. C'est la meme formule que dans le verset precedent (106), creant un effet de repetition rhetorique. Le nom **Allaha** est au accusatif apres anna. Le Lane's donne : Dieu, la divinite unique. La preposition **lahu** (a Lui) indique la possession — le royaume est a Dieu. Le nom **mulku** est de la racine m-l-k. Le Lane's donne : royaume, souverainete, royaute, autorite sur un territoire. Le mulk est l'autorite royale qui s'exerce sur un domaine — les cieux et la terre. Le nom **as-samawati** est un pluriel feminin de la racine s-m-w. Le Lane's donne : ciel, ce qui est au-dessus, voute celeste. Les cieux (pluriel) designent l'ensemble des strates celestes. Le nom **al-ard** est de la racine a-r-d. Le Lane's donne : terre, sol, surface sur laquelle on vit. Les cieux et la terre ensemble designent la totalite de la creation. Le mot **duni** est de la racine d-w-n. Le Lane's donne : en dessous, en dehors de, moindre. « Min duni Allah » (en dehors de Dieu) signifie : hors de Dieu, a part Lui. Le nom **waliyyin** est de la racine w-l-y. Le Lane's donne : ami intime, protecteur, allie, celui qui est proche et qui soutient. Le wali est celui qui prend en charge et protege. Le nom **nasirin** est de la racine n-s-r. Le Lane's donne : secoureur, celui qui aide, celui qui apporte la victoire. Le nasir est celui qui intervient pour aider dans la difficulte. Le verset nie l'existence de tout protecteur et de tout secoureur en dehors de Dieu — personne d'autre ne peut proteger ni secourir.

§JUSTIFICATION§
**sais** — Le sens retenu est « savoir/connaissance ». Meme formule que le verset 106 — question rhetorique qui affirme.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite unique. Il apparait deux fois dans le verset.

**le royaume** — Le sens retenu est « royaute/souverainete ». Le mot mulk designe le pouvoir royal qui s'exerce sur un territoire. L'alternative « possession » est ecartee car le contexte est la souverainete cosmique, pas la propriete privee. L'alternative « ange » est ecartee car le mot est mulk (royaume), pas malak (ange).

**des cieux** — Le sens retenu est « ciel/ce qui couvre ». Le mot samawat (pluriel de sama') designe les cieux comme voute au-dessus de la terre. L'alternative « nom » est ecartee car le mot est samawat, pas ism.

**de la terre** — Le sens retenu est « terre/sol ». Le mot al-ard designe la terre comme surface et territoire. Pas d'ambiguite dans ce contexte.

**en dehors de** — Le sens retenu est « inferiorite/en-dessous ». Le mot dun dans l'expression « min duni Allah » signifie « en dehors de Dieu ». L'alternative « proche » est ecartee car le contexte est l'exclusion (en dehors de), pas la proximite.

**protecteur** — Le sens retenu est « proximite/alliance ». Le mot waliyy designe l'allie proche qui protege. L'alternative « gouverner » est ecartee car le mot est un nom (protecteur), pas un verbe (gouverner).

**secoureur** — Le sens retenu est « secours/victoire ». Le mot nasir designe celui qui apporte l'aide et la victoire. L'alternative « partisan » est ecartee car le contexte est l'aide active, pas le simple soutien passif.

§CRITIQUE§
La traduction d'Hamidullah est tres proche de la notre pour ce verset. La seule nuance est dans la structure syntaxique — Hamidullah donne « a Allah, appartient le royaume » en une seule proposition, tandis que nous gardons la construction arabe « Dieu, a Lui le royaume » qui preserve la mise en relief du nom divin en tete de phrase. Les deux constructions sont correctes, la notre est plus litterale.`,
    segments: [
      { fr: "ne", phon: "a-lam", arabic: "\u0623\u064e\u0644\u064e\u0645\u0652", is_particle: true, position: 0 },
      { fr: "sais-tu pas", pos: "verbe", phon: "ta'lam", arabic: "\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u0652", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 1 },
      { fr: "que", phon: "anna", arabic: "\u0623\u064e\u0646\u0651\u064e", is_particle: true, position: 2 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 3 },
      { fr: "a Lui", phon: "lahu", arabic: "\u0644\u064e\u0647\u064f\u060c", is_particle: true, position: 4 },
      { fr: "le royaume", pos: "nom", phon: "mulku", arabic: "\u0645\u064f\u0644\u0652\u0643\u064f", word_key: "mlk", is_particle: false, sense_retenu: "royaume", position: 5 },
      { fr: "des cieux", pos: "nom", phon: "as-samawati", arabic: "\u0671\u0644\u0633\u0651\u064e\u0645\u064e\u0640\u0648\u064e\u0640\u062a\u0650", word_key: "smw", is_particle: false, sense_retenu: "cieux", position: 6 },
      { fr: "et de la terre", pos: "nom", phon: "wa-al-ardi", arabic: "\u0648\u064e\u0671\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 7 },
      { fr: "et n'avez pas", phon: "wa-ma lakum", arabic: "\u0648\u064e\u0645\u064e\u0627 \u0644\u064e\u0643\u064f\u0645", is_particle: true, position: 8 },
      { fr: "vous n'avez pas", phon: "lakum", arabic: "\u0644\u064e\u0643\u064f\u0645", is_particle: true, position: 9 },
      { fr: "en dehors de", phon: "min duni", arabic: "\u0645\u0650\u0651\u0646 \u062f\u064f\u0648\u0646\u0650", is_particle: true, position: 10 },
      { fr: "en dehors de", pos: "nom", phon: "duni", arabic: "\u062f\u064f\u0648\u0646\u0650", word_key: "dwn", is_particle: false, sense_retenu: "en dehors de", position: 11 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 12 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 13 },
      { fr: "protecteur", pos: "nom", phon: "waliyyin", arabic: "\u0648\u064e\u0644\u0650Y\u064d\u0651", word_key: "w l y", is_particle: false, sense_retenu: "protecteur", position: 14 },
      { fr: "ni", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 15 },
      { fr: "secoureur", pos: "nom", phon: "nasirin", arabic: "\u0646\u064e\u0635\u0650\u064a\u0631\u064d", word_key: "nsr", is_particle: false, sense_retenu: "secoureur", position: 16 }
    ],
    words: [
      // elm pos=1
      {
        word_key: "elm", position: 1, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "certitude", "enseignement", "connaitre", "etre informe", "savoir", "savant"],
              proof_ctx: "Le verbe ta'lam est un inaccompli 2MS de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe. La question « a-lam ta'lam » (ne sais-tu pas ?) est la meme formule rhetorique que dans le verset 106. La repetition martele le message : tu sais que Dieu est Omnipotent (106) et tu sais que le royaume Lui appartient (107). Le savoir ici est la certitude absolue.",
              axe1_verset: "Le verbe ta'lam ouvre le verset par une question rhetorique qui s'adresse au Prophete mais vise tous les lecteurs. Le champ lexical (Dieu, royaume, cieux, terre, protecteur, secoureur) montre que l'objet du savoir est la souverainete divine. Ne sais-tu pas que tout appartient a Dieu et que personne d'autre ne peut proteger ? Le savoir vise est une certitude existentielle, pas un savoir theorique.",
              axe2_voisins: "Le verset 106 utilisait la meme formule pour affirmer l'omnipotence. Le verset 107 la reprend pour affirmer le royaume. Les deux questions rhetoriques forment un doublet : puissance et souverainete. L'effet de repetition renforce le message.",
              axe3_sourate: "La formule « a-lam ta'lam » est specifique aux versets 106-107 dans la sourate. Elle cree un bloc rhetoriquement lie qui affirme la souverainete divine sous deux angles. La sourate utilise les questions rhetoriques pour provoquer la reflexion.",
              axe4_coherence: "Les questions rhetoriques « ne sais-tu pas » sont frequentes dans le Coran. En 3:29, « ne sais-tu pas que Dieu sait ce qui est dans les cieux et la terre ? ». Le Coran utilise ce procede pour affirmer des verites fondamentales en engageant le lecteur.",
              axe5_frequence: "Pour la mission du khalifa, le savoir de la souverainete divine est le deuxieme pilier apres la toute-puissance. Le khalifa sait que le royaume appartient a Dieu — sa mission s'exerce dans le royaume de Dieu, pas dans un territoire humain."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["univers", "monde"],
              proof_ctx: "Le mot est un verbe (savoir), pas un nom (monde). Le contexte est la connaissance, pas la creation."
            }
          }
        }
      },
      // alh pos=3
      {
        word_key: "alh", position: 3, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Premiere occurrence d'Allah dans le verset 107 — au accusatif apres anna. Dieu est le possesseur du royaume des cieux et de la terre. La proposition « anna Allaha lahu mulku as-samawati wa-al-ard » (que Dieu, a Lui le royaume des cieux et de la terre) place Dieu comme le souverain absolu de la creation.",
              axe1_verset: "Le nom Allah est le sujet principal du verset — c'est Lui qui possede le royaume et c'est en dehors de Lui qu'il n'y a ni protecteur ni secoureur. Les deux propositions du verset tournent autour de Dieu : Il possede tout (positif) et personne d'autre ne peut rien (negatif). Le verset construit une exclusivite totale.",
              axe2_voisins: "Le verset 105 montrait Dieu comme source de la misericorde. Le verset 106 Le montrait Omnipotent. Le verset 107 Le montre comme possesseur du royaume. Les trois versets construisent un portrait complet : genereux, puissant, souverain.",
              axe3_sourate: "Le nom Allah dans les proclamations de souverainete est un theme majeur de la sourate al-Baqarah. En 2:255, le verset du Trone : « Dieu — pas de divinite sauf Lui ». La sourate affirme la souverainete divine comme fondement de tout.",
              axe4_coherence: "La formule « a Dieu le royaume des cieux et de la terre » est recurrente dans le Coran — en 3:189, 5:17, 5:18, 5:40, 5:120, 9:116, 24:42, 42:49, 48:14, 57:2, 57:5. Le Coran martele cette verite comme un pilier de la foi.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le proprietaire absolu du royaume dans lequel la mission s'exerce. Le khalifa est un mandataire dans le royaume de Dieu."
            }
          }
        }
      },
      // mlk pos=5
      {
        word_key: "mlk", position: 5, sense_chosen: "royaume",
        analysis_axes: {
          sense_chosen: "royaume",
          concept_chosen: "Royauté/Souveraineté",
          concepts: {
            "Royauté/Souveraineté": {
              status: "retenu",
              senses: ["regne", "roi", "souverain", "couronnement", "trone", "royaume"],
              proof_ctx: "Le mot mulku est un nom masculin singulier nominatif de la racine m-l-k. Le Lane's donne : royaume, souverainete, autorite royale sur un territoire. Le mulk est le pouvoir supreme qui s'exerce sur un domaine. Ici le domaine est les cieux et la terre — la totalite de la creation. Le mot est suivi de « as-samawati wa-al-ard » (des cieux et de la terre) en idafa, ce qui precise l'etendue du royaume : il couvre tout.",
              axe1_verset: "Le mot mulku est au coeur de la premiere proposition — a Dieu le royaume des cieux et de la terre. Le champ lexical (Dieu, cieux, terre, protecteur, secoureur) montre que le royaume est total et exclusif. Il n'y a pas de royaume partage — tout appartient a Dieu. Le verset nie ensuite tout protecteur ou secoureur en dehors de Dieu, ce qui confirme l'exclusivite du royaume.",
              axe2_voisins: "Le verset 106 affirmait l'omnipotence. Le verset 107 affirme le royaume. Les deux attributs se completent : la puissance est la capacite d'agir, le royaume est le domaine de l'action. Dieu est a la fois puissant (106) et souverain (107).",
              axe3_sourate: "La racine m-l-k est importante dans la sourate al-Baqarah. En 2:247, « Dieu a choisi Talut comme roi ». En 2:251, « Dieu lui donna le royaume et la sagesse ». La sourate traite de la royaute humaine (delegue) et divine (absolue). En 2:107, c'est le royaume absolu de Dieu.",
              axe4_coherence: "La racine m-l-k apparait environ 206 fois dans le Coran. Le mot mulk designe la souverainete supreme de Dieu. En 3:26, « Dis : O Dieu, Detenteur du royaume ». Le Coran presente le royaume de Dieu comme absolu — les royaumes humains sont des delegations temporaires.",
              axe5_frequence: "Pour la mission du khalifa, le royaume de Dieu est le cadre de la mission. Le khalifa exerce sa mission dans le royaume de Dieu — il est un gerant, pas un proprietaire. La souverainete appartient a Dieu seul."
            },
            "Ange/Messager": {
              status: "nul",
              senses: ["ange", "messager", "message"],
              proof_ctx: "Le mot est mulk (royaume), pas malak (ange). Le contexte est la souverainete divine sur les cieux et la terre."
            },
            "Possession/Autorité": {
              status: "nul",
              senses: ["maitre", "possesseur", "biens", "esclave"],
              proof_ctx: "Le sens de possession privee est trop reducteur — le contexte est la souverainete cosmique (cieux et terre), pas la propriete d'un bien particulier."
            }
          }
        }
      },
      // smw pos=6
      {
        word_key: "smw", position: 6, sense_chosen: "cieux",
        analysis_axes: {
          sense_chosen: "cieux",
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["piece de tissu superieure", "semelle superieure", "celeste", "bounty", "ciel", "toit", "nuage", "pluie", "herbage", "dos"],
              proof_ctx: "Le mot as-samawati est un pluriel feminin defini genitif de la racine s-m-w. Le Lane's donne : ciel, ce qui est au-dessus, voute celeste, toit. Le pluriel (samawat) designe les differentes strates celestes — le Coran parle de sept cieux. Le ciel est ce qui couvre la terre d'en haut. Dans l'expression « mulk as-samawati wa-al-ard » (le royaume des cieux et de la terre), les cieux designent la moitie superieure de la creation.",
              axe1_verset: "Le mot as-samawati est le premier element du domaine du royaume divin — les cieux. Avec la terre (al-ard), il couvre la totalite de la creation. Le verset affirme que rien n'echappe a la souverainete divine — ni ce qui est en haut ni ce qui est en bas. Le champ lexical (royaume, cieux, terre) construit une image de totalite cosmique.",
              axe2_voisins: "Le verset 106 affirmait la puissance sur toute chose. Le verset 107 precise que cette puissance s'exerce sur un domaine — les cieux et la terre. La progression va de l'abstrait (toute chose) au concret (les cieux et la terre).",
              axe3_sourate: "L'expression « as-samawat wa-al-ard » (les cieux et la terre) est une des plus frequentes de la sourate al-Baqarah. En 2:33, « Je connais le cache des cieux et de la terre ». En 2:116, « a Lui ce qui est dans les cieux et la terre ». La sourate insiste sur la souverainete cosmique de Dieu.",
              axe4_coherence: "L'expression « mulk as-samawat wa-al-ard » (le royaume des cieux et de la terre) apparait environ 15 fois dans le Coran. C'est une formule qui affirme la souverainete divine totale. Le Coran ne laisse aucun espace hors du royaume de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, les cieux sont la moitie superieure du cadre de la mission. Le khalifa vit entre les cieux et la terre — tout ce domaine appartient a Dieu."
            },
            "Nom/Identification": {
              status: "nul",
              senses: ["nommer", "prononcer le nom de Dieu", "nom"],
              proof_ctx: "Le mot est samawat (cieux), pas ism (nom). Le contexte est la souverainete cosmique."
            }
          }
        }
      },
      // ard pos=7
      {
        word_key: "ard", position: 7, sense_chosen: "terre",
        analysis_axes: {
          sense_chosen: "terre",
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "bas", "sol", "pays"],
              proof_ctx: "Le mot al-ardi est un nom feminin singulier defini genitif de la racine a-r-d. Le Lane's donne : terre, sol, surface sur laquelle on vit. La terre est le support de toute vie humaine et le lieu de la mission du khalifa. Dans l'expression « as-samawati wa-al-ard » (les cieux et la terre), la terre complete les cieux pour couvrir la totalite de la creation.",
              axe1_verset: "Le mot al-ard est le second element du domaine du royaume divin. Avec les cieux, il couvre tout — rien n'echappe. Le verset affirme que la terre appartient a Dieu au meme titre que les cieux. Le champ lexical (royaume, cieux, terre) montre l'etendue de la souverainete divine.",
              axe2_voisins: "Le verset 106 parlait de la puissance sur toute chose. Le verset 107 situe cette puissance dans un domaine concret — les cieux et la terre. Le verset 108 demandera si les croyants veulent interroger leur envoye comme Moussa a ete interroge auparavant.",
              axe3_sourate: "La terre est un element central de la sourate al-Baqarah. En 2:22, « Celui qui a fait pour vous de la terre un tapis ». En 2:30, « Je vais placer sur terre un khalifa ». La terre est le lieu de la mission du khalifa — c'est dans le royaume de Dieu que la mission s'exerce.",
              axe4_coherence: "La racine a-r-d apparait environ 461 fois dans le Coran. La terre est le lieu de l'epreuve et de la mission. Le Coran associe la terre a la responsabilite — la terre est le terrain ou le khalifa exerce son mandat.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le terrain de la mission. Le khalifa est place sur terre (2:30) dans le royaume de Dieu (2:107). Sa mission s'exerce entre les cieux et la terre — dans le domaine de Dieu."
            }
          }
        }
      },
      // dwn pos=11
      {
        word_key: "dwn", position: 11, sense_chosen: "en dehors de",
        analysis_axes: {
          sense_chosen: "en dehors de",
          concept_chosen: "Infériorité/En-dessous",
          concepts: {
            "Infériorité/En-dessous": {
              status: "retenu",
              senses: ["en dessous", "inferieur", "moindre"],
              proof_ctx: "Le mot duni est un nom genitif de la racine d-w-n. Le Lane's donne : en dessous, inferieur, en dehors de, moindre. Dans l'expression « min duni Allah » (en dehors de Dieu), le mot designe tout ce qui est en dessous de Dieu, c'est-a-dire tout sauf Dieu. Le sens d'exclusion derive du sens d'inferiorite — ce qui est en dessous est en dehors du rang superieur. Le verset utilise cette expression pour nier l'existence de tout protecteur ou secoureur hors de Dieu.",
              axe1_verset: "Le mot duni dans « min duni Allah » cree l'exclusion — en dehors de Dieu, vous n'avez rien. Le champ lexical (royaume, Dieu, protecteur, secoureur) montre que l'exclusion est totale. Le verset nie d'abord positivement (le royaume est a Dieu) puis negativement (en dehors de Dieu, rien). Les deux propositions se renforcent mutuellement.",
              axe2_voisins: "Le verset 106 affirmait l'omnipotence. Le verset 107 nie maintenant toute alternative a Dieu. La sequence montre que Dieu est a la fois la seule puissance et la seule ressource — il n'y a pas d'alternative.",
              axe3_sourate: "L'expression « min duni Allah » (en dehors de Dieu) apparait frequemment dans la sourate al-Baqarah. En 2:23, « vos temoins en dehors de Dieu ». En 2:165, « ceux qui prennent en dehors de Dieu des egaux ». La sourate denonce systematiquement toute recherche d'alternative a Dieu.",
              axe4_coherence: "L'expression « min duni Allah » apparait environ 70 fois dans le Coran. Elle marque toujours une negation — ce qui est en dehors de Dieu est impuissant. Le Coran utilise cette expression pour orienter l'humain vers Dieu seul.",
              axe5_frequence: "Pour la mission du khalifa, l'absence d'alternative a Dieu est une verite fondamentale. Le khalifa ne peut compter que sur Dieu — en dehors de Lui, il n'y a ni protecteur ni secoureur. La mission ne repose pas sur des alliances humaines mais sur la confiance en Dieu."
            }
          }
        }
      },
      // alh pos=12 (2nd occurrence)
      {
        word_key: "alh", position: 12, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Deuxieme occurrence d'Allah dans le verset 107 — au genitif dans l'expression « min duni Allahi » (en dehors de Dieu). Dieu est le point de reference — c'est en dehors de Lui que rien n'existe. Memes analyses que la premiere occurrence. La double mention du nom divin encadre le verset : Dieu possede le royaume (debut) et en dehors de Dieu il n'y a rien (fin).",
              axe1_verset: "Cette deuxieme occurrence complete la structure du verset — en dehors de DIEU, ni protecteur ni secoureur. Le verset est encadre par le nom divin : Dieu au debut (possesseur du royaume) et Dieu a la fin (seul recours). La repetition souligne l'exclusivite divine.",
              axe2_voisins: "Les versets 105-107 mentionnent Allah a chaque verset, souvent plusieurs fois. La repetition du nom divin martele la souverainete et l'exclusivite.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate. Chaque occurrence rappelle la centralite de Dieu dans le message coranique.",
              axe4_coherence: "La double occurrence dans un meme verset est un procede rhetorique coranique qui souligne l'exclusivite divine.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le seul recours. La double mention rappelle que la mission ne s'appuie que sur Dieu."
            }
          }
        }
      },
      // w l y pos=14
      {
        word_key: "w l y", position: 14, sense_chosen: "protecteur",
        analysis_axes: {
          sense_chosen: "protecteur",
          concept_chosen: "Proximité/Alliance",
          concepts: {
            "Proximité/Alliance": {
              status: "retenu",
              senses: ["ami intime", "etre proche", "allie", "protecteur"],
              proof_ctx: "Le mot waliyyin est un nom masculin singulier indefini genitif de la racine w-l-y. Le Lane's donne : ami intime, protecteur, allie, celui qui est proche et qui prend en charge. Le wali est celui qui combine la proximite et la protection — il est proche et il protege. L'indefini (sans article) dans un contexte negatif est general : vous n'avez aucun protecteur (quel qu'il soit) en dehors de Dieu. La negation est totale — pas un seul protecteur en dehors de Dieu.",
              axe1_verset: "Le mot waliyyin est le premier des deux mots nies — ni protecteur ni secoureur. Le champ lexical (Dieu, royaume, cieux, terre, en dehors de) montre que la negation est absolue. Le verset distingue deux types d'aide : la protection (wali, aide permanente) et le secours (nasir, aide ponctuelle). Les deux sont nies en dehors de Dieu.",
              axe2_voisins: "Le verset 105 montrait l'hostilite des adversaires. Le verset 107 montre que face a cette hostilite, le seul protecteur est Dieu. La sequence montre que l'hostilite humaine est derisoire face a la protection divine exclusive.",
              axe3_sourate: "La racine w-l-y est importante dans la sourate al-Baqarah. En 2:257, « Dieu est le protecteur (wali) de ceux qui croient ». En 2:120, « les Juifs et les Chretiens ne seront satisfaits de toi que lorsque tu suivras leur voie ». La sourate montre que la protection veritable ne vient que de Dieu.",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. Le wali de Dieu est un theme central — ceux dont Dieu est le protecteur n'ont rien a craindre. En 10:62, « les amis intimes de Dieu, nulle crainte pour eux ». Le Coran insiste sur l'exclusivite de la protection divine.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le seul protecteur. Le khalifa ne cherche pas la protection des humains mais celle de Dieu. La mission est protegee par la proximite divine, pas par les alliances humaines."
            },
            "Autorité/Gestion": {
              status: "probable",
              senses: ["gouverner", "prendre en charge"],
              proof_ctx: "Le sens d'autorite est un aspect du wali — le protecteur a aussi autorite sur ce qu'il protege. Le contexte favorise le sens de protection car le verset nie l'existence d'un protecteur (pas d'un gouverneur). Mais l'autorite eclaire la protection — le wali protege parce qu'il a l'autorite de le faire.",
              axe1_verset: "Le mot wali pourrait porter le sens de « celui qui prend en charge ». Le verset nierait alors tout gerant en dehors de Dieu — personne ne prend en charge vos affaires sauf Lui.",
              axe2_voisins: "Le verset 107 parle du royaume — le contexte d'autorite est present. Le wali comme gouverneur est coherent avec le theme du royaume.",
              axe3_sourate: "La sourate al-Baqarah traite de l'autorite a plusieurs niveaux — l'autorite divine, l'autorite prophetique, l'autorite du khalifa.",
              axe4_coherence: "Le Coran utilise wali dans les deux sens selon le contexte — protecteur et gouverneur.",
              axe5_frequence: "L'autorite et la protection sont deux faces de la meme mission — le khalifa est protege par Dieu qui est aussi son Gouverneur."
            }
          }
        }
      },
      // nsr pos=16
      {
        word_key: "nsr", position: 16, sense_chosen: "secoureur",
        analysis_axes: {
          sense_chosen: "secoureur",
          concept_chosen: "Secours/Victoire",
          concepts: {
            "Secours/Victoire": {
              status: "retenu",
              senses: ["defendre", "aider", "victoire", "secourir"],
              proof_ctx: "Le mot nasirin est un nom masculin singulier indefini genitif de la racine n-s-r. Le Lane's donne : secoureur, celui qui aide, celui qui apporte la victoire, celui qui defend. Le nasir est celui qui intervient activement pour aider dans la difficulte — il ne se contente pas d'etre present (comme le wali) mais il agit concretement. L'indefini dans un contexte negatif est general : aucun secoureur en dehors de Dieu. La negation complete celle du wali — ni protection permanente ni secours ponctuel en dehors de Dieu.",
              axe1_verset: "Le mot nasirin est le second des deux mots nies — ni protecteur ni secoureur. Le verset distingue deux types d'aide et les nie tous les deux : le wali (protecteur permanent) et le nasir (secoureur ponctuel). Que ce soit dans la protection quotidienne ou dans l'urgence, personne ne peut aider en dehors de Dieu. La double negation est totale et definitive.",
              axe2_voisins: "Le verset 105 montrait l'hostilite. Le verset 106 montrait la puissance divine. Le verset 107 montre que face a l'hostilite, seul Dieu protege et secourt. La sequence repond a l'inquietude des croyants face a l'hostilite en affirmant que Dieu est la seule ressource.",
              axe3_sourate: "La racine n-s-r est significative dans la sourate al-Baqarah. En 2:214, « quand viendra le secours de Dieu ? Le secours de Dieu est proche ». En 2:250, « notre Seigneur, accorde-nous la victoire ». La sourate montre que le secours et la victoire viennent de Dieu seul.",
              axe4_coherence: "La racine n-s-r apparait environ 158 fois dans le Coran. Le nasir (secoureur) est un attribut souvent associe a Dieu. En 3:150, « Dieu est votre protecteur et Il est le meilleur des secoureurs ». Le Coran insiste sur le fait que le secours efficace ne vient que de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le secours divin est la garantie d'aboutissement. Le khalifa ne cherche pas le secours des humains mais celui de Dieu. La mission est soutenue par le secoureur ultime — Dieu Lui-meme."
            },
            "Alliance/Soutien": {
              status: "nul",
              senses: ["partisan"],
              proof_ctx: "Le sens de partisan est passif — le partisan soutient sans agir. Le contexte est le secours actif (intervention), pas le soutien passif."
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
// FIX MISSING ROOTS — assign status retenu for nsx
// =====================================================
async function fixMissingRoots() {
  console.log('\n=== FIX MISSING ROOTS ===');

  // nsx: analysis_id=733, assign status retenu to "Abrogation/Transcription"
  const { error: nsxErr } = await supabase.from('word_meanings')
    .update({ status: 'retenu' })
    .eq('analysis_id', 733)
    .eq('concept', 'Abrogation/Transcription');
  if (nsxErr) console.error('  ERREUR fix nsx:', nsxErr.message);
  else console.log('  OK nsx -> Abrogation/Transcription = retenu');

  // xyr: analysis_id=557, verify Bien/Excellence exists
  const { data: xyrCheck } = await supabase.from('word_meanings')
    .select('id, status')
    .eq('analysis_id', 557)
    .eq('concept', 'Bien/Excellence');
  if (xyrCheck && xyrCheck.length > 0) {
    if (!xyrCheck[0].status || xyrCheck[0].status !== 'retenu') {
      const { error: xyrErr } = await supabase.from('word_meanings')
        .update({ status: 'retenu' })
        .eq('analysis_id', 557)
        .eq('concept', 'Bien/Excellence');
      if (xyrErr) console.error('  ERREUR fix xyr:', xyrErr.message);
      else console.log('  OK xyr -> Bien/Excellence = retenu');
    } else {
      console.log('  xyr -> Bien/Excellence deja retenu');
    }
  } else {
    console.log('  xyr -> Bien/Excellence non trouve, skip');
  }
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [112, 113, 114];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 105, 106, 107 ===\n');
  await fixMissingRoots();
  await processVerse(105);
  await processVerse(106);
  await processVerse(107);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V105-107 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
