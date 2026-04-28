const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 641, total = 2321

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
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])

  // 647. ywn (يون) — Jonas
  r = await ins('ywn', [
    {sense:'Jonas',concept:'Prophète/Patience',description:"Prophète englouti par le poisson — Yûnus (Jonas) est le prophète qui quitta son peuple avec colère puis fut avalé par la baleine. C'est permanent comme nom propre. Si ce n'était qu'il glorifiait Dieu, il serait resté dans le ventre jusqu'au Jour de la résurrection. Sa glorification dans les ténèbres le sauva."},
    {sense:'homme au poisson',concept:'Prophète/Patience',description:''},
  ])
  log(r,'ywn',{'Prophète/Patience':"Englouti par le poisson. Glorifiait Dieu dans les ténèbres. Fut sauvé."})

  // 648. wrq (ورق) — feuille, argent
  r = await ins('wrq', [
    {sense:'feuille',concept:'Végétal/Couverture',description:"Partie plate de la plante qui couvre les branches — la feuille (waraqa) est permanente sur l'arbre comme élément végétal. Ils se mirent à coudre sur eux des feuilles (waraq) du Paradis. Adam et Ève tentèrent de couvrir leur nudité avec des feuilles après leur chute."},
    {sense:'papier',concept:'Végétal/Couverture',description:''},
    {sense:'argent',concept:'Métal précieux',description:"Métal blanc brillant — les pièces d'argent (wariq) servent de monnaie."},
  ])
  log(r,'wrq',{'Végétal/Couverture':"Partie plate de la plante. Feuilles du Paradis pour couvrir la nudité.",'Métal précieux':"Argent comme monnaie."})

  // 649. ðwq (ذوق) — goûter
  r = await ins('ðwq', [
    {sense:'goûter',concept:'Expérience sensorielle',description:"Percevoir la saveur, faire l'expérience de — goûter (dhâqa) est l'acte de découvrir par le sens du goût. C'est ponctuel mais intense. Goûtez (dhûqû) le châtiment du feu ! Goûter le châtiment c'est en faire l'expérience directe et personnelle. On ne peut décrire ce qu'on a goûté, seulement le vivre."},
    {sense:'savourer',concept:'Expérience sensorielle',description:''},
    {sense:'éprouver',concept:'Expérience sensorielle',description:''},
  ])
  log(r,'ðwq',{'Expérience sensorielle':"Percevoir la saveur. Goûtez le châtiment ! Expérience directe qu'on vit."})

  // 650. wqn (وقن) — certitude
  r = await ins('wqn', [
    {sense:'certitude',concept:'Conviction/Vérité',description:"Connaissance sûre et indubitable — la certitude (yaqîn) est le degré suprême de la connaissance. C'est permanent comme état intérieur. Adore ton Seigneur jusqu'à ce que te vienne la certitude (al-yaqîn). La certitude est la mort qui révèle toute vérité, ou la connaissance qui ne laisse aucun doute."},
    {sense:'conviction',concept:'Conviction/Vérité',description:''},
    {sense:'vérité assurée',concept:'Conviction/Vérité',description:''},
  ])
  log(r,'wqn',{'Conviction/Vérité':"Connaissance indubitable. Jusqu'à ce que vienne la certitude. Mort ou connaissance suprême."})

  // 651. ab (أب) — père
  r = await ins('ab', [
    {sense:'père',concept:'Parenté/Autorité',description:"Le géniteur masculin — le père (ab) est permanent comme lien de filiation. Ton père et ton grand-père sont tes ancêtres. Abraham n'était ni juif ni chrétien. Quand Abraham dit à son père Azar... Le père représente l'autorité et la transmission de la tradition."},
    {sense:'ancêtre',concept:'Parenté/Autorité',description:''},
    {sense:'aïeul',concept:'Parenté/Autorité',description:''},
  ])
  log(r,'ab',{'Parenté/Autorité':"Le géniteur. Lien de filiation. Abraham dit à son père Azar..."})

  console.log('\n=== Batch 76 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
