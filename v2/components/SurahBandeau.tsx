'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

/* ═══════════════════════════════════════════════════════════════════════════
   SurahBandeau — le chapelet des sourates, en bandeau au-dessus du livre.

   Il remplace la tranche verticale collée au bord droit : montrée à plusieurs
   lecteurs, personne n'avait compris qu'on pouvait appuyer dessus — elle se
   lisait comme une décoration du livre, pas comme une commande. D'où trois
   partis pris ici :

   1. **Un encart, pendant du pied de page.** Même filet, même fond, en haut
      au lieu d'en bas. Le livre a désormais une barre en tête et une barre en
      pied, et on comprend que les deux servent à naviguer.
   2. **Des pastilles rondes numérotées**, pas des losanges. Un cercle avec un
      chiffre dedans est un bouton dans toutes les interfaces du monde ; le
      losange, lui, était un ornement.
   3. **Deux chevrons aux extrémités.** Ils disent que la file continue au-delà
      du bord, ce qu'un simple dégradé de fondu ne dit qu'à moitié.

   Le composant ne fixe pas sa hauteur : il est `flex: 0 0 auto` dans `.book`,
   donc `book-body` perd d'autant et la pagination se recalcule seule.
   ═══════════════════════════════════════════════════════════════════════════ */

const GOLD = '#B8962E'
const GOLD_DEEP = '#8A6E1F'
const MUTED = '#6B5E52'
const CREAM_PAGE = '#FFFBF0'

export interface RailSurah {
  id: number
  name_ar: string
  name_latin: string
  name_fr: string
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden focusable="false"
    >
      {dir === 'left' ? <path d="M14.5 5.5 8 12l6.5 6.5" /> : <path d="M9.5 5.5 16 12l-6.5 6.5" />}
    </svg>
  )
}

export default function SurahBandeau({
  surahs,
  availableIds,
  currentId,
  onNavigate,
}: {
  surahs: RailSurah[]
  availableIds: number[]
  currentId: number
  /* Confie la navigation au livre pour qu'il floute la page avant de partir. */
  onNavigate?: (href: string, dir: 1 | -1) => void
}) {
  const router = useRouter()
  const available = useMemo(() => new Set(availableIds), [availableIds])
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const hostRef = useRef<HTMLDivElement | null>(null)
  const currentRef = useRef<HTMLAnchorElement | null>(null)

  /* Les chevrons s'éteignent au bout de la file. Un bouton qui ne fait plus
     rien mais garde l'air actif est pire que pas de bouton du tout. */
  const [ends, setEnds] = useState({ start: true, end: false })
  const syncEnds = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setEnds({ start: el.scrollLeft <= 1, end: el.scrollLeft >= max - 1 })
  }, [])

  // Amène la sourate courante au centre au premier rendu. Mesurée sur la
  // pastille elle-même (offsetLeft) et non calculée à partir d'une largeur
  // écrite en dur : la taille des pastilles change entre mobile et desktop.
  const centeredRef = useRef(false)
  useLayoutEffect(() => {
    const el = scrollRef.current
    const bead = currentRef.current
    if (!el || !bead || centeredRef.current) return
    centeredRef.current = true
    el.scrollLeft = bead.offsetLeft - el.clientWidth / 2 + bead.offsetWidth / 2
    syncEnds()
  }, [surahs, currentId, syncEnds])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const ro = new ResizeObserver(syncEnds)
    ro.observe(el)
    return () => ro.disconnect()
  }, [syncEnds])

  const nudge = useCallback((dir: 1 | -1) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }, [])

  /* Étiquette au survol, et la pastille grossie qui la surmonte : toutes
     deux posées HORS du conteneur défilant. Il défile en x, donc son
     débordement vertical est forcément coupé — c'est une règle CSS, un seul
     axe ne peut pas déborder tout seul —, et la pastille agrandie s'y faisait
     trancher net en haut et en bas. Le bandeau, lui, ne coupe rien : on
     redessine donc la pastille au-dessus de lui, à l'aplomb de l'original.
     On garde ses coordonnées, son numéro et son état. */
  type Hover = { i: number; left: number; top: number; ready: boolean; current: boolean }
  const [hover, setHover] = useState<Hover | null>(null)
  const showLabel = useCallback((i: number, el: HTMLElement) => {
    const host = hostRef.current
    if (!host) return
    const hr = host.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    setHover({
      i,
      left: r.left - hr.left + r.width / 2,
      top: r.top - hr.top + r.height / 2,
      ready: el.classList.contains('is-ready'),
      current: el.classList.contains('is-current'),
    })
  }, [])

  const navigate = useCallback((id: number) => {
    const href = `/surah/${id}/livre`
    const dir: 1 | -1 = id > currentId ? 1 : -1
    if (onNavigate) onNavigate(href, dir)
    else router.push(href)
  }, [currentId, onNavigate, router])

  // Ctrl/⌘/majuscule et clic-milieu restent au <Link> : ouvrir dans un nouvel
  // onglet ne doit pas flouter l'onglet courant.
  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: number) => {
    if (e.defaultPrevented) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    if (id !== currentId) navigate(id)
  }

  const hovered = hover ? surahs[hover.i] : null

  return (
    <div className="bv-bandeau" ref={hostRef} aria-label="Parcourir les sourates">
      <span className="bv-bd-legend" aria-hidden>Sourates</span>

      <button
        type="button"
        className="bv-bd-nav"
        onClick={() => nudge(-1)}
        disabled={ends.start}
        aria-label="Sourates précédentes"
      >
        <Chevron dir="left" />
      </button>

      <div
        className="bv-bd-scroll"
        ref={scrollRef}
        onScroll={() => { syncEnds(); setHover(null) }}
        onMouseLeave={() => setHover(null)}
      >
        <div className="bv-bd-track">
          {/* Le cordon file derrière les pastilles : c'est lui qui en fait un
              chapelet plutôt qu'une rangée de points sans lien. */}
          <i className="bv-bd-cord" aria-hidden />
          {surahs.map((s, i) => {
            const isReady = available.has(s.id)
            const isCurrent = s.id === currentId
            return (
              <Link
                key={s.id}
                href={`/surah/${s.id}/livre`}
                ref={isCurrent ? currentRef : undefined}
                className={`bv-bd-bead${isReady ? ' is-ready' : ''}${isCurrent ? ' is-current' : ''}`}
                aria-current={isCurrent ? 'page' : undefined}
                aria-label={isReady
                  ? `Sourate ${s.id}, ${s.name_latin}`
                  : `Sourate ${s.id}, ${s.name_latin} — pas encore traduite`}
                draggable={false}
                onClick={e => onLinkClick(e, s.id)}
                onMouseEnter={e => showLabel(i, e.currentTarget)}
                onFocus={e => showLabel(i, e.currentTarget)}
              >
                <span className="bv-bd-num" aria-hidden>{s.id}</span>
              </Link>
            )
          })}
        </div>
      </div>

      <button
        type="button"
        className="bv-bd-nav"
        onClick={() => nudge(1)}
        disabled={ends.end}
        aria-label="Sourates suivantes"
      >
        <Chevron dir="right" />
      </button>

      {/* La pastille grossie, par-dessus la barre. `pointer-events: none` est
          vital : opaque et plus large que l'original, elle recouvrirait le
          lien et déclencherait aussitôt son mouseleave — la pastille se
          mettrait à clignoter sous le curseur. */}
      {hovered && hover!.ready && (
        <div
          className={`bv-bd-pop${hover!.current ? ' is-current' : ''}`}
          style={{ left: `${hover!.left}px`, top: `${hover!.top}px` }}
          aria-hidden
        >
          <span className="bv-bd-num">{hovered.id}</span>
        </div>
      )}

      {hovered && (
        <div
          className={`bv-bd-tip${available.has(hovered.id) ? ' is-ready' : ''}`}
          style={{ left: `clamp(74px, ${hover!.left}px, calc(100% - 74px))` }}
          aria-hidden
        >
          <span className="bv-bd-tip-name">{hovered.name_latin}</span>
          <span className="bv-bd-tip-sep">✦</span>
          <span className="bv-bd-tip-fr">
            {available.has(hovered.id) ? hovered.name_fr : 'pas encore traduite'}
          </span>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        /* ═══ L'ENCART ═══
           Pendant du pied de page : même filet, même fond crème, posé en tête
           du livre. Il ne clippe pas — c'est lui qui porte l'étiquette, qui
           déborde vers le bas, sur la page. */
        .bv-bandeau {
          position: relative;
          z-index: 4;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px 8px;
          border-bottom: 1px solid rgba(184,150,46,0.20);
          /* Fond OPAQUE, et pas seulement un voile doré : la pliure du livre
             part du haut de la boîte et traverserait sinon le bandeau, comme
             si le pli montait jusque dans la barre. */
          background:
            linear-gradient(180deg,
              rgba(184,150,46,0.07) 0%,
              rgba(184,150,46,0.015) 62%,
              rgba(184,150,46,0) 100%),
            ${CREAM_PAGE};
        }

        /* Le mot qui lève le doute : sans lui, une file de ronds numérotés
           pourrait passer pour une pagination du livre entier. */
        .bv-bd-legend {
          flex: 0 0 auto;
          font-family: 'Cormorant Garamond', serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: ${GOLD};
          text-indent: 0.28em;
          opacity: 0.9;
          user-select: none;
        }

        /* ═══ LES CHEVRONS ═══
           Ils portent l'aveu que la file continue hors du champ. Le fondu des
           bords le suggère ; eux le disent. */
        .bv-bd-nav {
          flex: 0 0 auto;
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          padding: 0;
          border: 1px solid rgba(184,150,46,0.28);
          border-radius: 50%;
          background: rgba(255,251,240,0.9);
          color: ${GOLD_DEEP};
          cursor: pointer;
          transition: background 180ms ease, border-color 180ms ease,
                      color 180ms ease, opacity 180ms ease;
        }
        .bv-bd-nav:disabled {
          opacity: 0.25;
          cursor: default;
        }
        @media (hover: hover) {
          .bv-bd-nav:not(:disabled):hover {
            background: rgba(184,150,46,0.14);
            border-color: ${GOLD};
          }
        }

        /* ═══ LA FILE ═══
           Défilement horizontal au doigt, à la molette ou aux chevrons. Les
           pastilles se dissolvent aux deux bords : la file continue, elle
           n'est pas tranchée. */
        .bv-bd-scroll {
          flex: 1 1 auto;
          min-width: 0;
          overflow-x: auto;
          overflow-y: hidden;
          /* pinch-zoom explicite, comme sur la page du livre : sinon le
             bandeau devient une bande morte où l'agrandissement ne prend pas */
          touch-action: pan-x pinch-zoom;
          overscroll-behavior-x: contain;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-user-select: none;
          user-select: none;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 18px, #000 calc(100% - 18px), transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 18px, #000 calc(100% - 18px), transparent 100%);
        }
        .bv-bd-scroll::-webkit-scrollbar { display: none; }

        .bv-bd-track {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          /* Verticalement, juste de quoi loger une pastille traduite AU
             REPOS, halo compris : 29 + 3 + 3. Le grossissement du survol,
             lui, ne se loge pas ici — il est redessiné par-dessus la barre
             (.bv-bd-pop), sinon il faudrait épaissir la file pour un état
             qui ne dure qu'un instant. Horizontalement, de quoi laisser
             respirer la première et la dernière sous le fondu. */
          padding: 3px 10px;
          width: max-content;
        }
        .bv-bd-cord {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 1px;
          transform: translateY(-50%);
          background: rgba(184,150,46,0.22);
          pointer-events: none;
        }

        /* ═══ LES PASTILLES ═══
           Un cercle, un chiffre, un fond opaque qui masque le cordon : la
           forme même d'un bouton. Chiffres bâtons — Cormorant a des chiffres
           elzéviriens, qui montent et descendent et feraient danser la file.

           L'état par défaut est celui d'une sourate PAS ENCORE TRADUITE :
           elles sont 110 sur 114, autant que ce soit le fond de tableau. Une
           place réservée, rien de plus — petite, pâle, sans relief. */
        .bv-bd-bead {
          position: relative;
          flex: 0 0 auto;
          width: 29px;
          height: 29px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(184,150,46,0.16);
          background: ${CREAM_PAGE};
          color: rgba(107,94,82,0.34);
          text-decoration: none;
          cursor: pointer;
          /* le calibre sépare autant que la couleur, et il se voit du coin de
             l'œil : on repère les pastilles lisibles sans les lire */
          transform: scale(0.8);
          transition: transform 200ms cubic-bezier(0.16,1,0.3,1),
                      border-color 200ms ease, color 200ms ease,
                      box-shadow 200ms ease, background 200ms ease;
        }
        .bv-bd-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
          font-variant-numeric: lining-nums;
          font-feature-settings: 'lnum' 1;
          letter-spacing: 0.01em;
        }

        /* Traduite : quatre écarts d'un coup — plus grande, cerclée d'or
           franc, remplie d'un fond doré, l'encre en or profond et le chiffre
           gras, avec un halo qui la détache du crème. Chacun pris seul se
           serait noyé dans une file de 114 ; ensemble ils font que l'œil
           tombe dessus sans chercher. */
        .bv-bd-bead.is-ready {
          transform: scale(1);
          border-color: rgba(184,150,46,0.85);
          background:
            linear-gradient(180deg, rgba(184,150,46,0.20) 0%, rgba(184,150,46,0.06) 100%),
            ${CREAM_PAGE};
          color: ${GOLD_DEEP};
          box-shadow: 0 0 0 3px rgba(184,150,46,0.11),
                      0 1px 3px rgba(120,90,30,0.20);
        }
        .bv-bd-bead.is-ready .bv-bd-num {
          font-weight: 700;
        }
        @media (hover: hover) {
          /* Pas de grossissement ici : c'est .bv-bd-pop qui s'en charge,
             au-dessus de la barre. Le survol ne fait qu'aviver la bague —
             de toute façon recouverte par la pastille grossie. */
          .bv-bd-bead.is-ready:hover {
            border-color: ${GOLD};
          }
          /* Les non traduites répondent au survol — elles restent des liens —
             mais sans jamais rejoindre le calibre des lisibles. */
          .bv-bd-bead:not(.is-ready):hover {
            transform: scale(0.88);
            border-color: rgba(184,150,46,0.34);
            color: rgba(107,94,82,0.6);
          }
        }
        .bv-bd-bead:focus-visible {
          outline: none;
          border-color: ${GOLD};
          box-shadow: 0 0 0 3px rgba(184,150,46,0.25);
        }

        /* Là où l'on est : la seule pastille pleine. */
        .bv-bd-bead.is-current,
        .bv-bd-bead.is-current:hover {
          background: linear-gradient(150deg, #EFD98C 0%, #C9A23A 45%, #8A6E1F 100%);
          border-color: ${GOLD_DEEP};
          color: ${CREAM_PAGE};
          transform: scale(1.1);
          box-shadow: 0 2px 8px rgba(120,90,30,0.34),
                      inset 0 1px 0 rgba(255,255,255,0.35);
        }

        /* ═══ LA PASTILLE GROSSIE ═══
           Le double de celle qu'on survole, redessiné à son aplomb mais dans
           le bandeau, qui ne coupe rien. Elle grossit donc sans jamais
           rencontrer de bord — et elle peut grossir bien plus que ce qu'une
           épaisseur de file aurait permis. */
        .bv-bd-pop {
          position: absolute;
          /* 34 pour 29 : un cran, pas un bond. Au-delà, la pastille cesse
             d'être la même et devient un objet de plus. */
          width: 34px;
          height: 34px;
          margin: 0;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid ${GOLD};
          background:
            linear-gradient(180deg, rgba(184,150,46,0.22) 0%, rgba(184,150,46,0.06) 100%),
            ${CREAM_PAGE};
          color: ${GOLD_DEEP};
          /* Une ombre portée franche s'allumerait d'un coup, sans pouvoir
             s'animer : celle-ci reste proche de celle que la pastille du
             dessous porte déjà, et le passage ne se voit pas. */
          box-shadow: 0 0 0 3px rgba(184,150,46,0.14),
                      0 3px 10px rgba(120,90,30,0.18);
          pointer-events: none;
          z-index: 6;
          /* Le grossissement PART de la taille exacte de la pastille du
             dessous (29 sur 34, soit 0,853) et à pleine opacité : rien
             n'apparaît, c'est le même rond qui enfle. Une courbe expo, elle,
             atteignait sa taille en deux images et donnait un à-coup — celle-ci
             ralentit régulièrement, sur près du triple de durée. */
          animation: bv-bd-pop-in 280ms cubic-bezier(0.2, 0.55, 0.3, 1) both;
        }
        .bv-bd-pop.is-current {
          background: linear-gradient(150deg, #EFD98C 0%, #C9A23A 45%, #8A6E1F 100%);
          border-color: ${GOLD_DEEP};
          color: ${CREAM_PAGE};
          /* la courante est déjà à 1,1 : elle part donc de plus haut */
          animation-name: bv-bd-pop-in-current;
        }
        .bv-bd-pop .bv-bd-num {
          font-size: 15px;
          font-weight: 700;
        }
        /* La translation de centrage fait partie des images clés : posée
           dans la seule règle transform, l'animation l'écraserait. */
        @keyframes bv-bd-pop-in {
          from { transform: translate(-50%, -50%) scale(0.853); }
          to   { transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes bv-bd-pop-in-current {
          from { transform: translate(-50%, -50%) scale(0.938); }
          to   { transform: translate(-50%, -50%) scale(1); }
        }

        /* ═══ L'ÉTIQUETTE ═══ sous la pastille survolée, sur la page. */
        .bv-bd-tip {
          position: absolute;
          top: calc(100% + 6px);
          transform: translateX(-50%);
          display: inline-flex;
          align-items: baseline;
          gap: 7px;
          white-space: nowrap;
          padding: 5px 12px;
          border-radius: 999px;
          border: 1px solid rgba(184,150,46,0.3);
          background: rgba(255,251,240,0.97);
          box-shadow: 0 6px 18px rgba(60,40,10,0.16);
          font-family: 'Cormorant Garamond', serif;
          pointer-events: none;
          z-index: 5;
          animation: bv-bd-tip-in 160ms ease both;
        }
        @keyframes bv-bd-tip-in {
          from { opacity: 0; transform: translateX(-50%) translateY(-3px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .bv-bd-tip-name {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: ${GOLD_DEEP};
        }
        .bv-bd-tip-sep {
          font-size: 8px;
          color: ${GOLD};
          opacity: 0.7;
        }
        .bv-bd-tip-fr {
          font-size: 12px;
          font-style: italic;
          color: ${MUTED};
        }
        .bv-bd-tip:not(.is-ready) .bv-bd-tip-fr {
          opacity: 0.75;
        }

        @media (prefers-reduced-motion: reduce) {
          .bv-bd-bead,
          .bv-bd-nav { transition: none !important; }
          .bv-bd-tip { animation: none !important; }
          .bv-bd-pop {
            animation: none !important;
            transform: translate(-50%, -50%);
          }
        }

        /* Au doigt il n'y a pas de survol, seulement un survol FANTÔME qui
           reste collé au dernier élément touché. La pastille grossie et son
           étiquette n'ont donc rien à y faire : on toucherait une sourate et
           elle resterait grossie sur la barre. */
        @media (hover: none) {
          .bv-bd-pop,
          .bv-bd-tip { display: none !important; }
        }

        /* ═══ MOBILE ═══
           La page ne défile pas : chaque pixel pris ici est un pixel de moins
           pour le texte. L'intitulé saute, les pastilles perdent 5 px, mais
           les chevrons restent — c'est eux qui font lire la file comme une
           barre et non comme une frise. */
        @media (max-width: 900px) {
          .bv-bandeau {
            gap: 5px;
            padding: 4px 7px 5px;
          }
          .bv-bd-legend {
            display: none;
          }
          .bv-bd-nav {
            width: 22px;
            height: 22px;
          }
          .bv-bd-track {
            gap: 5px;
            /* Pas de survol au doigt, donc pas de grossissement à loger —
               mais la pastille courante est à 1,1 et les traduites portent
               leur halo de 3 px : sans ces 3 px de réserve elles seraient
               rasées en haut et en bas. */
            padding: 3px 8px;
          }
          .bv-bd-bead {
            width: 24px;
            height: 24px;
          }
          .bv-bd-num {
            font-size: 11.5px;
          }
          .bv-bd-tip {
            padding: 4px 10px;
            gap: 6px;
          }
          .bv-bd-tip-name { font-size: 12px; }
          .bv-bd-tip-fr { font-size: 11px; }
        }
      ` }} />
    </div>
  )
}
