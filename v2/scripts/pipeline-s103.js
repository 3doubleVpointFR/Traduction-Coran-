const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    console.log(`  Updated VWA ${word_key} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  Error VWA ${word_key}:`, error.message);
    else console.log(`  Created VWA ${word_key} id=${data.id}`);
  }
}

async function insertDaily(analysis_id, phrases) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysis_id);
  if (count > 0) {
    console.log(`  word_daily already exists for analysis_id=${analysis_id}, SKIP`);
    return;
  }
  const { error } = await sb.from('word_daily').insert(phrases);
  if (error) console.log(`  Error word_daily:`, error.message);
  else console.log(`  Inserted ${phrases.length} daily phrases`);
}

async function verse103_1() {
  console.log('\n=== VERSET 103:1 ===');
  const verse_id = 6177;

  // VWA for al-'asr
  await upsertVWA(verse_id, 'ESr', 'temps', {
    sense_chosen: "temps",
    concept_chosen: "Temps/\u00c9poque",
    concepts: {
      "Pression/Extraction": {
        status: "nul",
        senses: ["presser", "extraire le jus", "essorer", "extorquer"],
        proof_ctx: "Jurer par la pression est incoh\u00e9rent avec le th\u00e8me existentiel de la sourate. Le serment coranique porte sur des r\u00e9alit\u00e9s cosmiques fondamentales, pas sur un acte physique de pression."
      },
      "Temps/\u00c9poque": {
        status: "retenu",
        senses: ["temps", "\u00e9poque", "fin de journ\u00e9e", "succession des \u00e2ges"],
        proof_ctx: "Le sens retenu est \u00ab Temps/\u00c9poque \u00bb. Le temps est la r\u00e9alit\u00e9 permanente et universelle dans laquelle la perte humaine (verset 2) se manifeste. D'apr\u00e8s les sources \u00e9tymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), al-'asr signifie le temps, une \u00e9tendue illimit\u00e9e pendant laquelle les peuples passent et s'\u00e9teignent. Le serment par le temps s'inscrit dans la s\u00e9rie des serments coraniques par les r\u00e9alit\u00e9s cosmiques (soleil, nuit, aube). Distinction avec \u00ab Refuge/Protection \u00bb : le refuge est un \u00e9tat ponctuel vers lequel on se dirige pour \u00e9chapper au danger \u2014 c'est un \u00e9l\u00e9ment de la solution. Le temps est le cadre permanent et in\u00e9vitable dans lequel tout se joue \u2014 c'est le probl\u00e8me pos\u00e9 par la sourate. La sourate ne parle pas de se r\u00e9fugier mais de ce qu'on fait de son temps. Le temps englobe le refuge, pas l'inverse.",
        axe1_verset: "Le verset dit \u00ab par le temps \u00bb. Le mot al-'asr est seul, il introduit un serment. Le verset suivant annonce que l'\u00eatre humain est en perte (khusr). Le temps est pr\u00e9cis\u00e9ment le cadre dans lequel cette perte se manifeste \u2014 chaque instant qui passe rapproche de la fin. Le champ lexical perte + temps forme un couple naturel : le temps est ce dans quoi on perd ou on gagne. Le serment par le temps pose le d\u00e9cor existentiel de toute la sourate.",
        axe2_voisins: "Le verset 2 d\u00e9crit la condition universelle de perte de l'\u00eatre humain. Le verset 3 donne les quatre conditions pour \u00e9chapper \u00e0 cette perte (croire, agir, se recommander mutuellement la v\u00e9rit\u00e9 et la constance). Le temps est le cadre dans lequel cette perte se joue \u2014 il est le t\u00e9moin silencieux de la condition humaine. C'est le contexte existentiel de toute la sourate. Le serment par le temps donne la mesure de l'urgence du constat qui suit.",
        axe3_sourate: "La sourate 103 est une sourate existentielle qui traite de la condition humaine face au temps qui passe. Le temps est le th\u00e8me central \u2014 c'est lui qui rend la perte in\u00e9vitable si l'\u00eatre humain ne remplit pas les conditions du verset 3. Jurer par le temps, c'est jurer par la r\u00e9alit\u00e9 la plus fondamentale \u00e0 laquelle chaque \u00eatre humain est soumis. Le titre m\u00eame de la sourate (al-'asr) confirme la centralit\u00e9 du temps.",
        axe4_coherence: "Le Coran utilise le serment par des r\u00e9alit\u00e9s cosmiques fondamentales : le soleil (91:1), la nuit (92:1), l'aube (89:1), le figuier (95:1). Le temps s'inscrit dans cette s\u00e9rie de r\u00e9alit\u00e9s universelles que personne ne peut nier. Les sources \u00e9tymologiques confirment que al-'asr dans cette sourate signifie le temps. Le Coran utilise aussi dahr pour le temps (45:24) \u2014 les deux racines d\u00e9crivent la m\u00eame r\u00e9alit\u00e9 par des angles diff\u00e9rents. Le serment par le temps est coh\u00e9rent avec les serments coraniques par les r\u00e9alit\u00e9s fondamentales.",
        axe5_frequence: "Le temps est le cadre dans lequel le khalifa exerce sa mission de justice et de civilisation. Sans le temps, il n'y a ni action ni construction ni emp\u00eachement de la corruption. Le serment par le temps rappelle que chaque instant compte pour accomplir la mission humaine. Le temps perdu est une perte irr\u00e9versible. Le verset 2 confirme que cette perte est la condition par d\u00e9faut de l'\u00eatre humain \u2014 seul celui qui remplit les conditions du verset 3 y \u00e9chappe."
      },
      "Contemporan\u00e9it\u00e9/Coexistence": {
        status: "nul",
        senses: ["\u00eatre contemporain", "atteindre le temps de quelqu'un"],
        proof_ctx: "\u00catre contemporain est une circonstance relative entre deux personnes \u2014 on ne pr\u00eate pas serment par une relation interpersonnelle circonstancielle dans un contexte de v\u00e9rit\u00e9 universelle."
      },
      "Maturit\u00e9/Pubert\u00e9": {
        status: "nul",
        senses: ["atteindre la pubert\u00e9", "atteindre la pl\u00e9nitude de la jeunesse"],
        proof_ctx: "La pubert\u00e9 est un \u00e9v\u00e9nement individuel et biologique. On ne pr\u00eate pas serment par un seuil de d\u00e9veloppement physique dans une sourate qui traite de la condition universelle de l'\u00eatre humain."
      },
      "Refuge/Protection": {
        status: "peu_probable",
        senses: ["lieu de refuge", "asile", "moyen de salut"],
        proof_ctx: "Le refuge est un \u00e9tat ponctuel vers lequel on se dirige pour \u00e9chapper au danger. C'est un \u00e9l\u00e9ment de la solution, pas le cadre du probl\u00e8me. La sourate pose d'abord le cadre (le temps, verset 1), puis le probl\u00e8me (la perte, verset 2), puis la solution (les quatre conditions, verset 3). Jurer par le refuge anticiperait la solution avant de poser le probl\u00e8me. La distinction philosophique avec le temps est claire : le temps est le cadre permanent et in\u00e9vitable dans lequel tout se d\u00e9roule, le refuge est un mouvement ponctuel vers la s\u00e9curit\u00e9. Le temps englobe le refuge, pas l'inverse.",
        axe1_verset: "Le verset est un serment unique. Le mot est seul, sans compl\u00e9ment qui orienterait vers le refuge. Le champ lexical ne contient pas d'autres mots de protection. Le verset suivant parle de perte, pas de danger auquel on \u00e9chappe. Le refuge comme serment est possible mais d\u00e9connect\u00e9 du contexte imm\u00e9diat.",
        axe2_voisins: "Le verset 2 annonce la perte universelle. Le verset 3 donne les exceptions par des actions (croire, agir, se recommander), pas par un lieu de refuge. Le refuge pourrait \u00eatre la m\u00e9taphore de cette exception, mais le texte ne d\u00e9veloppe pas cette id\u00e9e \u2014 il parle d'actions, pas d'un abri.",
        axe3_sourate: "La sourate traite de la condition humaine face au temps. Le refuge est un th\u00e8me secondaire \u2014 la sourate ne d\u00e9veloppe pas l'id\u00e9e de protection mais celle de perte et de salut par l'action. Le titre de la sourate (al-'asr) pointe vers le temps, pas vers le refuge.",
        axe4_coherence: "Le Coran utilise d'autres mots pour le refuge (ma'wa, malja'). Le mot al-'asr n'est jamais utilis\u00e9 comme refuge dans le Coran. Les sources \u00e9tymologiques attestent ce sens dans des d\u00e9riv\u00e9s (ma'sar, 'usra), pas dans la forme 'asr elle-m\u00eame.",
        axe5_frequence: "Le refuge contribuerait \u00e0 la mission humaine en tant que source de protection, mais le verset ne d\u00e9veloppe pas cette dimension. Le serment introductif pose un cadre, et le cadre de cette sourate est temporel, pas spatial."
      },
      "Ph\u00e9nom\u00e8ne atmosph\u00e9rique": {
        status: "nul",
        senses: ["poussi\u00e8re soulev\u00e9e", "vent tourbillonnant", "nuage porteur de pluie"],
        proof_ctx: "Poussi\u00e8re et vent sont des ph\u00e9nom\u00e8nes mineurs et passagers, incompatibles avec la gravit\u00e9 du serment et le th\u00e8me existentiel de la condition humaine."
      },
      "Difficult\u00e9/Contrainte": {
        status: "nul",
        senses: ["devenir difficile", "pleurer"],
        proof_ctx: "Jurer par la difficult\u00e9 ne s'inscrit pas dans le champ lexical du verset. La sourate parle de perte (khusr), pas de difficult\u00e9 \u2014 la perte est d\u00e9finitive, la difficult\u00e9 est temporaire."
      }
    }
  }, 1);

  // verse_analyses
  const translation_arab = "Par le temps.";
  const full_translation = "Par le Temps !";
  const translation_explanation = `\u00a7DEMARCHE\u00a7
Le verset 103:1 ne contient qu'un seul mot important : **al-'asr** (le temps). Le mot est introduit par **wa** (\u0648), la particule du serment en arabe. Cette construction (waw al-qasam + nom au g\u00e9nitif) est une formule de serment : \u00ab Je jure par... \u00bb. Le nom **al-'asr** est d\u00e9fini par l'article **al-** (\u0627\u0644), ce qui signifie qu'il s'agit d'une r\u00e9alit\u00e9 connue, identifi\u00e9e, universelle \u2014 pas n'importe quel temps, mais LE temps, celui que tout le monde conna\u00eet et subit.

D'apr\u00e8s les sources \u00e9tymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine 'ayn-sad-ra (\u0639 \u0635 \u0631) donne le sens premier de presser, extraire le jus \u2014 et par extension le temps, d\u00e9fini comme \u00ab une \u00e9tendue de temps illimit\u00e9e pendant laquelle les peuples passent et deviennent \u00e9teints \u00bb. Le lien entre les deux est que le temps \u00ab presse \u00bb la vie comme on presse un fruit \u2014 il en extrait la substance jusqu'\u00e0 l'\u00e9puisement.

Le g\u00e9nitif (kasra \u00e0 la fin : al-'asri) est impos\u00e9 par la particule du serment. Le verset est donc un serment solennel par le temps.

\u00a7JUSTIFICATION\u00a7
**temps** \u2014 Le sens retenu est \u00ab Temps/\u00c9poque \u00bb. Le mot \u00ab temps \u00bb est choisi car c'est le terme le plus courant et le plus imm\u00e9diatement compr\u00e9hensible en fran\u00e7ais pour d\u00e9signer cette r\u00e9alit\u00e9 universelle. L'alternative \u00ab \u00e9poque \u00bb est \u00e9cart\u00e9e car elle d\u00e9signe une p\u00e9riode d\u00e9termin\u00e9e et d\u00e9limit\u00e9e, alors que les sources \u00e9tymologiques insistent sur le caract\u00e8re illimit\u00e9 du temps. L'alternative \u00ab \u00e8re \u00bb est \u00e9cart\u00e9e pour la m\u00eame raison \u2014 trop historique, trop d\u00e9limit\u00e9. Le mot \u00ab temps \u00bb en fran\u00e7ais courant d\u00e9signe exactement cette r\u00e9alit\u00e9 permanente dans laquelle tout se d\u00e9roule : \u00ab le temps passe \u00bb, \u00ab avec le temps \u00bb, \u00ab le temps n'attend personne \u00bb.

\u00a7CRITIQUE\u00a7
Les traductions courantes donnent sensiblement le m\u00eame sens \u2014 \u00ab Par le Temps \u00bb (Hamidullah), \u00ab Par le temps \u00bb (Blach\u00e8re). Certaines traductions ajoutent \u00ab de l'apr\u00e8s-midi \u00bb (la pri\u00e8re de l'apr\u00e8s-midi), ce qui restreint le sens \u00e0 un moment de la journ\u00e9e. L'\u00e9tymologie pure montre que al-'asr dans ce verset d\u00e9signe le temps dans son sens le plus large \u2014 la r\u00e9alit\u00e9 illimit\u00e9e dans laquelle les peuples passent et s'\u00e9teignent, pas un simple cr\u00e9neau horaire.`;

  const segments = [
    { fr: "par", phon: "wa", arabic: "\u0648\u064e", position: 1, word_key: null, is_particle: true },
    { fr: "le temps", pos: "nom", phon: "al-'asr", arabic: "\u0671\u0644\u0652\u0639\u064e\u0635\u0652\u0631\u0650", position: 1, word_key: "ESr", is_particle: false, sense_retenu: "temps" }
  ];

  const { error: vaErr } = await sb.from('verse_analyses').update({
    translation_arab, translation_explanation, segments, full_translation
  }).eq('verse_id', verse_id);
  console.log('  Updated verse_analyses', vaErr?.message || 'OK');

  // Word daily
  await insertDaily(2601, [
    { analysis_id: 2601, sense: 'temps', arabic: '\u0639\u0635\u0631', phon: "'asr", french: "Le temps passe vite quand on s'amuse \u2014 on ne le voit pas filer." },
    { analysis_id: 2601, sense: 'temps', arabic: '\u0639\u0635\u0631', phon: "'asr", french: "\u00c0 notre \u00e9poque, tout va trop vite \u2014 on n'a plus le temps de r\u00e9fl\u00e9chir." },
    { analysis_id: 2601, sense: 'temps', arabic: '\u0639\u0635\u0631', phon: "'asr", french: "Il a v\u00e9cu \u00e0 une autre \u00e9poque \u2014 les choses \u00e9taient diff\u00e9rentes de son temps." }
  ]);

  console.log('VERSET 103:1 \u2014 TERMIN\u00c9');
  console.log('  al-\'asr (ESr) \u2192 sens "Temps/\u00c9poque" \u2192 mot fran\u00e7ais "temps"');
  console.log('  Traduction : "Par le temps."');
}

async function verse103_2() {
  console.log('\n=== VERSET 103:2 ===');
  const verse_id = 6178;

  // === al-insan (ans, id=866) ===
  // Nom d\u00e9fini (al-), structure: inna + al-insan + la-fi + khusr
  // Concepts: Familiarit\u00e9/Sociabilit\u00e9 (4 sens), Perception (2 sens)

  await upsertVWA(verse_id, 'ans', '\u00eatre humain', {
    sense_chosen: "\u00eatre humain",
    concept_chosen: "Familiarit\u00e9/Sociabilit\u00e9",
    concepts: {
      "Familiarit\u00e9/Sociabilit\u00e9": {
        status: "retenu",
        senses: ["\u00eatre familier", "\u00eatre sociable", "\u00eatre humain", "humains (ins)"],
        proof_ctx: "Le sens retenu est \u00ab Familiarit\u00e9/Sociabilit\u00e9 \u00bb. Le mot al-insan d\u00e9signe l'\u00eatre humain en tant qu'\u00eatre sociable et familier \u2014 celui qui a besoin des autres pour exister. D'apr\u00e8s les sources \u00e9tymologiques, la racine alif-nun-sin donne le sens premier de familiarit\u00e9, sociabilit\u00e9 \u2014 l'humain est l'\u00eatre sociable par nature, celui qui ne peut pas vivre seul. Le verset dit que cet \u00eatre sociable est en perte \u2014 ce qui cr\u00e9e un contraste puissant : l'\u00eatre qui a besoin des autres pour vivre est en train de perdre, sauf s'il remplit les conditions du verset 3 (qui sont toutes des actes collectifs : croire ensemble, agir ensemble, se recommander mutuellement). Distinction avec \u00ab Perception \u00bb : la perception est un acte individuel des sens, elle ne d\u00e9finit pas la nature de l'\u00eatre humain. La familiarit\u00e9/sociabilit\u00e9 est la nature m\u00eame de l'humain \u2014 c'est ce qui fait de lui un \u00eatre social. Le verset ne parle pas de la capacit\u00e9 de l'humain \u00e0 percevoir mais de sa condition existentielle.",
        axe1_verset: "Le verset dit \u00ab l'\u00eatre humain est en perte \u00bb. Le mot al-insan est sujet de la phrase nominale avec inna (particule d'insistance). Le champ lexical combine l'humain (insan) et la perte (khusr). La familiarit\u00e9/sociabilit\u00e9 \u2014 la nature sociale de l'humain \u2014 est coh\u00e9rente avec le fait que les conditions du salut au verset 3 sont toutes collectives (se recommander mutuellement). L'humain sociable qui ne pratique pas la solidarit\u00e9 est en perte.",
        axe2_voisins: "Le verset 1 jure par le temps, le verset 3 donne les exceptions \u00e0 la perte. Le verset 2 est le constat central : l'\u00eatre humain, par d\u00e9faut, est en perte. La nature sociale de l'insan \u00e9claire pourquoi les quatre conditions du salut au verset 3 sont relationnelles \u2014 croire, agir bien, se recommander la v\u00e9rit\u00e9 et la constance. L'\u00eatre sociable qui ne vit pas sa sociabilit\u00e9 dans la v\u00e9rit\u00e9 est en perte.",
        axe3_sourate: "La sourate 103 traite de la condition humaine face au temps. L'\u00eatre humain est d\u00e9fini ici par sa nature profonde \u2014 un \u00eatre sociable. Ce n'est pas un hasard si les conditions du salut sont toutes des actes de lien social (recommandation mutuelle). Le th\u00e8me de la sourate est que l'\u00eatre social qui ne remplit pas sa vocation sociale est en perte dans le temps.",
        axe4_coherence: "Le Coran utilise al-insan dans de nombreux versets pour d\u00e9signer l'\u00eatre humain dans sa condition existentielle : 70:19 (l'insan est cr\u00e9\u00e9 avide), 96:5-6 (l'insan se rebelle quand il se croit suffisant), 100:6 (l'insan est ingrat). Partout, al-insan d\u00e9signe l'\u00eatre humain dans sa nature fondamentale, pas dans sa capacit\u00e9 perceptive. La racine uns (familiarit\u00e9) montre que l'humain est nomm\u00e9 ainsi parce qu'il est l'\u00eatre qui a besoin de compagnie.",
        axe5_frequence: "L'\u00eatre humain en tant qu'\u00eatre sociable est au c\u0153ur de la mission du khalifa. La civilisation, la justice et l'emp\u00eachement de la corruption sont des missions collectives. L'insan est l'\u00eatre qui porte cette mission parce qu'il est sociable par nature. Le verset dit que sans les quatre conditions du v3, cet \u00eatre social \u00e9choue dans sa mission \u2014 il est en perte."
      },
      "Perception": {
        status: "peu_probable",
        senses: ["percevoir", "voir de loin"],
        proof_ctx: "La perception est un acte individuel des sens, un contact ponctuel avec l'ext\u00e9rieur. Elle ne d\u00e9finit pas la nature de l'\u00eatre humain \u2014 d'autres cr\u00e9atures per\u00e7oivent aussi. La familiarit\u00e9/sociabilit\u00e9 est ce qui distingue l'humain : il est l'\u00eatre sociable. Le Coran ne nomme pas l'humain al-insan pour sa capacit\u00e9 \u00e0 percevoir mais pour sa nature sociale. De plus, le verset 3 donne des conditions de salut qui sont toutes des actes collectifs \u2014 cela confirme que c'est la dimension sociale de l'humain qui est en jeu, pas sa perception.",
        axe1_verset: "Le verset dit que l'\u00eatre humain est en perte. Si l'humain \u00e9tait d\u00e9fini ici par sa perception, la perte serait une perte de perception \u2014 or le verset 3 montre que la perte concerne l'absence de foi, d'action et de recommandation mutuelle. Ce sont des actes sociaux, pas perceptifs.",
        axe2_voisins: "Le verset 3 donne les conditions du salut : croire, agir, se recommander mutuellement la v\u00e9rit\u00e9 et la constance. Ces conditions sont relationnelles et collectives. Elles n'ont rien \u00e0 voir avec la perception individuelle.",
        axe3_sourate: "La sourate traite de la condition existentielle de l'\u00eatre humain face au temps, pas de sa capacit\u00e9 sensorielle. Le th\u00e8me est social et moral, pas cognitif.",
        axe4_coherence: "Le Coran utilise al-insan pour d\u00e9signer la nature profonde de l'humain (avide, ingrat, rebelle, impatient) \u2014 jamais pour sa capacit\u00e9 perceptive. Quand le Coran parle de perception, il utilise d'autres mots (basar pour la vue, sam' pour l'ou\u00efe).",
        axe5_frequence: "La perception ne contribue pas directement \u00e0 la mission du khalifa telle que la sourate la d\u00e9crit. Le salut passe par des actes collectifs (recommandation mutuelle), pas par la perception individuelle."
      }
    }
  }, 2);

  // === khusr (khsr, id=431) ===
  // Nom ind\u00e9fini au g\u00e9nitif (apr\u00e8s fi), sans al-
  // Concepts: Perte/Diminution (2), \u00c9garement (2), Destruction (2)

  await upsertVWA(verse_id, 'khsr', 'perte', {
    sense_chosen: "perte",
    concept_chosen: "Perte/Diminution",
    concepts: {
      "Perte/Diminution": {
        status: "retenu",
        senses: ["perdre", "subir une perte"],
        proof_ctx: "Le sens retenu est \u00ab Perte/Diminution \u00bb. La perte est le mouvement n\u00e9gatif par lequel quelque chose s'\u00e9chappe de celui qui poss\u00e9dait. Le verset dit que l'\u00eatre humain est \u00ab dans \u00bb (fi) la perte \u2014 la pr\u00e9position fi indique qu'il est plong\u00e9 dedans, immerg\u00e9, pas qu'il subit un \u00e9v\u00e9nement ponctuel. La perte est un \u00e9tat dans lequel on baigne. Distinction avec \u00ab \u00c9garement \u00bb : l'\u00e9garement est une d\u00e9viation de direction (on quitte le chemin), la perte est une diminution de substance (on perd ce qu'on avait). Le verset parle de ce que l'humain PERD dans le temps, pas de la direction qu'il prend. L'\u00e9garement est un d\u00e9faut d'orientation, la perte est un d\u00e9faut de substance \u2014 le temps vide l'humain de sa substance s'il ne la remplit pas par les actes du verset 3. Distinction avec \u00ab Destruction \u00bb : la destruction est ponctuelle et totale, la perte est progressive et continue. Le verset dit fi khusr (dans la perte), pas fi halak (dans la destruction). La perte est un processus permanent, la destruction est un \u00e9v\u00e9nement final.",
        axe1_verset: "Le verset dit \u00ab l'\u00eatre humain est dans la perte \u00bb. Le mot khusr est pr\u00e9c\u00e9d\u00e9 de la-fi (certes dans), une double insistance. La perte est l'\u00e9tat dans lequel l'humain baigne par d\u00e9faut. Le champ lexical temps (v1) + perte (v2) + conditions de salut (v3) forme une progression logique : le temps presse, l'humain perd, sauf s'il agit. La perte est le processus progressif par lequel le temps vide l'humain de sa substance.",
        axe2_voisins: "Le verset 1 jure par le temps. Le verset 2 constate la perte. Le verset 3 donne les exceptions. La perte est le pont entre le temps (cadre) et les conditions du salut (solution). Sans le constat de la perte, le verset 3 n'aurait pas de raison d'\u00eatre. La perte est progressive \u2014 chaque instant du temps qui passe sans foi ni action est un instant de perte.",
        axe3_sourate: "La sourate 103 traite de la condition humaine face au temps. La perte est le th\u00e8me central du verset 2 \u2014 c'est la condition par d\u00e9faut de l'\u00eatre humain. Le th\u00e8me de la sourate est que le temps produit la perte par d\u00e9faut, et que seules quatre conditions permettent d'y \u00e9chapper.",
        axe4_coherence: "Le Coran utilise khusr et ses d\u00e9riv\u00e9s dans de nombreux versets : 2:27 (ceux-l\u00e0 sont les perdants), 39:15 (les vrais perdants sont ceux qui se perdent eux-m\u00eames et perdent leurs familles). Partout, la perte est un \u00e9tat durable et progressif, pas un \u00e9v\u00e9nement ponctuel. La racine kha-sin-ra d\u00e9signe le mouvement par lequel ce qui \u00e9tait \u00e0 soi s'\u00e9chappe vers le dehors \u2014 on perd sa substance, son temps, ses opportunit\u00e9s.",
        axe5_frequence: "La perte est l'oppos\u00e9 de la mission du khalifa. Celui qui est en perte ne construit pas la civilisation, n'\u00e9tablit pas la justice, n'emp\u00eache pas la corruption. La perte est l'\u00e9tat de celui qui laisse le temps passer sans remplir sa mission. Le verset 3 confirme que le salut passe par l'action collective \u2014 ce qui est exactement la mission du khalifa."
      },
      "\u00c9garement": {
        status: "peu_probable",
        senses: ["\u00eatre dans l'erreur", "\u00eatre tromp\u00e9"],
        proof_ctx: "L'\u00e9garement est une d\u00e9viation de direction \u2014 on quitte le bon chemin. La perte est une diminution de substance \u2014 on perd ce qu'on avait. Le verset dit fi khusr (dans la perte), pas fi dalal (\u00e9garement). Le texte parle de ce que l'humain PERD dans le temps, pas de la direction qu'il prend. De plus, les conditions du salut au verset 3 (croire, agir, recommander) sont des actes positifs qui remplissent, pas des corrections de direction. La perte est un vide que les actes remplissent, l'\u00e9garement est une d\u00e9viation qu'on corrige.",
        axe1_verset: "Le verset dit que l'humain est \u00ab dans \u00bb (fi) quelque chose. Fi + perte = immerg\u00e9 dans un processus de diminution. Fi + \u00e9garement = immerg\u00e9 dans une mauvaise direction. Les deux sont possibles, mais le verset 3 donne des conditions de \u00ab remplissage \u00bb (foi, action, recommandation), ce qui correspond mieux \u00e0 la perte (on remplit ce qui a \u00e9t\u00e9 vid\u00e9) qu'\u00e0 l'\u00e9garement (on corrige une direction).",
        axe2_voisins: "Le verset 1 jure par le temps. L'\u00e9garement n'a pas de lien sp\u00e9cifique avec le temps \u2014 on peut \u00eatre \u00e9gar\u00e9 en dehors du temps. La perte, en revanche, est intrins\u00e8quement li\u00e9e au temps : le temps qui passe est ce qui produit la perte.",
        axe3_sourate: "La sourate parle de la condition humaine face au temps. Le temps produit la perte, pas l'\u00e9garement. L'\u00e9garement est un choix, la perte est un processus automatique \u2014 le temps vous vide m\u00eame si vous ne choisissez rien.",
        axe4_coherence: "Le Coran distingue khusr (perte) de dalal (\u00e9garement) dans de nombreux contextes. En 1:7, les \u00e9gar\u00e9s (dallin) sont ceux qui ont quitt\u00e9 le chemin. Ici, le texte utilise khusr, pas dalal \u2014 c'est une perte de substance, pas de direction.",
        axe5_frequence: "L'\u00e9garement est un d\u00e9faut d'orientation. La perte est un d\u00e9faut de substance. La mission du khalifa exige \u00e0 la fois une bonne direction et une substance (des actes). Le verset 3 insiste sur les actes (agir, recommander) plus que sur la direction \u2014 c'est la perte qui est en jeu."
      },
      "Destruction": {
        status: "peu_probable",
        senses: ["faire p\u00e9rir", "perdition"],
        proof_ctx: "La destruction est ponctuelle et totale \u2014 quand quelque chose est d\u00e9truit, c'est fini. La perte est progressive et continue \u2014 on peut \u00eatre en perte longtemps sans \u00eatre d\u00e9truit. Le verset dit fi khusr (dans la perte) avec la pr\u00e9position fi qui indique un \u00e9tat dans lequel on baigne, pas un \u00e9v\u00e9nement qui survient. Si c'\u00e9tait la destruction, le verset dirait \u00ab l'humain est d\u00e9truit \u00bb (au pass\u00e9), pas \u00ab l'humain est DANS la destruction \u00bb (en cours). De plus, le verset 3 donne des exceptions \u2014 ce qui implique que la perte est r\u00e9versible, pas la destruction.",
        axe1_verset: "Le verset dit fi khusr. La pr\u00e9position fi indique un \u00e9tat dans lequel on est immerg\u00e9. On peut \u00eatre immerg\u00e9 dans la perte (processus progressif), mais \u00eatre immerg\u00e9 dans la destruction est paradoxal \u2014 la destruction est un point final, pas un \u00e9tat dans lequel on s\u00e9journe.",
        axe2_voisins: "Le verset 3 donne des conditions pour \u00e9chapper \u00e0 la perte. L'existence d'exceptions implique que la perte est r\u00e9versible. La destruction n'est pas r\u00e9versible \u2014 on n'\u00e9chappe pas \u00e0 ce qui est d\u00e9j\u00e0 d\u00e9truit.",
        axe3_sourate: "La sourate pose un cadre (le temps), un \u00e9tat (la perte), et une solution (les quatre conditions). Ce sch\u00e9ma est celui d'un processus r\u00e9versible, pas d'une catastrophe finale.",
        axe4_coherence: "Le Coran utilise halak et tabab pour la destruction finale. Khusr d\u00e9signe la perte progressive, pas l'an\u00e9antissement. En 111:1, tabbat est utilis\u00e9 pour la perdition de quelqu'un \u2014 c'est un mot diff\u00e9rent de khusr.",
        axe5_frequence: "La destruction emp\u00eache la mission du khalifa d\u00e9finitivement. La perte la retarde progressivement. La sourate offre une solution (verset 3), ce qui correspond \u00e0 un processus r\u00e9versible (la perte), pas \u00e0 un \u00e9tat final (la destruction)."
      }
    }
  }, 4);

  // verse_analyses
  const translation_arab = "L'\u00eatre humain est bel et bien dans la perte.";
  const full_translation = "L'homme est certes, en perdition,";
  const translation_explanation = `\u00a7DEMARCHE\u00a7
Le verset 103:2 contient deux mots importants et deux particules.

**inna** (\u0625\u0650\u0646\u0651\u064e) est une particule d'insistance qui se traduit par \u00ab certes \u00bb, \u00ab bel et bien \u00bb. Elle met le nom qui suit \u00e0 l'accusatif et insiste sur la v\u00e9rit\u00e9 de ce qui va \u00eatre dit. Ce n'est pas une opinion \u2014 c'est un constat affirm\u00e9 avec force.

**al-insan** (\u0627\u0644\u0625\u0646\u0633\u0627\u0646) est un nom d\u00e9fini par l'article al-. Le nom d\u00e9fini ici est g\u00e9n\u00e9rique \u2014 il d\u00e9signe l'\u00eatre humain en tant qu'esp\u00e8ce, pas un individu en particulier. D'apr\u00e8s les sources \u00e9tymologiques, la racine alif-nun-sin donne le sens de familiarit\u00e9, sociabilit\u00e9. L'humain est l'\u00eatre sociable par nature \u2014 celui qui ne peut pas vivre seul. L'accusatif (al-insana) est impos\u00e9 par inna.

**la-fi** (\u0644\u064e\u0641\u0650\u064a) combine le lam d'insistance (certes) et la pr\u00e9position fi (dans). C'est une double insistance \u2014 inna insiste d\u00e9j\u00e0, le lam renforce encore. La pr\u00e9position fi signifie \u00ab dans \u00bb au sens d'immersion : l'humain est PLONG\u00c9 dans la perte, pas simplement \u00ab en \u00bb perte comme un \u00e9tat passager.

**khusr** (\u062e\u064f\u0633\u0652\u0631) est un nom ind\u00e9fini (sans al-). L'ind\u00e9finition ici donne un sens de grandeur et d'intensit\u00e9 \u2014 pas \u00ab la perte \u00bb pr\u00e9cise mais \u00ab une perte \u00bb immense et ind\u00e9termin\u00e9e. D'apr\u00e8s les sources \u00e9tymologiques, la racine kha-sin-ra d\u00e9signe le mouvement par lequel ce qui \u00e9tait \u00e0 soi s'\u00e9chappe vers le dehors \u2014 la substance se vide progressivement.

La structure grammaticale est une phrase nominale (jumlat ismiyya) introduite par inna : inna + sujet + pr\u00e9dicat. Cette structure exprime un \u00e9tat permanent, pas un \u00e9v\u00e9nement ponctuel. L'\u00eatre humain EST dans la perte par d\u00e9faut \u2014 c'est sa condition naturelle tant qu'il n'agit pas autrement (verset 3).

\u00a7JUSTIFICATION\u00a7
**\u00eatre humain** \u2014 Le sens retenu est \u00ab Familiarit\u00e9/Sociabilit\u00e9 \u00bb. Le mot \u00ab \u00eatre humain \u00bb est choisi car c'est l'expression la plus courante en fran\u00e7ais pour d\u00e9signer l'esp\u00e8ce humaine dans sa condition existentielle. L'alternative \u00ab homme \u00bb est \u00e9cart\u00e9e car elle exclut les femmes dans l'usage courant. L'alternative \u00ab personne \u00bb est \u00e9cart\u00e9e car elle d\u00e9signe un individu, pas l'esp\u00e8ce. Le terme \u00ab \u00eatre humain \u00bb est neutre, universel et courant.

**perte** \u2014 Le sens retenu est \u00ab Perte/Diminution \u00bb. Le mot \u00ab perte \u00bb est choisi car c'est le terme le plus pr\u00e9cis en fran\u00e7ais pour d\u00e9signer le mouvement par lequel on perd sa substance. L'alternative \u00ab perdition \u00bb est \u00e9cart\u00e9e car elle appartient au registre religieux chr\u00e9tien et \u00e9voque la damnation, pas la diminution progressive. L'alternative \u00ab \u00e9chec \u00bb est \u00e9cart\u00e9e car elle est trop ponctuelle \u2014 on \u00e9choue une fois, on est en perte en permanence.

\u00a7CRITIQUE\u00a7
**perdition vs perte** \u2014 Les traductions courantes donnent \u00ab perdition \u00bb (Hamidullah) pour khusr. Le mot \u00ab perdition \u00bb en fran\u00e7ais vient du vocabulaire religieux chr\u00e9tien et \u00e9voque la damnation \u00e9ternelle, un \u00e9tat final et irr\u00e9versible. Or le texte dit fi khusr (dans une perte) avec un nom ind\u00e9fini et la pr\u00e9position fi (dans) \u2014 c'est un \u00e9tat dans lequel on baigne, pas un verdict final. De plus, le verset 3 donne des conditions pour en sortir, ce qui confirme que c'est un processus r\u00e9versible. L'\u00e9tymologie de la racine kha-sin-ra d\u00e9crit un mouvement progressif de diminution, pas une catastrophe soudaine. \u00ab Perte \u00bb capture cette progressivit\u00e9 sans l'ajout th\u00e9ologique de la damnation.`;

  const segments = [
    { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", position: 1, word_key: null, is_particle: true },
    { fr: "l'\u00eatre humain", pos: "nom", phon: "al-insan", arabic: "\u0671\u0644\u0652\u0625\u0650\u0646\u0633\u064e\u0640\u0670\u0646\u064e", position: 2, word_key: "ans", is_particle: false, sense_retenu: "\u00eatre humain" },
    { fr: "est bel et bien dans", phon: "la-fi", arabic: "\u0644\u064e\u0641\u0650\u064a", position: 3, word_key: null, is_particle: true },
    { fr: "la perte", pos: "nom", phon: "khusr", arabic: "\u062e\u064f\u0633\u0652\u0631\u064d", position: 4, word_key: "khsr", is_particle: false, sense_retenu: "perte" }
  ];

  const { error: vaErr } = await sb.from('verse_analyses').update({
    translation_arab, translation_explanation, segments, full_translation
  }).eq('verse_id', verse_id);
  console.log('  Updated verse_analyses', vaErr?.message || 'OK');

  // Word daily for ans
  await insertDaily(866, [
    { analysis_id: 866, sense: '\u00eatre humain', arabic: '\u0627\u0646\u0633', phon: 'ins', french: "L'\u00eatre humain est un \u00eatre sociable \u2014 il a besoin des autres pour s'\u00e9panouir." },
    { analysis_id: 866, sense: '\u00eatre humain', arabic: '\u0627\u0646\u0633', phon: 'ins', french: "Tu es quelqu'un de familier \u2014 les gens se sentent \u00e0 l'aise avec toi." },
    { analysis_id: 866, sense: '\u00eatre humain', arabic: '\u0627\u0646\u0633', phon: 'ins', french: "On n'est pas faits pour vivre seuls \u2014 on a besoin de compagnie." }
  ]);

  // Word daily for khsr
  await insertDaily(431, [
    { analysis_id: 431, sense: 'perte', arabic: '\u062e\u0633\u0631', phon: 'khusr', french: "Il a perdu tout son argent dans cette affaire \u2014 c'est une perte s\u00e8che." },
    { analysis_id: 431, sense: 'perte', arabic: '\u062e\u0633\u0631', phon: 'khusr', french: "Ne perds pas ton temps avec des b\u00eatises \u2014 chaque minute compte." },
    { analysis_id: 431, sense: 'perte', arabic: '\u062e\u0633\u0631', phon: 'khusr', french: "C'est une perte de ne pas avoir profit\u00e9 de cette occasion quand elle \u00e9tait l\u00e0." }
  ]);

  console.log('VERSET 103:2 \u2014 TERMIN\u00c9');
  console.log('  al-insan (ans) \u2192 sens "Familiarit\u00e9/Sociabilit\u00e9" \u2192 mot fran\u00e7ais "\u00eatre humain"');
  console.log('  khusr (khsr) \u2192 sens "Perte/Diminution" \u2192 mot fran\u00e7ais "perte"');
  console.log('  Traduction : "L\'\u00eatre humain est bel et bien dans la perte."');
}

async function verse103_3() {
  console.log('\n=== VERSET 103:3 ===');
  const verse_id = 6179;

  // === amanu (amn, id=287) — verbe accompli, forme IV ===
  await upsertVWA(verse_id, 'amn', 'confiance', {
    sense_chosen: "confiance",
    concept_chosen: "S\u00e9curit\u00e9/Confiance",
    concepts: {
      "S\u00e9curit\u00e9/Confiance": {
        status: "retenu",
        senses: ["\u00eatre en s\u00e9curit\u00e9", "se sentir en s\u00e9curit\u00e9", "faire confiance", "confier", "fid\u00e8le", "lieu s\u00fbr"],
        proof_ctx: "Le sens retenu est \u00ab S\u00e9curit\u00e9/Confiance \u00bb. Le verbe amanu est \u00e0 la forme IV (af'ala), qui signifie \u00ab accorder/faire quelque chose \u00bb. La forme IV de a-m-n est \u00ab accorder la confiance, accorder la s\u00e9curit\u00e9 \u00bb. Le verbe est au pass\u00e9 accompli (ils ont accord\u00e9 la confiance), ce qui indique un acte achev\u00e9 et d\u00e9cisif. La s\u00e9curit\u00e9/confiance est un \u00e9tat int\u00e9rieur de tranquillit\u00e9 qui se manifeste par l'adh\u00e9sion. Distinction avec \u00ab Foi/Adh\u00e9sion \u00bb : la foi est l'acte de conviction int\u00e9rieure dirig\u00e9 vers l'ext\u00e9rieur \u2014 elle implique une d\u00e9claration et des actes. La s\u00e9curit\u00e9/confiance est l'\u00e9tat fondamental qui pr\u00e9c\u00e8de la foi : avant de croire, on accorde sa confiance. La confiance est la base de la foi, pas son synonyme. Le verset dit amanu (ils ont accord\u00e9 la confiance), pas sadaquu (ils ont cru). Distinction avec \u00ab Garantie/Protection \u00bb : la garantie est l'acte de prot\u00e9ger autrui. Le verset d\u00e9crit des gens qui accordent leur confiance, pas qui prot\u00e8gent les autres.",
        axe1_verset: "Le verset 3 \u00e9num\u00e8re quatre conditions pour \u00e9chapper \u00e0 la perte : accorder la confiance (amanu), agir en bien (amilu s-salihat), se recommander mutuellement la v\u00e9rit\u00e9 (tawasaw bil-haqq) et se recommander la constance (tawasaw bis-sabr). La confiance est la premi\u00e8re condition \u2014 elle pr\u00e9c\u00e8de l'action. On accorde d'abord sa confiance, puis on agit en cons\u00e9quence. Le champ lexical va du plus int\u00e9rieur (confiance) au plus collectif (recommandation mutuelle).",
        axe2_voisins: "Le verset 2 constate la perte universelle. Le verset 3 donne les exceptions. La confiance est le premier pas pour sortir de la perte \u2014 sans confiance, pas d'action ni de recommandation mutuelle. La progression est logique : d'abord accorder la confiance, puis agir, puis se soutenir mutuellement.",
        axe3_sourate: "La sourate traite de la condition humaine face au temps. La confiance est le premier \u00e9l\u00e9ment de la solution \u2014 celui qui accorde sa confiance (en Dieu, en la v\u00e9rit\u00e9, en l'avenir) sort de l'\u00e9tat de perte parce qu'il a un point d'ancrage. Le th\u00e8me de la sourate est que sans confiance, l'humain est condamn\u00e9 \u00e0 la perte dans le temps.",
        axe4_coherence: "Le Coran utilise amana (forme IV) dans de nombreux versets : 2:3 (ceux qui accordent la confiance \u00e0 l'invisible), 2:285 (le messager a accord\u00e9 la confiance). La forme IV ajoute l'id\u00e9e de \u00ab accorder, faire \u00bb \u2014 ce n'est pas un \u00e9tat passif mais un acte d\u00e9lib\u00e9r\u00e9. La racine a-m-n est le fondement de la s\u00e9curit\u00e9 dans le Coran : amn est la paix, aman est la s\u00e9curit\u00e9, mu'min est celui qui accorde la confiance.",
        axe5_frequence: "Accorder la confiance est le fondement de la mission du khalifa. Sans confiance, il n'y a pas de coop\u00e9ration, pas de civilisation, pas de justice. La confiance est ce qui permet aux humains de travailler ensemble pour emp\u00eacher la corruption. Le verset 3 confirme que le salut est collectif \u2014 et la confiance est le ciment du collectif."
      },
      "Foi/Adh\u00e9sion": {
        status: "probable",
        senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
        proof_ctx: "La foi est l'acte de conviction int\u00e9rieure qui se manifeste par une d\u00e9claration et des actes. C'est un mouvement de l'int\u00e9rieur vers l'ext\u00e9rieur. Elle est tr\u00e8s proche de la confiance mais ajoute la dimension de conviction et de d\u00e9claration. La distinction est subtile : la confiance est l'\u00e9tat fondamental (accorder la s\u00e9curit\u00e9 int\u00e9rieure), la foi est l'expression de cet \u00e9tat vers l'ext\u00e9rieur. Le verset dit amanu (ils ont fait amn, ils ont accord\u00e9 la s\u00e9curit\u00e9/confiance) \u2014 la forme IV insiste sur l'acte d'accorder, pas sur la conviction d\u00e9clarative.",
        axe1_verset: "Le verset combine accorder la confiance et agir en bien. La foi s'inscrirait bien dans cette s\u00e9quence, mais le texte utilise la forme IV qui insiste sur l'acte d'accorder, pas sur la d\u00e9claration de conviction. Le champ lexical d'action (agir, recommander) sugg\u00e8re un accent sur l'acte concret d'accorder sa confiance plut\u00f4t que sur l'\u00e9tat de conviction.",
        axe2_voisins: "La foi serait coh\u00e9rente avec les conditions du salut. Mais le contexte des versets voisins (perte, temps) oriente vers un acte fondamental et concret (accorder la confiance) plut\u00f4t que vers un \u00e9tat d\u00e9claratif (avoir la foi).",
        axe3_sourate: "La sourate est existentielle et pratique. Elle d\u00e9crit des actes, pas des \u00e9tats de conviction. La foi est possible mais la confiance est plus concr\u00e8te et plus en accord avec le ton de la sourate.",
        axe4_coherence: "Le Coran utilise amana pour les deux r\u00e9alit\u00e9s (confiance et foi). Mais la forme IV (af'ala) insiste sur l'acte d'accorder plut\u00f4t que sur l'\u00e9tat de conviction. Le Coran diff\u00e9rencie parfois amana bi (accorder la confiance \u00e0) de sadaqa (confirmer/croire).",
        axe5_frequence: "La foi contribue \u00e0 la mission du khalifa comme fondement de l'action. Elle est tr\u00e8s proche de la confiance dans cette fonction. La diff\u00e9rence est que la confiance est l'acte fondamental, la foi est son expression."
      },
      "Garantie/Protection": {
        status: "peu_probable",
        senses: ["prot\u00e9ger", "accorder la s\u00e9curit\u00e9"],
        proof_ctx: "La garantie est l'acte de prot\u00e9ger autrui. Le verset d\u00e9crit des gens qui \u00e9chappent \u00e0 la perte \u2014 ils accordent leur confiance, ils ne prot\u00e8gent pas quelqu'un d'autre dans ce contexte. La protection est un acte ext\u00e9rieur dirig\u00e9 vers l'autre. Le verset parle d'un acte int\u00e9rieur fondamental (accorder la confiance) suivi d'actions ext\u00e9rieures (agir, recommander).",
        axe1_verset: "Le verset \u00e9num\u00e8re quatre conditions : accorder (confiance), agir, recommander la v\u00e9rit\u00e9, recommander la constance. La protection n'est pas dans cette s\u00e9quence \u2014 aucun des autres mots du verset ne parle de prot\u00e9ger quelqu'un.",
        axe2_voisins: "Les versets pr\u00e9c\u00e9dents parlent de temps et de perte. Les conditions du salut sont des actes personnels et collectifs, pas des actes de protection d'autrui.",
        axe3_sourate: "La sourate ne parle pas de protection mais de condition humaine face au temps. La protection n'est pas un th\u00e8me de cette sourate.",
        axe4_coherence: "Le Coran utilise amana au sens de protection dans certains contextes (9:6, accorder la protection au polyth\u00e9iste qui demande asile). Mais ici, sans objet pr\u00e9cis, le sens est plus fondamental : accorder la confiance, pas accorder la protection.",
        axe5_frequence: "La protection est un acte important dans la mission du khalifa, mais le verset ne parle pas de protection \u2014 il parle du fondement int\u00e9rieur qui pr\u00e9c\u00e8de l'action."
      },
      "Sens isol\u00e9/Amen": {
        status: "nul",
        senses: ["amen"],
        proof_ctx: "Le sens amen est un usage liturgique sp\u00e9cifique, incompatible avec la forme IV d'un verbe au pass\u00e9 accompli avec un sujet pluriel."
      }
    }
  }, 3);

  // === amilu (eml, id=393) — verbe accompli, forme I ===
  await upsertVWA(verse_id, 'eml', 'action', {
    sense_chosen: "action",
    concept_chosen: "Action/Oeuvre",
    concepts: {
      "Action/Oeuvre": {
        status: "retenu",
        senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
        proof_ctx: "Le sens retenu est \u00ab Action/Oeuvre \u00bb. Le verbe amilu est au pass\u00e9 accompli (ils ont agi) \u2014 un acte achev\u00e9 et concret. L'action est un acte ext\u00e9rieur de production d'effort pour transformer la r\u00e9alit\u00e9. Le verset pr\u00e9cise que ces actions sont as-salihat (les bonnes, les conformes \u00e0 l'ordre juste). L'action est directionnelle : elle sort de celui qui agit et transforme le monde. C'est la deuxi\u00e8me condition du salut apr\u00e8s la confiance.",
        axe1_verset: "Le verset \u00e9num\u00e8re quatre conditions. L'action vient en deuxi\u00e8me, apr\u00e8s la confiance. Le champ lexical montre une progression logique : d'abord un fondement int\u00e9rieur (confiance), puis une manifestation ext\u00e9rieure (action), puis un \u00e9change collectif (recommandation mutuelle). L'action est le pont entre l'int\u00e9rieur et le collectif.",
        axe2_voisins: "Le verset 2 constate la perte. Le verset 3 y rem\u00e9die par quatre conditions. L'action est le rempl\u00e8re concret de la perte \u2014 ce que le temps vide, l'action remplit. La perte est un processus passif (le temps vide), l'action est son oppos\u00e9 actif (l'humain remplit).",
        axe3_sourate: "La sourate est centr\u00e9e sur la condition humaine face au temps. L'action est ce qui donne substance \u00e0 la vie dans le temps. Sans action, le temps est vide et produit la perte. Avec action (bonne), le temps est rempli et la perte est \u00e9vit\u00e9e.",
        axe4_coherence: "Le Coran associe fr\u00e9quemment amanu (accorder la confiance) et amilu s-salihat (agir en bien) dans une paire indissociable : 2:25, 2:82, 4:57, 18:30, etc. C'est la formule la plus r\u00e9currente du Coran \u2014 la confiance et l'action vont toujours ensemble. L'un sans l'autre est insuffisant.",
        axe5_frequence: "L'action est au c\u0153ur de la mission du khalifa. La justice, la civilisation et l'emp\u00eachement de la corruption sont des actions concr\u00e8tes, pas des \u00e9tats de conviction. Le verset confirme que le salut passe par l'action \u2014 pas seulement par la confiance int\u00e9rieure."
      },
      "Sens isol\u00e9/Gouverneur": {
        status: "nul",
        senses: ["gouverneur"],
        proof_ctx: "Le mot gouverneur est un titre, incompatible avec un verbe au pass\u00e9 accompli pluriel (amilu). Le contexte est celui d'une action, pas d'un titre."
      }
    }
  }, 4);

  // === as-salihat (slh, id=326) — nom d\u00e9fini, participe actif f\u00e9minin pluriel ===
  await upsertVWA(verse_id, 'slh', 'conformes', {
    sense_chosen: "conformes",
    concept_chosen: "Bont\u00e9/Rectitude",
    concepts: {
      "Bont\u00e9/Rectitude": {
        status: "retenu",
        senses: ["\u00eatre bon", "rectitude", "r\u00e9parer", "r\u00e9concilier", "oeuvre bonne", "vertueux"],
        proof_ctx: "Le sens retenu est \u00ab Bont\u00e9/Rectitude \u00bb. Le mot as-salihat est un participe actif f\u00e9minin pluriel d\u00e9fini (al-). Le participe actif indique que les \u0153uvres FONT activement le bien \u2014 elles ne sont pas bonnes passivement, elles produisent activement la rectitude. D'apr\u00e8s les sources \u00e9tymologiques, la racine sad-lam-ha donne le sens d'\u00eatre conforme \u00e0 l'ordre juste, r\u00e9parer ce qui est cass\u00e9, r\u00e9concilier ce qui est divis\u00e9. La bont\u00e9 n'est pas une qualit\u00e9 sentimentale \u2014 c'est un \u00e9tat objectif de conformit\u00e9 \u00e0 ce qui est juste. L'article al- rend ces \u0153uvres connues et identifiables \u2014 ce ne sont pas n'importe quelles \u0153uvres, mais LES \u0153uvres qui r\u00e9parent, r\u00e9concilient, conforment \u00e0 l'ordre juste.",
        axe1_verset: "Le mot qualifie les actions (amilu) \u2014 ils ont agi les bonnes (actions). Le champ lexical est coh\u00e9rent : confiance + actions conformes + recommandation mutuelle. As-salihat est le compl\u00e9ment d'objet de amilu, il d\u00e9crit la nature des actions qui \u00e9vitent la perte.",
        axe2_voisins: "Le verset 2 parle de perte. Les actions conformes sont ce qui comble la perte \u2014 elles r\u00e9parent ce que le temps d\u00e9truit. Le mot salih contient l'id\u00e9e de r\u00e9paration, de remise en ordre.",
        axe3_sourate: "La sourate oppose la perte (v2) aux conditions du salut (v3). Les actions conformes sont la manifestation concr\u00e8te de la confiance \u2014 on accorde la confiance (int\u00e9rieur) puis on agit conform\u00e9ment (ext\u00e9rieur). Le th\u00e8me de la sourate est l'action juste face au temps qui passe.",
        axe4_coherence: "Le Coran utilise as-salihat des dizaines de fois, toujours comme compl\u00e9ment de amilu. C'est la paire la plus r\u00e9currente du Coran : amanu wa-amilu s-salihat (ils ont accord\u00e9 la confiance et agi en conformit\u00e9). Cela confirme que les salihat sont des actions concr\u00e8tes de mise en conformit\u00e9 avec l'ordre juste.",
        axe5_frequence: "Les actions conformes sont la d\u00e9finition m\u00eame de la mission du khalifa : \u00e9tablir la justice, construire la civilisation, emp\u00eacher la corruption. Chaque action conforme remplit un morceau de cette mission."
      },
      "Sens isol\u00e9/Paix": {
        status: "nul",
        senses: ["paix"],
        proof_ctx: "La paix est un \u00e9tat, pas une action. Le mot est un participe actif pluriel (celles qui FONT la rectitude), ce qui impose un sens d'action, pas d'\u00e9tat."
      }
    }
  }, 5);

  // === tawasaw (wsy, id=813) — verbe accompli, forme VI ===
  await upsertVWA(verse_id, 'wsy', 'recommandation', {
    sense_chosen: "recommandation",
    concept_chosen: "Recommandation/Injonction",
    concepts: {
      "Recommandation/Injonction": {
        status: "retenu",
        senses: ["recommander", "enjoindre", "faire un testament", "charger quelqu'un d'une mission"],
        proof_ctx: "Le sens retenu est \u00ab Recommandation/Injonction \u00bb. Le verbe tawasaw est \u00e0 la forme VI (tafa'alu), qui exprime la r\u00e9ciprocit\u00e9 \u2014 ils se sont recommand\u00e9 mutuellement. Ce n'est pas une recommandation unilat\u00e9rale mais un \u00e9change r\u00e9ciproque : chacun recommande aux autres et re\u00e7oit leurs recommandations. La recommandation sort de celui qui la donne et atteint celui qui la re\u00e7oit \u2014 c'est directionnel et charg\u00e9 de responsabilit\u00e9. La forme VI en fait un acte collectif. Distinction avec \u00ab Liaison/Connexion \u00bb : la liaison est l'acte de joindre deux choses, la recommandation est l'acte de transmettre une parole importante. Le verset pr\u00e9cise l'objet de la recommandation (la v\u00e9rit\u00e9, la constance) \u2014 c'est une transmission de parole, pas une jonction physique.",
        axe1_verset: "Le verset \u00e9num\u00e8re quatre conditions. La recommandation mutuelle vient en troisi\u00e8me et quatri\u00e8me position, apr\u00e8s la confiance et l'action. C'est la dimension collective du salut \u2014 apr\u00e8s le fondement int\u00e9rieur (confiance) et l'action individuelle (agir en bien), vient l'entraide collective (se recommander mutuellement). Le champ lexical progresse du personnel au collectif.",
        axe2_voisins: "Le verset 2 parle de la perte de l'\u00eatre humain (sociable par nature). La recommandation mutuelle est l'acte social par excellence \u2014 elle r\u00e9pond directement \u00e0 la nature sociable de l'insan. L'\u00eatre sociable qui se recommande mutuellement le bien \u00e9chappe \u00e0 la perte.",
        axe3_sourate: "La sourate oppose la perte passive (le temps vide) au salut actif (les quatre conditions). La recommandation mutuelle est la dimension collective du salut \u2014 elle montre que le salut n'est pas individuel. Le th\u00e8me de la sourate est que l'humain ne peut pas se sauver seul.",
        axe4_coherence: "Le Coran utilise tawasi (forme VI de w-s-y) dans 90:17 avec la m\u00eame structure : tawasaw bis-sabr wa-tawasaw bil-marhama (ils se sont recommand\u00e9 mutuellement la constance et la mis\u00e9ricorde). Le parall\u00e8le confirme le sens de recommandation mutuelle. Le Coran insiste sur la dimension collective de la responsabilit\u00e9 humaine.",
        axe5_frequence: "La recommandation mutuelle est au c\u0153ur de la mission du khalifa. La justice et la civilisation ne se construisent pas seul \u2014 elles exigent que les humains se rappellent mutuellement la v\u00e9rit\u00e9 et la constance. C'est l'acte fondamental de l'entraide dans le bien."
      },
      "Liaison/Connexion": {
        status: "peu_probable",
        senses: ["lier ensemble", "terre fertile continue"],
        proof_ctx: "La liaison est l'acte de joindre deux choses. Le verset pr\u00e9cise l'objet de l'acte (bil-haqq, par la v\u00e9rit\u00e9) avec la pr\u00e9position bi \u2014 c'est une recommandation PAR la v\u00e9rit\u00e9, pas une liaison DE la v\u00e9rit\u00e9. La forme VI (r\u00e9ciprocit\u00e9) s'applique mieux \u00e0 la recommandation (on se recommande mutuellement) qu'\u00e0 la liaison (on se lie mutuellement ne fonctionne pas aussi naturellement avec bi + objet abstrait).",
        axe1_verset: "Le verset dit tawasaw bil-haqq. Bi + haqq avec le verbe de liaison donnerait \u00ab ils se sont li\u00e9s par la v\u00e9rit\u00e9 \u00bb. C'est possible mais moins naturel que \u00ab ils se sont recommand\u00e9 mutuellement la v\u00e9rit\u00e9 \u00bb. Le deuxi\u00e8me tawasaw avec bis-sabr renforce le sens de recommandation : se lier par la constance est bancal, se recommander la constance est naturel.",
        axe2_voisins: "Le contexte de la sourate est celui d'actes concrets (croire, agir, recommander). La liaison est plus abstraite et moins active que la recommandation.",
        axe3_sourate: "La sourate insiste sur des actions. La recommandation est une action (parler, transmettre), la liaison est un \u00e9tat (le fait d'\u00eatre li\u00e9s).",
        axe4_coherence: "Le Coran utilise wasiyya (recommandation, testament) dans de nombreux versets (2:180, 4:11, 36:2). La racine w-s-y est tr\u00e8s associ\u00e9e \u00e0 la recommandation dans le Coran.",
        axe5_frequence: "La liaison est importante mais passive. La recommandation est active et directionnelle \u2014 elle exige un effort de transmission."
      }
    }
  }, 6);

  // === al-haqq (hqq, id=409) — nom d\u00e9fini ===
  await upsertVWA(verse_id, 'hqq', 'v\u00e9rit\u00e9', {
    sense_chosen: "v\u00e9rit\u00e9",
    concept_chosen: "V\u00e9rit\u00e9/R\u00e9alit\u00e9",
    concepts: {
      "V\u00e9rit\u00e9/R\u00e9alit\u00e9": {
        status: "retenu",
        senses: ["\u00eatre vrai", "v\u00e9rit\u00e9", "r\u00e9alit\u00e9", "droit"],
        proof_ctx: "Le sens retenu est \u00ab V\u00e9rit\u00e9/R\u00e9alit\u00e9 \u00bb. Al-haqq est un nom d\u00e9fini par al-, ce qui en fait LA v\u00e9rit\u00e9 connue et identifiable. D'apr\u00e8s les sources \u00e9tymologiques, la racine ha-qaf-qaf donne le sens de ce qui est vrai, ce qui correspond \u00e0 la r\u00e9alit\u00e9, ce qui est un droit. La v\u00e9rit\u00e9 est ext\u00e9rieure et permanente \u2014 elle existe ind\u00e9pendamment de celui qui la reconna\u00eet. Le verset dit tawasaw bil-haqq (ils se sont recommand\u00e9 mutuellement LA v\u00e9rit\u00e9) \u2014 l'article al- rend la v\u00e9rit\u00e9 absolue, pas relative. Distinction avec \u00ab Obligation/N\u00e9cessit\u00e9 \u00bb : l'obligation est ce qui s'impose, la v\u00e9rit\u00e9 est ce qui est. L'obligation d\u00e9rive de la v\u00e9rit\u00e9 \u2014 on a le devoir parce que la v\u00e9rit\u00e9 existe. Le verset parle de se recommander mutuellement la v\u00e9rit\u00e9 (ce qui est), pas le devoir (ce qu'il faut faire).",
        axe1_verset: "Le verset dit tawasaw bil-haqq. Le mot est compl\u00e9ment de la recommandation mutuelle. Les gens se recommandent mutuellement la v\u00e9rit\u00e9 \u2014 c'est un acte de rappel collectif de ce qui est vrai. Le champ lexical est coh\u00e9rent : confiance + action + recommandation de la v\u00e9rit\u00e9 + recommandation de la constance. La v\u00e9rit\u00e9 est l'objet de la troisi\u00e8me condition du salut.",
        axe2_voisins: "Le verset 2 parle de la perte. Se recommander la v\u00e9rit\u00e9 est un rem\u00e8de collectif \u00e0 la perte \u2014 quand les humains se rappellent mutuellement ce qui est vrai, ils \u00e9vitent de se perdre dans le faux.",
        axe3_sourate: "La sourate oppose la perte au salut par l'action et la solidarit\u00e9. La v\u00e9rit\u00e9 est le contenu de cette solidarit\u00e9 \u2014 on ne se recommande pas n'importe quoi, on se recommande ce qui est vrai.",
        axe4_coherence: "Le Coran utilise al-haqq comme r\u00e9alit\u00e9 absolue dans de nombreux versets : 2:42 (ne m\u00e9langez pas la v\u00e9rit\u00e9 avec le faux), 17:81 (la v\u00e9rit\u00e9 est venue et le faux a disparu). Al-haqq est un des noms de Dieu dans le Coran \u2014 Dieu EST la v\u00e9rit\u00e9/r\u00e9alit\u00e9. Se recommander la v\u00e9rit\u00e9, c'est se rappeler mutuellement ce qui est r\u00e9el.",
        axe5_frequence: "La v\u00e9rit\u00e9 est le fondement de la justice. La mission du khalifa est d'\u00e9tablir la justice \u2014 et la justice repose sur la v\u00e9rit\u00e9. Se recommander mutuellement la v\u00e9rit\u00e9 est l'acte fondamental d'une soci\u00e9t\u00e9 juste."
      },
      "Obligation/N\u00e9cessit\u00e9": {
        status: "probable",
        senses: ["devoir", "m\u00e9riter", "\u00eatre obligatoire"],
        proof_ctx: "L'obligation est ce qui s'impose par la nature des choses. Se recommander mutuellement le devoir est possible et coh\u00e9rent. Mais le verset dit bil-haqq avec l'article al- \u2014 c'est LA r\u00e9alit\u00e9, pas LE devoir. La distinction est que la v\u00e9rit\u00e9 est un constat (ce qui est), l'obligation est une injonction (ce qu'il faut faire). Le verset parle de rappeler ce qui est vrai, pas d'imposer ce qu'il faut faire \u2014 la nuance est que la recommandation de la v\u00e9rit\u00e9 est p\u00e9dagogique, celle du devoir est autoritaire.",
        axe1_verset: "Le verset \u00e9num\u00e8re des conditions de salut. Se recommander le devoir serait coh\u00e9rent comme troisi\u00e8me condition. Mais le parall\u00e8le avec le quatri\u00e8me (recommander la constance/sabr) sugg\u00e8re que l'objet est une r\u00e9alit\u00e9 qu'on rappelle (v\u00e9rit\u00e9, constance), pas une action qu'on impose (devoir).",
        axe2_voisins: "Le contexte est celui d'un rappel mutuel, pas d'une injonction. La recommandation mutuelle (forme VI) implique l'\u00e9galit\u00e9 entre les participants \u2014 on ne s'impose pas mutuellement le devoir, on se rappelle mutuellement la v\u00e9rit\u00e9.",
        axe3_sourate: "La sourate parle de la condition humaine face au temps. Le devoir est possible mais la v\u00e9rit\u00e9 est plus fondamentale \u2014 le devoir d\u00e9coule de la v\u00e9rit\u00e9, pas l'inverse.",
        axe4_coherence: "Le Coran utilise haqq au sens de v\u00e9rit\u00e9/r\u00e9alit\u00e9 beaucoup plus souvent qu'au sens de devoir/obligation. Dans le contexte de la recommandation mutuelle (90:17), le parall\u00e8le est avec la mis\u00e9ricorde \u2014 qui est une r\u00e9alit\u00e9, pas un devoir.",
        axe5_frequence: "Le devoir contribue \u00e0 la mission du khalifa, mais la v\u00e9rit\u00e9 en est le fondement plus profond."
      },
      "Sens isol\u00e9/Se": {
        status: "nul",
        senses: ["se r\u00e9aliser"],
        proof_ctx: "Se r\u00e9aliser est un verbe pronominal, incompatible avec un nom d\u00e9fini pr\u00e9c\u00e9d\u00e9 de bi dans le contexte d'une recommandation mutuelle."
      },
      "Sens isol\u00e9/V\u00e9rifier": {
        status: "nul",
        senses: ["v\u00e9rifier"],
        proof_ctx: "V\u00e9rifier est un acte ponctuel, incompatible avec un nom d\u00e9fini utilis\u00e9 comme objet d'une recommandation mutuelle."
      }
    }
  }, 7);

  // === as-sabr (sbr, id=502) — nom d\u00e9fini ===
  await upsertVWA(verse_id, 'sbr', 'constance', {
    sense_chosen: "constance",
    concept_chosen: "Patience/Endurance",
    concepts: {
      "Patience/Endurance": {
        status: "retenu",
        senses: ["patienter", "endurer", "patience", "retenir"],
        proof_ctx: "Le sens retenu est \u00ab Patience/Endurance \u00bb. As-sabr est un nom d\u00e9fini par al-, ce qui en fait LA constance connue et identifiable. D'apr\u00e8s les sources \u00e9tymologiques, la racine sad-ba-ra donne le sens de retenir, supporter sans fl\u00e9chir, endurer. La patience est un acte int\u00e9rieur de r\u00e9sistance permanente qui se manifeste ext\u00e9rieurement par la constance. Le verset dit tawasaw bis-sabr (ils se sont recommand\u00e9 mutuellement LA constance). C'est la quatri\u00e8me et derni\u00e8re condition du salut \u2014 apr\u00e8s la confiance, l'action et la v\u00e9rit\u00e9, vient la constance. La constance est ce qui permet de tenir dans le temps \u2014 elle boucle la sourate avec le verset 1 (le temps).",
        axe1_verset: "Le verset \u00e9num\u00e8re quatre conditions : confiance, action conforme, recommandation de la v\u00e9rit\u00e9, recommandation de la constance. La constance est la derni\u00e8re condition \u2014 celle qui permet de tenir toutes les autres dans la dur\u00e9e. Le champ lexical boucle avec le temps du verset 1 : la constance est ce qui permet de r\u00e9sister au temps qui vide.",
        axe2_voisins: "Le verset 2 parle de la perte dans le temps. La constance est l'antidote exact de la perte par le temps \u2014 la perte est progressive (le temps vide), la constance est ce qui r\u00e9siste \u00e0 ce vidage. Se recommander mutuellement la constance, c'est se soutenir les uns les autres face au temps qui passe.",
        axe3_sourate: "La sourate boucle : le temps (v1) produit la perte (v2), et les quatre conditions du salut (v3) culminent avec la constance \u2014 qui est la capacit\u00e9 de tenir dans le temps. La constance r\u00e9pond directement au temps : elle est la force qui emp\u00eache le temps de tout emporter.",
        axe4_coherence: "Le Coran utilise sabr dans de nombreux versets : 2:45 (cherchez aide dans la constance et la pri\u00e8re), 2:153 (Dieu est avec les constants), 3:200 (soyez constants, rivalisez de constance). La constance est une vertu centrale du Coran \u2014 elle est souvent associ\u00e9e \u00e0 la v\u00e9rit\u00e9 et \u00e0 l'action dans les conditions du salut. En 90:17, le m\u00eame sch\u00e9ma appara\u00eet : tawasaw bis-sabr (ils se sont recommand\u00e9 la constance).",
        axe5_frequence: "La constance est indispensable \u00e0 la mission du khalifa. La justice, la civilisation et l'emp\u00eachement de la corruption exigent un effort continu dans le temps. Sans constance, m\u00eame les meilleures actions s'arr\u00eatent. La constance est le maintien de l'effort face au temps qui passe."
      },
      "Sens isol\u00e9/Emprisonner": {
        status: "nul",
        senses: ["emprisonner"],
        proof_ctx: "Emprisonner est un acte physique sur une personne. Le verset parle de se recommander mutuellement la constance, pas d'emprisonnement. L'objet de la recommandation est une qualit\u00e9, pas un acte de r\u00e9clusion."
      },
      "Lieu/G\u00e9ographie": {
        status: "nul",
        senses: ["sommet de montagne"],
        proof_ctx: "Un sommet de montagne est un lieu physique, incompatible avec l'objet d'une recommandation mutuelle abstraite."
      }
    }
  }, 9);

  // verse_analyses
  const translation_arab = "Sauf ceux qui ont accord\u00e9 la confiance, agi conform\u00e9ment, et se sont recommand\u00e9 mutuellement la v\u00e9rit\u00e9 et se sont recommand\u00e9 mutuellement la constance.";
  const full_translation = "sauf ceux qui croient et accomplissent les bonnes \u0153uvres, s'enjoignent mutuellement la v\u00e9rit\u00e9 et s'enjoignent mutuellement l'endurance.";
  const translation_explanation = `\u00a7DEMARCHE\u00a7
Le verset 103:3 est une exception au verset 2. Il commence par **illa** (\u0625\u0644\u0651\u0627), la particule d'exception (\u00ab sauf \u00bb), suivie de **alladhina** (\u0627\u0644\u0651\u0630\u064a\u0646\u064e, ceux qui), un pronom relatif pluriel. Le verset \u00e9num\u00e8re ensuite quatre conditions pour \u00e9chapper \u00e0 la perte.

**amanu** (\u0622\u0645\u064e\u0646\u064f\u0648\u0627) est un verbe \u00e0 la forme IV (af'ala), au pass\u00e9 accompli (fait et achev\u00e9), troisi\u00e8me personne du pluriel. La forme IV signifie \u00ab accorder, faire \u00bb \u2014 ici \u00ab ils ont accord\u00e9 la confiance \u00bb. Le pass\u00e9 accompli indique un acte d\u00e9cisif et d\u00e9finitif, pas un processus en cours. La racine alif-mim-nun donne le sens de s\u00e9curit\u00e9, confiance.

**wa-amilu** (\u0648\u064e\u0639\u064e\u0645\u0650\u0644\u064f\u0648\u0627) est un verbe au pass\u00e9 accompli, forme I, troisi\u00e8me personne du pluriel. La racine 'ayn-mim-lam signifie agir, travailler. Le pass\u00e9 accompli indique qu'ils ont agi concr\u00e8tement.

**as-salihat** (\u0627\u0644\u0635\u0651\u0627\u0644\u0650\u062d\u0627\u062a) est un participe actif f\u00e9minin pluriel d\u00e9fini (al-). Un participe actif est une forme qui dit que le sujet FAIT l'action activement et en continu. Le f\u00e9minin pluriel s'accorde avec un sous-entendu (les \u0153uvres, les choses). LES conformes = les (actions) conformes \u00e0 l'ordre juste. D'apr\u00e8s les sources \u00e9tymologiques, la racine sad-lam-ha signifie \u00eatre conforme \u00e0 l'ordre juste, r\u00e9parer ce qui est cass\u00e9.

**wa-tawasaw** (\u0648\u064e\u062a\u064e\u0648\u064e\u0627\u0635\u064e\u0648\u0652\u0627) est un verbe \u00e0 la forme VI (tafa'alu), au pass\u00e9 accompli. La forme VI exprime la r\u00e9ciprocit\u00e9 \u2014 ils se sont fait l'action mutuellement. La racine waw-sad-ya signifie recommander, enjoindre. La forme VI donne : ils se sont recommand\u00e9 mutuellement. Ce verbe appara\u00eet deux fois dans le verset avec deux objets diff\u00e9rents.

**bil-haqq** (\u0628\u0650\u0627\u0644\u0652\u062d\u064e\u0642\u0651\u0650) combine la pr\u00e9position bi (par, au moyen de) et al-haqq (la v\u00e9rit\u00e9, nom d\u00e9fini). D'apr\u00e8s les sources \u00e9tymologiques, la racine ha-qaf-qaf signifie ce qui est vrai, ce qui correspond \u00e0 la r\u00e9alit\u00e9.

**bis-sabr** (\u0628\u0650\u0627\u0644\u0635\u0651\u064e\u0628\u0652\u0631\u0650) combine bi et as-sabr (la constance, nom d\u00e9fini). D'apr\u00e8s les sources \u00e9tymologiques, la racine sad-ba-ra signifie retenir, supporter, endurer sans fl\u00e9chir.

La structure du verset montre une progression : d'abord un acte int\u00e9rieur (accorder la confiance), puis un acte ext\u00e9rieur (agir conform\u00e9ment), puis un acte collectif en deux volets (se recommander mutuellement la v\u00e9rit\u00e9 ET la constance). Le salut n'est pas individuel \u2014 il exige la solidarit\u00e9.

\u00a7JUSTIFICATION\u00a7
**confiance** \u2014 Le sens retenu est \u00ab S\u00e9curit\u00e9/Confiance \u00bb. Le mot \u00ab confiance \u00bb est choisi car la forme IV (accorder) insiste sur l'acte de donner sa confiance, pas sur un \u00e9tat passif. L'alternative \u00ab foi \u00bb est \u00e9cart\u00e9e car elle \u00e9voque un \u00e9tat de conviction d\u00e9claratif (vocabulaire religieux) plut\u00f4t que l'acte fondamental d'accorder sa s\u00e9curit\u00e9 int\u00e9rieure. L'alternative \u00ab croyance \u00bb est \u00e9cart\u00e9e pour la m\u00eame raison. \u00ab Accorder la confiance \u00bb est du fran\u00e7ais courant et capture l'acte d\u00e9lib\u00e9r\u00e9 de la forme IV.

**conform\u00e9ment** \u2014 Le sens retenu est \u00ab Bont\u00e9/Rectitude \u00bb. Le mot \u00ab conform\u00e9ment \u00bb est choisi car la racine s-l-h d\u00e9crit l'\u00e9tat de ce qui est conforme \u00e0 l'ordre juste. L'alternative \u00ab bonnes \u00bb est \u00e9cart\u00e9e car elle est trop subjective \u2014 \u00ab bon \u00bb d\u00e9pend du point de vue, \u00ab conforme \u00bb d\u00e9pend d'un standard objectif. L'alternative \u00ab vertueuses \u00bb est \u00e9cart\u00e9e car c'est du registre litt\u00e9raire.

**v\u00e9rit\u00e9** \u2014 Le sens retenu est \u00ab V\u00e9rit\u00e9/R\u00e9alit\u00e9 \u00bb. Le mot \u00ab v\u00e9rit\u00e9 \u00bb est choisi car c'est le terme le plus courant en fran\u00e7ais pour d\u00e9signer ce qui est vrai et r\u00e9el. L'alternative \u00ab r\u00e9alit\u00e9 \u00bb est \u00e9cart\u00e9e car elle est moins charg\u00e9e moralement \u2014 on se recommande la v\u00e9rit\u00e9 (qui implique un jugement de valeur), pas la r\u00e9alit\u00e9 (qui est neutre). L'alternative \u00ab droit \u00bb est \u00e9cart\u00e9e car elle est trop juridique.

**constance** \u2014 Le sens retenu est \u00ab Patience/Endurance \u00bb. Le mot \u00ab constance \u00bb est choisi car il capture mieux la permanence dans le temps que \u00ab patience \u00bb. L'alternative \u00ab patience \u00bb est \u00e9cart\u00e9e car elle \u00e9voque une attente passive (\u00ab sois patient, \u00e7a va passer \u00bb), alors que sabr est un acte actif de maintien (\u00ab tiens bon, ne l\u00e2che pas \u00bb). L'alternative \u00ab endurance \u00bb est \u00e9cart\u00e9e car elle est trop physique/sportive. \u00ab Constance \u00bb est du fran\u00e7ais courant et d\u00e9signe la capacit\u00e9 de maintenir un effort dans la dur\u00e9e \u2014 ce qui r\u00e9pond directement au temps du verset 1.

\u00a7CRITIQUE\u00a7
**foi vs confiance** \u2014 Les traductions courantes donnent \u00ab croient \u00bb (Hamidullah) pour amanu. Le mot \u00ab croire \u00bb en fran\u00e7ais est charg\u00e9 du vocabulaire religieux chr\u00e9tien (croire en Dieu, profession de foi). Or la racine a-m-n a pour sens premier la s\u00e9curit\u00e9 et la confiance, pas la conviction th\u00e9ologique. La forme IV (af'ala) insiste sur l'acte d'accorder \u2014 \u00ab accorder la confiance \u00bb est plus pr\u00e9cis que \u00ab croire \u00bb. La confiance est l'acte fondamental qui pr\u00e9c\u00e8de toute conviction : avant de croire, on accorde sa confiance. Le mot mu'min (celui qui accorde la confiance/s\u00e9curit\u00e9) est d'ailleurs un des noms de Dieu dans le Coran (59:23) \u2014 Dieu ne \u00ab croit \u00bb pas, il \u00ab accorde la s\u00e9curit\u00e9 \u00bb.

**endurance/patience vs constance** \u2014 Les traductions courantes donnent \u00ab endurance \u00bb ou \u00ab patience \u00bb pour sabr. \u00ab Patience \u00bb en fran\u00e7ais \u00e9voque une attente passive, or sabr dans le Coran est un acte actif de maintien et de r\u00e9sistance. \u00ab Endurance \u00bb est plus physique. \u00ab Constance \u00bb capture la dimension temporelle (tenir dans la dur\u00e9e) qui r\u00e9pond au th\u00e8me central de la sourate (le temps).`;

  const segments = [
    { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", position: 1, word_key: null, is_particle: true },
    { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", position: 2, word_key: null, is_particle: true },
    { fr: "ont accord\u00e9 la confiance", pos: "verbe", phon: "amanu", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u0627\u06df", position: 3, word_key: "amn", is_particle: false, sense_retenu: "confiance" },
    { fr: "et agi", pos: "verbe", phon: "'amilu", arabic: "\u0648\u064e\u0639\u064e\u0645\u0650\u0644\u064f\u0648\u0627\u06df", position: 4, word_key: "eml", is_particle: false, sense_retenu: "action" },
    { fr: "conform\u00e9ment", pos: "nom", phon: "as-salihat", arabic: "\u0671\u0644\u0635\u0651\u064e\u0640\u0670\u0644\u0650\u062d\u064e\u0640\u0670\u062a\u0650", position: 5, word_key: "slh", is_particle: false, sense_retenu: "conformes" },
    { fr: "et se sont recommand\u00e9 mutuellement", pos: "verbe", phon: "tawasaw", arabic: "\u0648\u064e\u062a\u064e\u0648\u064e\u0627\u0635\u064e\u0648\u0652\u0627\u06df", position: 6, word_key: "wsy", is_particle: false, sense_retenu: "recommandation" },
    { fr: "la v\u00e9rit\u00e9", pos: "nom", phon: "bil-haqq", arabic: "\u0628\u0650\u0671\u0644\u0652\u062d\u064e\u0642\u0651\u0650", position: 7, word_key: "hqq", is_particle: false, sense_retenu: "v\u00e9rit\u00e9" },
    { fr: "et se sont recommand\u00e9 mutuellement", pos: "verbe", phon: "tawasaw", arabic: "\u0648\u064e\u062a\u064e\u0648\u064e\u0627\u0635\u064e\u0648\u0652\u0627\u06df", position: 8, word_key: "wsy", is_particle: false, sense_retenu: "recommandation" },
    { fr: "la constance", pos: "nom", phon: "bis-sabr", arabic: "\u0628\u0650\u0671\u0644\u0635\u0651\u064e\u0628\u0652\u0631\u0650", position: 9, word_key: "sbr", is_particle: false, sense_retenu: "constance" }
  ];

  const { error: vaErr } = await sb.from('verse_analyses').update({
    translation_arab, translation_explanation, segments, full_translation
  }).eq('verse_id', verse_id);
  console.log('  Updated verse_analyses', vaErr?.message || 'OK');

  // Word daily — check each root
  await insertDaily(287, [
    { analysis_id: 287, sense: 'confiance', arabic: '\u0627\u0645\u0646', phon: 'amn', french: "Je lui fais confiance les yeux ferm\u00e9s \u2014 il ne m'a jamais d\u00e9\u00e7u." },
    { analysis_id: 287, sense: 'confiance', arabic: '\u0627\u0645\u0646', phon: 'amn', french: "Ce quartier est s\u00fbr \u2014 on se sent en s\u00e9curit\u00e9 quand on s'y prom\u00e8ne." },
    { analysis_id: 287, sense: 'confiance', arabic: '\u0627\u0645\u0646', phon: 'amn', french: "Accorder sa confiance \u00e0 quelqu'un, c'est lui donner la cl\u00e9 de quelque chose de pr\u00e9cieux." }
  ]);
  await insertDaily(393, [
    { analysis_id: 393, sense: 'action', arabic: '\u0639\u0645\u0644', phon: "'amal", french: "Il ne parle pas beaucoup mais ses actions parlent pour lui \u2014 il agit au lieu de discuter." },
    { analysis_id: 393, sense: 'action', arabic: '\u0639\u0645\u0644', phon: "'amal", french: "Le travail bien fait, c'est quand tu mets du c\u0153ur dans ce que tu fais." },
    { analysis_id: 393, sense: 'action', arabic: '\u0639\u0645\u0644', phon: "'amal", french: "Chaque bonne action compte \u2014 m\u00eame la plus petite peut changer la journ\u00e9e de quelqu'un." }
  ]);
  await insertDaily(326, [
    { analysis_id: 326, sense: 'conformes', arabic: '\u0635\u0644\u062d', phon: 'salih', french: "Il a r\u00e9par\u00e9 la relation avec son voisin \u2014 maintenant tout est en ordre entre eux." },
    { analysis_id: 326, sense: 'conformes', arabic: '\u0635\u0644\u062d', phon: 'salih', french: "Ce qui est bon, c'est ce qui remet les choses \u00e0 leur place \u2014 ni plus ni moins." },
    { analysis_id: 326, sense: 'conformes', arabic: '\u0635\u0644\u062d', phon: 'salih', french: "Apr\u00e8s des ann\u00e9es de conflit, ils se sont r\u00e9concili\u00e9s et tout est rentr\u00e9 dans l'ordre." }
  ]);
  await insertDaily(813, [
    { analysis_id: 813, sense: 'recommandation', arabic: '\u0648\u0635\u064a', phon: 'wasiyya', french: "Mon p\u00e8re m'a toujours recommand\u00e9 d'\u00eatre honn\u00eate \u2014 c'est son conseil le plus pr\u00e9cieux." },
    { analysis_id: 813, sense: 'recommandation', arabic: '\u0648\u0635\u064a', phon: 'wasiyya', french: "Avant de partir, il a laiss\u00e9 un testament \u2014 il a recommand\u00e9 qu'on prenne soin de sa famille." },
    { analysis_id: 813, sense: 'recommandation', arabic: '\u0648\u0635\u064a', phon: 'wasiyya', french: "On se rappelle mutuellement les bonnes habitudes \u2014 quand l'un oublie, l'autre le lui rappelle." }
  ]);
  await insertDaily(409, [
    { analysis_id: 409, sense: 'v\u00e9rit\u00e9', arabic: '\u062d\u0642\u0642', phon: 'haqq', french: "Dis la v\u00e9rit\u00e9 m\u00eame si \u00e7a fait mal \u2014 un mensonge fait toujours plus de d\u00e9g\u00e2ts." },
    { analysis_id: 409, sense: 'v\u00e9rit\u00e9', arabic: '\u062d\u0642\u0642', phon: 'haqq', french: "C'est ton droit de savoir ce qui se passe \u2014 tu as le droit \u00e0 la v\u00e9rit\u00e9." },
    { analysis_id: 409, sense: 'v\u00e9rit\u00e9', arabic: '\u062d\u0642\u0642', phon: 'haqq', french: "La v\u00e9rit\u00e9 finit toujours par sortir \u2014 ce n'est qu'une question de temps." }
  ]);
  await insertDaily(502, [
    { analysis_id: 502, sense: 'constance', arabic: '\u0635\u0628\u0631', phon: 'sabr', french: "Tiens bon, ne l\u00e2che pas \u2014 la constance finit toujours par payer." },
    { analysis_id: 502, sense: 'constance', arabic: '\u0635\u0628\u0631', phon: 'sabr', french: "Il a gard\u00e9 le cap malgr\u00e9 toutes les difficult\u00e9s \u2014 c'est quelqu'un de constant." },
    { analysis_id: 502, sense: 'constance', arabic: '\u0635\u0628\u0631', phon: 'sabr', french: "La constance, ce n'est pas attendre que \u00e7a passe \u2014 c'est continuer \u00e0 avancer m\u00eame quand c'est dur." }
  ]);

  console.log('VERSET 103:3 \u2014 TERMIN\u00c9');
  console.log('  amanu (amn) \u2192 sens "S\u00e9curit\u00e9/Confiance" \u2192 mot fran\u00e7ais "confiance"');
  console.log('  amilu (eml) \u2192 sens "Action/Oeuvre" \u2192 mot fran\u00e7ais "action"');
  console.log('  as-salihat (slh) \u2192 sens "Bont\u00e9/Rectitude" \u2192 mot fran\u00e7ais "conformes"');
  console.log('  tawasaw (wsy) \u2192 sens "Recommandation/Injonction" \u2192 mot fran\u00e7ais "recommandation"');
  console.log('  al-haqq (hqq) \u2192 sens "V\u00e9rit\u00e9/R\u00e9alit\u00e9" \u2192 mot fran\u00e7ais "v\u00e9rit\u00e9"');
  console.log('  as-sabr (sbr) \u2192 sens "Patience/Endurance" \u2192 mot fran\u00e7ais "constance"');
  console.log('  Traduction : "Sauf ceux qui ont accord\u00e9 la confiance, agi conform\u00e9ment, et se sont recommand\u00e9 mutuellement la v\u00e9rit\u00e9 et se sont recommand\u00e9 mutuellement la constance."');
}

(async () => {
  await verse103_1();
  await verse103_2();
  await verse103_3();
  console.log('\n\u2705 SOURATE 103 TERMIN\u00c9E');
})();
