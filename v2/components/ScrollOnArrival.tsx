'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

/* ═══════════════════════════════════════════════════════════════════════════
   ScrollOnArrival — arriver EN HAUT de la page, sans animation.

   Le site porte `scroll-behavior: smooth` sur `html`. C'est voulu pour les
   ancres, mais ça transforme aussi en défilement ANIMÉ le retour en haut
   qu'exécute chaque navigation — celui de Next comme le `scrollTo(0, 0)` que
   certaines vues font au montage. Une animation, ça s'interrompt : il suffit
   que la page change de hauteur pendant qu'elle court (une mise en page qui
   se pose, une pagination qui se calcule, une barre d'URL de téléphone qui se
   rétracte) pour qu'elle s'arrête en chemin.

   On restait alors à mi-hauteur, la barre du site hors champ et toute la page
   décalée — et sur une page qui ne défile pas, impossible de remonter : seul
   un rafraîchissement s'en sortait. Le symptôme a d'abord été vu sur la vue
   livre, puis sur l'accueil : ce n'était pas une affaire de vue, c'était le
   défilement animé.

   D'où un saut sec, réaffirmé sur l'image suivante puis une fois la mise en
   page stabilisée.

   ⚠️ Deux réserves :
   — une ancre dans l'URL (`#verse-3-42`) veut dire que le lecteur vise un
     endroit précis : on ne lui reprend pas la main ;
   — l'effet est calé sur le CHEMIN seul. La vue analyse change de page par la
     requête (`?page=2`) sans changer de chemin, donc son propre défilement
     vers un verset n'est jamais écrasé.
   ═══════════════════════════════════════════════════════════════════════════ */
export default function ScrollOnArrival() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (window.location.hash) return

    const jump = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
    jump()
    const raf = requestAnimationFrame(jump)
    const late = window.setTimeout(jump, 300)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(late)
    }
  }, [pathname])

  return null
}
