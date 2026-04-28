// Pipeline S88 v11-26 — Étape 2 : Créer les racines manquantes kwb et stH
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  console.log('=== ÉTAPE 2 — RACINES MANQUANTES S88 v11-26 ===\n');

  // ============================================================
  // 1. kwb — كوب — gobelet (v14: أَكْوَابٌ)
  // Lane's: kwb = boire avec un kub, gobelet sans anse, sighing, jeu
  // Occurrences Coran: 4 (56:18, 43:71, 76:15, 88:14)
  // ============================================================
  console.log('--- kwb (كوب) ---');

  const { data: kwbWA, error: e1 } = await sb.from('word_analyses').insert({
    word_key: 'kwb',
    root_ar: 'ك و ب',
    root_phon: 'kwb',
    root_meaning: '',
    model_used: 'claude-pipeline',
    prompt_version: 'v2-maison',
    total_occurrences: 4,
    analysis_step: 'concepts'
  }).select().single();
  if (e1) { console.log('ERR kwb WA:', e1.message); return; }
  console.log('  ✓ word_analyses id=' + kwbWA.id);

  const kwbMeanings = [
    // Concept 1: Récipient/Gobelet (retenu)
    { sense: 'gobelet', concept: 'Récipient/Gobelet', status: 'retenu', display_order: 1,
      description: "Objet concret servant a boire. Le gobelet est un recipient sans anse ni bec — une forme pure et depouillée de contenant pour liquide. C'est un objet fonctionnel tourne vers l'exterieur : il recoit le liquide et le donne a boire. Son depouillement (ni anse ni ornement) en fait un objet d'une simplicite radicale." },
    { sense: 'recipient sans anse', concept: 'Récipient/Gobelet', status: 'retenu', display_order: 2,
      description: 'Recipient de forme simple, sans poignee.' },
    { sense: 'recipient sans bec verseur', concept: 'Récipient/Gobelet', status: 'retenu', display_order: 3,
      description: 'Recipient sans systeme de versement.' },
    { sense: 'boire avec un gobelet', concept: 'Récipient/Gobelet', status: 'retenu', display_order: 4,
      description: "L'acte de boire en utilisant ce type de recipient." },
    // Concept 2: Chagrin/Soupir
    { sense: 'soupir de regret', concept: 'Chagrin/Soupir', status: 'nul', display_order: 5,
      description: "Etat interieur de tristesse pour quelque chose qui a echappe. Le soupir reste chez celui qui le ressent — c'est une emotion ponctuelle tournee vers le passe." },
    // Concept 3: Jeu/Divertissement
    { sense: 'jeu de des', concept: 'Jeu/Divertissement', status: 'nul', display_order: 6,
      description: "Activite ludique. Le jeu est un acte exterieur et social, oriente vers le plaisir." },
    { sense: 'petit tambour', concept: 'Jeu/Divertissement', status: 'nul', display_order: 7,
      description: 'Instrument de musique de forme allongee.' },
    // Concept 4: Corps/Anatomie
    { sense: 'finesse du cou avec grosseur de tete', concept: 'Sens isolé/Anatomie', status: 'nul', display_order: 8,
      description: 'Trait physique decrivant une proportion corporelle.' }
  ];

  for (const m of kwbMeanings) {
    const { error } = await sb.from('word_meanings').insert({
      analysis_id: kwbWA.id,
      sense: m.sense,
      concept: m.concept,
      status: m.status,
      meaning_type: 'etymology',
      description: m.description,
      display_order: m.display_order
    });
    if (error) console.log('  ERR meaning:', error.message);
  }
  console.log('  ✓ ' + kwbMeanings.length + ' sens → 4 concepts');

  // Daily phrases kwb
  const kwbDaily = [
    { sense: 'gobelet', arabic: 'أعطني كوبًا من الماء', phon: "a'tini kuban min al-ma'", french: 'Donne-moi un gobelet d\'eau' },
    { sense: 'gobelet', arabic: 'الأكواب على الطاولة', phon: "al-akwab 'ala at-tawila", french: 'Les gobelets sont sur la table' },
    { sense: 'gobelet', arabic: 'شربت من الكوب', phon: 'sharibtu min al-kub', french: "J'ai bu dans le gobelet" }
  ];
  for (const d of kwbDaily) {
    await sb.from('word_daily').insert({ analysis_id: kwbWA.id, ...d });
  }
  console.log('  ✓ 3 phrases quotidiennes');

  // ============================================================
  // 2. stH — سطح — étendre, aplanir (v20: سُطِحَتْ)
  // Lane's: sTH = spread, expand, make flat/even, roof/surface
  // Occurrences Coran: 1 (88:20)
  // ============================================================
  console.log('\n--- stH (سطح) ---');

  const { data: stHWA, error: e2 } = await sb.from('word_analyses').insert({
    word_key: 'stH',
    root_ar: 'س ط ح',
    root_phon: 'stH',
    root_meaning: '',
    model_used: 'claude-pipeline',
    prompt_version: 'v2-maison',
    total_occurrences: 1,
    analysis_step: 'concepts'
  }).select().single();
  if (e2) { console.log('ERR stH WA:', e2.message); return; }
  console.log('  ✓ word_analyses id=' + stHWA.id);

  const stHMeanings = [
    // Concept 1: Extension/Aplanissement (retenu)
    { sense: 'etendre', concept: 'Extension/Aplanissement', status: 'retenu', display_order: 1,
      description: "Acte exterieur de deployer une chose sur une surface. L'extension est un mouvement vers l'exterieur — elle prend ce qui est contracte et le deploie. C'est un acte directionnel et permanent : une fois etendue, la chose reste deployee. L'aplanissement est l'extension dans le sens de la surface — rendre plat ce qui ne l'etait pas." },
    { sense: 'aplanir', concept: 'Extension/Aplanissement', status: 'retenu', display_order: 2,
      description: 'Rendre plat et egal une surface.' },
    { sense: 'deployer', concept: 'Extension/Aplanissement', status: 'retenu', display_order: 3,
      description: 'Ouvrir et etaler ce qui etait replie.' },
    { sense: 'faire secher des dattes en les etalant', concept: 'Extension/Aplanissement', status: 'retenu', display_order: 4,
      description: 'Etaler pour exposer au soleil.' },
    { sense: 'rendre egal et plat', concept: 'Extension/Aplanissement', status: 'retenu', display_order: 5,
      description: 'Niveler une surface.' },
    // Concept 2: Surface/Toit
    { sense: 'surface superieure', concept: 'Surface/Toit', status: 'probable', display_order: 6,
      description: "Le resultat de l'extension — la surface plane qui en decoule. Le toit est la surface superieure d'un batiment, le plan qui couvre. C'est un etat resultant, pas un acte : la surface existe parce qu'elle a ete etendue." },
    { sense: 'toit plat', concept: 'Surface/Toit', status: 'probable', display_order: 7,
      description: 'Partie superieure plate d\'un batiment.' },
    { sense: 'surface plate de toute chose', concept: 'Surface/Toit', status: 'probable', display_order: 8,
      description: 'Face superieure de n\'importe quel objet.' },
    // Concept 3: Prostration/Immobilité
    { sense: 'etre etendu sur le dos, immobile', concept: 'Prostration/Immobilité', status: 'nul', display_order: 9,
      description: "Etat passif d'immobilite totale — la personne est etendue et ne bouge plus. C'est un etat subi, resultant d'une maladie ou d'une faiblesse." },
    { sense: 'malade chronique gisant au sol', concept: 'Prostration/Immobilité', status: 'nul', display_order: 10,
      description: 'Personne clouee au sol par la maladie.' },
    // Concept 4: Récipient/Outre
    { sense: 'outre a eau', concept: 'Sens isolé/Récipient', status: 'nul', display_order: 11,
      description: 'Recipient de cuir pour transporter l\'eau.' },
    // Concept 5: Plante/Végétation
    { sense: 'plante rampante', concept: 'Sens isolé/Plante', status: 'nul', display_order: 12,
      description: 'Herbe qui s\'etend sur le sol.' }
  ];

  for (const m of stHMeanings) {
    const { error } = await sb.from('word_meanings').insert({
      analysis_id: stHWA.id,
      sense: m.sense,
      concept: m.concept,
      status: m.status,
      meaning_type: 'etymology',
      description: m.description,
      display_order: m.display_order
    });
    if (error) console.log('  ERR meaning:', error.message);
  }
  console.log('  ✓ ' + stHMeanings.length + ' sens → 5 concepts');

  // Daily phrases stH
  const stHDaily = [
    { sense: 'etendre', arabic: 'سطحت العجينة', phon: 'satahat al-ajina', french: "J'ai etendu la pate" },
    { sense: 'etendre', arabic: 'سطح البيت مبلّط', phon: 'sathu al-bayt muballat', french: 'Le toit de la maison est carrele' },
    { sense: 'etendre', arabic: 'سطّح التمر ليجفّ', phon: 'sattaha at-tamr li-yajiff', french: 'Il a etale les dattes pour les faire secher' }
  ];
  for (const d of stHDaily) {
    await sb.from('word_daily').insert({ analysis_id: stHWA.id, ...d });
  }
  console.log('  ✓ 3 phrases quotidiennes');

  console.log('\n=== ÉTAPE 2 TERMINÉE ===');
  console.log('kwb id=' + kwbWA.id + ', stH id=' + stHWA.id);
})();
