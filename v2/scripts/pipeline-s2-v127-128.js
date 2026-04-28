const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 127-128
// V127: verse_id=134, analysis_id=494
// V128: verse_id=135, analysis_id=496
// =====================================================

const verseData = {
  127: {
    verse_id: 134,
    analysis_id: 494,
    translation_arab: "Et quand Abraham et Ismael elevaient les assises de la Maison : « Notre Seigneur, accepte de nous, en verite Tu es Celui qui entend tout, Celui qui sait tout. »",
    full_translation: "Et quand Abraham et Ismael elevaient les assises de la Maison: «O notre Seigneur, accepte ceci de notre part! Car c'est Toi l'Audient, l'Omniscient».",
    translation_explanation: `§DEMARCHE§
Le verset decrit une scene du passe : Abraham et Ismael en train d'elever les fondations de la Maison sacree, tout en adressant une invocation a leur Seigneur. Le verbe **yarfa'u** est un inaccompli 3MS de la racine r-f-' avec sujet Ibrahim. Le Lane's donne : elever, lever, hausser, porter vers le haut. L'inaccompli dans un contexte passe (introduit par idh) donne une image vivante — le texte fait voir la scene comme si elle se deroulait maintenant. L'action d'elever est physique et concrete : porter les pierres et les placer en hauteur. Le nom **Ibrahim** est un nom propre etranger (non arabe), designant le patriarche Abraham. Il est au nominatif comme sujet du verbe. Le nom **al-qawa'ida** est un pluriel feminin de qa'ida, de la racine q-'-d. Le Lane's donne : base, fondation, assise — ce qui est pose au sol et sert de support a ce qui est construit dessus. Le pluriel indique que les fondations sont multiples (chaque mur a sa base). L'article defini (al-) montre que ce sont les fondations connues — celles de la Maison. La preposition **mina** (de) relie les fondations a la Maison — ce sont les fondations DE la Maison. Le nom **al-bayti** est un nom masculin singulier defini genitif de la racine b-y-t. Le Lane's donne : maison, demeure, lieu ou l'on passe la nuit. L'article defini (al-Bayt) sans autre precision designe la Maison sacree — la Kaaba. Le mot al-Bayt est devenu un nom propre par l'usage — quand le Coran dit « la Maison » sans qualifier, c'est la Kaaba. Le nom **Isma'ilu** est un nom propre etranger (non arabe), designant le fils d'Abraham. Il est au nominatif comme sujet coordonne avec Ibrahim. Le nom **rabbana** est un nom masculin singulier de la racine r-b-b avec pronom suffixe 1MP (na). Le Lane's donne : seigneur, maitre, celui qui eleve, celui qui possede et entretient. Le vocatif « rabbana » (notre Seigneur) est un appel direct — Abraham et Ismael s'adressent a Dieu comme a Celui qui les possede, les eleve et les entretient. Le verbe **taqabbal** est un imperatif 2MS de la forme V de la racine q-b-l. Le Lane's donne : accepter avec agrement, agreer. La forme V (tafa''ala) ajoute l'idee de recevoir avec bonne grace — pas simplement recevoir, mais agreer avec satisfaction. L'imperatif est une invocation — Abraham et Ismael demandent a Dieu d'agreer leur travail. La preposition **minna** (de nous) precise l'origine de l'offrande — c'est de leur part, de leurs mains, de leur effort. La particule **innaka** (en verite tu) introduit une proposition emphatique — la raison de leur confiance en l'agrement. Le pronom **anta** (toi) est un pronom emphatique de 2e personne qui renforce l'affirmation : c'est TOI, pas un autre. L'adjectif **as-sami'u** est un adjectif qualificatif defini de la racine s-m-'. Le Lane's donne : celui qui entend, celui qui percoit les sons. L'article defini (as-sami') donne un sens absolu — Celui qui entend tout, sans limite. L'adjectif **al-'alimu** est un adjectif qualificatif defini de la racine '-l-m. Le Lane's donne : celui qui sait, celui qui connait. L'article defini (al-'alim) donne un sens absolu — Celui qui sait tout. Les deux attributs (Celui qui entend, Celui qui sait) ferment l'invocation en rappelant que Dieu percoit leur priere (Il entend) et connait leurs intentions (Il sait).

§JUSTIFICATION§
**elevaient** — Le sens retenu est « elever ». Le verbe yarfa'u decrit l'acte physique de lever les pierres pour construire les fondations. L'alternative « enlever/supprimer » est ecartee car le contexte est la construction, pas la demolition.

**Abraham** — Nom propre du patriarche. Pas de choix de sens a faire.

**les assises** — Le sens retenu est « fondation/base ». Le mot al-qawa'ida (pluriel de qa'ida) designe ce qui est pose au sol et sert de support. Le sens de « s'asseoir » est ecarte car le mot est ici un nom (les bases), pas un verbe d'action. « Assises » est choisi car il rend l'idee de ce qui est assis, pose solidement au sol.

**la Maison** — Le sens retenu est « maison/demeure ». Le mot al-Bayt avec l'article defini designe la Maison sacree (la Kaaba). L'alternative « passer la nuit » est ecartee car le mot est un nom defini, pas un verbe.

**Ismael** — Nom propre du fils d'Abraham. Pas de choix de sens a faire.

**notre Seigneur** — Le sens retenu est « seigneur/maitre ». Le mot rabb avec le possessif « na » (notre) designe Celui qui possede et eleve. Le sens de « croissance » est ecarte car le mot est un vocatif — ils s'adressent a une personne, pas a un processus.

**accepte** — Le sens retenu est « agreer/accepter ». Le verbe taqabbal (forme V) signifie recevoir avec agrement. L'alternative « orientation/direction » est ecartee car le contexte est l'invocation, pas un deplacement.

**Toi** — Pronom emphatique de 2e personne. Renforce l'identification de l'interlocuteur.

**Celui qui entend** — Le sens retenu est « entendre ». L'adjectif as-sami'u designe celui qui percoit tout. L'alternative « reputation » est ecartee car l'adjectif qualifie Dieu dans une invocation — c'est Sa capacite d'ecoute, pas Sa renommee.

**Celui qui sait** — Le sens retenu est « savoir ». L'adjectif al-'alimu designe celui qui connait tout. L'alternative « signe/marque » est ecartee car le contexte est la connaissance, pas le marquage.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere tres similaire. Hamidullah traduit « elevaient les assises de la Maison » comme nous. La seule difference notable est que certaines traductions ajoutent un vocatif « O » devant « notre Seigneur » — nous le gardons implicite comme dans le texte arabe. Le mot « Audient » utilise par Hamidullah est un neologisme — nous preferons « Celui qui entend tout » qui est plus naturel en francais courant. De meme « Omniscient » est remplace par « Celui qui sait tout » pour rester dans un registre accessible.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "quand", phon: "idh", arabic: "\u0625\u0650\u0630\u0652", is_particle: true, position: 1 },
      { fr: "elevait", pos: "verbe", phon: "yarfa'u", arabic: "\u064a\u064e\u0631\u0652\u0641\u064e\u0639\u064f", word_key: "rfe", is_particle: false, sense_retenu: "elever", position: 2 },
      { fr: "Abraham", pos: "nom", phon: "Ibrahim", arabic: "\u0625\u0650\u0628\u0652\u0631\u064e\u0670\u0647\u0650\u06e7\u0645\u064f", word_key: "abr", is_particle: false, sense_retenu: "Abraham", position: 3 },
      { fr: "les assises", pos: "nom", phon: "al-qawa'ida", arabic: "\u0671\u0644\u0652\u0642\u064e\u0648\u064e\u0627\u0639\u0650\u062f\u064e", word_key: "qwed", is_particle: false, sense_retenu: "fondation", position: 4 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 5 },
      { fr: "la Maison", pos: "nom", phon: "al-bayti", arabic: "\u0671\u0644\u0652\u0628\u064e\u064a\u0652\u062a\u0650", word_key: "byt", is_particle: false, sense_retenu: "maison", position: 6 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 7 },
      { fr: "Ismael", pos: "nom", phon: "Isma'ilu", arabic: "\u0625\u0650\u0633\u0652\u0645\u064e\u0670\u0639\u0650\u064a\u0644\u064f", word_key: "sme", is_particle: false, sense_retenu: "Ismael", position: 8 },
      { fr: "notre Seigneur", pos: "nom", phon: "rabbana", arabic: "\u0631\u064e\u0628\u0651\u064e\u0646\u064e\u0627", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 9 },
      { fr: "accepte", pos: "verbe", phon: "taqabbal", arabic: "\u062a\u064e\u0642\u064e\u0628\u0651\u064e\u0644\u0652", word_key: "qbl", is_particle: false, sense_retenu: "agreer", position: 10 },
      { fr: "de nous", phon: "minna", arabic: "\u0645\u0650\u0646\u0651\u064e\u0622", is_particle: true, position: 11 },
      { fr: "en verite tu es", phon: "innaka", arabic: "\u0625\u0650\u0646\u0651\u064e\u0643\u064e", is_particle: true, position: 12 },
      { fr: "Toi", pos: "nom", phon: "anta", arabic: "\u0623\u064e\u0646\u062a\u064e", word_key: "ant", is_particle: false, sense_retenu: "toi", position: 13 },
      { fr: "Celui qui entend", pos: "adjectif", phon: "as-sami'u", arabic: "\u0671\u0644\u0633\u0651\u064e\u0645\u0650\u064a\u0639\u064f", word_key: "sme", is_particle: false, sense_retenu: "entendre", position: 14 },
      { fr: "Celui qui sait", pos: "adjectif", phon: "al-'alimu", arabic: "\u0671\u0644\u0652\u0639\u064e\u0644\u0650\u064a\u0645\u064f", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 15 }
    ],
    words: [
      // rfe pos=2
      {
        word_key: "rfe", position: 2, sense_chosen: "elever",
        analysis_axes: {
          sense_chosen: "elever",
          concept_chosen: "Élévation/Exaltation",
          concepts: {
            "Élévation/Exaltation": {
              status: "retenu",
              senses: ["lever", "elever", "hausser", "exalter"],
              proof_ctx: "Le verbe yarfa'u est un inaccompli 3MS de la racine r-f-'. Le Lane's donne : elever, lever, hausser, porter vers le haut. L'elevation est un mouvement directionnel de bas en haut — on prend ce qui est en bas et on le place en haut. Ici l'elevation est physique et concrete : Abraham et Ismael portent les pierres et les posent en hauteur pour construire les fondations de la Maison sacree. L'inaccompli dans un contexte passe (idh yarfa'u) donne une image vivante et presentificatrice. La distinction avec la suppression est nette : le contexte est la construction, pas la demolition. Elever les assises c'est batir, pas enlever.",
              axe1_verset: "Le verbe yarfa'u est l'action principale du verset — elever les assises de la Maison. Le champ lexical du verset tourne autour de la construction sacree (assises, Maison) et de l'invocation (Seigneur, accepte, entend, sait). L'elevation physique des pierres est le geste fondateur qui accompagne l'invocation verbale. Abraham et Ismael construisent et prient en meme temps — l'acte et la parole sont simultanes.",
              axe2_voisins: "Le verset 125 faisait de la Maison un lieu de rassemblement et de securite, et commandait a Abraham et Ismael de purifier la Maison. Le verset 126 contenait l'invocation d'Abraham pour la securite de la cite. Le verset 127 montre maintenant l'acte de construction — les fondations sont elevees. La progression est : designation du lieu (125) → invocation pour la cite (126) → construction et invocation pour l'agrement (127). Le verset 128 continuera avec d'autres demandes d'Abraham et Ismael.",
              axe3_sourate: "La sourate al-Baqarah developpe longuement le recit d'Abraham et de ses epreuves. En 2:124, Dieu eprouve Abraham et l'etablit comme guide. En 2:125, la Maison est designee comme lieu de rassemblement. Le verset 127 est le moment de la construction — l'acte fondateur qui concretise la mission d'Abraham. La sourate montre Abraham comme le batisseur et le priant — celui qui agit et invoque simultanement.",
              axe4_coherence: "La racine r-f-' apparait environ 29 fois dans le Coran. En 2:253, Dieu a eleve certains prophetes au-dessus d'autres. En 94:4, « Nous avons eleve pour toi ta renommee ». Le Coran utilise cette racine pour l'elevation physique et l'elevation en degre. En 2:127, l'elevation est physique (les pierres) mais l'objet construit est sacre — l'acte physique porte une dimension spirituelle par son objet.",
              axe5_frequence: "Pour la mission du khalifa, elever les fondations de la Maison est un acte civilisationnel. Abraham et Ismael construisent un lieu de rassemblement pour l'humanite — c'est un acte de justice et d'organisation. Le khalifa batit — il ne detruit pas. Il eleve les structures qui servent la communaute et il accompagne son action d'une invocation pour que l'oeuvre soit agreee."
            },
            "Suppression": {
              status: "nul",
              senses: ["enlever"],
              proof_ctx: "Le sens de suppression est l'oppose du contexte — le verset decrit la construction des fondations, pas leur demolition."
            }
          }
        }
      },
      // abr pos=3 (nom propre Ibrahim)
      {
        word_key: "abr", position: 3, sense_chosen: "Abraham",
        analysis_axes: {
          sense_chosen: "Abraham",
          concept_chosen: "Objet",
          concepts: {
            "Objet": {
              status: "retenu",
              senses: ["aiguille"],
              proof_ctx: "Le mot Ibrahim est un nom propre etranger (non arabe) designant le patriarche Abraham. La racine a-b-r n'est pas pertinente pour le sens du nom propre. Le mot est identifie comme sujet du verbe yarfa'u (elever) — c'est Abraham qui construit les fondations de la Maison avec Ismael. Le nom propre ne porte pas de sens etymologique a analyser au-dela de l'identification de la personne.",
              axe1_verset: "Abraham est le sujet principal du verset — c'est lui qui eleve les fondations de la Maison. Le champ lexical (elever, assises, Maison, Seigneur, accepte) tourne autour de son action et de son invocation. Abraham est a la fois le batisseur et le priant. Le verset montre Abraham dans son double role : constructeur physique et serviteur spirituel.",
              axe2_voisins: "Le verset 124 etablissait Abraham comme guide (imam). Le verset 125 lui commandait de purifier la Maison. Le verset 126 contenait son invocation pour la cite. Le verset 127 le montre en train de construire — la suite logique de sa mission. Abraham est le fil conducteur de ce passage.",
              axe3_sourate: "Abraham est un personnage central de la sourate al-Baqarah. De 2:124 a 2:141, la sourate developpe son recit, ses epreuves, sa construction de la Maison et ses invocations. La sourate presente Abraham comme le modele du guide fidele qui obeit sans condition.",
              axe4_coherence: "Le nom Ibrahim apparait environ 69 fois dans le Coran. Il est presente comme le hanif (pur montheiste) en 2:135, 3:67. En 14:37, Abraham invoque Dieu pres de la Maison sacree. Le Coran presente Abraham comme le batisseur de la Kaaba et le fondateur du pelerinage.",
              axe5_frequence: "Pour la mission du khalifa, Abraham est le modele du khalifa ideal — il construit, il purifie, il invoque et il obeit. Sa mission combine l'action physique (batir les fondations) et la devotion spirituelle (invoquer Dieu). Le khalifa suit l'exemple d'Abraham en construisant et en priant."
            }
          }
        }
      },
      // qwed pos=4
      {
        word_key: "qwed", position: 4, sense_chosen: "fondation",
        analysis_axes: {
          sense_chosen: "fondation",
          concept_chosen: "Base/Fondation",
          concepts: {
            "Base/Fondation": {
              status: "retenu",
              senses: ["fondation (qaida)", "base"],
              proof_ctx: "Le mot al-qawa'ida est un pluriel feminin de qa'ida, de la racine q-'-d. Le Lane's donne : base, fondation, assise — ce qui est pose au sol et sert de support a ce qui est construit dessus. La fondation est ce qui supporte — elle est en bas pour que le reste soit en haut. Le mot est a l'accusatif comme objet direct du verbe yarfa'u (elever). Abraham et Ismael elevent les fondations de la Maison — ils construisent les bases sur lesquelles la Maison repose. La distinction avec la position assise est claire : le mot est ici un nom (les bases physiques), pas un verbe (s'asseoir). La qa'ida (fondation) partage la racine avec qa'ada (s'asseoir) car les deux portent l'idee de ce qui est pose en bas, stable et immobile — mais dans ce contexte c'est la base architecturale.",
              axe1_verset: "Le mot al-qawa'ida est l'objet de l'elevation — Abraham et Ismael elevent les fondations. Le champ lexical (elever, Maison, Seigneur) situe la scene dans la construction sacree. Les fondations sont la partie invisible mais essentielle de la Maison — sans elles, rien ne tient. Le verset montre que la construction commence par le bas, par les bases.",
              axe2_voisins: "Le verset 125 parlait de la Maison comme lieu de rassemblement et de la purification. Le verset 127 montre la construction physique — les fondations sont posees et elevees. Les versets precedents designaient la Maison dans sa fonction, le verset 127 montre sa materialite. Les fondations sont le passage de la designation a la realisation.",
              axe3_sourate: "La racine q-'-d apparait dans la sourate al-Baqarah sous differentes formes. En 2:200, les qa'idun sont ceux qui restent assis (ne combattent pas). Le verset 127 utilise le sens de fondation — la meme racine porte deux sens distincts selon le contexte. La sourate montre que les fondations de la Maison sont un acte de batir, l'oppose de rester assis.",
              axe4_coherence: "L'expression « al-qawa'id min al-bayt » n'apparait qu'une seule fois dans le Coran — en 2:127. En 16:26, le mot qawa'id apparait aussi dans le contexte des fondations d'un edifice que Dieu detruit. Le Coran associe les fondations a la solidite et a la stabilite — ce qui est pose sur des fondations solides tient, ce qui est pose sur des fondations fragiles s'ecroule.",
              axe5_frequence: "Pour la mission du khalifa, les fondations sont le debut de toute construction durable. Abraham commence par les bases — il ne construit pas en l'air. Le khalifa doit poser les fondations avant d'elever les murs. Toute civilisation repose sur des fondations solides — les bases sont invisibles mais portent tout."
            },
            "Position assise/Immobilité": {
              status: "nul",
              senses: ["s'asseoir", "rester", "s'abstenir d'agir", "ne pas combattre"],
              proof_ctx: "Le sens de s'asseoir est hors sujet — le mot al-qawa'ida est un nom pluriel designant les bases physiques d'un batiment. Le contexte est la construction, pas l'immobilite."
            },
            "Sens isolé/Femme": {
              status: "nul",
              senses: ["femme menopausee (qaida)"],
              proof_ctx: "Le sens de femme menopausee est un usage specifique de qa'ida. Le contexte est la construction de la Maison, pas les personnes agees."
            }
          }
        }
      },
      // byt pos=6
      {
        word_key: "byt", position: 6, sense_chosen: "maison",
        analysis_axes: {
          sense_chosen: "maison",
          concept_chosen: "Demeure/Sanctuaire",
          concepts: {
            "Demeure/Sanctuaire": {
              status: "retenu",
              senses: ["maison", "demeure", "passer la nuit"],
              proof_ctx: "Le mot al-bayti est un nom masculin singulier defini genitif de la racine b-y-t. Le Lane's donne : maison, demeure, lieu ou l'on passe la nuit. La maison (bayt) est l'espace clos ou l'on habite et ou l'on se refugie. L'article defini (al-Bayt) sans qualificatif designe la Maison sacree — la Kaaba a La Mecque. Le genitif suit la preposition « min » (de) — les fondations de la Maison. Le Bayt est le centre du monde pour les croyants — le lieu vers lequel on se tourne. Ce sens est le seul possible car le mot est un nom defini designant un lieu, pas un verbe (passer la nuit).",
              axe1_verset: "Le mot al-bayti est le complement du nom al-qawa'ida — les fondations de la Maison. Le champ lexical (elever, fondations, Seigneur) situe la scene dans la construction de la Kaaba. La Maison est l'objet ultime de la construction — Abraham et Ismael ne construisent pas n'importe quelle maison, ils construisent LA Maison, celle de Dieu. Le verset combine l'acte physique (construire) et l'invocation (accepte de nous).",
              axe2_voisins: "Le verset 125 designait la Maison comme lieu de rassemblement et de securite. Le verset 127 montre sa construction. Le verset 125 parlait de purifier la Maison pour ceux qui tournent autour, ceux qui s'y retirent et ceux qui prient. Le verset 127 montre les fondations de cette Maison — le debut de tout.",
              axe3_sourate: "Le mot al-Bayt apparait plusieurs fois dans la sourate al-Baqarah. En 2:125, « Nous avons fait de la Maison un lieu de rassemblement ». En 2:158, Safa et Marwa font partie des rites de la Maison de Dieu. La Maison est un theme structurant de la sourate — elle represente le centre de la communaute.",
              axe4_coherence: "La racine b-y-t apparait environ 73 fois dans le Coran. L'expression « al-Bayt al-Haram » (la Maison sacree) apparait en 5:2, 5:97. En 3:96, « la premiere Maison etablie pour les gens est celle de Bakka ». Le Coran identifie la Kaaba comme la premiere Maison de culte et la relie a Abraham comme constructeur.",
              axe5_frequence: "Pour la mission du khalifa, la Maison est le centre de rassemblement de la communaute. Construire la Maison c'est creer un lieu ou les gens se reunissent pour adorer et pour vivre ensemble. Le khalifa ne construit pas pour lui-meme — il construit pour la communaute. La Maison est un bien commun au service de la mission collective."
            }
          }
        }
      },
      // sme pos=8 (Ismael — nom propre)
      {
        word_key: "sme", position: 8, sense_chosen: "Ismael",
        analysis_axes: {
          sense_chosen: "Ismael",
          concept_chosen: "Audition/Écoute",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              senses: ["entendre", "ecouter", "ouie", "obeir", "exaucer"],
              proof_ctx: "Le mot Isma'ilu est un nom propre designant le fils d'Abraham. Le nom est derive de la racine s-m-' (entendre) — Ismael signifie « Dieu entend ». Il est au nominatif comme sujet coordonne avec Ibrahim (wa-Isma'ilu). Ismael participe a la construction avec son pere — les deux elevent ensemble les fondations. Le nom propre ne requiert pas d'analyse de choix de sens mais l'etymologie « Dieu entend » resonne avec la fin du verset (as-sami'u, Celui qui entend).",
              axe1_verset: "Ismael est le deuxieme sujet du verbe yarfa'u — il construit avec son pere Abraham. Le verset les montre associes dans l'acte et dans l'invocation. Le fait qu'Ismael (« Dieu entend ») participe a la construction et que le verset se termine par « Celui qui entend tout » cree un echo sonore et semantique. Le nom meme d'Ismael est une preuve que Dieu entend.",
              axe2_voisins: "Le verset 125 mentionnait Abraham et Ismael ensemble pour la purification de la Maison. Le verset 127 les montre ensemble pour la construction. Le lien pere-fils est au coeur de ce passage — la mission se transmet d'une generation a l'autre. Le verset 128 continuera leur invocation commune.",
              axe3_sourate: "Ismael est mentionne dans la sourate al-Baqarah en 2:125, 2:127, 2:133, 2:136, 2:140. La sourate le presente comme partenaire d'Abraham dans la construction et comme ancetre d'une lignee prophetique. La sourate insiste sur l'unite d'Abraham et d'Ismael dans la mission.",
              axe4_coherence: "Le nom Isma'il apparait environ 12 fois dans le Coran. En 19:54, Ismael est decrit comme sincere dans sa promesse, envoye et prophete. En 38:48, il est mentionne parmi les meilleurs. Le Coran presente Ismael comme un modele de fidelite et de patience, associe a la construction de la Maison.",
              axe5_frequence: "Pour la mission du khalifa, Ismael illustre la cooperation entre generations. Le fils travaille avec le pere pour construire ce qui sert la communaute. La mission du khalifa n'est pas solitaire — elle se transmet et se partage. Ismael montre que la jeune generation participe activement a la construction."
            }
          }
        }
      },
      // rbb pos=9
      {
        word_key: "rbb", position: 9, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le mot rabbana est un nom masculin singulier de la racine r-b-b avec pronom suffixe 1MP (na, notre). Le Lane's donne : seigneur, maitre, celui qui eleve et entretient ce qu'il possede. Le rabb est celui qui possede, eleve et entretient — c'est une autorite bienveillante qui combine la possession, le soin et la croissance. Le vocatif « rabbana » (notre Seigneur) est une invocation directe — Abraham et Ismael s'adressent a Dieu comme a leur Seigneur. Le possessif « na » (notre) marque le lien personnel — c'est leur Seigneur a eux. La distinction avec le sens de croissance (probable) est que le vocatif appelle une personne, pas un processus.",
              axe1_verset: "Le mot rabbana ouvre l'invocation — il est le vocatif qui adresse la priere. Le champ lexical (accepte, de nous, Celui qui entend, Celui qui sait) montre que l'invocation est personnelle et confiante. Appeler Dieu « notre Seigneur » c'est reconnaitre la relation de dependance et de soin. Abraham et Ismael ne disent pas « Dieu » mais « notre Seigneur » — l'adresse est intime et relationnelle.",
              axe2_voisins: "Le verset 126 commencait aussi par « rabbana » — « notre Seigneur, fais de cette cite un lieu sur ». Le verset 127 reprend le meme vocatif — l'invocation se poursuit. Le verset 128 commencera aussi par « rabbana ». Les trois versets forment une serie d'invocations adressees au Seigneur pendant la construction.",
              axe3_sourate: "Le mot rabb est un des mots les plus frequents de la sourate al-Baqarah. En 2:124, « le Seigneur eprouva Abraham ». En 2:126, « notre Seigneur, fais de cette cite un lieu sur ». La sourate utilise le vocatif « rabbana » dans les invocations des prophetes et des croyants — c'est le mode d'adresse privilegie.",
              axe4_coherence: "La racine r-b-b apparait environ 979 fois dans le Coran. Le mot Rabb est le nom divin le plus frequent apres Allah. Il designe Dieu comme celui qui possede, eleve et entretient Sa creation. Le Coran utilise « rabb » pour souligner la relation de soin entre Dieu et Ses creatures. L'invocation « rabbana » est un refrain dans les prieres coraniques.",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre le Seigneur est le fondement de la mission. Le khalifa est le representant du Seigneur sur terre — il doit d'abord reconnaitre l'autorite de Celui qui l'a charge de cette mission. L'invocation « notre Seigneur » est l'expression de cette reconnaissance — avant d'agir, on prie."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper"],
              proof_ctx: "Le sens de croissance est le sens physique premier de r-b-b — faire grandir, nourrir, augmenter. La distinction philosophique avec la seigneurie est que la croissance est un processus naturel (les choses grandissent), tandis que la seigneurie est une relation d'autorite et de soin entre deux personnes. Le vocatif « rabbana » appelle une personne (notre Seigneur), pas un processus (notre croissance). On ne s'adresse pas a un processus — on s'adresse a celui qui dirige le processus. La seigneurie englobe la croissance (le Seigneur fait grandir), mais la croissance seule ne suffit pas car le contexte est une invocation personnelle.",
              axe1_verset: "Le sens de croissance est possible en theorie — le rabb est celui qui fait grandir. Mais le verset est une invocation directe : « rabbana, taqabbal minna » (notre Seigneur, accepte de nous). L'invocation s'adresse a une personne qui peut accepter ou refuser. La croissance est un processus impersonnel — on ne demande pas a un processus d'accepter. Le sens de seigneur est plus adapte au contexte d'invocation.",
              axe2_voisins: "Les versets 126-128 sont une serie d'invocations. Chaque invocation commence par « rabbana » et demande quelque chose a une personne — securite (126), agrement (127), soumission et rites (128). Le schema repetitif montre que rabbana est un vocatif personnel, pas une reference a la croissance.",
              axe3_sourate: "La sourate al-Baqarah utilise rabb principalement dans le sens de seigneur et maitre. En 2:131, « je me suis soumis au Seigneur des mondes ». Le sens de croissance n'est jamais le sens principal quand le mot est utilise en vocatif.",
              axe4_coherence: "Le Coran utilise la racine r-b-b dans les deux sens. Le verbe rabba (faire grandir) apparait mais rarement. Le nom Rabb (Seigneur) est dominant — il constitue l'immense majorite des occurrences. L'invocation « rabbana » est toujours au sens de seigneur dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la croissance est un aspect du role du Seigneur — Il fait grandir Sa creation. Mais l'invocation porte sur la relation personnelle, pas sur le processus de croissance."
            },
            "Éducation/Accompagnement": {
              status: "nul",
              senses: ["elever un enfant", "eduquer", "former"],
              proof_ctx: "Le sens d'education est un derive de r-b-b mais le contexte est un vocatif d'invocation, pas une scene d'education."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette"],
              proof_ctx: "Le sens commercial est hors sujet — le contexte est une invocation a Dieu pendant la construction de la Maison."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "Le sens physique d'essoufflement est hors sujet — le contexte est une invocation."
            },
            "Sens isolé/Fixer": {
              status: "nul",
              senses: ["fixer"],
              proof_ctx: "Sens isole sans rapport avec le contexte d'invocation."
            },
            "Sens isolé/Rassembler": {
              status: "nul",
              senses: ["rassembler"],
              proof_ctx: "Sens isole sans rapport avec le contexte."
            },
            "Sens isolé/Groupe": {
              status: "nul",
              senses: ["groupe"],
              proof_ctx: "Sens isole sans rapport avec le contexte."
            },
            "Sens isolé/Confiture": {
              status: "nul",
              senses: ["confiture"],
              proof_ctx: "Sens isole sans rapport avec le contexte."
            }
          }
        }
      },
      // qbl pos=10
      {
        word_key: "qbl", position: 10, sense_chosen: "agreer",
        analysis_axes: {
          sense_chosen: "agreer",
          concept_chosen: "Réception/Accueil",
          concepts: {
            "Réception/Accueil": {
              status: "retenu",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Le verbe taqabbal est un imperatif 2MS de la forme V de la racine q-b-l. Le Lane's donne : accepter avec agrement, agreer, recevoir avec bienveillance. La forme V (tafa''ala) intensifie l'idee de reception — ce n'est pas simplement recevoir, c'est recevoir avec satisfaction et bonne grace. L'imperatif en contexte d'invocation est une demande humble — Abraham et Ismael demandent a Dieu d'agreer leur oeuvre. L'objet implicite de l'agrement est la construction de la Maison. La distinction avec l'orientation (probable) est que le contexte est l'acceptation d'une offrande, pas un deplacement directionnel. La distinction avec l'anteriorite (nul) est que le verbe est un imperatif actif, pas un adverbe temporel.",
              axe1_verset: "Le verbe taqabbal est le coeur de l'invocation — c'est la demande centrale. Abraham et Ismael ne demandent ni richesse ni pouvoir — ils demandent l'agrement de leur travail. Le champ lexical (Seigneur, de nous, Celui qui entend, Celui qui sait) montre que l'invocation porte sur la qualite de l'oeuvre, pas sur une recompense. Agreer c'est valider — ils veulent que leur construction soit acceptee par Dieu.",
              axe2_voisins: "Le verset 126 demandait la securite de la cite. Le verset 127 demande l'agrement de la construction. Le verset 128 demandera la soumission et les rites. La progression montre que les invocations portent sur des aspects differents — chaque demande est specifique et complementaire. L'agrement est la validation divine de l'effort humain.",
              axe3_sourate: "La racine q-b-l dans le sens d'agrement apparait dans la sourate al-Baqarah en 5:27 (pas dans la sourate 2 elle-meme mais le theme est coranique). En 2:127, l'agrement est demande pour la construction de la Maison. La sourate montre que les actes doivent etre agreees par Dieu pour avoir de la valeur — l'agrement divin est la mesure de la qualite.",
              axe4_coherence: "La racine q-b-l apparait environ 93 fois dans le Coran. En 3:35, la femme d'Imran dit : « accepte de moi ». En 5:27, Dieu n'accepte que de ceux qui sont pieux. Le Coran montre que l'agrement divin n'est pas automatique — il depend de la piete et de la sincerite de l'offrant. Abraham et Ismael demandent cet agrement car ils savent qu'il n'est pas garanti.",
              axe5_frequence: "Pour la mission du khalifa, demander l'agrement divin est la marque de l'humilite. Le khalifa ne presume pas que son travail est bon — il demande a Dieu de valider. L'agrement est le test ultime de l'oeuvre — une construction peut etre belle physiquement mais vide spirituellement si elle n'est pas agreee."
            },
            "Orientation/Direction": {
              status: "probable",
              senses: ["se tourner vers", "faire face", "venir vers"],
              proof_ctx: "Le sens d'orientation est un sens majeur de q-b-l — se tourner vers, faire face. La distinction philosophique avec l'agrement est que l'orientation est un mouvement directionnel (se tourner physiquement ou spirituellement vers quelque chose), tandis que l'agrement est un acte de reception bienveillante. Le verbe taqabbal (forme V) porte specifiquement le sens d'accepter avec agrement — la forme V intensifie l'acte de reception. Le contexte est une invocation ou l'on demande a Dieu de recevoir un travail, pas de se tourner vers quelque chose.",
              axe1_verset: "Le sens d'orientation est possible si l'on comprend taqabbal comme « se tourner vers » notre offrande. Mais le verset est une invocation avec un objet implicite (la construction) — le sens d'agreer est plus precis. « Accepte de nous » est plus naturel que « tourne-toi vers nous ».",
              axe2_voisins: "Les versets voisins ne portent pas sur l'orientation physique mais sur les demandes a Dieu. Le contexte des invocations 126-128 montre un patron de demande-reponse, pas de direction.",
              axe3_sourate: "La sourate al-Baqarah utilise q-b-l dans le sens d'orientation pour la qibla (2:142-150). Mais dans le contexte d'invocation en 2:127, c'est l'agrement qui est en jeu, pas la direction.",
              axe4_coherence: "Le Coran distingue clairement les deux sens de q-b-l : l'orientation (qibla, se tourner vers) et l'agrement (taqabbala, accepter). Les deux sont frequents mais dans des contextes differents.",
              axe5_frequence: "Pour la mission du khalifa, l'orientation est un aspect complementaire — se tourner vers Dieu est le prealable a l'agrement. Mais dans ce verset c'est l'agrement qui est demande."
            },
            "Antériorité/Passé": {
              status: "nul",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le sens d'anteriorite est hors sujet — le verbe taqabbal est un imperatif actif, pas un adverbe de temps."
            },
            "Sens isolé/Tribu": {
              status: "nul",
              senses: ["tribu"],
              proof_ctx: "Sens isole sans rapport avec le contexte d'invocation."
            },
            "Sens isolé/Embrasser": {
              status: "nul",
              senses: ["embrasser"],
              proof_ctx: "Sens isole sans rapport avec le contexte."
            },
            "Sens isolé/Garantie": {
              status: "nul",
              senses: ["garantie"],
              proof_ctx: "Sens isole sans rapport avec le contexte."
            }
          }
        }
      },
      // ant pos=13
      {
        word_key: "ant", position: 13, sense_chosen: "toi",
        analysis_axes: {
          sense_chosen: "toi",
          concept_chosen: "Pronom/Interlocution",
          concepts: {
            "Pronom/Interlocution": {
              status: "retenu",
              senses: ["tu", "toi", "vous"],
              proof_ctx: "Le mot anta est un pronom personnel de 2e personne masculin singulier. Le Lane's donne : tu, toi. Le pronom est emphatique ici — il renforce l'identification de l'interlocuteur apres la particule innaka (en verite tu). Dire « innaka anta as-sami'u al-'alimu » c'est insister : c'est TOI (et personne d'autre) qui entends tout et sais tout. Le pronom cree une relation directe entre les invocants et Dieu.",
              axe1_verset: "Le pronom anta renforce l'affirmation finale du verset. Apres l'invocation (accepte de nous), Abraham et Ismael justifient leur confiance : en verite, TOI, tu entends et tu sais. L'emphase du pronom montre la certitude — ils ne doutent pas de l'ecoute divine.",
              axe2_voisins: "Le verset 128 utilisera aussi « innaka anta at-tawwabu ar-rahimu » — la meme structure emphatique avec d'autres attributs. Le patron « innaka anta + attributs » est un refrain dans ces invocations d'Abraham.",
              axe3_sourate: "La sourate al-Baqarah utilise le pronom anta dans les adresses a Dieu et au Prophete. L'usage emphatique (innaka anta) est propre aux invocations ou l'on affirme un attribut divin avec certitude.",
              axe4_coherence: "Le patron « innaka anta » apparait dans plusieurs invocations coraniques. En 5:118, « en verite Tu es le Puissant, le Sage ». En 2:32, « en verite Tu es le Savant, le Sage ». Ce patron est un marqueur de certitude dans la priere.",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre que Dieu est Celui qui entend et sait est le fondement de la confiance. Le khalifa agit en sachant que ses actes et paroles sont percus par Dieu."
            }
          }
        }
      },
      // sme pos=14 (as-sami'u)
      {
        word_key: "sme", position: 14, sense_chosen: "entendre",
        analysis_axes: {
          sense_chosen: "entendre",
          concept_chosen: "Audition/Écoute",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              senses: ["entendre", "ecouter", "ouie", "obeir", "exaucer"],
              proof_ctx: "Le mot as-sami'u est un adjectif qualificatif defini de la racine s-m-'. Le Lane's donne : celui qui entend, celui qui percoit les sons. L'article defini donne un sens absolu — Celui qui entend tout, sans exception ni limite. L'adjectif qualifie Dieu dans le contexte de l'invocation — Dieu entend la priere d'Abraham et Ismael. La forme intensive (sami', fa'il) indique une capacite permanente et totale. La distinction avec la renommee (nul) est que le contexte est l'ecoute divine, pas la reputation.",
              axe1_verset: "Le mot as-sami'u est le premier des deux attributs divins qui ferment le verset. Apres l'invocation « accepte de nous », Abraham et Ismael affirment que Dieu entend. L'ecoute divine justifie l'invocation — on invoque parce qu'on sait que l'autre entend. Le champ lexical (Seigneur, accepte, sait) montre que l'ecoute et le savoir sont les deux faces de la perception divine.",
              axe2_voisins: "Le verset 127 se termine par « Celui qui entend, Celui qui sait ». Le verset 128 se terminera par « Celui qui accueille le repentir, le Misericordieux ». Chaque invocation se conclut par un couple d'attributs divins. Les attributs changent selon le contenu de l'invocation — ici l'ecoute et le savoir repondent a la demande d'agrement.",
              axe3_sourate: "La racine s-m-' apparait frequemment dans la sourate al-Baqarah. En 2:137, « Dieu est Celui qui entend, Celui qui sait ». En 2:181, « Dieu est Celui qui entend, Celui qui sait ». Le couple sami'-'alim est un refrain de la sourate — il associe la perception sonore et la connaissance totale.",
              axe4_coherence: "La racine s-m-' apparait environ 185 fois dans le Coran. L'attribut as-sami' designe la capacite divine de percevoir tout ce qui est dit — prieres, invocations, paroles secretes. En 58:1, « Dieu a entendu celle qui discutait avec toi ». Le Coran montre que rien n'echappe a l'ecoute divine.",
              axe5_frequence: "Pour la mission du khalifa, savoir que Dieu entend tout est une source de responsabilite. Le khalifa sait que ses paroles — prieres et propos — sont percues par Dieu. L'ecoute divine est a la fois un reconfort (les prieres sont entendues) et un avertissement (les mauvaises paroles aussi)."
            },
            "Renommée/Bruit": {
              status: "nul",
              senses: ["reputation", "bruit", "faire entendre"],
              proof_ctx: "Le sens de renommee est hors sujet — le mot est un attribut divin qualifiant Dieu comme Celui qui entend, pas comme quelqu'un de celebre."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["oreille"],
              proof_ctx: "Le sens anatomique est hors sujet — le contexte est l'attribut divin d'ecoute, pas un organe physique."
            }
          }
        }
      },
      // elm pos=15
      {
        word_key: "elm", position: 15, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le mot al-'alimu est un adjectif qualificatif defini de la racine '-l-m. Le Lane's donne : celui qui sait, celui qui connait. L'article defini donne un sens absolu — Celui qui sait tout, sans exception. L'adjectif qualifie Dieu comme deuxieme attribut apres as-sami'u. Le savoir divin est total et permanent — il couvre les intentions, les actes et les consequences. La distinction avec le monde (nul) est que le mot est un adjectif qualifiant Dieu, pas un nom designant l'univers. La distinction avec le signe/marque (nul) est que le contexte est la connaissance, pas le marquage.",
              axe1_verset: "Le mot al-'alimu est le dernier mot du verset — il ferme l'invocation. Apres « Celui qui entend », « Celui qui sait » complete la perception divine. Dieu entend les paroles ET sait les intentions. Le champ lexical (Seigneur, accepte, entend) montre que l'invocation repose sur la confiance dans la perception totale de Dieu. Abraham et Ismael savent que Dieu entend leur priere et connait la sincerite de leur coeur.",
              axe2_voisins: "Le couple sami'-'alim ferme le verset 127. Le verset 128 se terminera par un autre couple d'attributs (tawwab-rahim). Les versets 127-128 forment un diptyque : le premier porte sur l'ecoute et le savoir, le second sur le repentir et la misericorde. La progression montre que les attributs divins repondent aux demandes specifiques.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:29, « Il est de toute chose Savant ». En 2:231, « sachez que Dieu est Savant de toute chose ». La sourate insiste sur le savoir divin comme base de la confiance et de la crainte.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. L'attribut al-'alim est un des noms divins les plus frequents. En 6:73, « le Savant de l'invisible et du visible ». Le Coran montre que le savoir divin couvre tout — le visible et l'invisible, le passe et le futur, le manifeste et le cache.",
              axe5_frequence: "Pour la mission du khalifa, savoir que Dieu sait tout est la base de la responsabilite. Le khalifa ne peut rien cacher a Dieu — ses intentions et ses actes sont connus. Le savoir divin est le miroir devant lequel le khalifa se tient — il ne peut pas tricher."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere"],
              proof_ctx: "Le sens de signe est hors sujet — le mot est un attribut divin de connaissance, pas un marquage."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde", "les mondes", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le mot est un adjectif (al-'alim, Celui qui sait), pas un nom (al-'alamin, les mondes)."
            }
          }
        }
      }
    ]
  },
  128: {
    verse_id: 135,
    analysis_id: 496,
    translation_arab: "Notre Seigneur, et fais de nous deux des soumis pour Toi, et de notre descendance une communaute soumise pour Toi, et montre-nous nos rites, et reviens vers nous, en verite Tu es Celui qui revient sans cesse, le Misericordieux.",
    full_translation: "Notre Seigneur! Fais de nous Tes Soumis, et de notre descendance une communaute soumise a Toi. Et montre-nous nos rites et accepte de nous le repentir. Car c'est Toi certes l'Accueillant au repentir, le Misericordieux.",
    translation_explanation: `§DEMARCHE§
Le verset est la suite de l'invocation d'Abraham et Ismael pendant la construction de la Maison. Le nom **rabbana** est un nom masculin singulier de la racine r-b-b avec pronom suffixe 1MP (na). C'est le meme vocatif que dans le verset 127 — la priere continue. Le verbe **ij'alna** est un imperatif 2MS de la racine j-'-l avec pronom suffixe 1MP (na). Le Lane's donne : faire, rendre, placer, etablir. L'imperatif est une demande : « fais de nous ». Le pronom suffixe « na » indique que les deux (Abraham et Ismael) se designent eux-memes comme objet de la transformation. L'adjectif **muslimayni** est un duel masculin accusatif du participe actif de la forme IV de la racine s-l-m. Le Lane's donne : soumis, celui qui se soumet. Le duel (muslimayni, pas muslimin pluriel) precise qu'ils sont deux — Abraham et Ismael. La soumission est un etat actif et volontaire — se soumettre c'est remettre sa volonte a Dieu. La preposition **la-ka** (pour Toi) precise la direction de la soumission — ils se soumettent a Dieu, pas a un autre. Le verbe **ij'al** est repete implicitement dans la deuxieme partie : « et de notre descendance une communaute soumise ». Le mot **dhurriyyatina** est un nom feminin singulier de la racine dh-r-w avec pronom suffixe 1MP (na). Le Lane's donne : progeniture, descendance. La descendance est ce qui se repand a travers les generations — de la graine (dharra) aux enfants qui se multiplient. Le mot **ummatan** est un nom feminin singulier indefini de la racine a-m-m. Le Lane's donne : communaute, nation, groupe uni autour d'une meme cause. L'indefini (ummatan, sans article) marque qu'ils demandent qu'une communaute (parmi les descendants) soit soumise — pas necessairement tous, mais un groupe. L'adjectif **muslimatan** est un feminin singulier accusatif du participe actif de la forme IV de s-l-m. Le feminin s'accorde avec umma (communaute, feminin). Le verbe **arina** est un imperatif 2MS de la forme IV de la racine r-a-y avec pronom suffixe 1MP (na). Le Lane's donne : montrer, faire voir. La forme IV (af'ala) signifie « faire voir » — ils demandent a Dieu de leur montrer. L'objet de la vision est « nos rites » (manasikana). Le mot **manasikana** est un pluriel masculin de la racine n-s-k avec pronom suffixe 1MP (na). Le Lane's donne : rites, lieux de culte, ceremonies du pelerinage. Les rites sont les actes de devotion specifiques au lieu sacre — les gestes, les parcours, les prieres propres au pelerinage. Le verbe **tub** est un imperatif 2MS de la racine t-w-b. Le Lane's donne : revenir, se repentir, accepter le repentir. Quand le sujet est Dieu, le sens est « revenir vers (quelqu'un) pour lui accorder le pardon ». L'imperatif est une demande : « reviens vers nous » — c'est-a-dire « accepte notre repentir ». La preposition **'alayna** (sur nous) precise la direction du retour divin. La particule **innaka** (en verite tu) introduit la justification. Le pronom **anta** est emphatique — c'est TOI. L'adjectif **at-tawwabu** est un adjectif qualificatif defini de la racine t-w-b, forme intensive (fa''al). Le Lane's donne : celui qui revient sans cesse, celui qui accepte le repentir de maniere repetee. La forme intensive montre que Dieu ne revient pas une fois mais constamment — chaque fois que le serviteur revient, Dieu revient vers lui. L'adjectif **ar-rahimu** est un adjectif qualificatif defini de la racine r-h-m. Le Lane's donne : le misericordieux, celui qui traite avec compassion. La misericorde est un acte dirige vers l'exterieur — elle sort de Dieu et atteint Sa creation. Le couple tawwab-rahim montre que Dieu accueille le repentir (tawwab) et traite avec compassion (rahim).

§JUSTIFICATION§
**notre Seigneur** — Le sens retenu est « seigneur/maitre ». Meme justification que dans le verset 127. Le vocatif « rabbana » s'adresse a Dieu comme a Celui qui possede et entretient.

**fais de nous** — Le sens retenu est « faire/rendre ». Le verbe ij'al est un imperatif de la racine j-'-l. « Fais de nous » exprime une demande de transformation — qu'Il les rende soumis. L'alternative « recompense » est ecartee car le contexte est une demande de transformation, pas de retribution.

**soumis** — Le sens retenu est « soumission ». Le mot muslimayni est un participe actif duel de la forme IV de s-l-m. « Soumis » est choisi car il rend le sens de celui qui remet sa volonte a Dieu volontairement. L'alternative « paix » est ecartee car le contexte est l'etat de soumission a Dieu, pas la paix comme absence de conflit. L'alternative « sain et sauf » est ecartee car le contexte est spirituel, pas physique.

**descendance** — Le sens retenu est « progeniture/descendance ». Le mot dhurriyyatina designe les enfants et leurs enfants a travers les generations. L'alternative « dispersion » est ecartee car le mot est un nom (la progeniture), pas un verbe (disperser).

**communaute** — Le sens retenu est « communaute/nation ». Le mot ummatan designe un groupe uni. L'alternative « mere » est ecartee car le mot est au sens de groupe, pas de parente maternelle.

**soumise** — Le sens retenu est « soumission ». Meme racine que « soumis » mais au feminin pour s'accorder avec « communaute ».

**montre-nous** — Le sens retenu est « montrer/faire voir ». Le verbe arina est une forme IV (causatif) de r-a-y. « Montre-nous » est le sens le plus naturel. L'alternative « opinion » est ecartee car le verbe est un imperatif causatif, pas un nom d'avis.

**nos rites** — Le sens retenu est « rites/ceremonies ». Le mot manasikana designe les actes de devotion du pelerinage. L'alternative « sacrifice » est ecartee car le pluriel manasik designe l'ensemble des rites, pas uniquement les betes sacrifiees.

**reviens** — Le sens retenu est « revenir/accepter le repentir ». Le verbe tub avec Dieu comme sujet signifie qu'Il revient vers le serviteur pour l'accueillir. L'alternative n'existe pas — la racine t-w-b n'a qu'un seul sens retenu.

**Celui qui revient sans cesse** — Le sens retenu est « revenir ». L'adjectif at-tawwabu est une forme intensive — Celui qui revient sans cesse vers ceux qui reviennent vers Lui.

**le Misericordieux** — Le sens retenu est « misericorde ». L'adjectif ar-rahimu designe Celui qui traite avec compassion. L'alternative « uterus » est ecartee car le contexte est l'attribut divin de compassion, pas l'organe reproducteur. L'alternative « parente » est ecartee car le mot qualifie Dieu, pas un lien familial.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere tres similaire. Hamidullah traduit « Fais de nous Tes Soumis » — nous gardons « soumis » sans majuscule car c'est un etat, pas un titre. La difference principale est le mot « accepte de nous le repentir » chez Hamidullah la ou nous donnons « reviens vers nous ». Notre traduction est plus proche de l'etymologie de tub — le retour de Dieu vers le serviteur. Hamidullah interprete le retour comme l'acceptation du repentir, ce qui est le resultat, pas l'acte decrit par le verbe. « L'Accueillant au repentir » de Hamidullah est une bonne traduction de at-tawwab mais « Celui qui revient sans cesse » rend mieux la forme intensive (fa''al) qui insiste sur la repetition de l'acte.`,
    segments: [
      { fr: "notre Seigneur", pos: "nom", phon: "rabbana", arabic: "\u0631\u064e\u0628\u0651\u064e\u0646\u064e\u0627", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 0 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 1 },
      { fr: "fais de nous", pos: "verbe", phon: "ij'alna", arabic: "\u0671\u062c\u0652\u0639\u064e\u0644\u0652\u0646\u064e\u0627", word_key: "jel", is_particle: false, sense_retenu: "faire", position: 2 },
      { fr: "soumis", pos: "adjectif", phon: "muslimayni", arabic: "\u0645\u064f\u0633\u0652\u0644\u0650\u0645\u064e\u064a\u0652\u0646\u0650", word_key: "slm", is_particle: false, sense_retenu: "se soumettre", position: 3 },
      { fr: "pour", phon: "la", arabic: "\u0644\u064e", is_particle: true, position: 4 },
      { fr: "Toi", phon: "ka", arabic: "\u0643\u064e", is_particle: true, position: 5 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 6 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 7 },
      { fr: "notre descendance", pos: "nom", phon: "dhurriyyatina", arabic: "\u0630\u064f\u0631\u0651\u0650\u064a\u0651\u064e\u062a\u0650\u0646\u064e\u0622", word_key: "dh rw", is_particle: false, sense_retenu: "descendance", position: 8 },
      { fr: "une communaute", pos: "nom", phon: "ummatan", arabic: "\u0623\u064f\u0645\u0651\u064e\u0629\u064b", word_key: "amm", is_particle: false, sense_retenu: "communaute", position: 9 },
      { fr: "soumise", pos: "adjectif", phon: "muslimatan", arabic: "\u0645\u0651\u064f\u0633\u0652\u0644\u0650\u0645\u064e\u0629\u064b", word_key: "slm", is_particle: false, sense_retenu: "se soumettre", position: 10 },
      { fr: "pour", phon: "la", arabic: "\u0644\u0651\u064e", is_particle: true, position: 11 },
      { fr: "Toi", phon: "ka", arabic: "\u0643\u064e", is_particle: true, position: 12 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 13 },
      { fr: "montre-nous", pos: "verbe", phon: "arina", arabic: "\u0623\u064e\u0631\u0650\u0646\u064e\u0627", word_key: "ray", is_particle: false, sense_retenu: "montrer", position: 14 },
      { fr: "nos rites", pos: "nom", phon: "manasikana", arabic: "\u0645\u064e\u0646\u064e\u0627\u0633\u0650\u0643\u064e\u0646\u064e\u0627", word_key: "nsk", is_particle: false, sense_retenu: "rites", position: 15 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 16 },
      { fr: "reviens", pos: "verbe", phon: "tub", arabic: "\u062a\u064f\u0628\u0652", word_key: "twb", is_particle: false, sense_retenu: "revenir", position: 17 },
      { fr: "sur nous", phon: "'alayna", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0646\u064e\u0622", is_particle: true, position: 18 },
      { fr: "en verite tu es", phon: "innaka", arabic: "\u0625\u0650\u0646\u0651\u064e\u0643\u064e", is_particle: true, position: 19 },
      { fr: "Toi", pos: "nom", phon: "anta", arabic: "\u0623\u064e\u0646\u062a\u064e", word_key: "nt", is_particle: false, sense_retenu: "toi", position: 20 },
      { fr: "Celui qui revient sans cesse", pos: "adjectif", phon: "at-tawwabu", arabic: "\u0671\u0644\u062a\u0651\u064e\u0648\u0651\u064e\u0627\u0628\u064f", word_key: "twb", is_particle: false, sense_retenu: "revenir", position: 21 },
      { fr: "le Misericordieux", pos: "adjectif", phon: "ar-rahimu", arabic: "\u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u064f", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 22 }
    ],
    words: [
      // rbb pos=0
      {
        word_key: "rbb", position: 0, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le mot rabbana est le meme vocatif que dans le verset 127. La priere continue — Abraham et Ismael s'adressent toujours a leur Seigneur. Le vocatif rabbana ouvre une nouvelle serie de demandes : soumission, rites, retour. Meme analyse que pour le verset 127 — le vocatif appelle une personne, pas un processus.",
              axe1_verset: "Le mot rabbana ouvre le verset 128 comme il ouvrait l'invocation du verset 127. Le champ lexical (fais de nous, soumis, descendance, communaute, rites, reviens) montre que les demandes sont plus etendues — elles portent sur l'etat spirituel des personnes, la descendance future et les rites du pelerinage. Le Seigneur est celui a qui l'on s'adresse pour toutes ces demandes.",
              axe2_voisins: "Le verset 127 demandait l'agrement de la construction. Le verset 128 demande la soumission, les rites et le retour. Le verset 129 demandera l'envoi d'un messager. Les trois versets forment une progression : agrement de l'oeuvre (127) → transformation personnelle et communautaire (128) → envoi d'un guide pour l'avenir (129).",
              axe3_sourate: "Le vocatif rabbana est un refrain des invocations d'Abraham dans la sourate al-Baqarah (2:126, 127, 128, 129). La sourate montre Abraham comme le modele du priant — chaque acte est accompagne d'une invocation. La sourate presente la priere comme partie integrante de l'action.",
              axe4_coherence: "Le vocatif rabbana apparait dans de nombreuses invocations coraniques — en 2:201, 2:250, 2:286, 3:8, 3:16, 3:53, 3:147, 3:191, 3:193, 3:194. C'est le mode d'adresse le plus frequent dans les prieres coraniques. Le Coran enseigne la priere par l'exemple — les invocations sont des modeles.",
              axe5_frequence: "Pour la mission du khalifa, repeter le vocatif rabbana montre que la priere n'est pas ponctuelle mais continue. Le khalifa prie a chaque etape de sa mission — avant, pendant et apres l'action."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir"],
              proof_ctx: "Meme distinction que dans le verset 127 — le vocatif appelle une personne qui peut agir (faire de nous des soumis, montrer les rites, revenir vers nous), pas un processus impersonnel de croissance.",
              axe1_verset: "Le verset demande des actions specifiques a une personne — fais, montre, reviens. La croissance est un processus passif, pas un agent qui peut agir sur demande. Le sens de seigneur est plus adapte au patron imperatif du verset.",
              axe2_voisins: "Les trois versets 127-129 demandent des actions a une personne (accepte, fais, montre, reviens, envoie). Le patron constant est celui de l'invocation a une personne capable d'agir.",
              axe3_sourate: "La sourate utilise rabb comme seigneur dans les vocatifs. Le sens de croissance n'apparait jamais en position de vocatif dans la sourate.",
              axe4_coherence: "Le vocatif rabbana est invariablement au sens de seigneur dans le Coran. Aucune invocation n'utilise rabbana au sens de « notre croissance ».",
              axe5_frequence: "La croissance est un aspect du role du Seigneur mais le vocatif porte sur la relation personnelle."
            },
            "Éducation/Accompagnement": {
              status: "nul",
              senses: ["elever un enfant", "eduquer"],
              proof_ctx: "Meme argument que pour le verset 127 — le vocatif appelle une personne, pas un acte d'education."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure"],
              proof_ctx: "Hors sujet — contexte d'invocation sacree."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "Hors sujet."
            },
            "Sens isolé/Fixer": {
              status: "nul",
              senses: ["fixer"],
              proof_ctx: "Sens isole hors sujet."
            },
            "Sens isolé/Rassembler": {
              status: "nul",
              senses: ["rassembler"],
              proof_ctx: "Sens isole hors sujet."
            },
            "Sens isolé/Groupe": {
              status: "nul",
              senses: ["groupe"],
              proof_ctx: "Sens isole hors sujet."
            },
            "Sens isolé/Confiture": {
              status: "nul",
              senses: ["confiture"],
              proof_ctx: "Sens isole hors sujet."
            }
          }
        }
      },
      // jel pos=2
      {
        word_key: "jel", position: 2, sense_chosen: "faire",
        analysis_axes: {
          sense_chosen: "faire",
          concept_chosen: "Action/Réalisation",
          concepts: {
            "Action/Réalisation": {
              status: "retenu",
              senses: ["faire", "rendre", "placer", "commencer a", "etablir", "creer"],
              proof_ctx: "Le verbe ij'alna est un imperatif 2MS de la racine j-'-l avec pronom suffixe 1MP (na). Le Lane's donne : faire, rendre, placer, etablir. L'action est un acte de transformation — « fais de nous des soumis » signifie : transforme notre etat, rends-nous soumis. Le verbe j-'-l est le verbe de la transformation par excellence — il prend un etat initial et le change en etat final. L'imperatif est une demande humble a Dieu. Le pronom na (nous) designe Abraham et Ismael. La distinction avec la recompense (nul) est que le contexte est la transformation d'etat, pas la retribution.",
              axe1_verset: "Le verbe ij'alna est le premier imperatif du verset apres le vocatif. Le champ lexical (soumis, descendance, communaute, rites) montre que la demande porte sur une transformation profonde — devenir soumis, avoir une descendance soumise, connaitre les rites. Le verbe « faire » est le vecteur de cette transformation. Abraham ne demande pas de devenir riche ou puissant — il demande d'etre rendu soumis.",
              axe2_voisins: "Le verset 127 demandait l'agrement. Le verset 128 demande la transformation — un pas de plus. L'agrement porte sur l'oeuvre passee, la transformation porte sur l'etat present et futur. La progression est : valide ce que nous avons fait (127) → transforme ce que nous sommes (128).",
              axe3_sourate: "La racine j-'-l est une des plus frequentes de la sourate al-Baqarah. En 2:22, « Il a fait de la terre un tapis ». En 2:125, « Nous avons fait de la Maison un lieu de rassemblement ». La sourate utilise j-'-l pour les actes de creation et de transformation divine — Dieu fait, etablit, transforme.",
              axe4_coherence: "La racine j-'-l apparait environ 340 fois dans le Coran. En 2:143, « Nous avons fait de vous une communaute mediane ». En 21:73, « Nous les avons faits des guides ». Le Coran montre que Dieu transforme les etats par Sa volonte — la demande « fais de nous » est une demande de transformation par la puissance divine.",
              axe5_frequence: "Pour la mission du khalifa, demander a Dieu de « faire de nous » montre que la transformation n'est pas un acte solitaire. Le khalifa ne se transforme pas seul — il demande l'aide divine. La soumission est un don de Dieu autant qu'un effort humain."
            },
            "Sens isolé/Récompense": {
              status: "nul",
              senses: ["recompense"],
              proof_ctx: "Le sens de recompense est un usage rare et specifique de j-'-l. Le contexte est la transformation d'etat, pas la retribution."
            }
          }
        }
      },
      // slm pos=3 (muslimayni)
      {
        word_key: "slm", position: 3, sense_chosen: "se soumettre",
        analysis_axes: {
          sense_chosen: "se soumettre",
          concept_chosen: "Paix/Soumission",
          concepts: {
            "Paix/Soumission": {
              status: "retenu",
              senses: ["paix", "soumission", "islam", "salut"],
              proof_ctx: "Le mot muslimayni est un duel masculin accusatif du participe actif de la forme IV de la racine s-l-m. Le Lane's donne : celui qui se soumet, celui qui remet sa volonte a Dieu. Le participe actif (muslim) designe celui qui accomplit activement l'acte de soumission — c'est un etat choisi et maintenu. Le duel (muslimayni, pas muslimin pluriel) precise qu'ils sont exactement deux — Abraham et Ismael. La soumission (islam) est l'acte de remettre sa volonte entiere a Dieu — c'est directionnel du serviteur vers Dieu. La preposition « la-ka » (pour Toi) precise la direction — la soumission est pour Dieu seul. La distinction avec la paix est que le contexte demande un etat de soumission active, pas un etat de tranquillite. La distinction avec « sain et sauf » est que le contexte est spirituel (se soumettre a Dieu), pas physique.",
              axe1_verset: "Le mot muslimayni est le predicat de la demande — « fais de nous deux des soumis ». Le champ lexical (Seigneur, fais, pour Toi, descendance, communaute soumise) montre que la soumission est le theme central du verset. La demande porte d'abord sur eux-memes (deux soumis), puis sur leur descendance (une communaute soumise). La soumission est personnelle d'abord, communautaire ensuite.",
              axe2_voisins: "Le verset 127 montrait l'acte de construction. Le verset 128 demande l'etat interieur qui accompagne l'acte — la soumission. Le verset 131 repondra : « soumets-toi ! Il dit : je me suis soumis au Seigneur des mondes ». La progression est : construire (127) → demander la soumission (128) → l'obtenir (131).",
              axe3_sourate: "La racine s-l-m est structurante dans la sourate al-Baqarah. En 2:112, « celui qui soumet son visage a Dieu ». En 2:131, « je me suis soumis au Seigneur des mondes ». En 2:136, « nous Lui sommes soumis ». La sourate presente la soumission comme l'etat fondamental du croyant — la relation premiere entre l'humain et Dieu.",
              axe4_coherence: "La racine s-l-m apparait environ 157 fois dans le Coran. Le mot muslim designe celui qui se soumet a Dieu. En 3:67, Abraham n'etait ni juif ni chretien mais « muslim hanif ». En 22:78, « Il vous a nommes les muslimun ». Le Coran presente la soumission comme l'attitude commune a tous les prophetes — Abraham est le premier muslim au sens coranique.",
              axe5_frequence: "Pour la mission du khalifa, la soumission a Dieu est la condition premiere de la mission. Le khalifa ne peut representer Dieu sur terre que s'il se soumet a Dieu d'abord. Abraham demande la soumission — il ne la presume pas. Le khalifa doit demander a Dieu de le rendre soumis, car la soumission authentique est un don divin autant qu'un effort humain."
            },
            "Intégrité/Santé": {
              status: "nul",
              senses: ["sain et sauf"],
              proof_ctx: "Le sens d'integrite physique est hors sujet — le mot est un participe actif (celui qui se soumet) dans un contexte de priere pour la soumission a Dieu, pas pour la sante."
            }
          }
        }
      },
      // dh rw pos=8
      {
        word_key: "dh rw", position: 8, sense_chosen: "descendance",
        analysis_axes: {
          sense_chosen: "descendance",
          concept_chosen: "Descendance/Multiplication",
          concepts: {
            "Descendance/Multiplication": {
              status: "retenu",
              senses: ["progeniture"],
              proof_ctx: "Le mot dhurriyyatina est un nom feminin singulier de la racine dh-r-w avec pronom suffixe 1MP (na). Le Lane's donne : progeniture, descendance, enfants et petits-enfants. La descendance est ce qui se multiplie a travers les generations — de la graine initiale aux branches qui se repandent dans le temps. Le mot est au genitif apres « min » (de notre descendance). Abraham et Ismael demandent que de leur progeniture sorte une communaute soumise — la soumission se transmet de generation en generation. La distinction avec la dispersion (nul) est que le mot est un nom designant les enfants, pas un verbe de dispersion. La distinction avec l'atome (nul) est que le contexte est la descendance humaine, pas les particules infimes.",
              axe1_verset: "Le mot dhurriyyatina etend la demande au-dela d'Abraham et Ismael eux-memes. D'abord « fais de nous deux des soumis », puis « de notre descendance une communaute soumise ». Le champ lexical (soumis, communaute, rites, repentir) montre que la priere couvre le present (les deux priants) et le futur (leur descendance). La descendance est le pont entre les generations.",
              axe2_voisins: "Le verset 124 mentionnait la descendance d'Abraham dans le contexte du pacte : « Et ma descendance ? ». Le verset 128 reprend le souci de la descendance — Abraham prie pour que ses descendants soient soumis. La preoccupation d'Abraham pour sa descendance est un fil conducteur du passage 124-129.",
              axe3_sourate: "La racine dh-r-w apparait dans la sourate al-Baqarah en 2:124, 2:128, 2:266. En 2:124, Dieu repondait qu'Il n'accorderait pas Son pacte aux injustes parmi la descendance d'Abraham. En 2:128, Abraham prie pour que de sa descendance naisse une communaute soumise. La sourate montre que la descendance n'herite pas automatiquement — la soumission doit etre demandee et meritee.",
              axe4_coherence: "Le mot dhurriyya apparait environ 32 fois dans le Coran. En 3:34, la descendance d'Adam, Nuh, Ibrahim. En 19:58, « de la descendance d'Adam et de ceux que Nous avons portes avec Nuh ». Le Coran trace les lignees prophetiques et montre que la foi se transmet mais n'est pas hereditaire — chaque generation doit choisir.",
              axe5_frequence: "Pour la mission du khalifa, la descendance est le prolongement de la mission. Le khalifa ne travaille pas seulement pour lui-meme — il travaille pour les generations futures. La priere d'Abraham pour sa descendance montre que la mission se projette dans le temps. Le khalifa batit pour l'avenir."
            },
            "Dispersion/Éparpillement": {
              status: "nul",
              senses: ["disperser"],
              proof_ctx: "Le sens de dispersion est le sens physique premier de la racine — repandre, eparpiller. Le contexte est la descendance humaine (les enfants), pas l'acte de disperser."
            },
            "Petitesse/Infime": {
              status: "nul",
              senses: ["atome"],
              proof_ctx: "Le sens d'atome est un derive de la racine (la plus petite chose). Le contexte est la progeniture, pas les particules infimes."
            }
          }
        }
      },
      // amm pos=9
      {
        word_key: "amm", position: 9, sense_chosen: "communaute",
        analysis_axes: {
          sense_chosen: "communaute",
          concept_chosen: "Origine/Communauté",
          concepts: {
            "Origine/Communauté": {
              status: "retenu",
              senses: ["mere", "nation", "communaute"],
              proof_ctx: "Le mot ummatan est un nom feminin singulier indefini accusatif de la racine a-m-m. Le Lane's donne : communaute, nation, groupe uni autour d'un meme objectif. L'umma est un groupe qui partage une direction commune — elle se distingue des autres groupes par son unite autour d'une cause. L'indefini (ummatan, sans article) marque qu'Abraham demande qu'une communaute (un groupe specifique parmi les descendants) soit soumise — pas necessairement tous les descendants mais un groupe uni dans la soumission. La meme racine donne umm (mere) car la communaute est comme une mere qui rassemble ses enfants. Mais ici le sens est clairement communautaire, pas maternel — le mot est qualifie par « soumise pour Toi » et se rapporte a la descendance.",
              axe1_verset: "Le mot ummatan est l'objet de la deuxieme demande — « de notre descendance une communaute soumise ». Le champ lexical (soumis, descendance, rites) montre que la communaute est le projet d'avenir — Abraham ne prie pas pour des individus isoles mais pour un groupe uni. La communaute soumise est le resultat espere de la construction de la Maison — un lieu qui rassemble une communaute devouee.",
              axe2_voisins: "Le verset 125 faisait de la Maison un lieu de rassemblement. Le verset 128 parle de communaute. Le lien est direct — le lieu (Maison) rassemble un groupe (communaute). La construction physique (127) prepare le rassemblement communautaire (128). Le verset 143 parlera de « communaute mediane » (ummatan wasatan) — la reponse de Dieu a la priere d'Abraham.",
              axe3_sourate: "Le mot umma apparait dans la sourate al-Baqarah en 2:128, 2:134, 2:141, 2:143, 2:213. La sourate utilise umma pour designer les communautes dans leur dimension collective. En 2:143, « Nous avons fait de vous une communaute mediane » — la communaute soumise demandee par Abraham est peut-etre cette communaute mediane.",
              axe4_coherence: "Le mot umma apparait environ 64 fois dans le Coran. En 10:19, « les gens n'etaient qu'une seule communaute ». En 16:120, « Abraham etait une communaute a lui seul ». Le Coran utilise umma pour le groupe et parfois pour l'individu exemplaire (Abraham = une communaute). Le verset 128 place la communaute dans la descendance d'Abraham — le Coran repond a cette priere par la naissance de la communaute musulmane.",
              axe5_frequence: "Pour la mission du khalifa, la communaute est le cadre de la mission. Le khalifa ne travaille pas seul — il agit dans et pour une communaute. Abraham prie pour une communaute soumise — un groupe uni dans la soumission a Dieu. La mission du khalifa est communautaire par nature."
            }
          }
        }
      },
      // slm pos=10 (muslimatan)
      {
        word_key: "slm", position: 10, sense_chosen: "se soumettre",
        analysis_axes: {
          sense_chosen: "se soumettre",
          concept_chosen: "Paix/Soumission",
          concepts: {
            "Paix/Soumission": {
              status: "retenu",
              senses: ["paix", "soumission", "islam", "salut"],
              proof_ctx: "Le mot muslimatan est un feminin singulier accusatif du participe actif de la forme IV de la racine s-l-m. Meme analyse que pour muslimayni en position 3 — la soumission est un etat choisi et actif. Le feminin s'accorde avec umma (communaute, feminin). La preposition « la-ka » (pour Toi) precise que la communaute se soumet a Dieu. La repetition de muslim (d'abord au duel pour les deux priants, puis au feminin pour la communaute) montre que la soumission doit se propager — des individus au groupe, du present au futur.",
              axe1_verset: "Le mot muslimatan qualifie la communaute demandee — une communaute soumise. Le champ lexical montre la progression : « nous deux soumis » → « une communaute soumise ». La soumission n'est pas seulement individuelle — elle doit etre collective. La repetition du mot muslim en deux positions montre l'insistance sur la soumission comme etat fondamental.",
              axe2_voisins: "Le verset 131 repondra a cette priere : « je me suis soumis au Seigneur des mondes ». Le verset 132 ajoutera : « Abraham fit cette recommandation a ses fils ». La soumission demandee dans le verset 128 se transmet effectivement a travers les generations comme une recommandation testamentaire.",
              axe3_sourate: "La sourate al-Baqarah insiste sur la soumission comme heritage prophetique. En 2:132, « Abraham recommanda a ses fils : ne mourez pas sans etre soumis ». La soumission est le testament d'Abraham — ce qu'il laisse a sa descendance. Le verset 128 est la priere qui precede cette recommandation.",
              axe4_coherence: "Le Coran presente la soumission comme la religion commune a tous les prophetes. En 3:67, Abraham est muslim. En 10:72, Nuh est muslim. En 27:44, la reine de Saba se soumet. La soumission transcende les epoques et les peuples — la communaute soumise demandee par Abraham est la communaute de tous les soumis.",
              axe5_frequence: "Pour la mission du khalifa, la soumission collective est l'objectif de la mission. Le khalifa ne cherche pas seulement sa propre soumission mais celle de la communaute. Abraham prie pour une communaute soumise — le khalifa travaille a la realiser."
            },
            "Intégrité/Santé": {
              status: "nul",
              senses: ["sain et sauf"],
              proof_ctx: "Meme argument que pour la position 3 — le contexte est la soumission spirituelle a Dieu."
            }
          }
        }
      },
      // ray pos=14
      {
        word_key: "ray", position: 14, sense_chosen: "montrer",
        analysis_axes: {
          sense_chosen: "montrer",
          concept_chosen: "Vision/Perception",
          concepts: {
            "Vision/Perception": {
              status: "retenu",
              senses: ["voir", "percevoir"],
              proof_ctx: "Le verbe arina est un imperatif 2MS de la forme IV de la racine r-a-y avec pronom suffixe 1MP (na). Le Lane's donne : montrer, faire voir. La forme IV (af'ala) est causative — « fais-nous voir » c'est-a-dire « montre-nous ». La vision est la perception qui permet de connaitre — montrer les rites c'est faire en sorte que les priants voient et comprennent comment adorer. L'objet de la vision est manasikana (nos rites) — les actes de devotion specifiques au pelerinage. La distinction avec l'opinion (nul) est que le verbe est un imperatif causatif (montre-nous), pas un nom (avis).",
              axe1_verset: "Le verbe arina est la troisieme demande du verset apres « fais de nous des soumis » et la demande pour la descendance. Le champ lexical (rites, soumis, Seigneur) montre que la vision porte sur la pratique — Abraham et Ismael demandent a voir les rites pour savoir comment adorer. La soumission sans connaissance des rites est incomplete — il faut savoir comment exprimer la soumission concretement.",
              axe2_voisins: "Le verset 125 commandait de purifier la Maison pour ceux qui tournent autour, ceux qui s'y retirent et ceux qui prient. Le verset 128 demande les rites de cette Maison — les actes specifiques que les adorateurs doivent accomplir. La purification (125) prepare le lieu, les rites (128) definissent la pratique.",
              axe3_sourate: "La racine r-a-y apparait dans la sourate al-Baqarah sous diverses formes. En 2:258, Abraham dit « fais-moi voir comment Tu donnes la vie aux morts ». En 2:55, « fais-nous voir Dieu ouvertement ». La demande de vision est un theme de la sourate — voir c'est comprendre, et Abraham demande a comprendre les rites.",
              axe4_coherence: "La racine r-a-y apparait environ 271 fois dans le Coran. La forme IV (montrer, faire voir) est frequente. En 2:260, Abraham dit : « montre-moi comment Tu donnes la vie aux morts ». La demande de vision divine est un privilege prophetique — Dieu montre a Ses serviteurs ce qu'ils ont besoin de voir pour accomplir leur mission.",
              axe5_frequence: "Pour la mission du khalifa, demander a Dieu de montrer les rites est un acte d'humilite. Le khalifa ne presume pas connaitre les formes du culte — il demande a etre guide. La vision est le prealable de la pratique — on ne peut pratiquer que ce qu'on a vu et compris."
            },
            "Jugement/Avis": {
              status: "nul",
              senses: ["opinion", "avis"],
              proof_ctx: "Le sens d'opinion est hors sujet — le verbe est un imperatif causatif (fais-nous voir), pas un nom (avis personnel)."
            },
            "Apparition": {
              status: "nul",
              senses: ["apparaitre"],
              proof_ctx: "Le sens d'apparition est intransitif (apparaitre soi-meme). Le contexte est transitif et causatif (montrer quelque chose a quelqu'un)."
            }
          }
        }
      },
      // nsk pos=15
      {
        word_key: "nsk", position: 15, sense_chosen: "rites",
        analysis_axes: {
          sense_chosen: "rites",
          concept_chosen: "Rite/Cérémonie",
          concepts: {
            "Rite/Cérémonie": {
              status: "retenu",
              senses: ["rites du pelerinage", "lieux des rites"],
              proof_ctx: "Le mot manasikana est un pluriel masculin de la racine n-s-k avec pronom suffixe 1MP (na). Le Lane's donne : rites, lieux de culte, ceremonies du pelerinage. Les manasik sont les actes et les lieux specifiques du pelerinage — les gestes rituels, les stations, les parcours. Le pluriel marque que les rites sont multiples (tawaf, sa'y, station a Arafa, etc.). Le possessif « na » (nos) marque que ces rites leur sont propres — ils sont donnes par Dieu a Abraham et Ismael pour la Maison qu'ils construisent. La distinction avec la devotion (probable) est que manasik designe specifiquement les ceremonies et les lieux, pas l'etat interieur de devotion. La distinction avec le sacrifice (nul) est que le pluriel manasik englobe l'ensemble des rites, pas seulement l'acte de sacrifier.",
              axe1_verset: "Le mot manasikana est l'objet de la demande « montre-nous ». Le champ lexical (Maison, soumis, communaute, Seigneur) situe les rites dans le contexte de la construction de la Kaaba. Les rites sont les actes pratiques qui donnent corps a la soumission — sans rites, la soumission reste abstraite. Abraham et Ismael construisent le lieu (Maison) et demandent les actes (rites) qui s'y pratiquent.",
              axe2_voisins: "Le verset 125 mentionnait ceux qui tournent autour de la Maison, ceux qui s'y retirent et ceux qui prient. Le verset 128 demande les rites — les actes que ces adorateurs doivent accomplir. Le verset 158 mentionnera Safa et Marwa comme « min sha'a'iri Allah » (parmi les rites de Dieu). Les rites sont les formes concretes de l'adoration au lieu sacre.",
              axe3_sourate: "La racine n-s-k apparait dans la sourate al-Baqarah en 2:128, 2:196, 2:200. En 2:196, « accomplissez le pelerinage et la visite pour Dieu ». En 2:200, les rites du pelerinage sont detailles. La sourate contient les regles du pelerinage — les rites demandes par Abraham dans le verset 128 sont enumeres plus loin dans la sourate.",
              axe4_coherence: "La racine n-s-k apparait environ 7 fois dans le Coran. En 22:34, « a chaque communaute Nous avons assigne un rite ». En 22:67, « a chaque communaute Nous avons assigne des rites ». Le Coran montre que chaque communaute recoit ses rites — Abraham demande les rites propres a la Maison qu'il construit.",
              axe5_frequence: "Pour la mission du khalifa, les rites sont les formes concretes de la soumission. Le khalifa ne se soumet pas dans l'abstrait — il pratique des actes specifiques. Abraham demande a connaitre ces actes — le khalifa doit les apprendre et les transmettre. Les rites structurent la vie communautaire autour de la Maison sacree."
            },
            "Dévotion/Culte": {
              status: "probable",
              senses: ["adorer", "se consacrer a la devotion", "devenir devot"],
              proof_ctx: "Le sens de devotion est l'etat interieur qui accompagne les rites. La distinction philosophique avec les rites est que la devotion est un etat d'ame (l'intention de se consacrer a Dieu), tandis que les rites sont les actes exterieurs (les gestes et les parcours). Le mot manasik est au pluriel avec un possessif — « nos rites » designe des actes specifiques, pas un etat interieur. On demande a « voir » (arina) des rites — on voit des actes, pas un etat d'ame. La devotion est le moteur, les rites sont les formes.",
              axe1_verset: "Le sens de devotion est possible car Abraham et Ismael sont dans un etat de devotion. Mais le verbe « montre-nous » demande de voir quelque chose de concret — des actes, pas un etat. Le sens de rites est plus adapte au verbe « montrer ».",
              axe2_voisins: "Les versets voisins parlent de la Maison et de ses pratiques — la purification (125), la construction (127), les rites (128). Le contexte est pratique et concret, pas abstrait et interieur.",
              axe3_sourate: "La sourate al-Baqarah enumere les rites du pelerinage en detail (2:196-203). Le mot manasik dans ce contexte designe ces actes specifiques, pas l'etat de devotion en general.",
              axe4_coherence: "Le Coran distingue les rites (manasik, actes exterieurs) de l'adoration interieure (ibada, devotion). Les deux sont complementaires mais distincts.",
              axe5_frequence: "La devotion est le fondement des rites — mais Abraham demande les formes concretes (montre-nous), pas le sentiment interieur."
            },
            "Sacrifice": {
              status: "nul",
              senses: ["bete sacrifiee"],
              proof_ctx: "Le sens de sacrifice est un sous-ensemble des rites. Le pluriel manasik englobe l'ensemble des rites, pas seulement le sacrifice."
            },
            "Purification": {
              status: "nul",
              senses: ["purifier un vetement"],
              proof_ctx: "Le sens de purification vestimentaire est un usage rare et specifique. Le contexte est les rites du pelerinage, pas le nettoyage des habits."
            }
          }
        }
      },
      // twb pos=17 (tub — imperatif)
      {
        word_key: "twb", position: 17, sense_chosen: "revenir",
        analysis_axes: {
          sense_chosen: "revenir",
          concept_chosen: "Retour",
          concepts: {
            "Retour": {
              status: "retenu",
              senses: ["revenir", "se repentir", "accepter le repentir", "repentir"],
              proof_ctx: "Le verbe tub est un imperatif 2MS de la racine t-w-b. Le Lane's donne : revenir, se retourner vers, se repentir. Quand le sujet est Dieu et que la preposition est « 'ala » (sur/vers), le sens est « revenir vers quelqu'un pour lui accorder le pardon ». L'imperatif est une demande d'Abraham et Ismael : « reviens vers nous » — c'est-a-dire « tourne-Toi vers nous avec pardon ». Le retour est un mouvement directionnel — Dieu se tourne vers le serviteur qui s'est tourne vers Lui. C'est un double mouvement : le serviteur revient (repentir) et Dieu revient (pardon). Ce sens est le seul de la racine — il n'y a pas d'alternative a classer.",
              axe1_verset: "Le verbe tub est la quatrieme demande du verset apres la soumission, la descendance et les rites. Le champ lexical (Seigneur, soumis, rites, Celui qui revient sans cesse, Misericordieux) montre que le retour divin est le complement du retour humain. Abraham et Ismael demandent d'abord la soumission, puis les rites, puis le retour divin — la sequence est : etat → pratique → pardon.",
              axe2_voisins: "Le verset 127 demandait l'agrement. Le verset 128 ajoute la demande de retour — meme ceux qui construisent la Maison sacree ont besoin du pardon divin. Le verset 128 montre l'humilite d'Abraham — il ne presume pas etre exempt de fautes. Le verset 160 reprendra : « ceux-la, Je reviens vers eux, et Je suis Celui qui revient sans cesse ».",
              axe3_sourate: "La racine t-w-b est importante dans la sourate al-Baqarah. En 2:37, « Il revint vers lui ». En 2:54, « Il revint vers vous ». En 2:160, « Je reviens vers eux ». La sourate montre le retour divin comme une constante — Dieu revient vers ceux qui reviennent vers Lui.",
              axe4_coherence: "La racine t-w-b apparait environ 87 fois dans le Coran. Le retour est toujours bilateral — le serviteur revient (taba ila Allah) et Dieu revient (taba 'alayhi). En 9:118, « puis Il revint vers eux pour qu'ils reviennent ». Le Coran montre que le retour divin precede parfois le retour humain — Dieu ouvre la porte du pardon.",
              axe5_frequence: "Pour la mission du khalifa, demander le retour divin est essentiel. Le khalifa n'est pas infaillible — il a besoin du pardon. Abraham lui-meme, constructeur de la Maison sacree, demande le retour. Le khalifa doit se tourner vers Dieu regulierement et demander Son retour."
            }
          }
        }
      },
      // nt pos=20 (pronom anta dans V128)
      {
        word_key: "nt", position: 20, sense_chosen: "toi",
        analysis_axes: {
          sense_chosen: "toi",
          concept_chosen: "Notation",
          concepts: {
            "Notation": {
              status: "retenu",
              senses: ["prendre note"],
              proof_ctx: "Le mot anta est un pronom personnel de 2e personne masculin singulier. Le Lane's donne : tu, toi. Le pronom est emphatique ici — il renforce l'identification apres la particule innaka (en verite tu). Dire « innaka anta at-tawwabu ar-rahimu » c'est insister : c'est TOI (et personne d'autre) qui reviens sans cesse et qui es Misericordieux. Le pronom cree une relation directe et exclusive — la designation est sans ambiguite. La racine n-w-t n'est pas pertinente pour le sens du pronom.",
              axe1_verset: "Le pronom anta renforce l'affirmation finale du verset. Apres les quatre demandes (soumission, descendance, rites, retour), Abraham et Ismael justifient leur confiance : en verite, TOI, tu reviens sans cesse et tu es Misericordieux. L'emphase montre la certitude dans les attributs divins.",
              axe2_voisins: "Le verset 127 utilisait « innaka anta as-sami'u al-'alimu ». Le verset 128 utilise « innaka anta at-tawwabu ar-rahimu ». Le patron est identique — le pronom emphatique introduit un couple d'attributs divins. Chaque invocation se conclut par cette affirmation de foi.",
              axe3_sourate: "La sourate al-Baqarah utilise le patron « innaka anta » dans les invocations. En 2:32, « innaka anta al-'alimu al-hakimu ». Ce patron est un marqueur d'invocation dans la sourate.",
              axe4_coherence: "Le patron « innaka anta + attributs » est recurrent dans les invocations coraniques. En 5:118, « innaka anta al-'azizu al-hakimu ». Ce patron affirme les attributs divins avec certitude et emphase.",
              axe5_frequence: "Pour la mission du khalifa, affirmer les attributs divins avec certitude est la base de la confiance. Le khalifa sait que Dieu revient et pardonne — cette certitude nourrit la perseverance."
            }
          }
        }
      },
      // twb pos=21 (at-tawwabu — attribut)
      {
        word_key: "twb", position: 21, sense_chosen: "revenir",
        analysis_axes: {
          sense_chosen: "revenir",
          concept_chosen: "Retour",
          concepts: {
            "Retour": {
              status: "retenu",
              senses: ["revenir", "se repentir", "accepter le repentir", "repentir"],
              proof_ctx: "Le mot at-tawwabu est un adjectif qualificatif defini de la racine t-w-b, forme intensive fa''al. Le Lane's donne : celui qui revient sans cesse, celui qui accepte le repentir de maniere repetee et constante. La forme intensive (tawwab, pas ta'ib) souligne la repetition — Dieu ne revient pas une seule fois mais constamment, chaque fois que le serviteur revient. L'article defini (at-tawwab) donne un sens absolu — Celui qui revient sans cesse par excellence. Le mot qualifie Dieu comme premier attribut du couple final. La distinction avec le verbe « tub » (position 17) est que le verbe est une demande ponctuelle (reviens vers nous maintenant), tandis que l'adjectif est un attribut permanent (Tu es Celui qui revient toujours).",
              axe1_verset: "Le mot at-tawwabu est le premier des deux attributs divins qui ferment le verset. Le champ lexical (soumis, rites, reviens) montre que le retour est le couronnement de la sequence — apres la soumission et les rites, le pardon. Le couple tawwab-rahim (Celui qui revient sans cesse, le Misericordieux) repond aux demandes du verset : Dieu accepte la soumission et accueille le repentir avec compassion.",
              axe2_voisins: "Le verset 127 se terminait par sami'-'alim (Celui qui entend, Celui qui sait). Le verset 128 se termine par tawwab-rahim (Celui qui revient sans cesse, le Misericordieux). Les attributs changent pour repondre au contenu de l'invocation — l'ecoute et le savoir pour l'agrement, le retour et la misericorde pour le repentir.",
              axe3_sourate: "L'attribut at-tawwab apparait dans la sourate al-Baqarah en 2:37, 2:54, 2:128, 2:160. La sourate insiste sur le retour divin comme reponse au repentir humain. En 2:37, Dieu revient vers Adam apres sa faute. En 2:54, Dieu revient vers les Israelites. Le retour divin est une constante de la sourate.",
              axe4_coherence: "L'attribut at-tawwab apparait environ 11 fois dans le Coran. Il est souvent couple avec ar-rahim (2:54, 2:128, 9:104, 49:12). Le couple tawwab-rahim montre que le retour divin est accompagne de compassion — Dieu ne revient pas avec reproche mais avec misericorde.",
              axe5_frequence: "Pour la mission du khalifa, savoir que Dieu revient sans cesse est une source d'espoir. Le khalifa commet des erreurs — mais Dieu revient toujours. Cette certitude empeche le desespoir et encourage la perseverance. Le retour est la porte ouverte en permanence."
            }
          }
        }
      },
      // rhm pos=22
      {
        word_key: "rhm", position: 22, sense_chosen: "misericorde",
        analysis_axes: {
          sense_chosen: "misericorde",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["misericorde", "pardon", "traiter avec compassion", "le Compatissant"],
              proof_ctx: "Le mot ar-rahimu est un adjectif qualificatif defini de la racine r-h-m. Le Lane's donne : le misericordieux, celui qui traite avec compassion. La misericorde est un acte dirige vers l'exterieur — elle sort de celui qui l'accorde et atteint celui qui la recoit. L'article defini (ar-rahim) donne un sens absolu — le Misericordieux par excellence. L'adjectif qualifie Dieu comme deuxieme attribut apres at-tawwab. La misericorde complete le retour — Dieu revient et traite avec compassion. La distinction avec l'uterus (nul) est que le contexte est l'attribut divin, pas l'organe reproducteur. La distinction avec la parente (nul) est que le mot qualifie Dieu, pas un lien familial.",
              axe1_verset: "Le mot ar-rahimu est le dernier mot du verset — il ferme l'invocation d'Abraham et Ismael. Le champ lexical (Seigneur, soumis, rites, reviens, Celui qui revient sans cesse) montre que la misericorde est l'aboutissement de toute la priere. Dieu entend (127), sait (127), revient (128) et traite avec misericorde (128). La progression des attributs montre la generosite divine : perception → connaissance → retour → compassion.",
              axe2_voisins: "Le verset 127 se terminait par l'ecoute et le savoir. Le verset 128 se termine par le retour et la misericorde. La progression montre que les attributs de Dieu repondent aux besoins des priants — l'ecoute pour la demande d'agrement, la misericorde pour la demande de pardon. Le verset 129 demandera l'envoi d'un messager — une autre dimension de la misericorde divine.",
              axe3_sourate: "La racine r-h-m est une des plus frequentes de la sourate al-Baqarah. En 2:37, « Il est Celui qui revient sans cesse, le Misericordieux ». En 2:143, « Dieu est envers les gens Compatissant et Misericordieux ». La sourate couple souvent le retour et la misericorde — les deux vont ensemble.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran. L'attribut ar-Rahim est un des noms divins les plus frequents — il ouvre chaque sourate dans la Basmala (ar-Rahman ar-Rahim). Le Coran presente la misericorde comme l'attribut divin englobant — « Ma misericorde embrasse toute chose » (7:156).",
              axe5_frequence: "Pour la mission du khalifa, la misericorde divine est le filet de securite de la mission. Le khalifa sait qu'il peut echouer — mais la misericorde de Dieu couvre ses faiblesses. La misericorde n'est pas la permission de faillir mais la garantie que le retour est toujours possible. Le khalifa doit lui-meme traiter les autres avec misericorde — a l'image de l'attribut divin."
            },
            "Utérus/Reproduction": {
              status: "nul",
              senses: ["uterus", "vulve"],
              proof_ctx: "Le sens d'uterus est le sens physique premier de r-h-m. Le contexte est l'attribut divin de compassion, pas l'organe reproducteur."
            },
            "Parenté/Lien familial": {
              status: "nul",
              senses: ["lien de parente", "parents par les femmes"],
              proof_ctx: "Le sens de parente est un derive de r-h-m (la misericorde nait du lien uterin). Le contexte est l'attribut divin, pas un lien familial."
            },
            "Provision/Bienfait matériel": {
              status: "nul",
              senses: ["subsistance", "pluie", "abondance"],
              proof_ctx: "Le sens de provision est un derive lointain. Le contexte est la qualification divine, pas un bienfait materiel."
            },
            "Lieu/Géographie": {
              status: "nul",
              senses: ["La Mecque", "Medine"],
              proof_ctx: "Le sens geographique est hors sujet — le mot est un attribut divin, pas un toponyme."
            },
            "Sens isolé/Outre": {
              status: "nul",
              senses: ["outre abimee"],
              proof_ctx: "Sens isole sans rapport avec le contexte."
            },
            "Sens isolé/La": {
              status: "nul",
              senses: ["la crainte vaut mieux que la pitie"],
              proof_ctx: "Sens isole sans rapport avec le contexte."
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

  const verseIds = [134, 135];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 127-128 ===\n');
  await processVerse(127);
  await processVerse(128);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V127-128 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
