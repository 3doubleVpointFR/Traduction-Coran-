const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  const VERSE_ID = 315;
  const VA_ID = 673;
  let errs = 0;

  // =============================================
  // 1. FIX hbt (aid=456): root ه ب ط → ح ب ط + nouveaux sens
  //    ḥabiṭa = devenir nul (≠ habata = descendre)
  // =============================================
  console.log('=== 1. FIX hbt (aid=456) ===');

  // Fix root_ar
  const {error:er} = await db.from('word_analyses').update({root_ar: 'ح ب ط'}).eq('id', 456);
  if(er) { console.log('ERROR root fix:', er.message); errs++; }
  else console.log('root_ar: ه ب ط → ح ب ط ✓');

  // Replace senses
  const {error:ed} = await db.from('word_meanings').delete().eq('analysis_id', 456);
  if(ed) { console.log('ERROR deleting hbt senses:', ed.message); errs++; }

  const hbtSenses = [
    {analysis_id:456, concept:'Annulation/Nullité', sense:'devenir nul', description:"Perdre toute valeur, être réduit à néant. Le Lane's donne ḥabiṭa ʿamaluhu : son oeuvre est devenue nulle, sans profit, sans effet. Sens premier de la racine ḥ-b-ṭ.", meaning_type:'etymology', display_order:1},
    {analysis_id:456, concept:'Annulation/Nullité', sense:'être vain', description:"Ne produire aucun résultat, être sans fruit ni bénéfice. L'effort accompli ne mène à rien.", meaning_type:'etymology', display_order:2},
    {analysis_id:456, concept:'Annulation/Nullité', sense:'annuler', description:"Rendre nul, défaire le résultat d'un travail. Forme IV aḥbaṭa : il a annulé, il a rendu sans effet.", meaning_type:'etymology', display_order:3},
    {analysis_id:456, concept:'Annulation/Nullité', sense:'perdre', description:"Être privé du fruit de son travail, ne rien récolter de ses efforts.", meaning_type:'etymology', display_order:4},
    {analysis_id:456, concept:'Annulation/Nullité', sense:'dégrader', description:"Détérioration progressive de la valeur, perte de qualité jusqu'à la nullité.", meaning_type:'etymology', display_order:5},
    {analysis_id:456, concept:'Gonflement/Animal', sense:'enfler', description:"Gonflement du ventre d'un animal ayant mangé trop de trèfle frais. Sens physique isolé.", meaning_type:'etymology', display_order:6},
    {analysis_id:456, concept:'Gonflement/Animal', sense:'gonflé', description:"État de l'animal au ventre distendu par excès de nourriture.", meaning_type:'etymology', display_order:7},
  ];
  const {error:ei} = await db.from('word_meanings').insert(hbtSenses);
  if(ei) { console.log('ERROR inserting hbt:', ei.message); errs++; }
  else console.log('hbt: 7 sens insérés (2 catégories) ✓');

  // Replace word_daily for hbt (old ones were for هبط=descendre)
  const {error:edd} = await db.from('word_daily').delete().eq('analysis_id', 456);
  if(edd) console.log('WARN deleting old daily:', edd.message);

  const hbtDaily = [
    {analysis_id:456, arabic:'حَبِطَ جُهْدُهُ بَعْدَ الغِشِّ', phon:'ḥabiṭa juhduhu baʿda l-ghishsh', french:'Son effort est devenu nul après la triche.', sense:'devenir nul'},
    {analysis_id:456, arabic:'أَحْبَطَ المُدِيرُ المَشْرُوعَ', phon:'aḥbaṭa l-mudīru l-mashrūʿ', french:'Le directeur a annulé le projet.', sense:'annuler'},
    {analysis_id:456, arabic:'عَمَلُهُ حَابِطٌ لَا فَائِدَةَ مِنْهُ', phon:'ʿamaluhu ḥābiṭun lā fāʾidata minhu', french:'Son travail est vain, sans aucun bénéfice.', sense:'être vain'},
  ];
  const {error:eid} = await db.from('word_daily').insert(hbtDaily);
  if(eid) { console.log('ERROR daily hbt:', eid.message); errs++; }
  else console.log('hbt word_daily: 3 phrases remplacées ✓');

  // =============================================
  // 2. FIX TAGGER SEGMENTS VA 673
  // =============================================
  console.log('\n=== 2. FIX TAGGER SEGMENTS ===');
  const {data:vaData} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  let segs = vaData.segments;

  const frMap = {
    3:  {fr:'sont devenues nulles', sr:'devenir nul',           wk:'hbt'},
    4:  {fr:'oeuvres',              sr:'oeuvre',                 wk:'eml'},
    6:  {fr:'vie proche',           sr:'la vie proche (dunyā)', wk:'dny'},
    8:  {fr:'dernière',             sr:'dernier',                wk:'axr'},
    13: {fr:'secoureur',            sr:'secourir',               wk:'nsr'},
  };

  for(const s of segs) {
    // pos=1: awl (ʾūlāʾika) → particle "ceux-là"
    if(s.position === 1 && s.key === 'awl') {
      s.is_particle = true;
      s.type = 'particle';
      s.fr = 'ceux-là';
      delete s.key; delete s.root; delete s.pos; delete s.word_key;
      console.log('pos=1: awl → particle "ceux-là"');
      continue;
    }

    // pos=11: lhm (lahum) → particle "pour eux"
    if(s.position === 11 && s.key === 'lhm') {
      s.is_particle = true;
      s.type = 'particle';
      s.fr = 'pour eux';
      delete s.key; delete s.root; delete s.pos; delete s.word_key;
      console.log('pos=11: lhm → particle "pour eux"');
      continue;
    }

    // Set fr/sense_retenu/word_key for important segments
    const mapping = frMap[s.position];
    if(mapping) {
      s.fr = mapping.fr;
      s.sense_retenu = mapping.sr;
      s.word_key = mapping.wk;
      s.is_particle = false;
    } else if(s.is_particle === undefined) {
      s.is_particle = true;
    }

    // Ensure word_key = key for non-particles
    if(s.key && s.is_particle === false && !s.word_key) {
      s.word_key = s.key;
    }
  }

  const {error:es} = await db.from('verse_analyses').update({segments: segs}).eq('id', VA_ID);
  if(es) { console.log('ERROR segments:', es.message); errs++; }
  else console.log('Segments mis à jour ✓');

  // =============================================
  // 3. INSERT 5 VWA
  // =============================================
  console.log('\n=== 3. INSERT VWA ===');

  const vwaData = [
    // --- hbt pos=3 ---
    {
      verse_id: VERSE_ID, word_key: 'hbt', position: 3,
      sense_chosen: 'devenir nul',
      reason: "ḥabiṭat aʿmāluhum : leurs oeuvres sont devenues nulles, sans valeur ni profit.",
      analysis_axes: {
        concept_chosen: 'Annulation/Nullité',
        sense_chosen: 'devenir nul',
        concepts: {
          'Annulation/Nullité': {
            status: 'retenu',
            proof_ctx: "ḥabiṭat aʿmāluhum — la racine ḥ-b-ṭ signifie devenir nul, perdre toute valeur. Les oeuvres de ceux qui recouvrent les signes et tuent les annonciateurs (verset précédent) perdent tout leur effet, tant dans la vie proche que dans la dernière.",
            senses: ['devenir nul','être vain','annuler','perdre','dégrader']
          },
          'Gonflement/Animal': {
            status: 'nul',
            proof_ctx: "Le sens de gonflement du ventre d'un animal est un sens physique isolé, sans rapport avec les oeuvres humaines décrites dans ce verset.",
            senses: ['enfler','gonflé']
          }
        }
      }
    },
    // --- eml pos=4 ---
    {
      verse_id: VERSE_ID, word_key: 'eml', position: 4,
      sense_chosen: 'oeuvre',
      reason: "aʿmāl = oeuvres, actes. Le pluriel désigne l'ensemble de leurs actions.",
      analysis_axes: {
        concept_chosen: 'Action/Oeuvre',
        sense_chosen: 'oeuvre',
        concepts: {
          'Action/Oeuvre': {
            status: 'retenu',
            proof_ctx: "ʿ-m-l signifie travailler, agir. aʿmāluhum au pluriel (brisé de ʿamal) désigne l'ensemble de leurs oeuvres et actions — tout ce qu'ils ont accompli. Ces oeuvres sont devenues nulles (ḥabiṭat).",
            senses: ['travailler','agir','oeuvre','acte','ouvrier']
          }
        }
      }
    },
    // --- dny pos=6 ---
    {
      verse_id: VERSE_ID, word_key: 'dny', position: 6,
      sense_chosen: 'la vie proche (dunyā)',
      reason: "dunyā = la plus proche. La vie immédiate, par opposition à la dernière (ākhira).",
      analysis_axes: {
        concept_chosen: 'Proximité/Bassesse',
        sense_chosen: 'la vie proche (dunyā)',
        concepts: {
          'Proximité/Bassesse': {
            status: 'retenu',
            proof_ctx: "dunyā est le féminin comparatif de daniy (proche, bas). ad-dunyā désigne la vie la plus proche, celle d'ici-bas, par opposition à al-ākhira (la dernière). Le sens étymologique de proximité temporelle est premier.",
            senses: ['bas','proche','ce monde','le plus proche','la vie proche (dunyā)','rapprocher','inférieur']
          },
          'Abaissement/Humiliation': {
            status: 'probable',
            proof_ctx: "Le sens de bassesse, vilenie est secondaire — dunyā peut impliquer que cette vie est basse par rapport à l'autre, mais le sens premier dans la paire dunyā/ākhira est la proximité temporelle.",
            senses: ['abaisser','vil']
          }
        }
      }
    },
    // --- axr pos=8 ---
    {
      verse_id: VERSE_ID, word_key: 'axr', position: 8,
      sense_chosen: 'dernier',
      reason: "ākhira = la dernière (vie). Féminin de ākhir, opposé de dunyā (la proche).",
      analysis_axes: {
        concept_chosen: 'Postériorité/Retard',
        sense_chosen: 'dernier',
        concepts: {
          'Postériorité/Retard': {
            status: 'retenu',
            proof_ctx: "ā-kh-r signifie dernier, ultime, postérieur. al-ākhira est la dernière vie, celle qui vient après la proche (dunyā). Dans la paire fī d-dunyā wa-l-ākhira, le sens de postériorité temporelle est direct et sans ambiguïté.",
            senses: ['retarder','reporter','reculer','après','dernier','fin']
          }
        }
      }
    },
    // --- nsr pos=13 ---
    {
      verse_id: VERSE_ID, word_key: 'nsr', position: 13,
      sense_chosen: 'secourir',
      reason: "nāṣirīn = secoureurs, ceux qui portent secours. Participe actif pluriel de n-ṣ-r.",
      analysis_axes: {
        concept_chosen: 'Secours/Victoire',
        sense_chosen: 'secourir',
        concepts: {
          'Secours/Victoire': {
            status: 'retenu',
            proof_ctx: "n-ṣ-r signifie secourir, aider, porter assistance. nāṣirīn est le participe actif pluriel : ceux qui portent secours. mā lahum min nāṣirīn = ils n'ont aucun secoureur — personne pour les aider ni les défendre.",
            senses: ['secourir','aider','victoire','défendre']
          },
          'Alliance/Soutien': {
            status: 'probable',
            proof_ctx: "Le sens de partisan, allié est une extension du secours : celui qui soutient activement. L'absence de nāṣir implique aussi l'absence de tout allié.",
            senses: ['partisan']
          }
        }
      }
    },
  ];

  const {error:ev} = await db.from('verse_word_analyses').insert(vwaData);
  if(ev) { console.log('ERROR VWA:', ev.message); errs++; }
  else console.log(vwaData.length + ' VWA insérées ✓');

  // =============================================
  // 4. UPDATE TRANSLATION FIELDS
  // =============================================
  console.log('\n=== 4. TRANSLATION ===');

  const translationArab = "Ceux-là sont ceux dont les oeuvres sont devenues nulles dans la vie proche et la dernière, et ils n'ont aucun secoureur.";

  const fullTranslation = "Voilà ceux dont les oeuvres sont vaines ici-bas comme dans l'au-delà. Et pour eux, pas de secoureurs!";

  const translationExplanation = `§DEMARCHE§
Ce verset conclut l'avertissement commencé au verset 21. Après avoir décrit les trois actes graves (recouvrir les signes, tuer les annonciateurs, tuer les garants de l'équité), le texte énonce ici la conséquence : la nullité totale de leurs oeuvres.

**ḤABIṬAT** (حَبِطَتْ) — La racine ḥ-b-ṭ signifie « DEVENIR NUL, PERDRE TOUTE VALEUR ». Le Lane's donne : ḥabiṭa ʿamalu-hu = son oeuvre est devenue nulle, sans profit ni effet. Le verbe au passé (accompli) marque un fait établi et irrévocable : leurs oeuvres sont bel et bien devenues nulles. On traduit par **SONT DEVENUES NULLES**.

**AʿMĀLU-HUM** (أَعْمَـٰلُهُمْ) — La racine ʿ-m-l signifie « TRAVAILLER, AGIR ». aʿmāl est le pluriel brisé de ʿamal (oeuvre, acte). Avec le pronom -hum (leurs), il désigne l'ensemble de ce qu'ils ont accompli. On traduit par **OEUVRES**.

**AD-DUNYĀ** (ٱلدُّنْيَا) — La racine d-n-y signifie « ÊTRE PROCHE, ÊTRE BAS ». dunyā est le féminin comparatif de daniy : « la plus proche ». La vie dunyā est la vie immédiate, celle dans laquelle nous sommes — par opposition à la dernière (ākhira). On traduit par **VIE PROCHE** plutôt que « ici-bas » pour préserver le sens étymologique de proximité.

**AL-ĀKHIRATI** (ٱلْـَٔاخِرَةِ) — La racine ʾ-kh-r signifie « ÊTRE DERNIER, POSTÉRIEUR ». ākhira est le féminin de ākhir (dernier). Dans la paire dunyā/ākhira, elle désigne la vie qui vient après — la dernière. On traduit par **DERNIÈRE** plutôt que « au-delà » pour maintenir la symétrie étymologique avec « proche ».

**NĀṢIRĪN** (نَّـٰصِرِينَ) — La racine n-ṣ-r signifie « SECOURIR, PORTER ASSISTANCE ». nāṣirīn est le participe actif pluriel : ceux qui secourent, les secoureurs. mā lahum min nāṣirīn = ils n'ont aucun secoureur — ni aide, ni défenseur, ni allié. L'absence est totale. On traduit par **SECOUREUR**.

§JUSTIFICATION§
Cette traduction s'attache à la précision étymologique :
1. « SONT DEVENUES NULLES » au lieu de « sont vaines » — ḥabiṭat est un verbe au passé qui marque un devenir accompli (leurs oeuvres sont devenues nulles), pas un état permanent (vaines).
2. « VIE PROCHE » et « DERNIÈRE » au lieu de « ici-bas » et « au-delà » — la paire dunyā/ākhira est étymologiquement « la proche / la dernière ». Les termes « ici-bas » et « au-delà » sont des conventions de traduction qui perdent la symétrie spatiale et temporelle de l'original.
3. « SECOUREUR » au lieu de « secoureurs » — mā lahum min nāṣirīn utilise la négation totale (mā... min) qui nie l'existence même d'un seul secoureur.

§CRITIQUE§
La traduction de Hamidullah donne : « Voilà ceux dont les oeuvres sont vaines ici-bas comme dans l'au-delà. Et pour eux, pas de secoureurs ! »

Notre traduction diffère sur trois points :
1. « sont vaines » → « sont devenues nulles » : Hamidullah utilise un adjectif statique. Notre choix restitue l'aspect verbal du passé ḥabiṭat — un processus accompli de perte de valeur, pas un simple état.
2. « ici-bas / l'au-delà » → « vie proche / dernière » : Hamidullah utilise les conventions françaises courantes. Notre choix préserve la paire étymologique dunyā (proche) / ākhira (dernière), fidèle à la structure arabe.
3. « pas de secoureurs » → « aucun secoureur » : les deux formules expriment la même négation totale, notre choix souligne le singulier pour renforcer l'absolu (pas même un seul).`;

  const {error:et} = await db.from('verse_analyses').update({
    translation_arab: translationArab,
    full_translation: fullTranslation,
    translation_explanation: translationExplanation
  }).eq('id', VA_ID);
  if(et) { console.log('ERROR translation:', et.message); errs++; }
  else console.log('Translation mise à jour ✓');

  // =============================================
  // RÉSUMÉ
  // =============================================
  console.log('\n=== RÉSUMÉ V22 ===');
  console.log('Erreurs: ' + errs);
  if(errs === 0) console.log('✓ Pipeline V22 complète — lancer validation');
  else console.log('✗ ' + errs + ' erreur(s) à corriger');
})();
