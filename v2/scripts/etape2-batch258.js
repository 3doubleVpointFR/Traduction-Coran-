const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2165, total = 2321

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
    ['jrz',[{sense:'terre aride',concept:'Aridité/Stérilité',description:"Sol sec qui ne produit rien. Permanent dans sa sécheresse."},{sense:'stérile',concept:'Aridité/Stérilité',description:''}]],
    ['rqm',[{sense:'écrire',concept:'Écriture/Inscription',description:"Acte de graver des signes. L'inscription est permanente — elle fixe l'information."},{sense:'inscription',concept:'Écriture/Inscription',description:''}]],
    ['bkhe',[{sense:'se tuer de chagrin',concept:'Affliction extrême',description:"État de douleur si intense qu'elle consume l'être. L'affliction extrême est intérieure et dévorante."},{sense:'être accablé',concept:'Affliction extrême',description:''}]],
    ['nde',[{sense:'appeler',concept:'Appel/Invocation',description:"Acte d'élever la voix pour invoquer. Directionnel du locuteur vers l'appelé."},{sense:'invoquer',concept:'Appel/Invocation',description:''}]],
    ['shtt',[{sense:'exagérer',concept:'Excès/Exagération',description:"Acte de dépasser la mesure dans la parole ou l'action. L'excès est le dépassement permanent des limites."},{sense:'être excessif',concept:'Excès/Exagération',description:''}]],
    ['yqz',[{sense:'être éveillé',concept:'Éveil/Vigilance',description:"État de celui qui ne dort pas et reste attentif. L'éveil est l'opposé du sommeil — permanent dans la conscience."},{sense:'veiller',concept:'Éveil/Vigilance',description:''}]],
    ['rqd',[{sense:'dormir',concept:'Sommeil/Repos',description:"État de suspension de la conscience. Le sommeil est un repos temporaire."},{sense:'être endormi',concept:'Sommeil/Repos',description:''}]],
    ['dwt',[{sense:'possesseurs (fém.)',concept:'Possession/Attribut',description:"Celles qui détiennent un attribut. La possession est permanente."},{sense:'ayant (fém.)',concept:'Possession/Attribut',description:''}]],
    ['wsd',[{sense:'fermer hermétiquement',concept:'Fermeture/Scellement',description:"Acte de bloquer toute sortie. La fermeture hermétique est permanente — rien ne peut s'échapper."},{sense:'sceller',concept:'Fermeture/Scellement',description:''}]],
    ['frr',[{sense:'fuir',concept:'Fuite/Évasion',description:"Acte de s'enfuir rapidement face au danger. La fuite est directionnelle — elle éloigne du danger."},{sense:'s\'enfuir',concept:'Fuite/Évasion',description:''}]],
  ]
  for (const [key, senses] of data) { r = await ins(key, senses); log(r, key) }
  console.log('\n=== Batch 258 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
