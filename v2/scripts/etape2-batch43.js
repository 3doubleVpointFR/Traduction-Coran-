const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 408, total = 2321

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

  // 409. new (نوع) — espèce, sorte
  r = await ins('new', [
    {sense:'espèce',concept:'Catégorie/Diversité',description:"Ensemble d'êtres partageant des caractéristiques communes — l'espèce (naw') est permanente comme catégorie de classification. Les espèces sont diverses, chacune ayant sa nature propre. Dieu a créé de chaque chose des paires, des espèces différentes qui se complètent. La diversité des espèces est un signe de la puissance créatrice."},
    {sense:'sorte',concept:'Catégorie/Diversité',description:''},
    {sense:'genre',concept:'Catégorie/Diversité',description:''},
    {sense:'variété',concept:'Catégorie/Diversité',description:''},
  ])
  log(r,'new',{'Catégorie/Diversité':"Êtres partageant des caractères communs. Diversité signe de puissance créatrice."})

  // 410. nkth (نكث) — rompre un serment
  r = await ins('nkth', [
    {sense:'rompre un serment',concept:'Parjure/Trahison',description:"Violer l'engagement pris par serment — rompre (nakth) est un acte de trahison envers celui à qui on avait promis. C'est directionnel contre le pacte et contre le partenaire. Celui qui rompt, ne rompt qu'à son propre détriment. Le parjure détruit la confiance et mérite le châtiment car il prend Dieu à témoin puis le trahit."},
    {sense:'violer un pacte',concept:'Parjure/Trahison',description:''},
    {sense:'trahir',concept:'Parjure/Trahison',description:''},
    {sense:'défaire',concept:'Défection',description:"Annuler ce qui était fait — défaire c'est détruire ce qu'on avait construit. Celle qui défait son fil après l'avoir filé solidement."},
  ])
  log(r,'nkth',{'Parjure/Trahison':"Violer l'engagement. Trahison du pacte. Rompt à son propre détriment.",'Défection':"Annuler ce qui était fait. Défaire ce qu'on avait construit."})

  // 411. lak (لك) — à toi, pour toi
  r = await ins('lak', [
    {sense:'à toi',concept:'Possession/Attribution',description:"Préposition de possession ou d'attribution avec pronom de deuxième personne — 'laka' indique ce qui appartient à celui à qui on s'adresse ou ce qui lui est destiné. C'est relationnel et directionnel vers l'interlocuteur. À toi la royauté, à toi appartient ce qui est dans les cieux et la terre."},
    {sense:'pour toi',concept:'Possession/Attribution',description:''},
    {sense:'ton',concept:'Possession/Attribution',description:''},
  ])
  log(r,'lak',{'Possession/Attribution':"Ce qui appartient à l'interlocuteur. Relationnel. À toi la royauté."})

  // 412. dmr (دمر) — détruire
  r = await ins('dmr', [
    {sense:'détruire',concept:'Destruction/Anéantissement',description:"Réduire à néant ce qui existait — la destruction (tadmîr) est directionnelle vers ce qui est anéanti. C'est ponctuel dans l'acte mais définitif dans l'effet. Dieu a détruit les peuples rebelles : 'Ad, Thamûd, le peuple de Pharaon. La destruction est le châtiment ultime qui ne laisse rien subsister."},
    {sense:'anéantir',concept:'Destruction/Anéantissement',description:''},
    {sense:'ruiner',concept:'Destruction/Anéantissement',description:''},
    {sense:'dévaster',concept:'Destruction/Anéantissement',description:''},
  ])
  log(r,'dmr',{'Destruction/Anéantissement':"Réduire à néant. Définitif. Châtiment des peuples rebelles."})

  // 413. nša (نشأ) — créer, faire naître
  r = await ins('nša', [
    {sense:'créer',concept:'Création/Origine',description:"Faire exister pour la première fois, faire naître — la création (nash'a/inshâ') est directionnelle du créateur vers ce qui est créé. C'est ponctuel comme acte initial mais permanent dans l'existence de ce qui est créé. Dieu vous a créés d'une première création, puis Il vous fera naître d'une nouvelle création (au Jour de la Résurrection)."},
    {sense:'faire naître',concept:'Création/Origine',description:''},
    {sense:'produire',concept:'Création/Origine',description:''},
    {sense:'élever',concept:'Croissance/Éducation',description:"Faire grandir progressivement — élever (nash'a) c'est accompagner la croissance depuis le début. Les jeunes filles élevées dans la parure."},
    {sense:'jeune fille',concept:'Croissance/Éducation',description:''},
  ])
  log(r,'nša',{'Création/Origine':"Faire exister la première fois. Création initiale et résurrection.",'Croissance/Éducation':"Accompagner la croissance. Élever depuis le début."})

  // 414. sff (صفف) — ranger, aligner
  r = await ins('sff', [
    {sense:'ranger',concept:'Ordre/Alignement',description:"Mettre en ligne ordonnée — ranger (saffa) est directionnel vers l'ordre établi. C'est ponctuel dans l'acte mais crée un état d'organisation. Les anges rangés en rangs (sâffât), les oiseaux qui déploient leurs ailes en rang. L'alignement est signe d'ordre, de discipline, de cohésion face à Dieu ou face à l'ennemi."},
    {sense:'aligner',concept:'Ordre/Alignement',description:''},
    {sense:'rang',concept:'Ordre/Alignement',description:''},
    {sense:'file',concept:'Ordre/Alignement',description:''},
    {sense:'ceux qui sont rangés',concept:'Ordre/Alignement',description:''},
  ])
  log(r,'sff',{'Ordre/Alignement':"Mettre en ligne ordonnée. Les anges en rangs. Signe de discipline et cohésion."})

  // 415. xwlf (خولف) — succéder, contrevenir
  r = await ins('xwlf', [
    {sense:'succéder',concept:'Succession/Opposition',description:"Venir après quelqu'un ou quelque chose — la succession (khilâfa) est directionnelle dans le temps, de ce qui précède vers ce qui suit. Adam est établi comme successeur (khalîfa) sur terre. Les générations se succèdent, chacune héritant de la précédente et léguant à la suivante."},
    {sense:'remplacer',concept:'Succession/Opposition',description:''},
    {sense:'contrevenir',concept:'Succession/Opposition',description:''},
    {sense:'différer',concept:'Divergence',description:"Ne pas être d'accord — la différence (khilâf/ikhtilâf) peut être divergence d'opinion ou de nature. Les gens diffèrent et Dieu jugera de leurs divergences."},
    {sense:'laisser derrière',concept:'Succession/Opposition',description:''},
  ])
  log(r,'xwlf',{'Succession/Opposition':"Venir après. Adam successeur sur terre. Les générations se succèdent.",'Divergence':"Ne pas être d'accord. Dieu jugera des divergences."})

  // 416. men (معن) — eau jaillissante
  r = await ins('men', [
    {sense:'eau jaillissante',concept:'Source/Jaillissement',description:"Eau qui coule abondamment d'une source — l'eau courante (ma'în) est permanente comme flux qui ne tarit pas. C'est directionnel de la source vers l'extérieur. Les jardins du Paradis ont des sources d'eau vive. L'eau qui jaillit est signe de vie et de fertilité."},
    {sense:'source',concept:'Source/Jaillissement',description:''},
    {sense:'courant',concept:'Source/Jaillissement',description:''},
  ])
  log(r,'men',{'Source/Jaillissement':"Eau qui coule abondamment. Flux qui ne tarit pas. Signe de vie."})

  // 417. ntf (نطف) — goutte
  r = await ins('ntf', [
    {sense:'goutte',concept:'Semence/Origine',description:"Petite quantité de liquide — la goutte (nutfa) est le point de départ de la vie humaine, la semence dont l'homme est créé. C'est ponctuel comme origine mais porte tout le potentiel de l'être. L'homme a été créé d'une goutte de sperme, et voilà qu'il devient un adversaire déclaré. De la goutte à l'homme complet, le chemin de la création."},
    {sense:'sperme',concept:'Semence/Origine',description:''},
    {sense:'semence',concept:'Semence/Origine',description:''},
    {sense:'liquide',concept:'Semence/Origine',description:''},
  ])
  log(r,'ntf',{'Semence/Origine':"Point de départ de la vie. L'homme créé d'une goutte. Porte tout le potentiel."})

  // 418. ð l k (ذلك) — celui-là
  r = await ins('ð l k', [
    {sense:'celui-là',concept:'Démonstration éloignée',description:"Pronom démonstratif pointant vers le distant — dhâlika désigne ce qui est loin dans l'espace, le temps ou le discours. C'est directionnel vers l'éloigné. Ce Livre-là (dhâlika l-kitâb), pas de doute à son sujet : un guide pour les pieux. Le démonstratif éloigné donne solennité et élévation à ce qu'il désigne."},
    {sense:'cela',concept:'Démonstration éloignée',description:''},
    {sense:'ce',concept:'Démonstration éloignée',description:''},
  ])
  log(r,'ð l k',{'Démonstration éloignée':"Pointe vers le distant. Solennité. Ce Livre-là, guide pour les pieux."})

  console.log('\n=== Batch 43 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
