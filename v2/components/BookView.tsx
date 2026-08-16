'use client'
import Link from 'next/link'
import React, { useState, useEffect, useCallback, useRef, useMemo, useLayoutEffect } from 'react'

// Nouvelle règle : 10 versets par double-page. Le split gauche/droite est calculé
// dynamiquement par splitBalanced pour équilibrer visuellement les 2 colonnes.
const VERSES_PER_SPREAD = 10

// Estimation rapide de la hauteur d'un verset en pixels selon le mode d'affichage
// et la largeur de colonne. Sert à pré-calculer les spreads AVANT render pour éviter
// tout débordement (l'algo cascade post-render n'est qu'une sécurité).
interface EstOpts { arabic: boolean; phon: boolean; charsPerLine: number; lineHeightPx: number; arCharsPerLine: number; arLineHeightPx: number; phCharsPerLine: number; phLineHeightPx: number; verseGapPx: number }
function estimateVerseHeight(v: { translation_arab: string; arabic_text?: string; phonetic?: string }, o: EstOpts): number {
  const trChars = (v.translation_arab || '').length
  const linesTr = Math.max(1, Math.ceil(trChars / o.charsPerLine))
  let h = linesTr * o.lineHeightPx + o.verseGapPx
  if (o.arabic && v.arabic_text) {
    const arLines = Math.max(1, Math.ceil((v.arabic_text.length) / o.arCharsPerLine))
    h += arLines * o.arLineHeightPx + 8
  }
  if (o.phon && v.phonetic) {
    const phLines = Math.max(1, Math.ceil((v.phonetic.length) / o.phCharsPerLine))
    h += phLines * o.phLineHeightPx + 4
  }
  return h
}

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
  // ─── Mesure RÉELLE des hauteurs des versets via un container caché ───
  // Au lieu d'estimer, on rend tous les versets dans un div hors-écran avec
  // la même largeur qu'une page-side, puis on lit les vraies hauteurs.
  // Résultat : le calcul de count par spread est fiable, quel que soit le
  // mode (français seul, +arabe, +phon).
  const measurerRef = useRef<HTMLDivElement | null>(null)
  const [verseHeights, setVerseHeights] = useState<number[] | null>(null)
  const [slotHeights, setSlotHeights] = useState<{ normal: number; spread0: number } | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const measure = () => {
      const m = measurerRef.current
      if (!m || !m.isConnected) return
      // Aligne d'abord la largeur du measurer sur la vraie largeur d'une page-side
      const body = bookBodyRef.current
      const sideEl = body?.querySelector<HTMLElement>('.page-side')
      if (sideEl) {
        const sideW = sideEl.clientWidth
        if (sideW > 0) m.style.width = sideW + 'px'
      }
      // Force reflow puis mesure les versets
      const els = m.querySelectorAll<HTMLElement>('[data-vi]')
      const hs: number[] = []
      const rects = Array.from(els).map(el => el.getBoundingClientRect())
      for (let idx = 0; idx < rects.length; idx++) {
        const next = rects[idx + 1]
        const cur = rects[idx]
        if (next) hs.push(next.top - cur.top)
        else hs.push(cur.height)
      }
      // Mesure du slot UTILE : calculé depuis .book (hauteur fixe), pas depuis
      // page-side (qui varie selon si on est sur spread 0 ou pas).
      // book.clientHeight - footer(~60) - padding-vertical body (~52) = slot normal
      // slot spread 0 = slot normal - header(~150) - basmala(~70) - séparateur(~30)
      // Mesure DIRECTE du body pour le spread courant (plus fiable que constantes).
      // Chaque valeur (slot spread 0 et slot normal) est mise à jour quand on
      // la mesure vraiment (au moment où on visite le spread correspondant).
      const bodyEl = bookBodyRef.current
      let slot = slotHeights?.normal ?? 500
      let slot0 = slotHeights?.spread0 ?? 250
      if (bodyEl) {
        const bodyH = bodyEl.clientHeight
        // Safety margin 100 px pour compenser sub-pixel + divergences cumulées
        const measured = Math.max(150, bodyH - 100)
        const currentIsSpread0 = !!document.querySelector('.book header')
        if (currentIsSpread0) {
          slot0 = measured
          // Slot normal jamais mesuré directement ici : estimé += header/basmala visibles
          const headerH = document.querySelector('.book header')?.getBoundingClientRect().height || 0
          const basmalaH = document.querySelectorAll('.book > div')
          let bhH = 0
          basmalaH.forEach(d => { if (d.textContent?.includes('بِسْمِ')) bhH = d.getBoundingClientRect().height })
          slot = Math.max(measured, measured + headerH + bhH + 40)
        } else {
          slot = measured
          // Slot spread 0 estimé si pas encore mesuré : mesure - header estimé
          if (!slotHeights) slot0 = Math.max(150, measured - 260)
        }
      }
      setVerseHeights(hs)
      setSlotHeights({ normal: slot, spread0: slot0 })
    }
    const t1 = window.setTimeout(measure, 60)
    const t2 = window.setTimeout(measure, 300)
    const t3 = window.setTimeout(measure, 900)
    window.addEventListener('resize', measure)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
      window.removeEventListener('resize', measure)
    }
  }, [verses.length, bvOpts.arabic, bvOpts.phon])

  // ─── ALGORITHME SIMPLE (CSS multi-column) : chaque spread a une capacité
  //     = 2 slots (2 pages côte à côte via CSS column-count:2). On empile
  //     les versets jusqu'à saturer, puis nouveau spread. Le browser fait
  //     le split gauche/droite automatiquement.
  const initialCounts = useMemo(() => {
    if (!verseHeights || verseHeights.length !== verses.length || !slotHeights) {
      return [verses.length || 0]
    }
    const SLOT = slotHeights.normal
    const SLOT_SPREAD_0 = slotHeights.spread0
    const arr: number[] = []
    let i = 0
    let isFirst = true
    while (i < verses.length) {
      const slotAvail = isFirst ? SLOT_SPREAD_0 : SLOT
      // Capacité = 2 pages MINUS 15 % safety (le browser ne remplit jamais 100%
      // à cause du break-inside:avoid qui force les versets à commencer en haut
      // de la colonne suivante s'ils ne tiennent pas).
      const capacity = (slotAvail + SLOT) * 0.85
      let count = 0
      let total = 0
      while (i + count < verses.length) {
        const h = verseHeights[i + count] || 100
        if (total + h > capacity && count > 0) break
        total += h
        count++
      }
      arr.push(Math.max(1, count))
      i += Math.max(1, count)
      isFirst = false
    }
    return arr.length > 0 ? arr : [0]
  }, [verses.length, verseHeights, slotHeights])
  const [counts, setCounts] = useState<number[]>(initialCounts)
  // Synchronise counts avec initialCounts quand la mesure évolue
  useEffect(() => {
    setCounts(initialCounts)
  }, [initialCounts])
  // Mémorise le premier verset visible pour retrouver le bon spread après toggle
  const anchorVerseRef = useRef<number | null>(null)
  const lastBvKeyRef = useRef(`${bvOpts.arabic}-${bvOpts.phon}-${verses.length}`)

  useEffect(() => {
    const key = `${bvOpts.arabic}-${bvOpts.phon}-${verses.length}`
    // Ne reset que si les toggles ont RÉELLEMENT changé (évite d'écraser la cascade
    // post-render à chaque render intermédiaire).
    if (key === lastBvKeyRef.current) return
    lastBvKeyRef.current = key
    setCounts([...initialCounts])
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
  }, [bvOpts.arabic, bvOpts.phon, verses.length])
  const totalSpreads = counts.length
  const [spread, setSpread] = useState(0)
  const [direction, setDirection] = useState<null | 'next' | 'prev'>(null)
  const transitionLockRef = useRef(false)

  // Durée transition — courte (Apple/Material 3 standard), fluide, spring-like.
  // Sur mobile : réduite à 100ms pour navigation quasi-instantanée (l'animation
  // CSS est désactivée en mobile de toute façon).
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(max-width: 900px)')
    const sync = () => setIsMobile(mql.matches)
    sync()
    mql.addEventListener('change', sync)
    return () => mql.removeEventListener('change', sync)
  }, [])
  const TRANSITION_MS = isMobile ? 100 : 460

  const startTransition = useCallback((dir: 'next' | 'prev') => {
    // Sur mobile, pas de lock (nav instantanée). Sur PC, lock 460ms pour animation
    if (!isMobile && transitionLockRef.current) return
    setSpread(s => {
      const target = dir === 'next' ? s + 1 : s - 1
      if (target < 0 || target >= totalSpreads) return s
      if (!isMobile) {
        transitionLockRef.current = true
        setDirection(dir)
        window.setTimeout(() => {
          setDirection(null)
          transitionLockRef.current = false
        }, TRANSITION_MS)
      }
      return target
    })
  }, [totalSpreads, isMobile])

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
  const spreadContentRef = useRef<HTMLDivElement | null>(null)
  // ─── Ajustement POST-render : compte les versets réellement visibles dans
  //     le container 2-col (ceux dont le top est avant containerBottom). Si
  //     certains sont cachés par overflow, les décale vers spread suivant.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const check = () => {
      try {
        const el = spreadContentRef.current
        if (!el || !el.isConnected) return
        const cRect = el.getBoundingClientRect()
        const versesEls = el.querySelectorAll('.verse-inline')
        let visible = 0
        versesEls.forEach(v => {
          const rect = (v as HTMLElement).getBoundingClientRect()
          const fitsH = rect.bottom <= cRect.bottom + 4
          const fitsW = rect.right <= cRect.right + 4
          if (fitsH && fitsW) visible++
        })
        const wanted = counts[spread] ?? 0
        if (visible < wanted && visible >= 1) {
          const hidden = wanted - visible
          setCounts(prev => {
            const copy = [...prev]
            copy[spread] = visible
            if (copy[spread + 1] !== undefined) copy[spread + 1] += hidden
            else copy.push(hidden)
            return copy
          })
        }
      } catch { /* ignore */ }
    }
    // Plusieurs passes : le layout multi-column + zoom mobile peut prendre
    // plus de temps à se stabiliser
    const t1 = window.setTimeout(check, 100)
    const t2 = window.setTimeout(check, 400)
    const t3 = window.setTimeout(check, 1000)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
    }
  }, [spread, counts])

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
  const showHeaderIntro = spread === 0
  // Avec CSS multi-column, plus de split JS : le browser gère.
  // Ces variables restent pour compat avec le footer (numéros de versets range).
  const leftVerses = spreadVerses.slice(0, Math.ceil(spreadVerses.length / 2))
  const rightVerses = spreadVerses.slice(Math.ceil(spreadVerses.length / 2))

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
      {/* ═══════════════ MEASURER OFFSCREEN ═══════════════
          Rend tous les versets dans un container caché avec la même largeur
          qu'une page-side. Les hauteurs mesurées servent au pré-calcul des
          spreads (fiable, pas d'estimation). */}
      <div
        ref={measurerRef}
        aria-hidden
        style={{
          position: 'absolute',
          left: '-99999px',
          top: 0,
          width: '350px',
          visibility: 'hidden',
          pointerEvents: 'none',
          fontSize: '16px',
          lineHeight: 1.5,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          textAlign: 'justify',
          hyphens: 'auto',
          fontWeight: 500,
          letterSpacing: '0.005em',
          color: INK,
        }}
      >
        {verses.map((v, i) => (
          <span key={v.id} data-vi={i} className="verse-inline" style={{ display: 'block' }}>
            {v.arabic_text && (
              <span className="bv-arabic-block font-arabic" dir="rtl" lang="ar">
                {v.arabic_text}
              </span>
            )}
            {v.phonetic && (
              <span className="bv-phon-block">{v.phonetic}</span>
            )}
            <span className="bv-fr-block">
              <span className="verse-marker">{v.verse_num}</span>
              {v.translation_arab}
            </span>
          </span>
        ))}
      </div>

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

          {/* ═════ CORPS 2 PAGES — CSS multi-column natif ═════
              Le browser fait le split gauche/droite automatiquement.
              `columnCount: 2` + `columnGap` + `overflow: hidden` sur container fixe.
              `break-inside: avoid` sur chaque verset empêche coupure au milieu.
          */}
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
            <div
              key={`spread-${spread}`}
              ref={spreadContentRef}
              className={`spread-content page-side ${direction ? `anim-${direction}` : ''}`}
              style={{
                height: '100%',
                columnCount: 2,
                columnGap: '80px',
                columnFill: 'auto',
                textAlign: 'justify',
                hyphens: 'auto',
                fontSize: '16px',
                lineHeight: 1.5,
                color: INK,
                fontWeight: 500,
                letterSpacing: '0.005em',
                overflow: 'hidden',
              }}
            >
              {spreadVerses.length > 0 ? (
                spreadVerses.map((v, i) => (
                  <VerseParagraph
                    key={`v-${v.id}`}
                    verse={v}
                    surahId={surah.id}
                    pageForVerse={pageForVerse}
                    isFirst={spread === 0 && i === 0}
                  />
                ))
              ) : (
                <div className="book-empty-slot">Fin de la sourate</div>
              )}
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
          /* Évite tout scroll horizontal éventuel */
          .bv-page {
            overflow-x: hidden !important;
          }
          /* Wrapper du livre : padding minimal pour laisser toute la largeur au book zoomé */
          .bv-book-wrap {
            padding: 6px 0 12px !important;
          }
          .book {
            width: 800px !important;
            max-width: none !important;
            height: 900px !important;
            border-radius: 6px !important;
            box-shadow: 0 2px 14px rgba(120,90,30,0.18) !important;
            /* Ne pas mettre margin auto — align-items:center du wrapper gère le centrage,
               et margin auto interfère avec le zoom en créant un décalage sub-pixel. */
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
        /* Zoom recalibré : livre 800px * zoom = largeur visible, centré dans la viewport. */
        @media (max-width: 900px) and (min-width: 701px) { .book { zoom: 0.8; } }
        @media (max-width: 700px) and (min-width: 601px) { .book { zoom: 0.7; } }
        @media (max-width: 600px) and (min-width: 501px) { .book { zoom: 0.6; } }
        @media (max-width: 500px) and (min-width: 421px) { .book { zoom: 0.52; } }
        @media (max-width: 420px) and (min-width: 381px) { .book { zoom: 0.48; } }
        @media (max-width: 380px) and (min-width: 341px) { .book { zoom: 0.43; } }
        @media (max-width: 340px) { .book { zoom: 0.38; } }

        /* Le wrapper padding rend le livre bien centré */
        @media (max-width: 900px) {
          .bv-page > div:has(> .book) {
            padding: 6px 0 12px !important;
          }
          .bv-floating-toggle {
            font-size: 11px !important;
            padding: 5px 10px !important;
          }
          /* Désactive l'animation shared-axis sur mobile — trop lourde avec zoom CSS */
          .spread-content.anim-next,
          .spread-content.anim-prev {
            animation: none !important;
          }
          /* Désactive aussi l'effet 3D actif — laisse juste un instantané pour la fluidité tactile */
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
