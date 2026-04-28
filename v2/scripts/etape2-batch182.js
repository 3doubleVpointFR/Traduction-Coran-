const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1408, total = 2321

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

  // 1. s a l (سأل) — demander, questionner, mendier
  r=await ins('s a l',[
    {sense:'demander',concept:'Demande/Question',description:"Acte extérieur de solliciter une réponse ou un bien de quelqu'un. La demande sort du demandeur et atteint celui à qui elle est adressée — c'est directionnel et met le demandeur en position de besoin. Questionner c'est reconnaître son ignorance et chercher à la combler."},
    {sense:'questionner',concept:'Demande/Question',description:''},
    {sense:'interroger',concept:'Demande/Question',description:''},
    {sense:'mendier',concept:'Mendicité',description:"Acte de demander l'aumône par nécessité. La mendicité est un état permanent de dépendance — le mendiant vit de la générosité des autres."},
  ]);log(r,'s a l')

  // 2. n w s (نوس) — variante de nas (gens, humanité)
  r=await ins('n w s',[
    {sense:'gens',concept:'Humanité/Peuple',description:"L'ensemble des êtres humains vivant en société. Les gens sont le collectif permanent de l'humanité — ils forment le tissu social dans lequel chaque individu existe. Le nas désigne les humains dans leur vie commune et leur interdépendance."},
    {sense:'humanité',concept:'Humanité/Peuple',description:''},
    {sense:'peuple',concept:'Humanité/Peuple',description:''},
  ]);log(r,'n w s')

  // 3. l h f (لحف) — insister dans la demande, couvrir
  r=await ins('l h f',[
    {sense:'insister dans la demande',concept:'Insistance/Excès',description:"Acte de demander avec une persistance qui dépasse la mesure. L'insistance sort du demandeur et presse celui qui est sollicité — c'est directionnel et oppressant. L'ilhaf est la demande qui ne lâche pas."},
    {sense:'presser',concept:'Insistance/Excès',description:''},
    {sense:'couvrir (couverture)',concept:'Couverture',description:"Acte de recouvrir entièrement. La couverture protège et enveloppe de façon permanente."},
  ]);log(r,'l h f')

  // 4. n f q (نفق) — dépenser, aumône, tunnel, hypocrisie
  r=await ins('n f q',[
    {sense:'dépenser',concept:'Dépense/Don',description:"Acte extérieur de donner de ses biens dans le chemin de Dieu ou pour les nécessiteux. La dépense sort du donneur et atteint les bénéficiaires — c'est directionnel et fait diminuer le patrimoine. Dépenser c'est faire sortir ce qui est en soi vers les autres."},
    {sense:'faire l\'aumône',concept:'Dépense/Don',description:''},
    {sense:'subvenir',concept:'Dépense/Don',description:''},
    {sense:'tunnel',concept:'Passage souterrain',description:"Ouverture creusée dans la terre qui permet de passer d'un côté à l'autre par en dessous. Le tunnel est un passage caché et directionnel."},
    {sense:'hypocrisie (nifaq)',concept:'Dissimulation',description:"État de celui qui entre par une porte et sort par une autre — le munafiq a deux visages. L'hypocrisie est un tunnel entre l'apparence et la réalité."},
  ]);log(r,'n f q')

  // 5. b y n (بين) — être clair, expliquer, séparer, entre
  r=await ins('b y n',[
    {sense:'être clair',concept:'Clarté/Évidence',description:"État de ce qui est manifeste et ne prête à aucune confusion. La clarté est permanente dans ce qui est évident — elle est la lumière de la compréhension. Ce qui est bayyine ne peut être nié."},
    {sense:'expliquer',concept:'Clarté/Évidence',description:''},
    {sense:'rendre évident',concept:'Clarté/Évidence',description:''},
    {sense:'séparer',concept:'Séparation/Distinction',description:"Acte de mettre de la distance entre deux choses. La séparation crée une frontière permanente entre ce qui était joint."},
    {sense:'entre',concept:'Séparation/Distinction',description:''},
  ]);log(r,'b y n')

  // 6. nrr (نرر) — variante de nur (lumière)
  r=await ins('nrr',[
    {sense:'lumière',concept:'Lumière/Éclairage',description:"Ce qui rend visible ce qui était dans l'obscurité. La lumière est directionnelle — elle sort de sa source et atteint ce qu'elle éclaire. La lumière est permanente tant que la source brille."},
    {sense:'éclairer',concept:'Lumière/Éclairage',description:''},
    {sense:'feu',concept:'Lumière/Éclairage',description:''},
  ]);log(r,'nrr')

  // 7. mhq (محق) — anéantir, effacer, diminuer
  r=await ins('mhq',[
    {sense:'anéantir',concept:'Anéantissement/Effacement',description:"Acte de faire disparaître totalement ce qui existait. L'anéantissement est directionnel — il sort de la force destructrice et atteint ce qui est anéanti. C'est ponctuel dans l'acte mais permanent dans le résultat — ce qui est effacé ne revient plus."},
    {sense:'effacer',concept:'Anéantissement/Effacement',description:''},
    {sense:'diminuer jusqu\'à disparition',concept:'Anéantissement/Effacement',description:''},
  ]);log(r,'mhq')

  // 8. hrb (حرب) — guerre, combattre, piller
  r=await ins('hrb',[
    {sense:'guerre',concept:'Guerre/Combat',description:"État de conflit armé entre deux parties. La guerre est un état qui sort des belligérants et atteint tous ceux qui y sont impliqués — c'est bidirectionnel et destructeur. La guerre est temporaire dans sa durée mais permanente dans ses séquelles."},
    {sense:'combattre',concept:'Guerre/Combat',description:''},
    {sense:'ennemi',concept:'Guerre/Combat',description:''},
    {sense:'piller',concept:'Divers',description:'Prendre les biens par la force de la guerre.'},
  ]);log(r,'hrb')

  // 9. faqad () — particule (certes, alors)
  r=await ins('faqad',[
    {sense:'alors certes',concept:'Consécution/Certitude',description:"Particule composée qui lie une conséquence certaine à ce qui précède. Le faqad affirme avec force que le résultat suit nécessairement la cause — c'est un lien logique et permanent entre condition et conséquence."},
    {sense:'assurément (conséquence)',concept:'Consécution/Certitude',description:''},
  ]);log(r,'faqad')

  // 10. šms (شمس) — variante de shms (soleil, skip probable)
  r=await ins('\u0161ms',[
    {sense:'soleil',concept:'Lumière/Astre',description:"L'astre qui éclaire le jour et donne vie à la terre. Le soleil est permanent dans sa course — il se lève et se couche dans un cycle qui ne s'arrête pas."},
    {sense:'jour ensoleillé',concept:'Lumière/Astre',description:''},
  ]);log(r,'\u0161ms')

  console.log('\n=== Batch 182 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
