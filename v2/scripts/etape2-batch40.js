const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 378, total = 2321

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

  // 379. khfd (خفض) — abaisser
  r = await ins('khfd', [
    {sense:'abaisser',concept:'Abaissement/Humilité',description:"Mouvement de haut en bas, réduction de la hauteur ou du niveau — abaisser (khafd) est directionnel vers le bas. C'est ponctuel dans l'acte mais peut créer un état permanent d'humilité. Abaisser l'aile de l'humilité pour ses parents c'est se faire petit devant eux par respect. L'abaissement peut être physique ou moral."},
    {sense:'rabaisser',concept:'Abaissement/Humilité',description:''},
    {sense:'humilier',concept:'Abaissement/Humilité',description:''},
    {sense:'baisser la voix',concept:'Modération',description:"Réduire l'intensité de la parole — baisser la voix c'est parler avec douceur et modération. Directionnel vers l'apaisement."},
  ])
  log(r,'khfd',{'Abaissement/Humilité':"Mouvement vers le bas. Peut être physique ou moral. L'aile de l'humilité pour les parents.",'Modération':"Réduire l'intensité. Parler avec douceur."})

  // 380. dfa (دفء) — chaleur, repousser
  r = await ins('dfa', [
    {sense:'chaleur',concept:'Chaleur/Protection',description:"État de ce qui a une température agréable — la chaleur (dif') est permanente comme qualité qui réchauffe et conforte. Les vêtements de laine procurent chaleur contre le froid. La chaleur est un bienfait qui protège du gel et de l'inconfort."},
    {sense:'réchauffer',concept:'Chaleur/Protection',description:''},
    {sense:'repousser',concept:'Défense/Rejet',description:"Écarter ce qui s'approche — repousser (dafa'a) est directionnel vers l'extérieur, contre ce qu'on éloigne. Dieu repousse par certains hommes d'autres hommes. Si Dieu ne repoussait pas les gens les uns par les autres, la terre serait corrompue."},
    {sense:'écarter',concept:'Défense/Rejet',description:''},
  ])
  log(r,'dfa',{'Chaleur/Protection':"Température agréable. Bienfait qui conforte.",'Défense/Rejet':"Écarter ce qui s'approche. Dieu repousse par certains d'autres."})

  // 381. d r a (ذرأ) — créer, multiplier
  r = await ins('d r a', [
    {sense:'créer',concept:'Création/Multiplication',description:"Faire exister et multiplier les créatures — créer (dhara'a) inclut l'idée de dissémination et de multiplication. Dieu a créé (dhara'a) pour vous des épouses et fait d'elles des enfants et des petits-enfants. La création est directionnelle de Dieu vers Ses créatures, et elle se poursuit par la reproduction."},
    {sense:'multiplier',concept:'Création/Multiplication',description:''},
    {sense:'disséminer',concept:'Création/Multiplication',description:''},
    {sense:'progéniture',concept:'Descendance',description:"Les enfants et leurs descendants — la dhurriyya est la lignée qui perpétue l'existence. C'est permanent comme continuation de la vie à travers les générations."},
  ])
  log(r,'d r a',{'Création/Multiplication':"Créer et multiplier. Inclut la dissémination. Se poursuit par reproduction.",'Descendance':"Lignée qui perpétue l'existence. Continuation à travers les générations."})

  // 382. z l l (ظلل) — ombrager
  r = await ins('z l l', [
    {sense:'ombrager',concept:'Ombre/Protection',description:"Couvrir de son ombre, protéger du soleil — l'ombre (zill) est permanente tant que dure ce qui la projette. C'est un espace de fraîcheur et de repos à l'abri de l'ardeur. Dieu a ombragé les fils d'Israël par le nuage. L'ombre du trône de Dieu abritera les pieux au Jour où il n'y aura pas d'autre ombre."},
    {sense:'ombre',concept:'Ombre/Protection',description:''},
    {sense:'abri',concept:'Ombre/Protection',description:''},
    {sense:'fraîcheur',concept:'Ombre/Protection',description:''},
  ])
  log(r,'z l l',{'Ombre/Protection':"Couvrir de son ombre. Espace de fraîcheur. L'ombre du Trône au Jour dernier."})

  // 383. akht (أخت) — sœur
  r = await ins('akht', [
    {sense:'sœur',concept:'Parenté féminine',description:"Femme ayant les mêmes parents ou l'un des deux parents en commun — la sœur (ukht) est permanente comme relation de sang. Elle partage l'origine et le patrimoine familial. Les sœurs héritent selon les règles précises du Coran. Elles sont aussi les sœurs en religion, partageant la même foi."},
    {sense:'parente',concept:'Parenté féminine',description:''},
    {sense:'semblable',concept:'Similarité',description:"Qui ressemble à autre chose — une chose est sœur d'une autre quand elle lui est similaire. Les cités sœurs partagent le même sort pour les mêmes péchés."},
  ])
  log(r,'akht',{'Parenté féminine':"Femme de même origine. Relation permanente. Droits d'héritage définis.",'Similarité':"Ressemblance. Les cités sœurs partagent le même sort."})

  // 384. khdn (خدن) — ami intime, amant
  r = await ins('khdn', [
    {sense:'ami intime',concept:'Intimité/Relation secrète',description:"Compagnon très proche avec qui on partage des secrets — l'ami intime (khidn) entretient une relation de proximité personnelle. Le terme peut désigner une relation illicite cachée. Les femmes chastes ne prennent pas d'amants secrets. L'intimité hors du cadre licite est blâmée car elle est dissimulée."},
    {sense:'amant',concept:'Intimité/Relation secrète',description:''},
    {sense:'relation secrète',concept:'Intimité/Relation secrète',description:''},
  ])
  log(r,'khdn',{'Intimité/Relation secrète':"Proximité personnelle. Peut être illicite si cachée. Les chastes évitent les amants secrets."})

  // 385. mdje (مضجع) — couche, lit
  r = await ins('mdje', [
    {sense:'couche',concept:'Repos/Sommeil',description:"Lieu où l'on se couche pour dormir ou se reposer — la couche (madja') est l'espace du repos nocturne. C'est permanent comme lieu mais l'usage est temporaire. Leurs flancs s'écartent des couches pour invoquer leur Seigneur. Abandonner sa couche pour prier est un acte de dévotion qui préfère Dieu au sommeil."},
    {sense:'lit',concept:'Repos/Sommeil',description:''},
    {sense:'place',concept:'Repos/Sommeil',description:''},
  ])
  log(r,'mdje',{'Repos/Sommeil':"Lieu du repos nocturne. Les pieux s'en écartent pour prier."})

  // 386. škk (شكك) — douter
  r = await ins('škk', [
    {sense:'douter',concept:'Doute/Incertitude',description:"État d'hésitation entre deux possibilités sans pouvoir trancher — le doute (shakk) est intérieur comme suspension du jugement. C'est un état qui peut être temporaire ou persistant. Le doute peut être le début de la quête de vérité ou un obstacle à la foi. Ceux qui sont dans le doute au sujet du Coran sont dans l'égarement."},
    {sense:'incertitude',concept:'Doute/Incertitude',description:''},
    {sense:'hésitation',concept:'Doute/Incertitude',description:''},
    {sense:'suspicion',concept:'Doute/Incertitude',description:''},
  ])
  log(r,'škk',{'Doute/Incertitude':"Hésitation entre possibilités. Intérieur. Peut être début de quête ou obstacle à la foi."})

  // 387. yay (يئس) — désespérer
  r = await ins('yay', [
    {sense:'désespérer',concept:'Désespoir/Perte d espoir',description:"Perdre tout espoir, croire que quelque chose est impossible — le désespoir (ya's) est un état intérieur de renoncement. C'est permanent comme disposition qui ferme l'horizon. Ne désespérez pas de la miséricorde de Dieu car seuls les mécréants désespèrent. Le désespoir est une forme de mécréance car il nie la capacité de Dieu à changer les choses."},
    {sense:'perdre espoir',concept:'Désespoir/Perte d espoir',description:''},
    {sense:'renoncer',concept:'Désespoir/Perte d espoir',description:''},
  ])
  log(r,'yay',{'Désespoir/Perte d espoir':"Perdre tout espoir. État intérieur de renoncement. Seuls les mécréants désespèrent."})

  // 388. frewn (فرعون) — Pharaon
  r = await ins('frewn', [
    {sense:'Pharaon',concept:'Tyrannie/Orgueil',description:"Titre du roi d'Égypte qui s'opposa à Moïse — Pharaon (Fir'awn) est permanent comme archétype du tyran orgueilleux. Il prétendit être le seigneur suprême et rejeta le message de Moïse. Son histoire est l'exemple de l'orgueil qui mène à la perdition. Il fut noyé avec son armée quand la mer se referma sur eux, signe que nul ne peut défier Dieu."},
    {sense:'tyran',concept:'Tyrannie/Orgueil',description:''},
    {sense:'roi d Égypte',concept:'Tyrannie/Orgueil',description:''},
  ])
  log(r,'frewn',{'Tyrannie/Orgueil':"Archétype du tyran. Prétendit être seigneur. Noyé pour avoir défié Dieu."})

  console.log('\n=== Batch 40 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
