const {createClient}=require('@supabase/supabase-js');
const db=createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
const V=312; // verse_id S3:V19

(async()=>{
  console.log("=== PIPELINE S3:V19 (verse_id=312) ===\n");

  const {error:delErr}=await db.from('verse_word_analyses').delete().eq('verse_id',V);
  if(delErr){console.log('DELETE ERROR:',delErr);return;}
  console.log('VWA deleted');

  const mkVWA=(wk,pos,sc,cc,concepts)=>({
    verse_id:V, word_key:wk, position:pos, sense_chosen:sc,
    analysis_axes:{sense_chosen:sc, concept_chosen:cc, concepts}
  });

  const vwas=[
    // dyn pos=2
    mkVWA('dyn',2,'religion','Religion/Système',{
      "Religion/Système":{status:"retenu",senses:["habitude","coutume","système de croyances","religion","pratique"],
        proof_ctx:"Ad-dīna (le système de vie) est un nom défini au cas accusatif, sujet de inna. Le dīn est le système global — la coutume, la pratique, le mode de vie. Le nom défini identifie un système connu et précis."},
      "Obéissance/Soumission":{status:"probable",senses:["se soumettre","soumission","assujettissement","obéir"],
        proof_ctx:"La soumission est une composante du dīn (le système implique l'obéissance) mais le dīn est plus large qu'un simple acte d'obéissance — c'est le système entier."},
      "Rétribution/Compte":{status:"peu_probable",senses:["compensation","récompense","jugement","rétribution","punition","rendre ce qui est dû"],
        proof_ctx:"La rétribution est un autre sens de la racine d-y-n, mais le contexte ici est la déclaration du système, pas le jour du compte."},
      "Dette/Obligation":{status:"nul",senses:["obligation financière","créance","prêt","dette"],proof_ctx:"Sens financier hors sujet."},
      "Eau/Liquide":{status:"nul",senses:["pluie continue"],proof_ctx:"Hors sujet."},
      "Sens isolé/Maladie":{status:"nul",senses:["maladie"],proof_ctx:"Hors sujet."}
    }),

    // llh pos=4
    mkVWA('llh',4,'Dieu','Divinité',{
      "Divinité":{status:"retenu",senses:["théologie","dieu","Dieu","divinité"],
        proof_ctx:"Allāhi (de Dieu) est le nom propre au génitif, complément de ʿinda (auprès de). Le système de vie est défini par rapport à Dieu — c'est auprès de Lui qu'il est établi."},
      "Adoration/Culte":{status:"probable",senses:["adorer","servir","se consacrer au culte"],
        proof_ctx:"L'adoration est l'acte dirigé vers Dieu, pas la divinité elle-même."},
      "Asservissement":{status:"nul",senses:["réduire en esclavage"],proof_ctx:"Hors sujet."},
      "Confusion/Perplexité":{status:"nul",senses:["être confus"],proof_ctx:"Hors sujet."}
    }),

    // slm pos=5
    mkVWA('slm',5,'soumission','Paix/Soumission',{
      "Paix/Soumission":{status:"retenu",senses:["paix","islam","salut","soumission"],
        proof_ctx:"Al-islāmu (la remise entière) est le maṣdar de la forme IV (aslama = remettre, livrer entièrement). Le islām est l'acte de se remettre entièrement. Dans la phrase nominale, c'est l'attribut du sujet dīn — le système de vie est la remise entière."},
      "Intégrité/Santé":{status:"peu_probable",senses:["sain et sauf"],
        proof_ctx:"La santé est le sens physique de s-l-m (être intact). Mais le islām ici est le maṣdar de la forme IV, pas de la forme I."}
    }),

    // khlf pos=8
    mkVWA('khlf',8,'diverger','Divergence/Désaccord',{
      "Divergence/Désaccord":{status:"retenu",senses:["diverger","s'opposer","être en désaccord","contrevenir"],
        proof_ctx:"Ikhtalafa (ont divergé) est un verbe accompli forme VIII de kh-l-f. La forme VIII (ifta'ala) est réciproque — ils ont divergé les uns des autres. C'est un acte réciproque achevé. Le verbe accompli présente cette divergence comme un fait historique."},
      "Succession/Différence":{status:"peu_probable",senses:["succéder","remplacer","vice-gérant","postérité","successeur","différer","derrière"],
        proof_ctx:"La succession implique un remplacement dans le temps. Mais la forme VIII ikhtalafa n'est pas « se succéder » — c'est « diverger les uns des autres ». Le contexte (après la venue du savoir, par transgression) confirme le désaccord."},
      "Alternance":{status:"nul",senses:["alterner","se succéder mutuellement"],proof_ctx:"L'alternance est un sens de la forme VIII dans un contexte physique (jour/nuit) absent ici."},
      "Manquement":{status:"nul",senses:["manquer à sa promesse","reculer"],proof_ctx:"Hors sujet."}
    }),

    // aty pos=10 (corrigé de awt)
    mkVWA('aty',10,'donner','Venue/Arrivée',{
      "Venue/Arrivée":{status:"retenu",senses:["commettre","donner","arriver","venir","apporter"],
        proof_ctx:"Ūtū (ont reçu) est un verbe accompli passif de la racine a-t-y. Le passif indique qu'ils ont reçu quelque chose sans préciser qui a donné. L'objet reçu est l'écrit (al-kitāb)."},
      "Sens isolé/Détruire":{status:"nul",senses:["détruire"],proof_ctx:"Hors sujet."}
    }),

    // ktb pos=11
    mkVWA('ktb',11,'livre','Livre/Écrit',{
      "Livre/Écrit":{status:"retenu",senses:["registre","livre","écriture révélée","contrat d'affranchissement","contrat de mariage","contrat écrit"],
        proof_ctx:"Al-kitāba (l'écrit) est le nom défini au cas accusatif — objet de ūtū (ont reçu). Le kitāb est l'écrit, le livre. Ceux qui ont reçu l'écrit sont ceux qui ont accès à un texte transmis."},
      "Écriture/Inscription":{status:"peu_probable",senses:["écrire à quelqu'un","savant","art de l'écriture","enseignant","copier un livre","écrire","s'inscrire","dicter","demander d'écrire","école","scribe","vendeur de livres"],
        proof_ctx:"L'écriture est l'acte de tracer, pas le résultat. Ici c'est le kitāb (le livre, l'écrit) qui est l'objet reçu."},
      "Obligation/Décret":{status:"nul",senses:["rendre obligatoire","juger","décret divin","prescrire","prédestination"],proof_ctx:"Le décret est un autre sens de k-t-b hors contexte ici."},
      "Assemblage/Couture":{status:"nul",senses:["armée","coudre","fermer la vulve","lier l'outre","collecter","se ceindre","rassembler","attacher","préparer les troupes"],proof_ctx:"Sens physique sans rapport."},
      "Sens isolé/Gonflé":{status:"nul",senses:["gonflé et plein"],proof_ctx:"Hors sujet."},
      "Souffle/Vent":{status:"nul",senses:["rétention urinaire"],proof_ctx:"Hors sujet."},
      "Sens isolé/Constipation":{status:"nul",senses:["constipation"],proof_ctx:"Hors sujet."},
      "Sens isolé/Flèche":{status:"nul",senses:["flèche d'entraînement"],proof_ctx:"Hors sujet."}
    }),

    // baed pos=14 (corrigé de bed)
    mkVWA('baed',14,'après','Postériorité',{
      "Postériorité":{status:"retenu",senses:["après","ensuite"],
        proof_ctx:"Baʿdi (après) est un nom au génitif avec la préposition min (à partir de). Min baʿdi = à partir d'après — introduit la chronologie : la divergence n'a eu lieu qu'après la venue du savoir."},
      "Éloignement/Distance":{status:"peu_probable",senses:["être loin","éloignement"],
        proof_ctx:"L'éloignement est le sens spatial de b-ʿ-d. Mais ici c'est la dimension temporelle qui est en jeu, pas la distance physique."},
      "Mort/Destruction":{status:"nul",senses:["périr"],proof_ctx:"Hors sujet."}
    }),

    // jyy pos=16
    mkVWA('jyy',16,'venir','Venue/Apport',{
      "Venue/Apport":{status:"retenu",senses:["apporter","se rendre à","venir","arriver"],
        proof_ctx:"Jā'ahumu (leur est parvenu) est un verbe accompli actif de j-y-ʾ. Le savoir est venu à eux — le sujet (le savoir) se déplace vers eux. Événement achevé."},
      "Apport/Causalité":{status:"peu_probable",senses:["faire venir","amener"],
        proof_ctx:"La causalité (faire venir) est la forme IV. Ici c'est la forme I (venir soi-même)."},
      "Confrontation":{status:"nul",senses:["faire face","être en face"],proof_ctx:"Sens de la forme III, hors contexte."}
    }),

    // elm pos=17
    mkVWA('elm',17,'savoir','Savoir/Connaissance',{
      "Savoir/Connaissance":{status:"retenu",senses:["enseignement","savant","certitude","science","savoir","être informé","connaître"],
        proof_ctx:"Al-ʿilmu (le savoir) est le nom défini au nominatif — sujet de jā'ahumu (leur est parvenu). Le savoir est ce qui est parvenu à ceux qui ont reçu l'écrit, et c'est après sa venue qu'ils ont divergé."},
      "Marque/Signe":{status:"peu_probable",senses:["drapeau","montagne","lèvre fendue","repère","étendard","marquer","signe"],
        proof_ctx:"Le signe est le sens physique concret. Le contexte est intellectuel."},
      "Monde/Création":{status:"nul",senses:["les mondes","univers","ensemble des créatures","monde"],proof_ctx:"Autre mot (ʿālam) avec un autre voweling."},
      "Sens isolé/Enseigner":{status:"nul",senses:["enseigner"],proof_ctx:"Enseigner est l'acte de transmettre, pas le savoir lui-même."},
      "Sens isolé/Homonyme":{status:"nul",senses:["homonyme"],proof_ctx:"Hors sujet."},
      "Lieu/Géographie":{status:"nul",senses:["informer","nommer"],proof_ctx:"Hors sujet."}
    }),

    // bghy pos=18
    mkVWA('bghy',18,'transgresser','Transgression/Injustice',{
      "Transgression/Injustice":{status:"retenu",senses:["injustice","transgresser","oppression"],
        proof_ctx:"Baghyan (par transgression) est un maṣdar indéfini au cas accusatif — un complément de cause (mafʿūl li-ajlihi). La transgression est la raison pour laquelle ils ont divergé. Ce n'est pas un manque de savoir (le savoir leur était parvenu) mais un excès volontaire."},
      "Recherche/Quête":{status:"peu_probable",senses:["chercher","désirer"],
        proof_ctx:"La recherche est un sens neutre de b-gh-y. Mais le contexte est négatif — la divergence après le savoir est un acte blâmable, pas une simple recherche."},
      "Corps/Anatomie":{status:"nul",senses:["prostitution"],proof_ctx:"Sens physique isolé."}
    }),

    // byn pos=19
    mkVWA('byn',19,'entre','Séparation/Distance',{
      "Séparation/Distance":{status:"retenu",senses:["séparer","quitter","entre"],
        proof_ctx:"Baynahum (entre eux) est un ẓarf (adverbe de lieu) avec le pronom suffixe -hum. Le bayn est l'espace qui sépare — la transgression s'est faite dans l'espace entre eux, les uns contre les autres."},
      "Clarté/Évidence":{status:"peu_probable",senses:["évident","être clair","expliquer","preuve"],
        proof_ctx:"La clarté est un autre sens de b-y-n mais baynahum ici est clairement l'adverbe spatial, pas la clarté."}
    }),

    // kfr pos=22
    mkVWA('kfr',22,'rejeter','Rejet/Ingratitude',{
      "Rejet/Ingratitude":{status:"retenu",senses:["renier un bienfait","mécréant","rejeter","être ingrat","nier"],
        proof_ctx:"Yakfur (rejette) est un verbe inaccompli apocopé (majzūm après man). Le rejet est un acte directionnel — il sort de la personne et porte sur un objet (les signes de Dieu). L'inaccompli apocopé indique une éventualité."},
      "Couverture/Dissimulation":{status:"probable",senses:["cacher","la nuit qui couvre","couvrir"],
        proof_ctx:"Couvrir est le sens physique de k-f-r (couvrir un bienfait = être ingrat). Mais yakfur bi-āyāti allāhi (rejeter les signes de Dieu) est un acte de rejet actif, pas de simple dissimulation."},
      "Expiation/Réparation":{status:"nul",senses:["expier","effacer les péchés"],proof_ctx:"L'expiation est l'opposé du rejet — hors sujet."},
      "Sens isolé/Village":{status:"nul",senses:["village"],proof_ctx:"Hors sujet."},
      "Sens isolé/Cultivateur":{status:"nul",senses:["cultivateur"],proof_ctx:"Hors sujet."},
      "Sens isolé/Goudron":{status:"nul",senses:["goudron"],proof_ctx:"Hors sujet."}
    }),

    // ayt pos=23
    mkVWA('ayt',23,'signe','Signe/Preuve',{
      "Signe/Preuve":{status:"retenu",senses:["marque","miracle","signe","preuve"],
        proof_ctx:"Āyāti (les signes) est le pluriel de āya au génitif défini, complément de yakfur bi- (rejeter). Les āyāt sont les signes de Dieu — les marques visibles, les preuves de Son existence et de Son message."},
      "Révélation/Parole":{status:"peu_probable",senses:["verset"],
        proof_ctx:"Le verset est un signe dans le texte. Mais āyāt ici est plus large — les signes de Dieu en général, pas seulement les versets du texte."}
    }),

    // llh pos=27
    mkVWA('llh',27,'Dieu','Divinité',{
      "Divinité":{status:"retenu",senses:["théologie","dieu","Dieu","divinité"],
        proof_ctx:"Allāha (Dieu) au cas accusatif, sujet de inna dans la deuxième proposition. Dieu est qualifié de prompt au calcul."},
      "Adoration/Culte":{status:"probable",senses:["adorer","servir","se consacrer au culte"],
        proof_ctx:"L'adoration est l'acte dirigé vers Dieu, pas la divinité elle-même."},
      "Asservissement":{status:"nul",senses:["réduire en esclavage"],proof_ctx:"Hors sujet."},
      "Confusion/Perplexité":{status:"nul",senses:["être confus"],proof_ctx:"Hors sujet."}
    }),

    // sre pos=28
    mkVWA('sre',28,'être rapide','Vitesse/Empressement',{
      "Vitesse/Empressement":{status:"retenu",senses:["être rapide","rapidité","promptitude","se hâter","s'empresser","accélérer"],
        proof_ctx:"Sarīʿu (prompt) est un adjectif intensif (faʿīl) en iḍāfa avec al-ḥisāb. Le faʿīl indique une qualité permanente — la rapidité du calcul est intrinsèque, pas un empressement ponctuel."},
      "Rivalité/Devancement":{status:"nul",senses:["rivaliser de hâte","devancer"],proof_ctx:"La rivalité implique un concurrent, hors sujet."},
      "Sens isolé/Avant-garde":{status:"nul",senses:["les premiers à avancer"],proof_ctx:"Hors sujet."}
    }),

    // hsb pos=29
    mkVWA('hsb',29,'compte','Calcul/Évaluation',{
      "Calcul/Évaluation":{status:"retenu",senses:["compter","estimer","penser","compte"],
        proof_ctx:"Al-ḥisābi (le calcul) est un nom défini au génitif en iḍāfa avec sarīʿu. Le ḥisāb est le compte — l'évaluation précise de ce qui est dû. Sarīʿu l-ḥisāb = prompt au calcul."},
      "Suffisance":{status:"peu_probable",senses:["suffisant","suffire"],
        proof_ctx:"La suffisance (ḥasb) est un autre sens de la racine mais ici c'est le ḥisāb (calcul), pas le ḥasb."},
      "Sens isolé/Noblesse":{status:"nul",senses:["noblesse"],proof_ctx:"Hors sujet."}
    })
  ];

  const {data:ins,error:insErr}=await db.from('verse_word_analyses').insert(vwas).select('id,word_key,position');
  if(insErr){console.log('INSERT VWA ERROR:',insErr);return;}
  console.log('VWA inserted:',ins.length);
  ins.forEach(v=>console.log('  pos='+v.position+' wk='+v.word_key));

  // 3. UPDATE verse_analyses
  const segments=[
    {fr:"Certes",phon:"inna",arabic:"\u0625\u0650\u0646\u0651\u064E",position:1,word_key:null,is_particle:true},
    {fr:"le système de vie",pos:"nom",phon:"ad-d\u012Bna",arabic:"\u0671\u0644\u062F\u0651\u0650\u064A\u0646\u064E",position:2,word_key:"dyn",is_particle:false,sense_retenu:"religion"},
    {fr:"auprès de",phon:"\u02BFinda",arabic:"\u0639\u0650\u0646\u062F\u064E",position:3,word_key:null,is_particle:true},
    {fr:"Dieu",pos:"nom",phon:"all\u0101hi",arabic:"\u0671\u0644\u0644\u0651\u064E\u0647\u0650",position:4,word_key:"llh",is_particle:false,sense_retenu:"Dieu"},
    {fr:"la remise enti\u00e8re",pos:"nom",phon:"al-isl\u0101mu",arabic:"\u0671\u0644\u0652\u0625\u0650\u0633\u0652\u0644\u064E\u0670\u0645\u064F",position:5,word_key:"slm",is_particle:false,sense_retenu:"soumission"},
    {fr:"et",phon:"wa",arabic:"\u0648\u064E",position:6,word_key:null,is_particle:true},
    {fr:"ne ... que",phon:"m\u0101",arabic:"\u0645\u064E\u0627",position:7,word_key:null,is_particle:true},
    {fr:"ont diverg\u00e9",pos:"verbe",phon:"ikhtalafa",arabic:"\u0671\u062E\u0652\u062A\u064E\u0644\u064E\u0641\u064E",position:8,word_key:"khlf",is_particle:false,sense_retenu:"diverger"},
    {fr:"ceux qui",phon:"alladh\u012Bna",arabic:"\u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E",position:9,word_key:null,is_particle:true},
    {fr:"ont re\u00e7u",pos:"verbe",phon:"\u016Bt\u016B",arabic:"\u0623\u064F\u0648\u062A\u064F\u0648\u0627\u06DF",position:10,word_key:"aty",is_particle:false,sense_retenu:"donner"},
    {fr:"l'\u00e9crit",pos:"nom",phon:"al-kit\u0101ba",arabic:"\u0671\u0644\u0652\u0643\u0650\u062A\u064E\u0670\u0628\u064E",position:11,word_key:"ktb",is_particle:false,sense_retenu:"livre"},
    {fr:"sauf",phon:"ill\u0101",arabic:"\u0625\u0650\u0644\u0651\u064E\u0627",position:12,word_key:null,is_particle:true},
    {fr:"\u00e0 partir de",phon:"min",arabic:"\u0645\u0650\u0646\u06E2",position:13,word_key:null,is_particle:true},
    {fr:"apr\u00e8s",pos:"nom",phon:"ba\u02BFdi",arabic:"\u0628\u064E\u0639\u0652\u062F\u0650",position:14,word_key:"baed",is_particle:false,sense_retenu:"apr\u00e8s"},
    {fr:"que",phon:"m\u0101",arabic:"\u0645\u064E\u0627",position:15,word_key:null,is_particle:true},
    {fr:"leur est parvenu",pos:"verbe",phon:"j\u0101\u02BEahumu",arabic:"\u062C\u064E\u0622\u0621\u064E\u0647\u064F\u0645\u064F",position:16,word_key:"jyy",is_particle:false,sense_retenu:"venir"},
    {fr:"le savoir",pos:"nom",phon:"al-\u02BFilmu",arabic:"\u0671\u0644\u0652\u0639\u0650\u0644\u0652\u0645\u064F",position:17,word_key:"elm",is_particle:false,sense_retenu:"savoir"},
    {fr:"par transgression",pos:"nom",phon:"baghyan",arabic:"\u0628\u064E\u063A\u0652\u064A\u064B\u06E2\u0627",position:18,word_key:"bghy",is_particle:false,sense_retenu:"transgresser"},
    {fr:"entre eux",pos:"nom",phon:"baynahum",arabic:"\u0628\u064E\u064A\u0652\u0646\u064E\u0647\u064F\u0645\u0652",position:19,word_key:"byn",is_particle:false,sense_retenu:"entre"},
    {fr:"et",phon:"wa",arabic:"\u0648\u064E",position:20,word_key:null,is_particle:true},
    {fr:"celui qui",phon:"man",arabic:"\u0645\u064E\u0646",position:21,word_key:null,is_particle:true},
    {fr:"rejette",pos:"verbe",phon:"yakfur",arabic:"\u064A\u064E\u0643\u0652\u0641\u064F\u0631\u0652",position:22,word_key:"kfr",is_particle:false,sense_retenu:"rejeter"},
    {fr:"les signes de",pos:"nom",phon:"\u0101y\u0101ti",arabic:"\u0628\u0650\u0640\u0654\u0627\u064A\u064E\u0670\u062A\u0650",position:23,word_key:"ayt",is_particle:false,sense_retenu:"signe"},
    {fr:"Dieu",phon:"all\u0101hi",arabic:"\u0671\u0644\u0644\u0651\u064E\u0647\u0650",position:24,word_key:null,is_particle:true},
    {fr:"alors",phon:"fa",arabic:"\u0641\u064E",position:25,word_key:null,is_particle:true},
    {fr:"certes",phon:"inna",arabic:"\u0625\u0650\u0646\u0651\u064E",position:26,word_key:null,is_particle:true},
    {fr:"Dieu",pos:"nom",phon:"all\u0101ha",arabic:"\u0671\u0644\u0644\u0651\u064E\u0647\u064E",position:27,word_key:"llh",is_particle:false,sense_retenu:"Dieu"},
    {fr:"prompt",pos:"nom",phon:"sar\u012B\u02BFu",arabic:"\u0633\u064E\u0631\u0650\u064A\u0639\u064F",position:28,word_key:"sre",is_particle:false,sense_retenu:"\u00eatre rapide"},
    {fr:"au calcul",pos:"nom",phon:"al-\u1E25is\u0101bi",arabic:"\u0671\u0644\u0652\u062D\u0650\u0633\u064E\u0627\u0628\u0650",position:29,word_key:"hsb",is_particle:false,sense_retenu:"compte"}
  ];

  const translationArab="Le syst\u00e8me de vie aupr\u00e8s de Dieu est la remise enti\u00e8re. Et ceux qui ont re\u00e7u l'\u00e9crit n'ont diverg\u00e9 qu'apr\u00e8s que le savoir leur est parvenu, par transgression entre eux. Et celui qui rejette les signes de Dieu \u2014 Dieu est prompt au calcul.";

  const fullTranslation="Certes, la religion accept\u00e9e d'Allah, c'est l'Islam. Ceux auxquels le Livre a \u00e9t\u00e9 apport\u00e9 ne se sont disput\u00e9s, par rivalit\u00e9 entre eux, qu'apr\u00e8s avoir re\u00e7u la science. Et quiconque ne croit pas aux signes d'Allah... alors Allah est prompt \u00e0 demander compte.";

  const explanation=`\u00a7DEMARCHE\u00a7
Ce verset est compos\u00e9 de trois propositions. La premi\u00e8re d\u00e9clare le syst\u00e8me de vie aupr\u00e8s de Dieu. La deuxi\u00e8me constate la divergence historique de ceux qui ont re\u00e7u l'\u00e9crit. La troisi\u00e8me avertit celui qui rejette les signes de Dieu.

**Inna** (certes) est une particule d'insistance qui introduit une phrase nominale et met le sujet au cas accusatif. **Ad-d\u012Bna** (le syst\u00e8me de vie) est le sujet au cas accusatif. La racine d-y-n couvre la coutume, l'habitude, le syst\u00e8me de croyances, la pratique, la r\u00e9tribution et l'ob\u00e9issance. Le d\u012Bn est le syst\u00e8me global de vie \u2014 pas seulement la croyance, mais la coutume, la pratique et le rapport aux choses.

**\u02BFInda** (aupr\u00e8s de) est une pr\u00e9position de proximit\u00e9. **All\u0101hi** (Dieu) est au g\u00e9nitif, compl\u00e9ment de \u02BFinda. L'expression \u02BFinda all\u0101hi (aupr\u00e8s de Dieu) d\u00e9finit le r\u00e9f\u00e9rent \u2014 c'est par rapport \u00e0 Dieu que ce syst\u00e8me est d\u00e9fini.

**Al-isl\u0101mu** (la remise enti\u00e8re) est le ma\u1E63dar de la forme IV de la racine s-l-m (aslama = remettre, livrer enti\u00e8rement). Un ma\u1E63dar est un nom d'action \u2014 c'est l'acte de se remettre enti\u00e8rement. La forme IV (af\u02BFala) ajoute la causalit\u00e9 : faire que la paix/int\u00e9grit\u00e9 se r\u00e9alise en se livrant enti\u00e8rement. Al-isl\u0101mu est l'attribut du sujet ad-d\u012Bna \u2014 le syst\u00e8me de vie est la remise enti\u00e8re.

**Ikhtalafa** (ont diverg\u00e9) est un verbe accompli forme VIII de la racine kh-l-f. La forme VIII (ifta\u02BFala) est r\u00e9ciproque \u2014 ils ont diverg\u00e9 les uns des autres. C'est un acte r\u00e9ciproque achev\u00e9. La racine kh-l-f, d'apr\u00e8s les sources \u00e9tymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), couvre la succession, la divergence, l'alternance et le manquement. La forme VIII sp\u00e9cifiquement couvre la divergence r\u00e9ciproque et l'alternance.

**Alladh\u012Bna** (ceux qui) est un pronom relatif pluriel qui introduit une proposition relative. **\u016At\u016B** (ont re\u00e7u) est un verbe accompli passif de la racine a-t-y \u2014 ils ont re\u00e7u quelque chose sans que le texte pr\u00e9cise qui a donn\u00e9. Le passif met l'accent sur le fait de recevoir, pas sur le donneur.

**Al-kit\u0101ba** (l'\u00e9crit) est le nom d\u00e9fini au cas accusatif \u2014 c'est l'objet re\u00e7u. La racine k-t-b couvre l'\u00e9criture, le livre, l'inscription et le d\u00e9cret. Le kit\u0101b est l'\u00e9crit, le livre \u2014 un texte transmis.

**Ill\u0101 min ba\u02BFdi m\u0101 j\u0101\u02BEahumu l-\u02BFilmu** (sauf apr\u00e8s que le savoir leur est parvenu) \u2014 cette construction est une restriction : la divergence n'a eu lieu QU'apr\u00e8s la venue du savoir. **Ba\u02BFdi** (apr\u00e8s) vient de la racine b-\u02BF-d (post\u00e9riorit\u00e9, \u00e9loignement). **J\u0101\u02BEahumu** (leur est parvenu) est un verbe accompli actif de la racine j-y-\u02BE (venir). **Al-\u02BFilmu** (le savoir) est le sujet de j\u0101\u02BEa au nominatif. Le savoir est personnifi\u00e9 \u2014 il est venu \u00e0 eux comme un visiteur.

**Baghyan** (par transgression) est un ma\u1E63dar ind\u00e9fini au cas accusatif \u2014 un compl\u00e9ment de cause (maf\u02BF\u016Bl li-ajlihi). La racine b-gh-y couvre la transgression, l'injustice et la recherche. La transgression est la cause de la divergence \u2014 ce n'est pas un manque de savoir (il leur \u00e9tait parvenu) mais un exc\u00e8s volontaire.

**Baynahum** (entre eux) est un \u1E93arf (adverbe de lieu) avec le pronom suffixe -hum. La racine b-y-n couvre la s\u00e9paration, la distance et la clart\u00e9. Ici c'est l'espace entre eux \u2014 la transgression s'est faite les uns contre les autres.

**Man yakfur** (celui qui rejette) \u2014 man est un pronom relatif conditionnel (celui qui/quiconque). **Yakfur** (rejette) est un verbe inaccompli apocop\u00e9 (majz\u016Bm apr\u00e8s man conditionnel). La racine k-f-r couvre le rejet, l'ingratitude et la couverture. Le verbe inaccompli apocop\u00e9 indique une \u00e9ventualit\u00e9 \u2014 si quelqu'un rejette...

**Bi-\u0101y\u0101ti all\u0101hi** (les signes de Dieu) \u2014 \u0101y\u0101t est le pluriel de \u0101ya au g\u00e9nitif d\u00e9fini avec la pr\u00e9position bi- (en/avec). La racine a-y-t couvre le signe, la marque, la preuve et le miracle. Les \u0101y\u0101t sont les signes visibles de Dieu.

**Fa-inna all\u0101ha sar\u012B\u02BFu l-\u1E25is\u0101bi** (alors Dieu est prompt au calcul) \u2014 fa introduit la cons\u00e9quence. **Sar\u012B\u02BFu** (prompt) est un adjectif intensif (pattern fa\u02BF\u012Bl) en i\u1E0D\u0101fa avec **al-\u1E25is\u0101bi** (le calcul). Le fa\u02BF\u012Bl indique une qualit\u00e9 permanente. Le \u1E25is\u0101b (racine \u1E25-s-b) couvre le calcul, l'\u00e9valuation et l'estimation. L'i\u1E0D\u0101fa (annexion) fait de sarī\u02BF un qualificatif permanent de Dieu par rapport au calcul.

\u00a7JUSTIFICATION\u00a7
**le syst\u00e8me de vie** \u2014 Le sens retenu est \u00ab religion \u00bb. Le mot \u00ab syst\u00e8me de vie \u00bb est choisi car il rend l'\u00e9tendue du d\u012Bn \u2014 coutume, pratique, rapport aux choses \u2014 pas seulement la croyance. \u00ab Religion \u00bb est \u00e9cart\u00e9 dans la traduction car trop restrictif en fran\u00e7ais : le mot \u00ab religion \u00bb \u00e9voque un ensemble de croyances et de rites, alors que le d\u012Bn couvre aussi l'habitude et la coutume. \u00ab Culte \u00bb est \u00e9cart\u00e9 car trop limit\u00e9 aux rites.

**Dieu** \u2014 Le sens retenu est \u00ab Dieu \u00bb. Traduction standard du nom propre all\u0101h.

**la remise enti\u00e8re** \u2014 Le sens retenu est \u00ab soumission \u00bb. Le mot \u00ab remise enti\u00e8re \u00bb est choisi car il rend le ma\u1E63dar de la forme IV (aslama = remettre, livrer). \u00ab Soumission \u00bb est \u00e9cart\u00e9 dans la traduction car il implique une contrainte ou une r\u00e9signation, alors que la racine s-l-m est li\u00e9e \u00e0 la paix et \u00e0 l'int\u00e9grit\u00e9 \u2014 on se remet enti\u00e8rement pour acc\u00e9der \u00e0 la paix. \u00ab Islam \u00bb est \u00e9cart\u00e9 car c'est un emprunt non traduit.

**ont diverg\u00e9** \u2014 Le sens retenu est \u00ab diverger \u00bb. Le mot \u00ab diverger \u00bb est choisi car il rend la forme VIII r\u00e9ciproque (ikhtalafa). \u00ab Se disputer \u00bb est \u00e9cart\u00e9 car trop agressif \u2014 la divergence peut \u00eatre intellectuelle sans n\u00e9cessairement impliquer une dispute. \u00ab Diff\u00e9rer \u00bb est un synonyme acceptable mais plus faible.

**ont re\u00e7u** \u2014 Le sens retenu est \u00ab donner \u00bb. Le mot \u00ab ont re\u00e7u \u00bb est choisi car c'est le passif du verbe donner \u2014 \u016Bt\u016B est le passif de \u0101t\u0101. Le passif met l'accent sur ceux qui re\u00e7oivent, pas sur le donneur.

**l'\u00e9crit** \u2014 Le sens retenu est \u00ab livre \u00bb. Le mot \u00ab \u00e9crit \u00bb est choisi car il rend le kit\u0101b \u2014 un texte \u00e9crit et transmis. \u00ab Livre \u00bb est un synonyme acceptable mais \u00ab \u00e9crit \u00bb est plus g\u00e9n\u00e9ral (il inclut tout texte \u00e9crit, pas seulement un volume reli\u00e9).

**apr\u00e8s** \u2014 Le sens retenu est \u00ab apr\u00e8s \u00bb. Sens temporel direct de ba\u02BFdi.

**leur est parvenu** \u2014 Le sens retenu est \u00ab venir \u00bb. Le mot \u00ab parvenir \u00bb est choisi car il rend j\u0101\u02BEa avec l'id\u00e9e d'atteindre la personne. \u00ab Venir \u00bb seul est trop g\u00e9n\u00e9ral \u2014 \u00ab parvenir \u00bb pr\u00e9cise l'arriv\u00e9e au destinataire.

**le savoir** \u2014 Le sens retenu est \u00ab savoir \u00bb. Traduction directe de al-\u02BFilm.

**par transgression** \u2014 Le sens retenu est \u00ab transgresser \u00bb. Le mot \u00ab transgression \u00bb est choisi car il rend le baghy \u2014 l'exc\u00e8s volontaire, le d\u00e9passement des limites. \u00ab Injustice \u00bb est \u00e9cart\u00e9 car plus g\u00e9n\u00e9ral. \u00ab Rivalit\u00e9 \u00bb est \u00e9cart\u00e9 car il n'est pas dans les sens de la racine b-gh-y.

**entre eux** \u2014 Le sens retenu est \u00ab entre \u00bb. Sens spatial direct de bayna.

**rejette** \u2014 Le sens retenu est \u00ab rejeter \u00bb. Le mot \u00ab rejeter \u00bb est choisi car il rend yakfur \u2014 un acte actif de refus. \u00ab Ne croit pas \u00bb est \u00e9cart\u00e9 car le verbe kufr n'est pas un manque de croyance \u2014 c'est un rejet actif, une couverture d\u00e9lib\u00e9r\u00e9e.

**les signes** \u2014 Le sens retenu est \u00ab signe \u00bb. Traduction directe de \u0101y\u0101t.

**prompt** \u2014 Le sens retenu est \u00ab \u00eatre rapide \u00bb. Le mot \u00ab prompt \u00bb est choisi car c'est du fran\u00e7ais courant pour rendre le fa\u02BF\u012Bl sar\u012B\u02BF. \u00ab Rapide \u00bb est un synonyme acceptable mais \u00ab prompt \u00bb est plus adapt\u00e9 au registre.

**au calcul** \u2014 Le sens retenu est \u00ab compte \u00bb. Le mot \u00ab calcul \u00bb est choisi car il rend le \u1E25is\u0101b \u2014 l'\u00e9valuation pr\u00e9cise. \u00ab Compte \u00bb est un synonyme acceptable.

\u00a7CRITIQUE\u00a7
**\u00ab la religion \u00bb vs \u00ab le syst\u00e8me de vie \u00bb** \u2014 Les traductions courantes donnent \u00ab la religion \u00bb pour ad-d\u012Bn. Le mot \u00ab religion \u00bb en fran\u00e7ais \u00e9voque un ensemble de croyances, de rites et d'institutions organis\u00e9es. Le d\u012Bn, d'apr\u00e8s les sources \u00e9tymologiques, est plus large : c'est la coutume, l'habitude, la pratique, le syst\u00e8me de vie. Traduire par \u00ab religion \u00bb r\u00e9duit le d\u012Bn \u00e0 la sph\u00e8re religieuse, alors qu'il couvre tout le mode de vie. Cette r\u00e9duction fait du verset une d\u00e9claration confessionnelle (\u00ab la seule religion accept\u00e9e est l'islam \u00bb) alors que l'\u00e9tymologie dit : le seul syst\u00e8me de vie aupr\u00e8s de Dieu est la remise enti\u00e8re.

**\u00ab l'Islam \u00bb vs \u00ab la remise enti\u00e8re \u00bb** \u2014 Les traductions courantes laissent \u00ab l'Islam \u00bb en emprunt non traduit, ce qui en fait un nom propre d\u00e9signant une religion pr\u00e9cise. Le mot al-isl\u0101m est le ma\u1E63dar de la forme IV de s-l-m : l'acte de se remettre enti\u00e8rement. Laisser le mot non traduit transforme une description d'attitude (\u00ab se remettre enti\u00e8rement \u00bb) en une \u00e9tiquette confessionnelle (\u00ab l'Islam \u00bb). La nuance change le sens global du verset : ce n'est pas \u00ab la religion accept\u00e9e est l'islam en tant que confession historique \u00bb, c'est \u00ab le syst\u00e8me de vie aupr\u00e8s de Dieu est la remise enti\u00e8re \u00bb \u2014 une attitude universelle, pas un label.

**\u00ab ne croit pas \u00bb vs \u00ab rejette \u00bb** \u2014 Les traductions courantes donnent \u00ab ne croit pas aux signes d'Allah \u00bb pour yakfur bi-\u0101y\u0101ti all\u0101h. Le verbe kafara n'est pas un manque de croyance (qui serait un \u00e9tat passif) mais un rejet actif \u2014 la racine k-f-r signifie couvrir, dissimuler. Traduire par \u00ab ne croit pas \u00bb fait du kufr un probl\u00e8me intellectuel (ne pas croire) alors que l'\u00e9tymologie en fait un acte volontaire (rejeter, couvrir d\u00e9lib\u00e9r\u00e9ment).`;

  const {error:upErr}=await db.from('verse_analyses').update({
    translation_arab: translationArab,
    full_translation: fullTranslation,
    translation_explanation: explanation,
    segments: segments
  }).eq('id',671);
  if(upErr){console.log('UPDATE ERROR:',upErr);return;}
  console.log('verse_analyses updated (id=671)');

  // 4. DAILY PHRASES
  const phrases=[];

  // khlf (aid=651): 0 phrases
  const {data:d651}=await db.from('word_daily').select('id').eq('analysis_id',651);
  if(!d651||d651.length===0) phrases.push(
    {analysis_id:651,arabic:"\u0627\u062E\u0652\u062A\u064E\u0644\u064E\u0641\u064F\u0648\u0627",phon:"ikhtalafu",french:"Ils ont diverg\u00e9",sense:"diverger"},
    {analysis_id:651,arabic:"\u062E\u064E\u0644\u0650\u064A\u0641\u064E\u0629",phon:"khal\u012Bfa",french:"Successeur / repr\u00e9sentant",sense:"successeur"},
    {analysis_id:651,arabic:"\u0627\u0633\u0652\u062A\u064E\u062E\u0652\u0644\u064E\u0641\u064E\u0647\u064F",phon:"istakhlafahu",french:"Il l'a d\u00e9sign\u00e9 comme successeur",sense:"succ\u00e9der"}
  );

  // jyy (aid=629): 0 phrases
  const {data:d629}=await db.from('word_daily').select('id').eq('analysis_id',629);
  if(!d629||d629.length===0) phrases.push(
    {analysis_id:629,arabic:"\u062C\u064E\u0627\u0621\u064E",phon:"j\u0101\u02BEa",french:"Il est venu",sense:"venir"},
    {analysis_id:629,arabic:"\u062C\u0650\u0626\u0652\u062A\u064F \u0628\u0650\u0647\u0650",phon:"ji\u02BEtu bihi",french:"Je l'ai apport\u00e9",sense:"apporter"},
    {analysis_id:629,arabic:"\u0645\u064E\u062C\u0650\u064A\u0621",phon:"maj\u012B\u02BE",french:"Venue / arriv\u00e9e",sense:"arriver"}
  );

  // sre (aid=995): 0 phrases
  const {data:d995}=await db.from('word_daily').select('id').eq('analysis_id',995);
  if(!d995||d995.length===0) phrases.push(
    {analysis_id:995,arabic:"\u0633\u064E\u0631\u0650\u064A\u0639",phon:"sar\u012B\u02BF",french:"Rapide / prompt",sense:"\u00eatre rapide"},
    {analysis_id:995,arabic:"\u0623\u064E\u0633\u0652\u0631\u064E\u0639\u064E",phon:"asra\u02BFa",french:"Il s'est h\u00e2t\u00e9",sense:"se h\u00e2ter"},
    {analysis_id:995,arabic:"\u0628\u0650\u0633\u064F\u0631\u0652\u0639\u064E\u0629",phon:"bisur\u02BFa",french:"Rapidement / avec rapidit\u00e9",sense:"rapidit\u00e9"}
  );

  // baed (aid=926): check
  const {data:d926}=await db.from('word_daily').select('id').eq('analysis_id',926);
  if(!d926||d926.length===0) phrases.push(
    {analysis_id:926,arabic:"\u0628\u064E\u0639\u0652\u062F\u064E",phon:"ba\u02BFda",french:"Apr\u00e8s",sense:"apr\u00e8s"},
    {analysis_id:926,arabic:"\u0628\u064E\u0639\u0650\u064A\u062F",phon:"ba\u02BF\u012Bd",french:"Loin / \u00e9loign\u00e9",sense:"\u00eatre loin"},
    {analysis_id:926,arabic:"\u0623\u064E\u0628\u0652\u0639\u064E\u062F\u064E\u0647\u064F",phon:"ab\u02BFadahu",french:"Il l'a \u00e9loign\u00e9",sense:"\u00e9loignement"}
  );

  if(phrases.length>0){
    const {data:dp,error:dpErr}=await db.from('word_daily').insert(phrases).select('id,analysis_id');
    if(dpErr){console.log('DAILY ERROR:',dpErr);return;}
    console.log('Daily phrases inserted:',dp.length);
  } else {
    console.log('All daily phrases already exist');
  }

  // 5. VERIFY
  const {data:check}=await db.from('verse_word_analyses').select('id,word_key,position,sense_chosen').eq('verse_id',V).order('position');
  console.log('\nVERIFICATION:');
  check.forEach(v=>console.log('  pos='+v.position+' wk='+v.word_key+' sc='+v.sense_chosen));
  const {data:vaCheck}=await db.from('verse_analyses').select('translation_arab').eq('id',671);
  console.log('translation_arab:',vaCheck[0].translation_arab?'SET':'EMPTY');
  console.log("\nDone.");
})();
