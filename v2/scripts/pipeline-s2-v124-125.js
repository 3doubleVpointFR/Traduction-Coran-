const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 124-125
// V124: verse_id=131, analysis_id=490
// V125: verse_id=132, analysis_id=491
// =====================================================

const verseData = {
  124: {
    verse_id: 131,
    analysis_id: 490,
    translation_arab: "Et quand son Seigneur eprouva Ibrahim par des paroles, et qu'il les accomplit, Il dit : certes Je fais de toi un exemple pour les gens. Il dit : et de ma descendance ? Il dit : Mon engagement n'atteint pas les injustes.",
    full_translation: "Et [rappelez-vous], quand ton Seigneur eut eprouve Abraham par certains commandements, et qu'il les eut accomplis, le Seigneur lui dit: Je vais faire de toi un exemple pour les gens. - Et parmi ma descendance? demanda-t-il. - Mon engagement ne s'etend pas aux injustes dit-Il.",
    translation_explanation: `§DEMARCHE§
Le verset rapporte un echange entre Dieu et Ibrahim. Le verbe **ibtala** est un accompli 3MS de la racine b-t-l a la forme VIII. Le Lane's donne : eprouver, tester, mettre a l'epreuve. La forme VIII (ifta'ala) indique un effort soutenu — l'epreuve est rigoureuse et approfondie. L'accompli marque que l'epreuve a eu lieu et s'est achevee. Le sujet est **rabbuhu** (son Seigneur) — c'est Dieu qui eprouve, pas un ennemi. L'objet est **Ibrahima** (Ibrahim) a l'accusatif, il recoit l'epreuve. Le mot **rabbuhu** est un nom masculin singulier nominatif de la racine r-b-b avec pronom suffixe 3MS. Le Lane's donne : seigneur, maitre, celui qui eleve et entretient. Le rabb est celui qui fait grandir — eprouver fait partie de l'education. Le pronom suffixe **hu** (son) cree un lien personnel — c'est SON Seigneur, pas un seigneur abstrait.

La preposition **bi** (avec, par) introduit l'instrument de l'epreuve : **kalimatin** (des paroles). Le mot kalimatin est un pluriel feminin indefini de la racine k-l-m au genitif. Le Lane's donne : parole, mot, enonce. Les paroles sont l'instrument de l'epreuve — Dieu eprouve Ibrahim par des injonctions verbales, pas par des calamites. L'indefini (sans article) laisse indeterminees ces paroles — le texte ne precise pas lesquelles.

Le verbe **atammahunna** est un accompli 3MS de la racine t-m-m a la forme IV avec pronom suffixe 3FP. Le Lane's donne : completer, achever, mener a terme. La forme IV (af'ala) indique que le sujet cause l'achevement — Ibrahim a mene a terme les epreuves. Le pronom suffixe **hunna** (elles) renvoie aux kalimatin (les paroles/injonctions). La particule **fa** (donc, alors) introduit la consequence — apres l'epreuve, l'achevement.

Le verbe **qala** est un accompli 3MS de la racine q-w-l. Le Lane's donne : dire, enoncer. L'accompli situe la parole dans le passe. Le mot **inni** est la particule emphatique inna avec pronom suffixe 1S — « certes moi ». Le participe actif **ja'iluka** est de la racine j-'-l avec pronom suffixe 2MS. Le Lane's donne : faire, rendre, etablir. Le participe actif avec pronom cree une construction nominale : « Je suis celui qui te fait » — l'action est en cours ou imminente. Le mot **li-n-nasi** est le nom an-nas (les gens) au genitif avec preposition li (pour). Le Lane's donne : gens, etres humains. « Pour les gens » indique le benefice collectif de la fonction d'Ibrahim. Le mot **imaman** est un nom masculin singulier indefini accusatif de la racine a-m-m. Le Lane's donne : celui qui est devant, guide, exemple, modele. L'imam est celui qui marche devant pour que les autres le suivent — c'est un modele d'action, pas un titre honorifique vide.

Ibrahim repond par **wa min dhurriyyati** — « et de ma descendance ? ». Le mot dhurriyyati est un nom feminin singulier de la racine dh-r-w avec pronom suffixe 1S au genitif. Le Lane's donne : progeniture, descendance, enfants et leur lignee. La question d'Ibrahim porte sur l'extension de cette fonction a sa descendance — il ne demande pas pour lui seul mais aussi pour sa lignee.

Dieu repond par **la yanalu 'ahdi az-zalimina**. Le verbe yanalu est un inaccompli 3MS de la racine n-w-l. Le Lane's donne : atteindre, obtenir, parvenir a. L'inaccompli avec la negation la cree un enonce permanent : l'engagement de Dieu n'atteint PAS les injustes — jamais, c'est une regle generale. Le mot **'ahdi** est un nom masculin singulier de la racine '-h-d avec pronom suffixe 1S. Le Lane's donne : engagement, pacte, promesse. Mon engagement — c'est l'engagement de Dieu Lui-meme, Sa promesse. Le mot **az-zalimina** est un participe actif pluriel masculin defini accusatif de la racine z-l-m. Le Lane's donne : etre injuste, opprimer, placer quelque chose hors de sa place. Les zalimun sont ceux qui placent les choses la ou elles ne doivent pas etre — ils mettent l'injustice la ou devrait etre la justice.

§JUSTIFICATION§
**eprouva** — Le sens retenu est « eprouver ». Le verbe ibtala designe l'epreuve comme test. L'alternative « etre vain » (sens premier de b-t-l au sens de batil) est ecartee car la forme VIII (ifta'ala) porte specifiquement le sens d'eprouver, pas de vanite. Le contexte confirme : Dieu eprouve Ibrahim, Il ne le rend pas vain.

**Ibrahim** — Nom propre non arabe (diptote), translitteration du patriarche. La racine a-b-r dans le Lane's donne « aiguille » mais le mot est ici un nom propre emprunte, sans rapport avec cette racine.

**son Seigneur** — Le sens retenu est « seigneur ». Le mot rabb designe celui qui eleve et entretient. L'alternative « croissance » est ecartee car le mot est ici un nom de relation (son Seigneur), pas un verbe de croissance. L'alternative « usure » est ecartee car le contexte est la relation Dieu-Ibrahim.

**paroles** — Le sens retenu est « parole ». Le mot kalimatin designe des enonces divins. L'alternative « blessure » est ecartee car le contexte est l'epreuve par des injonctions verbales, pas par des blessures physiques.

**les accomplit** — Le sens retenu est « completer/achever ». Le verbe atamma designe l'achevement integral. Ibrahim a mene a terme chaque injonction sans en laisser aucune inachevee.

**dit** — Le sens retenu est « dire ». Le verbe qala designe l'enonciation. Trois occurrences dans le verset — Dieu dit, Ibrahim dit, Dieu repond. L'alternative « opinion » est ecartee car le verbe est performatif ici — c'est une declaration, pas une opinion.

**exemple** — Le sens retenu est « celui qui est devant/guide ». Le mot imam designe celui qui est place devant pour servir de modele. L'alternative « mere/communaute » est ecartee car la forme grammaticale imam (fa'al) est un nom d'agent (celui qui devance), pas umm (mere) ni umma (communaute).

**les gens** — Le sens retenu est « gens ». Le mot an-nas designe l'ensemble des etres humains. L'alternative « voir de loin » est ecartee car le mot est un nom collectif defini, pas un verbe de perception.

**descendance** — Le sens retenu est « progeniture/descendance ». Le mot dhurriyya designe les enfants et leur lignee. L'alternative « disperser » est ecartee car le mot est un nom designant la descendance, pas un verbe de dispersion.

**n'atteint pas** — Le sens retenu est « atteindre/obtenir ». Le verbe yanalu designe le fait de parvenir a quelque chose. L'engagement de Dieu ne parvient pas aux injustes — il ne les atteint pas.

**Mon engagement** — Le sens retenu est « engagement/pacte ». Le mot 'ahd designe la promesse liant deux parties. L'alternative « epoque » est ecartee car le contexte est un pacte, pas une periode de temps.

**les injustes** — Le sens retenu est « etre injuste/opprimer ». Le mot az-zalimina designe ceux qui commettent l'injustice. L'alternative « obscurite » est ecartee car le mot est un participe actif pluriel defini — « ceux qui sont injustes », pas les tenebres.

§CRITIQUE§
La traduction d'Hamidullah donne « commandements » pour kalimatin, la ou nous donnons « paroles ». Le mot kalima signifie « parole, mot » — « commandements » est une interpretation qui specifie le contenu des paroles. Nous restons au sens etymologique : des paroles. Hamidullah traduit imam par « exemple », ce qui est proche de notre « exemple ». La difference principale est que « imam » porte aussi l'idee de « celui qui est devant » — un modele actif qu'on suit, pas seulement un cas exemplaire. Le sens global du verset est identique dans les deux traductions.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "quand", phon: "idh", arabic: "\u0625\u0650\u0630\u0650", is_particle: true, position: 1 },
      { fr: "eprouva", pos: "verbe", phon: "ibtala", arabic: "\u0671\u0628\u0652\u062a\u064e\u0644\u064e\u0649\u0670\u0653", word_key: "btl", is_particle: false, sense_retenu: "eprouver", position: 2 },
      { fr: "Ibrahim", pos: "nom", phon: "ibrahima", arabic: "\u0625\u0650\u0628\u0652\u0631\u064e\u0670\u0647\u0650\u06e7\u0645\u064e", word_key: "abr", is_particle: false, sense_retenu: "Ibrahim", position: 3 },
      { fr: "son Seigneur", pos: "nom", phon: "rabbuhu", arabic: "\u0631\u064e\u0628\u0651\u064f\u0647\u064f\u06e5", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 4 },
      { fr: "avec", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 5 },
      { fr: "des paroles", pos: "nom", phon: "kalimatin", arabic: "\u0643\u064e\u0644\u0650\u0645\u064e\u0640\u0670\u062a\u064d", word_key: "klm", is_particle: false, sense_retenu: "parole", position: 6 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 7 },
      { fr: "il les accomplit", pos: "verbe", phon: "atammahunna", arabic: "\u0623\u064e\u062a\u064e\u0645\u0651\u064e\u0647\u064f\u0646\u0651\u064e", word_key: "tmm", is_particle: false, sense_retenu: "completer", position: 8 },
      { fr: "Il dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 9 },
      { fr: "certes moi", pos: "particule", phon: "inni", arabic: "\u0625\u0650\u0646\u0651\u0650\u0649", word_key: "any", is_particle: false, sense_retenu: "certes", position: 10 },
      { fr: "faisant de toi", pos: "participe_actif", phon: "ja'iluka", arabic: "\u062c\u064e\u0627\u0639\u0650\u0644\u064f\u0643\u064e", word_key: "jel", is_particle: false, sense_retenu: "faire", position: 11 },
      { fr: "pour", phon: "li", arabic: "\u0644\u0650", is_particle: true, position: 12 },
      { fr: "les gens", pos: "nom", phon: "an-nasi", arabic: "\u0644\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 13 },
      { fr: "un exemple", pos: "nom", phon: "imaman", arabic: "\u0625\u0650\u0645\u064e\u0627\u0645\u064b\u0627", word_key: "amm", is_particle: false, sense_retenu: "exemple", position: 14 },
      { fr: "il dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 15 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 16 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 17 },
      { fr: "ma descendance", pos: "nom", phon: "dhurriyyati", arabic: "\u0630\u064f\u0631\u0651\u0650\u064a\u0651\u064e\u062a\u0650\u0649", word_key: "dhrw", is_particle: false, sense_retenu: "descendance", position: 18 },
      { fr: "Il dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 19 },
      { fr: "ne pas", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 20 },
      { fr: "atteint", pos: "verbe", phon: "yanalu", arabic: "\u064a\u064e\u0646\u064e\u0627\u0644\u064f", word_key: "nwl", is_particle: false, sense_retenu: "atteindre", position: 21 },
      { fr: "Mon engagement", pos: "nom", phon: "'ahdi", arabic: "\u0639\u064e\u0647\u0652\u062f\u0650\u0649", word_key: "ehd", is_particle: false, sense_retenu: "engagement", position: 22 },
      { fr: "les injustes", pos: "nom", phon: "az-zalimina", arabic: "\u0671\u0644\u0638\u0651\u064e\u0640\u0670\u0644\u0650\u0645\u0650\u064a\u0646\u064e", word_key: "zlm", is_particle: false, sense_retenu: "injuste", position: 23 }
    ],
    words: [
      // btl pos=2
      {
        word_key: "btl", position: 2, sense_chosen: "eprouver",
        analysis_axes: {
          sense_chosen: "eprouver",
          concept_chosen: "Vanité/Nullité",
          concepts: {
            "Vanité/Nullité": {
              status: "retenu",
              senses: ["etre vain", "faux", "nul"],
              proof_ctx: "Le verbe ibtala est un accompli 3MS de la racine b-t-l a la forme VIII (ifta'ala). Le Lane's donne pour la forme VIII : eprouver, tester, mettre a l'epreuve — tandis que le sens premier de la forme I (batala) est etre vain, faux, nul. La forme VIII transforme radicalement le champ semantique : passer de la vanite a l'epreuve. Eprouver c'est soumettre a un test pour reveler la vraie nature — l'epreuve separe le vrai du vain. Le Lane's precise que ibtala implique une epreuve rigoureuse et soutenue. Ici Dieu eprouve Ibrahim par des paroles/injonctions — l'epreuve est le moyen de reveler la droiture d'Ibrahim. Le sens de vanite (batil) est la forme I, pas la forme VIII utilisee ici.",
              axe1_verset: "Le verbe ibtala ouvre le recit en posant le cadre : Dieu eprouve Ibrahim. Le champ lexical du verset tourne autour de l'epreuve et de sa reussite — eprouver, accomplir, etablir comme exemple. L'epreuve est le point de depart qui mene a la designation d'Ibrahim comme imam. Sans epreuve reussie, pas de fonction de modele. Le verset montre une chaine causale : epreuve → achevement → designation.",
              axe2_voisins: "Le verset 123 rappelait qu'Ibrahim n'etait pas parmi les associateurs. Le verset 124 montre comment cette exclusivite a ete testee — par des epreuves divines. Le verset 125 enchaine avec la designation de la Maison comme lieu de visite. La progression est : purete d'Ibrahim (123) → epreuve reussie (124) → etablissement de la Maison (125). L'epreuve est le pivot entre la purete affirmee et la fonction accordee.",
              axe3_sourate: "La sourate al-Baqarah est structuree autour des epreuves et des reactions des peuples. En 2:49, les enfants d'Israel sont eprouves par Pharaon. En 2:155, « Nous vous eprouverons par la peur, la faim ». L'epreuve d'Ibrahim s'inscrit dans ce schema souratique — chaque communaute est testee, et la qualite de la reponse determine le statut.",
              axe4_coherence: "La racine b-t-l dans sa forme VIII (ibtala) apparait en 2:124 et dans d'autres contextes d'epreuve divine. En 47:31, « Nous vous eprouverons jusqu'a connaitre ceux qui luttent ». En 67:2, « celui qui a cree la mort et la vie pour vous eprouver ». Le Coran utilise ibtala pour les epreuves qui revelent la vraie nature des etres — l'epreuve est un outil de verite, pas de punition.",
              axe5_frequence: "Pour la mission du khalifa, l'epreuve est le moyen par lequel la mission se verifie. Le khalifa ne recoit pas sa fonction par heritage automatique mais par l'epreuve de sa droiture. Ibrahim a recu sa fonction d'imam APRES avoir reussi les epreuves. Le khalifa doit comprendre que l'epreuve precede la responsabilite — pas l'inverse."
            },
            "Annulation": {
              status: "nul",
              senses: ["annuler", "invalider"],
              proof_ctx: "Le sens d'annulation releve de la forme I/IV de b-t-l, pas de la forme VIII. Le contexte est l'epreuve divine, pas l'annulation d'un acte."
            }
          }
        }
      },
      // abr pos=3
      {
        word_key: "abr", position: 3, sense_chosen: "Ibrahim",
        analysis_axes: {
          sense_chosen: "Ibrahim",
          concept_chosen: "Objet",
          concepts: {
            "Objet": {
              status: "retenu",
              senses: ["aiguille"],
              proof_ctx: "Le mot Ibrahima est un nom propre non arabe (diptote) designant le patriarche Ibrahim. Le Lane's repertorie la racine a-b-r avec le sens d'aiguille, mais le mot Ibrahim est un emprunt (du syriaque/hebreu Abraham) qui n'a pas de lien etymologique avec cette racine arabe. Le nom est traite comme un nom propre a valeur referentielle — il designe une personne historique, pas un objet. Aucune analyse de sens alternatif n'est pertinente ici.",
              axe1_verset: "Le nom Ibrahim est l'objet de l'epreuve divine et le destinataire de la designation comme imam. Le verset tourne autour d'Ibrahim — il est eprouve, il accomplit, il recoit la fonction, il pose la question sur sa descendance. Ibrahim est le sujet central de l'echange avec Dieu. Le champ lexical (eprouver, accomplir, dire, exemple, descendance) gravite autour de sa personne.",
              axe2_voisins: "Le verset 123 affirmait qu'Ibrahim n'etait pas parmi les associateurs. Le verset 124 le montre eprouve et designe. Le verset 125 mentionne la Station d'Ibrahim (maqam Ibrahim). Les versets 123-129 forment un bloc sur Ibrahim — sa purete, son epreuve, sa Maison, sa priere. Ibrahim est le fil conducteur de ce passage.",
              axe3_sourate: "Ibrahim est mentionne plus de 15 fois dans la sourate al-Baqarah. Il est le pivot du passage des Enfants d'Israel au theme universel de la qibla et de la Maison sacree. En 2:127, Ibrahim et Ismael elevent les fondations de la Maison. La sourate fait d'Ibrahim le pont entre toutes les communautes.",
              axe4_coherence: "Le nom Ibrahim apparait environ 69 fois dans le Coran, dans 25 sourates differentes. Il est presente comme hanif (monotheiste originel), pere d'Ismael et d'Isaac, constructeur de la Kaaba, et modele de soumission a Dieu. Le Coran fait d'Ibrahim le patriarche commun a toutes les traditions monotheistes.",
              axe5_frequence: "Pour la mission du khalifa, Ibrahim est le modele par excellence. Il a ete eprouve et a accompli — c'est le prototype du khalifa reussi. Sa question sur la descendance montre aussi que la mission n'est pas hereditaire automatiquement — elle depend de la justice."
            }
          }
        }
      },
      // rbb pos=4
      {
        word_key: "rbb", position: 4, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le mot rabbuhu est un nom masculin singulier nominatif de la racine r-b-b avec pronom suffixe 3MS. Le Lane's donne : seigneur, maitre, celui qui fait grandir et entretient. Le rabb est celui qui possede et eleve — il a l'autorite et la responsabilite du developpement. Ici « son Seigneur » (rabbuhu) avec le possessif cree une relation personnelle entre Dieu et Ibrahim. Le rabb n'est pas un tyran mais un educateur — il eprouve pour faire grandir. La distinction avec la croissance (probable) est que le verset utilise rabb comme titre relationnel de Dieu envers Ibrahim, pas comme verbe de croissance.",
              axe1_verset: "Le mot rabbuhu est le sujet du verbe ibtala (eprouva) — c'est le Seigneur qui initie l'epreuve. Le possessif « son » montre la relation personnelle : c'est SON Seigneur a lui, Ibrahim. Le champ lexical du verset (eprouver, accomplir, dire, faire) montre que le Seigneur est l'agent principal : Il eprouve, Il designe, Il repond. Ibrahim est l'objet de l'attention du Seigneur.",
              axe2_voisins: "Le verset 126 utilise « rabbi » (mon Seigneur) dans la priere d'Ibrahim — il s'adresse a son Seigneur. Le verset 127 aussi : « notre Seigneur, accepte de nous ». Le possessif change (son/mon/notre) mais la relation reste la meme — le Seigneur est celui vers qui on se tourne. Les versets 124-129 montrent un dialogue constant entre Ibrahim et son Seigneur.",
              axe3_sourate: "Le mot rabb est un des mots les plus frequents de la sourate al-Baqarah. En 2:21, « adorez votre Seigneur ». En 2:131, « soumets-toi a ton Seigneur ». La sourate construit la relation rabb/abd (seigneur/serviteur) comme la relation fondamentale entre Dieu et l'homme.",
              axe4_coherence: "La racine r-b-b apparait environ 970 fois dans le Coran. Le rabb est le nom de Dieu qui exprime Sa relation d'autorite bienveillante avec Ses creatures. En 1:2, « Louange a Dieu, Seigneur des mondes ». Le rabb eleve, nourrit, developpe — Son autorite est au service de la croissance de ce qu'Il possede.",
              axe5_frequence: "Pour la mission du khalifa, le rabb est le mandant de la mission. Le khalifa est le serviteur du Seigneur — il recoit ses instructions de Celui qui l'eleve. La relation rabb/abd est le cadre de la mission : le khalifa obeit au Seigneur qui le fait grandir par les epreuves."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens de croissance est le sens premier de r-b-b — augmenter, faire grandir. La distinction philosophique avec la seigneurie est que la croissance est le PROCESSUS (faire grandir quelque chose) tandis que la seigneurie est la RELATION (etre le maitre qui fait grandir). Le verset utilise rabb comme titre — « son Seigneur » — ce qui designe la personne du maitre, pas l'acte de faire croitre. Le processus de croissance est implicite dans le titre de seigneur, mais le mot ici est un nom de relation, pas un verbe d'action.",
              axe1_verset: "Le mot rabbuhu pourrait evoquer l'idee de faire grandir — le Seigneur fait grandir Ibrahim par l'epreuve. Mais grammaticalement, le mot est un nom au nominatif designant le sujet de l'action (celui qui eprouve), pas un verbe de croissance. Le sens de seigneur englobe la croissance comme fonction implicite.",
              axe2_voisins: "Les versets voisins utilisent rabb dans des contextes de dialogue (rabbi, rabbana) — la relation personnelle domine. Le sens de croissance est implicite dans tous ces usages mais n'est jamais le sens premier dans ce passage.",
              axe3_sourate: "La sourate al-Baqarah utilise rabb principalement comme titre relationnel de Dieu. Le sens de croissance apparait dans d'autres racines (n-b-t, z-r-'). Rabb est un titre, pas un verbe dans cette sourate.",
              axe4_coherence: "Le Coran utilise rabb comme nom de relation dans la quasi-totalite des cas. Le sens de croissance est la racine etymologique mais pas le sens d'usage — « seigneur » est le sens dominant.",
              axe5_frequence: "La croissance est l'outil du seigneur — le rabb fait grandir ses sujets. Pour le khalifa, comprendre que le Seigneur fait grandir par l'epreuve est essentiel a la mission."
            },
            "Education/Accompagnement": {
              status: "probable",
              senses: ["elever un enfant", "eduquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education est une extension du sens de seigneurie — le rabb est celui qui eleve et forme. La distinction philosophique avec la seigneurie est que l'education est l'ACTIVITE (former quelqu'un) tandis que la seigneurie est le STATUT (etre le maitre qui forme). Le verset utilise rabb comme titre relationnel — le statut — pas comme description de l'activite educative. Cependant, l'epreuve elle-meme est un acte educatif : Dieu forme Ibrahim par les injonctions.",
              axe1_verset: "L'epreuve divine est un acte educatif — Dieu forme Ibrahim par des paroles. Le mot rabb porte implicitement l'idee d'education. Mais le sens dominant dans le verset est le titre relationnel (son Seigneur), pas l'acte d'eduquer.",
              axe2_voisins: "Les versets 125-129 montrent Dieu confiant des responsabilites a Ibrahim — cela ressemble a un processus educatif. Le Seigneur forme Ibrahim en lui donnant des epreuves puis des responsabilites croissantes.",
              axe3_sourate: "La sourate montre Dieu comme educateur — Il enseigne les noms a Adam (2:31), Il guide les egares (2:198). Le rabb est pedagogie autant qu'autorite.",
              axe4_coherence: "En 26:18, Pharaon dit a Moussa : « ne t'avons-nous pas eleve parmi nous enfant ? » — le verbe est de la racine r-b-b. Le Coran lie explicitement la seigneurie a l'education.",
              axe5_frequence: "Pour le khalifa, le Seigneur est l'educateur de la mission. L'epreuve est une lecon, pas une punition. Le khalifa grandit par les epreuves de son Seigneur."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette", "interet"],
              proof_ctx: "Le sens d'usure est hors sujet — le mot est un titre relationnel (son Seigneur), pas un terme financier."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "Le sens d'essoufflement est hors sujet — le mot est le titre « Seigneur » dans un contexte d'epreuve divine."
            }
          }
        }
      },
      // klm pos=6
      {
        word_key: "klm", position: 6, sense_chosen: "parole",
        analysis_axes: {
          sense_chosen: "parole",
          concept_chosen: "Parole/Discours",
          concepts: {
            "Parole/Discours": {
              status: "retenu",
              senses: ["parler", "parole", "mot"],
              proof_ctx: "Le mot kalimatin est un pluriel feminin indefini de la racine k-l-m au genitif. Le Lane's donne : parole, mot, enonce verbal. Les kalimatin sont les paroles/injonctions par lesquelles Dieu eprouve Ibrahim — ce sont des enonces divins qui portent des commandements. Le pluriel indefini (sans article) laisse indeterminees ces paroles — le texte coranique ne precise pas leur contenu exact. La distinction avec la blessure (nul) est claire : le contexte est l'epreuve par la parole divine, pas la blessure physique.",
              axe1_verset: "Le mot kalimatin est l'instrument de l'epreuve — « eprouva Ibrahim par des paroles ». Les paroles sont le moyen de l'epreuve, pas l'epreuve elle-meme. Le champ lexical du verset (eprouver, accomplir) montre que les paroles sont des injonctions a accomplir — Ibrahim les recoit et les execute. Les paroles divines sont des ordres qui demandent une action.",
              axe2_voisins: "Le verset 125 enchainent avec des actions concretes (etablir la Maison, purifier). Ces actions pourraient etre le contenu des « paroles » du verset 124 — les injonctions que Dieu a donnees a Ibrahim. Le passage 124-129 detaille progressivement ce que ces paroles impliquaient.",
              axe3_sourate: "La racine k-l-m apparait dans la sourate al-Baqarah dans des contextes importants. En 2:37, « Adam recut de son Seigneur des paroles et Il accepta son repentir ». En 2:75, « un groupe entendait la Parole de Dieu ». La sourate lie la parole divine a la transformation — les paroles changent le statut de celui qui les recoit.",
              axe4_coherence: "La racine k-l-m apparait environ 75 fois dans le Coran. En 6:115, « la Parole de ton Seigneur s'est accomplie en verite et en justice ». En 18:109, « si la mer etait de l'encre pour les Paroles de mon Seigneur ». Le Coran presente les paroles de Dieu comme infinies et accomplies — elles se realisent toujours.",
              axe5_frequence: "Pour la mission du khalifa, les paroles de Dieu sont les instructions de la mission. Le khalifa recoit des paroles (injonctions) et doit les accomplir integralement, comme Ibrahim. Les paroles divines ne sont pas des suggestions mais des ordres a executer."
            },
            "Blessure": {
              status: "nul",
              senses: ["blesser", "blessure"],
              proof_ctx: "Le sens de blessure est un sens physique de k-l-m. Le contexte est l'epreuve par des enonces divins, pas des blessures corporelles."
            }
          }
        }
      },
      // tmm pos=8
      {
        word_key: "tmm", position: 8, sense_chosen: "completer",
        analysis_axes: {
          sense_chosen: "completer",
          concept_chosen: "Achèvement/Perfection",
          concepts: {
            "Achèvement/Perfection": {
              status: "retenu",
              senses: ["completer", "parfaire", "achever"],
              proof_ctx: "Le verbe atammahunna est un accompli 3MS de la racine t-m-m a la forme IV (af'ala) avec pronom suffixe 3FP (hunna). Le Lane's donne : completer, mener a terme, achever integralement. La forme IV (af'ala) indique que le sujet cause l'achevement — Ibrahim a FAIT EN SORTE que les injonctions soient accomplies. Le pronom hunna renvoie aux kalimatin (paroles/injonctions). L'accompli marque que l'achevement est total et definitif. La particule fa (alors, donc) qui precede lie causalement l'epreuve a l'achevement — il a ete eprouve, DONC il a accompli. Aucun sens alternatif n'est en concurrence ici.",
              axe1_verset: "Le verbe atammahunna est la reponse d'Ibrahim a l'epreuve — il accomplit integralement les injonctions. Le champ lexical (eprouver → accomplir → etre designe) montre une progression causale : l'achevement integral des epreuves est la condition de la designation comme imam. Le fa (alors) cree le lien logique : parce qu'il a accompli, il est designe.",
              axe2_voisins: "Le verset 125 montre les taches concretes confiees a Ibrahim — etablir la Maison, purifier. Ces taches sont peut-etre les paroles qu'il a accomplies. Le verset 127 montre Ibrahim elevant les fondations de la Maison — un acte d'achevement concret. La serie 124-129 detaille comment Ibrahim accomplit sa mission point par point.",
              axe3_sourate: "La racine t-m-m apparait en 2:150 et 2:187 dans le contexte de l'achevement d'un acte — completer le jeune, completer le rite. La sourate insiste sur l'achevement integral des obligations — pas de demi-mesure.",
              axe4_coherence: "La racine t-m-m apparait environ 12 fois dans le Coran. En 5:3, « aujourd'hui J'ai paracheve pour vous votre religion ». En 6:115, « la Parole de ton Seigneur s'est accomplie ». Le Coran lie l'achevement a la perfection — ce qui est tamma est complet, rien n'y manque.",
              axe5_frequence: "Pour la mission du khalifa, l'achevement integral est exige. Le khalifa ne peut accomplir sa mission a moitie — Ibrahim a accompli TOUTES les paroles (hunna, pronom feminin pluriel renvoyant a toutes les kalimatin). L'achevement partiel ne suffit pas pour recevoir la designation."
            }
          }
        }
      },
      // qwl pos=9 (1ere occurrence — Dieu dit)
      {
        word_key: "qwl", position: 9, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qala est un accompli 3MS de la racine q-w-l. Le Lane's donne : dire, enoncer, declarer. Trois occurrences dans le verset — positions 9, 15 et 19. La premiere (pos=9) est la parole de Dieu a Ibrahim : « Je fais de toi un exemple ». La deuxieme (pos=15) est la reponse d'Ibrahim : « et de ma descendance ? ». La troisieme (pos=19) est la reponse de Dieu : « Mon engagement n'atteint pas les injustes ». Le dialogue structure le verset en trois temps : declaration → question → reponse. Les sens alternatifs (opinion, puissance, troupeau) sont ecartees car le verbe est performatif dans les trois cas.",
              axe1_verset: "Le verbe qala structure le verset en trois actes de parole : Dieu declare, Ibrahim questionne, Dieu repond. Le champ lexical de la parole (dire, paroles, certes) domine le verset. Tout le contenu du verset est transmis par la parole — c'est un dialogue rapporte. La parole est le vehicule de la designation, de la question et de la reponse.",
              axe2_voisins: "Le verset 125 ne contient pas de qala — il passe au recit narratif. Le verset 126 reprend avec « idh qala Ibrahim » (quand Ibrahim dit). Les versets 124-129 alternent entre dialogue (qala) et narration. Le dialogue est le mode d'interaction entre Dieu et Ibrahim.",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah — elle apparait dans presque chaque passage. En 2:11, « quand on leur dit ». En 2:30, « quand ton Seigneur dit aux anges ». La sourate est un enchainement de paroles rapportees — Dieu dit, les gens disent, les prophetes disent.",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran. Le verbe qala est le verbe le plus frequent du Coran — le Livre est avant tout une transmission de paroles. En 2:124, le triple qala cree un rythme ternaire qui donne au verset sa force dramatique.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'outil de la mission. Le dialogue entre Dieu et Ibrahim montre le modele de la communication khalifale : Dieu ordonne, le khalifa questionne, Dieu precise. Le khalifa a le droit de questionner — Ibrahim l'a fait."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion est hors sujet — le verbe qala est performatif ici (declaration, question, reponse), pas un etat mental."
            }
          }
        }
      },
      // jel pos=11
      {
        word_key: "jel", position: 11, sense_chosen: "faire",
        analysis_axes: {
          sense_chosen: "faire",
          concept_chosen: "Action/Réalisation",
          concepts: {
            "Action/Réalisation": {
              status: "retenu",
              senses: ["faire", "rendre", "placer", "commencer a", "etablir", "creer"],
              proof_ctx: "Le mot ja'iluka est un participe actif masculin singulier de la racine j-'-l avec pronom suffixe 2MS (ka, toi). Le Lane's donne : faire, rendre, etablir, constituer. Le participe actif « ja'il » signifie « celui qui fait » — Dieu se designe comme celui qui fait d'Ibrahim un imam. Le pronom ka (toi) est l'objet direct — « faisant de toi ». La construction participe + pronom cree une declaration d'intention ou d'action en cours : « Je suis celui qui te fait ». La distinction avec la recompense (nul) est claire : le contexte est la designation d'Ibrahim comme imam, pas l'attribution d'une recompense materielle.",
              axe1_verset: "Le mot ja'iluka est le coeur de la declaration divine — Dieu fait d'Ibrahim un imam pour les gens. Le champ lexical (eprouver, accomplir, faire, exemple) montre une progression : l'epreuve mene a l'achevement qui mene a la designation. Le verbe ja'ala ici est un acte de transformation : Ibrahim passe du statut d'eprouve a celui de modele.",
              axe2_voisins: "Le verset 125 utilise ja'alna (Nous fimes) pour la Maison — « Nous fimes de la Maison un lieu de visite ». Le meme verbe ja'ala est utilise pour la designation d'Ibrahim (124) et pour la designation de la Maison (125). Dieu fait d'Ibrahim un modele et fait de la Maison un lieu sacre — les deux actes sont paralleles.",
              axe3_sourate: "La racine j-'-l apparait frequemment dans la sourate al-Baqarah. En 2:22, « qui a fait pour vous la terre un lit et le ciel un toit ». En 2:143, « Nous avons fait de vous une communaute du juste milieu ». La sourate montre Dieu comme celui qui fait/etablit/constitue — chaque designation est un acte divin delibere.",
              axe4_coherence: "La racine j-'-l apparait environ 346 fois dans le Coran. Elle designe l'acte createur et transformateur de Dieu — faire quelque chose devenir autre chose. En 6:1, « qui a fait les tenebres et la lumiere ». Ja'ala est moins « creer du neant » (khalqa) que « constituer, etablir, transformer ».",
              axe5_frequence: "Pour la mission du khalifa, Dieu est celui qui fait/designe. Le khalifa ne se designe pas lui-meme — c'est Dieu qui le constitue. La designation vient apres l'epreuve reussie. Le khalifa doit attendre la designation divine, pas se l'attribuer."
            },
            "Sens isolé/Récompense": {
              status: "nul",
              senses: ["recompense"],
              proof_ctx: "Le sens de recompense est un sens mineur de j-'-l. Le contexte est la designation d'Ibrahim comme imam, pas l'attribution d'une recompense."
            }
          }
        }
      },
      // nws pos=13
      {
        word_key: "nws", position: 13, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanité/Peuple",
          concepts: {
            "Humanité/Peuple": {
              status: "retenu",
              senses: ["gens", "etres humains", "peuple"],
              proof_ctx: "Le mot an-nasi est un nom masculin pluriel defini de la racine n-w-s au genitif avec preposition li (pour). Le Lane's donne : gens, etres humains, humanite. Le mot an-nas designe l'ensemble des humains sans distinction — Ibrahim est fait imam « pour les gens » en general, pas pour un peuple specifique. L'article defini (al-) donne une valeur generique — TOUS les gens. La distinction avec « voir de loin » (nul) est claire : le mot est un nom collectif, pas un verbe de perception.",
              axe1_verset: "Le mot an-nasi precise la portee de la designation d'Ibrahim — il est imam pour les gens en general. Le champ lexical (eprouver, accomplir, exemple, gens) montre que la fonction d'Ibrahim a une portee universelle. Il n'est pas imam d'un peuple particulier mais des gens en general — sa mission depasse les frontieres tribales.",
              axe2_voisins: "Le verset 125 utilise aussi li-n-nasi — « lieu de visite pour les gens ». La Maison aussi est pour les gens en general, pas pour un peuple exclusif. Les versets 124-125 montrent une vision universaliste : Ibrahim et la Maison sont pour tous les humains.",
              axe3_sourate: "Le mot an-nas apparait environ 40 fois dans la sourate al-Baqarah. En 2:21, « O les gens, adorez votre Seigneur ». En 2:168, « O les gens, mangez de ce qui est sur la terre ». La sourate s'adresse a l'humanite entiere, pas a un groupe exclusif.",
              axe4_coherence: "Le mot an-nas apparait environ 241 fois dans le Coran. Il designe toujours l'ensemble des humains sans distinction. En 114:1, « le Seigneur des gens ». Le Coran s'adresse a l'humanite entiere.",
              axe5_frequence: "Pour la mission du khalifa, la mission est universelle — elle concerne les gens en general. Le khalifa est responsable devant tous les humains, pas seulement devant sa tribu ou sa communaute."
            },
            "Perception/Visibilité": {
              status: "nul",
              senses: ["voir de loin", "etre visible"],
              proof_ctx: "Le sens de perception est un sens etymologique de n-w-s. Le mot ici est le nom collectif an-nas (les gens), pas un verbe de perception."
            }
          }
        }
      },
      // amm pos=14
      {
        word_key: "amm", position: 14, sense_chosen: "exemple",
        analysis_axes: {
          sense_chosen: "exemple",
          concept_chosen: "Origine/Communauté",
          concepts: {
            "Origine/Communauté": {
              status: "retenu",
              senses: ["mere", "nation", "communaute"],
              proof_ctx: "Le mot imaman est un nom masculin singulier indefini accusatif de la racine a-m-m. Le Lane's donne pour imam : celui qui est devant, guide, modele, exemple qu'on suit. L'imam est celui qui se tient devant pour que les autres suivent — c'est un role actif de direction par l'exemple. La racine a-m-m porte le sens de « se diriger vers » — l'imam est celui vers qui on se dirige, celui qui montre la direction. Le mot est sur le scheme fa'al (comme kitab) qui designe l'objet ou l'instrument de l'action. L'indefini (sans article) marque la qualite : « un imam » — un modele parmi les modeles possibles. La distinction avec les sens de mere et communaute est que le mot imam est un nom d'agent qui designe le guide, pas la mere ni la communaute.",
              axe1_verset: "Le mot imaman est le resultat de l'epreuve — Ibrahim est designe comme imam pour les gens. Le champ lexical (eprouver, accomplir, faire, gens) montre que l'imam est le resultat d'un processus : epreuve → achevement → designation. L'imam n'est pas ne imam — il le devient par l'epreuve reussie. Le verset insiste sur le merite, pas sur la naissance.",
              axe2_voisins: "Le verset 143 dira « Nous avons fait de vous une communaute du juste milieu pour que vous soyez temoins pour les gens ». La designation d'Ibrahim comme imam pour les gens prefigure la designation de la communaute comme temoin. L'imam et le temoin partagent la fonction de modele.",
              axe3_sourate: "Le mot imam n'apparait qu'une seule fois dans la sourate al-Baqarah — en 2:124. Cette unicite souligne l'importance de la designation. La sourate donne a Ibrahim un titre unique qui n'est accorde a personne d'autre dans la sourate.",
              axe4_coherence: "Le mot imam apparait environ 12 fois dans le Coran. En 11:17, le Livre de Moussa est qualifie d'imam. En 15:79, un chemin est qualifie d'imam. En 25:74, les serviteurs demandent « fais de nous un imam pour les pieux ». Le Coran utilise imam pour tout ce qui guide — personne, livre, chemin.",
              axe5_frequence: "Pour la mission du khalifa, l'imam est le modele de la mission. Le khalifa doit aspirer a etre un imam — celui qui marche devant et montre la voie. Mais cette fonction n'est pas hereditaire — la reponse de Dieu (Mon engagement n'atteint pas les injustes) montre que seuls les justes peuvent pretendre a cette fonction."
            }
          }
        }
      },
      // dhrw pos=18
      {
        word_key: "dhrw", position: 18, sense_chosen: "descendance",
        analysis_axes: {
          sense_chosen: "descendance",
          concept_chosen: "Descendance/Multiplication",
          concepts: {
            "Descendance/Multiplication": {
              status: "retenu",
              senses: ["progeniture"],
              proof_ctx: "Le mot dhurriyyati est un nom feminin singulier de la racine dh-r-w avec pronom suffixe 1S (i, ma) au genitif. Le Lane's donne : progeniture, descendance, enfants et leur lignee a travers les generations. La dhurriyya est la chaine des descendants — les enfants, les petits-enfants et au-dela. Le pronom suffixe « i » (ma) lie la descendance a Ibrahim personnellement — c'est SA descendance qu'il interroge. La preposition « min » (de) avec la question implicite « et de ma descendance ? » montre qu'Ibrahim demande si la fonction d'imam s'etend a ses descendants. La distinction avec la dispersion (concept voisin) est que la descendance est le resultat de la dispersion biologique — la dhurriyya est ce qui se multiplie a partir d'un ancetre.",
              axe1_verset: "Le mot dhurriyyati est au coeur de la question d'Ibrahim — il vient de recevoir la fonction d'imam et demande si elle s'etend a sa lignee. Le champ lexical (exemple, gens, descendance, engagement, injustes) montre que le verset pose la question de la transmission : la fonction se transmet-elle par le sang ? La reponse de Dieu est non — seuls les justes y ont droit.",
              axe2_voisins: "Le verset 128 contient aussi dhurriyyatina (notre descendance) dans la priere d'Ibrahim et Ismael : « et de notre descendance une communaute soumise a Toi ». Ibrahim revient sur la question de la descendance — il prie pour que ses descendants soient soumis. Les versets 124-129 montrent la preoccupation d'Ibrahim pour la continuite de sa mission a travers sa lignee.",
              axe3_sourate: "La racine dh-r-w apparait dans la sourate al-Baqarah en 2:124, 2:128 et 2:266. La sourate montre que la descendance est une preoccupation majeure — on veut transmettre a ses enfants ce qu'on a recu. Mais la sourate conditionne cette transmission a la justice.",
              axe4_coherence: "Le mot dhurriyya apparait environ 32 fois dans le Coran. En 3:34, « une descendance les uns des autres ». En 6:84, « et de sa descendance David, Salomon ». Le Coran montre que certains descendants sont choisis et d'autres pas — la descendance biologique ne garantit pas l'election divine.",
              axe5_frequence: "Pour la mission du khalifa, la descendance est un enjeu majeur. Le khalifa veut transmettre sa mission a ses enfants. Mais Dieu repond que la fonction ne se transmet pas automatiquement — seuls les justes y ont droit. Le khalifa ne peut pas leguer sa mission comme un heritage materiel."
            },
            "Dispersion/Éparpillement": {
              status: "nul",
              senses: ["disperser"],
              proof_ctx: "Le sens de dispersion est le sens premier de dh-r-w — disperser, repandre. La descendance est etymologiquement « ce qui est disperse » a partir d'un ancetre. Mais le mot dhurriyya est un nom designant la progeniture, pas un verbe de dispersion."
            },
            "Petitesse/Infime": {
              status: "nul",
              senses: ["atome"],
              proof_ctx: "Le sens d'atome (dharra) est une forme derivee de la meme racine. Le contexte est la descendance d'Ibrahim, pas la plus petite particule."
            }
          }
        }
      },
      // nwl pos=21
      {
        word_key: "nwl", position: 21, sense_chosen: "atteindre",
        analysis_axes: {
          sense_chosen: "atteindre",
          concept_chosen: "Acquisition/Don",
          concepts: {
            "Acquisition/Don": {
              status: "retenu",
              senses: ["obtenir", "atteindre", "donner"],
              proof_ctx: "Le verbe yanalu est un inaccompli 3MS de la racine n-w-l. Le Lane's donne : atteindre, obtenir, parvenir a. L'inaccompli avec la negation la cree un enonce general et permanent : l'engagement de Dieu n'atteint PAS les injustes — c'est une regle sans exception. Le verbe nala peut aussi signifier « donner » — Mon engagement ne donne rien aux injustes. Les deux sens convergent : que ce soit l'engagement qui atteint ou qui donne, les injustes en sont exclus. Le sujet est 'ahdi (Mon engagement) et l'objet est az-zalimina (les injustes) — l'engagement est l'agent qui n'atteint pas les injustes.",
              axe1_verset: "Le verbe yanalu ferme le verset avec la reponse divine — l'engagement n'atteint pas les injustes. Le champ lexical (eprouver, accomplir, exemple, descendance, engagement, injustes) montre que le verset pose et resout la question de la transmission : elle est conditionnee par la justice. Le verbe « atteindre » avec la negation cree une exclusion : certains sont hors de portee de l'engagement divin.",
              axe2_voisins: "Le verset 125 montre ce que l'engagement de Dieu inclut — la Maison, la securite, la purification. Le verset 124 montre ce qu'il exclut — les injustes. Les versets 124-125 dessinent les contours de l'engagement divin : il inclut les rites et exclut les injustes.",
              axe3_sourate: "La racine n-w-l est rare dans la sourate al-Baqarah. Ce verset est le seul usage. La rarete souligne l'importance de l'enonce — c'est une regle fondamentale enoncee une seule fois.",
              axe4_coherence: "La racine n-w-l apparait en 22:37 — « ce n'est ni leur chair ni leur sang qui atteint Dieu, mais c'est la piete qui L'atteint ». Le meme verbe nala est utilise pour montrer que ce qui « atteint » Dieu n'est pas materiel mais moral. En 2:124, ce qui « n'atteint pas » les injustes est l'engagement divin — une realite morale, pas materielle.",
              axe5_frequence: "Pour la mission du khalifa, l'atteinte de l'engagement divin est conditionnee par la justice. Le khalifa injuste n'est pas atteint par l'engagement de Dieu — il est hors de portee. La mission exige la justice comme condition prealable."
            }
          }
        }
      },
      // ehd pos=22
      {
        word_key: "ehd", position: 22, sense_chosen: "engagement",
        analysis_axes: {
          sense_chosen: "engagement",
          concept_chosen: "Engagement/Promesse",
          concepts: {
            "Engagement/Promesse": {
              status: "retenu",
              senses: ["engagement", "pacte", "promesse", "confier"],
              proof_ctx: "Le mot 'ahdi est un nom masculin singulier de la racine '-h-d avec pronom suffixe 1S (i, Mon) au genitif. Le Lane's donne : engagement, pacte, promesse, ce a quoi on s'est lie. Le 'ahd est un lien bilateral — il engage les deux parties. Ici « Mon engagement » ('ahdi) avec le possessif divin montre que c'est l'engagement de Dieu Lui-meme. La distinction avec le sens d'epoque (nul) est claire : le contexte est un pacte entre Dieu et Ibrahim, pas une periode de temps.",
              axe1_verset: "Le mot 'ahdi est la reponse de Dieu a la question d'Ibrahim sur sa descendance. L'engagement de Dieu est conditionnel — il n'atteint pas les injustes. Le champ lexical (eprouver, accomplir, exemple, engagement, injustes) montre que l'engagement divin est lie a la justice : seuls ceux qui sont justes y ont droit. Le possessif « Mon » souligne que l'engagement appartient a Dieu — c'est Sa decision, pas celle des hommes.",
              axe2_voisins: "Le verset 125 montre le contenu de l'engagement : la Maison, la securite, la purification. Le verset 124 pose la condition de l'engagement : la justice. Les versets 124-125 definissent l'engagement divin — son contenu et sa condition.",
              axe3_sourate: "La racine '-h-d apparait en 2:27, 2:40, 2:63, 2:80, 2:83, 2:100. La sourate al-Baqarah est structuree autour des engagements et de leur rupture. En 2:27, « ceux qui rompent le pacte de Dieu ». En 2:100, « chaque fois qu'ils s'engagent, un groupe rompt ». L'engagement est un theme majeur de la sourate.",
              axe4_coherence: "La racine '-h-d apparait environ 46 fois dans le Coran. En 3:76, « quiconque respecte son engagement et est pieux — Dieu aime les pieux ». En 13:20, « ceux qui respectent le pacte de Dieu ». Le Coran lie systematiquement le respect de l'engagement a la piete.",
              axe5_frequence: "Pour la mission du khalifa, l'engagement divin est le cadre de la mission. Le khalifa est lie par un engagement avec Dieu — respecter cet engagement est la condition de la mission. Rompre l'engagement c'est perdre la mission."
            },
            "Sens isolé/Époque": {
              status: "nul",
              senses: ["epoque"],
              proof_ctx: "Le sens d'epoque est un sens derive de '-h-d. Le contexte est un pacte entre Dieu et Ibrahim, pas une periode historique."
            }
          }
        }
      },
      // zlm pos=23
      {
        word_key: "zlm", position: 23, sense_chosen: "injuste",
        analysis_axes: {
          sense_chosen: "injuste",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["opprimer", "etre injuste", "injustice", "oppresseur"],
              proof_ctx: "Le mot az-zalimina est un participe actif pluriel masculin defini accusatif de la racine z-l-m. Le Lane's donne : etre injuste, opprimer, placer quelque chose hors de sa place. Le zalim est celui qui met les choses la ou elles ne doivent pas etre — il deplace la justice et met l'injustice a sa place. Le participe actif indique un etat continu — les zalimun sont ceux qui pratiquent l'injustice de maniere habituelle. L'article defini (al-) donne une valeur generique — TOUS les injustes sans exception. La distinction avec l'obscurite (probable) est que le verset parle de personnes injustes, pas de tenebres.",
              axe1_verset: "Le mot az-zalimina ferme le verset avec l'exclusion divine — les injustes n'ont pas acces a l'engagement de Dieu. Le champ lexical (eprouver, accomplir, exemple, descendance, engagement, injustes) montre que le verset oppose la justice (accomplir les epreuves) et l'injustice (etre exclu de l'engagement). Le verset repond a Ibrahim : oui, ta descendance — mais seulement les justes parmi eux, pas les injustes.",
              axe2_voisins: "Le verset 126 montre Ibrahim demandant la securite pour la cite, et Dieu precisant « et celui qui dissimule, Je lui accorde une jouissance temporaire puis Je le conduis au chatiment du feu ». Le theme de l'exclusion des injustes continue — les versets 124-129 alternent entre promesses pour les justes et exclusions pour les injustes.",
              axe3_sourate: "La racine z-l-m apparait environ 30 fois dans la sourate al-Baqarah. En 2:35, « vous seriez parmi les injustes ». En 2:51, « quand vous preniez le veau, vous etiez injustes ». La sourate utilise le zulm comme le critere d'exclusion — les injustes sont systematiquement exclus des bienfaits divins.",
              axe4_coherence: "La racine z-l-m apparait environ 315 fois dans le Coran. Le zulm est le contraire de la justice — mettre les choses hors de leur place. En 31:13, « l'association est une injustice immense ». Le Coran definit le zulm comme le dereglement fondamental — confondre le vrai et le faux, le juste et l'injuste.",
              axe5_frequence: "Pour la mission du khalifa, l'injustice est le disqualifiant absolu. Le khalifa injuste est exclu de l'engagement divin — il n'a plus de mission. La justice est la condition sine qua non de la mission du khalifa. Aucune descendance, aucun heritage ne peut compenser l'injustice."
            },
            "Obscurité/Ténèbres": {
              status: "probable",
              senses: ["obscurite", "tenebres"],
              proof_ctx: "Le sens d'obscurite est etymologiquement lie a z-l-m — le zulm est l'obscurite morale comme les zulumaat sont l'obscurite physique. La distinction philosophique est que l'injustice est un ACTE (mettre les choses hors de leur place) tandis que l'obscurite est un ETAT (absence de lumiere). Le verset parle de personnes qui commettent l'injustice (participe actif pluriel), pas d'un etat d'obscurite.",
              axe1_verset: "Le mot az-zalimina designe des personnes — ceux qui sont injustes. Le sens d'obscurite pourrait etre present comme metaphore (les injustes sont dans l'obscurite morale) mais le sens premier est l'injustice comme acte. Le verset exclut des personnes, pas un etat.",
              axe2_voisins: "Les versets voisins parlent de personnes et de leurs actes — Ibrahim, les gens, la purification. Le contexte est humain et concret, pas metaphysique. Le sens d'injustice (personnes injustes) est plus coherent que celui d'obscurite.",
              axe3_sourate: "La sourate utilise la racine z-l-m principalement au sens d'injustice — en 2:229, « ce sont eux les injustes ». Le sens de tenebres (zulumaat) apparait en 2:17, 2:19, 2:257 avec la forme pluriel zulumaat, pas la forme zalim.",
              axe4_coherence: "Le Coran distingue zulm (injustice, avec zalim/zalimun) et zulumaat (tenebres, pluriel de zulma). En 2:124, le mot est az-zalimina (les injustes), pas az-zulumat (les tenebres). La distinction morphologique confirme le sens d'injustice.",
              axe5_frequence: "L'obscurite morale est la consequence de l'injustice. Le khalifa injuste est dans les tenebres — il ne voit plus la voie de la mission."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["se faire du tort"],
              proof_ctx: "Le sens de « se faire du tort » est un sens reflexif de z-l-m. Le contexte est l'exclusion des injustes de l'engagement divin — le verset parle d'injustice envers autrui, pas envers soi-meme."
            }
          }
        }
      }
    ]
  },
  125: {
    verse_id: 132,
    analysis_id: 491,
    translation_arab: "Et quand Nous fimes de la Maison un lieu ou l'on revient pour les gens et un lieu de securite — et adoptez de la Station d'Ibrahim un lieu de priere — et Nous confiames a Ibrahim et a Ismael : purifiez Ma Maison pour ceux qui tournent autour, ceux qui y font retraite, et ceux qui s'inclinent et se prosternent.",
    full_translation: "Et quand Nous fimes de la Maison un lieu de visite et un asile pour les gens - Adoptez donc la Station d'Abraham comme lieu de priere. - Et Nous confiames a Abraham et a Ismael ceci: Purifiez Ma Maison pour ceux qui tournent autour, y font retraite spirituelle, s'y inclinent et s'y prosternent.",
    translation_explanation: `§DEMARCHE§
Le verset decrit trois actes divins : l'etablissement de la Maison, l'injonction d'adopter la Station d'Ibrahim, et la mission confiee a Ibrahim et Ismael. Le verbe **ja'alna** est un accompli 1P de la racine j-'-l. Le Lane's donne : faire, etablir, constituer. Le « Nous » majestatif (na) indique que c'est Dieu qui agit. L'objet est **al-bayta** (la Maison) au defini accusatif — la Maison connue, la Kaaba. Le mot **mathabatan** est un nom feminin singulier indefini de la racine th-w-b. Le Lane's donne : lieu ou l'on revient, lieu de retour, lieu de visite. Le mathaba est l'endroit vers lequel on revient — les gens y reviennent regulierement. Le mot **li-n-nasi** (pour les gens) precise les beneficiaires — la Maison est pour tous les gens, pas pour un peuple exclusif. Le mot **amnan** est un nom masculin singulier indefini accusatif de la racine a-m-n. Le Lane's donne : securite, surete, absence de peur. L'amn est l'etat de celui qui est en securite — la Maison est un lieu ou l'on est en securite.

Le verbe **ittakhidhu** est un imperatif 2MP de la racine a-kh-dh a la forme VIII. Le Lane's donne : prendre, adopter, se choisir. La forme VIII (ifta'ala) indique un effort delibere — adoptez, choisissez pour vous-memes. Le mot **maqami** est un nom masculin singulier de la racine q-w-m en idafa avec Ibrahim. Le Lane's donne : lieu ou l'on se tient debout, station, emplacement. Le maqam d'Ibrahim est le lieu ou Ibrahim se tenait debout — c'est un endroit physique pres de la Kaaba. Le mot **musalla** est un nom de lieu de la racine s-l-w. Le Lane's donne : lieu de priere, endroit ou l'on prie. Le musalla est l'espace dedie a la priere.

Le verbe **'ahidna** est un accompli 1P de la racine '-h-d. Le Lane's donne : confier, charger, donner un engagement. Le « Nous » majestatif indique que Dieu confie. La preposition **ila** (vers) indique la direction — Dieu confie VERS Ibrahim et Ismael. Le nom **Isma'ila** est un nom propre non arabe de la racine s-m-' designant le fils d'Ibrahim. Le verbe **tahhira** est un imperatif 2D (duel) de la racine t-h-r a la forme II. Le Lane's donne : purifier, nettoyer. La forme II intensifie l'action — purifiez a fond. Le duel (ra pour deux) s'adresse a Ibrahim et Ismael ensemble. Le mot **baytiya** (Ma Maison) avec pronom suffixe 1S (ya, Ma) rattache la Maison a Dieu — c'est SA Maison. Le mot **li-t-ta'ifina** est un participe actif pluriel de la racine t-w-f avec preposition li (pour). Le Lane's donne : ceux qui tournent autour, ceux qui font le tawaf. Le mot **al-'akifina** est un participe actif pluriel de la racine '-k-f. Le Lane's donne : ceux qui font retraite, ceux qui s'attachent a un lieu. Le mot **ar-rukka'i** est un pluriel intensif de la racine r-k-'. Le Lane's donne : ceux qui s'inclinent. Le mot **as-sujudi** est un masdar/nom de la racine s-j-d. Le Lane's donne : la prosternation, ceux qui se prosternent.

§JUSTIFICATION§
**Nous fimes** — Le sens retenu est « faire/etablir ». Le verbe ja'alna designe l'acte divin d'etablir la Maison dans sa fonction. L'alternative « recompense » est ecartee car le contexte est la constitution d'un lieu, pas l'attribution d'une recompense.

**la Maison** — Le sens retenu est « maison/demeure ». Le mot al-bayt avec l'article defini designe la Maison par excellence — la Kaaba. L'alternative « passer la nuit » est ecartee car le mot est un nom au defini, pas un verbe.

**lieu ou l'on revient** — Le sens retenu est « revenir/vetement/recompense ». Le mot mathaba designe le lieu ou l'on revient regulierement. C'est de la racine th-w-b dont le sens premier est revenir. L'alternative « vetement » est ecartee car le contexte est un lieu, pas un habit.

**securite** — Le sens retenu est « securite ». Le mot amnan designe l'etat de securite. L'alternative « foi/adhesion » est ecartee car le contexte est la description d'un lieu (securite physique), pas un acte de foi. Le mot est au masdar (nom verbal), pas au participe actif (mu'min, croyant).

**adoptez** — Le sens retenu est « prendre/adopter ». Le verbe ittakhidhu est un imperatif de la forme VIII — se choisir deliberement. L'alternative « punir » est ecartee car le contexte est une injonction positive (adoptez), pas une sanction.

**Station** — Le sens retenu est « station/lieu ou l'on se tient debout ». Le mot maqam designe l'emplacement physique ou Ibrahim se tenait. La racine q-w-m porte le sens de se tenir debout — le maqam est le lieu de la tenue verticale. L'alternative « peuple » est ecartee car le mot est un nom de lieu (maqam, schema maf'al), pas un nom collectif.

**lieu de priere** — Le sens retenu est « priere/lieu de priere ». Le mot musalla est un nom de lieu de la racine s-l-w — le lieu ou l'on prie. L'alternative « suivre de pres » est ecartee car le mot est un nom de lieu, pas un verbe d'action.

**Nous confiames** — Le sens retenu est « engagement/confier ». Le verbe 'ahidna signifie que Dieu a confie une mission. L'alternative « epoque » est ecartee car le verbe est performatif — Dieu confie, il ne date pas.

**Ibrahim** — Nom propre, meme analyse que V124.

**Ismael** — Nom propre non arabe de la racine s-m-' (entendre). Le Lane's donne : « Dieu entend ». C'est le fils d'Ibrahim, pere des Arabes selon la tradition.

**purifiez** — Le sens retenu est « purifier ». Le verbe tahhira est un imperatif duel de la forme II — purifiez a fond. La forme II intensifie — ce n'est pas une purification superficielle mais complete.

**Ma Maison** — Le possessif « Ma » rattache la Maison a Dieu. Baytiya = la Maison de Dieu. La meme racine b-y-t que al-bayt au debut du verset — la Maison est designee deux fois, une fois avec l'article defini et une fois avec le possessif divin.

**ceux qui tournent autour** — Le sens retenu est « tourner autour ». Le participe actif at-ta'ifin designe ceux qui font le tawaf. L'alternative n'existe pas — un seul sens retenu.

**ceux qui font retraite** — Le sens retenu est « s'attacher/faire retraite ». Le participe actif al-'akifin designe ceux qui se consacrent a la retraite dans la Maison.

**ceux qui s'inclinent** — Le sens retenu est « s'incliner ». Le mot ar-rukka'i designe ceux qui font le ruku' (inclinaison dans la priere).

**la prosternation** — Le sens retenu est « se prosterner ». Le mot as-sujudi designe l'acte de prosternation — le front qui touche le sol.

§CRITIQUE§
Hamidullah traduit mathaba par « lieu de visite » et amnan par « asile ». Notre traduction donne « lieu ou l'on revient » et « securite ». La difference est que « lieu de visite » implique un passage ponctuel, tandis que « lieu ou l'on revient » implique un retour regulier — le Lane's confirme le sens de retour. Pour amnan, « asile » ajoute une connotation de refuge que le mot arabe ne porte pas necessairement — amn est simplement la securite, l'absence de peur. Les deux traductions sont proches mais la notre reste plus fidele aux sens etymologiques.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "quand", phon: "idh", arabic: "\u0625\u0650\u0630\u0652", is_particle: true, position: 1 },
      { fr: "Nous fimes", pos: "verbe", phon: "ja'alna", arabic: "\u062c\u064e\u0639\u064e\u0644\u0652\u0646\u064e\u0627", word_key: "jel", is_particle: false, sense_retenu: "faire", position: 2 },
      { fr: "la Maison", pos: "nom", phon: "al-bayta", arabic: "\u0671\u0644\u0652\u0628\u064e\u064a\u0652\u062a\u064e", word_key: "byt", is_particle: false, sense_retenu: "maison", position: 3 },
      { fr: "un lieu ou l'on revient", pos: "nom", phon: "mathabatan", arabic: "\u0645\u064e\u062b\u064e\u0627\u0628\u064e\u0629\u064b", word_key: "thwb", is_particle: false, sense_retenu: "lieu de retour", position: 4 },
      { fr: "pour", phon: "li", arabic: "\u0644\u0650\u0651", is_particle: true, position: 5 },
      { fr: "les gens", pos: "nom", phon: "an-nasi", arabic: "\u0671\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 6 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 7 },
      { fr: "securite", pos: "nom", phon: "amnan", arabic: "\u0623\u064e\u0645\u0652\u0646\u064b\u0627", word_key: "amn", is_particle: false, sense_retenu: "securite", position: 8 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 9 },
      { fr: "adoptez", pos: "verbe", phon: "ittakhidhu", arabic: "\u0671\u062a\u0651\u064e\u062e\u0650\u0630\u064f\u0648\u0627\u06df", word_key: "akh\u1e0d", is_particle: false, sense_retenu: "adopter", position: 10 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 11 },
      { fr: "la Station", pos: "nom", phon: "maqami", arabic: "\u0645\u0651\u064e\u0642\u064e\u0627\u0645\u0650", word_key: "qwm", is_particle: false, sense_retenu: "station", position: 12 },
      { fr: "d'Ibrahim", pos: "nom", phon: "ibrahima", arabic: "\u0625\u0650\u0628\u0652\u0631\u064e\u0670\u0647\u0650\u06e7\u0645\u064e", word_key: "brh", is_particle: false, sense_retenu: "Ibrahim", position: 13 },
      { fr: "un lieu de priere", pos: "nom", phon: "musallan", arabic: "\u0645\u064f\u0635\u064e\u0644\u0651\u064b\u0649", word_key: "slw", is_particle: false, sense_retenu: "lieu de priere", position: 14 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 15 },
      { fr: "Nous confiames", pos: "verbe", phon: "'ahidna", arabic: "\u0639\u064e\u0647\u0650\u062f\u0652\u0646\u064e\u0622", word_key: "ehd", is_particle: false, sense_retenu: "confier", position: 16 },
      { fr: "vers", phon: "ila", arabic: "\u0625\u0650\u0644\u064e\u0649\u0670\u0653", is_particle: true, position: 17 },
      { fr: "Ibrahim", pos: "nom", phon: "ibrahima", arabic: "\u0625\u0650\u0628\u0652\u0631\u064e\u0670\u0647\u0650\u06e7\u0645\u064e", word_key: "brh", is_particle: false, sense_retenu: "Ibrahim", position: 18 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 19 },
      { fr: "Ismael", pos: "nom", phon: "isma'ila", arabic: "\u0625\u0650\u0633\u0652\u0645\u064e\u0640\u0670\u0639\u0650\u064a\u0644\u064e", word_key: "sme", is_particle: false, sense_retenu: "Ismael", position: 20 },
      { fr: "que", phon: "an", arabic: "\u0623\u064e\u0646", word_key: "aan", is_particle: false, sense_retenu: "que", position: 21 },
      { fr: "purifiez", pos: "verbe", phon: "tahhira", arabic: "\u0637\u064e\u0647\u0651\u0650\u0631\u064e\u0627", word_key: "thr", is_particle: false, sense_retenu: "purifier", position: 22 },
      { fr: "Ma Maison", pos: "nom", phon: "baytiya", arabic: "\u0628\u064e\u064a\u0652\u062a\u0650\u0649\u064e", word_key: "byt", is_particle: false, sense_retenu: "maison", position: 23 },
      { fr: "pour", phon: "li", arabic: "\u0644\u0650", is_particle: true, position: 24 },
      { fr: "ceux qui tournent autour", pos: "participe_actif", phon: "at-ta'ifina", arabic: "\u0671\u0644\u0637\u0651\u064e\u0622\u0626\u0650\u0641\u0650\u064a\u0646\u064e", word_key: "twf", is_particle: false, sense_retenu: "tourner autour", position: 25 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 26 },
      { fr: "ceux qui font retraite", pos: "participe_actif", phon: "al-'akifina", arabic: "\u0671\u0644\u0652\u0639\u064e\u0640\u0670\u0643\u0650\u0641\u0650\u064a\u0646\u064e", word_key: "ekf", is_particle: false, sense_retenu: "faire retraite", position: 27 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 28 },
      { fr: "ceux qui s'inclinent", pos: "nom", phon: "ar-rukka'i", arabic: "\u0671\u0644\u0631\u0651\u064f\u0643\u0651\u064e\u0639\u0650", word_key: "rke", is_particle: false, sense_retenu: "s'incliner", position: 29 },
      { fr: "ceux qui se prosternent", pos: "nom", phon: "as-sujudi", arabic: "\u0671\u0644\u0633\u0651\u064f\u062c\u064f\u0648\u062f\u0650", word_key: "sjd", is_particle: false, sense_retenu: "se prosterner", position: 30 }
    ],
    words: [
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
              proof_ctx: "Le verbe ja'alna est un accompli 1P de la racine j-'-l. Le Lane's donne : faire, etablir, constituer, transformer. Le « Nous » majestatif (na) indique que Dieu est le sujet. L'objet est al-bayta (la Maison) — Dieu fait de la Maison ce qu'elle est. Le verbe ja'ala designe ici l'acte divin de constituer la Maison dans sa fonction de lieu de retour et de securite. C'est le meme verbe que ja'iluka en 2:124 — Dieu fait d'Ibrahim un imam, et maintenant Il fait de la Maison un lieu sacre. Les deux actes sont paralleles.",
              axe1_verset: "Le verbe ja'alna ouvre le verset en posant l'acte divin fondateur — Dieu constitue la Maison dans sa double fonction (lieu de retour et securite). Le champ lexical (faire, Maison, lieu de retour, securite, adopter, Station, priere, confier, purifier) montre que le verset enchaine les actes divins et les injonctions. Faire est le verbe qui initie la serie.",
              axe2_voisins: "Le verset 124 utilisait ja'iluka (faisant de toi) pour Ibrahim. Le verset 125 utilise ja'alna (Nous fimes) pour la Maison. Le verset 126 utilisera ij'al (fais) dans la priere d'Ibrahim. Le verbe ja'ala traverse les trois versets — Dieu fait, Ibrahim demande de faire. C'est le verbe de la constitution divine.",
              axe3_sourate: "La racine j-'-l structure la sourate al-Baqarah. En 2:22, « qui a fait pour vous la terre un lit ». En 2:143, « Nous avons fait de vous une communaute du juste milieu ». La sourate montre Dieu comme celui qui constitue — chaque realite est le resultat d'un acte divin delibere.",
              axe4_coherence: "La racine j-'-l apparait environ 346 fois dans le Coran. Le verbe ja'ala est l'un des verbes les plus frequents pour decrire l'action divine. Il designe la constitution, l'etablissement, la transformation — pas la creation ex nihilo (khalqa) mais la designation fonctionnelle.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est celui qui constitue et designe. Le khalifa ne se constitue pas lui-meme — c'est Dieu qui fait de la Maison un lieu sacre, qui fait d'Ibrahim un modele. Le khalifa doit reconnaitre que sa mission est constituee par Dieu, pas par lui-meme."
            },
            "Sens isolé/Récompense": {
              status: "nul",
              senses: ["recompense"],
              proof_ctx: "Le sens de recompense est hors sujet — le verbe designe ici l'acte de constituer la Maison dans sa fonction sacree."
            }
          }
        }
      },
      // byt pos=3
      {
        word_key: "byt", position: 3, sense_chosen: "maison",
        analysis_axes: {
          sense_chosen: "maison",
          concept_chosen: "Demeure/Sanctuaire",
          concepts: {
            "Demeure/Sanctuaire": {
              status: "retenu",
              senses: ["maison", "demeure", "passer la nuit"],
              proof_ctx: "Le mot al-bayta est un nom masculin singulier defini accusatif de la racine b-y-t. Le Lane's donne : maison, demeure, lieu d'habitation, lieu de sejour nocturne. L'article defini (al-) designe LA Maison connue — la Kaaba a La Mecque. Le bayt est le lieu ou l'on entre et ou l'on se refugie — la maison protege. Le mot apparait deux fois dans le verset : al-bayta (la Maison, avec article) et baytiya (Ma Maison, avec possessif divin). La premiere occurrence est l'objet de la constitution divine, la deuxieme est l'objet de la purification — la meme Maison est constituee puis purifiee.",
              axe1_verset: "Le mot al-bayta est l'objet central du verset — tout tourne autour de la Maison. Elle est constituee comme lieu de retour et de securite, elle est le lieu de la Station d'Ibrahim, elle est l'objet de la purification. Le champ lexical (Maison, lieu de retour, securite, Station, priere, purifier) montre que la Maison est le coeur physique et spirituel de la vie religieuse.",
              axe2_voisins: "Le verset 124 mentionnait Ibrahim comme imam. Le verset 125 associe Ibrahim a la Maison — sa Station, sa mission de purification. Le verset 127 montrera Ibrahim et Ismael elevant les fondations de la Maison. Les versets 124-129 lient Ibrahim a la Maison de maniere indissociable.",
              axe3_sourate: "La racine b-y-t apparait dans la sourate al-Baqarah en 2:125, 2:127, 2:158. La Maison est un theme majeur de la deuxieme moitie de la sourate — elle structure le passage sur la qibla et les rites. La Maison est le point de convergence vers lequel les croyants se tournent.",
              axe4_coherence: "Le mot al-bayt apparait environ 30 fois dans le Coran pour designer la Kaaba. En 3:96, « la premiere Maison etablie pour les gens est celle de Bakka ». En 22:26, « quand Nous avons assigne a Ibrahim le lieu de la Maison ». Le Coran fait de la Maison le centre geographique et spirituel de la religion.",
              axe5_frequence: "Pour la mission du khalifa, la Maison est le centre de la mission. Le khalifa est responsable de la Maison — il doit la garder pure et accessible. La Maison est le symbole physique de l'engagement divin envers l'humanite."
            }
          }
        }
      },
      // thwb pos=4
      {
        word_key: "thwb", position: 4, sense_chosen: "lieu de retour",
        analysis_axes: {
          sense_chosen: "lieu de retour",
          concept_chosen: "Vêtement/Rétribution",
          concepts: {
            "Vêtement/Rétribution": {
              status: "retenu",
              senses: ["vetement", "recompense", "revenir"],
              proof_ctx: "Le mot mathabatan est un nom de lieu feminin singulier indefini de la racine th-w-b. Le Lane's donne : lieu de retour, lieu ou l'on revient regulierement, lieu de refuge. Le schema maf'ala (nom de lieu) indique un emplacement ou l'action se produit — le mathaba est le lieu ou l'on thaaba (revient). La racine th-w-b porte trois sens principaux : revenir, recompenser, vetir. Ici c'est le sens de « revenir » qui est dominant — la Maison est le lieu ou les gens reviennent. Le Lane's precise que le mathaba implique un retour regulier et repetitif — les gens ne visitent pas la Maison une seule fois mais y reviennent sans cesse. La distinction avec le vetement et la recompense est que le contexte est un lieu, pas un objet ni un acte de retribution.",
              axe1_verset: "Le mot mathabatan qualifie la Maison — elle est un lieu ou l'on revient. Le champ lexical (Maison, lieu de retour, securite, gens) montre que la Maison attire les gens comme un aimant — ils y reviennent sans cesse. Le retour est regulier et volontaire. La Maison est le lieu du retour permanent.",
              axe2_voisins: "Le verset 126 montrera Ibrahim demandant la securite et la subsistance pour les habitants de la cite. Le verset 127 montrera Ibrahim et Ismael elevant les fondations. Les versets 125-127 decrivent la Maison sous plusieurs angles : lieu de retour (125), cite securisee (126), construction physique (127).",
              axe3_sourate: "La racine th-w-b apparait en 2:103 (recompense), 2:125 (lieu de retour), 2:167 (retour). La sourate utilise la racine dans ses trois sens — retour, recompense, et le rapport avec le retour vers la Maison. Le verset 125 est le seul usage au sens de lieu de retour.",
              axe4_coherence: "Le mot mathaba n'apparait qu'une seule fois dans le Coran — en 2:125. Cette unicite souligne le caractere unique de la Maison. Le Coran ne qualifie aucun autre lieu de mathaba. La Maison est le seul lieu defini comme « lieu ou l'on revient » — elle est le point d'attraction permanent de l'humanite.",
              axe5_frequence: "Pour la mission du khalifa, la Maison est le lieu de retour de la mission. Le khalifa revient a la Maison — physiquement et spirituellement. Le retour regulier est un renouvellement de l'engagement. La Maison ancre la mission dans un lieu concret."
            }
          }
        }
      },
      // nws pos=6
      {
        word_key: "nws", position: 6, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanité/Peuple",
          concepts: {
            "Humanité/Peuple": {
              status: "retenu",
              senses: ["gens", "etres humains", "peuple"],
              proof_ctx: "Deuxieme occurrence de an-nas dans ce passage (premiere en V124 pos=13). Le mot an-nasi est un nom pluriel defini genitif avec preposition li (pour). Le Lane's donne : gens, etres humains. La Maison est constituee « pour les gens » — memes analyses que V124. L'universalite est confirmee : la Maison est pour tous les gens, pas pour un peuple exclusif. Les analyses sur les 5 axes sont identiques a celles de V124.",
              axe1_verset: "Le mot an-nasi precise les beneficiaires de la Maison — tous les gens. Le champ lexical (Maison, lieu de retour, securite, gens) confirme que la Maison est un bien universel. Comme en V124, la portee est universelle.",
              axe2_voisins: "Le verset 124 utilisait li-n-nasi pour la designation d'Ibrahim comme imam. Le verset 125 utilise li-n-nasi pour la designation de la Maison comme lieu de retour. Les deux usages sont paralleles — Ibrahim et la Maison sont pour les gens.",
              axe3_sourate: "Le mot an-nas est utilise de maniere recurrente dans la sourate pour marquer l'universalite du message. Memes analyses que V124.",
              axe4_coherence: "Memes analyses que V124 — le mot an-nas designe l'ensemble des humains sans exception.",
              axe5_frequence: "Memes analyses que V124 — la mission du khalifa est universelle."
            },
            "Perception/Visibilité": {
              status: "nul",
              senses: ["voir de loin", "etre visible"],
              proof_ctx: "Le mot est le nom collectif an-nas (les gens), pas un verbe de perception. Meme analyse que V124."
            }
          }
        }
      },
      // amn pos=8
      {
        word_key: "amn", position: 8, sense_chosen: "securite",
        analysis_axes: {
          sense_chosen: "securite",
          concept_chosen: "Sécurité/Confiance",
          concepts: {
            "Sécurité/Confiance": {
              status: "retenu",
              senses: ["etre en securite", "se sentir en securite", "faire confiance", "confier", "fidele", "lieu sur"],
              proof_ctx: "Le mot amnan est un masdar (nom verbal) masculin singulier indefini accusatif de la racine a-m-n. Le Lane's donne : securite, surete, etat de tranquillite, absence de peur. L'amn est l'etat de celui qui est a l'abri — physiquement et psychologiquement. La Maison est constituee comme amnan (securite) — c'est un lieu ou l'on est en securite. Le masdar designe l'etat abstrait de securite, pas la foi (iman) ni la croyance (mu'min). La distinction avec la foi (probable) est que le verset decrit une qualite du lieu (la Maison est un lieu sur), pas un acte de croyance.",
              axe1_verset: "Le mot amnan est le deuxieme attribut de la Maison — apres « lieu de retour » et avant l'injonction d'adopter la Station. Le champ lexical (Maison, lieu de retour, securite) montre que la Maison offre deux choses : le retour (on y revient) et la securite (on y est en surete). La securite est physique — la Maison est un espace protege.",
              axe2_voisins: "Le verset 126 reprend le theme de la securite — Ibrahim demande « fais de celle-ci une cite sure ». La securite de la Maison est un theme qui traverse les versets 125-126. La securite est une condition de la fonction sacree — sans securite, pas de rites possibles.",
              axe3_sourate: "La racine a-m-n est une des plus importantes de la sourate al-Baqarah. En 2:3, « ceux qui croient a l'invisible ». En 2:62, « quiconque croit en Dieu et au Dernier Jour ». La sourate distingue l'amn (securite physique) et l'iman (foi interieure) — les deux viennent de la meme racine mais designent des realites differentes.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. En 3:97, « quiconque y entre est en securite » — a propos de la Maison. En 28:57, « un sanctuaire sur ». Le Coran lie la Maison a la securite de maniere recurrente — c'est un espace protege par Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la securite est une condition de la mission. Le khalifa doit assurer la securite du lieu de la mission — sans securite, la mission ne peut s'accomplir. La Maison est le modele du lieu sur ou la mission s'exerce."
            },
            "Foi/Adhésion": {
              status: "probable",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "Le sens de foi est un sens majeur de a-m-n — la croyance et l'adhesion interieure. La distinction philosophique avec la securite est que la foi est un ACTE INTERIEUR (croire) tandis que la securite est un ETAT EXTERIEUR (etre en surete). Le mot amnan est un masdar au sens de securite — l'absence de peur. Le contexte decrit un lieu (la Maison) et ses qualites (lieu de retour, securite) — le sens physique et spatial domine. La foi (iman) apparait ailleurs dans la sourate avec des formes verbales specifiques (amana, yu'minu).",
              axe1_verset: "Le mot amnan pourrait evoquer la foi — la Maison est un lieu de foi. Mais le contexte spatial (lieu de retour ET securite) favorise le sens physique de securite. La Maison est d'abord un espace physique avant d'etre un espace de foi.",
              axe2_voisins: "Le verset 126 demande explicitement la securite physique (« cite sure »). Le contexte des versets voisins confirme que le sens de securite physique est premier dans ce passage.",
              axe3_sourate: "La sourate distingue clairement amn (securite) et iman (foi) dans leurs formes respectives. Quand la sourate veut parler de foi, elle utilise amana/yu'minu/mu'minun, pas le masdar amn.",
              axe4_coherence: "En 106:4, « qui les a nourris contre la faim et securises contre la peur » — le verbe amana est utilise au sens de securiser. Le Coran utilise la racine a-m-n dans les deux sens selon le contexte.",
              axe5_frequence: "La foi et la securite sont liees pour le khalifa — mais dans ce verset, c'est la securite du lieu qui est en jeu."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["proteger"],
              proof_ctx: "Le sens de protection est un sens derive de a-m-n. Le contexte est la qualite de la Maison comme lieu sur, pas un acte de protection active."
            }
          }
        }
      },
      // akhḏ pos=10
      {
        word_key: "akh\u1e0d", position: 10, sense_chosen: "adopter",
        analysis_axes: {
          sense_chosen: "adopter",
          concept_chosen: "Prise/Acquisition",
          concepts: {
            "Prise/Acquisition": {
              status: "retenu",
              senses: ["prendre", "saisir", "recevoir", "punir"],
              proof_ctx: "Le verbe ittakhidhu est un imperatif 2MP de la racine a-kh-dh a la forme VIII (ifta'ala). Le Lane's donne pour la forme VIII : prendre pour soi, adopter, se choisir. La forme VIII ajoute au sens de « prendre » (forme I) l'idee de choix delibere et personnel — adoptez pour vous-memes. L'imperatif 2MP s'adresse a un groupe (les croyants, les gens). Le complement « min maqami Ibrahim » (de la Station d'Ibrahim) precise ce qui est adopte. Le deuxieme complement « musallan » (un lieu de priere) precise la fonction. La distinction avec « punir » est que le contexte est une injonction positive, pas une sanction.",
              axe1_verset: "Le verbe ittakhidhu introduit une injonction au milieu du recit narratif — apres la description de la Maison (recit), l'injonction d'adopter la Station (ordre). Le champ lexical (Maison, lieu de retour, securite, adopter, Station, priere) montre que l'injonction prolonge la description : la Maison a ete constituee, maintenant adoptez-en la Station comme lieu de priere. Le verset passe du passe (Nous fimes) au present imperatif (adoptez).",
              axe2_voisins: "Le verset 124 contenait une declaration divine (Je fais de toi un imam). Le verset 125 contient une injonction divine (adoptez la Station). Le verset 127 montrera Ibrahim et Ismael agissant (elevant les fondations). La progression est : declaration → injonction → action.",
              axe3_sourate: "La forme VIII d'a-kh-dh (ittakhadha) est frequente dans la sourate al-Baqarah. En 2:51, « quand vous preniez le veau ». En 2:116, « Dieu a pris un enfant ». La sourate utilise ittakhadha pour les choix deliberes — bons (adopter la Station) ou mauvais (prendre le veau).",
              axe4_coherence: "La racine a-kh-dh apparait environ 273 fois dans le Coran. La forme VIII (ittakhadha) apparait environ 124 fois. En 25:43, « as-tu vu celui qui a pris comme divinite sa passion ? ». Le Coran utilise ittakhadha pour tout choix d'adoption — adopter un lieu de priere, adopter une divinite, adopter un ami.",
              axe5_frequence: "Pour la mission du khalifa, l'adoption deliberee est un acte de la mission. Le khalifa choisit ses references — il adopte la Station d'Ibrahim comme lieu de priere. Le choix est actif et delibere, pas passif."
            }
          }
        }
      },
      // qwm pos=12
      {
        word_key: "qwm", position: 12, sense_chosen: "station",
        analysis_axes: {
          sense_chosen: "station",
          concept_chosen: "Verticalité/Droiture",
          concepts: {
            "Verticalité/Droiture": {
              status: "retenu",
              senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger", "se tenir debout"],
              proof_ctx: "Le mot maqami est un nom de lieu masculin singulier de la racine q-w-m au genitif en idafa avec Ibrahim. Le Lane's donne pour maqam : lieu ou l'on se tient debout, station, emplacement. Le schema maf'al (nom de lieu) designe le lieu de l'action — le maqam est le lieu ou quelqu'un se qama (s'est tenu debout). Le maqam d'Ibrahim est l'emplacement physique pres de la Kaaba ou Ibrahim se tenait debout. Le Lane's precise que maqam porte l'idee de verticalite — se tenir droit en un lieu. La distinction avec le peuple (nul) est que le mot est un nom de lieu, pas un nom collectif. La distinction avec la gestion (nul) est que le mot designe un emplacement physique, pas une activite administrative.",
              axe1_verset: "Le mot maqami est le lieu specifique que les gens doivent adopter comme lieu de priere. Le champ lexical (Maison, lieu de retour, securite, Station, priere) montre que le maqam est un sous-ensemble de la Maison — un lieu precis a l'interieur de l'espace sacre. La Station d'Ibrahim est le point de reference pour la priere — un lieu marque par la presence d'Ibrahim.",
              axe2_voisins: "Le verset 124 parlait d'Ibrahim comme imam. Le verset 125 associe la Station d'Ibrahim (maqam) a la priere. Le lien entre les deux versets est la presence d'Ibrahim — il est l'imam (celui qui est devant) et la Station est le lieu ou il se tenait debout. L'imam et la station sont lies.",
              axe3_sourate: "La racine q-w-m apparait frequemment dans la sourate al-Baqarah. En 2:3, « iqama as-salat » (etablir la priere). En 2:238, « tenez-vous debout devant Dieu ». La sourate lie la verticalite a la priere — se tenir debout est un acte de devotion.",
              axe4_coherence: "Le mot maqam Ibrahim apparait aussi en 3:97 — « il s'y trouve des signes evidents, dont le maqam d'Ibrahim ». Le Coran fait du maqam d'Ibrahim un signe visible — un lieu physique qui temoigne de la presence d'Ibrahim. En 14:41, Ibrahim prie « notre Seigneur, pardonne-moi ». Le maqam est le lieu de la priere d'Ibrahim.",
              axe5_frequence: "Pour la mission du khalifa, la station est le lieu de la mission. Le khalifa a un maqam — un lieu ou il se tient debout devant Dieu. La verticalite est la posture de la responsabilite — se tenir droit, debout, pret a agir."
            },
            "Peuple/Communauté": {
              status: "nul",
              senses: ["peuple", "communaute", "tribu", "nation", "groupe"],
              proof_ctx: "Le mot maqam est un nom de lieu (schema maf'al), pas un nom collectif. Le contexte est l'emplacement physique d'Ibrahim pres de la Kaaba."
            },
            "Gestion/Administration": {
              status: "nul",
              senses: ["gerer", "administrer", "prendre en charge", "diriger", "veiller sur"],
              proof_ctx: "Le mot maqam designe un emplacement physique, pas une activite de gestion. Le contexte est un lieu de priere."
            }
          }
        }
      },
      // brh pos=13 (Ibrahim via racine brh)
      {
        word_key: "brh", position: 13, sense_chosen: "Ibrahim",
        analysis_axes: {
          sense_chosen: "Ibrahim",
          concept_chosen: "Preuve/Piété",
          concepts: {
            "Preuve/Piété": {
              status: "retenu",
              senses: ["prouver", "etre pieux", "bonte"],
              proof_ctx: "Le mot ibrahima est le nom propre Ibrahim, ici en idafa avec maqam (Station d'Ibrahim). La racine b-r-h dans le Lane's couvre la preuve (burhan) et la piete (birr). Le nom Ibrahim est un emprunt non arabe, mais la tradition arabe relie cette racine a la piete et a la preuve. Ici le nom est un determinant possessif — la Station D'Ibrahim — il identifie a qui appartient la station. L'analyse complete est identique a celle de V124 pour le nom propre.",
              axe1_verset: "Le nom Ibrahim en idafa avec maqam designe le proprietaire de la Station — c'est la Station d'Ibrahim, pas celle d'un autre. Le champ lexical confirme que le verset tourne autour d'Ibrahim et de sa Maison. La Station porte le nom d'Ibrahim car il s'y tenait debout.",
              axe2_voisins: "Les versets 124-129 sont le bloc consacre a Ibrahim. Chaque verset mentionne Ibrahim — en 124 comme imam, en 125 comme Station et purificateur, en 126-127 comme prieur et constructeur. Ibrahim est omnipresent dans ce passage.",
              axe3_sourate: "Ibrahim est un personnage central de la sourate al-Baqarah. Son nom apparait dans le contexte de la Maison, de la priere, de la qibla. La sourate fait d'Ibrahim le fondateur des rites associes a la Maison.",
              axe4_coherence: "En 3:97, « il s'y trouve des signes evidents, dont le maqam d'Ibrahim ». Le Coran fait du maqam d'Ibrahim un signe visible pour l'humanite. Ibrahim est le patriarche dont la Station temoigne de la presence.",
              axe5_frequence: "Pour le khalifa, Ibrahim est le modele — sa Station est le lieu de reference de la mission. Le khalifa adopte la Station d'Ibrahim comme son propre lieu de priere."
            }
          }
        }
      },
      // slw pos=14
      {
        word_key: "slw", position: 14, sense_chosen: "lieu de priere",
        analysis_axes: {
          sense_chosen: "lieu de priere",
          concept_chosen: "Prière/Invocation",
          concepts: {
            "Prière/Invocation": {
              status: "retenu",
              senses: ["prier", "priere rituelle", "invoquer", "benir", "lieu de priere"],
              proof_ctx: "Le mot musallan est un nom de lieu masculin singulier indefini accusatif de la racine s-l-w. Le Lane's donne pour musalla : lieu de priere, endroit ou l'on prie. Le schema muf'alla (nom de lieu de la forme II) indique le lieu ou l'action s'accomplit — le musalla est le lieu de la salat (priere). Le mot est indefini (sans article) : « un lieu de priere » — pas LE lieu de priere mais un lieu parmi d'autres ou l'on peut prier. La distinction avec « suivre de pres » (nul) est que le mot est un nom de lieu derive de la priere, pas un verbe de poursuite.",
              axe1_verset: "Le mot musallan est le complement de l'injonction « adoptez de la Station d'Ibrahim un lieu de priere ». Le champ lexical (Maison, Station, priere) montre que le verset designe un lieu precis pour la priere — la Station d'Ibrahim. Le musalla est la fonction assignee a la Station : c'est un endroit pour prier.",
              axe2_voisins: "Le verset 127 montrera Ibrahim et Ismael priant (rabbana, notre Seigneur). Le verset 128 contient aussi une priere. Les versets 125-129 alternent entre injonctions de priere et prieres effectives. La priere est l'activite centrale du passage.",
              axe3_sourate: "La racine s-l-w est structurante dans la sourate al-Baqarah. En 2:3, « ceux qui etablissent la priere ». En 2:43, « accomplissez la priere ». En 2:238, « gardez les prieres ». La sourate fait de la priere un pilier — le musalla de 2:125 donne a la priere un ancrage spatial.",
              axe4_coherence: "La racine s-l-w apparait environ 99 fois dans le Coran. Le mot musalla n'apparait qu'une seule fois — en 2:125. Cette unicite souligne l'importance de la Station d'Ibrahim comme lieu de priere specifique. Le Coran ne nomme aucun autre lieu « musalla ».",
              axe5_frequence: "Pour la mission du khalifa, le lieu de priere est le lieu de la mission. Le khalifa prie dans un lieu dedie — la priere ancre la mission dans l'espace. Adopter la Station d'Ibrahim comme musalla c'est inscrire sa priere dans la lignee d'Ibrahim."
            },
            "Proximité/Attachement": {
              status: "nul",
              senses: ["suivre de pres"],
              proof_ctx: "Le sens de suivre de pres est un sens derive de s-l-w. Le contexte est un nom de lieu (musalla), pas un verbe de poursuite."
            }
          }
        }
      },
      // ehd pos=16
      {
        word_key: "ehd", position: 16, sense_chosen: "confier",
        analysis_axes: {
          sense_chosen: "confier",
          concept_chosen: "Engagement/Promesse",
          concepts: {
            "Engagement/Promesse": {
              status: "retenu",
              senses: ["engagement", "pacte", "promesse", "confier"],
              proof_ctx: "Le verbe 'ahidna est un accompli 1P de la racine '-h-d. Le Lane's donne : confier, charger, donner un engagement. Le « Nous » majestatif indique que Dieu est le sujet. La preposition ila (vers) indique la direction — Dieu confie VERS Ibrahim et Ismael. Le verbe 'ahida avec ila signifie charger quelqu'un d'une mission — c'est plus qu'un simple engagement, c'est une delegation de responsabilite. En V124, le meme mot 'ahd apparaissait comme nom (Mon engagement). Ici il apparait comme verbe (Nous confiames) — Dieu passe de la declaration de Son engagement a l'acte de confier.",
              axe1_verset: "Le verbe 'ahidna introduit la troisieme action du verset — apres constituer (ja'alna) et ordonner (ittakhidhu), Dieu confie. Le champ lexical (confier, Ibrahim, Ismael, purifier, Maison) montre que la mission confiee est la purification de la Maison. La mission est confiee a deux personnes — Ibrahim et Ismael — qui doivent travailler ensemble.",
              axe2_voisins: "Le verset 124 utilisait 'ahdi (Mon engagement) comme condition — l'engagement n'atteint pas les injustes. Le verset 125 utilise 'ahidna (Nous confiames) comme mission — purifier la Maison. Le passage de la condition a la mission montre que l'engagement divin se concretise en une tache specifique.",
              axe3_sourate: "La racine '-h-d apparait dans la sourate al-Baqarah en 2:27, 2:40, 2:63, 2:80, 2:83, 2:100, 2:124, 2:125. La sourate fait du 'ahd un theme recurrent — les engagements sont pris et rompus, confies et trahis. Le verset 125 montre un engagement positif — Dieu confie une mission que les destinataires doivent accomplir.",
              axe4_coherence: "En 20:115, « Nous avions confie ('ahidna ila) a Adam, mais il oublia ». Le meme verbe 'ahidna ila est utilise pour la mission confiee a Adam et a Ibrahim — les deux patriarches recoivent une delegation divine. Le Coran montre que la mission confiee est un test — Adam oublia, Ibrahim accomplit.",
              axe5_frequence: "Pour la mission du khalifa, la mission est confiee par Dieu. Le khalifa recoit une delegation — Dieu lui confie une tache specifique. La mission n'est pas auto-attribuee mais confiee par l'autorite divine."
            },
            "Sens isolé/Époque": {
              status: "nul",
              senses: ["epoque"],
              proof_ctx: "Le sens d'epoque est hors sujet — le verbe est performatif ici, Dieu confie une mission."
            }
          }
        }
      },
      // brh pos=18 (2e occurrence Ibrahim)
      {
        word_key: "brh", position: 18, sense_chosen: "Ibrahim",
        analysis_axes: {
          sense_chosen: "Ibrahim",
          concept_chosen: "Preuve/Piété",
          concepts: {
            "Preuve/Piété": {
              status: "retenu",
              senses: ["prouver", "etre pieux", "bonte"],
              proof_ctx: "Deuxieme occurrence d'Ibrahim dans le verset — ici comme destinataire de la mission confiee ('ahidna ila Ibrahima). Memes analyses que pour la premiere occurrence en position 13. Ibrahim est le premier destinataire de la mission de purification — il est nomme avant Ismael car il est l'aine et l'initiateur du projet.",
              axe1_verset: "Le nom Ibrahim est le premier des deux destinataires de la mission — Dieu confie a Ibrahim ET a Ismael. Le champ lexical confirme qu'Ibrahim est le pivot du verset — il apparait deux fois (Station, destinataire). Memes analyses que pos=13.",
              axe2_voisins: "Memes analyses que pos=13 — Ibrahim est omnipresent dans le bloc 124-129.",
              axe3_sourate: "Memes analyses que pos=13.",
              axe4_coherence: "Memes analyses que pos=13.",
              axe5_frequence: "Memes analyses que pos=13."
            }
          }
        }
      },
      // sme pos=20
      {
        word_key: "sme", position: 20, sense_chosen: "Ismael",
        analysis_axes: {
          sense_chosen: "Ismael",
          concept_chosen: "Audition/Écoute",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              senses: ["entendre"],
              proof_ctx: "Le mot Isma'ila est un nom propre non arabe designant le fils d'Ibrahim. Le Lane's repertorie la racine s-m-' avec le sens d'entendre/ecouter. Le nom Ismael est etymologiquement lie a l'audition — « Dieu entend » ou « Dieu a entendu ». C'est un emprunt (de l'hebreu Yishmael) dont la racine arabe s-m-' (entendre) resonne avec le sens originel. Ici le nom est un complement de 'ahidna (Nous confiames) — Dieu confie la mission a Ibrahim ET a Ismael. Les deux sont co-responsables de la purification de la Maison.",
              axe1_verset: "Le nom Isma'ila est le deuxieme destinataire de la mission — Ibrahim et Ismael ensemble doivent purifier la Maison. Le champ lexical (confier, Ibrahim, Ismael, purifier, Maison) montre que la mission est conjointe. L'imperatif duel (tahhira, pour deux) confirme que les deux sont adresses. Ismael est le partenaire d'Ibrahim dans cette tache.",
              axe2_voisins: "Le verset 127 montrera Ibrahim et Ismael elevant les fondations de la Maison — la meme paire. Le verset 128 contient leur priere commune. Les versets 125-129 font d'Ibrahim et Ismael un duo inseparable dans l'entreprise de la Maison. La tradition les presente comme pere et fils travaillant ensemble.",
              axe3_sourate: "Ismael est mentionne en 2:125, 2:127, 2:133, 2:136, 2:140. La sourate associe systematiquement Ismael a Ibrahim dans le contexte de la Maison. Ismael est le lien entre Ibrahim et les Arabes — la sourate l'inclut dans la chaine prophetique.",
              axe4_coherence: "Le nom Ismael apparait environ 12 fois dans le Coran. En 19:54, « il etait fidele a sa promesse, et il etait envoye, prophete ». Le Coran fait d'Ismael un prophete et un fidele — sa fidelite a la promesse resonne avec la mission de purification.",
              axe5_frequence: "Pour la mission du khalifa, Ismael represente la collaboration dans la mission. Le khalifa ne travaille pas seul — Ibrahim avait Ismael. La mission est conjointe et collaborative."
            }
          }
        }
      },
      // thr pos=22
      {
        word_key: "thr", position: 22, sense_chosen: "purifier",
        analysis_axes: {
          sense_chosen: "purifier",
          concept_chosen: "Pureté/Purification",
          concepts: {
            "Pureté/Purification": {
              status: "retenu",
              senses: ["etre pur", "purifier", "se purifier", "pur"],
              proof_ctx: "Le verbe tahhira est un imperatif 2D (duel) de la racine t-h-r a la forme II (fa''ala). Le Lane's donne : purifier, rendre pur, nettoyer. La forme II intensifie l'action — la purification est complete et approfondie. Le duel (alif de duel dans tahhira) s'adresse a Ibrahim et Ismael ensemble — les deux doivent purifier. L'objet est baytiya (Ma Maison) — la Maison de Dieu. La purification est une mission divine — Dieu ordonne la purete de Sa Maison. Le but est precise : pour ceux qui tournent autour, font retraite, s'inclinent et se prosternent. La purification est au service des rites.",
              axe1_verset: "Le verbe tahhira est le contenu de la mission confiee par Dieu — purifiez Ma Maison. Le champ lexical (confier, purifier, Maison, tourner autour, retraite, incliner, prosterner) montre que la purification est la condition prealable des rites. La Maison doit etre pure pour que les rites s'y accomplissent. La purification precede la priere, le tawaf, la retraite.",
              axe2_voisins: "Le verset 124 parlait d'epreuve — la purification est peut-etre l'une des « paroles » par lesquelles Dieu a eprouve Ibrahim. Le verset 127 montrera Ibrahim et Ismael elevant les fondations — la construction physique accompagne la purification spirituelle. La purification est a la fois physique (nettoyer le lieu) et spirituelle (le consacrer).",
              axe3_sourate: "La racine t-h-r apparait en 2:125, 2:222, 2:232. En 2:222, « Dieu aime ceux qui se purifient ». La sourate lie la purete a l'amour de Dieu — se purifier et purifier le lieu sacre sont des actes qui plaisent a Dieu.",
              axe4_coherence: "En 22:26, « purifie Ma Maison pour ceux qui tournent autour, ceux qui s'y tiennent debout, ceux qui s'inclinent et se prosternent ». Le meme ordre de purification apparait dans un autre contexte — la Mission de purification est recurrente. Le Coran repete cette injonction car la purete du lieu sacre est une responsabilite permanente.",
              axe5_frequence: "Pour la mission du khalifa, la purification est une tache de la mission. Le khalifa est charge de purifier — physiquement et moralement. La purete du lieu est la condition de la mission. Sans purete, pas de priere valide, pas de rites accomplis."
            }
          }
        }
      },
      // byt pos=23 (2e occurrence — Ma Maison)
      {
        word_key: "byt", position: 23, sense_chosen: "maison",
        analysis_axes: {
          sense_chosen: "maison",
          concept_chosen: "Demeure/Sanctuaire",
          concepts: {
            "Demeure/Sanctuaire": {
              status: "retenu",
              senses: ["maison", "demeure", "passer la nuit"],
              proof_ctx: "Deuxieme occurrence de bayt dans le verset — ici comme baytiya (Ma Maison) avec pronom suffixe 1S divin (ya, Ma). Le Lane's donne : maison, demeure. Le possessif divin (ya) rattache la Maison a Dieu — c'est SA Maison. La premiere occurrence (al-bayta) avait l'article defini, la deuxieme a le possessif divin. Le passage de l'article au possessif cree une intimite : la Maison n'est pas seulement « la » Maison connue — c'est « Ma » Maison, propriete de Dieu. Purifier Ma Maison est un ordre personnel de Dieu.",
              axe1_verset: "Le mot baytiya avec le possessif divin est l'objet de la purification — purifiez MA Maison. Le possessif « Ma » donne un poids personnel a l'ordre. Le champ lexical (confier, purifier, Ma Maison) montre que Dieu est personnellement implique dans la purete de Sa Maison. Ce n'est pas un ordre administratif mais une injonction personnelle.",
              axe2_voisins: "Le verset 127 utilise al-bayt (la Maison) sans possessif pour parler de la construction. Le passage du possessif divin (Ma Maison, purifier) a l'article neutre (la Maison, construire) montre deux perspectives : Dieu ordonne la purete de Sa propriete, Ibrahim et Ismael construisent le batiment.",
              axe3_sourate: "La racine b-y-t avec possessif divin n'apparait qu'en 2:125 dans la sourate — cette intimite est unique. Quand la sourate parle de la Maison ailleurs, c'est avec l'article (al-bayt). Le possessif divin souligne que la Maison est propriete divine.",
              axe4_coherence: "En 22:26, « purifie Ma Maison ». En 14:37, « pres de Ta Maison sacree ». Le Coran utilise le possessif divin pour la Kaaba dans les contextes de purification et de priere — la Maison est la propriete de Dieu.",
              axe5_frequence: "Pour le khalifa, la Maison est la propriete de Dieu confiee a sa garde. Le khalifa est le gardien de la Maison de Dieu — il la purifie mais ne la possede pas."
            }
          }
        }
      },
      // twf pos=25
      {
        word_key: "twf", position: 25, sense_chosen: "tourner autour",
        analysis_axes: {
          sense_chosen: "tourner autour",
          concept_chosen: "Circumambulation/Visite",
          concepts: {
            "Circumambulation/Visite": {
              status: "retenu",
              senses: ["tourner autour", "tawaf", "circuler"],
              proof_ctx: "Le mot at-ta'ifina est un participe actif pluriel masculin defini de la racine t-w-f avec preposition li (pour). Le Lane's donne : ceux qui tournent autour, ceux qui font le tawaf, ceux qui circulent. Le ta'if est celui qui tourne — le tawaf autour de la Kaaba est le rite de circumambulation. Le participe actif indique une action en cours ou habituelle — ceux qui tournent regulierement. Le pluriel defini (at-ta'ifina) donne une valeur generique — tous ceux qui tournent. La purification est au service de ce rite — la Maison doit etre pure pour les circumambulants.",
              axe1_verset: "Le mot at-ta'ifina est le premier des quatre groupes pour lesquels la Maison doit etre purifiee : ceux qui tournent, ceux qui font retraite, ceux qui s'inclinent, ceux qui se prosternent. Le champ lexical (purifier, tourner, retraite, incliner, prosterner) montre que la Maison est un espace de rites multiples. Le tawaf est le premier rite mentionne — tourner autour de la Maison est l'acte fondateur.",
              axe2_voisins: "Le verset 158 mentionnera le tawaf entre Safa et Marwa — « celui qui fait le pelerinage de la Maison ou la visite, pas de faute s'il fait le tawaf ». Le tawaf est un rite lie a la Maison que la sourate detaillera plus loin.",
              axe3_sourate: "La racine t-w-f apparait en 2:125 et 2:158 dans la sourate. En 2:125, les ta'ifin sont les circumambulants de la Kaaba. En 2:158, le tawaf est entre Safa et Marwa. La sourate associe le tawaf a la Maison sacree.",
              axe4_coherence: "En 22:29, « qu'ils tournent autour de la Maison antique ». En 52:4, « la Maison frequentee ». Le Coran fait du tawaf un rite central du pelerinage — tourner autour de la Maison est un acte de devotion.",
              axe5_frequence: "Pour le khalifa, le tawaf est un rite de la mission — tourner autour du centre sacre renouvelle l'engagement. Le mouvement circulaire symbolise le retour perpetuel vers le centre."
            }
          }
        }
      },
      // ekf pos=27
      {
        word_key: "ekf", position: 27, sense_chosen: "faire retraite",
        analysis_axes: {
          sense_chosen: "faire retraite",
          concept_chosen: "Retraite/Attachement",
          concepts: {
            "Retraite/Attachement": {
              status: "retenu",
              senses: ["s'attacher", "retraite", "se consacrer"],
              proof_ctx: "Le mot al-'akifina est un participe actif pluriel masculin defini de la racine '-k-f. Le Lane's donne : ceux qui restent assidument en un lieu, ceux qui font retraite, ceux qui se consacrent. Le 'akif est celui qui se retire dans un lieu pour s'y consacrer — la retraite ('itikaf) dans la mosquee est le rite de consecration. Le participe actif indique une action en cours ou habituelle. Le Lane's precise que 'akafa peut aussi signifier « s'attacher a » — les 'akifin sont attaches a la Maison, ils y restent par devotion. La purification est au service de leur retraite — la Maison doit etre pure pour ceux qui y demeurent.",
              axe1_verset: "Le mot al-'akifina est le deuxieme des quatre groupes — apres ceux qui tournent. Le champ lexical (purifier, tourner, retraite, incliner, prosterner) montre une progression : le tawaf est un mouvement circulaire, la retraite est un sejour prolonge. La Maison accueille des formes differentes de devotion — le mouvement et l'immobilite.",
              axe2_voisins: "Le verset 187 mentionnera la retraite dans les mosquees — « et ne les approchez pas alors que vous etes en retraite dans les mosquees ». La sourate detaillera les regles de la retraite plus loin. Le verset 125 pose le principe : la Maison est pour ceux qui font retraite.",
              axe3_sourate: "La racine '-k-f apparait en 2:125, 2:187 et dans le contexte des idoles (2:51). En 2:125, la retraite est positive (devotion). En 2:51, l'attachement est negatif (adorer le veau). La sourate montre que l'attachement peut etre bon ou mauvais selon son objet.",
              axe4_coherence: "En 22:25, « ceux qui y font retraite ('akif) et ceux de passage ». Le Coran distingue les residents et les visiteurs de la Maison. Les 'akifin sont ceux qui restent — leur devotion est marquee par la duree.",
              axe5_frequence: "Pour le khalifa, la retraite est un outil de la mission — se retirer pour se consacrer a la reflexion et a la devotion. Le khalifa alterne entre l'action (tawaf) et la contemplation (retraite)."
            }
          }
        }
      },
      // rke pos=29
      {
        word_key: "rke", position: 29, sense_chosen: "s'incliner",
        analysis_axes: {
          sense_chosen: "s'incliner",
          concept_chosen: "Inclinaison/Prière",
          concepts: {
            "Inclinaison/Prière": {
              status: "retenu",
              senses: ["s'incliner", "genuflexion", "ruku'"],
              proof_ctx: "Le mot ar-rukka'i est un pluriel intensif masculin defini de la racine r-k-' au genitif. Le Lane's donne : ceux qui s'inclinent, ceux qui font le ruku'. Le raki' est celui qui courbe le dos en signe de soumission — le ruku' est un pilier de la priere rituelle. Le pluriel intensif (fu''al) indique l'intensite ou la frequence — ce sont des pratiquants assidus de l'inclinaison. Le mot est au genitif apres la preposition li (pour) implicite du debut — la Maison est purifiee POUR les circumambulants, les retreatants, les inclines et les prosternes.",
              axe1_verset: "Le mot ar-rukka'i est le troisieme des quatre groupes — apres ceux qui tournent et ceux qui font retraite. Le champ lexical (tourner, retraite, incliner, prosterner) montre une progression dans l'intimite avec Dieu : le tawaf est exterieur, la retraite est le sejour, l'inclinaison est le geste de la priere, la prosternation est le geste ultime. La Maison accueille tous les degres de devotion.",
              axe2_voisins: "Le verset 43 ordonnait « inclinez-vous avec ceux qui s'inclinent ». Le verset 125 montre que l'inclinaison a un lieu dedie — la Maison purifiee. Le lien entre l'ordre (v43) et le lieu (v125) montre que la priere et le lieu sont inseparables.",
              axe3_sourate: "La racine r-k-' apparait en 2:43, 2:125. En 2:43, « accomplissez la priere, donnez l'aumone, et inclinez-vous avec ceux qui s'inclinent ». La sourate fait de l'inclinaison un acte communautaire — on s'incline AVEC les autres.",
              axe4_coherence: "La racine r-k-' apparait environ 13 fois dans le Coran. En 22:77, « inclinez-vous et prosternez-vous ». En 48:29, « tu les vois inclines et prosternes ». Le Coran associe systematiquement l'inclinaison et la prosternation comme les deux gestes de la priere.",
              axe5_frequence: "Pour le khalifa, l'inclinaison est le geste de la soumission — le khalifa courbe le dos devant Dieu. L'inclinaison physique exprime l'humilite interieure — reconnattre que Dieu est plus grand."
            }
          }
        }
      },
      // sjd pos=30
      {
        word_key: "sjd", position: 30, sense_chosen: "se prosterner",
        analysis_axes: {
          sense_chosen: "se prosterner",
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "obeir"],
              proof_ctx: "Le mot as-sujudi est un masdar/nom defini masculin singulier de la racine s-j-d au genitif. Le Lane's donne : prosternation, acte de se prosterner, soumission totale. Le sujud est le geste ultime de la priere — le front touche le sol en signe d'humilite absolue. Le masdar (nom d'action) designe l'acte de prosternation dans son abstraction — c'est l'acte meme, pas les personnes (contrairement a at-ta'ifin, al-'akifin, ar-rukka'i qui designent des personnes). La distinction avec « mosquee » (nul) est que le mot est un masdar (acte de prosternation), pas un nom de lieu (masjid).",
              axe1_verset: "Le mot as-sujudi est le dernier des quatre elements — apres le tawaf, la retraite et l'inclinaison. Le champ lexical montre une progression culminante : tourner → demeurer → s'incliner → se prosterner. La prosternation est le point culminant — le geste le plus bas physiquement et le plus haut spirituellement. La Maison est purifiee ultimement pour la prosternation.",
              axe2_voisins: "Le verset 34 ordonnait « prosternez-vous devant Adam ». Le verset 125 montre que la prosternation a un lieu dedie — la Maison purifiee. La sourate passe de la prosternation cosmique (les anges devant Adam) a la prosternation terrestre (les croyants dans la Maison).",
              axe3_sourate: "La racine s-j-d est une racine majeure de la sourate al-Baqarah. En 2:34, la prosternation des anges. En 2:58, l'ordre d'entrer en se prosternant. En 2:125, la prosternation dans la Maison. La sourate fait de la prosternation un acte fondamental de la relation avec Dieu.",
              axe4_coherence: "La racine s-j-d apparait environ 92 fois dans le Coran. Le sujud est un des gestes les plus importants de la devotion. En 96:19, « prosterne-toi et rapproche-toi ». Le Coran lie la prosternation au rapprochement de Dieu — le geste le plus bas rapproche le plus.",
              axe5_frequence: "Pour le khalifa, la prosternation est l'acte ultime de la mission — reconnaitre Dieu comme seul Seigneur. Le khalifa se prosterne devant Dieu et devant personne d'autre. La prosternation est le signe de la mission accomplie — le khalifa soumis a son Mandant."
            },
            "Lieu de prosternation": {
              status: "nul",
              senses: ["mosquee"],
              proof_ctx: "Le mot as-sujudi est un masdar (nom d'action), pas un nom de lieu. Le masjid (mosquee) est le nom de lieu derive de s-j-d, pas le masdar sujud."
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

  const verseIds = [131, 132];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 124-125 ===\n');
  await processVerse(124);
  await processVerse(125);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V124-125 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
