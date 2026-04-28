const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 368, total = 2321

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

  // 369. nkd (نكد) — méconnaître, nier
  r = await ins('nkd', [
    {sense:'méconnaître',concept:'Méconnaissance/Reniement',description:"Refuser de reconnaître ce qui est vrai ou ce qu'on a connu — la méconnaissance (inkâr) est un acte intérieur de refus qui se manifeste extérieurement. C'est directionnel vers ce qu'on refuse d'admettre. Méconnaître les bienfaits de Dieu c'est les ignorer ou les attribuer à autre que Lui. Le munkir est celui qui nie la vérité évidente."},
    {sense:'nier',concept:'Méconnaissance/Reniement',description:''},
    {sense:'désavouer',concept:'Méconnaissance/Reniement',description:''},
    {sense:'blâmable',concept:'Réprobation',description:"Ce qui mérite d'être condamné — le blâmable (munkar) est un jugement de valeur sur ce qui est contraire au bien reconnu. Commander le bien et interdire le blâmable est un devoir."},
  ])
  log(r,'nkd',{'Méconnaissance/Reniement':"Refuser de reconnaître le vrai. Directionnel vers ce qu'on refuse. Nier les bienfaits.",'Réprobation':"Ce qui mérite condamnation. Contraire au bien reconnu."})

  // 370. way (وأي) — malheur
  r = await ins('way', [
    {sense:'malheur',concept:'Lamentation/Malheur',description:"Expression de détresse ou menace de châtiment — le malheur (wayl) est une exclamation qui peut être plainte ou avertissement. C'est directionnel vers celui qui est visé. 'Wayl' annonce la destruction qui attend les négateurs. C'est aussi la vallée de l'enfer réservée aux hypocrites et aux menteurs."},
    {sense:'hélas',concept:'Lamentation/Malheur',description:''},
    {sense:'détresse',concept:'Lamentation/Malheur',description:''},
  ])
  log(r,'way',{'Lamentation/Malheur':"Expression de détresse ou menace. Annonce la destruction. Vallée de l'enfer."})

  // 371. mdyn (مدين) — Madian
  r = await ins('mdyn', [
    {sense:'Madian',concept:'Lieu prophétique',description:"Cité où fut envoyé le prophète Shu'ayb — Madian est permanente comme lieu de mémoire prophétique. C'est là que Moïse s'est réfugié et a rencontré les filles de Shu'ayb. Le peuple de Madian pratiquait la fraude dans la mesure et fut détruit pour sa corruption commerciale et morale."},
    {sense:'ville',concept:'Lieu prophétique',description:''},
    {sense:'redevable',concept:'Dette/Obligation',description:"Celui qui doit quelque chose — être redevable (madîn) c'est avoir une dette envers quelqu'un. C'est relationnel et directionnel vers le créancier."},
  ])
  log(r,'mdyn',{'Lieu prophétique':"Cité de Shu'ayb. Refuge de Moïse. Peuple détruit pour fraude.",'Dette/Obligation':"Avoir une dette. Relationnel vers le créancier."})

  // 372. myzan (ميزان) — balance
  r = await ins('myzan', [
    {sense:'balance',concept:'Équilibre/Justice',description:"Instrument qui mesure le poids et établit l'équilibre — la balance (mîzân) est permanente comme symbole de justice. Elle mesure avec exactitude, sans favoriser ni léser. Le Ciel est élevé et Il a établi la balance pour que vous ne fraudiez pas dans la pesée. La balance du Jour du Jugement pèsera les actes : ceux dont la balance sera lourde réussiront."},
    {sense:'équilibre',concept:'Équilibre/Justice',description:''},
    {sense:'mesure',concept:'Équilibre/Justice',description:''},
    {sense:'justice',concept:'Équilibre/Justice',description:''},
  ])
  log(r,'myzan',{'Équilibre/Justice':"Mesure avec exactitude. Symbole de justice. Au Jugement, les actes seront pesés."})

  // 373. sheb (شعب) — peuple, se disperser
  r = await ins('sheb', [
    {sense:'peuple',concept:'Communauté/Nation',description:"Groupe humain partageant une origine commune — le peuple (sha'b) est permanent comme entité collective distincte des autres. Dieu a fait des peuples et des tribus pour qu'ils se connaissent. Le plus noble est le plus pieux. Les peuples sont divers mais l'humanité est une."},
    {sense:'nation',concept:'Communauté/Nation',description:''},
    {sense:'tribu',concept:'Communauté/Nation',description:''},
    {sense:'se disperser',concept:'Dispersion/Ramification',description:"Se séparer en différentes directions — la dispersion est directionnelle vers l'extérieur. Les chemins se ramifient comme les branches d'un arbre."},
    {sense:'ramification',concept:'Dispersion/Ramification',description:''},
  ])
  log(r,'sheb',{'Communauté/Nation':"Groupe partageant une origine. Pour se connaître. Le plus noble est le plus pieux.",'Dispersion/Ramification':"Se séparer en directions. Les chemins ramifiés."})

  // 374. edn (عدن) — Éden, résider
  r = await ins('edn', [
    {sense:'Éden',concept:'Paradis/Séjour éternel',description:"Jardin de félicité promis aux croyants — le jardin d'Éden ('Adn) est permanent comme séjour éternel des bienheureux. C'est le lieu du repos définitif après l'épreuve terrestre. Les jardins d'Éden sous lesquels coulent les rivières sont la récompense de ceux qui ont cru et fait le bien. Éden signifie le séjour fixe, là où l'on demeure pour toujours."},
    {sense:'jardin',concept:'Paradis/Séjour éternel',description:''},
    {sense:'résider',concept:'Établissement/Fixation',description:"Demeurer de façon stable en un lieu — résider c'est s'établir de façon permanente. Le ma'din (mine) est le lieu où le métal réside dans la terre."},
    {sense:'mine',concept:'Établissement/Fixation',description:''},
  ])
  log(r,'edn',{'Paradis/Séjour éternel':"Jardin de félicité éternelle. Séjour des bienheureux. Repos définitif.",'Établissement/Fixation':"Demeurer de façon stable. Lieu de résidence permanente."})

  // 375. dhh (ذهب) — or, aller
  r = await ins('dhh', [
    {sense:'or',concept:'Métal précieux',description:"Métal jaune brillant de grande valeur — l'or (dhahab) est permanent comme substance précieuse qui ne s'oxyde pas. C'est le symbole de la richesse et de la valeur. L'or et l'argent thésaurisés sans en donner en aumône seront brûlants au Jour du Jugement. L'or est aussi la parure du Paradis."},
    {sense:'métal précieux',concept:'Métal précieux',description:''},
    {sense:'aller',concept:'Mouvement/Départ',description:"Se déplacer d'un lieu vers un autre — aller (dhahaba) est directionnel vers la destination. C'est ponctuel dans chaque déplacement. Partir c'est quitter un état pour un autre. Ce qui s'en va peut ne pas revenir."},
    {sense:'partir',concept:'Mouvement/Départ',description:''},
    {sense:'disparaître',concept:'Mouvement/Départ',description:''},
  ])
  log(r,'dhh',{'Métal précieux':"Substance précieuse qui ne s'oxyde pas. Symbole de richesse. Parure du Paradis.",'Mouvement/Départ':"Se déplacer vers une destination. Partir, quitter un état."})

  // 376. bky (بكى) — pleurer
  r = await ins('bky', [
    {sense:'pleurer',concept:'Pleur/Lamentation',description:"Verser des larmes sous l'effet de l'émotion — pleurer (bakâ) est une expression extérieure d'un état intérieur de tristesse, de douleur ou parfois de joie intense. C'est ponctuel dans l'acte mais peut être prolongé. Les pleurs peuvent être de repentir devant Dieu, de crainte de Sa majesté, ou de deuil. Ils pleurent et cela augmente leur humilité."},
    {sense:'larmes',concept:'Pleur/Lamentation',description:''},
    {sense:'se lamenter',concept:'Pleur/Lamentation',description:''},
  ])
  log(r,'bky',{'Pleur/Lamentation':"Verser des larmes. Expression de l'état intérieur. Pleurs de repentir ou de crainte."})

  // 377. lww (لوو) — si seulement
  r = await ins('lww', [
    {sense:'si seulement',concept:'Souhait/Regret',description:"Expression d'un désir irréalisable ou d'un regret — 'law' introduit une condition contraire à la réalité. C'est intérieur comme mouvement de l'âme qui désire ce qui n'est pas. Si seulement nous avions obéi, si seulement nous pouvions revenir. Le regret exprimé par 'law' est souvent tardif et vain."},
    {sense:'si',concept:'Souhait/Regret',description:''},
    {sense:'même si',concept:'Concession',description:"Introduit une concession hypothétique — même si quelque chose était, le résultat serait le même. Marque la futilité de la condition."},
  ])
  log(r,'lww',{'Souhait/Regret':"Désir irréalisable. Intérieur. Regret souvent tardif et vain.",'Concession':"Hypothèse qui ne change rien au résultat."})

  // 378. erb (عرب) — arabe
  r = await ins('erb', [
    {sense:'arabe',concept:'Langue/Identité',description:"Relatif à la langue arabe ou au peuple qui la parle — l'arabe ('arabî) est permanent comme identité linguistique et culturelle. Le Coran est descendu en langue arabe claire pour être compris. L'arabe est la langue de la révélation finale, choisie pour sa richesse et sa clarté. Les Arabes sont le peuple parmi lequel le Prophète a été envoyé."},
    {sense:'langue arabe',concept:'Langue/Identité',description:''},
    {sense:'bédouin',concept:'Nomadisme',description:"Habitant du désert qui vit sous la tente — les bédouins (a'râb) sont les Arabes nomades. Certains sont sincères, d'autres sont plus endurcis dans la mécréance."},
    {sense:'exprimer',concept:'Expression/Clarté',description:"Rendre clair par la parole — l'expression ('i'râb) est l'art de parler clairement. Directionnel vers l'auditeur."},
  ])
  log(r,'erb',{'Langue/Identité':"Langue de la révélation. Choisie pour sa clarté. Identité linguistique.",'Nomadisme':"Bédouins du désert. Certains sincères, d'autres endurcis.",'Expression/Clarté':"Rendre clair par la parole."})

  console.log('\n=== Batch 39 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
