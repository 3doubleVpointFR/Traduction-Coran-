const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1776, total = 2321

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

  r=await ins('tme',[
    {sense:'convoiter',concept:'Convoitise/Avidité',description:"État intérieur de désir intense pour ce qu'on n'a pas. La convoitise est directionnelle de l'intérieur vers l'objet désiré — elle tire l'âme vers ce qu'elle veut posséder. L'avide est celui qui ne cesse de vouloir plus."},
    {sense:'désirer ardemment',concept:'Convoitise/Avidité',description:''},
    {sense:'espérer',concept:'Convoitise/Avidité',description:''},
  ]);log(r,'tme')

  r=await ins('gfr',[
    {sense:'pardonner',concept:'Pardon/Couverture',description:"Acte de couvrir la faute et de ne plus en tenir compte. Le pardon sort du pardonneur et atteint le fautif — c'est directionnel et libérateur. Le ghufran est la couverture du péché par la miséricorde — le péché est effacé comme s'il n'avait jamais existé."},
    {sense:'couvrir',concept:'Pardon/Couverture',description:''},
    {sense:'effacer les péchés',concept:'Pardon/Couverture',description:''},
  ]);log(r,'gfr')

  r=await ins('raa',[
    {sense:'voir',concept:'Vision/Perception',description:"Acte de percevoir par les yeux ou l'esprit. La vision est directionnelle — elle saisit la réalité."},
    {sense:'penser',concept:'Opinion',description:"Acte de former un avis. L'opinion est un jugement intérieur."},
  ]);log(r,'raa')

  r=await ins('dme',[
    {sense:'larme',concept:'Larme/Pleur',description:"Liquide qui coule des yeux sous l'effet de l'émotion. La larme est la manifestation physique d'un état intérieur — elle sort de l'œil et coule vers le bas. Les larmes expriment ce que les mots ne peuvent dire."},
    {sense:'pleurer',concept:'Larme/Pleur',description:''},
  ]);log(r,'dme')

  r=await ins('mimma',[
    {sense:'de ce que',concept:'Provenance/Partitivité',description:"Particule composée qui indique l'extraction à partir d'un ensemble. La provenance est directionnelle — elle part de la source vers ce qui en sort."},
    {sense:'parmi ce que',concept:'Provenance/Partitivité',description:''},
  ]);log(r,'mimma')

  r=await ins('maea',[
    {sense:'eau',concept:'Eau/Liquide',description:"Substance liquide source de toute vie. L'eau est permanente dans sa nature — elle coule, purifie et fait vivre."},
  ]);log(r,'maea')

  r=await ins('yhwd',[
    {sense:'juifs',concept:'Judaïsme/Peuple',description:"Ceux qui suivent la religion de Moïse. Le judaïsme est une identité permanente — religieuse et ethnique."},
    {sense:'judaïsme',concept:'Judaïsme/Peuple',description:''},
  ]);log(r,'yhwd')

  r=await ins('rjs',[
    {sense:'impureté',concept:'Impureté/Souillure',description:"État de ce qui est sale et corrompu, que la nature saine repousse. L'impureté est permanente dans ce qui est rijs — elle souille tout ce qu'elle touche. Le rijs est l'abomination morale ou physique qui éloigne de Dieu."},
    {sense:'abomination',concept:'Impureté/Souillure',description:''},
    {sense:'souillure',concept:'Impureté/Souillure',description:''},
  ]);log(r,'rjs')

  r=await ins('dkr',[
    {sense:'mentionner',concept:'Mention/Rappel',description:"Acte de prononcer un nom pour le rendre présent. La mention est directionnelle — elle sort du locuteur et rend présent ce qui était absent."},
    {sense:'se souvenir',concept:'Mention/Rappel',description:''},
    {sense:'mâle',concept:'Masculin',description:"Le genre qui féconde activement. Permanent dans sa nature."},
  ]);log(r,'dkr')

  r=await ins('thl\u1E6F',[
    {sense:'trois',concept:'Nombre/Trinité',description:"Le nombre trois. Le trois est un nombre de complétude et de totalité — il apparaît dans les structures du monde et du discours."},
    {sense:'troisième',concept:'Nombre/Trinité',description:''},
    {sense:'tiers',concept:'Nombre/Trinité',description:''},
  ]);log(r,'thl\u1E6F')

  console.log('\n=== Batch 219 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
