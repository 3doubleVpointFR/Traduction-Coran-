const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1018, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('SKIP '+key+': not found in word_analyses'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('SKIP '+key+': already done'); done++; return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;const c=r.concepts;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+c.length+' concepts ('+c.join(', ')+') — reste '+(total-done))} }

async function run() {
  let r

  // 1. nm (نمم) — calomnier, médire, rapporter, orner
  r=await ins('nm',[
    {sense:'calomnier',concept:'Calomnie/Médisance',description:"Acte extérieur de rapporter des propos pour nuire et semer la discorde. La calomnie sort du calomniateur et atteint celui qui est visé — c'est directionnel et destructeur. Elle brise les liens entre les gens en déformant la parole, c'est un acte ponctuel qui peut avoir des effets permanents."},
    {sense:'médire',concept:'Calomnie/Médisance',description:''},
    {sense:'rapporter des propos',concept:'Calomnie/Médisance',description:''},
    {sense:'semer la discorde',concept:'Calomnie/Médisance',description:''},
    {sense:'embellir la parole avec du mensonge',concept:'Calomnie/Médisance',description:''},
    {sense:'variéger',concept:'Ornement/Marquage',description:"Acte extérieur de décorer, de marquer avec des motifs. L'ornement est une action qui sort de l'artisan et atteint la surface — c'est directionnel et durable. Le marquage laisse une trace permanente sur ce qui est orné."},
    {sense:'décorer',concept:'Ornement/Marquage',description:''},
    {sense:'son de la corde d\'arc',concept:'Divers',description:'Son produit par la vibration de la corde.'},
    {sense:'sutures du crâne',concept:'Divers',description:'Lignes sur le crâne ressemblant à de l\'écriture.'},
  ]);log(r,'nm')

  // 2. anem (أنعم) — bienfait, faveur, douceur, jouissance
  r=await ins('anem',[
    {sense:'vie douce et aisée',concept:'Bienfait/Faveur',description:"État de celui qui reçoit les bienfaits de Dieu — vie aisée, abondante, agréable. Le bienfait sort de celui qui donne et atteint celui qui reçoit — c'est directionnel du bienfaiteur vers le bénéficiaire. C'est un état qui peut être permanent tant que le don continue."},
    {sense:'accorder un bienfait',concept:'Bienfait/Faveur',description:''},
    {sense:'bénédiction',concept:'Bienfait/Faveur',description:''},
    {sense:'faveur divine',concept:'Bienfait/Faveur',description:''},
    {sense:'oui',concept:'Affirmation',description:"Particule d'acquiescement et d'approbation. L'affirmation est un acte ponctuel de la parole qui valide ce qui a été dit — elle sort du locuteur et atteint l'interlocuteur."},
    {sense:'être doux',concept:'Douceur/Délicatesse',description:"État intérieur de ce qui est tendre, souple, agréable au toucher ou à la vie. La douceur est une qualité permanente qui reste dans ce qui la possède — elle ne sort pas vers l'autre mais se laisse percevoir."},
    {sense:'jouir de la vie',concept:'Douceur/Délicatesse',description:''},
    {sense:'bétail',concept:'Bétail/Richesse',description:"Les bêtes que l'on possède — chameaux, bovins, ovins. Le bétail est une richesse permanente et tangible, signe de prospérité."},
    {sense:'autruche',concept:'Divers',description:'Grand oiseau incapable de voler.'},
  ]);log(r,'anem')

  // 3. mtn (متن) — dos, force, solidité, fermenter
  r=await ins('mtn',[
    {sense:'dos',concept:'Dos/Support',description:"La partie postérieure du corps, les deux masses musculaires de part et d'autre de la colonne. Le dos est le support permanent du corps — il porte et soutient. C'est une réalité physique qui reste dans celui qui la possède."},
    {sense:'côtés du dos',concept:'Dos/Support',description:''},
    {sense:'rendre fort',concept:'Force/Solidité',description:"Acte extérieur de consolider, de rendre solide et résistant. La force sort de l'action de renforcement et atteint ce qui est renforcé — c'est directionnel et crée un état permanent de solidité."},
    {sense:'être solide',concept:'Force/Solidité',description:''},
    {sense:'ferme',concept:'Force/Solidité',description:''},
    {sense:'cordes de tente',concept:'Divers',description:'Les fils et cordes qui maintiennent la tente — extension du sens de solidité.'},
  ]);log(r,'mtn')

  // 4. nna (نوى) — intention, noyau, direction
  r=await ins('nna',[
    {sense:'avoir l\'intention',concept:'Intention/Dessein',description:"Acte intérieur de diriger sa volonté vers un but. L'intention est un mouvement de l'âme qui précède l'action — elle reste dans celui qui l'a formée tant qu'elle n'est pas réalisée. C'est le point de départ invisible de tout acte, permanent dans la résolution."},
    {sense:'projeter',concept:'Intention/Dessein',description:''},
    {sense:'se diriger vers',concept:'Intention/Dessein',description:''},
    {sense:'direction du voyage',concept:'Direction/Destination',description:"Le lieu vers lequel on se dirige, le but du déplacement. La direction sort du voyageur et pointe vers la destination — c'est directionnel par essence. Elle peut être ponctuelle (un voyage) ou permanente (une orientation de vie)."},
    {sense:'se déplacer d\'un pays à un autre',concept:'Direction/Destination',description:''},
    {sense:'noyau de datte',concept:'Noyau/Graine',description:"La partie dure au centre du fruit qui contient le germe de la vie future. Le noyau est permanent et résistant — il protège ce qui est à l'intérieur."},
  ]);log(r,'nna')

  // 5. dhuh (ضحو) — matin, soleil, apparaître, sacrifice
  r=await ins('dhuh',[
    {sense:'apparaître au soleil',concept:'Clarté/Apparition',description:"Acte de devenir visible sous l'effet de la lumière solaire. L'apparition est un passage de l'invisible au visible — c'est directionnel de l'intérieur vers l'extérieur. C'est ponctuel dans le moment mais révèle une réalité permanente."},
    {sense:'être exposé au soleil',concept:'Clarté/Apparition',description:''},
    {sense:'matinée (duha)',concept:'Clarté/Apparition',description:''},
    {sense:'plein jour',concept:'Clarté/Apparition',description:''},
    {sense:'manger le matin',concept:'Repas/Temps',description:"Acte de prendre le repas du matin, lié au temps de la matinée. C'est un acte ponctuel et récurrent, lié au cycle du jour."},
    {sense:'paître le matin',concept:'Repas/Temps',description:''},
    {sense:'sacrifier une bête (udhiya)',concept:'Sacrifice',description:"Acte extérieur d'immoler un animal au moment prescrit. Le sacrifice sort de celui qui sacrifie et atteint l'animal — c'est directionnel et ponctuel. Le sacrifice du matin de l'Aïd est lié au temps de la duha."},
    {sense:'lieu exposé au soleil',concept:'Divers',description:'Terrain découvert sans ombre.'},
  ]);log(r,'dhuh')

  // 6. kny (كني) — surnommer, allusion, métonymie
  r=await ins('kny',[
    {sense:'surnommer',concept:'Surnom/Désignation',description:"Acte extérieur de désigner quelqu'un par un surnom de parenté (Abou, Oum). Le surnom sort de celui qui nomme et atteint celui qui est nommé — c'est directionnel et crée une identité permanente. Le surnom relie la personne à sa descendance ou à une qualité."},
    {sense:'surnom de parenté (kunya)',concept:'Surnom/Désignation',description:''},
    {sense:'faire allusion',concept:'Allusion/Métonymie',description:"Acte extérieur de parler indirectement, de dire une chose pour en signifier une autre. L'allusion sort du locuteur et atteint l'auditeur — c'est directionnel mais voilé. L'allusion cache autant qu'elle révèle, elle est ponctuelle dans l'énoncé mais demande un effort permanent de déchiffrement."},
    {sense:'métonymie',concept:'Allusion/Métonymie',description:''},
    {sense:'pronom',concept:'Allusion/Métonymie',description:''},
  ]);log(r,'kny')

  // 7. lzm (لزم) — adhérer, s'attacher, être obligatoire, s'imposer
  r=await ins('lzm',[
    {sense:'adhérer à',concept:'Adhérence/Attachement',description:"Acte de rester collé, de ne pas se séparer. L'adhérence est un état permanent qui lie deux choses ensemble — elle reste entre les deux tant que rien ne les sépare. C'est une relation bidirectionnelle : celui qui adhère tient, et ce à quoi il adhère retient."},
    {sense:'s\'attacher à',concept:'Adhérence/Attachement',description:''},
    {sense:'ne pas quitter',concept:'Adhérence/Attachement',description:''},
    {sense:'être obligatoire',concept:'Obligation/Nécessité',description:"État de ce qui s'impose par nécessité, ce qu'on ne peut pas éviter. L'obligation sort de la loi ou de la situation et atteint celui qui est obligé — c'est directionnel et permanent tant que la cause demeure. L'obligation est un jugement rationnel, pas une émotion."},
    {sense:'imposer à quelqu\'un',concept:'Obligation/Nécessité',description:''},
    {sense:'prendre sur soi',concept:'Engagement',description:"Acte intérieur de se charger volontairement d'une responsabilité. L'engagement part de celui qui s'engage et lie sa propre personne — c'est directionnel vers soi. C'est un acte ponctuel qui crée un état permanent d'obligation."},
    {sense:'se porter garant',concept:'Engagement',description:''},
  ]);log(r,'lzm')

  // 8. ghyd (غيض) — diminuer, décroître, absorber
  r=await ins('ghyd',[
    {sense:'diminuer',concept:'Diminution/Décrue',description:"Acte ou état de devenir moins abondant, de baisser de niveau. La diminution est un mouvement vers le bas, vers le moins — c'est directionnel et peut être ponctuel (une crue qui baisse) ou progressif. L'eau qui se retire laisse la terre apparaître."},
    {sense:'décroître',concept:'Diminution/Décrue',description:''},
    {sense:'absorber (eau)',concept:'Diminution/Décrue',description:''},
    {sense:'faire diminuer',concept:'Diminution/Décrue',description:''},
    {sense:'retenir la colère',concept:'Rétention/Contenance',description:"Acte intérieur de contenir ce qui veut sortir, de retenir en soi ce qui pourrait déborder. La rétention est un effort de la volonté qui empêche l'écoulement — c'est directionnel vers l'intérieur. C'est un acte ponctuel mais qui demande une force permanente."},
    {sense:'cacher',concept:'Rétention/Contenance',description:''},
  ]);log(r,'ghyd')

  // 9. frg (فرغ) — être vide, se libérer, verser, se consacrer
  r=await ins('frg',[
    {sense:'être vide',concept:'Vacuité/Libération',description:"État de ce qui ne contient plus rien, de ce qui est débarrassé de son contenu. La vacuité est un état intérieur permanent — l'espace est libre, disponible. C'est la condition préalable à tout remplissage nouveau."},
    {sense:'se libérer d\'une occupation',concept:'Vacuité/Libération',description:''},
    {sense:'se consacrer à',concept:'Vacuité/Libération',description:''},
    {sense:'être disponible',concept:'Vacuité/Libération',description:''},
    {sense:'verser',concept:'Versement/Écoulement',description:"Acte extérieur de faire couler un liquide du haut vers le bas. Le versement sort du récipient et atteint ce qui reçoit — c'est directionnel et ponctuel. Verser c'est vider un contenant en dirigeant son contenu."},
    {sense:'répandre',concept:'Versement/Écoulement',description:''},
    {sense:'couler du métal en moule',concept:'Versement/Écoulement',description:''},
    {sense:'patience à bout',concept:'Divers',description:'État de celui dont la patience s\'est vidée.'},
  ]);log(r,'frg')

  // 10. nwb (نوب) — revenir, prendre son tour, remplacer, calamité
  r=await ins('nwb',[
    {sense:'venir à tour de rôle',concept:'Alternance/Tour',description:"Acte de revenir périodiquement, chacun prenant sa place à son moment. L'alternance est un mouvement circulaire et permanent — elle sort de celui qui vient et atteint ceux qui attendent. C'est un acte récurrent par nature qui crée un ordre dans le temps."},
    {sense:'revenir périodiquement',concept:'Alternance/Tour',description:''},
    {sense:'faire à tour de rôle',concept:'Alternance/Tour',description:''},
    {sense:'remplacer quelqu\'un',concept:'Suppléance/Représentation',description:"Acte extérieur de prendre la place d'un autre pour agir en son nom. La suppléance sort du suppléant et atteint celui qui est représenté — c'est directionnel et peut être ponctuel ou permanent selon la durée du mandat."},
    {sense:'agir comme lieutenant',concept:'Suppléance/Représentation',description:''},
    {sense:'calamité qui s\'abat',concept:'Affliction/Épreuve',description:"Événement extérieur qui tombe sur quelqu'un sans qu'il l'ait cherché. L'affliction sort du destin et atteint celui qui la subit — c'est directionnel et ponctuel mais ses effets peuvent être permanents."},
    {sense:'malheur',concept:'Affliction/Épreuve',description:''},
    {sense:'abeilles',concept:'Divers',description:'Insectes qui reviennent en essaim — lié au sens de retour périodique.'},
  ]);log(r,'nwb')

  console.log('\n=== Batch 143 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
