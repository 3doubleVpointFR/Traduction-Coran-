const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 798, total = 2321

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

  // Skip entrées connues problématiques
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])
  r = await ins("ay'", [{sense:'signe',concept:'Signe',description:"Skip."}])

  // 811. nh-r (نهر) — rivière, réprimander
  r = await ins('nh-r', [
    {sense:'rivière',concept:'Cours d\'eau/Réprimande',description:"Eau qui coule entre deux rives — le fleuve (nahr) est le cours d'eau permanent. C'est permanent comme réalité géographique. Des jardins sous lesquels coulent les fleuves (al-anhâr). Les fleuves du Paradis sont de lait, de miel, de vin et d'eau pure. Réprimander (nahara) c'est aussi refouler par la parole. Quant au mendiant, ne le repousse pas (lâ tanhar)."},
    {sense:'fleuve',concept:'Cours d\'eau/Réprimande',description:''},
    {sense:'réprimander',concept:'Cours d\'eau/Réprimande',description:''},
  ])
  log(r,'nh-r',{'Cours d\'eau/Réprimande':"Eau entre deux rives. Jardins où coulent les fleuves. Ne repousse pas le mendiant."})

  // 812. skh-r (سخر) — se moquer, asservir
  r = await ins('skh-r', [
    {sense:'se moquer',concept:'Moquerie/Soumission',description:"Tourner en dérision — se moquer (sakhira) c'est mépriser par le rire. C'est intérieur (mépris) et extérieur (moquerie). Que des gens ne se moquent pas (lâ yaskhar) d'autres. La moquerie blesse et humilie. Dieu a aussi assujetti (sakhkhara) le soleil et la lune. L'asservissement (taskhîr) est la mise au service de l'homme par la volonté divine. Ce qui est assujetti obéit."},
    {sense:'asservir',concept:'Moquerie/Soumission',description:''},
    {sense:'assujettir',concept:'Moquerie/Soumission',description:''},
  ])
  log(r,'skh-r',{'Moquerie/Soumission':"Tourner en dérision. Que des gens ne se moquent pas. Soleil et lune assujettis."})

  // 813. lm m (لمم) — péché léger, réunir
  r = await ins('lm m', [
    {sense:'péché léger',concept:'Faute mineure/Rassemblement',description:"Transgression mineure et passagère — le lamam désigne les petits péchés, les écarts mineurs. C'est ponctuel et pardonnable. Ceux qui évitent les grands péchés et les turpitudes, sauf le lamam. Dieu pardonne les fautes légères à qui évite le grave. Lamm est aussi rassembler, réunir ce qui était dispersé."},
    {sense:'faute mineure',concept:'Faute mineure/Rassemblement',description:''},
    {sense:'réunir',concept:'Faute mineure/Rassemblement',description:''},
  ])
  log(r,'lm m',{'Faute mineure/Rassemblement':"Transgression mineure. Sauf le lamam. Pardonnable si on évite le grave."})

  // 814. jws (جوس) — parcourir, pénétrer
  r = await ins('jws', [
    {sense:'parcourir',concept:'Pénétration/Invasion',description:"Aller à travers un espace — parcourir (jâsa/yajûsu) c'est traverser en cherchant. Ils parcoururent (jâsû) l'intérieur des demeures. Les ennemis d'Israël envahirent leurs maisons. Le jaws est la traversée violente, l'irruption dans un espace. C'est ponctuel mais dévastateur. Entrer chez quelqu'un sans permission c'est violer son espace."},
    {sense:'pénétrer',concept:'Pénétration/Invasion',description:''},
    {sense:'envahir',concept:'Pénétration/Invasion',description:''},
  ])
  log(r,'jws',{'Pénétration/Invasion':"Aller à travers. Ils parcoururent les demeures. Irruption dévastatrice."})

  // 815. saa (سأء) — interroger, demander (variante)
  r = await ins('saa', [
    {sense:'interroger',concept:'Question',description:"Skip si déjà fait comme sal."},
  ])

  // 816. aan () — particule interrogative
  r = await ins('aan', [
    {sense:'quoi',concept:'Interrogation',description:"Skip si variante ou particule simple."},
  ])

  // 817. jbr (جبر) — contraindre, réparer
  r = await ins('jbr', [
    {sense:'contraindre',concept:'Contrainte/Réparation',description:"Forcer quelqu'un à faire quelque chose — contraindre (jabara/ajbara) c'est imposer par la force. Dieu est al-Jabbâr, le Contraignant, Celui dont la volonté s'impose. N'êtes-vous pas des tyrans (jabbârîn) ? Le jabr est aussi la réparation de ce qui est brisé, remettre l'os cassé. Le même mot unit la force qui brise et celle qui répare."},
    {sense:'réparer',concept:'Contrainte/Réparation',description:''},
    {sense:'tyran',concept:'Contrainte/Réparation',description:''},
  ])
  log(r,'jbr',{'Contrainte/Réparation':"Imposer par la force. Al-Jabbâr. Force qui brise et répare."})

  console.log('\n=== Batch 109 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
