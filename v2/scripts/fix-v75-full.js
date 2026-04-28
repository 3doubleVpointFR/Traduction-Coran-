const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 368;

  // ===== 1. full_translation = vraie traduction Hamidullah =====
  const realHamidullah = "Et parmi les gens du Livre, il y en a qui, si tu lui confies un qintâr, te le rend. Mais il y en a qui, si tu lui confies un dinâr, ne te le rendra que si tu l'y contrains sans relâche. C'est parce qu'ils disent : « Ces (arabes) qui n'ont pas de livre ne peuvent rien contre nous. » Ils profèrent des mensonges contre Allah tout en sachant.";

  // ===== 2. Notre traduction étymologique =====
  const notreTrad = "Et parmi les gens de l'Écriture, il y en a qui, si tu lui confies un qintar, te le restitue. Et parmi eux, il y en a qui, si tu lui confies un dinar, ne te le restitue pas, sauf tant que tu demeures debout sur lui. Cela est parce qu'ils ont dit : « Il n'est pour nous aucune voie envers les illettrés. » Et ils disent sur Dieu le mensonge, alors qu'ils savent.";

  // ===== 3. Correction VWA ktb : concept Livre/Écrit + sens écriture révélée (cohérent V48+) =====
  const newKtbAxes = {
    sense_chosen: 'écriture révélée',
    concept_chosen: 'Livre/Écrit',
    concepts: {
      'Livre/Écrit': {
        status: 'retenu',
        senses: ['registre', 'livre', 'écriture révélée', 'contrat d\'affranchissement', 'contrat de mariage', 'contrat écrit'],
        proof_ctx: 'Dans ahl al-kitāb (gens de l\'Écriture), al-kitāb désigne le texte révélé comme objet identifiable (article défini al-). Cohérent avec V48, V64, V65, V69-V74.'
      },
      'Écriture/Inscription': {
        status: 'peu_probable',
        senses: ['écrire', 'écrire à quelqu\'un', 'art de l\'écriture', 'scribe'],
        proof_ctx: 'Ce sens désigne l\'acte d\'écrire, pas le texte. Or al-kitāb est ici un nom (objet).'
      },
      'Assemblage/Couture': {
        status: 'nul',
        senses: ['coudre', 'armée', 'rassembler'],
        proof_ctx: 'Sens physique premier, hors sujet.'
      },
      'Obligation/Décret': {
        status: 'nul',
        senses: ['rendre obligatoire', 'juger', 'décret divin', 'prescrire'],
        proof_ctx: 'Extension juridique, hors sujet ici.'
      }
    }
  };
  await db.from('verse_word_analyses').update({ sense_chosen: 'écriture révélée', analysis_axes: newKtbAxes }).eq('verse_id', vid).eq('word_key', 'ktb');
  console.log('V75 VWA ktb : concept Livre/Écrit + sens écriture révélée ✅');

  // ===== 4. Update segments =====
  const { data: vaCur } = await db.from('verse_analyses').select('segments').eq('verse_id', vid).single();
  const segs = typeof vaCur.segments === 'string' ? JSON.parse(vaCur.segments) : vaCur.segments;

  // pos=3 ahl → "gens de"
  // pos=4 ktb → "l'Écriture" + sense_retenu "écriture révélée"
  // Plus propre : refaire les segments mapping pour cohérence avec nouvelle trad
  const segFixes = {
    3: { fr: 'gens de' },
    4: { fr: "l'Écriture", sense_retenu: 'écriture révélée' },
  };
  for (const s of segs) {
    if (segFixes[s.position]) Object.assign(s, segFixes[s.position]);
  }

  // ===== 5. Reconstruire translation_explanation =====
  // §DEMARCHE§ avec intro + paragraphe par mot
  const demarche = `§DEMARCHE§
Ce verset fait suite au verset 74 et caractérise deux attitudes contrastées parmi les gens de l'Écriture vis-à-vis de la restitution des dépôts, puis dénonce la doctrine mensongère qui justifie cette malhonnêteté envers ceux qu'ils nomment "illettrés". Le verset révèle une asymétrie morale : certains sont honnêtes quelle que soit la somme, d'autres le sont uniquement sous contrainte.

**ahl** (gens de) est un nom pluriel de la racine ʾ-h-l en construction état construit (iḍāfa) avec al-kitāb. La racine désigne l'appartenance communautaire à quelque chose. Cohérent avec V65-V74.

**al-kitāb** (l'Écriture) est un nom défini par al- de la racine k-t-b. Dans ahl al-kitāb, al-kitāb désigne l'Écriture révélée comme catégorie textuelle sacrée reçue par les juifs et les chrétiens. Cohérent avec V48, V64, V65, V69-V74.

**taʾmanhu** (tu lui confies) est un verbe inaccompli 2ème personne du masculin singulier, Forme I de la racine ʾ-m-n, avec pronom suffixe -hu (lui). Dans la construction taʾmanhu bi-X = tu lui confies X. La racine ʾ-m-n porte le sens de sécurité et de confiance ; confier un bien à quelqu'un, c'est lui accorder cette confiance. On traduit par « tu lui confies ».

**bi-qinṭārin** (un qintar) est la préposition bi- suivie du nom qinṭār (indéfini) de la racine q-n-ṭ-r. Le qinṭār est une unité de grande masse d'or ou d'argent, utilisée comme symbole de grande richesse. Non traduit pour préserver le terme technique. On garde « un qintar ».

**yuʾaddihi** (te le restitue) est un verbe inaccompli Forme II de la racine ʾ-d-y, 3ème personne du masculin singulier, avec pronom -hi. La Forme II addā signifie « délivrer quelque chose à son lieu/destinataire approprié » (Lane's). Pour un dépôt, c'est « restituer ». On traduit par « te le restitue ».

**bi-dīnārin** (un dinar) est la même construction que bi-qinṭārin, avec le nom dīnār (monnaie d'or) de la racine d-n-r. Le contraste entre qintar et dinar est quantitatif : le qintar vaut des milliers de dinars. On garde « un dinar ».

**dumta** (tu demeures) est un verbe accompli de la racine d-w-m, 2ème personne du masculin singulier. La racine désigne la permanence et la durée. dumta ʿalayhi qāʾiman = tu restes sur lui en te tenant debout. On traduit par « tu demeures ».

**qāʾiman** (debout) est un participe actif de la racine q-w-m, accusatif indéfini, en fonction de ḥāl (complément d'état) du sujet de dumta. La racine q-w-m désigne l'action de se lever, de se tenir debout. Ici l'image est celle du créancier qui se tient debout sur son débiteur pour le contraindre. On traduit par « debout ».

**qālū** (ils ont dit) est un verbe accompli Forme I de la racine q-w-l, 3ème personne du masculin pluriel. On traduit par « ils ont dit ».

**al-ummiyyīna** (les illettrés) est un nom pluriel masculin défini par al- de la racine ʾ-m-m. D'après les sources étymologiques, ummī désigne celui qui est resté comme à sa sortie du ventre de sa mère (umm = mère), c'est-à-dire dans l'état originel sans apprentissage de l'écriture. Par extension, les ummiyyūn sont ceux qui n'ont pas reçu de texte révélé comme l'ont reçu les juifs et les chrétiens. On traduit par « les illettrés ».

**sabīlun** (voie) est un nom indéfini au nominatif de la racine s-b-l. Le sabīl est le chemin, la voie que l'on suit. Dans l'expression laysa ʿalaynā fī al-ummiyyīna sabīlun, le sens est « il n'y a aucune voie sur nous envers les illettrés » = aucune responsabilité, aucun compte à rendre. On traduit par « voie ».

**yaqūlūna** (ils disent) est le même verbe q-w-l à l'inaccompli, 3ème personne du masculin pluriel. L'inaccompli exprime une action en cours ou habituelle. On traduit par « ils disent ».

**ʿalā allāhi** (sur Dieu) est la préposition ʿalā (sur) suivie du nom propre allāh. La construction yaqūlūna ʿalā X = dire SUR X (au sujet de X, contre X). Cette construction avec ʿalā a une nuance d'accusation : dire quelque chose contre quelqu'un. On traduit par « sur Dieu ».

**al-kadhiba** (le mensonge) est un nom défini par al- de la racine k-dh-b, à l'accusatif (COD de yaqūlūna). Le kadhib est le mensonge, l'affirmation contraire à la réalité. On traduit par « le mensonge ».

**yaʿlamūna** (ils savent) est un verbe inaccompli Forme I de la racine ʿ-l-m, 3ème personne du masculin pluriel. wa-hum yaʿlamūna en ḥāl = alors qu'ils savent. On traduit par « ils savent ».`;

  // §JUSTIFICATION§
  const justification = `§JUSTIFICATION§

**gens de l'Écriture** — Cohérent avec V65-V74 (voir V65 pour développement). al-kitāb = l'Écriture révélée.

**confier** — Le sens retenu est « faire confiance » (Sécurité/Confiance). Pour taʾmanhu bi-X, on traduit par « tu lui confies X » car confier un bien à quelqu'un = lui accorder cette confiance. L'alternative « tu te fies à lui » est moins précise car le verset parle bien d'un acte de dépôt concret.

**un qintar** — Non traduit. Le qinṭār est une unité historique de grande masse d'or. L'alternative « un trésor » est écartée car elle perd la précision numérique et technique.

**restituer** — Le sens retenu est « restituer » (Accomplissement/Restitution). La Forme II ʾaddā = délivrer au lieu/destinataire approprié (Lane's). L'alternative « rend » (Hamidullah) est moins précise car « rendre » est générique, alors que « restituer » implique un dépôt confié à restaurer à son propriétaire.

**un dinar** — Nom propre de monnaie, non traduit.

**demeures debout** — Le sens retenu est « demeurer » (d-w-m) + « se tenir debout » (q-w-m). L'expression dumta ʿalayhi qāʾiman est littéralement « tu demeures sur lui en te tenant debout ». L'alternative « tu l'y contrains sans relâche » (Hamidullah) perd l'image concrète du créancier debout. Nous gardons l'image littérale pour respecter le texte.

**les illettrés** — Le sens retenu est « illettré » (ʾ-m-m). Ummī = celui sans Écriture, resté dans l'état originel. L'alternative « Ces (arabes) qui n'ont pas reçu de livre » (Hamidullah) est un développement interprétatif qui limite le sens à un contexte ethnique spécifique, alors que al-ummiyyūn est un terme général pour « ceux qui n'ont pas reçu de texte révélé ». « Illettré » est notre choix étymologique.

**voie** — Le sens retenu est « voie » (s-b-l). L'alternative « ne peuvent rien contre nous » (Hamidullah) est une paraphrase qui fait disparaître le mot sabīl. Nous gardons « aucune voie sur nous envers » pour respecter la structure littérale.

**disent sur Dieu le mensonge** — Construction yaqūlūna ʿalā X al-kadhiba. L'alternative « profèrent des mensonges contre Allah » (Hamidullah) est une paraphrase qui remplace al-kadhib (singulier, défini) par « des mensonges » (pluriel) et change ʿalā en « contre ». Nous gardons la structure littérale.`;

  // §CRITIQUE§ — seulement les vraies différences qui changent le sens
  // Ordre d'apparition dans notre trad :
  // 1. "gens de l'Écriture" (pos ~13)
  // 2. "qintar" (pos ~72)
  // 3. "te le restitue" (pos ~87)
  // 4. "demeures debout sur lui" (pos ~199)
  // 5. "illettrés" (pos ~282)
  // 6. "voie" (pos ~267 avant illettrés)
  // 7. "disent sur Dieu le mensonge" (pos ~326)

  const critique = `§CRITIQUE§

**gens de l'Écriture vs gens du Livre** : Les traductions courantes donnent « gens du Livre ». Cohérent avec V48-V74, nous utilisons « l'Écriture » car al-kitāb désigne le corpus scripturaire révélé (catégorie textuelle) et non un objet-livre physique. La différence change la connotation : « Livre » évoque un ouvrage matériel défini ; « Écriture » désigne la dimension sacrée du texte révélé.

**restituer vs rendre** : Hamidullah traduit yuʾaddī par « rendre ». La Forme II ʾaddā porte un sens précis : délivrer quelque chose à son lieu ou destinataire approprié (Lane's). Pour un dépôt confié, « restituer » rend mieux cette notion que « rendre » qui est générique. La différence est de précision juridique : « restituer » implique un dépôt originellement confié ; « rendre » peut désigner tout retour.

**demeures debout sur lui vs le contrains sans relâche** : Hamidullah paraphrase dumta ʿalayhi qāʾiman en « tu l'y contrains sans relâche ». Le texte arabe est littéralement « tu demeures sur lui en te tenant debout » — image concrète d'un créancier qui se tient physiquement debout sur son débiteur pour le presser. La paraphrase d'Hamidullah abstractise l'image en notion de contrainte ; notre traduction conserve l'image littérale qui donne son relief au texte.

**aucune voie envers les illettrés vs "ne peuvent rien contre nous" avec ajout "(arabes) qui n'ont pas de livre"** : Hamidullah développe al-ummiyyīna en « Ces (arabes) qui n'ont pas reçu de livre », ce qui fixe un référent historique spécifique (les Arabes non-juifs/non-chrétiens de l'époque). Or al-ummiyyūn est un terme général qui désigne toute personne sans texte révélé — la catégorie philosophique n'est pas ethnique mais scripturaire. De plus, Hamidullah remplace sabīl (voie) par « ne peuvent rien contre nous », ce qui fait disparaître le mot et transforme une affirmation sur l'absence de voie (de responsabilité, de compte) en une affirmation sur l'impuissance. La différence est structurelle : le texte dit « nous n'avons aucune voie envers ces illettrés » (= aucune obligation, aucun devoir de les respecter) ; Hamidullah dit « ils ne peuvent rien contre nous » (= nous sommes intouchables).

**disent sur Dieu le mensonge vs profèrent des mensonges contre Allah** : Hamidullah fait trois transformations sur yaqūlūna ʿalā allāhi al-kadhiba : (1) « disent » → « profèrent » (intensification littéraire), (2) al-kadhib (singulier défini = le mensonge comme catégorie) → « des mensonges » (pluriel indéfini), (3) ʿalā (sur) → « contre ». Notre traduction garde la structure littérale : « disent sur Dieu le mensonge » — la construction yaqūlūna ʿalā signifie « dire au sujet de / contre », mais le singulier défini al-kadhib désigne le mensonge spécifique qu'ils affirment (leur doctrine d'exemption envers les illettrés), pas des mensonges en général.`;

  const newExpl = demarche + '\n\n' + justification + '\n\n' + critique;

  await db.from('verse_analyses').update({
    full_translation: realHamidullah,
    translation_arab: notreTrad,
    translation_explanation: newExpl,
    segments: segs,
  }).eq('verse_id', vid);
  console.log('V75 translation_arab + full_translation + explanation + segments mis à jour ✅');
}
run().catch(console.error);
