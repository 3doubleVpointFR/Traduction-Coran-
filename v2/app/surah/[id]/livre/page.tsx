import { Metadata } from 'next'
import Link from 'next/link'
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

/* Liste des sourates + celles qui ont au moins un verset traduit.
   Le balayage est paginé par 1000 comme sur l'accueil : Supabase ne sait pas
   faire de GROUP BY côté client, et une requête par sourate ferait 114 allers-
   retours. On ne demande que la clé de regroupement, donc la charge utile
   reste minuscule même sur plusieurs milliers de lignes. */
async function getRailData(db: ReturnType<typeof getSupabaseAdmin>) {
  const [{ data: surahs }, translatedIds] = await Promise.all([
    db.from('surahs').select('id, name_ar, name_latin, name_fr').order('id'),
    (async () => {
      const ids = new Set<number>()
      let offset = 0
      while (true) {
        const { data: chunk } = await db
          .from('verse_analyses')
          .select('verses!inner(surah_id)')
          .not('translation_arab', 'is', null)
          .range(offset, offset + 999)
        if (!chunk || chunk.length === 0) break
        for (const row of chunk) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const sid = (row as any).verses?.surah_id
          if (sid) ids.add(sid)
        }
        if (chunk.length < 1000) break
        offset += 1000
      }
      return Array.from(ids)
    })(),
  ])
  return { surahs: surahs ?? [], availableIds: translatedIds }
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

  const [surahRes, versesRes, railRes] = await Promise.all([
    db.from('surahs').select('*').eq('id', surahId).single(),
    db.from('verses').select('id, verse_num, arabic_text').eq('surah_id', surahId).order('verse_num'),
    // Réglette de navigation au pied du livre : les 114 sourates, et celles
    // qui sont réellement lisibles. En parallèle du reste pour ne rien coûter
    // en latence série.
    getRailData(db),
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

  // Fetch translations + segments (phon canonique du pipeline) + words fallback
  const chunks: number[][] = []
  for (let i = 0; i < allVerseIds.length; i += 100) chunks.push(allVerseIds.slice(i, i + 100))
  const [tradResults, wordsResults] = await Promise.all([
    Promise.all(
      chunks.map(chunk =>
        db
          .from('verse_analyses')
          .select('verse_id, translation_arab, segments')
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
  const phonByVerseId = new Map<number, string>()
  // Source primaire : segments[].phon (phon canonique du pipeline, correcte)
  for (const { data: rows } of tradResults) {
    for (const r of (rows ?? []) as Array<{ verse_id: number; translation_arab: string; segments: Array<{ phon?: string }> | null }>) {
      if (!tradByVerseId.has(r.verse_id) && r.translation_arab) tradByVerseId.set(r.verse_id, r.translation_arab)
      if (!phonByVerseId.has(r.verse_id) && Array.isArray(r.segments) && r.segments.length > 0) {
        const phon = r.segments
          .map(s => (s && typeof s.phon === 'string' ? s.phon : ''))
          .filter(Boolean)
          .join(' ')
          .trim()
        if (phon) phonByVerseId.set(r.verse_id, phon)
      }
    }
  }
  // Source fallback : words.transliteration en Buckwalter (versets sans segments)
  const phonBuckets = new Map<number, Array<{ position: number; transliteration: string }>>()
  for (const { data: rows } of wordsResults) {
    for (const w of (rows ?? []) as Array<{ verse_id: number; position: number; transliteration: string }>) {
      if (!w.transliteration) continue
      if (phonByVerseId.has(w.verse_id)) continue // déjà couvert par segments
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

  // première sourate réellement lisible : cible du bouton de retour
  const firstReadableSurahId = railRes.availableIds.length > 0 ? Math.min(...railRes.availableIds) : 1

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
        {/* Sortie obligatoire : la tranche rend les 114 sourates cliquables,
            sans ce retour le lecteur serait piégé sur une page sans navigation. */}
        <div style={{ marginTop: '22px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href={`/surah/${firstReadableSurahId}/livre`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '9px 20px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%)',
              color: '#FFFCF6', fontSize: '13px', fontStyle: 'italic', letterSpacing: '0.08em',
              textDecoration: 'none', fontFamily: "'Cormorant Garamond', serif",
              boxShadow: '0 4px 12px rgba(120,90,30,0.30)',
            }}
          >
            <span aria-hidden>✦</span>
            Revenir au livre
          </Link>
          <Link
            href="/"
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '9px 20px', borderRadius: '999px',
              border: '1px solid rgba(184,150,46,0.42)', background: 'rgba(255,251,240,0.7)',
              color: '#8A6E1F', fontSize: '13px', fontStyle: 'italic', letterSpacing: '0.08em',
              textDecoration: 'none', fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Toutes les sourates
          </Link>
        </div>
      </div>
    )
  }

  return (
    <BookView
      surah={surahRes.data}
      verses={readableVerses}
      pageSize={PAGE_SIZE}
      conclusion={surahConclusion}
      railSurahs={railRes.surahs}
      railAvailableIds={railRes.availableIds}
    />
  )
}
