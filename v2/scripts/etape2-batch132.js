const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 911, total = 2321

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
  r = await ins("'dn", [{sense:'oreille',concept:'Audition',description:"Skip."}])
  r = await ins("sh'b", [{sense:'peuple',concept:'Communauté',description:"Skip."}])

  // 930. thlth (ثلث) — trois
  r = await ins('thlth', [
    {sense:'trois',concept:'Nombre/Trinité',description:"Nombre cardinal entre deux et quatre — trois (thalâth) est un nombre significatif. C'est permanent comme quantité. Ne dites pas trois (thalâtha). La trinité est rejetée : Dieu est Un, pas trois. Trois jours, trois nuits, les trois ténèbres du fœtus. Le thulth est le tiers, une division. Trois peut être nombre de complétude ou de déviation selon le contexte théologique."},
    {sense:'tiers',concept:'Nombre/Trinité',description:''},
    {sense:'troisième',concept:'Nombre/Trinité',description:''},
  ])
  log(r,'thlth',{'Nombre/Trinité':"Nombre entre deux et quatre. Ne dites pas trois (trinité). Dieu est Un."})

  // 931. qdd (قدد) — couper, lanière
  r = await ins('qdd', [
    {sense:'couper',concept:'Section/Division',description:"Séparer en parties — couper (qadda) c'est diviser. C'est ponctuel comme acte. Ils se sont divisés (taqadda'û) en sectes. La division en sectes est blâmée. Le qidd est la lanière, la bande coupée. Couper peut être nécessaire (tailler) ou destructeur (diviser la communauté). L'unité est préférable à la division."},
    {sense:'lanière',concept:'Section/Division',description:''},
    {sense:'diviser',concept:'Section/Division',description:''},
  ])
  log(r,'qdd',{'Section/Division':"Séparer en parties. Divisés en sectes. L'unité préférable."})

  // 932. shrk (شرك) — associer
  r = await ins('shrk', [
    {sense:'associer',concept:'Association/Polythéisme',description:"Donner un associé à Dieu — le shirk est le péché d'associer d'autres divinités à Dieu. C'est intérieur (croyance) et extérieur (culte). N'associez (lâ tushrikû) rien à Dieu. Le shirk est le péché impardonnable s'il n'y a pas repentir. Le mushrik est l'associationniste, le polythéiste. Le sharîk est l'associé, le partenaire. L'unicité divine (tawhîd) est l'opposé du shirk."},
    {sense:'polythéisme',concept:'Association/Polythéisme',description:''},
    {sense:'partenaire',concept:'Association/Polythéisme',description:''},
  ])
  log(r,'shrk',{'Association/Polythéisme':"Donner un associé à Dieu. N'associez rien. Le shirk impardonnable sans repentir."})

  // 933. khs (خصص) — spécifier, propre
  r = await ins('khs', [
    {sense:'spécifier',concept:'Particularité/Exclusivité',description:"Réserver à quelqu'un en particulier — spécifier (khassa) c'est distinguer du général. C'est permanent comme qualité. Il spécifie (yakhtassu) de Sa miséricorde qui Il veut. Dieu choisit qui Il distingue. Le khâss est le particulier, l'élite. La khâssiyya est la propriété distinctive. Ce qui est khuṣûṣ concerne un cas particulier. L'élection divine distingue certains serviteurs."},
    {sense:'distinguer',concept:'Particularité/Exclusivité',description:''},
    {sense:'élite',concept:'Particularité/Exclusivité',description:''},
  ])
  log(r,'khs',{'Particularité/Exclusivité':"Distinguer du général. Il spécifie de Sa miséricorde. Élection divine."})

  // 934. sal (سأل) — demander, questionner
  r = await ins('sal', [
    {sense:'demander',concept:'Requête/Interrogation',description:"Solliciter une information ou une chose — demander (sa'ala) c'est s'adresser pour obtenir. C'est ponctuel comme acte. Ils te demandent (yas'alûnaka) au sujet de... Le su'âl est la question, la demande. Demander à Dieu c'est prier, implorer. Demander aux hommes c'est mendier ou questionner. La bonne question amène la bonne réponse. Al-Mas'ûl est celui à qui on demande des comptes."},
    {sense:'questionner',concept:'Requête/Interrogation',description:''},
    {sense:'interroger',concept:'Requête/Interrogation',description:''},
  ])
  log(r,'sal',{'Requête/Interrogation':"Solliciter. Ils te demandent au sujet de... La bonne question amène la réponse."})

  console.log('\n=== Batch 132 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
