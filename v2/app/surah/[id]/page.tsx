import { Metadata } from 'next'
import { getSupabaseAdmin } from '@/lib/supabase'
import SurahView from '@/components/SurahView'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

const PAGE_SIZE = 10

interface Props {
  params: { id: string }
  searchParams: { page?: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const surahId = parseInt(params.id)
  const db = getSupabaseAdmin()
  const { data: surah } = await db.from('surahs').select('name_latin, name_fr').eq('id', surahId).single()

  return {
    title: surah
      ? `${surah.name_latin} — ${surah.name_fr} · Un Coran Arab`
      : "Sourate · Un Coran Arab",
  }
}

export default async function SurahPage({ params, searchParams }: Props) {
  const surahId = parseInt(params.id)
  const requestedPage = Math.max(1, parseInt(searchParams?.page || '1', 10) || 1)

  if (isNaN(surahId) || surahId < 1 || surahId > 114) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl text-gray-500">Sourate introuvable</h2>
        <p className="text-gray-400 mt-2">ID doit être entre 1 et 114</p>
      </div>
    )
  }

  const db = getSupabaseAdmin()

  const [surahRes, versesRes] = await Promise.all([
    db.from('surahs').select('*').eq('id', surahId).single(),
    db.from('verses').select('*').eq('surah_id', surahId).order('verse_num'),
  ])

  if (!surahRes.data) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl text-gray-500">Sourate introuvable</h2>
      </div>
    )
  }

  // Filtre : on ne garde que les versets effectivement analysés (translation_arab non-null).
  const allVerses = versesRes.data ?? []
  const allVerseIds = allVerses.map(v => v.id)
  const doneVerseIds = new Set<number>()
  for (let i = 0; i < allVerseIds.length; i += 100) {
    const chunk = allVerseIds.slice(i, i + 100)
    const { data: doneRows } = await db
      .from('verse_analyses')
      .select('verse_id')
      .in('verse_id', chunk)
      .not('translation_arab', 'is', null)
    for (const r of doneRows ?? []) doneVerseIds.add(r.verse_id)
  }
  const filteredVerses = allVerses.filter(v => doneVerseIds.has(v.id))

  // Si aucun verset analysé : afficher un message et ne pas surcharger.
  if (filteredVerses.length === 0) {
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

  // ─── PAGINATION SERVEUR ───
  // On ne fetch les words + analyses QUE pour les versets de la page courante.
  // Réduit drastiquement la taille du payload + la durée de la requête.
  const totalPages = Math.max(1, Math.ceil(filteredVerses.length / PAGE_SIZE))
  const currentPage = Math.min(requestedPage, totalPages)
  const startIdx = (currentPage - 1) * PAGE_SIZE
  const endIdx = startIdx + PAGE_SIZE
  const pageVerses = filteredVerses.slice(startIdx, endIdx)
  const pageVerseIds = pageVerses.map(v => v.id)

  // Liste légère de tous les verse_num analysés (pour le verse jumper :
  // il a besoin de connaître TOUS les versets disponibles pour calculer
  // sur quelle page se trouve un verset cible)
  const allDoneVerseNums = filteredVerses.map(v => v.verse_num)

  // Get words for CURRENT PAGE verses only
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wordsByVerse: Record<number, any[]> = {}
  if (pageVerseIds.length > 0) {
    for (let offset = 0; ; offset += 1000) {
      const { data: batch } = await db
        .from('words')
        .select('*')
        .in('verse_id', pageVerseIds)
        .order('position')
        .range(offset, offset + 999)

      if (!batch || batch.length === 0) break
      for (const w of batch) {
        if (!wordsByVerse[w.verse_id]) wordsByVerse[w.verse_id] = []
        wordsByVerse[w.verse_id]!.push(w)
      }
      if (batch.length < 1000) break
    }
  }

  // Get analyses for CURRENT PAGE verses only.
  // IMPORTANT : on filtre sur translation_arab non-null + on prend la plus récente,
  // sinon une vieille ligne sans traduction peut écraser la bonne dans la map et
  // faire apparaître le bouton "Traduire ce signe" sur un verset déjà traduit.
  const analysesByVerse: Record<number, unknown> = {}
  if (pageVerseIds.length > 0) {
    const { data: analyses } = await db
      .from('verse_analyses')
      .select('id, verse_id, segments, full_translation, translation_arab, translation_explanation, model_used, prompt_version, generated_at')
      .in('verse_id', pageVerseIds)
      .not('translation_arab', 'is', null)
      .order('generated_at', { ascending: false })

    for (const a of analyses ?? []) {
      // Première itération = ligne la plus récente (ordre desc) → on ne l'écrase pas
      if (!analysesByVerse[a.verse_id]) analysesByVerse[a.verse_id] = a
    }
  }

  return (
    <SurahView
      surah={surahRes.data}
      verses={pageVerses}
      wordsByVerse={wordsByVerse}
      analysesByVerse={analysesByVerse}
      currentPage={currentPage}
      totalPages={totalPages}
      pageSize={PAGE_SIZE}
      allDoneVerseNums={allDoneVerseNums}
    />
  )
}
