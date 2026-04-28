// Lane's lookup for mry (م ر ي). The broot in Lane's uses Buckwalter: m=m, r=r, y=y → "mry"
const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

// look at schema
const cols = db.prepare("PRAGMA table_info(entry)").all();
console.log('cols:', cols.map(c => c.name).join(', '));

// search for mry
const rows = db.prepare("SELECT rowid, * FROM entry WHERE broot = ?").all('mry');
console.log(`\nrows with broot='mry': ${rows.length}`);
for (const r of rows) {
  console.log('---');
  for (const [k, v] of Object.entries(r)) {
    if (k === 'xml') continue;
    console.log(`${k}:`, v);
  }
  console.log('XML (first 3000):', (r.xml || '').substring(0, 3000));
}

// also look for the form imtarā (VIII form) spelling
const rows2 = db.prepare("SELECT rowid, broot, headword FROM entry WHERE broot LIKE '%mry%' OR broot LIKE '%mrw%' LIMIT 20").all();
console.log('\nbroot LIKE mry/mrw:', rows2);
