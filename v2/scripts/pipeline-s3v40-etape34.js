// Pipeline S3:V40 — verse_id=333, VA_ID=690
// قَالَ رَبِّ أَنَّىٰ يَكُونُ لِى غُلَـٰمٌ وَقَدْ بَلَغَنِىَ ٱلْكِبَرُ وَٱمْرَأَتِى عَاقِرٌ ۖ قَالَ كَذَٰلِكَ ٱللَّهُ يَفْعَلُ مَا يَشَآءُ

const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function mkAxes(sc, cc, concepts) { return { sense_chosen:sc, concept_chosen:cc, concepts }; }

(async () => {
  console.log('=== PIPELINE S3:V40 ===\n');

  // =============================================
  // 1. ENRICHMENT
  // =============================================

  // --- 1a. glm (غ ل م) aid=1260 — 3 sens → 16 ---
  console.log('--- 1a. Enrichir glm (غ ل م) ---');
  const {count:glmB} = await sb.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',1260);
  console.log('glm existant:', glmB, 'sens');
  const glmNew = [
    // Concept existant: Jeunesse/Enfant mâle — ajouter 2 sens
    {analysis_id:1260, sense:'enfant mâle', concept:'Jeunesse/Enfant mâle',
      description:"Du nouveau-né jusqu'à l'apparition de la moustache, sans précision d'âge.", meaning_type:'etymology', display_order:4},
    {analysis_id:1260, sense:'atteindre la limite de la jeunesse', concept:'Jeunesse/Enfant mâle',
      description:"Le moment où l'adolescence prend fin et la maturité commence.", meaning_type:'etymology', display_order:5},
    // Nouveau concept: Désir/Pulsion
    {analysis_id:1260, sense:'être excité par le désir', concept:'Désir/Pulsion',
      description:"État intérieur de pulsion qui monte et submerge celui qui la ressent. C'est un mouvement qui part de l'intérieur et pousse vers l'extérieur — une force instinctive, non rationnelle, liée à l'énergie vitale. Ce n'est pas directionnel vers une cible précise mais diffus et envahissant.", meaning_type:'etymology', display_order:6},
    {analysis_id:1260, sense:'être dominé par la convoitise', concept:'Désir/Pulsion',
      description:"Être vaincu par le désir charnel.", meaning_type:'etymology', display_order:7},
    {analysis_id:1260, sense:'désir charnel véhément', concept:'Désir/Pulsion',
      description:"Intensité extrême de la pulsion.", meaning_type:'etymology', display_order:8},
    {analysis_id:1260, sense:'exciter le désir de quelqu\'un', concept:'Désir/Pulsion',
      description:"Forme causative : provoquer chez autrui l'état de désir.", meaning_type:'etymology', display_order:9},
    {analysis_id:1260, sense:'renforcer la faculté vénérienne', concept:'Désir/Pulsion',
      description:"Boisson ou substance qui augmente le désir.", meaning_type:'etymology', display_order:10},
    // Nouveau concept: Excès/Agitation
    {analysis_id:1260, sense:'dépasser les limites prescrites', concept:'Excès/Agitation',
      description:"Mouvement qui dépasse les limites normales — énergie qui déborde de son cadre. C'est une extension du sens premier (pulsion) : quand la pulsion n'est plus contenue, elle produit l'excès et l'agitation. C'est un mouvement extérieur, visible, chaotique.", meaning_type:'etymology', display_order:11},
    {analysis_id:1260, sense:'être agité (mer)', concept:'Excès/Agitation',
      description:"Avoir des vagues qui s'entrechoquent — la mer qui déborde de son calme.", meaning_type:'etymology', display_order:12},
    {analysis_id:1260, sense:'boisson qui monte à la tête', concept:'Excès/Agitation',
      description:"Vin puissant qui altère le jugement.", meaning_type:'etymology', display_order:13},
    // Nouveau concept: Sens isolé
    {analysis_id:1260, sense:'tortue mâle', concept:'Sens isolé/Animal',
      description:"Animal à carapace. Sens isolé attesté dans les sources étymologiques.", meaning_type:'etymology', display_order:14},
    {analysis_id:1260, sense:'grenouille', concept:'Sens isolé/Animal',
      description:"Batracien.", meaning_type:'etymology', display_order:15},
    {analysis_id:1260, sense:'source d\'eau dans un puits', concept:'Sens isolé/Eau',
      description:"Lieu d'où l'eau jaillit dans un puits.", meaning_type:'etymology', display_order:16},
  ];
  const {error:glmE} = await sb.from('word_meanings').insert(glmNew);
  if(glmE) console.log('glm ERROR:', glmE.message); else console.log('glm insert:', glmNew.length, 'sens OK');
  await sb.from('word_analyses').update({analysis_step:'etymology'}).eq('id',1260);

  // --- 1b. eqr (ع ق ر) aid=1261 — 4 sens → 15 ---
  console.log('\n--- 1b. Enrichir eqr (ع ق ر) ---');
  const {count:eqrB} = await sb.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',1261);
  console.log('eqr existant:', eqrB, 'sens');
  const eqrNew = [
    // Enrichir Destruction/Mutilation (existant : couper les jarrets)
    {analysis_id:1261, sense:'blesser', concept:'Destruction/Mutilation',
      description:"Acte extérieur de couper, entailler, blesser — particulièrement les jambes d'un animal. C'est un acte violent, directionnel et ponctuel qui atteint physiquement la cible et l'immobilise. Le geste sort de celui qui frappe et atteint ce qui est frappé.", meaning_type:'etymology', display_order:5},
    {analysis_id:1261, sense:'animal qui blesse et tue', concept:'Destruction/Mutilation',
      description:"Prédateur qui blesse sa proie — chien, lion, loup.", meaning_type:'etymology', display_order:6},
    {analysis_id:1261, sense:'frapper aux jambes avec l\'épée', concept:'Destruction/Mutilation',
      description:"Couper les pattes d'un animal avec une arme.", meaning_type:'etymology', display_order:7},
    // Enrichir Stérilité/Incapacité (existant : être stérile, stérilité)
    {analysis_id:1261, sense:'ne pas concevoir', concept:'Stérilité/Incapacité',
      description:"Femme qui ne conçoit pas — état d'incapacité reproductive.", meaning_type:'etymology', display_order:8},
    {analysis_id:1261, sense:'avoir cessé de concevoir', concept:'Stérilité/Incapacité',
      description:"Femme qui pouvait concevoir mais qui ne le peut plus.", meaning_type:'etymology', display_order:9},
    {analysis_id:1261, sense:'terre stérile', concept:'Stérilité/Incapacité',
      description:"Sol qui ne produit rien — extension de la stérilité au domaine végétal.", meaning_type:'etymology', display_order:10},
    // Nouveau concept: Bien immobilier/Fondement
    {analysis_id:1261, sense:'bien immobilier', concept:'Bien immobilier/Fondement',
      description:"Ce qui est fixe, ancré, immobile — propriété foncière. Le bien immobilier est l'opposé du bien mobilier : il ne peut pas être déplacé. Par extension, le fondement ou la base essentielle de quelque chose. C'est un état permanent et spatial.", meaning_type:'etymology', display_order:11},
    {analysis_id:1261, sense:'propriété foncière', concept:'Bien immobilier/Fondement',
      description:"Terre ou maison produisant des revenus.", meaning_type:'etymology', display_order:12},
    {analysis_id:1261, sense:'fondement d\'une chose', concept:'Bien immobilier/Fondement',
      description:"La partie la plus essentielle et fondamentale.", meaning_type:'etymology', display_order:13},
    // Nouveau concept: Sens isolé/Vin
    {analysis_id:1261, sense:'vin qui enivre rapidement', concept:'Sens isolé/Vin',
      description:"Vin qui combat l'intellect et l'immobilise — lien avec le sens premier de couper/immobiliser.", meaning_type:'etymology', display_order:14},
    // Nouveau concept: Voix/Cri
    {analysis_id:1261, sense:'voix élevée', concept:'Voix/Cri',
      description:"La voix d'un chanteur, un cri élevé. Sens attesté dans les sources étymologiques. C'est une émission extérieure, sonore, qui sort de celui qui crie et atteint ceux qui entendent.", meaning_type:'etymology', display_order:15},
  ];
  const {error:eqrE} = await sb.from('word_meanings').insert(eqrNew);
  if(eqrE) console.log('eqr ERROR:', eqrE.message); else console.log('eqr insert:', eqrNew.length, 'sens OK');
  await sb.from('word_analyses').update({analysis_step:'etymology'}).eq('id',1261);

  // =============================================
  // 2. READ CONCEPTS FROM DB
  // =============================================
  console.log('\n--- Richesse après enrichissement ---');
  const aidsMap = {qwl:307, rbb:253, knw:2117, glm:1260, blgh:987, kbr:451,
    mra:881, eqr:1261, llh:255, fel:374, 'šya':369};
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
  const {data:vaRow} = await sb.from('verse_analyses').select('segments,segments_step1').eq('id',690).single();
  const segs = vaRow.segments;

  // Fix word_keys to match DB entries
  const keyFixes = {4:'knw', 7:'glm', 20:'šya'};
  for(const [pos,newKey] of Object.entries(keyFixes)) {
    const idx = segs.findIndex(s => s.position === parseInt(pos));
    if(idx>=0) { segs[idx].key = newKey; console.log('pos='+pos+': key → '+newKey); }
  }

  // Reclassify to particles
  const toParticle = [
    {pos:6, fr:'moi'},    // suffix pronoun yā
    {pos:16, fr:'ainsi'}, // kadhālika demonstrative
    {pos:19, fr:'ce que'} // mā relative pronoun
  ];
  for(const p of toParticle) {
    const idx = segs.findIndex(s => s.position === p.pos);
    if(idx>=0) {
      segs[idx].type = 'particle';
      segs[idx].fr = p.fr;
      delete segs[idx].key;
      console.log('pos='+p.pos+': important → particle ('+p.fr+')');
    }
  }

  // Update segments
  const {error:segE} = await sb.from('verse_analyses').update({segments:segs}).eq('id',690);
  if(segE) console.log('Segments ERROR:', segE.message); else console.log('Segments mis à jour');

  const imp = segs.filter(s=>s.type==='important');
  const par = segs.filter(s=>s.type==='particle');
  console.log('Important:', imp.length, '| Particle:', par.length, '| Total:', segs.length);

  // =============================================
  // 4. VWA — 12 entries
  // =============================================
  console.log('\n--- 4. VWA ---');
  // Delete existing VWA if any
  await sb.from('verse_word_analyses').delete().eq('verse_id',333);

  const vwaEntries = [
    // pos=1 qwl — "dire"
    {verse_id:333, word_key:'qwl', root:'ق و ل', position:1,
      sense_chosen:'dire',
      analysis_axes: mkAxes('dire','Parole/Énonciation',{
        'Parole/Énonciation': {status:'retenu', senses:allC.qwl['Parole/Énonciation'],
          proof_ctx:"Le verbe qāla introduit un discours direct adressé à Dieu (rabbī). Le vocatif qui suit montre que ce sont des paroles prononcées, non des pensées intérieures. Le sens d'énonciation est le seul compatible avec l'introduction d'un dialogue."},
        'Pensée/Avis': {status:'peu_probable', senses:allC.qwl['Pensée/Avis'],
          proof_ctx:"Le vocatif rabbī (mon Seigneur) montre un discours adressé à quelqu'un, pas une réflexion interne. La pensée reste chez celui qui pense, la parole sort vers l'autre."},
        'Sens isolé/Puissance': {status:'nul', senses:allC.qwl['Sens isolé/Puissance'],
          proof_ctx:"Aucun rapport avec la puissance dans ce contexte de dialogue."},
        'Corps/Anatomie': {status:'nul', senses:allC.qwl['Corps/Anatomie'],
          proof_ctx:"Hors sujet — le troupeau n'a aucun lien avec ce verset."}
      })
    },
    // pos=2 rbb — "seigneur"
    {verse_id:333, word_key:'rbb', root:'ر ب ب', position:2,
      sense_chosen:'seigneur',
      analysis_axes: mkAxes('seigneur','Seigneurie/Autorité bienveillante',{
        'Seigneurie/Autorité bienveillante': {status:'retenu', senses:allC.rbb['Seigneurie/Autorité bienveillante'],
          proof_ctx:"rabbī en construction possessive (mon Seigneur) est une adresse de respect et de proximité dans une invocation. Le titre de seigneur exprime la relation hiérarchique bienveillante entre Zacharie et Celui qui l'entretient, plus naturelle en adresse directe que le rôle éducatif."},
        'Éducation/Accompagnement': {status:'probable', senses:allC.rbb['Éducation/Accompagnement'],
          proof_ctx:"Le rôle éducatif (celui qui élève et forme) est cohérent car Zacharie s'adresse à Celui qui l'a fait grandir. Mais le contexte d'invocation urgente appelle le titre d'autorité plutôt que le rôle de formateur."},
        'Croissance/Augmentation': {status:'nul', senses:allC.rbb['Croissance/Augmentation'],
          proof_ctx:"En adresse directe (mon X), le sens de croissance/augmentation ne forme pas une expression naturelle."},
        'Commerce/Usure': {status:'nul', senses:allC.rbb['Commerce/Usure'],
          proof_ctx:"Hors sujet — aucun rapport avec l'usure dans ce dialogue."},
        'Souffle/Vent': {status:'nul', senses:allC.rbb['Souffle/Vent'] || ['essoufflement'],
          proof_ctx:"Aucun lien avec le souffle."},
        'Sens isolé/Fixer': {status:'nul', senses:allC.rbb['Sens isolé/Fixer'] || ['fixer'],
          proof_ctx:"Hors sujet."},
        'Sens isolé/Rassembler': {status:'nul', senses:allC.rbb['Sens isolé/Rassembler'] || ['rassembler'],
          proof_ctx:"Hors sujet."},
        'Sens isolé/Groupe': {status:'nul', senses:allC.rbb['Sens isolé/Groupe'] || ['groupe'],
          proof_ctx:"Hors sujet."},
        'Sens isolé/Confiture': {status:'nul', senses:allC.rbb['Sens isolé/Confiture'] || ['confiture'],
          proof_ctx:"Hors sujet."}
      })
    },
    // pos=4 knw — "être"
    {verse_id:333, word_key:'knw', root:'ك و ن', position:4,
      sense_chosen:'être',
      analysis_axes: mkAxes('être','Existence/Devenir',{
        'Existence/Devenir': {status:'retenu', senses:allC.knw['Existence/Devenir'],
          proof_ctx:"yakūnu à l'inaccompli dans la question annā yakūnu lī ghulāmun (comment y aura-t-il pour moi un garçon) exprime la possibilité d'existence. Zacharie interroge la capacité d'un fils à advenir pour lui. Le sens d'existence est le seul qui forme une expression naturelle avec la question « comment »."},
        'Lieu/Position': {status:'nul', senses:allC.knw['Lieu/Position'],
          proof_ctx:"La question porte sur l'existence d'un fils, pas sur un lieu ou une position."},
        'Humilité/Soumission': {status:'nul', senses:allC.knw['Humilité/Soumission'],
          proof_ctx:"Aucun rapport avec la soumission dans cette question sur la naissance."}
      })
    },
    // pos=7 glm — "garçon"
    {verse_id:333, word_key:'glm', root:'غ ل م', position:7,
      sense_chosen:'garçon',
      analysis_axes: mkAxes('garçon','Jeunesse/Enfant mâle',{
        'Jeunesse/Enfant mâle': {status:'retenu', senses:allC.glm['Jeunesse/Enfant mâle'],
          proof_ctx:"ghulāmun est un nom indéfini au nominatif — « un garçon ». Zacharie demande comment un fils pourra exister pour lui, après l'annonce de Yaḥyā (verset 39). Le sens de garçon/enfant mâle est le seul cohérent dans un contexte de naissance et de descendance."},
        'Désir/Pulsion': {status:'nul', senses:allC.glm['Désir/Pulsion'],
          proof_ctx:"Le contexte est celui de la naissance d'un enfant, pas du désir charnel. Zacharie ne demande pas « comment y aura-t-il pour moi un désir »."},
        'Excès/Agitation': {status:'nul', senses:allC.glm['Excès/Agitation'],
          proof_ctx:"Aucun rapport avec l'excès ou l'agitation dans ce contexte de question sur un fils."},
        'Sens isolé/Animal': {status:'nul', senses:allC.glm['Sens isolé/Animal'],
          proof_ctx:"Hors sujet."},
        'Sens isolé/Eau': {status:'nul', senses:allC.glm['Sens isolé/Eau'],
          proof_ctx:"Hors sujet."}
      })
    },
    // pos=10 blgh — "atteindre"
    {verse_id:333, word_key:'blgh', root:'ب ل غ', position:10,
      sense_chosen:'atteindre',
      analysis_axes: mkAxes('atteindre','Atteinte/Accomplissement',{
        'Atteinte/Accomplissement': {status:'retenu', senses:allC.blgh['Atteinte/Accomplissement'],
          proof_ctx:"balaghanī (m'a atteint) est un verbe accompli avec le pronom suffixe nī (moi). Le sujet est al-kibaru (la vieillesse) — c'est elle qui est venue à Zacharie. Le sens d'atteinte physique est le seul qui fonctionne avec ce sujet inanimé qui agit sur une personne."},
        'Transmission/Communication': {status:'peu_probable', senses:allC.blgh['Transmission/Communication'],
          proof_ctx:"La vieillesse ne transmet pas de message. Le sens de communication nécessite un sujet capable de formuler un message, ce qui n'est pas le cas de al-kibaru."},
        'Sens isolé/Être': {status:'nul', senses:allC.blgh['Sens isolé/Être'],
          proof_ctx:"L'éloquence n'a aucun rapport avec la vieillesse qui atteint quelqu'un."}
      })
    },
    // pos=11 kbr — "vieillir"
    {verse_id:333, word_key:'kbr', root:'ك ب ر', position:11,
      sense_chosen:'vieillir',
      analysis_axes: mkAxes('vieillir','Âge/Ancienneté',{
        'Âge/Ancienneté': {status:'retenu', senses:allC.kbr['Âge/Ancienneté'],
          proof_ctx:"al-kibaru est un nom défini au nominatif (sujet du verbe balagha). Dans le contexte où Zacharie explique l'obstacle à la naissance d'un fils, c'est l'avancée en âge qui est pertinente. Le kibaru désigne ici la vieillesse — la grandeur de l'âge, pas la grandeur en importance."},
        'Grandeur/Importance': {status:'peu_probable', senses:allC.kbr['Grandeur/Importance'],
          proof_ctx:"Le sens de grandeur ou d'importance est cohérent linguistiquement (al-kibaru pourrait signifier la grandeur) mais dans le contexte d'un obstacle physique à la procréation, c'est la vieillesse qui s'impose. La grandeur en importance n'explique pas l'impossibilité d'avoir un enfant."},
        'Orgueil/Arrogance': {status:'nul', senses:allC.kbr['Orgueil/Arrogance'],
          proof_ctx:"Zacharie ne se plaint pas d'orgueil — il explique un obstacle physique. L'orgueil ne peut pas « atteindre » quelqu'un comme sujet d'un verbe d'arrivée."}
      })
    },
    // pos=13 mra — "femme (imra'a)"
    {verse_id:333, word_key:'mra', root:'م ر أ', position:13,
      sense_chosen:"femme (imra'a)",
      analysis_axes: mkAxes("femme (imra'a)",'Personne/Individu',{
        'Personne/Individu': {status:'retenu', senses:allC.mra['Personne/Individu'],
          proof_ctx:"imra'atī (ma femme) est un nom avec le pronom possessif de la première personne. Le contexte de naissance et de stérilité désigne clairement l'épouse de Zacharie. Le sens de personne féminine est le seul pertinent."},
        'Santé/Bienfaisance': {status:'nul', senses:allC.mra['Santé/Bienfaisance'],
          proof_ctx:"Le mot imra'a (femme) n'active pas le sens de santé ou de bienfaisance. C'est un nom de personne, pas un qualificatif de santé."}
      })
    },
    // pos=14 eqr — "être stérile"
    {verse_id:333, word_key:'eqr', root:'ع ق ر', position:14,
      sense_chosen:'être stérile',
      analysis_axes: mkAxes('être stérile','Stérilité/Incapacité',{
        'Stérilité/Incapacité': {status:'retenu', senses:allC.eqr['Stérilité/Incapacité'],
          proof_ctx:"ʿāqirun est un participe actif (ou adjectif possessif selon les grammairiens) signifiant « celle qui a la qualité de stérilité ». Le contexte est explicite : Zacharie mentionne la stérilité de sa femme comme obstacle à la naissance. Le sens de stérilité est le seul cohérent avec imra'atī ʿāqirun (ma femme est stérile)."},
        'Destruction/Mutilation': {status:'nul', senses:allC.eqr['Destruction/Mutilation'],
          proof_ctx:"Le sens de blessure/mutilation est le sens physique premier de la racine, mais ici le mot qualifie une femme dans un contexte de procréation. « Ma femme est blessante » ne fait pas sens."},
        'Végétation/Plante': {status:'nul', senses:allC.eqr['Végétation/Plante'],
          proof_ctx:"La base d'un palmier n'a aucun rapport avec la description de l'épouse de Zacharie."},
        'Bien immobilier/Fondement': {status:'nul', senses:allC.eqr['Bien immobilier/Fondement'],
          proof_ctx:"Le bien immobilier n'a aucun lien avec ce contexte de stérilité."},
        'Sens isolé/Vin': {status:'nul', senses:allC.eqr['Sens isolé/Vin'],
          proof_ctx:"Hors sujet."},
        'Voix/Cri': {status:'nul', senses:allC.eqr['Voix/Cri'],
          proof_ctx:"Hors sujet."}
      })
    },
    // pos=15 qwl — "dire" (2nd occurrence)
    {verse_id:333, word_key:'qwl', root:'ق و ل', position:15,
      sense_chosen:'dire',
      analysis_axes: mkAxes('dire','Parole/Énonciation',{
        'Parole/Énonciation': {status:'retenu', senses:allC.qwl['Parole/Énonciation'],
          proof_ctx:"Deuxième occurrence de qāla dans le verset — elle introduit la réponse à la question de Zacharie. Le verbe accompli marque le passage de parole d'un locuteur à l'autre. C'est un discours prononcé, pas une pensée."},
        'Pensée/Avis': {status:'nul', senses:allC.qwl['Pensée/Avis'],
          proof_ctx:"La réponse s'adresse à Zacharie — c'est une parole prononcée, pas une réflexion intérieure."},
        'Sens isolé/Puissance': {status:'nul', senses:allC.qwl['Sens isolé/Puissance'],
          proof_ctx:"Hors sujet."},
        'Corps/Anatomie': {status:'nul', senses:allC.qwl['Corps/Anatomie'],
          proof_ctx:"Hors sujet."}
      })
    },
    // pos=17 llh — "Dieu"
    {verse_id:333, word_key:'llh', root:'ا ل ه', position:17,
      sense_chosen:'Dieu',
      analysis_axes: mkAxes('Dieu','Divinité',{
        'Divinité': {status:'retenu', senses:allC.llh['Divinité'],
          proof_ctx:"Allāhu au nominatif est le sujet du verbe yafʿalu (il fait). C'est le nom propre divin — celui qui est adoré et reconnu comme divinité unique. Dans la réponse à Zacharie, Dieu est présenté comme l'agent capable de tout."},
        'Adoration/Culte': {status:'probable', senses:allC.llh['Adoration/Culte'],
          proof_ctx:"Le sens d'adoration est lié à la racine mais ici le mot fonctionne comme nom propre (sujet d'une phrase verbale), pas comme description de l'acte d'adorer. Allāhu désigne l'être divin, pas le culte."},
        'Confusion/Perplexité': {status:'nul', senses:allC.llh['Confusion/Perplexité'],
          proof_ctx:"Aucun lien avec la confusion."},
        'Asservissement': {status:'nul', senses:allC.llh['Asservissement'],
          proof_ctx:"L'asservissement n'est pas activé ici."}
      })
    },
    // pos=18 fel — "faire"
    {verse_id:333, word_key:'fel', root:'ف ع ل', position:18,
      sense_chosen:'faire',
      analysis_axes: mkAxes('faire','Action/Acte',{
        'Action/Acte': {status:'retenu', senses:allC.fel['Action/Acte'],
          proof_ctx:"yafʿalu est un verbe à l'inaccompli (action habituelle et continue) — Dieu fait, de manière permanente. La construction yafʿalu mā yashāʾu (il fait ce qu'il veut) exprime la capacité d'action illimitée. C'est le seul sens disponible pour cette racine et il correspond parfaitement au contexte."}
      })
    },
    // pos=20 šya — "vouloir"
    {verse_id:333, word_key:'šya', root:'ش ي ء', position:20,
      sense_chosen:'vouloir',
      analysis_axes: mkAxes('vouloir','Volonté',{
        'Volonté': {status:'retenu', senses:allC['šya']['Volonté'],
          proof_ctx:"yashāʾu à l'inaccompli exprime la volonté continue et permanente de Dieu. La construction mā yashāʾu (ce qu'Il veut) indique un objet indéterminé — quoi que ce soit qu'Il veuille. Le sens de volonté est le seul cohérent : Dieu fait ce qu'Il veut, pas ce qu'Il « existe » ou « contraint »."},
        'Chose/Existence': {status:'peu_probable', senses:allC['šya']['Chose/Existence'],
          proof_ctx:"Le verbe yashāʾu a Dieu comme sujet et est conjugué à l'inaccompli actif. Le sens de chose/existence ne fonctionne pas comme verbe actif : « Il chose » ne se dit pas. La volonté est l'acte qui précède la création de la chose."},
        'Incitation/Contrainte': {status:'nul', senses:allC['šya']['Incitation/Contrainte'],
          proof_ctx:"Le contexte n'implique pas de contrainte mais une volonté libre et souveraine."},
        'Laideur/Difformité': {status:'nul', senses:allC['šya']['Laideur/Difformité'],
          proof_ctx:"Hors sujet."},
        'Apaisement': {status:'nul', senses:allC['šya']['Apaisement'],
          proof_ctx:"Hors sujet."}
      })
    }
  ];

  const {error:vwaE} = await sb.from('verse_word_analyses').insert(vwaEntries);
  if(vwaE) console.log('VWA ERROR:', vwaE.message); else console.log('VWA insert:', vwaEntries.length, 'entries OK');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n--- 5. Translation ---');

  const fullTranslation = "Il dit : « Ô mon Seigneur, comment aurais-je un garçon, quand la vieillesse m'a atteint et que ma femme est stérile ? » — Allah dit : « Comme ceci, Allah fait ce qu'Il veut. »";

  const translationArab = "Il dit : « Mon Seigneur, comment aurai-je un garçon alors que la vieillesse m'a atteint et que ma femme est stérile ? » Il dit : « C'est ainsi. Dieu fait ce qu'Il veut. »";

  const translationExplanation = `§DEMARCHE§
Ce verset est la réponse de Zacharie à l'annonce des messagers (verset 39) qui lui ont annoncé la bonne nouvelle de Yaḥyā. Il exprime son étonnement face à l'apparente impossibilité physique de cette naissance, et reçoit une réponse affirmant la capacité de Dieu à agir au-delà des lois naturelles.

**qāla** (il dit) est un verbe accompli (une forme qui indique une action achevée dans le passé) de la racine q-w-l. Le sens premier est « énoncer des paroles ». Ici, il introduit les paroles de Zacharie adressées à Dieu. On traduit par « il dit ».

**rabbī** (mon Seigneur) est un nom en construction possessive (iḍāfa, une structure où deux noms sont liés : le premier appartient au second) avec le pronom de la première personne, de la racine r-b-b. Le sens premier de la racine est « celui qui nourrit, entretient et fait croître ». Zacharie s'adresse à Celui qui l'a fait grandir et l'entretient — c'est une adresse de respect et de proximité. On traduit par « mon Seigneur ».

**yakūnu** (il y aura) est un verbe à l'inaccompli (une forme qui indique une action en cours ou à venir) de la racine k-w-n. Le sens premier est « être, exister, advenir ». Précédé de annā (comment), il forme la question « comment sera-t-il » ou « comment y aura-t-il ». Zacharie interroge la possibilité d'existence d'un fils pour lui. On traduit par « aurai-je » (littéralement « sera pour moi »).

**ghulāmun** (un garçon) est un nom indéfini au nominatif (cas du sujet) de la racine gh-l-m. Le sens premier de la racine renvoie à l'énergie de la jeunesse et à la pulsion vitale. Le mot ghulām désigne un enfant mâle, du nouveau-né jusqu'au jeune homme. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le terme s'applique aussi bien au nouveau-né qu'à l'homme d'âge mûr dans certains usages. On traduit par « un garçon ».

**balaghanī** (m'a atteint) est un verbe accompli suivi du pronom suffixe de la première personne nī (moi), de la racine b-l-gh. Le sens premier est « atteindre, parvenir à ». La vieillesse est le sujet — c'est elle qui est venue à Zacharie, pas l'inverse. Cette construction personnifie la vieillesse comme une force qui vient s'imposer à la personne. On traduit par « m'a atteint ».

**al-kibaru** (la vieillesse) est un nom défini au nominatif (sujet du verbe balagha) de la racine k-b-r. Le sens premier de la racine est « être grand, grandir ». al-kibaru est le nom verbal qui désigne l'avancée en âge — la « grandeur de l'âge », c'est-à-dire le vieillissement. On traduit par « la vieillesse ».

**imra'atī** (ma femme) est un nom au nominatif avec le pronom possessif de la première personne, de la racine m-r-'. Le mot désigne une personne féminine, ici l'épouse de Zacharie. La construction avec le possessif établit le lien conjugal. On traduit par « ma femme ».

**ʿāqirun** (stérile) est un participe actif (une forme qui décrit un état caractérisant la personne de manière permanente) de la racine ʿ-q-r. Le sens premier de la racine renvoie à la blessure et à l'entaille — couper ce qui devrait être intact. La stérilité est l'extension de cette coupure : ce qui devrait produire ne produit pas, comme un arbre dont on a coupé la base ne porte plus de fruit. D'après les sources étymologiques, ʿāqir pour la femme signifie « celle qui ne conçoit pas » ou « celle qui a cessé de concevoir ». On traduit par « stérile ».

**qāla** (il dit) — deuxième occurrence du verbe accompli q-w-l. Cette fois, le sujet change : c'est la réponse à la question de Zacharie. Le texte ne précise pas explicitement qui est le locuteur de la réponse. On traduit par « il dit ».

**allāhu** (Dieu) est le nom propre divin au nominatif (sujet du verbe yafʿalu) de la racine '-l-h. Le sens premier est « celui qui est adoré, la divinité ». Ici, Dieu est présenté comme l'agent — celui qui fait. On traduit par « Dieu ».

**yafʿalu** (fait) est un verbe à l'inaccompli (action habituelle et continue) de la racine f-ʿ-l. Le sens premier est « faire, agir, accomplir ». L'inaccompli indique que cette action est permanente et continue — Dieu fait de manière habituelle, pas un événement ponctuel. On traduit par « fait ».

**yashāʾu** (Il veut) est un verbe à l'inaccompli de la racine sh-y-'. Le sens premier renvoie à la chose qui existe (shay') et par extension à la volonté de faire exister (shā'a = vouloir qu'une chose advienne). L'inaccompli indique que cette volonté est continue et permanente. La construction mā yashāʾu (ce qu'Il veut) utilise le pronom relatif mā pour exprimer l'objet indéterminé de la volonté divine — quoi que ce soit qu'Il veuille. On traduit par « Il veut ».

§JUSTIFICATION§
**dire** — Le sens retenu est « dire » de la racine q-w-l. Le mot « dire » est choisi car il est le plus direct et courant en français pour introduire un discours rapporté. L'alternative « parler » est écartée car elle ne s'emploie pas avec un discours direct entre guillemets. L'alternative « affirmer » est écartée car elle ajoute une nuance d'insistance absente du texte.

**seigneur** — Le sens retenu est « seigneur » de la racine r-b-b. Le mot « seigneur » est choisi car il exprime à la fois l'autorité et la relation de proximité bienveillante. L'alternative « maître » est écartée car elle suggère une relation de domination plus froide. L'alternative « celui qui élève » est écartée car trop descriptif pour une adresse directe.

**être** — Le sens retenu est « être » de la racine k-w-n. Le mot « être » (traduit par « aurai-je », littéralement « sera pour moi ») est choisi car c'est la traduction la plus naturelle de yakūnu dans une question sur la possibilité d'existence. L'alternative « advenir » est écartée car elle ajoute une nuance événementielle non nécessaire ici.

**garçon** — Le sens retenu est « garçon » de la racine gh-l-m. Le mot « garçon » est choisi car il est le terme le plus courant en français pour un enfant mâle sans préciser l'âge. L'alternative « jeune homme » est écartée car elle implique un âge plus avancé que ce que Zacharie demande (il demande d'avoir un enfant). L'alternative « serviteur » est écartée car elle n'est pas le sens contextuel — Zacharie demande un fils, pas un domestique.

**atteindre** — Le sens retenu est « atteindre » de la racine b-l-gh. Le mot « atteindre » est choisi car il traduit fidèlement l'idée que la vieillesse est venue jusqu'à lui comme une force extérieure. L'alternative « parvenir à » est écartée car elle suggère un effort de la part du sujet, alors qu'ici c'est la vieillesse qui fait l'action.

**vieillesse** — Le sens retenu est « vieillir » de la racine k-b-r, traduit par le nom « vieillesse » car le mot al-kibaru est un nom. Le mot « vieillesse » est choisi car il est le terme le plus courant pour désigner l'âge avancé. L'alternative « grandeur » est écartée car elle ne désigne pas le vieillissement dans ce contexte d'obstacle à la procréation.

**femme** — Le sens retenu est « femme (imra'a) » de la racine m-r-'. Le mot « femme » est choisi car c'est le terme courant pour désigner l'épouse. L'alternative « épouse » aurait été acceptable mais le texte utilise imra'a (femme) et non zawja (épouse au sens juridique).

**stérile** — Le sens retenu est « être stérile » de la racine ʿ-q-r. Le mot « stérile » est choisi car il désigne directement l'incapacité à concevoir, qui est l'obstacle mentionné par Zacharie. L'alternative « infertile » est écartée car il est moins courant en français.

**Dieu** — Le sens retenu est « Dieu » de la racine '-l-h. Le nom propre divin est traduit par « Dieu » conformément à l'approche de français courant. L'alternative « Allah » est écartée car c'est un mot arabe non traduit.

**faire** — Le sens retenu est « faire » de la racine f-ʿ-l. Le mot « faire » est choisi car il est le verbe d'action le plus général et courant en français. L'alternative « agir » est écartée car elle est intransitive et ne permet pas la construction transitive « faire ce qu'Il veut ».

**vouloir** — Le sens retenu est « vouloir » de la racine sh-y-'. Le mot « vouloir » est choisi car il exprime la volonté active et délibérée. L'alternative « désirer » est écartée car elle implique un manque ou un besoin, ce qui ne convient pas pour Dieu. L'alternative « souhaiter » est écartée car elle est plus faible que « vouloir ».

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens pour ce verset. La seule différence notable est l'ajout de la particule vocative « Ô » devant « mon Seigneur » dans certaines traductions, alors que le texte arabe ne contient pas de yā dans ce verset — le texte dit simplement rabbī (mon Seigneur) sans interjection. Cet ajout est mineur et ne change pas le sens global du verset. Le reste de la traduction (comment aurai-je un garçon, la vieillesse m'a atteint, ma femme est stérile, Dieu fait ce qu'Il veut) est fidèle au texte dans l'ensemble des traductions courantes.`;

  // Build display segments
  const displaySegments = [
    {fr:'il dit', pos:'verbe', phon:'qāla', arabic:'قَالَ', word_key:'qwl', is_particle:false, sense_retenu:'dire', position:1},
    {fr:'mon Seigneur', pos:'nom', phon:'rabbī', arabic:'رَبِّ', word_key:'rbb', is_particle:false, sense_retenu:'seigneur', position:2},
    {fr:'comment', phon:'annā', arabic:'أَنَّىٰ', is_particle:true, position:3},
    {fr:'y aura-t-il', pos:'verbe', phon:'yakūnu', arabic:'يَكُونُ', word_key:'knw', is_particle:false, sense_retenu:'être', position:4},
    {fr:'pour moi', phon:'lī', arabic:'لِى', is_particle:true, position:5},
    {fr:'moi', phon:'yā', arabic:'ى', is_particle:true, position:6},
    {fr:'un garçon', pos:'nom', phon:'ghulāmun', arabic:'غُلَـٰمٌ', word_key:'glm', is_particle:false, sense_retenu:'garçon', position:7},
    {fr:'et', phon:'wa', arabic:'وَ', is_particle:true, position:8},
    {fr:'déjà', phon:'qad', arabic:'قَدْ', is_particle:true, position:9},
    {fr:'m\'a atteint', pos:'verbe', phon:'balaghanī', arabic:'بَلَغَنِىَ', word_key:'blgh', is_particle:false, sense_retenu:'atteindre', position:10},
    {fr:'la vieillesse', pos:'nom', phon:'al-kibaru', arabic:'ٱلْكِبَرُ', word_key:'kbr', is_particle:false, sense_retenu:'vieillir', position:11},
    {fr:'et', phon:'wa', arabic:'وَ', is_particle:true, position:12},
    {fr:'ma femme', pos:'nom', phon:"imra'atī", arabic:'ٱمْرَأَتِى', word_key:'mra', is_particle:false, sense_retenu:"femme (imra'a)", position:13},
    {fr:'stérile', pos:'adjectif', phon:'ʿāqirun', arabic:'عَاقِرٌ', word_key:'eqr', is_particle:false, sense_retenu:'être stérile', position:14},
    {fr:'il dit', pos:'verbe', phon:'qāla', arabic:'قَالَ', word_key:'qwl', is_particle:false, sense_retenu:'dire', position:15},
    {fr:'ainsi', phon:'kadhālika', arabic:'كَذَٰلِكَ', is_particle:true, position:16},
    {fr:'Dieu', pos:'nom', phon:'allāhu', arabic:'ٱللَّهُ', word_key:'llh', is_particle:false, sense_retenu:'Dieu', position:17},
    {fr:'fait', pos:'verbe', phon:'yafʿalu', arabic:'يَفْعَلُ', word_key:'fel', is_particle:false, sense_retenu:'faire', position:18},
    {fr:'ce que', phon:'mā', arabic:'مَا', is_particle:true, position:19},
    {fr:'Il veut', pos:'verbe', phon:'yashāʾu', arabic:'يَشَآءُ', word_key:'šya', is_particle:false, sense_retenu:'vouloir', position:20}
  ];

  const {error:trE} = await sb.from('verse_analyses').update({
    full_translation: fullTranslation,
    translation_arab: translationArab,
    translation_explanation: translationExplanation,
    segments: displaySegments
  }).eq('id', 690);
  if(trE) console.log('Translation ERROR:', trE.message); else console.log('Translation save: OK');

  // =============================================
  // 6. DAILY PHRASES — only glm needs new ones
  // =============================================
  console.log('\n--- 6. Daily phrases ---');
  // Check existing
  const rootsToCheck = [
    {name:'qwl',aid:307},{name:'rbb',aid:253},{name:'knw',aid:2117},{name:'glm',aid:1260},
    {name:'blgh',aid:987},{name:'kbr',aid:451},{name:'mra',aid:881},{name:'eqr',aid:1261},
    {name:'llh',aid:255},{name:'fel',aid:374},{name:'šya',aid:369}
  ];
  let dailyToInsert = [];
  for(const r of rootsToCheck) {
    const {count} = await sb.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id',r.aid);
    if(count > 0) {
      console.log(r.name+' (aid='+r.aid+'): '+count+' phrases existantes → SKIP');
    } else {
      console.log(r.name+' (aid='+r.aid+'): 0 phrases → INSERT');
    }
  }

  // Only glm (aid=1260) needs daily phrases
  const glmDaily = [
    {analysis_id:1260, sense:'garçon', arabic:'غُلَام', phon:'ghulām',
      french:"Ce petit garçon a appris à faire du vélo tout seul."},
    {analysis_id:1260, sense:'garçon', arabic:'غُلَام', phon:'ghulām',
      french:"Les garçons jouent dans le parc après l'école."},
    {analysis_id:1260, sense:'garçon', arabic:'غُلَام', phon:'ghulām',
      french:"C'est un garçon très curieux qui pose beaucoup de questions."}
  ];
  const {error:dailyE} = await sb.from('word_daily').insert(glmDaily);
  if(dailyE) console.log('Daily ERROR:', dailyE.message); else console.log('Daily insert:', glmDaily.length, 'phrases OK');

  // =============================================
  // 7. VERIFICATION
  // =============================================
  console.log('\n--- 7. Vérification finale ---');

  // Re-read segments
  const {data:finalVA} = await sb.from('verse_analyses').select('segments,full_translation,translation_arab,translation_explanation').eq('id',690).single();
  const finalSegs = finalVA.segments;
  const finalImp = finalSegs.filter(s=>!s.is_particle);
  const finalPar = finalSegs.filter(s=>s.is_particle);
  console.log('Segments:', finalImp.length, 'important,', finalPar.length, 'particle,', finalSegs.length, 'total');

  // Check VWA
  const {data:finalVWA} = await sb.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id',333).order('position');
  console.log('VWA:', finalVWA.length, 'entries');
  for(const v of finalVWA) console.log('  pos='+v.position, v.word_key, '→', v.sense_chosen);

  // Check positions match
  const vwaPos = finalVWA.map(v=>v.position).sort((a,b)=>a-b);
  const segImportantPos = finalImp.map(s=>s.position).sort((a,b)=>a-b);
  console.log('Positions match:', JSON.stringify(vwaPos) === JSON.stringify(segImportantPos) ? 'OK' : 'MISMATCH!');
  if(JSON.stringify(vwaPos) !== JSON.stringify(segImportantPos)) {
    console.log('  VWA:', vwaPos);
    console.log('  Seg:', segImportantPos);
  }

  // Check translation
  console.log('full_translation:', finalVA.full_translation ? 'OK' : 'MISSING');
  console.log('translation:', finalVA.translation_arab ? 'OK' : 'MISSING');
  console.log('explanation:', finalVA.translation_explanation ? 'OK ('+finalVA.translation_explanation.length+' chars)' : 'MISSING');

  console.log('\n=== PIPELINE S3:V40 TERMINÉE ===');
  console.log('\nVERSET 3:40 — TERMINÉ');
  for(const v of finalVWA) console.log('  '+v.word_key+' → sens "'+v.sense_chosen+'"');
  console.log('Traduction : "'+finalVA.translation_arab+'"');
})();
