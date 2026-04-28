const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// CORRECTION DES WARNINGS "AXE TROP COURT" — S2 V221-230
// 21 axes à allonger sur des concepts probables
// NE PAS TOUCHER aux axes déjà OK (>= 100 chars)
// =====================================================

// Chaque entrée: { verse_id, word_key, position, conceptName, field, newText }
const fixes = [

  // =====================================================
  // 1. V223 - nfs pos=3 "Souffle/Vie" (probable) verse_id=230
  // axe2_voisins(86), axe3_sourate(87), axe4_coherence(74), axe5_frequence(69)
  // =====================================================
  {
    verse_id: 230, word_key: 'nfs', position: 3,
    conceptName: 'Souffle/Vie',
    field: 'axe2_voisins',
    newText: 'Le verset 223 suit le verset 222 sur la menstruation — un contexte biologique par excellence. Si l\'on retenait le sens de Souffle/Vie pour nafs, le verset demanderait d\'agir à l\'avance pour son propre souffle vital. Mais les versets voisins traitent de relation conjugale et de reproduction, un contexte où l\'individu-personne est plus pertinent que le souffle biologique. Le souffle serait pertinent dans un contexte de mort ou de création — ici le contexte est le mariage et la communauté familiale, ce qui oriente vers le sens d\'Âme/Être.'
  },
  {
    verse_id: 230, word_key: 'nfs', position: 3,
    conceptName: 'Souffle/Vie',
    field: 'axe3_sourate',
    newText: 'Dans la sourate al-Baqarah, nafs est utilisé pour désigner l\'individu-personne (2:48 : aucune nafs ne paiera pour une autre), le soi moral (2:54 : tuez vos propres nafs), et la totalité de l\'être. Le sens de Souffle/Vie (souffle vital, biologique) est moins fréquent dans cette sourate qui traite principalement de l\'individu responsable devant Dieu. En 2:223, le contexte d\'action intentionnelle pour son propre bien oriente vers nafs comme individu-sujet plutôt que comme souffle biologique.'
  },
  {
    verse_id: 230, word_key: 'nfs', position: 3,
    conceptName: 'Souffle/Vie',
    field: 'axe4_coherence',
    newText: 'Le concept de Souffle/Vie (nafs comme souffle vital) est pertinent quand on parle de création ou de mort — Dieu insuffle le souffle dans Adam (15:29), ou le souffle quitte le corps au moment du décès. Dans le contexte de 2:223, le verset parle d\'actes intentionnels accomplis pour soi-même : agir, se préparer. Cette dimension d\'agent actif et moral est couverte par Âme/Être, pas par Souffle/Vie qui désigne davantage un processus biologique passif.'
  },
  {
    verse_id: 230, word_key: 'nfs', position: 3,
    conceptName: 'Souffle/Vie',
    field: 'axe5_frequence',
    newText: 'La racine n-f-s couvre dans le Coran deux pôles : le souffle biologique (nafs comme vie/respiration) et l\'individu-être (nafs comme soi, personne). Dans les contextes de responsabilité morale et d\'action individuelle — qui sont les contextes les plus fréquents du Coran — nafs désigne l\'individu-sujet. Le contexte de 2:223 portant sur des actes accomplis par et pour soi-même s\'inscrit dans cet usage majoritaire, rendant le sens Âme/Être plus pertinent que Souffle/Vie.'
  },

  // =====================================================
  // 2. V223 - shy pos=1 "Chose/Être" (probable) verse_id=230
  // axe1_verset(97), axe3_sourate(74), axe4_coherence(85)
  // =====================================================
  {
    verse_id: 230, word_key: 'shy', position: 1,
    conceptName: 'Chose/Être',
    field: 'axe1_verset',
    newText: 'Le verset 223 comporte la formule "wa-mā taqaddamū li-anfusikum min khayrin tajidūhu" — ce que vous faites à l\'avance de bien, vous le trouverez. Si l\'on retenait Chose/Être pour shay, le verset dirait "toute chose que vous voulez". Mais la structure grammaticale indique que le mot central est mashīʾa (vouloir/volonté) — c\'est la volonté intentionnelle qui est en jeu, pas une chose quelconque. Le sens Volonté est plus précis pour rendre compte de l\'acte délibéré que décrit le verset.'
  },
  {
    verse_id: 230, word_key: 'shy', position: 1,
    conceptName: 'Chose/Être',
    field: 'axe3_sourate',
    newText: 'Dans la sourate al-Baqarah, la racine sh-y-ʾ est utilisée tantôt comme "chose" (shayʾ = quelque chose, 2:20), tantôt comme "vouloir" (mashāʾa = il a voulu, 2:26). En 2:223, la forme verbale tashāʾūna renvoie à l\'acte de vouloir, pas à une chose. L\'ensemble de la sourate al-Baqarah traite de l\'orientation de la volonté humaine — vers Dieu, vers la justice, vers la communauté — ce qui renforce le sens de Volonté comme retenu pour ce verset.'
  },
  {
    verse_id: 230, word_key: 'shy', position: 1,
    conceptName: 'Chose/Être',
    field: 'axe4_coherence',
    newText: 'La distinction entre shayʾ (chose, entité, quelque chose d\'existant) et mashīʾa (vouloir, acte de volonté) est essentielle dans la langue coranique. Lorsque le Coran dit "Dieu fait ce qu\'Il veut" (yafallu mā yashāʾ), le sens est la volonté souveraine, pas une chose. En 2:223, la forme tashāʾūna (vous voulez) désigne l\'acte délibéré de vouloir — le concept Chose/Être, qui désigne des entités existantes, ne recouvre pas bien cette dimension de la volonté intentionnelle.'
  },

  // =====================================================
  // 3. V224 - erd pos=1 "Largeur/Etendue" (probable) verse_id=231
  // axe3_sourate(67), axe4_coherence(84)
  // =====================================================
  {
    verse_id: 231, word_key: 'erd', position: 1,
    conceptName: 'Largeur/Etendue',
    field: 'axe3_sourate',
    newText: 'Dans la sourate al-Baqarah, la racine ʿ-r-ḍ est utilisée pour désigner l\'exposition et la présentation des choses devant une réalité : 2:31 (Dieu présente/expose les noms aux anges), 2:102 (ce qui était présenté aux rois de Babylone). Le sens de Largeur/Étendue (ʿarḍ comme superficie) est utilisé dans d\'autres versets du Coran (3:133 : un jardin dont la largeur couvre les cieux), mais est absent dans al-Baqarah. En 2:224, le contexte de serment et d\'engagement moral oriente vers la Présentation/Exposition plutôt que vers la Largeur géographique.'
  },
  {
    verse_id: 231, word_key: 'erd', position: 1,
    conceptName: 'Largeur/Etendue',
    field: 'axe4_coherence',
    newText: 'La racine ʿ-r-ḍ couvre deux pôles sémantiques distincts dans le Coran : l\'étendue physique (ʿarḍ = largeur, superficie, comme dans la description du Paradis) et la présentation devant quelqu\'un (ʿaraḍa = exposer, présenter, mettre en avant). Dans le contexte de 2:224, qui parle de ne pas utiliser Dieu comme prétexte pour ses serments, le sens de mise en avant et d\'exposition de Dieu comme écran est plus adapté que la simple largeur ou étendue spatiale, qui n\'a pas de sens cohérent dans ce verset.'
  },

  // =====================================================
  // 4. V225 - ghfr pos=5 "Protection" (probable) verse_id=232
  // axe3_sourate(99)
  // =====================================================
  {
    verse_id: 232, word_key: 'ghfr', position: 5,
    conceptName: 'Protection',
    field: 'axe3_sourate',
    newText: 'Dans la sourate al-Baqarah, la racine gh-f-r est systématiquement utilisée dans le sens de pardon et de couverture des fautes. En 2:52, Dieu pardonne (ʿafawnā) après l\'idolâtrie. En 2:192, ghafūrun raḥīmun conclut la cessation du combat. En 2:199, la même formule ghafūrun raḥīmun suit l\'évocation des rites du pèlerinage. En 2:225, l\'appel au ghufr désigne le pardon pour les serments non intentionnels. La "Protection" (himāya) est une autre racine distincte — dans toute la sourate, gh-f-r désigne exclusivement la couverture des fautes, jamais une protection physique ou sociale.'
  },

  // =====================================================
  // 5. V228 - hkm pos=17 "Jugement/Decision" (probable) verse_id=235
  // axe1_verset(83)
  // =====================================================
  {
    verse_id: 235, word_key: 'hkm', position: 17,
    conceptName: 'Jugement/Decision',
    field: 'axe1_verset',
    newText: 'Le verset 228 se conclut sur wa-Llāhu ʿazīzun ḥakīmun — Dieu est Puissant et Sage. Si l\'on retenait Jugement/Décision pour hkm, Dieu serait décrit comme Puissant et Juge/Décideur. Cette lecture est grammaticalement possible et théologiquement cohérente : Dieu décide souverainement des règles du divorce et de l\'attente. Cependant, dans les formules conclusives du Coran, ḥakīm désigne le plus souvent la Sagesse dans la mise en ordre — Dieu agit avec sagesse et discernement, pas seulement comme juge tranchant des cas. Le sens Sagesse est donc mieux adapté à cette formule de clôture.'
  },

  // =====================================================
  // 6. V228 - hqq pos=10 "Verite/Realite" (probable) verse_id=235
  // axe1_verset(84), axe2_voisins(55), axe3_sourate(73), axe4_coherence(61), axe5_frequence(86)
  // =====================================================
  {
    verse_id: 235, word_key: 'hqq', position: 10,
    conceptName: 'Verite/Realite',
    field: 'axe1_verset',
    newText: 'Le verset 228 contient la formule wa-lahunna mithlu lladhī ʿalayhinna bil-maʿrūf — les femmes ont des droits équivalents à leurs obligations, selon l\'usage reconnu. Le mot traduit par "droits" est ḥaqq (h-q-q). Si l\'on retenait Vérité/Réalité, le verset affirmerait que les femmes ont une "vérité" équivalente à leurs obligations. Mais dans ce contexte juridique, ḥaqq désigne le droit acquis, la créance légitime — ce qui est dû à quelqu\'un. Le sens Obligation/Nécessité (ḥaqq comme droit-devoir) est plus adapté que Vérité/Réalité pour rendre compte de l\'équilibre droits-devoirs du verset.'
  },
  {
    verse_id: 235, word_key: 'hqq', position: 10,
    conceptName: 'Verite/Realite',
    field: 'axe2_voisins',
    newText: 'Les versets 226-227 traitent du serment de continence (ila\') et de la décision de rompre ou non. Le verset 228 introduit les droits et devoirs réciproques dans la période d\'attente après divorce. Ce contexte de droit conjugal porte sur des obligations contractuelles et des protections juridiques mutuelles. Dans ce registre, ḥaqq désigne un droit légitime — une créance — et non une vérité philosophique ou une réalité métaphysique. Les versets voisins établissent tous un cadre de règles et de droits, pas de vérité abstraite.'
  },
  {
    verse_id: 235, word_key: 'hqq', position: 10,
    conceptName: 'Verite/Realite',
    field: 'axe3_sourate',
    newText: 'Dans la sourate al-Baqarah, ḥaqq est utilisé dans deux registres distincts : la vérité (al-ḥaqq comme ce qui est réel, opposé au bāṭil en 2:42, 2:147), et le droit légitime (ḥaqq comme créance, obligation en 2:180 : il est prescrit le testament, 2:228 : les femmes ont des droits). En 2:228, la formule lahunna mithlu lladhī ʿalayhinna positionne ḥaqq dans le registre des droits-devoirs réciproques, pas de la vérité-réalité. C\'est donc le sens Obligation/Nécessité qui est retenu ici.'
  },
  {
    verse_id: 235, word_key: 'hqq', position: 10,
    conceptName: 'Verite/Realite',
    field: 'axe4_coherence',
    newText: 'La racine ḥ-q-q est une des plus riches du Coran. Elle couvre la vérité (al-ḥaqq opposé au mensonge), la réalité (ce qui existe effectivement), le droit (ḥaqq = créance, droit acquis) et l\'obligation (ḥaqqa = il était dû, nécessaire). Dans les contextes juridiques et de relations interpersonnelles, ḥaqq désigne systématiquement le droit légitime ou l\'obligation — non pas la vérité abstraite. Le contexte de 2:228 sur les droits réciproques des époux confirme que Vérité/Réalité n\'est pas le sens pertinent ici.'
  },
  {
    verse_id: 235, word_key: 'hqq', position: 10,
    conceptName: 'Verite/Realite',
    field: 'axe5_frequence',
    newText: 'La racine ḥ-q-q apparaît plus de 250 fois dans le Coran dans une grande variété de formes. Dans les contextes juridiques et de justice sociale — qui sont très fréquents dans la sourate al-Baqarah — ḥaqq désigne presque toujours un droit ou une obligation. Le sens Vérité/Réalité est davantage associé à des contextes théologiques et épistémiques (la vérité que Dieu révèle, la réalité du Jour Dernier). En 2:228, la structure du verset — droits mutuels calculés selon l\'usage reconnu — est un contexte juridique, ce qui confirme que Vérité/Réalité n\'est pas le sens retenu.'
  },

  // =====================================================
  // 7. V228 - nfs pos=2 "Corps/Anatomie" (probable) verse_id=235
  // axe2_voisins(82), axe3_sourate(79), axe4_coherence(81), axe5_frequence(78)
  // =====================================================
  {
    verse_id: 235, word_key: 'nfs', position: 2,
    conceptName: 'Corps/Anatomie',
    field: 'axe2_voisins',
    newText: 'Les versets 226-227 traitent du serment de continence de l\'homme et de la décision de divorcer. Le verset 228 aborde la période d\'attente des femmes et leurs droits. Dans ce contexte matrimonial, nafs désigne la personne dans sa totalité — individu responsable et sujet de droits — et non le corps dans ses aspects anatomiques. Le corps (jism) serait pertinent si le verset parlait de santé, de pureté physique ou d\'aspects biologiques ; ici, il s\'agit d\'une protection de la personne dans son statut conjugal.'
  },
  {
    verse_id: 235, word_key: 'nfs', position: 2,
    conceptName: 'Corps/Anatomie',
    field: 'axe3_sourate',
    newText: 'Dans la sourate al-Baqarah, nafs est systématiquement utilisé pour désigner l\'individu-personne (2:48 : aucune nafs ne portera le fardeau d\'une autre), le soi moral (2:54 : tuez vos propres nafs pour vous purifier), ou le soi intérieur (2:225 : ce que vos cœurs ont acquis). Le sens Corps/Anatomie — qui renverrait à la dimension physique et biologique de la personne — n\'est pas attesté dans al-Baqarah pour nafs. La sourate utilise nafs dans le sens d\'être-individu-sujet, ce qui confirme que Corps/Anatomie n\'est pas le sens retenu.'
  },
  {
    verse_id: 235, word_key: 'nfs', position: 2,
    conceptName: 'Corps/Anatomie',
    field: 'axe4_coherence',
    newText: 'La distinction entre nafs (être-individu, âme-soi) et jism/badan (corps physique) est nette dans la langue arabe classique et coranique. Le nafs désigne l\'individu dans sa totalité — être pensant et voulant — tandis que le corps est l\'enveloppe matérielle. En 2:228, ce que les femmes gardent en elles concerne leur statut personnel et leur dignité d\'individu, pas simplement leur corps. Le concept Corps/Anatomie ne rend pas compte de la dimension de sujet moral et juridique que nafs possède dans ce contexte.'
  },
  {
    verse_id: 235, word_key: 'nfs', position: 2,
    conceptName: 'Corps/Anatomie',
    field: 'axe5_frequence',
    newText: 'Dans le corpus coranique, nafs est l\'un des mots les plus fréquents avec plus de 295 occurrences. Il désigne presque toujours l\'individu-être (personne, soi, âme) dans des contextes de responsabilité, de jugement et de relations sociales. Le sens Corps/Anatomie (corps physique, aspect biologique) est rarissime pour nafs — le Coran utilise jism, badan ou abdān pour désigner le corps matériel. La fréquence d\'utilisation de nafs dans le sens d\'individu-sujet confirme que Corps/Anatomie n\'est pas pertinent en 2:228.'
  },

  // =====================================================
  // 8. V229 - qwm pos=8 "Gestion/Administration" (probable) verse_id=236
  // axe3_sourate(89)
  // =====================================================
  {
    verse_id: 236, word_key: 'qwm', position: 8,
    conceptName: 'Gestion/Administration',
    field: 'axe3_sourate',
    newText: 'Dans la sourate al-Baqarah, la racine q-w-m est utilisée pour désigner la droiture et la station ferme : 2:3 (iqāmat al-ṣalāt = accomplir la prière avec droiture), 2:238 (qūmū lillāh qānitīn = tenez-vous debout devant Dieu avec dévotion). Le sens Gestion/Administration renverrait à une dimension organisationnelle et gestionnaire. Mais dans al-Baqarah, q-w-m évoque systématiquement la verticalité morale et la droiture de posture — se tenir droit, accomplir avec constance. En 2:229, le qiwām désigne ce qui soutient et maintient l\'ordre, dans le sens de maintien et de droiture, pas d\'administration bureaucratique.'
  },
];

async function main() {
  console.log('=== FIX WARNINGS "AXE TROP COURT" — S2 V221-230 ===');
  console.log('Date:', new Date().toISOString());
  console.log(`Nombre de corrections à appliquer: ${fixes.length}\n`);

  let fixed = 0;
  let errors = 0;

  for (const fix of fixes) {
    // Validation: le nouveau texte doit faire au moins 100 chars
    if (fix.newText.length < 100) {
      console.error(`  ERREUR INTERNE: newText "${fix.conceptName}" ${fix.field} trop court (${fix.newText.length} chars) — SKIP`);
      errors++;
      continue;
    }

    // Récupérer la VWA
    const { data: rows, error: fetchErr } = await supabase
      .from('verse_word_analyses')
      .select('id, analysis_axes')
      .eq('verse_id', fix.verse_id)
      .eq('word_key', fix.word_key)
      .eq('position', fix.position);

    if (fetchErr || !rows || rows.length === 0) {
      console.error(`  ERREUR: VWA non trouvée verse_id=${fix.verse_id} word_key=${fix.word_key} pos=${fix.position}: ${fetchErr?.message || 'aucun résultat'}`);
      errors++;
      continue;
    }

    const row = rows[0];
    const axes = row.analysis_axes;

    if (!axes.concepts || !axes.concepts[fix.conceptName]) {
      console.error(`  ERREUR: concept "${fix.conceptName}" absent dans VWA id=${row.id} (verse_id=${fix.verse_id} ${fix.word_key} pos=${fix.position})`);
      console.error(`    Concepts disponibles: ${axes.concepts ? Object.keys(axes.concepts).join(', ') : 'aucun'}`);
      errors++;
      continue;
    }

    // Ne modifier QUE l'axe indiqué — merge sans toucher aux autres axes
    const prevLength = axes.concepts[fix.conceptName][fix.field]?.length || 0;
    axes.concepts[fix.conceptName][fix.field] = fix.newText;

    const { error: updateErr } = await supabase
      .from('verse_word_analyses')
      .update({ analysis_axes: axes })
      .eq('id', row.id);

    if (updateErr) {
      console.error(`  ERREUR update VWA id=${row.id}: ${updateErr.message}`);
      errors++;
    } else {
      console.log(`  OK: id=${row.id} verse_id=${fix.verse_id} ${fix.word_key} pos=${fix.position} "${fix.conceptName}" ${fix.field}: ${prevLength} => ${fix.newText.length} chars`);
      fixed++;
    }
  }

  console.log(`\n=== RÉSULTAT: ${fixed} corrections appliquées, ${errors} erreurs ===`);

  if (errors === 0) {
    console.log('Tous les axes trop courts ont été corrigés avec succès.');
  } else {
    console.log(`ATTENTION: ${errors} erreur(s) — vérifier les logs ci-dessus.`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error('ERREUR FATALE:', err);
  process.exit(1);
});
