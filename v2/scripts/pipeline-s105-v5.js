require('dotenv').config({path: '.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // =============================================
  // VERSE 105:5 — فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ
  // Words: jel (rendre/faire), esf (paille/résidu), akl (mangé/consommé)
  // =============================================

  const v5_vwa = [
    {
      verse_id: 6193,
      word_key: 'jel',
      sense_chosen: 'rendre',
      position: 1,
      analysis_axes: {
        sense_chosen: 'rendre',
        concept_chosen: 'Action/R\u00e9alisation',
        concepts: {
          'Action/R\u00e9alisation': {
            senses: ['faire', 'rendre', 'placer', 'commencer \u00e0', '\u00e9tablir', 'cr\u00e9er'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Action/R\u00e9alisation'. Le verbe ja\u02bbalahum est un accompli avec le pronom hum (les) rattach\u00e9, pr\u00e9c\u00e9d\u00e9 de la particule fa (alors, cons\u00e9cutive) : 'alors Il les a rendus'. D'apr\u00e8s les sources \u00e9tymologiques, ja\u02bbala signifie rendre, transformer quelque chose en autre chose. Ici ja\u02bbalahum ka-\u02bfa\u1e63fin signifie 'Il les a rendus comme de la paille'. Le verbe exprime la transformation finale : les compagnons de l'\u00e9l\u00e9phant sont transform\u00e9s en l'\u00e9quivalent de paille m\u00e2ch\u00e9e. La particule fa indique la cons\u00e9quence directe de ce qui pr\u00e9c\u00e8de.",
            axe1_verset: "Le verset dit fa-ja\u02bbalahum ka-\u02bfa\u1e63fin ma'k\u016bl (alors Il les a rendus comme de la paille m\u00e2ch\u00e9e). Le champ lexical est celui de la transformation finale : rendre (jel), comme (ka), paille (esf), m\u00e2ch\u00e9e (akl). Le verbe ja\u02bbala est l'agent de la transformation ultime. C'est le mot qui porte tout le poids du r\u00e9sultat final.",
            axe2_voisins: "Les versets 2-4 d\u00e9crivent le processus : ruse rendue vaine, oiseaux envoy\u00e9s, pierres lanc\u00e9es. Le verset 5 est le point d'arriv\u00e9e : la transformation en paille. Le verbe ja\u02bbala au verset 5 est le dernier acte de la s\u00e9quence commenc\u00e9e au verset 2. La particule fa (alors) cr\u00e9e un lien de cons\u00e9quence directe avec le verset 4.",
            axe3_sourate: "La sourate culmine avec cette transformation. Le th\u00e8me de la transformation traverse toute la sourate : la ruse transform\u00e9e en \u00e9garement (v2), les oiseaux transform\u00e9s en agents de destruction (v3-4), les compagnons transform\u00e9s en paille (v5). Le verbe ja\u02bbala est le mot r\u00e9current de ces transformations.",
            axe4_coherence: "Le verbe ja\u02bbala avec ka- (comme) est utilis\u00e9 dans le Coran pour les transformations compl\u00e8tes (21:30 'Nous avons fait de l'eau toute chose vivante'). Le sens de transformation est constant.",
            axe5_frequence: "La transformation finale montre que les cons\u00e9quences de l'injustice sont totales. Pour la mission humaine, la sourate illustre que la force brute utilis\u00e9e \u00e0 mauvais escient m\u00e8ne \u00e0 la destruction compl\u00e8te."
          },
          'Sens isol\u00e9/R\u00e9compense': {
            senses: ['r\u00e9compense'],
            status: 'nul',
            proof_ctx: "Sens isol\u00e9 sans rapport avec le contexte de transformation du verset."
          }
        }
      }
    },
    {
      verse_id: 6193,
      word_key: 'esf',
      sense_chosen: 'paille',
      position: 2,
      analysis_axes: {
        sense_chosen: 'paille',
        concept_chosen: 'R\u00e9sidu/L\u00e9g\u00e8ret\u00e9',
        concepts: {
          'R\u00e9sidu/L\u00e9g\u00e8ret\u00e9': {
            senses: ['balle du bl\u00e9', 'paille'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'R\u00e9sidu/L\u00e9g\u00e8ret\u00e9'. Le mot \u02bfa\u1e63fin est un nom ind\u00e9fini au g\u00e9nitif, pr\u00e9c\u00e9d\u00e9 de ka (comme) : 'comme de la paille'. D'apr\u00e8s les sources \u00e9tymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), al-\u02bfa\u1e63f est l'enveloppe l\u00e9g\u00e8re du grain que le vent emporte \u2014 la balle du bl\u00e9, le r\u00e9sidu l\u00e9ger qui reste apr\u00e8s le battage. C'est ce qu'il y a de plus l\u00e9ger et de plus fragile dans le monde v\u00e9g\u00e9tal : le d\u00e9chet du grain, emport\u00e9 par le moindre souffle de vent. La paille est le symbole de la fragilit\u00e9 extr\u00eame. Distinction avec 'Vent violent' : le vent violent est une force destructrice active, alors que le \u02bfa\u1e63f est le r\u00e9sidu passif, ce qui est emport\u00e9 par le vent. Le verset d\u00e9crit ce en quoi les compagnons sont transform\u00e9s (r\u00e9sidu), pas la force qui les d\u00e9truit (vent).",
            axe1_verset: "Le verset dit ka-\u02bfa\u1e63fin ma'k\u016bl (comme de la paille m\u00e2ch\u00e9e). Le champ lexical est celui de la d\u00e9gradation : paille (r\u00e9sidu v\u00e9g\u00e9tal), m\u00e2ch\u00e9e (consum\u00e9e). La paille est l'image de la fragilit\u00e9 extr\u00eame \u2014 ce qui n'a plus aucune substance. Les compagnons de l'\u00e9l\u00e9phant, qui \u00e9taient la force brute, sont r\u00e9duits \u00e0 ce qu'il y a de plus fragile.",
            axe2_voisins: "Le verset 1 pr\u00e9sentait la force (l'\u00e9l\u00e9phant). Le verset 5 pr\u00e9sente le r\u00e9sultat : la paille. Le contraste entre l'\u00e9l\u00e9phant (force maximale) et la paille (fragilit\u00e9 maximale) est le fil conducteur de la sourate. Les versets interm\u00e9diaires (2-4) d\u00e9crivent le processus de transformation de l'un \u00e0 l'autre.",
            axe3_sourate: "La sourate va de l'\u00e9l\u00e9phant \u00e0 la paille. Ce parcours de la force \u00e0 la fragilit\u00e9 est le th\u00e8me m\u00eame de la sourate : ce qui \u00e9tait imposant est devenu insignifiant.",
            axe4_coherence: "Le mot \u02bfa\u1e63f n'appara\u00eet qu'une seule fois dans le Coran, dans ce verset. Son sens est clair dans les sources \u00e9tymologiques : le r\u00e9sidu v\u00e9g\u00e9tal l\u00e9ger. Le mot est utilis\u00e9 comme une comparaison (ka-) pour illustrer la fragilit\u00e9 totale.",
            axe5_frequence: "La paille est le r\u00e9sidu de ce qui \u00e9tait utile (le grain). Les compagnons de l'\u00e9l\u00e9phant sont devenus le r\u00e9sidu de ce qui \u00e9tait puissant. Pour la mission humaine, la sourate montre que la puissance sans justesse finit en r\u00e9sidu inutile."
          },
          'Vent violent': {
            senses: ['temp\u00eate'],
            status: 'peu_probable',
            proof_ctx: "Le vent violent est une force destructrice active. Le verset utilise le mot \u02bfa\u1e63f comme l'objet de la comparaison (ka-\u02bfa\u1e63fin = comme de la paille), pas comme une force. De plus, le mot est qualifi\u00e9 par ma'k\u016bl (m\u00e2ch\u00e9e), qui s'applique \u00e0 un r\u00e9sidu v\u00e9g\u00e9tal, pas \u00e0 un vent. La fronti\u00e8re philosophique : le r\u00e9sidu est passif (il subit), le vent est actif (il d\u00e9truit). Le verset d\u00e9crit l'\u00e9tat final des compagnons (passif), pas la force qui les a d\u00e9truits (actif).",
            axe1_verset: "Le verset dit ka-\u02bfa\u1e63fin ma'k\u016bl. La pr\u00e9position ka (comme) introduit une comparaison : les compagnons sont COMME de la paille. Le vent violent ne peut pas \u00eatre l'objet d'une comparaison avec des personnes d\u00e9truites. On ne dit pas 'Il les a rendus comme une temp\u00eate'. On dit 'Il les a rendus comme de la paille'.",
            axe2_voisins: "Les versets pr\u00e9c\u00e9dents d\u00e9crivent la force destructrice (oiseaux, pierres). Le verset 5 d\u00e9crit le r\u00e9sultat, pas la force. Le vent serait redondant avec les oiseaux et les pierres.",
            axe3_sourate: "La sourate culmine avec l'image de la fragilit\u00e9 (paille), pas avec une nouvelle force (vent). Le vent serait un anticlimax.",
            axe4_coherence: "Le mot \u02bfa\u1e63f dans les sources \u00e9tymologiques d\u00e9signe principalement le r\u00e9sidu v\u00e9g\u00e9tal. Le sens de vent violent est secondaire et s'applique \u00e0 un d\u00e9riv\u00e9 (\u02bf\u0101\u1e63if), pas au mot \u02bfa\u1e63f lui-m\u00eame.",
            axe5_frequence: "Le r\u00e9sidu est l'image de la cons\u00e9quence. Le vent est l'image de la cause. Le verset d\u00e9crit la cons\u00e9quence finale."
          }
        }
      }
    },
    {
      verse_id: 6193,
      word_key: 'akl',
      sense_chosen: 'consomm\u00e9',
      position: 3,
      analysis_axes: {
        sense_chosen: 'consomm\u00e9',
        concept_chosen: 'Destruction/\u00c9rosion',
        concepts: {
          'Alimentation/Consommation': {
            senses: ['manger', 'consommer', 'd\u00e9vorer', 'nourriture'],
            status: 'probable',
            proof_ctx: "L'alimentation est l'acte d'introduire la nourriture dans le corps. Le mot ma'k\u016bl est un participe passif (une forme qui dit que l'action est subie) : 'qui a \u00e9t\u00e9 mang\u00e9e'. Il qualifie la paille (\u02bfa\u1e63f). La paille mang\u00e9e est celle que les animaux ont m\u00e2ch\u00e9e et reccrach\u00e9e. C'est possible : la paille m\u00e2ch\u00e9e est encore plus fragile et d\u00e9form\u00e9e que la paille non m\u00e2ch\u00e9e. La fronti\u00e8re philosophique avec le sens retenu : l'alimentation porte l'id\u00e9e de nourriture (on mange pour se nourrir), la destruction porte l'id\u00e9e de disparition progressive (le feu consume, l'eau \u00e9rode). Ici l'id\u00e9e dominante est la d\u00e9gradation de la mati\u00e8re, pas la nutrition.",
            axe1_verset: "Le verset dit ka-\u02bfa\u1e63fin ma'k\u016bl (comme de la paille mang\u00e9e). La paille mang\u00e9e est celle que les b\u00eates ont m\u00e2ch\u00e9e. Le champ lexical est celui de la d\u00e9gradation : la paille \u00e9tait d\u00e9j\u00e0 un r\u00e9sidu, et en plus elle a \u00e9t\u00e9 mang\u00e9e, m\u00e2ch\u00e9e, d\u00e9form\u00e9e. La dimension alimentaire est pr\u00e9sente mais secondaire.",
            axe2_voisins: "Les versets pr\u00e9c\u00e9dents d\u00e9crivent la destruction progressive (ruse \u00e9gar\u00e9e, pierres lanc\u00e9es). Le verset 5 est l'aboutissement : non seulement r\u00e9duits en paille mais en paille m\u00e2ch\u00e9e \u2014 le degr\u00e9 ultime de la d\u00e9gradation.",
            axe3_sourate: "La sourate va de la puissance \u00e0 la d\u00e9gradation. La paille m\u00e2ch\u00e9e est le point le plus bas de cette d\u00e9gradation.",
            axe4_coherence: "Le mot akala dans le Coran est utilis\u00e9 pour manger (2:35 'mangez de ses fruits') mais aussi pour la destruction (3:13 'ils les voyaient deux fois aussi nombreux, \u00e0 l'\u0153il nu' \u2014 o\u00f9 ukila est utilis\u00e9 pour consumer). Les deux sens coexistent.",
            axe5_frequence: "Le sens alimentaire est quotidien et accessible. La paille m\u00e2ch\u00e9e est une image que tout le monde comprend."
          },
          'Destruction/\u00c9rosion': {
            senses: ['consumer (le feu mange)', 'user'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Destruction/\u00c9rosion'. Le mot ma'k\u016bl est un participe passif de la racine '-k-l. D'apr\u00e8s les sources \u00e9tymologiques, akala signifie manger mais aussi consumer, d\u00e9truire progressivement (le feu mange le bois, l'eau mange la roche). Le participe passif ma'k\u016bl signifie 'qui a \u00e9t\u00e9 consum\u00e9, d\u00e9grad\u00e9, us\u00e9'. La destruction est un processus ext\u00e9rieur de disparition progressive par absorption. Ce sens est compatible avec le participe passif : la paille a SUBI la consommation, elle est consum\u00e9e, d\u00e9grad\u00e9e. Le choix de 'Destruction/\u00c9rosion' plut\u00f4t que 'Alimentation/Consommation' se justifie par le contexte : le verset ne parle pas de nutrition mais de d\u00e9gradation. La paille consum\u00e9e est l'image de ce qui a \u00e9t\u00e9 progressivement d\u00e9truit jusqu'\u00e0 ne plus rien \u00eatre. Distinction avec 'Alimentation' : l'alimentation implique qu'on se nourrit de ce qu'on mange, la destruction implique que ce qui est consum\u00e9 dispara\u00eet. Ici la paille dispara\u00eet, personne ne s'en nourrit. Le point commun des deux sens est l'acte de consumer, mais la finalit\u00e9 diff\u00e8re : nutrition vs d\u00e9gradation. Cependant, en fran\u00e7ais courant, 'm\u00e2ch\u00e9e' capture bien les deux dimensions (d\u00e9gradation physique + acte de m\u00e2cher).",
            axe1_verset: "Le verset dit ka-\u02bfa\u1e63fin ma'k\u016bl (comme de la paille consum\u00e9e). Le champ lexical est celui de la d\u00e9gradation totale : paille + consum\u00e9e = le degr\u00e9 ultime de la d\u00e9composition. Ce n'est plus de la mati\u00e8re, c'est le souvenir de ce qui \u00e9tait de la mati\u00e8re. Le mot ma'k\u016bl (participe passif) dit que l'action est subie : la paille a \u00e9t\u00e9 consum\u00e9e par quelque chose d'ext\u00e9rieur.",
            axe2_voisins: "Les versets pr\u00e9c\u00e9dents d\u00e9crivent la destruction progressive : la ruse \u00e9gar\u00e9e (v2), les oiseaux (v3), les pierres (v4). Le verset 5 est l'aboutissement de cette destruction. Le mot ma'k\u016bl ajoute une couche de d\u00e9gradation \u00e0 la paille : elle n'est pas simplement de la paille, elle est de la paille consum\u00e9e.",
            axe3_sourate: "La sourate va de la force (\u00e9l\u00e9phant) \u00e0 la d\u00e9gradation la plus compl\u00e8te (paille consum\u00e9e). La destruction/\u00e9rosion est le th\u00e8me final de la sourate : tout ce qui \u00e9tait puissant a \u00e9t\u00e9 consum\u00e9.",
            axe4_coherence: "Le verbe akala et ses d\u00e9riv\u00e9s sont utilis\u00e9s dans le Coran pour la consommation physique et la destruction. En 2:275, les sources \u00e9tymologiques distinguent le sens de 'manger' et le sens de 'consumer'. Les deux sont attest\u00e9s.",
            axe5_frequence: "La consommation/destruction est un processus naturel. Tout ce qui est mat\u00e9riel finit par \u00eatre consum\u00e9. Pour la mission humaine, la sourate montre que la force brute est p\u00e9rissable \u2014 elle finit par \u00eatre consum\u00e9e et r\u00e9duite \u00e0 rien."
          }
        }
      }
    }
  ];

  const {data: vwa5, error: vwa5Err} = await sb.from('verse_word_analyses').insert(v5_vwa).select('id, word_key, position');
  if (vwa5Err) { console.log('VWA v5 Error:', vwa5Err); return; }
  console.log('V5 VWA inserted:', vwa5.length);
  vwa5.forEach(d => console.log('  ' + d.word_key + ' pos=' + d.position));

  // =============================================
  // VERSE 105:5 — verse_analyses (Step 4)
  // =============================================
  const v5_segments = [
    { fr: "alors", phon: "fa", arabic: "\u0641\u064e", position: 1, word_key: null, is_particle: true },
    { fr: "Il les a rendus", pos: "verbe", phon: "ja\u02bbalahum", arabic: "\u062c\u064e\u0639\u064e\u0644\u064e\u0647\u064f\u0645\u0652", position: 2, word_key: "jel", is_particle: false, sense_retenu: "rendre" },
    { fr: "comme de la paille", pos: "nom", phon: "ka-\u02bfa\u1e63fin", arabic: "\u0643\u064e\u0639\u064e\u0635\u0652\u0641\u064d", position: 3, word_key: "esf", is_particle: false, sense_retenu: "paille" },
    { fr: "m\u00e2ch\u00e9e", pos: "adjectif", phon: "ma'k\u016bl", arabic: "\u0645\u0651\u064e\u0623\u0652\u0643\u064f\u0648\u0644\u064d", position: 4, word_key: "akl", is_particle: false, sense_retenu: "consomm\u00e9" }
  ];

  const v5_explanation = `\u00a7DEMARCHE\u00a7

La particule **fa** (alors) est cons\u00e9cutive : elle indique que ce qui suit est la cons\u00e9quence directe de ce qui pr\u00e9c\u00e8de. Apr\u00e8s l'envoi des oiseaux et le lancement des pierres, voici le r\u00e9sultat.

Le mot **ja\u02bbalahum** est un verbe accompli de la racine j-\u02bb-l (une forme qui dit que l'action est termin\u00e9e) avec le pronom hum (les) rattach\u00e9 : "Il les a rendus". Le verbe accompli marque l'aboutissement d\u00e9finitif de la transformation. D'apr\u00e8s les sources \u00e9tymologiques, ja\u02bbala signifie rendre, transformer.

Le mot **ka-\u02bfa\u1e63fin** est compos\u00e9 de la pr\u00e9position ka (comme) et du nom \u02bfa\u1e63f (paille, balle du bl\u00e9) au g\u00e9nitif ind\u00e9fini. La pr\u00e9position ka introduit une comparaison : "comme de la paille". D'apr\u00e8s les sources \u00e9tymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), al-\u02bfa\u1e63f est l'enveloppe l\u00e9g\u00e8re du grain, le r\u00e9sidu que le vent emporte. C'est la mati\u00e8re la plus fragile et la plus insignifiante du monde v\u00e9g\u00e9tal.

Le mot **ma'k\u016bl** est un participe passif de la racine '-k-l (une forme qui dit que l'action est subie, pas faite). Il qualifie \u02bfa\u1e63f : "paille m\u00e2ch\u00e9e" ou "paille consum\u00e9e". Le participe passif indique que la paille a subi l'action de consommation. Elle a \u00e9t\u00e9 m\u00e2ch\u00e9e, d\u00e9grad\u00e9e, r\u00e9duite \u00e0 encore moins que de la paille.

\u00a7JUSTIFICATION\u00a7

**rendus** \u2014 Le sens retenu est 'Action/R\u00e9alisation'. Le mot "rendus" est choisi car il exprime la transformation compl\u00e8te d'un \u00e9tat en un autre. L'alternative "faits" est \u00e9cart\u00e9e car "rendre semblable \u00e0" est plus pr\u00e9cis que "faire semblable \u00e0" pour une comparaison.

**paille** \u2014 Le sens retenu est 'R\u00e9sidu/L\u00e9g\u00e8ret\u00e9'. Le mot "paille" est choisi car il d\u00e9signe le r\u00e9sidu v\u00e9g\u00e9tal l\u00e9ger dans la langue courante. L'alternative "balle" (du bl\u00e9) est \u00e9cart\u00e9e car ce mot est technique et peu utilis\u00e9 au quotidien. L'alternative "fourrage" est \u00e9cart\u00e9e car elle implique une utilit\u00e9 (nourriture pour animaux), alors que la paille ici est un d\u00e9chet sans valeur.

**m\u00e2ch\u00e9e** \u2014 Le sens retenu est 'Destruction/\u00c9rosion'. Le mot "m\u00e2ch\u00e9e" est choisi car il combine la d\u00e9gradation physique et l'image concr\u00e8te de la mastication. L'alternative "consum\u00e9e" est \u00e9cart\u00e9e car elle est plus abstraite et moins visuelle. L'alternative "d\u00e9vor\u00e9e" est \u00e9cart\u00e9e car elle implique une violence dans l'acte de manger, alors que le participe passif d\u00e9crit un r\u00e9sultat (l'\u00e9tat de la paille apr\u00e8s), pas la violence de l'acte.

\u00a7CRITIQUE\u00a7

Les traductions courantes donnent "Et Il les a rendus semblables \u00e0 une paille m\u00e2ch\u00e9e" (Hamidullah) ou "comme des feuilles d\u00e9vor\u00e9es" (autres). Notre traduction est tr\u00e8s proche de Hamidullah. Le seul point notable est le mot \u02bfa\u1e63f que certains traducteurs rendent par "feuilles" au lieu de "paille" \u2014 les sources \u00e9tymologiques d\u00e9signent sp\u00e9cifiquement l'enveloppe du grain (la balle du bl\u00e9), pas les feuilles en g\u00e9n\u00e9ral. "Paille" est plus fid\u00e8le \u00e0 l'\u00e9tymologie. Les traductions courantes donnent sensiblement le m\u00eame sens global.`;

  const {error: vaErr5} = await sb.from('verse_analyses').update({
    segments: v5_segments,
    full_translation: "Et Il les a rendus semblables \u00e0 une paille m\u00e2ch\u00e9e.",
    translation_explanation: v5_explanation
  }).eq('id', 6556);
  if (vaErr5) { console.log('VA v5 Error:', vaErr5); return; }
  console.log('V5 VA updated (id=6556)');

  // word_daily for v5
  const v5_daily = [
    { analysis_id: 359, sense: 'rendre', arabic: '\u062c\u064e\u0639\u064e\u0644\u064e\u0647\u064f \u0641\u064e\u0642\u0650\u064a\u0631\u064b\u0627', phon: "ja\u02bbalahu faq\u012bran", french: "Il l'a rendu pauvre" },
    { analysis_id: 359, sense: 'rendre', arabic: '\u062c\u064e\u0639\u064e\u0644\u064e\u0647\u064f\u0645\u0652 \u0643\u064e\u0627\u0644\u062a\u0651\u064f\u0631\u064e\u0627\u0628\u0650', phon: "ja\u02bbalahum ka-t-tur\u0101b", french: "Il les a rendus comme de la poussi\u00e8re" },
    { analysis_id: 359, sense: 'rendre', arabic: '\u062c\u064e\u0639\u064e\u0644\u064e \u0645\u0650\u0646\u0652\u0647\u064e\u0627 \u0634\u064e\u064a\u0652\u0626\u064b\u0627 \u062c\u064e\u0645\u0650\u064a\u0644\u064b\u0627', phon: "ja\u02bbala minh\u0101 shay'an jam\u012blan", french: "Il en a fait quelque chose de beau" },
    { analysis_id: 2099, sense: 'paille', arabic: '\u0627\u0644\u0639\u064e\u0635\u0652\u0641\u064f \u064a\u064e\u0637\u0650\u064a\u0631\u064f \u0645\u064e\u0639\u064e \u0627\u0644\u0631\u0651\u0650\u064a\u062d\u0650', phon: "al-\u02bfa\u1e63fu ya\u1e6d\u012bru ma\u02bfa ar-r\u012b\u1e25", french: "La paille vole avec le vent" },
    { analysis_id: 2099, sense: 'paille', arabic: '\u0647\u064e\u0630\u064e\u0627 \u0639\u064e\u0635\u0652\u0641\u064c \u0644\u064e\u0627 \u0642\u0650\u064a\u0645\u064e\u0629\u064e \u0644\u064e\u0647\u064f', phon: "h\u0101dh\u0101 \u02bfa\u1e63fun l\u0101 q\u012bmata lahu", french: "C'est de la paille sans valeur" },
    { analysis_id: 2099, sense: 'paille', arabic: '\u0641\u064e\u0635\u064e\u0644\u064e \u0627\u0644\u062d\u064e\u0628\u0651\u064e \u0639\u064e\u0646\u0650 \u0627\u0644\u0639\u064e\u0635\u0652\u0641\u0650', phon: "fa\u1e63ala al-\u1e25abba \u02bfan al-\u02bfa\u1e63f", french: "Il a s\u00e9par\u00e9 le grain de la paille" },
    { analysis_id: 947, sense: 'consomm\u00e9', arabic: '\u0623\u064e\u0643\u064e\u0644\u064e\u062a\u0650 \u0627\u0644\u0646\u0651\u064e\u0627\u0631\u064f \u0627\u0644\u062e\u064e\u0634\u064e\u0628\u064e', phon: "akalat an-n\u0101ru al-khashab", french: "Le feu a consum\u00e9 le bois" },
    { analysis_id: 947, sense: 'consomm\u00e9', arabic: '\u0623\u064e\u0643\u064e\u0644\u064e \u0627\u0644\u0635\u0651\u064e\u062f\u064e\u0623\u064f \u0627\u0644\u062d\u064e\u062f\u0650\u064a\u062f\u064e', phon: "akala a\u1e63-\u1e63ada'u al-\u1e25ad\u012bd", french: "La rouille a rong\u00e9 le fer" },
    { analysis_id: 947, sense: 'consomm\u00e9', arabic: '\u062a\u064e\u0628\u0652\u0646\u064c \u0645\u064e\u0623\u0652\u0643\u064f\u0648\u0644\u064c', phon: "tabnun ma'k\u016bl", french: "De la paille m\u00e2ch\u00e9e" }
  ];

  const {data: wd5, error: wdErr5} = await sb.from('word_daily').insert(v5_daily).select('id, sense');
  if (wdErr5) { console.log('WD v5 Error:', wdErr5); return; }
  console.log('V5 word_daily inserted:', wd5.length);

  console.log('=== VERSE 105:5 COMPLETE ===');
}

run().catch(e => console.error(e));
