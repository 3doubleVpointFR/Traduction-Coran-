const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  const VERSE_ID = 317;
  const VA_ID = 674;
  let errs = 0;

  // =============================================
  // 1. ENRICH fry (aid=2482) — 1 sens → 7 sens
  // =============================================
  console.log('=== 1. ENRICH fry ===');
  const {error:ed1} = await db.from('word_meanings').delete().eq('analysis_id', 2482);
  if(ed1) { console.log('ERROR del fry:', ed1.message); errs++; }
  const frySenses = [
    {analysis_id:2482, concept:'Fabrication/Mensonge', sense:'fabriquer', description:"Forger de toutes pièces, inventer quelque chose de faux. Le Lane's donne iftarā : il a fabriqué un mensonge, il a forgé un récit.", meaning_type:'etymology', display_order:1},
    {analysis_id:2482, concept:'Fabrication/Mensonge', sense:'inventer', description:"Créer quelque chose de faux, imaginer un récit mensonger. yaftarūna = ils inventent (des mensonges).", meaning_type:'etymology', display_order:2},
    {analysis_id:2482, concept:'Fabrication/Mensonge', sense:'forger', description:"Fabriquer de manière délibérée et frauduleuse. iftarā ʿalā Allāh = il a forgé un mensonge sur Dieu.", meaning_type:'etymology', display_order:3},
    {analysis_id:2482, concept:'Fabrication/Mensonge', sense:'calomnier', description:"Accuser faussement, attribuer des propos mensongers à quelqu'un.", meaning_type:'etymology', display_order:4},
    {analysis_id:2482, concept:'Coupure/Fente', sense:'couper', description:"Sens physique premier de f-r-y : séparer avec un instrument tranchant, fendre.", meaning_type:'etymology', display_order:5},
    {analysis_id:2482, concept:'Coupure/Fente', sense:'fendre', description:"Diviser en deux, ouvrir par la force. Sens physique à l'origine de la métaphore du mensonge qui 'tranche' la vérité.", meaning_type:'etymology', display_order:6},
    {analysis_id:2482, concept:'Extraordinaire', sense:'merveilleux', description:"Chose étonnante, hors du commun (fariyy). Ce qui est 'coupé' de l'ordinaire par son caractère exceptionnel.", meaning_type:'etymology', display_order:7},
  ];
  const {error:ei1} = await db.from('word_meanings').insert(frySenses);
  if(ei1) { console.log('ERROR ins fry:', ei1.message); errs++; }
  else console.log('fry: 7 sens ✓');

  // word_daily fry
  const fryDaily = [
    {analysis_id:2482, arabic:'افْتَرَى عَلَيْهِ كَذِبًا', phon:'iftarā ʿalayhi kadhiban', french:'Il a inventé un mensonge à son sujet.', sense:'inventer'},
    {analysis_id:2482, arabic:'فَرَى الجِلْدَ بِالسِّكِّينِ', phon:'farā l-jilda bi-s-sikkīn', french:'Il a coupé le cuir avec le couteau.', sense:'couper'},
    {analysis_id:2482, arabic:'هَذَا أَمْرٌ فَرِيٌّ', phon:'hādhā amrun fariyy', french:"C'est une chose extraordinaire.", sense:'merveilleux'},
  ];
  const {error:ed1b} = await db.from('word_daily').insert(fryDaily);
  if(ed1b) { console.log('ERROR daily fry:', ed1b.message); errs++; }
  else console.log('fry daily: 3 ✓');

  // =============================================
  // 2. ENRICH ghr (aid=1301) — 3 sens → 7 sens + daily
  // =============================================
  console.log('\n=== 2. ENRICH ghr ===');
  const ghrNew = [
    {analysis_id:1301, concept:'Tromperie/Illusion', sense:'illusionner', description:"Faire croire en ce qui n'est pas réel, abuser par de fausses apparences.", meaning_type:'etymology', display_order:4},
    {analysis_id:1301, concept:'Tromperie/Illusion', sense:'séduire', description:"Attirer par de fausses apparences, charmer pour mieux tromper.", meaning_type:'etymology', display_order:5},
    {analysis_id:1301, concept:'Danger/Risque', sense:'risque', description:"Situation incertaine, hasard. gharar : transaction comportant un aléa excessif.", meaning_type:'etymology', display_order:6},
    {analysis_id:1301, concept:'Danger/Risque', sense:'danger', description:"Péril, situation menaçante. ghar(r) : ce qui expose à un mal imprévu.", meaning_type:'etymology', display_order:7},
  ];
  const {error:e2} = await db.from('word_meanings').insert(ghrNew);
  if(e2) { console.log('ERROR ghr:', e2.message); errs++; }
  else console.log('ghr: +4 sens ✓');

  const ghrDaily = [
    {analysis_id:1301, arabic:'غَرَّهُ المَظْهَرُ الخَادِعُ', phon:'gharrahu l-maẓharu l-khādiʿ', french:"L'apparence trompeuse l'a dupé.", sense:'tromper'},
    {analysis_id:1301, arabic:'لَا تَغْتَرَّ بِالوُعُودِ الفَارِغَةِ', phon:'lā taghtarra bi-l-wuʿūdi l-fārigha', french:'Ne te laisse pas tromper par les promesses vides.', sense:'être trompé'},
    {analysis_id:1301, arabic:'الغَرَرُ فِي البَيْعِ مَمْنُوعٌ', phon:'al-ghararu fī l-bayʿi mamnūʿ', french:'Le risque dans la vente est interdit.', sense:'risque'},
  ];
  const {error:e2b} = await db.from('word_daily').insert(ghrDaily);
  if(e2b) { console.log('ERROR daily ghr:', e2b.message); errs++; }
  else console.log('ghr daily: 3 ✓');

  // =============================================
  // 3. FIX SEGMENTS VA 674
  // =============================================
  console.log('\n=== 3. FIX SEGMENTS ===');
  const {data:vaData} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  let segs = vaData.segments;

  const frMap = {
    4:  {fr:'ont dit',     sr:'dire',                  wk:'qwl'},
    6:  {fr:'touchera',    sr:'toucher',                wk:'mss'},
    7:  {fr:'feu',         sr:'feu',                    wk:'nwr'},
    9:  {fr:'jours',       sr:'jour',                   wk:'ywm'},
    10: {fr:'comptés',     sr:'compter',                wk:'edd'},
    12: {fr:'a trompés',   sr:'tromper',                wk:'ghr'},
    14: {fr:'pratique',    sr:'pratique',                wk:'dyn'},
    16: {fr:'étaient',     sr:'être (verbe incomplet)', wk:'kwn'},
    17: {fr:'fabriquaient',sr:'fabriquer',              wk:'fry'},
  };

  for(const s of segs) {
    // thlk (pos=1) → particle "cela"
    if(s.position === 1 && s.key === 'thlk') {
      s.is_particle = true; s.type = 'particle'; s.fr = 'cela';
      delete s.key; delete s.root; delete s.pos; delete s.word_key;
      console.log('pos=1: thlk → particle');
      continue;
    }
    // ann (pos=3) → particle "parce qu'ils"
    if(s.position === 3 && s.key === 'ann') {
      s.is_particle = true; s.type = 'particle'; s.fr = "parce qu'ils";
      delete s.key; delete s.root; delete s.pos; delete s.word_key;
      console.log('pos=3: ann → particle');
      continue;
    }
    // ma (pos=15) → particle "ce que"
    if(s.position === 15 && s.key === 'ma') {
      s.is_particle = true; s.type = 'particle'; s.fr = 'ce que';
      delete s.key; delete s.root; delete s.pos; delete s.word_key;
      console.log('pos=15: ma → particle');
      continue;
    }
    // ftr (pos=17) → fry
    if(s.position === 17 && s.key === 'ftr') {
      s.key = 'fry'; s.root = 'ف ر ي';
      console.log('pos=17: ftr → fry');
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

  const {error:e3} = await db.from('verse_analyses').update({segments: segs}).eq('id', VA_ID);
  if(e3) { console.log('ERROR segments:', e3.message); errs++; }
  else console.log('Segments mis à jour ✓');

  // =============================================
  // 4. INSERT 9 VWA
  // =============================================
  console.log('\n=== 4. INSERT VWA ===');

  const vwaData = [
    {
      verse_id: VERSE_ID, word_key: 'qwl', position: 4,
      sense_chosen: 'dire',
      reason: "qālū = ils ont dit. Introduction du discours rapporté.",
      analysis_axes: {
        concept_chosen: 'Parole/Énonciation',
        sense_chosen: 'dire',
        concepts: {
          'Parole/Énonciation': {
            status: 'retenu',
            proof_ctx: "q-w-l signifie dire, énoncer. qālū au passé introduit le discours rapporté : ils ont dit que le feu ne les touchera que quelques jours. C'est l'acte de parole qui fonde leur fausse assurance.",
            senses: ['dire','parler','parole','discours','affirmer']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'mss', position: 6,
      sense_chosen: 'toucher',
      reason: "tamassnā = nous touchera. Le feu ne les atteindra pas selon eux.",
      analysis_axes: {
        concept_chosen: 'Contact/Atteinte',
        sense_chosen: 'toucher',
        concepts: {
          'Contact/Atteinte': {
            status: 'retenu',
            proof_ctx: "m-s-s signifie toucher, atteindre physiquement. lan tamassnā an-nāru = le feu ne nous touchera pas. Le verbe décrit le contact physique direct entre le feu et la personne — un contact qu'ils nient pour se rassurer.",
            senses: ['toucher','atteindre','affliger']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'nwr', position: 7,
      sense_chosen: 'feu',
      reason: "an-nāru = le feu. La racine n-w-r porte le sens de lumière et de feu.",
      analysis_axes: {
        concept_chosen: 'Lumière/Clarté',
        sense_chosen: 'feu',
        concepts: {
          'Lumière/Clarté': {
            status: 'retenu',
            proof_ctx: "n-w-r porte le double sens de lumière (nūr) et de feu (nār). Le feu est la source de lumière — les deux partagent la même racine. an-nāru ici est le feu du châtiment, celui que mentionne le verset 21.",
            senses: ['lumière','éclairer','feu','guider par la lumière']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'ywm', position: 9,
      sense_chosen: 'jour',
      reason: "ayyāman = des jours. Pluriel de yawm, unité de temps.",
      analysis_axes: {
        concept_chosen: 'Temps/Période',
        sense_chosen: 'jour',
        concepts: {
          'Temps/Période': {
            status: 'retenu',
            proof_ctx: "y-w-m signifie jour, unité de temps. ayyāman maʿdūdātin = des jours comptés — une durée limitée et dénombrable. Ils croient que le châtiment sera bref et passager.",
            senses: ['jour','journée','temps','période']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'edd', position: 10,
      sense_chosen: 'compter',
      reason: "maʿdūdāt = comptés (participe passif). Jours dénombrables, limités.",
      analysis_axes: {
        concept_chosen: 'Dénombrement/Calcul',
        sense_chosen: 'compter',
        concepts: {
          'Dénombrement/Calcul': {
            status: 'retenu',
            proof_ctx: "ʿ-d-d signifie compter, dénombrer. maʿdūdāt est le participe passif féminin pluriel : comptés, dénombrables. ayyāman maʿdūdātin = des jours que l'on peut compter — un nombre fini et limité. Cette prétention minimise le châtiment.",
            senses: ['compter','dénombrer','nombre','énumérer ses qualités','nombreux']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'ghr', position: 12,
      sense_chosen: 'tromper',
      reason: "gharrahum = les a trompés. Leurs fabrications les ont induits en erreur.",
      analysis_axes: {
        concept_chosen: 'Tromperie/Illusion',
        sense_chosen: 'tromper',
        concepts: {
          'Tromperie/Illusion': {
            status: 'retenu',
            proof_ctx: "gh-r-r signifie tromper, duper, abuser. gharrahum = il les a trompés. Le sujet de la tromperie est mā kānū yaftarūna — ce qu'ils fabriquaient comme mensonges. Leurs propres fabrications sont devenues la source de leur illusion.",
            senses: ['tromper','duper','être trompé','illusionner','séduire']
          },
          'Danger/Risque': {
            status: 'peu_probable',
            proof_ctx: "Le sens de risque, danger (gharar) n'est pas directement en jeu ici. Le verset parle d'une tromperie active, pas d'un danger objectif.",
            senses: ['risque','danger']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'dyn', position: 14,
      sense_chosen: 'pratique',
      reason: "dīnihim = leur pratique, leur système de conduite. Sens premier pré-islamique de d-y-n.",
      analysis_axes: {
        concept_chosen: 'Religion/Système',
        sense_chosen: 'pratique',
        concepts: {
          'Religion/Système': {
            status: 'retenu',
            proof_ctx: "d-y-n porte le sens premier d'obéissance, de pratique coutumière, de système de conduite. dīnihim = leur pratique, leur manière de vivre et d'agir. Les fabrications les ont trompés dans leur façon de pratiquer — leur système de conduite est corrompu par les mensonges qu'ils ont forgés.",
            senses: ['pratique','coutume','habitude','système de croyances']
          },
          'Obéissance/Soumission': {
            status: 'probable',
            proof_ctx: "Le sens d'obéissance, soumission est étymologiquement premier mais ici le dīn est le système de conduite global — pas seulement l'obéissance mais toute la pratique.",
            senses: ['obéir','se soumettre','soumission']
          },
          'Rétribution/Compte': {
            status: 'peu_probable',
            proof_ctx: "Le sens de rétribution, jugement est lié mais pas le sens direct ici. Le verset parle de la tromperie dans leur pratique, pas de la rétribution future.",
            senses: ['rétribution','récompense','punition','jugement']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'kwn', position: 16,
      sense_chosen: 'être (verbe incomplet)',
      reason: "kānū = ils étaient / ils avaient l'habitude de. Marqueur du passé habituel.",
      analysis_axes: {
        concept_chosen: 'Être/Existence',
        sense_chosen: 'être (verbe incomplet)',
        concepts: {
          'Être/Existence': {
            status: 'retenu',
            proof_ctx: "k-w-n signifie être, exister. kāna est le verbe incomplet qui situe l'action dans le passé. kānū yaftarūna = ils étaient à fabriquer (passé habituel) — cette fabrication n'était pas un acte isolé mais une habitude persistante.",
            senses: ['être (verbe incomplet)','venir à l\'existence']
          }
        }
      }
    },
    {
      verse_id: VERSE_ID, word_key: 'fry', position: 17,
      sense_chosen: 'fabriquer',
      reason: "yaftarūna = ils fabriquent/inventent (des mensonges). Forme VIII de f-r-y = forger de toutes pièces.",
      analysis_axes: {
        concept_chosen: 'Fabrication/Mensonge',
        sense_chosen: 'fabriquer',
        concepts: {
          'Fabrication/Mensonge': {
            status: 'retenu',
            proof_ctx: "f-r-y signifie couper, fendre, puis fabriquer, forger un mensonge. yaftarūna (Forme VIII iftarā) décrit la fabrication délibérée de faussetés. mā kānū yaftarūna = ce qu'ils avaient l'habitude de fabriquer — un discours mensonger construit et répété qui a fini par les tromper eux-mêmes.",
            senses: ['fabriquer','inventer','forger','calomnier']
          },
          'Coupure/Fente': {
            status: 'peu_probable',
            proof_ctx: "Le sens physique de couper, fendre est l'étymologie de base mais pas le sens actif ici. yaftarūna décrit une fabrication intellectuelle, pas une coupure physique.",
            senses: ['couper','fendre']
          }
        }
      }
    },
  ];

  const {error:e4} = await db.from('verse_word_analyses').insert(vwaData);
  if(e4) { console.log('ERROR VWA:', e4.message); errs++; }
  else console.log(vwaData.length + ' VWA insérées ✓');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n=== 5. TRANSLATION ===');

  const translationArab = "Cela, parce qu'ils ont dit : « Le feu ne nous touchera que des jours comptés. » Et ce qu'ils fabriquaient les a trompés dans leur pratique.";

  const fullTranslation = "C'est parce qu'ils disent : « Le Feu ne nous touchera que pour un nombre de jours comptés. » Et les mensonges qu'ils inventaient les ont trompés dans leur religion.";

  const translationExplanation = `§DEMARCHE§
Ce verset explique la cause du détournement décrit au verset 23. Le pronom dhālika (cela) renvoie à leur refus de se soumettre à l'Écrit : ils se sont détournés parce qu'ils tiennent un discours de fausse sécurité, et parce que leurs propres fabrications les ont trompés.

**QĀLŪ** (قَالُوا۟) — La racine q-w-l signifie « DIRE, ÉNONCER ». qālū au passé accompli introduit le discours rapporté : ils ont dit... C'est l'acte de parole qui fonde leur fausse assurance. On traduit par **ONT DIT**.

**TAMASSNĀ** (تَمَسَّنَا) — La racine m-s-s signifie « TOUCHER, ATTEINDRE ». Le verbe décrit le contact physique direct. lan tamassnā = il ne nous touchera pas. Ils nient tout contact futur avec le feu. On traduit par **TOUCHERA**.

**AN-NĀRU** (ٱلنَّارُ) — La racine n-w-r porte le double sens de « LUMIÈRE » (nūr) et de « FEU » (nār). Les deux partagent la même racine — le feu est source de lumière. Ici, an-nār est le feu du châtiment annoncé au verset 21. On traduit par **FEU**.

**AYYĀMAN** (أَيَّامًا) — La racine y-w-m signifie « JOUR, PÉRIODE ». ayyāman est le pluriel accusatif : des jours. On traduit par **JOURS**.

**MAʿDŪDĀTIN** (مَّعْدُودَٰتٍ) — La racine ʿ-d-d signifie « COMPTER, DÉNOMBRER ». maʿdūdāt est le participe passif féminin pluriel : comptées, dénombrables. ayyāman maʿdūdātin = des jours que l'on peut compter sur les doigts — un nombre fini et dérisoire. Cette prétention minimise le châtiment. On traduit par **COMPTÉS**.

**GHARRAHUM** (وَغَرَّهُمْ) — La racine gh-r-r signifie « TROMPER, DUPER, ABUSER ». gharrahum = cela les a trompés. Le sujet de la tromperie est mā kānū yaftarūna — ce qu'ils avaient l'habitude de fabriquer. Leurs propres mensonges sont devenus la source de leur illusion. On traduit par **A TROMPÉS**.

**DĪNIHIM** (دِينِهِم) — La racine d-y-n porte le sens premier d'« OBÉISSANCE, PRATIQUE COUTUMIÈRE ». Le dīn est le système de conduite, la manière de vivre et d'agir. Leurs fabrications les ont corrompus dans leur pratique même. On traduit par **PRATIQUE** plutôt que « religion » — terme postérieur qui projette une catégorie théologique anachronique.

**KĀNŪ** (كَانُوا۟) — La racine k-w-n signifie « ÊTRE ». kāna est le verbe incomplet qui marque le passé habituel. kānū yaftarūna = ils avaient l'habitude de fabriquer. Ce n'était pas un acte isolé mais une pratique persistante. On traduit par **ÉTAIENT** (marqueur d'habitude).

**YAFTARŪNA** (يَفْتَرُونَ) — La racine f-r-y signifie « COUPER, FENDRE » puis « FABRIQUER, FORGER (un mensonge) ». La Forme VIII iftarā décrit la fabrication délibérée de faussetés — des discours forgés de toutes pièces. On traduit par **FABRIQUAIENT** pour restituer le caractère artisanal et volontaire de la tromperie.

§JUSTIFICATION§
Cette traduction s'appuie sur les choix suivants :
1. « ONT DIT » au lieu de « disent » — qālū est un passé accompli, pas un présent. Hamidullah utilise le présent, mais le verbe arabe indique un acte de parole révolu.
2. « COMPTÉS » pour maʿdūdāt — le participe passif souligne que les jours sont dénombrables, finis, dérisoires. Leur argument est que le châtiment sera bref.
3. « PRATIQUE » au lieu de « religion » — dīn signifie pratique, système de conduite, habitude. Le mot « religion » (du latin religio) introduit une catégorie occidentale absente du texte arabe.
4. « FABRIQUAIENT » au lieu de « inventaient » ou « mensonges qu'ils inventaient » — le texte dit mā kānū yaftarūna = ce qu'ils fabriquaient. Le mā (ce que) est indéfini — il ne spécifie pas des « mensonges » mais tout ce qu'ils forgeaient.

§CRITIQUE§
La traduction de Hamidullah donne : « C'est parce qu'ils disent : "Le Feu ne nous touchera que pour un nombre de jours comptés." Et les mensonges qu'ils inventaient les ont trompés dans leur religion. »

Notre traduction diffère sur ces points :
1. « disent » → « ont dit » : le verbe arabe qālū est au passé (accompli). Hamidullah utilise un présent de narration.
2. « les mensonges qu'ils inventaient » → « ce qu'ils fabriquaient » : mā kānū yaftarūna = littéralement « ce qu'ils étaient à fabriquer ». Hamidullah ajoute « mensonges » qui n'est pas dans le texte.
3. « religion » → « pratique » : notre traduction évite le terme « religion » pour dīn, préférant le sens étymologique de pratique/conduite.
4. « inventaient » → « fabriquaient » : la racine f-r-y (couper, forger) est mieux rendue par « fabriquer » (qui conserve l'idée de construction artisanale) que par « inventer » (qui évoque la créativité).`;

  const {error:e5} = await db.from('verse_analyses').update({
    translation_arab: translationArab,
    full_translation: fullTranslation,
    translation_explanation: translationExplanation
  }).eq('id', VA_ID);
  if(e5) { console.log('ERROR translation:', e5.message); errs++; }
  else console.log('Translation ✓');

  // =============================================
  console.log('\n=== RÉSUMÉ V24 ===');
  console.log('Erreurs: ' + errs);
  if(errs === 0) console.log('✓ Pipeline V24 complète');
  else console.log('✗ ' + errs + ' erreur(s)');
})();
