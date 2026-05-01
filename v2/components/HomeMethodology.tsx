'use client'

import { useState } from 'react'

const PIPELINE = [
  { title: 'Identification', desc: 'Chaque mot isolé : porteur de sens ou particule grammaticale' },
  { title: 'Étymologie', desc: 'Tous les sens de la racine, sans présupposé' },
  { title: 'Analyse 5 axes', desc: 'Le sens juste émerge du contexte et de la cohérence' },
  { title: 'Reconstruction', desc: 'Une traduction proposée — point de départ' },
]

const AXES = [
  { num: 1, title: 'Champ lexical', desc: 'Les mots du verset sont-ils compatibles avec ce sens ?' },
  { num: 2, title: 'Versets voisins', desc: 'Le contexte immédiat confirme-t-il ou contredit-il ?' },
  { num: 3, title: 'Thème de la sourate', desc: "Ce sens s'inscrit-il dans le message global ?" },
  { num: 4, title: 'Cohérence coranique', desc: 'Existe-t-il une contradiction avec un autre verset ?' },
  { num: 5, title: 'Finalité du khalifa', desc: "Ce sens aide-t-il l'humain dans sa mission sur terre ?", highlight: true },
]

export default function HomeMethodology() {
  const [open, setOpen] = useState(false)

  return (
    <section className="max-w-4xl mx-auto" aria-labelledby="methodo-heading">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls="methodo-content"
        className="methodo-toggle w-full flex items-center justify-between gap-3 transition-all"
        style={{
          padding: '16px 20px',
          background: open ? 'rgba(184,150,46,0.07)' : '#FFFFFF',
          border: '1px solid rgba(184,150,46,0.2)',
          borderRadius: '14px',
          cursor: 'pointer',
          color: '#1A1410',
          textAlign: 'left',
          boxShadow: '0 1px 2px rgba(120,90,30,0.04), 0 2px 8px rgba(120,90,30,0.03)',
        }}
      >
        <span className="flex items-center gap-3 min-w-0">
          <span
            aria-hidden="true"
            style={{
              color: '#B8962E',
              fontSize: '16px',
              flexShrink: 0,
              opacity: 0.85,
            }}
          >
            ✦
          </span>
          <span
            id="methodo-heading"
            className="font-semibold truncate"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(0.95rem, 2.4vw, 1.15rem)',
              letterSpacing: '0.04em',
              color: '#1A1410',
            }}
          >
            Comment chaque verset est analysé
          </span>
        </span>
        <span
          aria-hidden="true"
          className="flex-shrink-0 inline-flex items-center justify-center"
          style={{
            color: '#8A7428',
            fontSize: '14px',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'rgba(184,150,46,0.1)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div
          id="methodo-content"
          className="animate-fadeIn pt-6 px-1"
          style={{ animationDuration: '0.3s' }}
        >
          {/* Pipeline 4 étapes — version condensée */}
          <div className="mb-7">
            <h3
              className="uppercase mb-4 text-center"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#8A7428',
                fontSize: '12.5px',
                letterSpacing: '0.18em',
                fontWeight: 600,
              }}
            >
              4 étapes de l&apos;analyse
            </h3>

            {/* Desktop : ligne horizontale */}
            <ol className="hidden md:flex items-stretch justify-between gap-2 list-none p-0 m-0">
              {PIPELINE.map((p, i) => (
                <li key={p.title} className="flex items-stretch flex-1">
                  <div className="flex-1 text-center px-2">
                    <div
                      className="mx-auto mb-2 flex items-center justify-center rounded-full"
                      style={{
                        width: 28,
                        height: 28,
                        background: 'rgba(184,150,46,0.12)',
                        border: '1.5px solid rgba(184,150,46,0.5)',
                        color: '#8A7428',
                        fontSize: 13,
                        fontWeight: 700,
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {i + 1}
                    </div>
                    <h4 className="font-semibold" style={{ color: '#1A1410', fontSize: '13.5px', fontFamily: "'Cormorant Garamond', serif" }}>
                      {p.title}
                    </h4>
                    <p className="leading-relaxed mt-1" style={{ color: '#6B5E52', fontSize: '12px' }}>
                      {p.desc}
                    </p>
                  </div>
                  {i < PIPELINE.length - 1 && (
                    <span aria-hidden="true" className="self-center text-lg font-light px-1" style={{ color: '#B8962E' }}>→</span>
                  )}
                </li>
              ))}
            </ol>

            {/* Mobile : liste verticale */}
            <ol className="md:hidden list-none p-0 m-0">
              {PIPELINE.map((p, i) => (
                <li key={p.title} className="flex items-start gap-3 pb-4 last:pb-0 relative">
                  <div className="relative flex-shrink-0" style={{ width: 32 }}>
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 32,
                        height: 32,
                        background: 'rgba(184,150,46,0.12)',
                        border: '1.5px solid rgba(184,150,46,0.5)',
                        color: '#8A7428',
                        fontSize: 13,
                        fontWeight: 700,
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {i + 1}
                    </div>
                    {i < PIPELINE.length - 1 && (
                      <div
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: 32,
                          bottom: -16,
                          width: 1.5,
                          background: 'rgba(184,150,46,0.25)',
                          transform: 'translateX(-50%)',
                        }}
                      />
                    )}
                  </div>
                  <div className="flex-1 pt-1 min-w-0">
                    <h4 className="font-semibold" style={{ color: '#1A1410', fontSize: '14px', fontFamily: "'Cormorant Garamond', serif" }}>
                      {p.title}
                    </h4>
                    <p style={{ color: '#6B5E52', fontSize: '12.5px', lineHeight: 1.55, marginTop: 2 }}>
                      {p.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* 5 Axes */}
          <div>
            <h3
              className="uppercase mb-4 text-center"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#8A7428',
                fontSize: '12.5px',
                letterSpacing: '0.18em',
                fontWeight: 600,
              }}
            >
              5 éclairages pour méditer un sens
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 list-none p-0 m-0">
              {AXES.map((axe) => (
                <li
                  key={axe.num}
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: axe.highlight ? '#F3EDD8' : '#FAF7F2',
                    border: `1px solid rgba(184,150,46,${axe.highlight ? '0.5' : '0.22'})`,
                  }}
                >
                  <span className="font-light" style={{ color: '#B8962E', fontSize: '1.75rem', lineHeight: 1, fontFamily: "'Cormorant Garamond', serif" }}>
                    {axe.num}
                  </span>
                  <h4 className="font-semibold mt-1" style={{ color: '#1A1410', fontSize: '13.5px', fontFamily: "'Cormorant Garamond', serif" }}>
                    {axe.title}
                  </h4>
                  <p style={{ fontSize: '12px', lineHeight: 1.5, marginTop: '4px', color: '#5A4E42' }}>
                    {axe.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <style jsx>{`
        .methodo-toggle:hover,
        .methodo-toggle:focus-visible {
          background: rgba(184, 150, 46, 0.08) !important;
          border-color: rgba(184, 150, 46, 0.5) !important;
        }
      `}</style>
    </section>
  )
}
