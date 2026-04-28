const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // =============================================
  // 1. SHY (aid=466) — ش ي أ — Enrichir de 4 à ~15 sens
  // =============================================
  console.log('\n=== ENRICHISSEMENT shy (aid=466) ===');

  // Update description of existing first senses
  await db.from('word_meanings').update({
    description: "Ce qui peut être connu et dont on peut dire quelque chose. La chose est le concept le plus fondamental de l'existence — tout ce qui est, est une chose. Le Lane's définit shayʾ comme « ce qui peut être connu, et dont on peut prédiquer quelque chose ». C'est une réalité permanente et non directionnelle."
  }).eq('id', 5531);

  await db.from('word_meanings').update({
    description: "Absence totale de chose, négation absolue de l'être. Le néant est le contraire de la chose — c'est le vide absolu. C'est un état permanent et non directionnel."
  }).eq('id', 5533);

  await db.from('word_meanings').update({
    description: "Acte intérieur de diriger son intention vers un objet. La volonté (mashīʾa) est un mouvement de l'âme vers quelque chose qu'elle veut voir exister. C'est un état intérieur — on veut activement et continuellement tant que le désir n'est pas accompli. Le Lane's donne shāʾahu : « il l'a voulu, souhaité, désiré »."
  }).eq('id', 5534);

  // Add new senses to existing concepts
  const shyNew = [
    // Volonté — add
    {analysis_id:466, concept:'Volonté', sense:'désirer', description:"Éprouver un élan vers quelque chose qu'on veut obtenir.", meaning_type:'etymology', display_order:5},
    {analysis_id:466, concept:'Volonté', sense:'souhaiter', description:"", meaning_type:'etymology', display_order:6},
    {analysis_id:466, concept:'Volonté', sense:'volonté (mashīʾa)', description:"Nom d'action : la volonté elle-même comme faculté.", meaning_type:'etymology', display_order:7},
    // Chose/Être — add
    {analysis_id:466, concept:'Chose/Être', sense:'être', description:"Exister en tant que réalité.", meaning_type:'etymology', display_order:8},
    {analysis_id:466, concept:'Chose/Être', sense:'existence', description:"Le fait d'être, la réalité de ce qui est.", meaning_type:'etymology', display_order:9},
    // Incitation/Contrainte — NEW concept
    {analysis_id:466, concept:'Incitation/Contrainte', sense:'inciter', description:"Acte extérieur dirigé vers autrui pour le faire agir. L'incitation sort de celui qui pousse et atteint celui qui est poussé. Le Lane's donne shayyaʾa (forme II) : « il l'a incité, l'a poussé à faire la chose ». C'est un acte ponctuel et directionnel — on force quelqu'un vers quelque chose.", meaning_type:'etymology', display_order:10},
    {analysis_id:466, concept:'Incitation/Contrainte', sense:'contraindre', description:"Forcer quelqu'un à recourir à quelque chose.", meaning_type:'etymology', display_order:11},
    {analysis_id:466, concept:'Incitation/Contrainte', sense:'forcer', description:"Le Lane's donne ashāʾahu (forme IV) : « il l'a contraint, forcé à recourir à cela ».", meaning_type:'etymology', display_order:12},
    // Difformité/Laideur — NEW concept
    {analysis_id:466, concept:'Difformité/Laideur', sense:'rendre laid', description:"État extérieur de celui dont la forme est incongruente ou repoussante. Le Lane's donne shayyaʾa llāhu wajhahu (forme II) : « Dieu a rendu son visage laid ». La difformité est un défaut visible — elle affecte le regard de celui qui observe. C'est un état permanent.", meaning_type:'etymology', display_order:13},
    {analysis_id:466, concept:'Difformité/Laideur', sense:'être mal formé', description:"Le Lane's donne mushayyaʾ : « incongruent, mal formé, laid dans sa constitution ».", meaning_type:'etymology', display_order:14},
    // Apaisement — NEW concept
    {analysis_id:466, concept:'Apaisement', sense:"s'apaiser", description:"Mouvement intérieur de retour au calme après une agitation. Le Lane's donne tashayyaʾa (forme V) : « sa colère s'est apaisée ». L'apaisement est une transformation d'état — la colère descend et la personne retrouve son équilibre. C'est un processus ponctuel et intérieur.", meaning_type:'etymology', display_order:15},
  ];

  const {error:shyErr} = await db.from('word_meanings').insert(shyNew);
  console.log('shy: inserted', shyNew.length, 'new senses', shyErr ? 'ERROR: '+shyErr.message : 'OK');

  // =============================================
  // 2. NZA (aid=1248) — ن ز ع — Enrichir de 4 à ~18 sens
  // =============================================
  console.log('\n=== ENRICHISSEMENT nza (aid=1248) ===');

  // Update existing descriptions
  await db.from('word_meanings').update({
    description: "Acte extérieur de séparer par la force ce qui était attaché ou en place. L'arrachement sort de celui qui tire et atteint l'objet qui est retiré. Le Lane's donne nazaʿa : « il a tiré, arraché, retiré de sa place, déplacé ». C'est un acte ponctuel, directionnel et physique — on tire quelque chose vers soi ou hors de son lieu."
  }).eq('id', 9805);

  // Rename "Sens isolé/Tenter" to "Aspiration/Nostalgie" and update
  await db.from('word_meanings').update({
    concept: 'Aspiration/Nostalgie',
    sense: 'aspirer à',
    description: "Mouvement intérieur de l'âme vers ce qui lui manque. L'aspiration est un élan émotionnel profond qui attire la personne vers sa famille, son origine, ou ce qu'elle aime. Le Lane's donne nazaʿa ilā ahlih : « il a aspiré à, désiré ardemment sa famille ». C'est un état intérieur durable — on languit continuellement."
  }).eq('id', 9808);

  const nzaNew = [
    // Arrachement/Extraction — add
    {analysis_id:1248, concept:'Arrachement/Extraction', sense:'extraire', description:"Tirer hors de. Le Lane's donne nazaʿa thawbahu : « il a retiré son vêtement ».", meaning_type:'etymology', display_order:5},
    {analysis_id:1248, concept:'Arrachement/Extraction', sense:'dépouiller', description:"Ôter ce qui recouvre ou habille.", meaning_type:'etymology', display_order:6},
    {analysis_id:1248, concept:'Arrachement/Extraction', sense:'enlever de force', description:"Retirer par la contrainte ce qui appartenait à un autre.", meaning_type:'etymology', display_order:7},
    // Aspiration/Nostalgie — add (existing sense renamed, add more)
    {analysis_id:1248, concept:'Aspiration/Nostalgie', sense:'languir', description:"Éprouver un désir douloureux de ce qui est absent.", meaning_type:'etymology', display_order:8},
    {analysis_id:1248, concept:'Aspiration/Nostalgie', sense:'nostalgie', description:"Le Lane's donne nuzūʿ et nizāʿ comme noms d'action : « aspiration, inclination naturelle ».", meaning_type:'etymology', display_order:9},
    {analysis_id:1248, concept:'Aspiration/Nostalgie', sense:'incliner vers', description:"Pencher naturellement vers quelque chose ou quelqu'un.", meaning_type:'etymology', display_order:10},
    // Dispute/Contestation — NEW concept
    {analysis_id:1248, concept:'Dispute/Contestation', sense:'disputer', description:"Acte extérieur réciproque où deux parties tirent en sens opposés. Le Lane's donne nāzaʿahu (forme III) : « il a disputé avec lui, contesté ». La dispute est un arrachement mutuel — chacun veut prendre ce que l'autre tient. C'est un acte extérieur, réciproque et continu.", meaning_type:'etymology', display_order:11},
    {analysis_id:1248, concept:'Dispute/Contestation', sense:'contester', description:"Refuser de laisser à l'autre ce qu'il revendique.", meaning_type:'etymology', display_order:12},
    {analysis_id:1248, concept:'Dispute/Contestation', sense:'arracher un droit', description:"Le Lane's donne intazaʿa minhu haqqahu (forme VIII) : « il lui a arraché son droit ».", meaning_type:'etymology', display_order:13},
    // Agonie/Mort — NEW concept
    {analysis_id:1248, concept:'Agonie/Mort', sense:'agoniser', description:"Moment où l'âme est arrachée du corps. L'agonie est l'extraction ultime — la vie est retirée de force. Le Lane's donne nazaʿa : « il était à l'article de la mort, c'est-à-dire au moment où son âme est tirée hors de lui ». C'est un événement ponctuel et irréversible.", meaning_type:'etymology', display_order:14},
    {analysis_id:1248, concept:'Agonie/Mort', sense:'rendre l\'âme', description:"L'acte final de l'extraction de l'âme hors du corps.", meaning_type:'etymology', display_order:15},
    // Ressemblance/Hérédité — NEW concept
    {analysis_id:1248, concept:'Ressemblance/Hérédité', sense:'ressembler à ses ancêtres', description:"Tendance naturelle à revenir vers ses racines ancestrales. Le Lane's donne nazaʿa ilā abīhi : « il a ressemblé à son père, il a incliné vers son père en ressemblance ». La ressemblance est un arrachement doux — la nature tire la personne vers les qualités de ses ancêtres.", meaning_type:'etymology', display_order:16},
    {analysis_id:1248, concept:'Ressemblance/Hérédité', sense:'hériter d\'un trait', description:"Recevoir par nature une qualité ancestrale.", meaning_type:'etymology', display_order:17},
    // Tir/Arc — NEW concept
    {analysis_id:1248, concept:'Tir/Arc', sense:'tirer l\'arc', description:"Acte physique de tirer la corde d'un arc. Le Lane's donne nazaʿa fī l-qaws : « il a tiré l'arc, c'est-à-dire sa corde ». Le tir est un arrachement contrôlé — on tire la corde vers soi avant de libérer la flèche. C'est un acte ponctuel et directionnel.", meaning_type:'etymology', display_order:18},
  ];

  const {error:nzaErr} = await db.from('word_meanings').insert(nzaNew);
  console.log('nza: inserted', nzaNew.length, 'new senses', nzaErr ? 'ERROR: '+nzaErr.message : 'OK');

  // =============================================
  // 3. DHL (aid=1249) — ذ ل ل — Restructurer et enrichir de 3 à ~18 sens
  // =============================================
  console.log('\n=== ENRICHISSEMENT dhl (aid=1249) ===');

  // Restructure existing senses
  // "être humble" → "Avilissement/Humiliation" (car le sens primaire de dhalla est être bas/vil)
  await db.from('word_meanings').update({
    concept: 'Avilissement/Humiliation',
    description: "État de celui qui est tombé au plus bas dans la considération. L'avilissement est un état extérieur et visible — la personne est rabaissée aux yeux des autres. Le Lane's donne dhalla : « il était, ou devint, bas, vil, abject, méprisable, humilié et faible ». C'est le contraire exact de ʿazza (puissance/gloire). C'est un état durable qui affecte la position et la dignité."
  }).eq('id', 9809);

  await db.from('word_meanings').update({
    concept: 'Avilissement/Humiliation',
    description: "Accepter la position basse imposée par un autre."
  }).eq('id', 9810);

  // "être docile" → "Douceur/Docilité"
  await db.from('word_meanings').update({
    concept: 'Douceur/Docilité',
    description: "État de celui qui se laisse guider sans résistance. La docilité est un état intérieur positif — l'animal dressé est docile, le chemin aplani est facile. Le Lane's distingue dhull (avec kasra) : « facilité, docilité, soumission, maniabilité ». Ce n'est PAS un avilissement — la douceur est une qualité, pas une déficience. Le Coran utilise ce sens dans adh-dhillatu ʿalā l-muʾminīn (5:54) : « doux envers les croyants »."
  }).eq('id', 9811);

  const dhlNew = [
    // Avilissement/Humiliation — add
    {analysis_id:1249, concept:'Avilissement/Humiliation', sense:'être vil', description:"Être dans l'état le plus bas de la considération.", meaning_type:'etymology', display_order:4},
    {analysis_id:1249, concept:'Avilissement/Humiliation', sense:'être bas', description:"Occuper la position la plus basse.", meaning_type:'etymology', display_order:5},
    {analysis_id:1249, concept:'Avilissement/Humiliation', sense:'être méprisable', description:"Susciter le mépris des autres.", meaning_type:'etymology', display_order:6},
    {analysis_id:1249, concept:'Avilissement/Humiliation', sense:'être faible', description:"Le Lane's donne haana et daʿufa comme synonymes de dhalla.", meaning_type:'etymology', display_order:7},
    {analysis_id:1249, concept:'Avilissement/Humiliation', sense:'abaisser', description:"Faire descendre quelqu'un de sa position. Le Lane's donne adhhallahu (forme IV) : « il l'a abaissé, rabaissé, humilié, rendu faible ».", meaning_type:'etymology', display_order:8},
    {analysis_id:1249, concept:'Avilissement/Humiliation', sense:'humilier', description:"Infliger à quelqu'un l'expérience de sa bassesse.", meaning_type:'etymology', display_order:9},
    // Douceur/Docilité — add
    {analysis_id:1249, concept:'Douceur/Docilité', sense:'être doux', description:"Le Lane's donne dhillatun ʿalā l-muʾminīn : « doux et miséricordieux envers les croyants ».", meaning_type:'etymology', display_order:10},
    {analysis_id:1249, concept:'Douceur/Docilité', sense:'être maniable', description:"Se laisser conduire facilement, sans résistance.", meaning_type:'etymology', display_order:11},
    {analysis_id:1249, concept:'Douceur/Docilité', sense:'être souple', description:"Absence de rigidité — la souplesse permet la coopération.", meaning_type:'etymology', display_order:12},
    // Apprivoisement/Dressage — NEW concept
    {analysis_id:1249, concept:'Apprivoisement/Dressage', sense:'apprivoiser', description:"Acte extérieur de rendre un être sauvage maniable. Le Lane's donne dhallala (forme II) : « il a rendu facile, docile, soumis — un homme ou un animal ». L'apprivoisement sort du dresseur et atteint l'animal. C'est un processus directionnel — on transforme un être résistant en un être coopératif. Le résultat est la docilité, pas l'avilissement.", meaning_type:'etymology', display_order:13},
    {analysis_id:1249, concept:'Apprivoisement/Dressage', sense:'dresser', description:"Rendre un animal obéissant par l'entraînement.", meaning_type:'etymology', display_order:14},
    {analysis_id:1249, concept:'Apprivoisement/Dressage', sense:'soumettre', description:"Amener quelqu'un ou quelque chose sous contrôle.", meaning_type:'etymology', display_order:15},
    // Facilitation/Aplanissement — NEW concept
    {analysis_id:1249, concept:'Facilitation/Aplanissement', sense:'aplanir', description:"Acte de rendre un chemin ou une chose praticable. Le Lane's donne dhallala (forme II) comme « battre, fouler un chemin pour le rendre uni, facile à parcourir ». L'aplanissement est un acte extérieur et physique — on rend la chose accessible, on la met à portée.", meaning_type:'etymology', display_order:16},
    {analysis_id:1249, concept:'Facilitation/Aplanissement', sense:'faciliter', description:"Rendre aisé ce qui était difficile.", meaning_type:'etymology', display_order:17},
    {analysis_id:1249, concept:'Facilitation/Aplanissement', sense:'rendre accessible', description:"Mettre à la portée de tous — les fruits sont abaissés pour être cueillis (mudhalal).", meaning_type:'etymology', display_order:18},
  ];

  const {error:dhlErr} = await db.from('word_meanings').insert(dhlNew);
  console.log('dhl: inserted', dhlNew.length, 'new senses', dhlErr ? 'ERROR: '+dhlErr.message : 'OK');

  // =============================================
  // 4. YDY (aid=597) — ي د ي — Restructurer et enrichir de 4 à ~18 sens
  // =============================================
  console.log('\n=== ENRICHISSEMENT ydy (aid=597) ===');

  // Restructure existing senses
  // "main" → "Main/Corps"
  await db.from('word_meanings').update({
    concept: 'Main/Corps',
    description: "Membre physique du corps qui va de l'épaule aux extrémités des doigts. La main est l'instrument premier de l'action humaine — c'est par elle qu'on saisit, frappe, donne. Le Lane's donne yad : « le bras, de l'articulation de l'épaule aux extrémités des doigts ». C'est une réalité physique permanente et concrète."
  }).eq('id', 6820);

  // "pouvoir" → "Pouvoir/Autorité"
  await db.from('word_meanings').update({
    concept: 'Pouvoir/Autorité',
    description: "Extension métaphorique de la main vers la notion de contrôle. Le Lane's donne tahta yadihi : « sous son autorité ». Avoir quelqu'un « sous sa main » c'est avoir autorité sur lui. Le pouvoir est un état durable — celui qui a la main a le commandement."
  }).eq('id', 6821);

  // "bienfait" → "Bienfait/Générosité"
  await db.from('word_meanings').update({
    concept: 'Bienfait/Générosité',
    description: "Ce que la main donne. Le Lane's donne yad : « générosité » et li-fulānin ʿindī yad : « je dois à untel un bienfait ». Le bienfait est ce qui sort de la main ouverte vers autrui — c'est un acte directionnel de celui qui possède vers celui qui reçoit."
  }).eq('id', 6822);

  // "devant" → "Antériorité/Présence"
  await db.from('word_meanings').update({
    concept: 'Antériorité/Présence',
    description: "Ce qui est entre les mains = ce qui est devant, présent, immédiat. L'antériorité spatiale (devant soi) et temporelle (auparavant) dérive de la position de la main — ce qui est à portée de main est ce qui est proche et présent."
  }).eq('id', 6823);

  const ydyNew = [
    // Main/Corps — add
    {analysis_id:597, concept:'Main/Corps', sense:'bras', description:"Le membre entier de l'épaule aux doigts.", meaning_type:'etymology', display_order:5},
    {analysis_id:597, concept:'Main/Corps', sense:'patte avant', description:"La patte antérieure d'un animal (cheval etc.).", meaning_type:'etymology', display_order:6},
    // Pouvoir/Autorité — add
    {analysis_id:597, concept:'Pouvoir/Autorité', sense:'autorité', description:"Le commandement exercé sur les autres.", meaning_type:'etymology', display_order:7},
    {analysis_id:597, concept:'Pouvoir/Autorité', sense:'emprise', description:"Le contrôle effectif sur quelqu'un ou quelque chose.", meaning_type:'etymology', display_order:8},
    {analysis_id:597, concept:'Pouvoir/Autorité', sense:'maîtrise', description:"La capacité de contrôler et diriger.", meaning_type:'etymology', display_order:9},
    // Bienfait/Générosité — add
    {analysis_id:597, concept:'Bienfait/Générosité', sense:'faveur', description:"Un acte de bonté envers quelqu'un.", meaning_type:'etymology', display_order:10},
    {analysis_id:597, concept:'Bienfait/Générosité', sense:'générosité', description:"Disposition permanente à donner. Le Lane's donne yad comme « générosité ».", meaning_type:'etymology', display_order:11},
    {analysis_id:597, concept:'Bienfait/Générosité', sense:'don', description:"Ce qui est offert librement.", meaning_type:'etymology', display_order:12},
    // Antériorité/Présence — add
    {analysis_id:597, concept:'Antériorité/Présence', sense:'immédiat', description:"Ce qui est dans la main = ce qui est prêt, comptant.", meaning_type:'etymology', display_order:13},
    {analysis_id:597, concept:'Antériorité/Présence', sense:'comptant', description:"Le Lane's donne yadan bi-yad : « en argent comptant, en paiement immédiat ».", meaning_type:'etymology', display_order:14},
    // Moyen/Instrument — NEW concept
    {analysis_id:597, concept:'Moyen/Instrument', sense:'par le moyen de', description:"La main comme outil par lequel on agit. Le Lane's donne ʿalā yadihi : « par son agence, par son moyen ». Le moyen est la main qui exécute — c'est le canal par lequel l'action passe d'un agent à un résultat. C'est un concept instrumental et directionnel.", meaning_type:'etymology', display_order:15},
    {analysis_id:597, concept:'Moyen/Instrument', sense:'intermédiaire', description:"Celui par les mains duquel l'action est accomplie.", meaning_type:'etymology', display_order:16},
    // Soumission/Reconnaissance — NEW concept
    {analysis_id:597, concept:'Soumission/Reconnaissance', sense:'obéissance', description:"Donner « de sa main » c'est reconnaître la supériorité de celui qui reçoit. Le Lane's donne aʿṭāhu ʿan yad : « il l'a donné en reconnaissance de la supériorité du receveur, ou par soumission ». La soumission est un acte extérieur où la main se tend vers le haut — celui qui paie reconnaît l'autorité.", meaning_type:'etymology', display_order:17},
    {analysis_id:597, concept:'Soumission/Reconnaissance', sense:'reconnaissance de supériorité', description:"Accepter la prééminence d'un autre par un acte concret.", meaning_type:'etymology', display_order:18},
  ];

  const {error:ydyErr} = await db.from('word_meanings').insert(ydyNew);
  console.log('ydy: inserted', ydyNew.length, 'new senses', ydyErr ? 'ERROR: '+ydyErr.message : 'OK');

  // =============================================
  // VÉRIFICATION FINALE
  // =============================================
  console.log('\n=== VÉRIFICATION ===');
  for(const [key, aid] of [['shy',466],['nza',1248],['dhl',1249],['ydy',597]]) {
    const {data:senses} = await db.from('word_meanings').select('concept,sense').eq('analysis_id', aid).order('display_order');
    const concepts = [...new Set(senses.map(s=>s.concept))];
    console.log(`${key}: ${senses.length} sens, ${concepts.length} concepts — ${concepts.join(', ')}`);
  }

  // Fix llhm total_occurrences (was 0)
  await db.from('word_analyses').update({total_occurrences: 5}).eq('id', 1247);
  console.log('\nllhm: total_occurrences mis à 5');
}

run().catch(e => console.error(e));
