const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 736, total = 2321

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

  // 745. qfy (قفي) — suivre les traces, suivi
  r = await ins('qfy', [
    {sense:'suivre les traces',concept:'Suite/Succession',description:"Venir après et marcher dans les pas — suivre (qaffâ) c'est venir à la suite de quelqu'un. C'est directionnel vers l'avant dans le temps. Nous avons fait suivre (qaffaynâ) Jésus fils de Marie. Le qafâ est la nuque, ce qui est derrière. Suivre c'est être derrière celui qui précède, marcher dans son sillage. Les prophètes se succèdent ainsi."},
    {sense:'succéder',concept:'Suite/Succession',description:''},
    {sense:'nuque',concept:'Suite/Succession',description:''},
  ])
  log(r,'qfy',{'Suite/Succession':"Venir à la suite. Nous avons fait suivre Jésus. Marcher dans le sillage."})

  // 746. hda (هذا) — ceci, celui-ci
  r = await ins('hda', [
    {sense:'ceci',concept:'Démonstratif/Présence',description:"Pronom désignant ce qui est proche — hâdhâ pointe vers ce qui est présent, visible, à portée. C'est directionnel vers le proche. Voici (hâdhâ) un avertissement clair. Le démonstratif rend présent ce qu'on désigne. Ceci est le Livre (hâdhâ l-kitâb), pas de doute en lui. Hâdhâ affirme la présence immédiate de ce qu'on montre."},
    {sense:'celui-ci',concept:'Démonstratif/Présence',description:''},
    {sense:'voici',concept:'Démonstratif/Présence',description:''},
  ])
  log(r,'hda',{'Démonstratif/Présence':"Pointer le proche. Voici un avertissement. Hâdhâ l-kitâb: ce Livre."})

  // 747. eys (عيس) — Jésus
  r = await ins('eys', [
    {sense:'Jésus',concept:'Prophète/Messie',description:"Nom du Messie fils de Marie — 'Îsâ est le prophète envoyé aux Fils d'Israël avec l'Évangile. C'est permanent comme nom propre. Le Messie Jésus fils de Marie ('Îsâ ibn Maryam) n'est qu'un messager de Dieu. Il naquit d'une vierge, parla au berceau, fit des miracles. Il n'est pas Dieu ni fils de Dieu mais un serviteur honoré. Il sera témoin au Jour dernier."},
    {sense:'Messie',concept:'Prophète/Messie',description:''},
  ])
  log(r,'eys',{'Prophète/Messie':"Fils de Marie. N'est qu'un messager. Serviteur honoré, témoin au Jour."})

  // 748. mry (مري) — douter, contestation
  r = await ins('mry', [
    {sense:'douter',concept:'Doute/Contestation',description:"Être dans l'incertitude ou contester — le doute (mirya/mârâ) est l'hésitation sur la vérité. C'est intérieur comme état d'esprit. Ne sois pas parmi ceux qui doutent (al-mumtarîn). Le doute peut être sincère (chercher la vérité) ou obstiné (refuser la vérité évidente). La contestation (mirâ') est la dispute qui naît du doute. Le croyant n'a pas de doute sur Dieu."},
    {sense:'contestation',concept:'Doute/Contestation',description:''},
    {sense:'dispute',concept:'Doute/Contestation',description:''},
  ])
  log(r,'mry',{'Doute/Contestation':"Hésitation sur la vérité. Ne sois pas parmi les douteurs. Mirâ': dispute."})

  // 749. ayd (أيد) — soutenir, main
  r = await ins('ayd', [
    {sense:'soutenir',concept:'Soutien/Force',description:"Donner force et appui — soutenir (ayyada) c'est renforcer quelqu'un. C'est directionnel vers celui qu'on aide. Nous l'avons soutenu (ayyadnâhu) par l'Esprit Saint. Le ta'yîd est le soutien divin qui donne la victoire. La main (yad) est l'organe de la force et de l'action. Les mains de Dieu sont métaphore de Sa puissance et de Sa générosité."},
    {sense:'main',concept:'Soutien/Force',description:''},
    {sense:'force',concept:'Soutien/Force',description:''},
  ])
  log(r,'ayd',{'Soutien/Force':"Renforcer. Soutenu par l'Esprit Saint. Mains: puissance et générosité."})

  console.log('\n=== Batch 96 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
