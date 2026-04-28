const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 388, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('[SKIP] '+key+' — non trouvé'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('[SKIP] '+key+' — déjà fait'); return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key, conceptDescs) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    for (const [concept, desc] of Object.entries(conceptDescs)) {
      console.log('▸ '+concept)
      console.log('  '+desc)
    }
  }
}

async function run() {
  let r

  // 389. ḏwn (ذون) — en dessous, inférieur
  r = await ins('ḏwn', [
    {sense:'en dessous',concept:'Infériorité/Proximité',description:"Position plus basse que quelque chose d'autre — en dessous (dûn) indique ce qui est inférieur en position ou en rang. C'est relationnel et directionnel par rapport à un point de référence. Ce qui est en dessous de Dieu est créature. Prendre des alliés en dessous de Dieu c'est leur donner un rang qui ne leur appartient pas."},
    {sense:'inférieur',concept:'Infériorité/Proximité',description:''},
    {sense:'moindre',concept:'Infériorité/Proximité',description:''},
    {sense:'proche',concept:'Infériorité/Proximité',description:''},
    {sense:'sans',concept:'Exclusion',description:"En dehors de, à l'exclusion de — 'min dûn' exclut ce qui vient après. Les alliés pris en dehors de Dieu ne peuvent rien."},
  ])
  log(r,'ḏwn',{'Infériorité/Proximité':"Position plus basse. Relationnel. Ce qui est sous Dieu est créature.",'Exclusion':"En dehors de. À l'exclusion de."})

  // 390. fra (فرع) — branche, sommet
  r = await ins('fra', [
    {sense:'branche',concept:'Ramification/Élévation',description:"Partie qui s'étend à partir du tronc principal — la branche (far') est permanente comme extension de l'arbre. Elle monte vers le ciel en s'éloignant de la racine. La bonne parole est comme un arbre bon dont la racine est ferme et la branche (far'uhâ) dans le ciel. La branche représente ce qui s'élève et s'épanouit."},
    {sense:'rameau',concept:'Ramification/Élévation',description:''},
    {sense:'sommet',concept:'Ramification/Élévation',description:''},
    {sense:'élever',concept:'Ramification/Élévation',description:''},
  ])
  log(r,'fra',{'Ramification/Élévation':"Extension du tronc vers le ciel. La branche de la bonne parole s'élève."})

  // 391. mdn (مدن) — ville
  r = await ins('mdn', [
    {sense:'ville',concept:'Établissement urbain',description:"Agglomération importante où vivent les gens — la ville (madîna) est permanente comme lieu de civilisation et de rassemblement. C'est l'espace de la vie sociale organisée, distinct du désert des nomades. Médine (al-Madîna) est la ville du Prophète, lieu de l'émigration et de l'établissement de la communauté."},
    {sense:'cité',concept:'Établissement urbain',description:''},
    {sense:'Médine',concept:'Établissement urbain',description:''},
  ])
  log(r,'mdn',{'Établissement urbain':"Lieu de civilisation. Espace de vie sociale. Médine, ville du Prophète."})

  // 392. qml (قمل) — poux
  r = await ins('qml', [
    {sense:'poux',concept:'Fléau/Nuisible',description:"Petits insectes parasites qui infestent les cheveux — les poux (qummal) sont un fléau envoyé par Dieu sur le peuple de Pharaon. C'est ponctuel comme châtiment mais permanent comme espèce nuisible. Les poux font partie des signes envoyés à l'Égypte pour briser l'orgueil de Pharaon."},
    {sense:'vermine',concept:'Fléau/Nuisible',description:''},
    {sense:'parasites',concept:'Fléau/Nuisible',description:''},
  ])
  log(r,'qml',{'Fléau/Nuisible':"Parasites. Fléau envoyé sur Pharaon. Signe pour briser l'orgueil."})

  // 393. mða (مذا) — quoi, que
  r = await ins('mða', [
    {sense:'quoi',concept:'Interrogation',description:"Pronom interrogatif qui demande l'identification de quelque chose — mâdhâ interroge sur la nature ou l'identité de ce qu'on ne connaît pas. C'est directionnel vers l'inconnu qu'on cherche à connaître. Que dépensez-vous ? Qu'est-ce que cela ? L'interrogation ouvre l'espace de la réponse."},
    {sense:'que',concept:'Interrogation',description:''},
    {sense:'quelle chose',concept:'Interrogation',description:''},
  ])
  log(r,'mða',{'Interrogation':"Demande l'identification. Directionnel vers l'inconnu. Ouvre l'espace de la réponse."})

  // 394. rhh (رحح) — spacieux
  r = await ins('rhh', [
    {sense:'spacieux',concept:'Espace/Largeur',description:"Qui offre beaucoup de place — ce qui est spacieux permet le mouvement et la liberté. C'est permanent comme qualité d'étendue. La terre de Dieu est spacieuse pour qui veut émigrer dans Sa voie."},
    {sense:'large',concept:'Espace/Largeur',description:''},
    {sense:'étendu',concept:'Espace/Largeur',description:''},
  ])
  log(r,'rhh',{'Espace/Largeur':"Offre beaucoup de place. Permet mouvement et liberté. La terre de Dieu est spacieuse."})

  // 395. dh-l-k (ذلك) — celui-là
  r = await ins('dh-l-k', [
    {sense:'celui-là',concept:'Démonstratif distant',description:"Pronom qui désigne ce qui est éloigné — dhâlika pointe vers le lointain dans l'espace ou le discours. C'est directionnel vers ce qui n'est pas immédiatement présent. Ce Livre-là (dhâlika l-kitâb), pas de doute à son sujet. Le démonstratif distant confère solennité et distance respectueuse."},
    {sense:'cela',concept:'Démonstratif distant',description:''},
    {sense:'ce',concept:'Démonstratif distant',description:''},
  ])
  log(r,'dh-l-k',{'Démonstratif distant':"Pointe vers le lointain. Confère solennité. Ce Livre-là."})

  // 396. ḏhy (ذهي) — briller, or
  r = await ins('ḏhy', [
    {sense:'briller',concept:'Éclat/Splendeur',description:"Émettre de la lumière ou réfléchir avec intensité — ce qui brille attire le regard et se distingue dans l'obscurité. L'éclat est permanent comme qualité de ce qui rayonne. L'or brille de son éclat propre."},
    {sense:'éclat',concept:'Éclat/Splendeur',description:''},
    {sense:'resplendir',concept:'Éclat/Splendeur',description:''},
  ])
  log(r,'ḏhy',{'Éclat/Splendeur':"Émettre de la lumière. Attire le regard. Qualité de ce qui rayonne."})

  // 397. dss (دسس) — enfouir, cacher
  r = await ins('dss', [
    {sense:'enfouir',concept:'Dissimulation/Enterrement',description:"Cacher quelque chose sous terre ou hors de vue — enfouir (dassa) est directionnel vers le caché, vers le bas. C'est ponctuel dans l'acte mais crée un état de dissimulation. Celui qui enfouit son âme dans le péché l'enterre sous les fautes. Les Arabes d'avant l'Islam enfouissaient leurs filles vivantes par honte."},
    {sense:'cacher',concept:'Dissimulation/Enterrement',description:''},
    {sense:'enterrer',concept:'Dissimulation/Enterrement',description:''},
    {sense:'corrompre',concept:'Corruption',description:"Abîmer par des actes cachés — la corruption de l'âme se fait par accumulation de péchés enfouis. Celui qui corrompt son âme a échoué."},
  ])
  log(r,'dss',{'Dissimulation/Enterrement':"Cacher vers le bas. Les filles enfouies vivantes. L'âme enfouie sous les péchés.",'Corruption':"Abîmer par actes cachés. Celui qui corrompt son âme échoue."})

  // 398. f k r (فكر) — réfléchir
  r = await ins('f k r', [
    {sense:'réfléchir',concept:'Réflexion/Méditation',description:"Exercer sa pensée pour comprendre ou résoudre — la réflexion (fikr/tafakkur) est un acte intérieur de l'intellect. C'est directionnel vers l'objet de la pensée. Le Coran appelle à réfléchir sur les signes de Dieu dans la création. Ceux qui réfléchissent accèdent à la compréhension que les distraits n'atteignent pas."},
    {sense:'méditer',concept:'Réflexion/Méditation',description:''},
    {sense:'penser',concept:'Réflexion/Méditation',description:''},
    {sense:'considérer',concept:'Réflexion/Méditation',description:''},
  ])
  log(r,'f k r',{'Réflexion/Méditation':"Exercer sa pensée. Intérieur. Le Coran appelle à réfléchir sur les signes."})

  console.log('\n=== Batch 41 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
