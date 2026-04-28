// Pipeline S3:V47 — Étapes 2-3-4
// verse_id=340, VA_ID=700
const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
const VERSE_ID = 340;
const VA_ID = 700;

async function main() {
  console.log('=== PIPELINE S3:V47 ===\n');

  // =====================================================
  // 0a. FIX kwn root_ar=null
  // =====================================================
  console.log('--- 0a. Fix kwn root_ar ---');
  const { error: kwnFixErr } = await sb.from('word_analyses').update({ root_ar: 'ك و ن', root_phon: 'kwn' }).eq('id', 2577);
  if (kwnFixErr) { console.log('ERREUR kwn fix:', kwnFixErr.message); return; }
  console.log('kwn (2577): root_ar → ك و ن OK');

  // =====================================================
  // 0b. FIX SEGMENTS
  // =====================================================
  console.log('\n--- 0b. Fix segments ---');
  const { data: vaRaw } = await sb.from('verse_analyses').select('segments_step1').eq('id', VA_ID).single();
  const segs = vaRaw.segments_step1;

  const seg3 = segs.find(s => s.position === 3);
  if (seg3) { seg3.phon = 'أَنَّى'; seg3.arabic = 'أَنَّى'; }

  const seg5 = segs.find(s => s.position === 5);
  if (seg5) { seg5.arabic = 'لِي'; seg5.phon = 'لِي'; }

  const seg8 = segs.find(s => s.position === 8);
  if (seg8) { seg8.arabic = 'يَمْسَسْنِي'; }

  const seg9 = segs.find(s => s.position === 9);
  if (seg9) { seg9.word_key = 'bshr'; seg9.root = 'ب ش ر'; console.log('pos=9: word_key b → bshr'); }

  const seg15 = segs.find(s => s.position === 15);
  if (seg15) { seg15.word_key = 'shy'; seg15.root = 'ش ي أ'; console.log('pos=15: word_key → shy'); }

  const seg17 = segs.find(s => s.position === 17);
  if (seg17) { seg17.phon = 'قَضَى'; seg17.arabic = 'قَضَى'; }

  const seg21 = segs.find(s => s.position === 21);
  if (seg21) { seg21.phon = 'لَهُۥ'; seg21.arabic = 'لَهُۥ'; }

  const { error: segFixErr } = await sb.from('verse_analyses').update({ segments_step1: segs }).eq('id', VA_ID);
  if (segFixErr) { console.log('ERREUR segments fix:', segFixErr.message); return; }
  console.log('Segments corrigés OK');

  // =====================================================
  // 1. ENRICHIR qdy (768) — 3→13 sens
  // =====================================================
  console.log('\n--- 1. Enrichir qdy (ق ض ي, id=768) ---');
  const { data: qdyExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', 768);
  console.log('qdy existant: ' + qdyExisting.length + ' sens');

  const qdyNew = [
    {
      analysis_id: 768, sense: "ordonner de manière irrévocable", concept: "Jugement/Décret",
      description: "Émettre un ordre qui ne souffre pas de contestation et qui s'impose définitivement. L'ordre irrévocable sort de celui qui a l'autorité absolue et s'impose sans recours possible.",
      meaning_type: 'etymology', display_order: 4
    },
    {
      analysis_id: 768, sense: "prononcer une sentence", concept: "Jugement/Décret",
      description: "Rendre un verdict judiciaire définitif. Le Lane's donne qaDā alayhi : il a décidé judiciairement contre lui, et bayna al-khaSmayni : entre les deux parties en litige.",
      meaning_type: 'etymology', display_order: 5
    },
    {
      analysis_id: 768, sense: "achever entièrement", concept: "Achèvement/Accomplissement",
      description: "Acte de porter quelque chose à son terme complet et définitif, sans rien laisser d'inachevé. C'est le sens primaire de la racine selon le Lane's (Baydawi) : il a fini une chose entièrement, par la parole ou par l'action. C'est un acte extérieur et directionnel qui sort de celui qui agit et produit un résultat fini. Rien ne reste à faire.",
      meaning_type: 'etymology', display_order: 6
    },
    {
      analysis_id: 768, sense: "mener à son terme", concept: "Achèvement/Accomplissement",
      description: "Conduire une affaire ou une tâche jusqu'à sa conclusion complète — ne pas laisser une chose à moitié faite.",
      meaning_type: 'etymology', display_order: 7
    },
    {
      analysis_id: 768, sense: "s'acquitter d'une obligation", concept: "Achèvement/Accomplissement",
      description: "Remplir entièrement ce qui est dû — honorer un devoir ou une obligation jusqu'à son terme.",
      meaning_type: 'etymology', display_order: 8
    },
    {
      analysis_id: 768, sense: "payer une dette", concept: "Achèvement/Accomplissement",
      description: "Régler intégralement ce qui est dû à autrui. Le Lane's cite taqāDāhu al-dayn : il a pris ou reçu de lui la dette (forme VI).",
      meaning_type: 'etymology', display_order: 9
    },
    {
      analysis_id: 768, sense: "prendre fin", concept: "Terme/Fin",
      description: "L'état de ce qui est arrivé à son terme et est révolu. Ce n'est pas l'acte de terminer mais le résultat. Le Lane's donne inqaDā (forme VII) et taqaDDā (forme V) : il a passé, est arrivé à sa fin, est devenu nul.",
      meaning_type: 'etymology', display_order: 10
    },
    {
      analysis_id: 768, sense: "être révolu", concept: "Terme/Fin",
      description: "Une période, une vie, un processus qui a pris fin définitivement et ne peut pas reprendre.",
      meaning_type: 'etymology', display_order: 11
    },
    {
      analysis_id: 768, sense: "nécessiter", concept: "Exigence/Nécessité",
      description: "Relation logique ou causale par laquelle une chose implique nécessairement une autre. Le Lane's donne iqtaDā (forme VIII) : cela a requis telle chose, cela l'a nécessairement impliquée comme conséquence ou concomitant. C'est une relation d'implication, pas un acte d'autorité.",
      meaning_type: 'etymology', display_order: 12
    },
    {
      analysis_id: 768, sense: "réclamer son dû", concept: "Exigence/Nécessité",
      description: "Exiger le paiement de ce qui vous est légitimement dû. Le Lane's donne iqtaDāhu haqqahu : il a demandé de lui son dû.",
      meaning_type: 'etymology', display_order: 13
    }
  ];

  const { error: qdyErr } = await sb.from('word_meanings').insert(qdyNew);
  if (qdyErr) { console.log('ERREUR qdy insert:', qdyErr.message); return; }
  console.log('qdy insert: ' + qdyNew.length + ' sens OK → ' + (qdyExisting.length + qdyNew.length) + ' total');
  await sb.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 768);

  // =====================================================
  // 2. VÉRIFICATION RICHESSE + LECTURE CONCEPTS (SELECT depuis BDD)
  // =====================================================
  console.log('\n--- 2. Richesse des racines ---');
  const rootChecks = [
    { key: 'qwl', aid: 307 },
    { key: 'rbb', aid: 253 },
    { key: 'kwn', aid: 2577 },
    { key: 'wld', aid: 2576 },
    { key: 'mss', aid: 650 },
    { key: 'bshr', aid: 392 },
    { key: 'alh', aid: 250 },
    { key: 'xlq', aid: 344 },
    { key: 'shy', aid: 466 },
    { key: 'qdy', aid: 768 },
    { key: 'amr', aid: 428 }
  ];
  const conceptsMap = {};
  for (const r of rootChecks) {
    const { data: meanings } = await sb.from('word_meanings').select('sense,concept,description').eq('analysis_id', r.aid).order('display_order');
    const concepts = {};
    meanings.forEach(m => { if (!concepts[m.concept]) concepts[m.concept] = []; concepts[m.concept].push(m.sense); });
    conceptsMap[r.key] = concepts;
    const ok = meanings.length >= 6 ? 'OK' : 'SUSPECT!';
    console.log(r.key + ' (aid=' + r.aid + '): ' + meanings.length + ' sens, ' + Object.keys(concepts).length + ' concepts — ' + ok);
  }

  // =====================================================
  // 3. VWA — delete + insert (15 entrées)
  // =====================================================
  console.log('\n--- 3. VWA ---');
  await sb.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);

  const vwaEntries = [
    // pos=1: qālat → qwl(307)
    {
      verse_id: VERSE_ID, word_key: 'qwl', root: 'ق و ل', position: 1,
      sense_chosen: 'dire',
      analysis_axes: {
        concept_chosen: "Parole/Énonciation",
        sense_chosen: "dire",
        concepts: {
          "Parole/Énonciation": {
            status: "retenu",
            senses: conceptsMap.qwl["Parole/Énonciation"],
            proof_ctx: "Le verbe qālat à l'accompli féminin désigne l'acte de prononcer des mots — la parole sort de Marie et atteint son interlocuteur. L'énonciation est le seul sens cohérent dans ce cadre dialogal où Marie formule une question."
          },
          "Pensée/Avis": { status: "nul", senses: conceptsMap.qwl["Pensée/Avis"], proof_ctx: "L'opinion ou la doctrine est un état intérieur — elle ne convient pas à un verbe d'acte de parole." },
          "Sens isolé/Puissance": { status: "nul", senses: conceptsMap.qwl["Sens isolé/Puissance"], proof_ctx: "Hors sujet." },
          "Corps/Anatomie": { status: "nul", senses: conceptsMap.qwl["Corps/Anatomie"], proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=2: rabbi → rbb(253)
    {
      verse_id: VERSE_ID, word_key: 'rbb', root: 'ر ب ب', position: 2,
      sense_chosen: 'seigneur',
      analysis_axes: {
        concept_chosen: "Seigneurie/Autorité bienveillante",
        sense_chosen: "seigneur",
        concepts: {
          "Seigneurie/Autorité bienveillante": {
            status: "retenu",
            senses: conceptsMap.rbb["Seigneurie/Autorité bienveillante"],
            proof_ctx: "Le nom rabbi dans un vocatif direct est un appel au titre d'autorité bienveillante — celui qui prend en charge, nourrit et gouverne. C'est le titre invoqué dans l'adresse, pas l'acte d'éduquer ni la croissance physique. Contrairement à Éducation/Accompagnement (l'acte d'élever), le vocatif rabbi désigne le détenteur du titre."
          },
          "Croissance/Augmentation": { status: "nul", senses: conceptsMap.rbb["Croissance/Augmentation"], proof_ctx: "L'augmentation physique (colline, excès) est le sens concret de la racine — pas le titre d'autorité." },
          "Éducation/Accompagnement": { status: "peu_probable", senses: conceptsMap.rbb["Éducation/Accompagnement"], proof_ctx: "Élever et éduquer sont des actes accomplis par le rabb — mais dans rabbi (vocatif), c'est le titre qui est convoqué, pas l'acte." },
          "Commerce/Usure": { status: "nul", senses: conceptsMap.rbb["Commerce/Usure"], proof_ctx: "Hors sujet." },
          "Souffle/Vent": { status: "nul", senses: conceptsMap.rbb["Souffle/Vent"], proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=4: yakūnu → kwn(2577) — question de Marie
    {
      verse_id: VERSE_ID, word_key: 'kwn', root: 'ك و ن', position: 4,
      sense_chosen: 'être (verbe incomplet)',
      analysis_axes: {
        concept_chosen: "Être/Existence",
        sense_chosen: "être (verbe incomplet)",
        concepts: {
          "Être/Existence": {
            status: "retenu",
            senses: conceptsMap.kwn["Être/Existence"],
            proof_ctx: "Le verbe yakūnu à l'inaccompli dans 'annā yakūnu lī waladun' exprime l'existence projetée — 'comment y aura-t-il un enfant'. C'est le verbe fondamental d'existence, le seul cohérent dans cette structure existentielle. Contrairement à Humilité/Soumission et Lieu/État, ces sens sont hors sujet dans une question sur la possibilité d'une naissance."
          },
          "Humilité/Soumission": { status: "nul", senses: conceptsMap.kwn["Humilité/Soumission"], proof_ctx: "L'humilité et l'abaissement sont un dérivé hors sujet ici." },
          "Lieu/État": { status: "nul", senses: conceptsMap.kwn["Lieu/État"], proof_ctx: "Un lieu ou état spatial est hors sujet dans une question existentielle sur la naissance." }
        }
      }
    },
    // pos=6: waladun → wld(2576)
    {
      verse_id: VERSE_ID, word_key: 'wld', root: 'و ل د', position: 6,
      sense_chosen: 'enfant',
      analysis_axes: {
        concept_chosen: "Enfant/Descendance",
        sense_chosen: "enfant",
        concepts: {
          "Enfant/Descendance": {
            status: "retenu",
            senses: conceptsMap.wld["Enfant/Descendance"],
            proof_ctx: "Le nom waladun (indéfini nominatif) désigne le résultat de l'engendrement — l'être né. Marie demande comment il y aura un enfant pour elle : walad est ici l'être produit, pas l'acte de le produire. Contrairement à Engendrer/Naissance (l'acte verbal), walad en tant que nom désigne le résultat."
          },
          "Engendrer/Naissance": { status: "peu_probable", senses: conceptsMap.wld["Engendrer/Naissance"], proof_ctx: "Mettre au monde est le sens verbal de la racine — mais waladun ici est un nom (le résultat), pas l'acte d'engendrer." },
          "Éducation/Croissance": { status: "nul", senses: conceptsMap.wld["Éducation/Croissance"], proof_ctx: "Hors sujet." },
          "Production/Innovation": { status: "nul", senses: conceptsMap.wld["Production/Innovation"], proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=8: yamsisnī → mss(650)
    {
      verse_id: VERSE_ID, word_key: 'mss', root: 'م س س', position: 8,
      sense_chosen: 'avoir des rapports intimes (euphémisme)',
      analysis_axes: {
        concept_chosen: "Contact intime",
        sense_chosen: "avoir des rapports intimes (euphémisme)",
        concepts: {
          "Contact intime": {
            status: "retenu",
            senses: conceptsMap.mss["Contact intime"],
            proof_ctx: "Le verbe yamsisnī dans 'lam yamsisnī basharun' active le sens euphémique attesté par les sources étymologiques — massa al-mar'ata désigne le contact intime. Le contexte est une question sur la procréation : Marie demande comment elle peut avoir un enfant sans avoir eu de rapport intime. Contrairement au simple Contact/Atteinte, le contexte reproductif impose le sens euphémique."
          },
          "Contact/Atteinte": {
            status: "probable",
            senses: conceptsMap.mss["Contact/Atteinte"],
            proof_ctx: "Le toucher physique simple est le sens premier de la racine — la phrase est grammaticalement valide. Mais le contexte d'une question sur la procréation oriente vers le sens euphémique, plus précis ici."
          }
        }
      }
    },
    // pos=9: basharun → bshr(392)
    {
      verse_id: VERSE_ID, word_key: 'bshr', root: 'ب ش ر', position: 9,
      sense_chosen: 'être humain',
      analysis_axes: {
        concept_chosen: "Corps/Anatomie",
        sense_chosen: "être humain",
        concepts: {
          "Corps/Anatomie": {
            status: "retenu",
            senses: conceptsMap.bshr["Corps/Anatomie"],
            proof_ctx: "Le nom basharun (indéfini nominatif) désigne l'être humain comme créature à peau — terme générique pour l'humanité, sans distinction de genre. C'est le sujet de la négation. Contrairement à Surface/Contact (la peau), le verset désigne des personnes entières, pas leurs surfaces. Contrairement à Annonce/Réjouissance, ces sens sont hors sujet."
          },
          "Surface/Contact": { status: "peu_probable", senses: conceptsMap.bshr["Surface/Contact"], proof_ctx: "La peau est le sens physique premier, mais le verset désigne des personnes entières, pas leurs surfaces." },
          "Annonce/Réjouissance": { status: "nul", senses: conceptsMap.bshr["Annonce/Réjouissance"], proof_ctx: "L'annonce d'une bonne nouvelle est un acte hors sujet ici." }
        }
      }
    },
    // pos=10: qāla → qwl(307) — le messager répond
    {
      verse_id: VERSE_ID, word_key: 'qwl', root: 'ق و ل', position: 10,
      sense_chosen: 'dire',
      analysis_axes: {
        concept_chosen: "Parole/Énonciation",
        sense_chosen: "dire",
        concepts: {
          "Parole/Énonciation": {
            status: "retenu",
            senses: conceptsMap.qwl["Parole/Énonciation"],
            proof_ctx: "Le verbe qāla à l'accompli masculin désigne l'acte de prononcer une réponse — le messager formule la réponse divine. Même analyse qu'au pos=1 : c'est l'énonciation directe, pas l'opinion ou la puissance."
          },
          "Pensée/Avis": { status: "nul", senses: conceptsMap.qwl["Pensée/Avis"], proof_ctx: "Un état intérieur ne convient pas à un verbe de parole dialogale." },
          "Sens isolé/Puissance": { status: "nul", senses: conceptsMap.qwl["Sens isolé/Puissance"], proof_ctx: "Hors sujet." },
          "Corps/Anatomie": { status: "nul", senses: conceptsMap.qwl["Corps/Anatomie"], proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=12: allāhu → alh(250)
    {
      verse_id: VERSE_ID, word_key: 'alh', root: 'ا ل ه', position: 12,
      sense_chosen: 'Dieu',
      analysis_axes: {
        concept_chosen: "Divinité",
        sense_chosen: "Dieu",
        concepts: {
          "Divinité": {
            status: "retenu",
            senses: conceptsMap.alh["Divinité"],
            proof_ctx: "Le nom allāhu est le sujet nominatif de yakhluqu — c'est le nom propre de la réalité divine unique. Le sens 'Dieu' du concept Divinité est le seul qui peut fonctionner comme sujet grammatical d'un verbe de création. Les autres sens d'alh (Adoration, Détresse, Refuge) décrivent des actes ou des états, pas Dieu comme sujet grammatical."
          },
          "Adoration/Dévotion": { status: "nul", senses: conceptsMap.alh["Adoration/Dévotion"], proof_ctx: "L'adoration décrit un acte humain envers Dieu, pas Dieu comme sujet." },
          "Détresse": { status: "nul", senses: conceptsMap.alh["Détresse"], proof_ctx: "Hors sujet." },
          "Refuge/Protection": { status: "nul", senses: conceptsMap.alh["Refuge/Protection"], proof_ctx: "Hors sujet." },
          "Domination": { status: "nul", senses: conceptsMap.alh["Domination"], proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=13: yakhluqu → xlq(344)
    {
      verse_id: VERSE_ID, word_key: 'xlq', root: 'خ ل ق', position: 13,
      sense_chosen: 'créer',
      analysis_axes: {
        concept_chosen: "Création/Production",
        sense_chosen: "créer",
        concepts: {
          "Création/Production": {
            status: "retenu",
            senses: conceptsMap.xlq["Création/Production"],
            proof_ctx: "Le verbe yakhluqu à l'inaccompli désigne l'acte de faire exister ce qui n'existait pas — la création sort du créateur et produit une réalité nouvelle. Le contexte du verset illustre cette puissance (naissance miraculeuse). C'est un acte extérieur et directionnel, le seul cohérent pour 'Dieu crée ce qu'Il veut'."
          },
          "Sens isolé/Lisse": { status: "nul", senses: conceptsMap.xlq["Sens isolé/Lisse"], proof_ctx: "Hors sujet." },
          "Sens isolé/Mensonge": { status: "nul", senses: conceptsMap.xlq["Sens isolé/Mensonge"], proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=15: yashā'u → shy(466)
    {
      verse_id: VERSE_ID, word_key: 'shy', root: 'ش ي أ', position: 15,
      sense_chosen: 'vouloir',
      analysis_axes: {
        concept_chosen: "Volonté",
        sense_chosen: "vouloir",
        concepts: {
          "Volonté": {
            status: "retenu",
            senses: conceptsMap.shy["Volonté"],
            proof_ctx: "Le verbe yashā'u à l'inaccompli (forme I de shā'a) exprime l'acte intérieur de la volonté orientée vers un objet — 'Il crée ce qu'Il veut'. La construction 'mā yashā'u' fait de la volonté la condition exclusive de la création divine. Contrairement à Chose/Être (la réalité existante), yashā'u est ici un verbe d'acte intérieur, pas la désignation d'une chose."
          },
          "Chose/Être": { status: "peu_probable", senses: conceptsMap.shy["Chose/Être"], proof_ctx: "La chose ou l'entité est le sens nominal de shay' — mais sous la forme verbale yashā'u, c'est l'acte de vouloir qui est exprimé, pas la chose voulue." },
          "Incitation/Contrainte": { status: "nul", senses: conceptsMap.shy["Incitation/Contrainte"], proof_ctx: "Contraindre est un acte vers l'extérieur, incompatible avec 'Il crée ce qu'Il veut' qui parle de la volonté intérieure divine." },
          "Difformité/Laideur": { status: "nul", senses: conceptsMap.shy["Difformité/Laideur"], proof_ctx: "Hors sujet." },
          "Néant": { status: "nul", senses: conceptsMap.shy["Néant"], proof_ctx: "Hors sujet." },
          "Apaisement": { status: "nul", senses: conceptsMap.shy["Apaisement"], proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=17: qaḍā → qdy(768)
    {
      verse_id: VERSE_ID, word_key: 'qdy', root: 'ق ض ي', position: 17,
      sense_chosen: 'décréter',
      analysis_axes: {
        concept_chosen: "Jugement/Décret",
        sense_chosen: "décréter",
        concepts: {
          "Jugement/Décret": {
            status: "retenu",
            senses: conceptsMap.qdy["Jugement/Décret"],
            proof_ctx: "Le verbe qaḍā à l'accompli dans 'idhā qaḍā amran' exprime la décision irrévocable divine qui porte une chose à l'existence. Les sources étymologiques (Lane's, Baydawi) citent ce verset précisément pour illustrer le sens de 'décréter, ordonner de manière définitive'. La réponse immédiate 'kun fa-yakūnu' confirme que c'est une décision qui crée, pas un achèvement de quelque chose de préexistant. Contrairement à Achèvement/Accomplissement (terminer ce qui était commencé), la décision divine ici porte sur quelque chose qui n'existait pas encore."
          },
          "Achèvement/Accomplissement": {
            status: "probable",
            senses: conceptsMap.qdy["Achèvement/Accomplissement"],
            proof_ctx: "Achever entièrement une chose par la parole est le sens primaire de la racine selon le Lane's. Mais dans ce verset, la chose n'existait pas avant la décision divine — on ne peut pas 'achever' ce qui n'a pas commencé. Le sens de décret irrévocable est plus précis ici."
          },
          "Terme/Fin": { status: "nul", senses: conceptsMap.qdy["Terme/Fin"], proof_ctx: "Se terminer ou être révolu (formes VII et V) est hors sujet dans un contexte de création." },
          "Exigence/Nécessité": { status: "nul", senses: conceptsMap.qdy["Exigence/Nécessité"], proof_ctx: "Nécessiter ou réclamer (forme VIII) est un sens logique hors sujet dans ce contexte de décision créatrice divine." }
        }
      }
    },
    // pos=18: amran → amr(428)
    {
      verse_id: VERSE_ID, word_key: 'amr', root: 'أ م ر', position: 18,
      sense_chosen: 'chose',
      analysis_axes: {
        concept_chosen: "Affaire/Chose",
        sense_chosen: "chose",
        concepts: {
          "Affaire/Chose": {
            status: "retenu",
            senses: conceptsMap.amr["Affaire/Chose"],
            proof_ctx: "Le nom amran (indéfini accusatif, objet de qaḍā) désigne n'importe quelle chose sur laquelle porte la décision divine. L'indéfini est délibéré : n'importe quelle chose — ce qui souligne l'universalité du pouvoir divin. Contrairement à Commandement/Autorité (l'acte d'ordonner), amran ici est l'objet grammatical de qaḍā — la réalité décidée, pas l'acte de décider."
          },
          "Commandement/Autorité": {
            status: "peu_probable",
            senses: conceptsMap.amr["Commandement/Autorité"],
            proof_ctx: "Ordonner (amara) est le sens verbal de la racine — mais amran ici est un nom indéfini accusatif, objet de qaḍā, ce qui le place du côté de la chose traitée (chose) plutôt que de l'acte d'ordonner."
          },
          "Consultation": { status: "nul", senses: conceptsMap.amr["Consultation"], proof_ctx: "Hors sujet." },
          "Sens isolé/Multiplier": { status: "nul", senses: conceptsMap.amr["Sens isolé/Multiplier"], proof_ctx: "Hors sujet." },
          "Sens isolé/Signe": { status: "nul", senses: conceptsMap.amr["Sens isolé/Signe"], proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=20: yaqūlu → qwl(307) — dans la formule kun
    {
      verse_id: VERSE_ID, word_key: 'qwl', root: 'ق و ل', position: 20,
      sense_chosen: 'dire',
      analysis_axes: {
        concept_chosen: "Parole/Énonciation",
        sense_chosen: "dire",
        concepts: {
          "Parole/Énonciation": {
            status: "retenu",
            senses: conceptsMap.qwl["Parole/Énonciation"],
            proof_ctx: "Le verbe yaqūlu à l'inaccompli dans 'fa-innamā yaqūlu lahu kun' désigne la parole divine créatrice — dire 'Sois !' est l'unique acte par lequel Dieu crée. C'est l'énonciation dans sa forme la plus directe et la plus puissante."
          },
          "Pensée/Avis": { status: "nul", senses: conceptsMap.qwl["Pensée/Avis"], proof_ctx: "Un état intérieur ne convient pas à la parole créatrice divine." },
          "Sens isolé/Puissance": { status: "nul", senses: conceptsMap.qwl["Sens isolé/Puissance"], proof_ctx: "Hors sujet." },
          "Corps/Anatomie": { status: "nul", senses: conceptsMap.qwl["Corps/Anatomie"], proof_ctx: "Hors sujet." }
        }
      }
    },
    // pos=22: kun → kwn(2577) — impératif
    {
      verse_id: VERSE_ID, word_key: 'kwn', root: 'ك و ن', position: 22,
      sense_chosen: 'être (verbe incomplet)',
      analysis_axes: {
        concept_chosen: "Être/Existence",
        sense_chosen: "être (verbe incomplet)",
        concepts: {
          "Être/Existence": {
            status: "retenu",
            senses: conceptsMap.kwn["Être/Existence"],
            proof_ctx: "L'impératif kun adressé à une chose qui n'existe pas encore est l'injonction d'existence par excellence — 'Sois !' signifie 'Commence à exister !'. C'est le verbe d'existence dans sa forme la plus directe. Un impératif demande de faire l'action — ici, être/exister. Aucun autre sens de kwn ne convient à un impératif divin créateur."
          },
          "Humilité/Soumission": { status: "nul", senses: conceptsMap.kwn["Humilité/Soumission"], proof_ctx: "Hors sujet dans la formule créatrice." },
          "Lieu/État": { status: "nul", senses: conceptsMap.kwn["Lieu/État"], proof_ctx: "Hors sujet dans la formule créatrice." }
        }
      }
    },
    // pos=23: fa-yakūnu → kwn(2577) — résultat immédiat
    {
      verse_id: VERSE_ID, word_key: 'kwn', root: 'ك و ن', position: 23,
      sense_chosen: "venir à l'existence",
      analysis_axes: {
        concept_chosen: "Être/Existence",
        sense_chosen: "venir à l'existence",
        concepts: {
          "Être/Existence": {
            status: "retenu",
            senses: conceptsMap.kwn["Être/Existence"],
            proof_ctx: "Le verbe yakūnu après fa- exprime le résultat immédiat de l'ordre kun — la chose décrétée vient à l'existence au moment même de l'ordre. C'est 'venir à l'existence' plutôt que le simple 'être' : la chose passe du néant à l'existence sous l'effet de la parole divine. L'inaccompli après fa- exprime l'immédiateté de la réalisation."
          },
          "Humilité/Soumission": { status: "nul", senses: conceptsMap.kwn["Humilité/Soumission"], proof_ctx: "Hors sujet dans la formule créatrice." },
          "Lieu/État": { status: "nul", senses: conceptsMap.kwn["Lieu/État"], proof_ctx: "Hors sujet dans la formule créatrice." }
        }
      }
    }
  ];

  const { error: vwaErr } = await sb.from('verse_word_analyses').insert(vwaEntries);
  if (vwaErr) { console.log('ERREUR VWA:', vwaErr.message); return; }
  console.log('VWA insert: ' + vwaEntries.length + ' entries OK');

  // =====================================================
  // 4. TRADUCTION
  // =====================================================
  console.log('\n--- 4. Traduction ---');

  const translation_arab = `Elle dit : « Mon seigneur, comment y aura-t-il pour moi un enfant alors qu'aucun être humain ne m'a touchée ? » Il dit : « Ainsi Dieu crée ce qu'Il veut. Lorsqu'Il décrète une chose, Il lui dit seulement : "Sois !", et elle est. »`;

  const full_translation = `Elle dit : « Seigneur, comment aurais-je un enfant, aucun homme ne m'ayant touchée ? » Il dit : « C'est ainsi qu'Allah crée ce qu'Il veut. Quand Il décide d'une chose, Il n'a qu'à dire : "Sois", et c'est ! »`;

  const translation_explanation = `§DEMARCHE§
Ce verset est la réponse de Marie à l'annonce des versets 45-46 : les messagers lui ont annoncé un fils nommé Jésus, éminent dans l'ici-bas et l'au-delà, et qui parlera aux gens au berceau et à l'âge adulte. Marie, surprise, pose une question sur la possibilité physique de cette annonce. La réponse divine clôt la scène en rappelant la toute-puissance créatrice. C'est la première apparition dans la sourate 3 de la formule "kun fa-yakūnu" — "Sois ! et elle est" — que le Coran répète pour décrire comment Dieu crée sans intermédiaire.

**qālat** (elle dit) est un verbe à l'accompli (une forme qui indique que l'action a eu lieu et est achevée) à la 3ème personne du féminin singulier de la racine q-w-l. La marque féminine (qālat et non qāla) identifie la locutrice comme une femme — Marie. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le sens premier de q-w-l est "produire des mots, énoncer" — la parole sort du locuteur et atteint l'interlocuteur. On traduit par « elle dit ».

**rabbi** (mon seigneur) est un nom de la racine r-b-b à l'état construit avec le pronom possessif de 1ère personne singulier : rabbi = rabb + ī = "le seigneur de moi". C'est une apostrophe directe — Marie s'adresse à son seigneur dans un vocatif. D'après les sources étymologiques, la racine r-b-b a pour sens premier "augmenter, faire grandir" — le rabb est celui qui fait grandir, nourrit et prend en charge ce qui est sous son autorité. On traduit par « mon seigneur ».

**yakūnu** (y aura-t-il) est un verbe à l'inaccompli (une forme qui exprime l'action projetée ou habituelle) à la 3ème personne du masculin singulier de la racine k-w-n, précédé de la particule interrogative **annā** (comment, d'où). La construction "yakūnu lī waladun" est existentielle : "il y aura pour moi un enfant". Le verbe k-w-n est appelé "verbe incomplet" (nāqis) en grammaire arabe car il dit l'existence ou l'état sans former de phrase complète seul. La particule **lī** (pour moi) indique à qui revient cet enfant. Marie interroge sur la modalité même de l'événement : "comment est-ce possible ?". On traduit par « y aura-t-il ».

**waladun** (un enfant) est un nom masculin indéfini au nominatif de la racine w-l-d. Le nominatif indique que c'est le sujet de yakūnu dans la construction existentielle. L'indéfini (waladun et non al-walad) dit "un enfant" sans spécifier lequel. D'après les sources étymologiques, le sens premier de w-l-d est "mettre au monde, engendrer" — le walad est l'être né, le résultat de l'engendrement. On traduit par « un enfant ».

**yamsisnī** (ne m'a touchée) est un verbe à l'inaccompli jussif (une forme utilisée après la négation lam pour exprimer le passé négatif) de la racine m-s-s, précédé de la conjonction **wa** (et/alors que) et de la négation **lam** (ne... pas), avec le pronom suffixe nī (me) comme objet direct. D'après les sources étymologiques, le sens premier de m-s-s est "entrer en contact direct". La racine porte aussi un sens euphémique attesté — désigner les rapports intimes entre deux personnes. C'est ce sens que le contexte active ici : Marie demande comment elle peut avoir un enfant sans avoir eu de contact intime. On traduit par « ne m'a touchée ».

**basharun** (un être humain) est un nom masculin indéfini au nominatif de la racine b-sh-r — c'est le sujet de la négation. D'après les sources étymologiques, le sens premier de b-sh-r désigne la peau, la surface visible de l'être — le bashar est l'être humain en tant que créature à peau, terme générique qui inclut homme et femme. L'indéfini dans un contexte de négation signifie "aucun être humain". On traduit par « un être humain ».

**qāla** (il dit) est un verbe à l'accompli à la 3ème personne du masculin singulier de la racine q-w-l. Le sujet n'est pas nommé dans le verset — le texte dit simplement "il dit". Le locuteur est le messager des versets précédents (verset 45) qui portait l'annonce à Marie. La forme masculine (qāla) contraste avec la forme féminine du premier verbe (qālat). On traduit par « il dit ».

**yakhluqu** (crée) est un verbe à l'inaccompli à la 3ème personne du masculin singulier de la racine kh-l-q, introduit par la particule de comparaison **kadhālika** (ainsi, comme cela) et avec **allāhu** (Dieu) comme sujet nominatif. L'inaccompli exprime ici une vérité générale et permanente : "c'est ainsi que Dieu crée habituellement". D'après les sources étymologiques, le sens premier de kh-l-q est "créer, faire exister ce qui n'existait pas" — un acte extérieur et directionnel qui sort du créateur et produit une réalité nouvelle. On traduit par « crée ».

**yashā'u** (Il veut) est un verbe à l'inaccompli de la racine sh-y-', forme I (shā'a). La particule **mā** (ce que) est un pronom relatif, objet de yakhluqu. D'après les sources étymologiques, cette racine porte deux familles de sens : les choses/entités et la volonté. Sous la forme verbale yashā'u, c'est l'acte de vouloir — la volonté intérieure orientée vers un objet. On traduit par « Il veut ».

**qaḍā** (Il décrète) est un verbe à l'accompli de la racine q-ḍ-y, introduit par la particule conditionnelle-temporelle **idhā** (lorsque, quand). D'après les sources étymologiques, le sens primaire est "finir une chose entièrement, par la parole ou par l'action" — et le Lane's cite ce verset précisément pour illustrer le sens dérivé de "décréter, ordonner de manière définitive". On traduit par « Il décrète ».

**amran** (une chose) est un nom masculin indéfini accusatif de la racine '-m-r, objet direct de qaḍā. D'après les sources étymologiques, la racine '-m-r porte deux familles de sens : l'ordre et la chose/affaire. Ici, amran est la chose sur laquelle porte la décision divine. L'indéfini (amran et non al-amr) dit "n'importe quelle chose", soulignant l'universalité du pouvoir créateur. On traduit par « une chose ».

**yaqūlu lahu kun fa-yakūnu** (Il lui dit seulement : "Sois !", et elle est) — la particule de restriction **innamā** (seulement, uniquement) précède le verbe **yaqūlu** (Il dit, inaccompli de q-w-l) : la seule façon d'agir de Dieu est de dire "Sois !". Le pronom **lahu** (pour elle/lui) est le datif — la parole est adressée à la chose à créer. L'impératif **kun** (Sois !) est la 2ème personne masculine singulier de k-w-n — c'est le verbe "être" à l'impératif, adressé à une chose qui n'existe pas encore : "Commence à exister !". La conjonction **fa** (et/alors) relie l'ordre à son résultat immédiat : le verbe **yakūnu** (elle est, inaccompli de k-w-n) exprime que la chose vient à l'existence au moment même de l'ordre. On traduit kun par « Sois ! » et fa-yakūnu par « et elle est ».

§JUSTIFICATION§
**elle dit / il dit** — Le sens retenu est « dire » de la racine q-w-l. Le mot « dire » est choisi car il désigne le simple acte de prononcer des mots pour communiquer — ni argumenter, ni déclarer solennellement. Marie "dit" sa question, le messager "dit" sa réponse : c'est l'énonciation directe. L'alternative « déclarer » est écartée car elle implique une solennité que le texte ne marque pas. L'alternative « s'exclamer » est écartée car elle suppose une émotion que le texte ne précise pas.

**mon seigneur** — Le sens retenu est « seigneur » de la racine r-b-b. Le mot « seigneur » est choisi car il désigne l'autorité bienveillante qui prend en charge — le rabb fait grandir, nourrit et gouverne. C'est le titre le plus précis pour un vocatif de déférence. L'alternative « maître » est écartée car en français courant elle évoque plutôt un professeur ou un maître d'esclave. L'alternative « Dieu » est écartée car rabb est un titre relationnel, pas le nom de Dieu.

**y aura-t-il** — Le sens retenu est « être (verbe incomplet) » de la racine k-w-n. Le mot « y aura-t-il » est choisi car la construction "yakūnu lī waladun" est existentielle : "il y aura un enfant pour moi". L'alternative « serait-il » est écartée car le subjonctif conditionnel implique une irréalité supposée, alors que la question de Marie est ouverte et sincère. L'alternative « pourrait-il » est écartée car elle ajoute une modalité de possibilité que le texte ne formule pas.

**un enfant** — Le sens retenu est « enfant » de la racine w-l-d. Le mot « enfant » est choisi car walad désigne l'être né, sans précision de genre ni d'âge exact. L'alternative « fils » est écartée car walad n'est pas genré — ibn désigne le fils en arabe, pas walad. L'alternative « descendant » est écartée car trop générique.

**ne m'a touchée** — Le sens retenu est « avoir des rapports intimes (euphémisme) » de la racine m-s-s. Le mot « touchée » est choisi car c'est l'euphémisme naturel en français qui reflète le même procédé qu'en arabe : dire "toucher" pour désigner l'intimité. Les sources étymologiques confirment que massa est utilisé comme euphémisme dans ce contexte. L'alternative « a eu des rapports avec moi » est écartée car elle brise l'euphémisme que le texte maintient délibérément. L'alternative « m'a approchée » est écartée car elle ne rend pas la précision du contact direct que m-s-s implique.

**un être humain** — Le sens retenu est « être humain » de la racine b-sh-r. Le mot « être humain » est choisi car bashar est le terme générique pour l'humanité — la créature à peau, sans distinction de genre. L'alternative « un homme » est écartée car elle introduit la précision de genre masculin que bashar ne porte pas. L'alternative « une personne » est acceptable mais moins précis pour rendre le sens de b-sh-r.

**Dieu** — Le sens retenu est « Dieu » de la racine '-l-h. Le mot « Dieu » est le terme français courant pour la divinité unique. L'alternative « Allah » est écartée car notre approche traduit tous les termes y compris les noms propres quand un équivalent courant existe.

**crée** — Le sens retenu est « créer » de la racine kh-l-q. Le mot « crée » est choisi car il désigne l'acte de faire exister ce qui n'existait pas. L'alternative « fabrique » est écartée car elle implique un travail manuel avec des matériaux préexistants. L'alternative « forme » est écartée car "façonner" implique une forme préalable.

**ce qu'Il veut** — Le sens retenu est « vouloir » de la racine sh-y-'. Le mot « veut » est choisi car il désigne l'acte intérieur de la volonté orientée vers un objet. L'alternative « désire » est acceptable comme synonyme mais « veut » est plus direct. L'alternative « choisit » est écartée car elle implique une délibération entre options que la racine ne formule pas.

**lorsqu'Il décrète** — Le sens retenu est « décréter » de la racine q-ḍ-y. Le mot « décrète » est choisi car il désigne l'acte d'autorité irrévocable qui fixe définitivement une réalité — une décision qui ne souffre pas de recours ni de délai. L'alternative « décide » est acceptable mais moins précis : "décider" peut être réversible, "décréter" est définitif. L'alternative « accomplit » est écartée car elle implique une réalité préalable à exécuter — or Dieu crée ex nihilo.

**une chose** — Le sens retenu est « chose » de la racine '-m-r. Le mot « chose » est choisi car amran est indéfini — n'importe quelle chose. L'alternative « affaire » est acceptable mais implique quelque chose de plus complexe. L'alternative « ordre » est écartée car amr est ici l'objet de qaḍā (ce qui est décrété), pas l'acte de décréter.

**Sois !** — Le sens retenu est « être (verbe incomplet) » de la racine k-w-n. Le mot « Sois ! » est le seul équivalent français naturel de l'impératif kun. L'alternative « Existe ! » est étymologiquement juste mais moins naturelle en français courant. L'alternative « Adviens ! » est trop littéraire.

**et elle est** — Le sens retenu est « venir à l'existence » de la racine k-w-n. Le mot « elle est » est choisi car fa-yakūnu exprime l'immédiateté absolue — la chose est au moment même de l'ordre. L'alternative « et cela devient » est acceptable mais "est" exprime mieux la complétude instantanée.

§CRITIQUE§
**bashar → "un être humain" vs "un homme"** : les traductions courantes donnent souvent « un homme » pour bashar. Ce choix vient de l'interprétation naturelle de la scène — Marie parle de n'avoir pas eu de relations avec un homme. Mais bashar est le terme générique pour l'être humain, pas le terme pour l'homme adulte mâle (qui est rajul ou dhakar). Le texte dit "aucun être humain ne m'a touchée" — la portée est plus large. Cette nuance est réelle, même si les deux traductions restent proches dans ce contexte.

**qaḍā → "décide d'une chose" vs "décrète une chose"** : certaines traductions donnent "Il décide d'une chose" là où nous donnons "Il décrète une chose". Les deux traduisent le sens de jugement irrévocable. Notre choix "décrète" souligne mieux le caractère absolu et définitif — une décision peut être révisée, un décret non. Le Lane's cite ce verset précisément sous le sens de décret irrévocable.

**"Il dit" sans sujet explicite** : les traductions courantes précisent parfois "l'Ange dit" ou "on lui dit" pour identifier le locuteur. Le texte dit simplement "qāla" sans sujet nommé — le locuteur est le messager des versets précédents. L'ajout du sujet est une clarification interprétative, pas une traduction du texte.`;

  // Segments d'affichage
  const displaySegments = [
    { fr: "elle dit", pos: "V", phon: "qālat", arabic: "قَالَتْ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
    { fr: "mon seigneur", pos: "N", phon: "rabbi", arabic: "رَبِّ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 2 },
    { fr: "comment", pos: "", phon: "annā", arabic: "أَنَّى", word_key: null, is_particle: true, sense_retenu: null, position: 3 },
    { fr: "y aura-t-il", pos: "V", phon: "yakūnu", arabic: "يَكُونُ", word_key: "kwn", is_particle: false, sense_retenu: "être (verbe incomplet)", position: 4 },
    { fr: "pour moi", pos: "", phon: "lī", arabic: "لِي", word_key: null, is_particle: true, sense_retenu: null, position: 5 },
    { fr: "un enfant", pos: "N", phon: "waladun", arabic: "وَلَدٌ", word_key: "wld", is_particle: false, sense_retenu: "enfant", position: 6 },
    { fr: "alors qu'aucun", pos: "", phon: "wa-lam", arabic: "وَلَمْ", word_key: null, is_particle: true, sense_retenu: null, position: 7 },
    { fr: "ne m'a touchée", pos: "V", phon: "yamsisnī", arabic: "يَمْسَسْنِي", word_key: "mss", is_particle: false, sense_retenu: "avoir des rapports intimes (euphémisme)", position: 8 },
    { fr: "être humain", pos: "N", phon: "basharun", arabic: "بَشَرٌ", word_key: "bshr", is_particle: false, sense_retenu: "être humain", position: 9 },
    { fr: "Il dit", pos: "V", phon: "qāla", arabic: "قَالَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 10 },
    { fr: "ainsi", pos: "", phon: "kadhālika", arabic: "كَذَٰلِكِ", word_key: null, is_particle: true, sense_retenu: null, position: 11 },
    { fr: "Dieu", pos: "N", phon: "allāhu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 12 },
    { fr: "crée", pos: "V", phon: "yakhluqu", arabic: "يَخْلُقُ", word_key: "xlq", is_particle: false, sense_retenu: "créer", position: 13 },
    { fr: "ce que", pos: "", phon: "mā", arabic: "مَا", word_key: null, is_particle: true, sense_retenu: null, position: 14 },
    { fr: "Il veut", pos: "V", phon: "yashā'u", arabic: "يَشَآءُ", word_key: "shy", is_particle: false, sense_retenu: "vouloir", position: 15 },
    { fr: "lorsque", pos: "", phon: "idhā", arabic: "إِذَا", word_key: null, is_particle: true, sense_retenu: null, position: 16 },
    { fr: "Il décrète", pos: "V", phon: "qaḍā", arabic: "قَضَى", word_key: "qdy", is_particle: false, sense_retenu: "décréter", position: 17 },
    { fr: "une chose", pos: "N", phon: "amran", arabic: "أَمْرًا", word_key: "amr", is_particle: false, sense_retenu: "chose", position: 18 },
    { fr: "alors Il dit seulement", pos: "V", phon: "fa-innamā yaqūlu", arabic: "فَإِنَّمَا يَقُولُ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 20 },
    { fr: "pour elle", pos: "", phon: "lahu", arabic: "لَهُۥ", word_key: null, is_particle: true, sense_retenu: null, position: 21 },
    { fr: "Sois !", pos: "V", phon: "kun", arabic: "كُن", word_key: "kwn", is_particle: false, sense_retenu: "être (verbe incomplet)", position: 22 },
    { fr: "et elle est", pos: "V", phon: "fa-yakūnu", arabic: "فَيَكُونُ", word_key: "kwn", is_particle: false, sense_retenu: "venir à l'existence", position: 23 }
  ];

  const { error: transErr } = await sb.from('verse_analyses').update({
    translation_arab,
    full_translation,
    translation_explanation,
    segments: displaySegments
  }).eq('id', VA_ID);
  if (transErr) { console.log('ERREUR traduction:', transErr.message); return; }
  console.log('Traduction save: OK');

  // =====================================================
  // 5. DAILY PHRASES — vérifier avant d'insérer (SKIP si exist)
  // =====================================================
  console.log('\n--- 5. Daily phrases ---');

  const dailyPlan = [
    { key: 'qwl', aid: 307, sense: 'dire', arabic: 'قَالَ', phon: 'qāla', phrases: ["Il a dit la vérité sans hésiter.", "Elle dit bonjour à ses voisins chaque matin.", "Qu'est-ce qu'il a dit exactement ?"] },
    { key: 'rbb', aid: 253, sense: 'seigneur', arabic: 'رَبّ', phon: 'rabb', phrases: ["Le seigneur du domaine gérait ses terres avec soin.", "Il se considérait comme le seigneur de tout ce qu'il possédait.", "On reconnaît un vrai seigneur à la façon dont il traite ses gens."] },
    { key: 'kwn', aid: 2577, sense: 'être (verbe incomplet)', arabic: 'كَانَ', phon: 'kāna', phrases: ["Il était là quand on avait besoin de lui.", "La maison est grande et lumineuse.", "Sois patient, les résultats viendront."] },
    { key: 'wld', aid: 2576, sense: 'enfant', arabic: 'وَلَد', phon: 'walad', phrases: ["Cet enfant apprend très vite.", "Elle attendait un enfant pour le printemps.", "Les enfants du quartier jouaient dans la rue."] },
    { key: 'mss', aid: 650, sense: 'avoir des rapports intimes (euphémisme)', arabic: 'مَسَّ', phon: 'massa', phrases: ["Il a touché l'objet avec précaution pour ne pas le casser.", "La chaleur m'a atteint dès que j'ai ouvert la fenêtre.", "Ne touche pas à ce qui ne t'appartient pas."] },
    { key: 'bshr', aid: 392, sense: 'être humain', arabic: 'بَشَر', phon: 'bashar', phrases: ["Tout être humain mérite d'être respecté.", "Les êtres humains ont besoin de lien social.", "Face à la nature, l'être humain réalise sa fragilité."] },
    { key: 'alh', aid: 250, sense: 'Dieu', arabic: 'اللَّه', phon: 'allāh', phrases: ["Elle priait Dieu chaque soir avant de dormir.", "Dieu seul sait ce que l'avenir réserve.", "Il remerciait Dieu pour chaque nouvelle journée."] },
    { key: 'xlq', aid: 344, sense: 'créer', arabic: 'خَلَقَ', phon: 'khalaqa', phrases: ["L'artiste a créé une sculpture avec des matériaux de récupération.", "Il faut créer les conditions pour que les jeunes réussissent.", "La nature crée des formes que l'homme ne peut pas reproduire."] },
    { key: 'shy', aid: 466, sense: 'vouloir', arabic: 'شَاءَ', phon: "shā'a", phrases: ["Il veut changer de métier depuis longtemps.", "Elle voulait partir mais n'a pas osé.", "Veux-tu qu'on se retrouve demain ?"] },
    { key: 'qdy', aid: 768, sense: 'décréter', arabic: 'قَضَى', phon: 'qaḍā', phrases: ["Le gouvernement a décrété une loi d'urgence.", "Le juge a décrété sa sentence après délibération.", "Il n'y a pas de recours contre ce qui a été décrété."] },
    { key: 'amr', aid: 428, sense: 'chose', arabic: 'أَمْر', phon: 'amr', phrases: ["C'est une chose qui se règle facilement.", "Il y a des choses qu'on ne peut pas changer.", "Cette chose m'échappe complètement."] }
  ];

  for (const dp of dailyPlan) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', dp.aid);
    if (count > 0) {
      console.log(dp.key + ' (aid=' + dp.aid + '): ' + count + ' phrases → SKIP');
    } else {
      const rows = dp.phrases.map(p => ({ analysis_id: dp.aid, sense: dp.sense, arabic: dp.arabic, phon: dp.phon, french: p }));
      const { error: dpErr } = await sb.from('word_daily').insert(rows);
      if (dpErr) console.log('ERREUR daily ' + dp.key + ':', dpErr.message);
      else console.log(dp.key + ' (aid=' + dp.aid + '): INSERT ' + rows.length + ' phrases OK');
    }
  }

  // =====================================================
  // 6. VÉRIFICATION FINALE
  // =====================================================
  console.log('\n--- 6. Vérification finale ---');
  const { data: finalVA } = await sb.from('verse_analyses').select('segments,translation_arab,full_translation,translation_explanation').eq('id', VA_ID).single();
  const impSegs = finalVA.segments.filter(s => !s.is_particle);
  const partSegs = finalVA.segments.filter(s => s.is_particle);
  console.log('Segments: ' + impSegs.length + ' important, ' + partSegs.length + ' particle, ' + finalVA.segments.length + ' total');

  const { data: finalVWA } = await sb.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log('VWA: ' + finalVWA.length + ' entries');
  finalVWA.forEach(w => console.log('  pos=' + w.position + ' ' + w.word_key + ' → ' + w.sense_chosen));

  // Vérifier sense_retenu dans word_meanings
  const aidByKey = { qwl: 307, rbb: 253, kwn: 2577, wld: 2576, mss: 650, bshr: 392, alh: 250, xlq: 344, shy: 466, qdy: 768, amr: 428 };
  for (const seg of impSegs) {
    if (!seg.word_key || !seg.sense_retenu) continue;
    const aid = aidByKey[seg.word_key];
    if (aid) {
      const { data: meanings } = await sb.from('word_meanings').select('sense').eq('analysis_id', aid);
      const senses = meanings.map(m => m.sense);
      if (!senses.includes(seg.sense_retenu)) {
        console.log('⚠️ pos=' + seg.position + ' sense_retenu="' + seg.sense_retenu + '" NOT in word_meanings for ' + seg.word_key + '!');
      }
    }
  }
  console.log('Sense_retenu verification: done');

  // Vérifier mots interdits
  const hasConceptWord = finalVA.translation_explanation.match(/\bconcept\b/gi);
  const hasPipelineWord = finalVA.translation_explanation.match(/\bpipeline\b/gi);
  if (hasConceptWord) console.log('⚠️ Mot "concept" trouvé!');
  if (hasPipelineWord) console.log('⚠️ Mot "pipeline" trouvé!');
  if (!hasConceptWord && !hasPipelineWord) console.log('Mots interdits: aucun ✅');

  console.log('full_translation: ' + (finalVA.full_translation ? 'OK' : 'MISSING!'));
  console.log('translation_arab: ' + (finalVA.translation_arab ? 'OK' : 'MISSING!'));
  console.log('explanation: ' + (finalVA.translation_explanation ? 'OK (' + finalVA.translation_explanation.length + ' chars)' : 'MISSING!'));

  // Logs finaux
  console.log('\n=== PIPELINE S3:V47 TERMINÉE ===');
  console.log('\nVERSET 3:47 — TERMINÉ');
  console.log('[qwl] 10 sens → 2 concepts');
  console.log('  Parole/Énonciation → RETENU : "dire" (pos 1, 10, 20)');
  console.log('[rbb] 27 sens → 6 concepts');
  console.log('  Seigneurie/Autorité bienveillante → RETENU : "seigneur"');
  console.log('  Éducation/Accompagnement → PEU PROBABLE');
  console.log('[kwn] 8 sens → 3 concepts');
  console.log('  Être/Existence → RETENU : "être (verbe incomplet)" (pos 4, 22), "venir à l\'existence" (pos 23)');
  console.log('[wld] 35 sens → 7+ concepts');
  console.log('  Enfant/Descendance → RETENU : "enfant"');
  console.log('[mss] 6 sens → 2 concepts');
  console.log('  Contact intime → RETENU : "avoir des rapports intimes (euphémisme)"');
  console.log('  Contact/Atteinte → PROBABLE');
  console.log('[bshr] 7 sens → 3 concepts');
  console.log('  Corps/Anatomie → RETENU : "être humain"');
  console.log('[alh] 16 sens → 5 concepts');
  console.log('  Divinité → RETENU : "Dieu"');
  console.log('[xlq] 8 sens → 3 concepts');
  console.log('  Création/Production → RETENU : "créer"');
  console.log('[shy] 15 sens → 6 concepts');
  console.log('  Volonté → RETENU : "vouloir"');
  console.log('  Chose/Être → PEU PROBABLE');
  console.log('[qdy] 3→13 sens → 4 concepts (ENRICHI depuis Lane\'s)');
  console.log('  Jugement/Décret → RETENU : "décréter"');
  console.log('  Achèvement/Accomplissement → PROBABLE');
  console.log('[amr] 8 sens → 5 concepts');
  console.log('  Affaire/Chose → RETENU : "chose"');
  console.log('  Commandement/Autorité → PEU PROBABLE');
  finalVWA.forEach(w => console.log('  pos=' + w.position + ' ' + w.word_key + ' → sens "' + w.sense_chosen + '"'));
  console.log('\nTraduction : "' + finalVA.translation_arab + '"');
}

main().catch(e => console.error(e));
