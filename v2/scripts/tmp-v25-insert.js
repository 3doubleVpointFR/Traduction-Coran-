const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  const VERSE_ID = 318;
  const VA_ID = 675;
  let errs = 0;

  // =============================================
  // 1. ENRICH ksb (aid=647) — 3 sens → 6 sens
  // =============================================
  console.log('=== 1. ENRICH ksb ===');
  const ksbNew = [
    {analysis_id:647, concept:'Acquisition/Rétribution', sense:'commettre (un acte)', description:"Accomplir une action, en particulier un acte blâmable. Lane's : iktasaba = il a commis (un péché).", meaning_type:'etymology', display_order:4},
    {analysis_id:647, concept:'Acquisition/Rétribution', sense:'profit', description:"Ce qui est obtenu, le gain résultant de l'effort. Lane's : kasb = ce qui est gagné.", meaning_type:'etymology', display_order:5},
    {analysis_id:647, concept:'Effort/Travail', sense:"s'efforcer de gagner", description:"Travailler pour obtenir un gain, peiner pour acquérir. Lane's : kasaba = il s'est efforcé de gagner sa subsistance.", meaning_type:'etymology', display_order:6},
  ];
  const {error:e1} = await db.from('word_meanings').insert(ksbNew);
  if(e1) { console.log('ERROR ksb:', e1.message); errs++; }
  else {
    const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',647);
    console.log('ksb: ' + count + ' sens ✓');
  }

  // =============================================
  // 2. FIX SEGMENTS VA 675
  // =============================================
  console.log('\n=== 2. FIX SEGMENTS ===');
  const {data:vaData} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  let segs = vaData.segments;

  // Mapping for important segments: position → {fr, sr (sense_retenu), wk (word_key)}
  const frMap = {
    4:  {fr:'les rassemblons',           sr:'rassembler',          wk:'jme'},
    5:  {fr:'jour',                      sr:'jour',                wk:'ywm'},
    7:  {fr:'doute',                     sr:'douter',              wk:'ryb'},
    10: {fr:'est pleinement rétribuée',  sr:'payer intégralement', wk:'wfy'},
    11: {fr:'chaque',                    sr:'chaque',              wk:'kll'},
    12: {fr:'personne',                  sr:'personne',            wk:'nfs'},
    14: {fr:'a acquis',                  sr:'acquérir',            wk:'ksb'},
    18: {fr:'lésés',                     sr:'être injuste',        wk:'zlm'},
  };

  for(const s of segs) {
    // pos=2 kyf → particle "comment"
    if(s.position === 2 && s.key === 'kyf') {
      s.is_particle = true; s.type = 'particle'; s.fr = 'comment';
      delete s.key; delete s.root; delete s.word_key;
      console.log('pos=2: kyf → particle');
      continue;
    }
    // pos=8 fyh → particle "y"
    if(s.position === 8 && s.key === 'fyh') {
      s.is_particle = true; s.type = 'particle'; s.fr = 'y';
      delete s.key; delete s.root; delete s.word_key;
      console.log('pos=8: fyh → particle');
      continue;
    }
    // pos=13 ma → particle "ce que"
    if(s.position === 13 && s.key === 'ma') {
      s.is_particle = true; s.type = 'particle'; s.fr = 'ce que';
      delete s.key; delete s.root; delete s.word_key;
      console.log('pos=13: ma → particle');
      continue;
    }
    // pos=16 hum (null key) → particle "eux"
    if(s.position === 16 && s.phon === 'hum') {
      s.is_particle = true; s.type = 'particle'; s.fr = 'eux';
      delete s.key; delete s.root; delete s.word_key;
      console.log('pos=16: hum → particle');
      continue;
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

  const {error:e2} = await db.from('verse_analyses').update({segments: segs}).eq('id', VA_ID);
  if(e2) { console.log('ERROR segments:', e2.message); errs++; }
  else console.log('Segments mis à jour ✓');

  // =============================================
  // 3. INSERT 8 VWA
  // =============================================
  console.log('\n=== 3. INSERT VWA ===');

  const vwaData = [
    {
      verse_id: VERSE_ID, word_key: 'jme', position: 4,
      sense_chosen: 'rassembler',
      reason: "jamaʿnāhum = Nous les rassemblons. Rassemblement de toute l'humanité pour le Jour du jugement.",
      analysis_axes: {
        concept_chosen: 'Rassemblement/Union',
        sense_chosen: 'rassembler',
        concepts: {
          'Rassemblement/Union': {
            status: 'retenu',
            proof_ctx: "jamaʿnāhum dans 3:25 : Dieu rassemble tous les humains pour le Jour du rassemblement final — le sens fondamental de j-m-ʿ est le rassemblement physique ou métaphorique d'éléments dispersés en un seul lieu.",
            senses: ['rassembler','réunir','assembler','contracter','unanimité','vendredi','totalité']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'ywm', position: 5,
      sense_chosen: 'jour',
      reason: "li-yawmin = pour un Jour. Un jour spécifique et déterminé, le Jour du rassemblement final.",
      analysis_axes: {
        concept_chosen: 'Temps/Période',
        sense_chosen: 'jour',
        concepts: {
          'Temps/Période': {
            status: 'retenu',
            proof_ctx: "li-yawmin dans 3:25 : un jour spécifique et déterminé, le Jour du rassemblement final — le sens premier de y-w-m est une unité de temps définie.",
            senses: ['jour','journée','temps','période']
          },
          'Événement/Moment marquant': {
            status: 'probable',
            proof_ctx: "Le Jour du rassemblement est certes un événement marquant, mais le sens retenu ici est simplement 'jour' comme unité temporelle définie.",
            senses: ['événement','bataille','jour de combat','jour marquant']
          },
          'Sens isolé/Étape': {
            status: 'peu_probable',
            proof_ctx: "Pas de notion d'étape progressive, il s'agit d'un jour unique et déterminé.",
            senses: ['étape']
          },
          'Temps/Cycle': {
            status: 'nul',
            proof_ctx: "Aucune notion de distance ou de mesure de voyage dans ce contexte.",
            senses: ['distance d\'un jour de marche']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'ryb', position: 7,
      sense_chosen: 'douter',
      reason: "rayba = doute. Aucun doute possible au sujet de la venue de ce Jour.",
      analysis_axes: {
        concept_chosen: 'Doute/Suspicion',
        sense_chosen: 'douter',
        concepts: {
          'Doute/Suspicion': {
            status: 'retenu',
            proof_ctx: "lā rayba fīhi dans 3:25 : aucun doute possible au sujet de ce Jour — le sens premier de r-y-b est l'incertitude, l'hésitation devant une chose.",
            senses: ['douter','soupçonner','inquiétude','accusation']
          },
          'Besoin/Manque': {
            status: 'nul',
            proof_ctx: "Aucun rapport avec le besoin ou le manque dans ce contexte de certitude absolue.",
            senses: ['besoin','avoir besoin de']
          },
          'Sens isolé/Abondance': {
            status: 'nul',
            proof_ctx: "Sens agricole sans rapport avec le contexte eschatologique.",
            senses: ['abondance d\'herbage']
          },
          'Lieu/Géographie': {
            status: 'nul',
            proof_ctx: "Sens géographique sans rapport avec ce contexte.",
            senses: ['terre fertile']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'wfy', position: 10,
      sense_chosen: 'payer intégralement',
      reason: "wuffiyat = est rétribuée pleinement. Forme II passive : recevoir intégralement ce qui est dû.",
      analysis_axes: {
        concept_chosen: 'Fidélité/Accomplissement',
        sense_chosen: 'payer intégralement',
        concepts: {
          'Fidélité/Accomplissement': {
            status: 'retenu',
            proof_ctx: "wuffiyat dans 3:25 : la forme II passive de w-f-y signifie être rétribué pleinement, recevoir intégralement ce qui est dû — aucune diminution ni excès dans la rétribution.",
            senses: ['être fidèle','accomplir','tenir sa promesse','payer intégralement']
          },
          'Mort/Fin': {
            status: 'nul',
            proof_ctx: "Le contexte ne parle pas de mort mais de rétribution — tuwuffiya au sens de mourir n'est pas le sens ici.",
            senses: ['mourir']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'kll', position: 11,
      sense_chosen: 'chaque',
      reason: "kullu = chaque. Totalité exhaustive — chaque personne sans exception.",
      analysis_axes: {
        concept_chosen: 'Totalité',
        sense_chosen: 'chaque',
        concepts: {
          'Totalité': {
            status: 'retenu',
            proof_ctx: "kullu dans 3:25 : chaque personne sans exception est rétribuée — kullu exprime la totalité exhaustive, aucun individu n'est exclu.",
            senses: ['tout','chaque','totalité']
          },
          'Émoussement/Faiblesse': {
            status: 'nul',
            proof_ctx: "Le sens d'émoussement ou de fatigue n'a aucun rapport avec ce contexte de rétribution universelle.",
            senses: ['s\'émousser','être fatigué']
          },
          'Charge/Dépendance': {
            status: 'nul',
            proof_ctx: "Pas de notion de fardeau ou de dépendance ici.",
            senses: ['fardeau','personne à charge']
          },
          'Corps/Anatomie': {
            status: 'nul',
            proof_ctx: "Le sens de couronner est sans rapport avec ce contexte.",
            senses: ['couronner']
          },
          'Sens isolé/Agacer': {
            status: 'nul',
            proof_ctx: "Sens physique sans lien avec le contexte.",
            senses: ['agacer les dents']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'nfs', position: 12,
      sense_chosen: 'personne',
      reason: "nafsin = personne. Chaque être individuel considéré séparément dans la rétribution.",
      analysis_axes: {
        concept_chosen: 'Âme/Être',
        sense_chosen: 'personne',
        concepts: {
          'Âme/Être': {
            status: 'retenu',
            proof_ctx: "nafsin dans 3:25 : chaque être individuel est rétribué — le sens premier de n-f-s est l'être en tant qu'entité distincte, la personne individuelle.",
            senses: ['âme','soi-même','personne','esprit','désir']
          },
          'Souffle/Vie': {
            status: 'peu_probable',
            proof_ctx: "Le sens de souffle ou respiration n'est pas pertinent ici, c'est l'individu en tant que personne qui est visé.",
            senses: ['souffle','respirer','soulagement']
          },
          'Corps/Anatomie': {
            status: 'nul',
            proof_ctx: "Le sens de sang n'a aucun rapport avec ce contexte.",
            senses: ['sang']
          },
          'Sens isolé/Oeil': {
            status: 'nul',
            proof_ctx: "Le mauvais oeil n'a aucun rapport avec ce contexte eschatologique.",
            senses: ['oeil mauvais']
          },
          'Sens isolé/Quantité': {
            status: 'nul',
            proof_ctx: "Le sens de quantité n'est pas pertinent ici.",
            senses: ['quantité']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'ksb', position: 14,
      sense_chosen: 'acquérir',
      reason: "kasabat = elle a acquis. Ce que chaque personne a acquis par ses actions et efforts.",
      analysis_axes: {
        concept_chosen: 'Acquisition/Rétribution',
        sense_chosen: 'acquérir',
        concepts: {
          'Acquisition/Rétribution': {
            status: 'retenu',
            proof_ctx: "kasabat dans 3:25 : ce que chaque personne a acquis par ses actes tout au long de sa vie — le sens premier de k-s-b est l'obtention par l'effort, le gain résultant de l'action.",
            senses: ['acquérir','gagner','mériter','commettre (un acte)','profit']
          },
          'Effort/Travail': {
            status: 'probable',
            proof_ctx: "L'idée d'effort est sous-jacente dans kasabat mais le sens retenu met l'accent sur le résultat (ce qui est acquis) plutôt que sur le processus.",
            senses: ['s\'efforcer de gagner']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'zlm', position: 18,
      sense_chosen: 'être injuste',
      reason: "yuẓlamūna = ils ne sont pas lésés. Aucune injustice dans la rétribution — exacte proportionnalité.",
      analysis_axes: {
        concept_chosen: 'Injustice/Oppression',
        sense_chosen: 'être injuste',
        concepts: {
          'Injustice/Oppression': {
            status: 'retenu',
            proof_ctx: "yuẓlamūna dans 3:25 : ils ne subissent aucune injustice, la rétribution est exactement proportionnelle — le sens premier de ẓ-l-m est placer une chose hors de sa place légitime, d'où la transgression et l'injustice.",
            senses: ['opprimer','être injuste','injustice','oppresseur']
          },
          'Obscurité/Ténèbres': {
            status: 'nul',
            proof_ctx: "Le sens d'obscurité physique n'est pas pertinent dans ce contexte de rétribution juste.",
            senses: ['obscurité','ténèbres']
          },
          'Souffle/Vent': {
            status: 'nul',
            proof_ctx: "Le sens réflexif de se faire du tort est possible mais le contexte passif indique clairement une injustice subie de l'extérieur, qui est niée.",
            senses: ['se faire du tort']
          }
        }
      }
    }
  ];

  // Delete existing VWA if any
  await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
  const {error:e3} = await db.from('verse_word_analyses').insert(vwaData);
  if(e3) { console.log('ERROR VWA:', e3.message); errs++; }
  else console.log(vwaData.length + ' VWA insérées ✓');

  // =============================================
  // 4. TRANSLATION
  // =============================================
  console.log('\n=== 4. TRANSLATION ===');

  const translationFinal = "Comment donc, quand Nous les rassemblons pour un Jour dont il n'y a aucun doute, et que chaque personne est pleinement rétribuée de ce qu'elle a acquis, et qu'ils ne sont pas lésés ?";

  const translationExplanation = `§DEMARCHE§
Ce verset est une interrogation rhétorique adressée à ceux qui se trompent eux-mêmes (versets précédents). Il décrit le rassemblement universel et la rétribution exacte de chaque individu.

**RASSEMBLER** (jamaʿnāhum) — La racine ج م ع signifie fondamentalement réunir des éléments dispersés en un seul lieu. Ici, Dieu rassemble toute l'humanité pour le Jour du jugement. Le sens retenu est le rassemblement physique en un lieu unique.

**JOUR** (yawmin) — La racine ي و م désigne une unité de temps définie. « Pour un Jour » souligne le caractère déterminé et inévitable de cet événement. Il ne s'agit pas d'une période vague mais d'un jour précis.

**DOUTE** (rayba) — La racine ر ي ب signifie l'incertitude, l'hésitation. « Dont il n'y a aucun doute » affirme la certitude absolue de la venue de ce Jour — il est incontestable.

**RÉTRIBUER PLEINEMENT** (wuffiyat) — La racine و ف ي à la forme intensive passive signifie rendre intégralement, sans diminution ni excès. Chaque personne reçoit exactement ce qui correspond à ses actes, sans la moindre altération.

**CHAQUE** (kullu) — La racine ك ل ل dans sa forme kullu exprime la totalité exhaustive : personne n'est exclu de cette rétribution. Chaque individu sans exception est concerné.

**PERSONNE** (nafsin) — La racine ن ف س désigne l'être individuel, le soi. Chaque personne est considérée individuellement dans cette rétribution, non collectivement.

**ACQUÉRIR** (kasabat) — La racine ك س ب signifie obtenir par l'effort ou l'action. Ce que chaque personne a acquis par ses actes constitue la base exacte de sa rétribution.

**ÊTRE INJUSTE** (yuẓlamūna) — La racine ظ ل م signifie placer une chose hors de sa place légitime. Au passif négatif : ils ne subissent aucune injustice, la rétribution est exactement proportionnelle à ce qui a été acquis.

§JUSTIFICATION§
La traduction préserve la structure interrogative rhétorique (« Comment donc ») qui ouvre le verset et crée un effet de suspension. « Donc » rend la particule فَ qui relie ce verset au précédent. Le choix de « rassemblons » au présent reflète la certitude de l'événement exprimée par le passé arabe après إذا. « Pleinement rétribuée » rend la forme intensive de و ف ي (forme II passive) qui insiste sur l'intégralité du paiement. « Personne » pour nafs plutôt que « âme » évite les connotations philosophiques post-coraniques. « Acquis » pour kasabat maintient la neutralité du terme (ni positif ni négatif). « Lésés » pour yuẓlamūna rend le passif de manière naturelle en français, soulignant la justice absolue de la rétribution.

§CRITIQUE§
La traduction est fidèle au texte arabe dans sa structure et sa sémantique. Points de vigilance : (1) « Comment donc » seul, sans verbe explicite (« sera-ce »), reproduit l'ellipse arabe mais peut sembler abrupt en français — c'est un choix stylistique qui préserve la force rhétorique du texte original. (2) « Dont il n'y a aucun doute » est plus littéral que « indubitablement » mais respecte la structure prépositionnelle de فيه. (3) La coordination « et que... et qu'ils » préserve le rythme ternaire du verset arabe. (4) Aucun sens post-islamique détecté : tous les choix s'appuient sur les sens étymologiques attestés par Lane's Lexicon.`;

  const {error:e4} = await db.from('verse_analyses').update({
    translation_final: translationFinal,
    translation_explanation: translationExplanation
  }).eq('id', VA_ID);
  if(e4) { console.log('ERROR translation:', e4.message); errs++; }
  else console.log('Translation ✓');

  // =============================================
  // RÉSUMÉ
  // =============================================
  console.log('\n=== RÉSUMÉ V25 ===');
  console.log('Erreurs: ' + errs);
  if(errs === 0) console.log('✓ Pipeline V25 complète');
  else console.log('✗ ' + errs + ' erreur(s)');
})();
