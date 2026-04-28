const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 227, total = 2321

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

  // kbr (كبر) — être grand, s'enorgueillir, vieillir
  r=await ins('kbr',[
    {sense:'être grand',concept:'Grandeur/Importance',description:"État de ce qui dépasse la mesure ordinaire. La grandeur est une élévation en taille ou en valeur."},
    {sense:'grandir',concept:'Grandeur/Importance',description:"Acte de devenir plus grand. Grandir est un mouvement vers le haut."},
    {sense:'être important',concept:'Grandeur/Importance',description:"État de ce qui a du poids. L'importance est une grandeur de valeur."},
    {sense:'s\'enorgueillir',concept:'Orgueil',description:"Acte de se considérer comme grand. L'orgueil est une grandeur illégitime que l'on s'attribue."},
    {sense:'orgueil',concept:'Orgueil',description:"État de celui qui se croit supérieur. L'orgueil est une fausse grandeur."},
    {sense:'vieillir',concept:'Âge',description:"Acte de prendre de l'âge. Vieillir c'est grandir en temps."},
    {sense:'aîné',concept:'Âge',description:"Celui qui est plus grand en âge. L'aîné a grandi avant les autres."},
    {sense:'magnifier',concept:'Grandeur/Importance',description:"Acte de proclamer la grandeur. Magnifier élève par la parole."},
  ]);log(r,'kbr')

  // zll (زلل) — glisser, faillir, erreur
  r=await ins('zll',[
    {sense:'glisser',concept:'Glissement/Erreur',description:"Acte de perdre l'appui. Glisser est un mouvement non contrôlé."},
    {sense:'trébucher',concept:'Glissement/Erreur',description:"Acte de perdre l'équilibre. Trébucher est une chute évitée de justesse."},
    {sense:'faillir',concept:'Glissement/Erreur',description:"Acte de manquer à son devoir. Faillir est un glissement moral."},
    {sense:'commettre une erreur',concept:'Glissement/Erreur',description:"Acte de s'écarter du juste. L'erreur est un glissement de la pensée."},
    {sense:'faute',concept:'Glissement/Erreur',description:"Résultat du faux pas. La faute est ce qui reste après le glissement."},
    {sense:'pur et clair',concept:'Divers',description:"État de ce qui coule sans obstacle. La pureté est un écoulement sans accroc."},
  ]);log(r,'zll')

  // shytn (شيطن) — Satan, diable, s'éloigner
  r=await ins('shytn',[
    {sense:'Satan',concept:'Diable/Égarement',description:"L'ennemi qui égare. Satan est celui qui éloigne du chemin droit."},
    {sense:'diable',concept:'Diable/Égarement',description:"Être maléfique qui pousse au mal. Le diable est l'adversaire."},
    {sense:'s\'éloigner',concept:'Éloignement',description:"Acte de s'écarter. S'éloigner c'est mettre de la distance."},
    {sense:'être brûlé',concept:'Châtiment',description:"État de ce qui est consumé par le feu. Le feu est le châtiment."},
    {sense:'rebelle',concept:'Rébellion',description:"Celui qui refuse l'obéissance. Le rebelle s'éloigne de l'autorité."},
  ]);log(r,'shytn')

  // lna (لنا) — pour nous, à nous
  r=await ins('lna',[
    {sense:'pour nous',concept:'Attribution',description:"Préposition de destination. Pour nous indique le bénéficiaire."},
    {sense:'à nous',concept:'Possession',description:"Préposition de possession. À nous marque l'appartenance."},
    {sense:'nous avons',concept:'Possession',description:"Expression de possession. Nous avons indique ce qui nous appartient."},
  ]);log(r,'lna')

  // khrj (خرج) — sortir, extraire, faire sortir
  r=await ins('khrj',[
    {sense:'sortir',concept:'Sortie/Extérieur',description:"Acte de passer de l'intérieur vers l'extérieur. Sortir est un mouvement vers le dehors."},
    {sense:'faire sortir',concept:'Sortie/Extérieur',description:"Acte de provoquer la sortie. Faire sortir est une action sur l'autre."},
    {sense:'extraire',concept:'Extraction',description:"Acte de tirer de l'intérieur. Extraire sort ce qui était enfoui."},
    {sense:'expulser',concept:'Expulsion',description:"Acte de forcer la sortie. Expulser chasse violemment."},
    {sense:'production',concept:'Production',description:"Ce qui sort du travail. La production est le résultat de l'extraction."},
    {sense:'tribut',concept:'Divers',description:"Ce qui sort vers le pouvoir. Le tribut est une extraction forcée."},
  ]);log(r,'khrj')

  // hbt (هبط) — descendre, baisser
  r=await ins('hbt',[
    {sense:'descendre',concept:'Descente',description:"Acte d'aller vers le bas. Descendre est le mouvement opposé à monter."},
    {sense:'baisser',concept:'Descente',description:"Acte de réduire le niveau. Baisser diminue la hauteur."},
    {sense:'tomber',concept:'Descente',description:"Acte de chuter. Tomber est une descente rapide et non contrôlée."},
    {sense:'s\'humilier',concept:'Humiliation',description:"Acte de s'abaisser moralement. S'humilier est une descente volontaire."},
    {sense:'dégrader',concept:'Dégradation',description:"Acte de faire baisser la qualité. Dégrader est une descente de valeur."},
  ]);log(r,'hbt')

  // edw (عدو) — ennemi, courir, transgression
  r=await ins('edw',[
    {sense:'ennemi',concept:'Hostilité/Inimitié',description:"Celui qui veut du mal. L'ennemi est l'adversaire actif."},
    {sense:'hostilité',concept:'Hostilité/Inimitié',description:"État de celui qui est contre. L'hostilité est l'attitude de l'ennemi."},
    {sense:'courir',concept:'Course/Vitesse',description:"Acte de se déplacer rapidement. Courir c'est aller vite vers ou contre."},
    {sense:'transgresser',concept:'Transgression',description:"Acte de dépasser les limites. Transgresser va au-delà du permis."},
    {sense:'injustice',concept:'Transgression',description:"Acte de dépasser le droit. L'injustice est une transgression morale."},
    {sense:'agression',concept:'Hostilité/Inimitié',description:"Acte d'attaquer. L'agression est l'hostilité en action."},
  ]);log(r,'edw')

  // lkm (لكم) — pour vous, à vous
  r=await ins('lkm',[
    {sense:'pour vous',concept:'Attribution',description:"Préposition de destination. Pour vous indique le bénéficiaire pluriel."},
    {sense:'à vous',concept:'Possession',description:"Préposition de possession. À vous marque l'appartenance plurielle."},
    {sense:'vous avez',concept:'Possession',description:"Expression de possession. Vous avez indique ce qui vous appartient."},
  ]);log(r,'lkm')

  // qrr (قرر) — être stable, froid, établir
  r=await ins('qrr',[
    {sense:'être stable',concept:'Stabilité/Établissement',description:"État de ce qui ne bouge pas. La stabilité est l'absence de mouvement."},
    {sense:'s\'établir',concept:'Stabilité/Établissement',description:"Acte de se fixer en place. S'établir crée la stabilité."},
    {sense:'être froid',concept:'Froid',description:"État de basse température. Le froid est l'absence de chaleur."},
    {sense:'rafraîchir',concept:'Froid',description:"Acte de rendre frais. Rafraîchir apporte le froid."},
    {sense:'avouer',concept:'Aveu',description:"Acte de reconnaître la vérité. Avouer stabilise la parole sur le vrai."},
    {sense:'décider',concept:'Décision',description:"Acte de fixer un choix. Décider établit une position stable."},
  ]);log(r,'qrr')

  // mte (متع) — jouir, faire profiter, bien temporel
  r=await ins('mte',[
    {sense:'jouir',concept:'Jouissance/Profit',description:"Acte de tirer du plaisir. Jouir c'est profiter de ce qu'on a."},
    {sense:'faire profiter',concept:'Jouissance/Profit',description:"Acte de donner la jouissance à l'autre. Faire profiter est un don de plaisir."},
    {sense:'bien temporel',concept:'Bien/Provision',description:"Ce dont on profite un temps. Le bien temporel passe et ne dure pas."},
    {sense:'provision',concept:'Bien/Provision',description:"Ce qui permet de subsister. La provision est un bien pour plus tard."},
    {sense:'prolonger',concept:'Durée',description:"Acte d'étendre dans le temps. Prolonger fait durer la jouissance."},
  ]);log(r,'mte')

  console.log('\n=== Batch 25 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
