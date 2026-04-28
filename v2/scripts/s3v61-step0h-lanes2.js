// Check Lane's for len (laʿana) and nisāʾ (women) - look in multiple brocs
const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

// look up the actual verb laʿana
for (const b of ['lEn', 'lan', 'nsA', 'nsw', 'nsy', 'nsA\'', 'nsY']) {
  console.log('\n=== broot=' + b + ' ===');
  const rows = db.prepare("SELECT id,headword,bareword FROM entry WHERE broot=?").all(b);
  console.log('matches=' + rows.length);
  for (const r of rows) console.log('  ' + r.id + ' ' + r.headword);
}

// search by bareword / bword
console.log('\n=== search for words starting with نساء or لعن ===');
let r = db.prepare("SELECT id,broot,headword,bareword FROM entry WHERE bareword LIKE ? LIMIT 20").all('%نساء%');
for (const e of r) console.log('  bareword=' + e.bareword + ' broot=' + e.broot + ' head=' + e.headword);

r = db.prepare("SELECT id,broot,headword,bareword FROM entry WHERE bareword LIKE ? LIMIT 20").all('%لعن%');
for (const e of r) console.log('  bareword=' + e.bareword + ' broot=' + e.broot + ' head=' + e.headword);

// Lane's might index some verbs by bword (Buckwalter of word) starting with laEana
r = db.prepare("SELECT DISTINCT broot FROM entry WHERE bword LIKE ?").all('laEan%');
console.log('\n=== broots containing laEan ===');
for (const e of r) console.log('  ' + e.broot);

r = db.prepare("SELECT id,broot,headword,bareword FROM entry WHERE headword LIKE ? LIMIT 10").all('لَعَن%');
console.log('\n=== headword لَعَنَ ===');
for (const e of r) console.log('  broot=' + e.broot + ' head=' + e.headword);

db.close();
