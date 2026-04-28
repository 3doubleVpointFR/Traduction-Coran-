/**
 * Pipeline maison V3 — Sourate 3, Verset 4
 *
 * Verset : مِن قَبْلُ هُدًى لِّلنَّاسِ وَأَنزَلَ ٱلْفُرْقَانَ ۗ إِنَّ ٱلَّذِينَ كَفَرُوا۟ بِـَٔايَـٰتِ ٱللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ ۗ وَٱللَّهُ عَزِيزٌ ذُو ٱنتِقَامٍ
 *
 * 18 mots, 12 mots avec racine.
 *
 * Étape 2 : ajouts ciblés (3 sens manquants pour les mots affichés)
 * - edb + "tourment"
 * - ezz + "puissant"
 * - nqm + "rétribution"
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VID = 297;

async function addSense(word_key, concept, sense, proof) {
  const wa = await db.from('word_analyses').select('id').eq('word_key', word_key).single();
  const aid = wa.data.id;
  const exists = await db.from('word_meanings').select('id').eq('analysis_id', aid).eq('sense', sense).maybeSingle();
  if (exists.data) { console.log(`  ⊙ "${sense}" déjà présent pour ${word_key}`); return; }
  await db.from('word_meanings').insert({
    analysis_id: aid, concept, sense, status: 'retenu',
    proof_ctx: proof, meaning_type: 'etymology', description: '', display_order: 99
  });
  console.log(`  ✓ "${sense}" ajouté à ${word_key}/${concept}`);
}

const SEGMENTS = [
  { fr: 'de',                pos: 'P',   phon: 'min',         arabic: 'مِن',          position: 1,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'avant',             pos: 'N',   phon: 'qablu',       arabic: 'قَبْلُ',       position: 2,  word_key: 'qbl', is_particle: false, sense_retenu: 'avant' },
  { fr: 'guidance',          pos: 'N',   phon: 'hudan',       arabic: 'هُدًى',        position: 3,  word_key: 'hdy', is_particle: false, sense_retenu: 'guidance' },
  { fr: 'gens',              pos: 'N',   phon: 'li-n-nāsi',   arabic: 'لِّلنَّاسِ',  position: 4,  word_key: 'nws', is_particle: false, sense_retenu: 'gens' },
  { fr: 'faire descendre',   pos: 'V',   phon: 'wa-anzala',   arabic: 'وَأَنزَلَ',    position: 5,  word_key: 'nzl', is_particle: false, sense_retenu: 'faire descendre' },
  { fr: 'Furqân',            pos: 'N',   phon: 'al-furqāna',  arabic: 'ٱلْفُرْقَانَ', position: 6,  word_key: 'frq', is_particle: false, sense_retenu: 'Furqân' },
  { fr: 'certes',            pos: 'ACC', phon: 'inna',        arabic: 'إِنَّ',        position: 7,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'ceux qui',          pos: 'REL', phon: 'al-ladhīna',  arabic: 'ٱلَّذِينَ',    position: 8,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'dissimuler',        pos: 'V',   phon: 'kafarū',      arabic: 'كَفَرُوا',     position: 9,  word_key: 'kfr', is_particle: false, sense_retenu: 'dissimuler' },
  { fr: 'signe',             pos: 'N',   phon: 'bi-āyāti',    arabic: 'بِـَٔايَٰتِ',  position: 10, word_key: 'ayy', is_particle: false, sense_retenu: 'signe' },
  { fr: 'Dieu',              pos: 'PN',  phon: 'allāhi',      arabic: 'ٱللَّهِ',      position: 11, word_key: 'alh', is_particle: false, sense_retenu: 'Dieu' },
  { fr: 'à eux',             pos: 'PRON',phon: 'lahum',       arabic: 'لَهُمْ',       position: 12, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'tourment',          pos: 'N',   phon: 'ʿadhābun',    arabic: 'عَذَابٌ',     position: 13, word_key: 'edb', is_particle: false, sense_retenu: 'tourment' },
  { fr: 'intense',           pos: 'ADJ', phon: 'shadīdun',    arabic: 'شَدِيدٌ',     position: 14, word_key: 'shdd',is_particle: false, sense_retenu: 'intense' },
  { fr: 'et Dieu',           pos: 'PN',  phon: 'wa-llāhu',    arabic: 'وَٱللَّهُ',    position: 15, word_key: 'alh', is_particle: false, sense_retenu: 'Dieu' },
  { fr: 'puissant',          pos: 'N',   phon: 'ʿazīzun',     arabic: 'عَزِيزٌ',      position: 16, word_key: 'ezz', is_particle: false, sense_retenu: 'puissant' },
  { fr: 'détenteur de',      pos: 'N',   phon: 'dhū',         arabic: 'ذُو',           position: 17, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'rétribution',       pos: 'N',   phon: 'intiqāmin',   arabic: 'ٱنتِقَامٍ',    position: 18, word_key: 'nqm', is_particle: false, sense_retenu: 'rétribution' },
];

async function loadConcepts(word_key) {
  const wa = await db.from('word_analyses').select('id').eq('word_key', word_key).single();
  const wm = await db.from('word_meanings').select('concept, sense').eq('analysis_id', wa.data.id);
  const out = {};
  for (const m of wm.data || []) {
    if (!out[m.concept]) out[m.concept] = { senses: [], status: 'nul', proof_ctx: '' };
    out[m.concept].senses.push(m.sense);
  }
  return out;
}

function buildAxes(concepts, retenuName, senseChose, retenuProof, otherProofs = {}) {
  const out = {};
  for (const [name, body] of Object.entries(concepts)) {
    out[name] = {
      senses: body.senses,
      status: name === retenuName ? 'retenu' : (otherProofs[name] ? 'probable' : 'nul'),
      proof_ctx: name === retenuName ? retenuProof : (otherProofs[name] || 'Hors sujet pour ce verset.'),
    };
  }
  return { sense_chosen: senseChose, concept_chosen: retenuName, concepts: out };
}

const TRANSLATION_ARAB = "auparavant, comme guidance pour les gens. Et Il a fait descendre le Furqân. Certes, ceux qui ont dissimulé les signes de Dieu, à eux un tourment intense. Et Dieu est puissant, détenteur de la rétribution.";
const FULL_TRANSLATION = "auparavant, comme guidance pour les gens. Et Il a fait descendre le Discernement. Ceux qui ne croient pas aux versets d'Allah auront, certes, un dur châtiment! Et, Allah est Puissant, Détenteur du pouvoir de punir.";

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Le verset 4 continue directement le verset 3 qui annonçait la descente de la Torah et de l'Évangile « avant » la révélation actuelle. Ici le verset précise le but de ces révélations antérieures (la guidance des gens), mentionne aussi la descente du Furqân, puis pose une menace claire pour ceux qui rejettent les signes de Dieu et finit en rappelant la puissance et la justice divine.

**min qablu** (avant) — l'expression min qablu (« d'avant ») marque l'antériorité dans le temps. Elle se rapporte aux Torah et Évangile mentionnés au verset précédent : ces écritures sont descendues avant la révélation actuelle pour servir de guidance aux gens.

**hudan** (guidance) est un mot de la racine h-d-y qui veut dire « guider, montrer le chemin ». Le mot est ici un nom indéfini qui décrit la fonction des écritures précédentes — elles sont descendues comme une guidance pour les gens.

**li-n-nāsi** (pour les gens) est composé du li- (« pour, à destination de ») + l'article défini al- (« les ») + nās (« gens, êtres humains »). Le mot nās désigne l'humanité dans son ensemble, sans distinction de groupe ou d'époque. La guidance est donc destinée à tous.

**wa-anzala** (Et Il a fait descendre) est de la racine n-z-l, forme IV (« faire descendre d'un coup »). C'est la même forme que celle utilisée pour la Torah et l'Évangile au verset 3 — Dieu fait descendre le Furqân ponctuellement, comme les autres écritures.

**al-furqāna** (le Furqân) est de la racine f-r-q qui veut dire « séparer, distinguer ». Le Furqân est ce qui distingue, ce qui sépare le vrai du faux, le bien du mal. Le Lane's donne pour cette racine : « diviser, distinguer, séparer, Furqân ». Le mot a un usage technique dans le Coran pour désigner ce qui permet de discerner.

**inna** (certes) est un petit mot d'emphase qui annonce une affirmation forte. Il introduit la phrase suivante en lui donnant du poids.

**al-ladhīna kafarū** (ceux qui ont dissimulé) — al-ladhīna est un pronom relatif (« ceux qui »), et kafarū est un verbe accompli (action achevée) à la 3ème personne du masculin pluriel. La racine k-f-r veut dire d'abord « couvrir, cacher ». Ce sens premier (cacher, dissimuler) est attesté par le Lane's : « il couvrit, dissimula, cacha une chose ». Le sens « mécroire » est une extension tardive — on garde le sens étymologique premier.

**bi-āyāti llāhi** (les signes de Dieu) — bi- est une préposition (« avec, à propos de »), suivie de āyāt (pluriel de āya) de la racine ʾ-y-y. Le mot āya veut dire « signe, marque distinctive » — quelque chose qu'on remarque et qui pointe vers autre chose. En contexte coranique, les signes de Dieu sont à la fois les versets et les signes naturels qui pointent vers Dieu.

**lahum ʿadhābun shadīdun** (à eux un tourment intense) — lahum (« à eux ») introduit la conséquence pour ceux qui ont dissimulé. ʿadhāb est un nom de la racine ʿ-ḏ-b qui veut dire « tourmenter, punir, châtier » — désigne une souffrance intense, un supplice. shadīd est un mot de la racine š-d-d qui veut dire « être fort, intense, sévère ». Ensemble, ʿadhāb shadīd décrit une souffrance forte, intense.

**wa-llāhu** (Et Dieu) reprend le nom Allāh comme sujet de la phrase suivante.

**ʿazīzun** (puissant) est un mot de la racine ʿ-z-z qui veut dire « être puissant, glorieux, invincible ». Le Lane's donne : « être puissant, glorieux, rare et précieux ». Le mot décrit Dieu comme celui qui possède la puissance.

**dhū intiqāmin** (détenteur de la rétribution) — dhū est un petit mot qui veut dire « celui qui possède, détenteur de ». intiqām est un nom de la racine n-q-m qui veut dire « exercer une rétribution, châtier, se venger ». Le Lane's donne pour cette racine : « exiger vengeance sur lui, le punir, infliger une rétribution pénale ». Le mot intiqām désigne donc l'acte de rendre justice par châtiment — pas une vengeance personnelle (anthropomorphique), mais l'exercice de la justice divine qui rend à chacun selon ses actes.

§JUSTIFICATION§

**avant** — Le sens retenu est « avant » de l'axe Antériorité/Passé. Le mot « avant » est choisi car il rend directement la dimension temporelle de l'expression min qablu. L'alternative « auparavant » est écartée car elle implique une distance temporelle plus grande, alors que min qablu pointe simplement vers ce qui précède directement.

**guidance** — Le sens retenu est « guidance » de l'axe Guidance/Direction. Le mot « guidance » est choisi car il désigne directement l'action de guider, en restant général. L'alternative « guide » est écartée car elle désigne une personne, pas l'action ou le contenu de la guidance.

**gens** — Le sens retenu est « gens » de l'axe Humanité/Peuple. Le mot « gens » est choisi car c'est la traduction la plus naturelle et générale en français pour nās. L'alternative « êtres humains » est écartée car plus longue sans gain de précision. L'alternative « peuple » est écartée car elle pourrait suggérer un groupe spécifique, alors que nās désigne l'humanité entière sans distinction.

**Furqân** — Le sens retenu est « Furqân » de l'axe Séparation/Distinction. Le mot « Furqân » est conservé en translittération directe — c'est un terme technique du Coran qui désigne ce qui sépare le vrai du faux. L'alternative « Discernement » (Hamidullah) est écartée car elle aplanit le mot en une faculté psychologique (le discernement comme capacité), alors que le Furqân est un objet/texte qui sépare et distingue. L'alternative « critère » est écartée car trop abstraite et juridique.

**dissimuler** — Le sens retenu est « dissimuler » de l'axe Couverture/Dissimulation. Le mot « dissimuler » est choisi car il rend le sens étymologique premier de la racine k-f-r (couvrir, cacher) tout en sonnant naturel en français. L'alternative « rejeter » est écartée car elle perd l'image de couverture (cacher activement la vérité). L'alternative « ne pas croire » (Hamidullah) est écartée car elle aplanit l'acte volontaire de dissimulation en une simple absence de foi.

**signe** — Le sens retenu est « signe » de l'axe Signe/Marque. Le mot « signe » est choisi car il rend directement le sens premier de āya — quelque chose qui marque, qui pointe vers autre chose. L'alternative « verset » est écartée car elle fige le mot en unité textuelle technique, alors que āya désigne d'abord toute marque ou indice (versets coraniques, signes naturels, miracles).

**Dieu** — Le sens retenu est « Dieu » de l'axe Divinité. Le mot « Dieu » est le nom français usuel pour la divinité unique.

**tourment** — Le sens retenu est « tourment » de l'axe Châtiment/Punition. Le mot « tourment » est choisi car il rend la dimension de souffrance intense de la racine ʿ-ḏ-b — c'est une douleur qui afflige, pas une simple sanction. L'alternative « châtiment » est écartée car elle insiste sur l'aspect juridique (la punition), alors que ʿadhāb désigne l'épreuve souffrante elle-même.

**intense** — Le sens retenu est « intense » de l'axe Intensité/Sévérité. Le mot « intense » est choisi car il rend la dimension de force et de durée de la racine š-d-d. L'alternative « dur » (Hamidullah) est écartée car elle suggère un caractère matériel/résistant, alors que shadīd décrit l'intensité de la souffrance.

**puissant** — Le sens retenu est « puissant » de l'axe Puissance/Gloire. Le mot « puissant » est choisi car il rend directement la racine ʿ-z-z — celui qui possède la puissance. L'alternative « Tout-Puissant » est écartée car elle ajoute un absolu (« Tout- ») qui n'est pas dans le mot arabe seul.

**rétribution** — Le sens retenu est « rétribution » de l'axe Vengeance/Châtiment. Le mot « rétribution » est choisi car il rend la dimension de justice rétributive de la racine n-q-m (rendre à chacun selon ses actes). L'alternative « vengeance » est écartée car elle suggère une émotion personnelle (rancune, désir de revanche) qui anthropomorphise la justice divine. L'alternative « pouvoir de punir » (Hamidullah) est écartée car elle réduit à la capacité, alors que intiqām désigne l'acte exercé.

§CRITIQUE§

**le Furqân vs « le Discernement »** : Hamidullah traduit al-furqāna par « le Discernement ». Le mot Furqân vient de la racine f-r-q qui veut dire « séparer, distinguer ». Mais Furqân est un terme technique coranique qui désigne le texte qui sépare le vrai du faux — c'est un objet, pas une faculté. « Discernement » glisse vers la capacité psychologique (la faculté de discerner) et perd la dimension d'objet textuel. Garder « Furqân » en translittération préserve le terme technique sans aplanir.

**ont dissimulé vs « ne croient pas »** : Hamidullah traduit kafarū par « ne croient pas ». La racine k-f-r veut dire d'abord « couvrir, cacher » — celui qui kafara cache activement la vérité reçue. Le sens « ne pas croire » est une extension tardive qui perd l'image active. « Ont dissimulé » conserve l'acte volontaire de couvrir ce qu'on sait être vrai, tandis que « ne pas croire » devient une simple absence de foi, comme une condition passive.

**les signes vs « les versets »** : Hamidullah traduit āyāt par « versets ». La racine ʾ-y-y signifie d'abord « signe, marque distinctive ». Le sens « verset coranique » est dérivé. « Versets » fige le mot en unité textuelle (les versets du Coran), alors que āyāt en arabe coranique couvre à la fois les versets et les signes naturels qui pointent vers Dieu (création, miracles, événements). « Signes » garde cette ouverture sémantique.

**un tourment intense vs « un dur châtiment »** : Hamidullah traduit ʿadhāb shadīd par « dur châtiment ». ʿadhāb désigne la souffrance subie (le tourment), pas la sanction juridique. shadīd décrit l'intensité de cette souffrance — elle est forte, soutenue, traversante. « Dur » suggère plutôt la résistance ou la rigueur extérieure. « Tourment intense » garde l'image d'une souffrance interne traversante, fidèle au sens du mot arabe.

**détenteur de la rétribution vs « Détenteur du pouvoir de punir »** : Hamidullah étire dhū intiqām en « Détenteur du pouvoir de punir » (3 mots ajoutés : pouvoir, de, punir). Le mot arabe intiqām est un nom seul qui désigne l'acte de rétribution — pas la capacité, mais l'exercice. « Rétribution » rend cet acte de justice qui rend à chacun selon ses actes, sans introduire la notion de « pouvoir » qui suggère une capacité non encore exercée. La paraphrase d'Hamidullah ajoute aussi le verbe « punir » qui charge négativement — alors que rétribution couvre à la fois la récompense et la sanction selon les actes.`;

async function run() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  PIPELINE MAISON V3 — Sourate 3, Verset 4');
  console.log('═══════════════════════════════════════════════════\n');

  console.log('Étape 2 — ajouts ciblés');
  await addSense('edb', 'Châtiment/Punition', 'tourment',
    "Sens nominal du verbe « tourmenter » de la racine ʿ-ḏ-b. Désigne la souffrance subie comme état (le tourment lui-même), distinct de l'acte de punir.");
  await addSense('ezz', 'Puissance/Gloire', 'puissant',
    "Forme adjectivale du verbe « être puissant » de la racine ʿ-z-z. Désigne celui qui possède la puissance comme caractéristique permanente.");
  await addSense('nqm', 'Vengeance/Châtiment', 'rétribution',
    "Forme nominale qui désigne l'acte de rendre justice par châtiment — Lane's donne « inflict penal retribution ». Plus juste théologiquement que « vengeance » qui anthropomorphise.");

  console.log('\nÉtape 3 — VWA analysis_axes');

  const conceptsQbl  = await loadConcepts('qbl');
  const conceptsHdy  = await loadConcepts('hdy');
  const conceptsNws  = await loadConcepts('nws');
  const conceptsNzl  = await loadConcepts('nzl');
  const conceptsFrq  = await loadConcepts('frq');
  const conceptsKfr  = await loadConcepts('kfr');
  const conceptsAyy  = await loadConcepts('ayy');
  const conceptsAlh  = await loadConcepts('alh');
  const conceptsEdb  = await loadConcepts('edb');
  const conceptsShdd = await loadConcepts('shdd');
  const conceptsEzz  = await loadConcepts('ezz');
  const conceptsNqm  = await loadConcepts('nqm');

  const VWA_LIST = [
    [2,  'qbl',  buildAxes(conceptsQbl, 'Antériorité/Passé', 'avant',
      "Expression min qablu : antériorité temporelle qui se rapporte aux écritures précédentes (Torah, Évangile) mentionnées au verset 3.")],
    [3,  'hdy',  buildAxes(conceptsHdy, 'Guidance/Direction', 'guidance',
      "Nom indéfini hudan qui décrit la fonction des écritures antérieures. Le mot englobe l'acte de guider et son contenu.")],
    [4,  'nws',  buildAxes(conceptsNws, 'Humanité/Peuple', 'gens',
      "Pluriel défini al-nās : l'humanité dans son ensemble, sans distinction. La guidance est universelle, pour tous les gens.")],
    [5,  'nzl',  buildAxes(conceptsNzl, 'Descente/Révélation', 'faire descendre',
      "Verbe forme IV anzala : action ponctuelle de descente. Même forme qu'au verset 3 pour la Torah et l'Évangile — le Furqân descend ponctuellement comme les autres écritures.")],
    [6,  'frq',  buildAxes(conceptsFrq, 'Séparation/Distinction', 'Furqân',
      "Nom défini al-furqān : terme technique du Coran. Désigne ce qui sépare le vrai du faux, le bien du mal. Pas une faculté psychologique mais un objet/texte distinguant.")],
    [9,  'kfr',  buildAxes(conceptsKfr, 'Couverture/Dissimulation', 'dissimuler',
      "Verbe accompli pluriel kafarū bi- + signes : ils ont activement caché les signes de Dieu malgré leur évidence. Sens premier de la racine — couvrir, cacher — préservé.")],
    [10, 'ayy',  buildAxes(conceptsAyy, 'Signe/Marque', 'signe',
      "Pluriel défini āyāt allāh : les signes de Dieu en général — versets, signes naturels, événements. Le mot reste large et ne se réduit pas aux versets coraniques.")],
    [11, 'alh',  buildAxes(conceptsAlh, 'Divinité', 'Dieu',
      "Nom propre Allāh comme complément des signes : ce sont les signes qui appartiennent à Dieu et qui mènent à Lui.")],
    [13, 'edb',  buildAxes(conceptsEdb, 'Châtiment/Punition', 'tourment',
      "Nom indéfini ʿadhābun : la souffrance subie comme état, pas l'acte juridique de punir. Image d'une douleur traversante.")],
    [14, 'shdd', buildAxes(conceptsShdd, 'Intensité/Sévérité', 'intense',
      "Adjectif shadīd qualifiant le tourment : décrit la force interne et la durée de la souffrance — pas une rigueur extérieure.")],
    [16, 'ezz',  buildAxes(conceptsEzz, 'Puissance/Gloire', 'puissant',
      "Forme adjectivale ʿazīz : caractéristique permanente. Décrit Dieu comme possédant la puissance par nature.")],
    [18, 'nqm',  buildAxes(conceptsNqm, 'Vengeance/Châtiment', 'rétribution',
      "Nom intiqām en construction dhū intiqām : Dieu détient l'acte de rendre justice par rétribution. Le mot couvre à la fois la sanction et la récompense selon les actes.")],
  ];

  // Ajouter les VWA pour ALH pos=15 (wa-llāhu)
  VWA_LIST.push([15, 'alh', buildAxes(conceptsAlh, 'Divinité', 'Dieu',
    "Reprise du nom Allāh comme sujet de la phrase suivante.")]);

  for (const [pos, key, axes] of VWA_LIST) {
    const senseChose = axes.sense_chosen;
    const existing = await db.from('verse_word_analyses').select('id').eq('verse_id', VID).eq('position', pos).maybeSingle();
    if (existing.data) {
      await db.from('verse_word_analyses').update({ word_key: key, sense_chosen: senseChose, analysis_axes: axes }).eq('id', existing.data.id);
    } else {
      await db.from('verse_word_analyses').insert({ verse_id: VID, position: pos, word_key: key, sense_chosen: senseChose, analysis_axes: axes });
    }
    console.log(`  ✓ VWA pos=${pos} ${key} → "${senseChose}"`);
  }

  console.log('\nÉtape 4 — verse_analyses');
  const existing = await db.from('verse_analyses').select('verse_id').eq('verse_id', VID).maybeSingle();
  if (existing.data) {
    await db.from('verse_analyses').update({
      translation_arab: TRANSLATION_ARAB,
      full_translation: FULL_TRANSLATION,
      segments: SEGMENTS,
      translation_explanation: TRANSLATION_EXPLANATION,
    }).eq('verse_id', VID);
  } else {
    await db.from('verse_analyses').insert({
      verse_id: VID,
      translation_arab: TRANSLATION_ARAB,
      full_translation: FULL_TRANSLATION,
      segments: SEGMENTS,
      translation_explanation: TRANSLATION_EXPLANATION,
    });
  }
  console.log('  ✓ verse_analyses mise à jour');

  for (const k of ['qbl', 'hdy', 'nws', 'nzl', 'frq', 'kfr', 'ayy', 'alh', 'edb', 'shdd', 'ezz', 'nqm']) {
    const wa = await db.from('word_analyses').select('id').eq('word_key', k).single();
    const wd = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', wa.data.id);
    console.log(`  • word_daily ${k} : ${wd.count} phrases ${wd.count > 0 ? '(SKIP)' : '(à créer)'}`);
  }

  console.log('\n═══════════════════════════════════════════════════');
  console.log('  VERSET 3:4 — TERMINÉ');
  console.log('═══════════════════════════════════════════════════');
}

run().catch(e => { console.error(e); process.exit(1); });
