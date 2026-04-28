// S3:V61 — consult Lane's for suspect roots : bhl, len, nsw
// Lane's broot column is in Buckwalter transliteration
// Buckwalter mapping : ب=b ه=h ل=l ن=n س=s و=w ع=E ل=l
// bhl → bhl, len → lEn, nsw → nsw
const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

// list tables
console.log('=== TABLES ===');
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
console.log(tables);

console.log('\n=== entry sample ===');
const sample = db.prepare("SELECT * FROM entry LIMIT 1").all();
console.log(Object.keys(sample[0] || {}));

for (const r of [{name:'bhl', bw:'bhl'}, {name:'len', bw:'lEn'}, {name:'nsw', bw:'nsw'}, {name:'nsy', bw:'nsy'}]) {
  console.log('\n=== root broot=' + r.bw + ' (' + r.name + ') ===');
  const rows = db.prepare("SELECT * FROM entry WHERE broot=?").all(r.bw);
  console.log('matches=' + rows.length);
  for (const row of rows) {
    console.log('--- entry ' + row.id + ' (' + (row.headword || '') + ') ---');
    // print just first 3000 chars of xml
    console.log((row.xml || '').substring(0, 3000));
    console.log('...');
  }
}

db.close();
