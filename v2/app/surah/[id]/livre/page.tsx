import { Metadata } from 'next'
import { getSupabaseAdmin } from '@/lib/supabase'
import { buckwalterToPhonetic } from '@/lib/utils'
import BookView from '@/components/BookView'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

const PAGE_SIZE = 10 // même valeur que la vue analyse — pour calculer la page cible du lien retour analyse

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const surahId = parseInt(params.id)
  const db = getSupabaseAdmin()
  const { data: surah } = await db.from('surahs').select('name_latin, name_fr').eq('id', surahId).single()
  return {
    title: surah
      ? `${surah.name_latin} — ${surah.name_fr} · Vue livre · Un Coran Arab`
      : "Sourate · Vue livre · Un Coran Arab",
  }
}

export default async function SurahLivrePage({ params }: Props) {
  const surahId = parseInt(params.id)
  if (isNaN(surahId) || surahId < 1 || surahId > 114) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl text-gray-500">Sourate introuvable</h2>
      </div>
    )
  }

  const db = getSupabaseAdmin()

  const [surahRes, versesRes] = await Promise.all([
    db.from('surahs').select('*').eq('id', surahId).single(),
    db.from('verses').select('id, verse_num, arabic_text').eq('surah_id', surahId).order('verse_num'),
  ])

  // Conclusion de la sourate — stockée sur le dernier verset via verse_analyses.surah_conclusion
  const lastVerseId = (versesRes.data ?? []).slice(-1)[0]?.id
  const { data: conclusionRow } = lastVerseId
    ? await db.from('verse_analyses').select('surah_conclusion').eq('verse_id', lastVerseId).maybeSingle()
    : { data: null as null | { surah_conclusion: string | null } }
  const surahConclusion = conclusionRow?.surah_conclusion ?? null

  if (!surahRes.data) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl text-gray-500">Sourate introuvable</h2>
      </div>
    )
  }

  const allVerses = versesRes.data ?? []
  const allVerseIds = allVerses.map(v => v.id)

  // Fetch translations + words (phonétique) en chunks parallèles
  const chunks: number[][] = []
  for (let i = 0; i < allVerseIds.length; i += 100) chunks.push(allVerseIds.slice(i, i + 100))
  const [tradResults, wordsResults] = await Promise.all([
    Promise.all(
      chunks.map(chunk =>
        db
          .from('verse_analyses')
          .select('verse_id, translation_arab')
          .in('verse_id', chunk)
          .not('translation_arab', 'is', null)
      )
    ),
    Promise.all(
      chunks.map(chunk =>
        db
          .from('words')
          .select('verse_id, position, transliteration')
          .in('verse_id', chunk)
          .order('position')
          .range(0, 4999)
      )
    ),
  ])
  const tradByVerseId = new Map<number, string>()
  for (const { data: rows } of tradResults) {
    for (const r of (rows ?? []) as Array<{ verse_id: number; translation_arab: string }>) {
      if (!tradByVerseId.has(r.verse_id) && r.translation_arab) tradByVerseId.set(r.verse_id, r.translation_arab)
    }
  }
  // Aggreg phon par verse_id = concat des transliteration des mots
  const phonByVerseId = new Map<number, string>()
  const phonBuckets = new Map<number, Array<{ position: number; transliteration: string }>>()
  for (const { data: rows } of wordsResults) {
    for (const w of (rows ?? []) as Array<{ verse_id: number; position: number; transliteration: string }>) {
      if (!w.transliteration) continue
      if (!phonBuckets.has(w.verse_id)) phonBuckets.set(w.verse_id, [])
      phonBuckets.get(w.verse_id)!.push(w)
    }
  }
  for (const [vid, list] of phonBuckets) {
    list.sort((a, b) => a.position - b.position)
    phonByVerseId.set(vid, list.map(w => buckwalterToPhonetic(w.transliteration || '')).join(' '))
  }

  // Ne garde que les versets avec traduction
  const readableVerses = allVerses
    .filter(v => tradByVerseId.has(v.id))
    .map(v => ({
      id: v.id,
      verse_num: v.verse_num,
      arabic_text: v.arabic_text,
      translation_arab: tradByVerseId.get(v.id)!,
      phonetic: phonByVerseId.get(v.id) ?? '',
    }))

  if (readableVerses.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="font-arabic text-5xl mb-3" style={{ color: '#B8962E' }}>{surahRes.data.name_ar}</h1>
        <h2 className="text-xl mb-4" style={{ color: '#1A1410', fontFamily: "'Cormorant Garamond', serif" }}>
          {surahRes.data.name_latin} · {surahRes.data.name_fr}
        </h2>
        <p style={{ color: '#9E9089', fontSize: '14px' }}>
          Aucun signe traduit pour le moment dans cette sourate.
        </p>
      </div>
    )
  }

  return <BookView surah={surahRes.data} verses={readableVerses} pageSize={PAGE_SIZE} conclusion={surahConclusion} />
}
