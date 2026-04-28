const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

// shay'un root = sh-y-'? Buckwalter: $-y-'. Also try: $y' (ء=')
const tries = ["$y'", '$y"', '$yy', '$yz', '$yA', 'Sy"', "$y`", "$'y"];
for (const bw of tries) {
  const rows = db.prepare("SELECT id, headword, broot FROM entry WHERE broot=? LIMIT 3").all(bw);
  console.log(bw + ' → ' + rows.length + ' rows' + (rows[0] ? ' ex: ' + rows[0].headword + ' broot=' + rows[0].broot : ''));
}

// Search LIKE shay
const rows = db.prepare("SELECT DISTINCT broot FROM entry WHERE broot LIKE '$y%' LIMIT 20").all();
console.log('\nBroots starting with $y:', rows);

// Also check شيأ
const rows2 = db.prepare("SELECT id, headword, broot FROM entry WHERE headword LIKE '%شيء%' LIMIT 5").all();
console.log('\nheadword LIKE %شيء%:', rows2);

db.close();
