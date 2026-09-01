'use client'
import Link from 'next/link'
import React, { useState, useEffect, useCallback, useRef, useMemo, useLayoutEffect } from 'react'

/* ═══════════════════════════════════════════════════════════════════════════
   BookView — vue livre paginée avec pagination JS calculée.

   Architecture (refactor 2026-09-01 v2) :

   1. Le contenu est découpé en ITEMS atomiques : header, chaque verset,
      titre conclusion, chaque bloc HTML de la conclusion (h3, p, ol).
   2. Un MEASURER invisible rend chaque item à la vraie largeur de page,
      permet de mesurer sa hauteur réelle.
   3. Un algo distribue les items dans des PAGES en respectant la hauteur
      max — un item qui déborderait passe à la page suivante.
   4. Un SPREAD = 1 page sur mobile, 2 pages sur desktop. Navigation via
      translateX horizontal.

   Avantage vs CSS multi-column : contrôle total, pas de fragmentation
   imprévisible, chaque page reste intacte visuellement.
   ═══════════════════════════════════════════════════════════════════════════ */

interface Surah {
  id: number
  name_ar: string
  name_latin: string
  name_fr: string
}

interface ReadVerse {
  id: number
  verse_num: number
  arabic_text: string
  translation_arab: string
  phonetic?: string
}

interface Props {
  surah: Surah
  verses: ReadVerse[]
  pageSize: number
  conclusion?: string | null
}

// Palette identique au site
const GOLD = '#B8962E'
const GOLD_DEEP = '#8A6E1F'
const INK = '#1A1410'
const INK_SOFT = '#3A2E22'
const MUTED = '#6B5E52'
const CREAM_PAGE = '#FFFBF0'
const LINE = 'rgba(184,150,46,0.20)'
const LINE_STRONG = 'rgba(184,150,46,0.42)'

// Parseur markdown minimal — headers **X** seul sur une ligne, listes 1., paragraphes.
function parseConclusionMarkdown(md: string): string {
  const lines = md.split('\n')
  const blocks: string[] = []
  let currentList: string[] | null = null
  let paraBuffer: string[] = []
  const flushPara = () => {
    if (paraBuffer.length) {
      const txt = paraBuffer.join(' ').trim()
      if (txt) blocks.push(`<p>${formatInline(txt)}</p>`)
      paraBuffer = []
    }
  }
  const flushList = () => {
    if (currentList && currentList.length) {
      blocks.push(`<ol>${currentList.map(li => `<li>${formatInline(li)}</li>`).join('')}</ol>`)
      currentList = null
    }
  }
  for (const raw of lines) {
    const line = raw.trim()
    if (!line) {
      flushPara(); flushList()
      continue
    }
    const headerMatch = line.match(/^\*\*(.+)\*\*$/)
    if (headerMatch) {
      flushPara(); flushList()
      blocks.push(`<h3>${formatInline(headerMatch[1])}</h3>`)
      continue
    }
    const listMatch = line.match(/^(\d+)\.\s+(.+)$/)
    if (listMatch) {
      flushPara()
      if (!currentList) currentList = []
      currentList.push(listMatch[2])
      continue
    }
    flushList()
    paraBuffer.push(line)
  }
  flushPara(); flushList()
  return blocks.join('\n')
}
function formatInline(txt: string): string {
  return txt
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*][^*]*?)\*(?!\*)/g, '$1<em>$2</em>')
}

type PageItem =
  | { type: 'header' }
  | { type: 'verse'; verse: ReadVerse; isFirst: boolean }
  | { type: 'conclusion-title' }
  | { type: 'conclusion-block'; html: string }

export default function BookView({ surah, verses, pageSize, conclusion }: Props) {
  const hasConclusion = !!(conclusion && conclusion.trim())
  const conclusionHtml = useMemo(() => (hasConclusion ? parseConclusionMarkdown(conclusion!) : ''), [conclusion, hasConclusion])
  const pageForVerse = (verseNum: number) => Math.ceil(verseNum / pageSize)
  const isBaraah = surah.id === 9

  // Toggles arabe/phon
  const [bvOpts, setBvOpts] = useState({ arabic: false, phon: false })
  useEffect(() => {
    if (typeof window === 'undefined') return
    const sync = () => {
      setBvOpts({
        arabic: document.body.classList.contains('bv-show-arabic'),
        phon: document.body.classList.contains('bv-show-phon'),
      })
    }
    sync()
    const mo = new MutationObserver(sync)
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] })
    return () => mo.disconnect()
  }, [])

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(max-width: 900px)')
    const sync = () => setIsMobile(mql.matches)
    sync()
    mql.addEventListener('change', sync)
    return () => mql.removeEventListener('change', sync)
  }, [])

  // Items ordonnés à paginer
  const items: PageItem[] = useMemo(() => {
    const list: PageItem[] = [{ type: 'header' }]
    verses.forEach((v, i) => list.push({ type: 'verse', verse: v, isFirst: i === 0 }))
    if (hasConclusion) {
      list.push({ type: 'conclusion-title' })
      const blocks = conclusionHtml.split('\n').map(l => l.trim()).filter(Boolean)
      blocks.forEach(html => list.push({ type: 'conclusion-block', html }))
    }
    return list
  }, [verses, hasConclusion, conclusionHtml])

  // Pagination state
  const [pages, setPages] = useState<number[][]>([])
  const [pageWidth, setPageWidth] = useState(0)
  const [pageHeight, setPageHeight] = useState(0)
  const [spread, setSpread] = useState(0)

  const bookBodyRef = useRef<HTMLDivElement | null>(null)
  const measureRef = useRef<HTMLDivElement | null>(null)

  const pagesPerSpread = isMobile ? 1 : 2
  const gap = isMobile ? 0 : 80

  // Mesure & distribution en pages
  useLayoutEffect(() => {
    const doMeasure = () => {
      const body = bookBodyRef.current
      const measure = measureRef.current
      if (!body || !measure || !measure.isConnected) return
      const bodyW = body.clientWidth
      const bodyH = body.clientHeight
      if (bodyW <= 0 || bodyH <= 0) return
      const pw = pagesPerSpread === 1 ? bodyW : (bodyW - gap) / pagesPerSpread
      if (pw <= 0) return
      setPageWidth(pw)
      setPageHeight(bodyH)
      // Mesure la hauteur de chaque item : top-to-top diff capture les
      // margins entre items (getBoundingClientRect().height NE compte PAS
      // les margins, ce qui sous-estimait — provoquait débordement du
      // dernier item de la page).
      const kids = Array.from(measure.children) as HTMLElement[]
      const heights: number[] = []
      for (let i = 0; i < kids.length; i++) {
        const rect = kids[i].getBoundingClientRect()
        if (i + 1 < kids.length) {
          const nextRect = kids[i + 1].getBoundingClientRect()
          heights.push(nextRect.top - rect.top)
        } else {
          const mb = parseFloat(window.getComputedStyle(kids[i]).marginBottom) || 0
          heights.push(rect.height + mb)
        }
      }
      // Distribution : chaque page respecte bodyH ; un item qui ne rentre pas passe à la page suivante
      const newPages: number[][] = []
      let cur: number[] = []
      let curH = 0
      for (let i = 0; i < items.length; i++) {
        const h = heights[i] || 0
        if (cur.length > 0 && curH + h > bodyH) {
          newPages.push(cur)
          cur = []
          curH = 0
        }
        cur.push(i)
        curH += h
      }
      if (cur.length > 0) newPages.push(cur)
      setPages(prev => {
        // Éviter update si égal (limite les re-renders)
        if (prev.length === newPages.length && prev.every((p, i) => p.length === newPages[i].length && p.every((v, j) => v === newPages[i][j]))) {
          return prev
        }
        return newPages
      })
      const maxSpread = Math.max(0, Math.ceil(newPages.length / pagesPerSpread) - 1)
      setSpread(s => Math.min(s, maxSpread))
    }
    doMeasure()
    const interval = window.setInterval(doMeasure, 200)
    const stopTimeout = window.setTimeout(() => window.clearInterval(interval), 4000)
    const fontsReady = (document as unknown as { fonts?: { ready: Promise<unknown> } }).fonts?.ready
    fontsReady?.then(() => doMeasure()).catch(() => {})
    const onResize = () => doMeasure()
    window.addEventListener('resize', onResize)
    return () => {
      window.clearInterval(interval)
      window.clearTimeout(stopTimeout)
      window.removeEventListener('resize', onResize)
    }
  }, [items, isMobile, bvOpts.arabic, bvOpts.phon, pagesPerSpread, gap])

  // Nav
  const totalSpreads = Math.max(1, Math.ceil(pages.length / pagesPerSpread))
  const canPrev = spread > 0
  const canNext = spread < totalSpreads - 1
  const goPrev = useCallback(() => { setSpread(s => Math.max(0, s - 1)) }, [])
  const goNext = useCallback(() => { setSpread(s => s + 1) }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight' && canNext) goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goPrev, goNext, canNext])

  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [spread])

  // Reset au premier spread si toggles changent
  useEffect(() => {
    setSpread(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bvOpts.arabic, bvOpts.phon])

  const analyseHref = `/surah/${surah.id}?page=1#verse-${surah.id}-1`

  // translateX = -spread * (pagesPerSpread * pageWidth + pagesPerSpread * gap)
  //            = -spread * pagesPerSpread * (pageWidth + gap)
  const spreadShift = pagesPerSpread * (pageWidth + gap)

  return (
    <div
      className="bv-page"
      style={{
        minHeight: '100vh',
        background: 'transparent',
        color: INK,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <Link
        href={analyseHref}
        target="_blank"
        rel="noopener noreferrer"
        className="bv-floating-toggle"
        title="Ouvrir la vue analyse dans un nouvel onglet"
        aria-label="Ouvrir la vue analyse dans un nouvel onglet"
        style={{
          position: 'fixed',
          top: '18px',
          right: '18px',
          zIndex: 10,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '7px 14px',
          borderRadius: '999px',
          border: `1px solid ${LINE_STRONG}`,
          background: 'rgba(255,251,240,0.85)',
          backdropFilter: 'saturate(180%) blur(12px)',
          WebkitBackdropFilter: 'saturate(180%) blur(12px)',
          boxShadow: '0 2px 8px rgba(120,90,30,0.15), inset 0 1px 0 rgba(255,255,255,0.5)',
          color: GOLD_DEEP,
          fontSize: '12px',
          fontWeight: 500,
          fontStyle: 'italic',
          letterSpacing: '0.06em',
          textDecoration: 'none',
          fontFamily: "'Cormorant Garamond', serif",
          transition: 'background 200ms ease, transform 200ms ease',
        }}
      >
        <span aria-hidden>✦</span>
        Vue analyse
      </Link>

      <div
        className="bv-book-wrap"
        style={{
          padding: '6px 24px 12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          className="book"
          style={{
            maxWidth: isMobile ? undefined : '1180px',
            width: '100%',
            margin: '0 auto',
            background: CREAM_PAGE,
            borderRadius: '4px',
            boxShadow: `
              0 40px 80px -25px rgba(60,40,10,0.28),
              0 20px 40px -15px rgba(60,40,10,0.16),
              inset 0 0 0 1px rgba(184,150,46,0.20)
            `,
            position: 'relative',
            overflow: 'hidden',
            height: isMobile
              ? 'min(720px, calc(100vh - 160px))'
              : 'min(820px, calc(100vh - 110px))',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {!isMobile && (
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                background: `linear-gradient(90deg,
                  rgba(120,90,30,0) 0%,
                  rgba(120,90,30,0.06) 40%,
                  rgba(120,90,30,0.14) 50%,
                  rgba(120,90,30,0.06) 60%,
                  rgba(120,90,30,0) 100%
                )`,
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
          )}

          {/* ═════ ZONE PAGE : contient measurer offscreen + viewport visible ═════ */}
          <div
            ref={bookBodyRef}
            className="book-body"
            style={{
              position: 'relative',
              zIndex: 2,
              padding: isMobile ? '12px 12px 16px' : '20px 40px 20px',
              flex: 1,
              minHeight: 0,
              overflow: 'hidden',
            }}
          >
            {/* MEASURER offscreen — rend chaque item à la vraie pageWidth pour mesurer sa hauteur */}
            <div
              ref={measureRef}
              aria-hidden
              style={{
                position: 'absolute',
                top: -99999,
                left: 0,
                width: pageWidth > 0 ? pageWidth : '100%',
                paddingLeft: isMobile ? '4px' : '10px',
                paddingRight: isMobile ? '12px' : '20px',
                boxSizing: 'border-box',
                visibility: 'hidden',
                fontSize: isMobile ? '11px' : '16px',
                lineHeight: 1.5,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: INK,
                fontWeight: 500,
                textAlign: 'left',
              }}
            >
              {items.map((item, i) => (
                <div key={`m-${i}`}>{renderItem(item, surah, pageForVerse, isBaraah)}</div>
              ))}
            </div>

            {/* VIEWPORT : montre les pages visibles */}
            <div
              className="bv-viewport"
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                className="bv-flow"
                style={{
                  display: 'flex',
                  gap: `${gap}px`,
                  height: '100%',
                  transform: pageWidth > 0
                    ? `translateX(-${spread * spreadShift}px)`
                    : 'none',
                  transition: 'transform 780ms cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform',
                }}
              >
                {pages.map((pageIndices, pIdx) => (
                  <div
                    key={pIdx}
                    className="bv-page-col"
                    style={{
                      width: pageWidth,
                      flex: '0 0 auto',
                      height: '100%',
                      fontSize: isMobile ? '11px' : '16px',
                      lineHeight: 1.5,
                      color: INK,
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      textAlign: 'left',
                      overflow: 'hidden',
                      // Padding-right généreux pour aérer le texte du bord
                      // du livre — même sur desktop, garantit une marge
                      // visible entre le texte et le contour de la page.
                      paddingRight: isMobile ? '12px' : '20px',
                      paddingLeft: isMobile ? '4px' : '10px',
                      boxSizing: 'border-box',
                    }}
                  >
                    {pageIndices.map(i => (
                      <React.Fragment key={i}>
                        {renderItem(items[i], surah, pageForVerse, isBaraah)}
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pied du livre — navigation + compteur */}
          <footer
            style={{
              padding: '12px 60px 16px',
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              gap: '20px',
              fontSize: '13px',
              color: MUTED,
              fontStyle: 'italic',
              letterSpacing: '0.14em',
              position: 'relative',
              zIndex: 2,
              borderTop: `1px solid ${LINE}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                onClick={goPrev}
                disabled={!canPrev}
                className="page-arrow"
                aria-label="Page précédente"
                style={arrowStyle(!canPrev)}
              >
                ←
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontStyle: 'italic', color: GOLD_DEEP, letterSpacing: '0.2em' }}>
              <span className="font-arabic" style={{ fontSize: '14px', color: GOLD_DEEP, fontStyle: 'normal', letterSpacing: '0.02em' }}>
                {surah.name_ar}
              </span>
              <span style={{ fontSize: '10px' }}>
                {spread + 1} / {totalSpreads}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'flex-end' }}>
              <button
                onClick={goNext}
                disabled={!canNext}
                className="page-arrow"
                aria-label="Page suivante"
                style={arrowStyle(!canNext)}
              >
                →
              </button>
            </div>
          </footer>
        </div>

        <div style={{ textAlign: 'center', marginTop: '14px' }}>
          <Link
            href={analyseHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bv-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 24px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%)',
              color: '#FFFCF6',
              fontSize: '14px',
              fontWeight: 500,
              fontStyle: 'italic',
              letterSpacing: '0.08em',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(120,90,30,0.30), inset 0 1px 0 rgba(255,255,255,0.30)',
              transition: 'transform 200ms ease, box-shadow 200ms ease',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            <span aria-hidden>✦</span>
            Explorer l&apos;analyse
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .verse-inline {
          display: block;
          margin-bottom: 10px;
        }
        .bv-arabic-block {
          display: none;
          text-align: center;
          font-size: 22px;
          line-height: 1.6;
          color: ${INK};
          margin: 4px 0 6px;
          padding: 0 6px;
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        body.bv-show-arabic .bv-arabic-block {
          display: block;
        }
        .bv-phon-block {
          display: none;
          text-align: center;
          font-size: 12px;
          line-height: 1.4;
          color: ${MUTED};
          margin: 2px 0 6px;
          padding: 0 6px;
          font-style: italic;
          letter-spacing: 0.02em;
        }
        body.bv-show-phon .bv-phon-block {
          display: block;
        }
        .bv-fr-block {
          display: block;
        }
        .verse-marker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 24px;
          height: 24px;
          padding: 0 7px;
          border-radius: 999px;
          background: rgba(184,150,46,0.08);
          border: 1px solid rgba(184,150,46,0.30);
          color: ${GOLD_DEEP};
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          font-weight: 700;
          vertical-align: 3px;
          margin-right: 9px;
          text-decoration: none;
          transition: background 200ms ease, color 200ms ease, transform 200ms ease, box-shadow 200ms ease;
          cursor: pointer;
        }
        .verse-marker:hover {
          background: linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%);
          color: #FFFCF6;
          border-color: transparent;
          transform: translateY(-1px);
          box-shadow: 0 3px 8px rgba(120,90,30,0.35);
        }
        .bv-floating-toggle:hover {
          background: linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%);
          color: #FFFCF6 !important;
          border-color: transparent;
          transform: translateY(-1px);
        }
        .bv-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(120,90,30,0.40), inset 0 1px 0 rgba(255,255,255,0.30);
        }
        .page-arrow:not(:disabled):hover {
          background: linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%) !important;
          color: #FFFCF6 !important;
          border-color: transparent !important;
          transform: translateY(-1px);
        }
        /* Conclusion styles — chaque bloc est atomique dans notre pagination */
        .bv-conclusion-block {
          overflow: hidden;
          hyphens: auto;
          -webkit-hyphens: auto;
        }
        .bv-conclusion-block, .bv-conclusion-block * {
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
          max-width: 100%;
          box-sizing: border-box;
        }
        .bv-conclusion-block h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-weight: 700;
          color: ${GOLD_DEEP};
          letter-spacing: 0.02em;
          margin: 12px 0 8px 0;
          text-align: left;
          border-bottom: 1px solid rgba(184,150,46,0.28);
          padding-bottom: 4px;
        }
        .bv-conclusion-block:first-child h3 {
          margin-top: 0;
        }
        .bv-conclusion-block p {
          margin: 0 0 12px 0;
          font-size: 15px;
          line-height: 1.55;
          text-indent: 0;
        }
        .bv-conclusion-block strong {
          color: ${GOLD_DEEP};
          font-weight: 700;
        }
        .bv-conclusion-block em {
          font-style: italic;
          color: ${INK_SOFT};
        }
        .bv-conclusion-block ol {
          margin: 8px 0 12px 0;
          padding-left: 22px;
          counter-reset: conclusion-item;
          list-style: none;
        }
        .bv-conclusion-block ol li {
          position: relative;
          margin-bottom: 8px;
          padding-left: 6px;
          counter-increment: conclusion-item;
          font-size: 15px;
          line-height: 1.55;
        }
        .bv-conclusion-block ol li::before {
          content: counter(conclusion-item) ".";
          position: absolute;
          left: -22px;
          top: 0;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          color: ${GOLD};
          font-size: 14px;
          width: 20px;
          text-align: right;
        }
        /* Mobile */
        @media (max-width: 900px) {
          .bv-page {
            overflow-x: hidden !important;
          }
          .bv-book-wrap {
            padding: 8px 12px 12px !important;
          }
          .book {
            border-radius: 3px !important;
            box-shadow:
              0 8px 24px -6px rgba(60,40,10,0.28),
              0 2px 8px rgba(60,40,10,0.12),
              inset 0 0 0 1px rgba(184,150,46,0.22) !important;
          }
          .book > footer {
            padding-left: 14px !important;
            padding-right: 14px !important;
          }
          .bv-arabic-block {
            font-size: 15px !important;
            margin: 3px 0 4px !important;
          }
          .bv-phon-block {
            font-size: 8.5px !important;
            margin: 1px 0 4px !important;
          }
          .verse-marker {
            min-width: 17px !important;
            height: 17px !important;
            font-size: 10px !important;
            padding: 0 5px !important;
            margin-right: 6px !important;
            vertical-align: 2px !important;
          }
          .bv-conclusion-block h3 {
            font-size: 10.5px !important;
            margin: 8px 0 5px 0 !important;
          }
          .bv-conclusion-block p {
            font-size: 10.5px !important;
            line-height: 1.55 !important;
            margin: 0 0 8px 0 !important;
          }
          .bv-conclusion-block ol li {
            font-size: 10.5px !important;
            margin-bottom: 5px !important;
          }
          .bv-conclusion-block ol li::before {
            font-size: 10px !important;
            width: 14px !important;
          }
        }
      ` }} />
    </div>
  )
}

function renderItem(
  item: PageItem,
  surah: Surah,
  pageForVerse: (n: number) => number,
  isBaraah: boolean,
): React.ReactNode {
  switch (item.type) {
    case 'header':
      return <SurahHeader surah={surah} isBaraah={isBaraah} />
    case 'verse':
      return (
        <VerseParagraph
          verse={item.verse}
          surahId={surah.id}
          pageForVerse={pageForVerse}
          isFirst={item.isFirst}
        />
      )
    case 'conclusion-title':
      return <ConclusionTitle surah={surah} />
    case 'conclusion-block':
      return (
        <div
          className="bv-conclusion-block"
          dangerouslySetInnerHTML={{ __html: item.html }}
        />
      )
  }
}

function SurahHeader({ surah, isBaraah }: { surah: Surah; isBaraah: boolean }) {
  return (
    <>
      <header style={{ textAlign: 'center', padding: '0 0 4px', position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, fontWeight: 600, marginBottom: '6px', fontFamily: "'Cormorant Garamond', serif" }}>
          Sourate {toRoman(surah.id)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '22px', marginBottom: '6px' }}>
          <span aria-hidden style={{ color: GOLD, fontSize: '16px', opacity: 0.6 }}>❦</span>
          <h1 className="font-arabic" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: GOLD_DEEP, lineHeight: 1, margin: 0, letterSpacing: '0.02em' }}>
            {surah.name_ar}
          </h1>
          <span aria-hidden style={{ color: GOLD, fontSize: '16px', opacity: 0.6, transform: 'scaleX(-1)' }}>❦</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', color: INK_SOFT, flexWrap: 'wrap' }}>
          <span style={{ flex: '0 0 50px', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.7 }} />
          <span style={{ fontSize: '14px', letterSpacing: '0.2em', fontWeight: 500 }}>
            {surah.name_latin.toUpperCase()}
          </span>
          <span aria-hidden style={{ color: GOLD, fontSize: '11px' }}>✦</span>
          <span style={{ fontSize: '13px', fontStyle: 'italic', color: MUTED }}>
            {surah.name_fr}
          </span>
          <span style={{ flex: '0 0 50px', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.7 }} />
        </div>
      </header>
      {!isBaraah && (
        <div style={{ padding: '6px 0 6px', textAlign: 'center' }}>
          <div className="font-arabic" style={{ fontSize: '22px', color: INK, lineHeight: 1.3, letterSpacing: '0.02em', fontWeight: 400 }}>
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </div>
          {surah.id !== 1 && (
            <div style={{ fontSize: '12px', color: MUTED, fontStyle: 'italic', marginTop: '8px' }}>
              Au nom de Dieu, le Tout-Miséricordieux, le Très-Miséricordieux
            </div>
          )}
        </div>
      )}
      <div style={{ padding: '4px 0 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
          <span style={{ flex: '0 0 60px', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.5 }} />
          <span aria-hidden style={{ color: GOLD, fontSize: '10px' }}>✦</span>
          <span style={{ flex: '0 0 60px', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.5 }} />
        </div>
      </div>
    </>
  )
}

function ConclusionTitle({ surah }: { surah: Surah }) {
  return (
    <div style={{ textAlign: 'center', margin: '18px 0 14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '6px' }}>
        <span style={{ flex: '0 0 30px', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.7 }} />
        <span aria-hidden style={{ color: GOLD, fontSize: '12px' }}>✦</span>
        <span style={{ flex: '0 0 30px', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.7 }} />
      </div>
      <div style={{ fontSize: '10px', letterSpacing: '0.32em', textTransform: 'uppercase', color: GOLD, fontWeight: 700 }}>
        Conclusion
      </div>
      <div style={{ fontSize: '15px', fontStyle: 'italic', color: GOLD_DEEP, marginTop: '4px', fontWeight: 500, letterSpacing: '0.02em' }}>
        {surah.name_latin} · {surah.name_fr}
      </div>
    </div>
  )
}

function arrowStyle(disabled: boolean): React.CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: `1px solid ${LINE_STRONG}`,
    background: 'rgba(255,251,240,0.7)',
    color: GOLD_DEEP,
    fontSize: '16px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.35 : 1,
    transition: 'background 200ms ease, transform 200ms ease',
    fontFamily: "'Cormorant Garamond', serif",
  }
}

function VerseParagraph({
  verse,
  surahId,
  pageForVerse,
}: {
  verse: ReadVerse
  surahId: number
  pageForVerse: (n: number) => number
  isFirst?: boolean
}) {
  return (
    <div
      id={`livre-verse-${surahId}-${verse.verse_num}`}
      className="verse-inline"
    >
      {verse.arabic_text && (
        <div className="bv-arabic-block font-arabic" dir="rtl" lang="ar">
          {verse.arabic_text}
        </div>
      )}
      {verse.phonetic && (
        <div className="bv-phon-block">
          {verse.phonetic}
        </div>
      )}
      <div className="bv-fr-block">
        <Link
          href={`/surah/${surahId}?page=${pageForVerse(verse.verse_num)}#verse-${surahId}-${verse.verse_num}`}
          target="_blank"
          rel="noopener noreferrer"
          className="verse-marker"
          title={`Analyser le signe ${verse.verse_num} (nouvel onglet)`}
          aria-label={`Analyser le signe ${verse.verse_num} dans un nouvel onglet`}
        >
          {verse.verse_num}
        </Link>
        {verse.translation_arab}
      </div>
    </div>
  )
}

function toRoman(n: number): string {
  const r: Array<[number, string]> = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ]
  let s = ''
  for (const [v, sym] of r) while (n >= v) { s += sym; n -= v }
  return s
}
