const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 225
// verse_id=232, analysis_id=589
// "la yuakhidhukum Allahu bi-al-laghwi fi aymanikum
//  wa-lakin yuakhidhukum bi-ma kasabat qulubukum
//  wa-Allahu ghafurun halimun"
// =====================================================

const verseData = {
  225: {
    verse_id: 232,
    analysis_id: 589,
    translation_arab: "Dieu ne vous saisit pas pour les futilites de vos serments. Mais Il vous saisit pour ce que vos coeurs ont acquis. Et Dieu est Pardonneur et Longanime.",
    full_translation: "Allah ne vous saisit pas pour ce qu'il y a de vain dans vos serments. Mais Il vous saisit pour ce que vos coeurs ont acquis. Et Allah est Pardonneur et Longanime.",
    translation_explanation: `§DEMARCHE§
Le verset 225 traite de la responsabilite dans les serments. La structure est binaire : d'un cote le laghw (le vain, l'involontaire), de l'autre le kasb al-qulub (l'acquisition du coeur, l'intentionnel). Dieu ne tient pas responsable pour les serments vains — ceux prononcs sans intention deliberee — mais Il tient responsable pour ce que le coeur a delibrement voulu.

Le verbe central **yuakhidhukum** (Form III de a-kh-dh, inaccompli 3MS + suffixe 2MP) apparait deux fois dans le verset : d'abord nie (la yuakhidhukum — Il ne vous saisit pas), puis affirme apres la particule adversative lakin (wa-lakin yuakhidhukum — mais Il vous saisit). Cette repetition est structurelle : elle pose un contraste delibere entre deux types de responsabilite.

Le nom **al-laghwi** est de la racine l-gh-w. Le Lane's donne : vain, futile, sans signification, ce qui est dit sans intention serieuse. Al-laghw est la futilite — ce qui est dit en passant, sans deliberation. Dans le contexte des serments (ayman), le laghw designe le serment prononce machinalement, habituellement, sans intention reelle de jurer : par exemple dire « wallahi » (par Dieu) comme tic de langage.

Le nom **al-ayman** est le pluriel de yamin de la racine y-m-n. Le Lane's donne : serment, droit, main droite. L'yamin est d'abord la main droite — et par extension le serment, car on levait la main droite pour jurer. La construction « bi-al-laghwi fi aymanikum » = pour les futilites dans vos serments — le laghw est ce qui se trouve dans les serments, leur partie vaine.

Le verbe **kasabat** est un accompli 3FS de la racine k-s-b. Le Lane's donne : acquerir, gagner, obtenir, meriter. Le kasb est l'acquisition — ce que l'on gagne par son action deliberee. « Ma kasabat qulubukum » = ce que vos coeurs ont acquis — les intentions deliberees, les engagements reels du coeur.

Le nom **qulubukum** est un pluriel de qalb (racine q-l-b) avec suffixe 2MP. Le Lane's donne : coeur (organe et siege des emotions/intentions), centre, ce qui peut se retourner. Le qalb est le siege de l'intention — c'est depuis le coeur que l'acte delibere est initie. « Qulubukum » = vos coeurs.

L'adjectif **ghafurun** est de la racine gh-f-r. Le Lane's donne : pardonner, couvrir, proteger de la deterioration. Al-Ghafur est le Pardonneur — Celui qui couvre les fautes, les efface, les protege de la deterioration. La ghafara est non seulement le pardon mais la couverture — mettre quelque chose qui protege sur la faute.

L'adjectif **halimun** est de la racine h-l-m. Le Lane's donne : clement, retenu, patient face a l'offense, celui qui ne se hate pas dans la punition. Al-Halim est le Clement — Celui qui retient Sa punition meme quand Il en a le droit. Le hilm est la clémence active — retenir la reaction punitive.

§JUSTIFICATION§
**Dieu ne vous saisit pas** — « la yuakhidhukum » est traduit par « ne vous saisit pas » car a-kh-dh (Form III) = saisir quelqu'un pour le tenir responsable, l'apprehender pour une faute. Form III designe une action bilatérale — saisir quelqu'un dans une relation de responsabilite. L'alternative « ne vous punit pas » (lecture courante) est trop forte — la akhz est la saisie/prise, la responsabilisation, qui peut mener a la punition mais n'est pas identique.

**les futilites de vos serments** — « bi-al-laghwi fi aymanikum » = pour les futilites dans vos serments. Le laghw est traduit par « futilite » car c'est le sens premier — ce qui est vain, sans substance, dit machinalement. La traduction de Hamidullah « ce qu'il y a de vain » est juste. Le terme « serments » (ayman) inclut tous les types de serments, du tic de langage au voeu solennel.

**ce que vos coeurs ont acquis** — « ma kasabat qulubukum » est traduit litteralement. Le kasb (acquisition) du coeur = l'intention deliberee. C'est la forme intentionnelle du serment — celui qui est prononce avec deliberation du coeur, avec conscience et volonte.

**Pardonneur** — « ghafurun » = Pardonneur. La racine gh-f-r implique la couverture/protection — le Ghafur couvre les fautes. Traduit par « Pardonneur » (standard des noms de Dieu).

**Longanime** — « halimun » = Longanime (ou Clement). Al-Halim est le retenu dans la punition — celui qui n'agit pas impulsivement meme quand Il le pourrait. « Longanime » (Hamidullah) rend bien le sens de retenue dans la reaction punitive.

§CRITIQUE§
La paire ghafurun/halimun a la fin du verset n'est pas anodine. Ghafur (Pardonneur) repond a la premiere partie du verset — Il pardonne le laghw (les serments vains). Halim (Longanime) repond a la deuxieme partie — Il est retenu dans Sa punition meme pour les serments intentionnels, donnant le temps du repentir. La structure du verset est donc : pardon pour le vain (laghw) + longanimitee pour l'intentionnel (kasb al-qulub). Hamidullah ne commente pas cette structure — sa traduction est correcte mais perd la coherence interne de la paire conclusive.

La repetition de yuakhidhukum crée un effet de miroir delibere. Le premier est nie (la yuakhidhukum... bi-al-laghwi) — Dieu ne prend pas pour le vain. Le second est affirme avec adversatif (wa-lakin yuakhidhukum... bi-ma kasabat) — mais Il prend pour l'intentionnel. Cette repetition souligne que la responsabilite est liee a l'intention, pas a l'acte brut. Hamidullah rend la structure correctement avec « mais ».

La distinction laghw/kasb al-qulub a des implications juridiques importantes : le droit islamique distingue le serment vain (laghw al-yamin) — non contraignant — du serment delibere (yamin al-munaqada) — contraignant et soumis a expiation en cas de rupture. Le verset 225 est la base de cette distinction juridique. Le verset suivant (226) et la sequence sur les serments confirment cette lecture.`,
    segments: [
      { fr: "Dieu ne vous saisit pas", pos: "verbe", phon: "la yuakhidhukum Allahu", arabic: "لَا يُؤَاخِذُكُمُ ٱللَّهُ", word_key: "akhz", is_particle: false, sense_retenu: "Prise/Saisie", position: 0 },
      { fr: "pour les futilites de vos serments", pos: "nom", phon: "bi-al-laghwi fi aymanikum", arabic: "بِٱللَّغْوِ فِىٓ أَيْمَـٰنِكُمْ", word_key: "lghw", is_particle: false, sense_retenu: "Vanite/Futilite", position: 1 },
      { fr: "mais Il vous saisit", phon: "wa-lakin yuakhidhukum", arabic: "وَلَـٰكِن يُؤَاخِذُكُم", is_particle: true, position: 2 },
      { fr: "pour ce que vos coeurs ont acquis", pos: "verbe", phon: "bi-ma kasabat qulubukum", arabic: "بِمَا كَسَبَتْ قُلُوبُكُمْ", word_key: "ksb", is_particle: false, sense_retenu: "Acquisition/Retribution", position: 3 },
      { fr: "vos coeurs", pos: "nom", phon: "qulubukum", arabic: "قُلُوبُكُمْ", word_key: "qlb", is_particle: false, sense_retenu: "Coeur/Centre", position: 4 },
      { fr: "Et Dieu est Pardonneur", pos: "adj", phon: "wa-Allahu ghafurun", arabic: "وَٱللَّهُ غَفُورٌ", word_key: "ghfr", is_particle: false, sense_retenu: "Pardon/Couverture", position: 5 },
      { fr: "Longanime", pos: "adj", phon: "halimun", arabic: "حَلِيمٌ", word_key: "hlm", is_particle: false, sense_retenu: "Clemence/Retenue", position: 6 }
    ],
    vwa: [
      {
        word_key: "akhz",
        position: 0,
        sense_chosen: "Prise/Saisie",
        analysis_axes: {
          sense_chosen: "Prise/Saisie",
          concept_chosen: "Prise/Saisie",
          concepts: {
            "Prise/Saisie": {
              status: "retenu",
              senses: ["saisir", "prendre", "tenir responsable", "apprehender pour une faute", "imputer"],
              proof_ctx: "Le verbe yuakhidhukum est un inaccompli 3MS de la racine a-kh-dh (Form III) avec suffixe 2MP. Le Lane's donne : prendre quelqu'un, saisir, tenir responsable. Form III (fa'ala) indique une action reciproque ou bilatérale — ici saisir quelqu'un dans une relation de responsabilite, le tenir imputable. Le verbe apparait deux fois dans le verset — d'abord nie (la yuakhidhukum... bi-al-laghwi) puis affirme (wa-lakin yuakhidhukum... bi-ma kasabat). La repetition structure la distinction intentionnel/non-intentionnel.",
              axe1_verset: "La akhz (saisie/prise) de Dieu est le mecanisme de la responsabilite divine. Dans ce verset, la akhz est nie pour le laghw (serments vains) et affirmee pour le kasb al-qulub (acquisition du coeur). Le concept Prise/Saisie rend le sens de la responsabilisation — Dieu saisit quelqu'un pour le tenir imputable de ses actes deliberes.",
              axe2_voisins: "Le verset 224 interdit de faire de Dieu l'objet de serments pour justifier l'inaction. Le verset 225 precise les consequences : seuls les serments intentionnels engagent la responsabilite. La Prise/Saisie est le mecanisme divin de cette responsabilite.",
              axe3_sourate: "La racine a-kh-dh est presente plusieurs fois dans la sourate al-Baqarah. En 2:63 et 2:93 : « nous avons pris votre engagement » (akhadhna mithaqakum). En 2:255 (ayat al-kursi) : « la somnolence ne Le saisit pas » (la ta'khudhuhu sinatun). La saisie divine — qu'elle soit de l'engagement ou de la responsabilite — est un motif structurant.",
              axe4_coherence: "La racine a-kh-dh apparait environ 70 fois dans le Coran. Elle designe la prise, la saisie — Dieu saisit les peuples dans leur faute (akhadha al-quruna bi-dhunubihim), saisit les engagements des prophetes. La akhz est l'acte divin d'imputation.",
              axe5_frequence: "Pour le khalifa, la akhz divine est le modele de la responsabilite juridique. La distinction laghw/kasb al-qulub (intentionnel/non-intentionnel) fonde le droit islamique de la responsabilite — on n'est pas tenu pour ce qu'on fait par inadvertance, mais pour ce qu'on delibere."
            },
            "Chatiment": {
              status: "nul",
              senses: ["punir", "sanctionner", "chatier"],
              proof_ctx: "La racine a-kh-dh designe la saisie/prise, pas directement le chatiment. Le chatiment peut suivre la saisie mais n'est pas identique a elle.",
              axe1_verset: "Dans ce verset, la akhz est associee au kasb al-qulub (acquisition du coeur) — c'est la responsabilisation, pas necessairement la punition immediate. La paire conclusive ghafurun/halimun (Pardonneur/Longanime) montre que la saisie peut etre suivie du pardon.",
              axe2_voisins: "Le contexte du verset est celui de la responsabilite dans les serments, pas de la punition immediate. Le Pardonneur et le Longanime concluent — ce n'est pas un verset de menace.",
              axe3_sourate: "Dans la sourate, la punition directe est exprimee par d'autres racines ('adhab, 'iqab). La akhz designe l'acte de saisie/imputation, pas la punition elle-meme.",
              axe4_coherence: "Le concept Chatiment est semantiquement distinct de la Prise/Saisie. La saisie mene potentiellement au chatiment mais n'y est pas identique.",
              axe5_frequence: "Pour le khalifa, distinguer la saisie (responsabilisation) du chatiment (punition) est une distinction juridique fondamentale. La saisie est l'engagement de la responsabilite; le chatiment est la sanction."
            }
          }
        }
      },
      {
        word_key: "lghw",
        position: 1,
        sense_chosen: "Vanite/Futilite",
        analysis_axes: {
          sense_chosen: "Vanite/Futilite",
          concept_chosen: "Vanite/Futilite",
          concepts: {
            "Vanite/Futilite": {
              status: "retenu",
              senses: ["vain", "futile", "sans intention", "propos inutile", "dit machinalement", "laghw"],
              proof_ctx: "Le nom al-laghwi est un nom genitif defini de la racine l-gh-w. Le Lane's donne : vain, futile, ce qui est dit ou fait sans intention serieuse, le bavardage, le propos inutile, l'acte sans signification. Dans le contexte juridique des serments (ayman), le laghw al-yamin est le serment dit machinalement, par habitude ou tic de langage — sans intention deliberee de jurer. Par exemple dire « wallahi » (par Dieu) comme expression courante sans volonte de s'engager.",
              axe1_verset: "Le laghw est le premier pole de la distinction centrale du verset. Les serments vains (al-laghwi fi aymanikum) sont ceux prononcs sans intention — machinalement, par habitude. Dieu ne tient pas responsable pour ces serments car ils n'engagent pas la volonte deliberee du coeur. La futilite/vanite est ici definie par l'absence d'intention (kasb al-qalb).",
              axe2_voisins: "Le verset 224 interdisait de jurer par Dieu pour s'abstenir du bien. Le verset 225 precise que le laghw dans les serments n'engage pas la responsabilite. Le verset 226 abordera les serments d'abstinence de sa femme (ila'). La sequence montre une reflexion juridique progressive sur les types de serments.",
              axe3_sourate: "La racine l-gh-w est presente dans le Coran notamment en 23:3 (les croyants « s'ecartent du laghw ») et 28:55 (ils « se detournent du laghw »). Le laghw est ce dont le croyant doit s'ecarter — propos vains, actes sans substance. En 2:225, le laghw est reconnu comme une realite du discours humain dont Dieu ne tient pas rigueur.",
              axe4_coherence: "La racine l-gh-w apparait environ 11 fois dans le Coran. Le laghw est systematiquement associe a l'inutile, au vain, au sans-substance. En 41:26, les incredules sont ordonnes de faire du bruit (laghu) pour couvrir la recitation du Coran — le laghw est le bruit qui masque le sense.",
              axe5_frequence: "Pour le khalifa, la distinction laghw/intention deliberee est fondatrice du droit de la responsabilite. Le laghw dans les serments est non contraignant — les tics de langage, les serments habituels sans deliberation, n'engagent pas. Cette distinction protege les croyants d'une rigueur excessive dans les serments quotidiens."
            }
          }
        }
      },
      {
        word_key: "ksb",
        position: 3,
        sense_chosen: "Acquisition/Retribution",
        analysis_axes: {
          sense_chosen: "Acquisition/Retribution",
          concept_chosen: "Acquisition/Retribution",
          concepts: {
            "Acquisition/Retribution": {
              status: "retenu",
              senses: ["acquerir", "gagner", "meriter", "obtenir par son action", "kasb"],
              proof_ctx: "Le verbe kasabat est un accompli 3FS de la racine k-s-b. Le Lane's donne : acquerir, gagner, obtenir, meriter — obtenir quelque chose par son effort ou son action deliberee. Le kasb est l'acquisition — ce qu'on gagne deliberement. « Ma kasabat qulubukum » = ce que vos coeurs ont acquis/gagne — les intentions deliberees, les serments formes avec conscience et volonte. Le sujet est qulub (coeurs) — c'est le coeur qui acquiert l'intention.",
              axe1_verset: "Le kasb al-qulub (acquisition des coeurs) est le second pole de la distinction centrale du verset. Il s'oppose au laghw — la futilite. Le kasb du coeur est le serment delibere, forme avec intention consciente. C'est pour ce kasb que Dieu tient responsable — car il engage la volonte profonde de la personne.",
              axe2_voisins: "Le verset 281 (fin de la sourate) rappelle que « chaque ame sera retribuee de ce qu'elle a acquis » (ma kasabat). La racine k-s-b est recurrente dans la sourate pour designer la responsabilite morale — on est retribue de ce qu'on a deliberement acquis/commis.",
              axe3_sourate: "La racine k-s-b est tres presente dans la sourate al-Baqarah. En 2:79, « malheur a ceux qui ecrivent le Livre de leur main puis disent : cela vient de Dieu — pour en tirer un vil profit (li-yashtaru bi-hi thamanan qalilan). Waylun lahum mimma katabat aydihim wa-waylun lahum mimma yaksibun ». En 2:286 : « Dieu ne charge une ame que de ce qu'elle peut — pour elle ce qu'elle a acquis (ma kasabat) et contre elle ce qu'elle a acquis (ma iktasabat) ».",
              axe4_coherence: "La racine k-s-b apparait environ 67 fois dans le Coran. Elle designe systematiquement l'acquisition deliberee — les actes conscients dont on est responsable. L'iktisab (Form VIII) est la meme racine intensifiee — acquerir pour soi.",
              axe5_frequence: "Pour le khalifa, le kasb al-qulub est le principe de la responsabilite intentionnelle. On n'est tenu que pour ce qu'on a deliberement voulu — pas pour l'inadvertance (laghw). Ce principe fonde la justice : la sanction doit correspondre a l'intention, pas seulement a l'acte."
            }
          }
        }
      },
      {
        word_key: "qlb",
        position: 4,
        sense_chosen: "Coeur/Centre",
        analysis_axes: {
          sense_chosen: "Coeur/Centre",
          concept_chosen: "Coeur/Centre",
          concepts: {
            "Coeur/Centre": {
              status: "retenu",
              senses: ["coeur", "centre", "siege de l'intention", "interieur profond", "qalb"],
              proof_ctx: "Le nom qulubukum est un pluriel de qalb (racine q-l-b) avec suffixe 2MP. Le Lane's donne : coeur (organe et siege des emotions, des intentions, de la connaissance), centre de quelque chose, ce qui peut se retourner. Le qalb est a la fois l'organe physique et le siege de l'intention et de la conscience morale. « Qulubukum » = vos coeurs — le pluriel designe les coeurs de chacun, chaque individu etant responsable de son propre qalb.",
              axe1_verset: "Les coeurs (qulubukum) sont le sujet de kasabat — ce sont eux qui « acquierent », qui forment l'intention deliberee. Le coeur-centre est l'organe de la deliberation morale. Dans la distinction du verset (laghw vs kasb), le coeur est ce qui transforme un mot en acte engage : le serment delibere est celui que le coeur a forme, pas seulement celui que la bouche a prononce.",
              axe2_voisins: "Le verset 204 mentionnait « ce qu'il y a dans les coeurs » (ma fi sadrihi) pour l'hypocrite. Le verset 225 parle de « ce que vos coeurs ont acquis ». La sequence montre que le coeur (qalb/sadr) est le lieu de la verite interieure — que ce soit la duplicite (204) ou l'intention deliberee dans les serments (225).",
              axe3_sourate: "La racine q-l-b est presente dans la sourate al-Baqarah en 2:7 (Dieu a scelle leurs coeurs), 2:10 (dans leurs coeurs est une maladie), 2:74 (vos coeurs se sont durcis), 2:93 (abreuve dans leurs coeurs le veau d'or), 2:97 (il l'a fait descendre sur ton coeur), 2:204 (et il est le plus querelleur). Le qalb est le siege de la foi, de la durete, de la connaissance et de l'intention dans cette sourate.",
              axe4_coherence: "La racine q-l-b apparait environ 168 fois dans le Coran. Le qalb est l'organe central de la vie spirituelle et morale dans le Coran — c'est lui qui croit ou refuse, qui se durcit ou s'assouplit, qui forme les intentions. La formule « ma kasabat qulubukum » (ce que vos coeurs ont acquis) est presente en 2:225 et 2:283.",
              axe5_frequence: "Pour le khalifa, le qalb est l'organe de la responsabilite morale. La gouvernance juste doit tenir compte du qalb — non seulement les actes exterieurs mais les intentions qui les animent. Un serment engage quand le coeur l'a voulu; une action est valide quand le coeur est sincere.",
              "Retournement/Changement": {
                status: "probable",
                senses: ["retourner", "se retourner", "changer", "inverser"],
                proof_ctx: "La meme racine q-l-b designe le retournement — le qalb est « ce qui se retourne ». Cette dimension est presente dans des usages coraniques comme « yuqallibu Allahu al-qulub » (Dieu retourne les coeurs).",
                axe1_verset: "En 2:225, l'usage est clairement le coeur-siege de l'intention (kasb al-qulub), pas le retournement. Le concept Retournement/Changement est present dans la racine mais pas dominant dans ce contexte.",
                axe2_voisins: "La dimension de retournement du qalb sera plus pertinente dans d'autres contextes de la sourate.",
                axe3_sourate: "Les deux dimensions (coeur-centre et retournement) coexistent dans la racine q-l-b a travers la sourate.",
                axe4_coherence: "Le retournement est inherent au qalb — le coeur peut se retourner, changer d'orientation. Mais dans ce verset, c'est le qalb comme centre de l'intention qui est actif.",
                axe5_frequence: "Pour le khalifa, savoir que le qalb peut se retourner (changer) est une invitation a la vigilance spirituelle — le coeur doit etre maintenu dans la droiture."
              }
            }
          }
        }
      },
      {
        word_key: "ghfr",
        position: 5,
        sense_chosen: "Pardon/Couverture",
        analysis_axes: {
          sense_chosen: "Pardon/Couverture",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["pardonner", "couvrir", "effacer la faute", "proteger de la deterioration", "ghafara"],
              proof_ctx: "L'adjectif ghafurun est un adjectif nominatif de la racine gh-f-r. Le Lane's donne : pardonner, couvrir, veiller sur, proteger de la deterioration — le mighfar est le casque (ce qui couvre et protege la tete). Al-Ghafur est le Pardonneur — Celui qui couvre les fautes, les efface, les protege de la deterioration. La ghafara est non seulement le pardon mais la couverture — mettre quelque chose qui protege sur la faute, l'empecher de deteriorer la relation avec Dieu.",
              axe1_verset: "Le Pardon (ghafurun) repond a la premiere partie du verset — les serments vains (laghw) que Dieu ne prend pas en compte. Al-Ghafur couvre le laghw — les futilites sont pardonnees/couvertes. La paire ghafurun/halimun en fin de verset equilibre la rigueur potentielle (la saisie pour le kasb al-qulub) avec la misericorde divine.",
              axe2_voisins: "Le verset 218 concluait sur la misericorde et le pardon (ghafur rahim) pour ceux qui ont emigre. Le verset 225 reprend ghafur, mais associe a halim (Longanime). La formule evolue selon le contexte — ici le pardon est associe a la retenue dans la punition, pas a la misericorde.",
              axe3_sourate: "La racine gh-f-r est une des plus frequentes dans la sourate al-Baqarah. La formule « ghafurun rahimun » (Pardonneur Misericordieux) et « ghafurun halimun » (Pardonneur Longanime) sont deux variantes conclusives. « Ghafurun halimun » est specifique aux contextes de serments et de responsabilite differee.",
              axe4_coherence: "La racine gh-f-r apparait environ 234 fois dans le Coran. Al-Ghafur et Al-Ghaffar sont deux noms de Dieu — le premier designe le pardon ponctuel, le second (forme intensifiee) le pardon repete et abondant. Dans les formules conclusives des versets juridiques, ghafurun rappelle que la rigueur de la loi est temperee par le pardon.",
              axe5_frequence: "Pour le khalifa, le modele divin du ghafur est celui d'une gouvernance qui pardonne et couvre les fautes — particulierement les fautes involontaires ou vetilles. La rigueur juridique (akhz pour le kasb al-qulub) est equilibree par la clémence (ghafur pour le reste)."
            },
            "Protection": {
              status: "probable",
              senses: ["proteger", "couvrir pour proteger", "mighfar"],
              proof_ctx: "La racine gh-f-r contient semantiquement la protection — le mighfar (casque) protege la tete. Al-Ghafur couvre les fautes pour les proteger de la deterioration.",
              axe1_verset: "La dimension de protection est inherente au pardon divin — couvrir la faute c'est aussi proteger la relation avec Dieu de la deterioration. Mais dans ce contexte, c'est le pardon actif qui est central.",
              axe2_voisins: "La protection divine est exprimee dans la sourate par d'autres noms (al-Hafiz, al-Waliyy). La ghafara est specifiquement le pardon-couverture.",
              axe3_sourate: "Dans les formules conclusives, ghafurun designe le pardon-couverture, pas simplement la protection.",
              axe4_coherence: "Les deux dimensions (pardon et protection) sont presentes dans la racine gh-f-r. La dimension de pardon est dominante dans les formules avec ghafurun comme attribut divin.",
              axe5_frequence: "Pour le khalifa, la distinction pardon/protection est une nuance de la clémence divine — le pardon est une forme active de protection de la relation croyant-Dieu."
            }
          }
        }
      },
      {
        word_key: "hlm",
        position: 6,
        sense_chosen: "Clemence/Retenue",
        analysis_axes: {
          sense_chosen: "Clemence/Retenue",
          concept_chosen: "Clemence/Retenue",
          concepts: {
            "Clemence/Retenue": {
              status: "retenu",
              senses: ["clement", "longanime", "retenu dans la punition", "patient face a l'offense", "halim"],
              proof_ctx: "L'adjectif halimun est un adjectif nominatif de la racine h-l-m. Le Lane's donne : clement, patient face a l'offense, retenu dans la punition, celui qui ne se hate pas d'agir meme quand il en a le droit et la capacite. Al-Halim est Celui qui retient Sa reaction punitive — non par incapacite mais par choix delibere de patience. Le hilm (clémence/retenue) est une vertu active — la retenue face a la provocation.",
              axe1_verset: "Al-Halim (le Longanime/Clement) repond a la deuxieme partie du verset — Dieu saisit pour le kasb al-qulub (acquisition deliberee du coeur), mais Il est halim — retenu dans Sa punition. Meme pour les serments intentionnels, Sa punition n'est pas immediate. La clémence retenue ouvre l'espace du repentir. La paire ghafurun/halimun est coherente : ghafur pour le vain (il le couvre), halim pour l'intentionnel (il retient sa punition).",
              axe2_voisins: "Le verset 224 avait evoque les qualites de Dieu dans le contexte des serments. Le verset 225 conclut sur ghafurun halimun. La formule « ghafurun halimun » est utilisee en 2:225 et 2:235 — les deux fois dans le contexte des serments et des engagements relatifs aux femmes. C'est une formule specifique a ce contexte juridique.",
              axe3_sourate: "La formule « ghafurun halimun » est distincte des formules « ghafurun rahimun » (Pardonneur Misericordieux) ou « 'azizun hakimun » (Puissant Sage). Elle apparait specifiquement dans les contextes ou Dieu retient Sa punition immediate malgre la faute intentionnelle — le contexte des serments et des engagements.",
              axe4_coherence: "La racine h-l-m apparait environ 15 fois dans le Coran. Al-Halim est un des attributs divins — la clémence active, la retenue deliberee. Le hilm humain est aussi une vertu — Abraham est qualifie de halim en 11:75. La clémence est une forme de maturite morale.",
              axe5_frequence: "Pour le khalifa, le hilm (clémence/retenue) est une vertu de gouvernance essentielle. Le khalifa halim ne punit pas impulsivement — il retient sa reaction punitive, donne le temps du repentir et de la correction. La clémence n'est pas une faiblesse mais une force maitrisee, a l'image du Halim divin."
            },
            "Maturite": {
              status: "probable",
              senses: ["maturite", "age de raison", "sagesse acquise"],
              proof_ctx: "La racine h-l-m designe aussi la maturite — hulm est le reve, et hilm est la maturite/sagesse acquise avec l'age. Un halim est aussi un homme mur, sage. Le sens de maturite est present dans la racine.",
              axe1_verset: "La maturite (hilm) de Dieu est sa clémence parfaite — Dieu est parfaitement mur dans Sa gestion de la faute humaine. Mais le concept principal actif dans ce verset est la retenue dans la punition, pas la maturite en soi.",
              axe2_voisins: "La maturite divine se manifeste dans le contexte des serments par une approche mesuree — ni trop rigoureuse (laghw exclu) ni trop laxiste (kasb al-qulub engage).",
              axe3_sourate: "Dans les formules conclusives, halimun designe la clémence-retenue divine, pas la maturite en sens propre.",
              axe4_coherence: "Les deux dimensions (clémence et maturite) sont liees dans h-l-m — la clémence est le fruit de la maturite. Dans les attributs divins, c'est la clémence-retenue qui est dominante.",
              axe5_frequence: "Pour le khalifa, aspirer a la maturite (hilm) est aspirer a la clémence — la gestion sage et retenue, ni impulsive ni negligente."
            },
            "Reve/Songe": {
              status: "nul",
              senses: ["reve", "songe", "hulm"],
              proof_ctx: "La racine h-l-m designe aussi le reve (hulm, pluriel ahlam). Mais hulm et hilm sont deux derives distincts de la meme racine. Dans les attributs divins, halim est systematiquement la clémence/retenue.",
              axe1_verset: "Le sens Reve/Songe est semantiquement etranger au contexte — il n'y a aucun rapport avec les serments ou la responsabilite divine.",
              axe2_voisins: "Aucun element de contexte ne pointe vers le sens de reve.",
              axe3_sourate: "Dans la sourate al-Baqarah, la racine h-l-m n'apparait pas dans le sens de reve.",
              axe4_coherence: "La polysemie de h-l-m (reve vs clémence) est reelle mais les deux sens sont clairement distincts selon le contexte et la vocalisation.",
              axe5_frequence: "Pour le khalifa, la distinction hulm (reve) / hilm (clémence) est une nuance lexicale importante. Dans les attributs divins, seul hilm (clémence) est present."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[225];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V225)');

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

  console.log('\n✅ V225 TERMINE');
}
main().catch(console.error);
