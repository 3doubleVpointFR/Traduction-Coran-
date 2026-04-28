const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// =====================================================
// SCRIPT DE CORRECTION — translation_explanation
// Harmonisation vocabulaire sourate 2 (verse_id 8-293)
// =====================================================

const BATCH_SIZE = 50;
const VERSE_ID_MIN = 8;
const VERSE_ID_MAX = 293;

// Counters
const stats = {
  chatiment: 0,
  grace: 0,
  mecreant: 0,
  teinture_v145: 0,
  ramadan_v192: 0,
  suivi_v186: 0,
  revenant_v44: 0,
  total_rows_modified: 0,
};

function applyReplacements(text, verseId) {
  if (!text) return { text, changed: false };
  let original = text;
  let localStats = {
    chatiment: false,
    grace: false,
    mecreant: false,
    teinture_v145: false,
    ramadan_v192: false,
    suivi_v186: false,
    revenant_v44: false,
  };

  // -------------------------------------------------------
  // 1. "chatiment/châtiment" → "rétribution"
  // -------------------------------------------------------
  // Skip lines that already contain "châtiment/rétribution" or explain why NOT chosen
  // We do multi-pass replacements for gendered/adjective forms

  // Adjective forms first (longer matches before shorter)
  text = text.replace(/ch[aâ]timent douloureux/gi, (m) => {
    localStats.chatiment = true;
    return m[0] === m[0].toUpperCase() ? 'Rétribution douloureuse' : 'rétribution douloureuse';
  });
  text = text.replace(/ch[aâ]timent humiliant/gi, (m) => {
    localStats.chatiment = true;
    return m[0] === m[0].toUpperCase() ? 'Rétribution humiliante' : 'rétribution humiliante';
  });
  text = text.replace(/ch[aâ]timent sévère/gi, (m) => {
    localStats.chatiment = true;
    return m[0] === m[0].toUpperCase() ? 'Rétribution sévère' : 'rétribution sévère';
  });
  text = text.replace(/ch[aâ]timent terrible/gi, (m) => {
    localStats.chatiment = true;
    return m[0] === m[0].toUpperCase() ? 'Rétribution terrible' : 'rétribution terrible';
  });
  text = text.replace(/ch[aâ]timent immense/gi, (m) => {
    localStats.chatiment = true;
    return m[0] === m[0].toUpperCase() ? 'Rétribution immense' : 'rétribution immense';
  });

  // "du châtiment" → "de la rétribution"
  text = text.replace(/du ch[aâ]timent/gi, (m) => {
    localStats.chatiment = true;
    return m[0] === 'D' ? 'De la rétribution' : 'de la rétribution';
  });

  // "un châtiment" → "une rétribution"
  text = text.replace(/un ch[aâ]timent/gi, (m) => {
    localStats.chatiment = true;
    return m[0] === 'U' ? 'Une rétribution' : 'une rétribution';
  });

  // "le châtiment" → "la rétribution"
  text = text.replace(/le ch[aâ]timent/gi, (m) => {
    localStats.chatiment = true;
    return m[0] === 'L' ? 'La rétribution' : 'la rétribution';
  });

  // "au châtiment" → "à la rétribution"
  text = text.replace(/au ch[aâ]timent/gi, (m) => {
    localStats.chatiment = true;
    return m[0] === 'A' ? 'À la rétribution' : 'à la rétribution';
  });

  // Generic remaining "châtiment" → "rétribution" (standalone)
  // Avoid replacing inside "châtiment/rétribution"
  text = text.replace(/ch[aâ]timent(?!\/rétribution)/gi, (m) => {
    localStats.chatiment = true;
    return m[0] === 'C' ? 'Rétribution' : 'rétribution';
  });

  // -------------------------------------------------------
  // 2. "grâce" (standalone, NOT "grâce à") → "faveur"
  // -------------------------------------------------------
  // Negative lookahead for "grâce à" — also handle "grâce au", "grâce aux"
  // "la grâce" → "la faveur", "Sa grâce" → "Sa faveur", etc.
  text = text.replace(/\bgrâce(?!\s+(?:à|au|aux)\b)/gi, (m) => {
    localStats.grace = true;
    return m[0] === 'G' ? 'Faveur' : 'faveur';
  });

  // -------------------------------------------------------
  // 3. "mécréant(s)" → "ceux qui recouvrent"
  // -------------------------------------------------------
  // "les mécréants" → "ceux qui recouvrent"
  text = text.replace(/les mécréants/gi, (m) => {
    localStats.mecreant = true;
    return m[0] === 'L' ? 'Ceux qui recouvrent' : 'ceux qui recouvrent';
  });
  // "des mécréants" → "de ceux qui recouvrent"
  text = text.replace(/des mécréants/gi, (m) => {
    localStats.mecreant = true;
    return m[0] === 'D' ? 'De ceux qui recouvrent' : 'de ceux qui recouvrent';
  });
  // "aux mécréants" → "à ceux qui recouvrent"
  text = text.replace(/aux mécréants/gi, (m) => {
    localStats.mecreant = true;
    return m[0] === 'A' ? 'À ceux qui recouvrent' : 'à ceux qui recouvrent';
  });
  // "un mécréant" → "celui qui recouvre"
  text = text.replace(/un mécréant\b/gi, (m) => {
    localStats.mecreant = true;
    return m[0] === 'U' ? 'Celui qui recouvre' : 'celui qui recouvre';
  });
  // "le mécréant" → "celui qui recouvre"
  text = text.replace(/le mécréant\b/gi, (m) => {
    localStats.mecreant = true;
    return m[0] === 'L' ? 'Celui qui recouvre' : 'celui qui recouvre';
  });
  // Generic standalone "mécréants" → "ceux qui recouvrent"
  text = text.replace(/\bmécréants\b/gi, (m) => {
    localStats.mecreant = true;
    return m[0] === 'M' ? 'Ceux qui recouvrent' : 'ceux qui recouvrent';
  });
  // Generic standalone "mécréant" → "celui qui recouvre"
  text = text.replace(/\bmécréant\b/gi, (m) => {
    localStats.mecreant = true;
    return m[0] === 'M' ? 'Celui qui recouvre' : 'celui qui recouvre';
  });

  // -------------------------------------------------------
  // 4. V2:138 (vid=145): "teinture" → "empreinte"
  // -------------------------------------------------------
  if (verseId === 145) {
    const before = text;
    text = text.replace(/\bteinture\b/gi, (m) => {
      return m[0] === 'T' ? 'Empreinte' : 'empreinte';
    });
    if (text !== before) localStats.teinture_v145 = true;
  }

  // -------------------------------------------------------
  // 5. V2:185 (vid=192): "chaleur ardente" → "Ramadan"
  // -------------------------------------------------------
  if (verseId === 192) {
    const before = text;
    // "mois de la chaleur ardente" → "mois de Ramadan" first (longer)
    text = text.replace(/mois de la chaleur ardente/gi, 'mois de Ramadan');
    // remaining standalone "chaleur ardente" → "Ramadan"
    text = text.replace(/chaleur ardente/gi, 'Ramadan');
    if (text !== before) localStats.ramadan_v192 = true;
  }

  // -------------------------------------------------------
  // 6. V2:179 (vid=186): "suivi/pistage" → "réciprocité proportionnelle"
  // -------------------------------------------------------
  if (verseId === 186) {
    const before = text;
    text = text.replace(/suivi\/pistage/gi, 'réciprocité proportionnelle');
    text = text.replace(/\bsuivi\/pistage\b/gi, 'réciprocité proportionnelle');
    if (text !== before) localStats.suivi_v186 = true;
  }

  // -------------------------------------------------------
  // 7. V2:37 (vid=44): "le revenant" → "Celui qui revient"
  // -------------------------------------------------------
  if (verseId === 44) {
    const before = text;
    text = text.replace(/\ble revenant\b/gi, (m) => {
      return m[0] === 'L' ? 'Celui qui revient' : 'celui qui revient';
    });
    if (text !== before) localStats.revenant_v44 = true;
  }

  const changed = text !== original;

  // Update global stats
  if (changed) {
    for (const key of Object.keys(localStats)) {
      if (localStats[key]) stats[key]++;
    }
  }

  return { text, changed };
}

async function processBatch(startId, endId) {
  const { data, error } = await supabase
    .from('verse_analyses')
    .select('id, verse_id, translation_explanation')
    .gte('verse_id', startId)
    .lte('verse_id', endId)
    .order('verse_id');

  if (error) {
    console.error(`  FETCH ERROR [${startId}-${endId}]:`, error.message);
    return 0;
  }

  if (!data || data.length === 0) return 0;

  let modified = 0;

  for (const row of data) {
    if (!row.translation_explanation) continue;

    const { text: newText, changed } = applyReplacements(
      row.translation_explanation,
      row.verse_id
    );

    if (changed) {
      const { error: updateError } = await supabase
        .from('verse_analyses')
        .update({ translation_explanation: newText })
        .eq('id', row.id);

      if (updateError) {
        console.error(`  UPDATE ERROR [id=${row.id}, vid=${row.verse_id}]:`, updateError.message);
      } else {
        modified++;
      }
    }
  }

  return modified;
}

async function main() {
  console.log('=== FIX translation_explanation consistency (Sourate 2) ===\n');

  let totalModified = 0;
  let batchNum = 0;

  for (let start = VERSE_ID_MIN; start <= VERSE_ID_MAX; start += BATCH_SIZE) {
    const end = Math.min(start + BATCH_SIZE - 1, VERSE_ID_MAX);
    batchNum++;
    const modified = await processBatch(start, end);
    totalModified += modified;
    console.log(`  Batch ${batchNum} [vid ${start}-${end}]: ${modified} rows modified`);
  }

  console.log(`\n=== DONE ===`);
  console.log(`Total rows modified: ${totalModified}`);
  console.log(`\nBreakdown by category:`);
  console.log(`  châtiment → rétribution: ${stats.chatiment} rows`);
  console.log(`  grâce → faveur: ${stats.grace} rows`);
  console.log(`  mécréant(s) → ceux qui recouvrent: ${stats.mecreant} rows`);
  console.log(`  V145 teinture → empreinte: ${stats.teinture_v145} rows`);
  console.log(`  V192 chaleur ardente → Ramadan: ${stats.ramadan_v192} rows`);
  console.log(`  V186 suivi/pistage → réciprocité proportionnelle: ${stats.suivi_v186} rows`);
  console.log(`  V44 le revenant → Celui qui revient: ${stats.revenant_v44} rows`);
}

main().catch(console.error);
