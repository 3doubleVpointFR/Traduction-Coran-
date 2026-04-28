const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function cleanupJargon(text) {
  if (!text) return text;
  let t = text;

  // === FIX 1: "forme II (intensification)I" → "forme III (interaction/réciprocité)" ===
  // This happened because "forme III" was caught by "forme II" regex first
  t = t.replace(/forme II \(intensification\)II \(intensification\)/g, 'forme IV (faire faire quelque chose)');
  t = t.replace(/forme II \(intensification\)I\b/g, 'forme III (interaction/réciprocité)');
  t = t.replace(/forme V \(réflexif — se faire à soi-même\)II \(intensification\)/g, 'forme VII (passif — subir l\'action)');
  t = t.replace(/forme V \(réflexif — se faire à soi-même\)I\b/g, 'forme VI (action mutuelle entre plusieurs)');

  // Also fix forme VIII that may have been mangled
  t = t.replace(/forme V \(réflexif — se faire à soi-même\)III \(interaction\/réciprocité\)/g, 'forme VIII (réflexif — agir sur soi-même)');

  // Fix "forme I (forme de base)V" → "forme IV"
  t = t.replace(/forme I \(forme de base\)V\b/g, 'forme IV (faire faire quelque chose)');
  t = t.replace(/forme I \(forme de base\)X\b/g, 'forme IX');

  // === FIX 2: Double articles "La l'inclinaison", "Le l'effort" ===
  t = t.replace(/\bLa l'/g, 'L\'');
  t = t.replace(/\bLe l'/g, 'L\'');
  t = t.replace(/\bla l'/g, 'l\'');
  t = t.replace(/\ble l'/g, 'l\'');
  t = t.replace(/\bde l'l'/g, 'de l\'');

  // === FIX 3: Double explanations — "allusions voilees (l'allusion voilée (*ta'rīḍ*))" ===
  // Pattern: French word + (same French word with Arabic) → keep just the first + (Arabic)
  t = t.replace(/allusions voilees \(l'allusion voilée \(\*ta'rīḍ\*\)\)/g, 'allusions voilées (*ta\'rīḍ*)');
  t = t.replace(/allusions voilées \(l'allusion voilée \(\*ta'rīḍ\*\)\)/g, 'allusions voilées (*ta\'rīḍ*)');
  t = t.replace(/declaration directe\/la déclaration directe \(\*taṣrīḥ\*\)/g, 'déclaration directe (*taṣrīḥ*)');

  // Generic pattern: "mot (le/la même-mot (*arab*))" → "mot (*arab*)"
  t = t.replace(/(\w+)\s*\((?:le |la |l'|les )\1[^)]*\(\*([^*]+)\*\)\)/gi, '$1 (*$2*)');

  // === FIX 4: "La La" or "Le Le" doubling ===
  t = t.replace(/\bLa La\b/g, 'La');
  t = t.replace(/\bLe Le\b/g, 'Le');
  t = t.replace(/\bla la\b/g, 'la');

  // === FIX 5: Term already in French context, no need for replacement ===
  // "la junaha = pas d'inclinaison" was replaced to "la l'inclinaison vers la faute = pas d'inclinaison"
  t = t.replace(/l'inclinaison vers la faute \(\*junāḥa\*\) = pas d'inclinaison/g,
    'absence de faute (*junāḥa*) — formule négative standard signifiant l\'absence de responsabilité morale');

  // === FIX 6: Redundant "(les gens)" after **al-nās** when "les gens" is already nearby ===
  // If "les gens" appears within 20 chars before or after, don't add it again
  // Too complex for regex, skip

  // === FIX 7: forme IV (aqaama), forme VIII (ittaqa) etc — remove Arabic verb in parens after already-explained form ===
  // These are specific Arabic verb forms in parentheses that are meaningless to the reader
  t = t.replace(/forme [IVX]+ \([^)]+\) \(([a-z'āīūṣṭḍḥẓʿ]+)\)/gi, (match, arabWord) => {
    // Remove the standalone Arabic word in second parens
    return match.replace(` (${arabWord})`, '');
  });

  // Remove standalone Arabic verb forms in parentheses after forme explanations
  // Pattern: "forme IV (faire faire quelque chose) (aqaama)" → remove "(aqaama)"
  t = t.replace(/(forme [IVX]+ \([^)]+\))\s*\([a-z'āīūṣṭḍḥẓʿ]{3,}\)/gi, '$1');

  // === FIX 8: "Le dictionnaire de référence Lane's (lexique arabe-anglais de référence)" is too long ===
  // Simplify to "Le dictionnaire Lane's" for subsequent mentions
  // Keep first occurrence long, shorten the rest
  let laneCount = 0;
  t = t.replace(/Le dictionnaire de référence Lane's \(lexique arabe-anglais de référence\) donne/g, () => {
    laneCount++;
    if (laneCount === 1) return 'Le dictionnaire de référence Lane\'s donne';
    return 'Lane\'s donne';
  });

  // === FIX 9: Clean up multiple spaces and weird punctuation ===
  t = t.replace(/  +/g, ' ');
  t = t.replace(/ \./g, '.');
  t = t.replace(/ ,/g, ',');
  t = t.replace(/\(\(/g, '(');
  t = t.replace(/\)\)/g, ')');

  return t;
}

(async () => {
  const {data} = await db.from('verse_analyses')
    .select('id, verse_id, translation_explanation')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let fixed = 0;

  for (const va of data) {
    if (!va.translation_explanation || va.translation_explanation.length < 50) continue;
    const original = va.translation_explanation;
    const cleaned = cleanupJargon(original);
    if (cleaned !== original) {
      await db.from('verse_analyses').update({translation_explanation: cleaned}).eq('id', va.id);
      fixed++;
    }
  }

  console.log('Démarches nettoyées:', fixed);

  // Show the problem verses
  for (const vid of [200, 242]) {
    const {data: va} = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    console.log('\n=== V' + (vid-7) + ' ===');
    console.log(va.translation_explanation.substring(0, 800));
    console.log('...\n');
  }
})();
