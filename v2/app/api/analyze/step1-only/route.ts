import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { tagVerse, cleanArabicText } from '@/lib/llm'

export async function POST(req: Request) {
  const { surah_id, verse_num } = await req.json()
  const db = getSupabaseAdmin()

  const { data: verse } = await db
    .from('verses')
    .select('id, arabic_text')
    .eq('surah_id', surah_id)
    .eq('verse_num', verse_num)
    .single()

  if (!verse) return NextResponse.json({ error: 'Verse not found' }, { status: 404 })

  const cleanedArabic = cleanArabicText(verse.arabic_text)
  const verseRef = `${surah_id}:${verse_num}`

  const { segments: rawSegments } = await tagVerse(verseRef, cleanedArabic)
  const sorted = [...rawSegments].sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
  const taggedSegments = sorted.filter((s, i) => i === 0 || s.arabic !== sorted[i - 1].arabic)

  // Normalize keys
  const normalizeKey = (key: string) => key
    .replace(/ḥ/g, 'h').replace(/ʿ/g, 'e').replace(/ʾ/g, 'a')
    .replace(/ḍ/g, 'd').replace(/ṣ/g, 's').replace(/ṭ/g, 't')
    .replace(/ẓ/g, 'z').replace(/ġ/g, 'gh')
    .replace(/ā/g, 'a').replace(/ī/g, 'i').replace(/ū/g, 'u')

  for (const s of taggedSegments) {
    if (s.key) s.key = normalizeKey(s.key)
  }

  return NextResponse.json({
    verse_id: verse.id,
    verse_ref: verseRef,
    arabic: cleanedArabic,
    segments: taggedSegments,
  })
}
