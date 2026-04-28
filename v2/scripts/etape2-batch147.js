const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1058, total = 2321

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

  // 1. raay (رأي) — voir, penser, opiner, rêver
  r=await ins('raay',[
    {sense:'voir',concept:'Vision/Perception',description:"Acte de percevoir par les yeux ou par l'esprit ce qui est devant soi. La vision est directionnelle — elle part de l'observateur vers l'observé. Elle peut être physique (voir un objet) ou intellectuelle (voir la vérité). Voir c'est saisir la réalité telle qu'elle se présente."},
    {sense:'regarder',concept:'Vision/Perception',description:''},
    {sense:'percevoir',concept:'Vision/Perception',description:''},
    {sense:'penser',concept:'Opinion/Jugement',description:"Acte intérieur de former un avis par la réflexion. L'opinion est un jugement rationnel qui reste dans celui qui pense — elle peut être ponctuelle (un avis) ou permanente (une conviction). Penser c'est voir avec l'esprit."},
    {sense:'avoir une opinion',concept:'Opinion/Jugement',description:''},
    {sense:'juger',concept:'Opinion/Jugement',description:''},
    {sense:'rêver',concept:'Rêve/Vision onirique',description:"Acte involontaire de percevoir des images pendant le sommeil. Le rêve est une vision intérieure qui vient à celui qui dort — c'est directionnel de l'invisible vers le dormeur. Le rêve peut être ponctuel ou récurrent."},
    {sense:'montrer',concept:'Divers',description:'Faire voir à quelqu\'un — sens causatif de la vision.'},
  ]);log(r,'raay')

  // 2. shtr (شطر) — moitié, se diriger vers, couper en deux
  r=await ins('shtr',[
    {sense:'moitié',concept:'Division/Moitié',description:"Ce qui résulte du partage d'un tout en deux parties égales. La moitié est un état permanent de ce qui a été divisé — elle est la mesure exacte de l'équilibre entre deux parts. Diviser c'est séparer l'un en deux."},
    {sense:'couper en deux',concept:'Division/Moitié',description:''},
    {sense:'se diriger vers',concept:'Direction/Orientation',description:"Acte de tourner son visage ou son corps vers un point précis. L'orientation est directionnelle — elle part de celui qui se tourne et pointe vers la destination. Se diriger c'est choisir une moitié de l'horizon."},
    {sense:'côté',concept:'Direction/Orientation',description:''},
    {sense:'paupière inversée',concept:'Divers',description:'Difformité de l\'oeil — sens concret premier.'},
  ]);log(r,'shtr')

  // 3. dhyn — pas dans Lane's, traiter par connaissances (ذهي)
  r=await ins('dhyn',[
    {sense:'intelligence',concept:'Intelligence/Esprit',description:"Faculté intérieure de comprendre rapidement et de saisir les liens entre les choses. L'intelligence est permanente chez celui qui la possède — elle lui permet de voir ce que les autres ne voient pas. C'est une qualité de l'esprit, pas un acte."},
    {sense:'perspicacité',concept:'Intelligence/Esprit',description:''},
    {sense:'être intelligent',concept:'Intelligence/Esprit',description:''},
  ]);log(r,'dhyn')

  // 4. lhd (لهد) — opprimer, pousser, écraser
  r=await ins('lhd',[
    {sense:'opprimer par le poids',concept:'Oppression/Écrasement',description:"Acte extérieur d'écraser sous une charge trop lourde. L'oppression sort du poids et atteint celui qui est écrasé — c'est directionnel du haut vers le bas. L'écrasement est permanent tant que le poids demeure."},
    {sense:'écraser',concept:'Oppression/Écrasement',description:''},
    {sense:'pousser violemment',concept:'Oppression/Écrasement',description:''},
    {sense:'agir injustement',concept:'Injustice',description:"Acte extérieur de traiter quelqu'un de façon inéquitable. L'injustice sort de l'oppresseur et atteint l'opprimé — c'est directionnel et peut être ponctuel ou systémique."},
    {sense:'instiguer contre',concept:'Injustice',description:''},
  ]);log(r,'lhd')

  // 5. wst (وسط) — milieu, centre, meilleur, modéré
  r=await ins('wst',[
    {sense:'milieu',concept:'Centre/Modération',description:"Le point équidistant des extrêmes, l'endroit où rien ne penche d'un côté ni de l'autre. Le centre est un état permanent d'équilibre — il est la position la plus juste, ni trop ni trop peu. Le milieu est le lieu de la modération et de l'excellence."},
    {sense:'centre',concept:'Centre/Modération',description:''},
    {sense:'meilleur (wassat)',concept:'Centre/Modération',description:''},
    {sense:'modéré',concept:'Centre/Modération',description:''},
    {sense:'parmi',concept:'Intériorité',description:"Préposition qui indique la position à l'intérieur d'un groupe. Être parmi c'est être au milieu des autres, entouré."},
  ]);log(r,'wst')

  // 6. dye (ضيع) — perdre, gaspiller, être négligé
  r=await ins('dye',[
    {sense:'perdre',concept:'Perte/Gaspillage',description:"Acte de laisser s'échapper ce que l'on avait, par négligence ou incapacité. La perte est un mouvement de sortie irréversible — ce qui est perdu ne revient pas. Le gaspillage est une perte volontaire de ce qui avait de la valeur."},
    {sense:'gaspiller',concept:'Perte/Gaspillage',description:''},
    {sense:'négliger',concept:'Perte/Gaspillage',description:''},
    {sense:'être perdu',concept:'Perte/Gaspillage',description:''},
    {sense:'laisser sans soin',concept:'Perte/Gaspillage',description:''},
    {sense:'propriété foncière',concept:'Divers',description:'Bien immobilier — sens dérivé de ce qui pourrait être perdu ou négligé.'},
  ]);log(r,'dye')

  // 7. raf (رأف) — être compatissant, miséricordieux, clément
  r=await ins('raf',[
    {sense:'être compatissant',concept:'Compassion/Clémence',description:"État intérieur de douceur extrême envers celui qui souffre, au point de vouloir lui épargner toute peine. La compassion est permanente chez celui qui la possède — elle est plus tendre que la miséricorde car elle cherche à prévenir la souffrance avant qu'elle n'arrive. C'est un sentiment qui reste dans celui qui l'éprouve mais qui peut se manifester en actes."},
    {sense:'avoir pitié',concept:'Compassion/Clémence',description:''},
    {sense:'être clément',concept:'Compassion/Clémence',description:''},
    {sense:'très compatissant (raûf)',concept:'Compassion/Clémence',description:''},
  ]);log(r,'raf')

  // 8. mrr (مرر) — passer, être amer, corde torsadée
  r=await ins('mrr',[
    {sense:'passer',concept:'Passage/Traversée',description:"Acte de se déplacer d'un point à un autre sans s'arrêter. Le passage est directionnel et ponctuel — il traverse un lieu sans y rester. Passer c'est ne pas demeurer, c'est être en mouvement continu."},
    {sense:'passer devant',concept:'Passage/Traversée',description:''},
    {sense:'traverser',concept:'Passage/Traversée',description:''},
    {sense:'être amer',concept:'Amertume',description:"État de ce qui a un goût désagréable et âcre. L'amertume est permanente dans ce qui la contient — elle est une qualité intrinsèque qui repousse. Au figuré, l'amertume est la douleur de l'expérience difficile."},
    {sense:'amertume',concept:'Amertume',description:''},
    {sense:'tordre une corde',concept:'Torsion/Force',description:"Acte de rouler des fibres ensemble pour en faire un tout résistant. La torsion est un acte extérieur qui crée de la solidité — la corde torsadée est plus forte que ses brins séparés."},
    {sense:'être fort et résistant',concept:'Torsion/Force',description:''},
  ]);log(r,'mrr')

  // 9. shh (شهد) — témoigner, être présent, voir, miel
  r=await ins('shh',[
    {sense:'témoigner',concept:'Témoignage/Attestation',description:"Acte extérieur de déclarer ce que l'on a vu ou ce que l'on sait être vrai. Le témoignage sort du témoin et atteint ceux qui l'entendent — c'est directionnel et engageant. Le témoin met sa crédibilité en jeu, son témoignage est un acte rationnel de vérité."},
    {sense:'attester',concept:'Témoignage/Attestation',description:''},
    {sense:'être présent',concept:'Présence/Assistance',description:"État de celui qui est là au moment où les choses se passent. La présence est la condition du témoignage — on ne peut témoigner que de ce qu'on a vu. Être présent c'est être disponible et attentif."},
    {sense:'assister à',concept:'Présence/Assistance',description:''},
    {sense:'miel (dans la ruche)',concept:'Divers',description:'Le miel dans ses alvéoles, substance pure et douce.'},
    {sense:'martyr (shahid)',concept:'Martyre',description:"Celui qui témoigne de sa foi par sa mort. Le martyr est le témoin ultime — il atteste par le sacrifice de sa vie. C'est un acte ponctuel et irréversible qui crée un état permanent de témoignage."},
  ]);log(r,'shh')

  // 10. ulk (ألك) — mâcher, message
  r=await ins('ulk',[
    {sense:'mâcher',concept:'Mastication/Morsure',description:"Acte physique de broyer avec les dents ce qui est dans la bouche. La mastication est un acte répétitif et intérieur — elle transforme ce qui est dur en ce qui est mou, préparant la nourriture à être avalée."},
    {sense:'mordre le mors',concept:'Mastication/Morsure',description:''},
    {sense:'porter un message',concept:'Message/Transmission',description:"Acte extérieur de transmettre une parole d'un émetteur à un destinataire. Le message sort de celui qui envoie et atteint celui qui reçoit — c'est directionnel et ponctuel. Le messager est celui qui porte dans sa bouche la parole d'un autre."},
    {sense:'message',concept:'Message/Transmission',description:''},
  ]);log(r,'ulk')

  console.log('\n=== Batch 147 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
