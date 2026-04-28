// Pipeline S88 v19-22 — Étapes 3-4 : Axes + Traductions
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    if (error) console.log(`  ERR update VWA ${word_key}: ${error.message}`);
    else console.log(`  ✓ VWA updated ${word_key} (id=${existing[0].id})`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  ERR insert VWA ${word_key}: ${error.message}`);
    else console.log(`  ✓ VWA created ${word_key} (id=${data.id})`);
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    if (error) console.log(`  ERR update VA: ${error.message}`);
    else console.log(`  ✓ VA updated (id=${existing[0].id})`);
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log(`  ERR insert VA: ${error.message}`);
    else console.log(`  ✓ VA created (id=${data.id})`);
  }
}

(async () => {
  console.log('=== PIPELINE S88 v19-22 — ÉTAPES 3-4 ===\n');

  // ============================================================
  // VERSET 19 (5986): وَإِلَى ٱلْجِبَالِ كَيْفَ نُصِبَتْ
  // ============================================================
  console.log('--- VERSET 19 ---');

  // jbl (id=1153) — ٱلْجِبَالِ — nom defini genitif
  await upsertVWA(5986, 'jbl', 'montagne', {
    sense_chosen: 'montagne',
    concept_chosen: 'Montagne/Solidite',
    concepts: {
      'Montagne/Solidite': {
        status: 'retenu',
        senses: ['montagne', 'etre solide et massif'],
        proof_ctx: "La racine j-b-l possede deux regroupements de sens. Montagne/Solidite est retenu car le mot al-jibal est le pluriel defini de jabal (montagne). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine j-b-l porte l'idee de solidite, de masse imposante — le jabal est la montagne, l'elevation massive et solide du terrain. Le pluriel jibal designe les montagnes au sens concret et physique. Le contexte est celui d'une question rhetorique sur la creation : « comment elles ont ete dressees ? ». Les montagnes sont un signe de la puissance creatrice — des masses enormes dressees verticalement. La distinction avec Creation/Nature est que le sens de creation (jibilla = petrir, creer) vient d'une forme derivee differente. Le verset utilise jibal (montagnes), pas jibilla (creation/petrissage). Le mot est directement et uniquement la montagne physique.",
        axe1_verset: "Le mot al-jibal (les montagnes) est l'objet de la preposition ila (vers). Le champ lexical est celui de la creation naturelle : les montagnes et la maniere dont elles ont ete dressees (nusibat). La question rhetorique kayfa nusibat (comment elles ont ete dressees) invite le destinataire a contempler les montagnes comme un signe de puissance creatrice. Le verset ne demande pas une reponse — il provoque l'emerveillement devant la solidite et la verticalite des montagnes.",
        axe2_voisins: "Le verset 17 posait la question rhetorique sur les chameaux (comment ils ont ete crees). Le verset 18 sur le ciel (comment il a ete eleve). Le verset 19 continue avec les montagnes (comment elles ont ete dressees). Le verset 20 conclura avec la terre (comment elle a ete etendue). La serie des quatre questions progresse du vivant (chameau) au celeste (ciel) au terrestre massif (montagnes) au terrestre etendu (terre). Les montagnes sont le troisieme element de cette contemplation de la creation.",
        axe3_sourate: "La sourate alterne entre chatiment (v2-7), recompense (v8-16) et contemplation de la creation (v17-20). Les montagnes font partie du troisieme volet — les signes de la puissance creatrice. Cette contemplation sert de transition vers l'injonction de rappeler (v21-22). Le destinataire doit observer la creation pour comprendre la puissance du Createur, puis rappeler aux gens cette puissance.",
        axe4_coherence: "Le Coran mentionne les montagnes comme signe de la creation dans de nombreux passages. En 78:7, « et les montagnes comme des piquets (awtad) ». En 79:32, « et les montagnes, Il les a ancrees ». En 15:19, « et Nous y avons place des montagnes solidement plantees ». Les montagnes sont systematiquement presentees comme une demonstration de la puissance creatrice — des masses enormes dressees et fixees dans le sol.",
        axe5_frequence: "La montagne est le symbole de la stabilite et de la puissance dans le Coran. Le khalifa observe les montagnes pour comprendre l'echelle de la creation — des masses que nul etre humain ne pourrait dresser. Cette observation nourrit l'humilite devant le Createur et la conscience de la grandeur du monde cree."
      },
      'Creation/Nature': { status: 'peu_probable', senses: ['creer', 'petrir'], proof_ctx: "Le sens de creation (jibilla = petrir, creer) vient d'une forme derivee differente de la racine j-b-l. Le verset utilise jibal (montagnes), le pluriel de jabal, pas jibilla. Le contexte est celui des montagnes physiques dressees dans le paysage, pas de l'acte de creation en tant que petrissage." }
    }
  }, 2);

  // nsb (id=994) — نُصِبَتْ — verbe passif accompli
  await upsertVWA(5986, 'nsb', 'dresser', {
    sense_chosen: 'dresser',
    concept_chosen: 'Erection/Installation',
    concepts: {
      'Erection/Installation': {
        status: 'retenu',
        senses: ['dresser', 'installer', 'idole (nusub)'],
        proof_ctx: "La racine n-s-b possede deux regroupements de sens. Erection/Installation est retenu car le verbe nusibat est un passif accompli de la forme I — « elles ont ete dressees ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine n-s-b signifie dresser, eriger, planter verticalement. Le verbe nasaba signifie dresser quelque chose, le planter debout, l'installer verticalement. Le passif nusibat (elles ont ete dressees) indique que les montagnes ont SUBI l'action d'etre dressees — une puissance exterieure les a erigees. Le sens est direct et physique : les montagnes ont ete plantees verticalement dans le paysage. La distinction avec Fatigue/Peine est que la fatigue (nasab/nasib) est un sens different de la meme racine — etre fatigue, la peine. Or le verbe nusibat est au passif de la forme I avec le sens d'eriger, pas de fatiguer. Les montagnes ne « se fatiguent » pas — elles ont ete « dressees ».",
        axe1_verset: "Le verbe nusibat (elles ont ete dressees) est le predicat de la question rhetorique kayfa nusibat (comment elles ont ete dressees). Le champ lexical est celui de l'erection verticale — dresser, planter debout. Le passif accompli indique une action terminee dont le resultat est visible : les montagnes sont la, dressees, et le destinataire peut les contempler. La question kayfa (comment) invite a la reflexion sur le mecanisme — comment une telle masse a-t-elle pu etre dressee ?",
        axe2_voisins: "Le verset 18 utilisait rufi'at (il a ete eleve) pour le ciel. Le verset 19 utilise nusibat (elles ont ete dressees) pour les montagnes. Le verset 20 utilisera sutihat (elle a ete etendue) pour la terre. Chaque verbe est adapte a son objet : le ciel est eleve (mouvement vers le haut), les montagnes sont dressees (plantees verticalement), la terre est etendue (deployee horizontalement). Trois verbes differents pour trois actes creatifs distincts.",
        axe3_sourate: "Les verbes passifs (khuligat v17, rufi'at v18, nusibat v19, sutihat v20) forment une serie coherente ou chaque element de la creation a subi une action specifique. Le passif indique que toutes ces actions viennent d'un meme agent non nomme — le Createur. La sourate construit l'evidence de la puissance creatrice par accumulation de signes.",
        axe4_coherence: "Le Coran utilise d'autres verbes pour decrire la fixation des montagnes. En 78:7, les montagnes sont des awtad (piquets). En 79:32, arsaha (Il les a ancrees). En 88:19, nusibat (elles ont ete dressees). Chaque verbe eclaire un aspect different : les montagnes sont des piquets (stabilite), elles ont ete ancrees (fixation), elles ont ete dressees (erection verticale). Le verbe nusibat insiste sur la verticalite de l'acte.",
        axe5_frequence: "L'erection des montagnes est un acte de puissance incomparable. Le khalifa qui observe une montagne dressee voit le resultat d'un acte qu'aucune force humaine ne peut reproduire. Cette contemplation nourrit la conscience de la hierarchie des puissances — la creation depasse infiniment la capacite humaine."
      },
      'Fatigue/Peine': { status: 'nul', senses: ['etre fatigue', 'peine', 'effort'], proof_ctx: "Le sens de fatigue (nasab = peine, effort) ne correspond pas au verbe nusibat qui est le passif accompli de nasaba (dresser). Les montagnes ne « se fatiguent » pas et ne subissent pas la peine. Le verbe nusibat signifie qu'elles ont ete erigees, dressees verticalement — un acte de creation physique, pas un etat de fatigue." }
    }
  }, 4);

  // VA verset 19
  await upsertVA(5986, {
    segments: [
      { fr: 'Et vers', pos: 'CONJ+P', phon: 'wa-ila', arabic: 'وَإِلَى', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'les montagnes', pos: 'N', phon: 'al-jibal', arabic: 'ٱلْجِبَالِ', word_key: 'jbl', is_particle: false, sense_retenu: 'montagne', position: 2 },
      { fr: 'comment', pos: 'INTG', phon: 'kayfa', arabic: 'كَيْفَ', word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: 'elles ont ete dressees', pos: 'V', phon: 'nusibat', arabic: 'نُصِبَتْ', word_key: 'nsb', is_particle: false, sense_retenu: 'dresser', position: 4 }
    ],
    translation_arab: "Et vers les montagnes, comment elles ont ete dressees",
    full_translation: "Et vers les montagnes, comment elles ont ete dressees?",
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) suivie de la preposition **ila** (vers) forme wa-ila — « et vers ». Cette construction reprend la structure des versets 17 et 18 (a-fa-la yanzuruna ila... « ne regardent-ils pas vers... »). Le « et vers » prolonge la serie de questions rhetoriques sur la creation : apres les chameaux (v17) et le ciel (v18), le regard se tourne vers les montagnes.

Le mot **al-jibal** est le pluriel defini de jabal (montagne). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine j-b-l porte l'idee de solidite et de masse imposante. Le pluriel jibal designe les montagnes au sens physique et concret — les grandes elevations rocheuses du paysage. Le defini al- (les) indique qu'il s'agit des montagnes en general, toutes les montagnes visibles, pas une montagne particuliere.

La particule interrogative **kayfa** (comment) introduit la question rhetorique. Elle ne demande pas une reponse factuelle mais provoque la reflexion : comment est-il possible que de telles masses soient dressees verticalement ? L'interrogation est un outil pedagogique — elle force le destinataire a penser au mecanisme de la creation.

Le verbe **nusibat** est un passif accompli de la forme I de n-s-b. D'apres les sources etymologiques, nasaba signifie dresser, eriger, planter verticalement. Le passif nusibat (elles ont ete dressees) indique que les montagnes ont subi l'action — une puissance exterieure les a erigees. L'accompli indique que l'action est terminee : les montagnes sont la, debout, le resultat est visible. Le ta' marbutah du feminin est coherent avec le pluriel brise jibal (traite comme feminin singulier en arabe).

§JUSTIFICATION§
**montagnes** — Le sens retenu est « montagne » du regroupement Montagne/Solidite. Le mot « montagnes » rend directement al-jibal. Il n'y a pas d'ambiguite : jibal est le pluriel standard de jabal (montagne). L'alternative « masses solides » serait une paraphrase inutile — « montagnes » est le mot juste et naturel en francais.

**dressees** — Le sens retenu est « dresser » du regroupement Erection/Installation. Le mot « dressees » rend le passif nusibat avec precision : dresser signifie mettre debout, eriger verticalement. L'alternative « installees » serait trop vague — on installe un meuble, pas une montagne. L'alternative « erigees » serait acceptable mais plus technique. « Dressees » est le mot le plus naturel en francais pour decrire des montagnes qui se tiennent debout.

§CRITIQUE§
**dressees vs fixees** — Hamidullah traduit « dressees ». La concordance est parfaite ici — les deux traductions retiennent le meme mot. Le verbe arabe nusibat insiste sur la verticalite de l'acte (dresser = mettre debout), pas sur la fixation (ancrer = fixer dans le sol). D'autres versets coraniques utilisent arsaha (ancrer, 79:32) pour la fixation — le verset 88:19 choisit nusibat pour l'erection verticale. La traduction « dressees » est fidele a cette nuance.`
  });
  console.log('  v19 done\n');

  // ============================================================
  // VERSET 20 (5987): وَإِلَى ٱلْأَرْضِ كَيْفَ سُطِحَتْ
  // ============================================================
  console.log('--- VERSET 20 ---');

  // ard (id=324) — ٱلْأَرْضِ — nom defini genitif
  await upsertVWA(5987, 'ard', 'terre', {
    sense_chosen: 'terre',
    concept_chosen: 'Terre/Sol',
    concepts: {
      'Terre/Sol': {
        status: 'retenu',
        senses: ['terre', 'sol', 'pays', 'bas'],
        proof_ctx: "La racine '-r-d possede trois regroupements de sens. Terre/Sol est retenu car le mot al-ard est le nom defini signifiant « la terre ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine '-r-d designe la terre, le sol, le pays, la partie basse. Le mot al-ard est le terme standard pour la terre au sens physique — le sol sur lequel on marche, la surface terrestre. Le contexte est celui d'une question rhetorique sur la creation : « comment elle a ete etendue ». La terre est le quatrieme et dernier element de la contemplation (chameau, ciel, montagnes, terre). La distinction avec Rhume et Tremblement est que ces sens sont des sens isoles et marginaux qui ne correspondent pas au contexte de la creation. Le defini al- (la) designe la terre en general, comme element fondamental de la creation.",
        axe1_verset: "Le mot al-ard (la terre) est l'objet de la preposition ila (vers). Le champ lexical est celui de la surface terrestre — la terre etendue, aplanie. La question rhetorique kayfa sutihat (comment elle a ete etendue) invite a contempler l'immensitee de la surface terrestre. Le verset clot la serie de quatre questions en ramenant le regard au sol — apres avoir contemple le vivant (chameau), le celeste (ciel) et le vertical (montagnes), le regard se pose sur l'horizontal (terre).",
        axe2_voisins: "Le verset 19 posait la question sur les montagnes (vertical). Le verset 20 pose la question sur la terre (horizontal). Le contraste entre montagnes dressees (nusibat) et terre etendue (sutihat) est delibere : la creation comporte des verticales et des horizontales, des masses et des surfaces. Le verset 20 conclut la serie des quatre questions et prepare la transition vers l'injonction de rappeler (v21).",
        axe3_sourate: "La terre est le dernier element contemple avant le passage a l'injonction. La sourate passe de la contemplation (v17-20) au commandement (v21 : rappelle !). La terre est le dernier signe observe — apres quatre preuves de la puissance creatrice, le texte conclut : tu as vu les signes, maintenant rappelle aux gens.",
        axe4_coherence: "Le Coran mentionne la terre comme signe de la creation dans de nombreux passages. En 51:48, « et la terre, Nous l'avons etendue ». En 79:30, « et la terre, apres cela, Il l'a etendue (dahaha) ». En 91:6, « et la terre et Celui qui l'a etendue (tahaha) ». L'extension de la terre est un theme coranique recurrent — la surface terrestre est presentee comme un acte de deploiement et d'aplanissement.",
        axe5_frequence: "La terre est le lieu de la vie du khalifa — c'est sur cette surface etendue qu'il exerce sa responsabilite. Contempler l'etendue de la terre, c'est prendre conscience de l'ampleur du territoire confie. La terre etendue est a la fois un don (un espace habitable) et une responsabilite (un espace a gerer)."
      },
      'Sens isole/Rhume': { status: 'nul', senses: ['rhume'], proof_ctx: "Sens isole sans rapport avec le contexte de la creation. Le verset parle de la terre physique, pas d'une maladie." },
      'Sens isole/Tremblement': { status: 'nul', senses: ['tremblement'], proof_ctx: "Sens isole sans rapport avec le contexte. Le verset decrit l'extension de la terre, pas un tremblement de terre. Le tremblement est un sens marginal de la racine qui ne s'applique pas ici." }
    }
  }, 2);

  // stH (id=2645) — سُطِحَتْ — verbe passif accompli
  await upsertVWA(5987, 'stH', 'etendre', {
    sense_chosen: 'etendre',
    concept_chosen: 'Extension/Aplanissement',
    concepts: {
      'Extension/Aplanissement': {
        status: 'retenu',
        senses: ['etendre', 'aplanir', 'deployer', 'faire secher des dattes en les etalant', 'rendre egal et plat'],
        proof_ctx: "La racine s-t-H possede cinq regroupements de sens. Extension/Aplanissement est retenu car le verbe sutihat est un passif accompli — « elle a ete etendue/aplanie ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-t-H signifie etendre, aplanir, deployer sur une surface, rendre plat et egal. Le verbe sataha signifie etendre quelque chose, le rendre plat. Le passif sutihat indique que la terre a SUBI l'action d'etre etendue — une puissance exterieure l'a deployee et aplanie. La distinction avec Surface/Toit est que le satH (surface, toit plat) est le RESULTAT de l'extension, pas l'acte lui-meme. Le passif accompli impose l'acte subi (elle a ete etendue), pas le resultat (elle est une surface). La terre a ete FAITE plate, elle n'EST pas simplement plate — c'est l'action creatrice qui est au centre, pas l'etat final.",
        axe1_verset: "Le verbe sutihat (elle a ete etendue) est le predicat de la question rhetorique kayfa sutihat (comment elle a ete etendue). Le champ lexical est celui du deploiement horizontal — etendre, aplanir. Le passif accompli indique une action terminee dont le resultat est visible : la terre est etendue devant les yeux du destinataire. La question kayfa invite a la reflexion sur l'immensitee de la surface terrestre et la puissance necessaire pour l'etendre ainsi.",
        axe2_voisins: "Le verset 19 decrivait les montagnes dressees (vertical). Le verset 20 decrit la terre etendue (horizontal). Le contraste est geometrique : nasaba (dresser) est vertical, sataha (etendre) est horizontal. Les deux actes creatifs sont complementaires — la creation comporte des axes verticaux et horizontaux. Le verset 20 clot la serie des quatre questions et prepare la transition vers l'injonction (v21).",
        axe3_sourate: "Le verbe sutihat est le dernier d'une serie de quatre passifs (khuligat, rufi'at, nusibat, sutihat) qui decrivent quatre actes creatifs. Chaque passif pointe vers le meme agent non nomme. La serie s'acheve sur la terre — le plus proche, le plus tangible, le plus quotidien des signes. La sourate va du lointain (ciel) au proche (terre sous les pieds) avant de commander : rappelle !",
        axe4_coherence: "Le Coran utilise plusieurs verbes pour decrire l'extension de la terre. En 51:48, farashna (Nous l'avons etendue comme un tapis). En 79:30, dahaha (Il l'a etendue). En 88:20, sutihat (elle a ete aplanie). Chaque verbe eclaire un aspect : farasha insiste sur le confort (tapis), daha sur le deploiement, sataha sur l'aplanissement. Le verset 88:20 insiste sur la planeite de la surface — la terre est rendue plate et praticable.",
        axe5_frequence: "L'extension de la terre est l'acte qui rend la vie possible. Sans surface plate et etendue, il n'y a pas d'habitation, pas d'agriculture, pas de civilisation. Le khalifa vit sur cette surface etendue et en depend. Contempler l'extension de la terre, c'est reconnaitre le fondement meme de la vie terrestre."
      },
      'Surface/Toit': { status: 'probable', senses: ['surface superieure', 'toit plat', 'surface plate de toute chose'], proof_ctx: "Le satH (surface, toit plat) est le RESULTAT de l'extension — quand on etend et aplanit quelque chose, on obtient une surface plate. Le passif accompli sutihat (elle a ete etendue) designe l'acte, pas le resultat. Le sens de Surface/Toit est donc probable car il decoule directement de l'acte d'extension, mais le verset met en avant l'action (comment elle a ete etendue), pas l'etat final (elle est une surface)." },
      'Prostration/Immobilite': { status: 'nul', senses: ['etre etendu sur le dos immobile', 'malade chronique'], proof_ctx: "Le sens de prostration ou d'immobilite s'applique a une personne etendue sur le dos, pas a la terre. Le contexte est la creation de la terre, pas un etat d'immobilite humaine." },
      'Sens isole/Recipient': { status: 'nul', senses: ['outre a eau'], proof_ctx: "Sens isole marginal sans rapport avec le contexte de la terre et de la creation." },
      'Sens isole/Plante': { status: 'nul', senses: ['plante rampante'], proof_ctx: "Sens isole marginal sans rapport avec le contexte. Le verset parle de l'extension de la terre, pas d'une plante." }
    }
  }, 4);

  // VA verset 20
  await upsertVA(5987, {
    segments: [
      { fr: 'Et vers', pos: 'CONJ+P', phon: 'wa-ila', arabic: 'وَإِلَى', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'la terre', pos: 'N', phon: 'al-ard', arabic: 'ٱلْأَرْضِ', word_key: 'ard', is_particle: false, sense_retenu: 'terre', position: 2 },
      { fr: 'comment', pos: 'INTG', phon: 'kayfa', arabic: 'كَيْفَ', word_key: null, is_particle: true, sense_retenu: null, position: 3 },
      { fr: 'elle a ete etendue', pos: 'V', phon: 'sutihat', arabic: 'سُطِحَتْ', word_key: 'stH', is_particle: false, sense_retenu: 'etendre', position: 4 }
    ],
    translation_arab: "Et vers la terre, comment elle a ete etendue",
    full_translation: "Et vers la terre, comment elle a ete etendue?",
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) suivie de la preposition **ila** (vers) forme wa-ila — « et vers ». Cette construction reprend la structure identique des versets 17, 18 et 19. Le « et vers » prolonge et conclut la serie des quatre questions rhetoriques sur la creation. Le regard du destinataire se tourne maintenant vers la terre — l'element le plus proche et le plus quotidien.

Le mot **al-ard** est un nom defini au genitif (regi par la preposition ila). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine '-r-d designe la terre, le sol, le pays. Le mot al-ard est le terme standard pour la terre au sens physique. Le defini al- (la) designe la terre dans sa totalite — toute la surface terrestre, pas un terrain particulier.

La particule interrogative **kayfa** (comment) introduit la question rhetorique, identique a la structure des trois versets precedents. Elle ne demande pas une reponse technique mais provoque l'emerveillement devant l'immensitee de la surface terrestre.

Le verbe **sutihat** est un passif accompli de la forme I de s-t-H. D'apres les sources etymologiques, la racine s-t-H signifie etendre, aplanir, rendre plat et egal. Le verbe sataha signifie deployer quelque chose sur une surface, l'aplanir. Le passif sutihat (elle a ete etendue) indique que la terre a subi l'action — une puissance exterieure l'a deployee et rendue plate. L'accompli indique que l'action est terminee : la terre est etendue, le resultat est la, visible sous les pieds du destinataire.

§JUSTIFICATION§
**terre** — Le sens retenu est « terre » du regroupement Terre/Sol. Le mot « terre » est le seul mot naturel pour al-ard dans ce contexte. Il n'y a aucune ambiguite : al-ard designe la terre physique, le sol, la surface terrestre.

**etendue** — Le sens retenu est « etendre » du regroupement Extension/Aplanissement. Le mot « etendue » rend le passif sutihat avec precision : la terre a ete deployee, aplanie, rendue vaste et plate. L'alternative « nivelée » (comme chez Hamidullah) insiste sur l'egalisation de la surface, tandis que « etendue » insiste sur le deploiement horizontal. Le verbe arabe sataha porte les deux nuances (etendre ET aplanir), mais « etendue » capture mieux l'idee d'un deploiement vaste et horizontal.

§CRITIQUE§
**nivelee vs etendue** — Hamidullah traduit « nivelee ». Le verbe « niveler » signifie rendre plat et egal, supprimer les inegalites — c'est l'aspect d'aplanissement. Le verbe « etendre » signifie deployer sur une grande surface — c'est l'aspect d'extension. Le verbe arabe sataha combine les deux : etendre ET aplanir. Le choix de « nivelee » chez Hamidullah privilegie l'aspect technique (rendre egal), tandis que « etendue » privilegie l'aspect visuel et contemplatif (deployee a perte de vue). Dans le contexte d'une question rhetorique qui invite a l'emerveillement, « etendue » rend mieux l'idee de vastite que « nivelee » qui reste plus technique.`
  });
  console.log('  v20 done\n');

  // ============================================================
  // VERSET 21 (5988): فَذَكِّرْ إِنَّمَآ أَنتَ مُذَكِّرٌ
  // ============================================================
  console.log('--- VERSET 21 ---');

  // ðkr (id=1051) — فَذَكِّرْ + مُذَكِّرٌ — imperatif forme II + participe actif forme II
  await upsertVWA(5988, 'ðkr', 'rappeler', {
    sense_chosen: 'rappeler',
    concept_chosen: 'Rappel/Memoire',
    concepts: {
      'Rappel/Memoire': {
        status: 'retenu',
        senses: ['se souvenir', 'rappeler', 'mentionner', 'evoquer', 'memoire'],
        proof_ctx: "La racine dh-k-r possede trois regroupements de sens. Rappel/Memoire est retenu car les deux mots du verset qui portent cette racine sont a la forme II (causative/intensive) : dhakkir (imperatif forme II = fais rappeler !, rappelle !) et mudhakkir (participe actif forme II = celui qui fait rappeler, le rappeleur). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine dh-k-r signifie se souvenir, evoquer, mentionner. La forme II dhakkara est causative : faire se souvenir, rappeler a quelqu'un, ramener a la memoire. Le verbe dhakkir est l'imperatif de cette forme II — c'est un ordre direct : « rappelle ! ». Le mot mudhakkir est le participe actif de la meme forme II — « celui qui rappelle, le rappeleur ». La distinction avec Masculinite est que dhakar (male, masculin) est un sens de la forme I sans rapport avec la forme II utilisee ici. La distinction avec Renommee est que la renommee est un sens derive (etre celebre = etre mentionne par les gens), mais le verset utilise la forme II qui est specifiquement le rappel actif, pas la renommee passive.",
        axe1_verset: "La racine dh-k-r apparait deux fois dans le verset : dhakkir (rappelle !) et mudhakkir (rappeleur). Le champ lexical est celui du rappel — l'acte de faire se souvenir. La structure du verset est une injonction suivie d'une restriction : « rappelle ! tu n'es qu'un rappeleur ». Le fa- (alors) lie l'injonction aux questions rhetoriques precedentes (v17-20) — apres avoir contemple les signes de la creation, la consequence logique est de rappeler aux gens. La restriction innama (seulement, ne...que) delimite la fonction : le destinataire est un rappeleur, rien de plus.",
        axe2_voisins: "Les versets 17-20 etaient une serie de questions rhetoriques sur la creation. Le verset 21 tire la consequence : « alors rappelle ! ». Le passage de la contemplation au commandement est abrupt et efficace — quatre questions d'emerveillement, puis un imperatif. Le verset 22 completera en precisant ce que le destinataire n'est PAS (un dominateur). La paire v21-v22 definit la mission : rappeler (positif) sans dominer (negatif).",
        axe3_sourate: "Le verset 21 est le pivot de la sourate. Apres le chatiment (v2-7), la recompense (v8-16) et la contemplation de la creation (v17-20), le texte revient au destinataire : ta mission est de rappeler. Toute la sourate converge vers cette injonction — les descriptions du chatiment, de la recompense et de la creation sont les arguments que le rappeleur doit utiliser. La restriction « tu n'es qu'un rappeleur » fixe les limites de la mission — pas de contrainte, pas de domination.",
        axe4_coherence: "Le Coran utilise la racine dh-k-r a la forme II dans de nombreux passages d'injonction. En 51:55, « rappelle (dhakkir) car le rappel profite aux croyants ». En 87:9, « rappelle (dhakkir) si le rappel est utile ». En 50:45, « rappelle (dhakkir) par le Coran celui qui craint Ma menace ». L'imperatif dhakkir est un leitmotiv coranique — le rappel est la mission fondamentale assignee au destinataire du message.",
        axe5_frequence: "Le rappel est la fonction centrale du khalifa-prophete. Il ne cree pas la foi, il ne contraint pas les coeurs — il rappelle. Le rappel suppose que la verite est deja connue (inscrite dans la nature humaine) et qu'elle a ete oubliee. Le rappeleur ne revele rien de nouveau — il reactive ce qui est enfoui. C'est une mission d'eveil, pas de creation."
      },
      'Masculinite': { status: 'nul', senses: ['male', 'masculin'], proof_ctx: "Le sens de masculinite (dhakar = male) est un sens de la forme I sans rapport avec la forme II utilisee dans le verset. Le verbe dhakkir et le nom mudhakkir sont tous deux a la forme II (causative) dont le sens est faire rappeler, pas etre masculin." },
      'Renommee/Reputation': { status: 'nul', senses: ['etre celebre', 'renom'], proof_ctx: "La renommee (etre mentionne par les gens, etre celebre) est un sens derive passif — on est mentionne, on est celebre. Le verset utilise la forme II active : dhakkir (rappelle !) et mudhakkir (celui qui rappelle). Le rappel est un acte volontaire et actif dirige vers les gens, pas une reputation passive." }
    }
  }, 1);

  // VA verset 21
  await upsertVA(5988, {
    segments: [
      { fr: 'Alors rappelle!', pos: 'CONJ+V', phon: 'fa-dhakkir', arabic: 'فَذَكِّرْ', word_key: 'ðkr', is_particle: false, sense_retenu: 'rappeler', position: 1 },
      { fr: 'Tu n\'es que', pos: 'PART', phon: 'innama anta', arabic: 'إِنَّمَآ أَنتَ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'un rappeleur', pos: 'N', phon: 'mudhakkir', arabic: 'مُذَكِّرٌ', word_key: 'ðkr', is_particle: false, sense_retenu: 'rappeler', position: 3 }
    ],
    translation_arab: "Alors rappelle! Tu n'es qu'un rappeleur",
    full_translation: "Alors rappelle! Tu n'es qu'un rappeleur",
    translation_explanation: `§DEMARCHE§
La particule **fa** (alors, donc) est une conjonction conclusive qui tire la consequence de ce qui precede. Apres les quatre questions rhetoriques sur la creation (v17-20), le texte conclut : « alors rappelle ! ». Le fa- etablit un lien logique — puisque les signes de la creation sont evidents, la consequence est de rappeler aux gens cette evidence.

Le verbe **dhakkir** est un imperatif de la forme II de la racine dh-k-r. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme II dhakkara est causative : faire se souvenir, rappeler a quelqu'un ce qu'il a oublie. L'imperatif dhakkir est un ordre direct a la deuxieme personne du singulier — « rappelle ! ». La forme II implique une intensite : ce n'est pas simplement mentionner, c'est activement ramener a la memoire, faire revenir a la conscience ce qui etait enfoui.

La particule **innama** est une particule de restriction qui signifie « seulement, ne...que ». Elle est composee de inna (certes) et de ma (ce qui) et forme une restriction absolue. Le pronom **anta** (tu) est le sujet de la phrase nominale. La construction innama anta mudhakkir signifie « tu n'es qu'un rappeleur » — elle delimite strictement la fonction du destinataire. Il n'est rien d'autre qu'un rappeleur — pas un juge, pas un dominateur, pas un contraigneur.

Le mot **mudhakkir** est un participe actif de la forme II (meme forme que le verbe dhakkir). D'apres les sources etymologiques, mudhakkir signifie « celui qui fait rappeler, le rappeleur ». Le participe actif designe l'agent de l'action — celui dont la fonction est de rappeler. La repetition de la racine dh-k-r dans le meme verset (dhakkir + mudhakkir) cree une insistance : rappelle, car tu es un rappeleur — ta fonction est exactement cela et rien d'autre.

§JUSTIFICATION§
**rappelle** — Le sens retenu est « rappeler » du regroupement Rappel/Memoire. Le verbe « rappelle » rend l'imperatif dhakkir avec naturel et precision. L'alternative « fais se souvenir » serait une periphrase qui rendrait la causativite de la forme II mais alourdirait la phrase. L'alternative « mentionne » serait trop faible — dhakkir est plus fort que mentionner, c'est activement ramener a la memoire.

**rappeleur** — Le sens retenu est « rappeler » du regroupement Rappel/Memoire. Le mot « rappeleur » est un neologisme transparent en francais : celui qui rappelle. L'alternative « celui qui rappelle » serait une periphrase correcte mais moins percutante. Hamidullah utilise aussi « rappeleur » — le mot est etabli dans la tradition de traduction coranique francaise.

§CRITIQUE§
**rappelle vs Eh bien, rappelle** — Hamidullah traduit « Eh bien, rappelle ! ». La particule fa- est rendue par « eh bien » chez Hamidullah, ce qui donne un ton conversationnel. La traduction « alors » rend le fa- par sa valeur conclusive — « alors, en consequence de ce qui precede ». Les deux rendus sont valides. « Alors » est plus direct et logique. « Eh bien » est plus oral et interpellatif. Le fa- arabe est une particule polyvalente qui peut prendre les deux nuances.`
  });
  console.log('  v21 done\n');

  // ============================================================
  // VERSET 22 (5989): لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ
  // ============================================================
  console.log('--- VERSET 22 ---');

  // lys (id=761) — لَّسْتَ — verbe de negation
  await upsertVWA(5989, 'lys', 'ne pas etre', {
    sense_chosen: 'ne pas etre',
    concept_chosen: 'Negation/Non-existence',
    concepts: {
      'Negation/Non-existence': {
        status: 'retenu',
        senses: ['ne pas etre', 'il n\'y a pas'],
        proof_ctx: "La racine l-y-s n'a qu'un seul regroupement de sens (Negation/Non-existence). Le verbe laysa est un verbe de negation qui signifie « ne pas etre ». Le mot lasta est la forme conjuguee a la deuxieme personne du singulier accompli — « tu n'es pas ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), laysa est un verbe defectif qui nie l'existence ou la qualite attribuee au sujet. Le sens est automatiquement retenu car c'est le seul regroupement de la racine. Dans le verset, lasta (tu n'es pas) nie la qualite de dominateur (musaytir) — le destinataire est defini par ce qu'il n'est PAS."
      }
    }
  }, 1);

  // str (id=1740) — بِمُصَيْطِرٍ — nom indefini genitif
  await upsertVWA(5989, 'str', 'dominateur', {
    sense_chosen: 'dominateur',
    concept_chosen: 'Ecriture/Inscription',
    concepts: {
      'Ecriture/Inscription': {
        status: 'retenu',
        senses: ['ecrire', 'ligne', 'rangee'],
        proof_ctx: "La racine s-t-r possede deux regroupements de sens. Ecriture/Inscription est retenu car le mot musaytir derive etymologiquement de cette racine. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le musaytir est « celui qui exerce une autorite absolue, un maitre, un controleur, un surintendant ». L'evolution semantique est la suivante : satara signifie ecrire, inscrire, enregistrer. De l'idee d'ecrire et d'enregistrer decoule l'idee de controle — celui qui inscrit et enregistre a pouvoir sur ce qu'il enregistre. Le saytara est l'acte de prendre le controle total, de dominer. Le musaytir est donc l'aboutissement semantique de la racine s-t-r : de l'inscription a l'autorite, de l'enregistrement a la domination. Le mot musaytir n'est pas un scribe — c'est un controleur absolu, un dominateur. Mais cette autorite DECOULE de la capacite d'inscrire et d'enregistrer. La distinction avec Recits anciens est que les asatir (fables, recits des anciens) sont un sens derive pejoratif (ce qui est ecrit = les vieilles histoires, les fables) qui ne correspond pas au musaytir. Le musaytir derive du sens actif de l'inscription (celui qui inscrit et donc controle), pas du sens passif (ce qui est inscrit et donc vieux).",
        axe1_verset: "Le mot musaytir (dominateur) est le predicat de la phrase negative lasta 'alayhim bi-musaytir (tu n'es pas sur eux un dominateur). Le champ lexical est celui de l'autorite et du controle. La preposition 'ala (sur) renforce l'idee de domination — etre « sur » quelqu'un signifie le surplomber, le controler. Le bi- (avec/en tant que) devant musaytir insiste sur la qualite niee : tu n'es pas EN TANT QUE dominateur. La negation est categorique — le destinataire ne detient pas l'autorite coercitive sur les gens.",
        axe2_voisins: "Le verset 21 definissait la mission positive : rappelle, tu n'es qu'un rappeleur. Le verset 22 definit la limite negative : tu n'es pas un dominateur. La paire v21-v22 encadre la mission du destinataire avec precision — rappeler (oui) / dominer (non). La restriction du v21 (innama = seulement) et la negation du v22 (lasta = tu n'es pas) convergent vers le meme message : ta mission est limitee au rappel.",
        axe3_sourate: "La sourate se termine sur cette delimitation de la mission. Apres le chatiment (v2-7), la recompense (v8-16) et les signes de la creation (v17-20), le texte conclut : rappelle et ne domine pas. La sourate ne donne pas au destinataire le pouvoir de chatier ou de recompenser — ce pouvoir appartient a un autre. Le destinataire est un intermediaire, pas un juge.",
        axe4_coherence: "Le Coran delimite la mission du destinataire dans de nombreux passages similaires. En 50:45, « tu n'es pas un contraigneur (jabbar) sur eux ». En 6:107, « Nous ne t'avons pas fait gardien (hafiz) sur eux ». En 42:48, « Nous ne t'avons pas fait gardien sur eux ». Le theme est recurrent : le destinataire rappelle, il ne contraint pas. Le musaytir de 88:22 rejoint le jabbar de 50:45 — les deux mots designent une autorite coercitive que le destinataire ne detient pas.",
        axe5_frequence: "La distinction entre rappel et domination est fondamentale pour la mission du khalifa-prophete. Le rappeleur agit par la parole, pas par la force. Il eveille les consciences, il ne soumet pas les corps. Le musaytir est celui qui controle tout — le rappeleur est celui qui parle et laisse l'auditeur libre de sa reponse. Cette liberte est au coeur de la mission prophetique coranique."
      },
      'Recits anciens': { status: 'nul', senses: ['fables'], proof_ctx: "Les asatir (fables, recits des anciens) sont un sens derive passif de la racine s-t-r : ce qui a ete ecrit autrefois, les vieilles histoires. Ce sens ne correspond pas au musaytir du verset. Le musaytir derive du sens actif (celui qui inscrit et controle), pas du sens passif (ce qui est inscrit et donc ancien). Le verset parle d'autorite et de domination, pas de fables." }
    }
  }, 3);

  // VA verset 22
  await upsertVA(5989, {
    segments: [
      { fr: 'Tu n\'es pas', pos: 'V', phon: 'lasta', arabic: 'لَّسْتَ', word_key: 'lys', is_particle: false, sense_retenu: 'ne pas etre', position: 1 },
      { fr: 'sur eux', pos: 'P+PRON', phon: "'alayhim", arabic: 'عَلَيْهِم', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'un dominateur', pos: 'N', phon: 'musaytir', arabic: 'بِمُصَيْطِرٍ', word_key: 'str', is_particle: false, sense_retenu: 'dominateur', position: 3 }
    ],
    translation_arab: "Tu n'es pas sur eux un dominateur",
    full_translation: "Tu n'es pas sur eux un dominateur",
    translation_explanation: `§DEMARCHE§
Le verbe **lasta** est la forme conjuguee de laysa a la deuxieme personne du singulier accompli. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), laysa est un verbe defectif de negation qui signifie « ne pas etre ». Le verbe lasta (tu n'es pas) nie directement une qualite attribuee au sujet (tu). C'est une negation ontologique — tu n'es pas cela, ce n'est pas ta nature, ce n'est pas ta fonction.

La preposition **'ala** (sur) suivie du pronom **-him** (eux) forme 'alayhim — « sur eux ». La preposition 'ala implique une position de superiorite, de surplomb — etre « sur » quelqu'un signifie le dominer, le controler. Le pronom « eux » designe les gens auxquels le rappel est adresse (v21). La construction lasta 'alayhim (tu n'es pas sur eux) nie la position de domination du destinataire sur les gens.

Le mot **musaytir** est un nom au genitif indefini, precede de la preposition bi- qui renforce la negation de laysa (construction classique laysa ... bi- = ne pas etre du tout). D'apres les sources etymologiques, la racine s-t-r signifie ecrire, inscrire, enregistrer. Le musaytir est etymologiquement « celui qui inscrit et enregistre, et donc celui qui controle et domine ». L'evolution semantique va de l'inscription a l'autorite : celui qui tient les registres detient le pouvoir. Le musaytir n'est pas un simple scribe — c'est un controleur absolu, un dominateur, un surintendant qui a autorite totale sur les gens. Le bi- devant musaytir insiste sur la qualite niee : tu n'es absolument pas un dominateur.

§JUSTIFICATION§
**ne pas etre** — Le sens retenu est « ne pas etre » du regroupement Negation/Non-existence. Le verbe laysa est le seul verbe de negation existentielle en arabe. La traduction « tu n'es pas » est la seule possible — il n'y a pas d'alternative.

**dominateur** — Le sens retenu est « dominateur » derive du regroupement Ecriture/Inscription. Le mot « dominateur » rend le sens du musaytir tel que decrit par les sources etymologiques : celui qui exerce une autorite absolue, un controleur, un maitre. L'alternative « controleur » serait acceptable mais plus faible — le musaytir est au-dela du simple controle, c'est une domination totale. L'alternative « tyran » serait trop pejoratif — le verset nie simplement la fonction de domination sans la qualifier de tyrannique. Hamidullah traduit aussi « dominateur », ce qui confirme que c'est le rendu le plus juste.

§CRITIQUE§
**dominateur sur eux vs un dominateur sur eux** — Hamidullah traduit « Tu n'es pas un dominateur sur eux ». La difference avec notre traduction est minime — l'ordre des mots differe legerement. Le texte arabe dit lasta 'alayhim bi-musaytir — litteralement « tu n'es pas sur eux un dominateur ». L'arabe place 'alayhim (sur eux) avant bi-musaytir (un dominateur), ce qui met l'accent sur la relation « sur eux » avant de preciser la nature de cette relation (domination). Notre traduction preserve cet ordre arabe, tandis que Hamidullah reorganise pour un francais plus fluide. Les deux sont valides — la difference est stylistique, pas semantique.`
  });
  console.log('  v22 done\n');

  console.log('=== PIPELINE S88 v19-22 TERMINE ===');
})();
