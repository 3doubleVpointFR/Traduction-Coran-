const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1548, total = 2321

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

  // 1. kyd (كيد) — ruser, comploter, stratagème
  r=await ins('kyd',[
    {sense:'ruser',concept:'Ruse/Stratagème',description:"Acte de planifier secrètement pour atteindre un but en trompant l'adversaire. La ruse sort du ruseur et vise celui qui est visé — c'est directionnel et caché. Le kayd est le plan élaboré dans l'ombre — il peut être divin (contre les injustes) ou humain (contre les innocents)."},
    {sense:'comploter',concept:'Ruse/Stratagème',description:''},
    {sense:'stratagème',concept:'Ruse/Stratagème',description:''},
  ]);log(r,'kyd')

  // 2. hdhh (هذه) — celle-ci (démonstratif féminin proche)
  r=await ins('hdhh',[
    {sense:'celle-ci',concept:'Démonstratif/Proximité',description:"Pronom qui désigne un féminin proche dans l'espace ou le temps. Le démonstratif de proximité pointe vers ce qui est ici — c'est directionnel vers le proche. Il crée une intimité avec ce qui est désigné."},
    {sense:'cette',concept:'Démonstratif/Proximité',description:''},
  ]);log(r,'hdhh')

  // 3. anm (أنم → أنعام) — bétail, troupeaux
  r=await ins('anm',[
    {sense:'bétail',concept:'Bétail/Troupeau',description:"Les animaux domestiques que l'on possède et dont on tire profit — chameaux, bovins, ovins. Le bétail est une richesse permanente et tangible — il nourrit, transporte et symbolise la prospérité."},
    {sense:'troupeaux',concept:'Bétail/Troupeau',description:''},
    {sense:'animaux domestiques',concept:'Bétail/Troupeau',description:''},
  ]);log(r,'anm')

  // 4. ghyz (غيظ) — rage, colère intense, fureur
  r=await ins('ghyz',[
    {sense:'rage',concept:'Rage/Colère intense',description:"État intérieur de colère extrême qui bouillonne et cherche à exploser. La rage est un état violent qui reste dans celui qui la ressent — elle est plus intense que la simple colère. Le ghayz est un feu intérieur que le sage retient et que le fou laisse éclater."},
    {sense:'colère intense',concept:'Rage/Colère intense',description:''},
    {sense:'fureur',concept:'Rage/Colère intense',description:''},
    {sense:'retenir sa colère',concept:'Rage/Colère intense',description:''},
  ]);log(r,'ghyz')

  // 5. ḏwt (ذوت → ذات) — essence, possesseur féminin
  r=await ins('\u1E0Fwt',[
    {sense:'essence (dhat)',concept:'Essence/Nature',description:"La nature profonde et immuable d'un être. L'essence est ce qui reste quand on enlève les accidents — c'est permanent et fondamental. La dhat est le soi véritable, l'identité profonde."},
    {sense:'possesseur (féminin)',concept:'Possession/Attribut',description:"Celle qui détient une qualité ou un attribut. Le dhat désigne l'être féminin dans sa relation avec ce qu'il possède."},
  ]);log(r,'\u1E0Fwt')

  // 6. twn (طون) — variante, possiblement ventre/intérieur
  r=await ins('twn',[
    {sense:'couche',concept:'Couche/Épaisseur',description:"Un niveau superposé à un autre. La couche est permanente dans sa position — elle est l'une des strates qui composent un tout. Les cieux sont des couches superposées."},
    {sense:'pli',concept:'Couche/Épaisseur',description:''},
  ]);log(r,'twn')

  // 7. khbl (خبل) — corrompre, troubler l'esprit, perte
  r=await ins('khbl',[
    {sense:'corrompre',concept:'Corruption/Trouble',description:"Acte de dégrader ce qui était sain, de semer le désordre dans l'esprit ou les affaires. La corruption sort du corrupteur et atteint ce qui est corrompu — c'est directionnel et destructeur. Le khabal est le trouble de l'esprit qui empêche de voir clair."},
    {sense:'troubler l\'esprit',concept:'Corruption/Trouble',description:''},
    {sense:'perte',concept:'Corruption/Trouble',description:''},
  ]);log(r,'khbl')

  // 8. dww (دوو → دون) — en dessous, sans, inférieur
  r=await ins('dww',[
    {sense:'en dessous de',concept:'Infériorité/En deçà',description:"Position qui est plus basse que le point de référence. L'infériorité spatiale est permanente — ce qui est en dessous est sous l'autorité ou la domination de ce qui est au-dessus."},
    {sense:'sans',concept:'Infériorité/En deçà',description:''},
    {sense:'inférieur à',concept:'Infériorité/En deçà',description:''},
  ]);log(r,'dww')

  // 9. bghd (بغض) — haïr, détester, haine
  r=await ins('bghd',[
    {sense:'haïr',concept:'Haine/Aversion',description:"État intérieur de rejet profond et hostile envers quelqu'un ou quelque chose. La haine est un état permanent et intense — elle dépasse la simple aversion pour devenir un sentiment actif de rejet. La haine est l'opposé de l'amour."},
    {sense:'détester',concept:'Haine/Aversion',description:''},
    {sense:'haine',concept:'Haine/Aversion',description:''},
  ]);log(r,'bghd')

  // 10. fmh (فمه → فم/أفواه) — bouche
  r=await ins('fmh',[
    {sense:'bouche',concept:'Bouche/Parole',description:"L'ouverture du corps par laquelle sortent la parole et entrent la nourriture. La bouche est permanente dans sa double fonction — elle est le lieu de la parole et de l'alimentation. Ce qui sort de la bouche révèle ce qui est dans le cœur."},
    {sense:'bouches (afwah)',concept:'Bouche/Parole',description:''},
  ]);log(r,'fmh')

  console.log('\n=== Batch 196 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
