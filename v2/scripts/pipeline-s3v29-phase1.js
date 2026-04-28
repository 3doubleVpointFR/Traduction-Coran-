const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 322; // S3:V29
const VA_ID = 678;
const KHF_AID = 1206;

async function phase1() {
  console.log('=== PHASE 1 — S3:V29 — Corrections segments + Enrichissement khf ===\n');

  // =============================================
  // 1. CORRIGER LES SEGMENTS
  // =============================================
  console.log('--- 1. CORRECTION DES SEGMENTS ---');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  const segs = va.segments;

  // Fix pos=5 fī → particle
  const s5 = segs.find(s => s.position === 5);
  s5.type = 'particle'; s5.is_particle = true; s5.fr = 'dans';
  delete s5.key; delete s5.word_key; delete s5.root;
  console.log('pos=5 fī → particle (dans)');

  // Fix pos=14 fī → particle
  const s14 = segs.find(s => s.position === 14);
  s14.type = 'particle'; s14.is_particle = true; s14.fr = 'dans';
  delete s14.key; delete s14.word_key; delete s14.root;
  console.log('pos=14 fī → particle (dans)');

  // Fix pos=18 fī → particle
  const s18 = segs.find(s => s.position === 18);
  s18.type = 'particle'; s18.is_particle = true; s18.fr = 'dans';
  delete s18.key; delete s18.word_key; delete s18.root;
  console.log('pos=18 fī → particle (dans)');

  // Fix pos=22 ʿalā → particle
  const s22 = segs.find(s => s.position === 22);
  s22.type = 'particle'; s22.is_particle = true; s22.fr = 'sur';
  delete s22.key; delete s22.word_key; delete s22.root;
  console.log('pos=22 ʿalā → particle (sur)');

  // Ensure all important segments have is_particle=false and word_key
  segs.forEach(s => {
    if (s.type === 'important' || (!s.is_particle && s.key)) {
      s.is_particle = false;
      if (s.key && !s.word_key) s.word_key = s.key;
    }
    if (s.type === 'particle') {
      s.is_particle = true;
    }
  });

  const {error:segErr} = await db.from('verse_analyses').update({segments: segs}).eq('id', VA_ID);
  console.log('Segments update:', segErr ? 'ERROR: '+segErr.message : 'OK');

  // Verify
  const importants = segs.filter(s => s.type === 'important');
  const particles = segs.filter(s => s.type === 'particle');
  console.log('Important: '+importants.length+', Particles: '+particles.length+', Total: '+segs.length);
  importants.forEach(s => console.log('  pos='+s.position+' phon='+s.phon+' key='+(s.key||s.word_key)+' is_particle='+s.is_particle));

  // =============================================
  // 2. ENRICHIR khf (aid=1206) — 2 sens → ~19 sens
  // =============================================
  console.log('\n--- 2. ENRICHISSEMENT khf (خ ف ى) ---');

  // Get existing senses
  const {data:existing} = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id', KHF_AID).order('display_order');
  console.log('Existant: '+existing.length+' sens');
  existing.forEach(s => console.log('  id='+s.id+' ['+s.concept+'] '+s.sense));

  // Update description of first sense "cacher"
  const firstId = existing[0].id;
  const {error:upErr} = await db.from('word_meanings').update({
    description: "Rendre invisible ce qui existait à la vue. L'acte de cacher est directionnel : il prend ce qui est apparent et le rend imperceptible. La forme IV akhfā est causative : « il a caché, il a dissimulé, il a couvert ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), khafiya signifie « être imperceptible, non apparent, latent, obscur, caché, couvert ». La dissimulation est un acte extérieur qui agit sur la visibilité d'une chose — celui qui cache fait passer une réalité du domaine du visible vers l'invisible."
  }).eq('id', firstId);
  console.log('Update description id='+firstId+':', upErr ? 'ERROR: '+upErr.message : 'OK');

  // Insert new senses
  const maxOrder = Math.max(...existing.map(s => s.display_order), 0);
  const newSenses = [
    // Enrichir Dissimulation/Secret
    {concept:'Dissimulation/Secret', sense:'dissimuler',
     description:"Celer volontairement, garder hors de la perception d'autrui. La dissimulation est une action intentionnelle de rendre invisible."},
    {concept:'Dissimulation/Secret', sense:'être imperceptible',
     description:"Ne pas être perçu par les sens. Le Lane's donne : « ce qui n'est pas perçu ou est à peine perceptible »."},
    {concept:'Dissimulation/Secret', sense:'être latent',
     description:"Être présent mais non visible, non apparent. État de ce qui existe sans se manifester."},
    {concept:'Dissimulation/Secret', sense:'se cacher',
     description:"Se dérober aux regards, se soustraire à la vue. Le Lane's donne les formes V (takhaffā) et X (istakhfā) : se cacher soi-même."},
    {concept:'Dissimulation/Secret', sense:'étouffer la voix',
     description:"Le Lane's inclut ṣawt khafiyy : une voix étouffée, faible, douce — une voix qui se cache, à peine perceptible à l'oreille."},
    {concept:'Dissimulation/Secret', sense:'tuer secrètement',
     description:"Le Lane's donne ikhtafā damahu : « il l'a tué sans que cela soit connu ». Meurtre clandestin — l'acte reste caché."},

    // Apparition/Manifestation (sens contraire attesté dans Lane's)
    {concept:'Apparition/Manifestation', sense:'apparaître',
     description:"Le Lane's signale explicitement que cette racine a « deux significations contraires » (two contrary significations). Khafiya peut signifier « être caché » mais aussi « apparaître, être apparent, ouvert, manifeste, évident ». L'apparition est le passage de l'invisible au visible — le mouvement contraire de la dissimulation. Cette dualité est une caractéristique remarquable de la racine."},
    {concept:'Apparition/Manifestation', sense:'se manifester',
     description:"Devenir visible et reconnaissable après avoir été caché."},

    // Couverture/Voile
    {concept:'Couverture/Voile', sense:'vêtement couvrant',
     description:"Le Lane's donne khifāʾ : un vêtement (ridāʾ) qu'une femme porte par-dessus ses autres habits, ou un kisāʾ. Toute chose qui en recouvre une autre. Le voile est la matérialisation physique de la dissimulation — c'est l'objet concret qui rend caché ce qu'il couvre."},
    {concept:'Couverture/Voile', sense:'couverture',
     description:"Ce qui recouvre une chose, quelle qu'elle soit. Le Lane's donne : « tout ce avec quoi on couvre une chose »."},
    {concept:'Couverture/Voile', sense:'calice de fleur',
     description:"Le Lane's donne akhfiyat an-nawr : les calices des fleurs — l'enveloppe naturelle qui couvre et protège le bourgeon avant son éclosion."},

    // Extraction/Déterrement
    {concept:'Extraction/Déterrement', sense:'extraire d\'une tombe',
     description:"Le Lane's donne ikhtafā mayyitan : « il a tiré un mort de sa tombe pour voler les habits mortuaires ». L'extraction est l'acte de faire passer du caché au visible — c'est l'inverse actif de la dissimulation, un dévoilement forcé."},
    {concept:'Extraction/Déterrement', sense:'creuser un puits',
     description:"Le Lane's donne ikhtafā al-biʾr : « il a creusé ou dégagé le puits ». Mettre à jour ce qui était enfoui sous terre."},
    {concept:'Extraction/Déterrement', sense:'piller une tombe',
     description:"Le mukhtafī est le profanateur de sépultures — celui qui extrait les morts pour voler les habits funéraires. Le Lane's donne aussi la main du voleur et du profanateur (al-yad al-mustakhfiya)."},

    // Puits/Profondeur
    {concept:'Puits/Profondeur', sense:'puits profond',
     description:"Le Lane's donne khafiyya : un puits, ou un puits profond, « parce que son eau n'est pas perçue ou n'est pas apparente ». Le puits est un espace dont le contenu est naturellement caché — l'eau invisible au fond du trou. Extension spatiale de la dissimulation."},
    {concept:'Puits/Profondeur', sense:'ancien puits',
     description:"Puits d'un ancien temps qui a été comblé puis recreusé. Le Lane's donne : « tout puits qui a été creusé puis abandonné jusqu'à être comblé, puis recreusé et dégagé »."},

    // Êtres invisibles
    {concept:'Êtres invisibles', sense:'djinns',
     description:"Le Lane's donne al-khāfī : les djinns, « parce qu'ils se dissimulent aux yeux [des hommes] ». Les êtres invisibles portent le nom de celui qui se cache — leur nature est définie par la dissimulation."},
    {concept:'Êtres invisibles', sense:'plumes cachées',
     description:"Le Lane's donne al-khawāfī : les plumes internes de l'aile, en dessous des dix plumes principales de l'avant. Ces plumes sont « dissimulées quand l'oiseau replie son aile » et ne deviennent visibles que quand il la déploie."},
  ];

  const toInsert = newSenses.map((s, i) => ({
    ...s,
    analysis_id: KHF_AID,
    display_order: maxOrder + 1 + i
  }));

  const {error:insErr} = await db.from('word_meanings').insert(toInsert);
  console.log('Insert:', insErr ? 'ERROR: '+insErr.message : toInsert.length+' sens insérés OK');

  // Update analysis_step
  const {error:stepErr} = await db.from('word_analyses').update({analysis_step:'etymology'}).eq('id', KHF_AID);
  console.log('analysis_step → etymology:', stepErr ? 'ERROR: '+stepErr.message : 'OK');

  // =============================================
  // 3. VÉRIFICATION FINALE
  // =============================================
  console.log('\n--- 3. VÉRIFICATION ---');

  // Verify khf senses
  const {data:finalKhf} = await db.from('word_meanings').select('concept,sense').eq('analysis_id', KHF_AID).order('display_order');
  console.log('\nkhf final: '+finalKhf.length+' sens');
  let cur = '';
  finalKhf.forEach(s => {
    if (s.concept !== cur) { cur = s.concept; console.log('  ['+cur+']'); }
    console.log('    - '+s.sense);
  });

  // Verify segments
  const {data:vaFinal} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  const impFinal = vaFinal.segments.filter(s => s.type === 'important');
  const partFinal = vaFinal.segments.filter(s => s.type === 'particle');
  console.log('\nSegments: '+impFinal.length+' important, '+partFinal.length+' particles');

  // Check all important have is_particle=false and word_key
  let issues = 0;
  impFinal.forEach(s => {
    if (s.is_particle !== false) { console.log('  ISSUE: pos='+s.position+' is_particle not false'); issues++; }
    if (!s.word_key && !s.key) { console.log('  ISSUE: pos='+s.position+' no word_key'); issues++; }
  });
  partFinal.forEach(s => {
    if (s.is_particle !== true) { console.log('  ISSUE: pos='+s.position+' is_particle not true'); issues++; }
  });
  console.log(issues === 0 ? 'Aucun problème détecté ✓' : issues+' problèmes <<<');

  // Verify all roots have ≥5 senses
  console.log('\n--- Richesse des racines ---');
  const keys = [...new Set(impFinal.map(s => s.key || s.word_key))].filter(Boolean);
  for (const key of keys) {
    const {data:wa} = await db.from('word_analyses').select('id').eq('word_key', key).maybeSingle();
    if (!wa) { console.log(key+': NOT FOUND <<<'); continue; }
    const {data:senses} = await db.from('word_meanings').select('id').eq('analysis_id', wa.id);
    console.log(key+' (aid='+wa.id+'): '+senses.length+' sens '+(senses.length >= 5 ? '✓' : '<<< SUSPECT'));
  }

  console.log('\n=== PHASE 1 TERMINÉE ===');
}

phase1().catch(e => console.error('FATAL:', e));
