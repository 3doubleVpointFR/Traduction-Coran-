const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 147
// verse_id=154, analysis_id=513
// "La verite vient de ton Seigneur, ne sois donc pas
//  parmi ceux qui doutent."
// Ce verset clot une section sur la qibla et la direction
// de priere. Le verset 146 parlait de ceux qui reconnaissent
// la verite, ce verset affirme cette verite.
// =====================================================

const verseData = {
  147: {
    verse_id: 154,
    analysis_id: 513,
    translation_arab: "La verite [vient] de ton Seigneur, donc ne sois pas parmi ceux qui doutent.",
    full_translation: "La verite vient de ton Seigneur. Ne sois donc point de ceux qui doutent.",
    translation_explanation: `§DEMARCHE§
Le verset est une phrase nominale suivie d'une injonction. Le mot **al-haqqu** est un nom masculin singulier defini nominatif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est vrai et etabli. Le nominatif indique que al-haqq est le sujet (mubtada') de la phrase nominale. L'article defini (al-) marque que c'est LA verite — pas une verite parmi d'autres, mais la verite absolue et connue. La preposition **min** (de) introduit la provenance — la verite vient de quelque part. Le nom **rabbika** est un nom masculin singulier genitif de la racine r-b-b avec pronom suffixe 2MS (ka, ton). Le Lane's donne : seigneur, maitre, celui qui eleve et entretient. Le genitif est regi par la preposition min. Le pronom « ka » (ton) s'adresse au Prophete directement — « ton Seigneur ». L'expression « min rabbika » (de ton Seigneur) est le predicat (khabar) de la phrase nominale — la verite vient de ton Seigneur. La particule **fa** (donc) est une particule de consequence — elle lie ce qui precede (la verite vient de ton Seigneur) a ce qui suit (ne sois pas parmi les douteurs). La particule de negation **la** est ici prohibitive — elle interdit. Le verbe **takunnanna** est un inaccompli 2MS de la racine k-w-n avec nun de l'emphase lourde. Le Lane's donne : etre, venir a l'existence. Ici le verbe est incomplet (verbe support) — il porte la negation et le temps sans decrire une realite en soi. Le nun emphatique (nanna) renforce l'interdiction — ne sois absolument pas. La preposition **mina** (de, parmi) introduit le groupe dont il faut se distinguer. Le mot **al-mumtarin** est un participe actif pluriel masculin genitif de la racine m-r-y (forme VIII imtara). Le Lane's donne : douter, etre dans l'incertitude, contester la verite. Le participe actif pluriel defini (al-) designe ceux qui doutent habituellement — c'est un etat permanent. Le genitif est regi par min. Le verset dit : puisque la verite vient de ton Seigneur, il n'y a aucune raison de douter — ne sois donc pas parmi ceux qui doutent.

§JUSTIFICATION§
**la verite** — Le sens retenu est « verite/realite ». Le mot al-haqq designe ce qui est vrai et etabli. L'alternative « droit » est ecartee car le contexte n'est pas juridique — le verset affirme la verite de la qibla, pas un droit legal. L'alternative « obligation » est ecartee car le contexte est epistemique (verite vs doute), pas deontique (obligation vs permission).

**ton Seigneur** — Le sens retenu est « seigneur/maitre ». Le mot rabb designe celui qui eleve, entretient et gouverne. L'alternative « faire grandir » est ecartee car le mot est un nom (rabb + ka), pas un verbe. Le pronom « ka » (ton) cree une relation personnelle — ton Seigneur, pas le Seigneur en general.

**ne sois pas** — Le sens retenu est « etre (verbe incomplet) ». Le verbe kana/yakunu est ici un verbe support qui porte la negation et l'emphase. L'alternative « venir a l'existence » est ecartee car le verbe est incomplet — il ne decrit pas une existence mais un etat. Le nun emphatique renforce l'interdiction.

**ceux qui doutent** — Le sens retenu est « douter/contester ». Le mot al-mumtarin designe ceux qui sont dans le doute persistant. L'alternative « passer » (sens de passage) est ecartee car la forme VIII imtara signifie specifiquement douter. L'alternative « amertume » est ecartee car le participe actif mumtarin ne derive pas du sens d'amertume mais du sens de contestation et de doute.

§CRITIQUE§
Les traductions courantes concordent sur le sens general de ce verset. Hamidullah donne « ne sois point de ceux qui doutent » — nous donnons « ne sois pas parmi ceux qui doutent ». La difference est stylistique : « parmi » est plus precis que « de » pour rendre la preposition mina qui indique l'appartenance a un groupe. Le mot « point » est un registre soutenu que nous remplacons par « pas » en francais courant. La traduction mot a mot retient « la verite [vient] de ton Seigneur » avec le verbe implicite entre crochets — la phrase arabe est nominale et n'a pas de verbe explicite.`,
    segments: [
      { fr: "la verite", pos: "nom", phon: "al-haqqu", arabic: "\u0671\u0644\u0652\u062d\u064e\u0642\u0651\u064f", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 1 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 2 },
      { fr: "ton Seigneur", pos: "nom", phon: "rabbika", arabic: "\u0631\u064e\u0651\u0628\u0651\u0650\u0643\u064e", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 3 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 4 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 5 },
      { fr: "sois", pos: "verbe", phon: "takunnanna", arabic: "\u062a\u064e\u0643\u064f\u0648\u0646\u064e\u0646\u0651\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 6 },
      { fr: "parmi", phon: "mina", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 7 },
      { fr: "ceux qui doutent", pos: "participe_actif", phon: "al-mumtarin", arabic: "\u0671\u0644\u0652\u0645\u064f\u0645\u0652\u062a\u064e\u0631\u0650\u064a\u0646\u064e", word_key: "mrr", is_particle: false, sense_retenu: "douter", position: 8 }
    ],
    words: [
      // hqq pos=1
      {
        word_key: "hqq", position: 1, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["etre vrai", "verite", "realite", "droit"],
              proof_ctx: "Le mot al-haqqu est un nom masculin singulier defini nominatif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est conforme a la realite des choses. Le haqq est un etat objectif et permanent — ce qui est vrai reste vrai independamment de celui qui le reconnait ou le nie. L'article defini (al-) marque LA verite absolue. Le nominatif indique que al-haqq est le sujet de la phrase nominale — la verite est le point de depart de l'enonce. La distinction avec l'obligation (nul) est claire : le contexte est epistemique (verite vs doute), pas deontique.",
              axe1_verset: "Le mot al-haqqu ouvre le verset et pose l'affirmation fondamentale : la verite vient de ton Seigneur. Le champ lexical du verset s'organise autour de l'opposition verite/doute — al-haqq d'un cote, al-mumtarin de l'autre. La verite est affirmee comme venant de Dieu (min rabbika), ce qui lui donne une autorite absolue. La consequence logique est immediate : si la verite vient de Dieu, le doute est injustifie. Le verset est structure en deux temps — affirmation de la verite, puis interdiction du doute.",
              axe2_voisins: "Le verset 146 disait que ceux a qui le Livre a ete donne reconnaissent la verite comme ils reconnaissent leurs propres fils. Le verset 147 enchaine : cette verite vient de ton Seigneur. Le passage du verset 146 au 147 passe de la reconnaissance humaine de la verite a sa source divine. Le verset 148 parlera de la direction vers laquelle chacun se tourne — la verite de la qibla est le fil conducteur de ces versets.",
              axe3_sourate: "La racine h-q-q est une racine structurante de la sourate al-Baqarah. En 2:26, Dieu ne se gene pas de donner en exemple la verite. En 2:42, « ne revetez pas la verite de faussete ». En 2:91, « il confirme ce qui est avec eux ». En 2:119, le Prophete est envoye avec la verite. Le verset 147 s'inscrit dans cette chaine — la verite est un fil rouge de la sourate qui traverse chaque section. La sourate oppose systematiquement ceux qui suivent la verite et ceux qui la rejettent ou en doutent.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. L'expression « al-haqqu min rabbika » (la verite vient de ton Seigneur) est un refrain coranique — elle apparait en 2:147, 2:149, 3:60, 10:94. Le Coran repete cette formule pour ancrer la verite dans sa source divine. Le haqq est l'une des notions centrales du Coran — il designe a la fois la verite ontologique (ce qui est reel) et la verite normative (ce qui est juste et droit).",
              axe5_frequence: "Pour la mission du khalifa, la verite est le fondement de la mission. Le khalifa est charge de gouverner selon la verite — en 38:26, Dawud recoit l'ordre de juger entre les gens avec la verite. La verite vient de Dieu, pas de l'opinion humaine. Le khalifa qui doute de la verite divine ne peut pas accomplir sa mission de gouvernance juste. Reconnaitre la verite et agir selon elle est la premiere exigence de la mission."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "meriter", "etre obligatoire"],
              proof_ctx: "Le sens d'obligation est un sens derive de h-q-q — ce qui est vrai merite d'etre suivi. Le contexte du verset est la verite de la qibla face au doute, pas une obligation juridique."
            },
            "Sens isolé/Se réaliser": {
              status: "nul",
              senses: ["se realiser"],
              proof_ctx: "Le sens de se realiser est un usage specifique de h-q-q. Le contexte est la verite comme etat objectif, pas un processus de realisation."
            },
            "Sens isolé/Vérifier": {
              status: "nul",
              senses: ["verifier"],
              proof_ctx: "Le sens de verifier est un acte actif de h-q-q. Le contexte est la verite comme etat affirme, pas un acte de verification en cours."
            }
          }
        }
      },
      // rbb pos=3 (pos=2 dans les mots de contenu, pos=3 dans les segments car particule min en pos=2)
      {
        word_key: "rbb", position: 3, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le mot rabbika est un nom masculin singulier genitif de la racine r-b-b avec pronom suffixe 2MS (ka, ton). Le Lane's donne : seigneur, maitre, celui qui possede, eleve et entretient. Le rabb est celui qui a l'autorite sur ce qui lui appartient et qui prend soin de ce qu'il gouverne. Le genitif est regi par la preposition min (de). Le pronom « ka » s'adresse au Prophete — « ton Seigneur ». L'expression « min rabbika » signifie que la verite provient de Son Seigneur. La distinction avec la croissance (probable) est que le mot est ici un titre relationnel (ton Seigneur), pas un verbe de croissance.",
              axe1_verset: "Le mot rabbika situe la source de la verite — elle vient de ton Seigneur. Le champ lexical du verset (verite, Seigneur, doute) construit une hierarchie : la verite vient d'en haut (du Seigneur), le doute vient d'en bas (des hommes). Le pronom « ka » (ton) cree une relation personnelle entre le Prophete et son Seigneur — la verite n'est pas abstraite, elle vient de Celui qui t'eleve et te guide. Le verset fonde l'autorite de la verite sur l'autorite du Seigneur.",
              axe2_voisins: "Le verset 144 commencait par « Nous te voyons tourner le visage vers le ciel — Nous te tournerons vers une qibla qui te plait ». Le verset 147 confirme cette decision : la verite vient de ton Seigneur. Les versets 144-147 forment un arc narratif — Dieu decide la qibla, les gens du Livre reconnaissent la verite, et le verset 147 scelle cette verite par sa source divine. Le Seigneur est l'autorite qui tranche.",
              axe3_sourate: "La racine r-b-b est omnipresente dans la sourate al-Baqarah. En 2:5, « ceux-la sont sur une guidee de leur Seigneur ». En 2:62, « ils auront leur recompense aupres de leur Seigneur ». En 2:144, « Nous te tournerons vers une qibla ». Le Seigneur est le maitre de la direction — Il decide la qibla, Il est la source de la verite. La sourate lie le rabb a chaque acte de guidee et de decision.",
              axe4_coherence: "La racine r-b-b apparait environ 980 fois dans le Coran — c'est l'une des racines les plus frequentes. L'expression « min rabbika » (de ton Seigneur) apparait de nombreuses fois pour marquer l'origine divine d'un bienfait, d'une verite ou d'une revelation. En 2:147, 2:149, 3:60, la meme formule « al-haqqu min rabbika » est un refrain qui ancre la verite dans sa source divine.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est le mandant de la mission. Le khalifa gouverne au nom de son Seigneur — il n'est pas autonome, il est delegataire. En 2:30, Dieu dit « Je vais placer sur terre un khalifa ». Le khalifa recoit sa mission de son Seigneur et la verite qui guide cette mission vient de la meme source. Douter de la verite du Seigneur c'est douter du fondement meme de la mission."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens de croissance est le sens premier de r-b-b — faire grandir, augmenter. Le rabb est etymologiquement celui qui fait grandir. La distinction avec la seigneurie est que la croissance est le mecanisme physique (faire grandir en taille ou en quantite) tandis que la seigneurie est la relation d'autorite qui accompagne cette croissance. Le mot rabbika est ici un titre relationnel (ton Seigneur), pas un verbe de croissance, mais le sens de croissance eclaire le titre : le Seigneur est celui qui fait grandir.",
              axe1_verset: "Le mot rabbika pourrait theoriquement porter le sens de celui qui fait grandir. L'expression « la verite de celui qui te fait grandir » serait coherente — la verite vient de Celui qui t'eleve et te developpe. Mais le contexte privilegiait le titre relationnel (ton Seigneur) car le verset oppose la source divine (autorite) au doute humain (faiblesse). Le sens de croissance reste sous-jacent dans le titre.",
              axe2_voisins: "Les versets 144-146 traitent du changement de qibla et de la reconnaissance de la verite. Le mot rabb dans ces versets est utilise comme titre d'autorite qui decide la direction de la priere. Le sens de croissance n'est pas premier dans ce contexte de decision et d'autorite.",
              axe3_sourate: "La sourate al-Baqarah utilise rabb principalement au sens de Seigneur et d'autorite. Mais le sens de croissance apparait dans les passages sur la creation (2:21-22, Dieu fait croitre les fruits) et sur l'usure (2:276, Dieu fait croitre les aumones). Le sens de croissance est un fond permanent de la racine.",
              axe4_coherence: "Le Coran utilise la racine r-b-b dans ses deux axes — la seigneurie et la croissance. Le rabb est celui qui fait grandir (sens physique) et qui gouverne (sens relationnel). Les deux sens sont complementaires — gouverner c'est faire grandir ce qu'on gouverne.",
              axe5_frequence: "Pour la mission du khalifa, la croissance est un outil de la seigneurie. Le Seigneur fait grandir Sa creation — le khalifa doit faire grandir ce qui est sous sa responsabilite. La croissance est le signe d'une bonne gouvernance."
            },
            "Éducation/Accompagnement": {
              status: "nul",
              senses: ["elever un enfant", "eduquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education est un aspect de r-b-b — le rabb eleve et forme. Le mot est ici un titre relationnel (ton Seigneur), pas un verbe d'education."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette", "interet"],
              proof_ctx: "Le sens d'usure est un sens financier de r-b-b — augmentation illegitime d'une dette. Le contexte est la source divine de la verite, pas une transaction financiere."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "Le sens d'essoufflement est un usage concret marginal de r-b-b. Le contexte est la seigneurie divine."
            },
            "Sens isolé/Fixer": {
              status: "nul",
              senses: ["fixer"],
              proof_ctx: "Le sens de fixer est un usage concret de r-b-b hors sujet ici."
            },
            "Sens isolé/Rassembler": {
              status: "nul",
              senses: ["rassembler"],
              proof_ctx: "Le sens de rassembler est hors sujet — le mot est le titre Seigneur."
            },
            "Sens isolé/Groupe": {
              status: "nul",
              senses: ["groupe"],
              proof_ctx: "Le sens de groupe est hors sujet — le mot est le titre Seigneur."
            },
            "Sens isolé/Confiture": {
              status: "nul",
              senses: ["confiture"],
              proof_ctx: "Le sens de confiture est un sens concret marginal de r-b-b, totalement hors sujet."
            }
          }
        }
      },
      // kwn pos=6
      {
        word_key: "kwn", position: 6, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe takunnanna est un inaccompli 2MS de la racine k-w-n avec nun de l'emphase lourde (nanna). Le Lane's donne : etre, exister, venir a l'existence. Ici le verbe est incomplet — il sert de support grammatical pour porter la negation prohibitive (la) et l'emphase (nanna). Le verbe ne decrit pas une existence mais un etat : ne sois pas parmi les douteurs. Le nun emphatique renforce l'interdiction — c'est une prohibition absolue. La distinction avec l'humilite (nul) est claire : le verbe est un support grammatical, pas une description d'etat interieur.",
              axe1_verset: "Le verbe takunnanna porte l'interdiction du verset — ne sois absolument pas parmi ceux qui doutent. Le nun emphatique (nanna) donne a l'interdiction un poids considerable — ce n'est pas un simple conseil mais un ordre categorique. Le champ lexical du verset oppose la verite (al-haqq, rabbika) au doute (al-mumtarin), et le verbe kana avec la negation est le pivot qui fait basculer de l'affirmation a l'injonction. Le verset passe de la constatation (la verite vient de ton Seigneur) a l'ordre (ne sois donc pas parmi les douteurs).",
              axe2_voisins: "Le verset 146 constatait que ceux du Livre reconnaissent la verite. Le verset 147 transforme cette constatation en injonction personnelle : puisque meme eux reconnaissent, toi ne doute pas. Le verset 148 enchaîne avec « chacun a une direction ». L'interdiction de douter est le pont entre la reconnaissance par autrui et l'action personnelle — si les autres reconnaissent, a plus forte raison toi tu ne dois pas douter.",
              axe3_sourate: "La racine k-w-n est la racine la plus frequente du Coran — le verbe kana apparait plus de 1300 fois. Dans la sourate al-Baqarah, la formule « la takun/takunnanna min... » (ne sois pas parmi...) est un pattern recurrent. En 2:145, « si tu suivais leurs passions apres ce qui t'est venu comme science... ». Le verset 147 utilise la meme structure prohibitive pour decrire l'exclusion d'un groupe — ne sois pas de ce groupe-la.",
              axe4_coherence: "La formule « la takunnanna mina al-mumtarin » apparait mot pour mot en 2:147, 3:60, 6:114, 10:94. C'est un refrain coranique adresse au Prophete pour le fortifier contre le doute. Le Coran utilise cette formule dans des contextes ou la verite est affirmee et le doute interdit — la repetition montre que la tentation du doute est reelle et doit etre combattue.",
              axe5_frequence: "Pour la mission du khalifa, le verbe kana avec la negation definit ce que le khalifa ne doit pas etre. Le khalifa ne doit pas etre parmi les douteurs — il doit etre ferme dans la verite. L'emphase (nanna) montre que cette fermeté n'est pas optionnelle. Le khalifa qui doute de sa mission ne peut pas la mener a bien — la certitude est une condition prealable de la gouvernance juste."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — le verbe est ici un support grammatical pour l'interdiction, pas une description d'etat interieur."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Le sens de lieu ou d'etat est un sens derive de k-w-n. Le verbe est ici incomplet (verbe support), pas un indicateur de lieu ou d'etat en tant que tel."
            }
          }
        }
      },
      // mrr pos=8
      {
        word_key: "mrr", position: 8, sense_chosen: "douter",
        analysis_axes: {
          sense_chosen: "douter",
          concept_chosen: "Passage/Traversée",
          concepts: {
            "Passage/Traversée": {
              status: "retenu",
              senses: ["passer", "passer devant", "traverser"],
              proof_ctx: "Le mot al-mumtarin est un participe actif pluriel masculin genitif de la forme VIII (imtara) de la racine m-r-r/m-r-y. Le Lane's donne pour la forme VIII imtara : douter, etre dans l'incertitude, contester. Le sens etymologique de la racine est le passage — passer d'un etat a un autre, traverser. Le mumtari est celui qui passe d'une opinion a l'autre sans se fixer — il hesite, il va et vient entre la certitude et l'incertitude. Le participe actif pluriel defini (al-mumtarin) designe ceux qui sont habituellement dans cet etat de doute. Le doute est un passage inacheve — on n'arrive jamais a la certitude. La distinction avec l'amertume (nul) est claire : le contexte est epistemique (doute face a la verite), pas gustatif.",
              axe1_verset: "Le mot al-mumtarin clot le verset et represente l'antithese de la verite. Le champ lexical oppose al-haqq (la verite) a al-mumtarin (ceux qui doutent). Le verset construit un contraste binaire : la verite est ferme et vient de Dieu, le doute est un va-et-vient qui n'aboutit nulle part. L'interdiction « ne sois pas parmi eux » classe le doute comme un etat a fuir. Le participe actif indique que les douteurs sont dans un etat permanent de doute — ce n'est pas un doute ponctuel mais une disposition chronique.",
              axe2_voisins: "Le verset 146 disait que les gens du Livre reconnaissent la verite comme ils reconnaissent leurs fils, mais qu'un groupe dissimule. Le verset 147 enchaine : puisque la verite est reconnue, ne sois pas parmi ceux qui doutent. Le verset 148 parlera de la direction de chacun. Le doute est le probleme du verset 147 — les versets voisins montrent que la verite est claire (146) et qu'il faut agir en consequence (148). Le doute est l'obstacle entre la reconnaissance et l'action.",
              axe3_sourate: "La racine m-r-y/m-r-r au sens de doute apparait dans la sourate al-Baqarah en des moments cles. La sourate oppose systematiquement la certitude (yaqin) au doute (mirya). En 2:2, « ce Livre, nul doute en lui ». En 2:23, le defi est lance a ceux qui doutent. Le verset 147 s'inscrit dans cette opposition structurante — le doute est presente comme un obstacle a la mission divine que le Prophete doit eviter absolument.",
              axe4_coherence: "La formule « la takunnanna mina al-mumtarin » apparait en 2:147, 3:60, 6:114, 10:94 — c'est un refrain coranique adresse au Prophete. Le mot mumtarin est derive de la forme VIII qui intensifie le doute — ce n'est pas un doute passager mais un doute installe. Le Coran utilise ce mot pour designer ceux qui sont installes dans le doute comme dans un etat permanent dont ils ne veulent pas sortir.",
              axe5_frequence: "Pour la mission du khalifa, le doute est l'ennemi de la mission. Le khalifa doit gouverner avec certitude — celui qui doute hesite, celui qui hesite n'agit pas, celui qui n'agit pas echoue. La forme VIII (imtara) indique un doute reflexif — le douteur se fait douter lui-meme, il entretient son propre doute. Le khalifa doit rompre ce cercle en revenant a la source de la verite : son Seigneur."
            },
            "Amertume": {
              status: "nul",
              senses: ["etre amer", "amertume"],
              proof_ctx: "Le sens d'amertume est un sens physique de m-r-r — le gout amer. Le contexte est le doute face a la verite, pas une experience gustative ou emotionnelle d'amertume."
            },
            "Torsion/Force": {
              status: "nul",
              senses: ["tordre une corde", "etre fort et resistant"],
              proof_ctx: "Le sens de torsion est un sens physique de m-r-r — tordre des fibres pour faire une corde. Le contexte est le doute, pas un acte physique de torsion."
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

  const verseIds = [154];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 147 ===\n');
  await processVerse(147);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V147 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
