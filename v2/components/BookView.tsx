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
  // Optionnels : la page passe la ligne entière, mais l'en-tête doit rester
  // affichable si l'un des deux manque.
  verse_count?: number
  revelation?: string
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

// Se coupent entre deux pages : les paragraphes de la conclusion, et ses
// listes numérotées entre deux points (cf. cutList, qui repositionne le
// compteur sur la suite). Restent insécables : les versets — couper un verset
// en deux le rendrait incitable — et les titres.
function isSplittable(item: PageItem | undefined): item is { type: 'conclusion-block'; html: string } {
  return !!item && item.type === 'conclusion-block' && /^\s*<(p|ol)[\s>]/i.test(item.html)
}

function isList(html: string): boolean {
  return /^\s*<ol[\s>]/i.test(html)
}

// Un item qui n'annonce que ce qui le suit : seul en pied de page il ne dit
// rien. Sert à le faire redescendre avec son texte quand la garde a échoué.
function isHeadingItem(it: PageItem | undefined): boolean {
  if (!it) return false
  if (it.type === 'conclusion-title') return true
  return it.type === 'conclusion-block' && /^\s*<h3[\s>]/i.test(it.html)
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
  // L'écart entre pages du ruban. Sur mobile il ne sert pas à aérer — une
  // seule page est visible — mais à ABSORBER la course de la tourne : tout le
  // ruban glisse de TURN_SHIFT_PX, donc à écart nul la page suivante entrait
  // de 18 px dans le champ avant d'avoir fini de s'effacer, et on apercevait
  // le bord de ses lignes à droite. Il doit rester supérieur à cette course.
  const gap = isMobile ? TURN_SHIFT_PX + 10 : 80

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
          // Les marges du paragraphe comptent dans la réserve : la coupe les
          // soustrait de la place disponible AVANT de vérifier qu'il reste
          // deux lignes (cf. trySplit). Une garde qui ne réserve que les
          // lignes laisse donc le titre orphelin de la valeur des marges —
          // 8 px en mobile, assez pour faire refuser la coupe de justesse.
          const tcs = window.getComputedStyle(target)
          const tm = (parseFloat(tcs.marginTop) || 0) + (parseFloat(tcs.marginBottom) || 0)
          orphanGuard[i] = Math.min(lineHeightOf(target) * MIN_LINES_AFTER_HEADING + tm, heights[i + 1] || 0)
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
          //    bloc pourra peut-être se couper là où il ne pouvait pas ici.
          //    Les titres posés juste avant redescendent AVEC lui : la garde
          //    anti-orphelin prédit la place à partir des mesures, et il
          //    suffit de deux pixels de dérive pour que la coupe soit refusée
          //    ici alors que la garde l'avait crue possible — le titre restait
          //    alors seul en pied de page. Le rattrapage garantit la règle au
          //    lieu de la prédire.
          if (cur.length > 0) {
            const carried: Slot[] = []
            while (cur.length > 1) {
              const last = cur[cur.length - 1]
              // un fragment déjà coupé n'est pas un titre : il reste en place
              if (last.html !== undefined || !isHeadingItem(items[last.i])) break
              carried.unshift(cur.pop()!)
            }
            newPages.push(cur)
            cur = []
            curH = 0
            queue.unshift(slot)
            for (let k = carried.length - 1; k >= 0; k--) {
              queue.unshift({ i: carried[k].i, h: heights[carried[k].i] || 0 })
            }
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

  /* La sourate suivante QUI EXISTE : les non traduites sont sautées, y aller
     ne mènerait qu'à « Aucun signe traduit ». railSurahs arrive trié par id,
     donc le premier trouvé est le bon. Sert au bout de la dernière page, où
     la flèche « suivant » n'avait plus rien à faire et laissait le lecteur
     dans un cul-de-sac. */
  const nextSurah = useMemo(() => {
    if (!railSurahs || !railAvailableIds) return null
    const dispo = new Set(railAvailableIds)
    return railSurahs.find(s => s.id > surah.id && dispo.has(s.id)) ?? null
  }, [railSurahs, railAvailableIds, surah.id])
  /* ═══ LA TRANCHE SUR MOBILE ═══
     Elle reste visible en permanence — sinon rien ne dit qu'elle existe — mais
     réduite à un liséré au lieu des 38 px du desktop : on voit les perles, on
     sait qu'on peut les toucher. Au doigt elle s'élargit pour qu'on puisse
     viser, lire les numéros et faire défiler, puis se rétracte seule.

     L'élargissement se fait PAR-DESSUS le texte (l'hôte est en position
     absolue, ancré à droite) : seul le liséré est réservé dans la gouttière,
     donc la pagination n'est jamais recalculée en cours de geste. */
  // Encre visible au repos, et zone tactile qui la déborde vers la gauche.
  // Les deux nourrissent le CSS plus bas : sans ça le retrait du contenu
  // (RAIL_TOUCH − RAIL_SLIVER) dérive dès qu'on retouche l'une des valeurs.
  const RAIL_SLIVER = 20
  const RAIL_TOUCH = 44
  const RAIL_OPEN = 50
  const [railOpen, setRailOpen] = useState(false)
  // Le lueur qui parcourt le liséré ne se déclenche que pour qui n'a jamais
  // ouvert la tranche. Vrai par défaut : rien ne scintille pendant le rendu
  // serveur ni l'hydratation, l'effet ne démarre qu'une fois monté.
  const [railUsed, setRailUsed] = useState(true)
  useEffect(() => {
    try { setRailUsed(window.localStorage.getItem('bv-tranche-vue') === '1') }
    catch { setRailUsed(false) }
  }, [])
  const markRailUsed = useCallback(() => {
    setRailUsed(true)
    try { window.localStorage.setItem('bv-tranche-vue', '1') } catch { /* navigation privée */ }
  }, [])
  const railTimer = useRef<number | null>(null)
  // Le premier contact ne fait qu'ouvrir. Sans ça, poser le doigt sur un
  // liséré de 15 px pour l'agrandir revenait à choisir la sourate qui se
  // trouvait dessous — on naviguait en voulant seulement regarder.
  const railWasClosed = useRef(false)
  const railMoved = useRef(false)
  const railStartY = useRef(0)
  const armRailTimer = useCallback(() => {
    if (railTimer.current !== null) window.clearTimeout(railTimer.current)
    railTimer.current = window.setTimeout(() => setRailOpen(false), 2400)
  }, [])
  const onRailTouchStart = useCallback((e: React.TouchEvent) => {
    railWasClosed.current = !railOpen
    railMoved.current = false
    railStartY.current = e.touches[0].clientY
    setRailOpen(true)
    markRailUsed()
    armRailTimer()
  }, [railOpen, armRailTimer, markRailUsed])
  const onRailTouchMove = useCallback((e: React.TouchEvent) => {
    // au-delà de 8 px c'est un défilement, pas un choix de sourate
    if (Math.abs(e.touches[0].clientY - railStartY.current) > 8) railMoved.current = true
    armRailTimer()
  }, [armRailTimer])
  const onRailClickCapture = useCallback((e: React.MouseEvent) => {
    if (!isMobile) return
    if (railWasClosed.current || railMoved.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }, [isMobile])
  useEffect(() => {
    if (!isMobile) setRailOpen(false)
  }, [isMobile])
  useEffect(() => () => {
    if (railTimer.current !== null) window.clearTimeout(railTimer.current)
  }, [])

  /* ═══ BALAYAGE ET ZONES DE TAP ═══
     Posés sur le viewport et non sur book-body : la tranche est un frère du
     viewport et fait défiler au doigt, un écouteur plus haut lui volerait ses
     gestes. On exige que la composante horizontale domine, sinon un
     défilement vertical tournerait la page. */
  const touchRef = useRef<{ x: number; y: number } | null>(null)
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    touchRef.current = { x: t.clientX, y: t.clientY }
  }, [])
  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const s = touchRef.current
    touchRef.current = null
    if (!s) return
    const t = e.changedTouches[0]
    const dx = t.clientX - s.x
    const dy = t.clientY - s.y
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.4) return
    if (dx < 0) goNext()
    else goPrev()
  }, [goNext, goPrev])
  // Tap sur le tiers gauche ou droit — la convention des liseuses. Le tiers
  // central reste inerte pour qu'on puisse viser une pastille de verset sans
  // tourner la page par accident.
  const onZoneTap = useCallback((e: React.MouseEvent) => {
    if (!isMobile) return
    if ((e.target as HTMLElement).closest('a, button')) return
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = e.clientX - r.left
    if (x < r.width * 0.28) goPrev()
    else if (x > r.width * 0.72) goNext()
  }, [isMobile, goNext, goPrev])

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
            // hauteur : en CSS et non ici, pour pouvoir donner deux
            // déclarations (vh puis dvh) — voir la règle .book
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {!isMobile && (
            // Le pli n'est pas au centre du livre : la tranche élargit la
            // gouttière droite, donc les deux pages se rejoignent une
            // demi-tranche plus à gauche. Sans ce décalage l'ombre de pliure
            // est peinte à 19 px du vrai pli.
            <div
              aria-hidden
              className="bv-spine"
              style={hasRail ? { left: `calc(50% - ${TRANCHE_W / 2}px)` } : undefined}
            />
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
              // Sur mobile on ne réserve que le liséré : l'élargissement au
              // doigt déborde par-dessus le texte, donc la gouttière ne bouge
              // pas et la pagination n'est pas recalculée en cours de geste.
              // Sur desktop la tranche occupe sa gouttière en permanence.
              padding: isMobile
                ? `10px ${10 + (hasRail ? RAIL_SLIVER : 0)}px 12px 14px`
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
                fontSize: isMobile ? '13px' : '16px',
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
              <div
                className={isMobile
                  ? `bv-rail-mob${railOpen ? ' is-open' : ''}${railUsed ? '' : ' is-hinting'}`
                  : undefined}
                onTouchStart={isMobile ? onRailTouchStart : undefined}
                onTouchMove={isMobile ? onRailTouchMove : undefined}
                onTouchEnd={isMobile ? armRailTimer : undefined}
                onClickCapture={isMobile ? onRailClickCapture : undefined}
              >
                <SurahTranche
                  surahs={railSurahs!}
                  availableIds={railAvailableIds ?? []}
                  currentId={surah.id}
                  onNavigate={leaveTo}
                />
              </div>
            )}

            {/* VIEWPORT : montre les pages visibles */}
            <div
              className="bv-viewport"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onClick={onZoneTap}
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
                // le doigt ne fait rien horizontalement à part tourner la page
                touchAction: 'pan-y',
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
                      fontSize: isMobile ? '13px' : '16px',
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

          {/* Pied du livre — navigation + compteur. Sur mobile il tombe de 74
              à ~34 px : la page se tourne au doigt, les chevrons ne sont plus
              que le secours. Les 40 px rendus font trois lignes de texte. */}
          <footer
            className="bv-book-footer"
            style={{
              // même décalage que la pliure : le compteur doit tomber sur le
              // pli, pas sur le centre géométrique du livre
              padding: `12px ${60 + (!isMobile && hasRail ? TRANCHE_W : 0)}px 16px 60px`,
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
            {/* Le seul repère utile en pied de page : où j'en suis. Le nom de
                la sourate est déjà dans l'en-tête et dans le liséré des
                perles — le répéter ici ne servait à rien. */}
            <div
              className="bv-foot-id"
              style={{
                display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '7px',
                fontStyle: 'italic', color: MUTED, letterSpacing: '0.2em',
              }}
            >
              <span className="bv-foot-count" style={{ fontSize: '13px' }}>
                page {spread + 1} / {totalSpreads}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'flex-end' }}>
              {/* Au bout du livre, la flèche « suivant » n'a plus de page où
                  aller : elle devient le passage à la sourate suivante. Le
                  href reste vrai pour le nouvel onglet et le clic milieu, mais
                  le clic passe par leaveTo pour garder le flou de sortie. */}
              {!canNext && nextSurah ? (
                <a
                  href={`/surah/${nextSurah.id}/livre`}
                  className="bv-next-surah"
                  onClick={e => {
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
                    e.preventDefault()
                    leaveTo(`/surah/${nextSurah.id}/livre`)
                  }}
                  title={`Sourate ${nextSurah.id} — ${nextSurah.name_fr}`}
                >
                  <span className="bv-next-label">Sourate suivante</span>
                  <span className="bv-next-name">{nextSurah.name_latin}</span>
                  <span aria-hidden className="bv-next-chev"><Chevron dir="right" /></span>
                </a>
              ) : (
                <button
                  onClick={goNext}
                  disabled={!canNext}
                  className="page-arrow"
                  aria-label="Page suivante"
                  style={{ ...arrowStyle(!canNext), ["--chev-dir" as string]: "2px" }}
                >
                  <Chevron dir="right" />
                </button>
              )}
            </div>
          </footer>
        </div>

        {/* Aligné sur le pli comme le compteur, pas sur la boîte du livre :
            sinon il casse l'axe vertical que forment la pliure et le pied de
            page, décalés d'une demi-tranche vers la gauche. */}
        <div
          className="bv-cta-wrap"
          style={{
            textAlign: 'center',
            marginTop: '14px',
            paddingRight: !isMobile && hasRail ? `${TRANCHE_W}px` : undefined,
          }}
        >
          <Link
            href={analyseHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bv-cta"
          >
            <span aria-hidden className="bv-cta-orn">✦</span>
            <span>Explorer l&apos;analyse</span>
            <span aria-hidden className="bv-cta-arrow"><Chevron dir="right" /></span>
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Hauteur du livre. Deux déclarations : les navigateurs qui ignorent
           dvh gardent vh. Sur mobile, vh compte la barre d'URL rétractée —
           le livre était donc calculé plus haut que la zone réellement
           visible et son pied passait sous la barre du navigateur. */
        .book {
          height: min(820px, calc(100vh - 110px));
          height: min(820px, calc(100dvh - 110px));
        }

        /* ═══ FRONTISPICE ═══ (voir le commentaire de SurahHeader) */
        .bv-frontispiece {
          text-align: center;
          position: relative;
          z-index: 2;
          padding: 4px 0 20px;
        }
        .bv-fp-legend, .bv-fp-meta {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          text-transform: uppercase;
          color: ${GOLD};
          /* Cormorant a des chiffres elzéviriens : dans une ligne de capitales
             espacées ils dépassent au-dessus et en dessous et cassent la ligne */
          font-variant-numeric: lining-nums;
          font-feature-settings: 'lnum' 1;
          /* l'interlettrage laisse un blanc après la dernière lettre : sans ce
             retrait la ligne paraît décalée vers la droite */
          text-indent: 0.3em;
        }
        .bv-fp-legend {
          font-size: 10px;
          letter-spacing: 0.3em;
          margin-bottom: 9px;
        }
        .bv-fp-meta {
          font-size: 8.5px;
          letter-spacing: 0.26em;
          opacity: 0.8;
          margin-top: 10px;
        }
        .bv-fp-name {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4em;
          font-size: clamp(30px, 4.4vw, 46px);
          line-height: 1.18;
          color: ${GOLD_DEEP};
          margin: 0;
          letter-spacing: 0.02em;
          font-weight: 400;
        }
        .bv-fp-paren {
          color: ${GOLD};
          font-size: 0.85em;
          opacity: 0.85;
          font-weight: 400;
        }
        .bv-fp-orn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          margin: 10px 0 9px;
        }
        .bv-fp-orn span {
          flex: 0 1 66px;
          height: 1px;
          background: linear-gradient(to right, transparent, ${GOLD});
          opacity: 0.6;
        }
        .bv-fp-orn span:last-child {
          background: linear-gradient(to left, transparent, ${GOLD});
        }
        .bv-fp-orn i {
          font-style: normal;
          color: ${GOLD};
          font-size: 10px;
          line-height: 1;
        }
        .bv-fp-latin {
          font-size: 14.5px;
          letter-spacing: 0.22em;
          font-weight: 600;
          color: ${INK_SOFT};
          line-height: 1.3;
        }
        .bv-fp-fr {
          font-size: 13px;
          font-style: italic;
          color: ${MUTED};
          margin-top: 2px;
          line-height: 1.3;
        }
        .bv-fp-basmala {
          margin-top: 18px;
        }
        .bv-fp-basmala-ar {
          /* or et non encre, 19 px et non 22 : c'est un ornement d'ouverture,
             pas le texte du signe — la distinction compte dans Al-Fatiha, où
             la même phrase revient deux lignes plus bas comme signe 1 */
          font-size: 19px;
          line-height: 1.55;
          color: ${GOLD_DEEP};
          letter-spacing: 0.01em;
          font-weight: 400;
        }
        .bv-fp-basmala-fr {
          font-size: 11.5px;
          font-style: italic;
          color: ${MUTED};
          margin-top: 5px;
          line-height: 1.4;
        }
        .bv-fp-close {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          margin-top: 15px;
        }
        /* La consigne montre l'objet dont elle parle : une vraie bague, à la
           même échelle que celles du texte. Dire « le numéro » sans le montrer
           obligeait à chercher. */
        .bv-fp-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 7px;
          margin: 13px 0 0;
          font-size: 11px;
          font-style: italic;
          color: ${MUTED};
          letter-spacing: 0.03em;
          opacity: 0.85;
        }
        .bv-fp-hint-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 17px;
          height: 17px;
          padding: 0 5px;
          border-radius: 999px;
          border: 1px solid rgba(184,150,46,0.42);
          color: ${GOLD_DEEP};
          font-size: 10px;
          font-weight: 700;
          font-style: normal;
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: 'lnum' 1, 'tnum' 1;
        }
        /* le verbe suit le pointeur : on ne touche pas une souris */
        .bv-hint-click { display: none; }
        @media (hover: hover) and (pointer: fine) {
          .bv-hint-tap { display: none; }
          .bv-hint-click { display: inline; }
        }
        .bv-fp-close span {
          flex: 0 1 72px;
          height: 1px;
          background: linear-gradient(to right, transparent, ${GOLD});
          opacity: 0.45;
        }
        .bv-fp-close span:last-child {
          background: linear-gradient(to left, transparent, ${GOLD});
        }
        .bv-fp-close i {
          font-style: normal;
          color: ${GOLD};
          font-size: 13px;
          line-height: 1;
          opacity: 0.75;
        }

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
        /* Le survol sous vrai pointeur seulement : sur un écran tactile le
           navigateur laisse :hover collé au dernier élément touché, et la
           pastille restait dorée après le tap. */
        @media (hover: hover) and (pointer: fine) {
          .verse-marker:hover {
            background: linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%);
            color: #FFFCF6;
            border-color: transparent;
            transform: translateY(-1px);
            box-shadow: 0 3px 8px rgba(120,90,30,0.35);
          }
        }
        /* Au doigt, c'est l'appui qui répond — sans lui rien ne se passe entre
           le tap et l'ouverture de l'onglet, et on doute d'avoir touché. */
        .verse-marker:active {
          background: linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%);
          color: #FFFCF6;
          border-color: transparent;
          transform: scale(0.94);
        }
        /* Deux battements sur la première pastille de la sourate, le temps
           qu'on comprenne que ces bagues mènent quelque part. Deux, pas une
           boucle : une pulsation perpétuelle sur une page de lecture
           deviendrait un clignotant. */
        @keyframes bvMarkerHint {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,150,46,0); border-color: rgba(184,150,46,0.42); }
          45%      { box-shadow: 0 0 0 5px rgba(184,150,46,0.16); border-color: rgba(184,150,46,0.85); }
        }
        .verse-marker.is-hint {
          animation: bvMarkerHint 1500ms ease-in-out 900ms 2;
        }
        @media (prefers-reduced-motion: reduce) {
          .verse-marker.is-hint { animation: none; }
        }
        .bv-floating-toggle:hover {
          background: linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%);
          color: #FFFCF6 !important;
          border-color: transparent;
          transform: translateY(-1px);
        }
        /* ═══ SORTIE VERS L'ANALYSE ═══
           Bague creuse et non pastille pleine : c'est déjà la règle des
           numéros de verset (« sans fond, ça se lit comme un renvoi imprimé et
           non comme un badge d'interface »). Une lozange dorée massive sous un
           livre en filets d'or se voyait comme une pièce rapportée. Au survol
           seulement, elle se remplit — même dégradé que les pastilles. */
        .bv-cta {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          padding: 9px 22px;
          border-radius: 999px;
          border: 1px solid rgba(184,150,46,0.45);
          background: transparent;
          color: ${GOLD_DEEP};
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          font-weight: 600;
          font-style: italic;
          letter-spacing: 0.1em;
          text-decoration: none;
          transition: background 220ms ease, color 220ms ease,
                      border-color 220ms ease, box-shadow 220ms ease;
        }
        /* Le tour lent du ✦ — copié sur « Visite guidée » (.tuto-cta-star) :
           600 ms, même courbe, et surtout un tour COMPLET.

           Un demi-tour ne convient pas ici : l'encre du ✦ ne remplit pas sa
           boîte et n'y est pas centrée, donc la rotation se fait autour d'un
           point qui n'est pas le sien — à 180° l'encre atterrit ailleurs et le
           losange a l'air de partir vers le bas au lieu de pivoter. À 360° il
           revient exactement d'où il vient, quel que soit le décalage.

           Même corps que le texte pour la même raison : un ✦ à 10 px centré
           dans une ligne de 14 se lit plus haut que le texte, son encre étant
           haute dans sa boîte. */
        .bv-cta-orn {
          display: inline-block;
          font-size: 14px;
          line-height: 1;
          color: ${GOLD};
          font-style: normal;
          transition: color 220ms ease,
                      transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bv-cta:hover .bv-cta-orn,
        .bv-cta:focus-visible .bv-cta-orn {
          transform: rotate(360deg);
        }
        .bv-cta-arrow {
          display: inline-flex;
          transition: transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bv-cta:hover {
          background: linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%);
          color: #FFFCF6;
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(120,90,30,0.28);
        }
        .bv-cta:hover .bv-cta-orn {
          color: #FFFCF6;
        }
        .bv-cta:hover .bv-cta-arrow {
          transform: translateX(3px);
        }
        @media (prefers-reduced-motion: reduce) {
          .bv-cta, .bv-cta-arrow, .bv-cta-orn { transition: none; }
          .bv-cta:hover .bv-cta-orn { transform: none; }
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

        /* ═══ PASSAGE À LA SOURATE SUIVANTE ═══
           Bague creuse, comme les pastilles de verset et la sortie vers
           l'analyse : dans ce livre rien n'est un badge plein tant qu'on ne
           le survole pas. */
        .bv-next-surah {
          display: inline-flex;
          align-items: baseline;
          gap: 7px;
          padding: 6px 13px 6px 15px;
          border-radius: 999px;
          border: 1px solid rgba(184,150,46,0.42);
          color: ${GOLD_DEEP};
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          text-decoration: none;
          white-space: nowrap;
          max-width: 100%;
          transition: background 220ms ease, color 220ms ease, border-color 220ms ease;
        }
        .bv-next-label {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-style: normal;
          opacity: 0.72;
        }
        .bv-next-name {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          /* aucun nom ne doit pouvoir casser la mise en page du pied */
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 15ch;
        }
        .bv-next-chev {
          display: inline-flex;
          align-self: center;
          transition: transform 260ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (hover: hover) and (pointer: fine) {
          .bv-next-surah:hover {
            background: linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%);
            color: #FFFCF6;
            border-color: transparent;
          }
          .bv-next-surah:hover .bv-next-chev {
            transform: translateX(3px);
          }
        }
        .bv-next-surah:active {
          background: linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%);
          color: #FFFCF6;
          border-color: transparent;
        }
        @media (prefers-reduced-motion: reduce) {
          .bv-next-surah, .bv-next-chev { transition: none; }
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
          /* ═══ PLEIN ÉCRAN ═══
             Sur un téléphone, l'écran EST la page : le cadre du livre coûtait
             62 px de largeur et 40 px de hauteur pour figurer un objet qu'on
             ne voit de toute façon pas en entier. Le cadre reste sur desktop,
             où la double-page a besoin de son contour.

             La hauteur n'est plus une soustraction de constantes : la page se
             cale sur le viewport moins la barre du site (dont la hauteur est
             une valeur CSS connue, clamp(58px, 8vw, 72px)), puis le livre
             prend tout ce que le lien d'analyse laisse. Aucun nombre magique
             à re-régler si le pied change de taille. */
          #main {
            /* neutralise la gouttière de <main> (px-4 pt-2 pb-6) — ce
               composant n'existe que sur /surah/[id]/livre */
            padding: 0 !important;
          }
          /* svh et non dvh — c'est LA bonne unité pour cette page.
             dvh suit l'état courant de l'interface du navigateur ; au tout
             premier affichage, avant que la barre d'outils du bas se pose,
             il rend une hauteur trop grande et le pied du livre finit
             dessous. Après un aller-retour vers l'analyse la valeur s'est
             stabilisée, d'où le défaut qui ne se voyait qu'à la première
             visite. svh est la hauteur avec l'interface du navigateur
             DÉPLOYÉE : c'est une constante, et comme cette page ne défile
             jamais, la barre ne se rétracte pas — on n'y perd rien.
             La ligne en vh reste pour les navigateurs qui ignorent svh. */
          .bv-page {
            min-height: 0 !important;
            height: calc(100vh - clamp(58px, 8vw, 72px));
            height: calc(100svh - clamp(58px, 8vw, 72px));
            display: flex;
            flex-direction: column;
          }
          .bv-book-wrap {
            padding: 0 !important;
            flex: 1 1 auto;
            min-height: 0;
          }
          .book {
            border-radius: 0 !important;
            box-shadow: inset 0 1px 0 rgba(184,150,46,0.20) !important;
            height: auto !important;
            flex: 1 1 auto;
            min-height: 0;
          }
          .bv-cta-wrap {
            flex: 0 0 auto;
          }
          /* Pied du livre sur une seule ligne : nom, compteur, chevrons */
          /* Le compteur se cale sur l'axe de la COLONNE DE TEXTE, pas sur
             celui du livre : la gouttière droite de book-body est plus large
             que la gauche du liséré de la tranche, donc la colonne est
             décalée vers la gauche. Sans cette compensation, « page n / N »
             ne tombait pas sous le milieu du texte qu'il numérote. Même
             correction que sur desktop, où c'est la tranche entière qui
             creuse l'écart. */
          .bv-book-footer {
            padding: 5px ${10 + RAIL_SLIVER + 4}px 6px 10px !important;
            gap: 8px !important;
          }
          .bv-foot-count {
            font-size: 11px !important;
            letter-spacing: 0.12em !important;
          }
          .page-arrow {
            width: 30px !important;
            height: 30px !important;
          }
          /* Le pied mobile tient sur une ligne de 35 px : « SOURATE SUIVANTE »
             n'y entre pas à côté du nom. Le nom et le chevron suffisent — on
             est au bout du livre, il n'y a pas d'autre lecture possible. */
          .bv-next-label {
            display: none;
          }
          .bv-next-surah {
            padding: 4px 9px 4px 12px !important;
            gap: 5px !important;
          }
          .bv-next-name {
            font-size: 11.5px !important;
            max-width: 13ch;
          }
          /* Lien vers l'analyse : la bague reste, resserrée */
          .bv-cta {
            padding: 5px 15px !important;
            font-size: 12px !important;
            gap: 9px !important;
            letter-spacing: 0.07em !important;
          }
          .bv-cta-orn {
            font-size: 12px !important;
          }
          .bv-cta-wrap {
            margin-top: 5px !important;
            /* même axe que le compteur et que la colonne de texte */
            padding-right: ${RAIL_SLIVER + 4}px;
            /* barre de geste des iPhone : elle flotte au-dessus de la page et
               couperait le lien sans cette réserve */
            padding-bottom: 5px;
            padding-bottom: max(5px, env(safe-area-inset-bottom));
          }
          /* La pastille flottante « Vue analyse » tombe sous la barre du site
             sur mobile : invisible mais cliquable, donc un piège. */
          .bv-floating-toggle {
            display: none !important;
          }
          /* ═══ LE LISÉRÉ ═══ (voir le commentaire RAIL_SLIVER)
             Tout s'anime en translation, rien ne change de taille. L'ancienne
             version animait la largeur de l'hôte, le retrait du contenu ET la
             taille des 114 losanges : le navigateur replaçait toute la colonne
             à chaque image, d'où les à-coups. Une translation ne coûte rien —
             elle est composée, pas mise en page.

             L'hôte garde donc une largeur fixe : c'est la ZONE TACTILE, plus
             large que l'encre parce qu'un liséré est plus fin qu'un doigt et
             qu'on le manquait une fois sur deux. Il est transparent ; c'est la
             tranche elle-même, plus large que lui et calée à droite, qui
             coulisse. Au repos elle dépasse par la droite et le livre, qui
             coupe ce qui sort de lui, n'en laisse voir que le liséré.

             La courbe est une décélération douce et non le cubic-bezier de
             signature (0.16, 1, 0.3, 1) : celui-ci avale 35 % de la course en
             40 ms, ce qui se lit comme un saut. Le repli est plus lent que
             l'ouverture — on subit la rétraction, on provoque l'ouverture. */
          .bv-rail-mob .bv-tranche-host {
            width: ${RAIL_TOUCH}px !important;
            top: 0 !important;
            bottom: 0 !important;
            /* la tranche déborde de son hôte une fois ouverte */
            overflow: visible !important;
          }
          /* ═══ LA LUEUR ═══
             Une lueur descend le long du liséré pour signaler qu'il est là.
             Elle est posée sur l'hôte et non sur la tranche : la tranche
             défile, la lueur suivrait le texte au lieu de rester sur la barre.
             Sa largeur est celle de l'encre — au repos les 24 px restants de
             l'hôte sont transparents et couvrent du texte.

             Trois passages, puis plus rien, et plus jamais une fois la tranche
             ouverte — le drapeau tient dans le navigateur. Un scintillement
             perpétuel sur une surface de lecture devient un clignotant :
             il apprend en trente secondes puis dérange pendant une heure. */
          @keyframes bvRailSheen {
            0%        { background-position: 0 -50%; opacity: 0; }
            10%       { opacity: 1; }
            55%       { background-position: 0 150%; opacity: 1; }
            70%, 100% { background-position: 0 150%; opacity: 0; }
          }
          /* La reprise discrète : même course, mais bien plus rapide que sa
             période — elle passe puis laisse la barre tranquille jusqu'au
             tour suivant. */
          @keyframes bvRailSheenSoft {
            0%        { background-position: 0 -50%; opacity: 0; }
            6%        { opacity: 1; }
            30%       { background-position: 0 150%; opacity: 1; }
            38%, 100% { background-position: 0 150%; opacity: 0; }
          }
          .bv-rail-mob:not(.is-open) .bv-tranche-host::after,
          .bv-rail-mob:not(.is-open) .bv-tranche-host::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: ${RAIL_SLIVER}px;
            pointer-events: none;
            z-index: 4;
            background-size: 100% 38%;
            background-repeat: no-repeat;
            opacity: 0;
          }
          /* UNE seule bande, d'un seul ton. La rampe « métal » essayée avant
             — cœur clair entre deux bords sombres — se lisait comme DEUX
             bandes qui se suivent, une blanche et une dorée : à cette
             largeur, l'œil ne recompose pas un reflet, il compte les zones.

             Et un ton profond plutôt que le doré moyen : sur du crème, un
             #C9A23A translucide vire au jaune citron. Le #8A6E1F des perles
             posé à demi-opacité donne un or chaud, qui se lit comme une
             ombre dorée qui passe.

             Trois passages appuyés, pour qui n'a jamais ouvert la tranche. */
          .bv-rail-mob.is-hinting:not(.is-open) .bv-tranche-host::after {
            background: linear-gradient(180deg,
              rgba(138,110,31,0) 0%,
              rgba(138,110,31,0.45) 50%,
              rgba(138,110,31,0) 100%);
            animation: bvRailSheen 4200ms ease-in-out 1400ms 3;
          }
          /* Puis un reflet léger toutes les cinq secondes, sans fin : la
             barre reste vivante sans redevenir un clignotant. Il démarre
             après les trois passages appuyés quand il y en a eu. */
          .bv-rail-mob:not(.is-open) .bv-tranche-host::before {
            background: linear-gradient(180deg,
              rgba(138,110,31,0) 0%,
              rgba(138,110,31,0.22) 50%,
              rgba(138,110,31,0) 100%);
            animation: bvRailSheenSoft 5000ms ease-in-out 2500ms infinite;
          }
          .bv-rail-mob.is-hinting:not(.is-open) .bv-tranche-host::before {
            animation-delay: 14000ms;
          }
          @media (prefers-reduced-motion: reduce) {
            .bv-rail-mob:not(.is-open) .bv-tranche-host::after,
            .bv-rail-mob:not(.is-open) .bv-tranche-host::before {
              animation: none;
            }
          }
          .bv-rail-mob .bv-tranche {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: ${RAIL_OPEN}px;
            padding-left: 0;
            background: #FBF6E8 !important;
            border-left: 1px solid rgba(184,150,46,0.30) !important;
            transform: translateX(${RAIL_OPEN - RAIL_SLIVER}px);
            transition: transform 420ms cubic-bezier(0.33, 0, 0.2, 1),
                        box-shadow 420ms ease;
            will-change: transform;
          }
          /* ═══ LA COLONNE DES PERLES ═══
             La barre ne fait plus un cadre autour du losange : elle COMMENCE
             au losange, et le numéro suit à sa droite. C'est ce qui supprime
             le vide — un losange centré sur la largeur avec le numéro calé à
             droite condamnait toute la moitié gauche, et aucune taille de
             glyphe ne pouvait la combler puisque les deux se rejoignaient
             bien avant.

             Le losange reste centré sur le cordon, qui est son axe à lui : la
             colonne des 114 perles est droite, c'est tout ce qui compte. Ce
             qui n'est plus centré, c'est le couple perle + numéro dans la
             largeur, et ça ne se voit pas.

             Le rappel qui suit repose la perle au milieu du liséré quand la
             barre est fermée. Au repos le bord gauche de la tranche tombe
             toujours à une largeur de liséré du bord de l'écran, quelle que
             soit la largeur ouverte : le décalage vaut donc demi-liséré,
             moins le retrait, moins le demi-losange. */
          .bv-rail-mob .bv-tr-tick {
            justify-content: flex-start;
            padding-left: 7px;
          }
          .bv-rail-mob .bv-tr-cord {
            left: 13px;
            right: auto;
            transform: none;
          }
          .bv-rail-mob .bv-tr-inner {
            transform: translateX(-3.5px);
            transition: transform 420ms cubic-bezier(0.33, 0, 0.2, 1);
          }
          .bv-rail-mob .bv-tr-star {
            transform: scale(0.873);
            transition: transform 420ms cubic-bezier(0.33, 0, 0.2, 1),
                        filter 260ms ease;
          }
          /* Le numéro est posé hors flux, à droite : le losange doit rester au
             MILIEU de la tranche, et une paire losange+numéro centrée comme un
             tout aurait décalé le losange vers la gauche. */
          .bv-rail-mob .bv-tr-num {
            display: block;
            position: absolute;
            right: 7px;
            left: auto;
            font-size: 10.2px;
            opacity: 0;
            transition: opacity 200ms ease;
          }
          /* Sous le doigt : la tranche coulisse par-dessus le texte pour qu'on
             puisse viser une perle, lire les numéros et faire défiler. */
          .bv-rail-mob.is-open .bv-tranche {
            transform: translateX(0);
            box-shadow: -14px 0 24px -10px rgba(60,40,10,0.28);
            transition-duration: 300ms;
          }
          .bv-rail-mob.is-open .bv-tr-inner {
            transform: translateX(0);
            transition-duration: 300ms;
          }
          .bv-rail-mob.is-open .bv-tr-star {
            transform: scale(1.153);
            transition-duration: 300ms;
          }
          .bv-rail-mob.is-open .bv-tr-num {
            opacity: 1;
            transition-delay: 90ms;
          }
          @media (prefers-reduced-motion: reduce) {
            .bv-rail-mob .bv-tranche,
            .bv-rail-mob .bv-tr-inner,
            .bv-rail-mob .bv-tr-star,
            .bv-rail-mob .bv-tr-num {
              transition: none !important;
            }
          }
          /* Frontispice — tout ce qui est fixe en px doit rétrécir : à 300 px
             de colonne, les filets à 66/72 px touchent les bords. */
          .bv-frontispiece {
            padding: 2px 0 12px !important;
          }
          .bv-fp-legend {
            font-size: 9px !important;
            letter-spacing: 0.24em !important;
            margin-bottom: 6px !important;
          }
          .bv-fp-meta {
            font-size: 8px !important;
            letter-spacing: 0.18em !important;
            margin-top: 7px !important;
          }
          .bv-fp-name {
            font-size: 31px !important;
          }
          .bv-fp-orn {
            gap: 8px !important;
            margin: 6px 0 6px !important;
          }
          .bv-fp-orn span {
            flex-basis: 40px !important;
          }
          .bv-fp-orn i {
            font-size: 8px !important;
          }
          .bv-fp-latin {
            font-size: 12.5px !important;
            letter-spacing: 0.16em !important;
          }
          .bv-fp-fr {
            font-size: 11.5px !important;
          }
          .bv-fp-basmala {
            margin-top: 12px !important;
          }
          /* toujours sous les 15 px de l'arabe des versets */
          .bv-fp-basmala-ar {
            font-size: 16.5px !important;
            line-height: 1.5 !important;
          }
          .bv-fp-basmala-fr {
            font-size: 10px !important;
            margin-top: 3px !important;
          }
          .bv-fp-close {
            gap: 10px !important;
            margin-top: 10px !important;
          }
          .bv-fp-close span {
            flex-basis: 44px !important;
          }
          .bv-fp-close i {
            font-size: 11px !important;
          }

          .bv-arabic-block {
            font-size: 17.5px !important;
            margin: 3px 0 4px !important;
          }
          .bv-phon-block {
            font-size: 11px !important;
            margin: 2px auto 5px !important;
            padding: 2px 9px !important;
            letter-spacing: 0.045em !important;
          }
          .verse-marker {
            min-width: 19px !important;
            height: 19px !important;
            font-size: 11.5px !important;
            padding: 0 5px !important;
            margin-right: 6px !important;
            vertical-align: 2px !important;
          }
          .bv-conclusion-block h3 {
            font-size: 12.5px !important;
            margin: 8px 0 5px 0 !important;
          }
          .bv-conclusion-block p {
            font-size: 12.5px !important;
            line-height: 1.55 !important;
            margin: 0 0 8px 0 !important;
          }
          .bv-conclusion-block ol li {
            font-size: 12.5px !important;
            margin-bottom: 5px !important;
          }
          .bv-conclusion-block ol li::before {
            font-size: 11.5px !important;
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

/* ═══ FRONTISPICE ═══
   Pas de cadre : l'en-tête est une pile centrée, comme le corps du livre. Ce
   qui le distingue d'un verset tient à l'ordre et aux registres, pas à un
   contour.

   L'agencement, de haut en bas : le numéro en petites capitales dorées, le nom
   arabe en grand et en or profond entre les parenthèses ornées ﴾ ﴿ (les mêmes
   qu'en vue analyse), un filet à ✦, le nom translittéré espacé, le nom
   français en italique, le nombre de signes.

   La basmala vient ensuite, en or et plus petite que l'arabe des versets
   (19 px contre 22) : dans Al-Fatiha elle est aussi le signe 1, et les deux ne
   doivent pas se confondre — ici un ornement d'ouverture, deux lignes plus bas
   le texte lui-même. Le filet à ❦ ferme l'en-tête. */
function SurahHeader({ surah, isBaraah }: { surah: Surah; isBaraah: boolean }) {
  const meta = surah.verse_count
    ? `${surah.verse_count} signe${surah.verse_count > 1 ? 's' : ''}`
    : ''

  return (
    <header className="bv-frontispiece">
      <div className="bv-fp-legend">Sourate {surah.id}</div>
      {/* Parenthèses ornées coraniques ﴾ ﴿ — mêmes qu'en vue analyse, pour que
          le nom de la sourate se présente pareil dans les deux vues. */}
      <h1 className="bv-fp-name font-arabic" dir="rtl" lang="ar">
        <span aria-hidden="true" className="bv-fp-paren">﴾</span>
        <span>{surah.name_ar}</span>
        <span aria-hidden="true" className="bv-fp-paren">﴿</span>
      </h1>
      <div className="bv-fp-orn" aria-hidden>
        <span /><i>✦</i><span />
      </div>
      <div className="bv-fp-latin">{surah.name_latin.toUpperCase()}</div>
      <div className="bv-fp-fr">{surah.name_fr}</div>
      {meta && <div className="bv-fp-meta">{meta}</div>}

      {!isBaraah && (
        <div className="bv-fp-basmala">
          <div className="bv-fp-basmala-ar font-arabic" dir="rtl" lang="ar">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </div>
          <div className="bv-fp-basmala-fr">
            Au nom de Dieu, le Tout-Miséricordieux, le Très-Miséricordieux
          </div>
        </div>
      )}

      <div className="bv-fp-close" aria-hidden>
        <span /><i>❦</i><span />
      </div>

      {/* Rien ne disait que les numéros de signe menaient quelque part. La
          bague creuse se lit comme un renvoi imprimé — c'est voulu — mais un
          renvoi imprimé ne se touche pas, et sur un écran tactile il n'y a
          aucun survol pour le révéler. Une ligne le dit, une fois, à
          l'ouverture de la sourate. Le verbe suit le pointeur. */}
      <p className="bv-fp-hint">
        <span aria-hidden className="bv-fp-hint-mark">1</span>
        {/* toute la phrase dans UN seul élément de flex : sinon l'écart du
            flex s'ajoute à l'espace du texte et le verbe se détache */}
        <span>
          <span className="bv-hint-tap">Touchez</span>
          <span className="bv-hint-click">Cliquez sur</span> un numéro de signe
          pour ouvrir son analyse
        </span>
      </p>
    </header>
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
  isFirst,
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
          className={`verse-marker${isFirst ? ' is-hint' : ''}`}
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

