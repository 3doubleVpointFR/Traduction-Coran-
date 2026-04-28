const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 192
// verse_id=199, analysis_id=556
// "S'ils cessent, Dieu est, certes, Pardonneur et
//  Misericordieux."
// Cessation, pardon divin, misericorde
// =====================================================

const verseData = {
  192: {
    verse_id: 199,
    analysis_id: 556,
    translation_arab: "S'ils cessent, alors Dieu est celui qui couvre et celui qui fait misericorde.",
    full_translation: "S'ils cessent, Dieu est, certes, Pardonneur et Misericordieux.",
    translation_explanation: `§DEMARCHE§
Le verset est une proposition conditionnelle (in + accompli) suivie d'une phrase nominale (inna + sujet + attributs). La particule **fa-in** est composee de fa- (alors, consequence) et in (si, condition). Le fa- relie ce verset au precedent (2:191) qui parlait du combat : si les combats cessent, voici la consequence. La particule in (si) introduit une condition reelle et ouverte — le texte pose la possibilite que les adversaires cessent, sans affirmer qu'ils le feront. Le verbe **intahaw** est un accompli 3MP forme VIII (ifta'ala) de la racine n-h-y. Le Lane's donne pour la racine n-h-y : interdire, empecher, atteindre une fin, parvenir a un terme. La forme VIII (intaha) ajoute une dimension reflexive : cesser de soi-meme, se retenir, s'arreter par sa propre decision. L'accompli marque l'action achevee — ils ont cesse, c'est fait, l'arret est accompli. Le sujet implicite (ils) renvoie aux adversaires mentionnes dans les versets precedents. La cessation est volontaire et reflexive — ce sont eux qui decident de s'arreter, personne ne les arrete de force. La particule **fa-inna** est composee de fa- (consequence de la condition) et inna (certes, particule d'emphase). Le fa- marque le lien logique : SI ils cessent, ALORS voici ce qui est. La particule inna renforce l'affirmation — ce qui suit est une certitude, pas une possibilite. Le nom **Allaha** est le nom propre divin de la racine '-l-h a l'accusatif (complement de inna). Le Lane's donne : Dieu, la divinite unique, celui qu'on adore a l'exclusion de tout autre. Dieu est le sujet de la phrase nominale — c'est de Lui que les attributs qui suivent sont prediques. Le nom **ghafurun** est un adjectif intensif (fa'ul) de la racine gh-f-r au nominatif indefini. Le Lane's donne : couvrir, cacher, proteger, pardonner, recouvrir un defaut, voiler une faute. La forme fa'ul (ghafur) est une forme d'intensite — celui qui couvre enormement, celui dont l'acte de couvrir est intense et vaste. Le ghafur ne se contente pas de couvrir une fois — il couvre de maniere repetee, intense et complete. L'indefini (ghafurun, pas al-ghafur) presente l'attribut comme une qualite predicative : Dieu EST couvrant, c'est Sa nature. Le nom **rahimun** est un adjectif intensif (fa'il) de la racine r-h-m au nominatif indefini. Le Lane's donne : avoir de la tendresse, etre touche de compassion, faire misericorde, matrice maternelle (rahim), pluie bienfaisante. La forme fa'il (rahim) designe celui qui fait activement et continuellement misericorde — la misericorde est son action permanente, pas un acte ponctuel. L'indefini (rahimun) est un attribut predicatif comme ghafurun. Les deux attributs sont juxtaposes sans conjonction — Dieu est ghafur ET rahim, les deux qualites sont inseparables et simultanees.

§JUSTIFICATION§
**cessent** — Le sens retenu est « cessation/arret reflexif ». Le verbe intahaw est une forme VIII (reflexive) de n-h-y : ils cessent d'eux-memes. Le mot « cesser » est choisi car il traduit l'arret volontaire et reflexif sans impliquer une cause externe. L'alternative « interdire » est ecartee car la forme VIII transforme le sens de base (interdire) en un sens reflexif (se retenir soi-meme, cesser par sa propre decision) — ce ne sont pas les autres qui leur interdisent, c'est eux qui arretent. L'alternative « atteindre » est ecartee car le contexte est l'arret d'hostilites, pas l'aboutissement a un but.

**Dieu** — Le sens retenu est « divinite ». Le nom Allah designe la divinite unique. Aucune alternative pertinente — le nom propre est univoque dans ce contexte.

**celui qui couvre** — Le sens retenu est « couverture/voilement ». Le mot ghafurun designe celui qui couvre intensement les fautes. Le mot « celui qui couvre » est choisi car la racine gh-f-r a pour sens premier le fait de couvrir, cacher, proteger — le pardon est un acte de couverture ou la faute est recouverte et rendue invisible. L'alternative « pardonneur » est ecartee car « pardon » est un mot qui implique un processus emotionnel (la personne offensee choisit de ne plus en vouloir), tandis que la racine gh-f-r decrit un acte physique de couverture — le ghafur couvre la faute comme un vetement couvre le corps, la faute disparait sous la couverture. L'alternative « protecteur » est ecartee car la protection (racine h-m-y ou w-q-y) est un concept different — proteger empeche le mal d'arriver, couvrir cache le mal qui a deja eu lieu.

**celui qui fait misericorde** — Le sens retenu est « misericorde/tendresse ». Le mot rahimun designe celui qui fait misericorde activement et continuellement. Le mot « celui qui fait misericorde » est choisi car la forme fa'il indique l'agent actif et continu — la misericorde n'est pas un etat passif mais une action permanente. L'alternative « celui qui a de la compassion » est ecartee car la compassion est un sentiment interieur qui reste chez celui qui la ressent, tandis que la misericorde (rahma) sort de celui qui l'exerce et atteint celui qui la recoit. L'alternative « matriciel » est ecartee car bien que la racine r-h-m soit liee a la matrice maternelle (rahim), le contexte est un attribut divin predicatif, pas une metaphore biologique.

§CRITIQUE§
Les traductions courantes donnent « Pardonneur » pour ghafur. Ce choix est devenu conventionnel dans les traductions francaises du Coran, mais il masque le sens etymologique de la racine gh-f-r. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine gh-f-r signifie d'abord couvrir, cacher, voiler — le ghifar est le vetement qui couvre, le mighfar est le casque qui protege la tete en la couvrant. Le « pardon » en francais implique un processus emotionnel et relationnel (la victime decide de ne plus en vouloir a l'offenseur), tandis que la couverture est un acte concret et definitif — la faute est recouverte, elle n'est plus visible, elle cesse d'exister aux yeux de celui qui la couvre. Cette nuance change la comprehension du verset : le texte ne dit pas que Dieu « pardonne » au sens emotionnel du terme, mais qu'Il couvre les fautes de ceux qui cessent — Il les rend invisibles, Il les voile, Il les efface sous une couverture protectrice. Pour « Misericordieux » (rahim), la traduction courante est acceptable car la misericorde est bien le sens central de la racine r-h-m. Notre formulation « celui qui fait misericorde » insiste sur l'aspect actif de la forme fa'il, tandis que « Misericordieux » est un adjectif qui pourrait etre compris comme un etat passif.`,
    segments: [
      { fr: "s'", phon: "fa-in", arabic: "\u0641\u064e\u0625\u0650\u0646\u0650", is_particle: true, position: 0 },
      { fr: "ils cessent", pos: "verbe", phon: "intahaw", arabic: "\u0671\u0646\u062a\u064e\u0647\u064e\u0648\u0652\u0627\u06df", word_key: "nhy", is_particle: false, sense_retenu: "cesser", position: 1 },
      { fr: "alors certes", phon: "fa-inna", arabic: "\u0641\u064e\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 2 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "divinite", position: 3 },
      { fr: "celui qui couvre", pos: "adjectif", phon: "ghafurun", arabic: "\u063a\u064e\u0641\u064f\u0648\u0631\u064c", word_key: "gfr", is_particle: false, sense_retenu: "couverture", position: 4 },
      { fr: "celui qui fait misericorde", pos: "adjectif", phon: "rahimun", arabic: "\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u064c", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 5 }
    ],
    words: [
      // nhy pos=1
      {
        word_key: "nhy", position: 1, sense_chosen: "cesser",
        analysis_axes: {
          sense_chosen: "cesser",
          concept_chosen: "Interdiction/Empechement",
          concepts: {
            "Interdiction/Empechement": {
              status: "retenu",
              senses: ["interdire", "empecher", "defendre", "prohiber", "cesser", "s'arreter"],
              proof_ctx: "Le verbe intahaw est un accompli 3MP forme VIII (ifta'ala) de la racine n-h-y. Le Lane's donne pour n-h-y : interdire, empecher, defendre de faire, prohiber, retenir. La forme VIII (intaha) ajoute une reflexivite intensive : se retenir soi-meme, cesser par sa propre volonte, s'arreter de faire ce qu'on faisait. L'interdiction est un acte directif et exterieur — celui qui interdit impose une limite a autrui. Mais la forme VIII retourne l'action vers le sujet lui-meme : ils se sont imposes leur propre limite, ils ont cesse par eux-memes. La cessation reflexive est un acte de la volonte — les adversaires choisissent d'arreter, ce n'est pas une force exterieure qui les contraint. Le concept d'interdiction/empechement couvre aussi bien l'interdiction imposee de l'exterieur (forme I) que l'auto-empechement reflexif (forme VIII). Dans le contexte du verset, c'est la dimension reflexive qui prevaut : ils cessent d'eux-memes les hostilites mentionnees dans les versets precedents. Le sens est philosophiquement un acte de retenue volontaire — une decision interieure qui se manifeste par un changement de comportement exterieur. La distinction avec le concept d'intelligence/discernement est que l'interdiction porte sur l'ACTE (cesser de faire), tandis que le discernement porte sur la COMPREHENSION (comprendre qu'il faut arreter). Le texte utilise la forme VIII pour decrire l'action elle-meme, pas la reflexion qui la precede.",
              axe1_verset: "Le verbe intahaw est le pivot du verset — c'est la condition qui declenche la consequence divine. Le champ lexical du verset est binaire : condition (cessation) → consequence (couverture et misericorde de Dieu). Le verbe est a l'accompli dans une proposition conditionnelle (in intahaw = s'ils cessent) — l'accompli apres in marque une condition reelle dont la realisation est envisagee comme possible. La cessation est l'acte humain qui appelle la reponse divine : s'ils font l'effort de s'arreter, Dieu repond par la couverture et la misericorde. Le verset ne pose pas de condition supplementaire — cesser suffit. La forme VIII (reflexive) insiste sur le fait que la cessation vient d'eux-memes, ce qui rend la reponse divine d'autant plus genereuse.",
              axe2_voisins: "Le verset 2:191 parlait du combat et de l'expulsion — une situation d'hostilite active. Le verset 2:192 pose la condition inverse : si les adversaires cessent les hostilites. Le verset 2:193 continuera en disant « s'ils cessent (in intahaw), alors pas d'agression sauf contre les injustes ». La sequence 191-193 construit un cadre complet : combat si agression (191) → cessation = pardon divin (192) → cessation = fin des hostilites (193). Le verset 192 est le point de bascule — il offre une porte de sortie aux adversaires. La cessation est presentee comme une ouverture vers la misericorde, pas comme une defaite ou une humiliation.",
              axe3_sourate: "La racine n-h-y apparait dans la sourate al-Baqarah en 2:192 et 2:193 (intahaw = ils cessent) et en d'autres versets sous la forme de l'interdiction (naha). La sourate utilise la racine pour marquer les limites du comportement — ce qui est interdit et ce qui doit cesser. Le concept de cessation dans les versets du combat montre que la sourate ne prescrit pas un combat illimite mais un combat conditionnel : l'hostilite cesse des que l'adversaire cesse. La sourate construit une ethique de la reciprocite — la reponse est proportionnelle a l'action.",
              axe4_coherence: "La racine n-h-y apparait environ 56 fois dans le Coran. En 4:171, « intahu » (cessez !) est un imperatif adresse aux Gens du Livre. En 5:63, « pourquoi les rabbins ne les empechent-ils pas (yanhawnahum) de pecher ? ». En 11:116, « ceux qui interdisaient (yanhawna) la corruption ». Le Coran utilise n-h-y pour l'interdiction du mal et la cessation des actes reprehensibles. La forme VIII (intaha = cesser de soi-meme) apparait specifiquement dans les contextes ou l'arret volontaire des hostilites est recompense — le Coran valorise l'auto-retenue comme un acte meritoire.",
              axe5_frequence: "Pour la mission du khalifa, la cessation volontaire des hostilites est un acte de civilisation. Le khalifa ne cherche pas la destruction de l'adversaire mais la fin du conflit. Quand l'adversaire cesse, la mission du khalifa exige qu'il accueille cette cessation et ne poursuive pas l'agression. La forme reflexive (intaha) montre que la cessation la plus noble est celle qui vient de l'interieur — l'adversaire qui choisit de s'arreter fait un acte de maturite que le khalifa doit honorer en cessant egalement les hostilites."
            },
            "Intelligence/Discernement": {
              status: "probable",
              senses: ["comprendre", "discerner", "intelligence", "perspicacite", "esprit penetrant"],
              proof_ctx: "Le Lane's donne pour n-h-y un sens secondaire lie a l'intelligence : la nuhya est l'intelligence, l'esprit qui interdit a son possesseur de faire le mal. Ce sens derive du sens premier d'interdiction — l'intelligence est ce qui « interdit » a la personne de mal agir, c'est un empechement interieur. Mais le contexte du verset est la cessation d'hostilites (fa-in intahaw = s'ils cessent), pas l'exercice d'une faculte intellectuelle. La forme VIII a l'accompli 3MP (intahaw) designe un acte concret — ils ont cesse, ils se sont arretes — pas un etat intellectuel. La distinction philosophique est que le discernement est une faculte cognitive permanente (on a de l'intelligence), tandis que la cessation est un acte ponctuel et volontaire (on cesse une action precise). Le texte parle de l'acte, pas de la faculte qui le precede. De plus, le contexte des versets 191-193 est clairement militaire et relationnel — il s'agit d'arreter un comportement hostile, pas de comprendre une verite.",
              axe1_verset: "Le mot intahaw dans un contexte de condition (in intahaw = s'ils cessent) suivi d'une consequence divine (Dieu couvre et fait misericorde) oriente vers un acte concret, pas une faculte. Le champ lexical (Dieu, couverture, misericorde) repond a un changement de comportement, pas a un changement de comprehension. Le verset recompense ceux qui CESSENT, pas ceux qui COMPRENNENT — meme si la comprehension precede la cessation, c'est l'acte d'arreter qui est la condition de la misericorde divine.",
              axe2_voisins: "Le verset 2:191 parlait de combattre et d'expulser — des actions physiques. Le verset 2:193 reprend la meme forme (in intahaw) pour dire « pas d'agression sauf contre les injustes ». La sequence confirme que intahaw designe un changement d'action (cesser le combat), pas un changement de perception. Les versets voisins sont tous dans le registre de l'action, pas de la cognition.",
              axe3_sourate: "La sourate al-Baqarah utilise des racines specifiques pour l'intelligence et la comprehension ('aql en 2:44, fqh en 2:171, lbb en 2:179). La racine n-h-y n'est pas utilisee dans la sourate pour le discernement mais pour l'interdiction et la cessation. Le choix du verbe intaha dans ce contexte marque un acte de retenue, pas une faculte mentale.",
              axe4_coherence: "Le Coran utilise d'autres racines pour le discernement et l'intelligence de maniere beaucoup plus explicite. La racine '-q-l (raison), f-q-h (comprendre), l-b-b (intelligence profonde) sont les racines corrigees pour le discernement. La racine n-h-y dans le sens d'intelligence est un sens secondaire et derive dans le Lane's, pas le sens premier utilise dans le Coran.",
              axe5_frequence: "Le discernement est une qualite du khalifa, mais dans ce verset precis, ce n'est pas le discernement qui est recompense par la misericorde divine — c'est l'acte concret de cesser. Le khalifa peut comprendre sans cesser (le discernement seul ne suffit pas), mais s'il cesse, la misericorde divine repond."
            },
            "Sens isole/Atteindre": {
              status: "peu_probable",
              senses: ["atteindre", "parvenir a un terme", "aboutir", "fin", "extremite"],
              proof_ctx: "Le Lane's donne pour n-h-y un sens de « parvenir a un terme, atteindre une fin, arriver au bout ». Ce sens est lie a l'idee qu'une chose atteint sa limite et s'arrete — la riviere atteint son embouchure (muntaha). Mais le contexte du verset est une condition de cessation d'hostilites — « s'ils cessent » — pas un aboutissement naturel. La distinction philosophique est que « atteindre un terme » est un processus naturel et passif (une chose arrive a sa fin par epuisement), tandis que « cesser » est un acte volontaire et actif (quelqu'un decide d'arreter). La forme VIII (intaha) avec son sujet pluriel humain (ils) marque une decision humaine, pas un processus naturel. De plus, le parallele avec 2:193 ou la meme forme intahaw est suivie de « pas d'agression » confirme que le sens est la cessation volontaire, pas l'aboutissement passif.",
              axe1_verset: "Le champ lexical du verset (condition, Dieu, couverture, misericorde) repond a un changement de comportement humain, pas a l'aboutissement d'un processus. La cessation est presentee comme un choix meritoire qui appelle la misericorde divine — un processus naturel qui atteint son terme n'aurait pas besoin de misericorde. Le verset recompense un effort humain, pas un evenement passif.",
              axe2_voisins: "Les versets 2:190-193 traitent du combat et de ses regles — un contexte d'action humaine deliberee. L'aboutissement naturel d'un processus n'a pas sa place dans ce contexte d'injonctions et de conditions. Les versets voisins sont tous dans le registre de la volonte et de la decision, pas de la maturation naturelle.",
              axe3_sourate: "La sourate al-Baqarah utilise des racines specifiques pour l'aboutissement et la fin (b-l-gh pour atteindre, t-m-m pour accomplir). La racine n-h-y dans la sourate est utilisee pour l'interdiction et la cessation, pas pour l'aboutissement.",
              axe4_coherence: "Le Coran utilise la racine n-h-y dans d'autres versets sous la forme muntaha (terme, fin) en 53:14 et 53:42. Mais la forme VIII intaha dans les versets legislatifs (2:192, 2:193, 4:171) designe toujours la cessation volontaire d'un comportement, pas l'aboutissement d'un processus.",
              axe5_frequence: "Pour la mission du khalifa, l'aboutissement passif ne produit pas de merite moral. Le khalifa qui « atteint un terme » passivement ne fait rien de meritoire — c'est le khalifa qui CESSE activement une hostilite qui accomplit un acte de civilisation."
            }
          }
        }
      },
      // alh pos=3
      {
        word_key: "alh", position: 3, sense_chosen: "divinite",
        analysis_axes: {
          sense_chosen: "divinite",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["divinite", "adoration", "celui qu'on adore"],
              proof_ctx: "Le nom Allah est le nom propre divin de la racine '-l-h. Le Lane's donne : Dieu, la divinite unique, celui qu'on adore a l'exclusion de tout autre. Le mot est a l'accusatif comme complement de la particule inna qui introduit la phrase nominale emphatique. Allah est le sujet dont les deux attributs (ghafur, rahim) sont prediques. La divinite est une realite transcendante et unique — elle designe l'etre supreme qui possede tous les attributs de perfection. Dans ce verset, la mention de Dieu apres la condition de cessation etablit que la reponse a l'arret des hostilites vient directement de Dieu — c'est Lui qui couvre et fait misericorde, pas les croyants.",
              axe1_verset: "Le nom Allah est le pivot de la phrase nominale qui constitue la reponse a la condition. Le champ lexical (cesser, couvrir, misericorde) montre que Dieu est le sujet de la reponse — c'est Lui qui agit apres la cessation. Le verset construit une relation directe entre l'acte humain (cesser) et la reponse divine (couvrir et faire misericorde). La particule inna renforce la certitude : Dieu EST veritablement celui qui couvre et fait misericorde, ce n'est pas une promesse incertaine.",
              axe2_voisins: "Le verset 2:191 ordonnait le combat et l'expulsion. Le verset 2:192 introduit Dieu comme celui qui offre la couverture et la misericorde a ceux qui cessent. La sequence montre que Dieu n'est pas seulement le legislateur du combat (2:190-191) mais aussi celui qui offre la reconciliation (2:192). Les versets voisins presentent Dieu sous deux aspects : l'autorite qui prescrit le combat et la misericorde qui accueille la cessation.",
              axe3_sourate: "La racine '-l-h est la racine la plus fondamentale de la sourate al-Baqarah. Dieu est mentionne dans presque chaque passage legislatif comme source de l'autorite et de la misericorde. En 2:163, « votre Dieu est un Dieu unique (ilah wahid) ». En 2:186, « Je suis proche ». En 2:192, Dieu repond par la couverture et la misericorde. La sourate construit l'image d'un Dieu qui legifere et pardonne, qui prescrit et couvre.",
              axe4_coherence: "La racine '-l-h apparait dans tout le Coran pour designer la divinite unique. Le nom Allah est le nom propre de Dieu utilise plus de 2600 fois. La mention de Dieu apres une condition de cessation est un schema recurrent : en 8:38, « s'ils cessent, ce qui est passe leur sera pardonne ». En 2:192, la formulation est similaire — l'arret des hostilites ouvre la porte de la couverture divine.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source et la finalite de la mission. Le khalifa agit au nom de Dieu et vers Dieu. La mention de Dieu dans ce verset montre que la cessation des hostilites n'est pas une faiblesse humaine mais une ouverture vers la misericorde divine. Le khalifa qui cesse le combat quand l'adversaire cesse ne perd rien — il gagne l'acces a la couverture et a la misericorde de Dieu."
            }
          }
        }
      },
      // gfr pos=4
      {
        word_key: "gfr", position: 4, sense_chosen: "couverture",
        analysis_axes: {
          sense_chosen: "couverture",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["couvrir", "cacher", "voiler", "pardonner", "proteger", "recouvrir un defaut"],
              proof_ctx: "Le nom ghafurun est un adjectif intensif (fa'ul) de la racine gh-f-r. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine gh-f-r signifie : couvrir, cacher, voiler, proteger, recouvrir un defaut, pardonner. Le ghifar est le vetement qui couvre, le mighfar est le casque qui protege la tete en la couvrant. La forme fa'ul marque l'intensite — ghafur est celui qui couvre enormement, de maniere repetee et complete. La couverture est un acte exterieur et directif — elle sort de celui qui couvre et atteint ce qui est couvert. C'est un acte delibere et concret : la faute est recouverte comme un corps est recouvert par un vetement. Le concept de couverture est plus concret et plus riche que le concept de pardon tel qu'il est compris en francais. Couvrir une faute, c'est la rendre invisible, la faire disparaitre sous un voile protecteur — ce n'est pas un processus emotionnel de reconciliation mais un acte de puissance qui efface la trace de la faute.",
              axe1_verset: "Le mot ghafurun est le premier attribut divin predique apres la condition de cessation. Le champ lexical (cesser, Dieu, misericorde) montre que la couverture est la premiere reponse divine a la cessation humaine. L'ordre est significatif : d'abord Dieu couvre (les fautes passees), puis Il fait misericorde (pour l'avenir). La couverture repond aux actes passes — les hostilites commises avant la cessation sont couvertes, rendues invisibles, effacees. Le mot est au nominatif indefini comme attribut predicatif — Dieu est couvrant par nature, pas seulement dans cette circonstance. La forme intensive fa'ul montre que la couverture divine n'est pas parcimonieuse — elle est immense et enveloppante.",
              axe2_voisins: "Le verset 2:191 parlait du combat — des actes violents et graves. Le verset 2:192 repond : si les adversaires cessent, Dieu couvre ce qu'ils ont fait. La sequence montre que meme les actes les plus graves (combattre les croyants, les expulser de leurs lieux sacres) peuvent etre couverts par Dieu si les coupables cessent. La couverture divine n'est pas limitee aux fautes legeres — elle s'etend aux transgressions les plus serieuses. Les versets voisins etablissent que la porte de la couverture reste ouverte tant que la cessation est sincere.",
              axe3_sourate: "La racine gh-f-r est tres frequente dans la sourate al-Baqarah. En 2:173, apres l'interdiction alimentaire, « Dieu est ghafur rahim ». En 2:182, apres le testament, « Dieu est ghafur rahim ». En 2:192, apres le combat, « Dieu est ghafur rahim ». La sourate utilise la formule « ghafur rahim » comme une cloture recurrente des passages legislatifs — chaque obligation est assortie de la promesse que Dieu couvre les fautes de ceux qui se corrigent. La repetition montre que la couverture divine est un principe constant, pas une exception.",
              axe4_coherence: "La racine gh-f-r apparait environ 234 fois dans le Coran. En 39:53, « Dieu pardonne (yaghfiru) tous les peches ». En 4:110, « celui qui fait le mal puis demande le pardon de Dieu trouvera Dieu ghafur rahim ». En 8:38, « s'ils cessent, ce qui est passe leur sera pardonne (yughfar lahum) ». Le Coran lie systematiquement la couverture divine a la cessation du mal — celui qui arrete recoit la couverture. Le schema est constant : faute → cessation → couverture divine. Le verset 2:192 applique ce schema au contexte du combat.",
              axe5_frequence: "Pour la mission du khalifa, la couverture divine est l'assurance que les erreurs passees ne sont pas irreversibles. Le khalifa qui a commis des fautes peut toujours cesser et recevoir la couverture de Dieu. Cette couverture n'efface pas les consequences materielles des actes, mais elle efface la trace de la faute dans le registre divin. Le khalifa sait que sa mission n'est pas compromise par ses erreurs passees s'il cesse et se corrige — Dieu couvre ce qui a ete fait."
            }
          }
        }
      },
      // rhm pos=5
      {
        word_key: "rhm", position: 5, sense_chosen: "misericorde",
        analysis_axes: {
          sense_chosen: "misericorde",
          concept_chosen: "Misericorde/Tendresse",
          concepts: {
            "Misericorde/Tendresse": {
              status: "retenu",
              senses: ["misericorde", "tendresse", "compassion", "clemence", "douceur", "matrice"],
              proof_ctx: "Le nom rahimun est un adjectif intensif (fa'il) de la racine r-h-m. D'apres les sources etymologiques, la racine r-h-m signifie : avoir de la tendresse, etre touche de compassion, faire misericorde, matrice maternelle (rahim), pluie bienfaisante. La forme fa'il marque l'agent actif et continu — rahim est celui qui fait misericorde activement et en permanence. La misericorde est un acte exterieur et directif — elle sort de celui qui l'exerce et atteint celui qui la recoit. Ce n'est pas un sentiment interieur qui reste chez celui qui le ressent, mais une action qui change la realite de celui qui en beneficie. La racine est liee a la matrice maternelle (rahim) — la misericorde divine est comparee a la tendresse de la mere pour son enfant dans le ventre, une tendresse qui enveloppe, nourrit et protege. Le concept de misericorde/tendresse est un acte de bonte active qui cree un espace de securite pour celui qui en beneficie.",
              axe1_verset: "Le mot rahimun est le second attribut divin predique apres ghafurun. Le champ lexical (cesser, Dieu, couverture) montre que la misericorde complete la couverture — Dieu ne se contente pas de couvrir les fautes passees, Il fait aussi misericorde pour l'avenir. L'ordre est significatif : la couverture efface le passe, la misericorde ouvre l'avenir. Les deux attributs ensemble forment une reponse divine complete a la cessation humaine : le passe est couvert, l'avenir est enveloppe de misericorde. Le mot est au nominatif indefini comme second attribut predicatif — Dieu est misericordieux par nature. La juxtaposition sans conjonction (ghafurun rahimun, pas ghafurun wa-rahimun) montre que les deux qualites sont inseparables.",
              axe2_voisins: "Le verset 2:191 parlait de violence et d'expulsion. Le verset 2:192 repond par la couverture et la misericorde. La sequence montre que la misericorde divine est la reponse ultime a la violence humaine — quand les hommes cessent de se faire du mal, Dieu repond par la tendresse et la bienveillance. La misericorde n'est pas conditionnee par la gravite des actes passes mais par la realite de la cessation presente. Les versets voisins construisent un contraste : la durete du combat (191) face a la douceur de la misericorde divine (192).",
              axe3_sourate: "La racine r-h-m est omnipresente dans la sourate al-Baqarah. La basmala ouvre la sourate par « ar-Rahman ar-Rahim ». En 2:143, « Dieu est ra'uf rahim ». En 2:163, « le Misericordieux, le Misericordisant ». En 2:173, 2:182 et 2:192, la formule « ghafur rahim » conclut les passages legislatifs. La sourate construit la misericorde comme un attribut central et permanent de Dieu — elle n'est jamais absente, meme dans les versets les plus stricts. La misericorde est le dernier mot de chaque legislation, comme pour rappeler que la loi divine n'est pas punitive mais misericordieuse.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran — c'est une des racines les plus frequentes. En 7:156, « Ma misericorde embrasse toute chose ». En 21:107, le Prophete est « une misericorde pour les mondes ». En 6:12, « Dieu s'est prescrit a Lui-meme la misericorde ». Le Coran presente la misericorde comme l'attribut le plus fondamental de Dieu — Il se l'est prescrite a Lui-meme, elle embrasse toute chose, elle est la finalite de la creation. Le verset 2:192 s'inscrit dans cette theologie de la misericorde universelle.",
              axe5_frequence: "Pour la mission du khalifa, la misericorde est le modele de la mission. Le khalifa est appele a etre misericordieux parce que Dieu est misericordieux — la misericorde divine est le modele de la justice humaine. Le verset montre que meme dans le contexte du combat, la finalite n'est pas la destruction mais la misericorde. Le khalifa qui cesse le combat quand l'adversaire cesse imite la misericorde divine — il ouvre la porte de la reconciliation au lieu de poursuivre la vengeance. La misericorde est l'horizon ultime de la mission du khalifa."
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

  // Check if VWA already exists
  const { data: existingVwa } = await supabase
    .from('verse_word_analyses')
    .select('id')
    .eq('verse_id', data.verse_id)
    .limit(1);

  if (existingVwa && existingVwa.length > 0) {
    console.log('  VWA deja existantes — skip insertion');
    return;
  }

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

  const verseIds = [199];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 192 ===\n');
  await processVerse(192);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V192 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
