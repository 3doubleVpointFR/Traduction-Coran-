require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    if (error) console.log('  ERR update VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA updated ' + word_key + ' (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log('  ERR insert VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA created ' + word_key + ' (id=' + data.id + ')');
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    if (error) console.log('  ERR update VA: ' + error.message);
    else console.log('  ✓ VA updated (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log('  ERR insert VA: ' + error.message);
    else console.log('  ✓ VA created (id=' + data.id + ')');
  }
}

(async () => {
  console.log('=== PIPELINE S87 v16-19 — ÉTAPES 3-4 ===\n');

  // ========== VERSET 16 (5964) ==========
  // بَلْ تُؤْثِرُونَ ٱلْحَيَوٰةَ ٱلدُّنْيَا
  // bal tu'thiruna al-hayata ad-dunya
  // "Au contraire, vous preferez la vie d'ici-bas"
  console.log('--- v16 (5964): bal tu\'thiruna al-hayata ad-dunya ---');

  // Avr (أ-ث-ر) — racine nouvelle — tu'thiruna = forme IV inaccompli 2e personne pluriel
  // Lane's: Form IV A=vara = He preferred him, or it. He chose, elected, selected. He honoured him.
  await upsertVWA(5964, 'Avr', 'preferer', {
    sense_chosen: 'preferer',
    concept_chosen: 'Preference/Choix',
    concepts: {
      'Trace/Empreinte': {
        senses: ['trace', 'empreinte', 'marque', 'vestige', 'cicatrice', 'impression'],
        status: 'nul',
        proof_ctx: "D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le sens premier de la racine a-th-r est la trace physique — l'empreinte laissee par un pied sur le sol, la marque d'un coup d'epee, la cicatrice d'une blessure. Le verbe du verset est en forme IV (tu'thiruna), qui porte le sens de preference, pas de trace. Ce sens physique n'a aucun rapport avec le contexte."
      },
      'Preference/Choix': {
        senses: ['preferer', 'choisir', 'elire', 'selectionner', 'favoriser', 'honorer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la forme IV (a-tha-ra) signifie preferer, choisir, elire, selectionner, honorer. Lane's cite le Coran 12:91 (laqad atharaka allahu alayna = Dieu t'a prefere a nous). Le verbe tu'thiruna est en forme IV a l'inaccompli avec le pronom de la 2e personne du pluriel — vous preferez. L'objet est al-hayata ad-dunya (la vie d'ici-bas). Le sens de s'accaparer (istathara = forme X) est possible mais porte l'idee d'exclusivite egoiste, tandis que la forme IV est plus neutre — simplement donner la priorite a une chose sur une autre.",
        axe1_verset: "Le verbe tu'thiruna est en forme IV a l'inaccompli, avec un sujet a la 2e personne du pluriel (vous). L'objet direct est al-hayata ad-dunya (la vie d'ici-bas). Le champ lexical oppose la preference (ici-bas) a ce qui est meilleur et plus durable (verset 17). La forme IV porte le sens de donner la priorite — l'action est un choix delibere, pas une erreur involontaire. L'inaccompli indique que cette preference est un comportement en cours, habituel.",
        axe2_voisins: "Le verset 15 decrivait celui qui a reussi : il mentionne le nom de celui qui l'eleve et prie. Le verset 16 introduit un contraste avec bal (au contraire) : au lieu de purifier et prier, vous preferez la vie d'ici-bas. Le verset 17 completera en disant que la vie derniere est meilleure et plus durable. Les versets 16-17 forment une paire : preference erronee (v16) vs realite (v17).",
        axe3_sourate: "La sourate 87 passe de la glorification du Tres-Haut (v1) aux actes divins de creation et de guidage (v2-5), puis au rappel et a la memoire (v6-10), puis aux deux types de reponse (v10-15). Les versets 16-17 expliquent pourquoi certains evitent le rappel : ils preferent l'immediat au durable. La preference pour l'ici-bas est l'explication du refus decrit aux versets 11-13.",
        axe4_coherence: "Le Coran utilise la forme IV de a-th-r dans d'autres passages. En 12:91, les freres de Joseph disent : Dieu t'a prefere a nous (laqad atharaka allahu alayna). En 20:72, les magiciens refusent de preferer Pharaon a Dieu. En 79:38, wa athara al-hayata ad-dunya — identique a notre verset. La preference pour l'ici-bas est un theme recurrent : c'est le choix de l'immediat au detriment du durable.",
        axe5_frequence: "La preference pour l'ici-bas est l'inverse de la mission du khalifa. Le khalifa est celui qui construit pour le long terme — la justice, la civilisation, la prevention de la corruption. Preferer l'ici-bas, c'est choisir le benefice immediat au detriment de la construction durable. C'est le comportement qui conduit a la corruption car il sacrifie l'interet collectif a long terme pour le confort personnel immediat."
      },
      'Effet/Influence': {
        senses: ['influencer', 'affecter', 'impressionner', 'produire un effet'],
        status: 'nul',
        proof_ctx: "La forme II (aththara fihi) signifie laisser une impression, produire un effet. Mais le verbe du verset est en forme IV, pas en forme II. Le sens d'influence n'est pas pertinent pour decrire un choix entre deux choses."
      },
      'Tradition/Recit': {
        senses: ['transmettre', 'relater', 'rapporter', 'recit transmis'],
        status: 'nul',
        proof_ctx: "Le sens de transmettre un recit (athir) est un usage specialise lie a la narration. Le verbe du verset est en forme IV avec un objet direct (la vie d'ici-bas), ce qui indique une preference, pas une transmission."
      }
    }
  }, 1);

  // hyy (ح-ي-ي) — racine existante — al-hayata = la vie
  // Dans v16, le contexte est different de v13 : ici c'est "la vie d'ici-bas" comme objet de preference
  await upsertVWA(5964, 'hyy', 'vie', {
    sense_chosen: 'vie',
    concept_chosen: 'Vie/Vivant',
    concepts: {
      'Vie/Vivant': {
        senses: ['vivre', 'vivant', 'vivifier', 'vie'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine h-y-y porte le sens de vivre, etre vivant, donner la vie. Le mot al-hayata est au cas accusatif (objet de tu'thiruna), defini par al- et qualifie par ad-dunya (l'ici-bas). Le sens de vie est direct et sans ambiguite. Le sens de pudeur (forme X istahya) est exclu car le mot est un nom (hayat), pas un verbe a la forme X.",
        axe1_verset: "Le mot al-hayata est un nom feminin defini au cas accusatif, objet direct de tu'thiruna (vous preferez). Il est qualifie par ad-dunya (l'ici-bas). Le champ lexical oppose la vie d'ici-bas a la vie derniere (al-akhira du verset 17). Le mot porte ici le sens concret de vie, existence — ce qui est vecu dans le monde present.",
        axe2_voisins: "Le verset 17 mentionnera al-akhiratu (la derniere) comme etant meilleure et plus durable. La paire v16-v17 oppose deux realites : la vie d'ici-bas (hayat ad-dunya) et la vie derniere (al-akhira). Le mot hayat est le pivot de cette opposition — c'est la meme realite (la vie) mais dans deux horizons differents.",
        axe3_sourate: "La sourate 87 parle de la glorification du Tres-Haut et du rappel. La mention de la vie d'ici-bas explique pourquoi certains evitent le rappel (v11) : ils sont absorbes par la vie immediate. La vie d'ici-bas est l'obstacle au rappel.",
        axe4_coherence: "Le Coran oppose frequemment al-hayat ad-dunya et al-akhira. En 2:86, ceux qui ont achete la vie d'ici-bas contre la vie derniere. En 29:64, la vie d'ici-bas n'est que divertissement. Le mot hayat designe systematiquement l'existence vecue — le temps passe dans ce monde.",
        axe5_frequence: "La vie d'ici-bas est l'espace dans lequel le khalifa exerce sa mission. Elle n'est pas mauvaise en soi — c'est la preference exclusive pour elle au detriment de la vision a long terme qui pose probleme. Le khalifa doit vivre dans l'ici-bas tout en construisant pour le durable."
      },
      'Salutation/Pudeur': {
        senses: ['avoir honte', 'etre pudique', 'saluer'],
        status: 'nul',
        proof_ctx: "Le sens de pudeur vient de la forme X (istahya). Le mot du verset est al-hayata, un nom a la forme I. Aucun rapport avec la pudeur dans ce contexte."
      }
    }
  }, 2);

  // dnw (د-ن-و) — racine existante — ad-dunya = l'ici-bas / la plus proche
  await upsertVWA(5964, 'dnw', 'ici-bas', {
    sense_chosen: 'ici-bas',
    concept_chosen: 'Proximite/Monde d\'ici-bas',
    concepts: {
      'Proximite/Monde d\'ici-bas': {
        senses: ['etre proche', 'proche', 'ici-bas', 'approcher'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine d-n-w signifie etre proche, s'approcher. Ad-dunya est le feminin superlatif (la plus proche). Le mot designe ce qui est le plus immediat, le plus proche dans le temps — par opposition a al-akhira (la derniere, la plus eloignee). Le terme n'a pas de connotation negative en soi — il decrit simplement la proximite temporelle. C'est la preference exclusive pour elle qui est critiquee, pas la chose elle-meme.",
        axe1_verset: "Le mot ad-dunya est un adjectif feminin superlatif au cas accusatif, en qualification de al-hayata. Il signifie la plus proche. Le champ lexical du verset oppose le proche (dunya) au meilleur et plus durable (verset 17). La dunya n'est pas nommee comme mauvaise — c'est la preference pour elle au detriment de l'akhira qui est le probleme.",
        axe2_voisins: "Le verset 17 introduit al-akhiratu (la derniere) comme contraire de ad-dunya (la plus proche). L'opposition n'est pas entre bien et mal mais entre deux horizons temporels : le proche et le lointain. Le superlatif (la plus proche vs la derniere) montre que c'est une question de perspective, pas de valeur absolue.",
        axe3_sourate: "La sourate 87 traite du rappel et de la memoire. Le rappel est par nature lie au long terme — on se rappelle pour ne pas oublier, pour maintenir une continuite. L'ici-bas comme horizon exclusif est incompatible avec le rappel car il n'a pas besoin de memoire du passe ni de vision de l'avenir.",
        axe4_coherence: "Le Coran utilise ad-dunya dans de nombreux versets comme qualification de al-hayat. Le terme est toujours le superlatif de daniya (etre proche). En 2:201, la priere demande le bien dans l'ici-bas ET dans la vie derniere — preuve que l'ici-bas n'est pas mauvais en soi.",
        axe5_frequence: "Le khalifa vit dans l'ici-bas mais ne se limite pas a lui. Sa mission de justice et de civilisation traverse les deux horizons. Celui qui se limite a l'ici-bas renonce a construire au-dela de son benefice immediat — c'est le contraire de la mission de khalifa."
      }
    }
  }, 3);

  await upsertVA(5964, {
    translation_arab: "Au contraire, vous preferez la vie d'ici-bas",
    full_translation: "Mais vous préférez plutôt la vie présente",
    segments: [
      { fr: "Au contraire", pos: "PART", phon: "bal", arabic: "بَلْ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "vous preferez", pos: "V", phon: "tu'thiruna", arabic: "تُؤْثِرُونَ", position: 2, word_key: "Avr", is_particle: false, sense_retenu: "preferer" },
      { fr: "la vie", pos: "N", phon: "al-hayata", arabic: "ٱلْحَيَوٰةَ", position: 3, word_key: "hyy", is_particle: false, sense_retenu: "vie" },
      { fr: "d'ici-bas", pos: "ADJ", phon: "ad-dunya", arabic: "ٱلدُّنْيَا", position: 4, word_key: "dnw", is_particle: false, sense_retenu: "ici-bas" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **bal** (au contraire) marque une rupture avec ce qui precede. Les versets 14-15 decrivaient celui qui a reussi (purification, mention du nom, priere). Bal introduit le reproche : au lieu de cela, vous faites le contraire.

Le verbe **tu'thiruna** est en forme IV de la racine a-th-r, a l'inaccompli, 2e personne du pluriel. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme IV signifie preferer, donner la priorite a une chose sur une autre. Lane's cite le Coran 12:91 ou les freres de Joseph disent « Dieu t'a prefere a nous ». L'inaccompli indique un comportement en cours, habituel — pas un acte ponctuel passe.

Le mot **al-hayata** est un nom feminin defini au cas accusatif, objet direct de tu'thiruna. Il vient de la racine h-y-y qui signifie vivre, vie.

Le mot **ad-dunya** est un adjectif superlatif feminin de la racine d-n-w (etre proche). Il qualifie al-hayata. Le superlatif signifie « la plus proche » — c'est le monde immediat, present, par opposition a al-akhira (la derniere) du verset 17.

§JUSTIFICATION§
**preferer** — Le sens retenu est « preferer ». Ce mot est choisi car la forme IV de a-th-r porte exactement ce sens selon Lane's. L'alternative « choisir » est ecartee car elle est trop neutre — choisir n'implique pas de comparaison, tandis que preferer implique qu'on donne la priorite a une chose au detriment d'une autre. L'alternative « honorer » est ecartee car elle ne s'applique pas a un objet comme « la vie ».

**vie** — Le sens retenu est « vie ». C'est le sens direct de hayat, sans ambiguite.

**ici-bas** — Le sens retenu est « ici-bas ». Ce mot est choisi car ad-dunya designe le monde le plus proche temporellement. L'alternative « inferieure » (autre sens de dunya) est ecartee car le texte ne fait pas un jugement de valeur sur la vie d'ici-bas — il critique la preference exclusive pour elle.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « vous preferez plutot la vie presente ». La seule nuance est que « presente » est moins precis que « d'ici-bas » : dunya ne signifie pas « presente » (hadir) mais « la plus proche ». Cette distinction etymologique montre que l'opposition n'est pas temporelle (present vs futur) mais spatiale (le proche vs le lointain).`
  });

  console.log('\nVERSET 87:16 — TERMINÉ');
  console.log('  Avr → Preference/Choix → "preferer"');
  console.log('  hyy → Vie/Vivant → "vie"');
  console.log('  dnw → Proximite/Monde d\'ici-bas → "ici-bas"');

  // ========== VERSET 17 (5965) ==========
  // وَٱلْـَٔاخِرَةُ خَيْرٌ وَأَبْقَىٰٓ
  // wa-al-akhiratu khayrun wa-abqa
  // "Alors que la derniere est meilleure et plus durable"
  console.log('\n--- v17 (5965): wa-al-akhiratu khayrun wa-abqa ---');

  // Axr (أ-خ-ر) — racine nouvelle — al-akhiratu = la derniere
  await upsertVWA(5965, 'Axr', 'derniere', {
    sense_chosen: 'derniere',
    concept_chosen: 'Posteriorite/Fin',
    concepts: {
      'Posteriorite/Fin': {
        senses: ['dernier', 'derniere', 'final', 'posterieur', 'fin', 'arriere'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine a-kh-r porte le sens de retarder, mettre en arriere, etre dernier. Al-akhira est le participe actif feminin de akhara : la derniere, celle qui vient apres. Le terme est le contraire exact de al-ula (la premiere) et de ad-dunya (la plus proche). Dans le contexte du verset, al-akhiratu est utilisee seule, sans le mot hayat (vie) — c'est un substantif autonome qui designe la realite derniere par opposition a la realite d'ici-bas. Le sens de 'autre' (ukhra, akharu) est grammaticalement exclu car le mot est al-akhiratu avec un ta' marbouta de feminin, pas akharu.",
        axe1_verset: "Le mot al-akhiratu est un nom feminin defini au cas nominatif, sujet de la phrase nominale. Il est qualifie par deux predicats : khayrun (meilleur) et abqa (plus durable). Le champ lexical oppose al-akhiratu a al-hayata ad-dunya du verset 16. La structure est une phrase nominale affirmative — c'est un constat, pas un commandement.",
        axe2_voisins: "Le verset 16 critiquait la preference pour l'ici-bas. Le verset 17 donne la raison : la derniere est meilleure et plus durable. Les versets 18-19 ajouteront que ce constat se trouve dans les feuillets anciens. La paire v16-v17 est une argumentation : vous preferez X alors que Y est meilleur.",
        axe3_sourate: "La sourate 87 commence par la glorification du Tres-Haut et finit par cette opposition entre l'ici-bas et la derniere. Le theme est la perspective — celui qui glorifie voit au-dela de l'immediat, celui qui prefere l'ici-bas est aveugle au durable.",
        axe4_coherence: "Le Coran utilise al-akhira des centaines de fois. En 2:4, ceux qui ont confiance en la vie derniere. En 93:4, wa-la-l-akhiratu khayrun laka mina al-ula — et la derniere est meilleure pour toi que la premiere. Ce verset 93:4 est presque identique au notre dans la structure. Le mot akhira designe toujours ce qui vient apres la vie d'ici-bas.",
        axe5_frequence: "La vision de la derniere est ce qui donne au khalifa la perspective necessaire pour construire au-dela de son interet immediat. Sans la conscience de la derniere, il n'y a pas de raison de sacrifier le confort present pour la justice a long terme. La derniere est le cadre qui rend la mission du khalifa intelligible."
      },
      'Retard/Report': {
        senses: ['retarder', 'reporter', 'differer', 'ajourner'],
        status: 'nul',
        proof_ctx: "La forme II (akhkhara) signifie retarder, reporter. Mais al-akhiratu est un participe actif substantive au feminin, pas un verbe. Le sens de retarder n'est pas pertinent pour un nom qui designe une realite."
      }
    }
  }, 1);

  // xyr (خ-ي-ر) — racine existante — khayrun = meilleur/bien
  await upsertVWA(5965, 'xyr', 'meilleur', {
    sense_chosen: 'meilleur',
    concept_chosen: 'Bien/Excellence',
    concepts: {
      'Bien/Excellence': {
        senses: ['bien', 'meilleur', 'bonte'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine kh-y-r porte le sens de bien, bonte, excellence. Khayrun est au cas nominatif indefini, predicat de al-akhiratu. C'est un elatif (forme comparative/superlative) qui signifie meilleur. Le mot est sans article et sans complement — il ne dit pas meilleur que quoi explicitement, mais le contexte (opposition avec ad-dunya du verset 16) rend la comparaison evidente.",
        axe1_verset: "Le mot khayrun est un elatif (comparatif) au cas nominatif, deuxieme predicat de al-akhiratu (apres le premier predicat implicite). Il est coordonne avec abqa (plus durable) par wa. Le champ lexical est celui de la valeur : meilleur et plus durable qualifient la derniere par rapport a l'ici-bas.",
        axe2_voisins: "Le verset 16 disait que les gens preferent l'ici-bas. Le verset 17 repond : la derniere est meilleure. C'est un argument factuel contre la preference — le choix est irrationnel puisque ce qu'on neglige est superieur a ce qu'on choisit.",
        axe3_sourate: "La sourate 87 glorifie le Tres-Haut qui a cree, mesure et guide. La hierarchie de valeur (meilleur) s'inscrit dans cet ordre : le Tres-Haut a mis en place un ordre dans lequel la derniere est objectivement meilleure que l'ici-bas.",
        axe4_coherence: "Le Coran utilise khayrun frequemment comme comparatif. En 93:4, la derniere est meilleure pour toi que la premiere. En 2:184, et que vous jeuniez est meilleur pour vous. Le mot khayrun est toujours un jugement de valeur objectif dans le Coran, pas une opinion subjective.",
        axe5_frequence: "Le meilleur est l'objectif du khalifa — sa mission est de choisir ce qui est meilleur pour la collectivite, pas ce qui est le plus facile ou le plus immediat. La hierarchie de valeur (khayrun) est le cadre ethique de la mission du khalifa."
      }
    }
  }, 2);

  // bqy (ب-ق-ي) — racine nouvelle — abqa = plus durable
  await upsertVWA(5965, 'bqy', 'plus durable', {
    sense_chosen: 'plus durable',
    concept_chosen: 'Permanence/Duree',
    concepts: {
      'Permanence/Duree': {
        senses: ['rester', 'durer', 'demeurer', 'subsister', 'etre permanent', 'perpetuer', 'continuer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine b-q-y signifie rester, durer, demeurer, subsister, etre permanent. Le verbe baqiya (rester) est la forme I. Abqa est l'elatif (comparatif/superlatif) : plus durable, plus permanent. Lane's mentionne que al-baqi est un nom de Dieu signifiant « Celui dont l'existence n'aura pas de fin ». Le mot abqa dans le verset est au cas nominatif, coordonne avec khayrun comme predicat de al-akhiratu. Le sens de preservation (forme IV abqa = faire durer, conserver) est un sens actif, mais ici abqa est un elatif passif — plus durable.",
        axe1_verset: "Le mot abqa est un elatif au cas nominatif, troisieme predicat de al-akhiratu, coordonne avec khayrun par wa. Le champ lexical du verset oppose le proche (dunya, ce qui est immediat et ephemere) au durable (abqa). La derniere est non seulement meilleure mais aussi plus durable — deux qualites qui devraient rationnellement orienter le choix.",
        axe2_voisins: "Le verset 16 critiquait la preference pour l'ici-bas. Le verset 17 donne deux raisons contre ce choix : meilleur et plus durable. Le mot abqa ajoute la dimension temporelle a l'argument — l'ici-bas est ephemere, la derniere est permanente. Les versets 18-19 ancreront cette verite dans les feuillets anciens.",
        axe3_sourate: "La sourate 87 parle de la glorification, du rappel et de la memoire. La duree (baqiya) est liee au rappel — ce qui dure merite qu'on s'en rappelle, ce qui est ephemere ne merite pas qu'on lui sacrifie le durable. Le theme de la permanence conclut logiquement le theme du rappel.",
        axe4_coherence: "Le Coran utilise la racine b-q-y dans d'autres passages. En 18:46, al-baqiyatu as-salihatu (les oeuvres durables et bonnes) sont meilleures en recompense. En 20:73, maa inda allahi khayrun wa-abqa (ce qui est chez Dieu est meilleur et plus durable) — formule identique a notre verset. La permanence est un critere de valeur constant dans le Coran.",
        axe5_frequence: "La permanence est la condition de la mission du khalifa. Celui qui construit pour le durable — la justice, la civilisation — fait un investissement permanent. Celui qui prefere l'ephemere detruit parce que son benefice ne survit pas a l'instant. La duree est le critere qui separe la construction de la destruction."
      },
      'Reste/Residuel': {
        senses: ['reste', 'residue', 'remnant', 'vestige'],
        status: 'nul',
        proof_ctx: "Le sens de reste (baqiyya = ce qui reste) est un derive nominal, pas un elatif. Abqa est un elatif qui signifie 'plus durable', pas 'le reste'."
      },
      'Misericorde/Pitie': {
        senses: ['epargner', 'avoir pitie'],
        status: 'nul',
        proof_ctx: "Lane's mentionne que abqa peut signifier 'plus misericordieux' (huwa abqa ar-rajulayni = le plus misericordieux des deux hommes). Mais ce sens specialise n'est pas pertinent ici car al-akhiratu est le sujet, pas une personne."
      }
    }
  }, 3);

  await upsertVA(5965, {
    translation_arab: "Alors que la derniere est meilleure et plus durable",
    full_translation: "alors que l'au-delà est meilleur et plus durable",
    segments: [
      { fr: "Alors que", pos: "CONJ", phon: "wa", arabic: "وَ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "la derniere", pos: "N", phon: "al-akhiratu", arabic: "ٱلْـَٔاخِرَةُ", position: 2, word_key: "Axr", is_particle: false, sense_retenu: "derniere" },
      { fr: "(est) meilleure", pos: "ADJ", phon: "khayrun", arabic: "خَيْرٌ", position: 3, word_key: "xyr", is_particle: false, sense_retenu: "meilleur" },
      { fr: "et plus durable", pos: "ADJ", phon: "wa-abqa", arabic: "وَأَبْقَىٰٓ", position: 4, word_key: "bqy", is_particle: false, sense_retenu: "plus durable" }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction **wa** relie ce verset au verset 16 comme une phrase d'opposition — vous preferez l'ici-bas ALORS QUE la derniere est meilleure.

Le mot **al-akhiratu** est un participe actif feminin de la racine a-kh-r, substantive avec l'article al-. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), al-akhir est le contraire de al-awwal (le premier) — c'est le dernier, ce qui vient apres. Le feminin al-akhira est devenu un nom autonome designant la realite derniere, par opposition a ad-dunya (la plus proche). Le mot est au cas nominatif comme sujet de la phrase nominale.

Le mot **khayrun** est un elatif (forme comparative) de la racine kh-y-r, au cas nominatif indefini, predicat de al-akhiratu. Il signifie meilleur. L'absence d'article et de complement (meilleur que quoi ?) rend la comparaison implicite — le contexte montre que c'est par rapport a ad-dunya du verset 16.

Le mot **abqa** est un elatif de la racine b-q-y, coordonne avec khayrun par wa. D'apres les sources etymologiques, baqiya signifie rester, durer, demeurer. Abqa signifie plus durable, plus permanent. Les deux elatifs (meilleur + plus durable) forment un argument en deux temps : la derniere est superieure en qualite ET en duree.

§JUSTIFICATION§
**derniere** — Le sens retenu est « derniere ». Ce mot est choisi car al-akhira est le participe actif feminin de akhara (etre dernier). L'alternative « au-dela » est ecartee car c'est une interpretation spatiale — au-dela de quoi ? Le texte dit simplement « la derniere », sans specifier ce qui se trouve dans cette realite. « Au-dela » ajoute une dimension de transcendance absente du mot arabe.

**meilleur** — Le sens retenu est « meilleur ». C'est le sens direct de l'elatif khayrun.

**plus durable** — Le sens retenu est « plus durable ». Ce mot est choisi car abqa est l'elatif de baqiya (durer, rester). L'alternative « plus permanent » est ecartee car le permanent est absolu (pas de degre), tandis que le durable admet la comparaison. L'alternative « eternel » est ecartee car le texte ne dit pas « eternelle » mais « plus durable » — c'est un comparatif, pas un absolu.

§CRITIQUE§
**derniere vs au-dela** — Hamidullah traduit « l'au-dela ». Ce terme introduit une geographie metaphysique (un lieu au-dela du monde visible) qui n'est pas dans le mot arabe. Al-akhira signifie simplement « la derniere » — c'est une question de temporalite (ce qui vient apres), pas de spatialite (un lieu). La traduction « au-dela » vient de la tradition theologique qui a spatialise un concept temporel. L'etymologie pure donne « la derniere », ce qui laisse le lecteur comprendre qu'il s'agit de la realite qui vient apres l'ici-bas, sans presupposer sa nature.`
  });

  console.log('\nVERSET 87:17 — TERMINÉ');
  console.log('  Axr → Posteriorite/Fin → "derniere"');
  console.log('  xyr → Bien/Excellence → "meilleur"');
  console.log('  bqy → Permanence/Duree → "plus durable"');

  // ========== VERSET 18 (5966) ==========
  // إِنَّ هَـٰذَا لَفِى ٱلصُّحُفِ ٱلْأُولَىٰ
  // inna hadha lafi as-suhufi al-ula
  // "Cela se trouve bien dans les feuillets anciens"
  console.log('\n--- v18 (5966): inna hadha lafi as-suhufi al-ula ---');

  // SHf (ص-ح-ف) — racine nouvelle — as-suhufi = les feuillets/pages
  await upsertVWA(5966, 'SHf', 'feuillets', {
    sense_chosen: 'feuillets',
    concept_chosen: 'Ecriture/Support',
    concepts: {
      'Ecriture/Support': {
        senses: ['page', 'feuillet', 'ecrit', 'recueil', 'codex', 'registre', 'lettre'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine S-H-f porte le sens de page, feuillet, ecrit. Lane's definit sahifa comme « une piece ecrite de papier ou de peau ; un ecrit, un livre, un volume, une lettre ; un registre ». Le pluriel suhuf designe des feuillets ecrits — des supports physiques portant un message. Le mot mushaf (recueil de feuillets) vient de la meme racine. Dans le verset, as-suhufi est au cas genitif apres fi (dans), defini par al- et qualifie par al-ula (les premieres/anciennes). Le sens d'erreur de lecture (tashif, forme II) est un derive sans rapport avec le contexte.",
        axe1_verset: "Le mot as-suhufi est un nom pluriel defini au cas genitif, complement de la preposition fi (dans). Il est qualifie par al-ula (les premieres). Le champ lexical est celui de la transmission ecrite — ce qui est dit aux versets 16-17 n'est pas nouveau, c'est deja ecrit dans les feuillets anciens. Le demonstratif hadha (cela) renvoie au contenu des versets precedents.",
        axe2_voisins: "Le verset 17 affirmait que la derniere est meilleure et plus durable. Le verset 18 ancre cette affirmation dans l'histoire — cela se trouve dans les feuillets anciens. Le verset 19 precisera de quels feuillets il s'agit. La sequence v18-v19 est une attestation historique de la verite enoncee en v16-v17.",
        axe3_sourate: "La sourate 87 commence par la glorification du Tres-Haut et finit par l'invocation des feuillets anciens. Le rappel (v9-10) est ainsi ancre dans une tradition ecrite qui traverse les ages — les feuillets d'Ibrahim et de Moussa. La sourate du Tres-Haut est aussi la sourate de la continuite du message.",
        axe4_coherence: "Le Coran mentionne les suhuf dans d'autres passages. En 20:133, les preuves claires dans les feuillets anciens (as-suhufi al-ula, meme expression). En 53:36-37, les feuillets de Moussa et d'Ibrahim. En 80:13, des feuillets honores (suhuf mukarrama). Le mot suhuf designe toujours des supports ecrits portant une revelation.",
        axe5_frequence: "Les feuillets anciens representent la continuite de la mission du khalifa a travers les ages. Le message n'est pas nouveau — il est transmis depuis Ibrahim et Moussa. La civilisation se construit sur cette continuite, sur ce qui a ete ecrit et transmis de generation en generation."
      },
      'Plat/Recipient': {
        senses: ['plat', 'ecuelle', 'bol etendu'],
        status: 'nul',
        proof_ctx: "Lane's mentionne que sahfa est un type de recipient (ecuelle large). Mais le mot du verset est suhuf (pluriel de sahifa = page ecrite), pas sihaf (pluriel de sahfa = ecuelle). Les deux mots sont de la meme racine mais avec des voyelles differentes."
      }
    }
  }, 1);

  // Awl (أ-و-ل) — racine nouvelle — al-ula = les premieres/anciennes
  await upsertVWA(5966, 'Awl', 'premieres', {
    sense_chosen: 'premieres',
    concept_chosen: 'Anteriorite/Premier',
    concepts: {
      'Anteriorite/Premier': {
        senses: ['premier', 'anterieur', 'originel', 'initial', 'commencement'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine a-w-l porte le sens de retourner, revenir (forme I ala = il est retourne). Le mot awwal signifie premier, celui qui precede tous les autres. Al-ula est le feminin pluriel de ula (la premiere), contraire de al-akhira (la derniere). Dans le verset, al-ula qualifie as-suhufi — les feuillets les plus anciens, les premiers. Le sens de famille (al = famille, proches) est un derive nominal qui n'a pas de rapport avec l'adjectif ula. Le sens d'interpretation (ta'wil, forme V) est un usage theologique posterieur.",
        axe1_verset: "Le mot al-ula est un adjectif feminin pluriel defini au cas genitif, en qualification de as-suhufi. Il signifie les premieres, les plus anciennes. Le champ lexical est celui de l'anciennete et de l'authenticite — les feuillets les plus anciens portent deja ce message, ce qui le rend d'autant plus credible.",
        axe2_voisins: "Le verset 19 precisera que ces feuillets anciens sont ceux d'Ibrahim et de Moussa. L'adjectif al-ula (les premieres) anticipe cette precision — ce ne sont pas des feuillets recents mais les tout premiers, ceux des prophetes les plus anciens mentionnes.",
        axe3_sourate: "La sourate 87 ouvre sur le Tres-Haut et ferme sur les feuillets anciens. L'adjectif ula (les premieres) etablit un pont entre le commencement (la creation aux versets 2-4) et les premiers ecrits. Le message du Coran n'est pas une innovation — il est dans les feuillets les plus anciens.",
        axe4_coherence: "Le Coran utilise al-ula dans d'autres passages. En 20:133, as-suhufi al-ula (meme expression). En 53:50, wa ada al-ula (et le peuple de Ad, le premier). En 93:4, wa-la-l-akhiratu khayrun laka mina al-ula — la derniere est meilleure pour toi que la premiere. Le mot ula designe toujours ce qui est le plus ancien, le plus premier.",
        axe5_frequence: "L'anteriorite des feuillets donne autorite au message. Le khalifa ne construit pas a partir de rien — il s'appuie sur une tradition qui remonte aux origines. Les feuillets anciens sont la preuve que la mission de justice et de civilisation est aussi ancienne que l'humanite elle-meme."
      },
      'Retour/Interpretation': {
        senses: ['retourner', 'revenir', 'interpreter', 'ramener'],
        status: 'nul',
        proof_ctx: "Le sens de retourner (forme I ala) et d'interpreter (forme V ta'awwala) sont des usages verbaux de la racine. Mais al-ula est un adjectif feminin pluriel signifiant les premieres, pas un verbe."
      }
    }
  }, 2);

  await upsertVA(5966, {
    translation_arab: "Cela se trouve bien dans les feuillets anciens",
    full_translation: "Ceci se trouve, certes, dans les Feuilles anciennes",
    segments: [
      { fr: "Certes", pos: "PART", phon: "inna", arabic: "إِنَّ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "cela", pos: "DEM", phon: "hadha", arabic: "هَـٰذَا", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "(se trouve) bien dans", pos: "PREP", phon: "lafi", arabic: "لَفِى", position: 3, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "les feuillets", pos: "N", phon: "as-suhufi", arabic: "ٱلصُّحُفِ", position: 4, word_key: "SHf", is_particle: false, sense_retenu: "feuillets" },
      { fr: "anciens", pos: "ADJ", phon: "al-ula", arabic: "ٱلْأُولَىٰ", position: 5, word_key: "Awl", is_particle: false, sense_retenu: "premieres" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **inna** est une particule d'insistance qui ouvre la phrase. Elle donne de l'emphase a ce qui suit — c'est une affirmation categorique.

Le demonstratif **hadha** (cela, ceci) renvoie au contenu des versets precedents — le fait que la derniere est meilleure et plus durable que l'ici-bas.

La particule **la** devant **fi** est le lam d'insistance (lam at-tawkid), qui renforce inna. La combinaison inna...la- est la formule d'affirmation la plus forte en arabe — « assurement, sans aucun doute ». La preposition fi (dans) indique que le contenu se trouve a l'interieur des feuillets.

Le mot **as-suhufi** est le pluriel de sahifa. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), sahifa signifie une piece ecrite de papier ou de peau, un ecrit, un livre, un volume, une lettre, un registre. Le pluriel suhuf designe des feuillets ecrits — des supports physiques portant un message ecrit.

Le mot **al-ula** est le feminin pluriel de ula (la premiere), de la racine a-w-l. D'apres les sources etymologiques, awwal signifie premier, contraire de akhir (dernier). Al-ula qualifie as-suhufi : les feuillets les plus anciens, les premiers.

§JUSTIFICATION§
**feuillets** — Le sens retenu est « feuillets ». Ce mot est choisi car sahifa designe un support physique d'ecriture (page, feuillet). L'alternative « ecritures » est ecartee car elle ajoute une connotation religieuse (les Saintes Ecritures) absente du mot arabe. L'alternative « livres » est ecartee car suhuf n'est pas kutub — les feuillets sont des pages separees, pas des livres relies.

**anciens** — Le sens retenu est « anciens ». Ce mot est choisi comme equivalent naturel de al-ula (les premieres) dans le contexte de documents ecrits. « Premiers » est le sens litteral mais « feuillets premiers » ne se dit pas naturellement en francais. « Anciens » capture l'idee de priorite temporelle de maniere naturelle.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « les Feuilles anciennes ». La traduction est fidele. La seule difference est la majuscule sur « Feuilles » qui sacralise le support physique — le texte arabe ne distingue pas entre majuscule et minuscule. Les feuillets sont des supports d'ecriture, pas des objets sacres en eux-memes.`
  });

  console.log('\nVERSET 87:18 — TERMINÉ');
  console.log('  SHf → Ecriture/Support → "feuillets"');
  console.log('  Awl → Anteriorite/Premier → "premieres"');

  // ========== VERSET 19 (5967) ==========
  // صُحُفِ إِبْرَٰهِيمَ وَمُوسَىٰ
  // suhufi ibrahima wa-musa
  // "Les feuillets d'Ibrahim et de Moussa"
  console.log('\n--- v19 (5967): suhufi ibrahima wa-musa ---');

  // SHf réutilisé — même racine que v18 mais contexte différent (en idafa avec Ibrahim)
  await upsertVWA(5967, 'SHf', 'feuillets', {
    sense_chosen: 'feuillets',
    concept_chosen: 'Ecriture/Support',
    concepts: {
      'Ecriture/Support': {
        senses: ['page', 'feuillet', 'ecrit', 'recueil', 'codex', 'registre', 'lettre'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, sahifa signifie une piece ecrite de papier ou de peau, un ecrit, un livre, une lettre, un registre. Le pluriel suhuf est ici en idafa (annexion) avec ibrahima — les feuillets d'Ibrahim. L'idafa indique l'appartenance ou l'attribution — ces feuillets sont attribues a Ibrahim. Le meme mot est utilise au verset 18 avec l'article (as-suhufi) et ici sans article car il est en idafa. Le sens est identique.",
        axe1_verset: "Le mot suhufi est un nom pluriel au cas genitif, en idafa avec ibrahima. Il est sans article car l'idafa le rend automatiquement defini. Le champ lexical est celui de la transmission ecrite et de la filiation prophetique — les feuillets sont rattaches a des noms propres, ce qui les ancre dans l'histoire.",
        axe2_voisins: "Le verset 18 disait que cela se trouve dans les feuillets anciens. Le verset 19 precise lesquels — ceux d'Ibrahim et de Moussa. C'est une apposition explicative qui complete le verset 18. Les deux versets forment une seule idee : le message est dans les feuillets anciens, ceux d'Ibrahim et de Moussa.",
        axe3_sourate: "La sourate 87 se termine sur l'identification precise des feuillets anciens. Le message n'est pas abstrait — il est attribue a deux figures historiques connues. La sourate ouvre sur le Tres-Haut et ferme sur Ibrahim et Moussa, reliant le divin a l'humain par la transmission ecrite.",
        axe4_coherence: "Le Coran mentionne les feuillets d'Ibrahim et de Moussa en 53:36-37 (am lam yunabba' bima fi suhufi musa wa ibrahima alladhi waffa). L'ordre est inverse — en 53:36 Moussa est cite avant Ibrahim, en 87:19 Ibrahim est cite avant Moussa. La mention des feuillets d'Ibrahim est rare dans le Coran — elle apparait uniquement en 53:36-37 et en 87:18-19.",
        axe5_frequence: "Les feuillets d'Ibrahim et de Moussa representent la racine la plus ancienne de la transmission du message. Le khalifa s'inscrit dans cette chaine de transmission — il n'est pas le premier a recevoir ce message. La continuite depuis Ibrahim montre que la mission de justice et de civilisation est aussi ancienne que les premiers patriarches."
      }
    }
  }, 1);

  await upsertVA(5967, {
    translation_arab: "Les feuillets d'Ibrahim et de Moussa",
    full_translation: "les Feuilles d'Abraham et de Moïse",
    segments: [
      { fr: "Les feuillets (de)", pos: "N", phon: "suhufi", arabic: "صُحُفِ", position: 1, word_key: "SHf", is_particle: false, sense_retenu: "feuillets" },
      { fr: "Ibrahim", pos: "NP", phon: "ibrahima", arabic: "إِبْرَٰهِيمَ", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "et (de)", pos: "CONJ", phon: "wa", arabic: "وَ", position: 3, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "Moussa", pos: "NP", phon: "musa", arabic: "مُوسَىٰ", position: 4, word_key: null, is_particle: true, sense_retenu: null }
    ],
    translation_explanation: `§DEMARCHE§
Le mot **suhufi** est le meme mot qu'au verset 18 (as-suhufi), mais ici sans article parce qu'il est en idafa (annexion) avec **ibrahima**. En arabe, l'idafa est une construction ou deux noms se suivent pour exprimer l'appartenance : « les feuillets de Ibrahim ». Le premier nom perd son article et prend le cas genitif.

Le nom **ibrahima** est un nom propre au cas genitif, complement de l'idafa. C'est le nom arabe du patriarche Ibrahim.

La conjonction **wa** (et) coordonne les deux noms propres.

Le nom **musa** est un nom propre au cas genitif, coordonne avec ibrahima. C'est le nom arabe de Moussa.

La structure du verset est une apposition au verset 18 — elle precise de quels feuillets anciens il s'agit. Les deux versets 18-19 forment une seule phrase : « Cela se trouve bien dans les feuillets anciens, les feuillets d'Ibrahim et de Moussa. »

§JUSTIFICATION§
**feuillets** — Le meme mot et le meme sens qu'au verset 18. Pas de difference a justifier.

**Ibrahim** et **Moussa** — Les noms propres sont transcrits en francais sous leur forme arabe (Ibrahim, Moussa) et non sous leur forme hebraique francisee (Abraham, Moise). Le texte est en arabe et utilise les formes arabes de ces noms.

§CRITIQUE§
**Ibrahim vs Abraham** — Hamidullah traduit « Abraham et Moise ». Ces formes francisees viennent de la Bible hebraique via le grec et le latin. Le texte arabe dit ibrahima et musa — ce sont les formes arabes de ces noms. Utiliser les formes francisees n'est pas une erreur mais une convention de traduction qui efface l'identite linguistique du texte original.`
  });

  console.log('\nVERSET 87:19 — TERMINÉ');
  console.log('  SHf → Ecriture/Support → "feuillets"');

  console.log('\n=== PIPELINE S87 v16-19 TERMINÉE ===');
})();
