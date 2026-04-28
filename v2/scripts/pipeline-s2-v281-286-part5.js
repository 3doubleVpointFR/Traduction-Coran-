const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function insertVWA(verse_id, word_key, position, sense_chosen, analysis_axes) {
  const { data: existing } = await supabase.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('position', position);
  if (existing && existing.length > 0) { console.log(`  VWA SKIP: ${word_key} pos=${position}`); return; }
  const { error } = await supabase.from('verse_word_analyses').insert({ verse_id, word_key, position, sense_chosen, analysis_axes });
  if (error) console.error(`  VWA error [${word_key} pos=${position}]:`, error.message || JSON.stringify(error).substring(0,200));
  else console.log(`  VWA OK: ${word_key} pos=${position}`);
}

async function updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments) {
  const { error } = await supabase.from('verse_analyses').update({ translation_arab, full_translation, translation_explanation, segments }).eq('id', analysis_id);
  if (error) console.error(`  Verse update error [analysis_id=${analysis_id}]:`, error.message || JSON.stringify(error).substring(0,200));
  else console.log(`  Verse update OK: analysis_id=${analysis_id}`);
}

async function insertWordDaily(analysis_id, sense, phrases) {
  for (const p of phrases) {
    const { data: existing } = await supabase.from('word_daily').select('id').eq('analysis_id', analysis_id).eq('french', p.fr);
    if (existing && existing.length > 0) { console.log(`  word_daily SKIP: ${p.fr.substring(0,40)}`); continue; }
    const { error } = await supabase.from('word_daily').insert({ analysis_id, sense, french: p.fr, arabic: p.ar, phon: p.phon });
    if (error) console.error(`  word_daily error:`, error.message);
    else console.log(`  word_daily OK: ${p.fr.substring(0,40)}`);
  }
}

// ============================================================
// VERSET 2:286  verse_id=293  analysis_id=652
// Segments (51 total):
//   pos=1   la (lā) — Particule de négation
//   pos=2   klf (yukallifu) — verbe
//   pos=3   llh (allāhu) — nom propre
//   pos=4   nfs (nafsan) — nom
//   pos=5   ela (illā) — Particule d'exception
//   pos=6   wse (wus'ahā) — nom
//   pos=7   lhy (lahā) — Particule/Pronom
//   pos=8   ma (mā) — pronom relatif
//   pos=9   ksb (kasabat) — verbe
//   pos=10  ely (ʿalayhā) — Particule/Préposition
//   pos=11  ma (mā) — pronom relatif
//   pos=12  ksb (iktasabat) — verbe (forme VIII)
//   pos=13  rbb (rabbanā) — nom
//   pos=14  ela (lā) — Particule négation
//   pos=15  akhd (tu'ākhidhnā) — verbe
//   pos=16  mny (in) — Particule conditionnelle
//   pos=17  nsy (nasīnā) — verbe
//   pos=18  awa (aw) — Particule/Conjonction
//   pos=19  kha (akhta'nā) — verbe
//   pos=20  rbb (rabbanā) — nom
//   pos=21  ela (wa-lā) — Particule/Conjonction+Négation
//   pos=22  hml (taḥmil) — verbe
//   pos=23  elyh (ʿalaynā) — Particule/Préposition
//   pos=24  ely (iṣran) — nom
//   pos=25  kma (kamā) — Particule/Comparaison
//   pos=26  hml (ḥamaltahu) — verbe
//   pos=27  dhyy (alladhīna) — Particule/Pronom relatif
//   pos=28  qbl (min qablinā) — nom
//   pos=29  rbb (rabbanā) — nom
//   pos=30  ela (wa-lā) — Particule/Conjonction+Négation
//   pos=31  hml (tuḥammilnā) — verbe
//   pos=32  ma (mā) — pronom
//   pos=33  ela (lā) — Particule négation
//   pos=34  twq (ṭāqata) — nom
//   pos=35  lny (lanā) — Particule/Pronom
//   pos=36  bhy (bihi) — Particule/Préposition+Pronom
//   pos=37  efw (wa-ʿfu) — verbe
//   pos=38  eny (ʿannā) — Particule/Préposition+Pronom
//   pos=39  ghfr (wa-ghfir) — verbe
//   pos=40  lny (lanā) — Particule/Pronom
//   pos=41  rhm (wa-rḥamnā) — verbe
//   pos=42  ant (anta) — pronom
//   pos=43  wly (mawlānā) — nom
//   pos=44  nsr (fa-nṣurnā) — verbe
//   pos=45  ely (ʿalā) — Particule/Préposition
//   pos=46  qwm (al-qawmi) — nom
//   pos=47  kfr (al-kāfirīna) — nom/adj
// ============================================================

async function processVerse286() {
  console.log('\n=== 2:286 ===');
  const verse_id = 293;
  const analysis_id = 652;

  const segments = [
    { position: 1, arabic: 'لَا', phon: 'lā', fr: 'ne ... pas', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 2, arabic: 'يُكَلِّفُ', phon: 'yukallifu', fr: 'Il impose', is_particle: false, word_key: 'klf', pos: 'verbe', sense_retenu: 'Charge/Obligation' },
    { position: 3, arabic: 'اللَّهُ', phon: 'allāhu', fr: 'Dieu', is_particle: false, word_key: 'llh', pos: 'nom propre', sense_retenu: 'Divinité Unique' },
    { position: 4, arabic: 'نَفْسًا', phon: 'nafsan', fr: 'âme', is_particle: false, word_key: 'nfs', pos: 'nom', sense_retenu: 'Âme/Personne' },
    { position: 5, arabic: 'إِلَّا', phon: 'illā', fr: 'sauf', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 6, arabic: 'وُسْعَهَا', phon: 'wus\'ahā', fr: 'sa capacité', is_particle: false, word_key: 'wse', pos: 'nom', sense_retenu: 'Capacité/Amplitude' },
    { position: 7, arabic: 'لَهَا', phon: 'lahā', fr: 'pour elle', is_particle: true, word_key: 'lhy', pos: 'particule', sense_retenu: 'Particule/Pronom' },
    { position: 8, arabic: 'مَا', phon: 'mā', fr: 'ce que', is_particle: false, word_key: 'ma', pos: 'pronom', sense_retenu: 'Ce que/Quoi' },
    { position: 9, arabic: 'كَسَبَتْ', phon: 'kasabat', fr: 'elle a acquis', is_particle: false, word_key: 'ksb', pos: 'verbe', sense_retenu: 'Acquisition/Gain' },
    { position: 10, arabic: 'وَعَلَيْهَا', phon: 'wa-ʿalayhā', fr: 'et contre elle', is_particle: true, word_key: 'elw', pos: 'particule', sense_retenu: 'Sur/Contre' },
    { position: 11, arabic: 'مَا', phon: 'mā', fr: 'ce que', is_particle: false, word_key: 'ma', pos: 'pronom', sense_retenu: 'Ce que/Quoi' },
    { position: 12, arabic: 'اكْتَسَبَتْ', phon: 'iktasabat', fr: 'elle s\'est chargée', is_particle: false, word_key: 'ksb', pos: 'verbe', sense_retenu: 'Acquisition/Gain' },
    { position: 13, arabic: 'رَبَّنَا', phon: 'rabbanā', fr: 'Notre Seigneur', is_particle: false, word_key: 'rbb', pos: 'nom', sense_retenu: 'Seigneur/Maître' },
    { position: 14, arabic: 'لَا', phon: 'lā', fr: 'ne ... pas', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 15, arabic: 'تُؤَاخِذْنَا', phon: 'tu\'ākhidhnā', fr: 'tiens-nous rigueur', is_particle: false, word_key: 'akhd', pos: 'verbe', sense_retenu: 'Prise/Saisie' },
    { position: 16, arabic: 'إِن', phon: 'in', fr: 'si', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 17, arabic: 'نَسِينَا', phon: 'nasīnā', fr: 'nous oublions', is_particle: false, word_key: 'nsy', pos: 'verbe', sense_retenu: 'Oubli/Négligence' },
    { position: 18, arabic: 'أَوْ', phon: 'aw', fr: 'ou', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 19, arabic: 'أَخْطَأْنَا', phon: 'akhṭa\'nā', fr: 'nous faillons', is_particle: false, word_key: 'kha', pos: 'verbe', sense_retenu: 'Erreur/Faute' },
    { position: 20, arabic: 'رَبَّنَا', phon: 'rabbanā', fr: 'Notre Seigneur', is_particle: false, word_key: 'rbb', pos: 'nom', sense_retenu: 'Seigneur/Maître' },
    { position: 21, arabic: 'وَلَا', phon: 'wa-lā', fr: 'et ne ... pas', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 22, arabic: 'تَحْمِلْ', phon: 'taḥmil', fr: 'fais peser', is_particle: false, word_key: 'hml', pos: 'verbe', sense_retenu: 'Porter/Charge' },
    { position: 23, arabic: 'عَلَيْنَا', phon: 'ʿalaynā', fr: 'sur nous', is_particle: true, word_key: 'elw', pos: 'particule', sense_retenu: 'Sur/Contre' },
    { position: 24, arabic: 'إِصْرًا', phon: 'iṣran', fr: 'un fardeau', is_particle: false, word_key: 'srr', pos: 'nom', sense_retenu: 'Fardeau/Contrainte' },
    { position: 25, arabic: 'كَمَا', phon: 'kamā', fr: 'comme', is_particle: true, word_key: 'kmw', pos: 'particule', sense_retenu: 'Particule/Comparaison' },
    { position: 26, arabic: 'حَمَلْتَهُ', phon: 'ḥamaltahu', fr: 'Tu l\'as imposé', is_particle: false, word_key: 'hml', pos: 'verbe', sense_retenu: 'Porter/Charge' },
    { position: 27, arabic: 'عَلَى الَّذِينَ', phon: 'ʿalā lladhīna', fr: 'à ceux qui', is_particle: true, word_key: 'dhyy', pos: 'particule', sense_retenu: 'Particule/Pronom relatif' },
    { position: 28, arabic: 'مِن قَبْلِنَا', phon: 'min qablinā', fr: 'avant nous', is_particle: false, word_key: 'qbl', pos: 'nom', sense_retenu: 'Antériorité/Avant' },
    { position: 29, arabic: 'رَبَّنَا', phon: 'rabbanā', fr: 'Notre Seigneur', is_particle: false, word_key: 'rbb', pos: 'nom', sense_retenu: 'Seigneur/Maître' },
    { position: 30, arabic: 'وَلَا', phon: 'wa-lā', fr: 'et ne ... pas', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 31, arabic: 'تُحَمِّلْنَا', phon: 'tuḥammilnā', fr: 'charge-nous', is_particle: false, word_key: 'hml', pos: 'verbe', sense_retenu: 'Porter/Charge' },
    { position: 32, arabic: 'مَا', phon: 'mā', fr: 'ce que', is_particle: false, word_key: 'ma', pos: 'pronom', sense_retenu: 'Ce que/Quoi' },
    { position: 33, arabic: 'لَا', phon: 'lā', fr: 'ne ... pas', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 34, arabic: 'طَاقَةَ', phon: 'ṭāqata', fr: 'la force', is_particle: false, word_key: 'twq', pos: 'nom', sense_retenu: 'Force/Capacité' },
    { position: 35, arabic: 'لَنَا', phon: 'lanā', fr: 'pour nous', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 36, arabic: 'بِهِ', phon: 'bihi', fr: 'de cela', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 37, arabic: 'وَاعْفُ', phon: 'wa-ʿfu', fr: 'pardonne-nous', is_particle: false, word_key: 'efw', pos: 'verbe', sense_retenu: 'Pardon/Effacement' },
    { position: 38, arabic: 'عَنَّا', phon: 'ʿannā', fr: 'de nous', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 39, arabic: 'وَاغْفِرْ', phon: 'wa-ghfir', fr: 'et absous-nous', is_particle: false, word_key: 'ghfr', pos: 'verbe', sense_retenu: 'Pardon/Absolution' },
    { position: 40, arabic: 'لَنَا', phon: 'lanā', fr: 'pour nous', is_particle: true, word_key: null, pos: 'particule', sense_retenu: null },
    { position: 41, arabic: 'وَارْحَمْنَا', phon: 'wa-rḥamnā', fr: 'prends-nous en miséricorde', is_particle: false, word_key: 'rhm', pos: 'verbe', sense_retenu: 'Miséricorde/Compassion' },
    { position: 42, arabic: 'أَنتَ', phon: 'anta', fr: 'Tu es', is_particle: false, word_key: 'ant', pos: 'pronom', sense_retenu: 'Toi/Tu (pronom)' },
    { position: 43, arabic: 'مَوْلَانَا', phon: 'mawlānā', fr: 'notre Protecteur', is_particle: false, word_key: 'wly', pos: 'nom', sense_retenu: 'Protecteur/Soutien' },
    { position: 44, arabic: 'فَانصُرْنَا', phon: 'fa-nṣurnā', fr: 'secours-nous donc', is_particle: false, word_key: 'nsr', pos: 'verbe', sense_retenu: 'Secours/Victoire' },
    { position: 45, arabic: 'عَلَى', phon: 'ʿalā', fr: 'contre', is_particle: true, word_key: 'elw', pos: 'particule', sense_retenu: 'Sur/Contre' },
    { position: 46, arabic: 'الْقَوْمِ', phon: 'al-qawmi', fr: 'le peuple', is_particle: false, word_key: 'qwm', pos: 'nom', sense_retenu: 'Peuple/Communauté' },
    { position: 47, arabic: 'الْكَافِرِينَ', phon: 'al-kāfirīna', fr: 'des incrédules', is_particle: false, word_key: 'kfr', pos: 'nom', sense_retenu: 'Incrédulité/Rejet' }
  ];

  const translation_arab = 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ';

  const full_translation = 'Dieu n\'impose à aucune âme une charge au-delà de sa capacité. À elle ce qu\'elle a acquis, et contre elle ce qu\'elle s\'est chargée. Notre Seigneur, ne nous tiens pas rigueur si nous oublions ou si nous faillons ! Notre Seigneur, ne fais pas peser sur nous un fardeau comme Tu l\'as imposé à ceux qui nous ont précédés ! Notre Seigneur, ne nous charge pas de ce que nous n\'avons pas la force de porter ! Pardonne-nous, absous-nous, prends-nous en miséricorde. Tu es notre Protecteur. Secours-nous donc contre le peuple des incrédules.';

  const translation_explanation = `§DEMARCHE§
Ce verset (2:286) est la conclusion solennelle de la sourate Al-Baqara, formant une supplication (du'ā') en trois strophes. La démarche suit la structure rhétorique du texte arabe :

1. Principe de la responsabilité proportionnée : "lā yukallifu llāhu nafsan illā wus'ahā" — la charge divine est limitée à la capacité humaine. Les racines klf (taklīf = obligation) et wse (wus' = amplitude, capacité) sont analysées ensemble.

2. Responsabilité individuelle : "lahā mā kasabat / wa-ʿalayhā mā iktasabat" — la forme I (kasaba) et la forme VIII (iktasaba) de la même racine ksb expriment deux facettes de l'acquisition : le bien accompli (bénéfice) et le mal accompli (fardeau). Cette symétrie est centrale.

3. Triple invocation "rabbanā" : la supplication répète trois fois "Notre Seigneur" en crescendo : d'abord le pardon de l'oubli/erreur, puis la levée du joug des anciens, puis la grâce finale (pardon, absolution, miséricorde, victoire).

Lane's Lexicon a été consulté pour : klf, wse, ksb, akhd, nsy, kha, hml, twq, efw, ghfr, rhm, wly, nsr, qwm, kfr.

§JUSTIFICATION§
Choix de traduction :
- "yukallifu" → "impose" : taklīf désigne l'imposition d'une obligation avec notion de charge. Lane : kallafa — charger quelqu'un d'une chose pénible. "Impose" rend cette nuance mieux qu'un neutre "ordonne".
- "wus'ahā" → "sa capacité" : wus' = amplitude, espace, ce que l'on peut contenir. "Capacité" est plus exact que "pouvoir" qui suggère la force plutôt que l'espace intérieur.
- "kasabat / iktasabat" : la forme VIII iktasaba ajoute une réflexivité (ce que l'âme s'est procuré pour elle-même). "A acquis / s'est chargée" rend cette asymétrie intentionnelle.
- "tu'ākhidhnā" → "tiens-nous rigueur" : ākhaza = tenir quelqu'un responsable, imputer. "Tenir rigueur" est idiomatique en français et juste sémantiquement.
- "iṣran" → "fardeau" : iṣr = contrainte, entrave, joug. Lane : ce qui lie et empêche le mouvement. "Fardeau" (et non "péché") rend la nuance de contrainte physique/morale.
- "ṭāqata" → "la force" : ṭāqa = capacité de supporter, endurance maximale. "Force" est préféré à "capacité" (déjà utilisé pour wus') pour éviter la redondance.
- "mawlānā" → "notre Protecteur" : mawlā = maître, protecteur, allié. Hamidullah traduit "Maître" ; "Protecteur" est retenu pour insister sur la relation de proximité et d'aide.

§CRITIQUE§
La traduction de Hamidullah (1959) : "Allah n'impose à aucune âme une charge supérieure à sa capacité. À son actif ce qu'elle a gagné, à son passif ce qu'elle a mérité. — Seigneur, ne nous châtie pas si nous oublions ou si nous faisons erreur. Seigneur, n'impose pas à nos épaules un fardeau lourd comme Tu l'as imposé à ceux d'avant nous..."

Points de divergence :
1. "supérieure à sa capacité" vs "au-delà de sa capacité" : les deux sont acceptables mais "au-delà" est plus idiomatique.
2. "à son actif / à son passif" : métaphore comptable parlante mais anachronique par rapport au texte coranique. Notre traduction "à elle ce qu'elle a acquis / contre elle ce qu'elle s'est chargée" est plus littérale et plus fidèle à la symétrie arabe.
3. "ne nous châtie pas" pour "lā tu'ākhidhnā" : ākhaza ne signifie pas châtier mais tenir responsable/imputer. "Ne nous tiens pas rigueur" est plus précis.
4. La triple invocation "rabbanā" structure le verset en trois strophes distinctes — notre traduction préserve cette structure, ce que Hamidullah aplanit légèrement.
5. "mawlānā" = "notre Maître" chez Hamidullah, "notre Protecteur" dans notre traduction : les deux sont justes, mais mawlā dans ce contexte de supplication insiste sur la relation de protection et d'allégeance.`;

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  // VWAs — important positions only (non-particles with word_key)
  // klf pos=2
  await insertVWA(verse_id, 'klf', 2, 'Charge/Obligation', {
    concept_chosen: 'Charge/Obligation',
    concepts: {
      'Charge/Obligation': {
        status: 'retenu',
        senses: ['Imposer une charge', 'Obliger', 'Assigner une responsabilité'],
        proof_ctx: 'kallafa: imposer une obligation pénible. Lane: kallafa — to impose upon, to task with, to burden with what is burdensome. Forme II intensive de alifa. Taklīf = l\'imposition d\'une obligation légale ou morale. Yukallifu llāhu = Dieu impose à.',
        axe1_verset: 'Dans 2:286, "lā yukallifu llāhu nafsan illā wus\'ahā" établit le principe fondateur de la loi islamique : l\'obligation (taklīf) ne peut excéder la capacité humaine. Klf porte ici toute la charge théologique du verset — c\'est le mot central autour duquel tout s\'organise.',
        axe2_voisins: 'Le verset précédent (2:285) traite de la foi et de l\'obéissance ("sami\'nā wa-aṭa\'nā"). Le passage de l\'obéissance (ṭāʿa) à l\'obligation imposée (taklīf) est naturel. La limite de la charge (wus\') répond à la demande de pardon qui suit — si Dieu impose selon la capacité, Il peut aussi pardonner l\'excès.',
        axe3_sourate: 'Dans Al-Baqara, la notion d\'obligation divine apparaît dès le début (lois sur le jeûne, le pèlerinage, le talion). Le principe de taklīf selon la capacité est le cadre juridique sous-jacent à toutes ces obligations. C\'est la conclusion théologique qui justifie toutes les prescriptions précédentes.',
        axe4_coherence: 'Klf est cohérent avec l\'ensemble coranique où la charia est présentée comme facilitatrice ("yu\'rīdu llāhu bi-kumu l-yusra" 2:185). La limite de la charge est le principe même de la miséricorde divine dans le droit islamique (fiqh). Cette idée est développée dans 4:28, 22:78.',
        axe5_frequence: 'La racine klf apparaît 11 fois dans le Coran. La forme yukallifu llāhu 3 fois (2:286, 65:7×2). Toujours dans le contexte de l\'obligation divine proportionnée à la capacité humaine. Lane confirme que kallafa implique toujours un aspect de pénibilité/charge, distinguant le taklīf de la simple demande.'
      },
      'Accoutumance/Habitude': {
        status: 'peu_probable',
        senses: ['Être accoutumé à', 'Prendre l\'habitude de'],
        proof_ctx: 'Une forme apparentée alifa signifie s\'accoutumer. Lane mentionne cette nuance mais elle est marginale dans le corpus coranique.',
        axe1_verset: 'Le contexte de la loi divine et de la responsabilité morale n\'est pas compatible avec un sens d\'habitude. La structure "lā yukallifu illā wus\'ahā" implique clairement une imposition, une limitation d\'obligation.',
        axe2_voisins: 'Aucun verset voisin ne traite d\'habitude ou d\'accoutumance. Tous évoquent la responsabilité, la foi et l\'obéissance, renforçant le sens d\'obligation.',
        axe3_sourate: 'Al-Baqara traite des obligations légales et morales, pas des habitudes. Le sens d\'accoutumance serait déplacé dans ce contexte juridico-théologique.',
        axe4_coherence: 'Le sens d\'imposition d\'obligation est cohérent avec l\'ensemble de la révélation coranique. Retenir "habitude" créerait une incohérence avec les usages de klf ailleurs dans le Coran.',
        axe5_frequence: 'Dans aucune des 11 occurrences coraniques de klf le sens d\'habitude ne s\'impose. La forme kallafa est systématiquement associée à l\'imposition d\'une charge ou obligation.'
      }
    }
  });

  // llh pos=3
  await insertVWA(verse_id, 'llh', 3, 'Divinité Unique', {
    concept_chosen: 'Divinité Unique',
    concepts: {
      'Divinité Unique': {
        status: 'retenu',
        senses: ['Dieu', 'La divinité', 'L\'Être suprême'],
        proof_ctx: 'Allāh: nom propre de la divinité islamique. Lane: le nom par excellence désignant l\'Être nécessaire, unique, seul digne d\'adoration. Étymologie : al-ilāh contracté.',
        axe1_verset: 'Allāhu est le sujet principal du verset — c\'est Dieu qui impose la charge, c\'est à Dieu que s\'adresse la supplication triple "rabbanā". La mention d\'Allāh au début et l\'invocation "rabbanā" à la fin forment l\'inclusion du verset.',
        axe2_voisins: 'Dans les versets précédents (2:284-285), Dieu est le maître des cieux et de la terre, le juge des âmes, Celui à qui on rend compte. En 2:286, Il est à la fois législateur (lā yukallifu) et destinataire de la supplication.',
        axe3_sourate: 'Allāh est présent dans chaque péricope d\'Al-Baqara. Il est le législateur, le créateur, le juge. Ce verset final concentre tous ces attributs dans la relation de l\'âme humaine à Dieu.',
        axe4_coherence: 'Cohérent avec toute la théologie coranique. Allāh comme sujet de yukallifu établit l\'origine divine de toute obligation — pas une norme humaine ou sociale mais une charge voulue et proportionnée par Dieu.',
        axe5_frequence: 'Allāh apparaît 2699 fois dans le Coran. Dans Al-Baqara seule, environ 260 occurrences. Toujours nom propre de la divinité unique. Pas d\'ambiguïté possible.'
      }
    }
  });

  // nfs pos=4
  await insertVWA(verse_id, 'nfs', 4, 'Âme/Personne', {
    concept_chosen: 'Âme/Personne',
    concepts: {
      'Âme/Personne': {
        status: 'retenu',
        senses: ['Âme', 'Personne', 'Soi', 'Individu'],
        proof_ctx: 'nafs: âme, personne, soi-même. Lane: nafs — the soul, the spirit, the self, a person. Nafsan ici dans le sens de "une âme quelconque" = "aucune âme" (avec lā).',
        axe1_verset: 'Dans "lā yukallifu llāhu nafsan illā wus\'ahā", nafs désigne chaque individu humain indistinctement — c\'est la norme universelle. "Nafsan" au tanwīn indéfini accentue cette universalité : pas une âme en particulier, toute âme.',
        axe2_voisins: 'En 2:281, "tuwaffā kullu nafsin mā kasabat" — chaque âme sera rétribuée. En 2:284, "mā fī anfusikum" — ce qui est dans vos âmes. La continuité de nafs sur ces versets finaux trace un portrait de la responsabilité individuelle.',
        axe3_sourate: 'Nafs apparaît à plusieurs reprises dans Al-Baqara dans le contexte du jugement individuel et de la responsabilité. En 2:48, "lā tajzī nafsun ʿan nafsin shay\'an" — aucune âme ne portera la charge d\'une autre.',
        axe4_coherence: 'Le principe "à chaque âme selon sa capacité" est fondé sur l\'individualité de la responsabilité morale en islam. Nafs désigne ici l\'individu porteur de la charge légale (mukallaf), cohérent avec la théologie islamique du taklīf.',
        axe5_frequence: 'Nafs apparaît 295 fois dans le Coran. Polysémique : âme immortelle, soi, personne, vie. Dans les contextes de charge morale et de jugement, c\'est systématiquement le sens de "personne individuelle" qui prime. Lane confirme cette flexibilité sémantique.'
      },
      'Vie/Souffle vital': {
        status: 'peu_probable',
        senses: ['Vie', 'Souffle', 'Essence vitale'],
        proof_ctx: 'Lane mentionne nafs dans le sens de vie, haleine. Dans certains versets coraniques nafs = vie qu\'on peut perdre. Mais dans le contexte de taklīf (charge légale), c\'est la personne individuelle qui est visée.',
        axe1_verset: 'Si nafs = vie, le verset dirait "Dieu n\'impose pas de charge à une vie au-delà de son souffle" — sens incohérent dans un contexte juridique et moral.',
        axe2_voisins: 'Les versets voisins utilisent nafs dans le sens de personne soumise au jugement divin, pas dans le sens de vie biologique.',
        axe3_sourate: 'Al-Baqara utilise nafs pour désigner l\'individu responsable moralement. Le sens de vie/souffle vital est davantage présent dans les versets sur la création.',
        axe4_coherence: 'Dans le contexte du taklīf islamique, nafs désigne la personne capable de responsabilité (ʿāqil, bāligh). Le sens de vie/souffle est moins pertinent ici.',
        axe5_frequence: 'Dans les contextes de taklīf, obligation et jugement moral, nafs = personne est systématique dans le Coran.'
      }
    }
  });

  // wse pos=6
  await insertVWA(verse_id, 'wse', 6, 'Capacité/Amplitude', {
    concept_chosen: 'Capacité/Amplitude',
    concepts: {
      'Capacité/Amplitude': {
        status: 'retenu',
        senses: ['Capacité', 'Amplitude', 'Ce qu\'on peut contenir', 'Étendue'],
        proof_ctx: 'wus\': capacité, amplitude, espace suffisant. Lane: wasi\'a — to be wide, spacious, ample. Wus\' = the utmost of one\'s power, ability, capacity. Wus\'ahā = sa capacité, ce qu\'elle peut contenir/supporter.',
        axe1_verset: '"Illā wus\'ahā" — la charge ne dépasse pas ce que l\'âme peut "contenir" (image spatiale). Wus\' est le terme clé qui limite le taklīf : la charge est proportionnée à l\'amplitude intérieure de chaque âme.',
        axe2_voisins: 'La notion de wus\' répond aux demandes qui suivent : "ne nous charge pas de ce que nous n\'avons pas la force de porter" (ṭāqa). Wus\' et ṭāqa sont deux aspects de la capacité — l\'une spatiale (amplitude), l\'autre de résistance (endurance).',
        axe3_sourate: 'Al-Baqara 2:236 : "matāʿun bi-l-maʿrūfi ḥaqqan ʿalā l-muḥsinīna... ʿalā l-mūsi\'i qadaruhu" — les obligations varient selon la capacité. Le même principe de proportionnalité que wus\' est exprimé ici par mūsi\' (celui qui a de la largesse).',
        axe4_coherence: 'Wus\' est le fondement coranique du principe usūlī "al-mashaqqa tajlib al-taysīr" (la difficulté appelle la facilité). La charia reconnaît les exemptions (rukhṣa) en cas d\'incapacité, fondé sur ce verset.',
        axe5_frequence: 'Wus\' et ses formes apparaissent 32 fois dans le Coran. La formule "illā wus\'ahā / wus\'akum" revient 3 fois (2:233, 2:286, 65:7). Lane confirme que wus\' = amplitude, espace, capacité maximale supportable.'
      },
      'Richesse/Aisance': {
        status: 'peu_probable',
        senses: ['Richesse', 'Aisance matérielle'],
        proof_ctx: 'Lane: mūsi\' = homme à l\'aise, riche. La racine wse peut désigner l\'aisance. Mais wus\' comme nom désigne spécifiquement la capacité et non la richesse.',
        axe1_verset: 'Si wus\' = richesse, le verset dirait "Dieu n\'impose pas de charge à une âme au-delà de sa richesse" — sens applicable dans le contexte des obligations financières mais trop restrictif pour la portée générale du verset.',
        axe2_voisins: 'La supplication qui suit porte sur la charge morale et spirituelle, pas sur la richesse. Le contexte est clairement celui de la capacité générale.',
        axe3_sourate: 'Dans 2:233, "lā tukallafu nafsun illā wus\'ahā" dans le contexte de l\'allaitement — la capacité est clairement physique et non financière. Cette occurrence parallèle confirme le sens de capacité générale.',
        axe4_coherence: 'Le principe fondamental est la proportionnalité de toute obligation à la capacité humaine. Restreindre au sens de richesse réduirait la portée universelle du verset.',
        axe5_frequence: 'Dans les formules avec lā tukallafu/yukallafu illā wus\'ahā, le sens de capacité générale est systématique. La nuance de richesse/aisance est présente dans mūsi\' mais pas dans wus\' isolé.'
      }
    }
  });

  // lhy pos=7 (lahā = "pour elle" — pronom/préposition)
  await insertVWA(verse_id, 'lhy', 7, 'Particule/Pronom', {
    concept_chosen: 'Particule/Pronom',
    concepts: {
      'Particule/Pronom': {
        status: 'retenu',
        senses: ['Pronom de la 3e personne féminin singulier', 'Pour elle', 'À elle'],
        proof_ctx: 'lahā: préposition li- + pronom hā (féminin singulier). Désigne l\'âme (nafs, féminin en arabe). Sens : à elle, pour elle, en faveur d\'elle. Fonction grammaticale purement relationnelle.',
        axe1_verset: '"Lahā mā kasabat" — à elle (l\'âme) ce qu\'elle a acquis (le bien). S\'oppose à "wa-ʿalayhā mā iktasabat" (contre elle ce qu\'elle a accompli de mal). Symétrie bénéfice/charge.',
        axe2_voisins: 'Les structures lahu/lahā récurrentes dans le Coran expriment la possession ou le bénéfice divin ou humain. Ici, bénéfice de l\'âme pour ses actes positifs.',
        axe3_sourate: 'Structure identique en 2:134 : "lahā mā kasabat wa-lakum mā kasabtum" — à elle ce qu\'elle a acquis, à vous ce que vous avez acquis. Formule de responsabilité individuelle récurrente.',
        axe4_coherence: 'Lahā et ʿalayhā forment la paire bénéfice/charge qui structure la responsabilité morale islamique. Cohérent avec la théologie de la rétribution individuelle.',
        axe5_frequence: 'Lahā apparaît des centaines de fois dans le Coran comme simple marqueur pronominal. Pas de contenu lexical propre au-delà de sa fonction grammaticale.'
      }
    }
  });

  // ma pos=8 (mā kasabat)
  await insertVWA(verse_id, 'ma', 8, 'Ce que/Quoi', {
    concept_chosen: 'Ce que/Quoi',
    concepts: {
      'Ce que/Quoi': {
        status: 'retenu',
        senses: ['Ce que', 'Quoi', 'Ce qui'],
        proof_ctx: 'mā: pronom relatif indéfini. Lane: what, that which. Ici mā kasabat = ce qu\'elle a acquis. Antécédent de la proposition relative.',
        axe1_verset: '"Lahā mā kasabat" — à elle ce qu\'elle a acquis. Mā introduit la proposition relative désignant l\'ensemble des actes positifs de l\'âme.',
        axe2_voisins: 'Structure parallèle en 2:281 : "tuwaffā kullu nafsin mā kasabat". Mā ici désigne l\'ensemble de la production morale de l\'âme.',
        axe3_sourate: 'Mā comme relatif est extrêmement fréquent dans Al-Baqara pour désigner les actes humains soumis au jugement divin.',
        axe4_coherence: 'Mā relatif est cohérent avec la structure grammaticale arabe classique. Pas d\'ambiguïté possible dans ce contexte.',
        axe5_frequence: 'Mā est l\'un des mots les plus fréquents du Coran (>2000 occurrences). Dans ce contexte, son sens de pronom relatif "ce que" est systématique.'
      }
    }
  });

  // ksb pos=9 (kasabat — forme I)
  await insertVWA(verse_id, 'ksb', 9, 'Acquisition/Gain', {
    concept_chosen: 'Acquisition/Gain',
    concepts: {
      'Acquisition/Gain': {
        status: 'retenu',
        senses: ['Acquérir', 'Gagner', 'Mériter', 'Accomplir'],
        proof_ctx: 'kasaba (forme I): acquérir, gagner, accomplir. Lane: kasaba — to gain, to earn, to acquire. S\'applique aux actes positifs ou au bénéfice moral. S\'oppose à iktasaba (VIII) qui implique une réflexivité négative.',
        axe1_verset: '"Lahā mā kasabat" — à elle ce qu\'elle a acquis. La forme I kasaba désigne ici les actes positifs dont l\'âme tire bénéfice. La forme VIII iktasaba au v.12 désigne les actes dont l\'âme porte la charge.',
        axe2_voisins: 'En 2:281, "tuwaffā kullu nafsin mā kasabat" — même formule. En 2:202, "lahum naṣībun mimmā kasabū" — ils auront une part de ce qu\'ils ont acquis. Ksb récurrent dans les contextes de rétribution.',
        axe3_sourate: 'Al-Baqara utilise ksb dans les contextes de responsabilité morale et de jugement. 2:79, 2:102, 2:134, 2:141, 2:202, 2:281, 2:286. Toujours lié à la rétribution divine des actes humains.',
        axe4_coherence: 'La distinction forme I / forme VIII pour kasaba est notable ici. Les exégètes notent que kasabat (forme I) désigne les actes bons (qui profitent à l\'âme), tandis qu\'iktasabat (forme VIII) désigne les mauvais actes (que l\'âme a acquis pour son propre compte, i.e. fardeau).',
        axe5_frequence: 'Ksb apparaît 67 fois dans le Coran. La forme kasaba = acquérir/mériter (positif ou neutre) est la plus courante. Lane confirme la nuance de gain bénéfique dans kasaba forme I.'
      }
    }
  });

  // elw pos=10 (ʿalayhā — sur elle/contre elle)
  await insertVWA(verse_id, 'elw', 10, 'Sur/Contre', {
    concept_chosen: 'Sur/Contre',
    concepts: {
      'Sur/Contre': {
        status: 'retenu',
        senses: ['Sur', 'Contre', 'À la charge de', 'Responsabilité'],
        proof_ctx: 'ʿalayhā: préposition ʿalā + pronom hā. ʿAlā = sur, contre, à la charge de. Lane: ʿalā — upon, on, over, against. Dans les contextes de responsabilité "ʿalayhi/hā" = il/elle en est responsable.',
        axe1_verset: '"Wa-ʿalayhā mā iktasabat" — et contre elle (à sa charge) ce qu\'elle a accompli (de mal). ʿAlayhā exprime la charge ou responsabilité pesant sur l\'âme, en opposition à lahā (bénéfice).',
        axe2_voisins: 'La structure lahā/ʿalayhā est une formule établie de la responsabilité : pour soi (bénéfice) / contre soi (charge). Répétée en 2:233, 2:236, 2:286.',
        axe3_sourate: '"ʿAlā" dans Al-Baqara exprime souvent la responsabilité ou l\'obligation : "ḥaqqan ʿalā l-muttaqīna" (2:180), "ʿalaykum" (obligation pour vous). Cohérent.',
        axe4_coherence: 'La paire lahā/ʿalayhā structure la théologie de la responsabilité individuelle en islam. Ce qui te profite t\'appartient, ce qui t\'alourdit pèse sur toi.',
        axe5_frequence: 'ʿAlā est l\'une des prépositions les plus fréquentes du Coran. Dans les contextes de responsabilité morale, ʿalayhi/hā = à sa charge est systématique.'
      }
    }
  });

  // ma pos=11 (mā iktasabat)
  await insertVWA(verse_id, 'ma', 11, 'Ce que/Quoi', {
    concept_chosen: 'Ce que/Quoi',
    concepts: {
      'Ce que/Quoi': {
        status: 'retenu',
        senses: ['Ce que', 'Quoi', 'Ce qui'],
        proof_ctx: 'mā: pronom relatif. Lane: what, that which. Ici "wa-ʿalayhā mā iktasabat" = et contre elle ce qu\'elle a accompli.',
        axe1_verset: 'Symétrique avec "lahā mā kasabat". Les deux mā relatifs encadrent les deux propositions bénéfice/charge de la responsabilité individuelle.',
        axe2_voisins: 'Voir mā pos=8. Structure identique.',
        axe3_sourate: 'Voir mā pos=8.',
        axe4_coherence: 'Voir mā pos=8.',
        axe5_frequence: 'Voir mā pos=8. Usage standard de mā relatif.'
      }
    }
  });

  // ksb pos=12 (iktasabat — forme VIII)
  await insertVWA(verse_id, 'ksb', 12, 'Acquisition/Gain', {
    concept_chosen: 'Acquisition/Gain',
    concepts: {
      'Acquisition/Gain': {
        status: 'retenu',
        senses: ['S\'acquérir', 'Se charger de', 'Accomplir pour soi-même'],
        proof_ctx: 'iktasaba (forme VIII de ksb): acquérir pour soi-même, se charger de. Lane: iktasaba — to acquire for oneself, to earn (with notion of effort and personal involvement). La forme VIII ajoute une réflexivité (se faire à soi-même).',
        axe1_verset: '"Wa-ʿalayhā mā iktasabat" — contre elle ce qu\'elle s\'est chargée. Iktasaba (VIII) vs kasaba (I) : les exégètes notent que VIII souligne la responsabilité personnelle, voire l\'acte volontaire — ce que l\'on s\'est délibérément procuré.',
        axe2_voisins: 'La distinction I/VIII est intentionnelle et rhétorique : bénéfice (kasaba simple) vs charge (iktasaba réflexif). Cette même distinction dans 2:134, 2:141 : "tilka ummatun qad khalat lahā mā kasabat wa-lakum mā kasabtum".',
        axe3_sourate: 'Les exégètes classiques (Ṭabarī, Zamakhsharī) expliquent que kasaba = les actes bons dont on bénéficie, iktasaba = les actes mauvais que l\'on s\'est "procurés" avec plus d\'effort, d\'où la charge plus lourde.',
        axe4_coherence: 'La nuance entre les deux formes de ksb est une des subtilités rhétoriques du Coran. Cohérent avec la théologie de la responsabilité gradée selon l\'intentionnalité de l\'acte.',
        axe5_frequence: 'Iktasaba (VIII) apparaît 8 fois dans le Coran. Presque toujours dans des contextes de responsabilité pour des actes répréhensibles ou lourds. Lane confirme la nuance réflexive et volontaire de la forme VIII.'
      }
    }
  });

  // rbb pos=13 (rabbanā — Notre Seigneur — 1ère occurrence)
  await insertVWA(verse_id, 'rbb', 13, 'Seigneur/Maître', {
    concept_chosen: 'Seigneur/Maître',
    concepts: {
      'Seigneur/Maître': {
        status: 'retenu',
        senses: ['Seigneur', 'Maître', 'Éducateur', 'Celui qui élève'],
        proof_ctx: 'rabb: seigneur, maître, éducateur. Lane: rabb — lord, master, owner, the One who brings up, cultivates, improves. Rabbunā/rabbanā = notre Seigneur, vocatif de supplication.',
        axe1_verset: '"Rabbanā" est le vocatif de supplication adressé à Dieu. Il ouvre chacune des trois strophes de la dua (v.286b, c, d). Ce mot transforme la déclaration théologique en prière personnelle.',
        axe2_voisins: 'La transition de "Allāh" (nom absolu, v.286a) à "rabbanā" (notre Seigneur, v.286b) marque le passage du principe universel à la relation personnelle. Rabbanā exprime la proximité et la dépendance.',
        axe3_sourate: 'Rabbanā ouvre de nombreuses supplications dans Al-Baqara : 2:127, 2:128, 2:201, 2:250, 2:285, 2:286. C\'est le vocatif coranique de la prière personnelle par excellence.',
        axe4_coherence: 'Rabb implique à la fois autorité (seigneur) et bienveillance (éducateur). C\'est le nom divin le plus approprié dans la supplication car il évoque la relation d\'éducation et de soin.',
        axe5_frequence: 'Rabb apparaît 970 fois dans le Coran, dont rabbanā (notre Seigneur) de très nombreuses fois dans des contextes de prière. Lane confirme la richesse sémantique de rabb (lord, master, lord of the household, who rears).'
      }
    }
  });

  // akhd pos=15
  await insertVWA(verse_id, 'akhd', 15, 'Prise/Saisie', {
    concept_chosen: 'Prise/Saisie',
    concepts: {
      'Prise/Saisie': {
        status: 'retenu',
        senses: ['Prendre', 'Saisir', 'Tenir responsable', 'Imputer'],
        proof_ctx: 'ākhaza (forme III de akhadha): tenir quelqu\'un responsable, lui imputer. Lane: ākhaza — to take to task, to punish, to blame. Forme III: relation réciproque. Tu\'ākhidhnā = ne nous tiens pas rigueur.',
        axe1_verset: '"Lā tu\'ākhidhnā in nasīnā aw akhṭa\'nā" — ne nous tiens pas rigueur si nous oublions ou faillons. Tu\'ākhidhnā est la demande centrale de la première strophe : l\'excuse pour l\'oubli et l\'erreur involontaire.',
        axe2_voisins: 'Le principe "lā yukallifu illā wus\'ahā" (v.286a) justifie cette demande : si Dieu n\'impose pas au-delà de la capacité, Il ne peut tenir rigueur de l\'oubli involontaire. La cohérence est logique.',
        axe3_sourate: 'En 2:225, "lā yu\'ākhidhukumu llāhu bi-l-laghwi fī aymānikum" — Dieu ne vous tient pas rigueur des serments irréfléchis. Même structure négative avec ākhaza. Cohérent.',
        axe4_coherence: 'La doctrine islamique du raf\' al-qalam (levée de la plume) pour l\'oubli et l\'erreur est fondée sur ce verset. Tu\'ākhidhnā formule exactement la demande de ne pas être tenu comptable de l\'involontaire.',
        axe5_frequence: 'La racine akhadha apparaît 270 fois. La forme ākhaza (III) dans les contextes de responsabilité morale est distincte. Lane confirme la nuance de "tenir rigueur, imputer, punir" pour ākhaza.'
      },
      'Saisie/Châtiment': {
        status: 'probable',
        senses: ['Châtier', 'Punir', 'Frapper'],
        proof_ctx: 'Lane mentionne aussi le sens de punir/châtier pour ākhaza. Dans certains versets coraniques, ākhaza = frapper d\'un châtiment. Mais le contexte de supplication implique davantage "tenir rigueur" que "châtier".',
        axe1_verset: 'La nuance de châtiment est implicite dans "tenir rigueur" — si Dieu ne nous tient pas rigueur, Il ne nous châtiera pas. Les deux sens sont liés mais "tenir rigueur" est plus précis dans ce contexte de prière.',
        axe2_voisins: 'En 2:225, ākhaza dans le même sens de "tenir rigueur" plutôt que "châtier directement". Le contexte de faute involontaire appelle une réponse moins brutale que le châtiment immédiat.',
        axe3_sourate: 'Ākhaza dans Al-Baqara désigne surtout la responsabilisation morale, pas le châtiment immédiat. La différence avec ʿadhāba (châtier) est notable.',
        axe4_coherence: 'Distinguer ākhaza (tenir rigueur) de ʿadhāba (châtier) permet de graduer la réponse divine. Notre traduction "tenir rigueur" est plus exacte que "punir".',
        axe5_frequence: 'Dans la majorité des contextes de raf\' al-qalam (levée de la plume pour l\'oubli), ākhaza = tenir responsable/imputer plutôt que châtier physiquement.'
      }
    }
  });

  // nsy pos=17
  await insertVWA(verse_id, 'nsy', 17, 'Oubli/Négligence', {
    concept_chosen: 'Oubli/Négligence',
    concepts: {
      'Oubli/Négligence': {
        status: 'retenu',
        senses: ['Oublier', 'Négliger', 'Laisser de côté'],
        proof_ctx: 'nasiya: oublier. Lane: nasiya — to forget, to neglect, to leave behind. L\'oubli involontaire (nisyān) est distingué de la négligence volontaire dans la jurisprudence islamique.',
        axe1_verset: '"In nasīnā aw akhṭa\'nā" — si nous oublions ou si nous faillons. Nisyān (oubli) est le premier des deux motifs d\'excuse demandés. L\'oubli involontaire est une des causes de levée de responsabilité en fiqh.',
        axe2_voisins: 'La paire nasīnā/akhṭa\'nā couvre les deux formes d\'erreur humaine involontaire : oubli (ne pas se souvenir) et faute (se tromper). Ensemble, elles épuisent la catégorie de l\'inadvertance.',
        axe3_sourate: 'En 2:52, 2:64, Dieu pardonne les infractions passées d\'Israël — contexte de pardon pour les fautes communautaires. En 2:286, la demande est individuelle et universelle.',
        axe4_coherence: 'Le hadith prophétique "rufi\'a ʿan ummatī al-khata\' wa-l-nisyān" (la faute et l\'oubli sont levés pour ma communauté) est directement fondé sur ce verset. Cohérence théologique majeure.',
        axe5_frequence: 'Nasiya apparaît 45 fois dans le Coran. Nisyān est associé à la faiblesse humaine naturelle, distincte du péché délibéré. Lane confirme le sens d\'oubli involontaire comme sens premier.'
      }
    }
  });

  // kha pos=19
  await insertVWA(verse_id, 'kha', 19, 'Erreur/Faute', {
    concept_chosen: 'Erreur/Faute',
    concepts: {
      'Erreur/Faute': {
        status: 'retenu',
        senses: ['Se tromper', 'Commettre une erreur', 'Faillir', 'Pécher par inadvertance'],
        proof_ctx: 'akhṭa\'a (forme IV de khaṭa\'a): commettre une erreur, se tromper. Lane: khaṭa\'a — to err, to miss the mark, to sin unintentionally. Forme IV akhṭa\'a = to do wrong, to make a mistake. Distinct de dhamba (péché délibéré).',
        axe1_verset: '"Aw akhṭa\'nā" — ou si nous faillons. Akhṭa\'nā désigne l\'erreur commise par inadvertance, méprise ou imprudence — pas le péché délibéré (ithm). C\'est la deuxième catégorie d\'excuses demandées après l\'oubli.',
        axe2_voisins: 'La paire nasīnā/akhṭa\'nā est une hendiadys couvrant toute la gamme de l\'inadvertance humaine. L\'une (nisyān) concerne la mémoire/attention, l\'autre (khaṭa\') concerne le jugement/action.',
        axe3_sourate: 'En 2:81, "man kasaba sayyi\'atan" — qui commet un mal. La différence entre khaṭa\' (erreur involontaire) et sayyi\'a (mauvaise action) est fondamentale dans la théologie morale de Al-Baqara.',
        axe4_coherence: 'La théologie islamique distingue trois degrés : ithm (péché délibéré), khaṭa\' (erreur involontaire), nisyān (oubli). Ce verset demande pardon pour les deux derniers, qui sont excusables. Cohérent.',
        axe5_frequence: 'La racine khaṭa\' apparaît 22 fois dans le Coran. Akhṭa\'a = erreur involontaire vs khaṭa\'a = faute délibérée (lane). La distinction est confirmée par les exégètes classiques.'
      }
    }
  });

  // rbb pos=20 (rabbanā — 2e occurrence)
  await insertVWA(verse_id, 'rbb', 20, 'Seigneur/Maître', {
    concept_chosen: 'Seigneur/Maître',
    concepts: {
      'Seigneur/Maître': {
        status: 'retenu',
        senses: ['Seigneur', 'Maître', 'Éducateur'],
        proof_ctx: 'Voir rbb pos=13. Deuxième occurrence de rabbanā, ouvrant la deuxième strophe de la supplication.',
        axe1_verset: 'Le répétition de "rabbanā" structure le verset en trois strophes distinctes. Cette anaphore est un procédé rhétorique coranique fort, amplifiant l\'intensité de la supplication.',
        axe2_voisins: 'Voir rbb pos=13.',
        axe3_sourate: 'La répétition de rabbanā dans les supplications coraniques est caractéristique : 2:127-128, 3:16, 7:23. Chaque occurrence intensifie le lien avec Dieu.',
        axe4_coherence: 'Voir rbb pos=13.',
        axe5_frequence: 'Voir rbb pos=13.'
      }
    }
  });

  // hml pos=22 (taḥmil — ne fais pas peser)
  await insertVWA(verse_id, 'hml', 22, 'Porter/Charge', {
    concept_chosen: 'Porter/Charge',
    concepts: {
      'Porter/Charge': {
        status: 'retenu',
        senses: ['Porter', 'Imposer une charge', 'Faire peser'],
        proof_ctx: 'ḥamala: porter, transporter, imposer. Lane: ḥamala — to carry, to bear, to load, to impose a burden. Taḥmil (forme I impératif négatif) = ne fais pas peser. Distinct de tuḥammil (forme II v.31) = ne charge pas.',
        axe1_verset: '"Wa-lā taḥmil ʿalaynā iṣran" — ne fais pas peser sur nous un fardeau. La demande est de ne pas recevoir le même joug pesant que les communautés précédentes (Israël avec ses obligations nombreuses).',
        axe2_voisins: 'La référence aux "alladhīna min qablinā" (ceux qui nous ont précédés) évoque les obligations lourdes imposées aux Beni Israël (613 commandements de la Torah). Le contexte coranique est celui de l\'allégement de la loi islamique par rapport aux lois précédentes.',
        axe3_sourate: 'En 2:286, la paire taḥmil/tuḥammil (formes I et II de ḥml) est intentionnelle : taḥmil = imposer (léger), tuḥammil = surcharger (intensif). La gradation est rhétorique.',
        axe4_coherence: 'Le Coran affirme en 7:157 que le Prophète lève "les fardeaux (aghlaluhu) qui pesaient sur eux". Cette facilitation de la loi islamique est le thème sous-jacent de ce verset.',
        axe5_frequence: 'Ḥamala apparaît 59 fois dans le Coran. Forme I (taḥmil) et II (ḥammala/tuḥammil) présentes. Lane distingue ḥamala = porter naturellement vs ḥammala = faire porter de force.'
      }
    }
  });

  // srr pos=24 (iṣran — fardeau)
  await insertVWA(verse_id, 'srr', 24, 'Fardeau/Contrainte', {
    concept_chosen: 'Fardeau/Contrainte',
    concepts: {
      'Fardeau/Contrainte': {
        status: 'retenu',
        senses: ['Fardeau', 'Joug', 'Contrainte', 'Entrave'],
        proof_ctx: 'iṣr: fardeau, joug, contrainte. Lane: iṣr — that which binds and prevents motion, a burden, a load, a tie, an obligation heavy to bear. Distinct de ḥimlan (charge physique). Iṣr = contrainte qui entrave.',
        axe1_verset: '"Wa-lā taḥmil ʿalaynā iṣran kamā ḥamaltahu ʿalā lladhīna min qablinā" — ne fais pas peser sur nous un joug comme Tu l\'as imposé à ceux d\'avant nous. Iṣr désigne le fardeau des obligations nombreuses et contraignantes imposées aux communautés précédentes.',
        axe2_voisins: 'La référence aux anciens (communautés pré-islamiques) avec iṣr est cohérente avec la présentation de l\'islam comme facilitateur. En 2:185, "yu\'rīdu llāhu bi-kumu l-yusra" = Dieu veut pour vous la facilité.',
        axe3_sourate: 'En 7:157, "wa-yaḍaʿu ʿanhum iṣrahum wa-l-aghlāla llatī kānat ʿalayhim" — Il lève leurs fardeaux et leurs chaînes. Iṣr dans ce contexte désigne précisément les obligations pesantes de la Torah.',
        axe4_coherence: 'Iṣr (fardeau contraignant) est le terme technique coranique pour désigner les obligations religieuses lourdes des anciennes communautés. L\'islam est présenté comme la religion de l\'allègement de ces contraintes.',
        axe5_frequence: 'Iṣr apparaît 3 fois dans le Coran (2:286, 7:157×2). Toujours dans le contexte des fardeaux religieux des communautés précédentes. Terme technique avec une portée théologique précise.'
      }
    }
  });

  // kmw pos=25 (kamā — comme)
  await insertVWA(verse_id, 'kmw', 25, 'Particule/Comparaison', {
    concept_chosen: 'Particule/Comparaison',
    concepts: {
      'Particule/Comparaison': {
        status: 'retenu',
        senses: ['Comme', 'De même que', 'Ainsi que'],
        proof_ctx: 'kamā: particule de comparaison (ka + mā). Lane: ka — like, as; mā — that which. Ensemble kamā = just as, in the same manner as. Introduit la comparaison avec les communautés précédentes.',
        axe1_verset: '"Kamā ḥamaltahu ʿalā lladhīna min qablinā" — comme Tu l\'as imposé à ceux qui nous ont précédés. Kamā établit l\'analogie entre le fardeau potentiel et le fardeau historique des anciens.',
        axe2_voisins: 'Kamā dans les supplications coraniques introduit une référence historique comme justification ou repère. La comparaison avec les anciens est un procédé rhétorique fréquent.',
        axe3_sourate: 'Kamā apparaît dans Al-Baqara pour des comparaisons significatives (2:23, 2:97, 2:137, 2:150). Toujours particule de comparaison.',
        axe4_coherence: 'Kamā établit ici une précédent historique : Dieu a imposé de lourds fardeaux aux communautés précédentes. La demande est de ne pas reproduire ce précédent.',
        axe5_frequence: 'Kamā apparaît ~300 fois dans le Coran. Toujours particule de comparaison. Lane confirme le sens "just as, even as".'
      }
    }
  });

  // hml pos=26 (ḥamaltahu — Tu l\'as imposé)
  await insertVWA(verse_id, 'hml', 26, 'Porter/Charge', {
    concept_chosen: 'Porter/Charge',
    concepts: {
      'Porter/Charge': {
        status: 'retenu',
        senses: ['Porter', 'Imposer', 'Faire peser'],
        proof_ctx: 'Voir hml pos=22. Ici ḥamaltahu = Tu l\'as imposé (à eux), référence historique au fardeau des communautés précédentes.',
        axe1_verset: '"Kamā ḥamaltahu ʿalā lladhīna min qablinā" — comme Tu l\'as imposé à ceux d\'avant nous. Référence à l\'alliance sinaïtique et aux obligations nombreuses imposées aux Beni Israël.',
        axe2_voisins: 'Voir hml pos=22.',
        axe3_sourate: 'Voir hml pos=22.',
        axe4_coherence: 'Voir hml pos=22.',
        axe5_frequence: 'Voir hml pos=22.'
      }
    }
  });

  // dhyy pos=27 (alladhīna — ceux qui)
  await insertVWA(verse_id, 'dhyy', 27, 'Particule/Pronom relatif', {
    concept_chosen: 'Particule/Pronom relatif',
    concepts: {
      'Particule/Pronom relatif': {
        status: 'retenu',
        senses: ['Ceux qui', 'Pronom relatif pluriel masculin'],
        proof_ctx: 'alladhīna: pronom relatif masculin pluriel. Forme du relatif arabe al-ladhī (singulier) / alladhīna (pluriel). Désigne les communautés précédentes (Beni Israël). Particule grammaticale sans entrée dans Lane\'s.',
        axe1_verset: '"ʿAlā lladhīna min qablinā" — à ceux qui nous ont précédés. Alladhīna désigne les anciennes communautés religieuses auxquelles des obligations lourdes furent imposées.',
        axe2_voisins: 'Alladhīna est extrêmement fréquent dans Al-Baqara pour désigner des groupes : "alladhīna āmanū" (les croyants), "alladhīna kafarū" (les incrédules). Ici désigne les ancêtres religieux.',
        axe3_sourate: 'Usage standard du pronom relatif pluriel dans l\'ensemble du Coran.',
        axe4_coherence: 'Cohérent avec le contexte historique de la comparaison avec les communautés pré-islamiques.',
        axe5_frequence: 'Alladhīna apparaît ~1500 fois dans le Coran. Pronom grammatical standard sans contenu lexical propre.'
      }
    }
  });

  // qbl pos=28 (min qablinā — avant nous)
  await insertVWA(verse_id, 'qbl', 28, 'Antériorité/Avant', {
    concept_chosen: 'Antériorité/Avant',
    concepts: {
      'Antériorité/Avant': {
        status: 'retenu',
        senses: ['Avant', 'Antérieurement', 'Devant', 'Précédemment'],
        proof_ctx: 'qablu: avant, devant (temporel ou spatial). Lane: qabla — before, in front of, previously. Min qablinā = avant nous, ceux qui nous ont précédés (chronologiquement et religieusement).',
        axe1_verset: '"Alladhīna min qablinā" — ceux qui nous ont précédés. Référence aux communautés religieuses antérieures à l\'islam (Beni Israël principalement) auxquelles des fardeaux religieux furent imposés.',
        axe2_voisins: 'La référence aux "anciens" (min qabli) est fréquente dans Al-Baqara pour contextualiser l\'histoire sainte : 2:47, 2:51, 2:65, 2:87. Toujours dans le sens temporel "avant".',
        axe3_sourate: 'Min qabli dans Al-Baqara structure la narration historique : Dieu a guidé, puni, allégé les charges des anciens. Ce verset final demande de bénéficier de l\'allègement et non du fardeau.',
        axe4_coherence: 'Qablinā établit la continuité religieuse : l\'islam s\'inscrit dans la même tradition mais avec allègement des charges. Cohérent avec la théologie coranique de la facilitation.',
        axe5_frequence: 'Qablu apparaît 291 fois dans le Coran. Toujours sens temporel "avant". Lane confirme le sens de priorité temporelle.'
      }
    }
  });

  // rbb pos=29 (rabbanā — 3e occurrence)
  await insertVWA(verse_id, 'rbb', 29, 'Seigneur/Maître', {
    concept_chosen: 'Seigneur/Maître',
    concepts: {
      'Seigneur/Maître': {
        status: 'retenu',
        senses: ['Seigneur', 'Maître'],
        proof_ctx: 'Voir rbb pos=13. Troisième occurrence de rabbanā, ouvrant la troisième et dernière strophe.',
        axe1_verset: 'Troisième "rabbanā" = troisième strophe de la dua, la plus intense : ne charge pas ce qu\'on ne peut porter, puis triple demande de pardon (ʿafu, ghufran, raḥma), puis affirmation (Tu es notre Protecteur), puis demande finale (secours-nous).',
        axe2_voisins: 'Voir rbb pos=13.',
        axe3_sourate: 'Voir rbb pos=13.',
        axe4_coherence: 'Voir rbb pos=13.',
        axe5_frequence: 'Voir rbb pos=13.'
      }
    }
  });

  // hml pos=31 (tuḥammilnā — ne nous charge pas — forme II)
  await insertVWA(verse_id, 'hml', 31, 'Porter/Charge', {
    concept_chosen: 'Porter/Charge',
    concepts: {
      'Porter/Charge': {
        status: 'retenu',
        senses: ['Surcharger', 'Faire porter de force', 'Imposer une charge écrasante'],
        proof_ctx: 'Ḥammala (forme II de ḥml): faire porter de force, surcharger. Lane: ḥammala — to cause to carry, to load, to impose. Forme II intensive : charger lourdement, contraindre à porter. Tuḥammilnā = ne nous surcharge pas.',
        axe1_verset: '"Wa-lā tuḥammilnā mā lā ṭāqata lanā bihi" — ne nous charge pas de ce que nous n\'avons pas la force de porter. Distinction de forme I (taḥmil, 2e strophe) vs II (tuḥammil, 3e strophe) : gradation de la demande — d\'abord le fardeau externe (comme les anciens), puis la charge au-delà de toute résistance.',
        axe2_voisins: 'La progression taḥmil → tuḥammil montre une gradation rhétorique : ne nous impose pas un fardeau (I), et encore moins une surcharge insupportable (II). La demande s\'intensifie.',
        axe3_sourate: 'Voir hml pos=22 et 26. Troisième occurrence de ḥml dans ce verset, forme II cette fois.',
        axe4_coherence: 'La gradation des formes verbales est un signe de la maîtrise rhétorique coranique. Lane confirme que la forme II de ḥml (ḥammala) implique une action forcée et intensive.',
        axe5_frequence: 'Voir hml pos=22.'
      }
    }
  });

  // ma pos=32 (mā lā ṭāqata)
  await insertVWA(verse_id, 'ma', 32, 'Ce que/Quoi', {
    concept_chosen: 'Ce que/Quoi',
    concepts: {
      'Ce que/Quoi': {
        status: 'retenu',
        senses: ['Ce que', 'Ce dont', 'Ce qui'],
        proof_ctx: 'mā: pronom relatif. Voir mā pos=8. Ici "mā lā ṭāqata lanā bihi" = ce dont nous n\'avons pas la force.',
        axe1_verset: '"Wa-lā tuḥammilnā mā lā ṭāqata lanā bihi" — ne nous charge pas de ce que nous n\'avons pas la force de porter. Mā introduit la proposition relative décrivant l\'insupportable.',
        axe2_voisins: 'Voir mā pos=8.',
        axe3_sourate: 'Voir mā pos=8.',
        axe4_coherence: 'Voir mā pos=8.',
        axe5_frequence: 'Voir mā pos=8.'
      }
    }
  });

  // twq pos=34 (ṭāqata — force/capacité)
  await insertVWA(verse_id, 'twq', 34, 'Force/Capacité', {
    concept_chosen: 'Force/Capacité',
    concepts: {
      'Force/Capacité': {
        status: 'retenu',
        senses: ['Force', 'Capacité d\'endurance', 'Ce qu\'on peut supporter', 'Résistance maximale'],
        proof_ctx: 'ṭāqa: capacité maximale d\'endurance, force. Lane: ṭāqa — power, ability, the utmost of one\'s power, what one is able to bear or endure. Ṭāqata lanā bihi = la force qui nous permette de le supporter.',
        axe1_verset: '"Mā lā ṭāqata lanā bihi" — ce que nous n\'avons pas la force de porter. Ṭāqa désigne ici la résistance maximale humaine, la limite absolue de l\'endurance. C\'est la troisième et ultime limite après wus\' (capacité générale) et iṣr (fardeau concret).',
        axe2_voisins: 'La progression wus\' → iṣr → ṭāqa dans ce verset trace trois niveaux de limite : la capacité normale (wus\'), le fardeau historique (iṣr), l\'insupportable absolu (ṭāqa). Gradation rhétorique parfaite.',
        axe3_sourate: 'En 2:249, "fa-man lam yaṭʿam-hu fa-innahu minnī / wa-man ṭaʿima-hu fa-innahu laysa minnī illā man ightarafa ghurf..." — contexte différent. Ṭāqa dans le sens de limite d\'endurance est spécifique à 2:286 et d\'autres versets sur l\'obligation.',
        axe4_coherence: 'Ṭāqa comme limite absolue est fondamental dans le droit islamique : une obligation qui dépasse la ṭāqa (capacité maximale) devient invalide ou modifiée. Ce verset fonde ce principe.',
        axe5_frequence: 'Ṭāqa apparaît 4 fois dans le Coran (2:249×2, 2:286, 64:16). Lane confirme le sens de capacité maximale d\'endurance, distincte de qudra (pouvoir) et wus\' (amplitude).'
      },
      'Obéissance/Soumission': {
        status: 'peu_probable',
        senses: ['Obéissance', 'Soumission volontaire'],
        proof_ctx: 'Lane mentionne une forme ṭaw\'a (obéissance) apparentée. Mais ṭāqa (capacité d\'endurance) est bien distinct de ṭāʿa (obéissance).',
        axe1_verset: 'Le contexte "mā lā ṭāqata lanā bihi" = ce dont nous n\'avons pas la ṭāqa — implique clairement une limite physique/psychologique, pas un refus d\'obéir.',
        axe2_voisins: 'L\'obéissance (ṭāʿa) vient d\'être affirmée en 2:285 "sami\'nā wa-aṭa\'nā". Ici le sens passe à la capacité d\'endurance, pas à l\'obéissance.',
        axe3_sourate: 'Ṭāʿa (obéissance) et ṭāqa (capacité) sont deux racines distinctes dans l\'usage coranique. Lane les distingue nettement.',
        axe4_coherence: 'Confondre ṭāqa et ṭāʿa serait une erreur d\'interprétation. Les exégètes classiques sont unanimes : ṭāqa ici = capacité maximale, pas obéissance.',
        axe5_frequence: 'Dans les 4 occurrences coraniques de ṭāqa, le sens de capacité d\'endurance/résistance est systématique. Jamais confondu avec ṭāʿa.'
      }
    }
  });

  // efw pos=37 (wa-ʿfu — pardonne-nous)
  await insertVWA(verse_id, 'efw', 37, 'Pardon/Effacement', {
    concept_chosen: 'Pardon/Effacement',
    concepts: {
      'Pardon/Effacement': {
        status: 'retenu',
        senses: ['Pardonner', 'Effacer', 'Passer sur', 'Accorder la grâce'],
        proof_ctx: 'ʿafā: pardonner, effacer, passer sur. Lane: ʿafā — to pardon, to forgive, to efface, to obliterate. ʿafw = the act of pardoning, effacement of a sin. Wa-ʿfu ʿannā = pardonne-nous, efface nos fautes.',
        axe1_verset: 'La triple demande finale "wa-ʿfu / wa-ghfir / wa-rḥam" est un crescendo : ʿafw (passer sur les fautes), ghufr (absolution profonde), raḥma (miséricorde globale). Les trois sont complémentaires et distincts.',
        axe2_voisins: 'En 2:52, "thumma ʿafawnā ʿankum" — Nous avons pardonné après votre faute. ʿAfw est le pardon divin accordé après repentir. Cohérent avec la demande finale du verset.',
        axe3_sourate: 'Al-Baqara contient de nombreuses occurrences de ʿafā dans le contexte du pardon divin : 2:52, 2:109, 2:178, 2:187, 2:219, 2:286. ʿAfw est la première étape du pardon.',
        axe4_coherence: 'Les exégètes distinguent : ʿafw (effacement de la trace du péché), ghufr (couverture du péché), raḥma (miséricorde positive). La progression est logique — d\'abord effacer, puis couvrir, puis accorder la grâce.',
        axe5_frequence: 'ʿAfā apparaît 35 fois dans le Coran. ʿAfw comme nom/impératif dans les supplications est fréquent. Lane confirme le sens d\'effacement de la trace du péché.'
      }
    }
  });

  // ghfr pos=39 (wa-ghfir — et absous-nous)
  await insertVWA(verse_id, 'ghfr', 39, 'Pardon/Absolution', {
    concept_chosen: 'Pardon/Absolution',
    concepts: {
      'Pardon/Absolution': {
        status: 'retenu',
        senses: ['Pardonner', 'Absoudre', 'Couvrir', 'Protéger du châtiment'],
        proof_ctx: 'ghafara: couvrir, protéger, absoudre. Lane: ghafara — to cover, to protect, to forgive (lit: to put a cover over, like a helmet/mighfar). Ghufr = couverture du péché, protection contre ses conséquences. Wa-ghfir lanā = absous-nous.',
        axe1_verset: '"Wa-ghfir lanā" — deuxième demande de la triple finale. Ghufr implique que Dieu recouvre le péché de Sa protection, empêchant qu\'il ne nuise au croyant. Distinct de ʿafw (effacement) — ghufr = protection contre les conséquences.',
        axe2_voisins: 'La paire ʿafw + ghufr est fréquente dans le Coran. En 2:285, "ghufranaka rabbanā" — Ton pardon, notre Seigneur (verset juste avant). La continuité thématique est directe.',
        axe3_sourate: 'Ghafara est récurrent dans Al-Baqara : 2:128, 2:192, 2:199, 2:218, 2:235, 2:263, 2:268, 2:285, 2:286. L\'un des attributs divins les plus invoqués.',
        axe4_coherence: 'La distinction ʿafw/ghufr/raḥma est cohérente avec la théologie du pardon divin : ʿafw efface, ghufr couvre, raḥma bénit positivement. Gradation de la grâce divine.',
        axe5_frequence: 'Ghafara apparaît 234 fois dans le Coran. Al-Ghaffār et al-Ghafūr sont des attributs divins récurrents. Lane confirme l\'étymologie du "couvrement" (mighfar = casque protecteur).'
      }
    }
  });

  // rhm pos=41 (wa-rḥamnā — prends-nous en miséricorde)
  await insertVWA(verse_id, 'rhm', 41, 'Miséricorde/Compassion', {
    concept_chosen: 'Miséricorde/Compassion',
    concepts: {
      'Miséricorde/Compassion': {
        status: 'retenu',
        senses: ['Miséricorde', 'Compassion', 'Bienveillance divine', 'Tendresse'],
        proof_ctx: 'raḥima: avoir miséricorde, être compatissant. Lane: raḥima — to have mercy upon, to compassionate. Raḥma = mercy, compassion, divine grace. Wa-rḥamnā = prends-nous en miséricorde.',
        axe1_verset: '"Wa-rḥamnā" — troisième et dernière demande de la triple finale. Raḥma est la plus haute grâce divine — elle va au-delà du pardon (ʿafw) et de l\'absolution (ghufr) pour englober la bénédiction positive et la protection permanente.',
        axe2_voisins: 'Raḥma est présente dans la basmala ("bi-smi llāhi l-raḥmāni l-raḥīmi") qui ouvre le Coran. La sourate Al-Baqara se clôt sur une demande de raḥma — inclusion avec la basmala.',
        axe3_sourate: 'Al-Baqara est parsemée de mentions de la raḥma divine : 2:105, 2:143, 2:157, 2:218, 2:268, 2:286. La sourate commence avec les attributs divins de la raḥma et se termine par une demande de raḥma.',
        axe4_coherence: 'Raḥma est au sommet de la gradation ʿafw-ghufr-raḥma. C\'est la grâce divine totale qui non seulement efface et couvre les péchés mais comble de bienveillance. Le verset se conclut sur la note la plus haute.',
        axe5_frequence: 'Raḥima et ses dérivés apparaissent 339 fois dans le Coran. Al-Raḥmān et al-Raḥīm sont les deux attributs les plus fréquents de Dieu. Lane confirme la profondeur sémantique de raḥma (utérine, maternelle dans l\'étymologie).'
      }
    }
  });

  // ant pos=42 (anta — Tu es)
  await insertVWA(verse_id, 'ant', 42, 'Toi/Tu (pronom)', {
    concept_chosen: 'Toi/Tu (pronom)',
    concepts: {
      'Toi/Tu (pronom)': {
        status: 'retenu',
        senses: ['Tu', 'Toi', 'Toi seul', 'C\'est toi qui'],
        proof_ctx: 'anta: pronom personnel 2e personne masculin singulier. Lane: anta — thou, you (masculine singular). Ici "anta mawlānā" = Tu es notre Protecteur. La position de anta en tête de phrase souligne l\'exclusivité.',
        axe1_verset: '"Anta mawlānā fa-nṣurnā" — Tu es notre Protecteur, secours-nous donc. Anta place l\'accent sur l\'identité de Dieu comme Protecteur avant d\'en déduire la demande de secours (fa = donc). C\'est un argument logique : puisque Tu es notre Protecteur, secours-nous.',
        axe2_voisins: 'En 2:128, "anta l-tawwābu l-raḥīmu" — Tu es Celui qui accepte le repentir, le Miséricordieux. Structure identique : anta + attribut. Rhétorique d\'affirmation avant demande.',
        axe3_sourate: 'Cette structure rhétorique (anta + attribut → demande) est récurrente dans les supplications du Coran. Elle fonde la demande sur l\'attribut divin affirmé.',
        axe4_coherence: 'Affirmer "Tu es notre Protecteur" avant de demander le secours est une rhétorique d\'appel à la cohérence divine : Dieu ne peut être Protecteur (mawlā) sans secourir les Siens.',
        axe5_frequence: 'Anta comme pronom d\'insistance sujet apparaît fréquemment dans les supplications coraniques. Toujours valeur pronominale pure, mais avec emphase due à sa position initiale.'
      }
    }
  });

  // wly pos=43 (mawlānā — notre Protecteur)
  await insertVWA(verse_id, 'wly', 43, 'Protecteur/Soutien', {
    concept_chosen: 'Protecteur/Soutien',
    concepts: {
      'Protecteur/Soutien': {
        status: 'retenu',
        senses: ['Protecteur', 'Soutien', 'Allié', 'Maître bienveillant'],
        proof_ctx: 'mawlā: protecteur, maître, allié, patron. Lane: mawlā — lord, master, patron, client, protector, helper, companion. Mawlānā = notre mawlā. Terme riche désignant la relation de protection et d\'allégeance.',
        axe1_verset: '"Anta mawlānā" — Tu es notre Protecteur. Mawlā désigne ici Dieu comme le soutien ultime et protecteur de la communauté des croyants. La conclusion logique "fa-nṣurnā" (secours-nous) découle de cette relation.',
        axe2_voisins: 'En 2:257, "llāhu waliyyu lladhīna āmanū" — Dieu est le protecteur (walī) de ceux qui ont cru. Walī et mawlā sont de la même racine wly. La relation de protection divine est un thème majeur.',
        axe3_sourate: 'Waly/mawlā dans Al-Baqara : 2:107, 2:120, 2:257. Dieu comme walī est le Protecteur par excellence des croyants. La relation mawlā est fondamentale dans la théologie islamique de la providence.',
        axe4_coherence: 'Mawlā est cohérent avec rabbanā (Notre Seigneur) tout en ajoutant la dimension de l\'allégeance et de la protection. La transition rabb → mawlā → naṣr (secours) est logique.',
        axe5_frequence: 'Mawlā apparaît 37 fois dans le Coran. Waly/walī 113 fois. Lane distingue mawlā dans ses multiples sens (maître, affranchi, protecteur) — ici le sens de Protecteur bienveillant est dominant.'
      },
      'Maître/Propriétaire': {
        status: 'probable',
        senses: ['Maître', 'Souverain', 'Seigneur'],
        proof_ctx: 'Mawlā peut aussi désigner le maître au sens de souverain. Hamidullah traduit "Maître". Les deux sens (maître et protecteur) coexistent dans mawlā.',
        axe1_verset: 'Si mawlā = Maître, "Tu es notre Maître, secours-nous" — l\'idée de souveraineté justifie aussi la demande de secours. Mais la nuance de protection est plus pertinente dans une supplication.',
        axe2_voisins: 'Dans les contextes de supplication, mawlā insiste sur la relation de proximité et de soin plutôt que sur la domination. "Protecteur" rend mieux cet aspect.',
        axe3_sourate: 'Dans Al-Baqara, walī/mawlā désigne principalement le protecteur et allié, pas le maître dominant. Le sens de Protecteur est dominant.',
        axe4_coherence: 'La demande "fa-nṣurnā" (secours-nous) suit naturellement "Tu es notre Protecteur" (mawlā) mais moins naturellement "Tu es notre Maître souverain".',
        axe5_frequence: 'Dans les supplications coraniques, mawlā avec demande de secours (naṣr) est toujours dans le sens de Protecteur allié, pas Maître souverain.'
      }
    }
  });

  // nsr pos=44 (fa-nṣurnā — secours-nous)
  await insertVWA(verse_id, 'nsr', 44, 'Secours/Victoire', {
    concept_chosen: 'Secours/Victoire',
    concepts: {
      'Secours/Victoire': {
        status: 'retenu',
        senses: ['Secourir', 'Aider', 'Donner la victoire', 'Protéger'],
        proof_ctx: 'naṣara: secourir, aider, donner la victoire. Lane: naṣara — to aid, to help, to give victory. Naṣr = help, victory. Fa-nṣurnā = secours-nous donc, donne-nous la victoire.',
        axe1_verset: '"Fa-nṣurnā ʿalā l-qawmi l-kāfirīna" — secours-nous contre le peuple des incrédules. C\'est la demande finale et culminante du verset et de la sourate Al-Baqara. Naṣr (secours/victoire) conclut la supplication sur une note de combat et d\'espoir.',
        axe2_voisins: 'La fin d\'Al-Baqara se conclut sur cette demande de naṣr contre les kāfirīna. Après toutes les prescriptions légales et narratives de la sourate, la demande finale est eschatologique et pratique : la victoire sur l\'incroyance.',
        axe3_sourate: 'Naṣr dans Al-Baqara : 2:250 (demande de naṣr de l\'armée de Saül/Ṭālūt), 2:286. La demande de victoire conclut les deux grandes batailles d\'Al-Baqara : spirituelle et physique.',
        axe4_coherence: 'La séquence mawlā → naṣr est logique : le protecteur (mawlā) est aussi celui qui donne la victoire (nāṣir). Cohérent avec la théologie islamique de la providence divine dans le combat.',
        axe5_frequence: 'Naṣara apparaît 160 fois dans le Coran. Naṣr/naṣīr (aide, victoire/allié) sont fréquents. Lane confirme le sens de secours et victoire accordée par Dieu.'
      }
    }
  });

  // qwm pos=46 (al-qawmi — le peuple)
  await insertVWA(verse_id, 'qwm', 46, 'Peuple/Communauté', {
    concept_chosen: 'Peuple/Communauté',
    concepts: {
      'Peuple/Communauté': {
        status: 'retenu',
        senses: ['Peuple', 'Groupe', 'Nation', 'Communauté'],
        proof_ctx: 'qawm: peuple, groupe, communauté. Lane: qawm — a people, a nation, a tribe, a folk. Al-qawmu l-kāfirūna = le peuple des incrédules (formule récurrente dans le Coran).',
        axe1_verset: '"ʿAlā l-qawmi l-kāfirīna" — contre le peuple des incrédules. Qawm désigne ici un groupe collectif défini par son incrédulité, non une nation particulière. La demande de naṣr est universelle : contre toute forme d\'incrédulité.',
        axe2_voisins: 'La formule "al-qawm al-kāfirūna/kāfirīna" est récurrente dans le Coran pour désigner l\'adversaire de la communauté croyante. En 2:250, Saül demande aussi la victoire contre des adversaires.',
        axe3_sourate: 'Dans Al-Baqara, qawm est utilisé pour désigner des groupes variés : Beni Israël, les hypocrites, les incrédules. Toujours dans le sens de communauté définie par une caractéristique commune.',
        axe4_coherence: 'Qawm al-kāfirīna comme expression finale de la sourate répond à l\'ouverture (alladhīna kafarū en 2:6). Inclusion thématique : Al-Baqara commence par les kāfirūna et se termine par une demande de victoire contre eux.',
        axe5_frequence: 'Qawm apparaît 383 fois dans le Coran. La formule "al-qawm al-kāfirūna/ẓālimūna/fāsiqūna" est récurrente (environ 20 occurrences). Lane confirme qawm = peuple, communauté.'
      }
    }
  });

  // kfr pos=47 (al-kāfirīna — les incrédules)
  await insertVWA(verse_id, 'kfr', 47, 'Incrédulité/Rejet', {
    concept_chosen: 'Incrédulité/Rejet',
    concepts: {
      'Incrédulité/Rejet': {
        status: 'retenu',
        senses: ['Incrédule', 'Qui rejette', 'Qui couvre/cache la vérité'],
        proof_ctx: 'kafara: rejeter la foi, être ingrat, couvrir. Lane: kafara — to be ungrateful, to disbelieve, to cover (a seed with earth — the farmer is called kāfir in Arabic). Kāfirīna = ceux qui rejettent la foi, les incrédules.',
        axe1_verset: '"Al-qawmi l-kāfirīna" — le peuple des incrédules. Kāfir désigne celui qui rejette ou couvre la vérité divine. C\'est le mot final de la sourate Al-Baqara — la demande ultime est la victoire contre le rejet de Dieu.',
        axe2_voisins: 'Al-Baqara s\'ouvre en 2:6 avec "inna lladhīna kafarū" et se ferme avec "al-kāfirīna". Cette inclusion (kufr au début et à la fin) est une structure rhétorique intentionnelle de la sourate.',
        axe3_sourate: 'Kufr (incrédulité) est le thème antagoniste central d\'Al-Baqara, opposé à la foi (īmān). La sourate entière est une invitation à la foi et une mise en garde contre le kufr. Sa clôture sur al-kāfirīna est donc rhétoriquement parfaite.',
        axe4_coherence: 'Kāfir implique deux nuances : l\'incrédulité (rejet de la foi) et l\'ingratitude (rejet des bienfaits). Ces deux dimensions sont présentes dans Al-Baqara — les incrédules rejettent à la fois la révélation et les bienfaits divins.',
        axe5_frequence: 'Kafara et ses dérivés apparaissent 525 fois dans le Coran. Kāfirūna/kāfirīna (forme d\'agent pluriel) apparaît 152 fois. L\'un des mots les plus fréquents du Coran. Lane confirme l\'étymologie de "couverture" et ses deux nuances.'
      }
    }
  });

  console.log('\nVWAs terminées. Insertion word_daily...\n');

  // word_daily pour les racines nécessitant de nouvelles entrées
  // klf (analysis_id à trouver — chercher dans word_analyses)
  const { data: klfWA } = await supabase.from('word_analyses').select('id').eq('key', 'klf').single();
  if (klfWA) {
    await insertWordDaily(klfWA.id, 'Charge/Obligation', [
      { fr: 'Dieu n\'impose à personne une charge au-delà de ses forces.', ar: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا', phon: 'lā yukallifu llāhu nafsan illā wusʿahā' },
      { fr: 'Cette tâche lui a été imposée malgré ses limites.', ar: 'كُلِّفَ هَذِهِ الْمَهَمَّةَ رَغْمَ مَحْدُودِيَّتِهِ', phon: 'kullifa hādhihi l-mahamma raghma maḥdūdiyyatihi' },
      { fr: 'L\'obligation religieuse doit rester proportionnée à la capacité.', ar: 'التَّكْلِيفُ الدِّينِيُّ يَجِبُ أَنْ يَكُونَ مُتَنَاسِبًا مَعَ الطَّاقَةِ', phon: 'al-taklīf al-dīnī yajib an yakūna mutanāsiban maʿa l-ṭāqa' }
    ]);
  }

  // wse (analysis_id)
  const { data: wseWA } = await supabase.from('word_analyses').select('id').eq('key', 'wse').single();
  if (wseWA) {
    await insertWordDaily(wseWA.id, 'Capacité/Amplitude', [
      { fr: 'Il a dépensé selon sa capacité, pas au-delà.', ar: 'أَنْفَقَ بِقَدْرِ وُسْعِهِ لَا أَكْثَرَ', phon: 'anfaqa bi-qadri wusʿihi lā akthar' },
      { fr: 'La loi islamique tient compte de l\'amplitude de chacun.', ar: 'الشَّرِيعَةُ تَأْخُذُ بِعَيْنِ الاِعْتِبَارِ وُسْعَ كُلِّ إِنْسَانٍ', phon: 'al-sharīʿa ta\'khudhu bi-ʿayn al-iʿtibār wusʿa kulli insān' },
      { fr: 'Il n\'est pas en son pouvoir de faire plus.', ar: 'لَيْسَ فِي وُسْعِهِ أَنْ يَفْعَلَ أَكْثَرَ', phon: 'laysa fī wusʿihi an yafʿala akthar' }
    ]);
  }

  // kha (akhṭa\'a — erreur)
  const { data: khaWA } = await supabase.from('word_analyses').select('id').eq('key', 'kha').single();
  if (khaWA) {
    await insertWordDaily(khaWA.id, 'Erreur/Faute', [
      { fr: 'Il a commis une erreur par inadvertance, sans mauvaise intention.', ar: 'أَخْطَأَ دُونَ قَصْدٍ سَيِّئٍ', phon: 'akhṭa\'a dūna qaṣdin sayyi\'' },
      { fr: 'L\'oubli et la faute involontaire sont pardonnés dans l\'islam.', ar: 'النِّسْيَانُ وَالْخَطَأُ غَيْرُ الْمَقْصُودِ مَعْفُوٌّ عَنْهُ فِي الإِسْلَامِ', phon: 'al-nisyān wa-l-khaṭa\' ghayr al-maqṣūd maʿfuwwun ʿanhu fī l-islām' },
      { fr: 'Qui n\'a jamais fait d\'erreur dans sa vie ?', ar: 'مَنْ لَمْ يُخْطِئْ فِي حَيَاتِهِ قَطُّ؟', phon: 'man lam yukhṭi\' fī ḥayātihi qaṭṭu?' }
    ]);
  }

  // twq (ṭāqa — force/capacité)
  const { data: twqWA } = await supabase.from('word_analyses').select('id').eq('key', 'twq').single();
  if (twqWA) {
    await insertWordDaily(twqWA.id, 'Force/Capacité', [
      { fr: 'Cela dépasse mes forces, je ne peux pas le supporter.', ar: 'هَذَا فَوْقَ طَاقَتِي، لَا أَسْتَطِيعُ تَحَمُّلَهُ', phon: 'hādhā fawqa ṭāqatī, lā astaṭīʿu taḥammalahu' },
      { fr: 'Travaille autant que tu en as la force, pas plus.', ar: 'اعْمَلْ بِقَدْرِ طَاقَتِكَ، لَا تَتَجَاوَزْهَا', phon: 'iʿmal bi-qadri ṭāqatika, lā tatajāwazha' },
      { fr: 'La résistance humaine a ses limites infranchissables.', ar: 'لِلطَّاقَةِ الْبَشَرِيَّةِ حُدُودٌ لَا تُتَجَاوَزُ', phon: 'li-l-ṭāqa al-bashariyya ḥudūd lā tutajāwaz' }
    ]);
  }

  // enw — vérifier si existe
  const { data: enwWA } = await supabase.from('word_analyses').select('id').eq('key', 'enw').single();
  if (enwWA) {
    await insertWordDaily(enwWA.id, 'Pardon/Indulgence', [
      { fr: 'Il lui a pardonné et a passé sur ses erreurs.', ar: 'عَفَا عَنْهُ وَتَجَاوَزَ عَنْ أَخْطَائِهِ', phon: 'ʿafā ʿanhu wa-tajāwaza ʿan akhṭā\'ihi' },
      { fr: 'Dieu est Indulgent envers Ses serviteurs repentants.', ar: 'اللَّهُ عَفُوٌّ عَنْ عِبَادِهِ التَّائِبِينَ', phon: 'allāhu ʿafuwwun ʿan ʿibādihi l-tā\'ibīna' }
    ]);
  }

  // ant (pronom — vérifier si existe)
  const { data: antWA } = await supabase.from('word_analyses').select('id').eq('key', 'ant').single();
  if (antWA) {
    await insertWordDaily(antWA.id, 'Toi/Tu (pronom)', [
      { fr: 'Tu es notre Protecteur, secours-nous donc.', ar: 'أَنْتَ مَوْلَانَا فَانْصُرْنَا', phon: 'anta mawlānā fa-nṣurnā' },
      { fr: 'C\'est toi seul que nous adorons et dont nous implorons l\'aide.', ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', phon: 'iyyāka naʿbudu wa-iyyāka nastaʿīnu' }
    ]);
  }

  console.log('\nVERSET 2:286 — TERMINÉ');
}

async function main() {
  await processVerse286();
  console.log('\n=== VERSET 286 TERMINÉ ===');
}
main().catch(console.error);
