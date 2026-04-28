const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 322;
const ROOTS = {qul:'ق و ل', khf:'خ ف ى', sdr:'ص د ر', bdw:'ب د و', elm:'ع ل م', alh:'ا ل ه', smw:'س م و', ard:'أ ر ض', kll:'ك ل ل', šya:'ش ي ء', qdr:'ق د ر'};

(async()=>{
  // Delete any existing VWA for this verse first
  const {error:delErr} = await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
  console.log('Delete existing VWA:', delErr ? 'ERROR: '+delErr.message : 'OK');

  // VWA entries (correct schema: verse_id, word_key, root, position, sense_chosen, analysis_axes)
  const vwaEntries = [
    // pos=1: qul
    {verse_id:VERSE_ID, word_key:'qul', root:ROOTS.qul, position:1, sense_chosen:'dire',
     analysis_axes:{concept_chosen:'Parole/Énonciation',concepts:{
       'Parole/Énonciation':{status:'retenu',senses:['dire','parler','parole','affirmer'],
         proof_ctx:"L'impératif qul est l'acte direct de proférer un message — la parole sort du locuteur et atteint l'auditeur. Le contexte commande la transmission d'un avertissement divin."},
       'Avis/Jugement':{status:'probable',senses:['opinion','prétendre'],
         proof_ctx:"L'opinion est un sous-type intérieur de la parole, mais l'impératif commande un acte de profération extérieure, pas une formation d'opinion."}
     }}},

    // pos=3: tukhfū
    {verse_id:VERSE_ID, word_key:'khf', root:ROOTS.khf, position:3, sense_chosen:'cacher',
     analysis_axes:{concept_chosen:'Dissimulation/Secret',concepts:{
       'Dissimulation/Secret':{status:'retenu',senses:['cacher','être secret','dissimuler','être imperceptible','être latent','se cacher','étouffer la voix','tuer secrètement'],
         proof_ctx:"La forme IV (causative) de kh-f-y signifie « rendre invisible ». Le contexte est limpide : « si vous cachez ce qui est dans vos poitrines » — l'acte intentionnel de dissimuler ses pensées intérieures."},
       'Apparition/Manifestation':{status:'nul',senses:['apparaître','se manifester'],
         proof_ctx:"Le sens contraire (apparaître) n'est pas activé ici — c'est tubdūhu (b-d-w) qui porte le sens d'apparition."},
       'Couverture/Voile':{status:'peu_probable',senses:['vêtement couvrant','couverture','calice de fleur'],
         proof_ctx:"Le voile est un objet physique, pas un acte — or tukhfū est un verbe actif commandant une dissimulation intentionnelle."},
       'Extraction/Déterrement':{status:'nul',senses:["extraire d'une tombe",'creuser un puits','piller une tombe'],
         proof_ctx:"Hors sujet — le verset parle de dissimuler, pas d'extraire."},
       'Puits/Profondeur':{status:'nul',senses:['puits profond','ancien puits'],
         proof_ctx:"Sens physique géographique hors sujet."},
       'Êtres invisibles':{status:'nul',senses:['djinns','plumes cachées'],
         proof_ctx:"Sens concret hors sujet."}
     }}},

    // pos=6: ṣudūrikum
    {verse_id:VERSE_ID, word_key:'sdr', root:ROOTS.sdr, position:6, sense_chosen:'poitrine',
     analysis_axes:{concept_chosen:'Poitrine/Intériorité',concepts:{
       'Poitrine/Intériorité':{status:'retenu',senses:['poitrine','cœur (intérieur)'],
         proof_ctx:"Le pluriel ṣudūr désigne les poitrines comme siège de l'intériorité — l'espace intérieur où résident les pensées et intentions cachées. Le contexte « ce qui est dans vos poitrines » confirme ce sens."},
       'Émission/Sortie':{status:'peu_probable',senses:['sortir','émettre'],
         proof_ctx:"Le sens verbal ṣadara (sortir) n'est pas activé ici — le mot est un nom (ṣudūr = poitrines), pas un verbe d'action."},
       'Eau/Liquide':{status:'nul',senses:['source (début)'],
         proof_ctx:"Sens physique concret sans rapport."}
     }}},

    // pos=8: tubdūhu
    {verse_id:VERSE_ID, word_key:'bdw', root:ROOTS.bdw, position:8, sense_chosen:'se montrer',
     analysis_axes:{concept_chosen:'Apparition/Manifestation',concepts:{
       'Apparition/Manifestation':{status:'retenu',senses:['apparaître','se montrer','sembler'],
         proof_ctx:"La forme IV de b-d-w est causative : « faire apparaître, rendre visible ». Le contexte oppose tukhfū (cacher) et tubdūhu (le montrer) — les deux pôles contraires de la visibilité."},
       'Désert/Nomadisme':{status:'nul',senses:['bédouin','désert'],
         proof_ctx:"Sens géographique hors sujet."}
     }}},

    // pos=9: yaʿlamhu
    {verse_id:VERSE_ID, word_key:'elm', root:ROOTS.elm, position:9, sense_chosen:'savoir',
     analysis_axes:{concept_chosen:'Savoir/Connaissance',concepts:{
       'Savoir/Connaissance':{status:'retenu',senses:['savoir','connaître','être informé','certitude','savant','science','enseignement'],
         proof_ctx:"Le verbe yaʿlamu désigne le savoir direct et certain. Le contexte dit : même si vous cachez, Il le sait — le savoir divin atteint ce que la dissimulation humaine tente de cacher."},
       'Marque/Signe':{status:'nul',senses:['marquer','signe','drapeau','montagne','repère','étendard','lèvre fendue'],
         proof_ctx:"Le mot est un verbe (savoir), pas un nom (signe/marque)."},
       'Monde/Création':{status:'nul',senses:['monde','les mondes','ensemble des créatures','univers'],
         proof_ctx:"Le sens de ʿālamīn n'est pas activé par le verbe yaʿlamu."}
     }}},

    // pos=10: allāhu
    {verse_id:VERSE_ID, word_key:'alh', root:ROOTS.alh, position:10, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité',concepts:{
       'Divinité':{status:'retenu',senses:['divinité','divinité (concept)','Dieu','théologie','exclamation divine','oui certes'],
         proof_ctx:"Le nom propre Allāh désigne la Divinité — ce vers quoi se dirige l'adoration. La position de sujet dans la phrase confirme la référence directe au divin."},
       'Adoration/Dévotion':{status:'probable',senses:['adorer','faire adorer','se dévouer au culte','diviniser'],
         proof_ctx:"La racine ʾ-l-h signifie adorer, mais ici le mot est le nom propre Allāh, pas le verbe alaha."},
       'Détresse':{status:'nul',senses:['être perplexe','se lamenter'],
         proof_ctx:"Hors sujet."},
       'Refuge/Protection':{status:'peu_probable',senses:['chercher refuge','protéger','demeurer'],
         proof_ctx:"Le sens de refuge n'est pas activé par le nom propre dans cette phrase."},
       'Domination':{status:'nul',senses:['asservir'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=12: yaʿlamu
    {verse_id:VERSE_ID, word_key:'elm', root:ROOTS.elm, position:12, sense_chosen:'savoir',
     analysis_axes:{concept_chosen:'Savoir/Connaissance',concepts:{
       'Savoir/Connaissance':{status:'retenu',senses:['savoir','connaître','être informé','certitude'],
         proof_ctx:"Deuxième occurrence du verbe, cette fois à l'indicatif (marfūʿ) au lieu du conditionnel — le savoir divin s'élargit des secrets des poitrines à tout ce qui est dans les cieux et la terre."},
       'Marque/Signe':{status:'nul',senses:['marquer','signe','drapeau'],
         proof_ctx:"Le mot est un verbe, pas un nom de signe."},
       'Monde/Création':{status:'nul',senses:['monde','les mondes'],
         proof_ctx:"Le sens de ʿālamīn n'est pas activé par le verbe yaʿlamu."}
     }}},

    // pos=15: as-samāwāti
    {verse_id:VERSE_ID, word_key:'smw', root:ROOTS.smw, position:15, sense_chosen:'ciel',
     analysis_axes:{concept_chosen:'Ciel/Ce qui couvre',concepts:{
       'Ciel/Ce qui couvre':{status:'retenu',senses:['ciel','toit','nuage','pluie','herbage','dos','semelle supérieure','pièce de tissu supérieure','céleste'],
         proof_ctx:"Le pluriel as-samāwāt désigne les cieux — la voûte qui couvre et englobe. Dans le contexte de « ce qui est dans les cieux et la terre », les cieux représentent la totalité de ce qui est au-dessus."},
       'Hauteur/Élévation':{status:'probable',senses:['être haut','se dresser','monter','noble'],
         proof_ctx:"La hauteur est la qualité fondamentale du ciel, mais le nom samāwāt désigne spécifiquement les cieux comme entité, pas la qualité abstraite de hauteur."},
       'Nom/Identification':{status:'nul',senses:['nom','nommer'],
         proof_ctx:"Hors sujet — le mot est samāwāt (cieux), pas ism (nom)."},
       'Chasse':{status:'nul',senses:['chasser','chasseurs'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=19: al-arḍi
    {verse_id:VERSE_ID, word_key:'ard', root:ROOTS.ard, position:19, sense_chosen:'terre',
     analysis_axes:{concept_chosen:'Terre/Sol',concepts:{
       'Terre/Sol':{status:'retenu',senses:['terre','sol','pays','bas'],
         proof_ctx:"Le nom al-arḍ désigne la terre. Le couple samāwāt/arḍ (cieux/terre) forme un tout qui englobe la totalité de la création."},
       'Sens isolé/Rhume':{status:'nul',senses:['rhume'],
         proof_ctx:"Sens physique concret sans rapport."},
       'Sens isolé/Tremblement':{status:'nul',senses:['tremblement'],
         proof_ctx:"Sens physique concret sans rapport."}
     }}},

    // pos=21: allāhu (2e occurrence)
    {verse_id:VERSE_ID, word_key:'alh', root:ROOTS.alh, position:21, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité',concepts:{
       'Divinité':{status:'retenu',senses:['divinité','Dieu'],
         proof_ctx:"Deuxième occurrence du nom propre Allāh — sujet d'une phrase nominale affirmant la capacité universelle. La répétition souligne que le même Dieu qui sait est aussi celui qui est capable."},
       'Adoration/Dévotion':{status:'probable',senses:['adorer'],
         proof_ctx:"Le sens verbal (adorer) n'est pas activé par le nom propre dans cette phrase."}
     }}},

    // pos=23: kulli
    {verse_id:VERSE_ID, word_key:'kll', root:ROOTS.kll, position:23, sense_chosen:'tout',
     analysis_axes:{concept_chosen:'Totalité',concepts:{
       'Totalité':{status:'retenu',senses:['tout','chaque','totalité'],
         proof_ctx:"Le mot kull en iḍāfa avec shayʾ signifie « toute chose » — la totalité absolue sans exception."},
       'Émoussement/Faiblesse':{status:'nul',senses:["s'émousser",'être fatigué'],
         proof_ctx:"Sens de faiblesse hors sujet."},
       'Charge/Dépendance':{status:'nul',senses:['fardeau','personne à charge'],
         proof_ctx:"Sens de dépendance hors sujet."}
     }}},

    // pos=24: shayʾin
    {verse_id:VERSE_ID, word_key:'šya', root:ROOTS.šya, position:24, sense_chosen:'chose',
     analysis_axes:{concept_chosen:'Chose/Existence',concepts:{
       'Chose/Existence':{status:'retenu',senses:['chose','quelque chose','rien','entité','existence'],
         proof_ctx:"Le nom shayʾ est le terme le plus général qui soit — « ce dont on peut parler, ce qui peut être connu ». Dans kulli shayʾ, il représente la totalité de tout ce qui existe."},
       'Volonté':{status:'probable',senses:['vouloir','créer','désirer','souhaiter','volonté'],
         proof_ctx:"Le sens de volonté (mashīʾa) est lié à la même racine, mais le nom shayʾ au génitif indéfini active le sens de « chose » existante, pas de « volonté »."},
       'Incitation/Contrainte':{status:'nul',senses:['inciter','contraindre'],
         proof_ctx:"Hors sujet."},
       'Laideur/Difformité':{status:'nul',senses:['rendre laid','mal formé'],
         proof_ctx:"Hors sujet."},
       'Apaisement':{status:'nul',senses:['apaiser sa colère'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=25: qadīrun
    {verse_id:VERSE_ID, word_key:'qdr', root:ROOTS.qdr, position:25, sense_chosen:'être capable',
     analysis_axes:{concept_chosen:'Puissance/Capacité',concepts:{
       'Puissance/Capacité':{status:'retenu',senses:['pouvoir','être capable'],
         proof_ctx:"La forme faʿīl (intensif) de q-d-r dans la construction « qadīr ʿalā kulli shayʾ » active la capacité totale et permanente. La capacité est la force intérieure qui permet de réaliser."},
       'Mesure/Détermination':{status:'probable',senses:['mesurer','déterminer','décréter','destin','valeur'],
         proof_ctx:"La mesure est le sens premier de q-d-r, mais la construction « qadīr ʿalā » active spécifiquement le sens de capacité, pas de mesure."},
       'Sens isolé/Marmite':{status:'nul',senses:['marmite'],
         proof_ctx:"Sens concret hors sujet."}
     }}}
  ];

  const {error:insErr} = await db.from('verse_word_analyses').insert(vwaEntries);
  console.log('VWA insert ('+vwaEntries.length+'):', insErr ? 'ERROR: '+insErr.message : 'OK');

  // Daily phrases for qul (correct schema: analysis_id, arabic, phon, french, sense)
  const {count:qulCount} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', 496);
  if (qulCount > 0) {
    console.log('qul daily: already '+qulCount+' — SKIP');
  } else {
    const daily = [
      {analysis_id:496, arabic:'قُل لي ماذا تريد', phon:'qul lī mādhā turīd', french:'Dis-moi ce que tu veux', sense:'dire'},
      {analysis_id:496, arabic:'قال لها الحقيقة', phon:'qāla lahā al-ḥaqīqa', french:'Il lui a dit la vérité', sense:'dire'},
      {analysis_id:496, arabic:'يقولون ما لا يفعلون', phon:'yaqūlūna mā lā yafʿalūn', french:'Ils disent ce qu\'ils ne font pas', sense:'dire'}
    ];
    const {error:dErr} = await db.from('word_daily').insert(daily);
    console.log('Daily qul:', dErr ? 'ERROR: '+dErr.message : '3 phrases OK');
  }

  // Verify
  const {data:vwaCheck} = await db.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log('\nVWA final: '+vwaCheck.length+' entrées');
  vwaCheck.forEach(v => console.log('  pos='+v.position+' '+v.word_key+' → '+v.sense_chosen));

  const {count:dailyFinal} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', 496);
  console.log('Daily qul: '+dailyFinal+' phrases');

  console.log('\n=== TERMINÉ ===');
})();
