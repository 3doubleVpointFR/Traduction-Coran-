/**
 * Reconstructs arabic_text for verses from word forms (QAC Buckwalter → Arabic)
 * and converts word.arabic from Buckwalter to Arabic Unicode.
 */
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '..', '.env.local') })

const BW: Record<string, string> = {
  "'": 'ء', '|': 'آ', '>': 'أ', '&': 'ؤ', '<': 'إ', '}': 'ئ',
  A: 'ا', b: 'ب', p: 'ة', t: 'ت', v: 'ث', j: 'ج',
  H: 'ح', x: 'خ', d: 'د', '*': 'ذ', r: 'ر', z: 'ز',
  s: 'س', $: 'ش', S: 'ص', D: 'ض', T: 'ط', Z: 'ظ',
  E: 'ع', g: 'غ', f: 'ف', q: 'ق', k: 'ك', l: 'ل',
  m: 'م', n: 'ن', h: 'ه', w: 'و', y: 'ي',
  F: 'ً', N: 'ٌ', K: 'ٍ', a: 'َ', u: 'ُ', i: 'ِ',
  '~': 'ّ', o: 'ْ', e: 'ة', '{': 'ٱ', '`': 'ٰ', '^': 'ٰ', Y: 'ى',
}

function bwToArabic(s: string): string {
  return s.split('').map(c => BW[c] ?? c).join('')
}

async function main() {
  const url = process.env.SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_KEY!
  const db = createClient(url, key)

  console.log('=== Fix Arabic Text ===')

  // 1. Fetch all verses (paginated)
  console.log('1. Fetching all verses...')
  const allVerses: { id: number; surah_id: number; verse_num: number }[] = []
  let offset = 0
  while (true) {
    const { data } = await db.from('verses').select('id, surah_id, verse_num').range(offset, offset + 999)
    if (!data || data.length === 0) break
    allVerses.push(...data)
    offset += data.length
    if (data.length < 1000) break
  }
  console.log(`  ${allVerses.length} verses fetched.`)

  // 2. Fetch all words (paginated)
  console.log('2. Fetching all words...')
  const wordsByVerse = new Map<number, { position: number; arabic: string; id: number }[]>()
  offset = 0
  while (true) {
    const { data } = await db.from('words').select('id, verse_id, position, arabic').order('position').range(offset, offset + 999)
    if (!data || data.length === 0) break
    for (const w of data) {
      if (!wordsByVerse.has(w.verse_id)) wordsByVerse.set(w.verse_id, [])
      wordsByVerse.get(w.verse_id)!.push(w)
    }
    offset += data.length
    process.stdout.write(`  ${offset} words fetched...\r`)
    if (data.length < 1000) break
  }
  console.log(`  ${offset} words fetched total.`)

  // 3. Update words.arabic (BW → Arabic) in batches
  console.log('3. Converting word forms to Arabic...')
  let wordCount = 0
  const wordUpdates: { id: number; arabic: string }[] = []

  for (const [, words] of wordsByVerse) {
    for (const w of words) {
      const arabic = bwToArabic(w.arabic)
      if (arabic !== w.arabic) {
        wordUpdates.push({ id: w.id, arabic })
      }
    }
  }

  // Batch update words
  for (let i = 0; i < wordUpdates.length; i += 200) {
    const batch = wordUpdates.slice(i, i + 200)
    // Use individual updates (Supabase doesn't support bulk update by PK easily)
    await Promise.all(batch.map(u =>
      db.from('words').update({ arabic: u.arabic }).eq('id', u.id)
    ))
    wordCount += batch.length
    if (i % 2000 === 0) process.stdout.write(`  ${wordCount}/${wordUpdates.length} words updated...\r`)
  }
  console.log(`  ${wordCount} words updated.`)

  // 4. Reconstruct verse arabic_text from words
  console.log('4. Reconstructing verse arabic_text...')
  let verseCount = 0

  for (let i = 0; i < allVerses.length; i += 100) {
    const batch = allVerses.slice(i, i + 100)
    await Promise.all(batch.map(v => {
      const words = wordsByVerse.get(v.id)
      if (!words || words.length === 0) return Promise.resolve()

      // Sort by position and join with spaces
      const sorted = [...words].sort((a, b) => a.position - b.position)
      const text = sorted.map(w => bwToArabic(w.arabic)).join(' ')

      return db.from('verses').update({ arabic_text: text }).eq('id', v.id)
    }))
    verseCount += batch.length
    if (i % 1000 === 0) process.stdout.write(`  ${verseCount}/${allVerses.length} verses updated...\r`)
  }
  console.log(`  ${verseCount} verses updated.`)

  // Quick check
  const { data: sample } = await db.from('verses').select('surah_id, verse_num, arabic_text').eq('surah_id', 2).eq('verse_num', 2).single()
  console.log('\nVerse 2:2:', sample?.arabic_text)

  console.log('\n=== Done ===')
}

main().catch(console.error)
