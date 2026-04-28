/**
 * Fix arabic_text for ALL verses using Quran.com API (uthmani script).
 * Usage: npx tsx scripts/fix-arabic-from-qurancom.ts
 */
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '..', '.env.local') })

async function main() {
  const url = process.env.SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_KEY!
  const db = createClient(url, key)

  console.log('=== Fix Arabic Text from Quran.com API ===\n')

  let totalUpdated = 0
  let totalErrors = 0

  for (let surah = 1; surah <= 114; surah++) {
    // Fetch from Quran.com API
    const res = await fetch(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surah}`)
    if (!res.ok) {
      console.error(`  ✗ Sourate ${surah} — erreur API: ${res.status}`)
      totalErrors++
      continue
    }

    const data = await res.json()
    const verses = data.verses as { verse_key: string; text_uthmani: string }[]

    if (!verses || verses.length === 0) {
      console.error(`  ✗ Sourate ${surah} — aucun verset retourné`)
      totalErrors++
      continue
    }

    // Update each verse in Supabase
    let updated = 0
    for (const v of verses) {
      const verseNum = parseInt(v.verse_key.split(':')[1])
      const { error } = await db
        .from('verses')
        .update({ arabic_text: v.text_uthmani })
        .eq('surah_id', surah)
        .eq('verse_num', verseNum)

      if (error) {
        console.error(`  ✗ ${v.verse_key} — erreur: ${error.message}`)
        totalErrors++
      } else {
        updated++
      }
    }

    totalUpdated += updated
    console.log(`  ✓ Sourate ${surah} — ${updated}/${verses.length} versets mis à jour`)

    // Rate limit — 1 request per second
    await new Promise(r => setTimeout(r, 500))
  }

  console.log(`\n=== Terminé : ${totalUpdated} versets mis à jour, ${totalErrors} erreurs ===`)
}

main().catch(console.error)
