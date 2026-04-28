// query-s107-roots.js — Query all word_meanings and word_daily for the 13 roots of Sourate 107
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const ROOTS = ['ray', 'kdhb', 'dyn', 'dee2', 'ytm', 'hdd2', 'tem', 'skn', 'wyl', 'slw', 'shw2', 'mne', 'men'];

async function main() {
  console.log('Querying word_meanings for 13 roots of Sourate 107...\n');

  // Query 1: word_meanings
  const { data: meanings, error: err1 } = await supabase
    .from('word_analyses')
    .select(`
      word_key,
      id,
      root_ar,
      root_phon,
      total_occurrences,
      word_meanings (
        id,
        concept,
        sense,
        description,
        meaning_type,
        display_order
      )
    `)
    .in('word_key', ROOTS)
    .order('word_key');

  if (err1) {
    console.error('Error querying word_meanings:', err1);
    process.exit(1);
  }

  // Query 2: word_daily
  const { data: daily, error: err2 } = await supabase
    .from('word_analyses')
    .select(`
      word_key,
      word_daily (
        id,
        sense,
        arabic,
        phon,
        french
      )
    `)
    .in('word_key', ROOTS)
    .order('word_key');

  if (err2) {
    console.error('Error querying word_daily:', err2);
    process.exit(1);
  }

  let output = '';

  // ===== WORD_MEANINGS OUTPUT =====
  output += '='.repeat(80) + '\n';
  output += 'QUERY 1: word_meanings for 13 roots of Sourate 107\n';
  output += '='.repeat(80) + '\n\n';

  let totalMeanings = 0;

  for (const wa of (meanings || [])) {
    const wms = wa.word_meanings || [];
    wms.sort((a, b) => {
      if (a.concept < b.concept) return -1;
      if (a.concept > b.concept) return 1;
      return (a.display_order || 0) - (b.display_order || 0);
    });

    output += `ROOT: ${wa.word_key}\n`;
    output += `  wa.id: ${wa.id}\n`;
    output += `  root_ar: ${wa.root_ar || '(null)'}\n`;
    output += `  root_phon: ${wa.root_phon || '(null)'}\n`;
    output += `  total_occurrences: ${wa.total_occurrences || '(null)'}\n`;
    output += `  word_meanings count: ${wms.length}\n`;
    output += '\n';

    if (wms.length === 0) {
      output += '  (no word_meanings found)\n\n';
    } else {
      for (const wm of wms) {
        output += `  [wm.id=${wm.id}] concept="${wm.concept}" | sense="${wm.sense}" | type=${wm.meaning_type} | order=${wm.display_order}\n`;
        if (wm.description) {
          output += `    description: ${wm.description}\n`;
        }
        totalMeanings++;
      }
      output += '\n';
    }
  }

  output += `\nTOTAL word_meanings rows: ${totalMeanings}\n`;

  // Check which roots were not found
  const foundRoots = (meanings || []).map(wa => wa.word_key);
  const missingRoots = ROOTS.filter(r => !foundRoots.includes(r));
  if (missingRoots.length > 0) {
    output += `\nROOTS NOT FOUND in word_analyses: ${missingRoots.join(', ')}\n`;
  }

  // ===== WORD_DAILY OUTPUT =====
  output += '\n' + '='.repeat(80) + '\n';
  output += 'QUERY 2: word_daily for 13 roots of Sourate 107\n';
  output += '='.repeat(80) + '\n\n';

  let totalDaily = 0;

  for (const wa of (daily || [])) {
    const wds = wa.word_daily || [];
    output += `ROOT: ${wa.word_key}\n`;
    output += `  word_daily count: ${wds.length}\n`;

    if (wds.length === 0) {
      output += '  (no word_daily found)\n\n';
    } else {
      for (const wd of wds) {
        output += `  [wd.id=${wd.id}] sense="${wd.sense}" | arabic="${wd.arabic}" | phon="${wd.phon}" | french="${wd.french}"\n`;
        totalDaily++;
      }
      output += '\n';
    }
  }

  output += `\nTOTAL word_daily rows: ${totalDaily}\n`;

  // Write to file
  const outPath = path.join(__dirname, 's107_roots_data.txt');
  fs.writeFileSync(outPath, output, 'utf8');
  console.log(output);
  console.log(`\nOutput written to: ${outPath}`);
}

main().catch(e => { console.error(e); process.exit(1); });
