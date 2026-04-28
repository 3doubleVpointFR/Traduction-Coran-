const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2065, total = 2321

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

  r=await ins('nmr',[{sense:'tigre/léopard',concept:'Animal/Férocité',description:"Animal sauvage tacheté, symbole de force et de férocité."},{sense:'tacheté',concept:'Animal/Férocité',description:''}]);log(r,'nmr')

  r=await ins('ber',[{sense:'chameau',concept:'Animal/Transport',description:"Animal du désert utilisé pour le transport. Le baar est le chameau de charge."},{sense:'excrément de chameau',concept:'Divers',description:''}]);log(r,'ber')

  r=await ins('eyr',[{sense:'caravane',concept:'Voyage/Commerce',description:"Groupe de voyageurs et marchands. La caravane transporte les biens à travers le désert."},{sense:'âne',concept:'Divers',description:'Animal de charge.'}]);log(r,'eyr')

  r=await ins('nql',[{sense:'transférer',concept:'Transport/Déplacement',description:"Acte de déplacer quelque chose d'un lieu à un autre. Le transfert est directionnel — il sort d'un point et arrive à un autre."},{sense:'transporter',concept:'Transport/Déplacement',description:''}]);log(r,'nql')

  r=await ins('haj',[{sense:'avoir besoin',concept:'Besoin/Nécessité',description:"État de celui qui manque de quelque chose d'essentiel. Le besoin est intérieur et permanent tant qu'il n'est pas comblé."},{sense:'nécessité',concept:'Besoin/Nécessité',description:''}]);log(r,'haj')

  r=await ins('k nn',[{sense:'cacher',concept:'Protection/Voilement',description:"Acte de mettre à l'abri du regard. La protection par le voilement crée un état permanent de sécurité."},{sense:'protéger',concept:'Protection/Voilement',description:''}]);log(r,'k nn')

  r=await ins('fqd',[{sense:'perdre',concept:'Perte/Absence',description:"État de ne plus avoir ce qu'on avait. La perte est permanente dans l'absence — ce qui est perdu n'est plus là."},{sense:'manquer',concept:'Perte/Absence',description:''}]);log(r,'fqd')

  r=await ins('\u1E2B\u1E0F\u1E0F',[{sense:'prendre',concept:'Prise/Saisie',description:"Acte de s'emparer. Directionnel du preneur vers le pris."},{sense:'punir',concept:'Châtiment',description:"Saisir pour châtier."}]);log(r,'\u1E2B\u1E0F\u1E0F')

  r=await ins('bdh',[{sense:'être gros',concept:'Corpulence/Ampleur',description:"État de ce qui est massif et imposant. La corpulence est permanente dans ce qui est large."},{sense:'être corpulent',concept:'Corpulence/Ampleur',description:''}]);log(r,'bdh')

  r=await ins('wey',[{sense:'contenir',concept:'Contenance/Compréhension',description:"Acte de garder en soi, de comprendre et de retenir. La contenance est intérieure — celui qui contient comprend et retient dans sa mémoire."},{sense:'comprendre',concept:'Contenance/Compréhension',description:''}]);log(r,'wey')

  console.log('\n=== Batch 248 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
