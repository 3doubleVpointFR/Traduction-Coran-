const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 40, total = 2297

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('  ' + key + ' non trouvé — skip'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('  ' + key + ' déjà fait — skip'); return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('  ERREUR ' + key + ': ' + error.message); return null }
  const concepts = [...new Set(senses.map(s => s.concept))]
  return {total: senses.length, concepts}
}

async function run() {
  let r

  r = await ins('ḏkr', [
    {sense:'se souvenir',concept:'Mémoire/Rappel',description:"Acte intérieur de ramener à la conscience ce qui était oublié. Le souvenir reste chez celui qui se souvient mais peut se manifester extérieurement par la mention."},
    {sense:'mentionner',concept:'Mémoire/Rappel',description:"Acte extérieur de dire le nom ou de rappeler."},
    {sense:'rappel',concept:'Mémoire/Rappel',description:"Ce qui ramène à la mémoire."},
    {sense:'invocation',concept:'Mémoire/Rappel',description:"Acte de mentionner Dieu."},
    {sense:'mâle',concept:'Masculinité',description:"Qualité biologique de l'être qui engendre. Le mâle est une réalité physique objective et permanente."},
    {sense:'masculin',concept:'Masculinité',description:"Qualité biologique."},
    {sense:'renommée',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ḏkr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ḥrm', [
    {sense:'interdire',concept:'Interdiction/Sacré',description:"Acte extérieur de rendre inaccessible. L'interdiction sort de celui qui interdit et atteint celui qui est interdit. C'est un acte directionnel et permanent qui crée une limite."},
    {sense:'sacré',concept:'Interdiction/Sacré',description:"Ce qui est mis hors d'atteinte."},
    {sense:'sanctuaire',concept:'Interdiction/Sacré',description:"Lieu rendu inaccessible."},
    {sense:'illicite',concept:'Interdiction/Sacré',description:"Ce qui est rendu interdit."},
    {sense:'priver',concept:'Interdiction/Sacré',description:"Acte de rendre inaccessible."},
    {sense:'respecter',concept:'Interdiction/Sacré',description:"Acte de reconnaître la limite."},
    {sense:'épouse',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ḥrm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ḥsb', [
    {sense:'compter',concept:'Calcul/Évaluation',description:"Acte rationnel de mesurer et d'évaluer. Le calcul est un acte intérieur qui aboutit à un jugement objectif. C'est permanent — le résultat du calcul ne change pas."},
    {sense:'estimer',concept:'Calcul/Évaluation',description:"Acte rationnel de mesurer."},
    {sense:'penser',concept:'Calcul/Évaluation',description:"Acte rationnel d'évaluer."},
    {sense:'croire',concept:'Calcul/Évaluation',description:"Acte d'évaluer comme vrai."},
    {sense:'compte',concept:'Calcul/Évaluation',description:"Résultat du calcul."},
    {sense:'suffire',concept:'Suffisance',description:"État de ce qui comble le besoin sans surplus ni manque. La suffisance est un état objectif et permanent."},
    {sense:'suffisant',concept:'Suffisance',description:"État de ce qui comble le besoin."},
    {sense:'noblesse',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ḥsb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('šrk', [
    {sense:'associer',concept:'Association/Partage',description:"Acte extérieur de joindre une chose à une autre pour en faire des partenaires. L'association sort de celui qui associe et crée un lien entre deux parties. C'est un acte directionnel et volontaire."},
    {sense:'partenaire',concept:'Association/Partage',description:"Celui qui est joint à un autre."},
    {sense:'partager',concept:'Association/Partage',description:"Acte de mettre en commun."},
    {sense:'idolâtrie',concept:'Association/Partage',description:"Extension : associer d'autres divinités à Dieu."},
    {sense:'piège',concept:'Divers',description:"Sens isolés."},
    {sense:'lacet',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] šrk — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ḥyy', [
    {sense:'vivre',concept:'Vie/Vivant',description:"État fondamental de l'être qui existe et agit. La vie est un état intérieur qui se manifeste extérieurement par le mouvement et l'action. C'est permanent tant que la vie dure."},
    {sense:'vie',concept:'Vie/Vivant',description:"État fondamental de l'être."},
    {sense:'vivant',concept:'Vie/Vivant',description:"Celui qui possède la vie."},
    {sense:'donner la vie',concept:'Vie/Vivant',description:"Acte de faire passer du non-être à l'être."},
    {sense:'saluer',concept:'Salutation/Pudeur',description:"Acte extérieur de reconnaître l'autre. La salutation sort de celui qui salue et atteint celui qui est salué."},
    {sense:'pudeur',concept:'Salutation/Pudeur',description:"État intérieur de retenue face à ce qui est indécent."},
    {sense:'serpent',concept:'Divers',description:"Sens isolés."},
    {sense:'tribu',concept:'Divers',description:"Sens isolés."},
    {sense:'pluie',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ḥyy — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('mwt', [
    {sense:'mourir',concept:'Mort/Cessation',description:"Acte de cesser de vivre. La mort est un événement ponctuel qui met fin à l'état de vie. C'est irréversible et objectif — la personne passe de l'état vivant à l'état mort."},
    {sense:'mort',concept:'Mort/Cessation',description:"État de celui qui a cessé de vivre."},
    {sense:'tuer',concept:'Mort/Cessation',description:"Acte de causer la mort."},
    {sense:'mortel',concept:'Mort/Cessation',description:"Celui qui est sujet à la mort."},
    {sense:'terre morte',concept:'Mort/Cessation',description:"Extension : terre sans végétation, sans vie."},
    {sense:'immobile',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] mwt — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('ṯmr', [
    {sense:'fruit',concept:'Fruit/Produit',description:"Résultat extérieur et visible d'un processus de croissance. Le fruit est ce qui sort de l'arbre — c'est directionnel (de l'intérieur vers l'extérieur) et ponctuel (il mûrit puis est cueilli)."},
    {sense:'récolte',concept:'Fruit/Produit',description:"Résultat de la croissance."},
    {sense:'richesse',concept:'Fruit/Produit',description:"Extension : le fruit du travail."},
    {sense:'produire',concept:'Fruit/Produit',description:"Acte de générer un fruit."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ṯmr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('jnn', [
    {sense:'cacher',concept:'Dissimulation/Couverture',description:"Acte extérieur de rendre invisible. La dissimulation sort de celui qui cache et atteint ce qui est caché. C'est un acte directionnel qui empêche la perception."},
    {sense:'couvrir',concept:'Dissimulation/Couverture',description:"Acte de rendre invisible."},
    {sense:'jardin',concept:'Jardin/Paradis',description:"Lieu couvert de végétation dense qui cache ce qui est à l'intérieur. Le jardin est un espace clos et protégé, permanent et visible."},
    {sense:'paradis',concept:'Jardin/Paradis',description:"Extension : le jardin éternel promis."},
    {sense:'djinn',concept:'Êtres cachés',description:"Créatures invisibles aux sens humains. Les djinns sont des êtres qui existent mais qui sont cachés — ils sont permanents mais imperceptibles."},
    {sense:'folie',concept:'Divers',description:"Sens isolés. Extension : l'esprit couvert, voilé."},
    {sense:'bouclier',concept:'Divers',description:"Sens isolés. Ce qui couvre et protège."},
    {sense:'embryon',concept:'Divers',description:"Sens isolés. Ce qui est caché dans le ventre."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] jnn — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('nhr', [
    {sense:'rivière',concept:'Eau/Cours d\'eau',description:"Masse d'eau qui coule de manière continue dans une direction. La rivière est extérieure, visible et permanente. Elle est directionnelle — elle coule d'un point à un autre."},
    {sense:'fleuve',concept:'Eau/Cours d\'eau',description:"Masse d'eau qui coule."},
    {sense:'couler',concept:'Eau/Cours d\'eau',description:"Mouvement de l'eau."},
    {sense:'abondance',concept:'Eau/Cours d\'eau',description:"Extension : l'eau abondante."},
    {sense:'jour',concept:'Clarté/Jour',description:"Période de lumière. Le jour est extérieur et cyclique — il revient de manière permanente."},
    {sense:'clarté',concept:'Clarté/Jour',description:"État de luminosité."},
    {sense:'interdire',concept:'Divers',description:"Sens isolés."},
    {sense:'creuser',concept:'Divers',description:"Sens isolés."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] nhr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  r = await ins('xlq', [
    {sense:'créer',concept:'Création/Production',description:"Acte extérieur de faire exister ce qui n'existait pas. La création sort du créateur et produit une réalité nouvelle. C'est un acte directionnel et fondamental — il transforme le néant en existence."},
    {sense:'création',concept:'Création/Production',description:"Acte de faire exister."},
    {sense:'créature',concept:'Création/Production',description:"Ce qui est créé."},
    {sense:'façonner',concept:'Création/Production',description:"Acte de donner forme."},
    {sense:'nature',concept:'Création/Production',description:"Extension : la disposition innée donnée à la création."},
    {sense:'caractère',concept:'Création/Production',description:"Extension : la nature morale créée."},
    {sense:'lisse',concept:'Divers',description:"Sens isolés."},
    {sense:'mensonge',concept:'Divers',description:"Sens isolés. Extension : créer de fausses paroles."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] xlq — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 10 racines faites — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
