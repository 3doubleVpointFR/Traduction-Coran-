const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  const VERSE_ID = 316;
  const VA_ID = 677;
  let errs = 0;

  // =============================================
  // 1. ENRICH nsb (aid=994) — ajouter Part/Attribution
  // =============================================
  console.log('=== 1. ENRICH nsb ===');
  const nsbNew = [
    {analysis_id:994, concept:'Part/Attribution', sense:'part', description:"Ce qui revient à quelqu'un, portion assignée. naṣīb est la part attribuée, le lot que l'on reçoit.", meaning_type:'etymology', display_order:7},
    {analysis_id:994, concept:'Part/Attribution', sense:'portion', description:"Quantité attribuée à quelqu'un, lot reçu d'un ensemble plus grand.", meaning_type:'etymology', display_order:8},
    {analysis_id:994, concept:'Part/Attribution', sense:'lot', description:"Part de destin, ce qui est assigné ou établi (naṣaba) pour quelqu'un.", meaning_type:'etymology', display_order:9},
  ];
  const {error:e1} = await db.from('word_meanings').insert(nsbNew);
  if(e1) { console.log('ERROR nsb:', e1.message); errs++; }
  else console.log('nsb: +3 sens (Part/Attribution) ✓');

  // =============================================
  // 2. ENRICH erd (aid=417) — ajouter Détournement/Refus
  // =============================================
  console.log('\n=== 2. ENRICH erd ===');
  const erdNew = [
    {analysis_id:417, concept:'Détournement/Refus', sense:'se détourner', description:"Tourner le dos, refuser de faire face. Forme IV aʿraḍa : montrer son flanc (ʿarḍ = largeur) au lieu de faire face — métaphore du refus.", meaning_type:'etymology', display_order:10},
    {analysis_id:417, concept:'Détournement/Refus', sense:'refuser', description:"Ne pas accepter ce qui est proposé ou présenté. Extension de l'acte physique de se détourner vers le refus moral.", meaning_type:'etymology', display_order:11},
    {analysis_id:417, concept:'Détournement/Refus', sense:'ignorer', description:"Ne pas prêter attention, détourner le regard. Forme d'indifférence volontaire.", meaning_type:'etymology', display_order:12},
  ];
  const {error:e2} = await db.from('word_meanings').insert(erdNew);
  if(e2) { console.log('ERROR erd:', e2.message); errs++; }
  else console.log('erd: +3 sens (Détournement/Refus) ✓');

  // =============================================
  // 3. WORD_DAILY pour raay (aid=832) et erd (aid=417)
  // =============================================
  console.log('\n=== 3. WORD_DAILY ===');
  const dailyRaay = [
    {analysis_id:832, arabic:'رَأَيْتُ صَدِيقِي فِي السُّوقِ', phon:'raʾaytu ṣadīqī fī s-sūq', french:"J'ai vu mon ami au marché.", sense:'voir'},
    {analysis_id:832, arabic:'مَا رَأْيُكَ فِي هَذَا؟', phon:'mā raʾyuka fī hādhā?', french:'Quelle est ton opinion là-dessus ?', sense:'avoir une opinion'},
    {analysis_id:832, arabic:'أَرِنِي الطَّرِيقَ', phon:'arinī ṭ-ṭarīq', french:'Montre-moi le chemin.', sense:'montrer'},
  ];
  const {error:e3a} = await db.from('word_daily').insert(dailyRaay);
  if(e3a) { console.log('ERROR daily raay:', e3a.message); errs++; }
  else console.log('raay: 3 phrases ✓');

  const dailyErd = [
    {analysis_id:417, arabic:'عَرَضَ عَلَيْهِ المَشْرُوعَ', phon:'ʿaraḍa ʿalayhi l-mashrūʿ', french:'Il lui a présenté le projet.', sense:'proposer'},
    {analysis_id:417, arabic:'أَعْرَضَ عَنِ النَّصِيحَةِ', phon:'aʿraḍa ʿani n-naṣīḥa', french:"Il s'est détourné du conseil.", sense:'se détourner'},
    {analysis_id:417, arabic:'الشَّارِعُ عَرِيضٌ جِدًّا', phon:'ash-shāriʿu ʿarīḍun jiddan', french:'La rue est très large.', sense:'être large'},
  ];
  const {error:e3b} = await db.from('word_daily').insert(dailyErd);
  if(e3b) { console.log('ERROR daily erd:', e3b.message); errs++; }
  else console.log('erd: 3 phrases ✓');

  // =============================================
  // 4. FIX TAGGER SEGMENTS VA 677
  // =============================================
  console.log('\n=== 4. FIX SEGMENTS ===');
  const {data:vaData} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  let segs = vaData.segments;

  const frMap = {
    2:  {fr:'vu',            sr:'voir',            wk:'raay'},
    5:  {fr:'ont reçu',      sr:'donner',          wk:'aty'},
    6:  {fr:'part',          sr:'part',             wk:'nsb'},
    8:  {fr:'Écrit',         sr:'livre',            wk:'ktb'},
    9:  {fr:'sont appelés',  sr:'appeler',          wk:'dew'},
    11: {fr:'Écrit',         sr:'livre',            wk:'ktb'},
    12: {fr:'Dieu',          sr:'Dieu',             wk:'llh'},
    13: {fr:'tranche',       sr:'juger',            wk:'hkm'},
    14: {fr:'entre eux',     sr:'entre',            wk:'byn'},
    16: {fr:'se détourne',   sr:'se détourner',     wk:'wly'},
    17: {fr:'groupe',        sr:'groupe',           wk:'frq'},
    22: {fr:'se dérobent',   sr:'se détourner',     wk:'erd'},
  };

  for(const s of segs) {
    // dhhy (pos=4) → particle "ceux qui"
    if(s.position === 4 && s.key === 'dhhy') {
      s.is_particle = true; s.type = 'particle'; s.fr = 'ceux qui';
      delete s.key; delete s.root; delete s.pos; delete s.word_key;
      console.log('pos=4: dhhy → particle');
      continue;
    }
    // hmm (pos=19, pos=21) → particles
    if((s.position === 19 || s.position === 21) && s.key === 'hmm') {
      s.is_particle = true; s.type = 'particle';
      s.fr = s.position === 19 ? "d'entre eux" : 'ils';
      delete s.key; delete s.root; delete s.pos; delete s.word_key;
      console.log('pos=' + s.position + ': hmm → particle');
      continue;
    }
    // awt (pos=5) → aty
    if(s.position === 5 && s.key === 'awt') {
      s.key = 'aty'; s.root = 'أ ت ي';
      console.log('pos=5: awt → aty');
    }
    // llh (pos=12): fix root
    if(s.position === 12 && s.key === 'llh') {
      s.root = 'ا ل ه';
      console.log('pos=12: root fixed → ا ل ه');
    }
    // wa (pos=20): fix fr to "alors que"
    if(s.position === 20) {
      s.fr = 'alors que';
    }

    const mapping = frMap[s.position];
    if(mapping) {
      s.fr = mapping.fr; s.sense_retenu = mapping.sr;
      s.word_key = mapping.wk; s.is_particle = false;
    } else if(s.is_particle === undefined) {
      s.is_particle = true;
    }
    if(s.key && s.is_particle === false && !s.word_key) s.word_key = s.key;
  }

  const {error:e4} = await db.from('verse_analyses').update({segments: segs}).eq('id', VA_ID);
  if(e4) { console.log('ERROR segments:', e4.message); errs++; }
  else console.log('Segments mis à jour ✓');

  // =============================================
  // 5. INSERT 13 VWA
  // =============================================
  console.log('\n=== 5. INSERT VWA ===');

  const ktbAxes = {
    concept_chosen: 'Livre/Écrit',
    sense_chosen: 'livre',
    concepts: {
      'Livre/Écrit': {
        status: 'retenu',
        proof_ctx: "k-t-b signifie écrire. kitāb est la chose écrite — l'Écrit. Ici, il désigne l'écriture révélée, la parole divine mise par écrit. Les gens du Livre ont reçu une part de cet Écrit, et ils sont appelés vers lui pour qu'il tranche leurs différends.",
        senses: ['livre','écriture révélée','registre','contrat écrit']
      },
      'Écriture/Inscription': {
        status: 'probable',
        proof_ctx: "Le sens fondamental de k-t-b est l'acte d'écrire, d'inscrire. Le kitāb est le résultat de cet acte — ce qui a été écrit. Le lien entre l'écriture et le Livre révélé est direct.",
        senses: ['écrire','dicter','scribe','art de l\'écriture']
      },
      'Obligation/Décret': {
        status: 'peu_probable',
        proof_ctx: "Le sens de prescrire, rendre obligatoire (kataba ʿalā = il a prescrit à) n'est pas le sens ici. Le kitāb est ici le texte révélé, pas un décret.",
        senses: ['prescrire','rendre obligatoire','décret divin']
      }
    }
  };

  const vwaData = [
    // raay pos=2
    {
      verse_id: VERSE_ID, word_key: 'raay', position: 2,
      sense_chosen: 'voir',
      reason: "a-lam tara = n'as-tu pas vu. Invitation à observer, à prendre conscience.",
      analysis_axes: {
        concept_chosen: 'Vision/Perception',
        sense_chosen: 'voir',
        concepts: {
          'Vision/Perception': {
            status: 'retenu',
            proof_ctx: "r-ʾ-y signifie voir, percevoir. a-lam tara ilā est une formule rhétorique : n'as-tu pas vu (observé, constaté) ceux qui... C'est un appel à la prise de conscience par l'observation.",
            senses: ['voir','regarder','percevoir']
          },
          'Opinion/Jugement': {
            status: 'probable',
            proof_ctx: "Le sens de penser, avoir une opinion (raʾy) est secondaire ici. La question porte sur la vision/observation d'un fait, pas sur une opinion personnelle.",
            senses: ['penser','avoir une opinion','juger']
          }
        }
      }
    },
    // aty pos=5
    {
      verse_id: VERSE_ID, word_key: 'aty', position: 5,
      sense_chosen: 'donner',
      reason: "ūtū = ils ont reçu (passif de ātā = donner). On leur a donné une part de l'Écrit.",
      analysis_axes: {
        concept_chosen: 'Venue/Arrivée',
        sense_chosen: 'donner',
        concepts: {
          'Venue/Arrivée': {
            status: 'retenu',
            proof_ctx: "ʾ-t-y signifie venir, apporter. La Forme IV ātā signifie donner, accorder. ūtū est le passif : ils ont reçu (on leur a donné). Le don ici est une part de l'Écrit révélé.",
            senses: ['venir','donner','arriver','apporter']
          }
        }
      }
    },
    // nsb pos=6
    {
      verse_id: VERSE_ID, word_key: 'nsb', position: 6,
      sense_chosen: 'part',
      reason: "naṣīb = part, portion. Ce qui a été assigné (naṣaba = dresser, établir).",
      analysis_axes: {
        concept_chosen: 'Part/Attribution',
        sense_chosen: 'part',
        concepts: {
          'Part/Attribution': {
            status: 'retenu',
            proof_ctx: "n-ṣ-b signifie dresser, établir. naṣīb est la part assignée, le lot établi pour quelqu'un. Ici, naṣīban mina l-kitāb = une part de l'Écrit — ils ont reçu une portion de la révélation, pas sa totalité.",
            senses: ['part','portion','lot']
          },
          'Érection/Installation': {
            status: 'probable',
            proof_ctx: "Le sens premier de dresser, installer (naṣaba) est à l'origine du sens de part : ce qui est dressé/établi pour quelqu'un devient sa part.",
            senses: ['dresser','installer','idole (nusub)']
          },
          'Fatigue/Peine': {
            status: 'peu_probable',
            proof_ctx: "Le sens de fatigue, peine (naṣab) n'est pas en jeu ici. Il s'agit d'une attribution, pas d'un effort.",
            senses: ['être fatigué','peine','effort']
          }
        }
      }
    },
    // ktb pos=8 (1ère occurrence)
    {
      verse_id: VERSE_ID, word_key: 'ktb', position: 8,
      sense_chosen: 'livre',
      reason: "al-kitāb = l'Écrit, la chose écrite. Ici, l'écriture révélée dont ils ont reçu une part.",
      analysis_axes: ktbAxes
    },
    // dew pos=9
    {
      verse_id: VERSE_ID, word_key: 'dew', position: 9,
      sense_chosen: 'appeler',
      reason: "yudʿawna = ils sont appelés (passif). On les appelle vers l'Écrit de Dieu.",
      analysis_axes: {
        concept_chosen: 'Appel/Invocation',
        sense_chosen: 'appeler',
        concepts: {
          'Appel/Invocation': {
            status: 'retenu',
            proof_ctx: "d-ʿ-w signifie appeler, convoquer. yudʿawna ilā est le passif : ils sont appelés vers. L'appel est dirigé vers l'Écrit de Dieu pour qu'il serve d'arbitre dans leur différend.",
            senses: ['appeler','invoquer','prier','demander','inviter']
          },
          'Prétention/Revendication': {
            status: 'nul',
            proof_ctx: "Le sens de prétendre, revendiquer une filiation n'est pas en jeu ici. Il s'agit d'un appel à se soumettre à l'arbitrage de l'Écrit.",
            senses: ['prétendre','revendiquer une filiation']
          }
        }
      }
    },
    // ktb pos=11 (2ème occurrence)
    {
      verse_id: VERSE_ID, word_key: 'ktb', position: 11,
      sense_chosen: 'livre',
      reason: "kitāb Allāh = l'Écrit de Dieu. Même racine, même sens, référence explicite au texte divin.",
      analysis_axes: ktbAxes
    },
    // llh pos=12
    {
      verse_id: VERSE_ID, word_key: 'llh', position: 12,
      sense_chosen: 'Dieu',
      reason: "Allāh = Dieu, nom propre de la divinité.",
      analysis_axes: {
        concept_chosen: 'Divinité',
        sense_chosen: 'Dieu',
        concepts: {
          'Divinité': {
            status: 'retenu',
            proof_ctx: "Allāh est le nom propre de la divinité. kitāb Allāh = l'Écrit de Dieu — le texte est attribué à Dieu comme source.",
            senses: ['divinité','dieu','Dieu','théologie']
          }
        }
      }
    },
    // hkm pos=13
    {
      verse_id: VERSE_ID, word_key: 'hkm', position: 13,
      sense_chosen: 'juger',
      reason: "li-yaḥkuma = pour qu'il juge/tranche. Le Livre est l'arbitre entre eux.",
      analysis_axes: {
        concept_chosen: 'Jugement/Décision',
        sense_chosen: 'juger',
        concepts: {
          'Jugement/Décision': {
            status: 'retenu',
            proof_ctx: "ḥ-k-m signifie juger, décider, trancher. li-yaḥkuma baynahum = pour qu'il tranche entre eux. Le sujet est l'Écrit lui-même — c'est le texte qui fait office d'arbitre dans le différend.",
            senses: ['juger','décider','sentence']
          },
          'Sagesse': {
            status: 'probable',
            proof_ctx: "Le sens de sagesse (ḥikma) est lié au jugement mais n'est pas le sens direct ici. Le verbe yaḥkuma est un acte de décision, pas un état de sagesse.",
            senses: ['être sage','sagesse']
          }
        }
      }
    },
    // byn pos=14
    {
      verse_id: VERSE_ID, word_key: 'byn', position: 14,
      sense_chosen: 'entre',
      reason: "bayna-hum = entre eux. L'Écrit tranche entre les parties en désaccord.",
      analysis_axes: {
        concept_chosen: 'Séparation/Distance',
        sense_chosen: 'entre',
        concepts: {
          'Séparation/Distance': {
            status: 'retenu',
            proof_ctx: "b-y-n signifie séparer, distinguer. bayna est l'espace entre deux éléments. baynahum = entre eux — l'Écrit juge en se plaçant entre les parties pour les départager.",
            senses: ['séparer','entre','quitter']
          },
          'Clarté/Évidence': {
            status: 'probable',
            proof_ctx: "Le sens de clarté, preuve évidente est lié mais secondaire ici. bayna fonctionne comme préposition spatiale (entre), pas comme adjectif (clair).",
            senses: ['être clair','expliquer','évident','preuve']
          }
        }
      }
    },
    // wly pos=16
    {
      verse_id: VERSE_ID, word_key: 'wly', position: 16,
      sense_chosen: 'se détourner',
      reason: "yatawallā = se détourne (Forme V de w-l-y). Éloignement volontaire de la proximité divine.",
      analysis_axes: {
        concept_chosen: 'Éloignement/Détournement',
        sense_chosen: 'se détourner',
        concepts: {
          'Éloignement/Détournement': {
            status: 'retenu',
            proof_ctx: "w-l-y porte le sens premier de proximité. La Forme V tawallā marque le mouvement inverse : s'éloigner, quitter la proximité. Un groupe se détourne de l'Écrit de Dieu — ils abandonnent la proximité avec la source divine.",
            senses: ['se détourner',"s'éloigner",'tourner le dos']
          },
          'Proximité/Protection': {
            status: 'nul',
            proof_ctx: "Le sens de proximité, protection est l'opposé du mouvement décrit ici. Ils ne se rapprochent pas, ils s'éloignent.",
            senses: ['proche','ami','protecteur','allié']
          }
        }
      }
    },
    // frq pos=17
    {
      verse_id: VERSE_ID, word_key: 'frq', position: 17,
      sense_chosen: 'groupe',
      reason: "farīq = groupe, partie d'un ensemble. Un sous-groupe se détache et se détourne.",
      analysis_axes: {
        concept_chosen: 'Groupe/Partie',
        sense_chosen: 'groupe',
        concepts: {
          'Groupe/Partie': {
            status: 'retenu',
            proof_ctx: "f-r-q signifie séparer, diviser. farīq est le résultat de la séparation : un groupe distinct, une partie qui se détache de l'ensemble. Ici, farīqun minhum = un groupe d'entre eux — pas tous, mais une portion qui choisit de se détourner.",
            senses: ['groupe','partie']
          },
          'Séparation/Distinction': {
            status: 'probable',
            proof_ctx: "Le sens de séparer, distinguer est à l'origine du substantif farīq. La séparation crée le groupe — ceux qui se détournent se séparent de ceux qui acceptent.",
            senses: ['séparer','distinguer','diviser']
          }
        }
      }
    },
    // erd pos=22
    {
      verse_id: VERSE_ID, word_key: 'erd', position: 22,
      sense_chosen: 'se détourner',
      reason: "muʿriḍūn = ceux qui se détournent (participe Form IV de ʿ-r-ḍ). Ils montrent leur flanc au lieu de faire face.",
      analysis_axes: {
        concept_chosen: 'Détournement/Refus',
        sense_chosen: 'se détourner',
        concepts: {
          'Détournement/Refus': {
            status: 'retenu',
            proof_ctx: "ʿ-r-ḍ signifie largeur, flanc. La Forme IV aʿraḍa signifie montrer son flanc (sa largeur) au lieu de faire face — se détourner, refuser. muʿriḍūn est le participe actif : ceux qui sont dans un état permanent de refus. Le mot décrit non pas un acte ponctuel (comme tawallā) mais un état caractéristique.",
            senses: ['se détourner','refuser','ignorer']
          },
          'Présentation/Exposition': {
            status: 'peu_probable',
            proof_ctx: "Le sens de montrer, proposer (ʿaraḍa Forme I) est l'opposé du détournement : présenter quelque chose de face. Ici, c'est la Forme IV (aʿraḍa) qui est en jeu — le refus, pas la présentation.",
            senses: ['montrer','proposer','exposer']
          },
          'Largeur/Étendue': {
            status: 'nul',
            proof_ctx: "Le sens physique de largeur est l'étymologie de base mais n'est pas le sens actif ici. muʿriḍūn ne décrit pas une largeur physique mais un comportement de refus.",
            senses: ['être large','large']
          }
        }
      }
    },
  ];

  const {error:e5} = await db.from('verse_word_analyses').insert(vwaData);
  if(e5) { console.log('ERROR VWA:', e5.message); errs++; }
  else console.log(vwaData.length + ' VWA insérées ✓');

  // =============================================
  // 6. TRANSLATION
  // =============================================
  console.log('\n=== 6. TRANSLATION ===');

  const translationArab = "N'as-tu pas vu ceux qui ont reçu une part de l'Écrit ? Ils sont appelés vers l'Écrit de Dieu pour qu'il tranche entre eux, puis un groupe d'entre eux se détourne, alors qu'ils se dérobent.";

  const fullTranslation = "N'as-tu pas vu ceux qui ont reçu une part du Livre, et qui sont invités au Livre d'Allah pour qu'il juge parmi eux ; puis un groupe d'entre eux tourne le dos et ils s'éloignent.";

  const translationExplanation = `§DEMARCHE§
Ce verset marque un tournant dans le discours. Après les avertissements généraux des versets 21-22, le texte s'adresse maintenant directement au destinataire (« n'as-tu pas vu ») et désigne un groupe précis : ceux qui ont reçu une part de l'Écrit mais refusent de s'y soumettre quand il est invoqué comme arbitre.

**TARA** (تَرَ) — La racine r-ʾ-y signifie « VOIR, PERCEVOIR ». a-lam tara ilā est une formule rhétorique : « n'as-tu pas vu/observé ? ». C'est un appel à la prise de conscience par l'observation directe. On traduit par **VU**.

**ŪTŪ** (أُوتُوا۟) — La racine ʾ-t-y signifie « VENIR, APPORTER ». La Forme IV ātā signifie « donner, accorder ». ūtū est le passif : « ils ont reçu, on leur a donné ». On traduit par **ONT REÇU**.

**NAṢĪBAN** (نَصِيبًا) — La racine n-ṣ-b signifie « DRESSER, ÉTABLIR ». naṣīb est la part établie pour quelqu'un — son lot, sa portion. Ici, naṣīban mina l-kitāb = une part (et non la totalité) de l'Écrit. On traduit par **PART**.

**AL-KITĀBI** (ٱلْكِتَـٰبِ) — La racine k-t-b signifie « ÉCRIRE ». kitāb est la chose écrite — l'Écrit. On traduit par **ÉCRIT** plutôt que « Livre » pour restituer le lien étymologique avec l'écriture. Le mot apparaît deux fois : d'abord comme l'Écrit dont ils ont reçu une part, puis comme l'Écrit de Dieu vers lequel ils sont appelés.

**YUDʿAWNA** (يُدْعَوْنَ) — La racine d-ʿ-w signifie « APPELER, CONVOQUER ». yudʿawna est le passif : « ils sont appelés ». L'appel est dirigé vers l'Écrit de Dieu pour qu'il serve d'arbitre. On traduit par **SONT APPELÉS**.

**LI-YAḤKUMA** (لِيَحْكُمَ) — La racine ḥ-k-m signifie « JUGER, TRANCHER ». Le sujet est l'Écrit de Dieu lui-même — c'est le texte qui fait office d'arbitre entre les parties. On traduit par **TRANCHE** pour souligner l'autorité de la décision.

**BAYNAHUM** (بَيْنَهُمْ) — La racine b-y-n signifie « SÉPARER, DISTINGUER ». bayna est l'espace entre deux parties — « entre eux ». L'Écrit se place entre les disputants pour les départager. On traduit par **ENTRE EUX**.

**YATAWALLĀ** (يَتَوَلَّىٰ) — La racine w-l-y porte le sens premier de « PROXIMITÉ ». La Forme V tawallā marque le mouvement inverse : quitter la proximité, s'éloigner. Un groupe abandonne volontairement la proximité avec l'Écrit divin. On traduit par **SE DÉTOURNE**.

**FARĪQUN** (فَرِيقٌ) — La racine f-r-q signifie « SÉPARER, DIVISER ». farīq est le résultat de la séparation : un groupe distinct, une partie qui se détache. Ici, farīqun minhum = un groupe d'entre eux — pas tous, mais une fraction qui choisit le refus. On traduit par **GROUPE**.

**MUʿRIḌŪN** (مُّعْرِضُونَ) — La racine ʿ-r-ḍ signifie « LARGEUR, FLANC ». La Forme IV aʿraḍa signifie « montrer son flanc au lieu de faire face » — se détourner, refuser. muʿriḍūn est le participe actif : ceux qui sont dans un état permanent de refus. Contrairement à tawallā (acte ponctuel de s'éloigner), muʿriḍūn décrit un trait de caractère — ils sont par nature des gens qui se dérobent. On traduit par **SE DÉROBENT**.

§JUSTIFICATION§
Cette traduction s'appuie sur les choix étymologiques suivants :
1. « ÉCRIT » au lieu de « Livre » — kitāb de k-t-b (écrire) désigne la chose écrite. Le mot « livre » (latin liber) évoque un objet physique, tandis que kitāb désigne le contenu écrit.
2. « TRANCHE » au lieu de « juge » — le verbe yaḥkuma implique un acte d'autorité tranchant, pas une simple opinion. L'Écrit ne « juge » pas passivement, il tranche activement.
3. La distinction entre « SE DÉTOURNE » (tawallā, w-l-y) et « SE DÉROBENT » (muʿriḍūn, ʿ-r-ḍ) est essentielle : le premier est un acte (s'éloigner de la proximité), le second est un état (être en posture de refus permanent). Le verset dénonce non pas un simple éloignement mais un caractère ancré de dérobade.
4. « PART » (naṣīb) souligne qu'ils n'ont reçu qu'une portion de la révélation — ce qui rend leur refus d'autant plus grave : même ce fragment qu'ils possèdent, ils refusent de s'y soumettre.

§CRITIQUE§
La traduction de Hamidullah donne : « N'as-tu pas vu ceux qui ont reçu une part du Livre, et qui sont invités au Livre d'Allah pour qu'il juge parmi eux ; puis un groupe d'entre eux tourne le dos et ils s'éloignent. »

Notre traduction diffère sur ces points :
1. « Livre » → « Écrit » : Hamidullah utilise le mot conventionnel. Notre choix restitue le lien avec k-t-b (écrire).
2. « invités » → « appelés » : Hamidullah adoucit yudʿawna en « invitation ». Notre choix préserve la force de l'appel (d-ʿ-w = appeler, convoquer).
3. « juge parmi eux » → « tranche entre eux » : nuance stylistique — « trancher » souligne l'autorité de la décision.
4. « tourne le dos et ils s'éloignent » → « se détourne, alors qu'ils se dérobent » : notre traduction distingue les deux racines (w-l-y vs ʿ-r-ḍ) et leur sémantique distincte (acte vs état).`;

  const {error:e6} = await db.from('verse_analyses').update({
    translation_arab: translationArab,
    full_translation: fullTranslation,
    translation_explanation: translationExplanation
  }).eq('id', VA_ID);
  if(e6) { console.log('ERROR translation:', e6.message); errs++; }
  else console.log('Translation mise à jour ✓');

  // =============================================
  // RÉSUMÉ
  // =============================================
  console.log('\n=== RÉSUMÉ V23 ===');
  console.log('Erreurs: ' + errs);
  if(errs === 0) console.log('✓ Pipeline V23 complète — lancer validation');
  else console.log('✗ ' + errs + ' erreur(s) à corriger');
})();
