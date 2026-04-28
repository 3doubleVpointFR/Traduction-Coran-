const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2115, total = 2321

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
  const roots = ['bwr','jthth','msjd','hsy','hnm','yd y','kh z y','sh f y','s d r','q w m']
  const data = [
    ['bwr',[{sense:'périr',concept:'Destruction/Perte',description:"État de ce qui est détruit et anéanti. La perte est permanente."},{sense:'être en ruine',concept:'Destruction/Perte',description:''}]],
    ['jthth',[{sense:'déraciner',concept:'Déracinement/Arrachement',description:"Acte d'arracher avec les racines. Le déracinement est directionnel et irréversible."},{sense:'arracher',concept:'Déracinement/Arrachement',description:''}]],
    ['msjd',[{sense:'mosquée',concept:'Lieu de prière',description:"Lieu consacré à la prosternation et à l'adoration. Permanent dans sa fonction sacrée."},{sense:'lieu de prosternation',concept:'Lieu de prière',description:''}]],
    ['hsy',[{sense:'compter',concept:'Dénombrement/Calcul',description:"Acte de recenser et de dénombrer. Le calcul est rationnel et exhaustif — rien n'échappe à celui qui compte."},{sense:'recenser',concept:'Dénombrement/Calcul',description:''}]],
    ['hnm',[{sense:'souci',concept:'Souci/Préoccupation',description:"État intérieur de préoccupation. Le souci pèse sur l'esprit — permanent tant que la cause demeure."},{sense:'se soucier',concept:'Souci/Préoccupation',description:''}]],
    ['yd y',[{sense:'main',concept:'Main/Puissance',description:"Organe de l'action et de la prise. Symbolise la puissance."},{sense:'puissance',concept:'Main/Puissance',description:''}]],
    ['kh z y',[{sense:'être humilié',concept:'Humiliation/Honte',description:"État de celui qui est rabaissé et perd sa dignité."},{sense:'honte',concept:'Humiliation/Honte',description:''}]],
    ['sh f y',[{sense:'guérir',concept:'Guérison/Remède',description:"Acte de restaurer la santé. Directionnel et transformateur."},{sense:'remède',concept:'Guérison/Remède',description:''}]],
    ['s d r',[{sense:'poitrine',concept:'Poitrine/Intériorité',description:"Le siège des émotions et des secrets. L'ouverture de la poitrine est l'expansion de l'âme."},{sense:'sortir',concept:'Émission/Sortie',description:"Acte de quitter l'intérieur. Directionnel."}]],
    ['q w m',[{sense:'se lever',concept:'Station debout/Établissement',description:"Acte fondamental de se mettre debout. La station debout est l'état de l'action — celui qui se lève est prêt à agir. Le qiyam est l'établissement ferme sur la justice."},{sense:'établir',concept:'Station debout/Établissement',description:''},{sense:'peuple (qawm)',concept:'Divers',description:'Le groupe qui se tient ensemble.'}]],
  ]
  for (const [key, senses] of data) {
    r = await ins(key, senses)
    log(r, key)
  }
  console.log('\n=== Batch 253 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
