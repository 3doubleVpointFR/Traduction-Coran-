/**
 * Pipeline maison V3 — Sourate 3, Verset 2 : ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ
 *
 * 7 mots, 4 mots importants : alh×2 (allāhu, ilāha), hyy (al-ḥayyu), qwm (al-qayyūmu)
 *
 * Étape 2 : SKIP toutes les racines (>= 5 sens)
 *   sauf : ajouter "subsister" au concept Verticalité/Droiture de qwm
 *   pour qu'il colle à al-qayyūm (auto-subsistant)
 *
 * Étape 3-4 : analyses + traduction.
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VID = 295;

// ============== ÉTAPE 2 partielle : ajouter "subsister" au concept Verticalité/Droiture de qwm ==============
async function addSubsisterToQwm() {
  const wa = await db.from('word_analyses').select('id').eq('word_key', 'qwm').single();
  const aid = wa.data.id;
  const exists = await db.from('word_meanings').select('id').eq('analysis_id', aid).eq('sense', 'subsister').maybeSingle();
  if (exists.data) { console.log('  ⊙ "subsister" déjà présent'); return; }
  await db.from('word_meanings').insert({
    analysis_id: aid,
    concept: 'Verticalité/Droiture',
    sense: 'subsister',
    status: 'retenu',
    proof_ctx: "Sens étymologique direct de la racine qwm en forme intensive (qayyūm) : celui qui se tient/se maintient en permanence par lui-même. Parallèle étymologique avec le latin sub-sistere (se tenir dessous, demeurer en place). Préserve l'image verticale de la racine.",
    meaning_type: 'etymology',
    description: '',
    display_order: 99
  });
  console.log('  ✓ "subsister" ajouté au concept Verticalité/Droiture de qwm');
}

// ============== ÉTAPE 1 : SEGMENTS ==============
const SEGMENTS = [
  { fr: 'Dieu',         pos: 'PN',   phon: 'allāhu',     arabic: 'ٱللَّهُ',      position: 1, word_key: 'alh',  is_particle: false, sense_retenu: 'Dieu' },
  { fr: 'pas de',       pos: 'NEG',  phon: 'lā',         arabic: 'لَآ',          position: 2, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: 'divinité',     pos: 'N',    phon: 'ilāha',      arabic: 'إِلَـٰهَ',     position: 3, word_key: 'alh',  is_particle: false, sense_retenu: 'divinité' },
  { fr: 'sinon',        pos: 'EXP',  phon: 'illā',       arabic: 'إِلَّا',       position: 4, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: 'Lui',          pos: 'PRON', phon: 'huwa',       arabic: 'هُوَ',         position: 5, word_key: null,   is_particle: true,  sense_retenu: null },
  { fr: 'vivant',       pos: 'N',    phon: 'al-ḥayyu',   arabic: 'ٱلْحَىُّ',     position: 6, word_key: 'hyy',  is_particle: false, sense_retenu: 'vivant' },
  { fr: 'subsister',    pos: 'ADJ',  phon: 'al-qayyūmu', arabic: 'ٱلْقَيُّومُ',  position: 7, word_key: 'qwm',  is_particle: false, sense_retenu: 'subsister' },
];

// ============== ÉTAPE 3 : VWA analysis_axes ==============
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

const TRANSLATION_ARAB = "Dieu, il n'y a de divinité que Lui, le Vivant, le Subsistant.";
const FULL_TRANSLATION = "Allah! Pas de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même « al-Qayyum »";

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Après les lettres mystérieuses du verset 1, le verset 2 ouvre la sourate par une affirmation centrale d'unicité divine : Dieu est nommé, l'absence d'autre divinité est posée, puis deux attributs sont énoncés — le Vivant et le Subsistant. Ce verset introduit le thème de la transcendance divine qui structurera toute la sourate Āl ʿImrān.

**allāhu** (Dieu) est un nom propre (PN) au nominatif (cas du sujet). Il s'analyse comme l'agglutination de l'article défini al- et du nom commun ilāh (divinité), donnant littéralement « la divinité », c'est-à-dire la divinité par excellence — le Dieu unique. Lane's confirme cette étymologie : ʾallāh est al-ilāh (le dieu) avec contraction de la hamza.

**lā** (pas de) est une particule de négation qui introduit la négation absolue de la catégorie qui suit. La construction lā ilāha illā huwa (pas de divinité sinon Lui) est une formule arabe de négation puis d'exception (lā... illā), procédé idiomatique très courant qui pose une exclusion totale puis une seule exception.

**ilāha** (divinité) est un nom commun à l'accusatif indéfini, gouverné par la particule lā (négation absolue). De la même racine que ʾallāh — racine ʾ-l-h qui désigne ce qui mérite l'adoration. Le mot désigne ici la divinité comme catégorie générique, pas une divinité particulière : « il n'existe aucune entité de cette catégorie ».

**illā** (sinon) est une particule d'exception qui introduit le seul élément qui échappe à la négation précédente. Ensemble avec lā, elle forme la structure de l'exclusivité absolue : tout est nié SAUF l'élément qui suit.

**huwa** (Lui) est un pronom personnel de la 3ème personne du masculin singulier, ici en position d'exception après illā — c'est lui (Dieu) qui est exclu de la négation, lui seul est divinité.

**al-ḥayyu** (le Vivant) est un nom-attribut au nominatif défini, dérivé de la racine ḥ-y-y (vie). La forme ḥayy est un participe actif/adjectif qualificatif désignant celui qui possède la vie de manière inhérente. Avec l'article défini al-, il désigne LE Vivant par excellence — celui dont la vie n'est pas reçue mais constitutive.

**al-qayyūmu** (le Subsistant) est un nom-attribut au nominatif défini, dérivé de la racine q-w-m (se tenir, se dresser, se maintenir). La forme qayyūm est un schème intensif (fa'yyūl) qui désigne celui qui fait l'action de manière permanente et intense — celui qui se tient/subsiste par lui-même de façon ininterrompue. Lane's donne pour ce schème : celui qui se tient debout, qui se maintient, qui dure de manière indépendante. La forme intensive marque l'absoluité de la subsistance.

§JUSTIFICATION§

**Dieu** — Le sens retenu est « Dieu » du concept Divinité de la racine ʾ-l-h. Le mot « Dieu » est choisi car il est le nom français usuel pour la divinité unique. L'alternative « Allah » (translittération non traduite) est écartée car elle fige la divinité en nom propre étranger et coupe le lecteur francophone de la lisibilité linguistique du texte.

**divinité** — Le sens retenu est « divinité » du concept Divinité de la racine ʾ-l-h. Le mot « divinité » est choisi car il rend la catégorie générique (ce qui mérite l'adoration) sans la nominalisation. L'alternative « dieu » (avec minuscule) est écartée car elle prête à confusion avec « Dieu » employé immédiatement avant.

**vivant** — Le sens retenu est « vivant » du concept Vie/Vivant de la racine ḥ-y-y. Le mot « vivant » est choisi car il rend exactement le sens étymologique du participe actif ḥayy. L'alternative « le Vivant éternel » est écartée car « éternel » ajoute une dimension de durée non explicitement présente dans la forme ḥayy seule (la durée vient plutôt de qayyūm). La traduction « le Vivant » avec article défini préserve l'attribut absolu (par excellence).

**subsister** — Le sens retenu est « subsister » du concept Verticalité/Droiture de la racine q-w-m. Le mot « subsister » est choisi car il rend le sens étymologique premier de la racine (se tenir, se maintenir verticalement) tout en s'appliquant naturellement à un attribut divin en français. Le français « subsister » provient du latin sub-sistere (se tenir dessous, demeurer en place) — parallèle étymologique remarquable avec qāma. La forme intensive qayyūm justifie le mot français « Subsistant » (forme nominale agentive). L'alternative « celui qui se tient debout » (sens premier physique) est écartée car elle reste trop concrète pour un attribut divin métaphorique. L'alternative « Auto-suffisant » est écartée car elle introduit une nuance de complétude (auto-) absente du verbe arabe qui exprime la persistance, pas l'auto-suffisance.

§CRITIQUE§

**Dieu vs « Allah »** : Hamidullah translittère ٱللَّهُ par « Allah ». ʾallāh est lexicalement « la divinité » (al-ilāh), nom commun déterminé désignant le Dieu unique. Conserver le mot arabe non traduit fige la divinité en nom propre étranger ; « Dieu » est accessible en français.

**il n'y a de divinité que Lui vs « Pas de divinité à part Lui »** : Hamidullah utilise une construction elliptique (« Pas de divinité à part Lui ») qui retire la copule. La structure arabe lā ilāha illā huwa est idiomatiquement rendue par « il n'y a de... que », formule française classique pour la négation-exception. Notre traduction préserve la copule explicite ; Hamidullah la supprime, ce qui rend le ton plus exclamatif mais perd la fluidité argumentative.

**le Subsistant vs « Celui qui subsiste par Lui-même « al-Qayyum » »** : Hamidullah étire la forme intensive qayyūm en périphrase explicative (« Celui qui subsiste par Lui-même ») et translittère al-Qayyum entre guillemets pour le préserver. Notre traduction « le Subsistant » condense la forme intensive en un seul mot français qui rend la forme nominale agentive (Subsistant = celui qui subsiste). La périphrase de Hamidullah explicite mais alourdit ; la translittération entre guillemets reconnaît implicitement que le mot français est insuffisant. « Subsistant » est précisément le terme qui dit en un mot ce que la périphrase dit en plusieurs.`;

async function run() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  PIPELINE MAISON V3 — Sourate 3, Verset 2');
  console.log('═══════════════════════════════════════════════════\n');

  // Étape 2 partielle : ajout du sens "subsister" pour qwm
  console.log('Étape 2 — partial ajout');
  await addSubsisterToQwm();

  // Étape 3 : récupérer concepts en BDD pour chaque racine et construire les VWA
  console.log('\nÉtape 3 — VWA analysis_axes');
  const conceptsAlh = await loadConcepts('alh');
  const conceptsHyy = await loadConcepts('hyy');
  const conceptsQwm = await loadConcepts('qwm');

  // VWA pos=1 allāhu — concept Divinité, sens Dieu
  const axesAllahu = buildAxes(conceptsAlh, 'Divinité', 'Dieu',
    'ʾallāh est al-ilāh contracté = la divinité par excellence. Nom propre désignant la divinité unique du discours coranique.',
    {
      'Adoration/Dévotion': "Concept lié à la racine ʾ-l-h désignant l'acte d'adorer ce qui est divin. Ici le mot désigne la divinité elle-même, pas l'acte d'adoration."
    });

  // VWA pos=3 ilāha — concept Divinité, sens divinité
  const axesIlaha = buildAxes(conceptsAlh, 'Divinité', 'divinité',
    "ilāh à l'accusatif indéfini après lā négation absolue : désigne la catégorie générique « divinité » dont l'existence est niée hors de Lui.",
    {
      'Adoration/Dévotion': "Concept dérivé de la racine. Ici le mot désigne la catégorie générique des entités adorables, pas l'acte d'adoration."
    });

  // VWA pos=6 al-ḥayyu — concept Vie/Vivant, sens vivant
  const axesHayyu = buildAxes(conceptsHyy, 'Vie/Vivant', 'vivant',
    "Participe actif al-ḥayy = le Vivant par excellence. La vie est constitutive, pas reçue. L'article défini particularise l'attribut absolu.",
    {});

  // VWA pos=7 al-qayyūmu — concept Verticalité/Droiture, sens subsister
  const axesQayyumu = buildAxes(conceptsQwm, 'Verticalité/Droiture', 'subsister',
    "Forme intensive qayyūm de la racine q-w-m (se tenir) = celui qui subsiste de manière permanente et inhérente. Parallèle étymologique au latin sub-sistere.",
    {
      'Gestion/Administration': "Concept dérivé de la racine (celui qui veille, prend en charge). Ici le sens premier de la racine (se tenir/subsister) est plus direct ; la gestion est une extension métaphorique secondaire de l'attribut.",
      'Subsistance': "Concept passif (ce qui est subsisté). Ici qayyūm est l'agent qui subsiste par soi-même, pas le résultat passif d'une subsistance reçue."
    });

  // Insérer les VWA
  for (const [pos, key, axes, senseChose] of [
    [1, 'alh',  axesAllahu,  'Dieu'],
    [3, 'alh',  axesIlaha,   'divinité'],
    [6, 'hyy',  axesHayyu,   'vivant'],
    [7, 'qwm',  axesQayyumu, 'subsister'],
  ]) {
    const existing = await db.from('verse_word_analyses').select('id').eq('verse_id', VID).eq('position', pos).maybeSingle();
    if (existing.data) {
      await db.from('verse_word_analyses').update({ word_key: key, sense_chosen: senseChose, analysis_axes: axes }).eq('id', existing.data.id);
    } else {
      await db.from('verse_word_analyses').insert({ verse_id: VID, position: pos, word_key: key, sense_chosen: senseChose, analysis_axes: axes });
    }
    console.log(`  ✓ VWA pos=${pos} ${key} → "${senseChose}"`);
  }

  // Étape 4 : verse_analyses
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

  // word_daily : skip si phrases existent déjà
  // alh, hyy, qwm sont des racines anciennes, phrases probablement déjà présentes
  for (const k of ['alh', 'hyy', 'qwm']) {
    const wa = await db.from('word_analyses').select('id').eq('word_key', k).single();
    const wd = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', wa.data.id);
    console.log(`  • word_daily ${k} : ${wd.count} phrases ${wd.count > 0 ? '(SKIP)' : '(à créer)'}`);
  }

  console.log('\n═══════════════════════════════════════════════════');
  console.log('  VERSET 3:2 — TERMINÉ');
  console.log('═══════════════════════════════════════════════════');
  console.log('  pos=1 alh → "Dieu" (Divinité)');
  console.log('  pos=3 alh → "divinité" (Divinité)');
  console.log('  pos=6 hyy → "vivant" (Vie/Vivant)');
  console.log('  pos=7 qwm → "subsister" (Verticalité/Droiture)');
  console.log('  Traduction : "' + TRANSLATION_ARAB + '"');
  console.log('  Hamidullah : "' + FULL_TRANSLATION + '"');
}

run().catch(e => { console.error(e); process.exit(1); });
