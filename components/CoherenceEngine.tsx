'use client'

import { useState, useTransition } from 'react'
import type { Verse } from '@/lib/db'

// ── Types ────────────────────────────────────────────────────────────────────

export interface VerseRelation {
  target_id:     number
  relation_type: string
  weight:        number
  note:          string | null
  target_verse?: Verse & { surah_latin?: string }
}

interface CoherenceEngineProps {
  verseId:   number
  relations: VerseRelation[]
  /** Appelé quand l'utilisateur veut naviguer vers un verset lié */
  onNavigate?: (verseId: number) => void
}

// ── Libellés et couleurs par type de relation ────────────────────────────────
const RELATION_META: Record<string, { label: string; color: string; icon: string }> = {
  root_shared:  { label: 'Racine commune',    color: 'bg-blue-50  border-blue-200  text-blue-700',  icon: '⊕' },
  theme_shared: { label: 'Thème partagé',     color: 'bg-green-50 border-green-200 text-green-700', icon: '◈' },
  lexical_echo: { label: 'Écho lexical',      color: 'bg-gold-50  border-gold-200  text-gold-700',  icon: '◇' },
  narrative_seq:{ label: 'Séquence narrative',color: 'bg-purple-50 border-purple-200 text-purple-700', icon: '→' },
  cross_ref:    { label: 'Renvoi explicite',  color: 'bg-rose-50  border-rose-200  text-rose-700',  icon: '↗' },
  antithesis:   { label: 'Antithèse',         color: 'bg-orange-50 border-orange-200 text-orange-700', icon: '⇄' },
}

// ── Barre de score de cohérence ───────────────────────────────────────────────
function WeightBar({ weight }: { weight: number }) {
  const pct = Math.round(weight * 100)
  return (
    <div className="flex items-center gap-1.5">
      <div className="h-1.5 w-16 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold-400 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-gray-400">{pct}%</span>
    </div>
  )
}

// ── Groupe par type de relation ───────────────────────────────────────────────
function RelationGroup({
  type,
  relations,
  onNavigate,
}: {
  type:        string
  relations:   VerseRelation[]
  onNavigate?: (id: number) => void
}) {
  const meta = RELATION_META[type] ?? {
    label: type, color: 'bg-gray-50 border-gray-200 text-gray-600', icon: '·',
  }
  const [expanded, setExpanded] = useState(relations.length <= 3)

  const visible = expanded ? relations : relations.slice(0, 3)

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className={`morph-badge border ${meta.color}`}>
          {meta.icon} {meta.label}
        </span>
        <span className="text-xs text-gray-400">{relations.length} verset(s)</span>
      </div>

      <div className="space-y-1.5 ml-1">
        {visible.map(rel => {
          const v = rel.target_verse
          const ref = v
            ? `${v.surah_latin ?? `S.${rel.target_id}`} ${v.verse_number}`
            : `Verset #${rel.target_id}`
          return (
            <button
              key={rel.target_id}
              onClick={() => onNavigate?.(rel.target_id)}
              className="w-full text-left flex items-start gap-3 p-2 rounded-lg
                         hover:bg-parchment-100 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-700 group-hover:text-gold-700">
                  {ref}
                </div>
                {v?.translation_fr && (
                  <div className="text-xs text-gray-400 truncate mt-0.5">
                    {v.translation_fr.slice(0, 80)}…
                  </div>
                )}
                {rel.note && (
                  <div className="text-xs text-blue-500 mt-0.5 italic">{rel.note}</div>
                )}
              </div>
              <WeightBar weight={rel.weight} />
            </button>
          )
        })}
      </div>

      {relations.length > 3 && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-1 text-xs text-gray-400 hover:text-gold-600 ml-1"
        >
          {expanded ? '↑ Réduire' : `↓ Voir ${relations.length - 3} de plus`}
        </button>
      )}
    </div>
  )
}

// ── Composant principal ───────────────────────────────────────────────────────

/**
 * CoherenceEngine
 * Affiche les relations thématiques/lexicales entre un verset et le reste du Coran.
 * Les relations sont groupées par type et triées par poids de cohérence.
 */
export function CoherenceEngine({
  verseId,
  relations,
  onNavigate,
}: CoherenceEngineProps) {
  const [, startTransition] = useTransition()

  const grouped = relations.reduce<Record<string, VerseRelation[]>>((acc, rel) => {
    acc[rel.relation_type] ??= []
    acc[rel.relation_type].push(rel)
    return acc
  }, {})

  // Trier les groupes par score moyen décroissant
  const sortedTypes = Object.keys(grouped).sort((a, b) => {
    const avgA = grouped[a].reduce((s, r) => s + r.weight, 0) / grouped[a].length
    const avgB = grouped[b].reduce((s, r) => s + r.weight, 0) / grouped[b].length
    return avgB - avgA
  })

  const handleNavigate = (id: number) => {
    startTransition(() => onNavigate?.(id))
  }

  return (
    <div className="side-panel">
      <header className="panel-header">
        <span className="text-sm font-medium text-gray-600">Cohérence thématique</span>
        <span className="text-xs text-gray-400">{relations.length} relation(s)</span>
      </header>

      <div className="px-4 py-4">
        {relations.length === 0 ? (
          <p className="text-sm text-gray-300 text-center py-4">
            Aucune relation indexée pour ce verset.
          </p>
        ) : (
          sortedTypes.map(type => (
            <RelationGroup
              key={type}
              type={type}
              relations={grouped[type]}
              onNavigate={handleNavigate}
            />
          ))
        )}
      </div>
    </div>
  )
}
