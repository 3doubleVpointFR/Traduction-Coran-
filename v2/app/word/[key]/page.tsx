import { getSupabaseAdmin } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import RootAnalysisView from '@/components/RootAnalysisView'

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getWordData(key: string) {
  const db = getSupabaseAdmin()
  const { data: analysis } = await db
    .from('word_analyses')
    .select('*')
    .eq('word_key', key)
    .maybeSingle()

  if (!analysis) return null

  const [meaningsRes, dailyRes, vwaRes] = await Promise.all([
    db.from('word_meanings').select('*').eq('analysis_id', analysis.id).order('display_order'),
    db.from('word_daily').select('*').eq('analysis_id', analysis.id),
    db.from('verse_word_analyses')
      .select('sense_chosen, analysis_axes, verse_id, verses!inner(surah_id, verse_num)')
      .eq('word_key', key),
  ])

  // Normalise root_ar pour matcher words.root — les alifs/hamzas peuvent varier :
  //   « أ ك ل » (word_analyses) vs « اكل » (words)
  //   « س و ء » vs « سوا »
  const rootRaw = (analysis.root_ar ?? '').replace(/\s+/g, '')
  const rootFlat = rootRaw
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ء/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
  const rootVariants = Array.from(new Set([rootRaw, rootFlat]))
  const { count: totalQac } = await db
    .from('words')
    .select('id', { count: 'exact', head: true })
    .in('root', rootVariants)

  const meanings = meaningsRes.data ?? []
  const daily = dailyRes.data ?? []
  const vwas = vwaRes.data ?? []

  // Sens par sourate:verset
  const refsBySense: Record<string, string[]> = {}
  const refsByConcept: Record<string, string[]> = {}
  const senseCounts: Record<string, number> = {}
  const conceptCounts: Record<string, number> = {}
  for (const v of vwas) {
    const sense = v.sense_chosen
    const verses = v.verses as unknown as { surah_id: number; verse_num: number }
    const ref = `${verses.surah_id}:${verses.verse_num}`
    if (sense) {
      senseCounts[sense] = (senseCounts[sense] || 0) + 1
      if (!refsBySense[sense]) refsBySense[sense] = []
      if (!refsBySense[sense].includes(ref)) refsBySense[sense].push(ref)
    }
    const axes = v.analysis_axes as Record<string, unknown> | null
    if (axes?.concept_chosen) {
      const c = axes.concept_chosen as string
      conceptCounts[c] = (conceptCounts[c] || 0) + 1
      if (!refsByConcept[c]) refsByConcept[c] = []
      if (!refsByConcept[c].includes(ref)) refsByConcept[c].push(ref)
    }
  }

  return {
    analysis,
    meanings,
    daily,
    totalQac: totalQac || 0,
    totalAnalyzed: vwas.length,
    refsBySense,
    refsByConcept,
    senseCounts,
    conceptCounts,
  }
}

export default async function WordPage({ params }: { params: { key: string } }) {
  // Next.js décode déjà les params en général mais certaines clés (espaces, ḏ, š…) ne le sont pas.
  // On applique un decodeURIComponent défensif pour couvrir les deux cas.
  let key = params.key
  try { key = decodeURIComponent(params.key) } catch { /* déjà décodé */ }
  const data = await getWordData(key)
  if (!data) notFound()

  return (
    <div className="max-w-3xl mx-auto pb-20 px-3 sm:px-4">
      {/* Nav retour */}
      <nav className="pt-4 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: '#8A7428',
            fontSize: '14px',
            fontStyle: 'italic',
            letterSpacing: '0.02em',
            textDecoration: 'none',
          }}
        >
          <span aria-hidden="true">←</span> Retour à l&apos;accueil
        </Link>
      </nav>

      <RootAnalysisView data={data} />
    </div>
  )
}
