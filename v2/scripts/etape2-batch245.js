const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2035, total = 2321

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

  r=await ins('khaa',[{sense:'pécher involontairement',concept:'Erreur/Faute',description:"Acte de commettre une erreur sans l'avoir voulu. La faute involontaire est ponctuelle — elle n'est pas voulue mais ses conséquences existent."},{sense:'erreur',concept:'Erreur/Faute',description:''}]);log(r,'khaa')

  r=await ins('nsw',[{sense:'oublier',concept:'Oubli/Négligence',description:"Acte involontaire de perdre le souvenir. L'oubli est intérieur — il efface de la mémoire."},{sense:'négliger',concept:'Oubli/Négligence',description:''}]);log(r,'nsw')

  r=await ins('shgf',[{sense:'être épris',concept:'Passion/Amour ardent',description:"État de celui dont le cœur est transpercé par l'amour. La passion pénètre le shighaf — l'enveloppe du cœur — et atteint les profondeurs de l'être. C'est un état permanent et dévorant."},{sense:'amour passionnel',concept:'Passion/Amour ardent',description:''}]);log(r,'shgf')

  r=await ins('wtka',[{sense:'s\'appuyer',concept:'Appui/Repos',description:"Acte de se reposer sur quelque chose de confortable. L'appui est directionnel vers le support — celui qui s'appuie se laisse porter."},{sense:'s\'accouder',concept:'Appui/Repos',description:''}]);log(r,'wtka')

  r=await ins('skk',[{sense:'couteau',concept:'Tranchant/Coupure',description:"Instrument tranchant qui coupe. Le couteau est permanent dans sa fonction — il sépare ce qu'il touche."},{sense:'chemin',concept:'Divers',description:'La voie tracée — sens de direction.'}]);log(r,'skk')

  r=await ins('h\u0161\u0161',[{sense:'herbe sèche',concept:'Végétation/Fourrage',description:"Les plantes séchées utilisées comme nourriture pour le bétail. L'herbe sèche est la végétation qui a perdu sa vie — permanente dans sa sécheresse."},{sense:'fourrage',concept:'Végétation/Fourrage',description:''}]);log(r,'h\u0161\u0161')

  r=await ins('xmr',[{sense:'vin',concept:'Ivresse/Couverture',description:"Boisson qui couvre la raison. L'ivresse voile l'intelligence — le khamr est ce qui empêche la lucidité."},{sense:'couvrir',concept:'Ivresse/Couverture',description:''}]);log(r,'xmr')

  r=await ins('xbz',[{sense:'pain',concept:'Nourriture/Subsistance',description:"Aliment de base fait de farine et d'eau cuite. Le pain est permanent dans sa fonction de nourriture fondamentale — il est ce qui sustente au quotidien."},{sense:'nourrir',concept:'Nourriture/Subsistance',description:''}]);log(r,'xbz')

  r=await ins('lkn',[{sense:'mais',concept:'Opposition/Restriction',description:"Particule qui introduit une correction ou une opposition. Le lakin marque la frontière entre deux réalités — il dit que ce qui suit est différent de ce qui précède."},{sense:'cependant',concept:'Opposition/Restriction',description:''}]);log(r,'lkn')

  r=await ins('dghth',[{sense:'poignée (d\'herbes mélangées)',concept:'Mélange/Confusion',description:"Un bouquet de plantes mêlées sans distinction. Le dighth est le mélange confus — les rêves mélangés sont des adghath ahlam, des songes sans cohérence."},{sense:'rêves confus',concept:'Mélange/Confusion',description:''}]);log(r,'dghth')

  console.log('\n=== Batch 245 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
