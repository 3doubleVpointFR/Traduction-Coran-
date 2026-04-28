const Database = require('better-sqlite3');
const db = new Database('./v2/lanes_data/lexicon.sqlite');
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
console.log('Tables:', tables.map(t=>t.name));
const t0 = tables[0].name;
const s = db.prepare('SELECT * FROM ' + t0 + ' LIMIT 2').all();
console.log('Sample cols:', Object.keys(s[0]));
console.log('Sample row:', JSON.stringify(s[0]).substring(0,300));
