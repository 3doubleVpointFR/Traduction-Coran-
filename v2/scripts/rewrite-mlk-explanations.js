/**
 * Réécrit les §DEMARCHE§ / §JUSTIFICATION§ / §CRITIQUE§ des 4 versets
 * où mlk apparaît, pour défendre "anges" (au lieu de "messagers")
 * et éviter toute confusion avec rasūl.
 *
 * Versets : V39 (332), V42 (335), V45 (338), V80 (373).
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Texte étymologique court réutilisable
const ETY_NOTE =
  "La racine archaïque l-ʾ-k signifie « envoyer » — étymologiquement, un malak est un « envoyé ». Mais son référent dans l'arabe coranique est exclusivement une créature céleste agente de Dieu, distincte du rasūl (humain envoyé, racine r-s-l). Pour préserver cette distinction sémantique, on traduit malak par « ange ». Le mot français « ange » provient du grec angelos qui signifie aussi « messager » — la connotation étymologique est donc parallèle.";

// ===================== V39 (vid=332) =====================
const V39 = `§DEMARCHE§
Ce verset est la réponse à l'invocation de Zacharie (verset 38) qui demandait une bonne descendance. Les anges lui annoncent que Dieu lui accorde Yaḥyā, décrit par quatre qualités : confirmateur d'une parole de Dieu, chef, abstinent et prophète parmi les vertueux.

**fanādathu** (ils l'appelèrent) est un verbe accompli de la racine n-d-w, 3ème personne du féminin singulier (accord avec le collectif malāʾikah) avec le pronom suffixe hu (le). Le sens premier est appeler à voix haute, interpeller. La particule fa- (alors) établit la succession avec l'invocation du verset précédent. On traduit par « l'appelèrent ».

**al-malāʾikatu** (les anges) est le pluriel de malak de la racine m-l-k, au nominatif défini comme sujet du verbe nādā. ${ETY_NOTE} On traduit par « les anges ».

**allāha** (Dieu) est le nom propre de la divinité à l'accusatif après la particule anna (que). Il est le sujet réel de l'annonce : c'est Dieu qui donne la bonne nouvelle, les anges ne font que transmettre. On traduit par « Dieu ».

**les anges** — Le sens retenu est « ange » de la racine m-l-k. Le mot « anges » est choisi pour désigner les créatures célestes agentes de Dieu, distinctes du rasūl (humain envoyé). Bien que le malak soit étymologiquement un « envoyé » (racine l-ʾ-k = envoyer), son référent en arabe coranique est exclusivement céleste. L'alternative « messagers » est écartée pour préserver la distinction structurante avec rasūl.

**les vertueux** — Le sens retenu est « vertueux » de la racine ṣ-l-ḥ. Le mot « vertueux » est choisi car il décrit celui qui fait activement le bien. L'alternative « gens de bien » est acceptable mais « vertueux » est plus précis.

§CRITIQUE§
**anges vs « anges » (Hamidullah)** — Hamidullah donne aussi « anges » pour al-malāʾikah. Le choix est sémantiquement aligné. On retient « anges » plutôt que « messagers » (que certaines traductions modernes choisissent pour insister sur la fonction étymologique de transmission) parce que le référent du malak en arabe coranique est exclusivement une créature céleste — distincte du rasūl (humain envoyé). Confondre les deux gomme une distinction lexicale et théologique structurante. Le mot français « ange », bien qu'issu du grec angelos (= messager), est lexicalement la traduction adéquate d'un être spirituel agent de Dieu.`;

// ===================== V42 (vid=335) =====================
const V42 = `§DEMARCHE§
Ce verset fait suite au signe donné à Zacharie (verset 41). Le récit revient à une scène antérieure introduite par la particule temporelle **iḏ** (lorsque) : les anges s'adressent directement à Marie — par le vocatif **yā** (ô) — pour lui annoncer que Dieu l'a choisie et purifiée, et l'a choisie au-dessus de toutes les femmes. La particule emphatique **inna** (certes) renforce la solennité de l'annonce, et la préposition **ʿalā** (au-dessus de) marque la supériorité du choix divin.

**qālatī** (dirent) est un verbe accompli (une forme qui dit que l'action est terminée, elle a eu lieu) à la 3ème personne du féminin singulier de la racine q-w-l. En arabe, les pluriels brisés de non-humains prennent l'accord au féminin singulier — c'est pourquoi le verbe est au singulier féminin malgré le sujet pluriel (les anges). Le sens premier est « dire, prononcer une parole ». Le verbe accompli place la scène dans un temps révolu. On traduit par « dirent ».

**al-malā'ikatu** (les anges) est un nom pluriel défini (avec l'article al-, qui indique des êtres connus et identifiés) de la racine m-l-k. ${ETY_NOTE} On traduit par « les anges ».

**iṣṭafāki** (t'a choisie) est un verbe accompli à la 3ème personne du masculin singulier, forme VIII (une forme qui ajoute une nuance de sélection active pour soi-même) de la racine ṣ-f-w, avec le pronom suffixe -ki (toi, féminin). La racine ṣ-f-w porte le sens de pureté et de clarté — la forme VIII oriente ce sens vers l'acte de trier pour ne garder que le meilleur, le plus pur. Le verbe accompli indique que ce choix est achevé et définitif. C'est la première des trois actions annoncées aux anges. On traduit par « t'a choisie ».

**anges** — Le sens retenu est « ange » de la racine m-l-k. Le mot « anges » est choisi pour désigner les créatures célestes agentes de Dieu, distinctes du rasūl (humain envoyé). Bien que malak soit étymologiquement un « envoyé », son référent en arabe coranique est exclusivement céleste. L'alternative « messagers » est écartée pour préserver la distinction structurante avec rasūl. L'alternative « message » est écartée car le texte désigne les porteurs, pas le contenu.

**mondes** — Le sens retenu est « les mondes » de la racine ʿ-l-m. Le mot « mondes » capture l'étendue de la création dans sa pluralité. L'alternative « univers » est écartée car il implique un seul espace unifié, alors que le pluriel ʿālamīn implique plusieurs mondes ou catégories de créatures. L'alternative « ensemble des créatures » est écartée car trop long et descriptif pour une traduction fluide.

§CRITIQUE§
**anges vs « Anges » (Hamidullah)** : Hamidullah donne « les Anges » avec une majuscule. Le sens est aligné mais on adopte la minuscule (« les anges ») pour deux raisons : (1) la majuscule chrétienne tend à figer le mot en concept dogmatique alors que le terme arabe est descriptif ; (2) on garde « anges » plutôt que « messagers » (choisi par certaines traductions modernes au nom de l'étymologie l-ʾ-k = envoyer) parce que le référent du malak en arabe est exclusivement une créature céleste, distincte du rasūl (humain envoyé). Confondre les deux gomme une distinction lexicale structurante.

**ajout de « (Rappelle-toi) »** : Les traductions courantes ajoutent « (Rappelle-toi) » ou « (Mentionne) » avant « quand les anges dirent ». Ce mot n'existe pas dans le texte arabe — la particule iḏ signifie simplement « lorsque ». Cet ajout vient des exégèses qui lisent un verbe sous-entendu (uḏkur) avant iḏ. Cette lecture transforme la narration en injonction adressée au Prophète, ajoutant un destinataire et un impératif absents du texte. Notre traduction rend le texte tel qu'il est : « Et lorsque... ».`;

// ===================== V45 (vid=338) =====================
const V45 = `§DEMARCHE§
Ce verset poursuit le récit de Marie commencé aux versets 42-43. Après les commandements de dévotion (verset 43), les anges annoncent maintenant à Marie la nouvelle de la naissance d'un enfant. Ce verset est la première mention du nom de Jésus dans cette sourate. La particule **idh** (lorsque) replace la scène dans le passé et relie ce discours aux paroles précédentes des anges.

**qālatī** (dirent) est un verbe à l'accompli (une forme qui indique un événement achevé) à la 3ème personne du féminin singulier de la racine q-w-l. En arabe, le pluriel brisé al-malā'ikatu prend un verbe au féminin singulier quand il précède le sujet — c'est une règle grammaticale, pas un singulier de sens. On traduit par « dirent ».

**al-malā'ikatu** (les anges) est un nom pluriel défini (avec l'article al-) de la racine m-l-k au nominatif (sujet). ${ETY_NOTE} On traduit par « les anges ».

**allāha** (Dieu) est le nom propre de Dieu, issu de la racine '-l-h (divinité). Le nom est à l'accusatif car il suit la particule d'emphase **inna** (certes). Inna place l'accent sur ce qui suit : c'est bien Dieu qui annonce, pas les anges de leur propre chef. On traduit par « Dieu ».

**les anges** — Le sens retenu est « ange » de la racine m-l-k. Le mot « anges » est choisi pour désigner les créatures célestes agentes de Dieu, distinctes du rasūl (humain envoyé). Bien que malak soit étymologiquement un « envoyé » (racine l-ʾ-k = envoyer), son référent en arabe coranique est exclusivement céleste. L'alternative « messagers » est écartée pour préserver la distinction structurante avec rasūl.

**les rapprochés** — Le sens retenu est « rapprocher » de la racine q-r-b. Le mot « les rapprochés » est choisi car le participe passif de la forme II indique ceux qui sont activement rapprochés — cette proximité est accordée, pas acquise. L'alternative « les proches » est écartée car elle perd la dimension passive — le « proche » peut l'être de lui-même, le « rapproché » l'est par quelqu'un d'autre.

§CRITIQUE§
**anges vs « Anges » (Hamidullah)** : Hamidullah rend al-malāʾikatu par « les Anges ». La traduction est sémantiquement correcte mais on l'adopte ici en minuscule (« les anges ») pour deux raisons : (1) la majuscule chrétienne tend à figer le mot en concept dogmatique alors que le terme arabe est descriptif (créature céleste, agent de Dieu) ; (2) le malak partage avec le rasūl (humain envoyé) la dimension étymologique d'« envoi » (la racine l-ʾ-k signifie envoyer) — mais son référent reste exclusivement une créature céleste, distincte du messager humain. On garde « anges » plutôt que « messagers » pour préserver cette distinction structurante : les anges ne sont pas des humains en mission, ce sont des êtres spirituels agents de Dieu. Le grec angelos qui a donné « ange » en français porte précisément cette double dimension (créature + messager), miroir étymologique fidèle au malak arabe.`;

// ===================== V80 (vid=373) — patcher juste le bloc mlk + références =====================
async function patchV80() {
  const { data: va } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 373).single();
  let expl = va.translation_explanation || '';

  // Réécrire le bloc mlk (al-malāʾikata)
  const oldMlk = /\*\*mlk \(al-malāʾikata\)\*\*[\s\S]*?(?=\n\n\*\*|\n\n§)/;
  const newMlk =
    `**mlk (al-malāʾikata)** : nom collectif pluriel défini accusatif de malak (ange), appartient à un sens spécialisé de la racine m-l-k distinct du sens dominant possession/royauté. La forme malak (sans -i- intercalaire comme malik=roi) est lexicalisée pour désigner les créatures célestes agentes de Dieu. Le sens malak/ange est sans rapport étymologique direct avec malik/roi malgré la même graphie — convergence lexicale. La racine archaïque l-ʾ-k (envoyer) éclaire l'origine du mot : un malak est étymologiquement un « envoyé ». Mais son référent reste exclusivement une créature céleste, distincte du rasūl (humain envoyé). Nous retenons « ange » pour préserver cette distinction structurante. L'axe Ange isole cette branche sémantique de la racine.`;

  if (oldMlk.test(expl)) expl = expl.replace(oldMlk, newMlk);

  // Remplacer "L'axe Ange/Messager" → "L'axe Ange" partout (au cas où)
  expl = expl.replace(/L'axe Ange\/Messager/g, "L'axe Ange");

  await db.from('verse_analyses').update({ translation_explanation: expl }).eq('verse_id', 373);
  console.log('✓ V80 (vid=373) bloc mlk + références mises à jour');
}

// ===================== V47 (vid=340) — patcher les références "messager" vers "ange" =====================
async function patchV47() {
  const { data: va } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 340).single();
  let expl = va.translation_explanation || '';
  // Les "messager" ici réfèrent aux anges de V45
  expl = expl
    .replace(/le messager des versets précédents \(verset 45\)/g, "les anges des versets précédents (verset 45)")
    .replace(/le messager des versets précédents\./g, "les anges des versets précédents.")
    .replace(/le messager "dit"/g, "l'ange « dit »")
    .replace(/le messager « dit »/g, "l'ange « dit »")
    .replace(/le messager portait/g, "les anges portaient")
    .replace(/qui portait l'annonce à Marie/g, "qui portaient l'annonce à Marie")
    .replace(/le locuteur est le messager/g, "le locuteur est l'un des anges")
    .replace(/le messager dit sa réponse/g, "l'ange dit sa réponse");
  await db.from('verse_analyses').update({ translation_explanation: expl }).eq('verse_id', 340);
  console.log('✓ V47 (vid=340) références "messager" → "ange" mises à jour');
}

async function run() {
  // V39
  await db.from('verse_analyses').update({ translation_explanation: V39 }).eq('verse_id', 332);
  console.log('✓ V39 (vid=332) translation_explanation réécrit');
  // V42
  await db.from('verse_analyses').update({ translation_explanation: V42 }).eq('verse_id', 335);
  console.log('✓ V42 (vid=335) translation_explanation réécrit');
  // V45
  await db.from('verse_analyses').update({ translation_explanation: V45 }).eq('verse_id', 338);
  console.log('✓ V45 (vid=338) translation_explanation réécrit');
  // V47
  await patchV47();
  // V80
  await patchV80();

  console.log('\n✅ TERMINÉ — 5 versets cohérents avec le choix "ange" pour mlk');
}
run().catch(e => { console.error(e); process.exit(1); });
