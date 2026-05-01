/**
 * Skeleton affiché par Next.js pendant le chargement serveur de la home.
 * Donne un feedback visuel immédiat quand l'utilisateur clique sur le logo
 * pour retourner à l'accueil (la fetch des sourates analysées peut prendre
 * quelques secondes sur mobile).
 */
export default function Loading() {
  return (
    <div className="home-loading space-y-9 sm:space-y-10 pb-20">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes homeLoadingPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.85; }
        }
        .home-loading .skel {
          background: linear-gradient(90deg, rgba(184,150,46,0.08) 0%, rgba(184,150,46,0.18) 50%, rgba(184,150,46,0.08) 100%);
          background-size: 200% 100%;
          border-radius: 6px;
          animation: homeLoadingPulse 1.6s ease-in-out infinite;
        }
      ` }} />

      {/* HERO skeleton */}
      <section className="text-center pt-4 sm:pt-5">
        <div className="skel mx-auto" style={{ width: 'clamp(180px, 60vw, 360px)', height: 'clamp(36px, 7vw, 56px)', marginBottom: '14px' }} />
        <div className="skel mx-auto" style={{ width: '300px', height: '6px', marginBottom: '14px', borderRadius: '3px' }} />
        <div className="skel mx-auto" style={{ width: '220px', height: '14px' }} />
      </section>

      {/* VERSET KHALIFA skeleton */}
      <section className="max-w-2xl mx-auto text-center px-4">
        <div className="skel mx-auto" style={{ width: 'clamp(220px, 70vw, 360px)', height: '36px', marginBottom: '12px' }} />
        <div className="skel mx-auto" style={{ width: '260px', height: '20px', marginBottom: '8px' }} />
        <div className="skel mx-auto" style={{ width: '120px', height: '12px' }} />
      </section>

      {/* SOURATES heading skeleton */}
      <section className="max-w-4xl mx-auto px-1 sm:px-0">
        <div className="text-center mb-5">
          <div className="skel mx-auto" style={{ width: '120px', height: '6px', marginBottom: '10px', borderRadius: '3px' }} />
          <div className="skel mx-auto" style={{ width: '180px', height: '24px', marginBottom: '8px' }} />
          <div className="skel mx-auto" style={{ width: '240px', height: '14px' }} />
        </div>

        {/* Search bar skeleton */}
        <div className="skel mb-6" style={{ width: '100%', height: '50px', borderRadius: '12px' }} />

        {/* Liste des sourates skeleton (8 lignes) */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(184,150,46,0.18)',
            boxShadow: '0 1px 3px rgba(120,90,30,0.04), 0 4px 14px rgba(120,90,30,0.04)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div
              key={i}
              className="flex items-center gap-3 sm:gap-4"
              style={{
                padding: '14px 16px',
                borderBottom: i < 8 ? '1px solid rgba(184,150,46,0.1)' : 'none',
              }}
            >
              <div className="skel" style={{ width: '20px', height: '18px', flexShrink: 0 }} />
              <div className="flex-1 min-w-0">
                <div className="skel" style={{ width: '60%', height: '14px', marginBottom: '4px' }} />
                <div className="skel" style={{ width: '40%', height: '11px' }} />
              </div>
              <div className="skel" style={{ width: '50px', height: '11px', flexShrink: 0 }} />
              <div className="skel" style={{ width: '60px', height: '20px', flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </section>

      {/* Texte discret de chargement */}
      <p
        className="italic text-center"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '12px',
          color: '#8A7E72',
          letterSpacing: '0.08em',
          marginTop: '24px',
        }}
      >
        <span aria-hidden="true" style={{ color: '#B8962E', marginRight: '6px', fontStyle: 'normal' }}>✦</span>
        Chargement…
      </p>
    </div>
  )
}
