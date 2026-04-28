const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 79, total = 2297

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('  ERREUR ' + key + ': ' + error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}

async function run() {
  let r

  r = await ins('ḥrm', [
    {sense:'interdire',concept:'Interdit/Sacré',description:"Acte extérieur de rendre inaccessible. L'interdit crée une limite entre ce qui est permis et ce qui ne l'est pas. C'est un jugement rationnel permanent."},
    {sense:'sacré',concept:'Interdit/Sacré',description:"Ce qui est mis à part et protégé."},
    {sense:'illicite',concept:'Interdit/Sacré',description:"Ce qui est défendu."},
    {sense:'privé de',concept:'Interdit/Sacré',description:"État de ne pas avoir accès."},
    {sense:'épouse',concept:'Divers',description:"Sens isolés."},
    {sense:'respect',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ḥrm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ḥsb', [
    {sense:'compter',concept:'Calcul/Estimation',description:"Acte rationnel extérieur de mesurer et évaluer. Le calcul est objectif, mesurable et dirigé vers un résultat précis."},
    {sense:'penser',concept:'Calcul/Estimation',description:"Acte d'estimer, de supposer."},
    {sense:'suffire',concept:'Suffisance',description:"État de combler le besoin. Ce qui suffit n'a pas besoin d'ajout."},
    {sense:'compte',concept:'Calcul/Estimation',description:"Le résultat du calcul."},
    {sense:'noble',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ḥsb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ḥyy', [
    {sense:'vivre',concept:'Vie/Existence',description:"État fondamental d'être en vie. La vie est un état permanent qui se manifeste extérieurement par le mouvement, la croissance et la conscience."},
    {sense:'vie',concept:'Vie/Existence',description:"État d'être vivant."},
    {sense:'vivant',concept:'Vie/Existence',description:"Celui qui est en vie."},
    {sense:'saluer',concept:'Salutation',description:"Acte extérieur de souhaiter la vie et le bien à quelqu'un. La salutation sort de celui qui salue et atteint celui qui est salué."},
    {sense:'avoir honte',concept:'Divers',description:"Sens isolés. État intérieur de gêne."},
    {sense:'serpent',concept:'Divers',description:"Sens isolés."},
    {sense:'pluie',concept:'Divers',description:"Sens isolés. Ce qui donne la vie à la terre."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ḥyy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('thmr', [
    {sense:'fruit',concept:'Fruit/Produit',description:"Résultat concret et extérieur d'un processus. Le fruit est ce qui sort de l'arbre — il est visible, tangible et destiné à être consommé ou utilisé."},
    {sense:'récolte',concept:'Fruit/Produit',description:"Ce qui est produit."},
    {sense:'richesse',concept:'Fruit/Produit',description:"Extension : le produit de l'effort."},
    {sense:'augmenter',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] thmr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('šhr', [
    {sense:'mois',concept:'Temps/Mois',description:"Période de temps mesurée par le cycle lunaire. Le mois est une unité temporelle extérieure, permanente et cyclique."},
    {sense:'lune',concept:'Temps/Mois',description:"Astre qui marque les mois."},
    {sense:'rendre célèbre',concept:'Notoriété',description:"Acte extérieur de faire connaître. La célébrité sort de la personne et atteint les autres."},
    {sense:'célèbre',concept:'Notoriété',description:"Celui qui est connu."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] šhr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ḥfl', [
    {sense:'jurer',concept:'Serment',description:"Acte extérieur de prendre Dieu à témoin. Le serment sort de celui qui jure et engage sa responsabilité. C'est directionnel et permanent."},
    {sense:'serment',concept:'Serment',description:"Engagement solennel."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ḥfl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('bnw', [
    {sense:'construire',concept:'Construction/Édification',description:"Acte extérieur de bâtir et d'assembler pour créer quelque chose de nouveau. La construction transforme les matériaux en structure. C'est directionnel et permanent."},
    {sense:'bâtir',concept:'Construction/Édification',description:"Élever une structure."},
    {sense:'édifice',concept:'Construction/Édification',description:"Le résultat de la construction."},
    {sense:'fils',concept:'Filiation',description:"Descendant direct. Le fils est lié au père par un lien biologique permanent."},
    {sense:'enfant',concept:'Filiation',description:"Descendant."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] bnw — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('smw', [
    {sense:'ciel',concept:'Ciel/Hauteur',description:"Ce qui est au-dessus de la terre. Le ciel est extérieur, visible et permanent — il couvre tout ce qui est en dessous."},
    {sense:'hauteur',concept:'Ciel/Hauteur',description:"Position spatiale élevée."},
    {sense:'pluie',concept:'Ciel/Hauteur',description:"Ce qui descend du ciel."},
    {sense:'toit',concept:'Ciel/Hauteur',description:"Ce qui couvre au-dessus."},
    {sense:'nom',concept:'Nom/Identification',description:"Signe qui identifie et distingue. Le nom est extérieur et permanent — il permet de communiquer et de désigner."},
    {sense:'nommer',concept:'Nom/Identification',description:"Acte de donner un nom."},
    {sense:'renommée',concept:'Nom/Identification',description:"Propagation du nom."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] smw — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('mwe', [
    {sense:'eau',concept:'Eau/Liquide',description:"Substance liquide fondamentale pour la vie. L'eau est extérieure, visible et essentielle — elle nourrit, purifie et donne la vie."},
    {sense:'liquide',concept:'Eau/Liquide',description:"Ce qui coule."},
    {sense:'sperme',concept:'Eau/Liquide',description:"Liquide de reproduction."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] mwe — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('xlq', [
    {sense:'créer',concept:'Création/Fabrication',description:"Acte extérieur de faire exister ce qui n'existait pas. La création sort du créateur et produit une réalité nouvelle. C'est directionnel et ponctuel avec un résultat permanent."},
    {sense:'création',concept:'Création/Fabrication',description:"L'acte de créer ou son résultat."},
    {sense:'créature',concept:'Création/Fabrication',description:"Ce qui a été créé."},
    {sense:'nature',concept:'Création/Fabrication',description:"La constitution innée d'un être."},
    {sense:'mesurer',concept:'Divers',description:"Sens isolés."},
    {sense:'lisse',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] xlq — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 10 racines — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
