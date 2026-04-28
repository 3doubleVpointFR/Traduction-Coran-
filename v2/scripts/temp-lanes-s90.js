const Database = require('better-sqlite3');
const db = new Database('lanes_data/lexicon.sqlite');

// 5 roots to look up
const roots = [
  { bw: 'kbd', ar: 'كبد', desc: 'liver/hardship' },
  { bw: 'lbd', ar: 'لبد', desc: 'compact/abundant' },
  { bw: 'njd', ar: 'نجد', desc: 'elevated path' },
  { bw: 'sfh', ar: 'شفه', desc: 'lips' },  // also try شفو
  { bw: 'Ans', ar: 'أنس', desc: 'human/intimacy' },
];

for (const r of roots) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`ROOT: ${r.bw} (${r.ar}) — ${r.desc}`);
  console.log('='.repeat(60));

  // Search in root table
  const rootRows = db.prepare("SELECT * FROM root WHERE word LIKE ? OR bword LIKE ?").all(`%${r.ar.replace(/ /g,'')}%`, `%${r.bw}%`);
  console.log(`Root table matches: ${rootRows.length}`);
  for (const rr of rootRows) console.log(`  id=${rr.id} word=${rr.word} bword=${rr.bword} letter=${rr.letter}`);

  // Search in entry table by broot
  const entries = db.prepare("SELECT id, word, bword, broot, headword, length(xml) as xmllen FROM entry WHERE broot LIKE ? OR word LIKE ?").all(`%${r.bw}%`, `%${r.ar.replace(/ /g,'')}%`);
  console.log(`Entry matches: ${entries.length}`);
  for (const e of entries.slice(0,10)) console.log(`  id=${e.id} word=${e.word} bword=${e.bword} broot=${e.broot} hw=${e.headword} xml=${e.xmllen}b`);

  // Get XML content for the first few entries
  if (entries.length > 0) {
    for (const e of entries.slice(0, 3)) {
      const full = db.prepare("SELECT xml FROM entry WHERE id = ?").get(e.id);
      // Extract text, remove XML tags
      const text = full.xml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      console.log(`\n--- Entry ${e.id} (${e.headword || e.word}) ---`);
      console.log(text.substring(0, 3000));
      if (text.length > 3000) console.log('... [truncated]');
    }
  }
}

// Also search for شفو/شفة variants for lips
console.log('\n\n=== SEARCHING شفة / شفو / شفه variants ===');
const lipEntries = db.prepare("SELECT id, word, bword, broot, headword FROM entry WHERE broot IN ('$fh', '$fw', '$fA', 'sfh', 'sfw', 'sfA') OR word LIKE '%شف%'").all();
for (const e of lipEntries.slice(0,10)) console.log(`  ${e.word} broot=${e.broot} hw=${e.headword}`);

// Search for إنس / أنس variants
console.log('\n\n=== SEARCHING إنس / أنس / ناس variants ===');
const humanEntries = db.prepare("SELECT id, word, bword, broot, headword FROM entry WHERE broot IN ('Ans', 'ans', '>ns', '<ns', 'nAs') OR word LIKE '%إنس%' OR word LIKE '%أنس%'").all();
for (const e of humanEntries.slice(0,10)) console.log(`  ${e.word} broot=${e.broot} hw=${e.headword}`);

db.close();
