const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 599, total = 2321

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

  // Skip entrées connues
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])

  // 604. rfa (رفع) — élever, lever
  r = await ins('rfa', [
    {sense:'élever',concept:'Élévation/Exaltation',description:"Porter de bas en haut — élever (rafa'a) est directionnel vers le haut. C'est ponctuel dans l'acte mais peut créer un état permanent. Nous avons élevé pour toi ta renommée. Dieu élève en degrés qui Il veut. Élever la voix, les mains vers le ciel en prière. Jésus fut élevé vers Dieu."},
    {sense:'lever',concept:'Élévation/Exaltation',description:''},
    {sense:'hausser',concept:'Élévation/Exaltation',description:''},
    {sense:'exalter',concept:'Élévation/Exaltation',description:''},
  ])
  log(r,'rfa',{'Élévation/Exaltation':"De bas en haut. Nous avons élevé ta renommée. Jésus élevé vers Dieu."})

  // 605. twr (طور) — mont, étape
  r = await ins('twr', [
    {sense:'mont',concept:'Montagne/Révélation',description:"Élévation de terre, lieu de rencontre avec Dieu — le mont (tûr) Sinaï est le lieu où Moïse reçut la Torah. C'est permanent comme lieu géographique sacré. Par le mont (Tûr) ! Nous avons élevé au-dessus de vous le mont. La montagne symbolise la hauteur de la révélation."},
    {sense:'montagne',concept:'Montagne/Révélation',description:''},
    {sense:'étape',concept:'Phase/Développement',description:"Stade dans un processus — les étapes (atwâr) de la création. Nous vous avons créés par étapes successives."},
  ])
  log(r,'twr',{'Montagne/Révélation':"Mont Sinaï. Par le mont ! Lieu de la Torah. Hauteur de la révélation.",'Phase/Développement':"Stades dans un processus. Créés par étapes."})

  // 606. qw (قوة) — force, puissance
  r = await ins('qw', [
    {sense:'force',concept:'Puissance/Capacité',description:"Capacité d'agir et de résister — la force (quwwa) est permanente comme qualité mais variable en degré. Prenez ce que Nous vous avons donné avec force (bi-quwwa) ! La force vient de Dieu. Toute la force appartient à Dieu. Les anges sont doués de force auprès du Trône."},
    {sense:'puissance',concept:'Puissance/Capacité',description:''},
    {sense:'pouvoir',concept:'Puissance/Capacité',description:''},
    {sense:'fermeté',concept:'Puissance/Capacité',description:''},
  ])
  log(r,'qw',{'Puissance/Capacité':"Capacité d'agir. Prenez avec force ! Toute la force appartient à Dieu."})

  // 607. sba (صبء) — Sabéens
  r = await ins('sba', [
    {sense:'Sabéens',concept:'Communauté religieuse',description:"Communauté religieuse mentionnée dans le Coran — les Sabéens (Sâbi'ûn) sont cités avec les juifs et les chrétiens. C'est permanent comme groupe historique. Ceux qui croient, les juifs, les Sabéens, les chrétiens, quiconque croit en Dieu et au Jour dernier... Le Coran reconnaît l'existence de multiples voies vers Dieu."},
    {sense:'adorateurs des astres',concept:'Communauté religieuse',description:''},
  ])
  log(r,'sba',{'Communauté religieuse':"Mentionnés avec juifs et chrétiens. Quiconque croit en Dieu..."})

  // 608. mny (مني) — souhaiter, mort
  r = await ins('mny', [
    {sense:'souhaiter',concept:'Désir/Espérance',description:"Vouloir que quelque chose arrive — souhaiter (tamannâ) est l'expression du désir intérieur. Souhaitez la mort si vous êtes véridiques ! Les juifs prétendaient être les amis exclusifs de Dieu mais refusaient de souhaiter la mort. Le souhait révèle ce que le cœur espère vraiment."},
    {sense:'désirer',concept:'Désir/Espérance',description:''},
    {sense:'espérer',concept:'Désir/Espérance',description:''},
    {sense:'sperme',concept:'Semence',description:"Liquide de la procréation — la goutte de sperme (maniyy) est l'origine de l'homme. D'une goutte éjectée."},
  ])
  log(r,'mny',{'Désir/Espérance':"Vouloir que quelque chose arrive. Souhaitez la mort ! Révèle ce que le cœur espère.",'Semence':"Liquide de procréation. D'une goutte éjectée."})

  // 609. ajr (أجر) — récompense, salaire
  r = await ins('ajr', [
    {sense:'récompense',concept:'Rétribution/Salaire',description:"Ce qu'on reçoit en échange d'une action — la récompense (ajr) est le paiement de l'effort. C'est permanent comme rétribution méritée. Leur récompense est auprès de leur Seigneur. Dieu ne laisse pas perdre la récompense des bienfaisants. Le salaire de ce monde est peu, celui de l'au-delà est meilleur."},
    {sense:'salaire',concept:'Rétribution/Salaire',description:''},
    {sense:'rémunération',concept:'Rétribution/Salaire',description:''},
    {sense:'dot',concept:'Rétribution/Salaire',description:"Ce que le mari donne à l'épouse — le mahr est la récompense du mariage."},
  ])
  log(r,'ajr',{'Rétribution/Salaire':"Paiement de l'effort. Leur récompense auprès de Dieu. Ne laisse pas perdre."})

  console.log('\n=== Batch 68 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
