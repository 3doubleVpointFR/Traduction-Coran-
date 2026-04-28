const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// Translations built from VWA sense_retenu data and full_translation,
// corrected per project rules:
// - "Dieu" not "Allah"
// - "Talout" not "Saul" (Arabic transliteration for proper names)
// - No "châtiment" → "rétribution"
// - No "craignez" for taqwa → "prémunissez-vous"
// - No "grâce" → "faveur"/"bienfait"
// - Natural French (français courant)

const fixes = [
  {
    verse_id: 254, // V2:247
    analysis_id: 613,
    translation_arab:
      `Et leur prophète leur dit : « Dieu vous a désigné Talout comme roi. » ` +
      `Ils dirent : « Comment aurait-il la royauté sur nous, alors que nous avons plus droit à la royauté que lui, ` +
      `et qu'il n'a pas été pourvu d'abondance de richesse ? » ` +
      `Il dit : « Dieu l'a élu pour vous et lui a accordé une ample stature dans le savoir et dans le corps. ` +
      `Et Dieu donne Sa royauté à qui Il veut. Et Dieu est Vaste, Connaissant. »`,
  },
  {
    verse_id: 255, // V2:248
    analysis_id: 612,
    translation_arab:
      `Et leur prophète leur dit : « Le signe de sa royauté est que vous viendra le Coffre, ` +
      `contenant une quiétude de votre Seigneur et des vestiges de ce qu'ont laissé la famille de Moussa et la famille de Haroun, ` +
      `porté par les anges. Il y a certes en cela un signe pour vous, si vous êtes croyants. »`,
  },
  {
    verse_id: 293, // V2:286
    analysis_id: 652,
    translation_arab:
      `Dieu n'impose à aucune âme une charge au-delà de sa capacité. ` +
      `À elle ce qu'elle a acquis, et contre elle ce qu'elle s'est chargée. ` +
      `Notre Seigneur, ne nous tiens pas rigueur si nous oublions ou si nous faillons ! ` +
      `Notre Seigneur, ne fais pas peser sur nous un fardeau comme Tu l'as fait peser sur ceux qui nous ont précédés ! ` +
      `Notre Seigneur, ne nous charge pas de ce que nous n'avons pas la force de porter ! ` +
      `Pardonne-nous, absous-nous et prends-nous en miséricorde. ` +
      `Tu es notre Protecteur, secours-nous donc contre le peuple des ingrats.`,
  },
];

async function main() {
  for (const fix of fixes) {
    console.log(`\nUpdating verse_id=${fix.verse_id} (analysis_id=${fix.analysis_id})...`);

    const { data, error } = await supabase
      .from('verse_analyses')
      .update({ translation_arab: fix.translation_arab })
      .eq('id', fix.analysis_id)
      .eq('verse_id', fix.verse_id)
      .select('id,verse_id,translation_arab');

    if (error) {
      console.error(`  ERROR:`, error.message);
    } else if (!data || data.length === 0) {
      console.error(`  WARNING: No row matched verse_id=${fix.verse_id} analysis_id=${fix.analysis_id}`);
    } else {
      console.log(`  OK — updated. New translation_arab:`);
      console.log(`  ${data[0].translation_arab.substring(0, 120)}...`);
    }
  }

  // Verification pass
  console.log('\n' + '='.repeat(60));
  console.log('VERIFICATION — re-reading all 3 verses:\n');
  const { data: check } = await supabase
    .from('verse_analyses')
    .select('verse_id,translation_arab')
    .in('verse_id', [254, 255, 293]);

  for (const c of check) {
    const isArabic = /[\u0600-\u06FF]/.test(c.translation_arab);
    console.log(`verse_id=${c.verse_id}: ${isArabic ? 'STILL ARABIC!' : 'OK (French)'}`);
    console.log(`  ${c.translation_arab.substring(0, 100)}...`);
    console.log();
  }
}

main().catch(console.error);
