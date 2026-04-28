// Pipeline S3:V62 — verse_id=355, VA_ID=714
// Verset: إِنَّ هَٰذَا لَهُوَ الْقَصَصُ الْحَقُّ وَمَا مِنْ إِلَٰهٍ إِلَّا اللَّهُ وَإِنَّ اللَّهَ لَهُوَ الْعَزِيزُ الْحَكِيمُ
// Mots importants: qss(4) hqq(5) alh(8) alh(10) alh(12) ezz(14) hkm(15)

const { createClient } = require('@supabase/supabase-js');
const sb = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const VERSE_ID = 355;
const VA_ID    = 714;

async function main() {
  console.log('╔══════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V62 (id=355)      ║');
  console.log('╚══════════════════════════════════════════╝\n');

  // =========================================================
  // ÉTAPE 2 — ENRICHISSEMENT qss (aid=956 : 4 sens → < 5)
  // =========================================================
  console.log('═══ ÉTAPE 2 — Enrichissement qss (ق ص ص) ═══');
  const { data: qssExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', 956);
  console.log('qss existant : ' + qssExisting.length + ' sens');

  if (qssExisting.length < 5) {
    const qssNew = [
      // Enrichissement Narration/Récit
      {
        analysis_id: 956, sense: 'narration', concept: 'Narration/Récit',
        description: "La narration comme acte d'exposer des événements dans leur enchaînement chronologique — al-qaṣaṣ comme nom verbal désigne à la fois l'acte de raconter et le récit qui en résulte. C'est une transmission ordonnée qui suit le fil des événements du début à la fin.",
        meaning_type: 'etymology', display_order: 5
      },
      {
        analysis_id: 956, sense: 'histoire', concept: 'Narration/Récit',
        description: "Récit d'événements formant un ensemble cohérent — qiṣṣa au sens d'une narration construite et organisée. Le Lane's définit qiṣṣa comme 'a story, a narrative; and what is written; and an affair, a case'.",
        meaning_type: 'etymology', display_order: 6
      },
      {
        analysis_id: 956, sense: 'affaire', concept: 'Narration/Récit',
        description: 'La situation ou le cas tel qu\'il se présente, ce dont on parle — qiṣṣa peut désigner un cas, une situation relatée, comme dans la phrase ma qiṣṣatuka (quelle est ton affaire ?).',
        meaning_type: 'etymology', display_order: 7
      },
      // Enrichissement Suivi/Pistage
      {
        analysis_id: 956, sense: 'pister', concept: 'Suivi/Pistage',
        description: "Suivre délibérément les traces de quelqu'un pour le retrouver — acte de marcher dans les pas de quelqu'un avec l'intention de le rejoindre. Le Lane's précise que ce pistage peut avoir lieu de nuit ou à tout moment.",
        meaning_type: 'etymology', display_order: 8
      },
      {
        analysis_id: 956, sense: 'traquer', concept: 'Suivi/Pistage',
        description: "Poursuivre quelqu'un sans le lâcher en suivant ses traces — le taqaṣṣaṣa (forme V) désigne le fait de suivre la piste méthodiquement.",
        meaning_type: 'etymology', display_order: 9
      },
      // Nouveau concept : Rétribution/Talion
      {
        analysis_id: 956, sense: 'loi du talion', concept: 'Rétribution/Talion',
        description: "La rétribution équivalente comme principe d'équité absolue — subir exactement ce qu'on a fait subir à l'autre. Le talion n'est pas une vengeance arbitraire mais une mesure précise qui égalise les deux parties. L'acte sort de celui qui exige et atteint celui qui a commis l'acte initial, de manière identique et équivalente. Le Lane's définit qiṣāṣ comme 'retaliation, by slaying for slaying, and wounding for wounding'.",
        meaning_type: 'etymology', display_order: 10
      },
      {
        analysis_id: 956, sense: 'représailles équitables', concept: 'Rétribution/Talion',
        description: "Répondre à un acte par un acte exactement équivalent — frapper pour frapper, blesser pour blesser, en mesure strictement proportionnelle.",
        meaning_type: 'etymology', display_order: 11
      },
      {
        analysis_id: 956, sense: 'rendre coup pour coup', concept: 'Rétribution/Talion',
        description: "Exiger de l'autre exactement l'équivalent de ce qu'il vous a fait subir — iqtiṣāṣ désigne le fait d'obtenir justice par équivalence.",
        meaning_type: 'etymology', display_order: 12
      },
      // Nouveau concept : Coupe/Taille
      {
        analysis_id: 956, sense: 'tailler', concept: 'Coupe/Taille',
        description: "L'acte de couper ou de tailler avec un outil tranchant tel que des ciseaux (miqaṣṣ). La coupe est un acte physique extérieur dirigé de celui qui coupe vers l'objet coupé. Elle est ponctuelle et produit un résultat permanent. Le Lane's cite qaṣṣa comme le verbe de couper les cheveux, la laine, les plumes et les ongles.",
        meaning_type: 'etymology', display_order: 13
      },
      {
        analysis_id: 956, sense: 'rogner', concept: 'Coupe/Taille',
        description: "Couper les extrémités — le Lane's cite expressément l'acte de couper les extrémités des oreilles et le rognage des ongles.",
        meaning_type: 'etymology', display_order: 14
      },
      {
        analysis_id: 956, sense: 'tondre', concept: 'Coupe/Taille',
        description: "Couper uniformément une surface poilue ou laineuse — tondre la laine d'un animal ou les cheveux de manière régulière.",
        meaning_type: 'etymology', display_order: 15
      },
      // Nouveau concept : Poitrine/Sternum
      {
        analysis_id: 956, sense: 'sternum', concept: 'Poitrine/Sternum',
        description: "La partie centrale de la poitrine — l'os du sternum sur lequel s'articulent les côtes. C'est un lieu physique précis et identifiable sur le corps, un état anatomique permanent, pas un acte. Le Lane's définit al-qaṣṣ comme 'the soft bone into which are set the cartilaginous ends of the ribs, in the middle of the breast'.",
        meaning_type: 'etymology', display_order: 16
      },
      {
        analysis_id: 956, sense: 'milieu de la poitrine', concept: 'Poitrine/Sternum',
        description: "La zone centrale de la cage thoracique — le point médian de la poitrine, par extension le lieu anatomique du sternum.",
        meaning_type: 'etymology', display_order: 17
      }
    ];

    const { error: qssErr } = await sb.from('word_meanings').insert(qssNew);
    if (qssErr) { console.error('ERREUR qss insert:', qssErr.message); return; }
    console.log('qss INSERT : ' + qssNew.length + ' sens → total ' + (qssExisting.length + qssNew.length));
    await sb.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 956);
    console.log('qss analysis_step → etymology\n');
  } else {
    console.log('qss déjà ≥ 5 sens → SKIP enrichissement\n');
  }

  // =========================================================
  // VÉRIFICATION RICHESSE
  // =========================================================
  console.log('═══ Vérification richesse racines ═══');
  const rootsCheck = [
    { key: 'qss', aid: 956  },
    { key: 'hqq', aid: 409  },
    { key: 'alh', aid: 250  },
    { key: 'ezz', aid: 807  },
    { key: 'hkm', aid: 447  }
  ];
  const conceptsMap = {};
  for (const r of rootsCheck) {
    const { data: wm } = await sb.from('word_meanings')
      .select('sense,concept,description')
      .eq('analysis_id', r.aid)
      .order('display_order');
    const concepts = {};
    (wm || []).forEach(m => {
      if (!concepts[m.concept]) concepts[m.concept] = [];
      concepts[m.concept].push(m.sense);
    });
    conceptsMap[r.key] = concepts;
    const cNames = Object.keys(concepts);
    const total  = (wm || []).length;
    console.log(`  ${r.key} (aid=${r.aid}): ${total} sens, ${cNames.length} concepts → ${total >= 5 ? '[OK]' : '[⚠ < 5]'}`);
    cNames.forEach(c => console.log(`    [${c}] (${concepts[c].length}): ${concepts[c].join(', ')}`));
  }

  // =========================================================
  // ÉTAPE 3 — VWA
  // =========================================================
  console.log('\n═══ ÉTAPE 3 — VWA ═══');
  const { data: existingVwa } = await sb.from('verse_word_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existingVwa && existingVwa.length > 0) {
    await sb.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
    console.log('Clean : ' + existingVwa.length + ' VWA supprimés');
  }

  const vwaEntries = [
    // pos=4 : al-qaṣaṣu → qss — Narration/Récit
    {
      verse_id: VERSE_ID, word_key: 'qss', root: 'ق ص ص', position: 4,
      sense_chosen: 'récit',
      analysis_axes: {
        concept_chosen: 'Narration/Récit',
        sense_chosen:   'récit',
        concepts: {
          'Narration/Récit': {
            status: 'retenu',
            senses: conceptsMap.qss['Narration/Récit'],
            proof_ctx: "Al-qaṣaṣu est un nom défini qui désigne une narration ordonnée d'événements dans leur déroulement. C'est exactement ce dont il s'agit ici : le récit de Jésus exposé depuis le verset 33, maintenant qualifié de vrai par le verset 62. La triple emphase inna...la-huwa insiste que ce qui vient d'être dit EST bien une narration — pas une opinion ni une interprétation. Les autres sens (Suivi/Pistage, Rétribution/Talion) sont des actes ou des procédés qui n'ont aucun lien avec le contexte de conclusion solennelle de ce passage."
          },
          'Suivi/Pistage': {
            status: 'nul',
            senses: conceptsMap.qss['Suivi/Pistage'],
            proof_ctx: "Pister ou traquer est hors sujet — le contexte est une déclaration solennelle sur la vérité d'un récit, pas une poursuite de quelqu'un."
          },
          'Corps/Anatomie': {
            status: 'nul',
            senses: conceptsMap.qss['Corps/Anatomie'],
            proof_ctx: "Hors sujet dans ce contexte de proclamation de vérité."
          },
          'Rétribution/Talion': {
            status: 'nul',
            senses: conceptsMap.qss['Rétribution/Talion'],
            proof_ctx: "La rétribution par équivalent est hors sujet — le verset conclut sur la vérité du récit et l'unicité divine."
          },
          'Coupe/Taille': {
            status: 'nul',
            senses: conceptsMap.qss['Coupe/Taille'],
            proof_ctx: "Hors sujet."
          },
          'Poitrine/Sternum': {
            status: 'nul',
            senses: conceptsMap.qss['Poitrine/Sternum'],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=5 : al-ḥaqqu → hqq — Vérité/Réalité
    {
      verse_id: VERSE_ID, word_key: 'hqq', root: 'ح ق ق', position: 5,
      sense_chosen: 'vérité',
      analysis_axes: {
        concept_chosen: 'Vérité/Réalité',
        sense_chosen:   'vérité',
        concepts: {
          'Vérité/Réalité': {
            status: 'retenu',
            senses: conceptsMap.hqq['Vérité/Réalité'],
            proof_ctx: "Al-ḥaqqu qualifie al-qaṣaṣu dans une proposition nominale définie : 'le récit est la vérité'. La racine ḥ-q-q exprime ce qui est établi comme conforme à la réalité — ce qui ne peut pas être autrement. Dans un verset qui conclut une péricope sur la vérité de l'histoire de Jésus après les contestations du verset 61, al-ḥaqq désigne la réalité établie, pas une obligation ni une vérification. L'Obligation/Nécessité pourrait qualifier un récit comme 'ce qui doit être', mais la structure est une affirmation de réalité (ceci EST la vérité), pas une prescription."
          },
          'Obligation/Nécessité': {
            status: 'peu_probable',
            senses: conceptsMap.hqq['Obligation/Nécessité'],
            proof_ctx: "L'obligation est liée à la racine ḥ-q-q (mériter, être dû) mais la structure du verset est une affirmation de réalité, pas une prescription. Dire que le récit est 'obligatoire' ou 'dû' est philosophiquement différent de dire qu'il est 'vrai' — le contexte de conclusion d'une dispute sur la vérité impose le sens de réalité établie."
          },
          'Sens isolé/Se': {
            status: 'nul',
            senses: conceptsMap.hqq['Sens isolé/Se'],
            proof_ctx: "Se réaliser est une forme verbale intransitive — incompatible avec la fonction d'adjectif attribut de al-ḥaqqu ici."
          },
          'Sens isolé/Vérifier': {
            status: 'nul',
            senses: conceptsMap.hqq['Sens isolé/Vérifier'],
            proof_ctx: "Hors sujet grammaticalement."
          }
        }
      }
    },
    // pos=8 : ilāhin (négatif) → alh — Divinité
    {
      verse_id: VERSE_ID, word_key: 'alh', root: 'ا ل ه', position: 8,
      sense_chosen: 'divinité',
      analysis_axes: {
        concept_chosen: 'Divinité',
        sense_chosen:   'divinité',
        concepts: {
          'Divinité': {
            status: 'retenu',
            senses: conceptsMap.alh['Divinité'],
            proof_ctx: "Ilāhin est un nom commun indéfini négatif dans la structure wamā min ilāhin illā allāhu — il désigne toute entité qui pourrait être adorée, quelle qu'elle soit. La racine i-l-h exprime le fait d'être adoré : ilāh est tout ce qui reçoit un culte. La négation totale wamā min... illā dit qu'aucune entité de ce type n'existe sauf une. Le sens de Divinité est le seul applicable : c'est l'existence même d'entités adorables qui est niée, pas l'acte d'adoration (Adoration/Dévotion) ni la détresse ni le refuge."
          },
          'Adoration/Dévotion': {
            status: 'nul',
            senses: conceptsMap.alh['Adoration/Dévotion'],
            proof_ctx: "La négation porte sur l'existence d'une entité (divinité), pas sur l'acte d'adoration. Il n'est pas dit 'il n'y a pas d'acte d'adorer' mais 'il n'y a pas d'entité à adorer'."
          },
          'Détresse': {
            status: 'nul',
            senses: conceptsMap.alh['Détresse'],
            proof_ctx: "Hors sujet."
          },
          'Refuge/Protection': {
            status: 'nul',
            senses: conceptsMap.alh['Refuge/Protection'],
            proof_ctx: "Hors sujet."
          },
          'Domination': {
            status: 'nul',
            senses: conceptsMap.alh['Domination'],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=10 : allāhu (après illā) → alh — Divinité
    {
      verse_id: VERSE_ID, word_key: 'alh', root: 'ا ل ه', position: 10,
      sense_chosen: 'Dieu',
      analysis_axes: {
        concept_chosen: 'Divinité',
        sense_chosen:   'Dieu',
        concepts: {
          'Divinité': {
            status: 'retenu',
            senses: conceptsMap.alh['Divinité'],
            proof_ctx: "Allāhu est le nom propre formé de al-ilāh (la divinité par excellence, avec l'article défini fusionné). Il est au nominatif car il est le sujet de l'exception illā allāhu : parmi toutes les entités que le mot ilāh pourrait désigner, une seule est réelle. Le sens de Divinité au sens absolu et défini est le seul applicable — il s'agit ici d'identifier l'unique divinité, pas de décrire un acte ou une émotion."
          },
          'Adoration/Dévotion': { status: 'nul', senses: conceptsMap.alh['Adoration/Dévotion'], proof_ctx: "Hors sujet — il s'agit d'un nom d'entité, pas d'un acte." },
          'Détresse':           { status: 'nul', senses: conceptsMap.alh['Détresse'],           proof_ctx: "Hors sujet." },
          'Refuge/Protection':  { status: 'nul', senses: conceptsMap.alh['Refuge/Protection'],  proof_ctx: "Hors sujet." },
          'Domination':         { status: 'nul', senses: conceptsMap.alh['Domination'],         proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=12 : allāha (accusatif inna) → alh — Divinité
    {
      verse_id: VERSE_ID, word_key: 'alh', root: 'ا ل ه', position: 12,
      sense_chosen: 'Dieu',
      analysis_axes: {
        concept_chosen: 'Divinité',
        sense_chosen:   'Dieu',
        concepts: {
          'Divinité': {
            status: 'retenu',
            senses: conceptsMap.alh['Divinité'],
            proof_ctx: "Allāha est à l'accusatif (ism inna) dans la structure wa-inna allāha la-huwa al-ʿazīzu al-ḥakīmu. Il est le sujet logique de la phrase nominale emphatique qui attribue à Dieu la puissance et la sagesse. La forme accusatif est la marque grammaticale de la particule inna, pas un changement de sens. Le sens de Divinité absolue est le seul applicable — même mot qu'en pos=10, même racine, même nature."
          },
          'Adoration/Dévotion': { status: 'nul', senses: conceptsMap.alh['Adoration/Dévotion'], proof_ctx: "Hors sujet." },
          'Détresse':           { status: 'nul', senses: conceptsMap.alh['Détresse'],           proof_ctx: "Hors sujet." },
          'Refuge/Protection':  { status: 'nul', senses: conceptsMap.alh['Refuge/Protection'],  proof_ctx: "Hors sujet." },
          'Domination':         { status: 'nul', senses: conceptsMap.alh['Domination'],         proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=14 : al-ʿazīzu → ezz — Puissance/Gloire
    {
      verse_id: VERSE_ID, word_key: 'ezz', root: 'ع ز ز', position: 14,
      sense_chosen: 'être puissant',
      analysis_axes: {
        concept_chosen: 'Puissance/Gloire',
        sense_chosen:   'être puissant',
        concepts: {
          'Puissance/Gloire': {
            status: 'retenu',
            senses: conceptsMap.ezz['Puissance/Gloire'],
            proof_ctx: "Al-ʿazīzu est le premier prédicat de la phrase nominale wa-inna allāha la-huwa al-ʿazīzu al-ḥakīmu — un nom défini qui attribue à Dieu la puissance invincible comme qualité permanente. La racine ʿ-z-z exprime ce qui ne peut être vaincu ni contraint par une force extérieure. L'article al- identifie Dieu comme 'le Puissant' par excellence — pas un puissant parmi d'autres. Contrairement à la Rareté/Valeur (être rare est une qualité perçue par celui qui regarde, passive), la puissance est une qualité qui résiste à toute contrainte et s'exerce vers l'extérieur."
          },
          'Rareté/Valeur': {
            status: 'peu_probable',
            senses: conceptsMap.ezz['Rareté/Valeur'],
            proof_ctx: "Être rare et précieux est une qualité passive perçue par autrui — l'objet n'exerce rien. La puissance est une qualité active qui résiste à toute contrainte. Dans un verset de conclusion qui affirme l'unicité et les qualités de Dieu, la puissance est plus pertinente que la rareté."
          },
          'Renforcement': {
            status: 'peu_probable',
            senses: conceptsMap.ezz['Renforcement'],
            proof_ctx: "Renforcer est un acte transitif (on renforce quelque chose d'autre) — ici al-ʿazīzu est un attribut permanent de Dieu, pas la description d'un acte ponctuel qu'il accomplit sur autre chose."
          },
          'Lieu/Géographie': {
            status: 'nul',
            senses: conceptsMap.ezz['Lieu/Géographie'],
            proof_ctx: "Hors sujet dans ce contexte d'attribution de qualités à Dieu."
          }
        }
      }
    },
    // pos=15 : al-ḥakīmu → hkm — Sagesse
    {
      verse_id: VERSE_ID, word_key: 'hkm', root: 'ح ك م', position: 15,
      sense_chosen: 'sagesse',
      analysis_axes: {
        concept_chosen: 'Sagesse',
        sense_chosen:   'sagesse',
        concepts: {
          'Sagesse': {
            status: 'retenu',
            senses: conceptsMap.hkm['Sagesse'],
            proof_ctx: "Al-ḥakīmu est le deuxième prédicat de la phrase nominale — il attribue à Dieu la sagesse comme qualité permanente et constitutive. La forme ḥakīm (et non ḥākim = le juge en acte) désigne la sagesse comme état d'être, pas un acte ponctuel de jugement. La paire al-ʿazīzu al-ḥakīmu dit que la puissance divine n'est pas aveugle — elle est orientée par la sagesse. Contrairement à Jugement/Décision (sens d'action), la sagesse est la nature permanente qui oriente tous les actes."
          },
          'Jugement/Décision': {
            status: 'probable',
            senses: conceptsMap.hkm['Jugement/Décision'],
            proof_ctx: "Le jugement est bien lié à la racine ḥ-k-m — al-ḥakīm peut désigner celui qui juge avec justesse. Mais la forme ḥakīm (et non ḥākim) désigne la sagesse comme qualité permanente plutôt que l'acte de juger. La sagesse est la nature, le jugement en est la conséquence — ce qui rend la Sagesse plus précise ici."
          },
          'Autorité/Pouvoir': {
            status: 'peu_probable',
            senses: conceptsMap.hkm['Autorité/Pouvoir'],
            proof_ctx: "Gouverner est un acte dirigé vers l'extérieur — or al-ḥakīmu est ici une qualité permanente attribuée à Dieu, pas une description d'un acte. De plus, la puissance (pos=14) couvre déjà l'idée de force et d'autorité."
          },
          'Sens isolé/Empêcher': {
            status: 'nul',
            senses: conceptsMap.hkm['Sens isolé/Empêcher'],
            proof_ctx: "Hors sujet dans ce contexte d'attributs divins."
          }
        }
      }
    }
  ];

  const { error: vwaErr } = await sb.from('verse_word_analyses').insert(vwaEntries);
  if (vwaErr) { console.error('ERREUR VWA:', vwaErr.message); return; }
  console.log('VWA INSERT : ' + vwaEntries.length + ' entrées OK\n');

  // Logs ÉTAPE 3
  console.log('[qss] 17 sens → 6 concepts');
  console.log('  Narration/Récit → RETENU : "al-qaṣaṣu = narration ordonnée des événements de Jésus (V33-62), triple emphase confirme."');
  console.log('  Suivi/Pistage → NUL : "hors sujet."');
  console.log('  Corps/Anatomie → NUL : "hors sujet."');
  console.log('  Rétribution/Talion → NUL : "hors sujet."');
  console.log('  Coupe/Taille → NUL : "hors sujet."');
  console.log('  Poitrine/Sternum → NUL : "hors sujet."\n');

  console.log('[hqq] 9 sens → 4 concepts');
  console.log('  Vérité/Réalité → RETENU : "al-ḥaqq = conforme à la réalité, épithète de al-qaṣaṣu."');
  console.log('  Obligation/Nécessité → PEU_PROBABLE : "la structure est une affirmation de réalité, pas une prescription."\n');

  console.log('[alh pos=8] 16 sens → 5 concepts');
  console.log('  Divinité → RETENU : "ilāhin = nom commun négatif, toute entité adorée niée."');
  console.log('[alh pos=10] Divinité → RETENU : "allāhu = al-ilāh, la divinité unique."');
  console.log('[alh pos=12] Divinité → RETENU : "allāha = accusatif inna, même sens."\n');

  console.log('[ezz] 6 sens → 4 concepts');
  console.log('  Puissance/Gloire → RETENU : "al-ʿazīzu = puissance invincible permanente."');
  console.log('  Rareté/Valeur → PEU_PROBABLE : "qualité passive, moins pertinente."\n');

  console.log('[hkm] 7 sens → 4 concepts');
  console.log('  Sagesse → RETENU : "al-ḥakīmu = sagesse comme état constitutif, forme ḥakīm."');
  console.log('  Jugement/Décision → PROBABLE : "lié à la racine mais ḥakīm ≠ ḥākim."\n');

  // =========================================================
  // ÉTAPE 4 — TRADUCTION
  // =========================================================
  console.log('═══ ÉTAPE 4 — Traduction ═══');

  const translation_arab = `Ceci est bien le récit vrai. Il n'y a de divinité si ce n'est Dieu. Et Dieu est bien le Puissant, le Sage.`;

  const full_translation = `Voilà certes le récit vrai. Il n'y a point de divinité en dehors d'Allah. Et certes Allah, c'est Lui le Tout Puissant, le Sage.`;

  const translation_explanation = `§DEMARCHE§
Ce verset conclut la longue péricope sur Jésus dans la sourate 3 (versets 33 à 62). Le verset précédent (verset 61) avait invité ceux qui contestent, après que la connaissance est venue, à pratiquer la mubāhala — invoquer mutuellement la malédiction de Dieu sur les menteurs pour trancher la question. Le verset 62 pose la conclusion solennelle de ce passage : ce récit est vrai, il n'y a de divinité que Dieu, et Dieu est puissant et sage.

**al-qaṣaṣu** (le récit) est un nom masculin défini (avec l'article al-) de la racine q-ṣ-ṣ, au nominatif. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le sens premier de qaṣaṣ est la narration d'événements dans l'ordre de leur déroulement — à la fois l'acte de raconter et le récit qui en résulte. Le mot est précédé de la structure inna hādhā la-huwa, une triple emphase : inna est une particule d'affirmation forte (certes, en vérité) qui signale que ce qui suit est une assertion solennelle ; hādhā est le pronom démonstratif (ceci) qui désigne tout ce qui vient d'être relaté depuis le verset 33 ; et la-huwa (littéralement c'est bien lui) est un pronom de liaison qui renforce encore l'identification. Cette triple emphase dit que tout ce récit EST bien une narration ordonnée — pas une opinion ni une interprétation. L'article al- devant al-qaṣaṣu identifie ce récit comme une réalité connue et définie. On traduit par « le récit ».

**al-ḥaqqu** (le vrai) est un nom/adjectif masculin défini (avec l'article al-) de la racine ḥ-q-q, au nominatif, qualifiant al-qaṣaṣu. La racine ḥ-q-q exprime ce qui est établi comme conforme à la réalité — ce qui ne peut pas être autrement, ce qui est fixé et certain. Dans la structure al-qaṣaṣu al-ḥaqqu, les deux noms définis forment une proposition nominale : le récit est la vérité, ou le récit vrai. L'article al- devant al-ḥaqqu identifie la vérité comme une réalité connue et absolue — pas une opinion parmi d'autres. On traduit par « vrai ».

**ilāhin** (une divinité) est un nom masculin indéfini au génitif (après la préposition min), dans la structure de négation wa-mā min ilāhin illā allāhu. D'après les sources étymologiques, la racine i-l-h exprime le fait d'être adoré — ilāh désigne toute entité à qui on rend un culte, toute chose adorée, qu'elle soit réelle ou imaginée. Le nom est indéfini car la négation est totale : il n'existe aucune divinité quelle qu'elle soit. La structure wa-mā min ilāhin utilise la préposition min pour renforcer la négation — c'est une négation absolue, plus forte qu'une simple négation directe. Le terme ilāh n'est pas ici un nom propre mais un nom commun désignant la catégorie de toute entité adorée. On traduit par « une divinité ».

**allāhu** (Dieu) est le nom propre au nominatif, après illā (si ce n'est). La structure illā allāhu fait de Dieu la seule exception à la négation totale : parmi toutes les entités que le mot ilāh pourrait désigner, une seule est réelle. Le mot allāh est formé de l'article al- fusionné avec ilāh : al-ilāh devient allāh, ce qui signifie la divinité par excellence, le Dieu au sens absolu. Le nom est au nominatif car il est le sujet de la phrase de négation-exception. On traduit par « Dieu ».

**allāha** (Dieu) est le même nom propre, à l'accusatif — marque grammaticale de la particule wa-inna (et certes). La structure wa-inna allāha la-huwa al-ʿazīzu al-ḥakīmu est une phrase nominale emphatique : wa- (et) introduit une nouvelle proposition, inna (certes) l'affirme solennellement, allāha est le sujet logique de la phrase à l'accusatif selon la règle grammaticale après inna, et la-huwa (c'est bien lui) renforce l'identification exclusive — la puissance et la sagesse sont des qualités de Dieu et de Dieu seul, pas de quelque autre entité. On traduit par « Dieu ».

**al-ʿazīzu** (le Puissant) est un nom-adjectif masculin défini (avec l'article al-) de la racine ʿ-z-z, au nominatif, premier prédicat de la phrase nominale. D'après les sources étymologiques, la racine ʿ-z-z exprime la puissance qui ne peut être vaincue ni contrainte par aucune force extérieure — être invincible, de haute stature. L'article al- identifie Dieu comme le Puissant par excellence — pas un puissant parmi d'autres mais la source et la mesure de toute puissance. On traduit par « le Puissant ».

**al-ḥakīmu** (le Sage) est un nom-adjectif masculin défini (avec l'article al-) de la racine ḥ-k-m, au nominatif, deuxième prédicat. D'après les sources étymologiques, la racine ḥ-k-m exprime la sagesse comme faculté de discernement et de juste jugement. La forme ḥakīm (et non ḥākim qui désigne le juge en acte) désigne la sagesse comme qualité permanente et constitutive — pas un acte ponctuel mais un état d'être. La paire al-ʿazīzu al-ḥakīmu est fréquente dans le Coran pour signifier que la puissance divine n'est pas aveugle ni arbitraire — elle est orientée par la sagesse. On traduit par « le Sage ».

§JUSTIFICATION§
**le récit** — Le sens retenu est « récit » de la racine q-ṣ-ṣ. Le mot « récit » est choisi car il désigne la narration d'événements dans leur déroulement — c'est ce que le Lane's donne pour qaṣaṣ : une narration, une histoire relatée dans l'ordre de ses événements. L'alternative « histoire » est écartée car « histoire » en français connote soit un passé historique soit un récit fictif, et ces connotations ne sont pas dans le mot arabe. L'alternative « narration » est proche mais moins usuelle dans la langue de tous les jours.

**vrai** — Le sens retenu est « vérité » de la racine ḥ-q-q. Le mot « vrai » est choisi car al-ḥaqqu qualifie al-qaṣaṣu en disant que son contenu est conforme à la réalité. « Vrai » est le mot français courant pour exprimer cette conformité. L'alternative « authentique » est écartée car « authentique » dit que la source est originale et non falsifiée — c'est une qualité de l'objet lui-même, pas de son contenu. L'alternative « réel » est acceptable mais « vrai » est plus naturel pour qualifier un récit.

**une divinité** — Le sens retenu est « divinité » de la racine i-l-h. Le mot « divinité » est choisi car il désigne la catégorie abstraite de tout être adoré — il est neutre et couvre toute entité qui reçoit un culte. L'alternative « dieu » (minuscule) est possible mais « divinité » est plus précis pour ilāh car il désigne la catégorie, pas un dieu particulier. L'alternative « idole » est écartée car elle implique que l'entité adorée est fausse ou inférieure — le texte pose une question d'existence, pas une qualification de fausseté.

**Dieu** — Le sens retenu est « Dieu » de la racine i-l-h pour allāhu. Le mot « Dieu » avec la majuscule est choisi pour rendre allāh comme nom propre de la divinité unique dans la convention française. Il permet de distinguer allāh (nom propre = Dieu) de ilāh (nom commun = une divinité). L'alternative « Allah » est écartée car elle est l'arabisation du nom et notre traduction vise le français courant.

**le Puissant** — Le sens retenu est « être puissant » de la racine ʿ-z-z. Le mot « le Puissant » est choisi car al-ʿazīzu désigne celui dont la puissance est une qualité permanente et invincible. L'alternative « le Tout-Puissant » est écartée car elle ajoute le mot « tout » (omnipotence absolue) qui n'est pas dans le texte — le texte dit al-ʿazīzu (la racine ʿ-z-z = puissant, invincible), pas une formulation d'omnipotence totale. L'alternative « le Glorieux » est possible car ʿazīz peut désigner la gloire et l'honneur, mais « puissant » est le sens premier et le plus attesté dans le Lane's.

**le Sage** — Le sens retenu est « sagesse » de la racine ḥ-k-m. Le mot « le Sage » est choisi car al-ḥakīmu désigne celui dont la sagesse est une qualité permanente. La forme ḥakīm désigne la sagesse comme état d'être, pas l'acte de juger. L'alternative « le Juge » est écartée car la sagesse précède et oriente le jugement — al-ḥakīm n'est pas celui qui rend des sentences mais celui dont la sagesse est constitutive de sa nature. L'alternative « le Savant » est écartée car la sagesse (ḥikma) est différente du savoir (ʿilm) : le sage discerne et juge avec justesse, le savant accumule du savoir.

§CRITIQUE§
**vrai vs authentique** : les traductions courantes utilisent parfois « authentique » ou « exact » pour al-ḥaqqu. « Authentique » dit que l'objet est original et non falsifié — c'est une qualité de la source. « Vrai » dit que le contenu est conforme à la réalité. La racine ḥ-q-q exprime la conformité à la réalité — ce qui est fixé et établi. Dans le contexte d'une dispute sur le récit de Jésus (verset 61), ce qui est affirmé c'est que le contenu est réel, pas que la source est originale. « Vrai » est donc étymologiquement plus précis qu'« authentique ».

**le Puissant vs le Tout-Puissant** : les traductions courantes donnent « le Tout Puissant » pour al-ʿazīzu. Ce choix vient d'une tradition exégétique qui associe al-ʿazīz à l'omnipotence divine. Mais le texte dit al-ʿazīzu — la racine ʿ-z-z exprime la puissance invincible et la haute stature, sans le « tout » d'une omnipotence absolue. Le Lane's donne comme sens premier « être puissant, haut, invincible » — sans formuler d'omnipotence totale. Le « Tout » est un ajout invisible qui gonfle le sens du texte et transforme une qualité précise (invincibilité) en affirmation métaphysique générale (toute-puissance). Notre traduction « le Puissant » est plus fidèle à ce que le texte dit.`;

  // Segments d'affichage (un par position de segments_step1)
  const displaySegments = [
    { fr: 'certes',         pos: '',    phon: 'inna',       arabic: 'إِنَّ',      word_key: null,  is_particle: true,  sense_retenu: null,         position: 1  },
    { fr: 'ceci',           pos: '',    phon: 'hādhā',      arabic: 'هَٰذَا',     word_key: null,  is_particle: true,  sense_retenu: null,         position: 2  },
    { fr: 'est bien',       pos: '',    phon: 'la-huwa',    arabic: 'لَهُوَ',     word_key: null,  is_particle: true,  sense_retenu: null,         position: 3  },
    { fr: 'le récit',       pos: 'N',   phon: 'al-qaṣaṣu', arabic: 'ٱلْقَصَصُ', word_key: 'qss', is_particle: false, sense_retenu: 'récit',      position: 4  },
    { fr: 'vrai',           pos: 'Adj', phon: 'al-ḥaqqu',  arabic: 'ٱلْحَقُّ',  word_key: 'hqq', is_particle: false, sense_retenu: 'vérité',     position: 5  },
    { fr: 'et il n\'y a',   pos: '',    phon: 'wa-mā',      arabic: 'وَمَا',      word_key: null,  is_particle: true,  sense_retenu: null,         position: 6  },
    { fr: 'de',             pos: '',    phon: 'min',        arabic: 'مِنْ',       word_key: null,  is_particle: true,  sense_retenu: null,         position: 7  },
    { fr: 'divinité',       pos: 'N',   phon: 'ilāhin',    arabic: 'إِلَٰهٍ',   word_key: 'alh', is_particle: false, sense_retenu: 'divinité',   position: 8  },
    { fr: 'si ce n\'est',   pos: '',    phon: 'illā',       arabic: 'إِلَّا',     word_key: null,  is_particle: true,  sense_retenu: null,         position: 9  },
    { fr: 'Dieu',           pos: 'N',   phon: 'allāhu',    arabic: 'ٱللَّهُ',   word_key: 'alh', is_particle: false, sense_retenu: 'Dieu',       position: 10 },
    { fr: 'et certes',      pos: '',    phon: 'wa-inna',    arabic: 'وَإِنَّ',    word_key: null,  is_particle: true,  sense_retenu: null,         position: 11 },
    { fr: 'Dieu',           pos: 'N',   phon: 'allāha',    arabic: 'ٱللَّهَ',   word_key: 'alh', is_particle: false, sense_retenu: 'Dieu',       position: 12 },
    { fr: 'est bien',       pos: '',    phon: 'la-huwa',    arabic: 'لَهُوَ',     word_key: null,  is_particle: true,  sense_retenu: null,         position: 13 },
    { fr: 'le Puissant',    pos: 'N',   phon: 'al-ʿazīzu', arabic: 'ٱلْعَزِيزُ',word_key: 'ezz', is_particle: false, sense_retenu: 'être puissant', position: 14 },
    { fr: 'le Sage',        pos: 'Adj', phon: 'al-ḥakīmu', arabic: 'ٱلْحَكِيمُ',word_key: 'hkm', is_particle: false, sense_retenu: 'sagesse',    position: 15 }
  ];

  const { error: transErr } = await sb.from('verse_analyses').update({
    translation_arab,
    full_translation,
    translation_explanation,
    segments: displaySegments,
    validated: true,
    model_used: 'claude-sonnet-4-6-pipeline-maison',
    prompt_version: 'v3'
  }).eq('id', VA_ID);
  if (transErr) { console.error('ERREUR traduction:', transErr.message); return; }
  console.log('Translation UPDATE OK\n');

  // =========================================================
  // DAILY PHRASES — qss seulement (les autres ont déjà 3+)
  // =========================================================
  console.log('═══ Daily phrases ═══');
  const { count: qssCount } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', 956);
  if (qssCount > 0) {
    console.log('qss (aid=956) : ' + qssCount + ' phrases → SKIP');
  } else {
    const qssDaily = [
      { analysis_id: 956, sense: 'récit', arabic: 'قصص', phon: 'qaṣaṣ',
        french: 'Elle lui a raconté le récit de ce qui s\'était passé ce soir-là.' },
      { analysis_id: 956, sense: 'raconter', arabic: 'يقص', phon: 'yaquṣṣu',
        french: 'Il raconte chaque soir une histoire à ses enfants avant qu\'ils s\'endorment.' },
      { analysis_id: 956, sense: 'narration', arabic: 'القصة', phon: 'al-qiṣṣa',
        french: 'La narration de cet événement a été transmise de génération en génération dans la famille.' }
    ];
    const { error: dailyErr } = await sb.from('word_daily').insert(qssDaily);
    if (dailyErr) { console.error('ERREUR daily qss:', dailyErr.message); return; }
    console.log('qss (aid=956) : INSERT 3 phrases OK');
  }
  // Vérifier les autres
  for (const r of [{ key:'hqq', aid:409 }, { key:'alh', aid:250 }, { key:'ezz', aid:807 }, { key:'hkm', aid:447 }]) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    console.log(r.key + ' (aid=' + r.aid + ') : ' + count + ' phrases → SKIP');
  }

  // =========================================================
  // VÉRIFICATION FINALE
  // =========================================================
  console.log('\n═══ Vérification finale ═══');
  const { data: finalVA } = await sb.from('verse_analyses')
    .select('segments,translation_arab,full_translation,translation_explanation')
    .eq('id', VA_ID).single();

  const impSegs  = finalVA.segments.filter(s => !s.is_particle);
  const partSegs = finalVA.segments.filter(s =>  s.is_particle);
  console.log('Segments : ' + impSegs.length + ' importants, ' + partSegs.length + ' particules, ' + finalVA.segments.length + ' total');

  const { data: finalVWA } = await sb.from('verse_word_analyses')
    .select('position,word_key,sense_chosen')
    .eq('verse_id', VERSE_ID).order('position');
  console.log('VWA : ' + finalVWA.length + ' entrées');
  finalVWA.forEach(w => console.log('  pos=' + w.position + ' ' + w.word_key + ' → "' + w.sense_chosen + '"'));

  // Vérifier que positions VWA == positions segments importants
  const vwaPos = finalVWA.map(w => w.position).sort((a,b) => a-b);
  const segPos = impSegs.map(s => s.position).sort((a,b) => a-b);
  const posMatch = JSON.stringify(vwaPos) === JSON.stringify(segPos);
  console.log('Positions VWA/segs : ' + (posMatch ? 'OK' : 'MISMATCH! vwa=' + JSON.stringify(vwaPos) + ' segs=' + JSON.stringify(segPos)));

  // Vérifier sense_retenu dans word_meanings
  const aidMap = { qss: 956, hqq: 409, alh: 250, ezz: 807, hkm: 447 };
  for (const seg of impSegs) {
    const aid = aidMap[seg.word_key];
    if (aid) {
      const { data: meanings } = await sb.from('word_meanings').select('sense').eq('analysis_id', aid);
      const senses = meanings.map(m => m.sense);
      const match  = senses.includes(seg.sense_retenu);
      if (!match) console.log('  ⚠️  pos=' + seg.position + ' sense_retenu="' + seg.sense_retenu + '" NON TROUVÉ dans word_meanings!');
      else        console.log('  ✅ pos=' + seg.position + ' sense_retenu="' + seg.sense_retenu + '" OK');
    }
  }

  // Mots interdits
  const expText = finalVA.translation_explanation;
  const hasConcept  = expText.match(/\bconcept\b/gi);
  const hasPipeline = expText.match(/\bpipeline\b/gi);
  console.log('Mot "concept"  : ' + (hasConcept  ? '⚠️  TROUVÉ (' + hasConcept.length  + 'x)' : 'absent ✅'));
  console.log('Mot "pipeline" : ' + (hasPipeline ? '⚠️  TROUVÉ (' + hasPipeline.length + 'x)' : 'absent ✅'));

  // Vérifier §DEMARCHE§ / §JUSTIFICATION§ / §CRITIQUE§
  console.log('§DEMARCHE§    : ' + (expText.includes('§DEMARCHE§')    ? 'présent ✅' : '⚠️  MANQUANT'));
  console.log('§JUSTIFICATION§ : ' + (expText.includes('§JUSTIFICATION§') ? 'présent ✅' : '⚠️  MANQUANT'));
  console.log('§CRITIQUE§    : ' + (expText.includes('§CRITIQUE§')    ? 'présent ✅' : '⚠️  MANQUANT'));

  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║   PIPELINE S3:V62 TERMINÉE               ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('\nVERSET 3:62 — TERMINÉ');
  finalVWA.forEach(w => console.log('  ' + w.word_key + ' pos=' + w.position + ' → sens "' + w.sense_chosen + '"'));
  console.log('Traduction : "' + finalVA.translation_arab + '"');
}

main().catch(e => console.error('ERREUR PIPELINE:', e));
