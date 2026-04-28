const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1488, total = 2321

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

  // 1. qlm (قلم) — calame, écrire, tailler
  r=await ins('qlm',[
    {sense:'calame',concept:'Écriture/Instrument',description:"Le roseau taillé pour écrire, l'instrument qui fixe la parole sur le support. Le calame est permanent dans sa fonction — il est le moyen par lequel la pensée invisible devient mot visible. Le qalam est le premier instrument de la création selon le Coran."},
    {sense:'écrire',concept:'Écriture/Instrument',description:''},
    {sense:'tailler',concept:'Divers',description:'Acte de couper le roseau pour le rendre apte à écrire.'},
  ]);log(r,'qlm')

  // 2. xSm (خصم) — variante de ksm (adversaire)
  r=await ins('xSm',[
    {sense:'adversaire',concept:'Adversité/Litige',description:"Celui qui s'oppose dans un conflit. L'adversité est bidirectionnelle — les deux parties s'opposent mutuellement."},
    {sense:'disputer',concept:'Adversité/Litige',description:''},
  ]);log(r,'xSm')

  // 3. msh (مسح) — essuyer, passer la main, oindre, Messie
  r=await ins('msh',[
    {sense:'essuyer',concept:'Essuyage/Onction',description:"Acte extérieur de passer la main sur une surface pour la nettoyer ou la bénir. L'essuyage est directionnel — il va de la main vers la surface touchée. C'est un acte de purification ou de bénédiction selon le contexte."},
    {sense:'passer la main sur',concept:'Essuyage/Onction',description:''},
    {sense:'oindre',concept:'Essuyage/Onction',description:''},
    {sense:'Messie (masih)',concept:'Titre/Nom',description:"Titre de Jésus signifiant celui qui est oint, celui qui bénit par le toucher. Le Messie est permanent dans son titre — il est le béni par excellence."},
    {sense:'voyager',concept:'Divers',description:'Parcourir la terre — passer la main sur le sol en marchant.'},
  ]);log(r,'msh')

  // 4. rmz (رمز) — faire signe, symbole, allusion
  r=await ins('rmz',[
    {sense:'faire signe',concept:'Signe/Symbole',description:"Acte de communiquer sans paroles, par un geste ou un regard. Le signe sort du signifiant et atteint celui qui doit comprendre — c'est directionnel et subtil. Le symbole est un signe permanent qui porte un sens au-delà de sa forme."},
    {sense:'symbole',concept:'Signe/Symbole',description:''},
    {sense:'allusion',concept:'Signe/Symbole',description:''},
  ]);log(r,'rmz')

  // 5. eshw (عشو) — être aveugle la nuit, vue faible, soir
  r=await ins('eshw',[
    {sense:'être aveugle la nuit',concept:'Aveuglement/Obscurité',description:"État de celui qui ne voit pas dans l'obscurité. L'aveuglement nocturne est un état permanent chez celui qui en souffre — il rend incapable de voir quand la lumière manque. Au figuré, se détourner du rappel de Dieu c'est devenir aveugle."},
    {sense:'vue faible',concept:'Aveuglement/Obscurité',description:''},
    {sense:'soir',concept:'Divers',description:'Le moment où la vue s\'affaiblit — le crépuscule.'},
  ]);log(r,'eshw')

  // 6. enw (عنو) — se soumettre, être humble, s'humilier
  r=await ins('enw',[
    {sense:'se soumettre',concept:'Soumission/Humilité',description:"État de celui qui baisse la tête et accepte l'autorité d'un autre. La soumission est un mouvement vers le bas — elle est l'acceptation permanente de sa position face à ce qui est supérieur."},
    {sense:'être humble',concept:'Soumission/Humilité',description:''},
    {sense:'s\'humilier',concept:'Soumission/Humilité',description:''},
  ]);log(r,'enw')

  // 7. šaa (شاء) — vouloir, décider
  r=await ins('\u0161aa',[
    {sense:'vouloir',concept:'Volonté/Décision',description:"Acte intérieur de décider librement ce qui doit être. La volonté est la faculté suprême qui choisit — elle est permanente dans sa souveraineté. La mashia divine est la volonté absolue qui ne peut être contredite."},
    {sense:'décider',concept:'Volonté/Décision',description:''},
    {sense:'volonté divine',concept:'Volonté/Décision',description:''},
  ]);log(r,'\u0161aa')

  // 8. tyn (طين) — argile, boue
  r=await ins('tyn',[
    {sense:'argile',concept:'Argile/Matière première',description:"La terre mêlée d'eau dont l'homme a été créé. L'argile est la matière première de la création humaine — elle est malléable et prend la forme que le Créateur lui donne. L'argile est le lien permanent entre l'homme et la terre."},
    {sense:'boue',concept:'Argile/Matière première',description:''},
    {sense:'terre mouillée',concept:'Argile/Matière première',description:''},
  ]);log(r,'tyn')

  // 9. nfx (نفخ) — souffler, insuffler
  r=await ins('nfx',[
    {sense:'souffler',concept:'Souffle/Insufflation',description:"Acte de projeter de l'air par la bouche vers quelque chose. Le souffle sort de celui qui souffle et atteint ce qui reçoit — c'est directionnel et créateur. L'insufflation divine est le souffle qui donne la vie à l'argile — c'est l'acte par lequel le mort devient vivant."},
    {sense:'insuffler',concept:'Souffle/Insufflation',description:''},
    {sense:'souffler dans la trompette',concept:'Souffle/Insufflation',description:''},
    {sense:'gonfler',concept:'Divers',description:'Remplir d\'air — sens concret du souffle qui enfle.'},
  ]);log(r,'nfx')

  // 10. ekm (عكم) — variante, lier, attacher un bagage
  r=await ins('ekm',[
    {sense:'lier',concept:'Attachement/Ligature',description:"Acte de fixer solidement quelque chose pour qu'il ne bouge pas. La ligature sort de celui qui lie et atteint ce qui est lié — c'est directionnel et crée un état permanent d'attachement."},
    {sense:'attacher un bagage',concept:'Attachement/Ligature',description:''},
  ]);log(r,'ekm')

  console.log('\n=== Batch 190 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
