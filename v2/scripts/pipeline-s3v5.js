/**
 * Pipeline maison V3 — Sourate 3, Verset 5
 *
 * Verset : إِنَّ ٱللَّهَ لَا يَخْفَىٰ عَلَيْهِ شَىْءٌ فِى ٱلْأَرْضِ وَلَا فِى ٱلسَّمَآءِ
 *
 * 11 mots, 5 mots avec racine : alh, xfy, shy, ard, smw.
 *
 * Étape 2 : ajout de "échapper" au concept Dissimulation/Secret de xfy.
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VID = 298;

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
  { fr: 'certes',     pos: 'ACC',  phon: 'inna',         arabic: 'إِنَّ',           position: 1,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'Dieu',       pos: 'PN',   phon: 'allāha',        arabic: 'ٱللَّهَ',         position: 2,  word_key: 'alh', is_particle: false, sense_retenu: 'Dieu' },
  { fr: 'ne',         pos: 'NEG',  phon: 'lā',            arabic: 'لَا',             position: 3,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'échapper',   pos: 'V',    phon: 'yakhfā',        arabic: 'يَخْفَىٰ',         position: 4,  word_key: 'xfy', is_particle: false, sense_retenu: 'échapper' },
  { fr: 'à Lui',      pos: 'P',    phon: 'ʿalayhi',       arabic: 'عَلَيْهِ',        position: 5,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'chose',      pos: 'N',    phon: 'shayʾun',       arabic: 'شَىْءٌ',          position: 6,  word_key: 'shy', is_particle: false, sense_retenu: 'chose' },
  { fr: 'sur',        pos: 'P',    phon: 'fī',            arabic: 'فِى',             position: 7,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'terre',      pos: 'N',    phon: 'al-arḍi',       arabic: 'ٱلْأَرْضِ',       position: 8,  word_key: 'ard', is_particle: false, sense_retenu: 'terre' },
  { fr: 'ni',         pos: 'NEG',  phon: 'wa-lā',         arabic: 'وَلَا',           position: 9,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'dans',       pos: 'P',    phon: 'fī',            arabic: 'فِى',             position: 10, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'ciel',       pos: 'N',    phon: 'as-samāʾi',     arabic: 'ٱلسَّمَآءِ',      position: 11, word_key: 'smw', is_particle: false, sense_retenu: 'ciel' },
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

const TRANSLATION_ARAB = "Certes, rien n'échappe à Dieu sur la terre ni dans le ciel.";
const FULL_TRANSLATION = "Rien, vraiment, n'est caché d'Allah, de ce qui existe sur la terre et dans le ciel.";

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Après avoir mentionné au verset 4 que Dieu est puissant et détenteur de la rétribution, le verset 5 développe l'idée de Sa connaissance totale : rien ne peut Lui échapper, ni sur la terre ni dans le ciel. C'est l'argument qui justifie la justice rétributive du verset précédent — Dieu ne peut juger que parce qu'Il sait tout.

**inna** (certes) est un petit mot d'emphase qui annonce une affirmation forte. Il introduit la phrase entière en lui donnant du poids.

**allāha** (Dieu) est le nom propre de la divinité. Il est ici à la forme du complément (terminaison -a) car régi par la particule emphatique inna qui place toujours son sujet à cette forme.

**lā yakhfā** (n'échappe pas) — lā est un petit mot de négation (« ne... pas »), et yakhfā est un verbe de la racine kh-f-y qui veut dire « être caché, dissimulé, imperceptible ». La forme du verbe (forme I, action en cours) dit que l'action est habituelle ou en cours. Le Lane's Lexicon donne pour cette racine : « être imperceptible, à peine perçu, caché ». Avec lā devant, l'expression dit « rien n'est imperceptible / rien n'échappe ».

**ʿalayhi** (à Lui) est composé de la préposition ʿalā (« sur ») et du pronom -hi (« lui »). L'expression mā yakhfā ʿalayhi se traduit naturellement par « rien ne Lui échappe » — comme on dirait en français « rien ne lui échappe » quand on parle de quelqu'un qui voit ou sait tout.

**shayʾun** (une chose) est un mot de la racine sh-y-ʾ qui veut dire « chose, être, quelque chose ». La forme indéfinie (terminaison -un) signifie « une chose quelconque, n'importe quelle chose ». C'est le sujet de la négation : « aucune chose n'échappe ».

**fī l-arḍi** (sur la terre) — fī est une préposition qui veut dire « dans, sur », et al-arḍi est de la racine ʾ-r-ḍ qui veut dire « terre, sol, pays ». Avec l'article défini al- (« la »), on désigne LA terre — l'ensemble de la surface terrestre.

**wa-lā fī s-samāʾi** (ni dans le ciel) — wa-lā est la conjonction wa- (« et ») suivie de la négation lā (« ne... pas »), et al-samāʾ est de la racine s-m-w qui veut dire premièrement « être haut, élever », d'où le sens dérivé « ce qui est en hauteur, ciel, voûte céleste ». Le ciel est étymologiquement « ce qui se trouve au-dessus » — ce qui couvre la terre.

§JUSTIFICATION§

**Dieu** — Le sens retenu est « Dieu » de l'axe Divinité. Le mot « Dieu » est le nom français usuel pour la divinité unique.

**échapper** — Le sens retenu est « échapper » de l'axe Dissimulation/Secret. Le mot « échapper » est choisi car il rend naturellement en français l'idée que rien ne reste invisible/imperceptible à quelqu'un qui sait tout. L'alternative « être caché » est écartée car la tournure « rien n'est caché à Dieu » sonne moins fluide en français que « rien ne Lui échappe ». L'alternative « être invisible » est écartée car elle insiste sur la visibilité physique, alors que le sens couvre toute forme d'imperceptibilité (visible, inconnue, secrète).

**chose** — Le sens retenu est « chose » de l'axe Chose/Être. Le mot « chose » est choisi car il rend directement le sens neutre et général de shayʾ. L'alternative « être » est écartée car elle suggère uniquement les êtres vivants, alors que shayʾ couvre tout — vivant, objet, événement, idée.

**terre** — Le sens retenu est « terre » de l'axe Terre/Sol. Le mot « terre » est choisi car il est le mot français usuel pour désigner la planète et son sol. L'alternative « sol » est écartée car elle insiste sur la surface, alors que al-arḍ désigne la terre comme totalité.

**ciel** — Le sens retenu est « ciel » de l'axe Ciel/Ce qui couvre. Le mot « ciel » est choisi car il est le mot français usuel pour samāʾ, qui désigne ce qui se trouve en hauteur au-dessus de la terre. L'alternative « cieux » au pluriel est écartée car le mot arabe ici est au singulier (al-samāʾ).

§CRITIQUE§

**Certes, rien n'échappe à Dieu vs « Rien, vraiment, n'est caché d'Allah »** : Hamidullah déplace l'emphase « vraiment » au milieu de la phrase et utilise « caché de » au lieu de « échappe à ». La structure arabe inna allāha lā yakhfā ʿalayhi met inna (certes) en tête comme emphase initiale, puis enchaîne. Notre traduction garde cette structure d'emphase initiale (« Certes ») plus naturelle en français. Et « caché de Dieu » est moins fluide que « échappe à Dieu » — l'idée principale est qu'aucune chose ne reste imperceptible à Dieu, ce que « échapper » rend plus naturellement.

**de ce qui existe sur la terre et dans le ciel vs « sur la terre ni dans le ciel »** : Hamidullah ajoute la périphrase « de ce qui existe » qui n'est pas dans le texte arabe. Le mot shayʾun (« une chose ») est déjà en début de phrase comme sujet de la négation — pas besoin de répéter « ce qui existe ». Notre traduction garde la structure simple : « rien... sur la terre ni dans le ciel ». Et la conjonction wa-lā = « ni » en français pour préserver la structure double négative arabe.`;

async function run() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  PIPELINE MAISON V3 — Sourate 3, Verset 5');
  console.log('═══════════════════════════════════════════════════\n');

  console.log('Étape 2 — ajout ciblé');
  await addSense('xfy', 'Dissimulation/Secret', 'échapper',
    "Sens contextualisé du verbe forme I yakhfā (être imperceptible) : ce qui ne se laisse pas saisir par celui qui observe. En français contemporain, l'expression « rien ne Lui échappe » rend naturellement cette imperceptibilité.");

  console.log('\nÉtape 3 — VWA analysis_axes');
  const conceptsAlh = await loadConcepts('alh');
  const conceptsXfy = await loadConcepts('xfy');
  const conceptsShy = await loadConcepts('shy');
  const conceptsArd = await loadConcepts('ard');
  const conceptsSmw = await loadConcepts('smw');

  const VWA_LIST = [
    [2,  'alh', buildAxes(conceptsAlh, 'Divinité', 'Dieu',
      "Nom propre Allāh comme sujet régi par inna (forme du complément). Le verset porte sur la connaissance totale de Dieu.")],
    [4,  'xfy', buildAxes(conceptsXfy, 'Dissimulation/Secret', 'échapper',
      "Verbe yakhfā forme I, action en cours/habituelle. La négation lā devant : aucune chose ne reste imperceptible. Sens d'imperceptibilité totale qui rend mieux par « échapper ».")],
    [6,  'shy', buildAxes(conceptsShy, 'Chose/Être', 'chose',
      "Nom indéfini shayʾun, sujet de la négation : « aucune chose ». Le sens neutre et général « chose » couvre tout (objet, événement, idée).",
      {
        'Volonté': "Concept lié à mashīʾa (volonté). Hors sujet ici car shayʾ désigne l'objet/réalité, pas l'acte de vouloir.",
        'Néant': "Sens de « rien » (avec négation). Ici la négation est portée par lā, pas par shayʾ lui-même."
      })],
    [8,  'ard', buildAxes(conceptsArd, 'Terre/Sol', 'terre',
      "Nom défini al-arḍ : la terre dans son ensemble. Le verset oppose la terre au ciel — totalité de la création.")],
    [11, 'smw', buildAxes(conceptsSmw, 'Ciel/Ce qui couvre', 'ciel',
      "Nom défini al-samāʾ. La racine s-m-w désigne d'abord la hauteur ; le sens « ciel » est la spécialisation pour ce qui se trouve au-dessus de la terre.",
      {
        'Hauteur/Élévation': "Sens premier abstrait de la racine (être haut). Ici le mot prend le sens spécialisé « ciel » comme objet concret au-dessus.",
        'Nom/Identification': "Autre branche de la racine (nommer). Hors sujet ici."
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

  for (const k of ['alh', 'xfy', 'shy', 'ard', 'smw']) {
    const wa = await db.from('word_analyses').select('id').eq('word_key', k).single();
    const wd = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', wa.data.id);
    console.log(`  • word_daily ${k} : ${wd.count} phrases ${wd.count > 0 ? '(SKIP)' : '(à créer)'}`);
  }

  console.log('\n═══════════════════════════════════════════════════');
  console.log('  VERSET 3:5 — TERMINÉ');
  console.log('═══════════════════════════════════════════════════');
}

run().catch(e => { console.error(e); process.exit(1); });
