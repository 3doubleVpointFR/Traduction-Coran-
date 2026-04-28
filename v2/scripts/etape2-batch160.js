const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1188, total = 2321

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

  // 1. jwb (جوب) — répondre, traverser, creuser
  r=await ins('jwb',[
    {sense:'répondre',concept:'Réponse/Exaucement',description:"Acte extérieur de donner suite à une demande ou un appel. La réponse sort de celui qui répond et atteint celui qui a appelé — c'est directionnel et ponctuel. Répondre c'est combler l'attente de l'autre par la parole ou l'acte."},
    {sense:'exaucer',concept:'Réponse/Exaucement',description:''},
    {sense:'traverser',concept:'Traversée/Percement',description:"Acte de passer d'un côté à l'autre en perçant ce qui sépare. La traversée est directionnelle — elle va d'ici vers là-bas en franchissant l'obstacle."},
    {sense:'creuser',concept:'Traversée/Percement',description:''},
    {sense:'couper (la roche)',concept:'Traversée/Percement',description:''},
  ]);log(r,'jwb')

  // 2. rshd (رشد) — être bien guidé, maturité, droiture
  r=await ins('rshd',[
    {sense:'être bien guidé',concept:'Droiture/Maturité',description:"État de celui qui marche sur le bon chemin par discernement et sagesse. La droiture est intérieure et permanente — elle est la capacité de distinguer le bien du mal et d'agir en conséquence. Le rashid est celui qui a atteint la maturité du jugement."},
    {sense:'maturité intellectuelle',concept:'Droiture/Maturité',description:''},
    {sense:'droiture',concept:'Droiture/Maturité',description:''},
    {sense:'bon sens',concept:'Droiture/Maturité',description:''},
    {sense:'guider vers le bien',concept:'Droiture/Maturité',description:''},
  ]);log(r,'rshd')

  // 3. twq (طوق) — pouvoir, supporter, collier, cercle
  r=await ins('twq',[
    {sense:'pouvoir supporter',concept:'Capacité/Endurance',description:"État de celui qui a la force de porter un fardeau ou d'accomplir une tâche. La capacité est intérieure — elle est la mesure de ce que l'être peut endurer. Ce qui est au-delà de la capacité brise celui qui essaie."},
    {sense:'être capable de',concept:'Capacité/Endurance',description:''},
    {sense:'endurer',concept:'Capacité/Endurance',description:''},
    {sense:'collier',concept:'Encerclement/Lien',description:"Objet qui entoure le cou et ne le quitte pas. Le collier est un cercle permanent — il symbolise ce qui est attaché à la personne de façon indissociable."},
    {sense:'entourer',concept:'Encerclement/Lien',description:''},
  ]);log(r,'twq')

  // 4. rmd (رمض) — être brûlant, ramadan, chaleur intense
  r=await ins('rmd',[
    {sense:'être brûlant',concept:'Chaleur/Ardeur',description:"État de ce qui est chauffé au point de brûler. La chaleur intense est un état qui envahit tout ce qu'elle touche — elle est permanente tant que la source demeure. Le ramadan est le mois de la chaleur — le jeûne brûle les péchés comme le feu brûle les impuretés."},
    {sense:'chaleur intense',concept:'Chaleur/Ardeur',description:''},
    {sense:'ramadan',concept:'Chaleur/Ardeur',description:''},
    {sense:'brûler les pieds (sur un sol chaud)',concept:'Chaleur/Ardeur',description:''},
  ]);log(r,'rmd')

  // 5. ryd (رود) — chercher, aller doucement, explorer
  r=await ins('ryd',[
    {sense:'chercher',concept:'Quête/Volonté',description:"Acte intérieur et extérieur de se mettre en mouvement pour obtenir ce que l'on veut. La quête est directionnelle — elle part du chercheur vers l'objet désiré. C'est un mouvement permanent tant que l'objectif n'est pas atteint."},
    {sense:'vouloir',concept:'Quête/Volonté',description:''},
    {sense:'aller doucement',concept:'Divers',description:'Se déplacer avec prudence — explorer un terrain inconnu pas à pas.'},
  ]);log(r,'ryd')

  // 6. ysr (يسر) — être facile, faciliter, richesse, gauche
  r=await ins('ysr',[
    {sense:'être facile',concept:'Facilité/Aisance',description:"État de ce qui ne demande pas d'effort excessif pour être accompli. La facilité est un état permanent de la chose — elle est accessible et à portée. Ce qui est facile coule naturellement sans obstacle ni résistance."},
    {sense:'faciliter',concept:'Facilité/Aisance',description:''},
    {sense:'aisance',concept:'Facilité/Aisance',description:''},
    {sense:'richesse',concept:'Facilité/Aisance',description:''},
    {sense:'côté gauche',concept:'Divers',description:'Le côté gauche du corps — sens physique premier.'},
  ]);log(r,'ysr')

  // 7. esr (عسر) — être difficile, difficulté, gêne
  r=await ins('esr',[
    {sense:'être difficile',concept:'Difficulté/Gêne',description:"État de ce qui demande un effort considérable et résiste à l'accomplissement. La difficulté est un obstacle permanent tant qu'il n'est pas surmonté — elle freine et ralentit. L'opposé de la facilité, c'est ce qui coince et bloque le mouvement."},
    {sense:'difficulté',concept:'Difficulté/Gêne',description:''},
    {sense:'gêne financière',concept:'Difficulté/Gêne',description:''},
    {sense:'mettre dans la gêne',concept:'Difficulté/Gêne',description:''},
  ]);log(r,'esr')

  // 8. shk (شكر) — variante de shkr (déjà fait, skip probable)
  r=await ins('shk',[
    {sense:'remercier',concept:'Gratitude/Reconnaissance',description:"Acte de reconnaître le bienfait reçu et d'en exprimer la reconnaissance. La gratitude sort de celui qui remercie et atteint celui qui a donné — c'est directionnel. La gratitude est la réponse juste au bienfait, un acte rationnel d'évaluation positive."},
    {sense:'être reconnaissant',concept:'Gratitude/Reconnaissance',description:''},
    {sense:'louer',concept:'Gratitude/Reconnaissance',description:''},
  ]);log(r,'shk')

  // 9. wqt (وقت) — temps, moment fixé
  r=await ins('wqt',[
    {sense:'temps fixé',concept:'Temps/Échéance',description:"Un moment déterminé dans le flux du temps, une échéance qui ne change pas. Le temps fixé est un point permanent dans l'avenir — il est la limite que personne ne peut avancer ni reculer. Le miqat est le rendez-vous que le temps impose."},
    {sense:'moment prescrit',concept:'Temps/Échéance',description:''},
    {sense:'échéance',concept:'Temps/Échéance',description:''},
  ]);log(r,'wqt')

  // 10. rfṯ (رفث) — propos obscènes, rapports intimes
  r=await ins('rf\u1E6F',[
    {sense:'propos obscènes',concept:'Indécence/Intimité',description:"Paroles qui touchent aux choses de l'intimité ou qui dépassent les limites de la pudeur. L'indécence sort du locuteur et atteint l'auditeur — c'est directionnel et peut choquer. Le rafath couvre à la fois les paroles et les actes d'intimité physique."},
    {sense:'rapports intimes',concept:'Indécence/Intimité',description:''},
    {sense:'acte sexuel',concept:'Indécence/Intimité',description:''},
  ]);log(r,'rf\u1E6F')

  console.log('\n=== Batch 160 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
