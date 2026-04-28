const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 - VERSET 236
// verse_id=243, analysis_id=602
// "la junaha 'alaykum in tallaqtumu al-nisa'a
//  ma lam tamassuhunna aw tafridhu lahunna faridatan
//  wa matti'uhunna 'ala al-musi'i qadaruhu
//  wa 'ala al-muqtiri qadaruhu
//  mata'an bi al-ma'rufi
//  haqqan 'ala al-muhsinina"
// =====================================================

const verseData = {
  236: {
    verse_id: 243,
    analysis_id: 602,
    translation_arab: "Pas d'inclinaison vers la faute pour vous si vous repudiez des femmes que vous n'avez pas encore touchees et pour lesquelles vous n'avez pas encore prescrit de dot fixee. Pourvoyez a leurs besoins — le nanti selon sa mesure, le necessite selon sa mesure — en bien reconnu. C'est un droit etabli sur les bienfaisants.",
    full_translation: "Vous ne commettrez aucun peche si vous repudiez des femmes que vous n'avez pas encore touchees et pour lesquelles vous n'avez pas encore fixe de dot. Pourvoyez a leurs besoins — le riche selon ses moyens, le pauvre selon les siens — d'une maniere convenable. C'est une obligation pour les bienfaisants.",
    translation_explanation: "§DEMARCHE§\n" +
"Le verset 236 traite d'un cas specifique de divorce : la femme qui n'a pas encore ete touchee (ma lam tamassuhunna = sans consommation du mariage) et pour laquelle aucune dot n'a ete fixee (aw tafridhu lahunna faridatan = pas de dot prescrite). Dans ce cas, le divorce est permis sans culpabilite, mais le mari a l'obligation de pourvoir aux besoins de la femme repudiee (matta'uhunna) selon ses moyens (qadarihi).\n" +
"\n" +
"La racine **jnh** (jim-nun-ha) signifie l'inclinaison vers la faute. Le Lane's donne : s'incliner vers ce qui est blamable, penchant, junah = inclinaison vers la faute. La junaha = pas d'inclinaison blamable. Dans ce verset, la formule la junaha leve la responsabilite sur le divorce avant consommation sans dot fixee.\n" +
"\n" +
"La racine **tlq** (ta-lam-qaf) signifie le divorce et la repudiation. Le Lane's donne : tallaqa = divorcer, repudier, liberer — talaq = le divorce, la repudiation. Tallaqtumu = vous avez repudie (accompli 2MP). Al-talaq est le divorce comme liberation — relacher le lien matrimonial.\n" +
"\n" +
"La racine **mss** (mim-sin-sin) signifie le toucher et le contact. Le Lane's donne : massa = toucher, entrer en contact — tamassuhunna = vous les touchez (inaccompli 2MP + suffixe feminin). Ma lam tamassuhunna = que vous n'avez pas encore touchees. Le mass est un euphemisme pour la consommation du mariage — la relation conjugale physique.\n" +
"\n" +
"La racine **frd** (fa-ra-dal) signifie la prescription et l'obligation. Le Lane's donne : farada = prescrire, fixer une obligation, determiner — faridha = obligation, dot fixee. Tafridhu lahunna faridatan = vous prescrivez pour elles une prescription/dot. La farida est ce qui est fixe et determine — l'obligation prescrite par acte formel.\n" +
"\n" +
"La racine **mte** (mim-ta-'ayn) signifie le bien et la jouissance. Le Lane's donne : matta'a = pourvoir de biens, procurer ce dont on jouit — mata' = bien, ce dont on jouit/profite. Matti'uhunna = pourvoyez-les/dotez-les (imperatif 2MP). Al-matta' ou mut'a al-talaq est le don de consolation fait a la femme repudiee avant consommation.\n" +
"\n" +
"La racine **wse** (waw-sin-'ayn) signifie la capacite et la largesse. Le Lane's donne : wasi'a = etre large, avoir de la largesse, de la capacite — al-musi' = le nanti, celui qui a de la largesse/capacite. Al-musi'i = le nanti/l'aise (genitif). Le wus' est la capacite — la possibilite de faire quelque chose selon ses moyens.\n" +
"\n" +
"La racine **qdr** (qaf-dal-ra) signifie la mesure et la capacite. Le Lane's donne : qadara = mesurer, avoir la capacite — qadar = la mesure, la proportion, la capacite. Qadaruhu = sa mesure/sa capacite propre (nominatif + suffixe 3MS). La qadar est la mesure exacte — ni plus ni moins que ce que l'on peut.\n" +
"\n" +
"La racine **erf** ('ayn-ra-fa) signifie ce qui est reconnu convenable. Le Lane's donne : 'arafa = reconnaitre, connaitre — ma'ruf = ce qui est connu/reconnu socialement comme bien. Bi al-ma'rufi = selon le bien reconnu/convenablement. Le ma'ruf est le standard de la bienveillance sociale reconnue.\n" +
"\n" +
"La racine **hqq** (ha-qaf-qaf) signifie le droit et la verite etablis. Le Lane's donne : haqqa = etre etabli, etre vrai, s'imposer — haqq = droit etabli, verite, obligation. Haqqan 'ala al-muhsinina = une obligation sur les bienfaisants. Le haqq est ce qui est juste et etabli — le droit comme realite incontestable.\n" +
"\n" +
"§JUSTIFICATION§\n" +
"**Pas d'inclinaison vers la faute si vous repudiez** — la junaha 'alaykum in tallaqtumu al-nisa'a : la formule la junaha + la condition in tallaqtumu (si vous repudiez) etablit la permission du divorce dans ce cas. La question implicite est : peut-on divorcer avant la consommation du mariage sans avoir fixe de dot ? Le verset dit : oui, sans faute (la junaha).\n" +
"\n" +
"**que vous n'avez pas encore touchees** — ma lam tamassuhunna : mass (toucher) est l'euphemisme coranique pour la consommation du mariage. La condition ma lam tamassuhunna (sans les avoir touchees) distingue ce verset des cas de divorce apres consommation. Avant le mass, les regles de la dot et de l'idda sont differentes.\n" +
"\n" +
"**pour lesquelles vous n'avez pas prescrit de dot** — aw tafridhu lahunna faridatan : la farida (dot prescrite/fixee, de frd) n'a pas ete determinee (tafridhu = vous prescrivez). Le verset traite du cas de la 'tafwid' : le mariage conclu sans dot fixee. Dans ce cas, il n'y a pas de mahr obligatoire mais le mu'ta (provision de consolation, de mte) reste due.\n" +
"\n" +
"**Pourvoyez a leurs besoins** — wa matti'uhunna : l'imperatif matti'uhunna (pourvoyez-les/dotez-les, de mte) est une obligation morale explicite. Le matta' est la provision de consolation — un don que le mari fait a la femme repudiee avant consommation. C'est une obligation ethique et juridique, exprimee par l'imperatif.\n" +
"\n" +
"**le nanti selon sa mesure, le necessiteux selon la sienne** — 'ala al-musi'i qadaruhu wa 'ala al-muqtiri qadaruhu : la double structure ('ala X qadaruhu / 'ala Y qadaruhu) etablit le principe de proportionnalite. Al-musi' (le nanti, de wse) donne selon sa qadar (mesure/capacite) ; al-muqtir (le necessiteux, de qtr) donne selon sa qadar. Nul n'est astreint a plus que ce qu'il peut.\n" +
"\n" +
"**en bien reconnu** — mata'an bi al-ma'rufi : le mata' est encadre par le ma'ruf (ce qui est reconnu convenable, de erf). La provision (matta') doit etre faite de maniere socialement reconnue et bienveillante — ni avarement ni ostensiblement. Le ma'ruf calibre la qualite de la provision.\n" +
"\n" +
"**une obligation sur les bienfaisants** — haqqan 'ala al-muhsinina : le haqq (droit etabli, de hqq) 'ala al-muhsinina (sur les bienfaisants) est une formule d'obligation morale forte. Le muhsin (celui qui fait bien/bienfaisant, de hsn) est l'ideal moral du croyant — le haqq est 'sur' lui dans le sens d'une obligation qui s'impose a lui.\n" +
"\n" +
"§CRITIQUE§\n" +
"Hamidullah traduit 'tamassuhunna' par 'touchees'. La racine mss signifie le contact/toucher — ici euphemisme pour la consommation conjugale. 'Touchees' est exact et suit la tradition du langage euphemine coranique. Cependant, 'avoir eu des relations conjugales avec elles' serait plus clair pour le lecteur moderne.\n" +
"\n" +
"Hamidullah traduit 'tafridhu lahunna faridatan' par 'fixe de dot'. La racine frd signifie prescrire/fixer une obligation — faridha est la chose prescrite/fixee. 'Dot fixee' (mahar mu'ayyan) est une traduction correcte et etablie. La nuance de la 'prescription' (frd comme obligation determinee) est partiellement rendue par 'fixe'.\n" +
"\n" +
"Hamidullah traduit 'haqqan 'ala al-muhsinina' par 'obligation pour les bienfaisants'. Haqq 'ala = droit/obligation sur — c'est une obligation qui s'impose (pas seulement une recommandation). 'Obligation' (plutot que 'devoir' ou 'bienfait') est exact. La formule est plus forte qu'une simple encouragement — le haqq etablit une obligation ferme.",
    segments: [
      { fr: "Pas d'inclinaison vers la faute pour vous", pos: "nom", phon: "la junaha 'alaykum", arabic: "لَّا جُنَاحَ عَلَيْكُمْ", word_key: "jnh", is_particle: false, sense_retenu: "inclinaison/penchant", position: 1 },
      { fr: "si vous repudiez les femmes", pos: "verbe", phon: "in tallaqtumu al-nisa'a", arabic: "إِن طَلَّقْتُمُ ٱلنِّسَآءَ", word_key: "tlq", is_particle: false, sense_retenu: "divorce/repudiation", position: 2 },
      { fr: "que vous n'avez pas encore touchees", pos: "verbe", phon: "ma lam tamassuhunna", arabic: "مَا لَمْ تَمَسُّوهُنَّ", word_key: "mss", is_particle: false, sense_retenu: "contact/toucher", position: 3 },
      { fr: "ou pour lesquelles vous n'avez pas prescrit de dot fixee", pos: "verbe", phon: "aw tafridhu lahunna faridatan", arabic: "أَوْ تَفْرِضُوا۟ لَهُنَّ فَرِيضَةً", word_key: "frd", is_particle: false, sense_retenu: "prescription/obligation", position: 4 },
      { fr: "Pourvoyez a leurs besoins", pos: "verbe", phon: "wa matti'uhunna", arabic: "وَمَتِّعُوهُنَّ", word_key: "mte", is_particle: false, sense_retenu: "bienfait/jouissance", position: 5 },
      { fr: "le nanti selon sa mesure", pos: "nom", phon: "'ala al-musi'i qadaruhu", arabic: "عَلَى ٱلْمُوسِعِ قَدَرُهُۥ", word_key: "wse", is_particle: false, sense_retenu: "capacite/largeur", position: 6 },
      { fr: "le necessiteux selon sa mesure", pos: "nom", phon: "wa 'ala al-muqtiri qadaruhu", arabic: "وَعَلَى ٱلْمُقْتِرِ قَدَرُهُۥ", word_key: "qdr", is_particle: false, sense_retenu: "mesure/capacite", position: 7 },
      { fr: "une provision en bien reconnu", pos: "nom", phon: "mata'an bi al-ma'rufi", arabic: "مَتَـٰعًۢا بِٱلْمَعْرُوفِ", word_key: "erf", is_particle: false, sense_retenu: "convention/bienfait", position: 8 },
      { fr: "une obligation sur les bienfaisants", pos: "nom", phon: "haqqan 'ala al-muhsinina", arabic: "حَقًّا عَلَى ٱلْمُحْسِنِينَ", word_key: "hqq", is_particle: false, sense_retenu: "droit/obligation", position: 9 }
    ],
    vwa: [
      {
        word_key: "jnh",
        position: 1,
        sense_chosen: "inclinaison/penchant",
        analysis_axes: {
          sense_chosen: "inclinaison/penchant",
          concept_chosen: "Inclinaison/Penchant",
          concepts: {
            "Inclinaison/Penchant": {
              status: "retenu",
              senses: ["penchant vers la faute", "inclination blamable", "responsabilite morale", "junah = inclinaison"],
              proof_ctx: "La racine j-n-h (jim-nun-ha) signifie l'inclinaison laterale et le penchant vers ce qui est blamable. Le Lane's donne : janaha = s'incliner, le flanc, le penchant — junah = l'inclinaison vers la faute, la responsabilite blamable. La junaha = pas d'inclinaison blamable = pas de responsabilite morale. Ce n'est pas 'pas de peche' au sens de faute commise mais 'pas de penchant vers la faute' dans cet acte.",
              axe1_verset: "La junaha 'alaykum in tallaqtumu (pas d'inclinaison vers la faute si vous repudiez) : la formule la junaha etablit que le divorce dans ce cas specifique (sans consommation, sans dot fixee) n'entraine pas de junah (penchant blamable). La responsabilite (junah) n'est pas engagee par cet acte de divorce particulier. C'est une permission explicite face a une question de conscience.",
              axe2_voisins: "La meme formule la junaha 'alaykum est utilisee en v.235 pour les allusions pendant l'idda. Dans les deux cas (235 et 236), la formule la junaha repond a une question de conscience : peut-on faire cela sans se rendre coupable ? Le verset 236 repond a la question specifique du divorce avant consommation sans dot fixee.",
              axe3_sourate: "La formule la junaha est un marqueur juridique recurrent dans al-Baqarah pour legitimer des actes qui pourraient sembler moralement problematiques : 2:158 (safa et marwa), 2:198 (commerce pendant le hajj), 2:229-237 (section matrimoniale). Chaque occurrence de la junaha repond a une question de conscience de la communaute.",
              axe4_coherence: "La racine jnh apparait environ 15 fois dans le Coran. Le sens d'inclinaison vers la faute ou vers le blamable est constant. La formule la junaha est une levee explicite de responsabilite morale — elle dit : cet acte n'est pas un junah (inclinaison vers la faute). Elle ne dit pas que l'acte est souhaitable mais qu'il ne constitue pas une transgression.",
              axe5_frequence: "La formule la junaha 'alaykum dans ce verset indique que la question du divorce avant consommation etait moralement sensible pour la communaute. Certains pensaient qu'un tel divorce etait blamable (junah). Le Coran leve cette hesitation : la junaha = pas de responsabilite morale dans ce cas. Cependant, le verset continue avec des obligations (pourvoir aux besoins, haqqan 'ala al-muhsinina), etablissant que la permission du divorce n'implique pas l'absence de devoirs envers la femme repudiee."
            }
          }
        }
      },
      {
        word_key: "tlq",
        position: 5,
        sense_chosen: "divorce/repudiation",
        analysis_axes: {
          sense_chosen: "divorce/repudiation",
          concept_chosen: "Divorce/Repudiation",
          concepts: {
            "Divorce/Repudiation": {
              status: "retenu",
              senses: ["divorcer", "repudier", "liberer", "talaq = le divorce", "relachement du lien matrimonial"],
              proof_ctx: "La racine t-l-q (ta-lam-qaf) signifie le relachement et la liberation. Le Lane's donne : tallaqa = liberer, relacher, repudier — talaq = le divorce, la repudiation, le relachement. Tallaqtumu = vous avez repudie (accompli 2MP). Al-talaq est fondamentalement un acte de liberation — relacher le lien matrimonial. La racine exprime le relachement, l'abandon du lien.",
              axe1_verset: "In tallaqtumu al-nisa'a (si vous repudiez les femmes) : le talaq est la condition du verset — la permission de la junaha est liee au talaq avant consommation sans dot fixee. Le talaq (repudiation) est l'acte qui declenche les obligations de matta' (provision) et de qadarihi (mesure selon ses moyens).",
              axe2_voisins: "La racine tlq est centrale dans la section matrimoniale de al-Baqarah. V.229 etablit le principe du talaq (deux fois, trois fois). V.230 traite du talaq definitif. V.231 des obligations apres le talaq. V.236 traite du cas specifique du talaq avant consommation sans dot. Le talaq comme acte est ainsi traite dans ses differentes configurations.",
              axe3_sourate: "La racine tlq est l'une des racines les plus importantes de la section matrimoniale de al-Baqarah. Le talaq (divorce) est le mecanisme de dissolution du nikah — il entraine des obligations juridiques (idda, matta', nafaqa). Dans ce verset, le talaq avant consommation (ma lam tamassuhunna) est un cas allege — pas d'idda, mais obligation de matta'.",
              axe4_coherence: "La racine tlq apparait environ 25 fois dans le Coran. Le sens de relachement/liberation/divorce est constant. Al-talaq est le mecanisme par lequel le lien matrimonial est relache — la femme est liberee (mutallaq = liberee). Le talaq entraine des droits et obligations qui varient selon le stade du mariage (avant ou apres consommation, avec ou sans dot).",
              axe5_frequence: "Le cas du talaq avant consommation sans dot fixee (v.236) est un cas distinct du talaq apres consommation (v.229-231) et du talaq avant consommation avec dot fixee (v.237). Cette gradation des cas illustre la methode legislative coranique : les regles generales sont etablies puis les cas particuliers sont traites. Le verset 236 traite le cas le plus allege (pas d'idda, pas de mahr minimum fixe, mais matta' obligatoire)."
            }
          }
        }
      },
      {
        word_key: "mss",
        position: 9,
        sense_chosen: "contact/toucher",
        analysis_axes: {
          sense_chosen: "contact/toucher",
          concept_chosen: "Contact/Toucher",
          concepts: {
            "Contact/Toucher": {
              status: "retenu",
              senses: ["toucher", "entrer en contact physique", "consommer un mariage", "massa = il toucha", "euphemisme conjugal"],
              proof_ctx: "La racine m-s-s (mim-sin-sin) signifie le toucher et le contact physique. Le Lane's donne : massa = toucher, entrer en contact — mass = le toucher, le contact. Tamassuhunna = vous les touchez (inaccompli 2MP + suffixe feminin). Ma lam tamassuhunna = que vous n'avez pas encore touchees. Le mass est l'euphemisme coranique pour la consommation du mariage — la relation conjugale physique, sans la nommer explicitement.",
              axe1_verset: "Ma lam tamassuhunna (que vous n'avez pas encore touchees) : la condition du mass (toucher) determine les droits de la femme repudiee. Sans consommation (ma lam tamassuhunna) et sans dot fixee, le cas est allege. Avec consommation, la moitie du mahr fixe est due (v.237). La consommation (mass) est le seuil qui change les droits.",
              axe2_voisins: "La racine mss dans le contexte matrimonial apparait en S.2:236, S.2:237 (min qabli an tamassuhunna = avant de les avoir touchees), S.33:49 (min qabli an tamassuhunna). La coherence est forte : le mass (toucher/consommation) est le seuil determinant des droits matrimoniaux dans les cas de divorce. Avant le mass, les obligations sont differentes.",
              axe3_sourate: "La racine mss dans al-Baqarah est utilisee exclusivement dans le contexte matrimonial (v.236, v.237) avec le sens de consommation conjugale. L'euphemisme est coherent avec le style pudique du Coran : la relation physique conjugale est evoquee par le toucher (mass) plutot que par des termes explicites. C'est une convention linguistique coranique.",
              axe4_coherence: "La racine mss apparait environ 60 fois dans le Coran avec le sens de toucher/contact. Dans le contexte matrimonial, massa (il toucha) est specifiquement l'euphemisme pour la consommation conjugale. Le Coran utilise plusieurs euphemismes pour la relation conjugale : mass (toucher), lamasa (toucher, wudu'), rafath (approcher). Le mass est le plus frequent dans le contexte du divorce.",
              axe5_frequence: "La condition du mass (consommation) comme seuil determinant les droits lors du divorce a des consequences juridiques importantes. Avant le mass : pas d'idda, mahr reduit ou nul (cas de v.236-237). Apres le mass : idda obligatoire, mahr plein du. Cette distinction a genere une jurisprudence detaillee sur la definition du mass (consommation) : contact physique suffisant ou penetration necessaire ? Les ecoles juridiques ont des positions differentes."
            }
          }
        }
      },
      {
        word_key: "frd",
        position: 11,
        sense_chosen: "prescription/obligation",
        analysis_axes: {
          sense_chosen: "prescription/obligation",
          concept_chosen: "Prescription/Obligation",
          concepts: {
            "Prescription/Obligation": {
              status: "retenu",
              senses: ["prescrire", "fixer une obligation", "determiner", "faridha = dot fixee/obligation", "fardh = devoir prescrit"],
              proof_ctx: "La racine f-r-d (fa-ra-dal) signifie la prescription et la fixation d'une obligation. Le Lane's donne : farada = prescrire, fixer, determiner — fardh = obligation prescrite, faridha = ce qui est fixe/determine, la dot fixee. Tafridhu lahunna faridatan = vous prescrivez/fixez pour elles une dot (inaccompli 2MP). La faridha dans ce contexte est la dot (mahr) formellement fixee.",
              axe1_verset: "Aw tafridhu lahunna faridatan (ou vous avez fixe pour elles une dot prescrite) : la farida est la dot (mahr) formellement determinee lors du contrat de mariage. La condition 'ma lam tafridhu lahunna faridatan' (sans avoir fixe de dot) decrit le mariage en tafwid — conclu sans montant de dot determine. Dans ce cas, la femme repudiee avant consommation n'a pas de mahr obligatoire mais a droit au matta'.",
              axe2_voisins: "Le verset 237 traite du cas complementaire : divorce avant consommation AVEC dot fixee. Dans ce cas, la moitie de la faridha (dot fixee) est due. Le verset 236 traite du cas sans farida fixee. Les deux versets (236-237) forment un diptyque : le cas sans farida (236, matta' obligatoire) et le cas avec farida (237, moitie de farida due).",
              axe3_sourate: "La racine frd dans al-Baqarah designe les obligations prescrites : v.236 (faridatan = dot fixee), v.237 (faridatan = dot fixee), v.238 (al-salat al-wusta = la priere du milieu, dont l'observance est prescrite). Le sens de prescription/obligation fixe est constant. La faridha comme dot prescrite est une obligation determinee formellement.",
              axe4_coherence: "La racine frd apparait environ 15 fois dans le Coran. Le sens de prescription/obligation fixe est constant. Fardh est l'obligation prescrite par Dieu (salat, zakat, jihad) ou par acte humain (faridhat al-mahr = la dot fixee). La faridha est ce qui a ete determine et fixe — une obligation incontournable.",
              axe5_frequence: "La distinction entre le mariage avec farida fixee (mahr mu'ayyan) et sans farida (tafwid) a des implications juridiques importantes. Dans le tafwid, les parties conviennent de ne pas fixer le montant de la dot lors du contrat. Lors du divorce avant consommation, la femme n'a pas de mahr minimum mais le juge peut determiner un mahr al-mithl (dot equivalente a celle des femmes comparables). Le verset 236 etablit l'obligation de matta' dans ce cas."
            }
          }
        }
      },
      {
        word_key: "mte",
        position: 15,
        sense_chosen: "bienfait/jouissance",
        analysis_axes: {
          sense_chosen: "bienfait/jouissance",
          concept_chosen: "Bienfait/Jouissance",
          concepts: {
            "Bienfait/Jouissance": {
              status: "retenu",
              senses: ["procurer les biens necessaires", "pourvoir aux besoins", "mut'a = provision de consolation", "matta'a = pourvoi", "mat'a = ce dont on profite"],
              proof_ctx: "La racine m-t-' (mim-ta-'ayn) signifie la jouissance, le bienfait et ce dont on tire profit. Le Lane's donne : matta'a = pourvoir de biens, procurer la jouissance — mata' = bien, provision, ce dont on profite. Matti'uhunna = pourvoyez-les (imperatif 2MP + suffixe feminin). Al-mut'a al-talaq (provision de consolation lors du divorce) est un terme juridique derive de cette racine.",
              axe1_verset: "Wa matti'uhunna (et pourvoyez a leurs besoins/dotez-les) : l'imperatif matti'uhunna est une obligation morale explicite. La matta' (provision/consolation) est le don que le mari fait a la femme repudiee avant consommation et sans dot fixee. Ce don compense l'absence de mahr dans le cas du tafwid. Sa nature et son montant sont calibres par le qadarihi (selon les moyens) et le ma'ruf (convenablement).",
              axe2_voisins: "La racine mte dans la section matrimoniale designe les provisions et les bienfaits dus a la femme : v.236 (matti'uhunna = pourvoyez-les), v.241 (matta'un bi al-ma'rufi = provision selon le bien reconnu). La mat'a (provision de consolation) est une obligation permanente dans les situations de divorce ou de rupture. Elle exprime la responsabilite du mari envers la femme qu'il a acceptee puis repudiee.",
              axe3_sourate: "La racine mte dans al-Baqarah designe toujours une provision ou jouissance dans un contexte de relation sociale ou contractuelle. En 2:36 (mata'un ila hin = provision pour un temps), en 2:102 (ma yunfa'uhum = ce dont ils profitent). La matta' comme provision de consolation post-divorce est specifique a la section matrimoniale.",
              axe4_coherence: "La racine mte apparait environ 70 fois dans le Coran. Le sens de jouissance/provision est constant. La matta' (ou mut'a) est ce dont on jouit et ce dont on beneficie — la provision qui assure la jouissance immediate. Dans le contexte du divorce, la matta' est le soutien materiel qui permet a la femme de traverser la transition.",
              axe5_frequence: "L'obligation de matta'uhunna (pourvoir aux besoins des femmes repudiees) a genere la doctrine de la mut'a al-talaq (provision de consolation). Cette provision est differente du mahr (dot) et de la nafaqa (pension alimentaire pendant l'idda). Elle est specifique au cas du divorce avant consommation sans dot fixee, et exprime la responsabilite morale du mari. Les juristes ont debattu de son caractere obligatoire ou recommande, ainsi que de son montant."
            }
          }
        }
      },
      {
        word_key: "wse",
        position: 17,
        sense_chosen: "capacite/largeur",
        analysis_axes: {
          sense_chosen: "capacite/largeur",
          concept_chosen: "Capacite/Largeur",
          concepts: {
            "Capacite/Largeur": {
              status: "retenu",
              senses: ["ce qu'on peut faire", "possibilite", "largesse", "al-musi' = le nanti/l'aise", "wus' = capacite"],
              proof_ctx: "La racine w-s-' (waw-sin-'ayn) signifie la largeur et la capacite. Le Lane's donne : wasi'a = etre large, avoir de la capacite/largesse — wus' = capacite, possibilite, etendue — al-musi' = celui qui a de la largesse, le nanti. Al-musi'i = le nanti/l'aise (genitif). La wasa'a est la capacite comme extension — ce qui peut etre contenu, ce que l'on peut faire.",
              axe1_verset: "'Ala al-musi'i qadaruhu (sur le nanti/l'aise selon sa mesure) : al-musi' est celui qui a de la wasa'a (largesse/capacite) — l'aise materiellement. Sa contribution (qadaruhu = sa mesure) est proportionnelle a cette aise. Le principe de proportionnalite dit : chacun donne selon ses moyens, l'aise donne largement, le necessiteux donne modestement.",
              axe2_voisins: "Le contraste entre al-musi' (le nanti, de wse = largesse) et al-muqtir (le necessiteux, de qtr = restriction) est le principe de proportionnalite. Les deux forment une paire complementaire : celui qui a de la wasa'a (capacite/largesse) et celui qui est dans l'iqtar (restriction/necessite). Chacun donne selon sa qadar (mesure).",
              axe3_sourate: "La racine wse dans al-Baqarah exprime la capacite et l'etendue : v.247 (wasi'atun = vaste connaissance, de Dieu), v.255 (wasi'a kursiyyuhu al-samawati wal-arda = Son trone s'etend sur les cieux et la terre), v.286 (la yukallifu Allahu nafsan illa wus'aha = Dieu n'impose a une ame que ce qu'elle peut). La capacite (wus') est a la fois humaine (ce qu'on peut faire) et divine (la vaste capacite divine).",
              axe4_coherence: "La racine wse apparait environ 30 fois dans le Coran. Le sens de largeur/capacite est constant. Al-musi' (le nanti) est celui dont la wasa'a (capacite/largesse) est grande. Le principe 'sur chacun selon sa capacite (wus')' est un principe coranique fondamental en 2:286 — ce verset l'applique au contexte du matta' post-divorce.",
              axe5_frequence: "Le principe de proportionnalite (al-musi' selon sa qadar, al-muqtir selon sa qadar) dans ce verset est une application concrète du principe general de 2:286 (la yukallifu Allahu nafsan illa wus'aha = Dieu n'impose a une ame que sa capacite). La loi islamique du divorce tient compte des capacites — nul n'est astreint a plus que sa wasa'a. Ce principe de proportionnalite est equitable et realiste."
            }
          }
        }
      },
      {
        word_key: "qdr",
        position: 19,
        sense_chosen: "mesure/capacite",
        analysis_axes: {
          sense_chosen: "mesure/capacite",
          concept_chosen: "Mesure/Capacite",
          concepts: {
            "Mesure/Capacite": {
              status: "retenu",
              senses: ["mesure", "etendue", "capacite", "proportion", "qadaruhu = sa mesure propre"],
              proof_ctx: "La racine q-d-r (qaf-dal-ra) signifie la mesure et la capacite. Le Lane's donne : qadara = mesurer, avoir la capacite — qadar = la mesure, la proportion, la capacite exacte. Qadaruhu = sa mesure (nominatif + suffixe 3MS). La qadar est la mesure exacte de chaque chose — ni plus ni moins. Qadaruhu est le sujet grammatical : 'sa mesure [est due]' = c'est sa mesure qui s'impose.",
              axe1_verset: "Al-musi'i qadaruhu wa al-muqtiri qadaruhu (le nanti : sa mesure / le necessiteux : sa mesure) : qadaruhu est repetee deux fois pour les deux profils. Cette repetition souligne que la mesure (qadar) est propre a chacun — subjective, proportionnelle a la situation de chacun. Al-musi' a une qadar large (il peut donner plus) ; al-muqtir a une qadar restreinte (il ne peut donner que peu).",
              axe2_voisins: "La double occurrence de qadaruhu dans ce verset (une fois pour al-musi', une fois pour al-muqtir) est une figure de miroir : chaque profil a sa qadar propre. La structure syntaxique ('ala X qadaruhu / wa 'ala Y qadaruhu) establit le parallelisme et l'egalite du principe : le meme principe s'applique aux deux, adapte a la situation de chacun.",
              axe3_sourate: "La racine qdr dans al-Baqarah a deux registres principaux : la toute-puissance divine (qadir = tout-puissant, al-Qadir = Celui qui mesure et determine, v.20, 106, 148, etc.) et la capacite humaine (qadar = mesure/capacite humaine, v.236, 237). Dans ce verset, qadaruhu est dans le registre humain : la mesure de l'homme, sa capacite propre.",
              axe4_coherence: "La racine qdr apparait environ 130 fois dans le Coran. Le sens de mesure/determination/capacite est constant. Allah est al-Qadir (Celui qui mesure et determine) — la toute-puissance divine. Pour les humains, la qadar est la capacite et la mesure de chacun. Le verset applique le concept de qadar (mesure proportionnelle) au devoir du matta' post-divorce.",
              axe5_frequence: "Le principe qadaruhu (selon sa mesure) dans ce verset est un principe d'equite sociale : les obligations sont proportionnelles aux moyens. Ce principe traverse la section matrimoniale (v.233 sur la nafaqa : 'ala al-mawludi lahu rizquhunna wa kiswatuhunna bi al-ma'rufi = sur le pere leur subsistance et leur vetement convenablement). La qudra (capacite) est le critere de l'obligation — ce qu'on peut, pas ce qu'on voudrait idealement."
            }
          }
        }
      },
      {
        word_key: "erf",
        position: 23,
        sense_chosen: "convention/bienfait",
        analysis_axes: {
          sense_chosen: "convention/bienfait",
          concept_chosen: "Convention/Bienfait",
          concepts: {
            "Bienseance/Reconnu": {
              status: "non-retenu",
              senses: ["bienseance", "usage social"],
              proof_ctx: "Interpretation axee sur la dimension sociale du ma'ruf sans intégrer la dimension de reconnaissance positive.",
              axe1_verset: "N/A",
              axe2_voisins: "N/A",
              axe3_sourate: "N/A",
              axe4_coherence: "N/A",
              axe5_frequence: "N/A"
            },
            "Convention/Bienfait": {
              status: "retenu",
              senses: ["ce qui est reconnu convenable", "bienseance sociale", "usage etabli", "bienfait reconnu", "ma'ruf = l'usage bienveillant"],
              proof_ctx: "La racine '-r-f ('ayn-ra-fa) signifie la connaissance et ce qui est socialement reconnu. Le Lane's donne : 'arafa = reconnaitre, connaitre — ma'ruf = ce qui est connu/reconnu comme bien, l'usage etabli, la bienveillance sociale. Bi al-ma'rufi = selon le bien reconnu/convenablement. Le ma'ruf est le standard social de la bienveillance reconnue dans la communaute.",
              axe1_verset: "Mata'an bi al-ma'rufi (une provision selon le bien reconnu) : le ma'ruf qualifie la matta' (provision). La provision doit etre 'ma'rufa' = reconnue comme convenable dans la communaute. Ni trop peu (lesine), ni trop (ostentation) — le ma'ruf est le juste milieu socialement accepte. C'est le standard de qualite de la provision.",
              axe2_voisins: "Le ma'ruf est omnipresent dans la section matrimoniale de al-Baqarah : v.228, 229, 231, 232, 233, 234, 235, 236, 237, 241. Dans chaque verset, bi al-ma'rufi calibre la qualite des actes dans la sphere matrimoniale. Ici (v.236), il calibre la provision (matta') post-divorce : la matta' doit etre faite bi al-ma'rufi.",
              axe3_sourate: "La racine erf (ma'ruf) est le standard normatif omnipresent de la section matrimoniale. Le ma'ruf designe ce qui est reconnu comme bien par la communaute — un standard social et moral. Son antonyme est le munkar (ce qui est rejete comme mauvais). Le ma'ruf est le critere de la bienveillance sociale dans toutes les obligations matrimoniales.",
              axe4_coherence: "La racine erf apparait environ 90 fois dans le Coran. Le sens de ce qui est reconnu/connu comme bien est constant. Le ma'ruf est toujours un standard communautaire — ce qui est reconnu comme bienveillant et acceptable dans la communaute croyante. Il n'est pas rigide mais contextuel : ce que la communaute reconnait comme convenable selon les situations.",
              axe5_frequence: "La recurrence de bi al-ma'rufi (selon le bien reconnu/convenablement) dans la section matrimoniale etablit que le ma'ruf est le principe directeur des obligations matrimoniales. Il ne fixe pas de montants ou de formes precises mais etablit un standard de qualite : les obligations (provision, nafaqa, entretien) doivent etre accomplies de maniere socialement reconnue comme bienveillante. C'est un critere d'equite flexible adapte aux contextes."
            }
          }
        }
      },
      {
        word_key: "hqq",
        position: 25,
        sense_chosen: "droit/obligation",
        analysis_axes: {
          sense_chosen: "droit/obligation",
          concept_chosen: "Droit/Obligation",
          concepts: {
            "Droit/Obligation": {
              status: "retenu",
              senses: ["droit etabli", "ce qui est du", "obligation", "verite incontestable", "haqq = droit/verite"],
              proof_ctx: "La racine h-q-q (ha-qaf-qaf) signifie ce qui est etabli, vrai et juste. Le Lane's donne : haqqa = etre etabli, etre vrai, s'imposer — haqq = verite, droit, obligation, ce qui est du. Haqqan 'ala al-muhsinina = une obligation sur les bienfaisants (accusatif de haqqan en tant qu'attribut circonstanciel). Le haqq est ce qui est incontestable — la verite comme realite et l'obligation comme devoir.",
              axe1_verset: "Haqqan 'ala al-muhsinina (une obligation/un droit sur les bienfaisants) : haqqan est un accusatif de confirmation — il dit que la provision (matta') est un haqq (obligation veritable) qui pese sur ('ala) les muhsinina (les bienfaisants). La structure 'haqq 'ala X' exprime une obligation qui s'impose a X — un devoir incontournable.",
              axe2_voisins: "La formule haqqan 'ala al-muhsinina apparait ici (v.236) et sera reprise en v.241 (wa lil-mutallaqati mata'un bi al-ma'rufi haqqan 'ala al-muttaqina = une provision selon le bien reconnu, obligation sur les pieux). La formule haqqan + 'ala + groupe nominal etablit une obligation personnelle sur un groupe d'agents moraux.",
              axe3_sourate: "La racine hqq est centrale dans al-Baqarah : le haqq comme verite divine (v.91, 119, etc.) et le haqq comme droit humain/obligation (v.236, 241). Dans le contexte matrimonial, haqqan 'ala etablit les droits comme obligations — ce que quelqu'un a le droit de recevoir est une obligation pour celui qui doit le donner.",
              axe4_coherence: "La racine hqq apparait environ 250 fois dans le Coran. Le sens de ce qui est etabli/vrai/juste est constant. Le haqq couvre : la verite divine (al-Haqq = la Verite), le droit subjectif (haqq al-mar'a = le droit de la femme), et l'obligation (haqqan 'ala X = obligation sur X). Dans ce verset, haqqan est dans le registre de l'obligation incontestable.",
              axe5_frequence: "La formule haqqan 'ala al-muhsinina (obligation sur les bienfaisants) est remarquable : elle adresse l'obligation de matta' non pas a 'les maris' mais aux 'muhsinina' (les bienfaisants, de hsn = faire le bien). Cela transforme une obligation juridique en invitation morale : l'homme qui se comporte en muhsin (bienfaisant) honore cette obligation. La cloture par muhsinina place le respect de cette obligation dans le cadre de la vertu, pas seulement de la loi."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[236];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab, full_translation: data.full_translation,
    translation_explanation: data.translation_explanation, segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V236)');
  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id, word_key: word.word_key,
      position: word.position, sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) {
      if (vwaErr.code === '23505') console.log('  VWA already exists (skip): ' + word.word_key + ' pos=' + word.position);
      else console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    } else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('V236 TERMINE');
}
main().catch(console.error);
