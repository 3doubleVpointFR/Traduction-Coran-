const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 21, total = 2297

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
  // ── xde ──
  let r = await ins('xde', [
    {sense:'tromper',concept:'Tromperie/Ruse',description:"Acte extérieur de présenter une fausse réalité pour induire l'autre en erreur. La tromperie sort de celui qui trompe et atteint celui qui est trompé. C'est un acte directionnel et volontaire."},
    {sense:'duper',concept:'Tromperie/Ruse',description:"Acte extérieur de présenter une fausse réalité."},
    {sense:'ruser',concept:'Tromperie/Ruse',description:"Acte extérieur de présenter une fausse réalité."},
    {sense:'feindre',concept:'Tromperie/Ruse',description:"Acte extérieur de présenter une fausse réalité."},
    {sense:'se croire malin',concept:'Tromperie/Ruse',description:"Acte extérieur de présenter une fausse réalité."},
    {sense:'corruption cachée',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] xde — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── nfs ──
  r = await ins('nfs', [
    {sense:'âme',concept:'Âme/Être',description:"Réalité intérieure de l'être vivant, ce qui fait qu'il est lui-même. L'âme est le siège de la volonté, des désirs et de la conscience. Elle est intérieure et permanente — elle définit l'identité de la personne."},
    {sense:'soi-même',concept:'Âme/Être',description:"Réalité intérieure de l'être vivant."},
    {sense:'personne',concept:'Âme/Être',description:"Réalité intérieure de l'être vivant."},
    {sense:'esprit',concept:'Âme/Être',description:"Réalité intérieure de l'être vivant."},
    {sense:'désir',concept:'Âme/Être',description:"Réalité intérieure de l'être vivant."},
    {sense:'souffle',concept:'Souffle/Vie',description:"Mouvement physique de l'air qui entre et sort du corps. Le souffle est extérieur, visible et vital — sans lui, pas de vie. C'est un mouvement permanent tant que la vie dure."},
    {sense:'respirer',concept:'Souffle/Vie',description:"Mouvement physique de l'air."},
    {sense:'soulagement',concept:'Souffle/Vie',description:"Mouvement physique de l'air."},
    {sense:'sang',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
    {sense:'oeil mauvais',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
    {sense:'quantité',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] nfs — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── mrd ──
  r = await ins('mrd', [
    {sense:'être malade',concept:'Maladie/Faiblesse',description:"État intérieur de dysfonctionnement du corps ou de l'esprit. La maladie affaiblit celui qui la subit — c'est un état qui reste chez la personne. Elle peut être temporaire ou permanente."},
    {sense:'maladie',concept:'Maladie/Faiblesse',description:"État intérieur de dysfonctionnement."},
    {sense:'tomber malade',concept:'Maladie/Faiblesse',description:"État intérieur de dysfonctionnement."},
    {sense:'rendre malade',concept:'Maladie/Faiblesse',description:"État intérieur de dysfonctionnement."},
    {sense:'malade',concept:'Maladie/Faiblesse',description:"État intérieur de dysfonctionnement."},
    {sense:'doute dans le coeur',concept:'Maladie/Faiblesse',description:"État intérieur de dysfonctionnement. Extension métaphorique : la maladie du coeur est le doute ou l'hypocrisie."},
    {sense:'défaut',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] mrd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── zyd ──
  r = await ins('zyd', [
    {sense:'augmenter',concept:'Augmentation/Surplus',description:"Acte ou état d'ajout qui fait croître la quantité ou la qualité. L'augmentation est un mouvement vers le plus — elle peut être extérieure (ajouter des biens) ou intérieure (croître en qualité). C'est un processus graduel."},
    {sense:'ajouter',concept:'Augmentation/Surplus',description:"Acte ou état d'ajout."},
    {sense:'croître',concept:'Augmentation/Surplus',description:"Acte ou état d'ajout."},
    {sense:'surplus',concept:'Augmentation/Surplus',description:"Acte ou état d'ajout."},
    {sense:'davantage',concept:'Augmentation/Surplus',description:"Acte ou état d'ajout."},
    {sense:'excéder',concept:'Augmentation/Surplus',description:"Acte ou état d'ajout."},
    {sense:'surpasser',concept:'Augmentation/Surplus',description:"Acte ou état d'ajout."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] zyd — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── alm ──
  r = await ins('alm', [
    {sense:'douleur',concept:'Douleur/Souffrance',description:"État intérieur de souffrance physique ou morale. La douleur reste chez celui qui la ressent — c'est un état qui ne sort pas vers l'extérieur par lui-même. Elle peut être ponctuelle ou permanente."},
    {sense:'souffrir',concept:'Douleur/Souffrance',description:"État intérieur de souffrance."},
    {sense:'faire mal',concept:'Douleur/Souffrance',description:"État intérieur de souffrance."},
    {sense:'châtiment douloureux',concept:'Douleur/Souffrance',description:"État intérieur de souffrance. Extension : le châtiment est l'acte qui cause la douleur."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] alm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── k (kdb/mensonge?) ──
  r = await ins('k*b', [
    {sense:'mentir',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité. Le mensonge sort de celui qui ment et atteint celui qui l'écoute. C'est un acte directionnel et volontaire qui crée une fausse réalité."},
    {sense:'mensonge',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité."},
    {sense:'démentir',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité."},
    {sense:'nier la vérité',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité."},
    {sense:'accuser de mensonge',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité."},
    {sense:'menteur',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité."},
    {sense:'illusion',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] k*b — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── n*r (avertir) ──
  r = await ins('n*r', [
    {sense:'avertir',concept:'Avertissement/Mise en garde',description:"Acte extérieur d'informer quelqu'un d'un danger pour qu'il l'évite. L'avertissement sort de celui qui avertit et atteint celui qui est averti. C'est un acte directionnel, rationnel et bienveillant."},
    {sense:'prévenir',concept:'Avertissement/Mise en garde',description:"Acte extérieur d'informer d'un danger."},
    {sense:'mettre en garde',concept:'Avertissement/Mise en garde',description:"Acte extérieur d'informer d'un danger."},
    {sense:'avertisseur',concept:'Avertissement/Mise en garde',description:"Acte extérieur d'informer d'un danger."},
    {sense:'voeu',concept:'Voeu/Engagement',description:"Acte intérieur de s'engager à faire quelque chose. Le voeu est une promesse faite à soi-même ou à Dieu. C'est un engagement permanent une fois pris."},
    {sense:'promettre',concept:'Voeu/Engagement',description:"Acte intérieur de s'engager."},
    {sense:'consacrer',concept:'Voeu/Engagement',description:"Acte intérieur de s'engager."},
    {sense:'crainte',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] n*r — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── Hqq (vérité) ──
  r = await ins('Hqq', [
    {sense:'être vrai',concept:'Vérité/Réalité',description:"État objectif de ce qui correspond à la réalité. La vérité est extérieure et permanente — elle existe indépendamment de celui qui la reconnaît ou la nie. Elle est le contraire du mensonge et de l'illusion."},
    {sense:'vérité',concept:'Vérité/Réalité',description:"État objectif de ce qui correspond à la réalité."},
    {sense:'réalité',concept:'Vérité/Réalité',description:"État objectif de ce qui correspond à la réalité."},
    {sense:'droit',concept:'Vérité/Réalité',description:"État objectif de ce qui correspond à la réalité. Extension : le droit est ce qui est juste et vrai."},
    {sense:'devoir',concept:'Obligation/Nécessité',description:"Acte qui s'impose par la nature des choses. Le devoir est une obligation rationnelle qui atteint celui qui doit agir. C'est permanent et contraignant."},
    {sense:'mériter',concept:'Obligation/Nécessité',description:"Acte qui s'impose par la nature des choses."},
    {sense:'être obligatoire',concept:'Obligation/Nécessité',description:"Acte qui s'impose par la nature des choses."},
    {sense:'se réaliser',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
    {sense:'vérifier',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] Hqq — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── Ern (tourner) ──
  r = await ins('Ern', [
    {sense:'tourner',concept:'Retour/Répétition',description:"Mouvement circulaire qui ramène au point de départ. Le retour est un mouvement extérieur et visible — on revient là d'où on est parti. C'est un mouvement qui peut être ponctuel ou cyclique."},
    {sense:'revenir',concept:'Retour/Répétition',description:"Mouvement circulaire qui ramène au point de départ."},
    {sense:'répéter',concept:'Retour/Répétition',description:"Mouvement circulaire qui ramène au point de départ."},
    {sense:'fois',concept:'Retour/Répétition',description:"Mouvement circulaire qui ramène au point de départ."},
    {sense:'deux',concept:'Dualité/Paire',description:"Nombre qui exprime la paire. La dualité est un état objectif — deux choses existent côte à côte."},
    {sense:'deuxième',concept:'Dualité/Paire',description:"Nombre qui exprime la paire."},
    {sense:'exception',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
    {sense:'plier',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
    {sense:'louer',concept:'Divers',description:"Sens isolés sans champ sémantique cohérent."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] Ern — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── $ry (acheter) ──
  r = await ins('$ry', [
    {sense:'acheter',concept:'Échange/Commerce',description:"Acte extérieur de donner quelque chose en échange d'autre chose. L'échange est directionnel et réciproque — les deux parties donnent et reçoivent. C'est un acte ponctuel qui crée un transfert de propriété."},
    {sense:'vendre',concept:'Échange/Commerce',description:"Acte extérieur de donner en échange."},
    {sense:'échanger',concept:'Échange/Commerce',description:"Acte extérieur de donner en échange."},
    {sense:'prix',concept:'Échange/Commerce',description:"Acte extérieur de donner en échange."},
    {sense:'préférer',concept:'Échange/Commerce',description:"Acte extérieur de donner en échange. Extension : préférer c'est choisir une chose en échange d'une autre."},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] $ry — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 10 racines faites — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
