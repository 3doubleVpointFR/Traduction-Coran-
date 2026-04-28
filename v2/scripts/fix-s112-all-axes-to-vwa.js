// FIX — Copier TOUS les axes de word_meanings vers verse_word_analyses.analysis_axes
// Pour chaque mot dans chaque verset, on prend les axes de word_meanings
// et on les stocke dans verse_word_analyses.analysis_axes au format { senses: { sens1: {...}, sens2: {...} } }
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  console.log('============================================')
  console.log('  FIX — TOUS LES AXES → verse_word_analyses')
  console.log('============================================')
  console.log('')

  // Récupérer tous les verse_word_analyses de la sourate 112
  const verseIds = [6222, 6223, 6224, 6225]
  const {data: vwas} = await db.from('verse_word_analyses')
    .select('id, verse_id, word_key, position, sense_chosen, analysis_axes')
    .in('verse_id', verseIds)
    .order('verse_id').order('position')

  console.log('  ' + vwas.length + ' verse_word_analyses trouvés')
  console.log('')

  for (const vwa of vwas) {
    const verseNum = verseIds.indexOf(vwa.verse_id) + 1
    console.log('  [112:' + verseNum + '] ' + vwa.word_key + ' (pos=' + vwa.position + ', retenu=' + vwa.sense_chosen + ')')

    // Si ahd en position 5 (verset 4), on a déjà les bons axes
    if (vwa.word_key === 'ahd' && vwa.position === 5 && vwa.analysis_axes && vwa.analysis_axes.senses) {
      console.log('    -> DÉJÀ FAIT (format senses)')
      continue
    }

    // Récupérer l'analysis_id pour ce word_key
    const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', vwa.word_key).single()
    if (!wa) { console.log('    -> PAS DE word_analyses'); continue }

    // Récupérer TOUS les sens avec axes de word_meanings
    const {data: meanings} = await db.from('word_meanings')
      .select('sense, status, proof_ctx, axe1_verset, axe2_voisins, axe3_sourate, axe4_coherence, axe5_frequence')
      .eq('analysis_id', wa.id)
      .order('display_order')

    // Construire le format senses
    const senses = {}
    let countWithAxes = 0
    for (const m of meanings) {
      const entry = { status: m.status || 'nul' }
      if (m.proof_ctx) entry.proof_ctx = m.proof_ctx
      if (m.axe1_verset) {
        entry.axe1_verset = m.axe1_verset
        entry.axe2_voisins = m.axe2_voisins
        entry.axe3_sourate = m.axe3_sourate
        entry.axe4_coherence = m.axe4_coherence
        entry.axe5_frequence = m.axe5_frequence
        countWithAxes++
      }
      senses[m.sense] = entry
    }

    const axes = {
      sense_chosen: vwa.sense_chosen,
      senses: senses
    }

    const {error} = await db.from('verse_word_analyses')
      .update({ analysis_axes: axes })
      .eq('id', vwa.id)

    if (error) console.log('    ERREUR: ' + error.message)
    else console.log('    -> ' + Object.keys(senses).length + ' sens copiés (' + countWithAxes + ' avec axes détaillés)')
  }

  console.log('')
  console.log('============================================')
  console.log('  FIX TERMINÉ')
  console.log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
