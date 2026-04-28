const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const fixes = [
  {
    vid: 100, label: 'V2:93',
    find: 'on fit boire a leurs coeurs le veau',
    replace: "le veau s'imprégna dans leurs cœurs",
  },
  {
    vid: 118, label: 'V2:111',
    find: 'des guides ou des partisans',
    replace: 'juifs ou chrétiens',
  },
  {
    vid: 120, label: 'V2:113',
    // Multiple replacements handled separately
    replacements: [
      { find: 'les guides', replace: 'les juifs' },
      { find: 'les partisans', replace: 'les chrétiens' },
    ],
  },
  {
    vid: 145, label: 'V2:138',
    replacements: [
      { find: 'Teinture de Dieu', replace: 'Empreinte de Dieu' },
      { find: 'en teinture', replace: 'en empreinte' },
    ],
  },
  {
    vid: 186, label: 'V2:179',
    find: 'le suivi/pistage',
    replace: 'la réciprocité proportionnelle',
  },
  {
    vid: 192, label: 'V2:185',
    find: 'Le mois de la chaleur ardente',
    replace: 'Le mois de Ramadan',
  },
  {
    vid: 213, label: 'V2:206',
    find: 'premunit-toi',
    replace: 'prémuns-toi',
  },
  {
    vid: 241, label: 'V2:234',
    find: /\s*—\s*au sens d'[eê]tre pris enti[eè]rement\s*—\s*/g,
    replace: ' ',
  },
  {
    vid: 261, label: 'V2:254',
    find: 'les mécréants',
    replace: 'ceux qui recouvrent',
  },
  {
    vid: 291, label: 'V2:284',
    find: 'châtiera',
    replace: 'sanctionnera',
  },
  // Contraction fixes
  {
    vid: 235, label: 'V2:228',
    replacements: [
      { find: "qu'Dieu", replace: 'que Dieu' },
      { find: "d'Dieu", replace: 'de Dieu' },
    ],
  },
  {
    vid: 249, label: 'V2:242',
    replacements: [
      { find: "qu'Dieu", replace: 'que Dieu' },
    ],
  },
  {
    vid: 251, label: 'V2:244',
    replacements: [
      { find: "d'Dieu", replace: 'de Dieu' },
      { find: "qu'Dieu", replace: 'que Dieu' },
    ],
  },
];

async function main() {
  console.log('=== Fix French quality issues in translation_arab ===\n');

  let successCount = 0;
  let errorCount = 0;

  for (const fix of fixes) {
    // Fetch current value
    const { data, error } = await supabase
      .from('verse_analyses')
      .select('id, verse_id, translation_arab')
      .eq('verse_id', fix.vid)
      .single();

    if (error || !data) {
      console.error(`[ERROR] ${fix.label} (vid=${fix.vid}): fetch failed`, error);
      errorCount++;
      continue;
    }

    const before = data.translation_arab;
    let after = before;

    if (fix.replacements) {
      for (const r of fix.replacements) {
        after = after.split(r.find).join(r.replace);
      }
    } else if (fix.find instanceof RegExp) {
      after = after.replace(fix.find, fix.replace);
    } else {
      // Replace all occurrences
      after = after.split(fix.find).join(fix.replace);
    }

    if (after === before) {
      console.warn(`[WARN] ${fix.label} (vid=${fix.vid}): pattern not found, no change`);
      console.log(`  Current text: ${before}\n`);
      errorCount++;
      continue;
    }

    // Update
    const { error: updateError } = await supabase
      .from('verse_analyses')
      .update({ translation_arab: after })
      .eq('verse_id', fix.vid);

    if (updateError) {
      console.error(`[ERROR] ${fix.label} (vid=${fix.vid}): update failed`, updateError);
      errorCount++;
      continue;
    }

    console.log(`[OK] ${fix.label} (vid=${fix.vid})`);
    console.log(`  BEFORE: ${before}`);
    console.log(`  AFTER:  ${after}\n`);
    successCount++;
  }

  console.log(`\n=== Done: ${successCount} fixed, ${errorCount} issues ===`);
}

main().catch(console.error);
