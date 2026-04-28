const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1338, total = 2321

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

  // 1. bht (بهت) — être stupéfait, calomnier, confondre
  r=await ins('bht',[
    {sense:'être stupéfait',concept:'Stupéfaction/Sidération',description:"État intérieur de celui qui est frappé par la surprise au point de ne plus pouvoir parler ni réagir. La stupéfaction est un état ponctuel d'immobilisation — elle fige celui qui la subit face à l'inattendu."},
    {sense:'être confondu',concept:'Stupéfaction/Sidération',description:''},
    {sense:'calomnier',concept:'Calomnie/Fausse accusation',description:"Acte extérieur d'accuser faussement quelqu'un de ce qu'il n'a pas fait. La calomnie sort du calomniateur et atteint le calomnié — c'est directionnel et destructeur."},
    {sense:'fausse accusation',concept:'Calomnie/Fausse accusation',description:''},
  ]);log(r,'bht')

  // 2. akhdh (أخذ) — variante de akhz (prendre, saisir)
  r=await ins('akhdh',[
    {sense:'prendre',concept:'Prise/Saisie',description:"Acte extérieur de s'emparer de quelque chose. La prise sort de celui qui prend et atteint ce qui est pris — c'est directionnel et ponctuel."},
    {sense:'saisir',concept:'Prise/Saisie',description:''},
    {sense:'punir',concept:'Châtiment',description:"Acte de saisir quelqu'un pour le punir. Le châtiment est une prise de force — directionnel et rétributif."},
  ]);log(r,'akhdh')

  // 3. snn (سنن) — chemin tracé, loi, tradition, aiguiser
  r=await ins('snn',[
    {sense:'chemin tracé',concept:'Voie/Loi',description:"La route établie par l'usage ou par Dieu que les gens suivent. La sunna est un chemin permanent — elle est la norme qui guide les pas de ceux qui viennent après. La loi divine est le chemin tracé qui ne change pas à travers les époques."},
    {sense:'loi divine (sunna)',concept:'Voie/Loi',description:''},
    {sense:'tradition',concept:'Voie/Loi',description:''},
    {sense:'aiguiser',concept:'Aiguisement',description:"Acte de rendre tranchant ce qui était émoussé. L'aiguisement est directionnel — il part de la pierre et atteint la lame. Aiguiser c'est préparer l'outil pour qu'il coupe net."},
    {sense:'dent',concept:'Divers',description:'Ce qui est pointu et tranchant dans la bouche — lié au sens d\'aiguiser.'},
  ]);log(r,'snn')

  // 4. nwm (نوم) — dormir, sommeil
  r=await ins('nwm',[
    {sense:'dormir',concept:'Sommeil/Repos',description:"État de suspension temporaire de la conscience et de l'activité. Le sommeil est un état intérieur qui enveloppe tout l'être — il coupe du monde extérieur et laisse le corps et l'âme se régénérer. Le sommeil est ponctuel mais récurrent, frère de la mort dans sa forme."},
    {sense:'sommeil',concept:'Sommeil/Repos',description:''},
    {sense:'s\'endormir',concept:'Sommeil/Repos',description:''},
    {sense:'somnolence',concept:'Sommeil/Repos',description:''},
  ]);log(r,'nwm')

  // 5. lahu (له) — à lui, pour lui
  r=await ins('lahu',[
    {sense:'à lui',concept:'Attribution/Possession',description:"Préposition et pronom qui indiquent que quelque chose appartient ou est destiné au masculin absent. L'attribution est directionnelle — elle va de la chose vers celui à qui elle revient."},
    {sense:'pour lui',concept:'Attribution/Possession',description:''},
  ]);log(r,'lahu')

  // 6. dha (ذوي) — variante dépérissement
  r=await ins('dha',[
    {sense:'possesseurs (dhu/dhat)',concept:'Possession/Attribut',description:"Ceux qui détiennent une qualité ou un attribut. La possession est un état permanent de celui qui a — elle caractérise et distingue."},
    {sense:'essence (dhat)',concept:'Essence/Nature',description:"La nature profonde et immuable d'un être. L'essence est ce qui reste quand tout le superficiel est retiré — c'est permanent et fondamental."},
  ]);log(r,'dha')

  // 7. llḏy (ذلل) — variante de celui qui
  r=await ins('ll\u1E0Fy',[
    {sense:'celui qui',concept:'Pronom relatif',description:"Pronom qui relie deux propositions en désignant une personne ou une chose déjà mentionnée. Le pronom relatif crée un lien permanent entre l'antécédent et la proposition qui le qualifie."},
    {sense:'ceux qui',concept:'Pronom relatif',description:''},
    {sense:'ce qui',concept:'Pronom relatif',description:''},
  ]);log(r,'ll\u1E0Fy')

  // 8. šfe (شفع) — intercéder, être pair, doubler
  r=await ins('\u0161fe',[
    {sense:'intercéder',concept:'Intercession/Médiation',description:"Acte extérieur de plaider en faveur de quelqu'un auprès d'une autorité supérieure. L'intercession sort de l'intercesseur et s'adresse au juge en faveur de l'accusé — c'est tridirectionnel. L'intercesseur se joint à celui qu'il défend, le rendant pair au lieu d'impair."},
    {sense:'plaider pour',concept:'Intercession/Médiation',description:''},
    {sense:'être pair',concept:'Parité/Doublement',description:"État de ce qui est en nombre pair, qui a un compagnon. La parité est un état d'accompagnement — le pair n'est pas seul, il est doublé."},
    {sense:'doubler',concept:'Parité/Doublement',description:''},
  ]);log(r,'\u0161fe')

  // 9. ydh (يدي) — main, puissance, bienfait
  r=await ins('ydh',[
    {sense:'main',concept:'Main/Puissance',description:"L'organe de l'action et de la prise. La main est le moyen permanent par lequel l'être agit sur le monde — elle saisit, donne, frappe et construit. La main symbolise la puissance et la capacité d'agir."},
    {sense:'puissance',concept:'Main/Puissance',description:''},
    {sense:'bienfait',concept:'Main/Puissance',description:''},
    {sense:'devant',concept:'Divers',description:'Ce qui est entre les mains — ce qui est devant soi.'},
  ]);log(r,'ydh')

  // 10. hyt (حوط) — entourer, protéger, garder
  r=await ins('hyt',[
    {sense:'entourer',concept:'Protection/Encerclement',description:"Acte de former un cercle autour de quelque chose pour le protéger de tous côtés. L'encerclement est multidirectionnel — il vient de partout et protège en fermant l'accès. Ce qui est entouré est en sécurité permanente."},
    {sense:'protéger',concept:'Protection/Encerclement',description:''},
    {sense:'garder',concept:'Protection/Encerclement',description:''},
    {sense:'englober',concept:'Protection/Encerclement',description:''},
    {sense:'mur',concept:'Divers',description:'La structure qui entoure et protège — le hayt comme barrière physique.'},
  ]);log(r,'hyt')

  console.log('\n=== Batch 175 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
