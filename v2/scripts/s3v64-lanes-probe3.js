const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

// hamza may be : ' > < } |. Try $y with hamza variants
const tries = ['$y>', '$y<', '$yH', '$yA^', '$yA2'];
for (const bw of tries) {
  const rows = db.prepare("SELECT id, headword, broot FROM entry WHERE broot=? LIMIT 3").all(bw);
  console.log(bw + ' → ' + rows.length + ' rows' + (rows[0] ? ' ex: ' + rows[0].headword : ''));
}

// Try headword search with شا or شَىْء
const rows = db.prepare("SELECT id, headword, broot FROM entry WHERE headword LIKE 'شا%' LIMIT 10").all();
console.log('\nheadword LIKE شا%:', rows.slice(0, 10));

// Search for shay' by bareword
const r2 = db.prepare("SELECT DISTINCT broot FROM entry WHERE bareword LIKE '$y%' LIMIT 20").all();
console.log('\nbareword like $y%:', r2);

// Maybe it's filed under شَاءَ (shā'a, to wish)
const r3 = db.prepare("SELECT id, headword, broot FROM entry WHERE headword LIKE '%شَاء%' OR headword LIKE '%شَىْء%' LIMIT 10").all();
console.log('\n شاء or شى headwords:', r3);

// try broot $A or $y>
const r4 = db.prepare("SELECT DISTINCT broot FROM entry WHERE broot LIKE '$%' ORDER BY broot LIMIT 80").all();
console.log('\nAll $ broots start:', r4.slice(0, 40));

db.close();
