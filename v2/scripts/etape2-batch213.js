const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1715, total = 2321

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

  r=await ins('e\u1E0Fb',[
    {sense:'tourmenter',concept:'Tourment/Châtiment',description:"Acte d'infliger une souffrance intense. Le tourment est directionnel et peut être permanent. Le adhab est le châtiment qui fait souffrir."},
    {sense:'châtiment',concept:'Tourment/Châtiment',description:''},
    {sense:'eau douce',concept:'Douceur',description:"L'eau pure et agréable au goût — permanente dans sa pureté."},
  ]);log(r,'e\u1E0Fb')

  r=await ins('idhan',[
    {sense:'alors',concept:'Conséquence/Temps',description:"Particule qui marque la conséquence ou le moment qui suit. Le idhan lie ce qui vient après à ce qui précède — c'est un connecteur temporel et logique."},
    {sense:'dans ce cas',concept:'Conséquence/Temps',description:''},
  ]);log(r,'idhan')

  r=await ins('sfl',[
    {sense:'être bas',concept:'Bassesse/Infériorité',description:"État de ce qui est au-dessous du niveau normal ou acceptable. La bassesse est permanente dans ce qui est dégradé — elle est l'opposé de l'élévation. Ce qui est en bas est sous tout le reste."},
    {sense:'inférieur',concept:'Bassesse/Infériorité',description:''},
    {sense:'le plus bas',concept:'Bassesse/Infériorité',description:''},
  ]);log(r,'sfl')

  r=await ins('dhdhb',[
    {sense:'hésiter',concept:'Hésitation/Oscillation',description:"État de celui qui balance entre deux options sans pouvoir se décider. L'hésitation est un mouvement intérieur d'oscillation — l'âme va et vient entre deux choix sans se fixer. Le mudhabdhab est celui qui n'est ni d'un côté ni de l'autre."},
    {sense:'osciller',concept:'Hésitation/Oscillation',description:''},
    {sense:'être indécis',concept:'Hésitation/Oscillation',description:''},
  ]);log(r,'dhdhb')

  r=await ins('ksl',[
    {sense:'être paresseux',concept:'Paresse/Nonchalance',description:"État de celui qui ne fait pas l'effort nécessaire par manque de volonté. La paresse est un état intérieur permanent chez celui qui s'y abandonne — elle empêche l'action et gaspille le potentiel. Le kaslan est celui dont le corps est lourd et l'esprit inerte."},
    {sense:'être nonchalant',concept:'Paresse/Nonchalance',description:''},
  ]);log(r,'ksl')

  r=await ins('hw\u1E0F',[
    {sense:'rassembler',concept:'Rassemblement/Contrôle',description:"Acte de réunir et de contenir sous son contrôle. Le rassemblement est multidirectionnel vers un centre — il crée l'ordre à partir du désordre."},
    {sense:'prendre le contrôle',concept:'Rassemblement/Contrôle',description:''},
  ]);log(r,'hw\u1E0F')

  r=await ins('khfa',[
    {sense:'cacher',concept:'Dissimulation/Secret',description:"Acte de rendre invisible. La dissimulation crée un état permanent d'invisibilité."},
    {sense:'être secret',concept:'Dissimulation/Secret',description:''},
  ]);log(r,'khfa')

  r=await ins('yth',[
    {sense:'errer',concept:'Errance/Égarement',description:"État de celui qui marche sans direction et sans but. L'errance est un mouvement permanent sans destination — celui qui erre ne sait pas où il va. Le tayyih est le désert où l'on se perd."},
    {sense:'se perdre',concept:'Errance/Égarement',description:''},
  ]);log(r,'yth')

  r=await ins('asy',[
    {sense:'être triste',concept:'Tristesse/Chagrin',description:"État intérieur de douleur morale face à une perte ou un malheur. La tristesse est un état qui reste dans celui qui la porte — elle est le poids de l'âme qui souffre. L'asaf est le chagrin profond."},
    {sense:'chagrin',concept:'Tristesse/Chagrin',description:''},
  ]);log(r,'asy')

  r=await ins('jzw',[
    {sense:'récompenser',concept:'Rétribution/Récompense',description:"Acte de donner en retour ce qui est mérité, en bien ou en mal. La rétribution sort du rétributeur et atteint celui qui a agi — c'est directionnel et juste. Le jaza est la correspondance exacte entre l'acte et sa conséquence."},
    {sense:'rétribuer',concept:'Rétribution/Récompense',description:''},
    {sense:'punir',concept:'Rétribution/Récompense',description:''},
    {sense:'suffire',concept:'Divers',description:'Ce qui remplace et comble — sens de compensation.'},
  ]);log(r,'jzw')

  console.log('\n=== Batch 213 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
