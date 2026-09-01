'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useCallback, useRef, useMemo, useLayoutEffect } from 'react'
import SurahTranche, { TRANCHE_W, type RailSurah } from './SurahTranche'

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
  railSurahs?: RailSurah[]
  railAvailableIds?: number[]
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

// Hauteur exacte du renvoi de pied de page (ConclusionCue). Il est posé hors
// flux pour ne pas fausser les mesures, donc la pagination doit lui réserver
// cette bande explicitement : sans ça il se superpose au dernier verset et son
// dégradé le fait disparaître.
const CUE_H = 62

// Un titre emporte au moins ce nombre de lignes de son paragraphe ; c'est aussi
// le minimum laissé de chaque côté d'un paragraphe coupé (ni veuve ni orpheline).
const MIN_LINES_AFTER_HEADING = 2
// En deçà, une coupe ne vaut pas la peine : le fragment serait un moignon.
const MIN_SPLIT_CHARS = 40

// Tourne de page. La course est volontairement courte (18px) : c'est le fondu
// qui porte le changement, pas le déplacement. Le décalage entre la page de
// gauche et celle de droite évite que la double-page bouge d'un bloc rigide.
const TURN_OUT_MS = 180
const TURN_IN_MS = 300
const TURN_STAGGER_MS = 55
const TURN_SHIFT_PX = 18

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
  // Le numéro du premier point : la liste peut ne pas commencer à 1, et le
  // compteur CSS doit alors partir de là plutôt que de renuméroter d'office.
  let listStart = 1
  const flushList = () => {
    if (currentList && currentList.length) {
      blocks.push(
        `<ol style="counter-reset: conclusion-item ${listStart - 1}">` +
        currentList.map(li => `<li>${formatInline(li)}</li>`).join('') +
        `</ol>`
      )
      currentList = null
    }
  }
  for (const raw of lines) {
    const line = raw.trim()
    if (!line) {
      // Une ligne vide ferme un paragraphe mais PAS une liste : entre deux
      // points numérotés, elle ne fait qu'aérer (c'est une « liste ample » au
      // sens markdown). La fermer ici découpait « 1. 2. 3. » en trois listes
      // d'un seul élément, chacune repartant du compteur à 1.
      flushPara()
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
      if (!currentList) {
        currentList = []
        listStart = parseInt(listMatch[1], 10) || 1
      }
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

// Une case de page : l'index de l'item, plus — quand le paragraphe a été coupé
// entre deux pages — le fragment HTML à rendre à la place de l'item complet.
type Slot = { i: number; html?: string }

// Seuls les paragraphes de la conclusion se coupent entre deux pages. Les
// versets, les titres et les listes numérotées restent insécables : couper un
// verset en deux le rendrait incitable, et une liste coupée perd sa numérotation.
function isSplittable(item: PageItem | undefined): item is { type: 'conclusion-block'; html: string } {
  return !!item && item.type === 'conclusion-block' && /^\s*<(p|ol)[\s>]/i.test(item.html)
}

function isList(html: string): boolean {
  return /^\s*<ol[\s>]/i.test(html)
}

/* Coupe une liste numérotée entre deux points. Le compteur CSS de la suite est
   repositionné via counter-reset : sans ça, la fin de liste sur la page
   suivante repartirait de 1 — exactement le défaut qu'on vient de corriger sur
   la numérotation. */
function cutList(html: string, k: number): { head: string; tail: string } {
  const build = () => {
    const d = document.createElement('div')
    d.innerHTML = html
    return d.querySelector('ol') as HTMLOListElement | null
  }
  const a = build()
  const b = build()
  if (!a || !b) return { head: html, tail: '' }
  const m = (a.getAttribute('style') || '').match(/conclusion-item\s+(-?\d+)/)
  const base = m ? (parseInt(m[1], 10) || 0) : 0
  while (a.children.length > k && a.lastElementChild) a.removeChild(a.lastElementChild)
  for (let i = 0; i < k && b.firstElementChild; i++) b.removeChild(b.firstElementChild)
  b.setAttribute('style', `counter-reset: conclusion-item ${base + k}`)
  return { head: a.outerHTML, tail: b.outerHTML }
}

// line-height calculé en px, avec repli si le navigateur répond « normal »
function lineHeightOf(el: HTMLElement): number {
  const cs = window.getComputedStyle(el)
  const lh = parseFloat(cs.lineHeight)
  if (isFinite(lh) && lh > 0) return lh
  return (parseFloat(cs.fontSize) || 15) * 1.55
}

// Découpe un <p> à l'offset texte donné et rend le fragment demandé. Le Range
// se charge de refermer proprement les balises inline coupées en travers.
function cutParagraph(sourceP: HTMLElement, offset: number, part: 'head' | 'tail'): string {
  const clone = sourceP.cloneNode(true) as HTMLElement
  const texts: Text[] = []
  const walker = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT)
  let node: Node | null
  while ((node = walker.nextNode())) texts.push(node as Text)
  let rem = offset
  let target = texts[0]
  let off = 0
  for (const t of texts) {
    if (rem <= t.data.length) { target = t; off = rem; break }
    rem -= t.data.length
  }
  if (!target) return clone.outerHTML
  const range = document.createRange()
  range.selectNodeContents(clone)
  // on supprime la moitié qu'on ne garde PAS
  if (part === 'head') range.setStart(target, off)
  else range.setEnd(target, off)
  range.deleteContents()
  return clone.outerHTML
}

// Hauteur d'un fragment rendu dans le measurer, marges comprises — les marges
// sont ajoutées à la main car elles s'échappent du conteneur par collapse.
function measureHtml(measure: HTMLElement, html: string): number {
  const probe = document.createElement('div')
  probe.innerHTML = `<div class="bv-conclusion-block">${html}</div>`
  measure.appendChild(probe)
  try {
    const rect = probe.getBoundingClientRect()
    const p = probe.querySelector('p, ol')
    if (!p) return rect.height
    const cs = window.getComputedStyle(p)
    return rect.height + (parseFloat(cs.marginTop) || 0) + (parseFloat(cs.marginBottom) || 0)
  } finally {
    measure.removeChild(probe)
  }
}

export default function BookView({ surah, verses, pageSize, conclusion, railSurahs, railAvailableIds }: Props) {
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

  // Index du premier item de la conclusion (-1 si pas de conclusion)
  const concStart = useMemo(() => items.findIndex(it => it.type === 'conclusion-title'), [items])

  // Pagination state
  const [pages, setPages] = useState<Slot[][]>([])
  const [pageWidth, setPageWidth] = useState(0)
  const [pageHeight, setPageHeight] = useState(0)
  const [spread, setSpread] = useState(0)

  const bookBodyRef = useRef<HTMLDivElement | null>(null)
  const measureRef = useRef<HTMLDivElement | null>(null)
  const measurerHeightsRef = useRef<number[]>([])
  // journal des tentatives de coupe de paragraphe, lu par l'overlay ?debug=1
  const splitLogRef = useRef<string[]>([])

  const pagesPerSpread = isMobile ? 1 : 2
  const gap = isMobile ? 0 : 80

  // Debug overlay activable via ?debug=1
  const [debug, setDebug] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    setDebug(params.get('debug') === '1')
  }, [])

  // Mesure & distribution en pages
  useLayoutEffect(() => {
    const doMeasure = () => {
      const body = bookBodyRef.current
      const measure = measureRef.current
      if (!body || !measure || !measure.isConnected) return
      // book-body a un padding — clientWidth/Height inclut ce padding, mais
      // .bv-viewport (width/height 100%) résout contre le content-box du
      // parent, donc l'aire réellement visible = clientDim − padding.
      // Sans cette soustraction, les pages étaient calculées trop larges
      // et clippées à droite par le viewport, et trop hautes → dernières
      // lignes coupées en bas.
      const cs = window.getComputedStyle(body)
      const padL = parseFloat(cs.paddingLeft) || 0
      const padR = parseFloat(cs.paddingRight) || 0
      const padT = parseFloat(cs.paddingTop) || 0
      const padB = parseFloat(cs.paddingBottom) || 0
      const bodyW = body.clientWidth - padL - padR
      const bodyH = body.clientHeight - padT - padB
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
      measurerHeightsRef.current = heights
      // ═══ GARDE ANTI-TITRE ORPHELIN ═══
      // Un titre de section réserve la hauteur de SON BLOC SUIVANT EN ENTIER.
      // Pourquoi pas « les 2 premières lignes » : dans cette pagination un bloc
      // est atomique, il ne se coupe jamais en deux pages. Réserver 2 lignes ne
      // sert donc à rien — soit le paragraphe entier tient sous le titre, soit
      // il bascule tout entier à la page suivante en laissant le titre seul.
      // La seule garde qui tienne est donc : titre + paragraphe complet, ou
      // rien du tout (le titre part sur la page suivante avec son texte).
      // Note : heights[i] d'un titre inclut déjà l'écart jusqu'au haut du bloc
      // suivant (mesure top-to-top), donc on n'ajoute QUE le bloc lui-même.
      const orphanGuard: number[] = new Array(kids.length).fill(0)
      for (let i = 0; i < kids.length; i++) {
        const it = items[i]
        if (!it || it.type !== 'conclusion-block' || !/^\s*<h3/i.test(it.html)) continue
        const next = items[i + 1]
        const nextEl = kids[i + 1]
        if (!next || !nextEl) continue
        // Un paragraphe étant désormais sécable, le titre n'a besoin d'emporter
        // que ses premières lignes. Un bloc INsécable (liste numérotée) reste
        // tout ou rien : le titre doit alors réserver le bloc entier.
        if (isSplittable(next)) {
          const target = (nextEl.querySelector('p, li') as HTMLElement | null) || nextEl
          orphanGuard[i] = Math.min(lineHeightOf(target) * MIN_LINES_AFTER_HEADING, heights[i + 1] || 0)
        } else {
          orphanGuard[i] = heights[i + 1] || 0
        }
      }

      const splitLog: string[] = []

      // ═══ COUPE D'UN PARAGRAPHE ═══
      // Rend le candidat dans le measurer, cherche par dichotomie le plus long
      // préfixe qui tient dans `avail`, recule jusqu'à une frontière de mot,
      // puis découpe en deux fragments HTML valides. Les Range du DOM font le
      // travail délicat : `deleteContents` referme les balises inline (<strong>,
      // <em>) correctement des deux côtés de la coupe.
      const trySplit = (i: number, html: string | undefined, avail: number) => {
        // journal visible dans l'overlay ?debug=1 : une coupe qui échoue en
        // silence est indétectable à l'œil, on ne voit que le titre orphelin
        const bail = (why: string) => {
          splitLog.push(`#${i} ✗ ${why} (av ${Math.round(avail)})`)
          return null
        }
        const it = items[i]
        if (!it || !isSplittable(it)) return null
        const src = html ?? (it as { html: string }).html
        const probe = document.createElement('div')
        probe.innerHTML = `<div class="bv-conclusion-block">${src}</div>`
        measure.appendChild(probe)
        try {
          // ═══ LISTE NUMÉROTÉE ═══ elle se coupe entre deux points, jamais au
          // milieu d'un point : un « 2. » orphelin en haut de page n'aurait
          // aucun sens. Le compteur de la suite est repositionné par cutList.
          if (isList(src)) {
            const listEl = probe.querySelector('ol')
            const count = listEl ? listEl.children.length : 0
            if (count < 2) return bail('liste d’un seul point')
            const headAt = (k: number) => measureHtml(measure, cutList(src, k).head)
            let lo = 0
            let hi = count - 1
            while (lo < hi) {
              const mid = Math.ceil((lo + hi) / 2)
              if (headAt(mid) <= avail) lo = mid
              else hi = mid - 1
            }
            if (lo < 1) return bail('même le premier point ne tient pas')
            const { head, tail } = cutList(src, lo)
            const hH = measureHtml(measure, head)
            const tH = measureHtml(measure, tail)
            if (hH <= 0 || tH <= 0) return bail('fragment de liste vide')
            if (hH > avail) return bail('tête ' + Math.round(hH) + ' > place')
            splitLog.push('#' + i + ' OK liste ' + lo + '/' + count + ' h=' + Math.round(hH))
            return { headHtml: head, headH: hH, tailHtml: tail, tailH: tH }
          }

          const p = probe.querySelector('p') as HTMLElement | null
          if (!p) return bail('pas de <p>')
          const lh = lineHeightOf(p)
          const pcs = window.getComputedStyle(p)
          const mt = parseFloat(pcs.marginTop) || 0
          const mb = parseFloat(pcs.marginBottom) || 0
          if (avail - mt - mb < lh * MIN_LINES_AFTER_HEADING) return bail('place < 2 lignes')
          const texts: Text[] = []
          const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT)
          let node: Node | null
          while ((node = walker.nextNode())) texts.push(node as Text)
          const flat = texts.map(t => t.data).join('')
          const total = flat.length
          if (total < MIN_SPLIT_CHARS * 2) return bail('paragraphe trop court')

          // Frontières de mots. On ne mesure PAS avec la géométrie des Range :
          // dans le measurer (visibility: hidden) elle renvoie des rectangles
          // vides, la dichotomie concluait donc que tout tenait et la coupe
          // finissait au dernier mot, systématiquement rejetée juste après.
          // Chaque candidat est donc RENDU puis mesuré comme un élément —
          // la technique dont dépend déjà tout le reste du measurer.
          const bounds: number[] = []
          for (let k = 1; k < total; k++) {
            if (/\s/.test(flat[k]) && !/\s/.test(flat[k - 1])) bounds.push(k)
          }
          if (bounds.length < 2) return bail('pas de frontière de mot')
          const headAt = (off: number) => measureHtml(measure, cutParagraph(p, off, 'head'))
          let lo = -1
          let hi = bounds.length - 1
          while (lo < hi) {
            const mid = Math.ceil((lo + hi) / 2)
            if (headAt(bounds[mid]) <= avail) lo = mid
            else hi = mid - 1
          }
          if (lo < 0) return bail('même le premier mot ne tient pas')

          // La coupe maximale laisse parfois une veuve : une ou deux lignes
          // seules sur la page suivante. On RECULE alors mot à mot jusqu'à ce
          // que le reste atteigne ses deux lignes, au lieu de renoncer.
          // Renoncer coûtait bien plus cher : le paragraphe repartait entier et
          // laissait le titre orphelin avec toute la page vide sous lui — c'est
          // exactement ce qui se passait en mobile, où le paragraphe tient de
          // justesse et la coupe tombait donc à quelques mots de la fin.
          const minLines = lh * MIN_LINES_AFTER_HEADING
          const tailAt = (off: number) => measureHtml(measure, cutParagraph(p, off, 'tail'))
          let backoff = 0
          while (lo >= 0 && backoff++ < 400) {
            const c = bounds[lo]
            if (total - c >= MIN_SPLIT_CHARS && tailAt(c) - mt - mb >= minLines) break
            lo--
          }
          if (lo < 0) return bail('reste toujours trop court')

          const cut = bounds[lo]
          if (cut < MIN_SPLIT_CHARS) return bail('tête trop courte')
          const headHtml = cutParagraph(p, cut, 'head')
          const tailHtml = cutParagraph(p, cut, 'tail')
          const headH = measureHtml(measure, headHtml)
          const tailH = measureHtml(measure, tailHtml)
          if (headH - mt - mb < minLines) return bail('tête < 2 lignes')
          if (headH > avail) return bail('tête ' + Math.round(headH) + ' > place')
          splitLog.push('#' + i + ' OK ' + cut + '/' + total + ' h=' + Math.round(headH))
          return { headHtml, headH, tailHtml, tailH }
        } finally {
          measure.removeChild(probe)
        }
      }

      // Distribution : chaque page respecte bodyH ; un item qui ne rentre pas
      // passe à la page suivante — ou se coupe s'il s'agit d'un paragraphe.
      // File d'attente et non boucle `for` : couper un paragraphe réinjecte son
      // reste en tête de file, et ce reste peut se couper à son tour.
      const newPages: Slot[][] = []
      let cur: Slot[] = []
      let curH = 0
      const queue: { i: number; h: number; html?: string }[] = items.map((_, i) => ({ i, h: heights[i] || 0 }))
      let safety = 0
      while (queue.length > 0 && safety++ < 4000) {
        const slot = queue.shift()!
        const i = slot.i
        const h = slot.h
        const isTail = slot.html !== undefined
        // ═══ RÈGLE D'OUVERTURE DE LA CONCLUSION ═══
        // La conclusion ne doit jamais « boucher le trou » en bas d'une page
        // de gauche : le lecteur lit alors la fin de la sourate et l'ouverture
        // de la conclusion dans la même colonne, ce qui écrase la respiration.
        //  · sourate finissant à GAUCHE → on casse : la conclusion s'ouvre sur
        //    la page de droite, donc dans la MÊME double-page (rien n'est caché).
        //  · sourate finissant à DROITE → on laisse la conclusion démarrer là :
        //    son titre visible en bas de page est lui-même l'annonce qu'il y a
        //    une suite. Sauf si le titre y serait orphelin (pas la place pour
        //    lui + son premier bloc) : on casse, et un renvoi est posé en pied
        //    de page (cf. cuePage) pour que le lecteur ne croie pas que c'est fini.
        if (!isTail && i === concStart && cur.length > 0) {
          const landingPage = newPages.length
          const endsOnLeftPage = pagesPerSpread === 2 && landingPage % 2 === 0
          // titre + premier bloc + ce que ce bloc réclame à son tour : sans le
          // report du garde, on posait le titre décoratif seul en bas de page
          // et son premier sous-titre basculait — un orphelin de plus.
          const needed = h + (heights[i + 1] || 0) + (orphanGuard[i + 1] || 0)
          if (endsOnLeftPage || bodyH - curH < needed) {
            newPages.push(cur)
            cur = []
            curH = 0
          }
        }
        // Un titre réserve en plus les premières lignes de son paragraphe :
        // s'il n'y a pas la place pour les deux, on casse AVANT le titre.
        let need = h + (isTail ? 0 : orphanGuard[i] || 0)
        // Le dernier item de la sourate réserve la bande du renvoi de pied de
        // page. On réserve sans condition (même si le renvoi ne s'affiche
        // finalement pas) : savoir s'il sera nécessaire suppose de connaître
        // la page d'atterrissage de la conclusion, qui dépend elle-même de
        // cette page — circulaire. Et une sourate qui ne finit pas collée au
        // bord de la page, c'est de toute façon mieux.
        if (!isTail && concStart > 0 && i === concStart - 1) need += CUE_H

        if (curH + need > bodyH) {
          // 1) remplir le bas de page en coupant le paragraphe
          const cut = trySplit(i, slot.html, bodyH - curH)
          if (cut) {
            cur.push({ i, html: cut.headHtml })
            newPages.push(cur)
            cur = []
            curH = 0
            queue.unshift({ i, h: cut.tailH, html: cut.tailHtml })
            continue
          }
          // 2) sinon page suivante, et on retente : sur une page vierge le
          //    bloc pourra peut-être se couper là où il ne pouvait pas ici
          if (cur.length > 0) {
            newPages.push(cur)
            cur = []
            curH = 0
            queue.unshift(slot)
            continue
          }
          // 3) page vierge et toujours pas sécable : on le pose tel quel
        }
        cur.push(isTail ? { i, html: slot.html } : { i })
        curH += h
      }
      if (cur.length > 0) newPages.push(cur)
      setPages(prev => {
        // Éviter update si égal (limite les re-renders)
        if (prev.length === newPages.length && prev.every((p, i) => p.length === newPages[i].length && p.every((s, j) => s.i === newPages[i][j].i && s.html === newPages[i][j].html))) {
          return prev
        }
        return newPages
      })
      splitLogRef.current = splitLog
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
    // ResizeObserver sur le book-body : capture tout changement de taille
    // (DevTools ouvert/fermé, split screen, etc.) que window resize peut
    // rater.
    let ro: ResizeObserver | null = null
    if (typeof ResizeObserver !== 'undefined' && bookBodyRef.current) {
      ro = new ResizeObserver(() => doMeasure())
      ro.observe(bookBodyRef.current)
    }
    return () => {
      window.clearInterval(interval)
      window.clearTimeout(stopTimeout)
      window.removeEventListener('resize', onResize)
      ro?.disconnect()
    }
  }, [items, concStart, isMobile, bvOpts.arabic, bvOpts.phon, pagesPerSpread, gap])

  // Page portant le renvoi « la conclusion suit ». On ne l'affiche que si la
  // conclusion démarre sur une double-page que le lecteur ne voit PAS encore :
  // sinon (conclusion ouverte sur la page de droite d'en face) le renvoi ferait
  // doublon avec le titre déjà sous les yeux.
  const cuePage = useMemo(() => {
    if (concStart < 0 || pages.length === 0) return null
    const pageOf = (idx: number) => pages.findIndex(p => p.some(s => s.i === idx))
    const concPage = pageOf(concStart)
    const lastBodyPage = pageOf(concStart - 1)
    if (concPage < 0 || lastBodyPage < 0) return null
    if (Math.floor(concPage / pagesPerSpread) === Math.floor(lastBodyPage / pagesPerSpread)) return null
    return lastBodyPage
  }, [pages, concStart, pagesPerSpread])

  // Nav
  const totalSpreads = Math.max(1, Math.ceil(pages.length / pagesPerSpread))
  const canPrev = spread > 0
  const canNext = spread < totalSpreads - 1
  // ═══ TOURNE DE PAGE ═══
  // Trois phases plutôt qu'un long glissement : la double-page s'efface d'un
  // côté (out), le ruban saute à sa nouvelle position pendant qu'elle est
  // invisible (in), puis elle se repose (rest). L'ancien translateX de 780ms
  // sur toute la largeur se lisait comme un carrousel — on voyait le livre
  // bouger au lieu de voir la page arriver.
  const [turn, setTurn] = useState<{ phase: 'rest' | 'out' | 'in'; dir: 1 | -1 }>({ phase: 'in', dir: 1 })
  const turnTimer = useRef<number | null>(null)
  const router = useRouter()
  const enteredRef = useRef(false)

  // Entree : le livre se pose a l'arrivee, exactement comme une page qui tourne.
  // On attend que la pagination ait produit ses pages, sinon la transition se
  // jouerait sur un livre encore vide et on ne verrait rien.
  useEffect(() => {
    if (enteredRef.current || pages.length === 0) return
    enteredRef.current = true
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setTurn({ phase: 'rest', dir: 1 }); return }
    requestAnimationFrame(() => requestAnimationFrame(() => setTurn(t => ({ phase: 'rest', dir: t.dir }))))
  }, [pages.length])

  // Filet de sécurité : la phase d'entrée pose les pages à opacité 0. Si la
  // mesure ne produisait jamais de pages, le livre resterait invisible — on
  // force donc l'état de repos passé un délai, quoi qu'il arrive.
  useEffect(() => {
    const t = window.setTimeout(() => {
      if (enteredRef.current) return
      enteredRef.current = true
      setTurn(cur => ({ phase: 'rest', dir: cur.dir }))
    }, 1500)
    return () => window.clearTimeout(t)
  }, [])

  // Sortie vers une autre sourate : on joue la meme phase « out » que pour une
  // page, PUIS on navigue. Sans ca le changement de sourate etait un a-coup au
  // milieu d'une vue par ailleurs entierement animee.
  // Depart vers une autre sourate : la page actuelle passe au flou et y reste
  // tant que le serveur n'a pas repondu. En App Router l'ancienne page demeure
  // montee pendant ce temps — la faire disparaitre donnait du blanc, la flouter
  // dit « ca change » sans rien demander a lire.
  const [leaving, setLeaving] = useState(false)
  const leaveTo = useCallback((href: string) => {
    if (leaving) return
    setLeaving(true)
    router.push(href)
  }, [router, leaving])

  const go = useCallback((dir: 1 | -1) => {
    if (turnTimer.current !== null) return // tourne déjà en cours
    const reduce = typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setSpread(s => Math.max(0, s + dir))
      return
    }
    setTurn({ phase: 'out', dir })
    turnTimer.current = window.setTimeout(() => {
      setSpread(s => Math.max(0, s + dir))
      setTurn({ phase: 'in', dir })
      // une frame sans transition pour poser la page entrante hors champ,
      // puis on relâche vers l'état de repos
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setTurn({ phase: 'rest', dir })
        turnTimer.current = null
      }))
    }, TURN_OUT_MS + TURN_STAGGER_MS)
  }, [])

  const goPrev = useCallback(() => { if (spread > 0) go(-1) }, [go, spread])
  const goNext = useCallback(() => { if (spread < totalSpreads - 1) go(1) }, [go, spread, totalSpreads])

  useEffect(() => () => { if (turnTimer.current !== null) window.clearTimeout(turnTimer.current) }, [])

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
  const hasRail = !!(railSurahs && railSurahs.length > 0)

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
            // La réglette des sourates se loge sous le livre : on lui réserve
            // sa hauteur ici, sinon elle tombe sous la ligne de flottaison et
            // ne sert à rien. Sans réglette, on garde les valeurs d'origine.
            height: isMobile
              ? 'min(720px, calc(100vh - 160px))'
              : 'min(820px, calc(100vh - 110px))',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {!isMobile && (
            <div aria-hidden className="bv-spine" />
          )}


          {/* ═════ ZONE PAGE : contient measurer offscreen + viewport visible ═════ */}
          <div
            ref={bookBodyRef}
            className={`book-body${leaving ? ' is-leaving' : ''}`}
            style={{
              position: 'relative',
              zIndex: 2,
              // la gouttiere droite s'elargit de la tranche : la mesure de
              // pagination deduit deja les paddings, donc les pages se
              // retrecissent seules et rien ne passe sous les onglets
              padding: isMobile
                ? `12px ${12 + (hasRail ? TRANCHE_W : 0)}px 16px 12px`
                : `20px ${40 + (hasRail ? TRANCHE_W : 0)}px 20px 40px`,
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

            {/* Chapelet des sourates : DANS book-body, donc il s'arrete de
                lui-meme au-dessus du pied de page */}
            {hasRail && (
              <SurahTranche
                surahs={railSurahs!}
                availableIds={railAvailableIds ?? []}
                currentId={surah.id}
                onNavigate={leaveTo}
              />
            )}

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
                  // le ruban ne s'anime plus : il saute à sa position pendant
                  // que les pages sont invisibles (phase « in »)
                  transform: pageWidth > 0
                    ? `translateX(-${spread * spreadShift}px)`
                    : 'none',
                }}
              >
                {pages.map((pageSlots, pIdx) => (
                  <div
                    key={pIdx}
                    className="bv-page-col"
                    style={{
                      ...turnStyle(turn, pIdx % pagesPerSpread),
                      width: pageWidth,
                      flex: '0 0 auto',
                      height: '100%',
                      // ancre le renvoi « la conclusion suit » en pied de page
                      position: 'relative',
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
                    {pageSlots.map((slot, ci) => (
                      // Wrapper div IDENTIQUE au measurer → même margin
                      // collapse, mêmes hauteurs mesurées = hauteurs réelles.
                      <div key={`${slot.i}-${ci}`}>
                        {renderItem(
                          // fragment de paragraphe coupé, sinon l'item entier
                          slot.html !== undefined
                            ? { type: 'conclusion-block', html: slot.html }
                            : items[slot.i],
                          surah,
                          pageForVerse,
                          isBaraah,
                        )}
                      </div>
                    ))}
                    {cuePage === pIdx && <ConclusionCue />}
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
                style={{ ...arrowStyle(!canPrev), ["--chev-dir" as string]: "-2px" }}
              >
                <Chevron dir="left" />
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', fontStyle: 'italic', color: GOLD_DEEP, letterSpacing: '0.2em' }}>
              <span className="font-arabic" style={{ fontSize: '14px', color: GOLD_DEEP, fontStyle: 'normal', letterSpacing: '0.02em' }}>
                {surah.name_ar}
              </span>
              <span style={{ fontSize: '13px' }}>
                {spread + 1} / {totalSpreads}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'flex-end' }}>
              <button
                onClick={goNext}
                disabled={!canNext}
                className="page-arrow"
                aria-label="Page suivante"
                style={{ ...arrowStyle(!canNext), ["--chev-dir" as string]: "2px" }}
              >
                <Chevron dir="right" />
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
        /* ═══ PHONÉTIQUE ═══
           Elle n'est ni du texte ni de la traduction : c'est un appareil de
           lecture. Elle doit donc se lire comme tel — rattachée à l'arabe
           au-dessus, distincte du français en dessous.

           · Droite et non italique. L'italique était le pire choix pour une
             translittération : les macrons et les points souscrits (ā, ḥ, ṣ,
             ṭ) se bousculent avec l'inclinaison et deviennent illisibles.
           · Interlettrage ouvert : c'est ce qui donne à une ligne sa texture
             de guide de prononciation plutôt que de prose.
           · Brun doré plutôt que gris, pour la raccrocher à l'arabe.
           · Posée sur une plaque à peine teintée, centrée et ajustée au texte :
             l'arabe et sa prononciation forment un bloc « source », le français
             reste seul en drapeau à gauche. */
        .bv-phon-block {
          display: none;
          width: fit-content;
          max-width: 100%;
          margin: 3px auto 8px;
          padding: 3px 13px;
          border-radius: 999px;
          background: rgba(184,150,46,0.055);
          text-align: center;
          font-size: 12.5px;
          line-height: 1.5;
          color: #8A7647;
          font-style: normal;
          font-weight: 500;
          letter-spacing: 0.06em;
          word-spacing: 0.09em;
        }
        body.bv-show-phon .bv-phon-block {
          display: block;
        }
        .bv-fr-block {
          display: block;
        }
        /* ═══ FOND DE CAHIER ═══
           Un seul dégradé symétrique donnait une tache floue. Une vraie pliure
           se compose de trois couches superposées, de la plus proche à la plus
           lointaine : le fil de pliure, les rehauts, puis le creux. */
        .bv-spine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 72px;
          pointer-events: none;
          z-index: 1;
          background:
            /* 1. le fil de pliure : une hairline nette, c'est elle qui donne
                  l'arête. Sans elle le centre reste mou. */
            linear-gradient(90deg,
              transparent calc(50% - 0.5px),
              rgba(110,80,25,0.34) calc(50% - 0.5px),
              rgba(110,80,25,0.34) calc(50% + 0.5px),
              transparent calc(50% + 0.5px)),
            /* 2. les rehauts : de part et d'autre du pli, le papier remonte
                  vers la lumière. C'est ce liseré clair qui fait lire « papier
                  plié » plutôt que « ombre posée ». */
            linear-gradient(90deg,
              transparent 26%,
              rgba(255,253,247,0.85) 40%,
              rgba(255,253,247,0.15) 47%,
              transparent 50%,
              rgba(255,253,247,0.15) 53%,
              rgba(255,253,247,0.85) 60%,
              transparent 74%),
            /* 3. le creux : assombrissement resserré près du centre et très
                  étalé vers l'extérieur — la courbure du papier n'est pas
                  linéaire, l'ancien dégradé la traitait comme telle. */
            linear-gradient(90deg,
              rgba(110,80,25,0) 0%,
              rgba(110,80,25,0.035) 30%,
              rgba(110,80,25,0.10) 43%,
              rgba(110,80,25,0.19) 50%,
              rgba(110,80,25,0.10) 57%,
              rgba(110,80,25,0.035) 70%,
              rgba(110,80,25,0) 100%);
          /* la pliure s'estompe en tête et en pied, comme sur un livre ouvert
             où les bords du cahier s'écartent */
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 4%, #000 95%, transparent 100%);
          mask-image: linear-gradient(180deg, transparent 0%, #000 4%, #000 95%, transparent 100%);
        }
        /* Départ vers une autre sourate : le livre s'estompe au lieu de
           disparaître. Pas de message — à 300ms de navigation, personne n'a le
           temps de le lire, et un panneau qui clignote fait plus lent que le
           flou. La transition est plus lente en sortie (420ms) qu'un fondu :
           on doit sentir que ça part, pas que ça s'éteint. */
        .book-body {
          transition: filter 420ms ease, opacity 420ms ease;
        }
        .book-body.is-leaving {
          filter: blur(5px) saturate(0.9);
          opacity: 0.5;
          pointer-events: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .book-body { transition: opacity 150ms ease; }
          .book-body.is-leaving { filter: none; opacity: 0.5; }
        }

        .verse-marker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 24px;
          height: 24px;
          padding: 0 7px;
          border-radius: 999px;
          /* bague creuse : sans fond, la pastille se lit comme un renvoi
             imprimé et non comme un badge d'interface */
          background: transparent;
          border: 1px solid rgba(184,150,46,0.42);
          color: ${GOLD_DEEP};
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          font-weight: 700;
          /* les chiffres de Cormorant sont elzéviriens (ils montent et
             descendent) : dans un cercle il faut des chiffres bâtons de
             largeur fixe, sinon le centrage optique part de travers */
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: 'lnum' 1, 'tnum' 1;
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
        /* Chevron SVG plutôt que les caractères ← →, qui sont des glyphes de
           texte : ni l'épaisseur ni le centrage d'un vrai pictogramme. */
        .page-arrow svg {
          transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease;
        }
        .page-arrow:not(:disabled):hover svg {
          /* le chevron glisse dans son sens : on sent où on va */
          transform: translateX(var(--chev-dir, 2px));
        }
        .page-arrow:disabled {
          /* on n'éteint QUE le chevron : une bague à 35% donnait un bouton
             qui semblait cassé plutôt que désactivé */
          opacity: 1;
        }
        .page-arrow:disabled svg {
          opacity: 0.3;
        }
        @media (prefers-reduced-motion: reduce) {
          .bv-page-col, .page-arrow, .page-arrow svg, .verse-marker {
            transition: none !important;
          }
        }
        /* Conclusion styles — chaque bloc est atomique dans notre pagination.
           On laisse le browser wrap naturellement aux espaces. Aucun
           overflow: hidden ni word-break: break-word (qui cachait/coupait
           du contenu de manière imprévisible). */
        .bv-conclusion-block, .bv-conclusion-block * {
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
            font-size: 9.5px !important;
            margin: 2px auto 5px !important;
            padding: 2px 9px !important;
            letter-spacing: 0.045em !important;
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
      {debug && (
        <DebugOverlay
          measurerHeightsRef={measurerHeightsRef}
          splitLogRef={splitLogRef}
          pages={pages}
          spread={spread}
          pagesPerSpread={pagesPerSpread}
          pageHeight={pageHeight}
          pageWidth={pageWidth}
        />
      )}
    </div>
  )
}

function DebugOverlay({
  measurerHeightsRef,
  splitLogRef,
  pages,
  spread,
  pagesPerSpread,
  pageHeight,
  pageWidth,
}: {
  measurerHeightsRef: React.MutableRefObject<number[]>
  splitLogRef: React.MutableRefObject<string[]>
  pages: Slot[][]
  spread: number
  pagesPerSpread: number
  pageHeight: number
  pageWidth: number
}) {
  const [, setTick] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => setTick(t => t + 1), 500)
    return () => window.clearInterval(id)
  }, [])

  type KidData = { i: number; measured: number; rendered: number; diff: number; overflowH: boolean }
  type ColData = { clientH: number; scrollH: number; overflowV: number; clientW: number; scrollW: number; overflowH: number; kids: KidData[] }
  const cols: ColData[] = []

  if (typeof document !== 'undefined') {
    const nodes = document.querySelectorAll('.bv-page-col')
    nodes.forEach((col, pIdx) => {
      const el = col as HTMLElement
      const clientH = el.clientHeight
      const scrollH = el.scrollHeight
      const clientW = el.clientWidth
      const scrollW = el.scrollWidth
      const kids = Array.from(el.children) as HTMLElement[]
      const pageSlots = pages[pIdx] || []
      // slice : le renvoi ConclusionCue est un enfant en plus, hors pagination
      const kidData: KidData[] = kids.slice(0, pageSlots.length).map((k, ci) => {
        const itemIdx = pageSlots[ci].i
        // un fragment de paragraphe coupé n'a pas de hauteur dans le measurer
        // global : Δ non significatif, on affiche 0
        const measured = pageSlots[ci].html !== undefined ? 0 : (measurerHeightsRef.current[itemIdx] || 0)
        const cs = getComputedStyle(k)
        const rendered = k.offsetHeight + parseFloat(cs.marginBottom || '0') + parseFloat(cs.marginTop || '0')
        // Check horizontal overflow ON ANY child of this wrapper (paragraphs, headings...)
        let overflowH = false
        const inner = k.querySelectorAll('*')
        inner.forEach(node => {
          const n = node as HTMLElement
          if (n.scrollWidth - n.clientWidth > 1) overflowH = true
        })
        return {
          i: itemIdx,
          measured: Math.round(measured),
          rendered: Math.round(rendered),
          diff: Math.round(rendered - measured),
          overflowH,
        }
      })
      cols.push({
        clientH,
        scrollH,
        overflowV: scrollH - clientH,
        clientW,
        scrollW,
        overflowH: scrollW - clientW,
        kids: kidData,
      })
    })
  }

  const anyOverflowV = cols.some(c => c.overflowV > 1)
  const anyOverflowH = cols.some(c => c.overflowH > 1 || c.kids.some(k => k.overflowH))
  const anyBigDiff = cols.some(c => c.kids.some(k => Math.abs(k.diff) > 1))

  return (
    <div style={{
      position: 'fixed',
      bottom: 8,
      right: 8,
      zIndex: 9999,
      background: 'rgba(0,0,0,0.88)',
      color: '#0f0',
      fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
      fontSize: '10px',
      padding: '10px 12px',
      borderRadius: '6px',
      maxHeight: '60vh',
      overflowY: 'auto',
      maxWidth: '400px',
      minWidth: '260px',
      lineHeight: 1.45,
      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    }}>
      <div style={{ color: '#ff0', marginBottom: 6, fontWeight: 700 }}>
        DEBUG · pageW={Math.round(pageWidth)} · pageH={Math.round(pageHeight)}
      </div>
      <div style={{ marginBottom: 6, color: "#9cf" }}>
        coupes : {splitLogRef.current.length === 0 ? "aucune tentative" : ""}
        {splitLogRef.current.map((l, k) => (
          <div key={k} style={{ marginLeft: 6, color: l.includes(" OK ") ? "#8f8" : "#f96" }}>{l}</div>
        ))}
      </div>
      <div style={{ marginBottom: 6 }}>
        spread {spread + 1}/{Math.max(1, Math.ceil(pages.length / pagesPerSpread))} · {pages.length} pages · {pagesPerSpread}/spread
      </div>
      <div style={{ marginBottom: 6 }}>
        <span style={{ color: anyOverflowV ? '#f66' : '#8f8' }}>V:{anyOverflowV ? 'OVF' : 'ok'}</span>{' '}
        <span style={{ color: anyOverflowH ? '#f66' : '#8f8' }}>H:{anyOverflowH ? 'OVF' : 'ok'}</span>{' '}
        <span style={{ color: anyBigDiff ? '#fc6' : '#8f8' }}>Δ:{anyBigDiff ? 'MISMATCH' : 'ok'}</span>
      </div>
      {cols.map((d, pIdx) => {
        const inCurrentSpread = pIdx >= spread * pagesPerSpread && pIdx < (spread + 1) * pagesPerSpread
        return (
          <div key={pIdx} style={{
            marginTop: 6,
            paddingTop: 4,
            borderTop: '1px dashed #444',
            opacity: inCurrentSpread ? 1 : 0.45,
          }}>
            <div style={{ color: d.overflowV > 1 ? '#f66' : '#0f0' }}>
              p{pIdx} · cH={d.clientH} sH={d.scrollH}{d.overflowV > 1 ? ` V+${d.overflowV}` : ''}{d.overflowH > 1 ? ` H+${d.overflowH}` : ''}
            </div>
            {d.kids.map((k, ci) => {
              const bigDiff = Math.abs(k.diff) > 1
              return (
                <div key={ci} style={{ color: k.overflowH ? '#f66' : (bigDiff ? '#fc6' : '#8f8'), marginLeft: 8 }}>
                  #{k.i} m={k.measured} r={k.rendered} Δ={k.diff > 0 ? '+' : ''}{k.diff}{k.overflowH ? ' Hovf' : ''}
                </div>
              )
            })}
          </div>
        )
      })}
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
      <div style={{ padding: '4px 0 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
          <span style={{ flex: '0 0 60px', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.5 }} />
          <span aria-hidden style={{ color: GOLD, fontSize: '10px' }}>✦</span>
          <span style={{ flex: '0 0 60px', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.5 }} />
        </div>
      </div>
    </>
  )
}

/* Renvoi de pied de page — la « réclame » des livres anciens.
   Posé en absolu (hors flux) pour ne pas fausser les hauteurs mesurées — sa
   bande est donc réservée explicitement par la pagination (CUE_H), sinon il
   recouvre le dernier verset et l'efface. Il n'apparaît que quand la
   conclusion s'ouvre sur une double-page encore invisible — sans lui, le
   lecteur voit la sourate se terminer en bas d'une page de droite et croit
   avoir fini le livre. */
function ConclusionCue() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        // hauteur FIGÉE = celle que la pagination réserve (CUE_H). Toute
        // dérive ici et le renvoi remordrait sur le texte.
        height: `${CUE_H}px`,
        boxSizing: 'border-box',
        paddingBottom: '2px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        textAlign: 'center',
        pointerEvents: 'none',
        // filet de sécurité : si le texte débordait malgré la réservation, il
        // s'efface derrière le papier au lieu de se chevaucher avec le renvoi
        background: `linear-gradient(to bottom, rgba(255,251,240,0) 0%, ${CREAM_PAGE} 42%, ${CREAM_PAGE} 100%)`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '5px' }}>
        <span style={{ flex: '1 1 auto', maxWidth: '70px', height: '1px', background: `linear-gradient(to right, transparent, ${GOLD})`, opacity: 0.55 }} />
        <span style={{ color: GOLD, fontSize: '11px', opacity: 0.85 }}>✦</span>
        <span style={{ flex: '1 1 auto', maxWidth: '70px', height: '1px', background: `linear-gradient(to left, transparent, ${GOLD})`, opacity: 0.55 }} />
      </div>
      <div style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, fontWeight: 700 }}>
        Conclusion
      </div>
      <div style={{ fontSize: '12px', fontStyle: 'italic', color: MUTED, marginTop: '2px', letterSpacing: '0.02em' }}>
        page suivante
      </div>
    </div>
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

/* Chevron dessiné : trait fin, extrémités arrondies, il hérite de la couleur
   du bouton (`currentColor`) donc il vire au crème quand la bague se remplit. */
function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      {dir === 'left' ? <path d="M14.5 5.5 8 12l6.5 6.5" /> : <path d="M9.5 5.5 16 12l-6.5 6.5" />}
    </svg>
  )
}

/* État visuel d'une page pendant la tourne. `slot` est sa position dans la
   double-page (0 = gauche, 1 = droite) et sert à décaler son départ : le papier
   ne bouge pas d'un bloc. Le léger scale donne de la profondeur sans rotation
   3D — la piste « page qui pivote » avait été écartée, elle fait daté. */
function turnStyle(
  turn: { phase: 'rest' | 'out' | 'in'; dir: 1 | -1 },
  slot: number,
): React.CSSProperties {
  const delay = `${slot * TURN_STAGGER_MS}ms`
  if (turn.phase === 'rest') {
    return {
      opacity: 1,
      transform: 'none',
      transition: `opacity ${TURN_IN_MS}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${TURN_IN_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      transitionDelay: delay,
      willChange: 'opacity, transform',
    }
  }
  // la sortante s'efface dans le sens de lecture, l'entrante arrive de l'autre
  const shift = (turn.phase === 'out' ? -turn.dir : turn.dir) * TURN_SHIFT_PX
  return {
    opacity: 0,
    transform: `translateX(${shift}px) scale(0.988)`,
    // phase « in » : placement instantané, la page est invisible à ce moment
    transition: turn.phase === 'in' ? 'none' : `opacity ${TURN_OUT_MS}ms ease-in, transform ${TURN_OUT_MS}ms ease-in`,
    transitionDelay: turn.phase === 'in' ? '0ms' : delay,
    willChange: 'opacity, transform',
  }
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
    cursor: disabled ? 'not-allowed' : 'pointer',
    // pas d'opacité globale ici : l'état désactivé n'éteint que le chevron
    // (voir .page-arrow:disabled svg), la bague reste nette
    transition: 'background 200ms ease, transform 200ms ease, border-color 200ms ease',
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
