const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 323;
const VA_ID = 682;
const ROOTS = {
  ywm:'ي و م', wjd:'و ج د', kll:'ك ل ل', nfs:'ن ف س', eml:'ع م ل',
  khyr:'خ ي ر', hdr:'ح ض ر', swa:'س و ء', wdd:'و د د', byn:'ب ي ن',
  amd:'أ م د', baed:'ب ع د', 'hðr':'ح ذ ر', llh:'ا ل ه', raf:'ر أ ف', ebd:'ع ب د'
};
const AIDS = {
  ywm:257, wjd:700, kll:372, nfs:298, eml:393,
  khyr:727, hdr:815, swa:539, wdd:703, byn:596,
  amd:1250, baed:926, 'hðr':1304, llh:255, raf:838, ebd:259
};

(async()=>{
  console.log('=== ÉTAPES 3+4 — S3:V30 ===\n');

  // 1. Verify concept names from BDD
  console.log('--- 1. Concepts BDD ---');
  for (const [key,aid] of Object.entries(AIDS)) {
    const {data} = await db.from('word_meanings').select('concept').eq('analysis_id', aid);
    const cs = [...new Set(data.map(s=>s.concept))];
    console.log(key+': '+cs.join(', '));
  }

  // 2. Delete existing VWA
  const {error:delErr} = await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
  console.log('\nDelete VWA:', delErr ? 'ERROR: '+delErr.message : 'OK');

  // 3. Insert 20 VWA
  console.log('\n--- 2. Insert VWA ---');
  const vwa = [
    // pos=1 yawma
    {verse_id:VERSE_ID, word_key:'ywm', root:ROOTS.ywm, position:1, sense_chosen:'jour',
     analysis_axes:{concept_chosen:'Temps/Période',concepts:{
       'Temps/Période':{status:'retenu',senses:['jour','journée','temps','période'],
         proof_ctx:"Le verset commence par yawma (accusatif adverbial) qui désigne un moment temporel précis — le jour où les actes seront présentés. Le temps est le cadre dans lequel se déroule la rencontre de l'âme avec ses œuvres."},
       'Événement/Moment marquant':{status:'probable',senses:['événement','bataille','jour de combat','jour marquant'],
         proof_ctx:"Le jour en question est marquant, mais le mot yawma désigne le temps, pas l'événement en soi."}
     }}},
    // pos=2 tajidu
    {verse_id:VERSE_ID, word_key:'wjd', root:ROOTS.wjd, position:2, sense_chosen:'trouver',
     analysis_axes:{concept_chosen:'Découverte/Existence',concepts:{
       'Découverte/Existence':{status:'retenu',senses:['trouver','exister','rencontrer','percevoir','atteindre','obtenir','découvrir','expérimenter'],
         proof_ctx:"Le verbe tajidu (inaccompli, 3e féminin singulier) signifie « elle trouve » — chaque âme rencontre ses propres actes. La découverte est ici une perception directe de ce qu'on a fait."},
       'Savoir/Connaissance':{status:'probable',senses:['savoir','connaître par expérience'],
         proof_ctx:"Le savoir par expérience est lié à la découverte, mais le contexte implique une rencontre concrète avec les œuvres, pas une connaissance abstraite."},
       'Existence/Être':{status:'nul',senses:['être existant','faire exister','existence'],
         proof_ctx:"Le mot est un verbe actif transitif, pas un état d'existence."},
       'Richesse/Capacité':{status:'nul',senses:['être riche','avoir les moyens','pouvoir'],
         proof_ctx:"Hors sujet."},
       'Émotion/Passion':{status:'nul',senses:['amour passionné','chagrin','se plaindre'],
         proof_ctx:"Hors sujet."}
     }}},
    // pos=3 kullu
    {verse_id:VERSE_ID, word_key:'kll', root:ROOTS.kll, position:3, sense_chosen:'tout',
     analysis_axes:{concept_chosen:'Totalité',concepts:{
       'Totalité':{status:'retenu',senses:['tout','chaque','totalité'],
         proof_ctx:"Kull au nominatif (sujet) signifie « chaque » — sans exception, toutes les âmes sans en omettre aucune."},
       'Émoussement/Faiblesse':{status:'nul',senses:["s'émousser",'être fatigué'],proof_ctx:"Hors sujet."},
       'Charge/Dépendance':{status:'nul',senses:['fardeau','personne à charge'],proof_ctx:"Hors sujet."}
     }}},
    // pos=4 nafsin
    {verse_id:VERSE_ID, word_key:'nfs', root:ROOTS.nfs, position:4, sense_chosen:'âme',
     analysis_axes:{concept_chosen:'Âme/Être',concepts:{
       'Âme/Être':{status:'retenu',senses:['âme','soi-même','personne','esprit','désir'],
         proof_ctx:"Le nom nafs au génitif (en iḍāfa avec kull) désigne l'être dans sa totalité — le soi qui est responsable de ses actes. Le verset dit que chaque âme trouvera SES propres actes."},
       'Souffle/Vie':{status:'probable',senses:['souffle','respirer','soulagement'],
         proof_ctx:"Le souffle est le support de l'âme, mais ici le mot est utilisé au sens de personne/être responsable de ses actes."}
     }}},
    // pos=6 ʿamilat
    {verse_id:VERSE_ID, word_key:'eml', root:ROOTS.eml, position:6, sense_chosen:'agir',
     analysis_axes:{concept_chosen:'Action/Oeuvre',concepts:{
       'Action/Oeuvre':{status:'retenu',senses:['travailler','agir','oeuvre','acte','ouvrier'],
         proof_ctx:"Le verbe ʿamilat (accompli, 3e féminin singulier) désigne une action achevée dans le passé — ce que l'âme a fait. L'accompli confirme que l'acte est terminé et que ses résultats sont maintenant présentés."}
     }}},
    // pos=8 khayrin
    {verse_id:VERSE_ID, word_key:'khyr', root:ROOTS.khyr, position:8, sense_chosen:'bien',
     analysis_axes:{concept_chosen:'Bien/Excellence',concepts:{
       'Bien/Excellence':{status:'retenu',senses:['bien','meilleur','bonté'],
         proof_ctx:"Le nom khayr au génitif (après min partitif) désigne le bien — tout ce qui est bon dans les actes. Le verset oppose explicitement khayr (bien) et sūʾ (mal)."},
       'Choix/Préférence':{status:'probable',senses:['choisir','préférer','sélectionner'],
         proof_ctx:"Le sens de choix est lié (khayr = meilleur = celui qu'on choisit), mais ici c'est le nom « bien », pas le verbe « choisir »."},
       'Supériorité':{status:'nul',senses:['meilleur','supérieur'],proof_ctx:"Le comparatif n'est pas activé ici — le mot est un nom, pas un comparatif."},
       'Générosité/Noblesse':{status:'nul',senses:['noble','généreux'],proof_ctx:"Hors sujet."}
     }}},
    // pos=9 muḥḍarān
    {verse_id:VERSE_ID, word_key:'hdr', root:ROOTS.hdr, position:9, sense_chosen:'se présenter',
     analysis_axes:{concept_chosen:'Présence/Témoignage',concepts:{
       'Présence/Témoignage':{status:'retenu',senses:['être présent','assister à','venir','se présenter'],
         proof_ctx:"Muḥḍar est le participe passif de la forme IV aḥḍara (faire venir devant, rendre présent). L'œuvre de bien est « présentée » — amenée devant l'âme comme un témoignage visible de ce qu'elle a fait. La forme passive indique que la présentation ne vient pas de l'âme elle-même."},
       'Sédentarité/Civilisation':{status:'nul',senses:['zone habitée (hadar)','sédentaire (vs. nomade)'],proof_ctx:"Hors sujet."},
       'Mort/Destruction':{status:'peu_probable',senses:['mort (la mort se présente)'],
         proof_ctx:"La mort « se présente » dans certains contextes, mais ici c'est l'œuvre qui est présentée, pas la mort."}
     }}},
    // pos=12 ʿamilat (2e)
    {verse_id:VERSE_ID, word_key:'eml', root:ROOTS.eml, position:12, sense_chosen:'agir',
     analysis_axes:{concept_chosen:'Action/Oeuvre',concepts:{
       'Action/Oeuvre':{status:'retenu',senses:['travailler','agir','oeuvre','acte'],
         proof_ctx:"Deuxième occurrence de ʿamilat — cette fois pour les mauvais actes. La répétition du même verbe souligne que la même personne a fait du bien ET du mal."}
     }}},
    // pos=14 sūʾin
    {verse_id:VERSE_ID, word_key:'swa', root:ROOTS.swa, position:14, sense_chosen:'mal',
     analysis_axes:{concept_chosen:'Mal/Mauvais',concepts:{
       'Mal/Mauvais':{status:'retenu',senses:['mal','mauvais','nuisible','péché'],
         proof_ctx:"Le nom sūʾ au génitif (après min) désigne le mal — le contraire du khayr. Le verset oppose les deux catégories d'actes : bien et mal."},
       'Honte/Pudeur':{status:'probable',senses:['honte'],
         proof_ctx:"La honte est liée au mal moral, mais ici le mot est le nom générique « mal », pas spécifiquement la honte."}
     }}},
    // pos=15 tawaddu
    {verse_id:VERSE_ID, word_key:'wdd', root:ROOTS.wdd, position:15, sense_chosen:'désirer',
     analysis_axes:{concept_chosen:'Souhait/Désir',concepts:{
       'Souhait/Désir':{status:'retenu',senses:['désirer','souhaiter ardemment'],
         proof_ctx:"La forme V tawaddu (réflexive/intensive) dans ce contexte active le souhait ardent — l'âme souhaite désespérément qu'il y ait une distance entre elle et son mal. Le souhait est un état intérieur d'aspiration."},
       'Amour/Affection':{status:'probable',senses:['aimer','affection','souhaiter','amour','ami','bien-aimé','aimant',"s'aimer mutuellement",'se faire aimer'],
         proof_ctx:"Le sens premier de w-d-d est aimer, mais la forme V avec law (si seulement) active clairement le sens de souhait, pas d'amour."},
       'Idolâtrie':{status:'nul',senses:['idole (Wadd)'],proof_ctx:"Hors sujet."}
     }}},
    // pos=18 baynahā
    {verse_id:VERSE_ID, word_key:'byn', root:ROOTS.byn, position:18, sense_chosen:'entre',
     analysis_axes:{concept_chosen:'Séparation/Distance',concepts:{
       'Séparation/Distance':{status:'retenu',senses:['séparer','entre','quitter'],
         proof_ctx:"Bayna est la préposition/nom qui désigne l'espace qui sépare deux choses. Le verset dit « entre elle (l'âme) et entre lui (le mal) » — l'âme désire un espace de séparation."},
       'Clarté/Évidence':{status:'nul',senses:['être clair','expliquer','évident','preuve'],
         proof_ctx:"Le sens de clarification n'est pas activé ici — le mot est bayna (entre), pas bayyana (rendre clair)."}
     }}},
    // pos=20 baynahu
    {verse_id:VERSE_ID, word_key:'byn', root:ROOTS.byn, position:20, sense_chosen:'entre',
     analysis_axes:{concept_chosen:'Séparation/Distance',concepts:{
       'Séparation/Distance':{status:'retenu',senses:['séparer','entre','quitter'],
         proof_ctx:"Deuxième occurrence de bayna — « entre lui » (le pronom masculin renvoie au mal). La répétition bayna-hā wa bayna-hu souligne la dualité : l'âme d'un côté, son mal de l'autre."},
       'Clarté/Évidence':{status:'nul',senses:['être clair','expliquer'],proof_ctx:"Hors sujet."}
     }}},
    // pos=21 amadan
    {verse_id:VERSE_ID, word_key:'amd', root:ROOTS.amd, position:21, sense_chosen:'distance temporelle',
     analysis_axes:{concept_chosen:'Durée/Limite',concepts:{
       'Durée/Limite':{status:'retenu',senses:['terme','durée','période','limite ultime','échéance','distance temporelle'],
         proof_ctx:"Le nom amad à l'accusatif désigne une étendue temporelle ou spatiale. Le Lane's donne amad comme « l'étendue ultime, le terme, la limite ». Dans ce verset, amad baʿīd (un terme lointain) exprime la distance que l'âme souhaite entre elle et son mal."},
       'Colère':{status:'nul',senses:['être en colère','irritation'],proof_ctx:"Hors sujet."}
     }}},
    // pos=22 baʿīdan
    {verse_id:VERSE_ID, word_key:'baed', root:ROOTS.baed, position:22, sense_chosen:'être loin',
     analysis_axes:{concept_chosen:'Éloignement/Distance',concepts:{
       'Éloignement/Distance':{status:'retenu',senses:['être loin','éloignement'],
         proof_ctx:"L'adjectif baʿīd (forme faʿīl) qualifie amad — une distance/un terme LOINTAIN. L'éloignement est la qualité spatiale ou temporelle de ce qui est hors d'atteinte."},
       'Postériorité':{status:'nul',senses:['après','ensuite'],proof_ctx:"Le sens temporel de « après » n'est pas activé ici."},
       'Mort/Destruction':{status:'nul',senses:['périr'],proof_ctx:"Hors sujet."}
     }}},
    // pos=23 yaḥadhdhirukum
    {verse_id:VERSE_ID, word_key:'hðr', root:ROOTS['hðr'], position:23, sense_chosen:'mettre en garde',
     analysis_axes:{concept_chosen:'Avertissement/Mise en garde',concepts:{
       'Avertissement/Mise en garde':{status:'retenu',senses:['mettre en garde','avertir','prévenir','faire craindre'],
         proof_ctx:"La forme II yuḥadhdhiru (causatif) de ḥ-dh-r signifie « rendre vigilant, mettre en garde ». C'est la même formule que dans le verset 28 — « Dieu vous met en garde contre lui-même ». La mise en garde est un acte extérieur dirigé vers les auditeurs."},
       'Prudence/Méfiance':{status:'probable',senses:['se méfier','être prudent','craindre','prendre garde','être vigilant','être sur ses gardes','précaution'],
         proof_ctx:"La prudence est l'état intérieur RÉSULTANT de la mise en garde. La forme II est causative : c'est l'acte de PROVOQUER la prudence chez l'autre."},
       'Danger/Calamité':{status:'peu_probable',senses:['chose crainte','calamité','guerre','attaque hostile'],
         proof_ctx:"Le danger est l'objet de la mise en garde, pas l'acte lui-même."},
       'Terrain/Rugosité':{status:'nul',senses:['sol rugueux','sommet de montagne'],proof_ctx:"Hors sujet."},
       'Fausseté/Vanité':{status:'nul',senses:['ce qui est faux','vain'],proof_ctx:"Hors sujet."}
     }}},
    // pos=24 allāhu
    {verse_id:VERSE_ID, word_key:'llh', root:ROOTS.llh, position:24, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité',concepts:{
       'Divinité':{status:'retenu',senses:['divinité','dieu','Dieu','théologie'],
         proof_ctx:"Le nom propre Allāh désigne la Divinité. Sujet du verbe yuḥadhdhiru — c'est Dieu qui met en garde."},
       'Adoration/Culte':{status:'probable',senses:['adorer','servir','se consacrer au culte'],
         proof_ctx:"Le sens verbal (adorer) n'est pas activé par le nom propre dans cette phrase."},
       'Confusion/Perplexité':{status:'nul',senses:['être confus'],proof_ctx:"Hors sujet."},
       'Asservissement':{status:'nul',senses:['réduire en esclavage'],proof_ctx:"Hors sujet."}
     }}},
    // pos=25 nafsahu
    {verse_id:VERSE_ID, word_key:'nfs', root:ROOTS.nfs, position:25, sense_chosen:'soi-même',
     analysis_axes:{concept_chosen:'Âme/Être',concepts:{
       'Âme/Être':{status:'retenu',senses:['âme','soi-même','personne','esprit','désir'],
         proof_ctx:"Nafsahu (nafs + pronom possessif hu = son soi) signifie « lui-même ». L'expression « Dieu vous met en garde contre nafsahu » utilise nafs au sens de soi-même — Dieu avertit contre Son propre être."},
       'Souffle/Vie':{status:'nul',senses:['souffle','respirer','soulagement'],
         proof_ctx:"Le souffle vital n'est pas activé ici — le mot signifie « soi-même »."}
     }}},
    // pos=27 allāhu (2e)
    {verse_id:VERSE_ID, word_key:'llh', root:ROOTS.llh, position:27, sense_chosen:'Dieu',
     analysis_axes:{concept_chosen:'Divinité',concepts:{
       'Divinité':{status:'retenu',senses:['divinité','Dieu'],
         proof_ctx:"Deuxième occurrence — sujet de la phrase nominale qui affirme la compassion divine. La répétition du nom souligne la continuité : le même Dieu qui met en garde est aussi compatissant."},
       'Adoration/Culte':{status:'probable',senses:['adorer'],
         proof_ctx:"Le sens verbal n'est pas activé ici."}
     }}},
    // pos=28 raʾūfun
    {verse_id:VERSE_ID, word_key:'raf', root:ROOTS.raf, position:28, sense_chosen:'être compatissant',
     analysis_axes:{concept_chosen:'Compassion/Clémence',concepts:{
       'Compassion/Clémence':{status:'retenu',senses:['être compatissant','avoir pitié','être clément','très compatissant (raûf)','tendresse','bienveillance','miséricorde intense'],
         proof_ctx:"Raʾūf est la forme faʿūl (intensif) de r-ʾ-f — une compassion permanente et intense. Le Lane's donne raʾūf comme « celui qui exerce la compassion ». Placé juste après la mise en garde, il montre que l'avertissement divin est motivé par la compassion, pas par la sévérité."}
     }}},
    // pos=29 bil-ʿibād
    {verse_id:VERSE_ID, word_key:'ebd', root:ROOTS.ebd, position:29, sense_chosen:'serviteur',
     analysis_axes:{concept_chosen:'Servitude/Esclavage',concepts:{
       'Servitude/Esclavage':{status:'retenu',senses:['serviteur','esclave','être humain','asservir','rendre soumis','aplanir un chemin'],
         proof_ctx:"Le pluriel ʿibād avec la préposition bi (envers) désigne ceux envers qui la compassion est dirigée — les serviteurs. Le mot ʿabd signifie fondamentalement « celui qui sert/obéit ». Le verset ne dit pas « Ses serviteurs » — il dit « les serviteurs » sans possessif."},
       'Adoration/Dévotion':{status:'probable',senses:['adorer','servir','vouer un culte','se dévouer','dévotion','adoration'],
         proof_ctx:"L'adoration est l'acte du serviteur, mais ici le mot est le nom pluriel (les serviteurs), pas le verbe (adorer)."}
     }}}
  ];

  const {error:vwaErr} = await db.from('verse_word_analyses').insert(vwa);
  console.log('VWA insert ('+vwa.length+'):', vwaErr ? 'ERROR: '+vwaErr.message : 'OK');

  // 4. Update segments
  console.log('\n--- 3. Update segments ---');
  const {data:vaData} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  const segs = vaData.segments;

  const segUpdates = {
    1:{fr:'le jour',sense_retenu:'jour'},
    2:{fr:'trouve',sense_retenu:'trouver'},
    3:{fr:'chaque',sense_retenu:'tout'},
    4:{fr:'âme',sense_retenu:'âme'},
    6:{fr:'a fait',sense_retenu:'agir'},
    8:{fr:'bien',sense_retenu:'bien'},
    9:{fr:'présenté',sense_retenu:'se présenter'},
    12:{fr:'a fait',sense_retenu:'agir'},
    14:{fr:'mal',sense_retenu:'mal'},
    15:{fr:'souhaite',sense_retenu:'désirer'},
    18:{fr:'entre elle',sense_retenu:'entre'},
    20:{fr:'entre lui',sense_retenu:'entre'},
    21:{fr:'distance',sense_retenu:'distance temporelle'},
    22:{fr:'lointaine',sense_retenu:'être loin'},
    23:{fr:'vous met en garde contre',sense_retenu:'mettre en garde'},
    24:{fr:'Dieu',sense_retenu:'Dieu'},
    25:{fr:'lui-même',sense_retenu:'soi-même'},
    27:{fr:'Dieu',sense_retenu:'Dieu'},
    28:{fr:'compatissant',sense_retenu:'être compatissant'},
    29:{fr:'les serviteurs',sense_retenu:'serviteur'}
  };

  for (const [posStr, upd] of Object.entries(segUpdates)) {
    const pos = parseInt(posStr);
    const seg = segs.find(s => s.position === pos);
    if (!seg) { console.log('MISSING pos='+pos+' <<<'); continue; }
    seg.fr = upd.fr;
    seg.sense_retenu = upd.sense_retenu;
  }
  console.log('20 segments mis à jour');

  // 5. Translation
  const translation_arab = "Le jour où chaque âme trouve ce qu'elle a fait de bien, présenté — et ce qu'elle a fait de mal, elle souhaite qu'entre elle et lui il y ait une distance lointaine. Et Dieu vous met en garde contre lui-même. Et Dieu est compatissant envers les serviteurs.";

  const full_translation = "Le jour où chaque âme se trouvera confrontée avec ce qu'elle aura fait de bien et ce qu'elle aura fait de mal; elle souhaitera qu'il y ait entre elle et ce mal une grande distance! Allah Lui-même vous met en garde. Et Allah est Compatissant envers [Ses] serviteurs.";

  const translation_explanation = `§DEMARCHE§
Le verset prolonge les avertissements des versets 28 et 29. Après l'interdiction des alliances secrètes (V28) et le rappel que Dieu sait ce qui est dans les poitrines (V29), ce verset décrit le jour où chaque être retrouvera ses propres actes. Il reprend la même formule d'avertissement que le verset 28 (« Dieu vous met en garde contre lui-même »), puis la tempère par l'affirmation de la compassion divine.

**Yawma** (le jour) est un nom à l'accusatif adverbial (ẓarf zamān), qui place l'ensemble de la scène dans un moment temporel. La racine y-w-m signifie « jour, période ». Le texte ne nomme pas ce jour — il ne dit ni « jour du jugement » ni « jour de la résurrection ». Il dit simplement « le jour où ».

**Tajidu** (trouve) est un verbe à l'inaccompli (présent/futur), troisième personne du féminin singulier de la racine w-j-d. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), wajada signifie « trouver, percevoir, découvrir, expérimenter ». La découverte passe par les cinq sens ou par l'intellect. Ici, chaque âme « trouve » — elle fait la rencontre directe et concrète de ses propres actes.

**Kullu** (chaque) est un nom au nominatif (sujet du verbe tajidu), de la racine k-l-l. Kull signifie la totalité sans exception — chaque âme, sans qu'aucune ne soit épargnée.

**Nafsin** (âme) est un nom au génitif (en annexion avec kull), de la racine n-f-s. Le nafs est l'être dans sa totalité — le soi qui est responsable de ses actes. L'expression « chaque âme » individualise la responsabilité : chacun retrouve ce qu'il a fait, pas ce qu'un autre a fait.

**ʿAmilatꞌ** (a fait) est un verbe à l'accompli (passé), troisième personne du féminin singulier de la racine ʿ-m-l. L'accompli indique une action achevée — ce qui a été fait dans le passé est maintenant présenté comme un résultat définitif.

**Khayrin** (bien) est un nom au génitif (après min partitif = « de/parmi »), de la racine kh-y-r. Le khayr est le bien — tout ce qui est bon dans les actes. Le min partitif signifie « parmi le bien qu'elle a fait ».

**Muḥḍarān** (présenté) est un participe passif de la forme IV aḥḍara, de la racine ḥ-ḍ-r (être présent). La forme IV signifie « faire venir devant, rendre présent ». Le participe passif à l'accusatif fonctionne ici comme un état (ḥāl) : l'œuvre de bien est trouvée dans l'état « présentée devant l'âme ». La forme passive indique que la présentation ne vient pas de l'âme elle-même — quelqu'un d'autre rend l'œuvre présente devant elle.

**ʿAmilatꞌ** (a fait) — deuxième occurrence du même verbe, cette fois pour les mauvais actes. La répétition du même verbe souligne que c'est la même personne qui a fait du bien ET du mal.

**Sūʾin** (mal) est un nom au génitif (après min partitif), de la racine s-w-ʾ. Le sūʾ est le mal — le contraire du khayr. Le verset oppose les deux catégories d'actes : ce qu'elle a fait de bien et ce qu'elle a fait de mal.

**Tawaddu** (souhaite) est un verbe à la forme V (réflexive/intensive) de la racine w-d-d, à l'inaccompli, troisième personne du féminin singulier. La racine w-d-d signifie fondamentalement « aimer ». La forme V ici exprime un souhait ardent — l'âme souhaiterait (avec law = si seulement) qu'il y ait une grande distance entre elle et son mal.

**Baynahā** (entre elle) est le nom bayna (entre) avec le pronom suffixe hā (elle = l'âme, féminin). La racine b-y-n signifie « séparer, être entre ». Bayna désigne l'espace qui sépare deux réalités.

**Baynahu** (entre lui) est le même nom avec le pronom suffixe hu (lui = le mal, masculin). La répétition « entre elle et entre lui » souligne la dualité : l'âme d'un côté, son mal de l'autre. L'âme veut une distance entre les deux.

**Amadan** (distance) est un nom à l'accusatif de la racine ʾ-m-d. D'après les sources étymologiques, l'amad est « le temps considéré du point de vue de sa fin, l'étendue ultime, le terme, la limite ». Ici, amadan baʿīdan signifie une étendue (temporelle ou spatiale) très grande — une distance maximale.

**Baʿīdan** (lointaine) est un adjectif de la forme faʿīl de la racine b-ʿ-d (être loin), à l'accusatif, qualifiant amadan. L'éloignement est la qualité de ce qui est hors d'atteinte. L'âme souhaite que son mal soit le plus loin possible d'elle.

**Yaḥadhdhirukum** (vous met en garde contre) est un verbe à la forme II (causative) de la racine ḥ-dh-r, à l'inaccompli, troisième personne du masculin singulier avec le pronom suffixe kum (vous). C'est la même formule exacte que dans le verset 28. La forme II signifie « rendre prudent, mettre en garde ». Le waw au début est conjonctif (« et »).

**Allāhu** (Dieu) est le nom propre de la divinité, sujet du verbe yaḥadhdhiru. C'est Dieu lui-même qui met en garde.

**Nafsahu** (lui-même) est le mot nafs (soi-même) avec le pronom possessif hu (son). L'expression « Dieu vous met en garde contre nafsahu » signifie littéralement « contre son propre soi ». Le texte ne précise pas le contenu de cette mise en garde — il dit seulement que Dieu avertit contre lui-même.

**Allāhu** (Dieu) — deuxième occurrence, cette fois sujet d'une phrase nominale. La répétition du nom souligne la continuité : le même Dieu qui met en garde est aussi compatissant.

**Raʾūfun** (compatissant) est un adjectif de la forme faʿūl (intensif) de la racine r-ʾ-f, en position d'attribut (khabar). La forme faʿūl indique une qualité permanente et intense — pas une compassion ponctuelle mais un trait fondamental. D'après les sources étymologiques, la raʾfa est une compassion intense, plus forte que la raḥma. Placé juste après la mise en garde, ce mot montre que l'avertissement est motivé par la compassion.

**Bil-ʿibād** (envers les serviteurs) est le nom pluriel ʿibād (serviteurs, de la racine ʿ-b-d) avec la préposition bi (envers/avec). Le texte dit « les serviteurs » — pas « Ses serviteurs ». Il n'y a pas de pronom possessif dans le texte arabe.

§JUSTIFICATION§
**le jour** — Le sens retenu est « Temps/Période ». Le mot « jour » est choisi car yawma est un nom temporel. L'alternative « événement » est écartée car le mot désigne le cadre temporel, pas l'événement en soi.

**trouve** — Le sens retenu est « Découverte/Existence ». Le mot « trouve » est choisi car tajidu exprime la rencontre directe — chaque âme « tombe sur » ses propres actes. L'alternative « sait » est écartée car le contexte implique une rencontre concrète, pas un savoir abstrait.

**chaque** — Le sens retenu est « Totalité ». Le mot « chaque » est choisi car kull en position de sujet individualise — chaque âme, une par une.

**âme** — Le sens retenu est « Âme/Être ». Le mot « âme » est choisi car nafs désigne l'être dans sa totalité. L'alternative « personne » est écartée car « âme » rend mieux la dimension intérieure du soi responsable.

**a fait** — Le sens retenu est « Action/Oeuvre ». Le mot « fait » est choisi car c'est le français courant pour exprimer l'accompli de ʿamila. L'alternative « œuvre » est écartée car c'est un nom, alors que le verbe demande un verbe.

**bien** — Le sens retenu est « Bien/Excellence ». Le mot « bien » est choisi car c'est le nom générique du khayr.

**présenté** — Le sens retenu est « Présence/Témoignage ». Le mot « présenté » est choisi car le participe passif de la forme IV de ḥ-ḍ-r (rendre présent) signifie « amené devant ». L'alternative « confronté » est écartée car elle ajoute une connotation d'affrontement absente de la racine ḥ-ḍ-r (simple présence).

**mal** — Le sens retenu est « Mal/Mauvais ». Le mot « mal » est choisi car c'est le contraire direct du bien (khayr).

**souhaite** — Le sens retenu est « Souhait/Désir ». Le mot « souhaite » est choisi car la forme V de w-d-d avec law exprime un souhait irréalisable. L'alternative « aime » est écartée car la forme V dans ce contexte grammatical active le sens de souhait, pas d'amour.

**entre** — Le sens retenu est « Séparation/Distance ». Le mot « entre » est la traduction directe de bayna.

**distance** — Le sens retenu est « Durée/Limite ». Le mot « distance » est choisi car amad dans ce contexte exprime l'étendue qui sépare deux réalités. L'alternative « terme » est écartée car elle implique une fin temporelle, alors que le contexte parle d'un espace de séparation.

**lointaine** — Le sens retenu est « Éloignement/Distance ». Le mot « lointaine » est choisi car baʿīd est l'adjectif de l'éloignement.

**met en garde** — Le sens retenu est « Avertissement/Mise en garde ». La même formule que dans le verset 28, traduite de la même manière.

**Dieu** — Le sens retenu est « Divinité ». Traduction systématique de Allāh.

**lui-même** — Le sens retenu est « Âme/Être ». Le mot « lui-même » traduit nafsahu (son propre soi).

**compatissant** — Le sens retenu est « Compassion/Clémence ». Le mot « compatissant » est choisi car raʾūf est la forme intensive de la racine r-ʾ-f. L'alternative « miséricordieux » est écartée car elle correspond à raḥīm (racine r-ḥ-m), pas à raʾūf (racine r-ʾ-f).

**les serviteurs** — Le sens retenu est « Servitude/Esclavage ». Le mot « serviteurs » est choisi car ʿibād est le pluriel de ʿabd (celui qui sert). L'alternative « esclaves » est écartée car trop restrictif — ʿibād dans ce contexte englobe tous ceux qui servent.

§CRITIQUE§
**trouve/présenté vs confrontée** — Les traductions courantes donnent « se trouvera confrontée » pour tajidu... muḥḍarān. Ce choix vient d'une lecture interprétative : « confronter » implique un face-à-face hostile, comme si les actes s'opposaient à la personne. Mais le texte dit simplement tajidu (elle trouve) et muḥḍar (présenté, amené devant). La racine ḥ-ḍ-r signifie « être présent, venir devant » — pas « affronter ». L'acte de bien est présenté devant l'âme, comme un témoignage, pas comme un adversaire.

**[Ses] serviteurs** — Les traductions courantes ajoutent « [Ses] » entre crochets devant « serviteurs ». L'arabe dit bil-ʿibād (les serviteurs) sans aucun pronom possessif. Les crochets signalent honnêtement l'ajout, mais celui-ci restreint le sens : « Ses serviteurs » suppose que seuls les serviteurs de Dieu reçoivent la compassion, alors que le texte dit « les serviteurs » sans restriction. La distinction est importante : la compassion divine, telle que formulée dans ce verset, n'est pas conditionnelle.`;

  const {error:trErr} = await db.from('verse_analyses').update({
    segments: segs, translation_arab, full_translation, translation_explanation, validated: false
  }).eq('id', VA_ID);
  console.log('\nTranslation update:', trErr ? 'ERROR: '+trErr.message : 'OK');

  // 6. Daily phrases for roots with 0 daily
  console.log('\n--- 4. Daily phrases ---');
  const dailyNeeded = [
    {aid:815, senses:[ // hdr (ح ض ر)
      {arabic:'هل أنت حاضر غدًا؟', phon:'hal anta ḥāḍir ghadan?', french:'Es-tu présent demain ?', sense:'être présent'},
      {arabic:'حَضَرَ الاجتماعَ', phon:'ḥaḍara al-ijtimāʿ', french:"Il a assisté à la réunion", sense:'assister à'},
      {arabic:'أُحْضِرَ أمام القاضي', phon:'uḥḍira amāma al-qāḍī', french:'Il a été présenté devant le juge', sense:'se présenter'}
    ]},
    {aid:539, senses:[ // swa (س و ء)
      {arabic:'هذا سوء تصرف', phon:'hādhā sūʾ taṣarruf', french:"C'est un mauvais comportement", sense:'mal'},
      {arabic:'أساء إليه', phon:'asāʾa ilayhi', french:'Il lui a fait du mal', sense:'mauvais'},
      {arabic:'لا تُسِئ الظنّ', phon:'lā tusiʾ aẓ-ẓann', french:"Ne pense pas mal d'autrui", sense:'nuisible'}
    ]},
    {aid:1250, senses:[ // amd (أ م د)
      {arabic:'ما أمد هذا العقد؟', phon:'mā amad hādhā al-ʿaqd?', french:'Quelle est la durée de ce contrat ?', sense:'durée'},
      {arabic:'بلغ أمده', phon:'balagha amadahu', french:'Il a atteint son terme', sense:'terme'},
      {arabic:'حدّد لهم أمدًا', phon:'ḥaddada lahum amadan', french:'Il leur a fixé un délai', sense:'période'}
    ]},
    {aid:838, senses:[ // raf (ر أ ف)
      {arabic:'رأف بالأطفال', phon:'raʾufa bil-aṭfāl', french:'Il a été compatissant envers les enfants', sense:'être compatissant'},
      {arabic:'عامله برأفة', phon:'ʿāmalahu bi-raʾfa', french:"Il l'a traité avec tendresse", sense:'tendresse'},
      {arabic:'هو رؤوف بالناس', phon:'huwa raʾūf bin-nās', french:'Il est bienveillant envers les gens', sense:'bienveillance'}
    ]}
  ];

  for (const d of dailyNeeded) {
    const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', d.aid);
    if (count > 0) { console.log('aid='+d.aid+': déjà '+count+' daily — SKIP'); continue; }
    const {error} = await db.from('word_daily').insert(d.senses.map(s=>({analysis_id:d.aid,...s})));
    console.log('aid='+d.aid+':', error ? 'ERROR: '+error.message : '3 phrases OK');
  }

  // 7. Verification
  console.log('\n--- 5. Vérification ---');
  const {data:vwaCheck} = await db.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log('VWA: '+vwaCheck.length+' entrées');
  vwaCheck.forEach(v => console.log('  pos='+v.position+' '+v.word_key+' → '+v.sense_chosen));

  const {data:vaCheck} = await db.from('verse_analyses').select('translation_arab').eq('id', VA_ID).single();
  console.log('\nTraduction: '+(vaCheck.translation_arab?vaCheck.translation_arab.substring(0,80)+'...':'VIDE <<<'));

  console.log('\n=== ÉTAPES 3+4 TERMINÉES ===');
})();
