const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 108
// verse_id=115, analysis_id=475
// "Voudriez-vous demander a votre Messager comme on a
//  demande auparavant a Moise ? Quiconque substitue la
//  mecreance a la foi s'egare certes du droit chemin."
// =====================================================

const verseData = {
  108: {
    verse_id: 115,
    analysis_id: 475,
    translation_arab: "Voudriez-vous questionner votre envoye comme a ete questionne Moussa auparavant ? Et quiconque substitue la couverture a la foi s'est egare du chemin egal.",
    full_translation: "Voudriez-vous demander a votre Messager comme on a demande auparavant a Moise ? Quiconque substitue la mecreance a la foi s'egare certes du droit chemin.",
    translation_explanation: `§DEMARCHE§
Le verset s'adresse aux croyants en les avertissant de ne pas questionner leur envoye de maniere excessive ou dubitative, comme Moussa avait ete questionne par son peuple. Le verbe **turiduna** est un inaccompli 2MP de la forme IV de la racine r-w-d. Le Lane's donne : vouloir, desirer, chercher a obtenir. La forme IV (arada) intensifie le desir en direction deliberee — c'est une volonte active et consciente. L'inaccompli indique une action en cours ou envisagee — la question est : est-ce que vous etes en train de vouloir ? C'est une interrogation rhetorique qui vise a les arreter avant qu'ils n'agissent. Le verbe **tas'alu** est un inaccompli 2MP de la racine s-a-l. Le Lane's donne : questionner, interroger, demander. Le questionnement est un acte directionnel — on demande a quelqu'un. L'inaccompli apres « an » (que) indique le subjonctif — « que vous questionniez ». L'objet est « rasulakum » (votre envoye) — le possessif « kum » (votre) rattache l'envoye a eux. Le nom **rasulakum** est un nom masculin singulier de la racine r-s-l avec pronom suffixe 2MP. Le Lane's donne : envoye, messager. Le suffixe « kum » marque la possession — c'est votre envoye, celui qui a ete envoye vers vous. La comparaison **kama** (comme) introduit le parallele avec Moussa. Le verbe **su'ila** est un accompli passif 3MS de la racine s-a-l. Le Lane's donne : etre questionne, etre interroge. Le passif marque que Moussa a subi le questionnement — il n'a pas demande, on lui a demande. Le nom **Musa** est le nom propre de Moussa (Moise). Le nom **qablu** est de la racine q-b-l. Le Lane's donne : avant, auparavant. « Min qablu » signifie « auparavant, jadis » — le questionnement de Moussa est un evenement du passe. Le verbe **yatabaddali** est un inaccompli 3MS de la forme V de la racine b-d-l. Le Lane's donne : substituer, echanger, prendre une chose a la place d'une autre. La forme V (tafa''ala) indique la reflexivite — il se substitue lui-meme, il fait le choix de l'echange. L'inaccompli apres « man » (quiconque) a valeur conditionnelle — quiconque substitue. Le nom **al-kufra** est un nom masculin singulier defini accusatif de la racine k-f-r. Le Lane's donne : couvrir, cacher, la nuit qui couvre. Le kufr au sens premier est l'acte de couvrir et cacher la verite — recouvrir ce qui est evident pour ne plus le voir. Le nom **al-imani** est un nom masculin singulier defini genitif de la racine a-m-n. Le Lane's donne : croire, avoir la foi, adherer. La foi (iman) est l'adhesion interieure a la verite. La preposition « bi » (par, au moyen de) indique l'echange : substituer la couverture a la foi — prendre la couverture en echange de la foi. Le verbe **dalla** est un accompli 3MS de la racine d-l-l. Le Lane's donne : s'egarer, perdre son chemin, devier. L'accompli marque que l'egarement est acheve — celui qui fait la substitution s'est deja egare. Le nom **sawa'a** est un nom masculin de la racine s-w-y. Le Lane's donne : egal, milieu, droit. Sawa' al-sabil est le milieu du chemin, la voie droite et egale. Le nom **al-sabili** est un nom masculin singulier defini genitif de la racine s-b-l. Le Lane's donne : chemin, voie, route. Le sabil est la voie que l'on emprunte — al-sabil avec l'article est LE chemin connu, la voie de reference.

§JUSTIFICATION§
**voudriez-vous** — Le sens retenu est « vouloir/desirer ». Le verbe turiduna exprime une volonte deliberee. L'interrogation rhetorique (am turiduna) demande si cette volonte existe. L'alternative « aller et venir » est ecartee car le contexte est un desir d'action, pas un mouvement physique.

**questionner** — Le sens retenu est « demander/interroger ». Le verbe tas'alu designe l'acte de poser des questions. L'alternative « mendier » est ecartee car le contexte est une interrogation adressee a un envoye, pas une mendicite.

**votre envoye** — Le sens retenu est « envoyer/messager ». Le mot rasulakum designe celui qui a ete envoye vers eux. Le suffixe possessif 2MP (kum) rattache l'envoye aux destinataires. L'alternative « pluie » est ecartee car le contexte est la transmission divine.

**comme** — Particule de comparaison qui introduit le parallele avec Moussa.

**a ete questionne** — Le sens retenu est « demander/interroger ». Le verbe su'ila est le passif de s-a-l — Moussa a subi le questionnement. Le passif souligne qu'il etait la cible des questions.

**Moussa** — Nom propre.

**auparavant** — Le sens retenu est « avant/anteriorite ». Le mot qablu situe l'evenement dans le passe. L'alternative « se tourner vers » est ecartee car le mot est ici un adverbe de temps, pas un verbe de direction.

**substitue** — Le sens retenu est « changer/substituer ». Le verbe yatabaddali designe l'echange d'une chose contre une autre. La forme V indique que le sujet fait cet echange de son propre chef. L'alternative n'existe pas — la racine b-d-l a un sens unique de changement/substitution.

**la couverture** — Le sens retenu est « couvrir/cacher ». Le mot al-kufr designe au sens premier l'acte de couvrir la verite. La traduction courante « mecreance » est un raccourci — le sens premier est la couverture, le recouvrement de ce qui est vrai. L'alternative « expiation » est ecartee car le contexte oppose kufr et iman.

**la foi** — Le sens retenu est « croire/adherer ». Le mot al-iman designe l'adhesion interieure a la verite. L'alternative « securite » est ecartee car le contexte oppose iman et kufr — foi contre couverture.

**s'est egare** — Le sens retenu est « s'egarer/devier ». Le verbe dalla designe le fait de quitter le bon chemin. L'accompli marque que l'egarement est un fait acheve. L'alternative « perir » est ecartee car le verset parle d'une deviation de chemin, pas d'une mort.

**egal** — Le sens retenu est « egal/droit ». Le mot sawa' qualifie le chemin — sawa' al-sabil est le chemin egal, le milieu de la voie, la voie droite. L'alternative « achever » est ecartee car le mot est un nom qualifiant le chemin, pas un verbe.

**du chemin** — Le sens retenu est « chemin/voie ». Le mot al-sabil designe la voie, la route. L'article defini (al-) marque que c'est LE chemin — la voie de reference. L'alternative « epi » est ecartee car le contexte est un parcours spirituel.

§CRITIQUE§
Les traductions courantes rendent « al-kufr » par « mecreance » et « al-iman » par « la foi ». Notre traduction rend « al-kufr » par « couverture » en restant au plus pres du sens premier de la racine k-f-r — couvrir, cacher. Cette difference est significative car « mecreance » est un terme theologique qui suggere un refus de croire, alors que « couverture » decrit un acte physique de recouvrir la verite. Le Coran utilise la racine k-f-r dans son sens premier : celui qui couvre cache la verite qu'il connait. Par ailleurs, « sawa' al-sabil » est rendu par « droit chemin » chez Hamidullah, alors que nous rendons par « chemin egal » pour garder le sens premier de s-w-y (egalite, milieu). Le « sawa' » du chemin est son milieu, sa partie egale — devier c'est quitter le centre.`,
    segments: [
      { fr: "est-ce que", phon: "am", arabic: "\u0623\u064e\u0645\u0652", is_particle: true, position: 0 },
      { fr: "vous voulez", pos: "verbe", phon: "turiduna", arabic: "\u062a\u064f\u0631\u0650\u064a\u062f\u064f\u0648\u0646\u064e", word_key: "rwd", is_particle: false, sense_retenu: "vouloir", position: 1 },
      { fr: "que", phon: "an", arabic: "\u0623\u064e\u0646", is_particle: true, position: 2 },
      { fr: "vous questionniez", pos: "verbe", phon: "tas'alu", arabic: "\u062a\u064e\u0633\u0652\u0640\u064e\u0654\u0644\u064f\u0648\u0627\u06df", word_key: "sal", is_particle: false, sense_retenu: "questionner", position: 3 },
      { fr: "votre envoye", pos: "nom", phon: "rasulakum", arabic: "\u0631\u064e\u0633\u064f\u0648\u0644\u064e\u0643\u064f\u0645\u0652", word_key: "rsl", is_particle: false, sense_retenu: "envoyer", position: 4 },
      { fr: "comme", phon: "kama", arabic: "\u0643\u064e\u0645\u064e\u0627", is_particle: true, position: 5 },
      { fr: "a ete questionne", pos: "verbe", phon: "su'ila", arabic: "\u0633\u064f\u0626\u0650\u0644\u064e", word_key: "sal", is_particle: false, sense_retenu: "questionner", position: 6 },
      { fr: "Moussa", phon: "Musa", arabic: "\u0645\u064f\u0648\u0633\u064e\u0649\u0670", is_particle: true, position: 7 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 8 },
      { fr: "auparavant", pos: "nom", phon: "qablu", arabic: "\u0642\u064e\u0628\u0652\u0644\u064f", word_key: "qbl", is_particle: false, sense_retenu: "avant", position: 9 },
      { fr: "et quiconque", phon: "wa-man", arabic: "\u0648\u064e\u0645\u064e\u0646", is_particle: true, position: 10 },
      { fr: "substitue", pos: "verbe", phon: "yatabaddali", arabic: "\u064a\u064e\u062a\u064e\u0628\u064e\u062f\u0651\u064e\u0644\u0650", word_key: "bdl", is_particle: false, sense_retenu: "substituer", position: 11 },
      { fr: "la couverture", pos: "nom", phon: "al-kufra", arabic: "\u0671\u0644\u0652\u0643\u064f\u0641\u0652\u0631\u064e", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 12 },
      { fr: "a la foi", pos: "nom", phon: "bi-l-imani", arabic: "\u0628\u0650\u0671\u0644\u0652\u0625\u0650\u064a\u0645\u064e\u0640\u0646\u0650", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 13 },
      { fr: "certes", phon: "fa-qad", arabic: "\u0641\u064e\u0642\u064e\u062f\u0652", is_particle: true, position: 14 },
      { fr: "s'est egare", pos: "verbe", phon: "dalla", arabic: "\u0636\u064e\u0644\u0651\u064e", word_key: "dll", is_particle: false, sense_retenu: "s'egarer", position: 15 },
      { fr: "du [chemin] egal", pos: "nom", phon: "sawa'a", arabic: "\u0633\u064e\u0648\u064e\u0622\u0621\u064e", word_key: "swy", is_particle: false, sense_retenu: "egal", position: 16 },
      { fr: "du chemin", pos: "nom", phon: "al-sabili", arabic: "\u0671\u0644\u0633\u0651\u064e\u0628\u0650\u064a\u0644\u0650", word_key: "s b l", is_particle: false, sense_retenu: "chemin", position: 17 }
    ],
    words: [
      // rwd pos=1
      {
        word_key: "rwd", position: 1, sense_chosen: "vouloir",
        analysis_axes: {
          sense_chosen: "vouloir",
          concept_chosen: "Mouvement/Recherche",
          concepts: {
            "Mouvement/Recherche": {
              status: "retenu",
              senses: ["aller et venir", "chercher a convaincre", "desirer"],
              proof_ctx: "Le verbe turiduna est un inaccompli 2MP de la forme IV de la racine r-w-d. Le Lane's donne : vouloir, desirer, chercher a obtenir. La forme IV (arada) dirige le desir vers un objet — c'est une volonte active et deliberee. Le Lane's precise que irada est la recherche de quelque chose avec l'intention de l'obtenir. L'inaccompli 2MP avec le pronom interrogatif « am » cree une interrogation rhetorique — est-ce que vous etes en train de vouloir ? La racine r-w-d porte l'idee de mouvement exploratoire (aller et venir) et de recherche — vouloir c'est chercher activement quelque chose.",
              axe1_verset: "Le verbe turiduna ouvre la question rhetorique du verset — est-ce que vous voulez questionner votre envoye comme Moussa a ete questionne ? Le champ lexical du verset (questionner, envoye, Moussa, auparavant) montre que la volonte visee est celle de poser des questions excessives ou dubitatives a l'envoye. Le verset oppose deux attitudes : vouloir questionner (attitude de doute) et croire (attitude de foi). La volonte ici est dangereuse car elle mene a la substitution de la couverture a la foi.",
              axe2_voisins: "Le verset 107 rappelait que Dieu a la souverainete des cieux et de la terre. Le verset 108 questionne la volonte des croyants — veulent-ils questionner l'envoye au lieu de croire ? Le verset 109 montrera que beaucoup parmi les gens du Livre voudraient (wadda) les faire revenir a la couverture. La volonte est le theme implicite des versets 108-109 — la volonte humaine face a la volonte divine.",
              axe3_sourate: "La racine r-w-d apparait dans la sourate al-Baqarah dans le contexte de la volonte divine et humaine. En 2:26, « Dieu ne veut (yurid) par cette parabole que ». En 2:185, « Dieu veut pour vous la facilite ». La sourate oppose la volonte divine (orientee vers le bien) et la volonte humaine (parfois orientee vers le doute).",
              axe4_coherence: "La racine r-w-d apparait environ 139 fois dans le Coran. La forme IV (arada/yurid) est la plus frequente. En 4:27, « Dieu veut accepter votre repentir ». En 33:33, « Dieu veut eloigner de vous la souillure ». Le Coran montre que la volonte divine est toujours orientee vers la purification et le bien, tandis que la volonte humaine peut devier.",
              axe5_frequence: "Pour la mission du khalifa, la volonte est l'outil premier de la mission. Vouloir questionner avec doute au lieu de croire avec certitude est une deviation de la mission. Le khalifa doit orienter sa volonte vers la foi et la confiance envers l'envoye, pas vers le questionnement dubitatif qui a egare les peuples precedents."
            },
            "Douceur/Lenteur": {
              status: "nul",
              senses: ["agir doucement"],
              proof_ctx: "Le sens de douceur est un usage secondaire de r-w-d. Le contexte est une volonte active et deliberee (forme IV arada), pas une action lente ou douce."
            }
          }
        }
      },
      // sal pos=3
      {
        word_key: "sal", position: 3, sense_chosen: "questionner",
        analysis_axes: {
          sense_chosen: "questionner",
          concept_chosen: "Requête/Interrogation",
          concepts: {
            "Requête/Interrogation": {
              status: "retenu",
              senses: ["questionner", "interroger", "demander"],
              proof_ctx: "Le verbe tas'alu est un inaccompli 2MP de la racine s-a-l. Le Lane's donne : questionner, interroger, demander. Le questionnement est un acte directionnel — on s'adresse a quelqu'un pour obtenir une reponse. L'inaccompli apres « an » a valeur de subjonctif — « que vous questionniez ». Le verbe apparait deux fois dans le verset : actif (tas'alu, vous questionnez) et passif (su'ila, a ete questionne). Cette double occurrence montre que le schema se repete — le questionnement excessif est un comportement recurrent d'un peuple a l'autre.",
              axe1_verset: "Le verbe tas'alu est l'action que le verset cherche a decourager. Le champ lexical (vouloir, questionner, envoye, Moussa) montre que le questionnement vise est celui adresse a l'envoye — des questions excessives ou dubitatives. Le verset etablit un parallele entre le questionnement actuel (tas'alu rasulakum) et le questionnement passe (su'ila Musa). Ce parallele montre que le comportement se repete — chaque peuple questionne son envoye au lieu de croire.",
              axe2_voisins: "Le verset 104 demandait de ne pas dire « ra'ina » (avec ambiguite) mais « unzurna » (regarde-nous). Le verset 108 poursuit le meme theme — ne pas questionner l'envoye de maniere problematique. Les versets 104-108 traitent de la maniere de s'adresser a l'envoye : avec respect et foi, pas avec doute et ambiguite.",
              axe3_sourate: "La racine s-a-l apparait dans la sourate al-Baqarah dans le contexte des questions posees au Prophete. En 2:186, « quand Mes serviteurs te questionnent a Mon sujet ». En 2:189, « ils te questionnent sur les nouvelles lunes ». En 2:215, « ils te questionnent sur ce qu'ils doivent depenser ». La sourate montre que le questionnement peut etre legitime (recherche de connaissance) ou problematique (doute et defiance).",
              axe4_coherence: "La racine s-a-l apparait environ 129 fois dans le Coran. En 5:101, « ne posez pas de questions sur des choses qui, si elles vous etaient montrees, vous feraient du mal ». En 2:108, le parallele avec Moussa rappelle les demandes excessives des Banu Isra'il — voir le veau d'or, voir Dieu, etc. Le Coran avertit contre le questionnement qui mene au doute plutot qu'a la foi.",
              axe5_frequence: "Pour la mission du khalifa, le questionnement est un outil de connaissance — mais il peut devenir un obstacle quand il est motive par le doute. Le khalifa doit poser des questions pour comprendre, pas pour defier. Le bon questionnement cherche la lumiere, le mauvais questionnement cherche l'echappatoire."
            }
          }
        }
      },
      // rsl pos=4
      {
        word_key: "rsl", position: 4, sense_chosen: "envoyer",
        analysis_axes: {
          sense_chosen: "envoyer",
          concept_chosen: "Envoi/Message",
          concepts: {
            "Envoi/Message": {
              status: "retenu",
              senses: ["envoyer", "liberer", "messager", "message"],
              proof_ctx: "Le mot rasulakum est un nom masculin singulier de la racine r-s-l avec pronom suffixe 2MP. Le Lane's donne : envoyer, liberer, celui qui est envoye. Le suffixe « kum » (votre) rattache l'envoye aux destinataires — c'est votre envoye, celui qui a ete specifiquement mandate pour vous. La distinction avec le sens de pluie (nul) est evidente : le contexte est la transmission divine, pas la meteorologie. Le possessif marque une relation directe — l'envoye leur appartient en tant que guide.",
              axe1_verset: "Le mot rasulakum est l'objet du questionnement excessif. Le champ lexical (vouloir, questionner, envoye, Moussa) montre que l'envoye est la cible des questions. Le possessif « kum » (votre) souligne que l'envoye leur a ete specifiquement envoye — questionner son propre envoye avec defiance c'est rejeter le don qui leur est fait. Le verset oppose l'attitude de questionnement (envers l'envoye) et la substitution qui en decoule (couverture a la place de foi).",
              axe2_voisins: "Le verset 101 mentionnait « un envoye de chez Dieu » (rasulun min 'indi Allah). Le verset 108 precise « votre envoye » (rasulakum) — le possessif personnalise la relation. Les versets 101-108 montrent la progression : un envoye vient de Dieu (101), il est specifiquement le votre (108), le questionner avec doute c'est repeter l'erreur des anciens.",
              axe3_sourate: "La racine r-s-l est structurante dans la sourate al-Baqarah. En 2:87, les messagers se succedent apres Moussa. En 2:101, un envoye vient confirmer. En 2:108, l'envoye est possede par la communaute (rasulakum). La sourate construit une relation croissante entre l'envoye et ses destinataires — de l'anonymat a la possession.",
              axe4_coherence: "La racine r-s-l apparait environ 513 fois dans le Coran. L'expression « rasulukum » (votre envoye) apparait pour marquer la responsabilite des destinataires. En 43:29, « je leur ai donne jouissance ainsi qu'a leurs peres jusqu'a ce que leur vint la verite et un envoye clair ». Le Coran lie la reception de l'envoye a la responsabilite de croire.",
              axe5_frequence: "Pour la mission du khalifa, l'envoye est le guide de la mission. Questionner le guide avec defiance au lieu de le suivre avec confiance est une trahison de la mission. Le khalifa doit accueillir les instructions de l'envoye comme un don, pas comme un objet de doute."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est un usage physique de r-s-l. Le contexte est la transmission divine et le questionnement de l'envoye, pas la meteorologie."
            }
          }
        }
      },
      // sal pos=6 (2nd occurrence — passive)
      {
        word_key: "sal", position: 6, sense_chosen: "questionner",
        analysis_axes: {
          sense_chosen: "questionner",
          concept_chosen: "Requête/Interrogation",
          concepts: {
            "Requête/Interrogation": {
              status: "retenu",
              senses: ["questionner", "interroger", "demander"],
              proof_ctx: "Deuxieme occurrence de s-a-l dans le verset — ici au passif (su'ila, a ete questionne). Le Lane's donne : etre questionne, etre interroge. Le passif 3MS marque que Moussa a subi le questionnement de son peuple. La comparaison « kama su'ila Musa » (comme a ete questionne Moussa) fait le lien entre le passe et le present — le meme schema se repete. Memes analyses fondamentales que pour la premiere occurrence en position 3.",
              axe1_verset: "Le verbe su'ila fait echo a tas'alu — le meme questionnement, la meme racine, mais au passif et au passe. Le verset construit un parallele temporel : vous (actif, present) / Moussa (passif, passe). Le questionnement de Moussa est un fait acheve (accompli passif) — il a ete questionne et les consequences sont connues. Le verset avertit de ne pas repeter ce qui a deja produit de mauvais resultats.",
              axe2_voisins: "Les versets 51-61 de la sourate detaillent les demandes excessives des Banu Isra'il a Moussa — voir Dieu ouvertement, le veau d'or, les excuses pour ne pas entrer en terre promise. Le verset 108 rappelle ces episodes en condensant le schema en un seul parallele. Le passe (su'ila Musa) renvoie a toute cette serie d'episodes.",
              axe3_sourate: "La sourate al-Baqarah est la sourate qui parle le plus de Moussa et de son peuple. Les versets 40-93 detaillent l'histoire des Banu Isra'il avec Moussa. Le verset 108 condense cette histoire en un avertissement : ne repetez pas ce schema de questionnement excessif.",
              axe4_coherence: "Le Coran utilise le passif de s-a-l pour montrer que les envoyes sont les cibles du questionnement. En 2:108, Moussa a ete questionne. En 17:101, Pharaon interroge Moussa. Les envoyes subissent les questions de ceux qui doutent — c'est un schema recurrent.",
              axe5_frequence: "Pour la mission du khalifa, Moussa est l'exemple de l'envoye qui a endure le questionnement excessif de son peuple. Le khalifa doit tirer la lecon de ce precedent — questionner l'envoye avec doute mene a l'egarement. Le passe est un avertissement pour le present."
            }
          }
        }
      },
      // qbl pos=9
      {
        word_key: "qbl", position: 9, sense_chosen: "avant",
        analysis_axes: {
          sense_chosen: "avant",
          concept_chosen: "Antériorité/Passé",
          concepts: {
            "Antériorité/Passé": {
              status: "retenu",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le mot qablu est un nom de la racine q-b-l dans la construction « min qablu » (d'avant, auparavant). Le Lane's donne : avant, anterieurement, ce qui precede dans le temps. La construction « min qablu » est figee en arabe — elle signifie « auparavant, jadis ». L'anteriorite situe le questionnement de Moussa dans le passe — c'est un evenement revolu qui sert d'avertissement pour le present. La distinction avec l'orientation (nul) est claire : le mot est ici un adverbe de temps, pas un verbe de direction.",
              axe1_verset: "Le mot qablu complete la comparaison — « comme a ete questionne Moussa auparavant ». Le champ lexical (questionner, envoye, Moussa, avant) construit un parallele temporel. L'anteriorite n'est pas neutre — elle sert d'avertissement. Ce qui s'est passe avant avec Moussa montre les consequences du questionnement excessif. Le verset utilise le passe comme lecon pour le present.",
              axe2_voisins: "Le verset 104 mentionnait que ceux qui couvrent ont prepare un chatiment douloureux. Le verset 108 situe le questionnement excessif dans une histoire plus longue — auparavant, Moussa a subi le meme schema. Les versets voisins construisent un argument historique : le passe montre que le questionnement excessif mene a l'egarement.",
              axe3_sourate: "La racine q-b-l au sens d'anteriorite est utilisee dans la sourate pour situer les evenements passes. En 2:25, « comme provision semblable a ce qu'ils avaient auparavant ». En 2:89, « alors qu'auparavant ils demandaient la victoire ». La sourate utilise « min qablu » pour relier le passe au present et montrer que les schemas se repetent.",
              axe4_coherence: "L'expression « min qablu » apparait environ 70 fois dans le Coran. Elle sert systematiquement a relier un evenement passe a la situation presente comme avertissement ou lecon. En 2:108, elle relie le questionnement de Moussa au questionnement actuel pour montrer que l'erreur se repete.",
              axe5_frequence: "Pour la mission du khalifa, l'anteriorite est une source de lecons. Ce qui s'est passe avant est un guide — les erreurs passees doivent eclairer les choix presents. Le khalifa doit connaitre l'histoire pour ne pas repeter les erreurs des peuples precedents."
            },
            "Réception/Accueil": {
              status: "nul",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Le sens de reception est hors sujet — le mot est ici un adverbe de temps (auparavant) dans la construction figee « min qablu », pas un verbe d'accueil."
            }
          }
        }
      },
      // bdl pos=11
      {
        word_key: "bdl", position: 11, sense_chosen: "substituer",
        analysis_axes: {
          sense_chosen: "substituer",
          concept_chosen: "Changement/Substitution",
          concepts: {
            "Changement/Substitution": {
              status: "retenu",
              senses: ["changer", "remplacer", "substituer", "echange"],
              proof_ctx: "Le verbe yatabaddali est un inaccompli 3MS de la forme V de la racine b-d-l. Le Lane's donne : substituer, echanger, prendre une chose a la place d'une autre. La forme V (tafa''ala) indique la reflexivite — le sujet fait l'echange de son propre chef. L'inaccompli apres « man » (quiconque) a valeur conditionnelle — quiconque se substitue. La substitution est un acte delibere — on remplace volontairement une chose par une autre. Ici la substitution est de la couverture a la place de la foi — un echange catastrophique.",
              axe1_verset: "Le verbe yatabaddali est le pivot de la deuxieme partie du verset. Le champ lexical (substituer, couverture, foi, s'egarer, chemin) montre que la substitution est la cause de l'egarement. Le verset construit une chaine causale : questionner avec doute → substituer la couverture a la foi → s'egarer du chemin. La substitution est l'acte central qui transforme le questionnement en egarement.",
              axe2_voisins: "Le verset 59 montrait ceux qui ont substitue (baddala) une parole autre que celle qui leur avait ete dite. Le verset 108 reprend le meme schema de substitution — remplacer ce qui est bon par ce qui est mauvais. Les versets de la sourate montrent que la substitution est un comportement recurrent de ceux qui s'egarent.",
              axe3_sourate: "La racine b-d-l apparait dans la sourate al-Baqarah dans le contexte de la substitution du bien par le mal. En 2:59, « ceux qui avaient ete injustes substituerent une parole ». En 2:211, « quiconque substitue le bienfait de Dieu apres qu'il lui est parvenu ». La sourate montre que la substitution est un schema recurrent qui mene a la punition.",
              axe4_coherence: "La racine b-d-l apparait environ 44 fois dans le Coran. En 14:28, « ceux qui ont substitue le bienfait de Dieu par la couverture ». Le parallele avec 2:108 est frappant — dans les deux cas, la substitution implique la couverture (kufr). Le Coran presente la substitution du bien par le mal comme un choix delibere aux consequences graves.",
              axe5_frequence: "Pour la mission du khalifa, la substitution est la trahison de la mission. Substituer la couverture a la foi c'est remplacer la lumiere par l'obscurite. Le khalifa doit veiller a ne jamais substituer ce qui est inferieur a ce qui est superieur — garder la foi comme fondement inalterable de la mission."
            }
          }
        }
      },
      // kfr pos=12
      {
        word_key: "kfr", position: 12, sense_chosen: "couvrir",
        analysis_axes: {
          sense_chosen: "couvrir",
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le nom al-kufra est un nom masculin singulier defini accusatif de la racine k-f-r. Le Lane's donne : couvrir, cacher, recouvrir. Le sens premier de k-f-r est physique — le kufr est l'acte de couvrir et cacher quelque chose. Le paysan est appele kafir car il couvre la graine de terre. La nuit est kafira car elle couvre le jour. Le kufr coranique est l'acte de couvrir la verite qu'on connait — la recouvrir pour ne plus la voir. L'article defini (al-) marque que c'est LA couverture connue — l'acte de couvrir la verite divine.",
              axe1_verset: "Le mot al-kufra est l'objet de la substitution — ce que l'on prend a la place de la foi. Le champ lexical (substituer, couverture, foi, s'egarer) montre que la couverture est l'oppose de la foi. La couverture (couvrir la verite) s'oppose a la foi (adherer a la verite). Le verset montre que cette substitution est un choix delibere — on couvre activement ce qu'on devrait decouvrir. L'egarement est la consequence directe de cet acte de couverture.",
              axe2_voisins: "Le verset 102 parlait de ce que les demons ont couvert (kafaru) — les demons couvrent la verite par la magie. Le verset 104 mentionnait la couverture (kafirina) associee au chatiment. Le verset 108 montre que substituer la couverture a la foi est un choix personnel qui mene a l'egarement. Les versets voisins construisent un tableau de la couverture sous ses differentes formes.",
              axe3_sourate: "La racine k-f-r est une des plus frequentes de la sourate al-Baqarah. En 2:6, « ceux qui couvrent, les avertir ou ne pas les avertir est egal ». En 2:26, les kuffar sont ceux qui couvrent. La sourate utilise k-f-r dans son sens premier de couverture pour montrer que le rejet de la verite est un acte de dissimulation deliberee.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le sens premier de couverture est present partout — le kafir est celui qui couvre la verite. En 57:20, « comme une pluie dont la vegetation rejouissait les kuffar » — ici les kuffar sont les paysans qui couvrent la graine. Le Coran joue sur la polysemie : couvrir la graine (agriculture) et couvrir la verite (rejet).",
              axe5_frequence: "Pour la mission du khalifa, la couverture est l'antithese de la mission. Le khalifa est charge de decouvrir et manifester la verite, pas de la couvrir. Substituer la couverture a la foi c'est inverser la mission — cacher au lieu de reveler."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["renier un bienfait", "rejeter", "mecreant", "etre ingrat", "nier"],
              proof_ctx: "Le rejet et l'ingratitude sont des consequences de la couverture. Quand on couvre la verite, on rejette ce qui est vrai et on se montre ingrat envers celui qui l'a donnee. Le verset parle de substituer al-kufr a al-iman — la couverture (acte de cacher) entraine le rejet (consequence). Le mot al-kufr porte les deux dimensions — la couverture est l'acte, le rejet est la consequence.",
              axe1_verset: "Le mot al-kufra pourrait aussi porter le sens de rejet — rejeter la verite en la substituant a la foi. Mais le contexte de substitution (prendre une chose a la place d'une autre) s'accorde mieux avec la couverture (couvrir la verite) qu'avec le simple rejet. On ne substitue pas un rejet — on substitue un recouvrement.",
              axe2_voisins: "Les versets voisins utilisent les deux dimensions de k-f-r — la couverture (acte) et le rejet (consequence). Le verset 108 s'inscrit dans cette double lecture mais privilegie la couverture comme acte premier.",
              axe3_sourate: "La sourate utilise k-f-r dans ses deux sens. En 2:6, la couverture est un etat. En 2:89, le rejet est une action. Le verset 108 combine les deux — la couverture est substituee a la foi, ce qui constitue un rejet.",
              axe4_coherence: "Le Coran lie constamment la couverture et le rejet — couvrir la verite c'est la rejeter. Les deux sens sont complementaires et s'eclairent mutuellement.",
              axe5_frequence: "Le rejet est une consequence de la couverture pour le khalifa — couvrir la verite mene a la rejeter. Les deux sens sont lies dans la pratique de la mission."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les peches"],
              proof_ctx: "Le sens d'expiation est hors sujet — le verset oppose al-kufr a al-iman dans un contexte de substitution, pas d'expiation des peches."
            }
          }
        }
      },
      // amn pos=13
      {
        word_key: "amn", position: 13, sense_chosen: "croire",
        analysis_axes: {
          sense_chosen: "croire",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["accepter comme vrai", "croire", "avoir la foi", "confirmer", "croyant"],
              proof_ctx: "Le nom al-imani est un nom masculin singulier defini genitif de la racine a-m-n. Le Lane's donne : croire, avoir la foi, adherer a la verite. L'iman est l'adhesion interieure et la conviction profonde — c'est un etat permanent de certitude. La preposition « bi » (par, au moyen de) dans « bi-l-imani » indique que la foi est ce qui est donne en echange dans la substitution. On substitue la couverture a la foi — on prend la couverture et on abandonne la foi. L'article defini (al-) marque que c'est LA foi — la foi complete et connue.",
              axe1_verset: "Le mot al-imani est l'objet perdu dans la substitution — ce que l'on donne en echange de la couverture. Le champ lexical (substituer, couverture, foi, s'egarer) montre que la foi est le bien supreme qui est echange contre un mal. Le verset construit une opposition binaire : couverture (mal) contre foi (bien). Perdre la foi c'est perdre le fondement — tout le reste (chemin, direction) s'effondre avec.",
              axe2_voisins: "Le verset 103 disait « si seulement ils croyaient (amanu) et se premunissaient ». Le verset 108 montre l'inverse — substituer la couverture a la foi. Les versets 103 et 108 encadrent un bloc sur la foi et son contraire. Le verset 109 montrera que les gens du Livre veulent les faire revenir de la foi (iman) a la couverture (kufr).",
              axe3_sourate: "La racine a-m-n est une des racines les plus frequentes de la sourate al-Baqarah. En 2:3-4, les croyants sont decrits par leur foi. En 2:62, « quiconque croit en Dieu et au Jour dernier ». La sourate construit la foi comme le critere fondamental de distinction entre les humains.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. L'opposition iman/kufr est structurante du message coranique. En 2:108, la substitution de l'un par l'autre est presentee comme l'egarement ultime. Le Coran montre que la foi est le bien le plus precieux — la perdre c'est tout perdre.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le fondement de la mission. Sans foi, pas de mission. Substituer la couverture a la foi c'est detruire le fondement meme de l'existence du khalifa. Le khalifa doit proteger sa foi comme son bien le plus precieux."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "etre en securite", "confier", "se sentir en securite", "fidele", "lieu sur"],
              proof_ctx: "La securite et la confiance sont des fruits de la foi. Quand on croit (iman), on est en securite (amn) car on a confiance en la verite. Le Lane's lie les deux sens — l'iman est aussi un etat de securite interieure. Le mot al-iman dans le verset porte les deux dimensions — la foi comme adhesion et la securite comme etat resultant.",
              axe1_verset: "Le mot al-imani pourrait aussi porter le sens de securite — substituer la couverture a la securite c'est perdre sa protection. Mais le contexte de substitution kufr/iman s'accorde mieux avec l'opposition couvrir/croire qu'avec l'opposition couvrir/etre en securite. La foi est le sens premier dans ce contexte d'opposition theologique.",
              axe2_voisins: "Le verset 103 mentionnait la foi et la premunition. La securite est liee a la premunition (taqwa). Le verset 108 se concentre sur la foi comme adhesion a la verite, pas comme etat de securite.",
              axe3_sourate: "La sourate utilise a-m-n dans les deux sens. En 2:125, la securite du sanctuaire (amnan). En 2:108, la foi comme adhesion. Les deux sens coexistent mais le contexte de chaque verset determine lequel domine.",
              axe4_coherence: "Le Coran lie foi et securite — celui qui croit est en securite aupres de Dieu. Mais dans le contexte d'opposition kufr/iman, c'est le sens de foi qui domine.",
              axe5_frequence: "La securite est un fruit de la foi pour le khalifa — croire apporte la securite interieure. Les deux sens se completent dans la pratique de la mission."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["accorder la securite", "proteger"],
              proof_ctx: "Le sens de garantie/protection est hors sujet — le verset parle de l'iman comme objet de substitution (ce qu'on perd), pas comme un acte de protection."
            }
          }
        }
      },
      // dll pos=15
      {
        word_key: "dll", position: 15, sense_chosen: "s'egarer",
        analysis_axes: {
          sense_chosen: "s'egarer",
          concept_chosen: "Égarement/Déviation",
          concepts: {
            "Égarement/Déviation": {
              status: "retenu",
              senses: ["errer", "perdre son chemin", "faire egarer", "etre egare", "confusion", "perplexite", "feindre l'egarement", "demander l'egarement", "route qui egare", "terre qui egare", "cause d'egarement", "devier", "s'egarer"],
              proof_ctx: "Le verbe dalla est un accompli 3MS de la racine d-l-l. Le Lane's donne : s'egarer, perdre son chemin, devier de la direction correcte. L'egarement suppose qu'il y avait un chemin connu et qu'on l'a quitte. L'accompli marque que l'egarement est acheve — celui qui substitue la couverture a la foi est deja egare. L'egarement n'est pas un accident — c'est le resultat direct de la substitution. Le chemin existait, la foi y conduisait, et la substitution en a detourne.",
              axe1_verset: "Le verbe dalla est la consequence de la substitution. Le champ lexical (substituer, couverture, foi, s'egarer, chemin egal) construit une chaine causale complete. Le verset montre que l'egarement n'est pas un mystere — il a une cause precise (la substitution) et un resultat mesurable (quitter le chemin egal). L'accompli (dalla, s'est egare) indique que la cause est achevee des que la substitution est faite — pas de delai entre la substitution et l'egarement.",
              axe2_voisins: "Le verset 16 disait « ce sont eux qui ont fait le commerce de l'egarement au prix de la guidance ». Le verset 108 reprend le meme schema — substituer la couverture a la foi mene a l'egarement. Les versets 16 et 108 se font echo — l'egarement est presente comme le resultat d'un echange desastreux.",
              axe3_sourate: "La racine d-l-l est structurante dans la sourate al-Baqarah. En 2:16, ils echangent la guidance contre l'egarement. En 2:175, « ce sont ceux qui ont achete l'egarement au prix de la guidance ». En 2:108, la substitution de la couverture a la foi est une autre forme du meme echange. La sourate montre que l'egarement est toujours un choix — on quitte volontairement le chemin.",
              axe4_coherence: "La racine d-l-l apparait environ 191 fois dans le Coran. En 1:7, le chemin de ceux qui ne sont pas egares. En 2:108, s'egarer du chemin egal. Le Coran lie l'egarement au choix delibere de quitter la verite. L'egarement n'est pas une fatalite — c'est une consequence d'un acte volontaire.",
              axe5_frequence: "Pour la mission du khalifa, l'egarement est l'echec de la mission. S'egarer du chemin c'est manquer la destination. Le khalifa doit rester sur le chemin egal — la substitution de la couverture a la foi est le piege qui fait devier de la mission."
            },
            "Disparition/Perte": {
              status: "probable",
              senses: ["perir", "mourir", "etre enterre", "perdre quelque chose", "etat de perdition", "futilite", "vain", "devenir poussiere", "disparaitre", "se perdre"],
              proof_ctx: "La disparition et la perte sont des consequences de l'egarement. Quand on s'egare du chemin, on se perd — on disparait de la voie correcte. Le Lane's lie les deux sens — dalla signifie a la fois s'egarer (quitter le chemin) et se perdre (etre introuvable). Le verset 108 utilise dalla dans le contexte du chemin (sawa' al-sabil) — l'egarement est spatial, pas mortel.",
              axe1_verset: "Le verbe dalla pourrait aussi porter le sens de perte — perdre le chemin. Mais le contexte « dalla sawa'a al-sabili » (s'egarer du chemin egal) est clairement spatial — c'est une deviation de direction, pas une disparition physique. Le sens d'egarement est plus precis que le sens de perte.",
              axe2_voisins: "Les versets voisins traitent de l'egarement comme deviation de chemin, pas comme disparition physique. Le contexte confirme le sens d'egarement.",
              axe3_sourate: "La sourate utilise d-l-l principalement au sens d'egarement de chemin. Le sens de perte/disparition est secondaire dans cette sourate.",
              axe4_coherence: "Le Coran utilise dalla au sens de perte en 32:10 (« quand nous nous serons perdus dans la terre »). Mais en 2:108, le complement « sawa' al-sabil » impose le sens d'egarement de chemin.",
              axe5_frequence: "La perte est une consequence ultime de l'egarement — s'egarer du chemin mene a se perdre completement. Les deux sens sont lies dans la trajectoire de la mission."
            },
            "Oubli/Enterrement": {
              status: "nul",
              senses: ["enterrer", "cacher dans le sol", "eau souterraine", "restes d'eau", "oublier"],
              proof_ctx: "Le sens d'enterrement est hors sujet — le verset parle d'egarement de chemin, pas d'un acte d'enterrer ou de cacher."
            }
          }
        }
      },
      // swy pos=16
      {
        word_key: "swy", position: 16, sense_chosen: "egal",
        analysis_axes: {
          sense_chosen: "egal",
          concept_chosen: "Égalité/Équivalence",
          concepts: {
            "Égalité/Équivalence": {
              status: "retenu",
              senses: ["etre egal", "equivalent", "meme chose", "indifferent", "egaliser", "aplanir"],
              proof_ctx: "Le nom sawa'a est un nom masculin de la racine s-w-y. Le Lane's donne : egal, milieu, centre, droit. Sawa' al-sabil est le milieu du chemin — la partie egale et droite, le centre de la voie. Le Lane's precise que sawa' al-sabil est la partie du chemin qui est equidistante des deux bords — le juste milieu. C'est la voie egale, ni deviee a droite ni deviee a gauche. S'egarer de sawa' al-sabil c'est quitter le centre pour les marges.",
              axe1_verset: "Le mot sawa'a qualifie le chemin (al-sabil) dont on s'egare. Le champ lexical (s'egarer, egal, chemin) construit l'image d'une voie droite dont on devie. L'egalite du chemin est son trait definissant — c'est un chemin qui ne penche ni d'un cote ni de l'autre. Le verset montre que l'egarement est la perte de cet equilibre — quitter le centre pour les extremes.",
              axe2_voisins: "Le verset 143 mentionnera « une communaute du juste milieu » (ummatan wasatan). Le concept de milieu (wasat) et d'egalite (sawa') sont proches — les deux designent le centre, l'equilibre. Le verset 108 annonce le theme du juste milieu qui sera developpe plus tard dans la sourate.",
              axe3_sourate: "La racine s-w-y apparait dans la sourate al-Baqarah dans plusieurs contextes. En 2:6, « les avertir ou ne pas les avertir est egal (sawa') pour eux ». Ici sawa' signifie « egal/indifferent ». En 2:108, sawa' qualifie le chemin — le sens est « egal/droit ». La sourate utilise sawa' pour marquer l'equilibre et la justesse.",
              axe4_coherence: "L'expression « sawa' al-sabil » (le chemin egal) est propre a ce verset dans le Coran. L'expression est construite sur le meme modele que « sirat al-mustaqim » (le chemin droit) — les deux designent la voie juste. Le Coran utilise differentes expressions pour qualifier le bon chemin : droit (mustaqim), egal (sawa'), clair (mubin).",
              axe5_frequence: "Pour la mission du khalifa, le chemin egal est la voie de la mission. L'egalite du chemin signifie l'equilibre — ne pas devier vers les extremes. Le khalifa doit marcher au centre du chemin, la ou il est egal et droit."
            }
          }
        }
      },
      // s b l pos=17
      {
        word_key: "s b l", position: 17, sense_chosen: "chemin",
        analysis_axes: {
          sense_chosen: "chemin",
          concept_chosen: "Voie/Chemin",
          concepts: {
            "Voie/Chemin": {
              status: "retenu",
              senses: ["chemin", "voie", "cause (fi sabili)"],
              proof_ctx: "Le nom al-sabili est un nom masculin singulier defini genitif de la racine s-b-l. Le Lane's donne : chemin, voie, route. Le sabil est la voie que l'on emprunte pour atteindre une destination. L'article defini (al-) marque que c'est LE chemin — la voie de reference, le chemin connu. La construction « sawa' al-sabil » (le milieu/egal du chemin) designe la partie droite et centrale de la voie. Le sabil est concret (une route physique) et abstrait (une voie spirituelle). En 2:108, s'egarer du chemin est une image de la deviation spirituelle.",
              axe1_verset: "Le mot al-sabili est le complement de dalla (s'egarer) — on s'egare du chemin. Le champ lexical (s'egarer, egal, chemin) forme l'image finale du verset : quitter la voie droite. Le chemin est la destination de la mission — le but vers lequel on marche. Le verset montre que la substitution de la couverture a la foi fait perdre le chemin. Sans foi, pas de direction.",
              axe2_voisins: "Le verset 154 dira « dans le chemin de Dieu (fi sabili Allah) ». Le verset 108 parle du chemin sans le rattacher explicitement a Dieu — mais le contexte (envoye, foi, couverture) montre que c'est le chemin de la verite divine. Les versets de la sourate construisent le chemin comme la voie de Dieu.",
              axe3_sourate: "La racine s-b-l apparait dans la sourate al-Baqarah dans le contexte de la voie de Dieu. En 2:154, « ceux qui meurent dans le chemin de Dieu ». En 2:190, « combattez dans le chemin de Dieu ». En 2:195, « depensez dans le chemin de Dieu ». La sourate presente le sabil comme la voie de l'engagement envers Dieu.",
              axe4_coherence: "La racine s-b-l apparait environ 176 fois dans le Coran. Le sabil est la voie de la guidance — en 1:6, « guide-nous vers le chemin droit ». En 2:108, s'egarer du chemin egal est l'inverse de la guidance. Le Coran oppose constamment la guidance (vers le chemin) et l'egarement (hors du chemin).",
              axe5_frequence: "Pour la mission du khalifa, le chemin est la mission elle-meme. Le sabil est la voie que le khalifa doit suivre pour accomplir son mandat. S'egarer du chemin c'est echouer dans la mission. Le chemin est egal (sawa') — il ne penche pas. Le khalifa doit rester au centre."
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

  const verseIds = [115];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 108 ===\n');
  await processVerse(108);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V108 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
