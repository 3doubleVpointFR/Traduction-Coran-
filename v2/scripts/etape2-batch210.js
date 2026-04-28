const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1686, total = 2321

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

  // b'd still not found, skip it
  console.log('SKIP b\'d: key mismatch, moving on')

  r=await ins('emd',[
    {sense:'faire exprès',concept:'Intention/Volonté',description:"Acte accompli avec préméditation et conscience. L'intention est un mouvement intérieur de la volonté qui dirige l'acte — c'est le contraire de l'accident. Ce qui est fait exprès engage la responsabilité de celui qui agit."},
    {sense:'colonne',concept:'Support/Pilier',description:"Ce qui soutient et maintient debout une structure. La colonne est permanente dans sa fonction de support — elle porte ce qui est au-dessus d'elle."},
    {sense:'pilier',concept:'Support/Pilier',description:''},
  ]);log(r,'emd')

  r=await ins('sltn',[
    {sense:'autorité',concept:'Pouvoir/Preuve',description:"La force qui s'impose par le droit ou par la puissance. Le sultan est à la fois le pouvoir politique et la preuve intellectuelle — il donne autorité à celui qui le détient. Le sultan est permanent tant que le pouvoir dure."},
    {sense:'pouvoir',concept:'Pouvoir/Preuve',description:''},
    {sense:'preuve',concept:'Pouvoir/Preuve',description:''},
  ]);log(r,'sltn')

  r=await ins('lss',[
    {sense:'toucher',concept:'Contact/Atteinte',description:"Acte de mettre en contact physique deux choses. Le toucher est directionnel — il part de celui qui touche et atteint ce qui est touché. Le contact peut être doux (caresse) ou violent (frappe)."},
    {sense:'atteindre',concept:'Contact/Atteinte',description:''},
    {sense:'rapport intime',concept:'Contact/Atteinte',description:''},
  ]);log(r,'lss')

  r=await ins('ghn',[
    {sense:'butin',concept:'Butin/Capture',description:"Ce qui est pris à l'ennemi après la victoire. Le butin sort de la possession du vaincu et entre dans celle du vainqueur — c'est un transfert directionnel. Le ghanimah est la récompense du combattant."},
    {sense:'prendre comme butin',concept:'Butin/Capture',description:''},
    {sense:'mouton (ghanam)',concept:'Divers',description:'Les ovins — le bétail le plus courant.'},
  ]);log(r,'ghn')

  r=await ins('hyl',[
    {sense:'ruse',concept:'Ruse/Stratagème',description:"Moyen indirect pour atteindre un but quand la voie directe est bloquée. La ruse est un acte de l'intelligence — elle contourne l'obstacle au lieu de le forcer. La hila est la capacité de trouver un moyen."},
    {sense:'stratagème',concept:'Ruse/Stratagème',description:''},
    {sense:'moyen',concept:'Ruse/Stratagème',description:''},
    {sense:'ne pas pouvoir',concept:'Impuissance',description:"État de celui qui n'a pas les moyens d'agir. L'impuissance est l'absence de hila — celui qui ne peut pas est celui qui n'a aucun moyen."},
  ]);log(r,'hyl')

  r=await ins('rghm',[
    {sense:'malgré',concept:'Contrainte/Humiliation',description:"Préposition qui indique que l'acte se fait contre la volonté. Malgré impose une réalité que l'on n'a pas choisie — c'est la soumission forcée. Ragham al-anf est l'humiliation du nez dans la poussière."},
    {sense:'humilier',concept:'Contrainte/Humiliation',description:''},
    {sense:'nez dans la poussière',concept:'Contrainte/Humiliation',description:''},
  ]);log(r,'rghm')

  r=await ins('wqa',[
    {sense:'tomber',concept:'Chute/Occurrence',description:"Acte de se retrouver dans une situation par la force des choses. La chute est directionnelle vers le bas — ce qui tombe arrive à un endroit sans l'avoir voulu. L'occurrence est l'événement qui tombe dans le réel."},
    {sense:'arriver (événement)',concept:'Chute/Occurrence',description:''},
    {sense:'se produire',concept:'Chute/Occurrence',description:''},
  ]);log(r,'wqa')

  r=await ins('khasm',[
    {sense:'adversaire',concept:'Adversité/Litige',description:"Celui qui s'oppose dans un conflit. L'adversité est bidirectionnelle — les deux parties s'affrontent."},
    {sense:'disputer',concept:'Adversité/Litige',description:''},
  ]);log(r,'khasm')

  r=await ins('dhy',[
    {sense:'se faner',concept:'Dépérissement/Déclin',description:"État de ce qui perd sa fraîcheur progressivement. Le dépérissement est lent et permanent."},
    {sense:'dépérir',concept:'Dépérissement/Déclin',description:''},
  ]);log(r,'dhy')

  console.log('\n=== Batch 210 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
