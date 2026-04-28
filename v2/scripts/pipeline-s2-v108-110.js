const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 108, 109, 110
// 2:108 → verse_id=115, analysis_id=475
// 2:109 → verse_id=116, analysis_id=477
// 2:110 → verse_id=117, analysis_id=476
// =====================================================

const verseData = {
  // =====================================================
  // VERSET 2:108
  // "Voudriez-vous demander a votre Messager comme on a
  //  demande auparavant a Moussa ? Quiconque substitue la
  //  mecreance a la foi s'egare certes du droit chemin."
  // =====================================================
  108: {
    verse_id: 115,
    analysis_id: 475,
    translation_arab: "Ou bien voulez-vous demander a votre envoye comme on a demande a Moussa auparavant ? Et quiconque substitue la couverture a la foi s'est certes egare du milieu du chemin.",
    full_translation: "Voudriez-vous demander a votre Messager comme on a demande auparavant a Mousse ? Quiconque substitue la mecreance a la foi s'egare certes du droit chemin.",
    translation_explanation: `§DEMARCHE§
Le verset est une question rhetorique suivie d'un avertissement. Le verbe **turiduna** est un inaccompli 2MP de la forme IV de la racine r-w-d. Le Lane's donne : vouloir, desirer, chercher a obtenir. La forme IV (arada) intensifie le desir — c'est un desir delibere et actif. L'inaccompli avec la 2eme personne du pluriel interpelle directement les destinataires. Le verbe **tas'alu** est un inaccompli 2MP de la racine s-a-l. Le Lane's donne : demander, questionner, interroger. L'inaccompli apres « an » (que) exprime le subjonctif — le verset demande s'ils veulent demander. Le nom **rasulakum** est un nom masculin singulier de la racine r-s-l avec pronom suffixe 2MP. Le Lane's donne : envoye, messager. Le suffixe « kum » (votre) rattache l'envoye aux destinataires — c'est votre envoye, celui qui vous est envoye specifiquement. Le verbe passif **su'ila** est un accompli passif 3MS de la racine s-a-l. Le Lane's donne : etre interroge, recevoir une demande. Le passif montre que Moussa a recu des demandes — il n'a pas demande, on lui a demande. Le nom **Musa** est le nom propre du prophete Moussa. Le nom **qablu** est un adverbe de temps de la racine q-b-l. Le Lane's donne : avant, auparavant. L'anteriorite situe la demande dans le passe — ce qui a ete fait a Moussa est un precedent. Le verbe **yatabaddali** est un inaccompli 3MS de la forme V de la racine b-d-l. Le Lane's donne : substituer, echanger, remplacer. La forme V (tafa''ala) indique que le sujet effectue l'action sur lui-meme — il se substitue quelque chose. L'inaccompli avec « man » (quiconque) cree une generalite — quiconque fait cela. Le nom **al-kufra** est un nom masculin singulier defini accusatif de la racine k-f-r. Le Lane's donne : couvrir, cacher, recouvrir. Le kufr est l'acte de couvrir la verite, de la dissimuler. L'article defini marque que c'est la couverture connue — le rejet delibere. Le nom **al-imani** est un nom masculin singulier defini genitif de la racine a-m-n. Le Lane's donne : foi, adhesion, croyance. La preposition « bi » (par/avec) + l'iman montre que la substitution se fait a la place de la foi — on remplace la foi par la couverture. Le verbe **dalla** est un accompli 3MS de la racine d-l-l. Le Lane's donne : s'egarer, devier du chemin, errer. L'accompli indique que l'egarement est un fait acheve — celui qui substitue s'est deja egare. Le nom **sawa'a** est un nom masculin de la racine s-w-y. Le Lane's donne : milieu, egal, centre. Sawa' al-sabil designe le milieu du chemin — la voie droite, le juste milieu. Le nom **al-sabili** est un nom masculin singulier defini genitif de la racine s-b-l. Le Lane's donne : chemin, voie, sentier. Le sabil est la voie que l'on emprunte — la voie de la verite.

§JUSTIFICATION§
**voulez-vous** — Le sens retenu est « desirer ». Le verbe arada designe un desir delibere. L'alternative « aller et venir » est ecartee car le contexte est un desir, pas un mouvement physique.

**demander** — Le sens retenu est « demander ». Le verbe sa'ala designe l'acte de questionner et d'exiger. Ce sens est unique dans le contexte.

**votre envoye** — Le sens retenu est « envoyer/messager ». Le mot rasulakum designe l'envoye specifique qui leur est adresse. Le suffixe « kum » cree une relation directe.

**comme on a demande** — Le sens retenu est « demander ». Le verbe passif su'ila montre que Moussa a recu des demandes — le meme verbe s-a-l au passif.

**auparavant** — Le sens retenu est « avant ». Le mot qablu situe dans le passe. L'alternative « se tourner vers » est ecartee car le contexte est temporel, pas directionnel.

**substitue** — Le sens retenu est « substituer ». Le verbe yatabaddalu designe le remplacement d'une chose par une autre. Ce sens est unique dans le contexte.

**la couverture** — Le sens retenu est « couvrir/cacher ». Le mot al-kufr designe l'acte de couvrir la verite. L'alternative « ingratitude » est ecartee car le contexte est l'opposition directe a la foi — couvrir la verite est plus fondamental que l'ingratitude.

**la foi** — Le sens retenu est « foi/adhesion ». Le mot al-iman designe l'adhesion interieure. L'alternative « securite » est ecartee car le contexte oppose foi et kufr.

**s'est egare** — Le sens retenu est « s'egarer ». Le verbe dalla designe la deviation du chemin droit. L'alternative « perir » est ecartee car le contexte est spatial (chemin), pas terminal.

**du milieu** — Le sens retenu est « egal/milieu ». Le mot sawa' designe le centre, le juste milieu. L'alternative « achevement » est ecartee car le contexte est le chemin, pas un processus.

**du chemin** — Le sens retenu est « chemin/voie ». Le mot al-sabil designe la voie que l'on emprunte. Ce sens est unique dans le contexte.

§CRITIQUE§
Hamidullah traduit « Quiconque substitue la mecreance a la foi ». Nous traduisons « Quiconque substitue la couverture a la foi ». La difference porte sur le mot kufr : « mecreance » est une traduction theologique classique qui designe le resultat (ne pas croire), tandis que « couverture » est plus proche de l'etymologie de la racine k-f-r qui signifie d'abord couvrir, cacher. Le kufr est l'acte de couvrir la verite — la mecreance en est la consequence. Hamidullah traduit aussi « du droit chemin » la ou nous donnons « du milieu du chemin ». Le mot sawa' signifie « milieu, egal » — le milieu du chemin est la voie droite qui ne penche ni a droite ni a gauche.`,
    segments: [
      { fr: "ou bien", phon: "am", arabic: "\u0623\u064e\u0645\u0652", is_particle: true, position: 0 },
      { fr: "voulez-vous", pos: "verbe", phon: "turiduna", arabic: "\u062a\u064f\u0631\u0650\u064a\u062f\u064f\u0648\u0646\u064e", word_key: "rwd", is_particle: false, sense_retenu: "desirer", position: 1 },
      { fr: "que", phon: "an", arabic: "\u0623\u064e\u0646", is_particle: true, position: 2 },
      { fr: "vous demandiez", pos: "verbe", phon: "tas'alu", arabic: "\u062a\u064e\u0633\u0652\u0640\u064e\u0654\u0644\u064f\u0648\u0627\u06df", word_key: "sal", is_particle: false, sense_retenu: "demander", position: 3 },
      { fr: "votre envoye", pos: "nom", phon: "rasulakum", arabic: "\u0631\u064e\u0633\u064f\u0648\u0644\u064e\u0643\u064f\u0645\u0652", word_key: "rsl", is_particle: false, sense_retenu: "envoyer", position: 4 },
      { fr: "comme", phon: "ka-ma", arabic: "\u0643\u064e\u0645\u064e\u0627", is_particle: true, position: 5 },
      { fr: "on a demande a", pos: "verbe", phon: "su'ila", arabic: "\u0633\u064f\u0626\u0650\u0644\u064e", word_key: "sal", is_particle: false, sense_retenu: "demander", position: 6 },
      { fr: "Moussa", phon: "Musa", arabic: "\u0645\u064f\u0648\u0633\u064e\u0649", is_particle: true, position: 7 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 8 },
      { fr: "auparavant", pos: "nom", phon: "qablu", arabic: "\u0642\u064e\u0628\u0652\u0644\u064f", word_key: "qbl", is_particle: false, sense_retenu: "avant", position: 9 },
      { fr: "et quiconque", phon: "wa-man", arabic: "\u0648\u064e\u0645\u064e\u0646", is_particle: true, position: 10 },
      { fr: "substitue", pos: "verbe", phon: "yatabaddali", arabic: "\u064a\u064e\u062a\u064e\u0628\u064e\u062f\u0651\u064e\u0644\u0650", word_key: "bdl", is_particle: false, sense_retenu: "substituer", position: 11 },
      { fr: "la couverture", pos: "nom", phon: "al-kufra", arabic: "\u0671\u0644\u0652\u0643\u064f\u0641\u0652\u0631\u064e", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 12 },
      { fr: "a la foi", pos: "nom", phon: "bi-l-imani", arabic: "\u0628\u0650\u0671\u0644\u0652\u0625\u0650\u064a\u0645\u064e\u0640\u0646\u0650", word_key: "amn", is_particle: false, sense_retenu: "foi", position: 13 },
      { fr: "certes", phon: "fa-qad", arabic: "\u0641\u064e\u0642\u064e\u062f\u0652", is_particle: true, position: 14 },
      { fr: "s'est egare", pos: "verbe", phon: "dalla", arabic: "\u0636\u064e\u0644\u0651\u064e", word_key: "dll", is_particle: false, sense_retenu: "s'egarer", position: 15 },
      { fr: "du milieu", pos: "nom", phon: "sawa'a", arabic: "\u0633\u064e\u0648\u064e\u0622\u0621\u064e", word_key: "swy", is_particle: false, sense_retenu: "milieu", position: 16 },
      { fr: "du chemin", pos: "nom", phon: "al-sabili", arabic: "\u0671\u0644\u0633\u0651\u064e\u0628\u0650\u064a\u0644\u0650", word_key: "s b l", is_particle: false, sense_retenu: "chemin", position: 17 }
    ],
    words: [
      // rwd pos=1
      {
        word_key: "rwd", position: 1, sense_chosen: "desirer",
        analysis_axes: {
          sense_chosen: "desirer",
          concept_chosen: "Mouvement/Recherche",
          concepts: {
            "Mouvement/Recherche": {
              status: "retenu",
              senses: ["aller et venir", "chercher a convaincre", "desirer"],
              proof_ctx: "Le verbe turiduna est un inaccompli 2MP de la forme IV de la racine r-w-d. Le Lane's donne : desirer, vouloir, chercher a obtenir. La forme IV (arada) intensifie le mouvement interieur du desir — on ne veut pas passivement, on cherche activement a obtenir. L'inaccompli marque que le desir est en cours. La racine porte l'idee de mouvement exploratoire — desirer c'est aller vers quelque chose, chercher a l'atteindre. Le contexte est une question rhetorique : voulez-vous demander a votre envoye comme on a demande a Moussa ? Le desir ici est un mouvement volontaire vers une exigence.",
              axe1_verset: "Le verbe turiduna ouvre le verset avec une question rhetorique qui interpelle directement les destinataires. Le champ lexical du verset oppose le desir (voulez-vous) a l'egarement (s'egarer du chemin). Le verset montre que le desir de demander des preuves excessives a l'envoye est le debut d'un chemin qui mene a l'egarement. Le verbe situe la responsabilite dans la volonte des destinataires — c'est un choix delibere, pas un accident.",
              axe2_voisins: "Le verset 107 affirmait la souverainete de Dieu sur les cieux et la terre. Le verset 108 enchaine avec une question : voulez-vous demander a votre envoye ? La transition montre que ceux qui reconnaissent la souverainete de Dieu ne devraient pas exiger des preuves supplementaires de Son envoye. Le verset 109 montrera que beaucoup parmi les gens du Livre voudraient les faire redevenir dissimulateurs.",
              axe3_sourate: "La sourate al-Baqarah contient plusieurs passages ou les Bani Isra'il formulent des exigences a Moussa. En 2:55, ils demandent a voir Dieu ouvertement. En 2:61, ils demandent des legumes au lieu de la manne. Le verset 108 rappelle ce schema de demandes excessives et met en garde les croyants de ne pas reproduire le meme comportement avec leur envoye.",
              axe4_coherence: "La racine r-w-d apparait dans le Coran pour decrire des desirs et des tentatives. En 12:23, la femme du maitre d'Egypte « chercha a le seduire » (rawadathu). En 12:26, les memes mots sont utilises. Le desir dans la racine r-w-d a une dimension active et exploratoire — on ne se contente pas de vouloir, on manoeuvre pour obtenir. Le verset 108 utilise cette dimension pour montrer que la demande est une manoeuvre deliberee.",
              axe5_frequence: "Pour la mission du khalifa, le desir de demander des preuves supplementaires est un detour qui retarde la mission. Le khalifa doit agir avec ce qu'il a recu, pas exiger toujours plus. Le desir de preuves peut etre un pretexte pour ne pas agir — on repousse l'action en demandant encore et encore. La mission exige la confiance, pas l'exigence."
            },
            "Douceur/Lenteur": {
              status: "nul",
              senses: ["agir doucement"],
              proof_ctx: "Le sens de douceur est hors sujet — le verbe est a la forme IV (arada) qui exprime le desir, pas la lenteur."
            }
          }
        }
      },
      // sal pos=3
      {
        word_key: "sal", position: 3, sense_chosen: "demander",
        analysis_axes: {
          sense_chosen: "demander",
          concept_chosen: "Requête/Interrogation",
          concepts: {
            "Requête/Interrogation": {
              status: "retenu",
              senses: ["questionner", "interroger", "demander"],
              proof_ctx: "Le verbe tas'alu est un inaccompli 2MP de la racine s-a-l. Le Lane's donne : demander, questionner, interroger, exiger. La demande est un acte directionnel — elle part du demandeur et atteint celui a qui on demande. Ici le verbe est au subjonctif apres « an » (que) — voulez-vous que vous demandiez. Le verbe apparait deux fois dans le verset : une fois actif (tas'alu, vous demandiez) et une fois passif (su'ila, on a demande a). La repetition montre le parallele entre la demande presente et celle du passe.",
              axe1_verset: "Le verbe tas'alu est l'action centrale de la question rhetorique. Le champ lexical (vouloir, demander, envoye) construit un schema de requete excessive. Le verset compare la demande presente a celle faite a Moussa — le parallele avertit que les memes exigences menent aux memes consequences. Demander a l'envoye plus que ce qu'il apporte est un signe de doute, pas de foi.",
              axe2_voisins: "Le verset 107 rappelait la souverainete de Dieu. Le verset 108 met en garde contre les demandes excessives. Le verset 109 montrera l'hostilite des gens du Livre. La progression montre que la demande excessive est un symptome du meme mal que l'hostilite — le refus d'accepter la verite telle qu'elle vient.",
              axe3_sourate: "La racine s-a-l est presente dans la sourate al-Baqarah dans des contextes de requetes problematiques. En 2:61, les Bani Isra'il demandent des legumes a Moussa. En 2:68-71, ils posent des questions repetees sur la vache. Le verset 108 s'inscrit dans ce theme — la sourate montre que les questions excessives sont un obstacle a l'obeissance.",
              axe4_coherence: "La racine s-a-l apparait environ 129 fois dans le Coran. En 5:101, « ne posez pas de questions sur des choses qui, si elles vous etaient montrees, vous nuiraient ». Le Coran distingue la question sincere (pour comprendre) de la question pretexte (pour retarder ou rejeter). Le verset 108 vise la seconde categorie.",
              axe5_frequence: "Pour la mission du khalifa, demander est legitime quand c'est pour comprendre et agir. Mais demander pour retarder, pour exiger des preuves supplementaires, c'est detourner la mission. Le khalifa doit poser les bonnes questions — celles qui font avancer, pas celles qui bloquent."
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
              proof_ctx: "Le mot rasulakum est un nom masculin singulier defini par l'idafa de la racine r-s-l avec pronom suffixe 2MP. Le Lane's donne : envoye, messager, celui qui est envoye. Le suffixe « kum » (votre) rattache l'envoye aux destinataires — c'est votre envoye specifique, celui qui vous est envoye. En 2:101, le mot etait indefini (rasulun) — ici il est possessif, ce qui cree une relation directe entre l'envoye et les destinataires.",
              axe1_verset: "Le mot rasulakum est l'objet de la demande — c'est a votre envoye que vous voulez demander. Le champ lexical (demander, envoye, comme Moussa) montre que le comportement vise est celui de demander des preuves a l'envoye. Le possessif « votre » insiste sur la relation — l'envoye est venu specifiquement pour eux, et pourtant ils le traitent comme les anciens ont traite Moussa.",
              axe2_voisins: "Le verset 101 mentionnait un « envoye de chez Dieu ». Le verset 108 parle de « votre envoye ». La progression montre que l'envoye est a la fois de Dieu (source) et pour eux (destination). Le double rattachement rend le rejet d'autant plus grave — rejeter son propre envoye c'est rejeter ce qui est venu specifiquement pour soi.",
              axe3_sourate: "La racine r-s-l structure la sourate al-Baqarah. En 2:87, Dieu a donne a Moussa le Livre et envoye des messagers apres lui. En 2:101, un envoye de chez Dieu est venu. Le verset 108 prolonge cette chaine en passant du recit historique a l'interpellation directe — ne faites pas comme ceux qui ont demande a Moussa.",
              axe4_coherence: "L'expression « votre envoye » (rasulukum) apparait dans plusieurs versets du Coran. En 2:143, « l'envoye soit temoin sur vous ». Le possessif cree une responsabilite mutuelle — l'envoye a une mission envers eux, et eux ont une obligation envers l'envoye.",
              axe5_frequence: "Pour la mission du khalifa, l'envoye est le guide de la mission. Demander a l'envoye des preuves excessives c'est douter de la mission. Le khalifa doit faire confiance au message et agir, pas exiger des garanties supplementaires."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est hors sujet — le mot est rasulakum (votre envoye), pas une reference meteorologique."
            }
          }
        }
      },
      // sal pos=6 (2nd occurrence — passive)
      {
        word_key: "sal", position: 6, sense_chosen: "demander",
        analysis_axes: {
          sense_chosen: "demander",
          concept_chosen: "Requête/Interrogation",
          concepts: {
            "Requête/Interrogation": {
              status: "retenu",
              senses: ["questionner", "interroger", "demander"],
              proof_ctx: "Le verbe su'ila est un accompli passif 3MS de la racine s-a-l. Le Lane's donne : etre interroge, recevoir une demande. Le passif montre que Moussa a recu des demandes — il n'a pas initie la demande, elle lui est venue de son peuple. L'accompli indique que c'est un fait historique acheve. Le parallele avec la forme active (tas'alu, vous demandez) montre que le meme acte se repete — les memes demandes excessives faites a Moussa risquent d'etre repetees.",
              axe1_verset: "Le verbe su'ila cree le parallele historique : « comme on a demande a Moussa auparavant ». Le passif met l'accent sur Moussa comme destinataire des demandes — il a subi les exigences de son peuple. Le verset oppose le present (voulez-vous demander) et le passe (comme on a demande) pour montrer que le comportement est recurrent.",
              axe2_voisins: "Les versets precedents decrivent les comportements des Bani Isra'il. Le verset 108 tire la lecon : ne reproduisez pas ces comportements. Le passif su'ila rappelle que ces demandes ont deja eu lieu et ont eu des consequences negatives.",
              axe3_sourate: "La sourate al-Baqarah contient de nombreux recits de demandes faites a Moussa. En 2:55, « faites-nous voir Dieu ». En 2:61, « invoque pour nous ton Seigneur ». En 2:68-71, les questions sur la vache. Le passif su'ila condense tous ces episodes en une seule reference.",
              axe4_coherence: "Le Coran utilise regulierement le parallele entre les comportements passes et presents pour mettre en garde. En 4:153, « les gens du Livre te demandent de faire descendre un livre du ciel — ils ont deja demande pire a Moussa ». Le schema de la demande excessive est recurrent.",
              axe5_frequence: "Pour la mission du khalifa, les demandes excessives du passe sont un avertissement. Le khalifa doit apprendre des erreurs des precedents pour ne pas les repeter. L'histoire est une lecon, pas un cycle fatal."
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
              proof_ctx: "Le mot qablu est un adverbe de temps de la racine q-b-l. Le Lane's donne : avant, auparavant, anterieurement. L'anteriorite situe l'evenement dans le passe — ce qui a ete demande a Moussa est un precedent historique. Le mot qablu est sans complement (min qablu — auparavant) ce qui donne un sens absolu — avant tout cela, dans le passe lointain.",
              axe1_verset: "Le mot qablu situe la demande dans le passe — « comme on a demande a Moussa auparavant ». Le champ lexical (demander, envoye, Moussa, avant) construit un parallele temporel entre le passe et le present. Le verset avertit que le present risque de reproduire le passe. L'anteriorite est un rappel : ceux qui ont agi ainsi avant ont eu des consequences.",
              axe2_voisins: "Les versets 87-101 decrivaient les actions passees des Bani Isra'il. Le verset 108 fait reference a ce passe avec « auparavant ». Le passe des versets precedents devient l'exemple a ne pas suivre dans le present du verset 108.",
              axe3_sourate: "La sourate al-Baqarah est structuree autour d'un va-et-vient entre passe et present. Le passe des Bani Isra'il (versets 40-101) sert de lecon pour le present des croyants (versets 104-112). Le mot qablu est un pivot qui relie les deux temps.",
              axe4_coherence: "La racine q-b-l apparait environ 264 fois dans le Coran. Le sens d'anteriorite (qablu, avant) est frequent dans les avertissements — « n'avez-vous pas vu ce qui est arrive a ceux d'avant vous ? ». Le Coran utilise le passe comme miroir du present.",
              axe5_frequence: "Pour la mission du khalifa, l'anteriorite est une source de sagesse. Connaitre ce qui s'est passe avant permet d'eviter les memes erreurs. Le khalifa doit etudier l'histoire pour eclairer sa mission presente."
            },
            "Réception/Accueil": {
              status: "nul",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Le sens de reception est hors sujet — le mot qablu est un adverbe de temps (avant), pas un verbe d'accueil."
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
              proof_ctx: "Le verbe yatabaddali est un inaccompli 3MS de la forme V de la racine b-d-l. Le Lane's donne : substituer, echanger, remplacer une chose par une autre. La forme V (tafa''ala) indique que le sujet effectue l'action sur lui-meme — il se substitue la couverture a la place de la foi. L'inaccompli avec « man » (quiconque) cree une generalite : quiconque fait cette substitution. La substitution est un acte delibere — on enleve une chose pour en mettre une autre a sa place.",
              axe1_verset: "Le verbe yatabaddali est l'action qui declenche l'avertissement final du verset. Le champ lexical (couverture, foi, s'egarer, chemin) montre que la substitution est un echange desastreux — on enleve la foi (qui guide) pour la remplacer par la couverture (qui egare). Le verset montre que le choix de la substitution est irreversible dans ses consequences — celui qui fait ce choix s'est deja egare.",
              axe2_voisins: "Le verset 107 affirmait que Dieu possede la royaute des cieux et de la terre. Le verset 108 montre que substituer la couverture a la foi est un acte qui va contre cette souverainete. Le verset 109 montrera que les gens du Livre voudraient que les croyants fassent cette substitution — l'ennemi exterieur pousse a l'echange desastreux.",
              axe3_sourate: "La racine b-d-l apparait dans la sourate al-Baqarah en 2:59 et 2:61 pour decrire ceux qui ont substitue d'autres paroles a ce qui leur avait ete dit. Le verset 108 reprend ce theme de la substitution — remplacer le bien par le mal est un schema recurrent dans la sourate.",
              axe4_coherence: "La racine b-d-l apparait environ 44 fois dans le Coran. En 2:211, « quiconque substitue le bienfait de Dieu apres l'avoir recu ». Le Coran avertit systematiquement contre la substitution du bien par le mal. En 14:28, « ceux qui ont substitue au bienfait de Dieu la dissimulation ». La substitution est un theme recurrent de l'avertissement coranique.",
              axe5_frequence: "Pour la mission du khalifa, la substitution est la trahison ultime. Remplacer la foi par la couverture c'est abandonner la mission pour son contraire. Le khalifa doit veiller a ne pas substituer ses desirs a la verite — la mission exige la constance dans la foi."
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
              proof_ctx: "Le nom al-kufra est un nom masculin singulier defini accusatif de la racine k-f-r. Le Lane's donne : couvrir, cacher, recouvrir. Le kufr est l'acte premier de couvrir — le cultivateur couvre la graine dans la terre (kafara), la nuit couvre le jour. Le sens physique de couverture est le fondement de tous les sens derives. En contexte coranique, le kufr est l'acte de couvrir la verite, de la dissimuler, de la rendre invisible. L'article defini (al-) marque que c'est la couverture connue — celle qui s'oppose a la foi.",
              axe1_verset: "Le mot al-kufra est l'objet de la substitution — c'est la couverture qui remplace la foi. Le champ lexical oppose directement kufr et iman : la couverture contre la foi, le cache contre le manifeste. Le verset montre que cette substitution mene a l'egarement — couvrir la verite rend aveugle au chemin.",
              axe2_voisins: "Le verset 102 parlait de la sorcerie et de l'enseignement par les demons — la sorcerie est une forme de couverture de la realite. Le verset 108 generalise : quiconque substitue la couverture a la foi s'egare. Le verset 109 montrera que les gens du Livre voudraient faire revenir les croyants a la couverture.",
              axe3_sourate: "La racine k-f-r est une des plus frequentes de la sourate al-Baqarah. En 2:6, « ceux qui couvrent, tu les avertis ou non, ils ne croient pas ». En 2:89, « ceux qui couvrent ». Le kufr est l'antithese de la foi dans toute la sourate — les deux s'opposent comme le cache et le manifeste.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le sens premier de « couvrir » est atteste par le Lane's dans l'expression « la nuit kafara » (la nuit couvrit). Le Coran utilise cette racine pour decrire celui qui couvre la verite — il la voit mais la dissimule deliberement. La couverture est un acte actif, pas une absence passive de foi.",
              axe5_frequence: "Pour la mission du khalifa, la couverture est l'obstacle principal. Couvrir la verite c'est la rendre invisible — ni pour soi ni pour les autres. Le khalifa doit decouvrir (kashafa) la verite au lieu de la couvrir. La mission est un acte de devoilement, pas de dissimulation."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["renier un bienfait", "rejeter", "mecreant", "etre ingrat", "nier"],
              proof_ctx: "Le sens d'ingratitude et de rejet est un sens derive de la couverture — rejeter un bienfait c'est le couvrir, le rendre invisible. En 2:108, le kufr est oppose a l'iman (foi). Le rejet est une consequence de la couverture — celui qui couvre la verite finit par la rejeter. Le sens est plausible mais secondaire par rapport a la couverture qui est le sens premier.",
              axe1_verset: "Le mot al-kufra pourrait etre traduit par « le rejet » — on rejette la foi pour la remplacer par le rejet. Mais « la couverture » est plus precis car le texte decrit une substitution : on couvre la foi, on la rend invisible, plutot qu'on la rejette simplement.",
              axe2_voisins: "Les versets voisins traitent du rejet des ecritures et de l'hostilite. Le sens de rejet est coherent avec le contexte mais reste un derive du sens de couverture.",
              axe3_sourate: "La sourate utilise kufr dans les deux sens. En 2:6, le kufr est la couverture de la verite. En 2:89, c'est le rejet actif. Les deux sens coexistent.",
              axe4_coherence: "Le Coran utilise kufr dans les deux sens selon le contexte. La distinction entre couverture et rejet est philosophique — le rejet est l'acte visible, la couverture est le mecanisme interieur.",
              axe5_frequence: "Pour la mission du khalifa, le rejet et la couverture sont deux facettes du meme obstacle. Le khalifa doit comprendre que le rejet exterieur commence par une couverture interieure."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les peches"],
              proof_ctx: "Le sens d'expiation est hors sujet — le contexte oppose kufr et iman dans une substitution, pas dans un acte d'expiation."
            }
          }
        }
      },
      // amn pos=13
      {
        word_key: "amn", position: 13, sense_chosen: "foi",
        analysis_axes: {
          sense_chosen: "foi",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["accepter comme vrai", "croire", "avoir la foi", "confirmer", "croyant"],
              proof_ctx: "Le nom al-imani est un nom masculin singulier defini genitif de la racine a-m-n. Le Lane's donne : foi, adhesion, croyance, acceptation de la verite. L'iman est l'adhesion interieure a la verite — c'est un etat permanent qui reside dans le coeur. L'article defini (al-) marque que c'est la foi connue — la foi en Dieu et en Ses envoyes. La preposition « bi » (par/avec) marque que la substitution se fait a la place de la foi — on enleve la foi pour mettre la couverture.",
              axe1_verset: "Le mot al-imani est ce qui est sacrifie dans la substitution — la foi est remplacee par la couverture. Le champ lexical (desirer, demander, substituer, foi, couverture, s'egarer) montre que la perte de la foi est le resultat d'un processus : on commence par des demandes excessives et on finit par perdre la foi. Le verset trace un chemin de la foi a l'egarement.",
              axe2_voisins: "Le verset 103 disait « s'ils avaient cru (amanu) et s'ils s'etaient premuni, une recompense de chez Dieu aurait ete meilleure ». Le verset 108 oppose ceux qui gardent la foi a ceux qui la substituent. La foi est le pivot entre les deux destins.",
              axe3_sourate: "La racine a-m-n est fondamentale dans la sourate al-Baqarah. En 2:3, la sourate definit les croyants. En 2:8, « parmi les gens, il y a ceux qui disent nous croyons ». La sourate oppose constamment la vraie foi et ses contrefacons.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. L'opposition iman/kufr est le couple fondamental du Coran — la foi et la couverture, l'acceptation et le rejet. En 2:108, cette opposition est exprimee par la substitution — on choisit l'un a la place de l'autre.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le moteur de la mission. Sans foi, la mission n'a pas de sens — on ne peut pas accomplir une mission divine sans adhesion interieure. Substituer la couverture a la foi c'est eteindre le moteur."
            },
            "Sécurité/Confiance": {
              status: "nul",
              senses: ["faire confiance", "etre en securite", "confier"],
              proof_ctx: "Le sens de securite est secondaire ici — le contexte oppose iman et kufr dans un sens de foi vs couverture, pas de securite vs danger."
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
              senses: ["errer", "perdre son chemin", "faire egarer", "etre egare", "devier", "s'egarer"],
              proof_ctx: "Le verbe dalla est un accompli 3MS de la racine d-l-l. Le Lane's donne : s'egarer, quitter le droit chemin, errer, devier. L'accompli indique que l'egarement est un fait acheve — celui qui substitue la couverture a la foi s'est deja egare, c'est un fait accompli au moment de la substitution. L'egarement est un mouvement actif de deviation — on quitte le chemin qu'on connaissait pour s'enfoncer dans l'inconnu.",
              axe1_verset: "Le verbe dalla est la consequence de la substitution — quiconque substitue s'est egare. Le champ lexical (milieu, chemin) complete l'image : l'egarement est spatial, on quitte le centre du chemin pour s'en eloigner. Le verset montre que la substitution de la couverture a la foi n'est pas neutre — elle a une consequence immediate et concrete : l'egarement.",
              axe2_voisins: "Le verset 107 affirmait la souverainete de Dieu. Le verset 108 montre que s'egarer c'est sortir de cette souverainete — on quitte le chemin trace par le Souverain. Le verset 109 montrera l'hostilite des gens du Livre qui voudraient les egarer.",
              axe3_sourate: "La racine d-l-l est recurrente dans la sourate al-Baqarah. En 2:16, « ceux qui ont achete l'egarement au prix de la guidance ». En 2:108, le meme theme : substituer la couverture a la foi c'est acheter l'egarement. La sourate oppose systematiquement la guidance (huda) et l'egarement (dalal).",
              axe4_coherence: "La racine d-l-l apparait environ 191 fois dans le Coran. L'egarement est presente comme un choix, pas comme un accident. En 2:108, l'accompli (dalla) montre que le choix est fait et la consequence est immediate. Le Coran insiste sur la responsabilite individuelle dans l'egarement.",
              axe5_frequence: "Pour la mission du khalifa, l'egarement est l'echec de la mission. S'egarer du chemin c'est perdre la direction de la mission. Le khalifa doit rester sur le milieu du chemin — la voie droite qui ne devie ni a droite ni a gauche."
            },
            "Disparition/Perte": {
              status: "nul",
              senses: ["perir", "mourir", "disparaitre"],
              proof_ctx: "Le sens de disparition est secondaire — le contexte est le chemin (sawa' al-sabil), donc le sens spatial d'egarement est premier."
            }
          }
        }
      },
      // swy pos=16
      {
        word_key: "swy", position: 16, sense_chosen: "milieu",
        analysis_axes: {
          sense_chosen: "milieu",
          concept_chosen: "Égalité/Équivalence",
          concepts: {
            "Égalité/Équivalence": {
              status: "retenu",
              senses: ["etre egal", "equivalent", "meme chose", "indifferent", "egaliser", "aplanir"],
              proof_ctx: "Le nom sawa'a est un nom masculin de la racine s-w-y. Le Lane's donne : egal, equivalent, milieu, centre. Sawa' al-sabil designe le milieu du chemin — le point central, la voie droite qui ne penche ni a droite ni a gauche. L'egalite ici est spatiale : le centre est equidistant des bords. L'expression « dalla sawa'a al-sabili » signifie qu'il s'est egare du milieu du chemin — il a quitte le point d'equilibre.",
              axe1_verset: "Le mot sawa'a qualifie le chemin dont on s'egare — le milieu du chemin. Le champ lexical (s'egarer, milieu, chemin) construit une image spatiale precise : le chemin a un milieu, un centre, et s'egarer c'est quitter ce centre. Le verset montre que la verite est au centre — ni dans l'exces ni dans le defaut.",
              axe2_voisins: "Le verset 143 de la sourate dira « Nous avons fait de vous une communaute du milieu (wasatan) ». Le theme du juste milieu traverse la sourate. Le verset 108 utilise sawa' dans le meme esprit — le milieu du chemin est la position juste.",
              axe3_sourate: "La racine s-w-y apparait dans la sourate al-Baqarah en 2:6 (« c'est egal pour eux ») et en 2:108 (« le milieu du chemin »). La sourate utilise cette racine pour exprimer l'egalite et le centre. Le milieu du chemin est la position d'equilibre que le croyant doit maintenir.",
              axe4_coherence: "L'expression « sawa' al-sabil » apparait en 2:108, 5:12, 5:60 et 60:1. Le Coran utilise cette expression pour designer la voie droite, le juste milieu. S'egarer de sawa' al-sabil c'est perdre l'equilibre entre les extremes.",
              axe5_frequence: "Pour la mission du khalifa, le milieu du chemin est la position de la mission. Le khalifa ne doit pencher ni vers l'exces ni vers le defaut — la mission exige l'equilibre. Quitter le milieu c'est quitter la mission."
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
              proof_ctx: "Le nom al-sabili est un nom masculin singulier defini genitif de la racine s-b-l. Le Lane's donne : chemin, voie, sentier, route que l'on emprunte. Le sabil est la voie concrète ou abstraite que l'on suit pour atteindre une destination. L'article defini (al-) marque que c'est le chemin connu — la voie droite. L'expression « sawa' al-sabili » (le milieu du chemin) designe le centre de cette voie — la position d'equilibre.",
              axe1_verset: "Le mot al-sabili est le point de reference de l'egarement — on s'egare du milieu du chemin. Le champ lexical (s'egarer, milieu, chemin) construit une metaphore spatiale complete : la vie est un chemin, la verite est au milieu, et la substitution de la couverture a la foi fait sortir du chemin. Le verset ferme avec cette image qui resume tout l'avertissement.",
              axe2_voisins: "Le verset 107 parlait de la souverainete de Dieu sur les cieux et la terre. Le verset 108 montre que le chemin est trace par cette souverainete — le sabil est la voie de Dieu. Le verset 109 montrera l'hostilite de ceux qui veulent les detourner de ce chemin.",
              axe3_sourate: "La racine s-b-l apparait frequemment dans la sourate al-Baqarah. En 2:154, « dans le chemin de Dieu (fi sabili Allah) ». En 2:190, « combattez dans le chemin de Dieu ». Le chemin de Dieu est un theme structurant de la sourate — il est a la fois une direction et une cause.",
              axe4_coherence: "La racine s-b-l apparait environ 176 fois dans le Coran. Le sabil designe tantot la voie physique, tantot la voie spirituelle, tantot la cause de Dieu. En 2:108, c'est la voie droite dont on s'egare. Le Coran presente la vie comme un chemin avec un milieu (verite) et des bords (egarement).",
              axe5_frequence: "Pour la mission du khalifa, le chemin est la direction de la mission. Le khalifa doit rester sur le chemin et en son milieu. S'egarer du chemin c'est perdre la mission. Le chemin n'est pas un lieu — c'est une direction permanente."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:109
  // "Nombre de gens du Livre aimeraient par jalousie de leur
  //  part, pouvoir vous rendre mecreants apres que vous ayez
  //  cru. Pardonnez et oubliez jusqu'a ce qu'Allah fasse
  //  venir Son commandement. Allah est certes Omnipotent
  //  sur toute chose."
  // =====================================================
  109: {
    verse_id: 116,
    analysis_id: 477,
    translation_arab: "Beaucoup parmi les gens du Livre aimeraient, par jalousie venant de chez eux-memes, vous rendre dissimulateurs apres votre foi, apres que la verite se soit eclaircie pour eux. Pardonnez et passez outre jusqu'a ce que Dieu vienne avec Son commandement. Certes Dieu est sur toute chose puissant.",
    full_translation: "Nombre de gens du Livre aimeraient par jalousie de leur part, pouvoir vous rendre mecreants apres que vous ayez cru. Pardonnez et oubliez jusqu'a ce qu'Allah fasse venir Son commandement. Allah est certes Omnipotent sur toute chose.",
    translation_explanation: `§DEMARCHE§
Le verset decrit l'hostilite de certains gens du Livre et prescrit une reponse. Le verbe **wadda** est un accompli 3MS de la racine w-d-d. Le Lane's donne : souhaiter, desirer, aimer. L'accompli indique que le souhait est un fait etabli — ils ont souhaite. Le nom **kathirun** est un nom masculin singulier indefini de la racine k-th-r. Le Lane's donne : beaucoup, nombreux, abondant. Le singulier avec le sens de pluralite (« nombre de ») souligne qu'il s'agit d'un grand nombre. Le nom **ahli** est un nom masculin de la racine a-h-l. Le Lane's donne : gens, famille, peuple. « Ahl al-kitab » designe les gens du Livre — ceux qui possedent les ecritures anterieures. Le nom **al-kitabi** est un nom masculin de la racine k-t-b. Le Lane's donne : livre, ecriture revelee. Le verbe **yaruddunakum** est un inaccompli 3MP de la racine r-d-d avec pronom suffixe 2MP. Le Lane's donne : faire revenir, renvoyer, repousser, rendre. L'inaccompli marque que l'action est desiree mais pas encore accomplie — ils voudraient vous rendre. Le suffixe 2MP montre que les croyants sont la cible. Le nom **ba'di** est un nom de la racine b-'-d. Le Lane's donne : apres, suite a. La preposition « min » + « ba'di » situe dans le temps — apres votre foi. Le nom **imanikum** est un nom de la racine a-m-n avec pronom 2MP. Le Lane's donne : foi, croyance. Le pronom « kum » (votre) personnalise — votre foi specifique. Le nom **kuffaran** est un nom pluriel de la racine k-f-r. Le Lane's donne : dissimulateurs, ceux qui couvrent la verite. Le tanwin (an) marque l'accusatif — c'est l'etat dans lequel ils veulent vous mettre. Le nom **hasadan** est un nom masculin indefini accusatif de la racine h-s-d. Le Lane's donne : jalousie, envie, convoitise. Le tanwin accusatif indique la cause — par jalousie, a cause de la jalousie. Le mot **'indi** est de la racine '-n-d. Le Lane's donne : aupres de, chez. « Min 'indi anfusihim » signifie : de chez eux-memes — la jalousie vient de leur propre interieur. Le nom **anfusihim** est un pluriel de la racine n-f-s avec pronom 3MP. Le Lane's donne : ame, personne, soi-meme. Le verbe **tabayyana** est un accompli 3MS de la forme V de la racine b-y-n. Le Lane's donne : devenir clair, se manifester, s'eclaircir. La forme V indique que la clarte est apparue d'elle-meme. Le nom **al-haqqu** est un nom de la racine h-q-q. Le Lane's donne : verite, realite, droit. L'article defini marque que c'est la verite connue — la verite de l'envoye et du message. Le verbe **i'fu** est un imperatif 2MP de la racine '-f-w. Le Lane's donne : pardonner, effacer, excuser. L'imperatif prescrit l'action — pardonnez. Le verbe **isfahu** est un imperatif 2MP de la racine s-f-h. Le Lane's donne : se detourner, passer outre, tourner la page. L'imperatif prescrit de ne pas s'attarder sur l'offense — passez outre. Le verbe **ya'tiya** est un inaccompli 3MS subjonctif de la racine a-t-y. Le Lane's donne : venir, apporter. L'inaccompli apres « hatta » (jusqu'a ce que) marque une limite temporelle — pardonnez jusqu'a ce que Dieu vienne. Le nom **Allahu** est le nom propre de la divinite au nominatif. Le nom **amrihi** est un nom de la racine a-m-r avec pronom 3MS. Le Lane's donne : commandement, ordre, affaire. Le pronom « hi » (Son) rattache le commandement a Dieu. Le nom **kulli** est un nom de la racine k-l-l. Le Lane's donne : tout, chaque, totalite. L'expression « 'ala kulli shay'in » (sur toute chose) exprime l'universalite. Le nom **qadirun** est un nom de la racine q-d-r. Le Lane's donne : puissant, capable, ayant le pouvoir. Dieu est puissant sur toute chose — sa puissance est absolue.

§JUSTIFICATION§
**aimeraient** — Le sens retenu est « souhaiter ». Le verbe wadda exprime un souhait, un desir. L'alternative « aimer d'affection » est ecartee car le contexte est un souhait hostile, pas une affection.

**beaucoup** — Le sens retenu est « beaucoup ». Le mot kathirun marque la quantite importante. Ce sens est unique dans le contexte.

**gens de** — Le sens retenu est « gens de/famille ». Le mot ahl designe ceux qui appartiennent a un groupe. L'alternative « digne de » est ecartee car le contexte est l'appartenance au Livre, pas le merite.

**le Livre** — Le sens retenu est « livre/ecrit ». Le mot al-kitab designe l'ecriture revelee. Ce sens est coherent avec les versets precedents.

**vous rendre** — Le sens retenu est « faire revenir ». Le verbe yaruddunakum signifie faire revenir a un etat anterieur. Ce sens est specifique au contexte — ils veulent les faire revenir a la couverture.

**apres** — Le sens retenu est « apres ». Le mot ba'di marque la posteriorite temporelle.

**votre foi** — Le sens retenu est « foi ». Le mot imanikum designe leur adhesion. Meme analyse que pour le verset 108.

**dissimulateurs** — Le sens retenu est « couvrir ». Le mot kuffaran designe ceux qui couvrent la verite. Meme analyse que pour le verset 108.

**jalousie** — Le sens retenu est « jalousie/envie ». Le mot hasadan designe la convoitise envieuse. Ce sens est unique pour cette racine.

**chez** — Le sens retenu est « proximite/presence ». Le mot 'indi designe la proximite — de chez eux-memes, de leur propre interieur.

**eux-memes** — Le sens retenu est « ame/soi-meme ». Le mot anfusihim designe leur propre personne, leur interieur.

**s'est eclaircie** — Le sens retenu est « etre clair/separer ». Le verbe tabayyana designe l'eclaircissement. L'alternative « quitter » est ecartee car le contexte est l'apparition de la verite, pas une separation.

**la verite** — Le sens retenu est « verite ». Le mot al-haqq designe la realite objective, la verite etablie.

**pardonnez** — Le sens retenu est « pardonner ». Le verbe i'fu designe l'effacement de l'offense. L'alternative « surplus » est ecartee car le verbe est un imperatif d'action, pas un nom.

**passez outre** — Le mot isfahu vient de la racine s-f-h. Le Lane's donne pour cette racine : se detourner, passer a cote, tourner la page. Le sens retenu est « passer outre » — ne pas s'attarder sur l'offense et avancer. L'alternative « insense » est de la racine s-f-h (differente) et est ecartee.

**vienne** — Le sens retenu est « venir ». Le verbe ya'tiya designe la venue. Meme racine que aty en 2:101.

**Dieu** — Le sens retenu est « divinite ». Le nom Allah est le nom propre de la divinite.

**Son commandement** — Le sens retenu est « commandement ». Le mot amrihi designe l'ordre divin. L'alternative « affaire » est ecartee car le contexte est la venue d'un commandement specifique.

**toute** — Le sens retenu est « totalite ». Le mot kulli designe la totalite sans exception.

**puissant** — Le sens retenu est « puissance/capacite ». Le mot qadirun designe la capacite d'agir. L'alternative « mesurer » est ecartee car l'attribut divin ici est la puissance, pas la mesure.

§CRITIQUE§
Hamidullah traduit « Pardonnez et oubliez ». Nous traduisons « Pardonnez et passez outre ». Le verbe isfahu ne signifie pas « oublier » — il signifie « se detourner, passer a cote, tourner la page ». L'oubli est un processus passif de la memoire. Passer outre est un acte delibere de ne pas s'attarder sur l'offense — on sait ce qui s'est passe mais on choisit de ne pas y rester. Cette nuance est importante : le pardon coranique n'exige pas l'amnésie mais la maitrise de soi. Hamidullah traduit aussi « mecreants » la ou nous donnons « dissimulateurs » — meme difference que pour kufr dans le verset 108.`,
    segments: [
      { fr: "a aime", pos: "verbe", phon: "wadda", arabic: "\u0648\u064e\u062f\u0651\u064e", word_key: "wdd", is_particle: false, sense_retenu: "souhaiter", position: 0 },
      { fr: "nombre de", pos: "nom", phon: "kathirun", arabic: "\u0643\u064e\u062b\u0650\u064a\u0631\u064c", word_key: "kthr", is_particle: false, sense_retenu: "beaucoup", position: 1 },
      { fr: "parmi", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 2 },
      { fr: "les gens de", pos: "nom", phon: "ahli", arabic: "\u0623\u064e\u0647\u0652\u0644\u0650", word_key: "ahl", is_particle: false, sense_retenu: "gens de", position: 3 },
      { fr: "le Livre", pos: "nom", phon: "al-kitabi", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0628\u0650", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 4 },
      { fr: "si", phon: "law", arabic: "\u0644\u064e\u0648\u0652", is_particle: true, position: 5 },
      { fr: "vous rendre", pos: "verbe", phon: "yaruddunakum", arabic: "\u064a\u064e\u0631\u064f\u062f\u0651\u064f\u0648\u0646\u064e\u0643\u064f\u0645", word_key: "rdd", is_particle: false, sense_retenu: "faire revenir", position: 6 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646", is_particle: true, position: 7 },
      { fr: "apres", pos: "nom", phon: "ba'di", arabic: "\u0628\u064e\u0639\u0652\u062f\u0650", word_key: "baed", is_particle: false, sense_retenu: "apres", position: 8 },
      { fr: "votre foi", pos: "nom", phon: "imanikum", arabic: "\u0625\u0650\u064a\u0645\u064e\u0640\u0646\u0650\u0643\u064f\u0645\u0652", word_key: "amn", is_particle: false, sense_retenu: "foi", position: 9 },
      { fr: "dissimulateurs", pos: "nom", phon: "kuffaran", arabic: "\u0643\u064f\u0641\u0651\u064e\u0627\u0631\u064b\u0627", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 10 },
      { fr: "par jalousie", pos: "nom", phon: "hasadan", arabic: "\u062d\u064e\u0633\u064e\u062f\u064b\u0627", word_key: "hsd", is_particle: false, sense_retenu: "jalousie", position: 11 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 12 },
      { fr: "chez", pos: "nom", phon: "'indi", arabic: "\u0639\u0650\u0646\u062f\u0650", word_key: "end", is_particle: false, sense_retenu: "chez", position: 13 },
      { fr: "eux-memes", pos: "nom", phon: "anfusihim", arabic: "\u0623\u064e\u0646\u0641\u064f\u0633\u0650\u0647\u0650\u0645", word_key: "nfs", is_particle: false, sense_retenu: "soi-meme", position: 14 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646", is_particle: true, position: 15 },
      { fr: "apres", pos: "nom", phon: "ba'di", arabic: "\u0628\u064e\u0639\u0652\u062f\u0650", word_key: "baed", is_particle: false, sense_retenu: "apres", position: 16 },
      { fr: "que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 17 },
      { fr: "s'est eclaircie", pos: "verbe", phon: "tabayyana", arabic: "\u062a\u064e\u0628\u064e\u064a\u0651\u064e\u0646\u064e", word_key: "byn", is_particle: false, sense_retenu: "etre clair", position: 18 },
      { fr: "pour eux", phon: "lahumu", arabic: "\u0644\u064e\u0647\u064f\u0645\u064f", is_particle: true, position: 19 },
      { fr: "la verite", pos: "nom", phon: "al-haqqu", arabic: "\u0671\u0644\u0652\u062d\u064e\u0642\u0651\u064f", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 20 },
      { fr: "pardonnez", pos: "verbe", phon: "i'fu", arabic: "\u0641\u064e\u0671\u0639\u0652\u0641\u064f\u0648\u0627\u06df", word_key: "efw", is_particle: false, sense_retenu: "pardonner", position: 21 },
      { fr: "et passez outre", pos: "verbe", phon: "isfahu", arabic: "\u0648\u064e\u0671\u0635\u0652\u0641\u064e\u062d\u064f\u0648\u0627\u06df", word_key: "sfh", is_particle: false, sense_retenu: "passer outre", position: 22 },
      { fr: "jusqu'a ce que", phon: "hatta", arabic: "\u062d\u064e\u062a\u0651\u064e\u0649", is_particle: true, position: 23 },
      { fr: "vienne", pos: "verbe", phon: "ya'tiya", arabic: "\u064a\u064e\u0623\u0652\u062a\u0650\u064a\u064e", word_key: "aty", is_particle: false, sense_retenu: "venir", position: 24 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 25 },
      { fr: "avec Son commandement", pos: "nom", phon: "bi-amrihi", arabic: "\u0628\u0650\u0623\u064e\u0645\u0652\u0631\u0650\u0647\u0650", word_key: "amr", is_particle: false, sense_retenu: "commandement", position: 26 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 27 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 28 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 29 },
      { fr: "toute", pos: "nom", phon: "kulli", arabic: "\u0643\u064f\u0644\u0651\u0650", word_key: "kll", is_particle: false, sense_retenu: "tout", position: 30 },
      { fr: "chose", phon: "shay'in", arabic: "\u0634\u064e\u0649\u0652\u0621\u064d", is_particle: true, position: 31 },
      { fr: "puissant", pos: "nom", phon: "qadirun", arabic: "\u0642\u064e\u062f\u0650\u064a\u0631\u064c", word_key: "qdr", is_particle: false, sense_retenu: "puissant", position: 32 }
    ],
    words: [
      // wdd pos=0
      {
        word_key: "wdd", position: 0, sense_chosen: "souhaiter",
        analysis_axes: {
          sense_chosen: "souhaiter",
          concept_chosen: "Amour/Affection",
          concepts: {
            "Amour/Affection": {
              status: "retenu",
              senses: ["aimer", "affection", "souhaiter"],
              proof_ctx: "Le verbe wadda est un accompli 3MS de la racine w-d-d. Le Lane's donne : souhaiter, desirer, aimer, eprouver de l'affection. La racine porte le sens d'un desir interieur fort — wadda implique un souhait ardent. Ici « wadda kathirun min ahli al-kitab » signifie qu'un grand nombre des gens du Livre a souhaite. L'accompli indique que le souhait est un fait etabli. Le sens de souhait est retenu car le contexte est hostile — ils souhaitent le mal, pas l'affection.",
              axe1_verset: "Le verbe wadda ouvre le verset en revelant l'intention hostile des gens du Livre. Le champ lexical (souhaiter, rendre, dissimulateurs, jalousie) montre que le souhait est malveillant — ils souhaitent que les croyants reviennent a la couverture. Le verset oppose le souhait hostile (debut) a l'injonction de pardon (fin), montrant la grandeur de la reponse prescrite.",
              axe2_voisins: "Le verset 108 avertissait contre les demandes excessives. Le verset 109 revele la source de cette pression — les gens du Livre qui poussent les croyants a douter. Le verset 110 prescrira les actions positives (priere, aumone). La progression montre que la reponse a l'hostilite n'est pas la vengeance mais l'action positive.",
              axe3_sourate: "La racine w-d-d apparait dans le Coran pour decrire des souhaits et des affections. En 3:69, « un groupe des gens du Livre aimerait vous egarer ». La sourate al-Baqarah et la sourate Al 'Imran partagent ce theme — le souhait hostile des gens du Livre envers les croyants est un theme recurrent.",
              axe4_coherence: "La racine w-d-d apparait environ 29 fois dans le Coran. En 60:7, « peut-etre Dieu mettra-t-il de l'affection entre vous et ceux d'entre eux qui vous sont hostiles ». Le Coran montre que l'hostilite presente n'est pas definitive — l'affection peut la remplacer. En 2:109, le souhait hostile est un fait, mais le pardon est la reponse prescrite.",
              axe5_frequence: "Pour la mission du khalifa, le souhait hostile des autres ne doit pas devier la mission. Le khalifa doit connaitre l'hostilite mais repondre par le pardon et l'action positive. La mission ne depend pas de l'attitude des autres mais de la constance du khalifa."
            }
          }
        }
      },
      // kthr pos=1
      {
        word_key: "kthr", position: 1, sense_chosen: "beaucoup",
        analysis_axes: {
          sense_chosen: "beaucoup",
          concept_chosen: "Abondance/Multiplicité",
          concepts: {
            "Abondance/Multiplicité": {
              status: "retenu",
              senses: ["beaucoup", "abondant", "nombreux"],
              proof_ctx: "Le nom kathirun est un nom masculin singulier indefini de la racine k-th-r. Le Lane's donne : beaucoup, nombreux, abondant. Le mot est au singulier mais porte un sens collectif — il qualifie un nombre important. Ici « kathirun min ahli al-kitab » signifie un grand nombre parmi les gens du Livre — pas tous, mais beaucoup. Le Coran est precis : il ne generalise pas mais precise la quantite.",
              axe1_verset: "Le mot kathirun qualifie le sujet du souhait hostile — ce n'est pas un individu isole mais un grand nombre. Le champ lexical (beaucoup, gens du Livre, jalousie) montre que l'hostilite est repandue mais pas unanime. Le verset est precis dans sa qualification : beaucoup, pas tous.",
              axe2_voisins: "Le verset 101 utilisait « fariqun » (un groupe) pour le rejet. Le verset 109 utilise « kathirun » (nombre de) pour le souhait hostile. La progression montre que l'hostilite est plus repandue que le rejet direct — beaucoup souhaitent le mal mais ne passent pas tous a l'acte.",
              axe3_sourate: "La racine k-th-r apparait dans la sourate al-Baqarah en 2:100 (« la plupart d'entre eux ne croient pas »). La sourate nuance constamment — elle utilise « beaucoup », « un groupe », « la plupart » pour ne pas generaliser.",
              axe4_coherence: "La racine k-th-r apparait environ 150 fois dans le Coran. En 5:59, « beaucoup d'entre eux sont pervers ». Le Coran qualifie toujours la quantite — il ne dit jamais « tous » quand c'est « beaucoup ». Cette precision est un principe coranique de justice.",
              axe5_frequence: "Pour la mission du khalifa, savoir que beaucoup (pas tous) sont hostiles permet de ne pas desesperer. Le khalifa doit distinguer les hostiles des non-hostiles et garder espoir dans ceux qui ne sont pas mentionnes."
            }
          }
        }
      },
      // ahl pos=3
      {
        word_key: "ahl", position: 3, sense_chosen: "gens de",
        analysis_axes: {
          sense_chosen: "gens de",
          concept_chosen: "Famille/Communauté",
          concepts: {
            "Famille/Communauté": {
              status: "retenu",
              senses: ["famille", "gens de", "peuple"],
              proof_ctx: "Le nom ahli est un nom masculin singulier de la racine a-h-l au genitif. Le Lane's donne : famille, gens de, peuple, ceux qui appartiennent a. L'expression « ahl al-kitab » designe les gens du Livre — ceux qui sont definis par leur appartenance au Livre revele. Le mot ahl cree un lien d'appartenance : les gens du Livre sont ceux qui se definissent par le Livre. Ce statut leur donne une responsabilite particuliere — ils connaissent les ecritures.",
              axe1_verset: "Le mot ahli identifie le groupe hostile — les gens du Livre. Le champ lexical (gens du Livre, jalousie, verite eclaircie) montre que leur hostilite vient malgre leur connaissance — ils savent la verite mais la jalousie les pousse a vouloir detourner les croyants. Le mot ahl souligne le paradoxe : ceux qui possedent le Livre agissent contre lui.",
              axe2_voisins: "Le verset 101 parlait de ceux qui ont recu le Livre. Le verset 105 dira que « les gens du Livre et les associateurs n'aimeraient pas ». Le terme « ahl al-kitab » est un identifiant recurrent dans ce passage pour designer ceux qui connaissent mais n'appliquent pas.",
              axe3_sourate: "L'expression « ahl al-kitab » apparait frequemment dans la sourate al-Baqarah. En 2:105, « les gens du Livre et les associateurs ». En 2:109, « nombre de gens du Livre ». La sourate interpelle ce groupe specifiquement car il a la connaissance et donc la responsabilite.",
              axe4_coherence: "L'expression « ahl al-kitab » apparait environ 31 fois dans le Coran. Elle designe un groupe defini par son rapport aux ecritures. Le Coran distingue systematiquement les gens du Livre des autres groupes car leur connaissance les place dans une position de responsabilite unique.",
              axe5_frequence: "Pour la mission du khalifa, les gens du Livre sont un interlocuteur privilegie car ils partagent une base commune de connaissance. Leur hostilite est d'autant plus grave qu'elle vient de la connaissance, pas de l'ignorance."
            }
          }
        }
      },
      // ktb pos=4
      {
        word_key: "ktb", position: 4, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["contrat de mariage", "contrat d'affranchissement", "ecriture revelee", "livre", "registre", "contrat ecrit"],
              proof_ctx: "Le nom al-kitabi est un nom masculin defini genitif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee. L'article defini (al-) marque le Livre connu — les ecritures revelees. Dans l'expression « ahl al-kitab » (gens du Livre), le Livre designe la Torah et l'Evangile. C'est le Livre qui definit le groupe — sans Livre, pas de « gens du Livre ».",
              axe1_verset: "Le mot al-kitab definit le groupe hostile — ce sont les gens du Livre. Le paradoxe est que le Livre confirme l'envoye (cf. 2:101) et pourtant ceux qui le possedent veulent detourner les croyants. Le Livre devient un temoin a charge contre ceux qui le possedent mais ne le suivent pas.",
              axe2_voisins: "Le verset 101 mentionnait « ceux a qui le Livre a ete donne ». Le verset 109 reprend le meme groupe sous l'appellation « gens du Livre ». La continuite thematique montre que le meme groupe est vise — ceux qui connaissent mais rejettent.",
              axe3_sourate: "Le mot kitab est un pilier de la sourate al-Baqarah. En 2:2, la sourate s'ouvre par « ce Livre ». Le Livre est le fil conducteur de toute la sourate.",
              axe4_coherence: "Le mot kitab dans l'expression « ahl al-kitab » designe les ecritures anterieures — la Torah et l'Evangile. Le Coran se presente comme une confirmation de ces ecritures. Ceux qui possedent ces ecritures devraient reconnaitre la confirmation, pas la rejeter.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le fondement commun qui devrait unir les communautes de foi. La connaissance du Livre cree une responsabilite — ceux qui le connaissent doivent le suivre."
            }
          }
        }
      },
      // rdd pos=6 (MISSING from concepts — will query DB)
      {
        word_key: "rdd", position: 6, sense_chosen: "faire revenir",
        analysis_axes: {
          sense_chosen: "faire revenir",
          concept_chosen: "Retour/Renvoi",
          concepts: {
            "Retour/Renvoi": {
              status: "retenu",
              senses: ["faire revenir", "renvoyer", "repousser", "rendre"],
              proof_ctx: "Le verbe yaruddunakum est un inaccompli 3MP de la racine r-d-d avec pronom suffixe 2MP. Le Lane's donne : faire revenir, renvoyer, repousser, rendre a un etat anterieur. La racine porte l'idee d'un retour force — radda c'est renvoyer quelqu'un la d'ou il est parti. Ici le verbe signifie qu'ils veulent vous faire revenir a la couverture apres que vous ayez eu la foi. Le mouvement est retrograde — de la foi vers la couverture, du progres vers la regression.",
              axe1_verset: "Le verbe yaruddunakum est l'action souhaitee par les gens du Livre — faire revenir les croyants a la couverture. Le champ lexical (souhaiter, rendre, dissimulateurs, apres foi) montre que le retour est une regression — on revient en arriere, on perd ce qu'on avait gagne. Le verset montre que l'hostilite des gens du Livre vise a faire regresser les croyants.",
              axe2_voisins: "Le verset 108 avertissait contre la substitution de la couverture a la foi. Le verset 109 revele que certains poussent activement a cette substitution — ils veulent les faire revenir. Le verset 110 prescrira l'antidote : la priere et l'aumone.",
              axe3_sourate: "La racine r-d-d apparait dans la sourate al-Baqarah en 2:217, « ils ne cesseront de vous combattre jusqu'a vous faire revenir de votre religion ». Le theme du retour force est recurrent — les ennemis de la foi cherchent la regression des croyants.",
              axe4_coherence: "La racine r-d-d apparait environ 60 fois dans le Coran. Le schema « faire revenir de la foi » est present en 3:100, « si vous obeissez a un groupe de ceux qui ont recu le Livre, ils vous feront revenir dissimulateurs apres votre foi ». Le Coran avertit systematiquement contre cette tentative de regression.",
              axe5_frequence: "Pour la mission du khalifa, le retour en arriere est la tentation permanente. Le khalifa doit resister a ceux qui veulent le faire regresser. La mission avance — elle ne recule pas."
            }
          }
        }
      },
      // baed pos=8
      {
        word_key: "baed", position: 8, sense_chosen: "apres",
        analysis_axes: {
          sense_chosen: "apres",
          concept_chosen: "Postériorité",
          concepts: {
            "Postériorité": {
              status: "retenu",
              senses: ["apres", "ensuite"],
              proof_ctx: "Le nom ba'di est un nom de la racine b-'-d au genitif. Le Lane's donne : apres, suite a, posterieurement. La posteriorite situe dans le temps — « min ba'di imanikum » signifie apres votre foi. Le ba'd marque que la foi existait avant et que le retour a la couverture serait une regression temporelle — on revient en arriere dans le temps.",
              axe1_verset: "Le mot ba'di situe la regression dans le temps — apres votre foi. Le champ lexical (faire revenir, apres, foi, dissimulateurs) construit un schema temporel : la foi est un acquis passe, le retour a la couverture serait un recul. Le verset montre que la regression est d'autant plus grave qu'elle vient apres la connaissance.",
              axe2_voisins: "Le verset 108 utilisait « qablu » (avant). Le verset 109 utilise « ba'di » (apres). L'opposition avant/apres structure le passage : avant on a demande a Moussa, apres on a recu la foi. Revenir en arriere c'est nier le progres accompli.",
              axe3_sourate: "La racine b-'-d apparait frequemment dans la sourate al-Baqarah pour marquer la posteriorite. En 2:52, « nous vous avons pardonne apres cela ». Le temps est une dimension structurante de la sourate — chaque evenement se situe par rapport a ce qui precede.",
              axe4_coherence: "La racine b-'-d apparait environ 200 fois dans le Coran. L'expression « min ba'di » (apres) est une cheville temporelle courante. En 2:109, elle souligne que la regression est consciente — on sait qu'on avait la foi et on choisit de revenir en arriere.",
              axe5_frequence: "Pour la mission du khalifa, l'apres est le temps de la responsabilite. Apres avoir recu la foi, le khalifa est responsable de la garder. La regression apres la connaissance est plus grave que l'ignorance initiale."
            },
            "Éloignement/Distance": {
              status: "nul",
              senses: ["eloignement", "etre loin"],
              proof_ctx: "Le sens d'eloignement spatial est hors sujet — le contexte est temporel (apres votre foi), pas spatial."
            }
          }
        }
      },
      // amn pos=9
      {
        word_key: "amn", position: 9, sense_chosen: "foi",
        analysis_axes: {
          sense_chosen: "foi",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["accepter comme vrai", "croire", "avoir la foi", "confirmer", "croyant"],
              proof_ctx: "Le nom imanikum est un nom masculin de la racine a-m-n au genitif avec pronom suffixe 2MP. Le Lane's donne : foi, adhesion, croyance. Le pronom « kum » (votre) personnalise la foi — c'est votre foi specifique, celle que vous avez acquise. Meme analyse que pour le verset 108 — l'iman est l'adhesion interieure opposee au kufr.",
              axe1_verset: "Le mot imanikum marque l'acquis que les gens du Livre veulent detruire — votre foi. Le possessif « votre » rend la menace personnelle et directe. Le champ lexical (faire revenir, apres, votre foi, dissimulateurs) montre que la cible est precise : c'est la foi des croyants qui est visee, pas une abstraction.",
              axe2_voisins: "Le verset 108 opposait kufr et iman dans une substitution. Le verset 109 reprend le meme couple mais dans un contexte d'agression exterieure — ce ne sont plus les croyants qui risquent de substituer eux-memes, ce sont les gens du Livre qui veulent les y forcer.",
              axe3_sourate: "La racine a-m-n definit l'identite des croyants dans toute la sourate al-Baqarah. En 2:3-5, les croyants sont decrits. En 2:109, leur foi est la cible de l'hostilite.",
              axe4_coherence: "Le Coran presente la foi comme un tresor a proteger. En 2:109, les gens du Livre veulent l'enlever. En 2:217, les dissimulateurs veulent la meme chose. La foi est un bien precieux qui suscite la jalousie.",
              axe5_frequence: "Pour la mission du khalifa, la foi est l'identite meme de la mission. Perdre la foi c'est perdre l'identite du khalifa."
            }
          }
        }
      },
      // kfr pos=10
      {
        word_key: "kfr", position: 10, sense_chosen: "couvrir",
        analysis_axes: {
          sense_chosen: "couvrir",
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le nom kuffaran est un pluriel de la racine k-f-r au tanwin accusatif. Le Lane's donne : ceux qui couvrent, dissimulateurs. Le pluriel intensif (fu''al) marque l'intensite — kuffar designe ceux qui couvrent activement et constamment. Le tanwin accusatif marque l'etat dans lequel les gens du Livre veulent rendre les croyants — ils veulent les transformer en dissimulateurs. Meme analyse que pour le verset 108.",
              axe1_verset: "Le mot kuffaran est l'etat-cible de la regression — les gens du Livre veulent rendre les croyants dissimulateurs. Le champ lexical (faire revenir, apres foi, dissimulateurs) montre que la dissimulation est la destination de la regression. Le verset oppose l'etat actuel (croyants) a l'etat vise par les hostiles (dissimulateurs).",
              axe2_voisins: "Le verset 108 utilisait « al-kufra » (la couverture). Le verset 109 utilise « kuffaran » (dissimulateurs). Le passage du concept abstrait aux personnes concretes montre que la couverture n'est pas seulement un etat — elle definit des personnes.",
              axe3_sourate: "La racine k-f-r est omnipresente dans la sourate al-Baqarah. Le passage de « croyant » a « dissimulateur » est le pire destin possible selon la sourate.",
              axe4_coherence: "Le Coran utilise kuffar pour designer ceux qui couvrent activement la verite. En 2:109, le mot est en position de resultat : le but de l'hostilite est de transformer les croyants en dissimulateurs.",
              axe5_frequence: "Pour la mission du khalifa, devenir dissimulateur est la trahison ultime de la mission. Le khalifa doit resister a toute pression qui vise a le transformer en dissimulateur."
            }
          }
        }
      },
      // hsd pos=11
      {
        word_key: "hsd", position: 11, sense_chosen: "jalousie",
        analysis_axes: {
          sense_chosen: "jalousie",
          concept_chosen: "Envie/Jalousie",
          concepts: {
            "Envie/Jalousie": {
              status: "retenu",
              senses: ["convoitise", "jalousie", "envier"],
              proof_ctx: "Le nom hasadan est un nom masculin indefini accusatif de la racine h-s-d. Le Lane's donne : jalousie, envie, convoitise, souhaiter que l'autre perde son bienfait. Le hasad est un sentiment interieur dirige vers l'exterieur — le jaloux veut que l'autre perde ce qu'il a. Le tanwin accusatif indique la cause (maf'ul li-ajlihi) — c'est par jalousie qu'ils souhaitent le mal. La jalousie est le moteur de l'hostilite.",
              axe1_verset: "Le mot hasadan revele le moteur de l'hostilite — la jalousie. Le champ lexical (souhaiter, rendre dissimulateurs, jalousie, de chez eux-memes) montre que la jalousie est un sentiment interieur (de chez eux-memes) qui produit un desir hostile exterieur (vous rendre dissimulateurs). Le verset identifie la cause precise de l'hostilite — pas la raison, pas la theologie, mais la jalousie.",
              axe2_voisins: "Le verset 108 diagnostiquait le probleme des croyants (demandes excessives). Le verset 109 diagnostique le probleme des gens du Livre (jalousie). Le verset 110 prescrira le remede (priere et aumone). Le passage passe du diagnostic a la prescription.",
              axe3_sourate: "La racine h-s-d apparait en 2:109 et en 113:5 (l'envieux quand il envie). La sourate al-Baqarah identifie la jalousie comme le moteur de l'hostilite envers les croyants — c'est un diagnostic precis.",
              axe4_coherence: "La racine h-s-d apparait 5 fois dans le Coran. En 4:54, « ou bien envient-ils les gens pour ce que Dieu leur a donne de Sa grace ? ». Le Coran lie la jalousie au refus de reconnaitre la grace de Dieu envers les autres. La jalousie est le refus de la generosite divine.",
              axe5_frequence: "Pour la mission du khalifa, la jalousie est un obstacle exterieur a la mission. Le khalifa doit reconnaitre la jalousie comme telle — un sentiment de l'autre, pas une raison valable — et ne pas s'en laisser affecter."
            }
          }
        }
      },
      // end pos=13
      {
        word_key: "end", position: 13, sense_chosen: "chez",
        analysis_axes: {
          sense_chosen: "chez",
          concept_chosen: "Proximité/Présence",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["aupres de", "chez", "pres de"],
              proof_ctx: "Le mot 'indi est de la racine '-n-d. Le Lane's donne : aupres de, chez, pres de. Ici « min 'indi anfusihim » signifie de chez eux-memes — la jalousie vient de leur propre interieur. La preposition min (de) + 'indi (chez) + anfusihim (eux-memes) localise l'origine de la jalousie dans leur personne propre, pas dans une cause externe.",
              axe1_verset: "Le mot 'indi localise l'origine de la jalousie — de chez eux-memes. Le champ lexical (jalousie, chez, eux-memes) montre que l'hostilite n'a pas de cause externe legitime — elle vient de l'interieur des gens du Livre. Le verset deresponsabilise les croyants : ce n'est pas leur faute mais la jalousie des autres.",
              axe2_voisins: "Le verset 101 utilisait 'indi pour designer l'origine divine (de chez Dieu). Le verset 109 utilise 'indi pour designer l'origine humaine de la jalousie (de chez eux-memes). Le contraste est saisissant : l'envoye vient de chez Dieu, la jalousie vient de chez eux.",
              axe3_sourate: "La preposition 'inda est utilisee dans la sourate pour distinguer les origines. Ce qui vient de chez Dieu est bon, ce qui vient de chez les jaloux est mauvais. La sourate utilise la localisation pour qualifier moralement.",
              axe4_coherence: "L'expression « min 'indi anfusihim » apparait pour marquer que le mal vient de l'interieur de la personne. Le Coran localise la responsabilite dans le sujet — chacun est responsable de ce qui vient de chez lui.",
              axe5_frequence: "Pour la mission du khalifa, identifier l'origine de l'hostilite permet de ne pas se tromper de cible. Le khalifa doit savoir que l'hostilite vient de la jalousie des autres, pas d'un defaut de la verite."
            }
          }
        }
      },
      // nfs pos=14
      {
        word_key: "nfs", position: 14, sense_chosen: "soi-meme",
        analysis_axes: {
          sense_chosen: "soi-meme",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["desir", "ame", "personne", "esprit", "soi-meme"],
              proof_ctx: "Le nom anfusihim est un pluriel feminin de la racine n-f-s avec pronom suffixe 3MP. Le Lane's donne : ame, personne, soi-meme. Le pluriel (anfus) avec le possessif (him, leurs) designe leur propre interieur. L'expression « min 'indi anfusihim » (de chez eux-memes) localise la jalousie dans leur etre propre — ce n'est pas une cause externe mais un etat interieur.",
              axe1_verset: "Le mot anfusihim complete la localisation de la jalousie — de chez eux-memes, de leur propre personne. Le champ lexical (jalousie, chez, eux-memes) montre que la jalousie est un produit de leur nafs (ame/desir), pas une reaction a une offense. Le verset psychologise l'hostilite — il en revele le mecanisme interieur.",
              axe2_voisins: "Le verset 102 parlait de ceux qui ont suivi les demons. Le verset 109 montre que la source du mal est dans le nafs — la jalousie vient de l'ame, pas de l'exterieur. Les versets voisins decrivent differentes sources de deviation : les demons (102), les demandes excessives (108), la jalousie interieure (109).",
              axe3_sourate: "La racine n-f-s est recurrente dans la sourate al-Baqarah. En 2:9, « ils ne trompent qu'eux-memes (anfusahum) ». En 2:44, « vous vous oubliez vous-memes ». La sourate insiste sur la responsabilite du nafs — chacun est responsable de son ame.",
              axe4_coherence: "La racine n-f-s apparait environ 295 fois dans le Coran. Le nafs est le siege des desirs, des passions et des choix. En 2:109, le nafs est le siege de la jalousie. Le Coran montre que le combat essentiel est interieur — contre son propre nafs.",
              axe5_frequence: "Pour la mission du khalifa, connaitre le nafs est essentiel. La jalousie des autres vient de leur nafs — le khalifa doit aussi surveiller son propre nafs pour ne pas tomber dans les memes travers."
            }
          }
        }
      },
      // byn pos=18
      {
        word_key: "byn", position: 18, sense_chosen: "etre clair",
        analysis_axes: {
          sense_chosen: "etre clair",
          concept_chosen: "Séparation/Distance",
          concepts: {
            "Séparation/Distance": {
              status: "retenu",
              senses: ["separer", "quitter", "entre"],
              proof_ctx: "Le verbe tabayyana est un accompli 3MS de la forme V de la racine b-y-n. Le Lane's donne : devenir clair, se manifester, s'eclaircir, apparaitre distinctement. La forme V (tafa''ala) indique que la clarte est venue d'elle-meme — la verite s'est eclaircie. L'accompli indique que l'eclaircissement est un fait acheve — la verite s'est deja manifestee. La racine b-y-n porte le double sens de separation et de clarte — separer les choses rend les choses claires. Le sens retenu est la clarte qui vient de la separation/distinction.",
              axe1_verset: "Le verbe tabayyana aggrave le diagnostic — la verite s'est eclaircie pour eux et pourtant ils persistent dans la jalousie. Le champ lexical (verite, eclaircie, jalousie) montre que l'hostilite est deliberee — ils ne sont pas dans l'ignorance, la verite leur est apparue clairement. Le verset montre que la jalousie l'emporte sur la connaissance.",
              axe2_voisins: "Le verset 101 parlait de ceux qui agissent « comme s'ils ne savaient pas ». Le verset 109 precise que la verite s'est eclaircie — ils savent mais la jalousie les pousse a agir contre la verite. La progression montre que le probleme n'est pas le manque de connaissance mais le refus d'y adherer.",
              axe3_sourate: "La racine b-y-n apparait dans la sourate al-Baqarah en 2:99 (« Nous avons fait descendre des signes clairs ») et en 2:109 (la verite s'est eclaircie). La sourate insiste sur le fait que la verite est claire — le rejet n'est pas du a l'obscurite mais au choix.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. Le sens de clarte est fondamental — le Coran se presente comme « kitab mubin » (livre clair). La verite est claire, c'est le refus qui est le probleme.",
              axe5_frequence: "Pour la mission du khalifa, la verite est claire — le khalifa n'a pas besoin de chercher dans l'obscurite. La clarte est un don de Dieu. Le khalifa doit agir sur cette clarte, pas douter d'elle."
            }
          }
        }
      },
      // hqq pos=20
      {
        word_key: "hqq", position: 20, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["verite", "etre vrai", "realite", "droit"],
              proof_ctx: "Le nom al-haqqu est un nom masculin singulier defini nominatif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est conforme au reel, droit. Le haqq est ce qui est stable et permanent — la verite ne change pas. L'article defini (al-) marque que c'est la verite connue et specifique — la verite de l'envoye et du message. Le nominatif indique que le haqq est le sujet du verbe tabayyana — c'est la verite qui s'est eclaircie.",
              axe1_verset: "Le mot al-haqq est ce qui s'est eclairci — la verite. Le champ lexical (eclaircie, verite, jalousie) montre que la verite est un fait objectif qui ne depend pas de l'opinion des gens du Livre. La verite est la, eclaircie, et pourtant la jalousie pousse a agir contre elle. Le verset oppose la verite objective a la passion subjective.",
              axe2_voisins: "Le verset 108 parlait du chemin droit. Le verset 109 parle de la verite eclaircie. Le verset 110 prescrira les bonnes actions. La progression montre que la verite est le fondement — elle eclaire le chemin et prescrit les actions.",
              axe3_sourate: "La racine h-q-q est fondamentale dans la sourate al-Baqarah. En 2:26, « ils savent que c'est la verite de leur Seigneur ». En 2:42, « ne couvrez pas la verite de mensonge ». La sourate exige la reconnaissance de la verite et condamne sa dissimulation.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. Le haqq est un attribut de Dieu (al-Haqq) et de Sa parole. Le Coran se presente comme le haqq — la verite absolue. Agir contre la verite apres qu'elle se soit eclaircie est le sommet de l'obstination.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le guide absolu de la mission. Le khalifa doit suivre la verite eclaircie, pas les opinions ou les passions. La verite est stable — elle ne penche pas avec les desirs."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "meriter", "etre obligatoire"],
              proof_ctx: "Le sens d'obligation est hors sujet — le mot al-haqq est ici le sujet du verbe tabayyana (s'eclaircir), il designe la verite qui se manifeste, pas un devoir."
            }
          }
        }
      },
      // efw pos=21
      {
        word_key: "efw", position: 21, sense_chosen: "pardonner",
        analysis_axes: {
          sense_chosen: "pardonner",
          concept_chosen: "Pardon/Effacement",
          concepts: {
            "Pardon/Effacement": {
              status: "retenu",
              senses: ["pardonner", "effacer", "excuser"],
              proof_ctx: "Le verbe i'fu est un imperatif 2MP de la racine '-f-w. Le Lane's donne : pardonner, effacer, excuser, renoncer a la punition. Le 'afw est l'effacement de la faute — on fait comme si elle n'avait pas eu lieu. L'imperatif prescrit l'action directement — pardonnez. Le pardon est prescrit malgre la jalousie et l'hostilite des gens du Livre. La distinction avec le surplus (nul) est claire : le verbe est un imperatif d'action, pas un nom de quantite.",
              axe1_verset: "Le verbe i'fu est la premiere prescription du verset — pardonnez. Le champ lexical passe de la description de l'hostilite (souhaiter, jalousie) a la prescription de la reponse (pardonner, passer outre). Le verset montre que la reponse coranique a l'hostilite n'est pas la vengeance mais le pardon. L'imperatif est collectif (2MP) — c'est une prescription pour toute la communaute.",
              axe2_voisins: "Le verset 108 avertissait contre les erreurs internes. Le verset 109 revele l'hostilite externe et prescrit le pardon. Le verset 110 prescrira les actions positives. La progression montre que le pardon n'est pas passif — il est suivi d'actions constructives.",
              axe3_sourate: "La racine '-f-w apparait dans la sourate al-Baqarah en 2:187 (« Dieu vous a pardonne ») et en 2:219 (« le surplus »). La sourate montre que le pardon est un attribut divin que les croyants doivent aussi pratiquer.",
              axe4_coherence: "La racine '-f-w apparait environ 35 fois dans le Coran. Dieu est « al-'Afuww » (Celui qui pardonne) en 4:43 et 22:60. Le pardon humain imite le pardon divin. En 2:109, le pardon est prescrit comme reponse a l'hostilite — c'est un acte de force, pas de faiblesse.",
              axe5_frequence: "Pour la mission du khalifa, le pardon est un outil de la mission. Pardonner les hostiles permet de maintenir la mission sans se laisser distraire par les conflits. Le pardon libere le khalifa de la dette du ressentiment."
            },
            "Surplus/Excès": {
              status: "nul",
              senses: ["surplus"],
              proof_ctx: "Le sens de surplus est hors sujet — le verbe est un imperatif (pardonnez), pas un nom (le surplus)."
            }
          }
        }
      },
      // sfh pos=22 (root ص ف ح — NOTE: different from sfh in concepts which is س ف ه)
      {
        word_key: "sfh", position: 22, sense_chosen: "passer outre",
        analysis_axes: {
          sense_chosen: "passer outre",
          concept_chosen: "Détournement/Page tournée",
          concepts: {
            "Détournement/Page tournée": {
              status: "retenu",
              senses: ["se detourner", "passer outre", "tourner la page"],
              proof_ctx: "Le verbe isfahu est un imperatif 2MP de la racine s-f-h (sad-fa-ha). Le Lane's donne : se detourner d'une offense, passer a cote, tourner la page, ne pas s'attarder. Le safh est l'acte de ne pas s'arreter sur l'offense — on continue sa route sans se retourner. L'imperatif prescrit cette attitude apres le pardon — d'abord on efface la faute (i'fu), ensuite on avance sans se retourner (isfahu). La combinaison des deux imperatifs cree une reponse complete : effacer et avancer.",
              axe1_verset: "Le verbe isfahu est le second imperatif apres i'fu. Le champ lexical (pardonner, passer outre, jusqu'a ce que Dieu vienne) montre que le pardon n'est pas suffisant seul — il faut aussi avancer. Passer outre est l'action qui complete le pardon : non seulement on efface mais on ne s'attarde pas. Le verset prescrit une reponse en deux temps : effacer et avancer.",
              axe2_voisins: "Le verset 108 avertissait contre les demandes excessives. Le verset 109 prescrit le pardon et le detournement. Le verset 110 prescrira les actions positives. La progression montre que la reponse a l'hostilite est un processus : pardonner, avancer, agir positivement.",
              axe3_sourate: "La combinaison « pardonner et passer outre » est une prescription specifique de la sourate al-Baqarah. Elle montre que le pardon coranique n'est pas un arret mais un mouvement — on pardonne et on continue d'avancer.",
              axe4_coherence: "La racine s-f-h (sad-fa-ha) apparait en 2:109, 15:85 (« pardonne d'un beau pardon »), 24:22 (« qu'ils pardonnent et passent outre »), 43:89 (« detourne-toi d'eux et dis paix »). Le Coran prescrit regulierement le safh comme complement du pardon — ne pas s'attarder sur l'offense est aussi important que l'effacer.",
              axe5_frequence: "Pour la mission du khalifa, passer outre est un outil de la mission. Le khalifa ne peut pas se laisser paralyser par les offenses — il doit pardonner et avancer. La mission continue malgre les obstacles."
            }
          }
        }
      },
      // aty pos=24
      {
        word_key: "aty", position: 24, sense_chosen: "venir",
        analysis_axes: {
          sense_chosen: "venir",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["apporter", "donner", "arriver", "venir", "commettre"],
              proof_ctx: "Le verbe ya'tiya est un inaccompli 3MS subjonctif de la racine a-t-y. Le Lane's donne : venir, arriver, apporter. L'inaccompli apres « hatta » (jusqu'a ce que) marque une limite temporelle — pardonnez jusqu'a ce que Dieu vienne avec Son commandement. Le subjonctif marque l'attente d'un evenement futur. Le verbe ya'tiya avec Dieu comme sujet indique que c'est Dieu qui viendra avec Son commandement — l'initiative est divine.",
              axe1_verset: "Le verbe ya'tiya fixe une limite temporelle au pardon — jusqu'a ce que Dieu vienne avec Son commandement. Le champ lexical (pardonner, passer outre, jusqu'a ce que, Dieu, commandement) montre que le pardon n'est pas indefini mais limité par la venue du commandement divin. Le verset equilibre la patience et l'attente de la justice divine.",
              axe2_voisins: "Le verset 101 utilisait la racine a-t-y au sens de donner (le Livre a ete donne). Le verset 109 l'utilise au sens de venir (Dieu viendra avec Son commandement). La racine sert les deux sens — donner et venir — selon le contexte.",
              axe3_sourate: "La racine a-t-y est polyvalente dans la sourate al-Baqarah. En 2:101, « un envoye de chez Dieu vint ». En 2:109, « jusqu'a ce que Dieu vienne ». La sourate montre que les venues divines sont des tournants — chaque venue change la situation.",
              axe4_coherence: "L'expression « hatta ya'tiya Allahu bi-amrihi » (jusqu'a ce que Dieu vienne avec Son commandement) marque une attente active — on ne reste pas passif mais on attend l'intervention divine. Le Coran prescrit la patience active, pas la passivite.",
              axe5_frequence: "Pour la mission du khalifa, la venue du commandement divin est l'horizon de la mission. Le khalifa doit agir dans l'intervalle — pardonner, passer outre, et attendre le commandement divin qui resoudra la situation."
            }
          }
        }
      },
      // alh pos=25
      {
        word_key: "alh", position: 25, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif. Le Lane's donne : Dieu, la divinite unique. Ici Allah est le sujet du verbe ya'tiya — c'est Dieu qui viendra avec Son commandement. Dieu est presente comme Celui qui agira — le pardon est prescrit en attendant Son intervention. Meme analyse fondamentale que pour les versets precedents.",
              axe1_verset: "Le nom Allahu apparait deux fois dans le verset — une fois comme sujet de la venue (Dieu vienne avec Son commandement) et une fois comme sujet de la puissance (Dieu est sur toute chose puissant). Les deux occurrences encadrent l'assurance : Dieu viendra et Il est puissant. Le verset rassure les croyants apres avoir decrit l'hostilite.",
              axe2_voisins: "Le verset 108 avertissait contre la substitution. Le verset 109 prescrit le pardon en attendant Dieu. Le verset 110 rappellera que tout bien est retrouve aupres de Dieu. La presence de Dieu encadre tout le passage — Il est la source de la verite, la garantie de la justice, et la destination du bien.",
              axe3_sourate: "Le nom Allah structure chaque passage de la sourate. En 2:109, la double mention rassure les croyants face a l'hostilite — Dieu est actif et puissant. La sourate montre que face a l'hostilite humaine, la reponse est la confiance en Dieu.",
              axe4_coherence: "Le nom Allah dans l'expression « hatta ya'tiya Allahu bi-amrihi » apparait pour assurer les croyants que Dieu prendra les choses en main. Le Coran montre que la justice divine viendra — les croyants doivent pardonner en attendant.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le garant de la mission. Le khalifa pardonne et avance en sachant que Dieu viendra avec Son commandement. La confiance en Dieu est le moteur de la patience."
            }
          }
        }
      },
      // amr pos=26
      {
        word_key: "amr", position: 26, sense_chosen: "commandement",
        analysis_axes: {
          sense_chosen: "commandement",
          concept_chosen: "Commandement/Autorité",
          concepts: {
            "Commandement/Autorité": {
              status: "retenu",
              senses: ["nommer gouverneur", "ordonner", "commander"],
              proof_ctx: "Le nom amrihi est un nom masculin de la racine a-m-r au genitif avec pronom suffixe 3MS. Le Lane's donne : commandement, ordre, affaire, chose. Le pronom « hi » (Son) rattache le commandement a Dieu — c'est Son commandement specifique. Le amr de Dieu est Son decret qui tranche les situations. L'expression « ya'tiya Allahu bi-amrihi » signifie que Dieu viendra avec Son commandement — Il prendra une decision qui changera la situation.",
              axe1_verset: "Le mot amrihi est l'objet de la venue divine — Dieu viendra avec Son commandement. Le champ lexical (venir, Dieu, commandement, puissant) montre que le commandement divin est la resolution de la situation. Le verset dit que le pardon est temporaire — il durera jusqu'a ce que Dieu tranche par Son commandement.",
              axe2_voisins: "Le verset 107 affirmait la souverainete de Dieu. Le verset 109 montre que cette souverainete s'exercera par un commandement — Dieu n'est pas passif face a l'hostilite. Le verset 110 prescrira ce que les croyants doivent faire en attendant.",
              axe3_sourate: "La racine a-m-r apparait dans la sourate al-Baqarah en 2:27 (le commandement de Dieu de maintenir les liens) et en 2:109 (le commandement futur). La sourate montre que Dieu commande et que Son commandement est la resolution de toute situation.",
              axe4_coherence: "La racine a-m-r apparait environ 248 fois dans le Coran. L'expression « amru Allah » (le commandement de Dieu) designe les decrets divins qui tranchent les situations. En 10:24, « Notre commandement arrive de nuit ou de jour ». Le commandement divin est certain — seul son moment est inconnu.",
              axe5_frequence: "Pour la mission du khalifa, le commandement de Dieu est l'horizon ultime. Le khalifa doit agir en attendant ce commandement — pardonner, avancer, construire. Le commandement viendra au moment choisi par Dieu."
            },
            "Affaire/Chose": {
              status: "nul",
              senses: ["affaire", "chose"],
              proof_ctx: "Le sens d'affaire est secondaire ici — le contexte est la venue de Dieu avec quelque chose de specifique (Son commandement), pas une affaire generale."
            }
          }
        }
      },
      // kll pos=30
      {
        word_key: "kll", position: 30, sense_chosen: "tout",
        analysis_axes: {
          sense_chosen: "tout",
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              senses: ["chaque", "tout", "totalite"],
              proof_ctx: "Le nom kulli est un nom masculin de la racine k-l-l au genitif. Le Lane's donne : tout, chaque, totalite. L'expression « 'ala kulli shay'in » (sur toute chose) exprime l'universalite absolue — il n'y a pas d'exception. Kulli est un quantificateur universel qui englobe tout sans reste.",
              axe1_verset: "Le mot kulli qualifie la puissance de Dieu — sur TOUTE chose puissant. Le champ lexical (Dieu, toute, chose, puissant) construit l'assurance finale du verset : la puissance de Dieu est universelle. Aucune chose n'echappe a Sa puissance — y compris la resolution de la situation avec les gens du Livre.",
              axe2_voisins: "Le verset 106 disait « Dieu est sur toute chose puissant ». Le verset 109 reprend la meme formule. La repetition rassure — la puissance de Dieu est affirmee a chaque moment critique.",
              axe3_sourate: "La formule « 'ala kulli shay'in qadir » (sur toute chose puissant) apparait plusieurs fois dans la sourate al-Baqarah (2:20, 2:106, 2:109, 2:148, 2:259, 2:284). Elle ponctue les passages cles comme une refrain de reassurance.",
              axe4_coherence: "La racine k-l-l apparait dans de nombreux contextes pour exprimer la totalite. En 2:109, la totalite renforce la puissance — rien n'echappe a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la totalite de la puissance de Dieu est la garantie de la mission. Aucun obstacle n'echappe a la puissance de Dieu."
            }
          }
        }
      },
      // qdr pos=32
      {
        word_key: "qdr", position: 32, sense_chosen: "puissant",
        analysis_axes: {
          sense_chosen: "puissant",
          concept_chosen: "Puissance/Capacité",
          concepts: {
            "Puissance/Capacité": {
              status: "retenu",
              senses: ["pouvoir", "etre capable"],
              proof_ctx: "Le nom qadirun est un nom masculin singulier indefini nominatif de la racine q-d-r. Le Lane's donne : puissant, capable, ayant le pouvoir d'agir. Le qadir est celui qui a la capacite de faire ce qu'il veut. L'expression « 'ala kulli shay'in qadir » (sur toute chose puissant) est un attribut divin qui affirme la puissance absolue de Dieu. Rien ne Lui echappe et rien ne Lui resiste.",
              axe1_verset: "Le mot qadirun ferme le verset avec une assurance de puissance divine. Le champ lexical (Dieu, toute chose, puissant) construit la conclusion : face a l'hostilite des gens du Livre, Dieu est puissant sur toute chose. Le verset commence par le constat de l'hostilite et se termine par la puissance de Dieu — la progression rassure.",
              axe2_voisins: "Le verset 106 utilisait la meme formule. Le verset 109 la reprend. La repetition cree un cadre de securite — entre les deux occurrences, les croyants sont proteges par la puissance de Dieu.",
              axe3_sourate: "La puissance de Dieu est un theme recurrent de la sourate al-Baqarah. Chaque passage difficile se termine par une affirmation de puissance divine. La sourate montre que les difficultes sont reelles mais la puissance de Dieu est superieure.",
              axe4_coherence: "La racine q-d-r apparait environ 132 fois dans le Coran. L'attribut « qadir » est specifique a Dieu dans la plupart des contextes. La puissance divine est la garantie de toutes les promesses et de tous les commandements.",
              axe5_frequence: "Pour la mission du khalifa, la puissance de Dieu est le fondement de la confiance. Le khalifa peut pardonner et avancer parce qu'il sait que Dieu est puissant sur toute chose — la justice viendra."
            },
            "Mesure/Détermination": {
              status: "nul",
              senses: ["mesurer", "determiner", "decreter", "destin", "valeur"],
              proof_ctx: "Le sens de mesure est hors sujet — l'expression « 'ala kulli shay'in qadir » designe la puissance, pas la mesure."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:110
  // "Et accomplissez la Salat et acquittez la Zakat. Et tout
  //  ce que vous avancez de bien pour vous-memes, vous le
  //  retrouverez aupres d'Allah, car Allah voit parfaitement
  //  ce que vous faites."
  // =====================================================
  110: {
    verse_id: 117,
    analysis_id: 476,
    translation_arab: "Et accomplissez la priere et donnez la purification. Et ce que vous avancez pour vous-memes de bien, vous le trouverez aupres de Dieu. Certes Dieu voit ce que vous faites.",
    full_translation: "Et accomplissez la Salat et acquittez la Zakat. Et tout ce que vous avancez de bien pour vous-memes, vous le retrouverez aupres d'Allah, car Allah voit parfaitement ce que vous faites.",
    translation_explanation: `§DEMARCHE§
Le verset prescrit deux actions fondamentales et promet une recompense. Le verbe **aqimu** est un imperatif 2MP de la forme IV de la racine q-w-m. Le Lane's donne : se lever, se tenir debout, etablir, accomplir. La forme IV (aqama) signifie etablir quelque chose de maniere droite et stable. L'imperatif prescrit l'accomplissement de la priere. Le nom **al-salata** est un nom feminin de la racine s-l-w. Le Lane's donne : priere, invocation, priere rituelle. La priere est l'acte de se tourner vers Dieu par des paroles et des gestes. Le verbe **atu** est un imperatif 2MP de la forme IV de la racine a-t-y. Le Lane's donne : donner, apporter, accorder. La forme IV signifie donner activement — l'imperatif prescrit le don de la zakat. Le nom **al-zakata** est un nom feminin de la racine z-k-w. Le Lane's donne : aumone legale, purification, croissance. La zakat est a la fois une purification des biens et une croissance spirituelle. Le verbe **tuqaddimu** est un inaccompli 2MP de la forme II de la racine q-d-m. Le Lane's donne : avancer, mettre en avant, preceder. La forme II intensifie l'action — envoyer en avant deliberement. L'inaccompli avec « ma » (ce que) cree une generalite — tout ce que vous avancez. Le nom **anfusikum** est un pluriel de la racine n-f-s avec pronom 2MP. Le Lane's donne : ame, personne, soi-meme. « Li-anfusikum » (pour vos ames) indique que le bien fait profite d'abord a celui qui le fait. Le nom **khayrin** est un nom de la racine kh-y-r. Le Lane's donne : bien, meilleur, bon. Le khair est le bien absolu — tout ce qui est bon, benefique et positif. Le verbe **tajidu-hu** est un inaccompli 2MP de la racine w-j-d avec pronom suffixe 3MS. Le Lane's donne : trouver, rencontrer, decouvrir. L'inaccompli marque que la decouverte est future — vous le trouverez. Le pronom « hu » (le) renvoie au bien avance. Le mot **'inda** est de la racine '-n-d. Le Lane's donne : aupres de, chez. « 'Inda Allahi » (aupres de Dieu) designe la presence divine — le bien est retrouve aupres de Dieu. Le nom **Allahi** est le nom propre de la divinite au genitif. Le nom **Allaha** est la deuxieme occurrence au nominatif. Le verbe **ta'maluna** est un inaccompli 2MP de la racine '-m-l. Le Lane's donne : travailler, agir, faire. L'inaccompli marque la continuite — Dieu voit ce que vous faites en permanence. Le nom **basirun** est un nom de la racine b-s-r. Le Lane's donne : voyant, clairvoyant, qui voit. Dieu est celui qui voit — Sa vision est totale et permanente.

§JUSTIFICATION§
**accomplissez** — Le sens retenu est « se lever/etablir ». Le verbe aqimu signifie etablir de maniere droite. L'alternative « peuple » est ecartee car le verbe est un imperatif, pas un nom de communaute.

**la priere** — Le sens retenu est « priere ». Le mot al-salat designe la priere rituelle. L'alternative « suivre de pres » est ecartee car le contexte est l'acte de culte.

**donnez** — Le sens retenu est « donner ». Le verbe atu signifie donner activement. Meme racine que aty en 2:101 mais a la forme IV imperative.

**la purification** — Le sens retenu est « purification/aumone legale ». Le mot al-zakat designe la purification des biens. Ce sens unique englobe purification et croissance.

**avancez** — Le sens retenu est « avancer ». Le verbe tuqaddimu signifie mettre en avant, envoyer devant soi. L'alternative « ancien » est ecartee car le verbe est un inaccompli actif.

**vos ames** — Le sens retenu est « ame/soi-meme ». Le mot anfusikum designe vos propres personnes. Meme racine que nfs en 2:109.

**de bien** — Le sens retenu est « bien ». Le mot khayrin designe tout ce qui est bon et benefique.

**trouverez** — Le sens retenu est « trouver ». Le verbe tajiduhu signifie trouver, rencontrer. Ce sens est unique.

**aupres de** — Le sens retenu est « proximite/presence ». Le mot 'inda designe la presence de Dieu. Meme analyse que pour 2:101.

**Dieu** — Le sens retenu est « divinite ». Le nom Allah est le nom propre de la divinite.

**faites** — Le sens retenu est « agir/travailler ». Le verbe ta'maluna designe l'action deliberee. L'alternative « gouverneur » est ecartee car le mot est un verbe d'action.

**voit** — Le sens retenu est « voir ». Le mot basirun designe la vision totale. L'alternative « peau » est ecartee car l'attribut divin est la vision, pas l'anatomie.

§CRITIQUE§
Hamidullah traduit « accomplissez la Salat et acquittez la Zakat ». Nous traduisons « accomplissez la priere et donnez la purification ». La difference porte sur les mots Salat et Zakat : Hamidullah conserve les termes arabes, nous les traduisons. « Priere » rend le sens de salat sans jargon technique. « Purification » rend le sens etymologique de zakat — la zakat n'est pas seulement une aumone, c'est une purification des biens et une croissance de l'ame. Hamidullah traduit aussi « Allah voit parfaitement » la ou nous donnons « Dieu voit ». Le mot « parfaitement » n'est pas dans le texte arabe — le texte dit simplement « basir » (voyant). Ajouter « parfaitement » est une interpretation, pas une traduction.`,
    segments: [
      { fr: "et accomplissez", pos: "verbe", phon: "wa-aqimu", arabic: "\u0648\u064e\u0623\u064e\u0642\u0650\u064a\u0645\u064f\u0648\u0627\u06df", word_key: "qwm", is_particle: false, sense_retenu: "etablir", position: 0 },
      { fr: "la priere", pos: "nom", phon: "al-salata", arabic: "\u0671\u0644\u0635\u0651\u064e\u0644\u064e\u0648\u0640\u0629\u064e", word_key: "slw", is_particle: false, sense_retenu: "priere", position: 1 },
      { fr: "et donnez", pos: "verbe", phon: "wa-atu", arabic: "\u0648\u064e\u0621\u064e\u0627\u062a\u064f\u0648\u0627\u06df", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 2 },
      { fr: "la purification", pos: "nom", phon: "al-zakata", arabic: "\u0671\u0644\u0632\u0651\u064e\u0643\u064e\u0648\u0640\u0629\u064e", word_key: "zkw", is_particle: false, sense_retenu: "purification", position: 3 },
      { fr: "et ce que", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 4 },
      { fr: "vous avancez", pos: "verbe", phon: "tuqaddimu", arabic: "\u062a\u064f\u0642\u064e\u062f\u0651\u0650\u0645\u064f\u0648\u0627\u06df", word_key: "qdm", is_particle: false, sense_retenu: "avancer", position: 5 },
      { fr: "pour vos ames", pos: "nom", phon: "li-anfusikum", arabic: "\u0644\u0650\u0623\u064e\u0646\u0641\u064f\u0633\u0650\u0643\u064f\u0645", word_key: "nfs", is_particle: false, sense_retenu: "soi-meme", position: 6 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 7 },
      { fr: "bien", pos: "nom", phon: "khayrin", arabic: "\u062e\u064e\u064a\u0652\u0631\u064d", word_key: "xyr", is_particle: false, sense_retenu: "bien", position: 8 },
      { fr: "vous le trouverez", pos: "verbe", phon: "tajiduhu", arabic: "\u062a\u064e\u062c\u0650\u062f\u064f\u0648\u0647\u064f", word_key: "wjd", is_particle: false, sense_retenu: "trouver", position: 9 },
      { fr: "aupres de", phon: "'inda", arabic: "\u0639\u0650\u0646\u062f\u064e", word_key: "end", is_particle: false, sense_retenu: "aupres de", position: 10 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 11 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 12 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 13 },
      { fr: "de ce que", phon: "bi-ma", arabic: "\u0628\u0650\u0645\u064e\u0627", is_particle: true, position: 14 },
      { fr: "vous faites", pos: "verbe", phon: "ta'maluna", arabic: "\u062a\u064e\u0639\u0652\u0645\u064e\u0644\u064f\u0648\u0646\u064e", word_key: "eml", is_particle: false, sense_retenu: "agir", position: 15 },
      { fr: "voyant", pos: "nom", phon: "basirun", arabic: "\u0628\u064e\u0635\u0650\u064a\u0631\u064c", word_key: "bsr", is_particle: false, sense_retenu: "voir", position: 16 }
    ],
    words: [
      // qwm pos=0
      {
        word_key: "qwm", position: 0, sense_chosen: "etablir",
        analysis_axes: {
          sense_chosen: "etablir",
          concept_chosen: "Verticalité/Droiture",
          concepts: {
            "Verticalité/Droiture": {
              status: "retenu",
              senses: ["se lever", "droit", "se dresser", "corriger", "se tenir debout", "rectitude", "redresser"],
              proof_ctx: "Le verbe aqimu est un imperatif 2MP de la forme IV de la racine q-w-m. Le Lane's donne : se lever, se tenir debout, etablir, accomplir droitement. La forme IV (aqama) signifie faire se tenir droit — etablir quelque chose de maniere stable et correcte. L'imperatif prescrit directement l'action. « Aqimu al-salat » signifie etablissez la priere — pas seulement priez, mais etablissez-la de maniere droite et reguliere.",
              axe1_verset: "Le verbe aqimu ouvre le verset avec une prescription d'action positive. Le champ lexical (etablir, priere, donner, purification) montre que le verset prescrit des actions concretes apres les avertissements des versets precedents. Etablir la priere est la premiere reponse a l'hostilite — se tourner vers Dieu plutot que vers les ennemis.",
              axe2_voisins: "Le verset 109 prescrivait le pardon. Le verset 110 prescrit les actions positives — priere et aumone. La progression montre que la reponse complete a l'hostilite est : pardonner, passer outre, prier et donner. Le verset 110 est l'aboutissement constructif du passage.",
              axe3_sourate: "L'expression « aqimu al-salat » apparait dans la sourate al-Baqarah en 2:43, 2:83, 2:110. La repetition montre que la priere est un pilier structurant de la sourate — chaque section importante rappelle l'obligation de la priere.",
              axe4_coherence: "L'expression « aqimu al-salat » apparait environ 17 fois dans le Coran. Le verbe aqimu implique la regularite, la droiture et la completude — pas seulement accomplir mais etablir de maniere permanente. La priere est un acte fondateur, pas un evenement ponctuel.",
              axe5_frequence: "Pour la mission du khalifa, etablir la priere est le premier acte de la mission. La priere relie le khalifa a Dieu et lui donne la force de pardonner et d'avancer. Sans priere, la mission est sans fondement."
            },
            "Peuple/Communauté": {
              status: "nul",
              senses: ["peuple", "communaute", "nation", "tribu", "groupe"],
              proof_ctx: "Le sens de peuple est hors sujet — le verbe aqimu est un imperatif de la forme IV, pas un nom de communaute."
            }
          }
        }
      },
      // slw pos=1
      {
        word_key: "slw", position: 1, sense_chosen: "priere",
        analysis_axes: {
          sense_chosen: "priere",
          concept_chosen: "Prière/Invocation",
          concepts: {
            "Prière/Invocation": {
              status: "retenu",
              senses: ["prier", "priere rituelle", "invoquer", "benir", "lieu de priere"],
              proof_ctx: "Le nom al-salata est un nom feminin singulier defini accusatif de la racine s-l-w. Le Lane's donne : priere, priere rituelle, invocation, benediction, lieu de priere. La salat est l'acte fondamental de se tourner vers Dieu par des paroles et des gestes. L'article defini (al-) marque que c'est la priere connue — la priere rituelle prescrite. La salat est le lien direct entre le serviteur et Dieu.",
              axe1_verset: "Le mot al-salata est l'objet du verbe aqimu — etablissez la priere. Le champ lexical (etablir, priere, donner, purification, bien, trouver, aupres de Dieu) montre que la priere est la premiere des actions prescrites. Le verset place la priere en tete — c'est l'action fondatrice qui ouvre la voie a toutes les autres.",
              axe2_voisins: "Le verset 109 prescrivait le pardon face a l'hostilite. Le verset 110 prescrit la priere comme action constructive. La transition montre que le pardon est suivi de l'action positive — la priere est l'antidote a l'amertume du pardon.",
              axe3_sourate: "La priere est mentionnee des le debut de la sourate al-Baqarah. En 2:3, « ceux qui accomplissent la priere ». En 2:43, « accomplissez la priere ». En 2:110, la meme injonction est repetee. La sourate rappelle la priere a chaque tournant crucial.",
              axe4_coherence: "La racine s-l-w apparait environ 99 fois dans le Coran. La priere est le premier pilier de l'Islam mentionne dans le Coran. En 2:110, elle est prescrite comme reponse aux epreuves — la priere est un refuge actif.",
              axe5_frequence: "Pour la mission du khalifa, la priere est la connection avec le mandant de la mission. Sans priere, le khalifa est coupe de sa source. La priere maintient le lien vivant avec Dieu."
            },
            "Proximité/Attachement": {
              status: "nul",
              senses: ["suivre de pres"],
              proof_ctx: "Le sens de proximite physique est hors sujet — le contexte est la priere rituelle, pas le fait de suivre de pres."
            }
          }
        }
      },
      // aty pos=2
      {
        word_key: "aty", position: 2, sense_chosen: "donner",
        analysis_axes: {
          sense_chosen: "donner",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["apporter", "donner", "arriver", "venir", "commettre"],
              proof_ctx: "Le verbe atu est un imperatif 2MP de la forme IV de la racine a-t-y. Le Lane's donne : donner, apporter, accorder. La forme IV (ata) signifie donner activement — faire parvenir quelque chose a quelqu'un. L'imperatif prescrit le don de la zakat. « Atu al-zakat » signifie donnez la purification — faites parvenir la zakat aux ayants droit.",
              axe1_verset: "Le verbe atu est le deuxieme imperatif du verset — donnez la purification. Le champ lexical (etablir, priere, donner, purification) montre que les deux prescriptions sont complementaires : la priere est le lien vertical avec Dieu, la zakat est le lien horizontal avec la communaute. Le verset prescrit les deux dimensions de la foi.",
              axe2_voisins: "Le verset 109 prescrivait le pardon. Le verset 110 prescrit la priere et le don. La progression montre que la reponse a l'hostilite est complete : pardonner (effacer), passer outre (avancer), prier (se tourner vers Dieu), donner (se tourner vers les autres).",
              axe3_sourate: "La racine a-t-y est polyvalente dans la sourate. En 2:101, elle designe le don (utu, on leur a donne le Livre). En 2:110, elle designe le don actif (atu, donnez la zakat). La sourate montre que le don est un mouvement permanent — on recoit et on donne.",
              axe4_coherence: "L'expression « atu al-zakata » (donnez la zakat) apparait avec « aqimu al-salata » dans une vingtaine de versets du Coran. Les deux prescriptions sont systematiquement associees — la priere et la zakat sont inseparables.",
              axe5_frequence: "Pour la mission du khalifa, donner est un acte de la mission. Le khalifa ne garde pas pour lui — il redistribue. Le don est la manifestation concrete de la foi."
            }
          }
        }
      },
      // zkw pos=3
      {
        word_key: "zkw", position: 3, sense_chosen: "purification",
        analysis_axes: {
          sense_chosen: "purification",
          concept_chosen: "Purification/Croissance",
          concepts: {
            "Purification/Croissance": {
              status: "retenu",
              senses: ["aumone legale", "prosperer", "purifier", "croitre", "etre pur"],
              proof_ctx: "Le nom al-zakata est un nom feminin singulier defini accusatif de la racine z-k-w. Le Lane's donne : purification, croissance, aumone legale. La zakat est a la fois un acte de purification (on purifie ses biens en donnant) et un acte de croissance (le bien donne croit aupres de Dieu). L'article defini (al-) marque que c'est la zakat connue — l'aumone legale prescrite. Le double sens de purification et de croissance montre que donner n'est pas une perte mais un gain.",
              axe1_verset: "Le mot al-zakata est l'objet du don prescrit. Le champ lexical (donner, purification, avancer, bien, trouver aupres de Dieu) montre que la zakat est un investissement : on donne ici et on retrouve aupres de Dieu. Le verset lie directement le don terrestre a la recompense divine.",
              axe2_voisins: "Le verset 109 diagnostiquait la jalousie des gens du Livre. Le verset 110 prescrit la generosité comme antidote — donner la zakat c'est le contraire de la jalousie. La jalousie veut enlever aux autres, la zakat donne aux autres.",
              axe3_sourate: "La zakat apparait dans la sourate al-Baqarah en 2:43, 2:83, 2:110, 2:177, 2:277. La sourate insiste sur le don comme pilier de la foi — chaque section rappelle l'obligation de la zakat.",
              axe4_coherence: "La racine z-k-w apparait environ 59 fois dans le Coran. La zakat est le troisieme pilier de l'Islam. Le Coran lie systematiquement priere et zakat — la foi s'exprime verticalement (priere) et horizontalement (zakat).",
              axe5_frequence: "Pour la mission du khalifa, la purification est un outil de la mission. Le khalifa purifie ses biens en donnant et fait croitre son bien aupres de Dieu. La mission exige la generosite."
            }
          }
        }
      },
      // qdm pos=5
      {
        word_key: "qdm", position: 5, sense_chosen: "avancer",
        analysis_axes: {
          sense_chosen: "avancer",
          concept_chosen: "Antériorité/Établissement",
          concepts: {
            "Antériorité/Établissement": {
              status: "retenu",
              senses: ["preceder", "ancien", "pied", "avancer"],
              proof_ctx: "Le verbe tuqaddimu est un inaccompli 2MP de la forme II de la racine q-d-m. Le Lane's donne : avancer, mettre en avant, envoyer devant soi. La forme II (qaddama) intensifie l'action — on ne se contente pas d'avancer, on envoie deliberement devant soi. L'inaccompli avec « ma » (ce que) cree une generalite — tout ce que vous envoyez devant vous. Le sens d'avancer est spatial-temporel : on envoie les bonnes actions devant soi pour les retrouver plus tard.",
              axe1_verset: "Le verbe tuqaddimu introduit la promesse du verset — ce que vous avancez de bien, vous le retrouverez. Le champ lexical (avancer, ames, bien, trouver, aupres de Dieu) construit un schema d'investissement : les bonnes actions sont envoyees en avant et retrouvees aupres de Dieu. Le verset transforme l'action presente en recompense future.",
              axe2_voisins: "Le verset 109 prescrivait le pardon face a l'hostilite. Le verset 110 elargit la prescription : non seulement pardonnez et priez, mais aussi avancez du bien. La progression montre que chaque action positive est un investissement pour l'avenir.",
              axe3_sourate: "La racine q-d-m apparait dans la sourate al-Baqarah en 2:95 (« ce que leurs mains ont avance ») et en 2:110 (« ce que vous avancez »). La sourate utilise cette racine pour decrire les actions envoyees devant soi — bonnes ou mauvaises, elles seront retrouvees.",
              axe4_coherence: "La racine q-d-m apparait environ 27 fois dans le Coran. L'expression « ma qaddamat » (ce qu'on a avance) est un refrain coranique. En 82:5, « chaque ame saura ce qu'elle a avance et ce qu'elle a retarde ». Le Coran presente la vie comme un envoi d'actions vers l'avenir.",
              axe5_frequence: "Pour la mission du khalifa, avancer du bien est l'acte fondamental de la mission. Chaque action positive est un investissement — le khalifa retrouvera ce qu'il a avance. La mission est un travail d'avancement permanent."
            }
          }
        }
      },
      // nfs pos=6
      {
        word_key: "nfs", position: 6, sense_chosen: "soi-meme",
        analysis_axes: {
          sense_chosen: "soi-meme",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["desir", "ame", "personne", "esprit", "soi-meme"],
              proof_ctx: "Le nom anfusikum est un pluriel feminin de la racine n-f-s avec pronom suffixe 2MP. Le Lane's donne : ame, personne, soi-meme. L'expression « li-anfusikum » (pour vos ames, pour vous-memes) indique que le bien fait profite d'abord a celui qui le fait. La preposition « li » (pour) marque le beneficiaire — c'est pour votre propre personne que vous avancez du bien.",
              axe1_verset: "Le mot anfusikum identifie le beneficiaire du bien avance — vous-memes. Le champ lexical (avancer, pour vos ames, bien, trouver) montre que le don n'est pas une perte mais un gain personnel. Le verset transforme l'altruisme apparent en investissement reel — donner c'est donner a soi-meme.",
              axe2_voisins: "Le verset 109 utilisait « anfusihim » (eux-memes) pour localiser la source de la jalousie. Le verset 110 utilise « anfusikum » (vous-memes) pour localiser le benefice du bien. Le contraste est saisissant : la jalousie vient de chez eux-memes (negatif), le bien profite a vous-memes (positif).",
              axe3_sourate: "La racine n-f-s est omnipresente dans la sourate al-Baqarah. En 2:110, le nafs est le beneficiaire du bien. La sourate montre que chaque action revient a son auteur — le bien comme le mal.",
              axe4_coherence: "L'expression « li-anfusikum » (pour vous-memes) apparait dans plusieurs versets pour montrer que les bonnes actions profitent a leur auteur. Le Coran insiste sur le fait que le bien n'est pas gratuit — il revient a celui qui le fait.",
              axe5_frequence: "Pour la mission du khalifa, le bien fait est un investissement pour soi-meme. Le khalifa ne donne pas en pure perte — il retrouvera tout aupres de Dieu."
            }
          }
        }
      },
      // xyr pos=8
      {
        word_key: "xyr", position: 8, sense_chosen: "bien",
        analysis_axes: {
          sense_chosen: "bien",
          concept_chosen: "Bien/Bonté",
          concepts: {
            "Bien/Bonté": {
              status: "retenu",
              senses: ["bien", "meilleur", "bon"],
              proof_ctx: "Le nom khayrin est un nom masculin singulier indefini genitif de la racine kh-y-r. Le Lane's donne : bien, meilleur, bon, benefique. Le khayr est le bien absolu — tout ce qui est bon, utile, benefique. L'indefini (khayrin sans article) marque la generalite — tout bien, quel qu'il soit. L'expression « min khayrin » (de bien) qualifie ce qui est avance — ce n'est pas n'importe quoi mais du bien specifiquement.",
              axe1_verset: "Le mot khayrin qualifie ce qui est avance — du bien. Le champ lexical (avancer, ames, bien, trouver, Dieu) montre que seul le bien est retrouve aupres de Dieu. Le verset montre que l'investissement spirituel est specifique — c'est le bien qui est retrouve, pas n'importe quelle action.",
              axe2_voisins: "Le verset 109 decrivait l'hostilite motivee par la jalousie. Le verset 110 prescrit le bien comme reponse — la jalousie veut enlever le bien, le verset prescrit de faire le bien. Le contraste montre que la reponse au mal est le bien, pas le mal.",
              axe3_sourate: "La racine kh-y-r apparait frequemment dans la sourate al-Baqarah. En 2:103, « une recompense de chez Dieu aurait ete meilleure (khayrun) ». En 2:110, le bien avance est retrouve aupres de Dieu. La sourate lie le bien a la recompense divine.",
              axe4_coherence: "La racine kh-y-r apparait environ 176 fois dans le Coran. Le khayr est un terme global qui englobe toute forme de bien. Le Coran prescrit le bien comme reponse universelle aux epreuves.",
              axe5_frequence: "Pour la mission du khalifa, le bien est la substance de la mission. Le khalifa est charge de produire du bien — pour lui-meme et pour les autres. Tout bien avance est un pas dans la mission."
            }
          }
        }
      },
      // wjd pos=9
      {
        word_key: "wjd", position: 9, sense_chosen: "trouver",
        analysis_axes: {
          sense_chosen: "trouver",
          concept_chosen: "Découverte/Existence",
          concepts: {
            "Découverte/Existence": {
              status: "retenu",
              senses: ["trouver", "exister", "rencontrer"],
              proof_ctx: "Le verbe tajiduhu est un inaccompli 2MP de la racine w-j-d avec pronom suffixe 3MS. Le Lane's donne : trouver, rencontrer, decouvrir. L'inaccompli marque que la decouverte est future — vous le trouverez. Le pronom « hu » (le) renvoie au bien avance. Le verbe wajada implique la certitude de la decouverte — ce n'est pas un espoir mais une promesse. Ce que vous avancez de bien, vous le trouverez.",
              axe1_verset: "Le verbe tajiduhu est la promesse du verset — vous trouverez le bien avance aupres de Dieu. Le champ lexical (avancer, bien, trouver, aupres de Dieu) construit une promesse solide : l'investissement de bien est garanti par Dieu. Le verset transforme l'action presente en recompense certaine.",
              axe2_voisins: "Le verset 109 promettait la venue du commandement de Dieu. Le verset 110 promet que le bien avance sera retrouve. Les deux promesses encadrent l'action prescrite — pardonnez (109) et faites le bien (110), et Dieu interviendra et recompensera.",
              axe3_sourate: "La racine w-j-d apparait dans la sourate al-Baqarah pour decrire la decouverte. En 2:96, « tu les trouveras les plus avides de vie ». En 2:110, « vous le trouverez aupres de Dieu ». La sourate utilise « trouver » pour des realites certaines.",
              axe4_coherence: "La racine w-j-d apparait environ 107 fois dans le Coran. Le verbe wajada implique la certitude de ce qui est trouve. En 18:86, « il trouva le soleil se couchant ». En 2:110, la promesse est que le bien sera trouve aupres de Dieu — c'est une certitude divine.",
              axe5_frequence: "Pour la mission du khalifa, la certitude de retrouver le bien aupres de Dieu est le moteur de la generosite. Le khalifa donne sans craindre la perte — tout sera retrouve."
            }
          }
        }
      },
      // end pos=10
      {
        word_key: "end", position: 10, sense_chosen: "aupres de",
        analysis_axes: {
          sense_chosen: "aupres de",
          concept_chosen: "Proximité/Présence",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["aupres de", "chez", "pres de"],
              proof_ctx: "Le mot 'inda est de la racine '-n-d. Le Lane's donne : aupres de, chez, pres de. L'expression « 'inda Allahi » (aupres de Dieu) designe le lieu ou le bien est retrouve — la presence divine. Ce qui est aupres de Dieu est preservé et garanti. La distinction avec « selon » (opinion) est claire : le contexte est un lieu de recompense, pas une opinion.",
              axe1_verset: "Le mot 'inda localise la recompense — aupres de Dieu. Le champ lexical (trouver, aupres de, Dieu) montre que Dieu est le garant et le gardien du bien avance. Ce qui est depose aupres de Dieu est en securite — rien ne peut le diminuer ou le detruire.",
              axe2_voisins: "Le verset 101 utilisait 'inda pour l'origine divine (de chez Dieu). Le verset 109 utilisait 'inda pour l'origine humaine de la jalousie (de chez eux-memes). Le verset 110 utilise 'inda pour la destination du bien (aupres de Dieu). La preposition 'inda trace un parcours : de Dieu (source), par les humains (transit), vers Dieu (destination).",
              axe3_sourate: "L'expression « 'inda Allah » apparait frequemment dans la sourate al-Baqarah. En 2:62, « ils auront leur recompense aupres de leur Seigneur ». En 2:110, « vous le trouverez aupres de Dieu ». La sourate situe la recompense dans la presence divine.",
              axe4_coherence: "L'expression « 'inda Allah » apparait dans de nombreux versets du Coran pour localiser ce qui a valeur. Ce qui est aupres de Dieu est meilleur et plus durable que ce qui est aupres des hommes.",
              axe5_frequence: "Pour la mission du khalifa, deposer le bien aupres de Dieu est l'acte le plus sur. Le khalifa investit dans le seul lieu ou rien ne se perd — la presence divine."
            }
          }
        }
      },
      // alh pos=11
      {
        word_key: "alh", position: 11, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif. Premiere occurrence dans le verset — Dieu est le lieu ou le bien est retrouve ('inda Allahi). Le nom apparait deux fois dans le verset : une fois comme gardien du bien (aupres de Dieu) et une fois comme voyant des actions (Dieu voit). Dieu est a la fois le depositaire et le temoin.",
              axe1_verset: "Le nom Allahi est le point de destination du bien avance — aupres de Dieu. Le champ lexical (trouver, aupres de, Dieu, voit) montre que Dieu est actif dans les deux sens : Il recoit le bien et Il voit les actions. Le verset rassure doublement : le bien est en securite et les actions sont vues.",
              axe2_voisins: "Le verset 109 affirmait que Dieu est puissant sur toute chose. Le verset 110 ajoute que Dieu voit ce que les croyants font. La progression montre que Dieu est a la fois puissant (Il peut intervenir) et voyant (Il sait ce qui se passe).",
              axe3_sourate: "Le nom Allah ponctue chaque prescription de la sourate. En 2:110, la double mention encadre la promesse et la surveillance — Dieu garde le bien et voit les actions.",
              axe4_coherence: "Le nom Allah dans « 'inda Allah » et « inna Allaha basir » cree un cadre complet : depot et surveillance. Dieu est le gardien le plus fiable.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le destinataire et le temoin de la mission. Le khalifa travaille pour Dieu et sous Son regard."
            }
          }
        }
      },
      // eml pos=15
      {
        word_key: "eml", position: 15, sense_chosen: "agir",
        analysis_axes: {
          sense_chosen: "agir",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ta'maluna est un inaccompli 2MP de la racine '-m-l. Le Lane's donne : travailler, agir, faire, oeuvrer. L'inaccompli marque la continuite — Dieu voit ce que vous faites en permanence, pas ponctuellement. Le verbe 'amila implique une action deliberee et continue — pas un accident mais un travail voulu.",
              axe1_verset: "Le verbe ta'maluna ferme le verset en rattachant les actions a la vision divine — Dieu voit ce que vous faites. Le champ lexical (priere, purification, avancer, bien, agir, voir) montre que toutes les actions prescrites sont sous le regard de Dieu. Le verset motive l'action par la conscience d'etre vu — les actions ne sont pas perdues.",
              axe2_voisins: "Le verset 109 affirmait la puissance de Dieu. Le verset 110 affirme Sa vision. La progression montre que Dieu est puissant (Il peut) et voyant (Il sait). Les deux attributs encadrent l'action des croyants.",
              axe3_sourate: "La racine '-m-l apparait frequemment dans la sourate al-Baqarah. En 2:25, « ceux qui ont cru et ont fait les bonnes oeuvres ». En 2:110, « ce que vous faites ». La sourate lie la foi aux oeuvres — croire et agir sont inseparables.",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. Le Coran insiste sur le fait que les actions seront retribuees — bonnes ou mauvaises. En 2:110, la promesse est que Dieu voit les actions — rien n'echappe.",
              axe5_frequence: "Pour la mission du khalifa, l'action est la substance de la mission. Le khalifa ne se contente pas de croire — il agit. Et Dieu voit chaque action."
            }
          }
        }
      },
      // bsr pos=16
      {
        word_key: "bsr", position: 16, sense_chosen: "voir",
        analysis_axes: {
          sense_chosen: "voir",
          concept_chosen: "Vision/Perception",
          concepts: {
            "Vision/Perception": {
              status: "retenu",
              senses: ["voir", "vue", "regarder", "clairvoyance", "comprendre", "preuve visible"],
              proof_ctx: "Le nom basirun est un nom masculin singulier indefini nominatif de la racine b-s-r. Le Lane's donne : voyant, clairvoyant, qui voit, qui percoit. Dieu est basir — Celui qui voit tout, dont rien n'echappe au regard. L'attribut basir implique une vision totale et permanente — pas un regard ponctuel mais une surveillance continue.",
              axe1_verset: "Le mot basirun ferme le verset et tout le passage avec un attribut divin rassurant — Dieu voit. Le champ lexical (agir, voir) montre que les actions ne sont pas perdues — elles sont vues par Dieu. Le verset motive l'action par la certitude d'etre vu — chaque priere, chaque don, chaque bien avance est vu.",
              axe2_voisins: "Le verset 109 se terminait par « Dieu est sur toute chose puissant ». Le verset 110 se termine par « Dieu voit ce que vous faites ». La progression des attributs divins rassure de maniere complete : Dieu est puissant (Il peut agir) et voyant (Il sait quoi recompenser).",
              axe3_sourate: "La racine b-s-r apparait dans la sourate al-Baqarah en 2:96 (« Dieu voit ce qu'ils font ») et en 2:110 (« Dieu voit ce que vous faites »). La sourate affirme que la vision divine couvre tous les acteurs — les hostiles et les croyants.",
              axe4_coherence: "La racine b-s-r apparait environ 148 fois dans le Coran. L'attribut « basir » est un des noms divins — Dieu est « al-Basir » (le Voyant). En 2:110, cet attribut ferme le passage et motive l'action par la certitude de la surveillance divine.",
              axe5_frequence: "Pour la mission du khalifa, la vision de Dieu est la motivation ultime. Le khalifa agit en sachant que Dieu voit — rien n'est perdu, rien n'est oublie. La mission est sous le regard permanent de Dieu."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["peau"],
              proof_ctx: "Le sens de peau est hors sujet — le mot basirun est un attribut divin de vision, pas un terme anatomique."
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

  const verseIds = [115, 116, 117];
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
// QUERY MISSING ROOTS FROM DB
// =====================================================
async function queryMissingRoots() {
  console.log('\n=== QUERY MISSING ROOTS ===');
  const missingKeys = ['rdd', 'sfh'];
  for (const key of missingKeys) {
    const {data:wa} = await supabase.from('word_analyses').select('id').eq('word_key', key).single();
    if (!wa) {
      console.log(`  ${key} — NOT FOUND in word_analyses`);
      continue;
    }
    const {data:wm} = await supabase.from('word_meanings').select('concept,status,senses,description').eq('analysis_id', wa.id);
    console.log(`  ${key} (id=${wa.id}):`);
    if (wm) {
      for (const m of wm) {
        console.log(`    ${m.concept}: status=${m.status}, senses=${JSON.stringify(m.senses)}`);
      }
    }
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — VERSETS 108, 109, 110 ===\n');
  await queryMissingRoots();
  await processVerse(108);
  await processVerse(109);
  await processVerse(110);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V108-110 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
