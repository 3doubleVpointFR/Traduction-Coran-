const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 779, total = 2321

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

  // 791. hrj (حرج) — gêne, péché, étroitesse
  r = await ins('hrj', [
    {sense:'gêne',concept:'Difficulté/Péché',description:"Serrement et difficulté — le haraj est l'étroitesse, la gêne qui empêche d'agir librement. C'est intérieur comme sentiment. Il n'y a pas de gêne (haraj) sur vous. Dieu ne veut pas vous imposer de gêne mais vous purifier. Le haraj peut aussi être le péché, ce qui est interdit. L'absence de haraj est la facilité que Dieu accorde dans la religion."},
    {sense:'péché',concept:'Difficulté/Péché',description:''},
    {sense:'étroitesse',concept:'Difficulté/Péché',description:''},
  ])
  log(r,'hrj',{'Difficulté/Péché':"Serrement qui empêche. Pas de gêne sur vous. Dieu veut la facilité."})

  // 792. wḵḏ (وخذ) — variante de akhdh
  r = await ins('wḵḏ', [
    {sense:'prendre',concept:'Saisie',description:"Skip si variante."},
  ])

  // 793. ðyn (ذوي) — variante de dhw y
  r = await ins('ðyn', [
    {sense:'posséder',concept:'Possession',description:"Skip si déjà fait."},
  ])

  // 794. kwkb (كوكب) — étoile, astre
  r = await ins('kwkb', [
    {sense:'étoile',concept:'Astre/Lumière',description:"Corps céleste lumineux dans la nuit — l'étoile (kawkab) brille dans le ciel nocturne. C'est permanent comme réalité cosmique. Quand il vit une étoile (kawkaban), il dit : voici mon Seigneur. Abraham utilisa les astres pour montrer leur impermanence. Les kawâkib sont les étoiles qui ornent le ciel. L'étoile qui se couche ne peut être Dieu."},
    {sense:'astre',concept:'Astre/Lumière',description:''},
    {sense:'planète',concept:'Astre/Lumière',description:''},
  ])
  log(r,'kwkb',{'Astre/Lumière':"Corps lumineux dans la nuit. Voici mon Seigneur. L'étoile se couche."})

  // 795. lamma () — quand, certes
  r = await ins('lamma', [
    {sense:'quand',concept:'Temps/Affirmation',description:"Conjonction temporelle ou particule d'insistance — lammâ introduit un événement passé ou affirme avec force. Quand (lammâ) ils virent, ils reconnurent leur tort. La particule peut aussi être négative : ils n'ont pas encore (lammâ). L'usage dépend du contexte : temporel, affirmatif ou négatif."},
    {sense:'certes',concept:'Temps/Affirmation',description:''},
    {sense:'pas encore',concept:'Temps/Affirmation',description:''},
  ])
  log(r,'lamma',{'Temps/Affirmation':"Conjonction temporelle. Quand ils virent. Affirme ou nie selon contexte."})

  // 796. knw (كون) — être, exister
  r = await ins('knw', [
    {sense:'être',concept:'Existence/Devenir',description:"Avoir l'existence — être (kâna/yakûnu) est le verbe fondamental de l'existence. C'est permanent pour Dieu, variable pour les créatures. Dieu était (kâna) et rien n'était avec Lui. Kun fa-yakûn : Sois et c'est. Le takwîn est la création, le fait de faire être. L'univers (al-kawn) est tout ce qui existe. Kâna exprime aussi le passé : il était ainsi."},
    {sense:'exister',concept:'Existence/Devenir',description:''},
    {sense:'devenir',concept:'Existence/Devenir',description:''},
  ])
  log(r,'knw',{'Existence/Devenir':"Verbe de l'existence. Kun fa-yakûn. Al-kawn: l'univers."})

  console.log('\n=== Batch 105 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
