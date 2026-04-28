const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1538, total = 2321

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

  // 1. šfw (شفو) — guérir, intercession, bord
  r=await ins('\u0161fw',[
    {sense:'guérir',concept:'Guérison/Remède',description:"Acte de restaurer la santé de ce qui était malade. La guérison sort du remède et atteint le malade — c'est directionnel et transformateur. Guérir c'est éliminer le mal et rétablir l'état originel de santé."},
    {sense:'remède',concept:'Guérison/Remède',description:''},
    {sense:'bord',concept:'Bord/Limite',description:"L'extrémité d'une chose, le point au-delà duquel on tombe. Le bord est permanent dans sa position — il est la frontière entre la sécurité et le danger."},
    {sense:'être au bord de',concept:'Bord/Limite',description:''},
  ]);log(r,'\u0161fw')

  // 2. hfr (حفر) — creuser, fosse
  r=await ins('hfr',[
    {sense:'creuser',concept:'Creusement/Fosse',description:"Acte extérieur d'enlever la terre pour faire un trou. Le creusement est directionnel vers le bas — il crée un vide permanent dans le sol. La fosse est le résultat du creusement — elle peut être un puits d'eau ou un piège."},
    {sense:'fosse',concept:'Creusement/Fosse',description:''},
    {sense:'puits',concept:'Creusement/Fosse',description:''},
  ]);log(r,'hfr')

  // 3. dhwq (ذوق) — goûter, expérimenter, savourer
  r=await ins('dhwq',[
    {sense:'goûter',concept:'Expérience/Goût',description:"Acte de percevoir la saveur de quelque chose par contact direct. Le goût est intérieur — il est l'expérience intime de ce qui touche. Goûter c'est expérimenter par soi-même, pas par ouï-dire. Au figuré, goûter le châtiment c'est le subir personnellement."},
    {sense:'expérimenter',concept:'Expérience/Goût',description:''},
    {sense:'savourer',concept:'Expérience/Goût',description:''},
  ]);log(r,'dhwq')

  // 4. y (ي) — particule vocative/pronom
  r=await ins('y',[
    {sense:'ô (vocatif)',concept:'Appel/Vocatif',description:"Particule qui sert à interpeller quelqu'un directement. L'appel vocatif sort du locuteur et atteint celui qui est appelé — c'est directionnel et ponctuel. Ya ouvre la porte du dialogue en désignant l'interlocuteur."},
    {sense:'particule d\'appel',concept:'Appel/Vocatif',description:''},
  ]);log(r,'y')

  // 5. dbr (دبر) — dos, derrière, réfléchir, méditer
  r=await ins('dbr',[
    {sense:'dos',concept:'Arrière/Postériorité',description:"La partie qui vient après, ce qui est derrière. L'arrière est permanent dans sa position — il est ce qu'on ne voit pas quand on fait face. Le dubur est le dos des choses, ce qui est caché."},
    {sense:'derrière',concept:'Arrière/Postériorité',description:''},
    {sense:'réfléchir (tadabbur)',concept:'Méditation/Réflexion',description:"Acte de tourner et retourner une chose dans son esprit pour en comprendre les conséquences. La méditation est intérieure et profonde — elle regarde l'arrière des choses pour comprendre ce qui n'est pas évident."},
    {sense:'méditer',concept:'Méditation/Réflexion',description:''},
    {sense:'gérer les affaires',concept:'Divers',description:'Administrer en pensant aux conséquences — lié au sens de regarder derrière.'},
  ]);log(r,'dbr')

  // 6. ghlm (غلم) — variante de glm (garçon)
  r=await ins('ghlm',[
    {sense:'garçon',concept:'Jeunesse/Enfant mâle',description:"Jeune être humain mâle entre l'enfance et l'âge adulte. La jeunesse est un état temporaire mais formateur — le ghulam est plein de potentiel."},
    {sense:'jeune homme',concept:'Jeunesse/Enfant mâle',description:''},
  ]);log(r,'ghlm')

  // 7. ldy (لدي) — auprès de, chez moi
  r=await ins('ldy',[
    {sense:'auprès de',concept:'Proximité/Possession',description:"Préposition qui indique la proximité immédiate ou ce qui est en possession de quelqu'un. Ladayya exprime une proximité intime — c'est ce qui est directement accessible et personnel."},
    {sense:'chez',concept:'Proximité/Possession',description:''},
  ]);log(r,'ldy')

  // 8. khsm (خصم) — variante adversaire
  r=await ins('khsm',[
    {sense:'adversaire',concept:'Adversité/Litige',description:"Celui qui s'oppose dans un conflit. L'adversité est bidirectionnelle — les deux parties s'affrontent mutuellement."},
    {sense:'disputer',concept:'Adversité/Litige',description:''},
    {sense:'plaider',concept:'Adversité/Litige',description:''},
  ]);log(r,'khsm')

  // 9. khdlq (كذلك) — variante "de même"
  r=await ins('khdlq',[
    {sense:'de même',concept:'Similitude/Référence',description:"Particule qui renvoie à ce qui a été dit ou fait auparavant. La référence crée un lien de continuité entre deux situations."},
    {sense:'ainsi',concept:'Similitude/Référence',description:''},
  ]);log(r,'khdlq')

  // 10. frh (فرح) — se réjouir, joie, être heureux
  r=await ins('frh',[
    {sense:'se réjouir',concept:'Joie/Allégresse',description:"État intérieur de bonheur et de contentement face à ce qui est bon. La joie est un état qui reste dans celui qui la ressent — elle est la réaction positive de l'âme face au bien reçu. La joie peut être légitime (gratitude) ou blâmable (orgueil)."},
    {sense:'joie',concept:'Joie/Allégresse',description:''},
    {sense:'être heureux',concept:'Joie/Allégresse',description:''},
    {sense:'exulter',concept:'Joie/Allégresse',description:''},
  ]);log(r,'frh')

  console.log('\n=== Batch 195 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
