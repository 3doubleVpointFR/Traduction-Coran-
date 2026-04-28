// Extract Lane's definitions for specific roots
const Database = require('better-sqlite3');
const path = require('path');
const ldb = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'));

// Mapping from our transliteration to Lane's broot
const rootMap = {
  'khsr': 'xsr',   // خسر
  'dhly': '*ly',   // ذلي
  'khlaq': 'xlq',  // خلق (already done as 'kh l q')
  'stwy': 'swy',   // سوي
  'ana': 'AnY',    // أني
  'xlf': 'xlf',    // خلف
  'man': 'mn',     // من
  'sfk': 'sfk',    // سفك
  'dmw': 'dmw',    // دمو
  'sbh': 'sbH',    // سبح
  'qds': 'qds',    // قدس
  'any': 'AnY',    // أني
};

function extractSenses(broot, arabicRoot) {
  console.log(`\n=== ${broot} (${arabicRoot}) ===`);

  // Find entries for this root
  const entries = ldb.prepare(`SELECT id, root, broot, word, bword, itype, xml FROM entry WHERE broot = ? LIMIT 20`).all(broot);

  if (entries.length === 0) {
    // Try with wildcards
    const entries2 = ldb.prepare(`SELECT id, root, broot, word, bword, itype, xml FROM entry WHERE broot LIKE ? LIMIT 20`).all(broot + '%');
    if (entries2.length > 0) {
      console.log('Found with wildcard:', entries2.length);
      entries.push(...entries2);
    }
  }

  console.log(`Found ${entries.length} entries`);

  entries.forEach(e => {
    console.log(`- ${e.bword} (${e.word}) [${e.itype}]`);

    // Extract meanings from XML
    const xml = e.xml || '';
    // Look for <hi rend="ital"> or <sense> tags
    const hiMatches = xml.match(/<hi rend="ital">[^<]+<\/hi>/g) || [];
    const senseMatches = xml.match(/<sense[^>]*>[^<]*<\/sense>/g) || [];

    if (hiMatches.length > 0) {
      console.log('  Meanings (hi):', hiMatches.slice(0, 5).map(m => m.replace(/<[^>]+>/g, '')).join('; '));
    }

    // Also extract plain text meaning snippets
    const plainText = xml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (plainText.length > 100) {
      console.log('  Text preview:', plainText.substring(0, 300) + '...');
    }
  });
}

// Extract for our roots
const roots = ['xsr', 'swy', 'xlf', 'sfk', 'sbH', 'qds'];
roots.forEach(r => extractSenses(r, r));
