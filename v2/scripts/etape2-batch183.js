const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1418, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('SKIP '+key+': not found'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('SKIP '+key+': already done'); done++; return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;const c=r.concepts;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+c.length+' concepts ('+c.join(', ')+') — reste '+(total-done))} }

async function run() {
  let r

  // 1. šrq (شرق) — est, lever du soleil, briller
  r=await ins('\u0161rq',[
    {sense:'est (orient)',concept:'Orient/Lever',description:"Le côté d'où le soleil se lève, le point cardinal de la lumière naissante. L'orient est permanent dans sa position — il est toujours le lieu du début, du renouveau. Le soleil se lève à l'est et illumine le monde."},
    {sense:'lever du soleil',concept:'Orient/Lever',description:''},
    {sense:'briller',concept:'Orient/Lever',description:''},
    {sense:'s\'étrangler',concept:'Divers',description:'La nourriture qui reste bloquée dans la gorge — comme le soleil qui monte et chauffe.'},
  ]);log(r,'\u0161rq')

  // 2. kbt (خبط) — frapper au hasard, marcher à l'aveugle
  r=await ins('kbt',[
    {sense:'frapper au hasard',concept:'Confusion/Aveuglement',description:"Acte de celui qui agit sans voir et sans discernement, frappant dans toutes les directions sans but. La confusion est un état de mouvement désordonné — celui qui est frappé par le shaytan marche comme un aveugle qui trébuche."},
    {sense:'marcher à l\'aveugle',concept:'Confusion/Aveuglement',description:''},
    {sense:'toucher au hasard',concept:'Confusion/Aveuglement',description:''},
  ]);log(r,'kbt')

  // 3. nty (نهي) — variante de nhy (interdire)
  r=await ins('nty',[
    {sense:'interdire',concept:'Interdiction/Empêchement',description:"Acte de poser un interdit sur une action. L'interdiction sort de celui qui interdit et atteint celui à qui c'est interdit — c'est directionnel et crée une barrière permanente."},
    {sense:'empêcher',concept:'Interdiction/Empêchement',description:''},
    {sense:'fin',concept:'Limite/Terme',description:"Le point au-delà duquel on ne peut aller. La fin est la limite ultime — permanente et infranchissable."},
  ]);log(r,'nty')

  // 4. slf (سلف) — précéder, prêter, ancêtres
  r=await ins('slf',[
    {sense:'précéder',concept:'Antériorité/Ancêtres',description:"État de ce qui est venu avant dans le temps. Ce qui précède est permanent dans sa position temporelle — il ne peut être changé ni rattrapé. Les ancêtres sont ceux qui ont précédé et dont les actes sont révolus."},
    {sense:'ancêtres (salaf)',concept:'Antériorité/Ancêtres',description:''},
    {sense:'prêt',concept:'Transaction/Avance',description:"Acte de donner quelque chose maintenant pour le récupérer plus tard. Le prêt est directionnel — il sort du prêteur vers l'emprunteur avec la promesse du retour."},
    {sense:'avance (paiement)',concept:'Transaction/Avance',description:''},
  ]);log(r,'slf')

  // 5. mksb (مكسب) — gain, acquisition
  r=await ins('mksb',[
    {sense:'gain',concept:'Acquisition/Gain',description:"Ce que l'on obtient par son effort ou son travail. Le gain est le résultat permanent du travail — il entre dans le patrimoine de celui qui l'a acquis. Le kasb est l'acte d'acquérir par ses propres moyens."},
    {sense:'acquérir',concept:'Acquisition/Gain',description:''},
    {sense:'gagner',concept:'Acquisition/Gain',description:''},
  ]);log(r,'mksb')

  // 6. snb (سنب) — épi (variante de snbl)
  r=await ins('snb',[
    {sense:'épi',concept:'Épi/Récolte',description:"La partie du blé qui porte les grains, le fruit de la terre. L'épi est le résultat permanent de la croissance — il contient les graines qui nourrissent."},
    {sense:'épi de blé',concept:'Épi/Récolte',description:''},
  ]);log(r,'snb')

  // 7. kmy (كمي) — cacher, dissimuler, être caché
  r=await ins('kmy',[
    {sense:'cacher',concept:'Dissimulation/Secret',description:"Acte de soustraire quelque chose au regard des autres. La dissimulation sort de celui qui cache et atteint ce qui est caché — c'est un acte qui crée un état permanent d'invisibilité."},
    {sense:'dissimuler',concept:'Dissimulation/Secret',description:''},
    {sense:'être caché',concept:'Dissimulation/Secret',description:''},
  ]);log(r,'kmy')

  // 8. khf (خفي) — variante de xfy (cacher, skip probable)
  r=await ins('khf',[
    {sense:'cacher',concept:'Dissimulation/Secret',description:"Acte de rendre invisible ce qui existait au grand jour. Le secret est ce qui est soustrait au regard — permanent dans son invisibilité."},
    {sense:'être secret',concept:'Dissimulation/Secret',description:''},
  ]);log(r,'khf')

  // 9. rhn (رهن) — gage, hypothèque, être en otage
  r=await ins('rhn',[
    {sense:'gage',concept:'Gage/Garantie',description:"Objet confié en garantie d'une dette ou d'un engagement. Le gage est un bien retenu — il sort du débiteur et reste chez le créancier jusqu'au remboursement. C'est un état permanent de rétention."},
    {sense:'hypothèque',concept:'Gage/Garantie',description:''},
    {sense:'être en otage',concept:'Gage/Garantie',description:''},
    {sense:'être retenu',concept:'Gage/Garantie',description:''},
  ]);log(r,'rhn')

  // 10. ady (أدي) — accomplir, remettre, payer
  r=await ins('ady',[
    {sense:'accomplir',concept:'Accomplissement/Restitution',description:"Acte de mener à bien ce qui est dû, de remettre ce qui appartient à l'autre. L'accomplissement sort de celui qui agit et atteint celui qui reçoit son dû — c'est directionnel et ponctuel. Payer c'est rendre ce que l'on doit, restituer le dépôt de confiance."},
    {sense:'remettre',concept:'Accomplissement/Restitution',description:''},
    {sense:'payer',concept:'Accomplissement/Restitution',description:''},
    {sense:'restituer un dépôt',concept:'Accomplissement/Restitution',description:''},
  ]);log(r,'ady')

  console.log('\n=== Batch 183 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
