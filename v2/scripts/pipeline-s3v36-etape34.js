const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 329;
const VA_ID = 691;

// AIDs: wde=1262, qwl=307, rbb=253, llh=255, elm=254, dhkr=485, smw=249,
//       mrym=1316, ewḏ=623, dhru=1074(=ḏrw), šytn=941, rjm=1265, anṯy=1315

(async()=>{
  console.log('=== PIPELINE S3:V36 ===\n');

  // =============================================
  // 1. ENRICHISSEMENT — 5 racines suspectes
  // =============================================

  // --- 1a. wde (1262): 4 → 12 sens ---
  console.log('--- 1a. Enrichir wde (و ض ع) ---');
  const {data:wdeEx} = await db.from('word_meanings').select('id,display_order').eq('analysis_id',1262).order('display_order');
  console.log('wde existant:', wdeEx.length, 'sens');
  const wdeMax = Math.max(...wdeEx.map(s=>s.display_order),0);

  const wdeNew = [
    // Dépôt/Placement (add 1)
    {concept:'Dépôt/Placement', sense:'déposer',
     description:"Poser en bas, confier quelque chose à un endroit. Le Lane's donne waḍaʿahu : he put it or threw it down from his hand. Le dépôt est le mouvement de haut en bas — on dépose ce qu'on tenait."},

    // Abaissement (add 3)
    {concept:'Abaissement', sense:"s'humilier",
     description:"Le Lane's donne tawāḍaʿa : he was or became lowly, humble, submissive. Se placer volontairement en position basse devant l'autre."},
    {concept:'Abaissement', sense:'bas/ignoble',
     description:"Le Lane's donne waḍīʿ : low, ignoble, vile, of no rank or estimation. Condition permanente de celui qui est de rang inférieur."},
    {concept:'Abaissement', sense:'abaisser',
     description:"Rabaisser quelqu'un de son rang. Faire descendre une personne ou une chose dans l'estime."},

    // Imposition/Obligation (NEW, 2)
    {concept:'Imposition/Obligation', sense:'imposer',
     description:"Le Lane's donne waḍaʿa ʿalayhi : he imposed upon him a fine or tax. Placer une obligation sur quelqu'un. L'imposition est un acte extérieur, directionnel — elle sort de celui qui impose et atteint celui qui la subit. C'est un placement de poids sur l'autre, un acte d'autorité ponctuel dans sa décision mais permanent dans son effet."},
    {concept:'Imposition/Obligation', sense:'remettre/dispenser',
     description:"Le Lane's donne waḍaʿa : he remitted a tax or the like, did not exact it. Sens contraire de l'imposition — lever une charge, ne pas l'exiger."},

    // Constitution/Forme (NEW, 2)
    {concept:'Constitution/Forme', sense:'constitution',
     description:"Le Lane's donne waḍʿ : the constitution of a thing, its conformation, its make. La structure fondamentale d'une chose, sa manière d'être composée. La constitution est un état permanent — elle définit ce qu'est la chose de façon intrinsèque. Ce n'est pas un acte mais un résultat : la façon dont les parties ont été assemblées et disposées."},
    {concept:'Constitution/Forme', sense:'posture',
     description:"Le Lane's donne waḍʿ comme une des dix catégories (predicaments) : collocation or posture. La position d'une chose dans l'espace."}
  ].map((s,i)=>({...s, analysis_id:1262, display_order:wdeMax+1+i, meaning_type:'etymology'}));

  const {error:wdeErr} = await db.from('word_meanings').insert(wdeNew);
  console.log('wde insert:', wdeErr ? 'ERROR: '+wdeErr.message : wdeNew.length+' sens OK');

  // --- 1b. anṯy (1315): 2 → 9 sens ---
  console.log('\n--- 1b. Enrichir anṯy (أ ن ث) ---');
  const {data:antEx} = await db.from('word_meanings').select('id,display_order').eq('analysis_id',1315).order('display_order');
  const antMax = Math.max(...antEx.map(s=>s.display_order),0);

  const antNew = [
    // Féminin/Femelle (add 1)
    {concept:'Féminin/Femelle', sense:'choses inanimées',
     description:"Le Lane's donne ināth : inanimate things, trees, stones, wood. Par extension du féminin, les choses sans vie sont classées comme féminines."},

    // Douceur/Mollesse (NEW, 4)
    {concept:'Douceur/Mollesse', sense:'douceur',
     description:"Selon le Lane's, IAar affirme que la douceur (softness) est le sens premier de la racine. La douceur est un état intérieur permanent — elle caractérise la nature profonde de l'être ou de la chose. Elle ne sort pas vers l'extérieur mais définit la texture, la qualité intrinsèque. Le féminin tire son nom de cette qualité de douceur par rapport au masculin."},
    {concept:'Douceur/Mollesse', sense:'fer doux',
     description:"Le Lane's donne : le fer qui est doux (soft iron). Un métal souple, malléable, par opposition au fer dur et cassant."},
    {concept:'Douceur/Mollesse', sense:'terre douce/fertile',
     description:"Le Lane's donne arḍ anītha : plain, even, soft land that produces many plants or much herbage. Terre souple et productive."},
    {concept:'Douceur/Mollesse', sense:'agir avec douceur',
     description:"Le Lane's donne annatha lahū : he acted gently towards him. Adopter un comportement doux et délicat envers quelqu'un."},

    // Effémination (NEW, 2)
    {concept:'Effémination', sense:'efféminé',
     description:"Le Lane's donne muʾannath : un homme efféminé, qui ressemble à une femme dans sa douceur, sa parole et ses manières. L'effémination est l'adoption des caractéristiques féminines (douceur, mollesse) par un être masculin. C'est un état permanent qui définit le comportement et l'apparence — la personne efféminée ne joue pas un rôle, elle incarne ces traits de façon constante."},
    {concept:'Effémination', sense:'rendre efféminé',
     description:"Le Lane's donne annathahu : he or it rendered him effeminate. Faire adopter à quelqu'un des traits féminins."}
  ].map((s,i)=>({...s, analysis_id:1315, display_order:antMax+1+i, meaning_type:'etymology'}));

  const {error:antErr} = await db.from('word_meanings').insert(antNew);
  console.log('anṯy insert:', antErr ? 'ERROR: '+antErr.message : antNew.length+' sens OK');

  // --- 1c. ewḏ (623): 3 → 10 sens ---
  console.log('\n--- 1c. Enrichir ewḏ (ع و ذ) ---');
  const {data:ewdEx} = await db.from('word_meanings').select('id,display_order').eq('analysis_id',623).order('display_order');
  const ewdMax = Math.max(...ewdEx.map(s=>s.display_order),0);

  const ewdNew = [
    // Protection/Abri (add 3)
    {concept:'Protection/Abri', sense:'placer sous protection',
     description:"Le Lane's donne ʿawwadhtu ghayrī bi-fulānin : I made another to seek protection by such a one. La forme II/IV causative transforme la recherche de refuge en acte de placer autrui sous protection. C'est un acte extérieur et directionnel — celui qui protège agit au nom de celui qui est protégé."},
    {concept:'Protection/Abri', sense:'refuge (lieu)',
     description:"Le Lane's donne maʿādh : a refuge, a place to which one has recourse for protection. Le lieu concret où l'on se met à l'abri."},
    {concept:'Protection/Abri', sense:'protection mutuelle',
     description:"Le Lane's donne taʿāwadhū : they sought protection one of another, in war. La réciprocité de la protection entre plusieurs personnes."},

    // Amulette/Talisman (NEW, 2)
    {concept:'Amulette/Talisman', sense:'amulette',
     description:"Le Lane's donne ʿūdha : a kind of amulet, phylactery, or charm bearing an inscription, hung upon a person to charm the wearer against the evil eye and fright. L'amulette est un objet matériel qui porte la protection — elle transforme l'acte abstrait de chercher refuge en un support concret et permanent. L'objet agit passivement, sans action de celui qui le porte."},
    {concept:'Amulette/Talisman', sense:'talisman',
     description:"Le Lane's donne taʿwīdh : charm, amulet. Objet de protection semblable à l'amulette."},

    // Abri/Couvert (NEW, 2)
    {concept:'Abri/Couvert', sense:'abri naturel',
     description:"Le Lane's donne ʿawadh : a tree, or some other thing, beneath which one takes refuge or shelter. L'abri naturel est un lieu physique qui protège des éléments extérieurs. Contrairement à l'acte de chercher refuge (qui est volontaire et directionnel), l'abri est un état spatial passif — il existe indépendamment de celui qui s'y réfugie."},
    {concept:'Abri/Couvert', sense:'feuilles mortes',
     description:"Le Lane's donne ʿawadh : fallen leaves, so called because they shelter themselves against any rising thing, such as a building or a sand-hill. Les feuilles qui se blottissent contre un obstacle pour se protéger du vent."}
  ].map((s,i)=>({...s, analysis_id:623, display_order:ewdMax+1+i, meaning_type:'etymology'}));

  const {error:ewdErr} = await db.from('word_meanings').insert(ewdNew);
  console.log('ewḏ insert:', ewdErr ? 'ERROR: '+ewdErr.message : ewdNew.length+' sens OK');

  // --- 1d. šytn (941): 4 → 12 sens ---
  console.log('\n--- 1d. Enrichir šytn (ش ط ن) ---');
  const {data:stnEx} = await db.from('word_meanings').select('id,display_order').eq('analysis_id',941).order('display_order');
  const stnMax = Math.max(...stnEx.map(s=>s.display_order),0);

  const stnNew = [
    // Égarement/Rébellion (add 2)
    {concept:'Égarement/Rébellion', sense:'mauvais/corrompu',
     description:"Le Lane's donne shāṭin : khabīth, bad, corrupt. Celui dont la nature est altérée, éloignée de ce qui est bon."},
    {concept:'Égarement/Rébellion', sense:'agir en diable',
     description:"Le Lane's donne shaytana : he acted as a shayṭān, he became and acted like the shayṭān. Adopter le comportement du rebelle."},

    // Distance/Éloignement (NEW, 4)
    {concept:'Distance/Éloignement', sense:'être distant',
     description:"Le Lane's donne shaṭana : he was or became distant or remote. C'est le sens premier de la racine sh-ṭ-n. La distance est un état spatial — être loin de quelque chose ou de quelqu'un. C'est un état permanent ou prolongé, pas un acte ponctuel. Le shayṭān (sur le schème fayʿāl) tire son nom de cette distance : celui qui est éloigné de la vérité et de la miséricorde."},
    {concept:'Distance/Éloignement', sense:'demeure éloignée',
     description:"Le Lane's donne shaṭanat ad-dāru : the abode or dwelling was distant or remote. Le lieu qui est loin, difficile à atteindre."},
    {concept:'Distance/Éloignement', sense:'faire s éloigner',
     description:"Le Lane's donne ashṭanahu : he made him or caused him to be or become distant or remote. La forme IV causative : provoquer l'éloignement de quelqu'un."},
    {concept:'Distance/Éloignement', sense:'éloigné (adj)',
     description:"Le Lane's donne shaṭūn : distant, remote. Adjectif qualifiant ce qui est loin."},

    // Corde/Lien (NEW, 2)
    {concept:'Corde/Lien', sense:'corde',
     description:"Le Lane's donne shaṭan : a rope, or a long rope, or a long and strongly-twisted rope by means of which one draws water. La corde est un objet physique concret — elle lie, retient et permet de puiser. La longueur de la corde évoque la distance (le sens premier de la racine)."},
    {concept:'Corde/Lien', sense:'puits profond',
     description:"Le Lane's donne biʾr shaṭūn : a deep well, from which the bucket is drawn by means of two ropes. Le puits profond nécessite une longue corde — la profondeur est une forme de distance verticale."}
  ].map((s,i)=>({...s, analysis_id:941, display_order:stnMax+1+i, meaning_type:'etymology'}));

  const {error:stnErr} = await db.from('word_meanings').insert(stnNew);
  console.log('šytn insert:', stnErr ? 'ERROR: '+stnErr.message : stnNew.length+' sens OK');

  // --- 1e. rjm (1265): 4 → 11 sens ---
  console.log('\n--- 1e. Enrichir rjm (ر ج م) ---');
  const {data:rjmEx} = await db.from('word_meanings').select('id,display_order').eq('analysis_id',1265).order('display_order');
  const rjmMax = Math.max(...rjmEx.map(s=>s.display_order),0);

  const rjmNew = [
    // Lapidation/Rejet (add 3)
    {concept:'Lapidation/Rejet', sense:'tuer',
     description:"Le Lane's donne rajīm : slain, put to death, generally meaning put to death by being stoned. La mise à mort est la conséquence ultime de la lapidation."},
    {concept:'Lapidation/Rejet', sense:'injurier',
     description:"Le Lane's donne murājama bil-kalām : mutual reviling. L'injure est la lapidation verbale — on jette des mots comme on jette des pierres, pour blesser et repousser."},
    {concept:'Lapidation/Rejet', sense:'repousser',
     description:"Le Lane's donne le verbe comme signifiant aussi chasser, expulser par la force. L'acte de repousser quelqu'un loin de soi."},

    // Pierre/Tombe (NEW, 4)
    {concept:'Pierre/Tombe', sense:'tombe',
     description:"Le Lane's donne rajam : a grave, because stones are collected together upon it. La tombe est le lieu où l'on empile des pierres — le lien avec la lapidation est dans l'accumulation de pierres. La tombe marque un lieu permanent, un point fixe dans l'espace. C'est un objet passif qui reçoit les pierres plutôt que de les lancer."},
    {concept:'Pierre/Tombe', sense:'amas de pierres',
     description:"Le Lane's donne rajma : stones placed upon a grave, or high stones set up as a sign. Un empilement de pierres servant de marqueur ou de couverture."},
    {concept:'Pierre/Tombe', sense:'étoiles filantes',
     description:"Le Lane's donne rujūm : the shooting stars that are cast. Les étoiles filantes sont des projectiles célestes — des pierres lancées depuis le ciel."},
    {concept:'Pierre/Tombe', sense:'projectile',
     description:"Le Lane's donne rajm : a thing that is thrown or cast, like as is a stone. Tout objet lancé comme une pierre."}
  ].map((s,i)=>({...s, analysis_id:1265, display_order:rjmMax+1+i, meaning_type:'etymology'}));

  const {error:rjmErr} = await db.from('word_meanings').insert(rjmNew);
  console.log('rjm insert:', rjmErr ? 'ERROR: '+rjmErr.message : rjmNew.length+' sens OK');

  // Verify richness
  console.log('\n--- Richesse après enrichissement ---');
  const checkRoots = [
    {k:'wde',a:1262},{k:'qwl',a:307},{k:'rbb',a:253},{k:'llh',a:255},
    {k:'elm',a:254},{k:'dhkr',a:485},{k:'smw',a:249},{k:'mrym',a:1316},
    {k:'ewḏ',a:623},{k:'dhru',a:1074},{k:'šytn',a:941},{k:'rjm',a:1265},
    {k:'anṯy',a:1315}
  ];
  for (const {k,a} of checkRoots) {
    const {data:s} = await db.from('word_meanings').select('id').eq('analysis_id',a);
    console.log(k+' (aid='+a+'): '+s.length+' sens');
  }

  // =============================================
  // 2. CONCEPTS BDD (vérification)
  // =============================================
  console.log('\n--- 2. Concepts BDD ---');
  const aidMap = {
    1262:'wde',307:'qwl',253:'rbb',255:'llh',254:'elm',485:'dhkr',
    249:'smw',1316:'mrym',623:'ewḏ',1074:'dhru',941:'šytn',1265:'rjm',1315:'anṯy'
  };
  for (const [aid,k] of Object.entries(aidMap)) {
    const {data:ss} = await db.from('word_meanings').select('concept').eq('analysis_id',parseInt(aid));
    const concepts = [...new Set(ss.map(s=>s.concept))];
    console.log(k+': '+concepts.join(', '));
  }

  // =============================================
  // 3. FIX SEGMENTS
  // =============================================
  console.log('\n--- 3. Fix segments ---');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id',VA_ID).single();
  let segs = va.segments;

  // 3a. Reclassify pronouns/particles
  const toParticle = [
    {pos:6, key:'any', fr:'certes, je'},        // innī (emphatic + pronoun)
    {pos:13, key:'ma', fr:'ce que'},             // mā (relative pronoun)
    {pos:20, key:'any', fr:'certes, je'},        // innī
    {pos:24, key:'any', fr:'certes, je'},        // innī
    {pos:27, key:'ka', fr:'Toi'}                 // ka (pronoun suffix)
  ];
  for (const tp of toParticle) {
    const seg = segs.find(s => s.position === tp.pos);
    if (seg) {
      seg.type = 'particle';
      seg.is_particle = true;
      seg.fr = tp.fr;
      delete seg.word_key; delete seg.key; delete seg.root;
      console.log('pos='+tp.pos+' '+tp.key+': important → particle');
    }
  }

  // 3b. Ensure consistency for all segments
  segs.forEach(s => {
    if (s.type === 'important') { s.is_particle = false; if (s.key && !s.word_key) s.word_key = s.key; }
    if (s.type === 'particle') { s.is_particle = true; }
  });

  // 3c. Change ḏrw word_key to dhru (same root, enriched under dhru)
  const seg28 = segs.find(s => s.position === 28);
  if (seg28) {
    seg28.word_key = 'dhru';
    if (seg28.key) seg28.key = 'dhru';
    console.log('pos=28: word_key ḏrw → dhru');
  }

  // 3d. Update fr + sense_retenu for important segments
  const segUpdates = {
    2:  {fr:'elle mit au monde', sense_retenu:'accoucher'},
    4:  {fr:'elle dit', sense_retenu:'dire'},
    5:  {fr:'mon Seigneur', sense_retenu:'seigneur'},
    7:  {fr:"je l'ai mise au monde", sense_retenu:'accoucher'},
    8:  {fr:'femelle', sense_retenu:'femelle'},
    10: {fr:'Dieu', sense_retenu:'Dieu'},
    11: {fr:'sait mieux', sense_retenu:'savoir'},
    14: {fr:'elle a mis au monde', sense_retenu:'accoucher'},
    16: {fr:'le mâle', sense_retenu:'mâle'},
    18: {fr:'la femelle', sense_retenu:'femelle'},
    21: {fr:"je l'ai nommée", sense_retenu:'nommer'},
    22: {fr:'Marie', sense_retenu:'Marie'},
    25: {fr:'je la place sous Ta protection', sense_retenu:'placer sous protection'},
    28: {fr:'et sa descendance', sense_retenu:'descendance'},
    30: {fr:'le diable', sense_retenu:'diable (shaytan)'},
    31: {fr:'chassé', sense_retenu:'chasser à coups de pierres'}
  };
  for (const [pos,upd] of Object.entries(segUpdates)) {
    const seg = segs.find(s => s.position === parseInt(pos));
    if (seg) { seg.fr = upd.fr; seg.sense_retenu = upd.sense_retenu; }
  }
  console.log('Segments fr/sense_retenu mis à jour pour', Object.keys(segUpdates).length, 'positions');

  // 3e. Save segments
  const {error:segErr} = await db.from('verse_analyses').update({segments:segs}).eq('id',VA_ID);
  console.log('Segments save:', segErr ? 'ERROR: '+segErr.message : 'OK');

  // Count important vs particle
  const impSegs = segs.filter(s => s.type === 'important');
  const partSegs = segs.filter(s => s.type === 'particle');
  console.log('Important:', impSegs.length, '| Particle:', partSegs.length, '| Total:', segs.length);

  // =============================================
  // 4. VWA (16 entries)
  // =============================================
  console.log('\n--- 4. VWA ---');

  // Delete existing VWA if any
  await db.from('verse_word_analyses').delete().eq('verse_id',VERSE_ID);

  const vwaEntries = [
    // pos=2 wde (waḍaʿat = elle mit au monde)
    {verse_id:VERSE_ID, word_key:'wde', root:'و ض ع', position:2,
     sense_chosen:'accoucher',
     analysis_axes:JSON.stringify({
       concept_chosen:'Dépôt/Placement',
       concepts:{
         'Dépôt/Placement':{status:'retenu', senses:['poser','accoucher','établir','déposer'],
           proof_ctx:"Le verbe waḍaʿa au sens d'accoucher est attesté par les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863) : she brought forth. Dans ce verset, la femme d'Imran met au monde l'enfant qu'elle avait voué à Dieu (verset précédent). Le sens de dépôt/placement est le sens premier — la mère dépose l'enfant hors de son ventre, comme on dépose un objet. Le sens d'abaissement ne correspond pas à l'acte d'enfanter."},
         'Abaissement':{status:'nul', senses:['diminuer',"s'humilier",'bas/ignoble','abaisser'],
           proof_ctx:"L'abaissement ne s'applique pas à l'acte d'enfanter. Le contexte est celui de la naissance, pas de l'humiliation."},
         'Imposition/Obligation':{status:'nul', senses:['imposer','remettre/dispenser'],
           proof_ctx:"L'imposition d'une charge n'a aucun rapport avec l'accouchement dans ce verset."},
         'Constitution/Forme':{status:'nul', senses:['constitution','posture'],
           proof_ctx:"La constitution/forme d'une chose ne correspond pas au contexte d'enfantement."}
       }
     })},

    // pos=4 qwl (qālat = elle dit)
    {verse_id:VERSE_ID, word_key:'qwl', root:'ق و ل', position:4,
     sense_chosen:'dire',
     analysis_axes:JSON.stringify({
       concept_chosen:'Parole/Énonciation',
       concepts:{
         'Parole/Énonciation':{status:'retenu', senses:['dire','parler','parole','discours','affirmer'],
           proof_ctx:"La mère d'Imran prend la parole pour s'adresser à Dieu après l'accouchement. Le verbe qālat (accompli 3ème féminin) introduit une invocation directe. Le sens de parole/énonciation est le seul qui corresponde au contexte d'une mère qui s'adresse à son Seigneur."},
         'Pensée/Avis':{status:'nul', senses:['opinion','avis','doctrine'],
           proof_ctx:"Il ne s'agit pas d'un avis ou d'une opinion mais d'une parole prononcée."}
       }
     })},

    // pos=5 rbb (rabbi = mon Seigneur)
    {verse_id:VERSE_ID, word_key:'rbb', root:'ر ب ب', position:5,
     sense_chosen:'seigneur',
     analysis_axes:JSON.stringify({
       concept_chosen:'Seigneurie/Autorité bienveillante',
       concepts:{
         'Seigneurie/Autorité bienveillante':{status:'retenu', senses:['seigneur','maître','propriétaire','celui qui élève'],
           proof_ctx:"Rabbi est une invocation directe à Dieu — la mère s'adresse à son Seigneur. Le concept de seigneurie/autorité bienveillante est le seul qui corresponde à une adresse à Dieu. La forme rabbi (avec le pronom possessif de la 1ère personne) exprime la relation personnelle : mon Seigneur, celui qui m'élève et me protège."},
         'Croissance/Augmentation':{status:'peu_probable', senses:['augmenter','croître'],
           proof_ctx:"La croissance est le sens physique premier de la racine, mais dans une invocation à Dieu, c'est le concept de seigneurie qui prévaut."}
       }
     })},

    // pos=7 wde (waḍaʿtuhā = je l'ai mise au monde)
    {verse_id:VERSE_ID, word_key:'wde', root:'و ض ع', position:7,
     sense_chosen:'accoucher',
     analysis_axes:JSON.stringify({
       concept_chosen:'Dépôt/Placement',
       concepts:{
         'Dépôt/Placement':{status:'retenu', senses:['poser','accoucher','établir','déposer'],
           proof_ctx:"Même verbe que la position 2, maintenant à la 1ère personne : la mère dit elle-même ce qu'elle a fait. Le sens d'accoucher reste le seul pertinent. La répétition du verbe souligne le constat de la mère face à la réalité de la naissance."},
         'Abaissement':{status:'nul', senses:['diminuer',"s'humilier"],
           proof_ctx:"L'abaissement ne correspond pas à l'acte d'enfanter."}
       }
     })},

    // pos=8 anṯy (unthā = femelle)
    {verse_id:VERSE_ID, word_key:'anṯy', root:'أ ن ث ى', position:8,
     sense_chosen:'femelle',
     analysis_axes:JSON.stringify({
       concept_chosen:'Féminin/Femelle',
       concepts:{
         'Féminin/Femelle':{status:'retenu', senses:['femelle','féminin','choses inanimées'],
           proof_ctx:"Le mot unthā fonctionne comme ḥāl (état/circonstance) : je l'ai mise au monde [en tant que] femelle. Le contexte est celui de la naissance et du genre biologique — la mère constate que l'enfant est de sexe féminin, ce qui pose un problème car elle avait voué l'enfant au service divin (habituellement réservé aux garçons). Le sens de douceur/mollesse est le sens premier de la racine mais pas celui activé par le contexte."},
         'Douceur/Mollesse':{status:'peu_probable', senses:['douceur','fer doux','terre douce/fertile','agir avec douceur'],
           proof_ctx:"Le sens premier de la racine selon les sources étymologiques, mais le verset oppose explicitement unthā à dhakaru (mâle), ce qui active le sens de genre biologique."},
         'Effémination':{status:'nul', senses:['efféminé','rendre efféminé'],
           proof_ctx:"L'effémination concerne l'adoption de traits féminins par un être masculin — sans rapport avec la naissance d'une fille."}
       }
     })},

    // pos=10 llh (allāhu = Dieu)
    {verse_id:VERSE_ID, word_key:'llh', root:'ا ل ه', position:10,
     sense_chosen:'Dieu',
     analysis_axes:JSON.stringify({
       concept_chosen:'Divinité',
       concepts:{
         'Divinité':{status:'retenu', senses:['divinité','dieu','Dieu'],
           proof_ctx:"Allāhu est le nom propre de la divinité. Il est sujet de la phrase wa-llāhu aʿlamu (et Dieu sait mieux). Le concept de divinité est le seul pertinent pour ce nom propre."},
         'Adoration/Culte':{status:'peu_probable', senses:['adorer','servir'],
           proof_ctx:"L'adoration est une activité liée à Dieu mais n'est pas le sens du nom lui-même dans ce contexte."}
       }
     })},

    // pos=11 elm (aʿlamu = sait mieux)
    {verse_id:VERSE_ID, word_key:'elm', root:'ع ل م', position:11,
     sense_chosen:'savoir',
     analysis_axes:JSON.stringify({
       concept_chosen:'Savoir/Connaissance',
       concepts:{
         'Savoir/Connaissance':{status:'retenu', senses:['savoir','connaître','être informé','certitude','savant','science'],
           proof_ctx:"La forme élatif (afʿal) aʿlamu signifie celui qui sait le plus ou le mieux. La phrase wa-llāhu aʿlamu bi-mā waḍaʿat (et Dieu sait mieux ce qu'elle a mis au monde) est une parenthèse qui rappelle que la connaissance de Dieu dépasse celle de la mère. Le sens de marque/signe ou de monde ne correspondent pas au contexte d'une affirmation sur le savoir divin."},
         'Marque/Signe':{status:'nul', senses:['marquer','signe','drapeau'],
           proof_ctx:"Aucun rapport avec un signe ou une marque dans ce contexte."},
         'Monde/Création':{status:'nul', senses:['monde','les mondes'],
           proof_ctx:"Le sens de monde n'est pas activé — le mot est un élatif du savoir, pas un nom."}
       }
     })},

    // pos=14 wde (waḍaʿat = elle a mis au monde)
    {verse_id:VERSE_ID, word_key:'wde', root:'و ض ع', position:14,
     sense_chosen:'accoucher',
     analysis_axes:JSON.stringify({
       concept_chosen:'Dépôt/Placement',
       concepts:{
         'Dépôt/Placement':{status:'retenu', senses:['poser','accoucher','établir','déposer'],
           proof_ctx:"Troisième occurrence du verbe waḍaʿa dans le verset, dans la phrase parenthétique wa-llāhu aʿlamu bi-mā waḍaʿat (et Dieu sait mieux ce qu'elle a mis au monde). Le sens reste accoucher/mettre au monde — la même action est décrite du point de vue de la connaissance divine."},
         'Abaissement':{status:'nul', senses:['diminuer',"s'humilier"],
           proof_ctx:"L'abaissement ne correspond pas au contexte."}
       }
     })},

    // pos=16 dhkr (adh-dhakaru = le mâle)
    {verse_id:VERSE_ID, word_key:'dhkr', root:'ذ ك ر', position:16,
     sense_chosen:'mâle',
     analysis_axes:JSON.stringify({
       concept_chosen:'Masculin',
       concepts:{
         'Masculin':{status:'retenu', senses:['mâle'],
           proof_ctx:"Le mot adh-dhakaru (défini avec al-) désigne le genre masculin en opposition directe à al-unthā (la femelle). Le verset oppose les deux genres : le mâle n'est pas comme la femelle. Le sens de mémoire/rappel est le sens premier de la racine dh-k-r mais n'est pas activé ici — le contexte parle de genre biologique, pas de mémoire."},
         'Mémoire/Rappel':{status:'peu_probable', senses:['se souvenir','rappeler','mentionner','mémoire'],
           proof_ctx:"Le sens de mémoire/rappel est le sens principal de la racine, mais l'opposition avec al-unthā (la femelle) impose le sens de mâle comme seul pertinent dans ce verset."}
       }
     })},

    // pos=18 anṯy (al-unthā = la femelle)
    {verse_id:VERSE_ID, word_key:'anṯy', root:'أ ن ث ى', position:18,
     sense_chosen:'femelle',
     analysis_axes:JSON.stringify({
       concept_chosen:'Féminin/Femelle',
       concepts:{
         'Féminin/Femelle':{status:'retenu', senses:['femelle','féminin'],
           proof_ctx:"Al-unthā (avec article défini) désigne la catégorie générale du féminin en opposition à adh-dhakaru (le mâle). Le texte dit wa-laysa adh-dhakaru kal-unthā : le mâle n'est pas comme la femelle. C'est un constat sur la différence des genres, sans que le texte ne précise la nature de cette différence."},
         'Douceur/Mollesse':{status:'peu_probable', senses:['douceur','terre douce/fertile'],
           proof_ctx:"L'opposition avec dhakaru (mâle) impose le sens de genre biologique."}
       }
     })},

    // pos=21 smw (sammaytuhā = je l'ai nommée)
    {verse_id:VERSE_ID, word_key:'smw', root:'س م و', position:21,
     sense_chosen:'nommer',
     analysis_axes:JSON.stringify({
       concept_chosen:'Nom/Identification',
       concepts:{
         'Nom/Identification':{status:'retenu', senses:['nom','nommer','prononcer le nom de Dieu','renommée'],
           proof_ctx:"Le verbe sammaytuhā est une forme II (tafʿīl) accompli de la racine s-m-w, à la 1ère personne avec pronom suffixe. La forme II de cette racine porte spécifiquement le sens de donner un nom. Le contexte est clair : la mère donne à sa fille le nom de Marie. Le sens de hauteur/élévation (sens premier de la racine) n'est pas activé par la forme verbale utilisée."},
         'Hauteur/Élévation':{status:'peu_probable', senses:['être haut','noble','aspirer'],
           proof_ctx:"Le sens premier de la racine s-m-w, mais la forme II porte le sens spécifique de nommer, pas d'élever."}
       }
     })},

    // pos=22 mrym (maryama = Marie)
    {verse_id:VERSE_ID, word_key:'mrym', root:'م ر ي م', position:22,
     sense_chosen:'Marie',
     analysis_axes:JSON.stringify({
       concept_chosen:'Nom propre',
       concepts:{
         'Nom propre':{status:'retenu', senses:['Marie'],
           proof_ctx:"Maryam est un nom propre sémitique ancien. C'est le nom que la mère donne à l'enfant. Aucun autre sens n'est applicable."}
       }
     })},

    // pos=25 ewḏ (ʾuʿīdhuhā = je la place sous Ta protection)
    {verse_id:VERSE_ID, word_key:'ewḏ', root:'ع و ذ', position:25,
     sense_chosen:'placer sous protection',
     analysis_axes:JSON.stringify({
       concept_chosen:'Protection/Abri',
       concepts:{
         'Protection/Abri':{status:'retenu', senses:['chercher refuge','se réfugier','protection','placer sous protection','refuge (lieu)','protection mutuelle'],
           proof_ctx:"Le verbe ʾuʿīdhuhā est une forme IV (ufʿilu) inaccompli de la racine ʿ-w-dh. La forme I (ʿādha) signifie chercher refuge. La forme IV ajoute la causalité : faire chercher refuge à quelqu'un, c'est-à-dire placer quelqu'un sous protection. La mère ne cherche pas refuge pour elle-même — elle place sa fille et la descendance de sa fille sous la protection de Dieu. Le sens de placer sous protection est le seul qui corresponde à la forme IV causative."},
         'Amulette/Talisman':{status:'nul', senses:['amulette','talisman'],
           proof_ctx:"Les amulettes sont des objets matériels de protection — le contexte est celui d'une invocation à Dieu, pas d'un objet."},
         'Abri/Couvert':{status:'nul', senses:['abri naturel','feuilles mortes'],
           proof_ctx:"L'abri naturel est un lieu physique — le verset parle de protection divine, pas d'un lieu."}
       }
     })},

    // pos=28 dhru (dhurrīyatahā = et sa descendance)
    {verse_id:VERSE_ID, word_key:'dhru', root:'ذ ر و', position:28,
     sense_chosen:'descendance',
     analysis_axes:JSON.stringify({
       concept_chosen:'Descendance/Multiplication',
       concepts:{
         'Descendance/Multiplication':{status:'retenu', senses:['progéniture','descendance','enfants','êtres créés','lignée'],
           proof_ctx:"Le mot dhurrīyatahā (descendance + pronom possessif hā) désigne la postérité de Marie. Il est à l'accusatif comme complément coordonné : la mère demande protection pour Marie ET pour sa descendance. Le sens de descendance/multiplication est le seul pertinent — les sens de dispersion, petitesse ou sommet ne s'appliquent pas au contexte d'une demande de protection pour la postérité."},
         'Dispersion/Éparpillement':{status:'peu_probable', senses:['disperser','vanner','éparpiller'],
           proof_ctx:"La dispersion est le sens physique premier de la racine. La descendance se multiplie et se répand — il y a un lien étymologique — mais le contexte ici est celui de la postérité, pas de l'éparpillement."},
         'Petitesse/Infime':{status:'nul', senses:['atome','particule'],
           proof_ctx:"La petitesse n'a aucun rapport avec la descendance dans ce contexte."},
         'Sommet/Élévation':{status:'nul', senses:['sommet','cime'],
           proof_ctx:"Le sommet n'est pas pertinent pour une demande de protection de la postérité."},
         'Protection/Abri':{status:'nul', senses:['abri','se protéger'],
           proof_ctx:"Ce sens de la racine dh-r-w n'est pas activé ici — la protection est exprimée par ʿ-w-dh (ʾuʿīdhuhā), pas par dh-r-w."}
       }
     })},

    // pos=30 šytn (ash-shayṭāni = le diable)
    {verse_id:VERSE_ID, word_key:'šytn', root:'ش ي ط ن', position:30,
     sense_chosen:'diable (shaytan)',
     analysis_axes:JSON.stringify({
       concept_chosen:'Égarement/Rébellion',
       concepts:{
         'Égarement/Rébellion':{status:'retenu', senses:['diable (shaytan)',"s'éloigner de la vérité",'être rebelle','mauvais/corrompu','agir en diable'],
           proof_ctx:"Le mot ash-shayṭāni (avec article défini) désigne l'être par excellence qui s'est éloigné de la vérité. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), shayṭān vient de shaṭana (être distant) sur le schème fayʿāl et désigne tout être excessivement orgueilleux, corrompu ou rebelle. La mère demande protection contre cet être. Le sens d'égarement/rébellion est le plus complet car il englobe à la fois la distance morale (éloignement de la vérité) et le comportement (rébellion, corruption). Le sens de distance physique est le sens premier de la racine mais ne correspond pas à l'usage ici — c'est la distance morale qui définit le shayṭān."},
         'Distance/Éloignement':{status:'probable', senses:['être distant','demeure éloignée','faire s éloigner','éloigné (adj)'],
           proof_ctx:"Le sens premier de la racine sh-ṭ-n est être distant. Le shayṭān tire son nom de cette distance. Mais dans ce verset, c'est l'être rebelle et éloigné de la vérité qui est visé, pas la simple distance physique."},
         'Corde/Lien':{status:'nul', senses:['corde','puits profond'],
           proof_ctx:"La corde est un sens concret de la racine sans rapport avec le contexte."},
         'Feu/Chaleur':{status:'nul', senses:['brûler (de colère)'],
           proof_ctx:"Ce sens est lié à une autre racine (sh-y-ṭ) et non au contexte."}
       }
     })},

    // pos=31 rjm (ar-rajīmi = chassé)
    {verse_id:VERSE_ID, word_key:'rjm', root:'ر ج م', position:31,
     sense_chosen:'chasser à coups de pierres',
     analysis_axes:JSON.stringify({
       concept_chosen:'Lapidation/Rejet',
       concepts:{
         'Lapidation/Rejet':{status:'retenu', senses:['lapider','chasser à coups de pierres','maudire','tuer','injurier','repousser'],
           proof_ctx:"Le mot ar-rajīm est un adjectif qualificatif (forme faʿīl passive) de la racine r-j-m, épithète de ash-shayṭān. D'après les sources étymologiques, le sens premier de rajm est jeter des pierres. Le rajīm est donc celui qui a été chassé à coups de pierres — celui qu'on a expulsé violemment. La forme faʿīl passive indique que le shayṭān SUBIT l'action : il est celui qui a été chassé, pas celui qui chasse. Le sens de maudit est une interprétation exégétique — l'étymologie dit chassé à coups de pierres, ce qui implique une expulsion physique plutôt qu'une malédiction."},
         'Pierre/Tombe':{status:'nul', senses:['tombe','amas de pierres','étoiles filantes','projectile'],
           proof_ctx:"Les pierres, tombes et étoiles filantes sont des objets concrets liés à la racine mais sans rapport avec le qualificatif du shayṭān."},
         'Sens isolé/Conjecturer':{status:'nul', senses:['conjecturer'],
           proof_ctx:"La conjecture est un sens isolé sans rapport avec l'épithète du shayṭān."}
       }
     })}
  ];

  const {error:vwaErr} = await db.from('verse_word_analyses').insert(vwaEntries);
  console.log('VWA insert:', vwaErr ? 'ERROR: '+vwaErr.message : vwaEntries.length+' entries OK');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n--- 5. Translation ---');

  const translation = "Alors quand elle la mit au monde, elle dit : « Mon Seigneur, je l'ai mise au monde femelle — et Dieu sait mieux ce qu'elle a mis au monde — et le mâle n'est pas comme la femelle. Et je l'ai nommée Marie. Et je la place sous Ta protection, elle et sa descendance, contre le diable chassé. »";

  const fullTranslation = "Puis, lorsqu'elle en eut accouché, elle dit : « Seigneur, voilà que j'ai accouché d'une fille » ; or Allah savait mieux ce dont elle avait accouché ! Le garçon n'est pas comme la fille. « Je l'ai nommée Marie, et je la place, ainsi que sa descendance, sous Ta protection contre le Diable, le banni. »";

  const translationArab = "فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ إِنِّى وَضَعْتُهَآ أُنثَىٰ وَٱللَّهُ أَعْلَمُ بِمَا وَضَعَتْ وَلَيْسَ ٱلذَّكَرُ كَٱلْأُنثَىٰ ۖ وَإِنِّى سَمَّيْتُهَا مَرْيَمَ وَإِنِّىٓ أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ ٱلشَّيْطَـٰنِ ٱلرَّجِيمِ";

  const explanation = `§DEMARCHE§
Ce verset poursuit le récit commencé au verset 35 : la femme d'Imran avait fait vœu de consacrer l'enfant qu'elle portait. Elle découvre maintenant que c'est une fille, ce qui pose un problème car le service au temple était habituellement réservé aux garçons.

**waḍaʿat** (elle mit au monde) est un verbe accompli de la racine w-ḍ-ʿ, 3ème personne du féminin singulier. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le sens premier de waḍaʿa est poser, déposer (le contraire de rafaʿa, lever). Par extension, waḍaʿat signifie elle enfanta, elle mit au monde — comme si la mère déposait l'enfant hors de son corps. Le pronom suffixe hā renvoie au bébé, en anticipant le féminin. On traduit par « elle la mit au monde ».

**qālat** (elle dit) est un verbe accompli de la racine q-w-l, 3ème personne du féminin singulier. C'est le verbe standard pour introduire un discours direct. On traduit par « elle dit ».

**rabbi** (mon Seigneur) est un nom de la racine r-b-b au cas indirect (vocatif), avec le pronom possessif de la 1ère personne. Le sens retenu est seigneur — celui qui élève, possède et entretient. La forme rabbi exprime la relation personnelle entre la mère et Dieu. On traduit par « mon Seigneur ».

**waḍaʿtuhā** (je l'ai mise au monde) est le même verbe waḍaʿa à la 1ère personne de l'accompli avec le pronom suffixe hā. La mère reprend le même verbe pour exprimer son propre constat. On traduit par « je l'ai mise au monde ».

**unthā** (femelle) est un nom de la racine ʾ-n-th à l'accusatif indéfini. D'après les sources étymologiques, le sens premier de la racine est la douceur (softness), et par extension le féminin/femelle — le genre caractérisé par la douceur par rapport au masculin. Le mot fonctionne ici comme ḥāl (état/circonstance) : je l'ai mise au monde [étant] femelle. On traduit par « femelle ».

**allāhu** (Dieu) est le nom propre de la divinité, de la racine ʾ-l-h, au nominatif. Il est sujet de la phrase qui suit.

**aʿlamu** (sait mieux) est un élatif (forme afʿal, le superlatif/comparatif) de la racine ʿ-l-m. L'élatif exprime que Dieu sait plus et mieux que quiconque. La phrase wa-llāhu aʿlamu bi-mā waḍaʿat est une parenthèse — le texte ne précise pas si c'est la mère qui parle ou si c'est un commentaire du narrateur. On traduit par « sait mieux ».

**adh-dhakaru** (le mâle) est un nom défini de la racine dh-k-r. Cette racine a deux champs sémantiques principaux : la mémoire/le rappel et le masculin/mâle. Avec l'article défini al- et en opposition directe à al-unthā (la femelle), c'est le concept générique du genre masculin. On traduit par « le mâle ».

**al-unthā** (la femelle) est le même nom qu'unthā mais avec l'article défini, désignant la catégorie générale du féminin. Le texte dit wa-laysa adh-dhakaru kal-unthā : le mâle n'est pas comme la femelle. Le texte ne précise pas en quoi le mâle diffère de la femelle ni si cette différence est un avantage ou un désavantage.

**sammaytuhā** (je l'ai nommée) est un verbe accompli de la forme II (tafʿīl) de la racine s-m-w, à la 1ère personne avec le pronom suffixe hā. La racine s-m-w a pour sens premier la hauteur, l'élévation. Mais la forme II porte spécifiquement le sens de donner un nom, nommer. On traduit par « je l'ai nommée ».

**maryama** (Marie) est un nom propre invariable, d'origine sémitique ancienne. C'est le nom que la mère choisit pour sa fille.

**ʾuʿīdhuhā** (je la place sous Ta protection) est un verbe inaccompli de la forme IV (ufʿilu) de la racine ʿ-w-dh, à la 1ère personne avec le pronom suffixe hā. D'après les sources étymologiques, la forme I ʿādha signifie chercher refuge auprès de quelqu'un. La forme IV aʿādha ajoute la causalité : faire chercher refuge à quelqu'un, c'est-à-dire placer quelqu'un sous la protection de. Le passage de la forme I (je cherche refuge pour moi) à la forme IV (je place mon enfant sous protection) montre que la mère agit au nom de sa fille. L'inaccompli (présent) indique que cette demande est en cours et permanente. On traduit par « je la place sous Ta protection ».

**dhurrīyatahā** (et sa descendance) est un nom de la racine dh-r-w à l'accusatif, avec le pronom possessif hā (sa). D'après les sources étymologiques, la dhurriyya est l'ensemble de la postérité issue d'un ancêtre. L'accusatif montre que c'est un complément coordonné avec le pronom hā de ʾuʿīdhuhā : la mère demande protection pour Marie ET pour sa descendance. On traduit par « et sa descendance ».

**ash-shayṭāni** (le diable) est un nom défini de la racine sh-ṭ-n, au génitif après min (de/contre). D'après les sources étymologiques, le sens premier de shaṭana est être distant, éloigné. Le mot shayṭān, sur le schème fayʿāl, désigne celui qui est éloigné de la vérité. Le Lane's précise : tout être qui est excessivement orgueilleux, corrompu ou rebelle, parmi les humains et les djinns. On traduit par « le diable ».

**ar-rajīmi** (chassé) est un adjectif qualificatif de la racine r-j-m, au génitif (épithète de ash-shayṭāni). La forme faʿīl a ici une valeur passive : celui qui a subi l'action. D'après les sources étymologiques, le sens premier de rajm est jeter des pierres. Le rajīm est donc celui qui a été chassé à coups de pierres — l'image est celle d'une expulsion violente. On traduit par « chassé ».

§JUSTIFICATION§
**mettre au monde** — Le sens retenu est « accoucher » de la racine w-ḍ-ʿ. Le mot « mettre au monde » est choisi car il est naturel en français courant pour l'acte d'enfanter. L'alternative « poser » est écartée car trop physique (déposer un objet sur une surface). L'alternative « établir » est écartée car trop abstraite. Le verbe apparaît trois fois dans le verset pour le même acte, ce qui souligne l'importance de la naissance dans le récit.

**dire** — Le sens retenu est « dire » de la racine q-w-l. Usage standard, sans ambiguïté.

**seigneur** — Le sens retenu est « seigneur » de la racine r-b-b. Le mot « Seigneur » est choisi car il exprime la relation d'autorité bienveillante. L'alternative « maître » est écartée car elle ne porte pas la dimension de bienveillance et de croissance.

**femelle** — Le sens retenu est « femelle » de la racine ʾ-n-th. Le mot « femelle » est choisi car il désigne le genre biologique, en opposition directe à « mâle ». L'alternative « fille » (utilisée par certaines traductions) est écartée car le texte dit unthā (femelle), pas bint (fille) — la mère décrit le sexe biologique, pas le lien de parenté.

**Dieu** — Le sens retenu est « Dieu » de la racine ʾ-l-h. Nom propre standard.

**savoir** — Le sens retenu est « savoir » de la racine ʿ-l-m. L'élatif aʿlamu est traduit par « sait mieux » pour exprimer le superlatif. L'alternative « connaître » est écartée car « savoir » couvre plus largement la connaissance absolue.

**mâle** — Le sens retenu est « mâle » de la racine dh-k-r. Le mot « mâle » est choisi par opposition directe à « femelle ». L'alternative « garçon » (utilisée par Hamidullah) est écartée car le texte dit adh-dhakaru (le mâle), pas al-walad (le garçon) — le contraste porte sur le genre, pas sur l'âge.

**nommer** — Le sens retenu est « nommer » de la racine s-m-w (forme II). Le mot « nommer » est le verbe standard pour donner un nom. L'alternative « appeler » est un synonyme acceptable mais moins précis.

**Marie** — Nom propre.

**placer sous protection** — Le sens retenu est « placer sous protection » de la racine ʿ-w-dh (forme IV). Le mot « je la place sous Ta protection » traduit la forme IV causative. L'alternative « je cherche refuge » est le sens de la forme I, mais la forme IV indique que la mère agit au nom de son enfant, pas pour elle-même.

**descendance** — Le sens retenu est « descendance » de la racine dh-r-w. Le mot « descendance » est choisi car il couvre toute la postérité à travers les générations. L'alternative « progéniture » est écartée car elle désigne plutôt les enfants directs.

**diable** — Le sens retenu est « diable (shaytan) » de la racine sh-ṭ-n. Le mot « diable » est choisi car c'est le mot français courant. L'alternative « Satan » est écartée car le Lane's montre que shayṭān n'est pas un nom propre mais un nom commun (tout être orgueilleux/rebelle).

**chassé** — Le sens retenu est « chasser à coups de pierres » de la racine r-j-m. Le mot « chassé » est choisi car la forme faʿīl (rajīm) est passive : celui qui a été chassé. L'alternative « maudit » est écartée car c'est une interprétation exégétique — la racine r-j-m signifie jeter des pierres, donc chasser/expulser, pas maudire. L'alternative « lapidé » est écartée car trop littérale pour un qualificatif.

§CRITIQUE§
**chassé vs banni/maudit** — Les traductions courantes donnent « le banni » ou « le maudit » pour ar-rajīm. Le mot « maudit » vient des exégèses classiques qui interprètent rajīm comme celui qui a été maudit par Dieu. Mais la racine r-j-m signifie jeter des pierres — le rajīm est celui qu'on a chassé en lui jetant des pierres. L'image étymologique est physique et violente : une expulsion à coups de pierres. Le terme « banni » utilisé par Hamidullah est plus proche de notre traduction mais reste une interprétation — le texte dit littéralement celui qui a été chassé à coups de pierres. Notre traduction donne « chassé » pour rester au plus près de cette image.

**femelle vs fille** — Les traductions courantes donnent « une fille » pour unthā. Ce choix vient du contexte (une mère qui accouche), mais le texte utilise unthā (femelle), pas bint (fille). La différence est importante : unthā décrit le sexe biologique, bint décrit le lien de parenté. La mère constate le genre de l'enfant, elle ne décrit pas sa relation familiale. Notre traduction donne « femelle » pour respecter ce choix lexical du texte.

**mâle vs garçon** — De même, les traductions courantes donnent « le garçon » pour adh-dhakaru. Le texte utilise le terme biologique adh-dhakaru (le mâle) et non al-waladu (le garçon). Le contraste voulu par le texte est entre les genres biologiques, pas entre les âges. Notre traduction donne « le mâle » pour respecter cette opposition.`;

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

  // Check existing daily phrases for enriched roots
  const dailyRoots = [
    {k:'wde',a:1262},{k:'anṯy',a:1315},{k:'ewḏ',a:623},
    {k:'šytn',a:941},{k:'rjm',a:1265}
  ];
  for (const {k,a} of dailyRoots) {
    const {data:existing} = await db.from('word_daily').select('id').eq('analysis_id',a);
    if (existing && existing.length > 0) {
      console.log(k+' ('+a+'): '+existing.length+' daily phrases exist — SKIP');
    } else {
      console.log(k+' ('+a+'): 0 daily phrases — inserting 3');
    }
  }

  // Insert daily phrases for roots that don't have them
  const dailyPhrases = [];

  // wde (1262)
  const {data:wdeDailyEx} = await db.from('word_daily').select('id').eq('analysis_id',1262);
  if (!wdeDailyEx || wdeDailyEx.length === 0) {
    dailyPhrases.push(
      {analysis_id:1262, arabic:'وَضَعَتْ', phon:'waḍaʿat', french:'Elle a mis au monde un bébé ce matin.', sense:'accoucher'},
      {analysis_id:1262, arabic:'وَضَعَ', phon:'waḍaʿa', french:'Il a posé le livre sur la table.', sense:'poser'},
      {analysis_id:1262, arabic:'تَوَاضَعَ', phon:'tawāḍaʿa', french:"Il s'est montré humble devant ses aînés.", sense:"s'humilier"}
    );
  }

  // anṯy (1315)
  const {data:antDailyEx} = await db.from('word_daily').select('id').eq('analysis_id',1315);
  if (!antDailyEx || antDailyEx.length === 0) {
    dailyPhrases.push(
      {analysis_id:1315, arabic:'أُنْثَى', phon:'unthā', french:'La lionne est la femelle du lion.', sense:'femelle'},
      {analysis_id:1315, arabic:'أَنِيث', phon:'anīth', french:'Cette terre douce produit beaucoup de plantes.', sense:'terre douce/fertile'},
      {analysis_id:1315, arabic:'مُؤَنَّث', phon:'muʾannath', french:'Ce mot est féminin en arabe.', sense:'féminin'}
    );
  }

  // ewḏ (623)
  const {data:ewdDailyEx} = await db.from('word_daily').select('id').eq('analysis_id',623);
  if (!ewdDailyEx || ewdDailyEx.length === 0) {
    dailyPhrases.push(
      {analysis_id:623, arabic:'أَعُوذُ', phon:'aʿūdhu', french:'Je cherche refuge auprès de Dieu.', sense:'chercher refuge'},
      {analysis_id:623, arabic:'أُعِيذُ', phon:'ʾuʿīdhu', french:'Je place mes enfants sous la protection de Dieu.', sense:'placer sous protection'},
      {analysis_id:623, arabic:'مَعَاذ', phon:'maʿādh', french:'La maison est un refuge contre le froid.', sense:'refuge (lieu)'}
    );
  }

  // šytn (941)
  const {data:stnDailyEx} = await db.from('word_daily').select('id').eq('analysis_id',941);
  if (!stnDailyEx || stnDailyEx.length === 0) {
    dailyPhrases.push(
      {analysis_id:941, arabic:'شَيْطَان', phon:'shayṭān', french:'Ne suis pas les pas du diable.', sense:'diable (shaytan)'},
      {analysis_id:941, arabic:'شَطَنَ', phon:'shaṭana', french:"Il s'est éloigné du groupe et personne ne l'a revu.", sense:'être distant'},
      {analysis_id:941, arabic:'شَطَن', phon:'shaṭan', french:'Le puisatier a tiré le seau avec une longue corde.', sense:'corde'}
    );
  }

  // rjm (1265)
  const {data:rjmDailyEx} = await db.from('word_daily').select('id').eq('analysis_id',1265);
  if (!rjmDailyEx || rjmDailyEx.length === 0) {
    dailyPhrases.push(
      {analysis_id:1265, arabic:'رَجَمَ', phon:'rajama', french:'Les enfants ont jeté des pierres dans la rivière.', sense:'lapider'},
      {analysis_id:1265, arabic:'رَجِيم', phon:'rajīm', french:'Le voleur a été chassé du village à coups de pierres.', sense:'chasser à coups de pierres'},
      {analysis_id:1265, arabic:'رَجَم', phon:'rajam', french:'Ils ont empilé des pierres sur la tombe.', sense:'tombe'}
    );
  }

  if (dailyPhrases.length > 0) {
    const {error:dailyErr} = await db.from('word_daily').insert(dailyPhrases);
    console.log('Daily insert:', dailyErr ? 'ERROR: '+dailyErr.message : dailyPhrases.length+' phrases OK');
  } else {
    console.log('Toutes les racines ont déjà des daily phrases.');
  }

  // =============================================
  // 7. VERIFICATION FINALE
  // =============================================
  console.log('\n--- 7. Vérification finale ---');

  // Check segments
  const {data:vaFinal} = await db.from('verse_analyses').select('segments,full_translation,translation_meditational,translation_explanation').eq('id',VA_ID).single();
  const finalSegs = vaFinal.segments;
  const impCount = finalSegs.filter(s => s.type === 'important').length;
  const partCount = finalSegs.filter(s => s.type === 'particle').length;
  console.log('Segments: '+impCount+' important, '+partCount+' particle, '+finalSegs.length+' total');

  // Check VWA
  const {data:vwaFinal} = await db.from('verse_word_analyses').select('word_key,position,sense_chosen').eq('verse_id',VERSE_ID).order('position');
  console.log('VWA: '+vwaFinal.length+' entries');
  vwaFinal.forEach(v => console.log('  pos='+v.position+' '+v.word_key+' → '+v.sense_chosen));

  // Check VWA positions match important segment positions
  const impPositions = finalSegs.filter(s=>s.type==='important').map(s=>s.position).sort((a,b)=>a-b);
  const vwaPositions = vwaFinal.map(v=>v.position).sort((a,b)=>a-b);
  const posMatch = JSON.stringify(impPositions) === JSON.stringify(vwaPositions);
  console.log('Positions match:', posMatch ? 'OK' : 'MISMATCH!');
  if (!posMatch) {
    console.log('  imp:', impPositions.join(','));
    console.log('  vwa:', vwaPositions.join(','));
  }

  // Check sense_retenu in segments matches sense_chosen in VWA
  let senseMatch = true;
  for (const v of vwaFinal) {
    const seg = finalSegs.find(s => s.position === v.position);
    if (seg && seg.sense_retenu !== v.sense_chosen) {
      // Note: some segments use the concept verb while VWA uses exact word_meanings sense
      // This is fine if they refer to the same concept
      console.log('  ⚠ pos='+v.position+': seg.sense_retenu="'+seg.sense_retenu+'" vs vwa.sense_chosen="'+v.sense_chosen+'"');
      senseMatch = false;
    }
  }
  if (senseMatch) console.log('Sense match: OK');

  // Check translations exist
  console.log('full_translation:', vaFinal.full_translation ? 'OK ('+vaFinal.full_translation.length+' chars)' : 'MISSING');
  console.log('translation_meditational:', vaFinal.translation_meditational ? 'OK ('+vaFinal.translation_meditational.length+' chars)' : 'MISSING');
  console.log('translation_explanation:', vaFinal.translation_explanation ? 'OK ('+vaFinal.translation_explanation.length+' chars)' : 'MISSING');

  // Check daily phrases
  for (const {k,a} of dailyRoots) {
    const {data:dp} = await db.from('word_daily').select('id').eq('analysis_id',a);
    console.log(k+' daily: '+(dp?dp.length:0)+' phrases');
  }

  console.log('\n=== PIPELINE S3:V36 TERMINÉE ===');
})();
