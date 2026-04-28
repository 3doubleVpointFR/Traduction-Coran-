const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 833, total = 2321

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

  // Skip entrées connues problématiques
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])
  r = await ins("ay'", [{sense:'signe',concept:'Signe',description:"Skip."}])

  // 847. bdn (بدن) — corps, corpulence
  r = await ins('bdn', [
    {sense:'corps',concept:'Corporéité/Matérialité',description:"La partie physique de l'être — le corps (badan) est l'enveloppe matérielle de l'âme. C'est permanent pendant la vie terrestre. Aujourd'hui Nous te sauvons dans ton corps (bibadanika). Pharaon noyé fut préservé comme signe. Le badan est ce qui reste après la mort de l'âme, témoignage muet. Le corps sera ressuscité avec l'âme au Jour du Jugement."},
    {sense:'corpulence',concept:'Corporéité/Matérialité',description:''},
    {sense:'chair',concept:'Corporéité/Matérialité',description:''},
  ])
  log(r,'bdn',{'Corporéité/Matérialité':"Enveloppe matérielle. Nous te sauvons dans ton corps. Témoignage de Pharaon."})

  // 848. šyya (شيء) — chose, quelque chose
  r = await ins('šyya', [
    {sense:'chose',concept:'Entité/Être',description:"Ce qui existe ou peut exister — la chose (shay') est tout ce qui a une réalité. C'est permanent comme catégorie ontologique. Quand Il veut une chose (shay'an), Il lui dit 'Sois'. Toute chose possible devient réelle par le kun divin. Rien (lâ shay') n'est semblable à Lui. Dieu transcende toutes les catégories, même celle de 'chose'. Chaque shay' est créé, Dieu seul est incréé."},
    {sense:'quelque chose',concept:'Entité/Être',description:''},
    {sense:'rien',concept:'Entité/Être',description:''},
  ])
  log(r,'šyya',{'Entité/Être':"Ce qui existe. Quand Il veut une chose. Rien n'est semblable à Lui."})

  // 849. dhat (ذوت) — essence, soi-même
  r = await ins('dhat', [
    {sense:'essence',concept:'Essence/Ipséité',description:"La nature propre d'une chose — dhât désigne l'essence, ce qui fait qu'une chose est ce qu'elle est. C'est permanent comme réalité métaphysique. Dieu est Dhû, Celui qui possède les attributs. Dhât al-shawk, celle aux épines. Les dhawât sont les essences, les natures profondes. Connaître la dhât de quelque chose c'est connaître sa vérité, au-delà des apparences."},
    {sense:'soi-même',concept:'Essence/Ipséité',description:''},
    {sense:'nature propre',concept:'Essence/Ipséité',description:''},
  ])
  log(r,'dhat',{'Essence/Ipséité':"Nature propre. Dhû: Celui qui possède. Connaître au-delà des apparences."})

  // 850. hzr (حظر) — interdire, enclos
  r = await ins('hzr', [
    {sense:'interdire',concept:'Interdiction/Clôture',description:"Empêcher l'accès à quelque chose — interdire (hazara) c'est mettre une barrière. C'est permanent comme statut juridique. Rien n'est interdit (mahzûran) dans le don de ton Seigneur. La générosité divine n'a pas de limites. Le hazîra est l'enclos, l'espace délimité et protégé. L'interdiction est une clôture morale qui protège de ce qui nuit."},
    {sense:'enclos',concept:'Interdiction/Clôture',description:''},
    {sense:'empêcher',concept:'Interdiction/Clôture',description:''},
  ])
  log(r,'hzr',{'Interdiction/Clôture':"Mettre une barrière. Rien n'est interdit dans le don divin. Clôture protectrice."})

  // 851. kly (كلي) — tout, totalité
  r = await ins('kly', [
    {sense:'tout',concept:'Totalité/Universalité',description:"L'ensemble sans exception — kull désigne la totalité, chaque élément sans reste. C'est permanent comme quantificateur. Toute (kullu) âme goûtera la mort. L'universalité de la mort rappelle l'universalité du jugement. Kull shay' halîk, toute chose est périssable sauf Sa Face. La totalité créée s'efface devant l'Éternel. Seul Dieu échappe au kull de la finitude."},
    {sense:'totalité',concept:'Totalité/Universalité',description:''},
    {sense:'chaque',concept:'Totalité/Universalité',description:''},
  ])
  log(r,'kly',{'Totalité/Universalité':"L'ensemble sans exception. Toute âme goûtera la mort. Toute chose est périssable."})

  console.log('\n=== Batch 116 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
