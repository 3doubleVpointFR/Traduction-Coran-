const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1468, total = 2321

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

  // 1. dhl (ذلل) — variante humilité/soumission
  r=await ins('dhl',[
    {sense:'être humble',concept:'Humilité/Soumission',description:"État intérieur de celui qui accepte sa position basse. L'humilité est permanente comme disposition — elle est l'abaissement volontaire devant ce qui est plus grand."},
    {sense:'être soumis',concept:'Humilité/Soumission',description:''},
    {sense:'être docile',concept:'Humilité/Soumission',description:''},
  ]);log(r,'dhl')

  // 2. amd (أمد) — terme, durée, limite temporelle
  r=await ins('amd',[
    {sense:'terme',concept:'Durée/Limite',description:"Le point dans le temps au-delà duquel quelque chose prend fin. Le terme est une limite permanente — il marque la fin d'une période et ne peut être dépassé. L'amad est la distance temporelle entre le début et la fin."},
    {sense:'durée',concept:'Durée/Limite',description:''},
    {sense:'période',concept:'Durée/Limite',description:''},
  ]);log(r,'amd')

  // 3. twa (طوع) — variante obéissance
  r=await ins('twa',[
    {sense:'obéir volontairement',concept:'Obéissance/Soumission volontaire',description:"Acte de se conformer à un ordre par choix. L'obéissance est directionnelle et rationnelle — c'est un acte permanent de la volonté qui se soumet librement."},
    {sense:'consentir',concept:'Obéissance/Soumission volontaire',description:''},
  ]);log(r,'twa')

  // 4. kmw (كمو) — cacher, dissimuler
  r=await ins('kmw',[
    {sense:'cacher',concept:'Dissimulation/Occultation',description:"Acte de rendre invisible ce qui existait. La dissimulation crée un état d'invisibilité permanent — ce qui est caché est soustrait au regard des autres."},
    {sense:'dissimuler',concept:'Dissimulation/Occultation',description:''},
    {sense:'être caché',concept:'Dissimulation/Occultation',description:''},
  ]);log(r,'kmw')

  // 5. bxs (بخس) — diminuer, être injuste, léser
  r=await ins('bxs',[
    {sense:'diminuer injustement',concept:'Injustice/Lésion',description:"Acte de donner moins que ce qui est dû, de priver quelqu'un de son droit. La lésion sort de celui qui lèse et atteint celui qui est lésé — c'est directionnel et injuste. Léser c'est retrancher du droit d'autrui."},
    {sense:'léser',concept:'Injustice/Lésion',description:''},
    {sense:'être injuste',concept:'Injustice/Lésion',description:''},
  ]);log(r,'bxs')

  // 6. nðr (نذر) — variante de nḏr (avertir/vœu)
  r=await ins('n\u00F0r',[
    {sense:'avertir',concept:'Avertissement/Menace',description:"Acte de prévenir d'un danger imminent. L'avertissement sort de l'avertisseur et atteint celui qui est averti — c'est directionnel et urgent."},
    {sense:'vœu',concept:'Vœu/Consécration',description:"Engagement envers Dieu à accomplir quelque chose. Le vœu crée une obligation permanente."},
  ]);log(r,'n\u00F0r')

  // 7. ni (ني) — variante pronom "moi"
  r=await ins('ni',[
    {sense:'moi',concept:'Pronom/Première personne',description:"Pronom qui désigne le locuteur comme objet de l'action. Le moi est permanent dans l'identité — il désigne toujours le même être."},
    {sense:'me',concept:'Pronom/Première personne',description:''},
  ]);log(r,'ni')

  // 8. zkr (زكر) — variante de ðkr (mentionner/mâle)
  r=await ins('zkr',[
    {sense:'mentionner',concept:'Mention/Rappel',description:"Acte de prononcer un nom pour le rendre présent. La mention est directionnelle — elle sort du locuteur et rend présent ce qui était absent."},
    {sense:'se souvenir',concept:'Mention/Rappel',description:''},
    {sense:'mâle',concept:'Masculin/Mâle',description:"Le genre qui féconde activement. Le mâle est permanent dans sa nature."},
  ]);log(r,'zkr')

  // 9. dru (ذرو) — variante dispersion
  r=await ins('dru',[
    {sense:'disperser',concept:'Dispersion/Éparpillement',description:"Acte de répandre dans toutes les directions. Multidirectionnel et irréversible."},
    {sense:'progéniture',concept:'Descendance/Multiplication',description:"Les enfants qui se multiplient à travers les générations."},
    {sense:'atome',concept:'Petitesse/Infime',description:"La plus petite chose perceptible."},
  ]);log(r,'dru')

  // 10. syd (سيد) — maître, chef, seigneur
  r=await ins('syd',[
    {sense:'maître',concept:'Maîtrise/Prééminence',description:"Celui qui est au-dessus des autres par son autorité, sa noblesse et son mérite. Le sayyid est permanent dans son rang — il est celui que les autres reconnaissent comme supérieur et suivent. La maîtrise est un état de leadership naturel."},
    {sense:'chef',concept:'Maîtrise/Prééminence',description:''},
    {sense:'seigneur',concept:'Maîtrise/Prééminence',description:''},
  ]);log(r,'syd')

  console.log('\n=== Batch 188 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
