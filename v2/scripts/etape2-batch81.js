const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 664, total = 2321

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

  // 670. ftl (فتل) — tordre, mèche
  r = await ins('ftl', [
    {sense:'tordre',concept:'Torsion/Infime',description:"Enrouler des fibres ensemble — tordre (fatala) c'est créer un fil en entrelaçant. La pellicule (fatîl) dans le sillon d'un noyau de datte est l'image du plus infime. On ne leur fera pas de tort, pas même d'un fatîl. Ce qui est tordu ensemble est plus solide qu'un brin seul."},
    {sense:'mèche',concept:'Torsion/Infime',description:''},
    {sense:'pellicule',concept:'Torsion/Infime',description:''},
  ])
  log(r,'ftl',{'Torsion/Infime':"Enrouler ensemble. Pas de tort même d'un fatîl. Le plus infime."})

  // 671. tms (طمس) — effacer, aveugler
  r = await ins('tms', [
    {sense:'effacer',concept:'Oblitération/Aveuglement',description:"Faire disparaître les traces — effacer (tamasa) c'est rendre invisible ce qui était visible. C'est directionnel vers le néant. Efface (atmas) leurs biens ! Rends leurs richesses méconnaissables. Aveugler les yeux c'est effacer leur capacité de voir. L'effacement est l'acte de faire comme si rien n'avait existé."},
    {sense:'aveugler',concept:'Oblitération/Aveuglement',description:''},
    {sense:'oblitérer',concept:'Oblitération/Aveuglement',description:''},
  ])
  log(r,'tms',{'Oblitération/Aveuglement':"Faire disparaître. Efface leurs biens ! Aveugler c'est effacer la vue."})

  // 672. fḵr (فخر) — se vanter, fierté
  r = await ins('fḵr', [
    {sense:'se vanter',concept:'Orgueil/Vantardise',description:"Se glorifier de ses qualités — se vanter (fakhara/tafâkhara) est l'affirmation orgueilleuse de sa propre valeur. C'est intérieur comme sentiment et extérieur comme expression. Ils se vantaient (yatafâkharûna) de leur nombre. La vantardise est le signe d'un cœur attaché à la gloire mondaine plutôt qu'à l'agrément divin."},
    {sense:'fierté',concept:'Orgueil/Vantardise',description:''},
    {sense:'orgueil',concept:'Orgueil/Vantardise',description:''},
  ])
  log(r,'fḵr',{'Orgueil/Vantardise':"Se glorifier. Se vantaient de leur nombre. Cœur attaché à la gloire mondaine."})

  // 673. iḏa () — quand, lorsque
  r = await ins('iḏa', [
    {sense:'quand',concept:'Temps/Condition',description:"Conjonction temporelle ou conditionnelle — idhâ introduit un moment ou une circonstance. C'est directionnel vers l'événement qu'on anticipe. Quand (idhâ) viendra le secours de Dieu et la victoire. Idhâ marque souvent l'inéluctable : quand le ciel se fendra, quand la terre sera secouée."},
    {sense:'lorsque',concept:'Temps/Condition',description:''},
    {sense:'si',concept:'Temps/Condition',description:''},
  ])
  log(r,'iḏa',{'Temps/Condition':"Introduit le moment. Quand viendra le secours. Marque l'inéluctable."})

  // 674. ḵsr (خسر) — perdre, être en perte
  r = await ins('ḵsr', [
    {sense:'perdre',concept:'Perte/Damnation',description:"Subir un dommage, manquer son but — perdre (khasira) est l'opposé de gagner. C'est permanent comme état final. Par le temps ! L'homme est certes en perdition (khusrân). La perte suprême est celle de l'âme au Jour du Jugement. Ceux qui se sont perdus eux-mêmes sont les vrais perdants."},
    {sense:'être en perte',concept:'Perte/Damnation',description:''},
    {sense:'échouer',concept:'Perte/Damnation',description:''},
    {sense:'perdition',concept:'Perte/Damnation',description:''},
  ])
  log(r,'ḵsr',{'Perte/Damnation':"Subir un dommage. L'homme est en perdition. La perte suprême: l'âme."})

  console.log('\n=== Batch 81 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
