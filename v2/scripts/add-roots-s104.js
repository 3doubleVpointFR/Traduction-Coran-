// Script: add-roots-s104.js
// Creates word_analyses roots and word_meanings for surah 104 (hmz, nbv)
// Also fixes verse_analyses verse_id=6183 segments_step1 truncated root

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// ─── 1. word_analyses rows ───────────────────────────────────────────────────

const roots = [
  {
    word_key: 'hmz',
    root_ar: 'ه م ز',
    root_phon: 'h-m-z',
    total_occurrences: 2,
    analysis_step: 'senses_done',
  },
  {
    word_key: 'nbv',
    root_ar: 'ن ب ذ',
    root_phon: 'n-b-dh',
    total_occurrences: 10,
    analysis_step: 'senses_done',
  },
];

// ─── 2. word_meanings for hmz ────────────────────────────────────────────────

const hmzMeanings = [
  // Pression/Écrasement
  { sense: 'presser',    description: 'Exercer une force pour comprimer un objet dans la main.',           display_order: 1  },
  { sense: 'serrer',     description: 'Maintenir fermement en exerçant une pression continue.',             display_order: 2  },
  { sense: 'pincer',     description: 'Presser entre deux doigts pour saisir ou faire mal.',               display_order: 3  },
  { sense: 'comprimer',  description: 'Réduire le volume d\'une chose par pression.',                      display_order: 4  },
  // Impulsion/Aiguillon
  { sense: 'pousser',    description: 'Exercer une force pour déplacer quelqu\'un.',                       display_order: 5  },
  { sense: 'repousser',  description: 'Pousser en arrière, éloigner par la force.',                        display_order: 6  },
  { sense: 'aiguillonner', description: 'Piquer avec un instrument pointu pour faire avancer.',            display_order: 7  },
  { sense: 'éperonner',  description: 'Exciter un animal à avancer avec l\'éperon.',                       display_order: 8  },
  // Frappe/Morsure
  { sense: 'frapper',    description: 'Donner un coup à quelqu\'un.',                                      display_order: 9  },
  { sense: 'mordre',     description: 'Saisir et serrer avec les dents.',                                  display_order: 10 },
  { sense: 'battre',     description: 'Donner des coups répétés.',                                         display_order: 11 },
  // Dénigrement/Atteinte
  { sense: 'blâmer',     description: 'Exprimer sa désapprobation envers quelqu\'un.',                     display_order: 12 },
  { sense: 'reprocher',  description: 'Adresser à quelqu\'un un grief sur son comportement.',              display_order: 13 },
  { sense: 'critiquer',  description: 'Porter un jugement négatif sur les actions de quelqu\'un.',         display_order: 14 },
  { sense: 'dénigrer',   description: 'Attaquer la réputation de quelqu\'un par des propos négatifs.',     display_order: 15 },
  { sense: 'médire',     description: 'Dire du mal de quelqu\'un en son absence.',                         display_order: 16 },
  { sense: 'diffamer',   description: 'Attaquer publiquement l\'honneur de quelqu\'un.',                   display_order: 17 },
  { sense: 'calomnier',  description: 'Accuser faussement quelqu\'un pour nuire à sa réputation.',         display_order: 18 },
  // Signal/Signe
  { sense: 'faire signe',   description: 'Communiquer par un geste discret de l\'œil, de la tête ou de la bouche.', display_order: 19 },
  { sense: 'signe moqueur', description: 'Geste discret exprimant la moquerie ou le mépris.',              display_order: 20 },
  // Prononciation/Son
  { sense: 'son guttural',     description: 'Son produit par la compression de la gorge, la hamza.',       display_order: 21 },
  { sense: 'la lettre hamza',  description: 'La lettre arabe nommée d\'après le son de pression qu\'elle produit.', display_order: 22 },
];

// ─── 3. word_meanings for nbv ────────────────────────────────────────────────

const nbvMeanings = [
  // Rejet/Expulsion
  { sense: 'jeter',         description: 'Lancer un objet loin de soi comme sans valeur.',                  display_order: 1  },
  { sense: 'rejeter',       description: 'Refuser et éloigner comme sans valeur.',                          display_order: 2  },
  { sense: 'abandonner',    description: 'Laisser quelque chose ou quelqu\'un sans s\'en occuper.',         display_order: 3  },
  { sense: 'expulser',      description: 'Chasser en jetant dehors.',                                       display_order: 4  },
  { sense: 'enfant trouvé', description: 'Un enfant jeté par sa mère, recueilli par autrui.',               display_order: 5  },
  // Rupture/Dénonciation
  { sense: 'rompre un pacte',      description: 'Mettre fin à un accord de manière délibérée.',            display_order: 6  },
  { sense: 'dissoudre un traité',  description: 'Annuler un engagement formel entre parties.',             display_order: 7  },
  { sense: 'déclarer la guerre',   description: 'Annoncer ouvertement la fin de la paix.',                 display_order: 8  },
  { sense: 'négliger',             description: 'Ne pas respecter un engagement, le laisser sans suite.',  display_order: 9  },
  // Retrait/Isolement
  { sense: 'se retirer', description: 'S\'éloigner des autres de son propre gré.',                         display_order: 10 },
  { sense: 's\'isoler',  description: 'Se mettre à l\'écart du groupe.',                                   display_order: 11 },
  { sense: 's\'écarter', description: 'Prendre de la distance avec les autres.',                           display_order: 12 },
  // Fermentation/Transformation
  { sense: 'fermenter', description: 'Subir une transformation par fermentation dans l\'eau.',             display_order: 13 },
  { sense: 'infuser',   description: 'Laisser tremper pour extraire une substance.',                       display_order: 14 },
  { sense: 'nabīdh',    description: 'Boisson obtenue par fermentation de dattes ou raisins.',             display_order: 15 },
  // Insignifiance/Quantité
  { sense: 'peu',     description: 'Une très petite quantité, négligeable.',                               display_order: 16 },
  { sense: 'rebuts',  description: 'Les personnes ou choses considérées comme sans valeur.',               display_order: 17 },
];

// ─── helpers ─────────────────────────────────────────────────────────────────

async function upsertRoot(root) {
  const { data, error } = await supabase
    .from('word_analyses')
    .upsert(root, { onConflict: 'word_key' })
    .select('id, word_key');
  if (error) throw new Error(`upsert word_analyses (${root.word_key}): ${error.message}`);
  console.log(`  word_analyses upserted: word_key=${data[0].word_key}  id=${data[0].id}`);
  return data[0].id;
}

async function insertMeanings(wordAnalysisId, meanings) {
  const rows = meanings.map(m => ({
    analysis_id: wordAnalysisId,
    meaning_type: 'etymology',
    sense: m.sense,
    description: m.description,
    display_order: m.display_order,
  }));

  const { data, error } = await supabase
    .from('word_meanings')
    .insert(rows)
    .select('id, sense, display_order');
  if (error) throw new Error(`insert word_meanings (analysis_id=${wordAnalysisId}): ${error.message}`);
  console.log(`  word_meanings inserted: ${data.length} rows`);
  data.forEach(r => console.log(`    id=${r.id}  order=${r.display_order}  sense="${r.sense}"`));
  return data;
}

async function fixVerseSegments() {
  // Fetch current segments_step1 for verse_id=6183
  const { data: va, error: fetchErr } = await supabase
    .from('verse_analyses')
    .select('id, segments_step1')
    .eq('verse_id', 6183)
    .single();

  if (fetchErr) throw new Error(`fetch verse_analyses: ${fetchErr.message}`);
  if (!va) throw new Error('verse_id=6183 not found in verse_analyses');

  console.log(`\nverse_analyses id=${va.id} found for verse_id=6183`);

  let segments = va.segments_step1;

  if (typeof segments === 'string') {
    segments = JSON.parse(segments);
  }

  // Find and fix the truncated root
  let fixed = 0;
  for (const seg of segments) {
    if (seg.word_key === 'nb') {
      console.log(`  Fixing segment: word_key "nb" -> "nbv",  root "ن ب" -> "ن ب ذ"`);
      seg.word_key = 'nbv';
      seg.root = 'ن ب ذ';
      fixed++;
    }
  }

  if (fixed === 0) {
    console.log('  No segment with word_key="nb" found — checking all word_keys:');
    segments.forEach(s => console.log(`    word_key="${s.word_key}"  root="${s.root}"`));
  }

  const { error: updateErr } = await supabase
    .from('verse_analyses')
    .update({ segments_step1: segments })
    .eq('id', va.id);

  if (updateErr) throw new Error(`update verse_analyses: ${updateErr.message}`);
  console.log(`  segments_step1 updated (${fixed} segment(s) fixed)`);
}

// ─── main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== add-roots-s104.js ===\n');

  // Insert/upsert word_analyses
  console.log('--- Inserting root: hmz ---');
  const hmzId = await upsertRoot(roots[0]);

  console.log('\n--- Inserting root: nbv ---');
  const nbvId = await upsertRoot(roots[1]);

  // Insert word_meanings
  console.log('\n--- Inserting meanings for hmz ---');
  await insertMeanings(hmzId, hmzMeanings);

  console.log('\n--- Inserting meanings for nbv ---');
  await insertMeanings(nbvId, nbvMeanings);

  // Fix verse_analyses
  console.log('\n--- Fixing verse_analyses verse_id=6183 ---');
  await fixVerseSegments();

  // Verification query
  console.log('\n=== Verification ===');
  const { data: verifyRoots } = await supabase
    .from('word_analyses')
    .select('id, word_key, root_ar, total_occurrences, analysis_step')
    .in('word_key', ['hmz', 'nbv']);
  console.log('word_analyses:', JSON.stringify(verifyRoots, null, 2));

  const { data: verifyMeanings } = await supabase
    .from('word_meanings')
    .select('id, analysis_id, sense, display_order')
    .in('analysis_id', [hmzId, nbvId])
    .order('analysis_id')
    .order('display_order');
  console.log(`word_meanings total: ${verifyMeanings.length} rows`);
  verifyMeanings.forEach(m =>
    console.log(`  id=${m.id}  analysis_id=${m.analysis_id}  order=${m.display_order}  sense="${m.sense}"`)
  );

  console.log('\nDone.');
}

main().catch(err => { console.error('FATAL:', err); process.exit(1); });
