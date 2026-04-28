const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // Verse 110:1 - fatḥ = ouverture vs victoire = FLAGRANT
  const critique_v1 = `\n\n§CRITIQUE§\n\n**ouverture vs victoire** — Les traductions courantes donnent « la victoire » pour al-fatḥ. Ce choix vient des exégèses qui ont associé ce verset à la conquête de La Mecque (fatḥ Makka), faisant de al-fatḥ un événement militaire précis. Ça transforme le verset en récit historique : « quand vient le secours de Dieu et la victoire [de La Mecque] ». Mais le texte dit al-fatḥ — l'ouverture — sans préciser de quoi. La racine f-t-ḥ dans le Lane's signifie ouvrir ce qui est fermé, donner accès. Et le verset 2 le confirme : les gens « entrent » — on entre par une ouverture, pas par une victoire. La séquence ouverture → entrée est logiquement parfaite. « Victoire » ferme le sens sur un événement militaire daté, « ouverture » laisse au texte sa portée universelle.`;

  // Verse 110:2 - sensiblement le même
  const critique_v2 = `\n\n§CRITIQUE§\n\nLes traductions courantes donnent sensiblement le même sens. On note que certaines traduisent dīn par « religion » là où nous mettons « voie », mais le sens global du verset ne change pas fondamentalement.`;

  // Verse 110:3 - sensiblement le même
  const critique_v3 = `\n\n§CRITIQUE§\n\nLes traductions courantes donnent sensiblement le même sens. La seule variante notable est tawwāb traduit par « celui qui accueille le repentir » au lieu de « celui qui accueille le retour » — le mot « repentir » ajoute une dimension de culpabilité que la racine t-w-b (revenir, retourner) ne contient pas en soi, mais ça ne change pas fondamentalement le sens du verset.`;

  // Update verse 1
  const { data: d1 } = await supabase.from('verse_analyses').select('translation_explanation').eq('id', 6577).single();
  const { error: e1 } = await supabase.from('verse_analyses').update({
    translation_explanation: d1.translation_explanation + critique_v1
  }).eq('id', 6577);
  console.log('V1:', e1 ? 'ERROR: ' + e1.message : 'OK');

  // Update verse 2
  const { data: d2 } = await supabase.from('verse_analyses').select('translation_explanation').eq('id', 6578).single();
  const { error: e2 } = await supabase.from('verse_analyses').update({
    translation_explanation: d2.translation_explanation + critique_v2
  }).eq('id', 6578);
  console.log('V2:', e2 ? 'ERROR: ' + e2.message : 'OK');

  // Update verse 3
  const { data: d3 } = await supabase.from('verse_analyses').select('translation_explanation').eq('id', 6579).single();
  const { error: e3 } = await supabase.from('verse_analyses').update({
    translation_explanation: d3.translation_explanation + critique_v3
  }).eq('id', 6579);
  console.log('V3:', e3 ? 'ERROR: ' + e3.message : 'OK');
}

main();
