const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 232
// verse_id=239, analysis_id=600
// "wa idha tallaqtumu al-nisaa fa balaghna ajalahunna
//  fa la ta'dhuluwhunna an yankihna azwajahunna
//  idha taradaw baynahum bi al-ma'rufi
//  dhalika yu'azu bihi man kana minkum yu'minu bi Allah wa al-yawmi al-akhiri
//  dhalikum azka lakum wa athar
//  wa Allah ya'lamu wa antum la ta'lamuna"
// =====================================================

const verseData = {
  232: {
    verse_id: 239,
    analysis_id: 600,
    translation_arab: "Quand vous repudiez les femmes et qu'elles atteignent leur terme, ne les empechez pas d'epouser leurs anciens maris quand ils s'accordent convenablement entre eux. C'est a quoi est exhorte quiconque d'entre vous croit en Dieu et au Jour dernier. Cela est plus pur pour vous et plus propre. Dieu sait et vous ne savez pas.",
    full_translation: "Et quand vous répudiez les femmes et qu'elles ont atteint le terme fixé, ne les empêchez pas d'épouser leurs (anciens) maris, lorsqu'ils se sont mis d'accord entre eux de façon convenable. C'est là un avertissement pour celui d'entre vous qui croit en Allah et au Jour Dernier. C'est plus decent pour vous et plus pur. Allah sait et vous ne savez pas.",
    translation_explanation: "§DEMARCHE§\n" +
"Le verset 232 adresse un cas specifique du droit post-talaq : le wali (tuteur masculin) qui empeche une femme divorcee de se remarier avec son ancien mari. Cette pratique de l''adl (empechement abusif) etait courante dans l'Arabie pre-islamique, les families considerant que le retour de la femme a son ex-mari etait une humiliation. Le verset l'interdit formellement et pose la condition du taradhi (accord mutuel) bi al-ma'ruf (convenablement).\n" +
"\n" +
"Le verset ouvre avec la meme formule conditionnelle que le verset 231 (wa idha tallaqtumu al-nisaa fa balaghna ajalahunna) mais debouche sur une interdiction differente : fa la ta'dhuluwhunna (ne les empechez pas). La cible est ici non plus le mari mais les wulat al-amr (tuteurs).\n" +
"\n" +
"Le verbe **tallaqtumu** (2MP, racine t-l-q) repudie/separez — voir analyse V231. La repetition de la meme ouverture en 2:231 et 2:232 cree une inclusion : les deux versets traitent du meme cadre legal mais de personnes differentes (le mari en 231, le tuteur en 232).\n" +
"\n" +
"Le verbe **balaghna** (3FP, racine b-l-gh) atteindre/parvenir — voir analyse V231. L'atteinte du terme ('idda) est le seuil declencheur : avant ce terme, la decision appartient au mari ; apres, la femme est libre de ses choix matrimoniaux sous reserve du wali.\n" +
"\n" +
"Le nom **ajalahunna** (racine '-j-l) terme/echeance — voir analyse V231. Le terme de la 'idda est ici la limite apres laquelle la femme peut envisager le remariage. L'interdiction de l''adl s'applique une fois ce terme atteint.\n" +
"\n" +
"Le verbe **yankihna** est un inaccompli subjonctif 3FP de la racine n-k-h. Le Lane's donne : se marier, epouser, contracter un mariage formel. Yankihna azwajahunna = qu'elles epousent leurs anciens maris. Le subjonctif (apres an) indique la perspective : l'acte potentiel de remariage que le wali tente d'empecher.\n" +
"\n" +
"Le nom **azwajahunna** est un accusatif pluriel de la racine z-w-j avec suffixe possessif feminin pluriel. Le Lane's donne : epoux, couple, paire, partenaire conjugal. Azwajahunna = leurs maris (anciens). Le meme mot zawj pour le mari (epoux actuel ou ancien) — le Coran ne fait pas de distinction lexicale entre l'ancien et le nouveau mari : zawj est zawj.\n" +
"\n" +
"Le verbe **taradaw** est un accompli 3MP de la racine r-d-y (Form VI, taradda). Le Lane's donne : etre satisfait, agreer, consentir ; Form VI = accord mutuel, consentement reciproque. Taradaw baynahum = ils s'accordent entre eux — consentement mutuel des deux parties (la femme et son ex-mari).\n" +
"\n" +
"Le nom **ma'rufi** (bi al-ma'ruf) est de la racine '-r-f — voir analyse V231. Bi al-ma'ruf = convenablement / selon les normes reconnues comme bien. La condition du taradhi doit etre conforme au ma'ruf — un accord mutuel mais dans le respect des normes sociales et morales.\n" +
"\n" +
"Le verbe **yu'azu** (yuwaazu) est un inaccompli passif 3MS de la racine w-'-z. Le Lane's donne : etre exhorte, recevoir une exhortation. Dhalika yu'azu bihi = c'est a quoi est exhorte... — la prescription est une exhortation, pas seulement une loi.\n" +
"\n" +
"Le verbe **yu'minu** est un inaccompli 3MS de la racine '-m-n. Le Lane's donne : croire, avoir foi, etre en securite/paix, rendre sur. Yu'minu bi Allah wa al-yawmi al-akhiri = il croit en Dieu et au Jour dernier. La foi (iman) est la condition de reception de l'exhortation.\n" +
"\n" +
"Le nom **azka** est l'elatif de la racine z-k-w. Le Lane's donne : pureté morale, accroissement, croissance, ce qui s'eleve, ce qui se purifie. Azka lakum = plus pur pour vous — moralement plus eleve, plus propre spirituellement.\n" +
"\n" +
"Le nom **athar** est l'elatif de la racine t-h-r. Le Lane's donne : pureté physique et morale, proprete, nettete, absence de souillure. Athar = plus propre / plus net. La paire azka/athar est une double affirmation de pureté : l'une morale (zakah), l'autre rituelle (tahara).\n" +
"\n" +
"Le verbe **ya'lamu** et **ta'lamuna** sont de la racine '-l-m (voir analyse V231). Ya'lamu Allahu wa antum la ta'lamuna = Dieu sait et vous ne savez pas — la cloture epistemique par contraste : l'omniscience divine face a l'ignorance humaine.\n" +
"\n" +
"§JUSTIFICATION§\n" +
"**Ne les empechez pas d'epouser leurs anciens maris** — fa la ta'dhuluwhunna. Le 'adl (empechement abusif) est un terme specifique du droit matrimonial islamique. Le wali (tuteur) n'a pas le droit d'empecher le remariage de sa pupille si celle-ci le souhaite et si les conditions sont remplies. Le verset transforme une pratique culturelle (honneur familial) en transgression religieuse.\n" +
"\n" +
"**Quand ils s'accordent convenablement** — idha taradaw baynahum bi al-ma'ruf. Le taradhi (accord mutuel) est la condition cle : ce n'est pas le tuteur qui decide mais les deux parties elles-memes. Le bi al-ma'ruf (convenablement) ajoute la dimension normative : cet accord doit etre socialement et moralement reconnu comme bien.\n" +
"\n" +
"**C'est a quoi est exhorte celui qui croit** — dhalika yu'azu bihi man kana minkum yu'minu. L'exhortation (wa'z) est adressée aux croyants (mu'minun) specifiquement. La foi en Dieu et au Jour dernier est la motivation : respecter le droit de la femme a se remarier est un acte de foi, pas seulement d'ethique.\n" +
"\n" +
"**Cela est plus pur et plus propre pour vous** — dhalikum azka lakum wa athar. Les deux elatifs (azka = plus pur moralement ; athar = plus propre rituellement) s'adressent aux tuteurs : en respectant le droit de la femme, ils preservent leur propre pureté morale et rituelle. L'empechement abusif souille celui qui le pratique.\n" +
"\n" +
"**Dieu sait et vous ne savez pas** — Allah ya'lamu wa antum la ta'lamuna. La cloture contrastive est l'argument definitif : les tuteurs croient defendre l'honneur de la famille mais Dieu sait que le vrai honneur est dans le respect des droits de la femme. L'omniscience divine depasse et corrige la vision humaine limitee.\n" +
"\n" +
"§CRITIQUE§\n" +
"Hamidullah traduit « fa la ta'dhuluwhunna » par « ne les empêchez pas ». La racine '-d-l (ou '-d-w selon la vocalisation) donne dans ce contexte : 'adl = empechement, prevention abusive. Le terme est juridiquement precis en droit islamique — il designe specifiquement le tuteur qui empeche le mariage de sa pupille. Hamidullah capture l'interdit mais perd la specificite juridique du 'adl.\n" +
"\n" +
"Hamidullah traduit « dhalikum azka lakum wa athar » par « c'est plus decent pour vous et plus pur ». La racine z-k-w (azka) signifie plus pur moralement, plus eleve spirituellement — la zakat est la purification par le don. La racine t-h-r (athar) est la pureté rituelle, l'absence de souillure. La paire azka/athar couvre les deux dimensions de la pureté : morale et rituelle. Hamidullah traduit athar par « plus pur » apres avoir traduit azka par « plus decent » — la distinction entre moral et rituel n'est pas rendue.\n" +
"\n" +
"La cloture « Allah ya'lamu wa antum la ta'lamuna » (Dieu sait et vous ne savez pas) est sans doute le message le plus profond du verset 232 : les tuteurs pensent savoir ce qui est bon pour leur famille et leur honneur, mais Dieu sait que le vrai bien est dans le respect de la liberte de la femme. Cette asymetrie epistemique (connaissance divine vs ignorance humaine) est la base theologale de la prescription.",
    segments: [
      { fr: "Quand vous repudiez les femmes", pos: "verbe", phon: "wa idha tallaqtumu al-nisaa", arabic: "وَإِذَا طَلَّقْتُمُ ٱلنِّسَآءَ", word_key: "tlq", is_particle: false, sense_retenu: "separation/liberation", position: 2 },
      { fr: "et qu'elles atteignent leur terme", pos: "verbe", phon: "fa balaghna ajalahunna", arabic: "فَبَلَغْنَ أَجَلَهُنَّ", word_key: "blgh", is_particle: false, sense_retenu: "atteinte/accomplissement", position: 4 },
      { fr: "leur terme", pos: "nom", phon: "ajalahunna", arabic: "أَجَلَهُنَّ", word_key: "ajl", is_particle: false, sense_retenu: "terme/delai", position: 5 },
      { fr: "ne les empechez pas d'epouser", pos: "verbe", phon: "fa la ta'dhuluwhunna an yankihna", arabic: "فَلَا تَعْضُلُوهُنَّ أَن يَنكِحْنَ", word_key: "nkh", is_particle: false, sense_retenu: "mariage/union", position: 9 },
      { fr: "leurs anciens maris", pos: "nom", phon: "azwajahunna", arabic: "أَزْوَٰجَهُنَّ", word_key: "zwj", is_particle: false, sense_retenu: "couple/union", position: 10 },
      { fr: "quand ils s'accordent entre eux", pos: "verbe", phon: "idha taradaw baynahum", arabic: "إِذَا تَرَٰضَوْا۟ بَيْنَهُم", word_key: "rdy", is_particle: false, sense_retenu: "accord/agrement", position: 12 },
      { fr: "convenablement", pos: "nom", phon: "bi al-ma'rufi", arabic: "بِٱلْمَعْرُوفِ", word_key: "erf", is_particle: false, sense_retenu: "convention/bienfait", position: 14 },
      { fr: "c'est a quoi est exhorte", pos: "verbe", phon: "dhalika yu'azu bihi", arabic: "ذَٰلِكَ يُوعَظُ بِهِۦ", word_key: "wez", is_particle: false, sense_retenu: "exhortation/conseil", position: 16 },
      { fr: "quiconque d'entre vous croit", pos: "verbe", phon: "man kana minkum yu'minu", arabic: "مَن كَانَ مِنكُمْ يُؤْمِنُ", word_key: "amn", is_particle: false, sense_retenu: "foi/securite", position: 22 },
      { fr: "cela est plus pur pour vous", pos: "nom", phon: "dhalikum azka lakum", arabic: "ذَٰلِكُمْ أَزْكَىٰ لَكُمْ", word_key: "zkw", is_particle: false, sense_retenu: "purete/croissance", position: 27 },
      { fr: "et plus propre", pos: "nom", phon: "wa athar", arabic: "وَأَطْهَرُ", word_key: "thr", is_particle: false, sense_retenu: "purete/nettete", position: 29 },
      { fr: "Dieu sait et vous ne savez pas", pos: "verbe", phon: "wa Allahu ya'lamu wa antum la ta'lamuna", arabic: "وَٱللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ", word_key: "elm", is_particle: false, sense_retenu: "savoir/connaissance", position: 31 }
    ],
    vwa: [
      {
        word_key: "tlq",
        position: 2,
        sense_chosen: "separation/liberation",
        analysis_axes: {
          sense_chosen: "separation/liberation",
          concept_chosen: "Séparation/Libération",
          concepts: {
            "Séparation/Libération": {
              status: "retenu",
              senses: ["repudier", "divorcer", "liberer", "separation", "dissolution du lien"],
              proof_ctx: "Le verbe tallaqtumu est un accompli 2MP de la racine t-l-q (Form II, tallaqa). Le Lane's donne pour t-l-q : relacher, liberer, dissoudre un lien, repudier. Tallaqtumu = vous avez repudie. En 2:232, le talaq est le point de depart du cadre : une fois la repudiation prononcee et la 'idda presque achevee, le wali n'a pas le droit d'empecher le remariage.",
              axe1_verset: "Dans le verset 232, tallaqtumu ouvre la meme conditionnelle qu'en 231 (idha tallaqtumu). La repudiation (talaq) est le fait etabli qui cree le contexte legal. Le verset 232 ne legifere pas sur le talaq lui-meme mais sur ce qui se passe apres : le droit au remariage de la femme divorcee contre la volonte abusive du tuteur.",
              axe2_voisins: "Les versets 231 et 232 forment un diptyque : 231 adresse le mari qui retient abusivement pendant la 'idda ; 232 adresse le tuteur qui empeche le remariage apres la 'idda. La racine t-l-q lie les deux versets comme contexte commun.",
              axe3_sourate: "La racine t-l-q est centrale dans la section matrimoniale de al-Baqarah (2:226-241). En 2:232, comme en 2:229, 230, 231, le talaq est le terme juridique de la dissolution du mariage.",
              axe4_coherence: "La racine t-l-q apparait environ 30 fois dans le Coran. En contexte conjugal, le sens de separation/liberation est constant et technique. Ici, le talaq du verset 232 est revocable (premier ou second) — le remariage avec l'ex-mari est possible, donc ce n'est pas le troisieme talaq definitif.",
              axe5_frequence: "Le fait que le remariage avec l'ex-mari soit envisage (yankihna azwajahunna = qu'elles epousent leurs [anciens] maris) confirme que le talaq du v.232 est revocable : apres le troisieme definitif (v.230), le remariage avec le premier mari ne serait possible qu'apres le mariage intermediaire."
            }
          }
        }
      },
      {
        word_key: "blgh",
        position: 4,
        sense_chosen: "atteinte/accomplissement",
        analysis_axes: {
          sense_chosen: "atteinte/accomplissement",
          concept_chosen: "Atteinte/Accomplissement",
          concepts: {
            "Atteinte/Accomplissement": {
              status: "retenu",
              senses: ["atteindre", "parvenir", "arriver a terme", "accomplir", "balaghna"],
              proof_ctx: "Le verbe balaghna est un accompli 3FP de la racine b-l-gh. Le Lane's donne : atteindre, parvenir a, arriver jusqu'a, accomplir une limite. Balaghna ajalahunna = elles ont atteint leur terme. La 'idda est quasiment achevee — c'est le moment de la decision pour le remariage eventuel.",
              axe1_verset: "En 2:232, balaghna ajalahunna (elles ont atteint leur terme) est le seuil a partir duquel l'interdiction de l''adl devient pertinente. Avant la fin de la 'idda, la situation est encore celle du verset 231 (retention ou liberation par le mari). Apres ce terme, la femme est juridiquement libre de ses choix — c'est a ce moment que le tuteur (wali) pourrait tenter d'exercer son 'adl.",
              axe2_voisins: "Balaghna ajalahunna est identique en 2:231 et 2:232 — c'est la meme formule qui marque le seuil de la 'idda. Les deux versets traitent de la periode critique autour de ce terme, mais avec des acteurs differents (mari vs tuteur).",
              axe3_sourate: "La racine b-l-gh marque des seuils temporels critiques dans al-Baqarah (2:231, 232, 235, 234). L'atteinte d'une limite temporelle est systematiquement le declencheur d'obligations ou de droits.",
              axe4_coherence: "La racine b-l-gh apparait environ 68 fois dans le Coran. Le sens central est l'atteinte d'une limite ou d'un but — souvent un seuil qui ouvre une nouvelle etape juridique ou spirituelle.",
              axe5_frequence: "La formule identique balaghna ajalahunna en 2:231 et 2:232 montre que le Coran legifere systematiquement pour les moments critiques — non dans l'absolu mais dans les transitions. La sagesse legislative coranique est souvent situationnelle : que faire quand telle situation survient."
            }
          }
        }
      },
      {
        word_key: "ajl",
        position: 5,
        sense_chosen: "terme/delai",
        analysis_axes: {
          sense_chosen: "terme/delai",
          concept_chosen: "Terme/Délai",
          concepts: {
            "Terme/Délai": {
              status: "retenu",
              senses: ["terme fixe", "echeance", "delai", "limite temporelle", "ajal"],
              proof_ctx: "Le nom ajalahunna est un accusatif de la racine '-j-l avec suffixe possessif feminin pluriel. Le Lane's donne : terme fixe, echeance, delai ordonne, limite temporelle assignee. Ajalahunna = leur terme a elles — la 'idda est la limite temporelle specifique a chaque femme selon sa situation (menstruations, grossesse, etc.).",
              axe1_verset: "En 2:232, ajalahunna est le terme de la 'idda a partir duquel le droit de remariage de la femme s'actualise. L'interdiction du 'adl (fa la ta'dhuluwhunna = ne les empechez pas) est posterieure a l'atteinte de ce terme — le tuteur n'a pas le droit d'empecher ce que Dieu a permis apres la 'idda.",
              axe2_voisins: "L'ajal de la 'idda apparait en 2:231 et 232 (meme formule), ainsi qu'en 2:234 (pour la 'idda de veuvage : arba'ata ashhurin wa 'ashran = quatre mois et dix jours) et 2:235 (hatta yablugha al-kitabu ajalahu = jusqu'a ce que l'acte legal atteigne son terme).",
              axe3_sourate: "Dans al-Baqarah, l'ajal organise le temps post-talaq. Il est a la fois une protection pour la femme (temps de reflection, verification de grossesse) et une contrainte pour les parties (decisions a prendre dans ce delai).",
              axe4_coherence: "La racine '-j-l apparait environ 55 fois dans le Coran. Le sens fondamental est la limite temporelle fixee — indepassable dans sa nature. L'ajal est toujours une limite divine : ajal al-mawt (terme de la mort), ajal al-'idda (terme de l'attente).",
              axe5_frequence: "La fixite du terme ('idda) est une sagesse legislative : elle empeche l'indefinition et force les decisions dans un cadre temporel clair. Pour la femme divorcee, la 'idda est a la fois une contrainte (attente) et une protection (temps pour verifier la grossesse, clarifier la situation)."
            }
          }
        }
      },
      {
        word_key: "nkh",
        position: 9,
        sense_chosen: "mariage/union",
        analysis_axes: {
          sense_chosen: "mariage/union",
          concept_chosen: "Mariage/Union",
          concepts: {
            "Mariage/Union": {
              status: "retenu",
              senses: ["mariage", "epouser", "contracter un mariage", "union conjugale", "nikah"],
              proof_ctx: "Le verbe yankihna est un inaccompli subjonctif 3FP de la racine n-k-h. Le Lane's donne : se marier, epouser, contracter un mariage formel. Yankihna azwajahunna = qu'elles epousent leurs [anciens] maris. Le subjonctif (apres an) marque la perspective : le remariage potentiel que le tuteur tente d'empecher. La nikah est le mariage formel — contrat d'union conjugale.",
              axe1_verset: "Fa la ta'dhuluwhunna an yankihna (ne les empechez pas d'epouser) est l'interdiction centrale du verset 232. Le droit des femmes de contracter une nikah (mariage) avec leurs anciens maris — si le consentement mutuel est present (taradaw) et si c'est conforme au ma'ruf — est protege par cette injonction divine contre toute interference abusive.",
              axe2_voisins: "La racine n-k-h est presente en 2:221 (la tankihu al-mushrikat), 2:230 (hatta tankiha zawjan ghayrihi), 2:232 (yankihna azwajahunna), 2:235 (azamtum 'uqdat al-nikahi = vous avez decide de contracter un mariage). La nikah est le terme technique du mariage islamique.",
              axe3_sourate: "Dans al-Baqarah, la nikah est le fondement de la legislation matrimoniale. Elle est presente dans tous les versets traitant du mariage et du divorce. Le Coran protege systematiquement le droit a la nikah contre les interferences illegitimes.",
              axe4_coherence: "La racine n-k-h apparait environ 23 fois dans le Coran. Le sens de mariage/union formelle est constant et technique. La nikah est le contrat d'union conjugale reconnu juridiquement.",
              axe5_frequence: "La protection du droit de la femme a la nikah dans le verset 232 est une avancee juridique majeure par rapport aux pratiques pre-islamiques. Le tuteur (wali) ne peut pas imposer son veto au remariage de sa pupille si celle-ci consent et si les conditions legales sont remplies."
            }
          }
        }
      },
      {
        word_key: "zwj",
        position: 10,
        sense_chosen: "couple/union",
        analysis_axes: {
          sense_chosen: "couple/union",
          concept_chosen: "Couple/Union",
          concepts: {
            "Couple/Union": {
              status: "retenu",
              senses: ["epoux", "couple", "paire", "partenaire conjugal", "zawj"],
              proof_ctx: "Le nom azwajahunna est un accusatif pluriel de la racine z-w-j avec suffixe possessif feminin pluriel. Le Lane's donne : epoux, couple, paire, partenaire conjugal. Azwajahunna = leurs maris (anciens). La racine z-w-j designe fondamentalement la paire — le zawj est le partenaire dans l'union.",
              axe1_verset: "Azwajahunna (leurs [anciens] maris) dans le verset 232 est remarquable : le Coran appelle encore zawj l'ancien mari divorcé. Il n'y a pas de rupture lexicale — l'ex-mari reste un zawj potentiel. Cela souligne que le divorce revocable n'est pas une rupture ontologique mais juridique : le lien peut etre retabli.",
              axe2_voisins: "Le zawj apparait en 2:102, 230, 232, 233, 234, 235, 240. Dans tous les contextes, le zawj est le partenaire conjugal — actuel ou potentiel. En 2:230, zawjan ghayrihi (un autre epoux) ; en 2:232, azwajahunna (leurs [anciens] maris). La racine couvre l'epoux passe et futur.",
              axe3_sourate: "La racine z-w-j est la racine du mariage dans toute al-Baqarah. Le zawj (couple/paire) est un concept cosmique dans le Coran (tout est cree en paires) — en contexte conjugal, il designe le partenaire dans l'union.",
              axe4_coherence: "La racine z-w-j apparait environ 80 fois dans le Coran. Le sens de paire/couple est constant — en contexte conjugal, le zawj est l'epoux ou l'epouse selon le genre grammatical du referent.",
              axe5_frequence: "L'emploi de azwajahunna (leurs maris) pour les ex-maris dans le verset 232 n'est pas anodin : il signale que le remariage avec l'ex-mari est un retour a une union naturelle et non un nouveau mariage de toutes pieces. La paire (zawj) peut se reformer."
            }
          }
        }
      },
      {
        word_key: "rdy",
        position: 12,
        sense_chosen: "accord/agrement",
        analysis_axes: {
          sense_chosen: "accord/agrement",
          concept_chosen: "Accord/Agrément",
          concepts: {
            "Accord/Agrément": {
              status: "retenu",
              senses: ["s'accorder", "consentir mutuellement", "etre satisfait", "agrement reciproque", "taradhi"],
              proof_ctx: "Le verbe taradaw est un accompli 3MP de la racine r-d-y (Form VI, taradda). Le Lane's donne : etre satisfait, agreer, consentir ; Form VI = accord mutuel, consentement reciproque des deux parties. Taradaw baynahum = ils s'accordent mutuellement entre eux. La Form VI marque la reciprocite : le consentement est donne des deux cotes.",
              axe1_verset: "Idha taradaw baynahum bi al-ma'ruf (quand ils s'accordent convenablement entre eux) est la condition du remariage permis. Le taradhi (accord mutuel) entre la femme et son ex-mari est la condition suffisante — le tuteur n'a pas a intervenir si les deux parties sont d'accord. La double condition (taradhi + ma'ruf) garantit que le remariage est libre et convenable.",
              axe2_voisins: "La racine r-d-y avec le sens de consentement apparait en 4:24 (bi mahrihinna = avec leur dot, consentement sous-entendu), 9:100 (radiya Allahu 'anhum = Dieu est satisfait d'eux). La Form VI taradda (accord mutuel) est specifique au contexte de l'accord entre deux parties.",
              axe3_sourate: "La racine r-d-y et ses derives apparaissent en 2:205, 207, 232, 265, 272. Le consentement (rida) est un concept juridique important : les contrats islamiques exigent le consentement mutuel (rida). En 2:232, le taradhi est la base du remariage volontaire.",
              axe4_coherence: "La racine r-d-y apparait environ 73 fois dans le Coran. Le rida (satisfaction/agrément) est a la fois un sentiment interieur (etre satisfait) et un acte juridique (consentir). Dans le droit coranique, le consentement (rida) est une condition de validite des contrats.",
              axe5_frequence: "L'exigence du taradhi (accord mutuel) dans le verset 232 est une protection pour la femme : elle ne peut etre forcee au remariage avec son ex-mari si elle n'y consent pas. Le tuteur ne peut ni imposer ni empecher un remariage que les deux parties desirent librement."
            }
          }
        }
      },
      {
        word_key: "erf",
        position: 14,
        sense_chosen: "convention/bienfait",
        analysis_axes: {
          sense_chosen: "convention/bienfait",
          concept_chosen: "Convention/Bienfait",
          concepts: {
            "Convention/Bienfait": {
              status: "retenu",
              senses: ["ce qui est connu", "ce qui est reconnu comme bien", "convention sociale", "bienfait", "norme reconnue"],
              proof_ctx: "Le nom al-ma'ruf est de la racine '-r-f avec article defini. Le Lane's donne : ce qui est connu, ce qui est reconnu comme bien, ce qui est approuve socialement et moralement, la convention. Bi al-ma'ruf = selon ce qui est reconnu comme bien — conformement aux normes sociales et morales etablies.",
              axe1_verset: "Taradaw baynahum bi al-ma'ruf (ils s'accordent convenablement entre eux) : le ma'ruf qualifie ici l'accord (taradhi). L'accord mutuel doit etre bi al-ma'ruf — conforme aux normes reconnues. Un accord secret, illicite ou contraire aux usages etablis ne serait pas bi al-ma'ruf.",
              axe2_voisins: "Bi ma'rufin / bi al-ma'ruf est la formule normative recurrente dans tout le passage matrimonial de al-Baqarah : 2:228, 229, 231 (x2), 232, 233 (x3), 234, 235, 236, 240, 241. C'est le standard commun de toutes les transactions matrimoniales.",
              axe3_sourate: "Al-ma'ruf est le standard normatif de al-Baqarah dans ses sections juridiques. Il n'est pas defini explicitement — c'est ce que la communaute reconnait comme bien. La flexibilite du ma'ruf permet l'adaptation culturelle dans le cadre des valeurs islamiques.",
              axe4_coherence: "La racine '-r-f apparait environ 70 fois dans le Coran. Al-ma'ruf (le bien reconnu) s'oppose a al-munkar (le reprehensible). La paire est fondamentale dans l'ethique coranique et la legislation de al-Baqarah.",
              axe5_frequence: "En 2:232, bi al-ma'ruf qualifie le taradhi (accord mutuel) : l'accord doit etre publiquement reconnu comme convenable. Cela empeche les arrangements secrets ou les pressions cachees — le remariage doit etre ouvert et conforme aux normes communautaires."
            }
          }
        }
      },
      {
        word_key: "wez",
        position: 16,
        sense_chosen: "exhortation/conseil",
        analysis_axes: {
          sense_chosen: "exhortation/conseil",
          concept_chosen: "Exhortation/Conseil",
          concepts: {
            "Exhortation/Conseil": {
              status: "retenu",
              senses: ["exhorter", "conseiller", "admonester", "avertir", "wa'z"],
              proof_ctx: "Le verbe yu'azu (yuwaazu) est un inaccompli passif 3MS de la racine w-'-z. Le Lane's donne : exhorter, conseiller avec bienveillance, admonester, instruire par des paroles qui touchent le coeur. Yu'azu bihi = il est exhorte par cela. La voix passive met l'accent sur le destinataire (celui qui est exhorte) plutot que sur l'exhortateur.",
              axe1_verset: "Dhalika yu'azu bihi man kana minkum yu'minu (c'est a quoi est exhorte celui d'entre vous qui croit) : l'interdiction du 'adl (empechement abusif) est presentee comme une exhortation (wa'z) et non comme une simple loi. La cible est le croyant (mu'min) — la foi est la disposition interieure qui rend l'exhortation efficace.",
              axe2_voisins: "La racine w-'-z revient en 2:231 (ya'izukum bihi = Il vous exhorte par cela). Les deux versets consecutifs 231 et 232 utilisent la meme racine pour leur conclusion : 231 avec un verbe actif (ya'izu = Il exhorte), 232 avec un passif (yu'azu = il est exhorte). La reception de l'exhortation est symetrique a son emission.",
              axe3_sourate: "Dans al-Baqarah, la racine w-'-z apparait en 2:231 et 232. Elle marque la transition entre la legislation formelle (lois) et l'invitation spirituelle (foi). L'exhortation est le mode coranique de communication qui depasse la simple prescription.",
              axe4_coherence: "La racine w-'-z apparait environ 25 fois dans le Coran. Le wa'z est distinct du amr (ordre) et du nahy (interdit) : c'est une invitation qui touche le coeur, pas seulement une injonction qui contraint la volonte.",
              axe5_frequence: "En 2:232, dhalika yu'azu bihi (c'est a quoi est exhorte) suivi de man kana minkum yu'minu (celui qui croit) montre que l'interdiction du 'adl n'est pas seulement legale mais spirituelle. Respecter le droit de la femme a se remarier est un acte de foi — l'exhortation appelle a la dimension interieure de la croyance."
            }
          }
        }
      },
      {
        word_key: "amn",
        position: 22,
        sense_chosen: "foi/securite",
        analysis_axes: {
          sense_chosen: "foi/securite",
          concept_chosen: "Foi/Sécurité",
          concepts: {
            "Foi/Sécurité": {
              status: "retenu",
              senses: ["croire", "avoir foi", "etre en securite", "rendre sur", "iman"],
              proof_ctx: "Le verbe yu'minu est un inaccompli 3MS de la racine '-m-n. Le Lane's donne : croire, avoir foi, etre en securite, rendre sur, faire confiance. Yu'minu bi Allah wa al-yawmi al-akhiri = il croit en Dieu et au Jour dernier. La racine '-m-n couvre la foi (iman), la securite (aman) et la garantie (amana). La foi est un etat de securite ontologique fondee sur la confiance en Dieu.",
              axe1_verset: "Man kana minkum yu'minu bi Allah wa al-yawmi al-akhiri (celui d'entre vous qui croit en Dieu et au Jour dernier) est la specification du destinataire de l'exhortation. L'exhortation de ne pas empecher le remariage s'adresse aux croyants. La foi en Dieu et au Jour dernier est la motivation pour respecter ce droit : celui qui croit rendra compte devant Dieu de son 'adl abusif.",
              axe2_voisins: "La formule yu'minu bi Allah wa al-yawmi al-akhiri est recurrente dans le Coran (2:8, 62, 126, 177, 228, 232, 4:162, 5:69, 9:18, etc.). C'est la double formule de la foi islamique : Dieu et la fin des temps. Elle designe le croyant sincere — non pas le croyant superficiel mais celui dont la foi structure les actes.",
              axe3_sourate: "Dans al-Baqarah, la racine '-m-n et le concept d'iman sont centraux. La sourate s'ouvre sur la description des mu'minun (croyants) en 2:3-5. La foi en Dieu et au Jour dernier est la colonne vertebrale de l'ethique coranique.",
              axe4_coherence: "La racine '-m-n apparait environ 840 fois dans le Coran — c'est l'une des plus frequentes. L'iman (foi) est la disposition interieure fondamentale du croyant. Associer l'interdiction du 'adl a la foi montre que l'injustice envers les femmes est une atteinte a la foi elle-meme.",
              axe5_frequence: "La connexion entre l'interdiction du 'adl (empechement abusif) et la foi en Dieu et au Jour dernier est profonde : respecter les droits de la femme n'est pas seulement une obligation sociale mais un acte de foi. Celui qui croit au Jugement dernier sait que son 'adl sera juge."
            },
            "Sécurité/Garantie": {
              status: "probable",
              senses: ["securite", "garantie", "confiance", "amana", "aman"],
              proof_ctx: "La racine '-m-n donne aussi al-amana (la confiance/garantie) et al-aman (la securite). Dans certains contextes, yu'minu peut signifier donner la securite plutot que croire. En 2:232, le contexte est clairement la foi (iman) et non la securite.",
              axe1_verset: "Yu'minu bi Allah wa al-yawmi al-akhiri (il croit en Dieu et au Jour dernier) est une formule classique de la foi islamique — l'iman est le sens dominant ici.",
              axe2_voisins: "La meme formule yu'minu bi Allah wa al-yawm al-akhir apparait en 2:8, 62, 126, 177, 228. Dans tous ces contextes, le sens est la foi et non la securite.",
              axe3_sourate: "Dans al-Baqarah, les formes '-m-n au sens de securite/garantie sont moins frequentes que celles au sens de foi. Le contexte clair en 2:232 est la foi.",
              axe4_coherence: "La dimension de securite est presente dans la racine '-m-n mais secondaire dans le contexte de la foi. L'iman comme securite ontologique est une interpretation valide mais non le sens premier ici.",
              axe5_frequence: "Le sens de foi est dominant dans les quelque 840 occurrences de la racine '-m-n dans le Coran. Le sens de securite/garantie est present mais moins frequent dans les formules de foi explicite."
            }
          }
        }
      },
      {
        word_key: "zkw",
        position: 27,
        sense_chosen: "purete/croissance",
        analysis_axes: {
          sense_chosen: "purete/croissance",
          concept_chosen: "Pureté/Croissance",
          concepts: {
            "Pureté/Croissance": {
              status: "retenu",
              senses: ["purete morale", "croissance spirituelle", "ce qui s'eleve", "zakah", "azka"],
              proof_ctx: "Le nom azka est l'elatif (comparatif/superlatif) de la racine z-k-w. Le Lane's donne : etre pur moralement, croitre, s'accroitre, etre eleve. Azka = plus pur moralement / plus eleve spirituellement. La racine z-k-w designe la purification par l'accroissement — la zakat (aumone purificatrice) vient de cette racine : on purifie sa richesse en la faisant croitre par le partage.",
              axe1_verset: "Dhalikum azka lakum (cela est plus pur pour vous) : en respectant l'interdiction du 'adl (empechement abusif), le tuteur preserves sa propre pureté morale. L'azka est un comparatif — les tuteurs qui respectent ce droit sont moralement plus purs que ceux qui l'enfreignent. La purification morale est la consequence directe du respect des droits d'autrui.",
              axe2_voisins: "L'elatif azka apparait en 2:232 et en 24:21 (wa law la fadl Allah... la zaka minkum min ahad = sans la grace de Dieu, nul d'entre vous ne serait pur) et en 20:76 (dhalika jaza man tazakka = c'est la recompense de celui qui se purifie). La pureté (zaka) est toujours le resultat d'un effort moral ou d'une grace divine.",
              axe3_sourate: "Dans al-Baqarah, la racine z-k-w apparait en 2:43, 83, 110, 177, 232, 264, 271, 277 (dans ses formes de zakat/aumone). La paire zakat/salat (purification/priere) est recurrente. En 2:232, azka est l'application morale de la racine — non l'aumone mais la pureté du comportement.",
              axe4_coherence: "La racine z-k-w apparait environ 59 fois dans le Coran dans ses diverses formes. La zakat (purification par le don) et la tazakkiya (auto-purification) partagent la meme racine que azka (plus pur). La pureté est toujours un processus actif — on se purifie en agissant bien.",
              axe5_frequence: "Azka lakum (plus pur pour vous) dans le contexte de l'interdiction du 'adl est une inversion ethique puissante : le tuteur qui pense defendre l'honneur de sa famille en empechant le remariage se souille en realite moralement. Le respect des droits de la femme est au contraire ce qui purifie."
            }
          }
        }
      },
      {
        word_key: "thr",
        position: 29,
        sense_chosen: "purete/nettete",
        analysis_axes: {
          sense_chosen: "purete/nettete",
          concept_chosen: "Pureté/Netteté",
          concepts: {
            "Pureté/Netteté": {
              status: "retenu",
              senses: ["purete physique et morale", "proprete", "nettete", "absence de souillure", "tahara"],
              proof_ctx: "Le nom athar est l'elatif de la racine t-h-r. Le Lane's donne : etre pur (physiquement et moralement), etre propre, etre net, etre sans souillure. Athar = plus propre / plus net / plus pur rituellement. La racine t-h-r est la racine de la tahara (purete rituelle) — l'ablution (wudu), le bain rituel (ghusl), et la pureté de l'intention.",
              axe1_verset: "Wa athar (et plus propre) est le second elatif de la double affirmation de pureté : azka (plus pur moralement) wa athar (et plus propre rituellement/physiquement). La paire couvre les deux dimensions de la pureté islamique : interieure (morale, zakah) et exterieure (rituelle, tahara). En respectant l'interdiction du 'adl, le tuteur est azka et athar.",
              axe2_voisins: "La racine t-h-r est presente en 2:222 (yatahharna = qu'elles soient purifiees), 2:232 (athar), 2:271 (wa yukaffiru 'ankum min sayyi'atikum = cela vous purifie de vos mauvaises actions), 4:43 (la tahuru = pas purs). La pureté rituelle (tahara) est fondamentale dans la pratique islamique.",
              axe3_sourate: "Dans al-Baqarah, la racine t-h-r est presente en 2:222 (purification des femmes apres les menstruations) et 2:232 (pureté du comportement vis-a-vis du remariage). Les deux contextes lies a la pureté des femmes dans la vie conjugale.",
              axe4_coherence: "La racine t-h-r apparait environ 31 fois dans le Coran dans ses diverses formes. Al-tahara (purete rituelle) est l'une des conditions de la validite de la priere. Athar (plus propre) en 2:232 applique ce concept de pureté a la conduite morale.",
              axe5_frequence: "La paire azka/athar (plus pur moralement / plus propre rituellement) dans le verset 232 est une synthese de la pureté islamique : respecter les droits de la femme purifie a la fois l'ame (azka) et le comportement (athar). La justice envers autrui est une forme de tahara."
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 31,
        sense_chosen: "savoir/connaissance",
        analysis_axes: {
          sense_chosen: "savoir/connaissance",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "connaissance certaine", "'ilm"],
              proof_ctx: "Le verbe ya'lamu est un inaccompli 3MS de la racine '-l-m ; ta'lamuna est un inaccompli 2MP. Le Lane's donne : savoir, connaitre, etre informe, avoir la connaissance certaine. Allah ya'lamu wa antum la ta'lamuna = Dieu sait et vous ne savez pas. La formule contrastive place l'omniscience divine face a l'ignorance humaine.",
              axe1_verset: "Allah ya'lamu wa antum la ta'lamuna (Dieu sait et vous ne savez pas) est la cloture epistemique du verset 232. Apres l'interdiction du 'adl, la condition du taradhi, l'exhortation aux croyants, et la promesse de pureté, vient la verite ultime : Dieu sait ce qui est bien — les tuteurs qui croient defendre l'honneur en empechant le remariage se trompent. L'omniscience divine corrige la vision humaine limitee.",
              axe2_voisins: "La cloture Allah ya'lamu wa antum la ta'lamuna en 2:232 est similaire a anna Allaha bi kulli shay'in 'alim en 2:231. Les deux versets se closent sur l'omniscience divine — une inclusion thematique. En 2:216, wa Allahu ya'lamu wa antum la ta'lamuna = Dieu sait et vous ne savez pas (a propos de la guerre). La formule est utilisee quand la legislation divine contredit les preferences humaines.",
              axe3_sourate: "Dans al-Baqarah, la racine '-l-m marque systematiquement les sections ou Dieu legifere contre les preferences humaines. L'omniscience divine est l'argument ultime : Dieu sait ce qui est meilleur, meme si les humains preferent autre chose.",
              axe4_coherence: "La racine '-l-m apparait environ 750 fois dans le Coran — c'est l'une des racines les plus frequentes. Al-'ilm (la connaissance) est un attribut divin fondamental. La phrase contrastive ya'lamu / la ta'lamuna est une formule classique de l'epistemologie coranique.",
              axe5_frequence: "La cloture wa antum la ta'lamuna (et vous ne savez pas) s'adresse directement aux tuteurs qui pensent savoir ce qui est bon pour leur famille. Le Coran les interpelle : votre connaissance est limitee. Dieu seul sait que le respect des droits de la femme est la voie juste. L'ignorance humaine reconnue est le fondement de l'obeissance aux prescriptions divines."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[232];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V232)');

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
  console.log('\n✅ V232 TERMINE');
}
main().catch(console.error);
