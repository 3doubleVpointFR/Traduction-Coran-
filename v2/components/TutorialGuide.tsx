'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import MobileTutorial from './MobileTutorial'

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
  fullHeight?: boolean                       // ne pas capper la hauteur de la zone surlignée (full height)
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
    fullHeight: true,
    waitForSelector: 8000,
  },
  {
    selector: '[data-tour-verse-num="2"] [data-tour-summary="1"]',
    position: 'bottom',
    title: 'Le résumé du verset',
    desc: 'Cet encadré or apparaît en haut de chaque verset analysé : il résume en 1-2 phrases l\'idée centrale et la portée du verset. Une vue d\'ensemble avant de plonger dans l\'analyse mot par mot.',
    scrollIntoView: true,
    forceCorner: true,
    waitForSelector: 5000,
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
      // Le wrapper est toujours présent (data-tour-word-panel) — on détecte le contenu réel
      // via un élément qui n'apparaît que quand un mot est analysé (concept-tab).
      const hasAnalysis = document.querySelector('[data-tour-concept-tab="1"]')
      if (!hasAnalysis) {
        const word = document.querySelector('[data-tour-verse-num="2"] [data-tour-word-key]') as HTMLElement
        if (word) word.click()
      }
    },
  },
  {
    selector: '[data-tour-concept-tab="1"]',
    position: 'left',
    title: 'Les regroupements de sens',
    desc: 'En haut du panneau tu vois les regroupements de sens de la racine (par ex. Divinité, Adoration/Dévotion...). Chaque regroupement rassemble plusieurs sens qui partagent une même nature philosophique. Survole l\'un d\'eux avec ta souris pour voir tous les sens qui le composent — comme dans l\'encadré or qui s\'affiche maintenant.',
    waitForSelector: 1000,
    scrollIntoView: false,
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
        const toggleBtn = buttons.find(b => /^[▶▸▼▾]/.test(b.textContent?.trim() || '')) || buttons[0]
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
  const [isMobile, setIsMobile] = useState(false)
  // Offset utilisateur (drag) appliqué par-dessus la position calculée
  const [bubbleOffset, setBubbleOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  // Reset l'offset à chaque changement d'étape
  useEffect(() => { setBubbleOffset({ x: 0, y: 0 }) }, [step])

  // Détection mobile : sur < 1024px on bascule sur le tutoriel cartes plein écran
  // (le tuto desktop avec surbrillance DOM ne marche pas bien avec le bottom sheet)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

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
    const HEADER = 56 // hauteur approximative du header sticky en haut
    const PAD = 8     // padding ajouté autour du rect au moment du rendu (doit être anticipé)
    // Clamp le rect dans les limites visibles du viewport.
    // Important : on tient compte du PAD qui sera ajouté au rendu pour que la box finale
    // (rect + PAD de chaque côté) ne déborde NI sous le header NI hors du bas du viewport.
    // Pour les steps du WordPanel (à droite), on ne cap PAS la hauteur :
    // la bulle est placée à gauche du panel (logique panel-aware), donc le surlignage
    // peut être full-height sans gêner la bulle.
    const isPanelStep =
      current.selector.includes('data-tour-word-panel') ||
      current.selector.includes('data-tour-concept') ||
      current.selector.includes('data-tour-proof-ctx') ||
      current.selector.includes('data-tour-verses-list')

    const clamp = (r: DOMRect): DOMRect => {
      const visTop = Math.max(HEADER + PAD, r.top)
      const visBottom = Math.min(vpH - PAD - 8, r.bottom)
      if (visBottom <= visTop) return r // dégénéré : on garde le rect original
      const visibleH = visBottom - visTop
      if (isMobile) {
        const maxH = vpH * 0.35
        const finalH = Math.min(visibleH, maxH)
        return new DOMRect(r.left, visTop, r.width, finalH)
      }
      // Desktop : pas de cap pour les steps du panneau ou fullHeight=true (full-height OK).
      // Pour les autres : cap à 50% pour qu'un coin du viewport reste libre pour la bulle.
      if (isPanelStep || current.fullHeight) {
        return new DOMRect(r.left, visTop, r.width, visibleH)
      }
      const maxH = vpH * 0.5
      const finalH = Math.min(visibleH, maxH)
      return new DOMRect(r.left, visTop, r.width, finalH)
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
          try {
            el.scrollIntoView({ block: 'center', behavior: 'smooth' })
            didScroll = true
          } catch { /* noop */ }
        } else {
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
    // Helper : élément valide = présent dans le DOM avec des dimensions non-nulles
    // (le check "off-screen" a été retiré car il rejettait les éléments simplement
    // sous le fold qui doivent être scrollés to → le scroll est géré par positionEl)
    const findVisibleEl = (): HTMLElement | null => {
      const e = document.querySelector(current.selector) as HTMLElement | null
      if (!e) return null
      const r = e.getBoundingClientRect()
      if (r.width <= 0 || r.height <= 0) return null
      return e
    }
    const el = findVisibleEl()
    if (el) {
      // Même page : on ne clear PAS les rects → transition CSS douce vers la nouvelle position
      positionEl(el)
    } else if (current.waitForSelector) {
      // Élément absent (souvent navigation cross-page) → clear pour éviter un surlignage périmé
      setRects([])
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

  // ResizeObserver — recalcule les rects quand l'élément cible CHANGE DE TAILLE.
  // Crucial pour les panneaux dont le contenu charge tardivement (API) : sinon
  // le surlignage reste sur l'ancienne taille (placeholder) et coupe le panneau.
  useEffect(() => {
    if (!active) return
    const current = STEPS[step]
    if (!current || current.selector === 'body') return
    if (typeof ResizeObserver === 'undefined') return

    let observer: ResizeObserver | null = null
    let observed: HTMLElement | null = null
    let pollId: number | null = null
    let stopId: number | null = null

    const attach = () => {
      const el = document.querySelector(current.selector) as HTMLElement | null
      if (!el || el === observed) return
      // Nouvel élément trouvé → on (re)attache l'observer dessus
      if (observer) observer.disconnect()
      observed = el
      observer = new ResizeObserver(() => {
        const e = document.querySelector(current.selector) as HTMLElement | null
        if (!e) return
        const r = e.getBoundingClientRect()
        if (r.width > 0 && r.height > 0) {
          setRects(computeRects(e, current))
        }
      })
      observer.observe(el)
    }

    // Tentative immédiate puis polling court (max 5s) pour rattraper les éléments
    // qui apparaissent en différé (panneau qui se construit, contenu API qui arrive).
    attach()
    pollId = window.setInterval(attach, 250)
    stopId = window.setTimeout(() => {
      if (pollId !== null) {
        clearInterval(pollId)
        pollId = null
      }
    }, 5000)

    return () => {
      if (observer) observer.disconnect()
      if (pollId !== null) clearInterval(pollId)
      if (stopId !== null) clearTimeout(stopId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, active])

  // Listeners scroll/resize : seulement REFRESH la position visuelle (avec rAF throttle)
  // + écoute aussi le scroll des containers scrollables (bottom sheet sur mobile)
  useEffect(() => {
    if (!active) return
    let rafId: number | null = null
    const onScroll = () => {
      if (rafId !== null) return // déjà programmé pour la prochaine frame
      rafId = requestAnimationFrame(() => {
        refreshRect()
        rafId = null
      })
    }
    const onResize = onScroll

    // Trouve tous les ancêtres scrollables de la cible actuelle (s'il y en a)
    const current = STEPS[step]
    const scrollListeners: Array<{ el: HTMLElement | Window; remove: () => void }> = []
    if (current && current.selector !== 'body') {
      const target = document.querySelector(current.selector) as HTMLElement | null
      let p = target?.parentElement as HTMLElement | null
      while (p && p !== document.body) {
        const s = getComputedStyle(p)
        if (s.overflowY === 'auto' || s.overflowY === 'scroll') {
          p.addEventListener('scroll', onScroll, { passive: true })
          const captured = p
          scrollListeners.push({ el: p, remove: () => captured.removeEventListener('scroll', onScroll) })
        }
        p = p.parentElement
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      scrollListeners.forEach(l => l.remove())
    }
  }, [active, refreshRect, step])

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

  // ─── Sur mobile : remplace tout par le tuto cartes plein écran ───
  if (isMobile) {
    return <MobileTutorial onClose={stop} />
  }

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
    const margin = 28
    const vpW = window.innerWidth
    const vpH = window.innerHeight
    const isMobile = vpW < 1024
    // Bulle plus étroite sur mobile pour respecter les petits écrans.
    // IMPORTANT : doit correspondre à la largeur réellement rendue plus bas (360 desktop).
    const bubbleW = isMobile ? Math.min(vpW - 24, 320) : 360
    const bubbleH = 220

    // Helper : zone interdite = la cible visible dans le viewport (intersection)
    const visibleRect = {
      left: Math.max(0, unionRect.left),
      right: Math.min(vpW, unionRect.right),
      top: Math.max(0, unionRect.top),
      bottom: Math.min(vpH, unionRect.bottom),
    }

    // Si forceCorner = true, choisir le coin du viewport le plus éloigné de la cible
    // ET qui ne chevauche pas la zone surlignée (avec marge SAFE).
    // Marges 32 en haut / 64 en bas — laisse de la place pour l'ombre portée
    // de la bulle (jusqu'à ~52px en dessous) sans toucher la barre Windows.
    if (current.forceCorner) {
      const TOP_MARGIN = 32
      const BOTTOM_MARGIN = 64
      const SIDE_MARGIN = 24
      const corners = [
        { left: SIDE_MARGIN, top: TOP_MARGIN },                                                       // top-left
        { left: vpW - bubbleW - SIDE_MARGIN, top: TOP_MARGIN },                                       // top-right
        { left: SIDE_MARGIN, top: vpH - bubbleH - BOTTOM_MARGIN },                                    // bottom-left
        { left: vpW - bubbleW - SIDE_MARGIN, top: vpH - bubbleH - BOTTOM_MARGIN },                    // bottom-right
      ]
      const tcx = visibleRect.left + (visibleRect.right - visibleRect.left) / 2
      const tcy = visibleRect.top + (visibleRect.bottom - visibleRect.top) / 2
      corners.sort((a, b) => {
        const da = Math.hypot(a.left + bubbleW / 2 - tcx, a.top + bubbleH / 2 - tcy)
        const db = Math.hypot(b.left + bubbleW / 2 - tcx, b.top + bubbleH / 2 - tcy)
        return db - da
      })
      const SAFE_FC = 18
      const overlapsTarget = (l: number, t: number) =>
        l < visibleRect.right + SAFE_FC && l + bubbleW > visibleRect.left - SAFE_FC &&
        t < visibleRect.bottom + SAFE_FC && t + bubbleH > visibleRect.top - SAFE_FC
      const chosen = corners.find(c => !overlapsTarget(c.left, c.top)) ?? corners[0]
      return {
        left: `${chosen.left}px`,
        top: `${chosen.top}px`,
        transform: 'none' as const,
      }
    }

    // Zone du WordPanel (desktop uniquement) — détectée toujours pour 2 usages :
    //   - Si la cible n'est PAS dans le panneau → on évite le panneau (wouldCoverPanel)
    //   - Si la cible EST dans le panneau → on positionne la bulle à gauche du panneau
    //     (et non à gauche de la cible elle-même, ce qui pouvait déborder à cause du padding interne)
    const isPanelStep =
      current.selector.includes('data-tour-word-panel') ||
      current.selector.includes('data-tour-concept') ||
      current.selector.includes('data-tour-proof-ctx') ||
      current.selector.includes('data-tour-verses-list')
    let panelRect: { left: number; right: number; top: number; bottom: number } | null = null
    if (!isMobile) {
      const panelEl = document.querySelector('[data-tour-word-panel="1"]') as HTMLElement | null
      if (panelEl) {
        const r = panelEl.getBoundingClientRect()
        if (r.width > 0 && r.height > 0) {
          panelRect = {
            left: Math.max(0, r.left),
            right: Math.min(vpW, r.right),
            top: Math.max(0, r.top),
            bottom: Math.min(vpH, r.bottom),
          }
        }
      }
    }

    const SAFE = 18 // marge de respiration vis-à-vis des zones interdites

    const wouldOverlap = (l: number, t: number) =>
      l < visibleRect.right + SAFE && l + bubbleW > visibleRect.left - SAFE &&
      t < visibleRect.bottom + SAFE && t + bubbleH > visibleRect.top - SAFE

    // Toujours éviter de recouvrir le WordPanel — même quand la cible est DANS le panel
    // (la bulle se positionne à côté du panel, et la flèche/halo suffit à pointer la cible interne).
    const wouldCoverPanel = (l: number, t: number) => {
      if (!panelRect) return false
      return l < panelRect.right + SAFE && l + bubbleW > panelRect.left - SAFE &&
             t < panelRect.bottom + SAFE && t + bubbleH > panelRect.top - SAFE
    }

    // Stratégie : tester d'abord les 4 positions classiques par ordre de préférence,
    // garder la première qui ne chevauche PAS la cible visible NI le WordPanel.
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
    const cx = unionRect.left + unionRect.width / 2 - bubbleW / 2

    // 4 positions adjacentes à la cible — la bulle "colle" au surlignage avec un petit gap
    const sidePositions: Record<string, { left: number; top: number }> = {
      top:    { left: cx, top: unionRect.top - margin - bubbleH },
      bottom: { left: cx, top: unionRect.bottom + margin },
      left:   { left: unionRect.left - margin - bubbleW, top: centerY },
      right:  { left: unionRect.right + margin, top: centerY },
    }

    // Cas spécial : étape ciblant un élément DANS le panneau, position 'left'
    // → on positionne la bulle à gauche du PANNEAU (pas de la cible interne) avec marge confortable.
    //   Sinon le bord droit de la bulle (avec son ombre) débordait sous le panneau.
    if (isPanelStep && current.position === 'left' && panelRect) {
      const PANEL_GAP = 24 // marge entre la bulle et le panneau
      candidates.push({
        left: panelRect.left - PANEL_GAP - bubbleW,
        top: centerY,
      })
    } else if (current.position && current.position !== 'center' && sidePositions[current.position]) {
      candidates.push(sidePositions[current.position])
    }

    // Fallbacks adjacents : on essaie les 3 autres côtés de la cible (opposé en premier).
    // → la bulle reste TOUJOURS collée au surlignage (avec gap), jamais reléguée dans un coin.
    const orderMap: Record<string, Array<'top' | 'bottom' | 'left' | 'right'>> = {
      top:    ['bottom', 'left', 'right'],
      bottom: ['top', 'left', 'right'],
      left:   ['right', 'top', 'bottom'],
      right:  ['left', 'top', 'bottom'],
    }
    const fallbackOrder = (current.position && orderMap[current.position]) || ['bottom', 'top', 'left', 'right']
    fallbackOrder.forEach(p => {
      if (sidePositions[p]) candidates.push(sidePositions[p])
    })

    // Fallback panel-aware : zone à gauche du WordPanel
    if (panelRect) {
      const safeRight = panelRect.left - margin - bubbleW
      candidates.push({ left: Math.max(margin, safeRight), top: visibleRect.top })             // à gauche du panneau, aligné cible
      candidates.push({ left: Math.max(margin, safeRight), top: vpH - bubbleH - 24 })          // bas-gauche du panneau
    }

    // Les 4 coins du viewport, triés par distance à la cible (le plus éloigné en premier).
    // Garantit qu'au pire, la bulle finit dans le coin le plus loin du surlignage.
    // Marge bas 64px : place pour l'ombre portée + barre Windows.
    const targetCx = visibleRect.left + (visibleRect.right - visibleRect.left) / 2
    const targetCy = visibleRect.top + (visibleRect.bottom - visibleRect.top) / 2
    const cornerCandidates = [
      { left: 24, top: 32 },                                          // top-left
      { left: vpW - bubbleW - 24, top: 32 },                          // top-right
      { left: 24, top: vpH - bubbleH - 64 },                          // bottom-left
      { left: vpW - bubbleW - 24, top: vpH - bubbleH - 64 },          // bottom-right
    ].sort((a, b) => {
      const da = Math.hypot(a.left + bubbleW / 2 - targetCx, a.top + bubbleH / 2 - targetCy)
      const db = Math.hypot(b.left + bubbleW / 2 - targetCx, b.top + bubbleH / 2 - targetCy)
      return db - da
    })
    cornerCandidates.forEach(c => candidates.push(c))

    // Choisir la première candidate qui ne chevauche pas la cible NI le panneau, et reste dans le viewport.
    // EDGE_MARGIN = 16px de respiration aux bords (avant 8 → trop collé)
    const EDGE_MARGIN = 16
    let chosen = candidates[candidates.length - 1] // fallback final = bas-gauche
    for (const c of candidates) {
      const inViewport =
        c.left >= EDGE_MARGIN &&
        c.top >= EDGE_MARGIN &&
        c.left + bubbleW <= vpW - EDGE_MARGIN &&
        c.top + bubbleH <= vpH - EDGE_MARGIN
      if (inViewport && !wouldOverlap(c.left, c.top) && !wouldCoverPanel(c.left, c.top)) {
        chosen = c
        break
      }
    }

    let { left, top } = chosen
    // Clamp final dans le viewport — au moins EDGE_MARGIN des bords
    left = Math.max(EDGE_MARGIN, Math.min(left, vpW - bubbleW - EDGE_MARGIN))
    top = Math.max(EDGE_MARGIN, Math.min(top, vpH - bubbleH - EDGE_MARGIN))
    return { left: `${left}px`, top: `${top}px`, transform: 'none' as const }
  })()

  return (
    <>
      {/* Styles globaux pour le tutoriel (évite styled-jsx qui plante en build) */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Transitions de mouvement pour fluidifier les changements d'étape */
        .tuto-bubble {
          transition:
            left 420ms cubic-bezier(0.16, 1, 0.3, 1),
            top 420ms cubic-bezier(0.16, 1, 0.3, 1),
            bottom 420ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: left, top, bottom;
        }
        .tuto-highlight-box {
          transition:
            left 420ms cubic-bezier(0.16, 1, 0.3, 1),
            top 420ms cubic-bezier(0.16, 1, 0.3, 1),
            width 420ms cubic-bezier(0.16, 1, 0.3, 1),
            height 420ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: left, top, width, height;
          animation: tutoHighlightPulse 2.4s ease-in-out infinite;
        }
        @keyframes tutoHighlightPulse {
          0%, 100% {
            box-shadow: 0 0 0 4px rgba(184,150,46,0.18), 0 8px 24px rgba(184,150,46,0.15);
          }
          50% {
            box-shadow: 0 0 0 7px rgba(184,150,46,0.30), 0 8px 28px rgba(184,150,46,0.22);
          }
        }
        .tuto-mask-rect {
          transition:
            x 420ms cubic-bezier(0.16, 1, 0.3, 1),
            y 420ms cubic-bezier(0.16, 1, 0.3, 1),
            width 420ms cubic-bezier(0.16, 1, 0.3, 1),
            height 420ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        /* Fade-in du contenu de la bulle à chaque changement d'étape */
        .tuto-content-anim {
          animation: tutoContentIn 320ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes tutoContentIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Étoile ✦ du titre qui pivote à chaque nouvelle étape */
        .tuto-title-star {
          display: inline-block;
          animation: tutoTitleStarSpin 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
          transform-origin: center;
        }
        @keyframes tutoTitleStarSpin {
          from { transform: rotate(-180deg); opacity: 0; }
          to { transform: rotate(0deg); opacity: 0.7; }
        }
        /* Apparition initiale très douce de la bulle */
        .tuto-bubble-enter {
          animation: tutoBubbleEnter 320ms ease-out both;
        }
        @keyframes tutoBubbleEnter {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .tuto-quit-btn {
          transition: all 220ms ease;
        }
        .tuto-quit-btn:hover {
          background: rgba(184, 150, 46, 0.08) !important;
          border-color: rgba(184, 150, 46, 0.5) !important;
          color: #8A7428 !important;
        }
        .tuto-next-btn {
          transition: box-shadow 240ms ease, transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .tuto-next-btn:not(:disabled):hover {
          box-shadow: 0 4px 14px rgba(184, 150, 46, 0.4);
          transform: translateY(-1px);
        }
        .tuto-prev-btn {
          transition: all 220ms ease;
        }
        .tuto-prev-btn:not(:disabled):hover {
          background: rgba(184, 150, 46, 0.08) !important;
        }
        /* Flèches des boutons : glissent au hover */
        .tuto-prev-arrow,
        .tuto-next-arrow {
          display: inline-block;
          transition: transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .tuto-prev-btn:not(:disabled):hover .tuto-prev-arrow {
          transform: translateX(-3px);
        }
        .tuto-next-btn:not(:disabled):hover .tuto-next-arrow {
          transform: translateX(3px);
        }
        .tuto-end-star {
          display: inline-block;
          transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .tuto-next-btn:not(:disabled):hover .tuto-end-star {
          transform: rotate(360deg);
        }
        /* Indicateur d'étapes — transitions élégantes */
        .tuto-step-dot {
          transition:
            width 380ms cubic-bezier(0.16, 1, 0.3, 1),
            background 380ms ease;
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
        /* Respect des préférences utilisateur */
        @media (prefers-reduced-motion: reduce) {
          .tuto-bubble,
          .tuto-highlight-box,
          .tuto-mask-rect,
          .tuto-step-dot,
          .tuto-content-anim,
          .tuto-bubble-enter,
          .tuto-title-star,
          .tuto-prev-arrow,
          .tuto-next-arrow,
          .tuto-end-star {
            transition: none !important;
            animation: none !important;
            transform: none !important;
          }
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
                    <rect
                      key={i}
                      className="tuto-mask-rect"
                      x={b.x}
                      y={b.y}
                      width={b.w}
                      height={b.h}
                      rx={RADIUS}
                      ry={RADIUS}
                      fill="black"
                    />
                  ))}
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="rgba(26,20,16,0.5)" mask="url(#tuto-mask)" />
            </svg>
            {/* Bordure(s) dorée(s) arrondie(s) autour de chaque cible */}
            {boxes.map((b, i) => (
              <div
                key={i}
                className="tuto-highlight-box fixed pointer-events-none"
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
        className="tuto-bubble tuto-bubble-enter fixed overflow-hidden"
        style={{
          ...bubble,
          width: typeof window !== 'undefined' && window.innerWidth < 1024 ? Math.min(window.innerWidth - 24, 320) : 360,
          background: 'linear-gradient(135deg, #FFFCF6 0%, #FAF7F2 100%)',
          border: '1px solid rgba(184,150,46,0.32)',
          borderRadius: '18px',
          padding: '22px 22px 18px',
          zIndex: 1000,
          boxShadow: '0 14px 38px rgba(120,90,30,0.16), 0 3px 10px rgba(120,90,30,0.08), inset 0 1px 0 rgba(255,255,255,0.5)',
        }}
      >
        {/* Bandeau décoratif or en haut de la bulle */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(to right, transparent 0%, #C9A23A 25%, #B8962E 50%, #C9A23A 75%, transparent 100%)',
            opacity: 0.85,
          }}
        />
        {/* Bandeau décoratif or en bas (symétrie / signature manuscrit) */}
        <div
          aria-hidden="true"
          className="absolute"
          style={{
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(to right, transparent 0%, rgba(184,150,46,0.45) 30%, rgba(184,150,46,0.7) 50%, rgba(184,150,46,0.45) 70%, transparent 100%)',
            opacity: 0.8,
          }}
        />

        {/* Skip top-right — petit bouton arrondi élégant */}
        <button
          onClick={stop}
          className="tuto-quit-btn absolute inline-flex items-center gap-1 rounded-full"
          style={{
            top: '12px',
            right: '12px',
            padding: '4px 11px 4px 9px',
            background: 'transparent',
            border: '1px solid rgba(184,150,46,0.28)',
            color: '#8A7E72',
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
        <div className="mb-4 mt-3">
          <div className="flex items-center gap-1 mb-1.5">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className="tuto-step-dot rounded-full"
                style={{
                  width: i === step ? 20 : 5,
                  height: 4,
                  background: i === step
                    ? 'linear-gradient(to right, #C9A23A, #B8962E)'
                    : i < step ? 'rgba(184,150,46,0.45)' : 'rgba(184,150,46,0.18)',
                }}
              />
            ))}
          </div>
          <p
            className="italic"
            style={{
              color: '#8A7E72',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '11px',
              letterSpacing: '0.06em',
              margin: 0,
              lineHeight: 1,
            }}
          >
            Étape {step + 1} sur {STEPS.length}
          </p>
        </div>

        {/* Contenu animé — fade-in à chaque changement d'étape via key */}
        <div key={step} className="tuto-content-anim">
          <h3
            className="mb-2.5 flex items-baseline gap-2"
            style={{
              color: '#1A1410',
              fontSize: '17px',
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              letterSpacing: '0.01em',
              lineHeight: 1.25,
            }}
          >
            <span key={`star-${step}`} aria-hidden="true" className="tuto-title-star" style={{ color: '#B8962E', fontSize: '13px', flexShrink: 0 }}>✦</span>
            <span>{current.title}</span>
          </h3>
          <p style={{ color: '#5A4E42', fontSize: '12.5px', lineHeight: 1.6, margin: '0 0 16px 0' }}>
            {current.desc}
          </p>
        </div>

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
            className="tuto-prev-btn text-xs px-3 py-1 rounded-full"
            style={{
              border: '1px solid rgba(184,150,46,0.3)',
              color: step === 0 || navigating ? '#C8BCAD' : '#8A7428',
              cursor: step === 0 || navigating ? 'default' : 'pointer',
              background: 'transparent',
            }}
          >
            <span className="tuto-prev-arrow" aria-hidden="true">←</span> Précédent
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
              <>Terminer <span className="tuto-end-star" aria-hidden="true">✦</span></>
            ) : navigating ? (
              <span className="inline-flex items-center gap-1" aria-label="Chargement">
                <span className="tuto-dot" style={{ animationDelay: '0s' }} />
                <span className="tuto-dot" style={{ animationDelay: '0.18s' }} />
                <span className="tuto-dot" style={{ animationDelay: '0.36s' }} />
              </span>
            ) : (
              <>Suivant <span className="tuto-next-arrow" aria-hidden="true">→</span></>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
