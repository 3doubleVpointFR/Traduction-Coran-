'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

/* ═══════════════════════════════════════════════════════════════════════════
   SurahTranche — le chapelet des sourates, contre la tranche droite du livre.

   Une fenêtre de 33 losanges qui défile (molette, doigt, barre d'espace du
   navigateur) plutôt que les 114 tassées sur toute la hauteur. Le calcul est
   simple : à 114 signes pour ~770px, chacun disposait de 6,8px — trop peu
   pour être beau, trop peu pour être visé. À 33, chacun a plus de 20px.

   Elle vit DANS book-body, donc elle s'arrête d'elle-même au-dessus du pied
   de page : pas de coordonnée à tenir en phase avec la hauteur du footer.
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

export const TRANCHE_W = 38
// nombre de losanges visibles à la fois — fixe la taille de chacun
const VISIBLE = 33

/* Le losange du logo — le ✦ qui sépare l'arabe de « UN CORAN ARAB » dans
   l'en-tête du site. Reprendre la signature maison plutôt que d'importer un
   motif de plus : c'est déjà la marque du projet, elle ponctue les titres de
   sourate, la conclusion et les filets.

   Tracé en SVG et non en glyphe : il faut pouvoir le remplir d'un dégradé, le
   cerner, le nimber — ce qu'un caractère de texte ne permet pas.
   Quatre pointes au rayon 11 (N, E, S, O), quatre creux au rayon 4 sur les
   diagonales. */
const LOSANGE_D =
  'M12 1 L14.83 9.17 L23 12 L14.83 14.83 L12 23 L9.17 14.83 L1 12 L9.17 9.17 Z'

function Losange() {
  return (
    <svg className="bv-tr-star" viewBox="0 0 24 24" aria-hidden focusable="false">
      <circle className="bv-tr-star-ring" cx="12" cy="12" r="10.5" />
      <path d={LOSANGE_D} />
    </svg>
  )
}

export default function SurahTranche({
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

  // Hauteur d'une perle : la fenêtre divisée par le nombre visible. Mesurée,
  // parce qu'elle dépend de la hauteur du livre, elle-même dépendante du
  // viewport et des bascules arabe/phonétique.
  const [rowH, setRowH] = useState(22)
  useLayoutEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const sync = () => {
      const h = el.clientHeight
      if (h > 0) setRowH(Math.max(14, h / VISIBLE))
    }
    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Amène la sourate courante au centre de la fenêtre à l'ouverture.
  const centeredRef = useRef(false)
  useEffect(() => {
    const el = scrollRef.current
    if (!el || centeredRef.current || rowH <= 0) return
    const idx = surahs.findIndex(s => s.id === currentId)
    if (idx < 0) return
    centeredRef.current = true
    el.scrollTop = idx * rowH - el.clientHeight / 2 + rowH / 2
  }, [surahs, currentId, rowH])

  // Étiquette : posée HORS du conteneur défilant. À l'intérieur, `overflow-y`
  // clipperait aussi l'axe horizontal et la couperait net.
  const [hover, setHover] = useState<{ i: number; top: number } | null>(null)
  const showLabel = useCallback((i: number, el: HTMLElement) => {
    const host = hostRef.current
    if (!host) return
    const hr = host.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    setHover({ i, top: r.top - hr.top + r.height / 2 })
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
    <div className="bv-tranche-host" ref={hostRef} aria-label="Parcourir les sourates">
      {/* Dégradé partagé : défini une seule fois, référencé par les 114
          losanges. Un dégradé par losange serait 114 fois le même nœud. */}
      <svg width="0" height="0" aria-hidden style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="bv-star-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EFD98C" />
            <stop offset="45%" stopColor="#C9A23A" />
            <stop offset="100%" stopColor="#8A6E1F" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className="bv-tranche"
        ref={scrollRef}
        onMouseLeave={() => setHover(null)}
      >
        <div className="bv-tr-inner" style={{ height: `${surahs.length * rowH}px` }}>
          {/* le cordon défile avec les signes : c'est lui qui en fait un objet
              unique plutôt qu'une colonne de points */}
          <i className="bv-tr-cord" aria-hidden />
          {surahs.map((s, i) => {
            const isOpen = available.has(s.id)
            const isCurrent = s.id === currentId
            return (
              <Link
                key={s.id}
                href={`/surah/${s.id}/livre`}
                className={`bv-tr-tick${isOpen ? ' is-open' : ''}${isCurrent ? ' is-current' : ''}`}
                style={{ height: `${rowH}px` }}
                aria-current={isCurrent ? 'page' : undefined}
                title={isOpen ? `${s.name_latin} · ${s.name_fr}` : `${s.name_latin} — pas encore traduite`}
                draggable={false}
                onClick={e => onLinkClick(e, s.id)}
                onMouseEnter={e => showLabel(i, e.currentTarget)}
                onFocus={e => showLabel(i, e.currentTarget)}
              >
                <Losange />
                {/* Numéro : caché par défaut. Sur la tranche large du desktop
                    c'est l'étiquette au survol qui renseigne, mais au doigt il
                    n'y a pas de survol — sans numéro, une colonne de 114
                    losanges identiques ne dit pas où l'on est. Révélé par
                    .bv-rail-mob.is-open (voir BookView). */}
                <span className="bv-tr-num" aria-hidden>{s.id}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {hovered && (
        <div
          className={`bv-tr-cursor${available.has(hovered.id) ? ' is-open' : ''}`}
          style={{ top: `clamp(20px, ${hover!.top}px, calc(100% - 20px))` }}
          aria-hidden
        >
          <span className="bv-tr-cursor-num">{hovered.id}</span>
          <span className="bv-tr-cursor-name">{hovered.name_latin}</span>
          <span className="bv-tr-cursor-sep">✦</span>
          <span className="bv-tr-cursor-fr">
            {available.has(hovered.id) ? hovered.name_fr : 'pas encore traduite'}
          </span>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        /* L'hôte ne clippe pas : c'est lui qui porte l'étiquette, laquelle
           déborde vers l'intérieur du livre. */
        .bv-tranche-host {
          position: absolute;
          top: 2px;
          right: 0;
          bottom: 2px;
          width: ${TRANCHE_W}px;
          z-index: 3;
        }
        .bv-tranche {
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          /* le doigt fait défiler verticalement — et rien d'autre */
          touch-action: pan-y;
          overscroll-behavior: contain;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-user-select: none;
          user-select: none;
          background: linear-gradient(90deg,
            rgba(184,150,46,0) 0%,
            rgba(184,150,46,0.05) 55%,
            rgba(184,150,46,0.12) 100%);
          border-left: 1px solid rgba(184,150,46,0.18);
          border-radius: 2px;
          /* les perles se dissolvent en haut et en bas : la liste continue
             au-delà de la fenêtre, elle n'est pas tranchée */
          -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 22px, #000 calc(100% - 22px), transparent 100%);
          mask-image: linear-gradient(180deg, transparent 0, #000 22px, #000 calc(100% - 22px), transparent 100%);
        }
        .bv-tranche::-webkit-scrollbar { display: none; }

        .bv-tr-inner { position: relative; }
        .bv-tr-cord {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          transform: translateX(-50%);
          background: rgba(184,150,46,0.26);
          pointer-events: none;
        }

        .bv-tr-tick {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
        }

        /* Le numéro de sourate. Chiffres bâtons de largeur fixe : Cormorant a
           des chiffres elzéviriens, qui montent et descendent et feraient
           danser une colonne de 114 nombres. */
        .bv-tr-num {
          display: none;
          font-family: 'Cormorant Garamond', serif;
          font-size: 9.5px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.01em;
          color: rgba(110,80,25,0.45);
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: 'lnum' 1, 'tnum' 1;
          transition: color 240ms ease;
        }
        .bv-tr-tick.is-open .bv-tr-num {
          color: rgba(110,80,25,0.82);
        }
        .bv-tr-tick.is-current .bv-tr-num {
          color: #8A6E1F;
          font-weight: 700;
        }

        /* LE LOSANGE — même tracé pour les 114 sourates. L'état ne joue que sur
           le remplissage et l'aura, jamais sur la géométrie. */
        .bv-tr-star {
          display: block;
          width: 13px;
          height: 13px;
          overflow: visible;
          /* la même rotation que le ✦ de l'en-tête et du bouton « Visite
             guidée » : 180°, un demi-tour lent. C'est la signature du site,
             elle doit se comporter partout pareil. */
          transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1),
                      filter 260ms ease;
        }
        .bv-tr-star path {
          fill: none;
          stroke: rgba(110,80,25,0.34);
          stroke-width: 1.4;
          stroke-linejoin: round;
          transition: fill 240ms ease, stroke 240ms ease;
        }
        /* la bague de la sourate courante — masquée partout ailleurs */
        .bv-tr-star-ring {
          fill: none;
          stroke: none;
        }

        /* traduite : le losange est enluminé */
        .bv-tr-tick.is-open .bv-tr-star path {
          fill: url(#bv-star-gold);
          stroke: rgba(126,99,24,0.80);
          stroke-width: 0.7;
        }
        .bv-tr-tick.is-open .bv-tr-star {
          filter: drop-shadow(0 1px 1.5px rgba(120,90,30,0.45));
        }

        /* courante : le losange est cerclé, comme enchâssé */
        .bv-tr-tick.is-current .bv-tr-star-ring {
          stroke: rgba(184,150,46,0.55);
          stroke-width: 1;
        }
        .bv-tr-tick.is-current .bv-tr-star {
          filter: drop-shadow(0 1px 2px rgba(120,90,30,0.45))
                  drop-shadow(0 0 7px rgba(184,150,46,0.70));
        }

        .bv-tr-tick:hover .bv-tr-star { transform: scale(1.3) rotate(180deg); }
        .bv-tr-tick.is-open:hover .bv-tr-star {
          filter: drop-shadow(0 1px 2px rgba(120,90,30,0.45))
                  drop-shadow(0 0 8px rgba(184,150,46,0.70));
        }
        .bv-tr-tick:not(.is-open):hover .bv-tr-star path {
          stroke: rgba(110,80,25,0.58);
        }

        /* ═══ L'ÉTIQUETTE ═══ un cartouche de papier, avec une pointe qui vise
           la perle. Pas un aplat doré : posé sur le texte du livre, il
           l'écrasait. */
        .bv-tr-cursor {
          position: absolute;
          right: 100%;
          margin-right: 11px;
          transform: translateY(-50%);
          display: inline-flex;
          align-items: baseline;
          gap: 7px;
          padding: 5px 13px;
          border-radius: 10px;
          background: ${CREAM_PAGE};
          border: 1px solid rgba(184,150,46,0.34);
          box-shadow: 0 8px 22px -6px rgba(120,90,30,0.30),
                      0 2px 6px rgba(120,90,30,0.10);
          color: ${GOLD_DEEP};
          font-family: 'Cormorant Garamond', Georgia, serif;
          white-space: nowrap;
          pointer-events: none;
          transition: top 110ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bv-tr-cursor::after {
          content: '';
          position: absolute;
          right: -4.5px;
          top: 50%;
          width: 8px;
          height: 8px;
          transform: translateY(-50%) rotate(45deg);
          background: ${CREAM_PAGE};
          border-right: 1px solid rgba(184,150,46,0.34);
          border-top: 1px solid rgba(184,150,46,0.34);
          border-bottom-left-radius: 2px;
        }
        .bv-tr-cursor:not(.is-open) {
          border-style: dashed;
          box-shadow: 0 6px 16px -8px rgba(120,90,30,0.22);
        }
        .bv-tr-cursor-num {
          align-self: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 19px;
          height: 19px;
          padding: 0 5px;
          border-radius: 999px;
          border: 1px solid rgba(184,150,46,0.40);
          font-size: 10px;
          font-weight: 700;
          color: ${GOLD};
          font-variant-numeric: lining-nums tabular-nums;
          font-feature-settings: 'lnum' 1, 'tnum' 1;
        }
        .bv-tr-cursor-name {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .bv-tr-cursor-sep { font-size: 8px; color: ${GOLD}; opacity: 0.7; }
        .bv-tr-cursor-fr {
          font-size: 12px;
          font-style: italic;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: ${MUTED};
        }

        @media (max-width: 900px) {
          /* pas de survol au doigt : l'étiquette ne sert à rien, on la coupe */
          .bv-tr-cursor { display: none; }
          .bv-tr-star { width: 12px; height: 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bv-tr-star, .bv-tr-star path, .bv-tr-cursor { transition: none !important; }
        }
      ` }} />
    </div>
  )
}
