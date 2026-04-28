const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 229
// verse_id=236, analysis_id=597
// "at-talaqu marratani
//  fa imsaakun bi-ma'rufin aw tasriihun bi-ihsanin
//  wa-la yahillu lakum an ta'khudhu mimma ataytumuhunna shay'an
//  illa an yakhafa alla yuqima hududa Allahi
//  fa in khiftum alla yuqima hududa Allahi
//  fa-la junaha 'alayhima fima iftadat bihi
//  tilka hududa Allahi fa-la ta'tadduha
//  wa-man yata'adda hududa Allahi fa ula'ika hum az-zalimuna"
// =====================================================

const verseData = {
  229: {
    verse_id: 236,
    analysis_id: 597,
    translation_arab: "Le divorce [est permis] deux fois. Ensuite, soit une retention equitable, soit une liberation bienveillante. Et il ne vous est pas licite de reprendre quoi que ce soit de ce que vous leur avez donne, sauf si tous deux craignent de ne pas etablir les limites de Dieu. Si vous craignez qu'ils n'etablissent pas les limites de Dieu, il n'y a alors aucune inclinaison [vers la faute] sur eux dans ce qu'elle aura verse comme rancon. Voila les limites de Dieu — ne les transgressez pas. Ceux qui transgressent les limites de Dieu, ce sont les injustes.",
    full_translation: "Le divorce est [permis] deux fois, après quoi c'est soit une rétention équitable, soit une libération bienveillante. Et il ne vous est pas licite de reprendre quoi que ce soit de ce que vous leur avez donné, à moins que tous deux ne craignent de ne pas respecter les lois d'Allah. Si vous craignez qu'ils ne respectent pas les lois d'Allah, il n'y a alors aucun péché pour eux dans ce qu'elle lui aura versé comme rançon. Voilà les lois d'Allah, ne les transgressez donc pas. Ceux qui transgressent les lois d'Allah, ce sont les injustes.",
    translation_explanation: `§DEMARCHE§
Le verset 229 est l'un des versets les plus denses de la legislation matrimoniale coranique. Il traite du divorce revocable : deux occurrences (marratani) après lesquelles le mari doit choisir entre retenir (imsakun) de manière equitable ou liberer (tasrihun) de manière bienveillante. Il introduit ensuite la notion de khul' (divorce initie par la femme contre versement d'une rancon) et encadre le tout par le concept de hudud Allah (limites de Dieu) que nul ne doit transgresser ('adw).

Le nom **at-talaqu** est le sujet du verset, de la racine t-l-q. Le Lane's donne : desserrer, relacher, liberer, dissoudre. At-talaq est la dissolution du lien conjugal — la liberation de la femme de l'obligation du mariage. C'est un terme technique du droit islamique.

Le nom **marratani** est le duel de marra (une fois/passage), de la racine m-r-r. Le duel signifie « deux fois » ou « a deux reprises ». Le sens de « passage » ou « occurrence » est au coeur : marratani = deux occurrences du talaq. Chaque occurrence est un passage qui peut etre repris (talaq revocable).

Le nom **imsaakun** est un madar de la racine m-s-k (Form IV). Le Lane's donne : tenir, retenir, garder, empecher de partir. L'imsakun est la retention — le fait de retenir la femme dans le mariage apres un premier ou second talaq.

Le nom **bil-ma'rufin** est construit sur la racine '-r-f (Form II, madar = ma'ruf). Le Lane's donne : ce qui est connu, reconnu, approuve par l'usage, convenable. Le ma'ruf est l'usage connu et approuve — la norme sociale admise. « Bil-ma'ruf » = selon l'usage reconnu/equitable.

Le nom **tasrihun** est un madar de la racine s-r-h (Form II). Le Lane's donne : envoyer librement, lacher, liberer, remettre en liberte. Le tasrih est la liberation complete — le fait de laisser partir sans entrave. Form II intensif/complet : une liberation deliberee et definitive.

Le nom **bi-ihsanin** est construit sur la racine h-s-n. Le Lane's donne : excellence, beaute, bienfaisance, bienveillance. L'ihsan est l'excellence dans l'action — faire le bien de la maniere la plus belle. « Bi-ihsanin » = avec excellence/bienveillance.

Le verbe **yahillu** est un inaccompli 3MS de la racine h-l-l. Le Lane's donne : etre licite, permis, legal ; se dissoudre, se delier. La halal/hill est la licite — ce qui est permis par la loi divine. « La yahillu lakum » = il ne vous est pas licite.

Le verbe **ta'khudhu** est un inaccompli 2MP de la racine '-kh-dh. Le Lane's donne : prendre, saisir, s'emparer de. « Ta'khudhu mimma ataytumuhunna » = reprendre de ce que vous leur avez donne.

Le nom **shay'an** est un accusatif indefini de la racine sh-y-'. Le Lane's donne : chose, quelque chose, un etre. « Shay'an » = quoi que ce soit — tout objet ou bien.

Le verbe **yakhafa** est un inaccompli dual subjonctif de la racine kh-w-f. Le Lane's donne : craindre, avoir peur. « Yakhafa alla yuqima » = craindre de ne pas etablir. Le dual renvoie aux deux epoux.

Le verbe **yuqima** est un inaccompli dual subjonctif de la racine q-w-m (Form IV, aqama). Le Lane's donne : dresser, etablir, eriger verticalement, maintenir. L'iqama est le fait d'eriger en verticalite — etablir, maintenir debout. « Yuqima hududa Allahi » = etablir/maintenir les limites de Dieu.

Le nom **hududa** est un accusatif pluriel de la racine h-d-d. Le Lane's donne : limite, frontiere, bord, borne. La hadd (pluriel hudud) est la limite fixee — la frontiere qu'on ne doit pas depasser. « Hududa Allahi » = les limites fixees par Dieu.

Le nom **junaha** est un accusatif de la racine j-n-h. Le Lane's donne : inclination vers ce qui est blamable, penchant vers la faute, peche. « La junaha 'alayhima » = pas d'inclinaison [vers la faute] sur eux deux.

Le verbe **iftadat** est un accompli 3FS de la racine f-d-y (Form VIII). Le Lane's donne : se racheter, payer une rancon, se liberer par le paiement. L'iftida' est la rancon — la liberation de soi-meme par paiement. C'est le principe du khul'.

Le verbe **ta'taduha** est un inaccompli 2MP de la racine '-d-w. Le Lane's donne : transgresser, depasser les limites, commettre un exces. « La ta'taduha » = ne les transgressez pas.

Le verbe **yata'adda** est un inaccompli 3MS de la racine '-d-w (Form V). Le Lane's donne : transgresser, aller au-dela de. « Man yata'adda hududa Allahi » = quiconque transgresse les limites de Dieu.

Le nom **az-zalimuna** est un participe actif pluriel de la racine z-l-m. Le Lane's donne : injuste, oppresseur, celui qui met les choses a la mauvaise place. Az-zalim est l'injuste — celui qui opprime et transgresse.

§JUSTIFICATION§
**deux fois** — marratani est le duel de marra (occurrence/passage). La traduction « deux fois » rend le duel. Le sens de passage/occurrence est pertinent : deux occurrences du talaq revocable, deux passages par lesquels le lien peut etre renoue.

**retention equitable** — imsaakun bi-ma'ruf. L'imsakun (racine m-s-k = saisie/retention) est le fait de retenir — garder la femme dans le mariage. Le ma'ruf (racine '-r-f = ce qui est connu/reconnu) est la norme equitable. Hamidullah traduit « rétention équitable » — la retention par l'usage reconnu.

**liberation bienveillante** — tasrihun bi-ihsanin. Le tasrih (racine s-r-h = liberer/renvoyer) est la liberation complete. L'ihsan (racine h-s-n = excellence/bienveillance) est la maniere excellente. La liberation doit etre faite dans l'excellence — sans mauvaise volonte ni retention.

**il ne vous est pas licite de reprendre** — la yahillu lakum. La racine h-l-l (licite/permission) est niee — ce qui etait permis (la dot) ne l'est plus des lors qu'on veut la reprendre.

**quoi que ce soit** — shay'an. Le mot shay' (chose/etre) est utilisé dans sa forme la plus generale — tout bien, quel qu'il soit, ne peut etre repris de la femme.

**sauf s'ils craignent** — illa an yakhafa. La crainte (kh-w-f) est le seul motif legitime du khul'. La double condition (les deux epoux craignent de ne pas maintenir les limites divines) protege contre l'abus.

**etablir les limites de Dieu** — yuqima hududa Allahi. Iqama (Form IV de q-w-m = eriger en verticalite) est le fait de dresser, maintenir debout. Les hudud (limites) de Dieu sont ce qui doit etre maintenu droit/debout. L'image est forte : les limites divines sont comme des poteaux qu'on doit eriger et maintenir.

**pas d'inclinaison vers la faute sur eux** — la junaha 'alayhima. Junah (racine j-n-h = inclination, aile) designe l'inclinaison vers ce qui est blamable. « La junaha » = pas d'inclinaison vers la faute — le geste est legitime, aucune faute ne pese sur les deux.

**ce qu'elle aura verse comme rancon** — fima iftadat bihi. Iftadat (racine f-d-y Form VIII) est le rachat de soi-meme — la femme paie pour se liberer du mariage (khul'). C'est la rancon de la liberte.

**ne transgressez pas** — la ta'taduha. La racine '-d-w (transgression/exces) est le terme technique pour depasser les limites. Ne pas transgresser les hudud = ne pas aller au-dela de ce qui est fixe.

**les injustes** — az-zalimuna. La racine z-l-m (injustice/obscurite) designe ceux qui mettent les choses a la mauvaise place — l'injustice comme displacement fondamental.

§CRITIQUE§
Hamidullah traduit «ḥudūda Allāhi» par «lois d'Allah» trois fois dans ce verset. Le texte dit ḥudūd (pluriel de ḥadd = limite/frontière), pas qawanin ou ahkam (lois). La ḥadd est une frontière fixée — une limite spatiale ou normative qu'on ne doit pas dépasser. La traduction «lois» est fonctionnellement correcte mais perd la dimension de frontière physique et métaphorique. Les «limites de Dieu» évoquent des bornes qu'on ne franchit pas, des lignes tracées dans la réalité normative — ce que «lois» n'exprime pas.

Hamidullah traduit «junāḥa» par «péché». Le Lane's donne junāḥ comme «inclination vers ce qui est blâmable» — le penchant vers la faute, pas la faute elle-même. «Lā junāḥa» = pas d'inclinaison vers la faute (donc l'acte est pleinement légitime). La traduction «péché» perd la nuance philosophique : le junāḥ est un penchant/inclinaison, pas encore le péché accompli (ithm). Dire «pas de péché» est plus catégorique que le texte, qui dit «pas de penchant vers la faute».

Le verset traite du khul' (divorce à l'initiative de la femme contre compensation) — un mécanisme juridique sophistiqué qui protège la femme dans un contexte patriarcal. La rancon (iftida') qu'elle verse lui permet de se libérer du lien conjugal sans l'accord du mari. Ce mécanisme d'équilibre est au cœur du verset : si les deux craignent de ne pas maintenir les limites divines (dysfontionnement conjugal grave), alors la femme peut se racheter et aucune inclinaison vers la faute ne pèse sur eux.`,
    segments: [
      { fr: "Le divorce [est permis] deux fois", pos: "nom", phon: "at-talaqu marratani", arabic: "ٱلطَّلَـٰقُ مَرَّتَانِ", word_key: "mrr", is_particle: false, sense_retenu: "occurrence/passage", position: 0 },
      { fr: "soit retenir equitablement", pos: "nom", phon: "fa imsaakun bi-ma'rufin", arabic: "فَإِمْسَاكٌۢ بِمَعْرُوفٍ", word_key: "msk", is_particle: false, sense_retenu: "retention/saisie", position: 1 },
      { fr: "selon l'usage reconnu", pos: "nom", phon: "bil-ma'rufin", arabic: "بِمَعْرُوفٍ", word_key: "erf", is_particle: false, sense_retenu: "connaissance/usage reconnu", position: 2 },
      { fr: "soit liberer bienveillamment", pos: "nom", phon: "aw tasriihun", arabic: "أَوْ تَسْرِيحٌۢ", word_key: "srh", is_particle: false, sense_retenu: "liberation/renvoi", position: 3 },
      { fr: "avec bienveillance", pos: "nom", phon: "bi-ihsanin", arabic: "بِإِحْسَانٍ", word_key: "hsn", is_particle: false, sense_retenu: "excellence/bienveillance", position: 4 },
      { fr: "il ne vous est pas licite de reprendre", pos: "verbe", phon: "wa-la yahillu lakum an ta'khudhu", arabic: "وَلَا يَحِلُّ لَكُمْ أَن تَأْخُذُوا۟", word_key: "hll", is_particle: false, sense_retenu: "licite/permission", position: 5 },
      { fr: "quoi que ce soit de ce que vous leur avez donne", pos: "nom", phon: "mimma ataytumuhunna shay'an", arabic: "مِمَّآ ءَاتَيْتُمُوهُنَّ شَيْـًٔا", word_key: "shy", is_particle: false, sense_retenu: "chose/etre", position: 6 },
      { fr: "sauf s'ils craignent de ne pas etablir les limites de Dieu", pos: "verbe", phon: "illa an yakhafa alla yuqima hududa Allahi", arabic: "إِلَّآ أَن يَخَافَآ أَلَّا يُقِيمَا حُدُودَ ٱللَّهِ", word_key: "khwf", is_particle: false, sense_retenu: "crainte/peur", position: 7 },
      { fr: "etablir les limites", pos: "verbe", phon: "yuqima hududa", arabic: "يُقِيمَا حُدُودَ", word_key: "qwm", is_particle: false, sense_retenu: "verticalite/droiture", position: 8 },
      { fr: "les limites de Dieu", pos: "nom", phon: "hududa Allahi", arabic: "حُدُودَ ٱللَّهِ", word_key: "hdd", is_particle: false, sense_retenu: "limite/frontiere", position: 9 },
      { fr: "pas d'inclinaison [vers la faute] sur eux", pos: "nom", phon: "fa-la junaha 'alayhima", arabic: "فَلَا جُنَاحَ عَلَيْهِمَا", word_key: "jnh", is_particle: false, sense_retenu: "inclinaison/penchant", position: 10 },
      { fr: "dans ce qu'elle aura verse comme rancon", pos: "verbe", phon: "fima iftadat bihi", arabic: "فِيمَا ٱفْتَدَتْ بِهِ", word_key: "fdy", is_particle: false, sense_retenu: "rancon/sacrifice", position: 11 },
      { fr: "ne transgressez pas les limites de Dieu", pos: "verbe", phon: "fa-la ta'taduha", arabic: "فَلَا تَعْتَدُوهَا", word_key: "edw", is_particle: false, sense_retenu: "transgression/exces", position: 12 },
      { fr: "ceux qui transgressent les limites de Dieu sont les injustes", pos: "nom", phon: "wa-man yata'adda hududa Allahi fa ula'ika hum az-zalimuna", arabic: "وَمَن يَتَعَدَّ حُدُودَ ٱللَّهِ فَأُو۟لَـٰٓئِكَ هُمُ ٱلظَّـٰلِمُونَ", word_key: "zlm", is_particle: false, sense_retenu: "injustice/oppression", position: 13 }
    ],
    vwa: [
      {
        word_key: "mrr",
        position: 0,
        sense_chosen: "occurrence/passage",
        analysis_axes: {
          sense_chosen: "occurrence/passage",
          concept_chosen: "Passage/Traversée",
          concepts: {
            "Passage/Traversée": {
              status: "retenu",
              senses: ["passage", "fois", "occurrence", "traversee", "repetition"],
              proof_ctx: "Le nom marratani est le duel de marra (une fois, un passage), de la racine m-r-r. Le Lane's donne pour marra : une fois, une occurrence, un passage par un moment ou un etat. Le duel marratani = deux fois, deux occurrences. La racine m-r-r designe fondamentalement le passage — traverser, passer par un point. Marra = une instance de passage. Le divorce (talaq) est compte en occurrences/passages : marratani = deux passages par cet etat.",
              axe1_verset: "Marratani (deux fois/occurrences) quantifie les occurrences du talaq revocable. Chaque talaq est un passage — une traversee de l'etat de divorce qui peut etre annulee. Deux passages sont permis avant que le divorce ne devienne definitif. L'image du passage est coherente : le couple traverse deux fois l'etat de separation avant que la porte ne se ferme definitivement.",
              axe2_voisins: "Le verset 228 (precedent) traitait de la 'idda (periode d'attente) des femmes divorcees. Le verset 229 quantifie le nombre de divorces revocables (marratani). La sequence logique est : 'idda (attente) → marratani (deux occurrences revocables) → choix final.",
              axe3_sourate: "La racine m-r-r est presente dans al-Baqarah. Le passage (murur) est un motif recurrent — le temps passe, les etats se traversent. Ici marratani quantifie les passages autorises dans la relation conjugale.",
              axe4_coherence: "La racine m-r-r apparait une trentaine de fois dans le Coran. Le sens de base (passer, traverser, une fois) est stable. Marratani (duel) est utilise pour compter des occurrences — deux passages par un etat.",
              axe5_frequence: "Pour le khalifa, la limitation des occurrences (marratani) est un principe de gouvernance du droit matrimonial. Le talaq n'est pas illimite — deux passages revocables, puis la decision est definitive. Ce cadrage numerique empeche l'abus de la revocabilite."
            }
          }
        }
      },
      {
        word_key: "msk",
        position: 1,
        sense_chosen: "retention/saisie",
        analysis_axes: {
          sense_chosen: "retention/saisie",
          concept_chosen: "Saisie/Rétention",
          concepts: {
            "Saisie/Rétention": {
              status: "retenu",
              senses: ["retenir", "tenir", "garder", "retention", "empecher de partir"],
              proof_ctx: "Le nom imsaakun est un madar de la racine m-s-k (Form IV, amsaka). Le Lane's donne : tenir, retenir, garder, saisir, empecher de se separer. La Form IV causative indique l'action de faire tenir — retenir activement. L'imsakun est la retention deliberee : le mari retient la femme dans le mariage apres avoir prononce un premier ou second talaq. C'est un acte actif de maintien du lien.",
              axe1_verset: "L'imsaakun (retention) est le premier des deux choix apres le talaq : soit retenir (imsakun) soit liberer (tasrih). La retention doit etre bi-ma'ruf (selon l'usage reconnu/equitable) — une retention injuste ou abusive n'est pas permise. La racine m-s-k (saisir/tenir) exprime le maintien du lien conjugal.",
              axe2_voisins: "L'alternative tasrihun (liberation, racine s-r-h) est le second choix. La paire imsakun/tasrihun forme une opposition binaire : tenir/lacher, retenir/liberer. Les deux racines expriment des gestes physiques (saisir vs relacher) appliques metaphoriquement au lien conjugal.",
              axe3_sourate: "La racine m-s-k est presente dans al-Baqarah. En 2:231 et 2:232, la meme racine (amsaku = vous avez retenu) est utilisee pour la meme realite juridique. La retention (imsakun) est un terme technique du droit du mariage.",
              axe4_coherence: "La racine m-s-k apparait une vingtaine de fois dans le Coran. Le sens de saisie/retention est constant. En contexte conjugal, l'imsakun est toujours le maintien du lien par le mari.",
              axe5_frequence: "Pour le khalifa, la retention (imsakun) doit etre bi-ma'ruf — selon l'usage equitable. Une retention abusive (pour nuire, pour preserver des biens) est explicitement interdite dans les versets suivants. La juste retention est un acte de bonne volonte, pas de domination."
            }
          }
        }
      },
      {
        word_key: "erf",
        position: 2,
        sense_chosen: "connaissance/usage reconnu",
        analysis_axes: {
          sense_chosen: "connaissance/usage reconnu",
          concept_chosen: "Connaissance/Reconnaissance",
          concepts: {
            "Connaissance/Reconnaissance": {
              status: "retenu",
              senses: ["connaitre", "reconnaitre", "ce qui est connu", "usage reconnu", "norme approuvee"],
              proof_ctx: "Le nom ma'rufin est un participe passif de la racine '-r-f (Form II, ma'arafa). Le Lane's donne pour ma'ruf : ce qui est connu, reconnu, approuve ; l'usage etabli et admis ; ce qui est conforme aux bonnes moeurs. Le ma'ruf est fondamentalement ce qui est connu comme bon — la norme sociale reconnue par tous comme equitable. « Bil-ma'ruf » = selon ce qui est connu comme bon/equitable.",
              axe1_verset: "Le ma'ruf (ce qui est reconnu comme bon) qualifie la retention conjugale : imsaakun bi-ma'ruf = retenir selon la norme equitable connue. Le ma'ruf empeche l'abus : on ne retient pas la femme selon sa propre volonte capricieuse, mais selon la norme admise de tous.",
              axe2_voisins: "Le ma'ruf est un terme recurrent dans les versets du divorce (2:228, 229, 231, 232, 233, 234, 236, 240). Il definit a chaque fois la norme equitable applicable. C'est le critere de l'usage reconnu qui garantit l'equite.",
              axe3_sourate: "La racine '-r-f est tres presente dans al-Baqarah. Le ma'ruf (l'usage reconnu) est l'une des notions cles de la legislation sociale — ce qui est normatif dans la societe croyante.",
              axe4_coherence: "La racine '-r-f apparait plus de 500 fois dans le Coran sous diverses formes. Le ma'ruf est une des notions ethiques et juridiques les plus importantes — il designe la norme communautaire positive (par opposition au munkar = ce qui est repugnant).",
              axe5_frequence: "Pour le khalifa, le ma'ruf est le critere de l'action equitable. Agir bil-ma'ruf = agir selon la norme reconnue comme juste. Le khalifa legifere et juge selon le ma'ruf — la norme connue et admise de la communaute."
            }
          }
        }
      },
      {
        word_key: "srh",
        position: 3,
        sense_chosen: "liberation/renvoi",
        analysis_axes: {
          sense_chosen: "liberation/renvoi",
          concept_chosen: "Libération/Renvoi",
          concepts: {
            "Libération/Renvoi": {
              status: "retenu",
              senses: ["liberer", "renvoyer", "laisser partir", "liberation", "renvoi en liberte"],
              proof_ctx: "Le nom tasrihun est un madar de la racine s-r-h (Form II, sarraha). Le Lane's donne : envoyer librement, lacher, mettre en liberte, renvoyer sans contrainte. La Form II intensif/complet : une liberation deliberee et totale. Le tasrih est la liberation complete — laisser aller la femme sans l'entraver, sans la rappeler. C'est le divorce definitif apres le second talaq revocable.",
              axe1_verset: "Le tasrihun (liberation) est le second choix apres le talaq : soit retenir (imsakun) soit liberer (tasrih). La liberation doit etre bi-ihsanin (avec excellence/bienveillance) — une liberation faite dans la dignite, sans violence ni retention abusive. La racine s-r-h (lacher, mettre en liberte) exprime la rupture complete du lien.",
              axe2_voisins: "L'alternative imsaakun (retention, racine m-s-k) est le premier choix. La paire imsakun/tasrihun = tenir/liberer. Le verset suivant (2:230) traite de la consequence du tasrih definitif : la femme ne peut revenir a son premier mari qu'apres avoir epouse et ete divorcee d'un autre.",
              axe3_sourate: "La racine s-r-h est presente dans al-Baqarah en 2:229 et 2:231. Le tasrih est le terme technique pour la liberation finale de la femme dans le droit du mariage.",
              axe4_coherence: "La racine s-r-h apparait une dizaine de fois dans le Coran. Le sens de liberer/lacher est constant — dans un contexte conjugal, le tasrih est la liberation definitive.",
              axe5_frequence: "Pour le khalifa, le tasrih bi-ihsanin (liberation avec excellence) est un modele d'equite dans la separation. Le droit de liberer (talaq) s'accompagne de l'obligation de liberer dignement — avec l'ihsan (excellence/bienveillance) comme norme."
            }
          }
        }
      },
      {
        word_key: "hsn",
        position: 4,
        sense_chosen: "excellence/bienveillance",
        analysis_axes: {
          sense_chosen: "excellence/bienveillance",
          concept_chosen: "Excellence/Bienveillance",
          concepts: {
            "Excellence/Bienveillance": {
              status: "retenu",
              senses: ["excellence", "bienveillance", "beaute", "bienfaisance", "ihsan"],
              proof_ctx: "Le nom ihsanin est un madar de la racine h-s-n (Form IV, ahsana). Le Lane's donne : excellence, beaute, bonte, bienfaisance, bienveillance. L'ihsan est le summum de la qualite d'action — faire le bien de la maniere la plus belle et la plus excellente. « Bi-ihsanin » = avec excellence/bienveillance. En theologie islamique, l'ihsan est le troisieme niveau (apres islam et iman) : adorer Dieu comme si on Le voyait.",
              axe1_verset: "L'ihsan (excellence/bienveillance) qualifie la liberation conjugale : tasrihun bi-ihsanin = liberer avec excellence. La liberation ne doit pas etre abrupte, humiliante ou negligente — elle doit etre faite dans la dignite et la bienveillance. L'ihsan humanise le droit.",
              axe2_voisins: "Le ma'ruf (ce qui est connu comme bon) qualifie la retention (imsakun bi-ma'ruf). L'ihsan (excellence) qualifie la liberation (tasrihun bi-ihsanin). Les deux normes (ma'ruf = connu/equitable, ihsan = excellent/bienveillant) encadrent les deux options du droit conjugal.",
              axe3_sourate: "La racine h-s-n est tres frequente dans al-Baqarah. L'ihsan est associe a la bienfaisance envers les parents, les orphelins, les pauvres (2:83). En 2:229, il s'applique a la separation conjugale — la bienveillance doit accompagner meme la rupture.",
              axe4_coherence: "La racine h-s-n apparait plus de 190 fois dans le Coran. L'ihsan est une valeur ethique transversale — elle qualifie l'excellence de l'action dans tous les domaines.",
              axe5_frequence: "Pour le khalifa, l'ihsan est le standard superieur de gouvernance. Ne pas seulement faire le juste (ma'ruf) mais faire l'excellent (ihsan). Dans le droit matrimonial, cela signifie que meme la separation doit etre conduite avec bienveillance et dignite."
            }
          }
        }
      },
      {
        word_key: "hll",
        position: 5,
        sense_chosen: "licite/permission",
        analysis_axes: {
          sense_chosen: "licite/permission",
          concept_chosen: "Licéité/Permission",
          concepts: {
            "Licéité/Permission": {
              status: "retenu",
              senses: ["etre licite", "etre permis", "halal", "permission", "legalite"],
              proof_ctx: "Le verbe yahillu est un inaccompli 3MS de la racine h-l-l. Le Lane's donne : etre licite, etre permis, etre legal ; se dissoudre, se delier (en parlant d'un lien). La halal (licite) est ce que la loi divine autorise. « La yahillu lakum » = il ne vous est pas licite/permis. La negation transforme la permission en interdiction absolue.",
              axe1_verset: "La licite (yahillu) est niee pour reprendre les biens donnes a la femme. Ce n'est pas simplement une recommandation morale — « la yahillu » est une declaration juridique d'interdiction. Reprendre la dot ou les cadeaux est haram (interdit), sauf dans le cas du khul'.",
              axe2_voisins: "Le verset 230 utilisera la meme racine (la tahillu = elle ne lui est plus licite) pour interdire le remariage avec la femme triplement divorcee. La licite/illiceite est le cadre juridique de tout le passage.",
              axe3_sourate: "La racine h-l-l est tres presente dans al-Baqarah, notamment dans les versets sur le mariage et le divorce. La paire halal/haram (licite/interdit) structure la legislation islamique.",
              axe4_coherence: "La racine h-l-l apparait environ 170 fois dans le Coran. La licite est l'une des categories juridiques fondamentales — ce que Dieu a rendu permis.",
              axe5_frequence: "Pour le khalifa, la distinction licite/illicite est le fondement de la gouvernance juridique. « La yahillu » = interdiction absolue — le khalifa applique cette norme sans exception, sauf dans les cas specifiquement prevus (khul')."
            }
          }
        }
      },
      {
        word_key: "shy",
        position: 6,
        sense_chosen: "chose/etre",
        analysis_axes: {
          sense_chosen: "chose/etre",
          concept_chosen: "Chose/Être",
          concepts: {
            "Chose/Être": {
              status: "retenu",
              senses: ["chose", "quelque chose", "un etre", "quoi que ce soit", "tout objet"],
              proof_ctx: "Le nom shay'an est un accusatif indefini de la racine sh-y-'. Le Lane's donne : chose, quelque chose, un etre, quoi que ce soit. Le shay' est la chose dans son universalite — tout ce qui existe, tout ce qui peut etre nomme. « Shay'an » en contexte = quoi que ce soit (emploi generalisant). « Mimma ataytumuhunna shay'an » = quoi que ce soit de ce que vous leur avez donne.",
              axe1_verset: "Shay'an (quoi que ce soit) etend l'interdiction a tout bien sans exception. Ce n'est pas seulement la dot principale — c'est tout ce que le mari a donne a sa femme. L'universalite du shay' protege integralement les droits patrimoniaux de la femme divorces.",
              axe2_voisins: "L'interdiction de reprendre (la yahillu) s'applique a shay'an — tout bien. La seule exception est le khul' (iftida'). La generalite du shay' est volontaire : aucune subtilite juridique ne peut contourner l'interdiction.",
              axe3_sourate: "La racine sh-y-' est omnipresente dans al-Baqarah et le Coran. Shay' designe la chose dans son universalite — utilise pour des generalisations absolues.",
              axe4_coherence: "La racine sh-y-' est l'une des plus frequentes du Coran (plusieurs centaines d'occurrences). Le shay' est la chose fondamentale — tout ce qui est.",
              axe5_frequence: "Pour le khalifa, l'interdiction portant sur shay'an (quoi que ce soit) est une prohibition sans exceptions : aucun bien, quel qu'il soit, ne peut etre repris a la femme divorces. Cette protection patrimoniale integrale est un pilier du droit matrimonial."
            }
          }
        }
      },
      {
        word_key: "khwf",
        position: 7,
        sense_chosen: "crainte/peur",
        analysis_axes: {
          sense_chosen: "crainte/peur",
          concept_chosen: "Crainte/Peur",
          concepts: {
            "Crainte/Peur": {
              status: "retenu",
              senses: ["craindre", "avoir peur", "crainte", "peur", "apprehension"],
              proof_ctx: "Le verbe yakhafa (et khiftum) est de la racine kh-w-f. Le Lane's donne : craindre, avoir peur, apprehender. La khawf est la crainte — une emotion cognitive et affective face a un danger ou une situation redoutable. « Yakhafa alla yuqima hududa Allahi » = craint de ne pas etablir les limites de Dieu. La crainte est ici positive — la crainte de transgresser, la conscience du risque de faute.",
              axe1_verset: "La crainte (yakhafa) de ne pas etablir les limites divines est la condition du khul'. Ce n'est pas une crainte ordinaire mais une crainte religieuse — l'apprehension de ne pas pouvoir maintenir les obligations conjugales dans les limites que Dieu a fixees. Cette crainte justifie la separation.",
              axe2_voisins: "Le verset 228 parlait des droits reciproques (lahunna mithlu alladhi 'alayhinna). Le verset 229 introduit la crainte (khawf) comme condition du khul'. La crainte est le motif subjectif qui active le mecanisme juridique objectif.",
              axe3_sourate: "La racine kh-w-f est frequente dans al-Baqarah. La khawf (crainte) est un motif d'action — en 2:150, 155, 177, 229. La crainte de Dieu (khashya/taqwa) est le principe moteur de l'ethique coranique.",
              axe4_coherence: "La racine kh-w-f apparait environ 120 fois dans le Coran. La crainte (kh-w-f) est distincte de la khashya (reverence craintive) et de la taqwa (piete protectrice). Ici, la khawf est l'apprehension concrete de ne pas pouvoir respecter les limites divines.",
              axe5_frequence: "Pour le khalifa, la crainte de transgresser les limites divines est le fondement de la conscience juridique. Le juge et le gouvernant doivent evaluer si la crainte (yakhafa) des epoux est fondee — si le dysfonctionnement conjugal est reel et non pretexte."
            }
          }
        }
      },
      {
        word_key: "qwm",
        position: 8,
        sense_chosen: "verticalite/droiture",
        analysis_axes: {
          sense_chosen: "verticalite/droiture",
          concept_chosen: "Verticalité/Droiture",
          concepts: {
            "Verticalité/Droiture": {
              status: "retenu",
              senses: ["dresser", "etablir", "eriger verticalement", "maintenir droit", "iqama"],
              proof_ctx: "Le verbe yuqima est un inaccompli dual subjonctif de la racine q-w-m (Form IV, aqama). Le Lane's donne pour aqama : dresser, eriger, etablir en verticalite, maintenir debout. La Form IV causative : faire se tenir debout. L'iqama est l'action d'eriger — rendre vertical ce qui pourrait s'affaisser. « Yuqima hududa Allahi » = dresser/etablir les limites de Dieu (les maintenir debout, verticales, fermes).",
              axe1_verset: "Yuqima hududa Allahi (etablir les limites de Dieu) : l'image est geometrique. Les hudud (limites) sont comme des poteaux ou des bornes qu'il faut dresser et maintenir debout (yuqima). Ne pas les yuqima = les laisser s'affaisser, ne pas les respecter. La metaphore de la verticalite exprime la ferme observance des lois divines.",
              axe2_voisins: "La meme expression (yuqima hududa Allahi) revient deux fois dans le verset — d'abord pour la condition du khul' (yakhafa alla yuqima), ensuite pour la decision du khul' (khiftum alla yuqima). La repetition souligne que l'etablissement des limites divines est le critere central.",
              axe3_sourate: "La racine q-w-m est tres presente dans al-Baqarah. Aqama est utilise pour la salat (aqimu al-salat = etablissez la priere) — l'erection de la priere comme pilier vertical. La meme image s'applique aux limites (hudud) : les dresser comme on dresse la priere.",
              axe4_coherence: "La racine q-w-m apparait environ 640 fois dans le Coran — l'une des plus frequentes. L'iqama (Form IV) designe systematiquement l'action de dresser, d'etablir. Que ce soit la priere, les limites, le temoignage — iqama = dresser/etablir fermement.",
              axe5_frequence: "Pour le khalifa, iqamat al-hudud (etablissement des limites) est la fonction judiciaire suprema. Le khalifa est celui qui dresse et maintient les limites divines dans la societe. Le verset lie l'iqama des hudud a la conscience des epoux — chacun doit etablir ces limites dans sa propre conduite."
            },
            "Gestion/Administration": {
              status: "probable",
              senses: ["administrer", "gerer", "maintenir", "administrer les limites"],
              proof_ctx: "L'iqamat al-hudud en droit islamique designe l'administration des peines/limites par le pouvoir. Le sens de gestion/administration est present dans yuqima hududa Allahi.",
              axe1_verset: "Etablir les limites (yuqima hududa) implique aussi leur administration — les faire respecter dans la pratique.",
              axe2_voisins: "Le contexte conjugal montre que l'iqama des hudud est d'abord personnelle (chaque epoux dans sa conduite), avant d'etre institutionnelle.",
              axe3_sourate: "La racine q-w-m dans al-Baqarah couvre les deux sens : dresser (vertical) et administrer.",
              axe4_coherence: "Le sens de gestion/administration est secondaire par rapport a la verticalite/droiture dans ce contexte.",
              axe5_frequence: "Pour le khalifa, les deux sens coexistent : dresser les limites (metaphore) et les administrer (juridique)."
            }
          }
        }
      },
      {
        word_key: "hdd",
        position: 9,
        sense_chosen: "limite/frontiere",
        analysis_axes: {
          sense_chosen: "limite/frontiere",
          concept_chosen: "Limite/Frontière",
          concepts: {
            "Limite/Frontière": {
              status: "retenu",
              senses: ["limite", "frontiere", "borne", "bord", "hadd"],
              proof_ctx: "Le nom hududa est un accusatif pluriel de la racine h-d-d. Le Lane's donne : limite, frontiere, bord, borne — ce qui delimite et separe. La hadd (pluriel hudud) est la limite fixee — une frontiere normative qu'on ne doit pas depasser. « Hududa Allahi » = les limites fixees par Dieu dans les domaines du mariage, du divorce et des droits matrimoniaux.",
              axe1_verset: "Hududa Allahi (les limites de Dieu) apparait trois fois dans le verset — encadrant le khul' (sauf si crainte de ne pas les etablir), le resultat (pas de faute dans le khul'), et l'avertissement final (ne les transgressez pas). La repetition triple souligne que tout le dispositif juridique du talaq et du khul' est encadre par ces limites divines.",
              axe2_voisins: "Le verset 229 utilise hududa Allahi pour les limites du droit matrimonial. Le verset 230 reprend hududa Allahi pour les limites du remariage. La sequence 229-230 forme un corpus legislatif encadre par les memes hudud.",
              axe3_sourate: "La racine h-d-d est presente dans al-Baqarah en 2:187 (hudud Allah dans le contexte du jeune), 229, 230. Les hudud sont les frontieres de la loi divine — transgressor les hudud est la faute supreme.",
              axe4_coherence: "La racine h-d-d apparait environ 60 fois dans le Coran. Les hudud Allah sont un concept juridique et ethique central — les limites que Dieu a fixees et que nul ne doit franchir.",
              axe5_frequence: "Pour le khalifa, les hudud Allah sont la constitution divine. Le khalifa est le gardien des hudud — il veille a ce que personne ne les transgresse et que tous les droits dans ces limites soient respectes."
            }
          }
        }
      },
      {
        word_key: "jnh",
        position: 10,
        sense_chosen: "inclinaison/penchant",
        analysis_axes: {
          sense_chosen: "inclinaison/penchant",
          concept_chosen: "Inclinaison/Penchant",
          concepts: {
            "Inclinaison/Penchant": {
              status: "retenu",
              senses: ["inclination", "penchant", "inclinaison vers la faute", "tendance blamable"],
              proof_ctx: "Le nom junaha est un accusatif de la racine j-n-h. Le Lane's donne : inclination, penchant vers ce qui est blamable ; une faute, un peche. Le junah est fondamentalement une inclinaison — un penchant vers ce qui est mal. « La junaha 'alayhima » = pas d'inclinaison [vers la faute] sur eux deux. La negation du junah signifie que l'acte (khul') est pleinement legitime — aucune tendance vers la faute n'y est attachee.",
              axe1_verset: "La junaha (inclinaison vers la faute) est niee pour le khul' si la condition de crainte de transgresser les limites divines est remplie. L'absence de junaha = l'acte est net de toute faute. C'est une declaration de legitimite : le khul' n'est pas moralement problematique dans ces conditions.",
              axe2_voisins: "Le meme terme (la junaha) reviendra en 2:230, 2:233, 2:234, 2:235, 2:236, 2:240 dans des contextes varies du droit matrimonial. C'est le terme technique pour declarer la legitimite d'un acte — « pas d'inclinaison vers la faute ».",
              axe3_sourate: "La racine j-n-h est presente dans al-Baqarah dans les sections juridiques. « La junaha » est une formule de validation : l'acte ne comporte pas de penchant vers la faute — il est permis.",
              axe4_coherence: "La racine j-n-h apparait une vingtaine de fois dans le Coran. Le junah designe l'inclinaison blamable — ni le peche accompli (ithm) ni la punition (jadhr), mais le penchant moral problematique.",
              axe5_frequence: "Pour le khalifa, « la junaha » est une declaration juridique de legitimite. L'acte ainsi valide est libre de tout reproche moral et juridique. Le khalifa l'utilise pour encadrer les actes licites qui pourraient etre mal interpretes."
            },
            "Sens isolé/Péché": {
              status: "possible",
              senses: ["peche", "faute", "peche isole"],
              proof_ctx: "Le Lane's donne aussi junah comme peche/faute. Hamidullah traduit par peche.",
              axe1_verset: "La junaha peut etre entendue comme le peche lui-meme, pas seulement l'inclinaison.",
              axe2_voisins: "Dans l'usage courant, junaha est souvent traduit par peche — la nuance d'inclinaison est plus philosophique.",
              axe3_sourate: "Les deux sens coexistent dans l'usage coranique.",
              axe4_coherence: "La nuance d'inclinaison est plus precise que peche, qui est le resultat de l'inclinaison.",
              axe5_frequence: "Pour le khalifa, la distinction entre inclinaison (junah) et peche accompli (ithm) est juridiquement importante."
            }
          }
        }
      },
      {
        word_key: "fdy",
        position: 11,
        sense_chosen: "rancon/sacrifice",
        analysis_axes: {
          sense_chosen: "rancon/sacrifice",
          concept_chosen: "Rançon/Sacrifice",
          concepts: {
            "Rançon/Sacrifice": {
              status: "retenu",
              senses: ["rancon", "se racheter", "payer pour sa liberte", "sacrifice", "iftida'"],
              proof_ctx: "Le verbe iftadat est un accompli 3FS de la racine f-d-y (Form VIII, iftada). Le Lane's donne : se racheter, payer une rancon, se liberer par un paiement. La Form VIII reflexive : s'auto-racheter — la femme se libere elle-meme par le paiement. L'iftida' (rancon) est le prix que la femme paie pour etre liberee du lien conjugal quand elle le souhaite mais que le mari ne prononce pas le talaq. C'est la fondement juridique du khul'.",
              axe1_verset: "Iftadat (elle a verse comme rancon) est le terme technique du khul' : la femme rend (tout ou partie de) la dot pour que le mari prononce le talaq. C'est un mecanisme de liberation autonome — la femme n'est pas passive, elle peut initier la separation par le paiement de la rancon.",
              axe2_voisins: "Le contexte : si les deux epoux craignent de ne pas maintenir les limites divines (dysfonction conjugale grave), alors le khul' est autorise. L'iftida' (rancon) est le moyen. La conditionnaite protege contre les abus.",
              axe3_sourate: "La racine f-d-y est presente dans al-Baqarah en 2:85 (rancon pour les prisonniers). Le sens de rachat/rancon est stable — se liberer par un paiement ou sacrifice.",
              axe4_coherence: "La racine f-d-y apparait environ 23 fois dans le Coran. Le sens de rancon/rachat est constant — se liberer par un echange ou un sacrifice.",
              axe5_frequence: "Pour le khalifa, l'iftida' (rancon) est un mecanisme d'equite : la femme a un moyen de sortir d'un mariage dysfonctionnel en rendant la dot. Ce droit de rachat equilibre le droit de talaq detenu par le mari."
            }
          }
        }
      },
      {
        word_key: "edw",
        position: 12,
        sense_chosen: "transgression/exces",
        analysis_axes: {
          sense_chosen: "transgression/exces",
          concept_chosen: "Transgression/Excès",
          concepts: {
            "Transgression/Excès": {
              status: "retenu",
              senses: ["transgresser", "depasser les limites", "exces", "transgression", "aller au-dela"],
              proof_ctx: "Le verbe ta'taduha est un inaccompli 2MP de la racine '-d-w (Form VIII, i'tada). Le Lane's donne : transgresser, aller au-dela des limites, commettre un exces, depasser la borne. La Form VIII intensif/reflexif : transgresser activement. « La ta'taduha » = ne les transgressez pas (les limites de Dieu). Le verbe yata'adda (meme racine, Form V) dans la phrase suivante = quiconque transgresse.",
              axe1_verset: "Ta'taduha (transgressez-les) et yata'adda (transgresse) encadrent l'avertissement final du verset. Les limites de Dieu (hududa Allahi) ne doivent pas etre transgressees — ni dans le droit du mariage, ni dans aucun autre domaine. La transgression des hudud est la definition de l'injustice (zalimuna).",
              axe2_voisins: "La paire transgression (ta'taduha/yata'adda) / injustice (zalimuna) conclut le verset. Transgresser les limites = etre injuste. L'injustice est le resultat de la transgression — l'equation est posee clairement.",
              axe3_sourate: "La racine '-d-w est presente dans al-Baqarah en 2:85 (transgression entre groupes), 2:190 (ne pas transgresser dans le combat), 2:229. La transgression est l'un des comportements les plus condamnes — elle brise la justice et l'ordre.",
              axe4_coherence: "La racine '-d-w apparait environ 80 fois dans le Coran. Le sens de transgression/exces est constant — aller au-dela de ce qui est permis.",
              axe5_frequence: "Pour le khalifa, « la ta'taduha » (ne les transgressez pas) est un commandement de gouvernance : maintenir les limites et empecher leur transgression est la fonction primordiale du pouvoir."
            }
          }
        }
      },
      {
        word_key: "zlm",
        position: 13,
        sense_chosen: "injustice/oppression",
        analysis_axes: {
          sense_chosen: "injustice/oppression",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["injuste", "oppresseur", "injustice", "oppression", "mettre les choses a la mauvaise place"],
              proof_ctx: "Le nom az-zalimuna est un participe actif pluriel de la racine z-l-m. Le Lane's donne : injuste, oppresseur, celui qui met les choses a la mauvaise place (contraire de la justice). Az-zalim est l'injuste fondamental — celui qui depossede les autres de leurs droits, qui opprime, qui transgresse. « Hum az-zalimuna » = ce sont eux les injustes — la designation est categorique.",
              axe1_verset: "Az-zalimuna (les injustes) designe ceux qui transgressent les limites de Dieu. La conclusion du verset est logique : transgresser les hudud Allah = etre injuste. L'injustice est definie comme la transgression des limites divines — un deplacement de ce qui est a sa juste place.",
              axe2_voisins: "La sequence du verset : limites divines → ne pas transgresser → ceux qui transgressent sont les injustes. La definition de l'injustice (zalm) comme transgression des limites (hudud) est fondamentale pour la legislation islamique.",
              axe3_sourate: "La racine z-l-m est tres frequente dans al-Baqarah. Les zalimun (injustes) sont condamnes tout au long de la sourate. En 2:229, la transgression matrimoniale les range dans la categorie des injustes — le zalm n'est pas seulement politique ou cosmique, il est aussi conjugal.",
              axe4_coherence: "La racine z-l-m apparait environ 315 fois dans le Coran — l'une des plus frequentes. L'injustice (zalm/zulm) est le mal supreme dans la cosmologie coranique — oppose a la qist (equite) et au 'adl (justice).",
              axe5_frequence: "Pour le khalifa, combattre le zulm (injustice/oppression) est la mission fondamentale. Le verset 229 montre que l'injustice peut se commettre dans le cadre conjugal — reprendre des biens, violer les limites divines. Le khalifa protege les droits matrimoniaux des femmes contre ce zulm."
            },
            "Obscurité/Ténèbres": {
              status: "possible",
              senses: ["obscurite", "tenebres", "mettre dans l'ombre"],
              proof_ctx: "La racine z-l-m designe aussi l'obscurite — la nuit, les tenebres. L'injustice comme mise dans l'obscurite est une metaphore ethymologique.",
              axe1_verset: "Dans ce contexte juridique, le sens d'obscurite est secondaire par rapport a l'injustice.",
              axe2_voisins: "Le verset traite de droit, pas de cosmologie — l'injustice est le sens pertinent.",
              axe3_sourate: "Dans les sections juridiques de al-Baqarah, z-l-m designe l'injustice, pas l'obscurite.",
              axe4_coherence: "Les deux sens sont etymologiquement lies mais l'injustice domine dans ce contexte.",
              axe5_frequence: "Pour le khalifa, l'injustice (zalm) est conceptuellement liee a l'obscurite — l'injuste aveugle et obscurcit la realite."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[229];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V229)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position + ' → ' + word.sense_chosen);
  }

  console.log('\n✅ V229 TERMINE');
}
main().catch(console.error);
