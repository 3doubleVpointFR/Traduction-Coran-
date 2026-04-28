const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1168, total = 2321

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

  // 1. krr (كرر) — répéter, revenir, détester, être noble
  r=await ins('krr',[
    {sense:'répéter',concept:'Répétition/Retour',description:"Acte de refaire ce qui a déjà été fait, de revenir au même point. La répétition est un cycle — elle est directionnelle vers le même point de départ. C'est un mouvement permanent qui renforce par la récurrence."},
    {sense:'revenir',concept:'Répétition/Retour',description:''},
    {sense:'détester',concept:'Aversion/Répugnance',description:"État intérieur de rejet profond face à ce qui répugne. L'aversion reste dans celui qui la ressent — c'est un jugement négatif permanent envers ce qui est détesté. Détester c'est repousser par l'âme."},
    {sense:'trouver répugnant',concept:'Aversion/Répugnance',description:''},
    {sense:'être noble',concept:'Noblesse/Générosité',description:"État de celui qui possède des qualités élevées et une nature généreuse. La noblesse est intérieure et permanente — elle caractérise l'être dans sa générosité et sa dignité."},
    {sense:'être généreux',concept:'Noblesse/Générosité',description:''},
  ]);log(r,'krr')

  // 2. hsr (حسر) — regretter, découvrir, épuiser
  r=await ins('hsr',[
    {sense:'regretter',concept:'Regret/Désolation',description:"État intérieur de douleur face à ce qui est perdu ou mal fait. Le regret est permanent dans l'âme tant que la cause demeure — il ronge celui qui le porte. C'est une émotion qui naît de la conscience de l'irréversible."},
    {sense:'être désolé',concept:'Regret/Désolation',description:''},
    {sense:'découvrir (ôter le voile)',concept:'Découvrement/Révélation',description:"Acte extérieur d'enlever ce qui couvre pour révéler ce qui est dessous. Le découvrement est directionnel — il retire la couverture et expose au regard. C'est ponctuel dans l'acte mais la chose reste découverte."},
    {sense:'épuiser',concept:'Épuisement',description:"État de ce qui a perdu toutes ses ressources. L'épuisement est un état permanent de vidage — il ne reste plus rien."},
    {sense:'être fatigué',concept:'Épuisement',description:''},
  ]);log(r,'hsr')

  // 3. fhš (فحش) — être obscène, indécence, turpitude
  r=await ins('fh\u0161',[
    {sense:'être obscène',concept:'Indécence/Turpitude',description:"État de ce qui dépasse les limites de la décence et choque par son excès. L'indécence est un excès permanent dans le mal — elle franchit les limites de ce qui est acceptable. La turpitude est ce qui est si laid et excessif que les gens s'en détournent."},
    {sense:'turpitude',concept:'Indécence/Turpitude',description:''},
    {sense:'acte immoral',concept:'Indécence/Turpitude',description:''},
    {sense:'excéder les limites',concept:'Indécence/Turpitude',description:''},
    {sense:'être avare',concept:'Divers',description:'L\'avarice comme excès dans la rétention — sens dérivé de l\'excès.'},
  ]);log(r,'fh\u0161')

  // 4. neq (نعق) — crier (berger), appeler le bétail
  r=await ins('neq',[
    {sense:'crier vers le bétail',concept:'Appel/Cri',description:"Acte extérieur de pousser des cris pour guider des animaux qui n'entendent que le son sans comprendre le sens. L'appel est directionnel — il sort du berger et atteint le troupeau. C'est un cri qui dirige sans être compris."},
    {sense:'appeler',concept:'Appel/Cri',description:''},
    {sense:'crier',concept:'Appel/Cri',description:''},
  ]);log(r,'neq')

  // 5. ndw (ندو) — appeler, inviter, assemblée, générosité
  r=await ins('ndw',[
    {sense:'appeler',concept:'Appel/Invitation',description:"Acte extérieur d'élever la voix pour attirer l'attention de quelqu'un ou le convier. L'appel sort de l'appelant et atteint l'appelé — c'est directionnel et ponctuel. Appeler c'est créer un pont vocal entre deux personnes."},
    {sense:'inviter',concept:'Appel/Invitation',description:''},
    {sense:'convoquer',concept:'Appel/Invitation',description:''},
    {sense:'assemblée (nadi)',concept:'Assemblée/Réunion',description:"Lieu où les gens se rassemblent pour délibérer. L'assemblée est un espace permanent de dialogue — les gens y sont appelés pour se réunir."},
    {sense:'être généreux',concept:'Divers',description:'La générosité comme qualité de celui qui est appelé noble.'},
  ]);log(r,'ndw')

  // 6. akl (أكل) — manger, consommer, dévorer
  r=await ins('akl',[
    {sense:'manger',concept:'Alimentation/Consommation',description:"Acte fondamental d'introduire la nourriture dans le corps pour se sustenter. L'alimentation est directionnelle de l'extérieur vers l'intérieur — on prend du monde et on l'intègre en soi. C'est un acte ponctuel mais vital et récurrent."},
    {sense:'consommer',concept:'Alimentation/Consommation',description:''},
    {sense:'dévorer',concept:'Alimentation/Consommation',description:''},
    {sense:'nourriture',concept:'Alimentation/Consommation',description:''},
    {sense:'consumer (le feu mange)',concept:'Destruction/Érosion',description:"Processus de disparition progressive par absorption. La consummation détruit ce qu'elle touche — c'est directionnel et irréversible. Le feu qui mange et l'usure qui ronge."},
    {sense:'user',concept:'Destruction/Érosion',description:''},
  ]);log(r,'akl')

  // 7. btn (بطن) — ventre, intérieur, caché, clan
  r=await ins('btn',[
    {sense:'ventre',concept:'Intériorité/Profondeur',description:"La partie intérieure du corps, ce qui est caché et protégé. Le ventre est le lieu de la vie cachée — il contient ce qui n'est pas visible de l'extérieur. L'intériorité est permanente et secrète."},
    {sense:'intérieur',concept:'Intériorité/Profondeur',description:''},
    {sense:'caché',concept:'Intériorité/Profondeur',description:''},
    {sense:'sens caché (batin)',concept:'Intériorité/Profondeur',description:''},
    {sense:'clan',concept:'Lignée/Subdivision',description:"Sous-groupe d'une tribu, les gens qui partagent les mêmes entrailles d'origine. Le clan est un lien permanent de parenté."},
    {sense:'doublure',concept:'Divers',description:'Ce qui est à l\'intérieur du vêtement — le côté caché.'},
  ]);log(r,'btn')

  // 8. xnzr (خنزر) — porc
  r=await ins('xnzr',[
    {sense:'porc',concept:'Animal/Interdit',description:"Animal domestique considéré comme impur dans la loi divine. Le porc est un interdit permanent — sa consommation est prohibée. L'interdit alimentaire est un marqueur de l'obéissance aux prescriptions divines."},
    {sense:'porcin',concept:'Animal/Interdit',description:''},
  ]);log(r,'xnzr')

  // 9. bghy (بغي) — désirer, chercher, transgresser, prostitution
  r=await ins('bghy',[
    {sense:'chercher',concept:'Recherche/Quête',description:"Acte de se mettre en mouvement pour trouver ce que l'on veut. La recherche est directionnelle — elle part du chercheur vers l'objet cherché. C'est un état permanent tant que l'objet n'est pas trouvé."},
    {sense:'désirer',concept:'Recherche/Quête',description:''},
    {sense:'transgresser',concept:'Transgression/Injustice',description:"Acte de dépasser les limites du droit et de l'équité. La transgression sort du transgresseur et atteint celui qui en souffre — c'est directionnel et injuste. Le baghy est l'excès dans la quête qui devient oppression."},
    {sense:'oppression',concept:'Transgression/Injustice',description:''},
    {sense:'injustice',concept:'Transgression/Injustice',description:''},
    {sense:'prostitution',concept:'Divers',description:'Sens dérivé de la transgression morale — dépasser les limites de la pudeur.'},
  ]);log(r,'bghy')

  // 10. ewd (عود) — revenir, retourner, bois, habitude
  r=await ins('ewd',[
    {sense:'revenir',concept:'Retour/Répétition',description:"Acte de reprendre le chemin vers le point de départ. Le retour est directionnel — il ramène d'où l'on vient. C'est un mouvement qui boucle un cycle et peut devenir permanent s'il se répète en habitude."},
    {sense:'retourner',concept:'Retour/Répétition',description:''},
    {sense:'habitude',concept:'Retour/Répétition',description:''},
    {sense:'bois',concept:'Bois/Matière',description:"Matière solide et durable qui vient de l'arbre. Le bois est permanent dans sa résistance — il sert de support, de bâton et de construction."},
    {sense:'bâton',concept:'Bois/Matière',description:''},
    {sense:'luth (oud)',concept:'Divers',description:'Instrument de musique en bois — l\'objet qui revient (les cordes vibrent et reviennent).'},
  ]);log(r,'ewd')

  console.log('\n=== Batch 158 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
