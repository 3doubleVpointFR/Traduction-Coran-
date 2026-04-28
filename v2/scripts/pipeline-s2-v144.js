const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 144
// verse_id=151, analysis_id=511
// "Certes Nous voyons le retournement de ton visage vers
//  le ciel. Nous te tournerons donc vers une direction qui
//  te plait. Tourne ton visage vers la Mosquee sacree. Et
//  ou que vous soyez, tournez vos visages dans sa direction.
//  Ceux a qui le Livre a ete donne savent bien que c'est la
//  verite venant de leur Seigneur. Et Dieu n'est pas
//  inattentif a ce qu'ils font."
// =====================================================

const verseData = {
  144: {
    verse_id: 151,
    analysis_id: 511,
    translation_arab: "Certes Nous voyons le retournement de ton visage vers le ciel. Nous te tournerons donc vers une direction qui te satisfait. Tourne ton visage du cote de la Mosquee sacree. Et ou que vous soyez, tournez vos visages dans sa direction. Ceux a qui le Livre a ete donne savent que c'est la verite venant de leur Seigneur. Et Dieu n'est pas inattentif a ce qu'ils font.",
    full_translation: "Certes, Nous te voyons tourner le visage en direction du ciel. Eh bien Nous te tournerons vers une direction qui te plaira. Tourne donc ton visage vers la Mosquee sacree. Ou que vous soyez, tournez-y vos visages. Certes, ceux a qui le Livre a ete donne savent bien que c'est la Verite venant de leur Seigneur. Et Allah n'est pas inattentif a ce qu'ils font.",
    translation_explanation: `§DEMARCHE§
Le verset 2:144 marque le changement de direction de priere (qibla). Il s'ouvre par une adresse divine au Prophete, puis elargit l'ordre a tous les croyants, et se conclut par une attestation des gens du Livre et un avertissement divin.

Le verbe **nara** est un inaccompli 1P de la racine r-y-a. Le Lane's donne : voir, percevoir par les yeux ou par l'esprit. L'inaccompli marque une action continue — Nous voyons actuellement, en ce moment. Le « Nous » est le pluriel de majeste divine. Le verbe **taqalluba** est un masdar de la forme V de la racine q-l-b. Le Lane's donne : retourner, se retourner, changer d'etat. La forme V (tafa''ala) indique une action reflexive — le retournement du visage par le Prophete lui-meme, un mouvement repete de va-et-vient. Le mot **wajhuka** est un nom masculin singulier de la racine w-j-h avec pronom 2MS. Le Lane's donne : visage, face, direction. Le visage est la partie du corps qui montre la direction du regard et de l'intention. « Ton visage » designe le Prophete directement. Le mot **as-sama'i** est un nom feminin singulier defini genitif de la racine s-m-w. Le Lane's donne : ciel, ce qui est au-dessus. Le ciel est la voute celeste vers laquelle le Prophete levait le regard en attente de la revelation. Le verbe **lanuwalliyannaka** est un inaccompli 1P energique de la forme II de la racine w-l-y. Le Lane's donne : tourner vers, confier a, charger de. La forme II (fa''ala) est causative — faire tourner quelqu'un. Le lam et le nun de corroboration (la-...-anna) renforcent la promesse divine — c'est certain et definitif. Le mot **qiblatan** est un nom feminin singulier indefini accusatif de la racine q-b-l. Le Lane's donne : direction vers laquelle on se tourne pour prier. La qibla est la direction de la priere. L'indefini (sans article) marque qu'il s'agit d'une direction nouvelle. Le verbe **tardaha** est un inaccompli 2MS de la racine r-d-y. Le Lane's donne : agreer, etre satisfait. L'inaccompli marque que la satisfaction sera continue — une direction qui te satisfait de maniere permanente. Le verbe **walli** est un imperatif 2MS de la forme II de la racine w-l-y. Le Lane's donne : tourner vers, diriger. L'imperatif marque un ordre direct et immediat — tourne maintenant. Le mot **wajhaka** est le visage avec pronom 2MS — ton visage, adresse directe au Prophete. Le mot **shatra** est un nom masculin singulier accusatif de la racine sh-t-r. Le Lane's donne : cote, direction, moitie. Shatrah designe le cote vers lequel on se tourne — la direction. Le mot **al-masjidi** est un nom masculin singulier defini genitif de la racine s-j-d. Le Lane's donne : lieu de prosternation, mosquee. Le masjid est le lieu ou l'on se prosterne. Le mot **al-harami** est un adjectif masculin singulier defini genitif de la racine h-r-m. Le Lane's donne : sacre, interdit, inviolable. Le haram est ce qui est mis hors d'atteinte — le Masjid al-Haram est le sanctuaire sacre de La Mecque. Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne : etre. Kuntum avec l'adverbe haythu (ou que) generalise l'ordre — ou que vous soyez, dans n'importe quel lieu. Le verbe **wallu** est un imperatif 2MP de la forme II de la racine w-l-y — meme racine que walli mais au pluriel. L'ordre s'etend maintenant a tous les croyants. Le mot **wujuhakum** est le pluriel de wajh avec pronom 2MP — vos visages. L'ordre passe du singulier (tourne ton visage) au pluriel (tournez vos visages). Le mot **shatrahu** est le meme shatra avec pronom 3MS — dans sa direction (celle de la Mosquee sacree). Le verbe **utu** est un accompli passif 3MP de la racine a-w-t. Le Lane's donne : recevoir, se voir donner. Le passif indique que le Livre leur a ete donne — ils n'ont pas choisi de le recevoir. Le mot **al-kitaba** est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecriture revelee. Le Livre designe les ecritures anterieures (Torah, Evangile). Le verbe **laya'lamuna** est un inaccompli 3MP de la racine '-l-m avec lam insistance. Le Lane's donne : savoir, connaitre. Le lam + ya'lamuna insiste : ils savent certainement, sans aucun doute. Leur savoir est un fait etabli. Le mot **al-haqq** est un nom masculin singulier defini accusatif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est etabli. La verite ici est le changement de qibla — c'est un fait divin, pas une invention humaine. Le mot **rabbihim** est un nom masculin singulier genitif de la racine r-b-b avec pronom 3MP. Le Lane's donne : seigneur, maitre, celui qui eleve. La verite vient de leur Seigneur — elle a une source divine reconnue. Le nom **Allahu** est le nom propre de la divinite au nominatif. Le Lane's donne : Dieu, la divinite unique. Dieu est le sujet de la derniere proposition — c'est Lui qui n'est pas inattentif. Le mot **bighafilin** est une preposition + nom d'agent de la racine gh-f-l. Le Lane's donne : etre inattentif, negliger, etre insouciant. La negation (ma...bighafil) affirme que Dieu n'est PAS inattentif — Il voit tout ce qu'ils font. Le verbe **ya'maluna** est un inaccompli 3MP de la racine '-m-l. Le Lane's donne : faire, agir, oeuvrer. L'inaccompli marque une action continue — ce qu'ils font de maniere habituelle. Dieu surveille leurs actes en permanence.

§JUSTIFICATION§
**voyons** — Le sens retenu est « voir ». Le verbe nara decrit la vision divine du retournement du visage du Prophete. L'alternative « penser/opiner » est ecartee car le contexte est la perception directe, pas une reflexion.

**retournement** — Le sens retenu est « retourner ». Le masdar taqallub decrit le mouvement repete du visage du Prophete vers le ciel. L'alternative « coeur » est ecartee car le mot est ici un masdar verbal (action de se retourner), pas le nom d'organe.

**ton visage** — Le sens retenu est « visage ». Le mot wajhuka designe le visage physique du Prophete qui se tourne vers le ciel. L'alternative « direction » est ecartee car le contexte parle du visage physique.

**ciel** — Le sens retenu est « ciel ». Le mot as-sama'i designe la voute celeste vers laquelle le Prophete levait le regard. L'alternative « hauteur/nom » est ecartee car le contexte est spatial.

**tournerons** — Le sens retenu est « tourner ». Le verbe lanuwalliyannaka signifie « Nous te tournerons vers ». L'alternative « proteger/etre proche » est ecartee car la forme II causative ici signifie faire tourner vers une direction.

**direction** — Le sens retenu est « direction ». Le mot qibla designe la direction de priere. L'alternative « recevoir/accepter » est ecartee car le contexte est la direction de priere, pas la reception.

**satisfait** — Le sens retenu est « agreer ». Le verbe tardaha signifie une direction qui te plait, qui te satisfait. C'est le seul sens de cette racine.

**tourne** — Le sens retenu est « tourner ». L'imperatif walli ordonne au Prophete de tourner son visage. Meme analyse que pour lanuwalliyannaka.

**ton visage (2)** — Le sens retenu est « visage ». Meme mot wajh mais a l'imperatif — l'ordre de tourner son visage.

**cote** — Le sens retenu est « cote/direction ». Le mot shatra designe le cote vers lequel on se tourne. L'alternative « moitie » est ecartee car le contexte est directionnel.

**mosquee** — Le sens retenu est « lieu de prosternation ». Le mot al-masjid designe le lieu ou l'on se prosterne. Le sens concret de prosternation est premier — la mosquee est le lieu de la prosternation.

**sacre** — Le sens retenu est « sacre/interdit ». Le mot al-haram qualifie le sanctuaire comme espace inviolable. C'est le sens principal de cette racine.

**soyez** — Le sens retenu est « etre ». Le verbe kuntum est un verbe d'existence incomplet qui porte le temps. L'alternative « lieu/etat » est ecartee car kana est ici un verbe incomplet.

**tournez** — Le sens retenu est « tourner ». L'imperatif pluriel wallu etend l'ordre a tous les croyants.

**vos visages** — Le sens retenu est « visage ». Le pluriel wujuhakum montre l'extension de l'ordre du singulier au pluriel.

**cote (2)** — Le sens retenu est « cote/direction ». Meme mot shatra avec pronom — dans sa direction.

**donne** — Le sens retenu est « donner ». Le passif utu marque que le Livre a ete donne passivement aux gens du Livre. L'alternative « se refugier » est ecartee car le contexte est le don du Livre.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitab designe les ecritures revelees. L'alternative « ecrire » est ecartee car le mot est un nom defini, pas un verbe.

**savent** — Le sens retenu est « savoir ». Le verbe laya'lamuna avec le lam d'insistance affirme que les gens du Livre savent avec certitude. L'alternative « monde » est ecartee car le mot est un verbe.

**verite** — Le sens retenu est « verite ». Le mot al-haqq designe la realite objective du changement de qibla. L'alternative « devoir/obligation » est ecartee car le contexte est la verite factuelle.

**Seigneur** — Le sens retenu est « seigneur ». Le mot rabbihim designe Dieu comme le Seigneur qui eleve et gouverne. L'alternative « croissance » est ecartee car le contexte est l'autorite divine.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah est le nom propre de la divinite. Meme analyse que pour les autres occurrences.

**inattentif** — Le sens retenu est « inattentif/insouciant ». Le mot bighafil avec la negation signifie que Dieu n'est PAS inattentif. L'alternative « pardonner » est ecartee car le contexte est la vigilance divine, pas le pardon.

**font** — Le sens retenu est « faire/agir ». Le verbe ya'maluna decrit les actes continus des gens. L'alternative « gouverneur » est ecartee car le mot est un verbe.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere tres similaire. Hamidullah donne « Mosquee sacree » la ou nous donnons « Mosquee sacree » egalement. La seule difference notable est le mot « shatrah » que certains traduisent par « en direction de » et nous par « du cote de ». Les deux rendent le meme sens — shatrah designe le cote, la direction vers laquelle on se tourne. Notre choix de « du cote de » est plus proche de l'etymologie de la racine sh-t-r qui porte le sens de moitie/cote. Le sens global du verset est identique dans toutes les traductions.`,
    segments: [
      { fr: "certes", phon: "qad", arabic: "\u0642\u064e\u062f\u0652", is_particle: true, position: 0 },
      { fr: "Nous voyons", pos: "verbe", phon: "nara", arabic: "\u0646\u064e\u0631\u064e\u0649\u0670", word_key: "rya", is_particle: false, sense_retenu: "voir", position: 1 },
      { fr: "le retournement", pos: "nom", phon: "taqalluba", arabic: "\u062a\u064e\u0642\u064e\u0644\u0651\u064f\u0628\u064e", word_key: "qlb", is_particle: false, sense_retenu: "retourner", position: 2 },
      { fr: "de ton visage", pos: "nom", phon: "wajhika", arabic: "\u0648\u064e\u062c\u0652\u0647\u0650\u0643\u064e", word_key: "wjh", is_particle: false, sense_retenu: "visage", position: 3 },
      { fr: "vers le ciel", pos: "nom", phon: "fi as-sama'i", arabic: "\u0641\u0650\u064a \u0671\u0644\u0633\u0651\u064e\u0645\u064e\u0627\u0653\u0621\u0650", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 4 },
      { fr: "Nous te tournerons", pos: "verbe", phon: "falanuwalliyannaka", arabic: "\u0641\u064e\u0644\u064e\u0646\u064f\u0648\u064e\u0644\u0651\u0650\u064a\u064e\u0646\u0651\u064e\u0643\u064e", word_key: "wly", is_particle: false, sense_retenu: "tourner", position: 5 },
      { fr: "vers une direction", pos: "nom", phon: "qiblatan", arabic: "\u0642\u0650\u0628\u0652\u0644\u064e\u0629\u064b", word_key: "qbl", is_particle: false, sense_retenu: "direction", position: 6 },
      { fr: "qui te satisfait", pos: "verbe", phon: "tardaha", arabic: "\u062a\u064e\u0631\u0652\u0636\u064e\u0649\u0670\u0647\u064e\u0627", word_key: "rdy", is_particle: false, sense_retenu: "agreer", position: 7 },
      { fr: "tourne", pos: "verbe", phon: "fawalli", arabic: "\u0641\u064e\u0648\u064e\u0644\u0651\u0650", word_key: "wly", is_particle: false, sense_retenu: "tourner", position: 8 },
      { fr: "ton visage", pos: "nom", phon: "wajhaka", arabic: "\u0648\u064e\u062c\u0652\u0647\u064e\u0643\u064e", word_key: "wjh", is_particle: false, sense_retenu: "visage", position: 9 },
      { fr: "du cote de", pos: "nom", phon: "shatra", arabic: "\u0634\u064e\u0637\u0652\u0631\u064e", word_key: "shtr", is_particle: false, sense_retenu: "cote", position: 10 },
      { fr: "la Mosquee", pos: "nom", phon: "al-masjidi", arabic: "\u0671\u0644\u0652\u0645\u064e\u0633\u0652\u062c\u0650\u062f\u0650", word_key: "sjd", is_particle: false, sense_retenu: "lieu de prosternation", position: 11 },
      { fr: "sacree", pos: "adjectif", phon: "al-harami", arabic: "\u0671\u0644\u0652\u062d\u064e\u0631\u064e\u0627\u0645\u0650", word_key: "hrm", is_particle: false, sense_retenu: "sacre", position: 12 },
      { fr: "ou que", phon: "haythu ma", arabic: "\u062d\u064e\u064a\u0652\u062b\u064f \u0645\u064e\u0627", is_particle: true, position: 13 },
      { fr: "vous soyez", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064f\u0646\u062a\u064f\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 14 },
      { fr: "tournez", pos: "verbe", phon: "fawalluw", arabic: "\u0641\u064e\u0648\u064e\u0644\u0651\u064f\u0648\u0627\u06df", word_key: "wly", is_particle: false, sense_retenu: "tourner", position: 15 },
      { fr: "vos visages", pos: "nom", phon: "wujuhakum", arabic: "\u0648\u064f\u062c\u064f\u0648\u0647\u064e\u0643\u064f\u0645\u0652", word_key: "wjh", is_particle: false, sense_retenu: "visage", position: 16 },
      { fr: "dans sa direction", pos: "nom", phon: "shatrahu", arabic: "\u0634\u064e\u0637\u0652\u0631\u064e\u0647\u064f", word_key: "shtr", is_particle: false, sense_retenu: "cote", position: 17 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 18 },
      { fr: "ont recu", pos: "verbe", phon: "utu", arabic: "\u0623\u064f\u0648\u062a\u064f\u0648\u0627\u06df", word_key: "awt", is_particle: false, sense_retenu: "donner", position: 19 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 20 },
      { fr: "savent", pos: "verbe", phon: "laya'lamuna", arabic: "\u0644\u064e\u064a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 21 },
      { fr: "que c'est", phon: "annahu", arabic: "\u0623\u064e\u0646\u0651\u064e\u0647\u064f", is_particle: true, position: 22 },
      { fr: "la verite", pos: "nom", phon: "al-haqqu", arabic: "\u0671\u0644\u0652\u062d\u064e\u0642\u0651\u064f", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 23 },
      { fr: "de leur Seigneur", pos: "nom", phon: "rabbihim", arabic: "\u0631\u064e\u0628\u0651\u0650\u0647\u0650\u0645\u0652", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 24 },
      { fr: "et non", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 25 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 26 },
      { fr: "n'est pas inattentif", pos: "nom", phon: "bighafil", arabic: "\u0628\u0650\u063a\u064e\u0640\u0670\u0641\u0650\u0644\u064d", word_key: "ghf", is_particle: false, sense_retenu: "inattentif", position: 27 },
      { fr: "a ce que", phon: "'amma", arabic: "\u0639\u064e\u0645\u0651\u064e\u0627", is_particle: true, position: 28 },
      { fr: "ils font", pos: "verbe", phon: "ya'maluna", arabic: "\u064a\u064e\u0639\u0652\u0645\u064e\u0644\u064f\u0648\u0646\u064e", word_key: "eml", is_particle: false, sense_retenu: "faire", position: 29 }
    ],
    words: [
      // rya pos=1
      {
        word_key: "rya", position: 1, sense_chosen: "voir",
        analysis_axes: {
          sense_chosen: "voir",
          concept_chosen: "Vision/Perception",
          concepts: {
            "Vision/Perception": {
              status: "retenu",
              senses: ["voir"],
              proof_ctx: "Le verbe nara est un inaccompli 1P de la racine r-y-a. Le Lane's donne : voir, percevoir par les yeux ou par l'esprit. La vision est un acte de perception directionnelle — l'oeil recoit ce qui est devant lui. Ici Dieu voit le retournement du visage du Prophete vers le ciel. L'inaccompli marque une action continue : Dieu voit en ce moment meme. La distinction avec « penser » (nul) est que le contexte est la perception divine directe, pas une reflexion.",
              axe1_verset: "Le verbe nara ouvre le verset en posant la scene : Dieu voit le Prophete lever le regard vers le ciel. Cette vision divine est le declencheur de l'ordre qui suit — parce que Dieu voit l'attente du Prophete, Il lui accorde le changement de qibla. Le champ lexical du verset (visage, ciel, tourner, direction) tourne autour de l'orientation du regard. La vision divine est le point de depart de tout le passage.",
              axe2_voisins: "Le verset 143 parlait de la communaute du juste milieu et du temoin que le Prophete sera sur eux. Le verset 144 montre que Dieu voit l'attente du Prophete — Il repond a cette attente en changeant la qibla. Le verset 145 montrera que meme avec toutes les preuves, les gens du Livre ne suivront pas la qibla du Prophete. La vision divine est la charniere entre l'attente et la reponse.",
              axe3_sourate: "La racine r-y-a apparait dans la sourate al-Baqarah pour marquer les moments ou Dieu observe les actions humaines. En 2:96, Dieu voit ce qu'ils font. En 2:110, Dieu voit ce que vous faites. Le verset 144 utilise cette racine pour montrer que Dieu observe le desir du Prophete et y repond. La vision divine est toujours suivie d'une action divine appropriee.",
              axe4_coherence: "La racine r-y-a apparait environ 328 fois dans le Coran. Le schema « Dieu voit » est recurrent — en 3:163, 49:18, 57:4. Le Coran insiste sur le fait que Dieu voit les actes exterieurs et les etats interieurs. En 2:144, Dieu voit meme le mouvement du visage — rien ne Lui echappe de l'etat interieur du Prophete.",
              axe5_frequence: "Pour la mission du khalifa, la vision divine rappelle que chaque acte est vu et observe. Le Prophete levait le regard vers le ciel avec esperance — Dieu a vu cette esperance et y a repondu. Le khalifa doit savoir que ses intentions et ses actes sont vus par Dieu, ce qui engage sa responsabilite permanente."
            },
            "Opinion/Jugement": {
              status: "nul",
              senses: ["penser"],
              proof_ctx: "Le sens d'opinion est hors sujet — le contexte est la perception divine directe du mouvement du visage, pas une reflexion ou un avis."
            },
            "Vision onirique": {
              status: "nul",
              senses: ["rever"],
              proof_ctx: "Le sens de reve est hors sujet — le contexte est la vision divine en etat de veille, pas un reve."
            }
          }
        }
      },
      // qlb pos=2
      {
        word_key: "qlb", position: 2, sense_chosen: "retourner",
        analysis_axes: {
          sense_chosen: "retourner",
          concept_chosen: "Retournement/Changement",
          concepts: {
            "Retournement/Changement": {
              status: "retenu",
              senses: ["retourner", "renverser", "transformer", "changer d'etat", "revenir"],
              proof_ctx: "Le mot taqalluba est un masdar de la forme V de la racine q-l-b. Le Lane's donne : retourner, se retourner, changer de direction. La forme V (tafa''ala) est reflexive — le Prophete retourne lui-meme son visage de maniere repetee. Le masdar designe l'action de retournement — le mouvement de va-et-vient du visage vers le ciel. La distinction avec « coeur » (probable) est que le mot est ici un masdar verbal (action de se retourner) et non le nom d'organe qalb.",
              axe1_verset: "Le mot taqallub decrit le mouvement physique du Prophete — le retournement repete de son visage vers le ciel. Ce mouvement traduit l'attente et le desir du Prophete de recevoir l'ordre de changer de qibla. Le champ lexical (visage, ciel, tourner, direction) montre que tout le verset est oriente autour du mouvement directionnel du corps et du regard.",
              axe2_voisins: "Le verset 143 parlait du changement de qibla precedent (de La Mecque vers Jerusalem) comme epreuve. Le verset 144 montre maintenant le retournement du visage du Prophete en attente du retour vers La Mecque. La racine q-l-b porte cette idee de changement et de mouvement — d'une direction a l'autre.",
              axe3_sourate: "La racine q-l-b apparait dans la sourate al-Baqarah principalement dans deux contextes : le coeur (qalb) et le retournement. En 2:7, les coeurs sont scelles. En 2:10, une maladie dans leurs coeurs. Le verset 144 utilise le sens de retournement — le changement de direction du visage, pas l'organe du coeur.",
              axe4_coherence: "La racine q-l-b apparait environ 168 fois dans le Coran. Le double sens coeur/retournement est fondamental — le coeur est l'organe qui se retourne, qui change. En 6:110, Dieu retourne leurs coeurs. En 3:144, « retournerez-vous sur vos talons ». Le retournement dans le Coran est toujours significatif — il marque un changement d'etat ou de direction.",
              axe5_frequence: "Pour la mission du khalifa, le retournement du visage montre l'aspiration du Prophete vers la bonne direction. Le khalifa doit constamment ajuster sa direction — se retourner vers ce qui est juste. Le retournement n'est pas de l'instabilite mais de la recherche active de la bonne voie."
            },
            "Coeur/Centre": {
              status: "probable",
              senses: ["coeur", "esprit", "intelligence", "milieu"],
              proof_ctx: "Le sens de coeur est un sens majeur de q-l-b. La distinction avec le retournement est que le mot ici est un masdar de la forme V (taqallub = action de se retourner) et non le nom qalb (coeur). Le contexte est le mouvement physique du visage, pas l'organe interieur. Cependant, le lien etymologique entre le coeur et le retournement reste pertinent — le coeur est l'organe qui se retourne.",
              axe1_verset: "Le mot taqallub pourrait theoriquement evoquer le coeur par son lien etymologique. Mais le contexte est explicite : c'est le visage (wajh) qui se retourne vers le ciel, pas le coeur qui change d'etat. Le masdar taqallub qualifie le mouvement du visage.",
              axe2_voisins: "Les versets voisins parlent de direction physique, pas d'etat interieur du coeur. Le contexte est directionnel et spatial.",
              axe3_sourate: "La sourate utilise qalb (coeur) dans d'autres contextes (2:7, 2:10, 2:74). Ici le masdar taqallub est different du nom qalb.",
              axe4_coherence: "Le Coran distingue les usages du masdar taqallub (mouvement) et du nom qalb (organe). En 24:44, le taqallub est le mouvement des jours et des nuits — c'est toujours un changement directionnel.",
              axe5_frequence: "Le coeur comme organe est le siege de la mission du khalifa. Mais dans ce verset, c'est le retournement — le mouvement actif de recherche — qui est en jeu."
            },
            "Sens isolé/Moule": {
              status: "nul",
              senses: ["moule"],
              proof_ctx: "Le sens de moule est hors sujet — le contexte est le retournement du visage, pas un objet physique."
            },
            "Sens isolé/Bracelet": {
              status: "nul",
              senses: ["bracelet"],
              proof_ctx: "Le sens de bracelet est hors sujet — le contexte est le retournement du visage."
            }
          }
        }
      },
      // wjh pos=3 (1st occurrence — "ton visage" vers le ciel)
      {
        word_key: "wjh", position: 3, sense_chosen: "visage",
        analysis_axes: {
          sense_chosen: "visage",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le mot wajhika est un nom masculin singulier de la racine w-j-h avec pronom 2MS. Le Lane's donne : visage, face, la partie du corps qui fait face a l'autre. Le visage est directionnel — il montre vers ou on regarde et ou on dirige son attention. Ici « wajhika fi as-sama'i » (ton visage dans le ciel) decrit le Prophete levant le regard vers le ciel. Le pronom « ka » (ton) s'adresse directement au Prophete. Le visage est la partie du corps qui exprime l'intention et la direction — tourner le visage c'est changer d'orientation.",
              axe1_verset: "Le mot wajh apparait trois fois dans le verset (pos 3, 9, 16), structurant les trois mouvements : le visage qui se retourne vers le ciel (attente), le visage qu'on doit tourner vers la Mosquee sacree (ordre au Prophete), les visages qu'on doit tourner dans cette direction (ordre a tous). La premiere occurrence montre le Prophete en attente — son visage scrute le ciel a la recherche de la reponse divine.",
              axe2_voisins: "Le verset 142 demandait « qu'est-ce qui les a detournes de leur qibla ». Le verset 144 repond en montrant le visage du Prophete qui cherche la nouvelle direction. Les versets 145-150 continueront avec le theme de la direction et du visage. Le visage est le fil conducteur de tout ce passage sur la qibla.",
              axe3_sourate: "La racine w-j-h apparait de maniere concentree dans les versets 142-150 de la sourate, formant un bloc thematique sur la qibla. En 2:112, « celui qui soumet son visage a Dieu ». La sourate utilise wajh pour lier l'orientation physique a l'orientation spirituelle.",
              axe4_coherence: "La racine w-j-h apparait environ 79 fois dans le Coran. Le visage est toujours lie a la direction et a l'intention — en 6:79, « j'ai tourne mon visage vers Celui qui a cree les cieux ». Le visage coranique n'est jamais purement physique — il porte l'intention spirituelle de celui qui se tourne.",
              axe5_frequence: "Pour la mission du khalifa, le visage represente la direction choisie. Tourner le visage vers le ciel c'est chercher la guidance divine. Le khalifa doit diriger son visage — son attention, son intention — vers la source de sa mission."
            },
            "Sens isolé/Manière": {
              status: "nul",
              senses: ["maniere"],
              proof_ctx: "Le sens de maniere est hors sujet — le contexte est le visage physique du Prophete qui se retourne."
            },
            "Sens isolé/Noble": {
              status: "nul",
              senses: ["noble"],
              proof_ctx: "Le sens de noble est hors sujet — le contexte est le visage directionnel."
            }
          }
        }
      },
      // smw pos=4
      {
        word_key: "smw", position: 4, sense_chosen: "ciel",
        analysis_axes: {
          sense_chosen: "ciel",
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["ciel", "toit", "nuage", "pluie", "celeste"],
              proof_ctx: "Le mot as-sama'i est un nom feminin singulier defini genitif de la racine s-m-w. Le Lane's donne : ciel, ce qui est au-dessus et enveloppe, la voute celeste. Le ciel est la realite exterieure au-dessus de la terre — permanent et observable. Ici le Prophete leve le regard vers le ciel en attente de la revelation. La distinction avec « hauteur/elevation » (nul) est que le mot est ici le nom defini du ciel (as-sama'), pas un adjectif de hauteur.",
              axe1_verset: "Le mot as-sama'i situe la direction du regard du Prophete — il leve le visage vers le ciel. Le ciel est la direction d'ou vient la revelation. Le champ lexical (voir, retourner, visage, ciel) montre que le regard vers le haut est un geste d'attente — le Prophete attend la reponse divine qui vient du ciel.",
              axe2_voisins: "Le verset 143 mentionnait la qibla precedente comme epreuve. Le verset 144 montre le Prophete levant le regard vers le ciel — la direction de la revelation. Le ciel est la source d'ou descend l'ordre divin. La transition du regard vers le ciel a l'ordre de tourner le visage vers la Mosquee sacree montre le mouvement vertical (ciel) vers l'horizontal (qibla).",
              axe3_sourate: "La racine s-m-w apparait dans la sourate al-Baqarah dans plusieurs contextes. En 2:22, le ciel envoie l'eau. En 2:29, Dieu a cree les cieux. En 2:116, a Dieu appartient ce qui est dans les cieux et la terre. Le verset 144 utilise le ciel comme direction du regard prophetique — c'est la direction de la communication divine.",
              axe4_coherence: "La racine s-m-w apparait environ 381 fois dans le Coran. Le ciel est la direction de la revelation, le lieu d'ou descend la parole divine. En 53:1, Dieu jure par l'etoile quand elle descend. Le ciel est la porte entre le divin et l'humain.",
              axe5_frequence: "Pour la mission du khalifa, le ciel est la source de la mission. Lever le regard vers le ciel c'est chercher les instructions du mandant. Le khalifa reçoit sa mission d'en haut — de la source divine — et l'applique en bas sur terre."
            },
            "Hauteur/Élévation": {
              status: "nul",
              senses: ["etre haut", "se dresser", "monter", "noble"],
              proof_ctx: "Le sens de hauteur est un sens premier de s-m-w mais le mot ici est le nom defini as-sama' (le ciel), pas un adjectif de hauteur. Le contexte est la voute celeste comme direction du regard."
            },
            "Nom/Identification": {
              status: "nul",
              senses: ["nom", "nommer"],
              proof_ctx: "Le sens de nom (ism) est un autre sens de s-m-w mais hors sujet ici — le contexte est le ciel physique vers lequel le Prophete leve le regard."
            }
          }
        }
      },
      // wly pos=5 (1st occurrence — "Nous te tournerons")
      {
        word_key: "wly", position: 5, sense_chosen: "tourner",
        analysis_axes: {
          sense_chosen: "tourner",
          concept_chosen: "Proximité/Protection",
          concepts: {
            "Proximité/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Le verbe lanuwalliyannaka est un inaccompli 1P energique de la forme II de la racine w-l-y. Le Lane's donne : tourner vers, confier a, charger de, etre proche de. La forme II est causative — Dieu fait tourner le Prophete vers une direction. Le lam et le nun de corroboration renforcent la promesse. La racine w-l-y porte fondamentalement le sens de proximite — tourner quelqu'un vers quelque chose c'est le rapprocher de cette chose. La distinction avec « gouverner » (nul) est que le contexte est le rapprochement vers une direction, pas l'exercice d'autorite.",
              axe1_verset: "Le verbe lanuwalliyannaka est la reponse divine a l'attente du Prophete. Dieu voit son visage se retourner vers le ciel et repond : « Nous te tournerons vers une direction qui te satisfait ». Le champ lexical (tourner, direction, visage, cote) montre que la walaya ici est un acte de proximite divine — Dieu prend en charge l'orientation du Prophete.",
              axe2_voisins: "Le verset 143 mentionnait que Dieu n'est pas du genre a perdre la foi des croyants. Le verset 144 montre Dieu repondant au desir du Prophete — la walaya divine se manifeste par une reponse concrete. Le verset 145 montrera que les gens du Livre ne suivront pas cette direction — ils refusent la walaya divine.",
              axe3_sourate: "La racine w-l-y est une racine structurante de la sourate al-Baqarah. En 2:107, Dieu est le wali (protecteur). En 2:120, les juifs et les chretiens ne seront satisfaits que si le Prophete suit leur qibla. Le verset 144 utilise la forme II pour montrer Dieu tournant activement le Prophete vers la bonne direction — un acte de walaya concrete.",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. Le sens de tourner vers (forme II) est specifique aux versets de la qibla — en 2:144, 2:149, 2:150. Le Coran utilise cette forme pour marquer que l'orientation est un acte de Dieu, pas un choix arbitraire du Prophete.",
              axe5_frequence: "Pour la mission du khalifa, la walaya divine signifie que Dieu prend en charge la direction de Sa creation. Le khalifa ne choisit pas sa direction seul — Dieu le tourne vers ce qui est juste. La walaya est le lien de proximite entre le mandant et le mandataire."
            },
            "Autorité": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est hors sujet ici — la forme II wallaha signifie tourner vers, pas gouverner."
            }
          }
        }
      },
      // qbl pos=6
      {
        word_key: "qbl", position: 6, sense_chosen: "direction",
        analysis_axes: {
          sense_chosen: "direction",
          concept_chosen: "Orientation/Direction",
          concepts: {
            "Orientation/Direction": {
              status: "retenu",
              senses: ["se tourner vers", "faire face", "venir vers"],
              proof_ctx: "Le mot qiblatan est un nom feminin singulier indefini accusatif de la racine q-b-l. Le Lane's donne : direction vers laquelle on se tourne pour prier, direction de priere. La qibla est la direction de l'orientation rituelle. L'indefini (qiblatan sans article) marque une direction nouvelle — pas celle qu'ils suivaient avant. La distinction avec « recevoir » (retenu pour d'autres contextes) est que le mot ici est le nom qibla, pas le verbe qabila.",
              axe1_verset: "Le mot qiblatan est l'objet de la promesse divine — « Nous te tournerons vers une direction qui te satisfait ». La direction (qibla) est ce vers quoi on se tourne en priere. Le verset structure la transition d'une qibla a l'autre — de Jerusalem vers La Mecque. Le champ lexical (tourner, visage, direction, cote, mosquee) montre que la qibla est le centre du verset.",
              axe2_voisins: "Le verset 142 demandait « qu'est-ce qui les a detournes de leur qibla ». Le verset 143 expliquait que le changement de qibla etait une epreuve. Le verset 144 donne enfin la nouvelle direction. La qibla est le fil conducteur des versets 142-150.",
              axe3_sourate: "La racine q-b-l dans le sens de qibla est concentree dans les versets 142-150 de la sourate. C'est le passage fondateur de la direction de priere en Islam. La sourate al-Baqarah est la seule sourate qui traite en detail du changement de qibla.",
              axe4_coherence: "Le mot qibla apparait 4 fois dans le Coran, toutes dans la sourate al-Baqarah (2:142, 2:143, 2:144, 2:145). C'est un terme technique specifique au rite de la priere. Le Coran concentre son traitement de la qibla dans un passage unique et exhaustif.",
              axe5_frequence: "Pour la mission du khalifa, la qibla represente l'orientation de la mission. Avoir une direction c'est savoir vers ou aller. Le khalifa a besoin d'une qibla — un point de reference permanent qui oriente tous ses actes vers le but de la mission."
            },
            "Réception/Accueil": {
              status: "peu_probable",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Le sens de reception est un sens majeur de q-b-l (recevoir, accepter). Mais le mot ici est le nom qibla (direction de priere), pas le verbe qabila (recevoir). Le contexte est spatial et directionnel, pas celui de la reception.",
              axe1_verset: "Le mot qiblatan pourrait theoriquement evoquer la reception par son lien etymologique — la qibla est ce qui recoit le visage. Mais le contexte est la direction de priere, pas l'acte de recevoir.",
              axe2_voisins: "Les versets voisins parlent de direction et d'orientation, pas de reception.",
              axe3_sourate: "La sourate utilise q-b-l dans le sens de qibla dans ce passage, et dans le sens de « avant » (min qabl) ailleurs.",
              axe4_coherence: "Le Coran utilise qibla exclusivement pour la direction de priere. Le sens de reception est porte par le verbe qabila dans d'autres contextes.",
              axe5_frequence: "La reception est un aspect secondaire de la qibla — recevoir la bonne direction c'est accueillir la guidance divine."
            },
            "Antériorité/Passé": {
              status: "nul",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le sens d'anteriorite est hors sujet — le mot est le nom qibla (direction de priere), pas l'adverbe qabl (avant)."
            },
            "Sens isolé/Tribu": {
              status: "nul",
              senses: ["tribu"],
              proof_ctx: "Le sens de tribu est hors sujet."
            }
          }
        }
      },
      // rdy pos=7
      {
        word_key: "rdy", position: 7, sense_chosen: "agreer",
        analysis_axes: {
          sense_chosen: "agreer",
          concept_chosen: "Agrément/Satisfaction",
          concepts: {
            "Agrément/Satisfaction": {
              status: "retenu",
              senses: ["etre satisfait", "agreer", "contentement"],
              proof_ctx: "Le verbe tardaha est un inaccompli 2MS de la racine r-d-y. Le Lane's donne : etre satisfait, agreer, accepter avec contentement. Le rida est un etat interieur de satisfaction qui atteint l'exterieur par l'acceptation. Ici « qiblatan tardaha » signifie une direction qui te satisfait, que tu agrees. L'inaccompli marque une satisfaction continue et permanente — pas un contentement passager. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le verbe tardaha qualifie la direction promise — une direction qui satisfait le Prophete. Dieu ne donne pas simplement un ordre mais repond au desir du Prophete. Le champ lexical (voir, retourner, tourner, direction, satisfaire) montre que la satisfaction du Prophete est prise en compte par Dieu. La satisfaction est l'aboutissement de l'attente — le visage qui se retournait vers le ciel trouve enfin sa reponse.",
              axe2_voisins: "Le verset 143 disait que Dieu est compatissant et misericordieux. Le verset 144 illustre cette compassion — Dieu voit l'attente du Prophete et lui donne une direction qui le satisfait. Le verset 120 avertissait que les juifs et les chretiens ne seraient satisfaits que si le Prophete suivait leur qibla. La satisfaction est un theme structurant.",
              axe3_sourate: "La racine r-d-y apparait dans la sourate al-Baqarah en 2:120 (ils ne seront pas satisfaits) et 2:144 (une direction qui te satisfait). Le contraste montre que la satisfaction du Prophete vient de Dieu, pas des gens du Livre. La satisfaction divine et prophetique sont liees.",
              axe4_coherence: "La racine r-d-y apparait environ 73 fois dans le Coran. Le rida (satisfaction) est un concept central — en 98:8, « Dieu est satisfait d'eux et ils sont satisfaits de Lui ». En 2:144, la satisfaction du Prophete montre que l'ordre divin n'est pas une contrainte mais un alignement entre la volonte divine et le desir prophetique.",
              axe5_frequence: "Pour la mission du khalifa, la satisfaction divine est le but de la mission. Le khalifa cherche la satisfaction de Dieu (mardatu Allah). Quand la direction vient de Dieu, le khalifa est satisfait parce qu'il sait qu'il est sur le bon chemin. La satisfaction mutuelle est le signe d'une mission bien accomplie."
            }
          }
        }
      },
      // wly pos=8 (2nd occurrence — "tourne" imperatif singulier)
      {
        word_key: "wly", position: 8, sense_chosen: "tourner",
        analysis_axes: {
          sense_chosen: "tourner",
          concept_chosen: "Proximité/Protection",
          concepts: {
            "Proximité/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Deuxieme occurrence de w-l-y dans le verset. Le verbe walli est un imperatif 2MS de la forme II. Le Lane's donne : tourner vers, diriger. L'imperatif marque un ordre direct de Dieu au Prophete — tourne maintenant ton visage. La forme II causative montre que le Prophete doit diriger activement son visage. Memes analyses conceptuelles que pour la premiere occurrence en position 5.",
              axe1_verset: "Le verbe walli passe de la promesse (lanuwalliyannaka, Nous te tournerons) a l'ordre (walli, tourne). La structure du verset progresse : vision divine → promesse → ordre. L'imperatif singulier s'adresse au Prophete personnellement avant l'ordre collectif (wallu) qui suivra.",
              axe2_voisins: "L'imperatif walli fait echo a l'inaccompli lanuwalliyannaka — ce que Dieu a promis, Il ordonne maintenant. Les versets 149-150 repeteront cet ordre avec la meme formule, montrant l'insistance divine sur le changement de qibla.",
              axe3_sourate: "La repetition de w-l-y dans les versets 144, 149, 150 montre que l'ordre de tourner le visage est repete trois fois dans la sourate. Cette triple repetition souligne l'importance du changement de qibla dans la structure de la sourate.",
              axe4_coherence: "L'imperatif walli (tourne) n'apparait dans le Coran que dans les versets de la qibla (2:144, 2:149, 2:150). C'est un usage specifique de w-l-y reserve au contexte de l'orientation rituelle.",
              axe5_frequence: "Pour la mission du khalifa, l'imperatif divin montre que la direction de la mission n'est pas un choix libre mais un ordre. Le khalifa recoit son orientation du mandant — il doit tourner la ou Dieu lui dit de tourner."
            }
          }
        }
      },
      // wjh pos=9 (2nd occurrence — "ton visage" vers la Mosquee)
      {
        word_key: "wjh", position: 9, sense_chosen: "visage",
        analysis_axes: {
          sense_chosen: "visage",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Deuxieme occurrence de w-j-h dans le verset. Le mot wajhaka est le visage avec pronom 2MS — ton visage. Ici l'ordre est de tourner le visage vers la Mosquee sacree. Le passage de la premiere occurrence (le visage qui se retourne vers le ciel en attente) a la deuxieme (le visage qu'on doit tourner vers la Mosquee) marque la transition de l'attente a la realisation.",
              axe1_verset: "Le mot wajhaka est l'objet de l'ordre divin — tourne ton visage vers la Mosquee sacree. La premiere occurrence montrait le visage en attente (vers le ciel), la deuxieme montre le visage oriente (vers la Mosquee). Le verset structure le mouvement du visage : attente → promesse → ordre → realisation.",
              axe2_voisins: "Cette deuxieme occurrence fait la transition entre l'attente (v144a) et l'ordre collectif (v144b). Le visage du Prophete est le modele — il tourne d'abord, puis les croyants suivent.",
              axe3_sourate: "La repetition de wajh dans les versets de la qibla montre que l'orientation du visage est l'expression physique de l'orientation spirituelle. En 2:112, « celui qui soumet son visage a Dieu ». Le visage est le marqueur de la direction choisie.",
              axe4_coherence: "Le visage dans le Coran est toujours porteur d'intention — on ne tourne pas le visage par hasard mais par choix ou par ordre. Le visage dirige tout le corps dans la direction voulue.",
              axe5_frequence: "Pour la mission du khalifa, le visage represente l'orientation de la mission. Le Prophete tourne son visage vers la Mosquee sacree — le khalifa doit tourner son visage vers le lieu designe par Dieu."
            }
          }
        }
      },
      // shtr pos=10 (1st occurrence)
      {
        word_key: "shtr", position: 10, sense_chosen: "cote",
        analysis_axes: {
          sense_chosen: "cote",
          concept_chosen: "Direction/Orientation",
          concepts: {
            "Direction/Orientation": {
              status: "retenu",
              senses: ["se diriger vers", "cote"],
              proof_ctx: "Le mot shatra est un nom masculin singulier accusatif de la racine sh-t-r. Le Lane's donne : cote, direction, moitie. Le shatr designe le cote vers lequel on se tourne — c'est une direction precis. Ici « shatra al-masjidi al-harami » signifie du cote de la Mosquee sacree. La distinction avec « moitie » (nul) est que le contexte est directionnel, pas arithmetique.",
              axe1_verset: "Le mot shatra precise la direction de l'ordre divin — du cote de la Mosquee sacree. Le champ lexical (tourner, visage, direction, mosquee) montre que shatra est l'indicateur spatial de la qibla. Le mot apparait deux fois (pos 10 et 17) pour le Prophete seul puis pour tous les croyants.",
              axe2_voisins: "Le verset 143 ne precisait pas la direction exacte. Le verset 144 donne la precision — shatra al-masjid al-haram, du cote de la Mosquee sacree. Les versets 149-150 repeteront cette meme formule. La direction est precisee et repetee pour ne laisser aucun doute.",
              axe3_sourate: "Le mot shatra n'apparait dans la sourate al-Baqarah que dans les versets de la qibla (144, 149, 150). C'est un terme technique reserve a l'indication de la direction de priere.",
              axe4_coherence: "Le mot shatra dans le contexte de la qibla n'apparait que dans la sourate al-Baqarah. C'est un usage unique et specifique. Le Coran utilise shatra exclusivement pour indiquer la direction de la Mosquee sacree.",
              axe5_frequence: "Pour la mission du khalifa, le cote vers lequel on se tourne est la direction de la mission. Le khalifa doit savoir quel cote prendre — la direction de la Mosquee sacree est la direction de l'obeissance a Dieu."
            },
            "Division/Moitié": {
              status: "nul",
              senses: ["moitie", "couper en deux"],
              proof_ctx: "Le sens de moitie est un sens premier de sh-t-r mais hors sujet ici — le contexte est la direction vers la Mosquee, pas la division en deux."
            }
          }
        }
      },
      // sjd pos=11
      {
        word_key: "sjd", position: 11, sense_chosen: "lieu de prosternation",
        analysis_axes: {
          sense_chosen: "lieu de prosternation",
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "obeir"],
              proof_ctx: "Le mot al-masjidi est un nom masculin singulier defini genitif de la racine s-j-d. Le Lane's donne : lieu de prosternation, mosquee. Le masjid est le lieu ou l'on se prosterne (maf'il de sajada). La prosternation est le geste ultime d'humilite — le front touche le sol. Le masjid tire son nom de l'acte de prosternation. La Mosquee sacree (al-Masjid al-Haram) est le lieu de prosternation par excellence — la Ka'ba.",
              axe1_verset: "Le mot al-masjidi designe le lieu vers lequel les croyants doivent tourner leurs visages. La Mosquee sacree est le point focal de la nouvelle qibla. Le champ lexical (tourner, visage, direction, cote, mosquee, sacre) montre que la Mosquee sacree est la destination de l'orientation. Le verset lie la prosternation (acte de soumission) a la direction (orientation physique).",
              axe2_voisins: "Le verset 143 ne nommait pas le nouveau lieu. Le verset 144 le designe explicitement : la Mosquee sacree. Cette designation met fin au suspense de l'epreuve du changement de qibla. Les versets 149-150 repeteront la meme designation pour ancrer l'ordre.",
              axe3_sourate: "La Mosquee sacree (al-Masjid al-Haram) est mentionnee dans la sourate al-Baqarah en 2:144, 2:149, 2:150, 2:191, 2:196, 2:217. Elle est le lieu central de l'adoration et la direction de la priere. La sourate lui accorde une place structurante.",
              axe4_coherence: "L'expression al-Masjid al-Haram apparait 15 fois dans le Coran. C'est le lieu de prosternation le plus ancien — en 3:96, « la premiere maison erigee pour les gens est celle de Bakka (La Mecque) ». Le Coran designe la Ka'ba comme le centre de l'adoration universelle.",
              axe5_frequence: "Pour la mission du khalifa, la Mosquee sacree est le lieu de la mission originelle. Ibrahim l'a construite comme maison de Dieu. Le khalifa doit se tourner vers ce lieu — non pas par ritualisme mais parce que c'est le lieu choisi par Dieu pour l'adoration."
            },
            "Lieu de prosternation": {
              status: "nul",
              senses: ["mosquee"],
              proof_ctx: "Ce sens est englobé par le concept retenu — le masjid est a la fois le lieu de prosternation et la mosquee. Le sens premier est le lieu de prosternation, dont « mosquee » est le nom derive."
            }
          }
        }
      },
      // hrm pos=12
      {
        word_key: "hrm", position: 12, sense_chosen: "sacre",
        analysis_axes: {
          sense_chosen: "sacre",
          concept_chosen: "Interdiction/Sacré",
          concepts: {
            "Interdiction/Sacré": {
              status: "retenu",
              senses: ["interdire", "sacre", "sanctuaire", "illicite", "priver", "respecter"],
              proof_ctx: "Le mot al-harami est un adjectif masculin singulier defini genitif de la racine h-r-m. Le Lane's donne : sacre, interdit, inviolable. Le haram est ce qui est mis hors d'atteinte — un espace ou une chose rendue intouchable. Le Masjid al-Haram est le sanctuaire ou toute violence est interdite, ou la chasse est prohibee, ou la paix est garantie. L'adjectif haram qualifie le masjid comme un lieu sacre et inviolable.",
              axe1_verset: "Le mot al-harami qualifie la Mosquee comme sacree — le lieu vers lequel les croyants doivent tourner leurs visages. La sacralite du lieu est ce qui le distingue de tout autre lieu. Le champ lexical (mosquee, sacre, direction, tourner) montre que la direction de priere n'est pas arbitraire — elle pointe vers le lieu le plus sacre.",
              axe2_voisins: "Le verset 125 mentionnait la Maison sacree (al-Bayt) comme lieu de securite et de pelerinage. Le verset 144 y ajoute la dimension de la qibla — la Mosquee sacree est non seulement le lieu du pelerinage mais aussi la direction de la priere. La sacralite du lieu est confirmee et etendue.",
              axe3_sourate: "La racine h-r-m apparait dans la sourate al-Baqarah a la fois pour le sanctuaire sacre et pour les interdictions rituelles. En 2:194, « le mois sacre pour le mois sacre ». En 2:196, « le pelerinage a la Maison ». La sourate lie la sacralite du lieu aux interdictions qui le protegent.",
              axe4_coherence: "La racine h-r-m apparait environ 83 fois dans le Coran. Le sanctuaire sacre (al-Masjid al-Haram) est le lieu ou la sacralite se manifeste concretement — interdiction de chasse, de violence, de profanation. Le Coran protege le sanctuaire par un reseau d'interdictions qui en garantissent l'inviolabilite.",
              axe5_frequence: "Pour la mission du khalifa, le sacre est ce qui ne doit pas etre touche. Le khalifa doit respecter les limites posees par Dieu. Se tourner vers le sacre c'est reconnaitre qu'il existe des limites inviolables que l'homme ne doit pas franchir."
            },
            "Sens isolé/Épouse": {
              status: "nul",
              senses: ["epouse"],
              proof_ctx: "Le sens d'epouse est hors sujet — le contexte est la sacralite du sanctuaire."
            }
          }
        }
      },
      // kwn pos=14
      {
        word_key: "kwn", position: 14, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister. Ici kana est un verbe incomplet (naqis) — il porte le temps sans decrire une realite en soi. « Haythu ma kuntum » (ou que vous soyez) generalise l'ordre a tous les lieux. La distinction avec « lieu/etat » (nul) est que le verbe est ici un verbe incomplet, pas un nom de lieu.",
              axe1_verset: "Le verbe kuntum etend l'ordre du Prophete seul a tous les croyants et a tous les lieux. « Ou que vous soyez » signifie que l'ordre est universel — pas limite a Medine ni a La Mecque. Le champ lexical (ou que, soyez, tournez, vos visages) montre que l'ordre de tourner le visage vers la Mosquee sacree est absolu et sans exception geographique.",
              axe2_voisins: "Le verset passe de l'adresse au Prophete (tourne ton visage) a l'adresse collective (ou que vous soyez, tournez vos visages). L'universalite de l'ordre est soulignee par le verbe d'existence — peu importe le lieu, l'ordre s'applique.",
              axe3_sourate: "La racine k-w-n est une des plus frequentes de la sourate al-Baqarah. Elle structure les passages temporels (« quand votre Seigneur dit ») et existentiels (« soyez et cela est »). En 2:117, « sois et cela est (kun fa-yakun) ». Le verset 144 utilise le verbe d'existence pour universaliser l'ordre.",
              axe4_coherence: "La racine k-w-n apparait environ 1358 fois dans le Coran. Le verbe kana est le verbe le plus polyvalent — il porte le temps, l'existence et l'attribution. En 2:144, kuntum avec haythu ma cree une universalite spatiale totale.",
              axe5_frequence: "Pour la mission du khalifa, l'etre est la condition de la mission. Ou que le khalifa soit, il doit se tourner vers la bonne direction. L'existence meme engage dans la mission — tant qu'on est, on a une direction a tenir."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — kuntum ici est un verbe d'existence incomplet."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "etat condition"],
              proof_ctx: "Le sens de lieu est hors sujet — le mot est un verbe conjugue, pas un nom de lieu."
            }
          }
        }
      },
      // wly pos=15 (3rd occurrence — "tournez" imperatif pluriel)
      {
        word_key: "wly", position: 15, sense_chosen: "tourner",
        analysis_axes: {
          sense_chosen: "tourner",
          concept_chosen: "Proximité/Protection",
          concepts: {
            "Proximité/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Troisieme occurrence de w-l-y dans le verset. Le verbe wallu est un imperatif 2MP de la forme II. Le Lane's donne : tourner vers, diriger. L'imperatif pluriel etend l'ordre du Prophete seul a tous les croyants. Le passage du singulier (walli, tourne) au pluriel (wallu, tournez) montre l'extension progressive de l'ordre. Memes analyses conceptuelles que pour les occurrences en position 5 et 8.",
              axe1_verset: "Le verbe wallu complete la structure du verset : promesse divine (lanuwalliyannaka) → ordre au Prophete (walli) → ordre a tous (wallu). La triple occurrence de w-l-y dans un meme verset souligne l'importance du changement de qibla. L'ordre part du sommet (Dieu) et descend vers le Prophete puis vers la communaute.",
              axe2_voisins: "Les versets 149-150 repeteront ce meme schema avec wallu. L'insistance sur l'ordre collectif montre que le changement de qibla concerne toute la communaute, pas le Prophete seul.",
              axe3_sourate: "La triple repetition de w-l-y dans les versets 144, 149, 150 forme un refrain qui ancre l'ordre du changement de qibla dans la sourate. La repetition est un procede coranique d'insistance.",
              axe4_coherence: "Le passage du singulier au pluriel dans un meme verset est un procede coranique pour montrer l'extension progressive d'un ordre. En 2:144, l'ordre descend du divin au prophetique au communautaire.",
              axe5_frequence: "Pour la mission du khalifa, l'ordre collectif montre que la mission n'est pas individuelle mais communautaire. Tous les khalifa doivent se tourner dans la meme direction — l'unite de direction est l'unite de la mission."
            }
          }
        }
      },
      // wjh pos=16 (3rd occurrence — "vos visages")
      {
        word_key: "wjh", position: 16, sense_chosen: "visage",
        analysis_axes: {
          sense_chosen: "visage",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Troisieme occurrence de w-j-h dans le verset. Le mot wujuhakum est le pluriel de wajh avec pronom 2MP — vos visages. Le passage du singulier (wajhika, ton visage / wajhaka, ton visage) au pluriel (wujuhakum, vos visages) marque l'extension de l'ordre a toute la communaute. Memes analyses conceptuelles que pour les occurrences en position 3 et 9.",
              axe1_verset: "Le mot wujuhakum ferme la sequence des visages : ton visage vers le ciel (attente) → ton visage vers la Mosquee (ordre au Prophete) → vos visages dans cette direction (ordre a tous). La triple mention du visage montre que l'orientation est individuelle et collective a la fois.",
              axe2_voisins: "Le pluriel wujuhakum generalise l'ordre — ce n'est plus seulement le Prophete mais tous les croyants qui doivent tourner leurs visages. Le verset 145 montrera que les gens du Livre refusent cette direction commune.",
              axe3_sourate: "Le pluriel wujuh dans les versets de la qibla montre que la communaute est definie par l'unite de direction. Tous les visages se tournent vers le meme point — la Mosquee sacree.",
              axe4_coherence: "En 3:106, les visages seront blancs ou noirs le Jour du Jugement. En 2:144, les visages sont tournes vers la direction de Dieu. Le visage dans le Coran est le marqueur de l'etat spirituel et de l'orientation choisie.",
              axe5_frequence: "Pour la mission du khalifa, les visages collectifs representent l'unite de la mission. Tous les visages tournes vers le meme point forment une communaute unie dans sa direction."
            }
          }
        }
      },
      // shtr pos=17 (2nd occurrence)
      {
        word_key: "shtr", position: 17, sense_chosen: "cote",
        analysis_axes: {
          sense_chosen: "cote",
          concept_chosen: "Direction/Orientation",
          concepts: {
            "Direction/Orientation": {
              status: "retenu",
              senses: ["se diriger vers", "cote"],
              proof_ctx: "Deuxieme occurrence de sh-t-r dans le verset. Le mot shatrahu est shatra avec pronom 3MS — dans sa direction, de son cote. Le pronom « hu » renvoie a la Mosquee sacree. La repetition de shatra montre que la direction est la meme pour le Prophete (shatra al-masjidi) et pour la communaute (shatrahu). Memes analyses que pour la premiere occurrence en position 10.",
              axe1_verset: "Le mot shatrahu precise la direction pour la communaute — dans sa direction (celle de la Mosquee sacree). La repetition confirme que la qibla est unique et universelle. L'unite de direction est soulignee par la repetition du meme mot.",
              axe2_voisins: "La repetition de shatra dans les versets 144, 149, 150 ancre la direction comme un fait immuable. Le mot revient comme un refrain directionnel.",
              axe3_sourate: "Meme analyse que pour la premiere occurrence — shatra est un terme technique de la qibla dans cette sourate.",
              axe4_coherence: "Meme analyse que pour la premiere occurrence — usage exclusif dans la sourate al-Baqarah pour la direction de la qibla.",
              axe5_frequence: "Meme analyse que pour la premiere occurrence — le cote choisi par Dieu est le cote de la mission."
            }
          }
        }
      },
      // awt pos=19
      {
        word_key: "awt", position: 19, sense_chosen: "donner",
        analysis_axes: {
          sense_chosen: "donner",
          concept_chosen: "Refuge/Protection",
          concepts: {
            "Refuge/Protection": {
              status: "retenu",
              senses: ["se refugier", "abriter", "refuge"],
              proof_ctx: "Le verbe utu est un accompli passif 3MP. Le Lane's de la racine a-w-t donne pour ce verbe passif : recevoir, se voir donner. Le passif indique que le Livre leur a ete donne — ils ne l'ont pas acquis par eux-memes. L'accompli marque que le don est acheve. L'expression « alladhina utu al-kitaba » (ceux a qui le Livre a ete donne) est une expression fixe dans le Coran designant les communautes qui ont recu une revelation anterieure. La distinction avec « detruire » est claire — le contexte est un don.",
              axe1_verset: "Le verbe utu qualifie les gens du Livre — ceux a qui le Livre a ete donne. Le passif souligne que le Livre est un don divin. Le verset affirme que ces gens du Livre savent que le changement de qibla est la verite — ils ont dans leur propre Livre des elements qui confirment ce changement. L'ironie est qu'ils savent mais ne suivent pas.",
              axe2_voisins: "Le verset 101 utilisait la meme expression « alladhina utu al-kitaba ». Le verset 145 montrera que meme avec toutes les preuves, les gens du Livre ne suivront pas la qibla du Prophete. La reception du Livre cree une responsabilite — savoir sans suivre est une trahison.",
              axe3_sourate: "L'expression « alladhina utu al-kitaba » est recurrente dans la sourate al-Baqarah. En 2:101, 2:144, 2:145. La sourate identifie un groupe specifique par leur reception du Livre — un privilège qui cree une responsabilite accrue.",
              axe4_coherence: "L'expression « alladhina utu al-kitaba » apparait environ 50 fois dans le Coran. Elle designe systematiquement les juifs et les chretiens comme communautes ayant recu une revelation. Le passif souligne le don divin et la responsabilite qui en decoule.",
              axe5_frequence: "Pour la mission du khalifa, recevoir le Livre est le debut de la mission. Ceux qui ont recu le Livre savent — leur savoir les engage. Le khalifa qui sait mais n'agit pas trahit la mission."
            }
          }
        }
      },
      // ktb pos=20
      {
        word_key: "ktb", position: 20, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["livre", "ecriture revelee", "registre", "contrat ecrit", "contrat de mariage", "contrat d'affranchissement"],
              proof_ctx: "Le mot al-kitaba est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee. L'article defini (al-) marque que c'est LE Livre connu — l'ecriture revelee specifique donnee aux juifs et aux chretiens. Dans l'expression « alladhina utu al-kitaba », le Livre designe la Torah et l'Evangile.",
              axe1_verset: "Le mot al-kitab qualifie ceux qui l'ont recu — les gens du Livre. Le verset affirme que ces gens savent que le changement de qibla est la verite venant de leur Seigneur. Leur propre Livre contient les elements qui confirment cette verite. Le Livre est le temoin silencieux qui atteste la verite de la nouvelle qibla.",
              axe2_voisins: "Le verset 101 montrait que les gens du Livre jetaient le Livre derriere leurs dos. Le verset 144 affirme qu'ils savent la verite contenue dans ce Livre. Le contraste montre qu'ils rejettent ce qu'ils connaissent — leur probleme n'est pas l'ignorance mais le refus.",
              axe3_sourate: "La racine k-t-b est une des plus importantes de la sourate al-Baqarah. En 2:2, « ce Livre, nul doute en lui ». En 2:78, « ceux qui ne connaissent le Livre que par des chimeres ». La sourate traite du rapport entre les communautes et leurs Livres reveles.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le mot kitab designe a la fois le Coran, la Torah, l'Evangile et les ecritures en general. Le Coran presente les ecritures comme un continuum — chaque Livre confirme le precedent.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le guide de la mission. Les gens du Livre ont recu le guide mais certains l'ignorent. Le khalifa doit lire et appliquer le Livre — ne pas le jeter derriere le dos."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["ecrire", "dicter", "copier un livre", "art de l'ecriture", "scribe", "s'inscrire", "savant", "enseignant", "vendeur de livres", "ecole", "demander d'ecrire", "ecrire a quelqu'un"],
              proof_ctx: "Le sens d'ecriture est un sens majeur de k-t-b. Le verset parle du Livre comme objet — pas de l'acte d'ecrire. Le mot est un nom defini (al-kitab) dans une expression fixe (ceux a qui le Livre a ete donne).",
              axe1_verset: "Le mot al-kitab est un nom defini, pas un verbe d'ecriture. Le contexte est le Livre comme objet de revelation donne aux communautes anterieures.",
              axe2_voisins: "Les versets voisins traitent le kitab comme un objet de revelation, pas comme un acte d'ecrire.",
              axe3_sourate: "La sourate utilise kitab principalement au sens de livre-objet de revelation dans ce passage.",
              axe4_coherence: "Le Coran utilise kitab dans les deux sens selon le contexte — ici c'est le livre-objet.",
              axe5_frequence: "L'ecriture comme acte est un outil du khalifa — mais dans ce verset c'est le Livre comme guide qui est en jeu."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "rendre obligatoire", "juger", "decret divin", "predestination"],
              proof_ctx: "Le sens de decret est hors sujet — le verset parle du Livre comme objet de revelation donne aux communautes."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre", "attacher"],
              proof_ctx: "Le sens d'assemblage est hors sujet — le contexte est le Livre revele."
            }
          }
        }
      },
      // elm pos=21
      {
        word_key: "elm", position: 21, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe laya'lamuna est un inaccompli 3MP de la racine '-l-m avec le lam d'insistance. Le Lane's donne : savoir, connaitre, etre informe. Le lam + ya'lamuna insiste : ils savent certainement, sans aucun doute. Leur savoir est un fait etabli par Dieu Lui-meme. L'inaccompli marque un savoir continu — ils savent toujours, pas seulement a un moment donne. La distinction avec le monde/creation (nul) est claire : le contexte est le savoir, pas l'univers.",
              axe1_verset: "Le verbe laya'lamuna affirme que les gens du Livre savent avec certitude que le changement de qibla est la verite. Le lam d'insistance ne laisse aucun doute — ce n'est pas une supposition mais un fait. Le champ lexical (Livre, savoir, verite, Seigneur) montre que le savoir est lie au Livre — c'est dans leur propre Livre qu'ils trouvent la confirmation.",
              axe2_voisins: "Le verset 101 se terminait par « comme s'ils ne savaient pas ». Le verset 144 affirme qu'ils savent. Le contraste est saisissant — en 101, ils agissent comme s'ils ne savaient pas, en 144, Dieu affirme qu'ils savent. Leur probleme n'est pas l'ignorance mais le refus de suivre ce qu'ils savent.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:22, « ne donnez pas d'egaux a Dieu alors que vous savez ». En 2:75, « un groupe d'entre eux entendait la Parole de Dieu puis la falsifiait apres l'avoir comprise ». La sourate insiste sur le savoir comme responsabilite.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. Le Coran affirme regulierement que les gens du Livre savent — en 6:20, « ceux a qui Nous avons donne le Livre le connaissent comme ils connaissent leurs propres enfants ». Le savoir sans action est une forme de trahison.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est l'outil de la mission. Savoir que le changement de qibla est la verite et ne pas suivre c'est trahir le savoir. Le khalifa est responsable de ce qu'il sait — le savoir engage."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["univers", "monde", "ensemble des creatures", "les mondes"],
              proof_ctx: "Le sens de monde est hors sujet — le verbe ya'lamuna est un verbe de connaissance, pas un nom designant l'univers."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau"],
              proof_ctx: "Le sens de signe est hors sujet — le verbe est « savoir », pas « marquer »."
            }
          }
        }
      },
      // hqq pos=23
      {
        word_key: "hqq", position: 23, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["etre vrai", "verite", "realite", "droit"],
              proof_ctx: "Le mot al-haqqu est un nom masculin singulier defini accusatif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui correspond a la realite objective. L'article defini (al-) marque que c'est LA verite — pas une verite parmi d'autres mais la verite absolue. Ici al-haqq designe le changement de qibla comme une verite divine — pas une invention humaine ni un caprice du Prophete. La distinction avec « obligation » (nul) est que le contexte est la verite factuelle, pas un devoir.",
              axe1_verset: "Le mot al-haqq est l'objet du savoir des gens du Livre — ils savent que c'est la verite. Le champ lexical (savoir, verite, Seigneur) montre que la verite a une source : elle vient de leur Seigneur. La verite n'est pas une opinion — c'est un fait objectif que meme les opposants reconnaissent interieurement.",
              axe2_voisins: "Le verset 119 disait « la verite de ton Seigneur ». Le verset 144 affirme que les gens du Livre savent que c'est la verite de leur Seigneur. La verite est la meme — elle vient du meme Seigneur pour tous.",
              axe3_sourate: "La racine h-q-q apparait dans la sourate al-Baqarah dans plusieurs contextes. En 2:26, « ils savent que c'est la verite de leur Seigneur ». En 2:42, « ne melez pas la verite avec le faux ». La sourate oppose la verite (al-haqq) au faux (al-batil) de maniere structurante.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. Al-haqq est un des noms de Dieu et un attribut de la revelation. En 10:94, « ce qui t'est descendu de ton Seigneur est la verite ». Le Coran presente la verite comme objective, divine et independante de l'opinion humaine.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le fondement de la mission. Le khalifa doit suivre la verite ou qu'elle le mene — meme si elle derange. Reconnaitre la verite et ne pas la suivre est le pire echec de la mission."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "meriter", "etre obligatoire"],
              proof_ctx: "Le sens d'obligation est hors sujet — le contexte est la verite factuelle du changement de qibla, pas un devoir moral."
            }
          }
        }
      },
      // rbb pos=24
      {
        word_key: "rbb", position: 24, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le mot rabbihim est un nom masculin singulier genitif de la racine r-b-b avec pronom 3MP. Le Lane's donne : seigneur, maitre, celui qui eleve et entretient. Le rabb est celui qui possede, eleve et fait grandir. Ici « min rabbihim » (de leur Seigneur) indique que la verite vient de Dieu comme Seigneur des gens du Livre. Le pronom « him » (leur) souligne que Dieu est aussi leur Seigneur — pas seulement celui du Prophete.",
              axe1_verset: "Le mot rabbihim precise la source de la verite — elle vient de leur Seigneur. L'utilisation du pronom « leur » est significative : Dieu est le Seigneur des gens du Livre aussi. La verite du changement de qibla vient du meme Seigneur qui leur a donne le Livre. Ils ne peuvent pas pretendre qu'elle vient d'une source etrangere.",
              axe2_voisins: "Le verset 139 demandait « disputez-vous avec nous au sujet de Dieu alors qu'Il est notre Seigneur et votre Seigneur ». Le verset 144 confirme cette communaute de seigneurie — la verite vient de « leur » Seigneur, qui est aussi le Seigneur du Prophete.",
              axe3_sourate: "La racine r-b-b est une des plus frequentes de la sourate al-Baqarah. En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:62, « ils auront leur recompense aupres de leur Seigneur ». La sourate insiste sur le fait que Dieu est le Seigneur de tous — le rabb est universel.",
              axe4_coherence: "La racine r-b-b apparait environ 980 fois dans le Coran. Le mot rabb est le nom divin le plus frequent apres Allah. Il designe Dieu dans Sa relation avec Sa creation — le Seigneur qui possede, eleve et gouverne.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est le mandant de la mission. La verite vient du Seigneur — le khalifa recoit ses instructions du rabb. La seigneurie implique l'autorite et la bienveillance — le Seigneur ordonne mais pour le bien de Sa creation."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens de croissance est le sens premier de r-b-b — augmenter, faire grandir. Le rabb est etymologiquement celui qui fait grandir. Le mot ici est le nom de Dieu au sens de Seigneur, pas un verbe de croissance. Mais le lien etymologique reste pertinent — le Seigneur est celui qui fait grandir Ses creatures.",
              axe1_verset: "Le mot rabbihim est ici le titre de Dieu, pas un verbe de croissance. Le contexte est l'autorite divine comme source de verite.",
              axe2_voisins: "Les versets voisins utilisent rabb au sens de Seigneur, pas de croissance.",
              axe3_sourate: "La sourate utilise rabb principalement comme titre divin. Le sens de croissance apparait dans d'autres contextes (2:276, le riba).",
              axe4_coherence: "Le Coran distingue clairement les usages de rabb (Seigneur) et de rabba (faire grandir).",
              axe5_frequence: "La croissance est l'oeuvre du Seigneur — Il fait grandir Sa creation vers sa maturite."
            },
            "Éducation/Accompagnement": {
              status: "nul",
              senses: ["elever un enfant", "eduquer", "former"],
              proof_ctx: "Le sens d'education est un sens derive de r-b-b mais le mot ici est le titre divin rabb, pas un verbe d'education."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette", "interet"],
              proof_ctx: "Le sens d'usure est hors sujet — le contexte est l'autorite divine."
            }
          }
        }
      },
      // alh pos=26
      {
        word_key: "alh", position: 26, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif. Le Lane's donne : Dieu, la divinite unique. Ici Allah est le sujet de la derniere proposition — « et Dieu n'est pas inattentif a ce qu'ils font ». Le nom apparait comme sujet d'une negation — Dieu n'est pas inattentif, ce qui signifie qu'Il est attentif et vigilant.",
              axe1_verset: "Le nom Allahu ferme le verset en rappelant la vigilance divine. Apres l'ordre du changement de qibla et l'attestation des gens du Livre, le verset conclut par un avertissement : Dieu voit ce qu'ils font. Le champ lexical (voir au debut, Dieu n'est pas inattentif a la fin) forme une inclusion — le verset commence par la vision divine et se termine par la vigilance divine.",
              axe2_voisins: "Le verset 140 avertissait « Dieu n'est pas inattentif a ce que vous faites ». Le verset 144 reprend le meme avertissement — la vigilance divine est un refrain dans ce passage. Les versets voisins montrent que Dieu observe les reactions au changement de qibla.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il structure chaque passage et rappelle que Dieu est le sujet principal de toute l'argumentation.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. L'expression « ma Allahu bighafil » (Dieu n'est pas inattentif) apparait plusieurs fois comme formule d'avertissement — en 2:74, 2:85, 2:140, 2:144, 3:99.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le surveillant de la mission. Il n'est pas inattentif — chaque acte est observe et enregistre. Le khalifa agit sous le regard permanent de son mandant."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["adorer", "faire adorer", "se devouer au culte", "diviniser"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration. Le contexte est la vigilance divine."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah dans un contexte de vigilance divine."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["chercher refuge", "proteger", "demeurer"],
              proof_ctx: "Le sens de refuge est hors sujet — le contexte est la vigilance divine."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet."
            }
          }
        }
      },
      // ghf pos=27
      {
        word_key: "ghf", position: 27, sense_chosen: "inattentif",
        analysis_axes: {
          sense_chosen: "inattentif",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["pardonner", "effacer", "couvrir"],
              proof_ctx: "Le mot bighafil est une preposition bi + nom d'agent masculin singulier de la racine gh-f-l. Le Lane's donne : etre inattentif, negliger, etre insouciant, ne pas preter attention. Le ghafil est celui qui ne fait pas attention, qui neglige. La negation « ma Allahu bighafil » affirme que Dieu n'est PAS inattentif — Il surveille tout. La racine gh-f-l est distincte de gh-f-r (pardonner) bien qu'elles partagent la meme famille consonantique. Ici le sens est la negligence (ghafla), pas le pardon (maghfira). Le concept « Pardon/Couverture » couvre les deux racines dans cette base de donnees.",
              axe1_verset: "Le mot bighafil ferme le verset par un avertissement — Dieu n'est pas inattentif a ce qu'ils font. Le champ lexical du verset (voir au debut, inattentif a la fin) forme une inclusion : Dieu voit (nara) et Il n'est pas inattentif (ma bighafil). La vigilance divine encadre tout le verset et garantit que les actes des hommes sont observes et juges.",
              axe2_voisins: "Le verset 140 utilisait la meme formule « wa ma Allahu bighafil 'amma ta'malun ». Le verset 144 la reprend avec le pronom 3MP (ya'malun au lieu de ta'malun) — passant de « ce que vous faites » a « ce qu'ils font ». Le changement de pronom montre que l'avertissement vise maintenant les gens du Livre qui savent mais ne suivent pas.",
              axe3_sourate: "L'expression « ma Allahu bighafil » apparait dans la sourate al-Baqarah en 2:74, 2:85, 2:140, 2:144, 2:149. C'est un refrain de la sourate qui ponctue les avertissements divins. La repetition montre que la vigilance divine est permanente et universelle.",
              axe4_coherence: "La racine gh-f-l apparait environ 40 fois dans le Coran. Le Coran affirme regulierement que Dieu n'est pas ghafil (inattentif) — en 3:99, 14:42, 23:17. La negation de la ghafla divine est une affirmation de Sa surveillance totale et permanente.",
              axe5_frequence: "Pour la mission du khalifa, savoir que Dieu n'est pas inattentif engage la responsabilite. Chaque acte est vu — le khalifa ne peut pas pretendre que ses actes passent inapercus. La vigilance divine est la garantie que la mission est supervisee en permanence."
            },
            "Protection": {
              status: "nul",
              senses: ["casque"],
              proof_ctx: "Le sens de casque (mighfar) est hors sujet — le contexte est l'inattention, pas la protection militaire."
            }
          }
        }
      },
      // eml pos=29
      {
        word_key: "eml", position: 29, sense_chosen: "faire",
        analysis_axes: {
          sense_chosen: "faire",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ya'maluna est un inaccompli 3MP de la racine '-m-l. Le Lane's donne : faire, agir, travailler, oeuvrer. L'inaccompli marque une action continue — ce qu'ils font de maniere habituelle et repetee. Le pronom 3MP designe les gens mentionnes precedemment — ceux qui savent mais qui agissent en consequence (positivement ou negativement). La distinction avec « gouverneur » (nul) est que le mot est un verbe d'action, pas un titre.",
              axe1_verset: "Le verbe ya'maluna ferme le verset en designant les actes observes par Dieu. L'expression « 'amma ya'malun » (ce qu'ils font) englobe tous les actes — croire ou nier, suivre ou refuser, accepter ou rejeter. Le verset se conclut sur l'idee que les actes ont des consequences parce que Dieu les voit.",
              axe2_voisins: "Le verset 140 utilisait la meme expression avec le pronom 2P (ta'malun, ce que vous faites). Le verset 144 change en 3P (ya'malun, ce qu'ils font). Le passage montre que l'avertissement s'elargit — Dieu surveille les actes de tous, pas seulement ceux des croyants.",
              axe3_sourate: "La racine '-m-l est tres frequente dans la sourate al-Baqarah. En 2:25, « ceux qui croient et font le bien ». En 2:62, « quiconque croit et fait le bien ». La sourate lie systematiquement la foi aux actes — croire ne suffit pas, il faut agir.",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. Le Coran insiste sur les actes (a'mal) comme critere de jugement. En 99:7-8, « quiconque fait le poids d'un atome de bien le verra, quiconque fait le poids d'un atome de mal le verra ». Les actes sont la mesure de la vie.",
              axe5_frequence: "Pour la mission du khalifa, les actes sont la manifestation concrete de la mission. Le khalifa est juge sur ce qu'il fait, pas sur ce qu'il dit. Faire (ya'malun) est l'aboutissement de la mission — savoir et croire doivent se traduire en actes."
            },
            "Sens isolé/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le sens de gouverneur est hors sujet — le mot est un verbe d'action (ils font), pas un titre de fonction."
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

  const verseIds = [151];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 144 ===\n');
  await processVerse(144);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V144 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
