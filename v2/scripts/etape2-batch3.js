const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 14, total = 2297

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
  // ── xtm ──
  let r = await ins('xtm', [
    {sense:'sceller',concept:'Sceau/Clôture',description:'Acte extérieur de fermer définitivement quelque chose pour empêcher l\'accès. Le sceau sort de celui qui scelle et atteint ce qui est scellé. C\'est un acte permanent et irréversible.'},
    {sense:'cacheter',concept:'Sceau/Clôture',description:'Acte extérieur de fermer définitivement.'},
    {sense:'conclure',concept:'Sceau/Clôture',description:'Acte extérieur de fermer définitivement.'},
    {sense:'atteindre la fin',concept:'Sceau/Clôture',description:'Acte extérieur de fermer définitivement.'},
    {sense:'sceau',concept:'Sceau/Clôture',description:'Acte extérieur de fermer définitivement.'},
    {sense:'dernier des prophètes',concept:'Sceau/Clôture',description:'Acte extérieur de fermer définitivement.'},
    {sense:'empreinte',concept:'Marque/Empreinte',description:'Trace laissée par un acte de scellement. La marque est extérieure, visible et permanente — elle témoigne d\'un acte passé.'},
    {sense:'marque',concept:'Marque/Empreinte',description:'Trace laissée par un acte de scellement.'},
    {sense:'bague-cachet',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] xtm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── qlb ──
  r = await ins('qlb', [
    {sense:'retourner',concept:'Retournement/Changement',description:'Acte extérieur de renverser quelque chose, de le mettre dans l\'autre sens. Le retournement est un mouvement qui transforme l\'état de la chose — ce qui était dessus passe dessous. C\'est ponctuel et visible.'},
    {sense:'renverser',concept:'Retournement/Changement',description:'Acte extérieur de renverser quelque chose.'},
    {sense:'transformer',concept:'Retournement/Changement',description:'Acte extérieur de renverser quelque chose.'},
    {sense:'changer d\'état',concept:'Retournement/Changement',description:'Acte extérieur de renverser quelque chose.'},
    {sense:'revenir',concept:'Retournement/Changement',description:'Acte extérieur de renverser quelque chose.'},
    {sense:'coeur',concept:'Coeur/Centre',description:'Organe central du corps et siège de la compréhension et de la volonté. Le coeur est intérieur mais c\'est le centre d\'où partent les décisions. C\'est permanent — le coeur est toujours là.'},
    {sense:'esprit',concept:'Coeur/Centre',description:'Siège de la compréhension et de la volonté.'},
    {sense:'intelligence',concept:'Coeur/Centre',description:'Siège de la compréhension et de la volonté.'},
    {sense:'milieu',concept:'Coeur/Centre',description:'Siège de la compréhension et de la volonté.'},
    {sense:'moule',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'bracelet',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] qlb — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── sme ──
  r = await ins('sme', [
    {sense:'entendre',concept:'Audition/Écoute',description:'Acte de percevoir par l\'oreille. L\'audition est un acte réceptif — le son vient de l\'extérieur et atteint celui qui entend. C\'est un acte directionnel de l\'extérieur vers l\'intérieur.'},
    {sense:'écouter',concept:'Audition/Écoute',description:'Acte de percevoir par l\'oreille.'},
    {sense:'ouïe',concept:'Audition/Écoute',description:'Acte de percevoir par l\'oreille.'},
    {sense:'obéir',concept:'Audition/Écoute',description:'Acte de percevoir par l\'oreille. L\'obéissance est l\'extension de l\'écoute : entendre puis agir en conséquence.'},
    {sense:'exaucer',concept:'Audition/Écoute',description:'Acte de percevoir par l\'oreille. L\'exaucement est l\'écoute suivie de l\'action.'},
    {sense:'réputation',concept:'Renommée/Bruit',description:'Ce qui est entendu par les gens à propos de quelqu\'un. La réputation sort de la personne et se propage vers l\'extérieur par le bruit et la parole.'},
    {sense:'bruit',concept:'Renommée/Bruit',description:'Ce qui est entendu par les gens.'},
    {sense:'faire entendre',concept:'Renommée/Bruit',description:'Ce qui est entendu par les gens.'},
    {sense:'oreille',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] sme — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── bsr ──
  r = await ins('bsr', [
    {sense:'voir',concept:'Vision/Perception',description:'Acte de percevoir par les yeux. La vision est un acte réceptif — la lumière vient de l\'extérieur et atteint celui qui voit. C\'est un acte directionnel de l\'extérieur vers l\'intérieur, permanent tant que l\'organe fonctionne.'},
    {sense:'regarder',concept:'Vision/Perception',description:'Acte de percevoir par les yeux.'},
    {sense:'vue',concept:'Vision/Perception',description:'Acte de percevoir par les yeux.'},
    {sense:'clairvoyance',concept:'Vision/Perception',description:'Acte de percevoir par les yeux. Extension vers la perception intellectuelle — voir avec l\'esprit.'},
    {sense:'comprendre',concept:'Vision/Perception',description:'Acte de percevoir par les yeux. Extension vers la compréhension.'},
    {sense:'preuve visible',concept:'Vision/Perception',description:'Acte de percevoir par les yeux.'},
    {sense:'miroir',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'peau',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] bsr — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── ezm ──
  r = await ins('ezm', [
    {sense:'être grand',concept:'Grandeur/Importance',description:'État de ce qui dépasse en taille, en rang ou en valeur. La grandeur est un état objectif et permanent — ce qui est grand est reconnu comme tel par tous. Elle peut être physique ou abstraite.'},
    {sense:'grandir',concept:'Grandeur/Importance',description:'État de ce qui dépasse en taille, en rang ou en valeur.'},
    {sense:'immense',concept:'Grandeur/Importance',description:'État de ce qui dépasse en taille, en rang ou en valeur.'},
    {sense:'magnifier',concept:'Grandeur/Importance',description:'État de ce qui dépasse en taille, en rang ou en valeur.'},
    {sense:'os',concept:'Structure/Ossature',description:'Élément physique dur et solide qui donne sa structure au corps. L\'os est intérieur, permanent et structurel — il soutient tout ce qui est autour.'},
    {sense:'squelette',concept:'Structure/Ossature',description:'Élément physique dur et solide.'},
    {sense:'châtiment terrible',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] ezm — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── nws ──
  r = await ins('nws', [
    {sense:'gens',concept:'Humanité/Personnes',description:'Ensemble des êtres humains considérés collectivement. Les gens sont une réalité extérieure, visible et permanente — ils forment le tissu social dans lequel on vit.'},
    {sense:'êtres humains',concept:'Humanité/Personnes',description:'Ensemble des êtres humains considérés collectivement.'},
    {sense:'peuple',concept:'Humanité/Personnes',description:'Ensemble des êtres humains considérés collectivement.'},
    {sense:'voir de loin',concept:'Perception/Visibilité',description:'Acte de percevoir à distance. La perception est un acte réceptif directionnel.'},
    {sense:'être visible',concept:'Perception/Visibilité',description:'Acte de percevoir à distance.'},
    {sense:'oublier',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'être agité',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] nws — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  // ── qwl ──
  r = await ins('qwl', [
    {sense:'dire',concept:'Parole/Énonciation',description:'Acte extérieur de produire des mots pour communiquer. La parole sort de celui qui parle et atteint celui qui écoute. C\'est un acte directionnel, ponctuel mais avec des effets permanents.'},
    {sense:'parler',concept:'Parole/Énonciation',description:'Acte extérieur de produire des mots pour communiquer.'},
    {sense:'parole',concept:'Parole/Énonciation',description:'Acte extérieur de produire des mots pour communiquer.'},
    {sense:'discours',concept:'Parole/Énonciation',description:'Acte extérieur de produire des mots pour communiquer.'},
    {sense:'affirmer',concept:'Parole/Énonciation',description:'Acte extérieur de produire des mots pour communiquer.'},
    {sense:'opinion',concept:'Pensée/Avis',description:'État intérieur de jugement sur quelque chose. L\'opinion est un jugement rationnel qui peut rester intérieur ou se manifester par la parole.'},
    {sense:'avis',concept:'Pensée/Avis',description:'État intérieur de jugement sur quelque chose.'},
    {sense:'doctrine',concept:'Pensée/Avis',description:'État intérieur de jugement sur quelque chose.'},
    {sense:'puissance',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
    {sense:'troupeau',concept:'Divers',description:'Sens isolés sans champ sémantique cohérent.'},
  ])
  if (r) { done++; console.log('[' + done + '/' + total + '] qwl — ' + r.total + ' sens → ' + r.concepts.length + ' concepts (' + r.concepts.join(', ') + ') — reste ' + (total-done)) }

  console.log('\n=== 7 racines faites — total ' + done + '/2297 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
