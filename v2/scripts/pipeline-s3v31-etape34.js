const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 324;
const VA_ID = 686;

// AIDs: qul=496, kwn=2577, hbb=930, alh=250, tba=729, ghf=571, dnb=1229, rhm=251

(async()=>{
  console.log('=== ÉTAPES 3+4 — S3:V31 ===\n');

  // =============================================
  // 1. LIRE CONCEPTS DEPUIS BDD
  // =============================================
  console.log('--- 1. Concepts BDD ---');
  const aids = [496,2577,930,250,729,571,1229,251];
  const keyMap = {496:'qul',2577:'kwn',930:'hbb',250:'alh',729:'tba',571:'ghf',1229:'dnb',251:'rhm'};
  for (const aid of aids) {
    const {data:senses} = await db.from('word_meanings').select('concept,sense').eq('analysis_id', aid).order('display_order');
    const concepts = [...new Set(senses.map(s=>s.concept))];
    console.log(keyMap[aid]+': '+concepts.join(', '));
  }

  // =============================================
  // 2. FIX SEGMENTS (qul pos=1 et allāha pos=5 → important)
  // =============================================
  console.log('\n--- 2. Fix segments ---');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  const segs = va.segments;

  // Fix pos=1 qul: particle → important
  const s1 = segs.find(s => s.position === 1);
  s1.type = 'important';
  s1.is_particle = false;
  s1.key = 'qul';
  s1.word_key = 'qul';
  s1.root = 'ق و ل';
  s1.pos = 'verbe';
  s1.tense = 'impératif';
  s1.voice = 'actif';
  s1.verb_form = 'I';
  s1.person = 2;
  s1.gender = 'masculin';
  s1.number = 'singulier';
  console.log('pos=1 qul: particle → important');

  // Fix pos=5 allāha: particle → important
  const s5 = segs.find(s => s.position === 5);
  s5.type = 'important';
  s5.is_particle = false;
  s5.key = 'alh';
  s5.word_key = 'alh';
  s5.root = 'ا ل ه';
  s5.pos = 'nom';
  s5.case_i18n = 'accusatif';
  s5.definite = true;
  s5.gender = 'masculin';
  s5.number = 'singulier';
  console.log('pos=5 allāha: particle → important');

  // Ensure all important have is_particle=false and word_key
  segs.forEach(s => {
    if (s.type === 'important') {
      s.is_particle = false;
      if (s.key && !s.word_key) s.word_key = s.key;
    }
    if (s.type === 'particle') {
      s.is_particle = true;
    }
  });

  // =============================================
  // 3. UPDATE SEGMENTS fr + sense_retenu
  // =============================================
  const segUpdates = {
    1:  {fr:'dis', sense_retenu:'dire'},
    3:  {fr:'êtes', sense_retenu:'être (verbe incomplet)'},
    4:  {fr:'aimez', sense_retenu:'aimer'},
    5:  {fr:'Dieu', sense_retenu:'Dieu'},
    7:  {fr:'suivez-moi', sense_retenu:'suivre'},
    8:  {fr:'vous aimera', sense_retenu:'aimer'},
    9:  {fr:'Dieu', sense_retenu:'Dieu'},
    10: {fr:'pardonnera', sense_retenu:'pardonner'},
    12: {fr:'vos fautes', sense_retenu:'faute'},
    13: {fr:'Dieu', sense_retenu:'Dieu'},
    14: {fr:'très pardonnant', sense_retenu:'pardonner'},
    15: {fr:'très miséricordieux', sense_retenu:'miséricorde'}
  };

  let segCount = 0;
  segs.forEach(s => {
    const upd = segUpdates[s.position];
    if (upd) {
      s.fr = upd.fr;
      s.sense_retenu = upd.sense_retenu;
      segCount++;
    }
  });
  console.log(segCount + ' segments mis à jour');

  const {error:segErr} = await db.from('verse_analyses').update({segments: segs}).eq('id', VA_ID);
  console.log('Segments save:', segErr ? 'ERROR: '+segErr.message : 'OK');

  // =============================================
  // 4. DELETE EXISTING VWA + INSERT NEW
  // =============================================
  console.log('\n--- 3. Insert VWA ---');
  const {error:delErr} = await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
  console.log('Delete VWA:', delErr ? 'ERROR: '+delErr.message : 'OK');

  const vwaEntries = [
    // pos=1: qul (dire)
    {verse_id:VERSE_ID, word_key:'qul', root:'ق و ل', position:1, sense_chosen:'dire',
     analysis_axes:{concept_chosen:'Parole/Énonciation', concepts:{
       'Parole/Énonciation':{status:'retenu', senses:['dire','parler','parole','affirmer'],
         proof_ctx:"L'impératif qul commande un acte de profération — la parole sort du Prophète pour atteindre les auditeurs. Le contexte est un ordre divin de transmettre un message conditionnel sur l'amour et le suivi."},
       'Avis/Jugement':{status:'nul', senses:['opinion','prétendre'],
         proof_ctx:"L'impératif ne commande pas la formation d'un avis personnel mais la transmission d'un message."}
     }}},

    // pos=3: kuntum (être)
    {verse_id:VERSE_ID, word_key:'kwn', root:'ك و ن', position:3, sense_chosen:'être',
     analysis_axes:{concept_chosen:'Être/Existence', concepts:{
       'Être/Existence':{status:'retenu', senses:['être (verbe incomplet)','venir à l\'existence'],
         proof_ctx:"Le verbe kāna à l'accompli avec la particule conditionnelle in pose une condition d'état : « si vous êtes ». C'est un verbe d'existence qui introduit la prémisse — l'état dans lequel se trouvent les auditeurs."},
       'Humilité/Soumission':{status:'nul', senses:['être humble soumis'],
         proof_ctx:"Le contexte ne parle pas de soumission mais d'un état conditionnel."},
       'Lieu/État':{status:'probable', senses:['lieu','reste à ta place','état condition','motif raison','devenir comme'],
         proof_ctx:"Le sens d'état est pertinent puisque kuntum introduit une condition, mais le verbe kāna est fondamentalement un verbe d'existence — il pose l'être avant de poser l'état."}
     }}},

    // pos=4: tuḥibbūna (aimer)
    {verse_id:VERSE_ID, word_key:'hbb', root:'ح ب ب', position:4, sense_chosen:'aimer',
     analysis_axes:{concept_chosen:'Amour/Affection', concepts:{
       'Amour/Affection':{status:'retenu', senses:['aimer','affection','préférer'],
         proof_ctx:"L'inaccompli tuḥibbūna exprime un amour continu et habituel — une inclination permanente du cœur vers Dieu. Le verset pose cet amour comme condition préalable au suivi du Prophète."},
       'Graine/Semence':{status:'nul', senses:['graine','grain'],
         proof_ctx:"Sens physique agricole sans rapport avec le contexte."},
       'Lien':{status:'nul', senses:['corde'],
         proof_ctx:"Sens concret hors sujet."}
     }}},

    // pos=5: allāha (Dieu — objet)
    {verse_id:VERSE_ID, word_key:'alh', root:'ا ل ه', position:5, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité', concepts:{
       'Divinité':{status:'retenu', senses:['divinité','divinité (concept)','Dieu','théologie','exclamation divine','oui certes'],
         proof_ctx:"Le nom propre Allāh à l'accusatif est l'objet direct de tuḥibbūna — c'est vers Dieu que se dirige l'amour des croyants. La position d'objet montre que l'amour est directionnel : il part des croyants et se porte vers la Divinité."},
       'Adoration/Dévotion':{status:'probable', senses:['adorer','faire adorer','se dévouer au culte','diviniser'],
         proof_ctx:"Le sens verbal d'adorer n'est pas activé par le nom propre dans cette position d'objet direct — c'est le verbe tuḥibbūna qui porte l'action, pas le nom Allāh."},
       'Détresse':{status:'nul', senses:['être perplexe','se lamenter'],
         proof_ctx:"Hors sujet."},
       'Refuge/Protection':{status:'nul', senses:['chercher refuge','protéger','demeurer'],
         proof_ctx:"Hors sujet."},
       'Domination':{status:'nul', senses:['asservir'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=7: ittabiʿūnī (suivre)
    {verse_id:VERSE_ID, word_key:'tba', root:'ت ب ع', position:7, sense_chosen:'suivre',
     analysis_axes:{concept_chosen:'Suivre/Accompagner', concepts:{
       'Suivre/Accompagner':{status:'retenu', senses:['suivre','accompagner','disciple','imiter'],
         proof_ctx:"La forme VIII ittabiʿūnī est un impératif qui commande un suivi volontaire et engagé. Le fāʾ consécutif lie ce suivi directement à la condition d'amour : aimer Dieu implique suivre le Prophète. La forme VIII ajoute l'idée d'engagement personnel — ce n'est pas un suivi passif."},
       'Rattraper/Atteindre':{status:'peu_probable', senses:['rattraper','rejoindre','suivre les traces'],
         proof_ctx:"Le rattrapement suppose un retard à combler, mais l'impératif commande un suivi direct et immédiat, pas un rattrapage."},
       'Succession/Continuité':{status:'peu_probable', senses:['enchaîner','consécutif','bien exécuté'],
         proof_ctx:"La succession est un fait temporel objectif, mais ici le verset commande un acte volontaire de suivi personnel."},
       'Réclamation/Réparation':{status:'nul', senses:['poursuivre en justice','réclamer','conséquence'],
         proof_ctx:"Aucune poursuite judiciaire dans ce contexte."},
       'Dépendance/Sujétion':{status:'peu_probable', senses:['serviteur','ombre'],
         proof_ctx:"La dépendance est un état passif, mais l'impératif commande un engagement actif et volontaire."}
     }}},

    // pos=8: yuḥbibkum (aimer)
    {verse_id:VERSE_ID, word_key:'hbb', root:'ح ب ب', position:8, sense_chosen:'aimer',
     analysis_axes:{concept_chosen:'Amour/Affection', concepts:{
       'Amour/Affection':{status:'retenu', senses:['aimer','affection','préférer'],
         proof_ctx:"Le verbe yuḥbibkum au majzūm (apocopé) est la conséquence conditionnelle — si vous aimez et suivez, Dieu vous aimera. Le sujet est Dieu et l'objet est kum (vous). L'amour divin est présenté comme la réponse directe à l'amour humain et au suivi."},
       'Graine/Semence':{status:'nul', senses:['graine','grain'],
         proof_ctx:"Hors sujet."},
       'Lien':{status:'nul', senses:['corde'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=9: allāhu (Dieu — sujet)
    {verse_id:VERSE_ID, word_key:'alh', root:'ا ل ه', position:9, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité', concepts:{
       'Divinité':{status:'retenu', senses:['divinité','Dieu'],
         proof_ctx:"Le nom propre au nominatif est le sujet de yuḥbibkum — c'est Dieu qui fait l'acte d'aimer en retour."},
       'Adoration/Dévotion':{status:'probable', senses:['adorer'],
         proof_ctx:"Le sens verbal n'est pas activé par le nom propre en position de sujet."}
     }}},

    // pos=10: wayaghfir (pardonner)
    {verse_id:VERSE_ID, word_key:'ghf', root:'غ ف ر', position:10, sense_chosen:'pardonner',
     analysis_axes:{concept_chosen:'Pardon/Couverture', concepts:{
       'Pardon/Couverture':{status:'retenu', senses:['pardonner','effacer','couvrir','demander le pardon (istighfār)','rémission','recouvrir'],
         proof_ctx:"Le verbe yaghfir au majzūm est la deuxième conséquence conditionnelle, coordonnée par wa à yuḥbibkum. Le pardon est littéralement l'acte de couvrir la faute — la rendre invisible. La préposition lakum (pour vous) et l'objet dhunūbakum (vos fautes) confirment le sens de rémission des fautes."},
       'Protection':{status:'nul', senses:['casque','couvrir la tête'],
         proof_ctx:"Le casque est un objet physique de protection, hors sujet."},
       'Teinture/Couleur':{status:'nul', senses:['teinture','teindre les cheveux'],
         proof_ctx:"Sens concret hors sujet."}
     }}},

    // pos=12: dhunūbakum (faute)
    {verse_id:VERSE_ID, word_key:'dnb', root:'ذ ن ب', position:12, sense_chosen:'faute',
     analysis_axes:{concept_chosen:'Péché/Faute', concepts:{
       'Péché/Faute':{status:'retenu', senses:['péché','faute','transgression','méfait','accuser'],
         proof_ctx:"Le pluriel dhunūb à l'accusatif est l'objet direct de yaghfir — ce sont les fautes que Dieu couvrira. Le dhanb est un écart par rapport à la rectitude, un acte blâmable. Le pronom possessif kum (vos) individualise la responsabilité."},
       'Sens isolé/Queue':{status:'nul', senses:['queue'],
         proof_ctx:"Sens concret anatomique hors sujet."},
       'Suite/Poursuite':{status:'peu_probable', senses:['suivre la trace','être derrière'],
         proof_ctx:"Le nom pluriel dhunūb active le sens de fautes commises, pas celui de poursuite ou de suite."},
       'Sens isolé/Récipient':{status:'nul', senses:['seau plein'],
         proof_ctx:"Sens concret hors sujet."}
     }}},

    // pos=13: wa-llāhu (Dieu — sujet phrase nominale)
    {verse_id:VERSE_ID, word_key:'alh', root:'ا ل ه', position:13, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité', concepts:{
       'Divinité':{status:'retenu', senses:['divinité','Dieu'],
         proof_ctx:"Troisième occurrence du nom propre, sujet d'une phrase nominale qui affirme deux qualités permanentes : très pardonnant et très miséricordieux."},
       'Adoration/Dévotion':{status:'probable', senses:['adorer'],
         proof_ctx:"Le sens verbal n'est pas activé par le nom propre."}
     }}},

    // pos=14: ghafūrun (pardonner — intensif)
    {verse_id:VERSE_ID, word_key:'ghf', root:'غ ف ر', position:14, sense_chosen:'pardonner',
     analysis_axes:{concept_chosen:'Pardon/Couverture', concepts:{
       'Pardon/Couverture':{status:'retenu', senses:['pardonner','effacer','couvrir','rémission','recouvrir'],
         proof_ctx:"La forme faʿūl (intensive) ghafūr indique que le pardon est une qualité permanente et abondante. C'est le premier prédicat de la phrase nominale — une vérité permanente, pas un acte ponctuel."},
       'Protection':{status:'nul', senses:['casque','couvrir la tête'],
         proof_ctx:"Hors sujet."},
       'Teinture/Couleur':{status:'nul', senses:['teinture','teindre les cheveux'],
         proof_ctx:"Hors sujet."}
     }}},

    // pos=15: raḥīmun (miséricorde)
    {verse_id:VERSE_ID, word_key:'rhm', root:'ر ح م', position:15, sense_chosen:'miséricorde',
     analysis_axes:{concept_chosen:'Miséricorde/Tendresse', concepts:{
       'Miséricorde/Tendresse':{status:'retenu', senses:['miséricorde','pardon','traiter avec compassion','le Compatissant','miséricorde réciproque'],
         proof_ctx:"La forme faʿīl (intensive inhérente) raḥīm indique que la miséricorde est une qualité essentielle et permanente. C'est le deuxième prédicat — la phrase se clôt sur deux qualités complémentaires : le pardon qui couvre les fautes et la miséricorde qui se porte vers les créatures."},
       'Utérus/Reproduction':{status:'nul', senses:['utérus','vulve'],
         proof_ctx:"Sens physique anatomique hors sujet."},
       'Parenté/Lien familial':{status:'peu_probable', senses:['lien de parenté','parents par les femmes'],
         proof_ctx:"La parenté est un lien social concret, mais raḥīm en prédicat de Dieu décrit une qualité intérieure de tendresse, pas un lien de parenté."},
       'Provision/Bienfait matériel':{status:'probable', senses:['subsistance','pluie','abondance'],
         proof_ctx:"La provision est une manifestation extérieure de la miséricorde, mais raḥīm en position de prédicat décrit la qualité elle-même — la tendresse intérieure — pas sa manifestation matérielle."},
       'Lieu/Géographie':{status:'nul', senses:['La Mecque','Médine'],
         proof_ctx:"Hors sujet."},
       'Sens isolé/Outre':{status:'nul', senses:['outre abîmée'],
         proof_ctx:"Hors sujet."},
       'Sens isolé/La':{status:'nul', senses:['la crainte vaut mieux que la pitié'],
         proof_ctx:"Hors sujet."}
     }}}
  ];

  const {error:insErr} = await db.from('verse_word_analyses').insert(vwaEntries);
  console.log('VWA insert ('+vwaEntries.length+'):', insErr ? 'ERROR: '+insErr.message : 'OK');

  // =============================================
  // 5. TRANSLATION
  // =============================================
  console.log('\n--- 4. Translation ---');

  const translation_arab = "Dis : si vous aimez Dieu, alors suivez-moi — Dieu vous aimera et vous pardonnera vos fautes. Et Dieu est très pardonnant, très miséricordieux.";

  const full_translation = "Dis : « Si vous aimez Allah, suivez-moi, Allah vous aimera et vous pardonnera vos péchés. Allah est Pardonneur et Miséricordieux. »";

  const translation_explanation = `§DEMARCHE§

Ce verset fait suite à l'avertissement du verset 30 où Dieu met en garde contre Lui-même tout en se déclarant compatissant envers les serviteurs. Le verset 31 pose maintenant la condition de l'amour divin : suivre le Prophète.

**Qul** (dis) est un impératif (une forme qui commande une action immédiate) de la racine q-w-l. L'ordre s'adresse au Prophète et commande un acte de profération : transmettre un message. Le Lane's donne qāla : « il a dit, il a parlé ». L'impératif fait du Prophète un transmetteur — il ne parle pas de lui-même mais transmet ce qu'on lui commande de dire.

**Kuntum** (vous êtes) est un verbe accompli (une forme qui marque un état établi) de la racine k-w-n à la deuxième personne du pluriel. Précédé de la particule conditionnelle in (si), il introduit une hypothèse : « si vous êtes » dans un certain état. Le verbe kāna est un verbe d'état incomplet — il pose l'existence d'une condition préalable sans la définir lui-même, c'est ce qui suit (tuḥibbūna) qui précise la nature de cette condition.

**Tuḥibbūna** (vous aimez) est un verbe inaccompli (une forme qui marque une action continue et habituelle) de la racine ḥ-b-b à la deuxième personne du pluriel. L'inaccompli indique que l'amour est un état permanent, pas un acte ponctuel. Le Lane's donne ḥabba : « il a aimé ». L'amour (ḥubb) est une inclination du cœur qui se porte vers l'aimé de façon durable. Ce verbe est le noyau de la condition : c'est l'amour qui détermine tout ce qui suit.

**Allāha** (Dieu) est le nom propre de la Divinité à l'accusatif (une forme qui marque l'objet direct de l'action) — il est ce vers quoi se dirige l'amour des croyants. La position d'objet direct montre que l'amour est directionnel : il part des croyants et se porte vers Dieu.

**Ittabiʿūnī** (suivez-moi) est un impératif de la forme VIII (une forme qui implique un effort personnel et un choix volontaire) de la racine t-b-ʿ, suivi du pronom ī (moi). La forme VIII ajoute à l'idée de « suivre » celle d'un engagement personnel : ce n'est pas un suivi passif mais un acte choisi. Le fāʾ consécutif (fa) qui le précède lie directement le suivi à la condition : « si vous aimez… ALORS suivez ». Le Lane's donne ittabaʿa : « il a suivi, il a marché derrière, il a imité ». Le pronom suffixe ī (moi) identifie le Prophète comme celui qu'il faut suivre.

**Yuḥbibkum** (Il vous aimera) est un verbe inaccompli majzūm (une forme apocopée qui marque la conséquence directe d'une condition) de la racine ḥ-b-b à la troisième personne du singulier, avec le pronom suffixe kum (vous). C'est la réponse conditionnelle : si vous aimez et suivez, alors Dieu vous aimera. Le majzūm montre que l'amour divin est une conséquence directe et garantie du suivi.

**Allāhu** (Dieu) est le nom propre de la Divinité au nominatif (une forme qui marque le sujet de l'action) — c'est Dieu qui fait l'acte d'aimer en retour. La deuxième occurrence du nom souligne que c'est le même Dieu aimé qui aime en retour.

**Wayaghfir** (et Il pardonnera) est un verbe inaccompli majzūm de la racine gh-f-r, coordonné par wa (et) à yuḥbibkum. C'est la deuxième conséquence conditionnelle — après l'amour, le pardon. Le Lane's donne ghafara : « il a couvert, il a pardonné ». Le pardon est littéralement l'acte de couvrir la faute — la rendre invisible, comme si elle n'avait pas existé. La préposition lakum (pour vous) précise que le pardon est dirigé vers les croyants.

**Dhunūbakum** (vos fautes) est un nom pluriel (une forme qui indique la multiplicité) de la racine dh-n-b à l'accusatif, suivi du pronom possessif kum (vos). Le pluriel dhunūb désigne l'ensemble des fautes commises. Le Lane's donne dhanb : « une faute, un acte blâmable, une transgression ». La faute est un écart par rapport à ce qui est droit — un acte qui mérite le blâme. Le pronom possessif individualise la responsabilité : ce sont VOS fautes, pas celles d'autrui.

**Wa-llāhu** (et Dieu) ouvre une phrase nominale (une construction arabe qui affirme une vérité permanente, pas un événement). Dieu est le sujet et ce qui suit constitue son prédicat — les deux qualités qui le définissent.

**Ghafūrun** (très pardonnant) est un adjectif de forme faʿūl (une forme intensive qui indique que la qualité est exercée de façon abondante et permanente) de la racine gh-f-r. Le ghafūr est celui qui pardonne beaucoup, constamment, sans se lasser. C'est le premier prédicat de la phrase nominale.

**Raḥīmun** (très miséricordieux) est un adjectif de forme faʿīl (une forme intensive qui indique une qualité inhérente et permanente) de la racine r-ḥ-m. Le raḥīm est celui dont la miséricorde est une qualité essentielle, pas un acte occasionnel. Le Lane's donne raḥima : « il a eu pitié, il a traité avec compassion ». La miséricorde (raḥma) est une tendresse intérieure qui se manifeste en actes de bienfaisance. C'est le deuxième prédicat — la phrase se clôt sur deux qualités complémentaires : le pardon qui couvre les fautes et la miséricorde qui se porte vers les créatures.

§JUSTIFICATION§

**dis** — Le sens retenu est « Parole/Énonciation ». Le mot « dis » est choisi car c'est l'impératif direct du verbe dire — un ordre de transmettre un message. L'alternative « affirmer » est écartée car affirmer suppose une prise de position personnelle, alors que qul commande une simple transmission.

**êtes** — Le sens retenu est « Être/Existence ». Le mot « êtes » est choisi car kuntum est un verbe d'état qui pose une condition d'existence. L'alternative « venir à l'existence » est écartée car le contexte est une hypothèse conditionnelle (si vous êtes...), pas une venue à l'être.

**aimez** — Le sens retenu est « Amour/Affection ». Le mot « aimez » est choisi car il exprime l'inclination du cœur de façon directe et quotidienne. L'alternative « préférer » est écartée car le verset ne parle pas d'un choix entre options, mais d'un attachement du cœur vers Dieu. L'alternative « affection » est un nom, pas compatible avec la forme verbale.

**Dieu** — Le sens retenu est « Divinité ». Le mot « Dieu » est choisi car c'est le nom propre de la Divinité en français courant. L'alternative « divinité » est écartée car elle est trop abstraite pour un nom propre.

**suivez-moi** — Le sens retenu est « Suivre/Accompagner ». Le mot « suivez » est choisi car la forme VIII (ittabiʿūnī) exprime un suivi volontaire et engagé. L'alternative « imiter » est écartée car l'imitation peut être superficielle, alors que le suivi (ittibāʿ) implique un engagement complet. L'alternative « accompagner » est écartée car elle est symétrique, or le verset commande un suivi directionnel — le Prophète devant, les croyants derrière.

**vous aimera** — Le sens retenu est « Amour/Affection ». Même racine que tuḥibbūna. Ici le sujet est Dieu — le texte dit que Dieu aimera en retour ceux qui suivent le Prophète.

**pardonnera** — Le sens retenu est « Pardon/Couverture ». Le mot « pardonnera » est choisi car il combine l'idée de couvrir la faute (sens étymologique) et l'usage courant. L'alternative « effacer » est écartée car effacer supprime la faute, alors que pardonner la couvre — la nuance est que la faute a existé mais n'est plus comptée. L'alternative « couvrir » est trop littérale pour une traduction courante.

**fautes** — Le sens retenu est « Péché/Faute ». Le mot « fautes » est choisi car c'est du français courant sans connotation religieuse chrétienne. L'alternative « péchés » est écartée car « péché » est un terme du vocabulaire chrétien qui implique une offense contre Dieu. Le dhanb est plus neutre — c'est un écart, une erreur blâmable. L'alternative « transgressions » est trop juridique pour du français quotidien.

**très pardonnant** — Le sens retenu est « Pardon/Couverture ». Le mot « très pardonnant » est choisi car la forme faʿūl est intensive — le ghafūr pardonne beaucoup et de façon permanente. L'alternative « pardonneur » (utilisée par Hamidullah) est acceptable mais « très pardonnant » rend mieux l'intensité de la forme.

**très miséricordieux** — Le sens retenu est « Miséricorde/Tendresse ». Le mot « très miséricordieux » est choisi car la forme faʿīl indique une qualité inhérente et permanente. L'alternative « compatissant » est écartée car la raḥma est plus large que la compassion — elle inclut la tendresse intérieure et les actes de bienfaisance qui en découlent.

§CRITIQUE§

La principale nuance est dans le mot dhunūb. Les traductions courantes donnent « péchés » — ce choix vient du vocabulaire religieux chrétien où le péché est une offense contre Dieu qui nécessite une rédemption. Le Lane's donne dhanb comme « une faute, un acte blâmable, une transgression ». C'est un écart par rapport à la rectitude, pas nécessairement une offense théologique. Le mot « fautes » est plus proche de l'étymologie et plus neutre — il change le sens du verset en faisant du pardon divin une couverture d'erreurs humaines plutôt qu'une absolution de péchés au sens chrétien.

Pour le reste, les traductions courantes donnent sensiblement le même sens. La structure conditionnelle (si vous aimez → suivez → Il vous aimera et pardonnera) est fidèlement rendue dans la plupart des traductions.`;

  const {error:trErr} = await db.from('verse_analyses').update({
    translation_arab,
    full_translation,
    translation_explanation
  }).eq('id', VA_ID);
  console.log('Translation update:', trErr ? 'ERROR: '+trErr.message : 'OK');

  // =============================================
  // 6. DAILY PHRASES — SKIP (all roots already have 3+)
  // =============================================
  console.log('\n--- 5. Daily phrases ---');
  console.log('Toutes les racines ont déjà des phrases — SKIP');

  // =============================================
  // 7. VÉRIFICATION
  // =============================================
  console.log('\n--- 6. Vérification ---');

  const {data:vwaCheck} = await db.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log('VWA: '+vwaCheck.length+' entrées');
  vwaCheck.forEach(v => console.log('  pos='+v.position+' '+v.word_key+' → '+v.sense_chosen));

  const {data:vaCheck} = await db.from('verse_analyses').select('translation_arab').eq('id', VA_ID).single();
  console.log('\nTraduction: '+vaCheck.translation_arab.substring(0,80)+'...');

  // Verify segments
  const {data:vaSegs} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  const impSegs = vaSegs.segments.filter(s => s.type === 'important');
  const partSegs = vaSegs.segments.filter(s => s.type === 'particle');
  console.log('Segments: '+impSegs.length+' important, '+partSegs.length+' particles');

  console.log('\n=== ÉTAPES 3+4 TERMINÉES ===');
})();
