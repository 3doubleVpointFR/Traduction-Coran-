const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// SCRIPT DE CORRECTION VOCABULAIRE — SOURATE 2
// Remplacements ciblés dans translation_arab
// =====================================================

let totalChanges = 0;

async function fetchVerse(verse_id) {
  const { data, error } = await supabase
    .from('verse_analyses')
    .select('id, verse_id, translation_arab')
    .eq('verse_id', verse_id)
    .single();
  if (error) {
    console.error(`  FETCH ERROR [verse_id=${verse_id}]:`, error.message);
    return null;
  }
  return data;
}

async function updateTranslation(id, newText) {
  const { error } = await supabase
    .from('verse_analyses')
    .update({ translation_arab: newText })
    .eq('id', id);
  if (error) {
    console.error(`  UPDATE ERROR [id=${id}]:`, error.message);
    return false;
  }
  return true;
}

function logChange(verseRef, before, after) {
  // Show a snippet around the change (max 80 chars each side)
  console.log(`  [${verseRef}]`);
  console.log(`    AVANT: ...${before.substring(0, 200)}...`);
  console.log(`    APRES: ...${after.substring(0, 200)}...`);
  console.log();
  totalChanges++;
}

// =====================================================
// 1. "châtiment" → "rétribution" ou "conséquence"
// =====================================================
async function fixChatiment() {
  console.log('=== 1. CHATIMENT → RETRIBUTION/CONSEQUENCE ===\n');

  // verse_number → verse_id mapping: vid = vn + 7
  const verses = [
    { vn: 59, vid: 66 },
    { vn: 66, vid: 73 },
    { vn: 85, vid: 92 },
    { vn: 86, vid: 93 },
    { vn: 90, vid: 97 },
    { vn: 99, vid: 106 },
    { vn: 104, vid: 111 },
    { vn: 114, vid: 121 },
    { vn: 126, vid: 133 },
    { vn: 162, vid: 169 },
    { vn: 165, vid: 172 },
    { vn: 166, vid: 173 },
    { vn: 174, vid: 181 },
    { vn: 175, vid: 182 },
    { vn: 178, vid: 185 },
    { vn: 201, vid: 208 },
  ];

  // Verses where "conséquence" is more appropriate (natural consequences)
  // Most verses use "rétribution" (divine context)
  const useConsequence = new Set([]);

  for (const { vn, vid } of verses) {
    const row = await fetchVerse(vid);
    if (!row) continue;
    const original = row.translation_arab;
    if (!original) { console.log(`  2:${vn} (vid=${vid}): translation_arab is NULL, skipping`); continue; }

    if (!original.match(/châtiment/i)) {
      console.log(`  2:${vn} (vid=${vid}): "châtiment" NOT FOUND, skipping`);
      continue;
    }

    const replacement = useConsequence.has(vn) ? 'conséquence' : 'rétribution';
    const replacementCap = useConsequence.has(vn) ? 'Conséquence' : 'Rétribution';

    let updated = original;
    updated = updated.replace(/Châtiment/g, replacementCap);
    updated = updated.replace(/châtiment/g, replacement);

    if (updated !== original) {
      const ok = await updateTranslation(row.id, updated);
      if (ok) logChange(`2:${vn} vid=${vid}`, original, updated);
    }
  }
}

// =====================================================
// 2. "craignez"/"crainte" → "prémunissez-vous"/"vigilance"
//    ONLY for taqwa context
// =====================================================
async function fixCrainte() {
  console.log('=== 2. CRAIGNEZ/CRAINTE → PREMUNISSEZ-VOUS/VIGILANCE ===\n');

  const verses = [
    { vn: 150, vid: 157 },
    { vn: 229, vid: 236 },
    { vn: 231, vid: 238 },
    { vn: 233, vid: 240 },
    { vn: 239, vid: 246 },
    { vn: 278, vid: 285 },
    { vn: 281, vid: 288 },
    { vn: 282, vid: 289 },
    { vn: 283, vid: 290 },
  ];

  for (const { vn, vid } of verses) {
    const row = await fetchVerse(vid);
    if (!row) continue;
    const original = row.translation_arab;
    if (!original) { console.log(`  2:${vn} (vid=${vid}): translation_arab is NULL, skipping`); continue; }

    let updated = original;

    // "craignez Dieu" / "craignez Allah" → "prémunissez-vous envers Dieu"
    updated = updated.replace(/[Cc]raignez\s+Dieu/g, (m) => {
      const cap = m.startsWith('C') ? 'P' : 'p';
      return `${cap}rémunissez-vous envers Dieu`;
    });
    updated = updated.replace(/[Cc]raignez\s+Allah/g, (m) => {
      const cap = m.startsWith('C') ? 'P' : 'p';
      return `${cap}rémunissez-vous envers Dieu`;
    });

    // "la crainte de Dieu" / "la crainte d'Allah" → "la vigilance envers Dieu"
    updated = updated.replace(/la crainte de Dieu/gi, 'la vigilance envers Dieu');
    updated = updated.replace(/la crainte d['']Allah/gi, 'la vigilance envers Dieu');

    // "la crainte" (standalone taqwa reference) → "la vigilance"
    // Only when not followed by "de/des/du" something other than God
    // Be conservative: only replace "la crainte" if it stands alone or is about taqwa
    updated = updated.replace(/la crainte(?!\s+d[eu'])/gi, 'la vigilance');

    if (updated !== original) {
      const ok = await updateTranslation(row.id, updated);
      if (ok) logChange(`2:${vn} vid=${vid}`, original, updated);
    } else {
      console.log(`  2:${vn} (vid=${vid}): no taqwa-related "craignez/crainte" found, skipping`);
    }
  }
}

// =====================================================
// 3. "grâce" → "faveur" (NOT "grâce à")
// =====================================================
async function fixGrace() {
  console.log('=== 3. GRACE → FAVEUR ===\n');

  const verses = [
    { vn: 64, vid: 71 },
    { vn: 90, vid: 97 },
    { vn: 105, vid: 112 },
    { vn: 243, vid: 250 },
    { vn: 251, vid: 258 },
  ];

  for (const { vn, vid } of verses) {
    const row = await fetchVerse(vid);
    if (!row) continue;
    const original = row.translation_arab;
    if (!original) { console.log(`  2:${vn} (vid=${vid}): translation_arab is NULL, skipping`); continue; }

    let updated = original;

    // "la grâce de Dieu" → "la faveur de Dieu"
    updated = updated.replace(/la grâce de Dieu/gi, (m) => {
      return m.startsWith('L') ? 'La faveur de Dieu' : 'la faveur de Dieu';
    });
    // "la grâce d'Allah" → "la faveur de Dieu"
    updated = updated.replace(/la grâce d['']Allah/gi, 'la faveur de Dieu');

    // "Sa grâce" → "Sa faveur"
    updated = updated.replace(/Sa grâce/g, 'Sa faveur');
    updated = updated.replace(/sa grâce/g, 'sa faveur');

    // "la grâce" (standalone, not followed by "à") → "la faveur"
    // Negative lookahead: don't touch "grâce à"
    updated = updated.replace(/([Ll]a\s+)grâce(?!\s+à)/g, '$1faveur');

    // Generic "grâce" not preceded by context that makes it "grâce à"
    // Replace remaining "grâce" that is NOT part of "grâce à"
    updated = updated.replace(/(?<![\w])grâce(?!\s+à)/g, 'faveur');
    updated = updated.replace(/(?<![\w])Grâce(?!\s+à)/g, 'Faveur');

    if (updated !== original) {
      const ok = await updateTranslation(row.id, updated);
      if (ok) logChange(`2:${vn} vid=${vid}`, original, updated);
    } else {
      console.log(`  2:${vn} (vid=${vid}): no standalone "grâce" found (or only "grâce à"), skipping`);
    }
  }
}

// =====================================================
// 4. Odd French fixes
// =====================================================
async function fixOddFrench() {
  console.log('=== 4. CORRECTIONS FRANÇAISES DIVERSES ===\n');

  // 2:7 (vid=14): "voilement" → "voile"
  {
    const row = await fetchVerse(14);
    if (row && row.translation_arab) {
      let updated = row.translation_arab.replace(/voilement/g, 'voile');
      if (updated !== row.translation_arab) {
        const ok = await updateTranslation(row.id, updated);
        if (ok) logChange('2:7 vid=14 (voilement→voile)', row.translation_arab, updated);
      } else {
        console.log('  2:7 (vid=14): "voilement" not found, skipping');
      }
    }
  }

  // 2:19 (vid=26), 2:24 (vid=31), 2:34 (vid=41): "les recouvrants" → "ceux qui recouvrent"
  for (const { vn, vid } of [{ vn: 19, vid: 26 }, { vn: 24, vid: 31 }, { vn: 34, vid: 41 }]) {
    const row = await fetchVerse(vid);
    if (!row || !row.translation_arab) continue;
    let updated = row.translation_arab;
    updated = updated.replace(/[Ll]es recouvrants/g, (m) => {
      return m.startsWith('L') ? 'Ceux qui recouvrent' : 'ceux qui recouvrent';
    });
    if (updated !== row.translation_arab) {
      const ok = await updateTranslation(row.id, updated);
      if (ok) logChange(`2:${vn} vid=${vid} (recouvrants)`, row.translation_arab, updated);
    } else {
      console.log(`  2:${vn} (vid=${vid}): "les recouvrants" not found, skipping`);
    }
  }

  // 2:99 (vid=106), 2:105 (vid=112): "les associateurs" → "ceux qui associent [d'autres à Dieu]"
  for (const { vn, vid } of [{ vn: 99, vid: 106 }, { vn: 105, vid: 112 }]) {
    const row = await fetchVerse(vid);
    if (!row || !row.translation_arab) continue;
    let updated = row.translation_arab;
    updated = updated.replace(/[Ll]es associateurs/g, (m) => {
      return m.startsWith('L') ? "Ceux qui associent [d'autres à Dieu]" : "ceux qui associent [d'autres à Dieu]";
    });
    if (updated !== row.translation_arab) {
      const ok = await updateTranslation(row.id, updated);
      if (ok) logChange(`2:${vn} vid=${vid} (associateurs)`, row.translation_arab, updated);
    } else {
      console.log(`  2:${vn} (vid=${vid}): "les associateurs" not found, skipping`);
    }
  }

  // 2:276 (vid=283): "impie" → "celui qui recouvre/nie", "pécheur" → "celui qui faute"
  {
    const row = await fetchVerse(283);
    if (row && row.translation_arab) {
      let updated = row.translation_arab;
      // Replace "impie" but not if part of a longer word
      updated = updated.replace(/\bimpie\b/g, 'celui qui nie');
      updated = updated.replace(/\bImpie\b/g, 'Celui qui nie');
      updated = updated.replace(/\bpécheur\b/g, 'fautif');
      updated = updated.replace(/\bPécheur\b/g, 'Fautif');
      if (updated !== row.translation_arab) {
        const ok = await updateTranslation(row.id, updated);
        if (ok) logChange('2:276 vid=283 (impie/pécheur)', row.translation_arab, updated);
      } else {
        console.log('  2:276 (vid=283): "impie"/"pécheur" not found, skipping');
      }
    }
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('Démarrage des corrections vocabulaire sourate 2...\n');

  await fixChatiment();
  console.log();
  await fixCrainte();
  console.log();
  await fixGrace();
  console.log();
  await fixOddFrench();

  console.log(`\n=== TERMINÉ: ${totalChanges} modifications effectuées ===`);
}

main().catch(console.error);
