const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 163
// verse_id=170, analysis_id=529
// "Et votre divinite est une divinite unique. Pas de
//  divinite sauf Lui, le Tout-Misericordieux, le
//  Misericordieux."
// Verset de transition entre la malediction et les
// signes de la creation.
// =====================================================

const verseData = {
  163: {
    verse_id: 170,
    analysis_id: 529,
    translation_arab: "Et votre divinite est une divinite unique. Pas de divinite sauf Lui, le Tout-Misericordieux, le Misericordieux.",
    full_translation: "Et votre Dieu est un Dieu unique. Pas de divinite a part Lui, le Tout Misericordieux, le Tres Misericordieux.",
    translation_explanation: `§DEMARCHE§
Le verset est une declaration d'unicite divine structuree en deux propositions complementaires. La premiere affirme positivement (votre divinite est une divinite unique) et la seconde affirme negativement puis positivement (pas de divinite sauf Lui). Le nom **ilahukum** est un nom masculin singulier de la racine a-l-h avec pronom suffixe 2MP. Le Lane's donne : divinite, ce qui est adore, ce vers quoi on se tourne avec devotion. Le pronom suffixe « kum » (votre) rattache cette divinite aux interlocuteurs — c'est votre divinite, celle a qui vous devez l'adoration. Le nom **ilahun** est le meme nom mais cette fois indefini (sans pronom ni article). Le Lane's donne les memes sens : divinite, objet d'adoration. L'indefini cree une generalisation : une divinite parmi toutes les divinites possibles — et c'est cette divinite-la qui est unique. L'adjectif **wahidun** est de la racine w-h-d. Le Lane's donne : un, unique, seul, sans semblable. Le mot wahid qualifie la divinite — elle est unique, pas multiple. L'adjectif porte l'idee d'exclusivite absolue : un seul, pas deux, pas trois, pas de partage. La particule de negation **la** suivie du nom **ilaha** a l'accusatif forme la negation de genre (la ilaha = pas de divinite d'aucune sorte). Le Lane's donne pour ilah : divinite. La negation de genre nie l'existence de toute divinite — c'est une negation totale. La particule d'exception **illa** (sauf) reintroduit l'unique exception. Le pronom **huwa** (Lui) est le pronom 3MS independant qui renvoie a la divinite unique mentionnee dans la premiere proposition. Le nom **ar-rahmanu** est un nom defini de la racine r-h-m au schema fa'lan. Le Lane's donne : le Tout-Misericordieux, celui dont la misericorde est immense et englobante. Le schema fa'lan indique une plenitude de la qualite — la misericorde est debordante, elle embrasse tout. Ce nom est exclusivement reserve a Dieu dans le Coran. Le nom **ar-rahimu** est un nom defini de la racine r-h-m au schema fa'il. Le Lane's donne : le Misericordieux, celui qui fait misericorde de maniere continue et deliberee. Le schema fa'il indique une qualite permanente et active — la misericorde est exercee constamment. La distinction entre ar-Rahman et ar-Rahim est que le premier designe l'immensitie de la misericorde (elle couvre tout) et le second designe la constance de son exercice (elle ne cesse jamais).

§JUSTIFICATION§
**votre divinite** — Le sens retenu est « divinite ». Le mot ilahukum designe ce qui recoit l'adoration. L'alternative « adorer » (verbe) est ecartee car le mot est un nom avec pronom possessif, pas un verbe. L'alternative « detresse/perplexite » est ecartee car le contexte est la declaration d'unicite divine, pas un etat emotionnel.

**une divinite** — Le sens retenu est « divinite ». Le mot ilahun est le meme nom a l'indefini. L'indefini generalise : c'est une divinite — et cette divinite est qualifiee d'unique. L'alternative « refuge/protection » est ecartee car le contexte est l'identite de la divinite, pas la recherche de refuge.

**unique** — Le sens retenu est « unique/un ». Le mot wahidun qualifie la divinite. L'alternative « unifier » est ecartee car le mot est un adjectif qualificatif, pas un verbe d'action.

**divinite** (3e occurrence, accusatif) — Le sens retenu est « divinite ». Le mot ilaha est a l'accusatif dans la negation de genre « la ilaha » (pas de divinite). L'alternative « domination/asservir » est ecartee car le mot est un nom dans une negation, pas un verbe de pouvoir.

**le Tout-Misericordieux** — Le sens retenu est « misericorde ». Le mot ar-Rahman au schema fa'lan designe l'immensitie de la misericorde divine. L'alternative « uterus/parente » est ecartee car le contexte est un attribut divin, pas la biologie ou les liens familiaux.

**le Misericordieux** — Le sens retenu est « misericorde ». Le mot ar-Rahim au schema fa'il designe la constance de la misericorde divine. L'alternative « provision/bienfait materiel » est ecartee car le contexte est un attribut divin, pas une realite materielle.

§CRITIQUE§
Les traductions courantes rendent ce verset de facon similaire. Hamidullah donne « Et votre Dieu est un Dieu unique. Pas de divinite a part Lui, le Tout Misericordieux, le Tres Misericordieux ». Notre traduction utilise « divinite » la ou Hamidullah met « Dieu » pour la premiere proposition, car le mot arabe est ilah (divinite) et non le nom propre Allah (Dieu). Le mot ilah designe la position de ce qui recoit l'adoration — c'est un concept plus large que le nom propre. « Sauf Lui » rend illa huwa de maniere directe — Hamidullah donne « a part Lui » qui est equivalent. La difference principale est que nous maintenons « divinite » pour les trois occurrences de la racine a-l-h, ce qui permet de voir la repetition voulue par le texte : votre divinite... une divinite unique... pas de divinite... Le texte martele le mot ilah trois fois pour ancrer l'unicite dans l'esprit.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "votre divinite", pos: "nom", phon: "ilahukum", arabic: "\u0625\u0650\u0644\u064e\u0640\u0647\u064f\u0643\u064f\u0645\u0652", word_key: "alh", is_particle: false, sense_retenu: "divinite", position: 1 },
      { fr: "une divinite", pos: "nom", phon: "ilahun", arabic: "\u0625\u0650\u0644\u064e\u0640\u0647\u064c", word_key: "alh", is_particle: false, sense_retenu: "divinite", position: 2 },
      { fr: "unique", pos: "adjectif", phon: "wahidun", arabic: "\u0648\u064e\u0627\u062d\u0650\u062f\u064c", word_key: "whd", is_particle: false, sense_retenu: "unique", position: 3 },
      { fr: "pas de", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 4 },
      { fr: "divinite", pos: "nom", phon: "ilaha", arabic: "\u0625\u0650\u0644\u064e\u0640\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "divinite", position: 5 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 5.5 },
      { fr: "Lui", phon: "huwa", arabic: "\u0647\u064f\u0648\u064e", is_particle: true, position: 6 },
      { fr: "le Tout-Misericordieux", pos: "nom", phon: "ar-rahmanu", arabic: "\u0671\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0640\u0646\u064f", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 7 },
      { fr: "le Misericordieux", pos: "adjectif", phon: "ar-rahimu", arabic: "\u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u064f", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 8 }
    ],
    words: [
      // alh pos=1 — "votre divinite"
      {
        word_key: "alh", position: 1, sense_chosen: "divinite",
        analysis_axes: {
          sense_chosen: "divinite",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: null,
              axe1_verset: "Le mot ilahukum ouvre le verset en posant le sujet : votre divinite. Le pronom possessif « kum » (votre) cree un lien direct entre la divinite et les interlocuteurs — ce n'est pas une divinite abstraite, c'est celle a qui vous devez l'adoration. Le champ lexical du verset (divinite, unique, pas de divinite, sauf Lui, Tout-Misericordieux, Misericordieux) tourne entierement autour de l'identite divine. Le mot ilah apparait trois fois dans le verset — la premiere occurrence (ilahukum) etablit la relation personnelle : cette divinite est la votre, vous lui appartenez par l'adoration.",
              axe2_voisins: "Le verset 162 parlait de la malediction de Dieu, des anges et de tous les gens sur ceux qui meurent dissimulateurs. Le verset 163 opere un virage : apres la malediction, voici l'affirmation positive de l'unicite divine. Le verset 164 enchainera avec les signes de la creation (cieux, terre, alternance nuit-jour). La divinite du verset 163 est le pont entre la sanction des dissimulateurs et la demonstration par les signes — Dieu est unique, et voici Ses preuves dans la creation.",
              axe3_sourate: "La racine a-l-h est fondamentale dans la sourate al-Baqarah. En 2:133, « votre Dieu et le Dieu de vos peres ». En 2:116, « tout Lui est devot ». Le verset 163 est la declaration d'unicite la plus condensee de la sourate — trois occurrences de ilah dans un seul verset pour marteler l'unicite. La sourate construit progressivement l'argument de l'unicite — des histoires des prophetes aux declarations directes.",
              axe4_coherence: "La racine a-l-h apparait environ 150 fois dans le Coran en dehors du nom propre Allah. La formule « ilahukum ilahun wahid » (votre divinite est une divinite unique) apparait en 16:22, 18:110, 21:108, 41:6. C'est une formule coranique recurrente qui pose l'unicite comme un fait adresse directement aux interlocuteurs. Le Coran utilise cette formule pour ancrer l'unicite dans la relation personnelle — votre divinite, pas une divinite lointaine.",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre sa divinite est le premier pas de la mission. Le mot ilahukum dit « votre divinite » — le khalifa n'est pas libre de choisir sa propre divinite, elle lui est attribuee. La mission du khalifa est fondee sur cette reconnaissance : il y a une divinite, elle est unique, et c'est la votre. Toute la mission decoule de cette declaration initiale."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: null
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: null
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se devouer au culte"],
              proof_ctx: null
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["demeurer", "proteger", "chercher refuge"],
              proof_ctx: null
            }
          }
        }
      },
      // alh pos=2 — "une divinite"
      {
        word_key: "alh", position: 2, sense_chosen: "divinite",
        analysis_axes: {
          sense_chosen: "divinite",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: null,
              axe1_verset: "Le mot ilahun est la deuxieme occurrence de la racine a-l-h dans le verset. Cette fois le mot est indefini (sans pronom ni article) — une divinite, c'est-a-dire parmi toutes les divinites possibles et imaginables, celle-ci est unique. L'indefini dans le predicat (ilahun wahidun) cree une generalisation : ce n'est pas « le dieu unique » mais « une divinite unique » — le texte part du concept abstrait de divinite pour affirmer qu'il n'y en a qu'une. La structure grammaticale (mubtada'-khabar) fait de « ilahukum » le sujet et de « ilahun wahidun » l'attribut — votre divinite EST une divinite unique.",
              axe2_voisins: "Le verset 162 traitait de la permanence dans la malediction pour les dissimulateurs. Le verset 163 repond implicitement a la question : pourquoi cette severite ? Parce que la divinite est unique — la dissimulation est grave car elle porte atteinte a cette unicite. Le verset 164 fournira les preuves de cette unicite dans la creation. L'indefini (ilahun) prepare la demonstration : une divinite unique, et voici les preuves.",
              axe3_sourate: "Dans la sourate al-Baqarah, le concept de divinite est progressivement construit. En 2:21, « adorez votre Seigneur ». En 2:133, les fils de Jacob declarent « nous adorerons ton Dieu et le Dieu de tes peres ». Le verset 163 condense ces declarations en une formule minimale : une divinite unique. La sourate avance du recit historique vers la declaration doctrinale.",
              axe4_coherence: "Le mot ilah a l'indefini dans le predicat (ilahun wahidun) est la forme coranique standard pour la declaration d'unicite. En 16:22, « votre divinite est une divinite unique ». En 21:108, « votre divinite est une divinite unique ». Le Coran repete cette formule comme un refrain doctrinal — l'indefini marque l'universalite du propos : il ne s'agit pas d'un dieu particulier mais du concept meme de divinite reduit a l'unite.",
              axe5_frequence: "Pour la mission du khalifa, l'indefini est significatif : une divinite, parmi toutes les possibilites, est unique. Le khalifa est confronte a de multiples objets d'adoration dans le monde — richesse, pouvoir, opinion publique. Le verset rappelle que parmi tout ce que l'on pourrait adorer, la divinite veritable est une seule. La mission du khalifa exige de discerner la divinite unique parmi les fausses divinites."
            }
          }
        }
      },
      // whd pos=3 — "unique"
      {
        word_key: "whd", position: 3, sense_chosen: "unique",
        analysis_axes: {
          sense_chosen: "unique",
          concept_chosen: "Unicité/Unité",
          concepts: {
            "Unicité/Unité": {
              status: "retenu",
              senses: ["un", "unique", "seul", "unifier"],
              proof_ctx: null,
              axe1_verset: "Le mot wahidun est l'adjectif qui qualifie la divinite — ilahun wahidun, une divinite unique. C'est le mot pivot du verset : toute la structure tourne autour de cette affirmation d'unicite. La premiere proposition affirme que la divinite est unique (wahid), la seconde le confirme par la negation (pas de divinite sauf Lui). Le champ lexical (divinite repete trois fois + unique + negation + exception) cree un martelement de l'unicite par la repetition et la redondance voulue.",
              axe2_voisins: "Le verset 162 montrait la severite divine envers la dissimulation. Le verset 163 pose le fondement de cette severite : la divinite est unique — la dissimulation et l'association sont des atteintes a cette unicite. Le verset 164 montrera les signes de l'unicite dans la creation (un seul ordre cosmique, une seule intelligence derriere les cieux et la terre). L'unicite affirmee dans le verset 163 sera demontree par les signes dans le verset 164.",
              axe3_sourate: "La racine w-h-d apparait dans la sourate al-Baqarah a des moments cles. En 2:133, « un Dieu unique » dans le testament de Jacob. En 2:163, « une divinite unique » dans la declaration doctrinale. La sourate utilise wahid pour marquer les moments ou l'unicite est affirmee solennellement — c'est un mot de credo, pas de recit.",
              axe4_coherence: "La racine w-h-d apparait environ 70 fois dans le Coran. Le mot wahid est l'adjectif de l'unicite divine par excellence — il est inseparable du tawhid (l'affirmation de l'unicite). En 112:1, « dis : Il est Dieu, Un ». En 2:163, l'unicite est affirmee dans le contexte de la relation (votre divinite est unique). Le Coran declare l'unicite sous differents angles — doctrinal, relationnel, cosmologique — mais le mot wahid est toujours le meme.",
              axe5_frequence: "Pour la mission du khalifa, l'unicite est le fondement de la mission. Le khalifa est lieutenant d'un Dieu unique — pas de plusieurs divinites. L'unicite divine implique l'unicite de la mission : il n'y a qu'un seul projet divin pour l'humanite. Le khalifa doit unifier sa vie autour de cette unicite — pas de compartiments, pas de double allegiance. Wahid exige une coherence totale entre la croyance et l'action."
            }
          }
        }
      },
      // alh pos=5 — "divinite" (accusatif, negation de genre)
      {
        word_key: "alh", position: 5, sense_chosen: "divinite",
        analysis_axes: {
          sense_chosen: "divinite",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: null,
              axe1_verset: "Le mot ilaha est la troisieme occurrence de la racine a-l-h dans le verset, cette fois a l'accusatif dans la negation de genre « la ilaha illa huwa » (pas de divinite sauf Lui). La negation de genre (la + nom accusatif indefini) nie l'existence de toute espece de divinite — ce n'est pas « il n'y a pas cette divinite-la » mais « il n'y a aucune divinite d'aucune sorte ». L'exception (illa huwa) reintroduit l'unique realite divine. Les trois occurrences de ilah dans le verset forment une progression : votre divinite (relation) → une divinite unique (qualification) → pas de divinite sauf Lui (negation-exception). Le texte enchaine trois angles pour fermer toute echappatoire logique.",
              axe2_voisins: "La formule « la ilaha illa huwa » reprend la shahada coranique qui traverse tout le texte. Le verset 162 parlait de malediction — le verset 163 affirme que cette malediction vient de Celui qui est la seule divinite. Le verset 164 prouvera cette affirmation par les signes. La negation de genre est le moment le plus radical du verset — elle nie toute alternative et oblige a reconnaitre l'unique exception.",
              axe3_sourate: "La formule « la ilaha illa huwa » apparait en 2:163 et en 2:255 (ayat al-kursi). Ces deux versets sont les deux grandes declarations d'unicite de la sourate al-Baqarah. En 2:255, la formule est suivie des attributs de souverainete (le Vivant, le Subsistant). En 2:163, elle est suivie des attributs de misericorde (le Tout-Misericordieux, le Misericordieux). La sourate presente l'unicite sous deux faces : la souverainete et la misericorde.",
              axe4_coherence: "La formule « la ilaha illa huwa » (ou « la ilaha illa Allah ») apparait environ 30 fois dans le Coran. C'est la formule la plus condensee de l'unicite divine — six mots qui resument toute la doctrine du tawhid. En 3:18, « Dieu atteste qu'il n'y a de divinite que Lui ». En 28:88, « pas de divinite sauf Lui, toute chose perit sauf Sa face ». Le Coran utilise cette formule comme un sceau qui ferme toute discussion sur la multiplicite divine.",
              axe5_frequence: "Pour la mission du khalifa, « pas de divinite sauf Lui » est la declaration qui fonde la mission. Le khalifa ne peut servir qu'un seul maitre — s'il reconnait d'autres divinites (argent, pouvoir, opinion), sa mission est compromise. La negation de genre est absolue : aucune divinite d'aucune sorte n'existe en dehors de Lui. Le khalifa doit vivre cette negation au quotidien en refusant toute idolatrie, meme subtile."
            }
          }
        }
      },
      // rhm pos=7 — "le Tout-Misericordieux" (ar-Rahman)
      {
        word_key: "rhm", position: 7, sense_chosen: "misericorde",
        analysis_axes: {
          sense_chosen: "misericorde",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["misericorde", "pardon", "traiter avec compassion", "dire \"que Dieu te fasse misericorde\"", "se forcer a la compassion", "misericorde reciproque", "demander la misericorde", "le Compatissant", "plus misericordieux", "objet de misericorde", "traite avec beaucoup de compassion"],
              proof_ctx: null,
              axe1_verset: "Le mot ar-rahmanu est le premier des deux attributs de misericorde qui ferment le verset. Apres la negation de genre (pas de divinite sauf Lui), le texte ajoute deux attributs qui identifient cette divinite unique. Le schema fa'lan (raHMaN) indique une plenitude debordante — la misericorde de Dieu n'est pas mesuree, elle est immense et englobante. Le champ lexical du verset (divinite, unique, sauf Lui, Tout-Misericordieux, Misericordieux) montre que l'unicite divine est immediatement associee a la misericorde — Dieu est unique ET misericordieux, les deux ne se separent pas.",
              axe2_voisins: "Le verset 162 parlait de malediction et de chatiment permanent. Le verset 163 repond par la misericorde — la meme divinite qui maudit les dissimulateurs est le Tout-Misericordieux. Ce n'est pas une contradiction mais une complementarite : la malediction vise ceux qui refusent la misericorde. Le verset 164 montrera que les signes de la creation sont eux-memes des manifestations de la misericorde (pluie, subsistance, vents).",
              axe3_sourate: "Le nom ar-Rahman apparait dans la sourate al-Baqarah en 2:163 comme attribut de la divinite unique. La Fatiha (sourate 1) ouvre avec « ar-Rahman ar-Rahim » — la sourate 2 reprend ces memes attributs pour montrer la continuite. Le verset 163 fait echo a la Basmala et a la Fatiha — la misericorde est le premier attribut que Dieu revele apres Son unicite.",
              axe4_coherence: "Le nom ar-Rahman apparait environ 57 fois dans le Coran et est reserve exclusivement a Dieu. En 1:3, il ouvre la Fatiha. En 19:45, Abraham avertit son pere de la punition du Rahman. En 55:1, la sourate ar-Rahman s'ouvre par ce nom. Le Coran traite ar-Rahman comme un quasi-nom propre — il designe Dieu dans Sa dimension de misericorde englobante. Aucune creature ne peut porter ce nom.",
              axe5_frequence: "Pour la mission du khalifa, le Tout-Misericordieux est le mandant de la mission. Le khalifa est lieutenant d'un Dieu dont le premier attribut est la misericorde. Cela signifie que la mission du khalifa doit refleter cette misericorde — il doit agir avec misericorde dans sa gestion de la terre. La misericorde n'est pas une option mais le caractere fondamental de Celui au nom de qui le khalifa agit."
            },
            "Utérus/Reproduction": {
              status: "nul",
              senses: ["uterus", "vulve", "maladie de l'uterus", "uterus gonfle", "chamelle malade post-partum", "sortie de l'uterus"],
              proof_ctx: null
            },
            "Parenté/Lien familial": {
              status: "nul",
              senses: ["lien de parente", "parents par les femmes", "parent interdit au mariage", "sentiment de parente", "connecte par parente"],
              proof_ctx: null
            },
            "Provision/Bienfait matériel": {
              status: "nul",
              senses: ["subsistance", "pluie", "abondance", "prophetie"],
              proof_ctx: null
            },
            "Lieu/Géographie": {
              status: "nul",
              senses: ["La Mecque", "Medine"],
              proof_ctx: null
            },
            "Sens isolé/Outre": {
              status: "nul",
              senses: ["outre abimee"],
              proof_ctx: null
            },
            "Sens isolé/La": {
              status: "nul",
              senses: ["la crainte vaut mieux que la pitie"],
              proof_ctx: null
            }
          }
        }
      },
      // rhm pos=8 — "le Misericordieux" (ar-Rahim)
      {
        word_key: "rhm", position: 8, sense_chosen: "misericorde",
        analysis_axes: {
          sense_chosen: "misericorde",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["misericorde", "pardon", "traiter avec compassion", "dire \"que Dieu te fasse misericorde\"", "se forcer a la compassion", "misericorde reciproque", "demander la misericorde", "le Compatissant", "plus misericordieux", "objet de misericorde", "traite avec beaucoup de compassion"],
              proof_ctx: null,
              axe1_verset: "Le mot ar-rahimu est le second attribut de misericorde, cloturant le verset. Le schema fa'il (raHiM) indique une qualite permanente et active — la misericorde est exercee de maniere constante et deliberee. Alors que ar-Rahman designe l'immensite de la misericorde, ar-Rahim designe sa constance dans l'application. Les deux attributs ensemble montrent que la misericorde divine est a la fois immense dans sa nature et constante dans son exercice. Le verset se ferme sur la misericorde — apres l'unicite et la negation, la derniere image est celle de la tendresse divine.",
              axe2_voisins: "Le verset 162 parlait de malediction permanente (la yukhafffafu 'anhum = on ne leur allegera pas). Le verset 163 ferme sur la misericorde permanente (ar-Rahim, qualite constante). Le contraste est delibere : la permanence du chatiment pour les dissimulateurs face a la permanence de la misericorde pour ceux qui reconnaissent l'unicite. Le verset 164 montrera les signes de cette misericorde dans la creation — la pluie qui fait vivre la terre morte est un acte de rahim.",
              axe3_sourate: "Le mot ar-Rahim apparait dans la Basmala qui ouvre la sourate et en 2:163 comme attribut de la divinite unique. En 2:128, Abraham et Ismail demandent a Dieu de les accepter car Il est « as-Sami' al-'Alim » (l'Audient, le Savant) — mais en 2:163, les attributs choisis sont ceux de la misericorde. La sourate presente les attributs divins selon le contexte — ici, apres la malediction, la misericorde est mise en avant pour rappeler que Dieu n'est pas seulement severe.",
              axe4_coherence: "Le mot ar-Rahim apparait environ 114 fois dans le Coran — dans chaque Basmala et dans de nombreux versets. Contrairement a ar-Rahman qui est exclusif a Dieu, le schema fa'il peut qualifier des creatures (en 9:128, le Prophete est decrit comme « ra'ufun rahim » — compatissant, misericordieux). Mais quand ar-Rahim est precede de l'article defini (al-Rahim) et associe a ar-Rahman, il designe exclusivement Dieu. Le Coran distingue la misericorde divine (absolue) de la misericorde humaine (relative).",
              axe5_frequence: "Pour la mission du khalifa, la misericorde constante (rahim) est le modele de la mission. Le khalifa doit exercer la misericorde non pas de maniere ponctuelle mais constante — c'est une qualite permanente qui doit guider chaque acte de gestion de la terre. La misericorde du khalifa est un reflet de la misericorde divine — elle ne s'epuise pas, elle ne se fatigue pas, elle continue meme quand les destinataires la rejettent."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  let okCount = 0, errCount = 0;

  for (const word of data.words) {
    const { error: insertErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes,
      model_used: 'claude-opus-4',
      prompt_version: 'v2-pipeline-maison'
    });

    if (insertErr) {
      console.error(`  ERREUR insertion vwa ${word.word_key}:`, insertErr.message);
      errCount++;
    } else {
      console.log(`  OK VWA ${word.word_key} pos=${word.position}`);
      okCount++;
    }
  }

  const { error: updateErr } = await supabase.from('verse_analyses').update({
    segments: data.segments,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    full_translation: data.full_translation
  }).eq('id', data.analysis_id);

  if (updateErr) {
    console.error(`  ERREUR update verse_analyses:`, updateErr.message);
    errCount++;
  } else {
    console.log(`  OK verse_analyses V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — ${okCount} OK, ${errCount} erreurs`);
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [170];
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', verseIds);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnee a synchroniser');
    return;
  }

  const processed = new Set();
  for (const vwa of vwas) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.concepts) continue;

    const key = vwa.word_key;
    if (processed.has(key)) continue;
    processed.add(key);

    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', key)
      .single();

    if (!wa) {
      console.log(`  ${key} non trouve dans word_analyses — skip`);
      continue;
    }

    for (const [conceptName, conceptData] of Object.entries(axes.concepts)) {
      const { error } = await supabase.from('word_meanings')
        .update({
          status: conceptData.status,
          proof_ctx: conceptData.proof_ctx || null,
          axe1_verset: conceptData.axe1_verset || null,
          axe2_voisins: conceptData.axe2_voisins || null,
          axe3_sourate: conceptData.axe3_sourate || null,
          axe4_coherence: conceptData.axe4_coherence || null,
          axe5_frequence: conceptData.axe5_frequence || null
        })
        .eq('analysis_id', wa.id)
        .eq('concept', conceptName);

      if (error) {
        console.error(`  ERREUR sync ${key}/${conceptName}:`, error.message);
      }
    }
    console.log(`  ${key} -> synced`);
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — VERSET 163 ===\n');
  await processVerse(163);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V163 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
