const Database = require('better-sqlite3');
const db = new Database('lanes_data/lexicon.sqlite');

function getFullEntry(broot, label) {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`ROOT: ${label} (broot=${broot})`);
  console.log('='.repeat(80));

  const entries = db.prepare("SELECT id, word, bword, broot, headword, xml FROM entry WHERE broot = ?").all(broot);
  console.log(`Found ${entries.length} entries`);

  for (const e of entries) {
    const text = e.xml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`\n--- ${e.headword || e.word} (id=${e.id}, ${text.length} chars) ---`);
    // Print full text up to 5000 chars per entry
    console.log(text.substring(0, 5000));
    if (text.length > 5000) console.log(`... [truncated, total ${text.length} chars]`);
  }
}

// 1. kbd - كبد (liver/hardship)
getFullEntry('kbd', 'kbd كبد');

// 2. lbd - لبد (compact/abundant)
getFullEntry('lbd', 'lbd لبد');

// 3. njd - نجد (elevated path)
getFullEntry('njd', 'njd نجد');

// 4. $fh - شفه (lips) - Buckwalter $ = shin
getFullEntry('$fh', '$fh شفه (lips)');

// 5. Ans - أنس (human/intimacy)
getFullEntry('Ans', 'Ans أنس (human)');

db.close();
