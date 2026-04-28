const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const Database = require('better-sqlite3')
const path = require('path')
const ldb = new Database(path.join(__dirname, '..', 'lanes_data', 'lexicon.sqlite'))
let done = 217, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) return null
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) return null
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+r.concepts.length+' concepts ('+r.concepts.join(', ')+') — reste '+(total-done))} }

async function run() {
  let r

  // qds (قدس) — être saint, pur, sacré
  r=await ins('qds',[
    {sense:'être saint',concept:'Sainteté/Pureté',description:"État de ce qui est séparé du profane et élevé vers le divin. La sainteté est une pureté absolue."},
    {sense:'être pur',concept:'Sainteté/Pureté',description:"État de ce qui est exempt de souillure. La pureté est l'absence de tout défaut."},
    {sense:'purifier',concept:'Sainteté/Pureté',description:"Acte de rendre pur ce qui ne l'était pas. Purifier enlève les impuretés."},
    {sense:'sanctifier',concept:'Sainteté/Pureté',description:"Acte de rendre saint. Sanctifier élève vers le sacré."},
    {sense:'sacré',concept:'Sainteté/Pureté',description:"Qualité de ce qui appartient au domaine divin. Le sacré est séparé du profane."},
    {sense:'Jérusalem',concept:'Lieu saint',description:"La ville sainte par excellence. Jérusalem est le lieu de la sainteté."},
    {sense:'ange',concept:'Divers',description:"Être pur et saint par nature. L'ange est l'être de la pureté."},
  ]);log(r,'qds')

  // ka (كـ) — comme, tel que (particule de comparaison)
  r=await ins('ka',[
    {sense:'comme',concept:'Comparaison',description:"Particule qui établit une ressemblance. Comme rapproche deux réalités par similitude."},
    {sense:'tel que',concept:'Comparaison',description:"Expression de l'équivalence. Tel que pose une égalité de nature."},
    {sense:'à la manière de',concept:'Comparaison',description:"Indication de la façon d'être. À la manière de décrit le mode."},
    {sense:'semblable à',concept:'Comparaison',description:"Qualité de ressemblance. Semblable établit une proximité."},
  ]);log(r,'ka')

  // la (لا) — non, ne pas (négation)
  r=await ins('la',[
    {sense:'non',concept:'Négation',description:"Particule de négation absolue. Non refuse et rejette."},
    {sense:'ne pas',concept:'Négation',description:"Négation de l'action. Ne pas empêche l'accomplissement."},
    {sense:'aucun',concept:'Négation',description:"Négation de l'existence. Aucun nie la présence."},
    {sense:'sans',concept:'Absence',description:"Préposition de privation. Sans indique le manque."},
  ]);log(r,'la')

  // any (أني) — variante de ana, interrogatif
  r=await ins('any',[
    {sense:'quel',concept:'Interrogation',description:"Pronom interrogatif de choix. Quel demande une sélection."},
    {sense:'lequel',concept:'Interrogation',description:"Pronom relatif de désignation. Lequel identifie parmi plusieurs."},
    {sense:'comment',concept:'Manière',description:"Interrogation sur le mode. Comment cherche la façon."},
    {sense:'où que',concept:'Lieu',description:"Adverbe de lieu indéfini. Où que ne fixe pas de position."},
  ]);log(r,'any')

  // nnk (نون) — poisson, lettre Noun
  r=await ins('nnk',[
    {sense:'poisson',concept:'Poisson/Mer',description:"Animal aquatique. Le poisson vit dans l'eau et symbolise la vie marine."},
    {sense:'encrier',concept:'Écriture',description:"Récipient pour l'encre. L'encrier est l'outil de l'écrivain."},
    {sense:'lettre Noun',concept:'Lettre',description:"La lettre arabe ن. Le Noun est un signe de l'alphabet."},
    {sense:'baleine',concept:'Poisson/Mer',description:"Grand animal marin. La baleine est le plus grand des poissons."},
  ]);log(r,'nnk')

  // ant (أنت) — toi, tu
  r=await ins('ant',[
    {sense:'tu',concept:'Pronom/Personne',description:"Pronom personnel de la 2e personne. Tu désigne l'interlocuteur direct."},
    {sense:'toi',concept:'Pronom/Personne',description:"Forme tonique du pronom. Toi insiste sur la personne."},
    {sense:'vous',concept:'Pronom/Personne',description:"Pluriel ou forme de respect. Vous élargit ou élève l'interlocuteur."},
  ]);log(r,'ant')

  // hkm (حكم) — juger, gouverner, sagesse
  r=await ins('hkm',[
    {sense:'juger',concept:'Jugement/Décision',description:"Acte de trancher entre le vrai et le faux. Juger est un acte d'autorité intellectuelle."},
    {sense:'décider',concept:'Jugement/Décision',description:"Acte de fixer un choix définitif. Décider clôt le débat."},
    {sense:'gouverner',concept:'Autorité/Pouvoir',description:"Acte d'exercer le pouvoir. Gouverner dirige les affaires."},
    {sense:'régner',concept:'Autorité/Pouvoir',description:"État de celui qui détient le pouvoir suprême. Régner est gouverner en maître."},
    {sense:'être sage',concept:'Sagesse',description:"État de celui qui possède la connaissance juste. La sagesse guide le jugement."},
    {sense:'sagesse',concept:'Sagesse',description:"Connaissance qui permet de bien juger. La sagesse est le fondement du bon jugement."},
    {sense:'empêcher',concept:'Empêchement',description:"Acte de freiner ou d'arrêter. Empêcher bloque l'action."},
    {sense:'sentence',concept:'Jugement/Décision',description:"Résultat du jugement. La sentence est la décision prononcée."},
  ]);log(r,'hkm')

  // sjd (سجد) — se prosterner, adorer
  r=await ins('sjd',[
    {sense:'se prosterner',concept:'Prosternation/Adoration',description:"Acte de s'incliner jusqu'au sol en signe de soumission totale. La prosternation est le geste ultime d'humilité devant le Créateur."},
    {sense:'s\'incliner',concept:'Prosternation/Adoration',description:"Acte de baisser le corps en signe de respect. L'inclinaison est un mouvement vers le bas."},
    {sense:'adorer',concept:'Prosternation/Adoration',description:"Acte de vouer un culte. Adorer c'est reconnaître la suprématie absolue."},
    {sense:'mosquée',concept:'Lieu de prière',description:"Lieu où l'on se prosterne. La mosquée est l'espace de la prosternation."},
    {sense:'obéir',concept:'Prosternation/Adoration',description:"Acte de se soumettre à un ordre. Obéir est une prosternation de la volonté."},
  ]);log(r,'sjd')

  // bls (بلس) — désespérer, être muet
  r=await ins('bls',[
    {sense:'désespérer',concept:'Désespoir',description:"État de celui qui a perdu tout espoir. Le désespoir est l'absence totale d'attente positive."},
    {sense:'être dans le désarroi',concept:'Désespoir',description:"État de confusion et d'impuissance. Le désarroi est un désespoir actif."},
    {sense:'être réduit au silence',concept:'Silence/Mutisme',description:"État de celui qui ne peut plus parler. Le silence forcé est un désespoir de la parole."},
    {sense:'Iblis',concept:'Diable',description:"Nom du diable. Iblis est celui qui a désespéré de la miséricorde divine."},
    {sense:'être consterné',concept:'Désespoir',description:"État de stupeur face au malheur. La consternation est un désespoir soudain."},
  ]);log(r,'bls')

  // aby (أبي) — refuser, père
  r=await ins('aby',[
    {sense:'refuser',concept:'Refus',description:"Acte de ne pas accepter. Refuser est un rejet volontaire."},
    {sense:'s\'abstenir',concept:'Refus',description:"Acte de ne pas faire. S'abstenir est un refus d'action."},
    {sense:'rejeter',concept:'Refus',description:"Acte de repousser. Rejeter éloigne ce qu'on ne veut pas."},
    {sense:'dédaigner',concept:'Refus',description:"Acte de mépriser en refusant. Dédaigner est un refus hautain."},
    {sense:'père',concept:'Parenté',description:"Celui qui engendre. Le père est l'origine de la lignée."},
  ]);log(r,'aby')

  console.log('\n=== Batch 24 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
