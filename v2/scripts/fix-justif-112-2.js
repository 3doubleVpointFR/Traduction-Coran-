const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function fix() {
  const {data} = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 6223)
  const expl = data[0].translation_explanation
  const parts = expl.split('§JUSTIFICATION§')

  const newJustif = '§JUSTIFICATION§\n\n' +
    '**Dieu** — Le sens retenu est "Divinité". Allah est le nom propre de la Divinité, traduit par "Dieu" (règle des noms propres).\n\n' +
    '**celui vers qui on se tourne** — Le sens retenu est "Se diriger vers/Recours". Le Lane\'s (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) définit as-samad comme "celui vers qui on a recours dans les difficultés, sans qui aucune affaire ne s\'accomplit". Parmi les expressions possibles pour rendre ce sens : "celui vers qui on a recours", "celui qu\'on sollicite", "celui vers qui on se tourne", "celui vers qui tout converge". L\'expression "celui vers qui on se tourne" est choisie car "recours" en français implique un besoin ponctuel (on a recours à un avocat quand on a un problème), "solliciter" est du registre administratif, et "converger" est trop abstrait. "Se tourner vers" décrit un mouvement permanent et naturel en français courant, ce qui correspond à un attribut permanent.'

  const result = parts[0] + newJustif
  await db.from('verse_analyses').update({translation_explanation: result}).eq('verse_id', 6223)
  console.log('Justification remplacée')
}
fix().catch(e => console.error(e))
