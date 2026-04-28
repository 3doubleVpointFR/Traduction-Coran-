const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join('.', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

// Get the main verbal root entry "Ajr" for أَجَرَهُ and the noun أَجْرٌ
const ids = [6200, 6205, 6207, 6208, 6209, 6210, 6201, 6203, 6204];
for (const id of ids) {
  const r = db.prepare("SELECT id, headword, broot, xml FROM entry WHERE id=?").get(id);
  console.log('\n========= id', id, r.headword, '=========');
  // Strip XML tags roughly
  const text = r.xml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(text.slice(0, 4000));
}
