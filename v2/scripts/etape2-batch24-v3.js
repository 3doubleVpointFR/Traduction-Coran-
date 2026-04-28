const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 217, total = 2321

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

  // 218. qds (قدس) — être saint, pur, sacré
  r = await ins('qds', [
    {sense:'être saint',concept:'Sainteté/Pureté',description:"État de ce qui est séparé du profane et appartient au domaine divin. La sainteté est une pureté absolue qui distingue ce qui est de Dieu de ce qui est du monde — c'est permanent et intérieur à l'être saint. Le saint est intouchable par l'impureté, mis à part, élevé au-dessus du commun. C'est un jugement rationnel sur l'appartenance au sacré."},
    {sense:'être pur',concept:'Sainteté/Pureté',description:''},
    {sense:'sacré',concept:'Sainteté/Pureté',description:''},
    {sense:'purifier',concept:'Purification',description:"Acte de rendre pur ce qui était souillé, de préparer à l'approche du sacré. La purification sort de celui qui purifie et atteint ce qui est purifié — c'est directionnel et ponctuel. L'eau purifie le corps, le repentir purifie l'âme. Purifier c'est enlever ce qui empêche d'approcher le saint."},
    {sense:'sanctifier',concept:'Purification',description:''},
    {sense:'Jérusalem',concept:'Lieu saint',description:"Lieu géographique où le sacré s'est manifesté dans l'histoire. Le lieu saint est un espace permanent où le ciel touche la terre — c'est un état du lieu qui le distingue de tout autre. Jérusalem est sanctifiée par la présence divine."},
    {sense:'Esprit saint',concept:'Divers',description:"L'Esprit de Dieu qui porte la sainteté."},
  ])
  log(r,'qds',{'Sainteté/Pureté':"État permanent de séparation du profane. Appartenance au domaine divin. Jugement rationnel sur ce qui est mis à part.",'Purification':"Acte directionnel ponctuel d'enlever la souillure. Prépare à l'approche du sacré.",'Lieu saint':"Espace permanent où le sacré se manifeste. Le ciel touche la terre.",'Divers':"Sens particulier."})

  // 219. ka (كـ) — comme, tel que
  r = await ins('ka', [
    {sense:'comme',concept:'Comparaison/Similitude',description:"Particule qui établit un rapport de ressemblance entre deux réalités. La comparaison sort de ce qui est comparé vers ce à quoi on compare — c'est directionnel et relationnel. C'est un jugement rationnel qui rapproche par l'analogie : voir ce qu'il y a de commun entre deux choses différentes. La comparaison éclaire l'inconnu par le connu."},
    {sense:'tel que',concept:'Comparaison/Similitude',description:''},
    {sense:'à la manière de',concept:'Comparaison/Similitude',description:''},
    {sense:'semblable à',concept:'Comparaison/Similitude',description:''},
  ])
  log(r,'ka',{'Comparaison/Similitude':"Rapport directionnel de ressemblance entre deux réalités. Jugement rationnel d'analogie — rapprocher par ce qui est commun."})

  // 220. la (لا) — non, ne pas
  r = await ins('la', [
    {sense:'non',concept:'Négation',description:"Particule de négation absolue qui rejette ce qui est proposé ou affirmé. Le non sort de celui qui refuse et atteint ce qui est refusé — c'est directionnel et ponctuel. C'est un acte de volonté ou de jugement qui ferme une porte : ceci n'est pas, ceci ne sera pas. La négation définit par exclusion."},
    {sense:'ne pas',concept:'Négation',description:''},
    {sense:'aucun',concept:'Négation',description:''},
    {sense:'sans',concept:'Absence/Privation',description:"Préposition qui indique le manque, ce qui n'accompagne pas. Le sans marque une privation — c'est un état de la chose à qui il manque quelque chose. La privation peut être permanente ou temporaire. Sans implique un possible qui n'est pas actualisé."},
  ])
  log(r,'la',{'Négation':"Acte directionnel de rejet. Ferme une porte — ceci n'est pas. Jugement ou volonté de refus.",'Absence/Privation':"État de manque. Ce qui devrait ou pourrait être là mais n'y est pas."})

  // 221. any (أني) — quel, lequel, comment
  r = await ins('any', [
    {sense:'quel',concept:'Interrogation/Choix',description:"Pronom interrogatif qui demande d'identifier parmi plusieurs possibilités. Le quel ouvre un champ de possibles et demande de sélectionner — c'est directionnel du questionneur vers les options. C'est un acte rationnel de discrimination qui mène au choix."},
    {sense:'lequel',concept:'Interrogation/Choix',description:''},
    {sense:'comment',concept:'Interrogation modale',description:"Interrogation sur la manière d'être ou de faire. Le comment cherche l'explication du mode — c'est une question rationnelle qui veut comprendre le mécanisme. La réponse au comment donne la clé du fonctionnement."},
    {sense:'où que',concept:'Généralité spatiale',description:"Locution qui généralise sur le lieu sans restriction. Où que nie l'importance du lieu particulier — c'est un état permanent d'indifférence spatiale dans le contexte de l'énoncé."},
  ])
  log(r,'any',{'Interrogation/Choix':"Question directionnelle vers les options. Discriminer pour choisir. Acte rationnel de sélection.",'Interrogation modale':"Question rationnelle sur le comment. Comprendre le mécanisme.",'Généralité spatiale':"Indifférence au lieu particulier. L'universel spatial."})

  // 222. nnk (نون) — poisson, lettre Noun
  r = await ins('nnk', [
    {sense:'poisson',concept:'Poisson/Mer',description:"Animal qui vit dans l'eau, respirant dans un milieu où l'homme se noie. Le poisson est l'être de l'autre monde aquatique — permanent dans son élément. Dans le Coran, il évoque Jonas avalé puis rendu, la possibilité de vie dans ce qui semblait mort. Le poisson nage dans l'invisible des profondeurs."},
    {sense:'baleine',concept:'Poisson/Mer',description:''},
    {sense:'encrier',concept:'Écriture',description:"Récipient qui contient l'encre pour écrire. L'encrier conserve ce qui permet de fixer la parole — c'est permanent comme outil. Le Noun coranique évoque peut-être l'encrier divin d'où coule la révélation."},
    {sense:'lettre Noun',concept:'Lettre',description:"La quatorzième lettre de l'alphabet arabe. Le Noun est un signe permanent qui ouvre des sourates par son mystère. La lettre est ce qui donne corps au son."},
  ])
  log(r,'nnk',{'Poisson/Mer':"Être de l'autre monde aquatique. Vie dans ce qui semble hostile à l'homme. L'invisible des profondeurs.",'Écriture':"Ce qui conserve et permet de fixer. L'encre qui donne corps à la parole.",'Lettre':"Signe permanent porteur de mystère. Corps du son."})

  // 223. ant (أنت) — toi, tu
  r = await ins('ant', [
    {sense:'tu',concept:'Pronom/Interlocution',description:"Pronom de la deuxième personne qui désigne celui à qui on parle. Le tu crée une relation directionnelle entre le locuteur et l'interlocuteur — c'est l'adresse qui fait de l'autre un vis-à-vis. Le tu est ponctuel dans l'énoncé mais établit la relation permanente du dialogue. Dire tu c'est reconnaître l'autre comme présent et capable de réponse."},
    {sense:'toi',concept:'Pronom/Interlocution',description:''},
    {sense:'vous',concept:'Pronom/Interlocution',description:''},
  ])
  log(r,'ant',{'Pronom/Interlocution':"Relation directionnelle vers l'interlocuteur. Reconnaître l'autre comme présent. Le dialogue s'établit."})

  // 224. hkm (حكم) — juger, gouverner, sagesse
  r = await ins('hkm', [
    {sense:'juger',concept:'Jugement/Décision',description:"Acte de trancher entre le vrai et le faux, le juste et l'injuste. Le jugement sort du juge et atteint les parties — c'est directionnel et définitif. C'est l'acte rationnel par excellence : appliquer la règle au cas. Le jugement est ponctuel mais crée un état permanent (la chose jugée)."},
    {sense:'décider',concept:'Jugement/Décision',description:''},
    {sense:'sentence',concept:'Jugement/Décision',description:''},
    {sense:'gouverner',concept:'Autorité/Pouvoir',description:"Acte d'exercer le pouvoir sur une communauté. Le gouvernement sort du gouvernant et atteint les gouvernés — c'est directionnel et permanent tant que dure l'autorité. Gouverner c'est juger continuellement les affaires de la cité."},
    {sense:'être sage',concept:'Sagesse',description:"État de celui qui possède la connaissance juste des choses et de leurs causes. La sagesse est intérieure et permanente — c'est un état de l'âme qui voit clair dans la complexité. Le sage juge bien parce qu'il connaît la nature des choses."},
    {sense:'sagesse',concept:'Sagesse',description:''},
    {sense:'empêcher',concept:'Divers',description:"Sens lié au mors qui freine le cheval — empêcher c'est mettre un frein."},
  ])
  log(r,'hkm',{'Jugement/Décision':"Acte directionnel de trancher. Appliquer la règle au cas. Ponctuel mais définitif.",'Autorité/Pouvoir':"Direction permanente du gouvernant vers les gouvernés. Juger continuellement les affaires.",'Sagesse':"État intérieur permanent de connaissance juste. Voir clair dans la complexité.",'Divers':"Sens isolé."})

  // 225. sjd (سجد) — se prosterner, adorer
  r = await ins('sjd', [
    {sense:'se prosterner',concept:'Prosternation/Adoration',description:"Acte de s'incliner jusqu'au sol en signe de soumission totale. La prosternation est le geste ultime d'humilité — le front touche la terre, le corps entier reconnaît sa petitesse devant le Grand. C'est directionnel vers le bas et vers Dieu, ponctuel dans le geste mais expression d'un état permanent d'adoration."},
    {sense:'s\'incliner',concept:'Prosternation/Adoration',description:''},
    {sense:'adorer',concept:'Prosternation/Adoration',description:''},
    {sense:'obéir',concept:'Prosternation/Adoration',description:''},
    {sense:'mosquée',concept:'Lieu de prosternation',description:"Lieu consacré à la prière où l'on se prosterne (masjid). La mosquée est l'espace permanent dédié à l'acte de prosternation — le lieu tire son nom de l'acte qui s'y accomplit."},
  ])
  log(r,'sjd',{'Prosternation/Adoration':"Geste directionnel vers le bas devant Dieu. Le corps reconnaît sa petitesse. Ponctuel mais expression d'état permanent.",'Lieu de prosternation':"Espace permanent dédié au geste. Le lieu nommé par l'acte."})

  // 226. bls (بلس) — désespérer, Iblis
  r = await ins('bls', [
    {sense:'désespérer',concept:'Désespoir',description:"État intérieur de celui qui a perdu tout espoir de bien. Le désespoir envahit l'âme et coupe l'horizon — c'est un état qui peut être ponctuel (crise) ou permanent (désespérance). Le désespéré ne voit plus d'issue, la lumière s'est éteinte. C'est une émotion qui s'empare mais aussi un jugement que rien n'est plus possible."},
    {sense:'être dans le désarroi',concept:'Désespoir',description:''},
    {sense:'être consterné',concept:'Désespoir',description:''},
    {sense:'être réduit au silence',concept:'Silence/Mutisme',description:"État de celui qui ne peut plus parler sous l'effet du choc. Le silence forcé est un désespoir de la parole — les mots ne viennent plus. C'est ponctuel comme réaction mais peut durer."},
    {sense:'Iblis',concept:'Diable',description:"Nom propre du diable, celui qui a désespéré de la miséricorde divine après son refus de se prosterner. Iblis est l'être qui a perdu tout espoir de retour — son état de rébellion et de désespérance est devenu permanent."},
  ])
  log(r,'bls',{'Désespoir':"État intérieur où l'espoir est perdu. L'horizon se ferme. Émotion et jugement mêlés.",'Silence/Mutisme':"Désespoir de la parole sous le choc. Les mots ne viennent plus.",'Diable':"L'être qui a désespéré de la miséricorde. Rébellion permanente."})

  // 227. aby (أبي) — refuser, père
  r = await ins('aby', [
    {sense:'refuser',concept:'Refus/Rejet',description:"Acte de ne pas accepter ce qui est proposé ou commandé. Le refus sort de celui qui refuse et repousse ce qui vient — c'est directionnel et ponctuel. Refuser c'est dire non avec la volonté, fermer la porte à ce qu'on ne veut pas. Le refus d'Iblis est le modèle du rejet orgueilleux."},
    {sense:'rejeter',concept:'Refus/Rejet',description:''},
    {sense:'s\'abstenir',concept:'Refus/Rejet',description:''},
    {sense:'dédaigner',concept:'Refus/Rejet',description:''},
    {sense:'père',concept:'Parenté/Paternité',description:"Celui qui engendre et dont on descend. Le père est l'origine de la lignée — c'est une relation permanente et définitive. Le père donne la vie et le nom, il est la source d'où l'on vient. La paternité crée un lien indéfectible."},
  ])
  log(r,'aby',{'Refus/Rejet':"Acte directionnel de repousser ce qui vient. Dire non avec la volonté. Le rejet orgueilleux d'Iblis.",'Parenté/Paternité':"Relation permanente d'origine. Le père source de la lignée."})

  console.log('\n=== Batch 24 v3 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
