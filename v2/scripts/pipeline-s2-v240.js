const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 - VERSET 240
// verse_id=247, analysis_id=610
// "wa alladhina yutawaffawna minkum wa yadharuna
//  azwajan wasiyyatan li-azwajihim mata'an ila
//  al-hawli ghayra ikhraji fa-in kharajna
//  fa-la junaha 'alaykum fi ma fa'alna fi
//  anfusihinna min ma'rufin wa Llahu 'Azizun Hakimun"
// =====================================================

const verseData = {
  240: {
    verse_id: 247,
    analysis_id: 610,
    translation_arab: "Ceux d'entre vous qui decedent et laissent des epouses doivent leguer a leurs epouses une provision pour un an, sans les expulser. Si elles partent d'elles-memes, vous n'etes pas responsables de ce qu'elles font d'elles-memes convenablement. Dieu est Puissant et Sage.",
    full_translation: "Ceux d'entre vous qui decedent et laissent des epouses doivent leguer a leurs epouses une provision pour un an, sans les expulser. Si elles partent d'elles-memes, vous n'etes pas responsables de ce qu'elles font d'elles-memes convenablement. Dieu est Puissant et Sage.",
    translation_explanation: "§DEMARCHE§\n" +
"Le verset 240 traite des droits des veuves — il est souvent lu en parallele avec le verset 234 qui fixe le delai de viduage a quatre mois et dix jours. Le v.240 semble prescrire une disposition testamentaire (wasiyya) du mari defunt en faveur de sa veuve : une provision (mata') pour un an avec le droit de rester dans la maison (ghayra ikhraji = sans expulsion). Cette disposition a ete vue par les savants comme abrogee partiellement par le v.234 et les versets sur l'heritage. Le verset se conclut par les noms divins 'Aziz Hakim (Puissant et Sage) — signalant que la loi divine est a la fois ferme et mesuree.\n" +
"\n" +
"La racine **wfy** (waw-fa-ya) signifie etre complet, accomplir, mourir. Le Lane's donne : tawaffa = prendre en totalite, recevoir pleinement — et par extension, mourir (Dieu prend l'ame en totalite). Yutawaffawna = ceux qui sont pris en totalite (passif imperfectif 3MP) — ceux qui meurent. La mort en arabe coranique est souvent exprimee comme une 'prise' de l'ame par Dieu (tawaffa) — metaphore de l'ame recue en depot et restituee.\n" +
"\n" +
"La racine **zwj** (zay-waw-jim) signifie le couple, la paire, l'epoux/epouse. Le Lane's donne : zawj = epoux, epouse, partenaire — azwaj = epouses/epoux (pluriel). Azwajan (accusatif) = des epouses. La racine zwj couvre aussi bien le couple humain que les paires dans la creation — chaque chose creee en paires (zawjayn). Ici azwajan designe les epouses laissees par les maris decedes.\n" +
"\n" +
"La racine **wsy** (waw-sad-ya) signifie recommander, prescrire, leguer par testament. Le Lane's donne : wasiya = recommander, prescrire — wasiyya = testament, instruction laissee avant la mort, legs moral ou materiel. Wasiyyatan (accusatif) designe ici le legs prescrit en faveur des epouses — la disposition testamentaire que le mari doit prendre avant de mourir pour assurer leur subsistance.\n" +
"\n" +
"La racine **mte** (mim-ta-'ain) signifie la jouissance, la provision, ce dont on profite. Le Lane's donne : mata'a = profiter, se servir de — mata' = provision, bien d'usage, ce qui permet de vivre. Mata'an (accusatif) = une provision, une subvention de subsistance. Le mata' (provision de jouissance) est une compensation materielle — ici pour une annee de subsistance de la veuve dans la maison conjugale.\n" +
"\n" +
"La racine **hwl** (ha-waw-lam) signifie l'annee, le cycle, la rotation. Le Lane's donne : hawl = l'annee (le cycle d'un an), la rotation autour d'un point — al-hawl = l'annee complete. Ila al-hawl = jusqu'a l'annee (pendant un an). L'annee est le cycle naturel de reference pour les obligations matrimoniales et les periodes de deuil.\n" +
"\n" +
"La racine **khrj** (kha-ra-jim) signifie sortir, partir, expulser. Le Lane's donne : kharaja = sortir, partir — akhraja = expulser, faire sortir — ikhraji (masdar) = expulsion, fait de faire sortir. Ghayra ikhraji = sans expulsion (ghayra = autre que / sans). Kharajna = elles sortirent / elles partent (parfait 3FP). La racine khrj couvre a la fois la sortie volontaire et l'expulsion forcee.\n" +
"\n" +
"La racine **jnh** (jim-nun-ha) signifie l'inclinaison, le penchant vers la faute. Le Lane's donne : janaha = s'incliner vers — junah = inclination vers la faute, responsabilite d'un peche. La junah (inclinaison/faute) est l'acte ou l'etat de pencher vers ce qui est blameble. 'La junaha 'alaykum' = pas d'inclinaison-vers-la-faute sur vous = vous n'etes pas en tort / vous n'etes pas responsables.\n" +
"\n" +
"La racine **nfs** (nun-fa-sad) signifie l'ame, le soi, la personne. Le Lane's donne : nafs = ame, soi, personne — anfus (pluriel) = ames, soi. Fi anfusihinna = dans leurs ames / en elles-memes / sur elles-memes. La nafs est le soi total — corps et ame — et l'expression fi nafsihi/anfusihim designe ce que quelqu'un fait de son propre chef, pour soi.\n" +
"\n" +
"La racine **erf** ('ain-ra-fa) signifie connaitre, reconnaitre, le bien connu. Le Lane's donne : 'arafa = connaitre — ma'ruf = ce qui est connu comme bien, la convention sociale positive, le bien convenable. Min ma'rufin = selon ce qui est convenable/reconnu comme bien. Al-ma'ruf est le bien reconnu par la communaute et par la raison — la norme sociale positive.\n" +
"\n" +
"La racine **ezz** ('ain-zay-zay) signifie la puissance, l'invincibilite, l'honneur. Le Lane's donne : 'azza = etre puissant, etre indomptable — 'Aziz = le Puissant, l'Irrésistible, celui qui ne peut etre vaincu. Al-'Aziz est un des 99 Noms de Dieu — la puissance absolue et irresistible qui garantit l'application de Ses lois.\n" +
"\n" +
"La racine **hkm** (ha-kaf-mim) signifie juger, decider avec sagesse, gouverner avec mesure. Le Lane's donne : hakama = juger, decider — hakim = sage, celui dont les jugements sont justes et mesures. Al-Hakim est un des 99 Noms de Dieu — la sagesse dans les decisions et les lois divines. 'Aziz Hakim ensemble signalent que la loi sur la veuve est a la fois ferme ('Aziz) et bien calibree (Hakim).\n" +
"\n" +
"§JUSTIFICATION§\n" +
"**Ceux qui decedent** — alladhina yutawaffawna minkum : yutawaffawna (ils sont pris en totalite/ils meurent, passif imperfectif 3MP de tawaffa) designe les maris qui meurent. La forme passive (yutawaffawna = ils sont recus/pris) rappelle que la mort est un acte divin — Dieu prend l'ame. Minkum (d'entre vous) s'adresse aux croyants — c'est une loi pour la communaute musulmane.\n" +
"\n" +
"**et laissent des epouses** — wa yadharuna azwajan : yadharuna (ils laissent, imperfectif 3MP de wadhara) + azwajan (des epouses, accusatif pluriel de zawj). Le mari mort laisse ses epouses dans une situation de vulnerabilite — le verset legifere pour leur protection.\n" +
"\n" +
"**doivent leguer** — wasiyyatan : wasiyyatan (testament/legs, accusatif) indique l'obligation d'une disposition testamentaire. La wasiyya (testament) est ici une prescription divine — le mari doit prendre les dispositions necessaires avant sa mort pour assurer la subsistance de sa veuve.\n" +
"\n" +
"**une provision pour un an** — mata'an ila al-hawl : mata'an (une provision/subvention, accusatif) + ila al-hawl (jusqu'a l'annee/pendant un an). La provision d'un an couvre la periode de deuil et de reinstallation de la veuve. Certains savants voient ce verset comme anterieur au v.234 (quatre mois et dix jours) et y lisent une abrogation partielle.\n" +
"\n" +
"**sans les expulser** — ghayra ikhraji : ghayra (sans/autre que) + ikhraji (expulsion, masdar de akhraja). La veuve a le droit de rester dans la maison conjugale — elle ne peut etre expulsee par les heritiers pendant cette periode. Ghayra ikhraji est une garantie de maintien dans le logement.\n" +
"\n" +
"**Si elles partent d'elles-memes** — fa-in kharajna : kharajna (elles sont sorties/parties, parfait 3FP de kharaja) avec fa-in (si alors) ouvre la clause de sortie volontaire. Si la veuve choisit de partir avant la fin de l'annee, c'est son droit — elle n'est pas tenue de rester.\n" +
"\n" +
"**vous n'etes pas en tort** — fa-la junaha 'alaykum : junaha (inclinaison vers la faute) avec la (negation) = pas de responsabilite-de-faute sur vous. Les heritiers et la famille ne sont pas en tort si la veuve part — sa sortie volontaire les libere de la responsabilite du soutien annuel.\n" +
"\n" +
"**de ce qu'elles font convenablement** — fi ma fa'alna fi anfusihinna min ma'rufin : fa'alna (elles ont fait, parfait 3FP de fa'ala) + fi anfusihinna (dans leurs ames/sur elles-memes) + min ma'rufin (selon ce qui est convenable). La veuve qui part doit agir selon al-ma'ruf (les conventions de bienveillance reconnues) — se remarier, se reinstaller, mais de maniere decent et reconnue comme bonne.\n" +
"\n" +
"**Dieu est Puissant et Sage** — wa Llahu 'Azizun Hakimun : la cloture par 'Aziz (Puissant/Irresistible) et Hakim (Sage) signale que ces dispositions legislatives sont garanties par la puissance divine et calibrees par Sa sagesse. Ni injustes (car Hakim), ni inapplicables (car 'Aziz).\n" +
"\n" +
"§CRITIQUE§\n" +
"Hamidullah traduit 'yutawaffawna' par 'decedent'. La forme passive tawaffa (etre pris en totalite) est traduite simplement par 'deceder' — ce qui est precis sur le fond mais perd la metaphore coranique de la mort comme 'prise' de l'ame par Dieu. 'Sont rappeles a Dieu' ou 'voient leur ame recueillie' serait plus proche de l'image coranique mais moins idiomatique en francais.\n" +
"\n" +
"Hamidullah traduit 'wasiyyatan' par 'doivent leguer'. La wasiyya (testament/legs) est traduite implicitement comme obligation — 'doivent leguer'. Le texte arabe est plus nominal (une wasiyyatan = un testament) — l'obligation est sous-entendue par le contexte. 'Doivent faire un testament en faveur de leurs epouses' serait plus precis mais plus lourd.\n" +
"\n" +
"Hamidullah traduit 'la junaha 'alaykum' par 'vous n'etes pas responsables'. La junaha (inclinaison vers la faute, de janaha = s'incliner) est rendue par 'responsabilite'. C'est une traduction interpretative correcte — la junaha designe la faute ou la responsabilite morale d'un acte blameble. 'Vous ne commettez pas de faute' ou 'il n'y a pas de peche sur vous' serait plus litteralement precis.",
    segments: [
      { fr: "Ceux d'entre vous qui decedent", pos: "verbe", phon: "alladhina yutawaffawna minkum", arabic: "وَٱلَّذِينَ يُتَوَفَّوْنَ مِنكُمْ", word_key: "wfy", is_particle: false, sense_retenu: "deces/accomplissement", position: 1 },
      { fr: "et laissent", pos: "particule", phon: "wa yadharuna", arabic: "وَيَذَرُونَ", is_particle: true, position: 2 },
      { fr: "des epouses", pos: "nom", phon: "azwajan", arabic: "أَزْوَٰجًا", word_key: "zwj", is_particle: false, sense_retenu: "couple/epoux", position: 3 },
      { fr: "un testament/legs en faveur de leurs epouses", pos: "nom", phon: "wasiyyatan li-azwajihim", arabic: "وَصِيَّةً لِّأَزْوَٰجِهِم", word_key: "wsy", is_particle: false, sense_retenu: "testament/legs", position: 4 },
      { fr: "une provision", pos: "nom", phon: "mata'an", arabic: "مَّتَـٰعًا", word_key: "mte", is_particle: false, sense_retenu: "provision/jouissance", position: 5 },
      { fr: "pour un an", pos: "nom", phon: "ila al-hawl", arabic: "إِلَى ٱلْحَوْلِ", word_key: "hwl", is_particle: false, sense_retenu: "annee/cycle", position: 6 },
      { fr: "sans les expulser", pos: "nom", phon: "ghayra ikhraji", arabic: "غَيْرَ إِخْرَاجٍ", word_key: "khrj", is_particle: false, sense_retenu: "sortie/expulsion", position: 7 },
      { fr: "Si elles partent", pos: "particule", phon: "fa-in kharajna", arabic: "فَإِنْ خَرَجْنَ", is_particle: true, position: 8 },
      { fr: "vous n'etes pas en tort", pos: "nom", phon: "fa-la junaha 'alaykum", arabic: "فَلَا جُنَاحَ عَلَيْكُمْ", word_key: "jnh", is_particle: false, sense_retenu: "inclinaison/penchant", position: 9 },
      { fr: "de ce qu'elles font en elles-memes", pos: "nom", phon: "fi ma fa'alna fi anfusihinna", arabic: "فِى مَا فَعَلْنَ فِىٓ أَنفُسِهِنَّ", word_key: "nfs", is_particle: false, sense_retenu: "ame/soi", position: 10 },
      { fr: "convenablement", pos: "nom", phon: "min ma'rufin", arabic: "مِن مَّعْرُوفٍ", word_key: "erf", is_particle: false, sense_retenu: "convention/bienfait", position: 11 },
      { fr: "Dieu est Puissant", pos: "nom", phon: "wa Llahu 'Azizun", arabic: "وَٱللَّهُ عَزِيزٌ", word_key: "ezz", is_particle: false, sense_retenu: "puissance/honneur", position: 12 },
      { fr: "et Sage", pos: "nom", phon: "Hakimun", arabic: "حَكِيمٌ", word_key: "hkm", is_particle: false, sense_retenu: "sagesse/gouvernance", position: 13 }
    ],
    vwa: [
      {
        word_key: "wfy",
        position: 2,
        sense_chosen: "Deces/Accomplissement",
        analysis_axes: {
          sense_chosen: "Deces/Accomplissement",
          concept_chosen: "Deces/Accomplissement",
          concepts: {
            "Deces/Accomplissement": {
              status: "retenu",
              senses: ["mourir", "etre recu entierement", "tawaffaa = etre pris en totalite", "la mort comme prise par Dieu", "yutawaffawna = ils sont recus/meurent"],
              proof_ctx: "alladhina yutawaffawna minkum wa yadharuna azwajan = ceux d'entre vous qui decedent et laissent des epouses",
              axe1_verset: "Yutawaffawna (ils sont pris en totalite/ils meurent, passif imperfectif 3MP de tawaffa) designe les maris qui meurent. La forme passive tawaffa (etre recu en totalite) est la maniere coranique d'exprimer la mort — Dieu recoit l'ame qui Lui appartient. Cette metaphore de la 'prise totale' exprime que rien ne se perd — l'ame est rendue a son Createur. Le passif souligne que c'est Dieu qui agit.",
              axe2_voisins: "Yutawaffawna est suivi de wa yadharuna azwajan (et ils laissent des epouses) — la mort du mari cree la situation de vulnerabilite qui motive toute la legislation du verset. Le verset s'ouvre sur la mort (wfy) et se clot sur les noms divins 'Aziz Hakim — la mort et la sagesse divine encadrent les dispositions legales pour les veuves.",
              axe3_sourate: "Dans S2, wfy apparait aussi en v.234 (alladhina yutawaffawna minkum wa yadharuna azwajan = ceux d'entre vous qui meurent et laissent des epouses) — la meme formule ouvre le v.234 et le v.240, creant un inclusio legislatif sur les droits des veuves. Dans S3:55 et S5:117, tawaffa designe Dieu qui 'recoit' Jesus (metaphore de mort/elevation). La racine wfy (accomplissement/prise totale) est la racine de la mort en Coran.",
              axe4_coherence: "Le sens Deces/Accomplissement est coherent avec le theme du verset : les dispositions pour les veuves presupposent le deces du mari. La forme passive yutawaffawna (ils sont pris/meurent) rappelle que la mort est dans la main de Dieu — la legislation humaine s'inscrit dans cette realite divine. La coherence est dans la logique : mort du mari -> vulnerabilite de la veuve -> protection legale prescrite.",
              axe5_frequence: "La racine wfy (accomplissement/deces) est presente dans plusieurs versets coraniques. Tawaffa comme metaphore de la mort apparait en S2:234, S2:240, S3:55, S4:15, S5:117, S6:61, S7:37, S8:50, S10:104, S16:28, S16:70, S22:5, S32:11, S39:42, S47:27. La frequence de tawaffa pour exprimer la mort souligne la coherence coranique : la mort n'est pas un anneantissement mais une prise complete de l'ame par Dieu."
            }
          }
        }
      },
      {
        word_key: "zwj",
        position: 5,
        sense_chosen: "Couple/Epoux",
        analysis_axes: {
          sense_chosen: "Couple/Epoux",
          concept_chosen: "Couple/Epoux",
          concepts: {
            "Couple/Epoux": {
              status: "retenu",
              senses: ["epoux", "epouse", "paire", "azwajan = des epouses", "zawj = partenaire/conjoint"],
              proof_ctx: "wa yadharuna azwajan wasiyyatan li-azwajihim = ils laissent des epouses, un testament pour leurs epouses",
              axe1_verset: "Azwajan (des epouses, accusatif pluriel de zawj) designe les epouses laissees par les maris decedes. La racine zwj couvre a la fois l'epoux et l'epouse — zawj est neutre en genre, le contexte determinant si c'est masculin ou feminin. Ici azwajan = des epouses (les femmes des hommes qui meurent). La repetition azwajan (v.5) et azwajihim (v.6 = leurs epouses) renforce la centralite des veuves dans ce verset.",
              axe2_voisins: "Azwajan est l'objet de yadharuna (ils laissent des epouses) — la mort du mari cree la situation de la veuve. Puis li-azwajihim (pour leurs epouses) dans la wasiyya montre que la disposition testamentaire est dediee aux epouses. Le double azwaj souligne que les epouses sont au centre du dispositif legal — ce sont elles qui beneficient de la protection prescrite.",
              axe3_sourate: "Dans S2, zwj est fondamental dans les sections sur le mariage et le divorce : v.25 (azwaj mutahhara = epouses purifiees au paradis), v.35 (Adam et son zawj), v.102 (magie pour separer le zawj de son conjoint), v.187 (vos epouses sont votre vetement), v.228-240 (legislation sur le divorce et la mort). La racine zwj est omniprésente dans le code matrimonial de S2.",
              axe4_coherence: "Le sens Couple/Epoux est coherent avec le contexte legislatif du verset : la protection des epouses apres la mort du mari est le coeur du verset. La coherence est dans la sequence juridique : mort du mari (wfy) -> protection des epouses (zwj) -> legs (wsy) -> provision (mte) -> delai (hwl) -> droit au maintien dans le logement (ghayra ikhraji). Le zawj (epouse) est le sujet protege par toute la legislation.",
              axe5_frequence: "La racine zwj est l'une des plus importantes du Coran dans le domaine matrimonial. Azwaj (pluriel de zawj) apparait dans de nombreux versets sur le mariage, le divorce, les epouses dans la vie et au paradis. En S36:36 et S51:49, la creation en paires (zawjayn) etend la racine zwj au principe universel de la dualite dans la creation. La richesse semantique de zwj — de la paire cosmique au couple humain — est un motif coranique fondateur."
            }
          }
        }
      },
      {
        word_key: "wsy",
        position: 6,
        sense_chosen: "Testament/Legs",
        analysis_axes: {
          sense_chosen: "Testament/Legs",
          concept_chosen: "Testament/Legs",
          concepts: {
            "Testament/Legs": {
              status: "retenu",
              senses: ["leguer", "prescrire par testament", "wasiyya = testament", "instruction laissee pour apres la mort", "wasy = celui qui fait une recommandation"],
              proof_ctx: "wasiyyatan li-azwajihim mata'an ila al-hawl = un testament pour leurs epouses, une provision pour un an",
              axe1_verset: "Wasiyyatan (testament/legs, accusatif de wasiyya) designe la disposition testamentaire que le mari doit prendre pour sa veuve. La wasiyya est l'acte legal par lequel on prescrit une obligation a respecter apres sa mort — c'est un legs moral et materiel. Le Coran prescrit la wasiyya en faveur des epouses comme une obligation avant la mort — elle garantit la provision (mata') et le non-expulsion (ghayra ikhraji).",
              axe2_voisins: "Wasiyyatan est complement de la phrase principale (alladhina yutawaffawna ... wasiyyatan) — les mourants doivent laisser un testament. Li-azwajihim (pour leurs epouses) precise le beneficiaire. Mata'an ila al-hawl (une provision pour un an) precise le contenu de la wasiyya. La wasiyya est donc un testament avec un contenu specifie par Dieu — un an de provision et de maintien dans le logement.",
              axe3_sourate: "Dans S2, wsy apparait aussi en v.180 (kutiba 'alaykum idha hadara ahadakum al-mawt in taraka khayran al-wasiyyatu = il vous est prescrit, quand la mort approche l'un d'entre vous, s'il laisse des biens, de faire un testament) — le meme imperatif de wasiyya apparait en contexte de mort imminente. V.240 est une application specifique de ce principe general de v.180.",
              axe4_coherence: "Le sens Testament/Legs est coherent avec le contexte du verset : la wasiyya est l'instrument legal qui assure la protection de la veuve. La coherence est dans la structure : mort (wfy) -> testament (wsy) -> contenu du testament (mata' + ghayra ikhraji) -> clause de depart volontaire (kharajna) -> attribution de responsabilite (junah/la junah). Le testament est le pivot de tout le dispositif legal.",
              axe5_frequence: "La racine wsy (testament/recommandation) est presente dans plusieurs versets coraniques sur le droit successoral et les obligations avant la mort : S2:180, S2:240, S4:11-12, S5:106. La wasiyya est un concept juridique fondamental de l'islam classique — le testament est une obligation islamique avant la mort, inscrite dans le Coran. La racine wsy (recommandation/legs) englobe aussi la recommandation morale (tawasa = s'exhorter mutuellement, S103:3)."
            }
          }
        }
      },
      {
        word_key: "mte",
        position: 8,
        sense_chosen: "Provision/Jouissance",
        analysis_axes: {
          sense_chosen: "Provision/Jouissance",
          concept_chosen: "Provision/Jouissance",
          concepts: {
            "Provision/Jouissance": {
              status: "retenu",
              senses: ["pourvoir", "mata' = provision", "ce dont on jouit", "subvention necessaire", "jouissance temporaire d'un bien"],
              proof_ctx: "wasiyyatan li-azwajihim mata'an ila al-hawl = un testament pour leurs epouses, une provision pour un an",
              axe1_verset: "Mata'an (une provision/subvention, accusatif de mata') precise le contenu de la wasiyya en faveur des epouses. Le mata' est la provision materielle — nourriture, logement, subvention — qui permet a la veuve de vivre pendant un an apres la mort du mari. Mata' designe tout bien dont on jouit temporairement et qui sert de support a la vie — c'est a la fois la provision et la jouissance de cette provision.",
              axe2_voisins: "Mata'an est qualifie par ila al-hawl (jusqu'a l'annee/pendant un an) — la provision est limitee dans le temps. C'est le contenu specifique du testament (wasiyya) — non pas n'importe quel legs mais une provision definie (un an de subsistance). Ghayra ikhraji (sans expulsion) est la condition d'acces a ce mata' — la veuve doit pouvoir rester dans la maison pour en beneficier.",
              axe3_sourate: "Dans S2, mte apparait en v.36 (meta'un ila hin = une provision pour un temps, apres la chute d'Adam), v.197 (la provison de la piete est la meilleure provision), v.236 (meta' bil-ma'ruf = provision selon la convenance, en contexte de divorce). Le mata' dans S2 est toujours une provision temporaire — elle soutient dans une periode de transition (chute d'Adam, divorce, mort du mari).",
              axe4_coherence: "Le sens Provision/Jouissance est coherent avec la finalite protective du verset : la veuve a besoin d'une provision materielle (meta') pour traverser la periode de deuil et de transition. La coherence est dans la logique de protection : mort du mari cree un vide economique -> wasiyya prescrit -> meta' comble ce vide pendant un an -> la veuve est protegee jusqu'a sa reinstallation.",
              axe5_frequence: "La racine mte (provision/jouissance) est presente dans plusieurs sourates : S2:36, S2:197, S2:236, S2:240, S3:14 (les plaisirs de la vie terrestre = mata' al-hayat al-dunya), S13:17 (la mousse — meta' — disparait), S57:20 (la vie terrestre n'est qu'un meta' trompeur). Le mata' est souvent associe a la temporalite — c'est une provision utile mais passagere, par opposition aux biens eternels."
            }
          }
        }
      },
      {
        word_key: "hwl",
        position: 10,
        sense_chosen: "Annee/Cycle",
        analysis_axes: {
          sense_chosen: "Annee/Cycle",
          concept_chosen: "Annee/Cycle",
          concepts: {
            "Annee/Cycle": {
              status: "retenu",
              senses: ["l'an", "le cycle annuel", "al-hawl = l'annee complete", "hawl = rotation/cycle"],
              proof_ctx: "mata'an ila al-hawl ghayra ikhraji = une provision pour un an, sans expulsion",
              axe1_verset: "Al-hawl (l'annee, article defini + nom) designe le cycle annuel complet — douze mois de revolution. Ila al-hawl = jusqu'a l'annee / pendant un an. La provision (mata') accordee a la veuve couvre un an — periode jugee suffisante pour traverser le deuil et se reinstaller. Le hawl (cycle annuel) est la reference temporelle naturelle pour les obligations matrimoniales et les periodes de viduage.",
              axe2_voisins: "Al-hawl est la duree de la provision (mata') prescrite par la wasiyya. Il est suivi de ghayra ikhraji (sans expulsion) — pendant cette annee, la veuve a le droit de rester dans la maison. La combinaison mata' + hawl + ghayra ikhraji forme le package de protection de la veuve : subvention + droit au logement + interdit d'expulsion pendant un an.",
              axe3_sourate: "Dans S2, hwl aparait uniquement ici en v.240. Mais dans le Coran, al-hawl designe l'annee comme cycle de reference : S46:15 (la grossesse et le sevrage = trente mois), S2:233 (les meres allaitent pendant deux hawlayn = deux annees completes). Le hawl (annee complete) est la mesure temporelle des obligations familiales dans S2.",
              axe4_coherence: "Le sens Annee/Cycle est coherent avec la logique legislative du verset : un an de protection pour la veuve est une periode suffisante pour traverser le deuil, regulariser sa situation et eventuellement se remarier. La coherence est dans la comparaison avec S2:234 (quatre mois et dix jours comme delai minimal de viduage) — le v.240 prevoyait initialement un an, que les savants ont interprete comme une disposition avant le delai definitif de v.234.",
              axe5_frequence: "La racine hwl (cycle/annee) est presente dans plusieurs versets coraniques. Hawlayn (deux annees) apparait en S2:233 pour l'allaitement. Al-hawl (l'annee) en S2:240 pour la provision de la veuve. La racine hwl couvre aussi taharrasa hawlahu (le garder a la ronde) — l'idee de rotation/cycle est commune aux deux sens (l'annee comme rotation, la garde comme rotation autour de quelque chose)."
            }
          }
        }
      },
      {
        word_key: "khrj",
        position: 12,
        sense_chosen: "Sortie/Expulsion",
        analysis_axes: {
          sense_chosen: "Sortie/Expulsion",
          concept_chosen: "Sortie/Expulsion",
          concepts: {
            "Sortie/Expulsion": {
              status: "retenu",
              senses: ["sortir", "partir", "expulser", "akhraj = il expulsa", "kharajna = elles sortirent", "ikhraji = expulsion (masdar)"],
              proof_ctx: "ghayra ikhraji fa-in kharajna = sans expulsion, si elles partent (d'elles-memes)",
              axe1_verset: "Ikhraji (expulsion, masdar de akhraja) dans ghayra ikhraji (sans expulsion) interdit aux heritiers de chasser la veuve du domicile conjugal pendant l'annee de provision. Puis kharajna (elles sortirent/partent, parfait 3FP de kharaja) dans fa-in kharajna (si elles partent) distingue la sortie volontaire de l'expulsion forcee — la premiere est un droit, la seconde est interdite.",
              axe2_voisins: "La racine khrj est utilisee deux fois dans le verset : ikhraji (expulsion forcee, interdite) et kharajna (sortie volontaire, permise). Cette double utilisation cree un contraste delibere — l'expulsion (par les heritiers) est prohibee, mais le depart (par les veuves elles-memes) est un droit. La distinction entre sortie active (kharajna = elles sont sorties) et expulsion passive (ikhraji = les faire sortir) est juridiquement fondamentale.",
              axe3_sourate: "Dans S2, khrj est present en v.191 (et ne les expulsez pas de la ou vous avez ete expulses), v.217 (expulser ses habitants = crime grave), v.240 (sans expulsion / si elles partent). La racine khrj dans les contextes de v.191 et v.217 designe l'expulsion comme un acte oppressif — coherent avec v.240 ou l'expulsion de la veuve est interdite. La sortie est un droit, l'expulsion une injustice.",
              axe4_coherence: "Le sens Sortie/Expulsion est coherent avec la protection legale du verset : la veuve ne peut etre expulsee (ikhraji = la sortie forcee est prohibee), mais elle peut partir librement (kharajna = sa sortie volontaire est son droit). La coherence est dans la logique juridique : obligation de protection contre l'expulsion + respect du droit au depart volontaire. Les heritiers ne peuvent pas expulser mais la veuve peut choisir de partir.",
              axe5_frequence: "La racine khrj est tres frequente dans le Coran — sortir, partir, expulser, faire sortir, extraction. Kharaja/kharajna/akhrajna aparaissent dans de nombreux contextes : sortie d'Egypte, sortie du paradis, expulsion des croyants. La distinction entre kharaja (sortir volontairement) et akhraja (faire sortir/expulser) est semantiquement importante en droit islamique — le v.240 exploite precisement cette distinction."
            }
          }
        }
      },
      {
        word_key: "jnh",
        position: 17,
        sense_chosen: "Inclinaison/Penchant",
        analysis_axes: {
          sense_chosen: "Inclinaison/Penchant",
          concept_chosen: "Inclinaison/Penchant",
          concepts: {
            "Inclinaison/Penchant": {
              status: "retenu",
              senses: ["penchant vers la faute", "junaha = l'inclinaison", "'la junaha' = pas d'inclinaison vers la faute", "absence de responsabilite morale"],
              proof_ctx: "fa-la junaha 'alaykum fi ma fa'alna fi anfusihinna min ma'rufin = pas d'inclinaison-vers-la-faute sur vous pour ce qu'elles font d'elles-memes convenablement",
              axe1_verset: "Junaha (inclinaison vers la faute, de janaha = s'incliner) avec la negation (la junaha) = pas de responsabilite-de-faute / pas d'inclinaison vers ce qui est blameble. La formule la junaha 'alaykum (pas de junah sur vous) est une absolution juridique — les heritiers et la famille ne sont pas en tort si la veuve choisit de partir avant la fin de l'annee de provision.",
              axe2_voisins: "La junaha 'alaykum (pas de faute sur vous) est la consequence de fa-in kharajna (si elles partent) — la sortie volontaire de la veuve libere les heritiers de toute responsabilite supplementaire. La formule est suivie de fi ma fa'alna (pour ce qu'elles font) — c'est la veuve qui assume la responsabilite de ses actes une fois sortie. La responsabilite se transfere de la famille a la veuve.",
              axe3_sourate: "Dans S2, la junaha 'alaykum est une formule recurrente dans les sections legales : v.158 (pas de faute a effectuer la sa'y entre Safa et Marwa), v.198 (pas de faute a chercher la grace de Dieu a 'Arafat), v.229, v.230, v.233, v.234, v.235, v.236, v.240. Cette formule juridique s'emploie pour lever une interdiction presumee ou clarifier l'absence de faute dans un acte qui pourrait etre mal interprete.",
              axe4_coherence: "Le sens Inclinaison/Penchant est coherent avec la logique juridique du verset : la junaha (l'inclinaison vers la faute) est nie pour les heritiers qui n'auraient pas retenu la veuve. La coherence est dans la structure de la clause conditionnelle : si la veuve part (sortie volontaire) -> la famille n'est pas en tort (la junaha) -> a condition que la veuve agisse avec bienveillance (min ma'rufin). L'absence de junah est conditionnelle.",
              axe5_frequence: "La racine jnh (inclinaison/penchant) dans le sens de junah (faute/responsabilite morale) est specifique aux sections juridiques du Coran. La formule la junaha 'alaykum (pas de faute sur vous) apparait principalement en S2 et S4 dans les sections sur le mariage, le divorce, la priere. La junaha est un terme technique du fiqh islamique designe une faute ou une transgression de moindre gravite — pas un kabira (grand peche) mais un manquement pouvant engager la responsabilite morale."
            }
          }
        }
      },
      {
        word_key: "nfs",
        position: 23,
        sense_chosen: "Ame/Soi",
        analysis_axes: {
          sense_chosen: "Ame/Soi",
          concept_chosen: "Ame/Soi",
          concepts: {
            "Ame/Soi": {
              status: "retenu",
              senses: ["ame", "soi-meme", "anfusihinna = dans leurs ames/sur elles-memes", "nafs = ame/personne/soi"],
              proof_ctx: "fi ma fa'alna fi anfusihinna min ma'rufin = pour ce qu'elles font dans leurs ames/sur elles-memes convenablement",
              axe1_verset: "Anfusihinna (dans leurs ames/en elles-memes, pluriel possessif feminin de nafs) designe ce que les veuves font de leur propre initiative, pour elles-memes. Fi anfusihinna = dans leurs ames / sur elles-memes — c'est la sphere de leur autonomie personnelle. Les actes fa'alna fi anfusihinna (qu'elles font sur elles-memes) sont leurs decisions libres — notamment se remarier, se reinstaller — accomplis min ma'rufin (convenablement).",
              axe2_voisins: "Fi anfusihinna est la sphere d'autonomie de la veuve — ce qu'elle fait de son propre chef, sans que les heritiers aient leur mot a dire. La formule fi ma fa'alna fi anfusihinna min ma'rufin (pour ce qu'elles font sur elles-memes convenablement) etablit l'autonomie de la veuve dans ses choix de vie apres le deuil, a condition qu'ils soient conformes au ma'ruf (la bienveillance reconnue).",
              axe3_sourate: "Dans S2, nfs est fondamental : nafs (ame/soi) apparait en v.48 (pas d'ame ne subira la place d'une autre), v.54 (tuez vos ames/vous-memes), v.87 (vous vous etes dresses contre vos ames), v.233 (aucune ame ne sera chargee au-dela de ses forces), v.286 (Dieu ne charge pas une ame au-dela de ses capacites). La nafs est l'unite de responsabilite morale dans le Coran — chaque ame est responsable de ses propres actes.",
              axe4_coherence: "Le sens Ame/Soi est coherent avec la logique du verset : fi anfusihinna (sur elles-memes) designe l'autonomie de la veuve dans ses decisions personnelles apres son depart voluntaire. La coherence est dans la distinction : les heritiers ne sont pas responsables (la junaha 'alaykum) de ce que fait la veuve fi anfusihinna (de son propre chef), a condition que ses actes soient min ma'rufin (convenables). La responsabilite est individualisee — chaque nafs assume ses propres choix.",
              axe5_frequence: "La racine nfs (ame/soi) est l'une des plus frequentes du Coran — nafs aparait plus de 290 fois. Al-nafs al-ammara bi-l-su' (l'ame qui commande le mal, S12:53), al-nafs al-lawwama (l'ame qui se blame, S75:2), al-nafs al-mutma'inna (l'ame apaisee, S89:27) — les trois etapes de la nafs. La forme fi nafsihi/anfusihim (en soi-meme/en eux-memes) designe la sphere interieure et autonome de la personne."
            }
          }
        }
      },
      {
        word_key: "erf",
        position: 25,
        sense_chosen: "Convention/Bienfait",
        analysis_axes: {
          sense_chosen: "Convention/Bienfait",
          concept_chosen: "Convention/Bienfait",
          concepts: {
            "Conventio/Bienfait": {
              status: "retenu",
              senses: ["convenable", "bi l-ma'ruf = selon la convention reconnue comme bonne", "ma'ruf = ce qui est connu/reconnu comme bien", "'arafa = connaitre/reconnaitre"],
              proof_ctx: "fi ma fa'alna fi anfusihinna min ma'rufin = pour ce qu'elles font sur elles-memes selon ce qui est convenable",
              axe1_verset: "Min ma'rufin (selon ce qui est convenable/reconnu comme bien, partitif de ma'ruf) qualifie les actes de la veuve apres son depart voluntaire. Al-ma'ruf est ce que la raison et la communaute reconnaissent comme bien — la norme sociale positive et approuvee. Les actes des veuves 'fi anfusihinna min ma'rufin' sont leurs decisions libres (se remarier, se reinstaller) accomplis selon les normes bienveillantes reconnues.",
              axe2_voisins: "Min ma'rufin est la condition qui rend les actes de la veuve acceptables — elle a la liberte de ses choix (fi anfusihinna) mais ces choix doivent etre min ma'rufin (conformes aux conventions de bienveillance). Le ma'ruf est le standard de comportement social approuve — il protege a la fois la veuve et la communaute en fixant des limites a l'autonomie.",
              axe3_sourate: "Dans S2, ma'ruf est un terme cle dans toute la section sur le mariage et le divorce : v.178 (paiement de la diya bil-ma'ruf), v.180 (testament bil-ma'ruf), v.228, v.229, v.231, v.232, v.233, v.234, v.236, v.240. La formule bil-ma'ruf / min ma'rufin (selon la bienveillance reconnue) est le standard de comportement dans toutes les relations matrimoniales — elle revient comme un refrain dans les versets legislatifs de S2.",
              axe4_coherence: "Le sens Convention/Bienfait est coherent avec le role regulateur du ma'ruf dans le verset : la liberte de la veuve (fi anfusihinna) est encadree par le ma'ruf — elle peut faire ses choix mais selon les normes reconnues comme bonnes. La coherence est dans la structure : liberte individuelle (anfus) + limite sociale (ma'ruf) = equilibre islamique entre autonomie et responsabilite communautaire.",
              axe5_frequence: "La racine erf (connaitre/reconnaitre/le convenable) est tres frequente dans les sections legislatives du Coran, particulierement dans S2 et S4. Al-ma'ruf (le convenable/le bien reconnu) est un terme technique du fiqh islamique designe la norme sociale positive — tout ce que la raison, la coutume et la revelation reconnaissent comme bien. Son contraire est al-munkar (le reprehensible, l'inacceptable). La formule bil-ma'ruf est fondamentale en droit de la famille islamique."
            }
          }
        }
      },
      {
        word_key: "ezz",
        position: 32,
        sense_chosen: "Puissance/Honneur",
        analysis_axes: {
          sense_chosen: "Puissance/Honneur",
          concept_chosen: "Puissance/Honneur",
          concepts: {
            "Puissance/Honneur": {
              status: "retenu",
              senses: ["puissant", "irresistible", "invincible", "'Aziz = le Puissant", "celui qui ne peut etre vaincu"],
              proof_ctx: "wa Llahu 'Azizun Hakimun = et Dieu est le Puissant et le Sage",
              axe1_verset: "'Azizun (le Puissant/l'Irresistible, adjectif predicatif) est le premier des deux noms divins qui closent le verset. Al-'Aziz designe Dieu comme celui qui ne peut etre vaincu, dont les decisions s'imposent avec puissance. La cloture d'un verset legislatif par 'Aziz signale que la loi divine est garantie par une puissance qui ne peut etre outrepassee — les heritiers ne peuvent pas violer les droits de la veuve impunement.",
              axe2_voisins: "'Azizun est couple avec Hakimun (Sage) — la puissance ('izz) et la sagesse (hukm) ensemble caracterisent la loi divine : elle est a la fois ferme ('Aziz = on ne peut pas la transgresser) et mesuree (Hakim = elle est calibree avec justice). Le couple 'Aziz Hakim est particulierement frequent dans les versets de legislation — il authentifie la loi comme juste ET irresistible.",
              axe3_sourate: "Dans S2, 'Aziz apparait en v.129 (Tu es le Puissant et le Sage), v.209 (sachant que Dieu est Puissant et Sage), v.220 (Dieu sait qui est corrupteur et qui est reformateur — 'Aziz Hakim), v.228, v.240. Le nom 'Aziz Hakim est la signature des versets legislatifs de S2 — il authentifie les lois comme emanant d'une puissance sage et irresistible.",
              axe4_coherence: "Le sens Puissance/Honneur est coherent avec la finalite de la cloture du verset : 'Aziz Hakim garantit que les droits de la veuve (provision, non-expulsion) sont protects par la puissance divine. La coherence est dans la logique de la legislation divine : les droits prescrits sont garantis par la puissance ('Aziz) de Celui qui les a etablis. Violer les droits de la veuve, c'est s'opposer a l-'Aziz.",
              axe5_frequence: "La racine ezz ('izz = puissance/honneur invincible) est fondamentale dans le Coran. Al-'Aziz est l'un des 99 Noms de Dieu. La formule 'Azizun Hakimun aparait dans de nombreux versets : S2:129, S2:209, S2:220, S2:228, S2:240, S3:6, S3:18, S4:56, S4:158, S5:38. C'est la signature des versets legislatifs et des versets sur les attributs de puissance et de sagesse de Dieu."
            }
          }
        }
      },
      {
        word_key: "hkm",
        position: 33,
        sense_chosen: "Sagesse/Gouvernance",
        analysis_axes: {
          sense_chosen: "Sagesse/Gouvernance",
          concept_chosen: "Sagesse/Gouvernance",
          concepts: {
            "Sagesse/Gouvernance": {
              status: "retenu",
              senses: ["Hakim = le Sage", "celui dont les decisions sont justes et mesurees", "hikma = sagesse", "hukm = decision/jugement"],
              proof_ctx: "wa Llahu 'Azizun Hakimun = et Dieu est le Puissant et le Sage",
              axe1_verset: "Hakimun (le Sage, adjectif predicatif de al-Hakim) est le second des deux noms divins qui closent le verset. Al-Hakim designe Dieu comme celui dont les decisions et les lois sont parfaitement calibrees, justes et mesurees — la sagesse dans le gouvernement et le jugement. La cloture par Hakim apres 'Aziz signale que la legislation sur les veuves n'est pas arbitraire mais fondee sur une sagesse profonde.",
              axe2_voisins: "Hakimun complete 'Azizun — la puissance ('Aziz) sans la sagesse (Hakim) serait tyrannique; la sagesse (Hakim) sans la puissance ('Aziz) serait impuissante. Le couple 'Aziz Hakim est la signature parfaite d'une legislation divine : irresistible dans son autorite et parfaite dans sa mesure. Toute la legislation du verset sur les droits de la veuve est garantie par cette combinaison.",
              axe3_sourate: "Dans S2, Hakim aparait en v.32 (Tu es le Savant et le Sage — 'Alim Hakim), v.129 ('Aziz Hakim), v.209 ('Aziz Hakim), v.220 ('Aziz Hakim), v.228 ('Aziz Hakim), v.240 ('Aziz Hakim), v.260 ('Aziz Hakim). Hakim est l'un des noms divins les plus frequents dans les versets legislatifs de S2 — il authentifie chaque loi comme juste et mesuree. La sagesse divine est la garantie que les lois ne sont pas arbitraires.",
              axe4_coherence: "Le sens Sagesse/Gouvernance est coherent avec la finalite de la cloture : la legislation sur les droits de la veuve (provision d'un an, droit au logement, liberte de depart) est presentee comme l'expression de la sagesse divine (Hakim). La coherence est dans la demonstration implicite : les droits accordes (provision + logement) et la liberte accordee (depart voluntaire + ma'ruf) montrent une legislation calibree avec justice et bienveillance — ce qui est la marque du Hakim.",
              axe5_frequence: "La racine hkm (sagesse/jugement/gouvernance) est l'une des plus importantes du Coran. Al-Hakim (le Sage) est l'un des 99 Noms de Dieu. Hikma (sagesse) apparait dans de nombreux versets valorisant la connaissance profonde et la mesure dans les decisions. La forme Hakimun comme nom divin est particulierement frequente dans les versets legislatifs — S2:32, S2:129, S2:209, S2:220, S2:228, S2:240, S2:260, S3:6, S4:11, S4:26."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[240];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V240)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('V240 TERMINE');
}
main().catch(console.error);
