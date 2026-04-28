const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 369;
  const { data: va } = await db.from('verse_analyses').select('segments, translation_arab, translation_explanation').eq('verse_id', vid).single();

  // ========== 1. SEGMENTS : pos=10 fr "approuve" → "aime" ==========
  const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
  const seg10 = segs.find(s => s.position === 10);
  if (seg10) seg10.fr = 'aime';

  // ========== 2. TRANSLATION_ARAB ==========
  const newTrad = va.translation_arab.replace('Dieu approuve les vigilants', 'Dieu aime les vigilants');
  console.log('Nouvelle trad:', newTrad);

  // ========== 3. TRANSLATION_EXPLANATION ==========
  let expl = va.translation_explanation;

  // §DEMARCHE§ : Yuḥibbu (approuve) → (aime)
  const oldDemHbb = `**Yuḥibbu** (approuve) est un verbe à la Forme IV de l'inaccompli — sujet : Dieu, objet : al-muttaqīn. La racine Hb désigne l'inclination positive, l'approbation, la préférence. Le Lane's liste directement « il aima, apprécia, approuva » comme sens de cette forme. L'inaccompli exprime un état habituel et permanent — Dieu est en position permanente d'approbation envers cette catégorie.`;
  const newDemHbb = `**Yuḥibbu** (aime) est un verbe à la Forme IV de l'inaccompli (aḥabba / yuḥibbu) de la racine ح ب ب — sujet : Dieu, objet : al-muttaqīn. Le Lane's donne comme premier sens « il aima, affectionna, chérit ». L'inaccompli exprime un état habituel et permanent — l'inclination de Dieu envers cette catégorie est continue, pas ponctuelle. Le verbe n'implique pas une émotion humaine projetée sur Dieu : en arabe classique, ḥabba désigne l'inclination positive du sujet envers son objet, sans nécessairement la charge affective que le français associe à « aimer ».`;
  expl = expl.replace(oldDemHbb, newDemHbb);

  // §JUSTIFICATION§ : "**approuve**" → "**aime**"
  const oldJustHbb = `**approuve** — Le sens retenu est « Amour/Affection » (spécifiquement le sens « apprécia, approuva » du Lane's). Le mot « approuve » est choisi car il traduit l'inclination positive de Dieu envers une catégorie de personnes sans projeter une émotion humaine que le texte n'affirme pas. L'alternative « aime » est écartée car elle suppose une émotion affective que le texte décrit comme une approbation active d'un comportement.`;
  const newJustHbb = `**aime** — Le sens retenu est « aimer » (Amour/Affection), sens premier de la racine ح ب ب dans le Lane's. Le mot « aime » est choisi car il correspond au sens primaire étymologique de la racine, sans filtre interprétatif. L'alternative « approuve » est écartée : bien que le Lane's liste « approuver » parmi les nuances possibles, ce sens est dérivé et non primaire. L'alternative « chérit » est écartée comme trop affective en français courant. Notre choix préserve la simplicité du sens étymologique, cohérent avec les traductions courantes sur ce mot précis.`;
  expl = expl.replace(oldJustHbb, newJustHbb);

  // §CRITIQUE§ : retirer 2 entrées triviales
  // Entry "approuve vs aime" : suppression complète (plus de différence)
  const oldCritApprouve = `**approuve** (yuḥibbu) vs **« aime »** — Les traductions courantes donnent « aime ». Le Lane's atteste « apprécia, approuva » comme sens direct de yuḥibbu à côté de « aimer ». Dans ce contexte où l'approbation de Dieu fait suite à un comportement moral concret (tenir ses engagements, veiller sur soi), « approuve » traduit plus fidèlement l'inclination positive rationnelle que l'affection émotionnelle.`;
  expl = expl.replace(oldCritApprouve, '').replace(/\n\n\n+/g, '\n\n');

  // Entry "accomplit vs remplit" : Sonnet lui-même reconnaît "différence faible" / "ne change pas le sens"
  const oldCritAccomplit = `**accomplit** (awfā) vs **« remplit »** — Hamidullah dit « remplit ses engagements ». La différence est faible : « remplir » évoque un contenant à combler, « accomplir » évoque l'acte de mener à terme. Les deux sont proches du Lane's (« il tint fidèlement le pacte »). Cette variante ne change pas le sens global du verset.`;
  expl = expl.replace(oldCritAccomplit, '').replace(/\n\n\n+/g, '\n\n').trim();

  // Final cleanup : ensure §CRITIQUE§ ends cleanly
  expl = expl.replace(/\n{3,}/g, '\n\n').trim();

  await db.from('verse_analyses').update({
    segments: segs,
    translation_arab: newTrad,
    translation_explanation: expl
  }).eq('verse_id', vid);

  console.log('V76 corrigé ✅');
  console.log('  - pos=10 fr : "approuve" → "aime"');
  console.log('  - translation_arab : "approuve" → "aime"');
  console.log('  - §DEMARCHE§ Yuḥibbu : reformulé (aime, sens primaire)');
  console.log('  - §JUSTIFICATION§ : "approuve" → "aime"');
  console.log('  - §CRITIQUE§ : retiré entrée "approuve vs aime" (plus de différence)');
  console.log('  - §CRITIQUE§ : retiré entrée "accomplit vs remplit" (triviale, self-admitted)');
}

run().catch(console.error);
