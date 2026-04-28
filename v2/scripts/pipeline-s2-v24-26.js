const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 24 À 26
// verse_id=31 (2:24), verse_id=32 (2:25), verse_id=33 (2:26)
// =====================================================

// VWA data for V24-26
const vwaData = [
  // =====================================================
  // VERSET 2:24 (verse_id=31)
  // =====================================================
  { verse_id: 31, word_key: 'fel', position: 2, analysis_axes: {
    sense_chosen: "faire",
    concept_chosen: "Action/Realisation",
    concepts: {
      "Action/Realisation": {
        senses: ["faire", "agir", "accomplir"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Action/Realisation ». Le verbe taf\'alu est un inaccompli 2MP de la racine f-e-l. D\'apres les sources etymologiques, f-e-l signifie « faire, agir, accomplir une action ». Le verbe apparait deux fois dans le verset : la premiere avec la negation lam (negation du passe — vous n\'avez pas fait) et la seconde avec lan (negation definitive du futur — vous ne ferez jamais). Cette double negation encadre l\'action dans le temps : ni passe, ni futur. La distinction avec « Effet/Consequence » : le fi\'l est l\'acte lui-meme, pas son resultat. La distinction avec « Etre affecte » : ce sens passif est hors contexte — le sujet agit (ou n\'agit pas), il ne subit pas.",
        axe1_verset: "Le verbe taf\'alu est le pivot du verset — toute la conditionnelle repose sur lui. La structure est : « si vous ne faites pas (lam taf\'alu) et vous ne ferez jamais (lan taf\'alu) alors premunissez-vous ». Le verbe est nie deux fois : une negation passee (lam) et une negation future definitive (lan). Ce double encadrement temporel dit que l\'action est impossible dans tout le temps. Le complement implicite renvoie au defi du verset precedent (produire une sourate semblable). Le champ lexical du verset passe de l\'impossibilite de faire a la consequence de ne pas faire.",
        axe2_voisins: "Le verset 23 lancait le defi : produire une sourate semblable. Le verset 24 constate l\'echec de ce defi. Le verbe taf\'alu reprend le defi sans le renommer — le lecteur comprend que « faire » renvoie a « produire une sourate ». Le verset 25 passera a la recompense des croyants, formant un contraste entre l\'echec des negateurs et la reussite des adherents. La transition est marquee par le passage de la negation (vous ne faites pas) a l\'affirmation (annonce la bonne nouvelle).",
        axe3_sourate: "La sourate al-Baqarah utilise le defi (tahaddi) comme preuve de l\'authenticite de la revelation. Le verbe f-e-l est un terme generique qui couvre tout type d\'action — son utilisation ici montre que le defi concerne l\'acte meme de produire, pas un type specifique de production. La sourate construit progressivement l\'argument : doute (v23) — impossibilite (v24) — consequence (v24b).",
        axe4_coherence: "Le Coran utilise la racine f-e-l dans de nombreux contextes pour designer l\'action humaine ou divine. En 21:73, Dieu inspire a faire le bien (fi\'l al-khayrat). En 2:24, le verbe est utilise sans complement pour designer toute action en general. Le fi\'l est le terme le plus neutre et le plus universel pour l\'action dans le Coran.",
        axe5_frequence: "Pour la mission du khalifa, le verbe « faire » est fondamental — la mission exige l\'action, pas seulement la parole. Le verset 24 dit que les negateurs ne font pas et ne feront jamais. L\'incapacite de faire est le verdict definitif. La mission du khalifa se mesure a ce qu\'il fait, pas a ce qu\'il dit. L\'action est le critere ultime."
      },
      "Effet/Consequence": {
        senses: ["effet"],
        status: "nul",
        proof_ctx: "L\'effet est le resultat de l\'action, pas l\'action elle-meme. Le verset parle de l\'acte de faire (ou de ne pas faire), pas de ses consequences. Hors contexte."
      },
      "Sens isole/Etre affecte": {
        senses: ["etre emu"],
        status: "nul",
        proof_ctx: "Le sens passif « etre affecte, etre emu » est un usage rare et isole de f-e-l. Le contexte est actif (vous ne faites pas), pas passif."
      }
    }
  }},
  { verse_id: 31, word_key: 'wqy', position: 5, analysis_axes: {
    sense_chosen: "se premunir",
    concept_chosen: "Protection/Prevention",
    concepts: {
      "Protection/Prevention": {
        senses: ["se premunir", "se proteger", "se garder"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Protection/Prevention ». Le verbe ittaqu est un imperatif forme VIII de w-q-y. D\'apres les sources etymologiques, w-q-y signifie « proteger, premunir, garder ». La forme VIII (ifta\'ala) est reflechie — elle signifie « se proteger soi-meme, se premunir ». L\'imperatif ordonne aux gens de se premunir activement du feu. La distinction avec « Conscience/Piete » : la taqwa dans le sens de piete est une interpretation theologiquement chargee. Le sens etymologique premier est la protection preventive — l\'acte de se garder d\'un danger. La distinction avec « Prudence » : la prudence est une qualite generale, la protection preventive est un acte specifique face a un danger identifie (le feu).",
        axe1_verset: "Le verbe ittaqu est l\'imperatif central du verset — c\'est l\'ordre donne apres le constat d\'echec. La structure est : « vous n\'avez pas fait, vous ne ferez pas, ALORS premunissez-vous ». Le champ lexical passe de l\'impossibilite a la protection : puisque le defi est impossible, la seule option est de se proteger de la consequence. L\'objet de la protection est al-nar (le feu) — un danger concret et identifie. Le verbe est suivi de toute la description du feu (combustible, preparation), ce qui montre l\'urgence de la protection.",
        axe2_voisins: "Le verset 23 lancait le defi, le verset 24 constate l\'echec et donne l\'ordre de se premunir. La transition est logique : defi impossible, donc protection necessaire. Le verset 25 passera a ceux qui ont reussi (les adherents) — le contraste est entre se premunir du feu et recevoir les jardins. La protection est le minimum pour ceux qui n\'ont pas releve le defi.",
        axe3_sourate: "La sourate al-Baqarah utilise la racine w-q-y dans plusieurs contextes. En 2:21, l\'appel est « adorez votre Maitre afin que vous vous premunissiez » (la\'allakum tattaqun). En 2:24, l\'imperatif est direct : premunissez-vous du feu. La sourate construit progressivement le sens de la taqwa — d\'abord comme espoir (la\'alla), puis comme ordre (ittaqu). La protection preventive est un theme central de la sourate.",
        axe4_coherence: "Le Coran utilise la racine w-q-y dans plus de 250 occurrences. Le verbe ittaqu est l\'un des imperatifs les plus frequents du Coran. Le sens premier est toujours la protection — se garder d\'un danger. La piete (taqwa) est une derivation tardive de ce sens : celui qui se protege du chatiment divin en obeissant est le muttaqi (le premuni). Mais le sens de base reste la protection.",
        axe5_frequence: "Pour la mission du khalifa, la protection preventive est essentielle. Le khalifa ne doit pas attendre le danger pour reagir — il doit se premunir avant que le danger ne survienne. Le verset ordonne la protection face au feu — le khalifa doit identifier les dangers et prendre les mesures preventives necessaires. La taqwa est l\'intelligence de la prevention."
      },
      "Conscience/Piete": {
        senses: ["craindre Dieu", "etre pieux"],
        status: "probable",
        proof_ctx: "La piete (taqwa) est un sens derive de la protection. Le contexte du verset est la protection face au feu (un danger concret), pas la piete abstraite. Mais le lien semantique est reel : se proteger du chatiment divin est la base de la piete. Ce sens est probable mais secondaire dans ce contexte precis.",
        axe1_verset: "La piete serait compatible : craignez Dieu (et donc evitez le feu). Mais le complement direct est le feu, pas Dieu — le verset demande de se proteger du feu, pas de craindre Dieu directement.",
        axe2_voisins: "Le verset 21 utilisait tattaqun avec un sens plus general (afin que vous vous premunissiez). Le verset 24 precise le danger : le feu. Le sens de piete est plus adapte au verset 21, le sens de protection est plus adapte au verset 24.",
        axe3_sourate: "La sourate utilise la racine w-q-y dans les deux sens — piete generale et protection specifique. Le contexte determine le sens dominant.",
        axe4_coherence: "Le Coran utilise ittaqu avec differents complements : ittaqu Allah (craignez Dieu = piete), ittaqu al-nar (premunissez-vous du feu = protection). Le complement determine le sens.",
        axe5_frequence: "La piete et la protection sont deux faces de la meme realite — se premunir du chatiment c\'est craindre Dieu, craindre Dieu c\'est se premunir."
      },
      "Prudence": {
        senses: ["etre prudent"],
        status: "nul",
        proof_ctx: "La prudence est une qualite generale de caractere. Le verset donne un ordre specifique face a un danger precis (le feu). Ce n\'est pas un conseil de prudence generale mais un imperatif de protection."
      }
    }
  }},
  { verse_id: 31, word_key: 'nwr', position: 6, analysis_axes: {
    sense_chosen: "feu",
    concept_chosen: "Feu/Chaleur",
    concepts: {
      "Feu/Chaleur": {
        senses: ["feu", "bruler"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Feu/Chaleur ». Le mot al-nar est un nom feminin defini de la racine n-w-r. D\'apres les sources etymologiques, n-w-r a deux branches semantiques principales : la lumiere (nur) et le feu (nar). Le feu et la lumiere partagent la meme racine car le feu produit de la lumiere. Mais al-nar designe specifiquement le feu — la combustion, la chaleur, la destruction. Avec l\'article defini al-, le feu est connu et determine — ce n\'est pas un feu quelconque mais LE feu eschatologique. La distinction avec « Lumiere/Clarte » : la lumiere (nur) est la composante positive de la racine, le feu (nar) est la composante destructrice. La distinction avec « Fleur/Beaute » : la fleur (nawra) est un sens isole sans rapport avec le contexte.",
        axe1_verset: "Le mot al-nar est l\'objet direct de ittaqu (premunissez-vous du feu). Il ouvre la description de ce dont il faut se proteger. Le champ lexical qui suit est celui de la combustion : combustible (waqud), personnes et pierres comme matiere, preparation (u\'iddat). Le feu est le centre de cette cascade descriptive — tout le reste en decoule. Le feu est un danger reel et concret, pas une metaphore.",
        axe2_voisins: "Le verset 23 parlait du defi de produire une sourate. Le verset 24 passe a la consequence de l\'echec : le feu. La transition est abrupte et volontaire — le texte ne menage pas le lecteur. Le verset 25 passera aux jardins sous lesquels coulent les rivieres — le contraste entre le feu et les jardins est total. Le feu est le sort des negateurs, les jardins sont le sort des adherents.",
        axe3_sourate: "La sourate al-Baqarah mentionne le feu (nar) dans plusieurs passages. En 2:17, le feu est la metaphore de la lumiere perdue des hypocrites. En 2:24, le feu est eschatologique — le chatiment pour les negateurs. La sourate utilise le feu dans les deux sens : metaphorique (2:17) et litteral/eschatologique (2:24). Le feu est un fil conducteur de la sourate.",
        axe4_coherence: "Le Coran mentionne al-nar plus de 140 fois, principalement pour designer le feu eschatologique. L\'expression « premunissez-vous du feu » (ittaqu al-nar) revient en 2:24, 3:131, 66:6. Le feu dont le combustible est les gens et les pierres est specifique a 2:24 et 66:6 — les deux versets partagent la meme formulation.",
        axe5_frequence: "Pour la mission du khalifa, le feu est l\'aboutissement de l\'echec. Celui qui ne remplit pas sa mission s\'expose au feu. Le verset est un avertissement direct : le feu est prepare, son combustible est connu, il attend les recouvrants. La mission du khalifa est d\'eviter ce sort pour lui-meme et pour ceux qu\'il guide."
      },
      "Lumiere/Clarte": {
        senses: ["lumiere", "illuminer", "eclairer"],
        status: "nul",
        proof_ctx: "La lumiere (nur) est le sens positif de n-w-r. Le contexte est celui du feu destructeur (nar), pas de la lumiere bienfaisante. Le mot est al-nar, pas al-nur."
      },
      "Fleur/Beaute": {
        senses: ["fleur"],
        status: "nul",
        proof_ctx: "La fleur (nawra) est un sens isole de n-w-r. Aucun rapport avec le contexte du feu eschatologique."
      }
    }
  }},
  { verse_id: 31, word_key: 'wqd', position: 7, analysis_axes: {
    sense_chosen: "combustible",
    concept_chosen: "Feu/Combustion",
    concepts: {
      "Feu/Combustion": {
        senses: ["allumer", "combustible", "bruler"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Feu/Combustion ». Le mot waquduha est un nom masculin en idafa avec le pronom 3FS (son combustible) de la racine w-q-d. D\'apres les sources etymologiques (Lane\'s), w-q-d signifie « allumer, faire bruler, etre en combustion ». Le waqud est specifiquement ce qui sert a alimenter le feu — le combustible, la matiere qui brule. Le pronom ha renvoie a al-nar (le feu, feminin). La construction waquduha al-nasu wal-hijara dit que le combustible de ce feu est les gens et les pierres — ce sont eux qui alimentent la flamme. Le concept « Feu/Combustion » est le seul concept disponible pour cette racine, ce qui confirme l\'univocite du sens.",
        axe1_verset: "Le mot waquduha est en idafa (possession) avec le feu : « son combustible ». Il introduit la nature du feu — ce feu est alimente par les gens et les pierres. Le champ lexical est celui de la combustion : feu (nar), combustible (waqud), gens (nas), pierres (hijara). La phrase est nominale (pas de verbe) — elle decrit un etat permanent, pas une action ponctuelle. Le combustible du feu est eternel comme le feu lui-meme.",
        axe2_voisins: "Le verset 23 parlait de la revelation. Le verset 24 passe au chatiment. Le combustible precise la nature de ce chatiment — ce ne sont pas des buches qui brulent mais des gens et des pierres. Le verset 25 passera aux fruits et aux jardins — le contraste entre le combustible (destruction) et les fruits (provision) est saisissant.",
        axe3_sourate: "La sourate al-Baqarah utilise le feu comme menace dans plusieurs passages. Mais la precision du combustible (gens et pierres) n\'apparait qu\'en 2:24. Cette precision rend le feu concret et effrayant — il n\'est pas abstrait. La sourate passe du general au specifique : il y a un feu, son combustible est identifie, il est prepare pour un groupe specifique.",
        axe4_coherence: "Le Coran utilise la formule « waquduha al-nasu wal-hijara » en 2:24 et 66:6. Les deux versets sont les seuls a preciser que le combustible du feu est les gens et les pierres. La formulation est identique dans les deux cas. Le waqud est un terme technique precis — le Coran l\'utilise rarement, ce qui lui donne un poids particulier.",
        axe5_frequence: "Pour la mission du khalifa, le combustible est un avertissement : ceux qui refusent la verite deviennent le carburant de leur propre destruction. Le khalifa doit comprendre que l\'inaction face a la verite a des consequences materielles et concretes — pas seulement abstraites."
      }
    }
  }},
  { verse_id: 31, word_key: 'nws', position: 8, analysis_axes: {
    sense_chosen: "gens",
    concept_chosen: "Humanite/Peuple",
    concepts: {
      "Humanite/Peuple": {
        senses: ["gens", "humains", "peuple"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Humanite/Peuple ». Le mot al-nasu est un nom masculin defini pluriel au nominatif de la racine n-w-s (ou n-s-y selon certaines analyses). D\'apres les sources etymologiques, al-nas designe les gens, les humains en general — le genre humain dans sa collectivite. Le mot est ici sujet de la phrase nominale waquduha al-nasu — les gens sont le combustible du feu. Le choix de al-nas (pas al-insan, pas al-bashar) souligne la dimension collective — ce sont les gens en masse, pas un individu. Le concept « Humanite/Peuple » capture cette dimension collective.",
        axe1_verset: "Le mot al-nasu est le premier element du combustible — les gens. Il est coordonne avec al-hijara (les pierres) par la conjonction wa. La juxtaposition gens + pierres est frappante : des etres vivants mis au meme niveau que des mineraux. Le champ lexical reduit les humains a de la matiere — ils sont le combustible, pas les victimes. Cette deshumanisation est le resultat de leur choix de recouvrir la verite.",
        axe2_voisins: "Le verset 23 s\'adressait aux gens comme interlocuteurs (ya ayyuha al-nas). Le verset 24 les transforme en combustible. La transition est brutale — du statut d\'interlocuteur au statut de matiere a bruler. Le verset 25 restituera la dignite humaine en parlant de jardins et de conjoints. Le contraste est entre etre combustible et etre resident du jardin.",
        axe3_sourate: "La sourate al-Baqarah utilise al-nas dans le premier appel (2:21 — ya ayyuha al-nas, o les gens). Les gens sont d\'abord appeles a adorer leur Maitre, puis avertis que s\'ils refusent, ils deviennent le combustible du feu. La sourate construit une progression : appel — defi — consequence.",
        axe4_coherence: "Le Coran utilise al-nas dans des centaines d\'occurrences pour designer l\'humanite collective. En 2:24, l\'usage est unique — les gens sont nommes comme combustible. Cette formulation specifique ne se retrouve qu\'en 66:6. Le Coran utilise generalement al-nas comme destinataire de la parole divine, pas comme matiere de la punition.",
        axe5_frequence: "Pour la mission du khalifa, les gens sont la matiere de la mission — c\'est pour eux que le khalifa travaille. Le verset montre que sans la protection de la verite, les gens deviennent le combustible de leur propre destruction. La mission du khalifa est de prevenir cette transformation en guidant les gens vers la verite."
      }
    }
  }},
  { verse_id: 31, word_key: 'hjr', position: 9, analysis_axes: {
    sense_chosen: "pierre",
    concept_chosen: "Pierre/Roche",
    concepts: {
      "Pierre/Roche": {
        senses: ["pierre", "caillou"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Pierre/Roche ». Le mot al-hijarata est un nom feminin defini pluriel au nominatif de la racine h-j-r. D\'apres les sources etymologiques, h-j-r a plusieurs branches semantiques : la pierre (hajar), l\'interdiction (hajr, hijr), et le giron (hijr). Le mot al-hijara designe specifiquement les pierres — les roches, les mineraux. Le contexte est celui du combustible du feu : les pierres accompagnent les gens comme matiere a bruler. La distinction avec « Interdiction/Protection » : le hajr (interdire, empecher) est un autre sens de la meme racine mais le mot utilise est al-hijara (les pierres), pas al-hajr (l\'interdiction). La distinction avec « Giron » : le hijr (giron, sein) est un sens isole sans rapport avec le contexte.",
        axe1_verset: "Le mot al-hijarata est le second element du combustible, coordonne avec al-nasu par wa (et). La juxtaposition gens et pierres cree un effet de choc : des etres vivants et des mineraux inertes sont mis sur le meme plan comme matiere a bruler. Les pierres sont normalement incombustibles — leur presence dans le combustible du feu souligne le caractere surnaturel de ce feu. Un feu qui brule meme les pierres est un feu d\'une intensite inimaginable.",
        axe2_voisins: "Le verset 23 parlait de sourate (production intellectuelle). Le verset 24 descend au niveau le plus materiel — pierres et gens comme combustible. Le contraste entre l\'intellectuel (produire une sourate) et le materiel (bruler des pierres) est maximal. Le verset 25 remontera vers le vegetal et l\'humain (fruits, jardins, conjoints).",
        axe3_sourate: "La sourate al-Baqarah mentionne les pierres dans d\'autres contextes : en 2:60, Moise frappe la pierre et douze sources jaillissent. En 2:74, les coeurs deviennent durs comme des pierres. En 2:24, les pierres sont combustible. La pierre a donc trois fonctions dans la sourate : source d\'eau (2:60), metaphore de la durete (2:74), combustible (2:24).",
        axe4_coherence: "Le Coran mentionne al-hijara en 2:24, 66:6 (combustible du feu), 2:60 (pierres frappees par Moise), 2:74 (durete des coeurs). L\'association pierres + gens comme combustible est specifique a 2:24 et 66:6. Les exegetes rapportent que les pierres mentionnees sont les idoles de pierre que les gens adoraient.",
        axe5_frequence: "Pour la mission du khalifa, les pierres representent la matiere inerte — ce qui n\'a ni vie ni conscience. Mettre les gens au meme niveau que les pierres est le verdict le plus dur : le recouvrant a perdu ce qui le distinguait de la matiere inerte. La mission du khalifa est de maintenir les gens au-dessus du niveau mineral."
      },
      "Interdiction/Protection": {
        senses: ["interdire", "proteger", "empecher"],
        status: "nul",
        proof_ctx: "L\'interdiction (hajr) est un autre sens de h-j-r. Mais le mot utilise est al-hijara (les pierres, forme plurielle), pas al-hajr (l\'interdiction). Le contexte est celui du combustible du feu — des pierres materielles, pas une interdiction abstraite."
      },
      "Giron": {
        senses: ["giron", "sein"],
        status: "nul",
        proof_ctx: "Le giron (hijr) est un sens isole de h-j-r sans rapport avec le contexte. Le verset parle de pierres qui brulent, pas de giron maternel."
      }
    }
  }},
  { verse_id: 31, word_key: 'edd', position: 10, analysis_axes: {
    sense_chosen: "preparer",
    concept_chosen: "Preparation",
    concepts: {
      "Preparation": {
        senses: ["preparer", "appreter"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Preparation ». Le verbe u\'iddat est un accompli passif forme IV de la racine e-d-d. D\'apres les sources etymologiques, e-d-d signifie « compter, denombrer, preparer ». La forme IV (af\'ala) ajoute la causalite : faire en sorte que quelque chose soit pret. Le passif dit que la preparation a ete faite par un agent non nomme — la preparation est un fait accompli dont l\'auteur est implicitement Dieu. Le sujet grammatical feminin renvoie a al-nar (le feu, feminin). Le feu a ete prepare — il n\'est pas spontane, il a ete concu et amenage. La distinction avec « Nombre/Denombrement » : le denombrement est le sens premier de e-d-d, mais la forme IV passive avec le sens « a ete preparee » est clairement « Preparation ». La distinction avec « Morsure » : sens isole sans rapport.",
        axe1_verset: "Le verbe u\'iddat cloture la description du feu : il a un combustible (gens et pierres) et il a ete prepare pour un groupe specifique (les recouvrants). La voix passive souligne que le feu n\'est pas un accident mais une preparation deliberee. Le complement li-l-kafirina (pour les recouvrants) precise le destinataire de cette preparation. Le champ lexical passe de la menace (premunissez-vous) a la realite (le feu est deja prepare).",
        axe2_voisins: "Le verset 23 lancait le defi, le verset 24 montre la consequence. Le verbe u\'iddat (a ete preparee) dit que la consequence n\'est pas hypothetique mais deja en place. Le verset 25 montrera que les jardins aussi sont prepares — le parallelisme entre feu prepare et jardins disponibles est structurel.",
        axe3_sourate: "La sourate al-Baqarah utilise la notion de preparation dans plusieurs contextes. En 2:24, le feu est prepare pour les recouvrants. En 3:133, le jardin est prepare pour les premunisseurs (muttaqin). La sourate etablit que les deux destinations sont deja pretes — le choix appartient a l\'humain.",
        axe4_coherence: "Le Coran utilise la forme IV passive u\'iddat dans plusieurs contextes eschatologiques. En 3:131, « le feu qui a ete prepare pour les recouvrants ». En 3:133, « le jardin qui a ete prepare pour les premunisseurs ». La preparation divine est systematique — rien n\'est laisse au hasard.",
        axe5_frequence: "Pour la mission du khalifa, la preparation est un principe fondamental. Le feu est prepare, le jardin est prepare — le khalifa doit se preparer aussi. La mission exige la preparation, pas l\'improvisation. Le verset montre que Dieu a prepare les consequences — le khalifa doit preparer ses actions."
      },
      "Nombre/Denombrement": {
        senses: ["compter", "nombre", "denombrer"],
        status: "nul",
        proof_ctx: "Le denombrement est le sens premier de e-d-d. Mais le verbe u\'iddat a la forme IV passive signifie clairement « a ete preparee ». Le contexte ne parle pas de compter mais de preparer un chatiment."
      },
      "Sens isole/Morsure": {
        senses: ["mordre"],
        status: "nul",
        proof_ctx: "Le sens « mordre » est un usage rare et isole de e-d-d. Aucun rapport avec le contexte du feu prepare."
      }
    }
  }},
  { verse_id: 31, word_key: 'kfr', position: 11, analysis_axes: {
    sense_chosen: "recouvrant",
    concept_chosen: "Couverture/Dissimulation",
    concepts: {
      "Couverture/Dissimulation": {
        senses: ["recouvrir", "cacher", "mecreant", "recouvrant"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Couverture/Dissimulation ». Le mot al-kafirina est un participe actif pluriel masculin defini au genitif de la racine k-f-r, precede de la preposition li (pour). D\'apres les sources etymologiques, k-f-r signifie « recouvrir, cacher, couvrir la verite ». Le kafir est celui qui fait activement l\'action de recouvrir — le participe actif dit que c\'est une action en cours et permanente. La forme est agentive : le kafir n\'est pas un etat passif mais un acte delibere de dissimulation. La preposition li (pour) indique la destination du feu — il est prepare POUR les recouvrants. La distinction avec le mot « mecreant » : mecreant est une traduction interpretative qui masque le sens etymologique de « celui qui recouvre ». Le kafir n\'est pas defini par son manque de foi mais par son acte de recouvrement.",
        axe1_verset: "Le mot al-kafirina cloture le verset comme la destination du feu. La structure du verset se termine par une precision finale : le feu n\'est pas pour tout le monde mais pour les recouvrants. Le champ lexical passe du feu (nar), a son combustible (waqud), a sa preparation (u\'iddat), a ses destinataires (kafirina). Le verset construit une cascade descriptive qui se referme sur les recouvrants.",
        axe2_voisins: "Le verset 23 s\'adressait a ceux qui doutent de la revelation. Le verset 24 identifie le sort des recouvrants — ceux qui cachent la verite. Le verset 25 passera aux adherents — ceux qui ont accepte la verite. Le contraste recouvrants/adherents est le pivot entre les versets 24 et 25.",
        axe3_sourate: "La sourate al-Baqarah utilise la racine k-f-r dans tout son developement. En 2:6, ceux qui ont recouvert ne croiront pas. En 2:7, leurs centres sont scelles. En 2:24, le feu leur est prepare. La sourate construit progressivement le portrait du kafir : il recouvre (2:6), il est scelle (2:7), il est puni (2:24). Le kafir n\'est pas une categorie fixe mais un processus : celui qui choisit de recouvrir.",
        axe4_coherence: "Le Coran utilise la racine k-f-r plus de 500 fois. Le participe actif kafir/kafirun/kafirina est la forme la plus frequente. Le Coran insiste sur la dimension active du kufr — ce n\'est pas un manque de foi passif mais un recouvrement actif de la verite. Le sens etymologique (recouvrir) est fondamental pour comprendre le concept coranique.",
        axe5_frequence: "Pour la mission du khalifa, le recouvrement de la verite est l\'ennemi principal. Le khalifa doit devoiler ce que les recouvrants cachent. Le verset montre la consequence ultime du recouvrement — le feu. La mission du khalifa est de prevenir ce recouvrement en maintenant la verite visible et accessible."
      }
    }
  }},

  // =====================================================
  // VERSET 2:25 (verse_id=32)
  // =====================================================
  { verse_id: 32, word_key: 'bshr', position: 1, analysis_axes: {
    sense_chosen: "annoncer",
    concept_chosen: "Annonce/Rejouissance",
    concepts: {
      "Annonce/Rejouissance": {
        senses: ["annoncer une bonne nouvelle", "rejouir", "annoncer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Annonce/Rejouissance ». Le verbe bashshir est un imperatif forme II de la racine b-sh-r. D\'apres les sources etymologiques, b-sh-r signifie « annoncer une bonne nouvelle, rejouir par une annonce ». La forme II (fa\'\'ala) est intensive : elle insiste sur l\'acte d\'annoncer. L\'imperatif s\'adresse au prophete — c\'est un ordre de transmettre la bonne nouvelle. Le sens premier de b-sh-r est la peau (bashar), puis l\'expression du visage (bashara = expression de joie visible sur le visage), puis l\'annonce qui provoque cette joie. La distinction avec « Peau/Surface » : le sens de peau est le sens premier etymologique mais le contexte est celui de l\'annonce. La distinction avec « Humanite » (bashar = humain) : ce sens est un autre derivee de la meme racine mais le verbe forme II est specifiquement l\'annonce.",
        axe1_verset: "Le verbe bashshir ouvre le verset comme un imperatif — c\'est un ordre de communiquer une bonne nouvelle. Le champ lexical qui suit est celui de la recompense : jardins, rivieres, fruits, conjoints purifies, eternite. Le verbe est le portail vers tout ce bonheur — il annonce ce qui va etre decrit. La structure est : annonce (bashshir) → destinataires (ceux qui ont adhere et fait les oeuvres reformatrices) → contenu de l\'annonce (jardins, etc.).",
        axe2_voisins: "Le verset 24 decrivait le feu pour les recouvrants. Le verset 25 passe a la recompense des adherents. Le contraste est maximal : feu/jardins, combustible/fruits, recouvrants/adherents. Le verbe bashshir marque cette transition — il ouvre la section positive apres la section negative. La sourate alterne ainsi entre menace et promesse.",
        axe3_sourate: "La sourate al-Baqarah utilise la racine b-sh-r dans plusieurs contextes d\'annonce. En 2:25, c\'est l\'annonce des jardins. La sourate utilise systematiquement l\'alternance menace/promesse pour structurer son argumentation. Le verbe bashshir est le marqueur de la promesse — il signal que la bonne nouvelle arrive.",
        axe4_coherence: "Le Coran utilise le verbe bashshir dans de nombreux passages pour annoncer la bonne nouvelle aux croyants (3:39, 10:2, 33:47). Le verbe est toujours suivi du contenu de l\'annonce. L\'imperatif bashshir est adresse au prophete comme transmetteur de la bonne nouvelle divine.",
        axe5_frequence: "Pour la mission du khalifa, l\'annonce de la bonne nouvelle est essentielle. Le khalifa ne doit pas seulement avertir (indhir) mais aussi annoncer (bashshir). La mission complete inclut les deux dimensions : avertir du danger et annoncer la recompense. Le verset 25 est la dimension positive de la mission."
      },
      "Peau/Surface": {
        senses: ["peau", "surface"],
        status: "nul",
        proof_ctx: "La peau (bashar) est le sens etymologique premier de b-sh-r. Mais le verbe forme II bashshir est specifiquement l\'annonce d\'une bonne nouvelle, pas un acte lie a la peau. Hors contexte."
      }
    }
  }},
  { verse_id: 32, word_key: 'amn', position: 3, analysis_axes: {
    sense_chosen: "adherer",
    concept_chosen: "Foi/Adhesion",
    concepts: {
      "Foi/Adhesion": {
        senses: ["croire", "avoir la foi", "adherer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Foi/Adhesion ». Le verbe amanu est a l\'accompli forme IV 3MP — « ils ont adhere ». La forme IV (af\'ala) ajoute la causalite : faire entrer la confiance en soi. L\'accompli dit que leur adhesion est un fait accompli et stable — ce n\'est pas un processus en cours mais un acte realise. Le mot est dans la formule alladhina amanu (ceux qui ont adhere), le marqueur coranique standard des croyants sinceres. La distinction avec « Securite/Confiance » : le contexte est la foi, pas la securite physique.",
        axe1_verset: "Le mot amanu identifie les destinataires de l\'annonce — ce sont ceux qui ont adhere. Il est coordonne avec \'amilu al-salihat (et fait les oeuvres reformatrices) — les deux conditions pour meriter l\'annonce. La foi (adhesion) et les oeuvres (action) sont inseparables dans ce verset. L\'adherent sans oeuvres n\'est pas mentionne — il faut les deux. Le champ lexical est celui de l\'engagement total : adhesion interieure + action exterieure.",
        axe2_voisins: "Le verset 24 parlait des recouvrants (kafirina). Le verset 25 passe aux adherents (amanu). Le contraste recouvrants/adherents structure les versets 24-25. L\'adhesion est l\'antithese du recouvrement — adherer c\'est accepter la verite, recouvrir c\'est la cacher.",
        axe3_sourate: "La formule alladhina amanu est omnipresente dans la sourate 2 — elle structure la distinction entre croyants et non-croyants. Les versets 3-5 decrivent les croyants sinceres. Le verset 25 leur promet la recompense. La sourate utilise amanu comme critere de verite et de destinee.",
        axe4_coherence: "Le Coran utilise alladhina amanu dans des centaines de versets pour designer les croyants sinceres. La formule est un marqueur d\'identite dans tout le corpus coranique. La forme IV accompli 3MP est systematiquement utilisee pour la foi stable et accomplie.",
        axe5_frequence: "Pour la mission du khalifa, l\'adhesion est le premier pas. Sans adhesion a la verite, aucune oeuvre n\'a de valeur. Le verset montre que l\'adhesion est la condition prealable a la recompense. La mission du khalifa commence par l\'adhesion sincere."
      },
      "Securite/Confiance": {
        senses: ["etre en securite"],
        status: "nul",
        proof_ctx: "Le contexte est la foi (alladhina amanu = ceux qui ont adhere). Pas de contexte de securite physique."
      }
    }
  }},
  { verse_id: 32, word_key: 'eml', position: 4, analysis_axes: {
    sense_chosen: "faire",
    concept_chosen: "Action/Travail",
    concepts: {
      "Action/Travail": {
        senses: ["travailler", "faire", "agir", "accomplir"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Action/Travail ». Le verbe \'amilu est a l\'accompli 3MP de la racine e-m-l. D\'apres les sources etymologiques, e-m-l signifie « travailler, agir, faire une oeuvre ». Le \'amal est l\'action deliberee et consciente — pas un acte reflexe mais un travail voulu. L\'accompli dit que les oeuvres ont ete realisees — ce sont des actes accomplis, pas des intentions. Le complement direct est al-salihat (les reformatrices) — les oeuvres qui reforment, qui rendent les choses bonnes. La distinction avec « Usage » (sens isole) : le sens « user » est rare et hors contexte.",
        axe1_verset: "Le verbe \'amilu est coordonne avec amanu par la conjonction wa — « ceux qui ont adhere ET fait ». Les deux verbes forment une paire indissociable : adhesion + action. Le complement al-salihat precise le type d\'action : les oeuvres reformatrices. Le champ lexical du verset associe l\'action humaine (\'amilu) a la recompense divine (jardins, fruits, conjoints). L\'action est la cause, la recompense est l\'effet.",
        axe2_voisins: "Le verset 24 parlait de ne pas faire (lam taf\'alu). Le verset 25 parle de faire (\'amilu). Le contraste est entre l\'inaction des negateurs (ils ne font pas le defi) et l\'action des adherents (ils font les oeuvres reformatrices). Le verbe change de racine — de f-e-l (faire, general) a e-m-l (travailler, delibere) — ce qui montre que l\'action des croyants est consciente et voulue.",
        axe3_sourate: "La sourate al-Baqarah associe systematiquement amanu et \'amilu al-salihat. Cette formule revient dans les versets 25, 62, 82, 277 de la sourate. Elle est le critere double de la recompense : foi + action reformatrice. La sourate insiste sur l\'inseparabilite des deux.",
        axe4_coherence: "Le Coran utilise la formule alladhina amanu wa \'amilu al-salihat dans plus de 50 versets. C\'est l\'une des formules les plus recurrentes du Coran. Elle etablit que la foi seule ou les oeuvres seules ne suffisent pas — les deux sont necessaires. Le \'amal est toujours delibere et conscient dans le Coran.",
        axe5_frequence: "Pour la mission du khalifa, l\'action deliberee est le complement necessaire de la foi. Le khalifa ne peut pas se contenter d\'adherer — il doit agir. Le verset montre que la recompense est conditionnee par l\'action reformatrice. La mission du khalifa est une mission d\'action, pas seulement de contemplation."
      },
      "Sens isole/Usage": {
        senses: ["user"],
        status: "nul",
        proof_ctx: "Le sens « user » est un usage rare et isole de e-m-l. Le contexte est celui des oeuvres deliberees, pas de l\'usure."
      }
    }
  }},
  { verse_id: 32, word_key: 'slh', position: 5, analysis_axes: {
    sense_chosen: "reformer",
    concept_chosen: "Bonte/Rectitude",
    concepts: {
      "Bonte/Rectitude": {
        senses: ["reformer", "etre bon", "corriger", "reparer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Bonte/Rectitude ». Le mot al-salihati est un participe actif feminin pluriel defini de la racine s-l-h. D\'apres les sources etymologiques, s-l-h signifie « etre bon, etre en bon etat, reformer, corriger ». Le participe actif feminin pluriel designe les oeuvres qui reforment activement — les choses qui rendent bon, qui corrigent, qui reparent. L\'article defini al- designe des oeuvres connues et identifiees. Le sens etymologique « reformer » est plus precis que le sens vague « bonnes oeuvres ». La distinction entre « bonnes oeuvres » et « oeuvres reformatrices » est fondamentale : les premieres sont jugees par leur moralite abstraite, les secondes par leur effet reformateur concret.",
        axe1_verset: "Le mot al-salihati qualifie les oeuvres que les adherents ont faites. Il est complement direct de \'amilu (ils ont fait les reformatrices). Le champ lexical associe la reforme humaine a la recompense divine : ceux qui reforment recoivent des jardins. La logique est causale — la reforme produit la recompense. Le participe actif dit que ces oeuvres sont en cours de reformer — elles sont dynamiques, pas statiques.",
        axe2_voisins: "Le verset 24 parlait de recouvrants et de feu. Le verset 25 parle d\'adherents et de jardins. Le mot al-salihati complete la description des adherents : ils ne se contentent pas d\'adherer, ils font des oeuvres qui reforment. Le contraste avec les recouvrants est total : recouvrir (cacher la verite) est l\'oppose de reformer (rendre les choses bonnes).",
        axe3_sourate: "La sourate al-Baqarah associe systematiquement iman (foi) et \'amal salih (oeuvre reformatrice). En 2:62, meme les juifs, les chretiens et les sabeens qui ont adhere et fait les oeuvres reformatrices ont leur recompense. La sourate enseigne que la reforme est universelle — elle n\'est pas reservee a un groupe mais ouverte a quiconque adhere et agit.",
        axe4_coherence: "Le Coran utilise al-salihat dans plus de 60 versets, toujours associe a la foi. Le participe actif insiste sur l\'effet reformateur des oeuvres. Le Coran ne parle pas de « bonnes oeuvres » dans l\'abstrait mais d\'oeuvres qui reforment concretement — qui rendent les situations meilleures.",
        axe5_frequence: "Pour la mission du khalifa, la reforme est la substance meme de la mission. Le khalifa n\'est pas la pour contempler mais pour reformer — corriger les situations, reparer les injustices, rendre les choses bonnes. Le verset montre que la recompense est proportionnelle a la reforme accomplie."
      }
    }
  }},
  { verse_id: 32, word_key: 'jnn', position: 6, analysis_axes: {
    sense_chosen: "jardin",
    concept_chosen: "Jardin/Paradis",
    concepts: {
      "Jardin/Paradis": {
        senses: ["jardin", "paradis"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Jardin/Paradis ». Le mot jannatin est un nom feminin pluriel indefini au genitif de la racine j-n-n. D\'apres les sources etymologiques (Lane\'s), j-n-n signifie « couvrir, cacher, voiler ». La janna est un jardin dont les arbres couvrent le sol de leur ombre — un lieu couvert de vegetation. Le sens etymologique « couvrir » explique le mot : le jardin est un lieu ou la vegetation vous couvre et vous protege. Le pluriel indefini jannatin dit qu\'il y a plusieurs jardins, sans les specifier. La distinction avec « Couverture/Dissimulation » : la couverture est le sens etymologique premier, mais le mot janna est devenu specifiquement le jardin. La distinction avec « Folie » (junun) : la folie est un autre derive de j-n-n (l\'esprit est « couvert »), sans rapport avec le contexte.",
        axe1_verset: "Le mot jannatin est le premier element de la recompense — les jardins. Il est suivi de tajri min tahtiha al-anhar (sous lesquels coulent les rivieres). Le champ lexical est celui du paradis terrestre : jardins, rivieres, fruits, conjoints. La description est sensorielle — elle fait appel a la vue (jardins), a l\'ouie (rivieres qui coulent), au gout (fruits), a l\'intimite (conjoints). Les jardins sont le cadre general dans lequel les autres elements prennent place.",
        axe2_voisins: "Le verset 24 decrivait le feu et son combustible. Le verset 25 decrit les jardins et leurs fruits. Le contraste est total : feu vs jardins, combustible (gens et pierres) vs provision (fruits), destruction vs vie. Les jardins sont l\'antithese du feu — un lieu de vie, de fraicheur et de beaute face a un lieu de combustion et de destruction.",
        axe3_sourate: "La sourate al-Baqarah mentionne les jardins dans plusieurs contextes : 2:25 (recompense des adherents), 2:35 (jardin d\'Adam), 2:265-266 (paraboles agricoles). Le jardin est un motif recurrent dans la sourate. En 2:35, Adam habitait le jardin avant la descente sur terre. En 2:25, les adherents retrouvent des jardins — la boucle est bouclee.",
        axe4_coherence: "Le Coran mentionne al-janna ou jannat dans plus de 140 versets. Le jardin est la recompense standard des croyants sinceres. La description « sous lesquels coulent les rivieres » (tajri min tahtiha al-anhar) est la formule la plus recurrente pour decrire les jardins coraniques.",
        axe5_frequence: "Pour la mission du khalifa, les jardins representent l\'aboutissement positif de la mission. Le khalifa qui adhere et reforme recevra des jardins. La mission terrestre prepare la residence eternelle. Les jardins sont la promesse qui motive l\'action reformatrice."
      },
      "Couverture/Dissimulation": {
        senses: ["couvrir", "cacher", "voiler"],
        status: "probable",
        proof_ctx: "La couverture est le sens etymologique premier de j-n-n. Le jardin est etymologiquement un lieu ou la vegetation couvre le sol. Ce sens est present en arriere-plan : le jardin couvre et protege ses residents. Mais le mot janna est devenu specifiquement « jardin » dans l\'usage coranique.",
        axe1_verset: "La couverture serait compatible : les jardins couvrent et protegent les residents. Mais le texte decrit des jardins avec rivieres et fruits — le sens concret de jardin domine.",
        axe2_voisins: "Le contraste avec le feu fonctionne mieux avec « jardin » qu\'avec « couverture ». Le feu expose et detruit, le jardin couvre et protege.",
        axe3_sourate: "La sourate utilise j-n-n dans le sens de jardin partout — le sens de couverture est sous-jacent mais pas premier.",
        axe4_coherence: "Le Coran utilise janna pour le jardin paradisiaque systematiquement. Le sens de couverture est etymologique, pas fonctionnel dans l\'usage coranique.",
        axe5_frequence: "La couverture protectrice des jardins est un aspect de la recompense — les residents sont couverts et proteges."
      },
      "Folie": {
        senses: ["devenir fou", "posseder"],
        status: "nul",
        proof_ctx: "La folie (junun) est un derive de j-n-n (l\'esprit est couvert). Aucun rapport avec le contexte des jardins paradisiaques."
      },
      "Protection/Bouclier": {
        senses: ["bouclier", "proteger"],
        status: "nul",
        proof_ctx: "Le bouclier (junna) est un derive de j-n-n (ce qui couvre et protege). Le contexte parle de jardins, pas de boucliers."
      }
    }
  }},
  { verse_id: 32, word_key: 'jry', position: 7, analysis_axes: {
    sense_chosen: "couler",
    concept_chosen: "Ecoulement/Mouvement",
    concepts: {
      "Ecoulement/Mouvement": {
        senses: ["couler", "circuler", "se produire"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Ecoulement/Mouvement ». Le verbe tajri est un inaccompli 3FS de la racine j-r-y. D\'apres les sources etymologiques, j-r-y signifie « couler, circuler, s\'ecouler ». L\'inaccompli dit que l\'ecoulement est continu et permanent — les rivieres coulent sans cesse. Le sujet est al-anhar (les rivieres) et le lieu est min tahtiha (de sous eux/elles). Le verbe est precede de la description des jardins — les rivieres coulent sous les jardins. La distinction avec « Nourriture » (sens isole) : aucun rapport avec le contexte.",
        axe1_verset: "Le verbe tajri est le premier verbe actif dans la description des jardins. Il anime la scene — les jardins ne sont pas statiques, ils sont traverses par des rivieres en mouvement. L\'inaccompli dit que le mouvement est perpetuel. La construction tajri min tahtiha al-anhar (coulent de sous eux les rivieres) place les rivieres sous les jardins — l\'eau court en dessous, nourrissant les arbres par en bas. Le champ lexical est celui de la vie en mouvement : couler, fruits, provision.",
        axe2_voisins: "Le verset 24 decrivait un feu statique (prepare, avec son combustible). Le verset 25 decrit des jardins dynamiques (les rivieres coulent). Le contraste est entre l\'immobilite de la punition et le mouvement de la recompense. Le feu est un etat, le jardin est un lieu vivant.",
        axe3_sourate: "La formule tajri min tahtiha al-anhar est l\'une des plus frequentes de la sourate pour decrire les jardins. Elle revient en 2:25, 2:266. La sourate associe systematiquement les jardins aux rivieres — l\'eau est la source de vie des jardins.",
        axe4_coherence: "Le Coran utilise la formule tajri min tahtiha al-anhar dans plus de 30 versets. C\'est la description standard des jardins paradisiaques. L\'ecoulement permanent des rivieres symbolise la provision inepuisable — l\'eau ne tarit jamais.",
        axe5_frequence: "Pour la mission du khalifa, l\'ecoulement des rivieres represente la provision continue. La mission est soutenue par un flux permanent de grace divine — comme les rivieres sous les jardins. Le khalifa puise dans ce flux pour nourrir sa mission."
      },
      "Sens isole/Nourriture": {
        senses: ["nourriture"],
        status: "nul",
        proof_ctx: "Le sens « nourriture » (jiraya) est un derive rare de j-r-y. Le contexte parle de rivieres qui coulent, pas de nourriture."
      }
    }
  }},
  { verse_id: 32, word_key: 'tht', position: 8, analysis_axes: {
    sense_chosen: "sous",
    concept_chosen: "Position inferieure",
    concepts: {
      "Position inferieure": {
        senses: ["sous", "en dessous"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Position inferieure ». Le mot tahtiha est un nom avec pronom 3FS (sous eux/elles) de la racine t-h-t. D\'apres les sources etymologiques, t-h-t signifie « etre en dessous, la partie inferieure ». Le mot est en idafa avec le pronom ha qui renvoie aux jardins. La construction min tahtiha (de sous elles) indique que les rivieres coulent en dessous des jardins. La distinction avec « Terre basse » (sens isole) : ce sens est un usage rare sans rapport avec le contexte.",
        axe1_verset: "Le mot tahtiha situe les rivieres par rapport aux jardins — elles sont en dessous. La description est spatiale : les jardins sont en haut, les rivieres en bas. L\'eau nourrit les arbres par les racines — la vie vient du bas. Le champ lexical est celui de la structure verticale du paradis : jardins au-dessus, rivieres en dessous.",
        axe2_voisins: "Le verset 24 ne contenait pas de description spatiale du feu. Le verset 25 introduit une spatialite : dessus (jardins) et dessous (rivieres). Le paradis a une structure, l\'enfer n\'est que combustion.",
        axe3_sourate: "La sourate utilise tahtiha dans la formule standard tajri min tahtiha al-anhar. La position inferieure des rivieres est un element constant de la description paradisiaque dans la sourate.",
        axe4_coherence: "Le Coran utilise min tahtiha dans plus de 30 versets paradisiaques. La constance de cette formule montre que la structure spatiale du paradis est fixe : jardins au-dessus, rivieres en dessous.",
        axe5_frequence: "Pour la mission du khalifa, la position inferieure des rivieres montre que la source de la vie est invisible — elle coule en dessous, nourrissant par les racines. La mission du khalifa est nourrie par des forces invisibles."
      },
      "Sens isole/Terre": {
        senses: ["terre basse"],
        status: "nul",
        proof_ctx: "Le sens « terre basse » est un usage rare de t-h-t. Le contexte est spatial (sous les jardins), pas geographique."
      }
    }
  }},
  { verse_id: 32, word_key: 'nhr', position: 9, analysis_axes: {
    sense_chosen: "riviere",
    concept_chosen: "Cours d\'eau",
    concepts: {
      "Cours d\'eau": {
        senses: ["riviere", "fleuve", "canal"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Cours d\'eau ». Le mot al-anharu est un nom masculin defini pluriel au nominatif de la racine n-h-r. D\'apres les sources etymologiques, n-h-r signifie « couler abondamment, creuser un canal ». Le nahr est un cours d\'eau — une riviere, un fleuve, un canal. Le pluriel al-anhar designe les rivieres — plusieurs cours d\'eau coulent sous les jardins. L\'article defini al- designe les rivieres connues du paradis (lait, miel, vin, eau — selon d\'autres versets). La distinction avec « Abondance » : l\'abondance de l\'ecoulement est implicite dans « riviere » mais le sens premier est le cours d\'eau lui-meme. La distinction avec « Jour/Clarte » : le nahar (jour) est un homonyme de nahr (riviere) — meme racine, sens differents.",
        axe1_verset: "Le mot al-anharu est le sujet du verbe tajri (coulent). Les rivieres sont l\'element dynamique des jardins — elles coulent en permanence sous eux. Le champ lexical est celui de l\'eau vive : couler (tajri), sous (tahtiha), rivieres (anhar). L\'eau est la source de vie des jardins.",
        axe2_voisins: "Le verset 24 mentionnait le feu — un element destructeur. Le verset 25 mentionne les rivieres — un element vital. Le contraste feu/eau est elementaire et puissant. Le feu consume, l\'eau nourrit.",
        axe3_sourate: "La sourate al-Baqarah mentionne les rivieres dans la description paradisiaque et dans d\'autres contextes (2:249 — la riviere comme epreuve pour les soldats de Talut). L\'eau est un motif central de la sourate — elle est tantot epreuve, tantot recompense.",
        axe4_coherence: "Le Coran mentionne al-anhar dans la formule paradisiaque standard. En 47:15, le Coran decrit quatre types de rivieres au paradis : eau pure, lait, vin et miel. Les rivieres de 2:25 sont ces memes rivieres paradisiaques.",
        axe5_frequence: "Pour la mission du khalifa, les rivieres representent les flux de provision divine. La mission est traversee par des courants de grace — comme les jardins sont traverses par des rivieres."
      },
      "Abondance": {
        senses: ["couler abondamment"],
        status: "nul",
        proof_ctx: "L\'abondance est un aspect de l\'ecoulement mais le mot al-anhar designe les rivieres elles-memes, pas l\'abondance de leur debit."
      },
      "Jour/Clarte": {
        senses: ["jour", "lumiere du jour"],
        status: "nul",
        proof_ctx: "Le jour (nahar) est un homonyme de la riviere (nahr) — meme racine mais sens different. Le contexte (coulent sous les jardins) est clairement celui des rivieres."
      }
    }
  }},
  { verse_id: 32, word_key: 'rzq', position: 10, analysis_axes: {
    sense_chosen: "pourvoir",
    concept_chosen: "Provision/Subsistance",
    concepts: {
      "Provision/Subsistance": {
        senses: ["pourvoir", "provision", "subsistance"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Provision/Subsistance ». Le verbe ruziqu est un accompli passif 3MP de la racine r-z-q, et le nom rizqan est un accusatif indefini. D\'apres les sources etymologiques, r-z-q signifie « pourvoir, fournir la subsistance ». Le passif dit que les residents sont pourvus par un pourvoyeur non nomme — la provision vient de Dieu sans qu\'il soit nomme. Le nom rizq est la provision elle-meme — ce qui est fourni. La racine apparait trois fois dans le verset (ruziqu, rizqan, ruziqna) — cette repetition souligne l\'abondance de la provision. La distinction est simple : la provision est le seul sens pertinent de r-z-q dans ce contexte.",
        axe1_verset: "Le verbe ruziqu introduit la scene de la provision : chaque fois qu\'ils sont pourvus d\'un fruit, ils disent « c\'est ce dont nous avons ete pourvus avant ». La triple repetition de r-z-q cree un echo sonore et semantique — la provision est le theme central de cette partie du verset. Le champ lexical est celui de l\'abondance renouvelee : provision, fruit, « ce dont nous avons ete pourvus avant » — la provision est perpetuelle et rappelle une provision anterieure.",
        axe2_voisins: "Le verset 24 ne mentionnait aucune provision — le feu n\'a que du combustible. Le verset 25 est rempli de provision — fruits, rivieres, conjoints. Le contraste entre l\'absence de provision (enfer) et l\'abondance de provision (paradis) est total.",
        axe3_sourate: "La sourate al-Baqarah utilise la racine r-z-q dans plusieurs contextes : 2:3 (les premunisseurs depensent de leur provision), 2:22 (les fruits comme provision), 2:25 (la provision paradisiaque). La provision est un theme central de la sourate — elle vient de Dieu et doit etre redistribuee.",
        axe4_coherence: "Le Coran utilise la racine r-z-q dans plus de 120 versets. La provision divine est un concept fondamental — tout ce que l\'humain recoit est un rizq de Dieu. En 2:25, la provision paradisiaque est un echo de la provision terrestre (« c\'est ce dont nous avons ete pourvus avant »).",
        axe5_frequence: "Pour la mission du khalifa, la provision est la ressource de la mission. Le khalifa est pourvu par Dieu pour accomplir sa mission. La provision n\'est pas un droit mais un don — elle doit etre utilisee pour la reforme."
      }
    }
  }},
  { verse_id: 32, word_key: 'thmr', position: 11, analysis_axes: {
    sense_chosen: "fruit",
    concept_chosen: "Fruit/Produit",
    concepts: {
      "Fruit/Produit": {
        senses: ["fruit", "produit", "resultat"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Fruit/Produit ». Le mot thamaratin est un nom feminin singulier indefini au genitif de la racine th-m-r. D\'apres les sources etymologiques, th-m-r signifie « porter des fruits, fructifier ». La thamara est le fruit d\'un arbre — le produit de la croissance vegetale. Le singulier indefini thamaratin designe un fruit quelconque — n\'importe quel fruit parmi ceux des jardins. La preposition min (de) indique la provenance : un fruit provenant des jardins. La distinction avec le sens figure « resultat, produit » : le contexte est litteral — des fruits reels dans des jardins reels.",
        axe1_verset: "Le mot thamaratin est le contenu specifique de la provision — ce dont les residents sont pourvus. La construction kullama ruziqu minha min thamaratin rizqan (chaque fois qu\'ils sont pourvus d\'un fruit comme provision) place le fruit au centre de la scene de provision. Le fruit est reconnu par les residents (« c\'est ce dont nous avons ete pourvus avant ») — la familiarite suggere une continuite entre les fruits terrestres et paradisiaques.",
        axe2_voisins: "Le verset 24 mentionnait les pierres comme combustible. Le verset 25 mentionne les fruits comme provision. Le contraste pierres/fruits est elementaire : mineral inerte vs vegetal vivant. Le feu transforme la matiere en cendres, le jardin transforme la terre en fruits.",
        axe3_sourate: "La sourate al-Baqarah mentionne les fruits dans plusieurs contextes : 2:22 (fruits comme provision terrestre), 2:25 (fruits paradisiaques), 2:266 (parabole du jardin). Les fruits sont un fil conducteur de la sourate — ils representent la provision visible et tangible.",
        axe4_coherence: "Le Coran mentionne les fruits (thamar/thamarat) dans de nombreux versets paradisiaques et terrestres. Les fruits du paradis sont decrits comme similaires aux fruits terrestres mais superieurs — les residents les reconnaissent tout en trouvant qu\'ils sont « en ressemblance » (mutashabihan).",
        axe5_frequence: "Pour la mission du khalifa, les fruits representent les resultats de l\'action reformatrice. Le khalifa plante et Dieu fait fructifier. La mission produit des fruits — des resultats tangibles et nourrissants."
      }
    }
  }},
  { verse_id: 32, word_key: 'qwl', position: 12, analysis_axes: {
    sense_chosen: "dire",
    concept_chosen: "Parole/Enonciation",
    concepts: {
      "Parole/Enonciation": {
        senses: ["dire", "parler", "enoncer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Parole/Enonciation ». Le verbe qalu est un accompli 3MP de la racine q-w-l. D\'apres les sources etymologiques, q-w-l signifie « dire, enoncer, prononcer ». Le qawl est la parole prononcee — l\'enonciation d\'un contenu. L\'accompli dans la structure kullama (chaque fois que) prend une valeur iterative — chaque fois qu\'ils recoivent, ils disent. Le contenu de leur parole est hadha alladhi ruziqna min qablu (c\'est ce dont nous avons ete pourvus avant). Le concept « Parole/Enonciation » est le sens standard de q-w-l.",
        axe1_verset: "Le verbe qalu introduit la parole des residents du paradis. Leur reaction face a la provision est une parole de reconnaissance — ils reconnaissent le fruit comme familier. Le champ lexical est celui du dialogue entre les residents et leur provision. La parole est spontanee et joyeuse — elle exprime la surprise de la familiarite.",
        axe2_voisins: "Le verset 24 ne contenait aucune parole des recouvrants face au feu. Le verset 25 donne la parole aux residents des jardins. Le contraste est entre le silence de la punition et la parole de la recompense — les punis n\'ont rien a dire, les recompenses s\'exclament de joie.",
        axe3_sourate: "La sourate al-Baqarah utilise q-w-l dans des centaines d\'occurrences — c\'est le verbe de la communication par excellence. La parole des residents du paradis est un moment rare dans la sourate — la plupart des paroles citees sont celles des negateurs ou des hypocrites.",
        axe4_coherence: "Le Coran cite les paroles des residents du paradis dans plusieurs versets (7:43, 36:55-58, 39:74). La parole paradisiaque est toujours une parole de gratitude et de reconnaissance.",
        axe5_frequence: "Pour la mission du khalifa, la parole est l\'instrument de la mission. Le khalifa parle pour guider, pour reformer, pour annoncer. La parole des residents du paradis montre que la parole juste est recompensee."
      }
    }
  }},
  { verse_id: 32, word_key: 'qbl', position: 13, analysis_axes: {
    sense_chosen: "avant",
    concept_chosen: "Anteriorite/Precedence",
    concepts: {
      "Anteriorite/Precedence": {
        senses: ["avant", "precedemment", "auparavant"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Anteriorite/Precedence ». Le mot qablu est un nom au genitif precede de min (de avant = auparavant) de la racine q-b-l. D\'apres les sources etymologiques, q-b-l signifie « etre devant, preceder, faire face ». Le mot qablu avec min signifie « auparavant, avant cela ». Il renvoie a un temps anterieur — les residents reconnaissent le fruit comme quelque chose qu\'ils ont deja recu. La distinction avec les autres sens de q-b-l (recevoir, accepter, faire face) : le contexte temporel (min qablu = auparavant) fixe le sens a l\'anteriorite.",
        axe1_verset: "Le mot qablu cloture la parole des residents : « c\'est ce dont nous avons ete pourvus AVANT ». L\'anteriorite cree un lien entre le passe et le present paradisiaque. Le fruit paradisiaque rappelle un fruit anterieur — soit terrestre, soit d\'un repas paradisiaque precedent. Cette familiarite est rassurante : le paradis n\'est pas un lieu etranger mais un lieu qui rappelle ce qui est connu.",
        axe2_voisins: "Le verset 24 ne contenait aucune reference temporelle au passe. Le verset 25 introduit l\'anteriorite — la provision paradisiaque rappelle une provision passee. Le temps au paradis est circulaire : le present rappelle le passe.",
        axe3_sourate: "La sourate utilise q-b-l dans le sens temporel a plusieurs reprises. L\'anteriorite est un theme de la sourate : ce qui etait avant (les prophetes, les peuples, les alliances) informe ce qui est maintenant.",
        axe4_coherence: "Le Coran utilise min qablu frequemment pour renvoyer a l\'anteriorite. Le concept de continuite entre le terrestre et le paradisiaque est important — le paradis n\'est pas une rupture totale mais une elevation de ce qui etait connu.",
        axe5_frequence: "Pour la mission du khalifa, l\'anteriorite rappelle que la mission s\'inscrit dans une continuite. Le khalifa n\'invente pas — il poursuit ce qui a ete commence avant lui."
      }
    }
  }},
  { verse_id: 32, word_key: 'aty', position: 14, analysis_axes: {
    sense_chosen: "donner",
    concept_chosen: "Venue/Arrivee",
    concepts: {
      "Venue/Arrivee": {
        senses: ["venir", "arriver", "donner", "apporter"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Venue/Arrivee ». Le verbe utu est un accompli passif 3MP de la racine a-t-y. D\'apres les sources etymologiques, a-t-y signifie « venir, arriver, apporter ». Le passif utu signifie « il leur a ete donne, il leur a ete apporte ». La voix passive cache l\'agent — c\'est Dieu qui donne mais il n\'est pas nomme. Le complement bihi (avec cela) renvoie au fruit. Le mot mutashabihan (en ressemblance) qualifie la maniere dont le fruit est donne — en similarite avec ce qu\'ils connaissaient. La distinction entre « Venue » et « Don » : le verbe a-t-y au passif signifie « recevoir, etre donne a » — la venue et le don sont lies.",
        axe1_verset: "Le verbe utu introduit la precision sur la nature de la provision : elle est donnee en ressemblance (mutashabihan). Le champ lexical complete la scene de provision : ils sont pourvus (ruziqu), ils disent (qalu), et cela leur est donne (utu) en resemblance. La triple description de l\'acte de recevoir (ruziqu, utu) souligne la generosie de la provision.",
        axe2_voisins: "Le verset 24 montrait un feu prepare — un acte de preparation punitive. Le verset 25 montre des fruits donnes — un acte de generosie. La preparation du feu et le don des fruits sont deux faces de la meme souverainete divine.",
        axe3_sourate: "La sourate al-Baqarah utilise a-t-y dans de nombreux contextes : donner la revelation, donner la science, donner les signes. Le don est un acte divin central dans la sourate.",
        axe4_coherence: "Le Coran utilise le passif utu dans des dizaines de versets pour designer ce qui est donne aux croyants ou aux prophetes. Le don divin est toujours passif — Dieu donne mais le texte met l\'accent sur le recepteur.",
        axe5_frequence: "Pour la mission du khalifa, le don est la base de la mission. Le khalifa recoit de Dieu pour redistribuer. Le verset montre que la provision est donnee — le khalifa n\'a pas a la produire lui-meme."
      }
    }
  }},
  { verse_id: 32, word_key: 'zwj', position: 15, analysis_axes: {
    sense_chosen: "conjoint",
    concept_chosen: "Couple/Paire",
    concepts: {
      "Couple/Paire": {
        senses: ["conjoint", "couple", "paire"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Couple/Paire ». Le mot azwajun est un nom masculin pluriel indefini au nominatif de la racine z-w-j. D\'apres les sources etymologiques, z-w-j signifie « etre en paire, etre couple, associer ». Le zawj est le partenaire dans une paire — celui ou celle qui complete l\'autre. Le pluriel azwaj designe les conjoints — les partenaires des residents du paradis. Le mot est generiquement masculin mais semantiquement neutre en genre — un zawj peut etre un homme ou une femme. La distinction avec « Association » : l\'association est le fait de mettre ensemble, le couple est la relation entre deux partenaires. Le contexte paradisiaque parle de conjoints, pas d\'association abstraite.",
        axe1_verset: "Le mot azwajun est le dernier element de la recompense avant la conclusion (khalidun = pour toujours). La liste est : jardins → rivieres → fruits → conjoints purifies → eternite. Les conjoints sont qualifies par mutahharatun (purifies) — la purete est leur attribut principal. Le champ lexical passe du vegetal (jardins, fruits) a l\'humain (conjoints) — la recompense couvre toute la creation.",
        axe2_voisins: "Le verset 24 ne mentionnait pas de relations humaines — le feu est solitaire et destructeur. Le verset 25 inclut des conjoints — le paradis est un lieu de relation et d\'intimite. Le contraste est entre la solitude de la punition et la compagnie de la recompense.",
        axe3_sourate: "La sourate al-Baqarah utilise z-w-j dans plusieurs contextes : 2:25 (conjoints paradisiaques), 2:35 (Adam et son conjoint), 2:230-232 (lois du mariage). Le couple est un motif central de la sourate — de la creation (Adam et son zawj) a l\'eschatologie (conjoints paradisiaques).",
        axe4_coherence: "Le Coran utilise azwaj dans les descriptions paradisiaques et dans les lois du mariage. Le zawj est toujours le partenaire dans une paire — le mot est neutre en genre. Traduire par « epouses » restreint le sens au feminin, ce que le texte arabe ne fait pas.",
        axe5_frequence: "Pour la mission du khalifa, le couple est l\'unite de base de la societe. Le khalifa veille a la justice dans les relations de couple. Le verset montre que la recompense inclut des relations purifiees — la mission du khalifa est de travailler vers cette purete des relations."
      },
      "Association": {
        senses: ["associer", "marier"],
        status: "nul",
        proof_ctx: "L\'association est le fait de mettre ensemble. Le contexte parle de conjoints dans un paradis, pas d\'une association abstraite."
      }
    }
  }},
  { verse_id: 32, word_key: 'thr', position: 16, analysis_axes: {
    sense_chosen: "purifier",
    concept_chosen: "Purete/Proprete",
    concepts: {
      "Purete/Proprete": {
        senses: ["purifier", "etre pur", "propre"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Purete/Proprete ». Le mot mutahharatun est un participe passif forme II feminin singulier au nominatif de la racine t-h-r. D\'apres les sources etymologiques, t-h-r signifie « etre pur, etre propre ». La forme II (fa\'\'ala) est intensive et causative : faire en sorte que quelque chose soit purifie. Le participe passif dit que la purification a ete accomplie sur eux — ils ont ete rendus purs par un agent exterieur (implicitement Dieu). Le feminin singulier mutahharatun s\'accorde avec le sens collectif ou avec le fait que le mot qualifie les conjoints dans leur ensemble. La distinction avec « Circoncision » (sens isole) : aucun rapport avec le contexte.",
        axe1_verset: "Le mot mutahharatun qualifie les conjoints — ils sont purifies. La purete est le dernier attribut mentionne avant l\'eternite (khalidun). Le champ lexical passe de la nature (jardins, rivieres, fruits) a l\'humain (conjoints) a la qualite (purifies) a la duree (eternellement). La purification des conjoints complete la perfection du paradis — tout y est pur, y compris les relations humaines.",
        axe2_voisins: "Le verset 24 decrivait des choses impures — le feu, le combustible humain. Le verset 25 decrit des choses pures — les conjoints purifies. Le contraste impurete/purete est fondamental entre les deux versets.",
        axe3_sourate: "La sourate al-Baqarah utilise t-h-r dans plusieurs contextes : 2:25 (conjoints purifies), 2:125 (purifier la Maison), 2:222 (purification apres les menstrues). La purete est un theme recurrent de la sourate — elle couvre le cultuel, le physique et le paradisiaque.",
        axe4_coherence: "Le Coran mentionne azwaj mutahhara dans les descriptions paradisiaques (2:25, 3:15, 4:57). La formule est constante — les conjoints du paradis sont toujours decrits comme purifies. La purification divine est complete — elle touche les personnes comme les lieux.",
        axe5_frequence: "Pour la mission du khalifa, la purete est un objectif. Le khalifa travaille a purifier les relations et les institutions. Le verset montre que le paradis est un lieu de purete totale — la mission du khalifa tend vers cette purete sur terre."
      },
      "Sens isole/Circoncision": {
        senses: ["circoncire"],
        status: "nul",
        proof_ctx: "La circoncision est un usage rare de t-h-r. Aucun rapport avec le contexte des conjoints paradisiaques purifies."
      }
    }
  }},
  { verse_id: 32, word_key: 'xld', position: 17, analysis_axes: {
    sense_chosen: "eternel",
    concept_chosen: "Eternite/Permanence",
    concepts: {
      "Eternite/Permanence": {
        senses: ["durer eternellement", "rester pour toujours"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Eternite/Permanence ». Le mot khaliduna est un participe actif pluriel masculin au nominatif de la racine kh-l-d. D\'apres les sources etymologiques, kh-l-d signifie « durer eternellement, rester pour toujours, etre permanent ». Le participe actif dit que la permanence est un etat actif — les residents font activement l\'action de durer. L\'expression wa hum fiha khaliduna (et ils y sont pour toujours) cloture le verset par l\'eternite de la recompense. Le pronom fiha (en elles/la-dedans) renvoie aux jardins. La distinction avec « Bracelet » (sens isole : khalada = bracelet) : aucun rapport avec le contexte.",
        axe1_verset: "Le mot khaliduna cloture le verset comme le sceau de l\'eternite. La structure du verset construit la recompense couche par couche : jardins → rivieres → fruits → conjoints purifies → ETERNITE. L\'eternite est le sommet de la recompense — tout ce qui precede est rendu infini par ce dernier mot. Le champ lexical passe du spatial (jardins) au temporel (pour toujours).",
        axe2_voisins: "Le verset 24 decrivait un feu prepare mais ne mentionnait pas sa duree. Le verset 25 cloture par l\'eternite — la recompense est permanente. Le contraste est entre l\'implicite du chatiment eternel (2:24) et l\'explicite de la recompense eternelle (2:25). La sourate rassure les croyants en explicant l\'eternite de leur recompense.",
        axe3_sourate: "La sourate al-Baqarah utilise khalidun dans plusieurs versets eschatologiques (2:25, 2:39, 2:81-82, 2:217, 2:275). L\'eternite est affirme pour les deux destinations : le feu et le jardin. La sourate etablit que les choix humains ont des consequences eternelles.",
        axe4_coherence: "Le Coran utilise khalidun/khalidina dans plus de 80 versets. L\'eternite est un theme majeur du Coran — les consequences des actes sont permanentes. Le participe actif insiste sur le fait que la permanence est un etat dynamique, pas une stagnation.",
        axe5_frequence: "Pour la mission du khalifa, l\'eternite donne le sens ultime a la mission. Les oeuvres du khalifa ont des consequences eternelles — ce qui est fait pour la reforme restera pour toujours. La mission n\'est pas temporaire mais inscrite dans l\'eternite."
      },
      "Sens isole/Bracelet": {
        senses: ["bracelet"],
        status: "nul",
        proof_ctx: "Le bracelet (khulda, khalada) est un usage isole de kh-l-d. Le contexte paradisiaque parle d\'eternite, pas de bijoux."
      }
    }
  }},

  // =====================================================
  // VERSET 2:26 (verse_id=33)
  // =====================================================
  { verse_id: 33, word_key: 'alh', position: 1, analysis_axes: {
    sense_chosen: "Dieu",
    concept_chosen: "Divinite",
    concepts: {
      "Divinite": {
        senses: ["Dieu", "divinite"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Divinite ». Le mot Allaha est le nom divin a l\'accusatif apres la particule d\'insistance inna. D\'apres les sources etymologiques, le mot Allah est le nom propre de la divinite unique — le seul Dieu. Le mot est precede de inna (certes, en verite) qui renforce l\'assertion. La phrase inna Allaha la yastahyi (certes, Dieu ne se retient pas par pudeur) est une affirmation solennelle. Le concept « Divinite » est le seul sens pertinent du nom Allah.",
        axe1_verset: "Le nom Allah ouvre le verset apres la particule inna. Il est le sujet de la phrase principale : Dieu ne se retient pas de frapper un exemple. Le champ lexical place Dieu au centre de l\'action — c\'est Lui qui donne les exemples, Lui qui egare et Lui qui guide. Le verset est entierement centre sur l\'action divine face aux reactions humaines.",
        axe2_voisins: "Le verset 25 decrivait la recompense sans nommer Dieu comme sujet actif. Le verset 26 remet Dieu au centre comme acteur principal. La transition est de la description (v25 : il y a des jardins) a l\'action (v26 : Dieu frappe des exemples).",
        axe3_sourate: "La sourate al-Baqarah nomme Allah dans presque chaque section. Le nom divin est le fil conducteur de la sourate — Dieu est l\'acteur principal de toute la narration.",
        axe4_coherence: "Le Coran mentionne Allah dans plus de 2 600 versets. C\'est le mot le plus frequent du Coran. Le nom divin est le point de reference absolu de tout le texte coranique.",
        axe5_frequence: "Pour la mission du khalifa, Dieu est la source de la mission et sa finalite. Le khalifa agit au nom de Dieu et pour Dieu. Le verset rappelle que c\'est Dieu qui decide des exemples, des egarements et des guidances."
      }
    }
  }},
  { verse_id: 33, word_key: 'hyy', position: 2, analysis_axes: {
    sense_chosen: "avoir honte",
    concept_chosen: "Pudeur/Honte",
    concepts: {
      "Pudeur/Honte": {
        senses: ["avoir honte", "etre pudique"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Pudeur/Honte ». Le verbe yastahyi est un inaccompli forme X 3MS de la racine h-y-y, precede de la negation la. D\'apres les sources etymologiques (Lane\'s), la forme X istahya signifie « avoir honte, etre pudique, se retenir par pudeur ». La forme X (istaf\'ala) signifie « chercher la pudeur en soi-meme ». La negation la yastahyi dit que Dieu ne se retient pas par pudeur — Il n\'a pas honte de donner des exemples, meme les plus petits (un moustique). La distinction avec « Vie/Existence » : la racine h-y-y a deux branches majeures — la vie (hayat) et la pudeur (haya\'). La forme X avec negation pointe clairement vers la pudeur. La distinction avec « Animal/Serpent » : le hayya (serpent) est un derive de h-y-y sans rapport avec le contexte.",
        axe1_verset: "Le verbe yastahyi est le verbe principal de la premiere partie du verset. La negation la yastahyi dit que Dieu ne se retient pas — il agit sans pudeur quand il s\'agit de donner des exemples. Le complement an yadriba mathalan (de frapper un exemple) precise l\'action que Dieu ne retient pas. Le champ lexical est celui de la liberte divine dans l\'enseignement — Dieu utilise n\'importe quelle creature comme exemple, meme un moustique.",
        axe2_voisins: "Le verset 25 decrivait la recompense. Le verset 26 defend la methode d\'enseignement divine — les exemples. Le passage de la recompense a la defense de la methode repond a une objection implicite : certains trouvent les exemples coraniques indignes. Le verset repond que Dieu n\'a pas honte de ces exemples.",
        axe3_sourate: "La sourate al-Baqarah utilise de nombreuses paraboles — le feu (v17), la pluie (v19), le moustique (v26), le grain (v261). Le verset 26 justifie cette methode : Dieu ne se retient pas de donner des exemples, meme les plus humbles. La sourate est pedagogique par nature.",
        axe4_coherence: "Le Coran utilise la racine h-y-y dans les deux sens : la vie (hayat) et la pudeur (haya\'). La forme X avec negation n\'apparait qu\'en 2:26 — c\'est un usage unique. Le Coran affirme ici un principe : la pedagogie divine n\'est pas limitee par la pudeur.",
        axe5_frequence: "Pour la mission du khalifa, l\'absence de pudeur dans l\'enseignement est une lecon. Le khalifa ne doit pas avoir honte d\'utiliser des exemples simples ou humbles pour enseigner la verite. La clarte de l\'enseignement prime sur la sophistication."
      },
      "Vie/Existence": {
        senses: ["vivre", "vivant", "vivifier"],
        status: "nul",
        proof_ctx: "La vie (hayat) est le sens principal de h-y-y. Mais la forme X istahya est specifiquement la pudeur, pas la vie. Le contexte (ne pas avoir honte) confirme le sens de pudeur."
      },
      "Animal/Serpent": {
        senses: ["serpent"],
        status: "nul",
        proof_ctx: "Le serpent (hayya) est un derive de h-y-y. Aucun rapport avec le contexte de la pudeur divine."
      }
    }
  }},
  { verse_id: 33, word_key: 'drb', position: 3, analysis_axes: {
    sense_chosen: "frapper",
    concept_chosen: "Exemple/Parabole",
    concepts: {
      "Exemple/Parabole": {
        senses: ["donner un exemple", "frapper un exemple"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Exemple/Parabole ». Le verbe yadriba est un inaccompli subjonctif 3MS de la racine d-r-b. D\'apres les sources etymologiques, d-r-b signifie « frapper, battre, cogner ». Mais l\'expression daraba mathalan est idiomatique en arabe — elle signifie « donner un exemple, proposer une comparaison ». Le verbe « frapper » avec le complement « exemple » prend le sens de « proposer, presenter ». C\'est une expression figee dont le sens depasse la somme de ses parties. La distinction avec « Frappe/Coup » : le sens litteral de frapper est inoperant ici car l\'expression est idiomatique. La distinction avec « Deplacement/Voyage » : le sens de voyager (daraba fil-ard) est un autre idiome sans rapport avec le contexte.",
        axe1_verset: "Le verbe yadriba est dans la proposition subordonnee an yadriba mathalan (de frapper un exemple). L\'expression daraba mathalan est le coeur du verset — tout le reste en decoule. Le verset defend le droit de Dieu a utiliser n\'importe quel exemple, meme un moustique. Le champ lexical est celui de la pedagogie divine : exemples, moustique, verite, guidance, egarement.",
        axe2_voisins: "Les versets 24-25 etaient des descriptions directes (feu, jardins). Le verset 26 passe a la meta-reflexion — il parle de la methode meme de l\'enseignement (les exemples). Le passage du contenu a la methode est significatif : apres avoir donne des exemples concrets, le Coran justifie sa propre methode.",
        axe3_sourate: "La sourate al-Baqarah contient de nombreuses paraboles et exemples. Le verset 26 est le moment ou la sourate justifie cette abondance d\'exemples. La sourate est la plus longue du Coran et elle utilise la methode des exemples plus que toute autre sourate.",
        axe4_coherence: "Le Coran utilise l\'expression daraba mathalan dans de nombreux versets (14:25, 16:75-76, 18:32, 36:13). L\'expression est un marqueur de la methode pedagogique coranique. Le Coran enseigne par les exemples et les paraboles.",
        axe5_frequence: "Pour la mission du khalifa, l\'exemple est un outil pedagogique essentiel. Le khalifa doit savoir frapper des exemples — utiliser des comparaisons concretes pour enseigner des verites abstraites. Le verset valide cette methode en l\'attribuant a Dieu lui-meme."
      },
      "Frappe/Coup": {
        senses: ["frapper", "battre", "cogner"],
        status: "nul",
        proof_ctx: "Le sens litteral de frapper est inoperant ici. L\'expression daraba mathalan est idiomatique — elle ne signifie pas « frapper physiquement un exemple » mais « donner un exemple ». Le complement mathalan (exemple) transforme le sens du verbe."
      },
      "Deplacement/Voyage": {
        senses: ["voyager", "partir"],
        status: "nul",
        proof_ctx: "Le voyage (daraba fil-ard) est un autre idiome de d-r-b. Le contexte est celui de l\'exemple, pas du voyage."
      },
      "Fabrication": {
        senses: ["frapper une monnaie", "fabriquer"],
        status: "nul",
        proof_ctx: "La fabrication (frapper une monnaie) est un autre idiome de d-r-b. Le contexte est celui de l\'exemple pedagogique, pas de la fabrication."
      }
    }
  }},
  { verse_id: 33, word_key: 'mvl', position: 4, analysis_axes: {
    sense_chosen: "exemple",
    concept_chosen: "Similitude/Comparaison",
    concepts: {
      "Similitude/Comparaison": {
        senses: ["exemple", "parabole", "similitude"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Similitude/Comparaison ». Le mot mathalan est un nom masculin singulier indefini a l\'accusatif de la racine m-th-l. D\'apres les sources etymologiques, m-th-l signifie « etre semblable, ressembler, comparer ». Le mathal est l\'exemple, la parabole, la comparaison. Le mot est indefini (mathalan, pas al-mathala) — un exemple quelconque, n\'importe quel exemple. L\'accusatif est regi par le verbe yadriba (frapper un exemple). Le concept « Similitude/Comparaison » capture le sens du mathal : une comparaison qui eclaire une verite par la ressemblance.",
        axe1_verset: "Le mot mathalan est le complement de yadriba — « frapper un exemple ». Il est suivi de la precision ma ba\'udatan fama fawqaha (fut-ce un moustique ou ce qui est au-dessus). Le verset defend le droit de Dieu a utiliser n\'importe quel mathal, meme le plus humble. Le mathal apparait une seconde fois en fin de verset dans la question des recouvrants (madha arada Allahu bi-hadha mathalan = que voulait Dieu par cet exemple).",
        axe2_voisins: "Les versets precedents contenaient des exemples implicites (feu, pluie, jardins). Le verset 26 parle de l\'exemple en tant que concept — c\'est de la meta-narration. Le passage du contenu au concept est une reflexion sur la methode.",
        axe3_sourate: "La sourate al-Baqarah est riche en exemples et paraboles. Le mathal est un outil central de la sourate. Le verset 26 etablit le principe : Dieu utilise des exemples librement.",
        axe4_coherence: "Le Coran utilise mathal dans plus de 50 versets. Le mathal est un concept coranique fondamental — il designe la parabole, l\'exemple, la comparaison pedagogique. Le Coran defend sa methode des exemples en 2:26.",
        axe5_frequence: "Pour la mission du khalifa, l\'exemple est l\'outil d\'enseignement principal. Le khalifa doit savoir utiliser des comparaisons pour rendre les verites accessibles."
      }
    }
  }},
  { verse_id: 33, word_key: 'bed', position: 5, analysis_axes: {
    sense_chosen: "moustique",
    concept_chosen: "Sens isole/Moustique",
    concepts: {
      "Sens isole/Moustique": {
        senses: ["moustique"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Sens isole/Moustique ». Le mot ba\'udatan est un nom feminin singulier indefini a l\'accusatif de la racine b-e-d. D\'apres les sources etymologiques (Lane\'s), le ba\'ud est le moustique — un petit insecte qui pique. Le mot designe specifiquement le moustique, pas un insecte quelconque. Le choix du moustique comme exemple est delibere : c\'est l\'un des plus petits animaux. Le verset dit que Dieu n\'a pas honte de donner comme exemple meme un moustique — la petitesse de la creature ne diminue pas la grandeur de l\'exemple. Le concept est isole car la racine n\'a pas de branches semantiques multiples dans le contexte coranique.",
        axe1_verset: "Le mot ba\'udatan precise quel type d\'exemple Dieu ne refuse pas de donner — meme un moustique. Le champ lexical passe de l\'abstrait (exemple) au concret (moustique). Le moustique est le cas limite — si Dieu n\'a pas honte d\'un moustique, il n\'a honte d\'aucun exemple. La suite fama fawqaha (ou ce qui est au-dessus) elargit : du moustique a tout ce qui est plus grand.",
        axe2_voisins: "Les versets precedents utilisaient des exemples grandioses (feu, pluie, jardins). Le verset 26 descend au plus petit — le moustique. Le contraste entre la grandeur des images precedentes et la petitesse du moustique est volontaire : la methode des exemples couvre tout le spectre.",
        axe3_sourate: "La sourate al-Baqarah utilise des exemples varies : le feu, la pluie, le grain, le moustique. Le moustique est le plus petit — il marque la limite inferieure de la methode. La sourate montre que rien n\'est trop petit pour etre un signe de Dieu.",
        axe4_coherence: "Le Coran mentionne le moustique uniquement en 2:26. C\'est un hapax (usage unique). D\'autres petites creatures sont mentionnees : la mouche (22:73), l\'araignee (29:41), l\'abeille (16:68). Le Coran utilise les petites creatures pour enseigner de grandes verites.",
        axe5_frequence: "Pour la mission du khalifa, le moustique enseigne l\'humilite dans la methode. Le khalifa ne doit pas mepriser les petits exemples — la verite se trouve partout, meme dans les plus petites creatures."
      }
    }
  }},
  { verse_id: 33, word_key: 'amn', position: 7, analysis_axes: {
    sense_chosen: "adherer",
    concept_chosen: "Foi/Adhesion",
    concepts: {
      "Foi/Adhesion": {
        senses: ["croire", "avoir la foi", "adherer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Foi/Adhesion ». Le verbe amanu est a l\'accompli forme IV 3MP — « ils ont adhere ». Meme usage que dans les versets precedents — alladhina amanu designe les croyants sinceres dont l\'adhesion est un fait accompli. La forme IV implique un acte d\'engagement volontaire. Le verset oppose les adherents (amanu) aux recouvrants (kafaru) dans leur reaction face aux exemples divins.",
        axe1_verset: "Le mot amanu identifie le premier groupe dans la dualite du verset : ceux qui ont adhere vs ceux qui ont recouvert. Les adherents savent que l\'exemple est la verite de leur Maitre — leur reaction est la connaissance (ya\'lamuna). Le champ lexical associe l\'adhesion a la connaissance : adherer permet de savoir.",
        axe2_voisins: "Le verset 25 decrivait la recompense des adherents. Le verset 26 decrit leur reaction face aux exemples : ils savent que c\'est la verite. L\'adhesion produit la connaissance, qui produit la reconnaissance de la verite.",
        axe3_sourate: "La formule alladhina amanu revient dans toute la sourate comme le marqueur des croyants sinceres. Le verset 26 montre une nouvelle facette de leur identite : ils reconnaissent la verite des exemples divins.",
        axe4_coherence: "Le Coran associe systematiquement l\'adhesion (iman) a la connaissance (\'ilm). En 2:26, les adherents SAVENT (ya\'lamuna) que l\'exemple est la verite. L\'adhesion ouvre les yeux — elle permet de voir ce que les recouvrants refusent de voir.",
        axe5_frequence: "Pour la mission du khalifa, l\'adhesion est la condition de la connaissance. Sans adhesion, la connaissance est impossible. Le khalifa doit d\'abord adherer pour pouvoir ensuite connaitre et enseigner."
      },
      "Securite/Confiance": {
        senses: ["etre en securite"],
        status: "nul",
        proof_ctx: "Le contexte est la foi (alladhina amanu = ceux qui ont adhere). Pas de contexte de securite physique."
      }
    }
  }},
  { verse_id: 33, word_key: 'elm', position: 8, analysis_axes: {
    sense_chosen: "savoir",
    concept_chosen: "Savoir/Connaissance",
    concepts: {
      "Savoir/Connaissance": {
        senses: ["savoir", "connaitre", "apprendre"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Savoir/Connaissance ». Le verbe ya\'lamuna est un inaccompli 3MP de la racine e-l-m. D\'apres les sources etymologiques, e-l-m signifie « savoir, connaitre, apprendre ». Le \'ilm est la connaissance certaine, pas l\'opinion ou la croyance. L\'inaccompli dit que la connaissance est en cours et permanente — les adherents savent continuellement. Le complement annahu al-haqqu (que c\'est la verite) precise le contenu de leur savoir. La connaissance des adherents est immediate et certaine — ils n\'ont pas besoin de preuves supplementaires.",
        axe1_verset: "Le verbe ya\'lamuna est la reaction des adherents face a l\'exemple. Quand ils voient un exemple divin, ils savent immediatement que c\'est la verite. Le champ lexical associe la connaissance a la verite et au Maitre : ils savent que c\'est la verite de leur Maitre. La connaissance est ici une reconnaissance — ils reconnaissent la verite quand ils la voient.",
        axe2_voisins: "Le verset 25 parlait de la recompense des adherents (jardins, fruits). Le verset 26 parle de leur connaissance (ils savent que c\'est la verite). La recompense et la connaissance sont deux aspects de l\'adhesion — les adherents recoivent et reconnaissent.",
        axe3_sourate: "La sourate al-Baqarah utilise e-l-m dans de nombreux contextes. En 2:13, les hypocrites sont traites de stupides (sufaha\') — ils ne savent pas. En 2:26, les adherents savent. La sourate oppose constamment ceux qui savent et ceux qui ne savent pas.",
        axe4_coherence: "Le Coran associe le savoir (\'ilm) a la foi (iman) dans de nombreux versets. En 58:11, Dieu eleve ceux qui savent. Le savoir coranique n\'est pas l\'information brute mais la connaissance des verites divines.",
        axe5_frequence: "Pour la mission du khalifa, le savoir est l\'outil de la mission. Le khalifa doit savoir pour guider. La connaissance de la verite est la base de toute action reformatrice."
      }
    }
  }},
  { verse_id: 33, word_key: 'hqq', position: 9, analysis_axes: {
    sense_chosen: "verite",
    concept_chosen: "Verite/Realite",
    concepts: {
      "Verite/Realite": {
        senses: ["verite", "realite", "certitude"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Verite/Realite ». Le mot al-haqqu est un nom masculin defini au nominatif de la racine h-q-q. D\'apres les sources etymologiques, h-q-q signifie « etre vrai, etre reel, etre certain ». Le haqq est la verite objective — ce qui correspond a la realite. Avec l\'article defini al-, c\'est la verite connue et etablie — pas une verite parmi d\'autres mais LA verite. Le mot est le predicat de la proposition annahu al-haqqu (que c\'est la verite). La distinction avec « Droit/Justice » : le droit (haqq) est un autre sens de la meme racine, mais le contexte est epistemologique (connaitre la verite), pas juridique. La distinction avec « Fixation » : le fait de fixer ou d\'accomplir est un sens derive, hors contexte.",
        axe1_verset: "Le mot al-haqqu est ce que les adherents reconnaissent : l\'exemple de Dieu EST la verite. La verite vient min rabbihim (de leur Maitre) — elle a une source identifiee. Le champ lexical est celui de la certitude : savoir (ya\'lamuna) + verite (al-haqq) + de leur Maitre (min rabbihim). La triple confirmation rend la connaissance incontestable.",
        axe2_voisins: "Le verset 25 promettait la recompense. Le verset 26 affirme la verite. La recompense est pour ceux qui reconnaissent la verite — les deux sont liees. Les recouvrants qui nient la verite perdent la recompense.",
        axe3_sourate: "La sourate al-Baqarah utilise al-haqq dans plusieurs contextes : 2:26 (les exemples sont la verite), 2:42 (ne melez pas la verite au faux), 2:147 (la verite vient de ton Maitre). La verite est un fil conducteur de la sourate.",
        axe4_coherence: "Le Coran utilise al-haqq dans plus de 200 versets. La verite est un concept central du Coran — elle designe a la fois la realite objective et la verite revelee. En 2:26, la verite est celle des exemples divins — les paraboles coraniques sont vraies.",
        axe5_frequence: "Pour la mission du khalifa, la verite est le fondement de la mission. Le khalifa defend et propage la verite. Le verset montre que la verite est reconnaissable par les adherents — elle n\'est pas cachee mais visible pour ceux qui ont les yeux ouverts."
      },
      "Droit/Justice": {
        senses: ["droit", "juste", "devoir"],
        status: "nul",
        proof_ctx: "Le droit est un sens juridique de h-q-q. Le contexte est epistemologique (reconnaitre la verite), pas juridique. Hors contexte."
      },
      "Fixation": {
        senses: ["fixer", "accomplir"],
        status: "nul",
        proof_ctx: "La fixation est un sens derive de h-q-q. Le contexte parle de connaitre la verite, pas de fixer ou d\'accomplir quelque chose."
      },
      "Sens isole/Creux": {
        senses: ["creux", "orbite"],
        status: "nul",
        proof_ctx: "Le creux (huqq) est un sens isole de h-q-q. Aucun rapport avec le contexte de la verite."
      }
    }
  }},
  { verse_id: 33, word_key: 'rbb', position: 10, analysis_axes: {
    sense_chosen: "maitre",
    concept_chosen: "Maitrise/Possession",
    concepts: {
      "Maitrise/Possession": {
        senses: ["maitre", "seigneur", "possesseur", "educateur"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Maitrise/Possession ». Le mot rabbihim est un nom avec pronom possessif 3MP (leur Maitre) de la racine r-b-b. D\'apres les sources etymologiques, r-b-b signifie « etre maitre de, posseder, elever, eduquer ». Le rabb est le maitre qui possede et qui eleve — il combine l\'autorite et la bienveillance. Le pronom him (leur) rattache le Maitre aux adherents — c\'est LEUR Maitre, une relation personnelle. La preposition min (de, venant de) dit que la verite provient de leur Maitre. La distinction avec « Education » : l\'education (tarbiya) est un derive de r-b-b, mais le contexte designe la source de la verite (de leur Maitre), pas un acte d\'education.",
        axe1_verset: "Le mot rabbihim precise la source de la verite : elle vient de LEUR Maitre. La construction min rabbihim (de la part de leur Maitre) rattache la verite a une autorite personnelle. Les adherents ne reconnaissent pas une verite abstraite mais la verite de leur Maitre — la relation est intime. Le champ lexical associe verite et maitrise : la verite a un auteur identifie.",
        axe2_voisins: "Le verset 25 mentionnait la recompense divine sans nommer le rabb. Le verset 26 introduit le rabb comme source de la verite. La transition est de la generosie divine a l\'autorite divine — Dieu est a la fois le donneur (v25) et la source de verite (v26).",
        axe3_sourate: "La sourate al-Baqarah utilise rabb dans de nombreux contextes : 2:5 (la guidance de leur Maitre), 2:21 (adorez votre Maitre). Le rabb est le destinataire de l\'adoration et la source de la guidance dans la sourate.",
        axe4_coherence: "Le Coran utilise rabb dans plus de 900 versets. Le rabb est le mot le plus intime pour designer Dieu — il implique une relation personnelle entre le Maitre et le serviteur. Le possessif (rabbihim, rabbuka, rabbana) est presque toujours present.",
        axe5_frequence: "Pour la mission du khalifa, le rabb est le Maitre qui donne la mission. Le khalifa reconnait son Maitre et agit sous Son autorite. La relation rabb-khalifa est la base de la mission."
      }
    }
  }},
  { verse_id: 33, word_key: 'kfr', position: 11, analysis_axes: {
    sense_chosen: "recouvrir",
    concept_chosen: "Couverture/Dissimulation",
    concepts: {
      "Couverture/Dissimulation": {
        senses: ["recouvrir", "cacher", "mecreant", "recouvrant"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Couverture/Dissimulation ». Le verbe kafaru est a l\'accompli 3MP de la racine k-f-r — « ils ont recouvert ». Meme analyse que dans les versets precedents. L\'accompli dit que le recouvrement est un acte accompli et definitif. Le verbe est dans la formule alladhina kafaru (ceux qui ont recouvert), qui s\'oppose a alladhina amanu (ceux qui ont adhere). Les deux formules structurent la dualite du verset : les adherents savent, les recouvrants questionnent.",
        axe1_verset: "Le verbe kafaru identifie le second groupe — ceux qui ont recouvert la verite. Leur reaction face a l\'exemple est une question moqueuse : madha arada Allahu bi-hadha mathalan (que voulait Dieu par cet exemple). La question n\'est pas sincere — c\'est un rejet deguise en interrogation. Le contraste est total : les adherents savent (ya\'lamuna), les recouvrants questionnent (yaquluna madha).",
        axe2_voisins: "Le verset 24 mentionnait les recouvrants comme destinataires du feu (u\'iddat lil-kafirina). Le verset 26 montre leur attitude face aux exemples divins — ils questionnent avec mepris. La sourate construit progressivement le portrait des recouvrants : punition (v24) puis attitude (v26).",
        axe3_sourate: "La sourate al-Baqarah utilise k-f-r dans tout son developpement pour designer ceux qui cachent la verite. Le recouvrement est l\'attitude fondamentale qui s\'oppose a l\'adhesion.",
        axe4_coherence: "Le Coran utilise kafaru dans des centaines de versets. Le verbe est toujours a l\'accompli quand il designe un acte definitif. Le kufr coranique est actif — recouvrir est un choix, pas un etat passif.",
        axe5_frequence: "Pour la mission du khalifa, le recouvrement est l\'obstacle principal. Le khalifa doit devoiler ce que les recouvrants cachent. Comprendre le kufr comme recouvrement actif change la mission : il ne s\'agit pas de combattre des infideles mais de reveler ce qui est cache."
      }
    }
  }},
  { verse_id: 33, word_key: 'qwl', position: 12, analysis_axes: {
    sense_chosen: "dire",
    concept_chosen: "Parole/Enonciation",
    concepts: {
      "Parole/Enonciation": {
        senses: ["dire", "parler", "enoncer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Parole/Enonciation ». Le verbe yaquluna est un inaccompli 3MP de la racine q-w-l. L\'inaccompli dit que leur parole est en cours et repetee — les recouvrants disent et redisent cette question. Le contenu de leur parole est une question moqueuse : « Que voulait Dieu par cet exemple ? » La parole des recouvrants est un acte de rejet — ils utilisent la question pour nier la valeur des exemples divins.",
        axe1_verset: "Le verbe yaquluna introduit la question moqueuse des recouvrants. L\'inaccompli (present continu) contraste avec le ya\'lamuna des adherents (present continu aussi) — les deux groupes sont dans un etat permanent : les uns savent, les autres questionnent. Le verbe est le marqueur de la reaction des recouvrants face aux exemples.",
        axe2_voisins: "Le verset 24 ne donnait pas la parole aux recouvrants. Le verset 26 leur donne la parole pour la premiere fois depuis le verset 14 (ou les hypocrites parlaient en prive). La question moqueuse revele leur interieur — ils ne comprennent pas les exemples divins.",
        axe3_sourate: "La sourate cite les paroles des differents groupes : croyants, hypocrites, recouvrants. Chaque parole revele la nature du groupe. La parole des recouvrants en 2:26 est une question moqueuse — elle revele leur incomprehension.",
        axe4_coherence: "Le Coran cite les paroles des recouvrants dans de nombreux versets pour reveler leur mentalite. La question moqueuse est un motif recurrent — les recouvrants questionnent au lieu d\'accepter.",
        axe5_frequence: "Pour la mission du khalifa, la parole est un revelateur. Le khalifa doit ecouter les paroles pour discerner les intentions. La question moqueuse des recouvrants est un signal d\'alerte."
      }
    }
  }},
  { verse_id: 33, word_key: 'rwd', position: 13, analysis_axes: {
    sense_chosen: "vouloir",
    concept_chosen: "Volonte/Intention",
    concepts: {
      "Volonte/Intention": {
        senses: ["vouloir", "chercher", "desirer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Volonte/Intention ». Le verbe arada est un accompli forme IV 3MS de la racine r-w-d. D\'apres les sources etymologiques, la forme IV arada signifie « vouloir, avoir l\'intention, chercher deliberement ». Le sujet est Allah — que voulait Dieu ? L\'accompli dit que l\'intention est passee — la question porte sur ce que Dieu a voulu en donnant cet exemple. La forme IV (af\'ala) ajoute la dimension deliberee — l\'intention est un acte conscient et voulu. La distinction avec « Mouvement lent » : le sens de revenir doucement (rawada) est un sens premier de r-w-d, mais la forme IV arada est specifiquement la volonte. La distinction avec « Vent doux » : sens isole sans rapport.",
        axe1_verset: "Le verbe arada est au coeur de la question moqueuse : madha arada Allahu bi-hadha mathalan (que voulait Dieu par cet exemple). La question porte sur l\'intention divine — les recouvrants pretendent ne pas comprendre pourquoi Dieu utilise un exemple aussi humble qu\'un moustique. Le champ lexical est celui de l\'interrogation moqueuse : que vouloir, par cela, exemple.",
        axe2_voisins: "Le verset 25 montrait la recompense sans question. Le verset 26 introduit la question des recouvrants. La volonte divine est questionnee — les recouvrants mettent en doute l\'intention de Dieu. Le contraste entre l\'acceptation (v25) et la remise en question (v26) est total.",
        axe3_sourate: "La sourate al-Baqarah utilise la racine r-w-d dans quelques occurrences. La volonte divine est un theme central de la sourate — Dieu veut, Dieu decide, Dieu guide.",
        axe4_coherence: "Le Coran utilise arada dans de nombreux contextes pour exprimer la volonte divine ou humaine. En 2:26, la volonte divine est questionnee par les recouvrants — c\'est un acte d\'impiete car la volonte divine n\'a pas a etre justifiee.",
        axe5_frequence: "Pour la mission du khalifa, la volonte de comprendre est essentielle. Mais la question moqueuse des recouvrants n\'est pas une vraie recherche de comprehension — c\'est un rejet deguise. Le khalifa doit distinguer la question sincere de la question moqueuse."
      },
      "Mouvement lent": {
        senses: ["aller doucement", "revenir"],
        status: "nul",
        proof_ctx: "Le mouvement lent (rawada) est un sens premier de r-w-d. La forme IV arada a evolue vers la volonte, s\'eloignant du sens de mouvement. Le contexte est celui de l\'intention, pas du mouvement."
      },
      "Sens isole/Vent": {
        senses: ["vent doux"],
        status: "nul",
        proof_ctx: "Le vent doux (rawd) est un sens isole de r-w-d. Aucun rapport avec le contexte de la volonte divine."
      }
    }
  }},
  { verse_id: 33, word_key: 'dll', position: 15, analysis_axes: {
    sense_chosen: "egarer",
    concept_chosen: "Egarement/Deviation",
    concepts: {
      "Egarement/Deviation": {
        senses: ["egarer", "s\'egarer", "devier"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Egarement/Deviation ». Le verbe yudillu est un inaccompli forme IV 3MS de la racine d-l-l. D\'apres les sources etymologiques, d-l-l signifie « s\'egarer, perdre le chemin ». La forme IV (af\'ala) est causative : faire egarer, conduire dans l\'egarement. Le sujet implicite est Dieu — Il egare par l\'exemple. L\'inaccompli dit que l\'egarement est en cours et permanent. Le verbe apparait deux fois dans le verset : yudillu bihi kathiran (Il egare par cela beaucoup) et wa ma yudillu bihi illa al-fasiqina (et Il n\'egare par cela que les deviants). La deuxieme occurrence restreint le champ : l\'egarement ne touche que les deviants.",
        axe1_verset: "Le verbe yudillu est le premier element de la reponse divine a la question moqueuse des recouvrants. La reponse est frappante : par cet exemple, Dieu egare beaucoup ET guide beaucoup. Le meme exemple produit deux effets opposes selon le recepteur. Le champ lexical est celui de la dualite : egarer/guider, beaucoup/beaucoup, deviants/autres. L\'exemple est un filtre qui separe les groupes.",
        axe2_voisins: "Le verset 25 parlait de guidance positive (jardins pour les adherents). Le verset 26 montre que la meme revelation peut egarer. Le texte ne dit pas que Dieu egare arbitrairement — il precise que seuls les deviants (fasiqin) sont egares. L\'egarement est une consequence de la deviation prealable.",
        axe3_sourate: "La sourate al-Baqarah utilise d-l-l dans plusieurs contextes : 2:16 (ils ont echange la guidance contre l\'egarement), 2:26 (Dieu egare par les exemples). L\'egarement est un theme majeur de la sourate — il est la consequence du recouvrement.",
        axe4_coherence: "Le Coran utilise la forme IV yudillu (Il egare) dans de nombreux versets. L\'egarement divin dans le Coran n\'est jamais arbitraire — il est toujours une reponse a un choix humain prealable (le recouvrement, la deviation). En 2:26, la precision « seulement les deviants » confirme cette logique.",
        axe5_frequence: "Pour la mission du khalifa, l\'egarement est le danger principal. Le khalifa doit comprendre que l\'egarement n\'est pas un hasard mais la consequence d\'un choix. La mission est de prevenir ce choix en maintenant la verite visible."
      }
    }
  }},
  { verse_id: 33, word_key: 'kṯr', position: 16, analysis_axes: {
    sense_chosen: "beaucoup",
    concept_chosen: "Abondance/Multiplicite",
    concepts: {
      "Abondance/Multiplicite": {
        senses: ["beaucoup", "nombreux", "abondant"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Abondance/Multiplicite ». Le mot kathiran est un adjectif/nom masculin singulier indefini a l\'accusatif de la racine k-th-r. D\'apres les sources etymologiques, k-th-r signifie « etre nombreux, abonder, etre en grande quantite ». Le kathir est ce qui est abondant, nombreux. Le mot apparait deux fois dans le verset : yudillu bihi kathiran wa yahdi bihi kathiran (Il egare par cela beaucoup et Il guide par cela beaucoup). La repetition souligne la symetrie : autant d\'egares que de guides. Le concept « Abondance/Multiplicite » capture le sens quantitatif de kathir.",
        axe1_verset: "Le mot kathiran qualifie le nombre de personnes touchees par l\'exemple — beaucoup sont egarees et beaucoup sont guidees. La repetition de kathiran cree un parallelisme parfait : egarement de beaucoup / guidance de beaucoup. Le champ lexical est celui du grand nombre — l\'exemple de Dieu a un impact massif dans les deux directions.",
        axe2_voisins: "Le verset 25 montrait les adherents au pluriel (des jardins, des conjoints). Le verset 26 quantifie : beaucoup sont egares, beaucoup sont guides. Le passage du qualitatif (v25) au quantitatif (v26) donne l\'echelle de l\'enjeu.",
        axe3_sourate: "La sourate al-Baqarah utilise kathir dans plusieurs contextes. L\'idee du grand nombre est recurrente — la sourate traite des grandes masses humaines et de leurs destinees.",
        axe4_coherence: "Le Coran utilise kathir dans de nombreux versets pour qualifier le nombre. L\'abondance est un theme coranique : abondance de provision, abondance de recompense, abondance d\'egares et de guides.",
        axe5_frequence: "Pour la mission du khalifa, le grand nombre est l\'echelle de la mission. Le khalifa travaille pour le plus grand nombre. Le verset montre que l\'impact divin est massif — la mission du khalifa doit aussi viser l\'echelle."
      }
    }
  }},
  { verse_id: 33, word_key: 'hdy', position: 17, analysis_axes: {
    sense_chosen: "guider",
    concept_chosen: "Guidance/Direction",
    concepts: {
      "Guidance/Direction": {
        senses: ["guider", "montrer le chemin", "diriger"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Guidance/Direction ». Le verbe yahdi est un inaccompli 3MS de la racine h-d-y. D\'apres les sources etymologiques, h-d-y signifie « guider, montrer le chemin, diriger vers la bonne voie ». L\'inaccompli dit que la guidance est en cours et permanente. Le sujet implicite est Dieu — Il guide par l\'exemple. Le verbe est coordonne avec yudillu (Il egare) : la meme cause (l\'exemple) produit deux effets (egarement et guidance) selon le recepteur. La guidance est le pendant positif de l\'egarement.",
        axe1_verset: "Le verbe yahdi est le second element de la reponse divine : Il guide par cela beaucoup. La guidance s\'oppose a l\'egarement dans une symetrie parfaite. Le champ lexical de la fin du verset est celui de la dualite : egarer/guider, deviants/implicitement guides. L\'exemple divin est un outil de tri — il guide les uns et egare les autres.",
        axe2_voisins: "Le verset 25 parlait de la recompense des adherents. Le verset 26 parle de la guidance qui mene a cette recompense. La guidance est le chemin, la recompense est la destination. Les adherents sont guides vers les jardins.",
        axe3_sourate: "La sourate al-Baqarah est centree sur la guidance (huda). Les premiers versets (2:2-5) etablissent que le livre est une guidance pour les premunisseurs. Le verset 26 montre que les exemples sont un instrument de cette guidance. La sourate utilise h-d-y comme son theme principal.",
        axe4_coherence: "Le Coran utilise h-d-y dans plus de 300 versets. La guidance est le concept le plus central du Coran — tout le message coranique est une guidance. Le verset 2:26 montre que les exemples sont un vecteur de cette guidance.",
        axe5_frequence: "Pour la mission du khalifa, la guidance est la substance de la mission. Le khalifa guide les gens vers la verite. Le verset montre que la guidance divine passe par les exemples — le khalifa doit utiliser cette methode."
      }
    }
  }},
  { verse_id: 33, word_key: 'fsq', position: 18, analysis_axes: {
    sense_chosen: "deviant",
    concept_chosen: "Deviation/Sortie",
    concepts: {
      "Deviation/Sortie": {
        senses: ["sortir du droit chemin", "devier", "deviant"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Deviation/Sortie ». Le mot al-fasiqina est un participe actif pluriel masculin defini a l\'accusatif de la racine f-s-q. D\'apres les sources etymologiques (Lane\'s), f-s-q signifie « sortir de, sortir de la peau (en parlant d\'un fruit), sortir du droit chemin, devier ». Le fasiq est celui qui sort activement du chemin — le deviant. Le participe actif dit que la deviation est un acte en cours et permanent. L\'article defini al- designe les deviants connus — un groupe identifie. La phrase wa ma yudillu bihi illa al-fasiqina (et Il n\'egare par cela que les deviants) restreint l\'egarement aux seuls deviants — l\'egarement n\'est pas arbitraire mais cible. La distinction avec « Pervers » : pervers implique une corruption morale inherente, deviant pointe l\'acte de sortir du chemin — une action, pas un etat moral. Le Lane\'s confirme : « he went forth from obedience, deviated from the right way ».",
        axe1_verset: "Le mot al-fasiqina cloture le verset par une restriction decisive : Dieu n\'egare que les deviants. La structure est exceptive (illa = sauf, seulement) — elle exclut tous les autres de l\'egarement. Le champ lexical de la fin du verset est celui du tri : beaucoup sont egares, beaucoup sont guides, et parmi les egares, seuls les deviants. La precision est rassurante pour les adherents — ils ne risquent pas l\'egarement.",
        axe2_voisins: "Le verset 24 mentionnait les recouvrants (kafirina). Le verset 26 mentionne les deviants (fasiqina). Les deux termes designent des comportements differents mais lies : le kafir recouvre la verite, le fasiq sort du chemin. Le recouvrement est une cause, la deviation en est la consequence.",
        axe3_sourate: "La sourate al-Baqarah utilise f-s-q dans plusieurs contextes : 2:26 (les deviants), 2:59 (les deviants parmi les Fils d\'Israel). La deviation est un theme de la sourate — elle designe ceux qui connaissent le chemin mais en sortent deliberement.",
        axe4_coherence: "Le Coran utilise fasiq/fasiqin dans plus de 50 versets. Le fasiq est toujours celui qui sort du chemin de l\'obeissance. En 2:26, la deviation est la cause de l\'egarement — celui qui sort du chemin se perd. Le Coran distingue kafir (recouvrant), fasiq (deviant) et munafiq (hypocrite) comme trois categories distinctes.",
        axe5_frequence: "Pour la mission du khalifa, la deviation est un signal d\'alerte. Le fasiq n\'est pas un ennemi mais un egare — il a quitte le chemin et peut y revenir. La mission du khalifa inclut le rappel des deviants — les ramener sur le chemin dont ils sont sortis."
      },
      "Sens isole/Fruit": {
        senses: ["fruit qui sort de sa peau"],
        status: "nul",
        proof_ctx: "Le sens du fruit qui sort de sa peau est l\'etymologie premiere de f-s-q. Mais le mot est devenu specifiquement la deviation morale dans l\'usage coranique. Le contexte parle de personnes, pas de fruits."
      }
    }
  }}
];

// =====================================================
// VERSE UPDATES
// =====================================================
const verseUpdates = [
  {
    verse_id: 31,
    translation_arab: "Alors si vous ne le faites pas \u2014 et vous ne le ferez jamais \u2014 alors premunissez-vous du feu dont le combustible est les gens et les pierres, prepare pour les recouvrants.",
    full_translation: "Si vous n\u2019y parvenez pas et, a coup sur, vous n\u2019y parviendrez jamais, parez-vous donc contre le feu qu\u2019alimenteront les hommes et les pierres, lequel est reserve aux infideles.",
    translation_explanation: `\u00A7DEMARCHE\u00A7
Le verset commence par une conditionnelle \u2014 fa-in lam taf\u2019alu \u2014 \u00AB si vous ne faites pas \u00BB. Le verbe **taf\u2019alu** est un inaccompli precede de la negation lam (une forme qui nie l\u2019action dans le passe \u2014 vous n\u2019avez pas fait). La deuxieme occurrence **wa-lan taf\u2019alu** utilise lan (une negation definitive du futur \u2014 vous ne ferez jamais). Cette double negation est remarquable : lam nie le passe, lan nie le futur. Le verbe **ittaqu** est un imperatif forme VIII de w-q-y (se premunir soi-meme). Le mot **al-nar** est un nom defini feminin (le feu, connu et determine). Le mot **waquduha** est en idafa avec le pronom 3FS (son combustible \u2014 ce qui l\u2019alimente). Le Lane\u2019s donne pour w-q-d \u00AB ce qui sert a alimenter le feu \u00BB. Le verbe **u\u2019iddat** est un accompli passif forme IV de e-d-d (a ete preparee \u2014 la forme passive indique que le sujet n\u2019est pas mentionne, la preparation est un fait accompli). Le mot **al-kafirina** est un participe actif pluriel de k-f-r precede de li (pour les recouvrants \u2014 ceux qui font activement l\u2019action de recouvrir la verite).

\u00A7JUSTIFICATION\u00A7
**faire** \u2014 Le sens retenu est \u00AB Action/Realisation \u00BB. Le mot \u00AB faire \u00BB est le plus direct et universel. L\u2019alternative \u00AB agir \u00BB est ecartee car moins naturel dans la construction conditionnelle.

**premunissez-vous** \u2014 Le sens retenu est \u00AB Protection/Prevention \u00BB. La forme VIII implique l\u2019action sur soi-meme. L\u2019alternative \u00AB craignez \u00BB est ecartee car elle appartient au sens \u00AB Conscience/Piete \u00BB.

**feu** \u2014 Le sens retenu est \u00AB Feu/Chaleur \u00BB. Le mot \u00AB feu \u00BB est le sens premier de al-nar. L\u2019alternative \u00AB lumiere \u00BB est ecartee car nar dans le Lane\u2019s designe specifiquement le feu.

**combustible** \u2014 Le sens retenu est \u00AB Feu/Combustion \u00BB. Le mot \u00AB combustible \u00BB est choisi car waqud dans le Lane\u2019s designe specifiquement ce qui alimente le feu. L\u2019alternative \u00AB bois \u00BB est ecartee car waqud est plus general.

**pierre** \u2014 Le sens retenu est \u00AB Pierre/Roche \u00BB. Direct et litteral.

**preparee** \u2014 Le sens retenu est \u00AB Preparation \u00BB. La forme passive indique que la preparation est un fait accompli.

**recouvrants** \u2014 Le sens retenu est \u00AB Couverture/Dissimulation \u00BB. Le participe actif kafirin designe ceux qui font activement l\u2019action de recouvrir. L\u2019alternative \u00AB mecreants \u00BB est ecartee car c\u2019est une traduction interpretative qui masque le sens etymologique de \u00AB celui qui recouvre \u00BB.

\u00A7CRITIQUE\u00A7
**infideles vs recouvrants** \u2014 Les traductions courantes donnent \u00AB infideles \u00BB pour al-kafirina. Ce choix vient du vocabulaire religieux chretien ou \u00AB infidele \u00BB designe celui qui n\u2019a pas la foi. Mais la racine k-f-r signifie \u00AB recouvrir, cacher \u00BB. Le kafir est celui qui recouvre la verite, pas celui qui manque de foi. Cette nuance change le sens : \u00AB infidele \u00BB pointe un manque, \u00AB recouvrant \u00BB pointe un acte actif de dissimulation.
**parez-vous vs premunissez-vous** \u2014 Les traductions courantes donnent \u00AB parez-vous \u00BB ou \u00AB craignez \u00BB. \u00AB Se premunir \u00BB capture mieux le sens de protection preventive de la racine w-q-y forme VIII.`,
    segments: [
      { fr: "alors si", phon: "fa-in", arabic: "\u0641\u064E\u0625\u0650\u0646", is_particle: true, position: 1 },
      { fr: "ne faites pas", pos: "verbe", phon: "lam taf\u2019alu", arabic: "\u0644\u0651\u064E\u0645\u0652 \u062A\u064E\u0641\u0652\u0639\u064E\u0644\u064F\u0648\u0627\u06DF", word_key: "fel", is_particle: false, sense_retenu: "faire", position: 2 },
      { fr: "et ne ferez jamais", pos: "verbe", phon: "wa-lan taf\u2019alu", arabic: "\u0648\u064E\u0644\u064E\u0646 \u062A\u064E\u0641\u0652\u0639\u064E\u0644\u064F\u0648\u0627\u06DF", word_key: "fel", is_particle: false, sense_retenu: "faire", position: 3 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064E", is_particle: true, position: 4 },
      { fr: "premunissez-vous", pos: "verbe", phon: "ittaqu", arabic: "\u0671\u062A\u0651\u064E\u0642\u064F\u0648\u0627\u06DF", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 5 },
      { fr: "le feu", pos: "nom", phon: "al-nar", arabic: "\u0671\u0644\u0646\u0651\u064E\u0627\u0631\u064E", word_key: "nwr", is_particle: false, sense_retenu: "feu", position: 6 },
      { fr: "dont le combustible", pos: "nom", phon: "waquduha", arabic: "\u0648\u064E\u0642\u064F\u0648\u062F\u064F\u0647\u064E\u0627", word_key: "wqd", is_particle: false, sense_retenu: "combustible", position: 7 },
      { fr: "les gens", pos: "nom", phon: "al-nasu", arabic: "\u0671\u0644\u0646\u0651\u064E\u0627\u0633\u064F", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 8 },
      { fr: "et les pierres", pos: "nom", phon: "wal-hijara", arabic: "\u0648\u064E\u0671\u0644\u0652\u062D\u0650\u062C\u064E\u0627\u0631\u064E\u0629\u064F", word_key: "hjr", is_particle: false, sense_retenu: "pierre", position: 9 },
      { fr: "preparee", pos: "verbe", phon: "u\u2019iddat", arabic: "\u0623\u064F\u0639\u0650\u062F\u0651\u064E\u062A\u0652", word_key: "edd", is_particle: false, sense_retenu: "preparer", position: 10 },
      { fr: "pour les recouvrants", pos: "participe_actif", phon: "lil-kafirina", arabic: "\u0644\u0650\u0644\u0652\u0643\u064E\u0640\u0670\u0641\u0650\u0631\u0650\u064A\u0646\u064E", word_key: "kfr", is_particle: false, sense_retenu: "recouvrant", position: 11 }
    ]
  },
  {
    verse_id: 32,
    translation_arab: "Et annonce a ceux qui ont adhere et fait les oeuvres reformatrices que pour eux il y a des jardins sous lesquels coulent les rivieres. Chaque fois qu\u2019ils sont pourvus d\u2019un fruit comme provision, ils disent : \u00AB C\u2019est ce dont nous avons ete pourvus auparavant. \u00BB Et cela leur est donne en ressemblance. Et pour eux, la-dedans, des conjoints purifies \u2014 et ils y sont pour toujours.",
    full_translation: "Annonce a ceux qui croient et pratiquent de bonnes oeuvres qu\u2019ils auront pour demeures des jardins sous lesquels coulent les ruisseaux ; chaque fois qu\u2019ils seront gratifies d\u2019un fruit des jardins, ils diront : \u00AB C\u2019est bien la ce dont nous avons ete gratifies auparavant. \u00BB Car ils recevront quelque chose de semblable. Ils auront la des epouses purifiees, et ils demeureront eternellement.",
    translation_explanation: `\u00A7DEMARCHE\u00A7
Ce verset est la contrepartie positive du verset precedent. Le verbe **bashshir** est un imperatif forme II de la racine b-sh-r (une forme qui intensifie \u2014 annoncer avec insistance une bonne nouvelle). Le verbe **amanu** est un accompli forme IV de a-m-n (une forme qui dit \u00AB faire faire \u00BB \u2014 ici, accorder son adhesion). Le verbe **\u2019amilu** est un accompli simple (ils ont fait). Le mot **al-salihati** est un participe actif feminin pluriel defini de s-l-h (les choses qui reforment \u2014 les oeuvres qui rendent les choses bonnes et droites). Le mot **jannatin** est un nom pluriel indefini de j-n-n. Le Lane\u2019s donne \u00AB un jardin avec des arbres qui couvrent le sol de leur ombre \u00BB. Le verbe **tajri** est un inaccompli (une action en cours \u2014 les rivieres coulent en permanence). Le verbe **ruziqu** est un accompli passif (ils ont ete pourvus \u2014 la forme passive indique que la provision vient d\u2019un pourvoyeur non nomme). Le mot **mutashabihan** signifie \u00AB en ressemblance, similaire \u00BB. Le mot **azwajun** est un nom pluriel de z-w-j (des conjoints, des paires). Le mot **mutahharatun** est un participe passif forme II feminin singulier de t-h-r (une forme qui dit que la purification a ete accomplie sur elles \u2014 elles ont ete rendues pures). Le mot **khaliduna** est un participe actif pluriel de kh-l-d (ceux qui font activement l\u2019action de durer \u2014 la permanence est un etat actif).

\u00A7JUSTIFICATION\u00A7
**annonce** \u2014 Le sens retenu est \u00AB Annonce/Rejouissance \u00BB. Le mot \u00AB annonce \u00BB est choisi car la forme II de b-sh-r signifie \u00AB annoncer une bonne nouvelle \u00BB. L\u2019alternative \u00AB rejouis \u00BB est ecartee car l\u2019imperatif s\u2019adresse au prophete, pas aux croyants.

**adhere** \u2014 Le sens retenu est \u00AB Foi/Adhesion \u00BB. La forme IV de a-m-n signifie \u00AB accorder son adhesion, donner sa confiance \u00BB. L\u2019alternative \u00AB cru \u00BB est ecartee car \u00AB croire \u00BB est trop passif \u2014 la forme IV implique un acte d\u2019engagement.

**oeuvres reformatrices** \u2014 Le sens retenu est \u00AB Bonte/Rectitude \u00BB. Le participe actif al-salihat designe les oeuvres qui reforment, qui rendent les choses bonnes. L\u2019alternative \u00AB bonnes oeuvres \u00BB est ecartee car elle est vague et moralisante.

**jardins** \u2014 Le sens retenu est \u00AB Jardin/Paradis \u00BB. Le mot \u00AB jardin \u00BB est choisi car janna dans le Lane\u2019s designe un lieu couvert d\u2019arbres. L\u2019alternative \u00AB paradis \u00BB est ecartee car c\u2019est une interpretation.

**conjoints purifies** \u2014 Le sens retenu est \u00AB Couple/Paire \u00BB pour azwaj et \u00AB Purete/Proprete \u00BB pour mutahhara. Le mot \u00AB conjoints \u00BB est choisi car il est neutre en genre \u2014 zawj designe le partenaire dans une paire. L\u2019alternative \u00AB epouses \u00BB est ecartee car elle restreint le genre. \u00AB Purifies \u00BB capture le participe passif forme II \u2014 la purification a ete accomplie sur eux.

**pour toujours** \u2014 Le sens retenu est \u00AB Eternite/Permanence \u00BB. Le participe actif khaliduna designe ceux qui durent perpetuellement. L\u2019alternative \u00AB eternellement \u00BB est un adverbe qui fonctionne mais \u00AB pour toujours \u00BB est plus courant en francais.

\u00A7CRITIQUE\u00A7
**bonnes oeuvres vs oeuvres reformatrices** \u2014 Les traductions courantes donnent \u00AB bonnes oeuvres \u00BB ou \u00AB de bonnes actions \u00BB pour al-salihati. La racine s-l-h signifie \u00AB reformer, rendre bon, corriger \u00BB. Le participe actif designe les oeuvres qui reforment activement \u2014 pas simplement des oeuvres \u00AB bonnes \u00BB de maniere vague. Cette nuance change le sens : les oeuvres ne sont pas jugees par leur moralite abstraite mais par leur effet reformateur concret.
**epouses vs conjoints** \u2014 Les traductions courantes donnent \u00AB epouses \u00BB pour azwaj. Le mot zawj en arabe designe le partenaire dans une paire, sans distinction de genre. Traduire par \u00AB epouses \u00BB restreint le sens au feminin.
Les traductions courantes donnent sensiblement le meme sens pour le reste du verset.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 1 },
      { fr: "annonce", pos: "verbe", phon: "bashshir", arabic: "\u0628\u064E\u0634\u0651\u0650\u0631\u0650", word_key: "bshr", is_particle: false, sense_retenu: "annoncer", position: 2 },
      { fr: "ceux qui ont adhere", pos: "verbe", phon: "alladhina amanu", arabic: "\u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E \u0621\u064E\u0627\u0645\u064E\u0646\u064F\u0648\u0627\u06DF", word_key: "amn", is_particle: false, sense_retenu: "adherer", position: 3 },
      { fr: "et fait", pos: "verbe", phon: "wa \u2019amilu", arabic: "\u0648\u064E\u0639\u064E\u0645\u0650\u0644\u064F\u0648\u0627\u06DF", word_key: "eml", is_particle: false, sense_retenu: "faire", position: 4 },
      { fr: "les oeuvres reformatrices", pos: "participe_actif", phon: "al-salihati", arabic: "\u0671\u0644\u0635\u0651\u064E\u0640\u0670\u0644\u0650\u062D\u064E\u0640\u0670\u062A\u0650", word_key: "slh", is_particle: false, sense_retenu: "reformer", position: 5 },
      { fr: "que pour eux", phon: "anna lahum", arabic: "\u0623\u064E\u0646\u0651\u064E \u0644\u064E\u0647\u064F\u0645\u0652", is_particle: true, position: 6 },
      { fr: "des jardins", pos: "nom", phon: "jannatin", arabic: "\u062C\u064E\u0646\u0651\u064E\u0640\u0670\u062A\u064D", word_key: "jnn", is_particle: false, sense_retenu: "jardin", position: 7 },
      { fr: "coulent", pos: "verbe", phon: "tajri", arabic: "\u062A\u064E\u062C\u0652\u0631\u0650\u0649", word_key: "jry", is_particle: false, sense_retenu: "couler", position: 8 },
      { fr: "de sous elles", pos: "nom", phon: "min tahtiha", arabic: "\u0645\u0650\u0646 \u062A\u064E\u062D\u0652\u062A\u0650\u0647\u064E\u0627", word_key: "tht", is_particle: false, sense_retenu: "sous", position: 9 },
      { fr: "les rivieres", pos: "nom", phon: "al-anharu", arabic: "\u0671\u0644\u0652\u0623\u064E\u0646\u0652\u0647\u064E\u0640\u0670\u0631\u064F", word_key: "nhr", is_particle: false, sense_retenu: "riviere", position: 10 },
      { fr: "chaque fois que", phon: "kullama", arabic: "\u0643\u064F\u0644\u0651\u064E\u0645\u064E\u0627", is_particle: true, position: 11 },
      { fr: "ils sont pourvus", pos: "verbe", phon: "ruziqu", arabic: "\u0631\u064F\u0632\u0650\u0642\u064F\u0648\u0627\u06DF", word_key: "rzq", is_particle: false, sense_retenu: "pourvoir", position: 12 },
      { fr: "d\u2019un fruit", pos: "nom", phon: "min thamaratin", arabic: "\u0645\u0650\u0646 \u062B\u064E\u0645\u064E\u0631\u064E\u0629\u064D", word_key: "thmr", is_particle: false, sense_retenu: "fruit", position: 13 },
      { fr: "comme provision", pos: "nom", phon: "rizqan", arabic: "\u0631\u0651\u0650\u0632\u0652\u0642\u064B\u0627", word_key: "rzq", is_particle: false, sense_retenu: "provision", position: 14 },
      { fr: "ils disent", pos: "verbe", phon: "qalu", arabic: "\u0642\u064E\u0627\u0644\u064F\u0648\u0627\u06DF", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 15 },
      { fr: "c\u2019est ce dont nous avons ete pourvus", phon: "hadha alladhi ruziqna", arabic: "\u0647\u064E\u0640\u0670\u0630\u064E\u0627 \u0671\u0644\u0651\u064E\u0630\u0650\u0649 \u0631\u064F\u0632\u0650\u0642\u0652\u0646\u064E\u0627", is_particle: true, position: 16 },
      { fr: "auparavant", pos: "nom", phon: "min qablu", arabic: "\u0645\u0650\u0646 \u0642\u064E\u0628\u0652\u0644\u064F", word_key: "qbl", is_particle: false, sense_retenu: "avant", position: 17 },
      { fr: "et cela leur est donne", pos: "verbe", phon: "wa utu bihi", arabic: "\u0648\u064E\u0623\u064F\u062A\u064F\u0648\u0627\u06DF \u0628\u0650\u0647\u0650\u06E6", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 18 },
      { fr: "en ressemblance", phon: "mutashabihan", arabic: "\u0645\u064F\u062A\u064E\u0634\u064E\u0640\u0670\u0628\u0650\u0647\u064B\u0627", is_particle: true, position: 19 },
      { fr: "et pour eux la-dedans", phon: "wa lahum fiha", arabic: "\u0648\u064E\u0644\u064E\u0647\u064F\u0645\u0652 \u0641\u0650\u064A\u0647\u064E\u0622", is_particle: true, position: 20 },
      { fr: "des conjoints", pos: "nom", phon: "azwajun", arabic: "\u0623\u064E\u0632\u0652\u0648\u064E\u0640\u0670\u062C\u064C", word_key: "zwj", is_particle: false, sense_retenu: "conjoint", position: 21 },
      { fr: "purifies", pos: "participe_passif", phon: "mutahharatun", arabic: "\u0645\u0651\u064F\u0637\u064E\u0647\u0651\u064E\u0631\u064E\u0629\u064C", word_key: "thr", is_particle: false, sense_retenu: "purifier", position: 22 },
      { fr: "et ils y sont", phon: "wa hum fiha", arabic: "\u0648\u064E\u0647\u064F\u0645\u0652 \u0641\u0650\u064A\u0647\u064E\u0627", is_particle: true, position: 23 },
      { fr: "pour toujours", pos: "participe_actif", phon: "khaliduna", arabic: "\u062E\u064E\u0640\u0670\u0644\u0650\u062F\u064F\u0648\u0646\u064E", word_key: "xld", is_particle: false, sense_retenu: "eternel", position: 24 }
    ]
  },
  {
    verse_id: 33,
    translation_arab: "Dieu ne se retient pas de frapper un exemple \u2014 fut-ce un moustique ou ce qui est au-dessus. Quant a ceux qui ont adhere, ils savent que c\u2019est la verite venant de leur Maitre. Quant a ceux qui ont recouvert, ils disent : \u00AB Que voulait Dieu par cet exemple ? \u00BB Il egare par cela beaucoup et Il guide par cela beaucoup \u2014 et Il n\u2019egare par cela que les deviants.",
    full_translation: "Certes, Dieu ne se gene point de citer en exemple n\u2019importe quoi : un moustique ou quoi que ce soit au-dessus ; quant aux croyants, ils savent bien que c\u2019est la verite venant de la part de leur Seigneur ; quant aux infideles, ils se demandent \u00AB Qu\u2019a voulu dire Dieu par un tel exemple ? \u00BB. Par cela, nombreux sont ceux qu\u2019Il egare et nombreux sont ceux qu\u2019Il guide ; mais Il n\u2019egare par cela que les pervers.",
    translation_explanation: `\u00A7DEMARCHE\u00A7
Le verset s\u2019ouvre par la particule d\u2019insistance inna suivie du nom divin. Le verbe **yastahyi** est un inaccompli forme X de la racine h-y-y precede de la negation la. La forme X signifie \u00AB chercher la pudeur, avoir honte \u00BB. Le Lane\u2019s donne \u00AB he was ashamed, was bashful \u00BB. La negation la yastahyi signifie \u00AB Il ne se retient pas par pudeur \u00BB. L\u2019expression **yadriba mathalan** est idiomatique en arabe \u2014 daraba mathalan signifie \u00AB frapper un exemple, donner une parabole \u00BB. Le mot **ba\u2019udatan** est un nom de la racine b-e-d qui signifie \u00AB moustique \u00BB. Le Lane\u2019s donne \u00AB a gnat, a mosquito \u00BB. Le pronom **ma** ici est indefini. Le mot **fawqaha** signifie \u00AB au-dessus d\u2019elle \u00BB. Le verbe **arada** est un accompli forme IV de r-w-d (une forme qui dit vouloir, chercher intentionnellement). Le verbe **yudillu** est un inaccompli forme IV de d-l-l (une forme qui dit \u00AB faire egarer \u00BB \u2014 faire tomber dans l\u2019egarement). Le mot **kathiran** est un adjectif/nom de k-th-r (beaucoup, en grand nombre). Le verbe **yahdi** est un inaccompli de h-d-y (guider). Le mot **al-fasiqina** est un participe actif pluriel defini de f-s-q. Le Lane\u2019s donne \u00AB he went forth from the right way, deviated \u00BB.

\u00A7JUSTIFICATION\u00A7
**ne se retient pas** \u2014 Le sens retenu est \u00AB Pudeur/Honte \u00BB. La forme X de h-y-y signifie \u00AB chercher la pudeur \u00BB. Traduit par \u00AB ne se retient pas \u00BB car la negation de la pudeur signifie que Dieu n\u2019hesite pas. L\u2019alternative \u00AB n\u2019a pas honte \u00BB est ecartee car elle implique un defaut moral.

**frapper un exemple** \u2014 Le sens retenu est \u00AB Exemple/Parabole \u00BB pour drb. L\u2019expression daraba mathalan est une formule idiomatique qui signifie \u00AB donner un exemple, proposer une comparaison \u00BB.

**verite** \u2014 Le sens retenu est \u00AB Verite/Realite \u00BB. Le mot al-haqq avec l\u2019article defini designe la verite connue et etablie. L\u2019alternative \u00AB droit \u00BB (sens \u00AB Droit/Justice \u00BB) est ecartee car le contexte parle de connaissance, pas de justice.

**voulait** \u2014 Le sens retenu est \u00AB Volonte/Intention \u00BB. La forme IV de r-w-d exprime une intention deliberee. L\u2019alternative \u00AB chercher \u00BB est ecartee car moins precis dans le contexte d\u2019une question rhetorique.

**deviants** \u2014 Le sens retenu est \u00AB Deviation/Sortie \u00BB. Le participe actif fasiqina designe ceux qui sortent activement du droit chemin. L\u2019alternative \u00AB pervers \u00BB est ecartee car c\u2019est une interpretation moralisante. Le Lane\u2019s donne \u00AB he went forth from obedience, deviated from the right way \u00BB.

\u00A7CRITIQUE\u00A7
**pervers vs deviants** \u2014 Les traductions courantes donnent \u00AB pervers \u00BB pour al-fasiqina. La racine f-s-q signifie \u00AB sortir de sa peau \u00BB (en parlant d\u2019un fruit), puis \u00AB sortir du droit chemin \u00BB. Le mot \u00AB pervers \u00BB implique une corruption morale inherente, alors que \u00AB deviant \u00BB pointe l\u2019acte de sortir du chemin \u2014 une action, pas un etat moral. Cette nuance est importante : le fasiq n\u2019est pas mauvais par nature, il a devie de sa trajectoire.
**croyants vs ceux qui ont adhere** \u2014 Deja critique dans les versets precedents (forme IV de a-m-n = accorder son adhesion, pas simplement \u00AB croire \u00BB).
**infideles vs ceux qui ont recouvert** \u2014 Deja critique.`,
    segments: [
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064E", is_particle: true, position: 1 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u064E", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 2 },
      { fr: "ne se retient pas", pos: "verbe", phon: "la yastahyi", arabic: "\u0644\u064E\u0627 \u064A\u064E\u0633\u0652\u062A\u064E\u062D\u0652\u0649\u0650\u06E6\u0653", word_key: "hyy", is_particle: false, sense_retenu: "avoir honte", position: 3 },
      { fr: "de frapper", pos: "verbe", phon: "an yadriba", arabic: "\u0623\u064E\u0646 \u064A\u064E\u0636\u0652\u0631\u0650\u0628\u064E", word_key: "drb", is_particle: false, sense_retenu: "frapper", position: 4 },
      { fr: "un exemple", pos: "nom", phon: "mathalan", arabic: "\u0645\u064E\u062B\u064E\u0644\u064B\u0627", word_key: "mvl", is_particle: false, sense_retenu: "exemple", position: 5 },
      { fr: "fut-ce", phon: "ma", arabic: "\u0645\u0651\u064E\u0627", is_particle: true, position: 6 },
      { fr: "un moustique", pos: "nom", phon: "ba\u2019udatan", arabic: "\u0628\u064E\u0639\u064F\u0648\u0636\u064E\u0629\u064B", word_key: "bed", is_particle: false, sense_retenu: "moustique", position: 7 },
      { fr: "ou ce qui est au-dessus", phon: "fama fawqaha", arabic: "\u0641\u064E\u0645\u064E\u0627 \u0641\u064E\u0648\u0652\u0642\u064E\u0647\u064E\u0627", is_particle: true, position: 8 },
      { fr: "quant a ceux qui ont adhere", pos: "verbe", phon: "fa-amma alladhina amanu", arabic: "\u0641\u064E\u0623\u064E\u0645\u0651\u064E\u0627 \u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E \u0621\u064E\u0627\u0645\u064E\u0646\u064F\u0648\u0627\u06DF", word_key: "amn", is_particle: false, sense_retenu: "adherer", position: 9 },
      { fr: "ils savent", pos: "verbe", phon: "fa-ya\u2019lamuna", arabic: "\u0641\u064E\u064A\u064E\u0639\u0652\u0644\u064E\u0645\u064F\u0648\u0646\u064E", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 10 },
      { fr: "que c\u2019est", phon: "annahu", arabic: "\u0623\u064E\u0646\u0651\u064E\u0647\u064F", is_particle: true, position: 11 },
      { fr: "la verite", pos: "nom", phon: "al-haqqu", arabic: "\u0671\u0644\u0652\u062D\u064E\u0642\u0651\u064F", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 12 },
      { fr: "de leur Maitre", pos: "nom", phon: "min rabbihim", arabic: "\u0645\u0650\u0646 \u0631\u0651\u064E\u0628\u0651\u0650\u0647\u0650\u0645\u0652", word_key: "rbb", is_particle: false, sense_retenu: "maitre", position: 13 },
      { fr: "et quant a ceux qui ont recouvert", pos: "verbe", phon: "wa amma alladhina kafaru", arabic: "\u0648\u064E\u0623\u064E\u0645\u0651\u064E\u0627 \u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E \u0643\u064E\u0641\u064E\u0631\u064F\u0648\u0627\u06DF", word_key: "kfr", is_particle: false, sense_retenu: "recouvrir", position: 14 },
      { fr: "ils disent", pos: "verbe", phon: "fa-yaquluna", arabic: "\u0641\u064E\u064A\u064E\u0642\u064F\u0648\u0644\u064F\u0648\u0646\u064E", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 15 },
      { fr: "que voulait", pos: "verbe", phon: "madha arada", arabic: "\u0645\u064E\u0627\u0630\u064E\u0622 \u0623\u064E\u0631\u064E\u0627\u062F\u064E", word_key: "rwd", is_particle: false, sense_retenu: "vouloir", position: 16 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u064F", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 17 },
      { fr: "par cet exemple", pos: "nom", phon: "bi-hadha mathalan", arabic: "\u0628\u0650\u0647\u064E\u0640\u0670\u0630\u064E\u0627 \u0645\u064E\u062B\u064E\u0644\u064B\u0627", word_key: "mvl", is_particle: false, sense_retenu: "exemple", position: 18 },
      { fr: "Il egare par cela", pos: "verbe", phon: "yudillu bihi", arabic: "\u064A\u064F\u0636\u0650\u0644\u0651\u064F \u0628\u0650\u0647\u0650\u06E6", word_key: "dll", is_particle: false, sense_retenu: "egarer", position: 19 },
      { fr: "beaucoup", pos: "nom", phon: "kathiran", arabic: "\u0643\u064E\u062B\u0650\u064A\u0631\u064B\u0627", word_key: "k\u1E6Fr", is_particle: false, sense_retenu: "beaucoup", position: 20 },
      { fr: "et Il guide par cela", pos: "verbe", phon: "wa yahdi bihi", arabic: "\u0648\u064E\u064A\u064E\u0647\u0652\u062F\u0650\u0649 \u0628\u0650\u0647\u0650\u06E6", word_key: "hdy", is_particle: false, sense_retenu: "guider", position: 21 },
      { fr: "beaucoup", pos: "nom", phon: "kathiran", arabic: "\u0643\u064E\u062B\u0650\u064A\u0631\u064B\u0627", word_key: "k\u1E6Fr", is_particle: false, sense_retenu: "beaucoup", position: 22 },
      { fr: "et Il n\u2019egare par cela que", pos: "verbe", phon: "wa ma yudillu bihi illa", arabic: "\u0648\u064E\u0645\u064E\u0627 \u064A\u064F\u0636\u0650\u0644\u0651\u064F \u0628\u0650\u0647\u0650\u06E6\u0653 \u0625\u0650\u0644\u0651\u064E\u0627", word_key: "dll", is_particle: false, sense_retenu: "egarer", position: 23 },
      { fr: "les deviants", pos: "participe_actif", phon: "al-fasiqina", arabic: "\u0671\u0644\u0652\u0641\u064E\u0640\u0670\u0633\u0650\u0642\u0650\u064A\u0646\u064E", word_key: "fsq", is_particle: false, sense_retenu: "deviant", position: 24 }
    ]
  }
];

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 24 A 26 ===\n');

  // Insert VWA entries
  let okVwa = 0, failVwa = 0;
  for (const vwa of vwaData) {
    const { error } = await db.from('verse_word_analyses').insert({
      verse_id: vwa.verse_id,
      word_key: vwa.word_key,
      position: vwa.position,
      analysis_axes: vwa.analysis_axes,
      sense_chosen: vwa.analysis_axes.sense_chosen,
    });
    if (error) {
      console.error(`FAIL VWA ${vwa.word_key} v${vwa.verse_id} pos${vwa.position}:`, error.message);
      failVwa++;
    } else {
      console.log(`OK VWA ${vwa.word_key} v${vwa.verse_id}`);
      okVwa++;
    }
  }

  // Update verse_analyses
  let okV = 0, failV = 0;
  for (const vu of verseUpdates) {
    const { error } = await db.from('verse_analyses').update({
      translation_arab: vu.translation_arab,
      full_translation: vu.full_translation,
      translation_explanation: vu.translation_explanation,
      segments: vu.segments,
    }).eq('verse_id', vu.verse_id);
    if (error) {
      console.error(`FAIL verse V${vu.verse_id}:`, error.message);
      failV++;
    } else {
      console.log(`OK verse V${vu.verse_id}`);
      okV++;
    }
  }

  console.log(`\nDone: VWA ${okVwa}/${vwaData.length}, Verses ${okV}/${verseUpdates.length}`);
  if (failVwa > 0 || failV > 0) {
    console.log(`Errors: VWA ${failVwa}, Verses ${failV}`);
  }
}

main().catch(console.error);
