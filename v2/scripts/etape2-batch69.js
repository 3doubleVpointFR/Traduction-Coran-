const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 605, total = 2321

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

  // 610. khw (خوف) — peur, crainte
  r = await ins('khw', [
    {sense:'peur',concept:'Crainte/Appréhension',description:"Émotion face à un danger perçu — la peur (khawf) est un état intérieur d'inquiétude. C'est temporaire comme émotion mais peut devenir permanent si le danger persiste. Ne craignez pas (lâ takhâfû), vous êtes les plus hauts si vous êtes croyants ! La peur de Dieu seul libère de toute autre peur."},
    {sense:'craindre',concept:'Crainte/Appréhension',description:''},
    {sense:'redouter',concept:'Crainte/Appréhension',description:''},
    {sense:'effrayer',concept:'Crainte/Appréhension',description:''},
  ])
  log(r,'khw',{'Crainte/Appréhension':"Émotion face au danger. Ne craignez pas ! Craindre Dieu libère."})

  // 611. htd (هتد) — guider, être guidé
  r = await ins('htd', [
    {sense:'guider',concept:'Guidance/Direction',description:"Montrer le chemin vers le but — guider (hadâ/ihtadâ) est directionnel vers le bien. C'est permanent comme fonction divine. Dieu guide qui Il veut vers un chemin droit. Celui que Dieu guide, nul ne peut l'égarer. La guidance est le plus grand don, elle mène de l'obscurité à la lumière."},
    {sense:'être guidé',concept:'Guidance/Direction',description:''},
    {sense:'suivre la voie',concept:'Guidance/Direction',description:''},
  ])
  log(r,'htd',{'Guidance/Direction':"Montrer le chemin. Dieu guide qui Il veut. De l'obscurité à la lumière."})

  // 612. sfr (صفر) — jaune
  r = await ins('sfr', [
    {sense:'jaune',concept:'Couleur/Éclat',description:"Couleur du soleil et de l'or — le jaune (asfar) est permanent comme qualité visuelle. Une vache jaune (baqara safrâ'), de couleur vive, qui réjouit les regards. Le jaune vif symbolise la beauté et l'éclat. La couleur jaune dans le Coran évoque aussi le dessèchement de la végétation."},
    {sense:'doré',concept:'Couleur/Éclat',description:''},
    {sense:'pâle',concept:'Couleur/Éclat',description:''},
  ])
  log(r,'sfr',{'Couleur/Éclat':"Couleur du soleil. Vache jaune vive. Réjouit les regards."})

  // 613. fqe (فقع) — éclatant, vif
  r = await ins('fqe', [
    {sense:'éclatant',concept:'Intensité/Pureté',description:"D'une couleur vive et pure — éclatant (fâqi') qualifie ce qui frappe le regard par son intensité. Une vache jaune, éclatante (fâqi') de couleur. La pureté de la couleur reflète la pureté demandée dans le sacrifice. Ce qui est éclatant ne peut être dissimulé, il s'impose à la vue."},
    {sense:'vif',concept:'Intensité/Pureté',description:''},
    {sense:'pur',concept:'Intensité/Pureté',description:''},
  ])
  log(r,'fqe',{'Intensité/Pureté':"Couleur vive et pure. Éclatante. Reflète la pureté du sacrifice."})

  // 614. srr (سرر) — réjouir, secret
  r = await ins('srr', [
    {sense:'réjouir',concept:'Joie/Plaisir',description:"Causer de la joie dans le cœur — réjouir (sarra/yasurru) est directionnel vers l'intérieur de celui qui éprouve le plaisir. Une vache qui réjouit (tasurru) les regards. La beauté réjouit naturellement ceux qui la contemplent. La joie est un état intérieur de satisfaction."},
    {sense:'plaire',concept:'Joie/Plaisir',description:''},
    {sense:'secret',concept:'Caché/Intime',description:"Ce qu'on cache aux autres — le secret (sirr) est l'opposé du public. Dieu connaît le secret et le plus caché. L'intimité entre époux est aussi appelée sirr."},
    {sense:'lit',concept:'Mobilier',description:"Le lit (sarîr) sur lequel on repose — sur des lits (surur) face à face dans le Paradis."},
  ])
  log(r,'srr',{'Joie/Plaisir':"Causer de la joie. Réjouit les regards. État intérieur de satisfaction.",'Caché/Intime':"Ce qu'on cache. Dieu connaît le secret.",'Mobilier':"Lits face à face au Paradis."})

  // 615. nn (أنن) — que (conjonction)
  r = await ins('nn', [
    {sense:'que',concept:'Conjonction/Affirmation',description:"Particule introduisant une proposition — anna/inna affirme et renforce ce qui suit. C'est un outil grammatical permanent. En vérité (inna) Dieu est Pardonneur. Ils témoignent que (anna) Muhammad est le messager de Dieu. La particule donne force et certitude à l'affirmation."},
    {sense:'certes',concept:'Conjonction/Affirmation',description:''},
    {sense:'en vérité',concept:'Conjonction/Affirmation',description:''},
  ])
  log(r,'nn',{'Conjonction/Affirmation':"Affirme et renforce. En vérité, Dieu est Pardonneur. Donne certitude."})

  console.log('\n=== Batch 69 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
