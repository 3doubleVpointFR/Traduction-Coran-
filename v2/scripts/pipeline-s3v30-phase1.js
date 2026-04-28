const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 323;
const VA_ID = 682;

async function enrichRoot(aid, label, descUpdate, newSenses) {
  console.log('\n=== ENRICHISSEMENT ' + label + ' (aid=' + aid + ') ===');
  const {data:existing} = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id', aid).order('display_order');
  console.log('Existant: ' + existing.length + ' sens');

  // Update description of first sense
  if (descUpdate) {
    const {error} = await db.from('word_meanings').update({description: descUpdate}).eq('id', existing[0].id);
    console.log('Update desc id=' + existing[0].id + ':', error ? 'ERROR: '+error.message : 'OK');
  }

  // Insert new senses
  const maxOrder = Math.max(...existing.map(s => s.display_order), 0);
  const toInsert = newSenses.map((s, i) => ({...s, analysis_id: aid, display_order: maxOrder + 1 + i}));
  if (toInsert.length > 0) {
    const {error:insErr} = await db.from('word_meanings').insert(toInsert);
    console.log('Insert:', insErr ? 'ERROR: '+insErr.message : toInsert.length + ' sens OK');
  }

  // Update analysis_step
  const {error:stepErr} = await db.from('word_analyses').update({analysis_step:'etymology'}).eq('id', aid);
  console.log('step → etymology:', stepErr ? 'ERROR: '+stepErr.message : 'OK');

  // Verify
  const {data:final} = await db.from('word_meanings').select('concept,sense').eq('analysis_id', aid).order('display_order');
  console.log('RÉSULTAT: ' + final.length + ' sens');
  let cur = '';
  final.forEach(s => { if(s.concept !== cur) { cur = s.concept; console.log('  [' + cur + ']'); } console.log('    - ' + s.sense); });
  return final.length;
}

(async()=>{
  console.log('=== PHASE 1 — S3:V30 ===\n');

  // =============================================
  // 1. CORRIGER LES SEGMENTS
  // =============================================
  console.log('--- 1. CORRECTION SEGMENTS ---');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  const segs = va.segments;

  // Fix pos=22 baʿīdan: key bed (ب ع ض) → key baed (ب ع د)
  const s22 = segs.find(s => s.position === 22);
  s22.key = 'baed'; s22.word_key = 'baed'; s22.root = 'ب ع د';
  console.log('pos=22 baʿīdan: key bed → baed (ب ع د)');

  // Fix pos=23 yaḥadhdhirukum: key hdr (ح ض ر) → key hðr (ح ذ ر)
  const s23 = segs.find(s => s.position === 23);
  s23.key = 'hðr'; s23.word_key = 'hðr'; s23.root = 'ح ذ ر';
  console.log('pos=23 yaḥadhdhirukum: key hdr → hðr (ح ذ ر)');

  // Ensure all important segments have is_particle=false and word_key
  segs.forEach(s => {
    if (s.type === 'important') {
      s.is_particle = false;
      if (s.key && !s.word_key) s.word_key = s.key;
    }
    if (s.type === 'particle') {
      s.is_particle = true;
    }
  });

  const {error:segErr} = await db.from('verse_analyses').update({segments: segs}).eq('id', VA_ID);
  console.log('Segments update:', segErr ? 'ERROR: '+segErr.message : 'OK');

  const imps = segs.filter(s => s.type === 'important');
  const parts = segs.filter(s => s.type === 'particle');
  console.log('Important: '+imps.length+', Particles: '+parts.length);

  // =============================================
  // 2. ENRICHIR wjd (700) — 3 → ~18 sens
  // =============================================
  await enrichRoot(700, 'wjd (و ج د)',
    "Acte de rencontrer ce qu'on cherchait ou ce qui existait sans qu'on le sache. La découverte est directionnelle — elle va du chercheur vers l'objet trouvé. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), wajadahu signifie « il l'a trouvé, l'a atteint, l'a obtenu en cherchant, l'a découvert, l'a perçu, l'a vu, en a fait l'expérience ». La découverte peut passer par les cinq sens (goût, odorat, ouïe, toucher, vue) ou par l'intellect.",
    [
      // Enrichir Découverte/Existence
      {concept:'Découverte/Existence', sense:'percevoir',
       description:"Saisir par les sens. Le Lane's précise que wujūd s'applique aux cinq sens : percevoir le goût, l'odeur, le son, la rugosité, la vue."},
      {concept:'Découverte/Existence', sense:'atteindre',
       description:"Arriver à ce qu'on cherchait. L'atteinte est le résultat de la quête."},
      {concept:'Découverte/Existence', sense:'obtenir',
       description:"Acquérir ce qu'on désirait obtenir. L'obtention est la récompense de la recherche."},
      {concept:'Découverte/Existence', sense:'découvrir',
       description:"Mettre au jour ce qui était inconnu ou caché."},
      {concept:'Découverte/Existence', sense:'expérimenter',
       description:"Faire l'expérience sensible de quelque chose — éprouver par le vécu direct."},

      // Savoir/Connaissance (connaître par expérience)
      {concept:'Savoir/Connaissance', sense:'savoir',
       description:"Savoir acquis par l'expérience directe, pas par l'enseignement. Le Lane's classe wajada parmi les « verbes du cœur » qui prennent deux compléments — ce qui montre que trouver est un acte de jugement : « j'ai trouvé Zayd possesseur de telle qualité ». Quand le sujet est Dieu, wajada signifie simplement « Il a su »."},
      {concept:'Savoir/Connaissance', sense:'connaître par expérience',
       description:"Connaissance qui vient du vécu, pas de l'enseignement théorique."},

      // Existence/Être
      {concept:'Existence/Être', sense:'être existant',
       description:"Le participe passif mawjūd signifie « existant, qui est ». Le Lane's distingue trois types d'existence : l'éternel (sans début ni fin), le temporel (avec début et fin), et l'immortel (avec début mais sans fin). L'existence est le fait d'avoir été amené à l'être."},
      {concept:'Existence/Être', sense:'faire exister',
       description:"Forme IV awjada : amener à l'être, faire venir à l'existence. C'est l'acte créateur — faire passer du néant à l'être."},
      {concept:'Existence/Être', sense:'existence',
       description:"Le fait d'être, d'avoir une réalité. Le wujūd est l'existence elle-même."},

      // Richesse/Capacité
      {concept:'Richesse/Capacité', sense:'être riche',
       description:"Le Lane's donne wajada fī al-māl : « il est devenu possesseur de richesse ». Le wujd est la richesse, la compétence, l'état de n'avoir besoin de rien. C'est une réalité intérieure de suffisance — celui qui est riche a « trouvé » de quoi se suffire."},
      {concept:'Richesse/Capacité', sense:'avoir les moyens',
       description:"Disposer de la capacité de faire quelque chose. Le wājid est celui qui est solvable."},
      {concept:'Richesse/Capacité', sense:'pouvoir',
       description:"Le Lane's donne wujd comme « capacité, pouvoir ». La capacité est ce qui a été « trouvé » en soi."},

      // Émotion/Passion
      {concept:'Émotion/Passion', sense:'amour passionné',
       description:"Le wajd est l'émotion intense qui saisit — un état intérieur qui submerge celui qui le ressent. L'amour passionné est un « trouver » intérieur qui s'empare de la personne malgré elle."},
      {concept:'Émotion/Passion', sense:'chagrin',
       description:"Peine profonde, douleur intérieure. Le wajd peut être aussi bien l'amour que le chagrin — une émotion qui envahit."},
      {concept:'Émotion/Passion', sense:'se plaindre',
       description:"Forme V tawajjada : se plaindre de quelque chose (insomnie, souffrance). La plainte est l'extériorisation d'une émotion intérieure."},
    ]);

  // =============================================
  // 3. ENRICHIR wdd (703) — 3 → ~12 sens
  // =============================================
  await enrichRoot(703, 'wdd (و د د)',
    "Acte intérieur d'inclination vers l'autre — le cœur se tourne vers ce qu'il aime. L'amour (wudd/widd) est une disposition permanente qui reste chez celui qui aime. D'après les sources étymologiques, waddahu signifie « il l'a aimé ». La mawadda est l'amour et l'affection. Le sens premier est l'attachement du cœur — un état intérieur directionnel qui va de l'aimant vers l'aimé.",
    [
      // Enrichir Amour/Affection
      {concept:'Amour/Affection', sense:'amour',
       description:"État intérieur d'attachement profond."},
      {concept:'Amour/Affection', sense:'ami',
       description:"Le widd est la personne aimée, l'ami, le compagnon cher. Le lien d'amitié est l'expression sociale de l'amour."},
      {concept:'Amour/Affection', sense:'bien-aimé',
       description:"Celui qui est l'objet de l'amour. Le maḥbūb, le wadūd."},
      {concept:'Amour/Affection', sense:'aimant',
       description:"Celui qui porte l'amour. Le wadūd est « très aimant, très affectueux »."},
      {concept:'Amour/Affection', sense:"s'aimer mutuellement",
       description:"Forme VI tawādda : s'aimer l'un l'autre. L'amour réciproque est un échange d'inclination."},
      {concept:'Amour/Affection', sense:'se faire aimer',
       description:"Forme V tawaddada : attirer l'amour de l'autre vers soi, chercher l'affection."},

      // Souhait/Désir (sens dérivé — waddahu peut aussi = il a souhaité)
      {concept:'Souhait/Désir', sense:'désirer',
       description:"Extension de l'amour vers le souhait — vouloir que quelque chose soit. Le Lane's donne bi-wuddī an yakūna kadhā : « je souhaite que cela soit ainsi ». Le désir est l'amour dirigé vers un résultat espéré. C'est un état intérieur d'aspiration."},
      {concept:'Souhait/Désir', sense:'souhaiter ardemment',
       description:"Vouloir intensément que quelque chose advienne. Le souhait ardent est un désir qui vient du fond du cœur."},

      // Idolâtrie (sens isolé mais attesté dans Lane's)
      {concept:'Idolâtrie', sense:'idole (Wadd)',
       description:"Le Lane's donne wadd comme une idole qui appartenait au peuple de Noé, puis à la tribu de Kalb. C'était un homme vertueux dont on fit une image après sa mort, qui devint objet de culte avec le temps. Sens historique concret."},
    ]);

  // =============================================
  // 4. ENRICHIR amd (1250) — 3 → ~8 sens
  // =============================================
  await enrichRoot(1250, 'amd (أ م د)',
    "Temps considéré du point de vue de sa fin — l'horizon temporel au bout duquel quelque chose s'achève. D'après les sources étymologiques, l'amad est « l'étendue ultime, le terme, la limite, le point extrême ». Le zamān est le temps vu depuis son début et sa fin ; l'amad est le temps vu uniquement depuis sa fin — c'est la distance temporelle qui reste avant l'échéance.",
    [
      // Enrichir Durée/Limite
      {concept:'Durée/Limite', sense:'limite ultime',
       description:"Le point extrême au-delà duquel on ne peut aller. Le Lane's donne « l'étendue la plus extrême, le terme, la limite »."},
      {concept:'Durée/Limite', sense:'échéance',
       description:"Le moment fixé où quelque chose prend fin. L'échéance est le terme qui approche."},
      {concept:'Durée/Limite', sense:'distance temporelle',
       description:"L'étendue qui sépare le moment présent du terme final."},

      // Colère (sens verbal attesté)
      {concept:'Colère', sense:'être en colère',
       description:"Le Lane's donne amida ʿalayhi : « il était en colère contre lui ». Sens verbal attesté, rapproché de abida et wabida. La colère est un état intérieur d'irritation dirigé vers quelqu'un."},
      {concept:'Colère', sense:'irritation',
       description:"État de mécontentement intense dirigé vers quelqu'un."},
    ]);

  // =============================================
  // 5. ENRICHIR raf (838) — 4 → ~7 sens
  // =============================================
  await enrichRoot(838, 'raf (ر أ ف)',
    "Élan intérieur de tendresse qui se dirige vers celui qui souffre. La raʾfa est une compassion intense — plus forte que la raḥma selon certains lexicographes. D'après les sources étymologiques, raʾufa bihi signifie « il a exercé la compassion envers lui, il a eu pitié de lui ». C'est un état intérieur directionnel : la tendresse sort de celui qui la ressent et se dirige vers celui qui souffre.",
    [
      // Enrichir Compassion/Clémence
      {concept:'Compassion/Clémence', sense:'tendresse',
       description:"Douceur du cœur qui se porte vers l'autre. La tendresse est la forme la plus douce de la compassion."},
      {concept:'Compassion/Clémence', sense:'bienveillance',
       description:"Disposition permanente à vouloir le bien de l'autre. La bienveillance est une compassion qui se traduit en actes."},
      {concept:'Compassion/Clémence', sense:'miséricorde intense',
       description:"Le Lane's donne raʾūf comme synonyme de raḥīm (le miséricordieux), mais avec une intensité supérieure. La forme faʿūl marque la permanence et l'intensité de la compassion."},
    ]);

  // =============================================
  // 6. VÉRIFICATION FINALE
  // =============================================
  console.log('\n\n--- VÉRIFICATION RICHESSE ---');
  const keys = [...new Set(segs.filter(s=>s.type==='important').map(s=>s.key||s.word_key))].filter(Boolean);
  for (const key of keys) {
    const {data:wa} = await db.from('word_analyses').select('id').eq('word_key', key).maybeSingle();
    if (!wa) { console.log(key+': NOT FOUND <<<'); continue; }
    const {data:senses} = await db.from('word_meanings').select('id').eq('analysis_id', wa.id);
    console.log(key+' (aid='+wa.id+'): '+senses.length+' sens '+(senses.length >= 5 ? '✓' : '<<< SUSPECT'));
  }

  console.log('\n=== PHASE 1 TERMINÉE ===');
})();
