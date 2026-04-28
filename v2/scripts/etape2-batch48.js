const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 455, total = 2321

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

  // 456. ma' — skip
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  if(r) log(r,"ma'",{})

  // 457. kshf (كشف) — dévoiler
  r = await ins('kshf', [
    {sense:'dévoiler',concept:'Révélation/Découverte',description:"Enlever ce qui couvrait pour rendre visible — dévoiler (kashafa) est directionnel de l'intérieur vers l'extérieur, du caché vers le manifeste. C'est ponctuel dans l'acte mais révèle ce qui était permanent sous le voile. Quand le voile sera levé sur la Jambe (le Jour difficile). Dieu dévoile le malheur de celui qui L'invoque dans la détresse."},
    {sense:'découvrir',concept:'Révélation/Découverte',description:''},
    {sense:'révéler',concept:'Révélation/Découverte',description:''},
    {sense:'lever',concept:'Révélation/Découverte',description:''},
  ])
  log(r,'kshf',{'Révélation/Découverte':"Enlever le voile. Du caché au manifeste. Dieu dévoile le malheur du suppliant."})

  // 458. dwb (دوب) — animal, bête
  r = await ins('dwb', [
    {sense:'animal',concept:'Créature/Bête',description:"Être vivant qui se meut sur terre — la bête (dâbba) est toute créature qui marche, rampe ou galope. C'est permanent comme catégorie englobant animaux et parfois humains. Il n'y a pas de bête sur terre dont la subsistance n'incombe à Dieu. Le Jour du Jugement, une bête sortira de terre pour parler aux gens."},
    {sense:'bête',concept:'Créature/Bête',description:''},
    {sense:'monture',concept:'Créature/Bête',description:''},
  ])
  log(r,'dwb',{'Créature/Bête':"Tout être qui se meut. Subsistance incombe à Dieu. Une bête parlera au Jugement."})

  // 459. bghṯ (بغت) — soudainement
  r = await ins('bghṯ', [
    {sense:'soudainement',concept:'Soudaineté/Surprise',description:"De façon inattendue, sans préparation — le soudain (baghtatan) surprend sans avertissement. C'est ponctuel par nature, l'instant où tout bascule. L'Heure viendra soudainement, elle vous surprendra alors que vous ne vous y attendez pas. Le châtiment peut venir soudainement sur ceux qui sont dans l'insouciance."},
    {sense:'subitement',concept:'Soudaineté/Surprise',description:''},
    {sense:'à l improviste',concept:'Soudaineté/Surprise',description:''},
  ])
  log(r,'bghṯ',{'Soudaineté/Surprise':"Sans préparation. L'Heure viendra soudainement. Surprend les insouciants."})

  // 460. lny (لني) — à nous
  r = await ins('lny', [
    {sense:'à nous',concept:'Possession/Appartenance',description:"Préposition indiquant ce qui appartient au groupe du locuteur — 'lanâ' désigne ce qui revient à nous, ce qui est nôtre. C'est relationnel et collectif. À nous appartient la guidance. Notre Seigneur est Celui à Qui appartient tout."},
    {sense:'pour nous',concept:'Possession/Appartenance',description:''},
    {sense:'notre',concept:'Possession/Appartenance',description:''},
  ])
  log(r,'lny',{'Possession/Appartenance':"Ce qui appartient au groupe. À nous la guidance."})

  // 461. lqf (لقف) — avaler, saisir
  r = await ins('lqf', [
    {sense:'avaler',concept:'Absorption/Engloutissement',description:"Faire disparaître en absorbant — avaler (laqifa/talqafa) est directionnel vers l'intérieur. Le bâton de Moïse avala ce qu'ils avaient fabriqué : les sortilèges des magiciens furent engloutis par la vérité. Ce qui avale fait disparaître ce qui est avalé."},
    {sense:'engloutir',concept:'Absorption/Engloutissement',description:''},
    {sense:'saisir',concept:'Absorption/Engloutissement',description:''},
  ])
  log(r,'lqf',{'Absorption/Engloutissement':"Faire disparaître en absorbant. Le bâton avala leurs sortilèges."})

  // 462. aisraail (إسرائيل) — Israël
  r = await ins('aisraail', [
    {sense:'Israël',concept:'Peuple/Élection',description:"Nom donné à Jacob et à ses descendants — Israël est permanent comme désignation du peuple élu à qui furent envoyés de nombreux prophètes. Les fils d'Israël (Banî Isrâ'îl) reçurent la Torah, virent les miracles de Moïse, eurent alliance avec Dieu. Leur histoire est un miroir pour la communauté de Muhammad : l'élection implique responsabilité."},
    {sense:'fils d Israël',concept:'Peuple/Élection',description:''},
    {sense:'Jacob',concept:'Peuple/Élection',description:''},
  ])
  log(r,'aisraail',{'Peuple/Élection':"Descendants de Jacob. Reçurent la Torah. L'élection implique responsabilité."})

  // 463. nwa (نوا) — intention, noyau
  r = await ins('nwa', [
    {sense:'intention',concept:'Intention/But',description:"Ce que l'on vise dans son cœur en agissant — l'intention (niyya) est intérieure et précède l'acte. C'est le moteur caché de l'action. Les actes ne valent que par les intentions. L'intention dirige l'acte vers son but et lui donne sa valeur morale."},
    {sense:'but',concept:'Intention/But',description:''},
    {sense:'noyau',concept:'Graine/Centre',description:"La partie centrale et dure du fruit — le noyau (nawâ) contient la semence de la vie nouvelle. Celui qui fend le grain et le noyau fait sortir le vivant du mort."},
  ])
  log(r,'nwa',{'Intention/But':"Ce qu'on vise dans le cœur. Les actes valent par les intentions.",'Graine/Centre':"Partie centrale du fruit. Contient la semence de vie."})

  // 464. aala (لأل) — famille, gens de
  r = await ins('aala', [
    {sense:'famille',concept:'Parenté/Entourage',description:"Les proches par le sang ou par l'appartenance — la famille (âl) désigne ceux qui entourent une personne et lui sont liés. La famille de Pharaon, la famille d'Imrân, la famille d'Abraham. L'appartenance à une famille engage des droits et des devoirs réciproques."},
    {sense:'gens de',concept:'Parenté/Entourage',description:''},
    {sense:'lignée',concept:'Parenté/Entourage',description:''},
  ])
  log(r,'aala',{'Parenté/Entourage':"Proches par sang ou appartenance. Famille de Pharaon, d'Abraham."})

  // 465. sqf (سقف) — toit, plafond
  r = await ins('sqf', [
    {sense:'toit',concept:'Couverture/Protection',description:"Ce qui couvre par-dessus un édifice — le toit (saqf) est permanent comme structure qui protège de ce qui vient d'en haut. Le ciel est le toit élevé, sans fissures, au-dessus de nous. Le toit abrite et définit l'espace habitable. Une maison sans toit est exposée aux éléments."},
    {sense:'plafond',concept:'Couverture/Protection',description:''},
    {sense:'ciel',concept:'Couverture/Protection',description:''},
  ])
  log(r,'sqf',{'Couverture/Protection':"Couvre et protège par-dessus. Le ciel est le toit élevé."})

  console.log('\n=== Batch 48 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
