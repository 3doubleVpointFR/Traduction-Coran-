const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  const V4 = 6229
  const {data: va} = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', V4).single()

  let expl = va.translation_explanation

  // Replace JUSTIFICATION section
  const justIdx = expl.indexOf('\u00a7JUSTIFICATION\u00a7')
  const before = expl.slice(0, justIdx)

  const newJust = `\u00a7JUSTIFICATION\u00a7

**celles qui soufflent** \u2014 Le sens retenu est \u00ab Souffle/Crachat \u00bb. L'expression \u00ab celles qui soufflent \u00bb est choisie car elle rend le participe actif f\u00e9minin pluriel (an-naffathat) en fran\u00e7ais courant \u2014 des personnes qui font l'acte de souffler (projeter des paroles). L'alternative \u00ab les souffleuses \u00bb est \u00e9cart\u00e9e car c'est une forme nominale qui transforme l'acte en identit\u00e9 \u2014 le texte d\u00e9crit ce qu'elles FONT, pas ce qu'elles SONT. L'alternative \u00ab les ensorceleuses \u00bb est \u00e9cart\u00e9e car c'est de l'interpr\u00e9tation ex\u00e9g\u00e9tique \u2014 le texte d\u00e9crit un acte (souffler), pas un statut.

**les liens** \u2014 Le sens retenu est \u00ab N\u0153ud/Contrat \u00bb. Le mot \u00ab liens \u00bb est choisi car il capture ce que le Coran entend par uqad \u2014 les relations qui lient les gens entre eux (pactes, mariages, amiti\u00e9s). Le Coran utilise uqda pour le n\u0153ud du mariage (sourate 2:235) et pour les engagements. L'alternative \u00ab n\u0153uds \u00bb a \u00e9t\u00e9 envisag\u00e9e mais \u00ab liens \u00bb est plus parlant en fran\u00e7ais courant \u2014 on comprend imm\u00e9diatement que ce sont les relations humaines qui sont vis\u00e9es. L'alternative \u00ab pactes \u00bb est \u00e9cart\u00e9e car trop restrictif.`

  await db.from('verse_analyses').update({translation_explanation: before + newJust}).eq('verse_id', V4)
  console.log('Done')
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
