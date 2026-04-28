const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 298, total = 2321

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

  // 299. sry (سري) — voyager de nuit, aller
  r = await ins('sry', [
    {sense:'voyager de nuit',concept:'Voyage nocturne',description:"Acte de se déplacer pendant la nuit quand les autres dorment — le voyage nocturne (isrâ') est directionnel d'un lieu vers un autre, couvert par l'obscurité. C'est ponctuel mais significatif : le Prophète a été transporté de nuit vers Jérusalem. La nuit enveloppe le voyageur de son secret, le voyage nocturne a quelque chose de mystérieux et de sacré."},
    {sense:'marcher la nuit',concept:'Voyage nocturne',description:''},
    {sense:'Isrâ',concept:'Voyage nocturne',description:''},
    {sense:'couler',concept:'Écoulement',description:"Mouvement d'un liquide qui va d'un point à un autre — couler est directionnel et continu. Les rivières coulent, les larmes coulent. Ce qui coule suit sa pente naturellement."},
    {sense:'secret',concept:'Secret/Intimité',description:"Ce qui est caché aux autres — le secret est intérieur et personnel. La confidence (sarîra) est ce qu'on garde pour soi."},
  ])
  log(r,'sry',{'Voyage nocturne':"Déplacement dans l'obscurité. Mystérieux et sacré. L'Isrâ' du Prophète.",'Écoulement':"Mouvement continu qui suit sa pente.",'Secret/Intimité':"Ce qui est gardé pour soi, caché aux autres."})

  // 300. fdl (فضل) — être supérieur, grâce, faveur
  r = await ins('fdl', [
    {sense:'être supérieur',concept:'Excellence/Faveur',description:"État de ce qui dépasse les autres en qualité ou en valeur — l'excellence (fadl) est permanente comme qualité intrinsèque. C'est un jugement comparatif : celui qui a le fadl surpasse les autres. La grâce de Dieu (fadl Allah) est ce qu'Il donne en plus de ce qui est dû, par pure générosité. La faveur divine distingue et élève celui qui la reçoit."},
    {sense:'grâce',concept:'Excellence/Faveur',description:''},
    {sense:'faveur',concept:'Excellence/Faveur',description:''},
    {sense:'mérite',concept:'Excellence/Faveur',description:''},
    {sense:'surplus',concept:'Reste/Surplus',description:"Ce qui reste après que le nécessaire a été pris — le surplus est ce qui dépasse le besoin. C'est permanent comme quantité disponible. Donner de son surplus aux autres est recommandé."},
    {sense:'reste',concept:'Reste/Surplus',description:''},
  ])
  log(r,'fdl',{'Excellence/Faveur':"Ce qui dépasse en qualité. La grâce divine est donnée par pure générosité. Élève celui qui la reçoit.",'Reste/Surplus':"Ce qui dépasse le besoin. Quantité disponible à partager."})

  // 301. wed (وعد) — promettre
  r = await ins('wed', [
    {sense:'promettre',concept:'Promesse/Engagement',description:"Acte d'engager sa parole pour l'avenir — la promesse (wa'd) sort de celui qui promet et lie celui qui la fait. C'est directionnel vers celui à qui on promet et vers l'avenir. La promesse crée une obligation morale de tenir sa parole. Les promesses de Dieu sont certaines car Il ne manque jamais à Sa parole. Promettre et ne pas tenir est une forme de mensonge."},
    {sense:'promesse',concept:'Promesse/Engagement',description:''},
    {sense:'engagement',concept:'Promesse/Engagement',description:''},
    {sense:'rendez-vous',concept:'Promesse/Engagement',description:''},
    {sense:'menacer',concept:'Menace/Avertissement',description:"Promettre un mal à celui qui désobéit — la menace (wa'îd) est une promesse négative, directionnelle vers celui qu'on met en garde. Le châtiment promis par Dieu aux mécréants est certain."},
  ])
  log(r,'wed',{'Promesse/Engagement':"Engager sa parole pour l'avenir. Crée une obligation. Les promesses de Dieu sont certaines.",'Menace/Avertissement':"Promettre un mal. Directionnelle vers le désobéissant."})

  // 302. mwsa (موسى) — Moïse
  r = await ins('mwsa', [
    {sense:'Moïse',concept:'Prophétie/Mission',description:"Nom du prophète envoyé aux fils d'Israël pour les libérer de Pharaon — Moïse est l'interlocuteur de Dieu (kalîm Allah), celui à qui Dieu a parlé directement. C'est permanent comme figure prophétique majeure. Moïse a reçu la Torah, fendu la mer, affronté Pharaon. Son histoire est la plus détaillée dans le Coran : l'humble berger devenu libérateur d'un peuple."},
    {sense:'prophète',concept:'Prophétie/Mission',description:''},
  ])
  log(r,'mwsa',{'Prophétie/Mission':"Envoyé pour libérer Israël. Interlocuteur direct de Dieu. Du berger humble au libérateur."})

  // 303. arbe (أربع) — quatre
  r = await ins('arbe', [
    {sense:'quatre',concept:'Nombre/Quaternité',description:"Le nombre qui suit trois — quatre est permanent comme valeur numérique. C'est le nombre de la stabilité (les quatre coins, les quatre directions). Dans le Coran : quatre mois sacrés, quatre témoins pour l'adultère, quatre épouses maximum. Le quatre représente la complétude terrestre, la structure stable qui tient."},
    {sense:'quatrième',concept:'Nombre/Quaternité',description:''},
    {sense:'quarante',concept:'Nombre/Quaternité',description:''},
  ])
  log(r,'arbe',{'Nombre/Quaternité':"Nombre de la stabilité. Quatre coins, quatre directions. Complétude terrestre."})

  // 304. lyl (ليل) — nuit
  r = await ins('lyl', [
    {sense:'nuit',concept:'Nuit/Obscurité',description:"Période de l'obscurité entre le coucher et le lever du soleil — la nuit est permanente comme phénomène cyclique qui alterne avec le jour. C'est le temps du repos, du sommeil, de l'intimité. La nuit enveloppe et cache. La prière de nuit (qiyâm al-layl) est précieuse car on y est seul avec Dieu. La Nuit du Destin vaut mieux que mille mois."},
    {sense:'obscurité',concept:'Nuit/Obscurité',description:''},
    {sense:'ténèbres',concept:'Nuit/Obscurité',description:''},
  ])
  log(r,'lyl',{'Nuit/Obscurité':"Temps du repos et de l'intimité. Alterne avec le jour. La prière nocturne rapproche de Dieu."})

  // 305. khdh (أخذ) — prendre
  r = await ins('khdh', [
    {sense:'prendre',concept:'Prise/Saisie',description:"Acte de s'emparer de quelque chose par la main ou par l'esprit — prendre est directionnel de celui qui prend vers ce qui est pris. C'est ponctuel dans l'acte mais peut créer un état de possession. Dieu prend (saisit) les oppresseurs d'une prise sévère. Prendre peut être légitime (recevoir ce qui est donné) ou illégitime (voler)."},
    {sense:'saisir',concept:'Prise/Saisie',description:''},
    {sense:'recevoir',concept:'Prise/Saisie',description:''},
    {sense:'adopter',concept:'Adoption/Choix',description:"Prendre pour soi ce qui n'était pas sien — adopter est directionnel vers ce qu'on fait sien. Prendre pour allié, prendre pour ami, prendre pour dieu."},
    {sense:'châtier',concept:'Châtiment',description:"Saisir quelqu'un pour le punir — le châtiment divin est une prise qui ne laisse pas échapper. C'est ponctuel mais définitif dans ses effets."},
  ])
  log(r,'khdh',{'Prise/Saisie':"S'emparer de quelque chose. Directionnel vers ce qui est pris. Peut être légitime ou non.",'Adoption/Choix':"Faire sien ce qui ne l'était pas. Prendre pour allié ou dieu.",'Châtiment':"Saisie punitive. Ponctuel mais définitif."})

  // 306. ejl (عجل) — se hâter, veau
  r = await ins('ejl', [
    {sense:'se hâter',concept:'Hâte/Précipitation',description:"Acte de vouloir quelque chose avant son temps ou d'agir sans réflexion — la hâte est directionnelle vers ce qu'on veut obtenir vite. C'est ponctuel comme impulsion mais peut être un trait de caractère. L'homme est créé de hâte (khuliq min 'ajal). La précipitation est souvent blâmée car elle empêche la réflexion et mène à l'erreur."},
    {sense:'presser',concept:'Hâte/Précipitation',description:''},
    {sense:'précipiter',concept:'Hâte/Précipitation',description:''},
    {sense:'veau',concept:'Idolâtrie',description:"Jeune bovin que les fils d'Israël ont adoré en l'absence de Moïse — le veau d'or est le symbole de l'idolâtrie, l'adoration de ce qui est fabriqué par les mains de l'homme. C'est permanent comme avertissement contre la substitution du Créateur par la créature."},
  ])
  log(r,'ejl',{'Hâte/Précipitation':"Vouloir avant le temps. L'homme est créé de hâte. La précipitation mène à l'erreur.",'Idolâtrie':"Le veau d'or. Adorer ce qui est fabriqué. Substituer le Créateur par la créature."})

  // 307. jzy (جزي) — rétribuer
  r = await ins('jzy', [
    {sense:'rétribuer',concept:'Rétribution/Justice',description:"Acte de donner à chacun selon ses œuvres — la rétribution (jazâ') est directionnelle de celui qui rétribue vers celui qui reçoit. C'est un acte de justice qui rend à chacun son dû. Dieu rétribue le bien par le bien et le mal par le mal, mais Sa miséricorde dépasse Sa colère. La rétribution peut être immédiate ou différée au Jour du Jugement."},
    {sense:'récompenser',concept:'Rétribution/Justice',description:''},
    {sense:'punir',concept:'Rétribution/Justice',description:''},
    {sense:'suffire',concept:'Suffisance',description:"Être assez pour combler un besoin — ce qui suffit remplit exactement la mesure requise. Dieu suffit comme protecteur et comme témoin."},
  ])
  log(r,'jzy',{'Rétribution/Justice':"Donner selon les œuvres. Directionnel vers le récipiendaire. La miséricorde divine dépasse la colère.",'Suffisance':"Être assez pour le besoin. Dieu suffit comme protecteur."})

  // 308. hya (هيأ) — préparer
  r = await ins('hya', [
    {sense:'préparer',concept:'Préparation/Disposition',description:"Acte de mettre les choses en ordre en vue d'un usage futur — préparer est directionnel vers ce qui vient et vers ce qu'on prépare. C'est ponctuel dans l'acte mais vise un état futur. Dieu prépare les moyens de guidance pour qui veut être guidé. Se préparer c'est anticiper et ordonner en vue d'un but."},
    {sense:'disposer',concept:'Préparation/Disposition',description:''},
    {sense:'apprêter',concept:'Préparation/Disposition',description:''},
    {sense:'faciliter',concept:'Facilitation',description:"Rendre facile ce qui était difficile — faciliter est directionnel vers celui pour qui on facilite. Dieu facilite le chemin de qui cherche sincèrement."},
  ])
  log(r,'hya',{'Préparation/Disposition':"Mettre en ordre pour l'avenir. Directionnel vers ce qui vient. Anticiper et ordonner.",'Facilitation':"Rendre facile. Dieu facilite le chemin du chercheur sincère."})

  console.log('\n=== Batch 32 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
