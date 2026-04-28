const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 136
// verse_id=143, analysis_id=502
// "Dites : «Nous avons place notre confiance en Dieu
//  et en ce qui a ete fait descendre vers nous et en ce
//  qui a ete fait descendre vers Abraham et Ismael et
//  Isaac et Jacob et les Tribus, et en ce qui a ete
//  accorde a Moussa et a Issa, et en ce qui a ete
//  accorde aux informateurs, venant de leur Seigneur :
//  nous ne faisons aucune distinction entre aucun
//  d'entre eux. Et nous, a Lui, sommes soumis.»"
// =====================================================

const verseData = {
  136: {
    verse_id: 143,
    analysis_id: 502,
    translation_arab: "Dites : nous avons place notre confiance en Dieu et en ce qui a ete fait descendre vers nous et en ce qui a ete fait descendre vers Abraham et Ismael et Isaac et Jacob et les Tribus et en ce qui a ete accorde a Moussa et a Issa et en ce qui a ete accorde aux informateurs venant de leur Seigneur nous ne faisons aucune distinction entre aucun d'entre eux et nous a Lui sommes soumis.",
    full_translation: "Dites : «Nous croyons en Allah et en ce qu'on nous a revele, et en ce qu'on a fait descendre vers Abraham et Ismael et Isaac et Jacob et les Tribus, et en ce qui a ete donne a Moise et a Jesus, et en ce qui a ete donne aux prophetes, venant de leur Seigneur: nous ne faisons aucune distinction entre eux. Et a Lui nous sommes Soumis».",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset est un ordre de confession de foi collective. Le verbe **qulu** est un imperatif 2MP de la racine q-w-l. Le Lane's donne : dire, enoncer, affirmer. L'imperatif pluriel ordonne a un groupe de prononcer une declaration. Ce qui suit est le contenu de cette declaration. Le verbe **amanna** est un accompli 1P de la racine a-m-n a la forme IV. Le Lane's donne a la forme IV : placer sa confiance, se sentir en securite aupres de, croire. L'accompli 1P (nous) marque un acte acheve — la confiance est deja placee, c'est un fait accompli. La preposition **bi** (en) introduit l'objet de la confiance : Dieu d'abord, puis tout ce qui a ete fait descendre. Le verbe **unzila** est un accompli passif 3MS de la racine n-z-l a la forme IV. Le Lane's donne : faire descendre, envoyer d'en haut. Le passif indique que l'agent n'est pas nomme — ce qui a ete fait descendre, par qui que ce soit (c'est-a-dire Dieu). La premiere occurrence (pos 7) porte sur « vers nous » (ilayna) — ce qui a ete fait descendre vers les locuteurs. La seconde occurrence (pos 11) porte sur « vers Abraham » et les prophetes listes. Le nom **Ibrahim** est un nom propre etranger au genitif. Le Lane's ne donne pas de racine arabe claire pour ce nom. Il designe le patriarche. Les noms **Isma'il**, **Ishaq**, **Ya'qub** sont egalement des noms propres designant les fils et petit-fils d'Abraham. Le nom **al-asbat** est un pluriel defini de la racine s-b-t. Le Lane's donne : petit-fils, descendant, tribu (les tribus issues de Jacob). L'article defini (al-) marque qu'il s'agit des Tribus connues — les douze tribus d'Israel. Le verbe **utiya** est un accompli passif 3MS de la racine a-w-t a la forme IV. Le Lane's donne : donner, accorder, apporter. Le passif indique un don recu — ce qui a ete accorde a Moussa et Issa. Le nom **Musa** est un nom propre designant le prophete. Le nom **Issa** est un nom propre designant le prophete. Le nom **an-nabiyyuna** est un pluriel defini nominatif de la racine n-b-a. Le Lane's donne : informateur, celui qui apporte une nouvelle, prophete. Les informateurs sont ceux qui transmettent les nouvelles de Dieu. La preposition **min** (de, venant de) + **rabbihim** (leur Seigneur) precise l'origine de ce qui a ete accorde — tout vient de leur Seigneur. Le verbe **nufarriqu** est un inaccompli 1P de la racine f-r-q a la forme II. Le Lane's donne : separer, distinguer, diviser. La negation **la** + l'inaccompli cree une declaration permanente : nous ne faisons jamais de distinction. Le mot **bayna** est une preposition de la racine b-y-n. Le Lane's donne : entre, au milieu de. Le mot **ahadin** est un nom indefini genitif de la racine a-h-d. Le Lane's donne : un, quiconque. L'indefini dans un contexte negatif a valeur de totalite : aucun d'entre eux. Le pronom **nahnu** est un pronom personnel 1P. Le mot **lahu** est la preposition li + pronom 3MS (a Lui, pour Lui). Le mot **muslimuna** est un participe actif pluriel nominatif de la racine s-l-m a la forme IV. Le Lane's donne : celui qui se soumet, celui qui entre dans la paix. Le participe actif indique un etat permanent et actif — ils sont en etat de soumission continue.

\u00a7JUSTIFICATION\u00a7
**dites** — Le sens retenu est « dire ». Le verbe qulu est un imperatif pluriel. L'alternative « penser/opinion » est ecartee car l'imperatif appelle un acte de parole, pas un acte de pensee.

**nous avons place notre confiance** — Le sens retenu est « placer sa confiance ». Le verbe amanna a la forme IV porte le sens de se sentir en securite aupres de quelqu'un. L'alternative « croire » est un sens probable mais plus restreint — la confiance inclut la croyance mais va au-dela. L'alternative « proteger » est ecartee car le verbe est a la forme IV intransitive (on place sa confiance), pas transitive (on ne protege pas quelqu'un ici).

**en Dieu** — Le sens retenu est « Dieu ». Allah est le nom propre de la divinite. L'alternative « adorer » est ecartee car le mot est un nom propre, pas un verbe.

**a ete fait descendre** — Le sens retenu est « faire descendre ». Le verbe unzila au passif decrit le mouvement de revelation du haut vers le bas. L'alternative « s'installer » est ecartee car le passif + vers (ila) indique un mouvement vers un destinataire, pas une installation.

**Abraham/Ismael/Isaac/Jacob** — Noms propres designant les patriarches. Pas d'alternative pertinente.

**les Tribus** — Le sens retenu est « descendance/tribu ». Le mot al-asbat designe les tribus issues de Jacob. L'alternative « sabbat/repos » est ecartee car le contexte est une liste de destinataires de la revelation, pas le jour de repos.

**a ete accorde** — Le sens retenu est « donner/accorder ». Le verbe utiya au passif decrit un don recu. L'alternative « se refugier » est ecartee car le contexte est un don de revelation, pas un refuge.

**Moussa/Issa** — Noms propres designant les prophetes. Pas d'alternative pertinente.

**les informateurs** — Le sens retenu est « informateur/celui qui apporte une nouvelle ». Le mot an-nabiyyuna designe ceux qui transmettent les informations divines. L'alternative « crier » est ecartee car le contexte est la transmission de nouvelles, pas l'acte de crier.

**leur Seigneur** — Le sens retenu est « seigneur/maitre ». Le mot rabbihim designe celui qui possede et eleve. L'alternative « croitre/augmenter » est ecartee car le mot est un nom avec pronom possessif, pas un verbe.

**ne faisons aucune distinction** — Le sens retenu est « separer/distinguer ». Le verbe nufarriqu a la forme II avec negation signifie ne pas faire de distinction. L'alternative « groupe/partie » est ecartee car le mot est un verbe, pas un nom.

**entre** — Le sens retenu est « entre ». Le mot bayna est une preposition spatiale. L'alternative « etre clair » est ecartee car le mot est ici une preposition, pas un verbe.

**aucun** — Le sens retenu est « quiconque/un ». Le mot ahadin dans un contexte negatif signifie « aucun ». L'alternative « unicite » est ecartee car le contexte est l'indefini negatif, pas la declaration d'unicite.

**nous** — Pronom personnel 1P. Pas d'alternative pertinente.

**a Lui** — Preposition + pronom 3MS. La particule lahu indique la direction de la soumission — vers Lui.

**soumis** — Le sens retenu est « soumis/celui qui entre dans la paix ». Le mot muslimuna est un participe actif de la forme IV de s-l-m. L'alternative « sain et sauf » est ecartee car la forme IV (aslama) porte le sens actif de se soumettre, pas l'etat passif d'etre indemne.

\u00a7CRITIQUE\u00a7
Les traductions courantes rendent amanna par « nous croyons ». Notre traduction donne « nous avons place notre confiance ». La racine a-m-n porte d'abord le sens de securite et de confiance — la forme IV signifie « se sentir en securite aupres de ». Le mot « croire » en francais est plus restreint — il evoque l'adhesion intellectuelle. « Placer sa confiance » inclut la croyance mais y ajoute la dimension de securite interieure. La difference est significative : on peut croire sans faire confiance, mais placer sa confiance implique aussi la croyance. Les traductions rendent an-nabiyyuna par « les prophetes ». Notre traduction donne « les informateurs » car la racine n-b-a porte le sens premier d'informer, apporter une nouvelle. Le mot « prophete » vient du grec prophetes (celui qui parle au nom de) et porte des connotations qui n'existent pas dans la racine arabe. « Informateur » est plus fidele a l'etymologie. Les traductions rendent al-asbat par « les Tribus » — nous gardons ce sens qui est correct. La difference principale est dans le verbe amanna : notre traduction rend le sens etymologique complet de la racine.`,
    segments: [
      { fr: "dites", pos: "verbe", phon: "qulu", arabic: "\u0642\u064f\u0648\u0644\u064f\u0648\u0653\u0627\u06df", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "nous avons place notre confiance", pos: "verbe", phon: "amanna", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u0651\u064e\u0627", word_key: "amn", is_particle: false, sense_retenu: "placer sa confiance", position: 2 },
      { fr: "en", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 3 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 5 },
      { fr: "ce qui", phon: "ma", arabic: "\u0645\u064e\u0622", is_particle: true, position: 6 },
      { fr: "a ete fait descendre", pos: "verbe", phon: "unzila", arabic: "\u0623\u064f\u0646\u0632\u0650\u0644\u064e", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 7 },
      { fr: "vers nous", phon: "ilayna", arabic: "\u0625\u0650\u0644\u064e\u064a\u0652\u0646\u064e\u0627", is_particle: true, position: 8 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 9 },
      { fr: "ce qui", phon: "ma", arabic: "\u0645\u064e\u0622", is_particle: true, position: 10 },
      { fr: "a ete fait descendre", pos: "verbe", phon: "unzila", arabic: "\u0623\u064f\u0646\u0632\u0650\u0644\u064e", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 11 },
      { fr: "vers", phon: "ila", arabic: "\u0625\u0650\u0644\u064e\u0649\u0670\u0653", is_particle: true, position: 12 },
      { fr: "Abraham", pos: "nom", phon: "Ibrahim", arabic: "\u0625\u0650\u0628\u0652\u0631\u064e\u0670\u0647\u0650\u0640\u06e7\u0645\u064e", word_key: "brhm", is_particle: false, sense_retenu: "Abraham", position: 13 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 14 },
      { fr: "Ismael", pos: "nom", phon: "Isma'il", arabic: "\u0625\u0650\u0633\u0652\u0645\u064e\u0640\u0670\u0639\u0650\u064a\u0644\u064e", word_key: "sme", is_particle: false, sense_retenu: "Ismael", position: 15 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 16 },
      { fr: "Isaac", pos: "nom", phon: "Ishaq", arabic: "\u0625\u0650\u0633\u0652\u062d\u064e\u0640\u0670\u0642\u064e", word_key: "shq", is_particle: false, sense_retenu: "Isaac", position: 17 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 18 },
      { fr: "Jacob", pos: "nom", phon: "Ya'qub", arabic: "\u064a\u064e\u0639\u0652\u0642\u064f\u0648\u0628\u064e", word_key: "eqb", is_particle: false, sense_retenu: "Jacob", position: 19 },
      { fr: "et les Tribus", pos: "nom", phon: "al-asbat", arabic: "\u0671\u0644\u0652\u0623\u064e\u0633\u0652\u0628\u064e\u0627\u0637\u0650", word_key: "sbt", is_particle: false, sense_retenu: "tribus", position: 20 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 21 },
      { fr: "ce qui", phon: "ma", arabic: "\u0645\u064e\u0622", is_particle: true, position: 22 },
      { fr: "a ete accorde", pos: "verbe", phon: "utiya", arabic: "\u0623\u064f\u0648\u062a\u0650\u0649\u064e", word_key: "awt", is_particle: false, sense_retenu: "accorder", position: 23 },
      { fr: "Moussa", pos: "nom", phon: "Musa", arabic: "\u0645\u064f\u0648\u0633\u064e\u0649\u0670", word_key: "mwsa", is_particle: false, sense_retenu: "Moussa", position: 24 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 25 },
      { fr: "Issa", pos: "nom", phon: "Issa", arabic: "\u0639\u0650\u064a\u0633\u064e\u0649\u0670", word_key: "eysa", is_particle: false, sense_retenu: "Issa", position: 26 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 27 },
      { fr: "ce qui", phon: "ma", arabic: "\u0645\u064e\u0622", is_particle: true, position: 28 },
      { fr: "a ete accorde", pos: "verbe", phon: "utiya", arabic: "\u0623\u064f\u0648\u062a\u0650\u0649\u064e", word_key: "awt", is_particle: false, sense_retenu: "accorder", position: 29 },
      { fr: "les informateurs", pos: "nom", phon: "an-nabiyyuna", arabic: "\u0671\u0644\u0646\u0651\u064e\u0628\u0650\u064a\u0651\u064f\u0648\u0646\u064e", word_key: "nba", is_particle: false, sense_retenu: "informateur", position: 30 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 31 },
      { fr: "leur Seigneur", pos: "nom", phon: "rabbihim", arabic: "\u0631\u064e\u0651\u0628\u0651\u0650\u0647\u0650\u0645\u0652", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 32 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 33 },
      { fr: "faisons de distinction", pos: "verbe", phon: "nufarriqu", arabic: "\u0646\u064f\u0641\u064e\u0631\u0650\u0651\u0642\u064f", word_key: "frq", is_particle: false, sense_retenu: "distinguer", position: 34 },
      { fr: "entre", pos: "nom", phon: "bayna", arabic: "\u0628\u064e\u064a\u0652\u0646\u064e", word_key: "byn", is_particle: false, sense_retenu: "entre", position: 35 },
      { fr: "aucun", pos: "nom", phon: "ahadin", arabic: "\u0623\u064e\u062d\u064e\u062f\u064d", word_key: "ahd", is_particle: false, sense_retenu: "quiconque", position: 36 },
      { fr: "d'entre", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 37 },
      { fr: "eux", pos: "pronom", phon: "hum", arabic: "\u0647\u064f\u0645\u0652", word_key: "hmm", is_particle: false, sense_retenu: "eux", position: 38 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 39 },
      { fr: "nous", pos: "pronom", phon: "nahnu", arabic: "\u0646\u064e\u062d\u0652\u0646\u064f", word_key: "nhn", is_particle: false, sense_retenu: "nous", position: 40 },
      { fr: "a Lui", pos: "nom", phon: "lahu", arabic: "\u0644\u064e\u0647\u064f\u06e5", word_key: "lhw", is_particle: false, sense_retenu: "a lui", position: 41 },
      { fr: "soumis", pos: "adjectif", phon: "muslimuna", arabic: "\u0645\u064f\u0633\u0652\u0644\u0650\u0645\u064f\u0648\u0646\u064e", word_key: "slm", is_particle: false, sense_retenu: "soumis", position: 42 }
    ],
    words: [
      // qwl pos=1
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qulu est un imperatif 2MP de la racine q-w-l. Le Lane's donne : dire, enoncer, prononcer, affirmer. L'imperatif pluriel ordonne a un groupe de produire un acte de parole. Le dire est un acte exterieur — les mots sortent du locuteur et atteignent l'auditeur. Ici l'imperatif ouvre le verset et tout ce qui suit est le contenu de la parole ordonnee. Le texte prescrit non seulement l'acte de dire mais aussi le contenu exact de ce qui doit etre dit. La distinction avec l'opinion (nul) est claire : l'imperatif appelle un acte de parole exterieur, pas un jugement interieur.",
              axe1_verset: "Le verbe qulu ouvre le verset comme un ordre de confession collective. Tout le verset est le contenu de ce qui doit etre dit. Le champ lexical qui suit (confiance, descente, accorder, informateurs, Seigneur, soumis) constitue le contenu de la parole ordonnee. Le dire n'est pas un acte vide — il porte un contenu doctrinal precis : la confiance en Dieu, la reconnaissance de toutes les revelations, l'absence de distinction entre les envoyes, et la soumission.",
              axe2_voisins: "Le verset 135 ordonnait aux juifs et chretiens de suivre la religion d'Abraham. Le verset 136 repond avec un autre imperatif : dites. La succession des imperatifs montre un dialogue — chaque partie recoit un ordre de parole. Le verset 137 enchainera avec une condition : « s'ils placent leur confiance comme vous avez place votre confiance ». L'acte de dire est le pont entre l'ordre (135) et la condition (137).",
              axe3_sourate: "La racine q-w-l est omnipresente dans la sourate al-Baqarah. En 2:80, « ils disent ». En 2:111, « ils disent ». En 2:130, « qui se detourne de la religion d'Abraham ? ». La sourate est structuree par des actes de parole — des declarations, des reponses, des ordres de dire. Le verset 136 s'inscrit dans cette structure dialogique : Dieu ordonne de dire une profession de foi.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran — c'est une des racines les plus frequentes. L'imperatif « qul » (dis, au singulier) apparait plus de 300 fois comme formule introductive d'une revelation. L'imperatif pluriel « qulu » (dites) est plus rare et marque un ordre collectif. En 2:136, la forme plurielle montre que la confession de foi est un acte communautaire, pas individuel.",
              axe5_frequence: "Pour la mission du khalifa, le dire est un acte de mission. L'imperatif ordonne de prononcer la confession de foi — le khalifa ne peut rester silencieux. Dire c'est s'engager publiquement. La parole engage celui qui la prononce et atteint ceux qui l'entendent. Le khalifa doit dire la verite sur les envoyes et les revelations sans faire de distinction."
            },
            "Pens\u00e9e/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion est un etat interieur. L'imperatif qulu appelle un acte de parole exterieur — pas un jugement interieur."
            }
          }
        }
      },
      // amn pos=2
      {
        word_key: "amn", position: 2, sense_chosen: "placer sa confiance",
        analysis_axes: {
          sense_chosen: "placer sa confiance",
          concept_chosen: "S\u00e9curit\u00e9/Confiance",
          concepts: {
            "S\u00e9curit\u00e9/Confiance": {
              status: "retenu",
              senses: ["\u00eatre en s\u00e9curit\u00e9", "se sentir en s\u00e9curit\u00e9", "faire confiance", "confier", "fid\u00e8le", "lieu s\u00fbr"],
              proof_ctx: "Le verbe amanna est un accompli 1P de la racine a-m-n a la forme IV. Le Lane's donne : se sentir en securite, placer sa confiance en, remettre quelque chose en confiance. La forme IV porte le sens causatif de se mettre en securite aupres de quelqu'un. L'accompli 1P (nous) marque un fait acheve — la confiance est placee, ce n'est pas une intention future. La preposition bi (en) dirige la confiance vers Dieu et vers ce qui a ete revele. Le sens de securite est premier dans la racine — placer sa confiance c'est se sentir en securite aupres de quelqu'un. La distinction avec « croire » (probable) est philosophique : la confiance est un etat de securite, la croyance est une adhesion intellectuelle.",
              axe1_verset: "Le verbe amanna est le coeur de la confession ordonnee par qulu. Tout le verset developpe l'objet de cette confiance : Dieu, ce qui a ete fait descendre vers nous, ce qui a ete fait descendre vers les patriarches, ce qui a ete accorde a Moussa et Issa, ce qui a ete accorde aux informateurs. La confiance embrasse tout — elle ne fait aucune distinction. Le champ lexical (Dieu, descente, patriarches, informateurs, Seigneur) montre que la confiance porte sur l'ensemble de la chaine de transmission divine.",
              axe2_voisins: "Le verset 135 invitait les gens a suivre la religion d'Abraham. Le verset 136 repond en declarant la confiance dans tout ce qui a ete revele aux patriarches et aux informateurs. Le verset 137 conditionne : « s'ils placent leur confiance comme vous avez place votre confiance, ils seront guides ». La confiance est le critere — pas une confession partielle mais totale.",
              axe3_sourate: "La racine a-m-n est fondamentale dans la sourate al-Baqarah. En 2:3-4, les pieux « placent leur confiance dans l'invisible et dans ce qui t'a ete fait descendre et ce qui a ete fait descendre avant toi ». En 2:62, la meme condition : « quiconque place sa confiance en Dieu et au Jour dernier ». Le verset 136 reprend et developpe cette profession de foi en listant explicitement tous les destinataires de la revelation.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. Le schema « amanna bi-Allah wa-ma unzila » est recurrent. En 3:84, le verset est presque identique a 2:136. En 4:136, « placez votre confiance en Dieu, en Son envoye, et dans le Livre qu'Il a fait descendre ». Le Coran insiste sur la confiance totale — pas selective — dans toute la chaine de revelation.",
              axe5_frequence: "Pour la mission du khalifa, la confiance est le fondement de la mission. Sans confiance en Dieu et en ce qui a ete revele, il n'y a pas de mission. La confiance totale — dans toutes les revelations sans distinction — est la marque du khalifa accompli. Faire confiance partiellement c'est trahir la mission."
            },
            "Foi/Adh\u00e9sion": {
              status: "probable",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "Le sens de croire est un acte d'adhesion intellectuelle. La distinction philosophique avec la confiance est que la croyance est un jugement (je tiens ceci pour vrai) tandis que la confiance est un etat (je me sens en securite aupres de). Les deux se chevauchent — on ne peut placer sa confiance sans croire — mais la confiance est plus vaste. Le verset utilise la preposition bi qui dirige l'acte vers un objet : on place sa confiance EN Dieu. Le mot « croire » pourrait convenir mais il ne rend pas la dimension de securite interieure.",
              axe1_verset: "Le mot amanna pourrait se traduire par « nous croyons ». Le contenu du verset (enumeration des revelations et des prophetes) est compatible avec l'adhesion intellectuelle. Cependant, la conclusion « nous sommes soumis a Lui » montre que l'acte depasse la simple adhesion intellectuelle — il s'agit d'un engagement total qui inclut la soumission.",
              axe2_voisins: "Le verset 137 utilise le meme verbe amanna dans une condition. Le contexte des versets voisins traite l'iman comme un acte complet — pas juste une croyance mais une orientation de vie.",
              axe3_sourate: "La sourate al-Baqarah commence par definir les pieux comme ceux qui « placent leur confiance dans l'invisible » (2:3). Le verbe amanna dans la sourate designe un acte plus large que la simple croyance — c'est un engagement total.",
              axe4_coherence: "Le Coran utilise amanna avec bi dans des centaines de contextes. L'acte designe parfois la croyance simple (accepter comme vrai), parfois la confiance totale (se remettre a). Le contexte determine la nuance.",
              axe5_frequence: "La croyance comme adhesion intellectuelle est un aspect de la mission du khalifa. Mais la mission demande plus que croire — elle demande la confiance et la soumission."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["prot\u00e9ger", "accorder la s\u00e9curit\u00e9"],
              proof_ctx: "Le sens de proteger est un acte exterieur dirige vers autrui. Ici le verbe est a la forme IV avec preposition bi — les locuteurs placent leur confiance, ils ne protegent personne."
            }
          }
        }
      },
      // llh pos=4
      {
        word_key: "llh", position: 4, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinit\u00e9",
          concepts: {
            "Divinit\u00e9": {
              status: "retenu",
              senses: ["divinit\u00e9", "dieu", "Dieu", "th\u00e9ologie"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif. Le Lane's donne : Dieu, l'Etre qui existe necessairement par Lui-meme. Ici Allah est le premier objet de la confiance — « amanna bi-Allah » (nous avons place notre confiance en Dieu). Le nom est au genitif apres la preposition bi. Dieu est le point de depart de la confession : la confiance commence par Dieu avant de s'etendre a tout ce qui a ete revele.",
              axe1_verset: "Le nom Allahi est le premier objet de la confession de foi. La structure du verset place Dieu en premier, puis ce qui a ete fait descendre, puis les patriarches et les informateurs, puis le Seigneur. Dieu est la source et le sommet — tout ce qui suit decoule de la confiance en Dieu. Le verset ne commence pas par les revelations ou les prophetes mais par Dieu Lui-meme.",
              axe2_voisins: "Le verset 135 parlait de la religion d'Abraham, le hanif. Le verset 136 place Dieu comme premier objet de la confession — la religion d'Abraham est d'abord la confiance en Dieu. Le verset 137 conditionnera la guidance a cette meme confiance. Dieu est le pivot de la sequence.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. En 2:163, « votre divinite est une divinite unique ». La sourate insiste sur l'unicite de Dieu comme fondement de la foi. Le verset 136 place Dieu en premiere position dans la confession pour marquer cette primaute.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. Dans les confessions de foi coraniques, Dieu est toujours en premiere position. En 2:285, « le messager a place sa confiance en ce qui lui a ete fait descendre de la part de son Seigneur, et les croyants aussi ». La primaute de Dieu dans la confession est une constante.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. La confiance en Dieu est le prealable a toute mission. Sans cette confiance premiere, les revelations et les envoyes n'ont pas de fondement. Le khalifa commence par Dieu et tout le reste decoule de cette confiance premiere."
            },
            "Adoration/Culte": {
              status: "nul",
              senses: ["adorer", "servir", "se consacrer au culte"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration. Le contexte est la confession de foi, pas l'acte cultuel."
            }
          }
        }
      },
      // nzl pos=7 (1ere occurrence)
      {
        word_key: "nzl", position: 7, sense_chosen: "faire descendre",
        analysis_axes: {
          sense_chosen: "faire descendre",
          concept_chosen: "Descente/R\u00e9v\u00e9lation",
          concepts: {
            "Descente/R\u00e9v\u00e9lation": {
              status: "retenu",
              senses: ["descendre", "faire descendre", "r\u00e9v\u00e9ler", "envoyer d'en haut", "pluie qui descend"],
              proof_ctx: "Le verbe unzila est un accompli passif 3MS de la racine n-z-l a la forme IV. Le Lane's donne : faire descendre, envoyer d'en haut, reveler. Le passif indique que l'agent n'est pas nomme — ce qui a ete fait descendre sans preciser par qui. La descente est un mouvement directionnel du haut vers le bas. La preposition ila (vers) + nayna (nous) precise le destinataire. Cette premiere occurrence porte sur ce qui a ete fait descendre vers les locuteurs. La distinction avec le sens de « s'installer » (nul) est claire : le passif avec ila marque un mouvement vers un destinataire, pas une installation.",
              axe1_verset: "Le verbe unzila apparait deux fois dans le verset (pos 7 et pos 11). La premiere occurrence porte sur « vers nous » — ce qui a ete revele aux locuteurs. La seconde porte sur « vers Abraham ». Cette double occurrence montre la continuite de la revelation : le meme acte de faire descendre touche les locuteurs et les patriarches. Le champ lexical (confiance, Dieu, patriarches, informateurs) montre que la descente est le mode de transmission divine — tout vient d'en haut.",
              axe2_voisins: "Le verset 135 mentionnait la religion d'Abraham. Le verset 136 precise que cette religion inclut tout ce qui a ete fait descendre — pas seulement ce qui a ete revele a un prophete en particulier. Le verset 137 conditionnera la guidance a cette acceptation totale. La descente est le lien entre les versets : tout a ete fait descendre du meme haut.",
              axe3_sourate: "La racine n-z-l est structurante dans la sourate al-Baqarah. En 2:2, « ce Livre, nul doute en lui ». En 2:4, « ce qui t'a ete fait descendre et ce qui a ete fait descendre avant toi ». En 2:23, « si vous doutez de ce que Nous avons fait descendre ». La sourate utilise n-z-l pour decrire le mode de revelation — la descente du haut vers le bas.",
              axe4_coherence: "La racine n-z-l apparait environ 293 fois dans le Coran. Le schema « ma unzila ilayna wa-ma unzila ila Ibrahim... » est presque identique en 3:84. Le Coran utilise la descente comme le mode universel de transmission divine — toutes les revelations sont des descentes d'en haut.",
              axe5_frequence: "Pour la mission du khalifa, la descente est le mode de reception de la mission. Les instructions descendent de Dieu vers les destinataires. Le khalifa doit reconnaitre que toutes les descentes viennent de la meme source — faire confiance a ce qui a ete fait descendre vers lui et vers ceux qui l'ont precede."
            },
            "Halte/S\u00e9jour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "h\u00f4te", "lieu de descente"],
              proof_ctx: "Le sens d'installation est hors sujet — le verbe est au passif avec la preposition ila (vers) ce qui marque un mouvement directionnel, pas une halte."
            }
          }
        }
      },
      // nzl pos=11 (2eme occurrence)
      {
        word_key: "nzl", position: 11, sense_chosen: "faire descendre",
        analysis_axes: {
          sense_chosen: "faire descendre",
          concept_chosen: "Descente/R\u00e9v\u00e9lation",
          concepts: {
            "Descente/R\u00e9v\u00e9lation": {
              status: "retenu",
              senses: ["descendre", "faire descendre", "r\u00e9v\u00e9ler", "envoyer d'en haut", "pluie qui descend"],
              proof_ctx: "Deuxieme occurrence d'unzila dans le verset — meme forme, meme passif. Ici la descente porte sur « vers Abraham et Ismael et Isaac et Jacob et les Tribus ». Le parallele avec la premiere occurrence (vers nous) montre que la meme revelation descend vers differents destinataires. Memes analyses que pour la premiere occurrence en position 7."
            }
          }
        }
      },
      // brhm pos=13
      {
        word_key: "brhm", position: 13, sense_chosen: "Abraham",
        analysis_axes: {
          sense_chosen: "Abraham",
          concept_chosen: "Nom propre",
          concepts: {
            "Nom propre": {
              status: "retenu",
              senses: ["Abraham (variante)"],
              proof_ctx: "Le nom Ibrahim est un nom propre etranger designant le patriarche. Le Lane's ne donne pas de racine arabe significative. C'est un nom propre permanent. Dans ce verset, Abraham est le premier de la liste des patriarches vers qui la revelation a ete faite descendre. Il est nomme en premier car il est le pere de la lignee prophetique mentionnee ensuite (Ismael, Isaac, Jacob).",
              axe1_verset: "Le nom Ibrahim ouvre la liste des patriarches. La structure du verset enumere Abraham, puis ses descendants directs (Ismael, Isaac), puis son petit-fils (Jacob), puis les Tribus (les descendants de Jacob). L'enumeration suit l'ordre genealogique. Abraham est le sommet de cette lignee — tout decoule de lui.",
              axe2_voisins: "Le verset 135 mentionnait « la religion d'Abraham, le hanif ». Le verset 136 liste Abraham comme premier destinataire de la revelation. Les versets voisins construisent Abraham comme le modele — sa religion est la reference et sa revelation est incluse dans la confession de foi.",
              axe3_sourate: "Abraham est un personnage central de la sourate al-Baqarah. En 2:124, Dieu l'eprouve par des paroles. En 2:125, la Maison est un lieu de securite. En 2:127-128, Abraham et Ismael elevent les fondations de la Maison. En 2:130, « qui se detourne de la religion d'Abraham sinon celui qui s'avilit ? ». La sourate construit Abraham comme le patriarche fondateur.",
              axe4_coherence: "Le nom Ibrahim apparait environ 69 fois dans le Coran. Il est le patriarche le plus cite apres Moussa. Le Coran le presente comme le hanif originel — celui qui s'est tourne vers Dieu avant les divisions confessionnelles. En 2:136, sa mention en premiere position dans la liste des prophetes confirme son statut de fondateur.",
              axe5_frequence: "Pour la mission du khalifa, Abraham est le modele du hanif — celui qui se tourne vers Dieu sans intermediaire confessionnel. Le khalifa doit suivre la religion d'Abraham qui consiste a placer sa confiance en Dieu et a se soumettre."
            }
          }
        }
      },
      // sme pos=15 (Ismael — nom propre)
      {
        word_key: "sme", position: 15, sense_chosen: "Ismael",
        analysis_axes: {
          sense_chosen: "Ismael",
          concept_chosen: "Audition/\u00c9coute",
          concepts: {
            "Audition/\u00c9coute": {
              status: "retenu",
              senses: ["entendre", "\u00e9couter", "ou\u00efe", "ob\u00e9ir", "exaucer"],
              proof_ctx: "Le nom Isma'il est un nom propre compose signifiant etymologiquement « Dieu entend ». La racine s-m-' porte le sens d'entendre. Le Lane's donne : entendre, ecouter, obeir, exaucer. Ismael est le fils aine d'Abraham, co-fondateur de la Maison sacree. Dans ce verset, il est le deuxieme de la liste des patriarches vers qui la revelation a ete faite descendre. Son nom rappelle que Dieu entend — la priere d'Abraham pour un fils a ete exaucee."
            }
          }
        }
      },
      // shq pos=17 (Isaac — nom propre)
      {
        word_key: "shq", position: 17, sense_chosen: "Isaac",
        analysis_axes: {
          sense_chosen: "Isaac",
          concept_chosen: "\u00c9crasement/Pulv\u00e9risation",
          concepts: {
            "\u00c9crasement/Pulv\u00e9risation": {
              status: "retenu",
              senses: ["\u00e9craser", "broyer", "pulv\u00e9riser"],
              proof_ctx: "Le nom Ishaq est un nom propre etranger. La racine s-h-q en arabe porte le sens d'ecraser/pulveriser mais le nom est utilise exclusivement comme nom propre dans le Coran. Isaac est le fils d'Abraham et de Sara, frere d'Ismael. Dans ce verset, il est le troisieme de la liste des patriarches. Son inclusion montre que la confession de foi embrasse toute la lignee abrahamique — pas seulement la branche ismaelienne."
            }
          }
        }
      },
      // eqb pos=19 (Jacob — nom propre)
      {
        word_key: "eqb", position: 19, sense_chosen: "Jacob",
        analysis_axes: {
          sense_chosen: "Jacob",
          concept_chosen: "Succession/Cons\u00e9quence",
          concepts: {
            "Succession/Cons\u00e9quence": {
              status: "retenu",
              senses: ["succ\u00e9der", "venir apr\u00e8s", "cons\u00e9quence", "alternance"],
              proof_ctx: "Le nom Ya'qub est un nom propre. La racine '-q-b en arabe porte le sens de succeder, venir apres. Le Lane's donne : talon, ce qui vient apres, succession. Ya'qub est le fils d'Isaac et le petit-fils d'Abraham — il succede a son pere dans la lignee prophetique. Son nom porte etymologiquement l'idee de succession. Dans ce verset, il est le quatrieme de la liste des patriarches, ce qui correspond a sa position genealogique. Ses fils sont les douze tribus mentionnees juste apres."
            }
          }
        }
      },
      // sbt pos=20
      {
        word_key: "sbt", position: 20, sense_chosen: "tribus",
        analysis_axes: {
          sense_chosen: "tribus",
          concept_chosen: "Repos sacr\u00e9/Jour saint",
          concepts: {
            "Repos sacr\u00e9/Jour saint": {
              status: "retenu",
              senses: ["sabbat", "samedi", "repos"],
              proof_ctx: "Le mot al-asbat est un pluriel defini de la racine s-b-t. Le Lane's donne : petit-fils, descendant, tribu (au sens des descendants d'un patriarche). Le mot sibt designe le petit-fils ou la branche descendante d'un ancetre. Le pluriel al-asbat designe les Tribus issues de Jacob — ses douze fils et leurs descendances. L'article defini (al-) marque qu'il s'agit des Tribus connues. Le sens de sabbat/repos est la meme racine mais un usage different — ici le contexte est genealogique (apres Jacob), pas liturgique.",
              axe1_verset: "Le mot al-asbat ferme l'enumeration genealogique : Abraham, Ismael, Isaac, Jacob, puis les Tribus. La structure est descendante — du patriarche fondateur a la descendance collective. Les Tribus representent l'ensemble des fils de Jacob et sont les ancetres des douze tribus d'Israel. Leur inclusion montre que la confession de foi englobe toute la descendance abrahamique.",
              axe2_voisins: "Le verset 135 mentionnait Abraham. Le verset 136 developpe la lignee d'Abraham jusqu'aux Tribus. Le verset 140 demandera : « dites-vous qu'Abraham, Ismael, Isaac, Jacob et les Tribus etaient juifs ou chretiens ? ». La mention des Tribus prepare cette question — elles sont revendiquees par les juifs mais le Coran les situe avant les divisions confessionnelles.",
              axe3_sourate: "Le mot al-asbat apparait dans la sourate al-Baqarah en 2:136 et 2:140. Dans les deux cas, les Tribus sont mentionnees dans une liste de prophetes et patriarches. La sourate les situe dans la continuite prophetique — les Tribus ne sont pas une categorie confessionnelle mais genealogique.",
              axe4_coherence: "Le mot al-asbat apparait 5 fois dans le Coran (2:136, 2:140, 3:84, 4:163, 7:160). A chaque fois il designe les descendants de Jacob comme un groupe ayant recu la revelation. Le Coran les integre dans la chaine prophetique universelle.",
              axe5_frequence: "Pour la mission du khalifa, les Tribus representent la dimension collective de la mission. La revelation n'est pas donnee a un individu seul mais a des groupes — des tribus, des peuples. Le khalifa doit reconnaitre que la mission traverse les generations et les lignees."
            }
          }
        }
      },
      // awt pos=23 (1ere occurrence)
      {
        word_key: "awt", position: 23, sense_chosen: "accorder",
        analysis_axes: {
          sense_chosen: "accorder",
          concept_chosen: "Refuge/Protection",
          concepts: {
            "Refuge/Protection": {
              status: "retenu",
              senses: ["se r\u00e9fugier", "abriter", "refuge"],
              proof_ctx: "Le verbe utiya est un accompli passif 3MS de la racine a-w-t a la forme IV. Le Lane's donne : donner, accorder, apporter, octroyer. Le passif indique un don recu — ce qui a ete accorde a Moussa et Issa. L'accompli marque que le don est acheve. La distinction entre utiya (forme IV, don) et unzila (forme IV, descente) montre une nuance : ce qui est fait descendre (unzila) designe le mode de transmission (du haut vers le bas), tandis que ce qui est accorde (utiya) designe l'acte de don sans preciser le mode. Le verset utilise unzila pour Abraham et sa lignee, et utiya pour Moussa, Issa et les informateurs.",
              axe1_verset: "Le verbe utiya apparait deux fois dans le verset (pos 23 et pos 29). La premiere occurrence porte sur Moussa et Issa, la seconde sur les informateurs. Le changement de verbe (de unzila a utiya) marque une nuance : pour Abraham et sa lignee, la revelation est « faite descendre » ; pour Moussa, Issa et les informateurs, elle est « accordee ». Les deux verbes decrivent le meme phenomene — la transmission divine — mais sous deux angles differents.",
              axe2_voisins: "Le verset 87 disait « Nous avons donne (atayna) a Moussa le Livre ». Le verset 136 utilise le passif utiya — le focus est sur le destinataire (ce qui a ete accorde a Moussa), pas sur l'agent. Les versets voisins montrent que le don divin est un theme recurrent — Dieu accorde a qui Il veut.",
              axe3_sourate: "La racine a-w-t est frequente dans la sourate al-Baqarah. En 2:247, « Dieu accorde Sa royaute a qui Il veut ». En 2:251, « Dieu lui accorda la royaute et la sagesse ». La sourate montre que le don divin est un acte de volonte — Dieu choisit Ses destinataires.",
              axe4_coherence: "La racine a-w-t apparait environ 271 fois dans le Coran. Le passif utiya est frequent pour decrire les dons divins aux prophetes. En 4:163, « Nous avons fait descendre vers toi comme Nous avons fait descendre vers Noe... et Nous avons accorde a Daoud les Psaumes ». Le Coran alterne entre unzila et utiya pour decrire la transmission divine.",
              axe5_frequence: "Pour la mission du khalifa, le don divin est le contenu de la mission. Ce qui a ete accorde aux prophetes est la matiere premiere de la mission du khalifa. Il doit reconnaitre que ce don n'est pas le sien — il l'a recu passivement, comme Moussa et Issa l'ont recu."
            }
          }
        }
      },
      // mwsa pos=24 (nom propre)
      {
        word_key: "mwsa", position: 24, sense_chosen: "Moussa",
        analysis_axes: {
          sense_chosen: "Moussa",
          concept_chosen: "Proph\u00e9tie/Mission",
          concepts: {
            "Proph\u00e9tie/Mission": {
              status: "retenu",
              senses: ["Mo\u00efse", "proph\u00e8te"],
              proof_ctx: "Le nom Musa est un nom propre etranger designant le prophete envoye aux fils d'Israel. Le Lane's ne donne pas de racine arabe significative. Moussa est le prophete le plus cite dans le Coran. Dans ce verset, il est le destinataire de ce qui a ete « accorde » (utiya) — pas « fait descendre » (unzila). Son inclusion dans la confession de foi montre que la confiance porte aussi sur ce qui a ete donne a Moussa — la Torah et les signes."
            }
          }
        }
      },
      // eysa pos=26 (nom propre)
      {
        word_key: "eysa", position: 26, sense_chosen: "Issa",
        analysis_axes: {
          sense_chosen: "Issa",
          concept_chosen: "Nom propre",
          concepts: {
            "Nom propre": {
              status: "retenu",
              senses: ["J\u00e9sus (nom propre)"],
              proof_ctx: "Le nom Issa est un nom propre designant le prophete fils de Maryam. Le Lane's ne donne pas de racine arabe significative pour ce nom propre. Issa est mentionne apres Moussa dans la liste — l'ordre est chronologique. Son inclusion dans la confession de foi est significative : les locuteurs declarent leur confiance dans ce qui a ete accorde a Issa, tout comme dans ce qui a ete accorde a Moussa. Aucune distinction n'est faite entre les deux."
            }
          }
        }
      },
      // awt pos=29 (2eme occurrence)
      {
        word_key: "awt", position: 29, sense_chosen: "accorder",
        analysis_axes: {
          sense_chosen: "accorder",
          concept_chosen: "Refuge/Protection",
          concepts: {
            "Refuge/Protection": {
              status: "retenu",
              senses: ["se r\u00e9fugier", "abriter", "refuge"],
              proof_ctx: "Deuxieme occurrence d'utiya dans le verset — meme forme, meme passif. Ici le don porte sur les informateurs (an-nabiyyuna) — ce qui a ete accorde aux informateurs de la part de leur Seigneur. Memes analyses que pour la premiere occurrence en position 23."
            }
          }
        }
      },
      // nba pos=30
      {
        word_key: "nba", position: 30, sense_chosen: "informateur",
        analysis_axes: {
          sense_chosen: "informateur",
          concept_chosen: "Information/Nouvelle",
          concepts: {
            "Information/Nouvelle": {
              status: "retenu",
              senses: ["informer", "nouvelle", "annoncer"],
              proof_ctx: "Le mot an-nabiyyuna est un pluriel defini nominatif de la racine n-b-a. Le Lane's donne : informer, apporter une nouvelle, annoncer. Le nabiy est celui qui apporte les nouvelles — l'informateur. Le pluriel defini (an-nabiyyuna) designe l'ensemble des informateurs connus. L'article defini marque qu'il s'agit de tous les informateurs — la totalite de ceux qui ont transmis les nouvelles divines. La distinction avec « prophete » est etymologique : le mot arabe vient de naba (nouvelle/information), pas du grec prophetes (celui qui parle au nom de).",
              axe1_verset: "Le mot an-nabiyyuna ferme la liste des destinataires de la revelation. La structure est : Abraham et sa lignee (unzila), Moussa et Issa (utiya), puis les informateurs (utiya). Les informateurs sont la categorie la plus large — elle englobe tous ceux qui ont transmis les nouvelles divines, pas seulement ceux qui sont nommes. Le verset passe du particulier (noms propres) au general (tous les informateurs).",
              axe2_voisins: "Le verset 136 est suivi de la clause « venant de leur Seigneur ». Les informateurs recoivent de leur Seigneur — ils ne parlent pas de leur propre initiative. Le verset 137 conditionnera la guidance a la meme confession de foi. Les informateurs sont le lien entre le Seigneur et les peuples.",
              axe3_sourate: "La racine n-b-a apparait dans la sourate al-Baqarah dans le contexte de la transmission. En 2:31, Dieu dit : « informez-Moi des noms de ceux-ci ». En 2:33, « n'ai-Je pas dit que Je connais l'invisible ? ». La sourate utilise n-b-a pour decrire l'acte de transmettre une information — les informateurs sont les transmetteurs professionnels de la nouvelle divine.",
              axe4_coherence: "Le mot nabiy/nabiyyun apparait environ 75 fois dans le Coran. Les informateurs sont presentes comme une chaine continue — de Nouh a Muhammad, chacun transmet les nouvelles de Dieu. En 33:40, Muhammad est « le sceau des informateurs ». Le Coran insiste sur la continuite de la chaine de transmission.",
              axe5_frequence: "Pour la mission du khalifa, les informateurs sont les guides de la mission. Ils transmettent les nouvelles de Dieu aux peuples. Le khalifa doit reconnaitre tous les informateurs sans distinction — c'est le message central du verset 136."
            },
            "Proph\u00e9tie": {
              status: "probable",
              senses: ["proph\u00e8te", "proph\u00e9tie"],
              proof_ctx: "Le sens de prophete est l'usage courant du mot nabiy dans les traductions. La distinction philosophique est que « prophete » vient du grec et evoque la prediction de l'avenir, tandis que « nabiy » en arabe vient de naba (nouvelle) et evoque la transmission d'information. Les deux sens se chevauchent dans la pratique — le nabiy transmet des nouvelles qui incluent parfois l'avenir — mais l'etymologie arabe pointe vers l'information, pas la prediction.",
              axe1_verset: "Le mot an-nabiyyuna pourrait se traduire par « les prophetes ». Le contexte du verset (ce qui a ete accorde aux nabiyyuna de la part de leur Seigneur) est compatible avec les deux sens — informateurs ou prophetes. La difference est de nuance, pas de fond.",
              axe2_voisins: "Les versets voisins ne tranchent pas entre informateur et prophete. Le contexte est la chaine de transmission divine.",
              axe3_sourate: "La sourate utilise nabiy dans des contextes de transmission. En 2:246, les fils d'Israel demandent a un nabiy de leur designer un roi. Le nabiy est l'intermediaire entre Dieu et le peuple.",
              axe4_coherence: "Le Coran distingue parfois rasul (envoye) et nabiy (informateur). Le rasul est envoye avec une mission specifique, le nabiy transmet les nouvelles. Les deux fonctions peuvent se chevaucher.",
              axe5_frequence: "Le khalifa doit reconnaitre la fonction d'information des nabiyyuna — ils transmettent les nouvelles de Dieu, pas leurs opinions personnelles."
            }
          }
        }
      },
      // rbb pos=32
      {
        word_key: "rbb", position: 32, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorit\u00e9 bienveillante",
          concepts: {
            "Seigneurie/Autorit\u00e9 bienveillante": {
              status: "retenu",
              senses: ["seigneur", "ma\u00eetre", "propri\u00e9taire", "celui qui \u00e9l\u00e8ve", "celui qui entretient", "celui qui poss\u00e8de", "gouverner"],
              proof_ctx: "Le mot rabbihim est un nom masculin singulier genitif de la racine r-b-b avec pronom suffixe 3MP (leur). Le Lane's donne : seigneur, maitre, proprietaire, celui qui eleve et entretient. Le rabb est celui qui possede et prend soin de ce qu'il possede. Le pronom « him » (leur) rattache les informateurs a leur Seigneur — ce qui leur a ete accorde vient de leur Seigneur. La preposition min (de, venant de) precise l'origine : le don vient de leur Seigneur.",
              axe1_verset: "Le mot rabbihim ferme la clause sur les informateurs : « ce qui a ete accorde aux informateurs, venant de leur Seigneur ». Le Seigneur est la source du don. Le verset construit une chaine : Seigneur → don → informateurs → peuples. Le mot rabb porte l'idee de propriete et de soin — le Seigneur possede les informateurs et prend soin d'eux en leur accordant la revelation.",
              axe2_voisins: "Le verset 131 utilisait rabb dans la bouche d'Abraham : « je me soumets au Seigneur des mondes ». Le verset 136 utilise rabbihim (leur Seigneur) pour les informateurs. Le parallele montre la continuite : le meme Seigneur auquel Abraham se soumet est celui qui accorde la revelation aux informateurs.",
              axe3_sourate: "La racine r-b-b est une des plus frequentes de la sourate al-Baqarah. En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:62, « ils auront leur recompense aupres de leur Seigneur ». La sourate utilise rabb pour designer la relation de proximite entre Dieu et Ses creatures — une relation de propriete et de soin.",
              axe4_coherence: "La racine r-b-b apparait environ 980 fois dans le Coran. L'expression « rabbihim » (leur Seigneur) est une des plus frequentes. Le Coran insiste sur le fait que chaque peuple a son Seigneur — et c'est toujours le meme Seigneur. En 2:136, « leur Seigneur » designe le Seigneur des informateurs — le meme Seigneur que celui des locuteurs.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est le maitre de la mission. Les informateurs recoivent de leur Seigneur — le khalifa recoit du meme Seigneur. Reconnaitre « leur Seigneur » c'est reconnaitre que tous les informateurs ont la meme source. Le khalifa ne peut privilegier un informateur au detriment d'un autre car tous viennent du meme Seigneur."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "cro\u00eetre", "faire grandir", "nourrir", "d\u00e9velopper", "exc\u00e8s", "colline", "\u00e9minence"],
              proof_ctx: "Le sens de croissance est le sens physique premier de la racine r-b-b — faire grandir, augmenter. La distinction philosophique avec la seigneurie est que la croissance est un processus physique (quelque chose augmente en taille ou en quantite), tandis que la seigneurie est une relation de pouvoir et de soin. Le mot rabbihim est un nom avec pronom possessif dans un contexte de don divin — le sens de seigneur est plus naturel que le sens de croissance.",
              axe1_verset: "Le mot rabbihim pourrait theoriquement porter le sens de « celui qui les fait grandir ». Le contexte du verset (ce qui a ete accorde aux informateurs de la part de...) est plus compatible avec le sens de seigneur-source que de croissance.",
              axe2_voisins: "Les versets voisins utilisent rabb au sens de seigneur. Le contexte ne porte pas sur la croissance physique.",
              axe3_sourate: "La sourate utilise rabb principalement au sens de seigneur. Le sens de croissance apparait dans d'autres racines.",
              axe4_coherence: "Le Coran utilise rabb au sens de seigneur dans la grande majorite des occurrences. Le sens de croissance est sous-jacent mais rarement premier.",
              axe5_frequence: "La croissance est un aspect secondaire de la seigneurie — le Seigneur fait grandir Ses creatures. Mais dans ce verset, le focus est sur la source du don, pas sur la croissance."
            },
            "\u00c9ducation/Accompagnement": {
              status: "nul",
              senses: ["\u00e9lever un enfant", "\u00e9duquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education est un acte exterieur continu. Le contexte du verset est la source du don divin aux informateurs — pas l'acte d'eduquer."
            }
          }
        }
      },
      // frq pos=34
      {
        word_key: "frq", position: 34, sense_chosen: "distinguer",
        analysis_axes: {
          sense_chosen: "distinguer",
          concept_chosen: "S\u00e9paration/Distinction",
          concepts: {
            "S\u00e9paration/Distinction": {
              status: "retenu",
              senses: ["s\u00e9parer", "distinguer", "diviser", "Furq\u00e2n"],
              proof_ctx: "Le verbe nufarriqu est un inaccompli 1P de la racine f-r-q a la forme II. Le Lane's donne : separer, distinguer, diviser, faire une distinction. La forme II intensifie l'action — faire une distinction marquee. L'inaccompli avec la negation la cree une declaration permanente : nous ne faisons jamais de distinction. Le complement bayna ahadin minhum (entre aucun d'entre eux) precise l'objet : la non-distinction porte sur tous les envoyes et informateurs mentionnes. La distinction entre le sens verbal (separer/distinguer) et le sens nominal (groupe) est grammaticale : le mot est ici un verbe conjugue, pas un nom.",
              axe1_verset: "Le verbe nufarriqu est le pivot de la seconde partie du verset. Apres avoir enumere tous les destinataires de la revelation (Abraham, Ismael, Isaac, Jacob, les Tribus, Moussa, Issa, les informateurs), le verset declare : « nous ne faisons aucune distinction entre aucun d'entre eux ». Cette declaration est le coeur de la confession de foi — la confiance est totale, sans hierarchie ni preference entre les envoyes. Le champ lexical du verset (confiance, Dieu, descente, don, informateurs) culmine dans cette non-distinction.",
              axe2_voisins: "Le verset 135 opposait juifs et chretiens (« soyez juifs ou chretiens pour etre guides »). Le verset 136 repond par la non-distinction — pas de preference confessionnelle entre les prophetes. Le verset 137 conditionnera la guidance a cette meme non-distinction. Le message est clair : la guidance vient de la confiance totale, pas de la preference confessionnelle.",
              axe3_sourate: "La racine f-r-q apparait dans la sourate al-Baqarah sous ses differents sens. En 2:53, le Furqan (Discernement). En 2:101, un firiq (groupe). En 2:136, la non-distinction entre les prophetes. La sourate utilise la meme racine pour des sens differents — le Discernement (furqan) et la distinction (tafriq) sont des sens opposes : le Discernement unit ce qui est vrai, la distinction divise ce qui devrait etre uni.",
              axe4_coherence: "La formule « la nufarriqu bayna ahadin minhum » (nous ne faisons aucune distinction entre aucun d'entre eux) apparait en 2:136, 2:285, et 3:84. C'est une formule recurrente du Coran qui interdit de hierarchiser les envoyes. En 4:150-152, le Coran condamne ceux qui veulent « distinguer entre Dieu et Ses envoyes » et qui veulent « placer leur confiance en certains et refuser certains ».",
              axe5_frequence: "Pour la mission du khalifa, la non-distinction est un principe fondamental. Le khalifa ne peut privilegier un prophete au detriment d'un autre — tous portent la meme mission divine. Faire des distinctions c'est diviser ce que Dieu a uni. La mission du khalifa est une — elle traverse tous les prophetes et toutes les revelations."
            },
            "Groupe/Partie": {
              status: "nul",
              senses: ["groupe", "partie"],
              proof_ctx: "Le sens de groupe est un usage nominal de f-r-q. Le mot est ici un verbe conjugue (nufarriqu, nous distinguons), pas un nom. Le contexte est l'acte de distinction, pas la designation d'un groupe."
            }
          }
        }
      },
      // byn pos=35
      {
        word_key: "byn", position: 35, sense_chosen: "entre",
        analysis_axes: {
          sense_chosen: "entre",
          concept_chosen: "S\u00e9paration/Distance",
          concepts: {
            "S\u00e9paration/Distance": {
              status: "retenu",
              senses: ["s\u00e9parer", "entre", "quitter"],
              proof_ctx: "Le mot bayna est une preposition de la racine b-y-n. Le Lane's donne : entre, au milieu de, dans l'intervalle. Bayna situe la distinction dans l'espace relationnel entre les envoyes — la negation « la nufarriqu bayna » signifie que cet espace ne sera pas fracture. La distinction avec « etre clair/evident » (nul) est claire : le mot est ici une preposition spatiale, pas un adjectif de clarte.",
              axe1_verset: "Le mot bayna complete le verbe nufarriqu — « nous ne faisons aucune distinction entre ». La preposition situe l'action dans l'espace relationnel entre les envoyes. Le verset a d'abord enumere les envoyes, puis declare qu'il n'y aura aucune fracture entre eux. Le mot bayna est le lien spatial — il maintient les envoyes dans un espace commun non divise.",
              axe2_voisins: "Le verset 135 opposait deux groupes (juifs et chretiens). Le verset 136 abolit la separation entre les prophetes. Le mot bayna est le lieu de cette abolition — l'espace entre les prophetes ne sera pas divise.",
              axe3_sourate: "La racine b-y-n apparait dans la sourate al-Baqarah sous ses deux sens : clarte (bayyin, clair) et separation (bayna, entre). En 2:136, le sens est spatial — entre les prophetes. La sourate joue sur les deux sens : ce qui est clair (bayyina) et ce qui est entre (bayna).",
              axe4_coherence: "Le mot bayna apparait environ 350 fois dans le Coran. Il est utilise pour situer des relations spatiales et relationnelles. En 2:136 et 2:285, « bayna ahadin minhum » (entre aucun d'entre eux) est une formule fixe. Le Coran utilise bayna pour designer l'espace relationnel que la distinction menacerait de fracturer.",
              axe5_frequence: "Pour la mission du khalifa, l'espace entre les prophetes doit rester intact. Le khalifa ne doit pas creer de fracture entre les porteurs de la mission divine. L'espace « entre » est un espace d'unite — le maintenir c'est maintenir l'unite de la mission."
            },
            "Clart\u00e9/\u00c9vidence": {
              status: "nul",
              senses: ["\u00eatre clair", "expliquer", "\u00e9vident", "preuve"],
              proof_ctx: "Le sens de clarte est un sens adjectival de b-y-n. Le mot est ici une preposition (entre), pas un adjectif (clair). Le contexte est spatial (entre les prophetes), pas cognitif (clarte)."
            }
          }
        }
      },
      // ahd pos=36
      {
        word_key: "ahd", position: 36, sense_chosen: "quiconque",
        analysis_axes: {
          sense_chosen: "quiconque",
          concept_chosen: "Quiconque/Ind\u00e9fini",
          concepts: {
            "Quiconque/Ind\u00e9fini": {
              status: "retenu",
              senses: ["quiconque", "personne", "quelque chose"],
              proof_ctx: "Le mot ahadin est un nom masculin singulier indefini genitif de la racine a-h-d. Le Lane's donne : un, quiconque, quelqu'un. Dans un contexte negatif (la nufarriqu... ahadin), l'indefini prend une valeur de totalite : aucun, pas un seul. L'expression « bayna ahadin minhum » (entre aucun d'entre eux) signifie qu'aucun prophete n'est exclu — la non-distinction est absolue. La distinction avec l'unicite (nul) est que le mot est ici un pronom indefini, pas un attribut d'unicite divine.",
              axe1_verset: "Le mot ahadin renforce la negation — pas « entre certains » mais « entre aucun ». L'indefini dans la negation cree l'absolu : la non-distinction est totale. Le verset ne dit pas « nous ne faisons pas de distinction entre certains d'entre eux » mais « nous ne faisons aucune distinction entre aucun d'entre eux ». La formulation est maximale — aucune exception.",
              axe2_voisins: "Le verset 135 opposait deux groupes. Le verset 136 abolit toute distinction avec « aucun ». Le passage de la division (135) a l'abolition totale (136) est radical. La non-distinction n'est pas partielle — elle est absolue.",
              axe3_sourate: "La racine a-h-d apparait dans la sourate al-Baqarah dans des contextes varies. En 2:96, « aucun d'entre eux ne souhaite la mort ». En 2:136, « aucune distinction entre aucun d'entre eux ». La sourate utilise ahad dans des negations pour creer des declarations absolues.",
              axe4_coherence: "L'expression « bayna ahadin minhum » apparait en 2:136, 2:285, et 3:84. Le Coran utilise systematiquement l'indefini ahad dans la negation pour creer l'absolu. En 72:26, « Il ne devoile Son invisible a personne (ahadin) ». L'indefini en contexte negatif = aucun, sans exception.",
              axe5_frequence: "Pour la mission du khalifa, le mot « aucun » est la cle de la mission. Pas de favoritisme, pas de hierarchie. La mission du khalifa est de reconnaitre tous les envoyes sans exception — « aucun » ne doit etre ecarte ou prefere."
            },
            "Unicit\u00e9/Indivisibilit\u00e9": {
              status: "nul",
              senses: ["d\u00e9clarer l'unicit\u00e9", "un (premier des nombres)", "l'Indivisible", "unit\u00e9"],
              proof_ctx: "Le sens d'unicite est un attribut divin (al-Ahad). Le mot est ici un pronom indefini dans une negation — aucun — pas un attribut d'unicite."
            }
          }
        }
      },
      // hmm pos=38 (pronom)
      {
        word_key: "hmm", position: 38, sense_chosen: "eux",
        analysis_axes: {
          sense_chosen: "eux",
          concept_chosen: "Intention/R\u00e9solution",
          concepts: {
            "Intention/R\u00e9solution": {
              status: "retenu",
              senses: ["avoir l'intention"],
              proof_ctx: "Le mot hum est un pronom personnel 3MP. Il designe les prophetes et informateurs mentionnes precedemment. Le pronom rattache « aucun d'entre eux » a la liste des envoyes nommes dans le verset. C'est un usage pronominal simple, pas un usage de la racine h-m-m dans son sens d'intention."
            }
          }
        }
      },
      // nhn pos=40 (pronom)
      {
        word_key: "nhn", position: 40, sense_chosen: "nous",
        analysis_axes: {
          sense_chosen: "nous",
          concept_chosen: "Pronom",
          concepts: {
            "Pronom": {
              status: "retenu",
              senses: ["nous"],
              proof_ctx: "Le mot nahnu est un pronom personnel 1P. Il designe les locuteurs — ceux a qui l'imperatif qulu est adresse. Le pronom est emphatique (nahnu au lieu d'un simple suffixe) — il met en valeur les locuteurs comme sujet de la soumission. La formule « wa-nahnu lahu muslimuna » (et nous, a Lui, sommes soumis) est une declaration d'identite — nous, en tant que nous, sommes soumis."
            }
          }
        }
      },
      // lhw pos=41
      {
        word_key: "lhw", position: 41, sense_chosen: "a lui",
        analysis_axes: {
          sense_chosen: "a lui",
          concept_chosen: "Divertissement/Oubli",
          concepts: {
            "Divertissement/Oubli": {
              status: "retenu",
              senses: ["distraction"],
              proof_ctx: "Le mot lahu est la preposition li (a, pour) + pronom suffixe hu (lui). C'est un usage prepositionnel, pas un usage de la racine l-h-w dans son sens de divertissement. La preposition li dirige la soumission vers Dieu — nous sommes soumis A LUI. Le pronom hu renvoie a Dieu mentionne au debut du verset. L'antéposition de lahu avant muslimuna cree un effet d'insistance : c'est a Lui — pas a un autre — que nous sommes soumis."
            }
          }
        }
      },
      // slm pos=42
      {
        word_key: "slm", position: 42, sense_chosen: "soumis",
        analysis_axes: {
          sense_chosen: "soumis",
          concept_chosen: "Paix/Soumission",
          concepts: {
            "Paix/Soumission": {
              status: "retenu",
              senses: ["paix", "soumission", "islam", "salut"],
              proof_ctx: "Le mot muslimuna est un participe actif pluriel nominatif de la racine s-l-m a la forme IV. Le Lane's donne : se soumettre, entrer dans la paix, se remettre entierement. La forme IV (aslama) porte le sens actif de se livrer, se soumettre volontairement. Le participe actif (muslim) indique un etat permanent et actif — ils sont en etat continu de soumission. Le pluriel nominatif (muslimuna) fonctionne comme predicat de la phrase nominale « nahnu lahu muslimuna ». La distinction avec « sain et sauf » (nul) est claire : la forme IV active porte le sens de se soumettre, pas d'etre indemne.",
              axe1_verset: "Le mot muslimuna ferme le verset comme une declaration d'identite. Apres avoir declare la confiance en Dieu et en toutes les revelations, et apres avoir affirme la non-distinction entre les envoyes, les locuteurs concluent : « nous sommes soumis a Lui ». La soumission est l'aboutissement de la confession de foi — placer sa confiance mene a la soumission. Le champ lexical du verset (dire, confiance, Dieu, descente, don, informateurs, Seigneur, non-distinction) culmine dans la soumission.",
              axe2_voisins: "Le verset 131 utilisait aslama dans la bouche d'Abraham : « je me soumets au Seigneur des mondes ». Le verset 132 utilisait muslimuna : « ne mourez qu'en etant soumis ». Le verset 133 : « nous serons soumis a ta divinite ». Le verset 136 reprend le meme mot muslimuna pour les locuteurs — la soumission d'Abraham se transmet a ceux qui suivent sa religion.",
              axe3_sourate: "La racine s-l-m est une racine majeure de la sourate al-Baqarah. En 2:112, « celui qui soumet son visage a Dieu ». En 2:128, Abraham : « fais de nous des soumis a Toi ». En 2:131, « je me soumets au Seigneur des mondes ». La sourate construit la soumission comme l'aboutissement de la confiance — celui qui place sa confiance finit par se soumettre.",
              axe4_coherence: "La racine s-l-m apparait environ 140 fois dans le Coran. Le mot muslim/muslimun designe celui qui s'est soumis volontairement. En 3:84-85, apres une declaration presque identique a 2:136, le verset 85 ajoute : « quiconque recherche autre chose que la soumission comme religion, cela ne sera pas accepte de lui ». Le Coran lie la non-distinction entre les prophetes a la soumission comme religion unique.",
              axe5_frequence: "Pour la mission du khalifa, la soumission est la posture de la mission. Le khalifa ne se soumet pas aux hommes mais a Dieu — « a Lui » (lahu). La soumission n'est pas passive — le participe actif musulm indique un engagement continu et volontaire. Le khalifa accomplit sa mission en se soumettant activement a Dieu."
            },
            "Int\u00e9grit\u00e9/Sant\u00e9": {
              status: "nul",
              senses: ["sain et sauf"],
              proof_ctx: "Le sens d'integrite physique est un sens de la forme I (salima, etre indemne). La forme IV (aslama, se soumettre) porte un sens different — l'acte actif de soumission. Le participe actif muslim est de la forme IV, pas de la forme I."
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

  const verseIds = [143];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 136 ===\n');
  await processVerse(136);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V136 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
