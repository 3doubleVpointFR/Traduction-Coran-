const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1498, total = 2321

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

  // 1. brs (برص) — lèpre, blancheur de la peau
  r=await ins('brs',[
    {sense:'lèpre',concept:'Maladie/Blancheur',description:"Maladie de la peau qui provoque des taches blanches et la dégradation des tissus. La lèpre est un état permanent qui marque le corps de façon visible — elle isole le malade et le distingue des autres. La guérison de la lèpre est un miracle qui restaure l'intégrité."},
    {sense:'blancheur maladive',concept:'Maladie/Blancheur',description:''},
  ]);log(r,'brs')

  // 2. dkhr (دخر) — être humilié, soumis, méprisé
  r=await ins('dkhr',[
    {sense:'être humilié',concept:'Humiliation/Abaissement',description:"État de celui qui est forcé à la soumission par la puissance d'un autre. L'humiliation vient de l'extérieur et atteint celui qui la subit — c'est directionnel et dégradant. Le dakhir est celui qui marche tête baissée, écrasé par sa petitesse."},
    {sense:'être soumis',concept:'Humiliation/Abaissement',description:''},
    {sense:'être méprisé',concept:'Humiliation/Abaissement',description:''},
  ]);log(r,'dkhr')

  // 3. mkr (مكر) — ruser, comploter, stratagème
  r=await ins('mkr',[
    {sense:'ruser',concept:'Ruse/Stratagème',description:"Acte de planifier secrètement une action pour tromper l'adversaire. La ruse sort du ruseur et atteint celui qui est visé — c'est directionnel et caché. Le makr est l'intelligence appliquée à la tromperie — il peut être bon (makr d'Allah contre les injustes) ou mauvais."},
    {sense:'comploter',concept:'Ruse/Stratagème',description:''},
    {sense:'stratagème',concept:'Ruse/Stratagème',description:''},
    {sense:'plan secret',concept:'Ruse/Stratagème',description:''},
  ]);log(r,'mkr')

  // 4. hss (حسس) — sentir, percevoir, tuer, éradiquer
  r=await ins('hss',[
    {sense:'sentir',concept:'Perception/Sensation',description:"Acte intérieur de percevoir par les sens ce qui vient de l'extérieur. La sensation est le premier contact entre l'être et le monde — elle est directionnelle de l'extérieur vers l'intérieur."},
    {sense:'percevoir',concept:'Perception/Sensation',description:''},
    {sense:'tuer',concept:'Destruction/Éradication',description:"Acte violent d'éliminer. La destruction est directionnelle — elle sort du destructeur et atteint le détruit de façon irréversible."},
    {sense:'éradiquer',concept:'Destruction/Éradication',description:''},
  ]);log(r,'hss')

  // 5. hwr (حور) — revenir, être blanc, houris
  r=await ins('hwr',[
    {sense:'revenir',concept:'Retour/Conversion',description:"Acte de changer de direction pour revenir au point de départ. Le retour est directionnel — il ramène d'où l'on est parti. La conversion est un retour vers la vérité après l'égarement."},
    {sense:'être blanc (intensément)',concept:'Blancheur/Beauté',description:"État de blancheur intense et éclatante. La blancheur extrême est permanente et symbolise la beauté et la pureté — les houris aux grands yeux sont les êtres d'une beauté pure."},
    {sense:'houris',concept:'Blancheur/Beauté',description:''},
    {sense:'discuter',concept:'Divers',description:'Échanger des paroles — le va-et-vient de la conversation.'},
  ]);log(r,'hwr')

  // 6. mtr (متر) — variante mesure ou pluie
  r=await ins('mtr',[
    {sense:'pleuvoir',concept:'Pluie/Châtiment',description:"Acte de faire tomber du ciel. La pluie est directionnelle du haut vers le bas — elle atteint tout ce qui est en dessous. Quand c'est une pluie de pierres ou de feu, elle devient un châtiment qui détruit."},
    {sense:'pluie',concept:'Pluie/Châtiment',description:''},
    {sense:'pluie de pierres',concept:'Pluie/Châtiment',description:''},
  ]);log(r,'mtr')

  // 7. jwr (جور) — être injuste, dévier, voisin
  r=await ins('jwr',[
    {sense:'être injuste',concept:'Injustice/Déviation',description:"État de celui qui dévie du droit chemin et ne donne pas à chacun ce qui lui revient. L'injustice est une déviation permanente de la justice — elle penche d'un côté au détriment de l'autre."},
    {sense:'dévier',concept:'Injustice/Déviation',description:''},
    {sense:'voisin',concept:'Voisinage/Proximité',description:"Celui qui habite à côté et dont la proximité crée des droits et des devoirs. Le voisinage est un lien permanent de proximité spatiale."},
    {sense:'protéger',concept:'Voisinage/Proximité',description:''},
  ]);log(r,'jwr')

  // 8. ewy (عوي) — variante de refuge/protection
  r=await ins('ewy',[
    {sense:'chercher refuge',concept:'Refuge/Protection',description:"Acte de se mettre sous la protection de quelqu'un face à un danger. Le refuge est directionnel — on va vers le protecteur. Chercher refuge c'est reconnaître sa faiblesse et la force de celui qui protège."},
    {sense:'se réfugier',concept:'Refuge/Protection',description:''},
  ]);log(r,'ewy')

  // 9. bhl (بهل) — maudire, invocation de malédiction
  r=await ins('bhl',[
    {sense:'invoquer la malédiction',concept:'Malédiction/Imprécation',description:"Acte de demander à Dieu de punir celui qui ment. La malédiction est directionnelle — elle sort de celui qui la prononce et vise celui qui est maudit. Le mubahala est le duel de vérité où chaque partie invoque la malédiction sur le menteur."},
    {sense:'maudire mutuellement',concept:'Malédiction/Imprécation',description:''},
    {sense:'laisser libre',concept:'Divers',description:'Lâcher sans retenue — laisser la malédiction suivre son cours.'},
  ]);log(r,'bhl')

  // 10. dhlk (ذلك) — variante de ḏlk (celui-là)
  r=await ins('dhlk',[
    {sense:'celui-là',concept:'Démonstratif/Distance',description:"Pronom qui désigne ce qui est éloigné. Le démonstratif de distance pointe vers le lointain — il crée une séparation entre le proche et l'éloigné."},
    {sense:'cela',concept:'Démonstratif/Distance',description:''},
  ]);log(r,'dhlk')

  console.log('\n=== Batch 191 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
