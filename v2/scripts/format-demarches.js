const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function formatDemarche(text) {
  if (!text) return text;

  // Remove §DEMARCHE§ header (we'll re-add it)
  let content = text.replace(/§DEMARCHE§\n?/, '').trim();

  // Remove §JUSTIFICATION§ and §CRITIQUE§ sections entirely — they're separate fields
  // Actually keep them but format them too

  // Split word analyses: each starts with "Le verbe", "Le mot", "Le nom", "La particule",
  // "Le pronom", "La préposition", "L'expression", "La conjonction", "La negation"
  // These should each be their own paragraph
  const wordAnalysisPattern = /(?<!\n\n)(?=(?:Le verbe|Le mot|Le nom|La particule|Le pronom|La préposition|La preposition|L'expression|La conjonction|La conjunction|La negation|La négation|Le démonstratif|Le demonstratif|L'accompli|L'inaccompli|Le pluriel|Le préfixe|Le prefixe|Le suffixe|L'article|L'adjectif|Le comparatif|Le superlatif|L'adverbe|Le terme|La racine|Le couple|La formule|Le segment|L'impératif|L'imperatif|Le substantif|Le complément|Le complement)(?:\s|\*\*))/g;

  content = content.replace(wordAnalysisPattern, '\n\n');

  // Also split on "§JUSTIFICATION§" and "§CRITIQUE§"
  content = content.replace(/(?<!\n\n)§JUSTIFICATION§/g, '\n\n§JUSTIFICATION§');
  content = content.replace(/(?<!\n\n)§CRITIQUE§/g, '\n\n§CRITIQUE§');

  // Also split long sentences that start with bold words "**xxx**"
  // Pattern: period/sentence end followed by bold word start
  content = content.replace(/\. (\*\*[a-zA-Zāīūṣṭḍḥẓʿ']+\*\*) est /g, '.\n\n$1 est ');

  // Clean up: remove triple+ newlines
  content = content.replace(/\n{3,}/g, '\n\n');

  // Re-add header
  return '§DEMARCHE§\n' + content.trim();
}

(async () => {
  const {data} = await db.from('verse_analyses')
    .select('id, verse_id, translation_explanation')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let fixed = 0;

  for (const va of data) {
    const orig = va.translation_explanation || '';
    if (orig.length < 50) continue;

    const formatted = formatDemarche(orig);

    if (formatted !== orig) {
      await db.from('verse_analyses').update({translation_explanation: formatted}).eq('id', va.id);
      fixed++;
    }
  }

  console.log('Démarches reformatées:', fixed);

  // Show a sample
  const {data: sample} = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 109).single();
  console.log('\n=== V102 (après formatage) ===');
  const lines = sample.translation_explanation.split('\n');
  lines.slice(0, 20).forEach(l => console.log(l.substring(0, 100)));
})();
