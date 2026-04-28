// Pipeline S3:V41 — verse_id=334, VA_ID=697
// قَالَ رَبِّ ٱجْعَل لِّىٓ ءَايَةً ۖ قَالَ ءَايَتُكَ أَلَّا تُكَلِّمَ ٱلنَّاسَ ثَلَـٰثَةَ أَيَّامٍ إِلَّا رَمْزًا ۗ وَٱذْكُر رَّبَّكَ كَثِيرًا وَسَبِّحْ بِٱلْعَشِىِّ وَٱلْإِبْكَـٰرِ

const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function mkAxes(sc, cc, concepts) { return { sense_chosen:sc, concept_chosen:cc, concepts }; }

(async () => {
  console.log('=== PIPELINE S3:V41 ===\n');

  // =============================================
  // 1. ENRICHMENT — 4 suspect roots
  // =============================================

  // --- 1a. thlth (ث ل ث) aid=734 — 3 sens → 8 ---
  console.log('--- 1a. Enrichir thlth (ث ل ث) ---');
  const {count:thlthB} = await sb.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',734);
  console.log('thlth existant:', thlthB, 'sens');
  const thlthNew = [
    {analysis_id:734, sense:'prendre le tiers', concept:'Action liée au nombre',
      description:"Acte extérieur de prélever un tiers d'un ensemble — diviser quelque chose en trois parts et en prendre une. C'est ponctuel, directionnel (de l'ensemble vers la part) et implique une action de séparation.", meaning_type:'etymology', display_order:4},
    {analysis_id:734, sense:'être le troisième', concept:'Action liée au nombre',
      description:"Rejoindre deux personnes pour former un trio.", meaning_type:'etymology', display_order:5},
    {analysis_id:734, sense:'tripler', concept:'Action liée au nombre',
      description:"Faire trois fois, multiplier par trois.", meaning_type:'etymology', display_order:6},
    {analysis_id:734, sense:'par groupes de trois', concept:'Action liée au nombre',
      description:"Organisation en trios, répartition ternaire.", meaning_type:'etymology', display_order:7},
    {analysis_id:734, sense:'corde à trois brins', concept:'Sens isolé/Objet',
      description:"Corde tressée de trois fils — usage concret du nombre trois.", meaning_type:'etymology', display_order:8}
  ];
  const {error:thlthE} = await sb.from('word_meanings').insert(thlthNew);
  if(thlthE) console.log('thlth ERROR:', thlthE.message); else console.log('thlth insert:', thlthNew.length, 'sens OK');
  await sb.from('word_analyses').update({analysis_step:'etymology'}).eq('id',734);

  // --- 1b. rmz (ر م ز) aid=1272 — 3 sens → 8 + fix occ ---
  console.log('\n--- 1b. Enrichir rmz (ر م ز) ---');
  const {count:rmzB} = await sb.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',1272);
  console.log('rmz existant:', rmzB, 'sens');
  const rmzNew = [
    {analysis_id:1272, sense:'faire signe des lèvres', concept:'Signe/Symbole',
      description:"Mouvoir les lèvres sans que la parole soit vocalement perceptible. Le geste sort de celui qui fait signe et atteint celui qui regarde — c'est directionnel, ponctuel et silencieux. La communication passe par le corps, pas par la voix.", meaning_type:'etymology', display_order:4},
    {analysis_id:1272, sense:'faire signe des sourcils', concept:'Signe/Symbole',
      description:"Communication par le mouvement des sourcils.", meaning_type:'etymology', display_order:5},
    {analysis_id:1272, sense:'faire signe des yeux', concept:'Signe/Symbole',
      description:"Communication par le regard ou le clignement.", meaning_type:'etymology', display_order:6},
    {analysis_id:1272, sense:'faire signe de la main', concept:'Signe/Symbole',
      description:"Communication par le geste manuel.", meaning_type:'etymology', display_order:7},
    {analysis_id:1272, sense:'se faire mutuellement des signes', concept:'Signe/Symbole',
      description:"Échange réciproque de gestes non verbaux entre plusieurs personnes.", meaning_type:'etymology', display_order:8}
  ];
  const {error:rmzE} = await sb.from('word_meanings').insert(rmzNew);
  if(rmzE) console.log('rmz ERROR:', rmzE.message); else console.log('rmz insert:', rmzNew.length, 'sens OK');
  // Fix occurrences: ramzan appears once in the Quran (S3:41)
  await sb.from('word_analyses').update({analysis_step:'etymology', total_occurrences:1}).eq('id',1272);
  console.log('rmz occ fixé à 1');

  // --- 1c. eshw (ع ش و) aid=1273 — 3 sens → 8 ---
  console.log('\n--- 1c. Enrichir eshw (ع ش و) ---');
  const {count:eshwB} = await sb.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',1273);
  console.log('eshw existant:', eshwB, 'sens');
  const eshwNew = [
    {analysis_id:1273, sense:'obscurité nocturne', concept:'Aveuglement/Obscurité',
      description:"Les ténèbres du début de la nuit — le moment où la vision s'affaiblit naturellement. C'est un état extérieur, environnemental et temporaire qui enveloppe celui qui s'y trouve.", meaning_type:'etymology', display_order:4},
    {analysis_id:1273, sense:'se diriger aveuglément vers une lumière', concept:'Aveuglement/Obscurité',
      description:"Aller vers un feu ou une lumière dans l'obscurité, sans voir clairement le chemin.", meaning_type:'etymology', display_order:5},
    {analysis_id:1273, sense:'repas du soir', concept:'Temps/Cycle',
      description:"Le souper — le repas pris au moment du crépuscule, quand le soleil décline. C'est un événement social lié au rythme quotidien.", meaning_type:'etymology', display_order:6},
    {analysis_id:1273, sense:'début de la nuit', concept:'Temps/Cycle',
      description:"La première période de l'obscurité nocturne.", meaning_type:'etymology', display_order:7},
    {analysis_id:1273, sense:'période entre le début et le premier quart de la nuit', concept:'Temps/Cycle',
      description:"Intervalle temporel précis du crépuscule.", meaning_type:'etymology', display_order:8}
  ];
  const {error:eshwE} = await sb.from('word_meanings').insert(eshwNew);
  if(eshwE) console.log('eshw ERROR:', eshwE.message); else console.log('eshw insert:', eshwNew.length, 'sens OK');
  await sb.from('word_analyses').update({analysis_step:'etymology'}).eq('id',1273);

  // --- 1d. bkr (ب ك ر) aid=619 — 4 sens → 10 ---
  console.log('\n--- 1d. Enrichir bkr (ب ك ر) ---');
  const {count:bkrB} = await sb.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',619);
  console.log('bkr existant:', bkrB, 'sens');
  const bkrNew = [
    {analysis_id:619, sense:'sortir tôt le matin', concept:'Début du jour/Primauté',
      description:"Partir au début du jour, entre la prière de l'aube et le lever du soleil. C'est un acte extérieur, ponctuel et volontaire — celui qui sort tôt anticipe les autres. Le mouvement est directionnel : de l'intérieur vers l'extérieur, du repos vers l'activité.", meaning_type:'etymology', display_order:5},
    {analysis_id:619, sense:'début du jour', concept:'Début du jour/Primauté',
      description:"La première partie de la journée, avant le plein soleil.", meaning_type:'etymology', display_order:6},
    {analysis_id:619, sense:'perle non percée', concept:'Pureté/Nouveauté',
      description:"Perle intacte, jamais altérée — extension de l'idée de virginité au domaine des objets.", meaning_type:'etymology', display_order:7},
    {analysis_id:619, sense:'arc neuf', concept:'Pureté/Nouveauté',
      description:"Arc utilisé pour la première fois — fraîcheur et efficacité du neuf.", meaning_type:'etymology', display_order:8},
    {analysis_id:619, sense:'chamelle jeune', concept:'Sens isolé/Animal',
      description:"Jeune chamelle — sens concret lié à la primauté de l'âge.", meaning_type:'etymology', display_order:9},
    {analysis_id:619, sense:'nuage chargé d\'eau', concept:'Sens isolé/Nature',
      description:"Nuage plein d'eau, comme une source vierge qui n'a pas encore déversé sa pluie.", meaning_type:'etymology', display_order:10}
  ];
  const {error:bkrE} = await sb.from('word_meanings').insert(bkrNew);
  if(bkrE) console.log('bkr ERROR:', bkrE.message); else console.log('bkr insert:', bkrNew.length, 'sens OK');
  await sb.from('word_analyses').update({analysis_step:'etymology'}).eq('id',619);

  // =============================================
  // 2. READ CONCEPTS FROM DB
  // =============================================
  console.log('\n--- Richesse après enrichissement ---');
  const aidsMap = {
    qwl:307, rbb:253, jel:359, 'a y t':2326, klm:478, nws:303,
    thlth:734, ywm:257, rmz:1272, 'ḏkr':1159, sbh:440, eshw:1273, bkr:619
  };
  const allC = {};
  for(const [key,aid] of Object.entries(aidsMap)) {
    const {data:wm} = await sb.from('word_meanings').select('sense,concept').eq('analysis_id',aid).order('display_order');
    allC[key] = {};
    wm.forEach(m => { if(!allC[key][m.concept]) allC[key][m.concept]=[]; allC[key][m.concept].push(m.sense); });
    console.log(key+' (aid='+aid+'): '+wm.length+' sens');
    for(const [c,ss] of Object.entries(allC[key])) console.log('  '+c+'('+ss.length+'): '+ss.join(', '));
  }

  // =============================================
  // 3. FIX SEGMENTS
  // =============================================
  console.log('\n--- 3. Fix segments ---');
  const {data:vaRow} = await sb.from('verse_analyses').select('segments').eq('id',697).single();
  const segs = vaRow.segments;

  // Fix word_keys to match DB entries
  const keyFixes = {5:'a y t', 7:'a y t', 16:'ḏkr'};
  for(const [pos,newKey] of Object.entries(keyFixes)) {
    const idx = segs.findIndex(s => s.position === parseInt(pos));
    if(idx>=0) { segs[idx].key = newKey; console.log('pos='+pos+': key → '+newKey); }
  }

  const {error:segE} = await sb.from('verse_analyses').update({segments:segs}).eq('id',697);
  if(segE) console.log('Segments ERROR:', segE.message); else console.log('Segments mis à jour');

  const imp = segs.filter(s=>s.type==='important');
  const par = segs.filter(s=>s.type==='particle');
  console.log('Important:', imp.length, '| Particle:', par.length, '| Total:', segs.length);

  // =============================================
  // 4. VWA — 16 entries
  // =============================================
  console.log('\n--- 4. VWA ---');
  await sb.from('verse_word_analyses').delete().eq('verse_id',334);

  const vwaEntries = [
    // pos=1 qwl — "dire"
    {verse_id:334, word_key:'qwl', root:'ق و ل', position:1,
      sense_chosen:'dire',
      analysis_axes: mkAxes('dire','Parole/Énonciation',{
        'Parole/Énonciation': {status:'retenu', senses:allC.qwl['Parole/Énonciation'],
          proof_ctx:"qāla introduit un discours direct de Zacharie adressé à Dieu. Le vocatif rabbī qui suit montre une parole prononcée. Le sens de parole est le seul compatible avec l'introduction d'une demande formulée."},
        'Pensée/Avis': {status:'nul', senses:allC.qwl['Pensée/Avis'],
          proof_ctx:"Zacharie s'adresse à Dieu — paroles, pas pensées."},
        'Sens isolé/Puissance': {status:'nul', senses:allC.qwl['Sens isolé/Puissance'], proof_ctx:"Hors sujet."},
        'Corps/Anatomie': {status:'nul', senses:allC.qwl['Corps/Anatomie'], proof_ctx:"Hors sujet."}
      })},
    // pos=2 rbb — "seigneur"
    {verse_id:334, word_key:'rbb', root:'ر ب ب', position:2,
      sense_chosen:'seigneur',
      analysis_axes: mkAxes('seigneur','Seigneurie/Autorité bienveillante',{
        'Seigneurie/Autorité bienveillante': {status:'retenu', senses:allC.rbb['Seigneurie/Autorité bienveillante'],
          proof_ctx:"rabbī en adresse directe exprime la relation de proximité avec Celui qui entretient et nourrit. Le titre de seigneur est le plus naturel pour une demande respectueuse."},
        'Éducation/Accompagnement': {status:'probable', senses:allC.rbb['Éducation/Accompagnement'],
          proof_ctx:"Le rôle éducatif est cohérent mais le contexte de demande appelle le titre d'autorité plutôt que la fonction de formateur."},
        'Croissance/Augmentation': {status:'nul', senses:allC.rbb['Croissance/Augmentation'], proof_ctx:"Ne forme pas une expression naturelle en adresse directe."},
        'Commerce/Usure': {status:'nul', senses:allC.rbb['Commerce/Usure'], proof_ctx:"Hors sujet."},
        'Souffle/Vent': {status:'nul', senses:allC.rbb['Souffle/Vent']||['essoufflement'], proof_ctx:"Hors sujet."},
        'Sens isolé/Fixer': {status:'nul', senses:allC.rbb['Sens isolé/Fixer']||['fixer'], proof_ctx:"Hors sujet."},
        'Sens isolé/Rassembler': {status:'nul', senses:allC.rbb['Sens isolé/Rassembler']||['rassembler'], proof_ctx:"Hors sujet."},
        'Sens isolé/Groupe': {status:'nul', senses:allC.rbb['Sens isolé/Groupe']||['groupe'], proof_ctx:"Hors sujet."},
        'Sens isolé/Confiture': {status:'nul', senses:allC.rbb['Sens isolé/Confiture']||['confiture'], proof_ctx:"Hors sujet."}
      })},
    // pos=3 jel — "faire"
    {verse_id:334, word_key:'jel', root:'ج ع ل', position:3,
      sense_chosen:'faire',
      analysis_axes: mkAxes('faire','Action/Réalisation',{
        'Action/Réalisation': {status:'retenu', senses:allC.jel['Action/Réalisation'],
          proof_ctx:"ij'al à l'impératif avec lī (pour moi) et āyatan (un signe) exprime une demande : « fais pour moi un signe ». Le sens d'action/réalisation est le seul qui forme une expression naturelle avec cette construction."},
        'Sens isolé/Récompense': {status:'nul', senses:allC.jel['Sens isolé/Récompense'],
          proof_ctx:"Zacharie ne demande pas une récompense mais un signe de confirmation."}
      })},
    // pos=5 a y t — "signe"
    {verse_id:334, word_key:'a y t', root:'أ ي ة', position:5,
      sense_chosen:'signe',
      analysis_axes: mkAxes('signe','Signe/Manifestation',{
        'Signe/Manifestation': {status:'retenu', senses:allC['a y t']['Signe/Manifestation'],
          proof_ctx:"āyatan indéfini à l'accusatif est l'objet de la demande de Zacharie — il demande une manifestation visible qui confirme la promesse de la naissance de Yaḥyā. Le sens de signe tangible est le seul cohérent avec cette demande de confirmation."},
        'Interpellation/Appel': {status:'nul', senses:allC['a y t']['Interpellation/Appel'],
          proof_ctx:"Zacharie ne demande pas un appel mais une preuve tangible. Le sens d'interpellation est hors contexte."}
      })},
    // pos=6 qwl — "dire" (2nd)
    {verse_id:334, word_key:'qwl', root:'ق و ل', position:6,
      sense_chosen:'dire',
      analysis_axes: mkAxes('dire','Parole/Énonciation',{
        'Parole/Énonciation': {status:'retenu', senses:allC.qwl['Parole/Énonciation'],
          proof_ctx:"Deuxième qāla — introduit la réponse divine à la demande de Zacharie. Le verbe accompli marque le changement de locuteur."},
        'Pensée/Avis': {status:'nul', senses:allC.qwl['Pensée/Avis'], proof_ctx:"Réponse adressée à Zacharie, pas une pensée."},
        'Sens isolé/Puissance': {status:'nul', senses:allC.qwl['Sens isolé/Puissance'], proof_ctx:"Hors sujet."},
        'Corps/Anatomie': {status:'nul', senses:allC.qwl['Corps/Anatomie'], proof_ctx:"Hors sujet."}
      })},
    // pos=7 a y t — "signe" (2nd, with suffix ka)
    {verse_id:334, word_key:'a y t', root:'أ ي ة', position:7,
      sense_chosen:'signe',
      analysis_axes: mkAxes('signe','Signe/Manifestation',{
        'Signe/Manifestation': {status:'retenu', senses:allC['a y t']['Signe/Manifestation'],
          proof_ctx:"āyatuka (ton signe) au nominatif est le sujet d'une phrase nominale : « ton signe est que... ». Le signe est maintenant défini et personnalisé — c'est la réponse concrète à la demande de Zacharie."},
        'Interpellation/Appel': {status:'nul', senses:allC['a y t']['Interpellation/Appel'],
          proof_ctx:"Le contexte est celui d'un signe donné, pas d'un appel lancé."}
      })},
    // pos=9 klm — "parler"
    {verse_id:334, word_key:'klm', root:'ك ل م', position:9,
      sense_chosen:'parler',
      analysis_axes: mkAxes('parler','Parole/Discours',{
        'Parole/Discours': {status:'retenu', senses:allC.klm['Parole/Discours'],
          proof_ctx:"tukallima est un verbe inaccompli de la forme II (intensive) — « parler véritablement, adresser la parole ». Précédé de allā (que ne pas), il forme l'interdiction de parler aux gens. Le sens de parole est le seul compatible avec le complément an-nāsa (les gens) et l'exception illā ramzan (sauf par gestes)."},
        'Blessure': {status:'nul', senses:allC.klm['Blessure'],
          proof_ctx:"Le sens de blessure (couper la peau) n'a aucun rapport avec le contexte de communication et de silence."}
      })},
    // pos=10 nws — "gens"
    {verse_id:334, word_key:'nws', root:'ن و س', position:10,
      sense_chosen:'gens',
      analysis_axes: mkAxes('gens','Humanité/Peuple',{
        'Humanité/Peuple': {status:'retenu', senses:allC.nws['Humanité/Peuple'],
          proof_ctx:"an-nāsa (les gens) est le complément du verbe tukallima — les personnes à qui Zacharie ne devra pas parler. Le défini al- indique les gens en général. Le sens d'humanité est le seul pertinent dans ce contexte de communication sociale."},
        'Perception/Visibilité': {status:'nul', senses:allC.nws['Perception/Visibilité'],
          proof_ctx:"Le contexte n'est pas celui de la vision mais de la parole et du silence."},
        'Sens isolé/Oublier': {status:'nul', senses:allC.nws['Sens isolé/Oublier'], proof_ctx:"Hors sujet."},
        'Sens isolé/Être': {status:'nul', senses:allC.nws['Sens isolé/Être'], proof_ctx:"Hors sujet."}
      })},
    // pos=11 thlth — "trois"
    {verse_id:334, word_key:'thlth', root:'ث ل ث', position:11,
      sense_chosen:'trois',
      analysis_axes: mkAxes('trois','Nombre/Trinité',{
        'Nombre/Trinité': {status:'retenu', senses:allC.thlth['Nombre/Trinité'],
          proof_ctx:"thalāthata est le nombre cardinal trois, suivi de ayyāmin (jours) au génitif. La construction nombre + nom au génitif est la façon arabe de dire « trois jours ». Le sens numérique est le seul applicable."},
        'Action liée au nombre': {status:'nul', senses:allC.thlth['Action liée au nombre'],
          proof_ctx:"Le mot thalāthata est ici un nombre cardinal, pas un verbe d'action. Les sens d'action (prendre le tiers, tripler) ne sont pas activés."},
        'Sens isolé/Objet': {status:'nul', senses:allC.thlth['Sens isolé/Objet']||['corde à trois brins'],
          proof_ctx:"Hors sujet."}
      })},
    // pos=12 ywm — "jour"
    {verse_id:334, word_key:'ywm', root:'ي و م', position:12,
      sense_chosen:'jour',
      analysis_axes: mkAxes('jour','Temps/Période',{
        'Temps/Période': {status:'retenu', senses:allC.ywm['Temps/Période'],
          proof_ctx:"ayyāmin au génitif pluriel après le nombre trois désigne des jours — des périodes de 24 heures. C'est la durée pendant laquelle Zacharie ne parlera pas aux gens. Le sens de période temporelle est le seul cohérent."},
        'Événement/Moment marquant': {status:'nul', senses:allC.ywm['Événement/Moment marquant'],
          proof_ctx:"Le contexte est celui d'une durée (trois jours), pas d'événements marquants."},
        'Sens isolé/Étape': {status:'nul', senses:allC.ywm['Sens isolé/Étape']||['étape'], proof_ctx:"Hors sujet."},
        'Temps/Cycle': {status:'nul', senses:allC.ywm['Temps/Cycle']||['distance d\'un jour de marche'], proof_ctx:"Le contexte n'est pas celui d'une distance."}
      })},
    // pos=14 rmz — "faire signe"
    {verse_id:334, word_key:'rmz', root:'ر م ز', position:14,
      sense_chosen:'faire signe',
      analysis_axes: mkAxes('faire signe','Signe/Symbole',{
        'Signe/Symbole': {status:'retenu', senses:allC.rmz['Signe/Symbole'],
          proof_ctx:"ramzan à l'accusatif après illā (sauf) forme l'exception au silence imposé — la seule communication autorisée est par gestes. D'après les sources étymologiques, le ramz désigne un signe fait par les lèvres, les sourcils, les yeux ou les mains. Le sens de geste non verbal est le seul cohérent avec l'opposition à tukallima (parler avec la voix)."}
      })},
    // pos=16 ḏkr — "mentionner"
    {verse_id:334, word_key:'ḏkr', root:'ذ ك ر', position:16,
      sense_chosen:'mentionner',
      analysis_axes: mkAxes('mentionner','Mémoire/Rappel',{
        'Mémoire/Rappel': {status:'retenu', senses:allC['ḏkr']['Mémoire/Rappel'],
          proof_ctx:"uḏkur à l'impératif avec rabbaka (ton Seigneur) comme objet direct exhorte Zacharie à rappeler/mentionner son Seigneur abondamment. Le dhikr combine la mémoire intérieure (garder en conscience) et la mention extérieure (prononcer le nom). Le sens de rappel est le seul compatible avec le complément « ton Seigneur »."},
        'Masculinité': {status:'nul', senses:allC['ḏkr']['Masculinité'],
          proof_ctx:"Le sens de masculinité n'a aucun rapport avec l'exhortation à mentionner Dieu."},
        'Sens isolé/Renommée': {status:'nul', senses:allC['ḏkr']['Sens isolé/Renommée'],
          proof_ctx:"Le contexte n'est pas celui de la célébrité mais de la conscience et de la mention de Dieu."}
      })},
    // pos=17 rbb — "seigneur" (2nd)
    {verse_id:334, word_key:'rbb', root:'ر ب ب', position:17,
      sense_chosen:'seigneur',
      analysis_axes: mkAxes('seigneur','Seigneurie/Autorité bienveillante',{
        'Seigneurie/Autorité bienveillante': {status:'retenu', senses:allC.rbb['Seigneurie/Autorité bienveillante'],
          proof_ctx:"rabbaka (ton Seigneur) à l'accusatif est le complément du verbe uḏkur. Le titre de seigneur identifie Celui que Zacharie doit rappeler et maintenir en conscience."},
        'Éducation/Accompagnement': {status:'probable', senses:allC.rbb['Éducation/Accompagnement'],
          proof_ctx:"L'idée de « rappeler celui qui t'a éduqué » est cohérente mais le titre de seigneur est plus direct dans cette exhortation."},
        'Croissance/Augmentation': {status:'nul', senses:allC.rbb['Croissance/Augmentation'], proof_ctx:"Hors contexte."},
        'Commerce/Usure': {status:'nul', senses:allC.rbb['Commerce/Usure'], proof_ctx:"Hors sujet."},
        'Souffle/Vent': {status:'nul', senses:allC.rbb['Souffle/Vent']||['essoufflement'], proof_ctx:"Hors sujet."},
        'Sens isolé/Fixer': {status:'nul', senses:allC.rbb['Sens isolé/Fixer']||['fixer'], proof_ctx:"Hors sujet."},
        'Sens isolé/Rassembler': {status:'nul', senses:allC.rbb['Sens isolé/Rassembler']||['rassembler'], proof_ctx:"Hors sujet."},
        'Sens isolé/Groupe': {status:'nul', senses:allC.rbb['Sens isolé/Groupe']||['groupe'], proof_ctx:"Hors sujet."},
        'Sens isolé/Confiture': {status:'nul', senses:allC.rbb['Sens isolé/Confiture']||['confiture'], proof_ctx:"Hors sujet."}
      })},
    // pos=20 sbh — "glorifier"
    {verse_id:334, word_key:'sbh', root:'س ب ح', position:20,
      sense_chosen:'glorifier',
      analysis_axes: mkAxes('glorifier','Glorification/Louange',{
        'Glorification/Louange': {status:'retenu', senses:allC.sbh['Glorification/Louange'],
          proof_ctx:"sabbiḥ est un impératif de la forme II (intensive) — proclamer la transcendance de Dieu, déclarer qu'Il est au-dessus de toute imperfection. Le contexte associe cette proclamation à deux moments de la journée (soir et matin), ce qui en fait un acte rituel régulier. Le sens de glorification est le seul compatible avec cette exhortation spirituelle."},
        'Mouvement/Flottement': {status:'peu_probable', senses:allC.sbh['Mouvement/Flottement'],
          proof_ctx:"Le sens physique de nager/flotter est le sens premier de la racine. Mais la forme II avec le contexte temporel (soir et matin) indique un acte de proclamation, pas un mouvement aquatique. La « nage » de Dieu au-dessus des imperfections est l'image philosophique qui fonde le tasbīḥ."}
      })},
    // pos=22 eshw — "soir"
    {verse_id:334, word_key:'eshw', root:'ع ش و', position:22,
      sense_chosen:'soir',
      analysis_axes: mkAxes('soir','Temps/Cycle',{
        'Temps/Cycle': {status:'retenu', senses:allC.eshw['Temps/Cycle'],
          proof_ctx:"al-ʿashiyyi au génitif défini après la préposition bi désigne le moment du soir — la période du crépuscule. Le contexte temporal (associé à al-ibkār, le matin) forme la paire soir-matin qui couvre les deux extrémités de la journée."},
        'Aveuglement/Obscurité': {status:'peu_probable', senses:allC.eshw['Aveuglement/Obscurité'],
          proof_ctx:"Le sens d'aveuglement nocturne est le sens physique premier de la racine. Mais dans la construction bi-l-ʿashiyyi wa-l-ibkāri (au soir et au matin), c'est la dimension temporelle qui est activée, pas l'aveuglement."}
      })},
    // pos=24 bkr — "matin"
    {verse_id:334, word_key:'bkr', root:'ب ك ر', position:24,
      sense_chosen:'matin',
      analysis_axes: mkAxes('matin','Début du jour/Primauté',{
        'Début du jour/Primauté': {status:'retenu', senses:allC.bkr['Début du jour/Primauté'],
          proof_ctx:"al-ibkāri au génitif défini désigne le début du jour, la période de l'aube. Associé à al-ʿashiyyi (le soir), il forme la paire temporelle qui couvre les extrémités de la journée. Le sens de début du jour est le seul pertinent dans ce contexte de moments de glorification."},
        'Pureté/Nouveauté': {status:'nul', senses:allC.bkr['Pureté/Nouveauté'],
          proof_ctx:"Le sens de virginité/nouveauté n'est pas activé dans un contexte temporel de « matin »."},
        'Sens isolé/Animal': {status:'nul', senses:allC.bkr['Sens isolé/Animal']||['chamelle jeune'], proof_ctx:"Hors sujet."},
        'Sens isolé/Nature': {status:'nul', senses:allC.bkr['Sens isolé/Nature']||['nuage chargé d\'eau'], proof_ctx:"Hors sujet."}
      })}
  ];

  const {error:vwaE} = await sb.from('verse_word_analyses').insert(vwaEntries);
  if(vwaE) console.log('VWA ERROR:', vwaE.message); else console.log('VWA insert:', vwaEntries.length, 'entries OK');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n--- 5. Translation ---');

  const fullTranslation = "Il dit : « Ô mon Seigneur, donne-moi un signe. » — « Ton signe, dit Allah, sera que, pendant trois jours, tu ne pourras parler aux gens que par geste. Invoque beaucoup ton Seigneur ; et, glorifie-Le, en fin et en début de journée. »";

  const translationArab = "Il dit : « Mon Seigneur, accorde-moi un signe. » Il dit : « Ton signe est que tu ne parleras pas aux gens pendant trois jours, sauf par gestes. Et rappelle ton Seigneur abondamment, et glorifie le soir et le matin. »";

  const translationExplanation = `§DEMARCHE§
Ce verset fait suite à la réponse divine (verset 40) affirmant que Dieu fait ce qu'Il veut. Zacharie, convaincu de la promesse, demande un signe pour confirmer la bonne nouvelle de la naissance de Yaḥyā. La réponse lui prescrit trois jours de silence vis-à-vis des gens, sauf par gestes, et l'exhorte au rappel abondant et à la glorification le soir et le matin.

**qāla** (il dit) est un verbe accompli (une forme qui indique une action achevée dans le passé) de la racine q-w-l. Le sens premier est « énoncer des paroles ». Ici, Zacharie reprend la parole après avoir entendu la réponse divine du verset précédent. On traduit par « il dit ».

**rabbī** (mon Seigneur) est un nom en construction possessive (iḍāfa, une structure où le nom est rattaché au pronom possessif) avec le pronom de la première personne, de la racine r-b-b. Le sens premier est « celui qui nourrit, entretient et fait croître ». Zacharie s'adresse à Dieu dans une demande. On traduit par « mon Seigneur ».

**ij'al** (accorde) est un verbe à l'impératif (une forme qui exprime une demande quand elle est adressée à Dieu) de la racine j-ʿ-l. Le sens premier est « faire, rendre, placer, établir ». L'impératif avec lī (pour moi) et āyatan (un signe) forme la demande « fais pour moi un signe ». En français courant, « accorde-moi » rend naturellement cette construction. On traduit par « accorde-moi ».

**āyatan** (un signe) est un nom indéfini à l'accusatif (complément d'objet du verbe ij'al) de la racine '-y-t. Le sens premier est « signe, marque visible, manifestation ». L'indéfini montre que Zacharie ne précise pas le type de signe — il laisse le choix à Dieu. On traduit par « un signe ».

**qāla** (il dit) — deuxième occurrence du verbe accompli q-w-l. Le sujet change : c'est la réponse à la demande de Zacharie. On traduit par « il dit ».

**āyatuka** (ton signe) est le même nom '-y-t, cette fois au nominatif (sujet de la phrase) avec le pronom possessif de la deuxième personne ka (ton). La construction āyatuka allā tukallima est une phrase nominale (une structure arabe où le sujet est un nom et le prédicat décrit ce sujet) : « ton signe est que tu ne parles pas... ». Le signe est maintenant défini et personnalisé. On traduit par « ton signe ».

**tukallima** (tu ne parleras pas) est un verbe à l'inaccompli de la forme II (une forme intensive qui renforce le sens du verbe de base) de la racine k-l-m. Le sens premier est « parler, prononcer des mots ». La forme II kallama intensifie : adresser véritablement la parole à quelqu'un. Précédé de allā (an + lā = que ne pas), le verbe est au subjonctif négatif : « que tu ne parles pas ». On traduit par « tu ne parleras pas ».

**an-nāsa** (les gens) est un nom défini à l'accusatif (complément d'objet du verbe tukallima) de la racine n-w-s. Le sens premier est « les êtres humains, les gens ». Le défini al- indique les gens en général. On traduit par « les gens ».

**thalāthata** (trois) est un nom à l'accusatif (complément de durée) de la racine th-l-th. Le sens premier est le nombre trois. En construction avec ayyāmin (jours) au génitif, il forme la durée « trois jours ». On traduit par « trois ».

**ayyāmin** (jours) est un nom au génitif pluriel (complément du nombre) de la racine y-w-m. Le sens premier est « jour, période de temps de 24 heures ». Le génitif après le nombre est la construction arabe standard pour exprimer la quantité : « trois de jours ». On traduit par « jours ».

**ramzan** (par gestes) est un nom indéfini à l'accusatif (exception après illā) de la racine r-m-z. Le sens premier est « faire signe ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le ramz désigne un signe fait par les lèvres, les sourcils, les yeux ou les mains — une communication qui passe par le corps et non par la voix. La construction illā ramzan (sauf par gestes) est la seule exception au silence imposé. On traduit par « par gestes ».

**uḏkur** (rappelle) est un verbe à l'impératif de la racine dh-k-r. Le sens premier est « se souvenir, mentionner, rappeler ». Le dhikr combine la mémoire intérieure (garder en conscience) et la mention extérieure (prononcer le nom). Suivi de rabbaka (ton Seigneur) comme objet et de kathīran (abondamment) comme adverbe, il exhorte Zacharie à garder son Seigneur présent dans sa conscience de manière constante. On traduit par « rappelle ».

**rabbaka** (ton Seigneur) est le même nom r-b-b, cette fois à l'accusatif (complément d'objet du verbe uḏkur) avec le pronom possessif ka (ton). On traduit par « ton Seigneur ».

**sabbiḥ** (glorifie) est un verbe à l'impératif de la forme II (intensive) de la racine s-b-ḥ. Le sens premier de la racine est « nager, se mouvoir dans un milieu ». Par extension, la forme II sabbaha signifie « proclamer la transcendance » — déclarer que Dieu est au-dessus de toute imperfection, comme s'Il « nageait » au-dessus de tout ce qui existe. Le texte ne précise pas d'objet explicite après sabbiḥ — le complément (Dieu) est sous-entendu par le contexte immédiat (rappelle ton Seigneur). On traduit par « glorifie ».

**al-ʿashiyyi** (le soir) est un nom défini au génitif (complément de temps, précédé de la préposition bi qui indique le moment) de la racine ʿ-sh-w. Le sens premier de la racine renvoie à l'obscurité du crépuscule et à la faiblesse de la vue au coucher du soleil. Le ʿashiyy désigne la période du soir, du déclin du soleil jusqu'à la nuit. On traduit par « le soir ».

**al-ibkāri** (le matin) est un nom défini au génitif (complément de temps, coordonné au précédent) de la racine b-k-r. Le sens premier est « aller tôt le matin, le début du jour ». al-ibkār est le nom verbal de la forme IV qui désigne la période de l'aube jusqu'au lever du soleil. Ensemble, « le soir et le matin » couvrent les deux extrémités de la journée — les moments de transition entre lumière et obscurité. On traduit par « le matin ».

§JUSTIFICATION§
**dire** — Le sens retenu est « dire » de la racine q-w-l. Le mot « dire » est choisi car il est le plus direct pour introduire un discours rapporté. L'alternative « parler » est écartée car elle ne convient pas avec le discours direct entre guillemets.

**seigneur** — Le sens retenu est « seigneur » de la racine r-b-b. Le mot « seigneur » est choisi car il exprime l'autorité bienveillante dans une demande respectueuse. L'alternative « maître » est écartée car plus froide.

**accorde-moi** — Le sens retenu est « faire » de la racine j-ʿ-l. Le mot « accorde-moi » est choisi car la construction ij'al lī (fais pour moi) se traduit naturellement par « accorde-moi » en français courant. L'alternative « fais-moi » est écartée car « fais-moi un signe » signifie en français « fais un geste de la main vers moi ». L'alternative « place pour moi » est écartée car trop littérale.

**signe** — Le sens retenu est « signe » de la racine '-y-t. Le mot « signe » est choisi car il désigne une manifestation visible qui confirme une réalité. L'alternative « miracle » est écartée car elle ajoute une dimension surnaturelle non précisée par le texte. L'alternative « verset » est écartée car le contexte n'est pas celui d'un texte récité.

**parler** — Le sens retenu est « parler » de la racine k-l-m. Le mot « parler » est choisi car la forme II tukallima signifie « adresser la parole ». L'alternative « blesser » est écartée car c'est l'autre registre de sens de la racine, sans rapport avec ce contexte.

**gens** — Le sens retenu est « gens » de la racine n-w-s. Le mot « gens » est choisi car il est le plus courant en français. L'alternative « peuple » est écartée car elle implique une communauté organisée.

**trois** — Le sens retenu est « trois » de la racine th-l-th. Pas d'alternative pertinente.

**jour** — Le sens retenu est « jour » de la racine y-w-m. Le mot « jour » est choisi car il désigne la période de 24 heures. L'alternative « période » est écartée car trop vague.

**gestes** — Le sens retenu est « faire signe » de la racine r-m-z, traduit par « gestes » car le nom ramzan désigne l'acte de communication non verbale. L'alternative « symboles » est écartée car trop abstraite. L'alternative « allusions » est écartée car elle est plus mentale que corporelle.

**rappelle** — Le sens retenu est « mentionner » de la racine dh-k-r, traduit par « rappelle » car ce mot combine la mémoire intérieure et la mention extérieure. L'alternative « invoque » est écartée car elle ajoute une dimension de supplication (demande) qui vient de la racine d-ʿ-w, pas de dh-k-r. L'alternative « souviens-toi de » est écartée car elle est intransitive en contexte avec un objet direct.

**glorifie** — Le sens retenu est « glorifier » de la racine s-b-ḥ. Le mot « glorifie » est choisi car la forme II sabbaha exprime l'acte de proclamer la transcendance de Dieu. L'alternative « nage » est écartée car c'est le sens physique premier, incompatible avec le contexte spirituel. L'alternative « loue » est écartée car elle est trop proche du sens de ḥamd (louange) et ne capture pas la spécificité du tasbīḥ (proclamation de pureté).

**soir** — Le sens retenu est « soir » de la racine ʿ-sh-w. Le mot « soir » est choisi car il désigne la période du crépuscule. L'alternative « nuit » est écartée car la racine désigne le début de l'obscurité, pas la nuit complète.

**matin** — Le sens retenu est « matin » de la racine b-k-r. Le mot « matin » est choisi car il couvre la période du début du jour. L'alternative « aube » est écartée car elle est plus restrictive (première lueur seulement).

§CRITIQUE§
**rappelle vs invoque** : les traductions courantes donnent « invoque » pour uḏkur (Hamidullah : « Invoque beaucoup ton Seigneur »). Or uḏkur vient de la racine dh-k-r qui signifie « se souvenir, mentionner, rappeler ». L'invocation (du'ā', de la racine d-ʿ-w) est un acte de supplication — on demande quelque chose à Dieu. Le rappel (dhikr) est un acte de conscience — on garde Dieu présent dans sa mémoire et on Le mentionne. Traduire par « invoque » transforme un acte de conscience permanente en un acte ponctuel de supplication, ce qui change la nature de l'exhortation.

Par ailleurs, les traductions courantes ajoutent « Ô » devant « mon Seigneur » et le pronom « -Le » après « glorifie », qui ne sont pas explicitement dans le texte arabe. Ces ajouts sont des conventions stylistiques et ne changent pas le sens global du verset.`;

  // Build display segments
  const displaySegments = [
    {fr:'il dit', pos:'verbe', phon:'qāla', arabic:'قَالَ', word_key:'qwl', is_particle:false, sense_retenu:'dire', position:1},
    {fr:'mon Seigneur', pos:'nom', phon:'rabbī', arabic:'رَبِّ', word_key:'rbb', is_particle:false, sense_retenu:'seigneur', position:2},
    {fr:'accorde-moi', pos:'verbe', phon:"ij'al", arabic:'ٱجْعَل', word_key:'jel', is_particle:false, sense_retenu:'faire', position:3},
    {fr:'pour moi', phon:'lī', arabic:'لِّىٓ', is_particle:true, position:4},
    {fr:'un signe', pos:'nom', phon:'āyatan', arabic:'ءَايَةً', word_key:'a y t', is_particle:false, sense_retenu:'signe', position:5},
    {fr:'il dit', pos:'verbe', phon:'qāla', arabic:'قَالَ', word_key:'qwl', is_particle:false, sense_retenu:'dire', position:6},
    {fr:'ton signe', pos:'nom', phon:'āyatuka', arabic:'ءَايَتُكَ', word_key:'a y t', is_particle:false, sense_retenu:'signe', position:7},
    {fr:'que ne pas', phon:'allā', arabic:'أَلَّا', is_particle:true, position:8},
    {fr:'tu parles', pos:'verbe', phon:'tukallima', arabic:'تُكَلِّمَ', word_key:'klm', is_particle:false, sense_retenu:'parler', position:9},
    {fr:'les gens', pos:'nom', phon:'an-nāsa', arabic:'ٱلنَّاسَ', word_key:'nws', is_particle:false, sense_retenu:'gens', position:10},
    {fr:'trois', pos:'nom', phon:'thalāthata', arabic:'ثَلَـٰثَةَ', word_key:'thlth', is_particle:false, sense_retenu:'trois', position:11},
    {fr:'jours', pos:'nom', phon:'ayyāmin', arabic:'أَيَّامٍ', word_key:'ywm', is_particle:false, sense_retenu:'jour', position:12},
    {fr:'sauf', phon:'illā', arabic:'إِلَّا', is_particle:true, position:13},
    {fr:'par gestes', pos:'nom', phon:'ramzan', arabic:'رَمْزًا', word_key:'rmz', is_particle:false, sense_retenu:'faire signe', position:14},
    {fr:'et', phon:'wa', arabic:'وَ', is_particle:true, position:15},
    {fr:'rappelle', pos:'verbe', phon:'uḏkur', arabic:'ٱذْكُر', word_key:'ḏkr', is_particle:false, sense_retenu:'mentionner', position:16},
    {fr:'ton Seigneur', pos:'nom', phon:'rabbaka', arabic:'رَّبَّكَ', word_key:'rbb', is_particle:false, sense_retenu:'seigneur', position:17},
    {fr:'abondamment', phon:'kathīran', arabic:'كَثِيرًا', is_particle:true, position:18},
    {fr:'et', phon:'wa', arabic:'وَ', is_particle:true, position:19},
    {fr:'glorifie', pos:'verbe', phon:'sabbiḥ', arabic:'سَبِّحْ', word_key:'sbh', is_particle:false, sense_retenu:'glorifier', position:20},
    {fr:'au', phon:'bi', arabic:'بِ', is_particle:true, position:21},
    {fr:'le soir', pos:'nom', phon:'al-ʿashiyyi', arabic:'ٱلْعَشِىِّ', word_key:'eshw', is_particle:false, sense_retenu:'soir', position:22},
    {fr:'et', phon:'wa', arabic:'وَ', is_particle:true, position:23},
    {fr:'le matin', pos:'nom', phon:'al-ibkāri', arabic:'ٱلْإِبْكَـٰرِ', word_key:'bkr', is_particle:false, sense_retenu:'matin', position:24}
  ];

  const {error:trE} = await sb.from('verse_analyses').update({
    full_translation: fullTranslation,
    translation_arab: translationArab,
    translation_explanation: translationExplanation,
    segments: displaySegments
  }).eq('id', 697);
  if(trE) console.log('Translation ERROR:', trE.message); else console.log('Translation save: OK');

  // =============================================
  // 6. DAILY PHRASES
  // =============================================
  console.log('\n--- 6. Daily phrases ---');
  const rootsToCheck = [
    {name:'qwl',aid:307},{name:'rbb',aid:253},{name:'jel',aid:359},{name:'a y t',aid:2326},
    {name:'klm',aid:478},{name:'nws',aid:303},{name:'thlth',aid:734},{name:'ywm',aid:257},
    {name:'rmz',aid:1272},{name:'ḏkr',aid:1159},{name:'sbh',aid:440},{name:'eshw',aid:1273},
    {name:'bkr',aid:619}
  ];
  for(const r of rootsToCheck) {
    const {count} = await sb.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id',r.aid);
    if(count > 0) console.log(r.name+' (aid='+r.aid+'): '+count+' phrases → SKIP');
    else console.log(r.name+' (aid='+r.aid+'): 0 phrases → INSERT');
  }

  // Insert daily phrases for: thlth(734), rmz(1272), ḏkr(1159), eshw(1273)
  const dailyPhrases = [
    // thlth — trois
    {analysis_id:734, sense:'trois', arabic:'ثَلَاثَة', phon:'thalātha',
      french:"J'ai trois frères et deux sœurs."},
    {analysis_id:734, sense:'trois', arabic:'ثَلَاثَة', phon:'thalātha',
      french:"Il reste trois jours avant les vacances."},
    {analysis_id:734, sense:'trois', arabic:'ثَلَاثَة', phon:'thalātha',
      french:"On se retrouve à trois heures devant le café."},
    // rmz — faire signe
    {analysis_id:1272, sense:'faire signe', arabic:'رَمْز', phon:'ramz',
      french:"Elle m'a fait signe de la main pour que je vienne."},
    {analysis_id:1272, sense:'faire signe', arabic:'رَمْز', phon:'ramz',
      french:"Le code postal est un symbole qui identifie chaque ville."},
    {analysis_id:1272, sense:'faire signe', arabic:'رَمْز', phon:'ramz',
      french:"Il a fait un geste discret pour attirer mon attention."},
    // ḏkr — mentionner/rappeler
    {analysis_id:1159, sense:'mentionner', arabic:'ذِكْر', phon:'dhikr',
      french:"Il a mentionné ton nom pendant la réunion."},
    {analysis_id:1159, sense:'se souvenir', arabic:'ذِكْر', phon:'dhikr',
      french:"Je me souviens très bien de cette journée."},
    {analysis_id:1159, sense:'rappel', arabic:'ذِكْر', phon:'dhikr',
      french:"Merci pour le rappel, j'avais oublié le rendez-vous."},
    // eshw — soir
    {analysis_id:1273, sense:'soir', arabic:'عَشِيّ', phon:'ʿashiyy',
      french:"On se retrouve ce soir pour dîner."},
    {analysis_id:1273, sense:'soir', arabic:'عَشِيّ', phon:'ʿashiyy',
      french:"Le coucher de soleil ce soir était magnifique."},
    {analysis_id:1273, sense:'soir', arabic:'عَشِيّ', phon:'ʿashiyy',
      french:"Tous les soirs, il fait une promenade dans le parc."}
  ];
  const {error:dailyE} = await sb.from('word_daily').insert(dailyPhrases);
  if(dailyE) console.log('Daily ERROR:', dailyE.message); else console.log('Daily insert:', dailyPhrases.length, 'phrases OK');

  // =============================================
  // 7. VERIFICATION
  // =============================================
  console.log('\n--- 7. Vérification finale ---');

  const {data:finalVA} = await sb.from('verse_analyses').select('segments,full_translation,translation_arab,translation_explanation').eq('id',697).single();
  const finalSegs = finalVA.segments;
  const finalImp = finalSegs.filter(s=>!s.is_particle);
  const finalPar = finalSegs.filter(s=>s.is_particle);
  console.log('Segments:', finalImp.length, 'important,', finalPar.length, 'particle,', finalSegs.length, 'total');

  const {data:finalVWA} = await sb.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id',334).order('position');
  console.log('VWA:', finalVWA.length, 'entries');
  for(const v of finalVWA) console.log('  pos='+v.position, v.word_key, '→', v.sense_chosen);

  const vwaPos = finalVWA.map(v=>v.position).sort((a,b)=>a-b);
  const segImportantPos = finalImp.map(s=>s.position).sort((a,b)=>a-b);
  console.log('Positions match:', JSON.stringify(vwaPos) === JSON.stringify(segImportantPos) ? 'OK' : 'MISMATCH!');
  if(JSON.stringify(vwaPos) !== JSON.stringify(segImportantPos)) {
    console.log('  VWA:', vwaPos);
    console.log('  Seg:', segImportantPos);
  }

  console.log('full_translation:', finalVA.full_translation ? 'OK' : 'MISSING');
  console.log('translation:', finalVA.translation_arab ? 'OK' : 'MISSING');
  console.log('explanation:', finalVA.translation_explanation ? 'OK ('+finalVA.translation_explanation.length+' chars)' : 'MISSING');

  console.log('\n=== PIPELINE S3:V41 TERMINÉE ===');
  console.log('\nVERSET 3:41 — TERMINÉ');
  for(const v of finalVWA) console.log('  '+v.word_key+' → sens "'+v.sense_chosen+'"');
  console.log('Traduction : "'+finalVA.translation_arab+'"');
})();
