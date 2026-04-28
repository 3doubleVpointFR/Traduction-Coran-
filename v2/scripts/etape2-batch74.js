const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 631, total = 2321

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

  // 637. wkd (وكد) — confirmer, affirmer
  r = await ins('wkd', [
    {sense:'confirmer',concept:'Affirmation/Solidité',description:"Rendre ferme et certain — confirmer (akkada/tawakkada) c'est renforcer une chose par des preuves ou des serments. Ne rompez pas les serments après les avoir confirmés (tawkîdihâ). Un serment confirmé engage plus fortement. L'affirmation répétée crée la certitude."},
    {sense:'affirmer',concept:'Affirmation/Solidité',description:''},
    {sense:'renforcer',concept:'Affirmation/Solidité',description:''},
  ])
  log(r,'wkd',{'Affirmation/Solidité':"Rendre ferme. Ne rompez pas après avoir confirmé. Serment engage."})

  // 638. frd (فرض) — obliger, prescrire
  r = await ins('frd', [
    {sense:'obliger',concept:'Obligation/Devoir',description:"Rendre obligatoire une chose — l'obligation (fard) est ce que Dieu a prescrit comme devoir. C'est permanent comme loi divine. Des obligations (farâ'id) que Dieu vous a prescrites. Le fard est ce qui ne peut être négligé sans péché. La prescription divine structure la vie du croyant."},
    {sense:'prescrire',concept:'Obligation/Devoir',description:''},
    {sense:'devoir',concept:'Obligation/Devoir',description:''},
    {sense:'part',concept:'Part déterminée',description:"Portion fixée par la loi — les parts d'héritage (furûd) sont déterminées par Dieu."},
  ])
  log(r,'frd',{'Obligation/Devoir':"Rendre obligatoire. Obligations prescrites. Ce qui ne peut être négligé.",'Part déterminée':"Parts d'héritage fixées par Dieu."})

  // 639. hzw (هزو) — moquer, railler
  r = await ins('hzw', [
    {sense:'moquer',concept:'Dérision/Mépris',description:"Tourner en ridicule par le rire — se moquer (istahza'a) est directionnel vers celui qu'on méprise. C'est ponctuel dans l'acte mais révèle une disposition intérieure. Dieu se moque d'eux (Allâhu yastahzi'u bihim). La moquerie des messagers attire le châtiment sur les moqueurs."},
    {sense:'railler',concept:'Dérision/Mépris',description:''},
    {sense:'ridiculiser',concept:'Dérision/Mépris',description:''},
  ])
  log(r,'hzw',{'Dérision/Mépris':"Tourner en ridicule. Dieu se moque d'eux. Attire le châtiment."})

  // 640. ghwt (غوط) — enfoncer, profondeur
  r = await ins('ghwt', [
    {sense:'enfoncer',concept:'Engloutissement/Profondeur',description:"Faire entrer en profondeur, submerger — enfoncer (ghâta/yaghûtu) est directionnel vers le bas. Nous l'avons englouti (fa-khasafnâ bihi) lui et sa demeure dans la terre. La terre s'ouvre et engloutit les orgueilleux. La profondeur de l'abîme symbolise l'éloignement définitif de la surface."},
    {sense:'engloutir',concept:'Engloutissement/Profondeur',description:''},
    {sense:'abîme',concept:'Engloutissement/Profondeur',description:''},
  ])
  log(r,'ghwt',{'Engloutissement/Profondeur':"Faire entrer en profondeur. Englouti dans la terre. Éloignement définitif."})

  // 641. ten (طعن) — frapper, critiquer
  r = await ins('ten', [
    {sense:'frapper',concept:'Attaque/Critique',description:"Porter un coup avec une arme pointue — frapper (ta'ana) est directionnel vers la cible. C'est ponctuel comme coup mais peut être répété. S'ils violent leurs serments après leur pacte et attaquent (ta'anû) votre religion... L'attaque peut être physique ou verbale, le coup d'épée ou la critique acerbe."},
    {sense:'critiquer',concept:'Attaque/Critique',description:''},
    {sense:'attaquer',concept:'Attaque/Critique',description:''},
  ])
  log(r,'ten',{'Attaque/Critique':"Porter un coup. S'ils attaquent votre religion. Physique ou verbale."})

  console.log('\n=== Batch 74 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
