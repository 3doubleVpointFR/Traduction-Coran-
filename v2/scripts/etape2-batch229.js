const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1875, total = 2321

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

  r=await ins('nht',[
    {sense:'tailler la pierre',concept:'Sculpture/Taille',description:"Acte de creuser et façonner la roche pour en faire des habitations. La taille est directionnelle — elle sort de l'artisan et atteint la pierre. Tailler c'est transformer le brut en habitable."},
    {sense:'sculpter',concept:'Sculpture/Taille',description:''},
  ]);log(r,'nht')

  r=await ins('thmd',[
    {sense:'peuple de Thamud',concept:'Nom propre/Peuple',description:"Peuple ancien du Hijaz qui taillait les maisons dans la roche. Thamud est un nom permanent qui désigne un peuple historique détruit pour sa désobéissance."},
  ]);log(r,'thmd')

  r=await ins('nqa',[
    {sense:'chamelle',concept:'Animal/Signe',description:"La femelle du chameau, animal noble du désert. La chamelle de Salih est un signe divin — elle est l'épreuve envoyée au peuple de Thamud."},
  ]);log(r,'nqa')

  r=await ins('rjf',[
    {sense:'trembler',concept:'Tremblement/Séisme',description:"Mouvement violent de la terre qui ébranle tout. Le tremblement est ponctuel et dévastateur — il sort de la terre et atteint tout ce qui est dessus."},
    {sense:'séisme',concept:'Tremblement/Séisme',description:''},
  ]);log(r,'rjf')

  r=await ins('jthm',[
    {sense:'être foudroyé',concept:'Anéantissement/Prostration',description:"État de ce qui est abattu et figé sur place, mort dans sa position. Le jathim est celui qui tombe face contre terre — foudroyé par le châtiment divin. C'est un état permanent de destruction."},
    {sense:'tomber face contre terre',concept:'Anéantissement/Prostration',description:''},
  ]);log(r,'jthm')

  r=await ins('nqh',[
    {sense:'chamelle',concept:'Animal/Signe',description:"La femelle du chameau — signe divin envoyé comme épreuve."},
  ]);log(r,'nqh')

  r=await ins('etw',[
    {sense:'être arrogant',concept:'Arrogance/Rébellion',description:"État de celui qui se croit au-dessus des lois et défie l'autorité. L'arrogance est permanente chez l'orgueilleux — le utuw est le dépassement des limites par orgueil et défi."},
    {sense:'transgresser par orgueil',concept:'Arrogance/Rébellion',description:''},
  ]);log(r,'etw')

  r=await ins('shab',[
    {sense:'peuple',concept:'Peuple/Nation',description:"Grand groupe humain uni par l'origine commune. Le shaab est permanent dans son identité — il est le tronc dont les tribus sont les branches. Le peuple est le niveau le plus large de l'appartenance humaine."},
    {sense:'tribu',concept:'Peuple/Nation',description:''},
    {sense:'branche (d\'arbre)',concept:'Divers',description:'La ramification qui part du tronc.'},
  ]);log(r,'shab')

  r=await ins('bk s',[
    {sense:'diminuer injustement',concept:'Injustice/Lésion',description:"Acte de donner moins que le dû. La lésion est directionnelle — elle sort de l'injuste et atteint le lésé."},
    {sense:'léser',concept:'Injustice/Lésion',description:''},
  ]);log(r,'bk s')

  r=await ins('mlaa',[
    {sense:'remplir',concept:'Plénitude/Remplissage',description:"Acte de combler un espace vide. Le remplissage crée un état de plénitude permanente."},
    {sense:'assemblée de notables',concept:'Assemblée/Élite',description:"Le groupe des notables qui remplissent le conseil de leur présence."},
  ]);log(r,'mlaa')

  console.log('\n=== Batch 229 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
