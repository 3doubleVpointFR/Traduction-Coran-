// Lane's Buckwalter: ش=$ ر=r ك=k ي=y ء=' أ=> خ=x ذ=* ل=l م=m س=s
const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

// Let's first check the schema
const cols = db.prepare("PRAGMA table_info(entry)").all();
console.log('entry columns:', cols.map(c => c.name));

const tgts = [
  { name: 'shrk', bw: '$rk' },
  { name: 'shyy', bw: '$y'},
  { name: 'shy', bw: '$yA'},
  { name: 'axdh', bw: '>x*' },
  { name: 'axd', bw: 'Ax*' },
  { name: 'slm', bw: 'slm' }
];

for (const r of tgts) {
  console.log('\n════ ' + r.name + ' (broot=' + r.bw + ') ════');
  const rows = db.prepare("SELECT id, headword, broot, length(xml) as xlen FROM entry WHERE broot=? LIMIT 10").all(r.bw);
  console.log('rows=' + rows.length);
  for (const row of rows) console.log('  id=' + row.id + ' head=' + row.headword + ' xlen=' + row.xlen);
}

db.close();
