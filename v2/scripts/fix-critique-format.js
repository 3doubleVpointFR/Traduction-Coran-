// Fix §CRITIQUE§ format + remove "position X" + fix V36/V37 translation_arab
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  let fixCount = 0;

  // =====================================================
  // 1. V36 (va_id=691) — translation_arab = Arabic → French
  // =====================================================
  console.log('--- V36: Fix translation_arab ---');
  const { error: e36 } = await sb.from('verse_analyses').update({
    translation_arab: `Alors quand elle la mit au monde, elle dit : « Mon Seigneur, je l'ai mise au monde femelle » — et Dieu sait mieux ce qu'elle a mis au monde — « et le mâle n'est pas comme la femelle. Et je l'ai nommée Marie. Et je la place sous Ta protection, elle et sa descendance, contre le diable chassé. »`
  }).eq('id', 691);
  if (e36) console.log('ERREUR V36:', e36.message);
  else { console.log('✅ V36 translation_arab corrigée'); fixCount++; }

  // =====================================================
  // 2. V37 (va_id=692) — translation_arab = Arabic → French
  // =====================================================
  console.log('\n--- V37: Fix translation_arab ---');
  const { error: e37 } = await sb.from('verse_analyses').update({
    translation_arab: `Son Seigneur l'accepta alors d'une belle acceptation, et la fit croître d'une belle croissance. Et Il la confia à Zacharie. Chaque fois que Zacharie entrait auprès d'elle dans le sanctuaire, il trouvait auprès d'elle une provision. Il dit : « Ô Marie, d'où te vient ceci ? » Elle dit : « C'est de chez Dieu. Certes, Dieu pourvoit qui Il veut sans compte. »`
  }).eq('id', 692);
  if (e37) console.log('ERREUR V37:', e37.message);
  else { console.log('✅ V37 translation_arab corrigée'); fixCount++; }

  // =====================================================
  // 3. V42 (va_id=694) — Remove "position X" + add "choisie vs élue"
  // =====================================================
  console.log('\n--- V42: Fix position + critique ---');
  const { data: d42 } = await sb.from('verse_analyses').select('translation_explanation').eq('id', 694).single();
  let expl42 = d42.translation_explanation;

  // Fix JUSTIFICATION: remove "(position 7)" and "(position 9)"
  expl42 = expl42.replace('**choisie** (position 7) — Le sens retenu est', '**choisie** — Le sens retenu est');
  expl42 = expl42.replace('**choisie** (position 9) — Même sens et mot que la position 7.', '**choisie** (deuxième occurrence) — Même sens et mot que la première occurrence.');

  // Fix CRITIQUE: add "choisie vs élue"
  const newCritique42 = `§CRITIQUE§
**messagers vs anges** : les traductions courantes donnent « anges » pour al-malā'ika. Ce mot vient du grec angelos, passé au latin angelus, puis au français « ange ». Il est devenu un terme du vocabulaire chrétien désignant des êtres célestes ailés avec une hiérarchie propre. En arabe, malak désigne étymologiquement celui qui porte un message — un envoyé. Notre traduction donne « messagers » car elle restitue la fonction étymologique sans les connotations ajoutées par la tradition chrétienne. Ce choix change la perspective du verset : au lieu de créatures surnaturelles définies par leur nature, ce sont des envoyés définis par leur fonction de transmission du message de Dieu.

**choisie vs élue** : les traductions courantes donnent « élue » pour iṣṭafāki. Le mot « élue » appartient au registre soutenu et porte une connotation de prédestination — l'élu est choisi par une volonté supérieure de manière solennelle et définitive. La racine ṣ-f-w porte le sens de « purifier, sélectionner le meilleur ». Le mot « choisie » est plus courant en français et rend le même sens sans la charge théologique. La nuance est fine mais réelle : « choisie » est un acte de sélection, « élue » implique un statut permanent.

**ajout de « (Rappelle-toi) »** : les traductions courantes ajoutent « (Rappelle-toi) » ou « (Mentionne) » avant « quand les messagers dirent ». Ce mot n'existe pas dans le texte arabe — la particule iḏ signifie simplement « lorsque ». Cet ajout vient de commentaires classiques qui lisent un verbe sous-entendu (uḏkur) avant iḏ. Cette lecture transforme la narration en injonction adressée au Prophète, ajoutant un destinataire et un impératif absents du texte. Notre traduction rend le texte tel qu'il est : « Et lorsque... ».`;

  const critIdx42 = expl42.indexOf('§CRITIQUE§');
  expl42 = expl42.substring(0, critIdx42) + newCritique42;

  const { error: e42 } = await sb.from('verse_analyses').update({ translation_explanation: expl42 }).eq('id', 694);
  if (e42) console.log('ERREUR V42:', e42.message);
  else { console.log('✅ V42 position supprimée + choisie vs élue ajouté'); fixCount++; }

  // =====================================================
  // 4. V28 (va_id=680) — Remove "position X" references
  // =====================================================
  console.log('\n--- V28: Fix position refs ---');
  const { data: d28 } = await sb.from('verse_analyses').select('translation_explanation').eq('id', 680).single();
  let expl28 = d28.translation_explanation;

  // Replace natural language position references
  expl28 = expl28.replace(/Le même mot revient en position \d+ \(al-muʾminīna\) au/g, 'Le même mot revient plus loin dans le verset (al-muʾminīna) au');
  expl28 = expl28.replace(/La deuxième occurrence \(position \d+\)/g, 'La deuxième occurrence');
  expl28 = expl28.replace(/La troisième \(position \d+\)/g, 'La troisième occurrence');

  const { error: e28 } = await sb.from('verse_analyses').update({ translation_explanation: expl28 }).eq('id', 680);
  if (e28) console.log('ERREUR V28:', e28.message);
  else { console.log('✅ V28 positions supprimées'); fixCount++; }

  // =====================================================
  // 5. V20 (va_id=672) — Reformat critique with **vs**
  // =====================================================
  console.log('\n--- V20: Fix critique format ---');
  const { data: d20 } = await sb.from('verse_analyses').select('translation_explanation').eq('id', 672).single();
  let expl20 = d20.translation_explanation;

  const newCritique20 = `§CRITIQUE§
**remis vs soumis** : les traductions courantes donnent « je me suis soumis à Allah » pour aslamtu wajhiya li-llāhi. Ce choix vient de l'usage post-islamique de la racine s-l-m, où aslama est devenu synonyme de « devenir musulman ». Ça transforme le verset en une invitation à adopter une religion spécifique, alors que l'étymologie dit « remettre entièrement son visage à Dieu ». La nuance est importante : remettre est un acte volontaire de don total, tandis que « se soumettre » implique une contrainte. De même, la question « avez-vous embrassé l'Islam ? » devient « avez-vous remis ? » — une question sur l'engagement personnel, pas sur l'appartenance confessionnelle.

**sans écriture vs illettrés** : les traductions courantes donnent « illettrés » pour al-ummiyyīn — un terme qui porte un jugement de valeur. Notre choix « sans écriture » est plus neutre et colle au sens étymologique : ceux qui n'ont pas de livre révélé, par opposition à ceux qui en ont un.`;

  const critIdx20 = expl20.indexOf('§CRITIQUE§');
  expl20 = expl20.substring(0, critIdx20) + newCritique20;

  const { error: e20 } = await sb.from('verse_analyses').update({ translation_explanation: expl20 }).eq('id', 672);
  if (e20) console.log('ERREUR V20:', e20.message);
  else { console.log('✅ V20 critique reformatée'); fixCount++; }

  // =====================================================
  // 6. V31 (va_id=686) — Reformat critique with **vs**
  // =====================================================
  console.log('\n--- V31: Fix critique format ---');
  const { data: d31 } = await sb.from('verse_analyses').select('translation_explanation').eq('id', 686).single();
  let expl31 = d31.translation_explanation;

  const newCritique31 = `§CRITIQUE§
**fautes vs péchés** : les traductions courantes donnent « péchés » pour dhunūb. Ce choix vient du vocabulaire religieux chrétien où le péché est une offense contre Dieu qui nécessite une rédemption. Le Lane's donne dhanb comme « une faute, un acte blâmable, une transgression ». C'est un écart par rapport à la rectitude, pas nécessairement une offense théologique. Le mot « fautes » est plus proche de l'étymologie et plus neutre — il fait du pardon divin une couverture d'erreurs humaines plutôt qu'une absolution de péchés au sens chrétien.

Les autres mots du verset (aimer, suivre, pardonner) sont traduits de manière similaire dans les traductions courantes.`;

  const critIdx31 = expl31.indexOf('§CRITIQUE§');
  expl31 = expl31.substring(0, critIdx31) + newCritique31;

  const { error: e31 } = await sb.from('verse_analyses').update({ translation_explanation: expl31 }).eq('id', 686);
  if (e31) console.log('ERREUR V31:', e31.message);
  else { console.log('✅ V31 critique reformatée'); fixCount++; }

  // =====================================================
  // 7. V32 (va_id=684) — Reformat critique with **vs**
  // =====================================================
  console.log('\n--- V32: Fix critique format ---');
  const { data: d32 } = await sb.from('verse_analyses').select('translation_explanation').eq('id', 684).single();
  let expl32 = d32.translation_explanation;

  const newCritique32 = `§CRITIQUE§
**ceux qui rejettent vs infidèles** : les traductions courantes donnent « infidèles » ou « mécréants » pour al-kāfirīn. Ces termes viennent de la tradition théologique post-islamique qui a figé le kāfir en une identité confessionnelle (le non-musulman). Le Lane's donne kafara comme « couvrir, cacher, rejeter ». En traduisant par « ceux qui rejettent », le verset ne condamne pas une identité mais un acte : celui de se détourner face au message. Ça change le sens du verset — ce n'est plus « Dieu n'aime pas les non-musulmans » (condamnation identitaire) mais « Dieu n'aime pas ceux qui, face au message, choisissent le rejet » (conséquence d'un acte). Reconnaissons honnêtement que le Lane's inclut « unbeliever » parmi les sens de kāfir, mais cette extension est post-coranique — le sens premier reste « celui qui couvre/rejette ».

Les autres mots du verset (obéir, se détourner) sont traduits de manière similaire dans les traductions courantes.`;

  const critIdx32 = expl32.indexOf('§CRITIQUE§');
  expl32 = expl32.substring(0, critIdx32) + newCritique32;

  const { error: e32 } = await sb.from('verse_analyses').update({ translation_explanation: expl32 }).eq('id', 684);
  if (e32) console.log('ERREUR V32:', e32.message);
  else { console.log('✅ V32 critique reformatée'); fixCount++; }

  // =====================================================
  // 8. V33 (va_id=685) — Reformat + add "choisi vs élu"
  // =====================================================
  console.log('\n--- V33: Fix critique format + choisi vs élu ---');
  const { data: d33 } = await sb.from('verse_analyses').select('translation_explanation').eq('id', 685).single();
  let expl33 = d33.translation_explanation;

  const newCritique33 = `§CRITIQUE§
**choisi vs élu** : les traductions courantes donnent « élu » pour iṣṭafā. Le mot « élu » appartient au registre soutenu et porte une connotation de prédestination solennelle. La racine ṣ-f-w porte le sens de « purifier, sélectionner le meilleur ». Le mot « choisi » est plus courant en français et rend le même sens sans la charge théologique. La nuance est fine : « choisir » est un acte de sélection, « élire » implique un statut sacré et définitif.

**les mondes vs tout le monde** : les traductions courantes donnent « tout le monde » ou « l'humanité » pour al-ʿālamīn. Ce choix réduit la portée cosmique du verset. Le Lane's donne ʿālam comme « le monde, l'univers, l'ensemble des créatures ». Le pluriel ʿālamīn signifie « les mondes » — toute la création. En traduisant par « au-dessus des mondes » au lieu de « au-dessus de tout le monde », on comprend que le choix divin ne place pas ces lignées au-dessus des seuls humains, mais au-dessus de toute la création.`;

  const critIdx33 = expl33.indexOf('§CRITIQUE§');
  expl33 = expl33.substring(0, critIdx33) + newCritique33;

  const { error: e33 } = await sb.from('verse_analyses').update({ translation_explanation: expl33 }).eq('id', 685);
  if (e33) console.log('ERREUR V33:', e33.message);
  else { console.log('✅ V33 critique reformatée + choisi vs élu ajouté'); fixCount++; }

  // =====================================================
  // 9. V34 (va_id=683) — Reformat critique with **vs**
  // =====================================================
  console.log('\n--- V34: Fix critique format ---');
  const { data: d34 } = await sb.from('verse_analyses').select('translation_explanation').eq('id', 683).single();
  let expl34 = d34.translation_explanation;

  const newCritique34 = `§CRITIQUE§
**celui qui entend tout vs Audient** : les traductions courantes donnent « Audient et Omniscient » pour samīʿ ʿalīm. Ce sont des termes techniques inaccessibles au lecteur francophone moyen. « Audient » n'est pas un mot utilisé en français courant ; « Omniscient » est un latinisme emprunté à la théologie chrétienne. L'arabe utilise des mots simples : samīʿ (celui qui entend) et ʿalīm (celui qui sait). Notre traduction restitue cette simplicité : « celui qui entend tout, celui qui sait tout ».

Les autres mots du verset (descendance, les uns des autres) sont traduits de manière similaire dans les traductions courantes.`;

  const critIdx34 = expl34.indexOf('§CRITIQUE§');
  expl34 = expl34.substring(0, critIdx34) + newCritique34;

  const { error: e34 } = await sb.from('verse_analyses').update({ translation_explanation: expl34 }).eq('id', 683);
  if (e34) console.log('ERREUR V34:', e34.message);
  else { console.log('✅ V34 critique reformatée'); fixCount++; }

  // =====================================================
  // 10. V35 (va_id=687) — Remove numbered format, use **vs**
  // =====================================================
  console.log('\n--- V35: Fix critique format ---');
  const { data: d35 } = await sb.from('verse_analyses').select('translation_explanation').eq('id', 687).single();
  let expl35 = d35.translation_explanation;

  const newCritique35 = `§CRITIQUE§
**libéré vs en toute exclusivité** : Hamidullah traduit muḥarraran par « en toute exclusivité ». Notre traduction donne « libéré ». Le mot muḥarrar (participe passif de ḥarrara, forme II de ḥ-r-r) signifie littéralement « celui qui a été rendu libre ». Le Lane's donne ḥurriyya : « liberté, le fait d'être libre ». Hamidullah transforme la libération en exclusivité — « en toute exclusivité » ajoute l'idée que l'enfant est donné exclusivement à Dieu, alors que muḥarrar dit qu'il est libéré de toute attache mondaine. Honnêtement, le Lane's donne aussi nadhīra : « un enfant consacré au service d'un lieu de dévotion » — donc l'idée de service exclusif est présente dans la tradition de cette racine. Mais muḥarrar décrit l'état de l'enfant (libre), pas la destination du don.

**celui qui entend tout vs Audient** : même critique que pour le verset 34 — « Audient et Omniscient » sont des termes inaccessibles en français courant. Notre traduction « celui qui entend tout, celui qui sait tout » rend le même sens avec des mots simples.

**ajout invisible** : les traductions courantes ajoutent « (Rappelle-toi) » avant « quand la femme d'Imran dit ». Le texte dit iḏ (lorsque) sans injonction — même ajout que pour le verset 42.`;

  const critIdx35 = expl35.indexOf('§CRITIQUE§');
  expl35 = expl35.substring(0, critIdx35) + newCritique35;

  const { error: e35 } = await sb.from('verse_analyses').update({ translation_explanation: expl35 }).eq('id', 687);
  if (e35) console.log('ERREUR V35:', e35.message);
  else { console.log('✅ V35 critique reformatée'); fixCount++; }

  // =====================================================
  // 11. V40 (va_id=690) — Add **vs** format for the "Ô" note
  // =====================================================
  console.log('\n--- V40: Fix critique format ---');
  const { data: d40 } = await sb.from('verse_analyses').select('translation_explanation').eq('id', 690).single();
  let expl40 = d40.translation_explanation;

  const newCritique40 = `§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens pour ce verset.

**ajout invisible** : certaines traductions ajoutent « Ô » devant « mon Seigneur », alors que le texte arabe ne contient pas de yā dans ce verset — le texte dit simplement rabbī (mon Seigneur) sans interjection. Cet ajout est mineur et ne change pas le sens global du verset.`;

  const critIdx40 = expl40.indexOf('§CRITIQUE§');
  expl40 = expl40.substring(0, critIdx40) + newCritique40;

  const { error: e40 } = await sb.from('verse_analyses').update({ translation_explanation: expl40 }).eq('id', 690);
  if (e40) console.log('ERREUR V40:', e40.message);
  else { console.log('✅ V40 critique reformatée'); fixCount++; }

  console.log('\n=== CORRECTIONS TERMINÉES : ' + fixCount + ' versets corrigés ===');
}

main().catch(e => console.error(e));
