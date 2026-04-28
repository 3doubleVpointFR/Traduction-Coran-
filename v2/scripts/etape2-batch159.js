const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1178, total = 2321

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

  // 1. athm (أثم) — pécher, faute, péché
  r=await ins('athm',[
    {sense:'pécher',concept:'Péché/Faute',description:"Acte de commettre ce qui est interdit ou de manquer à ce qui est obligatoire. Le péché est un acte qui sort du fautif et crée une dette morale — c'est directionnel vers le mal. Le péché est ponctuel dans l'acte mais ses conséquences peuvent être permanentes dans l'âme."},
    {sense:'commettre une faute',concept:'Péché/Faute',description:''},
    {sense:'péché (ithm)',concept:'Péché/Faute',description:''},
    {sense:'être en retard',concept:'Retard/Lenteur',description:"État de celui qui n'arrive pas au moment attendu. Le retard est un manquement au temps — il est ponctuel mais peut refléter une négligence permanente."},
  ]);log(r,'athm')

  // 2. fyy (فيي → فيء) — revenir, ombre, butin
  r=await ins('fyy',[
    {sense:'revenir',concept:'Retour/Restitution',description:"Acte de retourner à l'état ou au lieu d'origine. Le retour est directionnel — il ramène ce qui était parti. C'est un mouvement de restauration qui rétablit l'ordre initial."},
    {sense:'ombre qui se déplace',concept:'Retour/Restitution',description:''},
    {sense:'butin (fay\')',concept:'Butin/Récupération',description:"Ce qui revient au vainqueur sans combat, ce qui est récupéré. Le butin est un bien qui change de main — il sort du vaincu et revient au vainqueur. C'est le retour d'un bien à qui le mérite."},
    {sense:'récupérer',concept:'Butin/Récupération',description:''},
  ]);log(r,'fyy')

  // 3. rqb (رقب) — surveiller, observer, attendre, cou
  r=await ins('rqb',[
    {sense:'surveiller',concept:'Surveillance/Vigilance',description:"Acte de garder les yeux fixés sur quelque chose pour ne rien manquer. La surveillance sort du veilleur et atteint ce qui est surveillé — c'est directionnel et permanent tant que le danger demeure. Surveiller c'est être en état d'alerte continue."},
    {sense:'observer',concept:'Surveillance/Vigilance',description:''},
    {sense:'attendre',concept:'Surveillance/Vigilance',description:''},
    {sense:'craindre (Dieu)',concept:'Surveillance/Vigilance',description:''},
    {sense:'cou (raqaba)',concept:'Être humain/Esclave',description:"La partie du corps qui relie la tête au tronc. Le cou symbolise la personne entière — libérer un cou c'est libérer un esclave. C'est une métonymie permanente de la personne."},
    {sense:'esclave (libérer un cou)',concept:'Être humain/Esclave',description:''},
  ]);log(r,'rqb')

  // 4. qss (قصص) — raconter, suivre les traces, récit
  r=await ins('qss',[
    {sense:'raconter',concept:'Narration/Récit',description:"Acte extérieur de transmettre une histoire dans l'ordre de ses événements. La narration sort du narrateur et atteint l'auditeur — c'est directionnel et reconstruit le passé. Le récit rend présent ce qui est absent."},
    {sense:'récit',concept:'Narration/Récit',description:''},
    {sense:'suivre les traces',concept:'Suivi/Pistage',description:"Acte de marcher dans les pas de quelqu'un pour retrouver son chemin. Le pistage est directionnel — il suit la direction de celui qui est passé avant. C'est un acte de reconstitution."},
    {sense:'couper',concept:'Divers',description:'Sens concret de couper — tailler, trancher.'},
  ]);log(r,'qss')

  // 5. lbb (لبب) — intelligence, cœur (lubb), noyau
  r=await ins('lbb',[
    {sense:'intelligence pure (lubb)',concept:'Intelligence/Essence',description:"La partie la plus pure de l'intellect, dépouillée de tout ce qui est superficiel. Le lubb est le noyau de l'être pensant — c'est intérieur et permanent. Les gens de lubb sont ceux qui voient l'essence des choses au-delà des apparences."},
    {sense:'noyau',concept:'Intelligence/Essence',description:''},
    {sense:'moelle',concept:'Intelligence/Essence',description:''},
    {sense:'cœur de la chose',concept:'Intelligence/Essence',description:''},
  ]);log(r,'lbb')

  // 6. elk (علك) — mâcher
  r=await ins('elk',[
    {sense:'mâcher',concept:'Mastication',description:"Acte physique de broyer avec les dents. La mastication est un acte intérieur à la bouche — elle transforme le dur en mou. C'est un mouvement répétitif et ponctuel qui prépare la nourriture."},
    {sense:'mastiquer',concept:'Mastication',description:''},
  ]);log(r,'elk')

  // 7. hrr (حرر) — être libre, chaleur, libérer
  r=await ins('hrr',[
    {sense:'être libre',concept:'Liberté/Affranchissement',description:"État de celui qui n'est soumis à aucune contrainte extérieure. La liberté est intérieure et permanente — elle est l'état naturel de l'être qui n'est pas asservi. Le libre est maître de ses choix et de ses actes."},
    {sense:'libérer',concept:'Liberté/Affranchissement',description:''},
    {sense:'affranchir un esclave',concept:'Liberté/Affranchissement',description:''},
    {sense:'chaleur',concept:'Chaleur/Ardeur',description:"État de ce qui brûle ou réchauffe. La chaleur est un état permanent de ce qui est chaud — elle sort de la source et atteint ce qui l'entoure. La chaleur peut être physique (feu) ou morale (ardeur)."},
    {sense:'être chaud',concept:'Chaleur/Ardeur',description:''},
    {sense:'soie',concept:'Divers',description:'Tissu fin et précieux — le vêtement des gens libres et nobles.'},
  ]);log(r,'hrr')

  // 8. anth (أنثى) — féminin, femelle
  r=await ins('anth',[
    {sense:'femelle',concept:'Féminin/Femelle',description:"Le genre qui porte et donne la vie, l'opposé complémentaire du mâle. Le féminin est un état permanent de l'être — il caractérise la nature de ce qui reçoit et génère. La femelle est celle qui porte en elle la vie future."},
    {sense:'féminin',concept:'Féminin/Femelle',description:''},
    {sense:'être de genre féminin',concept:'Féminin/Femelle',description:''},
  ]);log(r,'anth')

  // 9. akhw (أخو) — frère, fraternité
  r=await ins('akhw',[
    {sense:'frère',concept:'Fraternité/Lien',description:"Celui qui partage le même parent ou le même lien d'appartenance. La fraternité est un lien permanent et indéfectible — le frère est celui qui est à côté de soi dans la même famille ou la même communauté. Le lien fraternel est horizontal, entre égaux."},
    {sense:'fraternité',concept:'Fraternité/Lien',description:''},
    {sense:'semblable',concept:'Fraternité/Lien',description:''},
    {sense:'ami proche',concept:'Fraternité/Lien',description:''},
  ]);log(r,'akhw')

  // 10. jnf (جنف) — pencher, dévier, être partial, injuste
  r=await ins('jnf',[
    {sense:'pencher',concept:'Déviation/Partialité',description:"Mouvement qui quitte la ligne droite pour aller vers un côté. La déviation est directionnelle — elle part du centre et va vers un extrême. La partialité est un jugement qui penche injustement d'un côté. C'est un état qui peut être ponctuel (un moment d'injustice) ou permanent (un caractère biaisé)."},
    {sense:'dévier',concept:'Déviation/Partialité',description:''},
    {sense:'être partial',concept:'Déviation/Partialité',description:''},
    {sense:'être injuste',concept:'Déviation/Partialité',description:''},
  ]);log(r,'jnf')

  console.log('\n=== Batch 159 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
