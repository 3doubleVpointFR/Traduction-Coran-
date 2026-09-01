'use client'
import Link from 'next/link'
import React, { useState, useEffect, useCallback, useRef, useMemo, useLayoutEffect } from 'react'

/* ═══════════════════════════════════════════════════════════════════════════
   BookView — vue livre paginée avec conclusion intégrée au flux.

   Architecture (refactor 2026-09-01) :

   1. UN SEUL flux de contenu : versets + titre CONCLUSION + conclusion HTML.
   2. CSS `columnCount: 2` (1 sur mobile) + `columnFill: auto` : le browser
      crée AUTANT de colonnes que nécessaire pour tenir tout le contenu.
   3. Pagination : mesure `scrollWidth / clientWidth` → nombre de spreads,
      puis `transform: translateX(-spread * spreadWidth)` pour naviguer.

   Aucune estimation. Aucun split ad-hoc. Le browser garantit qu'aucun
   contenu n'est perdu ni coupé au milieu. Marche pour tous les toggles
   (arabe/phon) et toutes les tailles d'écran automatiquement.
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

// Parseur markdown minimal pour la conclusion : gras **X**, italique *X*,
// headers (paragraphe qui est en entier **xxx**), listes numérotées "1. ...",
// paragraphes séparés par \n\n.
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

export default function BookView({ surah, verses, pageSize, conclusion }: Props) {
  const hasConclusion = !!(conclusion && conclusion.trim())
  const conclusionHtml = useMemo(() => (hasConclusion ? parseConclusionMarkdown(conclusion!) : ''), [conclusion, hasConclusion])
  const pageForVerse = (verseNum: number) => Math.ceil(verseNum / pageSize)
  const isBaraah = surah.id === 9

  // Toggles arabe/phon observés depuis body classes (contrôlés par le menu ≡)
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

  // Pagination state — spread = index actuel, totalSpreads = calculé après mesure
  const [spread, setSpread] = useState(0)
  const [totalSpreads, setTotalSpreads] = useState(1)
  const [viewportWidth, setViewportWidth] = useState(0)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const flowRef = useRef<HTMLDivElement | null>(null)
  const endMarkerRef = useRef<HTMLSpanElement | null>(null)

  // Mesure & recalcul du nombre de spreads.
  // On utilise un sentinel <span> en fin de flow au lieu de scrollWidth :
  // scrollWidth peut inclure une colonne « phantom » vide quand le contenu
  // tient exactement, ce qui créait un spread vierge en fin. Le sentinel,
  // placé après le dernier contenu utile, donne l'extent visuel réel via
  // getBoundingClientRect().right - flow.getBoundingClientRect().left.
  const remeasure = useCallback(() => {
    const v = viewportRef.current
    const f = flowRef.current
    if (!v || !f) return
    const vw = v.clientWidth
    if (vw <= 0) return
    setViewportWidth(vw)
    const gap = isMobile ? 20 : 80
    requestAnimationFrame(() => {
      if (!f.isConnected) return
      const marker = endMarkerRef.current
      let extent: number
      if (marker && marker.isConnected) {
        const flowLeft = f.getBoundingClientRect().left
        const markerRect = marker.getBoundingClientRect()
        // Position du sentinel = fin visuelle du contenu utile
        extent = markerRect.right - flowLeft
        // Filet de sécurité : si le sentinel n'a pas encore été fragmenté
        // correctement (retourne 0×0 ou position à gauche), fallback scrollWidth.
        if (extent <= 0) extent = f.scrollWidth
      } else {
        extent = f.scrollWidth
      }
      // Tolérance 20px pour arrondis subpixel (retour à un chiffre serré
      // maintenant qu'on mesure le contenu réel et non le padding phantom).
      const n = Math.max(1, Math.ceil((extent - 20) / (vw + gap)))
      setTotalSpreads(n)
      setSpread(s => Math.min(s, n - 1))
    })
  }, [isMobile])

  useLayoutEffect(() => {
    remeasure()
    // Le layout multi-column peut prendre plusieurs frames à se stabiliser
    // (surtout après toggle arabe/phon qui change les hauteurs des versets).
    // On re-mesure à intervalles pour capturer l'état final.
    const t1 = window.setTimeout(remeasure, 100)
    const t2 = window.setTimeout(remeasure, 400)
    const t3 = window.setTimeout(remeasure, 1200)
    const onResize = () => remeasure()
    window.addEventListener('resize', onResize)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
      window.removeEventListener('resize', onResize)
    }
  }, [remeasure, verses, conclusion, bvOpts.arabic, bvOpts.phon, isMobile])

  // Navigation
  const canPrev = spread > 0
  const canNext = spread < totalSpreads - 1
  const goPrev = useCallback(() => { if (canPrev) setSpread(s => s - 1) }, [canPrev])
  const goNext = useCallback(() => { if (canNext) setSpread(s => s + 1) }, [canNext])

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goPrev, goNext])

  // Scroll top quand on change de spread
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [spread])

  // Reset au premier spread si toggles changent (contenu réorganisé)
  useEffect(() => {
    setSpread(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bvOpts.arabic, bvOpts.phon])

  // Lien vue analyse — vers le premier verset (contexte principal)
  const analyseHref = `/surah/${surah.id}?page=1#verse-${surah.id}-1`

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
      {/* Toggle Analyse flottant top-right */}
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

      {/* ═══════════════ LIVRE OUVERT ═══════════════ */}
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
            // Mobile : width 100% du wrap qui a padding 12px de chaque côté
            // → centrage garanti sans risque de débordement horizontal.
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
            // Desktop : max 820px ; Mobile : prend la place disponible verticalement
            // (livre en portrait, presque plein écran → l'utilisateur zoome pour lire).
            height: isMobile
              ? 'min(720px, calc(100vh - 160px))'
              : 'min(820px, calc(100vh - 110px))',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Pliure centrale douce — visible en desktop ET mobile (2 cols partout) */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: isMobile ? '20px' : '60px',
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


          {/* HEADER SOURATE — uniquement sur spread 0 */}
          {spread === 0 && (
            <>
              <header
                style={{
                  textAlign: 'center',
                  padding: '16px 40px 4px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: GOLD,
                    fontWeight: 600,
                    marginBottom: '6px',
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Sourate {toRoman(surah.id)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '22px', marginBottom: '6px' }}>
                  <span aria-hidden style={{ color: GOLD, fontSize: '16px', opacity: 0.6 }}>❦</span>
                  <h1 className="font-arabic" style={{ fontSize: 'clamp(36px, 4vw, 48px)', color: GOLD_DEEP, lineHeight: 1, margin: 0, letterSpacing: '0.02em' }}>
                    {surah.name_ar}
                  </h1>
                  <span aria-hidden style={{ color: GOLD, fontSize: '16px', opacity: 0.6, transform: 'scaleX(-1)' }}>❦</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', color: INK_SOFT }}>
                  <span style={{ flex: '0 0 50px', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.7 }} />
                  <span style={{ fontSize: '16px', letterSpacing: '0.2em', fontWeight: 500 }}>
                    {surah.name_latin.toUpperCase()}
                  </span>
                  <span aria-hidden style={{ color: GOLD, fontSize: '11px' }}>✦</span>
                  <span style={{ fontSize: '14px', fontStyle: 'italic', color: MUTED }}>
                    {surah.name_fr}
                  </span>
                  <span style={{ flex: '0 0 50px', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.7 }} />
                </div>
              </header>

              {/* BASMALA (spread 0 uniquement, sauf S9) */}
              {!isBaraah && (
                <div style={{ padding: '4px 40px 4px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                  <div className="font-arabic" style={{ fontSize: '24px', color: INK, lineHeight: 1.3, letterSpacing: '0.02em', fontWeight: 400 }}>
                    بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
                  </div>
                  {surah.id !== 1 && (
                    <div style={{ fontSize: '13px', color: MUTED, fontStyle: 'italic', marginTop: '10px' }}>
                      Au nom de Dieu, le Tout-Miséricordieux, le Très-Miséricordieux
                    </div>
                  )}
                </div>
              )}

              {/* Séparateur fin */}
              <div style={{ padding: '4px 60px 12px', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
                  <span style={{ flex: '0 0 140px', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.5 }} />
                  <span aria-hidden style={{ color: GOLD, fontSize: '10px' }}>✦</span>
                  <span style={{ flex: '0 0 140px', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.5 }} />
                </div>
              </div>
            </>
          )}

          {/* ═════ CORPS PAGINÉ ═════
              Un seul flux (versets + conclusion) réparti par le browser
              en autant de colonnes que nécessaire. Pagination via translateX. */}
          <div
            className="book-body"
            style={{
              position: 'relative',
              zIndex: 2,
              padding: spread === 0 ? '4px 56px 20px' : '32px 56px 20px',
              flex: 1,
              minHeight: 0,
              overflow: 'hidden',
            }}
          >
            <div
              ref={viewportRef}
              className="bv-viewport"
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                ref={flowRef}
                className="bv-flow"
                style={{
                  width: '100%',
                  columnCount: 2,
                  columnGap: isMobile ? '20px' : '80px',
                  columnFill: 'auto',
                  height: '100%',
                  // Mobile : police réduite ~30% (les gens zoomeront pour lire).
                  fontSize: isMobile ? '11px' : '16px',
                  lineHeight: 1.5,
                  color: INK,
                  fontWeight: 500,
                  letterSpacing: '0.005em',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  textAlign: 'justify',
                  hyphens: 'auto',
                  // La largeur d'un « spread » = viewport width + column-gap
                  // (car le browser insère un gap entre chaque paire de
                  // colonnes, pas seulement AU SEIN d'un spread).
                  transform: viewportWidth > 0
                    ? `translateX(-${spread * (viewportWidth + (isMobile ? 20 : 80))}px)`
                    : 'none',
                  // Ease-out expo — démarrage rapide puis ralentissement doux
                  // (feeling de vraie page qui tourne, s'arrête en douceur).
                  transition: 'transform 780ms cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform',
                }}
              >
                {/* Versets */}
                {verses.map((v, i) => (
                  <VerseParagraph
                    key={`v-${v.id}`}
                    verse={v}
                    surahId={surah.id}
                    pageForVerse={pageForVerse}
                    isFirst={i === 0}
                  />
                ))}

                {/* Titre CONCLUSION + corps — intercalé dans le flow */}
                {hasConclusion && (
                  <>
                    <div
                      className="conclusion-title"
                      style={{
                        breakInside: 'avoid',
                        breakBefore: 'avoid',
                        breakAfter: 'avoid',
                        textAlign: 'center',
                        marginTop: '22px',
                        marginBottom: '14px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span style={{ flex: '0 0 30px', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.7 }} />
                        <span aria-hidden style={{ color: GOLD, fontSize: '12px' }}>✦</span>
                        <span style={{ flex: '0 0 30px', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.7 }} />
                      </div>
                      <div style={{ fontSize: '10px', letterSpacing: '0.32em', textTransform: 'uppercase', color: GOLD, fontWeight: 700 }}>
                        Conclusion
                      </div>
                      <div style={{ fontSize: '17px', fontStyle: 'italic', color: GOLD_DEEP, marginTop: '4px', fontWeight: 500, letterSpacing: '0.02em' }}>
                        {surah.name_latin} · {surah.name_fr}
                      </div>
                    </div>
                    <div
                      className="conclusion-body"
                      style={{ fontSize: '15px', lineHeight: 1.55 }}
                      dangerouslySetInnerHTML={{ __html: conclusionHtml }}
                    />
                  </>
                )}
                {/* Sentinel de fin — sert à mesurer l'extent réel du contenu
                    (voir remeasure). Inline, invisible, ZWSP pour être un
                    fragment mesurable par getBoundingClientRect. */}
                <span
                  ref={endMarkerRef}
                  aria-hidden
                  style={{
                    display: 'inline',
                    fontSize: 0,
                    lineHeight: 0,
                    color: 'transparent',
                  }}
                >
                  {'​'}
                </span>
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                fontStyle: 'italic',
                color: GOLD_DEEP,
                letterSpacing: '0.2em',
              }}
            >
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

        {/* CTA final vers analyse */}
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

      {/* Styles globaux */}
      <style dangerouslySetInnerHTML={{ __html: `
        .verse-inline {
          break-inside: avoid;
          margin-bottom: 10px;
          display: block;
        }
        /* drop-cap retiré : sur les versets arabes, le float:left sur la
           première lettre débordait hors du livre. */
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
        /* Conclusion styles */
        .conclusion-body h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-weight: 700;
          color: ${GOLD_DEEP};
          letter-spacing: 0.02em;
          margin: 18px 0 8px 0;
          text-align: left;
          border-bottom: 1px solid rgba(184,150,46,0.28);
          padding-bottom: 4px;
          /* Le titre reste toujours avec son paragraphe qui suit */
          break-after: avoid;
          page-break-after: avoid;
        }
        .conclusion-body h3:first-child {
          margin-top: 0;
        }
        .conclusion-body p {
          margin: 0 0 12px 0;
          text-indent: 0;
          /* orphans/widows minimisent les fins de paragraphe en 1-2 lignes
             seules en haut de col — meilleur compromis que break-inside qui
             cassait les 2 colonnes. */
          orphans: 3;
          widows: 3;
        }
        /* drop-cap conclusion retiré aussi pour cohérence + éviter
           débordements imprévisibles en multi-column. */
        .conclusion-body strong {
          color: ${GOLD_DEEP};
          font-weight: 700;
        }
        .conclusion-body em {
          font-style: italic;
          color: ${INK_SOFT};
        }
        .conclusion-body ol {
          margin: 8px 0 12px 0;
          padding-left: 22px;
          counter-reset: conclusion-item;
          list-style: none;
        }
        .conclusion-body ol li {
          position: relative;
          margin-bottom: 8px;
          padding-left: 6px;
          break-inside: avoid;
          counter-increment: conclusion-item;
        }
        .conclusion-body ol li::before {
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
        /* Mobile : livre miniature quasi plein écran, 2 pages, police -30%
           (l'utilisateur zoome nativement avec pinch pour lire).
           Padding horizontal 12px sur le wrap → centrage garanti. */
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
          .conclusion-title {
            margin-top: 15px !important;
            margin-bottom: 10px !important;
          }
          .conclusion-title > div:nth-child(2) {
            font-size: 7px !important;
          }
          .conclusion-title > div:nth-child(3) {
            font-size: 12px !important;
          }
          .conclusion-body {
            font-size: 10.5px !important;
            line-height: 1.55 !important;
          }
          .conclusion-body h3 {
            font-size: 10.5px !important;
          }
          .conclusion-body ol li::before {
            font-size: 10px !important;
            width: 14px !important;
          }
        }
      ` }} />
    </div>
  )
}

/* ══════════════════════════════════════════════════════════ */

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
  isFirst,
}: {
  verse: ReadVerse
  surahId: number
  pageForVerse: (n: number) => number
  isFirst: boolean
}) {
  return (
    <span
      id={`livre-verse-${surahId}-${verse.verse_num}`}
      className={`verse-inline ${isFirst ? 'drop-cap' : ''}`}
    >
      {verse.arabic_text && (
        <span className="bv-arabic-block font-arabic" dir="rtl" lang="ar">
          {verse.arabic_text}
        </span>
      )}
      {verse.phonetic && (
        <span className="bv-phon-block">
          {verse.phonetic}
        </span>
      )}
      <span className="bv-fr-block">
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
      </span>
    </span>
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
