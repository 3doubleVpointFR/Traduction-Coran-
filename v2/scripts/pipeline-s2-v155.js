const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 155
// verse_id=162, analysis_id=522
// "Et Nous vous eprouverons certes par un peu de peur,
//  de faim, de diminution des biens, des personnes et
//  des fruits. Et annonce la bonne nouvelle aux endurants."
// =====================================================

const verseData = {
  155: {
    verse_id: 162,
    analysis_id: 522,
    translation_arab: "Et Nous vous eprouverons certes par quelque chose de peur, de faim, de diminution des biens, des personnes et des fruits. Et annonce la bonne nouvelle aux endurants.",
    full_translation: "Et tres certainement, Nous vous eprouverons par un peu de peur, de faim et de diminution de biens, de personnes et de fruits. Et fais la bonne annonce aux endurants.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par le verbe **lanabluwannakum** qui est un inaccompli 1PL de la racine b-l-w avec le lam d'insistance et le nun de confirmation lourde. Le Lane's donne : eprouver, tester, mettre a l'epreuve. L'inaccompli indique une action non encore achevee — l'epreuve est annoncee comme certaine mais pas encore terminee. Le « Nous » divin est le sujet — c'est Dieu qui eprouve. Le pronom suffixe « kum » (vous) designe les croyants. Le lam d'insistance et le nun de confirmation (lanabluwanna) rendent l'annonce absolument certaine — il ne s'agit pas d'une possibilite mais d'une promesse divine ferme. La preposition **bi** (par) introduit l'instrument de l'epreuve. Le mot **shay'in** est un nom indefini genitif de la racine sh-y-a. Le Lane's donne : chose, quelque chose. L'indefini marque que l'epreuve sera « par quelque chose de » — une quantite indeterminee mais reelle. Le mot **al-khawfi** est un nom defini genitif de la racine kh-w-f. Le Lane's donne : peur, crainte, apprehension. L'article defini (al-) generalise — la peur en tant que categorie, pas une peur specifique. Le mot **al-ju'i** est un nom defini genitif de la racine j-w-e. Le Lane's donne : faim, disette. L'article defini generalise la faim comme categorie d'epreuve. Le mot **naqsin** est un nom indefini genitif de la racine n-q-s. Le Lane's donne : diminution, manque, reduction. L'indefini marque que la diminution sera partielle — « un peu de diminution ». Le mot **al-amwali** est un nom defini genitif pluriel de la racine m-l-w. Le Lane's donne : biens, richesses, proprietes. Les biens sont ce que l'on possede materiellement — la diminution des biens touche la securite economique. Le mot **al-anfusi** est un nom defini genitif pluriel de la racine n-f-s. Le Lane's donne : ames, personnes, soi-meme. La diminution des personnes designe la perte de proches par la mort ou l'absence. Le mot **ath-thamarati** est un nom defini genitif pluriel de la racine th-m-r. Le Lane's donne : fruits, produits, recoltes. La diminution des fruits touche la subsistance agricole — les recoltes diminuent, la nourriture se rarefie. Le verbe **bashshir** est un imperatif 2MS de la forme II de la racine b-sh-r. Le Lane's donne : annoncer une bonne nouvelle, rejouir par une annonce. La forme II intensifie l'action — la bonne annonce est active et deliberee. L'imperatif est adresse au Prophete : « annonce ! ». Le mot **as-sabirina** est un participe actif pluriel accusatif de la racine s-b-r. Le Lane's donne : les endurants, ceux qui patientent. Le participe actif indique un etat permanent — les endurants sont ceux dont la patience est une qualite durable, pas une reaction ponctuelle. L'accusatif indique qu'ils sont l'objet indirect de l'annonce.

§JUSTIFICATION§
**eprouverons** — Le sens retenu est « eprouver ». Le verbe nablu decrit l'acte divin de soumettre les croyants a une epreuve. L'alternative « user » est ecartee car le contexte est un test de la foi, pas une degradation physique.

**chose** — Le sens retenu est « chose ». Le mot shay'in introduit la quantite de l'epreuve — « par quelque chose de peur ». L'alternative « vouloir » est ecartee car le mot est un nom indefini au genitif, pas un verbe de volonte.

**peur** — Le sens retenu est « peur ». Le mot al-khawf designe la premiere categorie d'epreuve. C'est l'emotion face au danger. L'alternative « effrayer » est ecartee car le mot est un nom, pas un verbe.

**faim** — Le sens retenu est « faim ». Le mot al-ju' designe la deuxieme categorie d'epreuve. C'est le manque de nourriture. L'alternative « famine » est ecartee car le contexte indique une quantite moderee (shay'in = un peu de), pas une catastrophe totale.

**diminution** — Le sens retenu est « diminution ». Le mot naqsin designe la reduction progressive des biens, des personnes et des fruits. L'alternative « manque » est ecartee car « diminution » rend mieux l'idee d'un processus graduel de perte.

**biens** — Le sens retenu est « biens ». Le mot al-amwal designe les possessions materielles. L'alternative « remplir » est ecartee car le mot est au pluriel defini (al-amwal = les biens), pas un verbe de remplissage.

**personnes** — Le sens retenu est « personnes ». Le mot al-anfus designe les ames ou les proches. L'alternative « souffle » est ecartee car le contexte est la perte de proches, pas la respiration.

**fruits** — Le sens retenu est « fruits ». Le mot ath-thamarat designe les produits de la terre et les recoltes. L'alternative « richesse » est ecartee car les biens (amwal) couvrent deja la richesse — ici les fruits designent specifiquement les produits agricoles.

**annonce** — Le sens retenu est « annoncer une bonne nouvelle ». Le verbe bashshir est un imperatif de forme II qui commande au Prophete de transmettre la bonne annonce. L'alternative « peau » est ecartee car le mot est un verbe imperatif, pas un nom anatomique.

**endurants** — Le sens retenu est « patienter ». Le mot as-sabirina designe ceux qui endurent avec constance. L'alternative « emprisonner » est ecartee car le contexte est la patience face a l'epreuve, pas l'incarceration.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. La principale variation porte sur « shay'in min » : certaines traduisent « un peu de » (Hamidullah), d'autres « quelque chose de » (plus litteral). Nous retenons « quelque chose de » qui respecte la construction grammaticale arabe — shay'in est un nom indefini suivi d'un partitif. La nuance entre « un peu » et « quelque chose » ne change pas le sens fondamental mais « quelque chose de » est plus fidele a la structure. L'autre variation concerne « bashshir » que certains traduisent par « fais la bonne annonce » et d'autres par « annonce la bonne nouvelle ». Les deux sont corrects — nous retenons « annonce la bonne nouvelle » qui est plus naturel en francais courant.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "Nous vous eprouverons certes", pos: "verbe", phon: "lanabluwannakum", arabic: "\u0644\u064e\u0646\u064e\u0628\u0652\u0644\u064f\u0648\u064e\u0646\u0651\u064e\u0643\u064f\u0645", word_key: "blw", is_particle: false, sense_retenu: "eprouver", position: 1 },
      { fr: "par", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 2 },
      { fr: "quelque chose de", pos: "nom", phon: "shay'in", arabic: "\u0634\u064e\u064a\u0652\u0621\u064d", word_key: "shy", is_particle: false, sense_retenu: "chose", position: 3 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0651\u0646\u064e", is_particle: true, position: 4 },
      { fr: "la peur", pos: "nom", phon: "al-khawfi", arabic: "\u0671\u0644\u0652\u062e\u064e\u0648\u0652\u0641\u0650", word_key: "khw", is_particle: false, sense_retenu: "peur", position: 5 },
      { fr: "la faim", pos: "nom", phon: "al-ju'i", arabic: "\u0648\u064e\u0671\u0644\u0652\u062c\u064f\u0648\u0639\u0650", word_key: "jwa", is_particle: false, sense_retenu: "faim", position: 6 },
      { fr: "diminution", pos: "nom", phon: "naqsin", arabic: "\u0648\u064e\u0646\u064e\u0642\u0652\u0635\u064d", word_key: "nqs", is_particle: false, sense_retenu: "diminution", position: 7 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0651\u0646\u064e", is_particle: true, position: 8 },
      { fr: "les biens", pos: "nom", phon: "al-amwali", arabic: "\u0671\u0644\u0652\u0623\u064e\u0645\u0652\u0648\u064e\u0640\u0644\u0650", word_key: "mlw", is_particle: false, sense_retenu: "biens", position: 9 },
      { fr: "les personnes", pos: "nom", phon: "al-anfusi", arabic: "\u0648\u064e\u0671\u0644\u0652\u0623\u064e\u0646\u0641\u064f\u0633\u0650", word_key: "nfs", is_particle: false, sense_retenu: "personnes", position: 10 },
      { fr: "les fruits", pos: "nom", phon: "ath-thamarati", arabic: "\u0648\u064e\u0671\u0644\u062b\u0651\u064e\u0645\u064e\u0631\u064e\u0640\u062a\u0650", word_key: "thm", is_particle: false, sense_retenu: "fruits", position: 11 },
      { fr: "annonce la bonne nouvelle", pos: "verbe", phon: "bashshir", arabic: "\u0648\u064e\u0628\u064e\u0634\u0651\u0650\u0631\u0650", word_key: "bshr", is_particle: false, sense_retenu: "annoncer une bonne nouvelle", position: 12 },
      { fr: "aux endurants", pos: "nom", phon: "as-sabirina", arabic: "\u0671\u0644\u0635\u0651\u064e\u0640\u0628\u0650\u0631\u0650\u064a\u0646\u064e", word_key: "sbr", is_particle: false, sense_retenu: "patienter", position: 13 }
    ],
    words: [
      // blw pos=1
      {
        word_key: "blw", position: 1, sense_chosen: "eprouver",
        analysis_axes: {
          sense_chosen: "eprouver",
          concept_chosen: "Épreuve/Test",
          concepts: {
            "Épreuve/Test": {
              status: "retenu",
              senses: ["eprouver", "tester", "affliction"],
              proof_ctx: "Le verbe lanabluwannakum est un inaccompli 1PL de la racine b-l-w avec le lam d'insistance et le nun de confirmation lourde. Le Lane's donne : eprouver, tester, mettre a l'epreuve. L'epreuve est un acte directionnel — celui qui eprouve soumet l'eprouve a un test pour reveler sa vraie nature. Le nun de confirmation lourde (nabluwanna) rend l'annonce absolument certaine. Le sujet est le « Nous » divin — Dieu est l'agent de l'epreuve. Le pronom suffixe « kum » designe les croyants. La distinction avec le sens d'usure (nul) est claire : le contexte est un test de la foi, pas une degradation physique.",
              axe1_verset: "Le verbe lanabluwannakum ouvre le verset et pose le cadre : l'epreuve est une certitude divine. Le champ lexical du verset tourne autour de la perte (peur, faim, diminution, biens, personnes, fruits) et de la reponse juste (patience, bonne nouvelle). L'epreuve est l'evenement, la patience est la reponse attendue. Le verset lie indissociablement l'epreuve et la bonne annonce — ceux qui endurent l'epreuve recoivent la bonne nouvelle. L'epreuve n'est pas une punition mais un creuset qui revele la qualite de la foi.",
              axe2_voisins: "Le verset 153 appelait a chercher l'aide par la patience et la priere. Le verset 154 interdisait de dire que ceux qui meurent dans le chemin de Dieu sont morts — ils sont vivants. Le verset 155 annonce maintenant les epreuves concretes qui attendent les croyants. La progression est : methode (patience + priere) → correction (ils sont vivants) → annonce des epreuves. Les versets 153-157 forment un bloc thematique sur la patience face aux epreuves.",
              axe3_sourate: "La racine b-l-w apparait a des moments cles de la sourate al-Baqarah. En 2:49, Dieu a sauve les Banu Isra'il de Pharaon qui les eprouvait par le pire chatiment. En 2:124, Dieu a eprouve Ibrahim par des paroles. En 2:155, Dieu annonce qu'Il eprouvera les croyants par la peur, la faim et les pertes. La sourate montre que l'epreuve est une constante divine — chaque communaute est testee pour que sa foi soit verifiee.",
              axe4_coherence: "La racine b-l-w apparait environ 38 fois dans le Coran. En 67:2, Dieu a cree la mort et la vie pour eprouver lequel d'entre vous est le meilleur en oeuvres. En 21:35, toute ame goutera la mort et Nous vous eprouverons par le mal et le bien comme tentation. Le Coran montre que l'epreuve est universelle — elle touche chaque ame et revele la qualite de la foi. L'epreuve par le mal comme par le bien est un test de la constance.",
              axe5_frequence: "Pour la mission du khalifa, l'epreuve est le test de la mission. Le khalifa est place sur terre pour etre eprouve — sa mission n'est pas confortable mais exigeante. L'epreuve revele si le khalifa tient son mandat ou le trahit. La peur, la faim, la perte sont les outils du test — celui qui endure prouve qu'il est digne de la mission. L'epreuve n'est pas un obstacle a la mission, elle est la mission elle-meme."
            },
            "Usure": {
              status: "nul",
              senses: ["user"],
              proof_ctx: "Le sens d'usure est un processus de degradation physique. Le contexte est un test de la foi par des epreuves, pas une deterioration materielle."
            }
          }
        }
      },
      // shy pos=3
      {
        word_key: "shy", position: 3, sense_chosen: "chose",
        analysis_axes: {
          sense_chosen: "chose",
          concept_chosen: "Chose/Être",
          concepts: {
            "Chose/Être": {
              status: "retenu",
              senses: ["chose", "quelque chose"],
              proof_ctx: "Le mot shay'in est un nom indefini genitif de la racine sh-y-a. Le Lane's donne : chose, toute realite qui existe ou peut etre concue. La chose est le concept le plus general — tout ce qui n'est pas le neant est chose. Ici « bi-shay'in min al-khawfi » signifie « par quelque chose de la peur » — une quantite indeterminee mais reelle de peur. L'indefini (shay'in sans article) marque que l'epreuve sera partielle, pas totale. La distinction avec le sens de volonte (nul) est claire : le mot est un nom au genitif, pas un verbe de volonte.",
              axe1_verset: "Le mot shay'in modere l'epreuve — il indique que Dieu n'eprouve pas par la totalite de la peur ou de la faim mais par « quelque chose de » chaque categorie. Le champ lexical (peur, faim, diminution) est adouci par ce mot introductif. Le verset montre que l'epreuve divine est dosee — Dieu n'ecrase pas Ses serviteurs mais les teste avec mesure. Cette moderation est elle-meme un signe de misericorde dans l'epreuve.",
              axe2_voisins: "Le verset 153 appelait a la patience — la patience suppose que l'epreuve est supportable. Le verset 155 confirme cette supportabilite par le mot shay'in : l'epreuve est partielle, pas totale. Le verset 156 montrera la reponse des endurants : « nous sommes a Dieu et a Lui nous retournerons ». La progression montre que l'epreuve mesuree appelle une reponse mesuree — la patience, pas le desespoir.",
              axe3_sourate: "La racine sh-y-a est une des racines les plus frequentes de la sourate al-Baqarah et du Coran entier. En 2:20, « Dieu est sur toute chose puissant ». En 2:106, « ne sais-tu pas que Dieu est sur toute chose puissant ? ». Le mot shay' delimite le champ du possible — Dieu peut tout et Il eprouve par une partie de ce tout. La sourate utilise shay' pour cadrer les possibilites et les limites.",
              axe4_coherence: "La racine sh-y-a apparait environ 519 fois dans le Coran. Le mot shay' est le quantificateur universel du Coran — il couvre tout ce qui existe. En 2:155, le mot est utilise comme quantificateur partiel (bi-shay'in min = par quelque chose de) ce qui est rare. Cette construction montre que l'epreuve est calibree — Dieu ne donne pas a une ame plus qu'elle ne peut supporter (2:286).",
              axe5_frequence: "Pour la mission du khalifa, la mesure de l'epreuve est un enseignement. L'epreuve est dosee par Dieu — le khalifa n'est pas ecrase mais teste. La chose (shay') est partielle, ce qui signifie que le khalifa a toujours les ressources pour endurer. La mission est exigeante mais pas impossible — Dieu calibre l'epreuve a la capacite de celui qui la recoit."
            },
            "Volonté": {
              status: "nul",
              senses: ["vouloir"],
              proof_ctx: "Le sens de volonte est un acte interieur de diriger sa volonte vers un objet. Le contexte est un nom indefini au genitif (quelque chose de), pas un verbe de volonte."
            }
          }
        }
      },
      // khw pos=5
      {
        word_key: "khw", position: 5, sense_chosen: "peur",
        analysis_axes: {
          sense_chosen: "peur",
          concept_chosen: "Crainte/Appréhension",
          concepts: {
            "Crainte/Appréhension": {
              status: "retenu",
              senses: ["peur", "craindre", "redouter", "effrayer"],
              proof_ctx: "Le mot al-khawfi est un nom defini genitif de la racine kh-w-f. Le Lane's donne : peur, crainte, apprehension face a un danger. La peur est un etat interieur qui reste dans celui qui la ressent — elle est la premiere reaction face a la menace. L'article defini (al-) generalise : la peur comme categorie d'epreuve, pas une peur specifique. La peur est placee en premiere position dans l'enumeration des epreuves — elle precede la faim et les pertes materielles, car c'est l'epreuve la plus immediate et la plus emotionnelle.",
              axe1_verset: "Le mot al-khawf est la premiere categorie d'epreuve enumeree dans le verset. L'enumeration suit un ordre logique : peur (emotion), faim (corps), diminution des biens (economie), des personnes (relations), des fruits (subsistance). La peur ouvre la serie car elle est l'emotion primordiale face au danger — c'est elle qui precede toute perte concrete. Le champ lexical montre que l'epreuve touche toutes les dimensions de l'existence humaine : emotion, corps, biens, proches, nourriture.",
              axe2_voisins: "Le verset 153 parlait de patience et de priere comme remedes. Le verset 155 enumere les epreuves contre lesquelles ces remedes sont necessaires. Le verset 156 donnera la parole des endurants face a ces epreuves. La peur est le premier obstacle que la patience doit surmonter — celui qui a peur mais reste patient a reussi l'epreuve.",
              axe3_sourate: "La racine kh-w-f apparait frequemment dans la sourate al-Baqarah. En 2:38, « pas de crainte pour eux et ils ne seront pas affliges ». En 2:62, meme formule pour les croyants sinceres. En 2:112, « pas de crainte pour eux ». La sourate oppose la peur comme epreuve (2:155) a l'absence de peur comme recompense (2:38, 62, 112). Le croyant est eprouve par la peur ici-bas mais libere de la peur dans l'au-dela.",
              axe4_coherence: "La racine kh-w-f apparait environ 124 fois dans le Coran. En 3:175, « ne les craignez pas mais craignez-Moi ». En 2:150, « ne les craignez pas mais craignez-Moi ». Le Coran oppose la crainte des creatures a la crainte de Dieu — la seule peur legitime est la peur de Dieu. La peur des epreuves en 2:155 est un test pour voir si le croyant craint Dieu plus que les epreuves.",
              axe5_frequence: "Pour la mission du khalifa, la peur est le premier obstacle a la mission. Le khalifa est eprouve par la peur pour voir s'il abandonera sa mission sous la pression. La peur est naturelle mais la depasser est la marque du khalifa fidele. Celui qui craint Dieu seul ne craint ni la faim ni la perte — la crainte de Dieu absorbe toutes les autres craintes et libere pour la mission."
            }
          }
        }
      },
      // jwa pos=6
      {
        word_key: "jwa", position: 6, sense_chosen: "faim",
        analysis_axes: {
          sense_chosen: "faim",
          concept_chosen: "Faim/Privation",
          concepts: {
            "Faim/Privation": {
              status: "retenu",
              senses: ["avoir faim", "famine", "affame"],
              proof_ctx: "Le mot al-ju'i est un nom defini genitif de la racine j-w-e. Le Lane's donne : faim, etat de manque de nourriture, disette. La faim est un etat interieur de manque qui cree un besoin urgent — elle reste dans celui qui la ressent comme un cri du corps. L'article defini (al-) generalise : la faim comme categorie d'epreuve. La faim est placee en deuxieme position apres la peur — elle touche le corps apres que la peur ait touche l'ame. La distinction avec famine est que le mot shay'in (quelque chose de) modere l'intensite — il ne s'agit pas d'une famine totale mais d'un manque partiel.",
              axe1_verset: "Le mot al-ju' est la deuxieme categorie d'epreuve. Apres la peur (emotion), la faim touche le corps physique. L'enumeration descend du psychologique au physiologique puis a l'economique (biens) et au social (personnes) et au vital (fruits). La faim est liee aux fruits (thamarat) qui ferment l'enumeration — quand les fruits diminuent, la faim augmente. Le verset montre que les categories d'epreuves sont interconnectees.",
              axe2_voisins: "Le verset 153 donnait la methode (patience + priere) avant d'enumerer les epreuves. Le verset 155 montre que la faim fait partie des epreuves annoncees. Le verset 156 montre que les endurants repondent par « nous sommes a Dieu » — meme affames, ils restent soumis. La faim est une epreuve du corps qui teste la soumission de l'ame.",
              axe3_sourate: "La racine j-w-e apparait dans la sourate al-Baqarah en 2:155 et elle est aussi evoquee en 2:126 ou Ibrahim demande a Dieu de nourrir les habitants de La Mecque des fruits. En 106:4, Dieu les a nourris contre la faim. La sourate montre que Dieu est a la fois celui qui eprouve par la faim et celui qui nourrit — l'epreuve n'est pas un abandon mais un test.",
              axe4_coherence: "La racine j-w-e apparait environ 4 fois dans le Coran. En 106:4, Dieu les a nourris contre la faim et les a rassures contre la peur. Le verset 106:4 est le miroir de 2:155 — la faim et la peur y sont mentionnees ensemble comme des maux dont Dieu delivre. Le Coran montre que Dieu eprouve par la faim et delivre de la faim — les deux actes sont divins.",
              axe5_frequence: "Pour la mission du khalifa, la faim est une epreuve de la dependance. Le khalifa affame decouvre sa dependance totale envers Dieu — il ne peut pas se nourrir seul. La faim revele que le khalifa n'est pas autosuffisant. Celui qui endure la faim avec patience reconnait que la subsistance vient de Dieu. La faim est un rappel de l'humilite fondamentale de la condition humaine."
            }
          }
        }
      },
      // nqs pos=7
      {
        word_key: "nqs", position: 7, sense_chosen: "diminution",
        analysis_axes: {
          sense_chosen: "diminution",
          concept_chosen: "Diminution/Manque",
          concepts: {
            "Diminution/Manque": {
              status: "retenu",
              senses: ["diminuer", "manquer", "etre deficient", "reduire", "perte"],
              proof_ctx: "Le mot naqsin est un nom indefini genitif de la racine n-q-s. Le Lane's donne : diminution, reduction, fait de devenir moins. La diminution est un processus qui retire du plein — elle est directionnelle vers le moins. L'indefini (naqsin sans article) marque que la diminution sera partielle. Le mot naqsin regit trois complements : les biens (al-amwal), les personnes (al-anfus) et les fruits (ath-thamarat). La diminution touche donc trois domaines — l'economie, les relations et la subsistance.",
              axe1_verset: "Le mot naqsin est le pivot de la deuxieme partie de l'enumeration. Il gouverne trois complements qui eleargissent le champ de l'epreuve : biens, personnes, fruits. Le verset passe de l'epreuve emotionnelle (peur) et corporelle (faim) a l'epreuve materielle et sociale (diminution des biens, des proches, des recoltes). La diminution est un processus graduel — pas une destruction soudaine mais une erosion progressive qui teste l'endurance.",
              axe2_voisins: "Le verset 154 interdisait de dire que les martyrs sont morts — la diminution des personnes (anfus) en 2:155 fait echo a cette interdiction. Les personnes qui partent ne sont pas perdues — elles sont vivantes aupres de Dieu. Le verset 156 montrera la reponse des endurants face a la perte : le retour a Dieu. La diminution n'est pas definitive dans la perspective coranique.",
              axe3_sourate: "La racine n-q-s apparait en 2:155 et en 13:41 dans le Coran. En 2:155, la diminution est une epreuve annoncee. En 13:41, Dieu diminue la terre par ses extremites. La sourate al-Baqarah presente la diminution comme un outil d'epreuve divine — Dieu retire pour tester la reaction des croyants. La diminution est un processus controle, pas un chaos aleatoire.",
              axe4_coherence: "La racine n-q-s apparait environ 8 fois dans le Coran. En 7:130, Dieu a eprouve le peuple de Pharaon par la diminution des fruits. En 2:155, la meme epreuve est annoncee pour les croyants. Le Coran montre que la diminution est un outil d'epreuve transversal — elle touche les incroyants comme les croyants, mais la reponse attendue differe. Les croyants endurent, les incroyants se revoltent.",
              axe5_frequence: "Pour la mission du khalifa, la diminution teste l'attachement aux biens. Le khalifa qui perd des biens, des proches et des recoltes decouvre si sa mission depend de ces choses ou de Dieu seul. La diminution depouillee le khalifa de ce qui n'est pas essentiel — elle le ramene a l'essentiel de sa mission : servir Dieu. Celui qui endure la diminution avec patience prouve que sa mission ne depend pas de la prosperite materielle."
            }
          }
        }
      },
      // mlw pos=9
      {
        word_key: "mlw", position: 9, sense_chosen: "biens",
        analysis_axes: {
          sense_chosen: "biens",
          concept_chosen: "Plénitude/Remplissage",
          concepts: {
            "Plénitude/Remplissage": {
              status: "retenu",
              senses: ["remplir", "etre plein", "satiete"],
              proof_ctx: "Le mot al-amwali est un nom defini genitif pluriel de la racine m-l-w. Le Lane's donne : biens, richesses, proprietes, ce que l'on possede. Le sens de plenitude (remplir) est le sens premier de la racine — les biens sont ce qui remplit les mains et les coffres. Le pluriel defini (al-amwal) generalise : les biens en tant que categorie. Les biens sont le premier des trois complements de naqsin — la diminution des biens touche la securite economique. La distinction avec l'assemblee (nul) est claire : le contexte est la perte de possessions materielles.",
              axe1_verset: "Le mot al-amwal est le premier complement de naqsin (diminution). L'enumeration des trois pertes (biens, personnes, fruits) couvre les trois domaines de la vie : l'economie, les relations, la subsistance. Les biens sont en premiere position car ils sont la base materielle — sans biens, la vie devient precaire. Le verset montre que l'epreuve touche les fondements de la securite humaine. La diminution des biens est une epreuve de detachement — le croyant doit rester patient malgre la perte de ce qu'il possede.",
              axe2_voisins: "Le verset 153 preparait les croyants a l'epreuve par la patience et la priere. Le verset 155 precise ce que les croyants vont perdre — les biens sont la premiere perte concrete. Le verset 156 montre que les endurants repondent par la soumission. La perte des biens est une epreuve materielle qui teste la capacite du croyant a rester patient sans ses possessions.",
              axe3_sourate: "La racine m-l-w sous la forme amwal apparait dans la sourate al-Baqarah en contexte de depense et de sacrifice. En 2:188, « ne mangez pas vos biens entre vous par le faux ». En 2:195, « depensez dans le chemin de Dieu ». En 2:155, les biens sont l'objet de la diminution. La sourate montre que les biens doivent etre utilises dans le chemin de Dieu — leur perte est une epreuve qui pousse a la generosite et au detachement.",
              axe4_coherence: "Le mot amwal (pluriel de mal) apparait environ 86 fois dans le Coran. En 9:20, « ceux qui ont emigre et lutte avec leurs biens et leurs personnes ». En 61:11, « croyez en Dieu et luttez avec vos biens et vos personnes ». Le Coran lie systematiquement biens et personnes dans le sacrifice — le verset 2:155 les lie aussi dans l'epreuve. Biens et personnes sont les deux choses les plus precieuses pour l'homme, et l'epreuve les touche ensemble.",
              axe5_frequence: "Pour la mission du khalifa, les biens sont les moyens de la mission. Le khalifa utilise ses biens pour servir — les perdre teste sa capacite a continuer la mission sans moyens materiels. La diminution des biens force le khalifa a compter sur Dieu plutot que sur ses ressources. Celui qui endure la perte des biens avec patience montre que sa mission repose sur la foi, pas sur la richesse."
            },
            "Assemblée/Groupe": {
              status: "nul",
              senses: ["assemblee", "notables (mala)"],
              proof_ctx: "Le sens d'assemblee est hors sujet — le mot est au pluriel amwal (biens) dans un contexte de perte materielle, pas de reunion de notables."
            }
          }
        }
      },
      // nfs pos=10
      {
        word_key: "nfs", position: 10, sense_chosen: "personnes",
        analysis_axes: {
          sense_chosen: "personnes",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["ame", "soi-meme", "personne", "esprit", "desir"],
              proof_ctx: "Le mot al-anfusi est un nom defini genitif pluriel de la racine n-f-s. Le Lane's donne : ame, personne, soi-meme. L'ame est la realite interieure de l'etre vivant — ce qui fait qu'il est lui-meme. Le pluriel (anfus) designe les personnes, les proches. Ici la diminution des anfus (personnes) signifie la perte de proches — par la mort, le depart ou l'absence. La distinction avec le souffle (nul) est claire : le contexte est la perte de proches, pas la respiration physique.",
              axe1_verset: "Le mot al-anfus est le deuxieme complement de naqsin (diminution). Apres les biens (economie), les personnes (relations). La diminution des personnes touche la dimension sociale et affective — perdre des proches est l'epreuve la plus douloureuse pour le coeur. Le verset enumere les pertes du moins intime au plus intime : biens (exterieurs), personnes (proches), fruits (subsistance). Les personnes occupent la position centrale, entre les biens materiels et les fruits vitaux.",
              axe2_voisins: "Le verset 154 disait : « ne dites pas de ceux qui sont tues dans le chemin de Dieu : ils sont morts — non, ils sont vivants ». Le verset 155 parle de la diminution des personnes — cette diminution est relativisee par le verset 154 qui affirme que les morts dans le chemin de Dieu sont vivants. La perte des personnes est reelle dans le monde visible mais illusoire dans la realite divine.",
              axe3_sourate: "La racine n-f-s est une des racines les plus frequentes de la sourate al-Baqarah. En 2:48, « aucune ame ne portera pour une autre ». En 2:233, « aucune ame n'est chargee au-dela de sa capacite ». En 2:286, « Dieu ne charge une ame que de ce qu'elle peut porter ». La sourate encadre la notion d'ame par la justice divine — chaque ame est testee selon sa capacite. La diminution des personnes en 2:155 est donc calibree.",
              axe4_coherence: "La racine n-f-s apparait environ 298 fois dans le Coran. En 9:20 et 61:11, les biens et les personnes (amwal et anfus) sont lies dans le sacrifice. En 2:155, ils sont lies dans l'epreuve. Le Coran montre que le sacrifice des biens et des personnes est le test ultime de la foi — celui qui est pret a perdre les deux pour Dieu a passe l'epreuve supreme.",
              axe5_frequence: "Pour la mission du khalifa, les personnes sont les compagnons de la mission. Perdre des proches isole le khalifa — la mission devient solitaire. Cette solitude est une epreuve qui teste la dependance du khalifa envers Dieu seul. Celui qui endure la perte des proches avec patience decouvre que Dieu est le compagnon ultime. La mission du khalifa ne depend pas du nombre des allies mais de la qualite de la relation avec Dieu."
            },
            "Souffle/Vie": {
              status: "nul",
              senses: ["souffle", "respirer", "soulagement"],
              proof_ctx: "Le sens de souffle est un mouvement physique de l'air. Le contexte est la perte de proches (anfus au pluriel), pas la respiration."
            }
          }
        }
      },
      // thm pos=11
      {
        word_key: "thm", position: 11, sense_chosen: "fruits",
        analysis_axes: {
          sense_chosen: "fruits",
          concept_chosen: "Fruit/Produit",
          concepts: {
            "Fruit/Produit": {
              status: "retenu",
              senses: ["fruit", "produit", "resultat", "richesse (thamara)", "fructifier"],
              proof_ctx: "Le mot ath-thamarati est un nom defini genitif pluriel de la racine th-m-r. Le Lane's donne : fruit, produit de la terre, recolte. Le fruit est ce que l'arbre ou la terre produit apres un cycle de croissance — il est le resultat permanent d'un processus. Le pluriel defini (ath-thamarat) generalise : tous les fruits et recoltes. Les fruits ferment l'enumeration des trois pertes (biens, personnes, fruits) car ils touchent la subsistance la plus fondamentale — ce que la terre produit pour nourrir.",
              axe1_verset: "Le mot ath-thamarat est le troisieme et dernier complement de naqsin (diminution). L'enumeration se clot par les fruits — la subsistance la plus basique. Apres les biens (richesse) et les personnes (proches), les fruits (nourriture). Le verset montre que l'epreuve touche tout : la richesse, les liens et la nourriture. Les fruits sont lies a la faim (ju') mentionnee plus haut — la diminution des fruits cause la faim. Le verset forme un cercle : faim → diminution des fruits → faim.",
              axe2_voisins: "Le verset 153 preparait a l'epreuve. Le verset 155 enumere les epreuves dont les fruits sont la derniere categorie. Le verset 156 donnera la reponse des endurants. Les fruits representent l'espoir de la recolte — leur diminution est la perte de l'espoir materiel. Mais le verset 157 promet les benedictions et la misericorde de Dieu — une recolte spirituelle qui remplace la recolte materielle perdue.",
              axe3_sourate: "La racine th-m-r apparait dans la sourate al-Baqarah en 2:22, « Il fait sortir pour vous des fruits comme subsistance ». En 2:126, Ibrahim demande a Dieu de nourrir les habitants des fruits. En 2:155, les fruits sont l'objet de la diminution. La sourate montre que Dieu est a la fois le pourvoyeur des fruits (2:22, 126) et celui qui les diminue comme epreuve (2:155). Les deux actes sont divins et complementaires.",
              axe4_coherence: "La racine th-m-r apparait environ 24 fois dans le Coran. En 14:37, Ibrahim demande a Dieu de nourrir sa famille des fruits. En 6:141, Dieu a fait pousser des jardins aux fruits varies. En 2:155, les fruits sont diminues comme epreuve. Le Coran montre que les fruits sont un don de Dieu — leur diminution est un rappel que le don peut etre retire. La gratitude pour les fruits est la reponse juste au don, la patience est la reponse juste a la perte.",
              axe5_frequence: "Pour la mission du khalifa, les fruits sont le resultat visible de la mission. Le khalifa plante et attend les fruits — la diminution des fruits signifie que le resultat visible de la mission tarde ou disparait. Cette epreuve teste la perseverance — le khalifa continue-t-il sa mission meme quand les resultats ne sont pas visibles ? Celui qui endure la perte des fruits avec patience sait que la vraie recolte est aupres de Dieu."
            }
          }
        }
      },
      // bshr pos=12
      {
        word_key: "bshr", position: 12, sense_chosen: "annoncer une bonne nouvelle",
        analysis_axes: {
          sense_chosen: "annoncer une bonne nouvelle",
          concept_chosen: "Annonce/Réjouissance",
          concepts: {
            "Annonce/Réjouissance": {
              status: "retenu",
              senses: ["annoncer une bonne nouvelle", "rejouir", "beau visage"],
              proof_ctx: "Le verbe bashshir est un imperatif 2MS de la forme II de la racine b-sh-r. Le Lane's donne : annoncer une bonne nouvelle, rejouir par une annonce, faire briller le visage de joie. La forme II intensifie l'action — la bonne annonce est active, deliberee et joyeuse. L'imperatif est adresse au Prophete : « annonce ! ». La distinction avec le sens de peau (nul) est claire : le mot est un verbe imperatif, pas un nom anatomique. La distinction avec « etre humain » (nul) est egalement claire : le contexte est une annonce, pas une designation d'espece.",
              axe1_verset: "Le verbe bashshir marque la charniere du verset — apres l'enumeration des epreuves (peur, faim, diminution), le verset bascule vers la bonne nouvelle. Ce basculement est saisissant : au milieu des pertes, l'ordre est d'annoncer la joie. Le destinataire de la bonne annonce est « les endurants » (as-sabirina) — ceux qui patientent. Le verset construit un paradoxe : l'epreuve est le chemin vers la bonne nouvelle. Pas de bonne annonce sans epreuve, pas d'epreuve sans bonne annonce.",
              axe2_voisins: "Le verset 153 donnait les outils (patience et priere). Le verset 155 annonce les epreuves et conclut par la bonne nouvelle aux endurants. Le verset 156 precisera qui sont ces endurants : ceux qui disent « nous sommes a Dieu ». Le verset 157 donnera le contenu de la bonne nouvelle : les benedictions et la misericorde de Dieu. La bonne annonce est le pont entre l'epreuve et la recompense.",
              axe3_sourate: "La racine b-sh-r apparait dans la sourate al-Baqarah en 2:25, « annonce la bonne nouvelle a ceux qui croient ». En 2:97, Djibril est l'ange de la bonne nouvelle. En 2:155, la bonne nouvelle est reservee aux endurants. La sourate utilise la bonne annonce comme recompense — elle est donnee aux croyants (2:25), aux endurants (2:155) et par l'intermediaire de l'ange (2:97). La bonne annonce est un privilege de ceux qui endurent l'epreuve.",
              axe4_coherence: "La racine b-sh-r apparait environ 123 fois dans le Coran. Le verbe bashshir a l'imperatif apparait en 2:155, 3:21, 4:138, 9:3, 9:34. L'expression « bashshir as-sabirina » (annonce la bonne nouvelle aux endurants) est unique a 2:155 — ailleurs la bonne annonce est donnee aux croyants en general. Ce verset distingue les endurants comme beneficiaires specifiques de la bonne annonce, ce qui montre le statut eleve de la patience dans l'echelle des vertus coraniques.",
              axe5_frequence: "Pour la mission du khalifa, la bonne annonce est la motivation de la mission. Le khalifa endure les epreuves parce qu'il sait que la bonne nouvelle l'attend. La bonne annonce transforme l'epreuve en investissement — ce qui est perdu ici-bas est retrouve en mieux aupres de Dieu. Le khalifa qui annonce la bonne nouvelle aux autres est aussi celui qui la recoit — la mission de transmettre la bonne nouvelle est elle-meme la bonne nouvelle."
            },
            "Surface/Contact": {
              status: "nul",
              senses: ["peau", "contact peau a peau", "peler"],
              proof_ctx: "Le sens de surface et de contact physique est hors sujet — le mot est un verbe imperatif signifiant annoncer une bonne nouvelle, pas un nom anatomique."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["etre humain"],
              proof_ctx: "Le sens d'etre humain est hors sujet — le mot est un verbe imperatif de la forme II, pas un nom designant l'espece humaine."
            }
          }
        }
      },
      // sbr pos=13
      {
        word_key: "sbr", position: 13, sense_chosen: "patienter",
        analysis_axes: {
          sense_chosen: "patienter",
          concept_chosen: "Patience/Endurance",
          concepts: {
            "Patience/Endurance": {
              status: "retenu",
              senses: ["patienter", "endurer", "patience", "retenir"],
              proof_ctx: "Le mot as-sabirina est un participe actif pluriel accusatif de la racine s-b-r. Le Lane's donne : patienter, endurer, supporter sans flechir. La patience est un acte interieur de resistance face a l'epreuve — elle est permanente chez celui qui la pratique. Le participe actif (sabirina) indique un etat durable, pas une reaction ponctuelle — les endurants sont ceux dont la patience est une qualite constitutive. L'accusatif indique qu'ils sont l'objet indirect de la bonne annonce (bashshir). La distinction avec « emprisonner » (nul) est claire : le contexte est la patience spirituelle, pas l'incarceration.",
              axe1_verset: "Le mot as-sabirina ferme le verset et donne sa conclusion. Toute l'enumeration des epreuves (peur, faim, diminution des biens, des personnes, des fruits) converge vers un seul point : les endurants recoivent la bonne nouvelle. Le participe actif montre que la patience n'est pas une reaction momentanee mais un etat permanent. Le verset construit une equation : epreuve + patience = bonne nouvelle. Les endurants sont ceux qui ont integre la patience comme mode d'etre face aux epreuves.",
              axe2_voisins: "Le verset 153 ordonnait : « cherchez l'aide par la patience et la priere ». Le verset 155 nomme ceux qui pratiquent cette patience : les endurants (as-sabirina). Le verset 156 precisera leur parole : « nous sommes a Dieu et a Lui nous retournerons ». Le verset 157 donnera leur recompense : les benedictions et la misericorde. Les versets 153-157 forment un arc complet : ordre de patience → epreuves → endurants → parole des endurants → recompense.",
              axe3_sourate: "La racine s-b-r est une racine structurante de la sourate al-Baqarah. En 2:45, « cherchez l'aide par la patience ». En 2:153, « cherchez l'aide par la patience et la priere ». En 2:155, les endurants recoivent la bonne nouvelle. En 2:177, les patients dans l'adversite sont les veridiques. La sourate construit progressivement la notion de patience — elle commence par un ordre general (2:45), le repete avec la priere (2:153), annonce les epreuves et recompense les endurants (2:155), puis definit la patience comme critere de veracite (2:177).",
              axe4_coherence: "La racine s-b-r apparait environ 103 fois dans le Coran. En 39:10, « les endurants recevront leur recompense sans limite ». En 3:200, « endurez et rivalisez de patience ». En 2:155, les endurants sont les destinataires de la bonne annonce. Le Coran fait de la patience la vertu cardinale — elle est la reponse universelle a l'epreuve et la condition de la recompense. La patience est la qualite la plus recompensee dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la patience est la vertu fondamentale de la mission. Le khalifa endure les epreuves parce qu'il sait que sa mission est plus grande que ses pertes. La patience n'est pas passive — c'est une resistance active face aux epreuves. Le khalifa endurant continue sa mission malgre la peur, la faim, la perte des biens, des proches et des fruits. La patience est la preuve que le khalifa tient son mandat — celui qui abandonne sous l'epreuve a trahi sa mission."
            },
            "Sens isolé/Emprisonner": {
              status: "nul",
              senses: ["emprisonner"],
              proof_ctx: "Le sens d'emprisonnement est un usage physique de la racine. Le contexte est la patience spirituelle face aux epreuves, pas l'incarceration."
            },
            "Lieu/Géographie": {
              status: "nul",
              senses: ["sommet de montagne"],
              proof_ctx: "Le sens geographique est hors sujet — le contexte est la patience comme vertu spirituelle, pas un lieu physique."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// INSERTION verse_word_analyses + UPDATE verse_analyses
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

  const verseIds = [162];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 155 ===\n');
  await processVerse(155);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V155 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
