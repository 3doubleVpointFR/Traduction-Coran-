const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1368, total = 2321

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

  // 1. mwl (مول) — richesse, biens, fortune
  r=await ins('mwl',[
    {sense:'richesse',concept:'Richesse/Biens',description:"Ce que l'on possède de biens matériels et qui permet de vivre. La richesse est un état permanent tant que les biens demeurent — elle donne pouvoir et indépendance. Le mal (biens) est ce qui est désiré et accumulé."},
    {sense:'biens',concept:'Richesse/Biens',description:''},
    {sense:'fortune',concept:'Richesse/Biens',description:''},
    {sense:'être riche',concept:'Richesse/Biens',description:''},
  ]);log(r,'mwl')

  // 2. snbl (سنبل) — épi de blé
  r=await ins('snbl',[
    {sense:'épi',concept:'Épi/Récolte',description:"La partie du blé qui porte les grains, le fruit de la terre après la culture. L'épi est le résultat permanent de la croissance — il contient les graines qui nourrissent. L'épi est le symbole de l'abondance et de la multiplication."},
    {sense:'épi de blé',concept:'Épi/Récolte',description:''},
  ]);log(r,'snbl')

  // 3. bly (بلي) — user, éprouver (variante de bla/blw)
  r=await ins('bly',[
    {sense:'éprouver',concept:'Épreuve/Test',description:"Acte de soumettre quelqu'un à un test qui révèle sa vraie nature. L'épreuve est directionnelle et transformatrice — elle sépare le vrai du faux."},
    {sense:'user',concept:'Usure/Vieillissement',description:"Processus de dégradation par le temps. L'usure est lente et permanente — elle transforme le neuf en vieux."},
    {sense:'vieillir',concept:'Usure/Vieillissement',description:''},
  ]);log(r,'bly')

  // 4. tma (طمأ) — être serein, tranquillité, se calmer
  r=await ins('tma',[
    {sense:'être serein',concept:'Sérénité/Tranquillité',description:"État intérieur de paix profonde où l'âme ne craint plus et ne s'agite plus. La sérénité est permanente chez celui qui l'a atteinte — elle est le calme après la tempête. L'âme sereine (mutmainna) est celle qui a trouvé sa stabilité dans la certitude."},
    {sense:'être tranquille',concept:'Sérénité/Tranquillité',description:''},
    {sense:'se calmer',concept:'Sérénité/Tranquillité',description:''},
    {sense:'être rassuré',concept:'Sérénité/Tranquillité',description:''},
  ]);log(r,'tma')

  // 5. tyr (طير) — oiseau, voler, augure
  r=await ins('tyr',[
    {sense:'oiseau',concept:'Vol/Oiseau',description:"Créature ailée qui se déplace dans les airs. L'oiseau est l'être du ciel — il est libre dans son mouvement et permanent dans sa capacité de voler. Le vol est le mouvement le plus libre qui soit, sans obstacle ni frontière."},
    {sense:'voler',concept:'Vol/Oiseau',description:''},
    {sense:'augure',concept:'Présage/Destin',description:"Le sort que l'on tire des oiseaux ou des signes. Le présage est un signe qui pointe vers l'avenir — il est directionnel du présent vers le futur."},
    {sense:'destin',concept:'Présage/Destin',description:''},
  ]);log(r,'tyr')

  // 6. jbl (جبل) — montagne, créer, pétrir
  r=await ins('jbl',[
    {sense:'montagne',concept:'Montagne/Solidité',description:"Masse rocheuse élevée qui s'élève au-dessus de la terre. La montagne est permanente et immuable — elle est le symbole de la stabilité et de la solidité. Les montagnes sont les piquets de la terre qui l'empêchent de trembler."},
    {sense:'être solide et massif',concept:'Montagne/Solidité',description:''},
    {sense:'créer (jibilla)',concept:'Création/Nature',description:"La nature originelle dans laquelle un être a été créé. La jibilla est la constitution fondamentale — permanente et inchangeable."},
    {sense:'pétrir',concept:'Création/Nature',description:''},
  ]);log(r,'jbl')

  // 7. jza (جزء) — partie, portion, fractionner
  r=await ins('jza',[
    {sense:'partie',concept:'Partie/Fragment',description:"Ce qui résulte de la division d'un tout, un morceau qui fait partie d'un ensemble plus grand. La partie est permanente dans son existence séparée — elle est un fragment qui garde la trace du tout dont elle vient."},
    {sense:'portion',concept:'Partie/Fragment',description:''},
    {sense:'fractionner',concept:'Partie/Fragment',description:''},
  ]);log(r,'jza')

  // 8. adha (أذى) — variante de aḏy (nuisance)
  r=await ins('adha',[
    {sense:'nuire',concept:'Nuisance/Souffrance',description:"Acte de causer du tort. La nuisance sort du nuisible et atteint le lésé — c'est directionnel et peut être ponctuel ou prolongé."},
    {sense:'souffrance',concept:'Nuisance/Souffrance',description:''},
    {sense:'gêne',concept:'Nuisance/Souffrance',description:''},
  ]);log(r,'adha')

  // 9. trb (ترب) — terre, poussière, sol
  r=await ins('trb',[
    {sense:'terre',concept:'Terre/Poussière',description:"La matière dont l'homme est créé et à laquelle il retourne. La terre est permanente et fondamentale — elle est le sol sur lequel tout repose et la poussière dont tout est fait. La terre est l'origine et la fin de la vie matérielle."},
    {sense:'poussière',concept:'Terre/Poussière',description:''},
    {sense:'sol',concept:'Terre/Poussière',description:''},
    {sense:'être pauvre',concept:'Divers',description:'Celui qui n\'a que la terre — la pauvreté comme proximité avec le sol.'},
  ]);log(r,'trb')

  // 10. wbl (وبل) — pluie forte, être lourd, conséquence
  r=await ins('wbl',[
    {sense:'pluie forte',concept:'Pluie/Abondance',description:"Averse abondante et lourde qui tombe avec force sur la terre. La pluie forte est directionnelle du ciel vers la terre — elle est ponctuelle mais ses effets sur la végétation sont permanents. Le wabl est la pluie qui fait fructifier."},
    {sense:'averse',concept:'Pluie/Abondance',description:''},
    {sense:'être lourd (conséquence)',concept:'Gravité/Conséquence',description:"État de ce qui pèse lourdement sur celui qui le subit. La gravité des conséquences est permanente — le châtiment lourd est celui dont on ne se remet pas facilement."},
    {sense:'conséquence grave',concept:'Gravité/Conséquence',description:''},
  ]);log(r,'wbl')

  console.log('\n=== Batch 178 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
