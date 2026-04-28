const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 446, total = 2321

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

  // 447. ma' (موء) — eau (skip si non trouvé)
  r = await ins("ma'", [
    {sense:'eau',concept:'Élément vital',description:"Substance liquide essentielle à toute vie."},
  ])
  if(r) log(r,"ma'",{'Élément vital':"Essentielle à toute vie."})

  // 448. wala — ami, allié
  r = await ins('wala', [
    {sense:'ami',concept:'Alliance/Proximité',description:"Celui qui est proche et dont on peut attendre du soutien — l'ami (walî) est permanent dans sa relation d'alliance. C'est relationnel et directionnel vers celui à qui on est lié. Dieu est le Walî des croyants : Il les protège, les guide et les soutient. Prendre des alliés en dehors de Dieu c'est chercher protection là où il n'y en a pas."},
    {sense:'allié',concept:'Alliance/Proximité',description:''},
    {sense:'proche',concept:'Alliance/Proximité',description:''},
    {sense:'protecteur',concept:'Alliance/Proximité',description:''},
    {sense:'tuteur',concept:'Autorité',description:"Celui qui a autorité sur quelqu'un — le walî a pouvoir de décision pour celui dont il a la charge. C'est une responsabilité autant qu'un droit."},
  ])
  log(r,'wala',{'Alliance/Proximité':"Proche qui soutient. Dieu est le Walî des croyants.",'Autorité':"Pouvoir de décision. Responsabilité et droit."})

  // 449. qrn (قرن) — siècle, corne, accompagner
  r = await ins('qrn', [
    {sense:'siècle',concept:'Temps/Génération',description:"Période de temps ou génération de personnes — le siècle (qarn) est une unité de temps qui désigne une époque ou ceux qui y vivent. Combien de générations avons-Nous fait périr avant eux ! Les générations se succèdent, chacune ayant son épreuve et son jugement."},
    {sense:'génération',concept:'Temps/Génération',description:''},
    {sense:'corne',concept:'Excroissance/Pouvoir',description:"Partie dure sur la tête de certains animaux — la corne (qarn) est symbole de force et de pouvoir. Dhul-Qarnayn, le Bicorne, celui qui a dominé l'Orient et l'Occident."},
    {sense:'accompagner',concept:'Association',description:"Être lié à quelqu'un — être associé (muqtarin) c'est être accompagné. Les mauvais compagnons seront attachés (muqarranîn) dans les chaînes."},
  ])
  log(r,'qrn',{'Temps/Génération':"Époque ou ceux qui y vivent. Les générations se succèdent.",'Excroissance/Pouvoir':"Symbole de force. Dhul-Qarnayn.",'Association':"Être lié. Les compagnons enchaînés."})

  // 450. wrṯ (ورث) — hériter
  r = await ins('wrṯ', [
    {sense:'hériter',concept:'Héritage/Succession',description:"Recevoir les biens de celui qui meurt — l'héritage (wirâtha/irth) est directionnel du défunt vers l'héritier. C'est ponctuel dans la transmission mais permanent comme droit acquis. Les règles de l'héritage sont détaillées dans le Coran avec une précision juridique. Dieu hérite des cieux et de la terre : à Lui revient tout après la fin."},
    {sense:'héritage',concept:'Héritage/Succession',description:''},
    {sense:'succession',concept:'Héritage/Succession',description:''},
    {sense:'héritier',concept:'Héritage/Succession',description:''},
  ])
  log(r,'wrṯ',{'Héritage/Succession':"Recevoir du défunt. Règles détaillées. Dieu hérite de tout."})

  // 451. yns (ينس) — Jonas
  r = await ins('yns', [
    {sense:'Jonas',concept:'Prophétie',description:"Le prophète qui fut avalé par le poisson — Jonas (Yûnus) est permanent comme figure prophétique. Il quitta son peuple en colère et fut englouti par le poisson. Dans les ténèbres, il invoqua : nul dieu sauf Toi, gloire à Toi, j'ai été des injustes. Dieu le sauva et son peuple crut. La patience du prophète face à l'épreuve."},
    {sense:'prophète',concept:'Prophétie',description:''},
  ])
  log(r,'yns',{'Prophétie':"Avalé par le poisson. Invoqua dans les ténèbres. Son peuple crut."})

  // 452. ywk (يوك) — ce jour-là
  r = await ins('ywk', [
    {sense:'ce jour-là',concept:'Temporalité/Moment',description:"Désigne un jour particulier dans le passé ou le futur — yawma'idhin pointe vers un moment précis. C'est directionnel vers le jour désigné. Ce jour-là, quand la terre sera secouée. Ce jour-là, les visages seront radieux ou assombris. Le jour du Jugement est ce jour-là par excellence."},
    {sense:'alors',concept:'Temporalité/Moment',description:''},
    {sense:'à ce moment',concept:'Temporalité/Moment',description:''},
  ])
  log(r,'ywk',{'Temporalité/Moment':"Jour particulier. Ce jour-là, les visages seront radieux ou assombris."})

  // 453. q d y (قضي) — juger, décider
  r = await ins('q d y', [
    {sense:'juger',concept:'Jugement/Décision',description:"Trancher une affaire, rendre un verdict — le jugement (qadâ') est directionnel de celui qui juge vers l'affaire et les parties. C'est ponctuel dans la décision mais définitif dans ses effets. Dieu juge en vérité, Il tranche les affaires avec justice. Quand Il décide une chose, Il lui dit sois et elle est."},
    {sense:'décider',concept:'Jugement/Décision',description:''},
    {sense:'décréter',concept:'Jugement/Décision',description:''},
    {sense:'accomplir',concept:'Achèvement',description:"Mener à son terme — qadâ peut signifier achever, terminer. Quand la prière est accomplie, dispersez-vous sur terre."},
    {sense:'destin',concept:'Destin',description:"Ce que Dieu a décrété — le qadar est le destin fixé par Dieu. Ce qui est décidé s'accomplira."},
  ])
  log(r,'q d y',{'Jugement/Décision':"Trancher une affaire. Dieu juge en vérité. Sois et c'est.",'Achèvement':"Mener à terme. Quand la prière est accomplie.",'Destin':"Ce que Dieu a décrété. S'accomplira."})

  // 454. fqr (فقر) — pauvre
  r = await ins('fqr', [
    {sense:'pauvre',concept:'Pauvreté/Besoin',description:"Celui qui manque du nécessaire — le pauvre (faqîr) est dans un état de besoin permanent. C'est relationnel car le pauvre est défini par rapport à ce qui lui manque et à ceux qui possèdent. Vous êtes les pauvres envers Dieu, et Dieu est le Riche qui Se suffit. La vraie pauvreté est de reconnaître son besoin de Dieu."},
    {sense:'indigent',concept:'Pauvreté/Besoin',description:''},
    {sense:'nécessiteux',concept:'Pauvreté/Besoin',description:''},
    {sense:'besoin',concept:'Pauvreté/Besoin',description:''},
  ])
  log(r,'fqr',{'Pauvreté/Besoin':"Manquer du nécessaire. Pauvres envers Dieu. La vraie pauvreté reconnaît son besoin."})

  // 455. qrts (قرطس) — parchemin
  r = await ins('qrts', [
    {sense:'parchemin',concept:'Support écrit',description:"Surface sur laquelle on écrit — le parchemin (qirtâs) est permanent comme support de l'écriture. Si Nous avions fait descendre sur toi un Livre sur parchemin et qu'ils l'avaient touché de leurs mains... Le parchemin matérialise la révélation, il rend tangible la parole divine."},
    {sense:'papier',concept:'Support écrit',description:''},
    {sense:'feuillet',concept:'Support écrit',description:''},
  ])
  log(r,'qrts',{'Support écrit':"Surface pour écrire. Matérialise la révélation. Rend tangible la parole."})

  // 456. nhar (نهر) — rivière, jour
  r = await ins('nhar', [
    {sense:'rivière',concept:'Eau courante',description:"Cours d'eau qui coule continuellement — la rivière (nahr) est permanente comme flux d'eau douce. Les jardins sous lesquels coulent les rivières sont la description récurrente du Paradis. La rivière donne la vie, irrigue, rafraîchit. Ses eaux sont douces contrairement à la mer salée."},
    {sense:'fleuve',concept:'Eau courante',description:''},
    {sense:'ruisseau',concept:'Eau courante',description:''},
    {sense:'jour',concept:'Lumière/Temps',description:"La partie lumineuse du cycle quotidien — le jour (nahâr) est le temps du travail et de la vue claire, opposé à la nuit du repos."},
  ])
  log(r,'nhar',{'Eau courante':"Flux permanent d'eau douce. Jardins sous lesquels coulent les rivières.",'Lumière/Temps':"Partie lumineuse. Temps du travail. Opposé à la nuit."})

  console.log('\n=== Batch 47 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
