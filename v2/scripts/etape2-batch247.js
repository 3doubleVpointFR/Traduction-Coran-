const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2055, total = 2321

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

  r=await ins('hshs',[{sense:'devenir clair',concept:'Clarification/Vérité',description:"État de ce qui se révèle après avoir été caché. La clarification est le moment où la vérité apparaît — permanente une fois révélée."},{sense:'vérité révélée',concept:'Clarification/Vérité',description:''}]);log(r,'hshs')

  r=await ins('wahd',[{sense:'un',concept:'Unicité/Unité',description:"Le nombre qui ne se divise pas, l'absolu de la singularité. L'unicité est permanente et indivisible — Dieu est un et rien ne lui ressemble."},{sense:'unique',concept:'Unicité/Unité',description:''}]);log(r,'wahd')

  r=await ins('jaeal',[{sense:'faire',concept:'Action/Création',description:"Acte de produire un effet ou de transformer quelque chose en autre chose. Le jaal est l'acte créateur qui transforme — directionnel et ponctuel."},{sense:'rendre',concept:'Action/Création',description:''},{sense:'placer',concept:'Action/Création',description:''}]);log(r,'jaeal')

  r=await ins('zawj',[{sense:'époux/épouse',concept:'Couple/Paire',description:"L'un des deux partenaires d'un couple. Le zawj est la moitié qui complète l'autre — le couple est permanent dans sa complémentarité."},{sense:'paire',concept:'Couple/Paire',description:''}]);log(r,'zawj')

  r=await ins('daew',[{sense:'appeler',concept:'Appel/Invocation',description:"Acte d'élever la voix pour attirer ou invoquer. L'appel sort de l'appelant et atteint l'appelé — directionnel."},{sense:'invoquer',concept:'Appel/Invocation',description:''},{sense:'prier',concept:'Appel/Invocation',description:''}]);log(r,'daew')

  r=await ins('sua',[{sense:'être mauvais',concept:'Mal/Laideur',description:"État de ce qui est contraire au bien. Le mal est permanent dans ce qui est mauvais — il nuit et corrompt."},{sense:'mal',concept:'Mal/Laideur',description:''},{sense:'laideur',concept:'Mal/Laideur',description:''}]);log(r,'sua')

  r=await ins('jhz',[{sense:'équiper',concept:'Préparation/Équipement',description:"Acte de fournir le nécessaire pour un voyage ou une mission. L'équipement sort du fournisseur et atteint celui qui est équipé — directionnel."},{sense:'préparer',concept:'Préparation/Équipement',description:''}]);log(r,'jhz')

  r=await ins('rhl',[{sense:'voyager',concept:'Voyage/Départ',description:"Acte de quitter un lieu pour un autre. Le voyage est directionnel — il part d'ici vers là-bas. Le rahl est la monture et le bagage du voyageur."},{sense:'monture',concept:'Voyage/Départ',description:''}]);log(r,'rhl')

  r=await ins('nee',[{sense:'bétail',concept:'Bétail/Troupeau',description:"Les animaux domestiques qu'on possède. Le anaam est le bétail — richesse permanente."},{sense:'troupeaux',concept:'Bétail/Troupeau',description:''}]);log(r,'nee')

  r=await ins('bde',[{sense:'quelques',concept:'Nombre/Petite quantité',description:"Un nombre compris entre trois et neuf. Le bidaa est une petite quantité indéfinie — ni beaucoup ni peu."},{sense:'entre trois et neuf',concept:'Nombre/Petite quantité',description:''}]);log(r,'bde')

  console.log('\n=== Batch 247 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
