const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1138, total = 2321

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

  // 1. rya (ريى) — voir, montrer, vision (variante de raay)
  r=await ins('rya',[
    {sense:'voir',concept:'Vision/Perception',description:"Acte de percevoir par les yeux ou par l'esprit ce qui est devant soi. La vision est le premier contact entre l'être et la réalité — elle est directionnelle de l'extérieur vers l'intérieur. Voir c'est saisir la réalité telle qu'elle se présente."},
    {sense:'penser',concept:'Opinion/Jugement',description:"Acte intérieur de former un avis par la réflexion. L'opinion est un jugement qui reste dans celui qui pense — elle est le résultat d'un regard intérieur sur les choses."},
    {sense:'rêver',concept:'Vision onirique',description:"Perception d'images pendant le sommeil. Le rêve vient de l'invisible et atteint le dormeur — c'est directionnel et involontaire."},
  ]);log(r,'rya')

  // 2. sbq (سبق) — précéder, devancer, course
  r=await ins('sbq',[
    {sense:'précéder',concept:'Antériorité/Devancement',description:"Acte d'être en avant des autres dans le temps ou l'espace. La précédence est directionnelle — celui qui précède est devant et les autres sont derrière. C'est un état permanent tant que personne ne le dépasse. Précéder c'est avoir l'avantage du premier arrivé."},
    {sense:'devancer',concept:'Antériorité/Devancement',description:''},
    {sense:'courir plus vite',concept:'Antériorité/Devancement',description:''},
    {sense:'course',concept:'Antériorité/Devancement',description:''},
    {sense:'parole antérieure',concept:'Divers',description:'Ce qui a été dit avant — la promesse ou le décret qui précède.'},
  ]);log(r,'sbq')

  // 3. atm (أتم) — achever, compléter, parfaire
  r=await ins('atm',[
    {sense:'achever',concept:'Accomplissement/Plénitude',description:"Acte de mener une chose à son terme final, de ne rien laisser d'inachevé. L'accomplissement sort de celui qui agit et atteint l'œuvre — c'est directionnel et ponctuel. L'achèvement crée un état permanent de complétude — rien ne manque, tout est à sa place."},
    {sense:'compléter',concept:'Accomplissement/Plénitude',description:''},
    {sense:'parfaire',concept:'Accomplissement/Plénitude',description:''},
    {sense:'mener à terme',concept:'Accomplissement/Plénitude',description:''},
  ]);log(r,'atm')

  // 4. shkr (شكر) — remercier, être reconnaissant, récompenser
  r=await ins('shkr',[
    {sense:'remercier',concept:'Gratitude/Reconnaissance',description:"Acte extérieur et intérieur de reconnaître le bienfait reçu et d'en exprimer la reconnaissance. La gratitude sort de celui qui remercie et atteint celui qui a donné — c'est directionnel et peut être ponctuel (un merci) ou permanent (un état de reconnaissance). La gratitude est la réponse juste au bienfait."},
    {sense:'être reconnaissant',concept:'Gratitude/Reconnaissance',description:''},
    {sense:'louer (pour un bienfait)',concept:'Gratitude/Reconnaissance',description:''},
    {sense:'récompenser',concept:'Rétribution',description:"Acte extérieur de donner en retour pour un bien fait. La récompense sort de celui qui rétribue et atteint celui qui a mérité — c'est directionnel et juste."},
  ]);log(r,'shkr')

  // 5. yaw (يءو) — désespérer, perdre espoir
  r=await ins('yaw',[
    {sense:'désespérer',concept:'Désespoir/Perte d\'espoir',description:"État intérieur de celui qui a perdu toute attente de bien. Le désespoir est un état permanent qui coupe l'horizon — il reste dans celui qui le ressent et éteint la lumière de l'espérance. C'est le contraire de la confiance en l'avenir."},
    {sense:'perdre espoir',concept:'Désespoir/Perte d\'espoir',description:''},
    {sense:'être sans espoir',concept:'Désespoir/Perte d\'espoir',description:''},
  ]);log(r,'yaw')

  // 6. swb (صوب) — frapper, atteindre, être juste, pluie
  r=await ins('swb',[
    {sense:'frapper (calamité)',concept:'Atteinte/Affliction',description:"Événement qui tombe sur quelqu'un et le touche directement. L'atteinte est directionnelle — elle sort de sa cause et frappe celui qui la reçoit. C'est ponctuel dans le choc mais les effets peuvent être permanents. L'affliction est ce qui atteint sans qu'on puisse l'éviter."},
    {sense:'atteindre',concept:'Atteinte/Affliction',description:''},
    {sense:'toucher',concept:'Atteinte/Affliction',description:''},
    {sense:'pluie abondante',concept:'Atteinte/Affliction',description:''},
    {sense:'être juste',concept:'Justesse/Rectitude',description:"État de ce qui est conforme à la vérité et au droit. La justesse est un état intérieur de conformité au réel — elle est permanente chez celui qui vise juste."},
    {sense:'viser juste',concept:'Justesse/Rectitude',description:''},
    {sense:'patience',concept:'Endurance',description:"Capacité intérieure de supporter l'épreuve sans fléchir. La patience est un état permanent de résistance — elle reste dans celui qui endure."},
  ]);log(r,'swb')

  // 7. blw (بلو) — éprouver, tester, user (variante de bla)
  r=await ins('blw',[
    {sense:'éprouver',concept:'Épreuve/Test',description:"Acte de soumettre quelqu'un à un test pour révéler sa vraie nature. L'épreuve est directionnelle et transformatrice — elle sort de celui qui éprouve et atteint celui qui est éprouvé. Le creuset de l'épreuve sépare le vrai du faux."},
    {sense:'tester',concept:'Épreuve/Test',description:''},
    {sense:'affliction',concept:'Épreuve/Test',description:''},
    {sense:'user',concept:'Usure',description:"Processus de dégradation par le temps et l'usage. L'usure est lente et permanente — elle transforme le neuf en vieux."},
  ]);log(r,'blw')

  // 8. jwa (جوع) — avoir faim, famine
  r=await ins('jwa',[
    {sense:'avoir faim',concept:'Faim/Privation',description:"État intérieur de manque de nourriture qui crée un besoin urgent. La faim est un état qui reste dans celui qui la ressent — elle est le cri du corps qui demande à être nourri. La faim est ponctuelle si elle est satisfaite, permanente si la privation dure."},
    {sense:'famine',concept:'Faim/Privation',description:''},
    {sense:'affamé',concept:'Faim/Privation',description:''},
  ]);log(r,'jwa')

  // 9. nqs (نقص) — diminuer, manquer, défaut
  r=await ins('nqs',[
    {sense:'diminuer',concept:'Diminution/Manque',description:"Mouvement de ce qui devient moins, de ce qui perd une partie de ce qu'il avait. La diminution est un processus qui retire du plein — elle est directionnelle vers le moins. Ce qui diminue n'est plus complet, il lui manque quelque chose."},
    {sense:'manquer',concept:'Diminution/Manque',description:''},
    {sense:'être déficient',concept:'Diminution/Manque',description:''},
    {sense:'réduire',concept:'Diminution/Manque',description:''},
    {sense:'perte',concept:'Diminution/Manque',description:''},
  ]);log(r,'nqs')

  // 10. mlw (ملو) — remplir, être plein, satiété
  r=await ins('mlw',[
    {sense:'remplir',concept:'Plénitude/Remplissage',description:"Acte extérieur de combler un espace vide jusqu'à ce qu'il ne puisse plus rien contenir. Le remplissage est directionnel — il va de l'extérieur vers l'intérieur du récipient. C'est ponctuel dans l'acte mais crée un état permanent de plénitude."},
    {sense:'être plein',concept:'Plénitude/Remplissage',description:''},
    {sense:'satiété',concept:'Plénitude/Remplissage',description:''},
    {sense:'assemblée',concept:'Assemblée/Groupe',description:"Groupe de personnes réunies qui remplissent un espace. L'assemblée est la plénitude humaine d'un lieu — les notables qui remplissent le conseil."},
    {sense:'notables (mala)',concept:'Assemblée/Groupe',description:''},
  ]);log(r,'mlw')

  console.log('\n=== Batch 155 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
