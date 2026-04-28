const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 325;
const VA_ID = 684;
const TWA_AID = 1251; // twa ط و ع — suspect (2 sens)

// AIDs: qul=496, twa=1251, llh=255, rsl=688, wly=599, hbb=930, kfr=294

(async()=>{
  console.log('=== PIPELINE S3:V32 ===\n');

  // =============================================
  // 1. ÉTAPE 2 — ENRICHIR twa (ط و ع) — 2 → ~16 sens
  // =============================================
  console.log('--- 1. ENRICHISSEMENT twa (ط و ع) via Lane\'s ---');

  const {data:existing} = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id', TWA_AID).order('display_order');
  console.log('Existant: ' + existing.length + ' sens');
  existing.forEach(s => console.log('  id='+s.id+' ['+s.concept+'] '+s.sense));

  // Update description of first sense
  const {error:upErr} = await db.from('word_meanings').update({
    description: "Acte intérieur de soumission de la volonté vers celui qui commande. D'après les sources étymologiques (Lane's Arabic-English Lexicon), ṭāʿa lahu signifie « il s'est soumis à lui, il lui a obéi ». La soumission (ṭāʿa) est volontaire — elle sort de celui qui obéit et se dirige vers celui qui commande. La forme IV aṭāʿa ajoute l'idée d'un acte délibéré d'obéissance — le sujet choisit activement de se conformer. C'est un acte directionnel : le soumis oriente sa volonté vers le commandant."
  }).eq('id', existing[0].id);
  console.log('Update desc id='+existing[0].id+':', upErr ? 'ERROR: '+upErr.message : 'OK');

  // Insert new senses
  const maxOrder = Math.max(...existing.map(s => s.display_order), 0);
  const newSenses = [
    // Enrichir Obéissance/Soumission volontaire
    {concept:'Obéissance/Soumission volontaire', sense:'se soumettre',
     description:"Se placer sous l'autorité d'un autre. La soumission est l'acceptation volontaire d'un commandement."},
    {concept:'Obéissance/Soumission volontaire', sense:'être docile',
     description:"Le Lane's donne ṭayyiʿ : « docile, obéissant ». La docilité est un état permanent de soumission facile."},
    {concept:'Obéissance/Soumission volontaire', sense:'obéissant',
     description:"Le participe ṭāʾiʿ : celui qui est dans l'état de soumission. L'obéissant est celui dont la volonté est orientée vers le commandant."},
    {concept:'Obéissance/Soumission volontaire', sense:'se conformer',
     description:"Le Lane's donne ṭāwaʿahu : « il s'est conformé à lui, il a été d'accord avec lui ». La conformité est l'alignement de sa propre volonté avec celle d'un autre."},

    // Facilitation/Complaisance
    {concept:'Facilitation/Complaisance', sense:'faciliter',
     description:"Le Lane's donne ṭawwaʿat lahu nafsuhu : « son âme lui a facilité la chose ». La forme II est causative — elle fait passer la chose de l'état difficile à l'état aisé. C'est un acte intérieur de l'âme qui rend possible ce qui semblait difficile. L'âme « obéit » au désir et facilite le passage à l'acte."},
    {concept:'Facilitation/Complaisance', sense:'rendre aisé',
     description:"Rendre une chose facile à accomplir. Le Lane's cite le verset coranique (5:30) : « son âme lui rendit aisé le meurtre de son frère »."},
    {concept:'Facilitation/Complaisance', sense:'complaire',
     description:"Se conformer aux désirs d'un autre par bienveillance. La complaisance est une obéissance teintée de douceur."},

    // Volontariat/Surérogatoire
    {concept:'Volontariat/Surérogatoire', sense:'faire volontairement',
     description:"Le Lane's donne tatauwwaʿa : « il a fait la chose sans qu'elle soit obligatoire pour lui ». La forme V est réflexive — le sujet s'impose à lui-même une action non exigée. Le mutaṭawwiʿ est celui qui dépasse l'obligation — il donne plus que ce qui est requis, par choix personnel. Acte de générosité qui va au-delà du devoir."},
    {concept:'Volontariat/Surérogatoire', sense:'se porter volontaire',
     description:"S'engager de son propre chef sans y être contraint. Le volontariat est l'obéissance sans commandement."},
    {concept:'Volontariat/Surérogatoire', sense:'surérogatoire',
     description:"Le Lane's donne mutaṭawwiʿ : « celui qui fait plus que l'obligatoire dans tout acte de bien ». L'acte surérogatoire dépasse ce qui est exigé."},

    // Capacité/Pouvoir
    {concept:'Capacité/Pouvoir', sense:'être capable',
     description:"Le Lane's donne istaṭāʿa : « il a été capable, il a pu ». La forme X (istifʿāl) signifie « chercher en soi la capacité de faire ». L'istiṭāʿa est la puissance intérieure qui rend possible l'action. Le Lane's précise que c'est synonyme de qudra (capacité) et iṭāqa (aptitude), mais s'applique spécifiquement aux êtres doués de raison."},
    {concept:'Capacité/Pouvoir', sense:'pouvoir',
     description:"Avoir la puissance de faire quelque chose. Le pouvoir est la capacité en acte."},
    {concept:'Capacité/Pouvoir', sense:'capacité',
     description:"L'aptitude à accomplir une action. La capacité est l'état intérieur qui précède l'acte."},

    // Maturité/Récolte
    {concept:'Maturité/Récolte', sense:'fruit mûr',
     description:"Le Lane's donne aṭāʿa an-nakhl : « les palmiers ont produit des fruits mûrs prêts à être cueillis ». Et aṭāʿa ash-shajar : « les arbres ont porté des fruits mûrs ». Sens métaphorique — l'arbre « obéit » en produisant ce qu'on attend de lui. La maturité du fruit est la forme naturelle de l'obéissance végétale."},
    {concept:'Maturité/Récolte', sense:'prêt à être cueilli',
     description:"Le Lane's donne aṭāʿa at-tamr : « les dattes ont atteint le temps de la récolte ». Le fruit prêt est celui qui a « obéi » au cycle naturel."},
  ];

  const toInsert = newSenses.map((s, i) => ({
    ...s,
    analysis_id: TWA_AID,
    display_order: maxOrder + 1 + i,
    meaning_type: 'etymology'
  }));

  const {error:insErr} = await db.from('word_meanings').insert(toInsert);
  console.log('Insert:', insErr ? 'ERROR: '+insErr.message : toInsert.length+' sens OK');

  // Update analysis_step
  const {error:stepErr} = await db.from('word_analyses').update({analysis_step:'etymology'}).eq('id', TWA_AID);
  console.log('step → etymology:', stepErr ? 'ERROR: '+stepErr.message : 'OK');

  // Verify
  const {data:finalTwa} = await db.from('word_meanings').select('concept,sense').eq('analysis_id', TWA_AID).order('display_order');
  console.log('twa final: '+finalTwa.length+' sens');
  let cur = '';
  finalTwa.forEach(s => { if(s.concept !== cur) { cur = s.concept; console.log('  ['+cur+']'); } console.log('    - '+s.sense); });

  // =============================================
  // 2. LIRE CONCEPTS DEPUIS BDD
  // =============================================
  console.log('\n--- 2. Concepts BDD ---');
  const aidList = [496,1251,255,688,599,930,294];
  const keyNames = {496:'qul',1251:'twa',255:'llh',688:'rsl',599:'wly',930:'hbb',294:'kfr'};
  for (const aid of aidList) {
    const {data:senses} = await db.from('word_meanings').select('concept').eq('analysis_id', aid).order('display_order');
    const concepts = [...new Set(senses.map(s=>s.concept))];
    console.log(keyNames[aid]+': '+concepts.join(', '));
  }

  // =============================================
  // 3. FIX SEGMENTS
  // =============================================
  console.log('\n--- 3. Fix segments ---');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  let segs = va.segments;

  // Remove duplicate "al" particles at pos=3 and pos=14
  segs = segs.filter(s => !(s.type === 'particle' && s.phon === 'al' && (s.position === 3 || s.position === 14)));
  console.log('Removed duplicate al particles at pos=3 and pos=14');

  // Fix pos=12 lā: important → particle
  const s12 = segs.find(s => s.position === 12);
  if (s12) {
    s12.type = 'particle';
    s12.is_particle = true;
    s12.fr = 'ne...pas';
    delete s12.key; delete s12.word_key; delete s12.root;
    console.log('pos=12 lā: important → particle');
  }

  // Fix pos=2 aṭīʿū verb_form I → IV (tagger error)
  const s2 = segs.find(s => s.position === 2);
  if (s2) {
    s2.verb_form = 'IV';
    console.log('pos=2 aṭīʿū: verb_form I → IV');
  }

  // Ensure all important have is_particle=false and word_key
  segs.forEach(s => {
    if (s.type === 'important') {
      s.is_particle = false;
      if (s.key && !s.word_key) s.word_key = s.key;
    }
    if (s.type === 'particle') {
      s.is_particle = true;
    }
  });

  // Update fr + sense_retenu for important segments
  const segUpdates = {
    1:  {fr:'dis', sense_retenu:'dire'},
    2:  {fr:'obéissez', sense_retenu:'obéir volontairement'},
    3:  {fr:'Dieu', sense_retenu:'Dieu'},
    5:  {fr:'le messager', sense_retenu:'messager'},
    8:  {fr:'se détournent', sense_retenu:'se détourner'},
    11: {fr:'Dieu', sense_retenu:'Dieu'},
    13: {fr:"n'aime pas", sense_retenu:'aimer'},
    14: {fr:'ceux qui rejettent', sense_retenu:'rejeter'}
  };

  let segCount = 0;
  segs.forEach(s => {
    const upd = segUpdates[s.position];
    if (upd) { s.fr = upd.fr; s.sense_retenu = upd.sense_retenu; segCount++; }
  });
  console.log(segCount + ' segments mis à jour');

  const {error:segErr} = await db.from('verse_analyses').update({segments: segs}).eq('id', VA_ID);
  console.log('Segments save:', segErr ? 'ERROR: '+segErr.message : 'OK');

  const impSegs = segs.filter(s => s.type === 'important');
  const partSegs = segs.filter(s => s.type === 'particle');
  console.log('Important: '+impSegs.length+', Particles: '+partSegs.length);

  // =============================================
  // 4. VWA
  // =============================================
  console.log('\n--- 4. Insert VWA ---');
  const {error:delErr} = await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
  console.log('Delete VWA:', delErr ? 'ERROR: '+delErr.message : 'OK');

  const vwaEntries = [
    // pos=1: qul
    {verse_id:VERSE_ID, word_key:'qul', root:'ق و ل', position:1, sense_chosen:'dire',
     analysis_axes:{concept_chosen:'Parole/Énonciation', concepts:{
       'Parole/Énonciation':{status:'retenu', senses:['dire','parler','parole','affirmer'],
         proof_ctx:"L'impératif qul commande un acte de profération — transmettre un message. Le contenu du message est un ordre d'obéir à Dieu et au messager."},
       'Avis/Jugement':{status:'nul', senses:['opinion','prétendre'],
         proof_ctx:"L'impératif commande une transmission, pas la formation d'un avis."}
     }}},

    // pos=2: aṭīʿū (obéir — forme IV impératif)
    {verse_id:VERSE_ID, word_key:'twa', root:'ط و ع', position:2, sense_chosen:'obéir volontairement',
     analysis_axes:{concept_chosen:'Obéissance/Soumission volontaire', concepts:{
       'Obéissance/Soumission volontaire':{status:'retenu', senses:['obéir volontairement','consentir','se soumettre','être docile','obéissant','se conformer'],
         proof_ctx:"La forme IV aṭīʿū est un impératif qui commande un acte délibéré d'obéissance. L'obéissance est dirigée vers deux objets : Dieu et le messager. Le Lane's donne aṭāʿa : « il a obéi, il a consenti à ce qui était désiré de lui ». C'est un acte volontaire et directionnel."},
       'Facilitation/Complaisance':{status:'peu_probable', senses:['faciliter','rendre aisé','complaire'],
         proof_ctx:"La facilitation est un acte intérieur de l'âme qui rend une chose aisée, mais l'impératif commande un acte extérieur d'obéissance, pas une facilitation intérieure."},
       'Volontariat/Surérogatoire':{status:'peu_probable', senses:['faire volontairement','se porter volontaire','surérogatoire'],
         proof_ctx:"Le volontariat est un acte qui dépasse l'obligation, mais ici l'impératif rend l'obéissance obligatoire — ce n'est pas un acte surérogatoire."},
       'Capacité/Pouvoir':{status:'nul', senses:['être capable','pouvoir','capacité'],
         proof_ctx:"L'impératif ne commande pas une capacité mais un acte d'obéissance."},
       'Maturité/Récolte':{status:'nul', senses:['fruit mûr','prêt à être cueilli'],
         proof_ctx:"Sens métaphorique végétal hors sujet."}
     }}},

    // pos=3: allāha (Dieu — objet)
    {verse_id:VERSE_ID, word_key:'llh', root:'ا ل ه', position:3, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité', concepts:{
       'Divinité':{status:'retenu', senses:['divinité','dieu','Dieu','théologie'],
         proof_ctx:"Le nom propre Allāh à l'accusatif est le premier objet de l'obéissance commandée. C'est vers Dieu que l'obéissance se dirige en premier."},
       'Adoration/Culte':{status:'probable', senses:['adorer','servir','se consacrer au culte'],
         proof_ctx:"Le sens verbal d'adorer n'est pas activé par le nom propre en position d'objet direct — c'est le verbe aṭīʿū qui porte l'action."},
       'Confusion/Perplexité':{status:'nul', senses:['être confus'],
         proof_ctx:"Hors sujet."},
       'Asservissement':{status:'nul', senses:['réduire en esclavage'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=5: ar-rasūla (messager)
    {verse_id:VERSE_ID, word_key:'rsl', root:'ر س ل', position:5, sense_chosen:'messager',
     analysis_axes:{concept_chosen:'Envoi/Message', concepts:{
       'Envoi/Message':{status:'retenu', senses:['envoyer','messager','message','libérer'],
         proof_ctx:"Le nom ar-rasūl au défini (al-) et à l'accusatif est le second objet de l'obéissance. Le rasūl est celui qui est envoyé pour porter un message — l'article défini identifie un messager connu des auditeurs. Le Lane's donne rasūl : « celui qui est envoyé »."},
       'Eau/Liquide':{status:'nul', senses:['pluie'],
         proof_ctx:"Sens physique hors sujet."},
       'Sens isolé/Cheveux':{status:'nul', senses:['cheveux lâchés'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=8: tawallaw (se détourner — forme V accompli)
    {verse_id:VERSE_ID, word_key:'wly', root:'و ل ي', position:8, sense_chosen:'se détourner',
     analysis_axes:{concept_chosen:'Éloignement/Détournement', concepts:{
       'Éloignement/Détournement':{status:'retenu', senses:['se détourner','s\'éloigner','tourner le dos','fuir'],
         proof_ctx:"La forme V tawallā à l'accompli conditionnel (fa-in tawallaw) exprime un acte achevé de détournement. Le contexte oppose l'obéissance (aṭīʿū) au détournement (tawallaw) — les deux pôles contraires de la réponse au commandement."},
       'Proximité/Protection':{status:'peu_probable', senses:['proche','ami','protecteur','allié','tuteur'],
         proof_ctx:"La proximité et la protection impliquent un mouvement vers l'autre, mais la forme V tawallā dans ce contexte conditionnel (s'ils se détournent) active le sens contraire — le mouvement d'éloignement."},
       'Autorité':{status:'peu_probable', senses:['gouverner','administrer','régir','prendre en charge'],
         proof_ctx:"La prise en charge suppose une responsabilité active, mais le contexte conditionnel après un refus d'obéir active le détournement, pas la gouvernance."},
       'Succession/Consécution':{status:'nul', senses:['suivre','être adjacent','consécutif'],
         proof_ctx:"Hors sujet dans ce contexte."},
       'Bienfaisance/Don':{status:'nul', senses:['accorder un bienfait','infliger'],
         proof_ctx:"Hors sujet."},
       'Droit/Mérite':{status:'nul', senses:['être plus digne de','avoir droit'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=11: allāha (Dieu — sujet de inna)
    {verse_id:VERSE_ID, word_key:'llh', root:'ا ل ه', position:11, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité', concepts:{
       'Divinité':{status:'retenu', senses:['divinité','Dieu'],
         proof_ctx:"Deuxième occurrence du nom propre, cette fois en position de sujet (ism) de la particule emphatique inna. La phrase emphatique affirme avec force que Dieu n'aime pas ceux qui rejettent."},
       'Adoration/Culte':{status:'probable', senses:['adorer'],
         proof_ctx:"Le sens verbal n'est pas activé par le nom propre."}
     }}},

    // pos=13: yuḥibbu (aimer — précédé de négation lā)
    {verse_id:VERSE_ID, word_key:'hbb', root:'ح ب ب', position:13, sense_chosen:'aimer',
     analysis_axes:{concept_chosen:'Amour/Affection', concepts:{
       'Amour/Affection':{status:'retenu', senses:['aimer','affection','préférer'],
         proof_ctx:"Le verbe yuḥibbu à l'inaccompli précédé de la négation lā exprime un état permanent : Dieu n'aime pas (de façon habituelle et constante) ceux qui rejettent. L'absence d'amour est la conséquence du détournement — le verset 31 promettait l'amour divin en échange du suivi, le verset 32 retire cet amour en cas de rejet."},
       'Graine/Semence':{status:'nul', senses:['graine','grain'],
         proof_ctx:"Hors sujet."},
       'Lien':{status:'nul', senses:['corde'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=14: al-kāfirīn (ceux qui rejettent — ⚠️ SENS POST-ISLAMIQUE)
    {verse_id:VERSE_ID, word_key:'kfr', root:'ك ف ر', position:14, sense_chosen:'rejeter',
     analysis_axes:{concept_chosen:'Rejet/Ingratitude', concepts:{
       'Rejet/Ingratitude':{status:'retenu', senses:['nier','être ingrat','renier un bienfait','rejeter','mécréant'],
         proof_ctx:"Le participe actif kāfirīn au pluriel défini désigne ceux qui font l'acte de rejeter. Le contexte est explicite : ceux qui se détournent (tawallaw) de l'obéissance à Dieu et au messager sont des rejetants — ils rejettent le commandement. Le Lane's donne kafara : « il a couvert, il a caché ». Le kāfir est celui qui couvre la vérité, qui rejette ce qui lui est présenté. Le sens post-islamique de « mécréant » réduit cette racine à une identité confessionnelle, alors que le verset décrit un acte : celui de rejeter l'obéissance."},
       'Couverture/Dissimulation':{status:'probable', senses:['couvrir','cacher','la nuit qui couvre'],
         proof_ctx:"La couverture est le sens physique premier de k-f-r, mais le participe actif pluriel défini al-kāfirīn dans un contexte de rejet d'obéissance active le sens de rejet — ceux qui couvrent/cachent la vérité en la rejetant."},
       'Expiation/Réparation':{status:'nul', senses:['expier','effacer les péchés'],
         proof_ctx:"L'expiation est un acte de réparation, hors sujet dans ce contexte de rejet."},
       'Sens isolé/Cultivateur':{status:'nul', senses:['cultivateur'],
         proof_ctx:"Le cultivateur « couvre » la graine de terre, sens concret hors sujet."},
       'Sens isolé/Goudron':{status:'nul', senses:['goudron'],
         proof_ctx:"Hors sujet."},
       'Sens isolé/Village':{status:'nul', senses:['village'],
         proof_ctx:"Hors sujet."}
     }}}
  ];

  const {error:vwaErr} = await db.from('verse_word_analyses').insert(vwaEntries);
  console.log('VWA insert ('+vwaEntries.length+'):', vwaErr ? 'ERROR: '+vwaErr.message : 'OK');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n--- 5. Translation ---');

  const translation_arab = "Dis : obéissez à Dieu et au messager. S'ils se détournent, alors Dieu n'aime pas ceux qui rejettent.";

  const full_translation = "Dis : « Obéissez à Allah et au Messager. » Et puis, s'ils tournent le dos... alors Allah n'aime pas les infidèles !";

  const translation_explanation = `§DEMARCHE§

Ce verset fait suite au verset 31 qui posait la condition de l'amour divin : suivre le Prophète. Le verset 32 renforce le message en commandant explicitement l'obéissance et en avertissant de la conséquence du refus.

**Qul** (dis) est un impératif (une forme qui commande une action immédiate) de la racine q-w-l. Même structure que le verset 31 — le Prophète est commandé de transmettre un message. La répétition de l'impératif qul montre l'insistance du message : après la condition d'amour (verset 31), vient l'ordre direct d'obéissance.

**Aṭīʿū** (obéissez) est un impératif de la forme IV (une forme qui ajoute l'idée d'un acte délibéré et actif) de la racine ṭ-w-ʿ à la deuxième personne du pluriel. La forme IV aṭāʿa est plus forte que la forme I ṭāʿa : elle commande non pas un état de soumission passive, mais un acte actif et volontaire d'obéissance. Le Lane's donne aṭāʿa : « il a obéi, il a consenti à ce qui était désiré de lui ». L'obéissance a deux objets : Dieu et le messager, liés par wa (et) — les deux sont inséparables dans l'acte d'obéissance.

**Allāha** (Dieu) est le nom propre de la Divinité à l'accusatif (une forme qui marque l'objet direct de l'action) — c'est le premier destinataire de l'obéissance commandée.

**Ar-rasūla** (le messager) est un nom au défini (al-) et à l'accusatif. Le défini identifie un messager connu des auditeurs — celui qui a été envoyé. Le Lane's donne rasūl : « celui qui est envoyé pour porter un message ». Le messager est le second destinataire de l'obéissance, coordonné à Dieu par wa (et).

**Tawallaw** (se détournent) est un verbe accompli de la forme V (une forme réflexive qui signifie que le sujet fait l'action sur lui-même) de la racine w-l-y à la troisième personne du pluriel. La forme V tawallā signifie « se tourner soi-même vers l'éloignement ». Précédé de fa-in (donc si), il introduit la conséquence du refus d'obéir. Le Lane's donne tawallā : « il s'est détourné, il a tourné le dos ». Le détournement est l'exact contraire de l'obéissance — au lieu d'orienter sa volonté vers le commandant, on la détourne. Le passage de la 2e personne (aṭīʿū = obéissez, VOUS) à la 3e personne (tawallaw = s'ILS se détournent) est significatif : ceux qui se détournent ne sont plus adressés directement, ils sont parlés à la 3e personne, déjà mis à distance.

**Allāha** (Dieu) est la deuxième occurrence du nom propre, cette fois en position de ism (sujet) de la particule emphatique inna (certes). La construction fa-inna (alors certes) introduit une affirmation emphatique — ce qui suit est une vérité insistante.

**Yuḥibbu** (aime) est un verbe inaccompli (une forme qui marque une action continue et habituelle) de la racine ḥ-b-b, précédé de la particule de négation lā (ne...pas). L'inaccompli avec lā exprime un état permanent de non-amour : « Dieu n'aime pas » — de façon constante et habituelle. Ce verset fait écho au verset 31 qui promettait yuḥbibkum allāh (Dieu vous aimera) : ici, l'amour promis est retiré en cas de rejet.

**Al-kāfirīn** (ceux qui rejettent) est un participe actif (une forme qui dit que la personne FAIT l'action activement et en continu) de la racine k-f-r au pluriel masculin défini, à l'accusatif. Le kāfir est littéralement « celui qui couvre, qui cache ». Le Lane's donne kafara : « il a couvert, il a caché ». Dans le contexte de ce verset, les kāfirīn sont ceux qui « couvrent » la vérité en la rejetant — ils se détournent de l'obéissance à Dieu et au messager. Le participe actif indique que le rejet est un acte continu et délibéré, pas un état passif. L'article défini al- identifie une catégorie connue : ceux qui, face au message, choisissent le rejet.

§JUSTIFICATION§

**dis** — Le sens retenu est « Parole/Énonciation ». Le mot « dis » est choisi car c'est l'impératif direct du verbe dire — un ordre de transmettre. Même choix que dans les versets 29 et 31.

**obéissez** — Le sens retenu est « Obéissance/Soumission volontaire ». Le mot « obéissez » est choisi car la forme IV impérative commande un acte actif d'obéissance. L'alternative « consentir » est écartée car le consentement est plus passif — on consent à une proposition, on obéit à un commandement. L'alternative « se soumettre » est écartée car la soumission peut être contrainte, alors que la forme IV implique un acte volontaire.

**Dieu** — Le sens retenu est « Divinité ». Le mot « Dieu » est choisi car c'est le nom propre en français courant.

**le messager** — Le sens retenu est « Envoi/Message ». Le mot « messager » est choisi car le rasūl est celui qui est envoyé pour porter un message. L'alternative « envoyé » est acceptable mais « messager » est plus courant en français. L'alternative « message » est un nom d'objet, pas de personne.

**se détournent** — Le sens retenu est « Éloignement/Détournement ». Le mot « se détournent » est choisi car la forme V tawallā exprime un mouvement réflexif d'éloignement. L'alternative « tourner le dos » (utilisée par Hamidullah) est acceptable et dit la même chose en plus imagé, mais « se détourner » est plus précis étymologiquement. L'alternative « fuir » est trop forte — le texte ne dit pas qu'ils fuient, mais qu'ils changent de direction.

**n'aime pas** — Le sens retenu est « Amour/Affection ». Le mot « aime » est choisi car l'amour (ḥubb) est l'inclination du cœur. La négation lā transforme l'amour en son contraire. L'alternative « préférer » est écartée car le verset ne parle pas de préférence mais d'amour.

**ceux qui rejettent** — Le sens retenu est « Rejet/Ingratitude ». Le mot « ceux qui rejettent » est choisi car le participe actif kāfir désigne celui qui fait l'acte de rejeter — de couvrir la vérité. L'alternative « mécréants » est écartée car c'est un terme post-islamique qui réduit la racine k-f-r à une identité confessionnelle. L'alternative « ingrats » est possible car le Lane's atteste kafara an-niʿma (être ingrat envers le bienfait), mais le contexte (se détourner de l'obéissance) active plus le sens de rejet que celui d'ingratitude.

§CRITIQUE§

La nuance majeure est dans le mot al-kāfirīn. Les traductions courantes donnent « infidèles » ou « mécréants » — ces termes viennent de la tradition théologique post-islamique qui a figé le kāfir en une identité confessionnelle (le non-musulman). Le Lane's donne kafara comme « couvrir, cacher, rejeter ». En traduisant par « ceux qui rejettent », on comprend que le verset ne condamne pas une identité mais un acte : celui de se détourner de l'obéissance à Dieu et au messager. Ça change le sens du verset — ce n'est plus « Dieu n'aime pas les non-musulmans » (condamnation identitaire) mais « Dieu n'aime pas ceux qui, face au message, choisissent le rejet » (conséquence d'un acte). Reconnaissons honnêtement que le Lane's inclut « unbeliever » parmi les sens de kāfir, mais cette extension sémantique est une conséquence de l'usage post-coranique — le sens premier et étymologique reste « celui qui couvre/rejette ».

Pour le reste, les traductions courantes donnent sensiblement le même sens.`;

  const {error:trErr} = await db.from('verse_analyses').update({
    translation_arab,
    full_translation,
    translation_explanation
  }).eq('id', VA_ID);
  console.log('Translation update:', trErr ? 'ERROR: '+trErr.message : 'OK');

  // =============================================
  // 6. DAILY PHRASES — twa uniquement (0 daily)
  // =============================================
  console.log('\n--- 6. Daily phrases ---');
  const daily = [
    {analysis_id:TWA_AID, arabic:'أطِعْ والديك', phon:'aṭiʿ wālidayk', french:'Obéis à tes parents', sense:'obéir volontairement'},
    {analysis_id:TWA_AID, arabic:'تطوّع في الجمعية', phon:'taṭawwaʿa fī al-jamʿiyya', french:"Il s'est porté volontaire à l'association", sense:'faire volontairement'},
    {analysis_id:TWA_AID, arabic:'هل تستطيع مساعدتي؟', phon:'hal tastaṭīʿu musāʿadatī?', french:"Peux-tu m'aider ?", sense:'être capable'}
  ];
  const {error:dErr} = await db.from('word_daily').insert(daily);
  console.log('Daily twa:', dErr ? 'ERROR: '+dErr.message : '3 phrases OK');

  // =============================================
  // 7. VÉRIFICATION
  // =============================================
  console.log('\n--- 7. Vérification ---');

  const {data:vwaCheck} = await db.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log('VWA: '+vwaCheck.length+' entrées');
  vwaCheck.forEach(v => console.log('  pos='+v.position+' '+v.word_key+' → '+v.sense_chosen));

  const {data:vaCheck} = await db.from('verse_analyses').select('translation_arab').eq('id', VA_ID).single();
  console.log('\nTraduction: '+vaCheck.translation_arab);

  const {data:vaSegs} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  const impFinal = vaSegs.segments.filter(s => s.type === 'important');
  const partFinal = vaSegs.segments.filter(s => s.type === 'particle');
  console.log('Segments: '+impFinal.length+' important, '+partFinal.length+' particles');

  console.log('\n=== PIPELINE S3:V32 TERMINÉE ===');
})();
