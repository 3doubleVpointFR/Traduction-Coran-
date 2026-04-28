const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const db = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

const tgts = [
  { name: 'shrk', bw: '$rk' },
  { name: 'shyy', bw: '$yA^' },
  { name: 'axdh', bw: 'Ax*' },
  { name: 'slm', bw: 'slm' }
];

let out = '';
for (const r of tgts) {
  out += '\n\n════════════ ' + r.name + ' (broot=' + r.bw + ') ════════════\n';
  const rows = db.prepare("SELECT id, headword, xml FROM entry WHERE broot=? ORDER BY id").all(r.bw);
  for (const row of rows) {
    // strip XML tags roughly
    const text = (row.xml || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    out += '\n--- id=' + row.id + ' hw=' + row.headword + ' ---\n' + text.substring(0, 3500) + (text.length > 3500 ? '...' : '') + '\n';
  }
}
fs.writeFileSync(path.join(__dirname, 's3v64-lanes-dump.txt'), out);
console.log('Written to s3v64-lanes-dump.txt, size=' + out.length);
db.close();
