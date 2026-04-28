const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    console.log(`  Updated VWA ${word_key} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  Error VWA ${word_key}:`, error.message);
    else console.log(`  Created VWA ${word_key} id=${data.id}`);
  }
}

async function insertDaily(analysis_id, phrases) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysis_id);
  if (count > 0) { console.log(`  word_daily exists for id=${analysis_id}, SKIP`); return; }
  const { error } = await sb.from('word_daily').insert(phrases);
  if (error) console.log(`  Error word_daily:`, error.message);
  else console.log(`  Inserted ${phrases.length} daily phrases`);
}

// ============================================================
// VERSET 102:1 — أَلْهَاكُمُ التَّكَاثُرُ
// ============================================================
async function verse102_1() {
  console.log('\n=== VERSET 102:1 ===');
  const V = 6169;

  // alhakum — lhw id=752, verbe forme IV, accompli
  // Forme IV = "faire faire" → faire distraire = a distrait
  await upsertVWA(V, 'lhw', 'distraction', {
    sense_chosen: "distraction",
    concept_chosen: "Divertissement/Oubli",
    concepts: {
      "Divertissement/Oubli": {
        status: "retenu",
        senses: ["distraction", "divertissement", "amusement"],
        proof_ctx: "Le sens retenu est \u00ab Divertissement/Oubli \u00bb. Le verbe alhakum est \u00e0 la forme IV (af\u2019ala) du pass\u00e9 accompli \u2014 \u00ab il vous a distraits \u00bb. La forme IV ajoute la causativit\u00e9 : ce n\u2019est pas vous qui vous \u00eates distraits, c\u2019est l\u2019accumulation qui vous A distraits. D\u2019apr\u00e8s les sources \u00e9tymologiques (Lane\u2019s Arabic-English Lexicon, Edward Lane, 1863), la racine lam-ha-waw d\u00e9signe ce qui d\u00e9tourne de l\u2019essentiel. La distraction est un acte ext\u00e9rieur qui atteint celui qui la subit \u2014 elle le d\u00e9tourne, l\u2019\u00e9loigne de ce qui compte. C\u2019est le seul concept de cette racine, donc pas de distinction \u00e0 faire.",
        axe1_verset: "Le verset dit \u00ab l\u2019accumulation vous a distraits \u00bb. Le sujet est at-takathur (l\u2019accumulation), le verbe est alhakum (a distrait vous). Le champ lexical combine la distraction et l\u2019accumulation \u2014 c\u2019est l\u2019accumulation qui produit la distraction. La distraction est l\u2019effet, l\u2019accumulation est la cause. Le verset pose le probl\u00e8me central de la sourate : les humains sont distraits de l\u2019essentiel par la course \u00e0 l\u2019accumulation.",
        axe2_voisins: "Le verset 2 dit \u00ab jusqu\u2019\u00e0 ce que vous visitiez les tombes \u00bb \u2014 la distraction dure jusqu\u2019\u00e0 la mort. Les versets 3-5 r\u00e9p\u00e8tent \u00ab non ! vous saurez \u00bb \u2014 le savoir s\u2019oppose \u00e0 la distraction. La distraction est l\u2019\u00e9tat qui emp\u00eache le savoir. Le verset 8 parle des bienfaits sur lesquels on sera questionn\u00e9 \u2014 la distraction emp\u00eache de reconna\u00eetre ces bienfaits.",
        axe3_sourate: "La sourate 102 traite de l\u2019aveuglement humain face \u00e0 l\u2019accumulation. La distraction est le m\u00e9canisme central \u2014 c\u2019est elle qui emp\u00eache l\u2019humain de voir la r\u00e9alit\u00e9 (versets 6-7) et de reconna\u00eetre les bienfaits (verset 8). Le th\u00e8me est : la course \u00e0 l\u2019accumulation distrait de l\u2019essentiel jusqu\u2019\u00e0 la mort.",
        axe4_coherence: "Le Coran utilise lahw (distraction) dans de nombreux versets : 6:32 (la vie d\u2019ici-bas n\u2019est que jeu et distraction), 29:64, 47:36. Partout, lahw d\u00e9signe ce qui d\u00e9tourne de l\u2019essentiel. La forme IV (alhakum) est sp\u00e9cifique \u00e0 cette sourate et insiste sur la force de la distraction \u2014 ce n\u2019est pas un choix d\u00e9lib\u00e9r\u00e9, c\u2019est une emprise.",
        axe5_frequence: "La distraction est l\u2019oppos\u00e9 de la mission du khalifa. Celui qui est distrait ne construit pas la civilisation, n\u2019\u00e9tablit pas la justice, n\u2019emp\u00eache pas la corruption. La distraction par l\u2019accumulation est la menace fondamentale \u00e0 la mission humaine \u2014 elle remplace la construction par l\u2019accumulation st\u00e9rile."
      }
    }
  }, 1);

  // at-takathur — kṯr id=413, nom d\u00e9fini (al-), masdar forme VI (tafa\u2019ul)
  await upsertVWA(V, 'k\u1e6fr', 'abondance', {
    sense_chosen: "abondance",
    concept_chosen: "Abondance/Multiplicit\u00e9",
    concepts: {
      "Abondance/Multiplicit\u00e9": {
        status: "retenu",
        senses: ["\u00eatre nombreux", "abondance", "beaucoup", "multiplier", "la plupart", "souvent"],
        proof_ctx: "Le sens retenu est \u00ab Abondance/Multiplicit\u00e9 \u00bb. Le mot at-takathur est un masdar (nom d\u2019action) de la forme VI (tafa\u2019ul), qui exprime la r\u00e9ciprocit\u00e9 et la rivalit\u00e9. La forme VI de k-th-r signifie \u00ab rivaliser en abondance, chercher \u00e0 avoir plus que l\u2019autre \u00bb. Le nom est d\u00e9fini par al-, ce qui en fait LA rivalit\u00e9 dans l\u2019accumulation \u2014 une r\u00e9alit\u00e9 connue et identifiable. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine kaf-tha-ra d\u00e9signe ce qui est en grande quantit\u00e9. La forme VI ajoute la dimension de comp\u00e9tition : ce n\u2019est pas juste l\u2019abondance, c\u2019est la course \u00e0 l\u2019abondance, la surench\u00e8re. C\u2019est le seul concept pertinent pour ce mot dans ce contexte.",
        axe1_verset: "Le verset dit \u00ab at-takathur vous a distraits \u00bb. Le mot est sujet du verbe \u2014 c\u2019est la rivalit\u00e9 dans l\u2019accumulation qui agit comme agent de distraction. Le champ lexical distraction + accumulation forme le c\u0153ur du message : c\u2019est la course au plus (argent, enfants, prestige) qui d\u00e9tourne de l\u2019essentiel.",
        axe2_voisins: "Le verset 2 pr\u00e9cise que cette distraction dure jusqu\u2019\u00e0 la mort (jusqu\u2019aux tombes). Le verset 8 parle des bienfaits sur lesquels on sera questionn\u00e9. L\u2019accumulation est ce que les humains poursuivent \u00e0 la place de la reconnaissance des bienfaits.",
        axe3_sourate: "La sourate porte le nom at-takathur (la rivalit\u00e9 dans l\u2019accumulation). C\u2019est le th\u00e8me central \u2014 la course \u00e0 l\u2019accumulation distrait de la r\u00e9alit\u00e9 et des bienfaits. Le titre m\u00eame confirme la centralit\u00e9 de ce mot.",
        axe4_coherence: "Le Coran critique l\u2019accumulation dans de nombreux versets : 9:34 (ceux qui amassent l\u2019or et l\u2019argent), 104:2 (celui qui amasse une richesse et la compte). La forme VI (takathur) est sp\u00e9cifique \u00e0 cette sourate et ajoute la dimension de rivalit\u00e9 \u2014 ce n\u2019est pas juste amasser, c\u2019est amasser pour surpasser les autres.",
        axe5_frequence: "La rivalit\u00e9 dans l\u2019accumulation est une corruption fondamentale de la mission du khalifa. Au lieu de construire la civilisation et la justice, l\u2019humain accumule pour lui-m\u00eame en comp\u00e9tition avec les autres. C\u2019est l\u2019oppos\u00e9 de la coop\u00e9ration n\u00e9cessaire \u00e0 la mission."
      }
    }
  }, 2);

  const { error } = await sb.from('verse_analyses').update({
    translation_arab: "La rivalit\u00e9 dans l\u2019accumulation vous a distraits,",
    full_translation: "La course aux richesses vous distrait,",
    segments: [
      { fr: "vous a distraits", pos: "verbe", phon: "alhakum", arabic: "\u0623\u064e\u0644\u0652\u0647\u064e\u0649\u0670\u0643\u064f\u0645\u064f", position: 1, word_key: "lhw", is_particle: false, sense_retenu: "distraction" },
      { fr: "la rivalit\u00e9 dans l\u2019accumulation", pos: "nom", phon: "at-takathur", arabic: "\u0671\u0644\u062a\u0651\u064e\u0643\u064e\u0627\u062b\u064f\u0631\u064f", position: 2, word_key: "k\u1e6fr", is_particle: false, sense_retenu: "abondance" }
    ],
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset 102:1 contient deux mots importants.

**alhakum** (\u0623\u064e\u0644\u0652\u0647\u064e\u0627\u0643\u064f\u0645\u064f) est un verbe \u00e0 la forme IV (af\u2019ala), au pass\u00e9 accompli, avec le suffixe pronominal -kum (vous). La forme IV est causative \u2014 elle signifie \u00ab faire faire \u00bb. Ici : \u00ab il vous a FAIT oublier / il vous a distraits \u00bb. Le sujet n\u2019est pas \u00ab vous \u00bb mais le mot qui suit. Le pass\u00e9 accompli indique que c\u2019est un fait accompli, pas une possibilit\u00e9. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine lam-ha-waw d\u00e9signe ce qui d\u00e9tourne de l\u2019essentiel.

**at-takathur** (\u0627\u0644\u062a\u0651\u064e\u0643\u064e\u0627\u062b\u064f\u0631\u064f) est un masdar (nom d\u2019action) de la forme VI (tafa\u2019ul) de la racine kaf-tha-ra. La forme VI exprime la r\u00e9ciprocit\u00e9 et la rivalit\u00e9 \u2014 ici : \u00ab rivaliser en abondance, chercher \u00e0 avoir plus que l\u2019autre \u00bb. Ce n\u2019est pas juste \u00ab avoir beaucoup \u00bb, c\u2019est \u00ab rivaliser pour en avoir le plus \u00bb. Le nom est d\u00e9fini par al- (la), ce qui en fait un ph\u00e9nom\u00e8ne connu et identifiable.

La phrase se lit : \u00ab La rivalit\u00e9 dans l\u2019accumulation vous a distraits \u00bb. Le sujet (at-takathur) est apr\u00e8s le verbe \u2014 c\u2019est l\u2019ordre normal en arabe (verbe-sujet). Le texte ne pr\u00e9cise pas CE qui est accumul\u00e9 (argent, enfants, prestige) \u2014 le texte laisse l\u2019objet ouvert.

\u00a7JUSTIFICATION\u00a7
**distraits** \u2014 Le sens retenu est \u00ab Divertissement/Oubli \u00bb. Le mot \u00ab distraits \u00bb est choisi car il capture l\u2019id\u00e9e d\u2019\u00eatre d\u00e9tourn\u00e9 de l\u2019essentiel. L\u2019alternative \u00ab divertis \u00bb est \u00e9cart\u00e9e car elle a une connotation positive (se divertir = s\u2019amuser), alors que le texte d\u00e9crit un \u00e9tat n\u00e9gatif. L\u2019alternative \u00ab rendus insouciants \u00bb est \u00e9cart\u00e9e car c\u2019est du registre litt\u00e9raire.

**rivalit\u00e9 dans l\u2019accumulation** \u2014 Le sens retenu est \u00ab Abondance/Multiplicit\u00e9 \u00bb. L\u2019expression \u00ab rivalit\u00e9 dans l\u2019accumulation \u00bb est choisie car elle capture \u00e0 la fois la racine (abondance, quantit\u00e9) et la forme VI (rivalit\u00e9 mutuelle). L\u2019alternative \u00ab surench\u00e8re \u00bb est \u00e9cart\u00e9e car elle est trop technique. L\u2019alternative \u00ab accumulation \u00bb seule est \u00e9cart\u00e9e car elle omet la dimension de comp\u00e9tition de la forme VI.

\u00a7CRITIQUE\u00a7
**richesses vs accumulation** \u2014 Les traductions courantes donnent \u00ab la course aux richesses \u00bb (Hamidullah). Ce choix restreint l\u2019objet de l\u2019accumulation aux richesses mat\u00e9rielles. Or le texte dit at-takathur sans pr\u00e9ciser ce qui est accumul\u00e9 \u2014 la racine k-th-r signifie simplement \u00ab \u00eatre nombreux, abondant \u00bb. La forme VI ajoute la rivalit\u00e9. Le texte parle de rivaliser en quantit\u00e9 (quelle qu\u2019elle soit : argent, enfants, prestige, titres), pas seulement en richesses. Traduire par \u00ab richesses \u00bb, c\u2019est ajouter une pr\u00e9cision absente du texte.`
  }).eq('verse_id', V);
  console.log('  Updated verse_analyses', error?.message || 'OK');

  await insertDaily(752, [
    { analysis_id: 752, sense: 'distraction', arabic: '\u0644\u0647\u0648', phon: 'lahw', french: "Arr\u00eate de te laisser distraire par ton t\u00e9l\u00e9phone \u2014 concentre-toi sur l\u2019essentiel." },
    { analysis_id: 752, sense: 'distraction', arabic: '\u0644\u0647\u0648', phon: 'lahw', french: "Le bruit ambiant m\u2019a distrait et j\u2019ai oubli\u00e9 ce que je voulais dire." },
    { analysis_id: 752, sense: 'distraction', arabic: '\u0644\u0647\u0648', phon: 'lahw', french: "Les r\u00e9seaux sociaux sont une vraie distraction \u2014 on y perd des heures sans s\u2019en rendre compte." }
  ]);
  await insertDaily(413, [
    { analysis_id: 413, sense: 'abondance', arabic: '\u0643\u062b\u0631', phon: 'kathura', french: "Il y a beaucoup de monde aujourd\u2019hui \u2014 c\u2019est bond\u00e9." },
    { analysis_id: 413, sense: 'abondance', arabic: '\u0643\u062b\u0631', phon: 'kathura', french: "La plupart des gens ne prennent pas le temps de r\u00e9fl\u00e9chir avant d\u2019agir." },
    { analysis_id: 413, sense: 'abondance', arabic: '\u0643\u062b\u0631', phon: 'kathura', french: "Il a multipli\u00e9 ses efforts et les r\u00e9sultats ont suivi en abondance." }
  ]);

  console.log('VERSET 102:1 \u2014 TERMIN\u00c9');
  console.log('  alhakum (lhw) \u2192 "Divertissement/Oubli" \u2192 "distraits"');
  console.log('  at-takathur (k\u1e6fr) \u2192 "Abondance/Multiplicit\u00e9" \u2192 "accumulation"');
}

// ============================================================
// VERSET 102:2 — حَتَّى زُرْتُمُ الْمَقَابِرَ
// ============================================================
async function verse102_2() {
  console.log('\n=== VERSET 102:2 ===');
  const V = 6170;

  await upsertVWA(V, 'zwr', 'visiter', {
    sense_chosen: "visiter",
    concept_chosen: "Visite/Fausset\u00e9",
    concepts: {
      "Visite/Fausset\u00e9": {
        status: "retenu",
        senses: ["visiter", "faux t\u00e9moignage"],
        proof_ctx: "Le sens retenu est \u00ab Visite/Fausset\u00e9 \u00bb, sp\u00e9cifiquement le sens \u00ab visiter \u00bb. Le verbe zurtum est au pass\u00e9 accompli, deuxi\u00e8me personne du pluriel \u2014 \u00ab vous avez visit\u00e9 \u00bb. Le verbe zara signifie se rendre aupr\u00e8s de quelqu\u2019un pour un temps limit\u00e9, pas pour y rester. C\u2019est une visite temporaire. Le Coran utilise ce verbe pour la mort \u2014 les tombes sont \u00ab visit\u00e9es \u00bb, pas habit\u00e9es. Cela implique que la mort n\u2019est pas la fin mais un passage. Le sens de faux t\u00e9moignage (zour) est hors sujet ici \u2014 le verbe est utilis\u00e9 avec les tombes comme compl\u00e9ment.",
        axe1_verset: "Le verset dit hatta (jusqu\u2019\u00e0 ce que) zurtum (vous avez visit\u00e9) al-maqabir (les tombes). La visite est temporelle \u2014 elle marque la fin de la distraction. Le champ lexical est coh\u00e9rent : la distraction (v1) dure jusqu\u2019\u00e0 la visite des tombes (v2). La visite est le point final de la distraction terrestre.",
        axe2_voisins: "Le verset 1 pose le probl\u00e8me (la distraction). Le verset 2 en marque la limite temporelle (jusqu\u2019\u00e0 la mort). Les versets 3-5 annoncent le savoir qui vient apr\u00e8s. La visite des tombes est le moment charni\u00e8re entre la distraction et le savoir.",
        axe3_sourate: "La sourate oppose la distraction terrestre au savoir de l\u2019au-del\u00e0. La visite des tombes est le passage entre ces deux \u00e9tats. Le choix du mot \u00ab visiter \u00bb (et non \u00ab entrer \u00bb ou \u00ab habiter \u00bb) sugg\u00e8re que la tombe n\u2019est pas la destination finale.",
        axe4_coherence: "Le Coran utilise zara dans le sens de visiter un lieu temporairement. Le choix de ce verbe pour la mort est significatif \u2014 il implique que la mort est un passage, pas un arr\u00eat. En 23:99-100, le Coran parle du barzakh (barri\u00e8re) entre la mort et la r\u00e9surrection, confirmant que la tombe est un s\u00e9jour temporaire.",
        axe5_frequence: "La visite des tombes rappelle la finitude de la mission du khalifa dans le temps terrestre. Le temps pass\u00e9 \u00e0 accumuler est du temps perdu pour la mission. La mort met fin \u00e0 la possibilit\u00e9 d\u2019agir."
      }
    }
  }, 2);

  await upsertVWA(V, 'qbr', 'tombe', {
    sense_chosen: "tombe",
    concept_chosen: "Tombe/S\u00e9pulture",
    concepts: {
      "Tombe/S\u00e9pulture": {
        status: "retenu",
        senses: ["tombe", "enterrer"],
        proof_ctx: "Le sens retenu est \u00ab Tombe/S\u00e9pulture \u00bb. Le mot al-maqabir est un pluriel de maqbara (lieu d\u2019enterrement), d\u00e9fini par al-. C\u2019est LE lieu connu o\u00f9 les morts sont enterr\u00e9s. Le pluriel d\u00e9signe les cimeti\u00e8res \u2014 la r\u00e9alit\u00e9 universelle de la mort. Le mot est sans ambigu\u00eft\u00e9 dans ce contexte.",
        axe1_verset: "Le verset dit \u00ab jusqu\u2019\u00e0 ce que vous visitiez les tombes \u00bb. Les tombes sont la destination de la visite. Le champ lexical combine le temps (hatta = jusqu\u2019\u00e0), le mouvement (visiter) et la mort (tombes).",
        axe2_voisins: "Le verset 1 parle de distraction, le verset 2 de mort. Les versets 3-5 parlent de savoir. La tombe est la fronti\u00e8re entre la vie de distraction et la r\u00e9alit\u00e9 du savoir.",
        axe3_sourate: "La sourate oppose la vie terrestre (accumulation, distraction) \u00e0 la r\u00e9alit\u00e9 de l\u2019au-del\u00e0 (savoir, vision, questionnement). Les tombes sont le point de basculement.",
        axe4_coherence: "Le Coran mentionne les qubur (tombes) dans plusieurs versets : 82:4 (quand les tombes seront retourn\u00e9es), 100:9 (quand ce qui est dans les tombes sera exhum\u00e9). Les tombes sont toujours li\u00e9es \u00e0 la r\u00e9surrection et au r\u00e9veil.",
        axe5_frequence: "Les tombes rappellent la finitude de la vie terrestre et l\u2019urgence de la mission. Chaque visite au cimeti\u00e8re est un rappel que le temps est compt\u00e9."
      }
    }
  }, 3);

  const { error } = await sb.from('verse_analyses').update({
    translation_arab: "jusqu\u2019\u00e0 ce que vous visitiez les tombes.",
    full_translation: "jusqu\u2019\u00e0 ce que vous visitiez les tombes.",
    segments: [
      { fr: "jusqu\u2019\u00e0 ce que", phon: "hatta", arabic: "\u062d\u064e\u062a\u0651\u064e\u0649\u0670", position: 1, word_key: null, is_particle: true },
      { fr: "vous visitiez", pos: "verbe", phon: "zurtum", arabic: "\u0632\u064f\u0631\u0652\u062a\u064f\u0645\u064f", position: 2, word_key: "zwr", is_particle: false, sense_retenu: "visiter" },
      { fr: "les tombes", pos: "nom", phon: "al-maqabir", arabic: "\u0671\u0644\u0652\u0645\u064e\u0642\u064e\u0627\u0628\u0650\u0631\u064e", position: 3, word_key: "qbr", is_particle: false, sense_retenu: "tombe" }
    ],
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset 102:2 compl\u00e8te le verset 1. Il commence par **hatta** (\u062d\u064e\u062a\u0651\u064e\u0649), particule qui signifie \u00ab jusqu\u2019\u00e0 ce que \u00bb \u2014 elle marque la limite temporelle de la distraction.

**zurtum** (\u0632\u064f\u0631\u0652\u062a\u064f\u0645\u064f) est un verbe au pass\u00e9 accompli, deuxi\u00e8me personne du pluriel. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine za-waw-ra signifie visiter, se rendre aupr\u00e8s de quelqu\u2019un pour un temps limit\u00e9. Le choix de ce verbe est remarquable : le Coran dit que vous \u00ab visitez \u00bb les tombes, pas que vous les \u00ab habitez \u00bb. La visite est temporaire \u2014 ce qui implique que la tombe n\u2019est pas la destination finale.

**al-maqabir** (\u0627\u0644\u0652\u0645\u064e\u0642\u064e\u0627\u0628\u0650\u0631\u064e) est le pluriel de maqbara, le lieu de s\u00e9pulture, d\u00e9fini par al-. C\u2019est le lieu connu o\u00f9 les morts sont enterr\u00e9s.

La phrase compl\u00e8te des versets 1-2 se lit : \u00ab La rivalit\u00e9 dans l\u2019accumulation vous a distraits, jusqu\u2019\u00e0 ce que vous visitiez les tombes \u00bb. La distraction dure toute la vie \u2014 elle ne s\u2019arr\u00eate qu\u2019\u00e0 la mort.

\u00a7JUSTIFICATION\u00a7
**visitiez** \u2014 Le sens retenu est \u00ab Visite/Fausset\u00e9 \u00bb, sp\u00e9cifiquement \u00ab visiter \u00bb. Le mot \u00ab visitiez \u00bb est choisi car il pr\u00e9serve la nuance du verbe arabe zara : une visite est temporaire. L\u2019alternative \u00ab alliez aux tombes \u00bb est \u00e9cart\u00e9e car elle perd la nuance de temporarit\u00e9. L\u2019alternative \u00ab rejoigniez \u00bb est \u00e9cart\u00e9e car elle implique une arriv\u00e9e d\u00e9finitive.

**tombes** \u2014 Le sens retenu est \u00ab Tombe/S\u00e9pulture \u00bb. Le mot \u00ab tombes \u00bb est choisi car c\u2019est le terme le plus courant et direct. L\u2019alternative \u00ab s\u00e9pultures \u00bb est \u00e9cart\u00e9e (registre litt\u00e9raire). L\u2019alternative \u00ab cimeti\u00e8res \u00bb est \u00e9cart\u00e9e car le texte dit al-maqabir (les tombes elles-m\u00eames), pas le lieu en g\u00e9n\u00e9ral.

\u00a7CRITIQUE\u00a7
Les traductions courantes donnent sensiblement le m\u00eame sens. Le mot \u00ab visitiez \u00bb est pr\u00e9serv\u00e9 par la plupart des traducteurs. La nuance importante est que \u00ab visiter \u00bb implique la temporarit\u00e9 du s\u00e9jour dans la tombe \u2014 ce n\u2019est pas la fin mais un passage.`
  }).eq('verse_id', V);
  console.log('  Updated verse_analyses', error?.message || 'OK');

  await insertDaily(2424, [
    { analysis_id: 2424, sense: 'visiter', arabic: '\u0632\u0648\u0631', phon: 'ziyara', french: "Je suis all\u00e9 rendre visite \u00e0 ma grand-m\u00e8re ce week-end \u2014 \u00e7a lui fait plaisir." },
    { analysis_id: 2424, sense: 'visiter', arabic: '\u0632\u0648\u0631', phon: 'ziyara', french: "On a visit\u00e9 le mus\u00e9e pendant les vacances \u2014 c\u2019\u00e9tait tr\u00e8s int\u00e9ressant." },
    { analysis_id: 2424, sense: 'visiter', arabic: '\u0632\u0648\u0631', phon: 'ziyara', french: "Il passe visiter ses voisins r\u00e9guli\u00e8rement \u2014 il ne reste jamais longtemps mais \u00e7a compte." }
  ]);
  await insertDaily(2071, [
    { analysis_id: 2071, sense: 'tombe', arabic: '\u0642\u0628\u0631', phon: 'qabr', french: "On a d\u00e9pos\u00e9 des fleurs sur la tombe de mon grand-p\u00e8re." },
    { analysis_id: 2071, sense: 'tombe', arabic: '\u0642\u0628\u0631', phon: 'qabr', french: "Le cimeti\u00e8re est un endroit calme \u2014 chaque tombe raconte une vie." },
    { analysis_id: 2071, sense: 'tombe', arabic: '\u0642\u0628\u0631', phon: 'qabr', french: "Quand on visite les tombes, \u00e7a remet les choses en perspective." }
  ]);

  console.log('VERSET 102:2 \u2014 TERMIN\u00c9');
}

// ============================================================
// VERSETS 102:3-4 — كَلَّا سَوْفَ تَعْلَمُونَ / ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ
// ============================================================
async function verse102_3_4() {
  console.log('\n=== VERSETS 102:3-4 ===');

  const elmAxes = {
    sense_chosen: "savoir",
    concept_chosen: "Savoir/Connaissance",
    concepts: {
      "Savoir/Connaissance": {
        status: "retenu",
        senses: ["savoir", "conna\u00eetre", "\u00eatre inform\u00e9", "certitude", "savant", "science", "enseignement"],
        proof_ctx: "Le sens retenu est \u00ab Savoir/Connaissance \u00bb. Le verbe ta\u2019lamuna est \u00e0 l\u2019inaccompli, deuxi\u00e8me personne du pluriel \u2014 \u00ab vous saurez \u00bb. L\u2019inaccompli indique un futur certain (confirm\u00e9 par sawfa). Le savoir est l\u2019oppos\u00e9 de la distraction du verset 1 \u2014 ceux qui \u00e9taient distraits sauront. Le savoir est ici la r\u00e9alit\u00e9 qui vient apr\u00e8s la mort, quand la distraction cesse. Distinction avec \u00ab Marque/Signe \u00bb : le signe est ext\u00e9rieur et observable, le savoir est int\u00e9rieur et comp\u00e9hensif. Le verset ne parle pas de signes mais d\u2019une compr\u00e9hension qui arrive apr\u00e8s la mort.",
        axe1_verset: "Le verset dit kalla (non !) sawfa (bient\u00f4t) ta\u2019lamuna (vous saurez). Le champ lexical combine le refus (kalla), le futur (sawfa) et le savoir (ta\u2019lamuna). Le savoir est annonc\u00e9 comme une certitude future \u2014 il s\u2019oppose \u00e0 l\u2019\u00e9tat actuel d\u2019ignorance caus\u00e9 par la distraction.",
        axe2_voisins: "Les versets 1-2 d\u00e9crivent la distraction jusqu\u2019\u00e0 la mort. Les versets 3-4 annoncent le savoir qui vient apr\u00e8s. Le verset 5 pr\u00e9cise la nature de ce savoir (savoir de certitude). Le savoir est le rem\u00e8de \u00e0 la distraction.",
        axe3_sourate: "La sourate oppose la distraction (v1-2) au savoir (v3-5) puis \u00e0 la vision (v6-7) et au questionnement (v8). Le savoir est la premi\u00e8re \u00e9tape du r\u00e9veil apr\u00e8s la distraction.",
        axe4_coherence: "Le Coran utilise \u2019ilm (savoir) comme oppos\u00e9 du jahl (ignorance) et du lahw (distraction) dans de nombreux versets. En 6:32, la vie d\u2019ici-bas est jeu et distraction \u2014 le savoir est ce qui permet de d\u00e9passer cette distraction. La r\u00e9p\u00e9tition de \u00ab vous saurez \u00bb (v3 et v4) insiste sur l\u2019in\u00e9vitabilit\u00e9 de ce savoir.",
        axe5_frequence: "Le savoir est fondamental pour la mission du khalifa. Sans savoir, pas de justice ni de civilisation. Le verset annonce que le savoir viendra de toute fa\u00e7on \u2014 mieux vaut le chercher maintenant que le subir plus tard."
      },
      "Marque/Signe": { status: "nul", senses: ["marquer", "signe", "drapeau", "montagne", "rep\u00e8re", "\u00e9tendard", "l\u00e8vre fendue"], proof_ctx: "Le signe est un rep\u00e8re ext\u00e9rieur, incompatible avec un verbe \u00e0 l\u2019inaccompli (\u00ab vous saurez \u00bb). Le verset parle de savoir, pas de signes." },
      "Monde/Cr\u00e9ation": { status: "nul", senses: ["monde", "les mondes", "ensemble des cr\u00e9atures", "univers"], proof_ctx: "Le monde est une totalit\u00e9 englobante, incompatible avec un verbe d\u2019acquisition de connaissance." },
      "Sens isol\u00e9/Enseigner": { status: "nul", senses: ["enseigner"], proof_ctx: "Enseigner est un acte transitif dirig\u00e9 vers l\u2019autre. Le verset parle de ce que VOUS saurez, pas de ce que vous enseignerez." },
      "Lieu/G\u00e9ographie": { status: "nul", senses: ["informer", "nommer"], proof_ctx: "Hors sujet dans ce contexte de r\u00e9v\u00e9lation future du savoir." },
      "Sens isol\u00e9/Homonyme": { status: "nul", senses: ["homonyme"], proof_ctx: "Sens linguistique isol\u00e9, sans rapport avec le contexte." }
    }
  };

  // V3
  await upsertVWA(6171, 'elm', 'savoir', elmAxes, 3);
  const { error: e3 } = await sb.from('verse_analyses').update({
    translation_arab: "Non ! Vous saurez bient\u00f4t.",
    full_translation: "Mais non! Vous saurez bient\u00f4t!",
    segments: [
      { fr: "non !", phon: "kalla", arabic: "\u0643\u064e\u0644\u0651\u064e\u0627", position: 1, word_key: null, is_particle: true },
      { fr: "bient\u00f4t", phon: "sawfa", arabic: "\u0633\u064e\u0648\u0652\u0641\u064e", position: 2, word_key: null, is_particle: true },
      { fr: "vous saurez", pos: "verbe", phon: "ta\u2019lamuna", arabic: "\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", position: 3, word_key: "elm", is_particle: false, sense_retenu: "savoir" }
    ],
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset 102:3 contient trois \u00e9l\u00e9ments.

**kalla** (\u0643\u064e\u0644\u0651\u064e\u0627) est une particule de r\u00e9futation forte. Elle signifie \u00ab non ! \u00bb, \u00ab certainement pas ! \u00bb. Elle rejette ce qui pr\u00e9c\u00e8de \u2014 ici, l\u2019\u00e9tat de distraction par l\u2019accumulation.

**sawfa** (\u0633\u064e\u0648\u0652\u0641\u064e) est une particule du futur, plus \u00e9loign\u00e9e que sa (س). Elle signifie \u00ab bient\u00f4t \u00bb avec une notion de certitude.

**ta\u2019lamuna** (\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e) est un verbe \u00e0 l\u2019inaccompli (une forme qui dit que l\u2019action est en cours ou future), deuxi\u00e8me personne du pluriel. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine \u2019ayn-lam-mim d\u00e9signe le savoir, la connaissance. L\u2019inaccompli avec sawfa = \u00ab vous saurez bient\u00f4t \u00bb.

Le verset s\u2019oppose au verset 1 : vous \u00e9tiez distraits, mais vous SAUREZ. Le savoir est pr\u00e9sent\u00e9 comme in\u00e9vitable.

\u00a7JUSTIFICATION\u00a7
**saurez** \u2014 Le sens retenu est \u00ab Savoir/Connaissance \u00bb. Le mot \u00ab saurez \u00bb est choisi car c\u2019est le futur du verbe savoir, le plus courant en fran\u00e7ais. L\u2019alternative \u00ab conna\u00eetrez \u00bb est \u00e9cart\u00e9e car \u00ab conna\u00eetre \u00bb implique une familiarit\u00e9 progressive, alors que \u00ab savoir \u00bb d\u00e9signe une compr\u00e9hension soudaine et compl\u00e8te. L\u2019alternative \u00ab apprendrez \u00bb est \u00e9cart\u00e9e car elle implique un processus, alors que le verset annonce une r\u00e9v\u00e9lation certaine.

\u00a7CRITIQUE\u00a7
Les traductions courantes donnent sensiblement le m\u00eame sens.`
  }).eq('verse_id', 6171);
  console.log('  Updated v3', e3?.message || 'OK');

  // V4
  await upsertVWA(6172, 'elm', 'savoir', elmAxes, 4);
  const { error: e4 } = await sb.from('verse_analyses').update({
    translation_arab: "Puis non ! Vous saurez bient\u00f4t.",
    full_translation: "Encore une fois! Vous saurez bient\u00f4t!",
    segments: [
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", position: 1, word_key: null, is_particle: true },
      { fr: "non !", phon: "kalla", arabic: "\u0643\u064e\u0644\u0651\u064e\u0627", position: 2, word_key: null, is_particle: true },
      { fr: "bient\u00f4t", phon: "sawfa", arabic: "\u0633\u064e\u0648\u0652\u0641\u064e", position: 3, word_key: null, is_particle: true },
      { fr: "vous saurez", pos: "verbe", phon: "ta\u2019lamuna", arabic: "\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", position: 4, word_key: "elm", is_particle: false, sense_retenu: "savoir" }
    ],
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset 102:4 r\u00e9p\u00e8te le verset 3 avec l\u2019ajout de **thumma** (\u062b\u064f\u0645\u0651\u064e), une particule qui signifie \u00ab puis, ensuite \u00bb avec une notion de d\u00e9lai et de gradation. La r\u00e9p\u00e9tition avec thumma insiste sur la certitude du savoir \u00e0 venir et ajoute une gradation : non seulement vous saurez, mais PUIS ENCORE vous saurez. Certains commentateurs distinguent deux moments de savoir (dans la tombe puis au Jour du Jugement), mais le texte ne pr\u00e9cise pas \u2014 il insiste sur l\u2019in\u00e9vitabilit\u00e9 par la r\u00e9p\u00e9tition.

\u00a7JUSTIFICATION\u00a7
M\u00eames choix que le verset 3. La r\u00e9p\u00e9tition du verset est un proc\u00e9d\u00e9 rh\u00e9torique arabe d\u2019insistance.

\u00a7CRITIQUE\u00a7
Certaines traductions donnent \u00ab encore une fois \u00bb pour thumma kalla, ce qui est une interpr\u00e9tation. Le texte dit \u00ab puis non \u00bb \u2014 thumma (puis) + kalla (non). La traduction litt\u00e9rale est plus fid\u00e8le.`
  }).eq('verse_id', 6172);
  console.log('  Updated v4', e4?.message || 'OK');

  await insertDaily(254, [
    { analysis_id: 254, sense: 'savoir', arabic: '\u0639\u0644\u0645', phon: "\u2019ilm", french: "Le savoir, c\u2019est ce qui reste quand on a tout oubli\u00e9 \u2014 la compr\u00e9hension profonde." },
    { analysis_id: 254, sense: 'savoir', arabic: '\u0639\u0644\u0645', phon: "\u2019ilm", french: "Tu savais d\u00e8s le d\u00e9part que c\u2019\u00e9tait la bonne d\u00e9cision \u2014 tu le sentais." },
    { analysis_id: 254, sense: 'savoir', arabic: '\u0639\u0644\u0645', phon: "\u2019ilm", french: "Savoir et conna\u00eetre, c\u2019est diff\u00e9rent \u2014 savoir, c\u2019est comprendre en profondeur." }
  ]);

  console.log('VERSETS 102:3-4 \u2014 TERMIN\u00c9S');
}

// ============================================================
// VERSET 102:5 — كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ
// ============================================================
async function verse102_5() {
  console.log('\n=== VERSET 102:5 ===');
  const V = 6173;

  // elm d\u00e9j\u00e0 analys\u00e9 - m\u00eame axes
  await upsertVWA(V, 'elm', 'savoir', {
    sense_chosen: "savoir",
    concept_chosen: "Savoir/Connaissance",
    concepts: {
      "Savoir/Connaissance": {
        status: "retenu",
        senses: ["savoir", "conna\u00eetre", "\u00eatre inform\u00e9", "certitude", "savant", "science", "enseignement"],
        proof_ctx: "M\u00eame analyse que les versets 3-4. Le verbe ta\u2019lamuna est \u00e0 l\u2019inaccompli. Ici il est pr\u00e9c\u00e9d\u00e9 de law (si conditionnel) \u2014 \u00ab si vous saviez \u00bb. Le mot \u2019ilm appara\u00eet aussi comme nom (compl\u00e9ment d\u2019objet) dans une construction d\u2019idafa avec al-yaqin \u2014 \u00ab un savoir de certitude \u00bb.",
        axe1_verset: "Le verset dit \u00ab si vous saviez d\u2019un savoir de certitude \u00bb. Le champ lexical combine le savoir (ta\u2019lamuna), le savoir comme nom (\u2019ilm) et la certitude (yaqin). C\u2019est une intensification : pas n\u2019importe quel savoir, mais LE savoir de certitude. Le savoir est ici qualifi\u00e9 par son degr\u00e9 le plus haut.",
        axe2_voisins: "Les versets 3-4 annoncent \u00ab vous saurez \u00bb. Le verset 5 dit \u00ab si vous saviez d\u2019un savoir de certitude \u00bb \u2014 c\u2019est une condition irr\u00e9elle qui sous-entend que vous NE savez PAS encore. La progression va du futur certain (v3-4) \u00e0 l\u2019irr\u00e9el pr\u00e9sent (v5).",
        axe3_sourate: "La sourate progresse de la distraction (v1-2) au savoir futur (v3-4) au savoir irr\u00e9el (v5) \u00e0 la vision (v6-7). Le savoir de certitude est le degr\u00e9 le plus haut que les humains n\u2019ont pas encore atteint.",
        axe4_coherence: "Le Coran distingue trois degr\u00e9s de certitude : \u2019ilm al-yaqin (savoir de certitude, ici v5), \u2019ayn al-yaqin (vision de certitude, v7), et haqq al-yaqin (v\u00e9rit\u00e9 de certitude, 56:95 et 69:51). Cette gradation coranique va du savoir \u00e0 la vision \u00e0 la r\u00e9alit\u00e9 totale.",
        axe5_frequence: "Le savoir de certitude est le fondement de toute action juste. Sans certitude, l\u2019action h\u00e9site. La mission du khalifa exige un savoir qui ne doute pas."
      },
      "Marque/Signe": { status: "nul", senses: ["marquer", "signe", "drapeau", "montagne", "rep\u00e8re", "\u00e9tendard", "l\u00e8vre fendue"], proof_ctx: "Hors sujet \u2014 le verset parle de savoir, pas de signes." }
    }
  }, 3);

  // yqn id=293 — nom d\u00e9fini (al-), en idafa avec \u2019ilm
  await upsertVWA(V, 'yqn', 'certitude', {
    sense_chosen: "certitude",
    concept_chosen: "Certitude/Conviction",
    concepts: {
      "Certitude/Conviction": {
        status: "retenu",
        senses: ["\u00eatre certain", "certitude", "savoir avec certitude", "conviction ferme"],
        proof_ctx: "Le sens retenu est \u00ab Certitude/Conviction \u00bb. Le mot al-yaqin est un nom d\u00e9fini par al- en position de mudaf ilayhi (compl\u00e9ment d\u2019idafa). \u2019Ilm al-yaqin = le savoir DE la certitude. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine ya-qaf-nun d\u00e9signe l\u2019\u00e9tat de savoir sans doute, la conviction ferme et in\u00e9branlable. La certitude est un \u00e9tat int\u00e9rieur permanent une fois atteint \u2014 elle ne fluctue pas. Elle est le contraire du doute. Distinction avec \u00ab Mort/Destruction \u00bb : le sens \u00ab mort \u00bb pour yaqin est un sens d\u00e9riv\u00e9 m\u00e9taphorique (la mort est la seule certitude). Ici, le verset parle explicitement du degr\u00e9 de savoir (\u2019ilm al-yaqin), pas de la mort \u2014 la mort est d\u00e9j\u00e0 \u00e9voqu\u00e9e au verset 2.",
        axe1_verset: "Le verset dit \u2019ilm al-yaqin (savoir de certitude). La certitude qualifie le degr\u00e9 du savoir \u2014 c\u2019est le savoir le plus haut, celui qui ne laisse aucun doute. Le champ lexical savoir + certitude forme une expression coranique connue qui d\u00e9signe un degr\u00e9 de connaissance.",
        axe2_voisins: "Le verset 7 reprend yaqin dans \u2019ayn al-yaqin (vision de certitude). La certitude est le fil conducteur des versets 5 et 7 \u2014 d\u2019abord le savoir de certitude, puis la vision de certitude. La certitude progresse du savoir (th\u00e9orique) \u00e0 la vision (directe).",
        axe3_sourate: "La sourate oppose la distraction (incertitude, ignorance) \u00e0 la certitude. La certitude est le point d\u2019arriv\u00e9e : quand on sait avec certitude, on n\u2019est plus distrait.",
        axe4_coherence: "Le Coran mentionne trois degr\u00e9s de certitude : \u2019ilm al-yaqin (102:5), \u2019ayn al-yaqin (102:7), haqq al-yaqin (56:95, 69:51). Cette gradation est propre au Coran et montre que la certitude a des degr\u00e9s croissants.",
        axe5_frequence: "La certitude est le fondement de l\u2019action du khalifa. Sans certitude, l\u2019action est h\u00e9sitante et la mission \u00e9choue. Le savoir de certitude est ce qui transforme le savoir en action."
      },
      "Mort/Destruction": {
        status: "nul",
        senses: ["mort"],
        proof_ctx: "Le sens m\u00e9taphorique de \u00ab mort \u00bb pour yaqin est hors sujet ici. Le verset parle explicitement de \u2019ilm al-yaqin (savoir de certitude), pas de la mort. La mort est d\u00e9j\u00e0 \u00e9voqu\u00e9e au verset 2 avec les tombes."
      }
    }
  }, 5);

  const { error } = await sb.from('verse_analyses').update({
    translation_arab: "Non ! Si vous saviez d\u2019un savoir de certitude\u2026",
    full_translation: "Mais non! Si vous saviez de science certaine...",
    segments: [
      { fr: "non !", phon: "kalla", arabic: "\u0643\u064e\u0644\u0651\u064e\u0627", position: 1, word_key: null, is_particle: true },
      { fr: "si", phon: "law", arabic: "\u0644\u064e\u0648\u0652", position: 2, word_key: null, is_particle: true },
      { fr: "vous saviez", pos: "verbe", phon: "ta\u2019lamuna", arabic: "\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", position: 3, word_key: "elm", is_particle: false, sense_retenu: "savoir" },
      { fr: "d\u2019un savoir de", pos: "nom", phon: "\u2019ilma", arabic: "\u0639\u0650\u0644\u0652\u0645\u064e", position: 4, word_key: "elm", is_particle: false, sense_retenu: "savoir" },
      { fr: "certitude", pos: "nom", phon: "al-yaqin", arabic: "\u0671\u0644\u0652\u064a\u064e\u0642\u0650\u064a\u0646\u0650", position: 5, word_key: "yqn", is_particle: false, sense_retenu: "certitude" }
    ],
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset 102:5 introduit un conditionnel irr\u00e9el.

**kalla** (\u0643\u064e\u0644\u0651\u064e\u0627) \u2014 r\u00e9futation forte, \u00ab non ! \u00bb. Troisi\u00e8me occurrence dans la sourate, intensifiant le refus de l\u2019\u00e9tat de distraction.

**law** (\u0644\u064e\u0648\u0652) est une particule conditionnelle irr\u00e9elle \u2014 \u00ab si \u00bb (mais vous ne le faites pas). Elle sous-entend que la condition n\u2019est pas remplie : vous NE savez PAS d\u2019un savoir de certitude.

**ta\u2019lamuna** (\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e) \u2014 m\u00eame verbe que les versets 3-4, \u00e0 l\u2019inaccompli.

**\u2019ilma al-yaqin** (\u0639\u0650\u0644\u0652\u0645\u064e \u0627\u0644\u0652\u064a\u064e\u0642\u0650\u064a\u0646\u0650) est une construction d\u2019idafa (compl\u00e9ment du nom). En arabe, \u2019ilm (savoir) est suivi de al-yaqin (la certitude) au g\u00e9nitif. L\u2019idafa exprime l\u2019appartenance : \u00ab le savoir QUI APPARTIENT \u00e0 la certitude \u00bb, c\u2019est-\u00e0-dire \u00ab le degr\u00e9 de savoir qui \u00e9quivaut \u00e0 la certitude \u00bb. C\u2019est le premier des trois degr\u00e9s de certitude mentionn\u00e9s dans le Coran.

La phrase est une apodose sans protase explicite : \u00ab si vous saviez d\u2019un savoir de certitude\u2026 \u00bb \u2014 la cons\u00e9quence n\u2019est pas \u00e9nonc\u00e9e, elle est laiss\u00e9e \u00e0 l\u2019imagination. Les versets 6-7 viennent ensuite donner cette cons\u00e9quence.

\u00a7JUSTIFICATION\u00a7
**savoir de certitude** \u2014 Le sens retenu est \u00ab Certitude/Conviction \u00bb. L\u2019expression \u00ab savoir de certitude \u00bb est choisie car elle traduit litt\u00e9ralement la construction d\u2019idafa \u2019ilm al-yaqin. L\u2019alternative \u00ab science certaine \u00bb (Hamidullah) est \u00e9cart\u00e9e car \u00ab science \u00bb en fran\u00e7ais \u00e9voque les sciences exp\u00e9rimentales, ce qui n\u2019est pas le sens ici. L\u2019alternative \u00ab connaissance assur\u00e9e \u00bb est \u00e9cart\u00e9e car \u00ab assur\u00e9e \u00bb est moins fort que \u00ab certitude \u00bb.

\u00a7CRITIQUE\u00a7
**science certaine vs savoir de certitude** \u2014 Les traductions courantes donnent \u00ab science certaine \u00bb (Hamidullah). Le mot \u00ab science \u00bb en fran\u00e7ais contemporain d\u00e9signe les disciplines scientifiques (physique, biologie, etc.). Or \u2019ilm en arabe d\u00e9signe le savoir au sens large \u2014 toute forme de connaissance profonde. \u00ab Savoir de certitude \u00bb est plus fid\u00e8le car il pr\u00e9serve la construction d\u2019idafa (savoir DE certitude, pas savoir QUI EST certain) et \u00e9vite la connotation scientifique moderne.`
  }).eq('verse_id', V);
  console.log('  Updated v5', error?.message || 'OK');

  await insertDaily(293, [
    { analysis_id: 293, sense: 'certitude', arabic: '\u064a\u0642\u0646', phon: 'yaqin', french: "J\u2019en suis certain \u2014 je l\u2019ai v\u00e9rifi\u00e9 moi-m\u00eame, il n\u2019y a aucun doute." },
    { analysis_id: 293, sense: 'certitude', arabic: '\u064a\u0642\u0646', phon: 'yaqin', french: "La certitude, c\u2019est quand tu sais sans h\u00e9siter \u2014 pas besoin de preuve suppl\u00e9mentaire." },
    { analysis_id: 293, sense: 'certitude', arabic: '\u064a\u0642\u0646', phon: 'yaqin', french: "Il agit avec certitude \u2014 il ne doute pas de ce qu\u2019il fait." }
  ]);

  console.log('VERSET 102:5 \u2014 TERMIN\u00c9');
}

// ============================================================
// VERSETS 102:6-7
// ============================================================
async function verse102_6_7() {
  console.log('\n=== VERSETS 102:6-7 ===');

  // ray id=552 — verbe inaccompli
  const rayAxes = {
    sense_chosen: "voir",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        status: "retenu",
        senses: ["voir", "percevoir"],
        proof_ctx: "Le sens retenu est \u00ab Vision/Perception \u00bb. Le verbe latarawunna est \u00e0 l\u2019inaccompli avec le lam d\u2019insistance et le nun de corroboration (forme emphatique) \u2014 \u00ab vous verrez assur\u00e9ment \u00bb. La vision est un acte de perception directe \u2014 elle va au-del\u00e0 du savoir (v3-5). Apr\u00e8s le savoir de certitude (v5) vient la vision directe (v6-7). Distinction avec \u00ab Jugement/Avis \u00bb : l\u2019avis est un jugement int\u00e9rieur subjectif, la vision est une perception directe objective. Le verset parle de voir, pas de juger.",
        axe1_verset: "Le verset 6 dit \u00ab vous verrez assur\u00e9ment le brasier \u00bb. Le champ lexical combine la vision (tarawunna) et le brasier (al-jahim). La vision est directe et in\u00e9vitable \u2014 le lam et le nun emphatiques ne laissent aucun doute. C\u2019est la r\u00e9alit\u00e9 qui s\u2019impose aux yeux.",
        axe2_voisins: "Le verset 5 parle du savoir de certitude. Le verset 6 passe du savoir \u00e0 la vision. Le verset 7 intensifie : vous le verrez de la vision de certitude. La progression est : savoir \u2192 voir \u2192 voir avec certitude. La vision est le degr\u00e9 sup\u00e9rieur au savoir.",
        axe3_sourate: "La sourate progresse de la distraction (v1-2) au savoir (v3-5) \u00e0 la vision (v6-7) au questionnement (v8). La vision est l\u2019avant-dernier stade \u2014 elle pr\u00e9c\u00e8de le questionnement final.",
        axe4_coherence: "Le Coran utilise la vision (ra\u2019a) pour d\u00e9crire la confrontation avec la r\u00e9alit\u00e9 : 89:14 (quand ton Seigneur versa sur eux le fouet du ch\u00e2timent), 102:6 (vous verrez le brasier). La vision dans l\u2019au-del\u00e0 est directe et indubitable.",
        axe5_frequence: "La vision de la r\u00e9alit\u00e9 est ce qui met fin \u00e0 la distraction. Celui qui voit ne peut plus nier. La mission du khalifa exige de voir la r\u00e9alit\u00e9 telle qu\u2019elle est, pas de se laisser distraire."
      },
      "Jugement/Avis": {
        status: "peu_probable",
        senses: ["opinion", "avis"],
        proof_ctx: "L\u2019avis est un jugement int\u00e9rieur subjectif, la vision est une perception directe objective. Le verset ne demande pas votre opinion \u2014 il annonce que vous VERREZ. Le lam d\u2019insistance et le nun emphatique imposent la certitude de la vision, pas la subjectivit\u00e9 de l\u2019avis.",
        axe1_verset: "Le verset dit latarawunna al-jahim. L\u2019objet est al-jahim (le brasier) \u2014 on voit un brasier, on n\u2019a pas un avis sur un brasier. La construction verbe + objet physique impose le sens de vision.",
        axe2_voisins: "Le verset 7 dit \u2019ayn al-yaqin (vision de certitude) \u2014 \u2019ayn est l\u2019\u0153il, la vue directe. Cela confirme que le verbe ra\u2019a est utilis\u00e9 au sens de voir, pas d\u2019opiner.",
        axe3_sourate: "La progression savoir \u2192 voir est logique et classique. La progression savoir \u2192 opiner serait une r\u00e9gression.",
        axe4_coherence: "Le Coran utilise ra\u2019a au sens de voir physiquement dans la majorit\u00e9 des cas. Le sens d\u2019opinion est plus rare et toujours contextuel.",
        axe5_frequence: "L\u2019opinion est subjective et peut \u00eatre fausse. La vision est objective et impose la r\u00e9alit\u00e9."
      },
      "Apparition": { status: "nul", senses: ["appara\u00eetre"], proof_ctx: "Le sujet est \u00ab vous \u00bb, pas le brasier. Vous verrez, pas \u00ab il appara\u00eetra \u00bb." }
    }
  };

  // V6 — latarawunna al-jahim
  await upsertVWA(6174, 'ray', 'voir', rayAxes, 1);
  await upsertVWA(6174, 'jhm', 'feu ardent', {
    sense_chosen: "feu ardent",
    concept_chosen: "Enfer/Ch\u00e2timent",
    concepts: {
      "Enfer/Ch\u00e2timent": {
        status: "retenu",
        senses: ["G\u00e9henne", "feu ardent", "enfer"],
        proof_ctx: "Le sens retenu est \u00ab Enfer/Ch\u00e2timent \u00bb. Al-jahim est un nom d\u00e9fini par al-, d\u00e9signant LE brasier connu. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine jim-ha-mim d\u00e9signe un feu d\u2019une chaleur intense. Le mot jahim d\u00e9crit la r\u00e9alit\u00e9 physique d\u2019un feu ardent. C\u2019est le seul concept de cette racine.",
        axe1_verset: "Le verset dit \u00ab vous verrez assur\u00e9ment le brasier \u00bb. Al-jahim est l\u2019objet de la vision. Le champ lexical combine la vision et le feu \u2014 voir le brasier est la confrontation avec la r\u00e9alit\u00e9 que la distraction masquait.",
        axe2_voisins: "Le verset 5 parle du savoir de certitude. Le verset 6 montre ce que vous verrez quand vous saurez. Le verset 7 r\u00e9p\u00e8te avec intensification. Le brasier est la r\u00e9alit\u00e9 qui \u00e9tait invisible pendant la distraction.",
        axe3_sourate: "La sourate progresse vers la confrontation avec la r\u00e9alit\u00e9. Le brasier est l\u2019\u00e9l\u00e9ment central de cette confrontation \u2014 il est ce qui attend ceux qui se sont laiss\u00e9s distraire par l\u2019accumulation.",
        axe4_coherence: "Le Coran utilise al-jahim dans de nombreux versets (2:119, 5:10, 26:91, 37:23, 44:47, 56:94). C\u2019est un des noms du feu de l\u2019au-del\u00e0. La racine j-h-m d\u00e9signe la chaleur intense.",
        axe5_frequence: "Le brasier est la cons\u00e9quence de l\u2019\u00e9chec de la mission du khalifa. Celui qui accumule au lieu de construire la justice se confrontera au brasier."
      }
    }
  }, 2);

  const { error: e6 } = await sb.from('verse_analyses').update({
    translation_arab: "Vous verrez assur\u00e9ment le brasier.",
    full_translation: "Vous verrez, certes, la Fournaise.",
    segments: [
      { fr: "vous verrez assur\u00e9ment", pos: "verbe", phon: "latarawunna", arabic: "\u0644\u064e\u062a\u064e\u0631\u064e\u0648\u064f\u0646\u0651\u064e", position: 1, word_key: "ray", is_particle: false, sense_retenu: "voir" },
      { fr: "le brasier", pos: "nom", phon: "al-jahim", arabic: "\u0671\u0644\u0652\u062c\u064e\u062d\u0650\u064a\u0645\u064e", position: 2, word_key: "jhm", is_particle: false, sense_retenu: "feu ardent" }
    ],
    translation_explanation: `\u00a7DEMARCHE\u00a7
**latarawunna** (\u0644\u064e\u062a\u064e\u0631\u064e\u0648\u064f\u0646\u0651\u064e) est un verbe \u00e0 l\u2019inaccompli, deuxi\u00e8me personne du pluriel, avec deux marqueurs d\u2019insistance : le **lam** (\u0644) pr\u00e9fixe de serment et le **nun** (\u0646\u0651\u064e) de corroboration suffix\u00e9. Cette double emphase rend l\u2019action absolument certaine : \u00ab vous verrez, c\u2019est s\u00fbr et certain \u00bb. La racine ra-alif-ya d\u00e9signe la vision, la perception par les yeux.

**al-jahim** (\u0627\u0644\u0652\u062c\u064e\u062d\u0650\u064a\u0645\u064e) est un nom d\u00e9fini par al-. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine jim-ha-mim d\u00e9signe un feu d\u2019une chaleur intense. Le mot d\u00e9crit la r\u00e9alit\u00e9 physique d\u2019un brasier.

Le verset est une r\u00e9ponse \u00e0 la condition irr\u00e9elle du verset 5 : \u00ab si vous saviez... (eh bien) vous verrez assur\u00e9ment le brasier \u00bb.

\u00a7JUSTIFICATION\u00a7
**verrez** \u2014 Le sens retenu est \u00ab Vision/Perception \u00bb. Le mot \u00ab verrez \u00bb est le futur simple du verbe voir, le plus courant et direct. L\u2019alternative \u00ab contemplerez \u00bb est \u00e9cart\u00e9e (registre litt\u00e9raire). L\u2019alternative \u00ab apercevrez \u00bb est \u00e9cart\u00e9e car elle implique une vision partielle, alors que le texte d\u00e9crit une vision totale et certaine.

**brasier** \u2014 Le sens retenu est \u00ab Enfer/Ch\u00e2timent \u00bb. Le mot \u00ab brasier \u00bb est choisi car il d\u00e9crit la r\u00e9alit\u00e9 physique d\u2019un feu ardent sans ajout th\u00e9ologique. L\u2019alternative \u00ab enfer \u00bb est \u00e9cart\u00e9e car c\u2019est du vocabulaire religieux chr\u00e9tien. L\u2019alternative \u00ab Fournaise \u00bb est \u00e9cart\u00e9e car elle \u00e9voque un four industriel. L\u2019alternative \u00ab G\u00e9henne \u00bb est \u00e9cart\u00e9e car c\u2019est un mot h\u00e9breu sp\u00e9cifique, pas du fran\u00e7ais courant.

\u00a7CRITIQUE\u00a7
**Fournaise vs brasier** \u2014 Les traductions courantes donnent \u00ab la Fournaise \u00bb (Hamidullah) pour al-jahim. Le mot \u00ab Fournaise \u00bb avec une majuscule devient un nom propre th\u00e9ologique. Or la racine j-h-m d\u00e9signe simplement un feu intense. \u00ab Brasier \u00bb est du fran\u00e7ais courant et d\u00e9crit la r\u00e9alit\u00e9 physique sans ajout.`
  }).eq('verse_id', 6174);
  console.log('  Updated v6', e6?.message || 'OK');

  // V7 — thumma latarawunnaha \u2019ayn al-yaqin
  await upsertVWA(6175, 'ray', 'voir', rayAxes, 2);
  await upsertVWA(6175, 'eyn', '\u0153il', {
    sense_chosen: "\u0153il",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        status: "retenu",
        senses: ["\u0153il", "regard"],
        proof_ctx: "Le sens retenu est \u00ab Vision/Perception \u00bb. Le mot \u2019ayn est un nom en position de mudaf (premier terme d\u2019idafa), suivi de al-yaqin. \u2019Ayn al-yaqin = l\u2019\u0153il de la certitude, c\u2019est-\u00e0-dire la vision directe de la certitude. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine \u2019ayn-ya-nun d\u00e9signe l\u2019\u0153il, l\u2019organe de la vue. Ici, \u2019ayn d\u00e9signe la vision directe par les yeux \u2014 voir de ses propres yeux. Distinction avec \u00ab Eau vive \u00bb et \u00ab Identit\u00e9 \u00bb : la source d\u2019eau et l\u2019essence sont hors sujet dans une construction \u2019ayn al-yaqin o\u00f9 le contexte est clairement celui de la vision.",
        axe1_verset: "Le verset dit \u00ab puis vous le verrez de la vision de certitude \u00bb. Le mot \u2019ayn qualifie le mode de vision \u2014 c\u2019est la vision par l\u2019\u0153il, directe et in\u00e9quivoque. Le champ lexical vision + \u0153il + certitude forme une gradation par rapport au verset 5 (savoir de certitude).",
        axe2_voisins: "Le verset 5 parle de \u2019ilm al-yaqin (savoir de certitude). Le verset 7 parle de \u2019ayn al-yaqin (vision de certitude). La progression est du savoir intellectuel \u00e0 la vision directe \u2014 un degr\u00e9 sup\u00e9rieur de certitude.",
        axe3_sourate: "La sourate progresse vers une certitude de plus en plus intense. La vision de certitude est le deuxi\u00e8me degr\u00e9, sup\u00e9rieur au savoir de certitude.",
        axe4_coherence: "Le Coran mentionne trois degr\u00e9s : \u2019ilm al-yaqin (102:5), \u2019ayn al-yaqin (102:7), haqq al-yaqin (56:95). \u2019Ayn (l\u2019\u0153il) est le moyen de la vision directe.",
        axe5_frequence: "Voir de ses propres yeux est la certitude la plus haute apr\u00e8s le savoir. La mission du khalifa exige d\u2019aller au-del\u00e0 du savoir th\u00e9orique vers la vision directe de la r\u00e9alit\u00e9."
      },
      "Eau vive": { status: "nul", senses: ["source"], proof_ctx: "La source d\u2019eau est hors sujet dans une construction \u2019ayn al-yaqin (vision de certitude)." },
      "Identit\u00e9": { status: "nul", senses: ["essence"], proof_ctx: "L\u2019essence/identit\u00e9 est hors sujet. Le contexte (verbe voir + certitude) impose le sens de vision/\u0153il." }
    }
  }, 3);
  await upsertVWA(6175, 'yqn', 'certitude', {
    sense_chosen: "certitude",
    concept_chosen: "Certitude/Conviction",
    concepts: {
      "Certitude/Conviction": {
        status: "retenu",
        senses: ["\u00eatre certain", "certitude", "savoir avec certitude", "conviction ferme"],
        proof_ctx: "M\u00eame analyse que le verset 5. La certitude qualifie ici la vision (\u2019ayn al-yaqin) au lieu du savoir (\u2019ilm al-yaqin). C\u2019est le deuxi\u00e8me degr\u00e9 de certitude dans le Coran.",
        axe1_verset: "Le verset dit \u2019ayn al-yaqin. La certitude qualifie la vision. Le champ lexical vision + certitude forme le deuxi\u00e8me degr\u00e9 de la gradation coranique.",
        axe2_voisins: "Apr\u00e8s \u2019ilm al-yaqin (v5), \u2019ayn al-yaqin (v7) intensifie la certitude. La progression est claire et d\u00e9lib\u00e9r\u00e9e.",
        axe3_sourate: "La certitude est le fil conducteur de la seconde moiti\u00e9 de la sourate (v5-7). Elle s\u2019oppose \u00e0 la distraction de la premi\u00e8re moiti\u00e9 (v1-2).",
        axe4_coherence: "M\u00eame gradation coranique que le verset 5. Coh\u00e9rence totale.",
        axe5_frequence: "La vision de certitude est indispensable \u00e0 la mission du khalifa."
      },
      "Mort/Destruction": { status: "nul", senses: ["mort"], proof_ctx: "Hors sujet dans cette construction o\u00f9 yaqin est le compl\u00e9ment de \u2019ayn (vision)." }
    }
  }, 4);

  const { error: e7 } = await sb.from('verse_analyses').update({
    translation_arab: "Puis vous le verrez de la vision de certitude.",
    full_translation: "Puis, vous la verrez avec l'\u0153il de la certitude.",
    segments: [
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", position: 1, word_key: null, is_particle: true },
      { fr: "vous le verrez assur\u00e9ment", pos: "verbe", phon: "latarawunnaha", arabic: "\u0644\u064e\u062a\u064e\u0631\u064e\u0648\u064f\u0646\u0651\u064e\u0647\u064e\u0627", position: 2, word_key: "ray", is_particle: false, sense_retenu: "voir" },
      { fr: "de la vision de", pos: "nom", phon: "\u2019ayna", arabic: "\u0639\u064e\u064a\u0652\u0646\u064e", position: 3, word_key: "eyn", is_particle: false, sense_retenu: "\u0153il" },
      { fr: "certitude", pos: "nom", phon: "al-yaqin", arabic: "\u0671\u0644\u0652\u064a\u064e\u0642\u0650\u064a\u0646\u0650", position: 4, word_key: "yqn", is_particle: false, sense_retenu: "certitude" }
    ],
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset 102:7 intensifie le verset 6 avec **thumma** (puis, avec gradation).

**latarawunnaha** (\u0644\u064e\u062a\u064e\u0631\u064e\u0648\u064f\u0646\u0651\u064e\u0647\u064e\u0627) est le m\u00eame verbe qu\u2019au verset 6, avec le pronom f\u00e9minin -ha (elle = la jahim) suffix\u00e9.

**\u2019ayna al-yaqin** (\u0639\u064e\u064a\u0652\u0646\u064e \u0627\u0644\u0652\u064a\u064e\u0642\u0650\u064a\u0646\u0650) est une construction d\u2019idafa comme \u2019ilm al-yaqin au verset 5. Mais ici, le premier terme n\u2019est plus \u2019ilm (savoir) mais \u2019ayn (\u0153il, vision). C\u2019est un degr\u00e9 sup\u00e9rieur : le savoir est intellectuel, la vision est directe. Savoir qu\u2019un feu existe (\u2019ilm al-yaqin) est une chose ; le voir de ses propres yeux (\u2019ayn al-yaqin) en est une autre.

Le mot \u2019ayn est \u00e0 l\u2019accusatif (\u0639\u064e\u064a\u0652\u0646\u064e) car il est maf\u2019ul mutlaq (compl\u00e9ment absolu) \u2014 une construction arabe qui d\u00e9crit la mani\u00e8re dont l\u2019action se fait. \u00ab Vous le verrez d\u2019une vision de certitude \u00bb = vous le verrez de la mani\u00e8re la plus certaine qui soit.

\u00a7JUSTIFICATION\u00a7
**vision de certitude** \u2014 Le mot \u00ab vision \u00bb est choisi car \u2019ayn d\u00e9signe l\u2019\u0153il et par extension la vue directe. L\u2019alternative \u00ab \u0153il de certitude \u00bb est litt\u00e9rale mais un peu moins fluide en fran\u00e7ais. L\u2019alternative \u00ab regard de certitude \u00bb est \u00e9cart\u00e9e car le regard est actif et volontaire, alors que la vision ici est impos\u00e9e.

\u00a7CRITIQUE\u00a7
Les traductions courantes donnent sensiblement le m\u00eame sens. Hamidullah traduit \u00ab avec l\u2019\u0153il de la certitude \u00bb, ce qui est une traduction litt\u00e9rale acceptable.`
  }).eq('verse_id', 6175);
  console.log('  Updated v7', e7?.message || 'OK');

  await insertDaily(552, [
    { analysis_id: 552, sense: 'voir', arabic: '\u0631\u0623\u064a', phon: "ra'a", french: "Tu vois ce que je vois ? \u2014 Regarde bien, l\u00e0-bas au fond." },
    { analysis_id: 552, sense: 'voir', arabic: '\u0631\u0623\u064a', phon: "ra'a", french: "Je l\u2019ai vu de mes propres yeux \u2014 il n\u2019y a aucun doute." },
    { analysis_id: 552, sense: 'voir', arabic: '\u0631\u0623\u064a', phon: "ra'a", french: "Quand tu verras le r\u00e9sultat, tu comprendras pourquoi c\u2019\u00e9tait la bonne d\u00e9cision." }
  ]);
  await insertDaily(766, [
    { analysis_id: 766, sense: 'feu ardent', arabic: '\u062c\u062d\u0645', phon: 'jahim', french: "Le feu \u00e9tait si intense qu\u2019on ne pouvait pas s\u2019approcher \u2014 un vrai brasier." },
    { analysis_id: 766, sense: 'feu ardent', arabic: '\u062c\u062d\u0645', phon: 'jahim', french: "La chaleur du brasier \u00e9tait insoutenable \u2014 on sentait la braise m\u00eame de loin." },
    { analysis_id: 766, sense: 'feu ardent', arabic: '\u062c\u062d\u0645', phon: 'jahim', french: "Un feu ardent, c\u2019est diff\u00e9rent d\u2019un feu doux \u2014 il consume tout ce qu\u2019il touche." }
  ]);
  await insertDaily(590, [
    { analysis_id: 590, sense: '\u0153il', arabic: '\u0639\u064a\u0646', phon: "'ayn", french: "Je l\u2019ai vu de mes propres yeux \u2014 c\u2019est la preuve la plus forte." },
    { analysis_id: 590, sense: '\u0153il', arabic: '\u0639\u064a\u0646', phon: "'ayn", french: "L\u2019\u0153il voit ce que la raison refuse parfois d\u2019admettre." },
    { analysis_id: 590, sense: '\u0153il', arabic: '\u0639\u064a\u0646', phon: "'ayn", french: "Regarde-moi dans les yeux et dis-moi la v\u00e9rit\u00e9." }
  ]);

  console.log('VERSETS 102:6-7 \u2014 TERMIN\u00c9S');
}

// ============================================================
// VERSET 102:8 — ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ
// ============================================================
async function verse102_8() {
  console.log('\n=== VERSET 102:8 ===');
  const V = 6176;

  // sal id=739 — verbe inaccompli, PASSIF
  await upsertVWA(V, 'sal', 'questionner', {
    sense_chosen: "questionner",
    concept_chosen: "Requ\u00eate/Interrogation",
    concepts: {
      "Requ\u00eate/Interrogation": {
        status: "retenu",
        senses: ["demander", "questionner", "interroger"],
        proof_ctx: "Le sens retenu est \u00ab Requ\u00eate/Interrogation \u00bb. Le verbe latus\u2019alunna est \u00e0 l\u2019inaccompli passif avec le lam d\u2019insistance et le nun de corroboration \u2014 \u00ab vous serez assur\u00e9ment questionn\u00e9s \u00bb. Le passif indique que VOUS \u00eates l\u2019objet du questionnement, pas l\u2019agent. Le texte ne pr\u00e9cise pas QUI questionne \u2014 le passif laisse l\u2019agent ind\u00e9termin\u00e9. La pr\u00e9position \u2019an (au sujet de) + an-na\u2019im (les bienfaits) pr\u00e9cise l\u2019objet du questionnement.",
        axe1_verset: "Le verset dit \u00ab puis vous serez assur\u00e9ment questionn\u00e9s ce jour-l\u00e0 au sujet des bienfaits \u00bb. Le champ lexical combine le questionnement (tus\u2019alunna), le temps (yawma\u2019idhin) et les bienfaits (an-na\u2019im). Le questionnement porte sur ce que vous avez fait des bienfaits \u2014 c\u2019est la conclusion de la sourate.",
        axe2_voisins: "Apr\u00e8s la vision du brasier (v6-7), vient le questionnement (v8). La progression est compl\u00e8te : distraction (v1-2) \u2192 savoir (v3-5) \u2192 vision (v6-7) \u2192 questionnement (v8). Le questionnement est l\u2019aboutissement de tout le parcours.",
        axe3_sourate: "La sourate boucle : vous \u00e9tiez distraits par l\u2019accumulation (v1), et vous serez questionn\u00e9s sur les bienfaits (v8). L\u2019accumulation et les bienfaits sont deux mani\u00e8res de voir les m\u00eames choses \u2014 la premi\u00e8re est aveugle, la seconde est lucide.",
        axe4_coherence: "Le Coran utilise su\u2019ila (questionner) dans de nombreux versets de questionnement eschatologique : 17:36, 33:15, 37:24. Le questionnement dans l\u2019au-del\u00e0 est un th\u00e8me coranique central.",
        axe5_frequence: "Le questionnement sur les bienfaits est un rappel de la responsabilit\u00e9 du khalifa. Chaque bienfait re\u00e7u est une ressource pour la mission \u2014 et on sera questionn\u00e9 sur l\u2019usage qu\u2019on en a fait."
      }
    }
  }, 2);

  // nem id=264 — nom d\u00e9fini (al-)
  await upsertVWA(V, 'nem', 'douceur', {
    sense_chosen: "douceur",
    concept_chosen: "Douceur/Aisance",
    concepts: {
      "Douceur/Aisance": {
        status: "retenu",
        senses: ["douceur", "tendresse", "souplesse", "d\u00e9licatesse", "vie agr\u00e9able", "confort", "aisance", "fra\u00eecheur", "floraison"],
        proof_ctx: "Le sens retenu est \u00ab Douceur/Aisance \u00bb. Le mot an-na\u2019im est un nom d\u00e9fini par al-, d\u00e9signant LES douceurs, les agr\u00e9ments de la vie. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine nun-\u2019ayn-mim d\u00e9signe ce qui est doux, agr\u00e9able, confortable. An-na\u2019im d\u00e9crit la qualit\u00e9 de ce qui rend la vie agr\u00e9able \u2014 c\u2019est ce dont on jouit. Distinction avec \u00ab Bienfait/Faveur \u00bb : le bienfait est l\u2019acte de donner (directionnel, de Dieu vers l\u2019humain), la douceur est la qualit\u00e9 de ce qui est re\u00e7u (l\u2019exp\u00e9rience de ce qui est agr\u00e9able). Le verset demande \u00ab au sujet des douceurs \u00bb \u2014 c\u2019est sur l\u2019exp\u00e9rience que porte le questionnement, pas sur l\u2019acte de donner. Le questionnement est : qu\u2019avez-vous fait de ces douceurs que vous avez v\u00e9cues ?",
        axe1_verset: "Le verset dit \u2019an an-na\u2019im (au sujet des douceurs). La pr\u00e9position \u2019an (au sujet de, loin de) oriente vers ce sur quoi porte le questionnement. Les douceurs sont l\u2019objet du questionnement \u2014 c\u2019est ce dont on a joui pendant la vie.",
        axe2_voisins: "Le verset 1 parle d\u2019accumulation. Le verset 8 parle de douceurs. Le contraste est significatif : vous accumuliez (v1), mais vous serez questionn\u00e9s sur les douceurs (v8). L\u2019accumulation aveugle aux douceurs v\u00e9ritables \u2014 on accumule au lieu de jouir avec reconnaissance.",
        axe3_sourate: "La sourate oppose l\u2019accumulation aveugle (v1-2) \u00e0 la conscience des douceurs (v8). Les douceurs de la vie sont les bienfaits dont on jouit sans les reconna\u00eetre quand on est distrait par l\u2019accumulation.",
        axe4_coherence: "Le Coran utilise na\u2019im dans le contexte du paradis (\u00ab jannat an-na\u2019im \u00bb, les jardins de douceur) et ici pour les douceurs terrestres. La racine n-\u2019-m couvre \u00e0 la fois le bienfait (acte de donner) et la douceur (qualit\u00e9 de ce qui est re\u00e7u). Le verset 5:12, 56:89 et 68:34 utilisent na\u2019im pour d\u00e9crire l\u2019exp\u00e9rience du confort.",
        axe5_frequence: "Les douceurs de la vie sont les ressources que le khalifa utilise pour sa mission. Le questionnement porte sur l\u2019usage de ces ressources : les a-t-on utilis\u00e9es pour la justice et la civilisation, ou les a-t-on accumul\u00e9es aveugl\u00e9ment ?"
      },
      "Bienfait/Faveur": {
        status: "probable",
        senses: ["bienfait", "faveur", "b\u00e9n\u00e9diction", "richesse", "accorder un bienfait", "nourrir bien", "combler"],
        proof_ctx: "Le bienfait est l\u2019acte ext\u00e9rieur d\u2019accorder quelque chose de bon. Il est tr\u00e8s proche de la douceur mais la diff\u00e9rence est la direction : le bienfait va du donneur au receveur (acte), la douceur est l\u2019exp\u00e9rience du receveur (qualit\u00e9). Le verset questionne sur an-na\u2019im \u2014 c\u2019est ce dont on a joui (la douceur), pas ce qui a \u00e9t\u00e9 donn\u00e9 (le bienfait). Le bienfait est l\u2019acte de Dieu qui donne, la douceur est l\u2019exp\u00e9rience de l\u2019humain qui re\u00e7oit. Le questionnement porte sur l\u2019exp\u00e9rience et l\u2019usage, pas sur l\u2019origine.",
        axe1_verset: "Le verset dit \u2019an an-na\u2019im. La pr\u00e9position \u2019an oriente vers ce sur quoi porte la question. Les bienfaits sont possibles \u2014 on serait questionn\u00e9 sur les faveurs re\u00e7ues. Mais na\u2019im est la forme adjectivale/nominale qui d\u00e9crit la qualit\u00e9 de douceur, pas l\u2019acte de donner (qui serait ni\u2019ma ou in\u2019am).",
        axe2_voisins: "Le contraste avec l\u2019accumulation (v1) fonctionne aussi avec les bienfaits qu\u2019avec les douceurs. Les deux lectures sont coh\u00e9rentes.",
        axe3_sourate: "La sourate ne parle pas sp\u00e9cifiquement de ce qui est donn\u00e9 par Dieu, mais de l\u2019exp\u00e9rience humaine. La douceur est plus centr\u00e9e sur l\u2019humain.",
        axe4_coherence: "Le Coran utilise ni\u2019ma (bienfait) et na\u2019im (douceur) diff\u00e9remment. Ni\u2019ma est l\u2019acte de faveur (16:18, 14:34), na\u2019im est l\u2019\u00e9tat de douceur (56:89, 68:34).",
        axe5_frequence: "Les bienfaits contribuent \u00e0 la mission comme les douceurs. La diff\u00e9rence est l\u2019angle : l\u2019un regarde l\u2019origine, l\u2019autre l\u2019exp\u00e9rience."
      },
      "B\u00e9tail/Animaux": { status: "nul", senses: ["b\u00e9tail", "troupeau", "chameaux", "autruche"], proof_ctx: "Le b\u00e9tail est un sens concret mat\u00e9riel. Le verset parle de ce sur quoi on sera questionn\u00e9 en g\u00e9n\u00e9ral, pas sp\u00e9cifiquement du b\u00e9tail." },
      "Affirmation": { status: "nul", senses: ["oui", "certes", "excellent"], proof_ctx: "La particule d\u2019affirmation est hors sujet pour un nom d\u00e9fini compl\u00e9ment de \u2019an (au sujet de)." },
      "Souffle/Vent": { status: "nul", senses: ["\u00e9toiles de Sagittaire"], proof_ctx: "Sens astronomique isol\u00e9, sans rapport avec le contexte." },
      "Corps/Anatomie": { status: "nul", senses: ["os de la jambe"], proof_ctx: "Sens anatomique isol\u00e9, sans rapport avec le contexte." },
      "Sens isol\u00e9/Veine": { status: "nul", senses: ["veine"], proof_ctx: "Sens anatomique isol\u00e9, sans rapport avec le contexte." }
    }
  }, 5);

  const { error } = await sb.from('verse_analyses').update({
    translation_arab: "Puis vous serez assur\u00e9ment questionn\u00e9s ce jour-l\u00e0 au sujet des douceurs.",
    full_translation: "Puis, assur\u00e9ment, vous serez interrogés, ce jour-l\u00e0, sur les d\u00e9lices.",
    segments: [
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", position: 1, word_key: null, is_particle: true },
      { fr: "vous serez assur\u00e9ment questionn\u00e9s", pos: "verbe", phon: "latus\u2019alunna", arabic: "\u0644\u064e\u062a\u064f\u0633\u0652\u0640\u0654\u0644\u064f\u0646\u0651\u064e", position: 2, word_key: "sal", is_particle: false, sense_retenu: "questionner" },
      { fr: "ce jour-l\u00e0", phon: "yawma\u2019idhin", arabic: "\u064a\u064e\u0648\u0652\u0645\u064e\u0626\u0650\u0630\u064d", position: 3, word_key: null, is_particle: true },
      { fr: "au sujet de", phon: "\u2019ani", arabic: "\u0639\u064e\u0646\u0650", position: 4, word_key: null, is_particle: true },
      { fr: "les douceurs", pos: "nom", phon: "an-na\u2019im", arabic: "\u0671\u0644\u0646\u0651\u064e\u0639\u0650\u064a\u0645\u0650", position: 5, word_key: "nem", is_particle: false, sense_retenu: "douceur" }
    ],
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset 102:8 conclut la sourate.

**thumma** (\u062b\u064f\u0645\u0651\u064e) \u2014 particule de succession avec gradation, \u00ab puis \u00bb.

**latus\u2019alunna** (\u0644\u064e\u062a\u064f\u0633\u0652\u0640\u0654\u0644\u064f\u0646\u0651\u064e) est un verbe \u00e0 l\u2019inaccompli **passif** (une forme qui dit que l\u2019action est SUBIE, pas faite), deuxi\u00e8me personne du pluriel, avec le lam d\u2019insistance et le nun de corroboration. Le passif est significatif : on ne dit pas QUI questionne. Le texte dit \u00ab vous serez questionn\u00e9s \u00bb sans pr\u00e9ciser par qui \u2014 c\u2019est le passif divin, une construction arabe o\u00f9 l\u2019agent est omis parce qu\u2019il va de soi. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine sin-alif-lam d\u00e9signe l\u2019acte de demander, questionner.

**yawma\u2019idhin** (\u064a\u064e\u0648\u0652\u0645\u064e\u0626\u0650\u0630\u064d) est un compos\u00e9 de yawm (jour) et idhin (alors, \u00e0 ce moment-l\u00e0). \u00ab Ce jour-l\u00e0 \u00bb \u2014 le texte ne pr\u00e9cise pas quel jour, mais le contexte (apr\u00e8s les tombes, apr\u00e8s la vision du brasier) oriente vers le jour de la r\u00e9surrection.

**\u2019an** (\u0639\u064e\u0646\u0650) est une pr\u00e9position qui signifie \u00ab au sujet de, \u00e0 propos de \u00bb. Elle indique l\u2019objet du questionnement.

**an-na\u2019im** (\u0627\u0644\u0646\u0651\u064e\u0639\u0650\u064a\u0645\u0650) est un nom d\u00e9fini par al-. D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine nun-\u2019ayn-mim d\u00e9signe ce qui est doux, agr\u00e9able, confortable. An-na\u2019im d\u00e9crit les douceurs de la vie \u2014 tout ce qui rend l\u2019existence agr\u00e9able : nourriture, sant\u00e9, s\u00e9curit\u00e9, compagnie, repos, confort. L\u2019article al- en fait LES douceurs connues de tous.

La phrase se lit : \u00ab Puis vous serez assur\u00e9ment questionn\u00e9s ce jour-l\u00e0 au sujet des douceurs \u00bb. Le questionnement porte sur l\u2019usage qu\u2019on a fait des douceurs de la vie.

\u00a7JUSTIFICATION\u00a7
**questionn\u00e9s** \u2014 Le sens retenu est \u00ab Requ\u00eate/Interrogation \u00bb. Le mot \u00ab questionn\u00e9s \u00bb est choisi car c\u2019est le terme le plus pr\u00e9cis pour un interrogatoire o\u00f9 l\u2019on demande des comptes. L\u2019alternative \u00ab interrog\u00e9s \u00bb est quasi-synonyme mais un peu plus formel. L\u2019alternative \u00ab demand\u00e9s \u00bb ne fonctionne pas au passif en fran\u00e7ais (\u00ab vous serez demand\u00e9s \u00bb ne se dit pas).

**douceurs** \u2014 Le sens retenu est \u00ab Douceur/Aisance \u00bb. Le mot \u00ab douceurs \u00bb est choisi car il d\u00e9crit l\u2019exp\u00e9rience agr\u00e9able de la vie \u2014 tout ce qui est doux et confortable. L\u2019alternative \u00ab bienfaits \u00bb est \u00e9cart\u00e9e car elle d\u00e9signe l\u2019acte de donner, pas l\u2019exp\u00e9rience de recevoir \u2014 le questionnement porte sur ce dont on a joui, pas sur ce qui a \u00e9t\u00e9 donn\u00e9. L\u2019alternative \u00ab d\u00e9lices \u00bb est \u00e9cart\u00e9e car c\u2019est du registre litt\u00e9raire et \u00e9voque les plaisirs sensuels.

\u00a7CRITIQUE\u00a7
**d\u00e9lices vs douceurs** \u2014 Les traductions courantes donnent \u00ab les d\u00e9lices \u00bb (Hamidullah). Le mot \u00ab d\u00e9lices \u00bb en fran\u00e7ais a une connotation de plaisir intense et sensuel. Or na\u2019im d\u00e9signe tout ce qui est doux et agr\u00e9able dans la vie \u2014 pas seulement les plaisirs intenses mais aussi le confort quotidien : un verre d\u2019eau fra\u00eeche, un moment de repos, la s\u00e9curit\u00e9, la sant\u00e9. Les sources \u00e9tymologiques donnent : douceur, tendresse, souplesse, vie agr\u00e9able, confort. \u00ab Douceurs \u00bb est plus large et plus fid\u00e8le que \u00ab d\u00e9lices \u00bb.`
  }).eq('verse_id', V);
  console.log('  Updated v8', error?.message || 'OK');

  await insertDaily(739, [
    { analysis_id: 739, sense: 'questionner', arabic: '\u0633\u0623\u0644', phon: "sa'ala", french: "Il m\u2019a pos\u00e9 une question directe \u2014 j\u2019ai d\u00fb r\u00e9pondre honn\u00eatement." },
    { analysis_id: 739, sense: 'questionner', arabic: '\u0633\u0623\u0644', phon: "sa'ala", french: "Quand on te questionne sur tes choix, il faut pouvoir les justifier." },
    { analysis_id: 739, sense: 'questionner', arabic: '\u0633\u0623\u0644', phon: "sa'ala", french: "Les enfants posent toujours les meilleures questions \u2014 ils veulent tout comprendre." }
  ]);
  await insertDaily(264, [
    { analysis_id: 264, sense: 'douceur', arabic: '\u0646\u0639\u0645', phon: "na\u2019im", french: "La douceur d\u2019un matin calme avec un caf\u00e9 chaud \u2014 c\u2019est \u00e7a le vrai confort." },
    { analysis_id: 264, sense: 'douceur', arabic: '\u0646\u0639\u0645', phon: "na\u2019im", french: "On oublie souvent les petites douceurs de la vie \u2014 avoir un toit, manger \u00e0 sa faim." },
    { analysis_id: 264, sense: 'douceur', arabic: '\u0646\u0639\u0645', phon: "na\u2019im", french: "Vivre dans le confort, c\u2019est une douceur qu\u2019on ne mesure que quand on la perd." }
  ]);

  console.log('VERSET 102:8 \u2014 TERMIN\u00c9');
}

(async () => {
  await verse102_1();
  await verse102_2();
  await verse102_3_4();
  await verse102_5();
  await verse102_6_7();
  await verse102_8();
  console.log('\n\u2705 SOURATE 102 TERMIN\u00c9E');
})();
