const Database = require('better-sqlite3');
const db = new Database('lanes_data/lexicon.sqlite');

function getEntries(broot, label) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`ROOT: ${label} (broot=${broot})`);
  console.log('='.repeat(60));
  const entries = db.prepare("SELECT id, word, bword, headword, xml FROM entry WHERE broot = ?").all(broot);
  console.log(`Found ${entries.length} entries`);
  for (const e of entries) {
    const text = e.xml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`\n--- ${e.headword || e.word} (id=${e.id}) ---`);
    console.log(text.substring(0, 3000));
    if (text.length > 3000) console.log('...[truncated]');
  }
}

// 1. qHm - قحم (to plunge into, rush)
getEntries('qHm', 'qHm قحم - plunge into');

// 2. sgb - سغب (hunger)
getEntries('sgb', 'sgb سغب - hunger');
// Also try sGb
getEntries('sGb', 'sGb - hunger alt');

// 3. $>m - شأم (left hand, ill omen) - Buckwalter $ = shin, > = hamza
getEntries("\$>m", 'shAm شأم - left/ill omen');
// Also try $Am
getEntries('$Am', 'shAm alt');
// Also try without hamza
getEntries('$m', 'shm');

db.close();
