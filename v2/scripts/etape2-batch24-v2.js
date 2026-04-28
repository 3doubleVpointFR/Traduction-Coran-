const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 217, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) return null
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) return null
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {senses, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.senses.length+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    r.senses.forEach(s => {
      console.log('• '+s.sense+' ['+s.concept+']')
      console.log('  '+s.description)
    })
  }
}

async function run() {
  let r

  // qds (قدس) — être saint, pur, sacré
  r=await ins('qds',[
    {sense:'être saint',concept:'Sainteté/Pureté',description:"État de ce qui est séparé du profane et élevé vers le divin. La sainteté est une pureté absolue qui distingue ce qui appartient à Dieu de ce qui appartient au monde. C'est un état permanent et intérieur qui peut se manifester extérieurement. Le saint est séparé, mis à part, intouchable par l'impureté."},
    {sense:'être pur',concept:'Sainteté/Pureté',description:"État de ce qui est exempt de souillure morale ou rituelle. La pureté est intérieure — elle reste dans la chose ou la personne pure. C'est le contraire de l'impureté. La pureté permet l'approche du sacré : on ne peut toucher le saint que pur."},
    {sense:'purifier',concept:'Purification',description:"Acte de rendre pur ce qui ne l'était pas. La purification sort de celui qui purifie et atteint ce qui est purifié — c'est directionnel et ponctuel. L'eau purifie le corps, le repentir purifie l'âme, le temps purifie parfois les souvenirs."},
    {sense:'sanctifier',concept:'Purification',description:"Acte de rendre saint, de consacrer à Dieu. La sanctification sort de Dieu ou de son représentant et atteint ce qui est sanctifié — c'est directionnel. Sanctifier c'est séparer du profane pour donner au sacré. L'acte est ponctuel mais l'état créé est permanent."},
    {sense:'sacré',concept:'Sainteté/Pureté',description:"Qualité de ce qui appartient au domaine divin et ne peut être touché par le profane. Le sacré est un état permanent de la chose — il la distingue et l'élève. C'est un jugement rationnel qui reconnaît la présence du divin dans certaines réalités."},
    {sense:'Jérusalem',concept:'Lieu saint',description:"La ville sainte par excellence, lieu de la présence divine. Jérusalem est sanctifiée par l'histoire du salut — c'est un état permanent du lieu. Le lieu saint est un espace où le ciel touche la terre."},
    {sense:'Esprit saint',concept:'Divers',description:"L'Esprit de Dieu qui vivifie et sanctifie. L'Esprit saint est pur par nature — c'est un être permanent de sainteté. Il sort de Dieu pour atteindre les créatures et les élever."},
  ]);log(r,'qds')

  // ka (كـ) — comme, tel que
  r=await ins('ka',[
    {sense:'comme',concept:'Comparaison/Similitude',description:"Particule qui établit une ressemblance entre deux réalités. Le comme sort de ce qui est comparé vers ce à quoi on compare — c'est directionnel. C'est un acte de jugement rationnel qui rapproche deux choses par ce qu'elles ont en commun. La comparaison est ponctuelle dans l'énoncé mais peut révéler une vérité permanente."},
    {sense:'tel que',concept:'Comparaison/Similitude',description:"Expression d'équivalence ou d'exemple. Tel que pose une égalité de nature ou de manière — c'est plus fort que comme car il affirme l'identité de type. C'est un jugement rationnel qui classe dans la même catégorie."},
    {sense:'à la manière de',concept:'Comparaison/Similitude',description:"Indication de la façon d'être ou de faire. À la manière de décrit le mode par référence à un modèle — c'est directionnel vers le modèle. C'est une instruction qui oriente l'action selon un exemple."},
    {sense:'semblable à',concept:'Comparaison/Similitude',description:"Qualité de ressemblance avec autre chose. Semblable à est un état de la chose qui la rapproche d'une autre — c'est permanent dans la mesure où la ressemblance dure. La similitude est toujours relative : on est semblable à quelque chose."},
  ]);log(r,'ka')

  // la (لا) — non, ne pas
  r=await ins('la',[
    {sense:'non',concept:'Négation',description:"Particule de négation absolue qui rejette ce qui est proposé. Le non sort de celui qui refuse et atteint ce qui est refusé — c'est directionnel et ponctuel. Le non est un acte de volonté qui ferme une porte, qui dit : ceci ne sera pas, ceci n'est pas vrai."},
    {sense:'ne pas',concept:'Négation',description:"Négation de l'action qui empêche son accomplissement. Ne pas bloque l'action avant qu'elle ne se réalise — c'est préventif. C'est un état qui peut être permanent (interdiction) ou ponctuel (refus momentané)."},
    {sense:'aucun',concept:'Négation',description:"Négation de l'existence ou de la quantité. Aucun nie la présence de quoi que ce soit — c'est le zéro absolu. C'est un jugement rationnel qui constate l'absence totale. Aucun est permanent tant que rien ne vient."},
    {sense:'sans',concept:'Absence/Privation',description:"Préposition de privation qui indique le manque. Sans dit ce qui n'accompagne pas — c'est un état de la chose qui lui manque quelque chose. La privation peut être permanente ou temporaire. Sans implique qu'il pourrait y avoir, mais il n'y a pas."},
  ]);log(r,'la')

  // any (أني) — quel, lequel, comment
  r=await ins('any',[
    {sense:'quel',concept:'Interrogation/Choix',description:"Pronom interrogatif qui demande d'identifier parmi plusieurs possibilités. Le quel sort du questionneur vers les options — c'est directionnel et ouvert. C'est un acte rationnel qui ouvre un champ de possibles et demande d'en sélectionner un. La question est ponctuelle mais vise une réponse définitive."},
    {sense:'lequel',concept:'Interrogation/Choix',description:"Pronom qui demande de désigner précisément parmi un ensemble connu. Lequel est plus précis que quel — les options sont déjà identifiées. C'est un acte de sélection qui réduit le multiple à l'un."},
    {sense:'comment',concept:'Interrogation modale',description:"Interrogation sur la manière d'être ou de faire. Comment cherche le mode — c'est une question rationnelle qui demande une explication. Elle sort vers l'extérieur pour comprendre le mécanisme des choses."},
    {sense:'où que',concept:'Généralité spatiale',description:"Locution qui généralise sur le lieu. Où que nie l'importance du lieu particulier — partout est équivalent. C'est un état permanent d'indifférence au lieu dans le contexte de l'énoncé."},
  ]);log(r,'any')

  // nnk (نون) — poisson, lettre Noun
  r=await ins('nnk',[
    {sense:'poisson',concept:'Poisson/Mer',description:"Animal aquatique qui vit dans l'eau. Le poisson est un être de l'entre-deux — il respire dans un milieu où l'homme se noie. C'est un état permanent de l'animal. Dans le Coran, le poisson évoque Jonas avalé puis recraché, la vie possible dans l'impossible."},
    {sense:'baleine',concept:'Poisson/Mer',description:"Grand animal marin, le plus grand des poissons. La baleine est le monstre marin par excellence — elle peut avaler un homme entier. C'est un être permanent des profondeurs, mystérieux et puissant."},
    {sense:'encrier',concept:'Écriture',description:"Récipient qui contient l'encre pour écrire. L'encrier est l'outil de l'écriture — il conserve ce qui permet de tracer. C'est un objet permanent qui sert à des actes ponctuels d'écriture. Le Noun du Coran évoque peut-être l'encrier divin."},
    {sense:'lettre Noun',concept:'Lettre',description:"La quatorzième lettre de l'alphabet arabe. Le Noun est un signe graphique permanent — il représente un son et peut avoir des significations mystiques. La sourate Noun commence par cette lettre mystérieuse."},
  ]);log(r,'nnk')

  // ant (أنت) — toi, tu
  r=await ins('ant',[
    {sense:'tu',concept:'Pronom/Interlocution',description:"Pronom personnel de la deuxième personne qui désigne l'interlocuteur direct. Le tu sort du locuteur et atteint celui à qui il s'adresse — c'est directionnel et crée une relation. Le tu est ponctuel dans chaque énoncé mais établit une relation permanente de dialogue."},
    {sense:'toi',concept:'Pronom/Interlocution',description:"Forme tonique du pronom de deuxième personne qui insiste sur la personne. Toi met l'accent sur l'interlocuteur — c'est lui et pas un autre. C'est directionnel et exclusif : toi seul, toi en particulier."},
    {sense:'vous',concept:'Pronom/Interlocution',description:"Pluriel ou forme de respect de la deuxième personne. Vous peut élargir à un groupe ou élever une personne par le respect. C'est directionnel vers ceux à qui on s'adresse. Le vous crée une distance ou une inclusion selon le contexte."},
  ]);log(r,'ant')

  // hkm (حكم) — juger, gouverner, sagesse
  r=await ins('hkm',[
    {sense:'juger',concept:'Jugement/Décision',description:"Acte de trancher entre le vrai et le faux, le juste et l'injuste. Le jugement sort du juge et atteint les parties — c'est directionnel et définitif. C'est un acte rationnel par excellence : le juge applique la règle au cas. Le jugement est ponctuel mais crée un état permanent (la chose jugée)."},
    {sense:'décider',concept:'Jugement/Décision',description:"Acte de fixer un choix définitif parmi les options. La décision sort de celui qui décide et clôt le débat — c'est ponctuel et définitif. Décider c'est couper : après la décision, il n'y a plus d'hésitation."},
    {sense:'gouverner',concept:'Autorité/Pouvoir',description:"Acte d'exercer le pouvoir sur une communauté. Le gouvernement sort du gouvernant et atteint les gouvernés — c'est directionnel et permanent tant que dure l'autorité. Gouverner c'est juger en continu les affaires de la cité."},
    {sense:'être sage',concept:'Sagesse',description:"État de celui qui possède la connaissance juste des choses. La sagesse est intérieure — c'est un état permanent de l'âme qui voit clair. Le sage juge bien parce qu'il connaît bien. La sagesse est le fondement du bon jugement."},
    {sense:'sagesse',concept:'Sagesse',description:"Connaissance profonde qui permet de bien juger. La sagesse est un état permanent de l'esprit — elle est acquise par l'expérience et la réflexion. La sagesse divine est parfaite ; la sagesse humaine est une approximation."},
    {sense:'empêcher',concept:'Empêchement',description:"Acte de freiner ou d'arrêter une action. L'empêchement sort de celui qui empêche et atteint l'action visée — c'est directionnel et ponctuel. Empêcher c'est mettre un frein, comme le mors du cheval (d'où le lien étymologique)."},
    {sense:'sentence',concept:'Jugement/Décision',description:"Résultat du jugement prononcé par le juge. La sentence sort du juge et atteint le condamné ou l'acquitté — c'est directionnelle et définitive. La sentence fixe le sort : c'est le jugement devenu parole officielle."},
  ]);log(r,'hkm')

  // sjd (سجد) — se prosterner, adorer
  r=await ins('sjd',[
    {sense:'se prosterner',concept:'Prosternation/Adoration',description:"Acte de s'incliner jusqu'au sol en signe de soumission totale. La prosternation est le geste ultime d'humilité — le front touche le sol, le corps entier reconnaît sa petitesse. C'est directionnel vers le bas et vers Dieu. C'est ponctuel dans le geste mais exprime une disposition permanente d'adoration."},
    {sense:'s\'incliner',concept:'Prosternation/Adoration',description:"Acte de baisser le corps en signe de respect. L'inclinaison est un mouvement vers le bas — elle sort de celui qui s'incline et reconnaît la supériorité de l'autre. Moins complète que la prosternation, elle est néanmoins un geste de soumission."},
    {sense:'adorer',concept:'Prosternation/Adoration',description:"Acte de vouer un culte à un être suprême. L'adoration sort de l'adorateur et monte vers l'adoré — c'est directionnel vers le haut. C'est l'acte intérieur dont la prosternation est le signe extérieur. L'adoration peut être permanente comme état de l'âme."},
    {sense:'mosquée',concept:'Lieu de prosternation',description:"Lieu consacré à la prière où l'on se prosterne. La mosquée (masjid) est littéralement le lieu de prosternation — c'est un espace permanent dédié à l'acte de prosterner. Le lieu tire son nom de l'acte qui s'y accomplit."},
    {sense:'obéir',concept:'Prosternation/Adoration',description:"Acte de se soumettre à un ordre supérieur. L'obéissance est une prosternation de la volonté — on baisse sa volonté devant celle de l'autre. C'est directionnel vers celui à qui on obéit. L'obéissance peut être ponctuelle (un acte) ou permanente (une disposition)."},
  ]);log(r,'sjd')

  // bls (بلس) — désespérer, Iblis
  r=await ins('bls',[
    {sense:'désespérer',concept:'Désespoir',description:"État de celui qui a perdu tout espoir de bien. Le désespoir est intérieur — il envahit l'âme et coupe l'horizon. C'est un état qui peut être ponctuel (moment de désespoir) ou permanent (désespérance). Le désespéré ne voit plus d'issue, plus de lumière au bout."},
    {sense:'être dans le désarroi',concept:'Désespoir',description:"État de confusion et d'impuissance face à l'adversité. Le désarroi est un désespoir actif — on ne sait plus quoi faire, on est perdu. C'est intérieur mais se manifeste dans l'agitation ou la paralysie extérieure."},
    {sense:'être réduit au silence',concept:'Silence/Mutisme',description:"État de celui qui ne peut plus parler, par le désespoir ou la honte. Le silence forcé est un désespoir de la parole — les mots ne viennent plus. C'est un état qui résulte d'un choc ou d'une défaite."},
    {sense:'Iblis',concept:'Diable',description:"Nom propre du diable, celui qui a désespéré de la miséricorde divine. Iblis est l'être qui a refusé de se prosterner et a été chassé — c'est un état permanent de rébellion et de désespérance. Il désespère et fait désespérer."},
    {sense:'être consterné',concept:'Désespoir',description:"État de stupeur face au malheur soudain. La consternation est un désespoir soudain — on est frappé et on ne peut réagir. C'est ponctuel dans le choc mais peut laisser une trace permanente."},
  ]);log(r,'bls')

  // aby (أبي) — refuser, père
  r=await ins('aby',[
    {sense:'refuser',concept:'Refus/Rejet',description:"Acte de ne pas accepter ce qui est proposé ou commandé. Le refus sort de celui qui refuse et repousse ce qui vient vers lui — c'est directionnel et ponctuel. Refuser c'est dire non avec la volonté, c'est fermer la porte à quelque chose."},
    {sense:'rejeter',concept:'Refus/Rejet',description:"Acte de repousser ce qu'on ne veut pas. Le rejet est plus fort que le refus — on éloigne activement ce qui était proche. C'est directionnel de soi vers l'extérieur. Le rejet crée une distance."},
    {sense:'s\'abstenir',concept:'Refus/Rejet',description:"Acte de ne pas faire ce qu'on pourrait faire. L'abstention est un refus d'action — on choisit de ne pas agir. C'est intérieur (décision) avec effet extérieur (non-action). L'abstention est un refus silencieux."},
    {sense:'dédaigner',concept:'Refus/Rejet',description:"Acte de refuser avec mépris. Le dédain ajoute le mépris au refus — on ne veut pas parce qu'on estime que c'est indigne de soi. C'est un jugement qui accompagne le rejet. Iblis a dédaigné de se prosterner."},
    {sense:'père',concept:'Parenté/Paternité',description:"Celui qui engendre et élève. Le père est l'origine de la lignée — c'est une relation permanente et définitive. Le père donne la vie et le nom, il est la source d'où l'on vient. La paternité crée un lien indéfectible."},
  ]);log(r,'aby')

  console.log('\n=== Batch 24 v2 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
