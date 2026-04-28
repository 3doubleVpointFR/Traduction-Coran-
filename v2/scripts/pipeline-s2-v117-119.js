const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 117, 118, 119
// V117: verse_id=124, analysis_id=484
// V118: verse_id=125, analysis_id=486
// V119: verse_id=126, analysis_id=483
// =====================================================

const verseData = {
  117: {
    verse_id: 124,
    analysis_id: 484,
    translation_arab: "Createur originel des cieux et de la terre, et quand Il decide une chose, alors Il lui dit seulement « Sois » et elle est.",
    full_translation: "Il est le Createur des cieux et de la terre a partir du neant. Lorsqu'Il decide une chose, Il dit seulement: \"Sois\", et elle est aussitot.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre avec le nom **badi'u** qui est un nom-adjectif de la racine b-d-a au nominatif. Le Lane's donne : celui qui innove, qui cree sans modele prealable, l'auteur d'une chose sans precedent. Ce mot est en idafa avec « les cieux et la terre » — il est le Createur originel des cieux et de la terre. Le mot indique que la creation n'a pas de modele anterieur — elle est une innovation pure. Le nom **as-samawati** est un nom feminin pluriel defini de la racine s-m-w au genitif. Le Lane's donne : ciel, ce qui est au-dessus, voute. Le pluriel « les cieux » (samawat) indique des strates multiples — pas un seul ciel mais plusieurs. Le genitif est du a l'idafa avec badi'u. La conjonction **wa** coordonne les cieux avec **al-ardi** — « les cieux et la terre ». Le nom al-ardi est un nom feminin singulier defini de la racine a-r-d au genitif. Le Lane's donne : terre, sol, surface. La paire « cieux et terre » designe la totalite de la creation — tout ce qui est en haut et en bas. La particule temporelle **idha** (quand) introduit une condition temporelle. Le verbe **qada** est un accompli 3MS de la racine q-d-y. Le Lane's donne : decider, decrreter, trancher, accomplir. L'accompli apres idha a valeur de condition generale — chaque fois qu'Il decide. Le nom **amran** est un nom masculin singulier indefini de la racine a-m-r a l'accusatif. Le Lane's donne : chose, affaire, commandement. L'indefini indique n'importe quelle chose — quelle que soit la chose decidee. L'accusatif marque l'objet direct de qada. La particule **fa-innama** (alors seulement) combine le fa de consequence et innama de restriction — la reponse a la condition est restreinte a un seul acte. Le verbe **yaqulu** est un inaccompli 3MS de la racine q-w-l. Le Lane's donne : dire, parler. L'inaccompli dans un contexte de condition generale indique la repetition — chaque fois qu'Il decide, Il dit. Le pronom **lahu** est une preposition la (pour, a) + pronom 3MS hu (lui). Il dit A la chose decidee — la parole est adressee a la chose elle-meme. L'imperatif **kun** est un imperatif 2MS de la racine k-w-n. Le Lane's donne : etre, venir a l'existence. L'imperatif « Sois » est l'ordre de passer du neant a l'existence. C'est la parole creatrice par excellence. Le verbe **fa-yakunu** est un inaccompli 3MS de la racine k-w-n precede du fa de consequence. Le Lane's donne : etre, venir a l'existence. « Et elle est » — la chose vient a l'existence immediatement apres l'ordre. Le fa marque la consequence immediate — pas de delai entre l'ordre et l'execution.

§JUSTIFICATION§
**Createur originel** — Le sens retenu est « innover/creer ». Le mot badi'u designe celui qui cree sans modele prealable. « Createur originel » est choisi car il rend l'idee d'une creation sans precedent. L'alternative « innovateur » est ecartee car en francais courant « innovateur » a une connotation technologique qui ne convient pas.

**les cieux** — Le sens retenu est « ciel ». Le mot as-samawati au pluriel designe les cieux, la voute celeste. L'alternative « hauteur » est ecartee car le contexte est la creation de la structure cosmique, pas une qualite abstraite.

**la terre** — Le sens retenu est « terre ». Le mot al-ardi designe la terre, le sol. L'alternative « rhume » est ecartee car hors sujet.

**decide** — Le sens retenu est « decider/decreter ». Le verbe qada signifie trancher, decider definitivement. L'alternative « accomplir » est ecartee car le contexte est la decision qui precede l'execution, pas l'execution elle-meme.

**une chose** — Le sens retenu est « chose/affaire ». Le mot amran a l'accusatif indefini designe n'importe quelle chose. L'alternative « commander » est ecartee car le mot est un nom objet direct, pas un verbe de commandement.

**Il dit** — Le sens retenu est « dire ». Le verbe yaqulu designe l'acte de parler. L'alternative « opinion » est ecartee car le contexte est une parole creatrice, pas une opinion.

**a lui** — Le mot lahu est un pronom prepositionnel (a lui). Il indique que la parole s'adresse directement a la chose. Le concept de « divertissement » de la racine l-h-w est hors sujet — ici c'est la preposition la + pronom hu.

**Sois** — Le sens retenu est « venir a l'existence ». L'imperatif kun ordonne le passage du neant a l'etre. C'est le verbe kwn (etre) a l'imperatif — l'ordre divin de creation. L'alternative « lieu » est ecartee car le contexte est existentiel.

**elle est** — Le sens retenu est « venir a l'existence ». Le verbe yakunu a l'inaccompli indique que la chose vient a l'etre. Le fa de consequence marque l'imminence de la realisation.

§CRITIQUE§
Les traductions courantes rendent ce verset de facon similaire. Hamidullah traduit badi'u par « Createur a partir du neant » ce qui interprete l'expression — le texte dit « Createur originel » sans preciser « a partir du neant ». Notre traduction reste plus proche de l'etymologie : badi'u signifie « celui qui innove sans modele » et non « celui qui cree a partir du neant ». La nuance est importante : l'absence de modele anterieur n'est pas synonyme de creation ex nihilo. La formule « kun fa-yakun » (Sois et c'est) est identique dans toutes les traductions — elle est si directe qu'il n'y a pas d'ambiguite.`,
    segments: [
      { fr: "Createur originel", pos: "nom", phon: "badi'u", arabic: "\u0628\u064e\u062f\u0650\u064a\u0639\u064f", word_key: "bda", is_particle: false, sense_retenu: "creer sans modele", position: 0 },
      { fr: "des cieux", pos: "nom", phon: "as-samawati", arabic: "\u0671\u0644\u0633\u0651\u064e\u0645\u064e\u0640\u0670\u0648\u064e\u0640\u0670\u062a\u0650", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 1 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 2 },
      { fr: "la terre", pos: "nom", phon: "al-ardi", arabic: "\u0671\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 3 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 4 },
      { fr: "quand", phon: "idha", arabic: "\u0625\u0650\u0630\u064e\u0627", is_particle: true, position: 5 },
      { fr: "Il decide", pos: "verbe", phon: "qada", arabic: "\u0642\u064e\u0636\u064e\u0649\u0670\u0653", word_key: "qdy", is_particle: false, sense_retenu: "decider", position: 6 },
      { fr: "une chose", pos: "nom", phon: "amran", arabic: "\u0623\u064e\u0645\u0652\u0631\u064b\u0627", word_key: "amr", is_particle: false, sense_retenu: "chose", position: 7 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 8 },
      { fr: "seulement", phon: "innama", arabic: "\u0625\u0650\u0646\u0651\u064e\u0645\u064e\u0627", is_particle: true, position: 9 },
      { fr: "Il dit", pos: "verbe", phon: "yaqulu", arabic: "\u064a\u064e\u0642\u064f\u0648\u0644\u064f", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 10 },
      { fr: "a lui", phon: "lahu", arabic: "\u0644\u064e\u0647\u064f\u06e5", is_particle: true, position: 11 },
      { fr: "Sois", pos: "verbe", phon: "kun", arabic: "\u0643\u064f\u0646", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 12 },
      { fr: "et elle est", pos: "verbe", phon: "fa-yakunu", arabic: "\u0641\u064e\u064a\u064e\u0643\u064f\u0648\u0646\u064f", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 13 }
    ],
    words: [
      // bda pos=0
      {
        word_key: "bda", position: 0, sense_chosen: "creer sans modele",
        analysis_axes: {
          sense_chosen: "creer sans modele",
          concept_chosen: "Innovation/Création",
          concepts: {
            "Innovation/Création": {
              status: "retenu",
              senses: ["innover", "creer", "originer"],
              proof_ctx: "Le mot badi'u est un nom-adjectif de la racine b-d-a au nominatif en idafa avec as-samawati wa-l-ardi. Le Lane's donne : celui qui innove, qui produit une chose sans modele prealable. Le badi' est celui qui fait quelque chose pour la premiere fois — sa creation n'a pas de precedent. Ici badi'u as-samawati wa-l-ardi signifie : le Createur originel des cieux et de la terre. La distinction est fondamentale : badi' implique l'absence de modele anterieur, pas simplement la creation. La racine n'a qu'un seul concept actif, ce qui rend le choix immediat.",
              axe1_verset: "Le mot badi'u ouvre le verset en qualifiant Dieu comme Createur originel des cieux et de la terre. Cette qualification pose le cadre de tout le verset : si Dieu est capable de creer les cieux et la terre sans modele prealable, alors Il est capable de creer n'importe quoi par Sa parole. Le champ lexical du verset tourne autour de la creation et du pouvoir creatif (cieux, terre, decider, dire, Sois, et c'est). Badi'u est le point de depart qui fonde toute la suite : la puissance creative de Dieu est sans precedent.",
              axe2_voisins: "Le verset 116 refutait l'idee que Dieu a pris un fils — tout dans les cieux et la terre Lui est devot. Le verset 117 enchaine en affirmant que Dieu est le Createur originel de tout cela — Il n'a pas besoin de prendre quoi que ce soit car Il cree de rien. Le verset 118 montrera ceux qui demandent des signes — le signe supreme est deja donne : la creation des cieux et de la terre sans modele. L'enchainement logique est : tout Lui appartient (116), car Il a tout cree (117), et pourtant certains demandent des preuves (118).",
              axe3_sourate: "La sourate al-Baqarah presente Dieu comme le Createur de l'univers des le debut — en 2:29, Il a cree pour les hommes tout ce qui est sur la terre puis S'est tourne vers le ciel. En 2:117, le mot badi'u specifie la nature de cette creation : une innovation pure sans modele. La sourate construit progressivement l'image d'un Dieu dont le pouvoir creatif est absolu et sans precedent.",
              axe4_coherence: "La racine b-d-a apparait dans le Coran en 2:117 et 6:101 dans la meme formule « badi'u as-samawati wa-l-ardi ». En 6:101, le contexte est identique : comment aurait-Il un fils alors qu'Il n'a pas de compagne et qu'Il a tout cree ? Les deux occurrences lient la creation originelle a l'impossibilite d'un fils. Le Coran utilise badi' exclusivement pour la creation cosmique — c'est un attribut divin specifique a la creation sans modele.",
              axe5_frequence: "Pour la mission du khalifa, la creation originelle montre que Dieu n'a besoin de rien ni de personne pour creer. Le khalifa doit comprendre que sa mission vient d'un Createur dont le pouvoir est absolu — s'Il a cree les cieux et la terre sans modele, Il peut tout. Le khalifa ne doit pas douter de la capacite de Dieu a mener a bien Sa creation, y compris la mission humaine."
            }
          }
        }
      },
      // smw pos=1
      {
        word_key: "smw", position: 1, sense_chosen: "ciel",
        analysis_axes: {
          sense_chosen: "ciel",
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["ciel", "toit", "nuage", "pluie", "herbage", "dos", "semelle superieure"],
              proof_ctx: "Le mot as-samawati est un nom feminin pluriel defini de la racine s-m-w au genitif. Le Lane's donne : ciel, voute celeste, ce qui est au-dessus et couvre. Le pluriel indique les multiples strates celestes. Ici les cieux sont l'objet de la creation originelle de Dieu — badi'u as-samawati. Le concept « Ciel/Ce qui couvre » regroupe tout ce qui est au-dessus. La distinction avec « Hauteur/Elevation » (nul) est claire : le contexte est la structure cosmique creee, pas une qualite abstraite d'elevation.",
              axe1_verset: "Le mot as-samawati est le premier objet de la creation originelle de Dieu avec la terre. Les cieux et la terre forment la paire cosmique qui englobe toute la creation. Le champ lexical du verset (Createur originel, cieux, terre, decider, Sois) montre que la creation est totale — du plus haut au plus bas. Les cieux sont la voute qui couvre tout ce qui est en bas.",
              axe2_voisins: "Le verset 116 disait « a Lui appartient ce qui est dans les cieux et la terre ». Le verset 117 precise que les cieux ne sont pas seulement Sa propriete — Il en est le Createur originel. Passer de la possession a la creation renforce l'argument : Dieu ne possede pas par acquisition mais par creation. Les cieux Lui appartiennent parce qu'Il les a crees.",
              axe3_sourate: "Le mot as-samawat apparait tres frequemment dans la sourate al-Baqarah, toujours en paire avec al-ard. En 2:29, Dieu a cree tout ce qui est sur la terre puis S'est tourne vers le ciel. En 2:33, Il connait le mystere des cieux et de la terre. La paire cieux-terre structure la vision cosmique de la sourate : Dieu est maitre de tout l'espace.",
              axe4_coherence: "La racine s-m-w apparait environ 310 fois dans le Coran. La paire samawat wa-l-ard est un refrain coranique qui delimite l'espace total de la creation. En 2:117 et 6:101, les cieux et la terre sont l'objet de la creation sans modele (badi'). En 21:30, les cieux et la terre etaient une masse unique que Dieu a separee. Le Coran presente les cieux comme une structure ordonnee et plurielle.",
              axe5_frequence: "Pour la mission du khalifa, les cieux representent l'espace au-dessus de lui — une creation qui le depasse et le couvre. Le khalifa vit entre les cieux et la terre, dans l'espace cree pour lui. Comprendre que les cieux sont une creation originelle de Dieu l'aide a situer sa propre mission dans un cadre cosmique plus large."
            },
            "Hauteur/Élévation": {
              status: "nul",
              senses: ["etre haut", "se dresser", "monter", "lever le regard", "aspirer", "noble", "hautain", "rivaliser en eminence", "elever quelqu'un", "depasser en nombre", "etalon qui bondit", "forme vue de loin", "lune qui se dresse", "surpasser", "eminent"],
              proof_ctx: "Le sens de hauteur/elevation est le sens racine de s-m-w mais ici le mot as-samawati est au pluriel defini — il designe les cieux comme structure cosmique creee, pas une qualite abstraite d'elevation."
            }
          }
        }
      },
      // ard pos=3
      {
        word_key: "ard", position: 3, sense_chosen: "terre",
        analysis_axes: {
          sense_chosen: "terre",
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays", "bas"],
              proof_ctx: "Le mot al-ardi est un nom feminin singulier defini de la racine a-r-d au genitif. Le Lane's donne : terre, sol, surface solide. La terre est coordonnee avec les cieux comme second element de la paire cosmique. L'article defini indique LA terre — la totalite de la surface terrestre. Badi'u as-samawati wa-l-ardi : Il est le Createur originel des cieux et de la terre. Les sens isoles (rhume, tremblement) sont hors contexte.",
              axe1_verset: "Le mot al-ardi complete la paire cosmique avec les cieux — ensemble ils englobent toute la creation. Le Createur originel n'a pas seulement cree ce qui est en haut (les cieux) mais aussi ce qui est en bas (la terre). Le champ lexical du verset (Createur originel, cieux, terre, decider, Sois) montre que rien n'echappe a la creation divine — du ciel au sol.",
              axe2_voisins: "Le verset 116 affirmait que ce qui est dans les cieux et la terre est devot a Dieu. Le verset 117 precise que la terre est une creation originelle — elle ne preexistait pas, elle a ete creee sans modele. Le verset 118 montrera des gens qui demandent des signes sur cette terre meme que Dieu a creee — l'ironie est qu'ils marchent sur le signe.",
              axe3_sourate: "La terre apparait tout au long de la sourate al-Baqarah. En 2:22, la terre est un lit et le ciel une construction. En 2:30, Dieu annonce qu'Il va placer un khalifa sur la terre. En 2:117, la terre est une creation originelle. La sourate montre que la terre est a la fois le lieu de vie du khalifa et une creation sans precedent de Dieu.",
              axe4_coherence: "La racine a-r-d apparait environ 461 fois dans le Coran. La terre est le theatre de la mission humaine — c'est sur la terre que le khalifa exerce sa mission. En 2:117 et 6:101, la terre est l'objet de la creation sans modele. En 7:54, Dieu a cree les cieux et la terre en six periodes. Le Coran presente la terre comme une creation deliberee et organisee pour l'homme.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le lieu meme de sa mission. Comprendre que la terre est une creation originelle de Dieu — sans modele prealable — donne au khalifa une responsabilite immense : il vit sur une creation unique, faite pour lui. Sa mission de justice et de civilisation se deploie sur cette terre que Dieu a innovee."
            },
            "Sens isolé/Rhume": {
              status: "nul",
              senses: ["rhume"],
              proof_ctx: "Le sens de rhume est un sens concret isole de la racine a-r-d. Le contexte est la creation cosmique, pas un etat physique."
            },
            "Sens isolé/Tremblement": {
              status: "nul",
              senses: ["tremblement"],
              proof_ctx: "Le sens de tremblement est un sens concret isole. Le contexte est la paire cosmique cieux-terre dans la creation originelle."
            }
          }
        }
      },
      // qdy pos=6
      {
        word_key: "qdy", position: 6, sense_chosen: "decider",
        analysis_axes: {
          sense_chosen: "decider",
          concept_chosen: "Jugement/Décret",
          concepts: {
            "Jugement/Décret": {
              status: "retenu",
              senses: ["juger", "decreter", "accomplir"],
              proof_ctx: "Le verbe qada est un accompli 3MS de la racine q-d-y. Le Lane's donne : trancher, decider de maniere definitive, decreter, accomplir. L'accompli apres la particule temporelle idha a valeur de condition generale repetee — chaque fois qu'Il decide. Le mot qada porte l'idee d'une decision tranchee, definitive, sans retour. Ici Dieu decide une chose et sa decision s'execute immediatement par la parole kun. La distinction entre « decider » et « accomplir » : ici qada est suivi de amran (une chose), ce qui indique la decision prealable, pas l'accomplissement final qui est exprime par yakunu.",
              axe1_verset: "Le verbe qada marque le moment charniere du verset : apres avoir etabli que Dieu est le Createur originel des cieux et de la terre, le texte passe au mecanisme de Sa creation. Quand Il decide, il suffit qu'Il dise « Sois ». Le champ lexical (Createur originel, decider, dire, Sois, est) montre une chaine causale directe : decision → parole → existence. La decision est le premier maillon de cette chaine.",
              axe2_voisins: "Le verset 116 repondait a ceux qui attribuent un fils a Dieu — tout Lui est devot. Le verset 117 montre le mecanisme de Sa creation : Il decide et cela est. Il n'a pas besoin de prendre un fils pour creer — Sa decision suffit. Le verset 118 montrera des gens qui demandent des signes supplementaires — alors que le mecanisme de creation est deja le signe ultime.",
              axe3_sourate: "Le verbe qada apparait dans la sourate al-Baqarah en 2:117 et 2:200 notamment. En 2:117, la decision divine est creatrice — elle produit l'existence. La sourate al-Baqarah insiste sur l'autorite divine : Dieu decide et execute sans intermediaire, sans delai, sans modele.",
              axe4_coherence: "La racine q-d-y apparait environ 63 fois dans le Coran. La formule « idha qada amran fa-innama yaqulu lahu kun fa-yakunu » apparait aussi en 3:47, 19:35, 40:68. C'est un refrain coranique qui exprime le pouvoir creatif de Dieu par la simple parole. Le Coran repete ce schema pour affirmer que rien ne resiste a la decision divine.",
              axe5_frequence: "Pour la mission du khalifa, la decision divine est le fondement de toute existence. Le khalifa doit comprendre que sa propre existence est le resultat d'une decision divine — Dieu a decide qu'il serait, et il est. La mission du khalifa est elle-meme le resultat d'une decision divine deliberee. Ce qui a ete decide par Dieu s'accomplit necessairement."
            }
          }
        }
      },
      // amr pos=7
      {
        word_key: "amr", position: 7, sense_chosen: "chose",
        analysis_axes: {
          sense_chosen: "chose",
          concept_chosen: "Affaire/Chose",
          concepts: {
            "Affaire/Chose": {
              status: "retenu",
              senses: ["affaire", "chose"],
              proof_ctx: "Le mot amran est un nom masculin singulier indefini de la racine a-m-r a l'accusatif. Le Lane's donne : affaire, chose, commandement. Ici amran est l'objet direct de qada — « Il decide une chose ». L'indefini marque la generalite : n'importe quelle chose. Le sens de « chose/affaire » est impose par le contexte : amran est ce qui est decide, pas celui qui commande. La distinction avec « Commandement/Autorite » est que le sujet de l'autorite ici est Dieu (via qada), et amran est l'objet de Sa decision. Le concept « Affaire/Chose » designe la realite sur laquelle porte la decision.",
              axe1_verset: "Le mot amran est l'objet de la decision divine — quand Dieu decide « une chose ». Le verset ne precise pas quelle chose car la generalite est voulue : toute chose que Dieu decide se realise. Le champ lexical (decider, chose, dire, Sois) montre que la chose est le destinataire de la parole creatrice. La chose est passive — elle recoit la decision et la parole qui la font exister.",
              axe2_voisins: "Le verset 116 affirmait que tout dans les cieux et la terre appartient a Dieu. Le mot amran en 117 indique que chaque chose qui existe est le resultat d'une decision divine. Le verset 118 montrera des gens qui demandent une « chose » (signe) — alors que chaque chose existante est deja le resultat de cette parole creatrice.",
              axe3_sourate: "La racine a-m-r apparait frequemment dans la sourate al-Baqarah. En 2:27, ceux qui rompent ce que Dieu a ordonne de maintenir. En 2:67, Dieu ordonne d'immoler une vache. En 2:117, amran designe l'objet de la decision creatrice. La sourate utilise la racine tantot pour le commandement (ordonner), tantot pour la chose (affaire, objet de la decision).",
              axe4_coherence: "La racine a-m-r apparait environ 248 fois dans le Coran. Dans la formule « qada amran », le mot amr a le sens de « chose, affaire » — c'est l'objet de la decision divine. En 3:47 et 19:35, la meme formule est utilisee dans des contextes de creation miraculeuse (Jesus). Le Coran utilise amran dans ce contexte pour montrer que rien — aucune chose — ne resiste a la decision divine.",
              axe5_frequence: "Pour la mission du khalifa, chaque chose qui existe est le fruit d'une decision divine. Le khalifa doit reconnaitre que son propre mandat est une « chose » que Dieu a decidee. La mission de justice et de civilisation n'est pas un accident — c'est une decision divine deliberee qui s'execute par la parole creatrice."
            },
            "Commandement/Autorité": {
              status: "peu_probable",
              senses: ["ordonner", "commander", "nommer gouverneur"],
              proof_ctx: "Le sens de commandement est un sens central de la racine a-m-r. Cependant ici amran est a l'accusatif indefini en position d'objet direct de qada — « Il decide une chose ». Le mot ne designe pas l'acte de commander mais l'objet de la decision. Si on traduisait « quand Il commande un commandement », ce serait une tautologie. Le sens de « chose/affaire » est plus precis dans ce contexte ou amran est ce qui est decide.",
              axe1_verset: "Dans le champ lexical du verset, le commandement est semantiquement present mais grammaticalement amran est objet de la decision. Le verset dit que Dieu decide une chose (amran) puis lui dit « Sois ». Si amran etait un commandement, il serait redondant avec « Il dit : Sois ». Le verset distingue la decision (qada) de la parole (yaqulu) — amran est ce qui se situe entre les deux : la chose decidee.",
              axe2_voisins: "Les versets voisins ne parlent pas de commandement mais de creation et de puissance divine. Le contexte est la refutation de l'attribution d'un fils a Dieu (116) et la demande de signes (118). Le sens de « chose » s'integre mieux dans cette argumentation : Dieu cree toute chose par Sa parole.",
              axe3_sourate: "Dans la sourate al-Baqarah, le sens de commandement de la racine a-m-r est utilise en 2:27 (ordonner) et 2:67 (ordonner). Mais en 2:117, le contexte est different — c'est la creation. La sourate distingue les deux usages de la racine : commander quelqu'un et decider une chose.",
              axe4_coherence: "Dans les occurrences paralleles de cette formule (3:47, 19:35, 40:68), amran a systematiquement le sens de « chose/affaire » — c'est l'objet de la decision creatrice, pas un commandement adresse a quelqu'un. Le Coran utilise cette formule pour la creation, pas pour la legislation.",
              axe5_frequence: "Pour la mission du khalifa, la distinction entre « chose » et « commandement » est importante : le verset ne parle pas d'un ordre adresse au khalifa mais de la puissance creatrice de Dieu. Neanmoins, le fait que Dieu decide et que cela est renforce l'autorite de Sa parole dans tous les domaines, y compris la mission du khalifa."
            },
            "Consultation": {
              status: "nul",
              senses: ["consulter"],
              proof_ctx: "Le sens de consultation est hors sujet — Dieu decide une chose, Il ne consulte pas ici."
            },
            "Sens isolé/Multiplier": {
              status: "nul",
              senses: ["multiplier"],
              proof_ctx: "Le sens de multiplier est un sens isole de la racine. Le contexte est une decision creatrice, pas une multiplication."
            },
            "Sens isolé/Signe": {
              status: "nul",
              senses: ["signe"],
              proof_ctx: "Le sens de signe est un sens isole de la racine. Le contexte est l'objet de la decision divine."
            }
          }
        }
      },
      // qwl pos=10
      {
        word_key: "qwl", position: 10, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe yaqulu est un inaccompli 3MS de la racine q-w-l. Le Lane's donne : dire, parler, enoncer. L'inaccompli dans un contexte de condition generale (idha qada) indique la repetition — chaque fois qu'Il decide, Il dit. La parole ici est creatrice — elle n'est pas une simple communication mais un acte de creation. Dieu dit « Sois » et la chose est. La distinction avec « Pensee/Avis » (nul) est claire : yaqulu est un verbe de parole exterieure, pas une pensee interieure.",
              axe1_verset: "Le verbe yaqulu est le pivot central du verset : c'est par la parole que la creation s'effectue. Le champ lexical (Createur originel, decider, dire, Sois, est) montre que la parole est le mecanisme de la creation. Le verset ne dit pas que Dieu fabrique ou modele — Il dit, et c'est. La parole divine est performative au sens le plus radical : elle produit ce qu'elle enonce.",
              axe2_voisins: "Le verset 116 montrait les gens qui « disent » (qalu) que Dieu a pris un fils. Le verset 117 oppose a cette parole humaine fausse la parole divine creatrice — Dieu dit « Sois ». Le contraste est saisissant : la parole humaine attribue faussement, la parole divine cree reellement. Le verset 118 montrera encore des gens qui « disent » (qala) des choses — la parole humaine questionne, la parole divine cree.",
              axe3_sourate: "La racine q-w-l est la racine la plus frequente de la sourate al-Baqarah — elle structure chaque recit, chaque dialogue. En 2:117, la parole passe du registre humain (ils disent) au registre divin (Il dit « Sois »). La sourate utilise la meme racine pour montrer le gouffre entre la parole humaine (souvent fausse ou pretentieuse) et la parole divine (toujours creatrice et vraie).",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. Le verbe yaqulu dans la formule « yaqulu lahu kun fa-yakunu » est specifiquement la parole creatrice. En 2:117, 3:47, 6:73, 16:40, 19:35, 36:82, 40:68, le Coran repete cette formule pour affirmer le pouvoir de la parole divine. La parole de Dieu dans le Coran est a la fois creatrice (kun) et revelee (le Coran lui-meme).",
              axe5_frequence: "Pour la mission du khalifa, la parole divine est le fondement de sa mission. Si Dieu cree par Sa parole, alors Sa parole revelee (le Coran) porte la meme autorite. Le khalifa doit prendre au serieux la parole de Dieu — elle n'est pas une simple information mais un acte creatif qui transforme la realite."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le verbe yaqulu est un verbe de parole exterieure, pas un verbe de pensee. Le contexte est la parole creatrice de Dieu."
            },
            "Sens isolé/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: "Le sens de puissance est un sens isole de la racine. Le contexte est l'acte de dire."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: "Le sens de troupeau est un sens isole de la racine. Le contexte est la parole creatrice."
            }
          }
        }
      },
      // kwn pos=12 (kun)
      {
        word_key: "kwn", position: 12, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le mot kun est un imperatif 2MS de la racine k-w-n. Le Lane's donne : etre, venir a l'existence. L'imperatif « Sois » est l'ordre divin de passer du neant a l'existence. C'est le verbe kwn utilise comme verbe complet (pas comme verbe incomplet/copule) — il decrit le passage a l'etre. La distinction avec les sens nuls est evidente : kun est l'ordre existentiel par excellence, pas une question de lieu ou d'humilite.",
              axe1_verset: "Le mot kun est le sommet du verset — la parole creatrice dans sa forme la plus pure. Le champ lexical a mene jusqu'ici : Createur originel → decide → dit → « Sois ». Kun est le contenu de la parole divine — un seul mot qui produit l'existence. Le verset montre que la creation passe par un imperatif unique et suffisant. Apres kun, la chose est (fa-yakunu) — il n'y a pas d'etape intermediaire.",
              axe2_voisins: "Le verset 116 montrait que tout est devot a Dieu. Le verset 117 montre pourquoi : tout vient de Sa parole « Sois ». L'imperatif kun est la raison ultime de l'existence de toute chose. Le verset 118 montrera des gens qui demandent des signes — le mot kun est lui-meme le signe supreme : la parole qui cree.",
              axe3_sourate: "La formule kun fa-yakunu apparait en 2:117 et sera reprise dans d'autres sourates. Dans la sourate al-Baqarah, c'est la seule occurrence, placee strategiquement dans le contexte de la refutation de l'attribution d'un fils a Dieu. La sourate montre que le pouvoir creatif de Dieu est si absolu qu'un seul mot suffit.",
              axe4_coherence: "La racine k-w-n apparait environ 1390 fois dans le Coran. La formule « kun fa-yakunu » apparait 8 fois dans le Coran (2:117, 3:47, 3:59, 6:73, 16:40, 19:35, 36:82, 40:68). C'est un refrain qui traverse le Coran pour affirmer le pouvoir creatif divin. Le Coran utilise kun exclusivement pour la creation divine — aucun etre cree ne prononce cet imperatif existentiel.",
              axe5_frequence: "Pour la mission du khalifa, kun rappelle que l'existence du khalifa est le resultat de cette parole creatrice. Dieu a dit « Sois » et le khalifa est. Cette conscience doit fonder l'humilite du khalifa : il n'est pas la source de sa propre existence, il est le resultat d'une parole divine. Sa mission est de faire fructifier ce qui a ete cree par cette parole."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — kun est l'imperatif existentiel « Sois », pas un etat d'humilite."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Les sens de lieu et d'etat sont hors sujet — kun est l'imperatif existentiel, pas une localisation ou un etat."
            }
          }
        }
      },
      // kwn pos=13 (fa-yakunu)
      {
        word_key: "kwn", position: 13, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe fa-yakunu est un inaccompli 3MS de la racine k-w-n precede du fa de consequence. Le Lane's donne : etre, venir a l'existence. « Et elle est » — la chose vient a l'existence immediatement apres l'ordre kun. Le fa marque la consequence immediate et necessaire — pas de delai entre l'ordre et l'execution. Le verbe kwn est ici complet — il decrit le passage a l'existence, pas une copule. La chose passe du neant a l'etre par la seule parole de Dieu.",
              axe1_verset: "Le verbe fa-yakunu clot le verset en montrant le resultat de la parole creatrice. Apres « Sois » (kun), « elle est » (fa-yakunu). Le champ lexical du verset forme une chaine complete : Createur originel → decide → dit → Sois → est. Chaque element est necessaire et suffisant. Le fa de consequence montre que l'existence suit immediatement l'ordre — pas de fabrication, pas de processus, pas de delai.",
              axe2_voisins: "Apres le verset 117 qui montre le pouvoir creatif absolu, le verset 118 montrera des gens qui demandent des signes et des paroles divines directes. L'ironie est que la parole divine la plus puissante — kun — a deja ete prononcee et continue de l'etre. Ceux qui demandent une parole de Dieu ignorent que chaque chose existante est le resultat de cette parole.",
              axe3_sourate: "Dans la sourate al-Baqarah, cette cloture par fa-yakunu montre l'efficacite absolue de la parole divine. Quand le Coran dit que Dieu dit « Sois » et c'est fait, il pose un principe qui eclaire tous les recits de la sourate : les miracles de Moussa, la creation d'Adam, la resurrection — tout passe par cette meme parole.",
              axe4_coherence: "Le verbe yakunu dans la formule kun fa-yakunu est toujours a l'inaccompli, ce qui indique que le processus est atemporel et continu — chaque fois que Dieu le veut, la chose est. Ce n'est pas un evenement passe unique mais un pouvoir permanent. Le Coran utilise l'inaccompli pour montrer que la puissance creatrice de Dieu est active a chaque instant.",
              axe5_frequence: "Pour la mission du khalifa, fa-yakunu montre que ce que Dieu decide se realise. Le khalifa doit avoir confiance que la mission assignee par Dieu se realisera — la promesse divine de justice et de civilisation sur terre s'accomplira car Dieu dit « Sois » et c'est fait. La mission n'est pas un espoir humain mais une decision divine en cours d'execution."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — yakunu ici decrit le passage a l'existence apres l'ordre divin."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Les sens de lieu et d'etat sont hors sujet — yakunu apres kun decrit la venue a l'existence."
            }
          }
        }
      }
    ]
  },

  118: {
    verse_id: 125,
    analysis_id: 486,
    translation_arab: "Et ont dit ceux qui ne savent pas : si seulement Dieu nous parlait ou nous venait un signe. Ainsi ont dit ceux d'avant eux une parole semblable a leur parole. Leurs coeurs se ressemblent. Nous avons clairement expose les signes pour un peuple qui a la certitude.",
    full_translation: "Et ceux qui ne savent pas ont dit: \"Pourquoi Allah ne nous parle-t-Il pas [directement], ou pourquoi un signe ne nous vient-il pas?\" De meme, ceux d'avant eux disaient une parole semblable. Leurs coeurs se ressemblent. Nous avons clairement expose les signes pour des gens qui ont la certitude.",
    translation_explanation: `§DEMARCHE§
Le verset commence par la conjonction **wa** (et) suivie du verbe **qala** qui est un accompli 3MS de la racine q-w-l. Le Lane's donne : dire, parler. L'accompli indique que c'est un evenement rapporte — ils ont dit. Le pronom relatif **alladhina** (ceux qui) introduit une relative. La negation **la** + le verbe **ya'lamuna** (inaccompli 3MP de '-l-m) decrit ceux qui ne savent pas. Le savoir est nie chez eux — ils parlent depuis l'ignorance. La particule **lawla** (pourquoi pas, si seulement) introduit une question de reproche ou de souhait. Le verbe **yukallimuna** est un inaccompli 3MS forme II de k-l-m avec pronom suffixe na (nous). Le Lane's donne : parler, adresser la parole. La forme II intensifie — parler directement, en s'adressant directement. Ils demandent que Dieu leur parle directement. Le nom **Allahu** est le nom propre de la divinite au nominatif — sujet de yukallimuna. La conjonction **aw** (ou) introduit l'alternative. Le verbe **ta'tina** est un inaccompli 2FS de a-t-y avec pronom suffixe na. Le Lane's donne : venir. « Ou un signe nous vienne ». Le nom **ayatun** est un nom feminin singulier indefini. La racine a-y-h est non trouvee dans Lane's comme racine independante mais ayah est un signe, un verset. L'adverbe **kadhalika** est de la racine k-dh-l et signifie « ainsi, de meme ». Le verbe **qala** se repete — « ainsi ont dit ceux d'avant eux ». Le pronom relatif **alladhina** reintroduit un groupe. La preposition **min** (de) + **qablihim** (avant eux, racine q-b-l avec pronom 3MP) situe le groupe dans le passe. Le nom **mithla** est de la racine m-th-l a l'accusatif. Le Lane's donne : semblable, pareil. « Une parole semblable a leur parole ». Le nom **qawlihim** est un nom de la racine q-w-l au genitif avec pronom 3MP — « leur parole ». Le verbe **tashabahat** est un accompli 3FS forme VI de sh-b-h. Le Lane's donne : se ressembler mutuellement. La forme VI indique la reciprocite — les coeurs se ressemblent les uns les autres. Le nom **qulubuhum** est le pluriel de qalb (racine q-l-b) avec pronom 3MP. Le Lane's donne : coeur, siege de la comprehension. « Leurs coeurs se ressemblent » — pas seulement leurs paroles mais leurs coeurs profonds. La particule **qad** intensifie l'accompli qui suit — « certes nous avons ». Le verbe **bayyanna** est un accompli 1PL forme II de b-y-n. Le Lane's donne : rendre clair, expliquer, exposer. La forme II intensifie — rendre tres clair. Le pronom na (nous) est le « nous » de majeste divine. Le nom **al-ayati** est le pluriel defini de aya au genitif. « Les signes » — avec l'article defini qui indique des signes connus et etablis. La preposition **li-qawmin** est de la racine q-w-m avec preposition li (pour). Le Lane's donne : peuple, communaute. « Pour un peuple ». Le verbe **yuqinuna** est un inaccompli 3MP de y-q-n. Le Lane's donne : avoir la certitude. « Qui ont la certitude » — les signes sont clairs pour ceux qui veulent la certitude, pas pour ceux qui demandent par pretexte.

§JUSTIFICATION§
**ont dit** — Le sens retenu est « dire ». Le verbe qala rapporte les propos des ignorants. L'alternative « opinion » est ecartee car le contexte est une parole rapportee, pas une pensee interieure.

**ne savent pas** — Le sens retenu est « savoir ». Le verbe ya'lamuna avec la negation la decrit l'absence de savoir. L'alternative « signe/marque » est ecartee car le mot est un verbe de connaissance.

**nous parlait** — Le sens retenu est « parler ». Le verbe yukallimuna forme II designe la parole directe et intensive. L'alternative « blesser » est ecartee car le contexte est la communication, pas la violence.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite. L'alternative « detresse » est ecartee car le mot est le nom propre.

**nous vienne** — Le sens retenu est « venir ». Le verbe ta'tina designe l'arrivee d'un signe vers eux. L'alternative « detruire » est ecartee car le contexte est l'arrivee d'un signe, pas une destruction.

**un signe** — Le mot ayatun designe un signe, un verset, une preuve. La racine a-y-h n'est pas attestee dans le Lane's comme racine independante, mais ayah est largement utilise dans le Coran.

**ainsi** — Le mot kadhalika signifie « ainsi, de meme ». Il fait le lien entre la parole des ignorants actuels et celle des anciens.

**avant eux** — Le sens retenu est « avant ». Le mot qablihim designe l'anteriorite temporelle. L'alternative « recevoir » est ecartee car le mot est au genitif avec min et designe le passe.

**semblable** — Le sens retenu est « ressemblance ». Le mot mithla designe ce qui est pareil. L'alternative « se tenir debout » est ecartee car le contexte est la comparaison.

**leur parole** — Le sens retenu est « parole ». Le mot qawlihim designe la parole prononcee par les anciens.

**se ressemblent** — Le sens retenu est « ressembler ». Le verbe tashabahat forme VI designe la ressemblance mutuelle. L'alternative « doute/ambigu » est ecartee car le contexte est la similitude des coeurs.

**leurs coeurs** — Le sens retenu est « coeur ». Le mot qulubuhum designe les coeurs, sieges de la comprehension. L'alternative « retourner » est ecartee car le mot est un nom au pluriel, pas un verbe de retournement.

**nous avons expose** — Le sens retenu est « rendre clair ». Le verbe bayyanna forme II signifie expliquer, rendre evident. L'alternative « separer » est ecartee car la forme II ici est intensive de « rendre clair », pas de « separer ».

**les signes** — Le mot al-ayati est le pluriel defini de aya — les signes etablis et connus.

**un peuple** — Le sens retenu est « peuple ». Le mot qawmin designe un peuple, une communaute. L'alternative « se lever » est ecartee car le mot est un nom de communaute, pas un verbe de mouvement.

**ont la certitude** — Le sens retenu est « certitude ». Le verbe yuqinuna designe l'etat de certitude interieure. L'alternative « mort » est ecartee car le contexte est epistemique.

§CRITIQUE§
Les traductions courantes rendent ce verset de facon similaire. La seule nuance notable est que Hamidullah traduit lawla yukallimuna par « Pourquoi Allah ne nous parle-t-Il pas » ce qui rend bien l'idee de reproche/souhait de lawla. Notre traduction « si seulement Dieu nous parlait » est plus proche du sens conditionnel de lawla mais les deux rendus sont acceptables. La phrase « Leurs coeurs se ressemblent » est unanime dans toutes les traductions — la forme VI tashabahat est si claire que l'ambiguite est impossible.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648", is_particle: true, position: 0 },
      { fr: "ont dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 2 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 3 },
      { fr: "savent pas", pos: "verbe", phon: "ya'lamuna", arabic: "\u064a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 4 },
      { fr: "si seulement", phon: "lawla", arabic: "\u0644\u064e\u0648\u0652\u0644\u064e\u0627", is_particle: true, position: 5 },
      { fr: "nous parlait", pos: "verbe", phon: "yukallimuna", arabic: "\u064a\u064f\u0643\u064e\u0644\u0651\u0650\u0645\u064f\u0646\u064e\u0627", word_key: "klm", is_particle: false, sense_retenu: "parler", position: 6 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 7 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064e\u0648\u0652", is_particle: true, position: 8 },
      { fr: "nous vienne", pos: "verbe", phon: "ta'tina", arabic: "\u062a\u064e\u0623\u0652\u062a\u0650\u064a\u0646\u064e\u0622", word_key: "aty", is_particle: false, sense_retenu: "venir", position: 9 },
      { fr: "un signe", pos: "nom", phon: "ayatun", arabic: "\u0621\u064e\u0627\u064a\u064e\u0629\u064c", word_key: "ayh", is_particle: false, sense_retenu: "signe", position: 10 },
      { fr: "ainsi", pos: "adverbe", phon: "kadhalika", arabic: "\u0643\u064e\u0630\u064e\u0640\u0670\u0644\u0650\u0643\u064e", word_key: "kdl", is_particle: false, sense_retenu: "ainsi", position: 11 },
      { fr: "ont dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 12 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 13 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 14 },
      { fr: "avant eux", pos: "nom", phon: "qablihim", arabic: "\u0642\u064e\u0628\u0652\u0644\u0650\u0647\u0650\u0645\u0652", word_key: "qbl", is_particle: false, sense_retenu: "avant", position: 15 },
      { fr: "semblable a", pos: "nom", phon: "mithla", arabic: "\u0645\u0650\u0651\u062b\u0652\u0644\u064e", word_key: "mthl", is_particle: false, sense_retenu: "semblable", position: 16 },
      { fr: "leur parole", pos: "nom", phon: "qawlihim", arabic: "\u0642\u064e\u0648\u0652\u0644\u0650\u0647\u0650\u0645\u0652", word_key: "qwl", is_particle: false, sense_retenu: "parole", position: 17 },
      { fr: "se ressemblent", pos: "verbe", phon: "tashabahat", arabic: "\u062a\u064e\u0634\u064e\u0640\u0670\u0628\u064e\u0647\u064e\u062a\u0652", word_key: "\u0161bh", is_particle: false, sense_retenu: "se ressembler", position: 18 },
      { fr: "leurs coeurs", pos: "nom", phon: "qulubuhum", arabic: "\u0642\u064f\u0644\u064f\u0648\u0628\u064f\u0647\u064f\u0645\u0652", word_key: "qlb", is_particle: false, sense_retenu: "coeur", position: 19 },
      { fr: "certes", phon: "qad", arabic: "\u0642\u064e\u062f\u0652", is_particle: true, position: 20 },
      { fr: "nous avons expose", pos: "verbe", phon: "bayyanna", arabic: "\u0628\u064e\u064a\u0651\u064e\u0646\u0651\u064e\u0627", word_key: "byn", is_particle: false, sense_retenu: "rendre clair", position: 21 },
      { fr: "les signes", pos: "nom", phon: "al-ayati", arabic: "\u0671\u0644\u0652\u0640\u064e\u0654\u0627\u064a\u064e\u0640\u0670\u062a\u0650", word_key: "ayh", is_particle: false, sense_retenu: "signe", position: 22 },
      { fr: "pour un peuple", pos: "nom", phon: "li-qawmin", arabic: "\u0644\u0650\u0642\u064e\u0648\u0652\u0645\u064d", word_key: "qwm", is_particle: false, sense_retenu: "peuple", position: 23 },
      { fr: "qui ont la certitude", pos: "verbe", phon: "yuqinuna", arabic: "\u064a\u064f\u0648\u0642\u0650\u0646\u064f\u0648\u0646\u064e", word_key: "yqn", is_particle: false, sense_retenu: "certitude", position: 24 }
    ],
    words: [
      // qwl pos=1
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qala est un accompli 3MS de la racine q-w-l. Le Lane's donne : dire, parler. L'accompli rapporte un evenement passe — « ils ont dit ». Ce verbe introduit les propos des ignorants qui demandent que Dieu leur parle ou qu'un signe vienne. En 2:117, qala etait la parole creatrice de Dieu (yaqulu). En 2:118, c'est la parole pretentieuse des ignorants. La distinction avec « Pensee/Avis » est claire : qala est un verbe de parole exterieure, pas une opinion interieure.",
              axe1_verset: "Le verbe qala apparait deux fois dans le verset : une fois pour les ignorants actuels (qala alladhina la ya'lamuna) et une fois pour les anciens (qala alladhina min qablihim). Le verset est structure autour de la repetition de la parole — les memes mots prononces a travers les epoques. Le champ lexical (dire, savoir, parler, signe, parole, ressembler) montre que la parole humaine se repete alors que la parole divine est unique.",
              axe2_voisins: "Le verset 117 montrait la parole creatrice de Dieu — yaqulu lahu kun. Le verset 118 oppose a cette parole creatrice la parole pretentieuse des ignorants — « pourquoi Dieu ne nous parle-t-Il pas ». L'ironie est qu'ils demandent une parole directe de Dieu alors que la parole creatrice « Sois » est la parole la plus directe. Le verset 119 conclura en affirmant que le Prophete est envoye avec la verite.",
              axe3_sourate: "La racine q-w-l structure toute la sourate al-Baqarah par les recits de paroles. Chaque groupe dit quelque chose — les croyants, les hypocrites, les ignorants, Dieu, Moussa. En 2:118, la parole des ignorants est comparee a celle des anciens — la sourate montre que la repetition des memes erreurs traverse les generations.",
              axe4_coherence: "La racine q-w-l est la plus frequente du Coran (environ 1722 occurrences). Le schema « wa-qala alladhina... » (et ont dit ceux qui...) est un procede recurrent qui rapporte les propos des divers groupes humains. En 2:118, ce schema montre que la parole des ignorants n'est pas nouvelle — elle a deja ete prononcee par les anciens. Le Coran montre la permanence de l'erreur humaine.",
              axe5_frequence: "Pour la mission du khalifa, la repetition de la parole erronnee est un avertissement. Le khalifa doit etre vigilant face aux demandes pretentieuses qui masquent le refus de croire. Ceux qui demandent des preuves supplementaires ne sont souvent pas motives par la recherche de la verite mais par le refus de l'engagement."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le verbe qala est un verbe de parole exterieure rapportee — il ne designe pas une opinion interieure ici."
            }
          }
        }
      },
      // elm pos=4
      {
        word_key: "elm", position: 4, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe ya'lamuna est un inaccompli 3MP de la racine '-l-m. Le Lane's donne : savoir, connaitre. L'inaccompli avec la negation la decrit un etat continu — ils ne savent pas de maniere permanente. Le savoir est nie chez eux, ce qui qualifie leur demande comme issue de l'ignorance. La distinction avec « Marque/Signe » est claire : ya'lamuna est un verbe de connaissance, pas un signe physique. La distinction avec « Monde/Creation » est aussi claire : le verbe est au pluriel 3e personne, pas un nom designant le monde.",
              axe1_verset: "Le mot ya'lamuna qualifie le sujet de la parole — « ceux qui ne savent pas ». Le verset oppose ceux qui ne savent pas (debut) a ceux qui ont la certitude (fin). Le champ lexical forme un arc : ignorance → demande pretentieuse → repetition de l'erreur → coeurs semblables → certitude. Le savoir (ou son absence) est le critere qui distingue les deux groupes.",
              axe2_voisins: "Le verset 117 montrait le pouvoir creatif de Dieu — un savoir que les ignorants du verset 118 ne possedent pas. Le verset 119 dira que le Prophete est envoye avec la verite — le savoir est porte par l'envoye, pas par les ignorants. Les versets 117-119 forment une triade : pouvoir divin → ignorance humaine → envoi de la verite.",
              axe3_sourate: "La racine '-l-m est l'une des racines les plus frequentes de la sourate al-Baqarah. En 2:13, les ignorants sont ceux qui ne comprennent pas. En 2:30, les anges disent « nous ne savons que ce que Tu nous as appris ». En 2:118, l'absence de savoir motive une demande pretentieuse. La sourate trace la ligne entre ceux qui savent et ceux qui ne savent pas.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. L'expression « alladhina la ya'lamuna » (ceux qui ne savent pas) est un procede coranique recurrent pour qualifier ceux qui demandent des choses deraisonnables par ignorance. En 6:37, 13:43, 39:49, le meme schema se repete. Le Coran lie systematiquement l'ignorance aux demandes pretentieuses.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est la premiere arme contre l'ignorance. Le khalifa doit acquerir le savoir pour ne pas tomber dans la repetition des erreurs des anciens. Ceux qui ne savent pas demandent des signes alors que les signes sont la — le savoir permet de voir ce qui est deja visible."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le mot est un verbe inaccompli 3MP — il designe l'acte de savoir, pas un signe physique."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde"],
              proof_ctx: "Le mot est un verbe ya'lamuna (ils savent), pas un nom designant le monde ('alamin)."
            }
          }
        }
      },
      // klm pos=6
      {
        word_key: "klm", position: 6, sense_chosen: "parler",
        analysis_axes: {
          sense_chosen: "parler",
          concept_chosen: "Parole/Discours",
          concepts: {
            "Parole/Discours": {
              status: "retenu",
              senses: ["parler", "parole", "mot"],
              proof_ctx: "Le verbe yukallimuna est un inaccompli 3MS forme II de la racine k-l-m avec pronom suffixe na (nous). Le Lane's donne : parler, adresser la parole. La forme II intensifie — kallama c'est parler a quelqu'un directement, pas simplement prononcer des mots. Ici les ignorants demandent que Dieu leur parle directement — yukallimuna = qu'Il nous parle. La distinction avec « Blessure » (nul) est claire : le contexte est la communication, pas la violence.",
              axe1_verset: "Le verbe yukallimuna est l'objet de la demande des ignorants — ils veulent que Dieu leur parle. Le champ lexical (dire, savoir, parler, signe) montre que le verset tourne autour de la communication entre Dieu et les hommes. Les ignorants exigent une communication directe alors que les signes sont deja la. Le verset oppose la demande de parole directe a la realite des signes exposes.",
              axe2_voisins: "Le verset 117 montrait que Dieu parle — Il dit « Sois ». Le verset 118 montre des gens qui demandent que Dieu leur parle — mais la parole divine qu'ils demandent est deja presente dans la creation et dans la revelation. Le verset 119 confirmera que le Prophete est envoye — c'est par lui que Dieu parle aux hommes.",
              axe3_sourate: "La racine k-l-m apparait dans la sourate al-Baqarah en 2:75 (ils ecoutaient la parole de Dieu) et 2:253 (Dieu a parle a Moussa). Le verset 118 s'inscrit dans ce theme : Dieu a parle a certains directement (Moussa) mais les ignorants exigent le meme traitement pour eux. La sourate montre que la parole divine prend diverses formes.",
              axe4_coherence: "La racine k-l-m apparait environ 75 fois dans le Coran. En 4:164, Dieu a parle a Moussa directement (kallama). En 42:51, il est dit qu'il n'est pas donne a un humain que Dieu lui parle sauf par revelation, derriere un voile ou par un messager. Le Coran repond directement a la demande du verset 118 : Dieu parle par Ses voies, pas selon les exigences des ignorants.",
              axe5_frequence: "Pour la mission du khalifa, la communication divine passe par les voies que Dieu a choisies — la revelation, les signes, les envoyes. Le khalifa ne doit pas exiger que Dieu lui parle directement mais doit ecouter la parole divine la ou elle se trouve : dans le Coran, dans les signes, dans la creation."
            },
            "Blessure": {
              status: "nul",
              senses: ["blesser", "blessure"],
              proof_ctx: "Le sens de blessure est un sens physique de la racine k-l-m. Le contexte est la demande de communication divine, pas une blessure."
            }
          }
        }
      },
      // alh pos=7
      {
        word_key: "alh", position: 7, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif. Ici Allah est le sujet de yukallimuna — c'est Lui dont ils demandent la parole directe. Le contexte est clair : les ignorants veulent que Dieu leur parle directement. Allah est deja le « retenu » standard pour cette racine quand le mot est le nom propre.",
              axe1_verset: "Le nom Allahu est le sujet de la demande des ignorants — « si seulement Dieu nous parlait ». Le champ lexical (dire, savoir, Dieu, signe, signes) montre que Dieu est au centre de leur demande. Ils exigent de Dieu ce que Dieu a deja donne autrement — par les signes et les envoyes.",
              axe2_voisins: "Le verset 117 presentait Dieu comme le Createur originel. Le verset 118 Le montre comme l'objet d'une exigence humaine — les ignorants veulent qu'Il leur parle. Le verset 119 dira que Dieu a envoye le Prophete — c'est Sa reponse a la demande de communication. La sequence montre que Dieu cree (117), que les ignorants exigent (118), et que Dieu repond par l'envoi (119).",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il est tantot sujet de l'action divine, tantot objet des demandes humaines. En 2:118, Allah est ce que les ignorants demandent — ils veulent un acces direct au lieu d'accepter les voies etablies.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. La demande « pourquoi Allah ne nous parle-t-Il pas » est un schema d'exigence humaine que le Coran denonce. En 25:21, ceux qui n'esperent pas la rencontre de Dieu disent la meme chose. Le Coran montre que cette exigence est un pretexte, pas une quete sincere.",
              axe5_frequence: "Pour la mission du khalifa, Dieu communique par les voies qu'Il a choisies. Le khalifa doit accepter que la parole divine arrive par la revelation et les signes, pas necessairement par une parole directe. Exiger un acces direct a Dieu en dehors de Ses voies est un acte d'arrogance, pas de foi."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["adorer", "faire adorer", "se devouer au culte", "diviniser"],
              proof_ctx: "Le mot est le nom propre Allah au nominatif — pas un verbe d'adoration."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah, pas un etat de detresse."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["chercher refuge", "proteger", "demeurer"],
              proof_ctx: "Le mot est le nom propre Allah dans un contexte de demande de parole directe."
            }
          }
        }
      },
      // aty pos=9
      {
        word_key: "aty", position: 9, sense_chosen: "venir",
        analysis_axes: {
          sense_chosen: "venir",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe ta'tina est un inaccompli 2FS de la racine a-t-y avec pronom suffixe na (nous). Le Lane's donne : venir, arriver. Le sujet est ayatun (un signe) — les ignorants demandent qu'un signe leur vienne. L'inaccompli dans le contexte de lawla (si seulement) indique un souhait non realise. La distinction avec « detruire » (nul) est evidente : le contexte est l'arrivee d'un signe, pas une destruction.",
              axe1_verset: "Le verbe ta'tina exprime la seconde demande des ignorants : « ou qu'un signe nous vienne ». Le champ lexical (parler, signe, venir) montre deux exigences : une parole directe OU un signe miraculeux. Les ignorants veulent que la preuve vienne a eux sans effort de leur part — ils attendent passivement au lieu de chercher activement.",
              axe2_voisins: "Le verset 117 montrait que Dieu cree par Sa parole — chaque chose existante est un signe de ce pouvoir. Le verset 118 montre des gens qui demandent un signe supplementaire alors que la creation entiere est un signe. Le verset 119 repondra en affirmant que le Prophete est envoye — l'envoye est le signe vivant.",
              axe3_sourate: "La racine a-t-y apparait frequemment dans la sourate al-Baqarah. En 2:106, « Nous ne remplacons un signe que par un meilleur ». En 2:145, « meme si tu apportais tous les signes ». La sourate montre que les signes sont abondants mais que les ignorants en demandent toujours plus.",
              axe4_coherence: "La racine a-t-y apparait environ 549 fois dans le Coran. Le schema « pourquoi un signe ne nous vient-il pas » est recurrent — en 6:37, 13:7, 29:50. Le Coran repond toujours de la meme facon : les signes sont la mais les ignorants ne les voient pas. La venue des signes est reelle mais la reception depend de la disposition du coeur.",
              axe5_frequence: "Pour la mission du khalifa, les signes viennent a celui qui a la certitude. Le khalifa ne doit pas attendre passivement un signe miraculeux mais reconnaitre les signes qui l'entourent — la creation, la revelation, l'ordre cosmique. La venue du signe est permanente pour celui qui sait regarder."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["detruire"],
              proof_ctx: "Le sens de destruction est hors sujet — le contexte est la venue d'un signe, pas une action destructrice."
            }
          }
        }
      },
      // qbl pos=15
      {
        word_key: "qbl", position: 15, sense_chosen: "avant",
        analysis_axes: {
          sense_chosen: "avant",
          concept_chosen: "Antériorité/Passé",
          concepts: {
            "Antériorité/Passé": {
              status: "retenu",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le mot qablihim est un nom de la racine q-b-l au genitif avec pronom suffixe 3MP (hum) et precede de la preposition min. Le Lane's donne : avant, ce qui precede. Min qablihim signifie « ceux d'avant eux » — les peuples anterieurs qui ont dit la meme chose. La distinction avec « Reception/Accueil » est claire : le mot est au genitif de temps, pas un verbe de reception. La distinction avec « Orientation/Direction » est aussi claire : le contexte est temporel, pas spatial.",
              axe1_verset: "Le mot qablihim etablit le parallele temporel central du verset : les ignorants actuels repetent ce que les anciens ont dit. Le champ lexical (dire, avant, semblable, parole, ressembler) construit la comparaison entre les epoques. Le verset montre que l'ignorance se transmet — les coeurs se ressemblent a travers le temps.",
              axe2_voisins: "Le verset 117 parlait de la creation originelle — un evenement premier qui precede tout. Le verset 118 montre que la reaction humaine a la verite est aussi ancienne — ceux d'avant ont deja dit la meme chose. Le verset 119 rappellera la mission du Prophete — l'envoi est aussi une constante divine face a cette constante humaine.",
              axe3_sourate: "La racine q-b-l apparait frequemment dans la sourate al-Baqarah pour evoquer les peuples anterieurs. En 2:134, « ils sont un peuple qui a passe ». En 2:141, la meme formule. La sourate insiste sur la continuite des erreurs humaines et la necessite de ne pas les repeter.",
              axe4_coherence: "La racine q-b-l dans le sens temporel apparait environ 264 fois dans le Coran. L'expression « alladhina min qablihim » (ceux d'avant eux) est un refrain coranique qui montre la permanence de certains comportements humains. En 3:137, « des exemples ont deja eu lieu avant vous ». Le Coran utilise le passe comme lecon pour le present.",
              axe5_frequence: "Pour la mission du khalifa, connaitre le passe est essentiel. Les erreurs des anciens se repetent chez les contemporains — les coeurs se ressemblent. Le khalifa doit etudier l'histoire pour ne pas repeter les memes erreurs. La connaissance de ce qui est « avant » eclaire ce qui est « maintenant »."
            },
            "Réception/Accueil": {
              status: "nul",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Le sens de reception est hors sujet — qablihim ici est temporel (avant eux), pas un verbe de reception."
            },
            "Orientation/Direction": {
              status: "nul",
              senses: ["se tourner vers", "faire face", "venir vers"],
              proof_ctx: "Le sens d'orientation est hors sujet — le contexte est temporel (avant eux dans le temps), pas spatial."
            }
          }
        }
      },
      // mthl pos=16
      {
        word_key: "mthl", position: 16, sense_chosen: "semblable",
        analysis_axes: {
          sense_chosen: "semblable",
          concept_chosen: "Ressemblance/Exemple",
          concepts: {
            "Ressemblance/Exemple": {
              status: "retenu",
              senses: ["ressembler", "imiter", "exemple", "proverbe", "parabole", "semblable"],
              proof_ctx: "Le mot mithla est un nom de la racine m-th-l a l'accusatif. Le Lane's donne : semblable, pareil, exemple, parabole. Ici mithla qawlihim signifie « une parole semblable a leur parole ». Le mot est en idafa avec qawlihim — mithla est la mesure de la ressemblance. Les anciens ont dit une parole SEMBLABLE — pas identique mot pour mot mais equivalente dans le fond. La distinction avec « Station/Presence » est claire : le mot est un nom de comparaison, pas un verbe de station.",
              axe1_verset: "Le mot mithla etablit la comparaison entre les paroles des anciens et celles des contemporains. Le champ lexical (dire, avant, semblable, parole, ressembler, coeurs) montre que la ressemblance ne s'arrete pas aux mots — elle va jusqu'aux coeurs. Le verset progresse de la ressemblance des paroles (mithla qawlihim) a la ressemblance des coeurs (tashabahat qulubuhum).",
              axe2_voisins: "Le verset 117 montrait la singularite de la creation divine (badi'u — sans precedent). Le verset 118 montre l'inverse pour l'erreur humaine : elle est toujours la meme, toujours semblable. Le contraste est saisissant — la creation divine est unique, l'erreur humaine est repetitive.",
              axe3_sourate: "La racine m-th-l apparait dans la sourate al-Baqarah en 2:17 (l'exemple de ceux qui ont allume un feu), 2:26 (Dieu ne dedaigne pas de frapper un exemple), 2:214 (ou pensez-vous entrer au paradis). La sourate utilise la ressemblance et l'exemple comme outils pedagogiques.",
              axe4_coherence: "La racine m-th-l apparait environ 169 fois dans le Coran. Le mot mithl (semblable) est utilise pour montrer les parallelismes entre les epoques. En 2:118, la ressemblance des paroles montre que les memes erreurs se repetent. Le Coran utilise la comparaison pour montrer que l'histoire humaine a des constantes.",
              axe5_frequence: "Pour la mission du khalifa, la ressemblance des erreurs humaines est un avertissement. Le khalifa doit reconnaitre les schemas repetitifs de l'erreur pour les eviter. La similitude des paroles et des coeurs montre que le probleme n'est pas circonstanciel mais structural — c'est le coeur qui doit changer."
            },
            "Station/Présence": {
              status: "nul",
              senses: ["se tenir debout", "dresser"],
              proof_ctx: "Le sens de station debout est hors sujet — mithla est un nom de comparaison a l'accusatif, pas un verbe de station."
            },
            "Sens isolé/Mutiler": {
              status: "nul",
              senses: ["mutiler"],
              proof_ctx: "Le sens de mutiler est un sens isole de la racine. Le contexte est la comparaison entre les paroles."
            }
          }
        }
      },
      // sbh pos=18
      {
        word_key: "\u0161bh", position: 18, sense_chosen: "se ressembler",
        analysis_axes: {
          sense_chosen: "se ressembler",
          concept_chosen: "Ressemblance/Ambiguïté",
          concepts: {
            "Ressemblance/Ambiguïté": {
              status: "retenu",
              senses: ["ressembler", "semblable", "ambigu", "doute"],
              proof_ctx: "Le verbe tashabahat est un accompli 3FS forme VI de la racine sh-b-h. Le Lane's donne : se ressembler mutuellement, etre ambigu. La forme VI (tafa'ala) indique la reciprocite — les coeurs se ressemblent les uns les autres. L'accompli marque un constat : cette ressemblance est un fait etabli. Le sujet est qulubuhum (leurs coeurs) — la ressemblance n'est pas superficielle mais profonde, au niveau du coeur. La distinction entre « ressembler » et « ambigu » : ici le contexte est la similitude, pas l'ambiguite.",
              axe1_verset: "Le verbe tashabahat est le diagnostic central du verset : apres avoir montre la ressemblance des paroles (mithla qawlihim), le verset remonte a la cause — les coeurs se ressemblent. Le champ lexical progresse du superficiel au profond : paroles semblables → coeurs semblables. La ressemblance des coeurs explique la repetition des erreurs a travers les epoques.",
              axe2_voisins: "Le verset 117 montrait le coeur de la puissance divine — Il dit « Sois » et c'est fait. Le verset 118 montre le coeur de la faiblesse humaine — les coeurs se ressemblent dans l'ignorance. Le verset 119 repondra par l'envoi du Prophete avec la verite. La triade est : puissance du coeur divin → faiblesse des coeurs humains → envoi de la verite pour guerir les coeurs.",
              axe3_sourate: "La racine sh-b-h apparait aussi en 2:25 (les fruits du paradis sont mutashabihan — semblables) et en 2:70 (la vache se ressemble pour eux). La sourate utilise la ressemblance pour montrer tantot la beaute (les fruits) tantot le probleme (les coeurs). En 2:118, la ressemblance est un defaut — les coeurs se ressemblent dans l'erreur.",
              axe4_coherence: "La racine sh-b-h apparait environ 13 fois dans le Coran. En 3:7, les versets ambigus (mutashabihat) sont ceux dont le sens n'est pas clair. En 2:118, tashabahat decrit la ressemblance des coeurs — les coeurs des ignorants sont tous pareils dans leur refus. Le Coran utilise cette racine pour montrer que la ressemblance peut etre source de confusion ou de constat.",
              axe5_frequence: "Pour la mission du khalifa, la ressemblance des coeurs dans l'erreur est un avertissement. Le khalifa doit cultiver un coeur different — un coeur ouvert a la certitude et aux signes. Si les coeurs se ressemblent dans l'ignorance, le khalifa doit chercher a se distinguer par le savoir et la certitude."
            }
          }
        }
      },
      // qlb pos=19
      {
        word_key: "qlb", position: 19, sense_chosen: "coeur",
        analysis_axes: {
          sense_chosen: "coeur",
          concept_chosen: "Coeur/Centre",
          concepts: {
            "Coeur/Centre": {
              status: "retenu",
              senses: ["coeur", "esprit", "intelligence", "milieu"],
              proof_ctx: "Le mot qulubuhum est le pluriel de qalb (racine q-l-b) au nominatif avec pronom suffixe 3MP (hum). Le Lane's donne : coeur, siege de la comprehension et de la volonte. Le coeur dans le Coran est l'organe de la comprehension profonde, pas seulement des emotions. Ici « leurs coeurs se ressemblent » signifie que leurs dispositions profondes sont identiques — le probleme n'est pas intellectuel mais cardiaque. La distinction avec « Retournement/Changement » est que le mot est un nom au pluriel (qulub), pas un verbe de retournement.",
              axe1_verset: "Le mot qulubuhum est le sujet de tashabahat — ce sont les coeurs qui se ressemblent. Le verset progresse des paroles aux coeurs — la cause profonde de la repetition des erreurs est la similitude des coeurs. Le champ lexical (dire, savoir, parole, semblable, coeurs, certitude) montre que le coeur est le lieu ou se decide l'acceptation ou le refus.",
              axe2_voisins: "Le verset 117 montrait la volonte divine (qada — decider). Le verset 118 montre l'etat des coeurs humains — similaires dans l'ignorance. Le verset 119 enverra le Prophete comme annonceur et avertisseur — deux messages adresses aux coeurs. Les coeurs qui se ressemblent dans l'erreur ont besoin d'etre secoues par l'annonce et l'avertissement.",
              axe3_sourate: "La racine q-l-b apparait frequemment dans la sourate al-Baqarah. En 2:7, Dieu a scelle leurs coeurs. En 2:10, dans leurs coeurs il y a une maladie. En 2:74, puis vos coeurs se sont endurcis. La sourate trace l'histoire des coeurs — scelles, malades, endurcis, semblables. Le coeur est le champ de bataille spirituel de la sourate.",
              axe4_coherence: "La racine q-l-b apparait environ 168 fois dans le Coran. Le coeur (qalb) est le siege de la foi et de l'incredulite. En 2:118, les coeurs se ressemblent dans le refus de croire. En 22:46, « ce ne sont pas les yeux qui sont aveugles mais les coeurs dans les poitrines ». Le Coran situe systematiquement le probleme au niveau du coeur, pas de l'intellect.",
              axe5_frequence: "Pour la mission du khalifa, le coeur est l'organe de la mission. Un coeur sain percoit les signes et accede a la certitude. Un coeur malade ou endurci demande des preuves supplementaires sans jamais etre satisfait. Le khalifa doit veiller a l'etat de son coeur — la ressemblance avec les coeurs des ignorants est le danger premier."
            },
            "Retournement/Changement": {
              status: "peu_probable",
              senses: ["retourner", "renverser", "transformer", "changer d'etat", "revenir"],
              proof_ctx: "Le sens de retournement est le sens verbal premier de la racine q-l-b. Cependant ici le mot qulubuhum est un nom au pluriel — il designe les coeurs, pas l'acte de retourner. Le coeur (qalb) tire son nom de sa capacite a se retourner (taqallub) — il est instable par nature. Mais dans ce verset, le mot designe l'organe/siege de la comprehension, pas le mouvement de retournement.",
              axe1_verset: "Dans le champ lexical du verset, le retournement des coeurs n'est pas le sujet — c'est leur ressemblance. Le verset ne dit pas que les coeurs se retournent mais qu'ils se ressemblent. Le retournement est une potentialite du coeur (sa nature instable) mais ici c'est la similitude qui est le theme.",
              axe2_voisins: "Les versets voisins ne parlent pas de changement d'etat des coeurs mais de la constance de l'erreur. Les coeurs ne changent pas — ils restent semblables a travers les epoques. L'ironie est que les coeurs qui pourraient changer (taqallub) restent identiques dans l'erreur.",
              axe3_sourate: "Dans la sourate al-Baqarah, le coeur est souvent decrit comme un organe qui devrait changer mais qui s'endurci. En 2:74, les coeurs se sont endurcis. Le verbe de retournement (taqallub) n'est pas utilise ici — c'est la fixite dans l'erreur qui est denoncee.",
              axe4_coherence: "Dans le Coran, la racine q-l-b dans le sens de retournement apparait en 3:144 (vous retourneriez sur vos talons). Le coeur tire son nom de cette capacite mais en 2:118 c'est le nom (qulub) qui est utilise, pas le verbe (qalaba).",
              axe5_frequence: "Pour la mission du khalifa, la capacite du coeur a se retourner est une arme a double tranchant — le coeur peut se tourner vers la verite ou vers l'erreur. Le khalifa doit demander la stabilite du coeur dans la verite."
            },
            "Sens isolé/Moule": {
              status: "nul",
              senses: ["moule"],
              proof_ctx: "Le sens de moule est un sens isole de la racine. Le contexte est le coeur comme organe de comprehension."
            },
            "Sens isolé/Bracelet": {
              status: "nul",
              senses: ["bracelet"],
              proof_ctx: "Le sens de bracelet est un sens isole de la racine. Le contexte est le coeur."
            }
          }
        }
      },
      // byn pos=21
      {
        word_key: "byn", position: 21, sense_chosen: "rendre clair",
        analysis_axes: {
          sense_chosen: "rendre clair",
          concept_chosen: "Clarté/Évidence",
          concepts: {
            "Clarté/Évidence": {
              status: "retenu",
              senses: ["etre clair", "expliquer", "evident", "preuve"],
              proof_ctx: "Le verbe bayyanna est un accompli 1PL forme II de la racine b-y-n. Le Lane's donne : rendre clair, expliquer, exposer. La forme II intensifie — bayyanna c'est rendre tres clair, pas simplement mentionner. Le pronom na (nous) est le « nous » de majeste divine. L'accompli avec qad indique un acte acheve et confirme — « certes nous avons clairement expose ». La distinction avec « Separation/Distance » est que la forme II ici a le sens de clarification, pas de separation physique.",
              axe1_verset: "Le verbe bayyanna est la reponse divine aux demandes des ignorants : ils demandent des signes, Dieu repond qu'Il a deja clairement expose les signes. Le champ lexical (signe, exposer, certitude) montre que le probleme n'est pas le manque de signes mais le manque de certitude. Dieu a fait Sa part — rendre clair. Le reste depend du coeur.",
              axe2_voisins: "Le verset 117 montrait le pouvoir creatif de Dieu. Le verset 118 repond aux ignorants en affirmant que les signes ont ete clairement exposes. Le verset 119 conclura par l'envoi du Prophete — une autre forme de clarification. La triade est : creation → exposition des signes → envoi du Prophete.",
              axe3_sourate: "La racine b-y-n apparait dans la sourate al-Baqarah en 2:159 (ceux qui dissimulent ce que Nous avons fait descendre comme preuves et guidance apres que Nous l'ayons clairement expose), 2:187 (ainsi Dieu rend clairs Ses signes). La sourate insiste sur le fait que Dieu rend les choses claires — le probleme est dans la reception, pas dans l'emission.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. Le schema « qad bayyanna al-ayat » (certes Nous avons clairement expose les signes) est un refrain qui affirme que Dieu a rempli Son role de clarification. En 2:118, 2:242, 3:118, la meme affirmation se repete. Le Coran insiste : la clarte est donnee, la certitude depend de celui qui recoit.",
              axe5_frequence: "Pour la mission du khalifa, la clarte des signes est le fondement de la mission. Dieu a clairement expose les signes — le khalifa doit les lire et les comprendre. La clarte est une grace divine : Dieu n'a pas laisse les hommes dans l'obscurite. Le khalifa doit etre reconnaissant de cette clarte et en tirer les consequences."
            },
            "Séparation/Distance": {
              status: "peu_probable",
              senses: ["separer", "entre", "quitter"],
              proof_ctx: "Le sens de separation est un sens important de la racine b-y-n. Le Lane's donne bayna (entre) et bana (separer). Cependant ici le verbe bayyanna est a la forme II avec le sens de « rendre clair, exposer » — pas de separation physique. La forme II de b-y-n signifie « clarifier » et non « separer ». Le contexte confirme : qad bayyanna al-ayat = nous avons clairement expose les signes.",
              axe1_verset: "Dans le champ lexical du verset, la separation n'est pas le theme — c'est la clarte. Le verset oppose l'ignorance des demandeurs a la clarte des signes exposes. La separation est implicite (entre ceux qui ont la certitude et les ignorants) mais le verbe bayyanna porte le sens de clarification.",
              axe2_voisins: "Les versets voisins ne parlent pas de separation mais de communication divine (117 : Il dit Sois ; 118 : les signes sont exposes ; 119 : le Prophete est envoye). Le fil conducteur est la transmission de la verite, pas la separation.",
              axe3_sourate: "Dans la sourate al-Baqarah, la forme II de b-y-n est utilisee pour la clarification divine. En 2:242, « ainsi Dieu vous rend clairs Ses signes ». Le sens de separation (bayna, entre) est utilise dans d'autres contextes mais pas avec la forme II bayyanna.",
              axe4_coherence: "Dans le Coran, bayyanna (forme II) est systematiquement utilise pour la clarification : en 2:118, 2:187, 2:219, 2:242, 3:118, 5:75. Le sens de « rendre clair » est dominant pour la forme II. Le sens de separation est porte par la forme I (bana) ou la preposition (bayna).",
              axe5_frequence: "Pour la mission du khalifa, la distinction entre clarifier et separer est subtile mais reelle. Dieu clarifie les signes — Il les rend comprehensibles. La separation est une consequence possible : ceux qui comprennent se separent de ceux qui refusent. Mais l'acte divin est la clarification, pas la separation."
            }
          }
        }
      },
      // qwm pos=23
      {
        word_key: "qwm", position: 23, sense_chosen: "peuple",
        analysis_axes: {
          sense_chosen: "peuple",
          concept_chosen: "Peuple/Communauté",
          concepts: {
            "Peuple/Communauté": {
              status: "retenu",
              senses: ["peuple", "communaute", "tribu", "nation", "groupe"],
              proof_ctx: "Le mot qawmin est un nom masculin singulier indefini de la racine q-w-m au genitif avec preposition li. Le Lane's donne : peuple, communaute, ceux qui se tiennent ensemble. Li-qawmin signifie « pour un peuple ». L'indefini indique un peuple non specifie — quiconque a la certitude, quel que soit son peuple. La distinction avec « Verticalite/Droiture » est que le mot est un nom designant un groupe, pas un verbe de station. La distinction avec « Gestion/Administration » est aussi claire : le mot designe un peuple, pas un acte de gestion.",
              axe1_verset: "Le mot qawmin qualifie les destinataires des signes clairement exposes — « pour un peuple qui a la certitude ». Le verset distingue deux groupes : ceux qui ne savent pas (debut) et le peuple qui a la certitude (fin). Les signes sont exposes pour les seconds, pas pour les premiers. Le champ lexical (exposer, signes, peuple, certitude) montre que la reception des signes depend de la qualite du recepteur.",
              axe2_voisins: "Le verset 117 s'adressait a tous (les cieux et la terre sont pour tous). Le verset 118 restreint : les signes sont pour un peuple qui a la certitude — pas pour les ignorants. Le verset 119 montrera l'envoi du Prophete a tous mais la responsabilite de l'ecoute reste individuelle.",
              axe3_sourate: "La racine q-w-m dans le sens de peuple apparait frequemment dans la sourate al-Baqarah. En 2:54, « il dit a son peuple ». En 2:67, « Moussa dit a son peuple ». La sourate adresse ses recits a des peuples specifiques puis generalise. En 2:118, le peuple n'est pas un peuple ethnique mais un peuple de la certitude.",
              axe4_coherence: "La racine q-w-m apparait environ 660 fois dans le Coran. L'expression « li-qawmin yuqinuna » (pour un peuple qui a la certitude) apparait aussi en 2:118, 45:4, 51:20. Le Coran qualifie les recepteurs des signes par leur certitude, pas par leur ethnie ou leur epoque. Le critere est epistemique : la certitude.",
              axe5_frequence: "Pour la mission du khalifa, le peuple de la certitude est le peuple de la mission. Le khalifa doit construire une communaute fondee sur la certitude — pas sur l'ethnie ou la tradition. Le peuple qui a la certitude est celui qui recoit les signes et en tire les consequences pour la justice et la civilisation."
            },
            "Verticalité/Droiture": {
              status: "nul",
              senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger", "se tenir debout"],
              proof_ctx: "Le mot qawmin est un nom designant un peuple/communaute, pas un verbe de station debout. Le contexte est la qualification des recepteurs des signes."
            },
            "Gestion/Administration": {
              status: "nul",
              senses: ["gerer", "administrer", "prendre en charge"],
              proof_ctx: "Le sens de gestion est hors sujet — le mot designe un peuple, pas un acte administratif."
            }
          }
        }
      },
      // yqn pos=24
      {
        word_key: "yqn", position: 24, sense_chosen: "certitude",
        analysis_axes: {
          sense_chosen: "certitude",
          concept_chosen: "Certitude/Conviction",
          concepts: {
            "Certitude/Conviction": {
              status: "retenu",
              senses: ["etre certain", "certitude", "savoir avec certitude", "conviction ferme"],
              proof_ctx: "Le verbe yuqinuna est un inaccompli 3MP de la racine y-q-n. Le Lane's donne : avoir la certitude, savoir avec certitude. L'inaccompli indique un etat continu — ils ont la certitude de facon permanente. Le verbe cloture le verset en qualifiant le peuple pour qui les signes sont exposes : ceux qui ont la certitude. La distinction avec « Mort/Destruction » est evidente : le contexte est epistemique, pas mortuaire.",
              axe1_verset: "Le verbe yuqinuna clot le verset en formant une inclusion avec ya'lamuna du debut. Le verset s'ouvre avec ceux qui ne savent pas et se ferme avec ceux qui ont la certitude. Le champ lexical (savoir, signe, exposer, certitude) montre que la certitude est le contraire de l'ignorance qui ouvrait le verset. Les signes sont la pour quiconque a la certitude.",
              axe2_voisins: "Le verset 117 montrait un fait certain : Dieu est le Createur originel. Le verset 118 montre que cette certitude n'est accessible qu'a ceux qui la veulent. Le verset 119 montrera que le Prophete est envoye avec la verite — la certitude vient de l'accueil de la verite. La certitude n'est pas donnee gratuitement, elle se cultive.",
              axe3_sourate: "La racine y-q-n apparait en 2:4 (ceux qui ont la certitude de l'au-dela) et 2:118. La sourate al-Baqarah place la certitude comme un critere fondamental de la guidance. En 2:2, le Livre est une guidance pour ceux qui ont la certitude (al-muttaqin). La certitude est la porte d'entree de la guidance.",
              axe4_coherence: "La racine y-q-n apparait environ 28 fois dans le Coran. La certitude (yaqin) est le plus haut degre du savoir dans le Coran — au-dessus de la simple connaissance ('ilm). En 102:5-7, « si vous saviez de science certaine » ('ilm al-yaqin). En 2:118, les signes sont pour le peuple qui a la certitude — pas la simple croyance mais la conviction profonde.",
              axe5_frequence: "Pour la mission du khalifa, la certitude est le carburant de la mission. Sans certitude, le khalifa doute et hesite. Avec la certitude, il agit avec determination. Les signes sont clairs pour qui a la certitude — le khalifa doit cultiver cette certitude par la reflexion sur les signes et la meditation sur la creation."
            },
            "Mort/Destruction": {
              status: "nul",
              senses: ["mort"],
              proof_ctx: "Le sens de mort est un sens isole de la racine y-q-n. Le contexte est epistemique — la certitude de la connaissance, pas la mort."
            }
          }
        }
      }
    ]
  },

  119: {
    verse_id: 126,
    analysis_id: 483,
    translation_arab: "Certes nous t'avons envoye avec la verite, annonceur et avertisseur, et tu ne seras pas interroge au sujet des compagnons de la fournaise.",
    full_translation: "Certes, Nous t'avons envoye avec la verite, en annonciateur et avertisseur; et on ne te demandera pas compte des gens de l'Enfer.",
    translation_explanation: `§DEMARCHE§
La particule **inna** (certes) + pronom 1PL **na** (nous) ouvre le verset avec emphase — « certes nous ». Le « nous » est le nous de majeste divine. Le verbe **arsalnaka** est un accompli 1PL forme IV de la racine r-s-l avec pronom suffixe 2MS ka (toi). Le Lane's donne : envoyer, deputer, liberer. La forme IV (af'ala) est causative — arsala c'est faire partir quelqu'un, l'envoyer en mission. L'accompli indique que l'envoi est un fait accompli. Le pronom ka designe le Prophete directement. La preposition **bi** (avec) + **al-haqqi** (la verite, nom defini de la racine h-q-q au genitif). Le Lane's donne : verite, realite, droit, ce qui est vrai. Le Prophete est envoye avec la verite — il ne l'a pas inventee, il la porte. L'article defini marque LA verite — pas une verite parmi d'autres mais la verite absolue. Le mot **bashiran** est un participe actif de la racine b-sh-r a l'accusatif indefini. Le Lane's donne : annonceur de bonnes nouvelles. Le participe actif au singulier masculin indefini qualifie le Prophete — il est un annonceur. L'accusatif marque l'etat (hal) — il est envoye EN TANT QU'annonceur. La conjonction **wa** + le mot **nadhiran** est un participe actif de la racine n-dh-r a l'accusatif indefini. Le Lane's donne : avertisseur, celui qui met en garde. Le Prophete a une double mission : annoncer les bonnes nouvelles et avertir des consequences du mal. La particule de negation **wa-la** (et ne pas) + le verbe **tus'alu** est un inaccompli 2MS passif de la racine s-a-l. Le Lane's donne : demander, questionner, interroger. Le passif indique que le Prophete ne sera pas interroge — il n'est pas responsable du sort des mecreants. La preposition **'an** (au sujet de) + **ashabi** est un nom pluriel de la racine s-h-b au genitif. Le Lane's donne : compagnon, celui qui accompagne. « Les compagnons de la fournaise » — ceux qui accompagnent l'enfer, qui y resident. Le nom **al-jahimi** est un nom defini de la racine j-h-m au genitif. Le Lane's donne : feu ardent, fournaise, enfer. Al-Jahim est l'un des noms de l'enfer — le feu intense.

§JUSTIFICATION§
**nous t'avons envoye** — Le sens retenu est « envoyer ». Le verbe arsalnaka forme IV designe l'envoi en mission. L'alternative « pluie » est ecartee car le contexte est l'envoi prophetique, pas la meteorologie.

**la verite** — Le sens retenu est « verite ». Le mot al-haqqi designe la verite absolue. L'alternative « obligation » est ecartee car le contexte est l'objet de l'envoi (avec la verite), pas un devoir.

**annonceur** — Le sens retenu est « annoncer ». Le mot bashiran designe l'annonceur de bonnes nouvelles. L'alternative « peau » est ecartee car le contexte est la mission prophetique.

**avertisseur** — Le sens retenu est « avertir ». Le mot nadhiran designe celui qui avertit des consequences du mal. L'alternative « voeu » est ecartee car le contexte est l'avertissement, pas le voeu.

**tu ne seras pas interroge** — Le sens retenu est « demander/interroger ». Le verbe tus'alu au passif signifie « tu ne seras pas interroge, on ne te demandera pas ». L'alternative est inexistante — la racine s-a-l n'a qu'un seul concept actif ici.

**les compagnons** — Le sens retenu est « compagnon ». Le mot ashabi designe ceux qui accompagnent, les residents. L'alternative est inexistante pour ce contexte — les compagnons de l'enfer sont ceux qui y resident.

**la fournaise** — Le sens retenu est « feu ardent ». Le mot al-jahimi designe l'enfer, le feu intense. Al-Jahim est un nom propre de l'enfer dans le Coran.

§CRITIQUE§
Les traductions courantes rendent ce verset de facon identique dans le fond. La seule difference notable est que Hamidullah traduit tus'alu par « on ne te demandera pas compte » ce qui ajoute l'idee de « compte » absente du texte arabe. Le verbe tus'alu signifie simplement « tu ne seras pas interroge » — sans mention de comptes a rendre. La nuance est importante : le texte ne dit pas que le Prophete rend des comptes mais qu'il ne sera meme pas questionne au sujet des gens de l'enfer. C'est une decharge plus forte qu'un simple acquittement de comptes. Hamidullah traduit aussi ashabi al-jahim par « les gens de l'Enfer » alors que le texte dit « les compagnons de la fournaise » — notre traduction est plus proche de l'etymologie.`,
    segments: [
      { fr: "certes nous", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e\u0622", is_particle: true, position: 0 },
      { fr: "t'avons envoye", pos: "verbe", phon: "arsalnaka", arabic: "\u0623\u064e\u0631\u0652\u0633\u064e\u0644\u0652\u0646\u064e\u0640\u0670\u0643\u064e", word_key: "rsl", is_particle: false, sense_retenu: "envoyer", position: 1 },
      { fr: "avec", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 2 },
      { fr: "la verite", pos: "nom", phon: "al-haqqi", arabic: "\u0671\u0644\u0652\u062d\u064e\u0642\u0651\u0650", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 3 },
      { fr: "annonceur", pos: "participe_actif", phon: "bashiran", arabic: "\u0628\u064e\u0634\u0650\u064a\u0631\u064b\u0627", word_key: "bshr", is_particle: false, sense_retenu: "annoncer", position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 5 },
      { fr: "avertisseur", pos: "participe_actif", phon: "nadhiran", arabic: "\u0646\u064e\u0630\u0650\u064a\u0631\u064b\u0627", word_key: "ndhr", is_particle: false, sense_retenu: "avertir", position: 6 },
      { fr: "et ne pas", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 7 },
      { fr: "tu seras interroge", pos: "verbe", phon: "tus'alu", arabic: "\u062a\u064f\u0633\u0652\u0640\u064e\u0654\u0644\u064f", word_key: "sal", is_particle: false, sense_retenu: "interroger", position: 8 },
      { fr: "au sujet de", phon: "'an", arabic: "\u0639\u064e\u0646\u0652", is_particle: true, position: 9 },
      { fr: "les compagnons", pos: "nom", phon: "ashabi", arabic: "\u0623\u064e\u0635\u0652\u062d\u064e\u0640\u0670\u0628\u0650", word_key: "shb", is_particle: false, sense_retenu: "compagnon", position: 10 },
      { fr: "de la fournaise", pos: "nom", phon: "al-jahimi", arabic: "\u0671\u0644\u0652\u062c\u064e\u062d\u0650\u064a\u0645\u0650", word_key: "jhm", is_particle: false, sense_retenu: "feu ardent", position: 11 }
    ],
    words: [
      // rsl pos=1
      {
        word_key: "rsl", position: 1, sense_chosen: "envoyer",
        analysis_axes: {
          sense_chosen: "envoyer",
          concept_chosen: "Envoi/Message",
          concepts: {
            "Envoi/Message": {
              status: "retenu",
              senses: ["envoyer", "messager", "message", "liberer"],
              proof_ctx: "Le verbe arsalnaka est un accompli 1PL forme IV de la racine r-s-l avec pronom suffixe 2MS ka. Le Lane's donne : envoyer, deputer, liberer. La forme IV est causative — arsala c'est faire partir, deputer quelqu'un en mission. Le pronom ka designe le Prophete directement — « nous t'avons envoye ». L'envoi est un acte divin accompli — le Prophete est deja en mission. La distinction avec « Eau/Liquide » (nul) est evidente : le contexte est l'envoi prophetique.",
              axe1_verset: "Le verbe arsalnaka ouvre le verset apres la particule emphatique inna. L'emphase marque l'importance de la declaration : certes nous t'avons envoye. Le champ lexical (envoyer, verite, annonceur, avertisseur) definit la mission prophetique. L'envoi est le fondement de tout ce qui suit — c'est parce qu'il est envoye qu'il est annonceur et avertisseur.",
              axe2_voisins: "Le verset 117 montrait le pouvoir creatif de Dieu. Le verset 118 montrait l'ignorance de ceux qui demandent des signes. Le verset 119 repond : Dieu a envoye le Prophete avec la verite — c'est la reponse aux ignorants. L'envoi est la forme que prend la communication divine avec les hommes. Au lieu de leur parler directement (ce qu'ils demandaient en 118), Dieu leur envoie un envoye.",
              axe3_sourate: "La racine r-s-l est structurante dans la sourate al-Baqarah. En 2:87, Dieu a donne a Moussa le Livre et envoye des messagers apres lui. En 2:101, un envoye de Dieu est venu. En 2:119, le Prophete lui-meme est confirme comme envoye. La sourate trace la chaine des envois divins depuis Moussa jusqu'au Prophete.",
              axe4_coherence: "La racine r-s-l apparait environ 513 fois dans le Coran. L'expression « inna arsalnaka bi-l-haqq » apparait en 2:119, 35:24, et des variantes en 4:170, 48:28. Le Coran affirme a plusieurs reprises que le Prophete est envoye avec la verite — c'est une declaration recurrente et fondamentale.",
              axe5_frequence: "Pour la mission du khalifa, l'envoi du Prophete est le canal par lequel la mission est transmise. Le Prophete est l'intermediaire entre Dieu et les hommes — il porte la verite que le khalifa doit mettre en oeuvre. Reconnaitre l'envoi c'est reconnaitre l'autorite de la mission."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est un usage physique de r-s-l. Le contexte est l'envoi prophetique, pas la meteorologie."
            },
            "Sens isolé/Cheveux": {
              status: "nul",
              senses: ["cheveux laches"],
              proof_ctx: "Le sens de cheveux laches est un sens isole de la racine. Le contexte est l'envoi du Prophete."
            }
          }
        }
      },
      // hqq pos=3
      {
        word_key: "hqq", position: 3, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["etre vrai", "verite", "realite", "droit"],
              proof_ctx: "Le mot al-haqqi est un nom masculin singulier defini de la racine h-q-q au genitif avec preposition bi. Le Lane's donne : verite, realite, ce qui est vrai. Bi-l-haqqi signifie « avec la verite » — le Prophete porte la verite avec lui, elle est son compagnon de mission. L'article defini marque l'unicite de cette verite — pas une verite parmi d'autres. La distinction avec « Obligation/Necessite » est claire : le contexte est l'objet de l'envoi (avec la verite), pas un devoir impose.",
              axe1_verset: "Le mot al-haqqi qualifie l'objet de l'envoi prophetique — le Prophete est envoye avec la verite. Le champ lexical (envoyer, verite, annonceur, avertisseur) montre que la verite est le contenu de la mission. L'annonce et l'avertissement portent sur la verite — l'annonceur annonce les bonnes nouvelles de la verite, l'avertisseur avertit des consequences du rejet de la verite.",
              axe2_voisins: "Le verset 117 montrait la verite de la creation — Dieu cree par Sa parole. Le verset 118 montrait la demande de signes par les ignorants. Le verset 119 repond que le Prophete est envoye avec la verite — la verite est deja la, portee par l'envoye. Les ignorants du verset 118 demandent des signes alors que la verite est devant eux.",
              axe3_sourate: "La racine h-q-q apparait dans la sourate al-Baqarah en 2:26 (c'est la verite de leur Seigneur), 2:42 (ne melangez pas la verite au mensonge), 2:91 (il confirme ce qui est avec eux en verite). La sourate insiste sur la verite comme critere ultime de jugement.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. L'expression « bi-l-haqq » (avec la verite) est un qualificatif recurrent de l'envoi prophetique et de la revelation. En 2:119 et 35:24, le Prophete est envoye avec la verite. En 17:105 et 25:32, le Coran est descendu avec la verite. Le Coran lie systematiquement la verite a l'envoi divin.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le fondement de la mission de justice. Le khalifa est charge de faire prevaloir la verite sur la terre. La verite n'est pas relative — elle est definie par Dieu et portee par Son envoye. Le khalifa doit etre au service de cette verite, pas de ses propres opinions."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "meriter", "etre obligatoire"],
              proof_ctx: "Le sens d'obligation est hors sujet — al-haqqi ici est l'objet de l'envoi prophetique (avec la verite), pas un devoir impose."
            },
            "Sens isolé/Se": {
              status: "nul",
              senses: ["se realiser"],
              proof_ctx: "Le sens de « se realiser » est un sens isole. Le contexte est la verite portee par l'envoye."
            },
            "Sens isolé/Vérifier": {
              status: "nul",
              senses: ["verifier"],
              proof_ctx: "Le sens de verifier est un sens isole. Le contexte est la verite comme objet de l'envoi."
            }
          }
        }
      },
      // bshr pos=4
      {
        word_key: "bshr", position: 4, sense_chosen: "annoncer",
        analysis_axes: {
          sense_chosen: "annoncer",
          concept_chosen: "Annonce/Réjouissance",
          concepts: {
            "Annonce/Réjouissance": {
              status: "retenu",
              senses: ["annoncer une bonne nouvelle", "rejouir", "beau visage"],
              proof_ctx: "Le mot bashiran est un participe actif de la racine b-sh-r a l'accusatif indefini. Le Lane's donne : annonceur de bonnes nouvelles, celui dont le visage rayonne de joie. Le participe actif indique que l'annonce est une activite continue du Prophete — il est annonceur de maniere permanente. L'accusatif marque l'etat (hal) : il est envoye en tant qu'annonceur. La distinction avec « Surface/Contact » (peau) est claire : le contexte est la mission prophetique, pas l'anatomie. La distinction avec « Corps/Anatomie » (etre humain) est aussi claire.",
              axe1_verset: "Le mot bashiran qualifie la premiere fonction du Prophete — il est annonceur de bonnes nouvelles. Le champ lexical (envoyer, verite, annonceur, avertisseur) montre une mission double : bonnes nouvelles et avertissement. L'annonce et l'avertissement couvrent les deux aspects de la verite — ce qui est bon pour les croyants et ce qui est mauvais pour les negateurs.",
              axe2_voisins: "Le verset 117 montrait la puissance creatrice de Dieu. Le verset 118 montrait l'ignorance de ceux qui demandent des signes. Le verset 119 repond en precisant la mission du Prophete : il est annonceur et avertisseur. L'annonce est la bonne nouvelle pour ceux qui ont la certitude (les recepteurs des signes du verset 118).",
              axe3_sourate: "La racine b-sh-r apparait dans la sourate al-Baqarah en 2:25 (annonce a ceux qui croient) et 2:97 (Djibril qui fait descendre la bonne nouvelle). En 2:119, le Prophete est qualifie d'annonceur — il porte la bonne nouvelle comme partie integrante de sa mission. La sourate presente la bonne nouvelle comme un element fondamental de la guidance.",
              axe4_coherence: "La racine b-sh-r apparait environ 122 fois dans le Coran. Le couple bashir-nadhir (annonceur-avertisseur) est un binome recurrent qui definit la mission prophetique. En 2:119, 5:19, 7:188, 11:2, 25:56, 33:45, 34:28, 35:24, 48:8. Le Coran definit systematiquement les prophetes par cette double fonction — ils portent la bonne nouvelle et l'avertissement.",
              axe5_frequence: "Pour la mission du khalifa, l'annonce est un outil de la mission. Le khalifa doit porter la bonne nouvelle de la verite — la justice et la civilisation sont possibles, la mission est realisable. L'annonce motive et encourage ceux qui ont la certitude a poursuivre leur effort."
            },
            "Surface/Contact": {
              status: "nul",
              senses: ["peau", "contact peau a peau", "peler"],
              proof_ctx: "Le sens de peau/contact est un sens physique de la racine b-sh-r. Le contexte est la mission prophetique d'annonce, pas l'anatomie."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["etre humain"],
              proof_ctx: "Le sens d'etre humain est un sens derive de b-sh-r (bashar). Ici bashiran est le participe actif au sens d'annonceur."
            }
          }
        }
      },
      // ndhr pos=6
      {
        word_key: "ndhr", position: 6, sense_chosen: "avertir",
        analysis_axes: {
          sense_chosen: "avertir",
          concept_chosen: "Avertissement/Mise en garde",
          concepts: {
            "Avertissement/Mise en garde": {
              status: "retenu",
              senses: ["avertir", "mettre en garde", "avertisseur"],
              proof_ctx: "Le mot nadhiran est un participe actif de la racine n-dh-r a l'accusatif indefini. Le Lane's donne : avertisseur, celui qui met en garde contre un danger. Le participe actif indique que l'avertissement est une fonction continue du Prophete. L'accusatif marque l'etat (hal) : il est envoye en tant qu'avertisseur. La distinction avec « Voeu/Consecration » est claire : nadhir ici est l'avertisseur, pas celui qui fait un voeu.",
              axe1_verset: "Le mot nadhiran qualifie la seconde fonction du Prophete — il est avertisseur. Le champ lexical (annonceur, avertisseur, fournaise, compagnons) montre que l'avertissement porte sur les consequences du refus de la verite. La mention de la fournaise a la fin du verset illustre l'objet de l'avertissement — ceux qui refusent finissent dans la fournaise.",
              axe2_voisins: "Le verset 118 montrait l'ignorance de ceux qui demandent des signes. Le verset 119 qualifie le Prophete d'avertisseur — il avertit ceux qui ignorent des consequences de leur ignorance. Le verset 120 (suivant) montrera que les juifs et les chretiens ne seront pas satisfaits — l'avertissement est necessaire face a cette obstination.",
              axe3_sourate: "La racine n-dh-r apparait dans la sourate al-Baqarah en 2:6 (les avertir ou ne pas les avertir, c'est egal pour eux) et 2:119. La sourate montre que l'avertissement est necessaire meme si certains ne l'ecoutent pas. En 2:119, le Prophete est qualifie d'avertisseur — c'est une partie integrante de sa mission.",
              axe4_coherence: "La racine n-dh-r apparait environ 130 fois dans le Coran. Le nadhir (avertisseur) est un titre prophetique fondamental. En 35:24, « il n'y a pas de communaute dans laquelle un avertisseur ne soit passe ». Le Coran montre que l'avertissement est une constante de la relation divine avec l'humanite — chaque peuple recoit son avertisseur.",
              axe5_frequence: "Pour la mission du khalifa, l'avertissement est un outil de la mission. Le khalifa doit avertir des consequences de l'injustice et de la corruption — la mission n'est pas seulement d'annoncer le bien mais aussi de mettre en garde contre le mal. L'avertissement est un acte de misericorde, pas de menace."
            },
            "Vœu/Consécration": {
              status: "nul",
              senses: ["vouer", "voeu"],
              proof_ctx: "Le sens de voeu est un autre sens de la racine n-dh-r. Le contexte est l'avertissement prophetique, pas un engagement de voeu."
            }
          }
        }
      },
      // sal pos=8
      {
        word_key: "sal", position: 8, sense_chosen: "interroger",
        analysis_axes: {
          sense_chosen: "interroger",
          concept_chosen: "Requête/Interrogation",
          concepts: {
            "Requête/Interrogation": {
              status: "retenu",
              senses: ["demander", "questionner", "interroger"],
              proof_ctx: "Le verbe tus'alu est un inaccompli 2MS passif de la racine s-a-l. Le Lane's donne : demander, questionner, interroger. Le passif indique que le Prophete ne sera pas interroge — il ne sera pas tenu pour responsable. La negation la + le passif creent une decharge : tu ne seras pas interroge au sujet des compagnons de la fournaise. Le verbe n'a qu'un seul concept actif, ce qui rend le choix immediat.",
              axe1_verset: "Le verbe tus'alu decharge le Prophete de la responsabilite du sort des incredules. Le champ lexical (envoyer, verite, annonceur, avertisseur, interroger, compagnons, fournaise) montre que le Prophete a rempli sa mission — il a annonce et averti. Le resultat ne lui appartient pas. Le verset separe la mission (annoncer et avertir) de la responsabilite du resultat (le sort des compagnons de la fournaise).",
              axe2_voisins: "Le verset 118 montrait des ignorants qui demandent des signes. Le verset 119 decharge le Prophete de leur sort — il n'est pas responsable de leur refus. Le verset 120 montrera que les juifs et les chretiens ne seront satisfaits que si le Prophete suit leur direction — mais il n'a pas a les satisfaire, seulement a transmettre.",
              axe3_sourate: "La racine s-a-l apparait dans la sourate al-Baqarah en 2:108 (ne questionnez pas votre envoye), 2:186 (quand Mes serviteurs Me demandent), 2:189 (ils te demandent au sujet des croissants de lune). La sourate montre que le questionnement est une realite humaine mais que le Prophete n'est pas tenu de repondre de ceux qui refusent.",
              axe4_coherence: "La racine s-a-l apparait environ 129 fois dans le Coran. Le schema « tu ne seras pas interroge au sujet de... » decharge le Prophete de la responsabilite du choix des autres. En 2:119 et dans les versets similaires, le Coran affirme que chacun est responsable de ses propres choix. Le Prophete transmet, il ne force pas.",
              axe5_frequence: "Pour la mission du khalifa, la decharge de responsabilite est importante. Le khalifa est charge de transmettre la verite et d'avertir — mais il n'est pas responsable de ceux qui refusent. La mission est la transmission, pas la coercition. Le khalifa doit faire son travail sans se sentir coupable du refus des autres."
            }
          }
        }
      },
      // shb pos=10
      {
        word_key: "shb", position: 10, sense_chosen: "compagnon",
        analysis_axes: {
          sense_chosen: "compagnon",
          concept_chosen: "Compagnonnage/Association",
          concepts: {
            "Compagnonnage/Association": {
              status: "retenu",
              senses: ["accompagner", "compagnon", "associe"],
              proof_ctx: "Le mot ashabi est le pluriel de sahib (racine s-h-b) au genitif en idafa avec al-jahimi. Le Lane's donne : compagnon, celui qui accompagne, associe. Ashab al-jahim signifie « les compagnons de la fournaise » — ceux qui resident dans la fournaise, qui l'accompagnent de facon permanente. Le mot sahib implique la duree — le compagnon est celui qui reste avec quelque chose. Les compagnons de la fournaise sont ceux dont la fournaise est la demeure permanente.",
              axe1_verset: "Le mot ashabi precise l'objet de la decharge du Prophete — il ne sera pas interroge au sujet des compagnons de la fournaise. Le champ lexical (avertisseur, interroger, compagnons, fournaise) montre que l'avertissement concernait ce sort — ceux qui ne l'ecoutent pas deviennent compagnons de la fournaise. Le mot « compagnon » implique que ce sort n'est pas accidentel — c'est un compagnonnage, une relation permanente.",
              axe2_voisins: "Le verset 118 montrait ceux qui demandent des signes par pretexte. Le verset 119 montre leur destination possible — la fournaise — et decharge le Prophete de cette responsabilite. Le lien est clair : ceux qui demandent des signes sans chercher la certitude risquent de devenir compagnons de la fournaise.",
              axe3_sourate: "La racine s-h-b apparait dans la sourate al-Baqarah en 2:39 (ceux-la seront les compagnons du feu), 2:81 (les compagnons du feu), 2:82 (les compagnons du paradis). La sourate utilise le mot « compagnon » pour designer les residents permanents du feu ou du paradis. En 2:119, les compagnons de la fournaise sont les residents de l'enfer.",
              axe4_coherence: "La racine s-h-b apparait environ 97 fois dans le Coran. L'expression « ashab al-jahim » apparait en 2:119, 5:10, 5:86, 22:51, 57:19. L'expression « ashab al-nar » (compagnons du feu) est plus frequente. Le Coran utilise le mot « compagnon » pour marquer la permanence de la relation avec la destination finale — ce n'est pas un sejour temporaire.",
              axe5_frequence: "Pour la mission du khalifa, le concept de compagnonnage avec la fournaise est un avertissement ultime. Le khalifa doit comprendre que les choix humains determinent le compagnonnage final — avec le paradis ou avec la fournaise. La mission de justice et de civilisation est un moyen d'eviter ce compagnonnage destructeur."
            }
          }
        }
      },
      // jhm pos=11
      {
        word_key: "jhm", position: 11, sense_chosen: "feu ardent",
        analysis_axes: {
          sense_chosen: "feu ardent",
          concept_chosen: "Enfer/Châtiment",
          concepts: {
            "Enfer/Châtiment": {
              status: "retenu",
              senses: ["Gehenne", "feu ardent", "enfer"],
              proof_ctx: "Le mot al-jahimi est un nom masculin singulier defini de la racine j-h-m au genitif. Le Lane's donne : feu ardent, fournaise intense. Al-Jahim est l'un des noms de l'enfer dans le Coran — il designe le feu intense et brulant. L'article defini marque un lieu connu et defini — LA fournaise. Le genitif est du a l'idafa avec ashabi. La racine n'a qu'un seul concept actif.",
              axe1_verset: "Le mot al-jahimi clot le verset en nommant la destination des incredules. Le champ lexical (envoyer, verite, annonceur, avertisseur, interroger, compagnons, fournaise) montre que la fournaise est l'aboutissement de ce que l'avertisseur annonce. Le verset commence par l'envoi avec la verite et finit par la fournaise — le rejet de la verite mene a la fournaise.",
              axe2_voisins: "Le verset 117 montrait le pouvoir creatif de Dieu (Sois et c'est). Le verset 118 montrait l'ignorance de ceux qui demandent des signes. Le verset 119 conclut avec la fournaise comme destination des obstines. La triade est : pouvoir creatif → ignorance humaine → consequence (la fournaise). Le passage de la creation a la fournaise montre le gouffre entre le don divin et le refus humain.",
              axe3_sourate: "La racine j-h-m apparait dans la sourate al-Baqarah uniquement en 2:119. Mais la sourate mentionne le feu (nar) a de nombreuses reprises — en 2:24, 2:39, 2:81, 2:126, 2:167, 2:174, 2:175, 2:201, 2:206, 2:217, 2:221, 2:257, 2:275. La fournaise (al-jahim) est un nom specifique de l'enfer qui souligne l'intensite du feu.",
              axe4_coherence: "La racine j-h-m apparait environ 26 fois dans le Coran. Al-Jahim est un des sept noms de l'enfer dans la tradition coranique. En 2:119, 5:10, 5:86, 22:51, 57:19, l'expression « ashab al-jahim » designe les residents de la fournaise. Le Coran utilise differents noms pour l'enfer — jahannam, nar, jahim, sa'ir, laza, saqar, hutama — chacun soulignant un aspect different du chatiment.",
              axe5_frequence: "Pour la mission du khalifa, la fournaise est le rappel ultime des consequences de l'echec de la mission. La mission de justice et de civilisation vise a empecher la corruption sur terre — l'echec mene a la fournaise. Le khalifa doit prendre au serieux l'avertissement et travailler a ce que le plus grand nombre echappe a ce sort."
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

  const verseIds = [124, 125, 126];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 117, 118, 119 ===\n');
  for (const v of [117, 118, 119]) {
    await processVerse(v);
  }
  await syncWordMeanings();
  console.log('\n=== PIPELINE V117-119 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
