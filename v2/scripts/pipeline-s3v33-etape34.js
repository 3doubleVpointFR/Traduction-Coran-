const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 326;
const VA_ID = 685;

// AIDs: llh=255, sfw=923, adm=416, nwh=408, al=520, brh=789, emr=705, elm=254

(async()=>{
  console.log('=== PIPELINE S3:V33 ===\n');

  // =============================================
  // 1. ENRICHISSEMENTS — āl + noms propres
  // =============================================

  // --- 1a. āl (al, aid=520) — 4 → 6 sens ---
  console.log('--- 1a. Enrichir āl (آل) ---');
  const {data:alEx} = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id', 520).order('display_order');
  console.log('āl existant: '+alEx.length+' sens');
  const alMax = Math.max(...alEx.map(s=>s.display_order),0);
  const alNew = [
    {concept:'Famille/Lignée', sense:'descendants',
     description:"Les descendants d'une personne, sa postérité. Le Lane's donne āl ar-rajul : « la famille de l'homme, ses gens, ses descendants »."},
    {concept:'Famille/Lignée', sense:'gens de la maison',
     description:"Les membres du foyer, ceux qui gravitent autour d'un chef de famille. Le āl inclut les proches qui partagent le même foyer et le même lignage."}
  ].map((s,i)=>({...s,analysis_id:520,display_order:alMax+1+i,meaning_type:'etymology'}));
  const {error:alErr}=await db.from('word_meanings').insert(alNew);
  console.log('āl insert:', alErr ? 'ERROR: '+alErr.message : alNew.length+' sens OK');

  // --- 1b. Ajouter Nom propre pour adm (416) ---
  console.log('\n--- 1b. Nom propre: Adam ---');
  const {data:admEx}=await db.from('word_meanings').select('display_order').eq('analysis_id',416).order('display_order',{ascending:false}).limit(1);
  const admOrd=admEx.length>0?admEx[0].display_order+1:1;
  const {error:admErr}=await db.from('word_meanings').insert({
    analysis_id:416, concept:'Nom propre', sense:'Adam',
    description:"Nom propre désignant le premier être humain. Le Lane's donne ādam comme nom propre « le père de l'humanité ». L'étymologie le lie à adīm (surface de la terre) — il fut nommé ainsi parce qu'il fut créé à partir de la surface (adīm) de la terre.",
    display_order:admOrd, meaning_type:'etymology'
  });
  console.log('Adam:', admErr ? 'ERROR: '+admErr.message : 'OK');

  // --- 1c. Ajouter sens pour nwh (408) ---
  console.log('\n--- 1c. Enrichir nwh (ن و ح) ---');
  const {data:nwhEx}=await db.from('word_meanings').select('display_order').eq('analysis_id',408).order('display_order',{ascending:false}).limit(1);
  const nwhOrd=nwhEx.length>0?nwhEx[0].display_order+1:1;
  const nwhNew = [
    {concept:'Nom propre', sense:'Noé',
     description:"Nom propre désignant le prophète Nūḥ (Noé). Mentionné dans le Coran comme l'un des premiers envoyés. Le Lane's mentionne le « corbeau noachien » (al-ghurāb an-nūḥī) comme référence à Noé."},
    {concept:'Lamentation', sense:'se lamenter',
     description:"Le Lane's donne nāḥat al-marʾa : « la femme s'est lamentée ». La lamentation (nawḥ) est un cri de douleur, un gémissement funèbre. C'est un acte extérieur qui exprime une douleur intérieure."},
    {concept:'Lamentation', sense:'pleureuse',
     description:"La nāʾiḥa est la femme qui se lamente sur un mort. Le nawḥ est le chant funèbre des pleureuses."},
  ].map((s,i)=>({...s,analysis_id:408,display_order:nwhOrd+i,meaning_type:'etymology'}));
  const {error:nwhErr}=await db.from('word_meanings').insert(nwhNew);
  console.log('nwh:', nwhErr ? 'ERROR: '+nwhErr.message : nwhNew.length+' sens OK');

  // --- 1d. Nom propre pour brh (789) ---
  console.log('\n--- 1d. Nom propre: Abraham ---');
  const {data:brhEx}=await db.from('word_meanings').select('display_order').eq('analysis_id',789).order('display_order',{ascending:false}).limit(1);
  const brhOrd=brhEx.length>0?brhEx[0].display_order+1:1;
  const brhNew = [
    {concept:'Nom propre', sense:'Abraham',
     description:"Nom propre désignant le prophète Ibrāhīm (Abraham). Nom d'origine non arabe. Mentionné dans le Coran comme le patriarche du monothéisme."},
    {concept:'Nom propre', sense:'Ibrāhīm',
     description:"Variante phonétique arabe du nom Abraham. Nom étranger arabisé."},
  ].map((s,i)=>({...s,analysis_id:789,display_order:brhOrd+i,meaning_type:'etymology'}));
  const {error:brhErr}=await db.from('word_meanings').insert(brhNew);
  console.log('brh:', brhErr ? 'ERROR: '+brhErr.message : brhNew.length+' sens OK');

  // --- 1e. Nom propre pour emr (705) ---
  console.log('\n--- 1e. Nom propre: Imran ---');
  const {data:emrEx}=await db.from('word_meanings').select('display_order').eq('analysis_id',705).order('display_order',{ascending:false}).limit(1);
  const emrOrd=emrEx.length>0?emrEx[0].display_order+1:1;
  const {error:emrErr}=await db.from('word_meanings').insert({
    analysis_id:705, concept:'Nom propre', sense:'Imran',
    description:"Nom propre désignant ʿImrān, père de Maryam (Marie). Le nom vient de la racine ʿ-m-r (vie, longévité) — celui qui a une longue vie. C'est aussi le nom qui donne son titre à la sourate 3 (Āl ʿImrān = la famille d'Imran).",
    display_order:emrOrd, meaning_type:'etymology'
  });
  console.log('Imran:', emrErr ? 'ERROR: '+emrErr.message : 'OK');

  // Verify enrichments
  console.log('\n--- Richesse après enrichissement ---');
  const checkAids = [{k:'al',a:520},{k:'adm',a:416},{k:'nwh',a:408},{k:'brh',a:789},{k:'emr',a:705}];
  for(const {k,a} of checkAids){
    const {data:s}=await db.from('word_meanings').select('id').eq('analysis_id',a);
    console.log(k+' (aid='+a+'): '+s.length+' sens');
  }

  // =============================================
  // 2. CONCEPTS BDD
  // =============================================
  console.log('\n--- 2. Concepts BDD ---');
  const allAids=[255,923,416,408,520,789,705,254];
  const kn={255:'llh',923:'sfw',416:'adm',408:'nwh',520:'al',789:'brh',705:'emr',254:'elm'};
  for(const aid of allAids){
    const {data:ss}=await db.from('word_meanings').select('concept').eq('analysis_id',aid);
    const concepts=[...new Set(ss.map(s=>s.concept))];
    console.log(kn[aid]+': '+concepts.join(', '));
  }

  // =============================================
  // 3. FIX SEGMENTS
  // =============================================
  console.log('\n--- 3. Fix segments ---');
  const {data:va}=await db.from('verse_analyses').select('segments').eq('id',VA_ID).single();
  const segs=va.segments;

  // Fix pos=13 ʿalā → particle
  const s13=segs.find(s=>s.position===13);
  if(s13){
    s13.type='particle'; s13.is_particle=true; s13.fr='au-dessus de';
    delete s13.key; delete s13.word_key; delete s13.root;
    console.log('pos=13 ʿalā: important → particle');
  }

  // Ensure all important have is_particle=false and word_key
  segs.forEach(s=>{
    if(s.type==='important'){s.is_particle=false; if(s.key&&!s.word_key)s.word_key=s.key;}
    if(s.type==='particle'){s.is_particle=true;}
  });

  // Update fr + sense_retenu
  const segUpdates={
    2:  {fr:'Dieu', sense_retenu:'Dieu'},
    3:  {fr:'a choisi', sense_retenu:'choisir'},
    4:  {fr:'Adam', sense_retenu:'Adam'},
    6:  {fr:'Noé', sense_retenu:'Noé'},
    8:  {fr:'la famille de', sense_retenu:'famille'},
    9:  {fr:'Abraham', sense_retenu:'Abraham'},
    11: {fr:'la famille de', sense_retenu:'famille'},
    12: {fr:'Imran', sense_retenu:'Imran'},
    14: {fr:'les mondes', sense_retenu:'les mondes'}
  };
  let segCount=0;
  segs.forEach(s=>{const u=segUpdates[s.position];if(u){s.fr=u.fr;s.sense_retenu=u.sense_retenu;segCount++;}});
  console.log(segCount+' segments mis à jour');

  const {error:segErr}=await db.from('verse_analyses').update({segments:segs}).eq('id',VA_ID);
  console.log('Segments save:', segErr?'ERROR: '+segErr.message:'OK');
  console.log('Important:',segs.filter(s=>s.type==='important').length,', Particles:',segs.filter(s=>s.type==='particle').length);

  // =============================================
  // 4. VWA
  // =============================================
  console.log('\n--- 4. Insert VWA ---');
  const {error:delErr}=await db.from('verse_word_analyses').delete().eq('verse_id',VERSE_ID);
  console.log('Delete VWA:', delErr?'ERROR: '+delErr.message:'OK');

  const vwaEntries=[
    // pos=2: allāha (Dieu)
    {verse_id:VERSE_ID, word_key:'llh', root:'ا ل ه', position:2, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité', concepts:{
       'Divinité':{status:'retenu',senses:['divinité','dieu','Dieu','théologie'],
         proof_ctx:"Le nom propre Allāh en position de ism de inna (sujet emphatique) est l'agent de l'élection. La construction inna Allāha iṣṭafā affirme avec emphase que c'est Dieu qui a fait l'acte de choisir."},
       'Adoration/Culte':{status:'probable',senses:['adorer','servir'],
         proof_ctx:"Le sens verbal n'est pas activé par le nom propre en position de sujet."},
       'Confusion/Perplexité':{status:'nul',senses:['être confus'],proof_ctx:"Hors sujet."},
       'Asservissement':{status:'nul',senses:['réduire en esclavage'],proof_ctx:"Hors sujet."}
     }}},

    // pos=3: iṣṭafā (choisir — forme VIII accompli)
    {verse_id:VERSE_ID, word_key:'sfw', root:'ص ف و', position:3, sense_chosen:'choisir',
     analysis_axes:{concept_chosen:'Élection/Choix', concepts:{
       'Élection/Choix':{status:'retenu',senses:['choisir','élire','élu (safiy)'],
         proof_ctx:"La forme VIII iṣṭafā (accompli) est un acte achevé de choix — Dieu a choisi activement. La forme VIII ajoute l'idée d'un choix personnel et délibéré : extraire le meilleur, le plus pur. Le Lane's donne iṣṭafā : « il a choisi, il a sélectionné pour lui-même ». L'objet du choix est quadruple : Adam, Noé, la famille d'Abraham et la famille d'Imran."},
       'Pureté/Clarté':{status:'probable',senses:['être pur','être clair','être limpide'],
         proof_ctx:"La pureté est le sens premier de la racine ṣ-f-w, mais la forme VIII déplace le sens de l'état de pureté vers l'acte de choisir ce qui est pur — le choix est un acte, pas un état."}
     }}},

    // pos=4: ādama (Adam — nom propre)
    {verse_id:VERSE_ID, word_key:'adm', root:'أ د م', position:4, sense_chosen:'Adam',
     analysis_axes:{concept_chosen:'Nom propre', concepts:{
       'Nom propre':{status:'retenu',senses:['Adam'],
         proof_ctx:"Le nom propre Ādam à l'accusatif est le premier objet de l'élection divine. C'est le premier être humain, nommé dans le Coran comme l'un des quatre élus mentionnés dans ce verset."},
       'Surface/Peau':{status:'probable',senses:['peau','surface','brun'],
         proof_ctx:"Le Lane's lie le nom Ādam à adīm (surface de la terre), mais dans ce verset le mot fonctionne comme nom propre, pas comme référence à la surface terrestre."},
       'Assaisonnement':{status:'nul',senses:['assaisonner'],proof_ctx:"Hors sujet."},
       'Sens isolé/Exemple':{status:'nul',senses:['exemple'],proof_ctx:"Hors sujet."},
       'Sens isolé/Réconcilier':{status:'nul',senses:['réconcilier'],proof_ctx:"Hors sujet."}
     }}},

    // pos=6: nūḥan (Noé — nom propre)
    {verse_id:VERSE_ID, word_key:'nwh', root:'ن و ح', position:6, sense_chosen:'Noé',
     analysis_axes:{concept_chosen:'Nom propre', concepts:{
       'Nom propre':{status:'retenu',senses:['Noé'],
         proof_ctx:"Le nom propre Nūḥ à l'accusatif est le deuxième objet de l'élection divine. Noé est le second élu, après Adam, formant une lignée d'élection à travers l'histoire."},
       'Renommée':{status:'peu_probable',senses:['rendre célèbre','rendre notoire'],
         proof_ctx:"Le sens de renommée n'est pas activé par le nom propre dans cette position d'objet direct — le mot fonctionne comme identifiant de personne."},
       'Lamentation':{status:'nul',senses:['se lamenter','pleureuse'],
         proof_ctx:"Le sens de lamentation n'est pas activé par le nom propre."}
     }}},

    // pos=8: āla (famille — 1er, en idafa avec Ibrāhīm)
    {verse_id:VERSE_ID, word_key:'al', root:'آ ل', position:8, sense_chosen:'famille',
     analysis_axes:{concept_chosen:'Famille/Lignée', concepts:{
       'Famille/Lignée':{status:'retenu',senses:['famille','clan','lignée','maison','descendants','gens de la maison'],
         proof_ctx:"Le nom āl en construction idafa (rattachement possessif) avec Ibrāhīm désigne la famille, la lignée d'Abraham. Le Lane's donne āl ar-rajul : « la famille de l'homme, ses gens ». L'élection divine s'étend d'Abraham à toute sa descendance."}
     }}},

    // pos=9: ibrāhīma (Abraham — nom propre)
    {verse_id:VERSE_ID, word_key:'brh', root:'ب ر ه', position:9, sense_chosen:'Abraham',
     analysis_axes:{concept_chosen:'Nom propre', concepts:{
       'Nom propre':{status:'retenu',senses:['Abraham','Ibrāhīm'],
         proof_ctx:"Le nom propre Ibrāhīm au génitif est le complément de l'idafa āla Ibrāhīm (la famille d'Abraham). C'est le patriarche dont la lignée a été choisie par Dieu."},
       'Preuve/Piété':{status:'peu_probable',senses:['prouver','être pieux','bonté'],
         proof_ctx:"Le sens de piété est pertinent pour la personne d'Abraham, mais le mot dans ce verset fonctionne comme nom propre, pas comme description de qualité."}
     }}},

    // pos=11: āla (famille — 2e, en idafa avec ʿImrān)
    {verse_id:VERSE_ID, word_key:'al', root:'آ ل', position:11, sense_chosen:'famille',
     analysis_axes:{concept_chosen:'Famille/Lignée', concepts:{
       'Famille/Lignée':{status:'retenu',senses:['famille','clan','lignée','maison','descendants'],
         proof_ctx:"Deuxième occurrence de āl, cette fois en idafa avec ʿImrān. La famille d'Imran est le quatrième objet de l'élection. C'est la famille qui donne son nom à la sourate 3."}
     }}},

    // pos=12: ʿimrāna (Imran — nom propre)
    {verse_id:VERSE_ID, word_key:'emr', root:'ع م ر', position:12, sense_chosen:'Imran',
     analysis_axes:{concept_chosen:'Nom propre', concepts:{
       'Nom propre':{status:'retenu',senses:['Imran'],
         proof_ctx:"Le nom propre ʿImrān au génitif est le complément de l'idafa āla ʿImrān (la famille d'Imran). ʿImrān est le père de Maryam (Marie). La sourate 3 porte le nom de sa famille."},
       'Vie/Durée':{status:'probable',senses:['vie','âge','longévité'],
         proof_ctx:"Le nom ʿImrān dérive de la racine ʿ-m-r (longue vie), mais fonctionne ici comme nom propre identifiant une personne, pas comme description d'une durée de vie."},
       'Habitation/Construction':{status:'nul',senses:['peupler','construire'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=14: al-ʿālamīna (les mondes)
    {verse_id:VERSE_ID, word_key:'elm', root:'ع ل م', position:14, sense_chosen:'les mondes',
     analysis_axes:{concept_chosen:'Monde/Création', concepts:{
       'Monde/Création':{status:'retenu',senses:['monde','les mondes','ensemble des créatures','univers'],
         proof_ctx:"Le pluriel al-ʿālamīn au défini et au génitif (après la préposition ʿalā) désigne l'ensemble des mondes — toute la création. L'élection divine place ces quatre lignées au-dessus de la totalité de la création, pas seulement de l'humanité."},
       'Savoir/Connaissance':{status:'nul',senses:['savoir','connaître','science'],
         proof_ctx:"Le nom ʿālam (monde) est distinct de ʿilm (savoir) malgré la racine commune — le mot au pluriel défini active le sens de « mondes/création »."},
       'Marque/Signe':{status:'nul',senses:['marquer','signe','drapeau'],
         proof_ctx:"Hors sujet."}
     }}}
  ];

  const {error:vwaErr}=await db.from('verse_word_analyses').insert(vwaEntries);
  console.log('VWA insert ('+vwaEntries.length+'):', vwaErr?'ERROR: '+vwaErr.message:'OK');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n--- 5. Translation ---');

  const translation_arab = "Certes, Dieu a choisi Adam et Noé et la famille d'Abraham et la famille d'Imran au-dessus des mondes.";

  const full_translation = "Certes, Allah a élu Adam, Noé, la famille d'Abraham et la famille d'Imran au-dessus de tout le monde.";

  const translation_explanation = `§DEMARCHE§

Ce verset ouvre une nouvelle section après les versets 31-32 qui traitaient de l'amour et de l'obéissance à Dieu et au messager. Le verset 33 introduit le thème central de la sourate : l'élection divine de certaines lignées à travers l'histoire humaine.

**Allāha** (Dieu) est le nom propre de la Divinité à l'accusatif, en position de ism (sujet) de la particule emphatique inna (certes). La construction inna + accusatif affirme avec insistance — c'est une vérité que le texte pose avec emphase. Dieu est l'agent de l'élection qui suit.

**Iṣṭafā** (a choisi) est un verbe accompli (une forme qui marque un acte achevé dans le passé) de la forme VIII (une forme qui implique un choix personnel et délibéré) de la racine ṣ-f-w. La racine ṣ-f-w signifie « être pur, être clair ». La forme VIII iṣṭafā signifie « choisir pour soi-même ce qui est pur, ce qui est le meilleur ». Le Lane's donne iṣṭafā : « il a choisi, il a sélectionné ». L'accompli montre que ce choix est un fait accompli — Dieu a déjà choisi. L'objet de ce choix est quadruple : Adam, Noé, la famille d'Abraham et la famille d'Imran.

**Ādama** (Adam) est un nom propre à l'accusatif (une forme qui marque l'objet direct de l'action) — il est le premier objet de l'élection divine. Le Lane's lie le nom Ādam à adīm (la surface de la terre) — il fut nommé ainsi parce qu'il fut créé à partir de la surface de la terre. Adam est le premier être humain et le premier élu.

**Nūḥan** (Noé) est un nom propre à l'accusatif — il est le deuxième objet de l'élection. Noé est le second élu après Adam. La coordination par wa (et) place les quatre élus sur le même plan.

**Āla** (la famille de) est un nom à l'accusatif en construction idafa (une construction arabe de rattachement possessif où le premier mot est « possédé » par le second). Āl Ibrāhīm signifie « la famille d'Abraham, sa lignée ». Le Lane's donne āl ar-rajul : « la famille de l'homme, ses gens, ses descendants ». L'élection ne porte plus sur un individu seul mais sur une lignée entière — toute la descendance d'Abraham est incluse dans le choix divin.

**Ibrāhīma** (Abraham) est un nom propre au génitif (une forme qui marque le complément du nom en idafa) — il est le complément de āl. C'est le patriarche dont la lignée a été choisie.

**Āla** (la famille de) apparaît une seconde fois, en idafa avec ʿImrān. La structure parallèle (āla Ibrāhīm wa-āla ʿImrān) met les deux familles sur le même plan — les deux lignées partagent le même statut d'élection.

**ʿImrāna** (Imran) est un nom propre au génitif — complément de āl. ʿImrān est le père de Maryam (Marie). Le nom vient de la racine ʿ-m-r (longue vie). C'est la famille qui donne son nom à cette sourate (Āl ʿImrān = la famille d'Imran).

**Al-ʿālamīna** (les mondes) est un nom pluriel au défini (al-) et au génitif, précédé de la préposition ʿalā (au-dessus de). Le pluriel ʿālamīn ne signifie pas « les gens » mais « les mondes » — l'ensemble de la création. Le Lane's donne ʿālam : « le monde, l'univers, l'ensemble des créatures ». La préposition ʿalā (au-dessus de) indique que l'élection place ces lignées en position de prééminence sur toute la création, pas seulement sur l'humanité.

§JUSTIFICATION§

**Dieu** — Le sens retenu est « Divinité ». Le mot « Dieu » est le nom propre en français courant.

**a choisi** — Le sens retenu est « Élection/Choix ». Le mot « a choisi » est préféré à « a élu » car « choisir » est plus courant en français quotidien et rend mieux l'idée d'un acte délibéré. L'alternative « élu » (utilisée par Hamidullah) est acceptable mais porte une connotation politique qui n'est pas dans la racine ṣ-f-w. L'alternative « purifié » est écartée car la forme VIII déplace le sens de la pureté vers le choix.

**Adam** — Le sens retenu est « Nom propre ». Le mot « Adam » est le nom propre du premier être humain. Pas d'alternative pertinente.

**Noé** — Le sens retenu est « Nom propre ». Le mot « Noé » est la forme française du nom Nūḥ. Pas d'alternative pertinente.

**la famille de** — Le sens retenu est « Famille/Lignée ». Le mot « famille » est choisi car āl désigne le groupe familial lié par le sang. L'alternative « clan » est écartée car clan a une connotation tribale qui ne convient pas à un lignage prophétique. L'alternative « descendants » est écartée car descendants exclut les contemporains — or āl inclut tous les proches.

**Abraham** — Le sens retenu est « Nom propre ». Le mot « Abraham » est la forme française de Ibrāhīm.

**Imran** — Le sens retenu est « Nom propre ». Le mot « Imran » est la translittération française de ʿImrān. Le père de Maryam (Marie).

**les mondes** — Le sens retenu est « Monde/Création ». Le mot « les mondes » est choisi car al-ʿālamīn est un pluriel qui désigne l'ensemble de la création. L'alternative « tout le monde » (utilisée par Hamidullah) est écartée car elle réduit le sens à l'humanité, alors que ʿālamīn englobe toute la création — humains, djinns, anges, animaux, tout ce qui existe.

§CRITIQUE§

La nuance principale est dans al-ʿālamīn. Les traductions courantes donnent « tout le monde » ou « l'humanité » — ce choix réduit la portée cosmique du verset. Le Lane's donne ʿālam comme « le monde, l'univers, l'ensemble des créatures ». Le pluriel ʿālamīn signifie « les mondes » — toute la création dans sa totalité. En traduisant par « au-dessus des mondes » au lieu de « au-dessus de tout le monde », on comprend que l'élection divine ne place pas ces lignées au-dessus des seuls humains, mais au-dessus de toute la création. La portée du choix divin est cosmique, pas seulement anthropocentrique.

Pour le reste, les traductions courantes donnent sensiblement le même sens. Le choix entre « a élu » et « a choisi » est une nuance stylistique qui ne change pas le sens global du verset.`;

  const {error:trErr}=await db.from('verse_analyses').update({translation_arab,full_translation,translation_explanation}).eq('id',VA_ID);
  console.log('Translation update:', trErr?'ERROR: '+trErr.message:'OK');

  // =============================================
  // 6. DAILY PHRASES — sfw (0), adm (0), al (0)
  // =============================================
  console.log('\n--- 6. Daily phrases ---');

  // sfw (923) — 0 daily
  const dailySfw=[
    {analysis_id:923, arabic:'اصطفى الأفضل', phon:'iṣṭafā al-afḍal', french:'Il a choisi le meilleur', sense:'choisir'},
    {analysis_id:923, arabic:'الماء صافٍ', phon:'al-māʾ ṣāfin', french:"L'eau est claire", sense:'être clair'},
    {analysis_id:923, arabic:'صفّى المشروب', phon:'ṣaffā al-mashrūb', french:'Il a filtré la boisson', sense:'être pur'}
  ];
  const {error:sfwD}=await db.from('word_daily').insert(dailySfw);
  console.log('Daily sfw:', sfwD?'ERROR: '+sfwD.message:'3 phrases OK');

  // adm (416) — 0 daily
  const dailyAdm=[
    {analysis_id:416, arabic:'بنو آدم', phon:'banū ādam', french:"Les fils d'Adam (les humains)", sense:'Adam'},
    {analysis_id:416, arabic:'أديم الأرض', phon:'adīm al-arḍ', french:'La surface de la terre', sense:'surface'},
    {analysis_id:416, arabic:'ليس له أدام', phon:'laysa lahu idām', french:"Il n'a pas de quoi assaisonner", sense:'assaisonner'}
  ];
  const {error:admD}=await db.from('word_daily').insert(dailyAdm);
  console.log('Daily adm:', admD?'ERROR: '+admD.message:'3 phrases OK');

  // al (520) — 0 daily
  const dailyAl=[
    {analysis_id:520, arabic:'آل البيت', phon:'āl al-bayt', french:'Les gens de la maison', sense:'gens de la maison'},
    {analysis_id:520, arabic:'من آل فلان', phon:'min āl fulān', french:"De la famille d'untel", sense:'famille'},
    {analysis_id:520, arabic:'آل إبراهيم', phon:'āl ibrāhīm', french:"La lignée d'Abraham", sense:'lignée'}
  ];
  const {error:alD}=await db.from('word_daily').insert(dailyAl);
  console.log('Daily al:', alD?'ERROR: '+alD.message:'3 phrases OK');

  // =============================================
  // 7. VÉRIFICATION
  // =============================================
  console.log('\n--- 7. Vérification ---');
  const {data:vwaCheck}=await db.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id',VERSE_ID).order('position');
  console.log('VWA: '+vwaCheck.length+' entrées');
  vwaCheck.forEach(v=>console.log('  pos='+v.position+' '+v.word_key+' → '+v.sense_chosen));

  const {data:vaCheck}=await db.from('verse_analyses').select('translation_arab').eq('id',VA_ID).single();
  console.log('\nTraduction: '+vaCheck.translation_arab);

  const {data:vaSegs}=await db.from('verse_analyses').select('segments').eq('id',VA_ID).single();
  console.log('Segments: '+vaSegs.segments.filter(s=>s.type==='important').length+' important, '+vaSegs.segments.filter(s=>s.type==='particle').length+' particles');

  console.log('\n=== PIPELINE S3:V33 TERMINÉE ===');
})();
