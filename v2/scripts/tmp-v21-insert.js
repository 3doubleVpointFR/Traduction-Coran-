const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  const VERSE_ID = 314;
  const VA_ID = 676;
  let errs = 0;

  // =============================================
  // 1. ENRICHMENT alm (aid=315) — 4 sens → 6 sens
  // =============================================
  console.log('=== 1. ENRICHMENT alm (aid=315) ===');
  const {error:ed1} = await db.from('word_meanings').delete().eq('analysis_id', 315);
  if(ed1) { console.log('ERROR deleting alm:', ed1.message); errs++; }

  const almSenses = [
    {analysis_id:315, concept:'Douleur/Souffrance', sense:'douleur', description:"Sensation fondamentale de souffrance physique ou morale. Le Lane's donne alam comme le substantif premier de cette racine : pain, ache.", meaning_type:'etymology', display_order:1},
    {analysis_id:315, concept:'Douleur/Souffrance', sense:'souffrir', description:"Éprouver de la douleur, être dans un état de peine. Forme I alima : il a souffert, il a eu mal.", meaning_type:'etymology', display_order:2},
    {analysis_id:315, concept:'Douleur/Souffrance', sense:'faire souffrir', description:"Causer de la douleur à quelqu'un, infliger une peine. Forme IV ālama : il lui a causé de la douleur.", meaning_type:'etymology', display_order:3},
    {analysis_id:315, concept:'Douleur/Souffrance', sense:'douloureux', description:"Qui cause une douleur intense, pénible. Adjectif intensif alīm (forme faʿīl) : qualifie ce qui inflige une souffrance vive et profonde.", meaning_type:'etymology', display_order:4},
    {analysis_id:315, concept:'Douleur/Souffrance', sense:'affliger', description:"Causer une peine profonde, attrister jusqu'à la douleur morale. Extension du sens physique vers la souffrance intérieure.", meaning_type:'etymology', display_order:5},
    {analysis_id:315, concept:'Douleur/Souffrance', sense:'blesser', description:"Atteindre quelqu'un dans sa chair ou ses sentiments. Le lien entre blessure physique et morale est porté par la même racine.", meaning_type:'etymology', display_order:6},
  ];
  const {error:ei1} = await db.from('word_meanings').insert(almSenses);
  if(ei1) { console.log('ERROR inserting alm:', ei1.message); errs++; }
  else console.log('alm: 6 sens insérés ✓');

  // =============================================
  // 2. FIX TAGGER SEGMENTS VA 676
  // =============================================
  console.log('\n=== 2. FIX TAGGER SEGMENTS ===');
  const {data:vaData} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  let segs = vaData.segments;

  // Translation mapping for important segments
  const frMap = {
    3:  {fr:'recouvrent',   sr:'couvrir',   wk:'kfr'},
    5:  {fr:'signes',       sr:'signe',     wk:'ayt'},
    6:  {fr:'Dieu',         sr:'Dieu',      wk:'llh'},
    8:  {fr:'tuent',        sr:'tuer',      wk:'qtl'},
    9:  {fr:'annonciateurs',sr:'annoncer',  wk:'nba'},
    11: {fr:'sans',         sr:'sans',      wk:'ghyr'},
    12: {fr:'droit',        sr:'droit',     wk:'hqq'},
    14: {fr:'tuent',        sr:'tuer',      wk:'qtl'},
    16: {fr:'ordonnent',    sr:'ordonner',  wk:'amr'},
    18: {fr:'équité',       sr:'équité',    wk:'qst'},
    20: {fr:'gens',         sr:'gens',      wk:'nws'},
    22: {fr:'annonce-leur', sr:'annoncer une bonne nouvelle', wk:'bshr'},
    24: {fr:'châtiment',    sr:'châtiment', wk:'edb'},
    25: {fr:'douloureux',   sr:'douloureux',wk:'alm'},
  };

  for(const s of segs) {
    // --- Convert dhhy (pos=2, pos=15) to particles ---
    if((s.position === 2 || s.position === 15) && s.key === 'dhhy') {
      s.is_particle = true;
      s.type = 'particle';
      s.fr = 'ceux qui';
      delete s.key; delete s.root; delete s.pos; delete s.word_key;
      console.log('pos=' + s.position + ': dhhy → particle "ceux qui"');
      continue;
    }

    // --- Fix ayh → ayt (pos=5) ---
    if(s.position === 5 && s.key === 'ayh') {
      s.key = 'ayt'; s.root = 'آ ي ة';
      console.log('pos=5: ayh → ayt');
    }

    // --- Fix alh → llh (pos=6) ---
    if(s.position === 6 && s.key === 'alh') {
      s.key = 'llh'; s.root = 'ا ل ه';
      console.log('pos=6: alh → llh');
    }

    // --- Set is_particle for all segments ---
    const mapping = frMap[s.position];
    if(mapping) {
      s.is_particle = false;
      s.word_key = mapping.wk;
      s.fr = mapping.fr;
      s.sense_retenu = mapping.sr;
    } else if(s.is_particle === undefined) {
      // Particles without explicit mapping
      s.is_particle = true;
    }

    // --- Ensure word_key = key for all important ---
    if(s.key && s.is_particle === false && !s.word_key) {
      s.word_key = s.key;
    }
  }

  const {error:es} = await db.from('verse_analyses').update({segments: segs}).eq('id', VA_ID);
  if(es) { console.log('ERROR segments:', es.message); errs++; }
  else console.log('Segments mis à jour ✓');

  // =============================================
  // 3. INSERT 15 VWA
  // =============================================
  console.log('\n=== 3. INSERT VWA ===');

  // Shared axes for qtl (used twice, pos=8 and pos=14)
  const qtlAxes = {
    concept_chosen: 'Meurtre/Combat',
    sense_chosen: 'tuer',
    concepts: {
      'Meurtre/Combat': {
        status: 'retenu',
        proof_ctx: "q-t-l signifie ôter la vie. yaqtulūna au présent marque un acte répété : ils tuent les annonciateurs et ceux qui ordonnent la droiture. Sens direct et sans ambiguïté.",
        senses: ['tuer','assassiner','combattre','meurtre','combat']
      }
    }
  };

  const vwaData = [
    // --- kfr pos=3 ---
    {
      verse_id: VERSE_ID, word_key: 'kfr', position: 3,
      sense_chosen: 'couvrir',
      reason: "Sens premier du Lane's : couvrir, dissimuler. yakfurūna bi-āyāti = ils recouvrent les signes.",
      analysis_axes: {
        concept_chosen: 'Couverture/Dissimulation',
        sense_chosen: 'couvrir',
        concepts: {
          'Couverture/Dissimulation': {
            status: 'retenu',
            proof_ctx: "Le sens premier de k-f-r est couvrir, dissimuler. yakfurūna bi-āyāti Allāh décrit l'acte de recouvrir les signes de Dieu, de les rendre invisibles. Le verbe au présent marque une action continue et délibérée.",
            senses: ['couvrir','cacher','la nuit qui couvre']
          },
          'Rejet/Ingratitude': {
            status: 'probable',
            proof_ctx: "L'extension vers « rejeter, être ingrat » découle du recouvrement : on rejette en recouvrant. Ce sens secondaire est possible ici mais moins primaire que la dissimulation active des signes.",
            senses: ['nier','être ingrat','renier un bienfait','rejeter']
          },
          'Expiation/Réparation': {
            status: 'peu_probable',
            proof_ctx: "Le sens d'expier (kaffāra) implique de couvrir les fautes pour les effacer. Ce sens positif est contraire au contexte péjoratif du verset.",
            senses: ['expier','effacer les péchés']
          }
        }
      }
    },
    // --- ayt pos=5 ---
    {
      verse_id: VERSE_ID, word_key: 'ayt', position: 5,
      sense_chosen: 'signe',
      reason: "Sens premier : signe visible, marque par laquelle une chose est connue.",
      analysis_axes: {
        concept_chosen: 'Signe/Preuve',
        sense_chosen: 'signe',
        concepts: {
          'Signe/Preuve': {
            status: 'retenu',
            proof_ctx: "āyāt au pluriel désigne les signes observables de Dieu — marques visibles qui témoignent de Son existence. Le sens de signe est premier et directement applicable ici.",
            senses: ['signe','miracle','preuve','marque']
          },
          'Révélation/Parole': {
            status: 'probable',
            proof_ctx: "Le sens de verset (parole révélée) est une spécialisation postérieure. Dans le contexte du recouvrement, ce sont les signes visibles qui sont cachés, pas seulement les versets.",
            senses: ['verset']
          }
        }
      }
    },
    // --- llh pos=6 ---
    {
      verse_id: VERSE_ID, word_key: 'llh', position: 6,
      sense_chosen: 'Dieu',
      reason: "Nom propre de la divinité, formé sur la racine ʾ-l-h (adorer).",
      analysis_axes: {
        concept_chosen: 'Divinité',
        sense_chosen: 'Dieu',
        concepts: {
          'Divinité': {
            status: 'retenu',
            proof_ctx: "Allāh est le nom propre de la divinité, formé sur la racine ʾ-l-h qui porte le sens d'adorer. C'est le sujet possesseur des signes (āyāt Allāh).",
            senses: ['divinité','dieu','Dieu','théologie']
          },
          'Adoration/Culte': {
            status: 'probable',
            proof_ctx: "La racine ʾ-l-h porte le sens fondamental d'adorer, se consacrer au culte. Ce sens est à l'origine du nom, mais ici le mot fonctionne comme nom propre.",
            senses: ['adorer','servir','se consacrer au culte']
          }
        }
      }
    },
    // --- qtl pos=8 (1ère occurrence) ---
    {
      verse_id: VERSE_ID, word_key: 'qtl', position: 8,
      sense_chosen: 'tuer',
      reason: "Sens direct : ôter la vie. yaqtulūna an-nabiyyīna = ils tuent les annonciateurs.",
      analysis_axes: qtlAxes
    },
    // --- nba pos=9 ---
    {
      verse_id: VERSE_ID, word_key: 'nba', position: 9,
      sense_chosen: 'annoncer',
      reason: "n-b-ʾ = apporter une nouvelle. Le nabī est l'annonciateur, celui qui transmet les nouvelles divines.",
      analysis_axes: {
        concept_chosen: 'Information/Nouvelle',
        sense_chosen: 'annoncer',
        concepts: {
          'Information/Nouvelle': {
            status: 'retenu',
            proof_ctx: "n-b-ʾ signifie apporter une nouvelle, informer. Un nabī est étymologiquement celui qui porte les nouvelles aux gens — l'annonciateur. Ce sens premier est plus fidèle que le terme théologique « prophète ».",
            senses: ['informer','nouvelle','annoncer']
          },
          'Prophétie': {
            status: 'probable',
            proof_ctx: "Le sens de prophétie est une spécialisation du porteur de nouvelles vers celui qui annonce l'avenir. Ce sens théologique est secondaire par rapport à l'étymologie.",
            senses: ['prophète','prophétie']
          }
        }
      }
    },
    // --- ghyr pos=11 ---
    {
      verse_id: VERSE_ID, word_key: 'ghyr', position: 11,
      sense_chosen: 'sans',
      reason: "bi-ghayri = sans, marquant l'exclusion du droit.",
      analysis_axes: {
        concept_chosen: 'Autre/Exclusion',
        sense_chosen: 'sans',
        concepts: {
          'Autre/Exclusion': {
            status: 'retenu',
            proof_ctx: "ghayri dans bi-ghayri ḥaqqin fonctionne comme marque d'exclusion : « sans droit ». Le sens d'exclusion est directement applicable et sans ambiguïté.",
            senses: ['autre','sauf','excepté','différent','exclusion','pas','sans']
          },
          'Changement/Altération': {
            status: 'peu_probable',
            proof_ctx: "Le sens de changer, altérer n'est pas en jeu ici. ghayri fonctionne comme préposition d'exclusion, pas comme verbe de transformation.",
            senses: ['changer','altérer','transformer']
          }
        }
      }
    },
    // --- hqq pos=12 ---
    {
      verse_id: VERSE_ID, word_key: 'hqq', position: 12,
      sense_chosen: 'droit',
      reason: "ḥaqq = ce qui est vrai, établi. bi-ghayri ḥaqqin = sans aucun droit légitime.",
      analysis_axes: {
        concept_chosen: 'Vérité/Réalité',
        sense_chosen: 'droit',
        concepts: {
          'Vérité/Réalité': {
            status: 'retenu',
            proof_ctx: "ḥaqq signifie ce qui est vrai, réel, établi. Dans bi-ghayri ḥaqqin, le droit est la chose vraie et fondée qui fait défaut : ils tuent sans fondement légitime, sans droit.",
            senses: ['être vrai','vérité','réalité','droit']
          },
          'Obligation/Nécessité': {
            status: 'probable',
            proof_ctx: "Le sens d'obligation (ce qui est dû, ce qui mérite d'être fait) est lié mais ici c'est l'absence de fondement légitime qui est en jeu, pas un devoir manqué.",
            senses: ['devoir','mériter','être obligatoire']
          }
        }
      }
    },
    // --- qtl pos=14 (2ème occurrence) ---
    {
      verse_id: VERSE_ID, word_key: 'qtl', position: 14,
      sense_chosen: 'tuer',
      reason: "Même racine, même forme. yaqtulūna alladhīna ya'murūna = ils tuent ceux qui ordonnent.",
      analysis_axes: qtlAxes
    },
    // --- amr pos=16 ---
    {
      verse_id: VERSE_ID, word_key: 'amr', position: 16,
      sense_chosen: 'ordonner',
      reason: "Sens premier : commander, ordonner. ya'murūna bi-l-qisṭi = ils ordonnent l'équité.",
      analysis_axes: {
        concept_chosen: 'Commandement/Autorité',
        sense_chosen: 'ordonner',
        concepts: {
          'Commandement/Autorité': {
            status: 'retenu',
            proof_ctx: "ʾ-m-r signifie commander, ordonner. ya'murūna bi-l-qisṭi décrit ceux qui ordonnent l'équité parmi les gens — l'acte de commandement moral est direct.",
            senses: ['ordonner','commander','nommer gouverneur']
          },
          'Affaire/Chose': {
            status: 'peu_probable',
            proof_ctx: "Le sens d'affaire, chose (amr) n'est pas en jeu ici. La forme verbale ya'murūna est clairement un acte de commandement, pas une chose.",
            senses: ['affaire','chose']
          }
        }
      }
    },
    // --- qst pos=18 ---
    {
      verse_id: VERSE_ID, word_key: 'qst', position: 18,
      sense_chosen: 'équité',
      reason: "qisṭ = équité, balance, impartialité. Distinct de ʿadl (justice au sens large).",
      analysis_axes: {
        concept_chosen: 'Justice/Équité',
        sense_chosen: 'équité',
        concepts: {
          'Justice/Équité': {
            status: 'retenu',
            proof_ctx: "q-s-ṭ désigne l'équité, la balance, l'impartialité. al-qisṭ est ce que ces personnes ordonnent parmi les gens : la droiture dans les relations humaines. Distinct de ʿadl (justice abstraite).",
            senses: ['être juste','équité','balance','agir équitablement','le plus équitable']
          },
          'Injustice/Déviation': {
            status: 'nul',
            proof_ctx: "qasaṭa (Forme I sans hamza de transitivité) signifie être injuste, dévier. Sens opposé au qisṭ mentionné ici, qui est positif.",
            senses: ['tyranniser','agir injustement','dévier du droit chemin']
          },
          'Distribution/Partage': {
            status: 'peu_probable',
            proof_ctx: "Le sens de distribuer, répartir est lié à la balance (chacun reçoit sa part) mais dans ce verset le qisṭ est un principe moral ordonné, pas un acte de distribution.",
            senses: ['distribuer','répartir','part','portion']
          }
        }
      }
    },
    // --- nws pos=20 ---
    {
      verse_id: VERSE_ID, word_key: 'nws', position: 20,
      sense_chosen: 'gens',
      reason: "an-nās = les gens, les êtres humains en général.",
      analysis_axes: {
        concept_chosen: 'Humanité/Peuple',
        sense_chosen: 'gens',
        concepts: {
          'Humanité/Peuple': {
            status: 'retenu',
            proof_ctx: "nās désigne les gens, l'humanité dans sa globalité. mina an-nāsi = parmi les gens — ceux qui ordonnent l'équité au sein de la communauté humaine.",
            senses: ['gens','êtres humains','peuple']
          },
          'Perception/Visibilité': {
            status: 'peu_probable',
            proof_ctx: "Le sens de voir de loin, être visible est l'étymologie lointaine (n-w-s) mais pas le sens en usage ici. Le mot nās fonctionne comme substantif collectif pour les humains.",
            senses: ['voir de loin','être visible']
          }
        }
      }
    },
    // --- bshr pos=22 ---
    {
      verse_id: VERSE_ID, word_key: 'bshr', position: 22,
      sense_chosen: 'annoncer une bonne nouvelle',
      reason: "Forme II bashshara = annoncer ce qui réjouit. Emploi ironique ici : annonce d'un châtiment.",
      analysis_axes: {
        concept_chosen: 'Annonce/Réjouissance',
        sense_chosen: 'annoncer une bonne nouvelle',
        concepts: {
          'Annonce/Réjouissance': {
            status: 'retenu',
            proof_ctx: "b-sh-r en Forme II signifie annoncer une nouvelle qui fait changer le visage (bashar = peau, surface). Étymologiquement, c'est une bonne nouvelle. Ici, emploi ironique saisissant : fa-bashshirhum bi-ʿadhābin alīmin — annonce-leur un châtiment douloureux. Le contraste entre la joie habituelle de l'annonce et le contenu terrible renforce la gravité.",
            senses: ['annoncer une bonne nouvelle','réjouir','beau visage']
          },
          'Surface/Contact': {
            status: 'peu_probable',
            proof_ctx: "Le sens de peau, contact physique est l'étymologie de la racine mais pas le sens de la Forme II verbale utilisée ici. Le verbe bashshara a déjà évolué vers l'annonce.",
            senses: ['peau','contact peau à peau','peler']
          }
        }
      }
    },
    // --- edb pos=24 ---
    {
      verse_id: VERSE_ID, word_key: 'edb', position: 24,
      sense_chosen: 'châtiment',
      reason: "ʿadhāb = châtiment, punition. Sens direct dans bi-ʿadhābin alīmin.",
      analysis_axes: {
        concept_chosen: 'Châtiment/Punition',
        sense_chosen: 'châtiment',
        concepts: {
          'Châtiment/Punition': {
            status: 'retenu',
            proof_ctx: "ʿ-dh-b signifie punir, châtier. ʿadhāb est le substantif : la punition, le tourment. bi-ʿadhābin alīmin = un châtiment douloureux. Sens direct et premier dans ce contexte.",
            senses: ['punir','châtier','tourmenter','châtiment']
          },
          'Douceur': {
            status: 'nul',
            proof_ctx: "Le sens opposé de doux, agréable (eau douce = ʿadhb) n'est pas en jeu ici. Le verset parle clairement de punition, pas de douceur.",
            senses: ['doux','sucré','eau douce','agréable']
          },
          'Abstention': {
            status: 'peu_probable',
            proof_ctx: "Le sens de s'abstenir, quitter est marginalement lié (s'abstenir d'un acte peut être un châtiment) mais le substantif ʿadhāb est clairement un tourment ici.",
            senses: ["s'abstenir",'quitter']
          }
        }
      }
    },
    // --- alm pos=25 ---
    {
      verse_id: VERSE_ID, word_key: 'alm', position: 25,
      sense_chosen: 'douloureux',
      reason: "alīm = qui cause une douleur intense. Adjectif intensif qualifiant le châtiment.",
      analysis_axes: {
        concept_chosen: 'Douleur/Souffrance',
        sense_chosen: 'douloureux',
        concepts: {
          'Douleur/Souffrance': {
            status: 'retenu',
            proof_ctx: "ʾ-l-m signifie douleur, souffrance. alīm est l'adjectif intensif (forme faʿīl) : ce qui cause une douleur vive et profonde. Il qualifie ʿadhāb pour en souligner l'intensité : un châtiment qui fait véritablement souffrir.",
            senses: ['douleur','souffrir','faire souffrir','douloureux','affliger','blesser']
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

  const translationArab = "En vérité, ceux qui recouvrent les signes de Dieu, et tuent les annonciateurs sans droit, et tuent ceux qui ordonnent l'équité parmi les gens — annonce-leur un châtiment douloureux.";

  const fullTranslation = "Ceux qui ne croient pas aux signes d'Allah, tuent sans droit les prophètes et tuent les gens qui commandent la justice, annonce-leur un châtiment douloureux.";

  const translationExplanation = `§DEMARCHE§
Ce verset poursuit l'avertissement adressé aux Fils d'Israël. Après leur avoir demandé au verset 20 s'ils se sont soumis, le texte décrit ici trois actes graves commis par ceux qui refusent : recouvrir les signes, tuer les porteurs de nouvelles, et tuer ceux qui prônent l'équité.

**YAKFURŪNA** (يَكْفُرُونَ) — La racine k-f-r a pour sens premier « COUVRIR, DISSIMULER ». Le Lane's donne : « he covered, concealed, hid ». yakfurūna bi-āyāti Allāh décrit l'acte de recouvrir les signes de Dieu, de les rendre invisibles pour autrui. La forme verbale au présent marque une action continue et délibérée. On traduit par **RECOUVRENT** plutôt que « ne croient pas », qui est une interprétation théologique postérieure.

**ĀYĀTI** (ءَايَـٰتِ) — La racine ā-y-a porte le sens de « SIGNE, MARQUE VISIBLE ». Le Lane's : une marque par laquelle une chose est reconnue. Ici au pluriel, āyāt désigne les signes observables de Dieu — preuves tangibles de Son existence. On traduit par **SIGNES**.

**ALLĀHI** (ٱللَّهِ) — La racine ʾ-l-h porte le sens fondamental d'adorer, se consacrer au culte. Allāh est le nom propre de la divinité formé sur cette racine. On traduit par **DIEU**.

**YAQTULŪNA** (يَقْتُلُونَ) — La racine q-t-l signifie « TUER, ÔTER LA VIE ». Sens direct et sans ambiguïté. Le présent marque une action répétée ou habituelle. On traduit par **TUENT**.

**AN-NABIYYĪNA** (ٱلنَّبِيِّـۧنَ) — La racine n-b-ʾ porte le sens premier d'« APPORTER UNE NOUVELLE, INFORMER ». Le Lane's : « he informed, he announced ». Un nabī est étymologiquement celui qui porte les nouvelles divines aux hommes — l'annonciateur. On traduit par **ANNONCIATEURS** plutôt que « prophètes » (terme grec prophêtês qui ajoute une dimension prédictive absente de l'arabe).

**GHAYRI** (غَيْرِ) — La racine gh-y-r porte le sens d'« AUTRE, DIFFÉRENT DE ». Dans bi-ghayri, le mot fonctionne comme marque d'exclusion : « sans ». On traduit par **SANS**.

**ḤAQQIN** (حَقٍّ) — La racine ḥ-q-q signifie « ÊTRE VRAI, ÊTRE ÉTABLI ». Le Lane's : « that which is true, real, established ». Le ḥaqq est le droit fondé en vérité, le fondement légitime. bi-ghayri ḥaqqin = sans fondement légitime. On traduit par **DROIT**.

**YAQTULŪNA** (يَقْتُلُونَ) — Deuxième occurrence de q-t-l, même forme verbale. Cette répétition souligne la gravité : non seulement ils tuent les annonciateurs, mais ils tuent aussi ceux qui prônent la droiture. On traduit par **TUENT**.

**YA'MURŪNA** (يَأْمُرُونَ) — La racine ʾ-m-r porte le sens de « COMMANDER, ORDONNER ». Le Lane's : « he commanded, ordered ». ya'murūna bi-l-qisṭi = ils ordonnent l'équité. On traduit par **ORDONNENT**.

**AL-QISṬI** (ٱلْقِسْطِ) — La racine q-s-ṭ signifie « ÊTRE JUSTE, ÉQUITABLE ». Le Lane's distingue qasaṭa (être injuste, Forme I) de aqsaṭa (être équitable, Forme IV). Le qisṭ est l'équité, la balance, l'impartialité — distinct de ʿadl qui est la justice au sens large. On traduit par **ÉQUITÉ**.

**AN-NĀSI** (ٱلنَّاسِ) — La racine n-w-s porte le sens de « GENS, ÊTRES HUMAINS ». nās désigne l'humanité dans sa globalité. mina an-nāsi = parmi les gens, au sein de la communauté humaine. On traduit par **GENS**.

**BASHSHIRHUM** (فَبَشِّرْهُم) — La racine b-sh-r a pour sens premier « PEAU, SURFACE VISIBLE ». De là, la Forme II bashshara signifie « annoncer une nouvelle qui fait changer le visage » — étymologiquement une bonne nouvelle, qui fait briller la peau du visage. Ici, le verset emploie cette racine dans une tournure ironique puissante : ce qui est « annoncé » est un châtiment douloureux. Le contraste entre la connotation joyeuse de l'annonce et le contenu terrible renforce la gravité de l'avertissement. On traduit par **ANNONCE-LEUR**.

**ʿADHĀBIN** (عَذَابٍ) — La racine ʿ-dh-b porte deux sens opposés : « DOUX, AGRÉABLE » (eau douce) et « PUNIR, CHÂTIER ». Le ʿadhāb est le châtiment, la punition qui tourmente. On traduit par **CHÂTIMENT**.

**ALĪMIN** (أَلِيمٍ) — La racine ʾ-l-m signifie « DOULEUR, SOUFFRANCE ». L'adjectif alīm (forme intensive faʿīl) qualifie ce qui cause une douleur vive et profonde. Il intensifie le châtiment : non pas une simple punition, mais un tourment véritablement douloureux. On traduit par **DOULOUREUX**.

§JUSTIFICATION§
Cette traduction suit une approche strictement étymologique. Les choix clés sont :
1. « RECOUVRENT » au lieu de « ne croient pas » — le sens premier de k-f-r est « couvrir, dissimuler » et non « ne pas croire ». La traduction traditionnelle projette un sens théologique postérieur sur un verbe physique.
2. « ANNONCIATEURS » au lieu de « prophètes » — la racine n-b-ʾ signifie « apporter une nouvelle ». Le mot « prophète » (du grec prophêtês) ajoute une dimension prédictive absente de l'étymologie arabe.
3. « ÉQUITÉ » au lieu de « justice » — q-s-ṭ désigne spécifiquement l'équité (balance, impartialité), distinct de ʿ-d-l (justice au sens large).
4. « ANNONCE-LEUR » — l'emploi ironique de b-sh-r (normalement réservé aux bonnes nouvelles) pour annoncer un châtiment est un procédé rhétorique puissant que la traduction préserve.
5. Le verset décrit trois comportements précis : recouvrir les signes (dissimulation), tuer les annonciateurs (violence contre les porteurs de vérité), tuer ceux qui ordonnent l'équité (violence contre les garants de la droiture). La gradation est significative.

§CRITIQUE§
La traduction de Hamidullah donne : « Ceux qui ne croient pas aux signes d'Allah, tuent sans droit les prophètes et tuent les gens qui commandent la justice, annonce-leur un châtiment douloureux. »

Notre traduction diffère sur quatre points :
1. « ne croient pas » → « recouvrent » : Hamidullah utilise le sens théologique conventionnel de kufr. Notre choix revient au sens premier (couvrir, dissimuler), plus fidèle à l'étymologie.
2. « Allah » → « Dieu » : nous utilisons l'équivalent français du nom propre, la racine ʾ-l-h signifiant divinité.
3. « prophètes » → « annonciateurs » : nous restituons le sens étymologique de n-b-ʾ (apporter une nouvelle) plutôt que le terme théologique grec.
4. « la justice » → « l'équité » : nous distinguons qisṭ (équité, balance, impartialité) de ʿadl (justice générale).
Les deux traductions convergent sur la structure syntaxique et le sens global du verset.`;

  const {error:et} = await db.from('verse_analyses').update({
    translation_arab: translationArab,
    full_translation: fullTranslation,
    translation_explanation: translationExplanation
  }).eq('id', VA_ID);
  if(et) { console.log('ERROR translation:', et.message); errs++; }
  else console.log('Translation mise à jour ✓');

  // =============================================
  // 5. WORD_DAILY pour alm (3 phrases)
  // =============================================
  console.log('\n=== 5. WORD_DAILY alm ===');
  const dailyAlm = [
    {analysis_id:315, arabic:'أَلَمٌ شَدِيدٌ فِي ظَهْرِي', phon:'alamun shadīdun fī ẓahrī', french:"J'ai une douleur intense dans le dos.", sense:'douleur'},
    {analysis_id:315, arabic:'كَلَامُهُ آلَمَنِي كَثِيرًا', phon:'kalāmuhu ālamanī kathīran', french:'Ses paroles lui ont beaucoup fait souffrir.', sense:'faire souffrir'},
    {analysis_id:315, arabic:'هَذَا عِقَابٌ أَلِيمٌ', phon:'hādhā ʿiqābun alīmun', french:"C'est une punition douloureuse.", sense:'douloureux'},
  ];
  const {error:edl} = await db.from('word_daily').insert(dailyAlm);
  if(edl) { console.log('ERROR word_daily:', edl.message); errs++; }
  else console.log('3 phrases alm insérées ✓');

  // =============================================
  // RÉSUMÉ
  // =============================================
  console.log('\n=== RÉSUMÉ V21 ===');
  console.log('Erreurs: ' + errs);
  if(errs === 0) console.log('✓ Pipeline V21 complète — lancer validation');
  else console.log('✗ ' + errs + ' erreur(s) à corriger');
})();
