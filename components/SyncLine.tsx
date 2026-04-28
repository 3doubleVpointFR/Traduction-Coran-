'use client'

/**
 * SyncLine
 * Ligne de synchronisation visuelle entre le texte arabe (RTL)
 * et l'analyse latine (LTR). Affiche un connecteur SVG animé
 * entre le token sélectionné et son panneau d'analyse.
 */

interface SyncLineProps {
  /** Élément DOM source (token arabe) — ref transmis par VersePanel */
  sourceRect?: DOMRect | null
  /** Élément DOM cible (WordPanel) — ref transmis par le parent */
  targetRect?: DOMRect | null
  /** Afficher la ligne */
  visible: boolean
  color?: string
}

export function SyncLine({
  sourceRect,
  targetRect,
  visible,
  color = '#f59e0b',
}: SyncLineProps) {
  if (!visible || !sourceRect || !targetRect) return null

  // Coordonnées du connecteur dans le viewport
  const x1 = sourceRect.left + sourceRect.width / 2
  const y1 = sourceRect.bottom
  const x2 = targetRect.left + targetRect.width / 2
  const y2 = targetRect.top

  // Contrôles Bézier
  const cy = (y1 + y2) / 2

  const d = `M ${x1} ${y1} C ${x1} ${cy}, ${x2} ${cy}, ${x2} ${y2}`

  return (
    <svg
      className="pointer-events-none fixed inset-0 z-30 overflow-visible"
      style={{ width: '100vw', height: '100vh', left: 0, top: 0 }}
      aria-hidden
    >
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.6"
        className="transition-all duration-300"
      />
      <circle cx={x1} cy={y1} r="3" fill={color} opacity="0.8" />
      <circle cx={x2} cy={y2} r="3" fill={color} opacity="0.8" />
    </svg>
  )
}

/**
 * SyncLineSimple
 * Version statique sans DOM rects — ligne horizontale de séparation
 * avec indicateur de position pour une mise en page à colonnes.
 */
interface SyncLineSimpleProps {
  label?: string
  color?: string
}

export function SyncLineSimple({
  label,
  color = 'border-gold-300',
}: SyncLineSimpleProps) {
  return (
    <div className={`flex items-center gap-3 my-2`}>
      <div className={`flex-1 border-t ${color}`} />
      {label && (
        <span className="text-xs text-gray-400 whitespace-nowrap">{label}</span>
      )}
      <div className={`flex-1 border-t ${color}`} />
    </div>
  )
}
