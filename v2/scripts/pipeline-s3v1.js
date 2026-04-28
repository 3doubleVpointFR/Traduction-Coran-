/**
 * Pipeline maison V3 — Sourate 3, Verset 1 (الم)
 *
 * Cas spécial : ḥurūf muqaṭṭaʿāt (« lettres mystérieuses »).
 * Pas de racine, pas de mot au sens classique.
 *
 * - Étape 2 : SKIP (aucune racine)
 * - Étape 3 : SKIP (aucun concept)
 * - Étape 4 : translittération + démarche explicative
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VID = 294;

const TRANSLATION_ARAB = "Alif, Lām, Mīm.";
const FULL_TRANSLATION = "Alif, Lâm, Mîm."; // Hamidullah

const SEGMENTS = [
  {
    fr: "Alif, Lām, Mīm",
    pos: "INL",
    phon: "Alif Lām Mīm",
    arabic: "الٓمٓ",
    position: 1,
    word_key: null,
    is_particle: false,
    sense_retenu: null
  }
];

const TRANSLATION_EXPLANATION = `§DEMARCHE§

La sourate 3 (Āl ʿImrān) s'ouvre — comme 28 autres sourates du Coran — par des **lettres isolées** (ḥurūf muqaṭṭaʿāt). Ces lettres sont prononcées une par une, sans former de mot, et leur signification précise n'est pas explicitée par le texte coranique. Le verset 1 énonce trois lettres : Alif, Lām, Mīm — la même séquence ouvre aussi les sourates 2, 29, 30, 31 et 32.

**Alif Lām Mīm** (ا ل م) — trois lettres de l'alphabet arabe énoncées séparément, chacune avec une voyelle longue de prolongation (madda). Ce ne sont pas des mots, ne portent pas de racine sémantique, et n'admettent pas d'analyse grammaticale au sens habituel. Le texte arabe les présente comme un signal linguistique brut : trois sons à proférer tels quels.

Dans la tradition exégétique, plusieurs hypothèses ont été avancées sans qu'aucune ne fasse consensus : abréviations de noms divins, marqueurs structurels du Coran, signaux phonétiques d'attention, ou simplement éléments dont la signification appartient au mystère divin. Le Coran lui-même mentionne qu'il contient des « versets clairs » (muḥkamāt) et d'autres « ambigus » (mutashābihāt) — ces lettres relèvent vraisemblablement de la seconde catégorie. La traduction se contente donc de **translittérer** sans interpréter.

§JUSTIFICATION§

**Alif, Lām, Mīm** — Le choix retenu est la **translittération directe** des trois lettres en alphabet latin avec diacritiques (ā long, ī long). Les noms français des lettres arabes n'existent pas en français standard, et toute « traduction » de leur signification serait une interprétation non garantie par le texte. La translittération préserve le caractère phonétique brut du verset (trois sons à proférer) sans imposer de signification. Les alternatives écartées :
- « A.L.M. » (initiales en lettres latines isolées) : écarté car efface la distinction entre les noms des lettres arabes (Alif n'est pas A, Lām n'est pas L, Mīm n'est pas M) et leur valeur sonore.
- « Alif Lam Mim » (sans diacritiques) : écarté pour préserver la précision phonétique (les voyelles longues distinguent Lām de Lam et Mīm de Mim).
- Toute traduction interprétative (« Je suis Allah, Je sais », « Mille, cent, quarante »...) : écartée car ces interprétations sont des hypothèses exégétiques, non des lectures textuelles.

§CRITIQUE§

**Alif, Lām, Mīm vs « Alif, Lâm, Mîm »** : Hamidullah utilise l'accent circonflexe (â, î) au lieu du macron (ā, ī) pour marquer la voyelle longue arabe. Convention typographique différente sans incidence sur le sens — les deux sont des conventions valides pour translittérer la madda arabe. Notre choix du macron suit la convention universitaire internationale (ALA-LC, DIN 31635), Hamidullah suit une convention francisée plus ancienne. La prononciation visée est identique.`;

async function run() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  PIPELINE MAISON V3 — Sourate 3, Verset 1 (الم)');
  console.log('═══════════════════════════════════════════════════\n');

  console.log('Étape 1 — segments : 1 segment (lettres isolées INL)');
  console.log('Étape 2 — SKIP (aucune racine)');
  console.log('Étape 3 — SKIP (aucun concept)');
  console.log('Étape 4 — traduction + démarche\n');

  // Vérifier si verse_analyses existe déjà
  const { data: existing } = await db.from('verse_analyses').select('verse_id').eq('verse_id', VID).maybeSingle();

  if (existing) {
    // Update
    const { error } = await db.from('verse_analyses').update({
      translation_arab: TRANSLATION_ARAB,
      full_translation: FULL_TRANSLATION,
      segments: SEGMENTS,
      translation_explanation: TRANSLATION_EXPLANATION,
    }).eq('verse_id', VID);
    if (error) throw error;
    console.log('✓ verse_analyses mise à jour');
  } else {
    // Insert
    const { error } = await db.from('verse_analyses').insert({
      verse_id: VID,
      translation_arab: TRANSLATION_ARAB,
      full_translation: FULL_TRANSLATION,
      segments: SEGMENTS,
      translation_explanation: TRANSLATION_EXPLANATION,
    });
    if (error) throw error;
    console.log('✓ verse_analyses créée');
  }

  // Pas de VWA à créer (aucun mot avec word_key)
  // Pas de word_daily à créer (aucune racine)

  console.log('\n═══════════════════════════════════════════════════');
  console.log('  VERSET 3:1 — TERMINÉ');
  console.log('═══════════════════════════════════════════════════');
  console.log('  Traduction : "' + TRANSLATION_ARAB + '"');
  console.log('  Hamidullah : "' + FULL_TRANSLATION + '"');
  console.log('  Segments   : 1 (lettres isolées)');
  console.log('  VWA        : 0 (pas de mot avec racine)');
  console.log('  word_daily : 0 (pas de racine)');
}

run().catch(e => { console.error(e); process.exit(1); });
