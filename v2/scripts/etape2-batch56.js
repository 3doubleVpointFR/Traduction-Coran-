const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 523, total = 2321

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

  // Skip ma' et ns'
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])

  // 526. wqr (وقر) — vénérer, poids
  r = await ins('wqr', [
    {sense:'vénérer',concept:'Respect/Révérence',description:"Témoigner un profond respect — vénérer (waqqara) est l'attitude intérieure de révérence envers ce qui est sacré. Pour que vous croyiez en Dieu et en Son messager, que vous le souteniez et le vénériez (tuwaqqirûhu). La vénération est due aux prophètes et aux parents."},
    {sense:'respecter',concept:'Respect/Révérence',description:''},
    {sense:'honorer',concept:'Respect/Révérence',description:''},
    {sense:'poids',concept:'Lourdeur',description:"Ce qui pèse dans l'oreille — le waqr est la surdité causée par un poids. Dans leurs oreilles il y a un poids qui les empêche d'entendre."},
    {sense:'surdité',concept:'Lourdeur',description:''},
  ])
  log(r,'wqr',{'Respect/Révérence':"Profond respect. Vénérer le prophète. Dû aux prophètes et parents.",'Lourdeur':"Poids dans l'oreille. Surdité qui empêche d'entendre."})

  // 527. str (سطر) — écrire, ligne
  r = await ins('str', [
    {sense:'écrire',concept:'Écriture/Inscription',description:"Tracer des lettres en lignes — écrire (satara) c'est aligner les signes sur un support. Les versets sont des lignes écrites (asâtîr). Par le calame et ce qu'ils écrivent en lignes ! L'écriture fixe la parole et la préserve de l'oubli."},
    {sense:'ligne',concept:'Écriture/Inscription',description:''},
    {sense:'rangée',concept:'Écriture/Inscription',description:''},
    {sense:'fables',concept:'Récits anciens',description:"Histoires des anciens considérées comme inventées — les asâtîr al-awwalîn sont les légendes des premiers, ce que les mécréants disent du Coran."},
  ])
  log(r,'str',{'Écriture/Inscription':"Tracer en lignes. Par le calame ! Préserver de l'oubli.",'Récits anciens':"Fables des anciens. Ce que les mécréants disent du Coran."})

  // 528. hadha (هذا) — ceci, celui-ci
  r = await ins('hadha', [
    {sense:'ceci',concept:'Démonstratif proche',description:"Pronom démonstratif de proximité — hâdhâ désigne ce qui est présent ou proche dans le discours. C'est directionnel vers ce qu'on montre. Ceci est le Livre, point de doute. Le démonstratif rend présent à l'esprit ce dont on parle, l'actualise pour l'interlocuteur."},
    {sense:'celui-ci',concept:'Démonstratif proche',description:''},
    {sense:'ce',concept:'Démonstratif proche',description:''},
  ])
  log(r,'hadha',{'Démonstratif proche':"Désigne le proche. Ceci est le Livre. Rend présent à l'esprit."})

  // 529. wdy (وذي) — nuire, faire du mal
  r = await ins('wdy', [
    {sense:'nuire',concept:'Tort/Préjudice',description:"Causer du tort à quelqu'un — nuire (âdhâ) est directionnel vers celui qui subit le mal. C'est ponctuel dans l'acte mais peut laisser des traces durables. Ceux qui font du tort (yu'dhûna) à Dieu et à Son messager. Le tort peut être en paroles ou en actes. Ne vous faites pas de tort mutuellement."},
    {sense:'faire du mal',concept:'Tort/Préjudice',description:''},
    {sense:'offenser',concept:'Tort/Préjudice',description:''},
    {sense:'tort',concept:'Tort/Préjudice',description:''},
  ])
  log(r,'wdy',{'Tort/Préjudice':"Causer du tort. En paroles ou en actes. Ne vous faites pas de tort."})

  // 530. bght (بغت) — surprendre, soudain
  r = await ins('bght', [
    {sense:'surprendre',concept:'Soudaineté/Imprévu',description:"Arriver sans prévenir, prendre au dépourvu — surprendre (baghata) est l'irruption de l'inattendu. C'est ponctuel par nature. L'Heure les surprendra soudainement (baghtatan) alors qu'ils ne s'y attendent pas. La surprise de l'Heure rappelle la nécessité de la vigilance permanente."},
    {sense:'soudainement',concept:'Soudaineté/Imprévu',description:''},
    {sense:'subitement',concept:'Soudaineté/Imprévu',description:''},
  ])
  log(r,'bght',{'Soudaineté/Imprévu':"Arriver sans prévenir. L'Heure surprendra soudainement."})

  // 531. zrr (زرر) — graine, atome
  r = await ins('zrr', [
    {sense:'graine',concept:'Semence/Infime',description:"Petite unité de semence — la graine (dharra) est ce qui est semé pour produire. Par extension, le plus petit élément imaginable, l'atome. Quiconque fait le poids d'un atome (dharra) de bien le verra. Rien n'échappe à Dieu, pas même le poids d'un atome dans les cieux et la terre."},
    {sense:'atome',concept:'Semence/Infime',description:''},
    {sense:'particule',concept:'Semence/Infime',description:''},
  ])
  log(r,'zrr',{'Semence/Infime':"Le plus petit élément. Le poids d'un atome. Rien n'échappe à Dieu."})

  // 532. sawfa (سوف) — futur, bientôt
  r = await ins('sawfa', [
    {sense:'futur',concept:'Temps à venir',description:"Particule indiquant le futur — sawfa place l'action dans l'avenir avec certitude. C'est directionnel vers ce qui va advenir. Vous saurez bientôt (sawfa ta'lamûna) ! La particule exprime une promesse ou une menace divine qui se réalisera inévitablement."},
    {sense:'bientôt',concept:'Temps à venir',description:''},
    {sense:'va',concept:'Temps à venir',description:''},
  ])
  log(r,'sawfa',{'Temps à venir':"Place dans l'avenir. Vous saurez bientôt ! Promesse ou menace."})

  // 533. awly (أولي) — premier, digne de
  r = await ins('awly', [
    {sense:'premier',concept:'Priorité/Mérite',description:"Ce qui vient avant ou qui a la préséance — le premier (awlâ) est celui qui mérite le plus. C'est permanent comme rang hiérarchique. Ceux qui ont des liens de parenté ont priorité (awlâ) les uns sur les autres dans le Livre de Dieu. Être le plus digne (awlâ) c'est avoir le meilleur droit."},
    {sense:'plus digne',concept:'Priorité/Mérite',description:''},
    {sense:'plus apte',concept:'Priorité/Mérite',description:''},
    {sense:'doués de',concept:'Possession de qualité',description:"Ceux qui possèdent une qualité — les doués d'intelligence (ulû l-albâb) sont ceux qui réfléchissent."},
  ])
  log(r,'awly',{'Priorité/Mérite':"Ce qui vient avant. Avoir le meilleur droit. Les proches ont priorité.",'Possession de qualité':"Ceux qui possèdent. Les doués d'intelligence."})

  console.log('\n=== Batch 56 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
