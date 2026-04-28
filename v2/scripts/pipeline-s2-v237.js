const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 - VERSET 237
// verse_id=244, analysis_id=604
// "wa in tallaqtumuhunna min qabli an tamassuhunna
//  wa qad faradtum lahunna faridatan
//  fa nisfu ma faradtum
//  illa an ya'fuwna aw ya'fuwa alladhi biyadihi 'uqdatu al-nikahi
//  wa an ta'fuwa aqrabu lil-taqwa
//  wa la tansawu al-fadla baynakum
//  inna Allah bima ta'maluna basir"
// =====================================================

const verseData = {
  237: {
    verse_id: 244,
    analysis_id: 604,
    translation_arab: "Et si vous les repudiez avant de les avoir touchees, alors que vous avez deja fixe une dot pour elles, alors versez la moitie de ce que vous avez fixe — a moins qu'elles ne renoncent a leurs droits, ou que celui qui tient le noeud du mariage entre ses mains renonce. Et que vous renonciez est plus proche de la piete. N'oubliez pas la generosite entre vous. Dieu voit tout ce que vous faites.",
    full_translation: "Si vous les repudiez avant de les avoir touchees, et que vous ayez deja fixe une dot, alors [versez-leur] la moitie de ce que vous avez fixe, a moins qu'elles ne renoncent a leurs droits, ou que celui qui tient le noeud du mariage en mains renonce [a la moitie]. Et que vous renonciez est plus proche de la piete. N'oubliez pas la generosite entre vous. Dieu voit bien ce que vous faites.",
    translation_explanation: "§DEMARCHE§\n" +
"Le verset 237 complete le verset 236 en traitant du cas inverse : le divorce avant consommation du mariage (min qabli an tamassuhunna = avant de les avoir touchees) mais APRES fixation d'une dot (wa qad faradtum lahunna faridatan = et vous avez prescrit pour elles une dot fixee). Dans ce cas, la regle est claire : fa nisfu ma faradtum = la moitie de ce qui a ete prescrit est due. Deux exceptions permettent d'y deroger : soit la femme renonce (ya'fuwna), soit celui qui tient le noeud du mariage (waliy ou mari) renonce (ya'fuwa alladhi biyadihi 'uqdatu al-nikah). Le verset conclut sur l'appel a la generosite mutuelle (al-fadl) et a la piete (al-taqwa), et rappelle que Dieu est Basir — il voit tout.\n" +
"\n" +
"La racine **tlq** (ta-lam-qaf) signifie la repudiation et la dissolution du lien conjugal. Le Lane's donne : tallaqa = repudier, liberer, dissoudre le lien — talaq = divorce, repudiation. Tallaqtumuhunna = vous les avez repudiees (accompli 2MP + suffixe feminin). Al-talaq est l'acte de repudiation — le relachement du lien matrimonial.\n" +
"\n" +
"La racine **mss** (mim-sin-sin) signifie le toucher et le contact. Le Lane's donne : massa = toucher, entrer en contact — tamassuhunna = vous les touchez (inaccompli 2MP). La forme tamassuhunna est l'euphemisme coranique etabli pour la consommation conjugale — le mass designe le contact physique intime.\n" +
"\n" +
"La racine **frd** (fa-ra-dal) signifie la prescription et la fixation d'une obligation. Le Lane's donne : farada = prescrire, determiner, fixer — faridha = ce qui est fixe/prescrit, obligation, dot determinee. Faradtum lahunna faridatan = vous avez prescrit pour elles une prescription (accusatif interne). La faridha est la dot formellement fixee lors du contrat de mariage.\n" +
"\n" +
"La racine **nsf** (nun-sad-fa) signifie la moitie et le partage par deux. Le Lane's donne : nisf = la moitie, la mi-part, demi — nisfu ma faradtum = la moitie de ce que vous avez prescrit. Le nisf est la division exacte par deux — ni plus ni moins que la demi-part juste.\n" +
"\n" +
"La racine **efw** ('ayn-fa-waw) signifie le pardon et la renonciation volontaire a son droit. Le Lane's donne : 'afa = pardonner, effacer, renoncer — ya'fuwna = elles renoncent (inaccompli 3FP), ya'fuwa = il renonce (inaccompli 3MS subjonctif). Le 'afw est le fait de laisser aller, d'effacer ce a quoi on avait droit — genereux abandon de sa creance.\n" +
"\n" +
"La racine **ydy** (ya-dal-ya) signifie la main et le pouvoir. Le Lane's donne : yad = main, pouvoir, autorite — biyadihi = entre ses mains (bi = dans + yad + suffixe 3MS). L'expression biyadihi designe le pouvoir de decision et de controle — celui qui tient quelque chose entre ses mains en a la maitrise.\n" +
"\n" +
"La racine **eqd** ('ayn-qaf-dal) signifie le noeud, le lien et le contrat. Le Lane's donne : 'aqada = nouer, lier, contracter — 'uqda = noeud, lien noue, contrat. 'Uqdatu al-nikah = le noeud du mariage. Le 'aqd est le contrat-lien — l'acte qui noue deux parties ensemble. Qui tient le 'uqda tient le pouvoir de la delier.\n" +
"\n" +
"La racine **qrb** (qaf-ra-ba) signifie la proximite et le rapprochement. Le Lane's donne : qaruba = etre proche — aqrabu = le plus proche (elatif). Aqrabu lil-taqwa = plus proche de la piete. L'elatif aqrabu indique que renoncer (ta'fuwa) est l'attitude qui rapproche davantage de la piete — pas une obligation mais une recommandation forte.\n" +
"\n" +
"La racine **wqy** (waw-qaf-ya) signifie la protection et la preservation contre le mal. Le Lane's donne : waqaya = se premunir, proteger — taqwa = le fait de se premunir, la piete comme bouclier. Al-taqwa est la crainte-piete qui protege l'ame — l'etat de vigilance spirituelle qui preserve des fautes.\n" +
"\n" +
"La racine **nsy** (nun-sin-ya) signifie l'oubli et la negligence. Le Lane's donne : nasiya = oublier, negliger — la tansawu = n'oubliez pas (negatif imperatif 2MP). L'oubli (nisyan) est ici moral — ne pas negliger la vertu de la generosite dans les relations humaines.\n" +
"\n" +
"La racine **fdl** (fa-dal-lam) signifie la largesse, le surplus genereux et le bienfait. Le Lane's donne : fadala = depasser, surpasser, etre en surplus — fadl = largesse, surplus, genereux bienfait. Al-fadl baynakum = la generosite entre vous. Le fadl est ce qui va au-dela du strict droit — le don supplementaire, la grace accordee librement.\n" +
"\n" +
"La racine **bsr** (ba-sad-ra) signifie la vue et la perception profonde. Le Lane's donne : basara = voir, percevoir — basir = voyant, qui voit tout. Allah bima ta'maluna basir = Dieu est Voyant de ce que vous faites. Al-Basir est l'Attribut divin de la Vision totale — rien n'echappe a Sa perception.\n" +
"\n" +
"§JUSTIFICATION§\n" +
"**Et si vous les repudiez avant de les avoir touchees** — wa in tallaqtumuhunna min qabli an tamassuhunna : le wa conjonctif relie ce verset au v.236. La condition in tallaqtumuhunna (si vous les repudiez) + min qabli an tamassuhunna (avant de les avoir touchees) precise le contexte — divorce avant consommation. La racine mss (toucher/contact) est l'euphemisme canonique pour la consommation conjugale.\n" +
"\n" +
"**alors que vous avez fixe une dot** — wa qad faradtum lahunna faridatan : contrairement au v.236 (pas de dot fixee), ici la dot a ete prescrite (faradtum = vous avez fixe, de frd). Le qad + accompli (faradtum) marque l'anteriorite certaine — la prescription a deja eu lieu formellement. La faridha est la dot contractuelle fixee.\n" +
"\n" +
"**la moitie de ce que vous avez fixe** — fa nisfu ma faradtum : le fa conclusif introduit la regle : nisf (moitie, de nsf) de ce qui a ete prescrit est due. La regle du nisf est une disposition precise et equitable — le mari garde la moitie, la femme recoit la moitie. C'est la regle par defaut en cas de divorce avant consommation avec dot fixee.\n" +
"\n" +
"**a moins qu'elles ne renoncent** — illa an ya'fuwna : l'exception illa (sauf si) + ya'fuwna (elles renoncent, de efw, inaccompli 3FP) donne a la femme le pouvoir de renoncer a la moitie qui lui est due. Le 'afw feminin est un acte de generosite volontaire — la femme peut abandonner sa creance.\n" +
"\n" +
"**ou que celui qui tient le noeud du mariage renonce** — aw ya'fuwa alladhi biyadihi 'uqdatu al-nikah : la deuxieme exception est que 'alladhi biyadihi 'uqdatu al-nikah' (celui qui tient entre ses mains le noeud du mariage) renonce (ya'fuwa, subjonctif 3MS de efw). Biyadihi (entre ses mains, de ydy) exprime le controle et le pouvoir. L'identite de cette personne est discutee — certains disent le mari, d'autres le wali (tuteur). Le 'uqda (noeud, de eqd) designe le contrat-lien matrimonial.\n" +
"\n" +
"**que vous renonciez est plus proche de la piete** — wa an ta'fuwa aqrabu lil-taqwa : l'elatif aqrabu (plus proche, de qrb) + lil-taqwa (vers la piete/protection, de wqy) etablit une recommandation forte : renoncer est preferable. Al-taqwa est la vertu de la piete-protection — l'etat de preservation spirituelle. Le verset encourage le 'afw (renonciation) sans en faire une obligation stricte.\n" +
"\n" +
"**N'oubliez pas la generosite entre vous** — wa la tansawu al-fadla baynakum : l'imperatif negatif la tansawu (n'oubliez pas, de nsy) + al-fadl (la largesse/generosite, de fdl) + baynakum (entre vous) est une exhortation morale directe. Le fadl depasse le droit strict — c'est la vertu du don supplementaire, de la grace accordee librement dans les relations humaines.\n" +
"\n" +
"**Dieu voit bien ce que vous faites** — inna Allah bima ta'maluna basir : la cloture par Basir (Voyant, de bsr) rappelle que Dieu perçoit tous les actes — meme ceux accomplis en prive. Al-Basir est l'Attribut de la Vision complete. Cette cloture est a la fois une invitation a la sincerite et un avertissement contre l'injustice cachee.\n" +
"\n" +
"§CRITIQUE§\n" +
"Hamidullah traduit 'tamassuhunna' par 'touchees'. La racine mss (toucher/contact) est l'euphemisme coranique etabli pour la consommation conjugale. 'Touchees' suit la tradition des traductions classiques. Cependant, 'avant d'avoir eu des relations conjugales avec elles' serait plus explicite pour le lecteur moderne non familier avec ce code.\n" +
"\n" +
"Hamidullah traduit 'alladhi biyadihi 'uqdatu al-nikah' par 'celui qui tient le noeud du mariage en mains'. Cette formulation preserve l'image du noeud ('uqda de eqd = lien/contrat) et de la main (yad de ydy = pouvoir). L'identite de ce personnage reste debattue (mari ou wali) — Hamidullah laisse l'ambiguite du texte, ce qui est une approche correcte.\n" +
"\n" +
"Hamidullah traduit 'aqrabu lil-taqwa' par 'plus proche de la piete'. L'elatif aqrabu (de qrb = proximite) + taqwa (de wqy = protection/piete) est bien rendu. 'La piete' traduit taqwa de maniere conventionnelle — on pourrait aussi dire 'plus proche de la rectitude protegeante' pour rendre la dimension de bouclier spirituel que contient wqy, mais 'piete' est la traduction acceptee.",
    segments: [
      { fr: "Et si vous les repudiez", pos: "verbe", phon: "wa in tallaqtumuhunna", arabic: "وَإِن طَلَّقْتُمُوهُنَّ", word_key: "tlq", is_particle: false, sense_retenu: "separation/liberation", position: 1 },
      { fr: "avant de les avoir touchees", pos: "verbe", phon: "min qabli an tamassuhunna", arabic: "مِن قَبْلِ أَن تَمَسُّوهُنَّ", word_key: "mss", is_particle: false, sense_retenu: "contact/toucher", position: 2 },
      { fr: "alors que vous avez fixe pour elles une dot", pos: "verbe", phon: "wa qad faradtum lahunna faridatan", arabic: "وَقَدْ فَرَضْتُمْ لَهُنَّ فَرِيضَةً", word_key: "frd", is_particle: false, sense_retenu: "prescription/obligation", position: 3 },
      { fr: "alors la moitie de ce que vous avez fixe", pos: "nom", phon: "fa nisfu ma faradtum", arabic: "فَنِصْفُ مَا فَرَضْتُمْ", word_key: "nsf", is_particle: false, sense_retenu: "moitie/partage", position: 4 },
      { fr: "a moins qu'elles ne renoncent", pos: "verbe", phon: "illa an ya'fuwna", arabic: "إِلَّآ أَن يَعْفُونَ", word_key: "efw", is_particle: false, sense_retenu: "pardon/renonciation", position: 5 },
      { fr: "entre ses mains", pos: "nom", phon: "biyadihi", arabic: "بِيَدِهِۦ", word_key: "ydy", is_particle: false, sense_retenu: "main/pouvoir", position: 6 },
      { fr: "le noeud du mariage", pos: "nom", phon: "'uqdatu al-nikahi", arabic: "عُقْدَةُ ٱلنِّكَاحِ", word_key: "eqd", is_particle: false, sense_retenu: "noeud/contrat", position: 7 },
      { fr: "est plus proche de la piete", pos: "nom", phon: "aqrabu lil-taqwa", arabic: "أَقْرَبُ لِلتَّقْوَىٰ", word_key: "qrb", is_particle: false, sense_retenu: "proximite/rapprochement", position: 8 },
      { fr: "la piete", pos: "nom", phon: "al-taqwa", arabic: "ٱلتَّقْوَىٰ", word_key: "wqy", is_particle: false, sense_retenu: "protection/piete", position: 9 },
      { fr: "n'oubliez pas", pos: "verbe", phon: "wa la tansawu", arabic: "وَلَا تَنسَوُا۟", word_key: "nsy", is_particle: false, sense_retenu: "oubli/negligence", position: 10 },
      { fr: "la generosite entre vous", pos: "nom", phon: "al-fadla baynakum", arabic: "ٱلْفَضْلَ بَيْنَكُمْ", word_key: "fdl", is_particle: false, sense_retenu: "largesse/surplus", position: 11 },
      { fr: "Dieu est Voyant de ce que vous faites", pos: "nom", phon: "inna Allah bima ta'maluna basir", arabic: "إِنَّ ٱللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ", word_key: "bsr", is_particle: false, sense_retenu: "vue/perception", position: 12 }
    ],
    vwa: [
      {
        word_key: "tlq",
        position: 1,
        sense_chosen: "Separation/Liberation",
        analysis_axes: {
          sense_chosen: "Separation/Liberation",
          concept_chosen: "Separation/Liberation",
          concepts: {
            "Separation/Liberation": {
              status: "retenu",
              senses: ["repudier", "dissoudre le lien conjugal", "liberer"],
              proof_ctx: "tallaqtumuhunna min qabli an tamassuhunna = vous les repudiez avant de les avoir touchees",
              axe1_verset: "Dans ce verset, tallaqtumuhunna (vous les repudiez, accompli 2MP) decrit l'acte de dissolution du lien matrimonial avant consommation. La repudiation (talaq) est ici conditionnee : elle intervient avant le mass (contact intime). Le talaq est la separation formelle — la liberation du lien conjugal par acte unilateral du mari.",
              axe2_voisins: "Au v.236, tallaqtumu al-nisa'a apparait dans le meme contexte (divorce avant mass). Le v.231 traite du talaq avec l'obligation de retenir ou liberer convenablement (bi ma'ruf). Au v.229, talaq est mentionne deux fois comme repudiation revocable. La racine tlq couvre un continuum : liberer, repudier, dissoudre formellement.",
              axe3_sourate: "Dans la sourate 2, tlq apparait dans les versets 226-241 qui forment un ensemble legislatif sur le mariage et le divorce. Le talaq est toujours traite dans un cadre d'obligations morales et juridiques — avec dot, avec provisions, avec delai d'idda. La Sourate etablit que le talaq n'est pas un simple abandon mais un acte regi par des droits et devoirs.",
              axe4_coherence: "Le sens Separation/Liberation est coherent avec le contexte juridique : le verset traite du droit de la femme a recevoir la moitie de sa dot meme en cas de divorce avant consommation. La 'liberation' du lien (talaq) declenche des obligations financieres. La coherence theologique est que meme la separation doit etre juste et encadree.",
              axe5_frequence: "La racine tlq est l'une des plus frequentes dans les versets matrimoniaux coraniques. Elle apparait aussi dans les sourates 33, 65 (sourate Al-Talaq qui lui est entierement consacree), 66. La frequence dans S2:226-241 est maximale — c'est le coeur de la legislation coranique sur le divorce. Le sens de separation/dissolution formelle est constant."
            }
          }
        }
      },
      {
        word_key: "mss",
        position: 6,
        sense_chosen: "Contact/Toucher",
        analysis_axes: {
          sense_chosen: "Contact/Toucher",
          concept_chosen: "Contact/Toucher",
          concepts: {
            "Contact/Toucher": {
              status: "retenu",
              senses: ["toucher", "entrer en contact", "consommer le mariage"],
              proof_ctx: "min qabli an tamassuhunna = avant de les avoir touchees (euphemisme pour la consommation)",
              axe1_verset: "Tamassuhunna (vous les touchez, inaccompli 2MP + suffixe feminin pluriel) est employe avec min qabli an (avant que) pour designer la non-consommation du mariage. Le mass (toucher/contact) est l'euphemisme coranique canonique pour la relation conjugale physique. Sa presence conditionne toute la regle juridique du verset sur la dot.",
              axe2_voisins: "La meme forme tamassuhunna apparait au v.236 dans un contexte identique (ma lam tamassuhunna = que vous n'avez pas touchees). Au v.237, la structure est min qabli an tamassuhunna (avant de les toucher). Les deux versets forment une paire : sans mass + sans faridha (v.236) vs sans mass + avec faridha (v.237). Le mass est le pivot de la distinction.",
              axe3_sourate: "Dans S2, mss apparait principalement dans les versets sur le mariage et le divorce (v.236-237). L'euphemisme du mass est coherent avec le style coranique de pudeur dans les references physiques. La racine indique que le contact physique intime etablit un statut juridique different pour la femme repudiee.",
              axe4_coherence: "Le sens Contact/Toucher comme euphemisme pour la consommation est coherent avec l'ensemble de la legislation matrimoniale coranique. La distinction entre mariage consomme et non consomme a des implications directes sur l'idda (periode d'attente), la dot, et les obligations du divorce. Le mass marque le seuil de la pleine integration matrimoniale.",
              axe5_frequence: "La racine mss (masse, tamassa) apparait dans plusieurs versets coraniques avec le sens de toucher/contact. Dans S3:47, mss est employe pour une naissance sans contact masculin (Maryam). La frequence dans le contexte matrimonial est liee a S2:236-237. L'usage eupheimique est constant dans le corpus — le sens de contact/toucher physique intime est bien etabli."
            }
          }
        }
      },
      {
        word_key: "frd",
        position: 10,
        sense_chosen: "Prescription/Obligation",
        analysis_axes: {
          sense_chosen: "Prescription/Obligation",
          concept_chosen: "Prescription/Obligation",
          concepts: {
            "Prescription/Obligation": {
              status: "retenu",
              senses: ["fixer", "prescrire", "determiner une obligation", "dot fixee"],
              proof_ctx: "wa qad faradtum lahunna faridatan fa nisfu ma faradtum = vous avez prescrit pour elles une prescription, alors la moitie de ce que vous avez prescrit",
              axe1_verset: "La racine frd apparait trois fois dans ce verset : faradtum (vous avez fixe, accompli 2MP), faridatan (dot fixee, accusatif interne), faradtum (repris). La repetition souligne l'importance de la prescription formelle. La faridha est la dot (mahr) formellement determinee au moment du contrat de mariage — acte juridique contraignant.",
              axe2_voisins: "Au v.236, la meme structure apparait : aw tafridhu lahunna faridatan (ou prescrivez pour elles une prescription). La distinction entre v.236 (pas de faridha) et v.237 (faridha fixee) est precisement la presence ou l'absence de frd. La faridha est au coeur de la distinction juridique entre les deux versets.",
              axe3_sourate: "Dans S2, frd apparait dans les versets sur les obligations religieuses et matrimoniales. La racine couvre aussi bien les obligations rituelles (farida = obligation prescrite par Dieu) que les obligations contractuelles (faridha = dot fixee). La dimension de prescription formelle et contraignante est constante.",
              axe4_coherence: "Le sens Prescription/Obligation est coherent avec le contexte juridique : la faridha est la dot formellement fixee qui engage le mari. Une fois prescrite (faradtum), la moitie est due meme en cas de divorce avant consommation. La regle du nisf (moitie) s'applique precisement parce que la prescription formelle a eu lieu.",
              axe5_frequence: "La racine frd est frequente dans le Coran avec le sens de prescrire/obliger. Al-faraid (les parts prescrites) est le terme technique pour l'heritage coranique (S4:11). Farida est employe pour designer les obligations rituelles (S9:60). Le sens de fixation formelle d'une obligation est constant et central dans l'usage coranique de cette racine."
            }
          }
        }
      },
      {
        word_key: "nsf",
        position: 11,
        sense_chosen: "Moitie/Partage",
        analysis_axes: {
          sense_chosen: "Moitie/Partage",
          concept_chosen: "Moitie/Partage",
          concepts: {
            "Moitie/Partage": {
              status: "retenu",
              senses: ["moitie", "mi-part", "demi", "nisf = la moitie exacte"],
              proof_ctx: "fa nisfu ma faradtum = alors la moitie de ce que vous avez fixe",
              axe1_verset: "Nisfu (la moitie, nominatif) est le sujet de la proposition fa nisfu ma faradtum. Le fa est conclusif — il introduit la regle qui decoule de la situation. La moitie est la part due a la femme repudiee avant consommation quand une dot a ete fixee. Le nisf est une division exacte et juste — ni arbitraire ni approximative.",
              axe2_voisins: "Le nisf (moitie) s'oppose au montant total de la faridha : quand le mariage est consomme, la totalite de la dot est due ; quand il ne l'est pas (avec faridha fixee), seule la moitie est due. Cette regle du nisf est une mesure d'equite — la femme recoit compensation pour le contrat rompu, le mari ne paie que la moitie vu la non-consommation.",
              axe3_sourate: "Dans S2, le nisf apparait dans ce verset comme regle juridique precise. La racine nsf (moitie) est utilisee dans le Coran dans des contextes de partage equitable — S4:11-12 utilise nisf pour les parts d'heritage. La precision numerique du nisf contraste avec les autres regulations qui laissent place a l'appreciation (ma'ruf, qadar).",
              axe4_coherence: "Le sens Moitie/Partage est coherent avec la logique juridique du verset : la dot (faridha) est un droit qui s'acquiert progressivement avec le mariage. Avant consommation, la femme n'a acquis qu'une moitie de ce droit. La regle du nisf est donc une mesure d'equite entre les deux parties — un compromis entre le droit total et l'absence de droit.",
              axe5_frequence: "La racine nsf (nisf = moitie) est utilisee dans le Coran pour des partages juridiques precis. Dans les versets d'heritage (S4), nisf apparait comme part exacte. La frequence dans les versets legislatifs est notable. Le sens de moitie exacte et juste est constant — nisf n'a pas de sens figure, il designe toujours la demi-part mathematiquement precise."
            }
          }
        }
      },
      {
        word_key: "efw",
        position: 16,
        sense_chosen: "Pardon/Renonciation",
        analysis_axes: {
          sense_chosen: "Pardon/Renonciation",
          concept_chosen: "Pardon/Renonciation",
          concepts: {
            "Pardon/Renonciation": {
              status: "retenu",
              senses: ["pardonner", "renoncer a son droit", "faire grace", "abandonner sa creance"],
              proof_ctx: "illa an ya'fuwna aw ya'fuwa alladhi biyadihi 'uqdatu al-nikah = a moins qu'elles ne renoncent ou que celui qui tient le noeud du mariage renonce",
              axe1_verset: "La racine efw apparait deux fois dans ce verset : ya'fuwna (elles renoncent, inaccompli 3FP) et ya'fuwa (il renonce, inaccompli 3MS subjonctif). Les deux formes designent l'acte de renoncement volontaire a son droit sur la demi-dot. Le 'afw est ici juridique et moral — c'est la generosite active de celui qui efface sa creance.",
              axe2_voisins: "Au v.237, le 'afw est encadre par deux sujets possibles : les femmes (ya'fuwna) qui renoncent a leur part, et le detenteur du noeud matrimonial (ya'fuwa alladhi...) qui renonce a la moitie retenue. Le 'afw feminin = abandonner sa part de dot ; le 'afw masculin = donner la totalite a la femme. Les deux formes sont des actes de genereux abandon.",
              axe3_sourate: "Dans S2, 'afw apparait dans plusieurs contextes : v.109 (pardonnez et tolerez), v.187 (Dieu pardonne les manquements au jeune), v.219 (donnez le surplus). La racine couvre le pardon divin et humain, ainsi que la renonciation volontaire. Dans le contexte matrimonial, le 'afw est la vertu de la generosite contractuelle.",
              axe4_coherence: "Le sens Pardon/Renonciation est coherent avec la logique du verset : les deux exceptions a la regle du nisf reposent sur la generosity volontaire d'une des parties. Le 'afw n'est pas une obligation mais une recommandation — il correspond au registre de la piete (taqwa) evoquee juste apres. Renoncer est 'plus proche de la piete'.",
              axe5_frequence: "La racine 'efw est tres frequente dans le Coran — elle est l'un des Attributs divins majeurs (Al-'Afuww = Celui qui pardonne et efface, S4:99, S22:60). Dans les contextes humains, le 'afw couvre le pardon des offenses et la renonciation aux droits. La frequence et la richesse semantique de cette racine en font un concept central de l'ethique coranique."
            }
          }
        }
      },
      {
        word_key: "ydy",
        position: 20,
        sense_chosen: "Main/Pouvoir",
        analysis_axes: {
          sense_chosen: "Main/Pouvoir",
          concept_chosen: "Main/Pouvoir",
          concepts: {
            "Main/Pouvoir": {
              status: "retenu",
              senses: ["main", "pouvoir entre les mains", "controle", "biyadihi = dans sa main = il a le pouvoir"],
              proof_ctx: "alladhi biyadihi 'uqdatu al-nikah = celui dans la main duquel est le noeud du mariage",
              axe1_verset: "Biyadihi (dans sa main, bi + yad + suffixe 3MS) est une expression idiomatique pour le controle et l'autorite. Celui qui tient le noeud du mariage 'entre ses mains' (biyadihi) est celui qui a le pouvoir de le delier ou de le renforcer. La main (yad) comme metaphore du pouvoir et de la maitrise est une image coranique forte.",
              axe2_voisins: "L'expression biyadihi introduit le sujet de la deuxieme exception au nisf : ce personnage peut renoncer au retour de sa demi-dot (ya'fuwa). L'identite de ce 'detenteur du noeud' est debattue — certains interpretes y voient le mari (qui peut donner la totalite a la femme), d'autres le wali (tuteur matrimonial).",
              axe3_sourate: "Dans S2, yad (main) apparait dans plusieurs contextes : v.79 (malheur a ceux qui ecrivent de leurs mains), v.195 (ne vous precipitez pas avec vos mains dans la perdition). La main est souvent metaphore de l'acte humain et de la responsabilite. Biyadihi est une formule d'autorite et de possession.",
              axe4_coherence: "Le sens Main/Pouvoir est coherent avec la structure du verset : il faut quelqu'un ayant l'autorite sur le contrat matrimonial pour pouvoir renoncer a sa part. La main (yad) symbolise cette autorite contractuelle. La coherence est dans la parallelisme : la femme renonce (ya'fuwna) a sa part, le detenteur du noeud renonce (ya'fuwa) a la sienne.",
              axe5_frequence: "La racine ydy (yad = main) est extremement frequente dans le Coran. L'expression biyadihi X = X est entre ses mains / il controle X est une idiome etablie : biyadihi al-mulk (entre Ses mains la royaute, S67:1), biyadika al-khayr (entre Ta main le bien, S3:26). La metaphore de la main comme siege du pouvoir et de la maitrise est constante."
            }
          }
        }
      },
      {
        word_key: "eqd",
        position: 21,
        sense_chosen: "Noeud/Contrat",
        analysis_axes: {
          sense_chosen: "Noeud/Contrat",
          concept_chosen: "Noeud/Contrat",
          concepts: {
            "Noeud/Contrat": {
              status: "retenu",
              senses: ["noeud", "lien noue", "contrat", "'uqdatu al-nikah = le noeud du mariage"],
              proof_ctx: "'uqdatu al-nikahi = le noeud du mariage (contrat matrimonial comme lien noue)",
              axe1_verset: "'Uqdatu al-nikah (le noeud du mariage, nominatif) est le sujet de la proposition relative : c'est ce que tient biyadihi (dans sa main) le personnage evoque. La 'uqda est le noeud — image du lien matrimonial comme lien noue. Tenir ce noeud entre ses mains, c'est avoir le pouvoir sur le contrat de mariage.",
              axe2_voisins: "La 'uqda (noeud) du nikah (mariage) est une expression unique dans le Coran. Elle image le mariage comme un lien noue (aqada = nouer, contracter). Le noeud est ce qui unit — et le defaire (faskh) ou le relacher (talaq) est l'acte de dissolution. L'image du noeud est coherente avec la metaphore du lien contractuel.",
              axe3_sourate: "Dans S2, nikah (mariage) apparait dans les versets sur le droit matrimonial (v.221, 230, 232, 235, 237). La racine 'eqd (nouer) est liee au concept de contrat ('aqd) en arabe classique et moderne. Le mariage comme 'aqd (contrat solennel) est une notion juridique centrale en droit islamique.",
              axe4_coherence: "Le sens Noeud/Contrat est coherent avec la logique du verset : le mariage est un lien (noeud) qui peut etre tenu ou laisse aller. Celui qui tient ce noeud a le pouvoir de decider du sort de la demi-dot. La metaphore du noeud exprime a la fois la solidite du lien matrimonial et la possibilite de sa dissolution volontaire.",
              axe5_frequence: "La racine 'eqd (nouer/contracter) est presente dans le Coran en lien avec les engagements et serments ('uqud = contrats, S5:1 'awfu bi al-'uqud = honorez vos engagements). La 'uqda (noeud/blocage) apparait aussi en S20:27 pour decrire le blocage de la langue de Moise. Le sens de lien-noeud comme engagement contractuel est constant."
            }
          }
        }
      },
      {
        word_key: "qrb",
        position: 26,
        sense_chosen: "Proximite/Rapprochement",
        analysis_axes: {
          sense_chosen: "Proximite/Rapprochement",
          concept_chosen: "Proximite/Rapprochement",
          concepts: {
            "Proximite/Rapprochement": {
              status: "retenu",
              senses: ["proche", "approcher", "plus proche", "aqrabu = plus proche, plus approprie"],
              proof_ctx: "wa an ta'fuwa aqrabu lil-taqwa = et que vous renonciez est plus proche de la piete",
              axe1_verset: "Aqrabu (le plus proche, elatif de qaruba) est employe pour recommander le 'afw (renonciation) comme attitude plus proche de la taqwa (piete). L'elatif aqrabu indique une graduation — renoncer n'est pas une obligation absolue, mais c'est l'attitude qui rapproche davantage de la piete. La proximite est ici morale et spirituelle.",
              axe2_voisins: "L'elatif aqrabu lil-X (plus proche de X) est une formule coranique de recommendation graduee. Il apparait en S2:180 (aqrabu lil-taqwa) et S2:282 (aqwafu lil-shahada = plus exact pour le temoignage). La formule indique la superiorite morale sans imposer une obligation stricte — c'est le registre de la vertu preferable.",
              axe3_sourate: "Dans S2, qrb (proximite) apparait dans plusieurs contextes : v.186 (Dieu est proche, qarib) qui repond aux prières, v.177 (donner aux proches, dhi al-qurba), v.180 (laisser un testament aux proches). La proximite couvre la distance spatiale, relationnelle et morale. Dans v.237, c'est la proximite morale vers la taqwa.",
              axe4_coherence: "Le sens Proximite/Rapprochement est coherent avec la structure ethique du verset : le 'afw (renonciation) est presente comme ce qui 'rapproche' de la taqwa, non comme ce qui 'est' la taqwa. Cette nuance graduee est importante — elle laisse la liberte de choix tout en orientant vers la vertu. La logique est celle de la progression spirituelle.",
              axe5_frequence: "La racine qrb est l'une des plus frequentes dans le Coran. Qarib (proche) est un Attribut divin (Dieu est proche de ceux qui L'invoquent). Al-Muqarrabun (les rapproches) designent les anges et les croyants d'excellence. L'elatif aqrabu dans les exhortations morales apparait dans plusieurs versets. La richesse semantique de qrb couvre la proximite spatiale, relationnelle, temporelle et spirituelle."
            }
          }
        }
      },
      {
        word_key: "wqy",
        position: 27,
        sense_chosen: "Protection/Piete",
        analysis_axes: {
          sense_chosen: "Protection/Piete",
          concept_chosen: "Protection/Piete",
          concepts: {
            "Protection/Piete": {
              status: "retenu",
              senses: ["se premunir", "piete", "taqwa = protection contre le mal", "crainte reverentielle"],
              proof_ctx: "aqrabu lil-taqwa = plus proche de la taqwa (la piete/protection spirituelle)",
              axe1_verset: "Al-taqwa (la piete-protection, de waqaya = premunir) est le terme final de la recommandation sur le 'afw. Renoncer a sa demi-dot est aqrabu lil-taqwa (plus proche de la taqwa). La taqwa est l'etat de vigilance spirituelle qui protege l'ame des fautes — ici, la generosite dans le divorce protege l'ame de la petitesse et de l'injustice.",
              axe2_voisins: "Al-taqwa est l'un des concepts les plus recurrents dans S2 et dans le Coran. Il apparait en v.2 (guide pour ceux qui ont la taqwa), v.21 (peut-etre aurez-vous la taqwa), v.183 (le jeune — afin que vous ayez la taqwa), v.189, v.194, v.197, v.203. La taqwa est le fil conducteur de la spiritualite coranique.",
              axe3_sourate: "Dans S2, taqwa est systematiquement associee aux pratiques religieuses et ethiques : le jeune, le hajj, la lutte, le pardon. Dans le contexte matrimonial (v.237), la taqwa est liee a la generosite dans les relations humaines. La coherence est que la taqwa n'est pas seulement rituelle mais aussi relationnelle — elle se manifeste dans les actes de generosite.",
              axe4_coherence: "Le sens Protection/Piete est coherent avec l'ensemble du verset : apres avoir enumere les regles juridiques du divorce et de la dot, le verset conclut sur une dimension spirituelle. La taqwa transcende le droit — elle invite a aller au-dela de l'obligation legale vers la vertu genereusse. La coherence est dans la progression : droit strict -> generosite -> piete.",
              axe5_frequence: "La racine wqy (taqwa, wiqaya, muttaqun) est l'une des racines les plus frequentes du Coran. Les muttaqun (ceux qui ont la taqwa) sont le paradigme du croyant accompli. Al-taqwa apparait plus de 250 fois dans le Coran sous diverses formes. Son sens de protection-piete comme bouclier spirituel est constant et central dans la theologie coranique."
            }
          }
        }
      },
      {
        word_key: "nsy",
        position: 30,
        sense_chosen: "Oubli/Negligence",
        analysis_axes: {
          sense_chosen: "Oubli/Negligence",
          concept_chosen: "Oubli/Negligence",
          concepts: {
            "Oubli/Negligence": {
              status: "retenu",
              senses: ["oublier", "negliger", "la tansawu = n'oubliez pas"],
              proof_ctx: "wa la tansawu al-fadla baynakum = et n'oubliez pas la generosite entre vous",
              axe1_verset: "La tansawu (n'oubliez pas, negatif jussif 2MP de nasiya) est un imperatif negatif adresse aux deux parties du divorce. L'oubli (nisyan) est ici moral — ne pas negliger la vertu de la generosite (fadl) dans les relations humaines. Le commandement 'n'oubliez pas' implique que l'oubli est un risque reel dans le contexte du divorce.",
              axe2_voisins: "L'imperatif negatif la tansawu s'adresse aux parties en conflit (divorciants). L'oubli du fadl (generosite) dans le contexte du divorce signifie se laisser guider par la rancune ou l'avidite plutot que par la bienveillance. Le verset rappelle que meme dans la separation, la qualite morale des relations doit etre preservee.",
              axe3_sourate: "Dans S2, nasiya (oublier) apparait dans des contextes de devoir moral neglige : v.44 (vous oubliez vous-memes), v.286 (notre Seigneur ne nous tiens pas rigueur si nous oublions). L'oubli est traite comme une faiblesse humaine a surmonter — d'ou les rappels imperieux 'n'oubliez pas'. La dimension de la negligence morale est centrale.",
              axe4_coherence: "Le sens Oubli/Negligence est coherent avec le contexte : le divorce peut amener les parties a oublier les bonnes manieres et la generosite mutuelles. L'exhortation 'n'oubliez pas le fadl' est un rappel que les obligations morales persistent meme dans la separation. La coherence est dans la logique: apres les regles juridiques, un rappel ethique.",
              axe5_frequence: "La racine nsy (oubli) est frequente dans le Coran — elle decrit souvent l'oubli des commandements divins ou des engagements humains. Dans S2:286, nasiya est un oubli involontaire excuse. Dans d'autres contextes, nasiya est une negligence coupable. L'imperatif 'la tansawu' (n'oubliez pas) apparait pour des obligations importantes que l'homme risque de negliger dans la tourmente."
            }
          }
        }
      },
      {
        word_key: "fdl",
        position: 31,
        sense_chosen: "Largesse/Surplus",
        analysis_axes: {
          sense_chosen: "Largesse/Surplus",
          concept_chosen: "Largesse/Surplus",
          concepts: {
            "Largesse/Surplus": {
              status: "retenu",
              senses: ["largesse", "bienfait", "don supplementaire", "faveur", "al-fadl = la generosite"],
              proof_ctx: "wa la tansawu al-fadla baynakum = n'oubliez pas la generosite/largesse entre vous",
              axe1_verset: "Al-fadl (la largesse/generosite, accusatif) est ce que les parties ne doivent pas oublier (la tansawu). Le fadl est ce qui va au-dela du strict minimum legal — la qualite de la relation, la bienveillance, le don supplementaire. Dans le contexte du divorce, le fadl designe la generosite mutuelle qui transcende les obligations legales.",
              axe2_voisins: "Al-fadl baynakum (la generosite entre vous) est une formule inclusive — elle s'adresse aux deux parties (baynakum = entre vous). Le fadl n'est pas unidirectionnel — les deux peuvent en faire preuve. Cette reciprocite contraste avec les regles asymetriques de la dot (mari -> femme). Le fadl est l'espace de generosite mutuelle.",
              axe3_sourate: "Dans S2, fadl est l'un des concepts ethiques majeurs. Il apparait en v.64 (fadl Allah wa rahmatihi = la grace et la misericorde de Dieu), v.198 (chercher la bounty divine pendant le hajj), v.251 (fadl Allah 'ala al-'alamin). Le fadl divin est le modele du fadl humain — la generosite comme attribut divin a imiter dans les relations humaines.",
              axe4_coherence: "Le sens Largesse/Surplus est coherent avec la structure ethique du verset : apres les obligations legales (nisf, 'afw), le verset appelle au fadl — ce qui depasse l'obligation. La coherence est progressive : droit strict (nisf) -> facultatif genereux ('afw) -> vertu ethique (fadl) -> spiritualite (taqwa). Le fadl est le niveau de la vertu active.",
              axe5_frequence: "La racine fdl est tres frequente dans le Coran, surtout comme Attribut divin (Allah Dhu al-Fadl al-'Azim = Dieu, Possesseur de la Grande Grace). Dans les contextes humains, fadl couvre la generosite, la preferece, le surplus. La recommandation de ne pas oublier le fadl baynakum est une exhortation a maintenir la dignite relationnelle meme dans le conflit."
            }
          }
        }
      },
      {
        word_key: "bsr",
        position: 35,
        sense_chosen: "Vue/Perception",
        analysis_axes: {
          sense_chosen: "Vue/Perception",
          concept_chosen: "Vue/Perception",
          concepts: {
            "Vue/Perception": {
              status: "retenu",
              senses: ["voir", "percevoir", "Basir = Celui qui voit/perçoit tout"],
              proof_ctx: "inna Allah bima ta'maluna basir = certes Dieu est Voyant de ce que vous faites",
              axe1_verset: "Basir (Voyant, adjectif intensif de basara) est l'Attribut divin qui clot le verset. Bima ta'maluna (de ce que vous faites) etend la vision divine a tous les actes — y compris les actes prives du divorce, de la dot, du 'afw. Al-Basir signifie que rien n'echappe a la perception divine — les intentions comme les actes sont vus.",
              axe2_voisins: "La formule de cloture inna Allah bima ta'maluna basir est recurrente dans les versets legislatifs de S2. Elle apparait en contexte de divorce (v.233, v.234, v.237) et d'obligations financieres. Sa fonction est de rappeler la dimension transcendante des actes humains — Dieu voit et jugera selon ce que vous faites reellement.",
              axe3_sourate: "Dans S2, basir apparait comme Attribut divin regulierement (v.96, v.110, v.233, v.237, v.265). Al-Basir est souvent couple avec Al-Khabir (Informe) ou Al-'Alim (Omniscient). La formule bima ta'maluna basir insiste sur la specificite de la vision divine — elle porte sur les actes (a'mal) des hommes.",
              axe4_coherence: "Le sens Vue/Perception est coherent avec la fonction de la cloture : apres des regles sur le divorce et des exhortations a la generosite, rappeler que Dieu voit tout renforce l'obligation morale. La coherence est dans la logique: si les hommes savent que Dieu perçoit leurs actes, ils seront plus enclins a agir avec justice et generosite.",
              axe5_frequence: "Al-Basir est l'un des 99 Noms de Dieu en islam. La racine bsr (vision/perception) est frequente dans le Coran : absar (yeux/visions), tabassara (percevoir), basira (discernement). La frequence de Basir comme Attribut divin de cloture dans les versets legislatifs est notable — il signale que la loi humaine est sous la surveillance divine."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[237];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V237)');

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
  console.log('V237 TERMINE');
}
main().catch(console.error);
