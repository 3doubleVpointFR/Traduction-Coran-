require('dotenv').config({path: '.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // =============================================
  // VERSE 105:4 — تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ
  // Words: rmy (lancer), hjr (pierres), sjl (argile durcie)
  // =============================================

  const v4_vwa = [
    {
      verse_id: 6192,
      word_key: 'rmy',
      sense_chosen: 'lancement',
      position: 1,
      analysis_axes: {
        sense_chosen: 'lancement',
        concept_chosen: 'Lancement/Jet',
        concepts: {
          'Lancement/Jet': {
            senses: ['lancer', 'jeter', 'accuser', 'tirer (fl\u00e8che)'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Lancement/Jet'. Le verbe tarm\u012bhim est un inaccompli (une forme qui exprime l'action en cours ou r\u00e9p\u00e9t\u00e9e) avec le pronom hum (les/eux) rattach\u00e9 : 'les lan\u00e7ant' ou 'qui leur lan\u00e7aient'. D'apr\u00e8s les sources \u00e9tymologiques, ram\u0101 signifie lancer, projeter quelque chose avec force vers une cible. Le lancement est un acte ext\u00e9rieur, directionnel (du lanceur vers la cible), et ponctuel dans chaque jet mais r\u00e9p\u00e9t\u00e9 (l'inaccompli indique la r\u00e9p\u00e9tition). Il n'y a qu'un seul sens pour cette racine dans ce contexte : le lancement physique. Le sens d''accuser' (lancer une accusation) est m\u00e9taphorique et ne s'applique pas ici car le compl\u00e9ment est bi-\u1e25ij\u0101ratin (avec des pierres).",
            axe1_verset: "Le verset dit tarm\u012bhim bi-\u1e25ij\u0101ratin min sijj\u012bl (les lan\u00e7ant de pierres d'argile). Le champ lexical est enti\u00e8rement physique : lancer, pierres, argile. Le verbe ram\u0101 est l'action concr\u00e8te des oiseaux envers les compagnons de l'\u00e9l\u00e9phant. L'inaccompli (tarm\u012b) donne une image de l'action en cours, comme si on la voyait se d\u00e9rouler.",
            axe2_voisins: "Le verset 3 dit que Dieu a envoy\u00e9 des oiseaux en vol\u00e9es. Le verset 4 d\u00e9crit ce que font ces oiseaux : ils lancent des pierres. Le verset 5 montre le r\u00e9sultat : r\u00e9duits en paille. Le lancement au verset 4 est le chaînon entre l'envoi (v3) et le r\u00e9sultat (v5).",
            axe3_sourate: "La sourate montre la d\u00e9faite de la force brute par des moyens simples. Le lancement de pierres par des oiseaux est l'acte concret qui d\u00e9fait la puissance de l'\u00e9l\u00e9phant. Le th\u00e8me de la sourate est la sup\u00e9riorit\u00e9 de l'action divine sur la force humaine.",
            axe4_coherence: "Le verbe ram\u0101 est utilis\u00e9 dans le Coran dans le m\u00eame sens de lancer (8:17 'ce n'est pas toi qui as lanc\u00e9, mais c'est Dieu qui a lanc\u00e9'). Le sens de jet physique est constant.",
            axe5_frequence: "Le lancement est un acte pr\u00e9cis et dirig\u00e9. Chaque pierre atteint sa cible. Pour la mission humaine, la sourate montre que la r\u00e9ponse \u00e0 l'injustice est pr\u00e9cise, pas aveugle."
          }
        }
      }
    },
    {
      verse_id: 6192,
      word_key: 'hjr',
      sense_chosen: 'pierre',
      position: 2,
      analysis_axes: {
        sense_chosen: 'pierre',
        concept_chosen: 'Pierre/Mat\u00e9riau',
        concepts: {
          'Pierre/Mat\u00e9riau': {
            senses: ['pierre', 'roche'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Pierre/Mat\u00e9riau'. Le mot \u1e25ij\u0101ratin est un pluriel ind\u00e9fini au g\u00e9nitif, pr\u00e9c\u00e9d\u00e9 de la pr\u00e9position bi (avec) : 'avec des pierres'. D'apr\u00e8s les sources \u00e9tymologiques, al-\u1e25ajar est la mati\u00e8re solide et dure extraite de la terre. La pierre est ext\u00e9rieure, permanente comme mati\u00e8re, et concr\u00e8te. Distinction avec 'Interdit/Enclos' : l'interdit est ce qui est s\u00e9par\u00e9 et mis \u00e0 part, une limite entre l'accessible et l'inaccessible. Ici le verbe tarm\u012b (lancer) demande un objet physique qu'on peut projeter \u2014 on lance des pierres, pas des interdits. Distinction avec 'Migration/S\u00e9paration' : la migration est un mouvement de quitter un lieu. Ici le mot est compl\u00e9ment d'un verbe de jet, pas de mouvement.",
            axe1_verset: "Le verset dit tarm\u012bhim bi-\u1e25ij\u0101ratin min sijj\u012bl (les lan\u00e7ant de pierres d'argile). Le champ lexical est physique et concret : lancer, pierres, argile. Les pierres sont les projectiles utilis\u00e9s par les oiseaux. Le pluriel ind\u00e9fini (sans al-) indique une quantit\u00e9 non sp\u00e9cifi\u00e9e de pierres.",
            axe2_voisins: "Le verset 3 d\u00e9crit les oiseaux envoy\u00e9s. Le verset 4 pr\u00e9cise ce qu'ils font et avec quoi : des pierres d'argile. Le verset 5 montre le r\u00e9sultat de ces pierres : la r\u00e9duction en paille. Les pierres au verset 4 sont les instruments de la destruction d\u00e9crite au verset 5.",
            axe3_sourate: "La sourate montre que des projectiles simples (pierres d'argile) d\u00e9font la force brute (l'\u00e9l\u00e9phant). Le contraste entre la simplicit\u00e9 du moyen et l'ampleur du r\u00e9sultat est un \u00e9l\u00e9ment cl\u00e9 du th\u00e8me.",
            axe4_coherence: "Le mot \u1e25ij\u0101ra est utilis\u00e9 dans le Coran pour d\u00e9signer les pierres physiques (2:24 'dont le combustible est les hommes et les pierres', 11:82 'nous avons fait pleuvoir sur eux des pierres d'argile'). Le sens de pierre physique est constant.",
            axe5_frequence: "Les pierres sont la forme la plus simple de projectile. La sourate montre que la justice n'a pas besoin d'armes sophistiqu\u00e9es. Les pierres sont accessibles \u00e0 tous, ce qui montre que la puissance est dans la justesse de l'action, pas dans la sophistication des moyens."
          },
          'Interdit/Enclos': {
            senses: ['interdit', 'sanctuaire'],
            status: 'nul',
            proof_ctx: "L'interdit est une limite abstraite. Le verbe tarm\u012b (lancer) demande un objet physique. On lance des pierres, pas des interdits."
          },
          'Migration/S\u00e9paration': {
            senses: ['\u00e9migrer', 'abandonner'],
            status: 'nul',
            proof_ctx: "La migration est un mouvement de d\u00e9placement. Le contexte est un jet de projectiles, pas un d\u00e9placement de personnes."
          },
          'Divers': {
            senses: ['giron'],
            status: 'nul',
            proof_ctx: "Sens anatomique isol\u00e9 sans rapport avec le contexte du verset."
          }
        }
      }
    },
    {
      verse_id: 6192,
      word_key: 'sjl',
      sense_chosen: 'argile durcie',
      position: 3,
      analysis_axes: {
        sense_chosen: 'argile durcie',
        concept_chosen: 'Pierre/Ch\u00e2timent',
        concepts: {
          'Pierre/Ch\u00e2timent': {
            senses: ['pierre cuite'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Pierre/Ch\u00e2timent'. Le mot sijj\u012bl est un nom ind\u00e9fini au g\u00e9nitif, pr\u00e9c\u00e9d\u00e9 de la pr\u00e9position min (de, en) : 'de sijj\u012bl'. D'apr\u00e8s les sources \u00e9tymologiques, sijj\u012bl d\u00e9signe des pierres d'argile durcie, cuites au feu. C'est un mat\u00e9riau sp\u00e9cifique : de l'argile qui a \u00e9t\u00e9 transform\u00e9e par la cuisson en quelque chose de dur et de destructeur. Le nom ind\u00e9fini (sans al-) d\u00e9crit le mat\u00e9riau dont les pierres sont faites. Il n'y a pas d'ambigu\u00eft\u00e9 contextuelle avec le sens de 'registre' car le verset d\u00e9crit des pierres lanc\u00e9es physiquement.",
            axe1_verset: "Le verset dit bi-\u1e25ij\u0101ratin min sijj\u012bl (de pierres d'argile durcie). Le mot sijj\u012bl pr\u00e9cise la nature des pierres : elles sont en argile durcie. Le champ lexical est mat\u00e9riel : pierres, argile, lancer. Le sijj\u012bl ajoute une pr\u00e9cision sur le mat\u00e9riau \u2014 ce ne sont pas des pierres ordinaires mais des pierres d'argile cuite.",
            axe2_voisins: "Le verset 3 envoie les oiseaux. Le verset 4 pr\u00e9cise leurs munitions : des pierres d'argile durcie. Le verset 5 montre le r\u00e9sultat : la r\u00e9duction en paille. Les pierres d'argile au verset 4 expliquent l'ampleur de la destruction au verset 5 \u2014 ce mat\u00e9riau est suffisamment dur pour briser.",
            axe3_sourate: "La sourate montre que le moyen utilis\u00e9 est de l'argile durcie \u2014 de la terre transform\u00e9e. La force brute de l'\u00e9l\u00e9phant est d\u00e9faite par de la terre transform\u00e9e en pierre. Le th\u00e8me est la transformation : la ruse est transform\u00e9e en \u00e9garement (v2), la terre est transform\u00e9e en arme (v4), les compagnons sont transform\u00e9s en paille (v5).",
            axe4_coherence: "Le mot sijj\u012bl est utilis\u00e9 dans le Coran en 11:82 et 15:74 pour d\u00e9signer les pierres d'argile. Dans tous les cas, il d\u00e9signe un mat\u00e9riau physique. Le sens est constant.",
            axe5_frequence: "L'argile durcie est de la terre transform\u00e9e par le feu. Pour la mission humaine, cette transformation montre que les mat\u00e9riaux les plus simples peuvent devenir des instruments de justice quand ils sont utilis\u00e9s avec justesse."
          },
          'Sens isol\u00e9/Registre': {
            senses: ['registre'],
            status: 'nul',
            proof_ctx: "Le registre est un livre o\u00f9 l'on consigne. Le verset d\u00e9crit des pierres lanc\u00e9es physiquement, pas un livre. Le verbe tarm\u012b (lancer) et le mot \u1e25ij\u0101ra (pierres) \u00e9liminent toute possibilit\u00e9 de sens abstrait."
          }
        }
      }
    }
  ];

  const {data: vwa4, error: vwa4Err} = await sb.from('verse_word_analyses').insert(v4_vwa).select('id, word_key, position');
  if (vwa4Err) { console.log('VWA v4 Error:', vwa4Err); return; }
  console.log('V4 VWA inserted:', vwa4.length);
  vwa4.forEach(d => console.log('  ' + d.word_key + ' pos=' + d.position));

  // =============================================
  // VERSE 105:4 — verse_analyses (Step 4)
  // =============================================
  const v4_segments = [
    { fr: "leur lan\u00e7ant", pos: "verbe", phon: "tarm\u012bhim", arabic: "\u062a\u064e\u0631\u0652\u0645\u0650\u064a\u0647\u0650\u0645", position: 1, word_key: "rmy", is_particle: false, sense_retenu: "lancement" },
    { fr: "des pierres", pos: "nom", phon: "bi-\u1e25ij\u0101ratin", arabic: "\u0628\u0650\u062d\u0650\u062c\u064e\u0627\u0631\u064e\u0629\u064d", position: 2, word_key: "hjr", is_particle: false, sense_retenu: "pierre" },
    { fr: "d'", phon: "min", arabic: "\u0645\u0650\u0651\u0646", position: 3, word_key: null, is_particle: true },
    { fr: "argile durcie", pos: "nom", phon: "sijj\u012bl", arabic: "\u0633\u0650\u062c\u0651\u0650\u064a\u0644\u064d", position: 4, word_key: "sjl", is_particle: false, sense_retenu: "argile durcie" }
  ];

  const v4_explanation = `\u00a7DEMARCHE\u00a7

Le mot **tarm\u012bhim** est un verbe inaccompli de la racine r-m-y (une forme qui exprime l'action en cours ou r\u00e9p\u00e9t\u00e9e), avec le pronom hum (les) rattach\u00e9. Le sujet est les oiseaux du verset pr\u00e9c\u00e9dent. L'inaccompli donne une image de l'action en train de se d\u00e9rouler, comme si on la voyait en direct : "les lan\u00e7ant, qui leur lan\u00e7aient". D'apr\u00e8s les sources \u00e9tymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ram\u0101 signifie lancer, projeter avec force vers une cible.

Le mot **bi-\u1e25ij\u0101ratin** commence par la pr\u00e9position bi (avec), suivie du pluriel \u1e25ij\u0101ra (pierres) au g\u00e9nitif ind\u00e9fini : "avec des pierres". La pr\u00e9position bi indique l'instrument du lancement.

La pr\u00e9position **min** signifie "de, en" et pr\u00e9cise le mat\u00e9riau.

Le mot **sijj\u012bl** est un nom au g\u00e9nitif ind\u00e9fini d\u00e9signant l'argile durcie au feu. Min sijj\u012bl signifie "en argile durcie" ou "faites d'argile durcie". Ce mat\u00e9riau est de la terre cuite transform\u00e9e en projectile dur.

\u00a7JUSTIFICATION\u00a7

**lan\u00e7ant** \u2014 Le sens retenu est 'Lancement/Jet'. Le mot "lan\u00e7ant" est choisi car il exprime la projection avec force vers une cible. L'alternative "jetant" est \u00e9cart\u00e9e car "jeter" peut \u00eatre sans direction pr\u00e9cise (on jette quelque chose par terre), alors que "lancer" implique une direction vers un objectif. L'alternative "tirant" est \u00e9cart\u00e9e car elle \u00e9voque plut\u00f4t les armes \u00e0 feu ou les arcs.

**pierres** \u2014 Le sens retenu est 'Pierre/Mat\u00e9riau'. Le mot "pierres" est choisi car il d\u00e9signe la mati\u00e8re solide extraite de la terre. L'alternative "cailloux" est \u00e9cart\u00e9e car elle implique des pierres petites et arrondies, alors que le texte ne pr\u00e9cise pas la taille.

**argile durcie** \u2014 Le sens retenu est 'Pierre/Ch\u00e2timent'. Le mot "argile durcie" est choisi car il d\u00e9crit pr\u00e9cis\u00e9ment le mat\u00e9riau : de la terre cuite au feu. L'alternative "argile marqu\u00e9e" (utilis\u00e9e par certains traducteurs) est \u00e9cart\u00e9e car elle ajoute l'id\u00e9e de marquage qui n'est pas dans le sens premier du mot.

\u00a7CRITIQUE\u00a7

Les traductions courantes donnent "qui leur lan\u00e7aient des pierres d'argile" (Hamidullah). Certains traducteurs ajoutent "d'argile marqu\u00e9e" ou "d'argile brûlante", ce qui sont des interpr\u00e9tations du mot sijj\u012bl. Les sources \u00e9tymologiques donnent simplement le sens d'argile durcie au feu. Notre traduction "argile durcie" est plus fid\u00e8le \u00e0 l'\u00e9tymologie. Le sens global du verset reste cependant le m\u00eame dans toutes les traductions.`;

  const {error: vaErr4} = await sb.from('verse_analyses').update({
    segments: v4_segments,
    full_translation: "qui leur lan\u00e7aient des pierres d'argile",
    translation_explanation: v4_explanation
  }).eq('id', 6555);
  if (vaErr4) { console.log('VA v4 Error:', vaErr4); return; }
  console.log('V4 VA updated (id=6555)');

  // word_daily for v4
  const v4_daily = [
    { analysis_id: 1554, sense: 'lancement', arabic: '\u0631\u064e\u0645\u064e\u0649 \u0627\u0644\u0643\u064f\u0631\u064e\u0629\u064e', phon: "ram\u0101 al-kurata", french: "Il a lanc\u00e9 le ballon" },
    { analysis_id: 1554, sense: 'lancement', arabic: '\u0631\u064e\u0645\u064e\u064a\u0652\u062a\u064f \u0627\u0644\u062d\u064e\u062c\u064e\u0631\u064e', phon: "ramaytu al-\u1e25ajara", french: "J'ai lanc\u00e9 la pierre" },
    { analysis_id: 1554, sense: 'lancement', arabic: '\u064a\u064e\u0631\u0652\u0645\u0650\u064a \u0628\u0650\u0627\u0644\u0633\u0651\u0650\u0647\u064e\u0627\u0645\u0650', phon: "yarm\u012b bi-s-sih\u0101m", french: "Il tire des fl\u00e8ches" },
    { analysis_id: 376, sense: 'pierre', arabic: '\u0623\u064e\u062e\u064e\u0630\u064e \u062d\u064e\u062c\u064e\u0631\u064b\u0627 \u0645\u0650\u0646\u064e \u0627\u0644\u0623\u064e\u0631\u0652\u0636\u0650', phon: "akhadha \u1e25ajaran min al-ar\u1e0d", french: "Il a pris une pierre du sol" },
    { analysis_id: 376, sense: 'pierre', arabic: '\u0628\u064e\u0646\u064e\u0649 \u0628\u064e\u064a\u0652\u062a\u064e\u0647\u064f \u0628\u0650\u0627\u0644\u062d\u0650\u062c\u064e\u0627\u0631\u064e\u0629\u0650', phon: "ban\u0101 baytahu bi-l-\u1e25ij\u0101ra", french: "Il a construit sa maison en pierres" },
    { analysis_id: 376, sense: 'pierre', arabic: '\u0647\u064e\u0630\u064e\u0627 \u062d\u064e\u062c\u064e\u0631\u064c \u0635\u064e\u0644\u0652\u0628\u064c', phon: "h\u0101dh\u0101 \u1e25ajarun \u1e63alb", french: "C'est une pierre dure" },
    { analysis_id: 2171, sense: 'argile durcie', arabic: '\u0637\u0650\u064a\u0646\u064c \u0645\u064e\u062e\u0652\u0628\u064f\u0648\u0632\u064c \u0628\u0650\u0627\u0644\u0646\u0651\u064e\u0627\u0631\u0650', phon: "\u1e6d\u012bnun makhb\u016bzun bi-n-n\u0101r", french: "De l'argile cuite au feu" },
    { analysis_id: 2171, sense: 'argile durcie', arabic: '\u062d\u0650\u062c\u064e\u0627\u0631\u064e\u0629\u064c \u0645\u0650\u0646 \u0633\u0650\u062c\u0651\u0650\u064a\u0644\u064d', phon: "\u1e25ij\u0101ratun min sijj\u012bl", french: "Des pierres d'argile durcie" },
    { analysis_id: 2171, sense: 'argile durcie', arabic: '\u0627\u0644\u0633\u0650\u062c\u0651\u0650\u064a\u0644\u064f \u0623\u064e\u0635\u0652\u0644\u064e\u0628\u064f \u0645\u0650\u0646\u064e \u0627\u0644\u0637\u0651\u0650\u064a\u0646\u0650', phon: "as-sijj\u012blu a\u1e63labu min a\u1e6d-\u1e6d\u012bn", french: "L'argile durcie est plus dure que l'argile crue" }
  ];

  const {data: wd4, error: wdErr4} = await sb.from('word_daily').insert(v4_daily).select('id, sense');
  if (wdErr4) { console.log('WD v4 Error:', wdErr4); return; }
  console.log('V4 word_daily inserted:', wd4.length);

  console.log('=== VERSE 105:4 COMPLETE ===');
}

run().catch(e => console.error(e));
