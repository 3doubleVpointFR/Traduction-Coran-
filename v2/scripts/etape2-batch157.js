const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1158, total = 2321

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

  // 1. jrw (جرو) — couler, tirer, courir, cours d'eau
  r=await ins('jrw',[
    {sense:'couler',concept:'Écoulement/Flux',description:"Mouvement continu d'un liquide ou d'un événement qui avance sans s'arrêter. L'écoulement est directionnel et permanent — il va de la source vers l'aval. Ce qui coule ne revient pas en arrière, il suit son cours naturel."},
    {sense:'cours d\'eau',concept:'Écoulement/Flux',description:''},
    {sense:'courir',concept:'Écoulement/Flux',description:''},
    {sense:'avoir cours (loi)',concept:'Écoulement/Flux',description:''},
    {sense:'tirer',concept:'Traction',description:"Acte extérieur d'exercer une force pour déplacer quelque chose vers soi. La traction est directionnelle — elle sort de celui qui tire et atteint ce qui est tiré."},
  ]);log(r,'jrw')

  // 2. nfa (نفع) — être utile, profiter, avantage
  r=await ins('nfa',[
    {sense:'être utile',concept:'Utilité/Profit',description:"État de ce qui apporte un avantage à celui qui l'utilise. L'utilité est une qualité permanente de ce qui sert — elle sort de la chose utile et atteint celui qui en bénéficie. Ce qui est utile contribue au bien-être et à l'accomplissement."},
    {sense:'profiter',concept:'Utilité/Profit',description:''},
    {sense:'avantage',concept:'Utilité/Profit',description:''},
    {sense:'servir',concept:'Utilité/Profit',description:''},
  ]);log(r,'nfa')

  // 3. bth (بثث) — disperser, répandre, divulguer, chagrin
  r=await ins('bth',[
    {sense:'disperser',concept:'Dispersion/Diffusion',description:"Acte de répandre dans toutes les directions ce qui était rassemblé ou caché. La dispersion sort de la source et atteint l'espace — c'est multidirectionnel. Ce qui est dispersé se propage et couvre un large territoire."},
    {sense:'répandre',concept:'Dispersion/Diffusion',description:''},
    {sense:'disséminer',concept:'Dispersion/Diffusion',description:''},
    {sense:'divulguer',concept:'Dispersion/Diffusion',description:''},
    {sense:'chagrin',concept:'Affliction intérieure',description:"État intérieur de tristesse profonde qui ne trouve pas de contenant et cherche à se répandre. Le chagrin est un débordement de l'âme — il reste dans celui qui le porte tant qu'il ne l'a pas exprimé."},
    {sense:'confier sa peine',concept:'Affliction intérieure',description:''},
  ]);log(r,'bth')

  // 4. dbb (دبب) — ramper, fourmiller, bête qui marche
  r=await ins('dbb',[
    {sense:'ramper',concept:'Reptation/Mouvement lent',description:"Mouvement au ras du sol, lent et continu, de ce qui n'a pas de pattes ou en a beaucoup. La reptation est directionnelle et horizontale — elle colle à la terre et avance pas à pas. C'est le mouvement fondamental de toute créature terrestre."},
    {sense:'fourmiller',concept:'Reptation/Mouvement lent',description:''},
    {sense:'bête qui marche sur terre (dabba)',concept:'Reptation/Mouvement lent',description:''},
    {sense:'se déplacer lentement',concept:'Reptation/Mouvement lent',description:''},
  ]);log(r,'dbb')

  // 5. srf (صرف) — détourner, changer, dépenser, conjuguer
  r=await ins('srf',[
    {sense:'détourner',concept:'Détournement/Changement',description:"Acte extérieur de faire changer de direction ou d'état. Le détournement sort de celui qui détourne et atteint ce qui est détourné — c'est directionnel. C'est un acte ponctuel qui change le cours des choses de façon durable."},
    {sense:'changer',concept:'Détournement/Changement',description:''},
    {sense:'éloigner',concept:'Détournement/Changement',description:''},
    {sense:'dépenser',concept:'Dépense/Usage',description:"Acte extérieur de donner de l'argent ou de l'effort en échange de quelque chose. La dépense sort de celui qui dépense et quitte son patrimoine — c'est directionnel et irréversible."},
    {sense:'conjuguer',concept:'Divers',description:'Décliner les formes d\'un mot — sens technique de la grammaire.'},
  ]);log(r,'srf')

  // 6. sxr (سخر) — moquer, asservir, soumettre
  r=await ins('sxr',[
    {sense:'se moquer',concept:'Moquerie/Dérision',description:"Acte extérieur de ridiculiser quelqu'un en le rabaissant par le rire. La moquerie sort du moqueur et atteint celui qui est moqué — c'est directionnel et dégradant. La dérision est un jugement qui refuse la dignité de l'autre."},
    {sense:'ridiculiser',concept:'Moquerie/Dérision',description:''},
    {sense:'tourner en dérision',concept:'Moquerie/Dérision',description:''},
    {sense:'asservir',concept:'Assujettissement/Soumission',description:"Acte de soumettre quelqu'un ou quelque chose à son service, de le mettre à disposition. L'assujettissement sort du maître et atteint ce qui est asservi — c'est directionnel et permanent. Asservir c'est mettre au service sans rétribution."},
    {sense:'soumettre à son service',concept:'Assujettissement/Soumission',description:''},
  ]);log(r,'sxr')

  // 7. sbb (سبب) — cause, corde, lien, moyen
  r=await ins('sbb',[
    {sense:'cause',concept:'Causalité/Moyen',description:"Ce qui produit un effet, le lien entre l'origine et la conséquence. La cause est permanente dans sa relation avec l'effet — tant que la cause existe, l'effet suit. La causalité est un enchaînement rationnel qui lie les événements."},
    {sense:'moyen',concept:'Causalité/Moyen',description:''},
    {sense:'corde',concept:'Lien/Connexion',description:"Ce qui relie deux choses entre elles et permet de passer de l'une à l'autre. La corde est un lien physique et permanent — elle connecte et maintient ensemble."},
    {sense:'lien',concept:'Lien/Connexion',description:''},
    {sense:'chemin',concept:'Lien/Connexion',description:''},
    {sense:'injurier',concept:'Divers',description:'Acte de parole offensante — sens dérivé de couper les liens.'},
  ]);log(r,'sbb')

  // 8. hll (حلل) — être licite, délier, descendre, résoudre
  r=await ins('hll',[
    {sense:'être licite',concept:'Licéité/Permission',description:"État de ce qui est autorisé et n'entraîne aucune faute. La licéité est un état permanent de la chose tant que rien ne l'interdit — elle est la liberté d'agir sans conséquence négative. Ce qui est halal est dénoué de tout interdit."},
    {sense:'être permis',concept:'Licéité/Permission',description:''},
    {sense:'rendre licite',concept:'Licéité/Permission',description:''},
    {sense:'délier',concept:'Dissolution/Libération',description:"Acte extérieur de défaire un nœud, de libérer ce qui était attaché. Le dénouement sort de celui qui délie et atteint ce qui était noué — c'est directionnel et libérateur. Délier c'est rendre possible ce qui était bloqué."},
    {sense:'résoudre',concept:'Dissolution/Libération',description:''},
    {sense:'descendre (en un lieu)',concept:'Installation',description:"Acte de poser ses affaires et de s'établir en un lieu. L'installation est directionnelle vers le sol — on descend pour rester."},
    {sense:'séjourner',concept:'Installation',description:''},
  ]);log(r,'hll')

  // 9. khatw (خطو) — pas, enjamber, marcher
  r=await ins('khatw',[
    {sense:'faire un pas',concept:'Marche/Progression',description:"Acte élémentaire de déplacer un pied après l'autre pour avancer. Le pas est directionnel et ponctuel — chaque pas est un acte individuel qui contribue à un déplacement permanent. Marcher c'est progresser pas à pas, mesurer la distance par ses propres pieds."},
    {sense:'enjamber',concept:'Marche/Progression',description:''},
    {sense:'pas (khutuwa)',concept:'Marche/Progression',description:''},
    {sense:'marcher',concept:'Marche/Progression',description:''},
  ]);log(r,'khatw')

  // 10. šytn (شيطن) — diable, satan, s'éloigner de la vérité
  r=await ins('\u0161ytn',[
    {sense:'diable (shaytan)',concept:'Égarement/Rébellion',description:"L'être qui s'est éloigné de la vérité et de la miséricorde divine par orgueil. Le shaytan est celui qui est éloigné — c'est un état permanent de rébellion et de distance par rapport à Dieu. Il pousse les autres à s'éloigner aussi — son action est directionnelle de lui vers ses victimes."},
    {sense:'s\'éloigner de la vérité',concept:'Égarement/Rébellion',description:''},
    {sense:'être rebelle',concept:'Égarement/Rébellion',description:''},
    {sense:'brûler (de colère)',concept:'Divers',description:'Sens lié à la racine shatana — être consumé par le feu intérieur de la rébellion.'},
  ]);log(r,'\u0161ytn')

  console.log('\n=== Batch 157 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
