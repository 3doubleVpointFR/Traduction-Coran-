// Pipeline S3:V39 — verse_id=332, VA_ID=689
// فَنَادَتْهُ ٱلْمَلَـٰٓئِكَةُ وَهُوَ قَآئِمٌ يُصَلِّى فِى ٱلْمِحْرَابِ أَنَّ ٱللَّهَ يُبَشِّرُكَ بِيَحْيَىٰ مُصَدِّقًۢا بِكَلِمَةٍ مِّنَ ٱللَّهِ وَسَيِّدًا وَحَصُورًا وَنَبِيًّا مِّنَ ٱلصَّـٰلِحِينَ

const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function mkAxes(sc, cc, concepts) { return { sense_chosen:sc, concept_chosen:cc, concepts }; }

(async () => {
  console.log('=== PIPELINE S3:V39 ===\n');

  // =============================================
  // 1. ENRICHMENT
  // =============================================

  // --- 1a. swd (س و د) aid=976 — 4 sens → 10 ---
  console.log('--- 1a. Enrichir swd (س و د) ---');
  const {count:swdB} = await sb.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',976);
  console.log('swd existant:', swdB, 'sens');
  const swdNew = [
    {analysis_id:976, sense:'gloire', concept:'Prééminence/Maîtrise',
      description:"Éclat de la dignité qui élève au-dessus des autres dans un peuple.", meaning_type:'etymology', display_order:5},
    {analysis_id:976, sense:'faire chef', concept:'Prééminence/Maîtrise',
      description:"Rendre quelqu'un prééminant parmi les siens.", meaning_type:'etymology', display_order:6},
    {analysis_id:976, sense:'clémence', concept:'Prééminence/Maîtrise',
      description:"Qualité du chef qui pardonne et fait preuve de douceur.", meaning_type:'etymology', display_order:7},
    {analysis_id:976, sense:'chagrin visible', concept:'Noirceur/Obscurité',
      description:"Visage qui s'assombrit de tristesse. Extension métaphorique de la noirceur physique.", meaning_type:'etymology', display_order:8},
    {analysis_id:976, sense:'chuchoter', concept:'Confidence/Secret',
      description:"Parler en secret avec quelqu'un, à voix basse et de près. La confidence est extérieure mais restreinte — elle sort de celui qui parle mais n'atteint qu'une seule personne. C'est ponctuel et intime.", meaning_type:'etymology', display_order:9},
    {analysis_id:976, sense:'parler secrètement', concept:'Confidence/Secret',
      description:"Échange de paroles cachées, à l'abri des autres.", meaning_type:'etymology', display_order:10},
  ];
  const {error:swdE} = await sb.from('word_meanings').insert(swdNew);
  if(swdE) console.log('swd ERROR:', swdE.message); else console.log('swd insert: 6 sens OK');
  await sb.from('word_analyses').update({analysis_step:'etymology'}).eq('id',976);

  // --- 1b. h s r (ح ص ر) aid=1178 — 4 sens → 11 ---
  console.log('\n--- 1b. Enrichir h s r (ح ص ر) ---');
  const {count:hsrB} = await sb.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',1178);
  console.log('h s r existant:', hsrB, 'sens');
  const hsrNew = [
    {analysis_id:1178, sense:'retenir', concept:'Siège/Confinement',
      description:"Empêcher de sortir ou de se mouvoir librement.", meaning_type:'etymology', display_order:5},
    {analysis_id:1178, sense:'abstinent', concept:'Abstinence/Retenue',
      description:"Celui qui s'abstient volontairement des désirs, par choix de retenue et non par incapacité. L'abstinence est un acte intérieur de restriction dirigé vers soi-même — c'est permanent et volontaire, une discipline active qui retient les pulsions.", meaning_type:'etymology', display_order:6},
    {analysis_id:1178, sense:'chaste', concept:'Abstinence/Retenue',
      description:"Qui s'abstient des relations par renoncement volontaire.", meaning_type:'etymology', display_order:7},
    {analysis_id:1178, sense:'ne pas désirer', concept:'Abstinence/Retenue',
      description:"Absence de désir envers les femmes.", meaning_type:'etymology', display_order:8},
    {analysis_id:1178, sense:'être incapable de s\'exprimer', concept:'Parole/Incapacité',
      description:"Incapacité de trouver les mots pour dire ce qu'on veut. Le blocage est intérieur — il reste chez celui qui le subit. C'est ponctuel et subi, pas choisi.", meaning_type:'etymology', display_order:9},
    {analysis_id:1178, sense:'forteresse', concept:'Lieu/Objet',
      description:"Construction qui retient et protège ceux qui sont à l'intérieur. Le confinement est ici bénéfique et permanent.", meaning_type:'etymology', display_order:10},
    {analysis_id:1178, sense:'natte', concept:'Lieu/Objet',
      description:"Tapis tressé de roseaux ou de feuilles de palmier.", meaning_type:'etymology', display_order:11},
  ];
  const {error:hsrE} = await sb.from('word_meanings').insert(hsrNew);
  if(hsrE) console.log('h s r ERROR:', hsrE.message); else console.log('h s r insert: 7 sens OK');
  await sb.from('word_analyses').update({analysis_step:'etymology'}).eq('id',1178);

  // --- 1c. hyy (ح ي ي) aid=404 — ajouter Nom propre Yaḥyā ---
  console.log('\n--- 1c. Ajouter Nom propre à hyy (404) ---');
  const {error:hyyE} = await sb.from('word_meanings').insert({
    analysis_id:404, sense:'Yaḥyā', concept:'Nom propre',
    description:"Nom propre du fils de Zacharie. Le nom vient de la racine ḥ-y-y (vivre) et signifie « il vivra ». C'est un nom donné par Dieu lui-même.", meaning_type:'etymology', display_order:9
  });
  if(hyyE) console.log('hyy ERROR:', hyyE.message); else console.log('hyy insert: 1 sens OK');

  // =============================================
  // 2. READ CONCEPTS FROM DB
  // =============================================
  console.log('\n--- Richesse après enrichissement ---');
  const aidsMap = {ndw:946, mlk:256, qwm:263, slw:283, hrb:1196, llh:255, bshr:392,
    hyy:404, sdq:384, klm:478, swd:976, 'h s r':1178, nba:418, slh:326};
  const allC = {};
  for(const [key,aid] of Object.entries(aidsMap)) {
    const {data:wm} = await sb.from('word_meanings').select('sense,concept',{count:'exact'}).eq('analysis_id',aid).order('display_order');
    allC[key] = {};
    wm.forEach(m => { if(!allC[key][m.concept]) allC[key][m.concept]=[]; allC[key][m.concept].push(m.sense); });
    console.log(`${key} (aid=${aid}): ${wm.length} sens`);
  }

  console.log('\n--- 2. Concepts BDD ---');
  for(const [key,concepts] of Object.entries(allC)) {
    const clist = Object.entries(concepts).map(([c,ss]) => `${c}(${ss.length})`).join(', ');
    console.log(`${key}: ${clist}`);
  }

  // =============================================
  // 3. FIX SEGMENTS
  // =============================================
  console.log('\n--- 3. Fix segments ---');
  const {data:vaD} = await sb.from('verse_analyses').select('segments_step1').eq('id',689).single();
  const segs1 = typeof vaD.segments_step1 === 'string' ? JSON.parse(vaD.segments_step1) : vaD.segments_step1;

  // Assign word_keys
  const keyMap = {1:'ndw',2:'mlk',4:'qwm',5:'slw',7:'hrb',9:'llh',10:'bshr',
    11:'hyy',12:'sdq',13:'klm',15:'llh',16:'swd',17:'h s r',18:'nba',20:'slh'};
  for(const [p,k] of Object.entries(keyMap)) {
    const seg = segs1.find(s => s.position === parseInt(p));
    if(seg) { seg.word_key = k; console.log(`pos=${p}: key → ${k}`); }
  }

  // Reclassify particles
  const particlePos = [3,6,8,14,19];
  particlePos.forEach(p => {
    const seg = segs1.find(s => s.position === p);
    if(seg && !seg.is_particle) { seg.is_particle = true; console.log(`pos=${p}: important → particle`); }
  });

  // Add sense_retenu and fr
  const senseMap = {1:'appeler',2:'messager',4:'se tenir debout',5:'prier',7:'sanctuaire',
    9:'Dieu',10:'annoncer une bonne nouvelle',11:'Yaḥyā',12:'confirmer',13:'parole',
    15:'Dieu',16:'être chef',17:'abstinent',18:'prophète',20:'vertueux'};
  const frMap = {1:"l'appelèrent",2:'les messagers',3:"alors qu'il",4:'debout',5:'priant',
    6:'dans',7:'le sanctuaire',8:'que',9:'Dieu',10:"t'annonce",11:'de Yaḥyā',
    12:'confirmateur',13:"d'une parole",14:'de',15:'Dieu',16:'chef',17:'abstinent',
    18:'et prophète',19:'parmi',20:'les vertueux'};
  segs1.forEach(s => {
    if(senseMap[s.position]) s.sense_retenu = senseMap[s.position];
    if(frMap[s.position]) s.fr = frMap[s.position];
  });

  const {error:seg1E} = await sb.from('verse_analyses').update({segments_step1:segs1}).eq('id',689);
  if(seg1E) console.log('segments_step1 ERROR:', seg1E.message); else console.log('Segments step1 mis à jour');

  // Display segments
  const segments = [
    {position:1,word_key:'ndw',arabic:'فَنَادَتْهُ',phon:'fanādathu',fr:"l'appelèrent",is_particle:false,sense_retenu:'appeler',pos:1},
    {position:2,word_key:'mlk',arabic:'ٱلْمَلَـٰٓئِكَةُ',phon:'al-malāʾikatu',fr:'les messagers',is_particle:false,sense_retenu:'messager',pos:2},
    {position:3,word_key:null,arabic:'وَهُوَ',phon:'wa-huwa',fr:"alors qu'il",is_particle:true,sense_retenu:null,pos:3},
    {position:4,word_key:'qwm',arabic:'قَآئِمٌ',phon:'qāʾimun',fr:'debout',is_particle:false,sense_retenu:'se tenir debout',pos:4},
    {position:5,word_key:'slw',arabic:'يُصَلِّى',phon:'yuṣallī',fr:'priant',is_particle:false,sense_retenu:'prier',pos:5},
    {position:6,word_key:null,arabic:'فِى',phon:'fī',fr:'dans',is_particle:true,sense_retenu:null,pos:6},
    {position:7,word_key:'hrb',arabic:'ٱلْمِحْرَابِ',phon:'al-miḥrābi',fr:'le sanctuaire',is_particle:false,sense_retenu:'sanctuaire',pos:7},
    {position:8,word_key:null,arabic:'أَنَّ',phon:'anna',fr:'que',is_particle:true,sense_retenu:null,pos:8},
    {position:9,word_key:'llh',arabic:'ٱللَّهَ',phon:'allāha',fr:'Dieu',is_particle:false,sense_retenu:'Dieu',pos:9},
    {position:10,word_key:'bshr',arabic:'يُبَشِّرُكَ',phon:'yubashshiruka',fr:"t'annonce",is_particle:false,sense_retenu:'annoncer une bonne nouvelle',pos:10},
    {position:11,word_key:'hyy',arabic:'بِيَحْيَىٰ',phon:'bi-yaḥyā',fr:'de Yaḥyā',is_particle:false,sense_retenu:'Yaḥyā',pos:11},
    {position:12,word_key:'sdq',arabic:'مُصَدِّقًۢا',phon:'muṣaddiqan',fr:'confirmateur',is_particle:false,sense_retenu:'confirmer',pos:12},
    {position:13,word_key:'klm',arabic:'بِكَلِمَةٍ',phon:'bi-kalimatin',fr:"d'une parole",is_particle:false,sense_retenu:'parole',pos:13},
    {position:14,word_key:null,arabic:'مِّنَ',phon:'mina',fr:'de',is_particle:true,sense_retenu:null,pos:14},
    {position:15,word_key:'llh',arabic:'ٱللَّهِ',phon:'allāhi',fr:'Dieu',is_particle:false,sense_retenu:'Dieu',pos:15},
    {position:16,word_key:'swd',arabic:'وَسَيِّدًا',phon:'sayyidan',fr:'chef',is_particle:false,sense_retenu:'être chef',pos:16},
    {position:17,word_key:'h s r',arabic:'وَحَصُورًا',phon:'ḥaṣūran',fr:'abstinent',is_particle:false,sense_retenu:'abstinent',pos:17},
    {position:18,word_key:'nba',arabic:'وَنَبِيًّا',phon:'nabiyyan',fr:'et prophète',is_particle:false,sense_retenu:'prophète',pos:18},
    {position:19,word_key:null,arabic:'مِّنَ',phon:'mina',fr:'parmi',is_particle:true,sense_retenu:null,pos:19},
    {position:20,word_key:'slh',arabic:'ٱلصَّـٰلِحِينَ',phon:'aṣ-ṣāliḥīna',fr:'les vertueux',is_particle:false,sense_retenu:'vertueux',pos:20},
  ];
  const imp = segments.filter(s=>!s.is_particle);
  const par = segments.filter(s=>s.is_particle);
  console.log(`Important: ${imp.length} | Particle: ${par.length} | Total: ${segments.length}`);

  // =============================================
  // 4. VWA (15 entries)
  // =============================================
  console.log('\n--- 4. VWA ---');
  const vwaEntries = [
    // pos=1 ndw (fanādathu)
    {verse_id:332, word_key:'ndw', root:'ن د و', position:1, sense_chosen:'appeler',
      analysis_axes: mkAxes('appeler','Appel/Invitation',{
        'Appel/Invitation':{status:'retenu',senses:allC.ndw['Appel/Invitation'],
          proof_ctx:"Les messagers dirigent leur voix vers Zacharie pour lui transmettre une annonce. L'appel est extérieur, directionnel et achevé."},
        'Assemblée/Réunion':{status:'nul',senses:allC.ndw['Assemblée/Réunion'],proof_ctx:"Pas d'assemblée — c'est un appel direct."},
        'Sens isolé/Être':{status:'nul',senses:allC.ndw['Sens isolé/Être'],proof_ctx:"Aucun lien avec la générosité."}
      })},
    // pos=2 mlk (al-malāʾikatu)
    {verse_id:332, word_key:'mlk', root:'م ل ك', position:2, sense_chosen:'messager',
      analysis_axes: mkAxes('messager','Ange/Messager',{
        'Ange/Messager':{status:'retenu',senses:allC.mlk['Ange/Messager'],
          proof_ctx:"Les malāʾikah portent le message de Dieu à Zacharie. Le sens de messager — celui qui transmet — correspond exactement à leur rôle dans ce verset."},
        'Possession/Autorité':{status:'nul',senses:allC.mlk['Possession/Autorité'],proof_ctx:"Pas de contexte de possession."},
        'Royauté/Souveraineté':{status:'nul',senses:allC.mlk['Royauté/Souveraineté'],proof_ctx:"Pas de contexte royal."},
        'Sens isolé/Pâte':{status:'nul',senses:allC.mlk['Sens isolé/Pâte'],proof_ctx:"Hors sujet."},
        'Sens isolé/Maîtriser':{status:'nul',senses:allC.mlk['Sens isolé/Maîtriser'],proof_ctx:"Hors sujet."},
        'Eau/Liquide':{status:'nul',senses:allC.mlk['Eau/Liquide'],proof_ctx:"Hors sujet."}
      })},
    // pos=4 qwm (qāʾimun)
    {verse_id:332, word_key:'qwm', root:'ق و م', position:4, sense_chosen:'se tenir debout',
      analysis_axes: mkAxes('se tenir debout','Verticalité/Droiture',{
        'Verticalité/Droiture':{status:'retenu',senses:allC.qwm['Verticalité/Droiture'],
          proof_ctx:"Le participe actif qāʾim décrit Zacharie debout activement. La verticalité est la posture de la prière — il se tient droit dans le sanctuaire."},
        'Peuple/Communauté':{status:'nul',senses:allC.qwm['Peuple/Communauté'],proof_ctx:"Pas de référence à un peuple."},
        'Gestion/Administration':{status:'nul',senses:allC.qwm['Gestion/Administration'],proof_ctx:"Pas de gestion ici."},
        'Valeur/Mesure':{status:'nul',senses:allC.qwm['Valeur/Mesure'],proof_ctx:"Pas de mesure de valeur."},
        'Subsistance':{status:'nul',senses:allC.qwm['Subsistance'],proof_ctx:"Hors sujet."},
        'Lieu/Géographie':{status:'nul',senses:allC.qwm['Lieu/Géographie'],proof_ctx:"Hors sujet."},
        'Sens isolé/Résidence':{status:'nul',senses:allC.qwm['Sens isolé/Résidence'],proof_ctx:"Hors sujet."},
        'Sens isolé/Station':{status:'nul',senses:allC.qwm['Sens isolé/Station'],proof_ctx:"Hors sujet."}
      })},
    // pos=5 slw (yuṣallī)
    {verse_id:332, word_key:'slw', root:'ص ل و', position:5, sense_chosen:'prier',
      analysis_axes: mkAxes('prier','Prière/Invocation',{
        'Prière/Invocation':{status:'retenu',senses:allC.slw['Prière/Invocation'],
          proof_ctx:"Zacharie est en train de prier dans le sanctuaire. L'inaccompli yuṣallī décrit une action en cours — il est activement en prière quand les messagers l'appellent."},
        'Proximité/Attachement':{status:'probable',senses:allC.slw['Proximité/Attachement'],
          proof_ctx:"Le sens étymologique de suivre de près est la base de la prière — maintenir une connexion. Mais le contexte du sanctuaire active le sens de prière."},
        'Lieu/Géographie':{status:'nul',senses:allC.slw['Lieu/Géographie'],proof_ctx:"Hors sujet."},
        'Corps/Anatomie':{status:'nul',senses:allC.slw['Corps/Anatomie'],proof_ctx:"Hors sujet."}
      })},
    // pos=7 hrb (al-miḥrābi)
    {verse_id:332, word_key:'hrb', root:'ح ر ب', position:7, sense_chosen:'sanctuaire',
      analysis_axes: mkAxes('sanctuaire','Lieu/Sanctuaire',{
        'Lieu/Sanctuaire':{status:'retenu',senses:allC.hrb['Lieu/Sanctuaire'],
          proof_ctx:"Le miḥrāb est le lieu de prière de Zacharie, même lieu qu'au verset 37. C'est la partie la plus élevée et noble d'un espace de recueillement."},
        'Guerre/Combat':{status:'nul',senses:allC.hrb['Guerre/Combat'],proof_ctx:"Aucun contexte guerrier."},
        'Dépossession/Perte':{status:'nul',senses:allC.hrb['Dépossession/Perte'],proof_ctx:"Aucune dépossession."}
      })},
    // pos=9 llh (allāha)
    {verse_id:332, word_key:'llh', root:'ا ل ه', position:9, sense_chosen:'Dieu',
      analysis_axes: mkAxes('Dieu','Divinité',{
        'Divinité':{status:'retenu',senses:allC.llh['Divinité'],
          proof_ctx:"Dieu est le sujet de l'annonce — c'est Lui qui donne la bonne nouvelle de Yaḥyā à Zacharie."},
        'Adoration/Culte':{status:'probable',senses:allC.llh['Adoration/Culte'],
          proof_ctx:"L'adoration est le contexte (Zacharie prie) mais le mot allāh désigne ici l'identité de Dieu, pas l'acte d'adoration."},
        'Confusion/Perplexité':{status:'nul',senses:allC.llh['Confusion/Perplexité'],proof_ctx:"Hors sujet."},
        'Asservissement':{status:'nul',senses:allC.llh['Asservissement'],proof_ctx:"Hors sujet."}
      })},
    // pos=10 bshr (yubashshiruka)
    {verse_id:332, word_key:'bshr', root:'ب ش ر', position:10, sense_chosen:'annoncer une bonne nouvelle',
      analysis_axes: mkAxes('annoncer une bonne nouvelle','Annonce/Réjouissance',{
        'Annonce/Réjouissance':{status:'retenu',senses:allC.bshr['Annonce/Réjouissance'],
          proof_ctx:"La forme II bashshara signifie faire rayonner le visage par une bonne nouvelle. Les messagers transmettent une annonce qui réjouit Zacharie."},
        'Surface/Contact':{status:'nul',senses:allC.bshr['Surface/Contact'],proof_ctx:"Aucun contact de peau."},
        'Corps/Anatomie':{status:'nul',senses:allC.bshr['Corps/Anatomie'],proof_ctx:"Pas de référence à l'être humain en général."}
      })},
    // pos=11 hyy (bi-yaḥyā)
    {verse_id:332, word_key:'hyy', root:'ح ي ي', position:11, sense_chosen:'Yaḥyā',
      analysis_axes: mkAxes('Yaḥyā','Nom propre',{
        'Nom propre':{status:'retenu',senses:allC.hyy['Nom propre'],
          proof_ctx:"Le texte nomme directement Yaḥyā — le fils annoncé à Zacharie. Le nom est lié à la racine ḥ-y-y (vivre)."},
        'Vie/Vivant':{status:'nul',senses:allC.hyy['Vie/Vivant'],proof_ctx:"Le mot est utilisé comme nom propre, pas comme verbe de vie."},
        'Salutation/Pudeur':{status:'nul',senses:allC.hyy['Salutation/Pudeur'],proof_ctx:"Aucune salutation."},
        'Sens isolé/Serpent':{status:'nul',senses:allC.hyy['Sens isolé/Serpent'],proof_ctx:"Hors sujet."},
        'Eau/Liquide':{status:'nul',senses:allC.hyy['Eau/Liquide'],proof_ctx:"Hors sujet."}
      })},
    // pos=12 sdq (muṣaddiqan)
    {verse_id:332, word_key:'sdq', root:'ص د ق', position:12, sense_chosen:'confirmer',
      analysis_axes: mkAxes('confirmer','Vérité/Sincérité',{
        'Vérité/Sincérité':{status:'retenu',senses:allC.sdq['Vérité/Sincérité'],
          proof_ctx:"Le participe actif muṣaddiq (forme II) décrit celui qui confirme activement la vérité de quelque chose. Yaḥyā confirme une parole de Dieu."},
        'Amitié':{status:'nul',senses:allC.sdq['Amitié'],proof_ctx:"Pas de contexte d'amitié."},
        'Don/Aumône':{status:'nul',senses:allC.sdq['Don/Aumône'],proof_ctx:"Pas de don ici."}
      })},
    // pos=13 klm (bi-kalimatin)
    {verse_id:332, word_key:'klm', root:'ك ل م', position:13, sense_chosen:'parole',
      analysis_axes: mkAxes('parole','Parole/Discours',{
        'Parole/Discours':{status:'retenu',senses:allC.klm['Parole/Discours'],
          proof_ctx:"La kalimah est une unité de discours — une parole venue de Dieu. Le texte ne précise pas quelle est cette parole."},
        'Blessure':{status:'nul',senses:allC.klm['Blessure'],proof_ctx:"Aucun contexte de blessure."}
      })},
    // pos=15 llh (allāhi)
    {verse_id:332, word_key:'llh', root:'ا ل ه', position:15, sense_chosen:'Dieu',
      analysis_axes: mkAxes('Dieu','Divinité',{
        'Divinité':{status:'retenu',senses:allC.llh['Divinité'],
          proof_ctx:"Dieu est la source de la parole que Yaḥyā confirme — une parole de Dieu."},
        'Adoration/Culte':{status:'probable',senses:allC.llh['Adoration/Culte'],
          proof_ctx:"L'adoration est le contexte général mais allāh désigne ici l'identité de la source."},
        'Confusion/Perplexité':{status:'nul',senses:allC.llh['Confusion/Perplexité'],proof_ctx:"Hors sujet."},
        'Asservissement':{status:'nul',senses:allC.llh['Asservissement'],proof_ctx:"Hors sujet."}
      })},
    // pos=16 swd (sayyidan)
    {verse_id:332, word_key:'swd', root:'س و د', position:16, sense_chosen:'être chef',
      analysis_axes: mkAxes('être chef','Prééminence/Maîtrise',{
        'Prééminence/Maîtrise':{status:'retenu',senses:allC.swd['Prééminence/Maîtrise'],
          proof_ctx:"Sayyid désigne celui qui est prééminant dans son peuple, possédant gloire et dignité. C'est une qualité attribuée à Yaḥyā par Dieu."},
        'Noirceur/Obscurité':{status:'nul',senses:allC.swd['Noirceur/Obscurité'],proof_ctx:"Aucun lien avec la noirceur."},
        'Confidence/Secret':{status:'nul',senses:allC.swd['Confidence/Secret'],proof_ctx:"Aucun contexte de confidence."}
      })},
    // pos=17 h s r (ḥaṣūran)
    {verse_id:332, word_key:'h s r', root:'ح ص ر', position:17, sense_chosen:'abstinent',
      analysis_axes: mkAxes('abstinent','Abstinence/Retenue',{
        'Abstinence/Retenue':{status:'retenu',senses:allC['h s r']['Abstinence/Retenue'],
          proof_ctx:"Le schème faʿūl (ḥaṣūr) décrit celui qui pratique activement la retenue. D'après les sources étymologiques, c'est celui qui s'abstient par choix de renoncement, pas par incapacité."},
        'Siège/Confinement':{status:'probable',senses:allC['h s r']['Siège/Confinement'],
          proof_ctx:"La restriction est la base étymologique — mais le texte décrit une qualité morale de Yaḥyā (restriction volontaire), pas un siège physique."},
        'Parole/Incapacité':{status:'nul',senses:allC['h s r']['Parole/Incapacité'],proof_ctx:"Pas de blocage de parole."},
        'Lieu/Objet':{status:'nul',senses:allC['h s r']['Lieu/Objet'],proof_ctx:"Aucun lien avec un lieu ou objet."}
      })},
    // pos=18 nba (nabiyyan)
    {verse_id:332, word_key:'nba', root:'ن ب أ', position:18, sense_chosen:'prophète',
      analysis_axes: mkAxes('prophète','Prophétie',{
        'Prophétie':{status:'retenu',senses:allC.nba['Prophétie'],
          proof_ctx:"Nabī est celui qui transmet des nouvelles de l'invisible. C'est la quatrième qualité de Yaḥyā — il sera un transmetteur d'information divine."},
        'Information/Nouvelle':{status:'probable',senses:allC.nba['Information/Nouvelle'],
          proof_ctx:"L'information est la base étymologique du mot nabī. Mais le contexte (qualités divines attribuées) active le sens spécifique de prophète."},
        'Sens isolé/Crier':{status:'nul',senses:allC.nba['Sens isolé/Crier'],proof_ctx:"Aucun lien avec le cri."}
      })},
    // pos=20 slh (aṣ-ṣāliḥīna)
    {verse_id:332, word_key:'slh', root:'ص ل ح', position:20, sense_chosen:'vertueux',
      analysis_axes: mkAxes('vertueux','Bonté/Rectitude',{
        'Bonté/Rectitude':{status:'retenu',senses:allC.slh['Bonté/Rectitude'],
          proof_ctx:"Le participe actif ṣāliḥ au pluriel défini désigne ceux qui font activement le bien. Yaḥyā est rattaché à ce groupe de gens de rectitude."},
        'Sens isolé/Paix':{status:'nul',senses:allC.slh['Sens isolé/Paix'],proof_ctx:"Pas de contexte de paix."}
      })},
  ];
  const {error:vwaE} = await sb.from('verse_word_analyses').insert(vwaEntries);
  if(vwaE) console.log('VWA ERROR:', vwaE.message); else console.log('VWA insert:', vwaEntries.length, 'entries OK');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n--- 5. Translation ---');

  const translation = `Alors les messagers l'appelèrent alors qu'il se tenait debout, priant dans le sanctuaire : « Dieu t'annonce la bonne nouvelle de Yaḥyā, confirmateur d'une parole de Dieu, chef, abstinent et prophète parmi les vertueux. »`;

  const hamidullah = `Puis les Anges l'appelèrent pendant que, debout, il priait dans le Sanctuaire : « Voilà qu'Allah t'annonce la naissance de Yahya, confirmateur d'une parole d'Allah, un chef, un chaste, un prophète et du nombre des gens de bien. »`;

  const explanation = `§DEMARCHE§
Ce verset est la réponse à l'invocation de Zacharie (verset 38) qui demandait une bonne descendance. Les messagers lui annoncent que Dieu lui accorde Yaḥyā, décrit par quatre qualités : confirmateur d'une parole de Dieu, chef, abstinent et prophète parmi les vertueux.

**fanādathu** (ils l'appelèrent) est un verbe accompli de la racine n-d-w, 3ème personne du féminin singulier (accord avec le collectif malāʾikah) avec le pronom suffixe hu (le). Le sens premier est appeler à voix haute, interpeller. La particule fa- (alors) établit la succession avec l'invocation du verset précédent. On traduit par « l'appelèrent ».

**al-malāʾikatu** (les messagers) est le pluriel de malak de la racine m-l-k, au nominatif défini comme sujet du verbe nādā. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), malak est lié à l'envoi et la transmission de messages — c'est celui qui porte un message. On traduit par « les messagers ».

**qāʾimun** (debout) est un participe actif de la racine q-w-m au nominatif indéfini, en position de ḥāl (état circonstanciel) décrivant Zacharie. Le participe actif indique que Zacharie se tient activement debout — c'est une action en cours, pas un état passif. La proposition wa-huwa qāʾim = « alors qu'il se tenait debout ». On traduit par « debout ».

**yuṣallī** (priant) est un verbe inaccompli de la forme II de la racine ṣ-l-w, 3ème personne du masculin singulier. La racine ṣ-l-w signifie à l'origine suivre de près, maintenir un lien. La forme II intensive exprime l'acte de prière — maintenir une connexion active. L'inaccompli en position de ḥāl décrit une action simultanée avec qāʾim : Zacharie est debout ET priant. On traduit par « priant ».

**al-miḥrābi** (le sanctuaire) est un nom de lieu (schème mifʿāl) de la racine ḥ-r-b au génitif après la préposition fī. C'est le même lieu qu'aux versets 37 et 38 — la partie la plus noble de l'espace de recueillement. On traduit par « le sanctuaire ».

**allāha** (Dieu) est le nom propre de la divinité à l'accusatif après la particule anna (que). Il est le sujet réel de l'annonce : c'est Dieu qui donne la bonne nouvelle, les messagers ne font que transmettre. On traduit par « Dieu ».

**yubashshiruka** (t'annonce la bonne nouvelle) est un verbe inaccompli de la forme II de la racine b-sh-r, avec le pronom suffixe ka (toi). D'après les sources étymologiques, la racine b-sh-r est liée à la surface, au visage. La forme II intensive signifie faire rayonner le visage de quelqu'un par une bonne nouvelle. L'inaccompli exprime une action en cours ou imminente. On traduit par « t'annonce la bonne nouvelle ».

**yaḥyā** (Yaḥyā) est un nom propre au génitif après la préposition bi. Le nom est lié à la racine ḥ-y-y (vivre) et signifie « il vivra ». C'est le fils annoncé à Zacharie en réponse à son invocation. On traduit par « Yaḥyā ».

**muṣaddiqan** (confirmateur) est un participe actif de la forme II de la racine ṣ-d-q, à l'accusatif en position de ḥāl décrivant Yaḥyā. La forme II signifie confirmer activement et intensivement — certifier la vérité de quelque chose. C'est la première des quatre qualités de Yaḥyā. On traduit par « confirmateur ».

**kalimatin** (une parole) est un nom féminin de la racine k-l-m au génitif indéfini après la préposition bi. Le sens premier est une unité de discours — un mot, une parole. Le texte dit bi-kalimatin min allāh : une parole venue de Dieu. Le texte ne précise pas quelle est cette parole. On traduit par « une parole ».

**allāhi** (Dieu) est le même nom au génitif après min, indiquant la source de la parole. Yaḥyā confirme une parole dont l'origine est Dieu. On traduit par « Dieu ».

**sayyidan** (chef) est un nom de la racine s-w-d à l'accusatif indéfini, coordonné par wa avec les autres qualités. D'après les sources étymologiques, sayyid est celui qui est prééminant parmi les siens, qui possède gloire, dignité et clémence. C'est la deuxième qualité de Yaḥyā. On traduit par « chef ».

**ḥaṣūran** (abstinent) est un adjectif intensif (schème faʿūl) de la racine ḥ-ṣ-r à l'accusatif indéfini. D'après les sources étymologiques, le ḥaṣūr est celui qui s'abstient des femmes par choix de renoncement, pas par impuissance. La racine ḥ-ṣ-r signifie retenir, restreindre — le ḥaṣūr retient activement ses désirs. C'est la troisième qualité de Yaḥyā. On traduit par « abstinent ».

**nabiyyan** (prophète) est un nom de la racine n-b-ʾ à l'accusatif indéfini. D'après les sources étymologiques, nabī est celui qui apporte des nouvelles, qui informe — spécifiquement celui qui transmet une information venue de l'invisible. C'est la quatrième qualité de Yaḥyā. On traduit par « prophète ».

**aṣ-ṣāliḥīna** (les vertueux) est le participe actif pluriel de la racine ṣ-l-ḥ au génitif défini après min. Le participe actif décrit ceux qui font activement le bien et la rectitude de manière continue. La formule min aṣ-ṣāliḥīn rattache Yaḥyā au groupe des gens de bien — il en fait partie. On traduit par « les vertueux ».

§JUSTIFICATION§
**l'appelèrent** — Le sens retenu est « appeler » de la racine n-d-w. Le mot « appeler » est choisi car nādā implique un appel clair et direct. L'alternative « crier » est écartée car trop forte.

**les messagers** — Le sens retenu est « messager » de la racine m-l-k. Le mot « messagers » est choisi car malak signifie celui qui porte un message. L'alternative « anges » est écartée car c'est un mot d'origine grecque qui a acquis des connotations visuelles (ailes, créatures lumineuses) absentes du texte arabe.

**debout** — Le sens retenu est « se tenir debout » de la racine q-w-m. Sens standard pour le participe qāʾim.

**priant** — Le sens retenu est « prier » de la racine ṣ-l-w. Le mot « priant » est choisi car la forme II dans un sanctuaire active le sens de prière. L'alternative « se reliant » (sens étymologique de suivre de près) est trop obscure.

**le sanctuaire** — Le sens retenu est « sanctuaire » de la racine ḥ-r-b. Même choix qu'aux versets 37 et 38.

**Dieu** — Sens standard pour allāh.

**t'annonce la bonne nouvelle** — Le sens retenu est « annoncer une bonne nouvelle » de la racine b-sh-r. Le mot « annonce » est choisi car la forme II bashshara signifie spécifiquement faire rayonner le visage par une nouvelle. L'alternative « réjouir » est écartée car elle perd la dimension de l'annonce.

**Yaḥyā** — Nom propre.

**confirmateur** — Le sens retenu est « confirmer » de la racine ṣ-d-q. Le mot « confirmateur » est choisi car le participe muṣaddiq décrit celui qui confirme activement. L'alternative « véridique » est écartée car c'est le sens de ṣādiq (forme simple), pas de muṣaddiq (forme II intensive).

**une parole** — Le sens retenu est « parole » de la racine k-l-m. Le mot « parole » est choisi car kalimah désigne un énoncé divin. L'alternative « mot » est acceptable mais « parole » est plus chargé de sens pour un énoncé de Dieu.

**chef** — Le sens retenu est « être chef » de la racine s-w-d. Le mot « chef » est choisi car sayyid désigne celui qui est prééminant. L'alternative « maître » est écartée car elle implique une relation de subordination.

**abstinent** — Le sens retenu est « abstinent » de la racine ḥ-ṣ-r. Le mot « abstinent » est choisi car il décrit un acte volontaire de retenue. L'alternative « chaste » est écartée car elle décrit un état moral passif, tandis que ḥaṣūr décrit une discipline active de restriction.

**prophète** — Le sens retenu est « prophète » de la racine n-b-ʾ. Le mot « prophète » est choisi car nabī désigne celui qui transmet des nouvelles de l'invisible. L'alternative « informateur » est écartée car trop neutre pour le contexte.

**les vertueux** — Le sens retenu est « vertueux » de la racine ṣ-l-ḥ. Le mot « vertueux » est choisi car il décrit celui qui fait activement le bien. L'alternative « gens de bien » est acceptable mais « vertueux » est plus précis.

§CRITIQUE§
**messagers vs anges** — Les traductions courantes donnent « anges » pour al-malāʾikah. Le mot « ange » vient du grec angelos qui signifie messager. L'arabe malak porte le même sens — celui qui transmet un message. Mais « ange » a acquis dans l'usage français des connotations visuelles (êtres ailés, créatures lumineuses) que le texte arabe ne porte pas. Le texte décrit des messagers qui transmettent l'annonce de Dieu à Zacharie, ce qui correspond exactement au sens étymologique. Notre traduction donne « messagers » pour rester fidèle au sens sans imposer de représentation.

**la naissance de Yaḥyā vs de Yaḥyā** — Les traductions courantes ajoutent « la naissance de » devant Yaḥyā (« t'annonce la naissance de Yahya »). Le texte dit bi-yaḥyā (de Yaḥyā) sans le mot « naissance » (qui serait mīlād ou wilādah en arabe). Cet ajout réduit l'annonce à un événement biologique, alors que le texte annonce Yaḥyā lui-même — sa personne et ses quatre qualités (confirmateur, chef, abstinent, prophète). Notre traduction donne « de Yaḥyā » pour respecter le texte.

**chaste vs abstinent** — Les traductions courantes donnent « chaste » pour ḥaṣūr. D'après les sources étymologiques, le ḥaṣūr est « celui qui s'abstient des femmes, s'en abstenant par choix de renoncement ». La racine ḥ-ṣ-r signifie retenir, restreindre. « Chaste » décrit un état de pureté morale, tandis que « abstinent » décrit une discipline active de retenue volontaire. La nuance est entre un état passif et un choix actif. Notre traduction donne « abstinent » pour exprimer la dimension volontaire.`;

  const {error:trE} = await sb.from('verse_analyses').update({
    segments, translation_arab: translation, full_translation: hamidullah, translation_explanation: explanation
  }).eq('id', 689);
  if(trE) console.log('Translation ERROR:', trE.message); else console.log('Translation save: OK');

  // =============================================
  // 6. DAILY PHRASES
  // =============================================
  console.log('\n--- 6. Daily phrases ---');
  const dailyInserts = [
    // ndw (946)
    {analysis_id:946, arabic:'نَادَيْتُ صَدِيقِي', phon:'nādaytu ṣadīqī', french:"J'ai appelé mon ami", sense:'appeler'},
    {analysis_id:946, arabic:'نَادِ الأَطْفَالَ', phon:"nādi l-aṭfāla", french:'Appelle les enfants', sense:'appeler'},
    {analysis_id:946, arabic:'نَادَاهُ مِنْ بَعِيدٍ', phon:"nādāhu min baʿīdin", french:"Il l'a appelé de loin", sense:'appeler'},
    // klm (478)
    {analysis_id:478, arabic:'كَلِمَةٌ طَيِّبَةٌ', phon:'kalimatun ṭayyibatun', french:'Une bonne parole', sense:'parole'},
    {analysis_id:478, arabic:'تَكَلَّمَ بِوُضُوحٍ', phon:'takallama bi-wuḍūḥin', french:'Il a parlé clairement', sense:'parler'},
    {analysis_id:478, arabic:'كَلِّمْنِي عَنِ الأَمْرِ', phon:"kallimnī ʿani l-amri", french:'Parle-moi de cette affaire', sense:'parler'},
    // swd (976)
    {analysis_id:976, arabic:'هُوَ سَيِّدُ القَوْمِ', phon:'huwa sayyidu l-qawmi', french:"C'est le chef du peuple", sense:'être chef'},
    {analysis_id:976, arabic:'سَادَ فِي قَوْمِهِ', phon:'sāda fī qawmihi', french:'Il est devenu chef de son peuple', sense:'être chef'},
    {analysis_id:976, arabic:'يَا سَيِّدِي', phon:'yā sayyidī', french:'Ô mon maître', sense:'maître (sayyid)'},
    // h s r (1178)
    {analysis_id:1178, arabic:'حَصَرَهُ العَدُوُّ', phon:"ḥaṣarahu l-ʿaduwwu", french:"L'ennemi l'a encerclé", sense:'assiéger'},
    {analysis_id:1178, arabic:'حُصِرَ فِي المَدِينَةِ', phon:'ḥuṣira fī l-madīnati', french:'Il a été assiégé dans la ville', sense:'confiner'},
    {analysis_id:1178, arabic:'رَجُلٌ حَصُورٌ', phon:'rajulun ḥaṣūrun', french:"Un homme qui s'abstient", sense:'abstinent'},
  ];
  const {error:dE} = await sb.from('word_daily').insert(dailyInserts);
  if(dE) console.log('Daily ERROR:', dE.message); else console.log('Daily insert:', dailyInserts.length, 'phrases OK');

  // =============================================
  // 7. VERIFICATION
  // =============================================
  console.log('\n--- 7. Vérification finale ---');
  const {data:vFinal} = await sb.from('verse_analyses').select('segments,full_translation,translation_arab,translation_explanation').eq('id',689).single();
  const fSegs = typeof vFinal.segments === 'string' ? JSON.parse(vFinal.segments) : vFinal.segments;
  const fImp = fSegs.filter(s => !s.is_particle);
  const fPar = fSegs.filter(s => s.is_particle);
  console.log(`Segments: ${fImp.length} important, ${fPar.length} particle, ${fSegs.length} total`);

  const {data:vwaCheck} = await sb.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id',332).order('position');
  console.log(`VWA: ${vwaCheck.length} entries`);
  vwaCheck.forEach(v => console.log(`  pos=${v.position} ${v.word_key} → ${v.sense_chosen}`));

  const vwaPos = vwaCheck.map(v => v.position).sort((a,b) => a-b);
  const segPos = fImp.map(s => s.position).sort((a,b) => a-b);
  console.log(`Positions match: ${JSON.stringify(vwaPos) === JSON.stringify(segPos) ? 'OK' : 'MISMATCH !'}`);

  console.log(`full_translation: ${vFinal.full_translation ? 'OK' : 'MISSING'}`);
  console.log(`translation: ${vFinal.translation_arab ? 'OK' : 'MISSING'}`);
  console.log(`explanation: ${vFinal.translation_explanation ? 'OK ('+vFinal.translation_explanation.length+' chars)' : 'MISSING'}`);

  console.log('\n=== PIPELINE S3:V39 TERMINÉE ===\n');
  console.log('VERSET 3:39 — TERMINÉ');
  vwaCheck.forEach(v => console.log(`  ${v.word_key} → sens "${v.sense_chosen}"`));
  console.log(`Traduction : "${vFinal.translation_arab}"`);
})();
