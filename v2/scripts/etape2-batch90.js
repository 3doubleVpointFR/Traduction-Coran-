const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 709, total = 2321

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

  // 715. kta (خطأ) — erreur, pécher involontairement
  r = await ins('kta', [
    {sense:'erreur',concept:'Erreur/Involontaire',description:"Manquer son but sans intention — l'erreur (khata'/khatî'a) est l'acte qui rate sa cible ou transgresse sans le vouloir. C'est ponctuel et involontaire. Celui qui tue un croyant par erreur (khata'an). La khata' s'oppose au 'amd (intentionnel). L'erreur peut être pardonnée car elle n'implique pas de mauvaise intention, contrairement au péché délibéré."},
    {sense:'se tromper',concept:'Erreur/Involontaire',description:''},
    {sense:'péché',concept:'Erreur/Involontaire',description:''},
  ])
  log(r,'kta',{'Erreur/Involontaire':"Manquer sans intention. Tuer par erreur. Pardonnable car involontaire."})

  // 716. mss (مسس) — toucher
  r = await ins('mss', [
    {sense:'toucher',concept:'Contact/Atteinte',description:"Entrer en contact direct — toucher (massa/yamass) est le contact physique immédiat. C'est ponctuel mais peut avoir des effets durables. Aucun mal ne nous touchera (yamassanâ). Le mass est aussi l'euphémisme pour le rapport intime. Quand le mal touche l'homme, il invoque son Seigneur. Le toucher peut être bénéfique (miséricorde) ou nuisible (châtiment)."},
    {sense:'atteindre',concept:'Contact/Atteinte',description:''},
    {sense:'affliger',concept:'Contact/Atteinte',description:''},
  ])
  log(r,'mss',{'Contact/Atteinte':"Contact direct. Aucun mal ne nous touchera. Peut être bénéfique ou nuisible."})

  // 717. khlf (خلف) — succéder, différer, derrière
  r = await ins('khlf', [
    {sense:'succéder',concept:'Succession/Différence',description:"Venir après et prendre la place — succéder (khalafa) est directionnel dans le temps vers l'après. Les générations se succèdent (yastakhlifû). Le khalîfa est le successeur, celui qui représente. Adam est khalîfa sur terre. L'ikhtilâf est la différence, la divergence d'opinions. Ce qui est derrière (khalf) est ce qu'on laisse après soi."},
    {sense:'différer',concept:'Succession/Différence',description:''},
    {sense:'derrière',concept:'Succession/Différence',description:''},
    {sense:'successeur',concept:'Succession/Différence',description:''},
  ])
  log(r,'khlf',{'Succession/Différence':"Venir après. Adam khalîfa sur terre. Ikhtilâf: divergence."})

  // 718. may (ماي) — eau (variante)
  r = await ins('may', [
    {sense:'eau',concept:'Élément vital',description:"Liquide essentiel à la vie — l'eau (mâ') est la source de toute vie. C'est permanent comme réalité naturelle. Nous avons fait de l'eau (mâ') toute chose vivante. L'eau descend du ciel pour faire revivre la terre morte. Elle est symbole de pureté et de vie. Sans eau, rien ne vit; avec elle, tout peut renaître."},
    {sense:'liquide',concept:'Élément vital',description:''},
  ])
  log(r,'may',{'Élément vital':"Source de vie. De l'eau toute chose vivante. Descend du ciel, fait revivre."})

  // 719. akhr (أخر) — autre, dernier, retarder
  r = await ins('akhr', [
    {sense:'autre',concept:'Altérité/Délai',description:"Ce qui est différent de ceci — l'autre (âkhar/ukhrâ) est ce qui n'est pas identique. C'est permanent comme distinction. La vie dernière (al-âkhira) est l'autre vie après celle-ci. Retarder (akhkhara) c'est repousser dans le temps. Dieu ne retarde pas une âme quand son terme vient. L'âkhir est le dernier, celui qui vient après tous les autres."},
    {sense:'dernier',concept:'Altérité/Délai',description:''},
    {sense:'retarder',concept:'Altérité/Délai',description:''},
    {sense:'au-delà',concept:'Altérité/Délai',description:''},
  ])
  log(r,'akhr',{'Altérité/Délai':"Ce qui est différent. Al-âkhira: vie dernière. Ne retarde pas une âme."})

  console.log('\n=== Batch 90 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
