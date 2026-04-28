const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 221
// verse_id=228, analysis_id=588
// "Et n'epousez pas les associantes jusqu'a ce qu'elles croient.
//  Certes, une esclave croyante vaut mieux qu'une associante,
//  meme si celle-ci vous plait. Et ne donnez pas les croyantes
//  en mariage aux associateurs jusqu'a ce qu'ils croient.
//  Certes, un esclave croyant vaut mieux qu'un associateur,
//  meme s'il vous plait. Ces gens-la invitent au Feu, tandis
//  qu'Allah invite au Paradis et au pardon, de Sa grace.
//  Et Il expose aux hommes Ses enseignements,
//  ainsi ils s'en souviendront peut-etre."
// Interdiction du mariage avec les polythéistes, hiérarchie
// foi/condition, appel versus appel divin, clarification
// =====================================================

const verseData = {
  221: {
    verse_id: 228,
    analysis_id: 588,
    translation_arab: "Ne mariez pas les femmes polythéistes jusqu'à ce qu'elles croient. Une esclave croyante est meilleure qu'une polythéiste, même si celle-ci vous émerveille. Et ne donnez pas les croyantes en mariage aux hommes polythéistes jusqu'à ce qu'ils croient. Un esclave croyant est meilleur qu'un polythéiste, même s'il vous émerveille. Ceux-là appellent vers le feu, tandis que Dieu appelle vers le jardin et le pardon, par Sa permission. Et Il clarifie Ses signes aux gens afin qu'ils se souviennent.",
    full_translation: "Et n'épousez pas les associantes jusqu'à ce qu'elles croient. Certes, une esclave croyante vaut mieux qu'une associante, même si celle-ci vous plaît. Et ne donnez pas les croyantes en mariage aux associateurs jusqu'à ce qu'ils croient. Certes, un esclave croyant vaut mieux qu'un associateur, même s'il vous plaît. Ces gens-là invitent au Feu, tandis qu'Allah invite au Paradis et au pardon, de Sa grâce. Et Il expose aux hommes Ses enseignements, ainsi ils s'en souviendront peut-être.",
    translation_explanation: `§DEMARCHE§
Le verset 221 est une legislation matrimoniale en deux parties symétriques : interdiction d'épouser les femmes polythéistes (adressée aux hommes croyants), et interdiction de donner les croyantes en mariage aux hommes polythéistes (adressée à la communauté croyante). Les deux interdictions sont levées par la même condition : la foi. La troisième partie explique la raison profonde de cette législation : les polythéistes appellent vers le feu, Dieu appelle vers le jardin. La quatrième partie est une conclusion sur la clarification divine.

Le verbe **tankihu** est un inaccompli 2MP de la racine n-k-h. Le Lane's donne : marier, unir par le mariage, avoir des rapports conjugaux. Le nikah est le contrat de mariage — c'est l'acte par lequel un homme et une femme s'unissent légalement. La négation « la tankihu » (ne mariez pas) est un interdit direct. L'objet du verbe est « al-mushrikati » — les femmes associantes. L'interdit porte sur l'acte du mariage lui-même, pas sur la fréquentation ou la connaissance. La condition qui lève l'interdit est « hatta yu'minna » (jusqu'à ce qu'elles croient) — la foi change le statut matrimonial.

Le mot **al-mushrikati** est un participe actif féminin pluriel défini de la racine sh-r-k. Le Lane's donne : associer, donner des associés à Dieu, polythéisme. La mushrika est celle qui associe — qui donne des partenaires à Dieu. La définition théologique est celle qui ne reconnaît pas l'unicité divine. Le terme désigne les femmes polythéistes, pas les femmes des autres monothéismes abrahamiques (dont le statut est traité ailleurs).

Le verbe **yu'minna** est un inaccompli 3FP de la racine a-m-n. Le Lane's donne dans le sens religieux : croire, avoir foi, adhérer. La foi (iman) est l'acte d'adhésion intérieure et extérieure à la vérité divine. C'est la condition qui lève l'interdit — le mariage devient possible dès que la foi est présente. L'inaccompli marque que la condition peut se réaliser à tout moment.

Le nom **wa-lamatu(n)** est un nom indéfini singulier de la racine a-m-w (ou a-m-y). Le Lane's donne : esclave femme. La ama est l'esclave féminine — une personne de condition servile. L'adjectif qui la qualifie est muʾminatun (croyante). Le verset établit un paradoxe social : la hiérarchie sociale (esclave < femme libre) est inversée par la hiérarchie de la foi (croyante > non-croyante). L'esclave croyante est meilleure que la femme libre polythéiste.

Le mot **muʾminatun** est un participe actif féminin indéfini de la racine a-m-n. La muʾmina est celle qui croit — la femme de foi. L'adjectif qualifie l'esclave et crée la comparaison de supériorité avec la mushrika.

Le mot **khayrun** est un nom indéfini de la racine kh-y-r. Le Lane's donne : bien, excellence, ce qui est préférable, meilleur. Dans une structure comparative « khayrun min » (meilleur que), le mot exprime la supériorité. Le bien ici est la supériorité de la foi sur la condition sociale et sur l'attrait extérieur.

Le verbe **aʿjabatkum** est un accompli 3FS avec suffixe 2MP de la racine '-j-b. Le Lane's donne : étonner, émerveiller, plaire, susciter l'admiration. L'ajab est l'étonnement qui naît de quelque chose de remarquable ou de beau. « Wa-law aʿjabatkum » (même si elle vous émerveille/plaît) introduit une concession — même dans le cas où l'attrait extérieur serait fort, la supériorité de la foi reste entière.

Le verbe **tunkihu** est un inaccompli 2MP de la racine n-k-h en Form IV. La Form IV (anka-ha) est causative : « faire épouser, donner en mariage ». La distinction avec la Form I est importante : tankihu (Form I) = vous épousez vous-mêmes ; tunkihu (Form IV) = vous faites épouser, vous donnez en mariage. La première partie (tankihu) s'adresse aux hommes qui veulent épouser des femmes polythéistes ; la seconde (tunkihu) s'adresse à la communauté qui donne ses femmes croyantes en mariage à des hommes polythéistes.

Le mot **al-mushrikina** est un participe actif masculin pluriel défini de la racine sh-r-k. C'est le pendant masculin de al-mushrikati — les hommes polythéistes auxquels il est interdit de donner les croyantes en mariage.

Le nom **wa-ʿabdu(n)** est un nom indéfini singulier de la racine '-b-d. Le Lane's donne : esclave (mâle), serviteur. Le abd est l'esclave masculin. Comme pour l'esclave féminine, le paradoxe social est maintenu : un esclave croyant est meilleur qu'un homme libre polythéiste.

Le pronom **ulaʾika** est un pronom démonstratif de l'éloignement. Il désigne les polythéistes mentionnés — « ceux-là » avec une nuance de distance et de distanciation. Ce pronom introduit l'explication de la raison des interdits.

Le verbe **yadʿuna** est un inaccompli 3MP de la racine d-'-w. Le Lane's donne : appeler, invoquer, inviter, convier. Le daʿwa est l'invitation, l'appel. « Yadʿuna ila al-nari » = ils appellent vers le feu. Le verbe est à l'inaccompli — ils appellent habituellement, continuellement vers le feu. L'invitation des polythéistes n'est pas nécessairement consciente ou délibérée — leur mode de vie et leurs valeurs conduisent vers le feu.

Le mot **an-nari** est un nom défini de la racine n-w-r. Le Lane's donne pour nar : feu, flamme. La nar désigne le feu, et dans le contexte coranique eschatologique, le feu de l'enfer. La racine n-w-r couvre à la fois la lumière (nur) et le feu (nar) — les deux réalités lumineuses et destructrices. Ici, la nar est le feu qui brûle, l'enfer, la destination finale des perdants.

Le verbe **yadʿu** est un inaccompli 3MS de la racine d-'-w. Contrairement aux polythéistes qui appellent vers le feu, Dieu appelle vers le jardin. Le verbe est le même pour les deux sujets — la différence est la destination de l'appel. La symétrie est parfaite : eux/Dieu, nar/janna, inaccompli habituel.

Le mot **al-jannati** est un nom défini de la racine j-n-n. Le Lane's donne : jardin, paradis, lieu couvert de végétation, abri. La janna est le paradis — le jardin plantureux qui est la récompense finale. La racine j-n-n désigne fondamentalement ce qui est caché, couvert, dissimulé — le jardin est caché derrière la végétation, le paradis est caché derrière le voile du monde présent.

Le nom **al-maghfirati** est un nom défini de la racine gh-f-r. Le Lane's donne : pardonner, couvrir (la faute), protéger. Le maghfira est le pardon — l'acte de couvrir la faute et de la protéger de la sanction. Dieu appelle vers le jardin ET vers le pardon — le paradis matériel et le pardon moral sont les deux dimensions de la destination divine.

Le nom **bi-ʾidnihī** est un nom défini avec suffixe 3MS de la racine a-dh-n. Le Lane's donne : permission, autorisation, écoute, oreille. Le idhn est la permission — ce que Dieu accorde comme autorisation. « Bi-ʾidnihī » = par Sa permission/grâce. L'appel de Dieu vers le jardin et le pardon se fait avec Sa permission — c'est Lui qui autorise et qui permet l'accès.

Le verbe **wa-yubayyinu** est un inaccompli 3MS de la racine b-y-n (Form II). Le Lane's donne : clarifier, rendre évident, expliquer, distinguer. La Form II (bayyama) est intensive/causative : rendre très clair, clarifier activement. Le tabyin est la clarification — rendre évident ce qui pourrait être obscur.

Le mot **ayatihi** est un nom pluriel défini avec suffixe 3MS de la racine a-y-a (ou a-y-t). Le Lane's donne : signe, preuve, miracle, verset. Les ayat sont les signes — à la fois les versets coraniques et les signes dans la création. « Ayatihi » = Ses signes/Ses versets. Ici, ce sont les signes/versets que Dieu clarifie.

L'expression **li-nnasi** est une préposition suivie du nom al-nas (les gens). Ce segment indique les destinataires de la clarification — c'est pour tous les gens que Dieu clarifie Ses signes.

L'expression **laʿallahum yatadhakkarun** est une proposition de but. « Laʿalla » exprime l'espoir ou la possibilité — « afin qu'ils se souviennent peut-être ». Le verbe yatadhakkarun est un inaccompli 3MP de la racine dh-k-r (Form V). La Form V (tadhakkara) est réflexive de la Form II : se rappeler, faire retour sur sa mémoire, se souvenir de manière active. La clarification des signes a pour but que les gens se souviennent — que la mémoire s'active.

§JUSTIFICATION§
**mariez/épousez** — Le sens retenu est « mariage/union ». Le verbe tankihu est de la racine n-k-h qui désigne spécifiquement le mariage légal. L'alternative « avoir des rapports » est écartée car le contexte législatif porte sur le contrat matrimonial, pas sur la relation physique seule.

**les femmes polythéistes** — Le sens retenu est « association/polythéisme ». Le mot al-mushrikati désigne les femmes qui associent d'autres divinités à Dieu. L'alternative « les femmes idolâtres » est moins précise — le shirk est l'association (donner des partenaires à Dieu) plutôt que l'idolâtrie stricto sensu.

**jusqu'à ce qu'elles croient** — Le sens retenu est « foi/adhésion ». Le verbe yu'minna est de la racine a-m-n dans son sens de foi religieuse. L'alternative « jusqu'à ce qu'elles fassent confiance » est écartée car le contexte est explicitement la foi en Dieu, pas la confiance interpersonnelle.

**une esclave croyante** — Le sens retenu est « servitude/esclavage ». La ama (esclave féminine) est de la racine a-m-w. L'alternative « servante » est écartée car le texte parle clairement d'une condition servile légale (abd/ama).

**est meilleure** — Le sens retenu est « bien/excellence ». Le mot khayrun dans la construction comparative « khayrun min » exprime la supériorité. L'alternative « plus bien » n'existe pas en français — « meilleure » rend correctement le comparatif.

**même si elle vous émerveille** — Le sens retenu est « étonnement/émerveillement ». Le verbe aʿjabatkum est de la racine '-j-b qui désigne l'émerveillement face à quelque chose de remarquable. L'alternative « même si elle vous plaît » (Hamidullah) est correcte mais moins précise — l'ajab est un étonnement admiratif, pas seulement un agrément.

**ne donnez pas en mariage** — Le sens retenu est « mariage/union » mais en Form IV. Le verbe tunkihu (Form IV de n-k-h) est causatif — faire épouser, donner en mariage. La distinction avec la Form I (épouser soi-même) est maintenue pour rendre le sens exact.

**un esclave croyant** — Le sens retenu est « servitude/esclavage ». L'abd (esclave mâle) est le pendant masculin de l'ama. Même raisonnement que pour l'esclave féminine.

**ils appellent vers le feu** — Le sens retenu est « appel/invocation ». Le verbe yadʿuna est de la racine d-'-w dans son sens d'appel. L'alternative « ils convient » est trop formel — l'appel (daʿwa) est un appel actif et continu.

**le feu** — Le sens retenu est « lumière/clarté — feu ». Le mot an-nar est de la racine n-w-r. La nar (feu) est distincte du nur (lumière) mais partage la même racine. Dans ce contexte eschatologique, le feu est la destination des perdants.

**le jardin** — Le sens retenu est « jardin/paradis ». Le mot al-janna est de la racine j-n-n dans son sens de jardin plantureux et caché. L'alternative « le paradis » est correcte mais moins littérale — le texte dit la janna (le jardin).

**le pardon** — Le sens retenu est « pardon/couverture ». Le mot al-maghfira est de la racine gh-f-r qui désigne le pardon comme acte de couvrir la faute. L'alternative « l'absolution » est trop chrétienne — le maghfira est plus précisément la couverture protectrice de la faute.

**par Sa permission** — Le sens retenu est « permission/autorisation ». Le mot idhnihī est de la racine a-dh-n dans son sens de permission. L'alternative « de Sa grâce » (Hamidullah) est trop libre — le idhn est spécifiquement la permission, l'autorisation accordée.

**Il clarifie** — Le sens retenu est « clarté/évidence ». Le verbe yubayyinu (Form II de b-y-n) désigne la clarification active. L'alternative « Il expose » (Hamidullah) est correcte mais « clarifier » rend mieux la Form II intensive.

**Ses signes** — Le sens retenu est « signe/preuve ». Le mot ayatihi désigne les signes/versets de Dieu. L'alternative « Ses enseignements » (Hamidullah) est trop libre — le texte dit ayat (signes/versets), pas enseignements.

**afin qu'ils se souviennent** — Le sens retenu est « mémoire/rappel ». Le verbe yatadhakkarun est de la racine dh-k-r (Form V réflexive) — se rappeler, activer sa mémoire. L'alternative « afin qu'ils réfléchissent » serait plutôt la racine f-k-r — ici c'est la mémoire et le rappel, pas la réflexion.

§CRITIQUE§
Hamidullah traduit « aʿjabatkum » par « vous plaît » — ce qui est fonctionnel mais insuffisant. La racine '-j-b désigne un étonnement admiratif, une forme d'émerveillement devant quelque chose de remarquable. Le texte dit que même si la femme polythéiste vous émerveille (attrait esthétique, social, ou personnel fort), la foi prime sur cet émerveillement. Le mot « plaît » aplatit cette nuance.

Hamidullah traduit « bi-ʾidnihī » par « de Sa grâce ». Le texte dit « bi-ʾidnihī » = par Sa permission/autorisation. Le idhn est la permission accordée — Dieu appelle vers le jardin et le pardon avec Sa permission, c'est-à-dire que l'accès au jardin et au pardon est conditionné à Son autorisation. La traduction « de Sa grâce » change le sens vers la générosité divine alors que le texte parle d'une autorisation.

Hamidullah traduit « ayatihi » par « Ses enseignements ». Le texte dit « ayatihi » = Ses signes/Ses versets. Les ayat sont les signes que Dieu donne — dans la création et dans la révélation. « Enseignements » est une interprétation qui va au-delà du texte — les signes ne sont pas tous des enseignements didactiques mais des manifestations de la réalité divine.`,
    segments: [
      { fr: "Ne mariez pas", pos: "verbe", phon: "wa-la tankihu", arabic: "وَلَا تَنكِحُوا", word_key: "nkh", is_particle: false, sense_retenu: "mariage/union", position: 0 },
      { fr: "les femmes polythéistes", pos: "nom", phon: "al-mushrikati", arabic: "ٱلْمُشْرِكَـٰتِ", word_key: "shrk", is_particle: false, sense_retenu: "association/polythéisme", position: 1 },
      { fr: "jusqu'à ce qu'elles croient", pos: "verbe", phon: "hatta yu'minna", arabic: "حَتَّىٰ يُؤْمِنَّ", word_key: "amn", is_particle: false, sense_retenu: "foi/adhésion", position: 2 },
      { fr: "une esclave croyante est meilleure qu'une polythéiste même si elle vous émerveille", pos: "nom", phon: "wa-lamatun mu'minatun khayrun min mushrikatin wa-law ajabatkum", arabic: "وَلَأَمَةٌ مُّؤْمِنَةٌ خَيْرٌ مِّن مُّشْرِكَةٍ وَلَوْ أَعْجَبَتْكُمْ", word_key: "ejb", is_particle: false, sense_retenu: "étonnement/émerveillement", position: 3 },
      { fr: "Et ne donnez pas les croyantes en mariage aux polythéistes jusqu'à ce qu'ils croient", pos: "verbe", phon: "wa-la tunkihu al-mushrikina hatta yu'minu", arabic: "وَلَا تُنكِحُوا۟ ٱلْمُشْرِكِينَ حَتَّىٰ يُؤْمِنُوا۟", word_key: "nkh", is_particle: false, sense_retenu: "mariage/union", position: 4 },
      { fr: "un esclave croyant est meilleur qu'un polythéiste même s'il vous émerveille", pos: "nom", phon: "wa-abdun mu'minun khayrun min mushrikin wa-law ajabakum", arabic: "وَلَعَبْدٌ مُّؤْمِنٌ خَيْرٌ مِّن مُّشْرِكٍ وَلَوْ أَعْجَبَكُمْ", word_key: "ebd", is_particle: false, sense_retenu: "servitude/esclavage", position: 5 },
      { fr: "Ceux-là appellent vers", pos: "verbe", phon: "ula'ika yad'una ila", arabic: "أُو۟لَـٰٓئِكَ يَدْعُونَ إِلَى", word_key: "dew", is_particle: false, sense_retenu: "appel/invocation", position: 6 },
      { fr: "le feu", pos: "nom", phon: "an-nari", arabic: "ٱلنَّارِ", word_key: "nwr", is_particle: false, sense_retenu: "feu/nar", position: 7 },
      { fr: "et Dieu appelle vers le jardin", pos: "nom", phon: "wa-Allahu yad'u ila al-jannati", arabic: "وَٱللَّهُ يَدْعُوٓا۟ إِلَى ٱلْجَنَّةِ", word_key: "jnn", is_particle: false, sense_retenu: "jardin/paradis", position: 8 },
      { fr: "et le pardon", pos: "nom", phon: "wa-al-maghfirati", arabic: "وَٱلْمَغْفِرَةِ", word_key: "ghfr", is_particle: false, sense_retenu: "pardon/couverture", position: 9 },
      { fr: "par Sa permission", pos: "nom", phon: "bi-idhnihi", arabic: "بِإِذْنِهِۦ", word_key: "adhn", is_particle: false, sense_retenu: "permission/autorisation", position: 10 },
      { fr: "Et Il clarifie Ses signes", pos: "verbe", phon: "wa-yubayyinu ayatihi", arabic: "وَيُبَيِّنُ ءَايَـٰتِهِۦ", word_key: "byn", is_particle: false, sense_retenu: "clarté/évidence", position: 11 },
      { fr: "aux gens", phon: "li-nnasi", arabic: "لِلنَّاسِ", is_particle: true, position: 12 },
      { fr: "afin qu'ils se souviennent", pos: "verbe", phon: "la'allahum yatadhakkaruna", arabic: "لَعَلَّهُمْ يَتَذَكَّرُونَ", word_key: "dhkr", is_particle: false, sense_retenu: "mémoire/rappel", position: 13 }
    ],
    vwa: [
      // nkh pos=0 — "Ne mariez pas"
      {
        word_key: "nkh",
        position: 0,
        sense_chosen: "mariage/union",
        analysis_axes: {
          sense_chosen: "mariage/union",
          concept_chosen: "Mariage/Union",
          concepts: {
            "Mariage/Union": {
              status: "retenu",
              senses: ["marier", "unir par le mariage", "contracter un mariage", "épouser"],
              proof_ctx: "Le verbe tankihu est un inaccompli 2MP de la racine n-k-h. Le Lane's donne : marier, s'unir par le contrat de mariage, contracter un nikah. Le nikah est l'acte juridique du mariage — le contrat qui unit légalement un homme et une femme. La négation la tankihu est un interdit direct portant sur cet acte juridique. L'objet est al-mushrikati (les femmes associantes) — l'interdit est précis : ne pas contracter le nikah avec les femmes polythéistes. La condition qui lève l'interdit est la foi.",
              axe1_verset: "Le verbe tankihu est le premier mot de l'interdit. Le champ lexical (mariage, polythéistes, croire, esclave, croyante, meilleure, émerveiller) montre que le mariage est la question centrale du verset. L'interdit porte sur l'acte juridique du mariage — le nikah est un contrat, et ce contrat est interdit avec les non-croyantes. La condition de la foi (hatta yu'minna) est le seul critère qui lève l'interdit. La Form I du verbe s'adresse aux hommes qui veulent épouser des femmes — ils sont acteurs directs du mariage.",
              axe2_voisins: "Le verset 220 traitait des orphelins et de la fraternité. Le verset 221 marque une transition vers la législation matrimoniale. Les versets suivants de la sourate al-Baqarah développeront d'autres aspects du mariage (divorce, délai légal). Le mariage est le contrat social fondamental — sa réglementation par la foi crée une cohésion de la communauté croyante.",
              axe3_sourate: "La racine n-k-h apparait dans la sourate al-Baqarah en 2:221, 230, 232, 236, 237. La sourate al-Baqarah contient la plus grande concentration de législation matrimoniale du Coran. Le verset 221 est le premier interdit explicite sur le mariage avec les polythéistes — il pose le principe de la cohésion matrimoniale de la communauté croyante.",
              axe4_coherence: "La racine n-k-h apparait environ 23 fois dans le Coran. Le nikah est le contrat de mariage légal — il crée des obligations légales réciproques. Le Coran réglemente le nikah avec précision : qui peut épouser qui, dans quelles conditions, avec quelles conséquences. L'interdit du nikah avec les polythéistes est une règle de cohésion communautaire — la famille est la cellule de base de la société, et le Coran veille à ce que cette cellule soit fondée sur des valeurs communes.",
              axe5_frequence: "Pour la mission du khalifa, la législation matrimoniale est un outil de cohésion sociale. Le khalifa veille à ce que les mariages forment des familles solides fondées sur des valeurs communes. L'interdit du mariage avec les polythéistes n'est pas une discrimination arbitraire — c'est la conséquence logique de l'impossibilité de construire une famille sur des valeurs radicalement opposées. Le critère est la foi, pas la race ou l'origine."
            }
          }
        }
      },
      // shrk pos=1 — "les femmes polythéistes"
      {
        word_key: "shrk",
        position: 1,
        sense_chosen: "association/polythéisme",
        analysis_axes: {
          sense_chosen: "association/polythéisme",
          concept_chosen: "Association/Polythéisme",
          concepts: {
            "Association/Polythéisme": {
              status: "retenu",
              senses: ["associer", "donner des partenaires à Dieu", "polythéisme", "idolâtrie", "associant"],
              proof_ctx: "Le mot al-mushrikati est un participe actif féminin pluriel défini de la racine sh-r-k. Le Lane's donne : associer quelque chose à autre chose, donner des partenaires ou des associés à Dieu, le polythéisme comme acte d'association. Le shirk est l'association — donner des égaux ou des partenaires à Dieu, ce qui nie Son unicité absolue. La mushrika est celle qui commet cet acte d'association. Le terme est précis : ce n'est pas simplement l'incrédule ou la non-musulmane, c'est spécifiquement celle qui associe d'autres divinités à Dieu.",
              axe1_verset: "Le mot al-mushrikati est l'objet de l'interdit matrimonial. Le champ lexical (mariage, croire, esclave, croyante, meilleure) montre que la mushrika est le pôle négatif de la comparaison — la femme croyante, même esclave, lui est supérieure. L'interdit matrimonial porte sur la caractéristique théologique (l'association) et non sur la caractéristique sociale ou ethnique. La mushrika peut être belle, riche, de bonne famille — le verset le reconnaît (même si elle vous émerveille) — mais sa pratique d'association reste l'obstacle insurmontable.",
              axe2_voisins: "Le verset 220 traitait de la fraternité et de l'intégration. Le verset 221 établit une limite à cette fraternité : le mariage avec ceux qui associent est interdit. La sourate al-Baqarah construit une société croyante qui s'ouvre aux orphelins et aux vulnérables (220) mais se protège de l'influence polythéiste dans la cellule familiale (221). Les deux verset ensemble montrent l'équilibre ouverture/protection.",
              axe3_sourate: "La racine sh-r-k est très fréquente dans la sourate al-Baqarah. En 2:96, les associants ne voudraient pas mourir. En 2:165, ceux qui associent des égaux à Dieu. En 2:221, l'interdit de marier les mushrikati et les mushrikina. La sourate traite le shirk comme la faute théologique fondamentale qui structure toute la législation sociale — les mariages, les alliances, les contrats sont tous affectés par la distinction croyant/associant.",
              axe4_coherence: "La racine sh-r-k apparait environ 168 fois dans le Coran. Le shirk est présenté comme l'unique faute que Dieu ne pardonne pas (4:48, 4:116). L'interdit du mariage avec les mushrikun est cohérent avec cette gravité — unir sa vie à quelqu'un qui commet la faute la plus grave crée une incompatibilité fondamentale de valeurs. Le Coran ne dit pas que les mushrikun sont mauvais comme personnes — il dit que leur théologie est incompatible avec la construction d'une famille croyante.",
              axe5_frequence: "Pour la mission du khalifa, distinguer les associants des croyants est une compétence théologique et sociale fondamentale. Le khalifa sait que l'association (shirk) n'est pas seulement une croyance abstraite — elle structure les valeurs, les priorités et les choix de vie d'une personne. Le mariage construit une famille, et la famille construit la société. Le khalifa veille à ce que la fondation de la famille soit saine."
            }
          }
        }
      },
      // amn pos=2 — "jusqu'à ce qu'elles croient"
      {
        word_key: "amn",
        position: 2,
        sense_chosen: "foi/adhésion",
        analysis_axes: {
          sense_chosen: "foi/adhésion",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croire", "avoir foi", "adhérer", "faire confiance", "s'engager"],
              proof_ctx: "Le verbe yu'minna est un inaccompli 3FP de la racine a-m-n dans son sens religieux. Le Lane's donne pour a-m-n : être en sécurité, faire confiance, croire, avoir foi. Dans le contexte coranique religieux, amana/yu'minu désigne l'acte d'adhésion à la vérité divine — la foi en Dieu, en Ses messagers et en Ses révélations. La condition yu'minna (jusqu'à ce qu'elles croient) est la condition unique qui lève l'interdit matrimonial. La foi est le critère décisif — elle transforme la mushrika en mu'mina et ouvre la voie au mariage.",
              axe1_verset: "Le verbe yu'minna est la condition suspendue de l'interdit. Le champ lexical (mariage, polythéistes, esclave croyante, meilleure) montre que la foi est le pivot du verset. Tout le verset tourne autour de la foi — son absence interdit le mariage, sa présence le permet et renverse même la hiérarchie sociale (l'esclave croyante vaut mieux que la femme libre polythéiste). La foi n'est pas une condition secondaire — c'est LE critère central.",
              axe2_voisins: "Les versets précédents de la sourate al-Baqarah traitaient de la foi et de l'incrédulité sous divers angles (versets 2-20, 211-219). Le verset 221 applique ce critère de foi à la législation matrimoniale. La foi n'est pas seulement une conviction intime — elle a des conséquences juridiques concrètes sur le droit au mariage. La foi structure le droit familial.",
              axe3_sourate: "La racine a-m-n est la racine la plus structurante de la sourate al-Baqarah. Le verset 2:221 applique la foi comme critère matrimonial. La sourate construit progressivement une communauté des croyants — ses membres intègrent, ses frontières sont définies par la foi. Le mariage est l'acte par lequel deux personnes fondent un foyer : que ce foyer soit croyant est une condition de la cohésion de la communauté.",
              axe4_coherence: "La racine a-m-n apparait environ 537 fois dans le Coran. La foi (iman) est le critère universel du Coran pour distinguer les statuts — croyant/incroyant, sauvé/perdu, apte au mariage/inapte. Le verset 221 est une application concrète de ce critère à une question juridique précise. La foi n'est pas abstraite — elle a des effets réels sur la vie concrète.",
              axe5_frequence: "Pour la mission du khalifa, la foi comme critère de distinction n'est pas de la discrimination — c'est la cohérence de construire une communauté sur des valeurs communes. Le khalifa qui applique ce critère ne rejette pas les non-croyants — il maintient la cohésion de la communauté croyante en protégeant la fondation familiale."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["sécurité", "confiance", "être en sûreté", "protection"],
              proof_ctx: "Le sens de sécurité et de confiance est le sens premier de la racine a-m-n dans le Lane's. L'aman est la sécurité, l'amana est la confiance/fidélité. Ces sens sont présents dans de nombreux versets coraniques. Mais dans le contexte de 2:221, le verbe yu'minna est clairement employé dans son sens religieux de foi — « jusqu'à ce qu'elles croient en Dieu ». Le contexte de l'interdit matrimonial fondé sur la distinction croyante/polythéiste confirme que c'est la foi religieuse qui est en jeu, pas la simple confiance interpersonnelle."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["garantir", "protéger", "assurer"],
              proof_ctx: "Le sens de garantie et de protection est un sens dérivé de la racine a-m-n. Mais dans le verset 221, yu'minna désigne clairement l'acte de foi religieuse — croire en Dieu. Ce sens de garantie/protection n'est pas activé dans ce contexte matrimonial."
            },
            "Sens isolé/Amen": {
              status: "nul",
              senses: ["amen", "qu'il en soit ainsi"],
              proof_ctx: "Le sens isolé d'amen est un usage spécifique de la racine a-m-n pour clore une prière. Ce sens n'est pas activé dans le contexte du verset 221 qui traite de la foi comme condition matrimoniale."
            }
          }
        }
      },
      // ejb pos=3 — comparaison esclave croyante vs polythéiste
      {
        word_key: "ejb",
        position: 3,
        sense_chosen: "étonnement/émerveillement",
        analysis_axes: {
          sense_chosen: "étonnement/émerveillement",
          concept_chosen: "Étonnement/Émerveillement",
          concepts: {
            "Étonnement/Émerveillement": {
              status: "retenu",
              senses: ["étonner", "émerveiller", "plaire", "susciter l'admiration", "impressionner"],
              proof_ctx: "Le verbe aʿjabatkum est un accompli 3FS avec suffixe 2MP de la racine '-j-b. Le Lane's donne : étonner quelqu'un, lui paraître merveilleux ou remarquable, lui plaire de manière admirative, susciter son étonnement ou son admiration. L'ajab est l'étonnement admiratif — la réaction psychologique face à quelque chose de remarquable ou de beau. La construction « wa-law aʿjabatkum » (même si elle vous émerveille) introduit une concession forte — le verset reconnaît que la polythéiste peut avoir des qualités qui suscitent l'émerveillement (beauté, richesse, rang social), mais cette émerveillement ne change pas la supériorité de la foi.",
              axe1_verset: "Le verbe aʿjabatkum est le pivot de la concession du verset. Le champ lexical (mariage, polythéistes, esclave, croyante, meilleure) montre que l'émerveillement est l'argument émotionnel que le verset anticipe et dépasse. Le verset ne dit pas que la polythéiste n'a pas de qualités — il dit que même si elle en a qui vous émerveillent, elles ne suffisent pas pour outrepasser l'interdit. L'émerveillement est réel mais secondaire face au critère de la foi.",
              axe2_voisins: "Le verset 220 parlait de la gestion rationnelle et fraternelle des orphelins. Le verset 221 introduit la dimension émotionnelle et affective du mariage — l'émerveillement/attrait est reconnu comme facteur humain. Le Coran ne nie pas les sentiments humains — il les met en perspective face aux critères théologiques et éthiques.",
              axe3_sourate: "La racine '-j-b apparait dans la sourate al-Baqarah en 2:221 (deux occurrences : aʿjabatkum pour la femme, aʿjabakum pour l'homme). La symétrie des deux occurrences montre que le verset s'adresse également aux hommes (attirés par une femme polythéiste) et à la communauté (attirée par un homme polythéiste pour ses femmes). L'émerveillement est une réalité humaine universelle, pas genrée.",
              axe4_coherence: "La racine '-j-b apparait environ 29 fois dans le Coran. Elle est souvent associée à l'orgueil et à la vanité (l'ujb = la vanité de celui qui s'admire lui-même). Mais dans le verset 221, l'ajab est l'émerveillement pour l'autre — l'attrait extérieur. Le Coran reconnaît cet attrait comme réel mais l'interdit de primer sur le critère de la foi.",
              axe5_frequence: "Pour la mission du khalifa, l'émerveillement est un signal d'alerte. Quand quelque chose ou quelqu'un nous émerveille, nous sommes tentés de lui accorder plus de valeur qu'il n'en mérite. Le khalifa apprend à mettre en perspective ses émotions et ses attraits — l'émerveillement n'est pas un critère de valeur absolue. La foi prime sur l'attrait."
            },
            "Vanité/Orgueil": {
              status: "nul",
              senses: ["vanité", "orgueil", "suffisance", "autosatisfaction"],
              proof_ctx: "Le sens de vanité et d'orgueil est un sens dérivé de la racine '-j-b — l'ujb est la vanité de quelqu'un qui s'admire lui-même. Mais dans le verset 221, le verbe aʿjabatkum est transitif et dirigé vers l'autre — c'est la mushrika qui émerveille les croyants, pas les croyants qui s'admirent eux-mêmes. Le sens de vanité/orgueil n'est pas activé ici."
            }
          }
        }
      },
      // nkh pos=4 — "ne donnez pas en mariage aux polythéistes"
      {
        word_key: "nkh",
        position: 4,
        sense_chosen: "mariage/union",
        analysis_axes: {
          sense_chosen: "mariage/union",
          concept_chosen: "Mariage/Union",
          concepts: {
            "Mariage/Union": {
              status: "retenu",
              senses: ["marier", "donner en mariage", "contracter un mariage", "unir"],
              proof_ctx: "Le verbe tunkihu est un inaccompli 2MP de la racine n-k-h en Form IV (ankaha). La Form IV est causative : faire contracter le nikah, donner en mariage. La distinction avec la Form I (tankihu = vous épousez) est significative — ici, la communauté croyante est l'agent qui donne ses femmes en mariage, pas la femme elle-même. L'interdit porte sur le fait de faire contracter un mariage à une croyante avec un polythéiste. La condition qui lève l'interdit est la même : la foi (hatta yu'minu — jusqu'à ce qu'ils croient).",
              axe1_verset: "Le verbe tunkihu (Form IV) est le symétrique de tankihu (Form I) dans la première partie du verset. Le champ lexical (polythéistes, croire, esclave croyant, meilleur, émerveiller) montre que la symétrie est complète — l'interdit porte sur les deux directions du mariage mixte. La Form IV montre que la communauté est responsable du mariage de ses femmes — la gardienneté matrimoniale est un acte communautaire.",
              axe2_voisins: "La première partie du verset (Form I, tankihu) s'adressait aux hommes croyants. La seconde partie (Form IV, tunkihu) s'adresse à la communauté dans son ensemble — les tuteurs matrimoniaux, la famille, la société. Les deux parties ensemble couvrent les deux directions possibles du mariage mixte avec les polythéistes.",
              axe3_sourate: "La Form IV d'ankaha apparait dans la sourate al-Baqarah en 2:221, 232. En 2:232, « fa-la ta'dluhu-nna an yankihna azwajahunna » — ne les empêchez pas de se marier avec leurs (ex-)maris. La sourate utilise la Form IV pour les situations où un tiers est agent du mariage — le tuteur, la famille, la communauté.",
              axe4_coherence: "La distinction Form I/Form IV de n-k-h est fondamentale en droit islamique. La Form I (nakaha) est l'acte personnel du mariage — l'homme épouse. La Form IV (ankara) est l'acte de donner en mariage — le tuteur fait contracter le mariage. Le verset 221 utilise les deux formes pour couvrir les deux situations : l'homme qui épouse (Form I) et la communauté qui donne ses femmes (Form IV).",
              axe5_frequence: "Pour la mission du khalifa, la responsabilité matrimoniale est collective. Le khalifa veille à ce que la communauté ne donne pas ses femmes croyantes en mariage à des hommes qui associent — non par protectionnisme mais par cohérence avec le principe que la famille doit être fondée sur des valeurs communes."
            }
          }
        }
      },
      // ebd pos=5 — "un esclave croyant est meilleur"
      {
        word_key: "ebd",
        position: 5,
        sense_chosen: "servitude/esclavage",
        analysis_axes: {
          sense_chosen: "servitude/esclavage",
          concept_chosen: "Servitude/Esclavage",
          concepts: {
            "Servitude/Esclavage": {
              status: "retenu",
              senses: ["esclave", "serviteur", "celui qui sert", "condition servile"],
              proof_ctx: "Le nom wa-ʿabdu(n) est un nom indéfini nominatif singulier de la racine '-b-d. Le Lane's donne : esclave, serviteur, adorateur, celui qui est dans un état de service ou de dévotion. Dans le contexte du verset, l'abd est l'esclave mâle — la personne de condition servile. Le verset établit le même paradoxe que pour la ama (esclave féminine) : l'esclave croyant (wa-ʿabdun muʾminun) est meilleur qu'un homme libre polythéiste. La hiérarchie sociale est inversée par la hiérarchie de la foi.",
              axe1_verset: "Le mot ʿabdun est le pivot du paradoxe social du segment. Le champ lexical (croyant, meilleur, polythéiste, émerveiller) montre que l'abd croyant est supérieur malgré sa condition inférieure. Le verset crée une tension entre la hiérarchie sociale (libre > esclave) et la hiérarchie de la foi (croyant > polythéiste). La tension se résout au profit de la foi — le critère de la foi prime sur le critère social.",
              axe2_voisins: "Le segment précédent (pos=3) établissait la supériorité de l'esclave féminine croyante. Le segment pos=5 est le pendant masculin — la symétrie est complète. Les deux esclave (féminin/masculin) croyants sont supérieurs aux deux polythéistes (féminin/masculin) libres. La symétrie montre que le principe s'applique également aux deux genres.",
              axe3_sourate: "La racine '-b-d apparait dans la sourate al-Baqarah en 2:23 (Nos serviteurs), 2:90, 2:186 (Mes serviteurs t'interrogent), 2:207, 2:221. Dans tous ces contextes, l'abd est tantôt l'esclave social tantôt le serviteur/adorateur de Dieu. Le verset 221 utilise l'abd dans son sens social (esclave) pour créer le paradoxe — mais la racine elle-même contient le sens de l'adoration/service à Dieu, ce qui crée un lien implicite avec la foi.",
              axe4_coherence: "La racine '-b-d apparait environ 275 fois dans le Coran. Le Coran n'abolit pas l'esclavage mais en réduit la portée et valorise la libération des esclaves. L'utilisation de l'esclave croyant comme exemple de supériorité sur le libre polythéiste est une remise en cause implicite de la hiérarchie sociale esclavagiste — la foi transcende la condition sociale.",
              axe5_frequence: "Pour la mission du khalifa, le critère de la foi transcende le critère social. Le khalifa ne juge pas les personnes par leur condition sociale mais par leur foi et leurs actes. L'exemple de l'esclave croyant supérieur au libre polythéiste enseigne que la valeur humaine n'est pas déterminée par la naissance ou le statut."
            },
            "Adoration/Dévotion": {
              status: "probable",
              senses: ["adorer", "se dévouer", "vouer un culte", "servir Dieu"],
              proof_ctx: "Le sens d'adoration et de dévotion est un sens central de la racine '-b-d dans le Lane's. Le 'ibada est le culte et l'adoration — l'abd de Dieu est celui qui L'adore. Dans le verset 221, le mot ʿabdun est utilisé dans son sens social d'esclave mâle, pas dans son sens religieux d'adorateur. Mais la racine porte les deux sens simultanément — un esclave croyant (ʿabdun muʾminun) est aussi un adorateur de Dieu. Les deux sens sont présents mais c'est le sens social qui est premier dans ce contexte légal."
            },
            "Sens isolé/Être": {
              status: "nul",
              senses: ["être", "exister"],
              proof_ctx: "Le sens isolé d'être ou d'exister n'est pas attesté dans le contexte du verset 221. La racine '-b-d ne porte pas ce sens dans les dictionnaires classiques."
            },
            "Sens isolé/Mépriser": {
              status: "nul",
              senses: ["mépriser", "dédaigner"],
              proof_ctx: "Le sens de mépris est un sens marginal de la racine '-b-d non pertinent ici."
            },
            "Sens isolé/Colérique": {
              status: "nul",
              senses: ["colère", "être irrité"],
              proof_ctx: "Le sens de colère est un sens marginal de la racine '-b-d non pertinent dans le contexte matrimonial du verset 221."
            }
          }
        }
      },
      // dew pos=6 — "Ceux-là appellent vers"
      {
        word_key: "dew",
        position: 6,
        sense_chosen: "appel/invocation",
        analysis_axes: {
          sense_chosen: "appel/invocation",
          concept_chosen: "Appel/Invocation",
          concepts: {
            "Appel/Invocation": {
              status: "retenu",
              senses: ["appeler", "inviter", "convier", "appel", "invitation", "daʿwa"],
              proof_ctx: "Le verbe yadʿuna est un inaccompli 3MP de la racine d-'-w. Le Lane's donne : appeler, inviter, convier, invoquer, prier. Le daʿwa est l'appel — l'acte par lequel on convie quelqu'un vers quelque chose. L'inaccompli yadʿuna marque l'habitude — ils appellent continuellement, c'est leur mode d'être. L'appel des polythéistes vers le feu n'est pas nécessairement conscient ou délibéré — leur mode de vie, leurs valeurs et leur théologie (association) conduisent vers le feu et y convient ceux qui les suivent ou s'unissent à eux.",
              axe1_verset: "Le verbe yadʿuna est l'explication de l'interdit matrimonial. Le champ lexical (feu, Dieu, jardin, pardon) montre que l'appel est la dimension spirituelle et eschatologique du mariage. Le verset explique pourquoi le mariage avec les polythéistes est interdit : ce ne sont pas de mauvaises personnes en soi, mais leur appel va vers le feu. Le mariage crée une alliance et une influence — s'unir à ceux qui appellent vers le feu risque de conduire vers le feu.",
              axe2_voisins: "Le verset 220 parlait de la fraternité comme intégration. Le verset 221 introduit la limite de cette intégration : l'alliance matrimoniale avec ceux qui appellent vers le feu est interdite. La fraternité peut coexister avec des non-croyants, mais le mariage crée une dépendance et une influence plus profondes.",
              axe3_sourate: "La racine d-'-w est présente dans la sourate al-Baqarah en 2:23 (apportez une sourate), 2:186 (J'exauce l'appel de celui qui M'appelle), 2:221. En 2:186, l'appel est l'invocation de Dieu — la prière. En 2:221, l'appel est l'invitation vers le feu. La sourate oppose l'appel divin (vers la lumière et le jardin) à l'appel humain-polythéiste (vers le feu) — deux directions opposées.",
              axe4_coherence: "La racine d-'-w apparait environ 212 fois dans le Coran. Le daʿwa désigne à la fois l'appel prophétique (inviter à l'islam), l'invocation personnelle (prier Dieu) et l'invitation sociale (convier). En 2:221, l'appel est social et spirituel — le polythéiste invite vers le feu par son mode de vie et ses valeurs. La symétrie avec l'appel divin vers le jardin (Allah yadʿu ila al-jannati) crée une antithèse parfaite.",
              axe5_frequence: "Pour la mission du khalifa, l'appel est la dimension missionnaire de la gouvernance. Le khalifa est lui-même un appelant (daʿi) — il appelle vers la justice et le bien. Il doit distinguer les appels qui mènent vers le bien (jardin/pardon) de ceux qui mènent vers le feu. La direction de l'appel est le critère de jugement."
            },
            "Prétention/Revendication": {
              status: "nul",
              senses: ["prétendre", "revendiquer", "se prétendre"],
              proof_ctx: "Le sens de prétention et de revendication est un sens attesté de d-'-w (iddi'a = se prétendre). Mais dans le verset 221, yadʿuna ila al-nari est clairement un appel directionnel — ils appellent VERS le feu. Le sens de prétention n'est pas activé."
            },
            "Sens isolé/Maudire": {
              status: "nul",
              senses: ["maudire", "invoquer du mal"],
              proof_ctx: "Le sens de malédiction est un sens marginal de d-'-w — da'a 'alayhi = maudire quelqu'un. Ce sens n'est pas activé dans le verset 221."
            }
          }
        }
      },
      // nwr pos=7 — "le feu"
      {
        word_key: "nwr",
        position: 7,
        sense_chosen: "feu/nar",
        analysis_axes: {
          sense_chosen: "feu/nar",
          concept_chosen: "Lumière/Clarté",
          concepts: {
            "Lumière/Clarté": {
              status: "probable",
              senses: ["lumière", "clarté", "illumination", "nur"],
              proof_ctx: "La racine n-w-r couvre à la fois le nur (lumière) et la nar (feu). Le Lane's donne pour n-w-r : la lumière, la clarté, et aussi le feu, la flamme. Les deux mots partagent la même racine parce que le feu est la source primaire de lumière dans le monde arabe ancien. Dans le verset 221, le mot an-nar est le feu/l'enfer — pas la lumière. Mais la racine porte les deux sens. Le sens de lumière/clarté est le sens premier dans de nombreux contextes coraniques mais ici c'est clairement la nar (feu) qui est utilisée."
            },
            "Sens isolé/Fleur": {
              status: "nul",
              senses: ["fleur", "floraison"],
              proof_ctx: "Le sens de fleur (nawr = fleur en arabe classique) est un sens rare et botanique de la racine n-w-r. Ce sens n'est pas activé dans le contexte eschatologique du verset 221."
            },
            "Sens isolé/Fuir": {
              status: "nul",
              senses: ["fuir", "s'enfuir"],
              proof_ctx: "Le sens de fuir n'est pas directement lié à la racine n-w-r dans les dictionnaires classiques. Ce sens n'est pas activé dans ce contexte."
            },
            "Feu/Nar": {
              status: "retenu",
              senses: ["feu", "flamme", "enfer", "nar"],
              proof_ctx: "Le nom an-nari est un nom défini génitif de la racine n-w-r dans sa forme nar (feu). Le Lane's donne pour nar : feu, flamme, incendie. Dans le contexte coranique eschatologique, al-nar est le feu de l'enfer — la destination des perdants. La construction « yadʿuna ila al-nari » (ils appellent vers le feu) est une métaphore eschatologique — le mode de vie et les valeurs des polythéistes mènent vers le feu de l'enfer et y invitent ceux qui les suivent. La nar s'oppose à la janna (jardin/paradis) dans la grande antithèse du verset.",
              axe1_verset: "Le mot an-nari est le pôle négatif de l'antithèse verset. Le champ lexical (appeler, Dieu, jardin, pardon) montre que le feu est la destination opposée au jardin. L'appel vers le feu versus l'appel de Dieu vers le jardin crée la grande antithèse théologique qui justifie l'interdit matrimonial. S'unir à des gens qui appellent vers le feu risque de vous y conduire.",
              axe2_voisins: "Le verset 219 parlait des méfaits du vin et du jeu de hasard (ithm, péché grave). Le verset 221 parle du feu de l'enfer comme destination des polythéistes. Les deux versets construisent un tableau des dangers — les péchés mènent vers le feu que les polythéistes appellent.",
              axe3_sourate: "La nar (feu) apparait dans la sourate al-Baqarah en 2:24 (le feu dont les combustibles sont les hommes et les pierres), 2:39, 2:80, 2:81, 2:119, 2:167, 2:175, 2:201, 2:221, 2:257, 2:275. La sourate construit une eschatologie détaillée — le feu est la destination des incroyants, des hypocrites et des injustes.",
              axe4_coherence: "La racine n-w-r apparait environ 194 times dans le Coran, principalement pour la lumière (nur). La nar apparait environ 145 fois dans le Coran. La tension nur/nar — lumière/feu — est une tension fondamentale : la lumière divine conduit vers le jardin, le feu de l'enfer est la destination de ceux qui s'en écartent. En 2:257, la juxtaposition est explicite : Dieu fait sortir les croyants des ténèbres vers la lumière, et les taghut font entrer les incroyants de la lumière dans les ténèbres (et vers le feu).",
              axe5_frequence: "Pour la mission du khalifa, le feu est le symbole de la destruction sociale et spirituelle. Le khalifa qui comprend que certains appels mènent vers le feu — vers la désintégration de la communauté, la corruption, la destruction — est en mesure de distinguer les voies qui sauvent de celles qui perdent."
            }
          }
        }
      },
      // jnn pos=8 — "Dieu appelle vers le jardin"
      {
        word_key: "jnn",
        position: 8,
        sense_chosen: "jardin/paradis",
        analysis_axes: {
          sense_chosen: "jardin/paradis",
          concept_chosen: "Jardin/Paradis",
          concepts: {
            "Jardin/Paradis": {
              status: "retenu",
              senses: ["jardin", "paradis", "lieu caché de végétation", "janna"],
              proof_ctx: "Le mot al-jannati est un nom défini génitif de la racine j-n-n. Le Lane's donne pour janna : jardin, lieu planté de végétation, abri couvert. La janna est le jardin — par extension, dans le Coran, le paradis est le grand jardin de la récompense finale. La racine j-n-n désigne fondamentalement ce qui est caché, couvert, abrité — la janna est le jardin caché derrière la végétation. Le paradis est la janna suprême — le lieu de la récompense finale, caché derrière le voile du monde présent.",
              axe1_verset: "Le mot al-jannati est le pôle positif de la grande antithèse du verset. Le champ lexical (Dieu appelle, pardon, permission) montre que la janna est la destination de l'appel divin. L'antithèse est complète : polythéistes → feu / Dieu → jardin + pardon. Dieu n'appelle pas seulement vers le jardin matériel mais aussi vers le pardon (maghfira) — les deux dimensions de la récompense divine.",
              axe2_voisins: "Le verset 219 parlait de la réflexion sur l'ici-bas et l'au-delà. Le verset 221 introduit le jardin et le feu comme les deux destinations finales. La janna et la nar sont les deux pôles de l'eschatologie coranique — la destinée finale qui donne son sens à toute la vie présente.",
              axe3_sourate: "La janna (jardin/paradis) apparait dans la sourate al-Baqarah en 2:25 (description du jardin des croyants), 2:35 (le jardin d'Adam et Eve), 2:82, 2:111, 2:217, 2:221. La sourate construit progressivement l'image du jardin — de la chute initiale du jardin (2:35) à la promesse du jardin pour les croyants (2:82) en passant par l'appel de Dieu vers le jardin (2:221). L'arc narratif de la sourate sur la janna est complet.",
              axe4_coherence: "La racine j-n-n apparait environ 147 fois dans le Coran. La janna est le mot le plus fréquent pour désigner le paradis dans le Coran. Sa description est récurrente : jardins sous lesquels coulent des rivières, demeure éternelle, lieu de paix et de pureté. L'appel de Dieu vers la janna en 2:221 est la synthèse de toute cette promesse — Dieu invite à la demeure finale de la récompense.",
              axe5_frequence: "Pour la mission du khalifa, la janna est l'horizon ultime de la mission. Le khalifa travaille dans l'ici-bas avec la janna comme finalité — ses actes de justice et de construction sociale sont orientés vers la récompense finale. L'appel vers la janna est la dimension eschatologique de la mission du khalifa."
            },
            "Dissimulation/Couverture": {
              status: "probable",
              senses: ["cacher", "couvrir", "dissimuler", "voiler"],
              proof_ctx: "Le sens de dissimulation et de couverture est le sens premier de la racine j-n-n dans le Lane's. Janna signifie couvrir, cacher, dissimuler. La janna (jardin) et la janna (folie) et les jinn (êtres cachés) partagent tous le sens de ce qui est caché. Dans le verset 221, le mot al-jannati désigne clairement le jardin/paradis. Mais le sens de dissimulation est présent en arrière-plan — le paradis est le lieu caché derrière le voile du monde présent."
            },
            "Êtres cachés": {
              status: "nul",
              senses: ["jinn", "esprits", "êtres invisibles"],
              proof_ctx: "Le sens d'êtres cachés (jinn) est un sens de la racine j-n-n. Mais dans le verset 221, le mot al-jannati est clairement le jardin/paradis, pas les jinn."
            },
            "Dissimulation/Couverture": {
              status: "nul",
              senses: ["folie", "délire"],
              proof_ctx: "Le sens de folie (junun) est un sens de la racine j-n-n. Ce sens n'est pas activé dans le contexte du verset 221."
            }
          }
        }
      },
      // ghfr pos=9 — "et le pardon"
      {
        word_key: "ghfr",
        position: 9,
        sense_chosen: "pardon/couverture",
        analysis_axes: {
          sense_chosen: "pardon/couverture",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["pardonner", "couvrir la faute", "protéger de la sanction", "maghfira"],
              proof_ctx: "Le nom al-maghfirati est un nom défini génitif de la racine gh-f-r. Le Lane's donne : couvrir, protéger, pardonner. La ghufran/maghfira est le pardon — l'acte de couvrir la faute et de la protéger de la sanction qui lui serait due. La racine gh-f-r contient l'idée de couverture protectrice — comme un casque (mighfar) qui protège la tête, le pardon couvre la faute et protège le coupable. Dieu appelle vers la janna ET vers le pardon — les deux dimensions de la récompense divine : la destination positive (jardin) et l'effacement du négatif (pardon).",
              axe1_verset: "Le mot al-maghfirati est le second terme de la destination divine — Dieu appelle vers le jardin et vers le pardon. Le champ lexical (Dieu, appel, jardin, permission) montre que le pardon complète le jardin dans la promesse divine. Le jardin est la récompense positive ; le pardon est l'effacement du négatif. Ensemble, ils constituent la totalité de la destination divine.",
              axe2_voisins: "Le verset 218 mentionnait ceux qui espèrent la miséricorde divine (yarjuna rahmata Allah). Le verset 221 explicite le contenu de cet espoir : le jardin et le pardon. La miséricorde divine prend la forme concrète du pardon des fautes et de l'entrée dans le jardin.",
              axe3_sourate: "La racine gh-f-r est très fréquente dans la sourate al-Baqarah. En 2:52 (le pardon après l'adoration du veau), 2:54, 2:58, 2:109, 2:173, 2:182, 2:192, 2:199, 2:218, 2:221, 2:225, 2:226, 2:235, 2:263, 2:268, 2:269, 2:283, 2:284, 2:286. La maghfira est l'un des attributs divins les plus mentionnés de la sourate — Dieu est constamment présenté comme Pardonneur.",
              axe4_coherence: "La racine gh-f-r apparait environ 234 fois dans le Coran. Al-Ghafur et Al-Ghaffar sont deux noms de Dieu — le Très-Pardonneur et le Grand Pardonneur. Le pardon divin est une réalité centrale de la théologie coranique — Dieu couvre les fautes de ceux qui se repentent et s'engagent dans la foi. Le verset 221 présente le pardon comme la destination de l'appel divin — Dieu invite activement vers le pardon.",
              axe5_frequence: "Pour la mission du khalifa, le pardon est un modèle de gouvernance. Le khalifa qui pardonne — qui couvre les fautes de ceux qui se repentent — imite le modèle divin. Le pardon n'est pas faiblesse mais sagesse — il permet la réconciliation et la reconstruction. La maghfira divine est le modèle de la clémence humaine dans la gouvernance."
            },
            "Protection": {
              status: "probable",
              senses: ["protéger", "couvrir", "abriter", "mighfar (casque)"],
              proof_ctx: "Le sens de protection est le sens étymologique de gh-f-r dans le Lane's — le mighfar est le casque qui protège la tête. Le pardon est une forme de protection — il couvre la faute et protège le coupable de la sanction. Dans le verset 221, al-maghfirati est clairement le pardon (remise de faute), pas la protection au sens physique. Mais le sens de protection est présent en arrière-plan — le pardon protège celui qui en bénéficie."
            }
          }
        }
      },
      // adhn pos=10 — "par Sa permission"
      {
        word_key: "adhn",
        position: 10,
        sense_chosen: "permission/autorisation",
        analysis_axes: {
          sense_chosen: "permission/autorisation",
          concept_chosen: "Permission/Autorisation",
          concepts: {
            "Permission/Autorisation": {
              status: "retenu",
              senses: ["permission", "autorisation", "agrément", "consentement"],
              proof_ctx: "Le nom bi-ʾidnihī est un nom défini avec suffixe 3MS précédé de la préposition bi. Le Lane's donne pour idhn : permission, autorisation, consentement, licence. Le idhn est l'acte par lequel une autorité accorde la permission de faire quelque chose. « Bi-ʾidnihī » = par Sa permission/avec Son autorisation. Dans le verset 221, la permission divine est ce qui conditionne l'appel de Dieu vers le jardin et le pardon — l'accès à ces récompenses se fait avec la permission de Dieu, pas automatiquement.",
              axe1_verset: "Le mot bi-ʾidnihī est la condition et le mode de l'appel divin. Le champ lexical (Dieu, appel, jardin, pardon) montre que la permission divine structure l'accès aux récompenses. Dieu appelle vers le jardin et le pardon — mais cet appel se réalise par Sa permission. Ce n'est pas un appel automatique et universel — il est conditionné et géré par la permission divine.",
              axe2_voisins: "Le verset 219 parlait de la réflexion sur les questions (alcool, jeu de hasard). Le verset 221 structure la réalité eschatologique selon la permission divine — même le paradis est accessible seulement bi-ʾidnihi (par Sa permission). La permission divine est le principe de toute grâce.",
              axe3_sourate: "La racine a-dh-n apparait dans la sourate al-Baqarah en 2:102 (par la permission de Dieu pour la magie), 2:213 (par Sa permission Il guide), 2:221 (par Sa permission Il appelle vers le jardin). La sourate utilise bi-ʾidnihī pour tout ce que Dieu accorde — guidance, récompense, succès. La permission divine est le cadre de toute action divine efficace.",
              axe4_coherence: "La racine a-dh-n apparait environ 39 fois dans le Coran. Le idhn divin conditionne de nombreuses actions dans le Coran — les anges n'agissent que bi-ʾidhni-hi, les croyants ne peuvent rien sans bi-ʾidhnihī. Cette omniprésence de la permission divine montre que rien ne se réalise hors de l'autorisation de Dieu — même les récompenses sont des grâces accordées, pas des droits automatiques.",
              axe5_frequence: "Pour la mission du khalifa, la permission (idhn) enseigne l'humilité. Le khalifa sait que ses succès sont bi-ʾidhni Allah — avec la permission de Dieu. Rien ne réussit sans cette permission. L'humilité du khalifa découle de cette reconnaissance : il n'est que l'instrument d'une permission qui le dépasse."
            },
            "Écoute/Oreille": {
              status: "nul",
              senses: ["oreille", "écoute", "audition"],
              proof_ctx: "Le sens d'oreille et d'écoute (udhun = oreille) est un sens de la racine a-dh-n. Mais dans le verset 221, bi-ʾidnihī est clairement la permission — l'acte d'autorisation. Le sens d'oreille n'est pas activé."
            },
            "Annonce/Avertissement": {
              status: "nul",
              senses: ["annoncer", "avertir", "adhan (appel à la prière)"],
              proof_ctx: "Le sens d'annonce (adhan) est un sens de la racine a-dh-n. Mais dans le verset 221, bi-ʾidnihī désigne la permission divine, pas une annonce ou un avertissement."
            }
          }
        }
      },
      // byn pos=11 — "Il clarifie Ses signes"
      {
        word_key: "byn",
        position: 11,
        sense_chosen: "clarté/évidence",
        analysis_axes: {
          sense_chosen: "clarté/évidence",
          concept_chosen: "Clarté/Évidence",
          concepts: {
            "Clarté/Évidence": {
              status: "retenu",
              senses: ["clarifier", "rendre évident", "expliquer", "distinguer", "tabyin"],
              proof_ctx: "Le verbe wa-yubayyinu est un inaccompli 3MS de la racine b-y-n en Form II (bayyama). Le Lane's donne pour la Form II : rendre très clair, clarifier activement, expliquer de manière approfondie, rendre évident. La Form II est intensive/causative — elle amplifie le sens de la Form I (bana = être clair, apparaître). La Form II yubayyinu = Il clarifies activement, Il rend évident de manière délibérée. L'objet est ayatihi (Ses signes) et la destination est li-nnasi (pour les gens). Dieu clarifie activement Ses signes pour les gens.",
              axe1_verset: "Le verbe yubayyinu est la conclusion du verset — après la législation matrimoniale et l'antithèse eschatologique, Dieu clarifie Ses signes. Le champ lexical (signes, gens, se souvenir) montre que la clarification a pour but la mémoire et la conscience. La Form II intensive montre que la clarification n'est pas passive — Dieu s'y engage activement. La finalité est la mémoire (yatadhakkarun) — la clarification active la mémoire.",
              axe2_voisins: "Le verset 219 concluait déjà sur la clarification (yubayyinu Allah lakum al-ayati). Le verset 221 reprend la même formule de conclusion. La répétition de cette formule montre que la clarification divine est un processus continu — Dieu clarifie verset après verset, législation après législation.",
              axe3_sourate: "La racine b-y-n est très fréquente dans la sourate al-Baqarah, particulièrement dans les formules de conclusion des passages législatifs. En 2:187, 2:219, 2:221, 2:230, 2:231, 2:242, 2:266, la formule « yubayyinu Allah lakum ayatihi » (Dieu vous clarifie Ses signes) est utilisée comme cloture des sections. La sourate construit une pédagogie de la clarification — Dieu explique, enseigne, rend évident.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. La bayyina (preuve claire, évidence) est l'un des mots les plus récurrents. Le Coran se présente comme un bayyan (clarification) pour les gens (2:187). La Form II yubayyinu est la marque de l'acte pédagogique divin — Dieu ne se contente pas d'exister ou de commander, Il clarifie et explique.",
              axe5_frequence: "Pour la mission du khalifa, la clarification (tabyin) est une obligation pédagogique. Le khalifa qui dirige doit clarifier — expliquer les lois, justifier les décisions, rendre évident ce qui est obscur. La pédagogie n'est pas un luxe mais une responsabilité de gouvernance. En imitant l'acte divin de clarification, le khalifa construit la compréhension collective."
            },
            "Séparation/Distance": {
              status: "probable",
              senses: ["séparer", "distinguer", "mettre à distance", "différencier"],
              proof_ctx: "Le sens de séparation et de distance est le sens étymologique de la racine b-y-n dans le Lane's — bayna signifie entre, la distance entre deux choses. Le tabyin est à la fois la clarification et la distinction — rendre clair c'est aussi distinguer et séparer. Dans le verset 221, yubayyinu désigne la clarification active. Mais la notion de distinction est présente — clarifier les signes c'est aussi distinguer le vrai du faux, le croyant du polythéiste."
            }
          }
        }
      },
      // dhkr pos=13 — "afin qu'ils se souviennent"
      {
        word_key: "dhkr",
        position: 13,
        sense_chosen: "mémoire/rappel",
        analysis_axes: {
          sense_chosen: "mémoire/rappel",
          concept_chosen: "Mémoire/Rappel",
          concepts: {
            "Mémoire/Rappel": {
              status: "retenu",
              senses: ["se souvenir", "rappel", "mémoire active", "tadhakkur"],
              proof_ctx: "Le verbe yatadhakkarun est un inaccompli 3MP de la racine dh-k-r en Form V (tadhakkara). Le Lane's donne pour la Form V : se rappeler, faire retour sur sa mémoire, se souvenir de manière réflexive et active. La Form V est la forme réflexive de la Form II (dhakkara = rappeler à quelqu'un) — se rappeler soi-même, activer sa propre mémoire. La construction « laʿallahum yatadhakkarun » = afin qu'ils se souviennent peut-être. Le « laʿalla » exprime l'espoir et la possibilité — la clarification divine ne garantit pas automatiquement la mémoire, mais elle la rend possible.",
              axe1_verset: "Le verbe yatadhakkarun est le but final du verset. Le champ lexical (clarifier, signes, gens) montre que la mémoire est la finalité de la clarification. Dieu clarifie Ses signes pour que les gens se souviennent — se rappellent de la vérité, des interdits, des promesses. La Form V réflexive montre que la mémoire ne peut pas être imposée — c'est un acte autonome que chaque personne doit accomplir elle-même. La clarification divine crée les conditions ; la mémoire est la réponse humaine.",
              axe2_voisins: "Le verset 219 concluait sur « laʿallakum tatafakkarun » (afin que vous réfléchissiez peut-être). Le verset 221 conclut sur « laʿallahum yatadhakkarun » (afin qu'ils se souviennent peut-être). Les deux formules de conclusion utilisent le même « laʿalla » d'espoir — Dieu espère que la réflexion et la mémoire suivront la clarification. Les deux verbes (tatafakkarun = réfléchir ; yatadhakkarun = se souvenir) sont complémentaires : réfléchir active la pensée nouvelle, se souvenir rappelle ce qui était su.",
              axe3_sourate: "La racine dh-k-r est très fréquente dans la sourate al-Baqarah. En 2:40 (rappelez-vous Mon bienfait), 2:152 (rappelez-vous Moi), 2:200 (invoquez Dieu intensément), 2:221 (afin qu'ils se souviennent). La sourate construit le dhikr comme une obligation permanente — la mémoire de Dieu et de Ses signes est un devoir continu. Le verset 221 place le dhikr comme finalité de toute la révélation.",
              axe4_coherence: "La racine dh-k-r apparait environ 292 fois dans le Coran. La Form V yatadhakkaru est moins fréquente que la Form I ou II — elle insiste sur la dimension réflexive et personnelle du rappel. Se rappeler (Form V) est plus profond que rappeler à quelqu'un (Form II) — c'est l'acte par lequel on intériorise, on fait sienne la vérité reçue. Le Coran utilise la Form V pour les moments où le rappel doit mener à une transformation personnelle.",
              axe5_frequence: "Pour la mission du khalifa, la mémoire est un outil de gouvernance. Le khalifa qui se souvient des enseignements divins, des précédents historiques, des leçons passées est mieux équipé pour gouverner. La Form V du dhikr — se rappeler de manière réflexive — est l'acte d'apprentissage profond : non pas mémoriser mécaniquement mais intégrer et transformer sa conscience."
            },
            "Masculin": {
              status: "nul",
              senses: ["masculin", "genre masculin", "virilité"],
              proof_ctx: "Le sens de masculin (dhakar = mâle) est un sens de la racine dh-k-r. Mais dans le verset 221, yatadhakkarun désigne clairement le rappel et la mémoire — Form V réflexive de la mémoire. Le sens de masculin n'est pas activé."
            }
          }
        }
      }
    ],
    daily_phrases: [
      // shrk — 3 phrases
      { word_key: "shrk", sense: "association/polythéisme", arabic: "أشرك", phon: "ashraka", french: "Il a associé à sa mission des intérêts personnels qui en ont corrompu la finalité." },
      { word_key: "shrk", sense: "association/polythéisme", arabic: "أشرك", phon: "ashraka", french: "Elle a refusé d'associer d'autres valeurs à la vérité — elle la gardait pure et unique." },
      { word_key: "shrk", sense: "association/polythéisme", arabic: "شريك", phon: "sharik", french: "Avoir un associé dans une affaire exige un accord total sur les principes fondamentaux." },
      // ejb — 3 phrases
      { word_key: "ejb", sense: "étonnement/émerveillement", arabic: "أعجب", phon: "a'jaba", french: "Il a été émerveillé par la beauté du projet mais a su garder la tête froide pour en évaluer les risques." },
      { word_key: "ejb", sense: "étonnement/émerveillement", arabic: "أعجبه", phon: "a'jabahu", french: "L'éloquence du discours l'a émerveillé au point qu'il a failli oublier d'en vérifier le fond." },
      { word_key: "ejb", sense: "étonnement/émerveillement", arabic: "عجب", phon: "'ajab", french: "L'émerveillement est une réaction saine, mais il ne doit pas remplacer le jugement." },
      // ebd — 3 phrases
      { word_key: "ebd", sense: "servitude/esclavage", arabic: "عبد", phon: "'abd", french: "Celui qui se soumet entièrement à sa mission accepte une forme de servitude librement choisie." },
      { word_key: "ebd", sense: "servitude/esclavage", arabic: "عبودية", phon: "'ubudiyya", french: "La servitude à la vérité est plus digne que la liberté dans l'erreur." },
      { word_key: "ebd", sense: "servitude/esclavage", arabic: "استعباد", phon: "isti'bad", french: "Réduire quelqu'un en esclavage — de quelque nature que ce soit — est l'acte le plus contraire à la dignité humaine." },
      // ghfr — 3 phrases
      { word_key: "ghfr", sense: "pardon/couverture", arabic: "غفر", phon: "ghafara", french: "Il a pardonné la faute de son collaborateur en la couvrant d'un silence protecteur, laissant place à la correction." },
      { word_key: "ghfr", sense: "pardon/couverture", arabic: "مغفرة", phon: "maghfira", french: "Le pardon n'efface pas la faute — il la couvre pour permettre la réconciliation et le recommencement." },
      { word_key: "ghfr", sense: "pardon/couverture", arabic: "غفور", phon: "ghafur", french: "Celui qui gouverne doit savoir être pardonneur — couvrir les erreurs réparables pour préserver la cohésion." },
      // dhkr — 3 phrases
      { word_key: "dhkr", sense: "mémoire/rappel", arabic: "تذكّر", phon: "tadhakkara", french: "Il s'est souvenu à temps de la leçon apprise et a évité de répéter l'erreur passée." },
      { word_key: "dhkr", sense: "mémoire/rappel", arabic: "ذكر", phon: "dhikr", french: "Le rappel constant de ce qui est juste est une protection contre la dérive progressive." },
      { word_key: "dhkr", sense: "mémoire/rappel", arabic: "تذكير", phon: "tadhkir", french: "Rappeler aux gens leurs engagements passés est un acte de responsabilité, pas un reproche." }
    ]
  }
};

async function main() {
  const data = verseData[221];

  // 1. Update verse_analyses
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V221)');

  // 2. Insert VWA
  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position + ' → ' + word.sense_chosen);
  }

  // 3. Daily phrases (daily=0 seulement: shrk, ejb, ebd, ghfr, dhkr)
  // Récupérer l'analysis_id de word_analyses pour chaque word_key
  const dailyKeys = ['shrk', 'ejb', 'ebd', 'ghfr', 'dhkr'];
  const waIds = {};
  for (const key of dailyKeys) {
    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', key)
      .single();
    if (wa) {
      waIds[key] = wa.id;
      console.log('  word_analyses id for ' + key + ': ' + wa.id);
    } else {
      console.warn('  WARN: word_analyses not found for ' + key);
    }
  }

  for (const dp of (data.daily_phrases || [])) {
    const analysis_id = waIds[dp.word_key];
    if (!analysis_id) {
      console.warn('  SKIP daily ' + dp.word_key + ' (no analysis_id found)');
      continue;
    }
    const { count } = await supabase
      .from('word_daily')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', analysis_id)
      .eq('french', dp.french);
    if (count > 0) {
      console.log('  daily SKIP ' + dp.word_key + ' (already exists)');
      continue;
    }
    const { error: dpErr } = await supabase.from('word_daily').insert({
      analysis_id: analysis_id,
      sense: dp.sense,
      arabic: dp.arabic,
      phon: dp.phon,
      french: dp.french
    });
    if (dpErr) console.error('daily ERROR ' + dp.word_key + ':', dpErr.message);
    else console.log('  daily OK: ' + dp.word_key + ' → ' + dp.french.substring(0, 60));
  }

  console.log('\n✅ V221 TERMINE');
}
main().catch(console.error);
