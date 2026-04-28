const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 194
// verse_id=201, analysis_id=561
// "Le Mois sacre pour le mois sacre ! Les choses sacrees
//  appellent le talion. Donc, quiconque transgresse contre
//  vous, transgressez contre lui, a la mesure de sa
//  transgression. Et premunissez-vous de Dieu et sachez
//  que Dieu est avec ceux qui se premunissent."
// Reciprocite sacree, talion proportionnel, taqwa
// =====================================================

const verseData = {
  194: {
    verse_id: 201,
    analysis_id: 561,
    translation_arab: "Le mois sacre pour le mois sacre. Les interdits appellent la reciprocite. Quiconque transgresse contre vous, transgressez contre lui a la mesure de sa transgression. Et premunissez-vous de Dieu et sachez que Dieu est avec ceux qui se premunissent.",
    full_translation: "Le Mois sacre pour le mois sacre ! Les choses sacrees appellent le talion. Donc, quiconque transgresse contre vous, transgressez contre lui, a la mesure de sa transgression. Et craignez Allah et sachez qu'Allah est avec les pieux.",
    translation_explanation: `§DEMARCHE§
Le verset pose le principe de reciprocite dans le domaine sacre. Le nom **ash-shahru** est un nom defini singulier au nominatif de la racine sh-h-r. Le Lane's donne : mois, lune, ce qui est apparent et connu, periode lunaire. Le mois est defini par l'article al- — c'est LE mois, un mois precis et connu. Le nominatif en fait le sujet d'une phrase nominale (al-shahru al-haramu bi-l-shahri al-harami) — le mois sacre est mis en equivalence avec le mois sacre. La construction « X bi-X » est une construction arabe de reciprocite : le mois sacre repond au mois sacre, comme si la violation d'un mois sacre par l'ennemi autorise la riposte dans le meme mois sacre. L'adjectif **al-haramu** est un adjectif defini de la racine h-r-m. Le Lane's donne : interdit, sacre, inviolable, ce dont la violation est interdite. L'adjectif qualifie le mois comme sacre et inviolable — un mois pendant lequel certains actes (dont le combat) sont normalement interdits. La repetition de « al-shahru al-haramu bi-l-shahri al-harami » pose le principe que si l'ennemi viole le caractere sacre du mois en attaquant, la riposte dans le meme mois sacre est autorisee. Le nom **al-hurumatu** est un nom defini feminin pluriel de la racine h-r-m. Le Lane's donne : les interdits, les choses sacrees, les inviolabilites, ce qui ne doit pas etre transgresse. Le pluriel elargit le principe du mois sacre a toutes les choses sacrees — tout ce qui est inviolable appelle la reciprocite. Le nom **qisasun** est un nom indefini singulier au nominatif de la racine q-s-s. Le Lane's donne : suivre les traces, pister, raconter, talion, reciprocite proportionnelle, equivalence dans la retribution. Le qisas est le suivi de la trace de l'agression pour y repondre a l'identique — la reciprocite est un pistage de l'action de l'agresseur pour la reproduire en retour. La phrase nominale « al-hurumatu qisasun » signifie que les interdits sacres appellent la reciprocite. Le verbe **i'tada** est un accompli 3MS de la Forme VIII de la racine '-t-d. Le Lane's donne pour la Forme VIII : transgresser, depasser les limites, agir avec hostilite, commettre une agression, aller au-dela de ce qui est permis. La Forme VIII (ifta'ala) porte un sens reflexif et intensif — le transgresseur depasse activement les limites fixees. Le verbe est dans une proposition conditionnelle introduite par « fa-man » (quiconque) — quiconque transgresse contre vous. Le pronom **alaykum** (contre vous) indique que la transgression est dirigee vers le groupe des croyants. Le verbe **i'tadu** est un imperatif 2MP de la meme Forme VIII. Le Lane's donne le meme sens : transgressez, depassez les limites contre lui. L'imperatif autorise la riposte proportionnelle — transgressez contre lui comme il a transgresse contre vous. Le mot **bi-mithli** est un nom prepositionnel de la racine m-th-l. Le Lane's donne : semblable, equivalent, pareil, a la mesure de, de la meme maniere. La preposition bi- avec mithl pose la condition de proportionnalite — la riposte doit etre a la mesure exacte de l'agression, ni plus ni moins. Le mithl est l'equivalence stricte, pas l'exces. Le verbe **ittaqu** est un imperatif 2MP de la Forme VIII de la racine w-q-y. Le Lane's donne : se premunir, se proteger, placer un bouclier entre soi et ce qu'on craint. L'imperatif ordonne aux croyants de se premunir de Dieu — de placer une protection entre eux et le chatiment divin. La mention de la taqwa apres l'autorisation de la riposte pose un garde-fou : meme en ripostant, les croyants doivent rester dans les limites de la taqwa, ne pas depasser la mesure. Le verbe **i'lamu** est un imperatif 2MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre conscient, avoir la certitude. L'imperatif ordonne de savoir — pas de croire ou d'esperer, mais de SAVOIR avec certitude. Ce que les croyants doivent savoir est que Dieu est avec les muttaqin. Le nom **al-muttaqina** est un participe actif pluriel defini de la racine w-q-y. Le Lane's donne : ceux qui se premunissent, qui se protegent, les pieux. Le muttaqi est celui qui place une protection entre lui et ce qu'il craint. Le participe actif marque une action continue — se premunir est un effort permanent. Le verset se conclut par la promesse que Dieu est avec ceux qui se premunissent — la ma'iyya (compagnie divine) est le resultat de la taqwa.

§JUSTIFICATION§
**le mois** — Le sens retenu est « mois/periode lunaire ». Le mot ash-shahru designe le mois lunaire. L'alternative « ce qui est apparent » (sens premier du Lane's) est ecartee car le contexte est temporel et juridique — il s'agit du mois sacre, pas de quelque chose de visible.

**sacre** — Le sens retenu est « interdit/sacre/inviolable ». Le mot al-haramu designe ce dont la violation est interdite. L'alternative « enceinte sacree » (haram = territoire sacre) est ecartee car le mot est ici adjectif qualifiant le mois, pas un nom designant un lieu.

**les interdits** — Le sens retenu est « les choses sacrees/inviolabilites ». Le mot al-hurumatu designe l'ensemble des choses dont la violation est interdite. L'alternative « les femmes » (hurma peut designer l'epouse) est ecartee car le contexte est juridique et porte sur les regles de reciprocite dans le domaine sacre, pas sur les personnes.

**reciprocite** — Le sens retenu est « reciprocite/equivalence dans la retribution ». Le mot qisasun vient de la racine q-s-s qui porte le sens premier de suivre les traces. L'alternative « narration/recit » (qissa = histoire) est ecartee car la construction « al-hurumatu qisasun » pose une equivalence juridique, pas un recit. Le talion est un suivi de trace : on retrace l'agression pour y repondre a l'identique. Le mot « reciprocite » est choisi plutot que « talion » car « talion » en francais courant evoque la loi du talion (oeil pour oeil) avec une connotation de vengeance, alors que le qisas coranique est une equivalence proportionnelle et encadree.

**transgresse** — Le sens retenu est « transgresser/depasser les limites ». Le verbe i'tada (Forme VIII de '-t-d) designe le fait de depasser les limites fixees et d'agir avec hostilite. L'alternative « preparer/etre pret » (sens de la Forme I a'adda) est ecartee car la Forme VIII i'tada a un sens specifique de transgression et d'agression qui est distinct du sens de preparation de la Forme I. Le Lane's est clair sur cette distinction : la Forme I '-t-d porte sur la preparation et la disponibilite, tandis que la Forme VIII porte sur le depassement des limites et l'hostilite.

**transgressez** — Meme racine a l'imperatif. L'imperatif autorise la riposte : transgressez contre lui comme il a transgresse. Le mot « transgresser » est utilise pour les deux occurrences pour maintenir la reciprocite lexicale du verset — le meme mot pour l'agression et la riposte, soulignant l'equivalence.

**a la mesure de** — Le sens retenu est « semblable/equivalent/a la mesure de ». Le mot bi-mithli pose la proportionnalite stricte. L'alternative « exemple/parabole » (mathal) est ecartee car le contexte est la mesure de la riposte — l'equivalence quantitative, pas l'illustration pedagogique.

**premunissez-vous** — Le sens retenu est « se premunir/se proteger ». Le verbe ittaqu ordonne de placer un bouclier entre soi et ce qu'on craint. L'alternative « craindre » au sens emotionnel est ecartee car le participe actif et l'imperatif marquent une action volontaire et continue — se premunir, pas simplement avoir peur.

**sachez** — Le sens retenu est « savoir/connaitre avec certitude ». Le verbe i'lamu est un imperatif qui ordonne la certitude, pas la simple croyance. L'alternative « enseigner » (Forme II 'allama) est ecartee car i'lamu est Forme I a l'imperatif — c'est savoir, pas faire savoir.

**ceux qui se premunissent** — Meme racine w-q-y au participe actif pluriel. Le mot al-muttaqina designe ceux qui pratiquent la taqwa activement et en continu. Le verset se conclut par la promesse divine d'etre avec les muttaqin — la compagnie de Dieu est le fruit de la premunition.

§CRITIQUE§
Les traductions courantes rendent « al-hurumatu qisasun » par « les choses sacrees appellent le talion ». Le mot « talion » en francais evoque la loi du talion (oeil pour oeil, dent pour dent) avec une connotation de vengeance primitive. Or le qisas coranique est une reciprocite proportionnelle et encadree — le verset ajoute immediatement « bi-mithli ma i'tada » (a la mesure de sa transgression), ce qui pose une limite stricte. Notre traduction « reciprocite » est plus fidele car elle porte l'idee d'equivalence sans la connotation vengeresse du « talion ». Le mot « ittaqu » est traduit par « craignez Allah » dans Hamidullah, ce qui reduit la taqwa a une emotion de peur. Notre traduction « premunissez-vous de Dieu » rend le sens etymologique de la racine w-q-y : placer une protection entre soi et le chatiment. La premunition est un acte volontaire et continu, pas une emotion passive. Enfin, Hamidullah traduit « Allah » par « Allah » tandis que notre traduction utilise « Dieu » — un choix de francais courant pour eviter la distinction artificielle entre le Dieu des musulmans et le Dieu des autres monotheistes, alors que le mot arabe « Allah » est le nom generique de Dieu en arabe.`,
    segments: [
      { fr: "le mois", pos: "nom", phon: "ash-shahru", arabic: "\u0671\u0644\u0634\u0651\u064e\u0647\u0652\u0631\u064f", word_key: "shhr", is_particle: false, sense_retenu: "mois", position: 0 },
      { fr: "sacre", pos: "adjectif", phon: "al-haramu", arabic: "\u0671\u0644\u0652\u062d\u064e\u0631\u064e\u0627\u0645\u064f", word_key: "hrm", is_particle: false, sense_retenu: "sacre/interdit", position: 1 },
      { fr: "pour le mois", pos: "nom", phon: "bi-l-shahri", arabic: "\u0628\u0650\u0671\u0644\u0634\u0651\u064e\u0647\u0652\u0631\u0650", word_key: "shhr", is_particle: false, sense_retenu: "mois", position: 3 },
      { fr: "sacre", pos: "adjectif", phon: "al-harami", arabic: "\u0671\u0644\u0652\u062d\u064e\u0631\u064e\u0627\u0645\u0650", word_key: "hrm", is_particle: false, sense_retenu: "sacre/interdit", position: 4 },
      { fr: "et les interdits", pos: "nom", phon: "wa-l-hurumatu", arabic: "\u0648\u064e\u0671\u0644\u0652\u062d\u064f\u0631\u064f\u0645\u064e\u0640\u0670\u062a\u064f", word_key: "hrm", is_particle: false, sense_retenu: "interdits/inviolabilites", position: 6 },
      { fr: "reciprocite", pos: "nom", phon: "qisasun", arabic: "\u0642\u0650\u0635\u064e\u0627\u0635\u064c", word_key: "qss", is_particle: false, sense_retenu: "reciprocite", position: 7 },
      { fr: "quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646\u0650", is_particle: true, position: 8 },
      { fr: "transgresse", pos: "verbe", phon: "i'tada", arabic: "\u0671\u0639\u0652\u062a\u064e\u062f\u064e\u0649\u0670", word_key: "etd", is_particle: false, sense_retenu: "transgresser", position: 10 },
      { fr: "contre vous", phon: "alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652", is_particle: true, position: 11 },
      { fr: "transgressez", pos: "verbe", phon: "fa-'tadu", arabic: "\u0641\u064e\u0671\u0639\u0652\u062a\u064e\u062f\u064f\u0648\u0627\u06df", word_key: "etd", is_particle: false, sense_retenu: "transgresser", position: 13 },
      { fr: "contre lui", phon: "alayhi", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650", is_particle: true, position: 14 },
      { fr: "a la mesure de", pos: "nom", phon: "bi-mithli", arabic: "\u0628\u0650\u0645\u0650\u062b\u0652\u0644\u0650", word_key: "mthl", is_particle: false, sense_retenu: "a la mesure de", position: 16 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 17 },
      { fr: "il a transgresse", pos: "verbe", phon: "i'tada", arabic: "\u0671\u0639\u0652\u062a\u064e\u062f\u064e\u0649\u0670", word_key: "etd", is_particle: false, sense_retenu: "transgresser", position: 18 },
      { fr: "contre vous", phon: "alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652", is_particle: true, position: 19 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 20 },
      { fr: "premunissez-vous de", pos: "verbe", phon: "ittaqu", arabic: "\u0671\u062a\u0651\u064e\u0642\u064f\u0648\u0627\u06df", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 21 },
      { fr: "Dieu", phon: "Allah", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", is_particle: true, position: 22 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 23 },
      { fr: "sachez", pos: "verbe", phon: "i'lamu", arabic: "\u0671\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u06e3\u0627\u06df", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 24 },
      { fr: "que", phon: "anna", arabic: "\u0623\u064e\u0646\u0651\u064e", is_particle: true, position: 25 },
      { fr: "Dieu", phon: "Allah", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", is_particle: true, position: 26 },
      { fr: "est avec", phon: "ma'a", arabic: "\u0645\u064e\u0639\u064e", is_particle: true, position: 27 },
      { fr: "ceux qui se premunissent", pos: "nom", phon: "al-muttaqina", arabic: "\u0671\u0644\u0652\u0645\u064f\u062a\u0651\u064e\u0642\u0650\u064a\u0646\u064e", word_key: "wqy", is_particle: false, sense_retenu: "ceux qui se premunissent", position: 28 }
    ],
    words: [
      // shhr pos=0
      {
        word_key: "shhr", position: 0, sense_chosen: "mois",
        analysis_axes: {
          sense_chosen: "mois",
          concept_chosen: "Temps/Mois",
          concepts: {
            "Temps/Mois": {
              status: "retenu",
              senses: ["mois", "lune", "periode lunaire", "mois lunaire"],
              proof_ctx: "Le nom ash-shahru est un nom defini singulier au nominatif de la racine sh-h-r. Le Lane's donne : mois, lune, periode lunaire, ce qui est apparent et bien connu. Le sens premier de la racine est « etre apparent, etre celebre, etre connu de tous ». Le mois est appele shahr parce qu'il est marque par l'apparition de la nouvelle lune — c'est une division temporelle visible et connue. Dans le verset, le mot est repete deux fois dans une construction de reciprocite (al-shahru al-haramu bi-l-shahri al-harami) — le mois sacre repond au mois sacre. Le contexte est temporel et juridique : il s'agit des mois sacres pendant lesquels le combat est normalement interdit. Si l'ennemi viole cette interdiction en attaquant pendant un mois sacre, la riposte pendant le meme mois sacre est autorisee.",
              axe1_verset: "Le mot ash-shahru ouvre le verset en posant le cadre temporel. Le champ lexical (sacre, interdits, reciprocite, transgression, mesure, premunir) tourne autour de la reciprocite dans le domaine sacre. Le mois sacre est le cadre dans lequel la reciprocite s'exerce — ce n'est pas n'importe quel moment, c'est un temps particulier ou les regles normales sont suspendues. La repetition du mot shahru dans la construction de reciprocite montre que le temps sacre n'est pas absolu mais conditionnel : sa sacralite est respectee tant que l'ennemi la respecte aussi.",
              axe2_voisins: "Le verset 2:191 autorisait le combat contre ceux qui combattent les croyants. Le verset 2:193 ordonne le combat jusqu'a ce que la persecution cesse. Le verset 2:194 traite du cas specifique du combat pendant les mois sacres. La sequence montre une progression : l'autorisation generale de combattre (191) → le but du combat (193) → les regles temporelles du combat (194). Le mois sacre est un cas particulier de la legislation du combat.",
              axe3_sourate: "La racine sh-h-r apparait dans la sourate al-Baqarah en 2:185 pour le mois de ramadan (shahru ramadana) et en 2:194 pour les mois sacres. La sourate utilise shahru pour les deux types de mois speciaux : le mois du jeune et les mois sacres. Les deux sont des periodes definies par des regles specifiques — le jeune dans l'un, l'interdiction du combat dans les autres.",
              axe4_coherence: "La racine sh-h-r apparait environ 21 fois dans le Coran. En 9:36, « le nombre de mois aupres de Dieu est douze mois, dont quatre sacres ». Les quatre mois sacres (Dhul Qi'da, Dhul Hijja, Muharram, Rajab) sont des periodes ou le combat est normalement interdit. Le Coran pose ces mois comme une institution divine qui structure le calendrier et la vie sociale. Le verset 2:194 traite du cas ou cette sacralite est violee par l'ennemi.",
              axe5_frequence: "Pour la mission du khalifa, les mois sacres structurent le temps de la mission. Le khalifa ne vit pas dans un temps uniforme — certaines periodes sont sacrees et imposent des regles specifiques. Le respect des mois sacres est un signe de civilisation et d'ordre — le khalifa respecte le temps sacre parce qu'il respecte l'ordre divin. Mais si l'ennemi viole cet ordre, le khalifa a le droit de riposter dans les memes conditions pour retablir la justice."
            },
            "Apparence/Celebrite": {
              status: "nul",
              senses: ["etre apparent", "etre celebre", "etre connu de tous", "renommee"],
              proof_ctx: "Le sens d'apparence et de celebrite est le sens etymologique premier de la racine sh-h-r — etre visible, etre connu. Mais dans le verset 2:194, le mot est utilise dans son sens temporel derive (le mois) et non dans son sens premier d'apparition. Le contexte est la reciprocite dans les mois sacres, pas la visibilite ou la renommee."
            }
          }
        }
      },
      // hrm pos=1
      {
        word_key: "hrm", position: 1, sense_chosen: "sacre/interdit",
        analysis_axes: {
          sense_chosen: "sacre/interdit",
          concept_chosen: "Interdiction/Sacré",
          concepts: {
            "Interdiction/Sacré": {
              status: "retenu",
              senses: ["interdit", "sacre", "inviolable", "ce dont la violation est interdite", "haram", "sanctuaire"],
              proof_ctx: "L'adjectif al-haramu est un adjectif defini de la racine h-r-m. Le Lane's donne : interdit, sacre, inviolable, ce dont la violation est punie, ce qui est protege par une interdiction. Le haram est ce qui est place hors d'atteinte par une interdiction divine ou sociale — la chose sacree n'est pas simplement respectee mais protegee par un interdit. Le concept couvre a la fois l'adjectif qualifiant le mois (al-shahru al-haramu = le mois sacre/interdit) et le pluriel designant les choses sacrees (al-hurumatu = les interdits/inviolabilites). La sacralite est une propriete directive — elle sort de l'autorite divine et atteint les choses qu'elle protege. Elle est permanente dans son principe mais conditionnelle dans son application : le verset montre que la reciprocite s'applique quand l'ennemi viole le sacre. Le sacre n'est pas un bouclier unilateral — il protege ceux qui le respectent et s'effondre pour ceux qui le transgressent.",
              axe1_verset: "Le mot al-haramu qualifie le mois et revient trois fois dans le verset (al-haramu, al-harami, al-hurumatu). Le champ lexical (mois, reciprocite, transgression, mesure, premunir) tourne autour du sacre comme cadre juridique. La repetition triple de la racine h-r-m martele le theme de l'inviolabilite — le sacre est omnipresent dans ce verset. Le passage du singulier (al-haramu/al-harami qualifiant le mois) au pluriel (al-hurumatu designant toutes les choses sacrees) elargit le principe : ce n'est pas seulement le mois sacre, ce sont toutes les inviolabilites qui appellent la reciprocite.",
              axe2_voisins: "Le verset 2:191 mentionne « la Mosquee sacree (al-masjidi al-harami) » comme lieu ou le combat est interdit sauf si l'ennemi y combat. Le verset 2:194 mentionne « le mois sacre (al-shahri al-harami) » avec le meme principe de reciprocite. La sequence montre que le haram s'applique au lieu (la Mosquee sacree) et au temps (le mois sacre) — les deux dimensions sont protegees par le meme interdit, et la violation par l'ennemi autorise la meme riposte.",
              axe3_sourate: "La racine h-r-m est tres frequente dans la sourate al-Baqarah. En 2:144, la direction de priere est la Mosquee sacree (al-masjidi al-harami). En 2:173, la viande de porc et le sang sont rendus interdits (hurrima). En 2:196, le pelerinage au lieu sacre. En 2:194, le mois sacre et les inviolabilites. La sourate utilise h-r-m pour tout ce qui est protege par un interdit divin — lieux, temps, aliments, actes. Le sacre dans la sourate est un systeme complet qui couvre tous les aspects de la vie.",
              axe4_coherence: "La racine h-r-m apparait environ 83 fois dans le Coran. En 5:1, « ne violez pas les symboles sacres de Dieu, ni le mois sacre ». En 5:2, « quand vous etes desacralises, chassez ». En 5:97, « Dieu a fait de la Ka'ba, la Maison sacree, un lieu de rassemblement pour les gens ». Le Coran construit un systeme de sacralite qui protege certains lieux, moments et actes. La sacralite est un cadre de civilisation — elle impose des limites au comportement humain pour empecher le chaos.",
              axe5_frequence: "Pour la mission du khalifa, le sacre est le cadre de la mission. Le khalifa vit dans un monde ou certaines choses sont sacrees — protegees par un interdit qui structure la vie sociale. Le respect du sacre est un signe de civilisation : le khalifa ne viole pas les interdits parce qu'il comprend que la sacralite empeche le chaos. Mais le verset montre que le sacre n'est pas une faiblesse — si l'ennemi viole le sacre, le khalifa a le droit et le devoir de riposter a la meme mesure."
            }
          }
        }
      },
      // qss pos=7
      {
        word_key: "qss", position: 7, sense_chosen: "reciprocite",
        analysis_axes: {
          sense_chosen: "reciprocite",
          concept_chosen: "Suivi/Pistage",
          concepts: {
            "Suivi/Pistage": {
              status: "retenu",
              senses: ["suivre les traces", "pister", "talion", "reciprocite proportionnelle", "retribution equivalente", "suivre"],
              proof_ctx: "Le nom qisasun est un nom indefini singulier au nominatif de la racine q-s-s. Le Lane's donne : suivre les traces de quelqu'un, pister, raconter une histoire (suivre le fil du recit), talion, reciprocite proportionnelle, retribution a mesure egale. Le sens premier est le pistage — suivre les traces laissees par quelqu'un ou quelque chose. Le qisas (talion/reciprocite) est une extension de ce sens : on « piste » l'agression commise et on la reproduit a l'identique en retour. La reciprocite est un acte exterieur et directif — elle sort du groupe agresse et atteint l'agresseur. Elle est proportionnelle par definition : le pistage suit la trace exacte, ni plus ni moins. Le mot qisasun est attribut dans la phrase nominale « al-hurumatu qisasun » — les interdits SONT reciprocite. Ce n'est pas qu'ils appellent la reciprocite — ils sont eux-memes reciprocite, par nature.",
              axe1_verset: "Le mot qisasun est le pivot semantique du verset — il pose le principe de reciprocite qui gouverne tout le reste. Le champ lexical (mois sacre, interdits, transgression, mesure, premunir) tourne autour de la reciprocite comme loi fondamentale. La phrase « al-hurumatu qisasun » etablit que toutes les inviolabilites fonctionnent par reciprocite : si tu respectes mon sacre, je respecte le tien ; si tu violes mon sacre, je viole le tien a la meme mesure. Le verset developpe ensuite ce principe dans le cas concret de la transgression (i'tada). Le mot qisasun revient du verset 2:178 ou il designait le talion pour le meurtre — ici il est elargi a toutes les inviolabilites.",
              axe2_voisins: "Le verset 2:178 introduisait le qisas pour le meurtre : « il vous est prescrit le qisas dans le meurtre ». Le verset 2:194 elargit le qisas a toutes les inviolabilites. La sequence montre une generalisation progressive : du cas particulier (le meurtre) au principe general (toutes les choses sacrees). Le qisas n'est pas seulement la loi du talion pour le meurtre — c'est le principe universel de reciprocite proportionnelle qui gouverne toutes les relations ou le sacre est en jeu.",
              axe3_sourate: "La racine q-s-s apparait dans la sourate al-Baqarah en 2:178 (le qisas dans le meurtre) et en 2:194 (le qisas dans les inviolabilites). Les deux occurrences posent le qisas comme un principe de justice proportionnelle. La sourate utilise le qisas comme un outil legislatif — pas une vengeance aveugle mais une retribution mesuree et encadree. Le passage de 2:178 a 2:194 montre que la sourate construit un droit penal complet fonde sur la reciprocite.",
              axe4_coherence: "La racine q-s-s apparait environ 30 fois dans le Coran. En 5:45, « Nous y avons prescrit pour eux : ame pour ame, oeil pour oeil, nez pour nez, oreille pour oreille, dent pour dent — et les blessures sont reciprocite (qisas) ». En 2:179, « et dans le qisas il y a vie pour vous, o doues d'intelligence ». Le Coran presente le qisas comme un principe de vie, pas de mort — la reciprocite proportionnelle empeche l'escalade de la violence et preserve la vie sociale.",
              axe5_frequence: "Pour la mission du khalifa, la reciprocite est un pilier de la justice. Le khalifa ne laisse pas l'agression impunie — mais il ne depasse pas non plus la mesure de la riposte. Le qisas est l'equilibre entre le laxisme (laisser faire l'injustice) et l'exces (punir au-dela de la mesure). Le khalifa qui pratique le qisas maintient l'ordre social sans tomber dans l'oppression. La reciprocite est la forme la plus pure de la justice — rendre exactement ce qui a ete pris, ni plus ni moins."
            },
            "Narration/Récit": {
              status: "peu_probable",
              senses: ["raconter", "narrer", "recit", "histoire", "suivre le fil d'un recit"],
              proof_ctx: "Le sens de narration est bien atteste dans le Lane's pour la racine q-s-s — le qasas est le recit, le fait de suivre le fil d'une histoire. Le Coran utilise « naqussu alayka ahsana al-qasas » (12:3 : nous te racontons le meilleur des recits). Mais dans le verset 2:194, le mot qisasun est attribut de al-hurumatu (les inviolabilites) dans une phrase nominale juridique. Les inviolabilites ne sont pas un recit — elles sont un principe de reciprocite. La distinction philosophique est que la narration suit le fil d'une histoire deja passee, tandis que la reciprocite suit la trace d'une agression pour y repondre dans le present. Le contexte legislatif du verset (apres les versets sur le combat 2:190-193) impose le sens juridique.",
              axe1_verset: "Le mot qisasun dans le champ lexical du verset (mois sacre, interdits, transgression, mesure) ne peut pas designer un recit. Le verset ne raconte rien — il pose une regle juridique de reciprocite. Les inviolabilites ne sont pas une histoire a raconter mais un principe a appliquer. Le verset developpe immediatement le qisas en termes concrets de transgression et de riposte proportionnelle, ce qui confirme le sens juridique.",
              axe2_voisins: "Les versets voisins 2:190-193 traitent du combat et de ses regles. Le verset 2:194 est dans un contexte purement legislatif et martial. Le sens de narration serait completement hors sujet dans cette section. Le verset 2:178 utilisait deja qisas dans le sens de talion — la meme utilisation juridique est reprise en 2:194.",
              axe3_sourate: "La sourate al-Baqarah contient certes des recits (histoire de Moise, d'Adam, d'Ibrahim), mais les versets 2:190-195 sont une section purement legislative. Le qisas en 2:194 est dans cette section legislative, pas dans une section narrative.",
              axe4_coherence: "Le Coran utilise la racine q-s-s dans les deux sens : narration (12:3, 28:25) et talion/reciprocite (2:178, 2:194, 5:45). Le contexte determine le sens a chaque occurrence. En 2:194, le contexte est clairement juridique.",
              axe5_frequence: "La narration ne contribue pas a la mission du khalifa dans ce contexte precis. Le verset traite de justice et de reciprocite dans le combat, pas de recits."
            }
          }
        }
      },
      // etd pos=10
      {
        word_key: "etd", position: 10, sense_chosen: "transgresser",
        analysis_axes: {
          sense_chosen: "transgresser",
          concept_chosen: "Transgression/Excès",
          concepts: {
            "Transgression/Excès": {
              status: "retenu",
              senses: ["transgresser", "depasser les limites", "agir avec hostilite", "agresser", "commettre une injustice", "aller au-dela de ce qui est permis"],
              proof_ctx: "Le verbe i'tada est un accompli 3MS de la Forme VIII (ifta'ala) de la racine '-t-d. Le Lane's donne pour la Forme VIII i'tada : transgresser les limites, depasser les bornes, agir avec hostilite et agression, aller au-dela de ce qui est permis, commettre une injustice envers quelqu'un. La Forme VIII porte un sens reflexif et intensif — le transgresseur s'engage activement dans le depassement des limites. La transgression est un acte exterieur et directif : elle sort du transgresseur et atteint celui qui la subit. Elle est dirigee avec la preposition 'ala (contre/sur) — i'tada alaykum (il a transgresse contre vous). L'agression depasse un seuil fixe — les limites du permis — et entre dans le domaine de l'interdit. Le verbe apparait trois fois dans le verset (i'tada alaykum, fa-'tadu alayhi, ma i'tada alaykum) pour marquer la reciprocite : la meme transgression est retournee contre l'agresseur. La Forme VIII est distincte de la Forme I (a'adda = preparer, rendre pret) et de la Forme IV (a'tadda = preparer quelque chose pour quelqu'un). La Forme VIII est specifiquement celle de la transgression et de l'hostilite.",
              axe1_verset: "Le verbe i'tada est le verbe central du verset — il est repete trois fois pour marquer la reciprocite. Le champ lexical (mois sacre, interdits, reciprocite, mesure, premunir) montre que la transgression est l'acte qui declenche la reciprocite. Le verset pose une condition (fa-man i'tada alaykum = quiconque transgresse contre vous) et une consequence (fa-'tadu alayhi = transgressez contre lui). Le meme verbe pour l'agression et pour la riposte souligne l'equivalence exacte entre les deux — la riposte est une transgression en retour, a la meme mesure. La construction avec 'ala (contre) montre que la transgression est dirigee vers l'exterieur — elle atteint celui qui la subit.",
              axe2_voisins: "Le verset 2:190 utilisait deja la meme racine : « wa la ta'tadu » (et ne transgressez pas). Le verset 2:190 interdisait l'exces dans le combat — ne pas depasser les limites. Le verset 2:194 autorise la riposte proportionnelle : transgressez contre l'agresseur a la mesure de sa transgression. Les deux versets utilisent la meme racine pour poser les deux faces de la regle : l'interdiction de l'exces (190) et l'autorisation de la reciprocite mesuree (194). La coherence entre les deux versets est parfaite — la transgression est interdite quand elle est un exces, mais autorisee quand elle est une riposte proportionnelle.",
              axe3_sourate: "La racine '-t-d apparait dans la sourate al-Baqarah en 2:61 (sens de preparation dans certaines lectures), 2:178, 2:190 et 2:194. En 2:190, « ne transgressez pas (la ta'tadu) ». En 2:194, i'tada est repete trois fois. La sourate utilise la racine pour poser les limites du combat : ne pas transgresser (190) mais riposter proportionnellement quand on est agresse (194). La transgression est le concept cle de la legislation sur le combat dans la sourate — elle definit ce qui est permis et ce qui ne l'est pas.",
              axe4_coherence: "La racine '-t-d apparait environ 32 fois dans le Coran sous la Forme VIII (i'tada). En 5:87, « ne transgressez pas — Dieu n'aime pas les transgresseurs ». En 7:55, « invoquez-Le avec humilite et en secret — Il n'aime pas les transgresseurs (al-mu'tadina) ». En 65:1, « quiconque transgresse les limites de Dieu s'est fait du tort a lui-meme ». Le Coran utilise i'tada systematiquement pour le depassement des limites fixees par Dieu. Le transgresseur est celui qui ne respecte pas les bornes — qu'il s'agisse du combat, du culte ou du comportement social. Le verset 2:194 est unique en ce qu'il utilise le meme mot pour l'agression et la riposte autorisee.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est l'antithese de la mission. Le khalifa est celui qui maintient l'ordre et respecte les limites — il ne transgresse pas. Mais le verset montre que face a l'agression, le khalifa a le droit de riposter a la meme mesure. La riposte proportionnelle n'est pas une transgression au sens moral — c'est un retablissement de l'equilibre. Le khalifa qui riposte a la mesure de l'agression empeche la corruption de s'installer sans tomber dans l'exces."
            },
            "Préparation/Disponibilité": {
              status: "nul",
              senses: ["preparer", "rendre pret", "mettre a disposition", "appreter"],
              proof_ctx: "Le sens de preparation appartient a la Forme I et a la Forme IV de la racine '-t-d (a'adda = preparer). La Forme VIII (i'tada) a un sens completement different : transgresser et depasser les limites. Le Lane's distingue clairement les deux : la preparation (Forme I/IV) est un acte constructif de mise en disponibilite, tandis que la transgression (Forme VIII) est un acte destructif de depassement des bornes. Dans le verset 2:194, le verbe est clairement a la Forme VIII (i'tada, fa-'tadu) avec le sens de transgression, pas de preparation. La preposition 'ala (contre) confirme le sens hostile."
            }
          }
        }
      },
      // mthl pos=16
      {
        word_key: "mthl", position: 16, sense_chosen: "a la mesure de",
        analysis_axes: {
          sense_chosen: "a la mesure de",
          concept_chosen: "Ressemblance/Exemple",
          concepts: {
            "Ressemblance/Exemple": {
              status: "retenu",
              senses: ["semblable", "equivalent", "pareil", "a la mesure de", "exemple", "parabole", "similitude"],
              proof_ctx: "Le nom bi-mithli est un nom prepositionnel de la racine m-th-l. Le Lane's donne : semblable, equivalent, pareil, ce qui est egal en quantite ou en qualite, exemple, similitude, parabole. Le mithl est ce qui correspond exactement a autre chose — une equivalence stricte entre deux realites. La preposition bi- (avec, par, a la mesure de) avec mithl cree l'expression de proportionnalite : « bi-mithli ma i'tada alaykum » signifie « a la mesure de ce qu'il a transgresse contre vous ». Le mithl est l'instrument de la justice proportionnelle — il garantit que la riposte ne depasse pas l'agression. Le concept de ressemblance est a la fois quantitatif (la meme mesure) et qualitatif (de la meme nature). La riposte doit etre equivalente, pas identique dans sa forme mais dans sa mesure.",
              axe1_verset: "Le mot bi-mithli est la cle de voute de la proportionnalite dans le verset. Le champ lexical (reciprocite, transgression, premunir) montre que la mesure est le garde-fou de la riposte. Sans bi-mithli, la riposte pourrait etre disproportionnee — le mot impose l'equivalence. Le verset ne dit pas « transgressez contre lui autant que vous voulez » mais « transgressez contre lui A LA MESURE de sa transgression ». La mention de la taqwa juste apres (ittaqu Allaha) confirme que la proportionnalite est un devoir, pas une option. Le mithl empeche l'escalade — il pose une borne superieure a la riposte.",
              axe2_voisins: "Le verset 2:178 posait le qisas dans le meurtre avec des regles de proportionnalite. Le verset 2:190 interdisait l'exces (la ta'tadu). Le verset 2:194 pose la proportionnalite explicitement avec bi-mithli. La sequence montre que toute la legislation sur le combat est encadree par la proportionnalite — le qisas est proportionnel par nature (2:178), l'exces est interdit (2:190), et la riposte est a la mesure de l'agression (2:194).",
              axe3_sourate: "La racine m-th-l apparait dans la sourate al-Baqarah en 2:17, 2:26 (les paraboles), 2:194 (la mesure). En 2:26, Dieu donne des paraboles (amthal) pour illustrer la verite. En 2:194, mithl designe l'equivalence quantitative. La sourate utilise la racine dans ses deux sens principaux : la parabole (illustration) et l'equivalence (proportionnalite). Les deux sens partagent l'idee de correspondance — la parabole correspond a la realite qu'elle illustre, la riposte correspond a l'agression qu'elle retribue.",
              axe4_coherence: "La racine m-th-l apparait environ 169 fois dans le Coran. En 6:160, « celui qui vient avec une bonne action en aura dix fois son equivalent (amthaliha) ». En 42:40, « la retribution d'un mal est un mal equivalent (mithluha) ». Le Coran utilise mithl comme unite de mesure de la justice — la retribution est a la mesure de l'acte, dans les deux sens (recompense et punition). Le verset 2:194 s'inscrit dans ce principe universel d'equivalence.",
              axe5_frequence: "Pour la mission du khalifa, la proportionnalite est le coeur de la justice. Le khalifa ne punit pas au-dela de la mesure de l'offense — il retablit l'equilibre sans le desequilibrer dans l'autre sens. Le mithl empeche l'oppression sous couvert de justice : la riposte ne doit pas depasser l'agression. Le khalifa qui respecte le mithl incarne la justice proportionnelle qui empeche l'escalade de la violence et preserve l'ordre social."
            }
          }
        }
      },
      // wqy pos=21
      {
        word_key: "wqy", position: 21, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              senses: ["se premunir", "se proteger", "prendre garde", "preserver", "craindre", "piete", "bouclier"],
              proof_ctx: "Le verbe ittaqu est un imperatif 2MP de la Forme VIII de la racine w-q-y. Le Lane's donne : se premunir, se proteger, placer un bouclier (wiqaya) entre soi et ce qu'on craint, prendre garde, eviter le danger. La taqwa est l'acte de placer une protection entre soi et le chatiment divin — le muttaqi se protege en obeissant aux commandements. L'imperatif ordonne la premunition comme un acte volontaire et actif, pas comme une emotion passive. Le verbe apparait deux fois dans le verset : une fois comme imperatif (ittaqu = premunissez-vous) et une fois comme participe actif pluriel (al-muttaqina = ceux qui se premunissent). La repetition lie l'ordre a sa recompense : premunissez-vous, car Dieu est avec ceux qui se premunissent. La mention de la taqwa apres l'autorisation de la riposte proportionnelle pose un garde-fou : meme en ripostant, il faut se premunir de Dieu, c'est-a-dire ne pas depasser la mesure permise.",
              axe1_verset: "Le verbe ittaqu est le premier des deux imperatifs finaux du verset (ittaqu + i'lamu). Le champ lexical (reciprocite, transgression, mesure) montre que la taqwa est le cadre moral de la reciprocite. Le verset autorise la riposte proportionnelle MAIS ordonne immediatement la taqwa — la premunition empeche l'exces. Le verset construit un equilibre : le droit de riposter (fa-'tadu alayhi) est encadre par la proportionnalite (bi-mithli) et par la taqwa (ittaqu Allaha). Le muttaqi riposterait a la mesure de l'agression sans depasser la limite, parce qu'il se premunit du chatiment qui frappe les excessifs.",
              axe2_voisins: "Le verset 2:189 se terminait par « ittaqu Allaha » (premunissez-vous de Dieu). Le verset 2:194 se termine par « ittaqu Allaha wa-'lamu anna Allaha ma'a al-muttaqina » (premunissez-vous de Dieu et sachez que Dieu est avec ceux qui se premunissent). La repetition de ittaqu dans les versets voisins montre que la taqwa est le fil conducteur de toute cette section legislative — chaque regle est assortie d'un rappel a la premunition.",
              axe3_sourate: "La racine w-q-y est presente des le debut de la sourate al-Baqarah. En 2:2, le Livre est « une guidance pour les muttaqin ». En 2:21, « peut-etre vous premunissez-vous ». En 2:180, « un devoir pour ceux qui se premunissent ». En 2:194, la taqwa est le garde-fou de la riposte. La sourate construit la taqwa comme le moteur de l'obeissance — chaque obligation est adressee aux muttaqin ou assortie d'un ordre de taqwa.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. En 3:76, « Dieu aime les muttaqin ». En 49:13, « le plus noble d'entre vous aupres de Dieu est le plus premuni (atqakum) ». En 2:194, « Dieu est avec les muttaqin ». Le Coran fait de la taqwa la qualite supreme — elle determine le rang aupres de Dieu, la compagnie divine, et l'amour de Dieu. La mention « Dieu est avec les muttaqin » en 2:194 est une promesse de soutien divin pour ceux qui ripostent avec mesure et premunition.",
              axe5_frequence: "Pour la mission du khalifa, la taqwa est le moteur de la mission. Le khalifa se premunit de Dieu en respectant les limites dans tous ses actes — y compris dans la riposte contre l'agression. Le muttaqi ne riposte pas par vengeance mais par devoir de justice, et il ne depasse pas la mesure parce qu'il craint les consequences de l'exces. La taqwa transforme la riposte d'un acte de vengeance en un acte de justice proportionnelle."
            }
          }
        }
      },
      // elm pos=24
      {
        word_key: "elm", position: 24, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre conscient", "certitude", "connaissance", "science"],
              proof_ctx: "Le verbe i'lamu est un imperatif 2MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre conscient de, avoir la certitude de, apprendre, etre informe. Le 'ilm est la connaissance certaine et verifiee — pas la croyance, pas l'opinion, mais le savoir ferme. L'imperatif ordonne le savoir comme un acte de l'esprit — les croyants doivent SAVOIR (pas simplement croire ou esperer) que Dieu est avec les muttaqin. Le savoir est un acte interieur mais ses effets sont exterieurs : celui qui sait que Dieu est avec les muttaqin agit en consequence. La certitude transforme le comportement — savoir que Dieu est avec les premunisseurs motive la taqwa.",
              axe1_verset: "Le verbe i'lamu est le deuxieme imperatif final du verset, apres ittaqu. Le champ lexical (premunir, Dieu, muttaqin) montre que le savoir est le fondement de la taqwa. Le verset construit une progression : premunissez-vous (ordre) → sachez que Dieu est avec les muttaqin (motivation). La taqwa est l'acte, le savoir est la raison de l'acte. Le verset ne dit pas « croyez » mais « sachez » (i'lamu) — la certitude est plus forte que la croyance. Le contenu du savoir est une promesse : Dieu est AVEC (ma'a) ceux qui se premunissent — la compagnie divine est le fruit de la taqwa.",
              axe2_voisins: "Le verset 2:193 se terminait par une mention de Dieu comme voyant (basir). Le verset 2:194 se termine par la mention de Dieu comme compagnon des muttaqin. La sequence montre deux attributs divins : Dieu voit (basir) et Dieu accompagne (ma'a). La vision divine observe les actes, la compagnie divine soutient les pieux. Le savoir (i'lamu) lie les deux : les croyants doivent savoir que Dieu voit ET qu'Il accompagne.",
              axe3_sourate: "La racine '-l-m est omnipresente dans la sourate al-Baqarah. En 2:13, « ils ne savent pas (la ya'lamuna) ». En 2:22, « ne donnez pas a Dieu des egaux alors que vous savez (wa antum ta'lamuna) ». En 2:30, « Je sais ce que vous ne savez pas ». En 2:194, l'imperatif i'lamu ordonne le savoir. La sourate oppose le savoir divin (total et absolu) au savoir humain (partiel et acquis). L'imperatif i'lamu pousse les croyants a combler l'ecart entre leur ignorance et le savoir que Dieu leur revele.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran — c'est l'une des racines les plus frequentes. L'imperatif i'lamu (sachez) apparait dans de nombreux versets pour introduire une verite fondamentale que les croyants doivent integrer : « sachez que Dieu est severe en chatiment » (2:196), « sachez que Dieu voit ce que vous faites » (2:233), « sachez que Dieu est avec les muttaqin » (2:194, 9:36). Le Coran utilise l'imperatif du savoir pour fixer des certitudes, pas des opinions.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est le fondement de la mission. Le khalifa agit sur la base du savoir, pas de l'ignorance ou de l'opinion. Savoir que Dieu est avec les muttaqin est une certitude qui motive l'action juste et proportionnelle. Le khalifa qui sait ne depasse pas les limites parce qu'il sait que Dieu est avec ceux qui se premunissent — et pas avec ceux qui transgressent. Le savoir transforme la connaissance abstraite en comportement concret."
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

  const verseIds = [201];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 194 ===\n');
  await processVerse(194);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V194 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
