const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const VERSE_IDS = [66, 73, 93, 97, 106, 111, 121, 133, 169, 172, 173, 181, 182, 185, 208];

// Replacements ordered: longer/specific patterns first
const REPLACEMENTS = [
  // With accent
  [/\bun rétribution\b/gi, 'une rétribution'],
  [/\ble rétribution\b/gi, 'la rétribution'],
  [/\bdu rétribution\b/gi, 'de la rétribution'],
  [/\bau rétribution\b/gi, 'à la rétribution'],
  [/\brétribution douloureux\b/gi, 'rétribution douloureuse'],
  [/\brétribution humiliant\b/gi, 'rétribution humiliante'],
  // Without accent
  [/\bun retribution\b/gi, 'une rétribution'],
  [/\ble retribution\b/gi, 'la rétribution'],
  [/\bdu retribution\b/gi, 'de la rétribution'],
  [/\bau retribution\b/gi, 'à la rétribution'],
  [/\bretribution douloureux\b/gi, 'rétribution douloureuse'],
  [/\bretribution humiliant\b/gi, 'rétribution humiliante'],
];

async function main() {
  console.log('=== Fix gender agreement for "rétribution" (feminine) in verse_analyses ===\n');

  // translation_arab is on the verse_analyses table
  const { data: rows, error } = await supabase
    .from('verse_analyses')
    .select('id, verse_id, translation_arab')
    .in('verse_id', VERSE_IDS);

  if (error) {
    console.error('Query error:', error);
    process.exit(1);
  }

  console.log(`Found ${rows.length} verse_analyses rows for ${VERSE_IDS.length} verse IDs.\n`);

  let fixCount = 0;

  for (const row of rows) {
    const text = row.translation_arab;
    if (!text) {
      console.log(`[analysis_id=${row.id} vid=${row.verse_id}] — no translation_arab, skipping`);
      continue;
    }

    let changed = text;
    for (const [pattern, replacement] of REPLACEMENTS) {
      changed = changed.replace(pattern, replacement);
    }

    if (changed !== text) {
      fixCount++;
      console.log(`[analysis_id=${row.id} vid=${row.verse_id}]`);
      console.log(`  BEFORE: ${text}`);
      console.log(`  AFTER:  ${changed}`);

      const { error: updateErr } = await supabase
        .from('verse_analyses')
        .update({ translation_arab: changed })
        .eq('id', row.id);

      if (updateErr) {
        console.error(`  UPDATE ERROR:`, updateErr);
      } else {
        console.log(`  OK`);
      }
      console.log();
    } else {
      console.log(`[analysis_id=${row.id} vid=${row.verse_id}] — no gender error found`);
    }
  }

  console.log(`\nDone. Fixed ${fixCount} rows out of ${rows.length} checked.`);
}

main().catch(console.error);
