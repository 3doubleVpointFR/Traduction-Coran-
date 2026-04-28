'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'

interface TourStep {
  selector: string                           // CSS selector of target element
  position: 'top' | 'bottom' | 'left' | 'right' | 'center'
  title: string
  desc: string
  scrollIntoView?: boolean
  waitForSelector?: number                   // ms to wait if selector not yet present
  triggerAction?: () => void                 // optional action to perform on entering this step
  navigateOnNext?: string                    // navigate to this URL when clicking "Suivant"
  requiresPath?: string                      // this step is only active on this path
  forceCorner?: boolean                      // force bubble to bottom-right corner (don't pointer-place)
  alsoHighlight?: string                     // additional selector(s) to include in the highlight zone
}

const STEPS: TourStep[] = [
  {
    selector: '[data-tour-surah-grid="1"]',
    position: 'top',
    title: 'Choisis une sourate',
    desc: 'Pour commencer, sélectionne une sourate dans cette grille (par recherche ou en parcourant la liste). Pour ce tour, on prend la sourate 3 (Āl ʿImrān). Clique sur « Suivant » pour y aller.',
    scrollIntoView: true,
    navigateOnNext: '/surah/3',
    requiresPath: '/',
  },
  {
    selector: '[data-tour-verse-num="2"]',
    position: 'bottom',
    title: 'Voici un verset',
    desc: 'En haut le texte arabe, en dessous chaque mot aligné avec sa phonétique et sa traduction française. Le verset entouré en or est celui qu\'on va analyser ensemble.',
    scrollIntoView: true,
    forceCorner: true,
    waitForSelector: 8000,
  },
  {
    selector: '[data-tour-verse-num="2"] [data-tour-word-key]',
    position: 'bottom',
    title: 'Clique sur un mot',
    desc: 'Tu peux cliquer sur n\'importe quel mot souligné pour analyser son sens. Le panneau d\'analyse va s\'ouvrir à droite. Clique « Suivant » pour le faire automatiquement.',
    scrollIntoView: false,
    waitForSelector: 1500,
    triggerAction: () => {
      // Don't auto-click here, wait for next step
    },
  },
  {
    selector: '[data-tour-word-panel="1"]',
    position: 'left',
    title: 'Le panneau d\'analyse',
    desc: 'Ici tu vois la racine, le sens retenu, tous les sens étymologiques (avec barres de fréquence) et l\'explication du choix pour ce verset.',
    waitForSelector: 2000,
    scrollIntoView: false,
    triggerAction: () => {
      // Auto-click on the first word if panel is not yet open
      const panel = document.querySelector('[data-tour-word-panel="1"]')
      if (!panel) {
        const word = document.querySelector('[data-tour-verse-num="2"] [data-tour-word-key]') as HTMLElement
        if (word) word.click()
      }
    },
  },
  {
    selector: '[data-tour-concept-tab="1"]',
    position: 'bottom',
    title: 'Les regroupements de sens',
    desc: 'En haut du panneau tu vois les regroupements de sens de la racine (par ex. Divinité, Adoration/Dévotion...). Chaque regroupement rassemble plusieurs sens qui partagent une même nature philosophique. Survole l\'un d\'eux avec ta souris pour voir tous les sens qui le composent — comme dans l\'encadré or qui s\'affiche maintenant.',
    waitForSelector: 1000,
    scrollIntoView: false,
    forceCorner: true,
    alsoHighlight: '[data-tour-concept-tooltip="1"]',
  },
  {
    selector: '[data-tour-concept-block="retenu"]',
    position: 'left',
    title: 'Le regroupement retenu',
    desc: 'Le regroupement choisi pour ce verset est marqué « RETENU » avec une bordure or. Regarde aussi la barre dorée juste en dessous — on l\'explique à l\'étape suivante.',
    waitForSelector: 1000,
    scrollIntoView: true,
  },
  {
    selector: '[data-tour-concept-bar="1"]',
    position: 'left',
    title: 'La barre de fréquence',
    desc: 'Cette barre montre la dominance du regroupement dans tous les versets déjà analysés. Par exemple, 40/40 (100%) pour « Divinité » signifie que sur les 40 versets où la racine apparaît, ce regroupement a TOUJOURS été retenu. Plus la barre est remplie, plus ce sens est dominant pour cette racine dans le Coran. Cela t\'aide à voir tout de suite quel sens est central, et quel sens est marginal.',
    waitForSelector: 1000,
    scrollIntoView: false,
  },
  {
    selector: '[data-tour-concept-block="retenu"]',
    position: 'left',
    title: 'Déplie le regroupement',
    desc: 'Clique sur « Suivant » pour ouvrir automatiquement le regroupement retenu et voir son contenu détaillé : la liste des versets où il apparaît, et la phrase récap de l\'analyse.',
    waitForSelector: 1000,
    scrollIntoView: false,
    triggerAction: () => {
      // Auto-deplier le concept retenu après un court délai
      setTimeout(() => {
        const block = document.querySelector('[data-tour-concept-block="retenu"]')
        const button = block?.querySelector('button')
        if (button && !document.querySelector('[data-tour-proof-ctx="1"]')) {
          button.click()
        }
      }, 300)
    },
  },
  {
    selector: '[data-tour-proof-ctx="1"]',
    position: 'left',
    title: 'La phrase récap de l\'analyse',
    desc: 'Cet encadré explique en 1-2 phrases pourquoi ce sens a été retenu pour ce verset précis — la synthèse du raisonnement (champ lexical, contexte, cohérence coranique, finalité).',
    waitForSelector: 1500,
    scrollIntoView: true,
  },
  {
    selector: '[data-tour-verses-list="1"]',
    position: 'left',
    title: 'Les autres versets où la racine apparaît',
    desc: 'Cette liste montre tous les autres versets analysés où la racine est utilisée avec le même sens. Tu peux cliquer sur chaque référence (ex. 3:42) pour ouvrir directement le verset correspondant et comparer.',
    waitForSelector: 1000,
    scrollIntoView: false,
  },
  {
    selector: '[data-tour-concept-block="probable"]',
    position: 'left',
    title: 'Comment retenu / probable / exclu sont décidés',
    desc: 'Chaque regroupement de sens est classé selon sa pertinence pour ce verset : RETENU (le seul gardé), PROBABLE (cohérent mais moins précis), EXCLU (hors sujet). La classification suit 5 critères : champ lexical du verset, versets voisins, thème de la sourate, cohérence avec le reste du Coran, finalité du khalifa.',
    waitForSelector: 1500,
    scrollIntoView: true,
  },
  {
    selector: '[data-tour-verse-num="2"] [data-tour-sections="1"]',
    position: 'top',
    title: 'Les 3 sections explicatives',
    desc: 'Sous chaque verset, déplie ces 3 sections : Démarche (analyse grammaticale), Justification (choix des mots), Critique (comparaison avec Hamidullah).',
    scrollIntoView: true,
  },
  {
    selector: '[data-tour-verse-num="2"] [data-tour-translations="1"]',
    position: 'top',
    title: 'Comparaison ouverte',
    desc: 'Notre traduction est mise face à celle de Hamidullah. À toi de juger ce qui te paraît le plus fidèle, ou de proposer la tienne.',
    scrollIntoView: true,
  },
  {
    selector: 'body',
    position: 'center',
    title: 'À toi de méditer ✦',
    desc: 'Tu as toutes les clés. Explore les autres versets, suis ton intuition, construis ton propre sens. La traduction n\'est pas le dernier mot.',
  },
]

export default function TutorialGuide() {
  const pathname = usePathname()
  const router = useRouter()
  const [active, setActive] = useState(false)
  const [step, setStep] = useState(0)
  const [rects, setRects] = useState<DOMRect[]>([])

  // Read localStorage on mount, sync state
  useEffect(() => {
    const tour = localStorage.getItem('tuto-active')
    if (tour === '1') {
      setActive(true)
      const s = parseInt(localStorage.getItem('tuto-step') || '0', 10)
      setStep(s)
    }
  }, [pathname])

  // Stop the tour entirely
  const stop = useCallback(() => {
    setActive(false)
    setStep(0)
    localStorage.removeItem('tuto-active')
    localStorage.removeItem('tuto-step')
    localStorage.setItem('tuto-seen', '1')
    setRects([])
  }, [])

  // Helper : calcule la liste des rects à mettre en surbrillance
  // (élément principal + alsoHighlight si visible)
  const computeRects = (el: HTMLElement, current: TourStep): DOMRect[] => {
    const rects: DOMRect[] = [el.getBoundingClientRect()]
    if (current.alsoHighlight) {
      const extra = document.querySelector(current.alsoHighlight) as HTMLElement | null
      if (extra) {
        const r2 = extra.getBoundingClientRect()
        // Ne pas inclure si élément non rendu (width/height = 0)
        if (r2.width > 0 && r2.height > 0) {
          rects.push(r2)
        }
      }
    }
    return rects
  }

  // Recalcule juste la position visuelle (sans scroll), pour les listeners scroll/resize
  const refreshRect = useCallback(() => {
    if (!active) return
    const current = STEPS[step]
    if (!current) return
    if (current.selector === 'body') {
      setRects([])
      return
    }
    const el = document.querySelector(current.selector) as HTMLElement | null
    if (el) setRects(computeRects(el, current))
  }, [step, active])

  // Effet exécuté UNE FOIS par changement d'étape : trigger l'action + scroll initial
  useEffect(() => {
    if (!active) return
    const current = STEPS[step]
    if (!current) return
    if (current.triggerAction) current.triggerAction()
    if (current.selector === 'body') {
      setRects([])
      return
    }
    const positionEl = (el: HTMLElement) => {
      let didScroll = false
      if (current.scrollIntoView) {
        const r = el.getBoundingClientRect()
        const vpH = window.innerHeight
        const HEADER_OFFSET = 90 // espace pour le header sticky
        const isFullyVisible = r.top >= HEADER_OFFSET && r.bottom <= vpH
        if (!isFullyVisible) {
          // Calcul manuel du scroll pour amener le haut de l'élément juste sous le header
          const targetScroll = window.scrollY + r.top - HEADER_OFFSET
          window.scrollTo({ top: targetScroll, behavior: 'smooth' })
          didScroll = true
        }
      }
      // 1) Surbrillance IMMÉDIATE (position actuelle, avant scroll) → pas d'attente visible
      setRects(computeRects(el, current))
      // 2) Si on a effectivement scrollé, recalculer après que le smooth scroll soit fini
      if (didScroll) {
        setTimeout(() => setRects(computeRects(el, current)), 600)
      }
      // Si alsoHighlight, polling rAF jusqu'à ce que l'élément soit visible (max 1.2s)
      // Cela garantit que dès que le tooltip est rendu/forcé, on recalcule immédiatement
      if (current.alsoHighlight) {
        const start = Date.now()
        const tickAlso = () => {
          const extra = document.querySelector(current.alsoHighlight!) as HTMLElement | null
          if (extra) {
            const r2 = extra.getBoundingClientRect()
            if (r2.width > 0 && r2.height > 0) {
              setRects(computeRects(el, current))
              return
            }
          }
          if (Date.now() - start < 1200) {
            requestAnimationFrame(tickAlso)
          }
        }
        // démarrer après le scroll initial s'il y en a un
        setTimeout(tickAlso, current.scrollIntoView ? 650 : 60)
      }
    }
    const el = document.querySelector(current.selector) as HTMLElement | null
    if (el) {
      positionEl(el)
    } else if (current.waitForSelector) {
      // MutationObserver : réagit instantanément dès que l'élément cible apparaît
      // (plus efficace que polling rAF, surtout en production où la nav est plus lente)
      const timeout = current.waitForSelector
      let done = false
      const observer = new MutationObserver(() => {
        if (done) return
        const e2 = document.querySelector(current.selector) as HTMLElement | null
        if (e2) {
          done = true
          observer.disconnect()
          positionEl(e2)
        }
      })
      observer.observe(document.body, { childList: true, subtree: true })
      // Sécurité : arrêt forcé au bout du timeout
      setTimeout(() => {
        if (done) return
        done = true
        observer.disconnect()
        // Dernière tentative
        const e2 = document.querySelector(current.selector) as HTMLElement | null
        if (e2) positionEl(e2)
      }, timeout)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, active])

  // Listeners scroll/resize : seulement REFRESH la position visuelle, ne déclenche jamais de scroll
  useEffect(() => {
    if (!active) return
    const onScroll = () => refreshRect()
    const onResize = () => refreshRect()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [active, refreshRect])

  // Persist step
  useEffect(() => {
    if (active) localStorage.setItem('tuto-step', String(step))
  }, [step, active])

  // Listen for the storage event + custom event to react when localStorage changes
  // (allows starting the tour without page reload)
  useEffect(() => {
    const handler = () => {
      const tour = localStorage.getItem('tuto-active')
      if (tour === '1') {
        setActive(true)
        const s = parseInt(localStorage.getItem('tuto-step') || '0', 10)
        setStep(s)
      } else {
        setActive(false)
      }
    }
    window.addEventListener('storage', handler)
    window.addEventListener('tuto-changed', handler)
    return () => {
      window.removeEventListener('storage', handler)
      window.removeEventListener('tuto-changed', handler)
    }
  }, [])

  // Force tooltip visible during the concept-tab step (montre les sens regroupés)
  useEffect(() => {
    if (!active) return
    const current = STEPS[step]
    if (!current) return
    const isConceptTabStep = current.selector === '[data-tour-concept-tab="1"]'

    if (!isConceptTabStep) return

    // Track all manipulated tooltips so we can clean up reliably
    const manipulated: HTMLElement[] = []

    const apply = () => {
      // Trouver tous les tooltips actifs (peut y en avoir plusieurs)
      document.querySelectorAll('[data-tour-concept-tooltip="1"]').forEach((el) => {
        const tip = el as HTMLElement
        tip.dataset.tourForced = '1'
        tip.style.display = 'block'
        tip.style.position = 'absolute'
        tip.style.left = '0'
        tip.style.top = '100%'
        tip.style.marginTop = '6px'
        tip.style.zIndex = '1100'
        tip.style.background = '#FFFFFF'
        tip.style.border = '2px solid #B8962E'
        tip.style.borderRadius = '8px'
        tip.style.boxShadow = '0 8px 24px rgba(184,150,46,0.25)'
        tip.style.padding = '12px'
        tip.style.minWidth = '220px'
        tip.style.maxWidth = '320px'
        manipulated.push(tip)
      })
    }

    // Apply IMMÉDIATEMENT (synchrone) pour que le tooltip soit visible avant le 1er computeRects
    apply()
    // Retries au cas où le panneau n'était pas encore monté
    const t1 = setTimeout(apply, 100)
    const t2 = setTimeout(apply, 500)
    const t3 = setTimeout(apply, 1000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      // Cleanup synchrone : retirer immédiatement tous les styles inline
      manipulated.forEach((tip) => {
        tip.style.display = ''
        tip.style.position = ''
        tip.style.left = ''
        tip.style.top = ''
        tip.style.marginTop = ''
        tip.style.zIndex = ''
        tip.style.background = ''
        tip.style.border = ''
        tip.style.borderRadius = ''
        tip.style.boxShadow = ''
        tip.style.padding = ''
        tip.style.minWidth = ''
        tip.style.maxWidth = ''
        delete tip.dataset.tourForced
      })
      // Aussi : nettoyer toute occurrence orpheline
      document.querySelectorAll('[data-tour-forced="1"]').forEach((el) => {
        const tip = el as HTMLElement
        tip.removeAttribute('style')
        delete tip.dataset.tourForced
      })
    }
  }, [step, active])

  if (!active) return null

  const current = STEPS[step]
  const isLast = step === STEPS.length - 1

  // Calcule la "bounding box" englobant tous les rects (pour le positionnement de la bulle uniquement)
  const unionRect: DOMRect | null = (() => {
    if (rects.length === 0) return null
    const left = Math.min(...rects.map(r => r.left))
    const top = Math.min(...rects.map(r => r.top))
    const right = Math.max(...rects.map(r => r.right))
    const bottom = Math.max(...rects.map(r => r.bottom))
    return { left, top, right, bottom, width: right - left, height: bottom - top, x: left, y: top, toJSON: () => ({}) } as DOMRect
  })()

  // Compute bubble position — robust against tall/wide targets
  const bubble = (() => {
    if (!unionRect || current.selector === 'body' || current.position === 'center') {
      return { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' as const }
    }
    const margin = 16
    const bubbleW = 340
    const bubbleH = 220
    const vpW = window.innerWidth
    const vpH = window.innerHeight

    // Si forceCorner = true, placer la bulle en bas-droite fixe du viewport
    // (bottom-right au lieu de top fixe pour éviter de déborder en bas)
    if (current.forceCorner) {
      return {
        left: `${vpW - bubbleW - 16}px`,
        bottom: '16px',
        top: 'auto' as const,
        transform: 'none' as const,
      }
    }

    // Helper : zone interdite = la cible visible dans le viewport (intersection)
    const visibleRect = {
      left: Math.max(0, unionRect.left),
      right: Math.min(vpW, unionRect.right),
      top: Math.max(0, unionRect.top),
      bottom: Math.min(vpH, unionRect.bottom),
    }

    const wouldOverlap = (l: number, t: number) =>
      l < visibleRect.right + 8 && l + bubbleW > visibleRect.left - 8 &&
      t < visibleRect.bottom + 8 && t + bubbleH > visibleRect.top - 8

    // Stratégie : tester d'abord les 4 positions classiques par ordre de préférence,
    // garder la première qui ne chevauche PAS la cible visible.
    const candidates: Array<{ left: number; top: number }> = []

    // Position préférée selon le step
    switch (current.position) {
      case 'bottom':
        candidates.push({ left: unionRect.left + unionRect.width / 2 - bubbleW / 2, top: unionRect.bottom + margin })
        break
      case 'top':
        candidates.push({ left: unionRect.left + unionRect.width / 2 - bubbleW / 2, top: unionRect.top - margin - bubbleH })
        break
      case 'left':
        candidates.push({ left: unionRect.left - margin - bubbleW, top: unionRect.top })
        break
      case 'right':
        candidates.push({ left: unionRect.right + margin, top: unionRect.top })
        break
    }

    // Fallbacks : droite, gauche, en bas du viewport, coin bas-droite fixe
    candidates.push({ left: visibleRect.right + margin, top: visibleRect.top })       // à droite de la zone visible
    candidates.push({ left: visibleRect.left - margin - bubbleW, top: visibleRect.top }) // à gauche
    candidates.push({ left: vpW - bubbleW - 16, top: vpH - bubbleH - 16 })             // coin bas-droite fixe

    // Choisir la première candidate qui ne chevauche pas et qui est dans le viewport
    let chosen = candidates[candidates.length - 1] // fallback final
    for (const c of candidates) {
      const inViewport = c.left >= 8 && c.top >= 8 && c.left + bubbleW <= vpW - 8 && c.top + bubbleH <= vpH - 8
      if (inViewport && !wouldOverlap(c.left, c.top)) {
        chosen = c
        break
      }
    }

    let { left, top } = chosen
    // Clamp final dans le viewport
    left = Math.max(8, Math.min(left, vpW - bubbleW - 8))
    top = Math.max(8, Math.min(top, vpH - bubbleH - 8))
    return { left: `${left}px`, top: `${top}px`, transform: 'none' as const }
  })()

  return (
    <>
      {/* Highlight zone(s) around target — overlay with rounded "holes" via SVG mask */}
      {rects.length > 0 && current.selector !== 'body' && (() => {
        const PAD = 8
        const RADIUS = 14
        const boxes = rects.map(r => ({
          x: r.left - PAD,
          y: r.top - PAD,
          w: r.width + PAD * 2,
          h: r.height + PAD * 2,
        }))
        return (
          <>
            {/* Overlay sombre avec un (ou plusieurs) trou(s) arrondi(s) via SVG mask */}
            <svg
              className="fixed pointer-events-auto"
              style={{ inset: 0, zIndex: 998, width: '100%', height: '100%' }}
              onClick={() => {/* eat clicks outside */}}
            >
              <defs>
                <mask id="tuto-mask">
                  <rect width="100%" height="100%" fill="white" />
                  {boxes.map((b, i) => (
                    <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx={RADIUS} ry={RADIUS} fill="black" />
                  ))}
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="rgba(26,20,16,0.5)" mask="url(#tuto-mask)" />
            </svg>
            {/* Bordure(s) dorée(s) arrondie(s) autour de chaque cible */}
            {boxes.map((b, i) => (
              <div
                key={i}
                className="fixed pointer-events-none"
                style={{
                  left: b.x,
                  top: b.y,
                  width: b.w,
                  height: b.h,
                  border: '2px solid #B8962E',
                  borderRadius: RADIUS,
                  boxShadow: '0 0 0 4px rgba(184,150,46,0.18), 0 8px 24px rgba(184,150,46,0.15)',
                  zIndex: 999,
                }}
              />
            ))}
          </>
        )
      })()}

      {/* Centered overlay for body case */}
      {(rects.length === 0 || current.selector === 'body') && (
        <div className="fixed inset-0" style={{ background: 'rgba(26,20,16,0.6)', zIndex: 998 }} />
      )}

      {/* Bubble */}
      <div
        className="fixed rounded-2xl shadow-2xl"
        style={{
          ...bubble,
          width: 340,
          background: '#FFFCF6',
          border: '1px solid rgba(184,150,46,0.4)',
          padding: '20px',
          zIndex: 1000,
        }}
      >
        {/* Skip top-right */}
        <button
          onClick={stop}
          className="absolute top-2 right-3 hover:opacity-70 transition-opacity"
          style={{ color: '#9E9089', fontSize: '11px', letterSpacing: '0.05em' }}
        >
          quitter ✕
        </button>

        {/* Step indicator */}
        <div className="flex items-center gap-1 mb-3 mt-2">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === step ? 18 : 5,
                height: 4,
                background: i === step ? '#B8962E' : i < step ? 'rgba(184,150,46,0.5)' : 'rgba(184,150,46,0.2)',
              }}
            />
          ))}
        </div>

        <h3 className="font-semibold mb-2" style={{ color: '#1A1410', fontSize: '15px', fontFamily: "'Cormorant Garamond', serif" }}>
          {current.title}
        </h3>
        <p className="text-xs mb-4" style={{ color: '#5A4E42', lineHeight: 1.55 }}>
          {current.desc}
        </p>

        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="text-xs px-3 py-1 rounded-full transition-colors"
            style={{
              border: '1px solid rgba(184,150,46,0.3)',
              color: step === 0 ? '#C8BCAD' : '#8A7428',
              cursor: step === 0 ? 'default' : 'pointer',
              background: 'transparent',
            }}
          >
            ← Précédent
          </button>

          <button
            onClick={() => {
              if (isLast) {
                stop()
                return
              }
              // Avancer l'étape, puis naviguer si demandé
              setStep(step + 1)
              if (current.navigateOnNext) {
                router.push(current.navigateOnNext)
              }
            }}
            className="text-xs px-3 py-1 rounded-full transition-colors hover:shadow-md font-semibold"
            style={{
              background: '#B8962E',
              color: '#FFFCF6',
              letterSpacing: '0.05em',
            }}
          >
            {isLast ? 'Terminer ✦' : 'Suivant →'}
          </button>
        </div>
      </div>
    </>
  )
}
