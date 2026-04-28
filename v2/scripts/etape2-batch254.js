const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2125, total = 2321

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
  const data = [
    ['a m n',[{sense:'croire',concept:'Foi/Sécurité',description:"Acte d'adhérer avec confiance. La foi est un état permanent de sécurité intérieure."},{sense:'être en sécurité',concept:'Foi/Sécurité',description:''}]],
    ['qne',[{sense:'être satisfait de peu',concept:'Contentement/Modestie',description:"État de celui qui se contente de ce qu'il a sans demander plus. Permanent chez le modeste."},{sense:'se contenter',concept:'Contentement/Modestie',description:''}]],
    ['shkhs',[{sense:'personne',concept:'Individu/Être',description:"Un être humain distinct et identifiable. La personne est permanente dans son individualité."},{sense:'individu',concept:'Individu/Être',description:''}]],
    ['njb',[{sense:'être noble',concept:'Noblesse/Élection',description:"État de celui qui est d'origine noble ou choisi pour sa qualité. Permanent dans son mérite."},{sense:'élu',concept:'Noblesse/Élection',description:''}]],
    ['srb',[{sense:'chemin',concept:'Voie/Passage',description:"Route souterraine ou secrète. Le sarb est le passage qui permet de se déplacer sans être vu."},{sense:'troupeau en mouvement',concept:'Voie/Passage',description:''}]],
    ['sfd',[{sense:'enchaîner',concept:'Enchaînement/Ligature',description:"Acte de lier avec des chaînes. L'enchaînement est directionnel et crée un état permanent de captivité."},{sense:'chaînes',concept:'Enchaînement/Ligature',description:''}]],
    ['rbm',[{sense:'peut-être',concept:'Possibilité/Abondance',description:"Particule qui ouvre une possibilité. Le rubama indique que la chose est possible mais pas certaine."},{sense:'beaucoup',concept:'Possibilité/Abondance',description:''}]],
    ['mlka',[{sense:'ange',concept:'Ange/Messager céleste',description:"Être de lumière créé par Dieu pour exécuter ses ordres. L'ange est permanent dans son obéissance — il ne désobéit jamais."},{sense:'messager céleste',concept:'Ange/Messager céleste',description:''}]],
    ['shye',[{sense:'groupe',concept:'Faction/Parti',description:"Ensemble de personnes qui suivent un même chef ou une même cause. La faction est permanente dans son allégeance."},{sense:'partisans',concept:'Faction/Parti',description:''}]],
    ['slk',[{sense:'entrer dans un chemin',concept:'Insertion/Parcours',description:"Acte de s'engager dans une voie. L'insertion est directionnelle — on entre dans le chemin et on le suit."},{sense:'suivre une voie',concept:'Insertion/Parcours',description:''}]],
  ]
  for (const [key, senses] of data) { r = await ins(key, senses); log(r, key) }
  console.log('\n=== Batch 254 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
