// Pipeline S3:V38 — verse_id=331, VA_ID=688
// هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهُۥ ۖ قَالَ رَبِّ هَبْ لِى مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ ٱلدُّعَآءِ

const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function mkAxes(sense_chosen, concept_chosen, concepts) {
  return { sense_chosen, concept_chosen, concepts };
}

(async () => {
  console.log('=== PIPELINE S3:V38 ===\n');

  // =============================================
  // 1. ENRICHMENT
  // =============================================

  // --- 1a. Enrichir zkr (ز ك ر) aid=1256 — 4 sens → 10 ---
  console.log('--- 1a. Enrichir zkr (ز ك ر) ---');
  const {count:zkrBefore} = await sb.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',1256);
  console.log('zkr existant:', zkrBefore, 'sens');
  const zkrNew = [
    { analysis_id:1256, sense:'rappeler', concept:'Mention/Rappel',
      description:"Faire revenir en mémoire de l'autre ce qu'il a oublié.", meaning_type:'etymology', display_order:5 },
    { analysis_id:1256, sense:'exhorter', concept:'Mention/Rappel',
      description:"Rappeler avec insistance les conséquences des actes pour inciter à l'obéissance.", meaning_type:'etymology', display_order:6 },
    { analysis_id:1256, sense:'engendrer un mâle', concept:'Masculin/Mâle',
      description:"Donner naissance à un enfant de sexe masculin.", meaning_type:'etymology', display_order:7 },
    { analysis_id:1256, sense:'renommée', concept:'Renommée/Gloire',
      description:"Réputation qui se construit par la mention répétée du nom de quelqu'un. La renommée est extérieure et cumulative — elle sort de ceux qui parlent et entoure celui qui est mentionné. C'est un état permanent et passif pour celui qui en bénéficie.", meaning_type:'etymology', display_order:8 },
    { analysis_id:1256, sense:'gloire', concept:'Renommée/Gloire',
      description:"Éclat de la réputation qui élève au-dessus des autres.", meaning_type:'etymology', display_order:9 },
    { analysis_id:1256, sense:'tranchant du sabre', concept:'Acuité/Tranchant',
      description:"Qualité physique de ce qui est aiguisé et coupe net. L'acuité est un état permanent inhérent à l'objet — elle reste dans la lame ou dans l'esprit vif. C'est une propriété qui ne sort pas de celui qui la possède.", meaning_type:'etymology', display_order:10 },
  ];
  const {error:zkrE} = await sb.from('word_meanings').insert(zkrNew);
  if(zkrE) console.log('zkr ERROR:', zkrE.message);
  else console.log('zkr insert: 6 sens OK');
  await sb.from('word_analyses').update({analysis_step:'etymology'}).eq('id',1256);

  // --- 1b. Enrichir tyb (ط ي ب) aid=564 — 5 sens → 11 ---
  console.log('\n--- 1b. Enrichir tyb (ط ي ب) ---');
  const {count:tybBefore} = await sb.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',564);
  console.log('tyb existant:', tybBefore, 'sens');
  const tybNew = [
    { analysis_id:564, sense:'terre fertile', concept:'Bonté/Pureté',
      description:"Sol dont la nature est bonne et productive.", meaning_type:'etymology', display_order:6 },
    { analysis_id:564, sense:'bonne progéniture', concept:'Bonté/Pureté',
      description:"Enfants de bonne nature et constitution.", meaning_type:'etymology', display_order:7 },
    { analysis_id:564, sense:'plaisanter', concept:'Plaisanterie/Détente',
      description:"Acte de provoquer le rire ou le plaisir par des paroles légères. La plaisanterie est extérieure et sociale — elle sort de celui qui plaisante et atteint son interlocuteur. C'est ponctuel et détaché du sérieux.", meaning_type:'etymology', display_order:8 },
    { analysis_id:564, sense:'badiner', concept:'Plaisanterie/Détente',
      description:"Échange de paroles légères et amusantes.", meaning_type:'etymology', display_order:9 },
    { analysis_id:564, sense:'le meilleur de', concept:'Excellence/Choix',
      description:"Ce qui est sélectionné comme la partie la plus fine et la plus choisie d'un ensemble. L'excellence est un état de distinction qui sépare le choisi du reste.", meaning_type:'etymology', display_order:10 },
    { analysis_id:564, sense:'vin', concept:'Sens isolé/Vin',
      description:"Boisson fermentée considérée comme agréable au goût. Sens isolé.", meaning_type:'etymology', display_order:11 },
  ];
  const {error:tybE} = await sb.from('word_meanings').insert(tybNew);
  if(tybE) console.log('tyb ERROR:', tybE.message);
  else console.log('tyb insert: 6 sens OK');
  await sb.from('word_analyses').update({analysis_step:'etymology'}).eq('id',564);

  // =============================================
  // 2. READ CONCEPTS FROM DB
  // =============================================
  console.log('\n--- Richesse après enrichissement ---');
  const aidsMap = {dew:381, rbb:253, qwl:307, whb:1224, ldn:1223, sme:302, '\u1E0Frr':2614, zkr:1256, tyb:564};
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
  const {data:vaD} = await sb.from('verse_analyses').select('segments_step1').eq('id',688).single();
  const segs1 = typeof vaD.segments_step1 === 'string' ? JSON.parse(vaD.segments_step1) : vaD.segments_step1;

  // Fix undefined keys
  const s3 = segs1.find(s => s.position === 3);
  if(s3) { s3.word_key = 'zkr'; console.log('pos=3: key → zkr'); }
  const s11 = segs1.find(s => s.position === 11);
  if(s11) { s11.word_key = '\u1E0Frr'; console.log('pos=11: key → \u1E0Frr'); }

  // Add sense_retenu and fr
  const senseMap = {2:'invoquer',3:'Zacharie',4:'seigneur',5:'dire',6:'seigneur',
    7:'accorder (Dieu qui donne)',10:'auprès de',11:'progéniture',
    12:'être bon',14:'entendre',15:'invoquer'};
  const frMap = {1:'là',2:'invoqua',3:'Zacharie',4:'son Seigneur',5:'il dit',
    6:'mon Seigneur',7:'accorde',8:'-moi',9:'de',10:'chez Toi',
    11:'une descendance',12:'bonne',13:'tu es certes',14:'celui qui entend',
    15:"l'invocation"};
  segs1.forEach(s => {
    if(senseMap[s.position]) s.sense_retenu = senseMap[s.position];
    if(frMap[s.position]) s.fr = frMap[s.position];
  });

  const {error:seg1E} = await sb.from('verse_analyses').update({segments_step1:segs1}).eq('id',688);
  if(seg1E) console.log('segments_step1 ERROR:', seg1E.message);
  else console.log('Segments step1 mis à jour');

  // Display segments
  const segments = [
    {position:1,word_key:null,arabic:'هُنَالِكَ',phon:'hunālika',fr:'là',is_particle:true,sense_retenu:null,pos:1},
    {position:2,word_key:'dew',arabic:'دَعَا',phon:'daʿā',fr:'invoqua',is_particle:false,sense_retenu:'invoquer',pos:2},
    {position:3,word_key:'zkr',arabic:'زَكَرِيَّا',phon:'zakariyyā',fr:'Zacharie',is_particle:false,sense_retenu:'Zacharie',pos:3},
    {position:4,word_key:'rbb',arabic:'رَبَّهُۥ',phon:'rabbahū',fr:'son Seigneur',is_particle:false,sense_retenu:'seigneur',pos:4},
    {position:5,word_key:'qwl',arabic:'قَالَ',phon:'qāla',fr:'il dit',is_particle:false,sense_retenu:'dire',pos:5},
    {position:6,word_key:'rbb',arabic:'رَبِّ',phon:'rabbi',fr:'mon Seigneur',is_particle:false,sense_retenu:'seigneur',pos:6},
    {position:7,word_key:'whb',arabic:'هَبْ',phon:'hab',fr:'accorde',is_particle:false,sense_retenu:'accorder (Dieu qui donne)',pos:7},
    {position:8,word_key:null,arabic:'لِى',phon:'lī',fr:'-moi',is_particle:true,sense_retenu:null,pos:8},
    {position:9,word_key:null,arabic:'مِن',phon:'min',fr:'de',is_particle:true,sense_retenu:null,pos:9},
    {position:10,word_key:'ldn',arabic:'لَّدُنكَ',phon:'ladunka',fr:'chez Toi',is_particle:false,sense_retenu:'auprès de',pos:10},
    {position:11,word_key:'\u1E0Frr',arabic:'ذُرِّيَّةً',phon:'dhurriyyatan',fr:'une descendance',is_particle:false,sense_retenu:'progéniture',pos:11},
    {position:12,word_key:'tyb',arabic:'طَيِّبَةً',phon:'ṭayyibatan',fr:'bonne',is_particle:false,sense_retenu:'être bon',pos:12},
    {position:13,word_key:null,arabic:'إِنَّكَ',phon:'innaka',fr:'tu es certes',is_particle:true,sense_retenu:null,pos:13},
    {position:14,word_key:'sme',arabic:'سَمِيعُ',phon:'samīʿu',fr:'celui qui entend',is_particle:false,sense_retenu:'entendre',pos:14},
    {position:15,word_key:'dew',arabic:'ٱلدُّعَآءِ',phon:'ad-duʿāʾi',fr:"l'invocation",is_particle:false,sense_retenu:'invoquer',pos:15},
  ];
  const imp = segments.filter(s=>!s.is_particle);
  const par = segments.filter(s=>s.is_particle);
  console.log(`Important: ${imp.length} | Particle: ${par.length} | Total: ${segments.length}`);

  // =============================================
  // 4. VWA (11 entries)
  // =============================================
  console.log('\n--- 4. VWA ---');
  const vwaEntries = [
    // pos=2 dew (daʿā = invoqua)
    { verse_id:331, word_key:'dew', root:'د ع و', position:2, sense_chosen:'invoquer',
      analysis_axes: mkAxes('invoquer','Appel/Invocation', {
        'Appel/Invocation': { status:'retenu', senses:allC.dew['Appel/Invocation'],
          proof_ctx:"Zacharie dirige sa voix vers son Seigneur pour exprimer un besoin profond. L'appel est un acte extérieur, directionnel et achevé — le verbe accompli daʿā confirme un acte ponctuel d'invocation." },
        'Prétention/Revendication': { status:'nul', senses:allC.dew['Prétention/Revendication'],
          proof_ctx:"Zacharie ne prétend rien et ne revendique aucune filiation — il appelle son Seigneur." },
        'Sens isolé/Maudire': { status:'nul', senses:allC.dew['Sens isolé/Maudire'],
          proof_ctx:"Le contexte exclut toute malédiction — Zacharie supplie." }
      })
    },
    // pos=3 zkr (zakariyyā = Zacharie)
    { verse_id:331, word_key:'zkr', root:'ز ك ر', position:3, sense_chosen:'Zacharie',
      analysis_axes: mkAxes('Zacharie','Nom propre', {
        'Nom propre': { status:'retenu', senses:allC.zkr['Nom propre'],
          proof_ctx:"Le texte nomme directement le prophète Zacharie comme sujet du verbe daʿā." },
        'Mention/Rappel': { status:'nul', senses:allC.zkr['Mention/Rappel'],
          proof_ctx:"Le mot est utilisé comme nom propre, pas comme verbe de mention." },
        'Masculin/Mâle': { status:'nul', senses:allC.zkr['Masculin/Mâle'],
          proof_ctx:"Aucune référence au genre masculin — c'est un nom propre." },
        'Renommée/Gloire': { status:'nul', senses:allC.zkr['Renommée/Gloire'],
          proof_ctx:"Le texte nomme une personne, pas sa renommée." },
        'Acuité/Tranchant': { status:'nul', senses:allC.zkr['Acuité/Tranchant'],
          proof_ctx:"Aucun lien avec le tranchant." }
      })
    },
    // pos=4 rbb (rabbahu = son Seigneur)
    { verse_id:331, word_key:'rbb', root:'ر ب ب', position:4, sense_chosen:'seigneur',
      analysis_axes: mkAxes('seigneur','Seigneurie/Autorité bienveillante', {
        'Seigneurie/Autorité bienveillante': { status:'retenu', senses:allC.rbb['Seigneurie/Autorité bienveillante'],
          proof_ctx:"Zacharie s'adresse à celui qui l'élève et veille sur lui. Le pronom possessif hū établit un lien personnel entre Zacharie et son Seigneur." },
        'Croissance/Augmentation': { status:'probable', senses:allC.rbb['Croissance/Augmentation'],
          proof_ctx:"La croissance est liée au rôle du seigneur mais le texte active ici la relation d'autorité bienveillante, pas le processus de croissance." },
        'Éducation/Accompagnement': { status:'probable', senses:allC.rbb['Éducation/Accompagnement'],
          proof_ctx:"L'éducation est incluse dans la seigneurie mais rabb ici désigne le Seigneur comme titre, pas comme éducateur." },
        'Commerce/Usure': { status:'nul', senses:allC.rbb['Commerce/Usure'], proof_ctx:"Aucun contexte commercial." },
        'Souffle/Vent': { status:'nul', senses:allC.rbb['Souffle/Vent'], proof_ctx:"Aucun lien avec le souffle." },
        'Sens isolé/Fixer': { status:'nul', senses:allC.rbb['Sens isolé/Fixer'], proof_ctx:"Hors sujet." },
        'Sens isolé/Rassembler': { status:'nul', senses:allC.rbb['Sens isolé/Rassembler'], proof_ctx:"Hors sujet." },
        'Sens isolé/Groupe': { status:'nul', senses:allC.rbb['Sens isolé/Groupe'], proof_ctx:"Hors sujet." },
        'Sens isolé/Confiture': { status:'nul', senses:allC.rbb['Sens isolé/Confiture'], proof_ctx:"Hors sujet." }
      })
    },
    // pos=5 qwl (qāla = il dit)
    { verse_id:331, word_key:'qwl', root:'ق و ل', position:5, sense_chosen:'dire',
      analysis_axes: mkAxes('dire','Parole/Énonciation', {
        'Parole/Énonciation': { status:'retenu', senses:allC.qwl['Parole/Énonciation'],
          proof_ctx:"Le verbe qāla introduit le discours direct de Zacharie — un acte de parole achevé et ponctuel." },
        'Pensée/Avis': { status:'peu_probable', senses:allC.qwl['Pensée/Avis'],
          proof_ctx:"Zacharie exprime une demande, pas une opinion." },
        'Sens isolé/Puissance': { status:'nul', senses:allC.qwl['Sens isolé/Puissance'], proof_ctx:"Aucun lien avec la puissance." },
        'Corps/Anatomie': { status:'nul', senses:allC.qwl['Corps/Anatomie'], proof_ctx:"Aucun lien avec un troupeau." }
      })
    },
    // pos=6 rbb (rabbi = mon Seigneur)
    { verse_id:331, word_key:'rbb', root:'ر ب ب', position:6, sense_chosen:'seigneur',
      analysis_axes: mkAxes('seigneur','Seigneurie/Autorité bienveillante', {
        'Seigneurie/Autorité bienveillante': { status:'retenu', senses:allC.rbb['Seigneurie/Autorité bienveillante'],
          proof_ctx:"Au vocatif, Zacharie interpelle directement son Seigneur pour formuler sa demande. Le pronom possessif ī (mon) renforce le lien personnel." },
        'Croissance/Augmentation': { status:'probable', senses:allC.rbb['Croissance/Augmentation'],
          proof_ctx:"La croissance est liée au rôle du seigneur mais le vocatif active le titre, pas le processus." },
        'Éducation/Accompagnement': { status:'probable', senses:allC.rbb['Éducation/Accompagnement'],
          proof_ctx:"L'éducation est incluse dans la seigneurie mais le vocatif ici est un appel au titre." },
        'Commerce/Usure': { status:'nul', senses:allC.rbb['Commerce/Usure'], proof_ctx:"Aucun contexte commercial." },
        'Souffle/Vent': { status:'nul', senses:allC.rbb['Souffle/Vent'], proof_ctx:"Aucun lien avec le souffle." },
        'Sens isolé/Fixer': { status:'nul', senses:allC.rbb['Sens isolé/Fixer'], proof_ctx:"Hors sujet." },
        'Sens isolé/Rassembler': { status:'nul', senses:allC.rbb['Sens isolé/Rassembler'], proof_ctx:"Hors sujet." },
        'Sens isolé/Groupe': { status:'nul', senses:allC.rbb['Sens isolé/Groupe'], proof_ctx:"Hors sujet." },
        'Sens isolé/Confiture': { status:'nul', senses:allC.rbb['Sens isolé/Confiture'], proof_ctx:"Hors sujet." }
      })
    },
    // pos=7 whb (hab = accorde)
    { verse_id:331, word_key:'whb', root:'و ه ب', position:7, sense_chosen:'accorder (Dieu qui donne)',
      analysis_axes: mkAxes('accorder (Dieu qui donne)','Don gratuit', {
        'Don gratuit': { status:'retenu', senses:allC.whb['Don gratuit'],
          proof_ctx:"L'impératif hab est une demande de don gratuit — Zacharie ne propose rien en échange. Le don sans contrepartie correspond à la relation entre la créature et son Créateur." },
        'Descendance/Fruit': { status:'probable', senses:allC.whb['Descendance/Fruit'],
          proof_ctx:"Le sens de fils est pertinent car Zacharie demande un enfant, mais le verbe hab porte sur l'acte de donner — la descendance est exprimée par dhurriyyah." },
        'Préparation/Disponibilité': { status:'peu_probable', senses:allC.whb['Préparation/Disponibilité'],
          proof_ctx:"La préparation ne correspond pas à une demande directe de don." },
        'Abondance/Pluie': { status:'nul', senses:allC.whb['Abondance/Pluie'], proof_ctx:"Aucun lien avec la pluie." },
        'Rivalité en générosité': { status:'nul', senses:allC.whb['Rivalité en générosité'], proof_ctx:"Pas de contexte de rivalité." },
        'Échange de don': { status:'nul', senses:allC.whb['Échange de don'], proof_ctx:"Zacharie ne propose pas d'échange — c'est un don à sens unique." }
      })
    },
    // pos=10 ldn (ladunka = de chez Toi)
    { verse_id:331, word_key:'ldn', root:'ل د ن', position:10, sense_chosen:'auprès de',
      analysis_axes: mkAxes('auprès de','Proximité/Source', {
        'Proximité/Source': { status:'retenu', senses:allC.ldn['Proximité/Source'],
          proof_ctx:"Ladunka indique la source directe : la descendance viendra de chez Dieu, de Sa proximité. Le pronom ka (toi) rattache cette source à Dieu personnellement." },
        'Souplesse/Flexibilité': { status:'nul', senses:allC.ldn['Souplesse/Flexibilité'],
          proof_ctx:"Aucun lien avec la souplesse dans ce contexte d'invocation." }
      })
    },
    // pos=11 ḏrr (dhurriyyatan = une descendance)
    { verse_id:331, word_key:'\u1E0Frr', root:'ذ ر ر', position:11, sense_chosen:'progéniture',
      analysis_axes: mkAxes('progéniture','Descendance', {
        'Descendance': { status:'retenu', senses:allC['\u1E0Frr']['Descendance'],
          proof_ctx:"Zacharie demande explicitement une descendance — ce qui est issu et dispersé à partir d'un ancêtre. Le mot est à l'accusatif comme complément d'objet de hab." },
        'Particule/Infime': { status:'nul', senses:allC['\u1E0Frr']['Particule/Infime'],
          proof_ctx:"Aucun lien avec les particules ou l'infiniment petit." },
        'Dispersion/Saupoudrage': { status:'nul', senses:allC['\u1E0Frr']['Dispersion/Saupoudrage'],
          proof_ctx:"Le contexte n'est pas celui de la dispersion physique." },
        'Sens isolé/Parfum': { status:'nul', senses:allC['\u1E0Frr']['Sens isolé/Parfum'],
          proof_ctx:"Aucun lien avec le parfum." }
      })
    },
    // pos=12 tyb (ṭayyibatan = bonne)
    { verse_id:331, word_key:'tyb', root:'ط ي ب', position:12, sense_chosen:'être bon',
      analysis_axes: mkAxes('être bon','Bonté/Pureté', {
        'Bonté/Pureté': { status:'retenu', senses:allC.tyb['Bonté/Pureté'],
          proof_ctx:"La descendance demandée est qualifiée de ṭayyibah — bonne et pure dans sa nature. L'adjectif décrit un état inhérent de bonté, pas un jugement externe." },
        'Excellence/Choix': { status:'peu_probable', senses:allC.tyb['Excellence/Choix'],
          proof_ctx:"Le texte décrit une qualité inhérente plutôt qu'une sélection parmi plusieurs descendances." },
        'Plaisanterie/Détente': { status:'nul', senses:allC.tyb['Plaisanterie/Détente'],
          proof_ctx:"Aucun lien avec la plaisanterie." },
        'Sens isolé/Vin': { status:'nul', senses:allC.tyb['Sens isolé/Vin'],
          proof_ctx:"Aucun lien avec le vin." }
      })
    },
    // pos=14 sme (samīʿu = celui qui entend)
    { verse_id:331, word_key:'sme', root:'س م ع', position:14, sense_chosen:'entendre',
      analysis_axes: mkAxes('entendre','Audition/Écoute', {
        'Audition/Écoute': { status:'retenu', senses:allC.sme['Audition/Écoute'],
          proof_ctx:"Le participe actif samīʿ décrit celui qui entend activement et continuellement. En iḍāfa avec ad-duʿāʾ, il désigne Dieu comme celui qui est attentif aux invocations." },
        'Renommée/Bruit': { status:'nul', senses:allC.sme['Renommée/Bruit'],
          proof_ctx:"Le contexte n'est pas celui de la renommée mais de l'écoute divine." },
        'Corps/Anatomie': { status:'nul', senses:allC.sme['Corps/Anatomie'],
          proof_ctx:"Pas de référence à l'oreille physique." }
      })
    },
    // pos=15 dew (ad-duʿāʾi = l'invocation)
    { verse_id:331, word_key:'dew', root:'د ع و', position:15, sense_chosen:'invoquer',
      analysis_axes: mkAxes('invoquer','Appel/Invocation', {
        'Appel/Invocation': { status:'retenu', senses:allC.dew['Appel/Invocation'],
          proof_ctx:"Le nom duʿāʾ est la forme nominale de l'appel — l'invocation est l'acte même d'appeler Dieu. Le nom défini al- en fait une réalité connue et universelle." },
        'Prétention/Revendication': { status:'nul', senses:allC.dew['Prétention/Revendication'],
          proof_ctx:"Pas de prétention — c'est l'invocation sincère de Zacharie." },
        'Sens isolé/Maudire': { status:'nul', senses:allC.dew['Sens isolé/Maudire'],
          proof_ctx:"Le contexte exclut la malédiction." }
      })
    },
  ];
  const {error:vwaE} = await sb.from('verse_word_analyses').insert(vwaEntries);
  if(vwaE) console.log('VWA ERROR:', vwaE.message);
  else console.log('VWA insert:', vwaEntries.length, 'entries OK');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n--- 5. Translation ---');

  const translation = `Là, Zacharie invoqua son Seigneur. Il dit : « Mon Seigneur, accorde-moi de chez Toi une bonne descendance. Tu es certes celui qui entend l'invocation. »`;

  const hamidullah = `C'est alors que Zacharie pria son Seigneur, et dit : « Ô mon Seigneur, donne-moi, venant de Toi, une excellente descendance. Car Tu es Celui qui entend bien les prières. »`;

  const explanation = `§DEMARCHE§
Ce verset fait suite à la scène où Zacharie trouve une provision auprès de Marie dans le sanctuaire (verset 37). Inspiré par cette manifestation, Zacharie invoque son Seigneur et lui demande une bonne descendance.

**daʿā** (il invoqua) est un verbe accompli de la racine d-ʿ-w, 3ème personne du masculin singulier. Le sens premier est appeler, diriger sa voix vers quelqu'un. L'accompli marque l'acte comme ponctuel et achevé — Zacharie a fait un appel précis à un moment précis. On traduit par « invoqua ».

**zakariyyā** (Zacharie) est un nom propre sémitique ancien, sujet du verbe daʿā. C'est le prophète chargé de la tutelle de Marie (verset 37). On traduit par « Zacharie ».

**rabbahū** (son Seigneur) est un nom de la racine r-b-b à l'accusatif avec le pronom possessif hū (son). C'est le complément d'objet de daʿā — Zacharie invoqua son Seigneur. Le possessif établit un lien personnel entre Zacharie et son Seigneur. On traduit par « son Seigneur ».

**qāla** (il dit) est un verbe accompli de la racine q-w-l, 3ème personne du masculin singulier. Il introduit le discours direct de Zacharie. On traduit par « il dit ».

**rabbi** (mon Seigneur) est le même nom rabb de la racine r-b-b mais au vocatif avec le pronom possessif de la 1ère personne ī (mon). C'est le début de l'invocation — Zacharie s'adresse directement à son Seigneur. On traduit par « mon Seigneur ».

**hab** (accorde) est un impératif de la racine w-h-b, 2ème personne du masculin singulier. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), wahaba signifie donner gratuitement, sans attendre de retour. L'impératif est une demande de don libre adressée à Dieu. On traduit par « accorde ».

**ladunka** (de chez Toi) est un ẓarf makān (adverbe de lieu) de la racine l-d-n avec le pronom possessif ka (toi). Précédé de la préposition min (de), il indique la source du don demandé — la descendance viendra directement de chez Dieu. D'après les sources étymologiques, ladun signifie auprès de, chez, marquant une proximité directe. On traduit par « de chez Toi ».

**dhurriyyatan** (une descendance) est un nom de la racine dh-r-r à l'accusatif indéfini. D'après les sources étymologiques, la dhurriyyah est ce qui est issu et dispersé à partir d'un ancêtre, comme les graines dispersées par le vent. La métaphore de la dispersion des semences est à la racine même du mot. On traduit par « une descendance ».

**ṭayyibatan** (bonne) est un adjectif de la racine ṭ-y-b à l'accusatif indéfini féminin, qualifiant dhurriyyatan. D'après les sources étymologiques, ṭayyib signifie bon, agréable, pur — c'est le contraire de khabīth (mauvais). C'est un état inhérent de bonté, pas un jugement externe. On traduit par « bonne ».

**samīʿu** (celui qui entend) est un participe actif intensif (schème faʿīl) de la racine s-m-ʿ, au nominatif. La forme faʿīl indique celui qui fait l'action de manière habituelle et continue — celui qui entend toujours, qui est constamment à l'écoute. C'est le premier terme d'une iḍāfa (état construit) avec ad-duʿāʾ. On traduit par « celui qui entend ».

**ad-duʿāʾi** (l'invocation) est un nom de la racine d-ʿ-w au génitif défini, second terme de l'iḍāfa avec samīʿu. C'est la forme nominale du verbe daʿā : l'invocation est l'acte même d'appeler. Le nom défini (al-) en fait une réalité connue — l'invocation en général, pas une invocation particulière. On traduit par « l'invocation ».

§JUSTIFICATION§
**invoqua** — Le sens retenu est « invoquer » de la racine d-ʿ-w. Le mot « invoquer » est choisi car il est plus précis que « appeler » — il implique un appel solennel adressé à une autorité supérieure. L'alternative « prier » est écartée car elle confond avec ṣalāt (la prière rituelle, d'une autre racine ṣ-l-w). L'alternative « demander » est écartée car trop neutre — invoquer capture la dimension de l'appel dirigé vers Dieu.

**Zacharie** — Nom propre.

**seigneur** — Le sens retenu est « seigneur » de la racine r-b-b. Choix standard pour rabb — celui qui élève et entretient.

**dit** — Sens standard pour qāla.

**accorde** — Le sens retenu est « accorder (Dieu qui donne) » de la racine w-h-b. Le mot « accorde » est choisi car il exprime un don délibéré et gratuit. L'alternative « donne » est acceptable mais trop général — « accorde » porte la nuance d'un don octroyé par une autorité. L'alternative « offre » est écartée car elle suggère une mise à disposition, alors que wahaba implique un don effectif.

**de chez Toi** — Le sens retenu est « auprès de » de la racine l-d-n. L'expression « de chez Toi » est choisie pour exprimer la source directe du don — la descendance vient de la proximité même de Dieu. L'alternative « de Ta part » est acceptable mais moins concrète que ladun qui marque une proximité spatiale.

**descendance** — Le sens retenu est « progéniture » de la racine dh-r-r. Le mot « descendance » est choisi car il englobe les enfants et leur lignée, pas seulement la première génération. L'alternative « enfants » est écartée car trop limitée — dhurriyyah implique une continuité générationnelle. L'alternative « postérité » est écartée car trop littéraire.

**bonne** — Le sens retenu est « être bon » de la racine ṭ-y-b. Le mot « bonne » est choisi pour sa simplicité en français courant. L'alternative « pure » est acceptable mais connotée (pureté rituelle). L'alternative « agréable » est trop subjectif pour qualifier une descendance.

**celui qui entend** — Le sens retenu est « entendre » de la racine s-m-ʿ. L'expression « celui qui entend » rend le participe actif samīʿ — celui qui entend habituellement. L'alternative « exaucer » est écartée car elle ajoute l'idée de réponse que le texte ne dit pas — le texte dit que Dieu entend, pas qu'il répond.

**l'invocation** — Le sens retenu est « invoquer » de la racine d-ʿ-w. Le mot « invocation » est la forme nominale — l'acte d'invoquer. L'alternative « prière » est écartée car elle confond avec ṣalāt (racine ṣ-l-w).

§CRITIQUE§
**prières vs invocation** — Les traductions courantes donnent « prières » pour ad-duʿāʾ. Ce choix vient de l'habitude de traduire tout acte de communication avec Dieu par « prière ». Mais le texte utilise duʿāʾ (racine d-ʿ-w, appeler), pas ṣalāt (racine ṣ-l-w, prier rituellement). Le duʿāʾ est un appel direct — une invocation — tandis que la ṣalāt est un acte rituel codifié. Confondre les deux efface cette distinction fondamentale. Notre traduction donne « invocation » pour préserver le sens de l'appel direct.

**entend bien vs celui qui entend** — Les traductions courantes ajoutent « bien » (« entend bien les prières ») qui n'est pas dans le texte. Le texte dit samīʿ (celui qui entend), sans aucune forme intensive supplémentaire. L'ajout de « bien » est un embellissement sans support textuel. Notre traduction donne « celui qui entend » pour rester fidèle au texte.

**excellente vs bonne** — Les traductions courantes donnent « excellente descendance » pour dhurriyyatan ṭayyibatan. Le mot ṭayyib signifie bon, agréable, pur — pas excellent. « Excellente » est une surtraduction qui élève le registre au-delà de ce que le texte dit. La nuance est subtile mais réelle : « bonne » décrit une qualité inhérente et naturelle, tandis que « excellente » implique un jugement comparatif. Notre traduction donne « bonne » pour rester fidèle au sens de ṭayyib.`;

  const {error:trE} = await sb.from('verse_analyses').update({
    segments: segments,
    translation_arab: translation,
    full_translation: hamidullah,
    translation_explanation: explanation
  }).eq('id', 688);
  if(trE) console.log('Translation ERROR:', trE.message);
  else console.log('Translation save: OK');

  // =============================================
  // 6. DAILY PHRASES — SKIP (all exist)
  // =============================================
  console.log('\n--- 6. Daily phrases ---');
  const dailyAids = [381,1256,253,307,1224,1223,2614,564,302];
  for(const aid of dailyAids) {
    const {count} = await sb.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id',aid);
    console.log(`aid=${aid}: ${count} daily → SKIP`);
  }

  // =============================================
  // 7. VERIFICATION
  // =============================================
  console.log('\n--- 7. Vérification finale ---');

  // Check segments
  const {data:vFinal} = await sb.from('verse_analyses').select('segments,full_translation,translation_arab,translation_explanation').eq('id',688).single();
  const fSegs = typeof vFinal.segments === 'string' ? JSON.parse(vFinal.segments) : vFinal.segments;
  const fImp = fSegs.filter(s => !s.is_particle);
  const fPar = fSegs.filter(s => s.is_particle);
  console.log(`Segments: ${fImp.length} important, ${fPar.length} particle, ${fSegs.length} total`);

  // Check VWA
  const {data:vwaCheck} = await sb.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id',331).order('position');
  console.log(`VWA: ${vwaCheck.length} entries`);
  vwaCheck.forEach(v => console.log(`  pos=${v.position} ${v.word_key} → ${v.sense_chosen}`));

  // Check positions match
  const vwaPos = vwaCheck.map(v => v.position).sort((a,b) => a-b);
  const segPos = fImp.map(s => s.position).sort((a,b) => a-b);
  const posMatch = JSON.stringify(vwaPos) === JSON.stringify(segPos);
  console.log(`Positions match: ${posMatch ? 'OK' : 'MISMATCH !'}`);
  if(!posMatch) {
    console.log('  VWA:', vwaPos.join(','));
    console.log('  Seg:', segPos.join(','));
  }

  // Check translations
  console.log(`full_translation: ${vFinal.full_translation ? 'OK' : 'MISSING'}`);
  console.log(`translation: ${vFinal.translation_arab ? 'OK' : 'MISSING'}`);
  console.log(`explanation: ${vFinal.translation_explanation ? 'OK ('+vFinal.translation_explanation.length+' chars)' : 'MISSING'}`);

  // =============================================
  console.log('\n=== PIPELINE S3:V38 TERMINÉE ===\n');
  console.log('VERSET 3:38 — TERMINÉ');
  vwaCheck.forEach(v => console.log(`  ${v.word_key} → sens "${v.sense_chosen}"`));
  console.log(`Traduction : "${vFinal.translation_arab}"`);
})();
