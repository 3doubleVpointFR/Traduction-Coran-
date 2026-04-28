const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 328;
const VA_ID = 687;

// AIDs: qwl=307, mra=881, emr=705, rbb=253, nðr=1254, btn=948, hrr=959, qbl=291, sme=302, elm=254

(async()=>{
  console.log('=== PIPELINE S3:V35 ===\n');

  // =============================================
  // 1. ENRICHISSEMENT — nðr (1254): 2 → 9+ sens
  // =============================================
  console.log('--- 1. Enrichir nðr (ن ذ ر) ---');
  const {data:ndrEx} = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id',1254).order('display_order');
  console.log('nðr existant:', ndrEx.length, 'sens');
  const ndrMax = Math.max(...ndrEx.map(s=>s.display_order),0);

  const ndrNew = [
    // Avertissement/Menace (add 4)
    {concept:'Avertissement/Menace', sense:'mettre en garde',
     description:"Prévenir quelqu'un d'un danger pour qu'il se tienne sur ses gardes. Le Lane's donne nadhīr : « celui qui informe un peuple d'un ennemi ou d'autre chose qui s'abat sur eux »."},
    {concept:'Avertissement/Menace', sense:'informer d un danger',
     description:"Transmettre une information sur un péril imminent. L'avertissement est un acte extérieur, directionnel — il part de l'avertisseur et atteint celui qui est averti."},
    {concept:'Avertissement/Menace', sense:'sentinelle',
     description:"Le Lane's donne nadhīr : « un espion qui avertit un peuple d'un ennemi pour qu'ils se tiennent sur leurs gardes ». Celui qui monte la garde et prévient du danger."},
    {concept:'Avertissement/Menace', sense:'effrayer',
     description:"Le Lane's donne : « mettre en peur en annonçant une chose ». L'effroi est l'effet de l'avertissement sur celui qui le reçoit."},

    // Vœu/Consécration (add 3)
    {concept:'Vœu/Consécration', sense:'vouer',
     description:"Prononcer un engagement solennel de faire quelque chose. Le Lane's donne nadhara ʿalā nafsihi : « il a fait un vœu, il a rendu [un acte futur] obligatoire pour lui-même ». Le vœu est un acte intérieur qui devient extérieur par la parole — ponctuel dans sa formulation mais permanent dans son effet."},
    {concept:'Vœu/Consécration', sense:"s'engager",
     description:"Rendre un acte futur obligatoire pour soi-même. L'engagement est une décision intérieure qui lie la personne de façon permanente."},
    {concept:'Vœu/Consécration', sense:'offrande votive',
     description:"Le Lane's donne nadhīra : « ce que donne celui qui fait un vœu ». Le don accompli en accomplissement d'un vœu."},

    // NEW: Consécration/Offrande (2)
    {concept:'Consécration/Offrande', sense:'consacrer un enfant',
     description:"Dédier un enfant au service exclusif d'un but supérieur. Le Lane's donne nadhīra : « un enfant consacré par le père et la mère au service d'un lieu de dévotion ». La consécration est l'accomplissement concret du vœu — elle transforme l'engagement abstrait en réalité matérielle. C'est un acte extérieur, irréversible et permanent."},
    {concept:'Consécration/Offrande', sense:'don votif',
     description:"Objet ou personne offert en accomplissement d'un vœu. Le don votif est le résultat tangible du vœu."}
  ].map((s,i)=>({...s, analysis_id:1254, display_order:ndrMax+1+i, meaning_type:'etymology'}));

  const {error:ndrErr} = await db.from('word_meanings').insert(ndrNew);
  console.log('nðr insert:', ndrErr ? 'ERROR: '+ndrErr.message : ndrNew.length+' sens OK');

  // Verify enrichment
  console.log('\n--- Richesse après enrichissement ---');
  const checkRoots = [
    {k:'qwl',a:307},{k:'mra',a:881},{k:'emr',a:705},{k:'rbb',a:253},
    {k:'nðr',a:1254},{k:'btn',a:948},{k:'hrr',a:959},{k:'qbl',a:291},
    {k:'sme',a:302},{k:'elm',a:254}
  ];
  for (const {k,a} of checkRoots) {
    const {data:s} = await db.from('word_meanings').select('id').eq('analysis_id',a);
    console.log(k+' (aid='+a+'): '+s.length+' sens');
  }

  // Check/update total_occurrences for nðr
  const {data:ndrWA} = await db.from('word_analyses').select('total_occurrences').eq('id',1254).single();
  if (!ndrWA.total_occurrences || ndrWA.total_occurrences === 0) {
    await db.from('word_analyses').update({total_occurrences:130}).eq('id',1254);
    console.log('nðr: total_occurrences mis à 130');
  } else {
    console.log('nðr: total_occurrences =', ndrWA.total_occurrences, '(OK)');
  }

  // =============================================
  // 2. CONCEPTS BDD (vérification)
  // =============================================
  console.log('\n--- 2. Concepts BDD ---');
  const aidMap = {307:'qwl',881:'mra',705:'emr',253:'rbb',1254:'nðr',948:'btn',959:'hrr',291:'qbl',302:'sme',254:'elm'};
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

  // Change pronouns/relatives from important to particle
  const toParticle = [
    {pos:9, key:'lk', fr:'à Toi'},     // ka (pronoun suffix "you")
    {pos:10, key:'ma', fr:'ce qui est'}, // mā (relative pronoun)
    {pos:16, key:'ny', fr:'de moi'},     // minnī (from me)
    {pos:18, key:'ant', fr:'Toi'}        // ʾanta (emphatic pronoun)
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

  // Ensure consistency
  segs.forEach(s => {
    if (s.type === 'important') { s.is_particle = false; if (s.key && !s.word_key) s.word_key = s.key; }
    if (s.type === 'particle') { s.is_particle = true; }
  });

  // Update fr + sense_retenu for important segments
  const segUpdates = {
    2:  {fr:'dit', sense_retenu:'dire'},
    3:  {fr:'la femme de', sense_retenu:'femme (imra\'a)'},
    4:  {fr:'Imran', sense_retenu:'Imran'},
    5:  {fr:'mon Seigneur', sense_retenu:'seigneur'},
    7:  {fr:"j'ai voué", sense_retenu:'vouer'},
    12: {fr:'mon ventre', sense_retenu:'ventre'},
    13: {fr:'libéré', sense_retenu:'libérer'},
    15: {fr:'accepte', sense_retenu:'accepter'},
    19: {fr:'celui qui entend tout', sense_retenu:'entendre'},
    20: {fr:'celui qui sait tout', sense_retenu:'savoir'}
  };
  let segCount = 0;
  segs.forEach(s => {
    const u = segUpdates[s.position];
    if (u) { s.fr = u.fr; s.sense_retenu = u.sense_retenu; segCount++; }
  });

  // Update particle fr
  const particleFr = {1:'quand',6:'certes',8:'à',11:'dans',14:'donc',17:'certes'};
  segs.forEach(s => {
    if (s.type === 'particle' && particleFr[s.position]) s.fr = particleFr[s.position];
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
    // pos=2: qālat (dit)
    {verse_id:VERSE_ID, word_key:'qwl', root:'ق و ل', position:2, sense_chosen:'dire',
     analysis_axes:{concept_chosen:'Parole/Énonciation', concepts:{
       'Parole/Énonciation':{status:'retenu',senses:['dire','parler','parole','discours','affirmer'],
         proof_ctx:"Le verbe accompli qālat (3ème fém.) est un acte de parole achevé — la femme d'Imran a prononcé ces mots. C'est le verbe introducteur du discours direct qui suit."},
       'Pensée/Avis':{status:'nul',senses:['opinion','avis','doctrine'],
         proof_ctx:"La femme d'Imran formule un vœu, pas une opinion."},
       'Sens isolé/Puissance':{status:'nul',senses:['puissance'],proof_ctx:"Hors sujet."},
       'Corps/Anatomie':{status:'nul',senses:['troupeau'],proof_ctx:"Hors sujet."}
     }}},

    // pos=3: imraʾatu (la femme de)
    {verse_id:VERSE_ID, word_key:'mra', root:'م ر أ', position:3, sense_chosen:'femme (imra\'a)',
     analysis_axes:{concept_chosen:'Personne/Individu', concepts:{
       'Personne/Individu':{status:'retenu',senses:['homme (imru\')','femme (imra\'a)'],
         proof_ctx:"Le nom imraʾatu au nominatif en construction idafa avec ʿImrān désigne l'épouse d'Imran. Le féminin imraʾa est la forme féminine de imruʾ (personne, individu)."},
       'Santé/Bienfaisance':{status:'nul',senses:['être sain','être digeste','être bienfaisant'],
         proof_ctx:"Le sens de santé n'est pas activé par le nom de personne en idafa."}
     }}},

    // pos=4: ʿimrān (Imran)
    {verse_id:VERSE_ID, word_key:'emr', root:'ع م ر', position:4, sense_chosen:'Imran',
     analysis_axes:{concept_chosen:'Nom propre', concepts:{
       'Nom propre':{status:'retenu',senses:['Imran'],
         proof_ctx:"Le nom propre ʿImrān au génitif est le complément de l'idafa imraʾatu ʿImrān (la femme d'Imran). C'est le père de Maryam, dont la famille donne son nom à la sourate."},
       'Vie/Durée':{status:'peu_probable',senses:['vie','âge','longévité'],
         proof_ctx:"Le nom ʿImrān dérive de la racine ʿ-m-r (longue vie) mais fonctionne ici comme identifiant de personne."},
       'Habitation/Construction':{status:'nul',senses:['peupler','construire'],proof_ctx:"Hors sujet."}
     }}},

    // pos=5: rabbi (mon Seigneur)
    {verse_id:VERSE_ID, word_key:'rbb', root:'ر ب ب', position:5, sense_chosen:'seigneur',
     analysis_axes:{concept_chosen:'Seigneurie/Autorité bienveillante', concepts:{
       'Seigneurie/Autorité bienveillante':{status:'retenu',senses:['seigneur','maître','propriétaire','celui qui élève','celui qui entretient','celui qui possède','gouverner'],
         proof_ctx:"Le nom rabb au vocatif avec le pronom -ī (mon) est une interpellation directe : la femme d'Imran s'adresse à Dieu en tant que son Seigneur. La racine r-b-b signifie « élever, faire grandir, nourrir ». Le rabb est celui qui prend en charge la croissance — le seigneur bienveillant. Le vocatif appelle cette autorité pour lui adresser un vœu."},
       'Éducation/Accompagnement':{status:'probable',senses:['élever un enfant','éduquer','former','accompagner la croissance'],
         proof_ctx:"L'éducation est un aspect de la seigneurie — le rabb élève et éduque. Mais le vocatif rabbi appelle le maître souverain, pas seulement l'éducateur. La seigneurie englobe l'éducation, pas l'inverse."},
       'Croissance/Augmentation':{status:'nul',senses:['augmenter','croître','faire grandir','nourrir','développer'],
         proof_ctx:"Le vocatif appelle une personne, pas un processus de croissance."},
       'Commerce/Usure':{status:'nul',senses:['usure','augmentation de dette','intérêt'],proof_ctx:"Hors sujet."},
       'Souffle/Vent':{status:'nul',senses:['essoufflement'],proof_ctx:"Hors sujet."},
       'Sens isolé/Fixer':{status:'nul',senses:['fixer'],proof_ctx:"Hors sujet."},
       'Sens isolé/Rassembler':{status:'nul',senses:['rassembler'],proof_ctx:"Hors sujet."},
       'Sens isolé/Groupe':{status:'nul',senses:['groupe'],proof_ctx:"Hors sujet."},
       'Sens isolé/Confiture':{status:'nul',senses:['confiture'],proof_ctx:"Hors sujet."}
     }}},

    // pos=7: nadhartu (j'ai voué)
    {verse_id:VERSE_ID, word_key:'nðr', root:'ن ذ ر', position:7, sense_chosen:'vouer',
     analysis_axes:{concept_chosen:'Vœu/Consécration', concepts:{
       'Vœu/Consécration':{status:'retenu',senses:['vœu','vouer',"s'engager",'offrande votive'],
         proof_ctx:"Le verbe accompli nadhartu (1ère pers.) exprime un vœu déjà formulé — la femme d'Imran a pris sa décision. Le Lane's donne nadhara ʿalā nafsihi : « il a rendu un acte futur obligatoire pour lui-même ». L'objet du vœu est mā fī baṭnī (ce qui est dans mon ventre) — l'enfant à naître est voué avant sa naissance."},
       'Consécration/Offrande':{status:'probable',senses:['consacrer un enfant','don votif'],
         proof_ctx:"La consécration est le résultat concret du vœu. Le verbe nadhartu exprime l'acte de vouer (l'engagement verbal), tandis que la consécration est sa réalisation matérielle. Le verset décrit l'engagement, pas encore sa réalisation."},
       'Avertissement/Menace':{status:'nul',senses:['avertir','mettre en garde','informer d un danger','sentinelle','effrayer'],
         proof_ctx:"La femme d'Imran ne met personne en garde — elle formule un engagement envers Dieu."}
     }}},

    // pos=12: baṭnī (mon ventre)
    {verse_id:VERSE_ID, word_key:'btn', root:'ب ط ن', position:12, sense_chosen:'ventre',
     analysis_axes:{concept_chosen:'Intériorité/Profondeur', concepts:{
       'Intériorité/Profondeur':{status:'retenu',senses:['ventre','intérieur','caché','sens caché (batin)'],
         proof_ctx:"Le nom baṭn au génitif avec le pronom -ī (mon) et précédé de fī (dans) signifie « dans mon ventre ». Le ventre est l'intérieur par excellence — l'enfant à naître est caché, invisible. Le Lane's donne baṭn : « le ventre, l'intérieur ». Ici le ventre désigne concrètement l'utérus."},
       'Lignée/Subdivision':{status:'nul',senses:['clan'],
         proof_ctx:"Le sens de clan tribal n'est pas activé — le verset parle du ventre physique de la femme."},
       'Sens isolé/Doublure':{status:'nul',senses:['doublure'],proof_ctx:"Hors sujet."}
     }}},

    // pos=13: muḥarraran (libéré)
    {verse_id:VERSE_ID, word_key:'hrr', root:'ح ر ر', position:13, sense_chosen:'libérer',
     analysis_axes:{concept_chosen:'Liberté/Affranchissement', concepts:{
       'Liberté/Affranchissement':{status:'retenu',senses:['être libre','libérer','affranchir un esclave'],
         proof_ctx:"Le participe passif muḥarrar (forme II) signifie « celui qui a été rendu libre ». À l'accusatif indéfini, c'est un ḥāl (état) qui décrit la condition dans laquelle l'enfant est voué : libéré de toute attache mondaine. Le test grammatical du participe passif est satisfait — la libération est un acte extérieur qui ATTEINT l'enfant, le rendant libre."},
       'Chaleur/Ardeur':{status:'nul',senses:['chaleur','être chaud'],
         proof_ctx:"Le verset ne parle pas de température."},
       'Vêtement/Couverture':{status:'nul',senses:['soie'],proof_ctx:"Hors sujet."}
     }}},

    // pos=15: taqabbal (accepte)
    {verse_id:VERSE_ID, word_key:'qbl', root:'ق ب ل', position:15, sense_chosen:'accepter',
     analysis_axes:{concept_chosen:'Réception/Accueil', concepts:{
       'Réception/Accueil':{status:'retenu',senses:['recevoir','accepter','agréer'],
         proof_ctx:"Le verbe impératif taqabbal (forme V) exprime une demande d'acceptation bienveillante. La forme V ajoute une nuance de volonté — ce n'est pas un simple « reçois » mais un « accepte avec bienveillance ». Le Lane's donne taqabbala : « il a accepté, agréé, reçu avec bienveillance ». La particule fa (donc) lie cette demande au vœu précédent : puisque j'ai voué, accepte donc."},
       'Orientation/Direction':{status:'peu_probable',senses:['se tourner vers','faire face','venir vers'],
         proof_ctx:"Se tourner vers décrit un mouvement spatial, tandis que taqabbal décrit un accueil volontaire — la direction est implicite mais le sens central est l'acceptation, pas le mouvement."},
       'Antériorité/Passé':{status:'nul',senses:['avant','auparavant','ancien','devant'],
         proof_ctx:"Pas de rapport temporel dans ce contexte."},
       'Sens isolé/Tribu':{status:'nul',senses:['tribu'],proof_ctx:"Hors sujet."},
       'Sens isolé/Embrasser':{status:'nul',senses:['embrasser'],proof_ctx:"Hors sujet."},
       'Sens isolé/Garantie':{status:'nul',senses:['garantie'],proof_ctx:"Hors sujet."}
     }}},

    // pos=19: as-samīʿu (celui qui entend tout)
    {verse_id:VERSE_ID, word_key:'sme', root:'س م ع', position:19, sense_chosen:'entendre',
     analysis_axes:{concept_chosen:'Audition/Écoute', concepts:{
       'Audition/Écoute':{status:'retenu',senses:['entendre','écouter','ouïe','obéir','exaucer'],
         proof_ctx:"Le schème faʿīl défini (as-samīʿ) est un titre permanent. La femme d'Imran invoque cet attribut pour dire : Tu entends mon vœu. L'article défini al- en fait un titre reconnu — non pas « un entendant » mais « Celui qui entend tout »."},
       'Renommée/Bruit':{status:'nul',senses:['réputation','bruit','faire entendre'],
         proof_ctx:"La femme invoque la capacité d'écoute de Dieu, pas Sa renommée."},
       'Corps/Anatomie':{status:'nul',senses:['oreille'],proof_ctx:"Hors sujet."}
     }}},

    // pos=20: al-ʿalīmu (celui qui sait tout)
    {verse_id:VERSE_ID, word_key:'elm', root:'ع ل م', position:20, sense_chosen:'savoir',
     analysis_axes:{concept_chosen:'Savoir/Connaissance', concepts:{
       'Savoir/Connaissance':{status:'retenu',senses:['savoir','connaître','être informé','certitude','savant','science','enseignement'],
         proof_ctx:"Le schème faʿīl défini (al-ʿalīm) est un titre permanent. La femme d'Imran invoque cet attribut pour dire : Tu sais ce qui est dans mon ventre et Tu connais la sincérité de mon vœu."},
       'Marque/Signe':{status:'nul',senses:['marquer','signe','drapeau'],proof_ctx:"Hors sujet."},
       'Monde/Création':{status:'nul',senses:['monde','les mondes'],proof_ctx:"Hors sujet."},
       'Sens isolé/Enseigner':{status:'nul',senses:['enseigner'],proof_ctx:"Hors sujet."},
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

  const translation_arab = "Quand la femme d'Imran dit : « Mon Seigneur, j'ai voué à Toi ce qui est dans mon ventre, libéré. Accepte donc de moi. Tu es celui qui entend tout, celui qui sait tout. »";

  const full_translation = "(Rappelle-toi) quand la femme d'Imran dit : « Seigneur, je T'ai voué en toute exclusivité ce qui est dans mon ventre. Accepte-le donc de moi. C'est Toi certes l'Audient, l'Omniscient. »";

  const translation_explanation = `§DEMARCHE§

Ce verset inaugure le récit de la famille d'Imran, dont les versets 33-34 annonçaient l'élection divine. La femme d'Imran s'adresse directement à Dieu pour Lui vouer l'enfant qu'elle porte, exprimant un vœu de consécration totale avant même la naissance de l'enfant.

**Qālat** (dit) est un verbe accompli (une forme qui marque un acte achevé dans le passé) à la 3ème personne du féminin singulier de la racine q-w-l. Le Lane's donne qāla : « il a dit, il a parlé ». L'accompli rapporte une parole effectivement prononcée — c'est un fait passé. Le sujet est imraʾatu ʿImrān (la femme d'Imran). Le mot idh (quand) qui précède est une particule temporelle qui situe l'événement dans le passé.

**Imraʾatu** (la femme de) est un nom féminin au nominatif en construction idafa (un rattachement possessif en arabe, où le premier mot « appartient » au second). Imraʾatu ʿImrān signifie « la femme d'Imran ». Le Lane's donne imraʾa : « une femme ». Le nom est le sujet du verbe qālat — c'est elle qui parle.

**ʿImrāna** (Imran) est un nom propre au génitif — complément de l'idafa. ʿImrān est le père de Maryam (Marie). Le nom vient de la racine ʿ-m-r (longue vie). C'est la famille qui donne son nom à cette sourate (Āl ʿImrān = la famille d'Imran).

**Rabbi** (mon Seigneur) est un nom au vocatif (une forme arabe d'interpellation directe) avec le pronom possessif de 1ère personne -ī (mon). La racine r-b-b a pour sens premier « élever, faire grandir, nourrir ». Le Lane's donne rabb : « seigneur, maître, celui qui élève et entretient ». Le rabb est celui qui prend en charge la croissance d'un être — une autorité bienveillante qui nourrit et protège. La femme d'Imran s'adresse à Dieu en tant que son Seigneur éducateur pour Lui formuler un vœu.

**Nadhartu** (j'ai voué) est un verbe accompli à la 1ère personne singulier de la racine n-dh-r. Le Lane's donne nadhara ʿalā nafsihi : « il a fait un vœu, il a rendu un acte futur obligatoire pour lui-même ». L'accompli montre que le vœu est déjà formulé — la femme a pris sa décision de façon irrévocable. L'objet du vœu est mā fī baṭnī (ce qui est dans mon ventre) — elle consacre l'enfant qu'elle porte avant même sa naissance. La préposition la-ka (à Toi) indique que le vœu est adressé à Dieu.

**Baṭnī** (mon ventre) est un nom au génitif avec le pronom possessif de 1ère personne, précédé de la préposition fī (dans). Le Lane's donne baṭn : « le ventre, l'intérieur ». Le ventre est l'intérieur par excellence — c'est le lieu caché où se forme l'enfant. Ici baṭn désigne concrètement l'utérus, le lieu de la grossesse. L'expression « ce qui est dans mon ventre » désigne l'enfant à naître sans le nommer.

**Muḥarraran** (libéré) est un participe passif (une forme qui décrit quelqu'un à qui on a fait l'action) de la forme II (une forme intensive qui exprime une action accomplie pleinement) de la racine ḥ-r-r. Le Lane's donne ḥurriyya : « liberté, le fait d'être libre ». Le participe passif muḥarrar signifie littéralement « celui qui a été rendu libre, libéré ». Le mot est à l'accusatif indéfini, en position de ḥāl (un état qui accompagne l'action principale) — il décrit l'état dans lequel l'enfant est voué : voué en tant que libéré. L'enfant est libéré de toute attache mondaine pour se consacrer au service exclusif de Dieu. Le Lane's donne aussi nadhīra : « un enfant consacré par le père et la mère au service d'un lieu de dévotion ».

**Taqabbal** (accepte) est un verbe à l'impératif de la forme V (une forme qui implique un accueil volontaire et bienveillant) de la racine q-b-l. Le Lane's donne taqabbala : « il a accepté, agréé, reçu avec bienveillance ». La forme V ajoute une nuance de bonne volonté et de bienveillance — ce n'est pas un simple « reçois » mais un « accepte avec bienveillance ». L'impératif fa-taqabbal (avec la particule fa qui exprime une conséquence) signifie « accepte donc » — puisque j'ai voué, accepte donc ce vœu de moi (minnī).

**As-samīʿu** (celui qui entend tout) est un adjectif défini (avec l'article al-) sur le schème faʿīl (une forme intensive qui exprime une qualité permanente et abondante). L'article défini al- en fait un titre reconnu — non pas « un entendant » mais « LE Très-Entendant ». La femme d'Imran invoque cet attribut pour dire : Tu entends mon vœu. La construction innaka anta as-samīʿu (certes, Toi, Tu es celui qui entend tout) utilise le pronom de séparation anta (Toi) pour insister sur l'identité : c'est bien Toi, et pas un autre, qui entends tout.

**Al-ʿalīmu** (celui qui sait tout) est un adjectif défini sur le même schème faʿīl. Le Lane's donne ʿalīm : « celui qui sait abondamment ». La femme d'Imran invoque cet attribut pour dire : Tu sais ce qui est dans mon ventre et Tu connais la sincérité de mon engagement. Les deux attributs ensemble clôturent le vœu : Dieu entend la parole et connaît l'intention.

§JUSTIFICATION§

**dit** — Le sens retenu est « Parole/Énonciation ». Le mot « dit » au présent de narration rend le verbe accompli arabe dans un récit. L'alternative « a dit » (passé composé) est acceptable mais « dit » est plus fluide dans un récit en français courant.

**la femme de** — Le sens retenu est « Personne/Individu ». Le mot « femme » est la traduction directe de imraʾa. L'alternative « épouse » est écartée car imraʾa est le mot générique pour femme, pas le mot spécifique pour épouse (zawja).

**Imran** — Le sens retenu est « Nom propre ». Translittération française de ʿImrān.

**mon Seigneur** — Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot « Seigneur » est choisi car rabb désigne celui qui élève, nourrit et gouverne avec bienveillance. L'alternative « maître » est écartée car maître a une connotation d'autorité sèche sans la dimension de bienveillance. L'alternative « éducateur » est écartée car elle est trop restrictive — rabb englobe bien plus que l'éducation.

**j'ai voué** — Le sens retenu est « Vœu/Consécration ». Le mot « vouer » rend l'acte solennel de nadhara — s'engager de façon irrévocable. L'alternative « promettre » est écartée car promettre est plus faible qu'un vœu — le vœu a un caractère sacré et obligatoire que la promesse n'a pas.

**mon ventre** — Le sens retenu est « Intériorité/Profondeur ». Le mot « ventre » est la traduction directe de baṭn. L'alternative « sein » est écartée car sein est ambigu en français (peut désigner la poitrine). L'alternative « entrailles » est écartée car entrailles est un mot littéraire, pas du français courant.

**libéré** — Le sens retenu est « Liberté/Affranchissement ». Le mot « libéré » rend le participe passif muḥarrar — celui qui a été rendu libre. L'alternative « affranchi » est écartée car affranchi a une connotation spécifique d'esclavage qui n'est pas dans le contexte. L'alternative « consacré » est écartée car muḥarrar ne dit pas « consacré » mais « libéré » — la consécration est la conséquence de la libération, pas son synonyme.

**accepte** — Le sens retenu est « Réception/Accueil ». Le mot « accepte » rend l'impératif taqabbal — une demande d'accueil bienveillant. L'alternative « reçois » est écartée car recevoir est passif, alors que la forme V taqabbala implique un accueil volontaire et actif.

**celui qui entend tout** — Le sens retenu est « Audition/Écoute ». Même choix que V34. L'alternative « Audient » est écartée car ce mot n'est pas du français courant.

**celui qui sait tout** — Le sens retenu est « Savoir/Connaissance ». Même choix que V34. L'alternative « Omniscient » est écartée car c'est un latinisme théologique.

§CRITIQUE§

Deux nuances significatives par rapport aux traductions courantes :

1. **Muḥarraran** : Hamidullah traduit par « en toute exclusivité ». Notre traduction donne « libéré ». Le mot muḥarrar (participe passif de ḥarrara, forme II de ḥ-r-r) signifie littéralement « celui qui a été rendu libre ». Le Lane's donne ḥurriyya : « liberté, le fait d'être libre ». Hamidullah transforme la libération en exclusivité — « en toute exclusivité » ajoute l'idée que l'enfant est donné exclusivement à Dieu, alors que muḥarrar dit que l'enfant est libéré (de toute attache mondaine). La nuance est réelle : « libéré » met l'accent sur ce dont l'enfant est détaché (le monde), tandis que « en toute exclusivité » met l'accent sur celui à qui il est donné (Dieu). L'étymologie dit le premier, pas le second. Cela dit, honnêtement, le Lane's donne aussi nadhīra : « un enfant consacré au service d'un lieu de dévotion » — donc l'idée de service exclusif est présente dans la tradition de cette racine. La différence est que muḥarrar décrit l'état de l'enfant (libre), pas la destination du don.

2. **Samīʿ et ʿalīm** : même critique que V34 — « Audient et Omniscient » sont des termes inaccessibles, notre traduction « celui qui entend tout, celui qui sait tout » rend le même sens en français courant.`;

  const {error:trErr} = await db.from('verse_analyses').update({translation_arab,full_translation,translation_explanation}).eq('id',VA_ID);
  console.log('Translation update:', trErr ? 'ERROR: '+trErr.message : 'OK');

  // =============================================
  // 6. DAILY PHRASES — nðr (0), btn (0), hrr (0)
  // =============================================
  console.log('\n--- 6. Daily phrases ---');

  // nðr (1254)
  const dailyNdr = [
    {analysis_id:1254, arabic:'نَذَرْتُ صَوْمًا', phon:'nadhartu ṣawman', french:"J'ai fait le vœu de jeûner", sense:'vouer'},
    {analysis_id:1254, arabic:'أَنْذَرَهُ مِنَ الخَطَرِ', phon:'andharahu min al-khaṭar', french:"Il l'a averti du danger", sense:'avertir'},
    {analysis_id:1254, arabic:'هُوَ نَذِيرٌ لَكُمْ', phon:'huwa nadhīrun lakum', french:'Il est un avertisseur pour vous', sense:'avertir'}
  ];
  const {error:ndrD} = await db.from('word_daily').insert(dailyNdr);
  console.log('Daily nðr:', ndrD ? 'ERROR: '+ndrD.message : '3 phrases OK');

  // btn (948)
  const dailyBtn = [
    {analysis_id:948, arabic:'آلَمَنِي بَطْنِي', phon:'ālamanī baṭnī', french:"Mon ventre me fait mal", sense:'ventre'},
    {analysis_id:948, arabic:'بَاطِنُ الأَمْرِ', phon:'bāṭinu l-amr', french:"Le côté caché de l'affaire", sense:'caché'},
    {analysis_id:948, arabic:'فِي بَطْنِ الوَادِي', phon:'fī baṭni l-wādī', french:"Au creux de la vallée", sense:'intérieur'}
  ];
  const {error:btnD} = await db.from('word_daily').insert(dailyBtn);
  console.log('Daily btn:', btnD ? 'ERROR: '+btnD.message : '3 phrases OK');

  // hrr (959)
  const dailyHrr = [
    {analysis_id:959, arabic:'حَرَّرَ العَبْدَ', phon:'ḥarrara l-ʿabda', french:"Il a libéré l'esclave", sense:'libérer'},
    {analysis_id:959, arabic:'الجَوُّ حَارٌّ', phon:'al-jawwu ḥārrun', french:"Il fait chaud", sense:'chaleur'},
    {analysis_id:959, arabic:'رَجُلٌ حُرٌّ', phon:'rajulun ḥurrun', french:'Un homme libre', sense:'être libre'}
  ];
  const {error:hrrD} = await db.from('word_daily').insert(dailyHrr);
  console.log('Daily hrr:', hrrD ? 'ERROR: '+hrrD.message : '3 phrases OK');

  // =============================================
  // 7. VÉRIFICATION
  // =============================================
  console.log('\n--- 7. Vérification ---');
  const {data:vwaCheck} = await db.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id',VERSE_ID).order('position');
  console.log('VWA:', vwaCheck.length, 'entrées');
  vwaCheck.forEach(v => console.log('  pos='+v.position+' '+v.word_key+' → '+v.sense_chosen));

  const {data:vaCheck} = await db.from('verse_analyses').select('translation_arab').eq('id',VA_ID).single();
  console.log('\nTraduction:', vaCheck.translation_arab);

  const {data:vaSegs} = await db.from('verse_analyses').select('segments').eq('id',VA_ID).single();
  const imp = vaSegs.segments.filter(s=>s.type==='important');
  const par = vaSegs.segments.filter(s=>s.type==='particle');
  console.log('Segments:', imp.length, 'important,', par.length, 'particles');

  console.log('\nVERSET 3:35 — TERMINÉ');
  console.log('  qālat (qwl) → sens "Parole/Énonciation" → mot français "dit"');
  console.log('  imraʾatu (mra) → sens "Personne/Individu" → mot français "la femme de"');
  console.log('  ʿimrān (emr) → sens "Nom propre" → mot français "Imran"');
  console.log('  rabbi (rbb) → sens "Seigneurie" → mot français "mon Seigneur"');
  console.log('  nadhartu (nðr) → sens "Vœu/Consécration" → mot français "j\'ai voué"');
  console.log('  baṭnī (btn) → sens "Intériorité" → mot français "mon ventre"');
  console.log('  muḥarraran (hrr) → sens "Liberté" → mot français "libéré"');
  console.log('  taqabbal (qbl) → sens "Réception/Accueil" → mot français "accepte"');
  console.log('  as-samīʿu (sme) → sens "Audition/Écoute" → mot français "celui qui entend tout"');
  console.log('  al-ʿalīmu (elm) → sens "Savoir/Connaissance" → mot français "celui qui sait tout"');
  console.log('  Traduction : "Quand la femme d\'Imran dit : Mon Seigneur, j\'ai voué à Toi ce qui est dans mon ventre, libéré..."');

  console.log('\n=== PIPELINE S3:V35 TERMINÉE ===');
})();
