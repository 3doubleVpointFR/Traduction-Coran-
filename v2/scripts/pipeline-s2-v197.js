const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 197
// verse_id=204, analysis_id=563
// "Le pelerinage a lieu en des mois connus. Si l'on se
//  decide de l'accomplir, alors point de rapport sexuel,
//  point de perversite, point de dispute pendant le
//  pelerinage. Et le bien que vous faites, Dieu le sait.
//  Et prenez vos provisions; mais vraiment la meilleure
//  provision est la premunition. Et premunissez-vous de
//  Moi, o doues d'intelligence !"
// Pelerinage, mois connus, interdictions, provisions, taqwa
// =====================================================

const verseData = {
  197: {
    verse_id: 204,
    analysis_id: 563,
    translation_arab: "Le pelerinage a lieu en des mois connus. Si quelqu'un s'impose le pelerinage pendant ces mois, alors point d'indecence, point de transgression, point de dispute pendant le pelerinage. Et tout bien que vous faites, Dieu le sait. Et prenez vos provisions — mais la meilleure provision est la premunition. Et premunissez-vous de Moi, o doues d'intelligence !",
    full_translation: "Le pelerinage a lieu en des mois connus. Si l'on se decide de l'accomplir, alors point de rapport sexuel, point de perversite, point de dispute pendant le pelerinage. Et le bien que vous faites, Allah le sait. Et prenez vos provisions; mais vraiment la meilleure provision est la piete. Et redoutez-Moi, o doues d'intelligence !",
    translation_explanation: `§DEMARCHE§
Le verset ouvre par une phrase nominale : **al-hajju ashhurun ma'lumatun** (le pelerinage [est] des mois connus). Le nom **al-hajju** est un nom defini singulier au nominatif de la racine h-j-j. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine h-j-j porte les sens de : se diriger vers un lieu avec intention, argumenter, prouver, demontrer, faire le pelerinage. Le pelerinage est l'acte de se diriger vers un lieu sacre avec une intention deliberee. L'article al- definit LE pelerinage — l'institution connue, pas un voyage quelconque. Le nom **ashhurun** est un pluriel indefini au nominatif de la racine sh-h-r. D'apres les sources etymologiques, la racine sh-h-r porte les sens de : etre apparent, etre connu, mois lunaire (car la lune apparait chaque mois). Le pluriel indefini designe « des mois » — le verset ne les nomme pas mais dit qu'ils sont connus. Le participe passif **ma'lumatun** est un feminin pluriel indefini de la racine '-l-m. Le participe passif (une forme qui dit que l'action est subie) signifie : « qui sont sus, qui sont connus ». Les mois du pelerinage sont connus — ils sont sus de tous, il n'y a pas de doute sur leur identite. Le passif efface celui qui les connait pour mettre en avant le fait meme qu'ils sont connus universellement.

La construction conditionnelle **fa-man farada fihinna al-hajja** (si quelqu'un s'impose le pelerinage pendant ces mois) utilise le verbe **farada** qui est un accompli 3MS de la racine f-r-d. D'apres les sources etymologiques, la racine f-r-d porte les sens de : imposer, rendre obligatoire, prescrire, determiner une obligation, entailler (sens physique premier — marquer une encoche definitive). L'accompli marque l'action comme achevee — celui qui s'est impose le pelerinage a pris sa decision, c'est fait, c'est irrevocable. La preposition **fihinna** (pendant ces [mois]) localise l'imposition dans le temps.

Suit une triple negation : **fa-la rafatha wa-la fusuqa wa-la jidala fi-l-hajj** (point d'indecence, point de transgression, point de dispute pendant le pelerinage). Le nom **rafath** est un indefini de la racine r-f-th. D'apres les sources etymologiques, la racine porte les sens de : parole indecente, rapport sexuel, tout ce qui est obscene ou grossier dans la parole ou l'acte. L'indefini avec la negation la forme une negation absolue — aucune indecence quelle qu'elle soit. Le nom **fusuq** est un indefini de la racine f-s-q. D'apres les sources etymologiques, la racine porte les sens de : sortir de, transgresser, deborder d'une limite, la datte qui sort de sa peau (sens physique). La transgression est l'acte de sortir des limites — celui qui transgresse depasse la frontiere du permis. Le nom **jidal** est un indefini de la racine j-d-l. D'apres les sources etymologiques, la racine porte les sens de : tordre, tresser, argumenter, disputer — l'idee physique de torsion se prolonge dans l'idee de tordre les arguments. La triple negation avec la (point de) est absolue et categorique — pendant le pelerinage, ces trois choses sont totalement interdites.

La suite **wa-ma taf'alu min khayrin ya'lamhu Allahu** (et tout bien que vous faites, Dieu le sait) utilise le verbe **taf'alu** qui est un inaccompli 2MP de la racine f-'-l. D'apres les sources etymologiques, la racine porte les sens de : faire, agir, produire un acte, accomplir. L'inaccompli marque une action en cours ou habituelle — ce que vous faites de maniere continue. Le nom **khayrin** est un indefini au genitif de la racine kh-y-r, precede de la preposition min (de/parmi). D'apres les sources etymologiques, la racine porte les sens de : bien, bonte, richesse, excellence, ce qui est bon et desirable. Le verbe **ya'lamhu** est un inaccompli apocopé 3MS de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe de. L'apocopé (une forme qui marque la consequence d'une condition) montre que le savoir de Dieu est la consequence directe du faire : si vous faites du bien, alors Dieu le sait. Le nom **Allah** est le nom propre de Dieu — le sujet qui sait.

L'imperatif **wa-tazawwadu** est un imperatif 2MP de la forme V (tafa''ala) de la racine z-w-d. D'apres les sources etymologiques, la racine porte les sens de : fournir des provisions, munir quelqu'un de ce dont il a besoin pour le voyage. La forme V (reflexive) signifie : se munir soi-meme de provisions, prendre ses propres provisions pour le voyage. L'imperatif est un ordre direct — prenez vos provisions.

La suite **fa-inna khayra al-zadi al-taqwa** (car la meilleure provision est la premunition) utilise la construction emphatique fa-inna (car certes). Le nom **khayra** est un elatif (superlatif) de la racine kh-y-r en construction d'annexion (idafa) avec **al-zadi** (la provision). L'elatif signifie « le meilleur de » — la meilleure provision. Le nom **al-zadi** est un nom defini singulier de la racine z-w-d — LA provision, la provision par excellence. Le nom **al-taqwa** est un nom defini singulier de la racine w-q-y — la premunition, le fait de se premunir. La phrase est une phrase nominale emphatique : la meilleure provision EST la premunition — c'est une equation, une identite.

L'imperatif **wa-ttaquni** est un imperatif 2MP de la forme VIII (ittaqa) de la racine w-q-y avec le pronom suffixe 1S (ni = moi). L'ordre est : premunissez-vous de Moi — Dieu ordonne de se premunir de Lui, c'est-a-dire de placer une protection entre soi et Ses consequences. Le vocatif **ya uli al-albab** interpelle les « doues d'intelligence ». Le nom **uli** est un pluriel irregulier de la racine a-w-l signifiant « ceux qui possedent, ceux qui sont doues de ». Le nom **al-albab** est un pluriel defini de la racine l-b-b. D'apres les sources etymologiques, la racine porte les sens de : moelle, noyau, essence, intelligence pure, ce qui est au centre d'une chose. L'intelligence (lubb) est le noyau de l'etre humain — sa capacite de discernement. Le verset s'adresse specifiquement aux doues d'intelligence — ceux qui sont capables de comprendre que la vraie provision n'est pas materielle mais spirituelle.

§JUSTIFICATION§
**le pelerinage** — Le sens retenu est « Pelerinage/Preuve ». Le mot al-hajju designe l'acte de se diriger vers un lieu avec intention. Le mot « pelerinage » est choisi car il designe en francais courant le voyage vers un lieu sacre avec une intention precise. L'alternative « argument/preuve » est ecartee car le verset parle d'une institution cultuelle temporelle (des mois connus), pas d'un acte argumentatif.

**des mois** — Le sens retenu est « Temps/Mois ». Le mot ashhurun designe des periodes lunaires. Le mot « mois » est choisi car il designe en francais courant les divisions du calendrier. L'alternative « apparition/notoriete » (sens de la racine sh-h-r) est ecartee car le pluriel ashhurun designe specifiquement des periodes de temps, pas l'acte d'apparaitre.

**connus** — Le sens retenu est « Savoir/Connaissance ». Le participe passif ma'lumatun signifie « qui sont sus ». Le mot « connus » est choisi car il traduit naturellement un participe passif de savoir — ce qui est su par les gens. L'alternative « savant/erudit » est ecartee car le mot est un participe passif (ce qui est su), pas un participe actif (celui qui sait).

**s'impose** — Le sens retenu est « Obligation/Devoir ». Le verbe farada signifie imposer, rendre obligatoire. Le mot « s'impose » est choisi car la forme active avec un sujet humain (man = celui qui) indique que la personne s'impose a elle-meme le pelerinage — elle prend la decision irrevocable de l'accomplir. L'alternative « entailler/marquer » (sens physique) est ecartee car le sujet est une personne et l'objet est le pelerinage — on ne taille pas un pelerinage, on se l'impose.

**l'indecence** — Le sens retenu est « Indecence/Intimite ». Le mot rafath designe la parole ou l'acte obscene. Le mot « indecence » est choisi car il couvre a la fois la dimension verbale (paroles grossieres) et physique (rapports sexuels) de la racine. L'alternative « rapport sexuel » est trop restrictive — le Lane's inclut toute parole ou tout acte grossier, pas seulement le rapport intime.

**la transgression** — Le sens retenu est « Transgression/Rebellion ». Le mot fusuq designe l'acte de sortir des limites. Le mot « transgression » est choisi car il designe en francais courant le fait de depasser les limites etablies. L'alternative « perversite » est ecartee car le sens premier de f-s-q est la sortie hors des limites — la perversite est une consequence, pas l'acte premier. L'alternative « rebellion » est ecartee car la rebellion implique une intention ddefiance organisee, tandis que la transgression est le simple fait de depasser la limite.

**la dispute** — Le sens retenu est « Argumentation/Dispute ». Le mot jidal designe l'acte de tordre les arguments dans une confrontation verbale. Le mot « dispute » est choisi car il designe en francais courant la confrontation verbale conflictuelle. L'alternative « torsion/tressage » (sens physique) est ecartee car le contexte est celui des interdictions durant le pelerinage — on interdit les comportements humains negatifs, pas les actes physiques de tressage.

**vous faites** — Le sens retenu est « Action/Acte ». Le verbe taf'alu designe l'acte de faire. Le mot « faites » est choisi car il est le verbe le plus courant et le plus neutre en francais pour designer l'action.

**bien** — Le sens retenu est « Bien/Excellence ». Le mot khayrin designe ce qui est bon et desirable. Le mot « bien » est choisi car il est le mot le plus courant en francais pour designer ce qui est bon. L'alternative « richesse » est ecartee car le contexte ici n'est pas materiel — il s'agit de tout bien, pas uniquement de la richesse.

**le sait** — Le sens retenu est « Savoir/Connaissance ». Le verbe ya'lamhu designe le fait de savoir. Le mot « sait » est choisi car il est le verbe le plus naturel pour decrire la connaissance de Dieu en francais courant.

**Dieu** — Le mot Allah est traduit par « Dieu » conformement aux regles de la pipeline.

**prenez vos provisions** — Le sens retenu est « Provisions/Viatique ». Le verbe tazawwadu (forme V reflexive) designe l'acte de se munir de provisions pour un voyage. L'expression « prenez vos provisions » est choisie car la forme V reflexive marque l'action faite sur soi-meme — on se munit soi-meme. L'alternative « recipient » (autre sens de la racine) est ecartee car le contexte est le voyage du pelerinage — on prend des provisions, pas des recipients.

**la meilleure** — Le sens retenu est « Bien/Excellence » au superlatif. Le mot khayra est un elatif qui designe le degre le plus haut de bonte. Le mot « meilleure » est choisi car c'est la traduction naturelle de l'elatif arabe.

**la provision** — Le sens retenu est « Provisions/Viatique ». Le mot al-zadi designe la provision pour le voyage. Le mot « provision » est choisi car il designe en francais courant ce qu'on prend pour un voyage.

**la premunition** — Le sens retenu est « Protection/Preservation ». Le mot al-taqwa designe le fait de se premunir, de placer une protection entre soi et ce qu'on craint. Le mot « premunition » est choisi car il traduit l'acte de se premunir — il est plus actif que « piete » qui est un etat passif. L'alternative « piete » est ecartee car elle est un terme du vocabulaire religieux chretien qui ne rend pas le sens actif de se proteger soi-meme.

**premunissez-vous de Moi** — Le sens retenu est « Protection/Preservation » a l'imperatif. Le verbe ittaquni designe l'ordre de se premunir de Dieu — placer une protection entre soi et les consequences divines. Le mot « premunissez-vous » est choisi pour la meme raison que taqwa ci-dessus.

**doues de** — Le sens retenu est « Gouvernance ». Le mot uli designe ceux qui possedent une qualite. L'expression « doues de » est choisie car elle est l'expression courante en francais pour « ceux qui sont pourvus de ».

**intelligence** — Le sens retenu est « Intelligence/Essence ». Le mot al-albab (pluriel de lubb) designe le noyau, la moelle, l'intelligence pure. Le mot « intelligence » est choisi car il designe la capacite de discernement en francais courant. L'alternative « coeurs » est ecartee car le lubb n'est pas le coeur (qalb) mais le noyau — l'intelligence profonde, pas l'emotion.

§CRITIQUE§
Le mot **taqwa/ittaqu** est traduit par « piete » et « redoutez-Moi » dans la traduction de Hamidullah. Notre traduction donne « premunition » et « premunissez-vous de Moi ». Cette difference change le sens du verset. Le mot « piete » transforme un acte de protection active en un etat de devotion passive — le pieux est devoue, le premuni est protege. Le mot « redoutez » transforme un acte de protection en une emotion de peur — redouter c'est avoir peur, se premunir c'est prendre des precautions. D'apres les sources etymologiques, la racine w-q-y signifie « placer un bouclier entre soi et ce qu'on craint » — le centre de gravite est la protection active, pas la peur ni la devotion. Le verset dit : la meilleure provision pour le voyage est de se premunir — c'est une image concrete de preparation prudente, pas un appel a la piete abstraite. La traduction « redoutez-Moi » impose une lecture de crainte emotionnelle alors que le texte dit « premunissez-vous de Moi » — placez une protection entre vous et Mes consequences, ce qui est un acte rationnel et preventif, pas une emotion.

Le mot **rafath** est traduit par « rapport sexuel » chez Hamidullah. Notre traduction donne « indecence ». D'apres les sources etymologiques, la racine r-f-th couvre toute parole ou tout acte grossier et obscene — le rapport sexuel en est un cas particulier mais pas le sens exclusif. Hamidullah restreint le mot a sa manifestation la plus extreme, alors que le texte interdit toute forme d'indecence pendant le pelerinage, qu'elle soit verbale ou physique.

Le mot **fusuq** est traduit par « perversite » chez Hamidullah. Notre traduction donne « transgression ». D'apres les sources etymologiques, le sens premier est « sortir de sa peau » (la datte qui deborde de son enveloppe) — le sens est de depasser les limites, pas d'etre pervers au sens moral. La « perversite » ajoute un jugement moral que le texte ne porte pas — le texte interdit simplement de sortir des limites prescrites.`,
    segments: [
      { fr: "le pelerinage", pos: "nom", phon: "al-hajju", arabic: "\u0671\u0644\u0652\u062d\u064e\u062c\u0651\u064f", word_key: "hjj", is_particle: false, sense_retenu: "pelerinage", position: 0 },
      { fr: "des mois", pos: "nom", phon: "ashhurun", arabic: "\u0623\u064e\u0634\u0652\u0647\u064f\u0631\u064c", word_key: "shhr", is_particle: false, sense_retenu: "mois", position: 1 },
      { fr: "connus", pos: "adjectif", phon: "ma'lumatun", arabic: "\u0645\u0651\u064e\u0639\u0652\u0644\u064f\u0648\u0645\u064e\u0640\u0670\u062a\u064c", word_key: "elm", is_particle: false, sense_retenu: "connu", position: 2 },
      { fr: "si quelqu'un", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646", is_particle: true, position: 3 },
      { fr: "s'impose", pos: "verbe", phon: "farada", arabic: "\u0641\u064e\u0631\u064e\u0636\u064e", word_key: "frd", is_particle: false, sense_retenu: "imposer", position: 4 },
      { fr: "pendant ces mois", phon: "fihinna", arabic: "\u0641\u0650\u064a\u0647\u0650\u0646\u0651\u064e", is_particle: true, position: 5 },
      { fr: "le pelerinage", pos: "nom", phon: "al-hajja", arabic: "\u0671\u0644\u0652\u062d\u064e\u062c\u0651\u064e", word_key: "hjj", is_particle: false, sense_retenu: "pelerinage", position: 6 },
      { fr: "alors point de", phon: "fa-la", arabic: "\u0641\u064e\u0644\u064e\u0627", is_particle: true, position: 7 },
      { fr: "indecence", pos: "nom", phon: "rafatha", arabic: "\u0631\u064e\u0641\u064e\u062b\u064e", word_key: "rfth", is_particle: false, sense_retenu: "indecence", position: 8 },
      { fr: "ni de", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 9 },
      { fr: "transgression", pos: "nom", phon: "fusuqa", arabic: "\u0641\u064f\u0633\u064f\u0648\u0642\u064e", word_key: "fsq", is_particle: false, sense_retenu: "transgression", position: 10 },
      { fr: "ni de", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 11 },
      { fr: "dispute", pos: "nom", phon: "jidala", arabic: "\u062c\u0650\u062f\u064e\u0627\u0644\u064e", word_key: "jdl", is_particle: false, sense_retenu: "dispute", position: 12 },
      { fr: "pendant", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 13 },
      { fr: "le pelerinage", pos: "nom", phon: "al-hajji", arabic: "\u0671\u0644\u0652\u062d\u064e\u062c\u0651\u0650", word_key: "hjj", is_particle: false, sense_retenu: "pelerinage", position: 14 },
      { fr: "et ce que", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 15 },
      { fr: "vous faites", pos: "verbe", phon: "taf'alu", arabic: "\u062a\u064e\u0641\u0652\u0639\u064e\u0644\u064f\u0648\u0627\u06df", word_key: "fel", is_particle: false, sense_retenu: "faire", position: 16 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 17 },
      { fr: "bien", pos: "nom", phon: "khayrin", arabic: "\u062e\u064e\u064a\u0652\u0631\u064d", word_key: "khyr", is_particle: false, sense_retenu: "bien", position: 18 },
      { fr: "le sait", pos: "verbe", phon: "ya'lamhu", arabic: "\u064a\u064e\u0639\u0652\u0644\u064e\u0645\u0652\u0647\u064f", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 19 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 20 },
      { fr: "et prenez vos provisions", pos: "verbe", phon: "wa-tazawwadu", arabic: "\u0648\u064e\u062a\u064e\u0632\u064e\u0648\u0651\u064e\u062f\u064f\u0648\u0627\u06df", word_key: "zwd", is_particle: false, sense_retenu: "se munir de provisions", position: 21 },
      { fr: "car certes", phon: "fa-inna", arabic: "\u0641\u064e\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 22 },
      { fr: "la meilleure", pos: "nom", phon: "khayra", arabic: "\u062e\u064e\u064a\u0652\u0631\u064e", word_key: "khyr", is_particle: false, sense_retenu: "meilleur", position: 23 },
      { fr: "provision", pos: "nom", phon: "al-zadi", arabic: "\u0671\u0644\u0632\u0651\u064e\u0627\u062f\u0650", word_key: "zwd", is_particle: false, sense_retenu: "provision", position: 24 },
      { fr: "est la premunition", pos: "nom", phon: "al-taqwa", arabic: "\u0671\u0644\u062a\u0651\u064e\u0642\u0652\u0648\u064e\u0649\u0640\u0670", word_key: "wqy", is_particle: false, sense_retenu: "premunition", position: 25 },
      { fr: "et premunissez-vous de Moi", pos: "verbe", phon: "wa-ttaquni", arabic: "\u0648\u064e\u0671\u062a\u0651\u064e\u0642\u064f\u0648\u0646\u0650", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 26 },
      { fr: "o", phon: "ya", arabic: "\u064a\u064e\u0640\u0670\u0653", is_particle: true, position: 27 },
      { fr: "doues de", pos: "nom", phon: "uli", arabic: "\u0623\u064f\u0648\u06df\u0644\u0650\u0649", word_key: "awl", is_particle: false, sense_retenu: "ceux qui possedent", position: 28 },
      { fr: "intelligence", pos: "nom", phon: "al-albabi", arabic: "\u0671\u0644\u0652\u0623\u064e\u0644\u0652\u0628\u064e\u0640\u0670\u0628\u0650", word_key: "lbb", is_particle: false, sense_retenu: "intelligence/noyau", position: 29 }
    ],
    words: [
      // hjj pos=0 (1ere occurrence, nom defini nominatif)
      {
        word_key: "hjj", position: 0, sense_chosen: "pelerinage",
        analysis_axes: {
          sense_chosen: "pelerinage",
          concept_chosen: "Pèlerinage/Preuve",
          concepts: {
            "Pèlerinage/Preuve": {
              status: "retenu",
              senses: ["pèlerinage", "se diriger vers un lieu avec intention", "argument", "preuve", "démonstration"],
              proof_ctx: "Le nom al-hajju est un nom defini singulier au nominatif de la racine h-j-j. D'apres les sources etymologiques, la racine porte les sens de : se diriger vers un lieu avec intention, argumenter, prouver, demontrer, vaincre dans un debat. Le hajj est l'acte de se diriger deliberement vers un lieu — le pelerinage est le voyage intentionnel vers un lieu sacre. L'article al- definit LE pelerinage — l'institution connue et reconnue par tous, pas un deplacement ordinaire. Dans le verset, le hajj est le sujet grammatical de la phrase nominale (al-hajju ashhurun) — le pelerinage EST des mois connus. C'est une equation : le pelerinage se definit par son temps. Le mot apparait trois fois dans le verset (positions 0, 6 et 14), couvrant le cadre temporel, la decision de l'accomplir, et le cadre des interdictions. Le concept de preuve/argument est un autre sens important de la racine mais dans ce verset le contexte est entierement cultuel et temporel — il s'agit de l'institution du pelerinage, pas de l'argumentation.",
              axe1_verset: "Le mot al-hajju ouvre le verset en posant le sujet : le pelerinage. Le champ lexical du verset (mois, connus, s'imposer, indecence, transgression, dispute, bien, provisions, premunition, intelligence) tourne autour des regles du pelerinage. Le pelerinage est le cadre dans lequel toutes les interdictions et recommandations du verset s'inscrivent. Le mot apparait trois fois pour structurer le verset : le pelerinage defini temporellement, le pelerinage decide par le pelerin, le pelerinage comme cadre des interdictions. Chaque occurrence apporte une dimension supplementaire — le temps, la decision, la discipline.",
              axe2_voisins: "Le verset 2:196 traitait de l'accomplissement du pelerinage et de la 'umra pour Dieu, avec les regles de l'offrande sacrificielle. Le verset 2:198 parlera de l'absence de faute a rechercher la faveur de Dieu pendant le pelerinage. Les versets 196-199 forment un bloc legislatif sur les regles du pelerinage. Le verset 197 se situe au coeur de ce bloc en posant les interdictions comportementales. Le passage du rituel (196) aux interdictions (197) puis a la permission (198) montre une legislation complete qui encadre le comportement du pelerin.",
              axe3_sourate: "La racine h-j-j apparait dans la sourate al-Baqarah a plusieurs reprises. En 2:158, le safa et le marwa sont mentionnes dans le contexte du pelerinage. En 2:189, les nouvelles lunes sont mentionnees comme marqueurs du temps et du pelerinage. En 2:196-203, un bloc entier est consacre au pelerinage. La sourate al-Baqarah contient le plus grand developpement legislatif sur le pelerinage dans le Coran — elle pose les fondements rituels, temporels et comportementaux de cette institution.",
              axe4_coherence: "La racine h-j-j apparait environ 33 fois dans le Coran. En 3:97, « c'est un devoir envers Dieu pour les gens de faire le pelerinage de la Maison ». En 22:27, « annonce aux gens le pelerinage, ils viendront a pied et sur toute monture ». Le Coran presente le pelerinage comme une institution universelle — un rassemblement de l'humanite vers un lieu unique. Le verset 2:197 pose les conditions comportementales de ce rassemblement : si on decide d'y participer, on doit se discipliner.",
              axe5_frequence: "Pour la mission du khalifa, le pelerinage est l'acte collectif par excellence. Le khalifa ne vit pas seul — il fait partie d'une communaute qui se rassemble dans un lieu et un temps donnes. Le pelerinage est un test de discipline collective : des milliers de personnes doivent vivre ensemble sans indecence, sans transgression et sans dispute. C'est un exercice concret de la mission du khalifa — empecher la corruption et maintenir l'ordre dans un rassemblement massif."
            }
          }
        }
      },
      // shhr pos=1
      {
        word_key: "shhr", position: 1, sense_chosen: "mois",
        analysis_axes: {
          sense_chosen: "mois",
          concept_chosen: "Temps/Mois",
          concepts: {
            "Temps/Mois": {
              status: "retenu",
              senses: ["mois lunaire", "période de temps", "cycle mensuel"],
              proof_ctx: "Le nom ashhurun est un pluriel indefini au nominatif de la racine sh-h-r. D'apres les sources etymologiques, la racine porte les sens de : etre apparent, devenir connu, paraitre au grand jour, mois lunaire (car chaque mois commence par l'apparition de la nouvelle lune). Le pluriel indefini designe « des mois » sans les nommer — le verset dit qu'ils sont connus (ma'lumat) sans avoir besoin de les citer. Le lien entre l'apparition (la lune qui apparait) et le mois est etymologique — le mois est la periode entre deux apparitions de la lune. Le mot est au nominatif comme attribut de la phrase nominale : le pelerinage EST des mois connus — le pelerinage se definit par sa temporalite. L'indefini avec le qualificatif « connus » cree un paradoxe interessant : les mois sont indefinis grammaticalement mais definis semantiquement — tout le monde sait lesquels ce sont.",
              axe1_verset: "Le mot ashhurun pose le cadre temporel du pelerinage. Le champ lexical (pelerinage, connus, s'imposer, pendant) montre que le temps est une dimension constitutive du pelerinage — le pelerinage n'existe que dans un temps precis. Le pluriel « des mois » indique que le pelerinage ne se limite pas a un seul mois mais s'etend sur plusieurs mois — les mois du pelerinage incluent la preparation, le voyage et les rites. Le mot est l'attribut de la phrase nominale — il definit le pelerinage par sa duree.",
              axe2_voisins: "Le verset 2:189 mentionnait les nouvelles lunes (al-ahilla) comme marqueurs du temps pour les gens et le pelerinage. Le verset 2:197 specifie que le pelerinage a lieu en des mois connus. La sequence montre que la sourate construit progressivement le cadre temporel : d'abord les nouvelles lunes comme principe de mesure du temps (2:189), puis les mois du pelerinage comme application concrete (2:197). Le calendrier lunaire est le fondement de la temporalite du pelerinage.",
              axe3_sourate: "La racine sh-h-r apparait dans la sourate al-Baqarah en 2:185 (le mois de Ramadan), 2:194 (le mois sacre), 2:197 (les mois du pelerinage), 2:217 (le mois sacre et le combat). La sourate utilise les mois comme marqueurs legislatifs — chaque mois a ses propres regles. Le mois de Ramadan a le jeune, les mois du pelerinage ont le pelerinage, le mois sacre a l'interdiction du combat. Le temps n'est pas neutre dans la legislation coranique — il est charge d'obligations.",
              axe4_coherence: "La racine sh-h-r apparait environ 21 fois dans le Coran. En 9:36, « le nombre des mois aupres de Dieu est de douze mois dans le Livre de Dieu ». En 9:2, « circulez dans la terre pendant quatre mois ». Le Coran construit un calendrier sacre ou certains mois ont un statut particulier. Le verset 2:197 s'inscrit dans cette logique : les mois du pelerinage sont des mois « connus » — ils font partie du calendrier sacre que le Coran institue.",
              axe5_frequence: "Pour la mission du khalifa, le temps structure la mission. Le khalifa ne vit pas dans un temps indifferencie — certains mois appellent certaines actions. Les mois du pelerinage sont un temps de rassemblement et de discipline. Le khalifa organise sa vie autour de ces marqueurs temporels — le jeune, le pelerinage, les mois sacres. Le temps n'est pas subi mais utilise comme cadre de la mission."
            }
          }
        }
      },
      // elm pos=2 (participe passif pluriel "connus")
      {
        word_key: "elm", position: 2, sense_chosen: "connu",
        analysis_axes: {
          sense_chosen: "connu",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaître", "être informé de", "connu", "su", "science", "connaissance"],
              proof_ctx: "Le participe passif ma'lumatun est un feminin pluriel indefini de la racine '-l-m. D'apres les sources etymologiques, la racine porte les sens de : savoir, connaitre, etre informe de, marquer, signe. Le participe passif (une forme qui dit que l'action est subie) signifie « qui sont sues, qui sont connues » — les mois ont ete connus, ils sont dans l'etat d'etre sus de tous. Le passif efface l'agent — on ne dit pas QUI les connait, on dit qu'ils SONT connus. Cela implique une connaissance universelle — tout le monde sait quels sont ces mois, pas besoin de les nommer. Le pluriel feminin s'accorde avec ashhurun (mois) — les mois sont qualifies de connus. La connaissance ici n'est pas intellectuelle ou scientifique mais pratique — les gens savent quels mois sont ceux du pelerinage parce que c'est une tradition etablie.",
              axe1_verset: "Le mot ma'lumatun qualifie les mois du pelerinage. Le champ lexical (pelerinage, mois, s'imposer) montre que la connaissance porte sur le temps — les mois sont connus, il n'y a pas d'ambiguite. Le participe passif pose un fait : ces mois sont sus — le verset ne les definit pas parce qu'il n'en a pas besoin, ils sont deja dans la connaissance collective. La mention « connus » empeche toute manipulation du calendrier — personne ne peut deplacer les mois du pelerinage puisqu'ils sont connus de tous.",
              axe2_voisins: "Le verset 2:196 parlait de l'accomplissement du pelerinage sans preciser les mois. Le verset 2:197 precise : les mois sont connus. Le verset 2:189 mentionnait les nouvelles lunes comme moyens de connaitre le temps. La sequence montre que le Coran construit la connaissance du temps : les lunes permettent de connaitre les mois (2:189), et les mois du pelerinage sont connus (2:197). La connaissance temporelle est progressive et partagee.",
              axe3_sourate: "La racine '-l-m est omnipresente dans la sourate al-Baqarah — c'est une des racines les plus frequentes de la sourate. En 2:30, Dieu dit « Je sais ce que vous ne savez pas ». En 2:33, Adam « informe » les anges des noms. En 2:197, la connaissance est celle des mois du pelerinage — une connaissance pratique et collective. La sourate utilise '-l-m dans tous ses registres : la connaissance divine, la connaissance humaine, la connaissance pratique.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran — c'est une des racines les plus frequentes. Le participe passif ma'lum apparait en 15:38 (un jour connu), 26:155 (un abreuvement connu), 56:50 (un jour connu). Le Coran utilise ma'lum pour ce qui est fixe et su de tous — des dates, des periodes, des regles que personne ne peut ignorer. Le verset 2:197 s'inscrit dans cette logique : les mois du pelerinage sont fixes et incontestables.",
              axe5_frequence: "Pour la mission du khalifa, la connaissance est l'instrument de la mission. Le khalifa connait les temps et les regles — il n'agit pas dans l'ignorance. Les mois du pelerinage sont « connus » parce que la mission requiert des reperes clairs et partages. Le khalifa qui connait les temps agit avec discernement — il sait quand peleriner, quand jeuner, quand combattre."
            }
          }
        }
      },
      // frd pos=4
      {
        word_key: "frd", position: 4, sense_chosen: "imposer",
        analysis_axes: {
          sense_chosen: "imposer",
          concept_chosen: "Obligation/Devoir",
          concepts: {
            "Obligation/Devoir": {
              status: "retenu",
              senses: ["imposer", "rendre obligatoire", "prescrire", "déterminer", "fixer une obligation"],
              proof_ctx: "Le verbe farada est un accompli 3MS de la racine f-r-d. D'apres les sources etymologiques, la racine porte les sens de : entailler, faire une encoche, imposer, rendre obligatoire, prescrire, determiner une part. Le sens physique premier est l'entaille — marquer une encoche definitive dans un morceau de bois. L'extension est l'obligation — une entaille est irreversible, une obligation imposee est definitive. L'accompli marque l'action comme achevee — celui qui s'est impose le pelerinage (farada al-hajj) a pris une decision irrevocable, comme une entaille dans le bois. La construction « man farada fihinna al-hajja » (celui qui s'impose le pelerinage pendant ces mois) fait du sujet humain (man) l'agent de l'imposition — c'est la personne qui s'impose a elle-meme cette obligation, pas une imposition externe.",
              axe1_verset: "Le verbe farada pose la condition d'entree dans le regime des interdictions. Le champ lexical (pelerinage, mois, point de...) montre que l'imposition est le seuil qui active les interdictions. Si la personne s'impose le pelerinage, alors les trois interdictions s'appliquent. L'accompli « farada » est utilise dans une proposition conditionnelle (man farada = celui qui s'impose) — la condition est la decision personnelle d'accomplir le pelerinage. Le verbe est personnel et actif — ce n'est pas Dieu qui impose ici mais la personne elle-meme qui prend la decision.",
              axe2_voisins: "Le verset 2:196 utilisait « atimmu al-hajja » (accomplissez le pelerinage) — un imperatif divin. Le verset 2:197 utilise « man farada » (celui qui s'impose) — une decision personnelle. La sequence montre un passage de l'ordre divin a la decision individuelle : Dieu ordonne l'accomplissement, mais c'est l'individu qui decide de s'imposer le pelerinage. L'obligation devient personnelle — celui qui s'engage s'engage irrevocablement.",
              axe3_sourate: "La racine f-r-d apparait dans la sourate al-Baqarah en 2:197 et en 2:236 (une obligation prescrite — farida). La sourate utilise f-r-d pour l'obligation juridique — ce qui est prescrit, determine, fixe. En 2:197, l'obligation est auto-imposee : la personne se l'impose a elle-meme en decidant de peleriner. En 2:236, la farida est la dot — une obligation financiere. Les deux usages montrent que f-r-d couvre l'obligation volontaire et l'obligation prescrite.",
              axe4_coherence: "La racine f-r-d apparait environ 20 fois dans le Coran. En 4:7, « une part determinee (mafruda) ». En 24:1, « une sourate que Nous avons fait descendre et que Nous avons rendue obligatoire (faradnaha) ». En 33:38, « ce que Dieu lui a impose (farada) ». Le Coran utilise f-r-d pour les obligations divines et pour les parts successorales. Le verset 2:197 est unique en ce que l'imposition est faite par la personne elle-meme — c'est un engagement personnel irrevocable.",
              axe5_frequence: "Pour la mission du khalifa, l'auto-imposition est le plus haut degre de la responsabilite. Le khalifa ne se contente pas d'obeir a des ordres externes — il s'impose lui-meme les obligations. La decision de peleriner est un acte de volonte qui engage la personne dans un regime de discipline. Le khalifa qui s'impose le pelerinage montre qu'il est capable de s'imposer des contraintes volontairement — c'est le fondement de la discipline necessaire a la mission."
            },
            "Entaille/Marque": {
              status: "peu_probable",
              senses: ["entailler", "faire une encoche", "marquer", "couper", "inciser"],
              proof_ctx: "Le sens physique d'entailler est le sens premier de la racine f-r-d dans le Lane's — faire une encoche dans un morceau de bois. Ce sens est la base etymologique de l'obligation : une entaille est irreversible, comme une obligation est irrevocable. Mais le contexte du verset est juridique et cultuel — le sujet est une personne qui s'impose le pelerinage, pas quelqu'un qui fait une entaille dans du bois. Le sens physique eclaire le sens abstrait (l'irrevocabilite de la decision) mais n'est pas le sens operatoire dans le verset. La distinction philosophique est que l'entaille est un acte physique sur la matiere, tandis que l'imposition est un acte juridique sur la volonte. Le verset parle de la volonte, pas de la matiere.",
              axe1_verset: "Le sens d'entaille ne s'integre pas au champ lexical du verset qui est entierement cultuel et comportemental (pelerinage, mois, indecence, transgression, dispute). Entailler un pelerinage est une expression qui n'a pas de sens. Le champ lexical n'offre aucun support a l'idee de marque physique ou d'incision. Le verset parle d'une decision humaine, pas d'un acte manuel. L'entaille est le terreau etymologique de l'obligation mais pas son expression dans ce contexte.",
              axe2_voisins: "Les versets voisins traitent des rites du pelerinage (196), des interdictions comportementales (197), de la recherche de la faveur divine (198). Aucun verset voisin ne parle d'actes physiques de marquage ou d'incision. Le passage est entierement legislatif et moral — le sens physique d'entaille est hors sujet dans ce bloc.",
              axe3_sourate: "La sourate al-Baqarah utilise f-r-d dans un registre juridique. En 2:236, la farida est la dot — une obligation financiere, pas une entaille. Le registre de la sourate est legislatif — f-r-d y designe l'obligation, pas le geste physique d'entailler.",
              axe4_coherence: "Le Coran utilise f-r-d principalement pour les obligations et les parts prescrites (heritage, lois). Aucune occurrence coranique n'utilise f-r-d pour decrire un acte physique d'incision. Le sens d'entaille est etymologique et historique mais absent de l'usage coranique.",
              axe5_frequence: "L'entaille ne contribue pas a la mission du khalifa dans ce contexte. Le khalifa prend des decisions et s'impose des obligations — il n'entaille pas du bois. Le sens physique n'a pas de pertinence pour la mission."
            }
          }
        }
      },
      // rfth pos=8
      {
        word_key: "rfth", position: 8, sense_chosen: "indecence",
        analysis_axes: {
          sense_chosen: "indecence",
          concept_chosen: "Indécence/Intimité",
          concepts: {
            "Indécence/Intimité": {
              status: "retenu",
              senses: ["indécence", "parole obscène", "rapport sexuel", "grossièreté", "tout ce qui est vil dans la parole ou l'acte"],
              proof_ctx: "Le nom rafath est un indefini accusatif de la racine r-f-th. D'apres les sources etymologiques, la racine porte les sens de : parole indecente, rapport sexuel, tout ce qui est obscene ou grossier dans la parole ou l'acte, ce qui est vil et bas. Le rafath couvre un spectre large — de la parole grossiere au rapport intime. L'indefini avec la negation la (fa-la rafatha) forme une negation absolue : aucune indecence quelle qu'elle soit. La negation est categorique et totale — pendant le pelerinage, toute forme d'indecence est interdite. Le concept d'indecence est un etat et un acte qui degrade la dignite — c'est un comportement qui sort de la norme de bienseance et qui affecte ceux qui l'entendent ou le subissent.",
              axe1_verset: "Le mot rafath est la premiere des trois interdictions. Le champ lexical (pelerinage, transgression, dispute) montre que les trois interdictions couvrent trois dimensions du comportement : l'intimite/decence (rafath), le respect des limites (fusuq), les relations avec les autres (jidal). Le rafath est l'interdiction la plus intime — elle touche a la parole privee et au rapport physique. Le verset construit une gradation de l'intime vers le social : indecence → transgression → dispute.",
              axe2_voisins: "Le verset 2:187 utilisait rafath dans le contexte du jeune — « il vous est permis la nuit du jeune le rafath avec vos femmes ». En 2:197, le rafath est interdit pendant le pelerinage. La sequence montre que le Coran regle le rafath selon le temps : permis la nuit du jeune, interdit pendant le pelerinage. Le rafath n'est pas interdit en soi mais encadre temporellement — c'est le cadre sacre du pelerinage qui l'interdit.",
              axe3_sourate: "La racine r-f-th apparait dans la sourate al-Baqarah en 2:187 et 2:197. Les deux occurrences traitent du rafath en contexte rituel — le jeune et le pelerinage. La sourate construit un cadre temporel ou certains comportements sont permis a certains moments et interdits a d'autres. Le rafath est le marqueur de la discipline rituelle — sa regulation montre que le croyant doit maitriser ses pulsions selon le contexte.",
              axe4_coherence: "La racine r-f-th apparait 3 fois dans le Coran : 2:187, 2:197, et 58:3 (le zihar). Les trois occurrences traitent de l'intimite conjugale et de la parole indecente dans des contextes juridiques. Le Coran ne moralise pas le rafath — il le regle. Le rafath est une realite humaine que la legislation encadre : permis dans certains contextes, interdit dans d'autres.",
              axe5_frequence: "Pour la mission du khalifa, la maitrise de l'indecence est une dimension de la discipline. Le khalifa pendant le pelerinage doit maitriser sa parole et ses pulsions — c'est un test de self-control dans un contexte de rassemblement massif. L'interdiction du rafath montre que le pelerinage n'est pas seulement un rituel physique mais un exercice de maitrise de soi."
            }
          }
        }
      },
      // fsq pos=10
      {
        word_key: "fsq", position: 10, sense_chosen: "transgression",
        analysis_axes: {
          sense_chosen: "transgression",
          concept_chosen: "Transgression/Rébellion",
          concepts: {
            "Transgression/Rébellion": {
              status: "retenu",
              senses: ["transgresser", "sortir des limites", "désobéir", "déborder", "se rebeller", "la datte qui sort de sa peau"],
              proof_ctx: "Le nom fusuq est un indefini accusatif de la racine f-s-q. D'apres les sources etymologiques, la racine porte les sens de : sortir de, deborder, la datte qui sort de sa peau, transgresser les limites, desobeir, se rebeller contre l'autorite. Le sens physique premier est la datte qui deborde de son enveloppe — elle sort de ce qui la contient. L'extension metaphorique est la transgression — sortir des limites fixees par la loi. Le fusuq est un acte de depassement — celui qui transgresse depasse la frontiere entre le permis et l'interdit. L'indefini avec la negation la (wa-la fusuqa) forme une negation absolue : aucune transgression quelle qu'elle soit pendant le pelerinage.",
              axe1_verset: "Le mot fusuq est la deuxieme des trois interdictions. Le champ lexical (pelerinage, indecence, dispute) montre que la transgression est l'interdiction intermediaire entre l'intime (rafath) et le social (jidal). La transgression est le depassement des limites — elle couvre tout comportement qui sort du cadre autorise pendant le pelerinage. Le verset pose une triple frontiere : pas d'indecence dans l'intime, pas de transgression dans le comportement general, pas de dispute dans les relations. Le fusuq est la categorie la plus large des trois — tout ce qui depasse les limites.",
              axe2_voisins: "Le verset 2:196 posait les regles rituelles du pelerinage (offrandes, sacrifices). Le verset 2:197 pose les regles comportementales. La transgression est l'acte de sortir de ces regles — depasser les limites posees par les versets legislatifs. Le verset 2:198 permettra de rechercher la faveur de Dieu pendant le pelerinage — il montre que les limites ne sont pas seulement des interdictions mais aussi des permissions. Le fusuq est le depassement de ce cadre.",
              axe3_sourate: "La racine f-s-q apparait dans la sourate al-Baqarah en 2:26 (« il n'egare que les fasiqin »), 2:59 (« les injustes changerent la parole — ils etaient des fasiqin »), 2:99 (« seuls les fasiqin les rejettent »), et 2:197. La sourate utilise f-s-q pour decrire ceux qui sortent du cadre de l'obeissance — les transgresseurs sont ceux qui depassent les limites de la guidance. En 2:197, le fusuq est interdit pendant le pelerinage — le pelerin ne doit pas etre un fasiq.",
              axe4_coherence: "La racine f-s-q apparait environ 54 fois dans le Coran. En 5:3, la viande interdite est qualifiee de « fisq ». En 49:6, le fasiq est celui dont le temoignage est douteux. En 49:7, le fisq est associe a la desobeissance. Le Coran construit le fusuq comme l'acte de sortir de l'ordre divin — le fasiq est celui qui depasse les limites, que ce soit dans l'alimentation, le temoignage ou le comportement. Le verset 2:197 applique cette interdiction au contexte specifique du pelerinage.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est l'ennemi de la mission. Le khalifa est celui qui maintient l'ordre — la transgression le detruit. Pendant le pelerinage, l'interdiction du fusuq rappelle que le rassemblement collectif requiert le respect des limites. Si chacun transgresse, le pelerinage devient un desordre. La mission du khalifa est precisement d'empecher la corruption (fasad) — et la transgression (fusuq) est la porte d'entree de la corruption."
            }
          }
        }
      },
      // jdl pos=12
      {
        word_key: "jdl", position: 12, sense_chosen: "dispute",
        analysis_axes: {
          sense_chosen: "dispute",
          concept_chosen: "Argumentation/Dispute",
          concepts: {
            "Argumentation/Dispute": {
              status: "retenu",
              senses: ["disputer", "argumenter", "débattre avec acharnement", "confrontation verbale", "polémique"],
              proof_ctx: "Le nom jidal est un indefini accusatif de la racine j-d-l. D'apres les sources etymologiques, la racine porte les sens de : tordre, tresser, argumenter, disputer, debattre avec acharnement, confrontation verbale. Le sens physique premier est la torsion — tresser une corde en tordant les brins. L'extension metaphorique est l'argumentation — tordre les arguments, les entrelacer pour vaincre l'adversaire. Le jidal est une confrontation verbale ou chaque partie tord ses arguments pour prendre le dessus. L'indefini avec la negation la (wa-la jidala) forme une negation absolue : aucune dispute quelle qu'elle soit pendant le pelerinage. La dispute est un acte social et exterieur — elle implique au minimum deux personnes en confrontation. C'est l'interdiction la plus sociale des trois.",
              axe1_verset: "Le mot jidal est la troisieme et derniere des trois interdictions. Le champ lexical (pelerinage, indecence, transgression) montre que la dispute est l'interdiction la plus sociale — elle concerne les relations entre les pelerins. Le verset construit une gradation de l'intime au social : indecence (soi/intime) → transgression (soi/limites) → dispute (soi/autrui). La triple interdiction couvre tout le spectre du comportement humain. La mention « fi-l-hajj » (pendant le pelerinage) apres la troisieme interdiction referme le cadre — les trois interdictions s'appliquent specifiquement pendant le pelerinage.",
              axe2_voisins: "Le verset 2:196 posait les rites. Le verset 2:197 interdit les comportements nuisibles. Le verset 2:198 permettra la recherche de la faveur divine. La dispute est l'interdiction qui touche le plus directement le rassemblement collectif — si les pelerins se disputent, le pelerinage echoue comme acte communautaire. Les versets voisins construisent un equilibre entre rites (positif), interdictions (negatif) et permissions (equilibre).",
              axe3_sourate: "La racine j-d-l apparait dans la sourate al-Baqarah en 2:197 et en 2:204 (« celui dont la parole te plait dans la vie d'ici-bas et qui prend Dieu a temoin de ce qu'il a dans le coeur, alors qu'il est le plus acharné des disputeurs — aladd al-khisam »). La sourate met en garde contre la dispute verbale — celui qui dispute habilement peut seduire par sa parole tout en etant corrompu. En 2:197, la dispute est interdite pendant le pelerinage car elle detruit la paix du rassemblement.",
              axe4_coherence: "La racine j-d-l apparait environ 29 fois dans le Coran. En 16:125, « discute avec eux de la meilleure maniere (jdl bi-llati hiya ahsan) ». En 29:46, « ne disputez avec les Gens du Livre que de la meilleure maniere ». Le Coran ne rejette pas toute forme de jidal — il interdit le jidal agressif et encourage le jidal constructif. En 2:197, l'interdiction est totale pendant le pelerinage car le contexte est un rassemblement sacre ou meme la discussion constructive peut degenerer.",
              axe5_frequence: "Pour la mission du khalifa, l'interdiction de la dispute pendant le pelerinage est un exercice de maitrise sociale. Le khalifa doit savoir quand argumenter et quand se taire. Le pelerinage est un moment ou le silence et la paix priment sur le debat. La mission du khalifa n'est pas seulement d'argumenter avec justice mais aussi de savoir renoncer a l'argumentation quand le contexte l'exige — la paix collective prime sur la verite individuelle pendant le pelerinage."
            },
            "Torsion/Tressage": {
              status: "probable",
              senses: ["tordre", "tresser", "entrelacer", "corde tressée", "enrouler"],
              proof_ctx: "Le sens physique de torsion est le sens premier de la racine j-d-l dans le Lane's — tresser une corde en tordant les brins, entrelacer. Ce sens est le fondement etymologique de l'argumentation : disputer c'est tordre les arguments comme on tresse une corde. Mais le contexte du verset est comportemental — les trois interdictions sont des comportements humains (indecence, transgression, dispute), pas des actes physiques (rapport, sortie, tressage). La distinction philosophique est que la torsion est un acte manuel sur la matiere, tandis que la dispute est un acte verbal entre personnes. Le verset interdit des comportements sociaux, pas des gestes artisanaux. Le sens de torsion eclaire la nature de la dispute (tordre les arguments) mais n'est pas le sens operatoire dans ce verset.",
              axe1_verset: "Le sens de torsion ne s'integre pas au champ lexical du verset. Les trois interdictions sont des comportements humains pendant le pelerinage. La torsion physique est un geste artisanal qui n'a pas de rapport avec le contexte cultuel du verset. Le parallele avec les deux autres interdictions (indecence, transgression) confirme que le troisieme terme est aussi un comportement social, pas un acte physique.",
              axe2_voisins: "Les versets voisins traitent des rites et comportements du pelerinage. Aucun verset voisin ne traite de gestes artisanaux ou de tressage. Le contexte est entierement cultuel et legislatif — le sens physique est hors sujet.",
              axe3_sourate: "La sourate al-Baqarah utilise j-d-l dans un registre social et verbal (2:204 — le disputeur acharne). Le registre de la sourate est l'argumentation et le conflit verbal, pas le tressage physique.",
              axe4_coherence: "Le Coran utilise j-d-l principalement pour l'argumentation et la dispute verbale. Aucune occurrence coranique ne designe le tressage physique. Le sens de torsion est purement etymologique dans l'usage coranique.",
              axe5_frequence: "La torsion physique ne contribue pas a la mission du khalifa dans ce contexte. Le khalifa gere les conflits sociaux, pas les cordes tressees."
            },
            "Sens isolé/Être": {
              status: "nul",
              senses: ["être seul", "isolement"],
              proof_ctx: "Ce sens est marginal dans le Lane's et n'a aucun rapport avec le contexte du verset. Les trois interdictions sont des comportements sociaux — l'isolement n'est pas un comportement interdit pendant le pelerinage."
            }
          }
        }
      },
      // fel pos=16
      {
        word_key: "fel", position: 16, sense_chosen: "faire",
        analysis_axes: {
          sense_chosen: "faire",
          concept_chosen: "Action/Acte",
          concepts: {
            "Action/Acte": {
              status: "retenu",
              senses: ["faire", "agir", "accomplir", "produire un acte", "effectuer"],
              proof_ctx: "Le verbe taf'alu est un inaccompli 2MP de la racine f-'-l. D'apres les sources etymologiques, la racine porte les sens de : faire, agir, accomplir, produire un acte, effectuer. Le fi'l est l'acte en soi — toute action quelle qu'elle soit. L'inaccompli marque une action en cours ou habituelle — ce que vous faites de maniere continue, pas un acte ponctuel. La construction « ma taf'alu min khayrin » (ce que vous faites de bien) est une construction conditionnelle relative : tout bien que vous faites → Dieu le sait. Le verbe est au pluriel (vous) — il s'adresse a la communaute des pelerins collectivement. Le faire est le plus general des verbes d'action — il englobe toute forme de bien.",
              axe1_verset: "Le verbe taf'alu ouvre la section positive du verset apres les trois interdictions negatives. Le champ lexical (bien, savoir, provisions) montre que le verset passe de l'interdiction a l'encouragement. Apres avoir dit ce qu'il ne faut PAS faire (indecence, transgression, dispute), le verset dit ce qu'il faut faire (du bien). Le verbe « faire » est le pont entre les interdictions et les encouragements. L'inaccompli souligne la continuite — ce n'est pas un acte ponctuel mais une habitude constante de faire le bien.",
              axe2_voisins: "Le verset 2:196 traitait des rites (faire des offrandes). Le verset 2:197 passe des interdictions aux encouragements. Le verset 2:198 permettra la recherche de la faveur divine. La sequence montre un rythme : rites → interdictions → encouragements → permissions. Le « faire du bien » de 2:197 est la contrepartie positive des interdictions — le verset ne se contente pas d'interdire, il encourage.",
              axe3_sourate: "La racine f-'-l apparait dans la sourate al-Baqarah en 2:68 (« fais ce qu'on t'ordonne »), 2:71 (« il a fait ce qui lui a ete ordonne »), et d'autres occurrences. La sourate utilise f-'-l pour l'acte en general — l'acte d'obeissance, l'acte prescrit, l'acte libre. En 2:197, le faire est libre (tout bien que vous faites) mais observe par Dieu (Dieu le sait).",
              axe4_coherence: "La racine f-'-l apparait environ 108 fois dans le Coran. En 2:85, « est-ce que vous faites (taf'aluna) cela alors que vous etes temoin ? ». En 21:73, « Nous leur avons revele de faire (fi'la) le bien ». Le Coran lie le faire au bien et au mal — l'action humaine est le terrain de l'epreuve. Le verset 2:197 montre que le faire du bien est observe par Dieu — rien n'echappe a Sa connaissance.",
              axe5_frequence: "Pour la mission du khalifa, le faire est l'essence de la mission. Le khalifa n'est pas un contemplatif — il agit, il fait. Le verset dit que tout bien fait est connu de Dieu — la mission du khalifa est observee et enregistree. Le faire du bien pendant le pelerinage est un echantillon de la mission : agir avec justice et bonte dans un contexte collectif et sacre."
            }
          }
        }
      },
      // khyr pos=18 (indefini genitif "bien")
      {
        word_key: "khyr", position: 18, sense_chosen: "bien",
        analysis_axes: {
          sense_chosen: "bien",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "bonté", "richesse", "excellence", "ce qui est bon et désirable", "préférence", "supériorité"],
              proof_ctx: "Le nom khayrin est un indefini au genitif de la racine kh-y-r, precede de la preposition min (de/parmi). D'apres les sources etymologiques, la racine porte les sens de : bien, bonte, excellence, richesse, fortune, ce qui est bon et souhaitable, preference, superieur. Le khayr est ce qui est bon en soi — il englobe le bien moral et le bien materiel. La construction « min khayrin » (de bien) est partitive — tout bien, quel qu'il soit, meme minime. L'indefini souligne l'universalite : tout bien que vous faites, sans limite ni qualification. Le khayr ici n'est pas la richesse (comme en 2:180) mais le bien moral general — tout acte bon fait pendant le pelerinage.",
              axe1_verset: "Le mot khayrin est l'objet du faire (taf'alu min khayrin = vous faites de bien). Le champ lexical (faire, savoir, Dieu) montre que le bien est ce que Dieu observe et connait. Apres les trois interdictions negatives, le verset pose le bien comme l'horizon positif — faites du bien et Dieu le sait. L'indefini (khayrin, pas al-khayr) laisse ouvert le champ du bien — tout bien, petit ou grand, visible ou invisible.",
              axe2_voisins: "Le verset 2:195 mentionnait le bien (ihsan) dans le contexte de la depense. Le verset 2:197 mentionne le bien (khayr) dans le contexte du pelerinage. Le bien dans cette section de la sourate est a la fois materiel (depenser) et moral (agir avec bonte). Le verset 2:197 reunit les deux en disant « tout bien que vous faites » — sans limiter le bien a un seul type.",
              axe3_sourate: "La racine kh-y-r est parmi les plus frequentes de la sourate al-Baqarah. Elle apparait dans des contextes varies : le meilleur (2:106), la richesse (2:180), le bien moral (2:197), le meilleur jugement (2:216). La sourate utilise khayr dans tout son spectre semantique — le superlatif, la richesse, le bien moral, la preference.",
              axe4_coherence: "La racine kh-y-r apparait environ 176 fois dans le Coran. En 99:7, « celui qui fait un poids d'atome de bien (khayran) le verra ». En 2:197, le meme principe est pose : tout bien que vous faites, Dieu le sait. Le Coran repete que rien n'est perdu — le plus petit bien est enregistre. Le verset 2:197 applique ce principe au contexte du pelerinage.",
              axe5_frequence: "Pour la mission du khalifa, le bien est la finalite de la mission. Le khalifa existe pour faire le bien et empecher la corruption. Le verset affirme que tout bien fait est connu de Dieu — la mission du khalifa est observee et valorisee. Rien n'est perdu, rien n'est inutile — chaque acte de bien contribue a la mission."
            }
          }
        }
      },
      // elm pos=19 (verbe inaccompli "le sait")
      {
        word_key: "elm", position: 19, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaître", "être informé de", "connu", "su", "science", "connaissance"],
              proof_ctx: "Le verbe ya'lamhu est un inaccompli apocope 3MS de la racine '-l-m avec pronom suffixe 3MS (hu = le). D'apres les sources etymologiques, la racine porte les sens de : savoir, connaitre, etre informe de, marquer. Le savoir divin est total et permanent — Dieu sait tout bien que les gens font, meme ce qui est cache. L'apocope (une forme conditionnelle — si vous faites du bien, alors Il le sait) montre que le savoir de Dieu est la consequence directe du faire humain : chaque acte de bien est immediatement su. Le pronom hu (le) renvoie au bien — Dieu le sait, ce bien precis que vous faites. Le sujet Allahu apres le verbe met l'accent sur l'identite de celui qui sait — c'est Dieu qui sait, pas un humain.",
              axe1_verset: "Le verbe ya'lamhu est la reponse divine au faire humain. Le champ lexical (faire, bien, Dieu) montre que le savoir de Dieu est le miroir du faire de l'homme. Le verset cree une relation : l'homme fait → Dieu sait. C'est un encouragement — le bien n'est pas perdu, il est su de Dieu. Apres les interdictions, cette affirmation rassure : non seulement le mal est interdit mais le bien est enregistre. Le savoir de Dieu est une motivation : faites du bien car quelqu'un le sait.",
              axe2_voisins: "Le verset 2:196 mentionnait la connaissance des regles rituelles. Le verset 2:197 affirme que Dieu sait le bien que les gens font. Le verset 2:198 dira qu'il n'y a pas de faute a rechercher la faveur divine. La sequence construit un rapport de confiance : les regles sont connues (196), le bien est su de Dieu (197), la recherche de subsistance est permise (198). Le savoir de Dieu couvre tout — les rites, les actes, les intentions.",
              axe3_sourate: "La racine '-l-m est omnipresente dans la sourate al-Baqarah. En 2:30, Dieu dit « Je sais ce que vous ne savez pas ». En 2:216, « Dieu sait et vous ne savez pas ». En 2:197, Dieu sait le bien que les gens font. La sourate construit une asymetrie entre le savoir divin (total) et le savoir humain (partiel). L'affirmation « Dieu le sait » rappelle cette asymetrie — meme le bien cache est su de Dieu.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. La formule « Dieu sait » (ya'lamu Allahu / Allahu ya'lamu) est un leitmotiv coranique — elle rappelle que rien n'echappe a la connaissance divine. En 2:215, « tout bien que vous depensez... Dieu le sait ». En 2:197, la meme formule est appliquee au pelerinage. Le Coran repete cette verite dans tous les contextes pour ancrer la certitude que les actes sont observes.",
              axe5_frequence: "Pour la mission du khalifa, le savoir de Dieu est la garantie de la mission. Le khalifa sait que ses actes sont observes — rien n'est perdu, rien n'est cache. Cette certitude motive l'action juste et empeche le decouragement. Le khalifa qui sait que Dieu sait agit avec integrite meme quand personne ne regarde."
            }
          }
        }
      },
      // alh pos=20
      {
        word_key: "alh", position: 20, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["Dieu", "divinité", "celui qui est adoré"],
              proof_ctx: "Le nom Allahu est le nom propre de Dieu, defini et au nominatif comme sujet du verbe ya'lamhu (Il le sait). D'apres les sources etymologiques, la racine l-h-h porte les sens de : adorer, se refugier, etre perplexe devant la grandeur. Allah est le nom propre de la divinite unique — il n'admet ni pluriel ni feminin. Dans le verset, Dieu est celui qui sait le bien que les gens font — son role est celui de l'observateur omniscient. Le nom est place apres le verbe (ya'lamhu Allahu) pour mettre l'accent sur l'identite du sujet : c'est DIEU qui sait, pas n'importe qui.",
              axe1_verset: "Le nom Allahu est le sujet qui sait. Le champ lexical (faire, bien, savoir) montre que Dieu est le temoin du bien humain. Le verset cree une relation triangulaire : le pelerin fait du bien, Dieu le sait, le pelerin est motive. La mention de Dieu apres les interdictions et avant l'encouragement aux provisions montre que Dieu est present a chaque etape — Il interdit, Il observe, Il guide.",
              axe2_voisins: "Le nom Allahu apparait dans tous les versets voisins du bloc sur le pelerinage. En 2:196, « accomplissez le pelerinage et la 'umra pour Dieu ». En 2:198, « il n'y a pas de faute pour vous a rechercher la faveur de votre Seigneur ». Dieu est le destinataire du pelerinage, l'observateur du bien, et la source de la faveur. Sa mention dans chaque verset rappelle que le pelerinage est pour Lui.",
              axe3_sourate: "La racine l-h-h (Allah) est le nom le plus frequent de la sourate al-Baqarah. Il structure chaque section legislative comme l'autorite ultime — c'est Dieu qui prescrit, qui sait, qui juge, qui pardonne. En 2:197, la mention de Dieu est un rappel de l'autorite et de la bienveillance — Il sait le bien que vous faites.",
              axe4_coherence: "Le nom Allah apparait environ 2699 fois dans le Coran. Il est le sujet, l'objet, la reference de tout le texte coranique. En 2:197, la mention « Dieu le sait » s'inscrit dans la theologie coranique de la connaissance divine totale.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est celui qui a institue la mission et qui en observe l'accomplissement. Le khalifa agit pour Dieu et devant Dieu. La mention de Dieu dans le contexte du pelerinage rappelle que la mission n'est pas humaine mais divine — le khalifa est le representant de Dieu sur terre, et Dieu observe son travail."
            }
          }
        }
      },
      // zwd pos=21 (verbe imperatif Form V "prenez vos provisions")
      {
        word_key: "zwd", position: 21, sense_chosen: "se munir de provisions",
        analysis_axes: {
          sense_chosen: "se munir de provisions",
          concept_chosen: "Provisions/Viatique",
          concepts: {
            "Provisions/Viatique": {
              status: "retenu",
              senses: ["provisions de voyage", "viatique", "se munir pour le voyage", "fournir des vivres", "ce dont on se munit pour la route"],
              proof_ctx: "Le verbe tazawwadu est un imperatif 2MP de la forme V (tafa''ala) de la racine z-w-d. D'apres les sources etymologiques, la racine porte les sens de : fournir des provisions pour le voyage, munir quelqu'un de vivres, viatique, ce dont on se munit pour la route. La forme V (reflexive) signifie « se munir soi-meme de provisions » — l'action est faite sur soi-meme, par soi-meme. L'imperatif est un ordre direct : prenez vos provisions pour le voyage. Le verset enchaine immediatement avec « la meilleure provision est la premunition » — les provisions materielles sont transformees en provisions spirituelles. Le zad est ce qu'on prend avec soi pour ne pas etre depourvu en route — l'image est concrete et pratique. La provision est un acte de prevoyance — celui qui se munit anticipe ses besoins.",
              axe1_verset: "Le verbe tazawwadu ouvre la section finale du verset apres les interdictions et l'encouragement. Le champ lexical (bien, savoir, provisions, meilleure, premunition) montre que le verset passe progressivement du concret au spirituel. L'ordre de prendre des provisions est concret — il s'adresse a des pelerins qui voyagent et qui ont besoin de nourriture et d'eau. Mais le verset transforme immediatement le concret en spirituel : la meilleure provision est la premunition. Les provisions materielles sont le vehicule d'un enseignement plus profond.",
              axe2_voisins: "Le verset 2:196 traitait des rites et offrandes du pelerinage — des actes cultuels. Le verset 2:197 passe des rites aux provisions — un sujet pratique et quotidien. Le verset montre que le pelerinage n'est pas seulement rituel mais aussi pratique : il faut se preparer materiellement. Le verset 2:198 parlera de la recherche de la faveur divine — la preparation materielle est completee par la preparation spirituelle.",
              axe3_sourate: "La racine z-w-d apparait dans la sourate al-Baqarah uniquement en 2:197 (deux fois : le verbe et le nom). Cette unicite dans la sourate donne au mot un poids particulier — les provisions sont mentionnees une seule fois mais dans un contexte qui les transforme en metaphore spirituelle. La sourate construit l'image du voyage (pelerinage) comme une metaphore de la vie — et les provisions du voyage sont les provisions de la vie entiere.",
              axe4_coherence: "La racine z-w-d apparait 4 fois dans le Coran, toutes en 2:197. Cette concentration exclusive dans un seul verset montre que le Coran traite le theme des provisions dans un seul passage mais de maniere dense — l'imperatif, le nom, le comparatif, la conclusion. Le Coran ne revient pas sur les provisions ailleurs — le message est dit une fois, clairement et completement.",
              axe5_frequence: "Pour la mission du khalifa, les provisions sont l'equipement de la mission. Le khalifa ne part pas en mission sans preparation — il se munit de ce dont il a besoin. Le verset enseigne que la meilleure preparation n'est pas materielle mais spirituelle : la premunition est la provision ultime. Le khalifa qui se premunit est celui qui a la provision la plus complete pour accomplir sa mission."
            },
            "Récipient": {
              status: "nul",
              senses: ["récipient", "vase", "contenant"],
              proof_ctx: "Le sens de recipient est un sens marginal de la racine z-w-d dans le Lane's. Le contexte du verset est le voyage du pelerinage et les provisions — il n'est pas question de recipients ou de contenants. La forme V reflexive (tazawwadu) porte le sens de se munir, pas de contenir. Ce sens est hors sujet."
            }
          }
        }
      },
      // khyr pos=23 (elatif "la meilleure")
      {
        word_key: "khyr", position: 23, sense_chosen: "meilleur",
        analysis_axes: {
          sense_chosen: "meilleur",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "bonté", "richesse", "excellence", "ce qui est bon et désirable", "préférence", "supériorité", "le meilleur"],
              proof_ctx: "Le nom khayra est un elatif (superlatif) de la racine kh-y-r en construction d'annexion (idafa) avec al-zadi (la provision). D'apres les sources etymologiques, la racine porte les sens de : bien, bonte, excellence, superieur, le meilleur. L'elatif signifie « le meilleur de » — ici la meilleure provision. La construction khayra al-zadi (la meilleure provision) est une idafa qui qualifie un type precis de bien : parmi toutes les provisions possibles, la meilleure est la premunition. Le superlatif cree une hierarchie — il y a des provisions bonnes mais une provision est la meilleure. Ce mot est le meme khayr que la position 18 mais dans une fonction grammaticale differente : en position 18 c'est un genitif indefini (du bien), en position 23 c'est un elatif (la meilleure).",
              axe1_verset: "Le mot khayra fait le lien entre les provisions materielles et la provision spirituelle. Le champ lexical (provisions, provision, premunition) montre que le verset construit une hierarchie : prendre des provisions (concret) → la meilleure provision (comparaison) → la premunition (spirituel). Le superlatif est le pivot de cette transformation — il dit que parmi toutes les bonnes choses qu'on peut emporter, une est au-dessus de toutes.",
              axe2_voisins: "Le verset 2:196 mentionnait les offrandes et sacrifices — des biens materiels offerts a Dieu. Le verset 2:197 affirme que la meilleure provision est la premunition — le bien spirituel surpasse le bien materiel. La sequence montre une hierarchie des valeurs : les rites materiels sont bons mais la premunition est meilleure. Le passage du materiel au spirituel est le mouvement central de ce bloc.",
              axe3_sourate: "La racine kh-y-r sous forme d'elatif (khayr = meilleur) apparait frequemment dans la sourate al-Baqarah. En 2:106, « Nous apportons mieux qu'elle ». En 2:184, « celui qui fait davantage de bien, c'est meilleur pour lui ». En 2:197, la meilleure provision est la premunition. La sourate utilise l'elatif pour poser des hierarchies de valeur — le meilleur est toujours celui qui a la dimension spirituelle.",
              axe4_coherence: "Le Coran utilise l'elatif khayr environ 109 fois pour poser des comparaisons et des hierarchies. En 2:263, « une parole convenable et un pardon valent mieux qu'une aumone suivie d'un tort ». En 4:59, « c'est mieux et la meilleure interpretation ». Le Coran utilise le superlatif pour enseigner la hierarchie des valeurs — certaines choses sont bonnes mais d'autres sont meilleures. Le verset 2:197 applique ce principe aux provisions du pelerinage.",
              axe5_frequence: "Pour la mission du khalifa, la hierarchie des valeurs guide la mission. Le khalifa ne traite pas tout de maniere egale — il sait que certaines choses sont meilleures que d'autres. Le verset enseigne que la premunition est la meilleure provision — le khalifa qui se premunit a la meilleure preparation pour sa mission."
            }
          }
        }
      },
      // zwd pos=24 (nom defini "la provision")
      {
        word_key: "zwd", position: 24, sense_chosen: "provision",
        analysis_axes: {
          sense_chosen: "provision",
          concept_chosen: "Provisions/Viatique",
          concepts: {
            "Provisions/Viatique": {
              status: "retenu",
              senses: ["provisions de voyage", "viatique", "se munir pour le voyage", "fournir des vivres", "ce dont on se munit pour la route"],
              proof_ctx: "Le nom al-zadi est un nom defini singulier au genitif de la racine z-w-d, en construction d'annexion (idafa) avec khayra (la meilleure). D'apres les sources etymologiques, la racine porte les sens de : provision de voyage, viatique, ce dont on se munit pour la route. L'article al- definit LA provision — la provision par excellence, le concept meme de provision. Le mot est le complement d'annexion de khayra (la meilleure DE la provision) — il designe la categorie dont on cherche le meilleur element. La provision definie est l'idee generale de provision, tandis que la meilleure provision est la premunition. Le passage de l'imperatif tazawwadu (prenez vos provisions, concret) au nom al-zad (la provision, concept) marque l'elevation du concret vers l'abstrait.",
              axe1_verset: "Le mot al-zadi est le complement d'annexion qui complete la comparaison. Le champ lexical (provisions, meilleure, premunition) montre que la provision est la categorie englobante dont la premunition est le meilleur element. Le verset dit : parmi toutes les provisions, la premunition est la meilleure. L'article al- generalise — il ne s'agit pas d'une provision particuliere mais du concept meme de provision.",
              axe2_voisins: "Le sens de provision est le meme qu'en position 21 (tazawwadu). Les versets voisins traitent de la preparation au pelerinage — la provision est un element pratique de cette preparation que le verset transforme en lecon spirituelle.",
              axe3_sourate: "La racine z-w-d n'apparait dans la sourate al-Baqarah qu'en 2:197. L'unicite de cette racine dans la sourate concentre toute la reflexion sur les provisions dans un seul verset — le message est dense et auto-suffisant.",
              axe4_coherence: "La racine z-w-d n'apparait que 4 fois dans le Coran, toutes en 2:197. Le Coran traite le theme des provisions une seule fois mais de maniere exhaustive : l'imperatif de se munir, le nom de la provision, le superlatif de la meilleure provision, et l'identification de cette meilleure provision comme etant la premunition.",
              axe5_frequence: "Pour la mission du khalifa, la provision est l'equipement de la mission. Le khalifa ne part pas les mains vides — il se prepare. Le verset enseigne que la preparation ultime est la premunition — la protection spirituelle est la meilleure provision pour la mission."
            }
          }
        }
      },
      // wqy pos=25 (nom defini "la premunition")
      {
        word_key: "wqy", position: 25, sense_chosen: "premunition",
        analysis_axes: {
          sense_chosen: "premunition",
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              senses: ["se prémunir", "se protéger", "prendre garde", "préserver", "craindre", "piété", "bouclier", "protection"],
              proof_ctx: "Le nom al-taqwa est un nom defini singulier de la racine w-q-y. D'apres les sources etymologiques, la racine porte les sens de : se premunir, se proteger, prendre garde, placer un bouclier entre soi et ce qu'on craint, preserver. La taqwa est l'acte de se premunir — placer une protection (wiqaya) entre soi et les consequences nefastes. L'article al- definit LA premunition — le concept meme de protection active. Le nom est l'attribut de la phrase nominale emphatique (inna khayra al-zadi al-taqwa = certes la meilleure provision EST la premunition). La premunition est identifiee a la meilleure provision — c'est une equation. La taqwa est un acte interieur et actif — ce n'est pas un etat passif de piete mais une protection deliberee et continue contre ce qui nuit.",
              axe1_verset: "Le mot al-taqwa est le point d'arrivee du verset — toute la progression mene a lui. Le champ lexical (interdictions, faire du bien, provisions) culmine dans la premunition comme la meilleure provision. Le verset construit un arc : les interdictions (se premunir de l'indecence, de la transgression, de la dispute) → le bien (Dieu le sait) → les provisions (prenez vos provisions) → la premunition (la meilleure provision). Chaque etape prepare la suivante, et la taqwa est la synthese de tout.",
              axe2_voisins: "Le verset 2:196 mentionnait la premunition envers Dieu (ittaqu Allaha). Le verset 2:197 identifie la taqwa comme la meilleure provision. Le verset 2:198 parlera du rappel de Dieu. La sequence montre que la taqwa est le fil rouge du bloc sur le pelerinage — elle commence en 2:196, culmine en 2:197, et se prolonge dans les versets suivants.",
              axe3_sourate: "La racine w-q-y est presente des le debut de la sourate al-Baqarah. En 2:2, « une guidance pour les muttaqin ». En 2:21, « peut-etre vous premunissez-vous ». En 2:177, la piete veritable. En 2:194, « premunissez-vous de Dieu ». En 2:197, la taqwa est la meilleure provision. La sourate construit la taqwa comme la qualite centrale du croyant — elle apparait a chaque tournant legislatif comme le moteur de l'obeissance.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. En 3:102, « premunissez-vous de Dieu de la premunition qui Lui est due ». En 5:2, « entraidez-vous dans le bien et la premunition ». En 65:2-3, « celui qui se premunit de Dieu, Il lui menage une issue ». Le Coran pose la taqwa comme la qualite la plus valorisee — elle est la condition de la guidance, de la delivrance, et de la meilleure provision. Le verset 2:197 s'inscrit pleinement dans cette theologie de la premunition.",
              axe5_frequence: "Pour la mission du khalifa, la premunition est l'equipement ultime de la mission. Le khalifa qui se premunit est celui qui est le mieux prepare — il a la provision la plus complete. La taqwa n'est pas une emotion de peur mais un acte rationnel de protection — le khalifa place un bouclier entre lui et tout ce qui peut corrompre sa mission. La premunition est la meilleure provision parce qu'elle protege contre toutes les formes de corruption."
            }
          }
        }
      },
      // wqy pos=26 (verbe imperatif Form VIII "premunissez-vous de Moi")
      {
        word_key: "wqy", position: 26, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              senses: ["se prémunir", "se protéger", "prendre garde", "préserver", "craindre", "piété", "bouclier", "protection"],
              proof_ctx: "Le verbe ittaquni est un imperatif 2MP de la forme VIII (iftaʿala) de la racine w-q-y avec le pronom suffixe 1S (ni = moi). D'apres les sources etymologiques, la racine porte les memes sens que pour al-taqwa ci-dessus — se premunir, se proteger, placer un bouclier. La forme VIII est reflexive intensive — l'accent est mis sur l'effort personnel de protection. Le pronom suffixe « ni » (moi) est remarquable : c'est Dieu qui parle a la premiere personne et qui ordonne de se premunir de Lui. L'ordre « premunissez-vous de Moi » signifie : placez une protection entre vous et les consequences que Je peux infliger. C'est un ordre rationnel et preventif — pas une menace emotionnelle mais un conseil de prudence. Le passage de al-taqwa (concept) a ittaquni (ordre) montre que la premunition n'est pas seulement une idee mais un commandement divin direct.",
              axe1_verset: "Le verbe ittaquni est le dernier ordre du verset avant le vocatif final. Le champ lexical (premunition, intelligence) montre que l'ordre de se premunir est adresse aux intelligents — ceux qui comprennent que la premunition est la meilleure provision. Le verset ferme la boucle : il commence par le pelerinage (cadre) et finit par la premunition (essence). L'ordre « premunissez-vous de Moi » est le commandement le plus direct du verset — Dieu parle a la premiere personne.",
              axe2_voisins: "Le verset 2:196 ordonnait « premunissez-vous de Dieu (ittaqu Allaha) » — a la troisieme personne. Le verset 2:197 ordonne « premunissez-vous de Moi (ittaquni) » — a la premiere personne. Le passage de la troisieme a la premiere personne cree un effet de proximite — Dieu ne parle plus de Lui-meme mais parle directement. Ce changement de personne grammaticale intensifie l'ordre.",
              axe3_sourate: "La racine w-q-y a l'imperatif apparait en 2:24, 2:48, 2:123, 2:196, 2:197, 2:203, 2:223, 2:231, 2:233, 2:278, 2:281. La sourate al-Baqarah est celle qui utilise le plus l'imperatif de w-q-y dans tout le Coran — elle repete l'ordre de se premunir a chaque section legislative. En 2:197, la premiere personne (ittaquni) est unique dans cette serie — c'est le seul moment ou Dieu dit « Moi » directement.",
              axe4_coherence: "La forme ittaquni (premunissez-vous de Moi) avec le pronom de la premiere personne est rare dans le Coran. En 2:41, « wa iyyaya fattaqun » (et de Moi premunissez-vous). En 16:2, « fattaquni » (premunissez-vous de Moi). Ces occurrences a la premiere personne marquent des moments d'intensite ou Dieu s'adresse directement aux croyants. Le verset 2:197 utilise cette forme pour conclure le bloc sur le pelerinage avec un maximum d'impact.",
              axe5_frequence: "Pour la mission du khalifa, l'ordre direct de Dieu est l'autorite ultime de la mission. Le khalifa recoit son mandat de Dieu — et Dieu lui-meme ordonne de se premunir. La premiere personne divine (Moi) rappelle que la mission vient directement de Dieu et que le khalifa est comptable devant Lui. Se premunir de Dieu est l'acte fondateur de la mission — c'est la protection qui rend tous les autres actes possibles."
            }
          }
        }
      },
      // awl pos=28
      {
        word_key: "awl", position: 28, sense_chosen: "ceux qui possedent",
        analysis_axes: {
          sense_chosen: "ceux qui possedent",
          concept_chosen: "Gouvernance",
          concepts: {
            "Gouvernance": {
              status: "retenu",
              senses: ["gouverner", "posséder l'autorité", "être doté de", "maître de", "premier", "ceux qui possèdent"],
              proof_ctx: "Le nom uli est un pluriel irregulier de la racine a-w-l signifiant « ceux qui possedent, ceux qui sont doues de, maitres de ». D'apres les sources etymologiques, la racine porte les sens de : etre premier, gouverner, posseder l'autorite, maitre de. Le pluriel uli est une forme figee utilisee exclusivement en construction d'annexion (idafa) pour designer « ceux qui possedent » une qualite. La construction « uli al-albab » signifie « ceux qui sont doues d'intelligence » — les possesseurs de la faculte de discernement. Le mot n'est pas un nom commun mais une construction grammaticale specifique qui designe une categorie de personnes qualifiees par ce qui suit.",
              axe1_verset: "Le mot uli fait partie du vocatif final qui ferme le verset. Le champ lexical (premunition, intelligence) montre que l'appel s'adresse a ceux qui sont capables de comprendre l'enseignement du verset. Le vocatif « ya uli al-albab » interpelle directement les doues d'intelligence — le verset ne s'adresse pas a tout le monde mais specifiquement a ceux qui ont la capacite de saisir que la meilleure provision est la premunition. La possession de l'intelligence qualifie le destinataire de l'ordre.",
              axe2_voisins: "Le verset 2:179 utilisait la meme expression « ya uli al-albab » pour conclure le passage sur le talion. Le verset 2:197 la reutilise pour conclure le passage sur le pelerinage. La repetition de cette adresse montre que les blocs legislatifs de la sourate sont adresses aux intelligents — ceux qui comprennent la sagesse derriere les lois. Le talion et le pelerinage requierent tous deux l'intelligence pour etre compris dans leur profondeur.",
              axe3_sourate: "La construction uli al-albab apparait en 2:179, 2:197, et 2:269 dans la sourate al-Baqarah. Chaque occurrence conclut un enseignement important : le talion (2:179), le pelerinage (2:197), la sagesse (2:269). La sourate reserve cette adresse aux moments cles — elle interpelle l'intelligence du lecteur quand le message est le plus profond.",
              axe4_coherence: "La construction uli al-albab apparait 16 fois dans le Coran. En 3:7, « seuls les doues d'intelligence se rappellent ». En 12:111, « il y a un enseignement pour les doues d'intelligence ». En 38:29, « pour que les doues d'intelligence reflechissent a ses versets ». Le Coran valorise l'intelligence comme la faculte qui permet de comprendre la revelation. Le verset 2:197 s'inscrit dans cette valorisation — l'ordre de se premunir est adresse aux intelligents.",
              axe5_frequence: "Pour la mission du khalifa, les doues d'intelligence sont les khalifas accomplis — ceux qui comprennent le sens profond de la mission. Le khalifa n'agit pas par imitation aveugle mais par comprehension. L'appel aux doues d'intelligence montre que la mission requiert le discernement — pas seulement l'obeissance mais la comprehension."
            },
            "Famille/Appartenance": {
              status: "probable",
              senses: ["famille", "gens de", "peuple de", "appartenance à un groupe"],
              proof_ctx: "Le sens de famille/appartenance est un autre sens de la racine a-w-l dans le Lane's — les ahl (famille, gens de). Mais la forme uli est specifiquement utilisee pour designer « ceux qui possedent une qualite », pas « la famille de ». La distinction philosophique est que la possession d'une qualite est une capacite individuelle (chaque personne a ou n'a pas l'intelligence), tandis que l'appartenance familiale est un lien collectif. La construction uli al-albab designe des individus qualifies par leur intelligence, pas un groupe familial. Le contexte du verset confirme : l'appel est a ceux qui comprennent, pas a un clan ou une famille.",
              axe1_verset: "Le sens de famille ne s'integre pas au champ lexical du verset. Le verset ne parle pas d'appartenances familiales mais de qualites individuelles (intelligence, premunition). L'appel « ya uli al-albab » ne designe pas « la famille de l'intelligence » mais « les possesseurs de l'intelligence » — c'est la qualite qui compte, pas le lien.",
              axe2_voisins: "Les versets voisins ne traitent pas de liens familiaux dans ce contexte. Le bloc sur le pelerinage s'adresse aux pelerins individuellement, pas aux familles ou aux clans.",
              axe3_sourate: "La sourate al-Baqarah utilise uli al-albab dans un sens individuel et qualitatif, pas familial. Les occurrences en 2:179, 2:197, 2:269 designent toutes des individus doues d'intelligence.",
              axe4_coherence: "Le Coran utilise uli al-albab 16 fois, toujours pour designer des individus doues de discernement. Aucune occurrence ne designe une famille ou un groupe ethnique. Le sens est systematiquement qualitatif.",
              axe5_frequence: "Le sens familial ne contribue pas a la mission du khalifa dans ce contexte. Le khalifa est appele par sa qualite (intelligence), pas par sa famille."
            }
          }
        }
      },
      // lbb pos=29
      {
        word_key: "lbb", position: 29, sense_chosen: "intelligence/noyau",
        analysis_axes: {
          sense_chosen: "intelligence/noyau",
          concept_chosen: "Intelligence/Essence",
          concepts: {
            "Intelligence/Essence": {
              status: "retenu",
              senses: ["moelle", "noyau", "essence", "intelligence pure", "discernement", "ce qui est au centre", "le meilleur d'une chose"],
              proof_ctx: "Le nom al-albab est un pluriel defini de la racine l-b-b. D'apres les sources etymologiques, la racine porte les sens de : moelle, noyau, essence d'une chose, intelligence pure, discernement, ce qui est au centre et au meilleur d'une chose, le coeur au sens de noyau (pas l'organe). Le lubb est la partie la plus interne et la plus precieuse d'une chose — le noyau du fruit, la moelle de l'os, l'essence d'un argument. L'extension est l'intelligence — la faculte qui est au noyau de l'etre humain, sa capacite la plus profonde de discernement. Le pluriel al-albab designe les intelligences — au pluriel parce que chaque personne a la sienne. L'article al- definit LES intelligences — les intelligences connues, celles qui distinguent les doues de discernement.",
              axe1_verset: "Le mot al-albab ferme le verset comme le mot final — le dernier mot adresse au lecteur. Le champ lexical (premunition, doues de, intelligence) montre que le verset se conclut par un appel a la reflexion. L'intelligence est la faculte qui permet de comprendre que la meilleure provision est la premunition — sans intelligence, cet enseignement reste lettre morte. Le mot final est strategique : il dit que tout ce qui precede (pelerinage, interdictions, bien, provisions, premunition) ne peut etre compris que par les intelligents.",
              axe2_voisins: "Le verset 2:179 se terminait par le meme vocatif « ya uli al-albab ». Le verset 2:197 se termine de la meme maniere. Les deux versets partagent cette conclusion — le talion sauve des vies (2:179) et la premunition est la meilleure provision (2:197), et dans les deux cas c'est aux intelligents de le comprendre. La repetition cree un parallele entre les deux enseignements.",
              axe3_sourate: "La racine l-b-b apparait dans la sourate al-Baqarah en 2:179, 2:197, et 2:269. Les trois occurrences sont dans la meme construction (uli al-albab) et concluent des passages importants. La sourate reserve l'appel a l'intelligence pour ses moments les plus profonds — quand l'enseignement depasse la regle et touche a la sagesse.",
              axe4_coherence: "La racine l-b-b apparait 16 fois dans le Coran, toujours sous la forme al-albab dans la construction uli al-albab. En 39:18, « ceux qui ecoutent la parole et suivent le meilleur — ceux-la sont les doues d'intelligence ». En 65:10, « premunissez-vous de Dieu, o doues d'intelligence ». Le verset 65:10 est presque identique a 2:197 — premunition + intelligence. Le Coran lie systematiquement la premunition a l'intelligence — se premunir est un acte intelligent, pas un acte de peur.",
              axe5_frequence: "Pour la mission du khalifa, l'intelligence est la faculte qui permet la mission. Le khalifa n'est pas un executant aveugle — il est un etre intelligent qui comprend le pourquoi de ses actes. L'appel aux doues d'intelligence est l'appel a la mission elle-meme — seuls ceux qui comprennent peuvent etre de vrais khalifas. L'intelligence transforme l'obeissance en comprehension et la premunition en sagesse."
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

  const verseIds = [204];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 197 ===\n');
  await processVerse(197);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V197 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
