const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 369;
  const { data: va } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
  const expl = va.translation_explanation;
  const critStart = expl.indexOf('§CRITIQUE§');
  const before = expl.substring(0, critStart);

  // Reconstruire §CRITIQUE§ avec 3 entrées dans l'ordre d'apparition
  const newCritique = `§CRITIQUE§

**accomplit** (awfā) vs **« remplit »** : Hamidullah traduit awfā bi- par « remplit ses engagements ». La racine و ف ي (w-f-y) porte le sens de menu à terme, d'acquittement intégral — Lane's donne comme formule directe « awfā bi-l-ʿahd » rendu par « il tint fidèlement le pacte ». Le verbe « remplir » en français évoque un contenant que l'on comble, ce qui impose une métaphore absente du texte arabe. « Accomplir » rend la dimension d'exécution menée à terme sans métaphore parasite — c'est l'acte de s'acquitter pleinement de ce qui est dû.

**et se préserve** (wattaqā) vs **« et craint Allah »** : Hamidullah traduit wattaqā par « craint Allah ». La racine و ق ي ne signifie pas étymologiquement « craindre » — Lane's définit ittaqā comme « il se préserva ou se protégea de façon intense et extraordinaire ». La crainte peut motiver la préservation, mais elle n'en est pas la définition. De plus, Hamidullah ajoute « Allah » comme complément d'objet, alors que le texte arabe n'a pas de complément — le verbe est absolu : « se préserve » (sans préciser de quoi). Notre traduction restitue la vigilance morale comme acte observable, pas comme émotion intérieure projetée, et ne surdétermine pas l'objet de la vigilance.

**les vigilants** (al-muttaqīn) vs **« les pieux »** : Hamidullah donne « les pieux ». Ce choix vient d'une lecture théologique de la racine wqy à travers le prisme post-coranique de la taqwā comme piété religieuse identifiable. Mais al-muttaqīn est le participe actif de la Forme VIII réflexive — littéralement « ceux qui se préservent » de façon constante. « Les pieux » désigne un état intérieur religieux codifié, alors que « les vigilants » désigne un comportement moral observable qui boucle avec wattaqā du même verset. La cohérence verbale arabe (wattaqā / al-muttaqīn = même racine, même acte) est ainsi préservée en français.`;

  const newExpl = before + newCritique;

  await db.from('verse_analyses').update({ translation_explanation: newExpl }).eq('verse_id', vid);
  console.log('V76 §CRITIQUE§ reconstruit ✅');
  console.log('  - 3 entrées dans l\'ordre d\'apparition :');
  console.log('    1. accomplit vs remplit (substantif : métaphore de contenant rejetée)');
  console.log('    2. et se préserve vs et craint Allah (+ absence de complément en arabe)');
  console.log('    3. les vigilants vs les pieux (cohérence wattaqā/al-muttaqīn)');
}

run().catch(console.error);
