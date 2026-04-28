const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1448, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('SKIP '+key+': not found'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('SKIP '+key+': already done'); done++; return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;const c=r.concepts;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+c.length+' concepts ('+c.join(', ')+') — reste '+(total-done))} }

async function run() {
  let r

  // 1. dnb (ذنب) — péché, faute, queue
  r=await ins('dnb',[
    {sense:'péché',concept:'Péché/Faute',description:"Acte qui entraîne une culpabilité et une conséquence négative. Le péché est un acte ponctuel qui crée une dette permanente dans l'âme — il est ce qui suit celui qui le commet comme la queue suit l'animal."},
    {sense:'faute',concept:'Péché/Faute',description:''},
    {sense:'queue',concept:'Divers',description:'Ce qui traîne derrière — sens concret premier dont dérive le péché comme ce qui suit et poursuit.'},
  ]);log(r,'dnb')

  // 2. ldhy (لذي → لذة) — plaisir, jouissance, délice
  r=await ins('ldhy',[
    {sense:'plaisir',concept:'Plaisir/Jouissance',description:"État intérieur de satisfaction et de bonheur face à ce qui est agréable. Le plaisir est un état qui reste dans celui qui le ressent — il est la récompense sensorielle ou spirituelle de ce qui est bon. Le délice est permanent au paradis et éphémère en ce monde."},
    {sense:'jouissance',concept:'Plaisir/Jouissance',description:''},
    {sense:'délice',concept:'Plaisir/Jouissance',description:''},
  ]);log(r,'ldhy')

  // 3. m a y (ماي → ماء) — eau (variante)
  r=await ins('m a y',[
    {sense:'eau',concept:'Eau/Liquide',description:"Substance liquide source de toute vie. L'eau est permanente dans sa nature — elle coule, purifie et fait vivre."},
    {sense:'liquide',concept:'Eau/Liquide',description:''},
  ]);log(r,'m a y')

  // 4. a n n (أنن → إنّ) — certes, en vérité
  r=await ins('a n n',[
    {sense:'certes',concept:'Certitude/Emphase',description:"Particule qui renforce l'assertion et pose une vérité avec conviction. Le inna affirme avec force ce qui suit — c'est un acte rationnel de déclaration qui ne laisse pas de place au doute."},
    {sense:'en vérité',concept:'Certitude/Emphase',description:''},
    {sense:'que (conjonction)',concept:'Certitude/Emphase',description:''},
  ]);log(r,'a n n')

  // 5. shhw (شهو) — désirer, convoiter, passion
  r=await ins('shhw',[
    {sense:'désirer',concept:'Désir/Convoitise',description:"Mouvement intérieur de l'âme vers ce qui attire les sens. Le désir est un état qui tire l'être vers l'objet convoité — c'est directionnel de l'intérieur vers l'extérieur. La shahwa est la passion des sens qui peut aveugler le jugement."},
    {sense:'convoiter',concept:'Désir/Convoitise',description:''},
    {sense:'passion (shahwa)',concept:'Désir/Convoitise',description:''},
    {sense:'chose désirée',concept:'Désir/Convoitise',description:''},
  ]);log(r,'shhw')

  // 6. fdd (فضض) — disperser, argent, rompre
  r=await ins('fdd',[
    {sense:'disperser',concept:'Dispersion/Rupture',description:"Acte de séparer ce qui était rassemblé en le faisant partir dans toutes les directions. La dispersion est multidirectionnelle — elle brise l'unité et crée des fragments. Ce qui est dispersé perd sa cohésion."},
    {sense:'rompre un rassemblement',concept:'Dispersion/Rupture',description:''},
    {sense:'argent (fiddha)',concept:'Métal/Valeur',description:"Le métal blanc et brillant qui sert de monnaie. L'argent est permanent dans sa valeur — il est le moyen d'échange entre les gens."},
    {sense:'briser',concept:'Dispersion/Rupture',description:''},
  ]);log(r,'fdd')

  // 7. khl (خيل) — cheval, imaginer, sembler
  r=await ins('khl',[
    {sense:'cheval',concept:'Cheval/Cavalerie',description:"Animal noble et rapide utilisé pour le combat et le transport. Le cheval est un symbole permanent de force, de vitesse et de noblesse — il porte son cavalier au combat et le rend plus puissant."},
    {sense:'cavalerie',concept:'Cheval/Cavalerie',description:''},
    {sense:'imaginer',concept:'Imagination/Apparence',description:"Acte intérieur de se représenter quelque chose qui n'est pas présent. L'imagination crée des images dans l'esprit — elle peut tromper en faisant paraître réel ce qui ne l'est pas."},
    {sense:'sembler',concept:'Imagination/Apparence',description:''},
    {sense:'être orgueilleux',concept:'Divers',description:'L\'orgueil comme attitude du cavalier qui se croit supérieur.'},
  ]);log(r,'khl')

  // 8. awb (ءوب) — revenir, se repentir
  r=await ins('awb',[
    {sense:'revenir',concept:'Retour/Repentir',description:"Acte de reprendre le chemin vers le point de départ, de retourner vers Dieu. Le retour est directionnel — il ramène celui qui s'était éloigné. L'awwab est celui qui revient sans cesse vers Dieu, dont le retour est permanent."},
    {sense:'se repentir',concept:'Retour/Repentir',description:''},
    {sense:'retourner',concept:'Retour/Repentir',description:''},
  ]);log(r,'awb')

  // 9. lqt (لقط) — ramasser, cueillir, trouver
  r=await ins('lqt',[
    {sense:'ramasser',concept:'Ramassage/Collecte',description:"Acte extérieur de prendre ce qui est au sol ou ce qui est dispersé. Le ramassage est directionnel du sol vers la main — c'est un acte ponctuel de collecte. Ramasser c'est récupérer ce qui était abandonné ou tombé."},
    {sense:'cueillir',concept:'Ramassage/Collecte',description:''},
    {sense:'trouver',concept:'Ramassage/Collecte',description:''},
  ]);log(r,'lqt')

  // 10. ebr (عبر) — traverser, interpréter, leçon, larmes
  r=await ins('ebr',[
    {sense:'traverser',concept:'Traversée/Passage',description:"Acte de passer d'un côté à l'autre. La traversée est directionnelle — elle franchit un obstacle ou une frontière. Traverser c'est laisser un état pour en atteindre un autre."},
    {sense:'interpréter (un rêve)',concept:'Interprétation/Leçon',description:"Acte de traverser l'apparence d'un rêve pour atteindre sa signification cachée. L'interprétation est un passage du visible vers l'invisible — elle cherche le sens au-delà de la forme."},
    {sense:'leçon (ibra)',concept:'Interprétation/Leçon',description:''},
    {sense:'pleurer',concept:'Divers',description:'Les larmes qui traversent les yeux — l\'émotion qui déborde.'},
  ]);log(r,'ebr')

  console.log('\n=== Batch 186 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
