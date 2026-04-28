const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1568, total = 2321

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

  // 1. trf (طرف) — extrémité, bord, regard, cligner
  r=await ins('trf',[
    {sense:'extrémité',concept:'Bord/Extrémité',description:"Le point le plus éloigné d'un tout, la limite au-delà de laquelle on tombe. L'extrémité est permanente dans sa position — elle est le dernier point avant le vide. Le taraf est ce qui est au bout."},
    {sense:'bord',concept:'Bord/Extrémité',description:''},
    {sense:'regard (tarf)',concept:'Vision/Coup d\'œil',description:"Le mouvement rapide de l'œil qui balaie ce qui est devant. Le regard est directionnel et ponctuel — il sort de l'observateur et atteint ce qui est vu."},
    {sense:'cligner des yeux',concept:'Vision/Coup d\'œil',description:''},
  ]);log(r,'trf')

  // 2. khwb (خوب) — variante, possiblement péché/erreur
  r=await ins('khwb',[
    {sense:'péché grave',concept:'Péché/Erreur',description:"Acte qui constitue une faute majeure devant Dieu. Le péché grave est permanent dans ses conséquences — il pèse sur l'âme tant qu'il n'est pas expié."},
    {sense:'erreur',concept:'Péché/Erreur',description:''},
  ]);log(r,'khwb')

  // 3. tman (طمأن) — rassurer, apaiser, sérénité
  r=await ins('tman',[
    {sense:'rassurer',concept:'Sérénité/Apaisement',description:"Acte de ramener le calme dans l'âme de celui qui était agité. L'apaisement sort de la source de sécurité et atteint celui qui est rassuré — c'est directionnel et crée un état permanent de tranquillité. L'âme apaisée (mutmainna) est celle qui a trouvé la paix dans la certitude."},
    {sense:'apaiser',concept:'Sérénité/Apaisement',description:''},
    {sense:'être serein',concept:'Sérénité/Apaisement',description:''},
  ]);log(r,'tman')

  // 4. kzm (كظم) — retenir, réprimer, avaler sa colère
  r=await ins('kzm',[
    {sense:'retenir sa colère',concept:'Rétention/Maîtrise de soi',description:"Acte intérieur de contenir ce qui veut exploser, d'empêcher la colère de sortir. La rétention est un effort de la volonté qui bloque l'expression — c'est directionnel vers l'intérieur. Le kazim est celui qui avale sa rage au lieu de la cracher. C'est un acte de force intérieure."},
    {sense:'réprimer',concept:'Rétention/Maîtrise de soi',description:''},
    {sense:'avaler',concept:'Rétention/Maîtrise de soi',description:''},
  ]);log(r,'kzm')

  // 5. qrh (قرح) — blessure, plaie, être blessé
  r=await ins('qrh',[
    {sense:'blessure',concept:'Blessure/Plaie',description:"Atteinte physique qui ouvre la chair et cause la douleur. La blessure est un événement ponctuel mais sa marque peut être permanente — elle est le signe visible de la souffrance subie. Le qurh est la plaie du combattant."},
    {sense:'plaie',concept:'Blessure/Plaie',description:''},
    {sense:'être blessé',concept:'Blessure/Plaie',description:''},
  ]);log(r,'qrh')

  // 6. dwl (دول) — alterner, tourner, État
  r=await ins('dwl',[
    {sense:'alterner',concept:'Alternance/Cycle',description:"Mouvement de rotation entre deux ou plusieurs parties qui se succèdent. L'alternance est un cycle permanent — les jours de victoire et de défaite tournent entre les gens. Ce qui est à l'un aujourd'hui sera à l'autre demain."},
    {sense:'tourner (le sort)',concept:'Alternance/Cycle',description:''},
    {sense:'État (dawla)',concept:'Divers',description:'Le pouvoir qui tourne entre les peuples — sens dérivé de l\'alternance.'},
  ]);log(r,'dwl')

  // 7. mhs (محص) — purifier, tester, éprouver
  r=await ins('mhs',[
    {sense:'purifier',concept:'Purification/Épreuve',description:"Acte de séparer le pur de l'impur par l'épreuve, comme on purifie l'or par le feu. La purification sort de l'épreuve et atteint celui qui est purifié — c'est directionnel et transformateur. Le tamhis est le test qui révèle la qualité réelle."},
    {sense:'tester',concept:'Purification/Épreuve',description:''},
    {sense:'éprouver',concept:'Purification/Épreuve',description:''},
  ]);log(r,'mhs')

  // 8. aet (أعط) — donner, accorder
  r=await ins('aet',[
    {sense:'donner',concept:'Don/Attribution',description:"Acte extérieur de transmettre un bien à quelqu'un. Le don sort du donneur et atteint le receveur — c'est directionnel et généreux. Donner c'est faire passer quelque chose de soi vers l'autre."},
    {sense:'accorder',concept:'Don/Attribution',description:''},
    {sense:'offrir',concept:'Don/Attribution',description:''},
  ]);log(r,'aet')

  // 9. wryh (ورية) — variante, possiblement dissimuler/prétexte
  r=await ins('wryh',[
    {sense:'dissimuler',concept:'Dissimulation/Prétexte',description:"Acte de cacher la réalité derrière une apparence trompeuse. La dissimulation crée une couche entre la vérité et celui qui regarde — c'est un voile intentionnel."},
    {sense:'prétexte',concept:'Dissimulation/Prétexte',description:''},
  ]);log(r,'wryh')

  // 10. hye (هيع) — appeler au secours, convocation
  r=await ins('hye',[
    {sense:'appeler au secours',concept:'Appel/Convocation',description:"Cri lancé pour rassembler les gens face à un danger. L'appel sort de celui qui crie et atteint tous ceux qui l'entendent — c'est multidirectionnel et urgent. Le hayaa est le cri qui mobilise."},
    {sense:'convoquer',concept:'Appel/Convocation',description:''},
  ]);log(r,'hye')

  console.log('\n=== Batch 198 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
