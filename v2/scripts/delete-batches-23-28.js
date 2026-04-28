// Delete entries from batches 23-28 to redo with better quality
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

// List of word_keys from batches 23-28
const keysToDelete = [
  // Batch 23
  'khsr', 'dhly', 'khlaq', 'stwy', 'ana', 'xlf', 'man', 'sfk', 'dmw', 'sbh',
  // Batch 24
  'qds', 'ka', 'la', 'any', 'nnk', 'ant', 'hkm', 'sjd', 'bls', 'aby',
  // Batch 25
  'kbr', 'zll', 'shytn', 'lna', 'khrj', 'hbt', 'edw', 'lkm', 'qrr', 'mte',
  // Batch 26
  'hyn', 'skn', 'mnh', 'rghd', 'hyth', 'shy', 'qrb', 'hdh', 'shjr', 'bdw',
  // Batch 27
  'ktm', 'shyn', 'lmm', 'kdb', 'ayt', 'shb', 'hum', 'klm', 'nwy', 'tbae',
  // Batch 28
  'khw f', 'hzn', 'isr', 'dhkr', 'lty', 'wfy', 'ywy', 'rhb', 'mek', 'ayat'
]

async function deleteEntries() {
  console.log('Deleting entries for ' + keysToDelete.length + ' word_keys...')

  for (const key of keysToDelete) {
    // Get analysis_id
    const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
    if (!wa || !wa[0]) {
      console.log('  ' + key + ' — not found in word_analyses')
      continue
    }

    // Delete from word_meanings
    const {error, count} = await db.from('word_meanings')
      .delete({count: 'exact'})
      .eq('analysis_id', wa[0].id)
      .not('concept', 'is', null)

    if (error) {
      console.log('  ' + key + ' — ERROR: ' + error.message)
    } else {
      console.log('  ' + key + ' — deleted ' + (count || 0) + ' entries')
    }
  }

  console.log('\nDone. Now re-run the batches with better descriptions.')
}

deleteEntries().catch(e => console.error(e))
