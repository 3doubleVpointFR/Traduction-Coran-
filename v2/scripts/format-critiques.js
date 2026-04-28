const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function formatCritiqueSection(critique) {
  if (!critique || critique.length < 50) return critique;

  let text = critique.trim();

  // 1. Add paragraph breaks before comparison patterns
  // "Hamidullah donne", "Notre traduction", "La traduction courante"
  text = text.replace(/(?<!\n\n)(?=(?:Hamidullah donne|Notre traduction donne|La traduction courante|Les traductions courantes|La traduction de Hamidullah|Hamidullah traduit|Les traducteurs classiques|Blachère|Chouraqui|Berque|Pickthall|Yusuf Ali))/g, '\n\n');

  // 2. Add bold to key Arabic/translated words that appear in quotes or italic
  // Pattern: « xxx » → **xxx**
  // Only if not already bold
  text = text.replace(/(?<!\*\*)«\s*([^»]+)\s*»(?!\*\*)/g, '**« $1 »**');

  // 3. Add paragraph breaks before each new critique point
  // Pattern: sentences starting with "Le mot", "Le verbe", "Le terme", "Notre choix", "Le sens"
  text = text.replace(/(?<!\n\n)(?=(?:Le mot |Le verbe |Le terme |Notre choix |Le sens |En résumé|En resume|En conclusion|La difference|La différence|Ce choix|Notre approche))/g, '\n\n');

  // 4. For critiques without bold at all, try to bold the first word/expression being discussed
  // Pattern: start of critique with a word in single quotes or the discussed translation term
  if (!text.includes('**')) {
    // Bold words in single quotes
    text = text.replace(/'([^']+)'/g, "**'$1'**");
    // Bold key comparison phrases
    text = text.replace(/(nous traduisons par |nous retenons |nous choisissons |nous rendons par )([^\.\,]+)/gi, '$1**$2**');
  }

  // 5. Split long paragraphs that discuss multiple Hamidullah translations
  text = text.replace(/\. (Hamidullah)/g, '.\n\n$1');
  text = text.replace(/\. (Pour le mot)/g, '.\n\n$1');
  text = text.replace(/\. (Pour le verbe)/g, '.\n\n$1');

  // Clean up
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

function formatJustificationSection(justif) {
  if (!justif || justif.length < 50) return justif;
  let text = justif.trim();

  // Add paragraph breaks before each bold word analysis
  text = text.replace(/(?<!\n\n)(?=\*\*[^*]+\*\* —)/g, '\n\n');

  // For justifications without bold, add bold to quoted words
  if (!text.includes('**')) {
    // Pattern: "mot — justification" at start of line or after period
    text = text.replace(/(?:^|\n)([a-zA-ZàâéèêëïîôùûüçÀÂÉÈÊËÏÎÔÙÛÜÇāīūṣṭḍḥẓʿ']+(?:\s+[a-zA-ZàâéèêëïîôùûüçÀÂÉÈÊËÏÎÔÙÛÜÇāīūṣṭḍḥẓʿ']+)?) — /gm, '\n\n**$1** — ');
  }

  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

(async () => {
  const {data} = await db.from('verse_analyses')
    .select('id, verse_id, translation_explanation')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let fixed = 0;

  for (const va of data) {
    let exp = va.translation_explanation || '';
    if (exp.length < 50) continue;

    let changed = false;

    // Process §CRITIQUE§ section
    const critiqueIdx = exp.indexOf('§CRITIQUE§');
    if (critiqueIdx > -1) {
      const beforeCritique = exp.substring(0, critiqueIdx);
      let critiqueContent = exp.substring(critiqueIdx + 10);

      // Check if there's another section after critique
      const nextSection = critiqueContent.indexOf('§');
      let afterCritique = '';
      if (nextSection > -1) {
        afterCritique = critiqueContent.substring(nextSection);
        critiqueContent = critiqueContent.substring(0, nextSection);
      }

      const formatted = formatCritiqueSection(critiqueContent);
      if (formatted !== critiqueContent) {
        exp = beforeCritique + '§CRITIQUE§\n' + formatted + (afterCritique ? '\n\n' + afterCritique : '');
        changed = true;
      }
    }

    // Process §JUSTIFICATION§ section
    const justIdx = exp.indexOf('§JUSTIFICATION§');
    if (justIdx > -1) {
      const beforeJust = exp.substring(0, justIdx);
      let justContent = exp.substring(justIdx + 15);

      const nextSection = justContent.indexOf('§');
      let afterJust = '';
      if (nextSection > -1) {
        afterJust = justContent.substring(nextSection);
        justContent = justContent.substring(0, nextSection);
      }

      const formatted = formatJustificationSection(justContent);
      if (formatted !== justContent) {
        exp = beforeJust + '§JUSTIFICATION§\n' + formatted + (afterJust ? '\n\n' + afterJust : '');
        changed = true;
      }
    }

    // Clean up triple newlines
    exp = exp.replace(/\n{3,}/g, '\n\n');

    if (changed) {
      await db.from('verse_analyses').update({translation_explanation: exp}).eq('id', va.id);
      fixed++;
    }
  }

  console.log('Critiques/Justifications reformatées:', fixed);

  // Show sample
  const {data: sample} = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 109).single();
  const exp = sample.translation_explanation;
  const ci = exp.indexOf('§CRITIQUE§');
  if (ci > -1) {
    console.log('\n=== CRITIQUE V102 (après) ===');
    console.log(exp.substring(ci, ci + 600));
  }
})();
