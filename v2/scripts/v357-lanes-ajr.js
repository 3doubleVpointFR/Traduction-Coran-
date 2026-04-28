const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join('.', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

// The Buckwalter for أ ج ر is 'Ajr'. Buckwalter: A = hamza+alif, not just hamza. Try both variants
const queries = ["Ajr", "'jr", "jr"];
for (const q of queries) {
  console.log('\n=== query broot=', q, '===');
  const rows = db.prepare("SELECT id, broot, headword, LENGTH(xml) as xl FROM entry WHERE broot = ?").all(q);
  console.log('found:', rows.length);
  rows.slice(0, 20).forEach(r => console.log(r.id, r.broot, r.headword, r.xl));
}

// Also fuzzy
const rows = db.prepare("SELECT DISTINCT broot FROM entry WHERE broot LIKE '%jr%' LIMIT 30").all();
console.log('\nbroots containing jr:', rows.map(r=>r.broot).join(', '));
