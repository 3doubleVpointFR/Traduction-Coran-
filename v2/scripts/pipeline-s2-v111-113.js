const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 111, 112, 113
// V111: verse_id=118, analysis_id=474
// V112: verse_id=119, analysis_id=478
// V113: verse_id=120, analysis_id=482
// =====================================================

const verseData = {
  // =====================================================
  // VERSET 2:111
  // "Et ils ont dit: «Nul n'entrera au Paradis que Juifs
  //  ou Chretiens». Voila leurs chimeres. Dis: «Donnez
  //  votre preuve, si vous etes veridiques»."
  // =====================================================
  111: {
    verse_id: 118,
    analysis_id: 474,
    translation_arab: "Et ils ont dit : nul n'entrera dans le jardin sauf celui qui etait des guides ou des partisans. Voila leurs souhaits. Dis : donnez votre preuve, si vous etiez des gens de verite.",
    full_translation: "Et ils ont dit: «Nul n'entrera au Paradis que Juifs ou Chretiens». Voila leurs chimeres. Dis: «Donnez votre preuve, si vous etes veridiques».",
    translation_explanation: `§DEMARCHE§
Le verset commence par le verbe **qalu** (accompli 3MP de la racine q-w-l). Le Lane's donne : dire, enoncer, affirmer. L'accompli indique que la declaration a eu lieu — c'est un fait rapporte. Le pronom implicite « ils » renvoie aux groupes mentionnes dans les versets precedents. Le verbe **yadkhula** est un inaccompli 3MS de la racine d-kh-l avec negation future **lan**. Le Lane's donne : entrer, penetrer, acceder. L'inaccompli avec « lan » exprime une negation categorique du futur — ils affirment que personne n'entrera jamais. Le nom **al-jannata** est un nom feminin singulier defini accusatif de la racine j-n-n. Le Lane's donne : jardin, paradis, ce qui est couvert de vegetation. L'article defini (al-) designe LE jardin connu — le jardin promis. La particule d'exception **illa** (sauf) restreint l'acces a un groupe exclusif. Le pronom relatif **man** (celui qui) introduit la condition. Le verbe **kana** (accompli 3MS de k-w-n) est un verbe incomplet qui introduit un attribut. Le Lane's donne : etre, exister. Le mot **hudan** (accusatif indefini de h-w-d) designe les Juifs — etymologiquement, ceux qui reviennent (vers Dieu) ou les partisans de Hud. Le mot **nasara** (pluriel de n-s-r) designe les Chretiens — etymologiquement, les partisans, les soutiens. Le demonstratif **tilka** (celle-la, lointaine) pointe vers leurs declarations avec distance et dedain. Le mot **amaniyyuhum** est un pluriel feminin de la racine a-m-n avec pronom 3MP. Le Lane's donne : souhait, desir, ce qu'on espere sans fondement. Les souhaits sont des croyances sans preuve — des chimeres. L'imperatif **qul** (dis, 2MS de q-w-l) ordonne au Prophete de repondre. Le verbe **hatu** (imperatif 2MP de h-w-y) signifie : donnez, apportez. Le mot **burhanakum** (nom singulier accusatif de b-r-h-n avec pronom 2MP) designe la preuve, la demonstration. Le Lane's donne : preuve claire, evidence, argument decisif. Le verbe **kuntum** (accompli 2MP de k-w-n) introduit la condition. Le mot **sadiqin** (participe actif pluriel masculin accusatif de s-d-q) designe les gens de verite, ceux qui disent vrai. Le Lane's donne : veridique, sincere, vrai. Le verset oppose la declaration sans preuve (qalu, amaniyyuhum) a l'exigence de preuve (hatu burhanakum).

§JUSTIFICATION§
**ont dit** — Le sens retenu est « dire ». Le verbe qalu decrit une declaration collective. L'accompli marque que la declaration a ete faite.

**n'entrera** — Le sens retenu est « entrer ». Le verbe yadkhula avec la negation lan exprime l'impossibilite d'entrer. L'alternative « penetrer » est ecartee car « entrer » est plus courant en francais.

**le jardin** — Le sens retenu est « jardin ». Le mot al-janna designe le jardin promis — un lieu couvert de vegetation luxuriante. L'alternative « paradis » est ecartee car c'est un terme grec (paradeisos) qui ne rend pas l'etymologie arabe de couverture et de vegetation.

**celui qui** — Le pronom relatif man introduit la restriction. Le sens retenu est « celui qui » — une personne indefinie.

**etait** — Le sens retenu est « etre ». Le verbe kana est un verbe incomplet qui situe dans le passe un etat.

**guides** — Le sens retenu est « retour/guide ». Le mot hudan (de h-w-d) designe etymologiquement ceux qui reviennent. Ce terme est devenu le nom propre des Juifs.

**partisans** — Le sens retenu est « secourir ». Le mot nasara designe etymologiquement les partisans, les soutiens. Ce terme est devenu le nom propre des Chretiens.

**voila** — Le demonstratif tilka pointe vers les declarations precedentes avec distance. Le sens retenu est « celle-la ».

**leurs souhaits** — Le sens retenu est « souhaiter ». Le mot amaniyyuhum designe des souhaits sans fondement — des chimeres. L'alternative « securite » est ecartee car le contexte est le souhait, pas la securite.

**dis** — Le sens retenu est « dire ». L'imperatif qul ordonne au Prophete de repondre.

**donnez** — Le sens retenu est « tendre ». Le verbe hatu est un imperatif signifiant « apportez, donnez ». L'alternative « desir » est ecartee car le contexte est l'injonction de produire une preuve.

**votre preuve** — Le sens retenu est « preuve ». Le mot burhanakum designe la demonstration, l'evidence irrefutable.

**si vous etiez** — Le verbe kuntum introduit une condition irreelle.

**des gens de verite** — Le sens retenu est « vrai ». Le participe actif sadiqin designe ceux qui disent vrai. L'alternative « aumone » est ecartee car le contexte est la veracite, pas la charite.

§CRITIQUE§
Les traductions courantes utilisent « Paradis » la ou nous donnons « jardin ». Le mot arabe janna signifie etymologiquement un jardin couvert — le mot « paradis » vient du grec et ne rend pas cette image. De meme, « chimeres » (Hamidullah) est une interpretation : le mot amaniyy signifie « souhaits » — des desirs sans fondement, ce qui est plus precis que « chimeres ». Le mot nasara est traduit par « Chretiens » par convention, mais etymologiquement il designe des « partisans » ou « soutiens » — ceux qui portent secours.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "ils ont dit", pos: "verbe", phon: "qalu", arabic: "\u0642\u064e\u0627\u0644\u064f\u0648\u0627\u06df", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "ne... jamais", phon: "lan", arabic: "\u0644\u064e\u0646", is_particle: true, position: 2 },
      { fr: "entrera", pos: "verbe", phon: "yadkhula", arabic: "\u064a\u064e\u062f\u0652\u062e\u064f\u0644\u064e", word_key: "dxl", is_particle: false, sense_retenu: "entrer", position: 3 },
      { fr: "le jardin", pos: "nom", phon: "al-jannata", arabic: "\u0671\u0644\u0652\u062c\u064e\u0646\u0651\u064e\u0629\u064e", word_key: "jnn", is_particle: false, sense_retenu: "jardin", position: 4 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 5 },
      { fr: "celui qui", pos: "pronom", phon: "man", arabic: "\u0645\u064e\u0646", word_key: "man", is_particle: false, sense_retenu: "celui qui", position: 6 },
      { fr: "etait", pos: "verbe", phon: "kana", arabic: "\u0643\u064e\u0627\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 7 },
      { fr: "guides", pos: "nom", phon: "hudan", arabic: "\u0647\u064f\u0648\u062f\u064b\u0627", word_key: "hwd", is_particle: false, sense_retenu: "retour", position: 8 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064e\u0648\u0652", is_particle: true, position: 9 },
      { fr: "partisans", pos: "nom", phon: "nasara", arabic: "\u0646\u064e\u0635\u064e\u0640\u0670\u0631\u064e\u0649\u0670", word_key: "nsr", is_particle: false, sense_retenu: "secourir", position: 10 },
      { fr: "voila", pos: "demonstratif", phon: "tilka", arabic: "\u062a\u0650\u0644\u0652\u0643\u064e", word_key: "tlk", is_particle: false, sense_retenu: "celle-la", position: 11 },
      { fr: "leurs souhaits", pos: "nom", phon: "amaniyyuhum", arabic: "\u0623\u064e\u0645\u064e\u0627\u0646\u0650\u064a\u0651\u064f\u0647\u064f\u0645\u0652", word_key: "amn", is_particle: false, sense_retenu: "souhaiter", position: 12 },
      { fr: "dis", pos: "verbe", phon: "qul", arabic: "\u0642\u064f\u0644\u0652", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 13 },
      { fr: "donnez", pos: "verbe", phon: "hatu", arabic: "\u0647\u064e\u0627\u062a\u064f\u0648\u0627\u06df", word_key: "hwy", is_particle: false, sense_retenu: "tendre", position: 14 },
      { fr: "votre preuve", pos: "nom", phon: "burhanakum", arabic: "\u0628\u064f\u0631\u0652\u0647\u064e\u0640\u0670\u0646\u064e\u0643\u064f\u0645\u0652", word_key: "brhn", is_particle: false, sense_retenu: "preuve", position: 15 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 16 },
      { fr: "vous etiez", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064f\u0646\u062a\u064f\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 17 },
      { fr: "des gens de verite", pos: "participe", phon: "sadiqin", arabic: "\u0635\u064e\u0640\u0670\u062f\u0650\u0642\u0650\u064a\u0646\u064e", word_key: "sdq", is_particle: false, sense_retenu: "vrai", position: 18 }
    ],
    words: [
      // qwl pos=1 (qalu - ils ont dit)
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qalu est un accompli 3MP de la racine q-w-l. Le Lane's donne : dire, enoncer, affirmer, declarer. Le sens de parole est un acte social — enoncer devant autrui une position. Ici le pluriel (ils ont dit) montre que la declaration est collective : c'est un groupe qui affirme l'exclusivite de l'acces au jardin. L'accompli marque que la declaration a eu lieu. La distinction avec le sens d'opinion (nul) est que le verset rapporte un acte de parole public, pas une pensee interieure.",
              axe1_verset: "Le verbe qalu ouvre le verset en introduisant la declaration exclusive : nul n'entrera dans le jardin sauf Juifs ou Chretiens. Le champ lexical du verset tourne autour de la parole et de la preuve — ils disent (qalu), ce sont leurs souhaits (amaniyyuhum), dis (qul), donnez votre preuve (hatu burhanakum). Le verset oppose une parole sans preuve a l'exigence de preuve. Qalu est le debut de cette opposition — la declaration gratuite.",
              axe2_voisins: "Le verset 110 demandait d'accomplir la priere et de donner la purification. Le verset 111 rapporte une declaration d'exclusivite — apres les injonctions positives, le texte montre la pretention de certains groupes. Le verset 112 repondra que c'est celui qui soumet son etre a Dieu qui sera recompense. Le « ils ont dit » du verset 111 est la pretention que le verset 112 vient contredire.",
              axe3_sourate: "La racine q-w-l est une des plus frequentes de la sourate al-Baqarah. En 2:80, « ils ont dit : le Feu ne nous touchera que quelques jours ». En 2:91, « quand on leur dit : croyez a ce que Dieu a fait descendre ». La sourate rapporte de nombreuses declarations de pretention et de rejet. Le verset 111 s'inscrit dans cette serie de declarations pretentieuses qui sont ensuite dementies par le texte.",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran. Le schema « wa qalu » (et ils ont dit) est un procede coranique recurrent pour rapporter les pretentions des groupes — en 2:80, 2:111, 2:135, 3:24. Chaque fois, la pretention est suivie d'une refutation. Le Coran utilise cette structure pour montrer que les pretentions sans preuve n'ont aucune valeur.",
              axe5_frequence: "Pour la mission du khalifa, la parole engage. Dire sans preuve est une pretention vide. Le khalifa doit fonder ses declarations sur des preuves — la parole gratuite est le contraire de la mission de justice. Le verset enseigne que la parole doit etre soutenue par la demonstration, pas par le souhait."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion est hors sujet — le verbe qalu decrit un acte de parole public (ils ont dit), pas une reflexion interieure."
            },
            "Sens isolé/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: "Le sens de puissance est hors sujet — le contexte est la declaration verbale, pas la force."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: "Le sens de troupeau est hors sujet — le contexte est la declaration verbale."
            }
          }
        }
      },
      // dxl pos=3 (yadkhula - entrera)
      {
        word_key: "dxl", position: 3, sense_chosen: "entrer",
        analysis_axes: {
          sense_chosen: "entrer",
          concept_chosen: "Entrée/Pénétration",
          concepts: {
            "Entrée/Pénétration": {
              status: "retenu",
              senses: ["entrer", "penetrer", "acceder", "introduire"],
              proof_ctx: "Le verbe yadkhula est un inaccompli 3MS de la racine d-kh-l precede de la negation lan. Le Lane's donne : entrer, penetrer, acceder a un lieu. L'inaccompli avec lan exprime une negation categorique du futur — ils pretendent que personne n'entrera jamais dans le jardin. L'entree est un mouvement de l'exterieur vers l'interieur — passer une frontiere pour acceder a un espace. Ici l'espace est le jardin (al-janna). La distinction avec « revenu » (nul) est evidente : le contexte est l'acces a un lieu, pas une recette financiere.",
              axe1_verset: "Le verbe yadkhula est le verbe principal de la proposition rapportee — nul n'entrera dans le jardin. Le champ lexical (jardin, sauf, celui qui, etait) construit une pretention d'exclusivite. L'entree dans le jardin est conditionnee par l'appartenance ethnique ou communautaire selon eux. Le verset presente cette condition comme illegitime en la qualifiant de « souhait » (amaniyy). L'entree est l'enjeu central du verset — qui peut y acceder ?",
              axe2_voisins: "Le verset 112 repondra que c'est celui qui soumet son etre a Dieu qui aura sa recompense. L'entree dans le jardin n'est pas conditionnee par l'ethnie mais par la soumission et l'excellence. Le verset 111 pose la fausse condition, le verset 112 pose la vraie. La fausse condition est l'identite communautaire, la vraie est la soumission volontaire.",
              axe3_sourate: "La racine d-kh-l apparait dans la sourate al-Baqarah dans plusieurs contextes. En 2:58, « entrez dans cette cite ». En 2:208, « entrez dans la paix ». La sourate utilise l'entree comme metaphore de l'engagement — entrer dans un espace c'est s'engager dans ce qu'il represente. Entrer dans le jardin est l'aboutissement de la mission.",
              axe4_coherence: "La racine d-kh-l apparait environ 126 fois dans le Coran. Le theme de l'entree dans le jardin est central — en 4:124, « celui qui fait les bonnes oeuvres, homme ou femme, et qui est croyant, ceux-la entreront dans le jardin ». Le Coran conditionne l'entree par la foi et les actes, jamais par l'ethnie. Le verset 111 est la pretention que le Coran rejette systematiquement.",
              axe5_frequence: "Pour la mission du khalifa, l'entree dans le jardin est la recompense de la mission accomplie. Pretendre que l'acces est reserve a un groupe ethnique ou communautaire contredit la mission universelle du khalifa. La mission est ouverte a tous — l'exclusivite ethnique est une negation de la justice universelle."
            },
            "Ressource": {
              status: "nul",
              senses: ["revenu"],
              proof_ctx: "Le sens de revenu est hors sujet — le contexte est l'entree dans un lieu (le jardin), pas une ressource financiere."
            }
          }
        }
      },
      // jnn pos=4 (al-jannata - le jardin)
      {
        word_key: "jnn", position: 4, sense_chosen: "jardin",
        analysis_axes: {
          sense_chosen: "jardin",
          concept_chosen: "Jardin/Paradis",
          concepts: {
            "Jardin/Paradis": {
              status: "retenu",
              senses: ["jardin", "paradis"],
              proof_ctx: "Le mot al-jannata est un nom feminin singulier defini accusatif de la racine j-n-n. Le Lane's donne : jardin couvert de vegetation, paradis. La racine j-n-n porte le sens de couvrir, cacher — le jardin est un lieu couvert par la vegetation, protege du regard. L'article defini (al-) designe LE jardin connu — le jardin promis comme recompense. La distinction philosophique avec la dissimulation (probable) est que le jardin est le resultat de la couverture vegetale — la couverture est le processus, le jardin est le produit.",
              axe1_verset: "Le mot al-janna est l'objet de la pretention — c'est l'acces au jardin que les groupes revendiquent en exclusivite. Le champ lexical (entrer, sauf, celui qui) montre que le jardin est l'enjeu de la dispute. Le verset presente le jardin comme un lieu dont l'acces est conteste. La pretention d'exclusivite est le coeur du probleme — qui a le droit d'entrer dans le jardin ?",
              axe2_voisins: "Le verset 112 repondra que la recompense (ajr) est aupres de son Seigneur pour celui qui soumet son etre. Le jardin du verset 111 et la recompense du verset 112 sont lies — la recompense est l'acces au jardin, mais la condition n'est pas l'ethnie. Le verset 113 montrera que les groupes se disqualifient mutuellement — chacun pretend que l'autre n'a rien.",
              axe3_sourate: "La racine j-n-n apparait frequemment dans la sourate al-Baqarah. En 2:25, « annonce a ceux qui croient et font le bien qu'ils auront des jardins ». En 2:35, « habite le jardin, toi et ton epouse ». La sourate utilise le jardin comme la promesse divine pour ceux qui croient et agissent bien — l'acces n'est jamais conditionne par l'ethnie.",
              axe4_coherence: "La racine j-n-n apparait environ 200 fois dans le Coran. Le jardin est la recompense promise aux croyants qui font le bien — en 3:133, « hatez-vous vers un jardin aussi vaste que les cieux et la terre ». Le Coran ne conditionne jamais l'acces au jardin par l'appartenance ethnique. La pretention du verset 111 est donc en contradiction avec le message coranique global.",
              axe5_frequence: "Pour la mission du khalifa, le jardin est la recompense de la mission accomplie. Pretendre que le jardin est reserve a un groupe ethnique c'est confisquer la recompense de la mission. Le khalifa doit savoir que la recompense est universelle — elle depend des actes et de la soumission, pas de l'identite."
            },
            "Dissimulation/Couverture": {
              status: "probable",
              senses: ["cacher", "couvrir"],
              proof_ctx: "Le sens de couverture est le sens etymologique premier de j-n-n — couvrir, cacher. La distinction philosophique avec le jardin est que la couverture est le processus originel (la vegetation qui couvre), tandis que le jardin est le resultat concret (le lieu couvert). Le mot al-janna dans ce verset designe le lieu (le jardin), pas le processus (la couverture). Cependant, le sens de couverture eclaire l'etymologie : le jardin est un lieu de protection, de couverture, de refuge.",
              axe1_verset: "Le sens de couverture pourrait theoriquement s'appliquer — le jardin est un lieu qui couvre et protege ses habitants. Mais le verset parle d'entrer dans un lieu (yadkhula al-jannata), pas d'etre couvert. Le sens spatial de jardin est plus coherent avec le verbe d'entree. On entre dans un jardin, on n'entre pas dans une couverture.",
              axe2_voisins: "Le verset 112 parle de recompense (ajr) aupres du Seigneur — la recompense est un lieu ou un etat. Le contexte des versets voisins confirme que le jardin est un lieu concret de recompense, pas un processus de dissimulation.",
              axe3_sourate: "La sourate al-Baqarah utilise janna principalement comme lieu de recompense. En 2:25, « des jardins sous lesquels coulent les rivieres ». Le jardin est decrit comme un lieu physique avec des caracteristiques spatiales — pas comme un concept abstrait de couverture.",
              axe4_coherence: "Le Coran utilise la racine j-n-n dans ses deux sens : le jardin (lieu) et la dissimulation (processus). Le mot janna (jardin) est distinct du mot junna (bouclier, couverture). Le contexte determine le sens — ici c'est le lieu promis.",
              axe5_frequence: "La couverture est un aspect de la protection divine — le jardin couvre et protege. Mais dans la mission du khalifa, c'est le jardin comme lieu de recompense qui est l'enjeu, pas le processus de couverture."
            },
            "Êtres cachés": {
              status: "nul",
              senses: ["djinn"],
              proof_ctx: "Le sens de djinn est hors sujet — le mot est al-janna (le jardin), pas al-jinn (les djinns). Les deux mots partagent la meme racine mais le contexte est clairement le jardin."
            },
            "Sens isolé/Folie": {
              status: "nul",
              senses: ["folie"],
              proof_ctx: "Le sens de folie (junun) est hors sujet — le mot est le jardin, pas la folie."
            },
            "Sens isolé/Bouclier": {
              status: "nul",
              senses: ["bouclier"],
              proof_ctx: "Le sens de bouclier (junna) est hors sujet — le contexte est le lieu de recompense."
            },
            "Sens isolé/Embryon": {
              status: "nul",
              senses: ["embryon"],
              proof_ctx: "Le sens d'embryon (janin) est hors sujet — le contexte est le jardin de recompense."
            }
          }
        }
      },
      // kwn pos=7 (kana - etait)
      {
        word_key: "kwn", position: 7, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kana est un accompli 3MS de la racine k-w-n. Le Lane's donne : etre, exister. Kana est un verbe incomplet qui situe un etat dans le passe ou dans un temps revolu. Ici « man kana hudan aw nasara » (celui qui etait guides ou partisans) exprime une condition d'identite — etre d'un groupe donne. L'accompli avec kana ne designe pas un evenement passe ponctuel mais un etat permanent — etre tel ou tel par nature.",
              axe1_verset: "Le verbe kana introduit la condition de la pretention : seul celui qui EST (par nature) de tel groupe entrera. Le champ lexical (nul, sauf, celui qui, etait, guides, partisans) construit une restriction basee sur l'identite. Kana situe cette identite comme un etat permanent — pas une action volontaire mais une appartenance inherente. Le verset oppose cette conception statique (etre par nature) a la conception dynamique du verset 112 (soumettre activement).",
              axe2_voisins: "Le verset 112 utilisera le verbe aslama (soumettre) — un accompli qui decrit un acte volontaire. L'opposition entre kana (etre par etat) et aslama (agir par choix) est le coeur du passage. Etre d'un groupe par naissance vs choisir de soumettre son etre — deux conceptions radicalement differentes.",
              axe3_sourate: "Le verbe kana apparait tres frequemment dans la sourate al-Baqarah. En 2:34, « il etait des refuseurs ». En 2:91, « ils avaient ete ». La sourate utilise kana pour decrire des etats permanents — positifs ou negatifs. Le verset 111 montre un usage contestable de kana : l'identite communautaire comme condition d'acces.",
              axe4_coherence: "Le verbe kana apparait plus de 1350 fois dans le Coran. Il structure les descriptions d'etats et de conditions. En 2:111, kana sert a poser une condition d'identite statique que le Coran rejette au profit d'une condition d'action dynamique. Le Coran enseigne que l'etat utile est celui qu'on choisit, pas celui dans lequel on nait.",
              axe5_frequence: "Pour la mission du khalifa, la distinction entre etre par etat et agir par choix est fondamentale. La mission ne s'herite pas — elle se choisit et s'accomplit activement. Etre d'un groupe ne donne aucun avantage si l'on ne soumet pas son etre a la mission."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — kana est ici un verbe incomplet introduisant un attribut d'identite."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Le sens de lieu est hors sujet — kana est ici un verbe copule, pas un nom de lieu."
            }
          }
        }
      },
      // hwd pos=8 (hudan - guides/Juifs)
      {
        word_key: "hwd", position: 8, sense_chosen: "retour",
        analysis_axes: {
          sense_chosen: "retour",
          concept_chosen: "Judaïsme/Retour",
          concepts: {
            "Judaïsme/Retour": {
              status: "retenu",
              senses: ["juifs", "retourner", "prophete Hud"],
              proof_ctx: "Le mot hudan est un nom masculin accusatif indefini de la racine h-w-d. Le Lane's donne : Juifs (ceux qui suivent la religion de Moise), retourner (a Dieu), le prophete Hud. La racine porte le sens de retour — les Juifs sont etymologiquement ceux qui reviennent (a Dieu). Le mot est au singulier collectif utilise comme attribut de kana — « celui qui etait hudan ». Le verset rapporte la pretention des deux groupes : seuls les Juifs et les Chretiens entreront.",
              axe1_verset: "Le mot hudan est le premier des deux groupes qui pretendent avoir l'exclusivite du jardin. Le champ lexical (nul n'entrera, sauf, guides ou partisans) montre que le verset rapporte une pretention d'exclusivite ethnique ou communautaire. Le mot hudan dans ce verset n'est pas un compliment — c'est le nom d'un groupe qui pretend monopoliser l'acces au jardin. Le verset qualifie cette pretention de « souhait » (amaniyy) — un desir sans fondement.",
              axe2_voisins: "Le verset 112 repond que la recompense est pour celui qui soumet son etre a Dieu tout en faisant le bien — sans condition ethnique. Le verset 113 montrera que les Juifs et les Chretiens se disqualifient mutuellement. Les versets voisins deconstruisent la pretention du verset 111 en montrant qu'elle est contradictoire et sans fondement.",
              axe3_sourate: "La racine h-w-d apparait dans la sourate al-Baqarah pour designer les Juifs. En 2:62, « ceux qui croient, ceux qui sont devenus juifs, les chretiens et les sabeens — quiconque croit en Dieu et au dernier jour et fait le bien aura sa recompense ». La sourate pose la meme reponse que le verset 112 : la condition est la foi et les actes, pas l'identite.",
              axe4_coherence: "La racine h-w-d apparait environ 10 fois dans le Coran. En 7:156, « nous nous sommes retournes vers Toi ». Le sens de retour eclaire l'usage : les Juifs sont ceux qui reviennent a Dieu. Mais le Coran montre que le retour doit etre sincere et accompagne d'actes — pas une simple etiquette communautaire.",
              axe5_frequence: "Pour la mission du khalifa, l'identite communautaire ne suffit pas. Le retour a Dieu (sens etymologique de h-w-d) doit etre un acte sincere et permanent, pas une etiquette heritee. Le khalifa juge par les actes, pas par les etiquettes."
            }
          }
        }
      },
      // nsr pos=10 (nasara - Chretiens/partisans)
      {
        word_key: "nsr", position: 10, sense_chosen: "secourir",
        analysis_axes: {
          sense_chosen: "secourir",
          concept_chosen: "Secours/Victoire",
          concepts: {
            "Secours/Victoire": {
              status: "retenu",
              senses: ["secourir", "aider", "victoire", "defendre"],
              proof_ctx: "Le mot nasara est un nom pluriel de la racine n-s-r. Le Lane's donne : Chretiens, partisans, ceux qui portent secours. La racine n-s-r porte le sens de secourir, aider, defendre. Les Chretiens sont etymologiquement les « partisans » — ceux qui soutiennent et portent secours. Le mot est au pluriel et coordonne avec hudan par la particule aw (ou) — les deux groupes pretendent avoir l'exclusivite.",
              axe1_verset: "Le mot nasara est le second groupe qui pretend monopoliser l'acces au jardin. Le champ lexical (guides ou partisans, voila leurs souhaits) montre que les deux groupes sont mis sur le meme plan — ils partagent la meme pretention. Le verset ne prend parti pour aucun des deux — il les met ensemble dans la meme erreur de pretention sans preuve.",
              axe2_voisins: "Le verset 113 montrera que les Chretiens disent que les Juifs ne tiennent sur rien, et vice versa. Les deux groupes se rejettent mutuellement tout en partageant la meme pretention. Les versets voisins deconstruisent la pretention en montrant la contradiction interne des deux groupes.",
              axe3_sourate: "La racine n-s-r apparait dans la sourate al-Baqarah dans plusieurs contextes. En 2:62, les Chretiens (nasara) sont mentionnes aux cotes des Juifs et des croyants — la condition est la foi et les actes. En 2:120, « les Juifs et les Chretiens ne seront jamais contents de toi ». La sourate montre que l'identite communautaire ne suffit pas.",
              axe4_coherence: "La racine n-s-r apparait environ 160 fois dans le Coran. Le mot nasara (Chretiens) vient de nasr (secours, soutien). En 3:52, les disciples de Jesus disent : « nous sommes les partisans (ansar) de Dieu ». Le Coran rappelle que le vrai soutien est celui qu'on apporte a la cause divine, pas une etiquette heritee.",
              axe5_frequence: "Pour la mission du khalifa, le secours est un acte actif — on soutient la cause de la verite par des actes. L'etiquette de « partisan » ne suffit pas — il faut effectivement porter secours. Le khalifa reconnait les soutiens par leurs actes, pas par leurs etiquettes."
            },
            "Alliance/Soutien": {
              status: "nul",
              senses: ["partisan"],
              proof_ctx: "Le sens de partisan est engobe par le sens retenu de secours — le partisan est celui qui secourt. Le mot nasara est ici un nom propre designant les Chretiens."
            }
          }
        }
      },
      // amn pos=12 (amaniyyuhum - leurs souhaits)
      {
        word_key: "amn", position: 12, sense_chosen: "souhaiter",
        analysis_axes: {
          sense_chosen: "souhaiter",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "Le mot amaniyyuhum est un pluriel feminin de la racine a-m-n avec pronom suffixe 3MP. Le Lane's donne le sens de umniyya : souhait, desir, espoir sans fondement. Cependant, la racine a-m-n porte aussi le sens de foi et de croyance. Le mot amaniyy derive du sens de « ce qu'on tient pour vrai sans verification » — un souhait est une croyance non fondee. La distinction philosophique avec la securite (probable) est que le souhait est une projection interieure vers le futur, tandis que la securite est un etat present. Ici, les souhaits sont des croyances sans preuve — les groupes croient qu'ils ont l'exclusivite du jardin sans pouvoir le demontrer.",
              axe1_verset: "Le mot amaniyyuhum est le jugement du verset sur la declaration des groupes — ce ne sont que des souhaits. Le champ lexical oppose la declaration (qalu) aux souhaits (amaniyyuhum) et a la preuve (burhan). Le verset structure une echelle : la parole sans preuve n'est qu'un souhait. L'exigence de preuve (hatu burhanakum) vient demasquer le souhait comme une croyance vide.",
              axe2_voisins: "Le verset 110 parlait d'accomplir la priere et de donner la purification — des actes concrets. Le verset 111 oppose ces actes concrets aux souhaits sans fondement. Le verset 112 posera la condition reelle : soumettre son etre et faire le bien. Les souhaits du verset 111 sont le contraire des actes des versets 110 et 112.",
              axe3_sourate: "La racine a-m-n apparait tres frequemment dans la sourate al-Baqarah. En 2:78, « ils ne font que conjecturer ». En 2:111, ils n'ont que des souhaits. La sourate oppose la foi fondee (iman) aux souhaits non fondes (amaniyy). La foi veritable s'accompagne de preuves et d'actes — le souhait n'est qu'un desir vide.",
              axe4_coherence: "La racine a-m-n apparait environ 880 fois dans le Coran. Le mot amaniyy (souhaits) est distinct de iman (foi) bien qu'ils partagent la meme racine. En 4:123, « ce n'est pas selon vos souhaits ni selon les souhaits des gens du Livre ». Le Coran oppose systematiquement les souhaits aux actes reels.",
              axe5_frequence: "Pour la mission du khalifa, les souhaits sans actes sont vains. La mission exige des preuves et des actes, pas des pretentions. Le khalifa doit distinguer les souhaits (projections vides) de la foi veritable (engagement concret). La preuve est l'outil qui separe le souhait de la realite."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["etre en securite", "se sentir en securite", "faire confiance", "confier", "fidele", "lieu sur"],
              proof_ctx: "Le sens de securite est le sens premier de a-m-n — etre en securite, se sentir protege. La distinction philosophique avec le souhait est que la securite est un etat reel et present, tandis que le souhait est une projection vers le futur sans fondement. Le mot amaniyy derive du meme champ semantique mais avec une deviation : le souhait est une fausse securite — on se rassure en croyant sans preuve. Le contexte du verset est clairement le souhait (pretention sans preuve), pas la securite objective.",
              axe1_verset: "Le sens de securite pourrait theoriquement s'appliquer — les groupes se sentent en securite dans leur pretention. Mais le verset qualifie clairement leurs declarations de « souhaits » (tilka amaniyyuhum), pas de securite. Le demonstratif tilka (celle-la, lointaine) marque la distance et le dedain — ce sont des souhaits lointains de la realite.",
              axe2_voisins: "Le verset 112 promet la recompense a celui qui fait le bien — la securite reelle est dans la soumission et l'action. Le verset 111 montre une fausse securite fondee sur des souhaits. La securite veritable est celle du verset 112 (ni crainte ni tristesse), pas la pretention du verset 111.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine a-m-n dans ses deux sens : la foi (iman) et la securite (amn). En 2:125, « un lieu sur » (aminan). Le sens de securite est present mais le verset 111 utilise le derive « souhait » (umniyya), pas le sens de securite directe.",
              axe4_coherence: "Le Coran distingue la securite reelle (fondee sur la foi et les actes) de la fausse securite (fondee sur les souhaits). En 7:99, « se sentent-ils a l'abri du plan de Dieu ? ». La fausse securite est un theme coranique recurrent.",
              axe5_frequence: "La securite veritable dans la mission du khalifa vient de l'engagement sincere, pas des souhaits. La fausse securite des pretentions communautaires est un obstacle a la mission."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["proteger", "accorder la securite"],
              proof_ctx: "Le sens de protection est hors sujet — le mot est amaniyy (souhaits), pas aman (protection)."
            },
            "Sens isolé/Amen": {
              status: "nul",
              senses: ["amen"],
              proof_ctx: "Le sens d'amen est hors sujet — le contexte est les souhaits sans fondement."
            }
          }
        }
      },
      // qwl pos=13 (qul - dis)
      {
        word_key: "qwl", position: 13, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Deuxieme occurrence de q-w-l dans le verset — ici a l'imperatif 2MS (qul). Le Lane's donne : dire, enoncer. L'imperatif ordonne au Prophete de repondre a la pretention. Le contraste entre qalu (ils ont dit — pretention sans preuve) et qul (dis — exigence de preuve) structure le verset. La parole du Prophete est une parole de defi : donnez votre preuve.",
              axe1_verset: "Le verbe qul est le pivot du verset — il marque le passage de la pretention a la refutation. Avant qul, le verset rapporte la pretention. Apres qul, le verset exige la preuve. Le champ lexical bascule de la declaration gratuite a l'exigence de demonstration. Qul est l'injonction divine qui transforme la pretention en debat.",
              axe2_voisins: "Le verset 112 commencera par bala (bien au contraire) — la reponse divine qui suit l'ordre de dire. Le qul du verset 111 ouvre le debat, le bala du verset 112 apporte la reponse. La structure est : pretention (qalu) → defi (qul) → reponse (bala).",
              axe3_sourate: "L'imperatif qul est un procede recurrent dans la sourate al-Baqarah. En 2:80, apres une pretention, le texte dit « dis ». En 2:135, « dis : plutot, suivez la religion d'Ibrahim ». La sourate utilise qul pour structurer le dialogue entre la pretention et la verite.",
              axe4_coherence: "L'imperatif qul apparait 332 fois dans le Coran. C'est un outil de dialogue — Dieu ordonne au Prophete de repondre aux pretentions et aux questions. Le qul coranique est toujours suivi d'une verite ou d'un defi — jamais d'une concession aux pretentions fausses.",
              axe5_frequence: "Pour la mission du khalifa, le qul est l'outil de la verite. Le khalifa doit dire la verite face aux pretentions — l'exigence de preuve est un acte de justice. La mission ne tolere pas les pretentions non fondees."
            }
          }
        }
      },
      // hwy pos=14 (hatu - donnez)
      {
        word_key: "hwy", position: 14, sense_chosen: "tendre",
        analysis_axes: {
          sense_chosen: "tendre",
          concept_chosen: "Passion/Désir",
          concepts: {
            "Passion/Désir": {
              status: "retenu",
              senses: ["desir", "passion"],
              proof_ctx: "Le verbe hatu est un imperatif 2MP souvent rattache a la racine h-w-y. Le Lane's mentionne que hata/hati signifie : tendre la main pour donner, presenter, apporter. L'imperatif hatu ordonne aux pretendants d'apporter leur preuve — de tendre ce qu'ils ont comme argument. La racine h-w-y porte aussi le sens de desir et de passion, mais dans ce contexte specifique, c'est l'acte de tendre, de presenter qui est en jeu. Le verbe est un imperatif — il y a urgence a produire la preuve.",
              axe1_verset: "Le verbe hatu est l'acte central de la refutation — donnez votre preuve. Le champ lexical (dis, donnez, preuve, veridiques) construit une exigence de demonstration. Hatu est un defi : si vous pretendez, montrez. Le verset oppose la pretention gratuite (qalu) a l'exigence de demonstration (hatu burhanakum). Le verbe est direct et sans concession.",
              axe2_voisins: "Le verset 112 donnera la reponse — la condition reelle d'acces au jardin. Le verset 111 demande la preuve, le verset 112 la fournit. Hatu est le pont entre la pretention et la verite — l'exigence de preuve force le passage de l'un a l'autre.",
              axe3_sourate: "Le verbe hatu apparait rarement dans le Coran — en 2:111 et en 27:64 (« apportez votre preuve si vous etes veridiques »). Ce defi est un procede coranique specifique pour demasquer les pretentions sans fondement. La sourate l'utilise ici pour montrer que la pretention d'exclusivite est vide.",
              axe4_coherence: "Le verbe hatu n'apparait que deux fois dans le Coran — en 2:111 et 27:64. Les deux fois, il est suivi de burhanakum (votre preuve) et de in kuntum sadiqin (si vous etes veridiques). C'est une formule fixe de defi coranique. Le Coran utilise cette formule pour exiger la demonstration la ou il y a pretention sans fondement.",
              axe5_frequence: "Pour la mission du khalifa, l'exigence de preuve est un pilier de la justice. Le khalifa ne peut accepter les pretentions sans demonstration. Hatu est l'outil de la mission — exiger la preuve avant d'accepter la pretention."
            },
            "Chute/Descente": {
              status: "nul",
              senses: ["tomber", "faire tomber"],
              proof_ctx: "Le sens de chute est hors sujet — le verbe hatu est un imperatif signifiant donnez/apportez, pas un verbe de chute."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["tendre la main"],
              proof_ctx: "Le sens de tendre la main est un sens connexe mais trop physique — le contexte est l'exigence de preuve intellectuelle, pas un geste physique."
            }
          }
        }
      },
      // brhn pos=15 (burhanakum - votre preuve)
      {
        word_key: "brhn", position: 15, sense_chosen: "preuve",
        analysis_axes: {
          sense_chosen: "preuve",
          concept_chosen: "Démonstration/Évidence",
          concepts: {
            "Démonstration/Évidence": {
              status: "retenu",
              senses: ["preuve", "demonstration", "argument"],
              proof_ctx: "Le mot burhanakum est un nom masculin singulier accusatif de la racine b-r-h-n avec pronom suffixe 2MP. Le Lane's donne : preuve claire, evidence irrefutable, argument decisif. Le burhan est une preuve qui tranche le doute — pas un indice ou une suggestion, mais une demonstration irrefutable. Le pronom suffixe -kum (votre) renvoie aux pretendants — c'est LEUR preuve qu'on leur demande. Le verset exige qu'ils produisent eux-memes la demonstration de leur pretention.",
              axe1_verset: "Le mot burhanakum est le sommet de l'exigence du verset — donnez votre preuve. Le champ lexical oppose la pretention (qalu, amaniyy) a la preuve (burhan). Le verset construit une hierarchie : la parole sans preuve est un souhait, seule la preuve donne de la valeur a la parole. Le burhan est l'outil qui separe la pretention de la verite.",
              axe2_voisins: "Le verset 112 fournit la reponse divine — la condition reelle est la soumission et l'excellence, pas l'identite communautaire. Le burhan exige au verset 111 est fourni au verset 112. La preuve est que l'acces depend des actes, pas de l'ethnie.",
              axe3_sourate: "La racine b-r-h-n apparait rarement dans la sourate al-Baqarah — elle est reservee aux moments de defi majeur. Le verset 111 est un de ces moments. La sourate utilise le burhan pour marquer que certaines pretentions sont tellement graves qu'elles exigent une preuve irrefutable.",
              axe4_coherence: "La racine b-r-h-n apparait 8 fois dans le Coran. En 4:174, « une preuve (burhan) de votre Seigneur est venue vers vous ». En 23:117, « celui qui invoque une autre divinite sans preuve (burhan) ». Le Coran conditionne toute pretention majeure a la production d'un burhan. Sans preuve, la pretention est nulle.",
              axe5_frequence: "Pour la mission du khalifa, la preuve est le fondement de la justice. Le khalifa ne peut juger sans preuve. Le burhan est l'outil qui distingue la verite du souhait. La mission exige que chaque pretention soit soutenue par une demonstration claire."
            }
          }
        }
      },
      // kwn pos=17 (kuntum - vous etiez)
      {
        word_key: "kwn", position: 17, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Deuxieme occurrence de k-w-n dans le verset — ici a l'accompli 2MP (kuntum). Le Lane's donne : etre, exister. Kuntum est un verbe incomplet introduisant l'attribut sadiqin (veridiques). La condition « in kuntum sadiqin » (si vous etiez veridiques) est une condition irreelle — le texte sous-entend qu'ils ne sont pas veridiques. Memes analyses que la premiere occurrence en position 7.",
              axe1_verset: "Le verbe kuntum ferme le verset avec une condition qui remet en question la veracite des pretendants. Si vous etiez veridiques — sous-entendu, vous ne l'etes pas. Le verset commence par leur declaration (qalu) et finit par la mise en doute de leur sincerite (in kuntum sadiqin). La boucle est fermee.",
              axe2_voisins: "Le verset 112 repondra avec la condition reelle — soumettre son etre a Dieu. La fausse condition du verset 111 (si vous etiez veridiques) est remplacee par la vraie condition du verset 112 (quiconque soumet son etre). Le passage de la condition irreelle a la condition reelle structure les versets.",
              axe3_sourate: "La formule « in kuntum sadiqin » apparait plusieurs fois dans la sourate. En 2:94, « si la derniere demeure aupres de Dieu est pour vous seuls — alors souhaitez la mort, si vous etes veridiques ». La sourate utilise cette formule comme defi recurrent.",
              axe4_coherence: "La formule « in kuntum sadiqin » apparait environ 14 fois dans le Coran. Elle est toujours un defi — prouvez votre pretention par un acte ou une preuve. Le Coran n'accepte pas les pretentions gratuites.",
              axe5_frequence: "La condition de veracite est un outil de la mission du khalifa — celui qui pretend doit prouver. La mission exige la verite, pas les souhaits."
            }
          }
        }
      },
      // sdq pos=18 (sadiqin - veridiques)
      {
        word_key: "sdq", position: 18, sense_chosen: "vrai",
        analysis_axes: {
          sense_chosen: "vrai",
          concept_chosen: "Vérité/Sincérité",
          concepts: {
            "Vérité/Sincérité": {
              status: "retenu",
              senses: ["dire vrai", "vrai", "sincere", "confirmer"],
              proof_ctx: "Le mot sadiqin est un participe actif pluriel masculin accusatif de la racine s-d-q. Le Lane's donne : veridique, celui qui dit vrai, sincere. Le participe actif indique un etat permanent — etre veridique par nature, pas juste dire vrai une fois. Le pluriel masculin au cas accusatif est l'attribut de kuntum (si vous etiez veridiques). La condition « in kuntum sadiqin » met en doute leur veracite permanente — s'ils etaient vraiment des gens de verite, ils pourraient prouver leur pretention.",
              axe1_verset: "Le mot sadiqin ferme le verset en posant la condition ultime : la veracite. Le champ lexical oppose la pretention (qalu), les souhaits (amaniyy), la preuve (burhan) et la veracite (sadiqin). Le verset construit une chaine : parole → souhait → preuve → verite. La veracite est le test final — sans preuve, la veracite est absente.",
              axe2_voisins: "Le verset 112 utilise la racine s-l-m (soumettre) comme condition. Le verset 111 pose la veracite comme condition. Les deux conditions se completent : etre veridique (111) et soumettre son etre (112). La veracite sans soumission est vide, la soumission sans veracite est aveugle.",
              axe3_sourate: "La racine s-d-q apparait dans la sourate al-Baqarah dans le contexte de la sincerite et de la confirmation. En 2:177, « ceux qui tiennent parole quand ils s'engagent ». La sourate insiste sur la coherence entre la parole et l'acte — les veridiques sont ceux dont la parole correspond a la realite.",
              axe4_coherence: "La racine s-d-q apparait environ 155 fois dans le Coran. Le participe actif sadiq designe ceux qui sont authentiquement dans la verite. En 9:119, « soyez avec les veridiques ». Le Coran fait de la veracite un pilier de la foi — sans veracite, il n'y a pas de foi veritable.",
              axe5_frequence: "Pour la mission du khalifa, la veracite est le fondement. Le khalifa doit etre veridique et exiger la veracite des autres. La mission ne peut s'accomplir dans le mensonge ou la pretention. La veracite est la premiere qualite du khalifa."
            },
            "Amitié": {
              status: "nul",
              senses: ["ami sincere"],
              proof_ctx: "Le sens d'amitie est hors sujet — le contexte est la veracite des pretentions, pas l'amitie."
            },
            "Don/Aumône": {
              status: "nul",
              senses: ["aumone", "dot"],
              proof_ctx: "Le sens d'aumone est hors sujet — le mot est un participe actif qualifiant la veracite, pas un nom designant l'aumone."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:112
  // "Non, mais quiconque soumet a Allah son etre tout en
  //  faisant le bien, aura sa retribution aupres de son
  //  Seigneur. Pour eux, nulle crainte, et ils ne seront
  //  point attristes."
  // =====================================================
  112: {
    verse_id: 119,
    analysis_id: 478,
    translation_arab: "Au contraire, quiconque a soumis son etre entierement pour Dieu et il est un faiseur de bien, alors il a sa retribution aupres de celui qui l'eleve, et pas de crainte sur eux, et eux ne s'attristent pas.",
    full_translation: "Non, mais quiconque soumet a Allah son etre tout en faisant le bien, aura sa retribution aupres de son Seigneur. Pour eux, nulle crainte, et ils ne seront point attristes.",
    translation_explanation: `§DEMARCHE§
Le verset commence par la particule **bala** (au contraire, oui certes) qui rejette la pretention du verset 111. Le Lane's classe bala comme une particule de refutation — elle nie la negation precedente. Ici bala refute l'exclusivite communautaire. Le pronom relatif **man** (quiconque) ouvre la condition universelle — man est indefini, il inclut tout le monde sans distinction. Le verbe **aslama** est un accompli 3MS de la forme IV de la racine s-l-m. Le Lane's donne : soumettre, livrer, remettre entierement. La forme IV (af'ala) est causative — faire que quelque chose soit en etat de salm (integrite). Le complement **wajhahu** est un nom masculin singulier accusatif de la racine w-j-h avec pronom 3MS. Le Lane's donne : visage, face, direction, etre entier. Le visage represente l'etre tout entier — soumettre son visage c'est soumettre tout son etre, toute sa direction. La preposition **lillahi** (pour Dieu) indique la destination de la soumission. Le pronom **huwa** (il) est un pronom sujet emphatique. Le participe actif **muhsinun** est de la forme IV de la racine h-s-n. Le Lane's donne : faire le bien, exceller, agir avec excellence. Le muhsin est celui qui fait le bien activement et constamment — le participe actif indique un etat permanent. La particule de consequence **fa** (donc) introduit le resultat. Le nom **ajruhu** est un nom masculin singulier nominatif de la racine a-j-r avec pronom 3MS. Le Lane's donne : retribution, salaire, recompense. La retribution est ce qu'on recoit en echange d'un acte. La preposition **'inda** (aupres de) situe la retribution aupres du Seigneur. Le nom **rabbihi** est de la racine r-b-b avec pronom 3MS. Le Lane's donne : seigneur, maitre, celui qui eleve. Le rabb est celui qui prend en charge, eleve et fait grandir. Le verset se termine par une double negation : **la khawfun 'alayhim** (pas de crainte sur eux) et **la hum yahzanuna** (eux ne s'attristent pas). Le nom **khawfun** est de la racine kh-w-f. Le Lane's donne : crainte, apprehension, peur. Le verbe **yahzanuna** est un inaccompli 3MP de la racine h-z-n. Le Lane's donne : etre triste, s'attrister. La double negation (ni crainte ni tristesse) est une formule coranique recurrente qui decrit l'etat de paix totale.

§JUSTIFICATION§
**au contraire** — La particule bala rejette la pretention precedente. Le sens retenu est « non, au contraire ».

**quiconque** — Le pronom relatif man est universel. Le sens retenu est « celui qui » — sans distinction d'ethnie ou de communaute.

**a soumis** — Le sens retenu est « sain et sauf/integrite ». Le verbe aslama a la forme IV signifie remettre entierement, soumettre. L'alternative « paix » est ecartee car la forme IV est causative — c'est l'acte de remettre en etat d'integrite, pas l'etat de paix lui-meme.

**son etre** — Le sens retenu est « visage ». Le mot wajhahu designe le visage, l'etre entier. L'alternative « direction » est ecartee car le contexte est la soumission de l'etre entier, pas le changement de direction.

**faiseur de bien** — Le sens retenu est « excellence ». Le participe actif muhsinun designe celui qui fait le bien avec excellence. L'alternative « beaute » est ecartee car le contexte est l'action morale, pas l'esthetique.

**retribution** — Le sens retenu est « retribution ». Le mot ajruhu designe la retribution meritee. L'alternative « dot » est ecartee car le contexte est la recompense divine.

**celui qui l'eleve** — Le sens retenu est « seigneur ». Le mot rabbihi designe le seigneur, celui qui eleve. L'alternative « usure » est ecartee car le contexte est la relation de seigneurie.

**crainte** — Le sens retenu est « crainte ». Le mot khawfun designe la peur, l'apprehension du futur.

**s'attristent** — Le sens retenu est « tristesse ». Le verbe yahzanuna decrit l'etat de tristesse. La crainte concerne le futur, la tristesse concerne le passe — la double negation couvre les deux temps.

§CRITIQUE§
Les traductions courantes donnent « soumet son visage » ou « soumet a Allah son etre ». Nous donnons « a soumis son etre entierement pour Dieu » car le mot wajh designe l'etre entier, pas seulement le visage physique. Hamidullah traduit « son Seigneur » — nous donnons « celui qui l'eleve » car la racine r-b-b porte etymologiquement le sens d'elever, de faire grandir. Le « Seigneur » est un titre feodal europeen qui ne rend pas l'idee d'education et de croissance. La formule finale « nulle crainte et ils ne seront point attristes » est identique dans les deux traductions.`,
    segments: [
      { fr: "au contraire", phon: "bala", arabic: "\u0628\u064e\u0644\u064e\u0649\u0670", is_particle: true, position: 0 },
      { fr: "quiconque", pos: "pronom", phon: "man", arabic: "\u0645\u064e\u0646\u0652", word_key: "mny", is_particle: false, sense_retenu: "quiconque", position: 1 },
      { fr: "a soumis", pos: "verbe", phon: "aslama", arabic: "\u0623\u064e\u0633\u0652\u0644\u064e\u0645\u064e", word_key: "slm", is_particle: false, sense_retenu: "soumettre", position: 2 },
      { fr: "son etre", pos: "nom", phon: "wajhahu", arabic: "\u0648\u064e\u062c\u0652\u0647\u064e\u0647\u064f\u06e5", word_key: "wjh", is_particle: false, sense_retenu: "visage", position: 3 },
      { fr: "pour Dieu", phon: "lillahi", arabic: "\u0644\u0650\u0644\u0651\u064e\u0647\u0650", is_particle: true, position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 5 },
      { fr: "il", phon: "huwa", arabic: "\u0647\u064f\u0648\u064e", is_particle: true, position: 6 },
      { fr: "faiseur de bien", pos: "participe", phon: "muhsinun", arabic: "\u0645\u064f\u062d\u0652\u0633\u0650\u0646\u064c", word_key: "hsn", is_particle: false, sense_retenu: "excellence", position: 7 },
      { fr: "alors a lui", phon: "fa-lahu", arabic: "\u0641\u064e\u0644\u064e\u0647\u064f\u06e5\u0653", is_particle: true, position: 8 },
      { fr: "sa retribution", pos: "nom", phon: "ajruhu", arabic: "\u0623\u064e\u062c\u0652\u0631\u064f\u0647\u064f\u06e5", word_key: "ajr", is_particle: false, sense_retenu: "retribution", position: 9 },
      { fr: "aupres de", phon: "'inda", arabic: "\u0639\u0650\u0646\u062f\u064e", is_particle: true, position: 10 },
      { fr: "celui qui l'eleve", pos: "nom", phon: "rabbihi", arabic: "\u0631\u064e\u0628\u0651\u0650\u0647\u0650\u06e6", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 11 },
      { fr: "et pas de", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 12 },
      { fr: "crainte", pos: "nom", phon: "khawfun", arabic: "\u062e\u064e\u0648\u0652\u0641\u064c", word_key: "khw", is_particle: false, sense_retenu: "crainte", position: 13 },
      { fr: "sur eux", phon: "'alayhim", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652", is_particle: true, position: 14 },
      { fr: "et pas", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 15 },
      { fr: "eux", phon: "hum", arabic: "\u0647\u064f\u0645\u0652", is_particle: true, position: 16 },
      { fr: "s'attristent", pos: "verbe", phon: "yahzanuna", arabic: "\u064a\u064e\u062d\u0652\u0632\u064e\u0646\u064f\u0648\u0646\u064e", word_key: "hzn", is_particle: false, sense_retenu: "tristesse", position: 17 }
    ],
    words: [
      // slm pos=2 (aslama - a soumis)
      {
        word_key: "slm", position: 2, sense_chosen: "soumettre",
        analysis_axes: {
          sense_chosen: "soumettre",
          concept_chosen: "Intégrité/Santé",
          concepts: {
            "Intégrité/Santé": {
              status: "retenu",
              senses: ["sain et sauf"],
              proof_ctx: "Le verbe aslama est un accompli 3MS de la forme IV de la racine s-l-m. Le Lane's donne : remettre entierement, livrer, soumettre. La forme IV (af'ala) est causative — aslama signifie « faire que quelque chose soit en etat de salm (integrite, sante) ». L'accompli marque que la soumission est un acte acheve — celui qui a soumis son etre. Le complement est wajhahu (son visage/son etre entier) et la destination est lillahi (pour Dieu). La distinction avec paix/soumission (nul) est que le concept d'integrite est le sens premier — remettre quelque chose intact, entier, sans defaut. Soumettre son etre entier a Dieu c'est lui remettre son etre dans son integrite.",
              axe1_verset: "Le verbe aslama est le coeur du verset — c'est l'acte qui conditionne la recompense. Le champ lexical (soumettre, etre, Dieu, bien, retribution) construit une chaine d'actes et de consequences. La soumission est volontaire (aslama est un verbe d'action, pas un etat subi), totale (wajhahu — l'etre entier) et dirigee (lillahi — pour Dieu). Le verset oppose cette soumission active a la pretention passive du verset 111.",
              axe2_voisins: "Le verset 111 posait la fausse condition — etre d'un groupe. Le verset 112 pose la vraie condition — soumettre son etre. Le verbe aslama est la reponse a kana hudan aw nasara. Au lieu d'ETRE d'un groupe par naissance, il faut AGIR par soumission volontaire. Le verset 113 montrera que les groupes qui pretendent sont en contradiction entre eux.",
              axe3_sourate: "La racine s-l-m apparait dans la sourate al-Baqarah dans des contextes de soumission volontaire. En 2:128, « fais de nous des soumis (muslimayni) pour Toi ». En 2:131, « soumets-toi ! Il dit : je me soumets au Seigneur des mondes ». La sourate montre que la soumission est un acte volontaire et universel — pas une propriete ethnique.",
              axe4_coherence: "La racine s-l-m apparait environ 140 fois dans le Coran. Le verbe aslama (soumettre) est la base du mot muslim (soumis) et islam (soumission). En 3:85, « quiconque recherche une religion autre que la soumission, elle ne sera pas acceptee de lui ». Le Coran fait de la soumission la condition universelle — accessible a tous, pas reservee a un groupe.",
              axe5_frequence: "Pour la mission du khalifa, la soumission est le fondement de la mission. Le khalifa soumet son etre entier a la mission divine. La soumission n'est pas passive — c'est un acte volontaire de remise totale. Soumettre son etre c'est accepter la mission dans son integrite."
            },
            "Paix/Soumission": {
              status: "nul",
              senses: ["paix", "soumission", "islam", "salut"],
              proof_ctx: "Le sens de paix est un derive de s-l-m mais le verbe aslama est a la forme IV causative. La distinction philosophique est que la paix est un etat (le resultat), tandis que la soumission est un acte (le processus). Le verset decrit un acte volontaire (aslama wajhahu), pas un etat de paix. Le sens d'integrite est plus precis que le sens de paix."
            }
          }
        }
      },
      // wjh pos=3 (wajhahu - son etre/visage)
      {
        word_key: "wjh", position: 3, sense_chosen: "visage",
        analysis_axes: {
          sense_chosen: "visage",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le mot wajhahu est un nom masculin singulier accusatif de la racine w-j-h avec pronom suffixe 3MS. Le Lane's donne : visage, face, direction, etre entier, cote. Le visage est la partie la plus representative de l'etre — dans la pensee arabe, soumettre son visage c'est soumettre tout son etre. Le pronom hu (son) renvoie a quiconque (man) — chaque personne soumet SON etre. La distinction avec « maniere » et « noble » (nul) est claire : le contexte est la soumission de l'etre, pas une maniere de faire ou un titre de noblesse.",
              axe1_verset: "Le mot wajhahu precise l'objet de la soumission — ce n'est pas un acte partiel mais total. Le visage represente l'identite, la direction, l'etre entier. Soumettre son visage a Dieu c'est orienter tout son etre vers Dieu. Le champ lexical (soumettre, etre, Dieu, bien) montre que la soumission est globale — l'etre entier, pas seulement une partie. Le visage est aussi le siege de la direction — soumettre son visage c'est choisir la direction de Dieu.",
              axe2_voisins: "Le verset 111 parlait d'etre (kana) d'un groupe par identite. Le verset 112 parle de soumettre son etre (wajh) par choix. Le passage de l'identite heritee a la soumission choisie est le coeur du message. Le visage est ce qu'on presente — on choisit vers qui le tourner.",
              axe3_sourate: "La racine w-j-h apparait dans la sourate al-Baqarah dans le contexte de la direction. En 2:115, « ou que vous vous tourniez, la est le visage de Dieu ». En 2:144, « tourne ton visage vers la mosquee sacree ». La sourate utilise le visage comme metaphore de la direction et de l'engagement total.",
              axe4_coherence: "La racine w-j-h apparait environ 72 fois dans le Coran. L'expression « aslama wajhahu lillahi » apparait en 2:112, 3:20, 4:125 et 31:22. C'est une formule coranique pour la soumission totale de l'etre. Le Coran associe systematiquement le visage a l'engagement total.",
              axe5_frequence: "Pour la mission du khalifa, soumettre son visage c'est diriger tout son etre vers la mission. Le khalifa ne peut accomplir sa mission a moitie — la soumission est totale ou elle n'est pas. Le visage est le symbole de l'engagement entier."
            },
            "Sens isolé/Manière": {
              status: "nul",
              senses: ["maniere"],
              proof_ctx: "Le sens de maniere est hors sujet — le contexte est la soumission de l'etre entier, pas une facon de faire."
            },
            "Sens isolé/Noble": {
              status: "nul",
              senses: ["noble"],
              proof_ctx: "Le sens de noblesse est hors sujet — le contexte est la soumission volontaire, pas un titre social."
            }
          }
        }
      },
      // hsn pos=7 (muhsinun - faiseur de bien)
      {
        word_key: "hsn", position: 7, sense_chosen: "excellence",
        analysis_axes: {
          sense_chosen: "excellence",
          concept_chosen: "Excellence morale",
          concepts: {
            "Excellence morale": {
              status: "retenu",
              senses: ["bien faire", "bienfaisance"],
              proof_ctx: "Le mot muhsinun est un participe actif masculin singulier nominatif de la forme IV de la racine h-s-n. Le Lane's donne : faire le bien, exceller dans l'action, agir avec excellence. Le muhsin est celui qui fait le bien de maniere constante et active. Le participe actif indique un etat permanent — il ne fait pas le bien une fois, il EST un faiseur de bien. La forme IV (ihsan) designe l'excellence dans l'action — pas la beaute esthetique. La distinction avec la beaute (probable) est que l'excellence est une qualite de l'action, tandis que la beaute est une qualite de l'apparence.",
              axe1_verset: "Le mot muhsinun est la deuxieme condition apres la soumission — soumettre son etre ET etre un faiseur de bien. Le verset pose deux conditions complementaires : la soumission interieure (aslama wajhahu) et l'excellence dans l'action (muhsin). L'un sans l'autre est insuffisant. Le champ lexical (soumettre, bien, retribution) montre que la recompense depend des deux — la direction et l'action.",
              axe2_voisins: "Le verset 111 ne mentionnait que l'identite comme condition. Le verset 112 remplace l'identite par deux criteres actifs : la soumission et l'excellence. Le verset 113 montrera que les groupes se disqualifient sans ces criteres. L'excellence est la reponse aux souhaits vides du verset 111.",
              axe3_sourate: "La racine h-s-n apparait dans la sourate al-Baqarah dans le contexte de l'action bonne. En 2:195, « faites le bien, Dieu aime les bienfaisants (muhsinin) ». La sourate lie l'amour divin a l'excellence dans l'action — pas a l'identite communautaire.",
              axe4_coherence: "La racine h-s-n apparait environ 194 fois dans le Coran. Le ihsan (excellence) est defini dans le hadith comme « adorer Dieu comme si tu Le voyais ». En 16:90, « Dieu ordonne la justice et l'excellence ». Le Coran place l'excellence comme pilier central de la foi active.",
              axe5_frequence: "Pour la mission du khalifa, l'excellence est le standard de la mission. Le khalifa ne fait pas le bien par obligation minimale — il excelle. L'ihsan est le sommet de l'engagement — faire le bien constamment et avec la plus haute qualite. La mission exige l'excellence, pas la mediocrite."
            },
            "Beauté/Bonté": {
              status: "probable",
              senses: ["etre beau", "bon", "excellent"],
              proof_ctx: "Le sens de beaute est le sens premier de h-s-n — ce qui est beau, agreable, bon. La distinction philosophique avec l'excellence morale est que la beaute est une qualite esthetique objective, tandis que l'excellence est une qualite d'action volontaire. Le mot muhsin est a la forme IV (active-causative) — il ne dit pas qu'il EST beau mais qu'il FAIT le bien. Le contexte du verset est l'action (soumettre, faire le bien), pas l'esthetique.",
              axe1_verset: "Le sens de beaute pourrait theoriquement s'appliquer — le muhsin est aussi celui qui fait les choses de maniere belle. Mais le verset oppose la beaute de l'action (muhsin) a la vacuite des souhaits (amaniyy). Le sens d'action est plus coherent avec le contexte de soumission active.",
              axe2_voisins: "Le verset 112 est une reponse active aux pretentions passives du verset 111. Le sens de beaute est plus contemplatif, le sens d'excellence est plus actif. Le contexte demande l'action.",
              axe3_sourate: "La sourate utilise la racine h-s-n dans les deux sens. En 2:83, « parlez aux gens avec bonte (husnan) ». En 2:195, « Dieu aime les excellents (muhsinin) ». Le sens d'excellence dans l'action est le plus frequent.",
              axe4_coherence: "Le Coran utilise muhsin comme celui qui excelle dans l'action — pas comme celui qui est beau. La distinction est active vs passive.",
              axe5_frequence: "L'excellence dans l'action est le standard de la mission du khalifa. La beaute est un resultat, l'excellence est un processus actif."
            }
          }
        }
      },
      // ajr pos=9 (ajruhu - sa retribution)
      {
        word_key: "ajr", position: 9, sense_chosen: "retribution",
        analysis_axes: {
          sense_chosen: "retribution",
          concept_chosen: "Rétribution/Salaire",
          concepts: {
            "Rétribution/Salaire": {
              status: "retenu",
              senses: ["recompense", "salaire", "remuneration", "dot"],
              proof_ctx: "Le mot ajruhu est un nom masculin singulier nominatif de la racine a-j-r avec pronom suffixe 3MS. Le Lane's donne : retribution, salaire, recompense pour un travail ou un acte. La retribution est ce qu'on recoit en proportion de ce qu'on a fait — c'est un echange proportionnel. Le pronom hu (son) indique que la retribution est personnelle — chacun recoit SA retribution. La retribution est aupres du Seigneur ('inda rabbihi) — c'est Dieu qui la detient et la distribue.",
              axe1_verset: "Le mot ajruhu est le resultat de la double condition : soumission + excellence = retribution. Le champ lexical (soumettre, bien, retribution, Seigneur) construit une equation morale. Le verset promet la retribution a quiconque remplit les conditions — sans restriction ethnique. La retribution est aupres du Seigneur, pas aupres d'un groupe communautaire.",
              axe2_voisins: "Le verset 111 parlait de l'entree dans le jardin comme privilege ethnique. Le verset 112 parle de retribution comme recompense des actes. Le passage du privilege a la retribution est le coeur du message — on ne merite pas par naissance mais par action.",
              axe3_sourate: "La racine a-j-r apparait dans la sourate al-Baqarah pour designer la recompense divine. En 2:62, « ils auront leur recompense aupres de leur Seigneur ». La formule est identique — la sourate repete que la recompense est pour les actes, pas pour l'identite.",
              axe4_coherence: "La racine a-j-r apparait environ 105 fois dans le Coran. En 3:199, « ceux-la auront leur recompense aupres de leur Seigneur ». Le Coran promet systematiquement la retribution aux actes — la foi et les bonnes actions. La retribution est proportionnelle aux actes, pas a l'identite.",
              axe5_frequence: "Pour la mission du khalifa, la retribution est le resultat de la mission accomplie. Le khalifa sait que la recompense est proportionnelle a l'effort. La mission n'est pas gratuite — elle porte ses fruits aupres du Seigneur."
            }
          }
        }
      },
      // rbb pos=11 (rabbihi - son Seigneur)
      {
        word_key: "rbb", position: 11, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le mot rabbihi est un nom masculin singulier genitif de la racine r-b-b avec pronom suffixe 3MS. Le Lane's donne : seigneur, maitre, proprietaire, celui qui eleve et fait grandir. Le rabb est celui qui prend en charge un etre, l'eleve, le nourrit et le fait grandir. Le pronom hi (son) cree une relation personnelle — son Seigneur, pas un seigneur generique. La retribution est aupres du rabb — c'est celui qui a eleve qui recompense. La distinction avec la croissance (probable) est que la seigneurie est une relation de gouvernance bienveillante, pas seulement un processus de croissance.",
              axe1_verset: "Le mot rabbihi situe la retribution dans un cadre relationnel — la retribution est aupres de celui qui l'eleve. Le champ lexical (retribution, aupres de, seigneur) cree un espace de proximite entre le faiseur de bien et son Seigneur. Le verset oppose cette relation personnelle (son Seigneur) a la pretention communautaire du verset 111. La relation avec le Seigneur est individuelle et personnelle, pas collective et ethnique.",
              axe2_voisins: "Le verset 111 parlait des groupes (Juifs, Chretiens) comme entites collectives. Le verset 112 parle du rabb avec un pronom personnel (son Seigneur) — la relation est individuelle. Le passage du collectif a l'individuel est delibere : la recompense est personnelle.",
              axe3_sourate: "La racine r-b-b est une des plus importantes de la sourate al-Baqarah. En 2:2, « un guide pour ceux qui prennent garde ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». La sourate utilise rabb pour designer la relation de proximite entre Dieu et les croyants.",
              axe4_coherence: "La racine r-b-b apparait environ 970 fois dans le Coran. Le mot rabb est le deuxieme nom le plus utilise pour designer Dieu apres Allah. En 1:2, « louange a Dieu, Seigneur des mondes ». Le Coran presente le rabb comme celui qui eleve tout ce qui existe.",
              axe5_frequence: "Pour la mission du khalifa, le rabb est le mandant de la mission. Le khalifa sert son Seigneur — celui qui l'a eleve et fait grandir. La retribution aupres du rabb est la validation de la mission accomplie."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens de croissance est le sens etymologique premier de r-b-b — ce qui grandit, augmente. La distinction philosophique avec la seigneurie est que la croissance est le processus naturel, tandis que la seigneurie est la relation de gouvernance qui dirige cette croissance. Le mot rabb ne designe pas juste quelque chose qui grandit — il designe celui qui FAIT grandir. Le rabb est l'agent de la croissance, pas la croissance elle-meme.",
              axe1_verset: "Le sens de croissance eclaire l'etymologie du rabb — celui qui fait grandir. Le verset montre que la retribution est aupres de celui qui fait grandir — il y a un lien entre l'elevation et la recompense. Celui qui fait grandir est aussi celui qui recompense.",
              axe2_voisins: "Le contexte des versets voisins est la recompense divine — la croissance est un aspect de cette recompense mais le sens de seigneurie est plus complet dans ce contexte.",
              axe3_sourate: "La sourate utilise rabb principalement au sens de seigneur gouvernant. Le sens de croissance est sous-jacent mais pas dominant.",
              axe4_coherence: "Le Coran utilise r-b-b principalement au sens de seigneurie. Le sens de croissance (riba/usure) apparait dans un contexte completement different.",
              axe5_frequence: "La croissance est un aspect de la mission du khalifa — faire grandir ce qui est sous sa responsabilite. Mais dans ce verset, c'est la relation de seigneurie qui est en jeu."
            },
            "Éducation/Accompagnement": {
              status: "probable",
              senses: ["elever un enfant", "eduquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education est un derive important de r-b-b — le rabb est celui qui eleve et eduque. La distinction avec la seigneurie est que l'education est un aspect specifique de la seigneurie — le rabb ne fait pas que gouverner, il eduque et accompagne. Dans ce verset, le rabb detient la retribution — il recompense ceux qu'il a eleves. L'education est le processus, la retribution est le resultat.",
              axe1_verset: "Le sens d'education enrichit la comprehension — la retribution est aupres de celui qui a eduque. Celui qui a forme est aussi celui qui evalue. Le verset montre que la relation avec le rabb est complete : education + evaluation + retribution.",
              axe2_voisins: "Le contexte des versets voisins est la recompense, pas specifiquement l'education. Mais l'education est le fondement de la recompense.",
              axe3_sourate: "La sourate al-Baqarah montre le rabb comme educateur — il enseigne les noms a Adam (2:31), il teste Abraham (2:124). L'education divine est un theme central.",
              axe4_coherence: "Le Coran montre le rabb comme educateur universel. En 96:1, « lis au nom de ton Seigneur qui a cree ». Le rabb cree, eduque et fait grandir.",
              axe5_frequence: "L'education est un pilier de la mission du khalifa — le khalifa est eduque par son rabb pour accomplir sa mission."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette", "interet"],
              proof_ctx: "Le sens d'usure est hors sujet — le mot est rabb (seigneur), pas riba (usure). Le contexte est la relation de seigneurie, pas la finance."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "Le sens d'essoufflement est hors sujet — le contexte est la seigneurie divine."
            },
            "Sens isolé/Fixer": {
              status: "nul",
              senses: ["fixer"],
              proof_ctx: "Le sens de fixer est hors sujet — le contexte est la relation de seigneurie."
            }
          }
        }
      },
      // khw pos=13 (khawfun - crainte)
      {
        word_key: "khw", position: 13, sense_chosen: "crainte",
        analysis_axes: {
          sense_chosen: "crainte",
          concept_chosen: "Crainte/Appréhension",
          concepts: {
            "Crainte/Appréhension": {
              status: "retenu",
              senses: ["peur", "craindre", "redouter", "effrayer"],
              proof_ctx: "Le mot khawfun est un nom masculin singulier nominatif indefini de la racine kh-w-f. Le Lane's donne : peur, crainte, apprehension, redouter. La crainte est une emotion tournee vers le futur — on craint ce qui pourrait arriver. Le mot est precede de la negation la (pas de) — pas de crainte sur eux. La construction « la khawfun 'alayhim » est une phrase nominale negative — l'absence de crainte est un etat permanent, pas un evenement ponctuel.",
              axe1_verset: "Le mot khawfun fait partie de la formule finale qui decrit l'etat de paix — ni crainte ni tristesse. Le champ lexical (retribution, seigneur, pas de crainte, pas de tristesse) construit un tableau de securite totale. La crainte est absente parce que la retribution est assuree — celui qui a soumis son etre et fait le bien n'a rien a craindre du futur.",
              axe2_voisins: "Le verset 111 parlait de pretentions et de souhaits — un etat d'incertitude. Le verset 112 offre la certitude : pas de crainte. La securite du verset 112 contraste avec la vacuite des souhaits du verset 111. Les pretendants ont des souhaits, les soumis ont la securite.",
              axe3_sourate: "La formule « la khawfun 'alayhim wa la hum yahzanuna » apparait 7 fois dans la sourate al-Baqarah (2:38, 2:62, 2:112, 2:262, 2:274, 2:277). C'est un refrain de la sourate — une promesse recurrente de paix pour ceux qui remplissent les conditions.",
              axe4_coherence: "La racine kh-w-f apparait environ 124 fois dans le Coran. La formule « pas de crainte ni de tristesse » apparait environ 13 fois dans le Coran entier. C'est une des promesses les plus recurrentes. Le Coran distingue la crainte legitime (crainte de Dieu) de la crainte vaine (crainte du futur terrestre).",
              axe5_frequence: "Pour la mission du khalifa, l'absence de crainte est le fruit de la mission accomplie. Le khalifa qui soumet son etre et fait le bien n'a rien a craindre. La crainte disparait quand la mission est accomplie avec excellence."
            }
          }
        }
      },
      // hzn pos=17 (yahzanuna - s'attristent)
      {
        word_key: "hzn", position: 17, sense_chosen: "tristesse",
        analysis_axes: {
          sense_chosen: "tristesse",
          concept_chosen: "Tristesse/Affliction",
          concepts: {
            "Tristesse/Affliction": {
              status: "retenu",
              senses: ["etre triste", "tristesse", "chagrin", "affliger", "attrister"],
              proof_ctx: "Le verbe yahzanuna est un inaccompli 3MP de la racine h-z-n precede de la negation la. Le Lane's donne : etre triste, s'affliger, eprouver du chagrin. La tristesse est une emotion tournee vers le passe — on est triste de ce qui est arrive. L'inaccompli avec la negation (la yahzanuna) indique une absence permanente de tristesse. La construction « la hum yahzanuna » (eux ne s'attristent pas) utilise le pronom emphatique hum — c'est une insistance : EUX, ils ne s'attristent pas.",
              axe1_verset: "Le verbe yahzanuna complete la formule de paix — ni crainte (futur) ni tristesse (passe). Le verset offre une paix totale dans les deux directions du temps. Le champ lexical (retribution, seigneur, pas de crainte, pas de tristesse) construit un etat de serenite complete. La tristesse est absente parce que le passe est assume — celui qui a soumis son etre n'a pas de regret.",
              axe2_voisins: "Le verset 111 montrait des groupes qui pretendent sans preuve — une source potentielle de tristesse quand la realite dementira leurs souhaits. Le verset 112 promet l'absence de tristesse pour ceux qui agissent reellement. Les pretendants auront des raisons de s'attrister, les soumis n'en auront pas.",
              axe3_sourate: "La formule « ni crainte ni tristesse » est un refrain de la sourate al-Baqarah. La sourate utilise ce refrain pour marquer les passages ou la promesse divine est inconditionnelle — la condition etant la foi et les actes, pas l'identite.",
              axe4_coherence: "La racine h-z-n apparait environ 42 fois dans le Coran. La tristesse est un etat que le Coran promet d'effacer pour les croyants qui agissent bien. En 3:170, « ils se rejouissent de ce que Dieu leur a donne de Sa grace, et ne s'attristent pas ». L'absence de tristesse est une promesse divine conditionnee aux actes.",
              axe5_frequence: "Pour la mission du khalifa, l'absence de tristesse est le resultat de la mission accomplie. Le khalifa qui a soumis son etre et fait le bien n'a pas de regret — sa mission est accomplie. La tristesse disparait quand l'action est alignee avec la mission."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:113
  // "Et les Juifs disent: «Les Chretiens ne tiennent sur rien»;
  //  et les Chretiens disent: «Les Juifs ne tiennent sur rien»,
  //  alors qu'ils lisent le Livre! De meme, ceux qui ne savent
  //  rien tiennent un langage semblable au leur. Eh bien, Allah
  //  jugera sur ce quoi ils s'opposaient, au Jour de la Resurrection."
  // =====================================================
  113: {
    verse_id: 120,
    analysis_id: 482,
    translation_arab: "Et ont dit les guides : les partisans ne sont sur rien. Et ont dit les partisans : les guides ne sont sur rien. Et pourtant eux recitent le Livre. Ainsi ont dit ceux qui ne savent pas, semblable a leur parole. Alors Dieu tranche entre eux le jour de la levee dans ce en quoi ils divergeaient.",
    full_translation: "Et les Juifs disent: «Les Chretiens ne tiennent sur rien»; et les Chretiens disent: «Les Juifs ne tiennent sur rien», alors qu'ils lisent le Livre! De meme, ceux qui ne savent rien tiennent un langage semblable au leur. Eh bien, Allah jugera sur ce quoi ils s'opposaient, au Jour de la Resurrection.",
    translation_explanation: `§DEMARCHE§
Le verset commence par **wa qalat al-yahudu** (et ont dit les guides/Juifs). Le verbe qalat est un accompli 3FS de la racine q-w-l — le feminin s'accorde avec le nom collectif. Le nom **al-yahudu** est de la racine y-h-d. Le Lane's donne : les Juifs, ceux qui sont guides. Le verbe **laysat** est un accompli 3FS negatif de la racine l-y-s. Le Lane's donne : ne pas etre. Laysat est un verbe de negation totale — les Chretiens ne sont sur rien. Le nom **an-nasara** est de la racine n-s-r. Le Lane's donne : les Chretiens, les partisans. La preposition **'ala** (sur) suivie de **shay'in** (chose) forme l'expression « sur rien » — ne tenir sur rien, ne reposer sur rien. Le mot **shay'in** est un nom masculin singulier indefini genitif de la racine sh-y-'. Le Lane's donne : chose, quelque chose, rien (dans un contexte negatif). Le verset repete la meme structure en inversant les roles : les Chretiens disent que les Juifs ne tiennent sur rien. La phrase **wa hum yatluna al-kitaba** (et pourtant eux recitent le Livre) introduit le paradoxe. Le verbe **yatluna** est un inaccompli 3MP de la racine t-l-w (ou q-r-a selon l'analyse). Le Lane's donne : reciter, lire, suivre. Le nom **al-kitaba** est de la racine k-t-b. L'adverbe **kadhalika** (ainsi) compare leur comportement a celui des ignorants. Le verbe **qala** est un accompli 3MS de q-w-l. Le pronom relatif **alladhina** (ceux qui) introduit les ignorants. Le verbe **ya'lamuna** est un inaccompli 3MP de '-l-m avec negation. Le nom **mithla** est de la racine m-th-l. Le Lane's donne : semblable, pareil, exemple. Le mot **qawlihim** est de q-w-l — leur parole. La conclusion : **fa-Allahu yahkumu baynahum** (alors Dieu tranche entre eux). Le verbe **yahkumu** est un inaccompli 3MS de h-k-m. Le Lane's donne : juger, trancher, decider avec sagesse. Le nom **baynahum** est de b-y-n — entre eux. Le nom **yawma** est de y-w-m — le jour. Le nom **al-qiyamati** est de q-w-m — la levee, la resurrection. Le verbe **yakhtaifuna** est un inaccompli 3MP de la forme VIII de kh-l-f. Le Lane's donne : diverger, etre en desaccord, differer. La forme VIII (ifta'ala) indique la reciprocite — ils divergent les uns des autres.

§JUSTIFICATION§
**ont dit** — Le sens retenu est « dire ». Le verbe qalat rapporte la declaration des Juifs.

**les guides** — Le sens retenu est « guider ». Le mot al-yahud designe etymologiquement ceux qui guident/reviennent.

**ne sont pas** — Le sens retenu est « negation ». Le verbe laysat nie l'existence de tout fondement.

**les partisans** — Le sens retenu est « secourir ». Le mot an-nasara designe etymologiquement les partisans.

**sur rien** — Le sens retenu est « chose ». Le mot shay'in dans un contexte negatif signifie « rien » — pas de fondement.

**recitent** — Le sens retenu est « lire/reciter ». Le verbe yatluna decrit l'acte de reciter le Livre.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitab designe le Livre revele.

**ainsi** — Le mot kadhalika compare le comportement des Juifs et des Chretiens a celui des ignorants.

**ne savent pas** — Le sens retenu est « savoir ». Le verbe ya'lamuna avec negation decrit les ignorants.

**semblable** — Le sens retenu est « ressembler ». Le mot mithla decrit la similitude entre les paroles.

**leur parole** — Le sens retenu est « dire ». Le mot qawlihim designe la parole des groupes.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah est le sujet du jugement final.

**tranche** — Le sens retenu est « sagesse/jugement ». Le verbe yahkumu decrit le jugement divin.

**entre eux** — Le sens retenu est « separation ». Le mot baynahum situe le jugement dans l'espace qui les separe.

**le jour** — Le sens retenu est « jour ». Le mot yawma situe le jugement dans le temps.

**de la levee** — Le sens retenu est « droiture/se lever ». Le mot al-qiyama designe la resurrection — le jour ou tout se leve.

**divergeaient** — Le sens retenu est « succession/divergence ». Le verbe yakhtaifuna a la forme VIII decrit la divergence reciproque.

§CRITIQUE§
La traduction de Hamidullah utilise « ne tiennent sur rien » — nous donnons « ne sont sur rien » qui est plus litteral (laysat 'ala shay'in). « Tiennent » suggere un effort actif, « sont » decrit un etat. Hamidullah traduit « ceux qui ne savent rien » — nous precisons « ceux qui ne savent pas » car la negation porte sur le verbe de savoir, pas sur un objet. Hamidullah traduit « Jour de la Resurrection » — nous donnons « jour de la levee » car qiyama vient de q-w-m (se lever, se dresser). Le mot « resurrection » est un terme chretien specifique.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "ont dit", pos: "verbe", phon: "qalat", arabic: "\u0642\u064e\u0627\u0644\u064e\u062a\u0650", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "les guides", pos: "nom", phon: "al-yahudu", arabic: "\u0671\u0644\u0652\u064a\u064e\u0647\u064f\u0648\u062f\u064f", word_key: "yhd", is_particle: false, sense_retenu: "guider", position: 2 },
      { fr: "ne sont pas", pos: "verbe", phon: "laysat", arabic: "\u0644\u064e\u064a\u0652\u0633\u064e\u062a\u0650", word_key: "lys", is_particle: false, sense_retenu: "negation", position: 3 },
      { fr: "les partisans", pos: "nom", phon: "an-nasara", arabic: "\u0671\u0644\u0646\u0651\u064e\u0635\u064e\u0640\u0670\u0631\u064e\u0649\u0670", word_key: "nsr", is_particle: false, sense_retenu: "secourir", position: 4 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649\u0670", is_particle: true, position: 5 },
      { fr: "rien", pos: "nom", phon: "shay'in", arabic: "\u0634\u064e\u0649\u0652\u0621\u064d", word_key: "shy", is_particle: false, sense_retenu: "chose", position: 6 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 7 },
      { fr: "ont dit", pos: "verbe", phon: "qalat", arabic: "\u0642\u064e\u0627\u0644\u064e\u062a\u0650", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 8 },
      { fr: "les partisans", pos: "nom", phon: "an-nasara", arabic: "\u0671\u0644\u0646\u0651\u064e\u0635\u064e\u0640\u0670\u0631\u064e\u0649\u0670", word_key: "nsr", is_particle: false, sense_retenu: "secourir", position: 9 },
      { fr: "ne sont pas", pos: "verbe", phon: "laysat", arabic: "\u0644\u064e\u064a\u0652\u0633\u064e\u062a\u0650", word_key: "lys", is_particle: false, sense_retenu: "negation", position: 10 },
      { fr: "les guides", pos: "nom", phon: "al-yahudu", arabic: "\u0671\u0644\u0652\u064a\u064e\u0647\u064f\u0648\u062f\u064f", word_key: "yhd", is_particle: false, sense_retenu: "guider", position: 11 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649\u0670", is_particle: true, position: 12 },
      { fr: "rien", pos: "nom", phon: "shay'in", arabic: "\u0634\u064e\u0649\u0652\u0621\u064d", word_key: "shy", is_particle: false, sense_retenu: "chose", position: 13 },
      { fr: "et pourtant", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 14 },
      { fr: "eux", phon: "hum", arabic: "\u0647\u064f\u0645\u0652", is_particle: true, position: 15 },
      { fr: "recitent", pos: "verbe", phon: "yatluna", arabic: "\u064a\u064e\u062a\u0652\u0644\u064f\u0648\u0646\u064e", word_key: "qra", is_particle: false, sense_retenu: "reciter", position: 16 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0670\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 17 },
      { fr: "ainsi", pos: "adverbe", phon: "kadhalika", arabic: "\u0643\u064e\u0630\u064e\u0670\u0644\u0650\u0643\u064e", word_key: "kdl", is_particle: false, sense_retenu: "ainsi", position: 18 },
      { fr: "ont dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 19 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 20 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 21 },
      { fr: "savent pas", pos: "verbe", phon: "ya'lamuna", arabic: "\u064a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 22 },
      { fr: "semblable a", pos: "nom", phon: "mithla", arabic: "\u0645\u0650\u062b\u0652\u0644\u064e", word_key: "mthl", is_particle: false, sense_retenu: "semblable", position: 23 },
      { fr: "leur parole", pos: "nom", phon: "qawlihim", arabic: "\u0642\u064e\u0648\u0652\u0644\u0650\u0647\u0650\u0645\u0652", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 24 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 25 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 26 },
      { fr: "tranche", pos: "verbe", phon: "yahkumu", arabic: "\u064a\u064e\u062d\u0652\u0643\u064f\u0645\u064f", word_key: "hkm", is_particle: false, sense_retenu: "juger", position: 27 },
      { fr: "entre eux", pos: "nom", phon: "baynahum", arabic: "\u0628\u064e\u064a\u0652\u0646\u064e\u0647\u064f\u0645\u0652", word_key: "byn", is_particle: false, sense_retenu: "entre", position: 28 },
      { fr: "le jour de", pos: "nom", phon: "yawma", arabic: "\u064a\u064e\u0648\u0652\u0645\u064e", word_key: "ywm", is_particle: false, sense_retenu: "jour", position: 29 },
      { fr: "la levee", pos: "nom", phon: "al-qiyamati", arabic: "\u0671\u0644\u0652\u0642\u0650\u064a\u064e\u0640\u0670\u0645\u064e\u0629\u0650", word_key: "qwm", is_particle: false, sense_retenu: "se lever", position: 30 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u064a", is_particle: true, position: 31 },
      { fr: "ce en quoi", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 32 },
      { fr: "ils etaient", pos: "verbe", phon: "kanu", arabic: "\u0643\u064e\u0627\u0646\u064f\u0648\u0627\u06df", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 33 },
      { fr: "en cela", phon: "fihi", arabic: "\u0641\u0650\u064a\u0647\u0650", is_particle: true, position: 34 },
      { fr: "ils divergeaient", pos: "verbe", phon: "yakhtaifuna", arabic: "\u064a\u064e\u062e\u0652\u062a\u064e\u0644\u0650\u0641\u064f\u0648\u0646\u064e", word_key: "khlf", is_particle: false, sense_retenu: "diverger", position: 35 }
    ],
    words: [
      // qwl pos=1 (qalat - ont dit)
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qalat est un accompli 3FS de la racine q-w-l. Le Lane's donne : dire, enoncer. Le feminin singulier s'accorde avec le nom collectif al-yahud — c'est le groupe qui parle comme une entite. L'accompli rapporte un fait passe. Le verset utilise quatre occurrences de q-w-l pour montrer la symetrie : les guides disent (qalat), les partisans disent (qalat), de meme ont dit (qala) ceux qui ne savent pas, et « leur parole » (qawlihim). La racine q-w-l structure le verset autour de la parole — une parole de disqualification mutuelle.",
              axe1_verset: "Le verbe qalat ouvre le verset et lance la premiere accusation : les guides disent que les partisans ne tiennent sur rien. Le champ lexical est domine par la parole (quatre occurrences de q-w-l) et la negation (laysat, la ya'lamuna). Le verset est une cascade de paroles negatives — chaque groupe nie la valeur de l'autre. La parole ici n'est pas constructive — elle est destructive.",
              axe2_voisins: "Le verset 111 rapportait la pretention d'exclusivite. Le verset 112 posait la condition universelle. Le verset 113 montre la contradiction interne des pretendants — ils se disqualifient mutuellement. Les trois versets forment un triptyque : pretention (111) → condition reelle (112) → contradiction (113).",
              axe3_sourate: "La sourate al-Baqarah rapporte de nombreuses declarations des groupes. En 2:80, 2:91, 2:111, 2:113, 2:135 — chaque fois, une declaration est rapportee puis contestee. La sourate montre que les pretentions communautaires sont contradictoires et sans fondement.",
              axe4_coherence: "Le schema « wa qalat al-yahudu... wa qalat an-nasara » (les Juifs disent... les Chretiens disent) apparait aussi en 2:113 et 9:30. Le Coran montre la symetrie des accusations mutuelles pour demasquer leur vacuite. Si chaque groupe disqualifie l'autre, aucun ne peut pretendre a l'exclusivite.",
              axe5_frequence: "Pour la mission du khalifa, la disqualification mutuelle est le contraire de la justice. Le khalifa doit juger par les actes, pas par les accusations communautaires. La parole de disqualification est un obstacle a la mission de justice."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion est engobe par la parole — le verset rapporte un acte de parole public, pas une pensee interieure."
            }
          }
        }
      },
      // yhd pos=2 (al-yahudu - les Juifs/guides)
      {
        word_key: "yhd", position: 2, sense_chosen: "guider",
        analysis_axes: {
          sense_chosen: "guider",
          concept_chosen: "Guidance",
          concepts: {
            "Guidance": {
              status: "retenu",
              senses: ["guider", "montrer le chemin"],
              proof_ctx: "Le mot al-yahudu est un nom pluriel defini de la racine y-h-d. Le Lane's donne : les Juifs, ceux qui guident, ceux qui reviennent. La racine y-h-d porte le sens de guider, montrer le chemin. L'article defini (al-) marque un groupe specifique et connu. Le mot al-yahud dans le Coran designe le groupe religieux historique des Juifs — etymologiquement, ceux qui sont guides ou qui guident. Le verset utilise ce mot pour montrer la contradiction : ceux qui pretendent guider sont incapables de reconnaitre la valeur de l'autre groupe.",
              axe1_verset: "Le mot al-yahudu est le sujet de la premiere accusation. Le verset pose une symetrie parfaite : les guides disent que les partisans ne tiennent sur rien, et vice versa. Le champ lexical (dire, ne pas etre sur, rien) montre que l'accusation est totale — pas sur rien, pas un peu, pas quelque chose, mais rien. L'ironie est que ceux qui sont etymologiquement « les guides » ne reconnaissent pas que l'autre groupe puisse aussi etre guide.",
              axe2_voisins: "Le verset 111 utilisait hudan (sans article) pour designer les Juifs dans la pretention. Le verset 113 utilise al-yahudu (avec article) pour les identifier comme sujet de l'accusation. Le passage de l'indefini a la definition montre que le texte precise maintenant de qui il parle.",
              axe3_sourate: "La racine y-h-d apparait dans la sourate al-Baqarah pour designer les Juifs historiques. En 2:62, « ceux qui sont devenus juifs » (alladhina hadu). En 2:111, « guides ou partisans ». La sourate montre les Juifs dans leur relation avec les autres groupes — tantot pretentions, tantot accusations.",
              axe4_coherence: "La racine y-h-d apparait environ 10 fois dans le Coran. En 4:46, 4:160, 5:41 — le Coran mentionne les Juifs dans des contextes de rapport avec la revelation. Le Coran ne condamne pas le judaisme en tant que tel mais les comportements specifiques de certains groupes.",
              axe5_frequence: "Pour la mission du khalifa, les guides (etymologie de yahud) sont censes montrer le chemin. Quand les guides disqualifient les autres au lieu de guider, ils trahissent leur propre etymologie et leur mission."
            }
          }
        }
      },
      // lys pos=3 (laysat - ne sont pas)
      {
        word_key: "lys", position: 3, sense_chosen: "negation",
        analysis_axes: {
          sense_chosen: "negation",
          concept_chosen: "Négation/Non-existence",
          concepts: {
            "Négation/Non-existence": {
              status: "retenu",
              senses: ["ne pas etre", "il n'y a pas"],
              proof_ctx: "Le verbe laysat est un accompli 3FS de la racine l-y-s. Le Lane's donne : ne pas etre, ne pas exister. Laysa/laysat est un verbe de negation totale — il nie l'existence meme de la chose. Ici laysat an-nasara 'ala shay'in (les partisans ne sont pas sur quelque chose) nie que les Chretiens aient un quelconque fondement. La negation est absolue — pas sur rien, zero fondement. Le feminin s'accorde avec nasara comme nom collectif.",
              axe1_verset: "Le verbe laysat est le coeur de l'accusation — la negation totale de la valeur de l'autre. Le champ lexical (ne pas etre, sur, rien) construit une disqualification absolue. Le verset montre que les deux groupes se disqualifient mutuellement avec la meme intensite. Laysat est repete deux fois dans le verset — une fois par chaque groupe. La symetrie souligne l'absurdite : si chacun nie la valeur de l'autre, qui a raison ?",
              axe2_voisins: "Le verset 112 posait une condition positive (soumettre et faire le bien). Le verset 113 montre l'inverse — la negation mutuelle. Le passage du positif au negatif souligne le contraste entre la vraie condition et les fausses accusations.",
              axe3_sourate: "Le verbe laysa apparait dans la sourate al-Baqarah pour des negations de valeur. En 2:177, « laysa al-birra » (la piete n'est pas [seulement de]). La sourate utilise laysa pour corriger les fausses conceptions.",
              axe4_coherence: "Le verbe laysa apparait environ 89 fois dans le Coran. Il sert a nier des pretentions fausses ou a corriger des conceptions erronees. En 2:113, il est utilise par les groupes eux-memes pour se disqualifier mutuellement.",
              axe5_frequence: "Pour la mission du khalifa, la negation totale de la valeur de l'autre est le contraire de la justice. Le khalifa ne disqualifie pas des groupes entiers — il evalue les actes individuels. La negation absolue est un outil de division, pas de justice."
            }
          }
        }
      },
      // shy pos=6 (shay'in - rien/chose)
      {
        word_key: "shy", position: 6, sense_chosen: "chose",
        analysis_axes: {
          sense_chosen: "chose",
          concept_chosen: "Volonté",
          concepts: {
            "Volonté": {
              status: "retenu",
              senses: ["vouloir"],
              proof_ctx: "Le mot shay'in est un nom masculin singulier indefini genitif de la racine sh-y-'. Le Lane's donne : chose, quelque chose, etre. La racine sh-y-' est liee a la volonte divine — chaque chose existe parce que Dieu l'a voulue. Le mot shay' est un des mots les plus generaux de la langue arabe — il designe toute chose qui existe. Dans le contexte negatif « laysat 'ala shay'in » (ne sont pas sur une chose), il signifie « rien » — l'absence totale de fondement. La distinction avec le neant (nul) est que shay' designe positivement une chose, et c'est la negation qui le rend negatif.",
              axe1_verset: "Le mot shay'in est l'objet de la negation — les partisans ne sont pas sur une chose. Le champ lexical (ne pas etre, sur, chose/rien) construit l'accusation d'absence totale de fondement. Le mot est repete deux fois — une fois pour chaque accusation. L'indefini (shay'in sans article) renforce la generalite : pas une seule chose, rien du tout.",
              axe2_voisins: "Le verset 112 montrait un fondement reel — soumettre son etre et faire le bien. Le verset 113 montre les groupes qui pretendent que l'autre n'a aucun fondement. Le contraste est clair : le fondement existe (112) mais les groupes se le nient mutuellement (113).",
              axe3_sourate: "La racine sh-y-' apparait frequemment dans la sourate al-Baqarah. En 2:20, « Dieu est capable de toute chose (shay') ». En 2:106, « Dieu est capable de toute chose ». La sourate montre que shay' est un mot universel — chaque chose est dans le domaine de Dieu.",
              axe4_coherence: "La racine sh-y-' apparait environ 519 fois dans le Coran. En 18:23, « ne dis pas de quelque chose : je ferai cela demain ». Le Coran utilise shay' pour designer la realite la plus generale. Dans un contexte negatif, l'absence de shay' est l'absence de tout.",
              axe5_frequence: "Pour la mission du khalifa, nier que quelqu'un soit « sur quelque chose » c'est nier tout fondement a son existence. Le khalifa doit reconnaitre que chaque personne et chaque groupe ont un fondement — la negation totale est une injustice."
            },
            "Chose/Être": {
              status: "nul",
              senses: ["chose", "quelque chose"],
              proof_ctx: "Ce sens est engobe par le sens retenu — la chose est le sens concret de shay', la volonte est le sens etymologique. Dans ce verset, le sens concret est dominant."
            }
          }
        }
      },
      // qra pos=16 (yatluna - recitent)
      {
        word_key: "qra", position: 16, sense_chosen: "reciter",
        analysis_axes: {
          sense_chosen: "reciter",
          concept_chosen: "Lecture/Récitation",
          concepts: {
            "Lecture/Récitation": {
              status: "retenu",
              senses: ["lire", "reciter", "Coran", "proclamer"],
              proof_ctx: "Le verbe yatluna est un inaccompli 3MP de la racine t-l-w (rattachee a q-r-a dans l'analyse). Le Lane's donne : reciter, lire a haute voix, suivre. L'inaccompli indique une action continue — ils recitent habituellement, pas juste une fois. Le verset souligne le paradoxe : ils se disqualifient mutuellement ALORS QU'ils lisent le Livre. Le Livre devrait etre une source d'unite et de connaissance, mais ils l'utilisent pour se diviser.",
              axe1_verset: "Le verbe yatluna introduit le paradoxe central du verset — ils lisent le Livre et pourtant se disqualifient mutuellement. Le champ lexical (reciter, Livre) oppose la connaissance theorique (lecture) au comportement pratique (accusation). Le verset montre que lire le Livre ne suffit pas — il faut le comprendre et l'appliquer. La lecture sans comprehension est vaine.",
              axe2_voisins: "Le verset 111 parlait de souhaits sans preuve. Le verset 113 montre que meme ceux qui lisent le Livre (et donc ont la preuve) se comportent comme des ignorants. La connaissance est presente mais non utilisee — le meme paradoxe que le verset 101 (« comme s'ils ne savaient pas »).",
              axe3_sourate: "La racine liee a la lecture apparait dans la sourate al-Baqarah dans le contexte de la recitation des ecritures. En 2:44, « Ordonnez-vous la piete aux gens tout en vous oubliant vous-memes, alors que vous lisez le Livre ? ». La sourate reproche aux gens du Livre de lire sans appliquer.",
              axe4_coherence: "La racine q-r-a/t-l-w apparait frequemment dans le Coran. En 2:44, 2:113, 3:93, le Coran reproche aux gens du Livre de lire sans comprendre. En 96:1, « lis au nom de ton Seigneur ». Le Coran insiste sur le fait que la lecture doit mener a la comprehension et a l'action.",
              axe5_frequence: "Pour la mission du khalifa, la lecture du Livre est le debut de la mission, pas la fin. Lire sans comprendre et sans appliquer est une trahison de la mission. Le khalifa doit lire, comprendre et agir."
            }
          }
        }
      },
      // ktb pos=17 (al-kitaba - le Livre)
      {
        word_key: "ktb", position: 17, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["livre", "ecriture revelee", "registre", "contrat ecrit", "contrat de mariage", "contrat d'affranchissement"],
              proof_ctx: "Le mot al-kitaba est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee. L'article defini (al-) designe LE Livre — l'ecriture revelee connue. Le verset mentionne le Livre dans le contexte du paradoxe : les deux groupes lisent le Livre et pourtant se disqualifient. Le Livre est la source commune qui devrait les unir, mais ils l'utilisent pour se diviser.",
              axe1_verset: "Le mot al-kitab est l'objet de la lecture paradoxale — ils lisent le Livre et pourtant se disqualifient. Le champ lexical (reciter, Livre, ne savent pas) montre que le Livre est la source de connaissance ignoree. Le verset oppose la lecture du Livre (connaissance) a la disqualification mutuelle (ignorance). Le Livre devrait etre l'arbitre, mais les groupes l'ignorent dans leur comportement.",
              axe2_voisins: "Le verset 111 parlait de souhaits sans preuve. Le verset 112 posait la condition universelle. Le verset 113 montre que le Livre, qui contient la preuve et la condition, est lu mais pas compris. Les trois versets montrent que la connaissance sans comprehension est inutile.",
              axe3_sourate: "Le mot al-kitab est un des mots cles de la sourate al-Baqarah. En 2:2, « ce Livre, nul doute en lui ». En 2:44, « vous lisez le Livre ». La sourate insiste sur le Livre comme source de verite — le probleme n'est pas le Livre mais la lecture sans comprehension.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le Livre est le fil conducteur de la revelation coranique — chaque revelation confirme la precedente. Le Coran se presente comme un Livre qui confirme les Livres anterieurs.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le guide de la mission. Le lire sans le comprendre est une negligence. Le khalifa doit lire, comprendre et appliquer — la lecture seule ne suffit pas."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["ecrire", "dicter", "copier un livre", "art de l'ecriture", "scribe", "s'inscrire", "savant", "enseignant", "vendeur de livres", "ecole", "demander d'ecrire", "ecrire a quelqu'un"],
              proof_ctx: "Le sens d'ecriture est le sens processuel de k-t-b — l'acte d'ecrire. La distinction avec le Livre est que l'ecriture est le processus (tracer des signes), le Livre est le resultat (le support qui contient le texte). Le verset parle du Livre comme objet de lecture (yatluna al-kitaba), pas de l'acte d'ecrire.",
              axe1_verset: "Le sens d'ecriture est moins coherent avec le verbe yatluna (reciter) — on recite un livre, on ne recite pas l'acte d'ecrire. Le sens de livre-objet est plus naturel avec le verbe de lecture.",
              axe2_voisins: "Le contexte des versets voisins traite le kitab comme un objet de revelation et de connaissance, pas comme un processus d'ecriture.",
              axe3_sourate: "La sourate utilise kitab principalement comme objet de revelation. Le sens d'ecriture apparait dans d'autres contextes (2:282, contrats).",
              axe4_coherence: "Le Coran distingue l'acte d'ecrire (kataba) du resultat (kitab) selon le contexte.",
              axe5_frequence: "Le Livre comme guide est l'enjeu de la mission. L'ecriture est un outil, le Livre est la source."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "rendre obligatoire", "juger", "decret divin", "predestination"],
              proof_ctx: "Le sens de decret est hors sujet — le contexte est la lecture du Livre, pas un decret."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre", "attacher"],
              proof_ctx: "Le sens d'assemblage est hors sujet — le contexte est le Livre revele."
            }
          }
        }
      },
      // elm pos=22 (ya'lamuna - savent)
      {
        word_key: "elm", position: 22, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe ya'lamuna est un inaccompli 3MP de la racine '-l-m avec negation la. Le Lane's donne : savoir, connaitre, etre informe. L'inaccompli avec negation (la ya'lamuna) designe ceux qui ne savent pas — les ignorants. Le verset compare le comportement des gens du Livre a celui des ignorants : « ceux qui ne savent pas ont dit la meme chose ». L'ironie est que les gens du Livre, qui lisent le Livre et devraient savoir, se comportent comme ceux qui ne savent pas.",
              axe1_verset: "Le verbe ya'lamuna avec negation qualifie un troisieme groupe — les ignorants — qui tiennent le meme discours que les gens du Livre. Le champ lexical (reciter, Livre, ne pas savoir, semblable) construit le paradoxe : ceux qui lisent le Livre et ceux qui ne savent pas tiennent le meme discours. Le savoir devrait distinguer les deux groupes, mais leur comportement les rend indistinguables.",
              axe2_voisins: "Le verset 111 montrait des pretentions sans preuve. Le verset 112 posait la vraie condition. Le verset 113 montre que ceux qui pretendent savoir (ils lisent le Livre) se comportent comme ceux qui ne savent pas. Le savoir sans application est equivalent a l'ignorance.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:13, « ce sont eux les imbeciles mais ils ne savent pas ». En 2:30, « je sais ce que vous ne savez pas ». La sourate oppose le savoir de Dieu au non-savoir des humains.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. Le theme du savoir et de l'ignorance est central. En 39:9, « sont-ils egaux ceux qui savent et ceux qui ne savent pas ? ». Le Coran insiste sur la valeur du savoir — mais du savoir applique, pas du savoir theorique.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est l'outil de la mission. Mais le savoir sans application est un savoir mort. Le khalifa doit savoir ET appliquer — l'ignorance pratique est aussi grave que l'ignorance theorique."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le sens de signe/marque est hors sujet — le verbe ya'lamuna designe le savoir, pas le marquage."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le mot est un verbe de connaissance, pas un nom designant l'univers."
            }
          }
        }
      },
      // mthl pos=23 (mithla - semblable)
      {
        word_key: "mthl", position: 23, sense_chosen: "semblable",
        analysis_axes: {
          sense_chosen: "semblable",
          concept_chosen: "Ressemblance/Exemple",
          concepts: {
            "Ressemblance/Exemple": {
              status: "retenu",
              senses: ["ressembler", "imiter", "exemple", "proverbe", "parabole", "semblable"],
              proof_ctx: "Le mot mithla est un nom masculin singulier accusatif de la racine m-th-l. Le Lane's donne : semblable, pareil, exemple, modele. Le mithl est ce qui ressemble a quelque chose d'autre — la ressemblance est une relation d'equivalence. Ici « mithla qawlihim » (semblable a leur parole) compare le discours des ignorants au discours des gens du Livre. La ressemblance est totale — les ignorants disent la meme chose que ceux qui lisent le Livre.",
              axe1_verset: "Le mot mithla est le pivot de la comparaison — les ignorants tiennent un discours semblable. Le champ lexical (ainsi, ceux qui ne savent pas, semblable, leur parole) construit la comparaison devastatrice : les gens du Livre qui se disqualifient mutuellement parlent comme des ignorants. Le mithl est ici une accusation — la ressemblance avec les ignorants disqualifie les pretentions des savants.",
              axe2_voisins: "Le verset 111 montrait la pretention commune. Le verset 112 montrait la condition reelle. Le verset 113 montre que la pretention ressemble a l'ignorance. Le mithl est l'outil de demasquage — en montrant la ressemblance, il revele la vacuite.",
              axe3_sourate: "La racine m-th-l apparait dans la sourate al-Baqarah dans le contexte des paraboles et des exemples. En 2:17, « leur exemple est comme celui qui a allume un feu ». En 2:26, « Dieu ne se gene pas de donner en exemple un moustique ». La sourate utilise les exemples et les comparaisons pour enseigner.",
              axe4_coherence: "La racine m-th-l apparait environ 169 fois dans le Coran. Le mathal (exemple/parabole) est un outil pedagogique coranique majeur. En 2:113, le mithl est utilise pour comparer des comportements — la ressemblance disqualifie.",
              axe5_frequence: "Pour la mission du khalifa, la ressemblance avec les ignorants est un signe d'echec. Le khalifa doit se distinguer des ignorants par ses actes et ses paroles. Quand les pretendus savants parlent comme les ignorants, la mission a echoue."
            },
            "Station/Présence": {
              status: "nul",
              senses: ["se tenir debout", "dresser"],
              proof_ctx: "Le sens de station est hors sujet — le contexte est la comparaison (semblable a), pas la position debout."
            },
            "Sens isolé/Mutiler": {
              status: "nul",
              senses: ["mutiler"],
              proof_ctx: "Le sens de mutilation est hors sujet — le contexte est la ressemblance."
            }
          }
        }
      },
      // alh pos=26 (Allahu - Dieu)
      {
        word_key: "alh", position: 26, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite", "divinite (concept)", "Dieu", "theologie", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif. Le Lane's donne : Dieu, la divinite unique. Ici Allah est le sujet du jugement final — c'est Dieu qui tranchera entre les groupes qui se disqualifient. Le nom est precede de la particule fa (donc/alors) qui introduit la consequence : puisque les groupes se disqualifient mutuellement et que les ignorants font de meme, ALORS Dieu tranchera. Dieu est l'arbitre final.",
              axe1_verset: "Le nom Allahu est le sujet du jugement final du verset. Le champ lexical (Dieu, juger, entre eux, jour de la levee) construit la resolution divine. Apres la cascade de disqualifications mutuelles, Dieu intervient comme arbitre. Le verset oppose les paroles humaines (accusations mutuelles) au jugement divin (tranchement definitif).",
              axe2_voisins: "Le verset 111 rapportait les pretentions humaines. Le verset 112 posait la condition divine. Le verset 113 confie le jugement a Dieu. Le triptyque montre que les humains pretendent, les humains s'accusent, mais c'est Dieu qui juge.",
              axe3_sourate: "Le nom Allah est omnipresent dans la sourate al-Baqarah. Il est le sujet principal — celui qui cree, legifere, juge, pardonne. En 2:113, il est l'arbitre final des divisions humaines.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 22:69, « Dieu jugera entre vous au Jour de la Resurrection en ce sur quoi vous divergiez ». Le Coran repete que le jugement final appartient a Dieu seul.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le juge final. Le khalifa ne peut pas juger de maniere definitive entre les groupes — le jugement definitif appartient a Dieu. La mission est de faire le bien et de laisser le jugement final a Dieu."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["adorer", "faire adorer", "se devouer au culte", "diviniser"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe de detresse."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["chercher refuge", "proteger", "demeurer"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe de refuge."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe de domination."
            }
          }
        }
      },
      // hkm pos=27 (yahkumu - tranche/juge)
      {
        word_key: "hkm", position: 27, sense_chosen: "juger",
        analysis_axes: {
          sense_chosen: "juger",
          concept_chosen: "Sagesse",
          concepts: {
            "Sagesse": {
              status: "retenu",
              senses: ["etre sage", "sagesse"],
              proof_ctx: "Le verbe yahkumu est un inaccompli 3MS de la racine h-k-m. Le Lane's donne : juger, trancher, decider, gouverner avec sagesse. La racine h-k-m porte a la fois le sens de jugement et de sagesse — le jugement divin est un jugement sage. L'inaccompli indique que le jugement est a venir (au Jour de la levee). Le sujet est Allah — seul Dieu juge avec sagesse parfaite. La distinction avec le sens d'autorite (nul) est que le jugement ici est un acte de sagesse, pas un acte de pouvoir brut.",
              axe1_verset: "Le verbe yahkumu est la resolution du verset — apres les accusations mutuelles, Dieu tranche. Le champ lexical (Dieu, juger, entre eux, jour, levee, diverger) construit le cadre du jugement final. Le jugement divin n'est pas une accusation partisane comme celles des groupes — c'est un tranchement sage et definitif. Le verset oppose la partialite humaine a l'impartialite divine.",
              axe2_voisins: "Le verset 111 montrait la pretention. Le verset 112 posait la condition. Le verset 113 confie le jugement a Dieu. Le triptyque se conclut par le jugement divin — la resolution definitive de toutes les pretentions et accusations.",
              axe3_sourate: "La racine h-k-m apparait dans la sourate al-Baqarah dans le contexte du jugement et de la sagesse. En 2:32, « Tu es le Sage ». En 2:129, « le Puissant, le Sage ». La sourate associe la sagesse au jugement divin.",
              axe4_coherence: "La racine h-k-m apparait environ 209 fois dans le Coran. En 22:69 et 32:25, « Dieu jugera entre eux au Jour de la Resurrection ». Le Coran repete que le jugement final est un acte de sagesse divine. Le tranchement divin est toujours juste car il est fonde sur la sagesse parfaite.",
              axe5_frequence: "Pour la mission du khalifa, le jugement divin est le modele. Le khalifa juge avec sagesse, pas avec partialite. La mission exige le jugement sage — pas l'accusation partisane."
            },
            "Jugement/Décision": {
              status: "probable",
              senses: ["juger", "decider", "sentence"],
              proof_ctx: "Le sens de jugement/decision est un aspect du sens retenu. La distinction philosophique est que le jugement (hukm) est l'acte de trancher, tandis que la sagesse (hikma) est la qualite qui guide le jugement. En 2:113, le verbe yahkumu designe un jugement qui est aussi un acte de sagesse — les deux sens sont presents simultanement. Le contexte favorise la sagesse comme qualite englobante.",
              axe1_verset: "Le sens de jugement est directement present dans le verset — Dieu juge entre les groupes. Le jugement est un acte concret de tranchement. Mais le verset situe ce jugement au Jour de la levee — un contexte de sagesse totale, pas de decision hasardeuse.",
              axe2_voisins: "Le contexte des versets voisins montre que le jugement divin est la resolution des pretentions humaines. Le jugement est fonde sur la sagesse, pas sur les accusations.",
              axe3_sourate: "La sourate utilise h-k-m dans les deux sens — jugement et sagesse. En 2:269, « Il donne la sagesse a qui Il veut ». En 2:113, le jugement est un acte de sagesse.",
              axe4_coherence: "Le Coran associe systematiquement le jugement divin a la sagesse. Le hukm sans hikma est un pouvoir brut — le hukm avec hikma est la justice.",
              axe5_frequence: "Le jugement sage est le standard de la mission du khalifa."
            },
            "Autorité/Pouvoir": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouvernance est un aspect du hukm mais le verset parle de jugement entre des parties en conflit, pas de gouvernance."
            },
            "Sens isolé/Empêcher": {
              status: "nul",
              senses: ["empecher"],
              proof_ctx: "Le sens d'empecher est un sens premier de h-k-m (le mors du cheval qui empeche) mais hors sujet dans ce contexte de jugement."
            }
          }
        }
      },
      // byn pos=28 (baynahum - entre eux)
      {
        word_key: "byn", position: 28, sense_chosen: "entre",
        analysis_axes: {
          sense_chosen: "entre",
          concept_chosen: "Séparation/Distance",
          concepts: {
            "Séparation/Distance": {
              status: "retenu",
              senses: ["separer", "entre", "quitter"],
              proof_ctx: "Le mot baynahum est un nom masculin singulier accusatif de la racine b-y-n avec pronom suffixe 3MP. Le Lane's donne : entre, parmi, separation. Le bayn est l'espace qui separe deux choses — etre entre c'est etre dans l'espace de separation. Le pronom hum (eux) renvoie aux groupes en conflit. Le jugement de Dieu se situe dans l'espace qui les separe — la ou se trouve la divergence, Dieu tranche.",
              axe1_verset: "Le mot baynahum situe le jugement divin dans l'espace de la divergence. Le champ lexical (Dieu, juger, entre eux, diverger) montre que le jugement est une intervention dans l'espace de la division. Les groupes se sont separes par leurs accusations mutuelles — Dieu juge entre eux, dans l'espace de leur separation.",
              axe2_voisins: "Le verset 111 montrait les groupes unis dans la pretention (Juifs et Chretiens ensemble). Le verset 113 les montre divises dans l'accusation. Le bayn du verset 113 est l'espace de division que le jugement divin viendra combler.",
              axe3_sourate: "La racine b-y-n apparait dans la sourate al-Baqarah dans les deux sens — separation et clarte. En 2:68, « une vache entre les deux » (bayna dhalika). En 2:213, « Dieu a fait descendre le Livre pour trancher entre les gens ». La sourate montre que la separation appelle le jugement.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. L'expression « yahkumu baynahum » (juge entre eux) est recurrente — en 3:55, 5:48, 22:69. Le Coran repete que Dieu juge dans l'espace de la divergence humaine.",
              axe5_frequence: "Pour la mission du khalifa, le bayn est l'espace de travail — le khalifa oeuvre dans l'espace qui separe les groupes en conflit. La mission est de rapprocher par la justice, pas de diviser par les accusations."
            },
            "Clarté/Évidence": {
              status: "nul",
              senses: ["etre clair", "expliquer", "evident", "preuve"],
              proof_ctx: "Le sens de clarte est hors sujet — le mot baynahum designe l'espace spatial entre les groupes, pas la clarte d'une explication."
            }
          }
        }
      },
      // ywm pos=29 (yawma - le jour)
      {
        word_key: "ywm", position: 29, sense_chosen: "jour",
        analysis_axes: {
          sense_chosen: "jour",
          concept_chosen: "Temps/Période",
          concepts: {
            "Temps/Période": {
              status: "retenu",
              senses: ["jour", "journee", "temps", "periode"],
              proof_ctx: "Le mot yawma est un nom masculin singulier accusatif de la racine y-w-m. Le Lane's donne : jour, journee, temps, periode. Le yawm est une unite de temps — le jour de la levee est le moment du jugement. L'accusatif marque le complement de temps — Dieu juge CE jour-la. Le yawm al-qiyama (jour de la levee) est un des concepts centraux du Coran — le moment ou tout est revele et juge.",
              axe1_verset: "Le mot yawma situe le jugement dans le temps — le jour de la levee. Le champ lexical (juger, entre eux, jour, levee, diverger) construit le cadre temporel du jugement. Le jugement n'est pas immediat — il est reporte au jour de la levee. Cela signifie que les divergences actuelles seront tranchees plus tard, pas maintenant.",
              axe2_voisins: "Le verset 112 promettait la recompense aupres du Seigneur. Le verset 113 situe le jugement au jour de la levee. Les deux versets pointent vers le futur — la recompense et le jugement sont a venir.",
              axe3_sourate: "La racine y-w-m apparait tres frequemment dans la sourate al-Baqarah. En 2:8, « le dernier jour ». En 2:48, « craignez un jour ». La sourate rappelle constamment le jour du jugement comme point de reference ultime.",
              axe4_coherence: "La racine y-w-m apparait environ 475 fois dans le Coran. Le « jour de la levee » est mentionne environ 70 fois. C'est un des concepts les plus repetes du Coran — le jour ou tout est revele et juge.",
              axe5_frequence: "Pour la mission du khalifa, le jour de la levee est l'horizon de la mission. Le khalifa travaille pour ce jour — le jour ou les actes sont peses et les divergences tranchees."
            },
            "Événement/Moment marquant": {
              status: "nul",
              senses: ["evenement", "bataille", "jour de combat", "jour marquant"],
              proof_ctx: "Le sens d'evenement/bataille est hors sujet — le yawm al-qiyama est un jour specifique de jugement, pas une bataille."
            }
          }
        }
      },
      // qwm pos=30 (al-qiyamati - la levee/resurrection)
      {
        word_key: "qwm", position: 30, sense_chosen: "se lever",
        analysis_axes: {
          sense_chosen: "se lever",
          concept_chosen: "Verticalité/Droiture",
          concepts: {
            "Verticalité/Droiture": {
              status: "retenu",
              senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger", "se tenir debout"],
              proof_ctx: "Le mot al-qiyamati est un nom feminin singulier defini genitif de la racine q-w-m. Le Lane's donne : levee, resurrection, dressement. La qiyama est l'acte de se lever — le jour de la qiyama est le jour ou tout se leve. La racine q-w-m porte le sens de verticalite et de droiture — se lever c'est se dresser droit. Le jour de la levee est le jour ou la verite se dresse et ou les comptes sont rendus.",
              axe1_verset: "Le mot al-qiyamati specifie le jour du jugement — le jour de la levee. Le champ lexical (juger, jour, levee) construit le moment du jugement final. La qiyama est le moment ou tout ce qui etait cache se leve et se manifeste. Les divergences cachees dans la vie terrestre seront exposees et tranchees.",
              axe2_voisins: "Le verset 112 promettait la recompense aupres du Seigneur — une promesse pour la qiyama. Le verset 113 situe le jugement a la qiyama. Les deux versets convergent vers le meme point temporel — la levee est le moment de la verite finale.",
              axe3_sourate: "La racine q-w-m apparait dans la sourate al-Baqarah sous plusieurs formes. En 2:85, « le jour de la levee ». En 2:275, « ne se levent que comme se leve celui que le toucher frappe ». La sourate utilise la levee comme metaphore du jugement et de la rectitude.",
              axe4_coherence: "La racine q-w-m apparait environ 660 fois dans le Coran. Le « jour de la qiyama » est mentionne environ 70 fois. C'est un des concepts les plus importants — le jour ou tout se leve pour etre juge. Le Coran fait de la levee le moment de verite ultime.",
              axe5_frequence: "Pour la mission du khalifa, la qiyama est l'horizon de la mission. Le khalifa se prepare pour ce jour en agissant avec droiture. La levee est le moment ou la mission est evaluee — se lever devant Dieu avec ses actes."
            },
            "Peuple/Communauté": {
              status: "nul",
              senses: ["peuple", "communaute", "tribu", "nation", "groupe"],
              proof_ctx: "Le sens de peuple est hors sujet — le mot al-qiyama designe la levee/resurrection, pas un peuple."
            },
            "Gestion/Administration": {
              status: "nul",
              senses: ["gerer", "administrer", "prendre en charge", "diriger", "veiller sur"],
              proof_ctx: "Le sens de gestion est hors sujet — le contexte est le jour de la levee, pas l'administration."
            }
          }
        }
      },
      // kwn pos=33 (kanu - ils etaient)
      {
        word_key: "kwn", position: 33, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kanu est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister. Kanu est un verbe incomplet qui situe un etat dans le passe. Ici « fi-ma kanu fihi yakhtaifuna » (dans ce en quoi ils etaient — en cela — divergeant) decrit l'etat de divergence qui existait dans la vie terrestre. L'accompli marque que la divergence a eu lieu — au jour de la levee, elle sera tranchee.",
              axe1_verset: "Le verbe kanu situe la divergence dans le passe — au jour de la levee, les divergences terrestres seront deja du passe. Le verset oppose le present (les accusations mutuelles) au futur (le jugement divin) via le passe de la divergence. Kanu est le pont temporel entre la divergence et le jugement.",
              axe2_voisins: "Le verset 111 utilisait kana pour la condition d'identite. Le verset 113 utilise kanu pour la condition de divergence. Les deux usages montrent que kana situe des etats qui seront juges au jour de la levee.",
              axe3_sourate: "Le verbe kana apparait tres frequemment dans la sourate al-Baqarah pour situer les etats et les conditions dans le temps.",
              axe4_coherence: "La formule « fi-ma kanu fihi yakhtaifuna » (dans ce en quoi ils divergeaient) est recurrente dans le Coran — en 16:124, 32:25, 39:3. Le Coran promet systematiquement le jugement divin sur les divergences.",
              axe5_frequence: "La divergence est un etat passe au jour du jugement. Le khalifa sait que les divergences actuelles seront tranchees — sa mission est de vivre dans la droiture malgre les divergences."
            }
          }
        }
      },
      // khlf pos=35 (yakhtaifuna - divergeaient)
      {
        word_key: "khlf", position: 35, sense_chosen: "diverger",
        analysis_axes: {
          sense_chosen: "diverger",
          concept_chosen: "Succession/Différence",
          concepts: {
            "Succession/Différence": {
              status: "retenu",
              senses: ["succeder", "differer", "derriere", "successeur"],
              proof_ctx: "Le verbe yakhtaifuna est un inaccompli 3MP de la forme VIII (ifta'ala) de la racine kh-l-f. Le Lane's donne : diverger, etre en desaccord, differer, succeder. La forme VIII est reciproque — ils divergent les uns des autres. L'inaccompli dans la construction « kanu fihi yakhtaifuna » decrit une action continue dans le passe — ils etaient en etat de divergence permanente. La racine kh-l-f porte le sens de venir apres, etre derriere, differer — la divergence est le resultat de positions differentes.",
              axe1_verset: "Le verbe yakhtaifuna ferme le verset en nommant le probleme — la divergence. Le champ lexical (dire, ne pas etre sur rien, de meme, juger, diverger) montre que la divergence est le resultat des accusations mutuelles. Les groupes divergent parce qu'ils se nient mutuellement. Le verset identifie la divergence comme le probleme que Dieu viendra trancher.",
              axe2_voisins: "Le verset 111 montrait la pretention commune (exclusivite du jardin). Le verset 113 montre que cette pretention commune mene a la divergence — chaque groupe pretend avoir l'exclusivite et nie celle de l'autre. La pretention et la divergence sont liees — pretendre l'exclusivite cree la division.",
              axe3_sourate: "La racine kh-l-f apparait dans la sourate al-Baqarah dans le contexte de la succession et de la divergence. En 2:164, les signes sont pour ceux qui raisonnent. La divergence est le resultat du refus de raisonner ensemble.",
              axe4_coherence: "La racine kh-l-f apparait environ 127 fois dans le Coran. La forme VIII (ikhtalafa) designe specifiquement la divergence reciproque. En 3:55, 16:124, 32:25 — « Dieu jugera dans ce en quoi ils divergeaient ». Le Coran promet systematiquement le jugement sur les divergences.",
              axe5_frequence: "Pour la mission du khalifa (le mot khalifa vient de la meme racine kh-l-f !), la divergence est le terrain de la mission. Le khalifa est celui qui succede (khalafa) pour reduire les divergences (ikhtilaf). La mission du khalifa est precisement de travailler dans l'espace de la divergence pour etablir la justice."
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

  const verseIds = [118, 119, 120];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 111, 112, 113 ===\n');
  for (const v of [111, 112, 113]) {
    await processVerse(v);
  }
  await syncWordMeanings();
  console.log('\n=== PIPELINE V111-V113 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
