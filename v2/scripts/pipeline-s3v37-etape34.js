const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 330;
const VA_ID = 692;

(async()=>{
  console.log('=== PIPELINE S3:V37 ===\n');

  // =============================================
  // 1. ENRICHISSEMENT — 4 racines suspectes
  // =============================================

  // --- 1a. nbt (579): 4 → 10+ sens ---
  console.log('--- 1a. Enrichir nbt (ن ب ت) ---');
  const {data:nbtEx} = await db.from('word_meanings').select('id,display_order').eq('analysis_id',579).order('display_order');
  const nbtMax = Math.max(...nbtEx.map(s=>s.display_order),0);
  console.log('nbt existant:', nbtEx.length, 'sens');

  const nbtNew = [
    {concept:'Croissance végétale', sense:'lieu de croissance',
     description:"Le Lane's donne manbit : a place in which plants or herbs grow. Le lieu où la croissance se produit."},
    {concept:'Croissance végétale', sense:'enraciné',
     description:"Le Lane's donne mutanabbit : firmly rooted. Celui qui a pris racine solidement dans le sol."},
    {concept:'Éducation/Nourriture', sense:'nourrir/élever un enfant',
     description:"Le Lane's donne nabbata : he fed or nourished, or reared or brought up, a child ; he nourished a girl and nursed her up well. Le sens de nourrir un enfant est une extension métaphorique de la croissance végétale — comme on fait pousser une plante, on fait grandir un enfant. C'est un acte extérieur, directionnel et prolongé dans le temps : celui qui nourrit agit sur l'enfant de façon continue."},
    {concept:'Éducation/Nourriture', sense:'jeunes pousses (enfants)',
     description:"Le Lane's donne nābita : young offspring that grew up and became conjoined to the old. Les enfants qui poussent comme des pousses végétales."},
    {concept:'Origine/Race', sense:'origine',
     description:"Le Lane's donne manbit : origin, or race from which a man springs. L'origine est le lieu d'où l'on pousse — la racine de l'être humain. C'est un état permanent qui définit l'identité. Le Lane's donne en exemple : il est d'une excellente origine (fī manbiṭi ṣidqin)."},
    {concept:'Origine/Race', sense:'bonne souche',
     description:"Le Lane's donne : he belongs to an excellent race, is of an excellent origin. Être de bonne extraction, avoir de bonnes racines."}
  ].map((s,i)=>({...s, analysis_id:579, display_order:nbtMax+1+i, meaning_type:'etymology'}));

  const {error:nbtErr} = await db.from('word_meanings').insert(nbtNew);
  console.log('nbt insert:', nbtErr ? 'ERROR: '+nbtErr.message : nbtNew.length+' sens OK');

  // --- 1b. kfl (1266): 4 → 7 sens ---
  console.log('\n--- 1b. Enrichir kfl (ك ف ل) ---');
  const {data:kflEx} = await db.from('word_meanings').select('id,display_order').eq('analysis_id',1266).order('display_order');
  const kflMax = Math.max(...kflEx.map(s=>s.display_order),0);

  const kflNew = [
    {concept:'Tutelle/Garantie', sense:'garant',
     description:"Le Lane's donne kafīl : one who is responsible, answerable, amenable, or a sponsor or surety. Le garant est celui qui lie sa propre responsabilité à celle d'un autre."},
    {concept:'Tutelle/Garantie', sense:'responsabilité',
     description:"Le Lane's donne kafāla : responsibility, answerableness, suretiship ; the conjoining of one responsibility to another. L'acte de se porter responsable."},
    {concept:'Corps/Anatomie', sense:'postérieur',
     description:"Le Lane's donne kafal : the hinder part, posteriors, buttocks, or rump. Sens physique concret de la racine. Le postérieur est la partie arrière du corps — un état anatomique permanent et passif, sans dimension directionnelle."}
  ].map((s,i)=>({...s, analysis_id:1266, display_order:kflMax+1+i, meaning_type:'etymology'}));

  const {error:kflErr} = await db.from('word_meanings').insert(kflNew);
  console.log('kfl insert:', kflErr ? 'ERROR: '+kflErr.message : kflNew.length+' sens OK');

  // --- 1c. hrb (1196): 4 → 10 sens ---
  console.log('\n--- 1c. Enrichir hrb (ح ر ب) ---');
  const {data:hrbEx} = await db.from('word_meanings').select('id,display_order').eq('analysis_id',1196).order('display_order');
  const hrbMax = Math.max(...hrbEx.map(s=>s.display_order),0);

  const hrbNew = [
    {concept:'Guerre/Combat', sense:'provoquer',
     description:"Le Lane's donne ḥarraba : he angered violently, he provoked or exasperated. Pousser quelqu'un à la colère ou au combat."},
    {concept:'Guerre/Combat', sense:'hostile',
     description:"Le Lane's donne ḥārabahu : he was or became hostile, or an enemy, to him. Être en état d'hostilité envers quelqu'un."},
    {concept:'Dépossession/Perte', sense:'dépouiller',
     description:"Le Lane's donne ḥarabahu : he despoiled him of his wealth or property, leaving him without anything. Le sens premier de la racine est la dépossession — retirer à quelqu'un tout ce qu'il possède. C'est un acte extérieur, directionnel et violent : celui qui dépouille agit sur la victime pour la priver de ses biens."},
    {concept:'Dépossession/Perte', sense:'perte/douleur',
     description:"Le Lane's donne wā ḥarabā : exclamation de douleur pour une perte. La perte est l'état intérieur de celui qui a été dépouillé."},
    {concept:'Lieu/Sanctuaire', sense:'sanctuaire',
     description:"Le Lane's donne miḥrāb : the upper end of a sitting-room, the chief or most honourable sitting-place. Le miḥrāb est le lieu le plus élevé et le plus honorable d'une pièce. C'est un espace défini, permanent et clos — un lieu de retrait et de recueillement. Dans le texte coranique, il désigne le lieu de culte, la chambre de prière."},
    {concept:'Lieu/Sanctuaire', sense:"place d'honneur",
     description:"Le Lane's donne miḥrāb comme le siège le plus noble dans une assemblée. La place la plus élevée, celle qui fait face aux autres."}
  ].map((s,i)=>({...s, analysis_id:1196, display_order:hrbMax+1+i, meaning_type:'etymology'}));

  const {error:hrbErr} = await db.from('word_meanings').insert(hrbNew);
  console.log('hrb insert:', hrbErr ? 'ERROR: '+hrbErr.message : hrbNew.length+' sens OK');

  // --- 1d. zkr (1256): add Nom propre ---
  console.log('\n--- 1d. Ajouter Nom propre à zkr (1256) ---');
  const {data:zkrEx} = await db.from('word_meanings').select('id,display_order').eq('analysis_id',1256).order('display_order');
  const zkrMax = Math.max(...zkrEx.map(s=>s.display_order),0);

  const zkrNew = [
    {concept:'Nom propre', sense:'Zacharie',
     description:"Nom du prophète chargé de la tutelle de Marie. C'est un nom propre sémitique ancien."}
  ].map((s,i)=>({...s, analysis_id:1256, display_order:zkrMax+1+i, meaning_type:'etymology'}));

  const {error:zkrErr} = await db.from('word_meanings').insert(zkrNew);
  console.log('zkr insert:', zkrErr ? 'ERROR: '+zkrErr.message : zkrNew.length+' sens OK');

  // Move "piller" from "Sens isolé/Piller" to "Dépossession/Perte" for hrb
  const {data:pillerSens} = await db.from('word_meanings').select('id').eq('analysis_id',1196).eq('sense','piller').maybeSingle();
  if (pillerSens) {
    await db.from('word_meanings').update({concept:'Dépossession/Perte'}).eq('id',pillerSens.id);
    console.log('hrb: "piller" moved to Dépossession/Perte');
  }

  // Verify richness
  console.log('\n--- Richesse après enrichissement ---');
  const checkAll = [
    {k:'qbl',a:291},{k:'rbb',a:253},{k:'hsn',a:574},{k:'nbt',a:579},
    {k:'kfl',a:1266},{k:'zkr',a:1256},{k:'dxl',a:567},{k:'hrb',a:1196},
    {k:'wjd',a:700},{k:'end',a:566},{k:'rzq',a:284},{k:'qwl',a:307},
    {k:'mrym',a:1316},{k:'llh',a:255},{k:'shy',a:466},{k:'ghyr',a:266},{k:'hsb',a:996}
  ];
  for (const {k,a} of checkAll) {
    const {data:s} = await db.from('word_meanings').select('id').eq('analysis_id',a);
    console.log(k+' (aid='+a+'): '+s.length+' sens');
  }

  // =============================================
  // 2. READ CONCEPTS FROM BDD
  // =============================================
  console.log('\n--- 2. Concepts BDD ---');
  for (const {k,a} of checkAll) {
    const {data:ss} = await db.from('word_meanings').select('concept').eq('analysis_id',a);
    const concepts = [...new Set(ss.map(s=>s.concept))];
    console.log(k+': '+concepts.join(', '));
  }

  // =============================================
  // 3. FIX SEGMENTS
  // =============================================
  console.log('\n--- 3. Fix segments ---');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id',VA_ID).single();
  let segs = va.segments;

  // 3a. Reclassify 7 pronouns/particles
  const toParticle = [
    {pos:13, key:'klm', fr:'chaque fois que'},
    {pos:23, key:'nyy', fr:"d'où"},
    {pos:24, key:'lk', fr:'pour toi'},
    {pos:25, key:'hdh', fr:'ceci'},
    {pos:27, key:'hwy', fr:"c'est"},
    {pos:31, key:'nn', fr:'certes'},
    {pos:34, key:'mny', fr:'qui'}
  ];
  for (const tp of toParticle) {
    const seg = segs.find(s => s.position === tp.pos);
    if (seg) {
      seg.type = 'particle'; seg.is_particle = true; seg.fr = tp.fr;
      delete seg.word_key; delete seg.key; delete seg.root;
      console.log('pos='+tp.pos+' '+tp.key+': important → particle');
    }
  }

  // 3b. Fix keys
  const keyFixes = [
    {pos:22, newKey:'mrym'},  // mry → mrym (Marie)
    {pos:30, newKey:'llh'},   // alh → llh
    {pos:32, newKey:'llh'},   // alh → llh
    {pos:36, newKey:'ghyr'}   // ghr → ghyr
  ];
  for (const kf of keyFixes) {
    const seg = segs.find(s => s.position === kf.pos);
    if (seg) { seg.word_key = kf.newKey; if (seg.key) seg.key = kf.newKey; console.log('pos='+kf.pos+': key → '+kf.newKey); }
  }

  // 3c. Consistency
  segs.forEach(s => {
    if (s.type === 'important') { s.is_particle = false; if (s.key && !s.word_key) s.word_key = s.key; }
    if (s.type === 'particle') { s.is_particle = true; }
  });

  // 3d. Update fr + sense_retenu
  const segUpd = {
    2:{fr:"il l'accepta",sense_retenu:'accepter'},
    3:{fr:'son Seigneur',sense_retenu:'seigneur'},
    4:{fr:"d'une acceptation",sense_retenu:'agréer'},
    5:{fr:'belle',sense_retenu:'bon'},
    7:{fr:'il la fit croître',sense_retenu:'faire germer'},
    8:{fr:'une croissance',sense_retenu:'végétation'},
    9:{fr:'belle',sense_retenu:'bon'},
    11:{fr:'il la confia à',sense_retenu:'prendre en charge'},
    12:{fr:'Zacharie',sense_retenu:'Zacharie'},
    14:{fr:'il entra',sense_retenu:'entrer'},
    16:{fr:'Zacharie',sense_retenu:'Zacharie'},
    17:{fr:'le sanctuaire',sense_retenu:'sanctuaire'},
    18:{fr:'il trouva',sense_retenu:'trouver'},
    19:{fr:"auprès d'elle",sense_retenu:'auprès de'},
    20:{fr:'une provision',sense_retenu:'subsistance'},
    21:{fr:'il dit',sense_retenu:'dire'},
    22:{fr:'ô Marie',sense_retenu:'Marie'},
    26:{fr:'elle dit',sense_retenu:'dire'},
    29:{fr:'de chez',sense_retenu:'auprès de'},
    30:{fr:'Dieu',sense_retenu:'Dieu'},
    32:{fr:'Dieu',sense_retenu:'Dieu'},
    33:{fr:'pourvoit',sense_retenu:'pourvoir'},
    35:{fr:'il veut',sense_retenu:'vouloir'},
    36:{fr:'sans',sense_retenu:'sans'},
    37:{fr:'compte',sense_retenu:'compte'}
  };
  for (const [pos,upd] of Object.entries(segUpd)) {
    const seg = segs.find(s => s.position === parseInt(pos));
    if (seg) { seg.fr = upd.fr; seg.sense_retenu = upd.sense_retenu; }
  }
  console.log('Segments fr/sense_retenu mis à jour pour', Object.keys(segUpd).length, 'positions');

  const {error:segErr} = await db.from('verse_analyses').update({segments:segs}).eq('id',VA_ID);
  console.log('Segments save:', segErr ? 'ERROR: '+segErr.message : 'OK');
  const impC = segs.filter(s=>s.type==='important').length;
  const parC = segs.filter(s=>s.type==='particle').length;
  console.log('Important:', impC, '| Particle:', parC, '| Total:', segs.length);

  // =============================================
  // 4. VWA (25 entries)
  // =============================================
  console.log('\n--- 4. VWA ---');
  await db.from('verse_word_analyses').delete().eq('verse_id',VERSE_ID);

  // Helper to build short VWA for repeated/simple words
  const mkAxes = (chosen, concepts) => ({concept_chosen:chosen, concepts});

  const vwa = [
    {verse_id:VERSE_ID, word_key:'qbl', root:'ق ب ل', position:2, sense_chosen:'accepter',
     analysis_axes: mkAxes('Réception/Accueil', {
       'Réception/Accueil':{status:'retenu',senses:['recevoir','accepter','agréer'],
         proof_ctx:"Le verbe taqabbala (forme V accompli) signifie accepter avec intensité, agréer pleinement. La forme V ajoute la dimension réflexive — le Seigneur accueille Marie en lui-même. Le champ lexical du verset (croissance, tutelle, provision) confirme un accueil bienveillant. Le sens d'orientation/direction et d'antériorité ne correspondent pas au contexte d'un agrément divin."},
       'Orientation/Direction':{status:'nul',senses:['se tourner vers','faire face'],
         proof_ctx:"L'orientation spatiale n'est pas activée par la forme V taqabbala."},
       'Antériorité/Passé':{status:'nul',senses:['avant','auparavant'],
         proof_ctx:"L'antériorité temporelle ne correspond pas à l'acte d'accepter."}
     })},
    {verse_id:VERSE_ID, word_key:'rbb', root:'ر ب ب', position:3, sense_chosen:'seigneur',
     analysis_axes: mkAxes('Seigneurie/Autorité bienveillante', {
       'Seigneurie/Autorité bienveillante':{status:'retenu',senses:['seigneur','maître','celui qui élève'],
         proof_ctx:"Rabbuhā (son Seigneur) avec pronom possessif hā — c'est le Seigneur de Marie qui l'accepte. La relation de seigneurie bienveillante est confirmée par la suite du verset : il la fait croître et lui pourvoit."},
       'Croissance/Augmentation':{status:'peu_probable',senses:['augmenter','croître'],
         proof_ctx:"La croissance est le sens premier de la racine mais ici c'est la seigneurie qui est exprimée par le contexte de l'agrément."}
     })},
    {verse_id:VERSE_ID, word_key:'qbl', root:'ق ب ل', position:4, sense_chosen:'agréer',
     analysis_axes: mkAxes('Réception/Accueil', {
       'Réception/Accueil':{status:'retenu',senses:['recevoir','accepter','agréer'],
         proof_ctx:"Le mot qabūl est le nom verbal (masdar) de la racine q-b-l, utilisé ici comme maf'ūl muṭlaq (complément absolu) : taqabbalahā bi-qabūlin ḥasanin = il l'accepta d'une bonne acceptation. Le masdar renforce le sens du verbe."}
     })},
    {verse_id:VERSE_ID, word_key:'hsn', root:'ح س ن', position:5, sense_chosen:'bon',
     analysis_axes: mkAxes('Beauté/Bonté', {
       'Beauté/Bonté':{status:'retenu',senses:['être beau','bon','excellent'],
         proof_ctx:"L'adjectif ḥasanin qualifie le qabūl (acceptation) — une bonne, belle acceptation. Le sens de beauté/bonté est le seul pertinent pour un qualificatif laudatif."},
       'Excellence morale':{status:'probable',senses:['bien faire','bienfaisance'],
         proof_ctx:"L'excellence morale est liée mais ici le mot est un adjectif qualificatif, pas un acte moral."}
     })},
    {verse_id:VERSE_ID, word_key:'nbt', root:'ن ب ت', position:7, sense_chosen:'faire germer',
     analysis_axes: mkAxes('Croissance végétale', {
       'Croissance végétale':{status:'retenu',senses:['pousser','faire germer','végétation','plante','lieu de croissance','enraciné'],
         proof_ctx:"Le verbe anbatahā (forme IV accompli) signifie il la fit croître. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), anbata s'utilise pour Dieu qui fait croître un enfant. La métaphore végétale est intentionnelle — Dieu fait pousser Marie comme on fait pousser une plante, avec soin et constance. Le sens de croissance végétale englobe cette extension métaphorique à l'éducation divine. Le sens d'éducation/nourriture est probable mais la forme IV anbata reste liée au vocabulaire de la germination."},
       'Éducation/Nourriture':{status:'probable',senses:['nourrir/élever un enfant','jeunes pousses (enfants)'],
         proof_ctx:"D'après les sources étymologiques, nabbata signifie nourrir et élever un enfant. Ce sens est pertinent puisque Dieu fait grandir Marie, mais la forme IV anbata garde la métaphore végétale plus que la forme II nabbata."},
       'Origine/Race':{status:'nul',senses:['origine','bonne souche'],
         proof_ctx:"L'origine n'est pas activée — le verset parle de croissance, pas de lignage."}
     })},
    {verse_id:VERSE_ID, word_key:'nbt', root:'ن ب ت', position:8, sense_chosen:'végétation',
     analysis_axes: mkAxes('Croissance végétale', {
       'Croissance végétale':{status:'retenu',senses:['pousser','faire germer','végétation','plante'],
         proof_ctx:"Le mot nabātan est le masdar (nom verbal) utilisé comme maf'ūl muṭlaq : anbatahā nabātan ḥasanan = il la fit croître d'une belle croissance. Le masdar confirme la métaphore végétale."}
     })},
    {verse_id:VERSE_ID, word_key:'hsn', root:'ح س ن', position:9, sense_chosen:'bon',
     analysis_axes: mkAxes('Beauté/Bonté', {
       'Beauté/Bonté':{status:'retenu',senses:['être beau','bon','excellent'],
         proof_ctx:"Deuxième occurrence de ḥasan, qualifiant ici nabātan (croissance). Une belle croissance — la qualité de l'éducation divine est soulignée."}
     })},
    {verse_id:VERSE_ID, word_key:'kfl', root:'ك ف ل', position:11, sense_chosen:'prendre en charge',
     analysis_axes: mkAxes('Tutelle/Garantie', {
       'Tutelle/Garantie':{status:'retenu',senses:['prendre en charge','garantir','tutelle','garant','responsabilité'],
         proof_ctx:"Le verbe kaffalahā (forme II accompli) signifie il la confia à / il en chargea. La forme II est causative : il fit que Zacharie prenne en charge Marie. D'après les sources étymologiques, kafala signifie se porter responsable de quelqu'un, assurer son entretien et sa protection. Le sens de tutelle/garantie est le seul pertinent pour l'acte de confier un enfant à un tuteur."},
       'Corps/Anatomie':{status:'nul',senses:['postérieur'],
         proof_ctx:"Le sens anatomique n'a aucun rapport avec la tutelle d'un enfant."}
     })},
    {verse_id:VERSE_ID, word_key:'zkr', root:'ز ك ر', position:12, sense_chosen:'Zacharie',
     analysis_axes: mkAxes('Nom propre', {
       'Nom propre':{status:'retenu',senses:['Zacharie'],
         proof_ctx:"Zakariyyā est un nom propre désignant le prophète chargé de la tutelle de Marie. Aucun autre sens n'est applicable."}
     })},
    {verse_id:VERSE_ID, word_key:'dxl', root:'د خ ل', position:14, sense_chosen:'entrer',
     analysis_axes: mkAxes('Entrée/Pénétration', {
       'Entrée/Pénétration':{status:'retenu',senses:['entrer','pénétrer','accéder','introduire'],
         proof_ctx:"Le verbe dakhala (accompli) signifie il entra. Zacharie entre dans le sanctuaire (al-miḥrāb) auprès de Marie. Le sens d'entrée/pénétration est le seul pertinent pour un mouvement physique vers un lieu clos."},
       'Ressource':{status:'nul',senses:['revenu'],
         proof_ctx:"Le sens de revenu n'est pas activé par le contexte spatial."}
     })},
    {verse_id:VERSE_ID, word_key:'zkr', root:'ز ك ر', position:16, sense_chosen:'Zacharie',
     analysis_axes: mkAxes('Nom propre', {
       'Nom propre':{status:'retenu',senses:['Zacharie'],
         proof_ctx:"Seconde mention de Zacharie, sujet du verbe dakhala (il entra). Nom propre."}
     })},
    {verse_id:VERSE_ID, word_key:'hrb', root:'ح ر ب', position:17, sense_chosen:'sanctuaire',
     analysis_axes: mkAxes('Lieu/Sanctuaire', {
       'Lieu/Sanctuaire':{status:'retenu',senses:['sanctuaire',"place d'honneur"],
         proof_ctx:"Le mot al-miḥrāb (nom de lieu, schème mifʿāl, défini avec al-) désigne le lieu le plus élevé et le plus honorable. D'après les sources étymologiques, le miḥrāb est la partie supérieure d'une pièce, le siège le plus noble. Le contexte (Zacharie entre auprès de Marie dans le miḥrāb) indique un lieu de retrait et de recueillement — un sanctuaire. Le sens de guerre/combat est le sens premier de la racine ḥ-r-b mais n'est pas activé par le schème mifʿāl ni par le contexte."},
       'Guerre/Combat':{status:'nul',senses:['guerre','combattre','ennemi','provoquer','hostile'],
         proof_ctx:"La guerre n'a aucun rapport avec le lieu de recueillement de Marie."},
       'Dépossession/Perte':{status:'nul',senses:['dépouiller','piller','perte/douleur'],
         proof_ctx:"La dépossession n'est pas activée dans ce contexte."}
     })},
    {verse_id:VERSE_ID, word_key:'wjd', root:'و ج د', position:18, sense_chosen:'trouver',
     analysis_axes: mkAxes('Découverte/Existence', {
       'Découverte/Existence':{status:'retenu',senses:['trouver','exister','rencontrer','percevoir','découvrir'],
         proof_ctx:"Le verbe wajada (accompli) signifie il trouva. Zacharie découvre une provision auprès de Marie — c'est une constatation empirique, pas une recherche. Le sens de découverte/existence est le seul pertinent pour cet acte de constatation."},
       'Émotion/Passion':{status:'nul',senses:['amour passionné','chagrin'],
         proof_ctx:"L'émotion n'est pas activée — le verbe décrit une découverte factuelle."},
       'Richesse/Capacité':{status:'nul',senses:['être riche','avoir les moyens'],
         proof_ctx:"La richesse n'est pas le sujet de cette phrase."}
     })},
    {verse_id:VERSE_ID, word_key:'end', root:'ع ن د', position:19, sense_chosen:'auprès de',
     analysis_axes: mkAxes('Proximité/Présence', {
       'Proximité/Présence':{status:'retenu',senses:['auprès de','chez','près de'],
         proof_ctx:"Le ẓarf (adverbe de lieu) ʿindahā signifie auprès d'elle, en sa présence. La provision se trouve là où Marie se trouve — la proximité spatiale est le seul sens pertinent."},
       'Déviation/Obstination':{status:'nul',senses:['dévier',"s'obstiner"],
         proof_ctx:"La déviation n'a aucun rapport avec la localisation spatiale."}
     })},
    {verse_id:VERSE_ID, word_key:'rzq', root:'ر ز ق', position:20, sense_chosen:'subsistance',
     analysis_axes: mkAxes('Subsistance/Provision', {
       'Subsistance/Provision':{status:'retenu',senses:['pourvoir','nourrir','subsistance','moyens de vivre','part'],
         proof_ctx:"Le mot rizqan (nom à l'accusatif indéfini) signifie une provision, une subsistance. D'après les sources étymologiques, rizq désigne tout ce qui est donné pour vivre — nourriture, biens, moyens de subsistance. Le texte ne précise pas la nature exacte de cette provision. Le sens de subsistance/provision est le seul pertinent."}
     })},
    {verse_id:VERSE_ID, word_key:'qwl', root:'ق و ل', position:21, sense_chosen:'dire',
     analysis_axes: mkAxes('Parole/Énonciation', {
       'Parole/Énonciation':{status:'retenu',senses:['dire','parler','parole'],
         proof_ctx:"Le verbe qāla (accompli masculin) introduit la question de Zacharie à Marie. Sens standard de la parole."}
     })},
    {verse_id:VERSE_ID, word_key:'mrym', root:'م ر ي م', position:22, sense_chosen:'Marie',
     analysis_axes: mkAxes('Nom propre', {
       'Nom propre':{status:'retenu',senses:['Marie'],
         proof_ctx:"Maryam au vocatif (yā maryamu) — Zacharie s'adresse directement à Marie. Nom propre."}
     })},
    {verse_id:VERSE_ID, word_key:'qwl', root:'ق و ل', position:26, sense_chosen:'dire',
     analysis_axes: mkAxes('Parole/Énonciation', {
       'Parole/Énonciation':{status:'retenu',senses:['dire','parler','parole'],
         proof_ctx:"Le verbe qālat (accompli féminin) introduit la réponse de Marie. Même sens que pos=21 mais au féminin."}
     })},
    {verse_id:VERSE_ID, word_key:'end', root:'ع ن د', position:29, sense_chosen:'auprès de',
     analysis_axes: mkAxes('Proximité/Présence', {
       'Proximité/Présence':{status:'retenu',senses:['auprès de','chez','près de'],
         proof_ctx:"Le ẓarf ʿindi avec allāhi signifie de chez Dieu, de la part de Dieu. La proximité indique ici la source — ce qui vient de chez Dieu."}
     })},
    {verse_id:VERSE_ID, word_key:'llh', root:'ا ل ه', position:30, sense_chosen:'Dieu',
     analysis_axes: mkAxes('Divinité', {
       'Divinité':{status:'retenu',senses:['divinité','dieu','Dieu'],
         proof_ctx:"Allāhi au génitif après ʿindi — de chez Dieu. Marie attribue la provision à Dieu comme source. Le sens de divinité est le seul pertinent pour le nom propre de Dieu."}
     })},
    {verse_id:VERSE_ID, word_key:'llh', root:'ا ل ه', position:32, sense_chosen:'Dieu',
     analysis_axes: mkAxes('Divinité', {
       'Divinité':{status:'retenu',senses:['divinité','dieu','Dieu'],
         proof_ctx:"Allāha à l'accusatif après inna — certes Dieu pourvoit. Seconde mention de Dieu, sujet de la phrase finale."}
     })},
    {verse_id:VERSE_ID, word_key:'rzq', root:'ر ز ق', position:33, sense_chosen:'pourvoir',
     analysis_axes: mkAxes('Subsistance/Provision', {
       'Subsistance/Provision':{status:'retenu',senses:['pourvoir','nourrir','subsistance','moyens de vivre'],
         proof_ctx:"Le verbe yarzuqu (inaccompli) signifie il pourvoit, il donne la subsistance. L'inaccompli exprime une action continue et habituelle — Dieu pourvoit constamment."}
     })},
    {verse_id:VERSE_ID, word_key:'shy', root:'ش ي ء', position:35, sense_chosen:'vouloir',
     analysis_axes: mkAxes('Volonté', {
       'Volonté':{status:'retenu',senses:['vouloir','désirer','souhaiter','volonté (mashīʾa)'],
         proof_ctx:"Le verbe yashāʾu (inaccompli) signifie il veut. La formule man yashāʾu (qui il veut) exprime la liberté absolue du choix divin — Dieu pourvoit qui il veut. Le sens de volonté est le seul pertinent pour l'acte de choisir."},
       'Chose/Être':{status:'nul',senses:['chose','quelque chose','être'],
         proof_ctx:"Le sens de chose n'est pas activé — la forme verbale yashāʾu est un verbe de volonté."}
     })},
    {verse_id:VERSE_ID, word_key:'ghyr', root:'غ ي ر', position:36, sense_chosen:'sans',
     analysis_axes: mkAxes('Autre/Exclusion', {
       'Autre/Exclusion':{status:'retenu',senses:['autre','sauf','excepté','différent','sans'],
         proof_ctx:"Le mot ghayri avec la préposition bi- (bi-ghayri) signifie sans. La formule bi-ghayri ḥisābin = sans compte/reckoning. Le sens d'exclusion est le seul pertinent — ce qui est autre que le compte, c'est-à-dire l'absence de limite."},
       'Changement/Altération':{status:'nul',senses:['changer','altérer','transformer'],
         proof_ctx:"Le changement n'est pas activé — il s'agit d'exclusion, pas de transformation."}
     })},
    {verse_id:VERSE_ID, word_key:'hsb', root:'ح س ب', position:37, sense_chosen:'compte',
     analysis_axes: mkAxes('Calcul/Évaluation', {
       'Calcul/Évaluation':{status:'retenu',senses:['compter','estimer','penser','compte'],
         proof_ctx:"Le mot ḥisābin (nom au génitif indéfini) signifie compte, calcul. La formule bi-ghayri ḥisābin = sans compte — la provision divine est illimitée, elle ne se mesure pas. Le sens de calcul/évaluation est le seul pertinent."},
       'Suffisance':{status:'peu_probable',senses:['suffire','suffisant'],
         proof_ctx:"La suffisance est liée à la racine mais le contexte parle d'absence de mesure, pas de suffisance."}
     })}
  ];

  const {error:vwaErr} = await db.from('verse_word_analyses').insert(vwa);
  console.log('VWA insert:', vwaErr ? 'ERROR: '+vwaErr.message : vwa.length+' entries OK');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n--- 5. Translation ---');

  const translation = "Alors son Seigneur l'accepta d'une belle acceptation et la fit croître d'une belle croissance, et la confia à Zacharie. Chaque fois que Zacharie entrait auprès d'elle dans le sanctuaire, il trouvait auprès d'elle une provision. Il dit : « Ô Marie, d'où cela te vient-il ? » Elle dit : « C'est de chez Dieu. Dieu pourvoit qui il veut sans compte. »";

  const fullTranslation = "Son Seigneur l'agréa alors d'un bon agrément, la fit croître en belle croissance. Et Il en confia la garde à Zacharie. Chaque fois que celui-ci entrait auprès d'elle dans le Sanctuaire, il trouvait près d'elle de la nourriture. Il dit : « Ô Marie, d'où te vient cette nourriture ? » - Elle dit : « Cela me vient de Dieu ». Dieu donne sans compter à qui Il veut.";

  const translationArab = "فَتَقَبَّلَهَا رَبُّهَا بِقَبُولٍ حَسَنٍ وَأَنۢبَتَهَا نَبَاتًا حَسَنًا وَكَفَّلَهَا زَكَرِيَّا ۖ كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا ٱلْمِحْرَابَ وَجَدَ عِندَهَا رِزْقًا ۖ قَالَ يَـٰمَرْيَمُ أَنَّىٰ لَكِ هَـٰذَا ۖ قَالَتْ هُوَ مِنْ عِندِ ٱللَّهِ ۖ إِنَّ ٱللَّهَ يَرْزُقُ مَن يَشَآءُ بِغَيْرِ حِسَابٍ";

  const explanation = `§DEMARCHE§
Ce verset fait suite à la naissance de Marie (verset 36). Après que la mère d'Imran ait fait vœu de consacrer son enfant et demandé la protection divine, Dieu accepte Marie, la fait grandir et la confie à Zacharie. Le verset décrit ensuite les visites de Zacharie qui découvre une provision auprès de Marie.

**taqabbalahā** (il l'accepta) est un verbe accompli de la forme V (tafaʿʿala) de la racine q-b-l, 3ème personne du masculin singulier avec le pronom suffixe hā. La forme V ajoute une dimension intensive et réflexive : accepter pleinement, agréer en soi-même. Le sujet (rabbuhā, son Seigneur) accueille Marie avec un agrément complet. On traduit par « il l'accepta ».

**rabbuhā** (son Seigneur) est un nom de la racine r-b-b à l'état construit avec le pronom possessif hā (son). Le sens retenu est seigneur — celui qui élève et entretient. Le pronom possessif rattache la seigneurie à Marie personnellement. On traduit par « son Seigneur ».

**bi-qabūlin** (d'une acceptation) est un nom verbal (masdar) de la racine q-b-l au génitif après la préposition bi. Il fonctionne comme maf'ūl muṭlaq (complément absolu) qui renforce le sens du verbe taqabbala : il l'accepta d'une acceptation. On traduit par « d'une acceptation ».

**ḥasanin** (belle) est un adjectif de la racine ḥ-s-n au génitif indéfini, qualifiant qabūlin. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ḥasan signifie beau, bon, excellent. On traduit par « belle ».

**anbatahā** (il la fit croître) est un verbe accompli de la forme IV (afʿala) de la racine n-b-t, 3ème personne avec le pronom suffixe hā. La forme IV est causative : faire pousser, faire croître. D'après les sources étymologiques, anbata s'utilise pour Dieu qui fait croître un enfant — la métaphore végétale est intentionnelle. Dieu fait grandir Marie comme on fait pousser une plante, avec soin et patience. On traduit par « il la fit croître ».

**nabātan** (une croissance) est le masdar de la racine n-b-t à l'accusatif, utilisé comme maf'ūl muṭlaq : il la fit croître d'une croissance. Le masdar confirme la métaphore végétale — la croissance de Marie est comparée à celle d'une plante. On traduit par « une croissance ».

**ḥasanan** (belle) est le même adjectif ḥasan mais à l'accusatif, qualifiant nabātan. On traduit par « belle ».

**kaffalahā** (il la confia à) est un verbe accompli de la forme II (faʿʿala) de la racine k-f-l, 3ème personne avec le pronom suffixe hā. D'après les sources étymologiques, kafala signifie se porter responsable de quelqu'un, assurer son entretien et sa protection. La forme II est causative ou intensive : Dieu fit que Zacharie prenne Marie en charge. On traduit par « il la confia à ».

**zakariyyā** (Zacharie) est un nom propre sémitique ancien désignant le prophète. Il est ici le complément du verbe kaffalahā — celui à qui Marie est confiée. On traduit par « Zacharie ».

**dakhala** (il entra) est un verbe accompli de la racine d-kh-l, 3ème personne du masculin singulier. Le sens premier est entrer dans un lieu. La préposition ʿalayhā (sur elle / auprès d'elle) indique que Zacharie entre dans le lieu où Marie se trouve. On traduit par « il entra ».

**zakariyyā** (Zacharie) est mentionné une seconde fois comme sujet du verbe dakhala. On traduit par « Zacharie ».

**al-miḥrāba** (le sanctuaire) est un nom de lieu (schème mifʿāl) de la racine ḥ-r-b, à l'accusatif défini. D'après les sources étymologiques, le miḥrāb est la partie la plus élevée et la plus noble d'une pièce, le siège d'honneur. Le texte ne précise pas la nature exacte de ce lieu, mais le contexte (lieu de retrait de Marie) indique un espace de recueillement. On traduit par « le sanctuaire ».

**wajada** (il trouva) est un verbe accompli de la racine w-j-d, 3ème personne. Le sens premier est trouver, constater, découvrir. Zacharie constate la présence d'une provision auprès de Marie. On traduit par « il trouva ».

**ʿindahā** (auprès d'elle) est un ẓarf makān (adverbe de lieu) de la racine ʿ-n-d avec le pronom suffixe hā. Il indique la proximité spatiale : la provision se trouve là où Marie se trouve. On traduit par « auprès d'elle ».

**rizqan** (une provision) est un nom de la racine r-z-q à l'accusatif indéfini. D'après les sources étymologiques, rizq désigne tout ce qui est donné pour vivre — pas uniquement de la nourriture, mais tout moyen de subsistance. Le texte ne précise pas la nature de cette provision. On traduit par « une provision ».

**qāla** (il dit) est un verbe accompli de la racine q-w-l, 3ème personne du masculin. Zacharie prend la parole pour interroger Marie. On traduit par « il dit ».

**yā maryamu** (ô Marie) est le vocatif du nom propre Maryam. Zacharie s'adresse directement à Marie. On traduit par « ô Marie ».

**qālat** (elle dit) est le même verbe qāla au féminin. Marie répond à la question de Zacharie. On traduit par « elle dit ».

**ʿindi** (de chez) est le même ẓarf ʿind mais avec le génitif allāhi — ʿindi allāhi = de chez Dieu, de la part de Dieu. La proximité indique ici la source d'où vient la provision. On traduit par « de chez ».

**allāhi** (Dieu) est le nom propre de la divinité au génitif après ʿindi. Marie identifie Dieu comme la source de la provision. On traduit par « Dieu ».

**allāha** (Dieu) est le même nom à l'accusatif après inna (certes). C'est le sujet de la phrase finale : certes Dieu pourvoit. On traduit par « Dieu ».

**yarzuqu** (pourvoit) est un verbe inaccompli de la racine r-z-q, 3ème personne. L'inaccompli indique une action continue et habituelle — Dieu pourvoit constamment, pas ponctuellement. On traduit par « pourvoit ».

**yashāʾu** (il veut) est un verbe inaccompli de la racine sh-y-ʾ, 3ème personne. La formule man yashāʾu (qui il veut) exprime la liberté absolue du choix divin. On traduit par « il veut ».

**bi-ghayri** (sans) est le nom ghayr de la racine gh-y-r au génitif après la préposition bi. Le sens d'exclusion est activé : bi-ghayri = sans, en l'absence de. On traduit par « sans ».

**ḥisābin** (compte) est un nom de la racine ḥ-s-b au génitif indéfini. Le sens premier est le calcul, le décompte, l'évaluation. La formule bi-ghayri ḥisābin = sans compte — la provision divine ne se mesure pas, elle est au-delà de tout calcul. On traduit par « compte ».

§JUSTIFICATION§
**accepter** — Le sens retenu est « accepter » de la racine q-b-l (forme V). Le mot « accepter » est choisi car la forme V taqabbala exprime un agrément plein et volontaire. L'alternative « recevoir » est écartée car trop passif — Dieu ne reçoit pas Marie, il l'accueille activement. L'alternative « agréer » est un synonyme acceptable mais moins courant.

**seigneur** — Le sens retenu est « seigneur » de la racine r-b-b. Choix standard pour rabbi.

**belle** — Le sens retenu est « bon » de la racine ḥ-s-n. Le mot « belle » est choisi en français pour qualifier l'acceptation et la croissance — « une belle acceptation » et « une belle croissance » sont des expressions naturelles en français courant. L'alternative « bonne » est correcte aussi mais « belle » est plus expressif.

**faire croître** — Le sens retenu est « faire germer » de la racine n-b-t (forme IV). Le mot « faire croître » est choisi car il préserve la métaphore végétale tout en étant naturel pour un enfant. L'alternative « nourrir/élever » est écartée car elle perd la métaphore végétale présente dans le verbe anbata.

**confier** — Le sens retenu est « prendre en charge » de la racine k-f-l (forme II). Le mot « confia à » est choisi car la forme II causative exprime que Dieu a fait en sorte que Zacharie prenne Marie en charge. L'alternative « garantir » est écartée car trop juridique pour le contexte d'une tutelle d'enfant.

**Zacharie** — Nom propre.

**entrer** — Le sens retenu est « entrer » de la racine d-kh-l. Sens standard, sans ambiguïté.

**sanctuaire** — Le sens retenu est « sanctuaire » de la racine ḥ-r-b (schème mifʿāl). Le mot « sanctuaire » est choisi car d'après les sources étymologiques le miḥrāb est le lieu le plus élevé et le plus noble d'une pièce, un espace de recueillement. L'alternative « niche de prière » est écartée car c'est un sens architectural tardif. L'alternative « chambre » est trop neutre et perd la dimension sacrée du lieu.

**trouver** — Le sens retenu est « trouver » de la racine w-j-d. Sens standard de la constatation empirique.

**provision** — Le sens retenu est « subsistance » de la racine r-z-q. Le mot « provision » est choisi car il est plus large que « nourriture » — le texte dit rizqan qui englobe tout moyen de subsistance. L'alternative « nourriture » est écartée car elle restreint le sens du texte.

**dire** — Sens standard pour qāla/qālat.

**Marie** — Nom propre.

**auprès de** — Le sens retenu est « auprès de » de la racine ʿ-n-d. Sens standard du ẓarf de proximité.

**Dieu** — Sens standard pour allāh.

**pourvoir** — Le sens retenu est « pourvoir » de la racine r-z-q. Le mot « pourvoit » est choisi car il est plus précis que « donne » — pourvoir implique répondre à un besoin de subsistance. L'alternative « nourrir » est écartée car trop restrictif.

**vouloir** — Le sens retenu est « vouloir » de la racine sh-y-ʾ. Sens standard de la volonté divine.

**sans** — Le sens retenu est « sans » de la racine gh-y-r. La construction bi-ghayri signifie littéralement « avec l'absence de ».

**compte** — Le sens retenu est « compte » de la racine ḥ-s-b. Le mot « compte » est choisi car il est concret et courant. L'alternative « calcul » est un synonyme mais « compte » est plus naturel dans l'expression « sans compte ».

§CRITIQUE§
**provision vs nourriture** — Les traductions courantes donnent « nourriture » pour rizqan. Ce choix vient du contexte (on imagine de la nourriture dans un sanctuaire). Mais le texte dit rizqan, de la racine r-z-q qui signifie tout ce qui est donné pour vivre — subsistance, moyens de vivre, provision. Le mot « nourriture » (ṭaʿām en arabe) n'est pas celui que le texte utilise. Notre traduction donne « provision » pour respecter cette largeur sémantique. Le texte ne précise pas la nature de ce qui est trouvé auprès de Marie.

**sans compte vs sans compter** — Les traductions courantes donnent « sans compter » (verbe) pour bi-ghayri ḥisābin. Le texte utilise un nom (ḥisāb = compte) pas un verbe. La nuance est subtile : « sans compte » (nom) signifie que la provision est au-delà de toute mesure, tandis que « sans compter » (verbe) pourrait suggérer une générosité impulsive. Notre traduction donne « sans compte » pour respecter la structure nominale du texte.`;

  const {error:trErr} = await db.from('verse_analyses').update({
    full_translation: fullTranslation,
    translation_meditational: translation,
    translation_arab: translationArab,
    translation_explanation: explanation
  }).eq('id', VA_ID);
  console.log('Translation save:', trErr ? 'ERROR: '+trErr.message : 'OK');

  // =============================================
  // 6. DAILY PHRASES
  // =============================================
  console.log('\n--- 6. Daily phrases ---');
  const dailyRoots = [
    {k:'nbt',a:579},{k:'kfl',a:1266},{k:'hrb',a:1196},{k:'zkr',a:1256}
  ];
  const dailyPhrases = [];
  for (const {k,a} of dailyRoots) {
    const {data:ex} = await db.from('word_daily').select('id').eq('analysis_id',a);
    if (ex && ex.length > 0) {
      console.log(k+' ('+a+'): '+ex.length+' daily exist — SKIP');
    } else {
      console.log(k+' ('+a+'): 0 daily — inserting 3');
    }
  }

  // nbt (579)
  const {data:nbtD} = await db.from('word_daily').select('id').eq('analysis_id',579);
  if (!nbtD || nbtD.length === 0) {
    dailyPhrases.push(
      {analysis_id:579, arabic:'نَبَتَ', phon:'nabata', french:'Les fleurs ont poussé dans le jardin ce printemps.', sense:'pousser'},
      {analysis_id:579, arabic:'أَنْبَتَ', phon:'anbata', french:'Le fermier a fait germer les graines dans la serre.', sense:'faire germer'},
      {analysis_id:579, arabic:'نَبَات', phon:'nabāt', french:'Cette région est connue pour sa végétation abondante.', sense:'végétation'}
    );
  }
  // kfl (1266)
  const {data:kflD} = await db.from('word_daily').select('id').eq('analysis_id',1266);
  if (!kflD || kflD.length === 0) {
    dailyPhrases.push(
      {analysis_id:1266, arabic:'كَفَلَ', phon:'kafala', french:"Il s'est porté garant pour le prêt de son ami.", sense:'garantir'},
      {analysis_id:1266, arabic:'كَفَّلَ', phon:'kaffala', french:"Le juge a confié l'enfant à sa grand-mère.", sense:'prendre en charge'},
      {analysis_id:1266, arabic:'كَفِيل', phon:'kafīl', french:'Le garant doit signer le contrat aussi.', sense:'garant'}
    );
  }
  // hrb (1196)
  const {data:hrbD} = await db.from('word_daily').select('id').eq('analysis_id',1196);
  if (!hrbD || hrbD.length === 0) {
    dailyPhrases.push(
      {analysis_id:1196, arabic:'حَرْب', phon:'ḥarb', french:'La guerre a duré quatre ans.', sense:'guerre'},
      {analysis_id:1196, arabic:'مِحْرَاب', phon:'miḥrāb', french:"L'imam se tient dans le sanctuaire pour diriger la prière.", sense:'sanctuaire'},
      {analysis_id:1196, arabic:'حَرَبَ', phon:'ḥaraba', french:'Les voleurs ont dépouillé le voyageur de toutes ses affaires.', sense:'dépouiller'}
    );
  }
  // zkr (1256)
  const {data:zkrD} = await db.from('word_daily').select('id').eq('analysis_id',1256);
  if (!zkrD || zkrD.length === 0) {
    dailyPhrases.push(
      {analysis_id:1256, arabic:'زَكَرِيَّا', phon:'zakariyyā', french:'Zacharie est un prénom porté par de nombreuses personnes.', sense:'Zacharie'},
      {analysis_id:1256, arabic:'ذَكَرَ', phon:'dhakara', french:'Il a mentionné ton nom dans la conversation.', sense:'mentionner'},
      {analysis_id:1256, arabic:'ذَكَر', phon:'dhakar', french:'Le mâle du lion est reconnaissable à sa crinière.', sense:'mâle'}
    );
  }

  if (dailyPhrases.length > 0) {
    const {error:dErr} = await db.from('word_daily').insert(dailyPhrases);
    console.log('Daily insert:', dErr ? 'ERROR: '+dErr.message : dailyPhrases.length+' phrases OK');
  }

  // =============================================
  // 7. VERIFICATION
  // =============================================
  console.log('\n--- 7. Vérification finale ---');
  const {data:vaF} = await db.from('verse_analyses').select('segments,full_translation,translation_meditational,translation_explanation').eq('id',VA_ID).single();
  const fSegs = vaF.segments;
  const iC = fSegs.filter(s=>s.type==='important').length;
  const pC = fSegs.filter(s=>s.type==='particle').length;
  console.log('Segments:', iC, 'important,', pC, 'particle,', fSegs.length, 'total');

  const {data:vwaF} = await db.from('verse_word_analyses').select('word_key,position,sense_chosen').eq('verse_id',VERSE_ID).order('position');
  console.log('VWA:', vwaF.length, 'entries');
  vwaF.forEach(v => console.log('  pos='+v.position+' '+v.word_key+' → '+v.sense_chosen));

  const impPos = fSegs.filter(s=>s.type==='important').map(s=>s.position).sort((a,b)=>a-b);
  const vwaPos = vwaF.map(v=>v.position).sort((a,b)=>a-b);
  console.log('Positions match:', JSON.stringify(impPos)===JSON.stringify(vwaPos) ? 'OK' : 'MISMATCH');
  if (JSON.stringify(impPos)!==JSON.stringify(vwaPos)) {
    console.log('  imp:', impPos.join(','));
    console.log('  vwa:', vwaPos.join(','));
  }

  console.log('full_translation:', vaF.full_translation ? 'OK' : 'MISSING');
  console.log('translation:', vaF.translation_meditational ? 'OK' : 'MISSING');
  console.log('explanation:', vaF.translation_explanation ? 'OK ('+vaF.translation_explanation.length+' chars)' : 'MISSING');

  console.log('\n=== PIPELINE S3:V37 TERMINÉE ===');
  console.log('\nVERSET 3:37 — TERMINÉ');
  vwaF.forEach(v => console.log('  '+v.word_key+' → sens "'+v.sense_chosen+'"'));
  console.log('Traduction : "'+translation+'"');
})();
