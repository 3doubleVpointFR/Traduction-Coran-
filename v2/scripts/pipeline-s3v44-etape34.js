// Pipeline S3:V44 — Étapes 2-3-4
// Verset: ذَٰلِكَ مِنْ أَنۢبَآءِ ٱلْغَيْبِ نُوحِيهِ إِلَيْكَ ۚ وَمَا كُنتَ لَدَيْهِمْ إِذْ يُلْقُونَ أَقْلَٰمَهُمْ أَيُّهُمْ يَكْفُلُ مَرْيَمَ وَمَا كُنتَ لَدَيْهِمْ إِذْ يَخْتَصِمُونَ
// verse_id=337, VA_ID=695

const { createClient } = require('@supabase/supabase-js');
const sb = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const VERSE_ID = 337;
const VA_ID = 695;

async function main() {
  console.log('=== PIPELINE S3:V44 ===\n');

  // =====================================================
  // 1. ENRICHISSEMENT DES RACINES SUSPECTES
  // why (aid=1579): 4 sens → enrichir (+5 sens, 2 nouveaux concepts)
  // qlm (aid=1269): 3 sens → enrichir (+1 sens)
  // xsm (aid=2310): 4 sens → enrichir (+6 sens, 1 nouveau concept)
  // =====================================================

  // --- 1a. Enrichir why (و ح ي) ---
  console.log('--- 1a. Enrichir why (و ح ي) ---');
  const { data: whyExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', 1579);
  console.log('why existant: ' + whyExisting.length + ' sens');

  const whyNewSenses = [
    // Concept: Signal/Indication (nouveau)
    {
      analysis_id: 1579, sense: "faire signe", concept: "Signal/Indication",
      description: "Acte physique d'indiquer quelque chose par un geste silencieux et rapide. Le signal sort de celui qui fait signe et atteint celui qui le reçoit — c'est extérieur, directionnel et discret. C'est le sens physique premier de la racine.",
      meaning_type: 'etymology', display_order: 5
    },
    {
      analysis_id: 1579, sense: "indiquer par un geste", concept: "Signal/Indication",
      description: "Communiquer une idée par un mouvement du corps sans parole — geste de la main, clin d'œil, hochement de tête.",
      meaning_type: 'etymology', display_order: 6
    },
    // Concept: Hâte/Vitesse (nouveau)
    {
      analysis_id: 1579, sense: "rapide", concept: "Hâte/Vitesse",
      description: "Qualité de ce qui se produit vite. La vitesse est ponctuelle et intensive — elle caractérise un événement qui ne dure pas, qui passe en un instant. Le Lane's applique ce sens à la mort (mort rapide).",
      meaning_type: 'etymology', display_order: 7
    },
    {
      analysis_id: 1579, sense: "se hâter", concept: "Hâte/Vitesse",
      description: "Agir vite, se dépêcher — accélérer son action volontairement.",
      meaning_type: 'etymology', display_order: 8
    },
    {
      analysis_id: 1579, sense: "le plus bref", concept: "Hâte/Vitesse",
      description: "Superlatif de la brièveté — la durée la plus courte possible.",
      meaning_type: 'etymology', display_order: 9
    }
  ];

  const { error: whyErr } = await sb.from('word_meanings').insert(whyNewSenses);
  if (whyErr) { console.log('ERREUR why:', whyErr.message); return; }
  console.log('why insert: ' + whyNewSenses.length + ' sens OK');
  await sb.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 1579);

  // --- 1b. Enrichir qlm (ق ل م) ---
  console.log('\n--- 1b. Enrichir qlm (ق ل م) ---');
  const { data: qlmExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', 1269);
  console.log('qlm existant: ' + qlmExisting.length + ' sens');

  // Racine rare (4 occurrences coraniques). Lane's confirme peu de sens.
  // Ajout: "rogner" (attested in Lane's مُقَلَّمُ الظُّفْرِ)
  const qlmNewSenses = [
    {
      analysis_id: 1269, sense: "rogner", concept: "Sens isolé/Tailler",
      description: "Couper court ce qui dépasse — rogner les ongles, tailler les extrémités. Application spécifique de l'acte de couper à ce qui est petit et précis.",
      meaning_type: 'etymology', display_order: 4
    }
  ];

  const { error: qlmErr } = await sb.from('word_meanings').insert(qlmNewSenses);
  if (qlmErr) { console.log('ERREUR qlm:', qlmErr.message); return; }
  console.log('qlm insert: ' + qlmNewSenses.length + ' sens OK');
  await sb.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 1269);

  // --- 1c. Enrichir xsm (خ ص م) ---
  console.log('\n--- 1c. Enrichir xsm (خ ص م) ---');
  const { data: xsmExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', 2310);
  console.log('xsm existant: ' + xsmExisting.length + ' sens');

  const xsmNewSenses = [
    // Enrichir concept existant Conflit/Adversité
    {
      analysis_id: 2310, sense: "vaincre dans l'argumentation", concept: "Conflit/Adversité",
      description: "Surpasser l'autre dans le débat — remporter la dispute par la force de l'argument. Le Lane's cite khāṣamtuhu fa-khaṣamtuhu : je l'ai disputé et je l'ai vaincu.",
      meaning_type: 'etymology', display_order: 5
    },
    {
      analysis_id: 2310, sense: "dicter un argument", concept: "Conflit/Adversité",
      description: "Fournir à quelqu'un les mots de sa plaidoirie contre son adversaire (forme IV akhṣamahu).",
      meaning_type: 'etymology', display_order: 6
    },
    {
      analysis_id: 2310, sense: "véhément dans la dispute", concept: "Conflit/Adversité",
      description: "Qualité de celui qui dispute avec force et intensité — khaṣim : qui argumente avec véhémence.",
      meaning_type: 'etymology', display_order: 7
    },
    // Concept: Côté/Bord (nouveau — sens physique)
    {
      analysis_id: 2310, sense: "côté", concept: "Côté/Bord",
      description: "Partie latérale d'un objet. Le côté est une dimension spatiale — il délimite, sépare, définit une frontière. C'est physique, statique et non directionnel. Le Lane's donne khuṣm pour le côté d'un bagage, d'un lit, d'un récipient.",
      meaning_type: 'etymology', display_order: 8
    },
    {
      analysis_id: 2310, sense: "coin", concept: "Côté/Bord",
      description: "Angle formé par deux côtés — point de jonction, extrémité latérale d'un objet.",
      meaning_type: 'etymology', display_order: 9
    },
    {
      analysis_id: 2310, sense: "brèche", concept: "Côté/Bord",
      description: "Ouverture, interstice — espace entre deux bords. Le Lane's cite : « une brèche ne se referme pas sans qu'une autre s'ouvre ».",
      meaning_type: 'etymology', display_order: 10
    }
  ];

  const { error: xsmErr } = await sb.from('word_meanings').insert(xsmNewSenses);
  if (xsmErr) { console.log('ERREUR xsm:', xsmErr.message); return; }
  console.log('xsm insert: ' + xsmNewSenses.length + ' sens OK');
  await sb.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 2310);

  // =====================================================
  // 2. VÉRIFIER RICHESSE APRÈS ENRICHISSEMENT
  // =====================================================
  console.log('\n--- Richesse après enrichissement ---');
  const rootChecks = [
    { key: 'nba', aid: 418 },
    { key: 'gyb', aid: 2605 },
    { key: 'why', aid: 1579 },
    { key: 'kwn', aid: 2577 },
    { key: 'lqy', aid: 327 },
    { key: 'qlm', aid: 1269 },
    { key: 'kfl', aid: 1266 },
    { key: 'xsm', aid: 2310 }
  ];
  const conceptsMap = {};
  for (const r of rootChecks) {
    const { data: meanings } = await sb.from('word_meanings').select('sense,concept,description').eq('analysis_id', r.aid).order('display_order');
    const concepts = {};
    meanings.forEach(m => {
      if (!concepts[m.concept]) concepts[m.concept] = [];
      concepts[m.concept].push(m.sense);
    });
    conceptsMap[r.key] = concepts;
    const cNames = Object.keys(concepts);
    console.log(`${r.key} (aid=${r.aid}): ${meanings.length} sens, ${cNames.length} concepts`);
    cNames.forEach(c => {
      console.log(`  ${c}(${concepts[c].length}): ${concepts[c].join(', ')}`);
    });
  }

  // =====================================================
  // 3. CORRIGER LES SEGMENTS
  // - pos=15 (maryam): type important → particle
  // =====================================================
  console.log('\n--- 3. Fix segments ---');
  const { data: vaData } = await sb.from('verse_analyses').select('segments_step1').eq('id', VA_ID).single();
  const segs = vaData.segments_step1;

  // Fix pos=15: maryam → particle
  const seg15 = segs.find(s => s.position === 15);
  if (seg15) {
    seg15.type = 'particle';
    seg15.is_particle = true;
    console.log('pos=15: type → particle (nom propre Maryam)');
  }

  const { error: segErr } = await sb.from('verse_analyses').update({ segments_step1: segs }).eq('id', VA_ID);
  if (segErr) { console.log('ERREUR segments:', segErr.message); return; }
  console.log('Segments mis à jour');

  const important = segs.filter(s => s.type === 'important');
  const particles = segs.filter(s => s.type === 'particle');
  console.log(`Important: ${important.length} | Particle: ${particles.length} | Total: ${segs.length}`);

  // =====================================================
  // 4. VWA — 9 entries (kwn appears at pos=8 and pos=17)
  // =====================================================
  console.log('\n--- 4. VWA ---');

  await sb.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);

  const vwaEntries = [
    // pos=3: anbā'i → nba(418) — nouvelle
    {
      verse_id: VERSE_ID, word_key: 'nba', root: 'ن ب أ', position: 3,
      sense_chosen: 'nouvelle',
      analysis_axes: {
        concept_chosen: "Information/Nouvelle",
        sense_chosen: "nouvelle",
        concepts: {
          "Information/Nouvelle": {
            status: "retenu",
            senses: conceptsMap.nba["Information/Nouvelle"],
            proof_ctx: "Le nom pluriel anbā' (nouvelles) qualifie le récit de Marie comme une information importante transmise au prophète. Le complément al-ghayb (l'invisible) confirme qu'il s'agit de nouvelles sur des événements passés inaccessibles à la perception directe. Contrairement à Prophétie qui implique une prédiction future, le texte parle d'un récit du passé."
          },
          "Prophétie": {
            status: "probable",
            senses: conceptsMap.nba["Prophétie"],
            proof_ctx: "La racine n-b-' est liée à nabiy (prophète), mais ici le mot anbā' désigne les informations transmises — le contenu de la révélation, pas la fonction prophétique."
          },
          "Sens isolé/Crier": {
            status: "nul",
            senses: conceptsMap.nba["Sens isolé/Crier"],
            proof_ctx: "Hors sujet — le contexte est la transmission silencieuse d'information."
          }
        }
      }
    },
    // pos=4: al-ghaybi → gyb(2605) — l'invisible
    {
      verse_id: VERSE_ID, word_key: 'gyb', root: 'غ ي ب', position: 4,
      sense_chosen: "l'invisible",
      analysis_axes: {
        concept_chosen: "Mystère/Inconnaissable",
        sense_chosen: "l'invisible",
        concepts: {
          "Mystère/Inconnaissable": {
            status: "retenu",
            senses: conceptsMap.gyb["Mystère/Inconnaissable"],
            proof_ctx: "Le nom défini al-ghayb avec l'article al- désigne une réalité identifiée : ce qui est absent de la perception directe. Le verset dit que ce ghayb est révélé au prophète (nūḥīhi ilayka) — il est donc accessible par la révélation, ce qui exclut l'inconnaissabilité absolue. Contrairement à Absence/Invisibilité qui est physique et ponctuelle, al-ghayb ici est une catégorie permanente d'information."
          },
          "Absence/Invisibilité": {
            status: "probable",
            senses: conceptsMap.gyb["Absence/Invisibilité"],
            proof_ctx: "L'absence physique est liée — le prophète n'était pas présent lors des événements. Mais al-ghayb ici qualifie la nature de l'information, pas l'absence d'une personne."
          },
          "Dissimulation/Occultation": {
            status: "peu_probable",
            senses: conceptsMap.gyb["Dissimulation/Occultation"],
            proof_ctx: "Rien n'est activement caché dans le contexte — les événements passés ne sont pas dissimulés, ils sont simplement hors de portée de la perception."
          },
          "Médisance/Calomnie": {
            status: "nul",
            senses: conceptsMap.gyb["Médisance/Calomnie"],
            proof_ctx: "Hors sujet."
          },
          "Dépression/Creux": {
            status: "nul",
            senses: conceptsMap.gyb["Dépression/Creux"],
            proof_ctx: "Hors sujet — sens physique sans rapport avec le contexte."
          }
        }
      }
    },
    // pos=5: nūḥīhi → why(1579) — révéler
    {
      verse_id: VERSE_ID, word_key: 'why', root: 'و ح ي', position: 5,
      sense_chosen: 'révéler',
      analysis_axes: {
        concept_chosen: "Révélation/Inspiration",
        sense_chosen: "révéler",
        concepts: {
          "Révélation/Inspiration": {
            status: "retenu",
            senses: conceptsMap.why["Révélation/Inspiration"],
            proof_ctx: "La forme IV (awḥā) avec le sujet divin (Nous) et le destinataire humain (ilayka = à toi) forme la construction standard de la révélation coranique. L'inaccompli nūḥī indique que la révélation est en cours — le texte est en train d'être communiqué. Contrairement à Suggestion qui est vague et intérieure, la révélation est une transmission concrète d'information détaillée."
          },
          "Suggestion": {
            status: "probable",
            senses: conceptsMap.why["Suggestion"],
            proof_ctx: "La suggestion est une idée mise dans l'esprit, mais le contexte est plus précis — il s'agit d'un récit détaillé transmis, pas d'une simple idée."
          },
          "Signal/Indication": {
            status: "peu_probable",
            senses: conceptsMap.why["Signal/Indication"],
            proof_ctx: "Le signal est un geste physique et silencieux entre personnes — ici la communication est supra-physique, de Dieu au prophète."
          },
          "Hâte/Vitesse": {
            status: "nul",
            senses: conceptsMap.why["Hâte/Vitesse"],
            proof_ctx: "Hors sujet — le contexte est la communication, pas la vitesse."
          }
        }
      }
    },
    // pos=8: kunta → kwn(2577) — être (première occurrence)
    {
      verse_id: VERSE_ID, word_key: 'kwn', root: 'ك و ن', position: 8,
      sense_chosen: 'être (verbe incomplet)',
      analysis_axes: {
        concept_chosen: "Être/Existence",
        sense_chosen: "être (verbe incomplet)",
        concepts: {
          "Être/Existence": {
            status: "retenu",
            senses: conceptsMap.kwn["Être/Existence"],
            proof_ctx: "Le verbe kāna à l'accompli, précédé de mā (négation), forme mā kunta = tu n'étais pas. Kāna est un verbe incomplet (copule) qui situe la phrase dans le passé. La présence du prophète est niée — il n'était pas auprès d'eux lors du tirage au sort. Contrairement à Lieu/État qui décrit l'endroit, kāna ici est grammatical — il porte le temps, pas le lieu."
          },
          "Lieu/État": {
            status: "probable",
            senses: conceptsMap.kwn["Lieu/État"],
            proof_ctx: "Le lieu est impliqué par le complément ladayhim (auprès d'eux), mais c'est ladayhim qui porte le sens spatial, pas kāna."
          },
          "Humilité/Soumission": {
            status: "nul",
            senses: conceptsMap.kwn["Humilité/Soumission"],
            proof_ctx: "Hors sujet — istakāna est une forme dérivée spécifique, pas utilisée ici."
          }
        }
      }
    },
    // pos=11: yulqūna → lqy(327) — lancer
    {
      verse_id: VERSE_ID, word_key: 'lqy', root: 'ل ق ي', position: 11,
      sense_chosen: 'lancer',
      analysis_axes: {
        concept_chosen: "Jeter/Lancer",
        sense_chosen: "lancer",
        concepts: {
          "Jeter/Lancer": {
            status: "retenu",
            senses: conceptsMap.lqy["Jeter/Lancer"],
            proof_ctx: "La forme IV alqā à l'inaccompli (yulqūna) avec l'objet aqlāmahum (leurs calames) forme « ils lancent leurs calames » — le geste physique de jeter les roseaux pour le tirage au sort. L'inaccompli après idh (lorsque) exprime une action passée en cours. Contrairement à Rencontre qui est le sens de la forme I, la forme IV porte spécifiquement le sens de projeter, jeter."
          },
          "Rencontre/Face à face": {
            status: "peu_probable",
            senses: conceptsMap.lqy["Rencontre/Face à face"],
            proof_ctx: "La rencontre est le sens de la forme I (laqiya), pas de la forme IV. Le contexte (lancer des calames) confirme l'action de projection."
          },
          "Sens isolé/Inspirer": {
            status: "nul",
            senses: conceptsMap.lqy["Sens isolé/Inspirer"],
            proof_ctx: "Hors sujet."
          },
          "Réception/Accueil": {
            status: "nul",
            senses: conceptsMap.lqy["Réception/Accueil"],
            proof_ctx: "Hors sujet — le sujet lance activement, il ne reçoit pas."
          }
        }
      }
    },
    // pos=12: aqlāmahum → qlm(1269) — calame
    {
      verse_id: VERSE_ID, word_key: 'qlm', root: 'ق ل م', position: 12,
      sense_chosen: 'calame',
      analysis_axes: {
        concept_chosen: "Écriture/Instrument",
        sense_chosen: "calame",
        concepts: {
          "Écriture/Instrument": {
            status: "retenu",
            senses: conceptsMap.qlm["Écriture/Instrument"],
            proof_ctx: "Le nom pluriel aqlām (calames) avec le pronom possessif -hum (leurs) désigne les roseaux taillés que les prêtres lancent pour le tirage au sort. Le calame est un roseau physique, taillé et marqué. Ici il sert d'instrument de tirage au sort plutôt que d'écriture, mais l'objet physique est le même."
          },
          "Sens isolé/Tailler": {
            status: "nul",
            senses: conceptsMap.qlm["Sens isolé/Tailler"],
            proof_ctx: "Le contexte n'est pas l'acte de tailler mais l'objet taillé (le roseau) utilisé pour le tirage au sort."
          }
        }
      }
    },
    // pos=14: yakfulu → kfl(1266) — prendre en charge
    {
      verse_id: VERSE_ID, word_key: 'kfl', root: 'ك ف ل', position: 14,
      sense_chosen: 'prendre en charge',
      analysis_axes: {
        concept_chosen: "Tutelle/Garantie",
        sense_chosen: "prendre en charge",
        concepts: {
          "Tutelle/Garantie": {
            status: "retenu",
            senses: conceptsMap.kfl["Tutelle/Garantie"],
            proof_ctx: "L'inaccompli yakfulu avec l'objet maryama (Marie) forme « prend en charge Marie » — assumer la responsabilité totale d'une enfant. L'interrogatif ayyuhum (lequel d'entre eux) montre que la tutelle est l'enjeu du tirage au sort. La prise en charge implique le soin quotidien, l'éducation et la protection."
          },
          "Sens isolé/Part": {
            status: "nul",
            senses: conceptsMap.kfl["Sens isolé/Part"],
            proof_ctx: "Hors sujet — le contexte est la tutelle d'une personne, pas une part/portion."
          },
          "Corps/Anatomie": {
            status: "nul",
            senses: conceptsMap.kfl["Corps/Anatomie"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=17: kunta → kwn(2577) — être (deuxième occurrence)
    {
      verse_id: VERSE_ID, word_key: 'kwn', root: 'ك و ن', position: 17,
      sense_chosen: 'être (verbe incomplet)',
      analysis_axes: {
        concept_chosen: "Être/Existence",
        sense_chosen: "être (verbe incomplet)",
        concepts: {
          "Être/Existence": {
            status: "retenu",
            senses: conceptsMap.kwn["Être/Existence"],
            proof_ctx: "Même structure que la première occurrence (pos=8) : mā kunta ladayhim = tu n'étais pas auprès d'eux. La répétition insiste sur l'absence du prophète à un second moment — la dispute. Kāna situe la phrase dans le passé comme verbe incomplet."
          },
          "Lieu/État": {
            status: "probable",
            senses: conceptsMap.kwn["Lieu/État"],
            proof_ctx: "Comme à la première occurrence, le lieu est porté par ladayhim, pas par kāna."
          },
          "Humilité/Soumission": {
            status: "nul",
            senses: conceptsMap.kwn["Humilité/Soumission"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=20: yakhtaṣimūna → xsm(2310) — se disputer
    {
      verse_id: VERSE_ID, word_key: 'xsm', root: 'خ ص م', position: 20,
      sense_chosen: 'disputer',
      analysis_axes: {
        concept_chosen: "Conflit/Adversité",
        sense_chosen: "disputer",
        concepts: {
          "Conflit/Adversité": {
            status: "retenu",
            senses: conceptsMap.xsm["Conflit/Adversité"],
            proof_ctx: "La forme VIII (ikhtaṣama) à l'inaccompli (yakhtaṣimūna) indique une dispute réciproque en cours dans le passé — chacun conteste l'autre pour la tutelle de Marie. La forme VIII ajoute la mutualité : ce n'est pas un attaquant et un défenseur, mais tous se disputent les uns avec les autres. Contrairement à Côté/Bord qui est un sens physique spatial, le contexte est clairement une contestation verbale."
          },
          "Côté/Bord": {
            status: "nul",
            senses: conceptsMap.xsm["Côté/Bord"],
            proof_ctx: "Sens physique (côté d'un objet, bord d'un récipient) sans rapport avec le contexte de dispute verbale."
          }
        }
      }
    }
  ];

  const { error: vwaErr } = await sb.from('verse_word_analyses').insert(vwaEntries);
  if (vwaErr) { console.log('ERREUR VWA:', vwaErr.message); return; }
  console.log(`VWA insert: ${vwaEntries.length} entries OK`);

  // =====================================================
  // 5. TRADUCTION
  // =====================================================
  console.log('\n--- 5. Translation ---');

  const translation_arab = `Cela fait partie des nouvelles de l'invisible que Nous te révélons. Et tu n'étais pas auprès d'eux lorsqu'ils lançaient leurs calames : lequel d'entre eux prendrait en charge Marie. Et tu n'étais pas auprès d'eux lorsqu'ils se disputaient.`;

  const full_translation = `Ce sont là des nouvelles de l'Inconnaissable que Nous te révélons. Car tu n'étais pas là lorsqu'ils jetaient leurs calames pour décider qui se chargerait de Marie ! Tu n'étais pas là non plus lorsqu'ils se disputaient.`;

  const translation_explanation = `§DEMARCHE§
Ce verset s'adresse directement au prophète Muhammad, contrairement aux versets précédents (42-43) qui s'adressaient à Marie par la voix des messagers. Après avoir relaté les paroles des messagers à Marie, le texte prend une pause et s'adresse au destinataire de la révélation pour lui confirmer que ces récits lui parviennent par révélation, et non par témoignage direct. La structure se divise en trois parties : la nature de l'information (nouvelles de l'invisible), l'absence du prophète lors du tirage au sort, et son absence lors de la dispute.

**dhālika** (cela) est un pronom démonstratif qui renvoie à l'ensemble du récit de Marie qui précède. La particule **min** (de/parmi) introduit la catégorie à laquelle ce récit appartient.

**anbā'i** (nouvelles) est un nom masculin pluriel (pluriel de naba', une forme qui dit qu'il y a plusieurs informations) de la racine n-b-' au génitif, en construction d'annexion (iḍāfa, une relation d'appartenance entre deux noms) avec al-ghaybi. Le sens premier est « nouvelle importante, information de poids ». Le pluriel anbā' insiste sur la pluralité des informations contenues dans le récit de Marie. On traduit par « nouvelles ».

**al-ghaybi** (l'invisible) est un nom masculin défini (avec l'article al-) de la racine gh-y-b au génitif, deuxième terme de l'iḍāfa avec anbā'i. Le sens premier de gh-y-b est « être absent, disparaître de la vue ». Le nom al-ghayb avec l'article al- désigne une réalité connue et identifiée : ce qui est absent de la perception directe. Le verset dit que ce ghayb est révélé au prophète — il est donc accessible par la révélation tout en étant hors de portée de l'observation. On traduit par « l'invisible ».

**nūḥīhi** (que Nous révélons) est un verbe à l'inaccompli (une forme qui indique une action en cours ou habituelle) à la 1ère personne du pluriel de la racine w-ḥ-y, forme IV (une forme causative, qui dit « faire parvenir »), suivi du pronom suffixe -hi (le/cela). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme IV awḥā signifie « faire parvenir une communication, révéler ». L'inaccompli indique que cette révélation est en cours — le texte est en train d'être révélé. Le pronom -hi renvoie à dhālika (le récit de Marie). La préposition **ilā** (vers) suivie du pronom **-ka** (toi) indique le destinataire. On traduit par « que Nous te révélons ».

**kunta** (tu étais — positions 8 et 17) est un verbe à l'accompli (une forme qui indique un événement achevé dans le passé) à la 2ème personne du masculin singulier de la racine k-w-n. Le verbe kāna est un verbe incomplet en arabe — il ne donne pas un sens autonome mais situe la phrase dans le passé. Précédé de **mā** (particule de négation), **mā kunta** = « tu n'étais pas ». Cette formule est répétée deux fois dans le verset pour insister sur l'absence du prophète à deux moments distincts : le tirage au sort et la dispute. Le complément **ladayhim** (auprès d'eux) précise le lieu de l'absence, et **idh** (lorsque) introduit le moment. On traduit par « tu n'étais pas ».

**yulqūna** (ils lançaient) est un verbe à l'inaccompli à la 3ème personne du masculin pluriel de la racine l-q-y, forme IV (causative), précédé de **idh** (lorsque). D'après les sources étymologiques, la forme IV de l-q-y (alqā) signifie « jeter, lancer, projeter ». L'inaccompli après idh (lorsque) traduit une action passée en cours — l'imparfait en français. Le sujet « ils » désigne les prêtres ou savants qui participent au tirage au sort. On traduit par « ils lançaient ».

**aqlāmahum** (leurs calames) est un nom masculin pluriel (aqlām, pluriel de qalam, une forme qui dit qu'il y a plusieurs roseaux) de la racine q-l-m, suivi du pronom suffixe -hum (leurs). D'après les sources étymologiques, le qalam est un roseau taillé pour l'écriture. Ici, les calames sont utilisés comme bâtons de tirage au sort — chaque personne lance son calame marqué et le résultat détermine qui sera choisi pour la tutelle de Marie. On traduit par « leurs calames ».

**yakfulu** (prendrait en charge) est un verbe à l'inaccompli à la 3ème personne du masculin singulier de la racine k-f-l. Le sens premier est « prendre en charge, assumer la responsabilité complète de quelqu'un ». L'interrogatif **ayyuhum** (lequel d'entre eux) introduit la question qui motive le tirage au sort : qui parmi eux s'occupera de Marie. Le texte ne précise pas le cadre du tirage au sort — il rapporte simplement le geste et la question. On traduit par « prendrait en charge ».

**yakhtaṣimūna** (ils se disputaient) est un verbe à l'inaccompli à la 3ème personne du masculin pluriel de la racine kh-ṣ-m, forme VIII (une forme réciproque, qui dit « faire l'action les uns envers les autres »). D'après les sources étymologiques, la racine kh-ṣ-m porte le sens de « contester, s'opposer dans une discussion ». La forme VIII ajoute la réciprocité : chacun conteste l'autre. L'inaccompli après idh traduit une action passée en cours. On traduit par « ils se disputaient ».

§JUSTIFICATION§
**nouvelles** — Le sens retenu est « nouvelle » de la racine n-b-'. Le mot « nouvelles » est choisi car il désigne des informations importantes transmises — le récit de Marie est une nouvelle du passé communiquée au prophète. L'alternative « prophétie » est écartée car le texte parle d'événements passés, pas de prédictions futures. L'alternative « annonce » est écartée car elle implique un acte de communication formelle alors que le texte catégorise le type d'information.

**l'invisible** — Le sens retenu est « l'invisible » de la racine gh-y-b. Le mot « invisible » est choisi car il décrit ce qui est absent de la perception directe — les événements passés que le prophète n'a pas vus de ses propres yeux. L'alternative « mystère » est écartée car elle implique une impossibilité de comprendre, alors que le texte dit que cette information est révélée. L'alternative « secret » est écartée car elle implique une dissimulation volontaire.

**révélons** — Le sens retenu est « révéler » de la racine w-ḥ-y. Le mot « révélons » est choisi car la forme IV (causative) implique l'acte de faire parvenir une communication. L'alternative « inspirons » est écartée car l'inspiration est plus vague et intérieure — elle ne capture pas la transmission d'un récit détaillé. L'alternative « suggérons » est écartée car la suggestion est une idée vague mise dans l'esprit.

**étais** — Le sens retenu est « être » de la racine k-w-n. Le verbe kāna est un verbe incomplet qui situe l'action dans le passé. Le choix est direct : « tu n'étais pas » est la traduction naturelle de mā kunta.

**lançaient** — Le sens retenu est « lancer » de la racine l-q-y, forme IV. Le mot « lançaient » est choisi car la forme IV alqā signifie jeter, projeter — le geste physique de lancer les roseaux. L'alternative « jetaient » est écartée comme synonyme valide mais « lançaient » est plus précis pour un geste de tirage au sort. L'alternative « rencontraient » est écartée car c'est le sens de la forme I, pas de la forme IV.

**calames** — Le sens retenu est « calame » de la racine q-l-m. Le mot « calames » est choisi car c'est le terme français exact pour le roseau taillé (qalam). L'alternative « plumes » est écartée car elle renvoie à un instrument d'écriture européen, pas au roseau oriental. L'alternative « bâtons » est écartée car elle est trop générique — le qalam est un roseau taillé spécifique.

**prendrait en charge** — Le sens retenu est « prendre en charge » de la racine k-f-l. Le mot « prendrait en charge » est choisi car il capture la responsabilité complète de s'occuper d'un enfant — le tuteur assume tous les besoins de la personne. L'alternative « garantirait » est écartée car la garantie est un engagement juridique ou financier, pas la prise en charge quotidienne d'un enfant.

**se disputaient** — Le sens retenu est « disputer » de la racine kh-ṣ-m, forme VIII. Le mot « se disputaient » est choisi car la forme VIII (réciproque) indique une dispute mutuelle. L'alternative « plaidaient » est écartée car elle implique un cadre juridique formel alors que le texte décrit une contestation entre personnes. L'alternative « querellaient » est un synonyme acceptable mais « se disputaient » est plus courant en français quotidien.

§CRITIQUE§
**l'invisible vs l'Inconnaissable** : les traductions courantes donnent « l'Inconnaissable » ou « l'Inaccessible » pour al-ghayb. Ce choix charge le mot d'une impossibilité philosophique — ce qui ne peut pas être connu. Or le verset lui-même contredit cette lecture : il dit que ce ghayb est « nūḥīhi ilayka » (que Nous te révélons). Si al-ghayb était réellement inconnaissable, il ne pourrait pas être révélé. La racine gh-y-b porte le sens de « être absent, disparaître de la vue ». Notre traduction donne « l'invisible » car elle préserve cette nuance : c'est ce qui est absent de la perception directe, mais qui peut être rendu accessible par d'autres moyens — ici la révélation.

**ajouts invisibles** : les traductions courantes ajoutent des mots absents du texte arabe. « Car » (Hamidullah) au début de la deuxième phrase ajoute une causalité — le texte dit wa-mā (et ne...pas), simple conjonction, sans relation de cause. « Pour décider » devant « qui se chargerait de Marie » interprète la finalité du tirage au sort — le texte dit simplement ayyuhum yakfulu (lequel d'entre eux prend en charge) sans mention de décision. « Non plus » dans la dernière phrase est une addition de liaison. Ces ajouts orientent la lecture vers une interprétation causale et décisionnelle qui n'est pas dans le texte original.

Les autres mots du verset (nouvelles, révélons, calames, prendre en charge, se disputer) sont traduits de manière similaire dans les traductions courantes et ne changent pas le sens global.`;

  // Segments d'affichage
  const displaySegments = [
    { fr: "cela", pos: "", phon: "dhālika", arabic: "ذَٰلِكَ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: "fait partie des", pos: "", phon: "min", arabic: "مِنْ", word_key: null, is_particle: true, sense_retenu: null, position: 2 },
    { fr: "nouvelles", pos: "N", phon: "anbā'i", arabic: "أَنۢبَآءِ", word_key: "nba", is_particle: false, sense_retenu: "nouvelle", position: 3 },
    { fr: "de l'invisible", pos: "N", phon: "al-ghaybi", arabic: "ٱلْغَيْبِ", word_key: "gyb", is_particle: false, sense_retenu: "l'invisible", position: 4 },
    { fr: "que Nous révélons", pos: "V", phon: "nūḥīhi", arabic: "نُوحِيهِ", word_key: "why", is_particle: false, sense_retenu: "révéler", position: 5 },
    { fr: "à toi", pos: "", phon: "ilayka", arabic: "إِلَيْكَ", word_key: null, is_particle: true, sense_retenu: null, position: 6 },
    { fr: "et ne...pas", pos: "", phon: "wa-mā", arabic: "وَمَا", word_key: null, is_particle: true, sense_retenu: null, position: 7 },
    { fr: "tu étais", pos: "V", phon: "kunta", arabic: "كُنتَ", word_key: "kwn", is_particle: false, sense_retenu: "être (verbe incomplet)", position: 8 },
    { fr: "auprès d'eux", pos: "", phon: "ladayhim", arabic: "لَدَيْهِمْ", word_key: null, is_particle: true, sense_retenu: null, position: 9 },
    { fr: "lorsqu'", pos: "", phon: "idh", arabic: "إِذْ", word_key: null, is_particle: true, sense_retenu: null, position: 10 },
    { fr: "ils lançaient", pos: "V", phon: "yulqūna", arabic: "يُلْقُونَ", word_key: "lqy", is_particle: false, sense_retenu: "lancer", position: 11 },
    { fr: "leurs calames", pos: "N", phon: "aqlāmahum", arabic: "أَقْلَٰمَهُمْ", word_key: "qlm", is_particle: false, sense_retenu: "calame", position: 12 },
    { fr: "lequel d'entre eux", pos: "", phon: "ayyuhum", arabic: "أَيُّهُمْ", word_key: null, is_particle: true, sense_retenu: null, position: 13 },
    { fr: "prendrait en charge", pos: "V", phon: "yakfulu", arabic: "يَكْفُلُ", word_key: "kfl", is_particle: false, sense_retenu: "prendre en charge", position: 14 },
    { fr: "Marie", pos: "", phon: "maryama", arabic: "مَرْيَمَ", word_key: null, is_particle: true, sense_retenu: null, position: 15 },
    { fr: "et ne...pas", pos: "", phon: "wa-mā", arabic: "وَمَا", word_key: null, is_particle: true, sense_retenu: null, position: 16 },
    { fr: "tu étais", pos: "V", phon: "kunta", arabic: "كُنتَ", word_key: "kwn", is_particle: false, sense_retenu: "être (verbe incomplet)", position: 17 },
    { fr: "auprès d'eux", pos: "", phon: "ladayhim", arabic: "لَدَيْهِمْ", word_key: null, is_particle: true, sense_retenu: null, position: 18 },
    { fr: "lorsqu'", pos: "", phon: "idh", arabic: "إِذْ", word_key: null, is_particle: true, sense_retenu: null, position: 19 },
    { fr: "ils se disputaient", pos: "V", phon: "yakhtaṣimūna", arabic: "يَخْتَصِمُونَ", word_key: "xsm", is_particle: false, sense_retenu: "disputer", position: 20 }
  ];

  const { error: transErr } = await sb.from('verse_analyses').update({
    translation_arab,
    full_translation,
    translation_explanation,
    segments: displaySegments
  }).eq('id', VA_ID);

  if (transErr) { console.log('ERREUR translation:', transErr.message); return; }
  console.log('Translation save: OK');

  // =====================================================
  // 6. DAILY PHRASES
  // qlm (aid=1269): 0 phrases → INSERT 3
  // xsm (aid=2310): 0 phrases → INSERT 3
  // Autres: déjà 3 → SKIP
  // =====================================================
  console.log('\n--- 6. Daily phrases ---');

  const dailyChecks = [
    { key: 'nba', aid: 418 },
    { key: 'gyb', aid: 2605 },
    { key: 'why', aid: 1579 },
    { key: 'kwn', aid: 2577 },
    { key: 'lqy', aid: 327 },
    { key: 'qlm', aid: 1269 },
    { key: 'kfl', aid: 1266 },
    { key: 'xsm', aid: 2310 }
  ];

  for (const r of dailyChecks) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    if (count > 0) {
      console.log(`${r.key} (aid=${r.aid}): ${count} phrases → SKIP`);
    } else {
      console.log(`${r.key} (aid=${r.aid}): 0 phrases → INSERT`);
    }
  }

  // Insert daily phrases for qlm
  const qlmDailyPhrases = [
    {
      analysis_id: 1269,
      sense: "calame",
      arabic: "قلم",
      phon: "qalam",
      french: "Prends un calame et note ce qu'il a dit."
    },
    {
      analysis_id: 1269,
      sense: "calame",
      arabic: "أقلام",
      phon: "aqlām",
      french: "Les calames sont posés sur la table du calligraphe."
    },
    {
      analysis_id: 1269,
      sense: "calame",
      arabic: "قلمه",
      phon: "qalamuhu",
      french: "Son calame est taillé finement pour l'écriture."
    }
  ];

  const { error: qlmDailyErr } = await sb.from('word_daily').insert(qlmDailyPhrases);
  if (qlmDailyErr) { console.log('ERREUR daily qlm:', qlmDailyErr.message); return; }
  console.log('Daily insert: 3 phrases OK (qlm)');

  // Insert daily phrases for xsm
  const xsmDailyPhrases = [
    {
      analysis_id: 2310,
      sense: "disputer",
      arabic: "خاصم",
      phon: "khāṣama",
      french: "Il a disputé avec son voisin à propos de la clôture."
    },
    {
      analysis_id: 2310,
      sense: "disputer",
      arabic: "يختصمون",
      phon: "yakhtaṣimūna",
      french: "Les enfants se disputent pour savoir qui passe en premier."
    },
    {
      analysis_id: 2310,
      sense: "adversaire",
      arabic: "خصم",
      phon: "khaṣm",
      french: "Mon adversaire au tribunal a présenté ses arguments."
    }
  ];

  const { error: xsmDailyErr } = await sb.from('word_daily').insert(xsmDailyPhrases);
  if (xsmDailyErr) { console.log('ERREUR daily xsm:', xsmDailyErr.message); return; }
  console.log('Daily insert: 3 phrases OK (xsm)');

  // =====================================================
  // 7. VÉRIFICATION FINALE
  // =====================================================
  console.log('\n--- 7. Vérification finale ---');

  const { data: finalVA } = await sb.from('verse_analyses').select('segments,translation_arab,full_translation,translation_explanation').eq('id', VA_ID).single();
  const impSegs = finalVA.segments.filter(s => !s.is_particle);
  const partSegs = finalVA.segments.filter(s => s.is_particle);
  console.log(`Segments: ${impSegs.length} important, ${partSegs.length} particle, ${finalVA.segments.length} total`);

  const { data: finalVWA } = await sb.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log(`VWA: ${finalVWA.length} entries`);
  finalVWA.forEach(w => console.log(`  pos=${w.position} ${w.word_key} → ${w.sense_chosen}`));

  const vwaPositions = finalVWA.map(w => w.position).sort((a, b) => a - b);
  const segPositions = impSegs.map(s => s.position).sort((a, b) => a - b);
  console.log(`Positions match: ${JSON.stringify(vwaPositions) === JSON.stringify(segPositions) ? 'OK' : 'MISMATCH!'}`);
  if (JSON.stringify(vwaPositions) !== JSON.stringify(segPositions)) {
    console.log('  VWA positions:', vwaPositions);
    console.log('  Seg positions:', segPositions);
  }

  console.log(`full_translation: ${finalVA.full_translation ? 'OK' : 'MISSING!'}`);
  console.log(`translation: ${finalVA.translation_arab ? 'OK' : 'MISSING!'}`);
  console.log(`explanation: ${finalVA.translation_explanation ? 'OK (' + finalVA.translation_explanation.length + ' chars)' : 'MISSING!'}`);

  // Verify sense_retenu matches word_meanings
  const aidMap = { nba: 418, gyb: 2605, why: 1579, kwn: 2577, lqy: 327, qlm: 1269, kfl: 1266, xsm: 2310 };
  for (const seg of impSegs) {
    const aid = aidMap[seg.word_key];
    if (aid) {
      const { data: meanings } = await sb.from('word_meanings').select('sense').eq('analysis_id', aid);
      const senses = meanings.map(m => m.sense);
      const match = senses.includes(seg.sense_retenu);
      if (!match) console.log(`  ⚠️ pos=${seg.position} sense_retenu="${seg.sense_retenu}" NOT in word_meanings!`);
    }
  }
  console.log('Sense_retenu verification: done');

  // Check for forbidden words
  const hasConceptWord = finalVA.translation_explanation.match(/\bconcept\b/gi);
  const hasPipelineWord = finalVA.translation_explanation.match(/\bpipeline\b/gi);
  if (hasConceptWord) console.log('⚠️ Mot "concept" trouvé dans translation_explanation!');
  if (hasPipelineWord) console.log('⚠️ Mot "pipeline" trouvé dans translation_explanation!');
  if (!hasConceptWord && !hasPipelineWord) console.log('Mots interdits: aucun trouvé ✅');

  console.log('\n=== PIPELINE S3:V44 TERMINÉE ===');
  console.log(`\nVERSET 3:44 — TERMINÉ`);
  finalVWA.forEach(w => console.log(`  ${w.word_key} → sens "${w.sense_chosen}"`));
  console.log(`Traduction : "${finalVA.translation_arab}"`);
}

main().catch(e => console.error(e));
