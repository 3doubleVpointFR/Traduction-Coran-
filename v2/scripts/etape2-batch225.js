const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1835, total = 2321

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

  // Try 'mn with different quote chars
  const amn_tries = ["'mn", "\u2018mn", "\u2019mn", "amn"]
  for (const t of amn_tries) {
    const {data} = await db.from('word_analyses').select('id').eq('word_key', t).limit(1)
    if (data && data[0]) {
      r=await ins(t,[
        {sense:'croire',concept:'Foi/Sécurité',description:"Acte intérieur d'adhérer à une vérité avec confiance. La foi est un état permanent de sécurité — l'iman est la paix de l'âme qui sait."},
        {sense:'être en sécurité',concept:'Foi/Sécurité',description:''},
        {sense:'confiance',concept:'Foi/Sécurité',description:''},
      ]);log(r,t)
      break
    }
  }

  r=await ins('sghr',[
    {sense:'être petit',concept:'Petitesse/Insignifiance',description:"État de ce qui manque de taille ou d'importance. La petitesse rend insignifiant."},
    {sense:'humilié',concept:'Petitesse/Insignifiance',description:''},
  ]);log(r,'sghr')

  r=await ins('abl',[
    {sense:'chameau',concept:'Chameau/Transport',description:"Animal du désert qui porte les charges lourdes et traverse les vastes étendues. Le chameau est permanent dans sa force et sa patience — il est le vaisseau du désert."},
  ]);log(r,'abl')

  r=await ins('dhwm',[
    {sense:'blâmer',concept:'Blâme/Reproche',description:"Acte d'adresser un reproche. Le blâme sort du blâmeur et atteint le blâmé — directionnel et ponctuel."},
    {sense:'critiquer',concept:'Blâme/Reproche',description:''},
  ]);log(r,'dhwm')

  r=await ins('\u0161jr',[
    {sense:'arbre',concept:'Arbre/Végétation',description:"Plante enracinée dans le sol dont le tronc s'élève vers le ciel. L'arbre est permanent dans sa position — il est le symbole de la vie enracinée. L'arbre interdit au paradis est l'épreuve de l'obéissance."},
    {sense:'se disputer',concept:'Dispute/Conflit',description:"Acte de s'opposer dans un débat. La dispute est bidirectionnelle — les deux parties s'enchevêtrent comme les branches d'un arbre."},
  ]);log(r,'\u0161jr')

  r=await ins('wsws',[
    {sense:'murmurer',concept:'Murmure/Tentation',description:"Acte de souffler des pensées mauvaises dans le cœur de quelqu'un de façon insidieuse et répétée. Le waswas sort du tentateur et atteint le cœur de la victime — c'est directionnel et invisible. Le murmure du diable est permanent tant qu'on ne cherche pas refuge auprès de Dieu."},
    {sense:'tenter',concept:'Murmure/Tentation',description:''},
    {sense:'chuchoter',concept:'Murmure/Tentation',description:''},
  ]);log(r,'wsws')

  r=await ins('hmy',[
    {sense:'protéger',concept:'Protection/Interdiction',description:"Acte d'empêcher l'accès à quelque chose pour le préserver. La protection crée une zone interdite — directionnelle et permanente."},
    {sense:'interdire',concept:'Protection/Interdiction',description:''},
    {sense:'zone protégée (hima)',concept:'Protection/Interdiction',description:''},
  ]);log(r,'hmy')

  r=await ins('bdy',[
    {sense:'apparaître',concept:'Apparition/Manifestation',description:"Acte de devenir visible. L'apparition est le passage du caché au manifeste — directionnel de l'intérieur vers l'extérieur."},
    {sense:'montrer',concept:'Apparition/Manifestation',description:''},
    {sense:'commencer',concept:'Divers',description:'Être le premier à faire — sens de début.'},
  ]);log(r,'bdy')

  r=await ins('\u0161re',[
    {sense:'légiférer',concept:'Législation/Voie légale',description:"Acte de poser des lois. La sharia est la voie tracée par Dieu — permanente dans sa guidance."},
    {sense:'chemin',concept:'Législation/Voie légale',description:''},
  ]);log(r,'\u0161re')

  r=await ins('tfq',[
    {sense:'commencer',concept:'Commencement/Initiative',description:"Acte de se mettre à faire quelque chose. Le commencement est le premier pas — ponctuel mais décisif. Tafaqa signifie qu'on s'est mis à l'action."},
    {sense:'se mettre à',concept:'Commencement/Initiative',description:''},
  ]);log(r,'tfq')

  console.log('\n=== Batch 225 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
