const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 569, total = 2321

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

  // 574. omm (أمم) — mère, communauté
  r = await ins('omm', [
    {sense:'mère',concept:'Origine/Maternité',description:"Celle qui donne naissance et protège — la mère (umm) est l'origine de l'être. C'est permanent comme lien fondamental. Le Paradis est sous les pieds des mères. La mère du Livre (umm al-kitâb) est l'archétype de toute écriture auprès de Dieu."},
    {sense:'matrice',concept:'Origine/Maternité',description:''},
    {sense:'communauté',concept:'Collectivité/Nation',description:"Groupe partageant une même voie — la communauté (umma) est unie par une mission commune. Vous êtes la meilleure communauté suscitée pour les hommes. Chaque communauté a son messager."},
    {sense:'nation',concept:'Collectivité/Nation',description:''},
  ])
  log(r,'omm',{'Origine/Maternité':"Celle qui donne naissance. Paradis sous les pieds des mères. Mère du Livre.",'Collectivité/Nation':"Groupe uni. Meilleure communauté. Chaque umma a son messager."})

  // 575. ghzl (غزل) — filer, tisser
  r = await ins('ghzl', [
    {sense:'filer',concept:'Tissage/Travail',description:"Transformer la laine ou le lin en fil — filer (ghazala) est le travail qui transforme la matière brute. Ne soyez pas comme celle qui défait son fil (ghazlahâ) après l'avoir solidement filé. Défaire ce qu'on a tissé c'est annuler son propre travail, image de l'inconstance dans les engagements."},
    {sense:'tisser',concept:'Tissage/Travail',description:''},
    {sense:'fil',concept:'Tissage/Travail',description:''},
  ])
  log(r,'ghzl',{'Tissage/Travail':"Transformer en fil. Ne défaites pas votre fil. Image de l'inconstance."})

  // 576. nkṯ (نكث) — rompre, violer
  r = await ins('nkṯ', [
    {sense:'rompre',concept:'Rupture/Trahison',description:"Briser un engagement qu'on avait pris — rompre (nakatha) le pacte c'est trahir sa parole. C'est ponctuel dans l'acte mais permanent dans la souillure morale. Ceux qui rompent le pacte de Dieu après l'avoir conclu. La rupture du pacte attire la malédiction divine."},
    {sense:'violer',concept:'Rupture/Trahison',description:''},
    {sense:'trahir',concept:'Rupture/Trahison',description:''},
  ])
  log(r,'nkṯ',{'Rupture/Trahison':"Briser l'engagement. Rompre le pacte attire la malédiction."})

  // 577. ghf (غفر) — pardonner, couvrir
  r = await ins('ghf', [
    {sense:'pardonner',concept:'Pardon/Couverture',description:"Effacer la faute et ne pas la punir — pardonner (ghafara) c'est couvrir le péché comme si il n'avait pas existé. Dieu est al-Ghafûr, Celui qui pardonne abondamment. Le pardon divin couvre les fautes comme un vêtement couvre le corps. Demandez pardon à Dieu, Il est Pardonneur et Miséricordieux."},
    {sense:'effacer',concept:'Pardon/Couverture',description:''},
    {sense:'couvrir',concept:'Pardon/Couverture',description:''},
    {sense:'casque',concept:'Protection',description:"Ce qui couvre et protège la tête — le mighfar est le casque qui protège le guerrier."},
  ])
  log(r,'ghf',{'Pardon/Couverture':"Effacer la faute. Dieu est al-Ghafûr. Couvre comme un vêtement.",'Protection':"Le casque qui couvre et protège."})

  // 578. sha (شيء) — chose (variante)
  r = await ins('sha', [
    {sense:'chose',concept:'Existence/Entité',description:"Ce qui peut être désigné ou conçu — la chose (shay') englobe tout ce qui est. Toute chose périra sauf Sa Face. Dieu dit à la chose Sois et elle est. Le concept de chose est le plus universel."},
    {sense:'quelque chose',concept:'Existence/Entité',description:''},
    {sense:'rien',concept:'Existence/Entité',description:''},
  ])
  log(r,'sha',{'Existence/Entité':"Tout ce qui peut être désigné. Sois et c'est. Le plus universel."})

  // 579. kha (خطأ) — erreur, faute
  r = await ins('kha', [
    {sense:'erreur',concept:'Faute/Égarement',description:"Action qui manque le but juste — l'erreur (khata'/khatî'a) est le contraire du correct. C'est ponctuel dans l'acte mais peut avoir des conséquences durables. Celui qui tue un croyant par erreur (khata'an) doit expier. L'erreur involontaire diffère du péché délibéré, mais les deux appellent réparation."},
    {sense:'faute',concept:'Faute/Égarement',description:''},
    {sense:'péché',concept:'Faute/Égarement',description:''},
    {sense:'manquer',concept:'Faute/Égarement',description:''},
  ])
  log(r,'kha',{'Faute/Égarement':"Manquer le but. Tuer par erreur appelle expiation. Différent du péché délibéré."})

  console.log('\n=== Batch 63 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
