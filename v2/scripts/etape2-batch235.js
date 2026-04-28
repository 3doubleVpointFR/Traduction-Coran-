const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1935, total = 2321

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

  r=await ins('ashq',[{sense:'lointain',concept:'Distance/Éloignement extrême',description:"Ce qui est très éloigné dans l'espace ou le temps. La distance extrême est permanente — ce qui est loin est hors de portée."},{sense:'profond',concept:'Distance/Éloignement extrême',description:''}]);log(r,'ashq')

  r=await ins('alys',[{sense:'n\'est-ce pas',concept:'Interrogation rhétorique',description:"Particule qui attend une réponse affirmative. L'interrogation rhétorique confirme ce qu'elle semble questionner."},{sense:'certes oui',concept:'Interrogation rhétorique',description:''}]);log(r,'alys')

  r=await ins('syh',[{sense:'voyager',concept:'Voyage/Parcours',description:"Acte de se déplacer dans les terres. Le voyage est directionnel et ouvre l'esprit — celui qui voyage voit ce que le sédentaire ne voit pas."},{sense:'parcourir la terre',concept:'Voyage/Parcours',description:''}]);log(r,'syh')

  r=await ins('nslkh',[{sense:'se dépouiller',concept:'Dénuement/Extraction',description:"Acte de se séparer de ce qui couvrait. Le dénuement est un arrachement — la nuit se dépouille du jour et l'obscurité apparaît."},{sense:'enlever (la peau)',concept:'Dénuement/Extraction',description:''}]);log(r,'nslkh')

  r=await ins('shhr',[{sense:'mois',concept:'Temps/Mois',description:"Période de temps mesurée par le cycle lunaire. Le mois est permanent dans sa récurrence — il revient chaque cycle et mesure le passage du temps."},{sense:'être célèbre',concept:'Renommée',description:"État de ce qui est connu de tous. La renommée est permanente chez celui qui est célèbre."}]);log(r,'shhr')

  r=await ins('rsd',[{sense:'guetter',concept:'Guet/Surveillance',description:"Acte de se poster en embuscade pour surveiller ou attaquer. Le guet est directionnel — le guetteur surveille ce qui vient vers lui. Le mirsad est le poste de surveillance permanent."},{sense:'embuscade',concept:'Guet/Surveillance',description:''}]);log(r,'rsd')

  r=await ins('shr k',[{sense:'associer',concept:'Association/Partenariat',description:"Acte de mettre deux choses sur un pied d'égalité. Le shirk est l'association d'un autre à Dieu — le péché suprême."},{sense:'polythéisme',concept:'Association/Partenariat',description:''}]);log(r,'shr k')

  r=await ins('dh n',[{sense:'esprit',concept:'Esprit/Intelligence',description:"La faculté de penser et de comprendre. L'esprit est permanent dans l'être — il est le lieu de la connaissance et du jugement."},{sense:'intelligence',concept:'Esprit/Intelligence',description:''}]);log(r,'dh n')

  r=await ins('all',[{sense:'sauf',concept:'Exception/Restriction',description:"Particule qui exclut un élément. L'exception crée une frontière entre l'inclus et l'exclu."},{sense:'excepté',concept:'Exception/Restriction',description:''}]);log(r,'all')

  r=await ins('dhmm',[{sense:'blâmer',concept:'Blâme/Reproche',description:"Acte d'adresser un reproche. Le blâme est directionnel — du blâmeur vers le blâmé."},{sense:'critiquer',concept:'Blâme/Reproche',description:''},{sense:'être blâmable',concept:'Blâme/Reproche',description:''}]);log(r,'dhmm')

  console.log('\n=== Batch 235 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
