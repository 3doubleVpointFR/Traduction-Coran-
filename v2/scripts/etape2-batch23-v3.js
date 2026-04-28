const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 207, total = 2321

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

  // 208. khsr (خسر) — perdre, être en perte
  r = await ins('khsr', [
    {sense:'perdre',concept:'Perte/Diminution',description:"Mouvement négatif par lequel quelque chose s'échappe de celui qui possédait. La perte est un acte ou un état directionnel qui va de l'intérieur vers l'extérieur — ce qui était à soi part vers le dehors. Elle peut être ponctuelle (perdre un objet) ou progressive (perdre ses forces). C'est un jugement rationnel sur le manque : on constate qu'on avait et qu'on n'a plus."},
    {sense:'subir une perte',concept:'Perte/Diminution',description:''},
    {sense:'être dans l\'erreur',concept:'Égarement',description:"État intérieur de déviation par rapport au vrai chemin ou à la vérité. L'égarement est permanent tant qu'on ne revient pas — il affecte l'orientation fondamentale de l'être. C'est un jugement rationnel sur la direction prise : l'égaré ne sait plus où est le bien, où est le vrai. L'égarement peut être choisi (refus de voir) ou subi (tromperie par autrui)."},
    {sense:'être trompé',concept:'Égarement',description:''},
    {sense:'faire périr',concept:'Destruction',description:"Acte extérieur directionnel qui cause la perte totale d'un être ou d'une chose. La destruction sort de l'agent destructeur et atteint ce qui est détruit — c'est ponctuel dans l'acte mais définitif dans le résultat. C'est l'anéantissement : ce qui existait cesse d'exister, ce qui avait forme perd toute forme. La destruction est le terme ultime de la perte."},
    {sense:'perdition',concept:'Destruction',description:''},
  ])
  log(r,'khsr',{'Perte/Diminution':"Mouvement directionnel de l'intérieur vers l'extérieur où quelque chose s'échappe de celui qui possédait. Peut être ponctuel ou progressif. Jugement rationnel sur le manque.",'Égarement':"État intérieur permanent de déviation. Jugement rationnel sur la direction — l'égaré ne sait plus où est le vrai.",'Destruction':"Acte extérieur directionnel causant la perte totale. Ponctuel mais définitif — l'anéantissement."})

  // 209. dhly (ذلي → ذل) — être humble, humilié
  r = await ins('dhly', [
    {sense:'être humble',concept:'Humilité/Abaissement',description:"État intérieur permanent de celui qui reconnaît sa petitesse devant ce qui le dépasse. L'humilité est un jugement rationnel sur sa propre place dans l'ordre des êtres — ce n'est pas une émotion subie mais une disposition choisie de l'âme qui se sait limitée. L'humble reste dans la conscience de sa finitude, il ne se gonfle pas au-delà de sa mesure."},
    {sense:'être humilié',concept:'Humilité/Abaissement',description:''},
    {sense:'s\'abaisser',concept:'Humilité/Abaissement',description:''},
    {sense:'être soumis',concept:'Soumission',description:"État de dépendance d'un être envers un plus puissant que lui. La soumission est directionnelle : elle va du soumis vers celui à qui il se soumet. Elle peut être intérieure (acceptation volontaire, reconnaissance de l'autorité légitime) ou seulement extérieure (obéissance contrainte sans adhésion du cœur). C'est un état qui peut être permanent (servitude) ou temporaire (obéissance circonstancielle)."},
    {sense:'être docile',concept:'Soumission',description:''},
    {sense:'méprisé',concept:'Divers',description:"Sens isolé sans lien sémantique direct avec les autres concepts de la racine."},
  ])
  log(r,'dhly',{'Humilité/Abaissement':"État intérieur permanent de reconnaissance de sa petitesse. Jugement rationnel choisi, pas émotion subie. L'humble connaît sa place.",'Soumission':"État directionnel de dépendance envers plus puissant. Peut être intérieur (acceptation) ou extérieur (contrainte). Permanent ou temporaire.",'Divers':"Sens isolé."})

  // 210. khlaq (خلق) — créer, nature, caractère
  r = await ins('khlaq', [
    {sense:'créer',concept:'Création/Formation',description:"Acte de faire exister ce qui n'existait pas, de donner l'être au néant. La création sort du créateur et produit la créature — c'est directionnel et ponctuel dans l'acte mais permanent dans le résultat (ce qui est créé demeure). C'est l'acte divin par excellence : seul Dieu crée à partir de rien. L'homme façonne, transforme, mais ne crée pas au sens absolu."},
    {sense:'façonner',concept:'Création/Formation',description:''},
    {sense:'mesurer',concept:'Création/Formation',description:''},
    {sense:'création',concept:'Création/Formation',description:''},
    {sense:'nature innée',concept:'Nature/Caractère',description:"Ce qui est inscrit dans l'être dès son origine et définit son essence propre. La nature est permanente et intérieure — c'est un état donné par la création, pas acquis par l'effort. Elle précède tout choix et toute expérience. C'est un jugement rationnel sur ce qu'un être est fondamentalement, avant ses accidents et ses circonstances."},
    {sense:'caractère',concept:'Nature/Caractère',description:''},
  ])
  log(r,'khlaq',{'Création/Formation':"Acte directionnel du créateur vers la créature, faire exister ce qui n'était pas. Ponctuel dans l'acte, permanent dans le résultat. Acte divin par excellence.",'Nature/Caractère':"État permanent intérieur inscrit dès l'origine. Donné par la création, pas acquis. Jugement rationnel sur l'essence."})

  // 211. stwy (سوي) — être égal, droit, niveau
  r = await ins('stwy', [
    {sense:'être égal',concept:'Égalité/Équilibre',description:"État de parité entre deux réalités comparées où aucune ne dépasse l'autre. L'égalité est un jugement rationnel permanent qui constate l'absence de différence pertinente — c'est relationnel (on est toujours égal à quelque chose) et objectif. L'égalité implique une mesure commune qui permet la comparaison."},
    {sense:'être de niveau',concept:'Égalité/Équilibre',description:''},
    {sense:'être droit',concept:'Rectitude',description:"État permanent de ce qui ne dévie pas de sa ligne propre, qui va directement vers son but. La droiture est une qualité intérieure à la chose — le chemin droit ne tourne pas, le jugement droit ne se laisse pas corrompre. Dans le sens moral, c'est l'absence d'égarement, l'alignement avec le vrai et le juste."},
    {sense:'s\'établir fermement',concept:'Établissement',description:"Acte de se fixer solidement en un lieu ou un état. L'établissement est directionnel vers la stabilité — c'est un mouvement ponctuel qui aboutit à un état permanent. S'établir c'est trouver sa place propre et y demeurer, cesser d'errer pour habiter."},
    {sense:'achever',concept:'Accomplissement',description:"Moment ponctuel où quelque chose atteint sa forme finale et complète. L'achèvement est l'instant où la chose devient égale à ce qu'elle devait être selon sa nature — rien n'y manque plus, rien n'y est de trop. C'est un jugement rationnel sur la complétude : le parfait est ce qui est achevé."},
    {sense:'atteindre la maturité',concept:'Accomplissement',description:''},
  ])
  log(r,'stwy',{'Égalité/Équilibre':"État permanent de parité entre réalités comparées. Jugement rationnel objectif et relationnel — on est égal à quelque chose.",'Rectitude':"État permanent de ce qui ne dévie pas. Qualité intérieure. Alignement avec le vrai.",'Établissement':"Acte directionnel vers la stabilité. Mouvement ponctuel vers état permanent.",'Accomplissement':"Moment ponctuel où la chose atteint sa forme complète. Jugement rationnel sur la complétude."})

  // 212. ana (أنى) — quand, comment, d'où
  r = await ins('ana', [
    {sense:'quand',concept:'Interrogation temporelle',description:"Particule qui interroge sur le moment où quelque chose se produit ou se produira. La question temporelle sort du questionneur vers l'inconnu du temps — elle cherche à situer un événement dans le passé, le présent ou le futur. C'est un acte ponctuel de parole qui vise la connaissance du temps."},
    {sense:'comment',concept:'Interrogation modale',description:"Particule qui interroge sur la manière dont quelque chose est ou se fait. Le comment est une question rationnelle qui sort vers l'extérieur pour comprendre le mode d'être ou le fonctionnement des choses — elle cherche l'explication du mécanisme, pas seulement le fait."},
    {sense:'d\'où',concept:'Interrogation spatiale',description:"Particule qui interroge sur l'origine spatiale ou causale de quelque chose. Le d'où est directionnel vers l'arrière, vers la source et le commencement — savoir d'où vient une chose c'est comprendre sa nature, sa légitimité, son fondement."},
    {sense:'où que ce soit',concept:'Généralité',description:"Indication de lieu totalement indéterminé qui nie l'importance du lieu particulier. C'est un état permanent d'indifférence spatiale — partout égale partout, le lieu spécifique n'affecte pas la vérité de ce qui est dit. La généralité spatiale universalise l'énoncé."},
  ])
  log(r,'ana',{'Interrogation temporelle':"Question ponctuelle sur le moment. Sort du questionneur vers l'inconnu du temps.",'Interrogation modale':"Question rationnelle sur la manière. Cherche l'explication du comment.",'Interrogation spatiale':"Question directionnelle vers l'origine. Comprendre d'où c'est comprendre pourquoi.",'Généralité':"État permanent d'indifférence au lieu. Universalise l'énoncé."})

  console.log('\n=== Batch 23 v3 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
