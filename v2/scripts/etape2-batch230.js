const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1885, total = 2321

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

  r=await ins('ax\u00F0',[
    {sense:'prendre',concept:'Prise/Saisie',description:"Acte de s'emparer. Directionnel du preneur vers le pris."},
    {sense:'punir',concept:'Châtiment',description:"Saisir pour châtier."},
  ]);log(r,'ax\u00F0')

  r=await ins('nmw',[
    {sense:'croître',concept:'Croissance/Développement',description:"Mouvement de ce qui grandit progressivement. La croissance est permanente tant que la source de vie demeure — elle augmente et développe."},
    {sense:'augmenter',concept:'Croissance/Développement',description:''},
  ]);log(r,'nmw')

  r=await ins('ghnw',[
    {sense:'être riche',concept:'Richesse/Autosuffisance',description:"État de celui qui n'a besoin de rien ni de personne. La richesse est permanente tant que les moyens demeurent."},
    {sense:'se passer de',concept:'Richesse/Autosuffisance',description:''},
  ]);log(r,'ghnw')

  r=await ins('aab',[
    {sense:'père',concept:'Parenté/Paternité',description:"Celui qui engendre. Le père est l'origine permanente de la lignée."},
    {sense:'ancêtre',concept:'Parenté/Paternité',description:''},
  ]);log(r,'aab')

  r=await ins('lhth',[
    {sense:'haleter',concept:'Halètement/Soif',description:"Acte de respirer avec difficulté par la bouche ouverte. Le halètement est l'état de celui qui est épuisé ou assoiffé — la langue pendante comme le chien qui halète. L'image coranique du chien qui halète symbolise celui qui est attaché au monde quoi qu'on fasse."},
    {sense:'être haletant',concept:'Halètement/Soif',description:''},
  ]);log(r,'lhth')

  r=await ins('rsw',[
    {sense:'être stable',concept:'Stabilité/Ancrage',description:"État de ce qui est fermement ancré et ne bouge pas. La stabilité est permanente — les montagnes sont des ancres qui stabilisent la terre."},
    {sense:'être ancré',concept:'Stabilité/Ancrage',description:''},
  ]);log(r,'rsw')

  r=await ins('jly',[
    {sense:'être clair',concept:'Clarté/Manifestation',description:"État de ce qui est évident et ne laisse aucun doute. La clarté est permanente dans ce qui est manifeste — ce qui est jaliy ne peut être nié."},
    {sense:'révéler',concept:'Clarté/Manifestation',description:''},
    {sense:'expulser',concept:'Divers',description:'Faire sortir d\'un lieu — rendre visible en ôtant le voile.'},
  ]);log(r,'jly')

  r=await ins('hfy',[
    {sense:'insister',concept:'Insistance/Excès',description:"Acte de revenir sans cesse sur une demande. L'insistance est un excès dans la demande — elle dépasse la mesure."},
    {sense:'être excessif',concept:'Insistance/Excès',description:''},
    {sense:'être pieds nus',concept:'Divers',description:'Marcher sans chaussure — la nudité du pied.'},
  ]);log(r,'hfy')

  r=await ins('smt',[
    {sense:'se taire',concept:'Silence/Mutisme',description:"Acte de ne pas parler. Le silence est un état intérieur permanent de rétention de la parole — se taire c'est choisir de ne rien dire."},
    {sense:'silence',concept:'Silence/Mutisme',description:''},
  ]);log(r,'smt')

  r=await ins('sjb',[
    {sense:'couler abondamment',concept:'Écoulement/Abondance',description:"Mouvement d'un liquide qui se répand en grande quantité. L'écoulement abondant est directionnel du haut vers le bas — il remplit et couvre tout sur son passage."},
    {sense:'pluie abondante',concept:'Écoulement/Abondance',description:''},
  ]);log(r,'sjb')

  console.log('\n=== Batch 230 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
