// Pipeline S89 v16-20 — Étapes 3-4 : Axes + Traduction
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    console.log(`  UPD VWA ${word_key} v${verse_id} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  ERR VWA ${word_key}: ${error.message}`);
    else console.log(`  NEW VWA ${word_key} v${verse_id} id=${data.id}`);
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    console.log(`  UPD VA v${verse_id} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log(`  ERR VA: ${error.message}`);
    else console.log(`  NEW VA v${verse_id} id=${data.id}`);
  }
}

(async () => {
  console.log('=== PIPELINE S89 v16-20 — ÉTAPES 3-4 ===\n');

  // ============================================================
  // VERSET 16 (6009): وَأَمَّآ إِذَا مَا ٱبْتَلَىٰهُ فَقَدَرَ عَلَيْهِ رِزْقَهُۥ فَيَقُولُ رَبِّىٓ أَهَـٰنَنِ
  // "Et quand il l'éprouve en lui mesurant sa subsistance, il dit : Mon seigneur m'a humilié"
  // ============================================================
  console.log('--- VERSET 89:16 ---');

  // qdr (id=373) — فَقَدَرَ = verbe accompli
  await upsertVWA(6009, 'qdr', 'mesurer', {
    sense_chosen: 'mesurer',
    concept_chosen: 'Mesure/Détermination',
    concepts: {
      'Mesure/Détermination': {
        status: 'retenu',
        senses: ['mesurer', 'déterminer', 'décréter', 'destin', 'valeur'],
        axe1_verset: "Le verbe qadara avec la préposition ʿalayhi (sur lui) signifie « il a mesuré/restreint pour lui ». Le champ lexical associe l'épreuve (ibtalā) à la mesure de la subsistance (qadara rizqahu). Le verset forme un parallèle avec v15 : en v15, l'épreuve est par l'abondance ; en v16, l'épreuve est par la mesure/restriction. La mesure est l'acte de fixer une quantité déterminée — pas un excès, pas un manque absolu, mais une portion mesurée.",
        axe2_voisins: "Le verset 15 montre l'épreuve par l'honneur et le bienfait. Le verset 16 montre l'épreuve par la restriction. L'être humain réagit mal dans les deux cas : en v15 il dit « mon seigneur m'a honoré » (conclusion erronée), en v16 il dit « mon seigneur m'a humilié » (conclusion erronée aussi). La mesure de la subsistance n'est pas une humiliation mais une autre forme d'épreuve.",
        axe3_sourate: "La sourate 89 montre que l'être humain interprète mal les événements de sa vie. La mesure de la subsistance est présentée comme une épreuve, au même titre que l'abondance. Le thème est que ni l'abondance ni la restriction ne sont en soi des signes d'honneur ou d'humiliation — ce sont des tests de comportement.",
        axe4_coherence: "Le Coran utilise la racine q-d-r pour la mesure et la détermination dans de nombreux versets. En 65:7, « celui dont la subsistance est mesurée (qudira), qu'il dépense de ce que Dieu lui a donné ». La mesure divine de la subsistance est un thème récurrent — elle n'est ni une punition ni une récompense mais un acte de détermination précise.",
        axe5_frequence: "La mesure de la subsistance est un test pour le khalifa : comment réagit-il quand ses ressources sont limitées ? Le khalifa qui comprend sa mission sait que la restriction est une épreuve, pas une humiliation. La mesure implique la précision et l'intention — ce n'est pas un hasard mais une détermination calculée.",
        proof_ctx: "Le sens « Mesure/Détermination » est retenu car qadara ʿalayhi rizqahu signifie « il a mesuré/restreint sa subsistance ». La distinction avec « Puissance/Capacité » est que la mesure est un acte de fixation d'une quantité précise, tandis que la puissance est un attribut de celui qui agit. Ici, le verbe décrit un acte (mesurer la subsistance), pas un attribut (être puissant)."
      },
      'Puissance/Capacité': {
        status: 'probable',
        senses: ['pouvoir', 'être capable'],
        axe1_verset: "La puissance pourrait s'appliquer si qadara signifie « il a exercé sa puissance sur lui concernant sa subsistance ». Le champ lexical serait celui de l'autorité qui exerce son pouvoir sur la provision. Cependant, la construction qadara ʿalayhi rizqahu est idiomatique et signifie spécifiquement « restreindre la subsistance », pas « exercer le pouvoir sur ».",
        axe2_voisins: "La puissance comme sens principal rendrait le verset redondant avec v13-14 (le seigneur qui verse le fouet et qui est à l'affût). Le passage v15-16 change de registre — il ne parle plus du pouvoir du seigneur mais de son mode d'épreuve. La mesure est plus cohérente avec ce changement de registre.",
        axe3_sourate: "La sourate a déjà établi la puissance du seigneur dans les versets précédents. Répéter l'idée de puissance ici serait redondant. Le texte introduit un nouveau thème : comment l'être humain interprète les événements de sa vie.",
        axe4_coherence: "Le Coran utilise qadara ʿalā dans le sens de « restreindre, mesurer » dans plusieurs versets (65:7, 13:26). Cette construction est distincte de qadara au sens de « pouvoir » (sans ʿalā + objet de subsistance). L'usage coranique distingue clairement les deux sens.",
        axe5_frequence: "La puissance comme attribut du seigneur est importante mais n'est pas le thème ici. Le verset parle de la réaction de l'être humain, pas des attributs du seigneur. La mesure est l'acte qui provoque la réaction, la puissance serait l'attribut qui le permet.",
        proof_ctx: "Le sens « Puissance/Capacité » est probable en théorie (la racine q-d-r porte les deux sens) mais la construction grammaticale qadara ʿalayhi rizqahu est spécifique au sens de « mesurer/restreindre la subsistance ». La puissance est un attribut permanent, la mesure est un acte ponctuel — le verset décrit un acte d'épreuve, pas un attribut."
      },
      'Sens isolé/Marmite': { status: 'nul', senses: ['marmite'], proof_ctx: "La marmite n'a aucun rapport avec le contexte." }
    }
  }, 3);

  // rzq (id=284) — رِزْقَهُۥ = nom accusatif en idafa
  await upsertVWA(6009, 'rzq', 'subsistance', {
    sense_chosen: 'subsistance',
    concept_chosen: 'Subsistance/Provision',
    concepts: {
      'Subsistance/Provision': {
        status: 'retenu',
        senses: ['pourvoir', 'nourrir', 'subsistance', 'moyens de vivre', 'part'],
        axe1_verset: "Le mot rizqahu (sa subsistance) est le complément d'objet de qadara — c'est la subsistance qui est mesurée. Le champ lexical associe l'épreuve, la mesure et la subsistance. La subsistance est ce dont l'être humain a besoin pour vivre — c'est l'objet concret de l'épreuve. Quand la subsistance est mesurée (restreinte), l'être humain conclut qu'il est humilié.",
        axe2_voisins: "Le verset 15 parle de l'honneur et du bienfait (abondance). Le verset 16 parle de la restriction de la subsistance (mesure). La subsistance est le pendant concret du bienfait : en v15, les bienfaits sont donnés en abondance ; en v16, la subsistance est mesurée avec restriction. Les versets 17-20 montrent les conséquences de cette mauvaise interprétation : l'être humain ne partage pas.",
        axe3_sourate: "La sourate 89 montre que l'être humain a un rapport problématique avec les biens matériels. La subsistance est au cœur de cette problématique — c'est à travers la gestion de la subsistance que l'être humain révèle sa nature (v17-20 : ne pas honorer l'orphelin, dévorer l'héritage, aimer les biens).",
        axe4_coherence: "Le Coran utilise la racine r-z-q massivement (123 occurrences) pour la subsistance et la provision. En 2:3, les croyants « dépensent de ce que Nous leur avons pourvu ». En 11:6, « il n'y a pas de créature sur terre dont la subsistance n'incombe à Dieu ». La subsistance coranique n'est pas un salaire mérité mais une provision donnée qui implique une responsabilité de partage.",
        axe5_frequence: "La subsistance est l'outil principal du khalifa — c'est avec ses ressources qu'il accomplit sa mission de justice. La restriction de la subsistance n'est pas une punition mais un test : le khalifa qui a peu doit quand même partager et ne pas interpréter la restriction comme une humiliation. Le verset enseigne que la subsistance n'est pas un indicateur de valeur personnelle.",
        proof_ctx: "Le seul groupe de sens pertinent est « Subsistance/Provision ». Le mot rizq dans ce contexte désigne clairement les moyens de vivre de l'être humain."
      }
    }
  }, 4);

  // hwn (id=1303) — أَهَـٰنَنِ = verbe accompli forme IV
  await upsertVWA(6009, 'hwn', 'humiliation', {
    sense_chosen: 'humiliation',
    concept_chosen: 'Humiliation/Mépris',
    concepts: {
      'Humiliation/Mépris': {
        status: 'retenu',
        senses: ['humiliation', 'être méprisé'],
        axe1_verset: "Le verbe ahānani (forme IV = il m'a humilié) est la conclusion erronée de l'être humain face à la restriction de sa subsistance. Le champ lexical du verset (éprouver, mesurer, subsistance, humilier) montre la réaction psychologique : l'être humain interprète la restriction comme une humiliation personnelle. La forme IV est causative — « il m'a FAIT devenir humble/humilié ».",
        axe2_voisins: "En v15, l'être humain dit « mon seigneur m'a honoré » (akramani). En v16, il dit « mon seigneur m'a humilié » (ahānani). Les deux conclusions sont erronées et symétriques — honneur et humiliation sont les deux interprétations fausses que l'être humain fait des épreuves. Le verset 17 commence par « Non ! » (kallā), rejetant les deux conclusions.",
        axe3_sourate: "La sourate 89 critique l'interprétation matérialiste de la vie : l'être humain mesure sa valeur à ses biens. L'humiliation ressentie quand les biens diminuent est le symptôme de cette vision erronée. Le thème est que la valeur humaine ne se mesure pas à la subsistance mais au comportement (v17-20).",
        axe4_coherence: "Le Coran utilise la racine h-w-n pour l'humiliation dans plusieurs versets. L'humiliation est toujours liée à un comportement moral, pas à une situation matérielle. En 25:69, le châtiment est « multiplié et il y demeurera humilié ». L'humiliation coranique est la conséquence d'actes, pas d'une situation économique. Le verset 89:16 critique précisément cette confusion.",
        axe5_frequence: "L'humiliation comme interprétation de la restriction est le piège du khalifa : croire que les biens sont un signe de valeur et que leur absence est un signe de déchéance. Le khalifa doit comprendre que sa mission ne dépend pas de ses ressources mais de son comportement envers les autres (v17-20).",
        proof_ctx: "Le sens « Humiliation/Mépris » est retenu car ahānani signifie « il m'a humilié ». La distinction avec « Facilité/Légèreté » (hawwana = rendre facile/léger) est que l'humiliation est une perte de dignité et de statut, tandis que la facilité est un allègement de charge. La forme IV ahāna est spécifiquement « rendre humilié, abaisser », pas « rendre facile »."
      },
      'Facilité/Légèreté': {
        status: 'peu_probable',
        senses: ['être facile'],
        axe1_verset: "La facilité pourrait théoriquement s'appliquer si ahānani signifiait « il m'a rendu les choses faciles/légères ». Mais le contexte du verset est négatif — l'être humain se plaint, il ne se réjouit pas. La facilité serait une plainte bizarre dans ce contexte de restriction.",
        axe2_voisins: "Le parallèle avec v15 (akramani = il m'a honoré) montre que v16 doit contenir le contraire : humilié, pas facilité. L'honneur et l'humiliation sont les deux pôles de la réaction humaine, pas l'honneur et la facilité.",
        axe3_sourate: "La sourate critique l'interprétation matérialiste. La facilité n'est pas un objet de plainte — l'humiliation oui. Le thème de la sourate est la valeur personnelle perçue à travers les biens, ce qui correspond à l'humiliation, pas à la facilité.",
        axe4_coherence: "Le Coran distingue clairement hawwana (rendre facile) de ahāna (humilier). Dans le contexte d'une plainte de l'être humain face à la restriction, le sens est clairement l'humiliation.",
        axe5_frequence: "La facilité n'est pas pertinente pour la mission du khalifa dans ce contexte de plainte face à la restriction.",
        proof_ctx: "Le sens « Facilité/Légèreté » est peu probable car la construction du verset (plainte de l'être humain face à la restriction) impose le sens d'humiliation. La facilité serait incohérente avec le ton de plainte."
      }
    }
  }, 6);

  // VA v16
  await upsertVA(6009, {
    translation_arab: "Et quand il l'éprouve en lui mesurant sa subsistance, il dit : Mon seigneur m'a humilié",
    full_translation: "Mais quand Il l'éprouve en lui restreignant sa subsistance, il dit : «Mon Seigneur m'a avili»",
    segments: [
      { fr: "Et quand", pos: "particle", phon: "wa-ammā iḏā mā", arabic: "وَأَمَّآ إِذَا مَا", is_particle: true, position: 0 },
      { fr: "l'éprouve", pos: "verb_accompli_VIII", phon: "ibtalāhu", arabic: "ٱبْتَلَىٰهُ", word_key: "blw", sense_retenu: "éprouver", position: 1 },
      { fr: "en lui mesurant", pos: "verb_accompli", phon: "fa-qadara ʿalayhi", arabic: "فَقَدَرَ عَلَيْهِ", word_key: "qdr", sense_retenu: "mesurer", position: 2 },
      { fr: "sa subsistance", pos: "noun_idafa", phon: "rizqahu", arabic: "رِزْقَهُۥ", word_key: "rzq", sense_retenu: "subsistance", position: 3 },
      { fr: "il dit :", pos: "verb_inaccompli", phon: "fa-yaqūlu", arabic: "فَيَقُولُ", word_key: "qwl", sense_retenu: "dire", position: 4 },
      { fr: "Mon seigneur", pos: "noun_idafa", phon: "rabbī", arabic: "رَبِّىٓ", is_particle: true, position: 5 },
      { fr: "m'a humilié", pos: "verb_accompli_IV", phon: "ahānani", arabic: "أَهَـٰنَنِ", word_key: "hwn", sense_retenu: "humiliation", position: 6 }
    ],
    translation_explanation: `§DEMARCHE§
La structure est parallèle au verset 15 : **wa-ammā iḏā mā** (et quand) introduit la deuxième condition. Le sujet (son seigneur) est implicite — sous-entendu depuis le verset 15. Le verbe **ibtalāhu** (l'éprouve) est le même qu'en v15, confirmant que les deux situations sont des épreuves. Le verbe **qadara** (قَدَرَ) est au passé (accompli), de la racine q-d-r (mesurer, déterminer). Avec la préposition **ʿalayhi** (sur lui) et l'objet **rizqahu** (sa subsistance), la construction signifie « il a mesuré/restreint pour lui sa subsistance ». Le verbe **ahānani** (أَهَـٰنَنِ) est à la forme IV de h-w-n — une forme causative qui signifie « il m'a rendu humble/humilié ». Le passage de l'accompli (qadara) à l'inaccompli (yaqūlu) montre que la mesure est un acte ponctuel mais la réaction est habituelle.

§JUSTIFICATION§
**mesurant** — Le sens retenu est « Mesure/Détermination ». Le mot « mesurer » est choisi car il traduit l'acte de fixer une quantité déterminée. L'alternative « restreindre » (Hamidullah) interprète le résultat — le texte dit « mesurer », pas « restreindre ». La mesure peut impliquer une restriction, mais le mot arabe est neutre : il dit que la subsistance est fixée à une mesure précise.

**subsistance** — Le sens retenu est « Subsistance/Provision ». Le mot « subsistance » est choisi car il désigne les moyens de vivre au quotidien. L'alternative « provision » implique un stockage, alors que rizq est ce qui est donné en continu.

**humilié** — Le sens retenu est « Humiliation/Mépris ». Le mot « humilié » est choisi car il traduit la forme IV ahāna (rendre humble/bas). L'alternative « avili » (Hamidullah) a été écartée car « avilir » implique une dégradation morale, alors que « humilier » peut être un ressenti subjectif — ce qui correspond mieux au contexte (l'être humain SE SENT humilié, mais le texte dit ensuite « Non ! »).

§CRITIQUE§
Hamidullah traduit qadara par « restreindre » — ce choix interprète le résultat de la mesure plutôt que l'acte lui-même. La racine q-d-r signifie « mesurer, déterminer » — la restriction est une conséquence possible de la mesure, pas son sens premier. En traduisant par « mesurer », on préserve l'idée que la subsistance est déterminée avec précision, pas simplement diminuée. Cette nuance change la perspective : la restriction n'est pas un manque arbitraire mais une mesure calculée.`
  });

  console.log('VERSET 89:16 — TERMINÉ');
  console.log('  qdr → sens "Mesure/Détermination" → mot "mesurant"');
  console.log('  rzq → sens "Subsistance/Provision" → mot "subsistance"');
  console.log('  hwn → sens "Humiliation/Mépris" → mot "humilié"');
  console.log('  Traduction : "Et quand il l\'éprouve en lui mesurant sa subsistance, il dit : Mon seigneur m\'a humilié"\n');

  // ============================================================
  // VERSET 17 (6010): كَلَّا ۖ بَل لَّا تُكْرِمُونَ ٱلْيَتِيمَ
  // "Non ! Vous n'honorez pas l'orphelin"
  // ============================================================
  console.log('--- VERSET 89:17 ---');

  // krm (id=1470) — تُكْرِمُونَ = verbe inaccompli forme IV, 2e pers. pluriel
  await upsertVWA(6010, 'krm', 'honorable', {
    sense_chosen: 'honorable',
    concept_chosen: 'Générosité/Noblesse',
    concepts: {
      'Générosité/Noblesse': {
        status: 'retenu',
        senses: ['généreux', 'noble', 'honorable'],
        axe1_verset: "Le verset dit « vous n'honorez pas l'orphelin ». Le verbe tukrimūna (forme IV = honorer) est nié par lā. Le champ lexical associe le refus (kallā = Non !), la négation (lā) et l'orphelin comme objet de l'honneur refusé. Le verbe est à l'inaccompli (présent), indiquant une habitude continue — ce n'est pas un oubli ponctuel mais un comportement systématique.",
        axe2_voisins: "En v15, le seigneur honore (akramahu) l'être humain. En v17, l'être humain n'honore pas (lā tukrimūna) l'orphelin. Le parallèle est structurel : l'honneur reçu du seigneur n'est pas transmis. Les versets 18-20 poursuivent avec d'autres comportements négatifs : ne pas nourrir le pauvre, dévorer l'héritage, aimer les biens. Le refus d'honorer l'orphelin est le premier d'une série de reproches.",
        axe3_sourate: "La sourate 89 passe du diagnostic (v15-16 : l'être humain interprète mal les épreuves) au reproche (v17-20 : voici ce que vous faites réellement). Le refus d'honorer l'orphelin est le symptôme de la vision matérialiste : si les biens déterminent la valeur, alors l'orphelin (qui n'a rien) ne mérite pas d'honneur.",
        axe4_coherence: "Le Coran insiste massivement sur l'honneur dû à l'orphelin. En 93:9, « quant à l'orphelin, ne le repousse pas ». En 107:2, « c'est celui qui repousse l'orphelin ». La racine k-r-m dans le contexte de l'orphelin indique un honneur actif — pas juste ne pas maltraiter, mais activement rendre noble et digne. Le Coran fait de l'orphelin un indicateur de la santé morale de la société.",
        axe5_frequence: "Honorer l'orphelin est un acte fondamental de la mission du khalifa. L'orphelin est celui qui a perdu son protecteur — le khalifa doit prendre le relais. Le verset montre que le premier échec du khalifa est de ne pas transmettre l'honneur reçu aux plus vulnérables. La générosité n'est pas un luxe mais une obligation.",
        proof_ctx: "Le sens « Générosité/Noblesse » est retenu. La forme IV tukrimūna signifie « vous honorez/rendez noble ». Le sens « Fruit/Abondance » (la vigne) est nul dans ce contexte de relation sociale."
      },
      'Fruit/Abondance': { status: 'nul', senses: ['vigne'], proof_ctx: "La vigne n'a aucun rapport avec le contexte d'honorer l'orphelin." }
    }
  }, 3);

  // ytm (id=664) — ٱلْيَتِيمَ = nom défini accusatif
  await upsertVWA(6010, 'ytm', 'orphelin', {
    sense_chosen: 'orphelin',
    concept_chosen: 'Orphelinat/Solitude',
    concepts: {
      'Orphelinat/Solitude': {
        status: 'retenu',
        senses: ['être orphelin', 'orphelin', 'unique'],
        axe1_verset: "L'orphelin (al-yatīm) est l'objet direct du verbe « honorer ». Le champ lexical associe le refus d'honorer à l'orphelin — celui qui n'a pas de protecteur. L'orphelin est défini par al-, désignant l'orphelin comme catégorie connue et identifiable. La racine y-t-m signifie « être seul, sans compagnon » — l'orphelin est celui qui est resté seul après la perte de son père.",
        axe2_voisins: "L'orphelin en v17 est le premier d'une série de vulnérables : l'orphelin (v17), le pauvre (v18). Les versets 19-20 montrent ce que les gens font au lieu d'honorer les vulnérables : ils dévorent l'héritage et accumulent les biens. L'orphelin et le pauvre sont les indicateurs de la santé sociale — si la société les néglige, c'est qu'elle a échoué.",
        axe3_sourate: "La sourate 89 oppose la puissance des peuples passés à leur échec moral. L'orphelin est le test ultime de la société : les peuples puissants (Ad, Thamoud, Pharaon) avaient les moyens d'honorer les orphelins mais ne l'ont pas fait. Le reproche s'adresse maintenant aux contemporains du texte.",
        axe4_coherence: "Le Coran mentionne l'orphelin dans de nombreux versets (2:83, 2:177, 2:215, 4:2, 4:6, 4:10, 4:36, 6:152, 17:34, 76:8, 89:17, 90:15, 93:6, 93:9, 107:2). La protection de l'orphelin est une constante coranique — c'est un des actes les plus fondamentaux attendus de la communauté. L'orphelin est la mesure de la justice sociale.",
        axe5_frequence: "L'orphelin est au cœur de la mission du khalifa. Le khalifa remplace le protecteur absent — c'est l'expression la plus directe de la responsabilité sociale. Le verset montre que la première obligation du khalifa est d'honorer les plus vulnérables, pas d'accumuler des biens.",
        proof_ctx: "Le seul groupe de sens pertinent est « Orphelinat/Solitude ». Le mot al-yatīm désigne spécifiquement l'orphelin — celui qui a perdu son père. Le sens « unique » (une perle yatīma = unique) est nul dans ce contexte social."
      }
    }
  }, 4);

  // VA v17
  await upsertVA(6010, {
    translation_arab: "Non ! Vous n'honorez pas l'orphelin",
    full_translation: "Mais non! C'est vous qui n'êtes pas généreux envers les orphelins",
    segments: [
      { fr: "Non !", pos: "particle", phon: "kallā", arabic: "كَلَّا", is_particle: true, position: 0 },
      { fr: "Plutôt", pos: "particle", phon: "bal", arabic: "بَل", is_particle: true, position: 1 },
      { fr: "vous n'honorez pas", pos: "verb_inaccompli_IV_neg", phon: "lā tukrimūna", arabic: "لَّا تُكْرِمُونَ", word_key: "krm", sense_retenu: "honorable", position: 2 },
      { fr: "l'orphelin", pos: "noun_def", phon: "al-yatīm", arabic: "ٱلْيَتِيمَ", word_key: "ytm", sense_retenu: "orphelin", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
La particule **kallā** (كَلَّا) est un rejet catégorique — elle rejette les deux conclusions des versets 15 et 16 (« mon seigneur m'a honoré » et « mon seigneur m'a humilié »). La particule **bal** (بَل) signifie « plutôt, au contraire » et introduit la vraie raison du reproche. Le verbe **lā tukrimūna** (لَّا تُكْرِمُونَ) est à l'inaccompli (présent), forme IV de k-r-m, nié par lā. La forme IV signifie « rendre honorable, honorer ». Le passage du singulier (l'être humain, v15-16) au pluriel (vous, v17-20) élargit le reproche : ce n'est plus un individu mais la société entière qui est interpellée. Le mot **al-yatīm** (ٱلْيَتِيمَ) est au singulier défini, désignant l'orphelin comme catégorie.

§JUSTIFICATION§
**Non !** — Le mot kallā est une interjection de rejet total. Le choix « Non ! » est direct et catégorique. L'alternative « Mais non ! » (Hamidullah) adoucit le rejet avec « mais ».

**honorez** — Le sens retenu est « Générosité/Noblesse ». Le verbe « honorer » traduit la forme IV tukrimūna. Hamidullah traduit par « n'êtes pas généreux envers » — cette périphrase est plus longue et moins directe. Le texte utilise un seul verbe (tukrimūna), pas une expression composée.

**l'orphelin** — Le sens retenu est « Orphelinat/Solitude ». Le texte arabe dit al-yatīm (singulier), Hamidullah traduit par « les orphelins » (pluriel) — le singulier arabe a ici une valeur générique (l'orphelin en tant que catégorie), mais la traduction au singulier est plus fidèle.

§CRITIQUE§
Hamidullah traduit « C'est vous qui n'êtes pas généreux envers les orphelins ». Cette formulation ajoute « C'est vous qui » (mise en relief) et « généreux envers » (périphrase pour tukrimūna). Le texte arabe est plus simple et plus direct : « vous n'honorez pas l'orphelin ». La nuance entre « honorer » et « être généreux envers » est significative : honorer implique la reconnaissance de la dignité, être généreux implique seulement un don matériel. L'étymologie de k-r-m pointe vers la noblesse et l'honneur, pas juste la générosité financière.`
  });

  console.log('VERSET 89:17 — TERMINÉ');
  console.log('  krm → sens "Générosité/Noblesse" → mot "honorez"');
  console.log('  ytm → sens "Orphelinat/Solitude" → mot "orphelin"');
  console.log('  Traduction : "Non ! Vous n\'honorez pas l\'orphelin"\n');

  // ============================================================
  // VERSET 18 (6011): وَلَا تَحَـٰٓضُّونَ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ
  // "Et vous ne vous incitez pas à nourrir le pauvre"
  // ============================================================
  console.log('--- VERSET 89:18 ---');

  // hdd2 (id=2590) — تَحَـٰٓضُّونَ = verbe inaccompli forme VI
  await upsertVWA(6011, 'hdd2', 'inciter', {
    sense_chosen: 'inciter',
    concept_chosen: 'Incitation/Encouragement',
    concepts: {
      'Incitation/Encouragement': {
        status: 'retenu',
        senses: ['inciter', 'encourager', 'pousser à', 'exhorter'],
        axe1_verset: "Le verbe taḥāḍḍūna (forme VI = s'inciter mutuellement) est nié par lā. Le champ lexical associe la négation de l'incitation mutuelle à la nourriture du pauvre. La forme VI est réciproque — elle implique que les gens devraient se pousser les uns les autres à nourrir le pauvre. L'absence d'incitation mutuelle montre que ce n'est pas juste un individu qui échoue mais toute la communauté qui ne se mobilise pas.",
        axe2_voisins: "Le verset 17 reproche le refus d'honorer l'orphelin (acte individuel). Le verset 18 reproche le refus de s'inciter mutuellement (acte collectif). La gradation est significative : d'abord l'échec individuel, puis l'échec collectif. Les versets 19-20 poursuivent avec les comportements actifs de prédation (dévorer l'héritage, accumuler les biens).",
        axe3_sourate: "La sourate 89 montre l'échec de la responsabilité sociale. L'incitation mutuelle à nourrir le pauvre est l'expression de la solidarité communautaire — son absence montre que la société a abandonné sa mission collective. Le thème de la sourate est la responsabilité face au pouvoir et aux biens.",
        axe4_coherence: "Le Coran utilise la même expression en 107:3 : « et n'incite pas à la nourriture du pauvre ». La racine ḥ-ḍ-ḍ signifie « pousser, inciter avec insistance ». La forme VI (réciproque) en 89:18 ajoute la dimension collective — ce n'est pas juste inciter mais s'inciter mutuellement. Le Coran fait de la nourriture du pauvre un indicateur de la foi (107:1-3).",
        axe5_frequence: "L'incitation mutuelle à nourrir le pauvre est un acte fondamental de la civilisation du khalifa. Le khalifa ne se contente pas de nourrir le pauvre lui-même — il crée une culture où tout le monde se pousse mutuellement à le faire. L'absence d'incitation montre l'échec de la mission collective.",
        proof_ctx: "Le seul groupe de sens pertinent est « Incitation/Encouragement ». La forme VI taḥāḍḍūna signifie « vous vous incitez mutuellement ». Aucun autre sens de cette racine ne convient."
      }
    }
  }, 2);

  // taem (id=1726) — طَعَامِ = nom génitif en idafa
  await upsertVWA(6011, 'taem', 'nourriture', {
    sense_chosen: 'nourriture',
    concept_chosen: 'Gustation/Expérience',
    concepts: {
      'Gustation/Expérience': {
        status: 'retenu',
        senses: ['goûter', 'manger', 'nourriture', 'saveur'],
        axe1_verset: "Le mot ṭaʿām (nourriture) est au génitif, complément de la préposition ʿalā (sur, à propos de). Le champ lexical associe l'incitation et la nourriture du pauvre — le reproche porte sur le refus de se mobiliser pour nourrir les nécessiteux. La nourriture est le besoin le plus fondamental — ne pas s'inciter à la fournir au pauvre est l'échec le plus basique de la solidarité.",
        axe2_voisins: "Le verset 17 parle de l'honneur (dimension sociale). Le verset 18 parle de la nourriture (dimension matérielle). L'orphelin a besoin d'honneur, le pauvre a besoin de nourriture. Les deux versets couvrent les besoins fondamentaux : dignité et survie. Les versets 19-20 montrent que les ressources existent (héritage, biens) mais sont accaparées.",
        axe3_sourate: "La nourriture du pauvre est un test concret de la responsabilité sociale. La sourate 89 oppose l'accumulation des biens (v19-20) au refus de nourrir les nécessiteux (v18). La nourriture est l'acte de partage le plus élémentaire — son refus est le signe le plus clair de l'échec moral.",
        axe4_coherence: "Le Coran associe la nourriture du pauvre à la foi dans de nombreux versets (76:8-9, 90:14-16, 107:3). La racine ṭ-ʿ-m signifie fondamentalement « goûter, faire l'expérience par le goût ». La nourriture (ṭaʿām) est ce dont on fait l'expérience gustative — c'est le besoin le plus concret et le plus immédiat.",
        axe5_frequence: "Nourrir le pauvre est un acte central de la mission du khalifa. Le verset montre que la responsabilité n'est pas seulement individuelle (nourrir soi-même) mais collective (s'inciter mutuellement). La civilisation du khalifa se mesure à sa capacité à mobiliser la communauté pour les plus vulnérables.",
        proof_ctx: "Le seul groupe de sens pertinent est « Gustation/Expérience ». Le mot ṭaʿām signifie « nourriture » — ce dont on se nourrit."
      }
    }
  }, 3);

  // skn (id=462) — ٱلْمِسْكِينِ = nom défini génitif
  await upsertVWA(6011, 'skn', 'pauvre', {
    sense_chosen: 'pauvre',
    concept_chosen: 'Sens isolé/Pauvre',
    concepts: {
      'Sens isolé/Pauvre': {
        status: 'retenu',
        senses: ['pauvre'],
        axe1_verset: "Le pauvre (al-miskīn) est le bénéficiaire de la nourriture que la communauté devrait fournir. Le champ lexical associe l'incitation mutuelle, la nourriture et le pauvre en un triangle de responsabilité sociale. Le miskīn est défini par al-, désignant le pauvre comme catégorie connue. La racine s-k-n signifie « être calme, immobile » — le miskīn est celui qui est immobilisé par le manque, qui ne peut pas bouger de sa condition.",
        axe2_voisins: "Le verset 17 mentionne l'orphelin, le verset 18 mentionne le pauvre. Ces deux catégories sont les plus vulnérables de la société. L'orphelin a perdu son protecteur (solitude), le pauvre a perdu ses moyens de vivre (immobilité). Les deux ont besoin de l'intervention de la communauté.",
        axe3_sourate: "La sourate 89 critique l'accumulation des biens (v19-20) en face du refus de nourrir le pauvre (v18). Le pauvre est la preuve que les biens ne sont pas partagés — son existence est le symptôme de l'échec collectif. Le thème de la sourate est la responsabilité face aux ressources.",
        axe4_coherence: "Le Coran utilise miskīn dans de nombreux versets pour désigner le nécessiteux (2:83, 2:177, 4:8, 4:36, 9:60, 58:4, 68:24, 69:34, 74:44, 76:8, 89:18, 90:16, 107:3). Le miskīn est distinct du faqīr (pauvre absolu) — le miskīn a quelques ressources mais insuffisantes. Le Coran fait du miskīn un indicateur permanent de la santé sociale.",
        axe5_frequence: "Le pauvre est au cœur de la mission du khalifa. La civilisation juste est celle où le pauvre est nourri et honoré, pas celle où les biens sont accumulés par quelques-uns. Le verset montre que le refus de nourrir le pauvre est aussi grave que le refus d'honorer l'orphelin.",
        proof_ctx: "Le sens « Sens isolé/Pauvre » est le seul pertinent. Le miskīn désigne le nécessiteux. Les autres sens de la racine s-k-n (habiter, être calme) ne s'appliquent pas directement ici, bien que l'étymologie révèle que le pauvre est « immobilisé » par le manque."
      },
      'Habitation/Demeure': { status: 'nul', senses: ['habiter', 'demeurer'], proof_ctx: "L'habitation n'est pas pertinente quand le mot est miskīn (le pauvre), pas maskan (habitation)." },
      'Calme/Repos': { status: 'nul', senses: ['être calme', "s'apaiser", 'se reposer'], proof_ctx: "Le calme et le repos ne s'appliquent pas au mot miskīn dans ce contexte." }
    }
  }, 4);

  // VA v18
  await upsertVA(6011, {
    translation_arab: "Et vous ne vous incitez pas à nourrir le pauvre",
    full_translation: "qui ne vous incitez pas mutuellement à nourrir le pauvre",
    segments: [
      { fr: "Et", pos: "conj", phon: "wa", arabic: "وَ", is_particle: true, position: 0 },
      { fr: "vous ne vous incitez pas", pos: "verb_inaccompli_VI_neg", phon: "lā taḥāḍḍūna", arabic: "لَا تَحَـٰٓضُّونَ", word_key: "hdd2", sense_retenu: "inciter", position: 1 },
      { fr: "à", pos: "prep", phon: "ʿalā", arabic: "عَلَىٰ", is_particle: true, position: 2 },
      { fr: "la nourriture", pos: "noun_idafa", phon: "ṭaʿām", arabic: "طَعَامِ", word_key: "taem", sense_retenu: "nourriture", position: 3 },
      { fr: "du pauvre", pos: "noun_def", phon: "al-miskīn", arabic: "ٱلْمِسْكِينِ", word_key: "skn", sense_retenu: "pauvre", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **lā taḥāḍḍūna** (لَا تَحَـٰٓضُّونَ) est à la forme VI de ḥ-ḍ-ḍ, une forme réciproque qui signifie « s'inciter mutuellement ». La négation lā indique que cette incitation mutuelle n'a pas lieu. Le verbe est à l'inaccompli (présent), indiquant une habitude continue. La construction **ʿalā ṭaʿāmi** (sur la nourriture) utilise la préposition ʿalā au sens de « à propos de, concernant ». Le mot **ṭaʿām** (طَعَامِ) est au génitif (complément de ʿalā), en construction possessive avec **al-miskīn** (ٱلْمِسْكِينِ). La phrase dit littéralement « vous ne vous incitez pas mutuellement au sujet de la nourriture du pauvre ».

§JUSTIFICATION§
**vous ne vous incitez pas** — Le sens retenu est « Incitation/Encouragement ». La forme VI est traduite par « se inciter mutuellement » car elle exprime la réciprocité. L'alternative « inciter » (sans la réciprocité) perd la dimension collective — le texte dit que les gens ne se poussent PAS les uns les autres.

**nourriture** — Le sens retenu est « Gustation/Expérience ». Le mot « nourriture » traduit ṭaʿām. L'alternative « repas » est trop spécifique. L'alternative « nourrir » (Hamidullah) transforme le nom en verbe, ce qui est légitime mais change la structure.

**pauvre** — Le sens retenu est « Sens isolé/Pauvre ». Le mot « pauvre » traduit miskīn. L'alternative « nécessiteux » est plus technique. L'alternative « démuni » est acceptable mais moins courant.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Hamidullah traduit « qui ne vous incitez pas mutuellement à nourrir le pauvre » — c'est fidèle. La seule nuance est que notre traduction conserve la structure nominale « la nourriture du pauvre » plutôt que l'infinitif « nourrir le pauvre ». Le texte arabe dit ṭaʿām (nourriture, nom) pas iṭʿām (nourrissage, masdar).`
  });

  console.log('VERSET 89:18 — TERMINÉ');
  console.log('  hdd2 → sens "Incitation/Encouragement" → mot "incitez"');
  console.log('  taem → sens "Gustation/Expérience" → mot "nourriture"');
  console.log('  skn → sens "Sens isolé/Pauvre" → mot "pauvre"');
  console.log('  Traduction : "Et vous ne vous incitez pas à nourrir le pauvre"\n');

  // ============================================================
  // VERSET 19 (6012): وَتَأْكُلُونَ ٱلتُّرَاثَ أَكْلًا لَّمًّا
  // "Et vous mangez l'héritage en rassemblant tout"
  // ============================================================
  console.log('--- VERSET 89:19 ---');

  // akl (id=947) — تَأْكُلُونَ = verbe inaccompli
  await upsertVWA(6012, 'akl', 'manger', {
    sense_chosen: 'manger',
    concept_chosen: 'Alimentation/Consommation',
    concepts: {
      'Alimentation/Consommation': {
        status: 'retenu',
        senses: ['manger', 'consommer', 'dévorer', 'nourriture'],
        axe1_verset: "Le verbe ta'kulūna (vous mangez) a pour objet al-turāṯ (l'héritage). Le champ lexical associe l'action de manger à l'héritage — l'image est celle de la consommation vorace des biens hérités. « Manger l'héritage » est une métaphore pour s'accaparer les biens des autres. Le complément aklan lammā (un manger rassemblant) précise la manière : on mange en rassemblant tout, sans laisser de reste.",
        axe2_voisins: "Le verset 18 reproche le refus de nourrir le pauvre. Le verset 19 reproche la consommation avide de l'héritage. Le contraste est saisissant : on refuse de donner à manger au pauvre, mais on dévore l'héritage d'autrui. Le verset 20 poursuit avec l'amour excessif des biens. La séquence v17-20 forme une spirale de comportements de plus en plus graves.",
        axe3_sourate: "La sourate 89 critique le rapport matérialiste aux biens. Manger l'héritage est l'expression la plus crue de ce matérialisme — il ne s'agit plus de posséder mais de consumer, d'absorber les biens des autres. Le verbe « manger » est plus fort que « prendre » — il implique une absorption totale et irréversible.",
        axe4_coherence: "Le Coran utilise akala (manger) métaphoriquement pour la consommation injuste des biens dans de nombreux versets. En 4:10, « ceux qui mangent les biens des orphelins injustement ne font que remplir leurs ventres de feu ». En 2:188, « ne mangez pas vos biens entre vous de manière injuste ». L'usage coranique d'akala pour les biens est toujours négatif — c'est l'accaparement destructeur.",
        axe5_frequence: "Manger l'héritage est l'antithèse de la mission du khalifa. Le khalifa gère les biens avec justice et les redistribue. Celui qui mange l'héritage détruit la chaîne de transmission et prive les ayants droit. Le verset montre que l'accumulation vorace est incompatible avec la mission de justice.",
        proof_ctx: "Le sens « Alimentation/Consommation » est retenu car le verbe ta'kulūna signifie littéralement « vous mangez ». La distinction avec « Destruction/Érosion » (consumer par le feu) est que la consommation ici est une métaphore d'accaparement, pas de destruction physique. Le feu consume pour détruire, l'être humain mange pour accumuler."
      },
      'Destruction/Érosion': {
        status: 'probable',
        senses: ['consumer (le feu mange)', 'user'],
        axe1_verset: "La destruction pourrait s'appliquer si « manger l'héritage » signifie « le détruire, le faire disparaître ». Le champ lexical du verset (héritage, rassembler tout) est compatible avec l'idée de faire disparaître les biens. Cependant, le complément lammā (en rassemblant tout) indique plutôt l'accaparement que la destruction.",
        axe2_voisins: "La destruction des biens hérités est cohérente avec le thème de la corruption (v12). Mais le verset 20 parle de l'amour des biens, ce qui suggère que les biens sont conservés (aimés), pas détruits. L'accaparement est plus cohérent avec la suite que la destruction.",
        axe3_sourate: "La sourate critique l'accumulation, pas la destruction. Les peuples passés construisaient (piliers, roche taillée) — le reproche n'est pas qu'ils ont détruit mais qu'ils ont transgressé. De même, le reproche ici est l'accaparement, pas la destruction.",
        axe4_coherence: "Le Coran utilise akala pour les biens au sens d'accaparement injuste, pas de destruction. Le feu qui « mange » (consume) est un sens différent. Ici, le sujet est humain et l'objet est un héritage — c'est l'accaparement.",
        axe5_frequence: "La destruction des biens hérités serait un gaspillage, pas un accaparement. Le verset critique la cupidité (manger + rassembler tout), pas le gaspillage.",
        proof_ctx: "Le sens « Destruction/Érosion » est probable car « manger » peut impliquer faire disparaître. Mais le complément lammā (en rassemblant tout) oriente vers l'accaparement vorace plutôt que la destruction. La nuance est entre consommer pour accumuler (alimentation) et consommer pour détruire (érosion)."
      }
    }
  }, 1);

  // wrṯ (id=1480) — ٱلتُّرَاثَ = nom défini accusatif
  await upsertVWA(6012, 'wrṯ', 'héritage', {
    sense_chosen: 'héritage',
    concept_chosen: 'Héritage/Succession',
    concepts: {
      'Héritage/Succession': {
        status: 'retenu',
        senses: ['hériter', 'héritage', 'succession', 'héritier'],
        axe1_verset: "L'héritage (al-turāṯ) est l'objet de la consommation vorace. Le champ lexical associe le fait de manger et l'héritage — les biens laissés par les morts sont dévorés par les vivants. L'héritage est défini par al-, indiquant que c'est un phénomène connu et identifiable. La racine w-r-ṯ signifie « succéder à quelqu'un, recevoir ce qu'il a laissé ».",
        axe2_voisins: "Le verset 18 montre le refus de nourrir le pauvre, le verset 19 montre la consommation de l'héritage. Le lien est : les biens qui pourraient nourrir les pauvres sont au contraire accaparés par ceux qui héritent. Le verset 20 confirme : l'amour des biens est le moteur de cet accaparement.",
        axe3_sourate: "L'héritage est le symbole de la transmission intergénérationnelle — il devrait servir à perpétuer la justice, pas à enrichir les héritiers. La sourate 89 montre que les peuples passés ont laissé un « héritage » de transgression et de corruption, pas de justice. Le reproche porte sur l'usage des biens hérités.",
        axe4_coherence: "Le Coran traite de l'héritage avec une attention particulière (4:7-12, 4:176). Les règles de succession coranique visent à distribuer les biens équitablement. Le verset 89:19 critique ceux qui contournent ces règles en « mangeant l'héritage en rassemblant tout » — c'est-à-dire en accaparant la part des autres héritiers, notamment les orphelins et les femmes.",
        axe5_frequence: "L'héritage juste est un pilier de la civilisation du khalifa. Le khalifa veille à ce que les biens soient transmis équitablement, pas accaparés par les plus forts. Le verset dénonce la prédation sur les biens des vulnérables — l'exact contraire de la mission de justice.",
        proof_ctx: "Le seul groupe de sens pertinent est « Héritage/Succession ». Le mot al-turāṯ (nom verbal de w-r-ṯ) désigne l'héritage comme ensemble de biens transmis."
      }
    }
  }, 2);

  // lmm (id=473) — لَّمًّا = masdar/adjectif (complément de manière)
  await upsertVWA(6012, 'lmm', 'rassembler', {
    sense_chosen: 'rassembler',
    concept_chosen: 'Rassemblement/Collection',
    concepts: {
      'Rassemblement/Collection': {
        status: 'retenu',
        senses: ['rassembler', 'collecter'],
        axe1_verset: "Le mot lammā est un masdar (nom verbal) utilisé comme complément de manière : aklan lammā = « un manger rassemblant ». Le champ lexical associe la consommation de l'héritage à la manière de le faire : en rassemblant tout, sans rien laisser. Le rassemblement qualifie la voracité — on ne prend pas une part, on prend tout. C'est l'avidité totale.",
        axe2_voisins: "Le verset 17 reproche le refus d'honorer (un seul orphelin). Le verset 18 reproche le refus de nourrir (un seul pauvre). Le verset 19 montre que les biens sont au contraire rassemblés pour soi — tout est pris, rien n'est donné. Le contraste entre le refus de donner (v17-18) et l'avidité de prendre (v19) est maximal.",
        axe3_sourate: "La sourate 89 montre une progression dans le reproche : passivité (ne pas honorer, ne pas nourrir) puis activité (manger l'héritage en rassemblant tout, aimer les biens). Le rassemblement total est le symptôme de la cupidité — on ne se contente pas de ne pas donner, on prend activement tout.",
        axe4_coherence: "Le Coran utilise la racine l-m-m dans un contexte de rassemblement total. En d'autres versets, le rassemblement est aussi lié au jugement (le jour où les gens seront rassemblés). Ici, le rassemblement est celui des biens — accaparer tout sans rien laisser aux autres.",
        axe5_frequence: "Le rassemblement total des biens est l'antithèse de la redistribution juste. Le khalifa distribue, le cupide rassemble. Le verset montre que le problème n'est pas la possession mais l'accumulation totale (lamm) qui ne laisse rien aux autres.",
        proof_ctx: "Le sens « Rassemblement/Collection » est retenu car lammā signifie « en rassemblant tout ». Le sens « Faute/Péché » (péché léger, lamam) est nul dans ce contexte — le mot est utilisé comme adjectif de manière pour la consommation, pas comme nom de péché."
      },
      'Faute/Péché': {
        status: 'nul',
        senses: ['péché léger'],
        proof_ctx: "Le péché léger (lamam) est un sens différent de la même racine. Ici, le mot lammā qualifie la manière de manger l'héritage (en rassemblant tout), pas un type de faute."
      }
    }
  }, 3);

  // VA v19
  await upsertVA(6012, {
    translation_arab: "Et vous mangez l'héritage en rassemblant tout",
    full_translation: "et vous dévorez l'héritage avec une avidité vorace",
    segments: [
      { fr: "Et", pos: "conj", phon: "wa", arabic: "وَ", is_particle: true, position: 0 },
      { fr: "vous mangez", pos: "verb_inaccompli", phon: "ta'kulūna", arabic: "تَأْكُلُونَ", word_key: "akl", sense_retenu: "manger", position: 1 },
      { fr: "l'héritage", pos: "noun_def", phon: "al-turāṯ", arabic: "ٱلتُّرَاثَ", word_key: "wrṯ", sense_retenu: "héritage", position: 2 },
      { fr: "d'un manger", pos: "masdar", phon: "aklan", arabic: "أَكْلًا", is_particle: true, position: 3 },
      { fr: "qui rassemble tout", pos: "adj", phon: "lammā", arabic: "لَّمًّا", word_key: "lmm", sense_retenu: "rassembler", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **ta'kulūna** (تَأْكُلُونَ) est à l'inaccompli (présent), deuxième personne du pluriel, de la racine a-k-l (manger). Il est utilisé métaphoriquement pour l'accaparement des biens. L'objet **al-turāṯ** (ٱلتُّرَاثَ) est un nom verbal défini de la racine w-r-ṯ (hériter), signifiant « l'héritage ». Le complément absolu **aklan lammā** (أَكْلًا لَّمًّا) est une construction arabe où le masdar (aklan = un manger) reprend le verbe pour en préciser la manière. Le mot **lammā** (لَّمًّا) vient de la racine l-m-m (rassembler) et qualifie la manière de manger : « un manger qui rassemble tout ». La phrase dit littéralement « vous mangez l'héritage d'un manger qui rassemble tout ».

§JUSTIFICATION§
**mangez** — Le sens retenu est « Alimentation/Consommation ». Le mot « manger » est choisi car il traduit littéralement ta'kulūna. L'alternative « dévorer » (Hamidullah) ajoute une intensité absente du verbe arabe — c'est le complément lammā (rassembler tout) qui ajoute l'intensité, pas le verbe lui-même.

**l'héritage** — Le sens retenu est « Héritage/Succession ». Le mot « héritage » traduit al-turāṯ. Pas d'alternative pertinente.

**qui rassemble tout** — Le sens retenu est « Rassemblement/Collection ». L'expression « qui rassemble tout » traduit lammā. Hamidullah traduit « avec une avidité vorace » — cette traduction interprète le résultat (l'avidité) au lieu de traduire le mot (rassembler). La racine l-m-m signifie « rassembler, collecter » — le texte dit que vous mangez en rassemblant tout, pas que vous mangez avec avidité. La nuance est importante : « rassembler tout » décrit un comportement (tout prendre), « avidité vorace » décrit un état émotionnel.

§CRITIQUE§
Hamidullah traduit « vous dévorez l'héritage avec une avidité vorace ». Deux mots sont interprétés : « dévorer » pour akala (manger) et « avidité vorace » pour lammā (rassembler tout). Le texte arabe est plus factuel : il décrit un comportement (manger en rassemblant tout) sans le qualifier émotionnellement (avidité, voracité). L'étymologie pure montre un acte de rassemblement total des biens, pas une émotion. La traduction courante ajoute un jugement émotionnel que le texte ne contient pas — le texte se contente de décrire le comportement et laisse le lecteur juger.`
  });

  console.log('VERSET 89:19 — TERMINÉ');
  console.log('  akl → sens "Alimentation/Consommation" → mot "mangez"');
  console.log('  wrṯ → sens "Héritage/Succession" → mot "héritage"');
  console.log('  lmm → sens "Rassemblement/Collection" → mot "rassemble"');
  console.log('  Traduction : "Et vous mangez l\'héritage en rassemblant tout"\n');

  // ============================================================
  // VERSET 20 (6013): وَتُحِبُّونَ ٱلْمَالَ حُبًّا جَمًّا
  // "Et vous aimez les biens d'un amour abondant"
  // ============================================================
  console.log('--- VERSET 89:20 ---');

  // hbb (id=930) — تُحِبُّونَ = verbe inaccompli forme IV
  await upsertVWA(6013, 'hbb', 'aimer', {
    sense_chosen: 'aimer',
    concept_chosen: 'Amour/Affection',
    concepts: {
      'Amour/Affection': {
        status: 'retenu',
        senses: ['aimer', 'affection', 'préférer'],
        axe1_verset: "Le verbe tuḥibbūna (forme IV = vous aimez) a pour objet al-māl (les biens). Le complément absolu ḥubban jammā (d'un amour abondant) précise l'intensité de cet amour. Le champ lexical associe l'amour et les biens matériels en une relation problématique. L'amour est ici un attachement excessif — pas l'amour noble mais l'amour possessif et accumulateur.",
        axe2_voisins: "Le verset 19 montre l'accaparement (manger l'héritage en rassemblant tout). Le verset 20 en donne la cause : l'amour excessif des biens. La séquence v17-20 est une spirale : refus de donner (v17-18) → accaparement actif (v19) → amour des biens comme motivation profonde (v20). L'amour des biens est la racine du mal décrit dans toute cette section.",
        axe3_sourate: "La sourate 89 oppose la puissance des peuples passés à leur transgression, puis critique le comportement humain face aux biens. L'amour des biens est le diagnostic final : c'est parce que l'être humain aime les biens d'un amour abondant qu'il ne partage pas, qu'il accapare et qu'il interprète l'abondance comme un honneur.",
        axe4_coherence: "Le Coran critique l'amour des biens dans plusieurs versets. En 3:14, « on a embelli aux gens l'amour des désirs : femmes, enfants, trésors d'or et d'argent ». En 100:8, « et certes il est dans l'amour des biens intense (shadīd) ». La racine ḥ-b-b désigne un attachement profond — quand cet attachement se porte sur les biens matériels, il devient un obstacle à la mission.",
        axe5_frequence: "L'amour des biens est le piège principal du khalifa. Le khalifa qui aime les biens d'un amour abondant ne peut pas les redistribuer avec justice. Le verset montre que le problème n'est pas la possession des biens mais l'attachement excessif qui empêche le partage. La mission du khalifa exige de gérer les biens sans en être esclave.",
        proof_ctx: "Le sens « Amour/Affection » est le seul pertinent. Le sens « Graine/Semence » (ḥabb = grain) est nul dans ce contexte de sentiment. Le sens « Lien » (ḥabl = corde) est nul également."
      },
      'Graine/Semence': { status: 'nul', senses: ['graine', 'grain'], proof_ctx: "La graine n'a aucun rapport avec le contexte d'un amour des biens." },
      'Lien': { status: 'nul', senses: ['corde'], proof_ctx: "La corde n'a aucun rapport avec le contexte." }
    }
  }, 1);

  // mwl (id=1148) — ٱلْمَالَ = nom défini accusatif
  await upsertVWA(6013, 'mwl', 'biens', {
    sense_chosen: 'biens',
    concept_chosen: 'Richesse/Biens',
    concepts: {
      'Richesse/Biens': {
        status: 'retenu',
        senses: ['richesse', 'biens', 'fortune', 'être riche'],
        axe1_verset: "Le mot al-māl (les biens) est l'objet de l'amour excessif. Le champ lexical associe l'amour et les biens dans une relation d'attachement. Les biens sont définis par al-, désignant les biens en général — pas un bien particulier mais la richesse comme catégorie. La racine m-w-l signifie « posséder des biens, être riche ».",
        axe2_voisins: "Le verset 19 mentionne l'héritage (turāṯ = biens reçus des morts). Le verset 20 mentionne les biens (māl = richesse en général). La progression va du particulier (héritage) au général (biens). L'amour des biens englobe l'accaparement de l'héritage — c'est le comportement général dont v19 est un cas particulier.",
        axe3_sourate: "La sourate 89 critique le rapport matérialiste aux biens tout au long de la section v15-20. Les biens sont le sujet central : ils sont interprétés comme honneur (v15), leur absence est interprétée comme humiliation (v16), ils ne sont pas partagés (v17-18), ils sont accaparés (v19) et aimés excessivement (v20). Le māl est le fil conducteur de toute la critique.",
        axe4_coherence: "Le Coran utilise māl dans de nombreux versets pour les biens matériels. En 18:46, « les biens et les enfants sont la parure de la vie d'ici-bas ». En 2:177, la vraie piété inclut « donner les biens malgré l'amour qu'on leur porte ». Le Coran ne condamne pas la possession des biens mais l'attachement excessif qui empêche le partage.",
        axe5_frequence: "Les biens sont l'outil du khalifa — il les gère pour accomplir sa mission de justice. L'amour excessif des biens transforme l'outil en obstacle. Le verset montre que la relation saine aux biens est la gestion responsable, pas l'accumulation passionnée.",
        proof_ctx: "Le seul groupe de sens pertinent est « Richesse/Biens ». Le mot al-māl désigne l'ensemble des biens matériels possédés."
      }
    }
  }, 2);

  // jmm (id=2640) — جَمًّا = masdar/adjectif
  await upsertVWA(6013, 'jmm', 'beaucoup', {
    sense_chosen: 'beaucoup',
    concept_chosen: 'Abondance/Accumulation',
    concepts: {
      'Abondance/Accumulation': {
        status: 'retenu',
        senses: ['être abondant', 'devenir nombreux', "s'accumuler", 'remplir avec excès', 'beaucoup', 'péché abondant'],
        axe1_verset: "Le mot jammā est un masdar/adjectif qui qualifie l'amour : ḥubban jammā = « un amour abondant ». Le champ lexical associe l'amour, les biens et l'abondance. L'abondance qualifie ici le sentiment, pas les biens — c'est l'amour lui-même qui est en quantité excessive. La racine j-m-m signifie « être abondant, s'accumuler » — l'amour des biens s'accumule jusqu'à devenir excessif.",
        axe2_voisins: "Le verset 19 décrit un « manger qui rassemble tout » (aklan lammā). Le verset 20 décrit un « amour abondant » (ḥubban jammā). Les deux versets utilisent le même procédé : un complément absolu qui qualifie l'intensité du comportement. Le rassemblement total (lammā) et l'abondance (jammā) sont les deux faces de la même cupidité.",
        axe3_sourate: "La sourate 89 utilise le motif de l'abondance dans toute la section : les peuples passés avaient une abondance de pouvoir (piliers, constructions), l'être humain est comblé de bienfaits (v15), et son amour des biens est abondant (v20). L'abondance elle-même n'est pas le problème — c'est l'attachement excessif à l'abondance qui est critiqué.",
        axe4_coherence: "Le Coran utilise jamm en 89:20 — c'est la seule occurrence de ce mot dans le Coran. D'après les sources étymologiques, jamm signifie « beaucoup, abondant ». Le Lane's cite spécifiquement ce verset : « ils aiment les biens d'un amour abondant ». Le sens d'accumulation et d'abondance est le sens premier de la racine.",
        axe5_frequence: "L'amour abondant des biens est le diagnostic du khalifa qui a échoué. La mission du khalifa exige une relation mesurée aux biens, pas un amour débordant. Le mot jammā (abondant) rappelle le sens premier de la racine : l'eau qui s'accumule dans un puits — l'amour des biens s'accumule de la même manière, inexorablement, si on ne le maîtrise pas.",
        proof_ctx: "Le sens « Abondance/Accumulation » est le seul pertinent. Les sens « Repos/Récupération » (faire reposer un cheval) et « Chevelure/Tête » (chevelure abondante) sont nuls dans ce contexte d'amour des biens. L'abondance qualifie ici l'intensité d'un sentiment, pas une quantité physique."
      },
      'Repos/Récupération': { status: 'nul', senses: ['se reposer', 'faire reposer un cheval', 'reposer le cœur'], proof_ctx: "Le repos n'a aucun rapport avec le contexte d'un amour abondant des biens." },
      'Chevelure/Tête': { status: 'nul', senses: ['chevelure abondante', 'crâne', 'parler indistinctement'], proof_ctx: "La chevelure n'a aucun rapport avec le contexte." },
      'Sens isolé/Herbage': { status: 'nul', senses: ['herbage abondant'], proof_ctx: "L'herbage n'a aucun rapport avec le contexte." }
    }
  }, 3);

  // VA v20
  await upsertVA(6013, {
    translation_arab: "Et vous aimez les biens d'un amour abondant",
    full_translation: "et vous aimez les richesses d'un amour sans bornes",
    segments: [
      { fr: "Et", pos: "conj", phon: "wa", arabic: "وَ", is_particle: true, position: 0 },
      { fr: "vous aimez", pos: "verb_inaccompli_IV", phon: "tuḥibbūna", arabic: "تُحِبُّونَ", word_key: "hbb", sense_retenu: "aimer", position: 1 },
      { fr: "les biens", pos: "noun_def", phon: "al-māl", arabic: "ٱلْمَالَ", word_key: "mwl", sense_retenu: "biens", position: 2 },
      { fr: "d'un amour", pos: "masdar", phon: "ḥubban", arabic: "حُبًّا", is_particle: true, position: 3 },
      { fr: "abondant", pos: "adj", phon: "jammā", arabic: "جَمًّا", word_key: "jmm", sense_retenu: "beaucoup", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **tuḥibbūna** (تُحِبُّونَ) est à l'inaccompli (présent), forme IV de ḥ-b-b, deuxième personne du pluriel. La forme IV a ici le sens de « aimer ». Le mot **al-māl** (ٱلْمَالَ) est à l'accusatif défini — les biens en général, pas un bien particulier. Le complément absolu **ḥubban jammā** (حُبًّا جَمًّا) reprend la racine du verbe (ḥubb = amour) pour en préciser l'intensité avec l'adjectif **jammā** (جَمًّا), de la racine j-m-m (être abondant). D'après les sources étymologiques, jamm signifie « beaucoup, en grande quantité ». Le Lane's cite spécifiquement ce verset et traduit : « un amour abondant ». La phrase dit littéralement « vous aimez les biens d'un amour abondant ».

§JUSTIFICATION§
**aimez** — Le sens retenu est « Amour/Affection ». Le mot « aimer » traduit tuḥibbūna. Pas d'alternative plus pertinente — « aimer » est le mot français le plus courant et le plus direct.

**les biens** — Le sens retenu est « Richesse/Biens ». Le mot « biens » est choisi car il est plus courant que « richesses ». L'alternative « richesses » (Hamidullah) implique une grande quantité, alors que māl désigne les biens possédés en général, quelle que soit leur quantité.

**abondant** — Le sens retenu est « Abondance/Accumulation ». Le mot « abondant » traduit jammā. L'alternative « sans bornes » (Hamidullah) interprète l'abondance comme une absence de limite. Le texte dit simplement « abondant, beaucoup » — c'est une quantité, pas une absence de frontière. L'alternative « intense » serait acceptable mais « abondant » est plus fidèle à la racine j-m-m (accumulation, quantité).

§CRITIQUE§
Hamidullah traduit « vous aimez les richesses d'un amour sans bornes ». Deux nuances : « richesses » vs « biens » et « sans bornes » vs « abondant ». La racine m-w-l (biens) est neutre en quantité — on peut avoir peu de māl. Traduire par « richesses » ajoute l'idée de grande quantité qui n'est pas dans le mot mais dans le complément (jammā). La racine j-m-m signifie « être abondant, s'accumuler » — « sans bornes » ajoute l'idée d'infini que le texte ne contient pas. Le texte dit que l'amour est en grande quantité (jammā), pas qu'il est illimité.`
  });

  console.log('VERSET 89:20 — TERMINÉ');
  console.log('  hbb → sens "Amour/Affection" → mot "aimez"');
  console.log('  mwl → sens "Richesse/Biens" → mot "biens"');
  console.log('  jmm → sens "Abondance/Accumulation" → mot "abondant"');
  console.log('  Traduction : "Et vous aimez les biens d\'un amour abondant"\n');

  console.log('=== PIPELINE S89 v16-20 TERMINÉ ===');
})();
