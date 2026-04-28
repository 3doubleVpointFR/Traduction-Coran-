const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2025, total = 2321

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

  r=await ins('jbb',[{sense:'puits',concept:'Puits/Profondeur',description:"Trou creusé dans le sol pour atteindre l'eau. Le puits est permanent dans sa profondeur — il est le passage vers ce qui est enfoui. Le jubb est le puits sec où Joseph a été jeté."},{sense:'citerne',concept:'Puits/Profondeur',description:''}]);log(r,'jbb')

  r=await ins('kht',[{sense:'se tromper',concept:'Erreur/Faute involontaire',description:"Acte de commettre une faute sans intention. L'erreur est ponctuelle — elle n'est pas voulue mais ses conséquences existent."},{sense:'erreur',concept:'Erreur/Faute involontaire',description:''}]);log(r,'kht')

  r=await ins('ree',[{sense:'caravane',concept:'Voyage/Commerce',description:"Groupe de voyageurs et de marchands qui se déplacent ensemble. La caravane est temporaire dans son mouvement mais permanente dans sa fonction de transport et d'échange."},{sense:'voyageurs',concept:'Voyage/Commerce',description:''}]);log(r,'ree')

  r=await ins('drhm',[{sense:'dirham',concept:'Monnaie/Valeur',description:"Pièce de monnaie utilisée comme moyen d'échange. Le dirham est permanent dans sa fonction de mesure de valeur."},{sense:'pièce d\'argent',concept:'Monnaie/Valeur',description:''}]);log(r,'drhm')

  r=await ins('zhd',[{sense:'être ascète',concept:'Ascétisme/Détachement',description:"État de celui qui renonce aux biens du monde par choix. Le zuhd est un détachement intérieur permanent — l'ascète ne désire pas ce que le monde offre."},{sense:'se détacher du monde',concept:'Ascétisme/Détachement',description:''}]);log(r,'zhd')

  r=await ins('qms',[{sense:'chemise',concept:'Vêtement/Couverture',description:"Habit qui couvre le corps. La chemise est permanente dans sa fonction de protection — le qamis de Joseph porte les preuves de la vérité."},{sense:'tunique',concept:'Vêtement/Couverture',description:''}]);log(r,'qms')

  r=await ins('swl',[{sense:'embellir (un acte)',concept:'Embellissement/Séduction',description:"Acte de présenter quelque chose sous un jour attrayant. Le taswil est l'embellissement qui séduit — l'âme qui embellit le mal le fait paraître bon."},{sense:'inciter par l\'embellissement',concept:'Embellissement/Séduction',description:''}]);log(r,'swl')

  r=await ins('dly',[{sense:'faire descendre',concept:'Descente/Rapprochement',description:"Acte de baisser quelque chose vers le bas. La descente est directionnelle — elle rapproche de ce qui est en bas. Faire descendre le seau dans le puits c'est chercher l'eau."},{sense:'abaisser',concept:'Descente/Rapprochement',description:''}]);log(r,'dly')

  r=await ins('glq',[{sense:'fermer',concept:'Fermeture/Verrouillage',description:"Acte de bloquer l'accès en fermant la porte. La fermeture est directionnelle — elle empêche l'entrée et crée un espace clos permanent."},{sense:'verrouiller',concept:'Fermeture/Verrouillage',description:''}]);log(r,'glq')

  r=await ins('sjn',[{sense:'emprisonner',concept:'Prison/Enfermement',description:"Acte de confiner quelqu'un dans un lieu clos. L'emprisonnement sort du geôlier et atteint le prisonnier — directionnel et crée un état permanent de privation de liberté."},{sense:'prison',concept:'Prison/Enfermement',description:''}]);log(r,'sjn')

  console.log('\n=== Batch 244 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
