const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1308, total = 2321

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

  // 1. mla (ملأ) — remplir, assemblée de notables
  r=await ins('mla',[
    {sense:'remplir',concept:'Plénitude/Remplissage',description:"Acte extérieur de combler un espace vide jusqu'à sa capacité maximale. Le remplissage est directionnel de l'extérieur vers l'intérieur — il crée un état permanent de plénitude. Ce qui est rempli ne peut plus rien accepter."},
    {sense:'être plein',concept:'Plénitude/Remplissage',description:''},
    {sense:'assemblée de notables (mala)',concept:'Assemblée/Élite',description:"Le groupe des gens importants qui remplissent le conseil de leur présence. L'assemblée est la plénitude humaine d'un lieu — les notables sont ceux dont la présence pèse."},
    {sense:'notables',concept:'Assemblée/Élite',description:''},
  ]);log(r,'mla')

  // 2. nla (نول) — donner, accorder, obtenir
  r=await ins('nla',[
    {sense:'donner',concept:'Don/Obtention',description:"Acte extérieur de transmettre quelque chose à quelqu'un. Le don sort du donneur et atteint le receveur — c'est directionnel et généreux. Donner c'est faire passer un bien de soi vers l'autre."},
    {sense:'accorder',concept:'Don/Obtention',description:''},
    {sense:'obtenir',concept:'Don/Obtention',description:''},
  ]);log(r,'nla')

  // 3. fsl (فصل) — séparer, trancher, distinguer, sevrer
  r=await ins('fsl',[
    {sense:'séparer',concept:'Séparation/Distinction',description:"Acte extérieur de mettre à part deux choses qui étaient jointes. La séparation sort de celui qui sépare et atteint ce qui est séparé — c'est directionnel et crée une frontière permanente. Séparer c'est distinguer le vrai du faux, le juste de l'injuste."},
    {sense:'trancher',concept:'Séparation/Distinction',description:''},
    {sense:'distinguer',concept:'Séparation/Distinction',description:''},
    {sense:'sevrer',concept:'Séparation/Distinction',description:''},
    {sense:'détailler',concept:'Séparation/Distinction',description:''},
    {sense:'saison (fasl)',concept:'Divers',description:'La séparation entre deux périodes de l\'année.'},
  ]);log(r,'fsl')

  // 4. twt (طوت → طالوت) — Saül/Talut (nom propre)
  r=await ins('twt',[
    {sense:'Talut (Saül)',concept:'Nom propre',description:"Nom du roi d'Israël choisi par Dieu pour commander l'armée. C'est un nom propre permanent qui désigne un personnage historique — celui qui fut éprouvé par la rivière."},
  ]);log(r,'twt')

  // 5. jnd (جند) — armée, soldats, troupe
  r=await ins('jnd',[
    {sense:'armée',concept:'Armée/Troupe',description:"Groupe organisé de combattants rassemblés sous un commandement. L'armée est un corps permanent tant que le conflit dure — elle sort de la communauté et agit vers l'ennemi. Le jund est la force collective qui exécute la volonté du commandant."},
    {sense:'soldats',concept:'Armée/Troupe',description:''},
    {sense:'troupe',concept:'Armée/Troupe',description:''},
  ]);log(r,'jnd')

  // 6. ghtrf (غترف) — être orgueilleux, arrogant, luxueux
  r=await ins('ghtrf',[
    {sense:'vivre dans le luxe',concept:'Luxe/Arrogance',description:"État de celui qui vit dans l'abondance excessive au point d'oublier la réalité. Le luxe est un état permanent chez le riche orgueilleux — il coupe de la réalité et rend sourd aux avertissements. Le mutraf est celui que la richesse a rendu arrogant."},
    {sense:'être gâté par la richesse',concept:'Luxe/Arrogance',description:''},
    {sense:'être arrogant',concept:'Luxe/Arrogance',description:''},
  ]);log(r,'ghtrf')

  // 7. ghrf (غرف) — puiser, chambre haute, poignée
  r=await ins('ghrf',[
    {sense:'puiser',concept:'Puisage/Prélèvement',description:"Acte extérieur de prendre de l'eau avec la main ou un récipient. Le puisage est directionnel — il va de la source vers celui qui puise. C'est un acte ponctuel de prélèvement, une poignée prise dans l'abondance."},
    {sense:'poignée (d\'eau)',concept:'Puisage/Prélèvement',description:''},
    {sense:'chambre haute (ghurfa)',concept:'Élévation/Étage',description:"Pièce située en hauteur, l'étage noble de la maison. La chambre haute est permanente dans sa position élevée — elle symbolise la récompense et l'honneur."},
    {sense:'étage',concept:'Élévation/Étage',description:''},
  ]);log(r,'ghrf')

  // 8. jwz (جوز) — traverser, passer, être permis
  r=await ins('jwz',[
    {sense:'traverser',concept:'Traversée/Passage',description:"Acte de passer d'un côté à l'autre en franchissant un obstacle. La traversée est directionnelle — elle va d'ici vers là-bas. C'est ponctuel dans l'acte mais décisif dans le résultat."},
    {sense:'passer',concept:'Traversée/Passage',description:''},
    {sense:'être permis',concept:'Permission/Licéité',description:"État de ce qui est autorisé et ne pose pas de problème. La permission est un état permanent de la chose tant que rien ne l'interdit."},
    {sense:'dépasser',concept:'Traversée/Passage',description:''},
  ]);log(r,'jwz')

  // 9. jlt (جلت → جالوت) — Goliath (nom propre)
  r=await ins('jlt',[
    {sense:'Goliath (Jalut)',concept:'Nom propre',description:"Nom du géant guerrier vaincu par David. C'est un nom propre permanent qui désigne l'ennemi tyrannique que la foi peut vaincre malgré sa force apparente."},
  ]);log(r,'jlt')

  // 10. kam (كم) — variante de km (combien)
  r=await ins('kam',[
    {sense:'combien',concept:'Interrogation/Quantité',description:"Particule qui demande le nombre ou la quantité. L'interrogation de quantité cherche la mesure exacte — c'est un acte rationnel qui veut quantifier."},
    {sense:'que de (exclamatif)',concept:'Interrogation/Quantité',description:''},
  ]);log(r,'kam')

  console.log('\n=== Batch 172 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
