const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 398, total = 2321

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

  // 399. slb (صلب) — crucifier, dur
  r = await ins('slb', [
    {sense:'crucifier',concept:'Supplice/Exposition',description:"Attacher quelqu'un à une croix pour le mettre à mort ou l'exposer — la crucifixion (salb) est un châtiment qui expose le corps au regard de tous. C'est directionnel vers le haut et vers l'extérieur. Ils ne l'ont pas tué ni crucifié mais cela leur est apparu ainsi. La crucifixion est un châtiment des brigands dans la loi islamique."},
    {sense:'croix',concept:'Supplice/Exposition',description:''},
    {sense:'dur',concept:'Dureté/Fermeté',description:"Qui résiste à la pression — le dur (sulb) est permanent comme qualité de résistance. L'épine dorsale (sulb) est la partie dure du dos. Ce qui est dur ne plie pas facilement."},
    {sense:'ferme',concept:'Dureté/Fermeté',description:''},
  ])
  log(r,'slb',{'Supplice/Exposition':"Attacher pour exposer. Châtiment public. Ils ne l'ont pas crucifié.",'Dureté/Fermeté':"Résiste à la pression. L'épine dorsale. Ne plie pas."})

  // 400. khde (خدع) — tromper
  r = await ins('khde', [
    {sense:'tromper',concept:'Tromperie/Ruse',description:"Faire croire le faux pour le vrai, induire en erreur volontairement — la tromperie (khid'a/khad') est directionnelle de celui qui trompe vers celui qui est trompé. C'est un acte intérieur de dissimulation qui se manifeste extérieurement. Les hypocrites cherchent à tromper Dieu mais c'est Lui qui les trompe. La tromperie retourne contre son auteur."},
    {sense:'duper',concept:'Tromperie/Ruse',description:''},
    {sense:'ruser',concept:'Tromperie/Ruse',description:''},
    {sense:'leurrer',concept:'Tromperie/Ruse',description:''},
  ])
  log(r,'khde',{'Tromperie/Ruse':"Faire croire le faux. Acte de dissimulation. Retourne contre son auteur."})

  // 401. šhd (شهد) — témoigner
  r = await ins('šhd', [
    {sense:'témoigner',concept:'Témoignage/Présence',description:"Attester ce qu'on a vu ou ce qu'on sait être vrai — le témoignage (shahâda) est directionnel de celui qui témoigne vers ce qui est attesté et vers ceux qui reçoivent le témoignage. C'est ponctuel dans l'acte mais engage la responsabilité. Dieu est témoin de toute chose. Le martyr (shahîd) témoigne de sa foi par le sacrifice de sa vie."},
    {sense:'attester',concept:'Témoignage/Présence',description:''},
    {sense:'être présent',concept:'Témoignage/Présence',description:''},
    {sense:'martyr',concept:'Martyre',description:"Celui qui meurt en témoignant de sa foi — le martyr (shahîd) donne sa vie comme preuve ultime de sa conviction. Il est vivant auprès de son Seigneur."},
    {sense:'témoin',concept:'Témoignage/Présence',description:''},
  ])
  log(r,'šhd',{'Témoignage/Présence':"Attester ce qu'on sait vrai. Engage la responsabilité. Dieu est témoin.",'Martyre':"Mourir en témoignant. Preuve ultime. Vivant auprès de Dieu."})

  // 402. frt (فرط) — négliger, excès
  r = await ins('frt', [
    {sense:'négliger',concept:'Négligence/Excès',description:"Manquer à ce qu'on devrait faire, laisser passer l'occasion — la négligence (tafrît) est un défaut de vigilance qui laisse échapper ce qui importait. C'est intérieur comme relâchement puis extérieur dans ses conséquences. Malheur à moi pour ce que j'ai négligé envers Dieu. La négligence est le contraire du soin attentif."},
    {sense:'manquer',concept:'Négligence/Excès',description:''},
    {sense:'excès',concept:'Négligence/Excès',description:''},
    {sense:'outrepasser',concept:'Négligence/Excès',description:''},
    {sense:'dépasser les limites',concept:'Transgression',description:"Aller au-delà de ce qui est permis — l'excès (ifrât) dépasse la mesure juste. C'est directionnel vers l'au-delà des limites."},
  ])
  log(r,'frt',{'Négligence/Excès':"Manquer à son devoir. Relâchement intérieur. Malheur pour ce qu'on néglige.",'Transgression':"Dépasser les limites permises. Au-delà de la mesure juste."})

  // 403. thql (ثقل) — lourd
  r = await ins('thql', [
    {sense:'lourd',concept:'Poids/Gravité',description:"Qui a beaucoup de poids, difficile à porter — le lourd (thaqîl) est permanent comme qualité de ce qui pèse. Le poids peut être physique ou moral. La parole lourde (qawl thaqîl) est celle qui a du poids, de l'importance. Les deux poids (thaqalayn) sont les hommes et les djinns. Ce qui est lourd tire vers le bas."},
    {sense:'pesant',concept:'Poids/Gravité',description:''},
    {sense:'grave',concept:'Poids/Gravité',description:''},
    {sense:'fardeau',concept:'Charge/Responsabilité',description:"Ce qu'on porte sur soi — le fardeau (thiql) est ce qui pèse sur les épaules ou sur la conscience. Porter le fardeau d'autrui c'est assumer sa responsabilité."},
  ])
  log(r,'thql',{'Poids/Gravité':"Ce qui pèse. Physique ou moral. La parole lourde a de l'importance.",'Charge/Responsabilité':"Ce qu'on porte. Pèse sur la conscience."})

  // 404. fḫr (فخر) — se vanter, être fier
  r = await ins('fḫr', [
    {sense:'se vanter',concept:'Orgueil/Vantardise',description:"Parler de soi avec excès pour impressionner les autres — la vantardise (fakhr) est directionnelle vers soi-même élevé aux yeux des autres. C'est intérieur comme sentiment d'orgueil et extérieur dans son expression. La vantardise est blâmée car elle place le soi au centre au lieu de Dieu. L'excès de fierté aveugle sur ses propres défauts."},
    {sense:'fierté',concept:'Orgueil/Vantardise',description:''},
    {sense:'orgueil',concept:'Orgueil/Vantardise',description:''},
    {sense:'glorieux',concept:'Excellence',description:"Qui mérite la gloire par ses qualités — le glorieux (fâkhir) possède une excellence reconnue. C'est permanent comme qualité intrinsèque."},
  ])
  log(r,'fḫr',{'Orgueil/Vantardise':"Parler de soi avec excès. Place le soi au centre. Aveugle sur ses défauts.",'Excellence':"Mérite la gloire. Qualité intrinsèque reconnue."})

  // 405. why (وحي) — révéler
  r = await ins('why', [
    {sense:'révéler',concept:'Révélation/Inspiration',description:"Communiquer un message de façon cachée ou surnaturelle — la révélation (wahy) est directionnelle de Dieu vers celui qui reçoit. C'est ponctuel dans chaque acte de révélation mais permanent dans son contenu. Le Coran est révélé (ûhiya) au Prophète par l'intermédiaire de Gabriel. La révélation est la parole de Dieu transmise aux hommes par voie prophétique."},
    {sense:'inspirer',concept:'Révélation/Inspiration',description:''},
    {sense:'révélation',concept:'Révélation/Inspiration',description:''},
    {sense:'suggérer',concept:'Suggestion',description:"Faire passer une idée subtilement — la suggestion est une forme d'inspiration discrète. Les démons suggèrent à leurs alliés."},
  ])
  log(r,'why',{'Révélation/Inspiration':"Communication divine. De Dieu vers le récepteur. Le Coran est révélé.",'Suggestion':"Faire passer une idée subtilement. Les démons suggèrent."})

  // 406. wsb (وصب) — douleur durable
  r = await ins('wsb', [
    {sense:'douleur durable',concept:'Affliction permanente',description:"Souffrance qui persiste dans le temps sans s'atténuer — la douleur durable (wasab) est permanente comme état de souffrance continue. C'est intérieur comme sensation et peut être physique ou spirituelle. Le châtiment permanent (adhâb wâsib) est celui qui ne cesse pas, qui dure éternellement pour les damnés."},
    {sense:'souffrance',concept:'Affliction permanente',description:''},
    {sense:'mal persistant',concept:'Affliction permanente',description:''},
    {sense:'fatigue',concept:'Affliction permanente',description:''},
  ])
  log(r,'wsb',{'Affliction permanente':"Souffrance qui persiste. Ne s'atténue pas. Le châtiment éternel."})

  // 407. aannana — que (conjonction)
  r = await ins('aannana', [
    {sense:'que',concept:'Conjonction/Liaison',description:"Particule qui introduit une proposition subordonnée — 'anna' relie une proposition principale à ce qui la complète. C'est un outil grammatical qui structure le discours en subordonnant une idée à une autre. Je témoigne que (anna) il n'y a de dieu que Dieu."},
    {sense:'certes',concept:'Affirmation',description:"Particule d'emphase qui renforce l'affirmation — 'inna' donne du poids à ce qui suit. C'est directionnel vers ce qu'on affirme avec force."},
  ])
  log(r,'aannana',{'Conjonction/Liaison':"Introduit une subordonnée. Structure le discours.",'Affirmation':"Renforce l'affirmation. Donne du poids."})

  // 408. tew (طوع) — obéir
  r = await ins('tew', [
    {sense:'obéir',concept:'Obéissance/Soumission',description:"Se conformer à la volonté d'un autre, suivre ses ordres — l'obéissance (tâ'a) est directionnelle vers celui à qui on obéit. C'est ponctuel dans chaque acte mais peut être permanent comme disposition. Obéir à Dieu et à Son messager est le devoir du croyant. L'obéissance est volontaire quand elle vient du cœur, contrainte quand elle est imposée."},
    {sense:'se soumettre',concept:'Obéissance/Soumission',description:''},
    {sense:'volontaire',concept:'Choix libre',description:"Qui agit de son plein gré — ce qui est volontaire (taw'an) vient du libre choix, non de la contrainte. Le ciel et la terre ont répondu : nous venons obéissants (tâ'i'în)."},
    {sense:'pouvoir',concept:'Capacité',description:"Être capable de faire quelque chose — avoir le pouvoir (istâta) c'est avoir la capacité d'agir. C'est permanent comme disposition."},
  ])
  log(r,'tew',{'Obéissance/Soumission':"Se conformer à une volonté. Directionnel. Devoir du croyant.",'Choix libre':"Agir de son plein gré. Sans contrainte.",'Capacité':"Être capable d'agir."})

  console.log('\n=== Batch 42 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
