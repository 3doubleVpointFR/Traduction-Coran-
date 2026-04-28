const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function fix() {
  const {data} = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 6225)
  const expl = data[0].translation_explanation
  const parts = expl.split('§JUSTIFICATION§')

  const newJustif = '§JUSTIFICATION§\n\n' +
    '**être** — Le sens retenu est "Être/Existence". Le verbe kana sert de support grammatical à la négation. Il lie le sujet (personne) à l\'attribut (égal). C\'est un outil de construction, pas un attribut de Dieu.\n\n' +
    '**égal** — Le sens retenu est "Égalité/Équivalence". Le Lane\'s (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) donne "semblable, égal, du même rang" pour kufu. Parmi les expressions possibles pour rendre ce sens : "égal", "semblable", "comparable", "pareil", "équivalent". Le mot "égal" est choisi car "semblable" insiste sur la ressemblance extérieure (on peut ressembler sans être du même rang), "comparable" est plus faible (on peut comparer sans être au même niveau), "pareil" est familier, et "équivalent" est du registre technique. "Égal" exprime directement l\'idée de même rang en français courant.\n\n' +
    '**personne** — Le sens retenu est "Quiconque/Indéfini". Le mot "personne" est choisi car en contexte négatif ("personne n\'est"), il nie de manière absolue l\'existence de tout être. Parmi les alternatives : "quiconque", "aucun", "nul". "Quiconque" est du registre juridique, "aucun" nécessite un nom après ("aucun être"), "nul" est littéraire. "Personne" est le mot le plus naturel en français courant pour nier l\'existence de qui que ce soit. Au verset 1, ahad signifie "unique" (contexte affirmatif). Au verset 4, ahad signifie "personne" (contexte négatif). Le même mot arabe, deux contextes, deux mots français différents.'

  const result = parts[0] + newJustif
  await db.from('verse_analyses').update({translation_explanation: result}).eq('verse_id', 6225)
  console.log('Justification 112:4 corrigée')
}
fix().catch(e => console.error(e))
