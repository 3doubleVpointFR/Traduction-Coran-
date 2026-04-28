// Pipeline S87 v1-10 — Étape 2 : Créer les racines manquantes ghw2 (غثو) et Hw (حو/حوي)
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  console.log('=== ÉTAPE 2 — RACINES MANQUANTES S87 ===\n');

  // ============================================================
  // 1. ghw2 — غثو — debris/ecume (v5: غُثَآءً)
  // Lane's: gvw = rubbish/refuse/scum on surface of torrent, dried broken pieces of herbage
  // Occurrences Coran: 2 (23:41, 87:5)
  // ============================================================
  console.log('--- ghw2 (غثو) ---');

  const { data: ghw2WA, error: e1 } = await sb.from('word_analyses').insert({
    word_key: 'ghw2',
    root_ar: 'غ ث و',
    root_phon: 'ghathw',
    root_meaning: '',
    model_used: 'claude-pipeline',
    prompt_version: 'v2-maison',
    total_occurrences: 2,
    analysis_step: 'concepts'
  }).select().single();
  if (e1) { console.log('ERR ghw2 WA:', e1.message); return; }
  console.log('  word_analyses id=' + ghw2WA.id);

  const ghw2Meanings = [
    // Concept 1: Débris/Écume
    { sense: 'debris charries par un torrent', concept: 'Débris/Écume', status: 'retenu', display_order: 1,
      description: "Matiere residuelle emportee par un courant d'eau. Les debris sont ce qui reste apres le passage de la force — les restes inertes, morts, detaches de leur source. C'est un etat resultant, passif et definitif : ce qui etait vivant et enracine est devenu dechet flottant. L'ecume est la surface visible de cette destruction — ce que l'on voit quand la vie a ete emportee." },
    { sense: 'ecume de surface', concept: 'Débris/Écume', status: 'retenu', display_order: 2,
      description: 'Mousse et residus flottant a la surface d\'un torrent.' },
    { sense: 'herbes seches et brisees sur un torrent', concept: 'Débris/Écume', status: 'retenu', display_order: 3,
      description: 'Fragments de vegetation morte emportes par l\'eau.' },
    { sense: 'ordures et dechets charries', concept: 'Débris/Écume', status: 'retenu', display_order: 4,
      description: 'Tout ce que le torrent ramasse et emporte.' },
    { sense: 'feuilles pourries melees a l\'ecume', concept: 'Débris/Écume', status: 'retenu', display_order: 5,
      description: 'Matiere organique en decomposition flottante.' },
    // Concept 2: Abondance/Remplissage
    { sense: 'vallee remplie de debris', concept: 'Abondance/Remplissage', status: 'nul', display_order: 6,
      description: "Etat d'une vallee ou d'un cours d'eau qui deborde de residus. C'est l'accumulation passive, le resultat du passage du torrent." },
    // Concept 3: Sens isolé
    { sense: 'le lion', concept: 'Sens isolé/Animal', status: 'nul', display_order: 7,
      description: 'Sens isole sans rapport avec les debris.' }
  ];

  for (const m of ghw2Meanings) {
    const { error } = await sb.from('word_meanings').insert({
      analysis_id: ghw2WA.id, sense: m.sense, concept: m.concept,
      status: m.status, meaning_type: 'etymology', description: m.description, display_order: m.display_order
    });
    if (error) console.log('  ERR:', error.message);
  }
  console.log('  ' + ghw2Meanings.length + ' sens -> 3 concepts');

  // Daily phrases
  const ghw2Daily = [
    { sense: 'debris charries par un torrent', arabic: 'حمل السيل غثاء كثيرا', phon: 'hamala as-sayl ghutha\'an kathiran', french: 'Le torrent a emporte beaucoup de debris' },
    { sense: 'debris charries par un torrent', arabic: 'الغثاء يطفو على سطح الماء', phon: "al-ghutha' yatfu 'ala sath al-ma'", french: "Les debris flottent a la surface de l'eau" },
    { sense: 'debris charries par un torrent', arabic: 'نظّف الغثاء من النهر', phon: "nazhzhaf al-ghutha' min an-nahr", french: 'Il a nettoye les debris de la riviere' }
  ];
  for (const d of ghw2Daily) {
    await sb.from('word_daily').insert({ analysis_id: ghw2WA.id, ...d });
  }
  console.log('  3 phrases quotidiennes');

  // ============================================================
  // 2. Hw — حو/حوي — sombre/noiratre (v5: أَحْوَىٰ)
  // Lane's: Hw/HwY = rougeur tirant vers le noir, noir tirant vers le vert, sombre
  // + rassembler, enrouler, contenir
  // Occurrences Coran: 1 (87:5)
  // ============================================================
  console.log('\n--- Hw (حو/حوي) ---');

  const { data: HwWA, error: e2 } = await sb.from('word_analyses').insert({
    word_key: 'Hw',
    root_ar: 'ح و',
    root_phon: 'Haw',
    root_meaning: '',
    model_used: 'claude-pipeline',
    prompt_version: 'v2-maison',
    total_occurrences: 1,
    analysis_step: 'concepts'
  }).select().single();
  if (e2) { console.log('ERR Hw WA:', e2.message); return; }
  console.log('  word_analyses id=' + HwWA.id);

  const HwMeanings = [
    // Concept 1: Noirceur/Couleur sombre
    { sense: 'sombre', concept: 'Noirceur/Couleur sombre', status: 'retenu', display_order: 1,
      description: "Qualite visuelle de ce qui est assombri, devenu fonce. La noirceur est un etat resultant et visible — elle se voit de l'exterieur et indique un changement d'etat. C'est une transformation : ce qui etait clair est devenu sombre, ce qui etait vert est devenu noiratre. L'assombrissement est le signe visible de la decomposition ou du dessechement." },
    { sense: 'noiratre', concept: 'Noirceur/Couleur sombre', status: 'retenu', display_order: 2,
      description: 'Couleur tirant vers le noir.' },
    { sense: 'rougeur tirant vers le noir', concept: 'Noirceur/Couleur sombre', status: 'retenu', display_order: 3,
      description: 'Couleur intermediaire entre le rouge et le noir.' },
    { sense: 'noir tirant vers le vert', concept: 'Noirceur/Couleur sombre', status: 'retenu', display_order: 4,
      description: 'Couleur sombre avec une nuance de vert — la couleur de la vegetation seche.' },
    { sense: 'brun fonce', concept: 'Noirceur/Couleur sombre', status: 'retenu', display_order: 5,
      description: 'Couleur de la rouille ou du metal oxide.' },
    // Concept 2: Rassemblement/Contention
    { sense: 'rassembler', concept: 'Rassemblement/Contention', status: 'nul', display_order: 6,
      description: "Acte de collecter et de reunir. Le rassemblement est un mouvement centripete — ramener vers le centre ce qui etait disperse." },
    { sense: 'contenir', concept: 'Rassemblement/Contention', status: 'nul', display_order: 7,
      description: 'Tenir ensemble dans un espace.' },
    { sense: 's\'enrouler', concept: 'Rassemblement/Contention', status: 'nul', display_order: 8,
      description: 'Prendre une forme circulaire.' },
    // Concept 3: Serpent
    { sense: 'serpent', concept: 'Sens isolé/Serpent', status: 'nul', display_order: 9,
      description: 'Animal qui s\'enroule sur lui-meme.' }
  ];

  for (const m of HwMeanings) {
    const { error } = await sb.from('word_meanings').insert({
      analysis_id: HwWA.id, sense: m.sense, concept: m.concept,
      status: m.status, meaning_type: 'etymology', description: m.description, display_order: m.display_order
    });
    if (error) console.log('  ERR:', error.message);
  }
  console.log('  ' + HwMeanings.length + ' sens -> 3 concepts');

  const HwDaily = [
    { sense: 'sombre', arabic: 'لون أحوى من شدّة الجفاف', phon: 'lawn ahwa min shiddat al-jafaf', french: 'Une couleur sombre a cause de la secheresse' },
    { sense: 'sombre', arabic: 'العشب أصبح أحوى', phon: "al-'ushb asbaha ahwa", french: "L'herbe est devenue noiratre" },
    { sense: 'sombre', arabic: 'أحوى اللون', phon: "ahwa al-lawn", french: 'De couleur sombre' }
  ];
  for (const d of HwDaily) {
    await sb.from('word_daily').insert({ analysis_id: HwWA.id, ...d });
  }
  console.log('  3 phrases quotidiennes');

  console.log('\n=== ÉTAPE 2 TERMINÉE ===');
  console.log('ghw2 id=' + ghw2WA.id + ', Hw id=' + HwWA.id);
})();
