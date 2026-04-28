require('dotenv').config({path:'.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// ============================================================
// HELPERS
// ============================================================
async function upsertVWA(verse_id, word_key, analysis_id, analysis_axes, position) {
  const sense_chosen = analysis_axes.sense_chosen || null;
  // Delete existing first, then insert
  await sb.from('verse_word_analyses').delete().eq('verse_id', verse_id).eq('word_key', word_key);
  const {data,error} = await sb.from('verse_word_analyses')
    .insert({verse_id, word_key, sense_chosen, analysis_axes, position: position || 1})
    .select().single();
  if(error) throw new Error(`VWA ${verse_id}/${word_key}: ${error.message}`);
  return data;
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const {error} = await sb.from('word_daily').insert({analysis_id, sense, arabic, phon, french});
  if(error && !error.message.includes('duplicate')) console.log('  daily warning:', error.message);
}

async function updateVerse(verse_id, fields) {
  const {error} = await sb.from('verse_analyses').update(fields).eq('verse_id', verse_id);
  if(error) throw new Error(`verse_analyses ${verse_id}: ${error.message}`);
}

// ============================================================
// ÉTAPE 2 — CRÉATION DES RACINES MANQUANTES
// ============================================================
async function createMissingRoots() {
  console.log('\n====== ÉTAPE 2 — RACINES MANQUANTES ======\n');

  // --- ضبح (dbh) — soufflement haletant des chevaux ---
  {
    const {data:existing} = await sb.from('word_analyses').select('id').eq('word_key','dbh');
    if(!existing||existing.length===0){
      const {data:wa} = await sb.from('word_analyses').insert({
        word_key:'dbh', root_ar:'ض ب ح', root_phon:'ḍbḥ', total_occurrences:1
      }).select().single();
      const id = wa.id;
      console.log('[dbh] Créé id='+id);
      const senses = [
        {analysis_id:id, concept:'Souffle/Halètement', sense:'haleter', description:"Respiration haletante et bruyante des chevaux à la course. Le souffle sort de la poitrine et se fait entendre — c'est un acte extérieur, involontaire mais continu, qui accompagne l'effort physique intense. Le halètement est le signe sonore de l'énergie dépensée.", meaning_type:'etymology', display_order:1},
        {analysis_id:id, concept:'Souffle/Halètement', sense:'souffler bruyamment', description:'', meaning_type:'etymology', display_order:2},
        {analysis_id:id, concept:'Souffle/Halètement', sense:'respiration audible', description:'', meaning_type:'etymology', display_order:3},
        {analysis_id:id, concept:'Altération/Brûlure', sense:'altérer par le feu', description:"Changement de couleur ou d'état sous l'effet de la chaleur. L'altération est un processus extérieur et passif — la chose subit le feu et change. C'est un état résultatif, pas un acte volontaire.", meaning_type:'etymology', display_order:4},
        {analysis_id:id, concept:'Altération/Brûlure', sense:'noircir', description:'', meaning_type:'etymology', display_order:5},
        {analysis_id:id, concept:'Altération/Brûlure', sense:'cendre', description:'', meaning_type:'etymology', display_order:6},
        {analysis_id:id, concept:'Sens isolé/Conflit', sense:'s\'invectiver mutuellement', description:"Sens isolé sans lien direct avec les autres.", meaning_type:'etymology', display_order:7},
      ];
      await sb.from('word_meanings').insert(senses);
      console.log('[RACINE] dbh — 7 sens → 3 concepts');
      console.log('  Souffle/Halètement (3 sens)');
      console.log('  Altération/Brûlure (3 sens)');
      console.log('  Sens isolé/Conflit (1 sens)');
    } else { console.log('[dbh] Existe déjà, skip'); }
  }

  // --- قدح (qdh) — produire du feu par frottement ---
  {
    const {data:existing} = await sb.from('word_analyses').select('id').eq('word_key','qdh');
    if(!existing||existing.length===0){
      const {data:wa} = await sb.from('word_analyses').insert({
        word_key:'qdh', root_ar:'ق د ح', root_phon:'qdḥ', total_occurrences:1
      }).select().single();
      const id = wa.id;
      console.log('[qdh] Créé id='+id);
      const senses = [
        {analysis_id:id, concept:'Production de feu', sense:'produire du feu', description:"Acte de frapper deux éléments l'un contre l'autre pour faire jaillir une étincelle. La production de feu est un acte extérieur, ponctuel et directionnel — on frappe et le feu sort. C'est un geste créateur qui tire quelque chose d'invisible (le feu) d'une matière inerte (le bois ou la pierre).", meaning_type:'etymology', display_order:1},
        {analysis_id:id, concept:'Production de feu', sense:'faire jaillir des étincelles', description:'', meaning_type:'etymology', display_order:2},
        {analysis_id:id, concept:'Production de feu', sense:'frapper le briquet', description:'', meaning_type:'etymology', display_order:3},
        {analysis_id:id, concept:'Récipient/Contenance', sense:'coupe', description:"Récipient pour boire — contenant qui reçoit un liquide. La coupe est un objet passif qui accueille ce qu'on y verse.", meaning_type:'etymology', display_order:4},
        {analysis_id:id, concept:'Récipient/Contenance', sense:'louche', description:'', meaning_type:'etymology', display_order:5},
        {analysis_id:id, concept:'Corrosion/Atteinte', sense:'ronger', description:"Action lente et destructrice d'un ver ou d'un agent qui attaque de l'intérieur. La corrosion est un processus progressif et caché.", meaning_type:'etymology', display_order:6},
        {analysis_id:id, concept:'Corrosion/Atteinte', sense:'carie', description:'', meaning_type:'etymology', display_order:7},
        {analysis_id:id, concept:'Corrosion/Atteinte', sense:'blâmer', description:'', meaning_type:'etymology', display_order:8},
        {analysis_id:id, concept:'Flèche/Finesse', sense:'flèche', description:"Baguette taillée fine et droite. La flèche est un objet directionnel — elle va droit vers sa cible.", meaning_type:'etymology', display_order:9},
        {analysis_id:id, concept:'Flèche/Finesse', sense:'minceur', description:'', meaning_type:'etymology', display_order:10},
      ];
      await sb.from('word_meanings').insert(senses);
      console.log('[RACINE] qdh — 10 sens → 4 concepts');
    } else { console.log('[qdh] Existe déjà, skip'); }
  }

  // --- نقع (nqe) — poussière soulevée / eau stagnante ---
  {
    const {data:existing} = await sb.from('word_analyses').select('id').eq('word_key','nqe');
    if(!existing||existing.length===0){
      const {data:wa} = await sb.from('word_analyses').insert({
        word_key:'nqe', root_ar:'ن ق ع', root_phon:'nqʿ', total_occurrences:1
      }).select().single();
      const id = wa.id;
      console.log('[nqe] Créé id='+id);
      const senses = [
        {analysis_id:id, concept:'Poussière/Nuage', sense:'poussière soulevée', description:"Matière fine qui s'élève dans l'air suite à un mouvement violent. La poussière est le résultat visible d'un impact ou d'une course — elle monte et se répand. C'est un effet extérieur et passif qui témoigne d'une action.", meaning_type:'etymology', display_order:1},
        {analysis_id:id, concept:'Poussière/Nuage', sense:'nuage de poussière', description:'', meaning_type:'etymology', display_order:2},
        {analysis_id:id, concept:'Stagnation/Trempage', sense:'eau stagnante', description:"Eau qui reste immobile dans un creux et change de couleur. La stagnation est un état passif et prolongé — l'eau ne bouge plus, elle se transforme lentement.", meaning_type:'etymology', display_order:3},
        {analysis_id:id, concept:'Stagnation/Trempage', sense:'tremper', description:'', meaning_type:'etymology', display_order:4},
        {analysis_id:id, concept:'Stagnation/Trempage', sense:'infusion', description:'', meaning_type:'etymology', display_order:5},
        {analysis_id:id, concept:'Sens isolé/Poison', sense:'poison qui fait effet', description:"Sens isolé — poison qui se fixe et agit.", meaning_type:'etymology', display_order:6},
      ];
      await sb.from('word_meanings').insert(senses);
      console.log('[RACINE] nqe — 6 sens → 3 concepts');
    } else { console.log('[nqe] Existe déjà, skip'); }
  }

  // --- كند (knd) — ingratitude ---
  {
    const {data:existing} = await sb.from('word_analyses').select('id').eq('word_key','knd');
    if(!existing||existing.length===0){
      const {data:wa} = await sb.from('word_analyses').insert({
        word_key:'knd', root_ar:'ك ن د', root_phon:'knd', total_occurrences:1
      }).select().single();
      const id = wa.id;
      console.log('[knd] Créé id='+id);
      const senses = [
        {analysis_id:id, concept:'Ingratitude/Reniement', sense:'être ingrat', description:"État intérieur de celui qui reçoit un bienfait mais ne le reconnaît pas. L'ingratitude est un jugement intérieur — on nie ce qu'on a reçu. C'est un état permanent et volontaire, pas un acte ponctuel. L'ingrat efface le bienfait de sa mémoire ou de sa reconnaissance.", meaning_type:'etymology', display_order:1},
        {analysis_id:id, concept:'Ingratitude/Reniement', sense:'nier un bienfait', description:'', meaning_type:'etymology', display_order:2},
        {analysis_id:id, concept:'Ingratitude/Reniement', sense:'rebelle', description:'', meaning_type:'etymology', display_order:3},
        {analysis_id:id, concept:'Ingratitude/Reniement', sense:'avare', description:'', meaning_type:'etymology', display_order:4},
        {analysis_id:id, concept:'Ingratitude/Reniement', sense:'celui qui ne retient que le mal', description:'', meaning_type:'etymology', display_order:5},
        {analysis_id:id, concept:'Coupure/Séparation', sense:'couper', description:"Acte de séparer ce qui était lié. La coupure est un geste extérieur, ponctuel et directionnel.", meaning_type:'etymology', display_order:6},
        {analysis_id:id, concept:'Sens isolé/Géographie', sense:'portion de montagne', description:"Sens isolé sans rapport avec les autres.", meaning_type:'etymology', display_order:7},
      ];
      await sb.from('word_meanings').insert(senses);
      console.log('[RACINE] knd — 7 sens → 3 concepts');
    } else { console.log('[knd] Existe déjà, skip'); }
  }

  // --- بعثر (bevr) — retourner / exhumer ---
  {
    const {data:existing} = await sb.from('word_analyses').select('id').eq('word_key','bevr');
    if(!existing||existing.length===0){
      const {data:wa} = await sb.from('word_analyses').insert({
        word_key:'bevr', root_ar:'ب ع ث ر', root_phon:'bʿṯr', total_occurrences:2
      }).select().single();
      const id = wa.id;
      console.log('[bevr] Créé id='+id);
      const senses = [
        {analysis_id:id, concept:'Exhumation/Mise à jour', sense:'retourner', description:"Acte de tirer ce qui était enfoui et de le mettre à découvert. L'exhumation est un mouvement de l'intérieur vers l'extérieur — ce qui était caché sous terre est ramené à la surface. C'est un acte extérieur, directionnel, qui inverse l'enfouissement.", meaning_type:'etymology', display_order:1},
        {analysis_id:id, concept:'Exhumation/Mise à jour', sense:'exhumer', description:'', meaning_type:'etymology', display_order:2},
        {analysis_id:id, concept:'Exhumation/Mise à jour', sense:'mettre à jour', description:'', meaning_type:'etymology', display_order:3},
        {analysis_id:id, concept:'Exhumation/Mise à jour', sense:'faire sortir ce qui est enfoui', description:'', meaning_type:'etymology', display_order:4},
      ];
      await sb.from('word_meanings').insert(senses);
      console.log('[RACINE] bevr — 4 sens → 1 concept');
    } else { console.log('[bevr] Existe déjà, skip'); }
  }

  // --- حصل (hsl) — extraire / mettre en évidence ---
  {
    const {data:existing} = await sb.from('word_analyses').select('id').eq('word_key','hsl');
    if(!existing||existing.length===0){
      const {data:wa} = await sb.from('word_analyses').insert({
        word_key:'hsl', root_ar:'ح ص ل', root_phon:'ḥṣl', total_occurrences:2
      }).select().single();
      const id = wa.id;
      console.log('[hsl] Créé id='+id);
      const senses = [
        {analysis_id:id, concept:'Extraction/Tri', sense:'extraire', description:"Acte de séparer l'essentiel de l'accessoire — comme l'or de la pierre, le grain de la paille. L'extraction est un processus extérieur et directionnel qui révèle ce qui était mêlé ou caché. C'est un tri qui produit un résultat clair.", meaning_type:'etymology', display_order:1},
        {analysis_id:id, concept:'Extraction/Tri', sense:'trier', description:'', meaning_type:'etymology', display_order:2},
        {analysis_id:id, concept:'Extraction/Tri', sense:'mettre en évidence', description:'', meaning_type:'etymology', display_order:3},
        {analysis_id:id, concept:'Extraction/Tri', sense:'séparer le pur de l\'impur', description:'', meaning_type:'etymology', display_order:4},
        {analysis_id:id, concept:'Résultat/Acquisition', sense:'résultat', description:"Ce qui reste après le tri — le produit final, le bénéfice obtenu. Le résultat est un état final, passif, qui découle du processus d'extraction.", meaning_type:'etymology', display_order:5},
        {analysis_id:id, concept:'Résultat/Acquisition', sense:'récolte', description:'', meaning_type:'etymology', display_order:6},
        {analysis_id:id, concept:'Résultat/Acquisition', sense:'acquis', description:'', meaning_type:'etymology', display_order:7},
        {analysis_id:id, concept:'Sens isolé/Anatomie', sense:'jabot (oiseau)', description:"Sens isolé — partie anatomique de l'oiseau.", meaning_type:'etymology', display_order:8},
      ];
      await sb.from('word_meanings').insert(senses);
      console.log('[RACINE] hsl — 8 sens → 3 concepts');
    } else { console.log('[hsl] Existe déjà, skip'); }
  }

  console.log('\n✓ Racines manquantes créées\n');
}

// ============================================================
// ÉTAPE 3+4 — ANALYSE + TRADUCTION PAR VERSET
// ============================================================

// ---- VERSETS 100:1-5 — Le serment des coursiers ----
async function verse100_1_to_5() {
  console.log('\n====== VERSETS 100:1-5 ======\n');

  // Get analysis_ids for new roots
  const {data:dbhWA} = await sb.from('word_analyses').select('id').eq('word_key','dbh').single();
  const {data:qdhWA} = await sb.from('word_analyses').select('id').eq('word_key','qdh').single();
  const {data:nqeWA} = await sb.from('word_analyses').select('id').eq('word_key','nqe').single();
  const dbhId = dbhWA.id, qdhId = qdhWA.id, nqeId = nqeWA.id;

  // ---- edw (العاديات) — id=457 ----
  // Concepts: Hostilité/Inimitié, Course/Vitesse, Transgression/Excès
  const edwAxes = {
    sense_chosen: "coureuses",
    concept_chosen: "Course/Vitesse",
    concepts: {
      "Course/Vitesse": {
        status: "retenu",
        senses: ["courir"],
        proof_ctx: "Le sens retenu est « Course/Vitesse ». Le mot al-'ādiyāt est un participe actif féminin pluriel avec l'article défini — « celles qui courent ». La course est un mouvement actif, continu et directionnel. Le participe actif est compatible : ce sont des êtres qui font activement l'action de courir. La distinction avec « Hostilité/Inimitié » : l'hostilité est un état intérieur (sentiment), la course est un mouvement extérieur (action physique). Le verset décrit une scène physique (halètement, étincelles, poussière), pas un état émotionnel. La distinction avec « Transgression/Excès » : la transgression est un acte moral, la course est un acte physique. Le contexte (souffle, étincelles, aube) est physique, pas moral.",
        axe1_verset: "Le verset associe les coureuses à un halètement (dabhan). Le champ lexical est celui du mouvement physique intense : courir + haleter. Ces deux mots décrivent une scène concrète de chevaux à la course. Les étincelles du verset 2, la poussière du verset 4 confirment que le registre est celui de l'action physique, pas de l'hostilité morale. La course crée un tableau cohérent de mouvement et d'effort.",
        axe2_voisins: "Les versets 2 à 5 poursuivent la description physique : faire jaillir des étincelles (v2), attaquer à l'aube (v3), soulever de la poussière (v4), pénétrer dans une troupe (v5). Chaque verset ajoute un détail visuel ou sonore à la scène de la charge. La course est le mouvement qui porte toute cette séquence — sans elle, pas de souffle, pas d'étincelles, pas de poussière.",
        axe3_sourate: "La sourate 100 utilise cette scène de charge de chevaux comme serment pour introduire une vérité sur l'ingratitude humaine (v6-11). La course est l'image de départ — un spectacle de puissance et d'énergie qui contraste avec la mesquinerie humaine. Le thème est le contraste entre l'énergie des créatures et l'ingratitude du créé.",
        axe4_coherence: "Le Coran utilise la racine 'adā au sens de courir en 100:1. Le mot est employé avec des participes féminins pluriels qui décrivent des entités en mouvement. L'usage est cohérent avec d'autres passages où la course est une image de puissance (les chevaux, les astres).",
        axe5_frequence: "La mission du khalifa requiert l'effort et le mouvement. Les coureuses sont l'image de l'engagement total — elles donnent tout, halètent, soulèvent poussière et feu. Ce rappel précède la dénonciation de l'ingratitude humaine : les créatures donnent tout, l'humain ne reconnaît rien. La course est le modèle d'engagement que l'humain devrait suivre."
      },
      "Hostilité/Inimitié": {
        status: "peu_probable",
        senses: ["ennemi", "hostilité", "agression"],
        proof_ctx: "L'hostilité est un état intérieur — le sentiment d'animosité envers quelqu'un. Le participe actif féminin pluriel (al-'ādiyāt) demanderait des êtres qui FONT activement de l'hostilité. Mais le verset les associe à un halètement physique (dabhan), pas à un sentiment. La frontière philosophique : l'hostilité est un état émotionnel, la course est un mouvement physique. Le halètement vient de la course, pas de la haine.",
        axe1_verset: "Le halètement (dabhan) est un phénomène physique de la respiration à l'effort. L'hostilité ne produit pas de halètement — c'est la course qui essouffle. Le champ lexical est physique (souffle, course), pas émotionnel (haine, agression).",
        axe2_voisins: "Les versets suivants décrivent des étincelles, une attaque à l'aube, de la poussière. L'hostilité pourrait s'appliquer à l'attaque (v3) mais pas aux étincelles (v2) ni à la poussière (v4). La course couvre tous ces éléments.",
        axe3_sourate: "La sourate oppose l'énergie physique des créatures à l'ingratitude morale de l'humain. L'hostilité brouille ce contraste — ce serait moral vs moral. La course maintient le contraste physique vs moral.",
        axe4_coherence: "Le Coran distingue la racine 'adā (courir/dépasser) de la racine 'adw (inimitié). Les deux partagent des lettres mais les formes verbales et nominales diffèrent selon le contexte.",
        axe5_frequence: "L'hostilité est un sentiment destructeur, pas un modèle d'engagement. La course est un effort constructif qui produit des résultats (étincelles, poussière, pénétration). Pour la mission de justice, l'effort est plus pertinent que la haine."
      },
      "Transgression/Excès": {
        status: "nul",
        senses: ["transgresser", "injustice"],
        proof_ctx: "La transgression est un acte moral de dépassement des limites. Le verset décrit une scène physique de mouvement (halètement, étincelles, poussière) — pas un acte moral. Hors sujet dans ce contexte."
      }
    }
  };

  // ---- dbh (ضبحا) — NEW ----
  const dbhAxes = {
    sense_chosen: "haletantes",
    concept_chosen: "Souffle/Halètement",
    concepts: {
      "Souffle/Halètement": {
        status: "retenu",
        senses: ["haleter", "souffler bruyamment", "respiration audible"],
        proof_ctx: "Le sens retenu est « Souffle/Halètement ». Le mot dabhan est un masdar (nom verbal) en position d'accusatif absolu — il précise la manière dont courent les coureuses : elles courent EN haletant. Le halètement est un bruit physique qui sort de la poitrine à l'effort. La distinction avec « Altération/Brûlure » : l'altération est un changement de couleur par le feu, le halètement est un son de l'effort. Le contexte est une course de chevaux, pas une scène de feu.",
        axe1_verset: "Le mot dabhan complète al-'ādiyāt (les coureuses). Le champ lexical est : course + souffle haletant. Les deux mots forment un tableau sonore — on entend les chevaux qui galopent et soufflent. Le halètement est le son naturel de la course intense.",
        axe2_voisins: "Le verset 2 ajoute les étincelles (qadhan) et le verset 4 la poussière (naq'an). La séquence est sensorielle : d'abord le son (halètement v1), puis la vue (étincelles v2, poussière v4). Le halètement ouvre cette progression sensorielle.",
        axe3_sourate: "La sourate construit une image de puissance animale en 5 versets. Le halètement est le premier élément — le son de l'effort. Il installe le ton : quelque chose de puissant est en mouvement. Ce son contraste avec l'ingratitude silencieuse de l'humain qui suit (v6).",
        axe4_coherence: "Le mot dabh n'apparaît qu'une seule fois dans le Coran (ici). Le Lane's le définit comme le souffle haletant des chevaux à la course, ce qui correspond exactement au contexte du verset.",
        axe5_frequence: "Le halètement est le signe de l'effort total. Les chevaux donnent leur souffle — littéralement leur vie — dans la course. Ce don total de soi est le modèle implicite avant la dénonciation de l'ingratitude de l'humain qui ne donne rien en retour."
      },
      "Altération/Brûlure": {
        status: "nul",
        senses: ["altérer par le feu", "noircir", "cendre"],
        proof_ctx: "L'altération par le feu est un processus lent et passif. Le verset décrit une course dynamique, pas un objet qui brûle. Hors contexte."
      },
      "Sens isolé/Conflit": {
        status: "nul",
        senses: ["s'invectiver mutuellement"],
        proof_ctx: "Sans rapport avec la scène de charge de chevaux décrite dans le verset."
      }
    }
  };

  // ---- wry (الموريات) id=685 — celles qui font jaillir ----
  const wryAxes = {
    sense_chosen: "celles qui font jaillir",
    concept_chosen: "Dissimulation",
    concepts: {
      "Dissimulation": {
        status: "retenu",
        senses: ["cacher", "dissimuler", "enterrer"],
        proof_ctx: "Le sens retenu est « Dissimulation ». Le mot al-mūriyāt est un participe actif féminin pluriel forme IV de la racine w-r-y. La forme IV (awrā) signifie « faire cacher le feu dans le bois » — c'est-à-dire produire du feu par frottement, faire jaillir ce qui était caché. La forme IV inverse la dissimulation : ce qui était caché (le feu dans la pierre/le sabot) est fait sortir. Le participe actif dit que ces êtres font activement cette action. La distinction avec « Position cachée » : la position est un état spatial (être derrière), pas un acte de production. Ici, les coureuses PRODUISENT des étincelles par le frottement de leurs sabots sur la pierre.",
        axe1_verset: "Le mot qadhan (étincelles, frottement) complète al-mūriyāt. Le champ lexical est : faire jaillir + frottement/étincelles. Les sabots frappent la pierre et font sortir le feu caché dans la roche. Ce sont deux aspects d'une même action — le geste (frapper) et le résultat (l'étincelle).",
        axe2_voisins: "Le verset 1 donne le mouvement (la course haletante), le verset 2 donne l'effet visuel (les étincelles). Le verset 3 ajoutera le moment (l'aube). La progression est : son → lumière → temps. Faire jaillir le feu s'inscrit dans cette montée sensorielle.",
        axe3_sourate: "Les étincelles ajoutent l'image de la puissance créatrice — ces créatures ne font pas que courir, elles créent du feu à chaque foulée. La sourate oppose cette énergie créatrice à l'ingratitude destructrice de l'humain.",
        axe4_coherence: "La racine w-r-y avec le sens de feu est utilisée dans le Coran en 56:71 (afara'aytum an-nāra allatī tūrūna — avez-vous vu le feu que vous produisez par frottement ?). L'usage est cohérent.",
        axe5_frequence: "Faire jaillir le feu est un acte de création à partir de rien — les sabots frappent la pierre et le feu apparaît. Cette capacité créatrice rappelle la mission du khalifa : tirer le meilleur de la matière brute, transformer l'effort en résultat."
      },
      "Position cachée": {
        status: "nul",
        senses: ["derrière"],
        proof_ctx: "Le sens « derrière » est spatial et statique. Le verset décrit un mouvement actif de production (forme IV + participe actif). Hors sujet."
      }
    }
  };

  // ---- qdh (قدحا) — NEW ----
  const qdhAxes = {
    sense_chosen: "étincelles",
    concept_chosen: "Production de feu",
    concepts: {
      "Production de feu": {
        status: "retenu",
        senses: ["produire du feu", "faire jaillir des étincelles", "frapper le briquet"],
        proof_ctx: "Le sens retenu est « Production de feu ». Le mot qadhan est un masdar (nom verbal) en accusatif absolu — il précise l'action des mūriyāt : elles font jaillir EN produisant du feu par frottement. La production de feu est l'image concrète du sabot qui frappe la pierre. Distinction avec « Récipient/Contenance » : la coupe est un objet passif, ici il s'agit d'un acte de création. Distinction avec « Corrosion/Atteinte » : la corrosion est lente et destructrice, l'étincelle est instantanée et créatrice.",
        axe1_verset: "Le verset 2 complète le verset 1 : les coureuses (course) font jaillir (wry) des étincelles (qdh). Le champ lexical est celui de l'énergie cinétique transformée en feu : mouvement → impact → étincelle. La production de feu est le résultat naturel de la course sur terrain pierreux.",
        axe2_voisins: "Après le son du halètement (v1) vient la lumière des étincelles (v2). Le verset 3 ajoutera l'attaque à l'aube. La progression sensorielle continue : son → lumière → action. Les étincelles sont le point culminant visuel avant la charge.",
        axe3_sourate: "Les étincelles sont la preuve visible de la puissance des créatures. La sourate oppose cette énergie visible à l'ingratitude cachée de l'humain (v6). Le feu qui jaillit est un acte de révélation — comme les tombes qui seront retournées (v9).",
        axe4_coherence: "La racine qdh est un hapax coranique — elle n'apparaît qu'ici. Le Lane's confirme le sens de « frapper pour produire du feu », ce qui correspond au contexte de sabots sur la pierre.",
        axe5_frequence: "Produire du feu à partir de la pierre est l'acte civilisateur par excellence. L'humain qui est ingrat envers son Seigneur (v6) bénéficie pourtant de créatures capables de créer de la lumière à partir du néant. L'étincelle rappelle le potentiel créateur que l'humain devrait reconnaître."
      },
      "Récipient/Contenance": {
        status: "nul",
        senses: ["coupe", "louche"],
        proof_ctx: "Les récipients n'ont aucun rapport avec une scène de charge de chevaux. Hors sujet."
      },
      "Corrosion/Atteinte": {
        status: "nul",
        senses: ["ronger", "carie", "blâmer"],
        proof_ctx: "La corrosion est un processus lent et destructeur. Le verset décrit un jaillissement instantané d'étincelles. Hors sujet."
      },
      "Flèche/Finesse": {
        status: "nul",
        senses: ["flèche", "minceur"],
        proof_ctx: "La flèche est un objet taillé. Le contexte est celui de la production de feu, pas de la fabrication d'armes."
      }
    }
  };

  // ---- ghyr (المغيرات) id=266 — celles qui attaquent ----
  // Note: المغيرات from root غ ي ر — forme IV مُغِيرَات = celles qui lancent un raid
  const ghyrAxes = {
    sense_chosen: "celles qui attaquent",
    concept_chosen: "Jalousie/Protection",
    concepts: {
      "Jalousie/Protection": {
        status: "retenu",
        senses: ["jalousie", "très jaloux", "plus jaloux", "protéger ce qui est sien"],
        proof_ctx: "Le sens retenu est « Jalousie/Protection ». Le mot al-mughīrāt est un participe actif féminin pluriel forme IV de gh-y-r. La forme IV (aghāra) signifie « lancer un raid, attaquer soudainement » — ce qui découle du sens de « protéger ce qui est sien » : on attaque pour défendre son territoire. Le ghāra (raid) est l'acte de celui qui protège ses biens en prenant l'initiative. Le participe actif dit que ces êtres font activement l'attaque. Distinction avec « Changement/Altération » : le changement est un processus neutre, l'attaque est un acte directionnel et violent. Distinction avec « Autre/Exclusion » : l'exclusion est une catégorie logique, pas un acte physique.",
        axe1_verset: "Le mot subhan (l'aube) complète al-mughīrāt : elles attaquent À L'AUBE. Le champ lexical est militaire : charge + aube. L'attaque à l'aube est la tactique classique — on surprend l'ennemi quand il dort. Le mot relie la scène de course (v1-2) à l'action militaire.",
        axe2_voisins: "Les versets 4-5 confirment l'attaque : soulever la poussière (v4) et pénétrer au milieu d'une troupe (v5). La séquence est : courir → étincelles → attaquer → poussière → pénétrer. L'attaque est le point de bascule entre la préparation (v1-2) et le résultat (v4-5).",
        axe3_sourate: "L'attaque à l'aube est le moment d'action décisive dans le serment. La sourate dit : même les chevaux agissent avec détermination, mais l'humain est ingrat. L'attaque est l'image de l'engagement total.",
        axe4_coherence: "Le Coran utilise la racine ghyr au sens de raid en 8:47 et dans d'autres contextes militaires. Le sens de « lancer un raid » est bien attesté pour la forme IV.",
        axe5_frequence: "L'attaque à l'aube est un acte de courage et de détermination. Les créatures risquent leur vie pour accomplir leur mission. Ce modèle d'engagement contraste avec l'humain qui thésaurise et oublie son Seigneur (v6-8)."
      },
      "Changement/Altération": {
        status: "peu_probable",
        senses: ["changer", "altérer", "transformer", "modifier"],
        proof_ctx: "Le changement est un processus neutre — quelque chose passe d'un état à un autre. Le verset décrit un acte militaire violent (attaque à l'aube, poussière, pénétration dans une troupe). Le participe actif avec le complément temporel « subhan » (l'aube) pointe vers un acte ponctuel et décisif, pas un processus de transformation. La frontière philosophique : changer est graduel, attaquer est soudain.",
        axe1_verset: "Le complément « subhan » (l'aube) indique un moment précis — l'aube est le moment de l'attaque surprise. Le changement n'a pas de moment précis — il se fait progressivement. Le champ lexical est celui de l'action militaire, pas de la transformation.",
        axe2_voisins: "Les versets 4-5 décrivent la poussière et la pénétration dans une troupe — effets d'une attaque, pas d'un changement. Si c'était un changement, on ne verrait pas de poussière soulevée ni de troupe pénétrée.",
        axe3_sourate: "La sourate oppose l'action des créatures à la passivité de l'humain. Le changement est trop neutre pour ce contraste. L'attaque est l'acte décisif qui donne du poids au serment.",
        axe4_coherence: "Le Coran distingue ghayara (changer) de aghāra (attaquer). Les deux viennent de la même racine mais les formes et contextes diffèrent.",
        axe5_frequence: "Le changement ne porte pas de dimension morale en soi. L'attaque pour protéger ce qui est sien est un acte de justice — protéger son territoire contre l'agression."
      },
      "Autre/Exclusion": {
        status: "nul",
        senses: ["autre", "sauf", "excepté", "différent"],
        proof_ctx: "L'exclusion est une catégorie logique — désigner ce qui est différent. Le verset décrit une action physique, pas une catégorisation. Hors sujet."
      },
      "Provision/Subsistance": {
        status: "nul",
        senses: ["provision de blé", "pourvoir sa famille"],
        proof_ctx: "Les provisions sont des biens matériels. Le contexte est une charge de chevaux, pas un approvisionnement."
      },
      "Sens isolé/Mensonge": { status: "nul", senses: ["mensonge"], proof_ctx: "Sans rapport." },
      "Lieu/Géographie": { status: "nul", senses: ["terre arrosée"], proof_ctx: "Sans rapport." },
      "Corps/Anatomie": { status: "nul", senses: ["sang versé", "discours"], proof_ctx: "Sans rapport." },
      "Sens isolé/Badge": { status: "nul", senses: ["badge des non-musulmans"], proof_ctx: "Sans rapport." }
    }
  };

  // ---- nqe (نقعا) — NEW ----
  const nqeAxes = {
    sense_chosen: "poussière",
    concept_chosen: "Poussière/Nuage",
    concepts: {
      "Poussière/Nuage": {
        status: "retenu",
        senses: ["poussière soulevée", "nuage de poussière"],
        proof_ctx: "Le sens retenu est « Poussière/Nuage ». Le mot naq'an est un masdar en accusatif absolu — « elles ont soulevé de la poussière ». La poussière est l'effet visible de la course et de l'attaque : les sabots frappent le sol et la terre monte dans l'air. Distinction avec « Stagnation/Trempage » : l'eau stagnante est immobile, la poussière est soulevée et en mouvement. Le verset décrit l'action (atharna = elles ont soulevé), pas l'immobilité.",
        axe1_verset: "Le verbe atharna (forme IV de th-w-r : soulever, faire surgir) est suivi de naq'an. Le champ lexical est : soulever + poussière. Les deux mots décrivent un nuage de poussière créé par la charge des chevaux. C'est l'effet terrestre de la course, après l'effet sonore (v1) et lumineux (v2).",
        axe2_voisins: "Le verset 4 est entre l'attaque (v3) et la pénétration dans la troupe (v5). La poussière est la trace visible de la charge — elle marque le passage entre l'attaque et son résultat. La progression est : attaquer → poussière → pénétrer.",
        axe3_sourate: "La poussière est le signe de l'impact sur le monde réel. Ces créatures laissent une trace physique de leur action. L'humain ingrat (v6) ne laisse que du néant — il prend sans reconnaître.",
        axe4_coherence: "Le mot naq' au sens de poussière soulevée est un hapax coranique. Le Lane's confirme ce sens principal.",
        axe5_frequence: "La poussière témoigne de l'action accomplie. Dans la mission de justice, l'action laisse des traces — elle change le monde physique. L'ingratitude, elle, ne produit rien."
      },
      "Stagnation/Trempage": {
        status: "nul",
        senses: ["eau stagnante", "tremper", "infusion"],
        proof_ctx: "L'eau stagnante est immobile. Le verset décrit un mouvement violent qui soulève la matière. Hors contexte."
      },
      "Sens isolé/Poison": {
        status: "nul",
        senses: ["poison qui fait effet"],
        proof_ctx: "Sans rapport avec une charge de chevaux."
      }
    }
  };

  // ---- wst (وسطن) id=836 ----
  const wstAxes = {
    sense_chosen: "pénétré au milieu",
    concept_chosen: "Centre/Modération",
    concepts: {
      "Centre/Modération": {
        status: "retenu",
        senses: ["milieu", "centre", "meilleur (wassat)", "modéré"],
        proof_ctx: "Le sens retenu est « Centre/Modération ». Le verbe wasatna est un verbe accompli — « elles ont pénétré au milieu de ». Le centre est la position stratégique — entrer au cœur d'une troupe, pas rester à la périphérie. Le verbe accompli dit que l'action est achevée : elles ont DÉJÀ pénétré. Distinction avec « Intériorité » : l'intériorité est un état spatial passif (être parmi), le centre est un acte de pénétration actif (foncer au milieu).",
        axe1_verset: "Le mot jam'an (troupe/rassemblement) complète wasatna : elles ont pénétré au milieu d'une troupe. Le champ lexical est militaire : pénétrer + troupe. C'est l'aboutissement de la charge — après la course, les étincelles, l'attaque et la poussière, les chevaux sont au cœur de l'ennemi.",
        axe2_voisins: "Le verset 5 conclut la séquence des 5 versets de serment. La pénétration au centre est le point final de la charge. Tout converge vers ce moment : la course a produit un résultat — l'ennemi est atteint en son cœur.",
        axe3_sourate: "La pénétration au centre de la troupe est l'acte de courage ultime. La sourate oppose ce courage total à la lâcheté morale de l'humain qui thésaurise et oublie. Le centre est le lieu le plus dangereux — les chevaux y vont quand même.",
        axe4_coherence: "Le Coran utilise wasat au sens de milieu/meilleur en 2:143 (ummatan wasatan = une communauté du juste milieu). Le sens de « pénétrer au centre » est une extension active de cette racine.",
        axe5_frequence: "Pénétrer au centre de la troupe est l'acte qui requiert le plus de détermination. La mission de justice demande d'aller au cœur des problèmes, pas de rester en périphérie. Les chevaux montrent le chemin."
      },
      "Intériorité": {
        status: "nul",
        senses: ["parmi"],
        proof_ctx: "« Parmi » est une préposition statique. Le verset utilise un verbe accompli actif (wasatna = elles ont pénétré). Le mouvement actif exclut la simple localisation."
      }
    }
  };

  // ---- jme (جمعا) id=422 ----
  const jmeAxes = {
    sense_chosen: "troupe",
    concept_chosen: "Rassemblement/Union",
    concepts: {
      "Rassemblement/Union": {
        status: "retenu",
        senses: ["rassembler", "réunir", "assembler", "contracter", "unanimité", "vendredi", "totalité"],
        proof_ctx: "Le sens retenu est « Rassemblement/Union ». Le mot jam'an est un masdar/nom en accusatif — « une troupe, un rassemblement ». Le rassemblement est un groupe constitué — des personnes réunies en un lieu. Le mot désigne ici la troupe ennemie dans laquelle les chevaux pénètrent.",
        axe1_verset: "Le mot jam'an est l'objet de wasatna (pénétrer au milieu de). Le champ lexical est : pénétrer + troupe. La troupe est l'entité collective qui subit l'attaque. Sans le rassemblement, il n'y a pas de cible.",
        axe2_voisins: "Le rassemblement est le point d'arrivée de la séquence de charge (v1-5). C'est la cible finale — tout le mouvement converge vers cette troupe.",
        axe3_sourate: "Le rassemblement humain est au cœur de la sourate : d'un côté les chevaux pénètrent dans une troupe (v5), de l'autre les tombes sont retournées (v9). Les rassemblements — de vivants ou de morts — sont ce que la sourate examine.",
        axe4_coherence: "Le Coran utilise jam' pour les rassemblements humains, y compris le Jour du Rassemblement. L'usage est cohérent.",
        axe5_frequence: "La troupe représente la société humaine organisée. La mission du khalifa s'exerce dans la collectivité, pas dans l'isolement."
      }
    }
  };

  // ---- thwr (فأثرن) — root ثور id=625 ----
  const thwrAxes = {
    sense_chosen: "soulevé",
    concept_chosen: "Agitation",
    concepts: {
      "Agitation": {
        status: "retenu",
        senses: ["soulever"],
        proof_ctx: "Le sens retenu est « Agitation ». Le verbe atharna est une forme IV de th-w-r (soulever, agiter, faire surgir). La forme IV ajoute l'idée de « faire faire » — les chevaux FONT soulever la poussière. Le verbe accompli dit que l'action est achevée. Distinction avec « Animal/Force » : le taureau est un animal concret, ici le verbe décrit un acte de soulèvement. La forme IV est transitive — elle agit sur un objet (la poussière).",
        axe1_verset: "Le verbe atharna est suivi de naq'an (poussière). Le champ lexical est : soulever + poussière. Le soulèvement est l'action qui produit le nuage de poussière — c'est la cause, la poussière est l'effet.",
        axe2_voisins: "Le verset 4 est la transition entre l'attaque (v3) et la pénétration (v5). Le soulèvement de poussière marque le moment de l'impact — les chevaux touchent le sol avec force.",
        axe3_sourate: "Le soulèvement est un acte de perturbation de l'ordre établi. La sourate annonce un soulèvement plus grand : celui des tombes (v9). Les deux soulèvements se répondent.",
        axe4_coherence: "Le Coran utilise la racine thwr au sens de soulever/agiter. Le sens est cohérent avec les autres emplois coraniques.",
        axe5_frequence: "Soulever la poussière est un acte qui marque le monde. L'humain doit agir pour la justice — pas rester immobile et ingrat."
      },
      "Animal/Force": {
        status: "nul",
        senses: ["taureau", "bœuf"],
        proof_ctx: "Le taureau est un animal. Le verset utilise un verbe forme IV conjugué au féminin pluriel — les chevaux soulèvent, ce ne sont pas des taureaux."
      }
    }
  };

  // === VWAs v1 ===
  await upsertVWA(6147, 'edw', 457, edwAxes, 1);
  await upsertVWA(6147, 'dbh', dbhId, dbhAxes, 2);
  console.log('VERSET 100:1 — TERMINÉ');
  console.log('  edw (عدو) → sens "Course/Vitesse" → mot "coureuses"');
  console.log('  dbh (ضبح) → sens "Souffle/Halètement" → mot "haletantes"');

  // === VWAs v2 ===
  await upsertVWA(6148, 'wry', 685, wryAxes, 1);
  await upsertVWA(6148, 'qdh', qdhId, qdhAxes, 2);
  console.log('VERSET 100:2 — TERMINÉ');
  console.log('  wry (وري) → sens "Dissimulation" → mot "celles qui font jaillir"');
  console.log('  qdh (قدح) → sens "Production de feu" → mot "étincelles"');

  // === VWAs v3 ===
  await upsertVWA(6149, 'ghyr', 266, ghyrAxes, 1);
  console.log('VERSET 100:3 — TERMINÉ');
  console.log('  ghyr (غير) → sens "Jalousie/Protection" → mot "celles qui attaquent"');

  // === VWAs v4 ===
  await upsertVWA(6150, 'thwr', 625, thwrAxes, 1);
  await upsertVWA(6150, 'nqe', nqeId, nqeAxes, 2);
  console.log('VERSET 100:4 — TERMINÉ');
  console.log('  thwr (ثور) → sens "Agitation" → mot "soulevé"');
  console.log('  nqe (نقع) → sens "Poussière/Nuage" → mot "poussière"');

  // === VWAs v5 ===
  await upsertVWA(6151, 'wst', 836, wstAxes, 1);
  await upsertVWA(6151, 'jme', 422, jmeAxes, 2);
  console.log('VERSET 100:5 — TERMINÉ');
  console.log('  wst (وسط) → sens "Centre/Modération" → mot "pénétré au milieu"');
  console.log('  jme (جمع) → sens "Rassemblement/Union" → mot "troupe"');

  // === TRANSLATIONS v1-v5 ===
  await updateVerse(6147, {
    translation_arab: "Par les coureuses haletantes,",
    full_translation: "Par les coursiers courant, haletants,",
    segments: [
      {fr:"Par les coureuses", pos:"nom", phon:"al-'ādiyāt", arabic:"وَٱلْعَـٰدِيَـٰتِ", position:1, word_key:"edw", is_particle:false, sense_retenu:"courir"},
      {fr:"haletantes", pos:"nom", phon:"ḍabḥan", arabic:"ضَبْحًا", position:2, word_key:"dbh", is_particle:false, sense_retenu:"haleter"}
    ],
    translation_explanation: `§DEMARCHE§

Le mot **al-'ādiyāt** est un participe actif féminin pluriel avec l'article défini al- et la particule de serment wa- (une forme qui dit que ces êtres FONT activement l'action de courir, et le pluriel féminin est la forme utilisée pour les entités non-rationnelles). D'après les sources étymologiques (Lane's), la racine 'adā signifie courir. Le participe actif crée un nom : « celles qui courent ».

Le mot **ḍabḥan** est un masdar (nom verbal) en accusatif absolu (une forme qui indique la MANIÈRE dont se fait l'action précédente). Il ne s'agit pas d'un deuxième sujet mais d'une précision sur comment courent les coureuses : elles courent en haletant. Le Lane's définit le ḍabḥ comme la respiration haletante et bruyante des chevaux quand ils galopent — le souffle sort de la poitrine et se fait entendre.

La particule **wa** (par) au début est un serment — Dieu jure par ces coureuses haletantes. Ce qui suit le serment est ce que Dieu veut affirmer (versets 6 et suivants).

§JUSTIFICATION§

**coureuses** — Le sens retenu est « Course/Vitesse ». Le mot « coureuses » est choisi car il capture l'acte physique de courir activement et en continu. L'alternative « chargeuses » est écartée car elle anticipe l'attaque du verset 3 — le verset 1 parle du mouvement, pas encore de l'assaut. L'alternative « coursières » est écartée car c'est un terme vieilli, pas du français courant.

**haletantes** — Le sens retenu est « Souffle/Halètement ». Le mot « haletantes » est choisi car il combine le souffle et l'effort physique intense. L'alternative « essoufflées » est écartée car elle implique l'épuisement (être à bout de souffle), alors que le halètement est le signe de l'effort en cours, pas de la fatigue.

§CRITIQUE§

Les traductions courantes donnent « par les coursiers courant, haletants » (Hamidullah). Le mot « coursiers » est du registre littéraire — en français courant on dit « chevaux » ou « coureuses ». La vraie nuance est que le texte arabe ne dit pas « chevaux » mais utilise un participe actif : « celles qui courent ». Ce sont des êtres définis par leur action, pas par leur espèce. Notre traduction « coureuses » garde cette dimension.`
  });

  await updateVerse(6148, {
    translation_arab: "puis celles qui font jaillir des étincelles,",
    full_translation: "qui font jaillir des étincelles,",
    segments: [
      {fr:"puis celles qui font jaillir", pos:"nom", phon:"al-mūriyāt", arabic:"فَٱلْمُورِيَـٰتِ", position:1, word_key:"wry", is_particle:false, sense_retenu:"cacher"},
      {fr:"des étincelles", pos:"nom", phon:"qadḥan", arabic:"قَدْحًا", position:2, word_key:"qdh", is_particle:false, sense_retenu:"produire du feu"}
    ],
    translation_explanation: `§DEMARCHE§

Le mot **al-mūriyāt** est un participe actif féminin pluriel forme IV de w-r-y (une forme qui dit « faire cacher / faire sortir le caché »). La forme IV inverse l'idée de base : au lieu de cacher, on fait SORTIR ce qui était caché. Les sabots frappent la pierre et font sortir le feu qui était caché dans la roche. C'est un acte de révélation par le frottement.

Le mot **qadḥan** est un masdar en accusatif absolu de la racine q-d-ḥ — il précise la manière : en produisant du feu par frottement. Le Lane's définit le qadḥ comme l'acte de frapper une pierre pour en tirer du feu (comme un briquet). L'image est précise : les sabots = les pierres à feu.

La particule **fa** (puis, alors) lie ce verset au précédent — les mêmes créatures qui courent (v1) font aussi jaillir des étincelles (v2).

§JUSTIFICATION§

**celles qui font jaillir** — Le sens retenu est « Dissimulation ». La forme IV transforme « cacher » en « faire sortir le caché ». Le mot « faire jaillir » capture ce mouvement de l'intérieur vers l'extérieur. L'alternative « celles qui révèlent » est écartée car trop abstrait — le feu jaillit physiquement.

**étincelles** — Le sens retenu est « Production de feu ». Le mot « étincelles » est choisi car il décrit le résultat visible du frottement sabot-pierre. L'alternative « feu » est écartée car trop général — ce ne sont pas des flammes mais des étincelles fugaces.

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens — « jaillir des étincelles » est universel. La nuance est que certaines traductions ajoutent « à coups de sabots » qui n'est pas dans le texte arabe. Le texte dit seulement « celles qui font jaillir, par frottement ».`
  });

  await updateVerse(6149, {
    translation_arab: "puis celles qui attaquent à l'aube,",
    full_translation: "et qui, au matin, font des incursions,",
    segments: [
      {fr:"puis celles qui attaquent", pos:"nom", phon:"al-mughīrāt", arabic:"فَٱلْمُغِيرَٰتِ", position:1, word_key:"ghyr", is_particle:false, sense_retenu:"protéger ce qui est sien"},
      {fr:"à l'aube", phon:"ṣubḥan", arabic:"صُبْحًا", position:2, word_key:null, is_particle:true}
    ],
    translation_explanation: `§DEMARCHE§

Le mot **al-mughīrāt** est un participe actif féminin pluriel forme IV de gh-y-r (une forme qui ajoute l'idée de « faire faire »). La racine gh-y-r porte le sens de jalousie et de protection de ce qui est sien. La forme IV (aghāra) signifie « lancer un raid, attaquer soudainement » — c'est l'acte de celui qui protège son territoire en prenant l'initiative de l'attaque. Le Lane's confirme : aghāra 'alā al-qawm = il a lancé un raid sur le peuple.

Le mot **ṣubḥan** est un accusatif temporel qui indique le moment de l'action : à l'aube. L'aube est le moment classique de l'attaque surprise en contexte bédouin.

§JUSTIFICATION§

**celles qui attaquent** — Le sens retenu est « Jalousie/Protection ». Le mot « attaquent » est choisi car il capture l'acte offensif de la forme IV (aghāra = lancer un raid). L'alternative « celles qui envahissent » est écartée car l'invasion implique une occupation durable, alors que le raid est ponctuel et rapide. L'alternative « celles qui surgissent » est écartée car surgir est neutre — le raid est agressif et volontaire.

§CRITIQUE§

Hamidullah donne « font des incursions » — ce qui est proche mais « incursion » est du registre militaire technique. En français courant, « attaquer » est plus direct et plus clair. Le sens est le même, la différence est stylistique.`
  });

  await updateVerse(6150, {
    translation_arab: "et soulèvent alors un nuage de poussière,",
    full_translation: "et soulèvent par là un tourbillon de poussière,",
    segments: [
      {fr:"et soulèvent", pos:"verbe", phon:"atharna", arabic:"فَأَثَرْنَ", position:1, word_key:"thwr", is_particle:false, sense_retenu:"soulever"},
      {fr:"par là", phon:"bihi", arabic:"بِهِۦ", position:2, word_key:null, is_particle:true},
      {fr:"un nuage de poussière", pos:"nom", phon:"naq'an", arabic:"نَقْعًا", position:3, word_key:"nqe", is_particle:false, sense_retenu:"poussière soulevée"}
    ],
    translation_explanation: `§DEMARCHE§

Le verbe **atharna** est une forme IV du verbe th-w-r au féminin pluriel accompli (une forme qui dit « elles ont FAIT soulever »). La forme IV rend le verbe transitif : les chevaux font monter la poussière. Le verbe est au passé (accompli) — l'action est présentée comme achevée, donnant un effet de vivacité au récit.

Le pronom **bihi** (par là / avec cela) relie l'action au contexte de la course et de l'attaque.

Le mot **naq'an** est un masdar/nom de la racine n-q-' qui signifie poussière soulevée. Le Lane's définit naq' comme la poussière qui monte dans l'air suite à un mouvement violent.

§JUSTIFICATION§

**soulèvent** — Le sens retenu est « Agitation ». Le mot « soulèvent » est choisi car il décrit le mouvement ascendant de la poussière causé par les sabots. L'alternative « agitent » est écartée car agiter n'implique pas forcément un mouvement vers le haut — soulever si.

**poussière** — Le sens retenu est « Poussière/Nuage ». Le mot « poussière » est du français courant et décrit exactement ce que les sabots font monter. L'alternative « poudre » est écartée car « poudre » évoque un produit manufacturé.

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens. La différence est mineure : « tourbillon de poussière » (Hamidullah) ajoute l'idée de tourbillon qui n'est pas dans le texte arabe.`
  });

  await updateVerse(6151, {
    translation_arab: "et pénètrent alors au milieu d'une troupe.",
    full_translation: "et pénètrent au centre d'un rassemblement,",
    segments: [
      {fr:"et pénètrent au milieu", pos:"verbe", phon:"wasaṭna", arabic:"فَوَسَطْنَ", position:1, word_key:"wst", is_particle:false, sense_retenu:"milieu"},
      {fr:"de", phon:"bihi", arabic:"بِهِۦ", position:2, word_key:null, is_particle:true},
      {fr:"une troupe", pos:"nom", phon:"jam'an", arabic:"جَمْعًا", position:3, word_key:"jme", is_particle:false, sense_retenu:"rassembler"}
    ],
    translation_explanation: `§DEMARCHE§

Le verbe **wasaṭna** est un verbe accompli de la racine w-s-ṭ au féminin pluriel (une forme qui dit « elles ont pénétré au milieu de »). Le wasat est le centre, le cœur. Le verbe dit que les chevaux ont foncé droit au centre — pas en périphérie.

Le mot **jam'an** est un masdar/nom de la racine j-m-' en accusatif — « un rassemblement, une troupe ». C'est la cible de la pénétration : un groupe de personnes assemblées.

Ce verset conclut le serment de cinq versets. Après cette description de puissance, le verset 6 révèlera l'objet du serment.

§JUSTIFICATION§

**pénètrent au milieu** — Le sens retenu est « Centre/Modération ». Le mot « pénétrer au milieu » capture l'acte de foncer au cœur du dispositif ennemi. L'alternative « se trouvent parmi » est écartée car elle est passive — le verbe arabe indique un mouvement actif et déterminé, pas une simple présence.

**troupe** — Le sens retenu est « Rassemblement/Union ». Le mot « troupe » est choisi car il désigne un groupe organisé, une cible militaire. L'alternative « foule » est écartée car la foule est désorganisée, tandis que le jam' ici est le camp ennemi.

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens. Certaines ajoutent « ennemi » qui n'est pas dans le texte arabe — le texte dit simplement « un rassemblement ».`
  });

  console.log('\nTraductions v1-v5 insérées ✓\n');
}

// ---- VERSETS 100:6-8 — L'ingratitude humaine ----
async function verse100_6_to_8() {
  console.log('\n====== VERSETS 100:6-8 ======\n');

  const {data:kndWA} = await sb.from('word_analyses').select('id').eq('word_key','knd').single();
  const kndId = kndWA.id;

  // ---- ans (الإنسان) id=866 ----
  const ansAxes = {
    sense_chosen: "l'être humain",
    concept_chosen: "Familiarité/Sociabilité",
    concepts: {
      "Familiarité/Sociabilité": {
        status: "retenu",
        senses: ["être familier", "être sociable", "être humain", "humains (ins)"],
        proof_ctx: "Le sens retenu est « Familiarité/Sociabilité ». Le mot al-insān est un nom défini avec l'article al- — « l'être humain » comme catégorie connue. L'insān est celui qui est familier, sociable, qui vit en société. Le nom défini identifie une réalité connue de tous. Distinction avec « Perception » : la perception est un acte de voir de loin, l'humanité est une identité permanente.",
        axe1_verset: "Le verset dit « l'être humain est envers son Seigneur ingrat ». Le mot insān est le sujet d'une phrase nominale avec inna (emphase). Le champ lexical est moral : humanité + seigneurie + ingratitude. L'être humain est ici défini par sa relation à son Seigneur.",
        axe2_voisins: "Les versets 1-5 décrivent la générosité des créatures (chevaux qui donnent tout). Le verset 6 bascule vers l'humain ingrat. Le contraste est : les créatures donnent tout / l'humain ne reconnaît rien. L'insān est le pivot de la sourate.",
        axe3_sourate: "La sourate oppose le règne animal (effort total) au règne humain (ingratitude). L'insān est le personnage central de ce contraste. Tout le serment des versets 1-5 converge vers cette dénonciation.",
        axe4_coherence: "Le Coran utilise al-insān plus de 60 fois pour désigner l'être humain dans ses faiblesses (ingratitude, précipitation, faiblesse). L'usage ici est cohérent avec cette tendance coranique.",
        axe5_frequence: "L'être humain est le khalifa — celui qui a reçu une mission de justice. L'ingratitude est la trahison de cette mission. La sourate pointe du doigt cette trahison en la contrastant avec la loyauté des créatures."
      },
      "Perception": {
        status: "nul",
        senses: ["percevoir", "voir de loin"],
        proof_ctx: "La perception est un acte ponctuel de voir. Le verset parle de l'identité de l'humain, pas de sa capacité à percevoir. Hors sujet."
      }
    }
  };

  // ---- rbb (لربه) id=253 ----
  const rbbAxes = {
    sense_chosen: "son Seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur", "maître", "propriétaire", "celui qui élève", "celui qui entretient", "celui qui possède", "gouverner"],
        proof_ctx: "Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot rabbihi est en idafa avec le pronom suffixe « hi » (son) — « son Seigneur ». Le rabb est celui qui élève, nourrit, fait grandir. C'est une autorité bienveillante, pas tyrannique. Le verset oppose cette bienveillance à l'ingratitude de l'humain. Distinction avec « Croissance/Augmentation » : la croissance est un processus neutre, la seigneurie est une relation d'autorité et de soin. Distinction avec « Éducation/Accompagnement » : l'éducation est un acte, la seigneurie est un statut permanent.",
        axe1_verset: "Le mot rabbihi est lié à l'insān par la préposition li- (envers). Le champ lexical est relationnel : être humain + envers + Seigneur + ingratitude. La seigneurie est la relation qui fonde l'ingratitude — on ne peut être ingrat qu'envers celui qui a donné.",
        axe2_voisins: "Le verset 11 reprend rabb (rabbahum = leur Seigneur) en conclusion. L'ouverture (v6) et la clôture (v11) de la section morale sont encadrées par la seigneurie. Le rabb est le fil conducteur.",
        axe3_sourate: "La sourate oppose les créatures loyales au Créateur et l'humain ingrat envers son Seigneur. Le rabb est celui envers qui l'humain devrait être reconnaissant — celui qui l'a créé, élevé, nourri.",
        axe4_coherence: "Le Coran utilise rabb près de 1000 fois. C'est le terme le plus fréquent pour désigner Dieu dans sa relation de soin avec les créatures. L'usage ici est parfaitement cohérent.",
        axe5_frequence: "Le Seigneur est celui qui confie la mission de khalifa. L'ingratitude envers le Seigneur est le refus de reconnaître la source de tout bien. La mission de justice commence par la reconnaissance."
      },
      "Croissance/Augmentation": {
        status: "nul",
        senses: ["augmenter", "croître", "faire grandir"],
        proof_ctx: "La croissance est un processus neutre. Le verset parle d'une relation d'autorité (li-rabbihi = envers son Seigneur), pas d'un processus de développement."
      },
      "Éducation/Accompagnement": {
        status: "nul",
        senses: ["élever un enfant", "éduquer", "former"],
        proof_ctx: "L'éducation est un acte ponctuel. Le verset utilise rabb comme titre permanent, pas comme acte éducatif."
      },
      "Commerce/Usure": { status: "nul", senses: ["usure"], proof_ctx: "Sans rapport." },
      "Souffle/Vent": { status: "nul", senses: ["essoufflement"], proof_ctx: "Sans rapport." },
      "Sens isolé/Fixer": { status: "nul", senses: ["fixer"], proof_ctx: "Sans rapport." },
      "Sens isolé/Rassembler": { status: "nul", senses: ["rassembler"], proof_ctx: "Sans rapport." },
      "Sens isolé/Groupe": { status: "nul", senses: ["groupe"], proof_ctx: "Sans rapport." },
      "Sens isolé/Confiture": { status: "nul", senses: ["confiture"], proof_ctx: "Sans rapport." }
    }
  };

  // ---- knd (لكنود) — NEW ----
  const kndAxes = {
    sense_chosen: "ingrat",
    concept_chosen: "Ingratitude/Reniement",
    concepts: {
      "Ingratitude/Reniement": {
        status: "retenu",
        senses: ["être ingrat", "nier un bienfait", "rebelle", "avare", "celui qui ne retient que le mal"],
        proof_ctx: "Le sens retenu est « Ingratitude/Reniement ». Le mot kanūd est un adjectif de forme fa'ūl (forme d'intensité) — « très ingrat, profondément ingrat ». La forme fa'ūl indique un état permanent et intense, pas un acte ponctuel. Le Lane's donne : ingrat, celui qui nie les bienfaits, celui qui ne retient que le mal et oublie le bien. La particule la- (certes) devant kanūd renforce l'affirmation. Distinction avec « Coupure/Séparation » : la coupure est un acte physique, l'ingratitude est un état moral intérieur.",
        axe1_verset: "Le mot kanūd est l'attribut (khabar) de l'insān dans une phrase nominale renforcée par inna et la-. Le champ lexical est moral : être humain + envers son Seigneur + certes + ingrat. L'ingratitude est le verdict central de la sourate — c'est ce que le serment des chevaux venait appuyer.",
        axe2_voisins: "Le verset 7 ajoute que l'humain est témoin de son ingratitude (shahīd). Le verset 8 ajoute qu'il est intense dans son amour des biens (shadīd). L'ingratitude est développée en deux conséquences : conscience de sa faute et attachement aux biens.",
        axe3_sourate: "L'ingratitude est le thème central de la sourate. Tout le serment (v1-5) converge vers ce verdict (v6). Les conséquences eschatologiques (v9-11) découlent de cette ingratitude. Le kanūd est celui qui reçoit tout et ne reconnaît rien.",
        axe4_coherence: "Le mot kanūd est un hapax coranique — il n'apparaît qu'ici. Mais le thème de l'ingratitude humaine traverse tout le Coran (kafūr, etc.). Le Lane's confirme que kanūd est plus spécifique que kafūr : il s'agit de celui qui nie activement les bienfaits reçus.",
        axe5_frequence: "L'ingratitude est l'opposé de la mission du khalifa. Le khalifa doit reconnaître les bienfaits pour les distribuer justement. Celui qui ne retient que le mal et oublie le bien ne peut pas accomplir la justice."
      },
      "Coupure/Séparation": {
        status: "nul",
        senses: ["couper"],
        proof_ctx: "La coupure est un acte physique ponctuel. Le verset décrit un état moral permanent (la forme fa'ūl). Hors sujet."
      },
      "Sens isolé/Géographie": {
        status: "nul",
        senses: ["portion de montagne"],
        proof_ctx: "Sans rapport avec le contexte moral du verset."
      }
    }
  };

  // ---- shhd (لشهيد) id=382 — témoin ----
  const shhdAxes = {
    sense_chosen: "témoin",
    concept_chosen: "Témoignage/Présence",
    concepts: {
      "Témoignage/Présence": {
        status: "retenu",
        senses: ["témoigner", "voir", "être présent", "faire témoigner", "attester", "martyr"],
        proof_ctx: "Le sens retenu est « Témoignage/Présence ». Le mot shahīd est un adjectif de forme fa'īl — « témoin, celui qui témoigne ». La forme fa'īl est une forme d'intensité ou de résultat — le shahīd est celui qui sait parce qu'il a vu. Le participe la-shahīd (avec la- emphatique) dit : l'humain est CERTES témoin de sa propre ingratitude. Il sait ce qu'il fait.",
        axe1_verset: "Le pronom « innahu » (certes il) renvoie à l'insān du verset 6. « 'alā dhālika » (de cela) renvoie à l'ingratitude. Le champ lexical est : humain + de cela + certes + témoin. L'humain est conscient de son ingratitude — il ne peut pas plaider l'ignorance.",
        axe2_voisins: "Le verset 6 affirme l'ingratitude. Le verset 7 ajoute la conscience. Le verset 8 ajoutera l'attachement aux biens. La séquence est : ingrat → conscient → avide. Chaque verset aggrave le portrait.",
        axe3_sourate: "Le témoignage de l'humain contre lui-même renforce le contraste avec les chevaux. Les chevaux agissent sans conscience morale mais avec loyauté. L'humain est conscient mais ingrat — c'est pire.",
        axe4_coherence: "Le Coran utilise shahīd pour le témoin et le martyr. En 75:14 : « bal al-insānu 'alā nafsihi basīra » (l'humain est clairvoyant sur lui-même). Le même thème de la conscience intérieure.",
        axe5_frequence: "Être témoin de sa propre ingratitude est la condition qui rend la correction possible. Si l'humain sait, il peut changer. La conscience est le premier pas vers la justice."
      }
    }
  };

  // ---- hbb (لحب) id=930 ----
  const hbbAxes = {
    sense_chosen: "amour",
    concept_chosen: "Amour/Affection",
    concepts: {
      "Amour/Affection": {
        status: "retenu",
        senses: ["aimer", "affection", "préférer"],
        proof_ctx: "Le sens retenu est « Amour/Affection ». Le mot ḥubb est un masdar en idafa (li-ḥubbi = pour l'amour de). L'amour est un mouvement intérieur vers ce qu'on désire. Il est lié au khayr (biens) — l'humain est intense dans son amour des biens. Distinction avec « Graine/Semence » : la graine est un objet physique, ici le contexte est moral (amour + biens). Distinction avec « Lien » : le lien est un objet physique, pas un sentiment.",
        axe1_verset: "Le mot ḥubb est lié à al-khayr (les biens) par une idafa — « l'amour des biens ». Puis shadīd (intense) qualifie l'humain. Le champ lexical est : amour + biens + intensité. L'humain est consumé par son attachement aux biens matériels.",
        axe2_voisins: "Le verset 8 conclut le portrait moral : ingrat (v6), conscient (v7), avide (v8). L'amour des biens est la cause de l'ingratitude — l'humain oublie son Seigneur parce qu'il ne pense qu'aux biens.",
        axe3_sourate: "L'amour des biens est le mécanisme de l'ingratitude. La sourate dit : les chevaux donnent tout (v1-5), l'humain veut tout garder (v8). Le contraste est entre le don total et la rétention totale.",
        axe4_coherence: "Le Coran décrit souvent l'amour des biens comme un obstacle (3:14, 89:20). L'usage est cohérent avec cette critique coranique du matérialisme.",
        axe5_frequence: "L'amour excessif des biens empêche la mission de justice. Le khalifa doit distribuer équitablement, pas thésauriser. L'amour des biens est l'ennemi de la justice."
      },
      "Graine/Semence": {
        status: "nul",
        senses: ["graine", "grain"],
        proof_ctx: "La graine est un objet physique. Le verset parle d'amour (sentiment), pas de semences."
      },
      "Lien": {
        status: "nul",
        senses: ["corde"],
        proof_ctx: "Le lien/corde est un objet physique. Hors contexte moral."
      }
    }
  };

  // ---- ḫyr (الخير) id=557 ----
  const xyrAxes = {
    sense_chosen: "les biens",
    concept_chosen: "Bien/Excellence",
    concepts: {
      "Bien/Excellence": {
        status: "retenu",
        senses: ["bien", "meilleur", "bon"],
        proof_ctx: "Le sens retenu est « Bien/Excellence ». Le mot al-khayr est un nom défini — « le bien, les biens ». Le khayr dans le contexte coranique, quand il est lié à l'amour (ḥubb) et à l'intensité (shadīd), désigne les biens matériels — la richesse, les possessions. Le Lane's confirme que khayr peut désigner les biens terrestres (la richesse). Distinction avec « Choix/Préférence » : le choix est un acte de sélection, le bien est l'objet désiré.",
        axe1_verset: "Le mot al-khayr est l'objet de l'amour (li-ḥubb al-khayr). Le champ lexical est : amour + biens + intensité. Les biens sont ce que l'humain désire intensément au point d'oublier son Seigneur.",
        axe2_voisins: "L'amour des biens (v8) explique l'ingratitude (v6) et la conscience coupable (v7). Les biens sont le moteur de la faute morale décrite dans cette section.",
        axe3_sourate: "Les biens matériels sont ce que l'humain thésaurise au lieu de distribuer justement. La sourate oppose les créatures qui donnent leur souffle (v1) à l'humain qui retient ses biens (v8).",
        axe4_coherence: "Le Coran utilise khayr au sens de biens/richesse en 2:180, 89:20, 100:8. L'usage est cohérent.",
        axe5_frequence: "Les biens sont un outil pour la mission de justice — ils doivent être partagés, pas accumulés. L'amour excessif des biens est l'obstacle principal à la mission du khalifa."
      },
      "Choix/Préférence": {
        status: "nul",
        senses: ["choisir", "préférer"],
        proof_ctx: "Le choix est un acte de sélection. Le verset parle d'amour d'un objet (les biens), pas d'un acte de choix. Hors sujet."
      }
    }
  };

  // ---- šdd (لشديد) id=639 ----
  const sddAxes = {
    sense_chosen: "intense",
    concept_chosen: "Force/Intensité",
    concepts: {
      "Force/Intensité": {
        status: "retenu",
        senses: ["serrer", "force", "sévérité", "intensité"],
        proof_ctx: "Le sens retenu est « Force/Intensité ». Le mot shadīd est un adjectif de forme fa'īl — « intense, fort ». Il qualifie l'humain dans son amour des biens : l'humain est intense dans cet amour. La forme fa'īl indique un état permanent et profond. L'intensité est la mesure de l'attachement — pas un attachement léger, mais un attachement qui domine.",
        axe1_verset: "Le mot shadīd est l'attribut de l'insān (renforcé par la- emphase). Il est lié à ḥubb al-khayr (l'amour des biens) par la préposition li-. Le champ lexical est : humain + amour des biens + certes + intense.",
        axe2_voisins: "L'intensité de l'amour des biens (v8) est la troisième caractéristique après l'ingratitude (v6) et la conscience (v7). La gradation s'achève sur le plus accablant : non seulement ingrat et conscient, mais en plus intense dans l'avidité.",
        axe3_sourate: "L'intensité contraste avec la scène des chevaux. Les chevaux sont intenses dans l'effort physique (v1-5). L'humain est intense dans l'amour des biens (v8). La même énergie, mais dirigée différemment.",
        axe4_coherence: "Le Coran utilise shadīd fréquemment pour décrire l'intensité — du châtiment, de la force, de l'attachement. L'usage est cohérent.",
        axe5_frequence: "L'intensité en soi n'est pas mauvaise — c'est sa direction qui compte. Intense dans la justice = vertu. Intense dans l'amour des biens = vice. La sourate dénonce le mauvais usage de l'intensité humaine."
      }
    }
  };

  // VWAs v6
  await upsertVWA(6152, 'ans', 866, ansAxes, 1);
  await upsertVWA(6152, 'rbb', 253, rbbAxes, 2);
  await upsertVWA(6152, 'knd', kndId, kndAxes, 3);
  console.log('VERSET 100:6 — TERMINÉ');
  console.log('  ans (أنس) → sens "Familiarité/Sociabilité" → mot "l\'être humain"');
  console.log('  rbb (ربب) → sens "Seigneurie/Autorité bienveillante" → mot "son Seigneur"');
  console.log('  knd (كند) → sens "Ingratitude/Reniement" → mot "ingrat"');

  // VWAs v7
  await upsertVWA(6153, 'shhd', 382, shhdAxes, 1);
  console.log('VERSET 100:7 — TERMINÉ');
  console.log('  shhd (شهد) → sens "Témoignage/Présence" → mot "témoin"');

  // VWAs v8
  await upsertVWA(6154, 'hbb', 930, hbbAxes, 1);
  await upsertVWA(6154, 'xyr', 557, xyrAxes, 2);
  await upsertVWA(6154, 'sdd', 639, sddAxes, 3);
  console.log('VERSET 100:8 — TERMINÉ');
  console.log('  hbb (حبب) → sens "Amour/Affection" → mot "amour"');
  console.log('  ḫyr (خير) → sens "Bien/Excellence" → mot "les biens"');
  console.log('  šdd (شدد) → sens "Force/Intensité" → mot "intense"');

  // TRANSLATIONS v6-v8
  await updateVerse(6152, {
    translation_arab: "L'être humain est certes ingrat envers son Seigneur,",
    full_translation: "L'homme est, certes, ingrat envers son Seigneur ;",
    segments: [
      {fr:"Certes", phon:"inna", arabic:"إِنَّ", position:1, word_key:null, is_particle:true},
      {fr:"l'être humain", pos:"nom", phon:"al-insān", arabic:"ٱلْإِنسَـٰنَ", position:2, word_key:"ans", is_particle:false, sense_retenu:"être humain"},
      {fr:"envers son Seigneur", pos:"nom", phon:"li-rabbihi", arabic:"لِرَبِّهِۦ", position:3, word_key:"rbb", is_particle:false, sense_retenu:"seigneur"},
      {fr:"est certes ingrat", pos:"adj", phon:"la-kanūd", arabic:"لَكَنُودٌ", position:4, word_key:"knd", is_particle:false, sense_retenu:"être ingrat"}
    ],
    translation_explanation: `§DEMARCHE§

La particule **inna** (certes) ouvre une phrase nominale emphatique — ce qui suit est une vérité affirmée avec force. C'est la réponse au serment des versets 1-5.

Le mot **al-insān** est un nom défini — « l'être humain » en tant que catégorie, pas un individu. Le Lane's rattache insān à la racine a-n-s qui signifie être familier, sociable.

Le mot **li-rabbihi** est une préposition (li = envers) suivie de rabb (Seigneur) en idafa avec le pronom « hi » (son). La relation est directionnelle : l'ingratitude de l'humain est dirigée ENVERS celui qui l'a élevé et nourri.

Le mot **la-kanūd** est un adjectif de forme fa'ūl (une forme qui dit que la personne est PROFONDÉMENT et DURABLEMENT dans cet état). Le la- est une particule d'emphase. Le Lane's donne : ingrat, celui qui nie les bienfaits, celui qui ne retient que les malheurs et oublie les bienfaits.

§JUSTIFICATION§

**être humain** — Le sens retenu est « Familiarité/Sociabilité ». Le mot « être humain » est choisi car c'est le terme français courant pour insān. L'alternative « homme » est écartée car elle exclut les femmes — le texte arabe parle de l'espèce humaine entière.

**Seigneur** — Le sens retenu est « Seigneurie/Autorité bienveillante ». Le mot « Seigneur » est choisi car il capture l'autorité bienveillante du rabb — celui qui élève et prend soin. L'alternative « maître » est écartée car elle implique une relation de domination, alors que rabb implique le soin et l'éducation.

**ingrat** — Le sens retenu est « Ingratitude/Reniement ». Le mot « ingrat » est choisi car il capture exactement l'état de celui qui ne reconnaît pas les bienfaits reçus. L'alternative « renégat » est écartée car elle implique une trahison active — l'ingratitude est plus passive, c'est un oubli volontaire.

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens pour ce verset. La seule nuance est que certaines traduisent kanūd par « ingrat » et d'autres par « récalcitrant ». Le Lane's est clair : kanūd est l'ingratitude face aux bienfaits, pas la rébellion. « Ingrat » est plus fidèle que « récalcitrant ».`
  });

  await updateVerse(6153, {
    translation_arab: "et il en est certes témoin,",
    full_translation: "et il est certes témoin de cela ;",
    segments: [
      {fr:"et certes il", phon:"wa-innahu", arabic:"وَإِنَّهُۥ", position:1, word_key:null, is_particle:true},
      {fr:"de cela", phon:"'alā dhālika", arabic:"عَلَىٰ ذَٰلِكَ", position:2, word_key:null, is_particle:true},
      {fr:"en est certes", phon:"", arabic:"", position:3, word_key:null, is_particle:true},
      {fr:"témoin", pos:"adj", phon:"la-shahīd", arabic:"لَشَهِيدٌ", position:4, word_key:"shhd", is_particle:false, sense_retenu:"témoigner"}
    ],
    translation_explanation: `§DEMARCHE§

La construction **wa-innahu** (et certes il) reprend l'emphase du verset 6. Le pronom « hu » renvoie à l'insān. La particule wa- (et) ajoute une information.

L'expression **'alā dhālika** (sur cela / de cela) renvoie à l'ingratitude du verset 6. Le pointeur dhālika (cela) fait référence à ce qui précède.

Le mot **la-shahīd** est un adjectif de forme fa'īl (une forme qui dit que la personne est témoin de manière constante et profonde). Le la- emphatique renforce : il est CERTES témoin. L'humain sait qu'il est ingrat — sa conscience le lui dit.

§JUSTIFICATION§

**témoin** — Le sens retenu est « Témoignage/Présence ». Le mot « témoin » est choisi car il capture l'idée de celui qui a vu et qui sait. L'alternative « spectateur » est écartée car le spectateur est passif et extérieur, alors que le témoin est impliqué — il pourra être appelé à témoigner.

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens. La question est de savoir si le « témoin » est l'humain lui-même (il est témoin de sa propre ingratitude) ou Dieu. Le texte dit « innahu » (il) qui renvoie grammaticalement au sujet le plus proche : l'insān. L'humain est témoin contre lui-même.`
  });

  await updateVerse(6154, {
    translation_arab: "et il est certes intense dans son amour des biens.",
    full_translation: "et pour l'amour des richesses, il est certes ardent.",
    segments: [
      {fr:"et certes il", phon:"wa-innahu", arabic:"وَإِنَّهُۥ", position:1, word_key:null, is_particle:true},
      {fr:"dans son amour", pos:"nom", phon:"li-ḥubbi", arabic:"لِحُبِّ", position:2, word_key:"hbb", is_particle:false, sense_retenu:"aimer"},
      {fr:"des biens", pos:"nom", phon:"al-khayr", arabic:"ٱلْخَيْرِ", position:3, word_key:"xyr", is_particle:false, sense_retenu:"bien"},
      {fr:"est certes intense", pos:"adj", phon:"la-shadīd", arabic:"لَشَدِيدٌ", position:4, word_key:"sdd", is_particle:false, sense_retenu:"intensité"}
    ],
    translation_explanation: `§DEMARCHE§

La construction **wa-innahu** (et certes il) poursuit le portrait moral de l'humain (troisième verset consécutif avec inna).

Le mot **li-ḥubbi** est un masdar (amour) en idafa — « pour l'amour de ». La préposition li- indique la cause : c'est À CAUSE de l'amour des biens qu'il est intense. Le Lane's définit ḥubb comme l'amour, l'affection, la préférence.

Le mot **al-khayr** est un nom défini — « le bien, les biens ». Dans ce contexte, al-khayr désigne les biens matériels, la richesse. Le Lane's confirme cet usage : khayr au sens de richesse, possessions.

Le mot **la-shadīd** est un adjectif de forme fa'īl (une forme d'intensité) avec la- emphatique. Il qualifie l'humain : il est INTENSÉMENT attaché aux biens. Le Lane's donne : fort, intense, sévère, serré.

§JUSTIFICATION§

**amour** — Le sens retenu est « Amour/Affection ». Le mot « amour » est choisi car il décrit le sentiment qui pousse l'humain vers les biens. L'alternative « attachement » est écartée car l'attachement est plus faible que l'amour — le texte dit que l'humain est INTENSE dans ce sentiment.

**biens** — Le sens retenu est « Bien/Excellence ». Le mot « biens » est choisi car dans le contexte de l'amour intense, il s'agit des possessions matérielles. L'alternative « bien (vertu) » est écartée car le verset dénonce un excès, pas une vertu.

**intense** — Le sens retenu est « Force/Intensité ». Le mot « intense » est choisi car il qualifie le degré de l'amour. L'alternative « violent » est écartée car violent implique une destruction physique, alors qu'intense décrit un degré élevé.

§CRITIQUE§

Hamidullah donne « pour l'amour des richesses, il est certes ardent ». Le mot « ardent » est du registre littéraire — « intense » est plus courant. La traduction « richesses » au lieu de « biens » est acceptable mais ajoute une connotation d'abondance que le texte n'a pas forcément. Al-khayr est plus neutre — ce sont les biens en général, pas forcément une grande richesse.`
  });

  console.log('\nTraductions v6-v8 insérées ✓\n');
}

// ---- VERSETS 100:9-11 — Les conséquences ----
async function verse100_9_to_11() {
  console.log('\n====== VERSETS 100:9-11 ======\n');

  const {data:bevrWA} = await sb.from('word_analyses').select('id').eq('word_key','bevr').single();
  const {data:hslWA} = await sb.from('word_analyses').select('id').eq('word_key','hsl').single();
  const bevrId = bevrWA.id, hslId = hslWA.id;

  // ---- elm (يعلم) id=254 ----
  const elmAxes = {
    sense_chosen: "savoir",
    concept_chosen: "Savoir/Connaissance",
    concepts: {
      "Savoir/Connaissance": {
        status: "retenu",
        senses: ["savoir", "connaître", "être informé", "certitude", "savant", "science", "enseignement"],
        proof_ctx: "Le sens retenu est « Savoir/Connaissance ». Le verbe ya'lamu est un inaccompli (une forme qui dit que l'action est en cours ou habituelle) — « ne sait-il pas ? ». La question rhétorique (a-fa-lā ya'lamu = est-ce qu'il ne sait pas ?) suppose une réponse positive : il DEVRAIT savoir. La connaissance est un état intérieur de certitude.",
        axe1_verset: "Le verbe ya'lamu est suivi de « idhā bu'thira mā fī l-qubūr » (quand sera retourné ce qui est dans les tombes). La question porte sur une réalité future : l'humain ne sait-il pas ce qui va arriver ? Le champ lexical est : savoir + quand + tombes retournées. La connaissance attendue est celle des conséquences de l'ingratitude.",
        axe2_voisins: "Après le portrait moral (v6-8), le verset 9 bascule vers l'eschatologie. La question « ne sait-il pas ? » est le pont entre la dénonciation et l'avertissement. Le savoir est ce qui manque ou ce que l'humain refuse de voir.",
        axe3_sourate: "La sourate passe de l'image (les chevaux) au verdict (l'ingratitude) puis à l'avertissement (les tombes). Le savoir est la clé : si l'humain savait, il ne serait pas ingrat.",
        axe4_coherence: "Le Coran utilise a-fa-lā ya'lamu comme question rhétorique d'avertissement. L'usage est cohérent avec d'autres passages similaires.",
        axe5_frequence: "Le savoir est la base de la mission du khalifa. Sans connaissance des conséquences, pas de justice possible. La sourate rappelle que le savoir est disponible — c'est l'humain qui le refuse."
      },
      "Marque/Signe": { status: "nul", senses: ["marquer", "signe", "drapeau"], proof_ctx: "Le verset utilise un verbe (ya'lamu = il sait), pas un nom. Hors sujet." },
      "Monde/Création": { status: "nul", senses: ["monde", "les mondes"], proof_ctx: "Sans rapport avec le verbe savoir dans ce contexte." },
      "Sens isolé/Enseigner": { status: "nul", senses: ["enseigner"], proof_ctx: "Enseigner est transitif — ici le verbe est intransitif (savoir)." },
      "Lieu/Géographie": { status: "nul", senses: ["informer", "nommer"], proof_ctx: "Sans rapport." },
      "Sens isolé/Homonyme": { status: "nul", senses: ["homonyme"], proof_ctx: "Sans rapport." }
    }
  };

  // ---- bevr (بعثر) — NEW ----
  const bevrAxes = {
    sense_chosen: "retourné",
    concept_chosen: "Exhumation/Mise à jour",
    concepts: {
      "Exhumation/Mise à jour": {
        status: "retenu",
        senses: ["retourner", "exhumer", "mettre à jour", "faire sortir ce qui est enfoui"],
        proof_ctx: "Le sens retenu est « Exhumation/Mise à jour ». Le verbe bu'thira est un passif (une forme qui dit que l'action est SUBIE) — « ce qui est dans les tombes est retourné/exhumé ». L'exhumation est l'acte de faire remonter ce qui était enfoui. Le Lane's donne : tirer ce qui est enfoui et le mettre à découvert. Le passif dit que les morts ne font pas l'action — elle est faite sur eux.",
        axe1_verset: "Le verbe bu'thira est suivi de « mā fī l-qubūr » (ce qui est dans les tombes). Le champ lexical est : retourner + tombes. L'exhumation des tombes est l'image eschatologique — ce qui était caché sous terre revient à la surface.",
        axe2_voisins: "Le verset 10 ajoute « ce qui est dans les poitrines est trié ». Les deux versets forment un parallèle : l'extérieur (tombes) et l'intérieur (poitrines) sont mis à jour. Tout ce qui était caché est révélé.",
        axe3_sourate: "L'exhumation des tombes répond au soulèvement de poussière (v4). Les chevaux soulèvent la poussière de la terre (v4), Dieu retourne les tombes de la terre (v9). Le même mouvement — du bas vers le haut — mais à une échelle cosmique.",
        axe4_coherence: "Le Coran utilise bu'thira en 82:4 dans le même sens (idhā l-qubūru bu'thirat). L'usage est cohérent.",
        axe5_frequence: "L'exhumation des tombes est le rappel que rien ne reste caché. L'humain ingrat qui croit que ses actes sont enterrés découvrira que tout revient à la surface. La justice exige la vérité — et la vérité sort des tombes."
      }
    }
  };

  // ---- qbr (القبور) id=2071 ----
  const qbrAxes = {
    sense_chosen: "tombes",
    concept_chosen: "Tombe/Sépulture",
    concepts: {
      "Tombe/Sépulture": {
        status: "retenu",
        senses: ["tombe", "enterrer"],
        proof_ctx: "Le sens retenu est « Tombe/Sépulture ». Le mot al-qubūr est le pluriel de qabr — « les tombes ». Les tombes sont le lieu où les morts sont enfouis. Le mot est défini avec al- — les tombes connues, celles de tous les humains.",
        axe1_verset: "Le mot al-qubūr est précédé de « mā fī » (ce qui est dans). Le champ lexical est : retourner + ce qui est dans + les tombes. Les tombes contiennent les corps des morts — l'exhumation les ramène à la vie.",
        axe2_voisins: "Les tombes (v9) s'opposent aux poitrines (v10). L'extérieur (corps enfouis) et l'intérieur (secrets cachés) sont tous deux mis à jour. Le parallélisme est complet.",
        axe3_sourate: "Les tombes rappellent la mortalité. L'humain qui accumule les biens (v8) oublie qu'il finira dans une tombe. L'exhumation est le rappel brutal de cette réalité.",
        axe4_coherence: "Le Coran mentionne les tombes en 22:7, 35:22, 36:51, 60:13, 82:4, 100:9. L'usage est toujours lié à la résurrection.",
        axe5_frequence: "Les tombes rappellent que la vie terrestre a une fin. La mission de justice doit être accomplie avant cette fin — il n'y aura pas de seconde chance."
      }
    }
  };

  // ---- hsl (حصل) — NEW ----
  const hslAxes = {
    sense_chosen: "trié",
    concept_chosen: "Extraction/Tri",
    concepts: {
      "Extraction/Tri": {
        status: "retenu",
        senses: ["extraire", "trier", "mettre en évidence", "séparer le pur de l'impur"],
        proof_ctx: "Le sens retenu est « Extraction/Tri ». Le verbe ḥuṣṣila est un passif forme II (une forme intensive + passive — « ce qui est trié intensément »). L'extraction est l'acte de séparer l'essentiel de l'accessoire — comme l'or de la pierre, le grain de la paille. Le Lane's donne : produire, extraire l'or de la pierre de la mine, séparer le grain de la paille. Distinction avec « Résultat/Acquisition » : le résultat est l'état final, le tri est le processus actif de séparation.",
        axe1_verset: "Le verbe ḥuṣṣila est suivi de « mā fī ṣ-ṣudūr » (ce qui est dans les poitrines). Le champ lexical est : trier + ce qui est dans + les poitrines. Le tri met à jour les intentions cachées — les bons et les mauvais sentiments sont séparés.",
        axe2_voisins: "Le tri des poitrines (v10) complète l'exhumation des tombes (v9). Le parallèle est : les corps sont exhumés (extérieur), les intentions sont triées (intérieur). Tout est mis à nu.",
        axe3_sourate: "Le tri des poitrines est la réponse à l'ingratitude cachée. L'humain peut cacher son ingratitude dans sa poitrine, mais le tri la révélera. L'amour des biens (v8) sera exposé.",
        axe4_coherence: "Le Coran utilise ḥuṣṣila en 100:10 (unique occurrence de cette forme). Le sens de tri/extraction est confirmé par le parallèle avec les tombes.",
        axe5_frequence: "Le tri est l'image de la justice parfaite — séparer le vrai du faux, le bon du mauvais. La mission du khalifa est précisément ce tri dans la société. Dieu fait le tri ultime."
      },
      "Résultat/Acquisition": {
        status: "nul",
        senses: ["résultat", "récolte", "acquis"],
        proof_ctx: "Le résultat est l'état final passif. Le verset utilise un passif forme II (intensif) qui implique un processus actif de tri, pas un simple résultat."
      },
      "Sens isolé/Anatomie": {
        status: "nul",
        senses: ["jabot (oiseau)"],
        proof_ctx: "Sans rapport avec le contexte eschatologique."
      }
    }
  };

  // ---- sdr (الصدور) id=1245 ----
  const sdrAxes = {
    sense_chosen: "poitrines",
    concept_chosen: "Poitrine/Intériorité",
    concepts: {
      "Poitrine/Intériorité": {
        status: "retenu",
        senses: ["poitrine", "cœur (intérieur)"],
        proof_ctx: "Le sens retenu est « Poitrine/Intériorité ». Le mot aṣ-ṣudūr est le pluriel de ṣadr — « les poitrines ». La poitrine est le siège des sentiments et des intentions cachés dans la pensée arabe. Le mot est défini avec al- — les poitrines de tous les humains. Distinction avec « Émission/Sortie » : l'émission est un mouvement vers l'extérieur, la poitrine est un contenant intérieur.",
        axe1_verset: "Le mot aṣ-ṣudūr est précédé de « mā fī » (ce qui est dans). Le champ lexical est : trier + ce qui est dans + les poitrines. Les poitrines contiennent les sentiments cachés — l'amour des biens, l'ingratitude, la conscience.",
        axe2_voisins: "Les poitrines (v10) répondent aux tombes (v9). Tombes = extérieur caché. Poitrines = intérieur caché. Le même verbe de mise à jour s'applique aux deux.",
        axe3_sourate: "Les poitrines contiennent l'ingratitude et l'amour des biens dénoncés dans les versets 6-8. Le tri révélera ce que l'humain cachait dans sa poitrine.",
        axe4_coherence: "Le Coran utilise ṣudūr fréquemment comme siège des sentiments (3:29, 11:5, 28:69, 39:7). L'usage est cohérent.",
        axe5_frequence: "Les poitrines sont le lieu de la décision morale. La mission de justice commence dans la poitrine — par l'intention juste. Le tri des poitrines est le jugement de ces intentions."
      },
      "Émission/Sortie": {
        status: "nul",
        senses: ["sortir", "émettre"],
        proof_ctx: "L'émission est un mouvement vers l'extérieur. Le verset parle de ce qui EST DANS les poitrines (contenu), pas de ce qui en sort."
      },
      "Eau/Liquide": {
        status: "nul",
        senses: ["source (début)"],
        proof_ctx: "Sans rapport avec le contexte."
      }
    }
  };

  // ---- khbr (لخبير) id=1564 ----
  const khbrAxes = {
    sense_chosen: "parfaitement informé",
    concept_chosen: "Information/Connaissance",
    concepts: {
      "Information/Connaissance": {
        status: "retenu",
        senses: ["informer", "connaître en profondeur"],
        proof_ctx: "Le sens retenu est « Information/Connaissance ». Le mot khabīr est un adjectif de forme fa'īl — « celui qui connaît en profondeur, l'expert ». La forme fa'īl indique un état permanent et profond de connaissance. Le Lane's donne : celui qui connaît les choses dans leur détail intérieur. Le la- emphatique renforce : certes parfaitement informé.",
        axe1_verset: "Le mot khabīr est l'attribut de rabbahum (leur Seigneur). Le champ lexical est : Seigneur + d'eux + ce jour-là + certes + parfaitement informé. Le Seigneur sait tout sur eux — rien ne Lui échappe.",
        axe2_voisins: "Après l'exhumation des tombes (v9) et le tri des poitrines (v10), le verset 11 conclut : le Seigneur est parfaitement informé. C'est Lui qui a ordonné l'exhumation et le tri — parce qu'Il sait.",
        axe3_sourate: "Le verset 11 ferme la sourate par une affirmation de l'omniscience divine. L'humain ingrat (v6) qui cachait ses sentiments dans sa poitrine (v10) fait face à un Seigneur qui sait tout (v11). Le cercle se ferme.",
        axe4_coherence: "Le Coran utilise khabīr plus de 40 fois pour qualifier Dieu. C'est un attribut constant de la connaissance divine en profondeur.",
        axe5_frequence: "L'omniscience divine est le garant de la justice. Si le Seigneur sait tout, alors aucune injustice ne passera inaperçue. Le khalifa agit sous le regard d'un Seigneur parfaitement informé."
      }
    }
  };

  // VWAs v9
  await upsertVWA(6155, 'elm', 254, elmAxes, 1);
  await upsertVWA(6155, 'bevr', bevrId, bevrAxes, 2);
  await upsertVWA(6155, 'qbr', 2071, qbrAxes, 3);
  console.log('VERSET 100:9 — TERMINÉ');
  console.log('  elm (علم) → sens "Savoir/Connaissance" → mot "savoir"');
  console.log('  bevr (بعثر) → sens "Exhumation/Mise à jour" → mot "retourné"');
  console.log('  qbr (قبر) → sens "Tombe/Sépulture" → mot "tombes"');

  // VWAs v10
  await upsertVWA(6156, 'hsl', hslId, hslAxes, 1);
  await upsertVWA(6156, 'sdr', 1245, sdrAxes, 2);
  console.log('VERSET 100:10 — TERMINÉ');
  console.log('  hsl (حصل) → sens "Extraction/Tri" → mot "trié"');
  console.log('  sdr (صدر) → sens "Poitrine/Intériorité" → mot "poitrines"');

  // VWAs v11
  await upsertVWA(6157, 'rbb', 253, {
    sense_chosen: "leur Seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur", "maître", "propriétaire", "celui qui élève"],
        proof_ctx: "Même analyse que le verset 6. Le rabb revient en clôture de la sourate — le Seigneur qui était l'objet de l'ingratitude (v6) est aussi celui qui sait tout (v11).",
        axe1_verset: "Le mot rabbahum est en position de sujet de inna — « certes leur Seigneur ». Le possessif « hum » (leur) inclut tous les humains.",
        axe2_voisins: "Le rabb ouvre (v6) et ferme (v11) la section morale. La structure est circulaire.",
        axe3_sourate: "Le Seigneur encadre la sourate : il est celui envers qui l'humain est ingrat et celui qui sait tout.",
        axe4_coherence: "Usage cohérent avec les 980 occurrences de rabb dans le Coran.",
        axe5_frequence: "Le Seigneur est le garant ultime de la justice."
      }
    }
  }, 1);
  await upsertVWA(6157, 'khbr', 1564, khbrAxes, 2);
  console.log('VERSET 100:11 — TERMINÉ');
  console.log('  rbb (ربب) → sens "Seigneurie/Autorité bienveillante" → mot "leur Seigneur"');
  console.log('  khbr (خبر) → sens "Information/Connaissance" → mot "parfaitement informé"');

  // TRANSLATIONS v9-v11
  await updateVerse(6155, {
    translation_arab: "Ne sait-il pas que quand sera retourné ce qui est dans les tombes,",
    full_translation: "Ne sait-il donc pas que lorsque ce qui est dans les tombes sera bouleversé,",
    segments: [
      {fr:"Ne sait-il pas", phon:"a-fa-lā ya'lamu", arabic:"أَفَلَا يَعْلَمُ", position:1, word_key:"elm", is_particle:false, sense_retenu:"savoir", pos:"verbe"},
      {fr:"quand", phon:"idhā", arabic:"إِذَا", position:2, word_key:null, is_particle:true},
      {fr:"sera retourné", pos:"verbe", phon:"bu'thira", arabic:"بُعْثِرَ", position:3, word_key:"bevr", is_particle:false, sense_retenu:"retourner"},
      {fr:"ce qui est", phon:"mā", arabic:"مَا", position:4, word_key:null, is_particle:true},
      {fr:"dans", phon:"fī", arabic:"فِى", position:5, word_key:null, is_particle:true},
      {fr:"les tombes", pos:"nom", phon:"al-qubūr", arabic:"ٱلْقُبُورِ", position:6, word_key:"qbr", is_particle:false, sense_retenu:"tombe"}
    ],
    translation_explanation: `§DEMARCHE§

La formule **a-fa-lā ya'lamu** est une question rhétorique composée de : a- (est-ce que) + fa- (alors) + lā (ne pas) + ya'lamu (il sait, verbe inaccompli). La question rhétorique suppose une réponse positive : il DEVRAIT savoir. Le verbe est à l'inaccompli — une connaissance qui devrait être habituelle, pas ponctuelle.

Le mot **idhā** (quand/lorsque) introduit une condition temporelle future — quand cela arrivera.

Le verbe **bu'thira** est un passif de la racine b-'-th-r (une forme qui dit que l'action est subie). Le Lane's définit : tirer ce qui est enfoui et le mettre à découvert, soulever ce qui est dans une chose et le faire sortir. Les morts dans les tombes sont retournés — ramenés de sous terre à la surface.

Le mot **al-qubūr** est le pluriel de qabr — les tombes. C'est le lieu de l'enfouissement des morts.

§JUSTIFICATION§

**sait** — Le sens retenu est « Savoir/Connaissance ». Le mot « savoir » est choisi car c'est le verbe français courant pour la connaissance. L'alternative « connaître » est écartée car connaître implique une familiarité avec un objet, alors que savoir porte sur un fait.

**retourné** — Le sens retenu est « Exhumation/Mise à jour ». Le mot « retourné » est choisi car il capture le mouvement de l'intérieur vers l'extérieur — la terre est retournée et ce qui était dessous apparaît. L'alternative « exhumé » est écartée car c'est du registre technique/médical, pas du français courant.

**tombes** — Le sens retenu est « Tombe/Sépulture ». Le mot « tombes » est du français courant. L'alternative « sépultures » est écartée car c'est du registre soutenu.

§CRITIQUE§

Hamidullah donne « bouleversé » au lieu de « retourné ». Le Lane's dit « tirer ce qui est enfoui et le mettre à découvert » — c'est un retournement, pas un bouleversement. « Retourner » est plus précis : on retourne la terre comme on retourne un sol pour voir ce qui est en dessous. « Bouleverser » ajoute une dimension émotionnelle absente du texte.`
  });

  await updateVerse(6156, {
    translation_arab: "et trié ce qui est dans les poitrines —",
    full_translation: "et que sera mis au jour ce qui est dans les poitrines...",
    segments: [
      {fr:"et trié", pos:"verbe", phon:"ḥuṣṣila", arabic:"وَحُصِّلَ", position:1, word_key:"hsl", is_particle:false, sense_retenu:"extraire"},
      {fr:"ce qui est", phon:"mā", arabic:"مَا", position:2, word_key:null, is_particle:true},
      {fr:"dans", phon:"fī", arabic:"فِى", position:3, word_key:null, is_particle:true},
      {fr:"les poitrines", pos:"nom", phon:"aṣ-ṣudūr", arabic:"ٱلصُّدُورِ", position:4, word_key:"sdr", is_particle:false, sense_retenu:"poitrine"}
    ],
    translation_explanation: `§DEMARCHE§

Le verbe **ḥuṣṣila** est un passif forme II (une forme intensive + passive — l'action de trier est faite intensément et est subie par l'objet). Le Lane's définit : extraire l'or de la pierre de la mine, séparer le grain de la paille. La forme II intensifie : ce n'est pas un tri superficiel mais un tri complet et minutieux.

Le mot **mā fī ṣ-ṣudūr** (ce qui est dans les poitrines) désigne les sentiments et intentions cachés. La poitrine (ṣadr) est le siège des intentions dans la pensée arabe. Ce qui est caché dans la poitrine — l'ingratitude, l'amour des biens — sera extrait et mis en évidence.

§JUSTIFICATION§

**trié** — Le sens retenu est « Extraction/Tri ». Le mot « trié » est choisi car il capture l'idée de séparer le bon du mauvais, le vrai du faux. L'alternative « extrait » est écartée car extraire n'implique pas forcément un tri — on peut extraire sans séparer. Le tri implique une évaluation.

**poitrines** — Le sens retenu est « Poitrine/Intériorité ». Le mot « poitrines » est choisi car c'est la traduction directe et courante de ṣudūr. L'alternative « cœurs » est écartée car le Coran distingue ṣadr (poitrine) de qalb (cœur) — ce sont deux réalités différentes.

§CRITIQUE§

Hamidullah donne « mis au jour ce qui est dans les poitrines ». C'est proche, mais « mis au jour » est plus vague que « trié ». Le Lane's insiste sur l'idée de séparation (comme l'or de la pierre) — le tri est plus précis que la simple mise au jour. Le tri implique un jugement : le bon est séparé du mauvais.`
  });

  await updateVerse(6157, {
    translation_arab: "certes leur Seigneur, ce jour-là, est d'eux parfaitement informé.",
    full_translation: "certes, ce jour-là, leur Seigneur sera parfaitement Connaisseur d'eux.",
    segments: [
      {fr:"certes", phon:"inna", arabic:"إِنَّ", position:1, word_key:null, is_particle:true},
      {fr:"leur Seigneur", pos:"nom", phon:"rabbahum", arabic:"رَبَّهُم", position:2, word_key:"rbb", is_particle:false, sense_retenu:"seigneur"},
      {fr:"d'eux", phon:"bihim", arabic:"بِهِمْ", position:3, word_key:null, is_particle:true},
      {fr:"ce jour-là", phon:"yawma'idhin", arabic:"يَوْمَئِذٍ", position:4, word_key:null, is_particle:true},
      {fr:"parfaitement informé", pos:"adj", phon:"la-khabīr", arabic:"لَّخَبِيرٌۢ", position:5, word_key:"khbr", is_particle:false, sense_retenu:"connaître en profondeur"}
    ],
    translation_explanation: `§DEMARCHE§

La particule **inna** (certes) ouvre une phrase emphatique — la conclusion de la sourate est affirmée avec force.

Le mot **rabbahum** est rabb (Seigneur) en idafa avec le pronom « hum » (leur) — « leur Seigneur ». Le possessif « leur » inclut tous les humains mentionnés depuis le verset 6.

Le mot **bihim** (d'eux) indique l'objet de la connaissance — le Seigneur est informé D'EUX, de tout ce qu'ils sont et font.

Le mot **yawma'idhin** (ce jour-là) est un adverbe temporel composé — il renvoie au jour où les tombes seront retournées et les poitrines triées.

Le mot **la-khabīr** est un adjectif de forme fa'īl avec la- emphatique (une forme qui dit que la personne possède cette qualité de manière permanente et profonde). Le Lane's définit khabīr : celui qui connaît les choses dans leur détail intérieur, l'expert qui sait tout sur le sujet. L'emphase (la-) renforce : CERTES parfaitement informé.

§JUSTIFICATION§

**Seigneur** — Même justification que le verset 6.

**parfaitement informé** — Le sens retenu est « Information/Connaissance ». Le mot « parfaitement informé » est choisi car il capture la connaissance complète et détaillée. L'alternative « expert » est écartée car expert implique une compétence acquise, alors que le Seigneur sait naturellement. L'alternative « au courant » est écartée car trop familier pour une affirmation aussi solennelle.

§CRITIQUE§

Hamidullah donne « Connaisseur » avec une majuscule pour en faire un attribut divin. Notre traduction « parfaitement informé » est plus descriptive — elle dit ce que le mot SIGNIFIE plutôt que de le transformer en titre. La différence est mineure mais notre approche est plus pédagogique.`
  });

  console.log('\nTraductions v9-v11 insérées ✓\n');
}

// ============================================================
// PHRASES DU QUOTIDIEN
// ============================================================
async function insertDailyPhrases() {
  console.log('\n====== PHRASES DU QUOTIDIEN ======\n');

  // Roots with no daily: edw(457), dbh(NEW), wry(685), qdh(NEW), ghyr(266), wst(836), knd(NEW), shhd(382), hbb(930), ḫyr(557), šdd(639), bevr(NEW), hsl(NEW), nqe(NEW), khbr(1564), thwr(625)
  // Roots with daily SKIP: sbh(440), jme(422), ans(866), rbb(253), elm(254), qbr(2071), sdr(1245)

  const {data:dbhWA} = await sb.from('word_analyses').select('id').eq('word_key','dbh').single();
  const {data:qdhWA} = await sb.from('word_analyses').select('id').eq('word_key','qdh').single();
  const {data:nqeWA} = await sb.from('word_analyses').select('id').eq('word_key','nqe').single();
  const {data:kndWA} = await sb.from('word_analyses').select('id').eq('word_key','knd').single();
  const {data:bevrWA} = await sb.from('word_analyses').select('id').eq('word_key','bevr').single();
  const {data:hslWA} = await sb.from('word_analyses').select('id').eq('word_key','hsl').single();

  // edw (457) — courir
  await insertDaily(457, 'courir', 'عَدَا الحِصَانُ', "'adā al-ḥiṣān", 'Le cheval a couru');
  await insertDaily(457, 'courir', 'عَدَا اللِّصُّ', "'adā al-liṣṣ", 'Le voleur a couru');
  await insertDaily(457, 'courir', 'يَعْدُو كُلَّ صَبَاحٍ', "ya'dū kulla ṣabāḥ", 'Il court chaque matin');
  console.log('  edw: 3 phrases ✓');

  // dbh (NEW) — haleter
  await insertDaily(dbhWA.id, 'haleter', 'ضَبَحَتِ الخَيْلُ', 'ḍabaḥati al-khayl', 'Les chevaux haletaient');
  await insertDaily(dbhWA.id, 'haleter', 'يَضْبَحُ مِنَ التَّعَبِ', "yaḍbaḥu mina at-ta'ab", 'Il halète de fatigue');
  await insertDaily(dbhWA.id, 'haleter', 'سَمِعْتُ ضَبْحَهُ', "sami'tu ḍabḥahu", "J'ai entendu son halètement");
  console.log('  dbh: 3 phrases ✓');

  // wry (685) — faire jaillir
  await insertDaily(685, 'faire jaillir', 'أَوْرَى النَّارَ', 'awrā an-nār', 'Il a fait jaillir le feu');
  await insertDaily(685, 'faire jaillir', 'أَوْرَى الزَّنْدَ', 'awrā az-zand', 'Il a frappé le briquet');
  await insertDaily(685, 'cacher', 'وَارَى الشَّيْءَ', 'wārā ash-shay\'', 'Il a caché la chose');
  console.log('  wry: 3 phrases ✓');

  // qdh (NEW) — étincelle
  await insertDaily(qdhWA.id, 'produire du feu', 'قَدَحَ الزَّنْدَ', 'qadaḥa az-zand', 'Il a frappé le briquet');
  await insertDaily(qdhWA.id, 'produire du feu', 'قَدَحَتِ الحَوَافِرُ', 'qadaḥati al-ḥawāfir', 'Les sabots ont fait des étincelles');
  await insertDaily(qdhWA.id, 'coupe', 'أَعْطِنِي قَدَحًا', "a'ṭinī qadaḥan", 'Donne-moi une coupe');
  console.log('  qdh: 3 phrases ✓');

  // ghyr (266) — attaquer
  await insertDaily(266, 'attaquer', 'أَغَارَ عَلَى العَدُوِّ', "aghāra 'alā al-'aduww", "Il a lancé un raid sur l'ennemi");
  await insertDaily(266, 'autre', 'هَذَا غَيْرُ ذَلِكَ', 'hādhā ghayru dhālika', "C'est autre que cela");
  await insertDaily(266, 'changer', 'غَيَّرَ رَأْيَهُ', "ghayyara ra'yahu", "Il a changé d'avis");
  console.log('  ghyr: 3 phrases ✓');

  // wst (836) — milieu
  await insertDaily(836, 'milieu', 'وَسَطَ المَدِينَةِ', 'wasaṭa al-madīna', 'Au milieu de la ville');
  await insertDaily(836, 'milieu', 'الوَسَطُ الذَّهَبِيُّ', 'al-wasaṭ adh-dhahabī', 'Le juste milieu');
  await insertDaily(836, 'milieu', 'جَلَسَ فِي الوَسَطِ', 'jalasa fī al-wasaṭ', "Il s'est assis au milieu");
  console.log('  wst: 3 phrases ✓');

  // knd (NEW) — ingratitude
  await insertDaily(kndWA.id, 'être ingrat', 'كَنَدَ النِّعْمَةَ', "kanada an-ni'ma", 'Il a nié le bienfait');
  await insertDaily(kndWA.id, 'être ingrat', 'لَا تَكُنْ كَنُودًا', 'lā takun kanūdan', 'Ne sois pas ingrat');
  await insertDaily(kndWA.id, 'être ingrat', 'إِنَّ الإِنسَانَ لَكَنُودٌ', 'inna al-insāna la-kanūd', "L'être humain est certes ingrat");
  console.log('  knd: 3 phrases ✓');

  // shhd (382) — témoigner
  await insertDaily(382, 'témoigner', 'شَهِدَ عَلَى نَفْسِهِ', "shahida 'alā nafsihi", 'Il a témoigné contre lui-même');
  await insertDaily(382, 'témoin', 'كَانَ شَاهِدًا', 'kāna shāhidan', 'Il était témoin');
  await insertDaily(382, 'être présent', 'شَهِدَ المَجْلِسَ', 'shahida al-majlis', "Il a assisté à l'assemblée");
  console.log('  shhd: 3 phrases ✓');

  // hbb (930) — aimer
  await insertDaily(930, 'aimer', 'أُحِبُّ هَذَا', 'uḥibbu hādhā', "J'aime ceci");
  await insertDaily(930, 'aimer', 'يُحِبُّ أَهْلَهُ', 'yuḥibbu ahlahu', 'Il aime sa famille');
  await insertDaily(930, 'aimer', 'الحُبُّ الصَّادِقُ', 'al-ḥubb aṣ-ṣādiq', "L'amour sincère");
  console.log('  hbb: 3 phrases ✓');

  // ḫyr (557) — bien
  await insertDaily(557, 'bien', 'هَذَا خَيْرٌ', 'hādhā khayr', "C'est bien");
  await insertDaily(557, 'bien', 'فَعَلَ خَيْرًا', "fa'ala khayran", 'Il a fait du bien');
  await insertDaily(557, 'meilleur', 'هُوَ خَيْرٌ مِنْهُ', 'huwa khayrun minhu', 'Il est meilleur que lui');
  console.log('  ḫyr: 3 phrases ✓');

  // šdd (639) — force
  await insertDaily(639, 'intensité', 'شَدِيدُ الحَرِّ', 'shadīd al-ḥarr', 'Une chaleur intense');
  await insertDaily(639, 'force', 'شَدَّ الحَبْلَ', 'shadda al-ḥabl', 'Il a serré la corde');
  await insertDaily(639, 'sévérité', 'عِقَابٌ شَدِيدٌ', "'iqābun shadīd", 'Un châtiment sévère');
  console.log('  šdd: 3 phrases ✓');

  // bevr (NEW) — retourner
  await insertDaily(bevrWA.id, 'retourner', 'بُعْثِرَتِ القُبُورُ', "bu'thirat al-qubūr", 'Les tombes ont été retournées');
  await insertDaily(bevrWA.id, 'exhumer', 'بَعْثَرَ الأَرْضَ', "ba'thara al-arḍ", 'Il a retourné la terre');
  await insertDaily(bevrWA.id, 'mettre à jour', 'بَعْثَرَ مَا فِيهِ', "ba'thara mā fīhi", 'Il a mis à jour ce qui était dedans');
  console.log('  bevr: 3 phrases ✓');

  // hsl (NEW) — trier
  await insertDaily(hslWA.id, 'extraire', 'حَصَّلَ الذَّهَبَ', 'ḥaṣṣala adh-dhahab', "Il a extrait l'or");
  await insertDaily(hslWA.id, 'résultat', 'المَحْصُولُ جَيِّدٌ', 'al-maḥṣūl jayyid', 'La récolte est bonne');
  await insertDaily(hslWA.id, 'trier', 'حَصَّلَ العِلْمَ', "ḥaṣṣala al-'ilm", 'Il a acquis le savoir');
  console.log('  hsl: 3 phrases ✓');

  // nqe (NEW) — poussière
  await insertDaily(nqeWA.id, 'poussière soulevée', 'أَثَارَ نَقْعًا', "athāra naq'an", 'Il a soulevé de la poussière');
  await insertDaily(nqeWA.id, 'tremper', 'نَقَعَ الدَّوَاءَ', "naqa'a ad-dawā'", 'Il a trempé le remède');
  await insertDaily(nqeWA.id, 'eau stagnante', 'مَاءٌ نَاقِعٌ', "mā'un nāqi'", "De l'eau stagnante");
  console.log('  nqe: 3 phrases ✓');

  // khbr (1564) — informer
  await insertDaily(1564, 'informer', 'أَخْبَرَنِي بِالأَمْرِ', 'akhbaranī bi-l-amr', "Il m'a informé de l'affaire");
  await insertDaily(1564, 'connaître en profondeur', 'هُوَ خَبِيرٌ بِهَذَا', 'huwa khabīrun bi-hādhā', 'Il connaît cela en profondeur');
  await insertDaily(1564, 'informer', 'مَا الخَبَرُ', 'mā al-khabar', "Quelles sont les nouvelles ?");
  console.log('  khbr: 3 phrases ✓');

  // thwr (625) — soulever
  await insertDaily(625, 'soulever', 'أَثَارَ الغُبَارَ', 'athāra al-ghubār', 'Il a soulevé la poussière');
  await insertDaily(625, 'soulever', 'ثَارَ الشَّعْبُ', "thāra ash-sha'b", "Le peuple s'est soulevé");
  await insertDaily(625, 'soulever', 'أَثَارَ المَسْأَلَةَ', "athāra al-mas'ala", 'Il a soulevé la question');
  console.log('  thwr: 3 phrases ✓');

  console.log('\n✓ Phrases du quotidien insérées\n');
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log('========================================');
  console.log('  PIPELINE SOURATE 100 — AL-ADIYAT');
  console.log('========================================\n');

  await createMissingRoots();
  await verse100_1_to_5();
  await verse100_6_to_8();
  await verse100_9_to_11();
  await insertDailyPhrases();

  console.log('\n========================================');
  console.log('  PIPELINE SOURATE 100 — TERMINÉE');
  console.log('========================================');
  console.log('\nTraduction complète :');
  console.log('v1: Par les coureuses haletantes,');
  console.log('v2: puis celles qui font jaillir des étincelles,');
  console.log('v3: puis celles qui attaquent à l\'aube,');
  console.log('v4: et soulèvent alors un nuage de poussière,');
  console.log('v5: et pénètrent alors au milieu d\'une troupe.');
  console.log('v6: L\'être humain est certes ingrat envers son Seigneur,');
  console.log('v7: et il en est certes témoin,');
  console.log('v8: et il est certes intense dans son amour des biens.');
  console.log('v9: Ne sait-il pas que quand sera retourné ce qui est dans les tombes,');
  console.log('v10: et trié ce qui est dans les poitrines —');
  console.log('v11: certes leur Seigneur, ce jour-là, est d\'eux parfaitement informé.');
}

main().catch(e => { console.error('ERREUR:', e.message); process.exit(1); });
