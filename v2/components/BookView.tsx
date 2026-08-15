'use client'
import Link from 'next/link'
import React, { useState, useEffect, useCallback, useRef, useMemo, useLayoutEffect } from 'react'

// Nouvelle règle : 10 versets par double-page. Le split gauche/droite est calculé
// dynamiquement par splitBalanced pour équilibrer visuellement les 2 colonnes.
const VERSES_PER_SPREAD = 10

// Retourne l'index où couper la liste de versets (nb à gauche) pour équilibrer
// approximativement le contenu textuel entre les 2 pages du spread.
function splitBalanced(vs: Array<{ translation_arab: string }>): number {
  if (vs.length <= 1) return vs.length
  const lens = vs.map(v => (v.translation_arab?.length ?? 0) + 8) // +8 pour compter le marker + espace
  const total = lens.reduce((a, b) => a + b, 0)
  let cum = 0
  let bestSplit = Math.ceil(vs.length / 2)
  let bestDiff = Infinity
  for (let i = 1; i < vs.length; i++) {
    cum += lens[i - 1]
    const diff = Math.abs(cum - total / 2)
    if (diff < bestDiff) {
      bestDiff = diff
      bestSplit = i
    }
  }
  return bestSplit
}

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
}

// Palette identique au site
const GOLD = '#B8962E'
const GOLD_DEEP = '#8A6E1F'
const INK = '#1A1410'
const INK_SOFT = '#3A2E22'
const MUTED = '#6B5E52'
const CREAM_BG = '#F1E7CD'      // fond page (plus foncé pour faire ressortir le livre)
const CREAM_PAGE = '#FFFBF0'    // page du livre (crème très clair)
const LINE = 'rgba(184,150,46,0.20)'
const LINE_STRONG = 'rgba(184,150,46,0.42)'

export default function BookView({ surah, verses, pageSize }: Props) {
  const pageForVerse = (verseNum: number) => Math.ceil(verseNum / pageSize)
  const isFatiha = surah.id === 1
  const isBaraah = surah.id === 9

  // Observe les classes body pilotées par le hamburger ≡ (Affichage) —
  // dès qu'on toggle Arabe / Phonétique, on réinitialise la pagination adaptative
  // pour re-mesurer proprement (sinon les verses retirés lors d'un débordement
  // ne reviennent pas quand on redésactive l'arabe/la phon).
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

  // ─── Pagination adaptative : la valeur de départ dépend des toggles.
  //     Français seul : 10 par double-page.
  //     +Arabe : le texte arabe double la hauteur, on démarre à 6.
  //     +Phon : phonétique environ = 1x français, on démarre à 5.
  //     +Arabe+Phon : les 2 combinés, on démarre à 4.
  //     Le total évolue tout de suite au toggle (11 → 18 → 27…).
  //     La mesure post-render affine si un spread précis déborde encore.
  const versesPerSpreadTarget = useMemo(() => {
    if (bvOpts.arabic && bvOpts.phon) return 4
    if (bvOpts.arabic) return 6
    if (bvOpts.phon) return 5
    return VERSES_PER_SPREAD
  }, [bvOpts.arabic, bvOpts.phon])
  const initialCounts = useMemo(() => {
    const arr: number[] = []
    let remaining = verses.length
    while (remaining > 0) {
      const n = Math.min(versesPerSpreadTarget, remaining)
      arr.push(n)
      remaining -= n
    }
    return arr.length > 0 ? arr : [0]
  }, [verses.length, versesPerSpreadTarget])
  const [counts, setCounts] = useState<number[]>(initialCounts)
  // Mémorise le premier verset visible pour retrouver le bon spread après toggle
  const anchorVerseRef = useRef<number | null>(null)

  useEffect(() => {
    // Reset counts à l'initial dès qu'un toggle change — nouvelle réf pour forcer le re-render
    setCounts([...initialCounts])
    // Recompute quel spread contient le verset ancre dans la nouvelle pagination initiale
    const anchor = anchorVerseRef.current
    if (anchor !== null) {
      let idx = 0
      for (let s = 0; s < initialCounts.length; s++) {
        const end = idx + initialCounts[s]
        if (verses.slice(idx, end).some(v => v.verse_num === anchor)) {
          setSpread(s)
          break
        }
        idx = end
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bvOpts.arabic, bvOpts.phon, initialCounts])
  const totalSpreads = counts.length
  const [spread, setSpread] = useState(0)
  const [direction, setDirection] = useState<null | 'next' | 'prev'>(null)
  const transitionLockRef = useRef(false)

  // Durée transition — courte (Apple/Material 3 standard), fluide, spring-like
  const TRANSITION_MS = 460

  const startTransition = useCallback((dir: 'next' | 'prev') => {
    if (transitionLockRef.current) return
    setSpread(s => {
      const target = dir === 'next' ? s + 1 : s - 1
      if (target < 0 || target >= totalSpreads) return s
      transitionLockRef.current = true
      setDirection(dir)
      window.setTimeout(() => {
        setDirection(null)
        transitionLockRef.current = false
      }, TRANSITION_MS)
      return target
    })
  }, [totalSpreads])

  const goPrev = useCallback(() => startTransition('prev'), [startTransition])
  const goNext = useCallback(() => startTransition('next'), [startTransition])

  // Support clavier ← →
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

  // ─── Mesure post-render : si le contenu déborde le slot du body, on retire
  //     le dernier verset du spread et on le décale vers le spread suivant.
  //     La boucle continue tant qu'il déborde, en cascade sur les spreads suivants.
  const bookBodyRef = useRef<HTMLDivElement | null>(null)
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    const raf = window.requestAnimationFrame(() => {
      const body = bookBodyRef.current
      if (!body) return
      const slot = body.clientHeight
      if (slot <= 0) return
      const sides = body.querySelectorAll('.page-side')
      let maxOverflow = 0
      for (const s of sides) {
        const el = s as HTMLElement
        const over = el.scrollHeight - slot
        if (over > maxOverflow) maxOverflow = over
      }
      // Tolérance 8px pour éviter les micro-écarts liés au sub-pixel rendering
      if (maxOverflow > 8 && (counts[spread] ?? 0) > 2) {
        setCounts(prev => {
          const copy = [...prev]
          copy[spread] = (copy[spread] ?? 0) - 1
          if (copy[spread + 1] !== undefined) {
            copy[spread + 1] = copy[spread + 1] + 1
          } else {
            copy.push(1)
          }
          return copy
        })
      }
    })
    return () => window.cancelAnimationFrame(raf)
  }, [spread, counts, direction, bvOpts.arabic, bvOpts.phon])

  // Position réelle : somme des versets des spreads précédents
  const startIdx = counts.slice(0, spread).reduce((s, n) => s + n, 0)
  const currentCount = counts[spread] ?? 0
  const spreadVerses = verses.slice(startIdx, startIdx + currentCount)

  // Chaque fois qu'un spread change (via nav), on mémorise le 1er verset visible
  useEffect(() => {
    if (spreadVerses.length > 0) anchorVerseRef.current = spreadVerses[0].verse_num
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spread, counts])

  // Garde-fou : si spread dépasse le total (après reset counts), clamp
  useEffect(() => {
    if (spread >= counts.length) {
      setSpread(Math.max(0, counts.length - 1))
    }
  }, [counts, spread])
  // Sur la 1re double-page, le header+basmala prennent de la place à gauche : on décale
  // le split vers moins de contenu à gauche pour compenser.
  const showHeaderIntro = spread === 0
  const headerBias = showHeaderIntro ? 250 : 0
  // Recalcule le split en tenant compte du header
  const splitAt = (() => {
    if (spreadVerses.length <= 1) return spreadVerses.length
    const lens = spreadVerses.map(v => (v.translation_arab?.length ?? 0) + 8)
    const totalPlusHeader = lens.reduce((a, b) => a + b, 0) + headerBias
    let cum = headerBias
    let best = Math.ceil(spreadVerses.length / 2)
    let bestDiff = Infinity
    for (let i = 1; i < spreadVerses.length; i++) {
      cum += lens[i - 1]
      const diff = Math.abs(cum - totalPlusHeader / 2)
      if (diff < bestDiff) { bestDiff = diff; best = i }
    }
    return best
  })()
  const leftVerses = spreadVerses.slice(0, splitAt)
  const rightVerses = spreadVerses.slice(splitAt)

  // ─── Lien vue analyse — cible le premier verset du spread actuel ───
  const firstVerseInSpread = (leftVerses[0] || rightVerses[0])?.verse_num ?? 1
  const targetAnalysePage = Math.floor(startIdx / pageSize) + 1
  const analyseHref = `/surah/${surah.id}?page=${targetAnalysePage}#verse-${surah.id}-${firstVerseInSpread}`

  return (
    <div
      className="bv-page"
      style={{
        minHeight: '100vh',
        background: 'transparent', // hérite du fond du site (bg-parchment-50)
        color: INK,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      {/* Toggle flottant Analyse/Livre — top-right discret, ouvre dans un nouvel onglet */}
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
        style={{
          padding: '6px 24px 12px',
        }}
      >
        <div
          className="book"
          style={{
            maxWidth: '1180px',
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
            height: 'min(820px, calc(100vh - 110px))',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Pliure centrale douce */}
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

          {/* ═════ HEADER SOURATE (uniquement 1re double-page) — compact ═════ */}
          {showHeaderIntro && (
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

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '22px',
                marginBottom: '6px',
              }}
            >
              <span aria-hidden style={{ color: GOLD, fontSize: '16px', opacity: 0.6 }}>
                ❦
              </span>
              <h1
                className="font-arabic"
                style={{
                  fontSize: 'clamp(36px, 4vw, 48px)',
                  color: GOLD_DEEP,
                  lineHeight: 1,
                  margin: 0,
                  letterSpacing: '0.02em',
                }}
              >
                {surah.name_ar}
              </h1>
              <span aria-hidden style={{ color: GOLD, fontSize: '16px', opacity: 0.6, transform: 'scaleX(-1)' }}>
                ❦
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                color: INK_SOFT,
              }}
            >
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
          )}

          {/* ═════ BASMALA (1re double-page uniquement) — compact ═════ */}
          {showHeaderIntro && !isBaraah && (
            <div
              style={{
                padding: '4px 40px 4px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <div
                className="font-arabic"
                style={{
                  fontSize: '24px',
                  color: INK,
                  lineHeight: 1.3,
                  letterSpacing: '0.02em',
                  fontWeight: 400,
                }}
              >
                بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
              </div>
              {!isFatiha && (
                <div
                  style={{
                    fontSize: '13px',
                    color: MUTED,
                    fontStyle: 'italic',
                    marginTop: '10px',
                  }}
                >
                  Au nom de Dieu, le Tout-Miséricordieux, le Très-Miséricordieux
                </div>
              )}
            </div>
          )}

          {/* Séparateur fin (uniquement 1re double-page) */}
          {showHeaderIntro && (
          <div style={{ padding: '4px 60px 12px', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
              <span style={{ flex: '0 0 140px', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.5 }} />
              <span aria-hidden style={{ color: GOLD, fontSize: '10px' }}>✦</span>
              <span style={{ flex: '0 0 140px', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.5 }} />
            </div>
          </div>
          )}

          {/* ═════ CORPS 2 PAGES — transition shared-axis moderne ═════ */}
          <div
            ref={bookBodyRef}
            className="book-body"
            style={{
              position: 'relative',
              zIndex: 2,
              padding: showHeaderIntro ? '4px 56px 20px' : '32px 56px 20px',
              flex: 1,
              minHeight: 0,
              overflow: 'hidden',
            }}
          >
            {/* Le key change à chaque spread → force le remount, l'animation d'entrée joue */}
            <div
              key={`spread-${spread}`}
              className={`spread-content ${direction ? `anim-${direction}` : ''}`}
              style={{
                display: 'flex',
                gap: '80px',
                alignItems: 'stretch',
                height: '100%',
              }}
            >
              {/* Page gauche */}
              <div
                className="page-side page-side-left"
                style={{
                  flex: 1,
                  minWidth: 0,
                  textAlign: 'justify',
                  hyphens: 'auto',
                  fontSize: '16px',
                  lineHeight: 1.5,
                  color: INK,
                  fontWeight: 500,
                  letterSpacing: '0.005em',
                  position: 'relative',
                }}
              >
                {leftVerses.map((v, i) => (
                  <VerseParagraph
                    key={`left-${v.id}`}
                    verse={v}
                    surahId={surah.id}
                    pageForVerse={pageForVerse}
                    isFirst={spread === 0 && i === 0}
                  />
                ))}
              </div>
              {/* Page droite */}
              <div
                className="page-side page-side-right"
                style={{
                  flex: 1,
                  minWidth: 0,
                  textAlign: 'justify',
                  hyphens: 'auto',
                  fontSize: '16px',
                  lineHeight: 1.5,
                  color: INK,
                  fontWeight: 500,
                  letterSpacing: '0.005em',
                  position: 'relative',
                }}
              >
                {rightVerses.length > 0 ? (
                  rightVerses.map(v => (
                    <VerseParagraph
                      key={`right-${v.id}`}
                      verse={v}
                      surahId={surah.id}
                      pageForVerse={pageForVerse}
                      isFirst={false}
                    />
                  ))
                ) : (
                  <div className="book-empty-slot">Fin de la sourate</div>
                )}
              </div>
            </div>
          </div>

          {/* Pied du livre avec navigation */}
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
            {/* Numéro page gauche + bouton précédent */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                onClick={goPrev}
                disabled={spread === 0}
                className="page-arrow"
                aria-label="Page précédente"
                style={{
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
                  cursor: spread === 0 ? 'not-allowed' : 'pointer',
                  opacity: spread === 0 ? 0.35 : 1,
                  transition: 'background 200ms ease, transform 200ms ease',
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                ←
              </button>
              <span style={{ color: GOLD_DEEP, fontStyle: 'normal', letterSpacing: '0.16em' }}>
                {leftVerses[0]?.verse_num}{leftVerses.length > 1 ? `–${leftVerses[leftVerses.length - 1]?.verse_num}` : ''}
              </span>
            </div>

            {/* Indicateur de spread au centre */}
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

            {/* Numéro page droite + bouton suivant */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'flex-end' }}>
              {rightVerses.length > 0 && (
                <span style={{ color: GOLD_DEEP, fontStyle: 'normal', letterSpacing: '0.16em' }}>
                  {rightVerses[0]?.verse_num}{rightVerses.length > 1 ? `–${rightVerses[rightVerses.length - 1]?.verse_num}` : ''}
                </span>
              )}
              <button
                onClick={goNext}
                disabled={spread >= totalSpreads - 1}
                className="page-arrow"
                aria-label="Page suivante"
                style={{
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
                  cursor: spread >= totalSpreads - 1 ? 'not-allowed' : 'pointer',
                  opacity: spread >= totalSpreads - 1 ? 0.35 : 1,
                  transition: 'background 200ms ease, transform 200ms ease',
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                →
              </button>
            </div>
          </footer>
        </div>

        {/* CTA final — accès explicite à l'analyse du premier verset visible, dans un nouvel onglet */}
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
              padding: '9px 22px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%)',
              color: '#FFFCF6',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              boxShadow: '0 3px 10px rgba(120,90,30,0.32), inset 0 1px 0 rgba(255,255,255,0.30)',
              textShadow: '0 1px 1px rgba(80,55,10,0.28)',
              transition: 'transform 200ms ease, box-shadow 200ms ease',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            <span aria-hidden>✦</span>
            Explorer l'analyse
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .verse-inline {
          break-inside: avoid;
          margin-bottom: 10px;
          display: block;
        }
        .verse-inline.drop-cap::first-letter {
          font-size: 3em;
          font-weight: 600;
          float: left;
          line-height: 0.9;
          margin: 4px 8px 0 0;
          color: ${GOLD_DEEP};
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 0 1px 0 rgba(255,255,255,0.4);
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
        /* ═══ Mobile & tablette étroite : livre 2 pages MINIATURE ═══
           On garde les 2 pages côte à côte (comme sur PC) mais on utilise
           « zoom » pour ajuster à la largeur du téléphone. Le pinch-zoom
           natif du navigateur (maximum-scale:5 dans le viewport meta) permet
           de zoomer pour lire confortablement.
        */
        @media (max-width: 900px) {
          .book {
            width: 900px !important;
            max-width: none !important;
            height: 640px !important;
            border-radius: 6px !important;
            box-shadow: 0 2px 14px rgba(120,90,30,0.18) !important;
          }
          /* Wrapper autour du livre pour supprimer les marges qui poussent au-delà du viewport */
          .book, .book + div {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
        /* Tablette portrait : 600-900px → zoom modéré */
        @media (max-width: 900px) and (min-width: 601px) { .book { zoom: 0.7; } }
        /* Mobile large : 481-600px → zoom serré */
        @media (max-width: 600px) and (min-width: 481px) { .book { zoom: 0.55; } }
        /* Mobile standard 375-480px */
        @media (max-width: 480px) and (min-width: 380px) { .book { zoom: 0.4; } }
        /* Mobile étroit ≤ 379px */
        @media (max-width: 379px) { .book { zoom: 0.34; } }

        /* Le wrapper padding rend le livre bien centré */
        @media (max-width: 900px) {
          .bv-page > div:has(> .book) {
            padding: 6px 0 12px !important;
          }
          .bv-floating-toggle {
            font-size: 11px !important;
            padding: 5px 10px !important;
          }
        }
        .page-arrow:hover:not(:disabled) {
          background: linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%) !important;
          color: #FFFCF6 !important;
          border-color: transparent !important;
          transform: translateY(-1px);
        }
        /* ══════════ Toggles arabe/phonétique via classes body pilotées par ≡ ══════════ */
        .bv-arabic-block, .bv-phon-block { display: none; }
        body.bv-show-arabic .bv-arabic-block {
          display: block;
          font-size: 20px;
          line-height: 1.9;
          color: ${INK};
          margin: 6px 0 4px 0;
          direction: rtl;
          text-align: justify;
        }
        body.bv-show-phon .bv-phon-block {
          display: block;
          font-size: 12.5px;
          line-height: 1.6;
          color: ${MUTED};
          font-style: italic;
          letter-spacing: 0.01em;
          margin: 2px 0 6px 0;
        }
        body.bv-show-arabic .bv-fr-block,
        body.bv-show-phon .bv-fr-block {
          display: block;
          margin-top: 4px;
        }
        /* Quand arabe ou phon actifs → drop-cap n'a plus de sens (contenu multi-lignes) */
        body.bv-show-arabic .verse-inline.drop-cap::first-letter,
        body.bv-show-phon .verse-inline.drop-cap::first-letter {
          font-size: inherit;
          font-weight: inherit;
          float: none;
          margin: 0;
          color: inherit;
          font-family: inherit;
          text-shadow: none;
        }
        body.bv-show-arabic .verse-inline,
        body.bv-show-phon .verse-inline {
          margin-bottom: 18px;
        }

        .book-empty-slot {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${MUTED};
          font-style: italic;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        /* ══════════ Transition « shared axis » moderne (Material 3 / Apple 2025) ══════════
           Slide horizontal court + fade + blur léger + easing spring naturel.
           C'est le pattern utilisé par Discord, Instagram, Linear, Vercel.
           - direction next : contenu entre par la droite → glisse à gauche
           - direction prev : contenu entre par la gauche → glisse à droite
        */
        .spread-content {
          will-change: transform, opacity, filter;
        }
        .spread-content.anim-next {
          animation: bv-enter-from-right ${TRANSITION_MS}ms cubic-bezier(0.32, 0.72, 0, 1) both;
        }
        .spread-content.anim-prev {
          animation: bv-enter-from-left ${TRANSITION_MS}ms cubic-bezier(0.32, 0.72, 0, 1) both;
        }
        @keyframes bv-enter-from-right {
          0% {
            opacity: 0;
            transform: translate3d(48px, 0, 0) scale(0.985);
            filter: blur(6px);
          }
          60% {
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes bv-enter-from-left {
          0% {
            opacity: 0;
            transform: translate3d(-48px, 0, 0) scale(0.985);
            filter: blur(6px);
          }
          60% {
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }
        /* Bouton next/prev : léger tap-feedback moderne */
        .page-arrow:active:not(:disabled) {
          transform: scale(0.94) !important;
          transition: transform 90ms cubic-bezier(0.32, 0.72, 0, 1) !important;
        }
        /* Respect reduce-motion */
        @media (prefers-reduced-motion: reduce) {
          .spread-content.anim-next, .spread-content.anim-prev {
            animation: none;
          }
        }
      ` }} />
    </div>
  )
}

/* ══════════════════════════════════════════════════════════ */

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
      {/* Arabe — affiché uniquement si body.bv-show-arabic (toggle du panneau ≡) */}
      {verse.arabic_text && (
        <span className="bv-arabic-block font-arabic" dir="rtl" lang="ar">
          {verse.arabic_text}
        </span>
      )}
      {/* Phonétique — affiché uniquement si body.bv-show-phon */}
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
