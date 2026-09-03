'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

// ─────────────────────────────────────────────────────────────────
// Tutoriel mobile : série de cartes plein écran (onboarding style)
// — Pas de surbrillance DOM, pas de scroll auto, juste des cartes
//   éducatives qui couvrent les mêmes notions que le tuto desktop.
// ─────────────────────────────────────────────────────────────────

interface Card {
  emoji: string
  title: string
  body: string
  highlight?: string  // mot/expression à mettre en valeur dans le body
  illustration?: 'meditation' | 'surah-list' | 'verse-layout' | 'summary' | 'note' | 'word-tap' | 'concepts' | 'retenu' | 'proof-ctx' | 'verses-refs' | 'sections' | 'display-settings' | 'verse-toggles' | 'book-page' | 'book-bandeau' | 'book-gestures' | 'final'
}

const CARDS: Card[] = [
  {
    emoji: '✦',
    title: 'Un outil de méditation',
    body: "Plutôt qu'imposer une traduction figée, cet outil te montre tous les sens possibles de chaque mot du Coran à partir de sa racine arabe — pour que tu construises ton propre sens éclairé.",
    highlight: 'tous les sens possibles',
    illustration: 'meditation',
  },
  {
    emoji: '✦',
    title: 'Choisir une sourate',
    body: "Sur la page d'accueil, fais défiler ou cherche dans la liste des sourates explorables. Pour ce tour on prend la sourate 3 (Āl ʿImrān) — clique « Suivant » et tu y seras direct.",
    illustration: 'surah-list',
  },
  {
    emoji: '✦',
    title: 'Voici un verset',
    body: "En haut le texte arabe. En dessous, chaque mot est aligné avec sa phonétique et sa traduction française. C'est la base d'une analyse mot-par-mot, fidèle au texte original.",
    highlight: 'mot-par-mot',
    illustration: 'verse-layout',
  },
  {
    emoji: '✦',
    title: 'Le résumé du verset',
    body: "Cet encadré or apparaît en haut de chaque verset analysé. Il résume en 1-2 phrases l'idée centrale et la portée du verset — une vue d'ensemble avant de plonger dans l'analyse.",
    highlight: "l'idée centrale",
    illustration: 'summary',
  },
  {
    emoji: '✦',
    title: 'La note contextuelle',
    body: "Juste en dessous, un second encadré, replié. Il ne redit pas le verset : il le situe. D'abord où il tombe dans la sourate et à qui il parle, puis ce que disait celui d'avant et en quoi celui-ci lui répond, enfin — en italique — un fait du texte qu'on risque de ne pas voir en lisant vite.",
    highlight: 'il le situe',
    illustration: 'note',
  },
  {
    emoji: '✦',
    title: 'Tape un mot du verset',
    body: "Chaque mot souligné est interactif. Tape dessus pour ouvrir un panneau d'analyse complet — racine, sens étymologiques, regroupements de sens, fréquences dans le Coran.",
    highlight: 'mot souligné',
    illustration: 'word-tap',
  },
  {
    emoji: '✦',
    title: 'Les regroupements de sens',
    body: "Les sens étymologiques sont groupés par concept (Divinité, Adoration, Refuge…). Tape sur un onglet pour voir les sens individuels qu'il contient. Les barres dorées montrent la fréquence de chaque concept dans tout le Coran.",
    highlight: 'fréquence dans tout le Coran',
    illustration: 'concepts',
  },
  {
    emoji: '✦',
    title: 'Retenu / Probable / Exclu',
    body: "Pour chaque verset, les regroupements sont classés selon 5 axes de cohérence : champ lexical, versets voisins, thème de la sourate, cohérence coranique d'ensemble, finalité du khalifa. Un seul est RETENU.",
    highlight: '5 axes de cohérence',
    illustration: 'retenu',
  },
  {
    emoji: '✦',
    title: "Le récap de l'analyse",
    body: "Quand tu déplies le regroupement retenu, un encadré or explique en 1-2 phrases pourquoi ce sens a été choisi pour ce verset — la synthèse du raisonnement.",
    highlight: 'pourquoi ce sens a été choisi',
    illustration: 'proof-ctx',
  },
  {
    emoji: '✦',
    title: 'Les autres versets',
    body: "Tu vois aussi la liste des versets analysés où la racine est utilisée avec le même sens. Tape sur une référence (ex. 3:42) pour ouvrir le verset et comparer.",
    highlight: 'comparer',
    illustration: 'verses-refs',
  },
  {
    emoji: '✦',
    title: 'Trois sections par verset',
    body: "Sous chaque verset, déplie les 3 sections : Démarche (analyse grammaticale), Justification (choix des mots), Critique (comparaison avec Hamidullah). À toi de juger ce qui te paraît le plus fidèle.",
    highlight: 'À toi de juger',
    illustration: 'sections',
  },
  {
    emoji: '✦',
    title: 'Personnaliser l\'affichage',
    body: "En haut à droite, le bouton avec 3 lignes ouvre un panneau pour cacher l'arabe, la phonétique ou les sections — pour TOUS les versets d'un coup. Active le « Mode lecture compact » pour ne garder que l'essentiel : résumé + traduction française.",
    highlight: 'Mode lecture compact',
    illustration: 'display-settings',
  },
  {
    emoji: '✦',
    title: "Options d'affichage par verset",
    body: "Sur chaque verset analysé, 3 petites options à droite te permettent de cacher l'arabe, la phonétique ou les sections — uniquement pour ce verset. Pratique pour épurer la lecture quand tu veux te concentrer.",
    highlight: 'uniquement pour ce verset',
    illustration: 'verse-toggles',
  },
  {
    emoji: '❦',
    title: "L'autre façon de lire",
    body: "Tout ça, c'était le mode analyse : un verset, ses mots, ses preuves. Sous la sourate, une bascule ouvre le mode livre — la traduction seule, paginée comme un vrai ouvrage, sans rien autour. Les numéros de signe y restent tactiles : tape dessus et tu reviens à l'analyse du verset.",
    highlight: 'paginée comme un vrai ouvrage',
    illustration: 'book-page',
  },
  {
    emoji: '❦',
    title: 'Le bandeau des sourates',
    body: "En tête du livre, les 114 sourates en pastilles numérotées. La pleine est celle que tu lis. Celles cerclées d'or sont traduites et t'attendent. Les pâles sont des places réservées, pas encore écrites. Fais glisser la barre du doigt, tape pour y aller.",
    highlight: "cerclées d'or sont traduites",
    illustration: 'book-bandeau',
  },
  {
    emoji: '❦',
    title: 'Tourner les pages au doigt',
    body: "Balaye vers la gauche ou la droite, ou tape simplement sur le bord gauche ou droit de la page. Le milieu ne fait rien — c'est ce qui te permet de viser un numéro de signe sans tourner par accident. Les flèches du pied restent là si tu préfères viser.",
    highlight: 'Le milieu ne fait rien',
    illustration: 'book-gestures',
  },
  {
    emoji: '❦',
    title: 'Si tu lis mal de près',
    body: "Écarte deux doigts sur la page pour agrandir le texte autant que tu veux, puis déplace-toi d'un doigt dans la page grossie. Tant que tu es agrandi, le balayage ne tourne plus les pages — sers-toi des flèches du pied. Et dans le panneau d'affichage, le livre peut aussi montrer l'arabe et la phonétique sous chaque signe.",
    highlight: 'Écarte deux doigts',
  },
  {
    emoji: '✦',
    title: 'À toi de méditer',
    body: "Tu as toutes les clés. Le mode analyse pour peser chaque mot, le mode livre pour lire d'une traite. Explore les sourates analysées, suis ton intuition, construis ton propre sens. La traduction n'est jamais le dernier mot — c'est une invitation à raisonner.",
    highlight: "n'est jamais le dernier mot",
    illustration: 'final',
  },
]

// ─── Mini-maquettes (HTML/CSS) qui ressemblent à l'app ───
function Illustration({ kind }: { kind: Card['illustration'] }) {
  if (!kind) return null
  const cardStyle: React.CSSProperties = {
    background: '#FFFFFF',
    border: '1px solid rgba(184,150,46,0.3)',
    borderRadius: 10,
    boxShadow: '0 6px 20px rgba(184,150,46,0.15)',
    overflow: 'hidden',
    width: '100%',
    maxWidth: 280,
    margin: '0 auto',
    fontFamily: "'Cormorant Garamond', serif",
  }

  if (kind === 'meditation') {
    return (
      <div style={{ ...cardStyle, padding: '22px 16px', textAlign: 'center' as const }}>
        <div style={{ fontSize: 56, color: '#B8962E', lineHeight: 1, marginBottom: 8 }}>قُرْآناً</div>
        <div style={{ fontSize: 11, color: '#8A7428', letterSpacing: '0.18em', textTransform: 'uppercase' as const, fontWeight: 600 }}>
          UN CORAN ARAB
        </div>
        <div style={{ height: 1, width: 40, background: 'rgba(184,150,46,0.4)', margin: '10px auto' }} />
        <div style={{ fontSize: 10, color: '#9E9089', fontStyle: 'italic' as const }}>
          Une invitation à raisonner
        </div>
      </div>
    )
  }

  if (kind === 'surah-list') {
    const rows = [
      { n: 1, lat: 'Al-Fātiḥa', fr: "L'Ouverture", ar: 'الفاتحة' },
      { n: 2, lat: 'Al-Baqara', fr: 'La Vache', ar: 'البقرة' },
      { n: 3, lat: "Āl ʿImrān", fr: "La Famille d'Imran", ar: 'آل عمران', highlight: true },
    ]
    return (
      <div style={cardStyle}>
        {rows.map((r, i) => (
          <div
            key={r.n}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 12px',
              background: r.highlight ? 'rgba(184,150,46,0.1)' : '#FFFFFF',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(184,150,46,0.12)' : undefined,
              borderLeft: r.highlight ? '3px solid #B8962E' : '3px solid transparent',
            }}
          >
            <span style={{ width: 18, fontSize: 13, color: '#B8962E', fontWeight: 700, textAlign: 'center' as const }}>
              {r.n}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#1A1410' }}>{r.lat}</div>
              <div style={{ fontSize: 10, color: '#9E9089', fontStyle: 'italic' as const }}>{r.fr}</div>
            </div>
            <span style={{ fontSize: 14, color: '#B8962E' }}>{r.ar}</span>
          </div>
        ))}
      </div>
    )
  }

  if (kind === 'verse-layout') {
    const words = [
      { phon: 'allāhu', fr: 'Dieu' },
      { phon: 'lā', fr: 'pas de' },
      { phon: 'ilāha', fr: 'divinité' },
      { phon: 'illā', fr: 'sauf' },
      { phon: 'huwa', fr: 'Lui' },
    ]
    return (
      <div style={{ ...cardStyle, padding: '14px 12px', border: '2px solid #B8962E', boxShadow: '0 0 0 4px rgba(184,150,46,0.18), 0 6px 18px rgba(184,150,46,0.15)' }}>
        <div style={{ textAlign: 'center' as const, fontSize: 22, color: '#8A7428', marginBottom: 12, lineHeight: 1.4, direction: 'rtl' as const, fontWeight: 400 }}>
          ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 0, fontSize: 9, color: '#6B5E52' }}>
          {words.map((w, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' as const, padding: '4px 2px', borderRight: i < words.length - 1 ? '1px solid rgba(184,150,46,0.15)' : 'none' }}>
              <div style={{ fontStyle: 'italic' as const, color: '#9E9089', marginBottom: 3 }}>{w.phon}</div>
              <div style={{ fontWeight: 600, color: '#1A1410' }}>{w.fr}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (kind === 'summary') {
    return (
      <div style={{ ...cardStyle, padding: '14px 12px' }}>
        <div style={{ fontSize: 18, color: '#8A7428', textAlign: 'center' as const, direction: 'rtl' as const, marginBottom: 10, fontWeight: 400, opacity: 0.55 }}>
          ٱللَّهُ لَآ إِلَـٰهَ
        </div>
        <div style={{ background: 'rgba(184,150,46,0.06)', borderLeft: '3px solid rgba(184,150,46,0.55)', borderRadius: '0 6px 6px 0', padding: '10px 12px' }}>
          <div style={{ fontSize: 10, color: '#5A4E42', fontStyle: 'italic' as const, lineHeight: 1.6 }}>
            Le verset proclame l&apos;<span style={{ color: '#B8962E', fontWeight: 700, fontStyle: 'normal' as const }}>unicité divine</span> et invite à méditer sur la Présence.
          </div>
        </div>
        <div style={{ marginTop: 9, fontSize: 8, color: '#9E9089', fontStyle: 'italic' as const, textAlign: 'center' as const, letterSpacing: '0.06em' }}>
          ↑ résumé du verset
        </div>
      </div>
    )
  }

  if (kind === 'word-tap') {
    return (
      <div style={{ ...cardStyle, padding: '18px 14px' }}>
        <div style={{ textAlign: 'center' as const, fontSize: 22, color: '#B8962E', marginBottom: 14, lineHeight: 1.4, direction: 'rtl' as const }}>
          ٱللَّهُ لَآ إِلَـٰهَ
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, alignItems: 'flex-end' }}>
          {[
            { phon: 'allāhu', ar: 'الله', fr: 'Dieu', active: true },
            { phon: 'lā', ar: 'لا', fr: 'pas de', active: false },
            { phon: 'ilāha', ar: 'إلٰه', fr: 'divinité', active: false },
          ].map((w, i) => (
            <div key={i} style={{ textAlign: 'center' as const }}>
              <div style={{ fontSize: 8, fontStyle: 'italic' as const, color: w.active ? '#B8962E' : '#6B5E52', marginBottom: 2 }}>
                {w.phon}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: w.active ? '#B8962E' : '#1A1410',
                  paddingBottom: 3,
                  borderBottom: w.active ? '2px solid #B8962E' : '1.5px solid rgba(184,150,46,0.4)',
                  background: w.active ? 'rgba(184,150,46,0.12)' : 'transparent',
                  borderRadius: 3,
                  padding: '2px 6px',
                }}
              >
                {w.fr}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' as const, fontSize: 9, color: '#B8962E', marginTop: 10, fontStyle: 'italic' as const }}>
          ↑ tap pour analyser
        </div>
      </div>
    )
  }

  if (kind === 'concepts') {
    return (
      <div style={{ ...cardStyle, padding: '14px 14px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, marginBottom: 12 }}>
          {['Adoration', 'Divinité', 'Détresse', 'Refuge'].map((c, i) => (
            <span
              key={c}
              style={{
                fontSize: 10,
                fontWeight: i === 1 ? 700 : 500,
                color: i === 1 ? '#B8962E' : '#1A1410',
                paddingBottom: 3,
                borderBottom: i === 1 ? '2.5px solid #B8962E' : '1.5px solid rgba(184,150,46,0.3)',
              }}
            >
              {c}
            </span>
          ))}
        </div>
        <div style={{ borderLeft: '3px solid #B8962E', paddingLeft: 8, marginTop: 6 }}>
          <div style={{ fontSize: 10, color: '#1A1410', fontWeight: 600 }}>
            Divinité <span style={{ color: '#B8962E', fontSize: 8 }}>RETENU</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: 'rgba(184,150,46,0.2)', position: 'relative' as const }}>
              <div style={{ position: 'absolute' as const, inset: 0, background: '#B8962E', borderRadius: 2 }} />
            </div>
            <span style={{ fontSize: 8, color: '#B8962E', fontWeight: 700 }}>40/40</span>
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'retenu') {
    const items = [
      { label: 'RETENU', color: '#B8962E', bg: 'rgba(184,150,46,0.1)', barW: '100%' },
      { label: 'PROBABLE', color: '#A89060', bg: 'rgba(184,150,46,0.05)', barW: '60%' },
      { label: 'EXCLU', color: '#9E9089', bg: '#FAFAFA', barW: '15%', faded: true },
    ]
    return (
      <div style={cardStyle}>
        {items.map((it, i) => (
          <div
            key={it.label}
            style={{
              padding: '10px 12px',
              background: it.bg,
              borderBottom: i < items.length - 1 ? '1px solid rgba(184,150,46,0.1)' : undefined,
              borderLeft: `3px solid ${it.color}`,
              opacity: it.faded ? 0.55 : 1,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#1A1410' }}>
                Concept {i + 1}
                <span style={{ marginLeft: 6, fontSize: 8, color: it.color, letterSpacing: '0.05em' }}>
                  {it.label}
                </span>
              </span>
            </div>
            <div style={{ height: 3, borderRadius: 2, background: 'rgba(184,150,46,0.15)', position: 'relative' as const }}>
              <div style={{ position: 'absolute' as const, top: 0, left: 0, height: '100%', width: it.barW, background: it.color, borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (kind === 'proof-ctx') {
    return (
      <div style={{ ...cardStyle, padding: '14px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <span style={{ fontSize: 10, color: '#1A1410', fontWeight: 700, fontFamily: "'Cormorant Garamond', serif" }}>Divinité</span>
          <span style={{ fontSize: 7, color: '#B8962E', fontWeight: 700, letterSpacing: '0.08em', padding: '1px 6px', border: '1px solid rgba(184,150,46,0.4)', borderRadius: 3 }}>RETENU</span>
        </div>
        <div style={{ background: 'rgba(184,150,46,0.06)', border: '1px solid rgba(184,150,46,0.25)', borderRadius: 6, padding: '10px 12px' }}>
          <div style={{ fontSize: 10, color: '#1A1410', fontStyle: 'italic' as const, lineHeight: 1.55, fontFamily: "'Cormorant Garamond', serif" }}>
            Sens retenu car le verset proclame{' '}
            <span style={{ color: '#B8962E', fontWeight: 700, fontStyle: 'normal' as const }}>l&apos;unicité absolue</span>{' '}
            de l&apos;Être divin.
          </div>
        </div>
        <div style={{ marginTop: 9, fontSize: 8, color: '#9E9089', fontStyle: 'italic' as const, textAlign: 'center' as const, letterSpacing: '0.06em' }}>
          ↑ pourquoi ce sens a été choisi
        </div>
      </div>
    )
  }

  if (kind === 'verses-refs') {
    return (
      <div style={{ ...cardStyle, padding: '14px 12px' }}>
        <div style={{ fontSize: 9, color: '#8A7428', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: 9, textAlign: 'center' as const }}>
          Autres versets · Divinité
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
          {['2:163', '2:255', '3:2', '3:18', '3:62', '20:14'].map((ref, i) => (
            <div
              key={ref}
              style={{
                padding: '6px 8px',
                border: i === 0 ? '1.5px solid #B8962E' : '1px solid rgba(184,150,46,0.3)',
                borderRadius: 4,
                background: i === 0 ? 'rgba(184,150,46,0.1)' : '#FFFFFF',
                fontSize: 10,
                fontWeight: 600,
                color: '#B8962E',
                textAlign: 'center' as const,
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: '0.02em',
              }}
            >
              {ref}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 9, fontSize: 8, color: '#9E9089', fontStyle: 'italic' as const, textAlign: 'center' as const, letterSpacing: '0.06em' }}>
          ↑ tape pour comparer
        </div>
      </div>
    )
  }

  if (kind === 'sections') {
    const sections = [
      { label: 'DÉMARCHE DE LA TRADUCTION' },
      { label: 'JUSTIFICATION DU CHOIX DES MOTS' },
      { label: 'CRITIQUE DES TRADUCTIONS CLASSIQUES' },
    ]
    return (
      <div style={cardStyle}>
        {sections.map((s, i) => (
          <div
            key={s.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 14px',
              borderBottom: i < sections.length - 1 ? '1px solid rgba(184,150,46,0.12)' : undefined,
            }}
          >
            <span style={{ color: '#B8962E', fontSize: 9 }}>▸</span>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#B8962E', letterSpacing: '0.08em', flex: 1 }}>
              {s.label}
            </span>
          </div>
        ))}
        <div style={{ padding: '8px 14px', background: 'rgba(184,150,46,0.04)', fontSize: 9, color: '#5A4E42', fontStyle: 'italic' as const, borderTop: '1px solid rgba(184,150,46,0.12)' }}>
          Hamidullah : « Allah! Pas de divinité que Lui... »
        </div>
      </div>
    )
  }

  if (kind === 'display-settings') {
    return (
      <div style={{ ...cardStyle, padding: '12px 12px' }}>
        {/* Header mockup avec le bouton ≡ */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', background: '#FFFFFF', border: '1px solid rgba(184,150,46,0.2)', borderRadius: '8px', marginBottom: 8 }}>
          <div style={{ fontSize: 9, color: '#3D3228', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.1em' }}>UN CORAN ARAB</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {/* Le bouton ≡ — entouré pour le mettre en avant */}
            <div style={{ width: 22, height: 22, borderRadius: '50%', border: '1.5px solid #B8962E', background: 'rgba(184,150,46,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B8962E', boxShadow: '0 0 0 3px rgba(184,150,46,0.20)' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="14" y2="12" />
                <line x1="4" y1="18" x2="18" y2="18" />
              </svg>
            </div>
            <div style={{ fontSize: 8, color: '#B8962E', padding: '2px 6px', border: '1px solid rgba(184,150,46,0.3)', borderRadius: 999 }}>Tutoriel</div>
          </div>
        </div>
        {/* Flèche vers le panneau */}
        <div style={{ textAlign: 'center' as const, fontSize: 10, color: '#B8962E', marginBottom: 4 }}>↓</div>
        {/* Mini popover style */}
        <div style={{ background: '#FFFCF6', border: '1px solid rgba(184,150,46,0.32)', borderRadius: '10px', padding: '10px 12px', boxShadow: '0 4px 12px rgba(184,150,46,0.12)' }}>
          <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, #B8962E, transparent)', marginBottom: '6px', borderRadius: '1px' }} />
          <div style={{ fontSize: 9, fontWeight: 700, color: '#8A7428', letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: 6, fontStyle: 'italic' as const }}>✦ Affichage</div>
          {[
            { label: 'Texte arabe', on: true },
            { label: 'Phonétique', on: false },
            { label: 'Sections', on: true },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3px 0', fontSize: 10, color: '#3D3228', fontFamily: "'Cormorant Garamond', serif" }}>
              <span>{row.label}</span>
              <span style={{ width: 22, height: 12, borderRadius: 6, background: row.on ? 'linear-gradient(135deg, #C9A23A, #B8962E)' : 'rgba(184,150,46,0.20)', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, top: 2, left: row.on ? 12 : 2, width: 8, height: 8, borderRadius: '50%', background: '#FFFFFF', boxShadow: '0 1px 2px rgba(0,0,0,0.18)' }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (kind === 'verse-toggles') {
    return (
      <div style={{ ...cardStyle, padding: '14px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, gap: 6 }}>
          <span style={{ fontSize: 11, color: '#3D3228', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            <span style={{ color: '#B8962E', marginRight: 4 }}>✦</span>Sourate 3, Signe 2
          </span>
          <div style={{ display: 'flex', gap: 4 }}>
            {[
              { label: 'Arabe', on: true },
              { label: 'Phon', on: false },
              { label: 'Sect', on: true },
            ].map((row, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 6px', border: '1px solid rgba(184,150,46,0.22)', borderRadius: 999, fontSize: 8, color: row.on ? '#5A4E42' : '#9E9089', fontFamily: "'Cormorant Garamond', serif" }}>
                <span>{row.label}</span>
                <span style={{ width: 16, height: 9, borderRadius: 4.5, background: row.on ? 'linear-gradient(135deg, #C9A23A, #B8962E)' : 'rgba(184,150,46,0.20)', position: 'relative' as const, display: 'inline-block' }}>
                  <span style={{ position: 'absolute' as const, top: 1.5, left: row.on ? 8.5 : 1.5, width: 6, height: 6, borderRadius: '50%', background: '#FFFFFF' }} />
                </span>
              </span>
            ))}
          </div>
        </div>
        <div style={{ height: 1, background: 'rgba(184,150,46,0.2)', marginBottom: 8 }} />
        <div style={{ fontSize: 9, color: '#6B5E52', fontStyle: 'italic' as const, textAlign: 'center' as const }}>↑ uniquement pour ce verset</div>
      </div>
    )
  }

  /* ═══ LA NOTE CONTEXTUELLE ═══
     Trois lignes, la dernière en italique : la maquette montre la forme de
     la note plutôt que d'en écrire le contenu. */
  if (kind === 'note') {
    return (
      <div style={{ ...cardStyle, padding: '14px 12px' }}>
        <div style={{ background: 'rgba(180,165,120,0.10)', border: '1px solid rgba(180,165,120,0.30)', borderLeft: '4px solid rgba(180,165,120,0.65)', borderRadius: '0 8px 8px 0', overflow: 'hidden' as const }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', fontSize: 8.5, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#7A6A38', fontWeight: 700 }}>
            <span><span style={{ color: '#A8902E', marginRight: 4 }}>✦</span>Note contextuelle</span>
            <span style={{ opacity: 0.85 }}>▾</span>
          </div>
          <div style={{ borderTop: '1px dashed rgba(180,165,120,0.30)', padding: '9px 10px', display: 'flex', flexDirection: 'column' as const, gap: 7 }}>
            {[
              { txt: 'Où le verset tombe dans la sourate, à qui il parle.', it: false },
              { txt: "Ce que disait celui d'avant, et en quoi celui-ci répond.", it: false },
              { txt: "Un fait du texte qu'on risque de ne pas voir.", it: true },
            ].map((l, i) => (
              <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                <span style={{ color: '#B8962E', fontSize: 8, lineHeight: 1.7, flexShrink: 0 }}>✦</span>
                <span style={{ fontSize: 9.5, lineHeight: 1.5, color: l.it ? '#7A6A38' : '#5A4E42', fontStyle: l.it ? ('italic' as const) : ('normal' as const) }}>{l.txt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  /* ═══ LA PAGE DE LIVRE ═══ le crème, les pastilles de signe, le pied. */
  if (kind === 'book-page') {
    return (
      <div style={{ ...cardStyle, background: '#FFFBF0', padding: 0 }}>
        <div style={{ padding: '12px 12px 4px', textAlign: 'center' as const }}>
          <div style={{ fontSize: 7.5, letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: '#B8962E', fontWeight: 600 }}>Sourate 3</div>
          <div style={{ fontSize: 20, color: '#8A6E1F', direction: 'rtl' as const, margin: '3px 0 2px' }}>آل عمران</div>
          <div style={{ fontSize: 8, letterSpacing: '0.16em', color: '#8A6E1F' }}>ALI &apos;IMRAN</div>
        </div>
        <div style={{ padding: '6px 14px 10px', display: 'flex', flexDirection: 'column' as const, gap: 7 }}>
          {['Alif, Lām, Mīm.', "Dieu, il n'y a de divinité que Lui, le Vivant.", "Il a fait descendre sur toi l'écriture avec la vérité."].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, width: 15, height: 15, borderRadius: '50%', border: '1px solid rgba(184,150,46,0.55)', color: '#8A6E1F', fontSize: 8.5, fontWeight: 600, display: 'grid', placeItems: 'center' as const }}>{i + 1}</span>
              <span style={{ fontSize: 9.5, lineHeight: 1.45, color: '#1A1410' }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(184,150,46,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px' }}>
          {['‹', '›'].map((c, i) => (
            <span key={c} style={{ order: i === 0 ? 0 : 2, width: 17, height: 17, borderRadius: '50%', border: '1px solid rgba(184,150,46,0.35)', color: '#8A6E1F', fontSize: 10, display: 'grid', placeItems: 'center' as const }}>{c}</span>
          ))}
          <span style={{ order: 1, fontSize: 8.5, fontStyle: 'italic' as const, letterSpacing: '0.14em', color: '#6B5E52' }}>page 1 / 28</span>
        </div>
      </div>
    )
  }

  /* ═══ LE BANDEAU ═══ les trois états de pastille, côte à côte. */
  if (kind === 'book-bandeau') {
    const beads = [
      { n: 1, state: 'ready' }, { n: 2, state: 'pale' }, { n: 3, state: 'current' },
      { n: 4, state: 'ready' }, { n: 5, state: 'pale' }, { n: 6, state: 'pale' }, { n: 7, state: 'pale' },
    ]
    return (
      <div style={{ ...cardStyle, background: '#FFFBF0', padding: '12px 8px' }}>
        <div style={{ position: 'relative' as const, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
          <span style={{ position: 'absolute' as const, left: 10, right: 10, top: '50%', height: 1, background: 'rgba(184,150,46,0.22)' }} />
          {beads.map(b => {
            const ready = b.state === 'ready', cur = b.state === 'current'
            return (
              <span
                key={b.n}
                style={{
                  position: 'relative' as const,
                  width: cur ? 25 : ready ? 23 : 18,
                  height: cur ? 25 : ready ? 23 : 18,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center' as const,
                  fontSize: cur || ready ? 10.5 : 8.5,
                  fontWeight: ready || cur ? 700 : 500,
                  border: `1px solid ${cur ? '#8A6E1F' : ready ? 'rgba(184,150,46,0.85)' : 'rgba(184,150,46,0.16)'}`,
                  background: cur
                    ? 'linear-gradient(150deg, #EFD98C 0%, #C9A23A 45%, #8A6E1F 100%)'
                    : ready ? 'linear-gradient(180deg, rgba(184,150,46,0.20), rgba(184,150,46,0.06)), #FFFBF0' : '#FFFBF0',
                  color: cur ? '#FFFBF0' : ready ? '#8A6E1F' : 'rgba(107,94,82,0.34)',
                  boxShadow: ready ? '0 0 0 3px rgba(184,150,46,0.11)' : undefined,
                }}
              >
                {b.n}
              </span>
            )
          })}
        </div>
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column' as const, gap: 4, fontSize: 8.5, color: '#6B5E52', fontStyle: 'italic' as const }}>
          <div><span style={{ color: '#8A6E1F', fontWeight: 700, fontStyle: 'normal' as const }}>3</span> — celle que tu lis</div>
          <div><span style={{ color: '#8A6E1F', fontWeight: 700, fontStyle: 'normal' as const }}>1, 4</span> — traduites, tu peux y aller</div>
          <div><span style={{ color: 'rgba(107,94,82,0.5)', fontStyle: 'normal' as const }}>2, 5, 6…</span> — pas encore écrites</div>
        </div>
      </div>
    )
  }

  /* ═══ LES GESTES ═══ les trois bandes de la page, dont celle du milieu
     qui ne fait rien — c'est elle qu'il faut faire comprendre. */
  if (kind === 'book-gestures') {
    const zones = [
      { txt: 'page\nprécédente', live: true },
      { txt: 'rien\n(vise un signe)', live: false },
      { txt: 'page\nsuivante', live: true },
    ]
    return (
      <div style={{ ...cardStyle, background: '#FFFBF0', padding: '12px 10px' }}>
        <div style={{ display: 'flex', gap: 4, height: 96 }}>
          {zones.map((z, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                borderRadius: 6,
                border: `1px ${z.live ? 'solid' : 'dashed'} rgba(184,150,46,${z.live ? 0.5 : 0.25})`,
                background: z.live ? 'rgba(184,150,46,0.09)' : 'transparent',
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                textAlign: 'center' as const,
                fontSize: 8,
                lineHeight: 1.35,
                whiteSpace: 'pre-line' as const,
                color: z.live ? '#8A6E1F' : 'rgba(107,94,82,0.55)',
                fontStyle: z.live ? ('normal' as const) : ('italic' as const),
              }}
            >
              <span style={{ fontSize: 15, opacity: z.live ? 1 : 0.35 }}>{z.live ? (i === 0 ? '‹' : '›') : '·'}</span>
              {z.txt}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, textAlign: 'center' as const, fontSize: 8.5, color: '#6B5E52', fontStyle: 'italic' as const }}>
          ou balaye <span style={{ color: '#8A6E1F' }}>←</span> <span style={{ color: '#8A6E1F' }}>→</span> n&apos;importe où
        </div>
      </div>
    )
  }

  if (kind === 'final') {
    return (
      <div style={{ ...cardStyle, padding: '24px 16px', textAlign: 'center' as const, background: 'linear-gradient(135deg, #FFFCF6 0%, #F3EDD8 100%)' }}>
        <div style={{ fontSize: 32, color: '#B8962E', marginBottom: 6 }}>✦</div>
        <div style={{ fontSize: 11, color: '#8A7428', letterSpacing: '0.15em', textTransform: 'uppercase' as const, fontWeight: 700, marginBottom: 8 }}>
          Bonne méditation
        </div>
        <div style={{ height: 1, width: 30, background: 'rgba(184,150,46,0.4)', margin: '8px auto' }} />
        <div style={{ fontSize: 10, color: '#9E9089', fontStyle: 'italic' as const, lineHeight: 1.5 }}>
          La traduction n'est jamais<br/>le dernier mot
        </div>
      </div>
    )
  }

  return null
}

interface Props {
  onClose: () => void
}

export default function MobileTutorial({ onClose }: Props) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const isLast = step === CARDS.length - 1
  const card = CARDS[step]

  // Bloque le scroll du body pendant le tuto.
  // Cleanup remet TOUJOURS overflow='' pour ne pas laisser le body bloqué
  // si un autre composant verrouille entre-temps.
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const goNext = useCallback(() => {
    if (isLast) {
      // Termine le tuto. Si on n'est pas sur la home, redirige vers la home
      // pour que l'utilisateur tombe sur la liste des sourates explorables.
      // Si déjà sur la home, on scroll juste vers la grille des sourates.
      onClose()
      if (typeof window !== 'undefined') {
        if (window.location.pathname !== '/') {
          router.push('/')
        } else {
          // Scroll vers la grille des sourates après un court délai pour laisser le tuto se fermer
          setTimeout(() => {
            const grid = document.querySelector('[data-tour-surah-grid="1"]') as HTMLElement | null
            if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 100)
        }
      }
      return
    }
    setDirection('next')
    setStep(s => s + 1)
  }, [isLast, onClose, router])

  const goPrev = () => {
    if (step === 0) return
    setDirection('prev')
    setStep(s => s - 1)
  }

  // Highlight d'expression dans le body (couleur or)
  const renderBody = (text: string, highlight?: string) => {
    if (!highlight) return text
    const idx = text.indexOf(highlight)
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <span style={{ color: '#B8962E', fontWeight: 600 }}>{highlight}</span>
        {text.slice(idx + highlight.length)}
      </>
    )
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col mt-overlay-enter"
      style={{
        background: 'linear-gradient(180deg, #FFFCF6 0%, #FAF7F2 55%, #F5EFE3 100%)',
      }}
    >
      {/* Bandeau or décoratif en haut — signature visuelle cohérente */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(to right, transparent 0%, #C9A23A 25%, #B8962E 50%, #C9A23A 75%, transparent 100%)',
          opacity: 0.85,
          zIndex: 1,
        }}
      />
      {/* Bandeau or décoratif en bas — symétrie / signature manuscrit */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(to right, transparent 0%, rgba(184,150,46,0.45) 30%, rgba(184,150,46,0.7) 50%, rgba(184,150,46,0.45) 70%, transparent 100%)',
          opacity: 0.8,
          zIndex: 1,
        }}
      />

      {/* Subtil dégradé radial décoratif en haut/bas */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'radial-gradient(ellipse at top, rgba(184,150,46,0.06), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mtSlideInRight {
          from { transform: translateX(28px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes mtSlideInLeft {
          from { transform: translateX(-28px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes mtFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes mtOverlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .mt-card-next { animation: mtSlideInRight 360ms cubic-bezier(0.16, 1, 0.3, 1); }
        .mt-card-prev { animation: mtSlideInLeft 360ms cubic-bezier(0.16, 1, 0.3, 1); }
        .mt-fadein { animation: mtFadeIn 320ms cubic-bezier(0.16, 1, 0.3, 1); }
        .mt-overlay-enter { animation: mtOverlayIn 240ms ease-out; }
        @keyframes mtStarSpin {
          from { transform: rotate(-180deg); opacity: 0; }
          to { transform: rotate(0deg); opacity: 1; }
        }
        .mt-card-star { animation: mtStarSpin 600ms cubic-bezier(0.16, 1, 0.3, 1) both; }
        .mt-step-dot {
          transition: width 360ms cubic-bezier(0.16, 1, 0.3, 1), background 320ms ease;
        }
        .mt-quit-btn {
          transition: all 220ms ease;
        }
        .mt-quit-btn:hover, .mt-quit-btn:focus-visible {
          background: rgba(184, 150, 46, 0.08) !important;
          border-color: rgba(184, 150, 46, 0.5) !important;
          color: #8A7428 !important;
        }
        .mt-prev-btn {
          transition: all 220ms ease;
        }
        .mt-prev-btn:not(:disabled):hover, .mt-prev-btn:not(:disabled):focus-visible {
          background: rgba(184, 150, 46, 0.08) !important;
          border-color: rgba(184, 150, 46, 0.5) !important;
        }
        .mt-next-btn {
          transition: box-shadow 240ms ease, transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mt-next-btn:hover, .mt-next-btn:focus-visible {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(184, 150, 46, 0.42), 0 2px 6px rgba(184, 150, 46, 0.18) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .mt-card-next, .mt-card-prev, .mt-fadein, .mt-overlay-enter, .mt-card-star {
            animation: none !important;
          }
          .mt-step-dot, .mt-next-btn, .mt-prev-btn, .mt-quit-btn {
            transition: none !important;
          }
          .mt-next-btn:hover, .mt-next-btn:focus-visible {
            transform: none;
          }
        }
      ` }} />

      {/* Header — step indicator + skip */}
      <div className="relative flex items-center justify-between px-5 pt-6 pb-3 mt-fadein" style={{ zIndex: 2 }}>
        {/* Step dots + compteur */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            {CARDS.map((_, i) => (
              <div
                key={i}
                className="mt-step-dot rounded-full"
                style={{
                  width: i === step ? 22 : 5,
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
              fontSize: '10.5px',
              letterSpacing: '0.06em',
              margin: 0,
              lineHeight: 1,
            }}
          >
            Étape {step + 1} sur {CARDS.length}
          </p>
        </div>

        {/* Skip button */}
        <button
          onClick={onClose}
          className="mt-quit-btn inline-flex items-center gap-1 rounded-full"
          style={{
            padding: '5px 13px 5px 11px',
            background: 'transparent',
            border: '1px solid rgba(184,150,46,0.28)',
            color: '#8A7E72',
            fontSize: '10.5px',
            letterSpacing: '0.08em',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ fontSize: '10px' }}>✕</span>
          <span>quitter</span>
        </button>
      </div>

      {/* Card content — slide animation on step change */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 sm:px-8 overflow-hidden" style={{ zIndex: 2 }}>
        <div
          key={step}
          className={direction === 'next' ? 'mt-card-next' : 'mt-card-prev'}
          style={{ width: '100%', maxWidth: 460 }}
        >
          {/* Illustration mock-up de l'app */}
          {card.illustration && (
            <div className="mb-6">
              <Illustration kind={card.illustration} />
            </div>
          )}

          {/* Title */}
          <h2
            className="text-center"
            style={{
              color: '#1A1410',
              fontSize: 'clamp(1.5rem, 6vw, 1.85rem)',
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1.15,
              margin: '0 0 14px 0',
            }}
          >
            {card.title}
          </h2>

          {/* Ornement décoratif — cohérent avec le verset Khalifa, étoile pivote à chaque carte */}
          <div
            aria-hidden="true"
            className="flex items-center justify-center mx-auto mb-5"
            style={{ color: '#B8962E', opacity: 0.65, gap: '10px' }}
          >
            <div className="h-px" style={{ width: '32px', background: 'rgba(184,150,46,0.4)' }} />
            <span key={`star-${step}`} className="mt-card-star" style={{ fontSize: '12px', display: 'inline-block' }}>✦</span>
            <div className="h-px" style={{ width: '32px', background: 'rgba(184,150,46,0.4)' }} />
          </div>

          {/* Body */}
          <p
            className="text-center mx-auto"
            style={{
              color: '#5A4E42',
              fontSize: 'clamp(13.5px, 4vw, 15px)',
              lineHeight: 1.7,
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '0.01em',
              maxWidth: '32rem',
              margin: '0 auto',
            }}
          >
            {renderBody(card.body, card.highlight)}
          </p>
        </div>
      </div>

      {/* Bottom nav — prev / next */}
      <div className="relative flex items-center justify-between gap-3 px-5 pb-7 pt-4 mt-fadein" style={{ zIndex: 2 }}>
        <button
          onClick={goPrev}
          disabled={step === 0}
          className="mt-prev-btn rounded-full"
          style={{
            padding: '12px 22px',
            border: '1px solid rgba(184,150,46,0.32)',
            color: step === 0 ? '#C8BCAD' : '#6B5E52',
            cursor: step === 0 ? 'default' : 'pointer',
            background: step === 0 ? 'transparent' : 'rgba(255,253,247,0.5)',
            fontSize: '13px',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            letterSpacing: '0.05em',
            minHeight: '44px',
            opacity: step === 0 ? 0.4 : 1,
          }}
        >
          ← Précédent
        </button>

        <button
          onClick={goNext}
          className="mt-next-btn rounded-full"
          style={{
            padding: '12px 26px',
            background: 'linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%)',
            color: '#FFFCF6',
            border: '1px solid rgba(158,126,31,0.5)',
            boxShadow: '0 3px 12px rgba(184,150,46,0.35), 0 1px 2px rgba(184,150,46,0.18)',
            fontSize: '14px',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            letterSpacing: '0.05em',
            textShadow: '0 1px 1px rgba(80,55,10,0.25)',
            minHeight: '44px',
            cursor: 'pointer',
          }}
        >
          {isLast ? 'Terminer ✦' : 'Suivant →'}
        </button>
      </div>
    </div>
  )
}
