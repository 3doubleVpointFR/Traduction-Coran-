const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// CREATION DE LA RACINE hbt_h (حبط)
// word_key="hbt_h" pour eviter collision avec hbt = ه ب ط
// =====================================================

async function main() {
  console.log('=== CREATION RACINE hbt_h (حبط) ===\n');

  // 1. Creer dans word_analyses
  const { data: wa, error: waErr } = await supabase.from('word_analyses').insert({
    word_key: 'hbt_h',
    root_ar: 'ح ب ط',
    root_phon: 'hbt_h',
    total_occurrences: 13
  }).select().single();

  if (waErr) {
    if (waErr.message && waErr.message.includes('duplicate')) {
      console.log('word_analyses hbt_h existe deja — OK');
      // Recuperer l'id existant
      const { data: existing } = await supabase.from('word_analyses').select('id').eq('word_key','hbt_h').single();
      if (existing) {
        console.log('  id existant:', existing.id);
        await insertMeanings(existing.id);
      }
    } else {
      console.error('word_analyses ERROR:', waErr.message);
      return;
    }
  } else {
    console.log('word_analyses hbt_h cree, id=', wa.id);
    await insertMeanings(wa.id);
  }

  console.log('\n✅ RACINE hbt_h TERMINEE');
}

async function insertMeanings(waId) {
  // 2. Inserer les sens dans word_meanings
  const meanings = [
    {
      analysis_id: waId,
      concept: 'Gonflement/Bloat',
      sense: 'se gonfler | ventre gonfle et improductif',
      description: "Gonflement sans issue — l'animal mange en exces et son ventre se dilate jusqu'a ne plus rien evacuer. C'est un etat physique interieur d'accumulation sterile. C'est permanent une fois installe — le gonflement ne cede pas de lui-meme. Rien de ce qui est rentre ne peut ressortir utilement."
    },
    {
      analysis_id: waId,
      concept: 'Nullification/Aneantissement',
      sense: 'rendre nul | annuler les oeuvres | etre aneanti',
      description: "Acte ou fait de rendre vaines des oeuvres qui avaient ete accomplies — les annuler retroactivement comme si elles n'avaient pas eu lieu, leur oter tout effet et toute recompense. C'est directionnel et ponctuel comme annulation. Le resultat est permanent : les oeuvres ne comptent plus. L'image vient du ventre gonfle — tout ce qui a ete ingere reste en dedans sans produire rien de nourriciel."
    }
  ];

  for (const m of meanings) {
    // Verifier si deja existant
    const { count } = await supabase.from('word_meanings').select('*', { count: 'exact', head: true })
      .eq('analysis_id', waId).eq('concept', m.concept);
    if (count > 0) {
      console.log(`  word_meanings "${m.concept}" existe deja — SKIP`);
      continue;
    }
    const { error: mErr } = await supabase.from('word_meanings').insert(m);
    if (mErr) console.error(`  word_meanings ERROR "${m.concept}":`, mErr.message);
    else console.log(`  word_meanings OK: "${m.concept}"`);
  }

  // 3. word_daily pour hbt_h (concept Nullification)
  const { count: dpCount } = await supabase.from('word_daily').select('*', { count: 'exact', head: true })
    .eq('analysis_id', waId);
  if (dpCount > 0) {
    console.log(`  word_daily hbt_h: ${dpCount} phrases existent deja — SKIP`);
    return;
  }

  const dailyPhrases = [
    { arabic: 'حبطت', phon: 'habitat', sense: 'rendre nul', french: "Ses efforts ont tout annule la nuit de l'examen final." },
    { arabic: 'حبطت', phon: 'habitat', sense: 'rendre nul', french: "Ses mensonges ont rendu nul tout ce qu'il avait construit." },
    { arabic: 'حبطت', phon: 'habitat', sense: 'rendre nul', french: "Sa trahison a aneanti des annees de confiance." }
  ];

  for (const dp of dailyPhrases) {
    const { error: dpErr } = await supabase.from('word_daily').insert({
      analysis_id: waId,
      sense: dp.sense,
      arabic: dp.arabic,
      phon: dp.phon,
      french: dp.french
    });
    if (dpErr) console.error('  word_daily ERROR:', dpErr.message);
    else console.log('  word_daily OK:', dp.french.substring(0,50));
  }
}

main().catch(console.error);
