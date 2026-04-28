const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1756, total = 2321

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

  r=await ins('hal',[
    {sense:'est-ce que',concept:'Interrogation',description:"Particule qui ouvre une question fermée. L'interrogation attend une réponse par oui ou non — c'est un acte rationnel de vérification."},
  ]);log(r,'hal')

  r=await ins('wkh',[
    {sense:'prendre',concept:'Prise/Saisie',description:"Acte de s'emparer. Directionnel du preneur vers le pris."},
    {sense:'punir',concept:'Châtiment',description:"Saisir pour châtier — la prise de force punitive."},
  ]);log(r,'wkh')

  r=await ins('haa',[
    {sense:'voici',concept:'Attention/Présentation',description:"Particule qui attire l'attention sur ce qui va être montré. L'appel est directionnel — il ouvre les yeux de l'autre."},
    {sense:'prenez',concept:'Attention/Présentation',description:''},
  ]);log(r,'haa')

  r=await ins('khy',[
    {sense:'craindre',concept:'Crainte/Révérence',description:"État intérieur de peur mêlée de respect face à la grandeur de Dieu ou d'un danger. La khashya est permanente chez celui qui connaît la grandeur de ce qu'il craint — elle est un mélange de connaissance et de crainte. Le savant craint plus car il connaît mieux."},
    {sense:'avoir peur',concept:'Crainte/Révérence',description:''},
    {sense:'redouter',concept:'Crainte/Révérence',description:''},
  ]);log(r,'khy')

  r=await ins('lwm',[
    {sense:'blâmer',concept:'Blâme/Reproche',description:"Acte extérieur d'adresser un reproche à quelqu'un pour ce qu'il a fait. Le blâme sort du blâmeur et atteint le blâmé — c'est directionnel et ponctuel. Le lawm est le jugement négatif qui sanctionne un acte."},
    {sense:'reprocher',concept:'Blâme/Reproche',description:''},
    {sense:'censurer',concept:'Blâme/Reproche',description:''},
  ]);log(r,'lwm')

  r=await ins('leb',[
    {sense:'jouer',concept:'Jeu/Amusement',description:"Acte de s'occuper de ce qui n'a pas de but sérieux. Le jeu est l'opposé du sérieux — il est une occupation qui ne produit rien d'utile. Le laeb est celui dont l'attention est tournée vers le futile au lieu de l'essentiel."},
    {sense:'s\'amuser',concept:'Jeu/Amusement',description:''},
    {sense:'plaisanter',concept:'Jeu/Amusement',description:''},
  ]);log(r,'leb')

  r=await ins('hzb',[
    {sense:'parti',concept:'Parti/Faction',description:"Groupe de personnes unies par une idéologie ou un chef commun. Le hizb est permanent tant que l'alliance dure — il est le rassemblement de ceux qui partagent la même cause. Le parti de Dieu et le parti du diable s'opposent."},
    {sense:'faction',concept:'Parti/Faction',description:''},
    {sense:'groupe',concept:'Parti/Faction',description:''},
  ]);log(r,'hzb')

  r=await ins('mks',[
    {sense:'acquérir',concept:'Acquisition/Gain',description:"Acte d'obtenir quelque chose par son effort. Le gain est le résultat du travail — il entre dans le patrimoine."},
    {sense:'gagner',concept:'Acquisition/Gain',description:''},
  ]);log(r,'mks')

  r=await ins('gdb',[
    {sense:'être en colère',concept:'Colère/Désapprobation',description:"État intérieur d'irritation face à ce qui est inacceptable. La colère est une émotion qui reste dans celui qui la ressent. La désapprobation est un jugement rationnel qui sort du juge et atteint le jugé."},
    {sense:'désapprouver',concept:'Colère/Désapprobation',description:''},
  ]);log(r,'gdb')

  r=await ins('xnz',[
    {sense:'porc',concept:'Animal/Interdit',description:"Animal impur dont la consommation est interdite. L'interdit est permanent — il marque une limite alimentaire divine."},
    {sense:'porcin',concept:'Animal/Interdit',description:''},
  ]);log(r,'xnz')

  console.log('\n=== Batch 217 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
