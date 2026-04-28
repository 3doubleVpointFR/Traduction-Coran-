const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

const rows = db.prepare("SELECT id, broot, headword, xml FROM entry WHERE broot = ?").all('mrY');
console.log(`Count: ${rows.length}`);
for (const r of rows) {
  console.log(`\n===== id=${r.id} headword=${r.headword} =====`);
  // strip XML tags for readability
  let txt = r.xml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(txt.substring(0, 4000));
}
