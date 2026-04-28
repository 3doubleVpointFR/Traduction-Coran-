// tmp-lanes-sya.js — Search Lane's Lexicon for root شيء (sh-y-ʾ)
const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'), { readonly: true });

// ── 1. Search root table with exact matches ──
const exactVariations = ['شيء', 'شيا', 'شىء', 'شىا'];
console.log('=== EXACT ROOT MATCHES ===');
for (const v of exactVariations) {
  const rows = db.prepare('SELECT id, word, bword, letter, bletter FROM root WHERE word = ?').all(v);
  console.log(`\nRoot "${v}" → ${rows.length} result(s)`);
  for (const r of rows) {
    console.log(`  id=${r.id}  word=${r.word}  bword=${r.bword}  letter=${r.letter}  bletter=${r.bletter}`);
  }
}

// ── 2. LIKE search for شي ──
console.log('\n=== LIKE SEARCH (word LIKE "%شي%") ===');
const likeRows = db.prepare("SELECT id, word, bword, letter, bletter FROM root WHERE word LIKE '%شي%'").all();
console.log(`Found ${likeRows.length} root(s):`);
for (const r of likeRows) {
  console.log(`  id=${r.id}  word=${r.word}  bword=${r.bword}  letter=${r.letter}  bletter=${r.bletter}`);
}

// ── 3. Also try Buckwalter variations ──
const bwVariations = ['$y}', '$yA', '$y<', '$y>'];
console.log('\n=== BUCKWALTER ROOT MATCHES ===');
for (const bw of bwVariations) {
  const rows = db.prepare('SELECT id, word, bword FROM root WHERE bword = ?').all(bw);
  console.log(`bword="${bw}" → ${rows.length} result(s)`);
  for (const r of rows) {
    console.log(`  id=${r.id}  word=${r.word}  bword=${r.bword}`);
  }
}

// Also LIKE on bword
console.log('\n=== BUCKWALTER LIKE SEARCH (bword LIKE "%$y%") ===');
const bwLike = db.prepare("SELECT id, word, bword FROM root WHERE bword LIKE '%$y%'").all();
console.log(`Found ${bwLike.length} root(s):`);
for (const r of bwLike) {
  console.log(`  id=${r.id}  word=${r.word}  bword=${r.bword}`);
}

// ── 4. For all matching roots, get entries ──
// Collect all unique root words found
const allRootWords = new Set();
for (const v of exactVariations) {
  const rows = db.prepare('SELECT word FROM root WHERE word = ?').all(v);
  rows.forEach(r => allRootWords.add(r.word));
}
likeRows.forEach(r => allRootWords.add(r.word));

// Also try broot matching in entries
const allBroots = new Set();
for (const bw of bwVariations) {
  const rows = db.prepare('SELECT bword FROM root WHERE bword = ?').all(bw);
  rows.forEach(r => allBroots.add(r.bword));
}
bwLike.forEach(r => allBroots.add(r.bword));

console.log('\n=== ENTRIES FOR MATCHING ROOTS ===');
console.log(`Root words to search: ${[...allRootWords].join(', ') || '(none)'}`);
console.log(`Buckwalter roots to search: ${[...allBroots].join(', ') || '(none)'}`);

function stripXml(xml) {
  if (!xml) return '';
  return xml.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

// Search entries by root (Arabic)
for (const rw of allRootWords) {
  const entries = db.prepare('SELECT id, root, broot, word, bword, headword, type, xml FROM entry WHERE root = ?').all(rw);
  console.log(`\n--- Entries for root="${rw}": ${entries.length} entry/entries ---`);
  for (const e of entries) {
    const plain = stripXml(e.xml);
    console.log(`\n  Entry id=${e.id}  word=${e.word}  bword=${e.bword}  headword=${e.headword}  type=${e.type}`);
    console.log(`  Text (first 500 chars): ${plain.substring(0, 500)}`);
  }
}

// Search entries by broot (Buckwalter)
for (const br of allBroots) {
  const entries = db.prepare('SELECT id, root, broot, word, bword, headword, type, xml FROM entry WHERE broot = ?').all(br);
  console.log(`\n--- Entries for broot="${br}": ${entries.length} entry/entries ---`);
  for (const e of entries) {
    const plain = stripXml(e.xml);
    console.log(`\n  Entry id=${e.id}  word=${e.word}  bword=${e.bword}  headword=${e.headword}  type=${e.type}`);
    console.log(`  Text (first 500 chars): ${plain.substring(0, 500)}`);
  }
}

// ── 5. Final check: distinct roots containing shin ──
console.log('\n=== ALL ROOTS WITH LETTER shin (ش) ===');
const shinRoots = db.prepare("SELECT id, word, bword FROM root WHERE letter = 'ش' OR bletter = '$'").all();
console.log(`Found ${shinRoots.length} root(s) with letter shin:`);
for (const r of shinRoots) {
  console.log(`  id=${r.id}  word=${r.word}  bword=${r.bword}`);
}

db.close();
console.log('\nDone.');
