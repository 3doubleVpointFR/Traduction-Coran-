// Pipeline S3:V56 — Corrections validateur
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 349;
const VA_ID = 710;

// Positions dans `words` (PAS dans segments) :
// pos 3 = kafara (kfr)
// pos 4 = ʿadhdhaba (edb verbe)
// pos 5 = ʿadhāb (edb nom)
// pos 6 = shadīd (shdd)
// pos 8 = dunyā (dny)
// pos 9 = ākhir (akhr)
// pos 13 = nāṣir (nsr)

async function run() {
  // 1. Corriger les positions VWA
  const updates = [
    { oldPos: 4, newPos: 3 },    // kfr
    { oldPos: 6, newPos: 4 },    // edb verbe (châtier)
    { oldPos: 7, newPos: 5 },    // edb nom (châtiment)
    { oldPos: 8, newPos: 6 },    // shdd
    { oldPos: 10, newPos: 8 },   // dny
    { oldPos: 12, newPos: 9 },   // akhr
    { oldPos: 17, newPos: 13 }   // nsr
  ];
  // Reload current VWA and rebuild to avoid conflicts
  const { data: vwaData } = await db.from('verse_word_analyses').select('*').eq('verse_id', VERSE_ID);
  console.log('Current VWA: ' + vwaData.length);

  // Fix concept wording: remove "concept" word in akhr proof_ctx
  for (const v of vwaData) {
    const map = updates.find(u => u.oldPos === v.position);
    if (!map) continue;
    const newPos = map.newPos;
    let newAxes = JSON.parse(JSON.stringify(v.analysis_axes));
    // Replace "concept" with "sens" in proof_ctx
    for (const key of Object.keys(newAxes.concepts)) {
      const c = newAxes.concepts[key];
      if (c.proof_ctx) {
        c.proof_ctx = c.proof_ctx.replace(/\bconcept parent\b/gi, 'sens parent').replace(/\bconcepts?\b/gi, (m) => {
          // Replace "concept" with "sens" but be careful with "concepts" -> "sens"
          return m.toLowerCase() === 'concepts' ? 'sens' : 'sens';
        });
      }
    }
    await db.from('verse_word_analyses').update({
      position: newPos,
      analysis_axes: newAxes
    }).eq('id', v.id);
    console.log('VWA pos ' + v.position + ' -> ' + newPos + ' (key=' + v.word_key + ')');
  }

  // 2. Corriger segments — rebuild avec nouvelles positions (utiliser position qui matche words)
  // Les segments doivent avoir position = position dans words quand c'est un mot important
  // mais dans l'index d'affichage ils sont dans l'ordre du verset.
  const newSegments = [
    { fr: 'quant à', pos: null, phon: 'fa-ammā', arabic: 'فَأَمَّا', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: 'ceux qui', pos: 'pronom', phon: 'al-ladhīna', arabic: 'ٱلَّذِينَ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
    { fr: 'ont rejeté', pos: 'verbe', phon: 'kafarū', arabic: 'كَفَرُوا۟', word_key: 'kfr', is_particle: false, sense_retenu: 'rejeter', position: 3 },
    { fr: 'Je les châtierai', pos: 'verbe', phon: 'fa-uʿadhdhibuhum', arabic: 'فَأُعَذِّبُهُمْ', word_key: 'edb', is_particle: false, sense_retenu: 'châtier', position: 4 },
    { fr: "d'un châtiment", pos: 'nom', phon: 'ʿadhāban', arabic: 'عَذَابًا', word_key: 'edb', is_particle: false, sense_retenu: 'châtiment', position: 5 },
    { fr: 'intense', pos: 'adjectif', phon: 'shadīdan', arabic: 'شَدِيدًا', word_key: 'shdd', is_particle: false, sense_retenu: 'intense', position: 6 },
    { fr: 'dans', pos: null, phon: 'fī', arabic: 'فِى', word_key: null, is_particle: true, sense_retenu: null, position: 7 },
    { fr: 'la vie proche', pos: 'nom', phon: 'ad-dunyā', arabic: 'ٱلدُّنْيَا', word_key: 'dny', is_particle: false, sense_retenu: 'la vie proche (dunyā)', position: 8 },
    { fr: 'et la vie dernière', pos: 'nom', phon: 'wa-l-ʾākhirah', arabic: 'وَٱلْـَٔاخِرَةِ', word_key: 'akhr', is_particle: false, sense_retenu: 'al-ākhirah', position: 9 },
    { fr: 'et ne', pos: null, phon: 'wa-mā', arabic: 'وَمَا', word_key: null, is_particle: true, sense_retenu: null, position: 10 },
    { fr: 'à eux', pos: null, phon: 'lahum', arabic: 'لَهُم', word_key: null, is_particle: true, sense_retenu: null, position: 11 },
    { fr: 'parmi', pos: null, phon: 'min', arabic: 'مِّن', word_key: null, is_particle: true, sense_retenu: null, position: 12 },
    { fr: 'de secoureurs', pos: 'nom', phon: 'nāṣirīn', arabic: 'نَّـٰصِرِينَ', word_key: 'nsr', is_particle: false, sense_retenu: 'secourir', position: 13 }
  ];

  // 3. Fix edb pos=5 segment: sense_retenu must match sense_chosen. Since VWA for pos=5 is 'châtiment',
  // segment sense_retenu stays 'châtiment'. But validateur compares segment.sense_retenu vs VWA.sense_chosen per word_key.
  // Actually multiple VWAs for same word_key need unique positions. Good — pos=4 -> châtier, pos=5 -> châtiment.

  await db.from('verse_analyses').update({ segments: newSegments }).eq('id', VA_ID);
  console.log('Segments mis à jour: ' + newSegments.length);

  // 4. Ajouter phrases du quotidien pour akhr (aid=653) - sens retenu "al-ākhirah" / "la vie dernière"
  const akhrDaily = [
    { analysis_id: 653, sense: 'la vie dernière', phrase: "Il pense souvent à la vie dernière.", display_order: 1 },
    { analysis_id: 653, sense: 'la vie dernière', phrase: "Sa conduite est guidée par la vie dernière.", display_order: 2 },
    { analysis_id: 653, sense: 'la vie dernière', phrase: "Beaucoup oublient la vie dernière dans leur course quotidienne.", display_order: 3 }
  ];
  const { data: existingDaily } = await db.from('word_daily').select('*').eq('analysis_id', 653);
  if (!existingDaily?.length) {
    const { error } = await db.from('word_daily').insert(akhrDaily);
    if (error) console.log('Erreur daily akhr:', error.message);
    else console.log('Phrases quotidien akhr: ' + akhrDaily.length + ' insérées');
  } else {
    console.log('Phrases akhr déjà existantes: skip');
  }

  console.log('\n=== FIX TERMINÉ ===');
}

run().catch(e => { console.error(e); process.exit(1); });
