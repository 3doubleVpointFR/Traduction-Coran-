const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 172
// verse_id=179, analysis_id=538
// "O vous qui avez cru, mangez des bonnes choses que
//  Nous vous avons accordees et soyez reconnaissants
//  envers Dieu si c'est Lui que vous adorez."
// Injonction alimentaire aux croyants + gratitude + adoration
// =====================================================

const verseData = {
  172: {
    verse_id: 179,
    analysis_id: 538,
    translation_arab: "O vous qui avez cru, mangez des bonnes choses que Nous vous avons accordees et soyez reconnaissants envers Dieu si c'est Lui que vous adorez.",
    full_translation: "O vous qui avez adhere, mangez des choses pures que Nous vous avons attribuees comme subsistance, et rendez grace a Dieu si c'est Lui que vous servez.",
    translation_explanation: `§DEMARCHE§
Le verset s'adresse directement aux croyants par l'appel « ya ayyuha alladhina amanu » (o vous qui avez cru). Le verbe **amanu** est un accompli 3MP de la racine a-m-n a la forme IV. Le Lane's donne : croire, avoir foi, se sentir en securite, adherer. La forme IV (amana) est causative-declarative — declarer sa securite en quelqu'un, adherer a sa parole. L'accompli marque un acte deja accompli : ceux qui ont deja fait acte de foi. Le Coran utilise cette formule « ya ayyuha alladhina amanu » pour interpeller les croyants avant de leur donner un ordre — ici l'ordre est de manger et d'etre reconnaissants. Le verbe **kulu** est un imperatif 2MP de la racine a-k-l. Le Lane's donne : manger, consommer, devorer, ronger, eroder. Le sens premier est l'ingestion de nourriture — manger. L'imperatif est un ordre direct : mangez. Le Coran utilise ce verbe dans des contextes alimentaires (manger les bonnes choses, manger la chair du frere mort en 49:12 au figure) mais aussi dans des contextes d'erosion ou de destruction (le feu qui mange/devore). Ici le contexte est clairement alimentaire — il s'agit de manger les bonnes nourritures. Le nom **tayyibati** est un pluriel feminin de la racine t-y-b. Le Lane's donne : bon, pur, agreable, licite, salubre. Le tayyib est ce qui est bon en soi — pur dans sa nature, agreable au gout, licite dans sa consommation. Le pluriel avec l'article « min tayyibati » (parmi les bonnes choses) indique une selection : parmi les choses bonnes et pures. La preposition « min » est partitive — mangez de (une partie de) ce qui est bon, pas necessairement tout. Le verbe **razaqnakum** est un accompli 1P de la racine r-z-q avec pronom suffixe 2MP. Le Lane's donne : pourvoir, accorder une subsistance, attribuer des moyens de vivre. Le rizq est la subsistance au sens large — tout ce que Dieu accorde pour vivre. Le pronom « na » (Nous) est le pluriel de majeste divine, et « kum » (vous) est le destinataire collectif. La structure « ma razaqnakum » (ce que Nous vous avons accorde) rattache toute subsistance a la source divine — ce n'est pas l'homme qui produit sa nourriture mais Dieu qui la lui accorde. Le nom **lillahi** est compose de la preposition « li » (a, pour, envers) et du nom propre « Allah ». Le Lane's donne pour la preposition li : a, pour, en faveur de, envers. Le sens est « soyez reconnaissants envers Dieu » — la gratitude est dirigee vers Dieu comme source de la subsistance. Le rattachement de la gratitude a Dieu directement apres la mention de la subsistance cree un lien de cause a effet : puisque c'est Lui qui accorde, c'est a Lui que la gratitude est due. Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister, se trouver dans un etat. Dans la structure conditionnelle « in kuntum iyyahu ta'buduna » (si c'est Lui que vous adorez), kuntum ne designe pas le passe mais pose une condition sur l'etat present des croyants — si vous etes reellement dans l'etat d'adorer Dieu. Le verbe **ta'buduna** est un inaccompli 2MP de la racine '-b-d. Le Lane's donne : adorer, servir, se soumettre, etre esclave de. Le 'abd est celui qui se soumet completement a son maitre — l'adoration est la soumission totale. L'inaccompli marque une action continue : si c'est Lui que vous adorez en permanence, de facon habituelle. La structure emphatique avec « iyyahu » (Lui seul, Lui exclusivement) place le pronom divin en position frontale pour insister sur l'exclusivite : c'est Lui et personne d'autre que vous adorez. Cette fin conditionnelle transforme l'injonction alimentaire en test de sincerite — manger le licite et etre reconnaissant n'est possible que pour celui qui adore veritablement Dieu.

§JUSTIFICATION§
**cru** — Le sens retenu est « Foi/Adhesion ». Le verbe amanu est a la forme IV de a-m-n qui signifie croire, adherer. L'alternative « Securite/Confiance » est ecartee comme sens principal car la forme IV est declarative (declarer sa foi) et non simplement un etat de securite. Le sens de securite est neanmoins probable car la racine porte fondamentalement l'idee de mise en securite — celui qui croit se met en securite aupres de Dieu.

**mangez** — Le sens retenu est « Alimentation/Consommation ». Le verbe kulu est un imperatif direct de manger. L'alternative « Destruction/Erosion » est ecartee comme sens principal car le contexte est alimentaire (les bonnes choses, la subsistance divine) et non destructeur. Le sens d'erosion est neanmoins probable car la racine a-k-l couvre aussi le fait de ronger et consumer.

**bonnes choses** — Le sens retenu est « Bonte/Purete ». Le nom tayyibati designe ce qui est bon et pur en soi. Le Lane's confirme que tayyib couvre a la fois la bonte intrinseque, la purete et la licite. Il n'y a pas de concept alternatif serieux pour cette racine dans ce contexte.

**accordees** — Le sens retenu est « Subsistance/Provision ». Le verbe razaqnakum designe l'acte divin d'accorder une subsistance. Le rizq est un concept central du Coran — Dieu est ar-Razzaq, le Pourvoyeur. Il n'y a pas d'alternative serieuse dans ce contexte.

**Dieu** — Le sens retenu est « Divinite ». Le nom Allah est le nom propre de Dieu, la divinite unique. Le mot est ici complement de la preposition « li » (envers Dieu).

**etes** — Le sens retenu est « Etre/Existence ». Le verbe kuntum est un verbe incomplet qui porte la condition. L'alternative « lieu » est ecartee car le mot est un verbe, pas un nom.

**adorez** — Le sens retenu est « Adoration/Devotion ». Le verbe ta'buduna designe l'adoration et la soumission a Dieu. L'alternative « Servitude/Esclavage » est ecartee comme sens principal car le contexte est l'adoration volontaire de Dieu, pas la servitude forcee. Le sens de servitude est neanmoins probable car la racine '-b-d couvre aussi la condition de l'esclave — le 'abd est etymologiquement l'esclave avant d'etre l'adorateur.

§CRITIQUE§
Les traductions courantes divergent sur quelques points. Hamidullah traduit « mangez de ce que Nous vous avons attribue de licites nourritures ». Notre traduction suit de plus pres la structure arabe : « mangez des bonnes choses que Nous vous avons accordees » — le mot tayyibat (bonnes choses) vient avant l'attribution, pas apres. Le mot « tayyibat » est rendu par « bonnes choses » plutot que « licites nourritures » car tayyib designe la bonte intrinseque (purete, agrement) et pas seulement la licite juridique (halal). La fin du verset « si c'est Lui que vous adorez » est une conditionnelle qui pose un defi aux croyants : la gratitude est un test d'adoration sincere. Certaines traductions omettent la force du « iyyahu » (Lui exclusivement) qui insiste sur l'unicite de l'objet d'adoration.`,
    segments: [
      { fr: "o vous qui", phon: "ya ayyuha alladhina", arabic: "\u064a\u0670\u0623\u064e\u064a\u0651\u064f\u0647\u064e\u0627 \u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 0 },
      { fr: "avez cru", phon: "ya ayyuha alladhina", arabic: "\u064a\u0670\u0623\u064e\u064a\u0651\u064f\u0647\u064e\u0627 \u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 1 },
      { fr: "cru", pos: "verbe", phon: "amanu", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u0627\u06df", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 2 },
      { fr: "mangez", pos: "verbe", phon: "kulu", arabic: "\u0643\u064f\u0644\u064f\u0648\u0627\u06df", word_key: "akl", is_particle: false, sense_retenu: "manger", position: 3 },
      { fr: "des", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 4 },
      { fr: "bonnes choses", pos: "nom", phon: "tayyibati", arabic: "\u0637\u064e\u064a\u0651\u0650\u0628\u064e\u0670\u062a\u0650", word_key: "tyb", is_particle: false, sense_retenu: "bonnes choses", position: 5 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 6 },
      { fr: "Nous vous avons accordees", pos: "verbe", phon: "razaqnakum", arabic: "\u0631\u064e\u0632\u064e\u0642\u0652\u0646\u064e\u0670\u0643\u064f\u0645\u0652", word_key: "rzq", is_particle: false, sense_retenu: "accorder", position: 7 },
      { fr: "et soyez reconnaissants", phon: "wa-ushkuru", arabic: "\u0648\u064e\u0671\u0634\u0652\u0643\u064f\u0631\u064f\u0648\u0627\u06df", is_particle: true, position: 8 },
      { fr: "envers Dieu", pos: "nom", phon: "lillahi", arabic: "\u0644\u0650\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 9 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 10 },
      { fr: "vous etes", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064f\u0646\u062a\u064f\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 11 },
      { fr: "Lui", phon: "iyyahu", arabic: "\u0625\u0650\u064a\u0651\u064e\u0627\u0647\u064f", is_particle: true, position: 12 },
      { fr: "adorez", pos: "verbe", phon: "ta'buduna", arabic: "\u062a\u064e\u0639\u0652\u0628\u064f\u062f\u064f\u0648\u0646\u064e", word_key: "ebd", is_particle: false, sense_retenu: "adorer", position: 13 }
    ],
    words: [
      // amn pos=3 (verbe amanu — « cru »)
      {
        word_key: "amn", position: 3, sense_chosen: "croire",
        analysis_axes: {
          sense_chosen: "croire",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croire", "avoir foi", "adhérer", "accepter", "se fier"],
              proof_ctx: "Le verbe amanu est un accompli 3MP de la racine a-m-n a la forme IV. Le Lane's donne : croire, avoir foi, adherer a la parole de quelqu'un, se mettre en securite aupres de quelqu'un. La forme IV (amana) est declarative — declarer que l'on se met en securite aupres de Dieu, proclamer son adhesion. L'accompli marque un acte deja realise : ceux qui ont deja fait cet acte de foi. La formule « ya ayyuha alladhina amanu » est une interpellation directe qui presuppose que l'acte de foi est acquis — c'est parce que vous avez cru que vous recevez l'ordre qui suit.",
              axe1_verset: "Le verbe amanu ouvre l'adresse aux croyants et conditionne tout ce qui suit. Le champ lexical du verset est structure autour de trois injonctions : manger (kulu), etre reconnaissant (ushkuru), adorer (ta'buduna). La foi est le prealable a ces trois actes — on ne peut manger avec gratitude et adorer Dieu que si l'on a d'abord cru. La structure du verset montre que la foi n'est pas un acte isole mais le fondement d'un comportement global : adhesion → consommation licite → gratitude → adoration.",
              axe2_voisins: "Le verset 2:168 s'adressait a « ya ayyuha an-nasu » (o vous les gens) — une adresse universelle. Le verset 2:172 passe a « ya ayyuha alladhina amanu » (o vous qui avez cru) — une adresse specifique aux croyants. Ce passage du general au particulier montre une gradation : en 2:168, tous les gens sont invites a manger le licite ; en 2:172, les croyants recoivent un ordre renforce par la condition de l'adoration. La foi est le critere qui distingue les deux groupes.",
              axe3_sourate: "La formule « ya ayyuha alladhina amanu » apparait de nombreuses fois dans la sourate al-Baqarah (2:104, 2:153, 2:172, 2:178, 2:183, 2:254, 2:264, 2:267, 2:278, 2:282). Chaque occurrence introduit un ordre nouveau pour les croyants. En 2:153 c'est la patience, en 2:172 c'est la nourriture pure, en 2:183 ce sera le jeune. La sourate construit progressivement les obligations du croyant, et chaque injonction est precedee du rappel de la foi.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. C'est une des racines les plus frequentes. Le verbe amana est utilise dans tout le Coran pour designer l'acte de foi. La formule « ya ayyuha alladhina amanu » revient 89 fois dans le Coran, toujours pour introduire une legislation ou un conseil specifique aux croyants. Cette frequence montre que la foi n'est pas un etat passif mais un engagement actif qui appelle des actes concrets.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le point de depart de toute action sur terre. Le khalifa ne peut accomplir sa mission de representant de Dieu que s'il a d'abord adhere a Dieu. Le verset montre que la foi est le prealable a la consommation licite et a la gratitude — le khalifa mange ce que Dieu lui accorde et remercie son Pourvoyeur. Sans foi, il n'y a ni reconnaissance de la source divine ni gratitude — la mission du khalifa commence par l'adhesion."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["être en sécurité", "se sentir en sûreté", "faire confiance", "protéger", "garantir"],
              proof_ctx: "Le Lane's donne pour la racine a-m-n le sens fondamental de securite et de mise a l'abri de la peur. Le aman est l'etat de celui qui n'a rien a craindre. La forme IV (amana) signifie aussi rendre sur, garantir la securite. Celui qui croit (mu'min) est etymologiquement celui qui se met en securite aupres de Dieu — la foi est un acte de securisation. Ce sens est present en arriere-plan dans l'appel du verset.",
              axe1_verset: "Le verset appelle ceux qui se sont mis en securite aupres de Dieu a manger de ce qu'Il leur accorde. La securite est le contexte de l'acte alimentaire : on mange en paix ce que Dieu donne. Le champ lexical (bonnes choses, subsistance divine, gratitude, adoration) evoque un etat de confiance totale — le croyant ne craint pas pour sa nourriture car il fait confiance au Pourvoyeur. La conditionnelle finale (si c'est Lui que vous adorez) confirme que cette securite repose sur l'exclusivite du lien avec Dieu.",
              axe2_voisins: "Le verset 2:168 demandait aux gens de ne pas suivre les pas du diable. Le verset 2:172 s'adresse a ceux qui ont deja fait le choix de la securite aupres de Dieu. Le passage de l'avertissement general a l'injonction specifique montre que la securite spirituelle est acquise par les croyants — ils n'ont plus a craindre les pieges du diable car ils se sont mis a l'abri aupres de Dieu.",
              axe3_sourate: "La racine a-m-n dans la sourate al-Baqarah couvre les deux sens : la foi active (croire) et la securite (se sentir en surete). En 2:125, la Maison est un lieu de securite (amnan). En 2:126, Ibrahim demande la securite pour la cite. Les deux sens coexistent dans la sourate — la foi et la securite sont les deux faces de la meme racine.",
              axe4_coherence: "Le Coran utilise la racine a-m-n pour designer a la fois la foi (iman) et la securite (aman). Le nom divin al-Mu'min (59:23) signifie Celui qui donne la securite. Le croyant (mu'min) est celui qui se met en securite aupres de Dieu et qui, par extension, donne securite aux autres. Le double sens est constant dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la securite est la condition necessaire de la vie sur terre. Le khalifa doit creer un espace de securite ou les gens peuvent manger, vivre et adorer Dieu. La subsistance divine ne peut etre recue que dans un etat de confiance — celui qui craint pour sa nourriture ne peut pas etre reconnaissant. La mission du khalifa inclut la garantie de la securite alimentaire et spirituelle."
            }
          }
        }
      },
      // akl pos=4 (verbe kulu — « mangez »)
      {
        word_key: "akl", position: 4, sense_chosen: "manger",
        analysis_axes: {
          sense_chosen: "manger",
          concept_chosen: "Alimentation/Consommation",
          concepts: {
            "Alimentation/Consommation": {
              status: "retenu",
              senses: ["manger", "consommer", "ingérer", "nourrir", "se sustenter"],
              proof_ctx: "Le verbe kulu est un imperatif 2MP de la racine a-k-l. Le Lane's donne : manger, consommer de la nourriture, ingerer, devorer. Le sens premier et direct est l'acte de manger — l'ingestion de nourriture. L'imperatif est un ordre divin : mangez. La construction « kulu min tayyibati ma razaqnakum » (mangez des bonnes choses que Nous vous avons accordees) precise a la fois la qualite de la nourriture (tayyibat = bonnes/pures) et sa source (razaqnakum = que Nous vous avons accordees).",
              axe1_verset: "Le verbe kulu est le premier imperatif du verset apres l'appel aux croyants. Le champ lexical alimentaire est immediat : manger → bonnes choses → ce que Nous vous avons accorde. L'injonction de manger est suivie de celle d'etre reconnaissant (ushkuru), creant un enchainement : manger avec gratitude. La fin du verset (si c'est Lui que vous adorez) transforme l'acte de manger en acte d'adoration — consommer le licite avec gratitude est une forme de culte.",
              axe2_voisins: "Le verset 2:168 contenait deja l'imperatif « kulu » mais adresse a tous les gens (ya ayyuha an-nasu kulu). Le verset 2:172 reprend le meme imperatif mais adresse aux croyants. En 2:168 la specification etait « halalan tayyiban » (licite et bon) ; en 2:172 c'est « min tayyibati ma razaqnakum » (des bonnes choses que Nous vous avons accordees). Le passage du licite a la subsistance divine montre une elevation du discours.",
              axe3_sourate: "La racine a-k-l apparait dans la sourate al-Baqarah dans plusieurs contextes : en 2:168 (mangez du licite), 2:172 (mangez des bonnes choses), 2:174 (ceux qui mangent le Feu dans leurs ventres), 2:175 (ils mangent le Feu), 2:188 (ne mangez pas vos biens entre vous injustement). La sourate montre que l'acte de manger peut etre licite ou illicite — manger le bon est un acte de foi, manger l'illicite est un acte de perdition.",
              axe4_coherence: "La racine a-k-l apparait environ 109 fois dans le Coran. Le Coran utilise cette racine aussi bien au sens propre (manger de la nourriture) qu'au sens figure (le feu qui devore, l'usure qui ronge). L'imperatif « kulu » apparait souvent dans des contextes de permission divine — Dieu autorise et ordonne de manger de ce qu'Il a accorde. L'interdiction de certains aliments (2:173) suit immediatement le verset 2:172, montrant que l'ordre de manger est encadre par des limites.",
              axe5_frequence: "Pour la mission du khalifa, manger est un acte fondamental de la vie sur terre. Le khalifa ne peut accomplir sa mission sans se nourrir — la subsistance est la base materielle de l'existence. Le verset montre que manger n'est pas un acte neutre mais un acte de foi quand il est accompagne de gratitude. La mission du khalifa inclut la gestion responsable des ressources alimentaires que Dieu accorde a la terre."
            },
            "Destruction/Érosion": {
              status: "probable",
              senses: ["dévorer", "ronger", "consumer", "éroder", "corroder"],
              proof_ctx: "Le Lane's donne pour a-k-l le sens secondaire de devorer, ronger, consumer par le feu ou l'usure. Le sens d'erosion est present dans le Coran : en 2:174-175, ceux qui cachent la revelation « ne mangent dans leurs ventres que du Feu » — le feu devore l'interieur. En 2:188, « ne mangez pas vos biens entre vous par le faux » — l'injustice ronge les biens. Ce sens destructeur est l'envers du sens alimentaire positif.",
              axe1_verset: "Le verset oppose implicitement la bonne consommation (manger les bonnes choses avec gratitude) a la consommation destructrice (manger l'illicite). Le champ lexical positif (bonnes choses, subsistance, gratitude, adoration) montre que l'alimentation licite est constructive alors que l'alimentation illicite serait erosive et destructrice. L'imperatif positif sous-entend l'interdiction du contraire.",
              axe2_voisins: "Le verset 2:174 qui suit de pres utilise la meme racine dans un sens destructeur : ceux qui cachent ce que Dieu a revele « ne mangent dans leurs ventres que du Feu ». Le contraste entre 2:172 (mangez du bon) et 2:174 (ils mangent du Feu) montre les deux faces de la racine a-k-l — la nourriture et la destruction. Le verset 2:188 prolonge cette opposition avec l'interdiction de manger les biens d'autrui.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine a-k-l dans des contextes de destruction en 2:174, 2:175 et 2:188. Ces occurrences montrent que la consommation illicite est une forme d'auto-destruction — celui qui mange le Feu se detruit de l'interieur. La sourate construit un contraste pedagogique entre la bonne nourriture (2:168, 2:172) et la nourriture destructrice (2:174-175).",
              axe4_coherence: "Le Coran utilise la racine a-k-l dans des contextes de destruction a plusieurs reprises : en 3:183, le feu qui mange le sacrifice ; en 5:66, ils auraient mange de dessus et de dessous eux (jouissance sans limite) ; en 9:34, ceux qui amassent l'or et l'argent. Le sens destructeur de a-k-l est un avertissement constant — la consommation peut etre bienfaisante ou devastatrice selon ce qu'on mange et comment on le mange.",
              axe5_frequence: "Pour la mission du khalifa, la distinction entre consommation constructive et consommation destructrice est essentielle. Le khalifa est le gardien de la terre — il doit veiller a ce que la consommation ne devienne pas erosion. L'exploitation excessive des ressources terrestres est une forme de « devoration » qui va contre la mission de preservation. Le khalifa mange pour vivre et servir, il ne devore pas pour detruire."
            }
          }
        }
      },
      // tyb pos=6 (nom tayyibati — « bonnes choses »)
      {
        word_key: "tyb", position: 6, sense_chosen: "bonnes choses",
        analysis_axes: {
          sense_chosen: "bonnes choses",
          concept_chosen: "Bonté/Pureté",
          concepts: {
            "Bonté/Pureté": {
              status: "retenu",
              senses: ["bon", "pur", "agréable", "licite", "salubre"],
              proof_ctx: "Le nom tayyibati est un pluriel feminin au genitif de la racine t-y-b. Le Lane's donne : bon, pur, agreable au gout et a l'ame, salubre, ce qui est exempt de souillure ou de vice. Le tayyib est ce qui est intrinsequement bon — sa bonte n'est pas un jugement exterieur mais une qualite inherente. Le pluriel avec la preposition partitive « min » (de, parmi) indique une categorie : parmi les bonnes choses que Dieu a accordees.",
              axe1_verset: "Le nom tayyibati qualifie la nourriture que les croyants sont invites a manger. Le champ lexical du verset construit une chaine : croire → manger le bon → etre reconnaissant → adorer Dieu. La bonte de la nourriture est un element central — ce n'est pas n'importe quelle nourriture mais celle qui est bonne et pure. La qualite de ce qu'on mange est liee a la qualite de la relation avec Dieu : manger le bon est un acte de reconnaissance.",
              axe2_voisins: "Le verset 2:168 utilisait la forme singulier-adjectival « halalan tayyiban » (licite et bon). Le verset 2:172 utilise le pluriel substantif « tayyibati » (les bonnes choses). Le passage de l'adjectif au substantif montre une elevation : en 2:168 le bon qualifie la nourriture, en 2:172 les bonnes choses deviennent une categorie a part entiere. Le verset 2:173 qui suit precisera les interdits alimentaires (la bete morte, le sang, le porc).",
              axe3_sourate: "La racine t-y-b apparait dans la sourate al-Baqarah en 2:57 (mangez des bonnes choses que Nous vous avons accordees — aux fils d'Israel), 2:168 (halalan tayyiban), 2:172 (tayyibati), 2:267 (depensez des bonnes choses que vous avez acquises). La sourate utilise tayyib comme critere de qualite pour la nourriture et les depenses — ce qui est bon intrinsequement est ce que Dieu accepte.",
              axe4_coherence: "La racine t-y-b apparait environ 46 fois dans le Coran. Le tayyib est constamment oppose au khabith (mauvais, impur). En 5:100, « le mauvais et le bon ne sont pas egaux ». En 7:157, le Prophete rend licite les bonnes choses et illicite les mauvaises. Le Coran fait de la distinction entre le bon et le mauvais un principe structurant de la vie du croyant.",
              axe5_frequence: "Pour la mission du khalifa, la recherche du bon et du pur est une obligation. Le khalifa est responsable de la qualite de ce qu'il consomme et de ce qu'il produit sur terre. Le tayyib n'est pas seulement le licite juridique (halal) mais le bon intrinseque — ce qui est pur, sain, agreable. La mission du khalifa inclut la preservation de la purete des ressources terrestres et le refus de corrompre ce que Dieu a cree bon."
            }
          }
        }
      },
      // rzq pos=8 (verbe razaqnakum — « Nous vous avons accordees »)
      {
        word_key: "rzq", position: 8, sense_chosen: "accorder",
        analysis_axes: {
          sense_chosen: "accorder",
          concept_chosen: "Subsistance/Provision",
          concepts: {
            "Subsistance/Provision": {
              status: "retenu",
              senses: ["pourvoir", "accorder", "attribuer", "sustenter", "donner comme subsistance"],
              proof_ctx: "Le verbe razaqnakum est un accompli 1P de la racine r-z-q avec pronom suffixe 2MP. Le Lane's donne : pourvoir de subsistance, accorder les moyens de vivre, attribuer une part de biens. Le rizq est tout ce que Dieu donne pour la vie — nourriture, eau, biens, connaissances. Le pronom « na » (Nous) est le pluriel de majeste divine qui rappelle que la source de toute subsistance est Dieu. Le pronom « kum » (vous) est le destinataire collectif — les croyants recoivent collectivement.",
              axe1_verset: "Le verbe razaqnakum rattache toute nourriture a la source divine. Le champ lexical du verset montre une logique de don et de contre-don : Dieu accorde (razaqnakum) → les croyants mangent (kulu) → les croyants remercient (ushkuru). La subsistance divine est le fondement de la gratitude — on remercie Dieu parce que c'est Lui qui donne. La conditionnelle finale (si c'est Lui que vous adorez) acheve le circuit : Dieu donne → l'homme recoit → l'homme remercie → l'homme adore.",
              axe2_voisins: "Le verset 2:57 utilisait la meme construction : « kulu min tayyibati ma razaqnakum » mais adressee aux fils d'Israel dans le desert. Le verset 2:172 reprend cette meme formule pour les croyants de la communaute du Prophete. La repetition montre une continuite dans le message divin : qu'il s'agisse des fils d'Israel ou des croyants de la derniere communaute, Dieu est le Pourvoyeur et la gratitude est requise.",
              axe3_sourate: "La racine r-z-q apparait dans la sourate al-Baqarah plus de 20 fois. En 2:3 les croyants depensent de ce que Dieu leur a accorde. En 2:22, Dieu fait descendre du ciel l'eau par laquelle Il produit des fruits comme subsistance. En 2:25, les habitants du Jardin recoivent des fruits. En 2:212, Dieu accorde sans compter a qui Il veut. La sourate presente Dieu comme le Pourvoyeur supreme dont la subsistance est constante et universelle.",
              axe4_coherence: "La racine r-z-q apparait environ 123 fois dans le Coran. Le nom divin ar-Razzaq (le Pourvoyeur) en 51:58 en fait un attribut permanent de Dieu. Le Coran repete constamment que la subsistance vient de Dieu — cette repetition vise a detourner l'homme de l'illusion d'autosuffisance. Chaque occurrence de r-z-q rappelle que l'homme ne se nourrit pas lui-meme mais recoit de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la subsistance divine est le fondement materiel de la vie sur terre. Le khalifa ne produit pas sa nourriture par sa propre puissance — il cultive, recolte et transforme ce que Dieu a mis a sa disposition. La conscience que toute subsistance vient de Dieu empeche l'arrogance et impose la gratitude. La mission du khalifa est de distribuer equitablement la subsistance que Dieu accorde a la terre entiere."
            }
          }
        }
      },
      // alh pos=10 (nom lillahi — « envers Dieu »)
      {
        word_key: "alh", position: 10, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["Dieu", "divinité", "l'Adoré", "le Maître suprême", "l'Unique"],
              proof_ctx: "Le nom lillahi est compose de la preposition « li » (a, pour, envers) et du nom propre « Allah ». Le Lane's donne pour Allah : le nom propre de l'Etre Supreme, la divinite unique meritant l'adoration. Le mot Allah est derive de la racine a-l-h qui porte le sens d'adorer, d'etre frappe de stupeur devant la grandeur. La preposition « li » dirige la gratitude vers Dieu — soyez reconnaissants envers Dieu.",
              axe1_verset: "Le nom lillahi est le destinataire de la gratitude. Le champ lexical du verset construit un mouvement vers Dieu : les croyants mangent ce que Dieu leur accorde → ils remercient Dieu → ils adorent Dieu. Chaque etape du verset converge vers Dieu comme source (de la subsistance), objet (de la gratitude) et but (de l'adoration). Le verset est theocentriste — tout part de Dieu et tout revient a Dieu.",
              axe2_voisins: "Le verset 2:163 affirmait « wa-ilahukum ilahun wahidun » (votre dieu est un dieu unique). Le verset 2:172 reprend le nom d'Allah dans le contexte de la gratitude alimentaire. Le verset 2:173 qui suit precise les interdits au nom de Dieu. La section construit progressivement la souverainete divine sur l'alimentation : Dieu est unique → Il nourrit → on Le remercie → Il interdit ce qui est mauvais.",
              axe3_sourate: "Le nom Allah apparait environ 282 fois dans la sourate al-Baqarah. C'est le nom le plus frequent de la sourate. Chaque occurrence rappelle la centralite de Dieu dans tous les aspects de la vie. En 2:172, Allah est le destinataire de la gratitude pour la nourriture — meme l'acte le plus quotidien (manger) est rattache a Dieu.",
              axe4_coherence: "Le nom Allah apparait environ 2699 fois dans le Coran. C'est le mot le plus frequent du texte coranique. Cette omnipresence du nom divin dans le texte sacre montre que le Coran est avant tout un discours sur Dieu et vers Dieu. Chaque domaine de la vie humaine est rattache au nom divin — l'alimentation en 2:172 comme la priere, le commerce, le mariage ou la guerre.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandataire de la mission. Le khalifa agit au nom de Dieu et pour Dieu — sa gratitude envers Dieu est l'expression de sa reconnaissance du mandat. Manger avec gratitude envers Dieu c'est reconnoitre que la terre et ses ressources appartiennent a Dieu et que le khalifa n'en est que le gestionnaire. La mission commence par la reconnaissance de la source."
            }
          }
        }
      },
      // kwn pos=12 (verbe kuntum — « vous etes »)
      {
        word_key: "kwn", position: 12, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être", "exister", "se trouver", "devenir", "avoir lieu"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister, se trouver dans un etat, devenir. Le verbe kana est un verbe incomplet (naqis) qui porte la temporalite et l'etat du sujet. Dans la structure « in kuntum iyyahu ta'buduna » (si vous etes Lui adorant), kuntum ne designe pas le passe mais pose une condition sur l'etat present et permanent des croyants — si vous etes vraiment dans cet etat d'adoration.",
              axe1_verset: "Le verbe kuntum introduit la condition finale du verset. Le champ lexical montre une gradation : croire → manger → remercier → etre dans l'adoration. Le verbe kuntum porte la condition : si vous etes vraiment ceux qui adorent Dieu, alors mangez et soyez reconnaissants. L'etre (kuntum) est la condition de la coherence — ce qu'on est determine ce qu'on fait. Etre adorateur de Dieu implique de manger le bon et d'etre reconnaissant.",
              axe2_voisins: "Le verbe kuntum apparait dans la sourate 2 dans de nombreuses conditions et declarations. En 2:23, « in kuntum sadiqina » (si vous etes veridiques). En 2:91, « in kuntum mu'minina » (si vous etes croyants). Le verset 2:172 utilise la meme structure conditionnelle avec l'adoration comme objet. La repetition de cette structure « in kuntum + etat » est un procede coranique pour tester la sincerite des croyants.",
              axe3_sourate: "La racine k-w-n est la plus frequente de la sourate al-Baqarah avec le verbe kana sous toutes ses formes. Le verbe kana sert de copule (etre), de verbe existentiel (exister) et de marqueur temporel (etait, sera). En 2:172, kuntum est existentiel-conditionnel — si vous etes dans l'etat d'adorer. La sourate utilise k-w-n comme armature grammaticale de ses propositions.",
              axe4_coherence: "La racine k-w-n apparait environ 1390 fois dans le Coran. C'est une des racines les plus frequentes. Le verbe kana structure la syntaxe coranique — il porte les conditions, les etats, les descriptions. En 2:172, kuntum est le pivot de la conditionnelle finale qui donne son sens a tout le verset : l'injonction de manger et de remercier est conditionnee par l'etat d'adoration.",
              axe5_frequence: "Pour la mission du khalifa, l'etre precede l'agir. Le khalifa doit d'abord etre adorateur de Dieu avant de pouvoir manger avec gratitude et gerer la terre avec responsabilite. Le verset pose la question de l'etre : etes-vous vraiment des adorateurs de Dieu ? Si oui, alors votre alimentation et votre gratitude doivent en temoigner. La mission du khalifa est d'abord un etat d'etre avant d'etre un programme d'action."
            }
          }
        }
      },
      // ebd pos=14 (verbe ta'buduna — « adorez »)
      {
        word_key: "ebd", position: 14, sense_chosen: "adorer",
        analysis_axes: {
          sense_chosen: "adorer",
          concept_chosen: "Adoration/Dévotion",
          concepts: {
            "Adoration/Dévotion": {
              status: "retenu",
              senses: ["adorer", "vouer un culte", "se consacrer", "vénérer", "se dévouer"],
              proof_ctx: "Le verbe ta'buduna est un inaccompli 2MP de la racine '-b-d. Le Lane's donne : adorer, rendre un culte, se soumettre avec humilite et veneration. La 'ibadah est l'adoration au sens plein — la soumission volontaire et totale a Dieu. L'inaccompli marque une action continue et habituelle : si c'est Lui que vous adorez en permanence. La structure emphatique « iyyahu ta'buduna » (Lui vous adorez) place le pronom divin en position frontale — c'est Lui et personne d'autre.",
              axe1_verset: "Le verbe ta'buduna ferme le verset et lui donne sa finalite. Le champ lexical du verset forme un circuit complet : foi (amanu) → alimentation (kulu) → subsistance divine (razaqnakum) → gratitude (ushkuru) → adoration (ta'buduna). L'adoration est le sommet du verset — tout converge vers elle. La conditionnelle (in kuntum iyyahu ta'buduna = si c'est Lui que vous adorez) transforme l'acte de manger en test de sincerite : celui qui adore veritablement Dieu mange ce qu'Il donne et Le remercie.",
              axe2_voisins: "Le verset 2:21 utilisait le meme verbe dans un imperatif : « u'budu rabbakum » (adorez votre Seigneur). Le verset 2:172 utilise l'inaccompli dans une condition. Le passage de l'imperatif (adorez !) a la condition (si vous adorez) montre une evolution : en 2:21, l'ordre est donne ; en 2:172, on presuppose que l'adoration est deja en cours et on en tire les consequences. L'adoration n'est plus un ordre mais un etat dont decoulent des comportements.",
              axe3_sourate: "La racine '-b-d apparait dans la sourate al-Baqarah en 2:21 (adorez votre Seigneur), 2:83 (n'adorez que Dieu), 2:133 (qu'adorerez-vous apres moi ?), 2:172 (si c'est Lui que vous adorez). La sourate construit progressivement le theme de l'adoration exclusive de Dieu — chaque occurrence precise un aspect : l'ordre initial, l'exclusivite, la question aux generations, le test de sincerite.",
              axe4_coherence: "La racine '-b-d apparait environ 275 fois dans le Coran. Le verset 51:56 affirme que Dieu n'a cree les djinns et les hommes que pour qu'ils L'adorent. L'adoration est la finalite de la creation. En 2:172, l'adoration est liee a l'alimentation et a la gratitude — le Coran montre que l'adoration ne se limite pas a la priere rituelle mais englobe tous les actes de la vie, y compris manger.",
              axe5_frequence: "Pour la mission du khalifa, l'adoration est le coeur de la mission. Le khalifa est sur terre pour adorer Dieu — cette adoration se manifeste dans tous les actes de la vie. Manger les bonnes choses avec gratitude est un acte d'adoration. Gerer les ressources terrestres est un acte d'adoration. La mission du khalifa n'est pas separee de l'adoration — elle en est l'expression concrete et quotidienne."
            },
            "Servitude/Esclavage": {
              status: "probable",
              senses: ["servir", "être esclave", "être asservi", "être soumis", "obéir servilement"],
              proof_ctx: "Le Lane's donne pour la racine '-b-d le sens fondamental d'etre esclave, d'etre la propriete de quelqu'un. Le 'abd est etymologiquement l'esclave — celui qui ne possede rien en propre et dont tout l'etre appartient a son maitre. L'adoration (ibadah) est etymologiquement l'acte de l'esclave qui se soumet. Ce sens est present en arriere-plan dans l'inaccompli ta'buduna.",
              axe1_verset: "Le verset pose la condition : si c'est Lui que vous servez. Le champ lexical de la soumission est implicite — le croyant recoit sa nourriture de Dieu comme l'esclave recoit la sienne de son maitre. La structure « iyyahu ta'buduna » (Lui vous servez) avec le pronom emphatique insiste sur l'exclusivite : le croyant n'est l'esclave de personne d'autre que Dieu. La servitude envers Dieu est liberatrice car elle affranchit de la servitude envers les hommes.",
              axe2_voisins: "Le verset 2:178 qui suit de pres mentionne « al-'abdu bil-'abdi » (l'esclave pour l'esclave) dans le contexte du talion. Le sens d'esclave de la racine '-b-d est explicite dans ce verset voisin. En 2:172, le meme 'abd est present en arriere-plan — celui qui adore Dieu est Son 'abd (serviteur/esclave). La proximite de 2:178 rappelle que la racine couvre les deux sens.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine '-b-d dans les deux sens : l'adoration en 2:21, 2:83, 2:133, 2:172 ; et l'esclavage en 2:178, 2:221. Les deux sens coexistent dans la meme sourate, montrant que le 'abd est a la fois l'adorateur volontaire de Dieu et l'esclave juridique de la societe. Le Coran ne supprime pas le sens d'esclavage mais le sublimise en adoration.",
              axe4_coherence: "Le Coran utilise la racine '-b-d dans les deux sens a travers le texte entier. En 19:93, « tous ceux qui sont dans les cieux et la terre viendront au Misericordieux en tant que 'abd (serviteur) ». En 2:221, l'esclave croyant vaut mieux que le polytheiste libre. Le double sens est constant — l'esclave de Dieu est le plus libre des hommes car il ne sert que le Maitre absolu.",
              axe5_frequence: "Pour la mission du khalifa, la servitude envers Dieu est la condition de la liberte. Le khalifa est le 'abd de Dieu — son serviteur-esclave volontaire. Cette servitude n'est pas une humiliation mais un honneur : etre l'esclave de Dieu c'est etre affranchi de toute autre servitude. La mission du khalifa est un service divin — il gere la terre comme un serviteur gere le bien de son maitre, avec devouement et fidelite."
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

  const verseIds = [179];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 172 ===\n');
  await processVerse(172);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V172 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
