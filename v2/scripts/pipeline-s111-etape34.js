const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const V = { 1: 6217, 2: 6218, 3: 6219, 4: 6220, 5: 6221 }

// ========================================================================
// ÉTAPE 3 — CONCEPTS EXACTS DEPUIS WORD_MEANINGS
// Sourate 111 (Al-Masad) — Thème : la ruine de celui qui s'oppose à la vérité
// ========================================================================

// TBB2 (تبب) — périr, se ruiner
const tbb2_axes = {
  sense_chosen: "ont péri",
  concept_chosen: "Perte/Ruine", // EXACT
  concepts: {
    "Perte/Ruine": {
      status: "retenu",
      senses: ["périr", "se ruiner", "être perdu", "être anéanti", "perdre"],
      proof_ctx: "Le sens retenu est « Perte/Ruine ». Le verbe tabbat est à l'accompli (fait achevé) — « ont péri ». Il est répété deux fois dans le verset : tabbat yada (les mains ont péri) puis wa tabba (et il a péri). La première occurrence vise les mains (les actes), la seconde vise la personne entière. La ruine est totale — les actes ET la personne sont perdus.",
      axe1_verset: "Le verbe tabbat ouvre le verset et est répété à la fin avec wa tabba. Le champ lexical est celui de la destruction et de la perte. Les mains (yada) qui ont péri représentent les actes — ce qu'il a fait de ses mains est perdu. Le wa tabba final étend la ruine à sa personne entière.",
      axe2_voisins: "Le verset 2 confirme la ruine : sa richesse et ce qu'il a acquis ne lui ont servi à rien. Le verset 3 annonce le feu. La ruine du verset 1 est le verdict, les versets suivants en détaillent les raisons et les conséquences.",
      axe3_sourate: "La sourate entière est le portrait d'un homme dont les efforts sont réduits à néant. Le thème est la ruine de celui qui s'oppose à la vérité — ni sa richesse ni ses actes ne le sauvent.",
      axe4_coherence: "Le Coran utilise tabba pour la ruine définitive dans d'autres contextes. La racine t-b-b exprime la perte irréversible — ce qui est tabb ne se restaure pas.",
      axe5_frequence: "Comprendre que l'opposition à la vérité mène à la ruine totale est fondamental pour la mission humaine. Les actes qui s'opposent à la justice finissent par détruire celui qui les commet."
    }
  }
}

// YDY (يدي) — main
const ydy_axes = {
  sense_chosen: "les mains",
  concept_chosen: "Action/Pouvoir", // EXACT
  concepts: {
    "Action/Pouvoir": {
      status: "retenu",
      senses: ["main", "pouvoir", "bienfait"],
      proof_ctx: "Le sens retenu est « Action/Pouvoir ». Le mot yada est le duel de yad (main) — les deux mains. La main est l'instrument de l'action — ce qu'on fait, on le fait avec ses mains. Le duel insiste : ce ne sont pas les mains physiques qui ont péri mais tout ce qu'elles ont accompli. Le Coran utilise yad pour désigner les actes et le pouvoir d'agir. Distinction avec « Antériorité » : le sens de « devant » (bayna yadayhi) est un sens dérivé qui ne s'applique pas ici car yada est le sujet du verbe « périr » — ce sont les mains qui périssent, pas ce qui est devant.",
      axe1_verset: "Le mot yada est le sujet de tabbat (ont péri). Le champ lexical est celui de l'action et de ses conséquences — les mains ont agi et le résultat est la ruine. Les mains sont suivies de « abi lahab » (le père de la flamme) — c'est les mains de cette personne précise qui ont péri.",
      axe2_voisins: "Le verset 2 mentionne ce qu'il a acquis (kasaba) — l'acquisition est aussi un acte des mains. Les mains du verset 1 et l'acquisition du verset 2 sont liés : ses actes (mains) et ce qu'il a gagné (acquisition) sont tous deux perdus.",
      axe3_sourate: "La sourate oppose les actes d'un homme (ses mains, sa richesse, ce qu'il a acquis) à leur résultat (la ruine, le feu). Les mains sont le point de départ — c'est par ses actes que tout commence.",
      axe4_coherence: "Le Coran utilise yad pour les actes dans de nombreux versets (sourate 2:95 — bima qaddamat aydihim = ce que leurs mains ont envoyé devant). La main est l'instrument permanent de l'action humaine.",
      axe5_frequence: "Les mains représentent la capacité d'agir — la mission humaine se réalise par les actes. Quand les actes sont dirigés contre la vérité, ils mènent à la ruine."
    },
    "Antériorité": {
      status: "nul",
      senses: ["devant"],
      proof_ctx: "Le sens de « devant » est un sens dérivé (bayna yadayhi = entre ses mains = devant lui). Ici yada est le sujet du verbe périr — ce sont les mains qui périssent, pas un lieu spatial."
    }
  }
}

// ABW (أبو) — père
const abw_axes = {
  sense_chosen: "le père",
  concept_chosen: "Parenté/Paternité", // EXACT
  concepts: {
    "Parenté/Paternité": {
      status: "retenu",
      senses: ["père", "ancêtre"],
      proof_ctx: "Le sens retenu est « Parenté/Paternité ». Le mot abi est la forme en idafa de ab (père) — « le père de ». Il est suivi de lahab (la flamme). Abi lahab = le père de la flamme. C'est une kunya (un surnom arabe qui identifie quelqu'un comme « père de X »). Le texte utilise ce surnom pour désigner la personne.",
      axe1_verset: "Le mot abi est en idafa avec lahab — le père de la flamme. Le champ lexical est celui de l'identification par le surnom familial. La kunya identifie la personne par ce qui la caractérise.",
      axe2_voisins: "Le verset 4 mentionne sa femme (imra'atuhu) — la dimension familiale est présente dans la sourate. Le père et la femme sont les deux membres du couple qui partagent la même ruine.",
      axe3_sourate: "La sourate nomme un individu par son surnom familial (père de la flamme) et sa femme. Le thème inclut la dimension familiale de la responsabilité.",
      axe4_coherence: "Le Coran utilise ab (père) dans son sens littéral de parenté. La kunya est un usage courant en arabe pour identifier quelqu'un.",
      axe5_frequence: "L'identification par le surnom familial montre que la responsabilité est personnelle — c'est cet individu précis, identifié par son surnom, qui est concerné."
    }
  }
}

// LHB (لهب) — flamme
const lhb_axes = {
  sense_chosen: "la flamme",
  concept_chosen: "Flamme/Embrasement", // EXACT
  concepts: {
    "Flamme/Embrasement": {
      status: "retenu",
      senses: ["flamme", "brûler", "s'embraser", "incandescence"],
      proof_ctx: "Le sens retenu est « Flamme/Embrasement ». Le mot lahab apparaît deux fois : dans le surnom abi lahab (v1) et dans dhat lahab (v3, dotée de flamme). La flamme est la partie visible et brûlante du feu. Le texte crée un lien entre le surnom de l'homme (père de la flamme) et le feu qui l'attend (un feu doté de flamme). Le surnom devient une annonce de son destin.",
      axe1_verset: "Au verset 1, lahab est le complément de abi — le père de la flamme. Au verset 3, lahab qualifie le feu — un feu doté de flamme. Le champ lexical est celui du feu et de la combustion.",
      axe2_voisins: "Le lien entre les deux occurrences de lahab (v1 et v3) structure la sourate : le surnom « père de la flamme » anticipe le feu « doté de flamme ». Le nom annonce le destin.",
      axe3_sourate: "La flamme est le fil conducteur — du surnom (v1) au châtiment (v3). La sourate est construite autour de ce mot qui revient.",
      axe4_coherence: "Le Coran utilise lahab pour la flamme du feu. Dans la sourate 77:31, les flammes du feu ne donnent pas d'ombre. La flamme est toujours liée à la combustion destructrice.",
      axe5_frequence: "La flamme est la manifestation visible de la destruction — elle avertit de ce qui attend celui qui s'oppose à la vérité."
    }
  }
}

// GNY (غني) — être riche / se passer de
const gny_axes = {
  sense_chosen: "n'a servi à rien",
  concept_chosen: "Richesse/Autosuffisance", // EXACT
  concepts: {
    "Richesse/Autosuffisance": {
      status: "retenu",
      senses: ["être riche", "se passer de", "être autosuffisant", "enrichir"],
      proof_ctx: "Le sens retenu est « Richesse/Autosuffisance ». Le verbe aghna est à la forme IV accompli (une forme qui ajoute l'idée de « rendre/faire »). Aghna = rendre riche, rendre suffisant. Avec la négation ma : ma aghna = n'a pas rendu suffisant, n'a servi à rien. Le verset dit que sa richesse et ce qu'il a acquis ne l'ont pas rendu autosuffisant face à la ruine. La richesse qui devait le protéger est devenue inutile.",
      axe1_verset: "Le verbe ma aghna (n'a pas rendu suffisant) est suivi de maluhu (sa richesse) et ma kasaba (ce qu'il a acquis). Le champ lexical est celui de l'inutilité de la richesse face à la ruine.",
      axe2_voisins: "Le verset 1 annonce la ruine. Le verset 2 explique pourquoi cette ruine est complète : même sa richesse ne l'a pas protégé. Le verset 3 décrit la conséquence. La progression est : ruine → inutilité de la richesse → feu.",
      axe3_sourate: "La sourate montre que ni les actes (mains, v1), ni la richesse (v2), ni l'acquisition (v2) ne sauvent celui qui s'oppose à la vérité. Tout ce qu'il possédait est devenu inutile.",
      axe4_coherence: "Le Coran affirme dans d'autres versets que la richesse ne protège pas contre le jugement (sourate 26:88 — le Jour où ni richesse ni enfants ne serviront). La sourate 111 illustre ce principe.",
      axe5_frequence: "Comprendre que la richesse matérielle ne suffit pas à protéger contre les conséquences de ses actes est essentiel. La mission humaine ne se mesure pas en biens mais en justice."
    },
    "Sens isolé/Chant": { status: "nul", senses: ["chant"], proof_ctx: "Hors sujet — le verset parle de richesse inutile, pas de chant." }
  }
}

// MWL (مول) — richesse
const mwl_axes = {
  sense_chosen: "sa richesse",
  concept_chosen: "Richesse/Biens", // EXACT
  concepts: {
    "Richesse/Biens": {
      status: "retenu",
      senses: ["richesse", "biens", "fortune", "être riche"],
      proof_ctx: "Le sens retenu est « Richesse/Biens ». Le mot maluhu est un nom avec pronom possessif (mal = richesse, hu = sa). C'est sa richesse personnelle — ce qu'il possède en biens matériels. Le verset dit que cette richesse ne lui a servi à rien (ma aghna). La richesse est l'objet qui devait protéger mais qui a échoué.",
      axe1_verset: "Le mot maluhu est l'un des deux sujets du verbe ma aghna (n'a pas servi). Le champ lexical est celui de la possession matérielle inutile. La richesse et l'acquisition sont mises sur le même plan — ni l'une ni l'autre ne sauvent.",
      axe2_voisins: "Le verset 1 parle des mains (actes) qui ont péri. Le verset 2 ajoute que la richesse non plus n'a pas servi. La sourate monte : les actes sont perdus, la richesse est inutile, le feu attend.",
      axe3_sourate: "La richesse fait partie du portrait de cet homme — il avait des biens et ce qu'il avait acquis. Mais rien de tout cela ne le protège de la ruine annoncée au verset 1.",
      axe4_coherence: "Le Coran mentionne la richesse (mal) comme un test — elle peut être un bienfait ou une tentation. Dans la sourate 111, la richesse est ce qui n'a pas protégé.",
      axe5_frequence: "La richesse qui ne sert pas la justice ne protège pas son possesseur. La mission humaine dépasse l'accumulation de biens."
    }
  }
}

// KSB (كسب) — acquérir
const ksb_axes = {
  sense_chosen: "ce qu'il a acquis",
  concept_chosen: "Acquisition/Rétribution", // EXACT
  concepts: {
    "Acquisition/Rétribution": {
      status: "retenu",
      senses: ["acquérir", "gagner", "mériter"],
      proof_ctx: "Le sens retenu est « Acquisition/Rétribution ». Le verbe kasaba est à l'accompli (fait achevé) — « ce qu'il a acquis ». L'acquisition est le fruit de l'effort — ce qu'il a gagné par ses propres actes. Le verset oppose la richesse héritée (maluhu) et l'acquisition personnelle (ma kasaba) — ni l'une ni l'autre n'ont servi.",
      axe1_verset: "Le verbe kasaba complète maluhu — sa richesse ET ce qu'il a acquis. Le champ lexical est celui du bilan : tout ce qu'il possédait (hérité et gagné) est inutile face à la ruine.",
      axe2_voisins: "L'acquisition est le dernier élément du bilan négatif avant le feu du verset 3. Actes (mains), richesse, acquisition — tout est listé puis déclaré vain.",
      axe3_sourate: "Le thème de l'inutilité des moyens face à la ruine est central. L'acquisition représente l'effort personnel — même l'effort ne sauve pas quand il est dirigé contre la vérité.",
      axe4_coherence: "Le Coran utilise kasaba pour les actes que l'on s'est acquis (sourate 2:286 — à chaque âme ce qu'elle a acquis). L'acquisition est toujours liée à la responsabilité personnelle.",
      axe5_frequence: "Ce que l'on acquiert par ses actes définit notre responsabilité. L'acquisition dirigée contre la justice ne protège pas — elle aggrave."
    }
  }
}

// SLY (صلي) — brûler
const sly_axes = {
  sense_chosen: "il sera exposé",
  concept_chosen: "Combustion/Châtiment", // EXACT
  concepts: {
    "Combustion/Châtiment": {
      status: "retenu",
      senses: ["brûler", "être exposé au feu", "rôtir", "endurer le feu"],
      proof_ctx: "Le sens retenu est « Combustion/Châtiment ». Le verbe sayasla est composé de sa (particule du futur) + yasla (il sera exposé au feu, inaccompli). L'inaccompli avec la particule du futur indique un événement qui n'a pas encore eu lieu mais qui est certain. Il sera exposé au feu — la combustion est l'état futur qui l'attend.",
      axe1_verset: "Le verbe sayasla est suivi de naran (un feu) et dhat lahab (dotée de flamme). Le champ lexical est entièrement celui du feu et de la combustion. L'exposition au feu est le résultat de la ruine annoncée au verset 1.",
      axe2_voisins: "Après la ruine (v1) et l'inutilité de la richesse (v2), le feu (v3) est la conséquence. La progression est logique : ruine → inutilité → feu.",
      axe3_sourate: "Le feu est le destin final annoncé dans cette sourate. Le thème se ferme : les actes ont péri, la richesse n'a pas servi, le feu attend.",
      axe4_coherence: "Le Coran utilise yasla pour l'exposition au feu dans d'autres versets (sourate 4:10 — ils seront exposés à un brasier). La combustion est un thème récurrent du châtiment.",
      axe5_frequence: "L'avertissement que le feu attend ceux qui s'opposent à la vérité est un rappel de la conséquence des actes. La mission humaine est de choisir la voie qui mène à la lumière, pas aux flammes."
    }
  }
}

// NWR (نور) — ici le sens est le feu (nar), pas la lumière
const nwr_axes = {
  sense_chosen: "un feu",
  concept_chosen: "Lumière/Clarté", // EXACT from DB — mais le sens retenu est le feu, qui est dans les senses
  concepts: {
    "Lumière/Clarté": {
      status: "retenu",
      senses: ["lumière", "éclairer", "feu", "guider par la lumière"],
      proof_ctx: "Le sens retenu est « Lumière/Clarté » avec le sens spécifique de « feu » (nar). Le mot naran est un nom indéfini (un feu, pas LE feu). La racine n-w-r couvre à la fois la lumière et le feu — les deux sont des manifestations de l'énergie lumineuse. Dans ce verset, c'est le feu destructeur (nar) qui est visé, pas la lumière guidante (nur). Le feu est qualifié par dhat lahab (dotée de flamme) — c'est un feu qui brûle activement.",
      axe1_verset: "Le mot naran est le complément de sayasla (il sera exposé à un feu). Il est suivi de dhat lahab (dotée de flamme). Le champ lexical est celui du feu destructeur — pas de la lumière bienfaisante.",
      axe2_voisins: "Le feu du verset 3 est la conséquence de la ruine (v1) et de l'inutilité de la richesse (v2). C'est le lieu de la combustion — l'aboutissement de la sourate.",
      axe3_sourate: "Le feu est le destin final de celui dont les mains ont péri. La sourate progresse vers le feu comme point culminant.",
      axe4_coherence: "Le Coran distingue nar (feu destructeur) et nur (lumière bienfaisante) bien qu'ils viennent de la même racine n-w-r. Dans la sourate 111, c'est le feu destructeur. Dans la sourate 24:35, c'est la lumière divine. Le contexte détermine le sens.",
      axe5_frequence: "Le feu est l'avertissement suprême — il rappelle que les actes ont des conséquences. La mission humaine est d'éviter le feu par la justice."
    },
    "Sens isolé/Fleur": { status: "nul", senses: ["fleur"], proof_ctx: "Hors sujet." },
    "Sens isolé/Fuir": { status: "nul", senses: ["fuir"], proof_ctx: "Hors sujet." }
  }
}

// MRA (مرأ) — femme/personne
const mra_axes = {
  sense_chosen: "sa femme",
  concept_chosen: "Personne/Individu", // EXACT
  concepts: {
    "Personne/Individu": {
      status: "retenu",
      senses: ["homme (imru')", "femme (imra'a)"],
      proof_ctx: "Le sens retenu est « Personne/Individu ». Le mot imra'atuhu est composé de imra'a (femme/personne féminine) avec le pronom hu (sa). C'est sa femme — une personne individuelle identifiée par son lien conjugal. Le verset associe la femme au même destin que son mari.",
      axe1_verset: "Le mot imra'atuhu ouvre le verset 4 avec la conjonction wa (et). Le champ lexical est celui de la famille — après le père de la flamme (v1), voici sa femme. Les deux sont liés dans la ruine.",
      axe2_voisins: "Le verset 4 étend la ruine à la femme : elle aussi est impliquée. Le verset 5 la décrit avec une corde au cou. La sourate ne se limite pas à un individu — le couple partage la conséquence.",
      axe3_sourate: "La sourate traite d'un homme ET de sa femme — les deux sont nommés et les deux subissent les conséquences. Le thème est la responsabilité partagée.",
      axe4_coherence: "Le Coran utilise imra'a pour les épouses dans d'autres versets (imra'at Fir'awn = la femme de Pharaon). C'est la personne féminine identifiée par son statut conjugal.",
      axe5_frequence: "La responsabilité individuelle s'étend aux proches quand ils participent aux mêmes actes. La femme n'est pas victime innocente — elle est nommée pour ses propres actes (porteuse de bois)."
    },
    "Santé/Bienfaisance": { status: "nul", senses: ["être sain", "être digeste", "être bienfaisant"], proof_ctx: "Le verset parle d'une personne, pas de santé ou de digestion." }
  }
}

// HML (حمل) — porter
const hml_axes = {
  sense_chosen: "porteuse",
  concept_chosen: "Portage/Transport", // EXACT
  concepts: {
    "Portage/Transport": {
      status: "retenu",
      senses: ["porter", "transporter", "supporter un fardeau"],
      proof_ctx: "Le sens retenu est « Portage/Transport ». Le mot hammalat est un participe actif féminin (une forme qui dit que la personne FAIT l'action activement et en continu) — « porteuse ». C'est une porteuse active et permanente. Elle est rattachée à al-hatab (le bois/combustible). Le texte dit qu'elle porte le bois — le sens littéral est clair. La cohérence coranique permet d'éclairer : porter du bois peut signifier alimenter le feu (apporter du combustible) ou colporter des propos (le bois qui attise le feu entre les gens). Le texte ne précise pas lequel — il dit qu'elle porte du bois.",
      axe1_verset: "Le mot hammalat qualifie imra'atuhu (sa femme) et est suivi de al-hatab (le bois). Le champ lexical est celui du portage — elle porte quelque chose. Le participe actif dit que c'est son activité permanente.",
      axe2_voisins: "Le verset 5 ajoute qu'elle a une corde au cou — le portrait d'une porteuse chargée. Le bois qu'elle porte (v4) et la corde à son cou (v5) complètent l'image.",
      axe3_sourate: "La femme est décrite par son acte : elle porte du bois. La sourate identifie chaque personne par ses actes — les mains du mari (v1), le portage de la femme (v4).",
      axe4_coherence: "Le Coran utilise hamala pour porter des fardeaux dans d'autres versets (sourate 29:13 — ils porteront leurs fardeaux). Le portage est toujours lié à la responsabilité de ce qu'on porte. Le bois (hatab) est aussi utilisé dans le Coran pour désigner le combustible du feu (sourate 72:15 — les dévieurs sont du combustible pour le feu).",
      axe5_frequence: "Ce que l'on porte — physiquement ou moralement — définit notre responsabilité. La porteuse de bois est responsable de ce qu'elle alimente."
    },
    "Grossesse/Gestation": { status: "nul", senses: ["être enceinte"], proof_ctx: "Le verset décrit le portage de bois, pas une grossesse." },
    "Sens isolé/Charger": { status: "nul", senses: ["charger"], proof_ctx: "Le sens est le même que le portage dans ce contexte." }
  }
}

// HTB (حطب) — bois/combustible
const htb_axes = {
  sense_chosen: "le bois",
  concept_chosen: "Bois/Combustible", // EXACT
  concepts: {
    "Bois/Combustible": {
      status: "retenu",
      senses: ["bois de chauffage", "ramasser du bois", "combustible"],
      proof_ctx: "Le sens retenu est « Bois/Combustible ». Le mot al-hatab est un nom défini avec al- (le bois connu). Le hatab est le bois qu'on ramasse pour alimenter le feu. Dans ce verset, la femme est « porteuse du bois ». Le Coran utilise hatab dans la sourate 72:15 pour désigner le combustible du feu — les dévieurs sont du hatab. La cohérence coranique éclaire : le bois est ce qui alimente le feu. La femme porte ce qui nourrit les flammes.",
      axe1_verset: "Le mot al-hatab est le complément de hammalat (porteuse de). Le champ lexical est celui du combustible — ce qui alimente le feu. Le feu du verset 3 et le bois du verset 4 sont liés : le feu a besoin de combustible, et la femme le fournit.",
      axe2_voisins: "Le feu (v3) et le bois (v4) se complètent. Le feu brûle grâce au bois que la porteuse apporte. La sourate montre une chaîne : la ruine (v1) → l'inutilité (v2) → le feu (v3) → le combustible (v4) → la corde (v5).",
      axe3_sourate: "Le bois est l'élément qui relie la femme au feu. Elle n'est pas spectatrice — elle alimente activement ce qui brûle.",
      axe4_coherence: "Le Coran utilise hatab pour le combustible du feu dans la sourate 72:15 (kanu li-jahannama hataban = ils étaient du combustible pour l'enfer). Le bois est toujours ce qui nourrit les flammes.",
      axe5_frequence: "Ce qui alimente le feu — qu'il soit physique ou moral — est la responsabilité de celui qui le porte. La mission humaine est de ne pas alimenter ce qui détruit."
    }
  }
}

// JYD (جيد) — cou
const jyd_axes = {
  sense_chosen: "son cou",
  concept_chosen: "Cou/Collier", // EXACT
  concepts: {
    "Cou/Collier": {
      status: "retenu",
      senses: ["cou", "collier", "partie du corps entre la tête et le tronc"],
      proof_ctx: "Le sens retenu est « Cou/Collier ». Le mot jidiha est un nom avec pronom possessif féminin (jid = cou, ha = son). Le cou est la partie du corps qui porte et qui lie — ce qui est autour du cou est ce qui est attaché à la personne. Le verset dit qu'elle a une corde (habl) autour de son cou — l'image d'une personne entravée par ce qu'elle porte.",
      axe1_verset: "Le mot jidiha est le lieu où se trouve la corde — « dans son cou une corde ». Le champ lexical est celui de l'entrave physique. La corde au cou complète l'image de la porteuse de bois.",
      axe2_voisins: "La porteuse de bois (v4) a une corde au cou (v5). Les deux versets décrivent la même scène : une femme qui porte du bois attaché par une corde autour de son cou.",
      axe3_sourate: "Le cou est le dernier détail du portrait. La sourate se termine sur cette image concrète — la corde au cou de la porteuse.",
      axe4_coherence: "Le Coran mentionne le cou dans d'autres contextes d'entrave (sourate 36:8 — des carcans jusqu'aux mentons). Ce qui est autour du cou symbolise ce qui lie et entrave la personne.",
      axe5_frequence: "Ce qui est autour de notre cou — au sens propre et figuré — est ce qui nous définit et nous entrave. La mission humaine est de ne pas se mettre soi-même des entraves."
    }
  }
}

// HBL (حبل) — corde
const hbl_axes = {
  sense_chosen: "une corde",
  concept_chosen: "Lien/Attachement", // EXACT
  concepts: {
    "Lien/Attachement": {
      status: "retenu",
      senses: ["corde", "lien", "pacte"],
      proof_ctx: "Le sens retenu est « Lien/Attachement ». Le mot habl est un nom indéfini (une corde, pas LA corde). La corde est ce qui lie — elle attache et entrave. Dans ce verset, la corde est autour du cou de la femme et elle est faite de fibres (masad). Le texte décrit une corde physique qui entrave. La cohérence coranique éclaire : le Coran utilise habl pour les liens (habl Allah = la corde de Dieu, sourate 3:103). Ici la corde n'est pas un lien salvateur mais une entrave destructrice.",
      axe1_verset: "Le mot habl est le sujet de la phrase nominale (fi jidiha habl = dans son cou une corde). Le champ lexical est celui de l'entrave — la corde au cou est l'image de quelqu'un qui est lié et ne peut se libérer.",
      axe2_voisins: "La corde (v5) complète le portrait de la porteuse de bois (v4). Elle porte du bois et elle a une corde au cou — elle est définie par ce qu'elle porte et ce qui la lie.",
      axe3_sourate: "La corde est le dernier mot significatif de la sourate. Le portrait se ferme sur cette entrave — la ruine (v1), l'inutilité (v2), le feu (v3), le portage (v4), la corde (v5).",
      axe4_coherence: "Le Coran utilise habl pour les liens dans la sourate 3:103 (i'tasimu bi habli llah = accrochez-vous à la corde de Dieu). La corde peut sauver (corde de Dieu) ou entraver (corde de fibres au cou). Le contexte détermine.",
      axe5_frequence: "Les liens peuvent libérer ou entraver. La mission humaine est de s'attacher aux liens qui élèvent et de se libérer de ceux qui entravent."
    },
    "Gestation": { status: "nul", senses: ["grossesse"], proof_ctx: "Le verset parle d'une corde physique, pas d'une grossesse." },
    "Souffle/Vent": { status: "nul", senses: ["veine jugulaire"], proof_ctx: "Le verset parle d'une corde, pas d'une veine." }
  }
}

// MSD (مسد) — fibre torsadée
const msd_axes = {
  sense_chosen: "de fibres",
  concept_chosen: "Fibre/Torsade", // EXACT
  concepts: {
    "Fibre/Torsade": {
      status: "retenu",
      senses: ["fibre de palmier", "corde torsadée", "fibre végétale"],
      proof_ctx: "Le sens retenu est « Fibre/Torsade ». Le mot masad est un nom indéfini précédé de min (de) — une corde de fibres. Le masad est la fibre de palmier torsadée pour en faire une corde rugueuse et dure. Le verset précise la matière de la corde — ce n'est pas une corde fine et douce mais une corde grossière en fibres végétales. La rugosité du matériau complète l'image d'entrave.",
      axe1_verset: "Le mot masad qualifie la matière de la corde (habl min masad = une corde de fibres). Le champ lexical est celui du matériau brut — la fibre végétale est rude et résistante.",
      axe2_voisins: "La fibre complète la description : la corde (habl) au cou (jid) est faite de fibres de palmier (masad). Chaque mot ajoute un détail au portrait final.",
      axe3_sourate: "La sourate se termine sur ce détail concret — la fibre. Du surnom (v1) à la matière de la corde (v5), chaque verset ajoute un niveau de détail. La sourate va du général au particulier.",
      axe4_coherence: "Le masad est mentionné uniquement dans cette sourate. C'est un mot rare qui décrit un matériau spécifique — la fibre de palmier torsadée.",
      axe5_frequence: "Le détail concret de la fibre montre que le texte est précis dans sa description — chaque élément a un sens et contribue à l'image complète."
    }
  }
}

// ========================================================================
// ÉTAPE 4 — TRADUCTIONS
// ========================================================================

const translations = {
  1: {
    verse_id: V[1],
    translation_arab: "Que les mains du père de la flamme périssent, et qu'il périsse !",
    translation_explanation: `§DEMARCHE§

Le verbe **tabbat** est à l'accompli féminin (une forme qui dit que l'action a eu lieu comme fait achevé, avec le ta final qui accorde avec le féminin du duel) — « ont péri ». L'accompli donne une certitude : c'est un fait accompli, pas un souhait. La racine t-b-b signifie périr, être ruiné, être perdu définitivement.

Le mot **yada** est le duel de yad (main) — les deux mains. En arabe, le duel marque exactement deux. Les mains représentent les actes — ce qu'on fait, on le fait avec ses mains. Les mains qui périssent, ce sont les actes qui sont réduits à néant.

Le mot **abi** est la forme en idafa de ab (père) — « le père de ». Suivi de **lahab** (la flamme). Abi lahab est une kunya (un surnom arabe qui identifie quelqu'un comme « père de X », comme on dit « mère de X » ou « fils de X »). Le surnom identifie la personne.

La conjonction **wa** (et) lie la deuxième partie. Le verbe **tabba** est le même verbe à l'accompli mais cette fois à la troisième personne masculin singulier — « il a péri ». La première occurrence vise les mains (les actes), la seconde vise la personne entière. La ruine est totale.

§JUSTIFICATION§

**ont péri** — Le sens retenu est « Perte/Ruine ». Le mot « périr » est choisi car il capture la destruction définitive et irréversible. L'alternative « ont été perdues » est écartée car c'est passif — le texte utilise un verbe actif. L'alternative « sont ruinées » est écartée car « ruiner » est plus financier en français courant, alors que « périr » est existentiel.

**les mains** — Le sens retenu est « Action/Pouvoir ». Le mot « mains » est gardé car il est littéral et parlant — tout le monde comprend que les mains représentent les actes. L'alternative « les efforts » est écartée car le texte dit littéralement « mains », pas « efforts ».

**le père** — Le sens retenu est « Parenté/Paternité ». Le mot « père » est gardé car c'est la traduction littérale de abi dans la kunya. L'alternative « le nommé » est écartée car la kunya est spécifiquement un surnom de parenté.

**la flamme** — Le sens retenu est « Flamme/Embrasement ». Le mot « flamme » est choisi car il capture la manifestation visible et brûlante du feu. L'alternative « incendie » est écartée car trop large. L'alternative « brasier » est écartée car le lahab est la flamme elle-même, pas le foyer.`,
    segments: [
      {fr:"ont péri",pos:"verbe",phon:"tabbat",arabic:"تَبَّتْ",position:1,word_key:"tbb2",is_particle:false,sense_retenu:"ruine"},
      {fr:"les mains",pos:"nom",phon:"yada",arabic:"يَدَآ",position:2,word_key:"ydy",is_particle:false,sense_retenu:"mains"},
      {fr:"du père",pos:"nom",phon:"abi",arabic:"أَبِى",position:3,word_key:"abw",is_particle:false,sense_retenu:"père"},
      {fr:"de la flamme",pos:"nom",phon:"lahab",arabic:"لَهَبٍ",position:4,word_key:"lhb",is_particle:false,sense_retenu:"flamme"},
      {fr:"et qu'il périsse",pos:"verbe",phon:"wa tabba",arabic:"وَتَبَّ",position:5,word_key:"tbb2",is_particle:false,sense_retenu:"ruine"}
    ]
  },
  2: {
    verse_id: V[2],
    translation_arab: "Sa richesse et ce qu'il a acquis ne lui ont servi à rien.",
    translation_explanation: `§DEMARCHE§

La particule **ma** en début de verset est une négation — « ne...pas ». Elle nie le verbe qui suit.

Le verbe **aghna** est à la forme IV accompli (une forme qui ajoute l'idée de « rendre/faire ») — aghna signifie « rendre riche, rendre suffisant ». Avec la négation ma : ma aghna = « n'a pas rendu suffisant, n'a servi à rien ». La forme IV est importante : ce n'est pas « il n'est pas riche » mais « sa richesse ne l'a pas rendu à l'abri ».

La préposition **anhu** (de lui) indique que c'est lui qui n'a pas été protégé.

Le mot **maluhu** est un nom avec pronom possessif (mal = richesse/biens, hu = sa) — « sa richesse ». C'est ce qu'il possédait en biens matériels.

La conjonction **wa** (et) ajoute le deuxième élément. Le pronom relatif **ma** (ce que) introduit le verbe **kasaba** à l'accompli (fait achevé) — « ce qu'il a acquis ». L'acquisition est le fruit de son effort personnel, par opposition à la richesse qui peut être héritée.

Le verset fait un bilan : ni sa richesse (ce qu'il avait) ni ce qu'il a acquis (ce qu'il a gagné) ne l'ont protégé.

§JUSTIFICATION§

**n'a servi à rien** — Le sens retenu est « Richesse/Autosuffisance ». L'expression « n'a servi à rien » rend la négation de la forme IV (rendre suffisant). L'alternative « n'a pas enrichi » est écartée car le verbe aghna ne parle pas d'enrichissement mais de suffisance — la question est : est-ce que ça l'a protégé ? Non.

**sa richesse** — Le sens retenu est « Richesse/Biens ». Le mot « richesse » est choisi car c'est le français courant pour mal. L'alternative « ses biens » est écartée car « richesse » est plus englobant.

**ce qu'il a acquis** — Le sens retenu est « Acquisition/Rétribution ». L'expression « ce qu'il a acquis » rend le verbe accompli kasaba. L'alternative « ses gains » est écartée car c'est un registre financier. L'alternative « ce qu'il a mérité » est écartée car « mériter » ajoute un jugement moral que le texte ne porte pas ici.`,
    segments: [
      {fr:"ne...pas",phon:"ma",arabic:"مَآ",position:1,word_key:null,is_particle:true},
      {fr:"a servi à rien",pos:"verbe",phon:"aghna",arabic:"أَغْنَىٰ",position:2,word_key:"gny",is_particle:false,sense_retenu:"suffisance"},
      {fr:"de lui",phon:"anhu",arabic:"عَنْهُ",position:3,word_key:null,is_particle:true},
      {fr:"sa richesse",pos:"nom",phon:"maluhu",arabic:"مَالُهُۥ",position:4,word_key:"mwl",is_particle:false,sense_retenu:"richesse"},
      {fr:"et ce que",phon:"wa ma",arabic:"وَمَا",position:5,word_key:null,is_particle:true},
      {fr:"il a acquis",pos:"verbe",phon:"kasab",arabic:"كَسَبَ",position:6,word_key:"ksb",is_particle:false,sense_retenu:"acquisition"}
    ]
  },
  3: {
    verse_id: V[3],
    translation_arab: "Il sera exposé à un feu doté de flamme,",
    translation_explanation: `§DEMARCHE§

La particule **sa** (préfixée au verbe) est la particule du futur en arabe — elle indique que l'action n'a pas encore eu lieu mais qu'elle est certaine. C'est différent de sawfa qui indique un futur plus lointain.

Le verbe **yasla** est à l'inaccompli troisième personne (une forme qui dit que l'action est en cours ou habituelle). Combiné avec sa : il sera exposé au feu. D'après les sources étymologiques, la racine s-l-y signifie être exposé au feu, endurer la chaleur du feu, brûler.

Le mot **naran** est un nom indéfini à l'accusatif (un feu, pas LE feu). L'indéfinition donne un sens de grandeur indéterminée — un feu dont on ne connaît pas l'ampleur.

Le mot **dhat** (dotée de, possédant) relie le feu à sa qualité.

Le mot **lahab** (flamme) revient — le même mot que dans le surnom du verset 1. Le feu est doté de flamme. Le lien avec le surnom « père de la flamme » est frappant : celui qui est surnommé « père de la flamme » sera exposé à un feu doté de flamme. Le texte crée cette correspondance par le retour du même mot.

§JUSTIFICATION§

**il sera exposé** — Le sens retenu est « Combustion/Châtiment ». L'expression « il sera exposé » rend le futur certain (sa + inaccompli). L'alternative « il brûlera » est écartée car « brûler » est trop définitif — yasla signifie être exposé au feu, endurer sa chaleur, pas nécessairement être consumé.

**un feu** — Le sens retenu est « Lumière/Clarté » avec le sens de feu (nar). Le mot « feu » est choisi car c'est le français courant pour nar. L'alternative « brasier » est écartée car c'est du registre littéraire. L'alternative « flammes » est écartée car le texte distingue nar (le feu) et lahab (la flamme) — ce sont deux mots différents.

**flamme** — Le sens retenu est « Flamme/Embrasement ». Le mot « flamme » est gardé pour le lien avec le verset 1 (abi lahab). L'alternative « incandescence » est écartée car c'est du registre scientifique.`,
    segments: [
      {fr:"il sera exposé",pos:"verbe",phon:"sa-yasla",arabic:"سَيَصْلَىٰ",position:1,word_key:"sly",is_particle:false,sense_retenu:"combustion"},
      {fr:"à un feu",pos:"nom",phon:"naran",arabic:"نَارًا",position:2,word_key:"nwr",is_particle:false,sense_retenu:"feu"},
      {fr:"dotée de",pos:"nom",phon:"dhat",arabic:"ذَاتَ",position:3,word_key:null,is_particle:true},
      {fr:"flamme",pos:"nom",phon:"lahab",arabic:"لَهَبٍ",position:4,word_key:"lhb",is_particle:false,sense_retenu:"flamme"}
    ]
  },
  4: {
    verse_id: V[4],
    translation_arab: "ainsi que sa femme, porteuse de bois,",
    translation_explanation: `§DEMARCHE§

La conjonction **wa** (et/ainsi que) lie ce verset au précédent — la femme partage le même sort.

Le mot **imra'atuhu** est composé de imra'a (femme/personne féminine) avec le pronom possessif hu (sa) — « sa femme ». Le ta marbouta à la fin est la marque du féminin.

Le mot **hammalat** est un participe actif féminin (une forme qui dit que la personne FAIT l'action activement et en continu) construit sur un modèle intensif (fa''al) — « grande porteuse ». Le modèle intensif indique que le portage n'est pas occasionnel mais constant et abondant. C'est son activité principale.

Le mot **al-hatab** est un nom défini avec al- (le bois connu). D'après les sources étymologiques, hatab signifie bois de chauffage, combustible — ce qu'on ramasse pour alimenter le feu. Le Coran utilise hatab dans la sourate 72:15 pour désigner le combustible du feu. Le bois est ce qui nourrit les flammes.

La femme est donc identifiée par son acte : elle porte du bois — elle alimente ce qui brûle.

§JUSTIFICATION§

**sa femme** — Le sens retenu est « Personne/Individu ». Le mot « femme » est gardé car c'est la traduction littérale de imra'a avec le possessif. L'alternative « son épouse » est écartée car « épouse » est du registre plus soutenu.

**porteuse** — Le sens retenu est « Portage/Transport ». Le mot « porteuse » est choisi car il rend le participe actif féminin intensif — une personne qui porte activement et continuellement. L'alternative « celle qui porte » est écartée car c'est une périphrase moins concise.

**de bois** — Le sens retenu est « Bois/Combustible ». Le mot « bois » est choisi car c'est le français courant pour hatab. L'alternative « combustible » est écartée car c'est du registre technique. L'alternative « fagots » est écartée car le texte dit hatab (bois en général), pas un type spécifique.`,
    segments: [
      {fr:"et sa femme",pos:"nom",phon:"wa imra'atuhu",arabic:"وَٱمْرَأَتُهُۥ",position:1,word_key:"mra",is_particle:false,sense_retenu:"femme"},
      {fr:"porteuse",pos:"nom",phon:"hammalat",arabic:"حَمَّالَةَ",position:2,word_key:"hml",is_particle:false,sense_retenu:"portage"},
      {fr:"de bois",pos:"nom",phon:"al-hatab",arabic:"ٱلْحَطَبِ",position:3,word_key:"htb",is_particle:false,sense_retenu:"bois"}
    ]
  },
  5: {
    verse_id: V[5],
    translation_arab: "autour de son cou, une corde de fibres.",
    translation_explanation: `§DEMARCHE§

La préposition **fi** (dans/autour de) indique le lieu.

Le mot **jidiha** est un nom avec pronom possessif féminin (jid = cou, ha = son) — « son cou ». Le cou est la partie du corps qui porte — ce qui est autour du cou est ce qui est attaché à la personne de façon visible et permanente.

Le mot **habl** est un nom indéfini (une corde) — le sujet de la phrase nominale. En arabe, une phrase nominale (sans verbe) exprime un état permanent. « Dans son cou une corde » — c'est un état, pas un événement. La corde est là, elle ne part pas.

La préposition **min** (de) introduit la matière.

Le mot **masad** est un nom indéfini — des fibres (de palmier). D'après les sources étymologiques, masad désigne la fibre de palmier torsadée pour en faire une corde. C'est un matériau rugueux et résistant. La corde n'est pas en soie ni en coton — elle est en fibres brutes.

Le verset se termine sur cette image concrète : une femme avec une corde de fibres autour du cou. C'est le dernier détail du portrait. La sourate va du général (la ruine) au particulier (la matière de la corde).

§JUSTIFICATION§

**son cou** — Le sens retenu est « Cou/Collier ». Le mot « cou » est gardé car c'est la traduction littérale de jid. L'alternative « sa nuque » est écartée car la nuque est l'arrière du cou — jid est le cou dans son ensemble.

**une corde** — Le sens retenu est « Lien/Attachement ». Le mot « corde » est choisi car c'est le français courant pour habl. L'alternative « un lien » est écartée car « lien » est plus abstrait — la corde est un objet concret.

**de fibres** — Le sens retenu est « Fibre/Torsade ». Le mot « fibres » est choisi car il décrit le matériau brut. L'alternative « de palmier » est écartée car le texte dit masad (fibres torsadées) sans préciser qu'il s'agit de palmier — le texte ne précise pas l'arbre d'origine.`,
    segments: [
      {fr:"autour de",phon:"fi",arabic:"فِى",position:1,word_key:null,is_particle:true},
      {fr:"son cou",pos:"nom",phon:"jidiha",arabic:"جِيدِهَا",position:2,word_key:"jyd",is_particle:false,sense_retenu:"cou"},
      {fr:"une corde",pos:"nom",phon:"habl",arabic:"حَبْلٌ",position:3,word_key:"hbl",is_particle:false,sense_retenu:"corde"},
      {fr:"de",phon:"min",arabic:"مِّن",position:4,word_key:null,is_particle:true},
      {fr:"fibres",pos:"nom",phon:"masad",arabic:"مَّسَدٍ",position:5,word_key:"msd",is_particle:false,sense_retenu:"fibres"}
    ]
  }
}

// ========================================================================
// INSERTION + PHRASES DU QUOTIDIEN
// ========================================================================

async function run() {
  console.log('=== INSERTION SOURATE 111 ===')

  // 1. verse_word_analyses
  const wordAnalyses = [
    {verse_id:V[1],word_key:'tbb2',sense_chosen:'ruine',analysis_axes:tbb2_axes,position:1},
    {verse_id:V[1],word_key:'ydy',sense_chosen:'mains',analysis_axes:ydy_axes,position:2},
    {verse_id:V[1],word_key:'abw',sense_chosen:'père',analysis_axes:abw_axes,position:3},
    {verse_id:V[1],word_key:'lhb',sense_chosen:'flamme',analysis_axes:lhb_axes,position:4},
    {verse_id:V[1],word_key:'tbb2',sense_chosen:'ruine',analysis_axes:tbb2_axes,position:5},
    {verse_id:V[2],word_key:'gny',sense_chosen:'suffisance',analysis_axes:gny_axes,position:2},
    {verse_id:V[2],word_key:'mwl',sense_chosen:'richesse',analysis_axes:mwl_axes,position:4},
    {verse_id:V[2],word_key:'ksb',sense_chosen:'acquisition',analysis_axes:ksb_axes,position:6},
    {verse_id:V[3],word_key:'sly',sense_chosen:'combustion',analysis_axes:sly_axes,position:1},
    {verse_id:V[3],word_key:'nwr',sense_chosen:'feu',analysis_axes:nwr_axes,position:2},
    {verse_id:V[3],word_key:'lhb',sense_chosen:'flamme',analysis_axes:lhb_axes,position:4},
    {verse_id:V[4],word_key:'mra',sense_chosen:'femme',analysis_axes:mra_axes,position:1},
    {verse_id:V[4],word_key:'hml',sense_chosen:'portage',analysis_axes:hml_axes,position:2},
    {verse_id:V[4],word_key:'htb',sense_chosen:'bois',analysis_axes:htb_axes,position:3},
    {verse_id:V[5],word_key:'jyd',sense_chosen:'cou',analysis_axes:jyd_axes,position:2},
    {verse_id:V[5],word_key:'hbl',sense_chosen:'corde',analysis_axes:hbl_axes,position:3},
    {verse_id:V[5],word_key:'msd',sense_chosen:'fibres',analysis_axes:msd_axes,position:5},
  ]

  for (const vid of Object.values(V)) {
    await db.from('verse_word_analyses').delete().eq('verse_id', vid)
  }
  const {error: e1} = await db.from('verse_word_analyses').insert(wordAnalyses)
  if (e1) console.log('ERR vwa:', e1.message)
  else console.log('✅ verse_word_analyses: ' + wordAnalyses.length + ' insérées')

  // 2. verse_analyses
  for (const [vnum, t] of Object.entries(translations)) {
    const {error} = await db.from('verse_analyses').update({
      translation_arab: t.translation_arab,
      translation_explanation: t.translation_explanation,
      segments: t.segments
    }).eq('verse_id', t.verse_id)
    if (error) console.log('ERR v' + vnum + ':', error.message)
    else console.log('✅ v' + vnum + ': ' + t.translation_arab)
  }

  // 3. word_daily for new roots
  const phrases = [
    {word_key:'tbb2',sense:'ruine',arabic:'تبت يداه',phon:'tabbat yadahu',french:'Ses mains ont péri (ses efforts sont réduits à néant).'},
    {word_key:'tbb2',sense:'ruine',arabic:'تب من يظلم',phon:'tabba man yazlim',french:'Qu\'il périsse celui qui opprime.'},
    {word_key:'tbb2',sense:'ruine',arabic:'كل عمل ضد الحق تباب',phon:'kullu \'amal didda al-haqq tabab',french:'Tout acte contre la vérité est voué à la ruine.'},
    {word_key:'lhb',sense:'flamme',arabic:'لهب النار مخيف',phon:'lahabu an-nar mukhif',french:'La flamme du feu est effrayante.'},
    {word_key:'lhb',sense:'flamme',arabic:'التهبت النار',phon:'iltahabat an-nar',french:'Le feu s\'est embrasé.'},
    {word_key:'lhb',sense:'flamme',arabic:'لهب الشمعة يضيء',phon:'lahabu ash-sham\'a yudi\'',french:'La flamme de la bougie éclaire.'},
    {word_key:'htb',sense:'bois',arabic:'اذهب واحطب',phon:'idhhab wa-ihtib',french:'Va ramasser du bois.'},
    {word_key:'htb',sense:'bois',arabic:'الحطب يغذي النار',phon:'al-hatabu yughaddhi an-nar',french:'Le bois alimente le feu.'},
    {word_key:'htb',sense:'bois',arabic:'لا تكن حطبا للفتنة',phon:'la takun hataban li-l-fitna',french:'Ne sois pas du bois pour la discorde (ne l\'alimente pas).'},
    {word_key:'jyd',sense:'cou',arabic:'طوق في جيدها',phon:'tawqun fi jidiha',french:'Un collier autour de son cou.'},
    {word_key:'jyd',sense:'cou',arabic:'الجيد يحمل الرأس',phon:'al-jidu yahmilu ar-ra\'s',french:'Le cou porte la tête.'},
    {word_key:'jyd',sense:'cou',arabic:'رفع جيده بكبرياء',phon:'rafa\'a jidahu bi-kibriya\'',french:'Il a levé son cou avec orgueil.'},
    {word_key:'msd',sense:'fibres',arabic:'حبل من مسد',phon:'hablun min masad',french:'Une corde de fibres (rugueuse et solide).'},
    {word_key:'msd',sense:'fibres',arabic:'المسد من ليف النخل',phon:'al-masadu min lifi an-nakhl',french:'Les fibres viennent du palmier.'},
    {word_key:'msd',sense:'fibres',arabic:'مسد الحبل جيدا',phon:'masada al-habla jayyidan',french:'Il a torsadé la corde solidement.'},
  ]

  for (const p of phrases) {
    const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', p.word_key).limit(1)
    if (!wa || !wa[0]) continue
    const {error} = await db.from('word_daily').insert({
      analysis_id: wa[0].id, sense: p.sense,
      arabic: p.arabic, phon: p.phon, french: p.french
    })
    if (error && !error.message.includes('duplicate')) console.log('ERR daily ' + p.word_key + ':', error.message)
  }
  console.log('✅ word_daily: ' + phrases.length + ' phrases')

  // LOGS
  console.log('\n=== LOGS FINAUX ===')
  for (const [vnum, t] of Object.entries(translations)) {
    const words = t.segments.filter(s => !s.is_particle).map(s => s.word_key + ' → "' + s.fr + '"').join(', ')
    console.log('VERSET 111:' + vnum + ' — ' + words)
    console.log('  Traduction : ' + t.translation_arab)
  }
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
