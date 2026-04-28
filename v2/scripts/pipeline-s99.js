require('dotenv').config({path:'.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// ============================================================
// HELPERS
// ============================================================
async function upsertVWA(verse_id, word_key, analysis_axes, position) {
  const sense_chosen = analysis_axes.sense_chosen || null;
  await sb.from('verse_word_analyses').delete().eq('verse_id', verse_id).eq('word_key', word_key);
  const {data,error} = await sb.from('verse_word_analyses')
    .insert({verse_id, word_key, sense_chosen, analysis_axes, position: position || 1})
    .select().single();
  if(error) throw new Error(`VWA ${verse_id}/${word_key}: ${error.message}`);
  return data;
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const {error} = await sb.from('word_daily').insert({analysis_id, sense, arabic, phon, french});
  if(error && !error.message.includes('duplicate')) console.log('  daily warning:', error.message);
}

async function updateVerse(verse_id, fields) {
  const {error} = await sb.from('verse_analyses').update(fields).eq('verse_id', verse_id);
  if(error) throw new Error(`verse_analyses ${verse_id}: ${error.message}`);
}

// ============================================================
// ÉTAPE 2 — RACINES MANQUANTES
// ============================================================
async function createMissingRoots() {
  console.log('\n====== ÉTAPE 2 — RACINES MANQUANTES ======\n');

  // štt (ش ت ت) — dispersion
  let {data: existing} = await sb.from('word_analyses').select('id').eq('word_key','štt').maybeSingle();
  if (!existing) {
    const {data: created} = await sb.from('word_analyses')
      .insert({word_key:'štt', root_ar:'ش ت ت', root_phon:'sh-t-t', total_occurrences: 7})
      .select().single();
    const id = created.id;
    console.log('[štt] Créé id=' + id);
    await sb.from('word_meanings').insert([
      {analysis_id:id, concept:'Dispersion/Séparation', sense:'se disperser', description:"Mouvement de ce qui était uni et qui se sépare en parties distinctes. La dispersion est un acte extérieur, directionnel et centrifuge — chaque élément s'éloigne du centre. Le Lane's donne : « l'état des affaires se dissout, se rompt, se désorganise ». C'est la rupture de l'unité, le passage de l'ensemble à l'éparpillement.", meaning_type:'etymology', display_order:1},
      {analysis_id:id, concept:'Dispersion/Séparation', sense:'se séparer', description:'', meaning_type:'etymology', display_order:2},
      {analysis_id:id, concept:'Dispersion/Séparation', sense:'se désunir', description:'', meaning_type:'etymology', display_order:3},
      {analysis_id:id, concept:'Dispersion/Séparation', sense:'éparpiller', description:'', meaning_type:'etymology', display_order:4},
      {analysis_id:id, concept:'Dispersion/Séparation', sense:'désorganiser', description:'', meaning_type:'etymology', display_order:5},
      {analysis_id:id, concept:'Diversité/Différence', sense:'divers', description:"État de ce qui est distinct, pas uniforme. La diversité est un état résultatif et passif — les éléments sont déjà séparés et chacun est différent de l'autre. Le Lane's donne shattā au sens de « divers, variés, différents ». La distinction avec la dispersion : la dispersion est le mouvement de séparation, la diversité est l'état qui en résulte.", meaning_type:'etymology', display_order:6},
      {analysis_id:id, concept:'Diversité/Différence', sense:'variés', description:'', meaning_type:'etymology', display_order:7},
    ]);
    console.log('[RACINE] štt — 7 sens → 2 concepts');
    console.log('  Dispersion/Séparation (5 sens)');
    console.log('  Diversité/Différence (2 sens)');
  } else {
    console.log('[štt] Existe déjà, skip');
  }

  // ḏrr (ذ ر ر) — particule/atome
  ({data: existing} = await sb.from('word_analyses').select('id').eq('word_key','ḏrr').maybeSingle());
  if (!existing) {
    const {data: created} = await sb.from('word_analyses')
      .insert({word_key:'ḏrr', root_ar:'ذ ر ر', root_phon:'dh-r-r', total_occurrences: 6})
      .select().single();
    const id = created.id;
    console.log('[ḏrr] Créé id=' + id);
    await sb.from('word_meanings').insert([
      {analysis_id:id, concept:'Particule/Infime', sense:'plus petites fourmis', description:"Ce qui est infiniment petit et à peine visible. Le Lane's donne : « les jeunes fourmis (larves), les plus petites des fourmis, les poussières qu'on voit dans un rayon de soleil, les particules d'or ». La dharra est l'unité minimale du visible — ce qui est à la limite entre l'existence perceptible et le néant. C'est un objet passif, statique, qui ne fait rien par lui-même mais sert de mesure de l'infime.", meaning_type:'etymology', display_order:1},
      {analysis_id:id, concept:'Particule/Infime', sense:'poussière dans un rayon de soleil', description:'', meaning_type:'etymology', display_order:2},
      {analysis_id:id, concept:'Particule/Infime', sense:'particule minuscule', description:'', meaning_type:'etymology', display_order:3},
      {analysis_id:id, concept:'Particule/Infime', sense:"particules d'or", description:'', meaning_type:'etymology', display_order:4},
      {analysis_id:id, concept:'Dispersion/Saupoudrage', sense:'saupoudrer', description:"Acte de prendre une matière fine du bout des doigts et de la répandre sur une surface. Le Lane's donne : « il a saupoudré du sel sur la viande, du poivre, un médicament dans l'œil, du grain sur le sol ». Le saupoudrage est un acte extérieur, directionnel et ponctuel — on prend et on disperse.", meaning_type:'etymology', display_order:5},
      {analysis_id:id, concept:'Dispersion/Saupoudrage', sense:'répandre finement', description:'', meaning_type:'etymology', display_order:6},
      {analysis_id:id, concept:'Dispersion/Saupoudrage', sense:'éparpiller', description:'', meaning_type:'etymology', display_order:7},
      {analysis_id:id, concept:'Descendance', sense:'enfants', description:"Ce qui est issu et dispersé à partir d'un ancêtre, comme les graines dispersées à partir d'une plante. Le Lane's donne dhurriyya au sens de « enfants, progéniture ». La descendance est le résultat d'une dispersion naturelle — les générations se répandent à partir d'une source.", meaning_type:'etymology', display_order:8},
      {analysis_id:id, concept:'Descendance', sense:'progéniture', description:'', meaning_type:'etymology', display_order:9},
      {analysis_id:id, concept:'Sens isolé/Parfum', sense:'parfum aromatique', description:"Substance finement broyée qu'on saupoudre. Sens isolé.", meaning_type:'etymology', display_order:10},
    ]);
    console.log('[RACINE] ḏrr — 10 sens → 4 concepts');
    console.log('  Particule/Infime (4 sens)');
    console.log('  Dispersion/Saupoudrage (3 sens)');
    console.log('  Descendance (2 sens)');
    console.log('  Sens isolé/Parfum (1 sens)');
  } else {
    console.log('[ḏrr] Existe déjà, skip');
  }

  console.log('\n✓ Racines manquantes créées');
}

// ============================================================
// VERSETS 99:1-3
// ============================================================
async function verses99_1_to_3() {
  console.log('\n====== VERSETS 99:1-3 ======\n');

  // ---- VERSET 99:1 — إِذَا زُلْزِلَتِ ٱلْأَرْضُ زِلْزَالَهَا ----

  // zlzl (1012) — Séisme/Ébranlement
  const zlzlAxes = {
    sense_chosen: "secousse",
    concept_chosen: "Séisme/Ébranlement",
    concepts: {
      "Séisme/Ébranlement": {
        status: "retenu",
        senses: ["trembler de terre", "séisme", "ébranler", "secouer violemment"],
        proof_ctx: "Le sens retenu est « Séisme/Ébranlement ». La racine zlzl est une racine redoublée (zāl-zāl) qui mime phonétiquement le mouvement de va-et-vient d'une secousse. Le mot zulzilat est un verbe passif accompli au féminin — « elle a été secouée ». Le zilzāl est le nom verbal avec le possessif hā — « sa secousse (à elle, la terre) ». Le Lane's donne : trembler de terre, séisme, ébranler violemment. Tous les sens convergent vers la même réalité : un mouvement violent et involontaire. La terre subit cette secousse, elle ne l'initie pas — le passif l'indique clairement.",
        axe1_verset: "Le verset contient deux occurrences de la même racine zlzl : le verbe zulzilat (elle a été secouée) et le nom zilzālahā (sa secousse). Cette répétition de la même racine sous deux formes — verbale et nominale — est un procédé qui amplifie l'intensité. Le possessif « sa » (hā) relie la secousse à la terre comme quelque chose qui lui est propre, qui vient d'elle. Le passif indique que la terre ne se secoue pas elle-même mais subit l'action d'un agent non nommé.",
        axe2_voisins: "Le verset 2 poursuit avec l'expulsion des charges de la terre — une conséquence directe de la secousse. Le verset 3 montre la réaction humaine devant ce spectacle : l'incompréhension. La secousse est le déclencheur de toute la séquence : secousse → expulsion → réaction humaine → explication divine. Chaque verset est la conséquence du précédent.",
        axe3_sourate: "La sourate 99 porte le nom az-Zalzala (la Secousse). Le séisme est le thème d'ouverture et le cadre de toute la sourate. Les versets 1-5 décrivent ce qui arrive à la terre, les versets 6-8 ce qui arrive aux humains. La secousse est le pivot entre l'état normal du monde et le dévoilement de ce qui est caché.",
        axe4_coherence: "Le Coran utilise la racine zlzl en 22:1 dans un contexte similaire : « la secousse de l'Heure est une chose immense ». En 33:11, les croyants sont « secoués d'une secousse violente » — sens métaphorique de perturbation intense. L'usage en 99:1 est cohérent : la secousse est toujours un événement violent qui bouleverse l'ordre établi.",
        axe5_frequence: "La secousse révèle ce qui est caché sous terre. Pour la mission de justice, c'est le rappel que rien ne reste enfoui — tout finit par sortir. La terre qui tremble force à voir ce qu'on avait oublié ou enterré. Cette image fonde l'idée que toute action, même enfouie, sera mise au jour."
      }
    }
  };

  // ard (324) — Terre/Sol
  const ardAxes = {
    sense_chosen: "la terre",
    concept_chosen: "Terre/Sol",
    concepts: {
      "Terre/Sol": {
        status: "retenu",
        senses: ["bas", "terre", "sol", "pays"],
        proof_ctx: "Le sens retenu est « Terre/Sol ». Le mot al-ard est un nom féminin défini avec l'article al. Le Lane's donne : bas, terre, sol, pays. La terre est ici le sujet grammatical qui subit la secousse (passif) puis le possesseur de la secousse (zilzālahā). L'article al indique LA terre comme entité connue et unique — la terre entière, pas un terrain particulier. La distinction avec « pays » : le pays est un territoire humain délimité, la terre est l'entité physique globale. Le contexte (secousse, expulsion des charges) est cosmique, pas géographique.",
        axe1_verset: "Le mot al-ard est le sujet de zulzilat (elle a été secouée). Le champ lexical est celui des phénomènes telluriques : secousse, terre, charges enfouies. La terre est l'acteur principal de la scène — c'est elle qui est secouée, elle qui expulse, elle qui raconte. Le verset la personnifie en lui attribuant une secousse qui lui est propre (zilzālahā).",
        axe2_voisins: "La terre apparaît dans les versets 1 et 2 : elle est secouée (v1) puis elle fait sortir ses charges (v2). Au verset 4, elle raconte ses nouvelles. La terre passe de sujet passif (secouée) à sujet actif (elle fait sortir, elle raconte). Cette progression donne à la terre un rôle de témoin et d'acteur.",
        axe3_sourate: "La terre est le personnage central des cinq premiers versets. Elle est le théâtre de l'événement (la secousse), la gardienne de ce qui est enfoui (les charges), et le témoin qui raconte (ses nouvelles). Les versets 6-8 passent des humains comme sujet, mais c'est la terre qui a tout déclenché.",
        axe4_coherence: "Le Coran mentionne la terre (al-ard) plus de 460 fois. Elle est présentée comme un lieu de séjour temporaire (2:36), un témoin (84:3-5 où la terre est aussi étendue et expulse), et un réceptacle. L'usage en 99:1 est cohérent avec 84:3 où la terre est aussi secouée et vide son contenu.",
        axe5_frequence: "La terre comme témoin signifie que le lieu des actes garde leur trace. Pour la mission de justice, rien ne se perd — le sol même enregistre ce qui s'y passe."
      },
      "Sens isolé/Rhume": {
        status: "nul",
        senses: ["rhume"],
        proof_ctx: "Un état de santé sans aucun rapport avec le contexte cosmique du verset."
      },
      "Sens isolé/Tremblement": {
        status: "nul",
        senses: ["tremblement"],
        proof_ctx: "Sens isolé redondant — le tremblement est déjà porté par la racine zlzl."
      }
    }
  };

  await upsertVWA(6139, 'zlzl', zlzlAxes, 1);
  await upsertVWA(6139, 'ard', ardAxes, 2);
  console.log('VERSET 99:1 — TERMINÉ');
  console.log('  zlzl (زلزل) → sens "Séisme/Ébranlement" → mot "secousse"');
  console.log('  ard (أرض) → sens "Terre/Sol" → mot "la terre"');

  // ---- VERSET 99:2 — وَأَخْرَجَتِ ٱلْأَرْضُ أَثْقَالَهَا ----

  // xrj (388) — Sortie/Émergence
  const xrjAxes = {
    sense_chosen: "fait sortir",
    concept_chosen: "Sortie/Émergence",
    concepts: {
      "Sortie/Émergence": {
        status: "retenu",
        senses: ["sortir", "faire sortir", "expulser", "émerger", "produire"],
        proof_ctx: "Le sens retenu est « Sortie/Émergence ». Le verbe akhrajat est une forme IV accompli féminin. La forme IV (af'ala) ajoute la causalité : « elle a FAIT sortir ». Le Lane's donne : sortir, faire sortir, expulser, émerger. La terre fait sortir activement ce qui était en elle — ce n'est pas une sortie spontanée mais un acte de la terre elle-même. La distinction avec « Tribut/Revenu » : le tribut est un paiement institutionnel entre humains, pas un acte tellurique.",
        axe1_verset: "Le verbe akhrajat a pour sujet al-ard (la terre) et pour objet athqālahā (ses charges). Le champ lexical est celui du mouvement de l'intérieur vers l'extérieur. La forme IV indique que la terre est l'agent actif qui CAUSE la sortie. Le possessif hā (ses) indique que ces charges appartiennent à la terre — elles étaient en elle.",
        axe2_voisins: "Le verset 1 a préparé cette action par la secousse. La secousse (v1) provoque l'expulsion (v2). Le verset 3 montre la réaction humaine face à ce spectacle. La sortie des charges est la conséquence mécanique de la secousse : quand la terre tremble, ce qui est en elle remonte.",
        axe3_sourate: "L'expulsion est le deuxième acte de la séquence : secousse → expulsion → récit → jugement. La terre ne se contente pas de trembler, elle produit ce qu'elle contenait. C'est le passage du caché au visible, thème central de la sourate.",
        axe4_coherence: "La forme IV de kh-r-j est utilisée fréquemment dans le Coran : « Nous avons fait sortir de la terre ses fruits » (7:57), « Il fait sortir le vivant du mort » (3:27). L'usage en 99:2 est cohérent — la terre produit ce qui était enfoui en elle.",
        axe5_frequence: "Faire sortir le caché est un acte de vérité. Pour la mission de justice, la terre elle-même participe à la révélation — elle ne retient rien, elle rend tout. L'humain ne peut pas enfouir ses actes indéfiniment."
      },
      "Tribut/Revenu": {
        status: "nul",
        senses: ["impôt", "revenu"],
        proof_ctx: "Le tribut est un paiement entre humains. Le verset décrit un phénomène tellurique, pas une transaction économique."
      },
      "Sens isolé/Résoudre": {
        status: "nul",
        senses: ["résoudre"],
        proof_ctx: "Sens isolé sans rapport avec le contexte physique du verset."
      }
    }
  };

  // thql (1476) — Poids/Gravité vs Charge/Responsabilité
  const thqlV2Axes = {
    sense_chosen: "charges",
    concept_chosen: "Poids/Gravité",
    concepts: {
      "Poids/Gravité": {
        status: "retenu",
        senses: ["lourd", "pesant", "grave"],
        proof_ctx: "Le sens retenu est « Poids/Gravité ». Le mot athqāl est le pluriel brisé de thiql (chose lourde, poids) avec le possessif hā (ses). Le Lane's donne : lourd, pesant, grave. Les athqāl de la terre sont les choses lourdes qu'elle contient — ce qui est enfoui et qui pèse. La forme plurielle + possessif indique une pluralité de choses lourdes appartenant à la terre. La distinction avec « Charge/Responsabilité » : la charge est un fardeau moral ou une obligation portée par un être conscient. La terre n'a pas de responsabilités morales — elle contient des choses physiquement lourdes.",
        axe1_verset: "Le mot athqālahā est l'objet direct de akhrajat (elle a fait sortir). Le champ lexical est physique : la terre fait sortir des choses lourdes. Le possessif « ses » charges montre que ces objets faisaient partie intégrante de la terre — enfouis en elle. Le pluriel indique une multiplicité d'éléments lourds.",
        axe2_voisins: "Le verset 1 a décrit la secousse. Le verset 2 montre ce que la secousse provoque : les choses lourdes de la terre sont éjectées. Le verset 3 montre la réaction humaine : incompréhension. La séquence est causale et physique — secousse → éjection des objets lourds → stupéfaction.",
        axe3_sourate: "Les charges de la terre représentent tout ce qui était caché. La sourate va révéler ensuite que les actes humains aussi seront mis à nu (v6-8). Les charges de la terre sont l'image physique de la révélation des actes.",
        axe4_coherence: "En 84:4, la terre « rejette ce qui est en elle et se vide ». Le parallèle avec 99:2 est direct — la terre expulse son contenu. Le mot athqāl est aussi utilisé en 29:13 pour les fardeaux (moraux) que les gens portent, mais ici le sujet est la terre, pas un être moral.",
        axe5_frequence: "Les choses lourdes enfouies finissent par remonter. Pour la mission de justice, cette image rappelle que les conséquences des actes ont un poids et ne disparaissent pas — elles remontent tôt ou tard."
      },
      "Charge/Responsabilité": {
        status: "probable",
        senses: ["fardeau"],
        proof_ctx: "La charge comme responsabilité morale est un sens attesté de la racine thql. Cependant, le sujet ici est la terre (al-ard), qui n'est pas un être moral porteur de responsabilités. La terre contient des choses physiquement lourdes, pas des obligations. La frontière philosophique : la responsabilité suppose une conscience qui porte un poids moral, le poids physique est une propriété de la matière. La terre fait sortir de la matière, pas des obligations.",
        axe1_verset: "Le mot athqālahā est l'objet de akhrajat (faire sortir). Faire sortir une responsabilité n'est pas une expression naturelle — on porte ou on acquitte une responsabilité, on ne la fait pas sortir physiquement. Le verbe « faire sortir » appelle un objet concret et physique.",
        axe2_voisins: "Les versets voisins décrivent des événements physiques : secousse (v1), expulsion (v2). La séquence est physique et mécanique. Une responsabilité morale dans cette séquence briserait la cohérence du registre.",
        axe3_sourate: "La sourate oppose le physique (v1-5 : terre) au moral (v6-8 : actes humains). Mettre une responsabilité morale dans la partie physique brouille cette structure.",
        axe4_coherence: "En 29:13, les fardeaux (athqāl) sont bien moraux mais portés par des humains. En 99:2, c'est la terre qui les contient — le contexte physique change la nature du mot.",
        axe5_frequence: "La responsabilité est portée par des êtres conscients, pas par la terre."
      }
    }
  };

  await upsertVWA(6140, 'xrj', xrjAxes, 1);
  await upsertVWA(6140, 'thql', thqlV2Axes, 2);
  console.log('VERSET 99:2 — TERMINÉ');
  console.log('  xrj (خرج) → sens "Sortie/Émergence" → mot "fait sortir"');
  console.log('  thql (ثقل) → sens "Poids/Gravité" → mot "charges"');

  // ---- VERSET 99:3 — وَقَالَ ٱلْإِنسَـٰنُ مَا لَهَا ----

  // qwl (307) — Parole/Énonciation
  const qwlAxes = {
    sense_chosen: "dit",
    concept_chosen: "Parole/Énonciation",
    concepts: {
      "Parole/Énonciation": {
        status: "retenu",
        senses: ["parole", "discours", "parler", "dire", "affirmer"],
        proof_ctx: "Le sens retenu est « Parole/Énonciation ». Le verbe qāla est un accompli 3ème personne masculin — « il a dit ». Le Lane's donne : parole, discours, parler, dire, affirmer. Dire est l'acte le plus simple de la parole : émettre des mots. La distinction avec « Pensée/Avis » : la pensée est intérieure et silencieuse, la parole est extérieure et audible. Le verbe qāla est suivi d'un discours direct (mā lahā), ce qui confirme qu'il s'agit de paroles prononcées, pas de pensées.",
        axe1_verset: "Le verbe qāla introduit le discours direct mā lahā (« qu'a-t-elle ? »). Le champ lexical est celui de l'expression orale. L'être humain réagit à ce qu'il voit (la terre qui tremble) en posant une question à voix haute. La question est courte et spontanée — un cri d'incompréhension.",
        axe2_voisins: "Après la secousse (v1) et l'expulsion (v2), la réaction humaine est la parole — il demande ce qui se passe. Le verset 4 répondra : la terre raconte. Il y a un dialogue entre l'humain qui demande et la terre qui répond. La parole est le pont entre les deux.",
        axe3_sourate: "La sourate alterne entre les actes de la terre (v1-2, v4-5) et la réaction humaine (v3). La parole humaine est le seul acte humain dans les cinq premiers versets — tout le reste est l'affaire de la terre et de Dieu.",
        axe4_coherence: "Le Coran utilise qāla al-insān à plusieurs reprises pour introduire des paroles de perplexité ou de déni. En 75:3 : « l'être humain pense-t-il que Nous ne rassemblerons pas ses os ? ». En 36:78 : « il dit : qui fera revivre les os ? ». Le schéma est récurrent : face à un événement eschatologique, l'humain réagit par une parole d'incrédulité.",
        axe5_frequence: "La question « qu'a-t-elle ? » montre que l'humain ne comprend pas ce qui arrive. Pour la mission de justice, la question est le premier pas — celui qui ne questionne pas ne cherche pas à comprendre."
      },
      "Pensée/Avis": {
        status: "nul",
        senses: ["avis", "doctrine", "opinion"],
        proof_ctx: "La pensée est un acte intérieur. Le verbe qāla est suivi d'un discours direct entre guillemets — ce sont des paroles prononcées, pas des pensées silencieuses."
      },
      "Sens isolé/Puissance": {
        status: "nul",
        senses: ["puissance"],
        proof_ctx: "Sens isolé sans rapport avec le contexte."
      },
      "Corps/Anatomie": {
        status: "nul",
        senses: ["troupeau"],
        proof_ctx: "Sens anatomique/animal sans rapport avec la scène eschatologique."
      }
    }
  };

  // ans (866) — Familiarité/Sociabilité
  const ansAxes = {
    sense_chosen: "l'être humain",
    concept_chosen: "Familiarité/Sociabilité",
    concepts: {
      "Familiarité/Sociabilité": {
        status: "retenu",
        senses: ["être familier", "être sociable", "être humain", "humains (ins)"],
        proof_ctx: "Le sens retenu est « Familiarité/Sociabilité ». Le mot al-insān est un nom défini avec l'article al, au nominatif (sujet de qāla). Le Lane's donne pour la racine ans : être familier, être sociable, être humain. L'insān est l'être qui est familier avec son environnement, qui vit en société. L'article al indique l'être humain en général — pas un individu particulier mais l'espèce humaine dans sa nature. La distinction avec « Perception » : percevoir est un acte ponctuel des sens, la familiarité est un état permanent de l'être social.",
        axe1_verset: "Le mot al-insān est sujet du verbe qāla (il dit). Le champ lexical est celui de la réaction humaine face à l'inconnu. L'être humain, habitué à son monde familier, est confronté à un événement qui dépasse sa compréhension. Sa question « qu'a-t-elle ? » révèle son incompréhension — ce qui est familier (la terre) devient soudain étranger.",
        axe2_voisins: "L'être humain apparaît au verset 3, entre les actes de la terre (v1-2) et sa réponse (v4-5). Il est spectateur, pas acteur. Les versets 6-8 le replacent comme sujet principal : il sort dispersé, ses actes sont montrés. Le verset 3 est le moment de transition entre le spectacle de la terre et le jugement de l'humain.",
        axe3_sourate: "La sourate oppose la terre (qui sait et raconte) à l'être humain (qui ne comprend pas). L'insān est celui qui doit apprendre que ses actes ont un poids. Sa familiarité avec le monde habituel l'empêche de voir que tout sera dévoilé.",
        axe4_coherence: "Le Coran utilise al-insān plus de 65 fois, souvent pour décrire une faiblesse ou une limite : ingratitude (100:6), empressement (17:11), désespoir (11:9). En 99:3, c'est l'ignorance face à l'événement cosmique. L'usage est cohérent avec le portrait coranique de l'humain comme être limité dans sa compréhension.",
        axe5_frequence: "L'être humain qui ne comprend pas la terre qui tremble est l'image de celui qui ne voit pas les conséquences de ses actes. Pour la mission de justice, comprendre que la terre témoigne est le premier pas vers la responsabilité."
      },
      "Perception": {
        status: "nul",
        senses: ["percevoir", "voir de loin"],
        proof_ctx: "La perception est un acte des sens. Le mot al-insān désigne l'être humain comme espèce, pas comme acte de perception. Le verset parle de l'humain qui dit, pas qui perçoit."
      }
    }
  };

  await upsertVWA(6141, 'qwl', qwlAxes, 1);
  await upsertVWA(6141, 'ans', ansAxes, 2);
  console.log('VERSET 99:3 — TERMINÉ');
  console.log('  qwl (قول) → sens "Parole/Énonciation" → mot "dit"');
  console.log('  ans (أنس) → sens "Familiarité/Sociabilité" → mot "l\'être humain"');

  // === TRANSLATIONS v1-v3 ===
  await updateVerse(6139, {
    translation_arab: "Quand la terre sera secouée de sa secousse,",
    full_translation: "Quand la terre tremblera d'un violent tremblement,",
    translation_explanation: `§DEMARCHE§

Le mot **zulzilat** est un verbe passif accompli au féminin (une forme qui dit que le sujet SUBIT l'action sans nommer qui la cause). En arabe, le passif accompli dans une phrase conditionnelle introduite par idhā prend un sens futur : « quand elle sera secouée ». Le passif indique que la terre ne se secoue pas elle-même — quelqu'un ou quelque chose la secoue, mais le texte ne précise pas qui.

Le mot **al-ard** (la terre) est le sujet du verbe passif. L'article al indique la terre entière comme entité connue.

Le mot **zilzālahā** (sa secousse) est un nom verbal de la même racine zlzl, avec le possessif hā (sa, à elle). En arabe, quand un verbe et son nom verbal partagent la même racine dans la même phrase, cela amplifie l'intensité — c'est comme dire « elle sera secouée de SA secousse », celle qui lui est propre, la secousse ultime.

§JUSTIFICATION§

**secousse** — Le sens retenu est « Séisme/Ébranlement ». Le mot « secousse » est choisi car il capture le mouvement violent et involontaire. L'alternative « tremblement » est écartée car elle est moins intense — un tremblement peut être léger, une secousse est toujours violente. L'alternative « séisme » est écartée car c'est un terme technique scientifique, pas du français courant.

**la terre** — Le sens retenu est « Terre/Sol ». Le mot « terre » est le terme naturel et courant pour al-ard.

§CRITIQUE§

Hamidullah traduit « tremblera d'un violent tremblement » — il perd le possessif « sa » (zilzālahā) et ajoute l'adjectif « violent » qui n'est pas dans le texte arabe. Le texte dit « sa secousse » (celle de la terre), pas « un tremblement violent ». La nuance est que le texte arabe attribue la secousse à la terre comme quelque chose qui lui appartient — sa propre secousse ultime — tandis que « un violent tremblement » est générique et perd ce lien de possession.`,
    segments: [
      {fr:"Quand", pos:"particle", phon:"idhā", arabic:"إِذَا", is_particle:true, position:1},
      {fr:"sera secouée", pos:"verbe", phon:"zulzilat", arabic:"زُلْزِلَتِ", word_key:"zlzl", is_particle:false, sense_retenu:"séisme", position:2},
      {fr:"la terre", pos:"nom", phon:"al-ard", arabic:"ٱلْأَرْضُ", word_key:"ard", is_particle:false, sense_retenu:"terre", position:3},
      {fr:"de sa secousse,", pos:"nom", phon:"zilzālahā", arabic:"زِلْزَالَهَا", word_key:"zlzl", is_particle:false, sense_retenu:"séisme", position:4}
    ]
  });

  await updateVerse(6140, {
    translation_arab: "et que la terre aura fait sortir ses charges,",
    full_translation: "et que la terre aura fait sortir ses fardeaux,",
    translation_explanation: `§DEMARCHE§

Le mot **akhrajat** est un verbe forme IV accompli féminin. La forme IV (af'ala) en arabe ajoute la causalité : ce n'est pas « elle est sortie » mais « elle a FAIT sortir ». Le wa initial lie ce verset au précédent par une conjonction : et que. L'accompli dans le contexte de idhā (v1) garde le sens futur.

Le mot **al-ard** (la terre) est le sujet actif — cette fois la terre n'est plus passive (secouée au v1), elle agit : elle fait sortir.

Le mot **athqālahā** (ses charges) est le pluriel brisé de thiql (chose lourde), avec le possessif hā (ses). Le pluriel brisé en arabe est souvent plus expressif que le pluriel régulier — il évoque une diversité de choses lourdes, pas des objets identiques.

§JUSTIFICATION§

**fait sortir** — Le sens retenu est « Sortie/Émergence ». Le mot « fait sortir » est choisi car la forme IV impose la causalité. L'alternative « expulsé » est écartée car elle ajoute une connotation de violence forcée qui n'est pas dans la forme IV — « faire sortir » est neutre et précis.

**charges** — Le sens retenu est « Poids/Gravité ». Le mot « charges » est choisi car il désigne des choses lourdes contenues dans un espace. L'alternative « fardeaux » est écartée car le fardeau implique une responsabilité portée par un être conscient, or le sujet est la terre, pas un être moral.

§CRITIQUE§

Hamidullah traduit « expulsé ses fardeaux ». Le verbe « expulser » ajoute une violence que la forme IV ne porte pas nécessairement — « faire sortir » est plus fidèle. Le mot « fardeaux » ajoute une dimension morale (le fardeau qu'on porte) que le contexte physique ne justifie pas — la terre fait sortir des choses lourdes, pas des obligations morales.`,
    segments: [
      {fr:"et que", pos:"particle", phon:"wa", arabic:"وَ", is_particle:true, position:0},
      {fr:"aura fait sortir", pos:"verbe", phon:"akhrajat", arabic:"أَخْرَجَتِ", word_key:"xrj", is_particle:false, sense_retenu:"faire sortir", position:1},
      {fr:"la terre", pos:"nom", phon:"al-ard", arabic:"ٱلْأَرْضُ", word_key:"ard", is_particle:false, sense_retenu:"terre", position:2},
      {fr:"ses charges,", pos:"nom", phon:"athqālahā", arabic:"أَثْقَالَهَا", word_key:"thql", is_particle:false, sense_retenu:"lourd", position:3}
    ]
  });

  await updateVerse(6141, {
    translation_arab: "et que l'être humain aura dit : « Qu'a-t-elle ? »",
    full_translation: "et que l'homme aura dit : « Qu'a-t-elle ? »",
    translation_explanation: `§DEMARCHE§

Le mot **qāla** est un verbe accompli 3ème personne masculin — « il a dit ». Le wa initial continue la construction conditionnelle de idhā (v1). Le verbe introduit un discours direct.

Le mot **al-insān** (l'être humain) est le sujet de qāla. L'article al indique l'être humain en général — toute l'espèce humaine, pas un individu.

La question **mā lahā** (qu'a-t-elle ?) est composée de mā (quoi, interrogatif) et lahā (à elle, pour elle). C'est une question courte et directe qui exprime l'incompréhension totale. Le pronom hā (elle) renvoie à la terre : l'humain voit la terre se secouer et ne comprend pas ce qui lui arrive.

§JUSTIFICATION§

**dit** — Le sens retenu est « Parole/Énonciation ». Le mot « dit » est le verbe le plus naturel pour qāla — simple, courant, direct.

**l'être humain** — Le sens retenu est « Familiarité/Sociabilité ». Le mot « être humain » est choisi car al-insān désigne l'espèce humaine dans son ensemble. L'alternative « l'homme » est écartée car elle exclut les femmes dans le français courant et ne rend pas le sens générique de al-insān.

§CRITIQUE§

Hamidullah traduit « l'homme » pour al-insān. Ce choix genré ne rend pas le sens générique du mot arabe qui désigne l'espèce humaine entière. Les traductions courantes donnent sensiblement le même sens pour le reste du verset.`,
    segments: [
      {fr:"et que", pos:"particle", phon:"wa", arabic:"وَ", is_particle:true, position:0},
      {fr:"aura dit", pos:"verbe", phon:"qāla", arabic:"قَالَ", word_key:"qwl", is_particle:false, sense_retenu:"dire", position:1},
      {fr:"l'être humain", pos:"nom", phon:"al-insān", arabic:"ٱلْإِنسَـٰنُ", word_key:"ans", is_particle:false, sense_retenu:"être humain", position:2},
      {fr:"qu'a-t-elle ?", pos:"particle", phon:"mā lahā", arabic:"مَا لَهَا", is_particle:true, position:3}
    ]
  });

  console.log('Traductions v1-v3 insérées ✓');
}

// ============================================================
// VERSETS 99:4-5
// ============================================================
async function verses99_4_to_5() {
  console.log('\n====== VERSETS 99:4-5 ======\n');

  // ---- VERSET 99:4 — يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا ----

  // hdth (1649) — Narration/Récit vs Nouveauté
  const hdthAxes = {
    sense_chosen: "racontera",
    concept_chosen: "Narration/Récit",
    concepts: {
      "Narration/Récit": {
        status: "retenu",
        senses: ["parler", "raconter"],
        proof_ctx: "Le sens retenu est « Narration/Récit ». Le verbe tuḥaddithu est une forme II inaccompli féminin. La forme II (fa''ala) intensifie l'action : non pas simplement « parler » mais « raconter en détail, narrer ». Le Lane's donne pour la forme II : parler, raconter. L'inaccompli indique une action en cours ou à venir : « elle racontera ». Le sujet implicite est la terre (féminin). L'objet est akhbārahā (ses nouvelles). La narration est un acte extérieur et directionnel — le narrateur émet des informations vers un auditeur. La distinction avec « Nouveauté » : la nouveauté est un état de ce qui est récent, la narration est l'acte de raconter. Le verbe est transitif avec un objet direct (ses nouvelles), ce qui appelle un acte de communication, pas un état de nouveauté.",
        axe1_verset: "Le verbe tuḥaddithu a pour objet direct akhbārahā (ses nouvelles). Le champ lexical est celui de la communication : raconter + nouvelles. La terre est transformée en narratrice — elle qui était objet passif (secouée au v1) devient sujet actif qui transmet des informations. L'inaccompli donne un sens de durée : elle racontera en détail, pas en un mot.",
        axe2_voisins: "Le verset 3 posait la question de l'humain : « qu'a-t-elle ? ». Le verset 4 commence à répondre : la terre raconte. Le verset 5 explique pourquoi elle raconte : parce que Dieu le lui a inspiré. La séquence question (v3) → réponse (v4) → cause (v5) est complète.",
        axe3_sourate: "La terre narratrice est un thème puissant de cette sourate. Elle ne se contente pas de trembler et d'expulser (v1-2) — elle témoigne activement en racontant ce qui s'est passé sur elle. La narration est le pivot : la terre passe d'objet géologique à témoin parlant.",
        axe4_coherence: "Le Coran ne dit nulle part ailleurs que la terre « raconte ». C'est un usage unique qui donne à la terre un statut de témoin intelligent. En 41:20-21, ce sont les membres du corps qui témoignent. L'idée que les créations témoignent est coranique, mais la terre narratrice est propre à 99:4.",
        axe5_frequence: "La terre qui raconte signifie que le lieu des actes garde leur mémoire et la restitue. Pour la mission de justice, chaque espace est un témoin — on ne peut pas agir en secret car le lieu même enregistre et rapportera."
      },
      "Nouveauté": {
        status: "peu_probable",
        senses: ["événement nouveau", "nouveau"],
        proof_ctx: "La nouveauté est un état de ce qui n'existait pas avant — un jugement sur la temporalité d'une chose. Le verbe tuḥaddithu (forme II) est transitif avec un objet direct (ses nouvelles), ce qui appelle un acte de communication, pas un état de nouveauté. On ne « nouvellise » pas des informations — on les raconte. La forme II avec un objet direct humain ou informationnel signifie systématiquement « raconter à » dans le Lane's.",
        axe1_verset: "Le mot akhbārahā (ses nouvelles) est l'objet direct du verbe. « Nouvelliser ses nouvelles » serait redondant et absurde. « Raconter ses nouvelles » est l'expression naturelle. Le test de naturalité élimine la nouveauté.",
        axe2_voisins: "Le verset 3 pose une question (mā lahā). Le verset 4 y répond. Une réponse à une question est un acte de communication (narration), pas un état de nouveauté.",
        axe3_sourate: "La sourate construit une scène de témoignage. La terre est un témoin qui parle. La nouveauté ne s'inscrit pas dans ce rôle narratif.",
        axe4_coherence: "La forme II de h-d-th avec objet direct est utilisée dans le Coran au sens de « raconter » en 2:76 : ḥaddathahum (il leur a raconté). L'usage est cohérent.",
        axe5_frequence: "Le témoignage par la narration est plus pertinent pour la justice que la simple nouveauté d'un événement."
      }
    }
  };

  // khbr (1564) — Information/Connaissance
  const khbrAxes = {
    sense_chosen: "nouvelles",
    concept_chosen: "Information/Connaissance",
    concepts: {
      "Information/Connaissance": {
        status: "retenu",
        senses: ["informer", "connaître en profondeur"],
        proof_ctx: "Le sens retenu est « Information/Connaissance ». Le mot akhbār est le pluriel de khabar (nouvelle, information), avec le possessif hā (ses). Le Lane's donne : informer, connaître en profondeur. Les akhbār de la terre sont les informations qu'elle détient — ce qui s'est passé sur elle et qu'elle va raconter. Le pluriel indique une multiplicité d'informations. Le possessif « ses » montre que ces informations appartiennent à la terre — elle les a accumulées.",
        axe1_verset: "Le mot akhbārahā est l'objet direct de tuḥaddithu (elle raconte). Le champ lexical est celui du témoignage : raconter + nouvelles. Les nouvelles de la terre sont ce qu'elle a enregistré — les actes qui se sont produits sur elle.",
        axe2_voisins: "Le verset 5 précise la cause : parce que Dieu lui a inspiré. Les nouvelles de la terre ne sont pas spontanées — elles sont commandées par une inspiration divine. Le verset 6 montre la conséquence : les gens sortent pour voir leurs actes. Les nouvelles sont donc les actes humains.",
        axe3_sourate: "Les nouvelles de la terre sont le lien entre la partie tellurique (v1-5) et la partie humaine (v6-8). Ce que la terre raconte, ce sont les actes des humains — et ces actes seront pesés aux versets 7-8.",
        axe4_coherence: "La racine kh-b-r est utilisée en 99:4 pour les nouvelles de la terre et en 100:11 pour la connaissance de Dieu (khabīr). Le lien est significatif : la terre informe et Dieu connaît en profondeur.",
        axe5_frequence: "L'information est la base de la justice. Sans information sur les actes, pas de jugement possible. La terre en tant que source d'information fonde la possibilité même du jugement."
      }
    }
  };

  await upsertVWA(6142, 'hdth', hdthAxes, 1);
  await upsertVWA(6142, 'khbr', khbrAxes, 2);
  console.log('VERSET 99:4 — TERMINÉ');
  console.log('  hdth (حدث) → sens "Narration/Récit" → mot "racontera"');
  console.log('  khbr (خبر) → sens "Information/Connaissance" → mot "nouvelles"');

  // ---- VERSET 99:5 — بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا ----

  // rbb (253) — Seigneurie
  const rbbAxes = {
    sense_chosen: "ton Seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["celui qui possède", "seigneur", "maître", "gouverner", "propriétaire", "celui qui élève", "celui qui entretient"],
        proof_ctx: "Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot rabbaka est en idafa avec le pronom ka (ton) : « ton Seigneur ». Le Lane's donne : seigneur, maître, celui qui possède, celui qui élève et entretient. Le rabb est celui qui a l'autorité ET qui prend soin. Le pronom « ton » (2ème personne) interpelle directement l'auditeur. Avec les 9 concepts de la racine rbb, seul « Seigneurie/Autorité bienveillante » est compatible avec un sujet qui inspire/révèle à la terre.",
        axe1_verset: "Le mot rabbaka est le sujet de awhā (il a inspiré). Le champ lexical est celui de l'autorité qui commande : le Seigneur inspire à la terre de raconter. Le possessif « ton » crée un lien personnel entre l'auditeur et Dieu.",
        axe2_voisins: "Le verset 4 dit que la terre raconte. Le verset 5 explique pourquoi : parce que ton Seigneur le lui a inspiré. Le Seigneur est la cause première derrière le témoignage de la terre. Sans son inspiration, la terre ne parlerait pas.",
        axe3_sourate: "Le Seigneur n'apparaît qu'une fois dans la sourate (v5), mais il est la cause de tout : c'est lui qui ordonne la secousse, l'expulsion, le récit de la terre. Il est l'auteur invisible derrière chaque événement.",
        axe4_coherence: "L'usage de rabb avec pronom possessif 2MS (rabbaka = ton Seigneur) est fréquent dans le Coran pour établir un lien direct entre Dieu et le destinataire du message.",
        axe5_frequence: "Le Seigneur qui inspire à la terre de témoigner est le garant de la justice. La terre ne témoigne pas de sa propre initiative mais sur ordre divin — le système de justice est organisé d'en haut."
      },
      "Croissance/Augmentation": {
        status: "nul",
        senses: ["développer", "augmenter", "croître"],
        proof_ctx: "La croissance est un processus biologique. Le verset parle d'inspiration divine, pas de développement."
      },
      "Éducation/Accompagnement": {
        status: "nul",
        senses: ["élever un enfant", "former"],
        proof_ctx: "L'éducation est un processus entre un éducateur et un éduqué. Le verset décrit une inspiration ponctuelle, pas un processus éducatif."
      }
    }
  };

  // why (1579) — Révélation/Inspiration vs Suggestion
  const whyAxes = {
    sense_chosen: "inspiré",
    concept_chosen: "Révélation/Inspiration",
    concepts: {
      "Révélation/Inspiration": {
        status: "retenu",
        senses: ["révéler", "inspirer", "révélation"],
        proof_ctx: "Le sens retenu est « Révélation/Inspiration ». Le verbe awhā est une forme IV accompli — « il a inspiré/révélé ». La forme IV (af'ala) ajoute la causalité : faire parvenir une communication. Le Lane's donne : révéler, inspirer. L'inspiration est un acte de communication directe, non verbale, de Dieu vers la créature. La distinction avec « Suggestion » : la suggestion est une proposition légère et optionnelle, l'inspiration divine est un ordre ou une communication qui s'impose. Le sujet est Dieu (rabb) et le destinataire est la terre (lahā) — ce n'est pas une suggestion mais un commandement divin.",
        axe1_verset: "Le verbe awhā a pour sujet rabbaka (ton Seigneur) et pour complément lahā (à elle, la terre). Le champ lexical est celui de la communication divine : Dieu → terre. La préposition la (à) indique la direction : l'inspiration va de Dieu vers la terre. L'accompli indique un acte achevé : l'inspiration a déjà eu lieu quand la terre raconte.",
        axe2_voisins: "Le verset 4 montre la terre qui raconte ses nouvelles. Le verset 5 en donne la raison : parce que Dieu le lui a inspiré. La chaîne causale est : Dieu inspire → la terre raconte. L'inspiration est la cause, la narration est l'effet.",
        axe3_sourate: "L'inspiration divine est le moteur caché de toute la sourate. La secousse, l'expulsion, la narration — tout est ordonné par Dieu. Le verset 5 est la clé explicative qui révèle l'agent derrière les événements.",
        axe4_coherence: "Le Coran utilise la racine w-h-y pour l'inspiration divine à diverses créatures : aux abeilles (16:68), à la mère de Moïse (28:7), à la terre (99:5). L'inspiration n'est pas réservée aux prophètes — elle s'étend aux créations. L'usage en 99:5 est cohérent avec ce schéma.",
        axe5_frequence: "L'inspiration divine à la terre signifie que la justice n'est pas une affaire humaine seulement — la création entière y participe sur ordre divin. Le système de justice est cosmique, pas seulement social."
      },
      "Suggestion": {
        status: "peu_probable",
        senses: ["suggérer"],
        proof_ctx: "La suggestion est une proposition légère, sans autorité. Le sujet de awhā est rabb (Seigneur), un titre d'autorité absolue. Une suggestion n'est pas compatible avec l'autorité du Seigneur qui s'adresse à la terre. De plus, la terre obéit immédiatement (v4 : elle raconte) — ce n'est pas une suggestion optionnelle mais un ordre qui s'exécute.",
        axe1_verset: "Le verbe a pour sujet le Seigneur et pour résultat la narration de la terre (v4). La terre exécute immédiatement — pas le comportement d'un être qui reçoit une simple suggestion.",
        axe2_voisins: "Le verset 4 montre une action accomplie par la terre. Le lien causal bi-anna (parce que) au v5 est déterministe : la narration arrive PARCE QUE Dieu a inspiré. C'est une cause-effet, pas une suggestion-option.",
        axe3_sourate: "La sourate décrit des événements inéluctables : secousse, expulsion, narration, jugement. Tout est déterminé, rien n'est optionnel. La suggestion est incompatible avec ce déterminisme.",
        axe4_coherence: "Quand le Coran utilise wahy avec Dieu comme sujet, c'est toujours un acte d'autorité qui s'exécute immédiatement.",
        axe5_frequence: "Une suggestion laisserait la possibilité que la terre ne raconte pas. La justice exige la certitude du témoignage."
      }
    }
  };

  await upsertVWA(6143, 'rbb', rbbAxes, 1);
  await upsertVWA(6143, 'why', whyAxes, 2);
  console.log('VERSET 99:5 — TERMINÉ');
  console.log('  rbb (ربب) → sens "Seigneurie/Autorité bienveillante" → mot "ton Seigneur"');
  console.log('  why (وحي) → sens "Révélation/Inspiration" → mot "inspiré"');

  // === TRANSLATIONS v4-v5 ===
  await updateVerse(6142, {
    translation_arab: "Ce jour-là, elle racontera ses nouvelles,",
    full_translation: "Ce jour-là, elle racontera son histoire,",
    translation_explanation: `§DEMARCHE§

Le mot **yawma'idhin** (ce jour-là) est un adverbe de temps qui renvoie au jour de la secousse décrit aux versets 1-3. Il marque une rupture temporelle : on passe de la description des événements (v1-3) à ce qui se passera ensuite.

Le verbe **tuḥaddithu** est une forme II inaccompli féminin. La forme II (fa''ala) en arabe intensifie l'action : ce n'est pas simplement « elle parle » mais « elle raconte en détail, elle narre ». L'inaccompli indique que l'action est en cours ou à venir : « elle racontera ». Le sujet implicite est la terre (féminin, renvoyant à al-ard des versets précédents).

Le mot **akhbārahā** (ses nouvelles) est le pluriel brisé de khabar (nouvelle, information) avec le possessif hā (ses). Le pluriel indique que la terre a de nombreuses informations à communiquer. Le possessif montre que ces informations lui appartiennent — elle les a accumulées en étant le théâtre des actes humains.

§JUSTIFICATION§

**racontera** — Le sens retenu est « Narration/Récit ». Le mot « racontera » est choisi car la forme II avec un objet direct informationnel (ses nouvelles) signifie « narrer, raconter en détail ». L'alternative « parlera » est écartée car elle est trop vague — parler ne dit pas quoi, raconter implique un contenu structuré.

**nouvelles** — Le sens retenu est « Information/Connaissance ». Le mot « nouvelles » est choisi car akhbār désigne des informations sur des événements. L'alternative « informations » est écartée car elle est trop technique et neutre — « nouvelles » implique des événements qui concernent quelqu'un.

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens. Hamidullah traduit « racontera ses nouvelles ». Pas de différence significative sur ce verset.`,
    segments: [
      {fr:"Ce jour-là,", pos:"particle", phon:"yawma'idhin", arabic:"يَوْمَئِذٍ", is_particle:true, position:1},
      {fr:"elle racontera", pos:"verbe", phon:"tuḥaddithu", arabic:"تُحَدِّثُ", word_key:"hdth", is_particle:false, sense_retenu:"raconter", position:2},
      {fr:"ses nouvelles,", pos:"nom", phon:"akhbārahā", arabic:"أَخْبَارَهَا", word_key:"khbr", is_particle:false, sense_retenu:"informer", position:3}
    ]
  });

  await updateVerse(6143, {
    translation_arab: "parce que ton Seigneur le lui aura inspiré.",
    full_translation: "selon ce que ton Seigneur lui aura révélé.",
    translation_explanation: `§DEMARCHE§

La construction **bi-anna** est composée de bi (préposition causale : parce que) et anna (conjonction : que). Ensemble, bi-anna signifie « parce que » ou « du fait que ». Cette construction donne la raison pour laquelle la terre raconte (v4).

Le mot **rabbaka** est un nom en idafa (rattachement) avec le pronom ka (ton, 2ème personne masculin singulier). Rabb signifie celui qui possède, élève et entretient. Le pronom « ton » interpelle directement l'auditeur.

Le verbe **awhā** est une forme IV accompli — « il a inspiré ». La forme IV (af'ala) ajoute la dimension causative : faire parvenir un message. L'accompli indique que l'inspiration est un acte achevé : Dieu a déjà donné l'ordre avant que la terre ne raconte.

Le complément **lahā** (à elle) indique le destinataire de l'inspiration : la terre.

§JUSTIFICATION§

**ton Seigneur** — Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot « Seigneur » est le terme qui capture l'autorité et le soin. L'alternative « maître » est écartée car elle évoque la domination sans la bienveillance.

**inspiré** — Le sens retenu est « Révélation/Inspiration ». Le mot « inspiré » est choisi car wahy est une communication directe et non verbale de Dieu vers sa création. L'alternative « révélé » est écartée car la révélation en français courant évoque un livre ou un texte, alors que l'inspiration est plus générale et peut s'adresser à un être non humain comme la terre.

§CRITIQUE§

Hamidullah traduit « selon ce que ton Seigneur lui aura révélé ». Le problème est la traduction de bi-anna par « selon ce que ». En arabe, bi-anna est causal (parce que), pas comparatif (selon). La traduction « selon ce que » laisse entendre que la terre raconte en proportion de la révélation, alors que le texte dit simplement la RAISON : elle raconte PARCE QUE Dieu le lui a ordonné. La nuance est importante : le texte arabe pose une cause-effet, pas une proportionnalité.`,
    segments: [
      {fr:"parce que", pos:"particle", phon:"bi-anna", arabic:"بِأَنَّ", is_particle:true, position:1},
      {fr:"ton Seigneur", pos:"nom", phon:"rabbaka", arabic:"رَبَّكَ", word_key:"rbb", is_particle:false, sense_retenu:"seigneur", position:2},
      {fr:"le lui aura inspiré.", pos:"verbe", phon:"awhā lahā", arabic:"أَوْحَىٰ لَهَا", word_key:"why", is_particle:false, sense_retenu:"inspirer", position:3}
    ]
  });

  console.log('Traductions v4-v5 insérées ✓');
}

// ============================================================
// VERSETS 99:6-8
// ============================================================
async function verses99_6_to_8() {
  console.log('\n====== VERSETS 99:6-8 ======\n');

  // Get IDs for new roots
  const {data:šttWA} = await sb.from('word_analyses').select('id').eq('word_key','štt').maybeSingle();
  const {data:ḏrrWA} = await sb.from('word_analyses').select('id').eq('word_key','ḏrr').maybeSingle();
  const šttId = šttWA.id, ḏrrId = ḏrrWA.id;

  // ---- VERSET 99:6 — يَوْمَئِذٍ يَصْدُرُ ٱلنَّاسُ أَشْتَاتًا لِّيُرَوْا۟ أَعْمَـٰلَهُمْ ----

  // sdr (1245) — Émission/Sortie
  const sdrAxes = {
    sense_chosen: "sortiront",
    concept_chosen: "Émission/Sortie",
    concepts: {
      "Émission/Sortie": {
        status: "retenu",
        senses: ["émettre", "sortir"],
        proof_ctx: "Le sens retenu est « Émission/Sortie ». Le verbe yaṣduru est une forme I inaccompli 3ème personne masculin — « ils sortent / ils émanent ». Le Lane's donne : émettre, sortir. Ṣadara signifie à l'origine « revenir d'un point d'eau » — l'image est celle d'un flux qui sort d'une source. Les gens « émanent » comme l'eau sort d'une source, chacun vers sa direction. La distinction avec « Poitrine/Intériorité » : la poitrine est un lieu intérieur du corps, un nom. Le verbe yaṣduru est un acte de sortie, pas un nom de lieu. La distinction avec « Eau/Liquide » : l'eau est le médium, la sortie est le mouvement. Le verbe porte le mouvement.",
        axe1_verset: "Le verbe yaṣduru a pour sujet an-nās (les gens) et pour complément d'état ashtātan (dispersés). Le champ lexical est celui du mouvement de sortie : les gens sortent, dispersés. L'inaccompli donne un sens de tableau en cours : on voit les gens sortir, en direct.",
        axe2_voisins: "Le verset 5 a montré Dieu qui inspire la terre. Le verset 6 passe aux humains : ils sortent. Le verset 7 précise pourquoi : pour voir leurs actes. La sortie est le moment de transition entre le récit de la terre (v4-5) et le jugement des actes (v7-8).",
        axe3_sourate: "Les gens qui sortent dispersés s'opposent à la terre qui parle d'une seule voix. La dispersion est l'état de l'humanité face au jugement — chacun est seul avec ses actes. C'est le passage du collectif (les gens) à l'individuel (celui qui fait le poids d'une particule).",
        axe4_coherence: "Le Coran utilise la racine s-d-r au sens de sortir/émaner à plusieurs reprises. L'image de l'eau qui sort d'une source est cohérente avec les gens qui sortent de la terre après la résurrection.",
        axe5_frequence: "Sortir dispersés signifie que chacun porte seul ses actes. La justice est individuelle — pas de solidarité pour porter les actes d'un autre."
      },
      "Poitrine/Intériorité": {
        status: "nul",
        senses: ["cœur (intérieur)", "poitrine"],
        proof_ctx: "La poitrine est un nom de lieu anatomique. Le mot yaṣduru est un verbe d'action (sortir), pas un nom de lieu. La conjugaison verbale élimine le sens nominal."
      },
      "Eau/Liquide": {
        status: "nul",
        senses: ["source (début)"],
        proof_ctx: "L'eau est le médium originel de la racine mais le verbe a évolué vers le sens de « sortir d'un point d'eau, s'éloigner d'une source ». Le sujet est les gens, pas de l'eau."
      }
    }
  };

  // eml (393) — Action/Oeuvre
  const emlAxes = {
    sense_chosen: "actes",
    concept_chosen: "Action/Oeuvre",
    concepts: {
      "Action/Oeuvre": {
        status: "retenu",
        senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
        proof_ctx: "Le sens retenu est « Action/Oeuvre ». Le mot a'mālahum est le pluriel de 'amal (acte, action), avec le possessif hum (leurs). Le Lane's donne : travailler, agir, œuvre, acte. Les a'māl sont les actions concrètes accomplies par les gens — ce qu'ils ont fait dans leur vie. Le pluriel indique la totalité des actes. Le possessif « leurs » rattache les actes à leurs auteurs.",
        axe1_verset: "Le mot a'mālahum est l'objet de la construction li-yuraw (pour qu'on leur montre). Le champ lexical est celui du jugement : sortir → être montré → actes. Les actes sont le contenu du jugement — c'est ce qui sera pesé aux versets 7-8.",
        axe2_voisins: "Les versets 7-8 détaillent les actes : le poids d'une particule de bien, le poids d'une particule de mal. Le verset 6 introduit la catégorie générale (les actes), les versets 7-8 la précisent (chaque acte, même infime).",
        axe3_sourate: "Les actes sont le sujet final de la sourate. Tout — la secousse, l'expulsion, le récit de la terre, la sortie des gens — converge vers un seul point : montrer les actes de chacun.",
        axe4_coherence: "Le Coran utilise a'māl (actes) plus de 60 fois, toujours au sens de ce que les gens font concrètement. L'usage en 99:6 est cohérent.",
        axe5_frequence: "Les actes comme mesure de l'individu fondent la justice sur le faire, pas sur l'être. Ce n'est pas qui on est mais ce qu'on fait qui compte."
      },
      "Sens isolé/Gouverneur": {
        status: "nul",
        senses: ["gouverneur"],
        proof_ctx: "Le gouverneur est un titre. Le mot a'māl est un pluriel de 'amal (acte), pas de 'āmil (gouverneur)."
      }
    }
  };

  // ray (552) — Vision/Perception
  const rayAxes = {
    sense_chosen: "montrés",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        status: "retenu",
        senses: ["percevoir", "voir"],
        proof_ctx: "Le sens retenu est « Vision/Perception ». Le verbe yuraw est une forme IV passive inaccompli 3ème personne masculin pluriel — « pour qu'ils soient montrés / pour qu'on leur fasse voir ». La forme IV (af'ala) de r-'-y signifie « faire voir, montrer ». Le passif inverse : « être fait voir, être montré ». Le Lane's donne : percevoir, voir. Le li initial est la particule de but : « afin que ». Les gens sortent AFIN QU'on leur montre leurs actes. La distinction avec « Jugement/Avis » : l'avis est une opinion intérieure et subjective, la vision est un acte de perception directe. Le passif « être montré » appelle la perception, pas l'opinion.",
        axe1_verset: "Le verbe li-yuraw a pour sujet passif an-nās et pour objet a'mālahum. La construction est : les gens sont montrés leurs actes — ils voient ce qu'ils ont fait. Le champ lexical est celui de la révélation visuelle : on rend visible ce qui était invisible.",
        axe2_voisins: "Le verset 6 dit que les gens sont montrés leurs actes. Les versets 7-8 précisent : celui qui fait le poids d'une particule de bien LE VERRA (yarahu). Le verbe yarā (il verra) au v7-8 fait écho à yuraw (ils sont montrés) au v6. C'est le même acte de vision sous deux formes : passive (on leur montre) puis active (il verra).",
        axe3_sourate: "La vision est le thème final : tout converge vers le moment où chacun VOIT ses actes. La secousse rend visible, l'expulsion sort le caché, la narration raconte, et finalement les actes sont montrés.",
        axe4_coherence: "Le Coran utilise la forme IV passive de r-'-y en d'autres endroits pour « être montré quelque chose ». L'usage en 99:6 est cohérent.",
        axe5_frequence: "Être montré ses actes est le fondement de la justice : le jugement commence par la prise de conscience. On ne peut pas corriger ce qu'on ne voit pas."
      },
      "Jugement/Avis": {
        status: "peu_probable",
        senses: ["opinion", "avis"],
        proof_ctx: "L'avis est une opinion intérieure et subjective — un jugement personnel. Le verbe yuraw est au passif (ils sont FAITS voir), ce qui implique un acte extérieur exercé sur eux. On ne « fait pas opiner » quelqu'un — on lui « fait voir ». Le passif de la forme IV de r-'-y signifie systématiquement « être montré quelque chose », pas « recevoir une opinion ».",
        axe1_verset: "L'objet de yuraw est a'mālahum (leurs actes). « Être opiné leurs actes » n'est pas une expression naturelle. « Être montré leurs actes » est naturel et clair. Le test de naturalité élimine l'avis.",
        axe2_voisins: "Les versets 7-8 utilisent yarahu (il le verra) — le même verbe à l'actif, sans ambiguïté au sens de « voir ». Le lien entre v6 (passif) et v7-8 (actif) confirme le sens de vision.",
        axe3_sourate: "La sourate parle de montrer et de voir, pas de former des opinions.",
        axe4_coherence: "La forme IV passive de r-'-y dans le Coran signifie toujours « être montré ».",
        axe5_frequence: "La justice requiert des faits montrés, pas des opinions."
      },
      "Apparition": {
        status: "nul",
        senses: ["apparaître"],
        proof_ctx: "L'apparition est intransitive (le sujet apparaît). Le verbe yuraw est transitif au passif avec un objet (leurs actes). Le sujet ne apparaît pas — on lui montre quelque chose."
      }
    }
  };

  await upsertVWA(6144, 'sdr', sdrAxes, 1);
  await upsertVWA(6144, 'eml', emlAxes, 2);
  await upsertVWA(6144, 'ray', rayAxes, 3);
  console.log('VERSET 99:6 — TERMINÉ');
  console.log('  sdr (صدر) → sens "Émission/Sortie" → mot "sortiront"');
  console.log('  eml (عمل) → sens "Action/Oeuvre" → mot "actes"');
  console.log('  ray (رأي) → sens "Vision/Perception" → mot "montrés"');

  // ---- VERSET 99:7 — فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُۥ ----

  // thql (1476) — Poids/Gravité in v7
  const thqlV7Axes = {
    sense_chosen: "poids",
    concept_chosen: "Poids/Gravité",
    concepts: {
      "Poids/Gravité": {
        status: "retenu",
        senses: ["lourd", "pesant", "grave"],
        proof_ctx: "Le sens retenu est « Poids/Gravité ». Le mot mithqāl est un nom instrumental de la racine thql — c'est l'instrument qui sert à peser, donc le poids. Le Lane's note mithqāl au sens de « la quantité qui est égale en poids ». En 99:7, mithqāla dharratin signifie « le poids d'une particule » — la plus petite quantité mesurable. Le mithqāl est ici une mesure, pas un objet lourd. La distinction avec « Charge/Responsabilité » : la charge est un fardeau moral, le mithqāl est un instrument de mesure physique.",
        axe1_verset: "Le mot mithqāla est en idafa avec dharratin (d'une particule) : « le poids d'une particule ». Le champ lexical est celui de la mesure et de la précision. Chaque acte, même infime, a un poids mesurable. Le verset dit que même le poids d'une particule de bien sera vu.",
        axe2_voisins: "Le verset 6 a dit que les actes seront montrés. Le verset 7 précise : même le poids le plus infime sera vu. Le verset 8 complète par le mal. La progression va du général (les actes) au plus fin (le poids d'une particule).",
        axe3_sourate: "Le poids est la mesure de la justice dans cette sourate. La terre qui tremble (v1) et les actes qui sont pesés (v7-8) partagent un lien : ce qui tremble a du poids, ce qui est pesé a du poids. Le poids est le fil conducteur de la physique à la morale.",
        axe4_coherence: "Le mot mithqāl apparaît en 4:40, 21:47, 31:16 et 34:22, toujours au sens de « poids de » suivi d'une mesure. L'usage en 99:7 est parfaitement cohérent.",
        axe5_frequence: "Le poids comme mesure des actes fonde la justice sur la précision absolue — rien n'est trop petit pour être compté."
      },
      "Charge/Responsabilité": {
        status: "nul",
        senses: ["fardeau"],
        proof_ctx: "Le mithqāl est un instrument de mesure (balance), pas un fardeau porté. Le contexte est celui de la pesée, pas du portage."
      }
    }
  };

  // ḏrr (NEW) — Particule/Infime
  const ḏrrAxes = {
    sense_chosen: "particule",
    concept_chosen: "Particule/Infime",
    concepts: {
      "Particule/Infime": {
        status: "retenu",
        senses: ["plus petites fourmis", "poussière dans un rayon de soleil", "particule minuscule", "particules d'or"],
        proof_ctx: "Le sens retenu est « Particule/Infime ». Le mot dharratin est un nom féminin indéfini au génitif (complément de mithqāl). Le Lane's donne : « les jeunes fourmis (larves), les plus petites des fourmis, les poussières qu'on voit dans un rayon de soleil qui entre par une ouverture, les particules d'or ». La dharra est l'unité minimale du visible — ce qui est à la limite entre l'existence perceptible et le néant. Le mot dit : même ce qui est presque invisible a un poids et compte. La distinction avec « Dispersion/Saupoudrage » : le saupoudrage est un acte (répandre), la particule est un objet (la chose répandue). Le verset parle d'un objet de mesure (le poids DE), pas d'un acte de dispersion.",
        axe1_verset: "Le mot dharratin est en idafa avec mithqāl : « le poids d'une particule ». Le champ lexical est celui de l'infime : le plus petit poids possible d'un objet presque invisible. Le verset construit une échelle de précision maximale : même une particule de bien sera vue.",
        axe2_voisins: "Le verset 6 parle des actes en général. Le verset 7 zoome sur le plus petit : une particule de bien. Le verset 8 fait le même zoom pour le mal. La particule est le niveau de détail maximal — la loupe la plus fine.",
        axe3_sourate: "La particule est l'image clé de la sourate : après la secousse cosmique (v1), le poids d'une fourmi (v7). Le contraste entre l'immensité de la secousse et la petitesse de la particule est saisissant. La justice divine opère aux deux échelles.",
        axe4_coherence: "Le Coran utilise dharratin en 4:40, 10:61, 34:3, 34:22 et 99:7-8, toujours au sens de la plus petite chose mesurable. L'usage est parfaitement cohérent et formulaire.",
        axe5_frequence: "La particule comme unité de mesure morale signifie que rien n'est négligeable. Pour la mission de justice, chaque micro-acte compte — le bien comme le mal, même infime."
      },
      "Dispersion/Saupoudrage": {
        status: "nul",
        senses: ["saupoudrer", "répandre finement", "éparpiller"],
        proof_ctx: "Le saupoudrage est un acte (verbe). Le mot dharratin est un nom (objet) en position de complément de mesure. Le verset mesure un poids, il ne décrit pas un acte de dispersion."
      },
      "Descendance": {
        status: "nul",
        senses: ["enfants", "progéniture"],
        proof_ctx: "La descendance est un lien de filiation. Le mot dharratin ici mesure un poids, pas un lien de parenté. La construction mithqāl dharratin (poids d'une particule) est une mesure physique."
      },
      "Sens isolé/Parfum": {
        status: "nul",
        senses: ["parfum aromatique"],
        proof_ctx: "Sans rapport avec le contexte de pesée des actes."
      }
    }
  };

  // ḫyr (557) — Bien/Excellence
  const ḫyrAxes = {
    sense_chosen: "bien",
    concept_chosen: "Bien/Excellence",
    concepts: {
      "Bien/Excellence": {
        status: "retenu",
        senses: ["bien", "meilleur", "bon"],
        proof_ctx: "Le sens retenu est « Bien/Excellence ». Le mot khayran est un nom accusatif indéfini — « un bien ». Il fonctionne comme tamyīz (spécification) : il précise la nature de la particule pesée. Le Lane's donne : bien, meilleur, bon. Le khayr est ce qui est bon en soi — une qualité positive inhérente. La distinction avec « Choix/Préférence » : le choix est un acte de sélection (verbe), le bien est une qualité (nom). Le mot khayran est en position nominale (tamyīz), pas verbale — il décrit une qualité, pas un acte de choix.",
        axe1_verset: "Le mot khayran spécifie la nature de la particule : une particule DE BIEN. Le champ lexical est celui de la qualité morale : poids + particule + bien = la plus petite quantité mesurable de bien. Le verset construit une échelle de précision morale.",
        axe2_voisins: "Le verset 8 pose le pendant symétrique : une particule de mal (sharran). Les deux versets forment une paire complète : bien ↔ mal. Le bien et le mal sont les deux catégories du jugement, et chacune est mesurée à la particule.",
        axe3_sourate: "La sourate culmine avec la pesée du bien et du mal. Le bien est la première catégorie mentionnée (v7 avant v8). Cette priorité du bien sur le mal dans l'ordre reflète une vision où le bien est premier.",
        axe4_coherence: "Le Coran utilise khayr et sharr comme paire opposée à de nombreuses reprises. L'usage en 99:7-8 est la formulation la plus concise et célèbre de cette opposition.",
        axe5_frequence: "Le bien même infime est vu et compté. Pour la mission de justice, aucun bon acte n'est perdu — même le plus petit geste positif a un poids et sera reconnu."
      },
      "Choix/Préférence": {
        status: "peu_probable",
        senses: ["choisir", "préférer"],
        proof_ctx: "Le choix est un acte de sélection — un verbe. Le mot khayran est en position de tamyīz (spécification nominale), pas de verbe. Il qualifie la nature de la particule. On ne « choisit pas le poids d'une particule » — on fait « le poids d'une particule de bien ». Le test de naturalité élimine le choix dans cette construction.",
        axe1_verset: "La construction mithqāla dharratin khayran demande un nom qui spécifie la nature : « un bien ». Un verbe « un choix » ne fonctionne pas comme tamyīz.",
        axe2_voisins: "Le verset 8 a sharran (un mal) dans la même position. Le mal n'est pas un choix — c'est une qualité. La symétrie bien/mal confirme le sens de qualité morale.",
        axe3_sourate: "La sourate juge les actes par leur nature (bien/mal), pas par le processus de décision (choix/non-choix).",
        axe4_coherence: "Le Coran utilise khayr comme nom (le bien) bien plus souvent que comme verbe (choisir).",
        axe5_frequence: "La justice évalue la nature de l'acte (bien/mal), pas la qualité du choix."
      }
    }
  };

  await upsertVWA(6145, 'thql', thqlV7Axes, 1);
  await upsertVWA(6145, 'ḏrr', ḏrrAxes, 2);
  await upsertVWA(6145, 'ḫyr', ḫyrAxes, 3);
  console.log('VERSET 99:7 — TERMINÉ');
  console.log('  thql (ثقل) → sens "Poids/Gravité" → mot "poids"');
  console.log('  ḏrr (ذرر) → sens "Particule/Infime" → mot "particule"');
  console.log('  ḫyr (خير) → sens "Bien/Excellence" → mot "bien"');

  // ---- VERSET 99:8 — وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُۥ ----

  // shrr (1011) — Mal/Méchanceté
  const shrrAxes = {
    sense_chosen: "mal",
    concept_chosen: "Mal/Méchanceté",
    concepts: {
      "Mal/Méchanceté": {
        status: "retenu",
        senses: ["mal", "être mauvais", "méchanceté"],
        proof_ctx: "Le sens retenu est « Mal/Méchanceté ». Le mot sharran est un nom accusatif indéfini — « un mal ». Comme khayran au v7, il fonctionne comme tamyīz (spécification). Le Lane's donne : mal, être mauvais, méchanceté. Le sharr est ce qui est mauvais en soi — l'opposé exact du khayr. La structure du verset 8 est identique au verset 7, seul le mot change : khayr → sharr. La distinction avec « Étincelle » : l'étincelle est un phénomène physique lumineux. Le contexte est celui de la pesée morale des actes, pas d'un phénomène lumineux.",
        axe1_verset: "Le mot sharran est en position de tamyīz (spécification) après mithqāla dharratin. La construction est identique au verset 7 : le poids d'une particule DE MAL. Le champ lexical est celui de la qualité morale négative. Le verset forme une paire parfaite avec le v7 : bien ↔ mal.",
        axe2_voisins: "Le verset 7 a posé le bien, le verset 8 pose le mal. La symétrie est totale : même structure, même poids, même vision, seule la qualité change. Cette symétrie signifie que la justice est équitable — le bien et le mal sont traités avec la même précision.",
        axe3_sourate: "Le verset 8 est la dernière phrase de la sourate. Le mal comme dernier mot laisse un avertissement : l'humain est prévenu que même le plus petit mal sera vu. La sourate se ferme sur une mise en garde.",
        axe4_coherence: "Le Coran utilise la paire khayr/sharr (bien/mal) comme couple fondamental de la morale. L'usage en 99:7-8 est la formulation la plus concise.",
        axe5_frequence: "Le mal même infime est compté. Pour la mission de justice, cela empêche la minimisation : « ce n'est qu'une petite chose » ne fonctionne pas — tout compte."
      },
      "Sens isolé/Étincelle": {
        status: "nul",
        senses: ["étincelle"],
        proof_ctx: "L'étincelle est un phénomène physique sans rapport avec le contexte moral de pesée des actes."
      }
    }
  };

  await upsertVWA(6146, 'shrr', shrrAxes, 1);
  console.log('VERSET 99:8 — TERMINÉ');
  console.log('  shrr (شرر) → sens "Mal/Méchanceté" → mot "mal"');

  // === TRANSLATIONS v6-v8 ===
  await updateVerse(6144, {
    translation_arab: "Ce jour-là, les gens sortiront dispersés pour qu'on leur montre leurs actes.",
    full_translation: "Ce jour-là, les gens sortiront séparément pour que leur soient montrées leurs œuvres.",
    translation_explanation: `§DEMARCHE§

Le mot **yawma'idhin** (ce jour-là) reprend la même formule qu'au verset 4 — même jour, mais maintenant le sujet passe de la terre aux humains.

Le verbe **yaṣduru** est une forme I inaccompli — « ils sortent ». La racine ṣ-d-r signifie à l'origine « revenir d'un point d'eau, s'éloigner d'une source ». L'image est celle d'un flux de gens qui émanent, qui sortent d'un lieu. L'inaccompli donne un sens de scène en cours.

Le mot **an-nās** (les gens) est le sujet. L'article al indique les gens en général — l'humanité entière.

Le mot **ashtātan** est un pluriel de shatt (séparé, dispersé), à l'accusatif indéfini. Il fonctionne comme hāl (état) : il décrit l'état dans lequel les gens sortent. Les gens sortent À L'ÉTAT DE dispersés — chacun séparé des autres.

La construction **li-yuraw** est composée de li (pour, afin que) et du verbe yuraw (passif de la forme IV de r-'-y : « être montré quelque chose »). La forme IV passive signifie « on leur fait voir, on leur montre ». Le but de la sortie est que les gens voient leurs actes.

Le mot **a'mālahum** (leurs actes) est l'objet de yuraw. Les actes sont ce qui est montré aux gens.

§JUSTIFICATION§

**sortiront** — Le sens retenu est « Émission/Sortie ». Le mot « sortiront » est choisi car yaṣduru décrit un mouvement de l'intérieur vers l'extérieur. L'alternative « émaneront » est écartée car trop littéraire.

**dispersés** — Le sens retenu est « Dispersion/Séparation ». Le mot « dispersés » est choisi car il rend l'idée d'une séparation dans toutes les directions. L'alternative « séparément » est écartée car c'est un adverbe qui décrit la manière, alors que ashtātan est un nom qui décrit l'état.

**montrés** — Le sens retenu est « Vision/Perception ». La construction passive de la forme IV signifie « qu'on leur fasse voir ». L'alternative « voient » (actif) est écartée car le verbe est au passif — les gens ne voient pas de leur propre initiative, on leur montre.

**actes** — Le sens retenu est « Action/Oeuvre ». Le mot « actes » est choisi car il est neutre et courant. L'alternative « œuvres » est écartée car elle a une connotation littéraire ou artistique.

§CRITIQUE§

Hamidullah traduit « les gens sortiront séparément ». Le mot « séparément » est un adverbe qui décrit la manière de sortir, tandis que le texte arabe utilise un nom d'état (ashtātan = en état de dispersion). La nuance est que le texte arabe insiste sur l'état de séparation (chacun est dispersé, isolé), pas seulement sur la manière (ils ne sortent pas ensemble). C'est l'isolement de chacun face à ses actes qui est souligné.`,
    segments: [
      {fr:"Ce jour-là,", pos:"particle", phon:"yawma'idhin", arabic:"يَوْمَئِذٍ", is_particle:true, position:1},
      {fr:"sortiront", pos:"verbe", phon:"yaṣduru", arabic:"يَصْدُرُ", word_key:"sdr", is_particle:false, sense_retenu:"sortir", position:2},
      {fr:"les gens", pos:"nom", phon:"an-nās", arabic:"ٱلنَّاسُ", word_key:"nws", is_particle:false, sense_retenu:"gens", position:3},
      {fr:"dispersés", pos:"nom", phon:"ashtātan", arabic:"أَشْتَاتًا", word_key:"štt", is_particle:false, sense_retenu:"se disperser", position:4},
      {fr:"pour qu'on leur montre", pos:"verbe", phon:"li-yuraw", arabic:"لِّيُرَوْا۟", word_key:"ray", is_particle:false, sense_retenu:"voir", position:5},
      {fr:"leurs actes.", pos:"nom", phon:"a'mālahum", arabic:"أَعْمَـٰلَهُمْ", word_key:"eml", is_particle:false, sense_retenu:"acte", position:6}
    ]
  });

  await updateVerse(6145, {
    translation_arab: "Quiconque fait le poids d'une particule de bien le verra.",
    full_translation: "Quiconque fait un bien fût-ce du poids d'un atome, le verra.",
    translation_explanation: `§DEMARCHE§

La construction **fa-man** est composée de fa (conséquence) et man (quiconque, pronom conditionnel). Fa indique que ce qui suit est la conséquence de ce qui précède (la sortie et le jugement). Man est universel : il inclut tout être humain sans exception.

Le verbe **ya'mal** est une forme I inaccompli apocopé (majzūm, marqué par la suppression de la voyelle finale) — c'est le verbe de la condition : « quiconque fait ». L'apocopé est la marque de la phrase conditionnelle en arabe.

Le mot **mithqāla** est un nom instrumental de la racine thql — « le poids de ». C'est un instrument de mesure qui sert à peser. En idafa avec dharratin (d'une particule), il forme la mesure : « le poids d'une particule ».

Le mot **dharratin** est un nom féminin indéfini au génitif. Le Lane's donne : les jeunes fourmis, les plus petites des fourmis, les poussières qu'on voit dans un rayon de soleil qui entre par une ouverture. La dharra est l'unité minimale du visible — presque rien, mais encore quelque chose.

Le mot **khayran** est un accusatif indéfini qui fonctionne comme tamyīz (spécification) : il précise la nature de ce qui est pesé. Le poids d'une particule DE BIEN.

Le verbe **yarahu** est une forme I inaccompli apocopé avec le pronom suffixe hu (le, 3MS) : « il le verra ». Le hu renvoie au bien — chaque personne verra le bien qu'elle a fait, même infime.

§JUSTIFICATION§

**poids** — Le sens retenu est « Poids/Gravité ». Le mot « poids » est le terme exact pour mithqāl — un instrument de pesée, une mesure. L'alternative « charge » est écartée car la charge implique un fardeau porté, pas une mesure.

**particule** — Le sens retenu est « Particule/Infime ». Le mot « particule » est choisi car il désigne la plus petite unité de matière visible. L'alternative « atome » est écartée car c'est un terme de physique moderne qui n'existait pas dans le sens actuel à l'époque du texte. La dharra du Lane's est une fourmi minuscule ou une poussière dans un rayon de soleil, pas un atome au sens scientifique.

**bien** — Le sens retenu est « Bien/Excellence ». Le mot « bien » est le terme le plus direct et courant pour khayr.

§CRITIQUE§

Hamidullah traduit « fût-ce du poids d'un atome ». Le mot « atome » est anachronique — il vient du grec atomos (indivisible) et a pris un sens scientifique précis en physique moderne. Le Lane's donne pour dharra : les plus petites fourmis, les poussières dans un rayon de soleil. Le texte arabe parle d'une réalité concrète et visible (la fourmi, la poussière), pas d'un concept scientifique abstrait. Traduire par « particule » préserve l'idée de petitesse extrême sans introduire un anachronisme.`,
    segments: [
      {fr:"Quiconque", pos:"particle", phon:"fa-man", arabic:"فَمَن", is_particle:true, position:1},
      {fr:"fait", pos:"verbe", phon:"ya'mal", arabic:"يَعْمَلْ", word_key:"eml", is_particle:false, sense_retenu:"agir", position:2},
      {fr:"le poids", pos:"nom", phon:"mithqāla", arabic:"مِثْقَالَ", word_key:"thql", is_particle:false, sense_retenu:"lourd", position:3},
      {fr:"d'une particule", pos:"nom", phon:"dharratin", arabic:"ذَرَّةٍ", word_key:"ḏrr", is_particle:false, sense_retenu:"particule minuscule", position:4},
      {fr:"de bien", pos:"nom", phon:"khayran", arabic:"خَيْرًا", word_key:"ḫyr", is_particle:false, sense_retenu:"bien", position:5},
      {fr:"le verra.", pos:"verbe", phon:"yarahu", arabic:"يَرَهُۥ", word_key:"ray", is_particle:false, sense_retenu:"voir", position:6}
    ]
  });

  await updateVerse(6146, {
    translation_arab: "Et quiconque fait le poids d'une particule de mal le verra.",
    full_translation: "Et quiconque fait un mal fût-ce du poids d'un atome, le verra.",
    translation_explanation: `§DEMARCHE§

La construction **wa-man** est composée de wa (et, conjonction) et man (quiconque). Le wa connecte ce verset au précédent : c'est le pendant symétrique. La structure est identique au verset 7, seul le mot de qualification change : khayran (bien) → sharran (mal).

Le verbe **ya'mal** est le même qu'au v7 — inaccompli apocopé, condition.

Les mots **mithqāla dharratin** sont les mêmes qu'au v7 — même mesure, même précision.

Le mot **sharran** est un accusatif indéfini, tamyīz (spécification) : le poids d'une particule DE MAL. Le Lane's donne pour la racine sh-r-r : mal, être mauvais, méchanceté. Le sharr est l'opposé exact du khayr.

Le verbe **yarahu** est le même qu'au v7 : « il le verra ». Le hu renvoie au mal.

La symétrie parfaite entre les versets 7 et 8 est un procédé rhétorique qui exprime l'équité absolue du jugement : même structure, même mesure, même vision — la seule variable est la nature de l'acte (bien ou mal).

§JUSTIFICATION§

**mal** — Le sens retenu est « Mal/Méchanceté ». Le mot « mal » est le terme le plus direct et courant pour sharr. L'alternative « méchanceté » est écartée car elle ajoute une intentionnalité qui n'est pas dans le mot sharr — le sharr peut être involontaire.

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens. La remarque sur « atome » s'applique ici aussi (voir v7).`,
    segments: [
      {fr:"Et quiconque", pos:"particle", phon:"wa-man", arabic:"وَمَن", is_particle:true, position:1},
      {fr:"fait", pos:"verbe", phon:"ya'mal", arabic:"يَعْمَلْ", word_key:"eml", is_particle:false, sense_retenu:"agir", position:2},
      {fr:"le poids", pos:"nom", phon:"mithqāla", arabic:"مِثْقَالَ", word_key:"thql", is_particle:false, sense_retenu:"lourd", position:3},
      {fr:"d'une particule", pos:"nom", phon:"dharratin", arabic:"ذَرَّةٍ", word_key:"ḏrr", is_particle:false, sense_retenu:"particule minuscule", position:4},
      {fr:"de mal", pos:"nom", phon:"sharran", arabic:"شَرًّا", word_key:"shrr", is_particle:false, sense_retenu:"mal", position:5},
      {fr:"le verra.", pos:"verbe", phon:"yarahu", arabic:"يَرَهُۥ", word_key:"ray", is_particle:false, sense_retenu:"voir", position:6}
    ]
  });

  console.log('Traductions v6-v8 insérées ✓');
}

// ============================================================
// PHRASES DU QUOTIDIEN
// ============================================================
async function insertDailyPhrases() {
  console.log('\n====== PHRASES DU QUOTIDIEN ======\n');

  const {data:šttWA} = await sb.from('word_analyses').select('id').eq('word_key','štt').maybeSingle();
  const {data:ḏrrWA} = await sb.from('word_analyses').select('id').eq('word_key','ḏrr').maybeSingle();

  // zlzl (1012) — 0 phrases existantes
  const {data:zlzlDaily} = await sb.from('word_daily').select('id').eq('analysis_id', 1012);
  if (!zlzlDaily || zlzlDaily.length === 0) {
    await insertDaily(1012, 'séisme', 'زَلْزَلَتِ الأَرْضُ', 'zalzalati al-ard', 'La terre a tremblé');
    await insertDaily(1012, 'ébranler', 'زُلْزِلَ المَبْنَى', 'zulzila al-mabnā', "Le bâtiment a été ébranlé");
    await insertDaily(1012, 'secouer', 'زَلْزَلَ ثِقَتَهُ', 'zalzala thiqatahu', 'Il a ébranlé sa confiance');
    console.log('  zlzl: 3 phrases ✓');
  } else {
    console.log('  zlzl: SKIP (déjà ' + zlzlDaily.length + ' phrases)');
  }

  // hdth (1649) — 0 phrases
  const {data:hdthDaily} = await sb.from('word_daily').select('id').eq('analysis_id', 1649);
  if (!hdthDaily || hdthDaily.length === 0) {
    await insertDaily(1649, 'raconter', 'حَدَّثَنِي عَنْ سَفَرِهِ', "haddathanī 'an safarihi", "Il m'a raconté son voyage");
    await insertDaily(1649, 'raconter', 'تُحَدِّثُ الأَطْفَالَ', "tuhaddithu al-atfāl", 'Elle raconte aux enfants');
    await insertDaily(1649, 'parler', 'حَدَّثْتُهُ بِالخَبَرِ', "haddathtuhu bi-l-khabar", "Je lui ai annoncé la nouvelle");
    console.log('  hdth: 3 phrases ✓');
  } else {
    console.log('  hdth: SKIP (déjà ' + hdthDaily.length + ' phrases)');
  }

  // why (1579) — 0 phrases
  const {data:whyDaily} = await sb.from('word_daily').select('id').eq('analysis_id', 1579);
  if (!whyDaily || whyDaily.length === 0) {
    await insertDaily(1579, 'inspirer', 'أَوْحَى إِلَيْهِ بِفِكْرَةٍ', "awhā ilayhi bi-fikra", "Il lui a inspiré une idée");
    await insertDaily(1579, 'révéler', 'أَوْحَى اللهُ إِلَيْهِ', "awhā Allāhu ilayhi", 'Dieu lui a révélé');
    await insertDaily(1579, 'inspirer', 'وَحَيٌ مِنَ اللهِ', "wahyun mina Allāh", 'Une inspiration de Dieu');
    console.log('  why: 3 phrases ✓');
  } else {
    console.log('  why: SKIP (déjà ' + whyDaily.length + ' phrases)');
  }

  // štt (NEW)
  const {data:šttDaily} = await sb.from('word_daily').select('id').eq('analysis_id', šttWA.id);
  if (!šttDaily || šttDaily.length === 0) {
    await insertDaily(šttWA.id, 'se disperser', 'تَشَتَّتَ الجَمْعُ', "tashattata al-jam'", "L'assemblée s'est dispersée");
    await insertDaily(šttWA.id, 'se disperser', 'شَتَّتَ شَمْلَهُمْ', "shattata shamlahum", 'Il a brisé leur unité');
    await insertDaily(šttWA.id, 'divers', 'أُمُورٌ شَتَّى', "umūrun shattā", 'Des affaires diverses');
    console.log('  štt: 3 phrases ✓');
  } else {
    console.log('  štt: SKIP (déjà ' + šttDaily.length + ' phrases)');
  }

  // ḏrr (NEW)
  const {data:ḏrrDaily} = await sb.from('word_daily').select('id').eq('analysis_id', ḏrrWA.id);
  if (!ḏrrDaily || ḏrrDaily.length === 0) {
    await insertDaily(ḏrrWA.id, 'particule minuscule', 'لَا يَضُرُّ ذَرَّةً', "lā yaḍurru dharratan", 'Ça ne nuit pas d\u0027une particule');
    await insertDaily(ḏrrWA.id, 'particule minuscule', 'مِثْقَالُ ذَرَّةٍ', "mithqālu dharratin", "Le poids d'une particule");
    await insertDaily(ḏrrWA.id, 'saupoudrer', 'ذَرَّ المِلْحَ عَلَى الطَّعَامِ', "dharra al-milh 'alā at-ta'ām", 'Il a saupoudré le sel sur le plat');
    console.log('  ḏrr: 3 phrases ✓');
  } else {
    console.log('  ḏrr: SKIP (déjà ' + ḏrrDaily.length + ' phrases)');
  }

  // Roots that already have daily phrases (SKIP): ard(324), xrj(388), thql(1476), qwl(307), ans(866), rbb(253), sdr(1245), nws(303), ray(552), eml(393), ḫyr(557), shrr(1011), khbr(1564)
  console.log('  ard, xrj, thql, qwl, ans, rbb, sdr, nws, ray, eml, ḫyr, shrr, khbr: SKIP (déjà existants)');

  console.log('\n✓ Phrases du quotidien insérées');
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log('========================================');
  console.log('  PIPELINE SOURATE 99 — AZ-ZALZALA');
  console.log('========================================');

  await createMissingRoots();
  await verses99_1_to_3();
  await verses99_4_to_5();
  await verses99_6_to_8();
  await insertDailyPhrases();

  console.log('\n========================================');
  console.log('  PIPELINE SOURATE 99 — TERMINÉE');
  console.log('========================================');
  console.log('\nTraduction complète :');
  console.log('v1: Quand la terre sera secouée de sa secousse,');
  console.log('v2: et que la terre aura fait sortir ses charges,');
  console.log("v3: et que l'être humain aura dit : « Qu'a-t-elle ? »");
  console.log('v4: Ce jour-là, elle racontera ses nouvelles,');
  console.log('v5: parce que ton Seigneur le lui aura inspiré.');
  console.log('v6: Ce jour-là, les gens sortiront dispersés pour qu\'on leur montre leurs actes.');
  console.log("v7: Quiconque fait le poids d'une particule de bien le verra.");
  console.log("v8: Et quiconque fait le poids d'une particule de mal le verra.");
}

main().catch(e => { console.error('ERREUR:', e.message); process.exit(1); });
