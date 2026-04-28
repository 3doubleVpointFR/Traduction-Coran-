/**
 * Pipeline maison V3 — Sourate 3, Verset 6
 *
 * Verset : هُوَ ٱلَّذِى يُصَوِّرُكُمْ فِى ٱلْأَرْحَامِ كَيْفَ يَشَآءُ ۚ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ
 *
 * 13 mots, 7 mots avec racine : swr, rhm, kyf, shy, alh, ezz, hkm.
 *
 * Étape 2 : ajout de "sage" (adjectif) au concept Sagesse de hkm.
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VID = 299;

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
  { fr: 'C\'est Lui',    pos: 'PRON', phon: 'huwa',         arabic: 'هُوَ',          position: 1,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'qui',           pos: 'REL',  phon: 'al-ladhī',     arabic: 'ٱلَّذِى',        position: 2,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'façonner',      pos: 'V',    phon: 'yuṣawwirukum', arabic: 'يُصَوِّرُكُمْ',  position: 3,  word_key: 'swr', is_particle: false, sense_retenu: 'façonner' },
  { fr: 'dans',          pos: 'P',    phon: 'fī',           arabic: 'فِى',            position: 4,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'utérus',        pos: 'N',    phon: 'al-arḥāmi',    arabic: 'ٱلْأَرْحَامِ',  position: 5,  word_key: 'rhm', is_particle: false, sense_retenu: 'utérus' },
  { fr: 'comment',       pos: 'INTG', phon: 'kayfa',        arabic: 'كَيْفَ',         position: 6,  word_key: 'kyf', is_particle: false, sense_retenu: 'comment' },
  { fr: 'vouloir',       pos: 'V',    phon: 'yashāʾu',      arabic: 'يَشَآءُ',        position: 7,  word_key: 'shy', is_particle: false, sense_retenu: 'vouloir' },
  { fr: 'pas de',        pos: 'NEG',  phon: 'lā',           arabic: 'لَآ',            position: 8,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'divinité',      pos: 'N',    phon: 'ilāha',        arabic: 'إِلَـٰهَ',       position: 9,  word_key: 'alh', is_particle: false, sense_retenu: 'divinité' },
  { fr: 'sinon',         pos: 'EXP',  phon: 'illā',         arabic: 'إِلَّا',         position: 10, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'Lui',           pos: 'PRON', phon: 'huwa',         arabic: 'هُوَ',           position: 11, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'puissant',      pos: 'N',    phon: 'al-ʿazīzu',    arabic: 'ٱلْعَزِيزُ',     position: 12, word_key: 'ezz', is_particle: false, sense_retenu: 'puissant' },
  { fr: 'sage',          pos: 'ADJ',  phon: 'al-ḥakīmu',    arabic: 'ٱلْحَكِيمُ',     position: 13, word_key: 'hkm', is_particle: false, sense_retenu: 'sage' },
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

const TRANSLATION_ARAB = "C'est Lui qui vous façonne dans les utérus comme Il veut. Il n'y a de divinité que Lui, le Puissant, le Sage.";
const FULL_TRANSLATION = "C'est Lui qui vous donne forme dans les matrices, comme Il veut. Point de divinité à part Lui, le Puissant, le Sage.";

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Après le verset 5 qui affirmait que rien n'échappe à Dieu, le verset 6 illustre cette connaissance par un acte concret de Sa puissance créatrice : Il façonne chaque être humain dans le ventre maternel selon Sa volonté. Le verset se termine en revenant à la formule d'unicité divine et en ajoutant deux qualités — le Puissant, le Sage — qui complètent celles déjà énoncées au verset 2 (le Vivant, le Subsistant).

**huwa** (C'est Lui) est un pronom personnel de la 3ème personne masculin singulier qui désigne Dieu. Placé en début de phrase comme sujet, il met l'accent sur l'identité du locuteur : c'est bien Lui — Dieu — qui agit.

**al-ladhī** (qui) est un pronom relatif masculin singulier (« celui qui »). Il introduit la proposition qui décrit l'action de Dieu : « C'est Lui qui [fait ceci] ».

**yuṣawwirukum** (vous façonne) est un verbe forme II (forme renforcée qui dit que l'action est faite de manière intensive ou répétée) de la racine ṣ-w-r. La racine a pour sens premier « donner forme, modeler, donner une apparence ». Le suffixe -kum signifie « vous » (objet du verbe). L'imparfait dit que l'action est en cours ou habituelle — Dieu façonne continuellement les humains.

**fī l-arḥāmi** (dans les utérus) — fī est une préposition qui veut dire « dans », et al-arḥām est le pluriel défini de raḥim, de la racine r-ḥ-m. Le mot raḥim désigne en arabe l'utérus, l'organe maternel où se forme l'enfant. La même racine donne aussi raḥma (miséricorde) — selon la tradition lexicographique arabe, parce que l'utérus protège et nourrit l'enfant comme la miséricorde divine protège et nourrit les créatures.

**kayfa yashāʾu** (comme Il veut) — kayfa est un mot interrogatif qui signifie « comment, de quelle manière ». Yashāʾu est un verbe de la racine sh-y-ʾ qui veut dire « vouloir, désirer, souhaiter ». L'expression kayfa yashāʾu est une formule arabe figée qui signifie « selon la manière qu'Il veut, comme Il l'entend ». Elle exprime la liberté totale du vouloir divin.

**lā ilāha illā huwa** (il n'y a de divinité que Lui) reprend la formule centrale d'unicité déjà présente au verset 2. Lā est la négation absolue, ilāha est le mot « divinité » (de la racine ʾ-l-h, mêmes consonnes que pour ʾallāh), illā est le mot d'exception (« sinon »), et huwa désigne Lui (Dieu). La formule entière dit littéralement « pas de divinité sinon Lui ».

**al-ʿazīzu** (le Puissant) est un mot de la racine ʿ-z-z qui veut dire « être puissant, glorieux, invincible ». Avec l'article défini al- (« le »), il désigne Dieu comme possédant la puissance par caractéristique. Le Lane's Lexicon donne pour cette racine : « être puissant, glorieux, rare et précieux ».

**al-ḥakīmu** (le Sage) est un mot de la racine ḥ-k-m qui veut dire « sagesse, jugement, décision ». La forme du mot (ḥakīm) désigne celui qui possède la sagesse de manière permanente. Le Lane's donne pour cette racine : « être sage, sagesse, juger, décider ». Avec l'article al- (« le »), il décrit Dieu comme possédant la sagesse par caractéristique.

§JUSTIFICATION§

**façonner** — Le sens retenu est « façonner » de l'axe Forme/Image. Le mot « façonner » est choisi car il rend exactement le sens étymologique de la racine ṣ-w-r — donner une forme à quelque chose. L'alternative « donner forme » (Hamidullah) est écartée car elle utilise deux mots là où un seul suffit, et « façonner » garde mieux l'idée d'un travail artistique de modelage.

**utérus** — Le sens retenu est « utérus » de l'axe Utérus/Reproduction. Le mot « utérus » est choisi car c'est le mot français usuel et précis pour désigner l'organe maternel. L'alternative « matrices » (Hamidullah) est écartée car elle est archaïque (usage biblique du XVIIe siècle) et plus rare en français contemporain. L'alternative « ventres » est écartée car elle est trop vague — le ventre couvre tout l'abdomen, pas spécifiquement l'organe où se forme l'enfant.

**comment** — Le sens retenu est « comment » de l'axe Interrogation modale. Le mot « comment » est choisi car il rend directement et naturellement le sens de kayfa. L'alternative « de quelle manière » est écartée car plus longue sans gain de précision.

**vouloir** — Le sens retenu est « vouloir » de l'axe Volonté. Le mot « vouloir » est choisi car il rend directement le verbe yashāʾ. L'alternative « désirer » est écartée car elle implique une émotion, alors que le vouloir divin est un décret, pas une émotion.

**divinité** — Le sens retenu est « divinité » de l'axe Divinité. Le mot « divinité » désigne ici la catégorie générique (ce qui peut être adoré), pas un être en particulier.

**puissant** — Le sens retenu est « puissant » de l'axe Puissance/Gloire. Le mot « puissant » est choisi car il rend directement la racine ʿ-z-z. L'alternative « invincible » est écartée car trop militaire/négative ; « puissant » couvre plus largement la possession de la puissance.

**sage** — Le sens retenu est « sage » de l'axe Sagesse. Le mot « sage » est choisi car il rend directement la racine ḥ-k-m comme caractéristique permanente. L'alternative « juge » est écartée car elle insiste sur l'aspect juridique (la décision), alors que ḥakīm couvre plus largement la sagesse comme qualité.

§CRITIQUE§

**façonner vs « donner forme »** : Hamidullah utilise la périphrase « donner forme » au lieu d'un seul verbe. Le verbe arabe yuṣawwiru est compact et s'applique au modelage artistique (la racine ṣ-w-r donne aussi le mot ṣūra = image, statue). « Façonner » garde cette compacité et l'image du modelage attentif. « Donner forme » étire la traduction et perd l'idée d'un travail délicat de mise en forme.

**utérus vs « matrices »** : Hamidullah utilise « matrices » qui est un mot archaïque (usage biblique ancien) pour désigner l'utérus. En français contemporain, « matrices » est rare et technique. « Utérus » est le mot usuel précis qui désigne sans ambiguïté l'organe en question — accessible au lecteur contemporain.

**Il n'y a de divinité que Lui vs « Point de divinité à part Lui »** : Hamidullah utilise « Point de... à part » qui sonne archaïque (« point de » au lieu de « pas de »). L'arabe lā ilāha illā huwa est une formule fixe (négation totale + exception) qui se rend naturellement par « il n'y a de... que ». Notre traduction garde le verbe « il n'y a » pour rester dans un ton posé et naturel en français contemporain.`;

async function run() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  PIPELINE MAISON V3 — Sourate 3, Verset 6');
  console.log('═══════════════════════════════════════════════════\n');

  console.log('Étape 2 — ajout ciblé');
  await addSense('hkm', 'Sagesse', 'sage',
    "Forme adjectivale du verbe « être sage » de la racine ḥ-k-m. Désigne celui qui possède la sagesse comme caractéristique permanente — usage attribué à Dieu dans le Coran.");

  console.log('\nÉtape 3 — VWA analysis_axes');
  const conceptsSwr = await loadConcepts('swr');
  const conceptsRhm = await loadConcepts('rhm');
  const conceptsKyf = await loadConcepts('kyf');
  const conceptsShy = await loadConcepts('shy');
  const conceptsAlh = await loadConcepts('alh');
  const conceptsEzz = await loadConcepts('ezz');
  const conceptsHkm = await loadConcepts('hkm');

  const VWA_LIST = [
    [3,  'swr', buildAxes(conceptsSwr, 'Forme/Image', 'façonner',
      "Verbe forme II yuṣawwiru : action intensive de donner forme. La racine ṣ-w-r porte l'image du modelage artistique — Dieu façonne attentivement chaque être humain.")],
    [5,  'rhm', buildAxes(conceptsRhm, 'Utérus/Reproduction', 'utérus',
      "Pluriel défini al-arḥām : les utérus en tant qu'organes maternels où se forme l'enfant. Sens premier physique de la racine r-ḥ-m.",
      {
        'Miséricorde/Tendresse': "Concept dérivé de la racine — la miséricorde est étymologiquement liée à l'utérus (organe qui protège et nourrit). Ici le mot désigne l'organe physique, pas l'attribut moral.",
        'Parenté/Lien familial': "Concept dérivé de la racine. Hors sujet ici car le contexte est physique (façonnage dans l'utérus), pas relationnel."
      })],
    [6,  'kyf', buildAxes(conceptsKyf, 'Interrogation modale', 'comment',
      "Mot interrogatif kayfa employé en formule figée kayfa yashāʾu (« comme Il veut »). Le sens premier et unique de la racine.")],
    [7,  'shy', buildAxes(conceptsShy, 'Volonté', 'vouloir',
      "Verbe yashāʾu en formule fixe avec kayfa : exprime la liberté totale du vouloir divin. Forme verbale active.",
      {
        'Chose/Être': "Concept dérivé (la chose qu'on veut). Ici le verbe désigne l'acte de vouloir, pas l'objet voulu."
      })],
    [9,  'alh', buildAxes(conceptsAlh, 'Divinité', 'divinité',
      "Nom commun ilāh à la forme du complément (-a) après la négation absolue lā : aucune divinité comme catégorie générale.")],
    [12, 'ezz', buildAxes(conceptsEzz, 'Puissance/Gloire', 'puissant',
      "Forme adjectivale ʿazīz comme caractéristique permanente. L'article défini al- particularise : LE Puissant par excellence.")],
    [13, 'hkm', buildAxes(conceptsHkm, 'Sagesse', 'sage',
      "Forme adjectivale ḥakīm comme caractéristique permanente. L'article défini al- particularise : LE Sage par excellence.",
      {
        'Jugement/Décision': "Concept dérivé de la racine — le sage juge et décide. Ici l'attribut décrit la sagesse comme qualité possédée, pas l'acte juridique de juger."
      })],
  ];

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

  for (const k of ['swr', 'rhm', 'kyf', 'shy', 'alh', 'ezz', 'hkm']) {
    const wa = await db.from('word_analyses').select('id').eq('word_key', k).single();
    const wd = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', wa.data.id);
    console.log(`  • word_daily ${k} : ${wd.count} phrases ${wd.count > 0 ? '(SKIP)' : '(à créer)'}`);
  }

  console.log('\n═══════════════════════════════════════════════════');
  console.log('  VERSET 3:6 — TERMINÉ');
  console.log('═══════════════════════════════════════════════════');
}

run().catch(e => { console.error(e); process.exit(1); });
