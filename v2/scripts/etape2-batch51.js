const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 482, total = 2321

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

  // Skip ma'
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])

  // 484. nm m (نمم) — médire, calomnier
  r = await ins('nm m', [
    {sense:'médire',concept:'Calomnie/Diffamation',description:"Rapporter des paroles pour semer la discorde — la médisance (namîma) est directionnelle vers ceux qu'on cherche à diviser. C'est un acte intérieur de malveillance qui se manifeste par la parole. Le colporteur de ragots (nammâm) répand le mal entre les gens. Malheur à tout calomniateur médisant !"},
    {sense:'calomnier',concept:'Calomnie/Diffamation',description:''},
    {sense:'colporter',concept:'Calomnie/Diffamation',description:''},
  ])
  log(r,'nm m',{'Calomnie/Diffamation':"Rapporter pour diviser. Acte de malveillance. Malheur au calomniateur !"})

  // 485. xfa (خفى) — cacher
  r = await ins('xfa', [
    {sense:'cacher',concept:'Dissimulation/Secret',description:"Soustraire à la connaissance ou à la vue — cacher (khafiya/akhfâ) est directionnel vers l'intérieur ou vers le non-visible. Ce qui est caché peut être connu de Dieu seul. Il connaît le secret et le plus caché. Ce que vous dissimulez en vous-mêmes, Dieu le fait apparaître. Rien ne Lui échappe."},
    {sense:'dissimuler',concept:'Dissimulation/Secret',description:''},
    {sense:'secret',concept:'Dissimulation/Secret',description:''},
    {sense:'invisible',concept:'Dissimulation/Secret',description:''},
  ])
  log(r,'xfa',{'Dissimulation/Secret':"Soustraire à la vue. Dieu connaît le secret et le plus caché."})

  // 486. wzr (وزر) — fardeau, péché
  r = await ins('wzr', [
    {sense:'fardeau',concept:'Charge/Péché',description:"Ce qu'on porte et qui pèse — le fardeau (wizr) est permanent tant qu'on le porte. C'est le poids du péché sur les épaules du pécheur. Aucune âme ne portera le fardeau d'une autre. Chacun porte le poids de ses propres actes. Le vizir (wazîr) est celui qui aide à porter le fardeau du gouvernement."},
    {sense:'péché',concept:'Charge/Péché',description:''},
    {sense:'poids',concept:'Charge/Péché',description:''},
    {sense:'ministre',concept:'Aide/Soutien',description:"Celui qui aide le souverain — le vizir porte une partie de la charge du pouvoir. Aaron fut le vizir de Moïse, son soutien et son porte-parole."},
  ])
  log(r,'wzr',{'Charge/Péché':"Ce qui pèse. Le poids du péché. Chacun porte son fardeau.",'Aide/Soutien':"Le vizir aide le souverain. Aaron vizir de Moïse."})

  // 487. msy (مسي) — marcher, soir
  r = await ins('msy', [
    {sense:'marcher',concept:'Mouvement/Temps',description:"Se déplacer à pied — marcher (mashâ/yamsî) est un mouvement directionnel vers où l'on va. C'est l'acte de base de la locomotion humaine. Certains marchent sur leur ventre, d'autres sur deux pieds, d'autres sur quatre. La façon de marcher révèle l'être."},
    {sense:'aller',concept:'Mouvement/Temps',description:''},
    {sense:'soir',concept:'Mouvement/Temps',description:"Le moment où le jour décline — le soir (masâ') est le temps qui suit l'après-midi. Glorifiez Dieu le soir et le matin !"},
    {sense:'bétail',concept:'Troupeau',description:"Les animaux domestiques qui marchent — les troupeaux (mâshiya) sont les bêtes qu'on fait paître."},
  ])
  log(r,'msy',{'Mouvement/Temps':"Se déplacer à pied. Certains sur deux, d'autres sur quatre. Le soir quand le jour décline.",'Troupeau':"Animaux qui marchent. Bêtes qu'on fait paître."})

  // 488. ns' (نسء) — femmes, retarder
  r = await ins("ns'", [
    {sense:'femmes',concept:'Féminin/Épouses',description:"Les êtres humains de sexe féminin — les femmes (nisâ') sont permanentes comme moitié de l'humanité. Elles sont épouses, mères, filles. Le Coran leur consacre une sourate et définit leurs droits."},
    {sense:'épouses',concept:'Féminin/Épouses',description:''},
    {sense:'retarder',concept:'Report',description:"Repousser à plus tard — le report (nasî') des mois sacrés était une manipulation condamnée par le Coran."},
  ])
  log(r,"ns'",{'Féminin/Épouses':"Moitié de l'humanité. Droits définis par le Coran.",'Report':"Repousser. Le nasî' des mois condamné."})

  // 489. mhm (مهم) — ce qui, quoi que
  r = await ins('mhm', [
    {sense:'ce qui',concept:'Relatif/Conjonction',description:"Pronom relatif désignant une chose indéterminée — mahmâ introduit une concession : quoi que tu fasses. C'est directionnel vers l'hypothèse qu'on envisage. Quoi que tu apportes comme signe pour nous ensorceler..."},
    {sense:'quoi que',concept:'Relatif/Conjonction',description:''},
    {sense:'quelque chose que',concept:'Relatif/Conjonction',description:''},
  ])
  log(r,'mhm',{'Relatif/Conjonction':"Introduit une concession. Quoi que tu apportes comme signe."})

  // 490. dfd (ضفد) — grenouilles
  r = await ins('dfd', [
    {sense:'grenouilles',concept:'Fléau/Animal',description:"Batraciens qui furent envoyés comme fléau sur l'Égypte — les grenouilles (dafâdi') sont un châtiment parmi les signes envoyés à Pharaon. Leur invasion massive montre la puissance de Dieu sur toute la création. Ce qui est petit peut devenir fléau quand Dieu le décide."},
    {sense:'batraciens',concept:'Fléau/Animal',description:''},
  ])
  log(r,'dfd',{'Fléau/Animal':"Fléau envoyé sur l'Égypte. Le petit devient fléau quand Dieu décide."})

  // 491. qmr (قمر) — lune
  r = await ins('qmr', [
    {sense:'lune',concept:'Astre/Lumière',description:"L'astre qui éclaire la nuit — la lune (qamar) est permanente comme corps céleste qui reflète la lumière du soleil. Elle sert à compter les mois et à guider les voyageurs nocturnes. La lune et le soleil se prosternent devant Dieu. L'heure approchera et la lune se fendra. La lune est un signe parmi les signes."},
    {sense:'clair de lune',concept:'Astre/Lumière',description:''},
    {sense:'mois',concept:'Temps',description:"Le cycle lunaire qui mesure le temps — le mois est basé sur le cycle de la lune. Le calendrier islamique est lunaire."},
  ])
  log(r,'qmr',{'Astre/Lumière':"Éclaire la nuit. Se prosterne devant Dieu. La lune se fendra.",'Temps':"Cycle qui mesure. Calendrier lunaire."})

  // 492. jrf (جرف) — emporter
  r = await ins('jrf', [
    {sense:'emporter',concept:'Érosion/Destruction',description:"Arracher et entraîner par la force — emporter (jarafa) est directionnel vers l'extérieur, le flot qui arrache. C'est ponctuel mais dévastateur. La berge qui s'effondre et est emportée par les eaux. Ce qui est bâti sur du sable est emporté, ce qui est bâti sur la crainte de Dieu reste ferme."},
    {sense:'arracher',concept:'Érosion/Destruction',description:''},
    {sense:'éroder',concept:'Érosion/Destruction',description:''},
  ])
  log(r,'jrf',{'Érosion/Destruction':"Arracher par la force. Ce qui est bâti sur du sable est emporté."})

  console.log('\n=== Batch 51 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
