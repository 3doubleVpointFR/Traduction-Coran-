const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 131, 132, 133
// V131: verse_id=138, analysis_id=493
// V132: verse_id=139, analysis_id=500
// V133: verse_id=140, analysis_id=501
// =====================================================

const verseData = {
  // =====================================================
  // VERSET 131 — 6 mots de contenu
  // "Quand son Seigneur lui dit : soumets-toi, il dit :
  //  je me suis soumis au Seigneur des mondes."
  // =====================================================
  131: {
    verse_id: 138,
    analysis_id: 493,
    translation_arab: "Quand son Seigneur lui dit : soumets-toi, il dit : je me suis soumis au Seigneur des mondes.",
    full_translation: "Quand son Seigneur lui dit : soumets-toi, il dit : je me suis soumis au Seigneur des mondes.",
    translation_explanation: `§DEMARCHE§
Le verset rapporte un dialogue entre Dieu et Abraham. Le premier verbe **qala** est un accompli 3MS de la racine q-w-l. Le Lane's donne : dire, parler, enoncer. L'accompli indique que l'acte de parole est acheve — Dieu a dit. Le pronom suffixe dans **lahu** (a lui) indique le destinataire : Abraham. Le nom **rabbuhu** est un nom masculin singulier de la racine r-b-b avec pronom suffixe 3MS. Le Lane's donne : seigneur, maitre, celui qui eleve et entretient. Le possessif « son Seigneur » cree une relation personnelle — ce n'est pas un seigneur quelconque mais CELUI qui eleve et entretient Abraham. Le verbe **aslim** est un imperatif 2MS de la forme IV de la racine s-l-m. Le Lane's donne : se soumettre, entrer dans la paix, se livrer entierement. La forme IV (af'ala) est causative — aslama c'est faire entrer dans la paix, se livrer completement. L'imperatif est un ordre direct et personnel. Le deuxieme **qala** reprend le meme verbe — Abraham repond. Le verbe **aslamtu** est un accompli 1MS de la forme IV de la racine s-l-m. Le pronom suffixe « tu » (je) indique qu'Abraham est le locuteur. L'accompli marque que la soumission est un acte acheve et immediat — il ne dit pas « je me soumettrai » mais « je me suis soumis ». La reponse est instantanee. La preposition **li** (pour, au) + **rabbi** (Seigneur de) + **al-'alamina** (les mondes) elargit la portee : Abraham ne se soumet pas au Seigneur d'un peuple mais au Seigneur des mondes entiers. Le nom **al-'alamina** est un pluriel masculin defini de la racine '-l-m. Le Lane's donne : monde, ensemble des etres crees. Le pluriel (les mondes) marque l'universalite — il y a plusieurs mondes et Dieu est le Seigneur de tous.

§JUSTIFICATION§
**dit** — Le sens retenu est « dire ». Le verbe qala est l'acte de parole. Il apparait deux fois — une fois pour Dieu et une fois pour Abraham. La repetition structure le dialogue : ordre → reponse.

**son Seigneur** — Le sens retenu est « seigneur ». Le mot rabb designe celui qui possede, eleve et entretient. Le possessif « son » cree une relation directe et personnelle. L'alternative « augmenter » est ecartee car le mot est un nom de relation, pas un verbe de croissance.

**soumets-toi** — Le sens retenu est « soumission ». Le verbe aslim a la forme IV signifie se livrer entierement. L'alternative « paix » est ecartee car l'imperatif appelle un acte de soumission, pas un etat de paix passive. Les deux sens sont lies — se soumettre c'est entrer dans la paix — mais le contexte d'un ordre divin privilegie l'acte volontaire de soumission.

**je me suis soumis** — Le sens retenu est « soumission ». Le verbe aslamtu est l'accompli qui marque l'achevement immediat. Abraham se soumet instantanement, sans hesitation ni condition.

**les mondes** — Le sens retenu est « les mondes ». Le mot al-'alamin designe l'ensemble des etres crees. L'alternative « savoir » est ecartee car le mot est un nom pluriel defini designant les mondes, pas un verbe de connaissance. La racine '-l-m porte les deux sens mais le contexte et la forme grammaticale (pluriel masculin en -in) designent les mondes.

§CRITIQUE§
La traduction d'Hamidullah donne « Soumets-toi » et « Je me soumets au Seigneur de l'Univers ». Notre traduction donne « soumets-toi » et « je me suis soumis au Seigneur des mondes ». La difference principale est le temps : Hamidullah utilise le present « je me soumets » la ou nous donnons l'accompli « je me suis soumis ». L'accompli arabe marque un acte acheve — Abraham a deja accompli sa soumission au moment ou il parle. Le present donnerait l'impression d'un processus en cours, alors que le texte insiste sur l'immediatete et la totalite de la reponse. L'autre difference est « Univers » vs « mondes ». Le pluriel al-'alamin designe plusieurs mondes, pas un univers unique. « Les mondes » est plus fidele au pluriel arabe.`,
    segments: [
      { fr: "quand", phon: "idh", arabic: "\u0625\u0650\u0630\u0652", is_particle: true, position: 0 },
      { fr: "dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "a lui", phon: "lahu", arabic: "\u0644\u064e\u0647\u064f\u06e5", is_particle: true, position: 2 },
      { fr: "son Seigneur", pos: "nom", phon: "rabbuhu", arabic: "\u0631\u064e\u0628\u0651\u064f\u0647\u064f\u06e5\u0653", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 3 },
      { fr: "soumets-toi", pos: "verbe", phon: "aslim", arabic: "\u0623\u064e\u0633\u0652\u0644\u0650\u0645\u0652", word_key: "slm", is_particle: false, sense_retenu: "soumission", position: 4 },
      { fr: "dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 5 },
      { fr: "je me suis soumis", pos: "verbe", phon: "aslamtu", arabic: "\u0623\u064e\u0633\u0652\u0644\u064e\u0645\u0652\u062a\u064f", word_key: "slm", is_particle: false, sense_retenu: "soumission", position: 6 },
      { fr: "au Seigneur de", phon: "li-rabbi", arabic: "\u0644\u0650\u0631\u064e\u0628\u0651\u0650", is_particle: true, position: 7 },
      { fr: "les mondes", pos: "nom", phon: "al-'alamina", arabic: "\u0671\u0644\u0652\u0639\u064e\u0640\u06e8\u0644\u064e\u0645\u0650\u064a\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "les mondes", position: 8 }
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
              proof_ctx: "Le verbe qala est un accompli 3MS de la racine q-w-l. Le Lane's donne : dire, parler, enoncer une parole. Le dire est un acte exterieur et directionnel — la parole sort du locuteur et atteint l'auditeur. Ici qala introduit la parole de Dieu adressee a Abraham. L'accompli marque que l'acte de parole est acheve — Dieu a dit. La premiere occurrence ouvre le dialogue divin, la seconde introduit la reponse d'Abraham. La repetition du meme verbe cree un parallelisme : l'ordre divin et la reponse humaine ont la meme forme verbale.",
              axe1_verset: "Le verbe qala apparait deux fois dans le verset, structurant le dialogue. La premiere occurrence introduit l'ordre de Dieu : « son Seigneur lui dit ». La seconde introduit la reponse d'Abraham : « il dit ». Le champ lexical du verset tourne autour de la parole et de la soumission. Le dire est le vehicule de l'ordre et de la reponse — sans parole il n'y a ni commandement ni obeissance. Le parallelisme des deux qala montre l'adequation parfaite entre l'ordre et la reponse.",
              axe2_voisins: "Le verset 130 parlait de celui qui se detourne de la voie d'Abraham — celui qui s'avilit. Le verset 131 montre pourquoi Abraham est un modele : quand Dieu lui dit de se soumettre, il se soumet immediatement. Le verset 132 montrera qu'Abraham transmet cette parole a ses fils. Le dire de Dieu en 131 devient le dire d'Abraham en 132 — la parole se transmet de generation en generation.",
              axe3_sourate: "La racine q-w-l est une des plus frequentes de la sourate al-Baqarah. Les dialogues entre Dieu et Ses serviteurs (2:30 avec les anges, 2:124 avec Abraham) structurent la sourate. Le verset 131 s'inscrit dans cette serie de dialogues ou la parole divine provoque une reponse humaine. La sourate montre que la relation entre Dieu et Ses serviteurs passe par la parole.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. Le schema « qala rabbuhu... qala... » (son Seigneur dit... il dit...) est un motif recurrent du Coran pour rapporter les dialogues entre Dieu et Ses prophetes. En 2:260, Abraham dit a Dieu et Dieu lui repond. Le Coran est un livre de paroles — paroles de Dieu, paroles des prophetes, paroles des hommes.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'outil premier de la mission. Dieu parle et le khalifa repond par la parole et par l'action. Le dialogue entre Dieu et Abraham montre le modele de la mission : ecouter la parole divine et y repondre immediatement. Le khalifa doit etre attentif a la parole de son Seigneur."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion est un etat interieur. Le contexte est un acte de parole exterieur — Dieu dit et Abraham dit. Le verbe qala designe l'acte de parler, pas l'acte de penser."
            }
          }
        }
      },
      // rbb pos=3
      {
        word_key: "rbb", position: 3, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le mot rabbuhu est un nom masculin singulier de la racine r-b-b avec pronom suffixe 3MS. Le Lane's donne : seigneur, maitre, celui qui possede, eleve et entretient. Le rabb est celui qui prend en charge completement — il possede, nourrit, eleve et gouverne. Le possessif « hu » (son) cree une relation personnelle entre Dieu et Abraham. La seigneurie est une relation bidirectionnelle permanente : le seigneur gouverne et le serviteur se soumet. Le verset montre cette relation en acte : le Seigneur ordonne et Abraham obeit.",
              axe1_verset: "Le mot rabbuhu est le sujet du premier qala — c'est le Seigneur qui parle en premier. Le possessif « son Seigneur » personalise la relation — ce n'est pas un maitre distant mais le Seigneur d'Abraham en particulier. Le champ lexical du verset (seigneur, soumets-toi, je me suis soumis, Seigneur des mondes) tourne autour de la relation seigneuriale. Le verset commence par « son Seigneur » (relation personnelle) et finit par « Seigneur des mondes » (relation universelle). La soumission d'Abraham passe du personnel a l'universel.",
              axe2_voisins: "Le verset 124 rapportait : « quand son Seigneur eprouva Abraham ». Le verset 131 reprend la meme structure « son Seigneur lui dit ». Les versets 124-131 montrent la relation entre Dieu et Abraham sous differents angles : epreuve, ordre, soumission. Le verset 131 est le point culminant de cette relation — l'ordre de soumission totale.",
              axe3_sourate: "La racine r-b-b apparait frequemment dans la sourate al-Baqarah. En 2:124, « son Seigneur l'eprouva ». En 2:126, « mon Seigneur, fais de cette cite un lieu sur ». En 2:127, « notre Seigneur, accepte de nous ». La sourate montre la progression de la relation seigneuriale avec Abraham — epreuve, invocation, soumission.",
              axe4_coherence: "La racine r-b-b apparait environ 970 fois dans le Coran. L'expression « rabbuhu » (son Seigneur) avec le possessif personnel marque une relation intime et directe. En 53:18, « il vit parmi les grands signes de son Seigneur ». Le Coran insiste sur le fait que la seigneurie de Dieu est a la fois universelle (Seigneur des mondes) et personnelle (son Seigneur).",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est le mandant de la mission. La relation personnelle (son Seigneur) montre que chaque khalifa a une relation directe avec Dieu. La soumission n'est pas une contrainte exterieure mais une reponse a une relation personnelle. Le khalifa reconnait son Seigneur et se soumet a Lui."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper"],
              proof_ctx: "Le sens de croissance est le sens physique premier de r-b-b — faire grandir, nourrir, developper. Le mot rabb porte etymologiquement cette idee : le seigneur est celui qui fait grandir. Le verset utilise rabb comme titre de Dieu — le sens de seigneur domine. Mais le sens de croissance est present en arriere-plan : le Seigneur est celui qui fait grandir Abraham dans sa mission. La forme IV aslim (fais entrer dans la paix) repond au sens de rabb (fais grandir) — la soumission est la voie de la croissance spirituelle.",
              axe1_verset: "Le mot rabbuhu pourrait porter le sens de « celui qui fait grandir ». Le Seigneur qui ordonne la soumission est aussi celui qui fait grandir Abraham. L'ordre de se soumettre est un acte de croissance — se soumettre c'est grandir. Le sens de croissance eclaire le verset sous un angle different : l'ordre n'est pas une contrainte mais une nourriture.",
              axe2_voisins: "Le verset 124 montrait Dieu eprouvant Abraham. L'epreuve est un outil de croissance. Le verset 131 montre Dieu ordonnant la soumission — un autre outil de croissance. La progression epreuve → soumission est une progression de croissance spirituelle.",
              axe3_sourate: "La sourate al-Baqarah utilise rabb dans les deux sens. En 1:2, « Seigneur des mondes » — le sens de seigneurie. En 2:276, « Dieu fait croitre les aumones » — le sens de croissance. Les deux sens coexistent dans la sourate.",
              axe4_coherence: "Le Coran lie souvent la seigneurie a la croissance. En 26:78, « c'est Lui qui m'a cree et qui me guide ». Le rabb est celui qui cree, nourrit, fait grandir et guide. La croissance est inseparable de la seigneurie.",
              axe5_frequence: "Pour la mission du khalifa, la croissance sous la seigneurie de Dieu est le chemin de la mission. Le khalifa grandit en se soumettant — la soumission n'est pas un obstacle a la croissance mais son moteur."
            },
            "Éducation/Accompagnement": {
              status: "nul",
              senses: ["elever un enfant", "eduquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education est un sous-ensemble de la seigneurie. Le contexte est un ordre divin, pas un acte pedagogique specifique."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette", "interet"],
              proof_ctx: "Le sens financier est hors sujet — le mot rabb designe Dieu, pas une transaction commerciale."
            }
          }
        }
      },
      // slm pos=4 (aslim - imperatif)
      {
        word_key: "slm", position: 4, sense_chosen: "soumission",
        analysis_axes: {
          sense_chosen: "soumission",
          concept_chosen: "Paix/Soumission",
          concepts: {
            "Paix/Soumission": {
              status: "retenu",
              senses: ["paix", "soumission", "islam", "salut"],
              proof_ctx: "Le verbe aslim est un imperatif 2MS de la forme IV de la racine s-l-m. Le Lane's donne : se soumettre, entrer dans la paix, se livrer entierement a Dieu. La forme IV (af'ala) est causative — aslama c'est faire entrer dans la paix en se livrant completement. L'imperatif est un ordre direct et personnel adresse par Dieu a Abraham. Le sens de soumission et le sens de paix sont inseparables dans cette racine : se soumettre a Dieu c'est entrer dans la paix. Le verbe est a la forme IV, ce qui marque l'intensite et la totalite de l'acte. Ce n'est pas une paix passive — c'est un acte volontaire et total de se livrer a Dieu.",
              axe1_verset: "Le verbe aslim est le coeur du verset — c'est l'ordre divin autour duquel tout s'articule. Le Seigneur dit une seule chose : soumets-toi. La reponse d'Abraham reprend le meme verbe a l'accompli (aslamtu) — je me suis soumis. Le champ lexical (Seigneur, soumets-toi, je me suis soumis, Seigneur des mondes) tourne entierement autour de la soumission. Le verset est une equation parfaite : ordre de soumission = soumission immediate.",
              axe2_voisins: "Le verset 128 rapportait l'invocation d'Abraham : « fais de nous des soumis (muslimayni) a Toi ». Le verset 131 montre que cette soumission commence par Abraham lui-meme — avant de demander pour ses descendants, il se soumet d'abord. Le verset 132 montrera qu'il transmet cette soumission a ses fils. La progression est : invocation → soumission personnelle → transmission aux fils.",
              axe3_sourate: "La racine s-l-m est une racine structurante de la sourate al-Baqarah. En 2:112, « celui qui soumet son visage a Dieu ». En 2:128, « fais de nous des soumis a Toi ». En 2:131, l'ordre de se soumettre. En 2:132, « ne mourez qu'en etant soumis ». En 2:133, « nous Lui sommes soumis ». Les versets 131-133 forment un bloc sur la soumission — de l'ordre a la transmission a la profession de foi des fils.",
              axe4_coherence: "La racine s-l-m apparait environ 140 fois dans le Coran. Le verbe aslama (se soumettre) donne le nom islam (soumission) et muslim (celui qui se soumet). En 3:83, « c'est la soumission a Dieu qu'ils desirent comme religion ? ». Le Coran presente la soumission comme la religion de tous les prophetes — Abraham est le premier a se soumettre dans ce verset.",
              axe5_frequence: "Pour la mission du khalifa, la soumission est l'acte fondateur de la mission. Le khalifa ne peut accomplir sa mission sans se soumettre d'abord. La soumission d'Abraham est le modele — immediate, totale, sans condition. Le khalifa doit repondre a l'ordre de Dieu comme Abraham : je me suis soumis."
            },
            "Intégrité/Santé": {
              status: "nul",
              senses: ["sain et sauf"],
              proof_ctx: "Le sens d'integrite physique est un sens derive de s-l-m. Le contexte est un ordre de soumission a Dieu, pas un souhait de sante."
            }
          }
        }
      },
      // slm pos=6 (aslamtu - accompli)
      {
        word_key: "slm", position: 6, sense_chosen: "soumission",
        analysis_axes: {
          sense_chosen: "soumission",
          concept_chosen: "Paix/Soumission",
          concepts: {
            "Paix/Soumission": {
              status: "retenu",
              senses: ["paix", "soumission", "islam", "salut"],
              proof_ctx: "Le verbe aslamtu est un accompli 1MS de la forme IV de la racine s-l-m. Le Lane's donne : se soumettre, entrer dans la paix, se livrer entierement. L'accompli 1MS marque que l'acte est acheve et que le locuteur (Abraham) est l'agent. La reponse d'Abraham est a l'accompli — il ne dit pas « je me soumettrai » mais « je me suis soumis ». L'immediatete de l'accompli montre qu'il n'y a pas de delai entre l'ordre et la soumission. La preposition li (pour, au) + rabbi al-'alamin (Seigneur des mondes) precise le destinataire : la soumission est dirigee vers le Seigneur des mondes, pas vers un seigneur local ou partiel.",
              axe1_verset: "Le verbe aslamtu repond directement a l'imperatif aslim. L'ordre (soumets-toi) trouve sa reponse immediate (je me suis soumis). Le passage de l'imperatif a l'accompli montre la rapidite de la soumission — pas de deliberation, pas de condition. Abraham ajoute « au Seigneur des mondes » — il elargit la portee. L'ordre etait personnel (son Seigneur lui dit), la reponse est universelle (au Seigneur des mondes). Abraham se soumet non seulement a son Seigneur mais au Seigneur de tous.",
              axe2_voisins: "Le verset 130 posait la question : qui se detourne de la voie d'Abraham ? Le verset 131 montre en quoi consiste cette voie : la soumission immediate et totale. Le verset 132 montrera qu'Abraham transmet cette soumission. Se detourner de la voie d'Abraham (v130) c'est refuser la soumission que montre le v131.",
              axe3_sourate: "La racine s-l-m traverse les versets 128-133 comme un fil conducteur. En 128, Abraham demande la soumission pour lui et ses descendants. En 131, il se soumet. En 132, il enjoint la soumission a ses fils. En 133, les fils professent leur soumission. La sourate construit une chaine de soumission — d'Abraham a ses descendants.",
              axe4_coherence: "Le verbe aslamtu (je me suis soumis) est un acte de profession de foi. En 40:66, « il m'a ete ordonne de me soumettre au Seigneur des mondes ». En 6:14, « dis : j'ai recu l'ordre d'etre le premier a se soumettre ». Le Coran lie la soumission a l'ordre divin — la soumission est toujours une reponse a un commandement.",
              axe5_frequence: "Pour la mission du khalifa, la reponse d'Abraham est le modele de la mission : immediat, total, universel. Le khalifa ne se soumet pas a un seigneur partiel mais au Seigneur des mondes. La portee de la soumission determine la portee de la mission."
            }
          }
        }
      },
      // elm pos=8
      {
        word_key: "elm", position: 8, sense_chosen: "les mondes",
        analysis_axes: {
          sense_chosen: "les mondes",
          concept_chosen: "Monde/Création",
          concepts: {
            "Monde/Création": {
              status: "retenu",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le mot al-'alamina est un pluriel masculin defini au genitif de la racine '-l-m. Le Lane's donne : monde, ensemble des etres crees, totalite de ce qui existe. Le pluriel (les mondes) indique une multiplicite — il y a plusieurs mondes (le monde des humains, des djinns, des anges, des animaux). L'article defini (al-) marque que ce sont LES mondes connus et reconnus. Le genitif est regi par la preposition li + rabb (au Seigneur de) — les mondes sont ce que le Seigneur possede et gouverne. Le Lane's lie etymologiquement 'alam (monde) a la racine '-l-m (marquer, connaitre) : le monde est le signe par lequel on reconnait le Createur.",
              axe1_verset: "Le mot al-'alamin ferme le verset en elargissant la portee. Abraham ne dit pas « je me suis soumis a mon Seigneur » mais « au Seigneur des mondes ». Le passage du possessif personnel (son Seigneur) au titre universel (Seigneur des mondes) montre que la soumission d'Abraham n'est pas un acte prive mais une reconnaissance de la seigneurie universelle de Dieu. Le champ lexical (Seigneur, soumission, mondes) construit une vision cosmique de la soumission.",
              axe2_voisins: "Le verset 131 elargit la perspective ouverte en 2:124 ou Abraham etait etabli comme guide. Un guide ne peut l'etre que s'il reconnait le Seigneur des mondes — pas seulement son propre seigneur. Le verset 132 montrera que cette reconnaissance universelle est transmise aux fils.",
              axe3_sourate: "L'expression « rabb al-'alamin » (Seigneur des mondes) est la meme que dans la Fatiha (1:2). La sourate al-Baqarah reprend ce titre fondamental pour montrer qu'Abraham reconnait le meme Dieu que celui invoque dans la priere. Le lien entre la Fatiha et le verset 131 montre une continuite — la priere quotidienne reprend la profession de foi d'Abraham.",
              axe4_coherence: "L'expression « rabb al-'alamin » apparait environ 42 fois dans le Coran. En 7:54, « Allah, votre Seigneur, qui a cree les cieux et la terre ». En 26:16, Moussa dit « je suis le messager du Seigneur des mondes ». Le titre designe l'universalite de la seigneurie divine — au-dela de tout peuple, de toute epoque, de tout lieu.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur des mondes est la reference ultime. La mission n'est pas locale ou tribale — elle est universelle. Le khalifa se soumet au Seigneur de tous les mondes, pas a un seigneur partiel. Cette universalite definit l'envergure de la mission."
            },
            "Savoir/Connaissance": {
              status: "nul",
              senses: ["savoir", "connaitre", "science"],
              proof_ctx: "Le mot al-'alamin est un nom pluriel designant les mondes, pas un verbe ou un nom d'action de connaissance. La forme grammaticale (pluriel masculin en -in defini) designe les mondes crees."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "repere"],
              proof_ctx: "Le sens de signe est un lien etymologique mais le mot est ici un nom defini pluriel designant les mondes, pas un signe ou une marque."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 132 — 13 mots de contenu
  // "Et recommanda cela Abraham a ses fils et Jacob :
  //  o mes fils, en verite Dieu a choisi pour vous la
  //  religion, donc ne mourez pas autrement qu'en soumis."
  // =====================================================
  132: {
    verse_id: 139,
    analysis_id: 500,
    translation_arab: "Et recommanda cela Abraham a ses fils et Jacob : o mes fils, en verite Dieu a choisi pour vous la religion, donc ne mourez pas autrement qu'en soumis.",
    full_translation: "Et recommanda cela Abraham a ses fils, ainsi que Jacob : o mes fils, en verite Dieu a choisi pour vous la religion, donc ne mourez pas autrement qu'en soumis.",
    translation_explanation: `§DEMARCHE§
Le verbe **wassa** est un accompli 3MS de la forme II de la racine w-s-y. Le Lane's donne : recommander, enjoindre, charger d'une mission, faire un testament. La forme II (fa''ala) intensifie l'action — recommander avec insistance. L'accompli indique que l'acte est acheve — Abraham a recommande. Le pronom **bi-ha** (avec cela, de cela) renvoie a la soumission mentionnee au verset precedent — c'est la soumission qu'Abraham recommande. Le nom propre **Ibrahimu** est le sujet — Abraham est celui qui recommande. Le mot **banihi** est un pluriel masculin de la racine b-n-y avec pronom suffixe 3MS. Le Lane's donne : fils, enfants, descendance. Les fils d'Abraham sont les destinataires de la recommandation. Le nom propre **Ya'qubu** est coordonne par « wa » (et) — Jacob aussi a fait la meme recommandation a ses fils. Le vocatif **ya baniyya** (o mes fils) ouvre la parole directe d'Abraham. Le verbe **istafa** est un accompli 3MS de la forme VIII de la racine s-t-f. Le Lane's donne : choisir, elire, selectionner le meilleur. La forme VIII (if'tala) est reflexive intensive — Dieu a choisi par Lui-meme, de Sa propre initiative. L'accompli marque que le choix est acheve et definitif. Le nom **ad-dina** est un nom masculin singulier defini accusatif de la racine d-y-n. Le Lane's donne : religion, systeme de croyances, pratique, habitude, retribution. L'article defini (al-) marque que c'est LA religion — pas n'importe quelle religion mais la religion choisie par Dieu. Le verbe **tamutunna** est un inaccompli 2MP energetique de la racine m-w-t avec la negation **la** (ne pas). Le Lane's donne : mourir, cesser de vivre. L'energetique (nun de l'emphase) renforce l'interdiction — c'est un ordre ferme et categorique. La construction « la tamutunna illa wa antum muslimuna » signifie : ne mourez surtout pas si ce n'est en etant soumis. Le participe actif **muslimuna** est de la forme IV de la racine s-l-m. Le Lane's donne : soumis, celui qui se soumet. C'est l'etat dans lequel ils doivent mourir — soumis a Dieu.

§JUSTIFICATION§
**recommanda** — Le sens retenu est « recommander ». Le verbe wassa a la forme II signifie enjoindre avec insistance. L'alternative « testament » est ecartee car le contexte n'est pas juridique — c'est une recommandation spirituelle, pas un acte successoral. Le mot « recommander » est plus naturel en francais pour une injonction paternelle.

**cela** — Le pronom « ha » (elle/cela) renvoie a la soumission (al-milla ou l'islam) du verset precedent. C'est la soumission qu'Abraham recommande.

**ses fils** — Le sens retenu est « fils ». Le mot banihi designe les fils d'Abraham. L'alternative « construire » est ecartee car le mot est un nom pluriel avec possessif, pas un verbe.

**Jacob** — Le nom propre Ya'qub est coordonne avec Abraham. Jacob aussi a recommande la meme chose a ses fils. L'alternative « talon » est ecartee car le mot est un nom propre.

**Dieu** — Le nom Allah est le sujet du verbe istafa (a choisi). C'est Dieu qui a choisi la religion pour eux.

**a choisi** — Le sens retenu est « choisir ». Le verbe istafa a la forme VIII signifie selectionner le meilleur. L'alternative « ranger en rang » est ecartee car la forme VIII de s-t-f porte le sens d'election, pas d'alignement physique.

**la religion** — Le sens retenu est « religion ». Le mot ad-din designe le systeme de croyances et de pratiques. L'article defini marque que c'est LA religion specifique, pas une religion quelconque. L'alternative « dette » est ecartee car le contexte est spirituel, pas financier.

**ne mourez pas** — Le sens retenu est « mourir ». Le verbe tamutunna est un inaccompli energetique avec negation. L'energetique renforce l'interdiction. L'alternative « etre immobile » est ecartee car le contexte parle de la mort au sens propre.

**soumis** — Le sens retenu est « soumission ». Le participe actif muslimuna designe ceux qui se soumettent a Dieu. Meme racine et meme sens qu'au verset 131.

§CRITIQUE§
Hamidullah donne « ne mourez point autrement qu'en Soumis ». Notre traduction donne « ne mourez pas autrement qu'en soumis ». La difference est stylistique — « ne mourez point » est un francais plus soutenu, « ne mourez pas » est plus courant. Sur « istafa lakum al-din », Hamidullah donne « Allah vous a choisi la religion ». Notre traduction est identique. Le sens est le meme : c'est Dieu qui a fait le choix, pas les hommes.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "recommanda", pos: "verbe", phon: "wassa", arabic: "\u0648\u064e\u0635\u0651\u064e\u0649\u0670", word_key: "wsy", is_particle: false, sense_retenu: "recommander", position: 1 },
      { fr: "avec cela", phon: "bi-ha", arabic: "\u0628\u0650\u0647\u064e\u0622", is_particle: true, position: 2 },
      { fr: "Abraham", pos: "nom", phon: "ibrahimu", arabic: "\u0625\u0650\u0628\u0652\u0631\u064e\u0670\u0647\u0650\u06e8\u0645\u064f", word_key: "abrh", is_particle: false, sense_retenu: "Abraham", position: 3 },
      { fr: "ses fils", pos: "nom", phon: "banihi", arabic: "\u0628\u064e\u0646\u0650\u064a\u0647\u0650", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 5 },
      { fr: "Jacob", pos: "nom", phon: "ya'qubu", arabic: "\u064a\u064e\u0639\u0652\u0642\u064f\u0648\u0628\u064f", word_key: "eqb", is_particle: false, sense_retenu: "Jacob", position: 6 },
      { fr: "o mes fils", pos: "nom", phon: "ya baniyya", arabic: "\u064a\u064e\u0640\u06e8\u0628\u064e\u0646\u0650\u0649\u0651\u064e", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 7 },
      { fr: "en verite", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 8 },
      { fr: "Dieu", pos: "nom", phon: "allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 9 },
      { fr: "a choisi", pos: "verbe", phon: "istafa", arabic: "\u0671\u0635\u0652\u0637\u064e\u0641\u064e\u0649\u0670", word_key: "stf", is_particle: false, sense_retenu: "choisir", position: 10 },
      { fr: "certainement", phon: "la", arabic: "\u0644\u064e", is_particle: true, position: 11 },
      { fr: "pour vous", pos: "pronom", phon: "kumu", arabic: "\u0643\u064f\u0645\u064f", word_key: "ans", is_particle: false, sense_retenu: "pour vous", position: 12 },
      { fr: "la religion", pos: "nom", phon: "ad-dina", arabic: "\u0671\u0644\u062f\u0651\u0650\u064a\u0646\u064e", word_key: "dyn", is_particle: false, sense_retenu: "religion", position: 13 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 14 },
      { fr: "ne pas", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 15 },
      { fr: "mourez", pos: "verbe", phon: "tamutunna", arabic: "\u062a\u064e\u0645\u064f\u0648\u062a\u064f\u0646\u0651\u064e", word_key: "mwt", is_particle: false, sense_retenu: "mourir", position: 16 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 17 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 18 },
      { fr: "vous", pos: "pronom", phon: "antum", arabic: "\u0623\u064e\u0646\u062a\u064f\u0645", word_key: "ant", is_particle: false, sense_retenu: "vous", position: 19 },
      { fr: "soumis", pos: "participe_actif", phon: "muslimuna", arabic: "\u0645\u0651\u064f\u0633\u0652\u0644\u0650\u0645\u064f\u0648\u0646\u064e", word_key: "slm", is_particle: false, sense_retenu: "soumission", position: 20 }
    ],
    words: [
      // wsy pos=1
      {
        word_key: "wsy", position: 1, sense_chosen: "recommander",
        analysis_axes: {
          sense_chosen: "recommander",
          concept_chosen: "Recommandation/Injonction",
          concepts: {
            "Recommandation/Injonction": {
              status: "retenu",
              senses: ["recommander", "enjoindre", "faire un testament", "charger quelqu'un d'une mission"],
              proof_ctx: "Le verbe wassa est un accompli 3MS de la forme II de la racine w-s-y. Le Lane's donne : recommander instamment, enjoindre, charger d'une mission, faire un testament. La forme II (fa''ala) intensifie l'action — la recommandation est appuyee et solennelle. L'accompli indique que l'acte est acheve. La preposition bi (avec) + ha (elle/cela) precise l'objet de la recommandation : la soumission mentionnee au verset precedent. Le sens de testament est un usage juridique de w-s-y — ici le contexte est une transmission spirituelle entre un pere et ses fils, pas un acte juridique.",
              axe1_verset: "Le verbe wassa ouvre le verset et pose le theme : la transmission. Abraham a recommande quelque chose (la soumission) a ses fils. Le champ lexical du verset (recommander, fils, Dieu, choisir, religion, mourir, soumis) tourne autour de la transmission d'un heritage spirituel. La recommandation est l'acte qui lie les generations — le pere transmet au fils ce qui a de la valeur. La soumission du verset 131 n'est pas restee un acte personnel — elle est devenue une injonction familiale.",
              axe2_voisins: "Le verset 131 montrait la soumission d'Abraham a Dieu. Le verset 132 montre qu'Abraham transmet cette soumission a ses fils. Le verset 133 montrera les fils qui professent cette soumission. La progression est claire : soumission personnelle → transmission → profession de foi des descendants. La recommandation est le pont entre les generations.",
              axe3_sourate: "La racine w-s-y apparait dans la sourate al-Baqarah dans le contexte des testaments (2:180-182). Mais en 2:132, la recommandation est spirituelle — Abraham transmet la religion, pas des biens materiels. La sourate utilise la meme racine pour les deux types de transmission : materielle et spirituelle, montrant que la transmission spirituelle est aussi importante que la materielle.",
              axe4_coherence: "La racine w-s-y apparait environ 32 fois dans le Coran. En 4:11, les prescriptions successorales. En 31:14, « nous avons recommande a l'homme ses parents ». En 42:13, « il vous a prescrit en matiere de religion ce qu'il avait recommande a Noe ». Le Coran montre que la recommandation divine traverse les epoques — de Noe a Abraham a Muhammad.",
              axe5_frequence: "Pour la mission du khalifa, la recommandation est un acte de transmission de la mission. Le khalifa ne garde pas la verite pour lui — il la transmet a ses fils et a sa communaute. La mission d'Abraham inclut la transmission : il n'est pas seulement soumis, il transmet la soumission."
            },
            "Liaison/Connexion": {
              status: "nul",
              senses: ["lier ensemble", "terre fertile continue"],
              proof_ctx: "Le sens de liaison physique est un sens concret de w-s-y. Le contexte est une transmission spirituelle entre generations, pas une liaison materielle."
            }
          }
        }
      },
      // abrh pos=3
      {
        word_key: "abrh", position: 3, sense_chosen: "Abraham",
        analysis_axes: {
          sense_chosen: "Abraham",
          concept_chosen: "Nom propre",
          concepts: {
            "Nom propre": {
              status: "retenu",
              senses: ["Abraham (variante dialectale)"],
              proof_ctx: "Le mot Ibrahimu est le nom propre du prophete Abraham au nominatif. C'est un nom propre permanent et inchangeable qui designe une personne historique precise. Le nominatif indique qu'Abraham est le sujet du verbe wassa (recommanda). Abraham est l'agent de la recommandation — c'est lui qui transmet la soumission a ses fils.",
              axe1_verset: "Le nom Ibrahim est le sujet du verbe wassa — c'est Abraham qui recommande. Le verset montre Abraham dans son role de pere et de transmetteur. Il n'est pas seulement le soumis du verset 131 — il est aussi celui qui transmet la soumission. Le champ lexical (recommander, fils, Jacob) place Abraham au centre d'une chaine familiale de transmission.",
              axe2_voisins: "Le verset 124 etablissait Abraham comme guide (imam). Le verset 130 posait la question de qui se detourne de la voie d'Abraham. Le verset 131 montrait sa soumission. Le verset 132 montre sa transmission. Abraham est a la fois le modele (v131) et le transmetteur (v132). Sa voie est une voie de soumission transmise.",
              axe3_sourate: "Abraham est un personnage central de la sourate al-Baqarah. Les versets 124-141 forment un bloc abrahamique. Abraham recoit des epreuves (124), batit la Ka'ba (127), invoque Dieu (128), se soumet (131), recommande (132). La sourate presente Abraham comme le fondateur de la voie de la soumission.",
              axe4_coherence: "Le nom Ibrahim apparait environ 69 fois dans le Coran. Il est qualifie de hanif (droit, 2:135), de muslim (soumis, 3:67), de khalil Allah (ami intime de Dieu, 4:125). Le Coran presente Abraham comme le patriarche de la soumission a Dieu — le premier des soumis au sens plein du terme.",
              axe5_frequence: "Pour la mission du khalifa, Abraham est l'archetype du khalifa accompli. Il a recu l'ordre, s'est soumis, et a transmis. Le khalifa doit suivre ce triple mouvement : recevoir, se soumettre, transmettre."
            }
          }
        }
      },
      // bny pos=4
      {
        word_key: "bny", position: 4, sense_chosen: "fils",
        analysis_axes: {
          sense_chosen: "fils",
          concept_chosen: "Construction/Édification",
          concepts: {
            "Construction/Édification": {
              status: "retenu",
              senses: ["construire", "batir", "edifice", "fils", "enfant", "descendance"],
              proof_ctx: "Le mot banihi est un pluriel masculin de la racine b-n-y avec pronom suffixe 3MS. Le Lane's donne : fils, enfants, descendance. Le sens premier de b-n-y est construire, batir — le fils (ibn) est etymologiquement « celui qui construit » ou « celui qui est bati ». Le pluriel (banihi) avec le possessif (ses) designe les fils d'Abraham. Dans le contexte, les fils sont les destinataires de la recommandation — Abraham construit sa descendance en leur transmettant la soumission.",
              axe1_verset: "Le mot banihi designe les destinataires de la recommandation — les fils d'Abraham. Le champ lexical (recommander, fils, religion, mourir, soumis) montre que la recommandation vise les fils comme futurs porteurs de la soumission. Le mot fils apparait deux fois : banihi (ses fils) et ya baniyya (o mes fils). La repetition souligne que les fils sont au coeur du verset — c'est a eux que la transmission est adressee.",
              axe2_voisins: "Le verset 128 mentionnait « notre descendance » dans l'invocation d'Abraham. Le verset 132 montre Abraham s'adressant directement a ses fils. Le verset 133 montrera Jacob s'adressant a ses fils. Les versets 128-133 tracent la ligne de la transmission : invocation pour la descendance → recommandation aux fils → profession de foi des fils.",
              axe3_sourate: "La racine b-n-y apparait dans la sourate al-Baqarah dans plusieurs contextes. En 2:127, Abraham et Ismael elevent les fondations de la Maison (yarf'u al-qawa'ida). En 2:132, Abraham recommande a ses fils. La sourate lie la construction physique (la Ka'ba) et la construction spirituelle (la transmission de la soumission). Les fils sont le prolongement de la construction — le batiment et la descendance sont des edifices.",
              axe4_coherence: "La racine b-n-y apparait environ 201 fois dans le Coran. Le mot ibn/banu designe les fils et la descendance. En 14:35, Abraham dit « preserve-moi et mes fils de l'adoration des idoles ». Le Coran montre qu'Abraham se soucie constamment de ses fils — leur foi est sa priorite.",
              axe5_frequence: "Pour la mission du khalifa, les fils sont les heritiers de la mission. Le khalifa ne travaille pas pour lui seul — il construit une descendance qui poursuivra la mission. La transmission aux fils est un acte de construction : batir des hommes soumis a Dieu."
            }
          }
        }
      },
      // eqb pos=6
      {
        word_key: "eqb", position: 6, sense_chosen: "Jacob",
        analysis_axes: {
          sense_chosen: "Jacob",
          concept_chosen: "Succession/Conséquence",
          concepts: {
            "Succession/Conséquence": {
              status: "retenu",
              senses: ["succeder", "venir apres", "consequence", "alternance", "descendance", "posterite"],
              proof_ctx: "Le nom Ya'qubu est un nom propre au nominatif, de la racine '-q-b. Le Lane's donne : succeder, venir apres, talon, consequence. Ya'qub (Jacob) est etymologiquement « celui qui suit, celui qui vient apres » — il succede a Abraham dans la chaine de transmission. Le nominatif indique qu'il est coordonne avec Abraham comme sujet de wassa (recommanda). Le verset dit que Jacob aussi a fait la meme recommandation a ses fils. La racine '-q-b porte l'idee de succession — Jacob est le successeur d'Abraham dans la transmission de la soumission.",
              axe1_verset: "Le nom Ya'qub est coordonne avec Ibrahim par « wa » (et). Jacob n'est pas un ajout secondaire — il est un transmetteur a part entiere. Le champ lexical du verset (recommander, fils, Dieu, choisir, religion, soumis) s'applique autant a Jacob qu'a Abraham. Les deux patriarches transmettent le meme message. Le vocatif « ya baniyya » (o mes fils) est la parole commune d'Abraham et de Jacob.",
              axe2_voisins: "Le verset 133 reprendra le nom de Jacob dans un contexte different : sa mort. Jacob mourant s'adresse a ses fils et leur demande ce qu'ils adoreront apres lui. Le verset 132 montre Jacob vivant qui recommande, le verset 133 montre Jacob mourant qui interroge. Les deux moments (la vie et la mort) sont des occasions de transmission.",
              axe3_sourate: "La racine '-q-b apparait dans la sourate al-Baqarah pour designer Jacob dans le contexte abrahamique. En 2:133, Jacob sur son lit de mort. En 2:136, « ce qui a ete donne a Abraham, Ismael, Isaac et Jacob ». La sourate insere Jacob dans la lignee abrahamique comme un maillon essentiel de la chaine de transmission.",
              axe4_coherence: "Le nom Ya'qub apparait environ 16 fois dans le Coran. En 12:38, « je suis la voie de mes peres, Abraham, Isaac et Jacob ». En 19:49, Dieu donne a Abraham Isaac et Jacob. Le Coran presente Jacob comme le continuateur de la voie d'Abraham — il succede a son grand-pere dans la soumission et la transmission.",
              axe5_frequence: "Pour la mission du khalifa, Jacob represente la continuite de la mission a travers les generations. Le khalifa n'est pas le seul transmetteur — la mission passe de generation en generation. Jacob montre que la transmission ne s'arrete pas a la premiere generation."
            },
            "Talon/Arrière": {
              status: "nul",
              senses: ["frapper le talon", "talon"],
              proof_ctx: "Le sens physique de talon est le sens concret premier de '-q-b. Le contexte est un nom propre designant le prophete Jacob, pas une partie du corps."
            },
            "Châtiment/Rétribution": {
              status: "nul",
              senses: ["punir", "chatiment"],
              proof_ctx: "Le sens de chatiment est un usage derive de '-q-b — la consequence punitive. Le contexte est un nom propre, pas un acte de chatiment."
            }
          }
        }
      },
      // alh pos=9
      {
        word_key: "alh", position: 9, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allaha est le nom propre de la divinite a l'accusatif, regi par la particule inna (en verite). Le Lane's donne : Dieu, la divinite unique. Ici Allah est le sujet reel du verbe istafa (a choisi) dans la construction inna + accusatif. C'est Dieu qui a choisi la religion pour eux — le choix est divin, pas humain.",
              axe1_verset: "Le nom Allaha est le sujet du verbe istafa — c'est Dieu qui a fait le choix. Le verset presente la religion comme un don divin : Dieu a choisi pour vous la religion. Le champ lexical (Dieu, a choisi, la religion) montre que la religion n'est pas une invention humaine mais une election divine. Les fils d'Abraham n'ont pas choisi leur religion — Dieu l'a choisie pour eux.",
              axe2_voisins: "Le verset 131 montrait le Seigneur ordonnant la soumission. Le verset 132 montre Dieu choisissant la religion. La progression est : Dieu ordonne → Abraham se soumet → Abraham transmet → Dieu a choisi la religion. Le choix divin est le fondement de la transmission familiale.",
              axe3_sourate: "Le nom Allah traverse toute la sourate comme le sujet principal de chaque action majeure. En 2:132, Dieu est celui qui choisit — l'election divine est un theme central de la sourate (2:105, « Dieu distingue par Sa misericorde qui Il veut »).",
              axe4_coherence: "Le Coran presente Dieu comme celui qui choisit les prophetes, les religions, les peuples. En 3:33, « Dieu a elu Adam, Noe, la famille d'Abraham et la famille de 'Imran ». Le choix divin est un acte souverain — Dieu choisit ce qui est le meilleur pour Ses serviteurs.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est celui qui choisit la mission et les moyens. Le khalifa ne choisit pas sa mission — il l'accepte. La religion n'est pas un choix humain mais une election divine."
            }
          }
        }
      },
      // stf pos=10
      {
        word_key: "stf", position: 10, sense_chosen: "choisir",
        analysis_axes: {
          sense_chosen: "choisir",
          concept_chosen: "Alignement/Ordre",
          concepts: {
            "Alignement/Ordre": {
              status: "retenu",
              senses: ["ranger en rang", "se mettre en rang", "s'aligner pour le combat", "rangee"],
              proof_ctx: "Le verbe istafa est un accompli 3MS de la forme VIII de la racine s-t-f (ou s-f-w selon certains). Le Lane's donne : choisir, elire, selectionner le meilleur parmi un ensemble. La forme VIII (if'tala) est reflexive intensive — Dieu a choisi par Lui-meme, de Sa propre initiative, en selectionnant le meilleur. L'accompli marque que le choix est acheve et definitif. L'objet du choix est « ad-dina » (la religion) et le beneficiaire est « lakum » (pour vous). La distinction avec le sens physique d'alignement est claire : le contexte est un choix delibere, pas un alignement spatial. Le verbe istafa est coranique par excellence — il designe l'election divine.",
              axe1_verset: "Le verbe istafa est l'action divine du verset — Dieu a choisi la religion pour eux. Le champ lexical (Dieu, a choisi, pour vous, la religion) montre que la religion est un don choisi par Dieu — pas une invention humaine ni un hasard. Abraham transmet cette information a ses fils : la religion que vous suivez n'est pas votre choix mais le choix de Dieu. Cette revelation donne a la religion une autorite supreme — elle vient de l'election divine.",
              axe2_voisins: "Le verset 131 montrait Dieu ordonnant la soumission. Le verset 132 montre Dieu choisissant la religion. L'election divine confirme l'ordre — la soumission n'est pas arbitraire, elle est le resultat d'un choix divin delibere. Le verset 133 montrera les fils acceptant ce choix.",
              axe3_sourate: "La racine s-t-f apparait dans la sourate al-Baqarah uniquement en 2:132. Mais le theme de l'election divine traverse la sourate — en 2:247, Dieu a choisi Talut comme roi. En 2:105, Dieu distingue par Sa misericorde qui Il veut. La sourate montre que les choix importants sont les choix de Dieu.",
              axe4_coherence: "Le verbe istafa apparait environ 12 fois dans le Coran. En 3:33, « Dieu a elu Adam, Noe, la famille d'Abraham ». En 3:42, « Dieu t'a elue [Marie] ». En 22:75, « Dieu choisit des messagers parmi les anges et parmi les hommes ». Le Coran utilise istafa exclusivement pour l'election divine — seul Dieu a le pouvoir de choisir le meilleur.",
              axe5_frequence: "Pour la mission du khalifa, l'election divine est le fondement de la mission. Le khalifa n'a pas choisi sa mission — Dieu l'a choisie pour lui. Accepter cette election c'est accepter la mission. Rejeter l'election c'est se detourner de la voie d'Abraham."
            },
            "Abri/Véranda": {
              status: "nul",
              senses: ["galerie couverte (suffa)"],
              proof_ctx: "Le sens architectural est hors sujet — le contexte est un choix divin, pas une structure physique."
            },
            "Surface/Platitude": {
              status: "nul",
              senses: ["dalle plate"],
              proof_ctx: "Le sens physique de surface plate est hors sujet — le verbe istafa designe un choix delibere."
            }
          }
        }
      },
      // dyn pos=13
      {
        word_key: "dyn", position: 13, sense_chosen: "religion",
        analysis_axes: {
          sense_chosen: "religion",
          concept_chosen: "Religion/Système",
          concepts: {
            "Religion/Système": {
              status: "retenu",
              senses: ["religion", "systeme de croyances", "pratique", "coutume", "habitude"],
              proof_ctx: "Le mot ad-dina est un nom masculin singulier defini accusatif de la racine d-y-n. Le Lane's donne : religion, systeme de croyances, pratique, habitude, coutume. L'article defini (al-) marque que c'est LA religion — pas une religion quelconque mais la religion specifique que Dieu a choisie. L'accusatif indique que c'est l'objet du verbe istafa (a choisi). Le din est a la fois une croyance interieure et une pratique exterieure — c'est le systeme complet de la relation entre l'homme et Dieu.",
              axe1_verset: "Le mot ad-din est l'objet du choix divin — Dieu a choisi LA religion pour eux. L'article defini marque l'unicite : il n'y a qu'une seule religion choisie par Dieu. Le champ lexical (recommander, choisir, religion, mourir, soumis) lie la religion a la soumission — la religion choisie par Dieu est la soumission. Le verset identifie la religion a l'islam (soumission) — mourir en soumis c'est mourir dans la religion choisie par Dieu.",
              axe2_voisins: "Le verset 130 mentionnait la voie (milla) d'Abraham. Le verset 132 parle de la religion (din). Les deux mots designent la meme realite sous des angles differents — la milla est la voie suivie, le din est le systeme pratique. Le verset 132 precise que cette voie/religion est choisie par Dieu.",
              axe3_sourate: "La racine d-y-n apparait dans la sourate al-Baqarah dans le contexte de la religion. En 2:193, « la religion appartient a Dieu ». En 2:256, « pas de contrainte en religion ». La sourate presente la religion comme le domaine exclusif de Dieu — Il la choisit (v132), elle Lui appartient (v193), elle ne peut pas etre imposee par la force (v256).",
              axe4_coherence: "La racine d-y-n apparait environ 101 fois dans le Coran. En 3:19, « la religion aupres de Dieu est l'islam (la soumission) ». En 3:85, « quiconque desire une religion autre que l'islam, elle ne sera pas acceptee de lui ». Le Coran identifie la religion choisie par Dieu a la soumission (islam). Le verset 132 s'inscrit dans cette identification.",
              axe5_frequence: "Pour la mission du khalifa, la religion est le cadre de la mission. Le khalifa opere a l'interieur de la religion choisie par Dieu. Cette religion n'est pas une invention humaine — elle est une election divine. Le khalifa doit connaitre et pratiquer cette religion."
            },
            "Obéissance/Soumission": {
              status: "probable",
              senses: ["obeir", "se soumettre", "soumission", "assujettissement"],
              proof_ctx: "Le sens d'obeissance est un aspect du din — la religion inclut l'obeissance. Le verset lie explicitement la religion a la soumission (muslimuna). Le din choisi par Dieu est la soumission. Le sens d'obeissance est compatible avec le contexte mais le mot al-din designe ici le systeme complet (religion), pas seulement l'acte d'obeir.",
              axe1_verset: "Le mot ad-din pourrait porter le sens d'obeissance au lieu de religion. La phrase serait : Dieu a choisi pour vous l'obeissance. Ce sens est coherent avec le contexte de soumission. Mais l'article defini (al-din) et l'usage coranique du mot designent davantage le systeme complet que l'acte d'obeir.",
              axe2_voisins: "Le verset 131 utilisait aslim (soumets-toi) — l'acte d'obeir. Le verset 132 passe au din — le systeme. La progression montre un elargissement : de l'acte ponctuel (soumets-toi) au systeme permanent (la religion).",
              axe3_sourate: "La sourate al-Baqarah utilise din dans le sens de religion/systeme dans la majorite de ses occurrences. En 2:193, « la religion appartient a Dieu ». En 2:256, « pas de contrainte en religion ». Le sens d'obeissance est present mais subsume dans le sens plus large de religion.",
              axe4_coherence: "Le Coran utilise din dans les deux sens selon le contexte. En 1:4, « maitre du jour du din » — ici din signifie retribution/jugement. En 2:132, le contexte (choisir pour vous) favorise le sens de religion.",
              axe5_frequence: "L'obeissance est un aspect de la religion du khalifa — mais la religion est plus large que l'obeissance. Elle inclut la croyance, la pratique, la morale et la soumission."
            },
            "Rétribution/Compte": {
              status: "peu_probable",
              senses: ["retribution", "recompense", "punition", "compensation"],
              proof_ctx: "Le sens de retribution est un usage de d-y-n dans le contexte du jugement. Le verset parle de la religion choisie par Dieu, pas du jour de la retribution. Le contexte familial (recommandation aux fils) favorise le sens de religion.",
              axe1_verset: "Le sens de retribution donnerait : Dieu a choisi pour vous la retribution. Ce sens est grammaticalement possible mais moins coherent avec le contexte de transmission familiale.",
              axe2_voisins: "Les versets voisins parlent de soumission et de transmission, pas de retribution. Le sens de religion est confirme par le contexte.",
              axe3_sourate: "La sourate al-Baqarah distingue les usages de din : religion en 2:132, retribution en 2:48 (« aucune ame ne sera recompensee pour une autre »).",
              axe4_coherence: "Le Coran distingue clairement les deux sens de din par le contexte. En 1:4, din = retribution. En 2:132, din = religion.",
              axe5_frequence: "La retribution est le resultat de la mission, pas son cadre. Le khalifa agit dans la religion et sera retribue au jour du din (retribution)."
            },
            "Dette/Obligation": {
              status: "nul",
              senses: ["dette", "creance", "obligation financiere", "pret"],
              proof_ctx: "Le sens financier est hors sujet — le contexte est la transmission d'une religion, pas une transaction financiere."
            }
          }
        }
      },
      // mwt pos=16
      {
        word_key: "mwt", position: 16, sense_chosen: "mourir",
        analysis_axes: {
          sense_chosen: "mourir",
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mourir", "mort", "tuer", "mortel", "terre morte"],
              proof_ctx: "Le verbe tamutunna est un inaccompli 2MP energetique de la racine m-w-t avec la negation la. Le Lane's donne : mourir, cesser de vivre. L'inaccompli avec la negation et le nun energetique cree une prohibition forte : ne mourez surtout pas. L'energetique (la tamutunna au lieu de la tamutu) renforce l'interdiction — c'est un ordre ferme et categorique. La construction « la tamutunna illa wa antum muslimuna » signifie : ne mourez surtout pas si ce n'est en etant soumis. La mort n'est pas interdite en soi (elle est inevitable) — c'est l'etat dans lequel on meurt qui est l'enjeu.",
              axe1_verset: "Le verbe tamutunna introduit une condition sur la mort : mourir en etant soumis. Le champ lexical (recommander, religion, mourir, soumis) montre que la recommandation d'Abraham porte sur l'etat final — l'etat dans lequel on quitte la vie. Le verset ne dit pas « vivez en soumis » mais « ne mourez pas autrement qu'en soumis ». La mort est l'horizon ultime — c'est le moment ou l'etat spirituel est scelle.",
              axe2_voisins: "Le verset 131 parlait de la soumission dans la vie. Le verset 132 parle de la soumission dans la mort. Le verset 133 montrera Jacob sur son lit de mort qui interroge ses fils. La progression vie → mort → lit de mort montre que la soumission doit etre permanente — de la vie jusqu'a la mort.",
              axe3_sourate: "La racine m-w-t apparait frequemment dans la sourate al-Baqarah. En 2:28, « vous etiez morts et Il vous a donnes la vie ». En 2:56, « puis Nous vous avons ressuscites apres votre mort ». En 2:132, la mort est le moment ou l'etat de soumission doit etre maintenu. La sourate presente la mort non pas comme une fin mais comme un passage — l'etat dans lequel on meurt determine ce qui suit.",
              axe4_coherence: "La racine m-w-t apparait environ 165 fois dans le Coran. En 3:102, « ne mourez qu'en etant soumis ». Ce verset reprend exactement la formule de 2:132. Le Coran insiste sur le fait que la mort doit trouver le croyant en etat de soumission — c'est une preoccupation constante.",
              axe5_frequence: "Pour la mission du khalifa, la mort est le terme de la mission terrestre. Le khalifa doit veiller a ce que sa mission se termine dans l'etat de soumission. Mourir en soumis c'est accomplir la mission jusqu'au bout."
            }
          }
        }
      },
      // ant pos=19
      {
        word_key: "ant", position: 19, sense_chosen: "vous",
        analysis_axes: {
          sense_chosen: "vous",
          concept_chosen: "Pronom/Interlocution",
          concepts: {
            "Pronom/Interlocution": {
              status: "retenu",
              senses: ["tu", "toi", "vous"],
              proof_ctx: "Le pronom antum est un pronom personnel 2MP. Le Lane's note : vous (pluriel masculin). Le pronom designe les fils d'Abraham et de Jacob — ceux a qui la recommandation est adressee. La construction « wa antum muslimuna » (et vous [etant] soumis) forme une phrase nominale d'etat (hal) — l'etat dans lequel ils doivent se trouver au moment de la mort.",
              axe1_verset: "Le pronom antum designe les fils d'Abraham et de Jacob. La construction « wa antum muslimuna » est une phrase d'etat : « et vous [etant] soumis ». Le pronom lie les fils a l'etat de soumission — ils doivent ETRE soumis au moment de mourir. Ce n'est pas un acte ponctuel mais un etat permanent.",
              axe2_voisins: "Le verset 131 utilisait la premiere personne (aslamtu, je me suis soumis). Le verset 132 passe a la deuxieme personne (antum, vous). La transmission se fait du « je » au « vous » — Abraham transmet sa soumission personnelle a ses fils.",
              axe3_sourate: "La sourate al-Baqarah utilise frequemment le pronom de la deuxieme personne pluriel pour s'adresser aux croyants. En 2:132, c'est Abraham qui s'adresse a ses fils. Le pronom cree une relation directe entre le pere et les fils.",
              axe4_coherence: "Le Coran utilise antum pour creer un lien direct entre le locuteur et les destinataires. En 3:102, « ne mourez qu'en etant soumis » — meme construction avec antum. Le pronom engage les destinataires personnellement.",
              axe5_frequence: "Pour la mission du khalifa, le « vous » montre que la mission est collective. Le khalifa n'est pas seul — la mission se vit en groupe, en famille, en communaute."
            }
          }
        }
      },
      // slm pos=20
      {
        word_key: "slm", position: 20, sense_chosen: "soumission",
        analysis_axes: {
          sense_chosen: "soumission",
          concept_chosen: "Paix/Soumission",
          concepts: {
            "Paix/Soumission": {
              status: "retenu",
              senses: ["paix", "soumission", "islam", "salut"],
              proof_ctx: "Le mot muslimuna est un participe actif pluriel masculin de la forme IV de la racine s-l-m au nominatif. Le Lane's donne : soumis, celui qui se soumet a Dieu. Le participe actif indique un etat permanent — les soumis sont ceux qui sont dans l'etat continu de soumission. Le pluriel (muslimuna) correspond au pronom antum (vous) — les fils doivent mourir en etant soumis. C'est la troisieme occurrence de s-l-m dans les versets 131-132 : aslim (imperatif), aslamtu (accompli), muslimuna (participe actif). La progression imperatif → accompli → participe montre le passage de l'ordre a l'acte a l'etat permanent.",
              axe1_verset: "Le mot muslimuna ferme le verset comme la conclusion de la recommandation. Le champ lexical (soumets-toi v131, je me suis soumis v131, soumis v132) construit une chaine de soumission. Le participe actif marque un etat permanent — ne mourez pas autrement qu'en etant dans l'etat permanent de soumission. Le verset commence par la recommandation et finit par l'etat vise : la soumission permanente.",
              axe2_voisins: "Le verset 131 utilisait la forme verbale (aslim, aslamtu). Le verset 132 utilise le participe actif (muslimuna). Le verset 133 reprendra muslimuna pour la profession de foi des fils de Jacob. La progression forme verbale → participe actif montre le passage de l'acte a l'etat — de l'acte ponctuel de se soumettre a l'etat permanent d'etre soumis.",
              axe3_sourate: "Le mot muslim/muslimun apparait dans la sourate al-Baqarah en 2:128 (muslimayni), 2:131-133 (aslim, aslamtu, muslimuna, muslimuna). Ce bloc de versets concentre les occurrences de s-l-m pour construire le portrait de la famille abrahamique comme une famille de soumis.",
              axe4_coherence: "Le participe actif muslim apparait environ 42 fois dans le Coran. En 3:67, « Abraham n'etait ni juif ni chretien mais il etait hanif musulman (soumis) ». En 22:78, « il vous a nommes les soumis (muslimun) ». Le Coran fait du terme muslim l'identite des croyants de toutes les epoques.",
              axe5_frequence: "Pour la mission du khalifa, l'etat de soumis est l'identite du khalifa. Le participe actif montre que la soumission n'est pas un acte ponctuel mais un etat permanent. Le khalifa est muslim — soumis en permanence a Dieu."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 133 — 21 mots de contenu
  // "Ou etiez-vous temoins quand la mort se presenta a
  //  Jacob, quand il dit a ses fils : qu'adorerez-vous
  //  apres moi ? Ils dirent : nous adorerons ta divinite
  //  et la divinite de tes peres Abraham, Ismael et Isaac,
  //  divinite unique, et nous Lui sommes soumis."
  // =====================================================
  133: {
    verse_id: 140,
    analysis_id: 501,
    translation_arab: "Ou etiez-vous temoins quand la mort se presenta a Jacob, quand il dit a ses fils : qu'adorerez-vous apres moi ? Ils dirent : nous adorerons ta divinite et la divinite de tes peres Abraham, Ismael et Isaac, divinite unique, et nous Lui sommes soumis.",
    full_translation: "Ou bien etiez-vous temoins quand la mort se presenta a Jacob et qu'il dit a ses fils : qu'adorerez-vous apres moi ? Ils repondirent : nous adorerons ta divinite et la divinite de tes peres, Abraham, Ismael et Isaac, divinite unique, et nous Lui sommes soumis.",
    translation_explanation: `§DEMARCHE§
Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister. Le verbe kana est un verbe incomplet — il introduit un attribut. Ici « kuntum shuhada'a » signifie « etiez-vous temoins ». L'interrogation « am » (ou, ou bien) introduit une question rhetorique — la reponse attendue est non, vous n'etiez pas la. Le nom **shuhada'a** est un pluriel masculin de la racine sh-h-d. Le Lane's donne : temoin, celui qui est present et qui voit. Les temoins sont ceux qui auraient pu voir de leurs propres yeux. La question rhetorique dit : vous n'etiez pas temoins de cette scene, donc vous ne pouvez pas la contester. Le verbe **hadara** est un accompli 3MS de la racine h-d-r. Le Lane's donne : etre present, se presenter, arriver. L'accompli indique que l'evenement est acheve — la mort s'est presentee. Le sujet est **al-mawtu** (la mort) — la mort est personnifiee comme un agent qui se presente. Le nom **Ya'quba** est a l'accusatif — Jacob est celui aupres de qui la mort se presente. Le verbe **qala** reprend le verbe du verset 131 — Jacob dit a ses fils. Le mot **li-banihi** (a ses fils) indique les destinataires. La question **ma ta'buduna** (que/quoi adorerez-vous) utilise le verbe **ta'buduna**, un inaccompli 2MP de la racine '-b-d. Le Lane's donne : adorer, servir, vouer un culte. L'inaccompli marque une action future — qu'adorerez-vous apres ma mort ? La preposition **min ba'di** (apres moi) situe la question dans le temps post-mortem de Jacob. Le verbe **qalu** est un accompli 3MP — ils dirent. Les fils repondent collectivement. Le verbe **na'budu** est un inaccompli 1MP — nous adorons/adorerons. Le nom **ilahaka** est de la racine a-l-h avec pronom suffixe 2MS. Le Lane's donne : divinite, celui qu'on adore. Le suffixe « ka » (ton) designe la divinite de Jacob. Le nom **ilaha** est le meme mot sans article ni possessif — la divinite de tes peres. Le nom **aba'ika** est un pluriel de la racine a-b-a avec pronom suffixe 2MS. Le Lane's donne : peres, ancetres. Les noms propres **Ibrahima** (Abraham), **Isma'ila** (Ismael) et **Ishaqa** (Isaac) enumerent les peres en question. Le nom **ilahan** est a l'accusatif indefini — une divinite. Le mot **wahidan** est un adjectif de la racine w-h-d. Le Lane's donne : un, unique, seul. L'accusatif indefini (ilahan wahidan) forme un complement d'etat (hal) : « en tant que divinite unique ». Le pronom **lahu** (a Lui, pour Lui) designe la divinite unique. Le participe actif **muslimuna** reprend la meme forme que dans le verset 132 — soumis.

§JUSTIFICATION§
**etiez-vous** — Le sens retenu est « etre ». Le verbe kuntum est un verbe incomplet qui introduit un attribut. L'alternative « lieu/etat » est ecartee car le verbe est utilise ici comme copule, pas comme nom.

**temoins** — Le sens retenu est « temoigner ». Le mot shuhada'a designe ceux qui sont presents et qui voient. L'alternative « martyr » est ecartee car le contexte est la presence visuelle, pas le sacrifice.

**se presenta** — Le sens retenu est « etre present ». Le verbe hadara decrit la venue de la mort aupres de Jacob. L'alternative « sedentaire » est ecartee car le verbe est un accompli actif decrivant un evenement.

**la mort** — Le sens retenu est « mourir ». Le mot al-mawt designe la cessation de la vie. La mort est personnifiee — elle se presente comme un visiteur.

**Jacob** — Meme analyse que dans le verset 132.

**dit** — Meme analyse que dans le verset 131.

**a ses fils** — Meme analyse que dans le verset 132.

**adorerez-vous** — Le sens retenu est « adorer ». Le verbe ta'buduna designe l'adoration et la devotion totale. L'alternative « asservir » est ecartee car le verbe est a la forme I active — les fils sont les agents de l'adoration, pas les victimes de l'asservissement.

**apres moi** — Le sens retenu est « apres ». Le mot ba'di designe la posteriorite temporelle. L'alternative « une partie » est ecartee car le contexte est temporel (apres ma mort), pas quantitatif.

**ils dirent** — Meme analyse que « dit ».

**nous adorerons** — Meme analyse que « adorerez-vous » mais a la premiere personne du pluriel.

**ta divinite** — Le sens retenu est « divinite ». Le mot ilahaka designe la divinite adoree par Jacob. L'alternative « detresse » est ecartee car le contexte est l'adoration.

**la divinite de** — Meme sens, sans possessif — la divinite des peres.

**tes peres** — Le sens retenu est « peres ». Le mot aba'ika designe les ancetres de Jacob. L'alternative « refuser » est ecartee car le mot est un nom pluriel avec possessif.

**divinite unique** — Le mot ilahan wahidan designe une divinite qui est une et unique. Le sens retenu pour wahid est « un/unique ». L'alternative « unicite » est compatible mais le mot est un adjectif qualifiant la divinite.

**nous Lui sommes soumis** — Meme analyse que « soumis » au verset 132. Le pronom « lahu » (a Lui) precise le destinataire de la soumission.

§CRITIQUE§
Hamidullah donne « etiez-vous temoins quand la mort se presenta a Jacob ». Notre traduction est identique. La seule difference notable est « divinite » la ou Hamidullah donne « Divinite » avec majuscule. Les deux sont corrects — la majuscule marque le caractere unique et supreme de cette divinite. Sur le fond, le verset rapporte une scene precise : Jacob mourant interroge ses fils sur leur adoration future, et ils repondent par une profession de foi en la divinite unique des patriarches. La question rhetorique « etiez-vous temoins » s'adresse aux contemporains du Prophete — vous n'etiez pas la, donc vous ne pouvez pas contester ce que les fils de Jacob ont dit.`,
    segments: [
      { fr: "ou bien", phon: "am", arabic: "\u0623\u064e\u0645\u0652", is_particle: true, position: 0 },
      { fr: "etiez-vous", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064f\u0646\u062a\u064f\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 1 },
      { fr: "temoins", pos: "nom", phon: "shuhada'a", arabic: "\u0634\u064f\u0647\u064e\u062f\u064e\u0622\u0621\u064e", word_key: "shhd", is_particle: false, sense_retenu: "temoigner", position: 2 },
      { fr: "lorsque", phon: "idh", arabic: "\u0625\u0650\u0630\u0652", is_particle: true, position: 3 },
      { fr: "se presenta", pos: "verbe", phon: "hadara", arabic: "\u062d\u064e\u0636\u064e\u0631\u064e", word_key: "hdr", is_particle: false, sense_retenu: "etre present", position: 4 },
      { fr: "Jacob", pos: "nom", phon: "ya'quba", arabic: "\u064a\u064e\u0639\u0652\u0642\u064f\u0648\u0628\u064e", word_key: "eqb", is_particle: false, sense_retenu: "Jacob", position: 5 },
      { fr: "la mort", pos: "nom", phon: "al-mawtu", arabic: "\u0671\u0644\u0652\u0645\u064e\u0648\u0652\u062a\u064f", word_key: "mwt", is_particle: false, sense_retenu: "mourir", position: 6 },
      { fr: "lorsque", phon: "idh", arabic: "\u0625\u0650\u0630\u0652", is_particle: true, position: 7 },
      { fr: "il dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 8 },
      { fr: "a ses fils", pos: "nom", phon: "li-banihi", arabic: "\u0644\u0650\u0628\u064e\u0646\u0650\u064a\u0647\u0650", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 9 },
      { fr: "que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 10 },
      { fr: "adorerez-vous", pos: "verbe", phon: "ta'buduna", arabic: "\u062a\u064e\u0639\u0652\u0628\u064f\u062f\u064f\u0648\u0646\u064e", word_key: "ebd", is_particle: false, sense_retenu: "adorer", position: 11 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u06e2", is_particle: true, position: 12 },
      { fr: "apres moi", pos: "nom", phon: "ba'di", arabic: "\u0628\u064e\u0639\u0652\u062f\u0650\u0649", word_key: "bed", is_particle: false, sense_retenu: "apres", position: 13 },
      { fr: "ils dirent", pos: "verbe", phon: "qalu", arabic: "\u0642\u064e\u0627\u0644\u064f\u0648\u0627\u06df", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 14 },
      { fr: "nous adorerons", pos: "verbe", phon: "na'budu", arabic: "\u0646\u064e\u0639\u0652\u0628\u064f\u062f\u064f", word_key: "ebd", is_particle: false, sense_retenu: "adorer", position: 15 },
      { fr: "ta divinite", pos: "nom", phon: "ilahaka", arabic: "\u0625\u0650\u0644\u064e\u0640\u06e8\u0647\u064e\u0643\u064e", word_key: "alh", is_particle: false, sense_retenu: "divinite", position: 16 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 17 },
      { fr: "la divinite de", pos: "nom", phon: "ilaha", arabic: "\u0625\u0650\u0644\u064e\u0640\u06e8\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "divinite", position: 18 },
      { fr: "tes peres", pos: "nom", phon: "aba'ika", arabic: "\u0621\u064e\u0627\u0628\u064e\u0622\u0626\u0650\u0643\u064e", word_key: "aba", is_particle: false, sense_retenu: "peres", position: 19 },
      { fr: "Abraham", pos: "nom", phon: "ibrahima", arabic: "\u0625\u0650\u0628\u0652\u0631\u064e\u0670\u0647\u0650\u06e8\u0645\u064e", word_key: "abr", is_particle: false, sense_retenu: "Abraham", position: 20 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 21 },
      { fr: "Ismael", pos: "nom", phon: "isma'ila", arabic: "\u0625\u0650\u0633\u0652\u0645\u064e\u0640\u06e8\u0639\u0650\u064a\u0644\u064e", word_key: "sme", is_particle: false, sense_retenu: "Ismael", position: 22 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 23 },
      { fr: "Isaac", pos: "nom", phon: "ishaqa", arabic: "\u0625\u0650\u0633\u0652\u062d\u064e\u0640\u06e8\u0642\u064e", word_key: "shq", is_particle: false, sense_retenu: "Isaac", position: 24 },
      { fr: "divinite", pos: "nom", phon: "ilahan", arabic: "\u0625\u0650\u0644\u064e\u0640\u06e8\u0647\u064b\u0627", word_key: "alh", is_particle: false, sense_retenu: "divinite", position: 25 },
      { fr: "unique", pos: "adjectif", phon: "wahidan", arabic: "\u0648\u064e\u0670\u062d\u0650\u062f\u064b\u0627", word_key: "whd", is_particle: false, sense_retenu: "unique", position: 26 },
      { fr: "et nous", phon: "wa-nahnu", arabic: "\u0648\u064e\u0646\u064e\u062d\u0652\u0646\u064f", is_particle: true, position: 27 },
      { fr: "a Lui", pos: "pronom", phon: "lahu", arabic: "\u0644\u064e\u0647\u064f\u06e5", word_key: "lh", is_particle: false, sense_retenu: "a Lui", position: 28 },
      { fr: "soumis", pos: "participe_actif", phon: "muslimuna", arabic: "\u0645\u064f\u0633\u0652\u0644\u0650\u0645\u064f\u0648\u0646\u064e", word_key: "slm", is_particle: false, sense_retenu: "soumission", position: 29 }
    ],
    words: [
      // kwn pos=1
      {
        word_key: "kwn", position: 1, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister, venir a l'existence. Le verbe kana est un verbe incomplet — il introduit un attribut (khabar). Ici « kuntum shuhada'a » signifie « etiez-vous temoins ». L'accompli avec la deuxieme personne et l'interrogation « am » cree une question rhetorique sur le passe — la reponse attendue est negative. Le verbe kana dans cette construction ne porte pas le sens fort d'existence mais le sens faible de copule.",
              axe1_verset: "Le verbe kuntum ouvre la question rhetorique du verset. La construction « am kuntum shuhada'a » demande : ou bien etiez-vous temoins ? La reponse est non — personne n'etait present quand Jacob est mort. Le champ lexical (temoins, mort, se presenter) montre que la question porte sur la presence physique lors d'un evenement passe. Le verbe kana situe la scene dans le passe acheve.",
              axe2_voisins: "Le verset 132 rapportait la recommandation d'Abraham et Jacob. Le verset 133 interpelle les contemporains du Prophete : etiez-vous la ? La question rhetorique est un outil argumentatif — si vous n'etiez pas la, vous ne pouvez pas contester ce que les fils de Jacob ont professe. Le verset 134 conclura : « c'est une communaute revolue ». La question du v133 prepare cette conclusion.",
              axe3_sourate: "La racine k-w-n est une des plus frequentes du Coran. Dans la sourate al-Baqarah, kana apparait dans de nombreux contextes. En 2:75, « un groupe parmi eux entendait la Parole de Dieu ». Le verbe kana situe les evenements dans le passe. En 2:133, il situe la scene de la mort de Jacob dans un passe acheve et irrecuperable.",
              axe4_coherence: "La racine k-w-n apparait environ 1390 fois dans le Coran. Le verbe kana comme copule est l'usage le plus frequent — « kana Allahu 'aliman hakiman » (Dieu est Savant, Sage). En 2:133, l'usage est interrogatif et rhethorique — une construction moins frequente mais efficace pour l'argumentation.",
              axe5_frequence: "Pour la mission du khalifa, la question rhetorique montre que la mission ne peut pas etre fondee sur le temoignage direct mais sur la transmission. Le khalifa n'etait pas temoin de la mort de Jacob — il doit croire a ce qui lui est transmis. La mission repose sur la foi en la transmission, pas sur la vision directe."
            }
          }
        }
      },
      // shhd pos=2
      {
        word_key: "shhd", position: 2, sense_chosen: "temoigner",
        analysis_axes: {
          sense_chosen: "temoigner",
          concept_chosen: "Témoignage/Présence",
          concepts: {
            "Témoignage/Présence": {
              status: "retenu",
              senses: ["temoigner", "voir", "etre present", "faire temoigner", "attester", "martyr"],
              proof_ctx: "Le mot shuhada'a est un pluriel masculin de la racine sh-h-d au nominatif. Le Lane's donne : temoin, celui qui est present et qui voit, celui qui temoigne de ce qu'il a vu. Le temoin est celui qui a ete la — la presence est la condition du temoignage. Le pluriel shuhada' designe un groupe de temoins potentiels. Dans la question rhetorique « am kuntum shuhada'a », le mot designe ceux qui auraient ete presents pour voir la scene. La distinction avec le sens de « martyr » est que le contexte est la presence visuelle, pas le sacrifice.",
              axe1_verset: "Le mot shuhada'a est l'attribut de kuntum — etiez-vous temoins ? La question porte sur la presence physique lors de la mort de Jacob. Le champ lexical (temoins, se presenter, mort) montre que le temoignage est lie a la presence lors d'un evenement crucial. Le verset interpelle les contemporains : s'ils n'etaient pas la, ils ne peuvent pas modifier le recit de ce que les fils de Jacob ont dit.",
              axe2_voisins: "Le verset 132 rapportait les paroles d'Abraham et Jacob. Le verset 133 demande : etiez-vous la pour entendre ces paroles ? La question etablit l'authenticite du recit — si personne ne conteste parce que personne n'etait la, alors le recit coranique fait autorite. Le verset 134 tirera la conclusion logique.",
              axe3_sourate: "La racine sh-h-d apparait dans la sourate al-Baqarah dans le contexte du temoignage juridique (2:282) et du temoignage de foi. En 2:133, le temoignage est un temoignage de presence — avoir ete la. La sourate utilise la racine dans ses differents sens pour montrer que le temoignage est un pilier de la verite.",
              axe4_coherence: "La racine sh-h-d apparait environ 160 fois dans le Coran. En 3:18, « Dieu temoigne qu'il n'y a de divinite que Lui ». En 2:185, « celui parmi vous qui est temoin du mois [de Ramadan] ». Le Coran valorise le temoignage comme preuve de verite — mais en 2:133, l'absence de temoins rend le recit coranique l'unique source fiable.",
              axe5_frequence: "Pour la mission du khalifa, le temoignage est un acte de la mission. Le khalifa est appele a etre temoin (shahid) — temoin de la verite devant les hommes. Mais il doit aussi accepter les temoignages transmis par le Coran quand il n'etait pas present."
            }
          }
        }
      },
      // hdr pos=4
      {
        word_key: "hdr", position: 4, sense_chosen: "etre present",
        analysis_axes: {
          sense_chosen: "etre present",
          concept_chosen: "Présence/Témoignage",
          concepts: {
            "Présence/Témoignage": {
              status: "retenu",
              senses: ["etre present", "assister a", "venir", "se presenter"],
              proof_ctx: "Le verbe hadara est un accompli 3MS de la racine h-d-r. Le Lane's donne : etre present, assister a, se presenter. L'accompli indique que l'evenement est acheve — la mort s'est presentee aupres de Jacob. Le sujet est al-mawtu (la mort) — la mort est traitee comme un agent actif qui vient, qui se presente. Le verbe hadara personnifie la mort en lui donnant une action propre. L'objet est Ya'quba (Jacob) a l'accusatif — la mort se presente a Jacob specifiquement.",
              axe1_verset: "Le verbe hadara decrit l'arrivee de la mort aupres de Jacob. Le champ lexical (mort, se presenter, temoins) construit une scene de lit de mort. La mort est un visiteur qui vient — elle n'est pas abstraite mais concrete dans le recit coranique. Le verset situe la scene dans un moment precis : le moment ou la mort est la.",
              axe2_voisins: "Le verset 132 parlait de « ne mourez pas autrement qu'en soumis ». Le verset 133 montre le moment ou la mort arrive — et Jacob utilise ce moment pour interroger ses fils. La mort annoncee au v132 (ne mourez pas...) se realise au v133 (quand la mort se presenta). Le verset montre que la recommandation du v132 a ete suivie d'effet.",
              axe3_sourate: "La racine h-d-r apparait rarement dans la sourate al-Baqarah. En 2:133, elle decrit l'arrivee de la mort. En 2:198, « il n'y a pas de mal a chercher une faveur de votre Seigneur [pendant le pelerinage] ». Le sens de presence physique est commun aux deux usages — etre present dans un lieu ou un moment.",
              axe4_coherence: "La racine h-d-r apparait environ 25 fois dans le Coran. En 4:18, « quand la mort se presente a l'un d'eux ». En 2:133, la meme construction — la mort se presente a Jacob. Le Coran utilise hadara pour personnifier la mort — elle vient comme un visiteur au moment fixe.",
              axe5_frequence: "Pour la mission du khalifa, la presence de la mort est le rappel de la finitude de la mission. Le khalifa sait que la mort viendra — il doit preparer sa succession et s'assurer que la soumission sera transmise. La presence de la mort est un appel a l'urgence de la mission."
            },
            "Sédentarité/Civilisation": {
              status: "nul",
              senses: ["zone habitee (hadar)", "sedentaire (vs. nomade)"],
              proof_ctx: "Le sens de sedentarite est un usage derive de h-d-r. Le contexte est la venue de la mort, pas l'opposition nomade/sedentaire."
            }
          }
        }
      },
      // eqb pos=5
      {
        word_key: "eqb", position: 5, sense_chosen: "Jacob",
        analysis_axes: {
          sense_chosen: "Jacob",
          concept_chosen: "Succession/Conséquence",
          concepts: {
            "Succession/Conséquence": {
              status: "retenu",
              senses: ["succeder", "venir apres", "consequence", "alternance", "descendance", "posterite"],
              proof_ctx: "Le nom Ya'quba est le nom propre du prophete Jacob a l'accusatif. Meme racine '-q-b que dans le verset 132. L'accusatif indique que Jacob est le complement du verbe hadara — la mort se presente A Jacob. Dans ce verset, Jacob est dans son role de pere mourant qui interroge ses fils sur leur foi. La racine '-q-b (succeder) prend ici tout son sens : Jacob interroge ses fils sur ce qui viendra APRES lui — la succession dans la foi.",
              axe1_verset: "Le nom Ya'quba est le personnage central du verset — c'est autour de sa mort que la scene se construit. Le champ lexical (mort, se presenter, dit, fils, adorer, apres moi) tourne autour de Jacob mourant. La question « qu'adorerez-vous apres moi » est une question de succession — Ya'qub (celui qui succede) interroge ceux qui lui succederont.",
              axe2_voisins: "Le verset 132 montrait Jacob vivant qui recommande. Le verset 133 montre Jacob mourant qui interroge. La meme personne dans deux moments differents : la recommandation (vivant) et la verification (mourant). Le verset 133 montre que Jacob verifie au dernier moment que sa recommandation a ete entendue.",
              axe3_sourate: "Jacob apparait dans la sourate al-Baqarah en 2:132, 2:133, 2:136 et 2:140. Les versets 132-133 forment un diptyque : recommandation et verification. Le verset 136 inclura Jacob dans la liste des prophetes auxquels les croyants doivent croire. La sourate place Jacob dans la continuite abrahamique.",
              axe4_coherence: "Le nom Ya'qub apparait environ 16 fois dans le Coran. En 12:68, Jacob dit a ses fils des recommandations. En 2:133, il les interroge sur leur mort. Le Coran montre Jacob comme un pere soucieux de la foi de ses fils — il les guide vivant et les interroge mourant.",
              axe5_frequence: "Pour la mission du khalifa, Jacob montre que la mission ne s'arrete pas au dernier souffle. Meme mourant, Jacob travaille pour la mission — il verifie que ses fils continueront. Le khalifa doit maintenir la mission jusqu'a la fin."
            }
          }
        }
      },
      // mwt pos=6
      {
        word_key: "mwt", position: 6, sense_chosen: "mourir",
        analysis_axes: {
          sense_chosen: "mourir",
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mourir", "mort", "tuer", "mortel", "terre morte"],
              proof_ctx: "Le mot al-mawtu est un nom masculin singulier defini au nominatif de la racine m-w-t. Le Lane's donne : mort, cessation de la vie. Le nominatif indique que la mort est le sujet du verbe hadara (se presenta). La mort est personnifiee — elle est un agent qui vient, qui se presente aupres de quelqu'un. L'article defini (al-) marque que c'est LA mort — pas une mort parmi d'autres mais la mort definitive, unique, attendue.",
              axe1_verset: "Le mot al-mawtu est le sujet du verbe hadara — la mort se presenta a Jacob. La mort est le declencheur de la scene : c'est son arrivee qui provoque la question de Jacob a ses fils. Le champ lexical (mort, temoins, se presenter) construit une scene de fin de vie. La mort n'est pas un evenement subi passivement — c'est l'occasion d'une derniere transmission.",
              axe2_voisins: "Le verset 132 disait « ne mourez pas autrement qu'en soumis ». Le verset 133 montre la mort qui se presente effectivement. La recommandation du v132 trouve son epreuve au v133 — le moment de verite est arrive. Les fils seront-ils soumis quand la mort se presente a leur pere ?",
              axe3_sourate: "La racine m-w-t traverse la sourate al-Baqarah comme un theme recurrent. En 2:28, « vous etiez morts et Il vous a donnes la vie ». En 2:132, « ne mourez pas autrement qu'en soumis ». En 2:133, la mort se presente a Jacob. La sourate montre la mort sous differents angles — etat spirituel (morts vivants), evenement physique, moment de verite.",
              axe4_coherence: "Le Coran personnifie frequemment la mort comme un agent qui vient. En 4:18, « quand la mort se presente a l'un d'eux ». En 6:61, « quand la mort se presente a l'un de vous, Nos messagers le reprennent ». La mort est un rendez-vous que personne ne peut eviter.",
              axe5_frequence: "Pour la mission du khalifa, la mort est le terme de la mission terrestre. Le khalifa doit etre pret quand la mort se presente — sa soumission doit etre complete a ce moment. La mort est le test final de la mission."
            }
          }
        }
      },
      // qwl pos=8
      {
        word_key: "qwl", position: 8, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qala est un accompli 3MS de la racine q-w-l. Le Lane's donne : dire, parler. Meme verbe que dans le verset 131. Ici qala introduit la question de Jacob a ses fils. L'accompli marque que l'acte de parole est acheve — Jacob a pose sa question. Le verbe qala apparait deux fois dans ce verset : qala (il dit) pour Jacob et qalu (ils dirent) pour les fils. Le dialogue est structure par le meme verbe — question et reponse.",
              axe1_verset: "Le verbe qala structure le dialogue entre Jacob et ses fils. Jacob dit (qala) et les fils dirent (qalu). Le champ lexical du verset (dire, adorer, divinite, soumis) montre que la parole est le vehicule de la profession de foi. La question de Jacob et la reponse des fils sont des actes de parole performatifs — ils ne decrivent pas mais ils engagent.",
              axe2_voisins: "Le verset 131 utilisait qala pour le dialogue entre Dieu et Abraham. Le verset 133 utilise qala pour le dialogue entre Jacob et ses fils. La structure est la meme : une autorite parle, un destinataire repond. En 131, l'autorite est Dieu. En 133, l'autorite est Jacob. La parole se transmet de Dieu a Abraham a Jacob a ses fils.",
              axe3_sourate: "La racine q-w-l est omnipresente dans la sourate al-Baqarah. Les dialogues entre Dieu et les prophetes, entre les prophetes et leurs peuples, structurent la sourate. Le verset 133 s'inscrit dans cette serie de dialogues ou la parole revele les positions de chacun.",
              axe4_coherence: "Le verbe qala est le verbe le plus frequent du Coran. Il structure tous les recits prophetiques. En 2:133, il rapporte les dernieres paroles de Jacob — un usage narratif classique du Coran pour transmettre les scenes importantes.",
              axe5_frequence: "Pour la mission du khalifa, la parole de Jacob montre que la mission se poursuit jusqu'au dernier souffle. Les dernieres paroles du khalifa doivent porter sur la mission — qu'adorerez-vous apres moi ?"
            }
          }
        }
      },
      // bny pos=9
      {
        word_key: "bny", position: 9, sense_chosen: "fils",
        analysis_axes: {
          sense_chosen: "fils",
          concept_chosen: "Construction/Édification",
          concepts: {
            "Construction/Édification": {
              status: "retenu",
              senses: ["construire", "batir", "edifice", "fils", "enfant", "descendance"],
              proof_ctx: "Le mot li-banihi est un pluriel masculin de la racine b-n-y avec pronom suffixe 3MS et preposition li. Meme analyse que dans le verset 132. La preposition li (a, pour) indique que les fils sont les destinataires de la question de Jacob. Le mot est identique au verset 132 mais le contexte a change — au v132 les fils recoivent une recommandation, au v133 ils recoivent une question.",
              axe1_verset: "Le mot li-banihi designe les destinataires de la question de Jacob. Les fils sont au centre du verset — c'est leur reponse qui constitue la profession de foi. Le champ lexical (fils, adorer, divinite, peres) montre que les fils sont le lien entre les generations. Ils recoivent la question du pere mourant et repondent par une profession de foi qui remonte aux peres (Abraham, Ismael, Isaac).",
              axe2_voisins: "Le verset 132 utilisait banihi pour la recommandation. Le verset 133 utilise li-banihi pour la question. Les fils sont toujours les destinataires — d'abord de l'injonction (ne mourez pas autrement qu'en soumis), ensuite de la question (qu'adorerez-vous). Le v133 verifie si le v132 a ete entendu.",
              axe3_sourate: "Les fils d'Abraham et de Jacob sont un theme central des versets 128-140 de la sourate al-Baqarah. La sourate montre que la transmission de la foi passe par la filiation — la construction d'une lignee de soumis.",
              axe4_coherence: "Le Coran accorde une importance particuliere a la transmission familiale de la foi. En 19:55, « il ordonnait a sa famille la priere et l'aumone ». En 20:132, « ordonne la priere a ta famille ». La filiation est le premier cercle de la mission.",
              axe5_frequence: "Pour la mission du khalifa, les fils sont les premiers destinataires de la mission. Le khalifa transmet d'abord a ses proches, puis au-dela. La construction familiale est la base de la construction communautaire."
            }
          }
        }
      },
      // ebd pos=11
      {
        word_key: "ebd", position: 11, sense_chosen: "adorer",
        analysis_axes: {
          sense_chosen: "adorer",
          concept_chosen: "Adoration/Dévotion",
          concepts: {
            "Adoration/Dévotion": {
              status: "retenu",
              senses: ["adorer", "servir", "vouer un culte", "se devouer", "devotion", "adoration"],
              proof_ctx: "Le verbe ta'buduna est un inaccompli 2MP de la racine '-b-d. Le Lane's donne : adorer, servir, vouer un culte. L'inaccompli marque une action future ou continue — qu'adorerez-vous apres moi ? La question de Jacob porte sur l'objet de l'adoration, pas sur l'acte d'adorer en soi. Le pronom interrogatif ma (que/quoi) demande l'identification de l'objet adore. L'adoration est un acte exterieur et continu de devotion totale — c'est le rapport fondamental entre la creature et ce qu'elle prend pour divinite.",
              axe1_verset: "Le verbe ta'buduna est au coeur de la question de Jacob — qu'adorerez-vous ? Le champ lexical (adorer, divinite, unique, soumis) construit le theme de l'adoration exclusive. La question ne porte pas sur « si » mais sur « quoi » — Jacob presuppose que ses fils adoreront quelque chose. L'enjeu est l'objet de l'adoration, pas l'acte. La reponse des fils (na'budu ilahaka, nous adorerons ta divinite) reprend le meme verbe pour affirmer la continuite.",
              axe2_voisins: "Le verset 131 parlait de soumission (aslim). Le verset 133 parle d'adoration (ta'buduna). La soumission et l'adoration sont deux faces de la meme realite — se soumettre c'est reconnaitre le Seigneur, adorer c'est Lui vouer un culte exclusif. La progression soumission → adoration montre que la soumission se manifeste par l'adoration.",
              axe3_sourate: "La racine '-b-d est une racine fondamentale de la sourate al-Baqarah. En 2:21, « adorez votre Seigneur ». En 2:83, « vous n'adorerez que Dieu ». En 2:133, Jacob demande ce que ses fils adoreront. La sourate revient constamment a la question de l'adoration — qui adore-t-on et comment ?",
              axe4_coherence: "La racine '-b-d apparait environ 275 fois dans le Coran. En 51:56, « je n'ai cree les djinns et les humains que pour qu'ils M'adorent ». L'adoration est la raison d'etre de la creation. La question de Jacob (qu'adorerez-vous) est la question fondamentale de l'existence.",
              axe5_frequence: "Pour la mission du khalifa, l'adoration est le coeur de la mission. Le khalifa est un adorateur — il adore Dieu et transmet l'adoration. La question de Jacob est la question que le khalifa doit se poser et poser a ses proches."
            },
            "Servitude/Esclavage": {
              status: "peu_probable",
              senses: ["serviteur", "esclave", "etre humain", "asservir"],
              proof_ctx: "Le sens de servitude est un aspect de '-b-d — le serviteur ('abd) est celui qui adore et qui sert. Le verset utilise le verbe a la forme I active — les fils sont des adorateurs volontaires, pas des esclaves. Le sens de servitude est present en arriere-plan (l'adoration inclut le service) mais le contexte privilegie l'adoration.",
              axe1_verset: "Le verbe ta'buduna pourrait porter le sens de « que servirez-vous ». Ce sens est compatible mais moins precis — le verset parle de divinite (ilah), ce qui oriente vers l'adoration plutot que vers le service au sens general.",
              axe2_voisins: "Les versets voisins utilisent muslim (soumis) et din (religion) — le champ lexical est celui de la devotion religieuse, pas de la servitude sociale.",
              axe3_sourate: "La sourate al-Baqarah utilise '-b-d dans le sens d'adoration religieuse dans la majorite des cas. En 2:21, « adorez votre Seigneur ». Le sens de servitude est present mais secondaire.",
              axe4_coherence: "Le Coran distingue l'adoration (sens religieux) de la servitude (sens social) par le contexte. En 2:133, le contexte religieux (divinite, unique, soumis) confirme le sens d'adoration.",
              axe5_frequence: "Le service est une dimension de la mission du khalifa, mais la question de Jacob porte sur l'adoration, pas sur le service social."
            }
          }
        }
      },
      // bed pos=13
      {
        word_key: "bed", position: 13, sense_chosen: "apres",
        analysis_axes: {
          sense_chosen: "apres",
          concept_chosen: "Partie/Division",
          concepts: {
            "Partie/Division": {
              status: "retenu",
              senses: ["une partie", "certains", "diviser en parties"],
              proof_ctx: "Le mot ba'di est un nom masculin de la racine b-'-d avec pronom suffixe 1MS. Le Lane's donne : apres, posteriorite temporelle. L'expression « min ba'di » (apres moi) situe la question dans le temps qui suit la mort de Jacob. Le suffixe « i » (moi) personnalise la question — apres MOI, qu'adorerez-vous ? Le sens premier de b-'-d est la distance (temporelle ou spatiale). Le sens de « apres » est le sens temporel de cette distance.",
              axe1_verset: "Le mot ba'di situe la question dans le futur post-mortem de Jacob. La question « ma ta'buduna min ba'di » (qu'adorerez-vous apres moi) porte sur le temps ou Jacob ne sera plus la. Le champ lexical (mort, se presenter, apres moi) montre que Jacob sait que sa fin est proche et qu'il veut s'assurer de la continuite de la foi. La question « apres moi » est une question de succession spirituelle.",
              axe2_voisins: "Le verset 132 parlait de la mort future des fils (ne mourez pas autrement qu'en soumis). Le verset 133 parle de la mort presente de Jacob (apres moi). Le ba'd (apres) cree un pont entre les generations — ce qui vient apres Jacob est la responsabilite des fils.",
              axe3_sourate: "La racine b-'-d apparait frequemment dans la sourate al-Baqarah pour marquer la succession temporelle. En 2:27, « ceux qui rompent le pacte de Dieu apres l'avoir noue ». En 2:52, « apres cela vous avez pardonne ». Le « apres » marque le passage du temps et le changement de situation.",
              axe4_coherence: "La racine b-'-d apparait environ 200 fois dans le Coran. L'expression « min ba'di » (apres) est tres frequente. En 2:133, elle situe la question de Jacob dans le temps de la succession. Le Coran utilise ba'd pour montrer que chaque epoque a sa responsabilite.",
              axe5_frequence: "Pour la mission du khalifa, le « apres moi » est la question de la succession. Le khalifa doit preparer ce qui vient apres lui — la mission ne meurt pas avec le khalifa, elle continue a travers ses successeurs."
            }
          }
        }
      },
      // alh pos=16 (ilahaka - ta divinite)
      {
        word_key: "alh", position: 16, sense_chosen: "divinite",
        analysis_axes: {
          sense_chosen: "divinite",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le mot ilahaka est un nom de la racine a-l-h avec pronom suffixe 2MS. Le Lane's donne : divinite, celui qu'on adore, objet d'adoration. Le suffixe « ka » (ton) cree un lien personnel — ta divinite, la divinite que tu adores. Le mot ilah (divinite) est un nom commun qui designe tout objet d'adoration — a la difference d'Allah qui est le nom propre de Dieu. Ici les fils de Jacob repondent : nous adorerons ta divinite — la divinite que tu as adoree. Le possessif marque la continuite — la divinite du pere devient la divinite des fils.",
              axe1_verset: "Le mot ilahaka est l'objet de l'adoration des fils — ta divinite. Le champ lexical (adorer, divinite, peres, unique) construit une profession de foi centree sur l'identite de la divinite adoree. Les fils ne choisissent pas une divinite quelconque — ils adoptent celle de leur pere et de leurs ancetres. La repetition du mot ilah (ilahaka, ilaha, ilahan) trois fois dans le verset souligne l'importance de l'identification de la divinite.",
              axe2_voisins: "Le verset 131 utilisait rabb (Seigneur) pour designer Dieu. Le verset 133 utilise ilah (divinite). Les deux mots designent la meme realite sous des angles differents — rabb est le Seigneur qui gouverne, ilah est la divinite qu'on adore. La profession de foi des fils combine les deux aspects : la soumission (rabb/slm) et l'adoration (ilah/'abd).",
              axe3_sourate: "La racine a-l-h apparait dans la sourate al-Baqarah dans le contexte de la divinite. En 2:163, « votre divinite est une divinite unique ». En 2:133, les fils de Jacob reprennent cette profession d'unicite. La sourate construit progressivement l'affirmation de l'unicite divine.",
              axe4_coherence: "La racine a-l-h apparait environ 147 fois dans le Coran. Le mot ilah (divinite) est distinct d'Allah (nom propre). En 21:22, « s'il y avait dans les deux des divinites autre que Dieu, ils se seraient corrompus ». Le Coran utilise ilah pour designer le concept general de divinite et Allah pour designer le Dieu unique.",
              axe5_frequence: "Pour la mission du khalifa, la divinite adoree definit la mission. Le khalifa adore la meme divinite qu'Abraham, Ismael, Isaac et Jacob — la divinite unique. L'identite de la divinite adoree est la question fondamentale de la mission."
            }
          }
        }
      },
      // aba pos=19
      {
        word_key: "aba", position: 19, sense_chosen: "peres",
        analysis_axes: {
          sense_chosen: "peres",
          concept_chosen: "Parenté/Paternité",
          concepts: {
            "Parenté/Paternité": {
              status: "retenu",
              senses: ["pere", "ancetre"],
              proof_ctx: "Le mot aba'ika est un pluriel masculin de la racine a-b-a avec pronom suffixe 2MS. Le Lane's donne : pere, ancetre, celui qui engendre. Le pluriel (tes peres) designe les ascendants directs de Jacob — Abraham, Ismael et Isaac. Le possessif « ka » (tes) cree un lien genealogique direct. Le mot ab (pere) est un des cinq noms a flexion speciale en arabe (al-asma' al-khamsa). Le pluriel aba' designe les peres au sens large — ancetres et ascendants.",
              axe1_verset: "Le mot aba'ika designe les ancetres de Jacob enumeres ensuite : Abraham, Ismael et Isaac. Le champ lexical (divinite, peres, Abraham, Ismael, Isaac) montre que la profession de foi des fils s'enracine dans la genealogie. Ils adorent la divinite de leur pere et de ses peres — la foi se transmet par la filiation. Le verset construit une chaine : Abraham → Ismael/Isaac → Jacob → fils de Jacob.",
              axe2_voisins: "Le verset 132 montrait la transmission du pere aux fils. Le verset 133 montre les fils qui remontent aux peres — la divinite de tes peres. La transmission est bidirectionnelle : du pere vers les fils (v132) et des fils vers les peres (v133, en s'identifiant a la foi ancestrale). La foi familiale est un heritage qui circule dans les deux sens.",
              axe3_sourate: "La racine a-b-a apparait dans la sourate al-Baqarah dans le contexte des patriarches. En 2:133, les peres sont Abraham, Ismael et Isaac. En 2:170, « nous suivons ce sur quoi nous avons trouve nos peres ». La sourate distingue deux usages du mot « peres » : les peres justes (Abraham, etc.) et les peres suivis aveuglement (2:170).",
              axe4_coherence: "La racine a-b-a apparait environ 117 fois dans le Coran. En 2:133, les peres sont des modeles de foi. En 26:74, « nous avons trouve nos peres adorant ». Le Coran distingue les peres qu'il faut suivre (les prophetes) et les peres qu'il ne faut pas suivre aveuglément (les idolatres).",
              axe5_frequence: "Pour la mission du khalifa, les peres justes sont les modeles de la mission. Le khalifa s'inscrit dans une lignee — il continue l'oeuvre des peres prophetes. La paternite spirituelle est le fondement de la continuite de la mission."
            },
            "Refus/Rejet": {
              status: "nul",
              senses: ["refuser", "dedaigner"],
              proof_ctx: "Le sens de refus est un usage derive de a-b-a. Le contexte est la filiation (tes peres), pas le refus."
            }
          }
        }
      },
      // sme pos=22
      {
        word_key: "sme", position: 22, sense_chosen: "Ismael",
        analysis_axes: {
          sense_chosen: "Ismael",
          concept_chosen: "Audition/Écoute",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              senses: ["entendre", "ecouter", "ouie", "obeir", "exaucer"],
              proof_ctx: "Le nom Isma'ila est un nom propre a l'accusatif, derive de la racine s-m-' (entendre). Le Lane's donne pour la racine : entendre, ecouter, obeir, exaucer. Le nom Ismael signifie etymologiquement « Dieu entend/exauce ». C'est un nom propre permanent qui designe le fils aine d'Abraham. L'accusatif est regi par la position d'apposition (badal) — Ismael est un des peres enumeres. Le nom propre est classe sous la racine s-m-' car il en derive etymologiquement.",
              axe1_verset: "Le nom Isma'ila est un des trois peres enumeres apres aba'ika (tes peres). La liste Abraham, Ismael, Isaac enumere les ascendants directs de Jacob. Le champ lexical (peres, Abraham, Ismael, Isaac, divinite unique) montre que la profession de foi des fils remonte a la lignee complete des patriarches. Ismael est mentionne avant Isaac — l'ordre n'est pas chronologique mais peut refleter l'importance dans le recit coranique.",
              axe2_voisins: "Le verset 127 mentionnait Abraham et Ismael elevant les fondations de la Ka'ba. Le verset 133 inclut Ismael parmi les peres de Jacob. Le lien entre les versets 127 et 133 montre qu'Ismael est a la fois un batisseur (v127) et un ancetre (v133). La sourate fait d'Ismael un pilier de la lignee abrahamique.",
              axe3_sourate: "Le nom Ismael apparait dans la sourate al-Baqarah en 2:125, 2:127, 2:133, 2:136, 2:140. Il est constamment associe a Abraham et a Isaac. La sourate insiste sur l'unite de la famille abrahamique — Ismael et Isaac sont co-heritiers de la soumission.",
              axe4_coherence: "Le nom Isma'il apparait environ 12 fois dans le Coran. En 19:54, « il etait fidele a sa promesse, et il etait un envoye, un prophete ». Le Coran qualifie Ismael de prophete fidele a sa promesse — un modele de constance dans la foi.",
              axe5_frequence: "Pour la mission du khalifa, Ismael est un modele de fidelite a la mission. Son nom meme (Dieu entend) rappelle que la mission est entendue par Dieu. Le khalifa qui est fidele a sa mission sera entendu et exauce."
            }
          }
        }
      },
      // whd pos=26
      {
        word_key: "whd", position: 26, sense_chosen: "unique",
        analysis_axes: {
          sense_chosen: "unique",
          concept_chosen: "Unicité/Unité",
          concepts: {
            "Unicité/Unité": {
              status: "retenu",
              senses: ["un", "unique", "seul", "unifier"],
              proof_ctx: "Le mot wahidan est un adjectif masculin singulier indefini a l'accusatif de la racine w-h-d. Le Lane's donne : un, unique, seul. L'accusatif indefini (wahidan) s'accorde avec ilahan (divinite) pour former un complement d'etat (hal) : « une divinite unique ». Le mot wahid nie la multiplicite — la divinite n'est pas deux ou trois mais une seule. C'est l'affirmation fondamentale du monotheisme : la divinite adoree est une, sans associe ni egale.",
              axe1_verset: "Le mot wahidan qualifie la divinite — divinite unique. C'est le climax de la profession de foi des fils de Jacob. Ils ne disent pas simplement « nous adorerons ta divinite » — ils precisent « divinite unique ». Le champ lexical (divinite, peres, unique, soumis) construit une profession de foi complete : identification de la divinite (celle des peres), affirmation de son unicite (unique), engagement de soumission (soumis).",
              axe2_voisins: "Le verset 131 parlait du Seigneur des mondes (universalite). Le verset 133 parle de divinite unique (unicite). L'universalite et l'unicite sont les deux faces de la meme realite — le Seigneur de tous les mondes est la divinite unique. Les versets 131-133 construisent progressivement cette affirmation.",
              axe3_sourate: "La racine w-h-d apparait dans la sourate al-Baqarah en 2:133 et en 2:163 (« votre divinite est une divinite unique »). Le verset 133 anticipe le verset 163 — la profession de foi des fils de Jacob est la meme que celle proclamee par le Coran lui-meme.",
              axe4_coherence: "La racine w-h-d apparait environ 68 fois dans le Coran. En 112:1, « dis : Lui, Dieu, est Un ». En 2:163, « votre divinite est une divinite unique ». Le Coran affirme l'unicite divine comme le dogme central de la foi. L'unicite n'est pas seulement numerique (un seul) mais ontologique (sans egal, sans associe).",
              axe5_frequence: "Pour la mission du khalifa, l'unicite divine est le fondement de la mission. Le khalifa ne sert qu'un seul Maitre — la divinite unique. Toute forme d'association (shirk) est une trahison de la mission. L'unicite de la divinite exige l'exclusivite de la devotion."
            }
          }
        }
      },
      // slm pos=29
      {
        word_key: "slm", position: 29, sense_chosen: "soumission",
        analysis_axes: {
          sense_chosen: "soumission",
          concept_chosen: "Paix/Soumission",
          concepts: {
            "Paix/Soumission": {
              status: "retenu",
              senses: ["paix", "soumission", "islam", "salut"],
              proof_ctx: "Le mot muslimuna est un participe actif pluriel masculin de la forme IV de la racine s-l-m au nominatif. Meme forme et meme analyse que dans le verset 132. Le mot ferme la profession de foi des fils de Jacob : « et nous Lui sommes soumis ». Le pronom « lahu » (a Lui) precise le destinataire de la soumission — la divinite unique mentionnee juste avant. Le participe actif indique un etat permanent — les fils sont en etat constant de soumission.",
              axe1_verset: "Le mot muslimuna ferme le verset et conclut la profession de foi. La structure de la profession est : adoration (na'budu) → identification de la divinite (ilahaka wa ilaha aba'ika) → enumeration des peres (Ibrahim, Isma'il, Ishaq) → affirmation de l'unicite (ilahan wahidan) → soumission (nahnu lahu muslimuna). Le mot muslimuna boucle le tout — l'adoration de la divinite unique se manifeste par la soumission permanente.",
              axe2_voisins: "Le verset 131 utilisait aslim/aslamtu (imperatif/accompli). Le verset 132 utilisait muslimuna (participe actif). Le verset 133 reprend muslimuna — la soumission est devenue un etat permanent transmis de generation en generation. Les versets 131-133 forment un arc : ordre → reponse → transmission → profession de foi collective.",
              axe3_sourate: "Le bloc des versets 131-133 concentre les occurrences de s-l-m pour construire une theologie de la soumission. La sourate al-Baqarah presente la soumission comme la religion d'Abraham et de sa descendance — pas une innovation mais un heritage ancestral.",
              axe4_coherence: "Le Coran presente les prophetes et leurs descendants comme des soumis (muslimun). En 3:67, « Abraham etait hanif muslim ». En 10:72, « il m'a ete ordonne d'etre parmi les soumis ». Le verset 133 s'inscrit dans cette presentation — les fils de Jacob sont des soumis comme leur pere et leurs ancetres.",
              axe5_frequence: "Pour la mission du khalifa, la profession de foi des fils de Jacob est le modele de la profession de foi du khalifa. Le khalifa adore la divinite unique de ses peres prophetes et se soumet a elle. La soumission est l'aboutissement de l'adoration et l'identite du khalifa."
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

  const verseIds = [138, 139, 140];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 131-133 ===\n');
  await processVerse(131);
  await processVerse(132);
  await processVerse(133);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V131-133 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
