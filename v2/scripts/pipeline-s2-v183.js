const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 183
// verse_id=190, analysis_id=547
// "O vous qui avez adhere, l'abstinence vous est prescrite
//  comme elle fut prescrite a ceux d'avant vous, afin que
//  vous vous premunissiez."
// Jeune prescrit, continuite avec les communautes anterieures, taqwa
// =====================================================

const verseData = {
  183: {
    verse_id: 190,
    analysis_id: 547,
    translation_arab: "O vous qui avez adhere, l'abstinence vous est prescrite comme elle fut prescrite a ceux d'avant vous, afin que vous vous premunissiez.",
    full_translation: "O les croyants, on vous a prescrit le jeune comme il a ete prescrit a ceux d'avant vous, ainsi atteindrez-vous la piete.",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset ouvre la section legislative sur le jeune en s'adressant directement aux croyants par l'interpellation « ya ayyuha lladhina amanu ». Le verbe **amanu** est un accompli 3MP forme IV de la racine '-m-n. Le Lane's donne : croire, avoir foi, adherer, se sentir en securite, donner sa confiance. La forme IV (af'ala) est causative-estimative — celui qui croit estime la chose vraie et y adhere. L'accompli marque que la foi est un acte deja accompli — ceux qui ont adhere, pas ceux qui sont en train d'adherer. L'interpellation « ya ayyuha lladhina amanu » est une formule coranique recurrente qui introduit une obligation ou une injonction specifique aux croyants. Le verbe **kutiba** est un accompli passif 3MS de la racine k-t-b. Le Lane's donne : ecrire, prescrire, decreter, rendre obligatoire. Le passif (kutiba) designe un decret qui vient d'en haut et s'impose aux destinataires — ce n'est pas une suggestion mais une obligation divine inscrite. La construction « kutiba alaykum » (il vous est prescrit) est la meme qu'en 2:178 pour le talion et en 2:180 pour le testament — elle marque une obligation ferme et non negociable. Le mot **alaykum** (sur vous) fait peser l'obligation sur les croyants comme une charge a porter. Le nom **as-siyamu** est un nom defini masculin singulier de la racine s-w-m (sad-waw-mim). Le Lane's donne pour cette racine : s'abstenir, jeuner, cesser toute activite corporelle, se taire, s'immobiliser. Le siyam est l'abstention volontaire de nourriture, de boisson et de relations conjugales pendant la journee. L'article al- definit le jeune comme l'institution connue et etablie — pas un jeune quelconque mais LE jeune prescrit. Le nom est au nominatif comme sujet reel du passif kutiba — c'est le jeune qui est prescrit. La particule **kama** (comme) introduit une comparaison avec les communautes anterieures. Le Lane's donne pour kaf : semblable a, de la meme maniere que, comme. La comparaison etablit une continuite historique — le jeune n'est pas une nouveaute mais une prescription qui existait deja pour les communautes precedentes. Le verbe **kutiba** est repete une seconde fois au passif 3MS — il fut prescrit. La repetition renforce l'idee que l'obligation est la meme, identique, pour les communautes anterieures et pour les croyants actuels. Le mot **alladhina** (ceux qui) est un pronom relatif pluriel qui designe les communautes anterieures sans les nommer. Le nom **qablikum** est un nom masculin de la racine q-b-l avec pronom suffixe 2MP. Le Lane's donne pour cette racine dans son sens temporel : avant, precedemment, anterieurement. Le sens d'anteriorite est clair ici — « min qablikum » signifie « d'avant vous », c'est-a-dire les communautes qui ont precede la communaute du Prophete. Le sens de reception ou d'accueil est ecarte car la preposition « min » avec « qabl » forme une locution temporelle fixe. La particule **la'allakum** (afin que vous / peut-etre que vous) introduit la finalite du jeune. Le Lane's donne pour la'alla : peut-etre, afin que, dans l'espoir que. La particule exprime une finalite esperee — le jeune est prescrit dans le but que les croyants atteignent la taqwa. Le verbe **tattaquna** est un inaccompli 2MP forme VIII de la racine w-q-y. Le Lane's donne : se premunir, se proteger, prendre garde, placer un bouclier entre soi et ce qu'on craint. La forme VIII (ifta'ala) est reflexive — le sujet agit sur lui-meme, il se premunit. L'inaccompli marque une action continue et habituelle — se premunir est un effort permanent, pas un acte ponctuel. Le jeune est le moyen, la taqwa est la finalite. Le jeune entraine le croyant a se premunir contre ses pulsions et ses desirs, ce qui le prepare a se premunir contre la desobeissance a Dieu.

\u00a7JUSTIFICATION\u00a7
**adhere** — Le sens retenu est « croire/adherer ». Le verbe amanu est une forme IV qui marque l'adhesion volontaire a la foi. L'alternative « securite » est ecartee car le contexte est une interpellation aux croyants — il s'agit de ceux qui ont donne leur foi, pas de ceux qui se sentent en securite.

**prescrit** — Le sens retenu est « prescrire/decreter ». Le verbe kutiba est un passif de k-t-b qui marque une obligation divine. L'alternative « ecrire » au sens materiel est ecartee car le passif avec « alaykum » cree la construction juridique « il vous est prescrit ».

**l'abstinence** — Le sens retenu est « abstinence/jeune ». Le nom as-siyamu designe l'abstention volontaire de nourriture, boisson et relations conjugales. L'alternative « silence/immobilite » est ecartee car le contexte legislatif designe specifiquement la pratique du jeune religieux, bien que le silence et l'immobilite fassent partie du champ semantique de la racine sad-waw-mim.

**prescrit (repete)** — Le sens retenu est le meme « prescrire/decreter ». La repetition du verbe kutiba souligne l'identite de la prescription entre les communautes anterieures et les croyants actuels.

**d'avant vous** — Le sens retenu est « avant/anterieurement ». Le nom qablikum avec la preposition min forme la locution temporelle « d'avant vous ». L'alternative « recevoir/accueillir » est ecartee car la construction « min qablikum » est une expression temporelle fixe — « d'avant vous » et non « parmi ceux qui vous ont recus ».

**vous vous premunissiez** — Le sens retenu est « se premunir/se proteger ». Le verbe tattaquna est une forme VIII reflexive de w-q-y. L'alternative « crainte » au sens emotionnel est ecartee car le participe actif et la forme reflexive marquent une action volontaire et continue — se premunir, pas simplement avoir peur.

\u00a7CRITIQUE\u00a7
Les traductions courantes rendent « as-siyam » par « le jeune » ce qui est correct mais reducteur. Le mot arabe siyam, de la racine sad-waw-mim, porte l'idee d'abstinence totale — cesser toute activite corporelle, pas seulement s'abstenir de manger. Notre traduction retient « l'abstinence » pour rendre cette dimension plus large du jeune. La formule « kutiba alaykum » est unanimement rendue par « il vous est prescrit » ou « on vous a prescrit ». La mention « kama kutiba 'ala lladhina min qablikum » est un argument de continuite — le jeune n'est pas une invention mais une prescription universelle. Hamidullah rend « la'allakum tattaqun » par « ainsi atteindrez-vous la piete » qui presuppose le resultat, tandis que notre traduction garde la nuance d'espoir et de finalite avec « afin que vous vous premunissiez ». La taqwa n'est pas la piete au sens devot — c'est l'acte de se premunir, de placer un bouclier entre soi et les consequences de la desobeissance.`,
    segments: [
      { fr: "O", phon: "ya", arabic: "\u064a\u064e\u0640\u0670\u0653", is_particle: true, position: 0 },
      { fr: "vous qui", phon: "ayyuha lladhina", arabic: "\u0623\u064e\u064a\u0651\u064f\u0647\u064e\u0627 \u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 1 },
      { fr: "avez adhere", pos: "verbe", phon: "amanu", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u0627\u06df", word_key: "amn", is_particle: false, sense_retenu: "adherer", position: 2 },
      { fr: "est prescrit", pos: "verbe", phon: "kutiba", arabic: "\u0643\u064f\u062a\u0650\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "prescrire", position: 3 },
      { fr: "sur vous", phon: "alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u064f", is_particle: true, position: 4 },
      { fr: "l'abstinence", pos: "nom", phon: "as-siyamu", arabic: "\u0671\u0644\u0635\u0651\u0650\u064a\u064e\u0627\u0645\u064f", word_key: "swm", is_particle: false, sense_retenu: "abstinence/jeune", position: 5 },
      { fr: "comme", phon: "kama", arabic: "\u0643\u064e\u0645\u064e\u0627", is_particle: true, position: 6 },
      { fr: "fut prescrit", pos: "verbe", phon: "kutiba", arabic: "\u0643\u064f\u062a\u0650\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "prescrire", position: 7 },
      { fr: "a", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 8 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 9 },
      { fr: "d'", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 10 },
      { fr: "avant vous", pos: "nom", phon: "qablikum", arabic: "\u0642\u064e\u0628\u0652\u0644\u0650\u0643\u064f\u0645\u0652", word_key: "qbl", is_particle: false, sense_retenu: "avant/anterieurement", position: 11 },
      { fr: "afin que vous", phon: "la'allakum", arabic: "\u0644\u064e\u0639\u064e\u0644\u0651\u064e\u0643\u064f\u0645\u0652", is_particle: true, position: 12 },
      { fr: "vous premunissiez", pos: "verbe", phon: "tattaquna", arabic: "\u062a\u064e\u062a\u0651\u064e\u0642\u064f\u0648\u0646\u064e", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 13 }
    ],
    words: [
      // amn pos=3
      {
        word_key: "amn", position: 3, sense_chosen: "adherer",
        analysis_axes: {
          sense_chosen: "adherer",
          concept_chosen: "Foi/Adh\u00e9sion",
          concepts: {
            "Foi/Adh\u00e9sion": {
              status: "retenu",
              senses: ["croire", "avoir foi", "adh\u00e9rer", "se sentir en s\u00e9curit\u00e9", "donner sa confiance", "accepter comme vrai"],
              proof_ctx: "Le verbe amanu est un accompli 3MP forme IV de la racine '-m-n. Le Lane's donne : croire, avoir foi, adherer, se sentir en securite, donner sa confiance, accepter une chose comme vraie. La forme IV (af'ala) est causative-estimative — celui qui croit estime la chose vraie et y adhere de tout son etre. Le accompli marque que la foi est un acte deja realise — ceux qui ont adhere, ceux qui ont donne leur confiance. L'adhesion est un mouvement interieur par lequel le sujet accepte une verite et s'y attache. La racine porte l'idee de securite (amn) — celui qui adhere trouve la securite dans sa foi. L'adhesion est un acte volontaire et definitif — le accompli exclut le doute et l'hesitation.",
              axe1_verset: "Le mot amanu est la condition prealable a la prescription du jeune. Le verset s'adresse specifiquement a ceux qui ont adhere — le jeune n'est pas prescrit a l'humanite entiere mais aux croyants. Le champ lexical (prescrire, abstinence, se premunir) montre que l'adhesion a la foi est le fondement sur lequel les obligations s'appuient. Celui qui a adhere accepte les prescriptions parce qu'il a donne sa confiance a celui qui prescrit. L'interpellation « ya ayyuha lladhina amanu » cree un lien direct entre Dieu et les croyants — c'est un appel personnel, pas une loi impersonnelle.",
              axe2_voisins: "Le verset 2:178 s'ouvre par la meme interpellation « ya ayyuha lladhina amanu kutiba alaykum al-qisas » (O vous qui avez adhere, le talion vous est prescrit). Le verset 2:183 reprend la meme structure pour le jeune. Cette repetition montre que chaque prescription majeure est adressee aux croyants en tant que communaute de foi. Le verset 2:182 traitait de la rectification du testament — le passage du testament au jeune marque une transition de la legislation successorale a la legislation cultuelle, toujours adressee aux memes destinataires : ceux qui ont adhere.",
              axe3_sourate: "La racine '-m-n est massivement presente dans la sourate al-Baqarah. En 2:3-4, les muttaqin sont decrits comme ceux qui « croient a l'invisible » et a ce qui a ete revele. En 2:8-9, les hypocrites disent « amanna » (nous avons cru) mais ne croient pas reellement. En 2:13, on leur dit « croyez comme les gens ont cru ». La sourate construit une opposition entre la foi sincere et la foi feinte. Le verset 2:183 s'adresse a ceux dont la foi est reelle et accomplie — pas aux hypocrites qui disent « amanna » sans y adherer.",
              axe4_coherence: "La racine '-m-n apparait environ 879 fois dans le Coran, ce qui en fait l'une des racines les plus frequentes. L'expression « ya ayyuha lladhina amanu » apparait environ 89 fois dans le Coran — chaque occurrence introduit une obligation, une interdiction ou une exhortation specifique aux croyants. En 3:102, « ya ayyuha lladhina amanu ittaqu llaha haqqa tuqatihi » (premunissez-vous de Dieu comme il le merite). En 49:1, l'interpellation introduit des regles de bienseance. Le Coran utilise cette formule comme un cadre legislatif reserve a la communaute des croyants.",
              axe5_frequence: "Pour la mission du khalifa, l'adhesion a la foi est le fondement de la mission. Le khalifa n'est pas un simple administrateur — il est celui qui a adhere a la mission divine et qui en porte la responsabilite. La foi est le prealable a toute obligation — sans adhesion, la prescription est une contrainte vide de sens. Le khalifa qui a adhere accepte les prescriptions (jeune, talion, testament) comme des expressions de la mission qu'il porte. L'adhesion transforme l'obligation en engagement volontaire."
            }
          }
        }
      },
      // ktb pos=4
      {
        word_key: "ktb", position: 4, sense_chosen: "prescrire",
        analysis_axes: {
          sense_chosen: "prescrire",
          concept_chosen: "Obligation/D\u00e9cret",
          concepts: {
            "Obligation/D\u00e9cret": {
              status: "retenu",
              senses: ["prescrire", "d\u00e9cr\u00e9ter", "rendre obligatoire", "imposer", "fixer une obligation"],
              proof_ctx: "Le verbe kutiba est un accompli passif 3MS de la racine k-t-b. Le Lane's donne : ecrire, prescrire, decreter, rendre obligatoire. Le passif (kutiba) marque un decret qui vient d'une autorite superieure et s'impose a ses destinataires. La construction « kutiba alaykum » (il vous est prescrit) est une formule juridique coranique qui pose une obligation ferme et non negociable. Le concept d'obligation est un acte directif — il sort de celui qui prescrit et contraint ceux qui doivent obeir. La prescription divine n'est pas une recommandation mais un decret inscrit — le verbe k-t-b porte l'idee d'ecriture definitive, de gravure irreversible.",
              axe1_verset: "Le verbe kutiba est le pivot juridique du verset — c'est lui qui transforme le jeune en obligation. Le champ lexical (adhere, abstinence, avant vous, se premunir) montre que la prescription s'adresse a une communaute de foi et s'inscrit dans une continuite historique. Le passif efface l'agent divin pour mettre en avant l'obligation elle-meme, comme si elle existait par sa propre autorite. La construction « kutiba alaykum as-siyamu » place le jeune comme sujet reel du passif — c'est le jeune qui est prescrit, pas les croyants qui prescrivent. L'obligation s'impose de l'exterieur comme une realite irreductible.",
              axe2_voisins: "Le verset 2:178 utilise « kutiba alaykum al-qisasu » (le talion vous est prescrit). Le verset 2:180 utilise « kutiba alaykum » pour le testament. Le verset 2:183 l'utilise pour le jeune. Cette triple repetition en l'espace de six versets construit un code legislatif compact : justice penale (talion), justice successorale (testament), justice cultuelle (jeune). Le verbe kutiba est le fil conducteur qui unit ces trois obligations en un seul bloc legislatif. La repetition martele l'obligation — chaque kutiba est un coup de marteau qui fixe une loi.",
              axe3_sourate: "La racine k-t-b structure toute la sourate al-Baqarah. En 2:2, le kitab est le Livre qui ne contient aucun doute. En 2:44, les Gens du Livre (ahl al-kitab) sont interpelles. En 2:78-79, ceux qui ecrivent le Livre de leurs mains pour le vendre a vil prix sont condamnes. En 2:178, 2:180 et 2:183, k-t-b passe de l'ecriture a la prescription. La sourate montre que le Livre ecrit (kitab) produit des prescriptions (kutiba) — la revelation genere la legislation.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. La formule « kutiba alaykum » apparait dans les versets legislatifs majeurs : le talion (2:178), le testament (2:180), le jeune (2:183), le combat (2:216). En 4:103, la priere est decrite comme « kitaban mawqutan » (une prescription a heures fixes). Le Coran utilise k-t-b pour les obligations fondamentales — celles qui sont gravees, inscrites, irreversibles. La prescription divine n'est pas une loi humaine revisable mais une ecriture divine definitive.",
              axe5_frequence: "Pour la mission du khalifa, la prescription est le cadre structurant de la mission. Le khalifa ne decide pas de ses obligations — elles lui sont prescrites. Le jeune est une prescription qui discipline le corps et l'esprit du khalifa, le preparant a exercer sa mission avec maitrise de soi. Le khalifa qui obeit a la prescription du jeune prouve qu'il accepte le cadre divin et qu'il ne vit pas selon ses propres caprices. La prescription transforme l'homme en khalifa en lui imposant une discipline divine."
            },
            "\u00c9criture/Inscription": {
              status: "probable",
              senses: ["\u00e9crire", "inscrire", "consigner", "noter", "tracer des lettres"],
              proof_ctx: "Le sens d'ecriture est le sens premier et physique de la racine k-t-b — tracer des signes sur un support. Le verbe kutiba au passif pourrait signifier « il a ete ecrit » au sens materiel. Mais le contexte est juridique : la construction « kutiba alaykum » ne signifie pas « on a ecrit sur vous » mais « il vous a ete prescrit ». La distinction est que l'ecriture est un acte technique de consignation, tandis que le decret est un acte d'autorite qui impose. Dans le verset 2:183, c'est l'autorite qui prime — le jeune est prescrit, pas simplement consigne. Le sens d'ecriture reste sous-jacent car la prescription divine est aussi une ecriture — elle est inscrite dans le Livre."
            }
          }
        }
      },
      // swm pos=6 — IMPORTANT: racine sad-waw-mim, PAS sin-waw-mim
      {
        word_key: "swm", position: 6, sense_chosen: "abstinence/jeune",
        analysis_axes: {
          sense_chosen: "abstinence/jeune",
          concept_chosen: "Abstinence/Je\u00fbne",
          concepts: {
            "Abstinence/Je\u00fbne": {
              status: "retenu",
              senses: ["s'abstenir", "je\u00fbner", "cesser toute activit\u00e9 corporelle", "renoncer volontairement", "se priver", "abstinence totale"],
              proof_ctx: "Le nom as-siyamu est un nom defini masculin singulier de la racine sad-waw-mim. Le Lane's donne pour cette racine : s'abstenir, jeuner, cesser toute activite corporelle, se priver volontairement de nourriture et de boisson, s'arreter. Le siyam est l'abstention complete et volontaire — le jeune islamique implique la cessation de toute consommation et de toute relation conjugale du lever au coucher du soleil. La racine porte l'idee d'arret total — le sawm est une immobilisation des fonctions corporelles par decision volontaire. L'article al- definit le jeune comme l'institution connue et prescrite — pas un jeune quelconque mais LE jeune religieux legislatif. Le siyam est un acte de maitrise — le corps est soumis a la volonte qui lui interdit ce qu'il desire.",
              axe1_verset: "Le mot as-siyamu est le sujet reel du passif kutiba — c'est le jeune qui est prescrit. Le champ lexical (adhere, prescrire, avant vous, se premunir) montre que le jeune est au centre du verset comme l'obligation specifique introduite. Le jeune est presente comme une prescription universelle (« comme il fut prescrit a ceux d'avant vous ») et comme un moyen d'atteindre la taqwa (« afin que vous vous premunissiez »). Le verset pose le jeune comme un pont entre les communautes — il n'est pas nouveau, il est ancien et universel. L'abstinence est le moyen, la taqwa est la finalite — jeuner n'est pas une fin en soi mais un entrainement a la maitrise de soi.",
              axe2_voisins: "Le verset 2:184 detaille les conditions du jeune : des jours comptes, les derogations pour le voyageur et le malade, la compensation par une nourriture pour un pauvre. Le verset 2:185 precise le mois du jeune : le mois de Ramadan, celui ou le Coran a ete revele. Le verset 2:187 precise les horaires : manger et boire jusqu'a l'aube, puis jeuner jusqu'a la nuit. Les versets 184-187 sont le detail legislatif de la prescription posee en 2:183. Le verset 2:183 est le principe general, les versets suivants sont les modalites d'application.",
              axe3_sourate: "La racine sad-waw-mim n'apparait dans la sourate al-Baqarah que dans ce bloc legislatif (2:183-187). En 2:187, « thumma atimmu as-siyama ila al-layli » (puis completez le jeune jusqu'a la nuit). La concentration de la racine dans un seul bloc montre que le jeune est traite de maniere exhaustive et complete en un seul passage. La sourate n'y revient pas — le bloc 183-187 est l'unique legislation sur le jeune dans al-Baqarah, et il est definitive.",
              axe4_coherence: "La racine sad-waw-mim apparait dans le Coran en lien avec le jeune cultuel. En 19:26, Maryam dit « inni nadhartu li-r-rahmani sawman » (j'ai voue au Tout Misericordieux un jeune) — ici le sawm est un voeu de silence et d'abstention de parole, montrant que la racine couvre plus que l'abstention de nourriture. En 33:35, les « sawimina wa-s-sawimati » (les jeuneurs et les jeuneuses) sont mentionnes parmi les categories de croyants recompenses. Le Coran utilise le jeune comme un acte de discipline volontaire qui couvre le corps (nourriture), la parole (silence) et le comportement (maitrise de soi).",
              axe5_frequence: "Pour la mission du khalifa, le jeune est un entrainement a la maitrise de soi necessaire a la mission. Le khalifa doit gerer les ressources de la terre — il doit donc savoir se maitriser face a l'abondance et a la tentation. Le jeune apprend au khalifa que le corps est un instrument, pas un maitre — il peut etre controle, discipline, soumis a une volonte superieure. La capacite de s'abstenir volontairement est la preuve que le khalifa n'est pas esclave de ses desirs mais maitre de ses actes. Le jeune prepare le khalifa a resister a la corruption que les anges avaient predite."
            },
            "Silence/Immobilit\u00e9": {
              status: "probable",
              senses: ["se taire", "s'immobiliser", "s'arr\u00eater", "cesser de parler", "rester fixe"],
              proof_ctx: "Le sens de silence et d'immobilite est un sens atteste de la racine sad-waw-mim. Le Lane's mentionne que le sawm peut designer l'arret de toute activite, y compris la parole. En 19:26, Maryam voue un « sawm » qui est un voeu de silence — elle ne parle a personne. Ce sens montre que l'abstinence couvre plus que la nourriture : elle inclut la parole, le mouvement, toute activite. Mais dans le contexte de 2:183, le siyam est defini par les versets suivants (184-187) comme l'abstention de nourriture et de boisson du lever au coucher du soleil. Le sens juridique precise du jeune alimentaire est le sens premier ici. Le silence et l'immobilite sont des dimensions secondaires qui enrichissent la comprehension du jeune sans le definir."
            }
          }
        }
      },
      // ktb pos=8 (repetition)
      {
        word_key: "ktb", position: 8, sense_chosen: "prescrire",
        analysis_axes: {
          sense_chosen: "prescrire",
          concept_chosen: "Obligation/D\u00e9cret",
          concepts: {
            "Obligation/D\u00e9cret": {
              status: "retenu",
              senses: ["prescrire", "d\u00e9cr\u00e9ter", "rendre obligatoire", "imposer", "fixer une obligation"],
              proof_ctx: "Le verbe kutiba est repete une seconde fois dans le verset, toujours au passif 3MS de la racine k-t-b. Le Lane's donne : ecrire, prescrire, decreter, rendre obligatoire. Cette seconde occurrence du passif kutiba introduit la comparaison avec les communautes anterieures — « comme il fut prescrit a ceux d'avant vous ». Le meme verbe au meme mode (passif) montre que la prescription est identique — la meme autorite divine a prescrit le meme jeune aux memes conditions. La repetition du passif maintient l'effacement de l'agent (Dieu) et l'accent sur l'universalite de l'obligation.",
              axe1_verset: "Le second kutiba etablit la continuite historique de la prescription. Le champ lexical (comme, ceux qui, avant vous) montre que le verset compare deux prescriptions identiques : celle des croyants actuels et celle des communautes anterieures. La repetition du meme verbe au meme mode grammatical est une figure de style qui martele l'identite de l'obligation — c'est la meme prescription, le meme decret, la meme autorite. Le verset dit : « il vous est prescrit... comme il fut prescrit » — la structure en miroir rend la comparaison incontestable.",
              axe2_voisins: "Le verset 2:178 utilisait kutiba une seule fois pour le talion. Le verset 2:180 l'utilisait une seule fois pour le testament. Le verset 2:183 l'utilise deux fois — la repetition souligne que le jeune, contrairement au talion ou au testament, est une obligation partagee avec les communautes anterieures. Le talion et le testament sont presentes comme des obligations nouvelles ; le jeune est presente comme une obligation universelle et ancienne. La double prescription renforce l'autorite de l'obligation en l'ancrant dans l'histoire.",
              axe3_sourate: "La repetition de kutiba dans le meme verset est un phenomene unique dans le bloc legislatif 2:178-183. En 2:178, kutiba apparait une fois. En 2:180, une fois. En 2:183, deux fois. Cette intensification montre que le jeune est presente avec une insistance particuliere — peut-etre parce que le jeune est une obligation plus exigeante pour le corps et que les croyants ont besoin d'etre rassures par la continuite historique. La sourate augmente la pression legislative de verset en verset.",
              axe4_coherence: "La racine k-t-b au passif avec la comparaison « kama kutiba » n'apparait qu'en 2:183 dans tout le Coran. Cette construction unique montre que le jeune est la seule obligation que le Coran presente explicitement comme identique a celle des communautes anterieures. Le talion, la priere, le pelerinage sont prescrits mais sans cette comparaison explicite. Le Coran accorde au jeune un statut special d'universalite — c'est une prescription qui transcende les epoques et les communautes.",
              axe5_frequence: "Pour la mission du khalifa, la repetition de la prescription souligne l'universalite de la mission. Le khalifa n'est pas le premier a recevoir cette mission — les communautes anterieures avaient aussi leurs khalifas, soumis aux memes obligations. La continuite de la prescription montre que la mission du khalifa est intemporelle — elle traverse les epoques, les peuples, les cultures. Le jeune est une discipline universelle du khalifa, pas une particularite de la communaute du Prophete."
            }
          }
        }
      },
      // qbl pos=12
      {
        word_key: "qbl", position: 12, sense_chosen: "avant/anterieurement",
        analysis_axes: {
          sense_chosen: "avant/anterieurement",
          concept_chosen: "Ant\u00e9riorit\u00e9/Pass\u00e9",
          concepts: {
            "Ant\u00e9riorit\u00e9/Pass\u00e9": {
              status: "retenu",
              senses: ["avant", "pr\u00e9c\u00e9demment", "ant\u00e9rieurement", "ce qui est devant dans le temps", "le pass\u00e9"],
              proof_ctx: "Le nom qablikum est compose de qabl (avant) et du pronom suffixe kum (vous). La racine q-b-l porte deux champs semantiques distincts : le sens temporel (avant, precedemment) et le sens d'accueil (recevoir, accueillir, accepter). Le Lane's donne pour qabl au sens temporel : avant, anterieurement, ce qui est devant dans le temps. La preposition « min » qui precede (min qablikum = d'avant vous) verrouille le sens temporel — la construction « min qabl » est une locution temporelle fixe dans le Coran. Le sens de reception ou d'accueil est totalement ecarte car la syntaxe ne le permet pas — « min qablikum » ne peut signifier que « d'avant vous », jamais « parmi ceux qui vous ont recus ». Le pronom suffixe « kum » marque la deuxieme personne du pluriel — les croyants sont le point de reference temporel.",
              axe1_verset: "Le mot qablikum situe la prescription dans le temps — elle existait avant les croyants actuels. Le champ lexical (ceux qui, avant, prescrit) montre que le verset construit un argument d'anteriorite : le jeune n'est pas une innovation mais une obligation ancienne. La mention « min qablikum » rassure les croyants — ils ne sont pas les premiers a recevoir cette obligation, d'autres l'ont portee avant eux. L'anteriorite est un argument d'autorite : ce qui est ancien est eprouve, ce qui est eprouve est fiable. Le verset utilise le passe pour legitimer le present.",
              axe2_voisins: "Le verset 2:183 est le seul verset du bloc legislatif 2:178-187 qui mentionne les communautes anterieures. Le talion (2:178) et le testament (2:180) sont presentes comme des obligations sans reference aux communautes passees. Le jeune est le seul a beneficier de cette ancre historique. Cette distinction montre que le Coran accorde au jeune un traitement special — il est l'obligation la plus ancienne, la plus universelle, celle qui lie toutes les communautes dans une meme pratique de discipline.",
              axe3_sourate: "La racine q-b-l au sens temporel apparait frequemment dans la sourate al-Baqarah. En 2:25, les croyants au Paradis diront « c'est ce qu'on nous a donne avant (min qabl) ». En 2:41, « ne soyez pas les premiers a le rejeter (kafir) ». En 2:91, « Croyez a ce que Dieu a fait descendre. Ils disent : nous croyons a ce qui nous a ete revele auparavant (min qabl) ». La sourate utilise l'anteriorite comme un argument de continuite — le present s'inscrit dans la lignee du passe.",
              axe4_coherence: "La locution « min qablikum » ou « min qablihim » apparait environ 78 fois dans le Coran. En 3:137, « des evenements se sont passes avant vous (min qablikum) ». En 10:13, « Nous avons fait perir les generations avant vous (min qablikum) ». En 30:9, « Ceux qui etaient avant eux (min qablihim) etaient plus puissants ». Le Coran utilise l'anteriorite comme un outil pedagogique — les exemples du passe servent de lecons pour le present. En 2:183, l'anteriorite n'est pas un avertissement mais un encouragement : d'autres ont jeune avant vous, vous pouvez le faire aussi.",
              axe5_frequence: "Pour la mission du khalifa, l'anteriorite rappelle que la mission est une continuite. Le khalifa n'est pas le premier a porter cette mission — Adam etait le premier khalifa, et chaque communaute a eu ses khalifas. Le jeune est une discipline partagee par tous les khalifas a travers les epoques. La mention « ceux d'avant vous » rappelle que la mission du khalifa est une chaine ininterrompue — chaque generation porte la meme responsabilite, chaque generation recoit les memes outils (dont le jeune) pour l'accomplir."
            },
            "Orientation/Direction": {
              status: "probable",
              senses: ["face \u00e0", "direction", "devant", "en face de", "s'orienter vers"],
              proof_ctx: "La racine q-b-l porte aussi le sens de direction et d'orientation — se tourner vers, faire face a, aller dans la direction de. Le Lane's donne qibla (direction de priere) et qubul (acceptation, accueil, reception). Mais dans le contexte de 2:183, la construction « min qablikum » est une locution temporelle figee qui ne peut pas signifier « depuis votre direction » ou « depuis votre orientation ». Le sens directionnel est ecarte par la syntaxe : « min qabl » avec un pronom suffixe signifie toujours « avant eux/vous » dans le Coran. La distinction est que l'anteriorite est un rapport au temps, tandis que l'orientation est un rapport a l'espace — ici c'est le temps qui est en jeu, pas l'espace."
            }
          }
        }
      },
      // wqy pos=14
      {
        word_key: "wqy", position: 14, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Pr\u00e9servation",
          concepts: {
            "Protection/Pr\u00e9servation": {
              status: "retenu",
              senses: ["se pr\u00e9munir", "se prot\u00e9ger", "prendre garde", "pr\u00e9server", "placer un bouclier", "pi\u00e9t\u00e9 active"],
              proof_ctx: "Le verbe tattaquna est un inaccompli 2MP forme VIII de la racine w-q-y. Le Lane's donne : se premunir, se proteger, prendre garde, placer un bouclier (wiqaya) entre soi et ce qu'on craint. La forme VIII (ifta'ala) est reflexive — le sujet agit sur lui-meme, il se premunit. L'inaccompli marque une action continue et habituelle — se premunir n'est pas un acte ponctuel mais un effort permanent. La taqwa est l'acte de placer un bouclier entre soi et les consequences de la desobeissance. Le bouclier est fait d'obeissance aux prescriptions — jeuner, prier, donner, tout cela constitue la wiqaya (protection) du croyant. La deuxieme personne du pluriel (tattaquna = vous vous premunissez) adresse directement les croyants — c'est leur action propre, pas celle de Dieu.",
              axe1_verset: "Le mot tattaquna est la finalite du verset — le jeune est prescrit AFIN QUE les croyants se premunissent. Le champ lexical (adhere, prescrire, abstinence) montre que le jeune est un moyen et la taqwa est le but. La particule « la'alla » (afin que/peut-etre) introduit une finalite esperee — le resultat n'est pas garanti automatiquement, il depend de la sincerite du jeune. Le verset construit un chemin : adhesion → prescription → abstinence → premunition. Chaque etape mene a la suivante — la foi mene a l'obligation, l'obligation mene au jeune, le jeune mene a la taqwa.",
              axe2_voisins: "Le verset 2:179 se terminait par « la'allakum tattaquna » (afin que vous vous premunissiez) apres la mention du talion. Le verset 2:183 se termine par la meme expression apres la mention du jeune. Cette repetition montre que la taqwa est la finalite commune de toute la legislation — le talion, le testament et le jeune visent tous le meme objectif : que les croyants se premunissent. La taqwa n'est pas un sentiment mais un resultat pratique de l'obeissance aux prescriptions. Le talion premunit contre le meurtre, le testament premunit contre l'injustice successorale, le jeune premunit contre la domination des desirs.",
              axe3_sourate: "La racine w-q-y est le fil conducteur de la sourate al-Baqarah. En 2:2, le Livre est « une guidance pour les muttaqin ». En 2:21, « peut-etre vous premunissez-vous (la'allakum tattaquna) ». En 2:179, « afin que vous vous premunissiez ». En 2:183, la meme expression. La sourate construit la taqwa comme l'objectif fondamental de toute la revelation — chaque prescription, chaque recit, chaque avertissement vise la taqwa. Les muttaqin sont le public cible du Livre et les beneficiaires de la legislation.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. L'expression « la'allakum tattaquna » apparait en 2:21, 2:63, 2:179, 2:183 et en d'autres endroits. Chaque occurrence montre que la taqwa est le resultat espere d'une action ou d'une prescription specifique. En 2:21, l'adoration mene a la taqwa. En 2:63, le don de la Torah mene a la taqwa. En 2:183, le jeune mene a la taqwa. Le Coran presente la taqwa comme le denominateur commun de toutes les obligations — tout converge vers la premunition du croyant.",
              axe5_frequence: "Pour la mission du khalifa, la taqwa est le moteur et le but de la mission. Le khalifa se premunit contre la corruption que les anges avaient predite en 2:30. Le jeune est l'outil de cette premunition — il entraine le khalifa a resister a ses pulsions, a maitriser ses desirs, a soumettre son corps a sa volonte. La taqwa du khalifa n'est pas une piete passive mais une vigilance active — il place un bouclier permanent entre lui et tout ce qui pourrait corrompre sa mission. Le jeune forge ce bouclier jour apres jour, annee apres annee."
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

  const verseIds = [190];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 183 ===\n');
  await processVerse(183);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V183 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
