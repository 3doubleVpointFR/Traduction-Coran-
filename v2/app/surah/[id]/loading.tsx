/**
 * Skeleton affiché par Next.js pendant le chargement serveur de la sourate.
 * Donne un feedback visuel immédiat à l'utilisateur (au lieu d'un écran blanc),
 * surtout sur mobile où le fetch des analyses peut prendre quelques secondes.
 */
export default function Loading() {
  return (
    <div className="surah-loading">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes surahLoadingPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.85; }
        }
        .surah-loading .skel {
          background: linear-gradient(90deg, rgba(184,150,46,0.08) 0%, rgba(184,150,46,0.18) 50%, rgba(184,150,46,0.08) 100%);
          background-size: 200% 100%;
          border-radius: 6px;
          animation: surahLoadingPulse 1.6s ease-in-out infinite;
        }
        .surah-loading .skel-card {
          background: #FFFFFF;
          border: 1px solid rgba(184,150,46,0.25);
          box-shadow: 0 2px 12px rgba(184,150,46,0.10);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 16px;
        }
      ` }} />

      {/* Header de sourate (skeleton) */}
      <header className="text-center pt-4 pb-4 mb-5">
        <div className="skel mx-auto" style={{ width: '90px', height: '12px', marginBottom: '12px' }} />
        <div className="skel mx-auto" style={{ width: '180px', height: '40px', marginBottom: '16px' }} />
        <div className="skel mx-auto" style={{ width: '160px', height: '6px', marginBottom: '16px', borderRadius: '3px' }} />
        <div className="skel mx-auto" style={{ width: '220px', height: '18px', marginBottom: '8px' }} />
        <div className="skel mx-auto" style={{ width: '90px', height: '10px' }} />
      </header>

      {/* Carte de verset skeleton (3 cards visibles) */}
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="skel-card">
            <div className="flex items-center justify-between" style={{ marginBottom: '14px' }}>
              <div className="skel" style={{ width: '140px', height: '14px' }} />
              <div className="skel" style={{ width: '180px', height: '22px', borderRadius: '999px' }} />
            </div>
            <div className="skel" style={{ width: '100%', height: '60px', marginBottom: '14px', borderRadius: '0 8px 8px 0' }} />
            <div className="skel" style={{ width: '80%', height: '36px', margin: '0 auto 12px', borderRadius: '4px' }} />
            <div className="flex justify-center gap-3" style={{ marginBottom: '12px' }}>
              {[1, 2, 3, 4, 5].map(j => (
                <div key={j} className="skel" style={{ width: '50px', height: '40px' }} />
              ))}
            </div>
            <div className="skel" style={{ width: '100%', height: '12px', marginBottom: '8px' }} />
            <div className="skel" style={{ width: '80%', height: '12px' }} />
          </div>
        ))}
      </div>

      {/* Texte discret pour signaler le chargement */}
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
        Préparation de la sourate…
      </p>
    </div>
  )
}
