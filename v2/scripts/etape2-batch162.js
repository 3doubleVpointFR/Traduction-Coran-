const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1208, total = 2321

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

  // 1. fdw (فضو) — s'étendre, déborder, espace
  r=await ins('fdw',[
    {sense:'être spacieux',concept:'Espace/Débordement',description:"État de ce qui s'étend largement et offre de la place. L'espace est un état permanent de ce qui est vaste — il accueille sans limiter. Le débordement est l'espace qui dépasse son contenant."},
    {sense:'déborder',concept:'Espace/Débordement',description:''},
    {sense:'verser (le trop-plein)',concept:'Espace/Débordement',description:''},
    {sense:'s\'étendre',concept:'Espace/Débordement',description:''},
  ]);log(r,'fdw')

  // 2. hnn (هنن) — ici, là, particule de lieu
  r=await ins('hnn',[
    {sense:'ici',concept:'Lieu/Proximité',description:"Adverbe qui désigne le lieu où se trouve le locuteur. Ici est le point d'ancrage de tout discours — il fixe la position dans l'espace. Le lieu présent est permanent tant qu'on y reste."},
    {sense:'là',concept:'Lieu/Proximité',description:''},
    {sense:'en ce lieu',concept:'Lieu/Proximité',description:''},
  ]);log(r,'hnn')

  // 3. jdl (جدل) — disputer, argumenter, tresser
  r=await ins('jdl',[
    {sense:'disputer',concept:'Argumentation/Dispute',description:"Acte extérieur d'opposer des arguments dans un débat. La dispute sort des deux parties et les met face à face — c'est bidirectionnel et conflictuel. L'argumentation est un combat de paroles où chacun cherche à vaincre l'autre par la raison ou la ruse."},
    {sense:'argumenter',concept:'Argumentation/Dispute',description:''},
    {sense:'débattre',concept:'Argumentation/Dispute',description:''},
    {sense:'tresser',concept:'Torsion/Tressage',description:"Acte d'entrelacer des brins pour en faire un tout résistant. Le tressage est un acte extérieur qui crée de la solidité par l'entrelacement — comme l'argumentation qui tisse des preuves."},
    {sense:'être obstiné',concept:'Divers',description:'L\'obstination dans le débat — refuser de céder.'},
  ]);log(r,'jdl')

  // 4. hlq (حلق) — raser, gorge, cercle, anneau
  r=await ins('hlq',[
    {sense:'raser',concept:'Rasage/Coupe',description:"Acte extérieur de couper les cheveux au plus près de la peau. Le rasage est directionnel et ponctuel — il enlève ce qui dépasse et met à nu. Dans le pèlerinage, se raser la tête est un acte de soumission et de renouveau."},
    {sense:'couper les cheveux',concept:'Rasage/Coupe',description:''},
    {sense:'gorge',concept:'Gorge/Passage',description:"Le passage étroit entre la bouche et l'estomac, le lieu par où transitent la parole et la nourriture. La gorge est un conduit permanent — elle est le passage obligé de ce qui entre et sort du corps."},
    {sense:'cercle',concept:'Anneau/Encerclement',description:"Forme fermée qui entoure un espace. Le cercle est permanent dans sa clôture — il n'a ni début ni fin. L'anneau lie ce qu'il entoure."},
    {sense:'anneau',concept:'Anneau/Encerclement',description:''},
  ]);log(r,'hlq')

  // 5. blgh (بلغ) — atteindre, parvenir, transmettre
  r=await ins('blgh',[
    {sense:'atteindre',concept:'Atteinte/Accomplissement',description:"Acte de parvenir au but visé après un parcours. L'atteinte est directionnelle — elle part du voyageur et aboutit à la destination. C'est ponctuel dans l'arrivée mais résulte d'un effort permanent. Atteindre c'est avoir accompli le chemin."},
    {sense:'parvenir à',concept:'Atteinte/Accomplissement',description:''},
    {sense:'atteindre la maturité',concept:'Atteinte/Accomplissement',description:''},
    {sense:'transmettre un message',concept:'Transmission/Communication',description:"Acte extérieur de faire parvenir une information à son destinataire. La transmission sort du messager et atteint le destinataire — c'est directionnel et fidèle. Transmettre c'est faire atteindre la parole à celui qui doit la recevoir."},
    {sense:'communiquer',concept:'Transmission/Communication',description:''},
    {sense:'être éloquent',concept:'Divers',description:'La parole qui atteint son but — l\'éloquence comme accomplissement du langage.'},
  ]);log(r,'blgh')

  // 6. mnk (منك) — variante, probablement "de toi" (min + ka)
  r=await ins('mnk',[
    {sense:'de toi',concept:'Provenance/Attribution',description:"Préposition et pronom indiquant l'origine à partir de l'interlocuteur. La provenance est directionnelle — elle part de celui à qui on s'adresse."},
    {sense:'à partir de toi',concept:'Provenance/Attribution',description:''},
  ]);log(r,'mnk')

  // 7. aḏy (أذي) — nuire, faire du mal, souffrance
  r=await ins('a\u1E0Fy',[
    {sense:'nuire',concept:'Nuisance/Souffrance',description:"Acte extérieur de causer du tort à quelqu'un, de lui infliger une gêne ou une douleur. La nuisance sort du nuisible et atteint celui qui est lésé — c'est directionnel et peut être ponctuel ou prolongé. La souffrance est le résultat de la nuisance chez celui qui la subit."},
    {sense:'faire du mal',concept:'Nuisance/Souffrance',description:''},
    {sense:'souffrance',concept:'Nuisance/Souffrance',description:''},
    {sense:'gêne',concept:'Nuisance/Souffrance',description:''},
    {sense:'impureté (adhaa)',concept:'Divers',description:'Ce qui est sale et gênant — l\'impureté comme nuisance physique.'},
  ]);log(r,'a\u1E0Fy')

  // 8. ras (رأس) — tête, sommet, chef, début
  r=await ins('ras',[
    {sense:'tête',concept:'Tête/Sommet',description:"La partie la plus haute du corps, le siège de la pensée et de la direction. La tête est permanente dans sa position dominante — elle est au sommet et commande le reste. Le sommet est le point le plus élevé d'où tout est visible."},
    {sense:'sommet',concept:'Tête/Sommet',description:''},
    {sense:'chef',concept:'Tête/Sommet',description:''},
    {sense:'début',concept:'Tête/Sommet',description:''},
    {sense:'capital (d\'argent)',concept:'Capital/Principal',description:"La somme de départ qui n'inclut ni profit ni intérêt. Le capital est la base permanente — c'est ce qui reste quand on enlève les ajouts."},
  ]);log(r,'ras')

  // 9. kml (كمل) — être complet, parfait, achever
  r=await ins('kml',[
    {sense:'être complet',concept:'Complétude/Perfection',description:"État de ce à quoi il ne manque rien, qui a atteint sa pleine mesure. La complétude est un état permanent une fois atteint — rien ne peut y être ajouté ni retranché. La perfection est la complétude absolue."},
    {sense:'être parfait',concept:'Complétude/Perfection',description:''},
    {sense:'achever',concept:'Complétude/Perfection',description:''},
    {sense:'compléter',concept:'Complétude/Perfection',description:''},
  ]);log(r,'kml')

  // 10. fyd (فيض) — déborder, couler abondamment, abondance
  r=await ins('fyd',[
    {sense:'déborder',concept:'Débordement/Abondance',description:"Mouvement de ce qui dépasse son contenant par excès de quantité. Le débordement est directionnel du bas vers le haut puis vers l'extérieur — c'est le trop-plein qui s'échappe. L'abondance est un état permanent de profusion qui ne peut être contenue."},
    {sense:'couler abondamment',concept:'Débordement/Abondance',description:''},
    {sense:'abondance',concept:'Débordement/Abondance',description:''},
    {sense:'larmes qui coulent',concept:'Débordement/Abondance',description:''},
    {sense:'mourir (l\'âme déborde)',concept:'Divers',description:'La mort comme débordement de l\'âme hors du corps.'},
  ]);log(r,'fyd')

  console.log('\n=== Batch 162 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
