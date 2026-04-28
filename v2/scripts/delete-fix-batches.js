const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

// Toutes les racines des batches 23-26 à supprimer et refaire
const keysToDelete = [
  // batch23: khsr, dhly, khlaq, stwy, ana
  'khsr', 'dhly', 'khlaq', 'stwy', 'ana',
  // batch23b: xlf, man, sfk, dmw, sbh
  'xlf', 'man', 'sfk', 'dmw', 'sbh',
  // batch24: qds, ka, la, any, nnk, ant, hkm, sjd, bls, aby
  'qds', 'ka', 'la', 'any', 'nnk', 'ant', 'hkm', 'sjd', 'bls', 'aby',
  // batch25: kbr, zll, shytn, lna, khrj, hbt, edw, lkm, qrr, mte
  'kbr', 'zll', 'shytn', 'lna', 'khrj', 'hbt', 'edw', 'lkm', 'qrr', 'mte',
  // batch26: hyn, skn, mnh, rghd, hyth, shy, qrb, hdh, shjr, bdw
  'hyn', 'skn', 'mnh', 'rghd', 'hyth', 'shy', 'qrb', 'hdh', 'shjr', 'bdw'
]

async function run() {
  console.log('Suppression des entrées pour ' + keysToDelete.length + ' racines...\n')
  let deleted = 0

  for (const key of keysToDelete) {
    const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
    if (!wa || !wa[0]) {
      console.log('  ' + key + ': non trouvé dans word_analyses')
      continue
    }
    const {error, count} = await db.from('word_meanings').delete({count:'exact'}).eq('analysis_id', wa[0].id).not('concept','is',null)
    if (error) {
      console.log('  ' + key + ': ERREUR - ' + error.message)
    } else if (count > 0) {
      console.log('  ' + key + ': ' + count + ' entrées supprimées')
      deleted += count
    } else {
      console.log('  ' + key + ': aucune entrée à supprimer')
    }
  }

  console.log('\n=== Total supprimé: ' + deleted + ' entrées ===')
}

run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
