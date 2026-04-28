const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2185, total = 2321

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
  const data = [
    ['wka',[{sense:'s\'appuyer',concept:'Appui/Repos',description:"Acte de se reposer sur un support. Directionnel vers le support."}]],
    ['ran',[{sense:'rouiller',concept:'Rouille/Voilement du cœur',description:"État de ce qui est couvert d'une couche d'impureté qui empêche de voir. La rouille du cœur est permanente — elle voile la lumière de la vérité."}]],
    ['zlq',[{sense:'glisser',concept:'Glissement/Instabilité',description:"Mouvement incontrôlé sur une surface lisse. Le glissement est ponctuel mais dangereux — on perd pied."}]],
    ["m-w-\u02C0",[{sense:'eau',concept:'Eau/Liquide',description:"Substance source de vie. Permanente dans sa nature."}]],
    ['gh-w-r',[{sense:'s\'enfoncer',concept:'Enfoncement/Disparition',description:"Mouvement vers le bas sous la surface. L'eau qui s'enfonce ne revient pas."}]],
    ['t-w-e',[{sense:'obéir',concept:'Obéissance/Soumission volontaire',description:"Acte de se conformer par choix. Directionnel et rationnel."}]],
    ['l-h-w',[{sense:'se divertir',concept:'Divertissement/Oubli',description:"Acte de se détourner du sérieux. Le divertissement éloigne de l'essentiel."}]],
    ['t-l-b',[{sense:'demander',concept:'Demande/Recherche',description:"Acte de chercher à obtenir. Directionnel du demandeur vers l'objet."}]],
    ['hshm',[{sense:'briser',concept:'Brisure/Pulvérisation',description:"Acte de réduire en morceaux. La brisure est irréversible — ce qui est hashim ne se recolle pas."}]],
    ['rih',[{sense:'vent',concept:'Vent/Souffle',description:"Mouvement de l'air. Directionnel et peut être doux ou violent."},{sense:'parfum',concept:'Divers',description:''}]],
  ]
  for (const [key, senses] of data) { r = await ins(key, senses); log(r, key) }
  console.log('\n=== Batch 260 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
