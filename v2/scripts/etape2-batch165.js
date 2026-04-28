const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1238, total = 2321

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

  // 1. jhd (جهد) — s'efforcer, lutter, serment solennel
  r=await ins('jhd',[
    {sense:'s\'efforcer',concept:'Effort/Lutte',description:"Acte de mobiliser toutes ses forces et ses capacités pour atteindre un but. L'effort est intérieur dans sa source et extérieur dans sa manifestation — il sort de celui qui lutte et s'exerce sur l'obstacle. Le jihad est l'effort maximal, permanent dans la volonté et ponctuel dans chaque acte."},
    {sense:'lutter',concept:'Effort/Lutte',description:''},
    {sense:'combattre dans le sentier de Dieu',concept:'Effort/Lutte',description:''},
    {sense:'serment solennel',concept:'Serment/Engagement',description:"Acte de jurer avec toute la force de sa conviction. Le serment est un engagement qui sort du jureur et lie sa parole — c'est directionnel et crée une obligation permanente."},
    {sense:'peine',concept:'Divers',description:'L\'épuisement qui résulte de l\'effort intense.'},
  ]);log(r,'jhd')

  // 2. rjw (رجو) — espérer, craindre, attendre
  r=await ins('rjw',[
    {sense:'espérer',concept:'Espoir/Attente',description:"État intérieur de celui qui attend un bien futur avec confiance. L'espoir est permanent dans l'âme tant que la cause d'espérer existe — il tourne le regard vers l'avenir avec optimisme. Espérer c'est voir un bien possible au-delà des difficultés présentes."},
    {sense:'attendre avec espoir',concept:'Espoir/Attente',description:''},
    {sense:'craindre',concept:'Espoir/Attente',description:''},
    {sense:'bord',concept:'Divers',description:'Le bord d\'un lieu — le côté vers lequel on se tourne.'},
  ]);log(r,'rjw')

  // 3. khmr (خمر) — vin, couvrir, fermenter, enivrer
  r=await ins('khmr',[
    {sense:'vin',concept:'Ivresse/Couverture',description:"Boisson qui couvre la raison et altère le jugement. L'ivresse est un état qui voile l'intelligence — le khamr est ce qui couvre l'esprit comme un voile couvre le visage. C'est un état temporaire mais qui empêche la lucidité tant qu'il dure."},
    {sense:'boisson enivrante',concept:'Ivresse/Couverture',description:''},
    {sense:'couvrir',concept:'Ivresse/Couverture',description:''},
    {sense:'fermenter',concept:'Ivresse/Couverture',description:''},
    {sense:'voile (khimar)',concept:'Voile/Protection',description:"Étoffe qui couvre la tête et protège. Le voile est une couverture permanente qui cache ce qui est en dessous — il protège et distingue."},
    {sense:'levain',concept:'Divers',description:'Ce qui fait lever la pâte par fermentation — lié au sens de transformation cachée.'},
  ]);log(r,'khmr')

  // 4. fkr (فكر) — penser, réfléchir, méditer
  r=await ins('fkr',[
    {sense:'penser',concept:'Réflexion/Méditation',description:"Acte intérieur de mobiliser l'esprit pour comprendre et analyser. La pensée est un mouvement de l'intelligence qui tourne autour d'un sujet — elle est permanente chez celui qui cherche à comprendre. Réfléchir c'est regarder une chose sous tous ses angles."},
    {sense:'réfléchir',concept:'Réflexion/Méditation',description:''},
    {sense:'méditer',concept:'Réflexion/Méditation',description:''},
    {sense:'considérer',concept:'Réflexion/Méditation',description:''},
  ]);log(r,'fkr')

  // 5. sdd (صدد) — détourner, empêcher, chemin
  r=await ins('sdd',[
    {sense:'détourner',concept:'Empêchement/Obstruction',description:"Acte extérieur de bloquer le passage ou de faire dévier quelqu'un de sa direction. L'empêchement sort de l'obstacle et atteint celui qui est bloqué — c'est directionnel et oppose une résistance. Empêcher c'est fermer le chemin devant celui qui veut avancer."},
    {sense:'empêcher',concept:'Empêchement/Obstruction',description:''},
    {sense:'bloquer le chemin',concept:'Empêchement/Obstruction',description:''},
    {sense:'se détourner',concept:'Empêchement/Obstruction',description:''},
    {sense:'face, côté',concept:'Divers',description:'Direction vers laquelle on fait face — lié au sens de chemin.'},
  ]);log(r,'sdd')

  // 6. zwl (زول) — cesser, disparaître, s'éloigner
  r=await ins('zwl',[
    {sense:'cesser',concept:'Cessation/Disparition',description:"Acte ou état de ne plus exister ou de ne plus agir. La cessation est un événement ponctuel qui crée un état permanent d'absence. Ce qui cesse disparaît — il n'est plus là où il était."},
    {sense:'disparaître',concept:'Cessation/Disparition',description:''},
    {sense:'s\'éloigner',concept:'Cessation/Disparition',description:''},
    {sense:'ne pas cesser (la zala)',concept:'Divers',description:'Construction qui signifie la permanence — ne pas cesser d\'être.'},
  ]);log(r,'zwl')

  // 7. hyd (حيض) — menstruation, couler
  r=await ins('hyd',[
    {sense:'menstruation',concept:'Menstruation/Flux',description:"Écoulement sanguin périodique chez la femme. Les menstrues sont un flux qui sort du corps à intervalles réguliers — c'est directionnel de l'intérieur vers l'extérieur. C'est un cycle permanent et naturel lié à la fertilité."},
    {sense:'avoir ses règles',concept:'Menstruation/Flux',description:''},
    {sense:'couler (sang)',concept:'Menstruation/Flux',description:''},
  ]);log(r,'hyd')

  // 8. ezl (عزل) — isoler, séparer, destituer
  r=await ins('ezl',[
    {sense:'isoler',concept:'Séparation/Isolation',description:"Acte extérieur de mettre à part ce qui était mêlé au groupe. L'isolation sort de celui qui sépare et atteint ce qui est isolé — c'est directionnel et crée un état de solitude. Isoler c'est couper le lien entre l'individu et le groupe."},
    {sense:'séparer',concept:'Séparation/Isolation',description:''},
    {sense:'destituer',concept:'Séparation/Isolation',description:''},
    {sense:'coït interrompu',concept:'Divers',description:'Sens physique de séparation — retirer avant l\'achèvement.'},
  ]);log(r,'ezl')

  // 9. nsaa (نسا) — femmes, oublier, reporter
  r=await ins('nsaa',[
    {sense:'femmes',concept:'Femmes/Féminin',description:"Le genre féminin de l'humanité, les compagnes et les mères. Les femmes sont un pilier permanent de la société — elles portent, nourrissent et éduquent. Le mot nisaa désigne le collectif féminin."},
    {sense:'épouses',concept:'Femmes/Féminin',description:''},
    {sense:'oublier',concept:'Oubli/Report',description:"Acte involontaire de perdre le souvenir de quelque chose. L'oubli est intérieur — il efface de la mémoire ce qui y était. C'est un état qui peut être ponctuel ou permanent."},
    {sense:'reporter',concept:'Oubli/Report',description:''},
  ]);log(r,'nsaa')

  // 10. ḫlt (خلط) — mélanger, mêler, fréquenter
  r=await ins('\u1E2Blt',[
    {sense:'mélanger',concept:'Mélange/Mixtion',description:"Acte extérieur de combiner des éléments différents en un tout. Le mélange unit ce qui était séparé — c'est bidirectionnel entre les éléments qui se combinent. Le mélange est permanent une fois fait — les composants ne se séparent plus facilement."},
    {sense:'mêler',concept:'Mélange/Mixtion',description:''},
    {sense:'confondre',concept:'Mélange/Mixtion',description:''},
    {sense:'fréquenter',concept:'Divers',description:'Se mêler aux gens — le mélange social.'},
  ]);log(r,'\u1E2Blt')

  console.log('\n=== Batch 165 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
