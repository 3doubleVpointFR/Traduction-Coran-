const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 368;
  const { data: va } = await db.from('verse_analyses').select('segments, translation_explanation').eq('verse_id', vid).single();
  const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;

  // Fix segments fr pour aligner avec la nouvelle traduction_arab
  const fixes = {
    7: 'confies',        // ta'manhu = "si tu lui confies"
    9: 'un qintar',      // qintārin (était "trésor" — incorrect)
    10: 'te le restitue', // yu'addīhi
    16: 'confies',       // 2e ta'manhu
    18: 'un dinar',      // dīnārin
    20: 'te le restitue', // 2e yu'addīhi
    24: 'demeures',      // dumta
    26: 'debout',        // qāʾiman
    30: 'ont dit',       // qālū (accompli)
    34: 'les illettrés', // al-ummiyyīna
    35: 'aucune voie',   // sabīlun
    37: 'disent',        // yaqūlūna (inaccompli)
    40: 'le mensonge',   // al-kadhiba
    42: 'savent',        // yaʿlamūna
  };

  for (const s of segs) {
    if (fixes[s.position]) s.fr = fixes[s.position];
  }

  // Refaire §CRITIQUE§ avec TOUTES les différences vs Hamidullah réel, dans l'ordre
  // Hamidullah: "Et parmi les gens du Livre, il y en a qui, si tu lui confies un qintâr, te le rend..."
  const critique = `§CRITIQUE§

**gens de l'Écriture vs gens du Livre** : Hamidullah donne « gens du Livre ». Cohérent avec V48-V74, nous utilisons « l'Écriture » car al-kitāb désigne le corpus scripturaire révélé (catégorie textuelle) et non un objet-livre physique.

**un qintar vs un qintâr (non traduit)** : Hamidullah transcrit « qintâr » avec accent circonflexe ; nous gardons « qintar » sans accent. Même mot technique (unité de grande masse d'or), non traduit dans les deux versions pour préserver le terme coranique.

**te le restitue vs te le rend** : Hamidullah traduit yuʾaddī par « rendre ». La Forme II ʾaddā désigne précisément le fait de délivrer quelque chose à son lieu ou destinataire approprié (Lane's). Pour un dépôt confié, « restituer » rend mieux cette notion de restauration à son propriétaire légitime que le générique « rendre ».

**demeures debout sur lui vs le contrains sans relâche** : Hamidullah paraphrase dumta ʿalayhi qāʾiman en « tu l'y contrains sans relâche ». Le texte arabe est littéralement « tu demeures sur lui en te tenant debout » — image concrète d'un créancier qui se tient physiquement debout sur son débiteur pour le presser. La paraphrase abstractise l'image ; notre traduction littérale conserve le relief concret du texte.

**aucune voie envers les illettrés vs « Ces (arabes) qui n'ont pas de livre ne peuvent rien contre nous »** : Hamidullah développe la phrase en changeant trois choses : (1) al-ummiyyīna devient « Ces (arabes) qui n'ont pas de livre » — glose interprétative qui fixe un référent ethnique spécifique absent du texte arabe ; (2) sabīl (voie) disparaît, remplacé par « ne peuvent rien contre nous » ; (3) la structure bascule : le texte dit « aucune voie SUR NOUS ENVERS les illettrés » (= aucune obligation de notre part envers eux), Hamidullah dit « ils ne peuvent rien contre nous » (= nous sommes intouchables). Trois différences structurelles qui changent le sens.

**disent sur Dieu le mensonge vs profèrent des mensonges contre Allah** : Hamidullah fait trois transformations sur yaqūlūna ʿalā allāhi al-kadhiba : (1) « disent » → « profèrent » (intensification littéraire sans base textuelle) ; (2) al-kadhib (singulier défini = LE mensonge, la doctrine mensongère spécifique qu'ils viennent de formuler) → « des mensonges » (pluriel indéfini = mensonges en général) ; (3) ʿalā (sur, au sujet de) → « contre ». Notre traduction garde la structure littérale et le singulier défini qui renvoie précisément à la doctrine d'exemption envers les illettrés que le verset vient de rapporter.`;

  const expl = va.translation_explanation;
  const critStart = expl.indexOf('§CRITIQUE§');
  const newExpl = expl.substring(0, critStart) + critique;

  await db.from('verse_analyses').update({ segments: segs, translation_explanation: newExpl }).eq('verse_id', vid);
  console.log('V75 segments fr + §CRITIQUE§ alignés avec la nouvelle traduction ✅');
}
run().catch(console.error);
