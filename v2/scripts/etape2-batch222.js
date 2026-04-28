const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1806, total = 2321

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

  r=await ins('khrs',[
    {sense:'conjecturer',concept:'Conjecture/Estimation',description:"Acte de deviner sans preuve, d'avancer un chiffre ou un avis sans certitude. La conjecture est un jugement sans fondement solide — elle peut être vraie ou fausse. Le kharras est celui qui parle sans savoir."},
    {sense:'estimer au hasard',concept:'Conjecture/Estimation',description:''},
  ]);log(r,'khrs')

  r=await ins('sgr',[
    {sense:'être petit',concept:'Petitesse/Insignifiance',description:"État de ce qui est de taille ou d'importance réduite. La petitesse est permanente dans ce qui est petit — elle rend insignifiant et méprisable ce qui manque de grandeur."},
    {sense:'être insignifiant',concept:'Petitesse/Insignifiance',description:''},
    {sense:'humilié',concept:'Petitesse/Insignifiance',description:''},
  ]);log(r,'sgr')

  r=await ins('nns',[
    {sense:'secourir',concept:'Secours/Aide',description:"Acte de venir en aide à celui qui est en difficulté. Le secours sort du secoureur et atteint le secouru — directionnel et ponctuel."},
    {sense:'se retirer',concept:'Divers',description:'Se soustraire au combat — reculer.'},
  ]);log(r,'nns')

  r=await ins('nsh',[
    {sense:'créer',concept:'Création/Production',description:"Acte de faire naître quelque chose de nouveau. La création fait exister ce qui n'existait pas — elle est le passage du néant à l'être. L'insha est la production originale."},
    {sense:'produire',concept:'Création/Production',description:''},
    {sense:'élever (un enfant)',concept:'Création/Production',description:''},
    {sense:'nuage',concept:'Divers',description:'Ce qui s\'élève dans le ciel — le nuage comme création atmosphérique.'},
  ]);log(r,'nsh')

  r=await ins('bh\u1E6F',[
    {sense:'chercher',concept:'Recherche/Investigation',description:"Acte de fouiller pour trouver. La recherche creuse la surface pour atteindre la profondeur."},
    {sense:'investiguer',concept:'Recherche/Investigation',description:''},
  ]);log(r,'bh\u1E6F')

  r=await ins('ftra',[
    {sense:'inventer',concept:'Invention/Fabrication',description:"Acte de créer de toutes pièces quelque chose qui n'a pas de fondement. L'invention est un mensonge quand elle est attribuée à Dieu — elle sort de l'inventeur et n'a aucune source réelle. Le iftira est la calomnie fabricquée."},
    {sense:'fabriquer (un mensonge)',concept:'Invention/Fabrication',description:''},
    {sense:'calomnier',concept:'Invention/Fabrication',description:''},
  ]);log(r,'ftra')

  r=await ins('\u00F0ra',[
    {sense:'créer',concept:'Création/Multiplication',description:"Acte de faire exister et de multiplier. La création divine produit et répand les êtres dans le monde."},
    {sense:'progéniture',concept:'Création/Multiplication',description:''},
  ]);log(r,'\u00F0ra')

  r=await ins('h\u00F0a',[
    {sense:'celui-ci',concept:'Démonstratif/Proximité',description:"Pronom qui désigne un masculin proche. Pointe vers ce qui est ici."},
    {sense:'ceci',concept:'Démonstratif/Proximité',description:''},
  ]);log(r,'h\u00F0a')

  r=await ins('sll',[
    {sense:'prier (salat)',concept:'Prière/Connexion',description:"Acte de se connecter à Dieu par des gestes et des paroles codifiés. La prière sort du priant et se dirige vers Dieu — c'est directionnel et régulier. La salat est le lien permanent entre l'homme et son Créateur."},
    {sense:'connexion',concept:'Prière/Connexion',description:''},
    {sense:'bénédiction',concept:'Prière/Connexion',description:''},
  ]);log(r,'sll')

  r=await ins('\u1E2Btw',[
    {sense:'pas',concept:'Marche/Progression',description:"Acte élémentaire du déplacement. Le pas est directionnel et ponctuel — chaque pas contribue à un mouvement permanent."},
    {sense:'enjamber',concept:'Marche/Progression',description:''},
  ]);log(r,'\u1E2Btw')

  console.log('\n=== Batch 222 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
