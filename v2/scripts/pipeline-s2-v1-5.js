const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 1 À 5
// Étape 2 = SKIP (tous les concepts existent déjà)
// Étapes 3 + 4 complètes
// =====================================================

// =====================================================
// DONNÉES D'ANALYSE PAR VERSET
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:1 — الٓمٓ — Alif-Lām-Mīm
  // verse_id=8, analysis_id=367
  // =====================================================
  1: {
    verse_id: 8,
    analysis_id: 367,
    translation_arab: "Alif-Lām-Mīm.",
    full_translation: "Alif, Lām, Mīm.",
    translation_explanation: `§DEMARCHE§
Le verset 2:1 est composé uniquement de trois lettres isolées : alif, lām, mīm. Ces lettres, appelées « lettres disjointes » (al-ḥurūf al-muqaṭṭaʿa), apparaissent au début de 29 sourates du Coran. Elles ne forment pas un mot et n'ont pas de structure grammaticale analysable — ni verbe, ni nom, ni particule. Le texte les présente telles quelles, sans explication. Aucune racine arabe ne leur est associée en tant que groupe. Le texte ne précise pas leur fonction ni leur signification.

§JUSTIFICATION§
La transcription **Alif-Lām-Mīm** est retenue car ce sont les noms des lettres arabes dans leur forme standard. Aucune traduction n'est possible — ces lettres ne sont pas des mots. Toute tentative de leur attribuer un sens (abréviations, initiales de noms divins, codes numériques) relèverait de l'interprétation, ce que notre méthode exclut. Le texte dit des lettres, on écrit des lettres.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même résultat — la plupart transcrivent ces lettres sans les traduire. Certaines ajoutent des notes interprétatives (« Dieu seul en connaît le sens »), ce qui est un ajout absent du texte.`,
    segments: [
      { fr: "Alif-Lām-Mīm", pos: "nom", phon: "alif-lām-mīm", arabic: "الٓمٓ", word_key: "alm", is_particle: false, position: 1 }
    ],
    words: []  // Pas de mot important à analyser — lettres isolées
  },

  // =====================================================
  // VERSET 2:2 — ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ
  // verse_id=9, analysis_id=368
  // =====================================================
  2: {
    verse_id: 9,
    analysis_id: 368,
    translation_arab: "Cela est l'écrit — aucune suspicion en lui — une direction pour ceux qui se préservent.",
    full_translation: "C'est le Livre au sujet duquel il n'y a aucun doute, c'est un guide pour les pieux.",
    translation_explanation: `§DEMARCHE§
Le verset commence par **dhālika** (cela, démonstratif d'éloignement), qui pointe vers quelque chose de distant et d'élevé. Le mot **al-kitābu** (l'écrit) est un nom défini au nominatif — le « al » (l'article défini) indique que cet écrit est connu, identifié, pas n'importe quel écrit. La racine k-t-b a pour sens premier « rassembler des lettres, écrire, inscrire ». La construction **lā rayba fīhi** est une phrase nominale de négation absolue : « lā » nie toute existence de « rayb » (suspicion, agitation intérieure qui fait douter) « fīhi » (en lui). Le mot **rayb** au sens étymologique n'est pas un simple doute intellectuel — d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine r-y-b désigne une agitation, un trouble intérieur, un soupçon qui perturbe. Le mot **hudā** (direction) est un nom indéfini au nominatif — il fonctionne comme prédicat d'une nouvelle phrase. La racine h-d-y signifie « montrer le chemin, conduire vers ». Le mot **al-muttaqīn** est un participe actif de forme VIII de la racine w-q-y (protéger, préserver). La forme VIII est réflexive — « ceux qui se protègent eux-mêmes, ceux qui se préservent ». La préposition **li** (pour) indique que cette direction est destinée à eux.

§JUSTIFICATION§
**écrit** — Le sens retenu est « Écriture/Inscription ». Le mot « écrit » est choisi car il rend le sens physique premier de k-t-b (tracer des lettres, rassembler par l'écriture) sans ajouter la connotation sacrée de « Livre » avec majuscule. L'alternative « livre » est écartée car elle connote un objet fini et relié, alors que « kitāb » désigne l'acte même d'écrire et son résultat.

**suspicion** — Le sens retenu est « Doute/Suspicion ». Le mot « suspicion » est choisi car il capture le sens étymologique de r-y-b qui implique une agitation intérieure, un trouble qui fait soupçonner — pas un simple doute intellectuel. L'alternative « doute » est écartée car le doute peut être sain et méthodique, alors que le rayb est toujours négatif — c'est un trouble qui perturbe.

**direction** — Le sens retenu est « Guidance/Direction ». Le mot « direction » est choisi car il traduit le sens spatial premier de h-d-y — montrer un chemin, orienter vers un but. L'alternative « guide » est écartée car « guide » est un agent (celui qui guide), tandis que « hudā » est l'action même de diriger.

**ceux qui se préservent** — Le sens retenu est « Protection/Préservation ». L'expression « ceux qui se préservent » traduit la forme VIII réflexive de w-q-y : se protéger soi-même, se prémunir. L'alternative « les pieux » est écartée car la piété est un concept religieux chrétien absent de l'étymologie de w-q-y — la racine parle de protection, pas de dévotion.

§CRITIQUE§
**direction vs guide** — Les traductions courantes donnent « guide » ou « guidance ». La nuance est mineure et ne change pas le sens global du verset.

**suspicion vs doute** — Les traductions courantes donnent « doute ». Ce choix masque la dimension de trouble intérieur que porte le rayb — le texte ne dit pas « pas de doute intellectuel » mais « pas de trouble intérieur, pas de soupçon ». La nuance change le sens : le texte ne s'adresse pas à la raison mais à l'inquiétude.

**ceux qui se préservent vs les pieux** — Les traductions courantes donnent « les pieux » ou « ceux qui craignent Dieu ». Ces traductions viennent des exégèses qui ont associé taqwā à la crainte de Dieu (khawf). Mais la racine w-q-y signifie « protéger, préserver » — le muttaqī est celui qui se protège, pas celui qui a peur. Le texte ne mentionne ni crainte ni piété — il parle de préservation de soi.`,
    segments: [
      { fr: "cela", phon: "dhālika", arabic: "ذَٰلِكَ", is_particle: true, position: 1 },
      { fr: "l'écrit", pos: "nom", phon: "al-kitābu", arabic: "ٱلْكِتَـٰبُ", word_key: "ktb", is_particle: false, sense_retenu: "écrire", position: 2 },
      { fr: "aucune", phon: "lā", arabic: "لَا", is_particle: true, position: 3 },
      { fr: "suspicion", pos: "nom", phon: "rayba", arabic: "رَيْبَ", word_key: "ryb", is_particle: false, sense_retenu: "suspicion", position: 4 },
      { fr: "en lui", phon: "fīhi", arabic: "فِيهِ", is_particle: true, position: 5 },
      { fr: "direction", pos: "nom", phon: "hudā", arabic: "هُدًى", word_key: "hdy", is_particle: false, sense_retenu: "direction", position: 6 },
      { fr: "pour ceux qui se préservent", pos: "participe_actif", phon: "lil-muttaqīn", arabic: "لِّلْمُتَّقِينَ", word_key: "wqy", is_particle: false, sense_retenu: "se protéger", position: 7 }
    ],
    words: [
      {
        word_key: "ktb",
        position: 2,
        sense_chosen: "écrire",
        analysis_axes: {
          concept_chosen: "Écriture/Inscription",
          concepts: {
            "Écriture/Inscription": {
              status: "retenu",
              proof_ctx: "Le mot al-kitābu est un nom défini — il désigne l'écrit en tant que résultat de l'acte d'écrire. Le sens premier de k-t-b dans les sources étymologiques est « rassembler des lettres, tracer, inscrire ». Dans ce verset, l'écrit est présenté comme source de direction pour ceux qui se préservent, sans suspicion possible. La distinction avec le sens « Obligation/Décret » : l'obligation est un acte d'autorité qui impose, alors que l'écriture est un acte de consignation qui conserve. Le texte présente al-kitāb comme une source de direction (hudā), pas comme un décret qui oblige. La distinction avec « Assemblage/Couture » : le sens premier de l'assemblage est physique (coudre du cuir), il n'est pas pertinent ici car le texte parle d'un contenu qui dirige, pas d'un objet assemblé.",
              axe1_verset: "Le champ lexical du verset est celui de la fiabilité et de la direction : lā rayba (aucune suspicion), hudā (direction), muttaqīn (ceux qui se préservent). L'écrit s'inscrit naturellement dans ce champ — c'est la source fiable qui fournit la direction. Le verset affirme deux choses sur cet écrit : il est exempt de trouble intérieur (rayb), et il donne une direction. Ces deux attributs font de l'écrit un repère stable.",
              axe2_voisins: "Le verset 2:1 pose les lettres isolées (alif-lām-mīm) qui sont elles-mêmes de l'écriture. Le verset 2:2 enchaîne immédiatement avec « dhālika al-kitāb » — cela est l'écrit. La progression est naturelle : des lettres à l'écrit. Les versets 3-5 décrivent ceux qui bénéficient de cet écrit (ceux qui accordent sécurité à l'invisible, qui maintiennent la prière, qui distribuent). L'écrit est donc le socle sur lequel repose tout le passage.",
              axe3_sourate: "Al-Baqarah est la plus longue sourate du Coran. Elle commence par présenter l'écrit lui-même comme base de tout ce qui suit. Le thème de la sourate — les lois, les récits, les engagements — est contenu dans cet écrit. Le mot kitāb comme écriture est le fondement thématique de toute la sourate.",
              axe4_coherence: "Le Coran utilise al-kitāb plus de 230 fois. Dans la majorité des cas, le mot désigne un écrit révélé — le Coran lui-même ou les écritures antérieures. Le verset 2:2 est l'un des premiers à définir cet écrit : fiable et directeur. Le Coran utilise aussi kataba pour « inscrire, décréter » (6:12, 6:54), mais ici c'est le nom d'action (l'écrit), pas le verbe (inscrire).",
              axe5_frequence: "Pour la mission de l'être humain, l'écrit est l'outil de civilisation par excellence. Écrire, c'est conserver, transmettre, structurer le savoir. Un écrit fiable (sans suspicion) qui donne une direction répond directement au besoin du khalifa d'avoir un repère stable pour empêcher la corruption et établir la justice."
            },
            "Livre/Écrit": {
              status: "probable",
              proof_ctx: "Le sens « livre » est un sous-ensemble de l'écriture — tout livre est un écrit, mais tout écrit n'est pas un livre. Le mot kitāb en arabe ne désigne pas nécessairement un objet relié avec des pages — il désigne le résultat de l'acte d'écrire. La distinction philosophique : « livre » connote un objet fini, alors que « écriture/inscription » connote le processus et son résultat, ce qui est plus fidèle à l'étymologie.",
              axe1_verset: "Le champ lexical du verset est compatible avec l'idée d'un livre : un livre qui ne contient pas de suspicion et qui donne une direction. Cependant, « livre » ajoute la notion d'objet fini qui n'est pas dans la racine k-t-b. Le texte qualifie l'écrit par son contenu (fiable, directeur), pas par sa forme physique (relié, paginé).",
              axe2_voisins: "Les lettres isolées du verset 1 précèdent « l'écrit » du verset 2. La progression lettres → écrit est plus naturelle que lettres → livre, car les lettres sont la matière première de l'écriture, pas du reliage.",
              axe3_sourate: "La sourate al-Baqarah contient des lois, des récits et des engagements qui constituent un corpus écrit. Le terme « livre » est possible mais réducteur — la sourate est bien plus qu'un livre au sens usuel.",
              axe4_coherence: "Le Coran se désigne comme kitāb dans de nombreux versets. Le sens « livre » est l'interprétation standard mais l'étymologie pointe vers l'acte d'écrire et son résultat plutôt que vers l'objet.",
              axe5_frequence: "Un livre est un outil de transmission. Pour la mission du khalifa, un livre fiable qui donne une direction est un repère essentiel. Le sens fonctionne mais est moins précis que « écriture »."
            },
            "Obligation/Décret": {
              status: "peu_probable",
              proof_ctx: "La racine k-t-b porte bien le sens de « décréter, rendre obligatoire » (kutiba ʿalaykum — il vous a été prescrit). Mais dans ce verset, le mot est un nom défini (al-kitāb) qualifié par « direction » (hudā), pas par « obligation ». Un décret oblige, il ne guide — la direction est un choix, l'obligation non. La structure grammaticale pointe vers une source d'orientation, pas une injonction.",
              axe1_verset: "Le champ lexical du verset est la fiabilité et la direction, pas l'obligation. Le mot hudā (direction) est incompatible avec l'idée de décret : on ne dirige pas par obligation, on dirige par orientation. De plus, la direction est « pour ceux qui se préservent » — elle est destinée à un public, pas imposée à tous.",
              axe2_voisins: "Les versets 3-5 décrivent les qualités de ceux qui suivent cette direction. Ce sont des actes volontaires (accorder sécurité, maintenir la prière, distribuer), pas des obligations subies. Le contexte est celui du choix, pas du décret.",
              axe3_sourate: "Bien que la sourate al-Baqarah contienne des décrets (kutiba ʿalaykum al-ṣiyām), le verset d'ouverture présente l'écrit comme un tout, pas comme un décret spécifique.",
              axe4_coherence: "Le Coran distingue al-kitāb (l'écrit global) de kataba (décréter). Le verset 2:2 utilise le nom, pas le verbe — il identifie l'écrit, il ne décrète pas.",
              axe5_frequence: "Un décret impose par autorité. La mission du khalifa requiert aussi de la direction volontaire, pas seulement des impositions. Le sens est possible mais ne correspond pas au champ lexical du verset."
            },
            "Assemblage/Couture": {
              status: "nul",
              proof_ctx: "Le sens physique premier de k-t-b inclut « coudre, assembler du cuir ». Hors contexte dans un verset qui parle de direction et de fiabilité."
            },
            "Souffle/Vent": {
              status: "nul",
              proof_ctx: "Sens physique sans rapport avec le contexte."
            }
          }
        }
      },
      {
        word_key: "ryb",
        position: 4,
        sense_chosen: "suspicion",
        analysis_axes: {
          concept_chosen: "Doute/Suspicion",
          concepts: {
            "Doute/Suspicion": {
              status: "retenu",
              proof_ctx: "Le mot rayba est un nom indéfini en position d'accusatif après lā de négation absolue (lā rayba = aucune suspicion). D'après les sources étymologiques, la racine r-y-b désigne un trouble intérieur, une agitation de l'âme qui fait soupçonner, douter avec inquiétude. Ce n'est pas un doute méthodique (shakk) mais un trouble perturbateur. Le verset nie absolument l'existence de ce trouble dans l'écrit. La distinction avec « Besoin/Manque » : le besoin est un état de privation tourné vers l'avenir (il me manque quelque chose), la suspicion est un état de trouble tourné vers le présent (quelque chose me perturbe maintenant). Le verset nie le trouble, pas le besoin.",
              axe1_verset: "Le champ lexical est la fiabilité : l'écrit est identifié (dhālika), puis qualifié de fiable (lā rayba). La suspicion est l'ennemi de la fiabilité — nier la suspicion, c'est affirmer la fiabilité. Le mot hudā (direction) qui suit confirme : un texte suspect ne peut pas donner de direction fiable. La séquence est logique : identification → fiabilité → direction → destinataires.",
              axe2_voisins: "Le verset 1 pose les lettres, le verset 2 présente l'écrit. La négation de la suspicion est le premier attribut de cet écrit — il est présenté comme exempt de trouble avant même qu'on dise ce qu'il contient. Les versets 3-5 montrent les fruits de cette fiabilité chez ceux qui l'acceptent. Le verset 6 montre l'inverse : ceux qui rejettent.",
              axe3_sourate: "La sourate al-Baqarah va aborder des sujets sensibles (lois, récits controversés, changement de direction de prière). Nier la suspicion dès le début est une mise en garde : ce qui suit ne doit pas être reçu avec trouble intérieur. C'est un socle de confiance posé avant les difficultés.",
              axe4_coherence: "Le Coran utilise rayb dans d'autres versets : « lā rayba fīhi » apparaît aussi en 32:2 et 3:9. Dans tous les cas, c'est pour affirmer la fiabilité du texte ou d'un événement futur (le Jour). En 52:30, le rayb est attribué aux opposants qui doutent du prophète. Le rayb est toujours négatif dans le Coran — c'est un trouble que le texte cherche à éliminer.",
              axe5_frequence: "Pour la mission du khalifa, la suspicion est un poison. Celui qui soupçonne en permanence ne peut pas agir avec justice ni construire. Nier la suspicion dans le texte fondateur, c'est donner au khalifa un socle stable — il peut s'appuyer sur cet écrit sans que le trouble intérieur le paralyse."
            },
            "Besoin/Manque": {
              status: "nul",
              proof_ctx: "Le besoin est un état de privation. Le verset nie la présence d'un trouble dans l'écrit, pas d'un manque. La construction lā rayba fīhi (aucune suspicion en lui) ne fait pas sens avec « aucun besoin en lui »."
            }
          }
        }
      },
      {
        word_key: "hdy",
        position: 6,
        sense_chosen: "direction",
        analysis_axes: {
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              proof_ctx: "Le mot hudā est un nom indéfini au nominatif, fonctionnant comme prédicat : « [c'est] une direction ». D'après les sources étymologiques, h-d-y signifie « montrer le chemin, conduire vers un but, diriger ». Le hudā est l'action de diriger, pas la destination elle-même. C'est un mouvement qui va d'un point de départ (l'ignorance du chemin) vers un point d'arrivée (la connaissance du chemin). La distinction avec « Conduite/Comportement » : la conduite est comment on se comporte soi-même, la direction est comment on oriente quelqu'un d'autre. Le verset dit que l'écrit EST une direction — il oriente, il ne se comporte pas. La distinction avec « Don/Offrande » : le hady (offrande) est un sens dérivé lié aux animaux sacrificiels — hors contexte ici.",
              axe1_verset: "Le champ lexical est la fiabilité et l'orientation : un écrit fiable (lā rayba) qui donne une direction (hudā) à un public ciblé (muttaqīn). La direction est le deuxième attribut de l'écrit après la fiabilité. La logique est : cet écrit est fiable, ET il donne une direction. Les deux attributs se renforcent — une direction n'a de valeur que si elle vient d'une source fiable.",
              axe2_voisins: "Les versets 3-5 décrivent les destinataires de cette direction : ceux qui accordent sécurité à l'invisible, maintiennent la prière, distribuent de ce qu'on leur a donné. Ces actions sont les fruits de la direction reçue. Le verset 6 présente l'inverse : ceux qui rejettent et pour qui l'avertissement ne change rien — ils n'ont pas reçu la direction.",
              axe3_sourate: "La sourate al-Baqarah est structurée comme un guide : elle contient des lois (direction juridique), des récits (direction historique), et des principes (direction morale). Présenter l'écrit comme une direction dès le verset 2 annonce la fonction de toute la sourate.",
              axe4_coherence: "Le Coran utilise hudā plus de 60 fois. Il est toujours associé à l'orientation vers le droit chemin (ṣirāṭ mustaqīm, 1:6). Le hudā est aussi attribué à Dieu comme source ultime de direction (2:120, 6:71). Dans le verset 2:2, le hudā est un attribut de l'écrit — l'écrit est le véhicule de la direction divine.",
              axe5_frequence: "Pour la mission du khalifa, la direction est essentielle. Sans direction, l'être humain erre — il ne peut ni empêcher la corruption ni établir la justice. L'écrit comme direction donne au khalifa un repère permanent, pas une direction ponctuelle qui disparaît."
            },
            "Conduite/Comportement": {
              status: "nul",
              proof_ctx: "La conduite est un comportement personnel. Le verset parle d'une qualité de l'écrit (il dirige), pas du comportement de l'écrit."
            },
            "Don/Offrande": {
              status: "nul",
              proof_ctx: "Le hady (animal offert en sacrifice) est hors contexte. Le verset parle de direction, pas d'offrande."
            }
          }
        }
      },
      {
        word_key: "wqy",
        position: 7,
        sense_chosen: "se protéger",
        analysis_axes: {
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              proof_ctx: "Le mot al-muttaqīn est un participe actif de forme VIII de la racine w-q-y. La forme VIII est réflexive — l'action revient sur le sujet : « ceux qui se protègent eux-mêmes ». D'après les sources étymologiques, w-q-y signifie « protéger, préserver, mettre à l'abri ». Le muttaqī est celui qui prend des mesures pour se protéger — pas celui qui a peur (khawf), pas celui qui est pieux (birr). Le participe actif indique une action continue : ce sont des gens qui se protègent activement et en permanence. Le bouclier (wiqāya) est un sens dérivé de la même racine — la protection est le sens central.",
              axe1_verset: "Le champ lexical est la fiabilité et la direction. Les muttaqīn sont les destinataires de cette direction. La logique est : un écrit fiable donne une direction à ceux qui se préservent. Se préserver est la condition pour recevoir la direction — celui qui ne se protège pas n'a pas besoin de direction car il ne cherche pas à éviter le danger. Le lien entre protection et direction est naturel : on se protège EN suivant la direction.",
              axe2_voisins: "Les versets 3-5 développent le profil des muttaqīn : ils accordent sécurité (amn) à l'invisible, maintiennent la prière, distribuent leurs biens, sont certains de l'au-delà. Ce profil est celui de personnes actives qui prennent des mesures pour se préserver et préserver leur communauté. Le verset 6 présente l'opposé : ceux qui rejettent (kafarū) — ils ne se protègent pas.",
              axe3_sourate: "La sourate al-Baqarah va multiplier les directives (lois sur le jeûne, le pèlerinage, le mariage, les contrats). Ces directives sont des formes de protection — elles préservent l'individu et la société. Les muttaqīn sont ceux qui appliquent ces directives de préservation.",
              axe4_coherence: "Le Coran utilise muttaqīn plus de 40 fois. Dans 3:133-134, les muttaqīn sont décrits par leurs actes : ils dépensent dans l'aisance et la difficulté, maîtrisent leur colère, pardonnent. Ce profil est celui de personnes qui se protègent activement par leurs choix, pas de dévots passifs. En 2:197, la taqwā est présentée comme la meilleure provision (khayr al-zād) — c'est un équipement de survie, pas une émotion.",
              axe5_frequence: "Pour la mission du khalifa, se préserver est un prérequis. Celui qui ne se protège pas lui-même ne peut pas protéger les autres ni empêcher la corruption. La taqwā est l'autodéfense du khalifa — elle le rend apte à recevoir la direction et à l'appliquer."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:3 — ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ
  // verse_id=10, analysis_id=370
  // =====================================================
  3: {
    verse_id: 10,
    analysis_id: 370,
    translation_arab: "Ceux qui accordent sécurité à l'invisible, et maintiennent la prière, et de ce que Nous leur avons donné comme subsistance, ils distribuent.",
    full_translation: "qui croient à l'invisible et accomplissent la Ṣalāt et dépensent [dans l'obéissance à Allah], de ce que Nous leur avons attribué.",
    translation_explanation: `§DEMARCHE§
Le verset est une suite du verset 2 — il décrit les muttaqīn (ceux qui se préservent). Le pronom relatif **alladhīna** (ceux qui) introduit une proposition relative. Le verbe **yuʾminūna** est un inaccompli de forme IV de la racine a-m-n. La forme IV est causative (« accorder, faire faire ») — yuʾminūna signifie littéralement « ils accordent le amn ». Le amn est la sécurité, la confiance, l'absence de peur. L'inaccompli indique une action continue et habituelle — ils accordent sécurité en permanence. La préposition **bi** (à, en, par) introduit l'objet : **al-ghaybi** (l'invisible, ce qui est absent). Le ghayb est défini (al-) — c'est l'invisible connu, identifié, pas n'importe quelle absence. Le verbe **yuqīmūna** est un inaccompli de forme IV de la racine q-w-m (se dresser, se tenir droit). La forme IV signifie « faire se dresser, maintenir debout ». Maintenir la prière, c'est la garder droite, permanente, active. Le mot **aṣ-ṣalāta** est un nom défini à l'accusatif — la prière connue, identifiée. Le verbe **razaqnāhum** est un accompli à la première personne du pluriel (Nous) de la racine r-z-q (pourvoir en subsistance). Le suffixe -hum (eux) est le complément d'objet. Le verbe **yunfiqūna** est un inaccompli de forme IV de la racine n-f-q (percer un tunnel, traverser). La forme IV signifie « faire sortir, distribuer, dépenser ».

§JUSTIFICATION§
**accordent sécurité** — Le sens retenu est « Sécurité/Confiance ». L'expression « accorder sécurité » traduit la forme IV causative : ils DONNENT le amn à l'invisible. L'alternative « croient » est écartée car la croyance est un état intérieur passif, alors que la forme IV est active et causative — on accorde quelque chose à quelqu'un. Accorder sécurité à l'invisible, c'est traiter l'invisible comme un lieu sûr, fiable, digne de confiance.

**l'invisible** — Le sens retenu est « Absence/Invisible ». Le mot « invisible » traduit ghayb — ce qui est absent de la perception directe. L'alternative « caché » est écartée car « caché » implique que quelqu'un cache volontairement, alors que « invisible » décrit simplement ce qui n'est pas perceptible.

**maintiennent** — Le sens retenu est « Verticalité/Droiture ». Le mot « maintenir » traduit la forme IV de q-w-m : faire rester debout, garder droit. L'alternative « accomplir » est écartée car accomplir suggère un acte ponctuel qui se termine, alors que maintenir est continu — la prière n'est pas terminée, elle est tenue debout.

**la prière** — Le sens retenu est « Prière/Invocation ». Le mot « prière » traduit ṣalāt. L'alternative « invocation » est écartée car ṣalāt dans le Coran désigne spécifiquement l'acte rituel de prière, pas l'invocation spontanée (duʿāʾ).

**subsistance** — Le sens retenu est « Subsistance/Provision ». Le mot « subsistance » traduit razaq — ce qui est donné pour vivre. L'alternative « nourriture » est écartée car razaq est plus large que la nourriture — il inclut tout ce qui fait vivre (argent, savoir, capacités).

**distribuent** — Le sens retenu est « Dépense/Distribution ». Le mot « distribuent » traduit yunfiqūna — faire sortir de soi pour donner aux autres. L'alternative « dépensent » est possible mais « distribuer » capture mieux le sens de la racine n-f-q (percer, traverser, faire sortir) : les biens traversent la personne pour aller vers les autres.

§CRITIQUE§
**accordent sécurité vs croient** — Les traductions courantes donnent « croient à l'invisible ». Ce choix vient de l'interprétation standard de āmana comme « croire, avoir la foi ». Mais la forme IV de la racine a-m-n est causative — elle ne signifie pas « être en état de foi » mais « accorder le amn (sécurité) ». La différence est fondamentale : croire est passif et intérieur, accorder sécurité est actif et relationnel. Le texte ne dit pas que ces personnes ont un état intérieur de foi — il dit qu'elles accordent activement la sécurité à ce qui est invisible.

**[dans l'obéissance à Allah]** — Les traductions courantes ajoutent « dans l'obéissance à Allah » entre crochets. Cet ajout est absent du texte arabe. Le texte dit simplement « et de ce que Nous leur avons donné comme subsistance, ils distribuent » — sans préciser la destination ni la motivation.`,
    segments: [
      { fr: "ceux qui", phon: "alladhīna", arabic: "ٱلَّذِينَ", is_particle: true, position: 1 },
      { fr: "accordent sécurité", pos: "verbe", phon: "yuʾminūna", arabic: "يُؤْمِنُونَ", word_key: "amn", is_particle: false, sense_retenu: "accorder sécurité", position: 2 },
      { fr: "à", phon: "bi", arabic: "بِ", is_particle: true, position: 3 },
      { fr: "l'invisible", pos: "nom", phon: "al-ghaybi", arabic: "ٱلْغَيْبِ", word_key: "ghyb", is_particle: false, sense_retenu: "invisible", position: 4 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 5 },
      { fr: "maintiennent", pos: "verbe", phon: "yuqīmūna", arabic: "يُقِيمُونَ", word_key: "qwm", is_particle: false, sense_retenu: "maintenir debout", position: 6 },
      { fr: "la prière", pos: "nom", phon: "aṣ-ṣalāta", arabic: "ٱلصَّلَوٰةَ", word_key: "slw", is_particle: false, sense_retenu: "prière", position: 7 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 8 },
      { fr: "de ce que", phon: "mimmā", arabic: "مِمَّا", is_particle: true, position: 9 },
      { fr: "Nous leur avons donné comme subsistance", pos: "verbe", phon: "razaqnāhum", arabic: "رَزَقْنَـٰهُمْ", word_key: "rzq", is_particle: false, sense_retenu: "pourvoir en subsistance", position: 10 },
      { fr: "ils distribuent", pos: "verbe", phon: "yunfiqūna", arabic: "يُنفِقُونَ", word_key: "nfq", is_particle: false, sense_retenu: "distribuer", position: 11 }
    ],
    words: [
      {
        word_key: "amn",
        position: 2,
        sense_chosen: "accorder sécurité",
        analysis_axes: {
          concept_chosen: "Sécurité/Confiance",
          concepts: {
            "Sécurité/Confiance": {
              status: "retenu",
              proof_ctx: "Le verbe yuʾminūna est un inaccompli de forme IV de a-m-n. La forme IV est causative — le sujet accorde le amn à l'objet. D'après les sources étymologiques, a-m-n désigne l'état de sécurité, l'absence de peur, la tranquillité. La forme IV transforme cet état en action : accorder cet état à quelqu'un ou quelque chose. Accorder sécurité à l'invisible (bi-l-ghayb), c'est traiter l'invisible comme un espace sûr et fiable. La distinction avec « Foi/Adhésion » : la foi est un état intérieur passif — on « a » la foi. L'amn est un acte — on « accorde » la sécurité. La forme IV impose la lecture active. La distinction avec « Garantie/Protection » : la garantie est un engagement formel (amāna, dépôt de confiance), pas l'acte d'accorder la sécurité.",
              axe1_verset: "Le champ lexical est celui des actes continus : accorder sécurité, maintenir la prière, distribuer. Ces trois verbes sont à l'inaccompli — ce sont des actions habituelles et permanentes. L'amn s'inscrit naturellement dans cette série d'actes. Les muttaqīn (ceux qui se préservent) sont décrits par ce qu'ils FONT, pas par ce qu'ils croient intérieurement. L'acte d'accorder sécurité à l'invisible est le premier de la série — c'est le fondement des autres actes.",
              axe2_voisins: "Le verset 2 présente l'écrit comme fiable (lā rayba) et directionnel (hudā). Le verset 3 décrit les destinataires de cette direction : ceux qui accordent sécurité. Le lien est direct : l'écrit est fiable → ses destinataires accordent leur confiance (amn) à ce qui est invisible. La fiabilité de l'écrit (v2) et la confiance des destinataires (v3) se répondent.",
              axe3_sourate: "Al-Baqarah va demander aux destinataires de l'écrit de suivre des directives qui concernent l'invisible (la vie future, les anges, la rétribution). Accorder sécurité à l'invisible dès le verset 3 est le prérequis pour tout ce qui suit.",
              axe4_coherence: "Le Coran utilise la forme IV de a-m-n (āmana / yuʾminu) plus de 500 fois. Le complément peut être bi (à, en), li (pour), ou sans préposition. L'usage avec bi (āmana bi) est le plus fréquent et signifie « accorder le amn à ». En 2:285, le prophète āmana bi-mā unzila ilayhi — il a accordé sécurité à ce qui lui a été descendu. L'objet reçoit le amn du sujet.",
              axe5_frequence: "Pour la mission du khalifa, accorder sécurité à l'invisible est un acte de responsabilité. L'invisible inclut l'avenir, les conséquences à long terme, la justice différée. Un khalifa qui n'accorde pas sécurité à l'invisible ne peut pas planifier, juger ni construire sur le long terme. C'est un acte de civilisation."
            },
            "Foi/Adhésion": {
              status: "probable",
              proof_ctx: "Le sens « foi » est l'interprétation standard de āmana. Cependant, la foi est un état intérieur passif — on « a » la foi ou on ne l'a pas. La forme IV de a-m-n est causative et active — elle décrit une action que le sujet fait, pas un état dans lequel il se trouve. La frontière philosophique : la foi est un ressenti intérieur qui reste chez celui qui croit, l'amn est un acte qui sort de celui qui l'accorde et atteint ce à quoi il l'accorde. Le sujet qui accorde sécurité FAIT quelque chose — il ne se contente pas de RESSENTIR quelque chose.",
              axe1_verset: "La foi s'inscrirait dans le champ lexical du verset comme un état préalable aux actes (maintenir la prière, distribuer). Cependant, les trois verbes du verset sont tous à l'inaccompli actif — ce sont tous des ACTIONS, pas des états. Mettre un état passif (la foi) au milieu de deux actions continues (maintenir, distribuer) brise la cohérence grammaticale du verset.",
              axe2_voisins: "La foi serait compatible avec le passage mais moins précise : le verset 2 parle de fiabilité (lā rayba) et le verset 3 devrait répondre par la confiance accordée (amn), pas par un état de foi.",
              axe3_sourate: "La foi est un thème central de la sourate al-Baqarah. Cependant, le texte ne dit pas « ceux qui ont la foi » mais « ceux qui yuʾminūna » — la forme IV active impose l'idée d'action.",
              axe4_coherence: "Le Coran ne parle presque jamais de « la foi » comme nom abstrait (īmān est rare). Il utilise le verbe āmana — l'action d'accorder le amn. Cette préférence pour le verbe sur le nom confirme que le texte insiste sur l'acte, pas sur l'état.",
              axe5_frequence: "La foi comme état intérieur est nécessaire mais insuffisante pour la mission du khalifa. Le texte demande plus qu'un ressenti — il demande un acte."
            },
            "Garantie/Protection": {
              status: "nul",
              proof_ctx: "La garantie (amāna) est un engagement formel, un dépôt de confiance. Le verset ne parle pas de garantie — il décrit l'acte d'accorder sécurité à l'invisible."
            }
          }
        }
      },
      {
        word_key: "ghyb",
        position: 4,
        sense_chosen: "invisible",
        analysis_axes: {
          concept_chosen: "Absence/Invisible",
          concepts: {
            "Absence/Invisible": {
              status: "retenu",
              proof_ctx: "Le mot al-ghaybi est un nom défini au génitif après la préposition bi. D'après les sources étymologiques, gh-y-b désigne ce qui est absent, ce qui disparaît de la vue, ce qui est hors de portée de la perception. L'article al- rend l'invisible défini — c'est l'Invisible connu, pas n'importe quelle absence. La distinction avec « Médisance/Calomnie » : la ghība (médisance) est un acte de parler en l'absence de quelqu'un — c'est un sens dérivé qui ne s'applique pas ici car le verset parle d'accorder sécurité, pas de parler de quelqu'un en son absence.",
              axe1_verset: "Le champ lexical est la fiabilité et les actes de confiance. L'invisible est ce à quoi les muttaqīn accordent sécurité. Le verset pose un défi : accorder sécurité à ce qu'on ne voit pas. L'invisible est en opposition avec le visible (shahāda) — le texte demande de traiter le non-perceptible comme fiable. Le mot est défini (al-ghayb) : ce n'est pas « un » invisible quelconque, c'est L'invisible — une réalité connue et identifiée.",
              axe2_voisins: "Le verset 4 mentionne « la vie future » (al-ākhira) — un exemple concret de ghayb. Le verset 3 pose le principe général (accorder sécurité à l'invisible), le verset 4 donne un exemple (la vie future). La progression est du général au particulier.",
              axe3_sourate: "Al-Baqarah traite abondamment de l'invisible : les anges (2:30-34), la résurrection (2:28), le Jour dernier (2:8). Poser l'invisible comme objet de sécurité dès le verset 3 annonce tous ces thèmes.",
              axe4_coherence: "Le Coran utilise ghayb 49 fois. En 6:59, Dieu possède les clés du ghayb. En 2:33, Dieu connaît le ghayb des cieux et de la terre. Le ghayb est une catégorie fondamentale du Coran — tout ce qui échappe à la perception humaine directe.",
              axe5_frequence: "Pour la mission du khalifa, l'invisible est l'horizon de l'action. Planifier, c'est agir en fonction de ce qu'on ne voit pas encore. Accorder sécurité à l'invisible, c'est pouvoir agir sur le long terme sans être paralysé par l'absence de preuve immédiate."
            },
            "Médisance/Calomnie": {
              status: "nul",
              proof_ctx: "La médisance est l'acte de parler de quelqu'un en son absence. Hors contexte — le verset parle d'accorder sécurité, pas de parler de quelqu'un."
            }
          }
        }
      },
      {
        word_key: "qwm",
        position: 6,
        sense_chosen: "maintenir debout",
        analysis_axes: {
          concept_chosen: "Verticalité/Droiture",
          concepts: {
            "Verticalité/Droiture": {
              status: "retenu",
              proof_ctx: "Le verbe yuqīmūna est un inaccompli de forme IV de q-w-m. La forme IV est causative : « faire se dresser, maintenir debout, établir ». D'après les sources étymologiques, q-w-m désigne l'acte de se tenir debout, la verticalité, la droiture. La forme IV transforme cet état en action transitive : faire que quelque chose se tienne debout. Maintenir la prière, c'est la garder debout, active, vivante — pas la réciter une fois et passer à autre chose. La distinction avec « Peuple/Communauté » (qawm) : le peuple est un groupe de personnes qui se tiennent ensemble — c'est un dérivé nominal, pas le sens verbal du verset. La distinction avec « Gestion/Administration » : la gestion implique une bureaucratie, alors que maintenir debout est un acte physique de soutien.",
              axe1_verset: "Le champ lexical est celui des actes continus : accorder sécurité, maintenir, distribuer. Maintenir la prière est le deuxième acte de la série. Le verbe « maintenir debout » est plus riche qu' « accomplir » — il implique que la prière pourrait tomber si on ne la tient pas. C'est un effort continu, pas un événement ponctuel. L'inaccompli confirme : c'est une habitude, pas un acte isolé.",
              axe2_voisins: "Le verset 3 décrit trois actes : accorder sécurité (amn), maintenir la prière (qwm), distribuer (nfq). Le verset 4 ajoute d'autres qualités. Le verset 5 conclut : « ceux-là sont sur une direction de leur Éducateur ». Maintenir la prière est donc l'un des actes qui placent une personne sur la direction.",
              axe3_sourate: "La prière est mentionnée de nombreuses fois dans al-Baqarah (2:43, 2:45, 2:110, 2:153, 2:177, 2:238). À chaque fois, le verbe est aqāma (forme IV de q-w-m) — maintenir debout. Le Coran ne dit jamais « faire la prière » (faʿala) mais « maintenir la prière debout » (aqāma). Cette précision est significative.",
              axe4_coherence: "Le Coran utilise iqāmat aṣ-ṣalāt (maintenir la prière) comme formule récurrente dans tout le texte. En 14:40, Ibrahim demande à Dieu de le rendre « muqīm aṣ-ṣalāt » — celui qui maintient la prière debout. Le participe actif confirme la dimension continue et permanente.",
              axe5_frequence: "Pour la mission du khalifa, maintenir quelque chose debout est un acte de civilisation. La prière maintenue debout est un engagement permanent qui structure le temps et l'espace du khalifa. C'est un acte de discipline qui soutient tous les autres actes."
            },
            "Peuple/Communauté": {
              status: "nul",
              proof_ctx: "Le mot qawm (peuple) est un dérivé nominal. Le verset utilise le verbe de forme IV yuqīmūna — il maintiennent debout. Pas de rapport avec le peuple."
            }
          }
        }
      },
      {
        word_key: "slw",
        position: 7,
        sense_chosen: "prière",
        analysis_axes: {
          concept_chosen: "Prière/Invocation",
          concepts: {
            "Prière/Invocation": {
              status: "retenu",
              proof_ctx: "Le mot aṣ-ṣalāta est un nom défini à l'accusatif (complément d'objet de yuqīmūna). D'après les sources étymologiques, ṣ-l-w a pour sens premier « tourner vers, incliner vers ». La ṣalāt est l'acte de se tourner vers Dieu — physiquement (inclination) et verbalement (invocation). L'article al- indique la prière connue, celle qui est prescrite. La distinction avec « Proximité/Attachement » : la proximité (ṣila) est un état de lien, la prière est un acte de connexion. Le verset parle d'un acte maintenu debout, pas d'un état de proximité.",
              axe1_verset: "La prière est le deuxième acte de la série (accorder sécurité, maintenir la prière, distribuer). Elle est encadrée par un acte intérieur (accorder sécurité à l'invisible) et un acte extérieur (distribuer). La prière est le pont entre l'intérieur et l'extérieur — elle est à la fois tournée vers Dieu et pratiquée physiquement.",
              axe2_voisins: "Les versets 2-5 présentent les qualités des muttaqīn. La prière est l'une d'elles — un acte rituel qui structure leur vie. Les versets 6-10 présentent l'opposé : ceux qui rejettent ne maintiennent pas cette structure.",
              axe3_sourate: "Al-Baqarah revient sur la prière de nombreuses fois (changement de qibla en 2:142-150, prière en situation de danger en 2:238-239). La prière est un thème central de la sourate.",
              axe4_coherence: "Le Coran mentionne la ṣalāt plus de 80 fois. Elle est toujours présentée comme un acte à maintenir (aqāma), pas comme un événement ponctuel. La prière est l'un des piliers de la mission du khalifa dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la prière est un ancrage temporel et spirituel. Maintenir la prière structure les journées et rappelle le but ultime de la mission."
            }
          }
        }
      },
      {
        word_key: "rzq",
        position: 10,
        sense_chosen: "pourvoir en subsistance",
        analysis_axes: {
          concept_chosen: "Subsistance/Provision",
          concepts: {
            "Subsistance/Provision": {
              status: "retenu",
              proof_ctx: "Le verbe razaqnāhum est un accompli à la première personne du pluriel (Nous) avec suffixe -hum (eux). D'après les sources étymologiques, r-z-q désigne l'acte de pourvoir en ce qui fait vivre — nourriture, argent, savoir, capacités. Le « Nous » est le pluriel de majesté divine — Dieu est celui qui pourvoit. L'accompli indique que cette subsistance a DÉJÀ été donnée — c'est un fait accompli, pas une promesse. Le texte dit ensuite « de ce que (mimmā) Nous leur avons donné, ils distribuent » — la distribution porte sur ce qu'ils ont déjà reçu.",
              axe1_verset: "Le champ lexical est celui des actes : accorder sécurité, maintenir la prière, distribuer ce qu'on a reçu. La subsistance est le matériau que les muttaqīn redistribuent. Elle est le prérequis de la distribution — on ne peut distribuer que ce qu'on a reçu. La logique du verset : Dieu pourvoit (rzq) → les muttaqīn redistribuent (nfq).",
              axe2_voisins: "Le verset 3 lie la réception (razaqnāhum) à la redistribution (yunfiqūna). Les versets 4-5 montrent les autres qualités des muttaqīn. La subsistance n'est pas un but en soi — elle est un passage : reçue de Dieu, distribuée aux autres.",
              axe3_sourate: "Al-Baqarah revient sur la distribution des biens de nombreuses fois (2:177, 2:195, 2:254, 2:261-274). La subsistance et sa redistribution sont un thème majeur.",
              axe4_coherence: "Le Coran utilise razaqa plus de 120 fois. La formule « mimmā razaqnāhum yunfiqūna » revient en 8:3, 22:35, 32:16, 42:38. C'est un pattern coranique : la subsistance reçue doit être redistribuée.",
              axe5_frequence: "Pour la mission du khalifa, la subsistance n'est pas une propriété privée — elle est un passage. Le khalifa reçoit pour redistribuer. La subsistance divine finance la mission de justice et d'empêchement de la corruption."
            }
          }
        }
      },
      {
        word_key: "nfq",
        position: 11,
        sense_chosen: "distribuer",
        analysis_axes: {
          concept_chosen: "Dépense/Distribution",
          concepts: {
            "Dépense/Distribution": {
              status: "retenu",
              proof_ctx: "Le verbe yunfiqūna est un inaccompli de forme IV de n-f-q. D'après les sources étymologiques, n-f-q signifie « percer un tunnel, traverser, sortir ». La forme IV est causative : « faire sortir, faire traverser ». Les biens traversent la personne comme l'eau traverse un tunnel — ils entrent (rzq) et sortent (nfq). L'inaccompli indique une habitude continue. La distinction avec « Hypocrisie/Double-face » (nifāq) : l'hypocrisie vient de la même racine car l'hypocrite a « deux sorties » — il montre un visage et cache l'autre. Mais dans ce verset, le verbe est anfaqa (faire sortir des biens), pas nāfaqa (avoir deux faces).",
              axe1_verset: "Le champ lexical est celui des actes continus. La distribution est le troisième et dernier acte de la série : accorder sécurité (intérieur) → maintenir la prière (rituel) → distribuer les biens (extérieur). La progression va de l'intérieur vers l'extérieur, du spirituel au matériel. La distribution est l'acte le plus concret — il touche les autres directement.",
              axe2_voisins: "Le verset 3 conclut la description des actes des muttaqīn avec la distribution. Le verset 4 ajoute d'autres qualités (accorder sécurité à ce qui a été descendu, certitude de la vie future). Le verset 5 conclut le portrait. La distribution est le dernier acte décrit au verset 3 — c'est le plus visible et le plus social.",
              axe3_sourate: "Al-Baqarah consacre un passage entier à la distribution des biens (2:261-274). Le grain qui donne sept cents grains (2:261), l'annulation de la charité par le reproche (2:264), la parabole du jardin fertile (2:265). La distribution est un pilier thématique de la sourate.",
              axe4_coherence: "Le Coran utilise anfaqa plus de 70 fois. La formule mimmā razaqnāhum yunfiqūna lie systématiquement la subsistance divine à la redistribution humaine. En 2:3, la redistribution est un attribut des muttaqīn — ceux qui se préservent sont aussi ceux qui distribuent.",
              axe5_frequence: "Pour la mission du khalifa, la distribution est l'acte de civilisation par excellence. Le khalifa ne thésaurise pas — il fait circuler. La circulation des biens empêche la concentration qui mène à la corruption (59:7 : « pour que [les richesses] ne tournent pas entre les riches parmi vous »)."
            },
            "Passage/Traversée": {
              status: "peu_probable",
              proof_ctx: "Le sens physique de n-f-q (percer un tunnel, traverser) est le sens premier. Mais dans le contexte du verset, l'objet qui traverse est la subsistance — elle entre (rzq) et sort (nfq). Le sens « distribution » est le sens appliqué au contexte, pas le sens physique brut. Le tunnel physique est hors contexte.",
              axe1_verset: "Le champ lexical du verset est celui des actes envers les autres. Le passage physique (tunnel) ne correspond pas à ce champ. Mais l'idée de traversée (les biens traversent la personne) est intégrée dans le sens « distribution ».",
              axe2_voisins: "Aucun mot voisin ne parle de passage physique. Le contexte est social et économique.",
              axe3_sourate: "Al-Baqarah ne traite pas du passage physique dans ce contexte. Le sens est économique.",
              axe4_coherence: "Le Coran utilise nafaq (tunnel) une seule fois (6:35). Le verbe anfaqa est toujours économique dans le Coran — distribuer des biens.",
              axe5_frequence: "Le passage physique ne contribue pas à la mission du khalifa ici. Le sens économique oui."
            },
            "Hypocrisie/Double-face": {
              status: "nul",
              proof_ctx: "L'hypocrisie (nifāq) vient de la même racine mais est un sens dérivé nominal. Le verbe yunfiqūna de forme IV signifie « faire sortir (des biens) », pas « être hypocrite »."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:4 — وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْـَٔاخِرَةِ هُمْ يُوقِنُونَ
  // verse_id=11, analysis_id=371
  // =====================================================
  4: {
    verse_id: 11,
    analysis_id: 371,
    translation_arab: "Et ceux qui accordent sécurité à ce qui a été descendu vers toi et à ce qui a été descendu avant toi, et à la vie future, eux, ils ont la certitude.",
    full_translation: "Ceux qui croient à ce qui t'a été descendu (révélé) et à ce qui a été descendu avant toi et qui croient fermement à la vie future.",
    translation_explanation: `§DEMARCHE§
Le verset continue la description des muttaqīn commencée au verset 3. Le verbe **yuʾminūna** (accordent sécurité) est le même qu'au verset 3, toujours forme IV inaccompli de a-m-n. Cette fois, l'objet est **bimā unzila** (à ce qui a été descendu). Le verbe **unzila** est un accompli passif de forme IV de la racine n-z-l (descendre). Le passif signifie que l'agent (celui qui fait descendre) n'est pas nommé — le texte dit « ce qui a été descendu », pas « ce que Dieu a descendu ». La préposition **ilayka** (vers toi) indique le destinataire de la descente. Le même verbe est répété : **wa mā unzila min qablika** (et ce qui a été descendu avant toi). La préposition **min** (de, depuis) avec **qablika** (avant toi) indique l'antériorité temporelle — la racine q-b-l signifie « ce qui est devant dans le temps, ce qui précède ». Le mot **al-ākhira** (la dernière, la vie future) est un adjectif substantivé de la racine ʾ-kh-r (être dernier, venir après). L'article al- rend le concept défini. Le pronom **hum** (eux) est emphatique — il isole les muttaqīn et leur attribue spécifiquement la certitude. Le verbe **yūqinūna** est un inaccompli de forme IV de y-q-n (être certain). La forme IV est causative : « ils rendent certain, ils ont la certitude ».

§JUSTIFICATION§
**accordent sécurité** — Même sens retenu qu'au verset 3 (Sécurité/Confiance). L'objet change : ici c'est « ce qui a été descendu », pas « l'invisible ».

**descendu** — Le sens retenu est « Descente/Révélation ». Le mot « descendu » traduit le passif de n-z-l — quelque chose a été fait descendre d'en haut vers en bas. L'alternative « révélé » est écartée car la révélation ajoute une connotation religieuse chrétienne absente de n-z-l — la racine parle de descente physique, de mouvement du haut vers le bas.

**avant toi** — Le sens retenu est « Antériorité/Passé ». L'expression « avant toi » traduit min qablika — depuis un temps antérieur au tien. La racine q-b-l a aussi le sens de « recevoir, accueillir », mais ici le contexte temporel (avec min) impose le sens d'antériorité.

**la vie future** — Le sens retenu est « Postériorité/Retard ». Le mot « future » traduit al-ākhira — ce qui vient après, ce qui est dernier. L'alternative « l'au-delà » est écartée car « au-delà » est un concept religieux chrétien qui ajoute une dimension spatiale (au-delà de quoi ?) absente de la racine ʾ-kh-r qui parle simplement de séquence temporelle.

**certitude** — Le sens retenu est « Certitude/Conviction ». Le mot « certitude » traduit yūqinūna — la racine y-q-n désigne un savoir ferme, sans doute possible. L'alternative « conviction » est possible mais « certitude » est plus fort — la conviction peut faiblir, la certitude non.

§CRITIQUE§
**descendu vs révélé** — Les traductions courantes donnent « révélé ». Le verbe unzila signifie « fait descendre » — la révélation est une interprétation qui ajoute la dimension de dévoilement (relier le caché au visible). La racine n-z-l parle de mouvement vertical (haut → bas), pas de dévoilement. La différence est subtile mais significative : « descendre » implique une source élevée et un mouvement, « révéler » implique un secret dévoilé.

**la vie future vs l'au-delà** — Les traductions courantes donnent « la vie dernière » ou « l'au-delà ». La racine ʾ-kh-r signifie « dernier, postérieur ». Le texte dit « la dernière » (al-ākhira) — ce qui vient après cette vie. « L'au-delà » ajoute une dimension spatiale chrétienne absente du texte.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 1 },
      { fr: "ceux qui", phon: "alladhīna", arabic: "ٱلَّذِينَ", is_particle: true, position: 2 },
      { fr: "accordent sécurité", pos: "verbe", phon: "yuʾminūna", arabic: "يُؤْمِنُونَ", word_key: "amn", is_particle: false, sense_retenu: "accorder sécurité", position: 3 },
      { fr: "à", phon: "bi", arabic: "بِ", is_particle: true, position: 4 },
      { fr: "ce que", phon: "mā", arabic: "مَآ", is_particle: true, position: 5 },
      { fr: "a été descendu", pos: "verbe", phon: "unzila", arabic: "أُنزِلَ", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 6 },
      { fr: "vers toi", phon: "ilayka", arabic: "إِلَيْكَ", is_particle: true, position: 7 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 8 },
      { fr: "ce que", phon: "mā", arabic: "مَآ", is_particle: true, position: 9 },
      { fr: "a été descendu", pos: "verbe", phon: "unzila", arabic: "أُنزِلَ", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 10 },
      { fr: "de", phon: "min", arabic: "مِن", is_particle: true, position: 11 },
      { fr: "avant toi", pos: "nom", phon: "qabli-ka", arabic: "قَبْلِكَ", word_key: "qbl", is_particle: false, sense_retenu: "antériorité", position: 12 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 13 },
      { fr: "à", phon: "bi", arabic: "بِ", is_particle: true, position: 14 },
      { fr: "la vie future", pos: "nom", phon: "al-ākhira", arabic: "ٱلْـَٔاخِرَةِ", word_key: "axr", is_particle: false, sense_retenu: "dernière", position: 15 },
      { fr: "eux", phon: "hum", arabic: "هُمْ", is_particle: true, position: 16 },
      { fr: "ont la certitude", pos: "verbe", phon: "yūqinūna", arabic: "يُوقِنُونَ", word_key: "yqn", is_particle: false, sense_retenu: "certitude", position: 17 }
    ],
    words: [
      {
        word_key: "nzl",
        position: 6,
        sense_chosen: "faire descendre",
        analysis_axes: {
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              proof_ctx: "Le verbe unzila est un accompli passif de forme IV de n-z-l. La forme IV est causative : « faire descendre ». Le passif indique que l'agent n'est pas nommé : « a été fait descendre ». D'après les sources étymologiques, n-z-l désigne le mouvement de haut en bas, la descente, l'installation dans un lieu après un voyage. Le sens « révélation » est un sens dérivé — la descente d'un message divin vers un prophète. Le verset utilise le passif pour ne pas nommer l'agent (Dieu) — le texte dit ce qui s'est passé (une descente), pas qui l'a fait.",
              axe1_verset: "Le champ lexical est celui de la confiance envers les textes descendus. Le mot unzila est répété deux fois : ce qui a été descendu « vers toi » et ce qui a été descendu « avant toi ». La descente est le mode de transmission — les textes ne sont pas inventés par les humains, ils descendent. Cette idée de mouvement vertical est centrale dans le verset.",
              axe2_voisins: "Le verset 2 a présenté l'écrit (al-kitāb). Le verset 4 précise l'origine de cet écrit : il a été descendu. La progression est : l'écrit existe (v2) → il a été descendu (v4). Le verset 5 conclut : ceux qui acceptent cette descente sont sur la direction de leur Éducateur.",
              axe3_sourate: "Al-Baqarah utilise le verbe anzala/nazzala de nombreuses fois pour parler de la descente du Coran et des textes antérieurs. La descente est le mode de légitimation du texte — ce qui descend vient d'en haut, d'une autorité supérieure.",
              axe4_coherence: "Le Coran utilise nazzala et anzala pour distinguer la descente progressive (nazzala, forme II intensive) de la descente globale (anzala, forme IV causative). En 2:4, c'est anzala (forme IV passif) — la descente globale. En 25:32, les opposants demandent pourquoi le Coran n'a pas été descendu en un seul bloc (jumlatan wāḥidatan) — preuve que la descente est un processus.",
              axe5_frequence: "Pour la mission du khalifa, la descente signifie que la direction ne vient pas de l'homme — elle vient d'en haut. Le khalifa reçoit sa direction, il ne l'invente pas. Accepter la descente, c'est reconnaître une autorité supérieure."
            },
            "Halte/Séjour": {
              status: "nul",
              proof_ctx: "Le sens « faire halte, séjourner » (nazala bi-makān) est un sens dérivé de la descente — quand on arrive dans un lieu après un voyage, on « descend ». Hors contexte ici car le verset parle de textes, pas de voyageurs."
            }
          }
        }
      },
      {
        word_key: "qbl",
        position: 12,
        sense_chosen: "antériorité",
        analysis_axes: {
          concept_chosen: "Antériorité/Passé",
          concepts: {
            "Antériorité/Passé": {
              status: "retenu",
              proof_ctx: "Le mot qablika est un nom au génitif avec suffixe pronominal -ka (toi), après la préposition min (depuis). La construction min qablika signifie « depuis avant toi, d'un temps antérieur au tien ». D'après les sources étymologiques, q-b-l a pour sens premier « ce qui est devant, ce qui précède ». Le sens temporel est le sens pertinent ici — les textes descendus min qablika sont ceux descendus dans un temps antérieur. La distinction avec « Réception/Accueil » : qabila (recevoir) est un autre sens de la même racine, mais la construction avec min (depuis) impose le sens temporel.",
              axe1_verset: "Le verset oppose deux temporalités : ce qui a été descendu « vers toi » (ilayka, présent) et ce qui a été descendu « avant toi » (min qablika, passé). L'antériorité sert à étendre la confiance au-delà du seul texte actuel — les muttaqīn accordent sécurité aussi aux textes antérieurs. Le champ lexical est la continuité temporelle de la descente.",
              axe2_voisins: "Les versets 3-4 décrivent les muttaqīn comme des personnes qui accordent sécurité à l'invisible (v3) et aux textes descendus présents et passés (v4). L'antériorité est un élargissement : la confiance ne se limite pas au présent.",
              axe3_sourate: "Al-Baqarah est remplie de récits des prophètes antérieurs (Adam, Abraham, Moïse). L'antériorité posée au verset 4 annonce tous ces récits — les muttaqīn y accordent sécurité aussi.",
              axe4_coherence: "Le Coran utilise min qabli/qablika pour situer les textes et prophètes antérieurs dans de nombreux versets (3:3, 5:48, 6:92). L'antériorité est une catégorie temporelle fondamentale du Coran.",
              axe5_frequence: "Pour la mission du khalifa, reconnaître l'antériorité, c'est s'inscrire dans une continuité historique. Le khalifa n'invente pas à partir de zéro — il hérite d'une direction qui le précède."
            },
            "Réception/Accueil": {
              status: "nul",
              proof_ctx: "La réception (qabila) est l'acte de recevoir. La construction min qablika est temporelle, pas réceptive."
            }
          }
        }
      },
      {
        word_key: "axr",
        position: 15,
        sense_chosen: "dernière",
        analysis_axes: {
          concept_chosen: "Postériorité/Retard",
          concepts: {
            "Postériorité/Retard": {
              status: "retenu",
              proof_ctx: "Le mot al-ākhira est un adjectif substantivé féminin de la racine ʾ-kh-r (être dernier, venir après). L'article al- le rend défini : « la dernière ». D'après les sources étymologiques, ʾ-kh-r désigne ce qui vient après, ce qui est postérieur dans le temps. Al-ākhira est la vie qui vient après cette vie — « la dernière » par opposition à « la première » (al-ūlā). Le sens est purement séquentiel : ce qui vient en dernier dans la série.",
              axe1_verset: "Le verset liste les objets de certitude : les textes descendus (passé et présent) et la vie future (avenir). La vie future est le troisième objet — elle complète la série temporelle : passé (min qablika), présent (ilayka), avenir (al-ākhira). Les muttaqīn ont la certitude sur toute la ligne temporelle.",
              axe2_voisins: "Le verset 3 parle de l'invisible (ghayb) — la vie future est un cas particulier d'invisible. Le verset 4 passe du général (invisible) au particulier (la vie future). La vie future est l'invisible le plus concret et le plus impactant — c'est ce qui donne sens à tous les actes.",
              axe3_sourate: "Al-Baqarah mentionne la vie future de nombreuses fois (2:62, 2:86, 2:114, 2:130, 2:200, 2:201, 2:217, 2:220). Elle est un thème central — la plupart des avertissements et promesses de la sourate concernent al-ākhira.",
              axe4_coherence: "Le Coran utilise al-ākhira 115 fois. Elle est systématiquement présentée comme une réalité à venir, pas un lieu spatial. En 87:17, « la vie future est meilleure et plus durable » — la comparaison porte sur le temps (durable), pas l'espace.",
              axe5_frequence: "Pour la mission du khalifa, la certitude de la vie future est le moteur de la responsabilité à long terme. Si la vie future est certaine, les actes d'aujourd'hui ont des conséquences permanentes. Cette certitude empêche le khalifa de sacrifier l'avenir pour le présent."
            }
          }
        }
      },
      {
        word_key: "yqn",
        position: 17,
        sense_chosen: "certitude",
        analysis_axes: {
          concept_chosen: "Certitude/Conviction",
          concepts: {
            "Certitude/Conviction": {
              status: "retenu",
              proof_ctx: "Le verbe yūqinūna est un inaccompli de forme IV de y-q-n. D'après les sources étymologiques, y-q-n désigne un savoir ferme, sans aucun doute. La certitude est plus forte que la croyance (amn) — elle est un savoir, pas une confiance. Le pronom emphatique hum (eux) avant le verbe insiste : ce sont EUX spécifiquement qui ont la certitude, pas tout le monde. L'objet de la certitude est la vie future (al-ākhira) — ils SAVENT que la vie future existe, ils n'y croient pas simplement. La distinction avec « Mort/Destruction » : yaqīn est aussi utilisé pour la mort (15:99 : « adore ton Éducateur jusqu'à ce que te vienne la certitude ») — mais ce sens dérivé ne s'applique pas ici car le contexte est la vie future, pas la mort.",
              axe1_verset: "Le champ lexical du verset est la confiance et la certitude envers les textes et la vie future. Le verbe yūqinūna clôt le verset par une affirmation forte : les muttaqīn ne se contentent pas d'accorder sécurité (amn) — ils ont la certitude (yqn). La progression est : accorder sécurité (v3) → avoir la certitude (v4). L'amn est une confiance active, le yaqīn est un savoir ferme. L'un mène à l'autre.",
              axe2_voisins: "Le verset 3 parlait d'accorder sécurité (amn) — une action. Le verset 4 culmine avec la certitude (yqn) — un état de savoir. La progression est de l'acte à la connaissance : agir avec confiance mène au savoir certain. Le verset 5 conclut : ceux-là sont sur une direction — la direction produit la certitude.",
              axe3_sourate: "Al-Baqarah va poser de nombreux défis à la certitude des croyants : les récits difficiles, les lois nouvelles, les épreuves. Poser la certitude dès le verset 4, c'est armer les muttaqīn pour ce qui suit — même quand les choses sont difficiles, la certitude reste.",
              axe4_coherence: "Le Coran utilise yaqīn 28 fois. En 15:99, « adore ton Éducateur jusqu'à ce que te vienne le yaqīn » — le yaqīn est le but ultime de la dévotion. En 102:5, « si vous saviez de science certaine (ʿilm al-yaqīn) » — la certitude est le degré suprême du savoir.",
              axe5_frequence: "Pour la mission du khalifa, la certitude de la vie future est ce qui empêche la corruption. Si le khalifa est certain que ses actes auront des conséquences dans la vie future, il ne peut pas corrompre impunément. La certitude est le garde-fou ultime de la mission."
            },
            "Mort/Destruction": {
              status: "nul",
              proof_ctx: "Le yaqīn comme euphémisme de la mort (15:99) est un sens dérivé contextuel. Le verset 2:4 parle explicitement de la vie future (al-ākhira) — l'objet de la certitude est la vie, pas la mort."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:5 — أُو۟لَـٰٓئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ
  // verse_id=12, analysis_id=369
  // =====================================================
  5: {
    verse_id: 12,
    analysis_id: 369,
    translation_arab: "Ceux-là sont sur une direction de la part de leur Éducateur, et ceux-là, ce sont eux les prospères.",
    full_translation: "Ceux-là sont sur le bon chemin de leur Seigneur, et ce sont eux qui réussissent (dans cette vie et dans la vie future).",
    translation_explanation: `§DEMARCHE§
Le verset conclut le portrait des muttaqīn commencé au verset 2. Le démonstratif **ulāʾika** (ceux-là) pointe vers les personnes décrites aux versets 3-4 — c'est un démonstratif d'éloignement qui exprime le respect et l'élévation. La préposition **ʿalā** (sur) indique que ces personnes sont « sur » une direction — comme sur un chemin ou une route. Le mot **hudā** (direction) est le même qu'au verset 2 — l'écrit est une direction (v2) et les muttaqīn sont SUR cette direction (v5). La préposition **min** (de la part de) avec **rabbihim** (leur Éducateur) indique la source : cette direction vient de leur Éducateur. Le mot **rabb** (de la racine r-b-b) signifie « celui qui éduque, qui fait croître, qui accompagne la croissance ». Le suffixe -him (leur) établit une relation personnelle. Le deuxième **ulāʾika** répète le démonstratif pour insister. Le pronom **hum** (eux) est emphatique — il isole ces personnes spécifiquement. Le mot **al-mufliḥūna** est un participe actif de forme IV de la racine f-l-ḥ. D'après les sources étymologiques, f-l-ḥ signifie « fendre la terre pour labourer, prospérer ». La forme IV est causative : « faire prospérer ». Le participe actif indique des personnes qui sont ACTIVEMENT en train de prospérer — pas des gagnants d'un prix ponctuel, mais des personnes en état continu de prospérité.

§JUSTIFICATION§
**direction** — Même sens retenu qu'au verset 2 (Guidance/Direction). Ici, c'est les personnes qui sont SUR la direction, pas l'écrit qui EST la direction.

**Éducateur** — Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot « Éducateur » traduit rabb car la racine r-b-b a pour sens premier « faire croître, élever, éduquer ». L'alternative « Seigneur » est écartée car elle ajoute une connotation féodale (seigneur vs serf) absente de r-b-b — le rabb n'est pas un seigneur qui domine, c'est un éducateur qui accompagne la croissance.

**les prospères** — Le sens retenu est « Réussite/Prospérité ». Le mot « prospères » traduit al-mufliḥūn car la racine f-l-ḥ a pour sens premier « fendre la terre, labourer » et par extension « réussir, prospérer ». L'alternative « ceux qui réussissent » est possible mais « prospères » est plus précis — la prospérité est un état durable et croissant, comme une terre labourée qui porte ses fruits saison après saison. L'alternative « gagnants » est écartée car gagner est ponctuel, prospérer est continu.

§CRITIQUE§
**Éducateur vs Seigneur** — Les traductions courantes donnent « Seigneur ». Ce choix vient de la tradition théologique qui présente Dieu comme un souverain. Mais la racine r-b-b signifie « faire croître, éduquer, accompagner le développement ». Le rabb n'est pas un roi — il est un éducateur. La relation n'est pas de domination (seigneur/sujet) mais de croissance (éducateur/éduqué). Cette nuance change la relation entre l'être humain et Dieu : elle passe de la soumission passive à l'apprentissage actif.

**les prospères vs ceux qui réussissent** — Les traductions courantes donnent « ceux qui réussissent ». La nuance est mineure. Cependant, « réussir » est ponctuel (on réussit un examen) tandis que « prospérer » est durable (une terre prospère). La racine f-l-ḥ, liée au labour, pointe vers une prospérité organique et durable.

**(dans cette vie et dans la vie future)** — L'ajout entre parenthèses dans la traduction Hamidullah est absent du texte arabe. Le texte dit simplement « les prospères » sans préciser quand ni où.`,
    segments: [
      { fr: "ceux-là", phon: "ulāʾika", arabic: "أُو۟لَـٰٓئِكَ", is_particle: true, position: 1 },
      { fr: "sur", phon: "ʿalā", arabic: "عَلَىٰ", is_particle: true, position: 2 },
      { fr: "une direction", pos: "nom", phon: "hudā", arabic: "هُدًى", word_key: "hdy", is_particle: false, sense_retenu: "direction", position: 3 },
      { fr: "de", phon: "min", arabic: "مِّن", is_particle: true, position: 4 },
      { fr: "leur Éducateur", pos: "nom", phon: "rabbihim", arabic: "رَّبِّهِمْ", word_key: "rbb", is_particle: false, sense_retenu: "éducateur", position: 5 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 6 },
      { fr: "ceux-là", phon: "ulāʾika", arabic: "أُو۟لَـٰٓئِكَ", is_particle: true, position: 7 },
      { fr: "eux", phon: "hum", arabic: "هُمُ", is_particle: true, position: 8 },
      { fr: "les prospères", pos: "participe_actif", phon: "al-mufliḥūn", arabic: "ٱلْمُفْلِحُونَ", word_key: "flh", is_particle: false, sense_retenu: "prospérer", position: 9 }
    ],
    words: [
      {
        word_key: "hdy",
        position: 3,
        sense_chosen: "direction",
        analysis_axes: {
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              proof_ctx: "Le mot hudā est le même qu'au verset 2, mais la construction change. Au verset 2, l'écrit EST une direction (hudā, prédicat). Au verset 5, les muttaqīn sont SUR une direction (ʿalā hudā). La préposition ʿalā (sur) ajoute l'image spatiale : la direction est un chemin et les muttaqīn marchent dessus. D'après les sources étymologiques, h-d-y signifie « montrer le chemin, conduire vers un but ». La direction vient « de leur Éducateur » (min rabbihim) — elle a une source identifiée et personnelle (leur Éducateur, pas « l'Éducateur »). La distinction avec les autres sens reste la même qu'au verset 2.",
              axe1_verset: "Le champ lexical est celui de la position et du résultat : être SUR une direction (position), être prospère (résultat). La direction est le chemin, la prospérité est la destination. Les deux sont liés : celui qui est sur la direction prospère. Le démonstratif ulāʾika (ceux-là) donne un ton solennel — ces personnes sont identifiées et mises en avant.",
              axe2_voisins: "Le verset 2 présentait l'écrit comme une direction. Les versets 3-4 décrivaient les actes des muttaqīn. Le verset 5 conclut : ces actes les ont placés SUR la direction. La progression est : direction offerte (v2) → actes accomplis (v3-4) → direction atteinte (v5). Le verset 6 va présenter l'inverse : ceux qui ont rejeté et pour qui rien ne change.",
              axe3_sourate: "Le verset 5 est le sommet du premier passage de la sourate al-Baqarah. Après ce sommet, la sourate plonge dans les détails des rejeteurs (v6-20) avant de commencer les récits. La direction est le thème qui ouvre et structure la sourate.",
              axe4_coherence: "Le Coran utilise ʿalā hudā (sur une direction) dans d'autres versets : 31:5 (ceux sur une direction de leur Éducateur), 2:5 ici, et 47:17. L'expression est récurrente et lie toujours la direction à sa source (l'Éducateur) et à ses bénéficiaires (les muttaqīn).",
              axe5_frequence: "Pour la mission du khalifa, être SUR une direction est l'état optimal. Le khalifa n'invente pas son chemin — il marche sur une direction qui lui a été montrée. Cette direction vient de l'Éducateur, ce qui garantit qu'elle mène à la prospérité."
            }
          }
        }
      },
      {
        word_key: "rbb",
        position: 5,
        sense_chosen: "éducateur",
        analysis_axes: {
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              proof_ctx: "Le mot rabbihim est un nom en idafa avec suffixe pronominal -him (leur). D'après les sources étymologiques, r-b-b a pour sens premier « faire croître, élever un enfant, accompagner le développement ». Le rabb est celui qui nourrit, éduque et fait grandir. Le suffixe -him personnalise la relation : « leur Éducateur », pas « l'Éducateur universel ». L'idafa établit un lien d'appartenance : la direction vient de LEUR Éducateur — elle est personnalisée. La distinction avec « Croissance/Augmentation » : la croissance est le résultat, la seigneurie/autorité est la fonction de celui qui fait croître. Le rabb n'est pas la croissance — il est celui qui la cause.",
              axe1_verset: "Le champ lexical est la direction et la prospérité. L'Éducateur est la source de la direction — c'est lui qui montre le chemin. La construction min rabbihim (de leur Éducateur) place l'Éducateur en amont de la direction : il la fournit, les muttaqīn la reçoivent et marchent dessus. Le lien éducateur → direction → prospérité est la logique du verset.",
              axe2_voisins: "Les versets 3-4 ont décrit les actes des muttaqīn sans mentionner l'Éducateur. Le verset 5 introduit l'Éducateur comme source de la direction — les actes ne suffisent pas, ils doivent être guidés par une source. Le verset 6 va montrer l'inverse : ceux qui n'ont pas d'Éducateur (ils rejettent) n'ont pas de direction.",
              axe3_sourate: "Al-Baqarah mentionne rabb de nombreuses fois. La relation rabb/ʿabd (éducateur/celui qui est éduqué) est le socle de toute la sourate. L'éducation divine est le fil conducteur qui lie les lois, les récits et les avertissements.",
              axe4_coherence: "Le Coran utilise rabb 979 fois — c'est l'un des mots les plus fréquents. En 1:2, rabb al-ʿālamīn (l'Éducateur des mondes) ouvre la Fatiha. La fonction d'éducation est la première qualité de Dieu mentionnée dans le Coran après sa divinité (1:1 bismillāh).",
              axe5_frequence: "Pour la mission du khalifa, avoir un Éducateur est ce qui distingue l'éducation de l'errance. Le khalifa est un être en croissance — le rabb est celui qui accompagne cette croissance. La relation est pédagogique, pas de domination."
            },
            "Croissance/Augmentation": {
              status: "probable",
              proof_ctx: "Le sens premier de r-b-b est « faire croître, augmenter ». Le rabb est étymologiquement « celui qui fait croître ». Ce sens est intégré dans « Seigneurie/Autorité bienveillante » — l'autorité du rabb est précisément celle de faire croître. La distinction : « croissance » est le processus, « éducateur » est l'agent. Le verset parle de l'agent (rabbihim, leur éducateur), pas du processus.",
              axe1_verset: "La croissance est compatible avec le champ lexical du verset — la direction mène à la croissance (prospérité). Mais le verset nomme l'agent (rabb), pas le processus (rabw/nushuw). Le sens « croissance » est vrai mais insuffisant — le verset parle de celui qui fait croître, pas de la croissance elle-même.",
              axe2_voisins: "Les versets 3-4 décrivent des actes actifs. Le verset 5 attribue ces actes à une source (rabb). La source est un agent, pas un processus.",
              axe3_sourate: "La croissance est un thème de la sourate (parabole du grain 2:261) mais le verset 5 parle de l'agent de la direction, pas du processus de croissance.",
              axe4_coherence: "Le Coran utilise rabb comme agent dans la quasi-totalité des cas. Le sens « faire croître » est le fondement étymologique, mais l'usage coranique est celui de l'agent éducateur.",
              axe5_frequence: "La croissance est le but de l'éducation. L'éducateur est le moyen. Le verset parle du moyen (la source de la direction)."
            }
          }
        }
      },
      {
        word_key: "flh",
        position: 9,
        sense_chosen: "prospérer",
        analysis_axes: {
          concept_chosen: "Réussite/Prospérité",
          concepts: {
            "Réussite/Prospérité": {
              status: "retenu",
              proof_ctx: "Le mot al-mufliḥūna est un participe actif de forme IV de f-l-ḥ, défini par al-. D'après les sources étymologiques, f-l-ḥ signifie « fendre la terre pour labourer, ouvrir une voie dans le sol dur ». Le sens dérivé est « prospérer, réussir » — celui qui laboure sa terre récolte. Le participe actif indique un état continu : ce sont des personnes en cours de prospérité permanente, pas des gagnants ponctuels. Le pronom emphatique hum (eux) insiste : ce sont EUX les prospères, et personne d'autre dans le contexte de ce passage. La distinction avec « Fendre/Labourer » : le labour est le sens physique premier, la prospérité en est l'extension métaphorique. Le verset ne parle pas de terre ni de labour — il parle du résultat : la réussite durable.",
              axe1_verset: "Le champ lexical est le bilan : ceux-là sont sur une direction → ils sont prospères. La prospérité est le résultat de la direction. La logique est causale : être sur la direction de l'Éducateur CAUSE la prospérité. Le participe actif al-mufliḥūn clôt le verset sur un état permanent — ces personnes ne « réussissent » pas un examen, elles sont en état de prospérité continue.",
              axe2_voisins: "Les versets 3-4 ont décrit les actes (accorder sécurité, maintenir la prière, distribuer, avoir la certitude). Le verset 5 en tire la conséquence : ces actes mènent à la prospérité. Le verset 6 va présenter l'inverse : les rejeteurs ne sont pas prospères — l'avertissement n'y change rien.",
              axe3_sourate: "Al-Baqarah utilise le falāḥ comme horizon : 2:189 (pour prospérer, entrez dans les maisons par leurs portes). La prospérité est le but de la direction — la sourate est un guide vers la prospérité.",
              axe4_coherence: "Le Coran utilise mufliḥūn 40 fois. En 3:104, « ceux qui ordonnent le bien et interdisent le mal — ceux-là sont les prospères ». En 23:1, « ont prospéré les croyants ». Le falāḥ est toujours le résultat d'actes positifs — il n'est jamais accordé sans raison.",
              axe5_frequence: "Pour la mission du khalifa, la prospérité est le signe que la mission est accomplie. Le khalifa qui suit la direction de l'Éducateur prospère — pas au sens financier, mais au sens organique : il croît, il porte ses fruits, il enrichit son environnement. Comme la terre labourée (sens premier de f-l-ḥ), il produit durablement."
            },
            "Fendre/Labourer": {
              status: "peu_probable",
              proof_ctx: "Le sens physique « fendre la terre, labourer » est le sens premier de f-l-ḥ. Il est intégré dans le sens « prospérité » comme sa source étymologique. Mais le verset ne parle pas de terre ni de labour — le contexte est abstrait (direction, éducateur, bilan). Le labour est pertinent comme image (la prospérité est comme une terre labourée) mais pas comme sens littéral.",
              axe1_verset: "Le champ lexical est abstrait (direction, prospérité). Le labour est concret. Le verset ne contient aucun mot du champ lexical agricole.",
              axe2_voisins: "Aucun verset voisin ne parle d'agriculture. Le contexte est celui des qualités spirituelles et morales.",
              axe3_sourate: "Al-Baqarah contient des paraboles agricoles (2:261, 2:264-265) mais le verset 5 est dans la section introductive, pas dans les paraboles.",
              axe4_coherence: "Le Coran n'utilise jamais mufliḥūn au sens littéral de « laboureurs ». Le sens est toujours métaphorique.",
              axe5_frequence: "Le labour physique ne contribue pas directement à la mission du khalifa dans ce contexte. Le sens métaphorique de prospérité oui."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// TRAITEMENT DES VERSETS
// =====================================================
async function processVerse(verseNum) {
  const data = verseData[verseNum];
  if (!data) return;

  console.log(`\nVERSET 2:${verseNum} — TRAITEMENT`);

  // 1. Insérer les verse_word_analyses
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
    } else {
      const ax = word.analysis_axes;
      console.log(`  ${word.word_key} (pos ${word.position}) → sens "${ax.concept_chosen}" → mot "${word.sense_chosen}"`);
    }
  }

  // 2. Mettre à jour verse_analyses
  const { error: updateErr } = await supabase.from('verse_analyses').update({
    segments: data.segments,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    full_translation: data.full_translation
  }).eq('id', data.analysis_id);

  if (updateErr) {
    console.error(`  ERREUR update verse_analyses:`, updateErr.message);
  } else {
    console.log(`  Traduction : "${data.translation_arab}"`);
  }

  console.log(`VERSET 2:${verseNum} — TERMINÉ`);
}

// =====================================================
// SYNC word_meanings depuis verse_word_analyses
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [8, 9, 10, 11, 12];
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', verseIds);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnée à synchroniser');
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

    if (!wa) continue;

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
    console.log(`  ${key} → synced`);
  }
}

// =====================================================
// WORD DAILY — 3 phrases du quotidien par sens retenu
// =====================================================
async function insertWordDaily() {
  console.log('\n=== WORD DAILY ===');

  const dailyData = [
    { word_key: 'ktb', sense: 'écrire', arabic: 'كِتَاب', phon: 'kitāb', phrases: [
      "J'ai écrit une lettre à ma grand-mère pour son anniversaire.",
      "Écrire ses pensées dans un carnet aide à y voir plus clair.",
      "Elle a écrit la liste des courses sur un bout de papier."
    ]},
    { word_key: 'ryb', sense: 'suspicion', arabic: 'رَيْب', phon: 'rayb', phrases: [
      "Il y a de la suspicion entre eux depuis cette histoire d'argent.",
      "On ne peut pas vivre dans la suspicion permanente, ça rend fou.",
      "La suspicion est le pire ennemi de la confiance dans un couple."
    ]},
    { word_key: 'hdy', sense: 'direction', arabic: 'هُدَى', phon: 'hudā', phrases: [
      "Sans direction, on tourne en rond sans jamais avancer.",
      "Il a trouvé sa direction dans la vie après des années d'hésitation.",
      "Cette formation m'a donné une vraie direction professionnelle."
    ]},
    { word_key: 'wqy', sense: 'se protéger', arabic: 'وِقَايَة', phon: 'wiqāya', phrases: [
      "Il faut se protéger du froid quand on sort en hiver.",
      "Se protéger des arnaques en ligne, c'est important de nos jours.",
      "Porter un casque, c'est le minimum pour se protéger à vélo."
    ]},
    { word_key: 'amn', sense: 'accorder sécurité', arabic: 'أَمْن', phon: 'amn', phrases: [
      "On accorde notre confiance à ceux qui la méritent par leurs actes.",
      "Les parents accordent la sécurité à leurs enfants en les protégeant.",
      "Accorder sa confiance à quelqu'un, c'est lui offrir un espace sûr."
    ]},
    { word_key: 'ghyb', sense: 'invisible', arabic: 'غَيْب', phon: 'ghayb', phrases: [
      "L'avenir est invisible mais ça ne nous empêche pas de planifier.",
      "Beaucoup de choses importantes sont invisibles à l'œil nu.",
      "L'amour est invisible et pourtant c'est la force la plus puissante."
    ]},
    { word_key: 'qwm', sense: 'maintenir debout', arabic: 'قِيَام', phon: 'qiyām', phrases: [
      "Maintenir une entreprise debout dans la crise, c'est un exploit.",
      "Il a maintenu ses principes debout malgré la pression.",
      "Maintenir une tradition debout, c'est la garder vivante et active."
    ]},
    { word_key: 'slw', sense: 'prière', arabic: 'صَلَاة', phon: 'ṣalāt', phrases: [
      "La prière du matin lui donne de l'énergie pour toute la journée.",
      "Il fait sa prière cinq fois par jour sans jamais manquer.",
      "La prière est un moment de calme dans une journée agitée."
    ]},
    { word_key: 'rzq', sense: 'subsistance', arabic: 'رِزْق', phon: 'rizq', phrases: [
      "Chacun gagne sa subsistance par son travail quotidien.",
      "La subsistance ne se limite pas à la nourriture — c'est tout ce qui fait vivre.",
      "Il remercie pour sa subsistance chaque jour, même quand c'est modeste."
    ]},
    { word_key: 'nfq', sense: 'distribuer', arabic: 'إنفاق', phon: 'infāq', phrases: [
      "Elle distribue des repas aux sans-abri tous les vendredis.",
      "Distribuer son savoir aux autres, c'est la meilleure forme de générosité.",
      "Il distribue une partie de son salaire à sa famille chaque mois."
    ]},
    { word_key: 'nzl', sense: 'descendre', arabic: 'نُزُول', phon: 'nuzūl', phrases: [
      "La pluie est descendue toute la nuit sans s'arrêter.",
      "Les prix ont descendu après les soldes de janvier.",
      "Il est descendu de la montagne avant la tombée de la nuit."
    ]},
    { word_key: 'qbl', sense: 'avant', arabic: 'قَبْل', phon: 'qabl', phrases: [
      "Avant de partir, vérifie que tu as tes clés.",
      "Il était là bien avant nous, il attendait depuis une heure.",
      "Les gens d'avant avaient moins de confort mais plus de lien social."
    ]},
    { word_key: 'axr', sense: 'dernière', arabic: 'آخِرَة', phon: 'ākhira', phrases: [
      "C'est la dernière fois que je te le répète.",
      "La dernière page du livre m'a fait pleurer.",
      "Il garde toujours le meilleur pour la dernière bouchée."
    ]},
    { word_key: 'yqn', sense: 'certitude', arabic: 'يَقِين', phon: 'yaqīn', phrases: [
      "J'ai la certitude qu'il dit la vérité — je le connais bien.",
      "La certitude est un luxe dans un monde plein de doutes.",
      "Il a agi avec certitude, sans hésiter une seule seconde."
    ]},
    { word_key: 'rbb', sense: 'éducateur', arabic: 'رَبّ', phon: 'rabb', phrases: [
      "Un bon éducateur sait écouter avant de corriger.",
      "L'éducateur accompagne l'enfant dans sa croissance sans le forcer.",
      "Être éducateur, c'est faire grandir l'autre à son propre rythme."
    ]},
    { word_key: 'flh', sense: 'prospérer', arabic: 'فَلَاح', phon: 'falāḥ', phrases: [
      "Son commerce prospère grâce à la qualité de ses produits.",
      "Pour prospérer, il faut d'abord labourer et semer avec patience.",
      "La ville a prospéré depuis l'arrivée de la nouvelle usine."
    ]}
  ];

  for (const d of dailyData) {
    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', d.word_key)
      .single();

    if (!wa) {
      console.error(`  ${d.word_key} non trouvé dans word_analyses`);
      continue;
    }

    for (const phrase of d.phrases) {
      await supabase.from('word_daily').insert({
        analysis_id: wa.id,
        sense: d.sense,
        arabic: d.arabic,
        phon: d.phon,
        french: phrase
      });
    }
    console.log(`  ${d.word_key} → 3 phrases`);
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 1 À 5 ===\n');
  console.log('[ÉTAPE 2] SKIP — tous les concepts existent déjà en base\n');

  for (let v = 1; v <= 5; v++) {
    await processVerse(v);
  }

  await syncWordMeanings();
  await insertWordDaily();

  console.log('\n=== PIPELINE V1-5 TERMINÉE ===');
}

main().catch(console.error);
