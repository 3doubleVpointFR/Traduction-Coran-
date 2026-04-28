const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1865, total = 2321

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

  r=await ins('k\u00F0lk',[
    {sense:'de même',concept:'Similitude/Référence',description:"Particule qui renvoie à ce qui précède. Crée un lien de continuité."},
    {sense:'ainsi',concept:'Similitude/Référence',description:''},
  ]);log(r,'k\u00F0lk')

  r=await ins('emw',[
    {sense:'être aveugle (spirituellement)',concept:'Aveuglement/Égarement',description:"État de celui qui ne voit pas la vérité malgré les signes. L'aveuglement spirituel est permanent chez celui qui refuse de voir — c'est l'opposé de la guidance."},
    {sense:'errer',concept:'Aveuglement/Égarement',description:''},
  ]);log(r,'emw')

  r=await ins('rqq',[
    {sense:'être fin',concept:'Finesse/Délicatesse',description:"État de ce qui est mince et délicat. La finesse est permanente dans ce qui est fin — elle rend souple et fragile. Le raqq est l'esclave dont le cou est fin — lié au sens de servitude."},
    {sense:'esclave (raqaba)',concept:'Servitude',description:"Celui dont le cou est possédé par un maître. L'esclavage est un état de non-liberté — permanent tant qu'il n'est pas affranchi."},
  ]);log(r,'rqq')

  r=await ins('shhb',[
    {sense:'nuage',concept:'Nuage/Pluie',description:"Masse d'eau suspendue dans le ciel qui porte la pluie. Le nuage est un porteur temporaire — il se charge d'eau et la déverse. Le sahab est le véhicule de la miséricorde céleste."},
    {sense:'tirer',concept:'Divers',description:'Traîner quelque chose — le nuage qui est traîné par le vent.'},
  ]);log(r,'shhb')

  r=await ins('sqn',[
    {sense:'abreuver',concept:'Irrigation/Arrosage',description:"Acte de donner de l'eau à boire ou d'irriguer la terre. L'arrosage est directionnel — il va de la source d'eau vers ce qui a soif. Abreuver c'est donner la vie par l'eau."},
    {sense:'irriguer',concept:'Irrigation/Arrosage',description:''},
  ]);log(r,'sqn')

  r=await ins('mwh',[
    {sense:'eau',concept:'Eau/Liquide',description:"Substance liquide source de vie. Permanente dans sa nature."},
  ]);log(r,'mwh')

  r=await ins('nshh',[
    {sense:'conseiller sincèrement',concept:'Conseil/Sincérité',description:"Acte de donner un avis honnête pour le bien de l'autre. Le conseil sincère sort du conseiller et atteint le conseillé — directionnel et bienveillant. Le nasiha est le conseil pur, sans arrière-pensée."},
    {sense:'être sincère',concept:'Conseil/Sincérité',description:''},
  ]);log(r,'nshh')

  r=await ins('khlq',[
    {sense:'créer',concept:'Création/Formation',description:"Acte de faire exister ce qui n'existait pas. La création sort du Créateur et atteint la créature — directionnel et transformateur."},
    {sense:'nature (khulq)',concept:'Nature/Caractère',description:"La disposition morale innée. Le caractère est permanent — il définit l'être."},
  ]);log(r,'khlq')

  r=await ins('nafe',[
    {sense:'être utile',concept:'Utilité/Profit',description:"État de ce qui apporte un avantage. L'utilité est permanente dans ce qui sert."},
    {sense:'profiter',concept:'Utilité/Profit',description:''},
  ]);log(r,'nafe')

  r=await ins('shl',[
    {sense:'être facile',concept:'Facilité/Plaine',description:"État de ce qui ne demande pas d'effort. La facilité rend accessible ce qui semblait difficile. Le sahl est aussi la plaine — le terrain facile à parcourir."},
    {sense:'plaine',concept:'Facilité/Plaine',description:''},
  ]);log(r,'shl')

  console.log('\n=== Batch 228 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
