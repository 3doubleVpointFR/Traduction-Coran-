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
    waitForSelector: 5000,
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
      // Auto-deplier le concept retenu — on retry plusieurs fois car sur mobile
      // le bottom sheet peut encore animer
      const tryDeplier = (attempt = 0) => {
        // Si déjà déplié → stop
        if (document.querySelector('[data-tour-proof-ctx="1"]')) return
        const block = document.querySelector('[data-tour-concept-block="retenu"]')
        if (!block) {
          if (attempt < 10) setTimeout(() => tryDeplier(attempt + 1), 200)
          return
        }
        // Cherche le bouton "toggle" : celui qui commence par ▶ ou ▼ (au lieu du premier
        // bouton venu, qui pourrait être un autre bouton du panneau)
        const buttons = Array.from(block.querySelectorAll('button')) as HTMLButtonElement[]
        const toggleBtn = buttons.find(b => /^[▶▼]/.test(b.textContent?.trim() || '')) || buttons[0]
        if (toggleBtn) {
          toggleBtn.click()
          // Vérifie que ça a marché ; sinon retry
          setTimeout(() => {
            if (!document.querySelector('[data-tour-proof-ctx="1"]') && attempt < 5) {
              tryDeplier(attempt + 1)
            }
          }, 250)
        } else if (attempt < 10) {
          setTimeout(() => tryDeplier(attempt + 1), 200)
        }
      }
      setTimeout(() => tryDeplier(), 300)
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
  const [navigating, setNavigating] = useState(false)
  // Offset utilisateur (drag) appliqué par-dessus la position calculée
  const [bubbleOffset, setBubbleOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  // Reset l'offset à chaque changement d'étape
  useEffect(() => { setBubbleOffset({ x: 0, y: 0 }) }, [step])

  // Read localStorage on mount, sync state
  useEffect(() => {
    const tour = localStorage.getItem('tuto-active')
    if (tour === '1') {
      setActive(true)
      const s = parseInt(localStorage.getItem('tuto-step') || '0', 10)
      setStep(s)
    }
    // Reset l'état "navigating" à chaque changement de pathname
    // → le bouton "Chargement..." redevient "Suivant" dès que la nouvelle page mount
    setNavigating(false)
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
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
    const vpH = typeof window !== 'undefined' ? window.innerHeight : 800
    // Sur mobile : clamp la hauteur du rect pour éviter qu'il couvre tout l'écran
    // (cas du WordPanel dans le bottom sheet) → surbrillance focalisée sur le haut
    const clamp = (r: DOMRect): DOMRect => {
      if (!isMobile) return r
      const maxH = vpH * 0.35 // max 35% du viewport
      if (r.height <= maxH) return r
      return new DOMRect(r.left, r.top, r.width, maxH)
    }
    const rects: DOMRect[] = [clamp(el.getBoundingClientRect())]
    if (current.alsoHighlight) {
      const extra = document.querySelector(current.alsoHighlight) as HTMLElement | null
      if (extra) {
        const r2 = extra.getBoundingClientRect()
        if (r2.width > 0 && r2.height > 0) {
          rects.push(clamp(r2))
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
    // Clear les rects précédents tant que la nouvelle cible n'est pas trouvée
    // → la bulle se centre automatiquement avec le texte du nouveau step
    //   au lieu de rester collée sur l'ancienne cible (ex: pendant une nav)
    setRects([])
    // Détecte si l'élément est dans un container scrollable (autre que window)
    const findScrollableAncestor = (node: HTMLElement | null): HTMLElement | null => {
      let p = node?.parentElement || null
      while (p && p !== document.body) {
        const s = getComputedStyle(p)
        const oy = s.overflowY
        if ((oy === 'auto' || oy === 'scroll') && p.scrollHeight > p.clientHeight) {
          return p
        }
        p = p.parentElement
      }
      return null
    }

    const positionEl = (el: HTMLElement) => {
      let didScroll = false
      const scrollableAncestor = findScrollableAncestor(el)

      if (current.scrollIntoView) {
        if (scrollableAncestor) {
          // Élément dans un container scrollable (bottom sheet mobile, etc.)
          // → scrollIntoView gère bien la chaîne d'ancêtres scrollables
          try {
            el.scrollIntoView({ block: 'center', behavior: 'smooth' })
            didScroll = true
          } catch { /* noop */ }
        } else {
          // Scroll de la fenêtre uniquement, avec offset pour le header sticky
          const r = el.getBoundingClientRect()
          const vpH = window.innerHeight
          const HEADER_OFFSET = 90
          const isFullyVisible = r.top >= HEADER_OFFSET && r.bottom <= vpH
          if (!isFullyVisible) {
            const targetScroll = window.scrollY + r.top - HEADER_OFFSET
            window.scrollTo({ top: targetScroll, behavior: 'smooth' })
            didScroll = true
          }
        }
      } else if (scrollableAncestor) {
        // Pas de scrollIntoView demandé, mais si l'élément est dans un container
        // scrollable et hors viewport → on scroll le container quand même
        const r = el.getBoundingClientRect()
        const vpH = window.innerHeight
        if (r.top < 0 || r.bottom > vpH) {
          try {
            el.scrollIntoView({ block: 'center', behavior: 'smooth' })
            didScroll = true
          } catch { /* noop */ }
        }
      }
      // 1) Surbrillance IMMÉDIATE (position actuelle, avant scroll) → pas d'attente visible
      setRects(computeRects(el, current))
      // 2) Si on a effectivement scrollé, recalculer après que le smooth scroll soit fini
      if (didScroll) {
        setTimeout(() => setRects(computeRects(el, current)), 600)
      }
      // 3) Re-capture systématique 500ms plus tard (couvre les animations CSS/transitions
      //    comme le slide-up du bottom sheet sur mobile, qui décalent la position après coup)
      setTimeout(() => {
        const elNow = document.querySelector(current.selector) as HTMLElement | null
        if (elNow) setRects(computeRects(elNow, current))
      }, 500)
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
    // Helper : élément valide = présent dans le DOM, dimensions non-nulles, ET dans le viewport
    // (sur mobile, le bottom sheet glisse depuis le bas — pendant l'animation, le rect est
    // hors écran. Il faut rejeter ces captures pour ne garder que la position finale.)
    const findVisibleEl = (): HTMLElement | null => {
      const e = document.querySelector(current.selector) as HTMLElement | null
      if (!e) return null
      const r = e.getBoundingClientRect()
      if (r.width <= 0 || r.height <= 0) return null
      const vpH = typeof window !== 'undefined' ? window.innerHeight : 800
      // Rejette si entièrement hors écran (e.g. pendant l'animation slide-up du bottom sheet)
      if (r.bottom <= 0 || r.top >= vpH) return null
      return e
    }
    const el = findVisibleEl()
    if (el) {
      positionEl(el)
    } else if (current.waitForSelector) {
      // MutationObserver : attend que l'élément soit dans le DOM ET visible
      // (couvre les cas d'animations/transitions CSS où le data-attr apparaît
      // avant que le panneau soit réellement rendu)
      const timeout = current.waitForSelector
      let done = false
      const tryPosition = () => {
        if (done) return
        const e2 = findVisibleEl()
        if (e2) {
          done = true
          observer.disconnect()
          positionEl(e2)
        }
      }
      const observer = new MutationObserver(tryPosition)
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,         // détecte aussi les changements de classes/styles
        attributeFilter: ['style', 'class', 'data-tour-word-panel', 'data-tour-concept-tab', 'data-tour-concept-block', 'data-tour-proof-ctx', 'data-tour-verses-list'],
      })
      // Filet de sécurité : retry périodique au cas où dimensions changent sans mutation
      const intervalId = setInterval(tryPosition, 100)
      // Arrêt forcé au bout du timeout
      setTimeout(() => {
        if (done) return
        done = true
        observer.disconnect()
        clearInterval(intervalId)
        // Dernière tentative (même si dimensions = 0, on positionne quand même)
        const e2 = document.querySelector(current.selector) as HTMLElement | null
        if (e2) positionEl(e2)
      }, timeout)
      // Cleanup interval quand observer se déconnecte
      const origDisconnect = observer.disconnect.bind(observer)
      observer.disconnect = () => {
        clearInterval(intervalId)
        origDisconnect()
      }
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
    const vpW = window.innerWidth
    const vpH = window.innerHeight
    const isMobile = vpW < 1024
    // Bulle plus étroite sur mobile pour respecter les petits écrans
    const bubbleW = isMobile ? Math.min(vpW - 24, 320) : 340
    const bubbleH = 220

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

    // ─── MOBILE : place la bulle dans le plus grand espace libre ───
    // Sur petit écran, peu importe la position demandée — on calcule l'espace
    // libre au-dessus et en-dessous du rect, et on prend le plus grand.
    if (isMobile) {
      const spaceAbove = unionRect.top
      const spaceBelow = vpH - unionRect.bottom
      const bubbleLeft = Math.max(8, Math.min((vpW - bubbleW) / 2, vpW - bubbleW - 8))
      if (spaceAbove >= spaceBelow && spaceAbove >= bubbleH + 16) {
        candidates.push({ left: bubbleLeft, top: Math.max(8, unionRect.top - margin - bubbleH) })
      } else if (spaceBelow >= bubbleH + 16) {
        candidates.push({ left: bubbleLeft, top: Math.min(vpH - bubbleH - 8, unionRect.bottom + margin) })
      } else {
        // Pas assez d'espace nulle part → coin haut (au-dessus du sheet/élément)
        candidates.push({ left: bubbleLeft, top: 8 })
      }
    }

    // Position préférée selon le step (desktop ou fallback mobile)
    // Pour left/right : on centre verticalement la bulle sur la cible
    const centerY = unionRect.top + unionRect.height / 2 - bubbleH / 2
    switch (current.position) {
      case 'bottom':
        candidates.push({ left: unionRect.left + unionRect.width / 2 - bubbleW / 2, top: unionRect.bottom + margin })
        break
      case 'top':
        candidates.push({ left: unionRect.left + unionRect.width / 2 - bubbleW / 2, top: unionRect.top - margin - bubbleH })
        break
      case 'left':
        candidates.push({ left: unionRect.left - margin - bubbleW, top: centerY })
        break
      case 'right':
        candidates.push({ left: unionRect.right + margin, top: centerY })
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
      {/* Styles globaux pour le tutoriel (évite styled-jsx qui plante en build) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .tuto-quit-btn:hover {
          background: rgba(184, 150, 46, 0.08) !important;
          border-color: rgba(184, 150, 46, 0.5) !important;
          color: #8A7428 !important;
        }
        .tuto-next-btn:not(:disabled):hover {
          box-shadow: 0 4px 14px rgba(184, 150, 46, 0.4);
          transform: translateY(-1px);
        }
        .tuto-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #FFFCF6;
          animation: tutoDotPulse 1.05s ease-in-out infinite;
        }
        @keyframes tutoDotPulse {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
          40% { transform: scale(1.1); opacity: 1; }
        }
      ` }} />

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
          width: typeof window !== 'undefined' && window.innerWidth < 1024 ? Math.min(window.innerWidth - 24, 320) : 340,
          background: '#FFFCF6',
          border: '1px solid rgba(184,150,46,0.4)',
          padding: '20px',
          zIndex: 1000,
        }}
      >
        {/* Skip top-right — petit bouton arrondi élégant */}
        <button
          onClick={stop}
          className="tuto-quit-btn absolute inline-flex items-center gap-1 rounded-full transition-all"
          style={{
            top: '10px',
            right: '12px',
            padding: '3px 10px 3px 8px',
            background: 'transparent',
            border: '1px solid rgba(184,150,46,0.25)',
            color: '#9E9089',
            fontSize: '10px',
            letterSpacing: '0.08em',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ fontSize: '10px', lineHeight: 1 }}>✕</span>
          <span>quitter</span>
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
            onClick={() => {
              if (step === 0 || navigating) return
              const prevStep = step - 1
              const prevDef = STEPS[prevStep]
              localStorage.setItem('tuto-step', String(prevStep))
              // Si le step précédent est sur une autre page → naviguer
              if (prevDef?.requiresPath && prevDef.requiresPath !== pathname) {
                setNavigating(true)
                router.push(prevDef.requiresPath)
                // useEffect[pathname] reset navigating + lit step depuis localStorage
              } else {
                setStep(prevStep)
              }
            }}
            disabled={step === 0 || navigating}
            className="text-xs px-3 py-1 rounded-full transition-colors"
            style={{
              border: '1px solid rgba(184,150,46,0.3)',
              color: step === 0 || navigating ? '#C8BCAD' : '#8A7428',
              cursor: step === 0 || navigating ? 'default' : 'pointer',
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
              if (navigating) return // évite double-clic pendant nav
              const nextStep = step + 1
              localStorage.setItem('tuto-step', String(nextStep))
              if (current.navigateOnNext) {
                setNavigating(true)
                router.push(current.navigateOnNext)
              } else {
                setStep(nextStep)
              }
            }}
            disabled={navigating}
            className="tuto-next-btn text-xs px-3 py-1 rounded-full transition-all font-semibold"
            style={{
              background: '#B8962E',
              color: '#FFFCF6',
              letterSpacing: '0.05em',
              cursor: navigating ? 'wait' : 'pointer',
              minWidth: '90px',
              textAlign: 'center',
            }}
          >
            {isLast ? (
              'Terminer ✦'
            ) : navigating ? (
              <span className="inline-flex items-center gap-1" aria-label="Chargement">
                <span className="tuto-dot" style={{ animationDelay: '0s' }} />
                <span className="tuto-dot" style={{ animationDelay: '0.18s' }} />
                <span className="tuto-dot" style={{ animationDelay: '0.36s' }} />
              </span>
            ) : (
              'Suivant →'
            )}
          </button>
        </div>
      </div>
    </>
  )
}
