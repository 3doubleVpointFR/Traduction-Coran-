require('dotenv').config({path:'.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function main() {
  console.log('=== FIX VALIDATION SOURATE 98 ===\n');

  // ============================================================
  // FIX 1: sense_retenu mismatches — update segments
  // ============================================================
  console.log('--- FIX 1: sense_retenu dans segments ---');

  // Map of verse_id → segments fixes needed
  // Must match EXACT senses from word_meanings

  // v2 (6132): rsl "envoyé" → "messager" (exists in Envoi/Message)
  {
    const {data} = await sb.from('verse_analyses').select('segments').eq('verse_id', 6132).single();
    const segs = data.segments;
    for (const s of segs) {
      if (s.word_key === 'rsl') s.sense_retenu = 'messager';
    }
    await sb.from('verse_analyses').update({segments: segs}).eq('verse_id', 6132);
    console.log('  v2: rsl envoyé → messager');
  }

  // v3 (6133): ktb "écrits" → "livre" (exists in Livre/Écrit)
  {
    const {data} = await sb.from('verse_analyses').select('segments').eq('verse_id', 6133).single();
    const segs = data.segments;
    for (const s of segs) {
      if (s.word_key === 'ktb') s.sense_retenu = 'livre';
    }
    await sb.from('verse_analyses').update({segments: segs}).eq('verse_id', 6133);
    console.log('  v3: ktb écrits → livre');
  }

  // v5 (6135): xls "rendant pur" → "purifier", dyn "mode de vie" → "religion",
  //            hnf "inclinés vers le vrai" → "s'incliner vers la vérité",
  //            qwm "établir" → "se dresser", zkw "purification" → "purifier"
  //            dyn (2nd occurrence) "mode de vie" → "religion"
  {
    const {data} = await sb.from('verse_analyses').select('segments').eq('verse_id', 6135).single();
    const segs = data.segments;
    for (const s of segs) {
      if (s.word_key === 'xls') s.sense_retenu = 'purifier';
      if (s.word_key === 'dyn') s.sense_retenu = 'religion';
      if (s.word_key === 'hnf') s.sense_retenu = "s'incliner vers la vérité";
      if (s.word_key === 'qwm' && s.fr && s.fr.includes('établir')) s.sense_retenu = 'redresser';
      if (s.word_key === 'qwm' && s.fr && s.fr.includes('droit')) s.sense_retenu = 'droit';
      if (s.word_key === 'zkw') s.sense_retenu = 'purifier';
    }
    await sb.from('verse_analyses').update({segments: segs}).eq('verse_id', 6135);
    console.log('  v5: xls→purifier, dyn→religion, hnf→s\'incliner vers la vérité, qwm→redresser/droit, zkw→purifier');
  }

  // v6 (6136): xld "demeurer pour toujours" → "demeurer éternellement",
  //            shrr "les pires" → "mal", bra "la création" → "créer"
  {
    const {data} = await sb.from('verse_analyses').select('segments').eq('verse_id', 6136).single();
    const segs = data.segments;
    for (const s of segs) {
      if (s.word_key === 'xld') s.sense_retenu = 'demeurer éternellement';
      if (s.word_key === 'shrr') s.sense_retenu = 'mal';
      if (s.word_key === 'bra') s.sense_retenu = 'créer';
    }
    await sb.from('verse_analyses').update({segments: segs}).eq('verse_id', 6136);
    console.log('  v6: xld→demeurer éternellement, shrr→mal, bra→créer');
  }

  // v7 (6137): amn "accorder confiance" → "faire confiance",
  //            bra "la création" → "créer"
  {
    const {data} = await sb.from('verse_analyses').select('segments').eq('verse_id', 6137).single();
    const segs = data.segments;
    for (const s of segs) {
      if (s.word_key === 'amn') s.sense_retenu = 'faire confiance';
      if (s.word_key === 'bra') s.sense_retenu = 'créer';
    }
    await sb.from('verse_analyses').update({segments: segs}).eq('verse_id', 6137);
    console.log('  v7: amn→faire confiance, bra→créer');
  }

  // v8 (6138): jzy "rétribution" → "rétribuer", edn "résidence" → "résider",
  //            xld "demeurer pour toujours" → "demeurer éternellement"
  {
    const {data} = await sb.from('verse_analyses').select('segments').eq('verse_id', 6138).single();
    const segs = data.segments;
    for (const s of segs) {
      if (s.word_key === 'jzy') s.sense_retenu = 'rétribuer';
      if (s.word_key === 'edn') s.sense_retenu = 'résider';
      if (s.word_key === 'xld') s.sense_retenu = 'demeurer éternellement';
    }
    await sb.from('verse_analyses').update({segments: segs}).eq('verse_id', 6138);
    console.log('  v8: jzy→rétribuer, edn→résider, xld→demeurer éternellement');
  }

  // ============================================================
  // FIX 2: "exégèse" in v6133 démarche
  // ============================================================
  console.log('\n--- FIX 2: mot "exégèse" dans v6133 ---');
  {
    const {data} = await sb.from('verse_analyses').select('translation_explanation').eq('verse_id', 6133).single();
    let text = data.translation_explanation;
    // Replace "exégèse" with neutral wording
    text = text.replace(/l'exégèse/g, "l'interprétation traditionnelle");
    text = text.replace(/exégèse/g, "interprétation traditionnelle");
    await sb.from('verse_analyses').update({translation_explanation: text}).eq('verse_id', 6133);
    console.log('  v3: "exégèse" → "interprétation traditionnelle"');
  }

  // ============================================================
  // FIX 3: "selon les" in v6138 jzy axes (false positive check)
  // ============================================================
  console.log('\n--- FIX 3: vérification "selon les" dans v6138 jzy ---');
  {
    const {data} = await sb.from('verse_word_analyses').select('analysis_axes').eq('verse_id', 6138).eq('word_key', 'jzy').single();
    const axes = data.analysis_axes;
    // Check all text fields for "selon les"
    let found = false;
    for (const [cname, cdata] of Object.entries(axes.concepts)) {
      for (const [key, val] of Object.entries(cdata)) {
        if (typeof val === 'string' && val.includes('selon les')) {
          console.log(`  Trouvé "selon les" dans ${cname}.${key}`);
          found = true;
        }
      }
    }
    if (!found) console.log('  Pas trouvé dans les axes VWA - vérification dans d\'autres champs');
    // If it's in proof_ctx, might need to rephrase
  }

  // ============================================================
  // FIX 4: mot "concept" dans v5 démarche
  // ============================================================
  console.log('\n--- FIX 4: mot "concept" dans v5 ---');
  {
    const {data} = await sb.from('verse_analyses').select('translation_explanation').eq('verse_id', 6135).single();
    let text = data.translation_explanation;
    text = text.replace(/\bconcept\b/gi, 'sens');
    await sb.from('verse_analyses').update({translation_explanation: text}).eq('verse_id', 6135);
    console.log('  v5: "concept" → "sens"');
  }

  // ============================================================
  // FIX 5: phrases du quotidien pour byn (596)
  // ============================================================
  console.log('\n--- FIX 5: phrases byn ---');
  {
    const {data: existing} = await sb.from('word_daily').select('id').eq('analysis_id', 596).limit(1);
    if (!existing || existing.length === 0) {
      await sb.from('word_daily').insert([
        {analysis_id: 596, sense: 'preuve', arabic: 'بَيَّنَ الأَمْرَ', phon: 'bayyana al-amr', french: "Il a clarifié l'affaire."},
        {analysis_id: 596, sense: 'preuve', arabic: 'البَيِّنَة الواضِحَة', phon: 'al-bayyina al-wāḍiḥa', french: 'La preuve claire et évidente.'},
        {analysis_id: 596, sense: 'preuve', arabic: 'تَبَيَّنَ لَهُ الحَقّ', phon: "tabayyana lahu al-ḥaqq", french: 'La vérité lui est devenue claire.'}
      ]);
      console.log('  byn — 3 phrases insérées');
    } else {
      console.log('  byn — phrases existantes, skip');
    }
  }

  console.log('\n=== FIX TERMINÉ ===');
}

main().catch(err => { console.error('ERREUR:', err); process.exit(1); });
