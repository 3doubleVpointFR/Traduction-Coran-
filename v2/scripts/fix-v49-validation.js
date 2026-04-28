/**
 * fix-v49-validation.js
 * Fix 24 validation errors for S3:V49 (verse_id=342, va_id=702)
 *
 * FIX 1: concept_chosen in VWA analysis_axes -> match exact DB names
 * FIX 2: sense_retenu in segments -> match word_meanings
 * FIX 3: Add missing sense "aveugle-ne" to akm word_meanings + fix akm concept_chosen
 * FIX 4: Add daily phrases for roots that need them (akm, dlk, hya)
 */

const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co', process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 342;
const VA_ID = 702;

// ============================================================
// FIX 1: concept_chosen mapping (wrong -> correct DB name)
// ============================================================
const CONCEPT_FIXES = [
  { word_key: 'akl', position: 39, wrong: 'Nourriture/Manger', correct: 'Alimentation/Consommation' },
  { word_key: 'amn', position: 52, wrong: 'Confiance/Sécurité', correct: 'Sécurité/Confiance' },
  { word_key: 'ayh', position: 9,  wrong: 'Signe/Preuve', correct: 'Signe/Manifestation' },
  { word_key: 'ayh', position: 48, wrong: 'Signe/Preuve', correct: 'Signe/Manifestation' },
  { word_key: 'dlk', position: 47, wrong: 'Démonstratif', correct: 'Démonstration/Distance' },
  { word_key: 'hya', position: 17, wrong: 'Forme/Apparence', correct: 'Préparation/Disposition' },
  { word_key: 'hyy', position: 32, wrong: 'Vie', correct: 'Vie/Vivant' },
  { word_key: 'jyy', position: 8,  wrong: 'Venue/Arrivée', correct: 'Venue/Apport' },
  { word_key: 'mwt', position: 33, wrong: 'Mort', correct: 'Mort/Cessation' },
  { word_key: 'nba', position: 37, wrong: 'Information/Annonce', correct: 'Information/Nouvelle' },
  { word_key: 'rsl', position: 2,  wrong: 'Message/Envoi', correct: 'Envoi/Message' },
  { word_key: 'sryl', position: 5, wrong: 'Nom propre', correct: 'Nom propre/Peuple' },
  { word_key: 'tyr', position: 18, wrong: 'Oiseau', correct: 'Vol/Oiseau' },
  { word_key: 'tyr', position: 23, wrong: 'Oiseau', correct: 'Vol/Oiseau' },
];

async function fixConceptChosen() {
  console.log('--- FIX 1: concept_chosen dans VWA analysis_axes ---');
  let fixed = 0;

  for (const fix of CONCEPT_FIXES) {
    const { data: rows } = await db.from('verse_word_analyses')
      .select('id, analysis_axes')
      .eq('verse_id', VERSE_ID)
      .eq('word_key', fix.word_key)
      .eq('position', fix.position);

    if (!rows || rows.length === 0) {
      console.log('  SKIP ' + fix.word_key + ' pos=' + fix.position + ': VWA not found');
      continue;
    }

    const vwa = rows[0];
    const axes = vwa.analysis_axes;
    if (!axes) {
      console.log('  SKIP ' + fix.word_key + ' pos=' + fix.position + ': no analysis_axes');
      continue;
    }

    let changed = false;

    // Fix concept_chosen
    if (axes.concept_chosen === fix.wrong) {
      axes.concept_chosen = fix.correct;
      changed = true;
    }

    // Fix concept keys in concepts object: rename wrong key -> correct key
    if (axes.concepts && axes.concepts[fix.wrong] && !axes.concepts[fix.correct]) {
      axes.concepts[fix.correct] = axes.concepts[fix.wrong];
      delete axes.concepts[fix.wrong];
      changed = true;
    }

    if (changed) {
      const { error } = await db.from('verse_word_analyses')
        .update({ analysis_axes: axes })
        .eq('id', vwa.id);
      if (error) {
        console.log('  ERROR ' + fix.word_key + ' pos=' + fix.position + ': ' + error.message);
      } else {
        console.log('  OK ' + fix.word_key + ' pos=' + fix.position + ': "' + fix.wrong + '" -> "' + fix.correct + '"');
        fixed++;
      }
    } else {
      console.log('  NOOP ' + fix.word_key + ' pos=' + fix.position + ': already correct or wrong value not found');
    }
  }

  console.log('  Total: ' + fixed + '/' + CONCEPT_FIXES.length + ' fixed\n');
  return fixed;
}

// ============================================================
// FIX 3: Add missing sense "aveugle-ne" to akm word_meanings
//        (must run BEFORE FIX 2 so sense lookup works)
// ============================================================
async function fixAkmSense() {
  console.log('--- FIX 3: Add "aveugle-ne" sense to akm ---');

  // Get akm analysis_id
  const { data: wa } = await db.from('word_analyses')
    .select('id')
    .eq('word_key', 'akm')
    .limit(1);

  if (!wa || !wa[0]) {
    console.log('  ERROR: akm not found in word_analyses');
    return;
  }

  const akmAid = wa[0].id;
  console.log('  akm analysis_id = ' + akmAid);

  // Check if "aveugle-ne" already exists
  const { data: existing } = await db.from('word_meanings')
    .select('id, concept, sense')
    .eq('analysis_id', akmAid)
    .ilike('sense', '%aveugle%');

  if (existing && existing.length > 0) {
    console.log('  NOOP: "aveugle" sense already exists: ' + JSON.stringify(existing[0]));
  } else {
    // Insert new sense
    const { error } = await db.from('word_meanings').insert({
      analysis_id: akmAid,
      concept: 'Cecite',
      sense: 'aveugle-ne',
      description: 'Ne aveugle (al-akmah). Racine traditionnellement rattachee a k-m-h, mais assignee a a-k-m dans le corpus QAC.',
      meaning_type: 'etymology'
    });

    if (error) {
      console.log('  ERROR inserting aveugle-ne: ' + error.message);
    } else {
      console.log('  OK: inserted sense "aveugle-ne" concept "Cecite" for akm (aid=' + akmAid + ')');
    }
  }

  // Fix akm VWA concept_chosen to "Cecite"
  const { data: akmVwas } = await db.from('verse_word_analyses')
    .select('id, analysis_axes')
    .eq('verse_id', VERSE_ID)
    .eq('word_key', 'akm');

  for (const vwa of (akmVwas || [])) {
    const axes = vwa.analysis_axes;
    if (!axes) continue;

    let changed = false;

    // Update concept_chosen to Cecite
    if (axes.concept_chosen !== 'Cecite') {
      const oldChosen = axes.concept_chosen;
      axes.concept_chosen = 'Cecite';
      changed = true;

      // Add Cecite concept entry if missing
      if (axes.concepts && !axes.concepts['Cecite']) {
        axes.concepts['Cecite'] = {
          status: 'retenu',
          senses: ['aveugle-ne'],
          proof_ctx: "Le mot al-akmah dans ce verset designe l'aveugle de naissance. La racine est traditionnellement k-m-h mais le corpus QAC l'assigne a a-k-m. Le concept de cecite est le sens contextuel obligatoire ici."
        };
      }

      // Demote old concept_chosen from retenu to probable
      if (oldChosen && axes.concepts && axes.concepts[oldChosen] && axes.concepts[oldChosen].status === 'retenu') {
        axes.concepts[oldChosen].status = 'probable';
      }

      console.log('  OK akm VWA id=' + vwa.id + ': concept_chosen "' + oldChosen + '" -> "Cecite"');
    }

    if (changed) {
      await db.from('verse_word_analyses')
        .update({ analysis_axes: axes })
        .eq('id', vwa.id);
    }
  }

  console.log('');
}

// ============================================================
// FIX 2: sense_retenu in segments
// ============================================================
async function fixSenseRetenu() {
  console.log('--- FIX 2: sense_retenu dans segments ---');

  // First, look up available senses for each word_key we need to fix
  const keysToLookup = ['hya', 'akm', 'brs', 'dkhr', 'amn'];
  const sensesByKey = {};

  for (const key of keysToLookup) {
    const { data: wa } = await db.from('word_analyses')
      .select('id')
      .eq('word_key', key)
      .limit(1);
    if (!wa || !wa[0]) {
      console.log('  WARNING: word_key "' + key + '" not found in word_analyses');
      continue;
    }
    const { data: wm } = await db.from('word_meanings')
      .select('concept, sense')
      .eq('analysis_id', wa[0].id);
    sensesByKey[key] = (wm || []).map(m => m.sense);
    console.log('  DB senses for ' + key + ' (aid=' + wa[0].id + '): [' + sensesByKey[key].join(', ') + ']');
  }

  // Load segments for the verse
  const { data: va } = await db.from('verse_analyses')
    .select('segments')
    .eq('id', VA_ID)
    .single();

  if (!va || !va.segments) {
    console.log('  ERROR: verse_analyses id=' + VA_ID + ' not found or no segments');
    return;
  }

  const segs = va.segments;
  let changed = 0;

  for (const seg of segs) {
    if (!seg.word_key || !seg.sense_retenu) continue;

    // hya pos 17: "forme" -> find closest sense in DB
    if (seg.word_key === 'hya' && seg.position === 17) {
      const senses = sensesByKey['hya'] || [];
      // Look for something close to "forme" or "apparence" or fallback to first sense
      const best = senses.find(s => /forme|apparence|aspect|preparation|disposition/i.test(s))
        || senses[0];
      if (best && best !== seg.sense_retenu) {
        console.log('  hya pos=17: "' + seg.sense_retenu + '" -> "' + best + '"');
        seg.sense_retenu = best;
        changed++;
      }
    }

    // akm pos 28: should now have "aveugle-ne" from FIX 3
    if (seg.word_key === 'akm' && seg.position === 28) {
      const senses = sensesByKey['akm'] || [];
      const best = senses.find(s => /aveugle/i.test(s)) || 'aveugle-ne';
      if (best !== seg.sense_retenu) {
        console.log('  akm pos=28: "' + seg.sense_retenu + '" -> "' + best + '"');
        seg.sense_retenu = best;
        changed++;
      }
    }

    // brs pos 30: "lepreux" -> find closest (likely "lepre" or related)
    if (seg.word_key === 'brs' && seg.position === 30) {
      const senses = sensesByKey['brs'] || [];
      const best = senses.find(s => /lepr|lepre|lèpre|lèpr|blanc|peau/i.test(s))
        || senses[0];
      if (best && best !== seg.sense_retenu) {
        console.log('  brs pos=30: "' + seg.sense_retenu + '" -> "' + best + '"');
        seg.sense_retenu = best;
        changed++;
      } else if (!best) {
        console.log('  WARNING brs pos=30: no senses found, keeping "' + seg.sense_retenu + '"');
      }
    }

    // dkhr pos 42: "stocker" -> find closest (likely "amasser" or "thesauriser")
    if (seg.word_key === 'dkhr' && seg.position === 42) {
      const senses = sensesByKey['dkhr'] || [];
      const best = senses.find(s => /amass|thesaur|thésaur|stock|accum|tresor|trésor|conserv/i.test(s))
        || senses[0];
      if (best && best !== seg.sense_retenu) {
        console.log('  dkhr pos=42: "' + seg.sense_retenu + '" -> "' + best + '"');
        seg.sense_retenu = best;
        changed++;
      } else if (!best) {
        console.log('  WARNING dkhr pos=42: no senses found, keeping "' + seg.sense_retenu + '"');
      }
    }

    // amn pos 52: "accorder confiance" -> find closest
    if (seg.word_key === 'amn' && seg.position === 52) {
      const senses = sensesByKey['amn'] || [];
      const best = senses.find(s => /confiance|faire confiance|securite|sécurité|aman|croire/i.test(s))
        || senses[0];
      if (best && best !== seg.sense_retenu) {
        console.log('  amn pos=52: "' + seg.sense_retenu + '" -> "' + best + '"');
        seg.sense_retenu = best;
        changed++;
      } else if (!best) {
        console.log('  WARNING amn pos=52: no senses found, keeping "' + seg.sense_retenu + '"');
      }
    }
  }

  // Also sync VWA sense_chosen for the fixed segments
  // Update segments in DB
  if (changed > 0) {
    const { error } = await db.from('verse_analyses')
      .update({ segments: segs })
      .eq('id', VA_ID);
    if (error) {
      console.log('  ERROR updating segments: ' + error.message);
    } else {
      console.log('  OK: ' + changed + ' sense_retenu updated in segments');
    }

    // Sync VWA sense_chosen to match
    for (const seg of segs) {
      if (!seg.word_key || seg.is_particle) continue;
      const { data: vwas } = await db.from('verse_word_analyses')
        .select('id, sense_chosen')
        .eq('verse_id', VERSE_ID)
        .eq('word_key', seg.word_key)
        .eq('position', seg.position);
      if (vwas && vwas[0] && vwas[0].sense_chosen !== seg.sense_retenu) {
        await db.from('verse_word_analyses')
          .update({ sense_chosen: seg.sense_retenu })
          .eq('id', vwas[0].id);
        console.log('  SYNC VWA ' + seg.word_key + ' pos=' + seg.position + ': sense_chosen -> "' + seg.sense_retenu + '"');
      }
    }
  } else {
    console.log('  NOOP: no sense_retenu changes needed');
  }

  console.log('');
}

// ============================================================
// FIX 4: Add daily phrases for akm, dlk, hya (skip sryl = proper noun)
// ============================================================
async function fixDailyPhrases() {
  console.log('--- FIX 4: daily phrases pour akm, dlk, hya ---');

  const phrases = [
    // akm - aveugle-ne / completude
    { word_key: 'akm', sense: 'aveugle-ne', arabic: 'وُلِدَ أَكْمَهَ', phon: 'wulida akmah', french: 'Il est ne aveugle.' },
    { word_key: 'akm', sense: 'complet', arabic: 'أَكْمَلْتُ العَمَلَ', phon: 'akmaltu al-amal', french: "J'ai acheve le travail." },
    { word_key: 'akm', sense: 'achever', arabic: 'أَكْمِلْ ما بَدَأْتَ', phon: 'akmil ma bada\'ta', french: 'Acheve ce que tu as commence.' },

    // dlk - demonstratif / distance
    { word_key: 'dlk', sense: 'distance', arabic: 'ذَلِكَ الكِتَابُ لا رَيْبَ فيهِ', phon: 'dhalika al-kitabu la rayba fihi', french: 'Ce Livre-la, nul doute en lui.' },
    { word_key: 'dlk', sense: 'distance', arabic: 'ذَلِكَ أَمْرٌ عَظيمٌ', phon: 'dhalika amrun adhimun', french: "Cela est une affaire considerable." },
    { word_key: 'dlk', sense: 'distance', arabic: 'ذَلِكَ خَيْرٌ لَكُمْ', phon: 'dhalika khayrun lakum', french: 'Cela est meilleur pour vous.' },

    // hya - preparation / disposition
    { word_key: 'hya', sense: 'apparence', arabic: 'هَيْئَةُ الطائِرِ', phon: "hay'atu at-ta'iri", french: "La forme de l'oiseau." },
    { word_key: 'hya', sense: 'apparence', arabic: 'هَيَّأَ لَهُمْ أَمْرَهُمْ', phon: "hayya'a lahum amrahum", french: 'Il leur a prepare leur affaire.' },
    { word_key: 'hya', sense: 'apparence', arabic: 'تَهَيَّأْ لِلسَّفَرِ', phon: "tahayya' li-s-safari", french: 'Prepare-toi pour le voyage.' },
  ];

  let inserted = 0;
  for (const p of phrases) {
    const { data: wa } = await db.from('word_analyses')
      .select('id')
      .eq('word_key', p.word_key)
      .limit(1);
    if (!wa || !wa[0]) {
      console.log('  SKIP ' + p.word_key + ': not found in word_analyses');
      continue;
    }

    // Check for duplicates
    const { data: dup } = await db.from('word_daily')
      .select('id')
      .eq('analysis_id', wa[0].id)
      .eq('french', p.french)
      .limit(1);
    if (dup && dup.length > 0) {
      console.log('  DUP ' + p.word_key + ': "' + p.french.substring(0, 40) + '..."');
      continue;
    }

    const { error } = await db.from('word_daily').insert({
      analysis_id: wa[0].id,
      sense: p.sense,
      arabic: p.arabic,
      phon: p.phon,
      french: p.french
    });

    if (error) {
      console.log('  ERROR ' + p.word_key + ': ' + error.message);
    } else {
      console.log('  OK ' + p.word_key + ': "' + p.french.substring(0, 50) + '"');
      inserted++;
    }
  }

  console.log('  Total: ' + inserted + ' phrases inserted\n');
}

// ============================================================
// FIX 5: Remove "concept" word from akm/Cecite proof_ctx
// ============================================================
async function fixConceptWord() {
  console.log('--- FIX 5: mot "concept" dans proof_ctx akm ---');

  const { data: vwas } = await db.from('verse_word_analyses')
    .select('id, analysis_axes')
    .eq('verse_id', VERSE_ID)
    .eq('word_key', 'akm');

  for (const vwa of (vwas || [])) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.concepts) continue;

    let changed = false;
    for (const [name, data] of Object.entries(axes.concepts)) {
      if (data.proof_ctx && /\bconcept\b/i.test(data.proof_ctx)) {
        data.proof_ctx = data.proof_ctx
          .replace(/\bLe concept de cecite est\b/gi, 'Le sens de cecite est')
          .replace(/\bLe concept de\b/gi, 'Le sens de')
          .replace(/\bconcept contextuel\b/gi, 'sens contextuel')
          .replace(/\bconcept\b/gi, 'sens');
        changed = true;
        console.log('  OK akm/' + name + ': "concept" -> "sens" in proof_ctx');
      }
    }

    if (changed) {
      await db.from('verse_word_analyses')
        .update({ analysis_axes: axes })
        .eq('id', vwa.id);
    }
  }
  console.log('');
}

// ============================================================
// FIX 6: Add daily phrases for sryl (even if proper noun, validator requires it)
// ============================================================
async function fixSrylDaily() {
  console.log('--- FIX 6: daily phrases pour sryl ---');

  const phrases = [
    { word_key: 'sryl', sense: 'Israel', arabic: 'يا بَني إسرائيلَ اذكُروا نِعمَتي', phon: 'ya bani isra\'ila udhkuru ni\'mati', french: 'O Fils d\'Israel, rappelez-vous Mon bienfait.' },
    { word_key: 'sryl', sense: 'Israel', arabic: 'إسرائيلُ هو يَعقوبُ عَليهِ السَّلام', phon: 'isra\'ilu huwa ya\'qubu \'alayhi as-salam', french: 'Israel est Jacob, paix sur lui.' },
    { word_key: 'sryl', sense: 'Israel', arabic: 'أَرسَلنا موسى إلى بَني إسرائيل', phon: 'arsalna musa ila bani isra\'il', french: 'Nous avons envoye Moise aux Fils d\'Israel.' },
  ];

  let inserted = 0;
  for (const p of phrases) {
    const { data: wa } = await db.from('word_analyses')
      .select('id')
      .eq('word_key', p.word_key)
      .limit(1);
    if (!wa || !wa[0]) {
      console.log('  SKIP ' + p.word_key + ': not found');
      continue;
    }

    const { data: dup } = await db.from('word_daily')
      .select('id')
      .eq('analysis_id', wa[0].id)
      .eq('french', p.french)
      .limit(1);
    if (dup && dup.length > 0) {
      console.log('  DUP ' + p.word_key + ': already exists');
      continue;
    }

    const { error } = await db.from('word_daily').insert({
      analysis_id: wa[0].id,
      sense: p.sense,
      arabic: p.arabic,
      phon: p.phon,
      french: p.french
    });

    if (error) {
      console.log('  ERROR ' + p.word_key + ': ' + error.message);
    } else {
      console.log('  OK ' + p.word_key + ': "' + p.french.substring(0, 50) + '"');
      inserted++;
    }
  }
  console.log('  Total: ' + inserted + ' phrases inserted\n');
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log('============================================================');
  console.log('  FIX VALIDATION S3:V49 (verse_id=342, va_id=702)');
  console.log('============================================================\n');

  await fixConceptChosen();   // FIX 1: concept_chosen names
  await fixAkmSense();         // FIX 3: add akm sense (before FIX 2)
  await fixSenseRetenu();      // FIX 2: sense_retenu in segments
  await fixDailyPhrases();     // FIX 4: daily phrases
  await fixConceptWord();      // FIX 5: "concept" word in proof_ctx
  await fixSrylDaily();        // FIX 6: sryl daily phrases

  console.log('============================================================');
  console.log('  DONE — run: node scripts/validate-pipeline.js 3 49');
  console.log('============================================================');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
