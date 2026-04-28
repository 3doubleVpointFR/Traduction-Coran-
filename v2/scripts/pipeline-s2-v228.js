const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 228
// verse_id=235, analysis_id=594
// "wa-al-mutallaqatu yatarabbasna bi-anfusihinna
//  thalatha qurun
//  wa-la yahillu lahunna an yaktumna
//  ma khalaqa Allahu fi arhamihinna
//  in kunna yu'minna billahi wa-al-yawmi al-akhiri
//  wa-bu'ulatuhunna ahaqqu bi-raddihinna fi dhalika
//  in aradu islahan
//  wa-lahunna mithlu alladhi 'alayhinna bil-ma'rufi
//  wa-lil-rijali 'alayhinna darajatun
//  wa-Allahu 'azizun hakimun"
// =====================================================

const verseData = {
  228: {
    verse_id: 235,
    analysis_id: 594,
    translation_arab: "Les divorces attendent pour elles-memes trois periodes. Et il ne leur est pas permis de dissimuler ce qu'Allah a cree dans leurs matrices si elles croient en Allah et au Jour Dernier. Et leurs maris sont les plus meritants a les reprendre durant ce temps s'ils veulent une reconciliation. Et elles ont l'equivalent de ce qui est du envers elles selon l'usage reconnu. Et les hommes ont sur elles un degre. Et Allah est puissant, sage.",
    full_translation: "Les femmes divorcees doivent observer une attente de trois periodes menstruelles (avant de se remarier). Et il ne leur est pas permis de dissimuler ce qu'Allah a cree dans leurs matrices, si elles croient en Allah et au Jour Dernier. Et leurs epoux sont mieux fondes a les reprendre, durant ce temps, s'ils veulent une reconciliation. Et conformement a l'usage, les femmes ont des droits equivalents a leurs obligations. Mais les hommes ont une predominance sur elles. Allah est Puissant et Sage.",
    translation_explanation: `§DEMARCHE§
Le verset 228 inaugure la grande section sur le divorce dans la sourate al-Baqarah. Il pose trois principes fondamentaux : 1) l'iddah (periode d'attente) de trois quru' pour les femmes divorces, 2) l'interdiction de dissimuler l'etat du ventre (grossesse ou menstrues) pendant cette periode, 3) le droit prioritaire du mari a reprendre l'epouse pendant l'iddah, si la reconciliation est son but. Le verset conclut en affirmant l'equivalence de principe entre les droits des femmes et leurs obligations, tout en mentionnant que les hommes ont un degre (darajah) sur elles.

Le terme **al-mutallaqatu** est le participe passif feminin pluriel de la racine t-l-q. Le Lane's donne : liberer, lacher, divorcer. Al-mutallaqah est la femme divorcee — celle qui a ete liberee du lien matrimonial. Le pluriel al-mutallaqatu designe l'ensemble des femmes divorcees comme categorie juridique.

Le verbe **yatarabbasna** est un inaccompli Form V avec nun du feminin pluriel, de la racine r-b-s. Le Lane's donne : attendre, guetter, s'observer. La Form V (tafaʿʿala) est reflexive — yatarabbasna signifie « elles s'observent elles-memes / elles attendent par elles-memes ». Ce n'est pas une attente passive mais une observation de soi.

L'expression **bi-anfusihinna** est la preposition bi + pluriel de nafs avec suffixe feminin pluriel. Le Lane's donne pour nafs : soi-meme, personne, ame, etre. « Bi-anfusihinna » = pour elles-memes / par leurs personnes. La preposition bi indique ici l'instrument ou l'objet de l'attente. L'attente porte sur leur propre personne — elles s'observent elles-memes.

Le nom **thalatha** est le nombre trois, de la racine th-l-th. Il gouverne le nom suivant qurun au pluriel.

Le nom **qurun** (ou quru') est le pluriel de qar' / qur', de la racine q-r-'. Ce terme est notablement ambigu dans la langue arabe classique et dans la jurisprudence islamique : il peut designer les menstrues (haydh) ou les periodes de purete (tuhr). Les ecoles hanafite et malekite ont diverge sur ce point. Le Lane's donne les deux sens. Le texte coranique ne tranche pas — il emploie deliberement un terme qui englobe les deux realites du cycle feminin. Trois de ces periodes (menstruelles ou de purete) constituent l'iddah.

Le verbe **yahillu** est un inaccompli de la racine h-l-l. Le Lane's donne : etre licite, etre permis, etre dissous. « La yahillu lahunna » = il n'est pas licite pour elles. La licite (hill) est le contraire de l'interdit (haram). L'interdiction porte sur la dissimulation.

Le verbe **yaktumna** est un inaccompli avec nun du feminin pluriel de la racine k-t-m. Le Lane's donne : dissimuler, cacher, taire. « Yaktumna ma khalaqa Allahu fi arhamihinna » = dissimuler ce qu'Allah a cree dans leurs matrices. L'objet dissimule est double : une grossesse (qui prolongerait l'iddah et etablirait la paternite) ou l'absence de menstrues (qui permettrait de raccourcir l'iddah artificiellement).

Le verbe **khalaqa** est un accompli de la racine kh-l-q. Le Lane's donne : creer, former. Ce que Dieu a cree dans les matrices — c'est ce qui est d'origine divine : la grossesse, les cycles, la vie.

Le nom **arhamihinna** est le pluriel de rahim avec suffixe feminin pluriel. Le Lane's donne pour rahim : uterus, matrice, puis par extension : lien de parente, misericorde. Ici le sens premier (anatomique) est clairement retenu — c'est l'uterus physique qui est en question.

L'expression **yu'minna billahi wa-al-yawmi al-akhiri** (si elles croient en Allah et au Jour Dernier) est la condition de foi qui fonde l'obligation morale. La dissimulation de l'etat du ventre est une trahison de la foi — celui qui croit en Dieu et au Jugement dernier ne peut pas mentir sur quelque chose d'aussi fondamental.

Le nom **bu'ulatuhunna** est le pluriel de ba'l avec suffixe feminin pluriel. Le Lane's donne pour ba'l : mari, seigneur, maitre. Bu'ula est le pluriel de ba'l — « leurs maris ». Le terme ba'l designe le mari avec une connotation d'autorite et de propriete dans la langue arabe classique.

L'adjectif **ahaqqu** est le comparatif de haqiq, de la racine h-q-q. Le Lane's donne pour haqq : vrai, reel, juste, merite, droit. « Ahaqqu » = plus digne de droit, plus fonde, plus meritant. Les maris sont « ahaqqu bi-raddihinna » — plus meritants/fondes a les reprendre.

L'expression **bi-raddihinna** est la preposition bi + madar de la racine r-d-d avec suffixe feminin pluriel. Le Lane's donne pour radd : retourner, renvoyer, reprendre, rejeter. Ici « raddihinna » = les reprendre, les retourner (dans le mariage). L'idee est de rouvrir le mariage — reprendre l'epouse avant la fin de l'iddah.

L'expression **fi dhalika** = durant cela / dans ce temps — c'est-a-dire pendant la duree de l'iddah.

La condition **in aradu islahan** (s'ils veulent une reconciliation) est decisive : le droit de reprendre l'epouse n'est valide que si l'intention est la reconciliation (islah = remise en ordre). Reprendre l'epouse pour lui nuire ou prolonger son iddah est une transgression.

L'expression **wa-lahunna mithlu alladhi 'alayhinna bil-ma'rufi** = et elles ont l'equivalent de ce qui est du envers elles selon ce qui est reconnu. Le nom mithlu designe la ressemblance, l'equivalent, le pareil. « Ma 'alayhinna » = ce qui est sur elles (leurs obligations). « Mithlu alladhi 'alayhinna » = l'equivalent de ce qui est sur elles = leurs droits sont equivalents a leurs devoirs. Le nom **al-ma'ruf** est le participe passif de la racine '-r-f = ce qui est connu, reconnu, admis, l'usage etabli. Le ma'ruf dans le contexte du mariage designe les pratiques equitables reconnues par la communaute.

L'expression **wa-lil-rijali 'alayhinna darajatun** = et pour les hommes sur elles un degre. Le nom **darajatun** est de la racine d-r-j. Le Lane's donne : degre, echelon, rang, marche. Une darajah est un degre — un echelon superieur dans une echelle. Le texte dit que les hommes ont sur les femmes une darajah. Ce mot a ete l'objet de nombreuses interpretations — il ne signifie pas une superiorite morale ou spirituelle mais une position differentielle, un role qui implique des responsabilites supplementaires (nafaqah, garde, etc.).

§JUSTIFICATION§
**Les divorces** — « al-mutallaqatu » est le participe passif feminin pluriel de t-l-q. La traduction « les femmes divorcees » rend bien le sens juridique. Hamidullah dit « les femmes divorcees » — correct.

**elles attendent pour elles-memes** — « yatarabbasna bi-anfusihinna » : la Form V (reflexive) de r-b-s indique que l'attente est active et personnelle — elles s'observent elles-memes. Hamidullah dit « doivent observer une attente » — correct sur le fond mais « s'observent elles-memes » rend mieux la dimension reflexive du verbe.

**trois quru'** — « thalatha qurun » : le nombre trois est precis. Le mot qurun est deliberement ambigu. Hamidullah traduit « periodes menstruelles » en privilegiant l'interpretation hanafite. Le texte dit simplement « trois qur' » — l'ambiguite est textuellement pertinente et ne doit pas etre resolue a la traduction.

**ce qu'Allah a cree dans leurs matrices** — « ma khalaqa Allahu fi arhamihinna » : la creation divine dans l'uterus designe la grossesse et les cycles. Hamidullah dit la meme chose. La dissimulation ici peut etre soit une fausse declaration de grossesse (pour prolonger l'iddah) soit une negation de grossesse (pour raccourcir l'iddah et se remarier).

**leurs maris sont les plus meritants a les reprendre** — « bu'ulatuhunna ahaqqu bi-raddihinna » : ahaqqu est le comparatif de haqq (droit/merit). Les maris ne sont pas les seuls a avoir un droit mais sont les « plus fondes » — c'est-a-dire que leur droit est prioritaire pendant l'iddah. Hamidullah dit « mieux fondes » — correct.

**s'ils veulent une reconciliation** — « in aradu islahan » : la condition est essentielle. Le droit de reprendre l'epouse est conditionne a l'intention de reconciliation. Cela empeche l'utilisation abusive du droit de raj'ah pour prolonger la dependance de la femme.

**elles ont l'equivalent** — « lahunna mithlu alladhi 'alayhinna » : le principe d'equivalence entre droits et devoirs est affirme. Ce n'est pas une egalite stricte mais une reciprocite — a obligation equivalente correspond un droit equivalent. Hamidullah dit « les femmes ont des droits equivalents a leurs obligations » — correct.

**selon l'usage reconnu** — « bil-ma'rufi » : le ma'ruf est ce qui est reconnu et admis dans la societe — les pratiques equitables. C'est une reference a la norme sociale etablie, pas a une regle rigide.

**les hommes ont un degre sur elles** — « lil-rijali 'alayhinna darajatun » : le texte dit qu'il y a une darajah (un degre) — pas une superiorite absolue, pas une domination, mais un echelon differentiel qui s'accompagne de responsabilites (nafaqah, etc.). Hamidullah dit « predominance » — ce mot est plus fort que darajah. Le texte dit simplement « un degre ».

**puissant, sage** — « 'azizun hakimun » : la paire conclut le verset en rappelant que ces regles viennent d'une puissance sage — ni arbitraires, ni faibles.

§CRITIQUE§
Hamidullah traduit « thalatha qurun » par « trois periodes menstruelles » en ajoutant « menstruelles » qui n'est pas dans le texte. Le terme qur' (qurun au pluriel) est deliberement ambigu — les juristes ont debate pendant des siecles si qur' designe les menstrues (haydh) ou la purete (tuhr). Le texte coranique ne tranche pas. Hamidullah adopte l'interpretation hanafite sans le signaler. Une traduction fidelement au texte dirait simplement « trois periodes (qur') ».

Hamidullah traduit « darajatun » par « predominance » — ce mot est excessivement fort. Darajah est un « degre » ou un « rang » — un echelon dans une hierarchie specifique (celle du mariage et du divorce) qui s'accompagne de responsabilites supplementaires. La « predominance » (Hamidullah) ou la « superiorite » (d'autres traducteurs) depasse ce que le texte dit. Le texte dit : un degre, pas une domination.

La condition « in aradu islahan » (s'ils veulent une reconciliation) est souvent minimisee dans les commentaires classiques mais elle est textuellement explicite : le droit de raj'ah (reprendre l'epouse) est conditionne par l'intention de reconciliation. Prendre l'epouse pour lui nuire invalide ce droit. Hamidullah l'exprime correctement mais sans insistance.

L'expression « bil-ma'rufi » (selon l'usage reconnu) qui accompagne l'equivalence droits/devoirs des femmes est importante : elle ancre les droits dans la pratique sociale reconnue — pas dans un absolu abstrait. Cette relativisation au « connu » (ma'ruf) permet une adaptation historique mais aussi une possible limitation aux normes dominantes. C'est une tension textuelle a noter.`,
    segments: [
      { fr: "Les femmes divorcees", pos: "nom", phon: "al-mutallaqatu", arabic: "ٱلْمُطَلَّقَٰتُ", word_key: "tlq", is_particle: false, sense_retenu: "separation/liberation", position: 0 },
      { fr: "attendent pour elles-memes", pos: "verbe", phon: "yatarabbasna bi-anfusihinna", arabic: "يَتَرَبَّصْنَ بِأَنفُسِهِنَّ", word_key: "rbs", is_particle: false, sense_retenu: "attente/guet", position: 1 },
      { fr: "pour elles-memes", pos: "nom", phon: "bi-anfusihinna", arabic: "بِأَنفُسِهِنَّ", word_key: "nfs", is_particle: false, sense_retenu: "ame/soi", position: 2 },
      { fr: "trois", pos: "nom", phon: "thalatha", arabic: "ثَلَٰثَةَ", word_key: "thlth", is_particle: false, sense_retenu: "nombre/trinite", position: 3 },
      { fr: "periodes", pos: "nom", phon: "qurun", arabic: "قُرُوٓءٍ", word_key: "qry", is_particle: false, sense_retenu: "periode/cycle", position: 4 },
      { fr: "il ne leur est pas permis de dissimuler", pos: "verbe", phon: "wa-la yahillu lahunna an yaktumna", arabic: "وَلَا يَحِلُّ لَهُنَّ أَن يَكْتُمْنَ", word_key: "ktm", is_particle: false, sense_retenu: "dissimulation/secret", position: 5 },
      { fr: "ce qu'Allah a cree", pos: "verbe", phon: "ma khalaqa Allahu", arabic: "مَا خَلَقَ ٱللَّهُ", word_key: "khlq", is_particle: false, sense_retenu: "creation/formation", position: 6 },
      { fr: "dans leurs matrices", pos: "nom", phon: "fi arhamihinna", arabic: "فِىٓ أَرْحَامِهِنَّ", word_key: "rhm", is_particle: false, sense_retenu: "uterus/reproduction", position: 7 },
      { fr: "si elles croient", pos: "verbe", phon: "in kunna yu'minna billahi wa-al-yawmi al-akhiri", arabic: "إِن كُنَّ يُؤْمِنَّ بِٱللَّهِ وَٱلْيَوْمِ ٱلْـَٔاخِرِ", word_key: "amn", is_particle: false, sense_retenu: "foi/adhesion", position: 8 },
      { fr: "leurs maris", pos: "nom", phon: "wa-bu'ulatuhunna", arabic: "وَبُعُولَتُهُنَّ", word_key: "bel", is_particle: false, sense_retenu: "parente/famille", position: 9 },
      { fr: "les plus meritants", pos: "adj", phon: "ahaqqu", arabic: "أَحَقُّ", word_key: "hqq", is_particle: false, sense_retenu: "verite/realite", position: 10 },
      { fr: "a les reprendre", pos: "nom", phon: "bi-raddihinna fi dhalika", arabic: "بِرَدِّهِنَّ فِى ذَٰلِكَ", word_key: "rdd", is_particle: false, sense_retenu: "retour/rejet", position: 11 },
      { fr: "s'ils veulent une reconciliation", pos: "nom", phon: "in aradu islahan", arabic: "إِنْ أَرَادُوٓا۟ إِصْلَٰحًا", word_key: "slh", is_particle: false, sense_retenu: "bonte/rectitude", position: 12 },
      { fr: "et elles ont l'equivalent", pos: "nom", phon: "wa-lahunna mithlu alladhi 'alayhinna", arabic: "وَلَهُنَّ مِثْلُ ٱلَّذِى عَلَيْهِنَّ", word_key: "mthl", is_particle: false, sense_retenu: "ressemblance/exemple", position: 13 },
      { fr: "selon l'usage reconnu", pos: "nom", phon: "bil-ma'rufi", arabic: "بِٱلْمَعْرُوفِ", word_key: "erf", is_particle: false, sense_retenu: "connaissance/reconnaissance", position: 14 },
      { fr: "et les hommes ont un degre sur elles", pos: "nom", phon: "wa-lil-rijali 'alayhinna darajatun", arabic: "وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌ", word_key: "drj", is_particle: false, sense_retenu: "degre/rang", position: 15 },
      { fr: "Allah est puissant", pos: "adj", phon: "wa-Allahu 'azizun", arabic: "وَٱللَّهُ عَزِيزٌ", word_key: "ezz", is_particle: false, sense_retenu: "puissance/gloire", position: 16 },
      { fr: "sage", pos: "adj", phon: "hakimun", arabic: "حَكِيمٌ", word_key: "hkm", is_particle: false, sense_retenu: "sagesse", position: 17 }
    ],
    vwa: [
      {
        word_key: "tlq",
        position: 0,
        sense_chosen: "separation/liberation",
        analysis_axes: {
          sense_chosen: "separation/liberation",
          concept_chosen: "Separation/Liberation",
          concepts: {
            "Separation/Liberation": {
              status: "retenu",
              senses: ["divorcer", "liberer", "lacher", "separer", "repudier"],
              proof_ctx: "Le mot al-mutallaqatu est un participe passif feminin pluriel de la racine t-l-q. Le Lane's donne : lacher, liberer, laisser aller, divorcer. Al-mutallaqah est la femme qui a ete lachee — liberee du lien matrimonial. La Form II (tallaqtu = je divorce) est intensive. Le pluriel al-mutallaqatu designe l'ensemble des femmes divorcees comme categorie juridique. La racine t-l-q exprime a la fois la liberation physique (lacher une corde, liberer un prisonnier) et la dissolution du lien matrimonial.",
              axe1_verset: "Les femmes divorcees (al-mutallaqatu) sont le sujet du verset 228. Elles ne sont pas simplement des individus mais une categorie juridique — le verset pose les regles qui s'appliquent a cette categorie. La separation (talaq) ouvre une periode transitoire (iddah) pendant laquelle des droits et des devoirs specifiques s'appliquent.",
              axe2_voisins: "Le verset 226 parlait du serment d'abstention (ilah) et le verset 227 du divorce comme resolution. Le verset 228 prolonge directement le verset 227 en posant les regles applicables apres le talaq. La sequence 226-228 forme un bloc coherent sur la dissolution du mariage.",
              axe3_sourate: "La racine t-l-q est centrale dans la section matrimoniale de la sourate al-Baqarah (versets 226-242). Elle revient en 2:229 (talaq) et 2:230-231 (raj'ah et talaq definitif). Cette section est la plus longue legislation matrimoniale du Coran.",
              axe4_coherence: "La racine t-l-q apparait environ 14 fois dans le Coran. Le talaq est l'une des grandes institutions juridiques islamiques — sa legislation occupe plusieurs sourates (al-Baqarah, al-Talaq, al-Ahzab). La separation est concue comme une liberation — pas comme une punition — ce qui explique le choix de la racine t-l-q.",
              axe5_frequence: "Pour le khalifa, la legislation du divorce protege les deux parties. La separation n'est pas une rupture sans regles mais un processus encadre — l'iddah protege les droits de la femme et de l'enfant eventuel, le droit de raj'ah permet la reconciliation."
            }
          }
        }
      },
      {
        word_key: "rbs",
        position: 1,
        sense_chosen: "attente/guet",
        analysis_axes: {
          sense_chosen: "attente/guet",
          concept_chosen: "Attente/Guet",
          concepts: {
            "Attente/Guet": {
              status: "retenu",
              senses: ["attendre", "guetter", "s'observer", "s'abstenir en observant", "attente vigilante"],
              proof_ctx: "Le verbe yatarabbasna est un inaccompli Form V avec nun du feminin pluriel de la racine r-b-s. Le Lane's donne : attendre, guetter, observer avec attention, epier. La Form V (tafaʿʿala) est reflexive — yatarabbasna signifie « elles s'observent elles-memes / elles attendent en s'observant ». Ce n'est pas une attente passive (intizara) mais une observation active de sa propre condition. La racine r-b-s evoque le guetteur qui surveille avec attention.",
              axe1_verset: "L'attente (yatarabbasna) des femmes divorcees est qualifiee par « bi-anfusihinna » (pour/par elles-memes). Ce n'est pas une contrainte imposee de l'exterieur mais une observation de soi — elles s'observent dans leur corps (cycles, grossesse eventuelle). L'iddah est fondamentalement une periode d'observation biologique et de suspension des decisions.",
              axe2_voisins: "Le verset 226 mentionnait un delai (arba'ata ashhurin = quatre mois) pour le serment d'abstention. Le verset 228 mentionne trois quru' pour l'iddah du talaq. Les deux periodes ont le meme principe : suspendre et observer avant de conclure definitvement.",
              axe3_sourate: "La racine r-b-s en Form V apparait aussi en 2:103 (« law kanu yatarabbasuna » = s'ils avaient patiente). Dans les deux cas, la Form V reflexive exprime une attente active qui concerne le sujet lui-meme.",
              axe4_coherence: "La racine r-b-s dans le sens d'attente active est presente dans le Coran. Cette attente n'est pas une passivite mais une veille — le sujet est actif dans son observation. L'iddah comme periode de r-b-s (guet/observation) exprime que la femme n'est pas passive mais se surveille et s'observe.",
              axe5_frequence: "Pour le khalifa, l'iddah comme periode d'attente vigilante est une institution de prudence. On n'agit pas avant d'avoir observe, verifie, attendu. Ce principe d'attente avant la decision definitive est un modele de gouvernance."
            }
          }
        }
      },
      {
        word_key: "nfs",
        position: 2,
        sense_chosen: "ame/soi",
        analysis_axes: {
          sense_chosen: "ame/soi",
          concept_chosen: "Ame/Etre",
          concepts: {
            "Ame/Etre": {
              status: "retenu",
              senses: ["soi-meme", "personne", "etre", "ame", "individu"],
              proof_ctx: "Le nom anfusihinna est le pluriel de nafs avec suffixe feminin pluriel. Le Lane's donne pour nafs : ame, soi-meme, personne, individu, etre. « Bi-anfusihinna » = pour/par elles-memes. La preposition bi indique ici l'instrument ou le beneficiaire de l'attente. L'attente porte sur leur propre personne — c'est une auto-observation. Le nafs ici n'est pas l'ame spirituelle mais le soi concret.",
              axe1_verset: "Le nafs (soi) dans « bi-anfusihinna » specifie que l'attente est personnelle et corporelle — c'est leur propre corps qu'elles observent (les cycles, la grossesse eventuelle). La dimension corporelle du nafs (corps/soi) est ici predominante sur la dimension spirituelle.",
              axe2_voisins: "Le verset 223 parlait du corps de la femme comme champ (harth) — une metaphore agricole. Le verset 228 parle du nafs (soi/corps) et de l'arham (matrices) — les dimensions corporelles sont au centre de cette legislation.",
              axe3_sourate: "La racine n-f-s apparait de nombreuses fois dans la sourate al-Baqarah. En 2:48, 2:54, 2:85, 2:286, etc. Le nafs est l'etre humain dans sa globalite — corps et ame. Ici le sens corporel (soi physique) est contextuel.",
              axe4_coherence: "La racine n-f-s apparait environ 295 fois dans le Coran. Le nafs est un des concepts les plus riches du Coran — ame, soi, personne, vie. La polysemie de nafs est intentionnelle : l'attente porte sur l'etre complet de la femme.",
              axe5_frequence: "Pour le khalifa, l'attention a soi (bi-nafsihi) est un principe de bonne gouvernance. Observer sa propre condition avant d'agir — ne pas se precipiter — est une vertu."
            },
            "Corps/Anatomie": {
              status: "probable",
              senses: ["corps", "physique", "anatomie"],
              proof_ctx: "Dans ce contexte (iddah, cycles menstruels, grossesse), le nafs designe le soi corporel — c'est le corps de la femme qu'elle observe. La dimension anatomique est presente.",
              axe1_verset: "L'attente « bi-anfusihinna » est liee a l'observation du ventre (arhamihinna) — la dimension corporelle du nafs est contextuelle.",
              axe2_voisins: "Le verset suivant parle de l'arham (matrices) — le corps est au centre du passage.",
              axe3_sourate: "Le nafs comme corps physique est un sens secondaire mais present dans le Coran.",
              axe4_coherence: "Le sens « corps » est derive du sens principal « soi/personne » — le soi incarne.",
              axe5_frequence: "Pour le khalifa, le soi corporel est le premier domaine de gouvernance de soi."
            }
          }
        }
      },
      {
        word_key: "thlth",
        position: 3,
        sense_chosen: "nombre/trinite",
        analysis_axes: {
          sense_chosen: "nombre/trinite",
          concept_chosen: "Nombre/Trinite",
          concepts: {
            "Nombre/Trinite": {
              status: "retenu",
              senses: ["trois", "nombre trois", "troisieme", "triple"],
              proof_ctx: "Le mot thalatha est le nombre cardinal trois, de la racine th-l-th. Le Lane's donne : trois, le nombre trois. Thalatha est ici en etat construit gouvernant le nom qurun (pluriel). Le nombre trois est precis et definitif — il delimite la duree de l'iddah.",
              axe1_verset: "Le nombre trois (thalatha) delimite l'iddah des femmes divorcees : trois periodes (qurun). Ce nombre est a la fois pratique (assez long pour etablir l'etat de grossesse) et raisonnable (pas indefiniment long). La precision numerique est caracteristique de la legislation coranique.",
              axe2_voisins: "Le verset 226 mentionnait quatre mois (arba'ata ashhurin) pour le serment d'abstention. Le verset 228 donne trois periodes pour l'iddah du talaq revocable. Le verset 234 donnera quatre mois et dix jours pour l'iddah du veuvage. Les nombres sont differencies selon les situations.",
              axe3_sourate: "Le nombre trois (thalatha) est present dans la sourate al-Baqarah en relation avec le talaq : trois periodes (228), trois divorces maximaux (229). La triplicite structure la legislation du divorce.",
              axe4_coherence: "La racine th-l-th dans son sens numerique est precise et sans ambiguite. Le nombre trois dans le droit islamique du divorce a une portee juridique majeure : trois talaq prononces constituent un divorce definitif.",
              axe5_frequence: "Pour le khalifa, les delimitations numeriques dans la loi sont des principes de securite juridique. Elles evitent l'arbitraire et protegent les droits en fixant des durees precises."
            }
          }
        }
      },
      {
        word_key: "qry",
        position: 4,
        sense_chosen: "periode/cycle",
        analysis_axes: {
          sense_chosen: "periode/cycle",
          concept_chosen: "Lecture/Recitation",
          concepts: {
            "Lecture/Recitation": {
              status: "rejete",
              senses: ["lire", "reciter", "lecture"],
              proof_ctx: "Le word_key qry peut renvoyer a la racine q-r-y (etablissement humain / lecture). Mais le mot qurun ici est de la racine q-r-' (avec hamza finale), pas q-r-y. La racine q-r-' est distincte. La lecture/recitation n'a aucun rapport avec le contexte du divorce.",
              axe1_verset: "Le sens de quru' ici est clairement lie aux cycles biologiques (menstruels ou de purete), pas a la lecture.",
              axe2_voisins: "Aucun voisinage ne suggere la lecture ou la recitation.",
              axe3_sourate: "La racine q-r-' (lire/reciter) est presente en al-Baqarah mais dans des contextes totalement differents.",
              axe4_coherence: "Le rejet de 'lecture/recitation' est total — aucune pertinence contextuelle.",
              axe5_frequence: "Pour le khalifa, la precision lexicale est essentielle : qurun est de q-r-', pas q-r-y."
            },
            "Periode/Cycle": {
              status: "retenu",
              senses: ["periode", "cycle", "qur'", "menstrues", "purete", "cycle feminin"],
              proof_ctx: "Le nom qurun est le pluriel de qar'/qur', de la racine q-r-'. Le Lane's donne deux sens : 1) les menstrues (haydh) — selon les Hanafites et Hanbalites, 2) la periode de purete (tuhr) — selon les Malikites et Chafiites. Le terme est donc techniquement ambigu. La racine q-r-' exprime la notion d'assemblement, de regroupement — le cycle est une periode qui se rassemble et s'accomplit. Le pluriel qurun (ou quru') est le pluriel brise de qar'/qur'.",
              axe1_verset: "Les trois qurun constituent la duree de l'iddah. Pendant ces trois cycles, la femme s'observe (yatarabbasna bi-anfusihinna) et ne dissimule pas l'etat de son ventre. Le qur' est donc fondamentalement une mesure de temps biologique — un cycle du corps feminin.",
              axe2_voisins: "Le verset 228 parle de l'arham (matrices) — la dimension biologique est dominante. Le qur' comme cycle biologique (menstrues ou purete) s'inscrit dans ce cadre corporel.",
              axe3_sourate: "La racine q-r-' dans le sens de « cycle/periode » est specifique a la legislation du mariage et du divorce. Ce n'est pas le meme q-r-' que dans iqra' (lis !) de la sourate al-'Alaq.",
              axe4_coherence: "L'ambiguite de qur' (menstrues vs purete) est une realite lexicale reconnue par les grammairiens et juristes arabes depuis l'epoque classique. Le Coran emploie deliberement un terme qui englobe les deux — imposer une traduction unique serait ajouter au texte.",
              axe5_frequence: "Pour le khalifa, l'ambiguite textuelle du qur' a engendre la diversite juridique des ecoles. Cette diversite est legitime — le texte ne tranche pas. Le legislateur contemporain doit connaitre cette ambiguite pour comprendre la diversite des avis juridiques."
            }
          }
        }
      },
      {
        word_key: "ktm",
        position: 5,
        sense_chosen: "dissimulation/secret",
        analysis_axes: {
          sense_chosen: "dissimulation/secret",
          concept_chosen: "Dissimulation/Secret",
          concepts: {
            "Dissimulation/Secret": {
              status: "retenu",
              senses: ["dissimuler", "cacher", "taire", "garder secret", "occulter"],
              proof_ctx: "Le verbe yaktumna est un inaccompli avec nun du feminin pluriel de la racine k-t-m. Le Lane's donne : dissimuler, cacher, taire, garder secret, occulter. Le katm est la dissimulation — garder quelque chose cache que les autres ont le droit ou le besoin de connaitre. La construction « la yahillu lahunna an yaktumna » = il ne leur est pas licite de dissimuler.",
              axe1_verset: "La dissimulation (yaktumna) interdite porte sur « ce qu'Allah a cree dans leurs matrices » — c'est-a-dire la grossesse ou l'etat menstruel. Cette dissimulation pourrait permettre a la femme soit de prolonger artificellement l'iddah (en pretendant une grossesse) soit de la raccourcir (en niant une grossesse). L'interdiction protege le droit du mari a la reconciliation et le droit de l'enfant a une paternite etablie.",
              axe2_voisins: "Le verset 42 parlait de ne pas couvrir la verite (la talbisu al-haqqa). Le verset 146 parlait de dissimulation (yaktumuna) de la verite par les gens du Livre. En 2:283, la dissimulation du temoignage est interdite. Le katm (dissimulation) est un theme recurrent de la sourate.",
              axe3_sourate: "La racine k-t-m apparait plusieurs fois dans la sourate al-Baqarah dans des contextes variees de dissimulation : dissimulation du temoignage (2:283), dissimulation de la Revelation (2:42, 2:146, 2:159, 2:174). La dissimulation de l'etat du ventre (2:228) s'inscrit dans ce theme plus large : on ne dissimule pas ce que Dieu sait et ce que les droits des autres requierent.",
              axe4_coherence: "La racine k-t-m apparait environ 17 fois dans le Coran. Le katm (dissimulation) est toujours presente negativement — c'est une faute morale et sociale. Dieu est Al-Khabir (l'Informe) — rien n'est cache a Lui, donc dissimuler est aussi theologique que juridiquement fautif.",
              axe5_frequence: "Pour le khalifa, l'interdiction de la dissimulation dans les actes juridiques est un principe de bonne gouvernance. Les declarations d'etat civil, les temoignages, les declarations patrimoniales — tout doit etre sincere. La dissimulation corrompt la justice."
            }
          }
        }
      },
      {
        word_key: "khlq",
        position: 6,
        sense_chosen: "creation/formation",
        analysis_axes: {
          sense_chosen: "creation/formation",
          concept_chosen: "Creation/Formation",
          concepts: {
            "Creation/Formation": {
              status: "retenu",
              senses: ["creer", "former", "produire", "creation divine", "donner une forme"],
              proof_ctx: "Le verbe khalaqa est un accompli de la racine kh-l-q. Le Lane's donne : creer, former, donner une forme, produire du neant. Khalaqa est specifiquement la creation divine — seul Allah est le khaliq (createur). « Ma khalaqa Allahu fi arhamihinna » = ce qu'Allah a cree dans leurs matrices. L'attribution de la creation a Allah souligne que le contenu de l'uterus (grossesse, cycle) est d'origine divine.",
              axe1_verset: "La creation divine (khalaqa Allahu) dans les matrices designe ce que Dieu a place dans l'uterus — la vie, le cycle, la grossesse. En attribuant cela a la creation divine, le verset sacralise l'honnete declaration de l'etat du ventre : dissimuler c'est cacher une oeuvre de Dieu.",
              axe2_voisins: "Le verset 21 mentionnait « Il vous a crees » (khalaqakum). Le verset 117 mentionnait la creation du ciel et de la terre (khalaqa al-samawati wa-al-ard). Le verset 228 applique khlq a la creation dans l'uterus — une application specifique et concrete de la creation divine.",
              axe3_sourate: "La racine kh-l-q est tres frequente dans la sourate al-Baqarah. Chaque mention de la creation divine renforce la dependance de l'humain envers Dieu. Ici, la creation dans l'uterus (grossesse, vie) est l'oeuvre de Dieu — l'humain ne peut pas en disposer arbitrairement.",
              axe4_coherence: "La racine kh-l-q apparait environ 261 fois dans le Coran. La creation est le domaine exclusif de Dieu — aucune creature n'est un khaliq au sens propre. Attribuer le contenu de l'uterus a la creation divine lui confere un statut sacre.",
              axe5_frequence: "Pour le khalifa, reconnaitre la creation divine dans les corps et les cycles naturels est un fondement ethique. Le khalifa protege ce que Dieu a cree — la vie dans le ventre, les liens de famille, les cycles naturels."
            }
          }
        }
      },
      {
        word_key: "rhm",
        position: 7,
        sense_chosen: "uterus/reproduction",
        analysis_axes: {
          sense_chosen: "uterus/reproduction",
          concept_chosen: "Uterus/Reproduction",
          concepts: {
            "Uterus/Reproduction": {
              status: "retenu",
              senses: ["uterus", "matrice", "ventre", "organe reproducteur", "arham"],
              proof_ctx: "Le nom arhamihinna est le pluriel de rahim avec suffixe feminin pluriel. Le Lane's donne pour rahim : uterus, matrice — puis par extension semantique : lien de parente (rham, arhami), misericorde (rahma). Le sens premier et etymologique de rahim est anatomique : l'uterus, la matrice. Dans ce contexte (grossesse, cycles, iddah), le sens anatomique est incontestable.",
              axe1_verset: "Les matrices (arhamihinna) sont le lieu de la creation divine (ma khalaqa Allahu fi arhamihinna). L'uterus est ici traite comme un espace sacre — ce qu'il contient est oeuvre de Dieu. La dissimulation de l'etat de l'uterus est une faute car elle cache une information decisive pour les droits (paternite, duree de l'iddah).",
              axe2_voisins: "Le verset 223 traitait du corps de la femme comme champ (harth). Le verset 228 traite de l'uterus (arham) comme lieu de la creation divine. Les deux versets considerent le corps feminin du point de vue de la reproduction et des droits qui y sont attaches.",
              axe3_sourate: "La racine r-h-m dans son sens anatomique (uterus) est presente en 2:228. Dans son sens de misericorde (rahma), la meme racine est omnipresente dans la sourate (bismillah al-rahman al-rahim). La polysemie de r-h-m (uterus/parente/misericorde) reflete une conception ou la misericorde et le lien uterin sont etymologiquement lies.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran sous diverses formes (rahman, rahim, rahma, arham). Le sens d'uterus (arham) est present dans plusieurs versets legislatifs. La connexion etymologique entre rahim (uterus) et rahma (misericorde) est consciente dans la tradition linguistique arabe.",
              axe5_frequence: "Pour le khalifa, la protection des arham (matrices, liens de parente) est une obligation centrale. L'iddah protege l'arham — elle garantit que l'etat du ventre est etabli avant toute nouvelle union. C'est une protection de la filiation et de la parente."
            },
            "Parente/Lien familial": {
              status: "probable",
              senses: ["parente", "lien uterin", "famille", "liens de sang"],
              proof_ctx: "Le rahim comme lien de parente (arham = parents, famille par le sang) est un sens etabli et tres frequent dans la tradition arabe. Ici, le contexte anatomique est predominant mais le lien familial est implique — l'iddah protege les liens de parente (filiation).",
              axe1_verset: "La protection de l'arham (uterus) dans l'iddah vise aussi la protection des arham (liens de parente) — etablir la filiation est proteger les liens de famille.",
              axe2_voisins: "Le verset 27 mentionnait la rupture des liens de parente (arham) comme faute. Les deux usages de rhm dans la sourate — anatomique (228) et moral (27) — s'eclairent mutuellement.",
              axe3_sourate: "Dans la sourate, les arham comme liens de famille apparaissent dans les versets sur la parente et le droit successoral.",
              axe4_coherence: "L'etymologie lie les deux sens : l'arham physique (uterus) est le lieu d'ou nait l'arham moral (la parente). Les deux sens coexistent consciemment.",
              axe5_frequence: "Pour le khalifa, proteger les arham (l'uterus/la parente) est une seule et meme obligation — proteger la vie et les liens."
            }
          }
        }
      },
      {
        word_key: "amn",
        position: 8,
        sense_chosen: "foi/adhesion",
        analysis_axes: {
          sense_chosen: "foi/adhesion",
          concept_chosen: "Foi/Adhesion",
          concepts: {
            "Foi/Adhesion": {
              status: "retenu",
              senses: ["croire", "foi", "adhesion", "confiance", "croyance sincere"],
              proof_ctx: "Le verbe yu'minna est un inaccompli avec nun du feminin pluriel de la racine a-m-n (Form IV : amana = croire). Le Lane's donne pour Form IV a-m-n : croire, avoir foi, faire confiance. « In kunna yu'minna billahi wa-al-yawmi al-akhiri » = si elles croient en Allah et au Jour Dernier. La foi ici est la condition morale qui fonde l'obligation de ne pas dissimuler — une croyante sincere ne peut pas mentir sur l'etat de son ventre.",
              axe1_verset: "La foi (yu'minna billahi wa-al-yawmi al-akhiri) est la condition qui rend l'interdiction de dissimulation moralement contraignante. Ce n'est pas seulement une regle juridique — c'est une exigence de l'iman. La croyante qui dissimule se contredirait elle-meme : elle dit croire en Dieu qui sait tout et au Jugement dernier, et elle dissimule une realite que Dieu connait.",
              axe2_voisins: "La formule « billahi wa-al-yawmi al-akhiri » (en Allah et au Jour Dernier) est une formule coranique recurrente qui designe la foi complete. Elle apparait souvent pour introduire des obligations morales — la foi est le fondement de l'ethique.",
              axe3_sourate: "La racine a-m-n est omnipresente dans la sourate al-Baqarah — c'est la sourate de la foi versus la mecreance. La foi (iman) est la premisse de toutes les obligations legislatives de la sourate. Les regles du mariage et du divorce (228-242) s'adressent specifiquement aux croyants.",
              axe4_coherence: "La racine a-m-n apparait environ 537 fois dans le Coran. L'iman est le fondement de l'ethique coranique — toutes les obligations derivent de la foi. La condition « in kunna yu'minna » rappelle que les regles sont des consequences de la foi, pas des contraintes extravagantes.",
              axe5_frequence: "Pour le khalifa, la foi (iman) est le fondement de la gouvernance juste. Les lois ne sont pas simplement des contraintes exterieures mais l'expression de valeurs internes — le croyant obeit parce qu'il croit, pas seulement parce qu'il y est force."
            }
          }
        }
      },
      {
        word_key: "bel",
        position: 9,
        sense_chosen: "parente/famille",
        analysis_axes: {
          sense_chosen: "parente/famille",
          concept_chosen: "Parente/Famille",
          concepts: {
            "Parente/Famille": {
              status: "retenu",
              senses: ["mari", "maris", "epoux", "seigneur du foyer", "ba'l"],
              proof_ctx: "Le nom bu'ulatuhunna est le pluriel de ba'l avec suffixe feminin pluriel. Le Lane's donne pour ba'l : mari, seigneur, maitre. Ba'l designe le mari avec une connotation d'autorite domestique. Bu'ula est le pluriel brise de ba'l — « leurs maris ». Le suffixe hunna (feminin pluriel) renvoie aux femmes divorcees. Leurs maris = les hommes qui etaient leurs epoux et qui ont prononce le talaq.",
              axe1_verset: "Les maris (bu'ulatuhunna) sont declares les plus meritants (ahaqqu) a reprendre leurs epouses pendant l'iddah. Ce droit (raj'ah) appartient en priorite au mari — pas a d'autres membres de la famille, pas a la femme. C'est un droit exclusif conditionne par l'intention de reconciliation.",
              axe2_voisins: "Le verset 223 parlait du corps de la femme dans le mariage. Le verset 228 parle du droit du mari pendant l'iddah. Les deux versets definissent le statut du mari dans la relation matrimoniale.",
              axe3_sourate: "Le terme ba'l (mari) apparait dans la sourate al-Baqarah en 2:228. Le mot plus courant pour mari est zawj — ba'l est plus ancien et porte une connotation d'autorite. La distinction lexicale est pertinente.",
              axe4_coherence: "Le mot ba'l (mari) est present dans plusieurs langues semitiques. En arabe classique, ba'l designe a la fois le mari et le seigneur (d'une region, d'un dieu). Le pluriel bu'ula est specifique au sens matrimonial.",
              axe5_frequence: "Pour le khalifa, le droit du mari (raj'ah) pendant l'iddah est un droit conditionnel — il ne s'exerce que si l'intention est la reconciliation. Ce droit protege le lien matrimonial mais n'est pas absolu."
            },
            "Posteriorite/Continuation": {
              status: "rejete",
              senses: ["apres", "posteriorite", "ensuite"],
              proof_ctx: "Le concept 'Posteriorite/Continuation' associe au word_key bel n'a aucun rapport avec bu'ulatuhunna (leurs maris). Ce sens derive peut-etre d'une homonymie ou d'un autre usage de la racine. Dans ce contexte matrimonial, seul le sens de 'mari/ba'l' est pertinent.",
              axe1_verset: "Aucun sens de 'apres' ou 'continuation' n'est pertinent pour bu'ulatuhunna dans ce verset.",
              axe2_voisins: "Le contexte du verset est uniquement matrimonial.",
              axe3_sourate: "Aucun usage de bel dans le sens 'posteriorite' n'est atteste dans ce contexte.",
              axe4_coherence: "Le rejet est total.",
              axe5_frequence: "Pour le khalifa, la precision lexicale exige de ne pas confondre ba'l (mari) avec d'autres homophones."
            }
          }
        }
      },
      {
        word_key: "hqq",
        position: 10,
        sense_chosen: "verite/realite",
        analysis_axes: {
          sense_chosen: "verite/realite",
          concept_chosen: "Obligation/Necessite",
          concepts: {
            "Obligation/Necessite": {
              status: "retenu",
              senses: ["plus meritant", "plus fonde en droit", "plus digne", "plus ayant-droit", "ahaqq"],
              proof_ctx: "Le mot ahaqqu est le comparatif de haqiq / haqq, de la racine h-q-q. Le Lane's donne pour haqq : verite, realite, droit, obligation, ce qui est du. « Ahaqqu » est le comparatif elative — plus digne de droit, plus fonde, plus meritant. « Bu'ulatuhunna ahaqqu bi-raddihinna » = leurs maris sont plus fondes (en droit) a les reprendre. Le concept d'obligation/necessite est pertinent car ahaqq exprime un droit prioritaire — une obligation de justice.",
              axe1_verset: "Le comparatif ahaqqu (plus meritant en droit) designe la priorite du droit du mari sur celui d'autres parties eventuelles pendant l'iddah. Ce n'est pas que le mari soit le seul ayant un droit mais il a le droit prioritaire — il est ahaqq (plus fonde que les autres).",
              axe2_voisins: "Le verset 217 utilisait la racine h-q-q dans « la fitna est plus grave que le meurtre » (akbaru min al-qatl). L'usage comparatif de la racine pour exprimer une priorite est regulier dans le Coran.",
              axe3_sourate: "La racine h-q-q est presente dans la sourate al-Baqarah dans de nombreux contextes : verite (haqq), droit (haqq), obligation (haqq). La polysemie de haqq (verite/droit/obligation) est fondamentale dans le Coran.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. Le haqq est a la fois la verite ontologique et le droit juridique — les deux sens sont inseparables dans la vision coranique : le droit est fonde dans la realite.",
              axe5_frequence: "Pour le khalifa, le haqq (droit) du mari pendant l'iddah est un droit fonde dans la realite de la relation matrimoniale. Ce droit n'est pas arbitraire — il est ahaqq (plus fonde en verite) que tout autre pretention."
            },
            "Verite/Realite": {
              status: "probable",
              senses: ["vrai", "reel", "juste", "realite", "haqq"],
              proof_ctx: "La racine h-q-q exprime fondamentalement la verite et la realite. Ahaqq comme comparatif exprime ce qui est le plus vrai/reel/juste — le mari a le droit le plus reel sur la reprise de sa femme.",
              axe1_verset: "Ahaqq exprime a la fois le droit et la justice — ce qui est le plus fonde en verite.",
              axe2_voisins: "La sequence haqq (verite/droit) traverse tout le Coran.",
              axe3_sourate: "Dans la sourate, haqq exprime la verite divine qui fonde le droit humain.",
              axe4_coherence: "Les deux sens (verite et droit) sont inseparables dans h-q-q.",
              axe5_frequence: "Pour le khalifa, la verite (haqq) fonde le droit (haqq) — l'un ne va pas sans l'autre."
            }
          }
        }
      },
      {
        word_key: "rdd",
        position: 11,
        sense_chosen: "retour/rejet",
        analysis_axes: {
          sense_chosen: "retour/rejet",
          concept_chosen: "Retour/Rejet",
          concepts: {
            "Retour/Rejet": {
              status: "retenu",
              senses: ["retourner", "reprendre", "retour", "raj'ah", "reinsertion", "reintegration"],
              proof_ctx: "Le nom raddihinna est un madar de la racine r-d-d avec suffixe feminin pluriel. Le Lane's donne pour radd : retourner, renvoyer, rejeter, reprendre, reintegrer. « Bi-raddihinna » = a les reprendre / a les retourner (dans le mariage). Le radd ici est positif — c'est le retour au mariage, la reintegration de l'epouse. C'est l'acte de raj'ah (retour/reprise) qui annule le talaq pendant l'iddah.",
              axe1_verset: "Le radd (reprendre/retourner) designe l'acte par lequel le mari reprend son epouse pendant l'iddah — c'est le raj'ah. Cet acte est le droit le plus fonde (ahaqqu bi-raddihinna) du mari. Il annule l'effet du talaq et restaure le mariage. La condition est l'intention de reconciliation (islah).",
              axe2_voisins: "Le verset 229 parlera du droit de reprendre (raj'ah) deux fois avant le talaq definitif. Le radd de 2:228 prefigure le raj'ah de 2:229. Les deux passages forment un systeme coherent sur la reprise.",
              axe3_sourate: "La racine r-d-d dans le sens de « retour / reprendre » est presente dans le contexte matrimonial (2:228, 2:229, 2:232). Le radd peut aussi signifier « rejeter » dans d'autres contextes (2:85, 2:217) — mais ici le sens est clairement positif : reprendre, reintegrer.",
              axe4_coherence: "La racine r-d-d apparait environ 86 fois dans le Coran. Le radd (retour/reprise) dans le contexte du mariage est specifique a la section 2:228-242. C'est l'institution du raj'ah — un des mecanismes centraux du droit matrimonial islamique.",
              axe5_frequence: "Pour le khalifa, le droit de reprise (raj'ah) est un principe de reconciliation. Avant que la separation ne soit definitive, le droit prevoit une periode de reconsideration. C'est un principe de sagesse juridique — ne pas rendre le retour impossible avant d'avoir laisse le temps a la reflexion."
            }
          }
        }
      },
      {
        word_key: "slh",
        position: 12,
        sense_chosen: "bonte/rectitude",
        analysis_axes: {
          sense_chosen: "bonte/rectitude",
          concept_chosen: "Bonte/Rectitude",
          concepts: {
            "Bonte/Rectitude": {
              status: "retenu",
              senses: ["reconciliation", "ameliorer", "remettre en ordre", "islah", "rectification", "reformer"],
              proof_ctx: "Le nom islahan est un madar de la racine s-l-h (Form IV). Le Lane's donne : ameliorer, rectifier, reformer, remettre en ordre, reconcilier. L'islah est la remise en ordre — retablir un bon etat la ou il y a eu rupture. « In aradu islahan » = s'ils veulent une reconciliation/remise en ordre. La Form IV causative (aslaha) signifie faire que quelque chose soit bon/remis en ordre.",
              axe1_verset: "La reconciliation (islahan) est la condition du droit de raj'ah (reprendre l'epouse). Le mari ne peut reprendre son epouse que s'il veut la reconciliation — pas pour lui nuire, prolonger sa dependance ou l'empecher de se remarier. Cette condition moralise le droit juridique : un droit exerce sans la bonne intention est invalide.",
              axe2_voisins: "Le verset 220 utilisait deja islah dans le contexte des orphelins — « islahun lahum khayrun ». Le verset 228 utilise islah dans le contexte du mariage. Les deux emplois montrent que l'islah est le principe de remise en ordre dans les relations humaines.",
              axe3_sourate: "La racine s-l-h est tres frequente dans la sourate al-Baqarah. La paire islah/fasad (remise en ordre / corruption) est centrale. En 2:11-12, les hypocrites pretendent faire l'islah mais font le fasad. En 2:220, l'islah des orphelins est un bien. En 2:228, l'islah du mariage est la condition du droit de raj'ah.",
              axe4_coherence: "La racine s-l-h apparait environ 180 fois dans le Coran. L'islah (reconciliation/remise en ordre) est une des valeurs fondamentales de la legislation coranique des relations humaines. L'islah du mariage signifie restaurer la bonne entente — pas simplement cohabiter.",
              axe5_frequence: "Pour le khalifa, la reconciliation (islah) doit toujours etre recherchee avant la rupture definitive. Le droit de raj'ah conditionne par l'islah montre que la loi prefere la reconciliation a la separation definitive — elle laisse une porte ouverte."
            }
          }
        }
      },
      {
        word_key: "mthl",
        position: 13,
        sense_chosen: "ressemblance/exemple",
        analysis_axes: {
          sense_chosen: "ressemblance/exemple",
          concept_chosen: "Ressemblance/Exemple",
          concepts: {
            "Ressemblance/Exemple": {
              status: "retenu",
              senses: ["equivalent", "pareil", "ressemblant", "analogue", "similaire", "mithlu"],
              proof_ctx: "Le nom mithlu est de la racine m-th-l. Le Lane's donne : semblable, pareil, equivalent, analogue. « Mithlu alladhi 'alayhinna » = l'equivalent de ce qui est sur elles. Le mithlu exprime la ressemblance quantitative — autant que, equivalent a. Ce n'est pas une egalite stricte (musawa) mais une equivalence proportionnelle.",
              axe1_verset: "L'equivalence (mithlu) entre droits et obligations des femmes est le principe central de ce passage. « Lahunna mithlu alladhi 'alayhinna » = elles ont l'equivalent de ce qui leur est du. Le mithlu etablit une reciprocite : a chaque obligation correspond un droit equivalent. Ce principe d'equivalence protege les femmes — ce qu'on exige d'elles doit etre balances par ce qu'elles peuvent exiger.",
              axe2_voisins: "Le verset 229 parlera de la limite du talaq (deux fois). Le verset 228 etablit l'equivalence des droits. Les deux versets ensemble forment un systeme equilibre : la femme a des droits (228) mais le talaq a des limites (229).",
              axe3_sourate: "La racine m-th-l est presente dans la sourate al-Baqarah dans differents contextes : paraboles (amthal), ressemblances, equivalences. En 2:228, le mithlu exprime une equivalence juridique — pas une metaphore.",
              axe4_coherence: "La racine m-th-l apparait environ 170 fois dans le Coran. Le mithlu (equivalent/pareil) est une notion de proportionnalite — ce qui se ressemble, ce qui est de meme valeur. Dans le droit du mariage, l'equivalence droits/devoirs est un principe d'equite.",
              axe5_frequence: "Pour le khalifa, le principe d'equivalence (mithlu) entre droits et obligations est un principe de justice distributive. A obligation equivalente, droit equivalent — c'est la base de toute legislation equitable."
            }
          }
        }
      },
      {
        word_key: "erf",
        position: 14,
        sense_chosen: "connaissance/reconnaissance",
        analysis_axes: {
          sense_chosen: "connaissance/reconnaissance",
          concept_chosen: "Connaissance/Reconnaissance",
          concepts: {
            "Connaissance/Reconnaissance": {
              status: "retenu",
              senses: ["connu", "reconnu", "admis", "usage etabli", "pratique reconnue", "ma'ruf"],
              proof_ctx: "Le nom al-ma'rufi est le participe passif de la racine '-r-f. Le Lane's donne : connaitre, reconnaitre, savoir, etre familier avec. Al-ma'ruf = ce qui est connu, reconnu, admis, l'usage etabli. C'est la norme sociale reconnue — les pratiques equitables que la communaute admet comme justes. Dans le contexte matrimonial, le ma'ruf designe les pratiques etablies de traitement equitable entre epoux.",
              axe1_verset: "L'usage reconnu (al-ma'rufi) est la reference normative pour l'equivalence droits/devoirs des femmes. Les droits des femmes et leurs obligations ne sont pas definis de maniere abstraite mais par reference a ce qui est reconnu comme juste dans la communaute. Le ma'ruf est une norme vivante — ce qui est connu et admis comme bien.",
              axe2_voisins: "Le verset 229 mentionnera aussi « bil-ma'rufi » (selon l'usage reconnu) dans le contexte de la reprise ou du divorce. Le verset 232 aussi. Le ma'ruf est la reference normative recurrente dans toute la section matrimoniale.",
              axe3_sourate: "La racine '-r-f est presente dans la sourate al-Baqarah en 2:228, 229, 231, 232, 233, 234, 235, 236, 237, 240, 241 — elle est la reference normative de toute la section matrimoniale. Le ma'ruf (usage reconnu) est le standard d'equite.",
              axe4_coherence: "La racine '-r-f apparait environ 70 fois dans le Coran. Al-ma'ruf est la norme sociale positive — ce qui est connu et reconnu comme bien. Son contraire est al-munkar (ce qui est nie/rejete comme mal). La paire ma'ruf/munkar est centrale dans l'ethique coranique.",
              axe5_frequence: "Pour le khalifa, le ma'ruf (usage reconnu) est la reference normative de la gouvernance juste. Les lois du khalifa doivent s'appuyer sur ce qui est connu et reconnu comme juste par la communaute — pas sur l'arbitraire ou l'innovation. Le ma'ruf ancre le droit dans la reconnaissance sociale."
            }
          }
        }
      },
      {
        word_key: "drj",
        position: 15,
        sense_chosen: "degre/rang",
        analysis_axes: {
          sense_chosen: "degre/rang",
          concept_chosen: "Degre/Rang",
          concepts: {
            "Degre/Rang": {
              status: "retenu",
              senses: ["degre", "rang", "echelon", "marche", "niveau", "darajah"],
              proof_ctx: "Le nom darajatun est de la racine d-r-j. Le Lane's donne : degre, echelon, rang, marche (d'un escalier), niveau dans une hierarchie. Une darajah est un echelon — un niveau dans une echelle differentielle. Le texte dit « wa-lil-rijali 'alayhinna darajatun » = et pour les hommes sur elles un degre. Le texte ne dit pas « superieur », ni « dominant » — il dit qu'il y a un degre, une marche de difference.",
              axe1_verset: "Le degre (darajatun) des hommes sur les femmes dans ce verset suit immediatement l'affirmation de l'equivalence droits/devoirs (mithlu). La tension est textuelle : d'abord l'equivalence, puis le degre. Ce degre ne contredit pas l'equivalence — il la qualifie. Dans la doctrine classique, la darajah est liee aux responsabilites supplementaires du mari (nafaqah, protection, decision de taj') qui justifient une position differentielle. Le texte ne dit pas que les hommes sont superieurs moralement ou spirituellement — il dit qu'ils ont un degre dans la structure du mariage.",
              axe2_voisins: "Le verset 229 parlera du droit du mari de prononcer le talaq. La darajah de 2:228 est liee a ce droit — c'est le droit de decision dans la dissolution (raj'ah, talaq) qui constitue le degre. La darajah n'est pas une superiorite diffuse mais un droit specifique dans le cadre matrimonial.",
              axe3_sourate: "La racine d-r-j apparait dans la sourate al-Baqarah en 2:228. Dans d'autres contextes, darajat (pluriel) designe les degres dans la foi, dans la recompense divine. La darajah est toujours relative — un degre par rapport a une reference.",
              axe4_coherence: "La racine d-r-j apparait environ 63 fois dans le Coran. Les darajat (degres) dans la recompense divine (4:95, 8:4, etc.) ne sont pas des jugements de valeur intrinsèque mais des positions fonctionnelles. La darajah de 2:228 est de meme nature : une position fonctionnelle dans le cadre du mariage, pas une valeur morale.",
              axe5_frequence: "Pour le khalifa, le degre (darajah) implique une responsabilite supplementaire — celui qui a le degre superieur a des obligations proportionnelles. La darajah du mari dans le mariage s'accompagne de la nafaqah (entretien), de la protection, de la responsabilite de la decision. Ce n'est pas un privilege — c'est une charge."
            }
          }
        }
      },
      {
        word_key: "ezz",
        position: 16,
        sense_chosen: "puissance/gloire",
        analysis_axes: {
          sense_chosen: "puissance/gloire",
          concept_chosen: "Puissance/Gloire",
          concepts: {
            "Puissance/Gloire": {
              status: "retenu",
              senses: ["puissant", "glorieux", "honorable", "invincible", "rare", "aziz"],
              proof_ctx: "L'adjectif 'azizun est un adjectif nominatif de la racine '-z-z. Le Lane's donne : puissant, honorable, rare, glorieux, invincible. Al-'Aziz est un des noms de Dieu — la puissance souveraine qui ne peut etre vaincue. Associe a Al-Hakim (le Sage), il forme la paire puissance/sagesse recurrente dans le Coran.",
              axe1_verset: "La puissance ('aziz) de Dieu conclut le verset en affirmant que la legislation sur le divorce et l'iddah vient d'une puissance qui a le pouvoir de fixer ces regles et de les faire respecter. La puissance divine n'est pas theologique abstraite — elle est la garantie que les droits des femmes et des hommes seront respectes.",
              axe2_voisins: "Le verset 220 concluait aussi sur « 'azizun hakimun ». La formule recurrente signale la fin d'un passage legislatif important. La puissance et la sagesse divines encadrent toute la legislation matrimoniale.",
              axe3_sourate: "La formule « 'azizun hakimun » est une des formules conclusives les plus frequentes de la sourate al-Baqarah. Elle clot de nombreux passages legislatifs. La repetition de cette formule cree une coherence structurelle dans la sourate.",
              axe4_coherence: "La racine '-z-z apparait environ 99 fois dans le Coran. Al-'Aziz est un attribut divin central — la puissance qui ne peut etre vaincue. Associe a Al-Hakim (le Sage), il forme la garantie de la juste gouvernance divine.",
              axe5_frequence: "Pour le khalifa, imiter la paire puissance/sagesse divine est le modele de gouvernance. Le khalifa doit etre puissant pour faire respecter les droits (des femmes, des hommes, des enfants) et sage pour legisler justement. La puissance sans sagesse est tyrannie; la sagesse sans puissance est inefficace."
            }
          }
        }
      },
      {
        word_key: "hkm",
        position: 17,
        sense_chosen: "sagesse",
        analysis_axes: {
          sense_chosen: "sagesse",
          concept_chosen: "Sagesse",
          concepts: {
            "Sagesse": {
              status: "retenu",
              senses: ["sage", "sagesse", "discernement", "prudence", "hakim"],
              proof_ctx: "L'adjectif hakimun est un adjectif nominatif de la racine h-k-m. Le Lane's donne : sage, juge avec sagesse, qui exerce un discernement juste. Al-Hakim est un des noms de Dieu — la sagesse dans les decisions et les commandements. Associe a 'aziz (puissant), il forme la paire puissance/sagesse.",
              axe1_verset: "La sagesse (hakim) de Dieu explique pourquoi la legislation sur l'iddah est ainsi constituee — les trois periodes, l'interdiction de dissimulation, le droit de raj'ah conditionne, l'equivalence droits/devoirs, le degre. Ces regles ne sont pas arbitraires mais proceden d'une sagesse qui tient compte des droits de tous (femme, mari, enfant eventuel).",
              axe2_voisins: "Le verset 220 concluait deja sur « 'azizun hakimun ». La formule conclut a nouveau un passage legislatif. La sagesse divine est la garantie que la legislation est juste et complete.",
              axe3_sourate: "La formule « 'azizun hakimun » est recurrente dans la sourate al-Baqarah. Elle signale la fin des passages legislatifs importants. La sagesse divine (hakim) est la garantie de la pertinence des regles.",
              axe4_coherence: "La racine h-k-m apparait environ 210 fois dans le Coran. Al-Hakim est un des attributs divins les plus frequents — la sagesse divine est la garantie que les commandements divins sont justes et equilibres.",
              axe5_frequence: "Pour le khalifa, aspirer a la sagesse (hikma) dans la legislation est l'idéal. La sagesse du legislateur se mesure a sa capacite a proteger les droits de tous — les plus forts (maris) et les plus vulnerables (femmes enceintes, enfants). La legislation matrimoniale de ce verset est un modele de sagesse legislative."
            },
            "Jugement/Decision": {
              status: "probable",
              senses: ["juger", "decider", "jugement", "autorite"],
              proof_ctx: "La meme racine h-k-m designe a la fois la sagesse et le jugement. Dans la formule 'azizun hakimun, c'est la sagesse attributive qui est active plutot que le jugement specifique. Mais le jugement est implique — le Hakim juge avec sagesse.",
              axe1_verset: "La legislation du divorce est un acte de jugement sage — le Hakim legifere et juge.",
              axe2_voisins: "La sourate utilise yahkumu (juger) dans d'autres versets — le jugement et la sagesse sont lies dans h-k-m.",
              axe3_sourate: "Dans les formules conclusives de la sourate, hakimun designe la sagesse divine qui fonde le jugement.",
              axe4_coherence: "Le Coran utilise hakim principalement dans le sens d'attribut divin de sagesse dans les formules conclusives.",
              axe5_frequence: "Pour le khalifa, sagesse et jugement sont inseparables — la sagesse sans jugement est contemplation, le jugement sans sagesse est arbitraire."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[228];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V228)');

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

  console.log('\n✅ V228 TERMINE');
}
main().catch(console.error);
