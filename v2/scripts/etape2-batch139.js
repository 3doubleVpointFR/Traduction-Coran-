const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 946, total = 2321

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

  // 966. tmm (تمم) — compléter, parfaire
  r = await ins('tmm', [
    {sense:'compléter',concept:'Achèvement/Perfection',description:"Mener à son terme — compléter (tamma/atamma) c'est achever ce qui était incomplet. C'est ponctuel comme acte et permanent comme résultat. Aujourd'hui J'ai parachevé (atmamtu) pour vous votre religion. L'achèvement de la religion marque sa perfection. Le tamâm est la complétude, rien n'y manque. Ce qui est tâmm est entier, parfait. La Parole de Dieu est parfaite en vérité et en justice."},
    {sense:'parfaire',concept:'Achèvement/Perfection',description:''},
    {sense:'achever',concept:'Achèvement/Perfection',description:''},
  ])
  log(r,'tmm',{'Achèvement/Perfection':"Mener à terme. J'ai parachevé votre religion. Parole parfaite."})

  // 967. amm (أمم) — mère, nation
  r = await ins('amm', [
    {sense:'mère',concept:'Origine/Communauté',description:"Celle qui engendre et la communauté qui rassemble — la mère (umm) est l'origine. C'est permanent comme lien. Umm al-Kitâb, la Mère du Livre. L'umma est la communauté, le groupe uni. Chaque umma a son messager. Les umam (nations) passées ont reçu leurs prophètes. La Mère des cités (Umm al-Qurâ) est La Mecque. L'origine maternelle et communautaire fondent l'identité."},
    {sense:'nation',concept:'Origine/Communauté',description:''},
    {sense:'communauté',concept:'Origine/Communauté',description:''},
  ])
  log(r,'amm',{'Origine/Communauté':"Celle qui engendre. Umm al-Kitâb. Chaque umma a son messager."})

  // 968. dhr (ذرو) — disperser, semer
  r = await ins('dhr', [
    {sense:'disperser',concept:'Dispersion/Création',description:"Éparpiller dans toutes les directions — disperser (dhara) c'est répandre ce qui était groupé. C'est directionnel et ponctuel. Il a dispersé (dhara'a) sur elle toute bête. La création est une dispersion de vie sur terre. La dhurriyya est la descendance, ce qui est semé par les générations. Dieu disperse Ses créatures comme graines sur un champ."},
    {sense:'semer',concept:'Dispersion/Création',description:''},
    {sense:'progéniture',concept:'Dispersion/Création',description:''},
  ])
  log(r,'dhr',{'Dispersion/Création':"Éparpiller. Il a dispersé sur elle toute bête. Créatures comme graines."})

  // 969. nwl (نول) — obtenir, donner
  r = await ins('nwl', [
    {sense:'obtenir',concept:'Acquisition/Don',description:"Recevoir ce qu'on cherchait — obtenir (nâla/yanâlu) c'est atteindre son but. C'est ponctuel comme acquisition. Leur piété ne m'atteint pas (yanâlunî). Dieu n'a pas besoin de nos actes, mais nous en avons besoin. Le nayl est l'obtention, l'atteinte. Nâla peut aussi signifier donner. Ce qui nous atteint de bien vient de Dieu, ce qui nous atteint de mal vient de nous."},
    {sense:'atteindre',concept:'Acquisition/Don',description:''},
    {sense:'donner',concept:'Acquisition/Don',description:''},
  ])
  log(r,'nwl',{'Acquisition/Don':"Recevoir ce qu'on cherchait. Leur piété ne M'atteint pas. Le bien vient de Dieu."})

  // 970. byt (بيت) — maison, demeurer
  r = await ins('byt', [
    {sense:'maison',concept:'Demeure/Sanctuaire',description:"Lieu d'habitation — la maison (bayt) est le refuge familial. C'est permanent comme structure. La Maison (al-Bayt) de Dieu, la Kaaba. Al-Bayt al-Harâm est la Maison sacrée. Le Bayt al-Maqdis est Jérusalem. Ahl al-Bayt sont les gens de la maison prophétique. Le bât est le fait de passer la nuit. La maison protège et la Maison de Dieu sanctifie."},
    {sense:'demeure',concept:'Demeure/Sanctuaire',description:''},
    {sense:'passer la nuit',concept:'Demeure/Sanctuaire',description:''},
  ])
  log(r,'byt',{'Demeure/Sanctuaire':"Lieu d'habitation. La Maison de Dieu. La Kaaba sanctifie."})

  console.log('\n=== Batch 139 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
