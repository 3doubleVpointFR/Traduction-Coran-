import { getSupabaseAdmin } from '@/lib/supabase'
import SurahGrid from '@/components/SurahGrid'
import TutorialModal from '@/components/TutorialModal'
import HomeMethodology from '@/components/HomeMethodology'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

async function getData() {
  const db = getSupabaseAdmin()
  const surahsRes = await db.from('surahs').select('id, name_ar, name_latin, name_fr, verse_count').order('id')

  // Récupère les surah_id qui possèdent au moins un verset analysé.
  const doneSurahIds = new Set<number>()
  let offset = 0
  while (true) {
    const { data: chunk } = await db
      .from('verse_analyses')
      .select('verse_id, verses!inner(surah_id)')
      .not('translation_arab', 'is', null)
      .range(offset, offset + 999)
    if (!chunk || chunk.length === 0) break
    for (const row of chunk) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sid = (row as any).verses?.surah_id
      if (sid) doneSurahIds.add(sid)
    }
    if (chunk.length < 1000) break
    offset += 1000
  }

  const allSurahs = surahsRes.data ?? []
  const surahs = allSurahs.filter(s => doneSurahIds.has(s.id))

  return { surahs }
}

export default async function HomePage() {
  const { surahs } = await getData()

  return (
    <div className="space-y-9 sm:space-y-10 pb-20">
      {/* ═══ HERO ═══ */}
      <section className="text-center pt-4 sm:pt-5">
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: '#B8962E',
            fontSize: 'clamp(1.76rem, 7.6vw, 3.56rem)',
            fontWeight: 700,
            letterSpacing: 'clamp(0.08em, 1vw, 0.14em)',
            lineHeight: 1.05,
            margin: 0,
            textShadow: '0 1px 0 rgba(184,150,46,0.06)',
          }}
        >
          UN CORAN ARAB
        </h1>
        <div
          className="flex items-center justify-center gap-5 mt-2 mb-1 mx-auto"
          style={{ maxWidth: '340px' }}
          aria-hidden="true"
        >
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(184,150,46,0.45))' }} />
          <span style={{ color: '#B8962E', fontSize: '12px', lineHeight: 1, opacity: 0.85 }}>✦</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(184,150,46,0.45))' }} />
        </div>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: '#6B5E52',
            fontSize: 'clamp(0.72rem, 2.2vw, 1rem)',
            fontWeight: 500,
            letterSpacing: 'clamp(0.08em, 1vw, 0.18em)',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Un outil de méditation du Coran
        </p>
      </section>

      {/* ═══ VERSET KHALĪFA — invitation spirituelle avant l'action ═══ */}
      <section className="max-w-2xl mx-auto text-center px-4 sm:px-3 py-3 sm:py-0" aria-label="Verset d'introduction">
        <figure className="m-0 relative">

          <blockquote className="m-0">
            <p
              className="font-arabic"
              lang="ar"
              dir="rtl"
              style={{
                fontSize: 'clamp(1.5rem, 6.5vw, 2.25rem)',
                color: '#8A7428',
                lineHeight: 1.9,
                margin: 0,
                fontWeight: 400,
              }}
            >
              إِنِّى جَاعِلٌ فِى ٱلْأَرْضِ خَلِيفَةً
            </p>
            <figcaption
              className="italic mt-2 px-2"
              style={{
                color: '#5A4E42',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(0.95rem, 3.2vw, 1.1rem)',
                lineHeight: 1.55,
              }}
            >
              «&nbsp;Je vais établir sur la terre un <span className="not-italic font-semibold" style={{ color: '#8A7428' }}>khalifa</span>&nbsp;»
              <span className="block mt-1.5 not-italic" style={{ color: '#8A7E72', fontSize: '0.78em', letterSpacing: '0.08em' }}>
                — sourate 2, signe 30 —
              </span>
            </figcaption>
          </blockquote>
        </figure>

        {/* CTA Visite guidée — directement sous la référence du verset */}
        <div className="flex justify-center mt-6 sm:mt-7">
          <TutorialModal />
        </div>
      </section>

      {/* ═══ SOURATES — l'action principale ═══ */}
      <section className="max-w-4xl mx-auto px-1 sm:px-0" data-tour-surah-grid="1" aria-labelledby="surahs-heading">
        <div className="mb-5 sm:mb-5">
          <h2
            id="surahs-heading"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#1A1410',
              fontSize: 'clamp(1.25rem, 4.5vw, 1.6rem)',
              letterSpacing: '0.04em',
              fontWeight: 600,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Sourates explorables
          </h2>
          <p className="italic mt-1.5" style={{ color: '#6B5E52', fontSize: 'clamp(12.5px, 3vw, 13.5px)', lineHeight: 1.5 }}>
            Choisis une sourate pour commencer ta méditation
          </p>
        </div>

        <SurahGrid surahs={surahs} />
      </section>

      {/* ═══ MÉTHODOLOGIE — repliable, pour ceux qui veulent comprendre ═══ */}
      <HomeMethodology />

      {/* ═══ MANIFESTE — réflexion de clôture, discrète et intégrée au flux ═══ */}
      <section className="max-w-xl mx-auto text-center px-4 sm:px-3 pt-4">
        <p
          className="italic mb-3"
          style={{
            color: '#5A4E42',
            lineHeight: 1.55,
            fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            letterSpacing: '0.01em',
          }}
        >
          Ce site n&apos;est pas une traduction de plus.
        </p>
        <p
          style={{
            color: '#6B5E52',
            lineHeight: 1.65,
            fontSize: 'clamp(0.82rem, 1.9vw, 0.9rem)',
            maxWidth: '32rem',
            margin: '0 auto 0.75rem',
          }}
        >
          C&apos;est un <span style={{ color: '#8A7428', fontWeight: 600 }}>outil de méditation</span> qui te permet d&apos;explorer
          le Coran <span className="italic">mot par mot, racine par racine</span>, depuis l&apos;étymologie jusqu&apos;au sens contextuel.
          La traduction n&apos;est qu&apos;un point de départ — un raisonnement transparent que tu peux suivre ou contester.
        </p>
        <p
          style={{
            color: '#6B5E52',
            lineHeight: 1.65,
            fontSize: 'clamp(0.82rem, 1.9vw, 0.9rem)',
            maxWidth: '32rem',
            margin: '0 auto',
          }}
        >
          Le Coran a donné à l&apos;humain une mission :{' '}
          <span style={{ color: '#8A7428', fontWeight: 600 }}>
            être khalifa de Dieu sur terre — vivifier la terre, établir la justice, réaliser son adoration
          </span>.
          Chaque sens est éclairé à la lumière de cette finalité.
        </p>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="max-w-2xl mx-auto text-center pt-8" style={{ borderTop: '1px solid rgba(184,150,46,0.18)' }}>
        <p style={{ color: '#6B5E52', fontSize: '12.5px', lineHeight: 1.6 }}>
          Un Coran Arab · Outil de méditation et d&apos;analyse étymologique du Coran
        </p>
        <p className="italic mt-1" style={{ color: '#8A7E72', fontSize: '12px' }}>
          La traduction proposée n&apos;est jamais le dernier mot — c&apos;est une invitation à raisonner.
        </p>
      </footer>
    </div>
  )
}
