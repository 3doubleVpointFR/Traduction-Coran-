const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 327;
const VA_ID = 683;

// AIDs: dhru=1074, bed=406, llh=255, sme=302, elm=254

(async()=>{
  console.log('=== PIPELINE S3:V34 ===\n');

  // =============================================
  // 1. ENRICHISSEMENTS — dhru + bed (suspects)
  // =============================================

  // --- 1a. dhru (1074): 3 → 17 sens (5 concepts) ---
  console.log('--- 1a. Enrichir dhru (ذ ر و) ---');
  const {data:dhruEx} = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id',1074).order('display_order');
  console.log('dhru existant:',dhruEx.length,'sens');
  const dhruMax = Math.max(...dhruEx.map(s=>s.display_order),0);

  const dhruNew = [
    // Dispersion/Éparpillement (add 4)
    {concept:'Dispersion/Éparpillement', sense:'vanner',
     description:"Séparer le grain de la balle en lançant le blé en l'air. Le Lane's décrit un outil de vannage (midhran) avec lequel on vanne le blé et on nettoie les tas de grain."},
    {concept:'Dispersion/Éparpillement', sense:'soulever',
     description:"Le vent soulève la poussière et l'entraîne. Le Lane's donne : le vent l'a soulevé, fait voler et emporté."},
    {concept:'Dispersion/Éparpillement', sense:'emporter',
     description:"Être entraîné loin de son point d'origine par une force extérieure, typiquement le vent."},
    {concept:'Dispersion/Éparpillement', sense:'éparpiller',
     description:"Répartir des éléments dans toutes les directions, les disperser sans ordre."},

    // Descendance/Multiplication (add 4)
    {concept:'Descendance/Multiplication', sense:'descendance',
     description:"L'ensemble de la postérité issue d'un ancêtre à travers les générations. Le Lane's donne dhurriyya : progéniture, enfants."},
    {concept:'Descendance/Multiplication', sense:'enfants',
     description:"Les êtres directement issus d'un parent, la première génération de descendants."},
    {concept:'Descendance/Multiplication', sense:'êtres créés',
     description:"Le Lane's donne dharw comme équivalent de dhurriyya dans le sens d'êtres créés — tout ce que Dieu a dispersé sur terre."},
    {concept:'Descendance/Multiplication', sense:'lignée',
     description:"Suite ininterrompue de descendants d'un même ancêtre à travers les générations."},

    // Petitesse/Infime (add 1)
    {concept:'Petitesse/Infime', sense:'particule',
     description:"Fragment infime d'une substance, morceau minuscule. Le Lane's donne dhurāwa : ce qui s'est brisé en petites particules et a séché."},

    // NEW: Sommet/Élévation (3)
    {concept:'Sommet/Élévation', sense:'sommet',
     description:"Le point le plus élevé d'une chose, sa partie culminante. C'est un état spatial permanent — le sommet existe tant que la chose existe. L'élévation désigne une position statique, non directionnelle, qui marque le point de référence le plus haut. Le Lane's donne dhirwa : la partie la plus haute d'une chose, de quoi que ce soit."},
    {concept:'Sommet/Élévation', sense:'cime',
     description:"La pointe la plus haute, le faîte. Le Lane's l'utilise pour la bosse du chameau ou le sommet de la tête."},
    {concept:'Sommet/Élévation', sense:'partie la plus haute',
     description:"Le point supérieur d'un objet, sa crête."},

    // NEW: Protection/Abri (2)
    {concept:'Protection/Abri', sense:'abri',
     description:"Ce qui protège des éléments extérieurs comme le vent et le froid. C'est un état passif — on cherche un abri pour se protéger de quelque chose. La protection est directionnelle : on se protège DE quelque chose. Le Lane's donne tadharra bihi : il s'est protégé au moyen de quelque chose contre le vent et le froid."},
    {concept:'Protection/Abri', sense:'se protéger',
     description:"Se mettre à couvert d'un danger ou d'un élément nuisible. Action réflexive et intentionnelle."}
  ].map((s,i)=>({...s, analysis_id:1074, display_order:dhruMax+1+i, meaning_type:'etymology'}));

  const {error:dhruErr} = await db.from('word_meanings').insert(dhruNew);
  console.log('dhru insert:', dhruErr ? 'ERROR: '+dhruErr.message : dhruNew.length+' sens OK');

  // --- 1b. bed (406): 4 → 8 sens ---
  console.log('\n--- 1b. Enrichir bed (ب ع ض) ---');
  const {data:bedEx} = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id',406).order('display_order');
  console.log('bed existant:',bedEx.length,'sens');
  const bedMax = Math.max(...bedEx.map(s=>s.display_order),0);

  const bedNew = [
    // Partie/Division (add 2)
    {concept:'Partie/Division', sense:'quelque chose de',
     description:"Le Lane's donne baʿḍ : quelque chose d'une chose, que ce soit peu ou beaucoup. Peut dénoter la plus grande partie (huit sur dix)."},
    {concept:'Partie/Division', sense:'démembrer',
     description:"Le Lane's donne : il a démembré le mouton et l'a divisé en parties. Séparer un corps en ses parties constituantes."},

    // Sens isolé/Moustique (add 2)
    {concept:'Sens isolé/Moustique', sense:'piquer',
     description:"Le Lane's donne : les moustiques l'ont piqué. Action de percer la peau pour se nourrir."},
    {concept:'Sens isolé/Moustique', sense:'importuner',
     description:"Le Lane's donne : ils ont été importunés par les moustiques. Gêner, harceler de façon persistante."}
  ].map((s,i)=>({...s, analysis_id:406, display_order:bedMax+1+i, meaning_type:'etymology'}));

  const {error:bedErr} = await db.from('word_meanings').insert(bedNew);
  console.log('bed insert:', bedErr ? 'ERROR: '+bedErr.message : bedNew.length+' sens OK');

  // Verify enrichments
  console.log('\n--- Richesse après enrichissement ---');
  const checkRoots = [{k:'dhru',a:1074},{k:'bed',a:406},{k:'llh',a:255},{k:'sme',a:302},{k:'elm',a:254}];
  for (const {k,a} of checkRoots) {
    const {data:s} = await db.from('word_meanings').select('id').eq('analysis_id',a);
    console.log(k+' (aid='+a+'): '+s.length+' sens');
  }

  // Check/update total_occurrences
  console.log('\n--- Vérification occurrences ---');
  for (const {k,a,occ} of [{k:'dhru',a:1074,occ:32},{k:'bed',a:406,occ:58}]) {
    const {data:wa} = await db.from('word_analyses').select('total_occurrences').eq('id',a).single();
    if (!wa.total_occurrences || wa.total_occurrences === 0) {
      await db.from('word_analyses').update({total_occurrences:occ}).eq('id',a);
      console.log(k+': total_occurrences mis à '+occ);
    } else {
      console.log(k+': total_occurrences = '+wa.total_occurrences+' (OK)');
    }
  }

  // =============================================
  // 2. CONCEPTS BDD (vérification)
  // =============================================
  console.log('\n--- 2. Concepts BDD ---');
  const allAids = [1074,406,255,302,254];
  const kn = {1074:'dhru',406:'bed',255:'llh',302:'sme',254:'elm'};
  for (const aid of allAids) {
    const {data:ss} = await db.from('word_meanings').select('concept').eq('analysis_id',aid);
    const concepts = [...new Set(ss.map(s=>s.concept))];
    console.log(kn[aid]+': '+concepts.join(', '));
  }

  // =============================================
  // 3. FIX SEGMENTS
  // =============================================
  console.log('\n--- 3. Fix segments ---');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id',VA_ID).single();
  let segs = va.segments;

  // Remove "al" particle at position 6 (part of Allāh, not a separate article)
  const before = segs.length;
  segs = segs.filter(s => !(s.position === 6 && s.type === 'particle'));
  console.log('Removed al particle at pos=6 (' + before + ' → ' + segs.length + ')');

  // Renumber positions > 6
  segs.forEach(s => { if (s.position > 6) s.position -= 1; });

  // Change allāhu key from "alh" to "llh" (now at pos 6)
  const allahSeg = segs.find(s => s.position === 6 && s.type === 'important');
  if (allahSeg) {
    allahSeg.key = 'llh';
    allahSeg.word_key = 'llh';
    console.log('allāhu key: alh → llh');
  }

  // Ensure consistency
  segs.forEach(s => {
    if (s.type === 'important') { s.is_particle = false; if (s.key && !s.word_key) s.word_key = s.key; }
    if (s.type === 'particle') { s.is_particle = true; }
  });

  // Update fr + sense_retenu for important segments
  const segUpdates = {
    1: {fr:'descendance', sense_retenu:'descendance'},
    2: {fr:'les uns', sense_retenu:'certains'},
    4: {fr:'les autres', sense_retenu:'une partie'},
    6: {fr:'Dieu', sense_retenu:'Dieu'},
    7: {fr:'celui qui entend tout', sense_retenu:'entendre'},
    8: {fr:'celui qui sait tout', sense_retenu:'savoir'}
  };
  let segCount = 0;
  segs.forEach(s => {
    const u = segUpdates[s.position];
    if (u) { s.fr = u.fr; s.sense_retenu = u.sense_retenu; segCount++; }
  });

  // Update particle fr
  segs.forEach(s => {
    if (s.position === 3 && s.type === 'particle') s.fr = 'de';
    if (s.position === 5 && s.type === 'particle') s.fr = 'et';
  });

  console.log(segCount + ' segments importants mis à jour');
  const {error:segErr} = await db.from('verse_analyses').update({segments:segs}).eq('id',VA_ID);
  console.log('Segments save:', segErr ? 'ERROR: '+segErr.message : 'OK');
  console.log('Important:', segs.filter(s=>s.type==='important').length, ', Particles:', segs.filter(s=>s.type==='particle').length);

  // =============================================
  // 4. VWA
  // =============================================
  console.log('\n--- 4. Insert VWA ---');
  const {error:delErr} = await db.from('verse_word_analyses').delete().eq('verse_id',VERSE_ID);
  console.log('Delete VWA:', delErr ? 'ERROR: '+delErr.message : 'OK');

  const vwaEntries = [
    // pos=1: dhurriyyatan (descendance)
    {verse_id:VERSE_ID, word_key:'dhru', root:'ذ ر و', position:1, sense_chosen:'descendance',
     analysis_axes:{concept_chosen:'Descendance/Multiplication', concepts:{
       'Descendance/Multiplication':{status:'retenu',senses:['progéniture','descendance','enfants','êtres créés','lignée'],
         proof_ctx:"Le mot dhurriyyatan est un nom collectif féminin à l'accusatif, en apposition aux familles choisies du verset 33. Le Lane's donne dhurriyya : « progéniture, enfants ». Le sens de descendance décrit le lien biologique qui relie ces élus à travers les générations — Adam engendre une lignée dont sort Noé, dont sort Abraham, dont sort Imran."},
       'Dispersion/Éparpillement':{status:'nul',senses:['disperser','vanner','soulever','emporter','éparpiller'],
         proof_ctx:"Le verset décrit une lignée familiale, pas une dispersion par le vent."},
       'Sommet/Élévation':{status:'nul',senses:['sommet','cime','partie la plus haute'],
         proof_ctx:"Aucune notion de hauteur physique dans le verset."},
       'Protection/Abri':{status:'nul',senses:['abri','se protéger'],
         proof_ctx:"Aucun élément de protection ici."},
       'Petitesse/Infime':{status:'nul',senses:['atome','particule'],
         proof_ctx:"Le verset parle de filiation, pas de petitesse."}
     }}},

    // pos=2: baʿḍuhā (les uns)
    {verse_id:VERSE_ID, word_key:'bed', root:'ب ع ض', position:2, sense_chosen:'certains',
     analysis_axes:{concept_chosen:'Partie/Division', concepts:{
       'Partie/Division':{status:'retenu',senses:['une partie','certains','diviser en parties','quelque chose de','démembrer'],
         proof_ctx:"Le nom baʿḍ au nominatif avec le pronom -hā (renvoyant à dhurriyya) signifie « une partie d'elle ». Dans l'expression baʿḍuhā min baʿḍin, le sens de partie décrit la relation entre les membres de la lignée — chaque génération est une partie de la précédente, issus les uns des autres."},
       'Sens isolé/Moustique':{status:'nul',senses:['moustique','piquer','importuner'],
         proof_ctx:"Hors sujet — le verset parle de lignées élues."}
     }}},

    // pos=4: baʿḍin (les autres)
    {verse_id:VERSE_ID, word_key:'bed', root:'ب ع ض', position:4, sense_chosen:'une partie',
     analysis_axes:{concept_chosen:'Partie/Division', concepts:{
       'Partie/Division':{status:'retenu',senses:['une partie','certains','diviser en parties','quelque chose de','démembrer'],
         proof_ctx:"Même racine que baʿḍuhā. Au génitif indéfini après la préposition min, baʿḍin complète l'expression : les uns proviennent des autres. Le sens de partie montre la continuité de la lignée."},
       'Sens isolé/Moustique':{status:'nul',senses:['moustique','piquer','importuner'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=6: allāhu (Dieu)
    {verse_id:VERSE_ID, word_key:'llh', root:'ا ل ه', position:6, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité', concepts:{
       'Divinité':{status:'retenu',senses:['divinité','dieu','Dieu','théologie'],
         proof_ctx:"Le nom propre Allāh au nominatif est le sujet de la phrase nominale wallāhu samīʿun ʿalīmun. Après la description de la lignée des élus, le texte affirme que Dieu possède les attributs d'audition et de connaissance — Il sait pourquoi Il a choisi ces lignées."},
       'Adoration/Culte':{status:'nul',senses:['adorer','servir','se consacrer au culte'],
         proof_ctx:"Le mot fonctionne comme nom propre, pas comme verbe d'adoration."},
       'Confusion/Perplexité':{status:'nul',senses:['être confus'],proof_ctx:"Hors sujet."},
       'Asservissement':{status:'nul',senses:['réduire en esclavage'],proof_ctx:"Hors sujet."}
     }}},

    // pos=7: samīʿun (celui qui entend tout)
    {verse_id:VERSE_ID, word_key:'sme', root:'س م ع', position:7, sense_chosen:'entendre',
     analysis_axes:{concept_chosen:'Audition/Écoute', concepts:{
       'Audition/Écoute':{status:'retenu',senses:['entendre','écouter','ouïe','obéir','exaucer'],
         proof_ctx:"Le schème faʿīl (samīʿ) est une forme intensive décrivant une qualité permanente et exhaustive. Dieu entend tout — un attribut intrinsèque, pas un acte ponctuel. La construction nominale confirme : Dieu est celui qui entend, pas celui qui fait entendre ni celui qui a de la renommée."},
       'Renommée/Bruit':{status:'peu_probable',senses:['réputation','bruit','faire entendre'],
         proof_ctx:"La renommée décrit le fait d'être connu par les autres. Samīʿ décrit celui qui perçoit, pas celui qui est perçu — la direction du sens est inversée."},
       'Corps/Anatomie':{status:'nul',senses:['oreille'],
         proof_ctx:"Le verset ne parle pas d'organes physiques."}
     }}},

    // pos=8: ʿalīmun (celui qui sait tout)
    {verse_id:VERSE_ID, word_key:'elm', root:'ع ل م', position:8, sense_chosen:'savoir',
     analysis_axes:{concept_chosen:'Savoir/Connaissance', concepts:{
       'Savoir/Connaissance':{status:'retenu',senses:['savoir','connaître','être informé','certitude','savant','science','enseignement'],
         proof_ctx:"Le schème faʿīl (ʿalīm) est une forme intensive décrivant une connaissance permanente et exhaustive. Dieu sait tout — Il connaît la valeur de chaque membre des lignées choisies, leur passé et leur avenir."},
       'Marque/Signe':{status:'nul',senses:['marquer','signe','drapeau','montagne','repère'],
         proof_ctx:"Le mot ʿālam (monde) et ʿalāma (signe) sont des formes différentes activées par d'autres schèmes — ʿalīm active exclusivement le savoir."},
       'Monde/Création':{status:'nul',senses:['monde','les mondes','ensemble des créatures'],
         proof_ctx:"ʿĀlam (monde) est un nom, ʿalīm (savant) est un adjectif intensif — deux schèmes distincts malgré la racine commune."},
       'Sens isolé/Enseigner':{status:'nul',senses:['enseigner'],
         proof_ctx:"Enseigner est un acte transitif (forme II). ʿAlīm décrit un état de connaissance, pas un acte d'enseignement."},
       'Lieu/Géographie':{status:'nul',senses:['informer','nommer'],proof_ctx:"Hors sujet."},
       'Sens isolé/Homonyme':{status:'nul',senses:['homonyme'],proof_ctx:"Hors sujet."}
     }}}
  ];

  const {error:vwaErr} = await db.from('verse_word_analyses').insert(vwaEntries);
  console.log('VWA insert ('+vwaEntries.length+'):', vwaErr ? 'ERROR: '+vwaErr.message : 'OK');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n--- 5. Translation ---');

  const translation_arab = "Une descendance, les uns issus des autres. Et Dieu est celui qui entend tout, celui qui sait tout.";

  const full_translation = "En tant que descendants les uns des autres, et Allah est Audient et Omniscient.";

  const translation_explanation = `§DEMARCHE§

Ce verset continue le verset 33 qui annonçait l'élection par Dieu d'Adam, Noé et des familles d'Abraham et d'Imran au-dessus des mondes. Le verset 34 précise que ces élus forment une descendance dont les membres sont issus les uns des autres, et rappelle que Dieu — qui entend et sait tout — connaît la valeur de chaque membre de ces lignées.

**Dhurriyyatan** (descendance) est un nom féminin singulier collectif à l'accusatif indéfini. C'est un badal (une apposition, une façon en arabe de reprendre un mot pour le préciser) qui qualifie les élus du verset 33 : Adam, Noé, la famille d'Abraham et la famille d'Imran sont « une descendance ». Le mot dhurriyya dérive de la racine dh-r-w dont le sens premier est « disperser, vanner » — la descendance est métaphoriquement ce qui se « disperse » à partir d'un ancêtre, se multipliant comme les graines emportées par le vent. Le Lane's donne dhurriyya : « progéniture, enfants, êtres créés ». Le singulier collectif désigne l'ensemble de la lignée comme un bloc unifié — tous ces élus ne forment qu'une seule chaîne de descendance.

**Baʿḍuhā** (les uns d'entre eux) est un nom indéfini au nominatif suivi du pronom féminin -hā (qui renvoie à dhurriyya, féminin). Littéralement « une partie d'elle ». Le Lane's donne baʿḍ : « une partie, une portion d'une chose, que ce soit peu ou beaucoup ». Le suffixe pronominal -hā rattache cette « partie » à la descendance globale. Baʿḍuhā est le sujet de la phrase nominale baʿḍuhā min baʿḍin (les uns proviennent des autres).

**Baʿḍin** (des autres) est le même mot baʿḍ à l'indéfini au génitif, complément de la préposition min (de, provenant de). L'expression complète baʿḍuhā min baʿḍin signifie littéralement « une partie d'elle provient d'une autre partie » — c'est une chaîne de filiation ininterrompue. Les descendants sont issus les uns des autres de génération en génération.

**Allāhu** (Dieu) est le nom propre de la divinité au nominatif, sujet d'une nouvelle phrase nominale introduite par wa (et). Après avoir décrit la lignée des élus, le texte introduit deux attributs divins qui justifient l'élection — Dieu n'a pas choisi au hasard.

**Samīʿun** (celui qui entend tout) est un adjectif sur le schème faʿīl (une forme intensive en arabe qui exprime une qualité permanente et abondante). Ce n'est pas un simple participe actif sāmiʿ (entendant) mais une qualité intrinsèque — Dieu entend par nature, en permanence et de façon exhaustive. Le Lane's donne samīʿ : « celui qui entend beaucoup, qui entend tout ». C'est le premier prédicat (une information sur le sujet dans une phrase nominale) de la phrase « Allāhu samīʿun ʿalīmun ».

**ʿAlīmun** (celui qui sait tout) est un adjectif sur le même schème faʿīl. Le Lane's donne ʿalīm : « celui qui sait abondamment ». Comme samīʿ, c'est une qualité permanente et exhaustive. Les deux attributs ensemble — entendre et savoir — signifient que Dieu perçoit tout ce qui se dit (samīʿ) et comprend tout ce qui existe (ʿalīm). Il connaît la valeur réelle de ceux qu'Il a choisis et de leurs descendants.

§JUSTIFICATION§

**descendance** — Le sens retenu est « Descendance/Multiplication ». Le mot « descendance » est choisi car il capture l'idée d'une lignée qui se prolonge à travers les générations. L'alternative « progéniture » est écartée car progéniture désigne les enfants directs, alors que dhurriyya englobe toute la postérité à travers les siècles. L'alternative « enfants » est écartée pour la même raison.

**les uns** — Le sens retenu est « Partie/Division ». Le mot « les uns » est choisi pour former avec « les autres » l'expression naturelle « les uns issus des autres ». L'alternative « certains » est écartée car elle est plus vague et ne forme pas une expression aussi fluide en français.

**les autres** — Le sens retenu est « Partie/Division ». Le mot « les autres » complète l'expression « les uns issus des autres ». L'alternative « d'autres » est acceptable mais « les autres » rend mieux la réciprocité de la filiation.

**Dieu** — Le sens retenu est « Divinité ». Le mot « Dieu » est le nom propre standard en français courant. L'alternative « Allah » est écartée car c'est un mot arabe, pas du français courant.

**celui qui entend tout** — Le sens retenu est « Audition/Écoute ». L'expression « celui qui entend tout » rend le schème intensif faʿīl qui exprime une capacité permanente et exhaustive. L'alternative « auditeur » est écartée car elle évoque un spectateur passif. L'alternative « Audient » (Hamidullah) est écartée car ce mot n'existe pas en français courant.

**celui qui sait tout** — Le sens retenu est « Savoir/Connaissance ». L'expression « celui qui sait tout » rend le même schème intensif faʿīl. L'alternative « savant » est écartée car savant en français désigne un scientifique ou un érudit humain. L'alternative « Omniscient » (Hamidullah) est écartée car c'est un latinisme théologique inaccessible pour un lecteur moyen.

§CRITIQUE§

La nuance principale concerne samīʿ et ʿalīm. Les traductions courantes donnent « Audient et Omniscient » — ce sont des termes techniques qui ne parlent pas au lecteur francophone moyen. « Audient » n'est pas un mot utilisé en français courant ; « Omniscient » est un latinisme emprunté à la théologie chrétienne (du latin omniscientia). Ces choix créent une distance artificielle entre le texte et le lecteur, alors que l'arabe utilise des mots simples et directs : samīʿ (celui qui entend) et ʿalīm (celui qui sait). Notre traduction restitue cette simplicité : « celui qui entend tout, celui qui sait tout ».

Pour le reste du verset, les traductions courantes donnent sensiblement le même sens. La notion de « descendants les uns des autres » est bien rendue dans la plupart des traductions.`;

  const {error:trErr} = await db.from('verse_analyses').update({translation_arab,full_translation,translation_explanation}).eq('id',VA_ID);
  console.log('Translation update:', trErr ? 'ERROR: '+trErr.message : 'OK');

  // =============================================
  // 6. DAILY PHRASES — dhru seulement (bed=3, llh=3, sme=3, elm=3)
  // =============================================
  console.log('\n--- 6. Daily phrases ---');

  const dailyDhru = [
    {analysis_id:1074, arabic:'ذُرِّيَّةً طَيِّبَةً', phon:'dhurriyyatan ṭayyibatan', french:'Une bonne descendance', sense:'descendance'},
    {analysis_id:1074, arabic:'ذَرَّتْهُ الرِّيحُ', phon:'dharrathu r-rīḥu', french:"Le vent l'a dispersé", sense:'disperser'},
    {analysis_id:1074, arabic:'ذِرْوَةُ الجَبَلِ', phon:'dhirwatu l-jabali', french:'Le sommet de la montagne', sense:'sommet'}
  ];
  const {error:dhruD} = await db.from('word_daily').insert(dailyDhru);
  console.log('Daily dhru:', dhruD ? 'ERROR: '+dhruD.message : '3 phrases OK');

  // =============================================
  // 7. VÉRIFICATION
  // =============================================
  console.log('\n--- 7. Vérification ---');
  const {data:vwaCheck} = await db.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id',VERSE_ID).order('position');
  console.log('VWA:',vwaCheck.length,'entrées');
  vwaCheck.forEach(v => console.log('  pos='+v.position+' '+v.word_key+' → '+v.sense_chosen));

  const {data:vaCheck} = await db.from('verse_analyses').select('translation_arab').eq('id',VA_ID).single();
  console.log('\nTraduction:',vaCheck.translation_arab);

  const {data:vaSegs} = await db.from('verse_analyses').select('segments').eq('id',VA_ID).single();
  console.log('Segments:',vaSegs.segments.filter(s=>s.type==='important').length,'important,',vaSegs.segments.filter(s=>s.type==='particle').length,'particles');

  console.log('\n=== PIPELINE S3:V34 TERMINÉE ===');
})();
