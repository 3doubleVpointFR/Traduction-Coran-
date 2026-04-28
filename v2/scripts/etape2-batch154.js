const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1128, total = 2321

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

  // 1. e l m (علم) — savoir, connaître, enseigner, signe
  r=await ins('e l m',[
    {sense:'savoir',concept:'Connaissance/Science',description:"Acte intérieur de saisir la réalité des choses telles qu'elles sont. La connaissance est un état permanent une fois acquise — elle reste dans celui qui sait et éclaire son jugement. Savoir c'est posséder la vérité d'une chose dans son esprit."},
    {sense:'connaître',concept:'Connaissance/Science',description:''},
    {sense:'science',concept:'Connaissance/Science',description:''},
    {sense:'enseigner',concept:'Enseignement/Transmission',description:"Acte extérieur de transmettre la connaissance de celui qui sait vers celui qui ne sait pas. L'enseignement sort du maître et atteint l'élève — c'est directionnel et transformateur. Enseigner c'est faire naître la connaissance chez l'autre."},
    {sense:'informer',concept:'Enseignement/Transmission',description:''},
    {sense:'signe',concept:'Marque/Indication',description:"Ce qui indique et fait reconnaître. Le signe est permanent et visible — il est une marque extérieure qui pointe vers une réalité à connaître."},
    {sense:'marque',concept:'Marque/Indication',description:''},
  ]);log(r,'e l m')

  // 2. l k (لك) — pronom prépositionnel "à toi"
  r=await ins('l k',[
    {sense:'à toi',concept:'Appartenance/Destination',description:"Préposition et pronom qui indiquent que quelque chose est destiné à l'interlocuteur ou lui appartient. L'appartenance est directionnelle — elle va de la chose vers celui à qui elle est destinée."},
    {sense:'pour toi',concept:'Appartenance/Destination',description:''},
  ]);log(r,'l k')

  // 3. w l y (ولي) — être proche, allié, protecteur, gouverner
  r=await ins('w l y',[
    {sense:'être proche',concept:'Proximité/Alliance',description:"État de lien intime entre deux êtres qui se soutiennent mutuellement. La proximité est permanente entre ceux qui sont alliés — elle crée un lien de protection et de solidarité réciproque. Le waliy est celui qui est si proche qu'il prend en charge les affaires de l'autre."},
    {sense:'allié',concept:'Proximité/Alliance',description:''},
    {sense:'protecteur',concept:'Proximité/Alliance',description:''},
    {sense:'ami intime',concept:'Proximité/Alliance',description:''},
    {sense:'gouverner',concept:'Autorité/Gestion',description:"Acte extérieur de prendre en charge les affaires d'un groupe. L'autorité sort du gouvernant et atteint les gouvernés — c'est directionnel et permanent tant que dure le mandat."},
    {sense:'prendre en charge',concept:'Autorité/Gestion',description:''},
    {sense:'se succéder',concept:'Divers',description:'Venir immédiatement après — lié à la proximité temporelle.'},
  ]);log(r,'w l y')

  // 4. nyy (نيى) — cru, intention (variante)
  r=await ins('nyy',[
    {sense:'intention',concept:'Intention/Dessein',description:"Mouvement intérieur de l'âme qui dirige la volonté vers un but. L'intention est invisible et permanente tant que le but n'est pas atteint — elle précède et motive chaque acte."},
    {sense:'cru (non cuit)',concept:'Divers',description:'État de ce qui n\'a pas été transformé par le feu — brut et naturel.'},
  ]);log(r,'nyy')

  // 5. dhrw (ذرو) — disperser, progéniture (doublon de dhrr)
  r=await ins('dhrw',[
    {sense:'disperser',concept:'Dispersion/Éparpillement',description:"Acte de répandre dans toutes les directions ce qui était rassemblé. La dispersion est multidirectionnelle et souvent irréversible — ce qui est dispersé au vent ne se rassemble plus."},
    {sense:'progéniture',concept:'Descendance/Multiplication',description:"Les enfants et les générations qui se multiplient. La descendance est la dispersion de la vie à travers le temps — permanente et toujours croissante."},
    {sense:'atome',concept:'Petitesse/Infime',description:"La plus petite chose perceptible. L'atome est ce qui est dispersé — infime et emporté par le moindre souffle."},
  ]);log(r,'dhrw')

  // 6. dh rw (ذرو) — autre doublon
  r=await ins('dh rw',[
    {sense:'disperser',concept:'Dispersion/Éparpillement',description:"Acte de répandre dans toutes les directions. La dispersion est multidirectionnelle — ce qui est dispersé ne revient pas à son état initial."},
    {sense:'progéniture',concept:'Descendance/Multiplication',description:"Les enfants qui se multiplient à travers les générations — la vie qui se répand dans le temps."},
    {sense:'atome',concept:'Petitesse/Infime',description:"La plus petite chose perceptible, le grain de poussière emporté par le vent."},
  ]);log(r,'dh rw')

  // 7. axhr (أخر) — retarder, autre, dernier
  r=await ins('axhr',[
    {sense:'retarder',concept:'Report/Délai',description:"Acte de repousser quelque chose dans le temps, de ne pas le faire maintenant. Le report est directionnel — il pousse l'événement de l'instant présent vers l'avenir. C'est un acte ponctuel qui change la position temporelle d'un événement."},
    {sense:'différer',concept:'Report/Délai',description:''},
    {sense:'être en retard',concept:'Report/Délai',description:''},
    {sense:'autre',concept:'Altérité',description:"Ce qui n'est pas identique à ce qui est mentionné, ce qui est différent du premier. L'autre est permanent dans sa différence — il est ce qui n'est pas soi."},
    {sense:'dernier',concept:'Altérité',description:''},
    {sense:'l\'au-delà (akhira)',concept:'Divers',description:'Le monde qui vient après celui-ci — le dernier séjour.'},
  ]);log(r,'axhr')

  // 8. lmn (لمن) — pour qui, à qui
  r=await ins('lmn',[
    {sense:'pour qui',concept:'Interrogation/Attribution',description:"Particule composée qui questionne sur le destinataire ou le possesseur. L'interrogation d'attribution cherche à qui appartient ou est destiné quelque chose — elle est directionnelle vers la réponse."},
    {sense:'à qui',concept:'Interrogation/Attribution',description:''},
  ]);log(r,'lmn')

  // 9. maym (ميم) — lettre Mim
  r=await ins('maym',[
    {sense:'lettre Mim',concept:'Lettre/Signe',description:"La vingt-quatrième lettre de l'alphabet arabe, utilisée comme ouverture mystérieuse de certaines sourates. La lettre est un signe permanent qui donne forme au son — elle est le véhicule de la parole écrite."},
  ]);log(r,'maym')

  // 10. aba (أبا) — père, refuser (variante)
  r=await ins('aba',[
    {sense:'père',concept:'Parenté/Paternité',description:"Celui qui engendre et dont on descend. Le père est l'origine de la lignée — c'est une relation permanente et définitive. La paternité crée un lien indéfectible qui ne se rompt jamais."},
    {sense:'ancêtre',concept:'Parenté/Paternité',description:''},
    {sense:'refuser',concept:'Refus/Rejet',description:"Acte de volonté qui repousse ce qui est proposé. Le refus sort de celui qui refuse et repousse ce qui vient — c'est directionnel et ponctuel."},
    {sense:'dédaigner',concept:'Refus/Rejet',description:''},
  ]);log(r,'aba')

  console.log('\n=== Batch 154 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
