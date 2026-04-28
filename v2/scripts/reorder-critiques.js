const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const verseIds = [342, 343, 344, 345, 348]; // V49, V50, V51, V52, V55
  for (const vid of verseIds) {
    const { data } = await db.from('verse_analyses')
      .select('id, verse_id, translation_arab, translation_explanation')
      .eq('verse_id', vid).single();
    const vnum = vid - 293;

    const expl = data.translation_explanation;
    const critIdx = expl.indexOf('§CRITIQUE§');
    if (critIdx === -1) { console.log('V' + vnum + ': pas de §CRITIQUE§'); continue; }

    const before = expl.substring(0, critIdx);
    const critique = expl.substring(critIdx + 10);

    // Split sur les **X vs Y** — chaque entrée = un paragraphe
    // Un paragraphe commence par **X vs Y** et se termine avant le prochain ** ou fin
    const entryRegex = /(\*\*[^*]+?vs[^*]+?\*\*[\s\S]*?)(?=(?:\n\s*\n\*\*[^*]+?vs[^*]+?\*\*)|\s*$)/g;
    const entries = [...critique.matchAll(entryRegex)].map(m => m[1].trim());

    if (entries.length < 2) {
      console.log('V' + vnum + ': < 2 entrées, skip');
      continue;
    }

    // Pour chaque entrée, extraire le mot "notre" (premier terme de **X vs Y**) et sa position dans translation_arab
    const ourTrad = data.translation_arab.toLowerCase();
    const entriesWithPos = entries.map(entry => {
      const match = entry.match(/\*\*([^*]+?)\s+vs\s+/);
      if (!match) return { entry, pos: 99999 };
      const word = match[1].trim().toLowerCase();
      let pos = ourTrad.indexOf(word);
      if (pos < 0) {
        // Essayer sans article (si word commence par "le ", "la ", "les ", "l'")
        const stripped = word.replace(/^(les |la |le |l'|l)/, '');
        pos = ourTrad.indexOf(stripped);
        if (pos < 0) pos = 99999; // not found, mettre à la fin
      }
      return { entry, word, pos };
    });

    // Afficher ordre actuel vs ordre corrigé
    console.log('\n========== V' + vnum + ' ==========');
    console.log('Avant:');
    entriesWithPos.forEach((e, i) => console.log('  ' + (i+1) + '. "' + e.word + '" pos=' + e.pos));

    entriesWithPos.sort((a, b) => a.pos - b.pos);
    console.log('Après:');
    entriesWithPos.forEach((e, i) => console.log('  ' + (i+1) + '. "' + e.word + '" pos=' + e.pos));

    // Réassembler
    const newCritique = '§CRITIQUE§\n' + entriesWithPos.map(e => e.entry).join('\n\n');
    const newExpl = before + newCritique;

    const { error } = await db.from('verse_analyses').update({ translation_explanation: newExpl }).eq('id', data.id);
    if (error) console.error('  ERREUR: ' + error.message);
    else console.log('  → V' + vnum + ' réordonné ✅');
  }
}
run().catch(console.error);
