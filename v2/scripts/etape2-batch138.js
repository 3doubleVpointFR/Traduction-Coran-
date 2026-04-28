const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 941, total = 2321

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
  r = await ins("baeda", [{sense:'après',concept:'Temps',description:"Skip."}])
  r = await ins("mina", [{sense:'de',concept:'Préposition',description:"Skip."}])
  r = await ins("laka", [{sense:'pour toi',concept:'Pronom',description:"Skip."}])
  r = await ins("min", [{sense:'de',concept:'Préposition',description:"Skip."}])
  r = await ins("hta", [{sense:'jusqu\'à',concept:'Limite',description:"Skip si déjà fait comme hty."}])
  r = await ins("nfe", [{sense:'utilité',concept:'Profit',description:"Skip si déjà fait."}])
  r = await ins("abr", [{sense:'aiguille',concept:'Objet',description:"Skip."}])

  // 961. kyr (خير) — bien, meilleur (variante)
  r = await ins('kyr', [
    {sense:'bien',concept:'Bien/Préférence',description:"Ce qui est préférable — le bien (khayr) est ce qui est bénéfique et souhaitable. C'est permanent comme valeur. Le bien (al-khayr) est ce que tu as avancé pour toi-même. La vraie richesse est les bonnes actions envoyées devant soi. Khayr laka signifie 'c'est mieux pour toi'. Le comparatif khayr min établit une hiérarchie morale. Dieu seul sait où est le vrai khayr."},
    {sense:'meilleur',concept:'Bien/Préférence',description:''},
  ])
  log(r,'kyr',{'Bien/Préférence':"Ce qui est bénéfique. Le bien avancé pour soi. Dieu seul sait le vrai khayr."})

  // 962. mll (ملل) — religion, confession
  r = await ins('mll', [
    {sense:'religion',concept:'Religion/Confession',description:"Communauté religieuse et sa doctrine — la milla est la religion, la voie suivie. C'est permanent comme système. La religion (milla) d'Abraham, hanîf. La milla ibrahîmiyya est la voie du monothéisme pur. Chaque communauté a sa milla. L'islam se présente comme le retour à la milla originelle d'Abraham. La milla définit l'appartenance religieuse."},
    {sense:'confession',concept:'Religion/Confession',description:''},
    {sense:'communauté',concept:'Religion/Confession',description:''},
  ])
  log(r,'mll',{'Religion/Confession':"Communauté religieuse. La milla d'Abraham. Retour au monothéisme pur."})

  // 963. dlw (ذلو) — humilier, soumettre
  r = await ins('dlw', [
    {sense:'humilier',concept:'Humiliation/Soumission',description:"Rabaisser quelqu'un — humilier (adhalla) c'est réduire à la bassesse. C'est ponctuel comme acte et peut être permanent comme état. Ils furent frappés d'humiliation (dhilla). Le dhull est l'abaissement, la soumission forcée. Le dhalîl est l'humilié, le soumis. L'humiliation peut être juste punition ou injuste oppression. Seule la soumission à Dieu est noble."},
    {sense:'soumettre',concept:'Humiliation/Soumission',description:''},
    {sense:'abaisser',concept:'Humiliation/Soumission',description:''},
  ])
  log(r,'dlw',{'Humiliation/Soumission':"Rabaisser. Frappés d'humiliation. Seule soumission à Dieu est noble."})

  // 964. jyaa (جيء) — venir, apporter
  r = await ins('jyaa', [
    {sense:'venir',concept:'Venue/Arrivée',description:"Se déplacer vers un lieu — venir (jâ'a) c'est arriver quelque part. C'est directionnel et ponctuel. Quand viendra (jâ'a) le secours de Dieu. La venue est l'arrivée attendue ou redoutée. Le majî' est la venue, l'arrivée. Jâ'a peut introduire ce qui survient : quand vint la vérité. L'arrivée de l'Heure, du secours, du jugement : toutes ces venues sont certaines."},
    {sense:'arriver',concept:'Venue/Arrivée',description:''},
    {sense:'apporter',concept:'Venue/Arrivée',description:''},
  ])
  log(r,'jyaa',{'Venue/Arrivée':"Se déplacer vers. Quand viendra le secours de Dieu. Venues certaines."})

  // 965. l y (لي) — pour moi, à moi
  r = await ins('l y', [
    {sense:'pour moi',concept:'Attribution/Possession',description:"Préposition li avec pronom suffixe — lî exprime ce qui m'appartient ou me concerne. C'est permanent comme outil grammatical. Pour moi (lî) ma religion et pour vous votre religion. La séparation claire des chemins. Lî marque ce qui revient à la personne. Chacun a ce qui lui revient. La responsabilité personnelle devant Dieu."},
    {sense:'à moi',concept:'Attribution/Possession',description:''},
  ])
  log(r,'l y',{'Attribution/Possession':"Ce qui me revient. Pour moi ma religion. Responsabilité personnelle."})

  console.log('\n=== Batch 138 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
