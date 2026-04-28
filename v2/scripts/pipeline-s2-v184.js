const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 184
// verse_id=191, analysis_id=551
// "Des jours denombrables. Quiconque parmi vous est malade
//  ou en deplacement, alors un nombre egal d'autres jours.
//  Et ceux qui en ont la capacite doivent une compensation :
//  nourrir un demuni. Quiconque fait volontairement du bien,
//  c'est meilleur pour lui. Et que vous jeuniez est meilleur
//  pour vous, si vous saviez."
// Jeune, jours determines, compensation, capacite
// =====================================================

const verseData = {
  184: {
    verse_id: 191,
    analysis_id: 551,
    translation_arab: "Des jours denombrables. Quiconque parmi vous est malade ou en deplacement, alors un nombre egal d'autres jours. Et ceux qui en ont la capacite doivent une compensation : nourrir un demuni. Quiconque fait volontairement du bien, c'est meilleur pour lui. Et que vous jeuniez est meilleur pour vous, si vous saviez.",
    full_translation: "Pendant un nombre determine de jours. Quiconque d'entre vous est malade ou en voyage, devra jeuner un nombre egal d'autres jours. Mais pour ceux qui ne pourraient le supporter, il y a une compensation : nourrir un pauvre. Et quiconque fait plus de son propre gre, c'est pour lui-meme. Mais il est mieux pour vous de jeuner, si vous saviez !",
    translation_explanation: `§DEMARCHE§
Le verset ouvre la section sur la duree et les modalites du jeune prescrit en 2:183. Le nom **ayyaman** est un accusatif pluriel indefini de la racine y-w-m. Le Lane's donne : jour, journee, periode de temps, epoque. Le pluriel est indefini et a l'accusatif de duree — des jours, sans specification du nombre exact. Le mot est un complement circonstanciel de temps qui repond a la question « combien de temps ? » — le jeune n'est pas perpetuel mais limite a des jours determines. Le nom **ma'dudatin** est un participe passif feminin pluriel de la racine '-d-d. Le Lane's donne : compter, denomber, calculer, enumerer. Le participe passif signifie « comptees, denombrees » — ces jours sont en nombre defini, ils peuvent etre comptes sur les doigts. La construction « ayyaman ma'dudatin » (des jours denombrables) est un complement de 2:183 (kutiba alaykum as-siyam) — le jeune prescrit dure un nombre determine et limite de jours. Le verbe **kana** est un accompli 3MS de la racine k-w-n. Le Lane's donne : etre, exister, devenir, se trouver dans un etat. Le verbe kana ouvre une proposition conditionnelle (man kana = quiconque est/se trouve) — la condition porte sur l'etat de la personne. Le mot **maridan** est un nom/adjectif accusatif de la racine m-r-d. Le Lane's donne : etre malade, souffrir d'une maladie, etre faible, etre affecte. Le malade est celui dont le corps est affaibli par une maladie — l'adjectif est indefini (maridan = malade, pas al-marid = LE malade) car la maladie peut toucher n'importe qui. Le nom **safarin** est un nom genitif masculin de la racine s-f-r (sin-fa-ra). Le Lane's donne pour cette racine : voyager, se deplacer, parcourir une distance, partir en expedition. Le safar est le voyage, le deplacement d'un lieu a un autre. Il ne faut pas confondre avec la racine sad-fa-ra qui signifie jaunir. Le voyage est une condition d'exemption du jeune parce qu'il impose des difficultes physiques — le voyageur est en mouvement, il n'a pas les conditions de repos necessaires au jeune. Le nom **'iddatun** est un nom feminin de la racine '-d-d (meme racine que ma'dudat). Le Lane's donne : nombre, quantite denombree, compte. L'expression « fa-'iddatun min ayyamin ukhara » signifie « alors un nombre equivalent d'autres jours » — le malade ou le voyageur doit rattraper les jours manques en jeunant un nombre egal de jours apres le Ramadan. Le nom **ayyamin** est un pluriel genitif de la racine y-w-m — les jours de rattrapage. Le nom **ukhara** est un adjectif feminin pluriel de la racine a-kh-r. Le Lane's donne : autre, different, posterieur, qui vient apres. Le mot qualifie les jours — d'autres jours, posterieurs aux jours du Ramadan. Le verbe **yutiqunahu** est un inaccompli 3MP forme IV de la racine t-w-q. Le Lane's donne : pouvoir supporter, endurer, avoir la capacite de, tolerer avec difficulte. La forme IV (ataaqa) indique l'effort de supporter quelque chose. La construction « alladhina yutiqunahu » designe ceux qui ont la capacite de jeuner mais pour qui cela represente un effort considerable — les personnes agees, les malades chroniques, les femmes enceintes. Le nom **fidyatun** est un nom feminin de la racine f-d-y. Le Lane's donne : rancon, compensation, rachat, ce qu'on donne en echange pour se liberer d'une obligation. La fidya est un substitut — au lieu de jeuner, on donne une compensation. Le rachat est un acte de substitution juridique : l'obligation du jeune est remplacee par l'obligation de nourrir. Le nom **ta'amu** est un nom masculin de la racine t-'-m. Le Lane's donne : nourrir, alimenter, gouter, nourriture, aliment. Le ta'am est la nourriture que l'on donne a manger — ici c'est la forme concrete de la fidya, la compensation se materialise par le don de nourriture. Le nom **miskinim** est un nom masculin de la racine s-k-n. Le Lane's donne : pauvre, demuni, indigent, celui qui est immobile faute de moyens. Le miskin est celui dont la pauvrete l'a rendu immobile — il ne peut pas subvenir a ses besoins et depend de l'aide des autres. La racine s-k-n porte l'idee de quietude et d'immobilite — le miskin est « immobilise » par sa pauvrete. Le verbe **tatawwa'a** est un accompli 3MS forme V de la racine t-w-'. Le Lane's donne : obeir volontairement, faire du bien spontanement, se soumettre de bon gre. La forme V (tafa''ala) indique une action reflexive et volontaire — l'agent se porte lui-meme vers le bien sans y etre contraint. Le tatawwu' est l'effort volontaire au-dela de l'obligation — faire plus que ce qui est prescrit. Le nom **khayran** est un nom accusatif de la racine kh-y-r. Le Lane's donne : bien, bonte, excellence, ce qui est bon et souhaitable. Le khayr est l'objet du tatawwu' — le bien que l'on fait volontairement. Le mot apparait trois fois dans le verset (khayran accusatif, khayr nominatif deux fois) avec des fonctions differentes : le bien fait volontairement, le meilleur pour lui, le meilleur pour vous. Le verbe **tasumu** est un inaccompli 2MP de la racine s-w-m (sad-waw-mim). Le Lane's donne : jeuner, s'abstenir, cesser de manger et de boire. Le sawm est l'abstention volontaire de nourriture et de boisson pendant un temps determine. Il ne faut pas confondre avec la racine sin-waw-mim qui porte le sens d'affliction. Le jeune est presente comme « meilleur pour vous » (khayrun lakum) — il est superieur a la compensation, meme si la compensation est permise. Le verbe **kuntum** est un accompli 2MP de la racine k-w-n — vous etiez, vous etes dans l'etat de. Le verbe **ta'lamuna** est un inaccompli 2MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, apprendre, avoir connaissance de. L'expression « in kuntum ta'lamuna » (si vous saviez) est une formule coranique qui interpelle les destinataires sur leur capacite de discernement. Le conditionnel « si » ne met pas en doute leur savoir mais les invite a l'activer — c'est un appel a la reflexion, pas un constat d'ignorance.

§JUSTIFICATION§
**denombrables** — Le sens retenu est « denombre/compte ». Le participe passif ma'dudat indique que les jours sont en nombre defini et comptable. L'alternative « quelques » est ecartee car le mot ne signifie pas « peu » mais « denombrables » — le nombre est determine, pas necessairement petit.

**est** — Le sens retenu est « etre/se trouver ». Le verbe kana ouvre une condition sur l'etat du croyant. L'alternative « devenir » est ecartee car la condition porte sur un etat existant (malade/voyageur), pas sur une transformation.

**malade** — Le sens retenu est « maladie/faiblesse ». Le mot maridan designe un etat d'affaiblissement physique. L'alternative « rebellion » (sens atteste dans le Lane's pour la racine m-r-d dans le sens de s'ecarter de l'obeissance) est ecartee car le contexte est medical — le malade est exempt de jeune pour raison de sante.

**deplacement** — Le sens retenu est « voyage/deplacement ». La racine s-f-r (sin-fa-ra) designe le voyage et le parcours d'une distance. L'alternative « devoilement » (sens atteste : devoiler, mettre a nu) est ecartee car le contexte est l'exemption du jeune — le voyage impose des difficultes physiques incompatibles avec le jeune.

**nombre** — Le sens retenu est « nombre/denombrement ». Le mot 'iddatun est de la meme racine que ma'dudat et designe un nombre equivalent. L'alternative n'est pas pertinente — le sens est univoque dans cette construction.

**jours** — Le sens retenu est « temps/periode ». Le mot ayyamin designe les jours concrets de rattrapage. Le sens est univoque dans ce contexte.

**autres** — Le sens retenu est « posteriorite/alterite ». Le mot ukhara designe des jours differents et posterieurs. L'alternative n'est pas pertinente — le contexte est temporel et le sens est clair.

**ont la capacite** — Le sens retenu est « capacite/endurance ». Le verbe yutiqunahu (forme IV de t-w-q) designe la capacite de supporter avec effort. L'alternative « encerclement » (sens atteste : entourer, enserrer) est ecartee car le contexte est l'effort physique du jeune — la question est de savoir si la personne peut supporter le jeune, pas si elle est entouree.

**compensation** — Le sens retenu est « rancon/compensation ». Le mot fidyatun designe un substitut donne en echange d'une obligation non remplie. L'alternative « sacrifice » au sens rituel est ecartee car il s'agit d'une compensation juridique, pas d'un sacrifice cultuel.

**nourrir** — Le sens retenu est « gustation/nourriture ». Le mot ta'amu designe l'acte de nourrir, de donner a manger. L'alternative « gouter » au sens figuratif est ecartee car le contexte est concret — la compensation est un don de nourriture.

**demuni** — Le sens retenu est « pauvrete/indigence ». Le mot miskinim designe celui dont la pauvrete l'a immobilise. L'alternative « immobilite/quietude » (sens premier de s-k-n) est ecartee car le contexte est social — il s'agit du beneficiaire de la compensation, un pauvre.

**fait volontairement** — Le sens retenu est « obeissance/soumission volontaire ». Le verbe tatawwa'a (forme V de t-w-') designe l'action volontaire et spontanee de faire le bien. L'alternative « soumission forcee » est ecartee car la forme V marque precisement le caractere volontaire et reflexif de l'action.

**bien** — Le sens retenu est « bien/excellence ». Le mot khayran designe le bien fait volontairement. Le sens est univoque.

**meilleur** — Le sens retenu est « bien/excellence ». Le mot khayr au nominatif est utilise comme comparatif (meilleur). Le sens est le meme que khayran mais la fonction grammaticale change.

**jeuniez** — Le sens retenu est « abstinence/jeune ». Le verbe tasumu (racine s-w-m avec sad) designe l'abstention de nourriture et de boisson. L'alternative « affliction » (racine s-w-m avec sin) est ecartee car le contexte est explicitement le jeune prescrit en 2:183.

**meilleur** — Le sens retenu est « bien/excellence ». Troisieme occurrence de khayr dans le verset — ici il qualifie le jeune comme superieur a la compensation.

**etes** — Le sens retenu est « etre/existence ». Le verbe kuntum ouvre la proposition conditionnelle finale. Le sens est univoque.

**saviez** — Le sens retenu est « savoir/connaissance ». Le verbe ta'lamuna designe la connaissance et le discernement. L'alternative n'est pas pertinente — le sens est univoque dans cette formule coranique.

§CRITIQUE§
Les traductions courantes rendent « ayyaman ma'dudatin » par « un nombre determine de jours » ou « des jours comptes ». Notre traduction garde « des jours denombrables » pour rester fidele au participe passif qui insiste sur le caractere comptable et limite des jours. Le point le plus debattu est le mot « yutiqunahu » — Hamidullah traduit « ceux qui ne pourraient le supporter » (avec negation), tandis que le texte arabe dit « ceux qui le supportent » (sans negation). Notre traduction suit le texte arabe litteral : « ceux qui en ont la capacite » doivent une compensation, c'est-a-dire que la fidya concerne ceux qui CAN jeuner mais choisissent la compensation — pas ceux qui ne peuvent pas (ceux-la sont couverts par la clause du malade). Cette lecture est celle de Ibn Abbas et de plusieurs exegetes classiques. La triple repetition de « khayr » dans le verset cree une gradation : faire le bien volontairement est bon, mais jeuner est encore meilleur — le verset pousse les croyants vers le jeune tout en laissant ouverte la porte de la compensation.`,
    segments: [
      { fr: "des jours", pos: "nom", phon: "ayyaman", arabic: "\u0623\u064e\u064a\u0651\u064e\u0627\u0645\u064b\u0627", is_particle: true, position: 0 },
      { fr: "denombrables", pos: "nom", phon: "ma'dudatin", arabic: "\u0645\u0651\u064e\u0639\u0652\u062f\u064f\u0648\u062f\u064e\u0640\u0670\u062a\u064d", word_key: "edd", is_particle: false, sense_retenu: "denombrement", position: 1 },
      { fr: "quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646", is_particle: true, position: 2 },
      { fr: "est", pos: "verbe", phon: "kana", arabic: "\u0643\u064e\u0627\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 3 },
      { fr: "parmi vous", phon: "minkum", arabic: "\u0645\u0650\u0646\u0643\u064f\u0645", is_particle: true, position: 4 },
      { fr: "malade", pos: "nom", phon: "maridan", arabic: "\u0645\u0651\u064e\u0631\u0650\u064a\u0636\u064b\u0627", word_key: "mrd", is_particle: false, sense_retenu: "maladie", position: 5 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064e\u0648\u0652", is_particle: true, position: 6 },
      { fr: "en", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649\u0670", is_particle: true, position: 7 },
      { fr: "deplacement", pos: "nom", phon: "safarin", arabic: "\u0633\u064e\u0641\u064e\u0631\u064d", word_key: "sfr", is_particle: false, sense_retenu: "voyage", position: 8 },
      { fr: "alors un nombre", pos: "nom", phon: "fa-'iddatun", arabic: "\u0641\u064e\u0639\u0650\u062f\u0651\u064e\u0629\u064c", word_key: "edd", is_particle: false, sense_retenu: "denombrement", position: 9 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 10 },
      { fr: "jours", pos: "nom", phon: "ayyamin", arabic: "\u0623\u064e\u064a\u0651\u064e\u0627\u0645\u064d", word_key: "ywm", is_particle: false, sense_retenu: "temps", position: 11 },
      { fr: "autres", pos: "adjectif", phon: "ukhara", arabic: "\u0623\u064f\u062e\u064e\u0631\u064e", word_key: "axr", is_particle: false, sense_retenu: "posteriorite", position: 12 },
      { fr: "et sur", phon: "wa-'ala", arabic: "\u0648\u064e\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 13 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 14 },
      { fr: "en ont la capacite", pos: "verbe", phon: "yutiqunahu", arabic: "\u064a\u064f\u0637\u0650\u064a\u0642\u064f\u0648\u0646\u064e\u0647\u064f", word_key: "twq", is_particle: false, sense_retenu: "capacite", position: 15 },
      { fr: "une compensation", pos: "nom", phon: "fidyatun", arabic: "\u0641\u0650\u062f\u0652\u064a\u064e\u0629\u064c", word_key: "fdy", is_particle: false, sense_retenu: "compensation", position: 16 },
      { fr: "nourrir", pos: "nom", phon: "ta'amu", arabic: "\u0637\u064e\u0639\u064e\u0627\u0645\u064f", word_key: "tem", is_particle: false, sense_retenu: "nourriture", position: 17 },
      { fr: "un demuni", pos: "nom", phon: "miskinim", arabic: "\u0645\u0650\u0633\u0652\u0643\u0650\u064a\u0646\u064d", word_key: "skn", is_particle: false, sense_retenu: "demuni", position: 18 },
      { fr: "quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646", is_particle: true, position: 19 },
      { fr: "fait volontairement", pos: "verbe", phon: "tatawwa'a", arabic: "\u062a\u064e\u0637\u064e\u0648\u0651\u064e\u0639\u064e", word_key: "twe", is_particle: false, sense_retenu: "volontariat", position: 20 },
      { fr: "du bien", pos: "nom", phon: "khayran", arabic: "\u062e\u064e\u064a\u0652\u0631\u064b\u0627", word_key: "khyr", is_particle: false, sense_retenu: "bien", position: 21 },
      { fr: "c'est", phon: "fa-huwa", arabic: "\u0641\u064e\u0647\u064f\u0648\u064e", is_particle: true, position: 22 },
      { fr: "meilleur", pos: "nom", phon: "khayrun", arabic: "\u062e\u064e\u064a\u0652\u0631\u064c", word_key: "khyr", is_particle: false, sense_retenu: "bien", position: 23 },
      { fr: "pour lui", phon: "lahu", arabic: "\u0644\u0651\u064e\u0647\u064f", is_particle: true, position: 24 },
      { fr: "et que", phon: "wa-an", arabic: "\u0648\u064e\u0623\u064e\u0646", is_particle: true, position: 25 },
      { fr: "vous jeuniez", pos: "verbe", phon: "tasumu", arabic: "\u062a\u064e\u0635\u064f\u0648\u0645\u064f\u0648\u0627\u06df", word_key: "swm", is_particle: false, sense_retenu: "jeune", position: 26 },
      { fr: "est meilleur", pos: "nom", phon: "khayrun", arabic: "\u062e\u064e\u064a\u0652\u0631\u064c", word_key: "khyr", is_particle: false, sense_retenu: "bien", position: 27 },
      { fr: "pour vous", phon: "lakum", arabic: "\u0644\u0651\u064e\u0643\u064f\u0645\u0652", is_particle: true, position: 28 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 29 },
      { fr: "vous", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064f\u0646\u062a\u064f\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 30 },
      { fr: "saviez", pos: "verbe", phon: "ta'lamuna", arabic: "\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 31 }
    ],
    words: [
      // edd pos=2
      {
        word_key: "edd", position: 2, sense_chosen: "denombrement",
        analysis_axes: {
          sense_chosen: "denombrement",
          concept_chosen: "D\u00e9nombrement/Calcul",
          concepts: {
            "D\u00e9nombrement/Calcul": {
              status: "retenu",
              senses: ["d\u00e9nombrer", "compter", "calculer", "\u00e9num\u00e9rer", "pr\u00e9parer un nombre"],
              proof_ctx: "Le nom ma'dudatin est un participe passif feminin pluriel de la racine '-d-d. Le Lane's donne : compter, denombrer, calculer, enumerer, preparer un nombre determine. Le participe passif indique que les jours sont l'objet du denombrement — ils sont comptes, determines, finis. Le denombrement est un acte intellectuel qui consiste a attribuer un nombre a une quantite — ici les jours du jeune sont determines, comptables, limites. La construction « ayyaman ma'dudatin » est une qualification restrictive : ces jours ne sont pas infinis, ils sont en nombre defini et comptable. Le mot porte une connotation de limitation et de facilitation — ce qui est denombrable est fini et donc supportable.",
              axe1_verset: "Le mot ma'dudatin ouvre le verset en qualifiant les jours du jeune prescrit en 2:183. Le champ lexical du verset (jours, malade, voyage, nombre, autres, capacite, compensation, jeune) tourne autour de la gestion temporelle de l'obligation. Les jours sont denombrables — c'est la premiere information que Dieu donne apres avoir prescrit le jeune. Cette qualification est un acte de misericorde legislative : le jeune n'est pas infini mais limite a un nombre defini. Le participe passif (ma'dudat = comptees) implique que c'est Dieu qui a determine le nombre — les hommes ne fixent pas la duree, ils la recoivent.",
              axe2_voisins: "Le verset 2:183 venait de prescrire le jeune avec « kutiba alaykum as-siyam ». Le verset 2:184 repond immediatement a la question « combien de temps ? » par « des jours denombrables ». Le verset 2:185 precisera que ces jours sont le mois de Ramadan. La sequence 183-184-185 suit une logique pedagogique : l'obligation (183) → la duree et les exceptions (184) → la precision du mois (185). Le denombrement en 184 sert de transition entre l'obligation generale et la designation precise du Ramadan.",
              axe3_sourate: "La racine '-d-d apparait dans la sourate al-Baqarah en 2:80 (« le Feu ne nous touchera que des jours comptables — ayyaman ma'dudata »). Les incredules pensent que leur chatiment sera limite a un nombre de jours. En 2:184, les jours du jeune sont aussi denombrables. Le parallele est frappant : les incredules esperent un chatiment court, les croyants recoivent un jeune court. Mais le chatiment des incredules est un leurre (ils seront eternels en Enfer), tandis que le jeune des croyants est une realite — les jours sont veritablement limites.",
              axe4_coherence: "La racine '-d-d apparait environ 57 fois dans le Coran. En 3:200, « preparez-vous un nombre (wa-rabitu) ». En 18:22, le debat sur le nombre des Gens de la Caverne. En 72:28, « Il a denombre toute chose en nombre ». Le Coran utilise le denombrement pour marquer la maitrise divine sur les quantites — Dieu compte tout, determine tout, et rien n'echappe a Son calcul. Le fait que les jours du jeune soient denombrables montre que Dieu a pese cette obligation avec precision.",
              axe5_frequence: "Pour la mission du khalifa, le denombrement est une discipline de la mission. Le khalifa vit dans un monde mesurable — ses jours sont comptes, ses obligations sont determinees, son temps est limite. Le jeune denombrable enseigne au khalifa que ses obligations ont des bornes et que Dieu ne charge aucune ame au-dela de sa capacite. Le denombrement est un acte de justice divine : limiter l'obligation c'est reconnaitre la finitude humaine et l'adapter."
            },
            "Pr\u00e9paration/\u00c9quipement": {
              status: "probable",
              senses: ["pr\u00e9parer", "\u00e9quiper", "appr\u00eater", "mettre en ordre"],
              proof_ctx: "Le sens de preparation est un sens atteste de la racine '-d-d dans le Lane's — a'adda signifie preparer, equiper, mettre en ordre en vue d'un usage. Mais dans le verset 2:184, le mot ma'dudat est un participe passif qui qualifie les jours — ces jours sont « comptes », pas « prepares ». La distinction philosophique est que le denombrement est un acte intellectuel qui attribue un nombre, tandis que la preparation est un acte pratique qui met en ordre. Le contexte est clairement le denombrement (combien de jours ?) et non la preparation (que faut-il preparer ?). Le sens de preparation reste probable car la racine le porte, mais le participe passif en position d'adjectif qualificatif des jours oriente vers le sens de denombrement."
            }
          }
        }
      },
      // kwn pos=4
      {
        word_key: "kwn", position: 4, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "\u00catre/Existence",
          concepts: {
            "\u00catre/Existence": {
              status: "retenu",
              senses: ["\u00eatre", "exister", "devenir", "se trouver", "avoir lieu"],
              proof_ctx: "Le verbe kana est un accompli 3MS de la racine k-w-n. Le Lane's donne : etre, exister, devenir, se trouver dans un etat, avoir lieu, survenir. Le verbe kana est le verbe d'existence par excellence en arabe — il pose l'etat d'une chose ou d'une personne. Dans la construction « man kana minkum maridan » (quiconque parmi vous est malade), kana ouvre une proposition conditionnelle qui porte sur l'etat du sujet. L'accompli avec man conditionnel donne une valeur de generalite temporelle — quiconque se trouve dans cet etat, a n'importe quel moment.",
              axe1_verset: "Le verbe kana ouvre la premiere clause d'exemption du jeune. Le champ lexical (malade, voyage, nombre, autres jours) montre que kana pose la condition d'existence de l'exemption — il faut ETRE malade ou en voyage pour beneficier du rattrapage. Le verbe est a l'accompli dans une proposition conditionnelle (man kana), ce qui donne une valeur de generalite : quiconque EST dans cet etat, a tout moment. La condition n'est pas ponctuelle mais permanente dans sa formulation — chaque fois que quelqu'un se trouve malade ou en voyage pendant le jeune, la regle s'applique.",
              axe2_voisins: "Le verset 2:183 utilisait « kutiba alaykum » sans condition — l'obligation est generale. Le verset 2:184 introduit les exceptions avec « man kana » — des conditions specifiques qui modifient l'obligation. La sequence montre que la legislation coranique pose d'abord la regle generale puis les exceptions. Le verbe kana est le pivot qui fait passer de l'obligation absolue a l'obligation conditionnelle.",
              axe3_sourate: "La racine k-w-n est la plus frequente de la sourate al-Baqarah et de tout le Coran. Le verbe kana apparait dans presque chaque page — il est le fondement de la predication en arabe. Dans la sourate, kana sert a poser des conditions (2:184), des etats (2:170 « kanu la ya'qiluna » = ils ne raisonnaient pas), des recits (2:34 « kana min al-jinn » = il etait parmi les djinns). Le verbe est un outil grammatical omnipresent qui pose l'existence et l'etat des choses.",
              axe4_coherence: "La racine k-w-n est la racine la plus frequente du Coran avec plus de 1350 occurrences. Le verbe kana est utilise pour poser l'existence divine (« kana Allahu » = Dieu est/a ete), les etats humains (« man kana » = quiconque est), les recits historiques (« kana fi » = il etait dans). Le Coran utilise kana comme le verbe universel d'existence qui ancre chaque assertion dans la realite.",
              axe5_frequence: "Pour la mission du khalifa, l'etre est le fondement de la mission. Le khalifa EST — il existe dans un etat particulier a un moment donne. La condition « man kana minkum maridan » montre que la legislation divine prend en compte l'etat reel de chaque individu. Le khalifa n'est pas traite comme une abstraction mais comme un etre concret dont les conditions (sante, voyage) sont prises en compte. La mission s'adapte a l'existence reelle de chaque khalifa."
            }
          }
        }
      },
      // mrd pos=6
      {
        word_key: "mrd", position: 6, sense_chosen: "maladie",
        analysis_axes: {
          sense_chosen: "maladie",
          concept_chosen: "Maladie/Faiblesse",
          concepts: {
            "Maladie/Faiblesse": {
              status: "retenu",
              senses: ["maladie", "faiblesse", "\u00eatre malade", "souffrir", "\u00eatre affaibli"],
              proof_ctx: "Le nom maridan est un nom/adjectif accusatif indefini de la racine m-r-d. Le Lane's donne : etre malade, souffrir d'une maladie, etre faible, etre atteint, etre dans un etat de deficience corporelle. Le marade est un etat de sortie de l'equilibre naturel du corps — le malade est celui dont le corps ne fonctionne plus selon sa nature premiere. L'adjectif est indefini (maridan = malade, pas al-marid = LE malade) car la maladie est une condition qui peut toucher n'importe qui. L'accusatif marque l'attribut du sujet de kana — il etait dans l'etat de malade.",
              axe1_verset: "Le mot maridan est la premiere condition d'exemption du jeune. Le champ lexical (jours denombrables, voyage, nombre egal, autres jours) montre que la maladie est une raison valable de reporter le jeune. Le verset ne precise pas le type ni la gravite de la maladie — tout etat de maladie justifie l'exemption. Le mot est indefini, ce qui ouvre la porte a toute forme de maladie : aigue, chronique, legere ou grave. La legislation est misericordieuse — elle n'exige pas que le malade se force a jeuner.",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune sans exception. Le verset 2:184 introduit immediatement la premiere exception : la maladie. La sequence montre que la legislation coranique ne pose jamais une obligation sans prevoir les cas d'impossibilite. Le malade n'est pas dispense du jeune — il doit le rattraper plus tard. L'exemption est temporaire, pas definitive : le malade jeunera des jours equivalents quand il sera retabli.",
              axe3_sourate: "La racine m-r-d apparait dans la sourate al-Baqarah en 2:10 (« dans leurs coeurs il y a une maladie — marad ») — la maladie du coeur, l'hypocrisie. En 2:184 et 2:185, la maladie est physique — celle qui empeche de jeuner. La sourate utilise la maladie dans ses deux dimensions : la maladie spirituelle (hypocrisie) et la maladie corporelle (affaiblissement physique). Les deux sont des etats de desequilibre, mais la maladie physique est excusee tandis que la maladie spirituelle est condamnee.",
              axe4_coherence: "La racine m-r-d apparait environ 24 fois dans le Coran. En 4:43, le malade est aussi exempt de certaines obligations rituelles. En 2:196, le pelerin malade a des compensations specifiques. En 73:20, le malade est mentionne parmi ceux qui ont des excuses. Le Coran traite la maladie comme une condition qui allegue les obligations — le malade n'est jamais abandonne ni surcharge. La legislation coranique est systematiquement adaptee aux capacites reelles des individus.",
              axe5_frequence: "Pour la mission du khalifa, la maladie est une epreuve de la mission, pas un echec. Le khalifa malade n'est pas un khalifa defaillant — il est un khalifa en situation d'exception qui rattrape ses obligations quand il le peut. La prise en compte de la maladie montre que la mission du khalifa est realisee pour des etres humains, pas pour des surhommes. La misericorde divine reconnait la fragilite du corps et l'integre dans la legislation au lieu de l'ignorer."
            }
          }
        }
      },
      // sfr pos=9
      {
        word_key: "sfr", position: 9, sense_chosen: "voyage",
        analysis_axes: {
          sense_chosen: "voyage",
          concept_chosen: "Voyage/D\u00e9placement",
          concepts: {
            "Voyage/D\u00e9placement": {
              status: "retenu",
              senses: ["voyager", "se d\u00e9placer", "parcourir une distance", "partir", "quitter un lieu"],
              proof_ctx: "Le nom safarin est un nom genitif masculin de la racine s-f-r (sin-fa-ra). Le Lane's donne pour cette racine : voyager, se deplacer, parcourir une distance, partir en expedition, quitter un lieu pour un autre. Le safar est le voyage — le deplacement physique d'un endroit a un autre. Le mot est au genitif apres la preposition 'ala (sur/dans un etat de) — « 'ala safarin » signifie « en etat de voyage ». Le voyage est une condition d'exemption du jeune parce qu'il impose des difficultes physiques incompatibles avec le jeune : fatigue, deplacements, absence de conditions de repos. Il est important de ne pas confondre cette racine avec sad-fa-ra qui porte le sens de jaunir.",
              axe1_verset: "Le mot safarin est la deuxieme condition d'exemption du jeune apres la maladie. Le champ lexical (malade, nombre, jours, autres) montre que le voyage et la maladie sont places sur le meme plan — deux situations qui justifient le report du jeune. Le verset lie les deux par la conjonction « aw » (ou) — le malade OU le voyageur beneficie de la meme exemption. Le voyage n'est pas qualifie par une distance minimale — tout deplacement est reconnu comme une excuse. La solution est la meme : rattraper un nombre egal de jours apres le voyage.",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune « comme il a ete prescrit a ceux d'avant vous ». Le verset 2:184 montre que la prescription est assortie d'exemptions — le voyage en est une. Le verset 2:185 reprendra la mention du voyage (« man kana maridan aw 'ala safarin ») en confirmant l'exemption. La repetition en 2:185 confirme que le voyage est une exemption permanente et non limitee au premier verset — elle s'applique au mois de Ramadan specifiquement designe en 2:185.",
              axe3_sourate: "La racine s-f-r (sin-fa-ra) apparait dans la sourate al-Baqarah en 2:184, 2:185 et 2:283 (« si vous etes en voyage — in kuntum 'ala safarin »). En 2:283, le voyage justifie aussi des facilitations — le temoignage ecrit peut etre remplace par un gage. La sourate utilise le voyage comme une condition recurrente d'allegement des obligations. Le voyageur est un cas particulier de la legislation coranique — ses conditions de vie justifient des adaptations.",
              axe4_coherence: "La racine s-f-r (sin-fa-ra) apparait environ 12 fois dans le Coran. En 4:43, les voyageurs sont mentionnes dans les regles de purification. En 9:42, le voyage est mentionne comme une difficulte. En 73:20, le voyage est une excuse pour alleger la priere nocturne. Le Coran reconnait systematiquement le voyage comme une condition qui justifie l'allegement des obligations rituelles — le voyageur est en mouvement, il n'a pas les conditions de stabilite necessaires a l'accomplissement integral des rites.",
              axe5_frequence: "Pour la mission du khalifa, le voyage est un aspect de la mission, pas un obstacle. Le khalifa se deplace, parcourt la terre, explore le monde — le voyage fait partie de sa mission. La legislation divine ne punit pas le khalifa pour son deplacement — elle adapte les obligations a sa condition de voyageur. Le voyage enseigne au khalifa que la mission n'est pas statique mais dynamique — elle s'accomplit en mouvement autant qu'en repos."
            },
            "D\u00e9voilement/R\u00e9v\u00e9lation": {
              status: "probable",
              senses: ["d\u00e9voiler", "mettre \u00e0 nu", "r\u00e9v\u00e9ler", "d\u00e9couvrir"],
              proof_ctx: "Le sens de devoilement est un sens atteste de la racine s-f-r dans le Lane's — safara 'an signifie devoiler, mettre a nu, reveler ce qui etait cache. La femme qui « osfarat » a devoile son visage. Mais dans le verset 2:184, le mot safarin est utilise au genitif apres 'ala dans la construction « 'ala safarin » qui est une expression figee signifiant « en voyage ». Le contexte est l'exemption du jeune — le devoilement n'a pas de pertinence ici. La distinction philosophique est que le voyage est un deplacement physique dans l'espace, tandis que le devoilement est un acte de revelation qui enleve un voile. Le sens de voyage est clairement celui du verset."
            }
          }
        }
      },
      // edd pos=10 (fa-'iddatun)
      {
        word_key: "edd", position: 10, sense_chosen: "denombrement",
        analysis_axes: {
          sense_chosen: "denombrement",
          concept_chosen: "D\u00e9nombrement/Calcul",
          concepts: {
            "D\u00e9nombrement/Calcul": {
              status: "retenu",
              senses: ["nombre", "quantit\u00e9 d\u00e9nombr\u00e9e", "compte", "\u00e9quivalence num\u00e9rique"],
              proof_ctx: "Le nom 'iddatun est un nom feminin de la racine '-d-d — la meme racine que ma'dudat (pos=2). Le Lane's donne : nombre, quantite denombree, compte, ce qui est compte et determine. La 'idda est le nombre equivalent — ici « fa-'iddatun min ayyamin ukhara » signifie « alors un nombre egal d'autres jours ». Le concept est le meme que pos=2 (denombrement) mais dans une fonction differente : en pos=2 il qualifie les jours du jeune, en pos=10 il designe le nombre de jours de rattrapage. L'equivalence numerique (le meme nombre) garantit que l'obligation est integralement accomplie — on ne perd rien, on deplace simplement les jours.",
              axe1_verset: "Le mot 'iddatun pose la regle du rattrapage : un nombre egal. Le champ lexical (malade, voyage, jours, autres) montre que le rattrapage est quantitatif — le meme nombre de jours. Le verset ne permet pas de rattraper moins ou plus — c'est l'equivalence exacte. La conjonction « fa- » (alors) marque la consequence logique : si tu es malade ou en voyage, ALORS tu dois un nombre egal de jours. Le rattrapage est une obligation differee, pas une annulation — le jeune est reporte, pas supprime.",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune. Le verset 2:184 pose les regles de rattrapage par equivalence numerique. Le verset 2:185 precisera le mois (Ramadan) et reprendra la meme regle de rattrapage. La repetition de la regle en 2:185 confirme son importance — le rattrapage est un pilier de l'exemption. Sans rattrapage, l'exemption serait une abolition.",
              axe3_sourate: "La racine '-d-d a deja ete analysee en pos=2. La deuxieme occurrence dans le meme verset renforce l'idee que le denombrement est central dans la legislation du jeune — les jours sont comptes, le rattrapage est compte, tout est en nombre determine et equitable.",
              axe4_coherence: "La notion d'equivalence numerique dans le rattrapage se retrouve dans d'autres legislations coraniques. En 5:95, la compensation pour le gibier tue en etat de sacralisation est « un equivalent (jaza'un mithlu) de ce qu'il a tue ». Le Coran applique le principe d'equivalence dans les compensations — on rend l'equivalent de ce qu'on a manque ou detruit.",
              axe5_frequence: "Pour la mission du khalifa, l'equivalence numerique enseigne la justice quantitative. Le khalifa ne triche pas avec ses obligations — s'il manque des jours de jeune, il en rattrape le meme nombre. La mission du khalifa est une mission d'exactitude : pas d'approximation dans les obligations divines, pas de reduction arbitraire. L'equivalence est une forme de justice — rendre ce qui est du, exactement ce qui est du."
            }
          }
        }
      },
      // ywm pos=12
      {
        word_key: "ywm", position: 12, sense_chosen: "temps",
        analysis_axes: {
          sense_chosen: "temps",
          concept_chosen: "Temps/P\u00e9riode",
          concepts: {
            "Temps/P\u00e9riode": {
              status: "retenu",
              senses: ["jour", "journ\u00e9e", "temps", "p\u00e9riode", "\u00e9poque", "moment"],
              proof_ctx: "Le nom ayyamin est un pluriel genitif de la racine y-w-m. Le Lane's donne : jour, journee, periode de temps, epoque, moment. Le yawm est l'unite de base du temps humain — la periode entre le lever et le coucher du soleil, ou entre deux couchers. Le pluriel ayyam (jours) designe une duree composee de plusieurs unites. Dans la construction « min ayyamin ukhara » (d'autres jours), le genitif apres min marque l'origine — les jours de rattrapage sont tires d'autres jours, differents des jours du Ramadan.",
              axe1_verset: "Le mot ayyamin designe les jours de rattrapage. Le champ lexical (denombrables, nombre, autres) montre que les jours sont l'unite de mesure du jeune. Le verset decoupe le temps en jours : les jours du jeune prescrit (ayyaman ma'dudatin), les jours de rattrapage (ayyamin ukhara). Le jour est l'unite irreductible — on ne peut pas jeuner une fraction de jour, on jeune jour par jour. La legislation est construite sur cette unite temporelle concrete et mesurable.",
              axe2_voisins: "Le verset 2:183 parlait du jeune sans preciser la duree. Le verset 2:184 introduit les jours comme unite de mesure. Le verset 2:185 precisera que ces jours sont ceux du mois de Ramadan. La progression 183-184-185 va du general au particulier : le jeune → des jours denombrables → le mois de Ramadan. Les jours sont le chainon intermediaire entre l'obligation abstraite et la designation concrete du Ramadan.",
              axe3_sourate: "La racine y-w-m est omnipresente dans la sourate al-Baqarah. En 2:8, « le Jour dernier ». En 2:48, « le Jour ou aucune ame ne pourra rien pour une autre ». En 2:184-185, les jours du jeune. La sourate utilise y-w-m pour le temps eschatologique (le Jour du Jugement) et le temps legislatif (les jours du jeune). Le jour est a la fois une unite de la vie quotidienne et le moment ultime du jugement — les jours du jeune preparent au Jour du Jugement.",
              axe4_coherence: "La racine y-w-m apparait environ 475 fois dans le Coran — c'est une des racines les plus frequentes. Le Coran structure le temps autour du jour : le jour de la creation (7:54), le jour du Sabbat (2:65), les jours du jeune (2:184), le Jour du Jugement (partout). Le jour est l'unite fondamentale du temps coranique — il rythme la vie du croyant depuis la creation jusqu'au Jugement.",
              axe5_frequence: "Pour la mission du khalifa, le jour est l'unite de la mission. Le khalifa vit jour apres jour, accomplissant ses obligations quotidiennes. Le jeune jour par jour enseigne la discipline temporelle — chaque jour est une occasion d'accomplir la mission. Les jours du jeune sont des jours de formation intensive pour le khalifa : l'abstinence enseigne la maitrise de soi, la patience, et la conscience du temps qui passe."
            }
          }
        }
      },
      // axr pos=13
      {
        word_key: "axr", position: 13, sense_chosen: "posteriorite",
        analysis_axes: {
          sense_chosen: "posteriorite",
          concept_chosen: "Post\u00e9riorit\u00e9/Retard",
          concepts: {
            "Post\u00e9riorit\u00e9/Retard": {
              status: "retenu",
              senses: ["autre", "diff\u00e9rent", "post\u00e9rieur", "qui vient apr\u00e8s", "dernier"],
              proof_ctx: "Le nom ukhara est un adjectif feminin pluriel de la racine a-kh-r. Le Lane's donne : autre, different, posterieur, qui vient apres, dernier, ultime. Le mot ukhra/ukhara qualifie ce qui vient apres autre chose — la posteriorite est une relation temporelle ou logique entre deux choses ou deux moments. Dans « ayyamin ukhara » (d'autres jours), le mot qualifie les jours de rattrapage comme posterieurs aux jours du Ramadan — ils viennent apres, ils sont differents, ils sont « autres ». L'alterite temporelle est un deplacement dans le temps : les memes jours de jeune sont deplace vers un moment ulterieur.",
              axe1_verset: "Le mot ukhara qualifie les jours de rattrapage. Le champ lexical (nombre, jours, malade, voyage) montre que la posteriorite est la solution au probleme de l'exemption — les jours non jeunes pendant le Ramadan sont rattrapes a d'AUTRES moments. Le mot « ukhara » introduit l'idee que le temps du jeune est flexible : il peut etre deplace d'une periode a une autre. La posteriorite n'est pas un echec mais une reorganisation — les jours sont deplaces, pas annules.",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune sans mention de posteriorite. Le verset 2:184 introduit la possibilite de reporter a d'autres jours. Le verset 2:185 reprendra « fa-'iddatun min ayyamin ukhar » avec la meme formulation. La repetition confirme que le report est un droit permanent des malades et des voyageurs — il n'est pas limite a une occasion mais s'applique a chaque Ramadan.",
              axe3_sourate: "La racine a-kh-r est tres presente dans la sourate al-Baqarah. En 2:4, « l'au-dela (al-akhira) ». En 2:8, « le Jour dernier (al-yawm al-akhir) ». En 2:184, ukhara designe les jours posterieurs. La sourate utilise a-kh-r pour la posteriorite temporelle a tous les niveaux : l'au-dela (apres la vie), le Jour dernier (apres tous les jours), et les jours ulterieurs (apres le Ramadan). La posteriorite est une constante coranique — il y a toujours un « apres ».",
              axe4_coherence: "La racine a-kh-r apparait environ 250 fois dans le Coran. Le concept de posteriorite structure toute la vision coranique du temps : il y a le premier (awwal) et le dernier (akhir), la vie d'ici-bas (dunya) et l'au-dela (akhira), les premiers peuples et les derniers. Le Coran pense le temps comme une succession ordonnee ou chaque moment a sa place — les jours de rattrapage viennent apres les jours du Ramadan, dans l'ordre voulu par Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la posteriorite enseigne que la mission a un « apres ». Le khalifa ne vit pas dans un present isole — il sait que chaque action a des consequences ulterieures. Le rattrapage des jours de jeune montre que les obligations non accomplies dans le temps prevu peuvent etre accomplies plus tard — la mission du khalifa admet des reports mais pas des annulations. Ce qui est du reste du, meme si le moment change."
            }
          }
        }
      },
      // twq pos=16
      {
        word_key: "twq", position: 16, sense_chosen: "capacite",
        analysis_axes: {
          sense_chosen: "capacite",
          concept_chosen: "Capacit\u00e9/Endurance",
          concepts: {
            "Capacit\u00e9/Endurance": {
              status: "retenu",
              senses: ["pouvoir supporter", "endurer", "avoir la capacit\u00e9", "tol\u00e9rer", "porter avec effort"],
              proof_ctx: "Le verbe yutiqunahu est un inaccompli 3MP forme IV de la racine t-w-q. Le Lane's donne : pouvoir supporter, endurer, avoir la capacite de, tolerer avec difficulte, porter un fardeau avec effort. Le tawq est le collier — ce qui entoure le cou — et la taaqa est la capacite de porter un fardeau. La forme IV (ataaqa) indique le fait de supporter quelque chose qui pese. Le pronom suffixe -hu renvoie au jeune (as-siyam de 2:183). La construction « alladhina yutiqunahu » designe ceux qui PEUVENT supporter le jeune — ceux qui en ont la capacite physique mais pour qui cela represente un effort considerable.",
              axe1_verset: "Le verbe yutiqunahu introduit la deuxieme categorie d'exemptions apres les malades et les voyageurs. Le champ lexical (compensation, nourrir, demuni) montre que cette categorie a une solution differente — non pas le rattrapage mais la compensation (fidya). Les malades et voyageurs rattrapent les jours ; ceux qui ont la capacite mais avec grande difficulte payent une compensation. Le verset distingue deux niveaux d'exemption : l'impossibilite temporaire (maladie/voyage → rattrapage) et la difficulte permanente (capacite avec effort → compensation).",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune pour tous. Le verset 2:184 introduit une hierarchie d'exemptions : d'abord les malades et voyageurs (rattrapage), puis ceux qui peuvent avec difficulte (compensation). Le verset 2:185 reprendra les exemptions maladie/voyage mais pas la clause de la capacite, ce qui a conduit certains exegetes a considerer cette clause comme abrogee. La position de cette clause entre les exemptions claires et la recommandation du jeune en fait un point de debat exegetique majeur.",
              axe3_sourate: "La racine t-w-q n'apparait qu'une seule fois dans la sourate al-Baqarah et qu'une seule fois dans tout le Coran (2:184). Cette unicite fait du mot un hapax coranique — un mot qui n'apparait qu'une fois dans tout le texte. L'hapax confere au mot une importance particuliere : la capacite de supporter avec effort est une condition unique dans la legislation du jeune, traitee nulle part ailleurs dans le Coran.",
              axe4_coherence: "La racine t-w-q n'apparait que dans ce seul verset du Coran (2:184). Le Lane's mentionne le tawq (collier) comme image de ce qui entoure et pese sur le cou — la capacite de porter un poids. L'unicite coranique de cette racine a genere un debat exegetique riche : Ibn Abbas lisait « yutawwaqunahu » (forme II = ceux a qui on impose le jeune avec difficulte), ce qui changerait le sens vers ceux qui ne PEUVENT PAS supporter le jeune. La forme IV retenue dans la lecture standard signifie « ceux qui en ont la capacite » — la nuance est considerable.",
              axe5_frequence: "Pour la mission du khalifa, la capacite est la mesure de l'obligation. Le khalifa n'est pas charge au-dela de sa capacite — le Coran conclut la sourate al-Baqarah par « Dieu ne charge aucune ame au-dela de sa capacite » (2:286). Le verset 2:184 applique ce principe au jeune : ceux qui peuvent avec effort ont la possibilite de compenser. La mission du khalifa est calibree sur ses capacites reelles, pas sur un ideal impossible. La legislation divine est un systeme adaptatif qui reconnait les limites humaines."
            },
            "Encerclement/Lien": {
              status: "probable",
              senses: ["entourer", "enserrer", "attacher", "collier", "cercle"],
              proof_ctx: "Le sens d'encerclement est atteste dans le Lane's pour la racine t-w-q — le tawq est le collier qui entoure le cou, et par extension tout ce qui encercle ou enserre. La tawqa est aussi un pouvoir, une capacite au sens de ce qui entoure les possibilites d'une personne. Mais dans le verset 2:184, le verbe yutiqunahu est utilise dans le sens de « supporter, endurer » — la question est de savoir si la personne peut porter le fardeau du jeune, pas si elle est entouree. La distinction philosophique est que l'encerclement est un etat spatial (etre entoure), tandis que la capacite est un etat de puissance (pouvoir supporter). Le contexte legislatif du jeune oriente clairement vers la capacite de supporter."
            }
          }
        }
      },
      // fdy pos=17
      {
        word_key: "fdy", position: 17, sense_chosen: "compensation",
        analysis_axes: {
          sense_chosen: "compensation",
          concept_chosen: "Ran\u00e7on/Sacrifice",
          concepts: {
            "Ran\u00e7on/Sacrifice": {
              status: "retenu",
              senses: ["ran\u00e7on", "compensation", "rachat", "substitut", "prix de lib\u00e9ration"],
              proof_ctx: "Le nom fidyatun est un nom feminin de la racine f-d-y. Le Lane's donne : rancon, compensation, rachat, ce qu'on donne en echange pour se liberer d'une obligation, prix de liberation. La fidya est un acte de substitution juridique — on remplace une obligation par une autre equivalente. Le fida' est le prix paye pour racheter un captif — par extension, la fidya est le prix paye pour « racheter » les jours de jeune manques. Le mot est indefini (fidyatun = une compensation) — une compensation non precisee dans sa quantite, dont la forme est ensuite detaillee (nourrir un demuni).",
              axe1_verset: "Le mot fidyatun est la solution pour ceux qui peuvent jeuner avec grande difficulte. Le champ lexical (capacite, nourrir, demuni) montre que la compensation est un substitut concret au jeune — au lieu de s'abstenir de nourriture, on donne de la nourriture. L'ironie structurelle est remarquable : celui qui ne jeune pas (ne s'abstient pas de manger) doit nourrir un autre. Le jeune et la compensation sont deux faces de la meme piece — l'un prive le corps de nourriture, l'autre donne de la nourriture a un corps dans le besoin.",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune sans mention de compensation. Le verset 2:184 introduit la fidya comme alternative au jeune pour certaines categories. Le verset 2:196 reprendra le concept de fidya dans le contexte du pelerinage — « une compensation de jeune, d'aumone ou de sacrifice ». Le Coran utilise la fidya dans les deux grandes obligations rituelles (jeune et pelerinage) comme mecanisme d'adaptation aux conditions individuelles.",
              axe3_sourate: "La racine f-d-y apparait dans la sourate al-Baqarah en 2:48 (« on n'acceptera d'elle aucune compensation — fidya »), 2:123 (meme formulation) et 2:184 (la compensation du jeune). En 2:48 et 2:123, la fidya est rejetee — au Jour du Jugement, aucune compensation ne sera acceptee. En 2:184, la fidya est acceptee — dans la legislation du jeune, la compensation est permise. La sourate montre que la fidya a ses limites : elle fonctionne dans la vie terrestre mais pas devant le Tribunal divin.",
              axe4_coherence: "La racine f-d-y apparait environ 15 fois dans le Coran. En 3:91, « quand bien meme l'un d'eux donnerait la terre pleine d'or en rancon (iftada), cela ne serait pas accepte ». En 10:54, « chaque ame injuste donnerait en rancon tout ce qui est sur terre ». Le Coran utilise la fidya pour montrer les limites du rachat — dans la vie terrestre, on peut compenser certaines obligations, mais devant Dieu, aucune compensation ne peut remplacer la foi et les actes.",
              axe5_frequence: "Pour la mission du khalifa, la compensation est un mecanisme de la mission qui permet l'adaptation sans abandon. Le khalifa qui ne peut pas accomplir une obligation directement peut la compenser par un acte equivalent. La fidya enseigne que la mission du khalifa n'est pas rigide — elle admet des substitutions quand les circonstances l'exigent. Mais la compensation n'est pas une echappatoire : le verset conclut que le jeune est meilleur, rappelant que l'obligation directe reste superieure a son substitut."
            }
          }
        }
      },
      // tem pos=18
      {
        word_key: "tem", position: 18, sense_chosen: "nourriture",
        analysis_axes: {
          sense_chosen: "nourriture",
          concept_chosen: "Gustation/Nourriture",
          concepts: {
            "Gustation/Nourriture": {
              status: "retenu",
              senses: ["nourrir", "alimenter", "go\u00fbter", "nourriture", "aliment", "repas"],
              proof_ctx: "Le nom ta'amu est un nom masculin de la racine t-'-m. Le Lane's donne : nourrir, alimenter, gouter, nourriture, aliment, repas, ce qu'on donne a manger. Le ta'am est la nourriture concrete — les aliments que l'on consomme ou que l'on donne a consommer. Le mot est en position de complement explicatif de fidyatun — la compensation consiste en nourriture. La racine porte aussi le sens de gouter (dhawq et ta'm sont proches semantiquement) — gouter est l'experience sensorielle de la nourriture. Mais ici le sens est concret et pratique : donner de la nourriture a un demuni.",
              axe1_verset: "Le mot ta'amu precise la forme de la compensation (fidya). Le champ lexical (compensation, demuni, bien, jeune) montre que la nourriture est l'instrument concret de la fidya. Le verset construit une symetrie remarquable : le jeune consiste a s'abstenir de nourriture, et la compensation consiste a donner de la nourriture. Ce qui est refuse a soi (ta'am = nourriture) est donne a l'autre (miskin = demuni). La nourriture est au centre du verset comme objet du jeune et moyen de la compensation.",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune (s'abstenir de nourriture). Le verset 2:184 precise que la compensation est de donner de la nourriture. Les versets 2:168 et 2:172 parlaient de la nourriture licite (« mangez de ce qui est licite et bon sur la terre »). La sourate construit une relation complexe avec la nourriture : manger le licite (168-172), s'abstenir de manger (183, le jeune), donner a manger (184, la compensation). La nourriture est legislee dans toutes ses dimensions.",
              axe3_sourate: "La racine t-'-m apparait dans la sourate al-Baqarah en 2:61 (« nous ne supporterons pas une seule nourriture — ta'am wahid »), 2:184 (nourrir un demuni), et 2:249 (« quiconque en mangera — ta'ima »). La sourate utilise la nourriture comme un test : les Israelites rejettent la manne et reclament des nourritures variees (2:61), les croyants jeunent et nourrissent les pauvres (2:184), les soldats de Talut sont testes par l'eau (2:249). La nourriture est un outil de mise a l'epreuve de la discipline.",
              axe4_coherence: "La racine t-'-m apparait environ 48 fois dans le Coran. En 5:89, la compensation pour un serment viole est de « nourrir dix pauvres (it'am 'asharat masakin) ». En 69:34, les damnes n'encourageaient pas a « nourrir le pauvre (ta'am al-miskin) ». En 76:8, les pieux « nourrissent le pauvre, l'orphelin et le captif ». Le Coran fait de l'acte de nourrir un critere moral fondamental — nourrir les pauvres est un acte de piete que le Coran prescrit dans les compensations rituelles et recommande dans la vie quotidienne.",
              axe5_frequence: "Pour la mission du khalifa, nourrir est un acte fondamental de la mission sociale. Le khalifa ne vit pas pour manger mais pour nourrir — sa mission inclut la prise en charge des demunis. La compensation du jeune par la nourriture montre que l'obligation rituelle et l'obligation sociale sont interconnectees : meme quand on ne peut pas jeuner, on peut nourrir. La mission du khalifa ne connait pas de vide — si une voie est fermee (le jeune), une autre s'ouvre (la nourriture des pauvres)."
            }
          }
        }
      },
      // skn pos=19
      {
        word_key: "skn", position: 19, sense_chosen: "demuni",
        analysis_axes: {
          sense_chosen: "demuni",
          concept_chosen: "Pauvret\u00e9/Indigence",
          concepts: {
            "Pauvret\u00e9/Indigence": {
              status: "retenu",
              senses: ["pauvre", "d\u00e9muni", "indigent", "celui qui est immobile faute de moyens"],
              proof_ctx: "Le nom miskinim est un nom masculin de la racine s-k-n. Le Lane's donne pour miskin : pauvre, demuni, indigent, celui dont la pauvrete l'a rendu immobile, celui qui ne peut pas subvenir a ses besoins. La racine s-k-n porte l'idee fondamentale de quietude, d'immobilite, de repos. Le sukun est le repos, la sakan est la demeure, et le miskin est celui dont la pauvrete a produit une immobilite involontaire — il est « calme » non par choix mais par incapacite de bouger. Le miskin est plus pauvre que le faqir selon certains juristes — le faqir manque de richesse, le miskin manque de tout mouvement economique.",
              axe1_verset: "Le mot miskinim designe le beneficiaire de la compensation alimentaire. Le champ lexical (compensation, nourrir, bien, volontariat) montre que le demuni est le destinataire de la solidarite. Le verset construit un circuit de distribution : celui qui ne jeune pas → donne de la nourriture → a un demuni. Le miskin est le point d'arrivee de la compensation — il recoit ce que le non-jeunant donne. Le singulier (miskinim = un demuni) individualise l'acte — chaque jour non jeune correspond a la nourriture d'un demuni.",
              axe2_voisins: "Le verset 2:177 mentionnait les « demunis (al-masakin) » parmi les beneficiaires du don volontaire. Le verset 2:184 les mentionne comme beneficiaires de la compensation du jeune. La sequence montre que les masakin sont un groupe constamment present dans la legislation coranique — ils beneficient des dons volontaires (2:177), des compensations rituelles (2:184), et de la zakat (9:60). La societe coranique prend en charge ses demunis a travers de multiples canaux.",
              axe3_sourate: "La racine s-k-n apparait dans la sourate al-Baqarah sous plusieurs formes. En 2:35, « habitez (uskun) le Jardin » — la demeure paradisiaque. En 2:125, la Maison (Kaaba) comme lieu de stabilite. En 2:184, le miskin est celui qui n'a pas de stabilite economique. La racine s-k-n lie la stabilite, la demeure et la pauvrete : le miskin est celui a qui il manque la stabilite fondamentale que procure la suffisance materielle.",
              axe4_coherence: "La racine s-k-n apparait environ 69 fois dans le Coran. Le mot miskin apparait 23 fois. En 9:60, les masakin sont parmi les huit categories beneficiaires de la zakat. En 68:24, les compagnons du jardin regrettent de n'avoir pas laisse entrer le miskin. En 107:3, ne pas nourrir le miskin est un signe de rejet du Jour du Jugement. Le Coran fait du traitement du miskin un critere moral fondamental — celui qui neglige le miskin neglige sa propre humanite.",
              axe5_frequence: "Pour la mission du khalifa, le demuni est le test de la mission. Le khalifa est place sur terre pour prevenir la corruption (fasad) — et la pauvrete extreme est une forme de corruption sociale. Nourrir le miskin est un acte direct de prevention de la corruption : la faim produit le desordre, la nourriture produit la stabilite. Le khalifa qui nourrit le demuni accomplit sa mission de khalifa en restaurant l'equilibre social que la pauvrete a detruit."
            }
          }
        }
      },
      // twe pos=21
      {
        word_key: "twe", position: 21, sense_chosen: "volontariat",
        analysis_axes: {
          sense_chosen: "volontariat",
          concept_chosen: "Ob\u00e9issance/Soumission volontaire",
          concepts: {
            "Ob\u00e9issance/Soumission volontaire": {
              status: "retenu",
              senses: ["ob\u00e9ir volontairement", "faire du bien spontan\u00e9ment", "se soumettre de bon gr\u00e9", "volontariat", "acte surr\u00e9rogatoire"],
              proof_ctx: "Le verbe tatawwa'a est un accompli 3MS forme V de la racine t-w-'. Le Lane's donne : obeir volontairement, faire du bien spontanement, se soumettre de bon gre, accomplir un acte surrerogatoire. La forme V (tafa''ala) est reflexive et intensive — le sujet se porte lui-meme vers l'action avec effort et volonte. Le tatawwu' est l'action volontaire qui depasse l'obligation — faire plus que ce qui est prescrit, de sa propre initiative. La racine t-w-' porte l'idee fondamentale d'obeissance et de soumission, mais la forme V ajoute la dimension volontaire et spontanee — on ne se soumet pas par contrainte mais par choix.",
              axe1_verset: "Le verbe tatawwa'a introduit la clause du volontariat apres les clauses d'obligation et de compensation. Le champ lexical (bien, meilleur, jeune) montre que le volontariat est une elevation au-dessus de l'obligation. Le verset construit une hierarchie : l'obligation (jeuner) → l'exemption avec compensation (nourrir un demuni) → le volontariat (faire plus). La construction « man tatawwa'a khayran » (quiconque fait volontairement du bien) est ouverte — le bien volontaire n'est pas specifie, il peut prendre toute forme : nourrir plus d'un demuni, jeuner en plus, donner davantage.",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune comme obligation. Le verset 2:184 passe de l'obligation au volontariat — apres avoir pose les regles, il ouvre la porte a l'initiative personnelle. Le verset 2:185 reprendra l'obligation mais pas le volontariat, ce qui fait de cette clause un appel specifique au depassement de soi dans le contexte de 2:184. La legislation coranique ne se contente pas d'obliger — elle invite a aller au-dela.",
              axe3_sourate: "La racine t-w-' apparait dans la sourate al-Baqarah en 2:158 (« quiconque fait volontairement du bien — tatawwa'a khayran ») a propos du parcours entre Safa et Marwa. La meme formulation exacte (« man tatawwa'a khayran fa-huwa khayrun lahu ») apparait en 2:158 et 2:184. La repetition montre que le Coran utilise une formule standard pour encourager le volontariat dans differents contextes rituels : le pelerinage (2:158) et le jeune (2:184). Le volontariat est un principe transversal.",
              axe4_coherence: "La racine t-w-' apparait environ 28 fois dans le Coran. En 3:83, « tout ce qui est dans les cieux et la terre se soumet a Lui (asslama lahu taw'an) volontairement ou par contrainte ». En 41:11, le ciel et la terre disent « nous venons obeissants (ta'i'in) ». Le Coran distingue la soumission volontaire (taw') de la soumission forcee (karh). Le verset 2:184 parle de la soumission volontaire — l'acte de bien fait de son propre gre, sans contrainte exterieure.",
              axe5_frequence: "Pour la mission du khalifa, le volontariat est le sommet de la mission. Le khalifa obligatoire remplit ses devoirs — le khalifa volontaire les depasse. Faire du bien volontairement signifie aller au-dela des prescriptions minimales pour accomplir une mission d'excellence. Le Coran encourage le khalifa a ne pas se contenter du minimum mais a viser le maximum. Le tatawwu' est la difference entre un khalifa qui obeit et un khalifa qui excelle."
            }
          }
        }
      },
      // khyr pos=22 (khayran accusatif)
      {
        word_key: "khyr", position: 22, sense_chosen: "bien",
        analysis_axes: {
          sense_chosen: "bien",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "bont\u00e9", "excellence", "ce qui est bon", "pr\u00e9f\u00e9rence", "sup\u00e9riorit\u00e9"],
              proof_ctx: "Le nom khayran est un accusatif indefini de la racine kh-y-r. Le Lane's donne : bien, bonte, excellence, ce qui est bon et souhaitable, preference, superiorite. Le khayr est ce qui est bon en soi — il designe le bien moral et le bien materiel. Dans « tatawwa'a khayran » (fait volontairement du bien), le mot est l'objet de l'acte volontaire — le bien est ce qui est accompli. L'accusatif marque le complement d'objet : on fait DU BIEN, le bien est l'objet produit par le volontariat. Le mot apparait trois fois dans le verset avec des fonctions grammaticales differentes, creant une gradation rhetoriquement puissante.",
              axe1_verset: "Le mot khayran est la premiere des trois occurrences de khayr dans le verset. Le champ lexical (volontariat, meilleur, jeune, savoir) montre que le bien est le fil conducteur de la fin du verset. Premiere occurrence : le bien fait volontairement (khayran accusatif). Deuxieme occurrence : c'est meilleur pour lui (khayrun nominatif). Troisieme occurrence : le jeune est meilleur pour vous (khayrun nominatif). La triple repetition cree un effet de martelement : bien, meilleur, meilleur — le verset pousse vers le haut.",
              axe2_voisins: "Le verset 2:180 utilisait khayr pour designer le bien materiel (la richesse laissee en heritage). Le verset 2:184 utilise khayr pour le bien moral (l'acte volontaire de bonte). La sequence montre que le khayr coranique couvre le materiel et le moral — la richesse et la bonte. Le Coran ne separe pas le bien materiel du bien moral — les deux sont des manifestations du khayr.",
              axe3_sourate: "La racine kh-y-r est une des plus frequentes de la sourate al-Baqarah. En 2:54, « c'est mieux (khayr) pour vous ». En 2:158, « quiconque fait volontairement du bien (khayr) ». En 2:184, khayr apparait trois fois. La sourate construit une theologie du bien — le khayr est ce que Dieu veut pour l'homme, ce que l'homme doit chercher, ce qui le rapproche de la reussite.",
              axe4_coherence: "La racine kh-y-r apparait environ 176 fois dans le Coran. Le khayr est un concept central de l'ethique coranique — il designe tout ce qui est bon, souhaitable et approuve par Dieu. En 2:215, « tout bien que vous depensez est pour les parents et les proches ». En 99:7, « quiconque fait le poids d'un atome de bien (khayr) le verra ». Le Coran fait du bien l'unite de mesure du Jugement — chaque atome de bien est compte.",
              axe5_frequence: "Pour la mission du khalifa, le bien est l'objectif de la mission. Le khalifa est place sur terre pour produire du bien — empecher la corruption (fasad) et instaurer le bien (khayr). Chaque acte volontaire de bien est un pas vers l'accomplissement de la mission. Le triple khayr du verset 2:184 rappelle au khalifa que le bien est omni-present dans sa mission : le bien qu'il fait, le bien qui lui revient, et le bien que le jeune represente."
            }
          }
        }
      },
      // khyr pos=24 (khayrun nominatif — meilleur pour lui)
      {
        word_key: "khyr", position: 24, sense_chosen: "bien",
        analysis_axes: {
          sense_chosen: "bien",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["meilleur", "sup\u00e9rieur", "pr\u00e9f\u00e9rable", "plus avantageux"],
              proof_ctx: "Le nom khayrun est au nominatif indefini de la racine kh-y-r — meme racine que khayran (pos=22). Le Lane's donne pour l'elatif khayr : meilleur, superieur, preferable. Dans « fa-huwa khayrun lahu » (c'est meilleur pour lui), le mot est predicat de la phrase nominale — le volontariat EST meilleur. La fonction comparative (khayr = meilleur) est implicite en arabe — le mot khayr sans comparatif explicite porte deja le sens de superiorite. Le pronom lahu (pour lui) marque que le benefice revient a celui qui fait le bien — le volontaire est le premier beneficiaire de son propre bien.",
              axe1_verset: "Le mot khayrun est la deuxieme occurrence de khayr dans le verset. Le champ lexical (volontariat, bien, jeune) montre que le verset construit une echelle de valeurs : faire du bien → c'est meilleur pour soi → jeuner est encore meilleur. Cette deuxieme occurrence etablit que le bien volontaire revient a son auteur — le circuit est reflexif. Celui qui donne de la nourriture a un demuni recoit un bien en retour, non materiel mais spirituel. La formule « fa-huwa khayrun lahu » garantit la retribution divine du volontariat.",
              axe2_voisins: "Le verset 2:158 utilisait la meme formule exacte : « fa-huwa khayrun lahu ». La repetition en 2:184 confirme que c'est une formule standard de retribution du volontariat. Les versets suivants (2:185) ne reprennent pas cette formule mais utilisent d'autres mecanismes rhetoriques. La formule « khayrun lahu » est un sceau d'approbation divine qui certifie que l'acte volontaire sera recompense.",
              axe3_sourate: "La racine kh-y-r dans la sourate al-Baqarah est un leitmotiv. La formule comparative « khayr + pronom » apparait de nombreuses fois pour comparer des options et guider le choix du croyant. Le Coran utilise le comparatif comme outil pedagogique — il ne se contente pas d'obliger, il montre que certaines options sont meilleures que d'autres, laissant au croyant le merite du choix.",
              axe4_coherence: "La formule « khayrun lahu/lakum » apparait dans tout le Coran comme un marqueur de preference divine. En 2:271, « si vous les donnez aux pauvres, c'est meilleur pour vous ». En 4:25, le mariage est « meilleur pour vous ». Le Coran guide les croyants par la comparaison — il montre ce qui est bien et ce qui est meilleur, laissant le choix libre mais oriente.",
              axe5_frequence: "Pour la mission du khalifa, le « meilleur pour lui » montre que la mission profite au khalifa lui-meme. Le khalifa qui fait le bien n'est pas un serviteur exploite — il est le premier beneficiaire de ses propres actes. La mission du khalifa est un investissement dont le retour est garanti par Dieu. Le « meilleur pour lui » est une promesse divine qui motive le khalifa a perseverer dans le bien."
            }
          }
        }
      },
      // swm pos=27
      {
        word_key: "swm", position: 27, sense_chosen: "jeune",
        analysis_axes: {
          sense_chosen: "jeune",
          concept_chosen: "Abstinence/Je\u00fbne",
          concepts: {
            "Abstinence/Je\u00fbne": {
              status: "retenu",
              senses: ["je\u00fbner", "s'abstenir", "cesser", "se retenir de manger et de boire"],
              proof_ctx: "Le verbe tasumu est un inaccompli 2MP de la racine s-w-m (sad-waw-mim). Le Lane's donne : jeuner, s'abstenir de nourriture et de boisson et de relations intimes pendant un temps determine, cesser de manger. Le sawm est l'abstention volontaire et temporaire — il n'est pas un rejet permanent de la nourriture mais une suspension deliberee pendant une periode definie. Le verbe est a l'inaccompli 2MP (tasumu = vous jeunez) dans une proposition masdariyya (an tasumu = que vous jeuniez) — l'infinitif nominal sert de sujet a « khayrun lakum » (est meilleur pour vous). Il ne faut pas confondre cette racine (sad-waw-mim) avec sin-waw-mim qui porte le sens d'affliction et de mal.",
              axe1_verset: "Le verbe tasumu conclut la partie legislative du verset en revenant au sujet central : le jeune. Le champ lexical (jours, malade, voyage, compensation, demuni, bien) montre que le verset a explore toutes les exemptions et compensations pour revenir finalement au jeune lui-meme. La structure est circulaire : jeune (2:183) → exemptions et compensations (2:184a-c) → le jeune est meilleur (2:184d). Apres avoir presente toutes les alternatives, le verset affirme la superiorite du jeune — les exemptions existent mais le jeune reste l'option la meilleure.",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune (as-siyam). Le verset 2:184 revient au jeune (tasumu) apres avoir detaille les exemptions. Le verset 2:185 precisera le mois du jeune (Ramadan). La sequence 183-184-185 est centree sur le jeune : prescription → exemptions et superiorite → designation du mois. Le jeune est le sujet principal et les exemptions sont des parentheses necessaires mais secondaires.",
              axe3_sourate: "La racine s-w-m (sad) apparait dans la sourate al-Baqarah en 2:183 (kutiba alaykum as-siyamu = il vous est prescrit le jeune), 2:184 (an tasumu = que vous jeuniez), 2:185 (fa-l-yasumhu = qu'il le jeune), 2:187 (les regles detaillees du jeune nocturne), et 2:196 (le jeune comme compensation dans le pelerinage). La sourate consacre un bloc legislatif complet au jeune (2:183-187) dont 2:184 est le deuxieme segment. Le jeune est une des grandes legislations de la sourate al-Baqarah.",
              axe4_coherence: "La racine s-w-m (sad) apparait environ 13 fois dans le Coran. En 19:26, Marie fait voeu de sawm (silence — une forme d'abstention). En 2:183-187, le sawm est le jeune alimentaire. Le Coran utilise le sawm pour toute forme d'abstention volontaire — le silence de Marie et le jeune des croyants sont deux manifestations de la meme racine. Le sawm est une discipline de la privation qui fortifie la volonte et la conscience.",
              axe5_frequence: "Pour la mission du khalifa, le jeune est un entrainement pour la mission. Le khalifa qui jeune apprend la maitrise de soi — il refuse a son corps ce que le corps desire (nourriture, boisson) pour affirmer la primaute de la volonte spirituelle. Le jeune est meilleur parce qu'il forme le khalifa a la discipline qui est necessaire pour resister a la corruption et maintenir la justice. Le khalifa qui jeune est un khalifa qui se maitrise — et celui qui se maitrise peut maitriser sa mission."
            }
          }
        }
      },
      // khyr pos=28 (khayrun — jeune meilleur pour vous)
      {
        word_key: "khyr", position: 28, sense_chosen: "bien",
        analysis_axes: {
          sense_chosen: "bien",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["meilleur", "sup\u00e9rieur", "pr\u00e9f\u00e9rable"],
              proof_ctx: "Le nom khayrun est au nominatif indefini de la racine kh-y-r — troisieme occurrence dans le verset. Le Lane's donne : meilleur, superieur, preferable. Dans « wa-an tasumu khayrun lakum » (et que vous jeuniez est meilleur pour vous), le mot est predicat — le jeune EST meilleur. Le passage du singulier « lahu » (pour lui, pos=24) au pluriel « lakum » (pour vous) elargit le benefice : le volontariat profite a l'individu, le jeune profite a la communaute. La troisieme occurrence de khayr clot la gradation en designant le jeune comme la meilleure option de toutes.",
              axe1_verset: "Le mot khayrun est la troisieme et derniere occurrence de khayr dans le verset. Le champ lexical (jeune, savoir) montre que le verset culmine dans cette affirmation : le jeune est meilleur. La gradation complete est : faire du bien volontaire (khayran) → c'est meilleur pour lui (khayrun lahu) → jeuner est meilleur pour vous (khayrun lakum). Le verset pousse les croyants du minimum (compensation) vers le maximum (jeune) a travers trois paliers de khayr. La derniere occurrence est la plus forte car elle porte sur le jeune lui-meme — l'obligation premiere.",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune comme obligation. Le verset 2:184 conclut en affirmant la superiorite du jeune sur les alternatives. Le verset 2:185 reprendra cette affirmation implicitement en precisant le mois de Ramadan sans revenir sur les compensations. La conclusion de 2:184 oriente vers le jeune effectif — les exemptions sont des concessions mais le jeune reste la voie royale.",
              axe3_sourate: "La triple repetition de khayr dans un seul verset est un phenomene stylistique notable dans la sourate al-Baqarah. D'autres versets utilisent aussi la repetition pour creer un effet de martelement, mais la triple repetition de khayr dans des fonctions grammaticales differentes (accusatif, nominatif predicatif x2) est specifique a 2:184. Le verset utilise le khayr comme un crescendo rhetorique.",
              axe4_coherence: "La construction « khayrun lakum in kuntum ta'lamuna » (meilleur pour vous si vous saviez) apparait en 2:184 et en des formulations similaires ailleurs dans le Coran (3:110, 9:41). La clausule « si vous saviez » n'est pas un doute sur le savoir des croyants mais une invitation a activer leur discernement — le Coran dit « c'est meilleur » et ajoute « si vous saviez », comme pour dire : la preuve est la, il suffit de la voir.",
              axe5_frequence: "Pour la mission du khalifa, la superiorite du jeune rappelle que dans la mission, il y a toujours une option meilleure. Le khalifa est libre de choisir entre le minimum (compensation) et le meilleur (jeune), et le Coran l'oriente vers le meilleur. La mission du khalifa n'est pas un minimum vital — c'est une course vers l'excellence. Le triple khayr est un rappel que le bien n'a pas de plafond — on peut toujours faire mieux, et le mieux est de jeuner."
            }
          }
        }
      },
      // kwn pos=31 (kuntum)
      {
        word_key: "kwn", position: 31, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "\u00catre/Existence",
          concepts: {
            "\u00catre/Existence": {
              status: "retenu",
              senses: ["\u00eatre", "exister", "se trouver dans un \u00e9tat"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP de la racine k-w-n — meme racine que kana (pos=4). Le Lane's donne : etre, exister, se trouver dans un etat. Dans « in kuntum ta'lamuna » (si vous etiez sachants / si vous saviez), le verbe pose la condition existentielle du savoir. L'accompli avec « in » conditionnel donne une valeur d'hypothese reelle — le Coran ne doute pas que les croyants sachent, il les invite a activer leur savoir. Kuntum est un verbe d'etat qui pose le destinataire dans une condition — l'etat de savoir.",
              axe1_verset: "Le verbe kuntum est la deuxieme occurrence de k-w-n dans le verset (apres kana en pos=4). Le champ lexical (savoir, jeune, meilleur) montre que kuntum ferme le verset sur une condition de savoir. La premiere occurrence (kana) ouvrait une condition medicale/physique (malade/voyageur). La deuxieme (kuntum) ferme le verset sur une condition intellectuelle (si vous savez). Le verset passe du corps (maladie, voyage, nourriture) a l'esprit (savoir, discernement).",
              axe2_voisins: "La formule « in kuntum ta'lamuna » est une clausule qui ferme un argument. Le verset 2:184 conclut sur cette formule apres avoir presente toutes les options (jeune, rattrapage, compensation, volontariat). La formule interpelle le lecteur et le laisse avec une question : savez-vous que le jeune est meilleur ? La reponse est laissee au croyant — le Coran informe et laisse choisir.",
              axe3_sourate: "La racine k-w-n a deja ete analysee en pos=4. Kuntum (2MP) est la forme directe d'adresse aux croyants — le Coran les interpelle directement. La sourate al-Baqarah utilise kuntum dans de nombreuses interpellations : « kuntum khayr ummatin » (vous etes la meilleure communaute, 3:110). L'interpellation directe cree un lien entre le texte et ses destinataires.",
              axe4_coherence: "La formule « in kuntum + verbe inaccompli » est une construction coranique frequente qui lie l'identite (kuntum = vous etes) a une action (ta'lamuna = sachants). Le Coran pose l'etat de savoir comme une condition identitaire — vous etes des sachants, alors agissez en consequence. Le savoir n'est pas passif mais actif — il impose une action coherente avec ce que l'on sait.",
              axe5_frequence: "Pour la mission du khalifa, l'etre est le fondement du savoir. Le khalifa EST un sachant — il sait que le jeune est meilleur et il agit en consequence. La condition « si vous saviez » rappelle que la mission du khalifa repose sur le savoir : connaitre ses obligations, comprendre leur sagesse, et agir selon cette comprehension. Le khalifa ignorant ne peut pas accomplir sa mission — le savoir est la condition de l'action juste."
            }
          }
        }
      },
      // elm pos=32
      {
        word_key: "elm", position: 32, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "conna\u00eetre", "apprendre", "avoir connaissance", "discerner"],
              proof_ctx: "Le verbe ta'lamuna est un inaccompli 2MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, apprendre, avoir connaissance de, discerner, percevoir par l'intelligence. Le 'ilm est la connaissance certaine et fondee — il ne s'agit pas de l'opinion (zann) mais du savoir veritable. Le verbe est a l'inaccompli (ta'lamuna = vous savez / vous etes en train de savoir) — le savoir est un processus continu, pas un evenement ponctuel. La construction « in kuntum ta'lamuna » (si vous saviez) est une formule rhetorique qui ne met pas en doute le savoir mais invite a en tirer les consequences.",
              axe1_verset: "Le verbe ta'lamuna ferme le verset sur une note epistemologique. Le champ lexical (jeune, meilleur) montre que le savoir est la condition pour comprendre la superiorite du jeune. Le verset a presente les faits (jours denombrables, exemptions, compensations, volontariat, superiorite du jeune) et conclut : si vous SAVEZ tout cela, alors agissez. Le savoir est le pont entre l'information et l'action — connaitre la superiorite du jeune doit conduire a jeuner. Le verset interpelle la responsabilite intellectuelle des croyants.",
              axe2_voisins: "Le verset 2:183 prescrivait le jeune « peut-etre vous premunissez-vous (la'allakum tattaquna) ». Le verset 2:184 conclut « si vous saviez (in kuntum ta'lamuna) ». La sequence passe de la taqwa (se premunir) au 'ilm (savoir) — les deux sont lies mais distincts. La taqwa est la motivation, le 'ilm est la comprehension. Le croyant a besoin des deux : se premunir par conscience et savoir par discernement.",
              axe3_sourate: "La racine '-l-m est la racine la plus presente de la sourate al-Baqarah apres k-w-n. En 2:13, « mais c'est eux les stupides, s'ils savaient ». En 2:22, « ne donnez pas d'egaux a Dieu alors que vous savez ». En 2:30, « Je sais ce que vous ne savez pas ». En 2:184, « si vous saviez ». La sourate construit une dialectique du savoir — le savoir de Dieu (absolu), le savoir des croyants (a activer), et l'ignorance des incroyants (a denoncer). Le verset 2:184 s'adresse aux croyants en les invitant a activer leur savoir.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran — c'est une des racines les plus frequentes. Le Coran fait du savoir un pilier de la foi : « Sache qu'il n'y a de dieu que Dieu » (47:19). La formule « in kuntum ta'lamuna » apparait en 2:184 et en d'autres endroits pour inviter les croyants a tirer les consequences de leur savoir. Le Coran ne produit pas des ignorants obeissants mais des sachants responsables — le savoir fonde l'obeissance.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est le fondement de la mission. Le khalifa est celui a qui Dieu a enseigne « tous les noms » (2:31) — le savoir est sa distinction premiere. La conclusion du verset 2:184 par « si vous saviez » rappelle que la mission du khalifa est une mission de connaissance appliquee. Le khalifa sait que le jeune est meilleur, il sait que le bien volontaire est recompense, il sait que les obligations sont mesurees — et il agit selon ce savoir. Le savoir sans action est sterile ; l'action sans savoir est aveugle. Le khalifa conjugue les deux."
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

  const verseIds = [191];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 184 ===\n');
  await processVerse(184);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V184 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
