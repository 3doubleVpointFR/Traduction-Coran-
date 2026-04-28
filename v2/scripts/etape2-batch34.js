const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 318, total = 2321

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

  // 319. beth (بعث) — ressusciter, envoyer
  r = await ins('beth', [
    {sense:'ressusciter',concept:'Résurrection/Envoi',description:"Acte de faire revenir à la vie ce qui était mort — la résurrection (ba'th) est directionnelle du néant vers l'existence renouvelée. C'est ponctuel mais définitif. Le Jour de la Résurrection (yawm al-ba'th) est le moment où Dieu ramènera tous les morts à la vie pour le jugement. Celui qui a créé peut recréer."},
    {sense:'envoyer',concept:'Résurrection/Envoi',description:''},
    {sense:'susciter',concept:'Résurrection/Envoi',description:''},
    {sense:'éveiller',concept:'Résurrection/Envoi',description:''},
    {sense:'prophète envoyé',concept:'Mission prophétique',description:"Celui que Dieu suscite et envoie avec un message — le prophète est 'mab'ûth', envoyé par Dieu vers un peuple. L'envoi est directionnel de Dieu vers les hommes à travers Son messager."},
  ])
  log(r,'beth',{'Résurrection/Envoi':"Ramener à la vie. Du néant vers l'existence. Le Jour où tous seront ressuscités.",'Mission prophétique':"Suscité et envoyé par Dieu. Directionnel vers les peuples."})

  // 320. škr (شكر) — remercier, gratitude
  r = await ins('škr', [
    {sense:'remercier',concept:'Gratitude/Reconnaissance',description:"Acte de reconnaître le bienfait reçu et d'en exprimer la reconnaissance — le remerciement (shukr) est directionnel vers le bienfaiteur. C'est ponctuel dans l'expression mais devrait être permanent comme disposition. La gratitude envers Dieu est le cœur de l'adoration : reconnaître que tout bienfait vient de Lui. L'ingratitude (kufr) est son contraire."},
    {sense:'gratitude',concept:'Gratitude/Reconnaissance',description:''},
    {sense:'reconnaissance',concept:'Gratitude/Reconnaissance',description:''},
    {sense:'louange',concept:'Gratitude/Reconnaissance',description:''},
  ])
  log(r,'škr',{'Gratitude/Reconnaissance':"Reconnaître le bienfait reçu. Directionnel vers le bienfaiteur. Cœur de l'adoration."})

  // 321. efw (عفو) — pardonner
  r = await ins('efw', [
    {sense:'pardonner',concept:'Pardon/Effacement',description:"Acte d'effacer la faute et de renoncer à la punition méritée — le pardon ('afw) est directionnel de celui qui pardonne vers celui qui est pardonné. C'est ponctuel mais libère définitivement de la dette. Dieu est 'Afuww, Celui qui efface les péchés et les fait disparaître. Le pardon est plus élevé que la justice stricte car il donne plus que ce qui est dû."},
    {sense:'effacer',concept:'Pardon/Effacement',description:''},
    {sense:'excuser',concept:'Pardon/Effacement',description:''},
    {sense:'surplus',concept:'Surplus/Excès',description:"Ce qui dépasse le nécessaire — le 'afw est aussi ce qui reste après avoir satisfait le besoin. Donnez de votre surplus (al-'afw)."},
  ])
  log(r,'efw',{'Pardon/Effacement':"Effacer la faute. Directionnel vers le pardonné. Plus élevé que la justice stricte.",'Surplus/Excès':"Ce qui dépasse le nécessaire. Donner de son surplus."})

  // 322. enk (عنك) — à toi, vers toi
  r = await ins('enk', [
    {sense:'à toi',concept:'Pronom/Direction',description:"Préposition combinée avec le pronom de la deuxième personne — indique une direction vers l'interlocuteur ou une appartenance à lui. C'est relationnel et directionnel vers celui à qui on s'adresse."},
    {sense:'vers toi',concept:'Pronom/Direction',description:''},
    {sense:'près de toi',concept:'Pronom/Direction',description:''},
  ])
  log(r,'enk',{'Pronom/Direction':"Direction vers l'interlocuteur. Relationnel et directionnel."})

  // 323. mws (موس) — rasoir, Moïse
  r = await ins('mws', [
    {sense:'Moïse',concept:'Prophétie',description:"Le prophète Moïse (Mûsâ), figure majeure qui libéra les fils d'Israël — permanent comme figure prophétique. Interlocuteur direct de Dieu, porteur de la Torah, celui qui affronta Pharaon."},
    {sense:'rasoir',concept:'Instrument',description:"Outil tranchant pour couper les poils — le rasoir est un instrument permanent qui accomplit une fonction de purification ou de toilette."},
  ])
  log(r,'mws',{'Prophétie':"Moïse, interlocuteur de Dieu. Libérateur et porteur de la Torah.",'Instrument':"Outil tranchant pour la purification."})

  // 324. lati (لي) — à moi, pour moi
  r = await ins('lati', [
    {sense:'à moi',concept:'Possession/Appartenance',description:"Préposition combinée avec le pronom de la première personne — indique ce qui appartient au locuteur ou ce qui lui est destiné. C'est relationnel et centré sur celui qui parle. 'Lî' exprime la possession, le droit, ou la direction vers soi."},
    {sense:'pour moi',concept:'Possession/Appartenance',description:''},
    {sense:'mon',concept:'Possession/Appartenance',description:''},
  ])
  log(r,'lati',{'Possession/Appartenance':"Ce qui appartient au locuteur. Relationnel et centré sur soi."})

  // 325. dhbh (ذبح) — égorger (variante)
  r = await ins('dhbh', [
    {sense:'égorger',concept:'Sacrifice rituel',description:"Acte de tuer en tranchant la gorge selon le rite — l'égorgement est directionnel vers l'animal sacrifié. C'est l'acte sacré par lequel on offre une vie à Dieu. Le sacrifice d'Abraham, prêt à immoler son fils, est le modèle de la soumission totale à Dieu."},
    {sense:'sacrifier',concept:'Sacrifice rituel',description:''},
    {sense:'immoler',concept:'Sacrifice rituel',description:''},
    {sense:'victime',concept:'Sacrifice rituel',description:''},
  ])
  log(r,'dhbh',{'Sacrifice rituel':"Tuer en tranchant la gorge. Acte sacré d'offrande. Soumission totale à Dieu."})

  // 326. ray (رأي) — voir, opinion
  r = await ins('ray', [
    {sense:'voir',concept:'Vision/Perception',description:"Acte de percevoir par les yeux ou par l'esprit — voir est directionnel du voyant vers le vu. C'est ponctuel dans chaque acte de vision mais permanent comme capacité. Voir peut être physique (les yeux du corps) ou spirituel (les yeux du cœur). La vraie vision est celle qui voit les réalités au-delà des apparences."},
    {sense:'percevoir',concept:'Vision/Perception',description:''},
    {sense:'opinion',concept:'Jugement/Avis',description:"Ce que l'on pense après réflexion — l'opinion (ra'y) est un jugement intérieur qui peut être juste ou erroné. C'est permanent comme position personnelle sur un sujet."},
    {sense:'avis',concept:'Jugement/Avis',description:''},
    {sense:'apparaître',concept:'Apparition',description:"Devenir visible — ce qui apparaît passe de l'invisible au visible. C'est ponctuel dans l'événement."},
  ])
  log(r,'ray',{'Vision/Perception':"Percevoir par les yeux ou l'esprit. Directionnel vers le vu. Physique ou spirituel.",'Jugement/Avis':"Ce qu'on pense après réflexion. Position personnelle.",'Apparition':"Devenir visible. Passage de l'invisible au visible."})

  // 327. jhr (جهر) — manifester, crier
  r = await ins('jhr', [
    {sense:'manifester',concept:'Manifestation/Publicité',description:"Acte de rendre visible ou audible ce qui était caché — manifester (jahr) est directionnel de l'intérieur vers l'extérieur. C'est ponctuel dans l'acte mais crée un nouvel état de visibilité. Ce qui est manifesté devient public et connu. Dieu connaît le secret (sirr) et ce qui est manifesté (jahr)."},
    {sense:'déclarer',concept:'Manifestation/Publicité',description:''},
    {sense:'crier',concept:'Manifestation/Publicité',description:''},
    {sense:'élever la voix',concept:'Manifestation/Publicité',description:''},
    {sense:'public',concept:'Manifestation/Publicité',description:''},
  ])
  log(r,'jhr',{'Manifestation/Publicité':"Rendre visible ou audible. De l'intérieur vers l'extérieur. Le public s'oppose au secret."})

  // 328. seq (صعق) — foudroyer
  r = await ins('seq', [
    {sense:'foudroyer',concept:'Foudre/Anéantissement',description:"Être frappé par la foudre ou par un choc violent qui terrasse — être foudroyé (sa'aq) est passif, on subit le coup qui vient du ciel. C'est ponctuel et peut être fatal. Le jour où le souffle sera soufflé dans la trompe, tous ceux qui sont dans les cieux et sur terre seront foudroyés sauf ceux que Dieu voudra épargner."},
    {sense:'terrasser',concept:'Foudre/Anéantissement',description:''},
    {sense:'s\'évanouir',concept:'Foudre/Anéantissement',description:''},
    {sense:'tonnerre',concept:'Foudre/Anéantissement',description:''},
  ])
  log(r,'seq',{'Foudre/Anéantissement':"Être frappé par un coup du ciel. Passif et ponctuel. Le choc qui terrasse."})

  console.log('\n=== Batch 34 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
