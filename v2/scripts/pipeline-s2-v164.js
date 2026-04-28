const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 164
// verse_id=171, analysis_id=531
// "Dans la creation des cieux et de la terre, l'alternance
//  de la nuit et du jour, les navires qui voguent sur la mer
//  avec ce qui profite aux gens, ce que Dieu fait descendre
//  du ciel comme eau par laquelle Il fait revivre la terre
//  apres sa mort et y repand toute creature, le changement
//  des vents et les nuages assujettis entre le ciel et la
//  terre, il y a des signes pour un peuple qui raisonne."
// =====================================================

const verseData = {
  164: {
    verse_id: 171,
    analysis_id: 531,
    translation_arab: "Dans la creation des cieux et de la terre, l'alternance de la nuit et du jour, les navires qui voguent sur la mer avec ce qui profite aux gens, ce que Dieu fait descendre du ciel comme eau par laquelle Il fait revivre la terre apres sa mort et y repand toute creature, le changement des vents et les nuages assujettis entre le ciel et la terre, il y a des signes pour un peuple qui raisonne.",
    full_translation: "Certes dans la creation des cieux et de la terre, dans l'alternance de la nuit et du jour, dans les vaisseaux qui voguent en mer au profit des gens, dans l'eau que Dieu fait descendre du ciel, par laquelle Il rend la vie a la terre une fois morte et y repand des betes de toute espece, dans la variation des vents et dans les nuages assujettis entre le ciel et la terre, en tout cela il y a des signes pour des gens qui raisonnent.",
    translation_explanation: `§DEMARCHE§
Le verset enumere sept signes cosmiques et naturels qui attestent de la puissance et de la sagesse du Createur. La structure est une longue enumeration introduite par **inna** (certes, en verite) et conclue par **la-ayatin li-qawmin ya'qiluna** (il y a des signes pour un peuple qui raisonne). Le verset est un argument cosmologique — il invite a regarder le monde pour y voir des preuves de l'existence et de l'unicite de Dieu. Le mot **khalqi** est un masdar (nom verbal) de la racine kh-l-q. Le Lane's donne : creer, faire exister, donner forme. La creation est l'acte fondateur — Dieu a fait exister les cieux et la terre a partir du neant. Le nom **as-samawati** est un pluriel feminin de la racine s-m-w. Le Lane's donne : ciel, ce qui est au-dessus et couvre. Les cieux au pluriel designent les couches superieures qui enveloppent la terre. Le nom **al-ardi** est de la racine a-r-d. Le Lane's donne : terre, sol, surface sur laquelle on vit. La terre est le support de la vie terrestre. Le nom **ikhtilafi** est un masdar de la forme VIII de la racine kh-l-f. Le Lane's donne : succeder, alterner, venir l'un apres l'autre. L'alternance est un phenomene cyclique permanent — la nuit et le jour se succedent sans interruption. Le nom **al-layli** est de la racine l-y-l. Le Lane's donne : nuit, periode d'obscurite. Le nom **an-nahari** est de la racine n-h-r. Le Lane's donne : jour, periode de lumiere. L'alternance nuit-jour est le premier signe temporel. Le nom **al-fulki** est de la racine f-l-k. Le Lane's donne : navire, vaisseau. Les navires voguent sur la mer — c'est un signe de la maitrise humaine rendue possible par Dieu. Le verbe **tajri** est un inaccompli de la racine j-r-y. Le Lane's donne : couler, courir, avoir cours. Le navire court sur la mer — l'inaccompli indique un mouvement continu et permanent. Le nom **al-bahri** est de la racine b-h-r. Le Lane's donne : mer, etendue d'eau. La mer est le lieu du commerce et du voyage. Le verbe **yanfa'u** est de la racine n-f-'. Le Lane's donne : etre utile, profiter. Ce qui est transporte sur la mer profite aux gens. Le nom **an-nasa** est de la racine n-w-s. Le Lane's donne : gens, etres humains. Les gens sont les beneficiaires des bienfaits enumeres. Le verbe **anzala** est un accompli de la forme IV de la racine n-z-l. Le Lane's donne : faire descendre, envoyer d'en haut. Dieu fait descendre du ciel l'eau — la pluie est un don divin qui vient d'en haut. Le nom **Allahu** est le nom propre de la divinite, sujet de l'action de faire descendre. Le nom **as-sama'i** est la deuxieme occurrence de la racine s-m-w — ici le ciel comme source de la pluie. Le verbe **ahya** est un accompli de la forme IV de la racine h-y-y. Le Lane's donne : donner la vie, faire revivre. Dieu fait revivre la terre morte par l'eau — la pluie est un instrument de resurrection. Le nom **al-arda** est la deuxieme occurrence de la racine a-r-d — ici la terre comme receptacle de la vie. Le nom **mawtiha** est de la racine m-w-t avec pronom suffixe 3FS. Le Lane's donne : mourir, mort. La mort de la terre est l'absence de vegetation — elle est seche et inerte. Le verbe **baththa** est de la racine b-th-th. Le Lane's donne : disperser, repandre. Dieu repand sur la terre toute espece de creature. Le nom **kulli** est de la racine k-l-l. Le Lane's donne : tout, chaque, totalite. Toute creature — sans exception. Le nom **dabbatin** est de la racine d-b-b. Le Lane's donne : bete qui marche sur terre, creature qui rampe ou se deplace. Le nom **tasrifi** est un masdar de la forme II de la racine s-r-f. Le Lane's donne : detourner, changer de direction. Le changement des vents est un phenomene cyclique. Le nom **ar-riyahi** est de la racine r-w-h. Le Lane's donne : vent, souffle. Les vents sont les messagers du changement climatique. Le nom **as-sahabi** est de la racine s-h-b. Le Lane's donne : compagnon, accompagner. Les nuages (sahab) sont ainsi nommes parce qu'ils accompagnent les vents — ils sont tires, traines par les vents. Le participe **al-musakhkhari** est de la forme II de la racine s-kh-r. Le Lane's donne : asservir, soumettre a son service. Les nuages sont assujettis — mis au service de l'homme entre le ciel et la terre. Le nom **as-sama'i** est la troisieme occurrence de s-m-w. Le nom **al-ardi** est la deuxieme occurrence de a-r-d. Le nom **ayatin** est de la racine a-y-y. Le Lane's donne : signe, marque, prodige. Il y a des signes dans tout cela. Le nom **qawmin** est de la racine q-w-m. Le Lane's donne : se lever, se dresser, peuple. Un peuple qui se tient debout — qui raisonne et reflechit. Le verbe **ya'qiluna** est de la racine '-q-l. Le Lane's donne : raisonner, lier, comprendre. Ceux qui raisonnent sont ceux qui utilisent leur raison pour comprendre les signes.

§JUSTIFICATION§
**creation** — Le sens retenu est « creer ». Le mot khalq designe l'acte de faire exister ce qui n'existait pas. Le Lane's confirme : creer, produire, donner forme. L'alternative « caractere/nature » est ecartee car le contexte est la creation cosmique, pas la nature morale.

**cieux** — Le sens retenu est « ciel ». Le mot samawat au pluriel designe les couches celestes. L'alternative « elevation/hauteur » est ecartee car le contexte est cosmique — les cieux et la terre comme paire.

**terre** (pos 4) — Le sens retenu est « terre ». Le mot al-ard designe la surface solide. L'alternative « trembler » est ecartee car le mot est un nom, pas un verbe.

**alternance** — Le sens retenu est « succeder/alterner ». Le mot ikhtilaf de la racine kh-l-f designe l'alternance cyclique. L'alternative « differer/contredire » est ecartee car le contexte est la succession reguliere nuit-jour.

**nuit** — Le sens retenu est « nuit ». Le mot al-layl designe la periode d'obscurite. Pas d'alternative pertinente dans ce contexte.

**jour** — Le sens retenu est « jour ». Le mot an-nahar designe la periode de lumiere. L'alternative « riviere/fleuve » est ecartee car le contexte est l'alternance nuit-jour, pas l'hydrologie.

**navires** — Le sens retenu est « navire ». Le mot al-fulk designe les vaisseaux qui naviguent. L'alternative « orbite » est ecartee car le contexte est la navigation maritime.

**voguent** — Le sens retenu est « couler/courir ». Le mot tajri decrit le mouvement du navire sur la mer. L'alternative « tirer » est ecartee car le verbe est intransitif ici — le navire court, il ne tire pas.

**mer** — Le sens retenu est « mer ». Le mot al-bahr designe la grande etendue d'eau. Pas d'alternative pertinente.

**profite** — Le sens retenu est « etre utile ». Le mot yanfa'u decrit l'utilite de ce qui est transporte. Pas d'alternative pertinente.

**gens** — Le sens retenu est « gens ». Le mot an-nas designe les etres humains collectivement. L'alternative « voir de loin » est ecartee car le mot est un nom designant les personnes.

**fait descendre** — Le sens retenu est « faire descendre ». Le mot anzala designe l'envoi d'en haut. L'alternative « s'installer/faire halte » est ecartee car le contexte est la descente de la pluie.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah est le nom propre de la divinite, sujet de l'action de faire descendre.

**ciel** (pos 21) — Le sens retenu est « ciel ». Deuxieme occurrence de samaw — ici le ciel comme source de la pluie. Meme sens que la premiere occurrence.

**fait revivre** — Le sens retenu est « donner la vie ». Le mot ahya de la racine h-y-y designe l'acte de redonner la vie a ce qui etait mort. L'alternative « saluer/pudeur » est ecartee car le contexte est la revivification de la terre.

**terre** (pos 25) — Le sens retenu est « terre ». Deuxieme occurrence de ard — la terre comme receptacle de la vie et de la mort.

**mort** — Le sens retenu est « mort ». Le mot mawt designe l'etat de ce qui a cesse de vivre — ici la terre seche et inerte. L'alternative « immobile » est ecartee car le contexte est la mort biologique de la terre.

**repand** — Le sens retenu est « disperser ». Le mot baththa designe l'acte de repandre dans toutes les directions. L'alternative « chagrin/confier sa peine » est ecartee car le contexte est la diffusion des creatures sur la terre.

**toute** — Le sens retenu est « tout ». Le mot kull designe la totalite sans exception.

**creature** — Le sens retenu est « bete qui marche sur terre ». Le mot dabba designe toute creature qui se deplace sur le sol.

**changement** — Le sens retenu est « detourner/changer ». Le mot tasrif designe le changement de direction des vents. L'alternative « depenser » est ecartee car le contexte est meteorologique.

**vents** — Le sens retenu est « vent ». Le mot ar-riyah de la racine r-w-h designe l'air en mouvement. L'alternative « esprit/ame » est ecartee car le contexte est la meteorologie, pas la spiritualite.

**nuages** — Le sens retenu est « compagnon/accompagner ». Le mot as-sahab designe les nuages — etymologiquement ce qui est tire, traine. Le Lane's lie ce mot a l'idee d'accompagnement — les nuages accompagnent les vents. L'alternative « ami » est ecartee car le mot designe ici le phenomene meteorologique.

**assujettis** — Le sens retenu est « asservir/soumettre a son service ». Le mot al-musakhkhar designe ce qui est mis au service — les nuages sont assujettis entre le ciel et la terre. L'alternative « se moquer/ridiculiser » est ecartee car le contexte est l'assujettissement cosmique.

**ciel** (pos 34) — Le sens retenu est « ciel ». Troisieme occurrence de samaw — ici le ciel comme limite superieure de l'espace ou evoluent les nuages.

**terre** (pos 35) — Le sens retenu est « terre ». Deuxieme occurrence ici de ard comme limite inferieure.

**signes** — Le sens retenu est « signe ». Le mot ayat designe les marques et preuves qui pointent vers le Createur.

**peuple** — Le sens retenu est « se lever/se dresser ». Le mot qawm designe un peuple — etymologiquement ceux qui se tiennent debout. L'alternative « peuple/communaute » au sens de simple groupe est ecartee au profit du sens etymologique de verticalite qui fonde le concept.

**raisonne** — Le sens retenu est « raison ». Le mot ya'qiluna designe l'usage de la raison. L'alternative « lier/entraver » est ecartee car le contexte est la reflexion intellectuelle.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere tres similaire. Hamidullah donne « des preuves pour des gens qui raisonnent ». Nous donnons « des signes pour un peuple qui raisonne ». La difference principale est le mot « signes » au lieu de « preuves » — ayat dans le Coran porte d'abord le sens de signe qui pointe vers quelque chose, pas de preuve au sens juridique. Le mot « peuple » au lieu de « gens » preserv l'etymologie de qawm (ceux qui se tiennent debout). Pour « sahab » (nuages), notre traduction suit le sens conventionnel — le lien etymologique avec « accompagner » (sahiba) eclaire le mot sans changer la traduction.`,
    segments: [
      { fr: "certes dans", phon: "inna fi", arabic: "\u0625\u0650\u0646\u0651\u064e \u0641\u0650\u064a", is_particle: true, position: 0 },
      { fr: "la creation", pos: "nom", phon: "khalqi", arabic: "\u062e\u064e\u0644\u0652\u0642\u0650", word_key: "xlq", is_particle: false, sense_retenu: "creer", position: 2 },
      { fr: "des cieux", pos: "nom", phon: "as-samawati", arabic: "\u0627\u0644\u0633\u0651\u064e\u0645\u064e\u0640\u0648\u064e\u0640\u062a\u0650", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 3 },
      { fr: "et de la terre", pos: "nom", phon: "wa-l-ardi", arabic: "\u0648\u064e\u0627\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 5 },
      { fr: "l'alternance", pos: "nom", phon: "ikhtilafi", arabic: "\u0627\u062e\u0652\u062a\u0650\u0644\u064e\u0640\u0641\u0650", word_key: "xlf", is_particle: false, sense_retenu: "alterner", position: 6 },
      { fr: "de la nuit", pos: "nom", phon: "al-layli", arabic: "\u0627\u0644\u0644\u0651\u064e\u064a\u0652\u0644\u0650", word_key: "lyl", is_particle: false, sense_retenu: "nuit", position: 8 },
      { fr: "et du jour", pos: "nom", phon: "wa-n-nahari", arabic: "\u0648\u064e\u0627\u0644\u0646\u0651\u064e\u0647\u064e\u0627\u0631\u0650", word_key: "nhr", is_particle: false, sense_retenu: "jour", position: 9 },
      { fr: "et les navires", pos: "nom", phon: "wa-l-fulki", arabic: "\u0648\u064e\u0627\u0644\u0652\u0641\u064f\u0644\u0652\u0643\u0650", word_key: "flk", is_particle: false, sense_retenu: "navire", position: 10 },
      { fr: "qui", phon: "allati", arabic: "\u0627\u0644\u0651\u064e\u062a\u0650\u064a", is_particle: true, position: 11 },
      { fr: "voguent", pos: "verbe", phon: "tajri", arabic: "\u062a\u064e\u062c\u0652\u0631\u0650\u064a", word_key: "jrw", is_particle: false, sense_retenu: "couler", position: 13 },
      { fr: "dans la mer", pos: "nom", phon: "fi-l-bahri", arabic: "\u0641\u0650\u064a \u0627\u0644\u0652\u0628\u064e\u062d\u0652\u0631\u0650", word_key: "bhr", is_particle: false, sense_retenu: "mer", position: 14 },
      { fr: "avec ce qui", phon: "bi-ma", arabic: "\u0628\u0650\u0645\u064e\u0627", is_particle: true, position: 15 },
      { fr: "profite", pos: "verbe", phon: "yanfa'u", arabic: "\u064a\u064e\u0646\u0641\u064e\u0639\u064f", word_key: "nfa", is_particle: false, sense_retenu: "etre utile", position: 17 },
      { fr: "aux gens", pos: "nom", phon: "an-nasa", arabic: "\u0627\u0644\u0646\u0651\u064e\u0627\u0633\u064e", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 18 },
      { fr: "et ce que", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 19 },
      { fr: "fait descendre", pos: "verbe", phon: "anzala", arabic: "\u0623\u064e\u0646\u0632\u064e\u0644\u064e", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 19 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0627\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 20 },
      { fr: "du ciel", pos: "nom", phon: "mina-s-sama'i", arabic: "\u0645\u0650\u0646\u064e \u0627\u0644\u0633\u0651\u064e\u0645\u064e\u0627\u0621\u0650", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 21 },
      { fr: "d'eau", phon: "min ma'in", arabic: "\u0645\u0650\u0646 \u0645\u0651\u064e\u0627\u0621\u064d", is_particle: true, position: 22 },
      { fr: "puis fait revivre", pos: "verbe", phon: "fa-ahya", arabic: "\u0641\u064e\u0623\u064e\u062d\u0652\u064a\u064e\u0627", word_key: "hyy", is_particle: false, sense_retenu: "donner la vie", position: 24 },
      { fr: "par elle la terre", pos: "nom", phon: "biha-l-arda", arabic: "\u0628\u0650\u0647\u064e\u0627 \u0627\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u064e", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 25 },
      { fr: "apres sa mort", pos: "nom", phon: "ba'da mawtiha", arabic: "\u0628\u064e\u0639\u0652\u062f\u064e \u0645\u064e\u0648\u0652\u062a\u0650\u0647\u064e\u0627", word_key: "mwt", is_particle: false, sense_retenu: "mort", position: 26 },
      { fr: "et y repand", pos: "verbe", phon: "wa-baththa", arabic: "\u0648\u064e\u0628\u064e\u062b\u0651\u064e", word_key: "bth", is_particle: false, sense_retenu: "disperser", position: 27 },
      { fr: "toute", pos: "nom", phon: "kulli", arabic: "\u0643\u064f\u0644\u0651\u0650", word_key: "kll", is_particle: false, sense_retenu: "tout", position: 28 },
      { fr: "creature", pos: "nom", phon: "dabbatin", arabic: "\u062f\u064e\u0627\u0628\u0651\u064e\u0629\u064d", word_key: "dbb", is_particle: false, sense_retenu: "creature", position: 29 },
      { fr: "et le changement", pos: "nom", phon: "wa-tasrifi", arabic: "\u0648\u064e\u062a\u064e\u0635\u0652\u0631\u0650\u064a\u0641\u0650", word_key: "srf", is_particle: false, sense_retenu: "changer", position: 30 },
      { fr: "des vents", pos: "nom", phon: "ar-riyahi", arabic: "\u0627\u0644\u0631\u0651\u0650\u064a\u064e\u0640\u062d\u0650", word_key: "rwh", is_particle: false, sense_retenu: "vent", position: 31 },
      { fr: "et les nuages", pos: "nom", phon: "wa-s-sahabi", arabic: "\u0648\u064e\u0627\u0644\u0633\u0651\u064e\u062d\u064e\u0627\u0628\u0650", word_key: "shb", is_particle: false, sense_retenu: "nuage", position: 32 },
      { fr: "assujettis", pos: "adjectif", phon: "al-musakhkhari", arabic: "\u0627\u0644\u0652\u0645\u064f\u0633\u064e\u062e\u0651\u064e\u0631\u0650", word_key: "sxr", is_particle: false, sense_retenu: "assujettir", position: 33 },
      { fr: "entre le ciel", pos: "nom", phon: "bayna-s-sama'i", arabic: "\u0628\u064e\u064a\u0652\u0646\u064e \u0627\u0644\u0633\u0651\u064e\u0645\u064e\u0627\u0621\u0650", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 34 },
      { fr: "et la terre", pos: "nom", phon: "wa-l-ardi", arabic: "\u0648\u064e\u0627\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 35 },
      { fr: "certes des signes", pos: "nom", phon: "la-ayatin", arabic: "\u0644\u064e\u0622\u064a\u064e\u0640\u062a\u064d", word_key: "ayn", is_particle: false, sense_retenu: "signe", position: 36 },
      { fr: "pour un peuple", pos: "nom", phon: "li-qawmin", arabic: "\u0644\u0650\u0642\u064e\u0648\u0652\u0645\u064d", word_key: "qwm", is_particle: false, sense_retenu: "peuple", position: 37 },
      { fr: "qui raisonne", pos: "verbe", phon: "ya'qiluna", arabic: "\u064a\u064e\u0639\u0652\u0642\u0650\u0644\u064f\u0648\u0646\u064e", word_key: "eql", is_particle: false, sense_retenu: "raisonner", position: 38 }
    ],
    words: [
      // xlq pos=2
      {
        word_key: "xlq", position: 2, sense_chosen: "creer",
        analysis_axes: {
          sense_chosen: "creer",
          concept_chosen: "Création/Production",
          concepts: {
            "Création/Production": {
              status: "retenu",
              senses: ["creer", "creation", "creature", "faconner", "nature", "caractere"],
              proof_ctx: "Le mot khalqi est un masdar (nom verbal) de la racine kh-l-q. Le Lane's donne : creer, faire exister, produire du neant, donner forme. La creation est l'acte fondateur par lequel Dieu fait exister ce qui n'existait pas. Le masdar (nom d'action) designe l'acte meme de creer — pas la creature mais le processus createur. Dans le verset, khalq est en idafa avec as-samawati wa-l-ard — la creation des cieux et de la terre. La distinction avec « mensonge » (nul) est evidente : le contexte est cosmologique.",
              axe1_verset: "Le mot khalqi ouvre l'enumeration des sept signes — la creation des cieux et de la terre est le premier et le plus fondamental. Le champ lexical du verset (creation, alternance, navires, eau, vie, creatures, vents, nuages, signes) construit une progression du cosmique au climatique. La creation est le cadre general dans lequel tous les autres signes s'inscrivent. Le verset commence par le plus grand (les cieux et la terre) et descend vers le plus petit (les creatures).",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu (votre Dieu est un Dieu unique). Le verset 164 fournit les preuves de cette unicite — la creation des cieux et de la terre est la premiere preuve. La logique est : Dieu est unique (v.163), et voici les signes qui le prouvent (v.164). Le verset 165 parlera de ceux qui prennent des associes malgre ces signes.",
              axe3_sourate: "La racine kh-l-q apparait dans la sourate al-Baqarah des le debut — en 2:21, « adorez votre Seigneur qui vous a crees ». En 2:29, « Il a cree pour vous tout ce qui est sur la terre ». La sourate construit un argument progressif : Dieu cree, donc Il merite l'adoration. Le verset 164 reprend cet argument en l'etoffant avec sept signes concrets.",
              axe4_coherence: "La racine kh-l-q apparait environ 260 fois dans le Coran. La creation des cieux et de la terre est un refrain coranique — en 3:190, 10:6, 45:3, le meme argument cosmologique est deploye. Le Coran invite a regarder la creation pour y voir le Createur. La creation n'est pas un accident — elle est un signe.",
              axe5_frequence: "Pour la mission du khalifa, la creation est le decor de la mission. Le khalifa est place dans un monde cree par Dieu — un monde structure, ordonne, rempli de signes. Reconnaitre la creation c'est reconnaitre le Createur et accepter la mission qu'Il a confiee. La creation est un appel permanent a la reflexion."
            },
            "Sens isolé/Lisse": {
              status: "nul",
              senses: ["lisse"],
              proof_ctx: "Le sens de lisse est un sens physique concret hors sujet — le contexte est la creation cosmique."
            },
            "Sens isolé/Mensonge": {
              status: "nul",
              senses: ["mensonge"],
              proof_ctx: "Le sens de mensonge est un usage specifique hors sujet — le verset parle de la creation, pas du mensonge."
            }
          }
        }
      },
      // smw pos=3 (cieux — 1re occurrence)
      {
        word_key: "smw", position: 3, sense_chosen: "ciel",
        analysis_axes: {
          sense_chosen: "ciel",
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["ciel", "toit", "nuage", "pluie", "herbage", "dos", "semelle superieure", "piece de tissu superieure", "celeste", "bounty"],
              proof_ctx: "Le mot as-samawati est un pluriel feminin de la racine s-m-w au genitif. Le Lane's donne : ciel, ce qui est au-dessus et couvre. Le pluriel designe les couches celestes — les sept cieux de la cosmologie coranique. Le ciel est ce qui enveloppe, qui couvre par-dessus. Dans le verset, les cieux sont l'objet de la creation divine avec la terre — la paire cieux-terre designe la totalite du cosmos. La distinction avec « nom » (nul) est claire : le mot est au pluriel avec l'article defini dans un contexte cosmique.",
              axe1_verset: "Le mot as-samawati est le premier element de l'enumeration — la creation des cieux. Le verset mentionne le ciel trois fois : ici comme objet de creation, en position 21 comme source de la pluie, et en position 34 comme limite superieure de l'espace des nuages. Cette triple presence montre que le ciel est omnipresent dans le systeme des signes — il est a la fois le cadre, la source et la limite.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Le verset 164 prouve cette unicite par la creation des cieux — la voute celeste est un signe de la puissance divine. Le ciel est la partie superieure du cosmos que Dieu a cree. Les versets voisins construisent un argument : un Dieu unique a cree un cosmos unifie.",
              axe3_sourate: "La racine s-m-w apparait frequemment dans la sourate al-Baqarah. En 2:22, « Celui qui a fait de la terre un lit et du ciel une construction ». En 2:29, « puis Il s'est tourne vers le ciel et en a fait sept cieux ». La sourate utilise le ciel comme preuve recurrente de la puissance creatrice de Dieu.",
              axe4_coherence: "Le mot sama' et ses derives apparaissent environ 310 fois dans le Coran. La paire cieux-terre (as-samawat wa-l-ard) est une des expressions les plus frequentes — elle designe la totalite du cosmos. En 2:164, cette paire ouvre l'enumeration pour montrer que tout le cosmos est un signe.",
              axe5_frequence: "Pour la mission du khalifa, le ciel est le rappel permanent de la transcendance. Le khalifa leve les yeux et voit le ciel — ce qui couvre et protege. Le ciel rappelle que la mission vient d'en haut, du Createur des cieux et de la terre. La creation celeste est l'horizon de la mission humaine."
            },
            "Hauteur/Élévation": {
              status: "nul",
              senses: ["etre haut", "se dresser", "monter", "lever le regard", "aspirer", "noble", "hautain", "rivaliser en eminence", "elever quelqu'un", "depasser en nombre", "etalon qui bondit", "forme vue de loin", "lune qui se dresse", "surpasser", "eminent"],
              proof_ctx: "Le sens de hauteur est le sens premier de s-m-w mais le mot as-samawati au pluriel dans un contexte cosmique designe specifiquement les cieux, pas l'abstraction de la hauteur."
            },
            "Nom/Identification": {
              status: "nul",
              senses: ["nom", "nommer", "prononcer le nom de Dieu", "se nommer", "s'appeler mutuellement", "demander le nom", "renommee", "nomme", "homonyme", "nominal", "qualite de nom", "revendiquer une parente"],
              proof_ctx: "Le sens de nom est un concept distinct lie a la racine s-m-w. Le contexte est cosmique — les cieux et la terre, pas les noms."
            }
          }
        }
      },
      // ard pos=4 (terre — 1re occurrence)
      {
        word_key: "ard", position: 4, sense_chosen: "terre",
        analysis_axes: {
          sense_chosen: "terre",
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays", "bas"],
              proof_ctx: "Le mot al-ardi est un nom feminin singulier defini au genitif de la racine a-r-d. Le Lane's donne : terre, sol, surface sur laquelle on vit et on marche. La terre est le support de toute activite humaine et le lieu ou se deployent les signes enumeres dans le verset. Dans la paire cieux-terre, la terre est la partie inferieure du cosmos. La distinction avec « rhume/tremblement » (nul) est evidente.",
              axe1_verset: "Le mot al-ardi complete la paire cieux-terre qui ouvre l'enumeration des signes. La terre apparait deux fois dans le verset : ici comme objet de creation, et en position 25 comme receptacle de la vie apres la mort. La terre est a la fois le cadre cosmique et le lieu de la revivification — elle est le theatre ou se jouent les signes divins.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Le verset 164 prouve cette unicite par la creation de la terre — la surface solide qui porte les creatures est un signe. Le verset 165 montrera que certains prennent des associes malgre ces signes manifestes.",
              axe3_sourate: "La racine a-r-d apparait environ 50 fois dans la sourate al-Baqarah. En 2:22, « Celui qui a fait de la terre un lit ». En 2:30, « Je vais placer un khalifa sur la terre ». La terre est le lieu de la mission du khalifa — la sourate revient constamment a cette realite.",
              axe4_coherence: "La racine a-r-d apparait environ 460 fois dans le Coran. La paire cieux-terre est omnipresente. En 2:164, la terre est a la fois l'objet de creation et le lieu ou se deploient les signes (creatures, vegetation, mort et revivification). Le Coran presente la terre comme un espace de signes a dechiffrer.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le lieu de la mission. Le khalifa a ete place sur la terre (2:30) pour y exercer sa responsabilite. La creation de la terre n'est pas gratuite — elle est le terrain d'exercice de la mission. Observer la terre et ses signes c'est comprendre le mandat divin."
            }
          }
        }
      },
      // xlf pos=6 (alternance)
      {
        word_key: "xlf", position: 6, sense_chosen: "alterner",
        analysis_axes: {
          sense_chosen: "alterner",
          concept_chosen: "Succession/Remplacement",
          concepts: {
            "Succession/Remplacement": {
              status: "retenu",
              senses: ["succeder", "remplacer", "successeur", "califat"],
              proof_ctx: "Le mot ikhtilafi est un masdar de la forme VIII de la racine kh-l-f. Le Lane's donne : succeder l'un a l'autre, alterner, venir chacun a son tour. La forme VIII (ifta'ala) indique la reciprocite — la nuit et le jour se succedent mutuellement. L'alternance est un phenomene cyclique permanent : chaque nuit succede a un jour et chaque jour succede a une nuit. La distinction avec « differer/contredire » (nul) est claire : le contexte est l'alternance reguliere, pas la contradiction.",
              axe1_verset: "Le mot ikhtilafi introduit le deuxieme signe — l'alternance de la nuit et du jour. Apres la creation (signe statique), le verset passe au mouvement (signe dynamique). L'alternance est un mecanisme de precision cosmique — elle montre un ordre qui ne faillit pas. Le champ lexical du verset progresse du cosmique (cieux-terre) au temporel (nuit-jour) puis au maritime (navires-mer).",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. L'alternance nuit-jour est un signe de cette unicite — un seul Dieu gouverne ce cycle avec precision. Le verset 165 montrera que certains prennent des associes — l'alternance prouve pourtant qu'un seul Maitre orchestre le temps.",
              axe3_sourate: "La racine kh-l-f est structurante dans la sourate al-Baqarah. En 2:30, Dieu annonce qu'Il va placer un khalifa sur la terre — le khalifa est le successeur. En 2:164, la racine apparait dans le sens d'alternance cyclique. La sourate utilise cette racine pour montrer que la succession est un principe divin — la nuit succede au jour comme le khalifa succede aux generations precedentes.",
              axe4_coherence: "La racine kh-l-f apparait environ 127 fois dans le Coran. L'expression « ikhtilaf al-layli wa-n-nahar » (alternance de la nuit et du jour) apparait en 2:164, 3:190, 10:6, 23:80, 45:5. C'est un refrain coranique qui marque la precision de l'ordre divin. L'alternance est un signe parce qu'elle est reguliere — elle ne faillit jamais.",
              axe5_frequence: "Pour la mission du khalifa, l'alternance est un rappel du temps qui passe et de la responsabilite qui l'accompagne. Le khalifa est un successeur (khalifa) — sa mission s'inscrit dans une chaine de succession. L'alternance nuit-jour mesure le temps de la mission. Chaque jour qui passe est une occasion de remplir le mandat ou de le trahir."
            },
            "Différence/Opposition": {
              status: "nul",
              senses: ["differer", "contredire", "manquer a sa promesse"],
              proof_ctx: "Le sens de difference est un sens atteste de kh-l-f mais le contexte est l'alternance cyclique nuit-jour, pas une contradiction ou un desaccord."
            },
            "Position/Arrière": {
              status: "nul",
              senses: ["etre derriere", "laisser derriere"],
              proof_ctx: "Le sens de position arriere est le sens spatial premier de kh-l-f. Le contexte est l'alternance temporelle, pas une position spatiale."
            }
          }
        }
      },
      // lyl pos=8
      {
        word_key: "lyl", position: 8, sense_chosen: "nuit",
        analysis_axes: {
          sense_chosen: "nuit",
          concept_chosen: "Nuit/Obscurité",
          concepts: {
            "Nuit/Obscurité": {
              status: "retenu",
              senses: ["nuit", "obscurite", "tenebres"],
              proof_ctx: "Le mot al-layli est un nom masculin singulier defini au genitif de la racine l-y-l. Le Lane's donne : nuit, periode d'obscurite entre le coucher et le lever du soleil. La nuit est le premier terme de l'alternance — elle est nommee avant le jour. La nuit est un phenomene cyclique permanent qui enveloppe et cache. La distinction avec d'autres sens est inexistante — la racine n'a qu'un seul champ semantique.",
              axe1_verset: "Le mot al-layli est le premier terme de l'alternance nuit-jour, le deuxieme signe. Le champ lexical du verset oppose nuit et jour comme paire complementaire — l'un ne va pas sans l'autre. La nuit est la periode de repos et d'obscurite qui precede la lumiere du jour. Dans l'enumeration, l'alternance nuit-jour suit la creation des cieux et de la terre — du statique au dynamique.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. La nuit est un signe de cette unicite — elle vient et s'en va avec une precision que seul un Maitre unique peut orchestrer. Le verset 165 montrera l'ingratitude de ceux qui ignorent ces signes.",
              axe3_sourate: "La racine l-y-l apparait dans la sourate al-Baqarah en 2:51 (les quarante nuits de Moussa), en 2:187 (la nuit du jeune). La nuit est un temps sacre dans la sourate — temps de l'epreuve et du culte. En 2:164, la nuit est un signe cosmique, pas seulement un temps rituel.",
              axe4_coherence: "La racine l-y-l apparait environ 92 fois dans le Coran. La nuit est souvent associee au jour dans des paires d'alternance — en 3:190, 10:6, 36:37. Le Coran utilise la nuit comme signe de la precision divine et comme temps de devotion (73:2, « leve-toi la nuit »).",
              axe5_frequence: "Pour la mission du khalifa, la nuit est le temps du recueillement et de la reflexion. Le khalifa observe l'alternance nuit-jour et y voit le signe d'un Createur qui ordonne le temps. La nuit rappelle que la mission a ses temps de repos et de meditation, pas seulement d'action."
            }
          }
        }
      },
      // nhr pos=9
      {
        word_key: "nhr", position: 9, sense_chosen: "jour",
        analysis_axes: {
          sense_chosen: "jour",
          concept_chosen: "Clarté/Jour",
          concepts: {
            "Clarté/Jour": {
              status: "retenu",
              senses: ["jour", "clarte"],
              proof_ctx: "Le mot an-nahari est un nom masculin singulier defini au genitif de la racine n-h-r. Le Lane's donne : jour, periode de lumiere entre le lever et le coucher du soleil. Le jour est le deuxieme terme de l'alternance avec la nuit. Le nahar est le temps de la lumiere, du travail et de l'activite. La distinction avec « riviere/fleuve » (retenu dans d'autres contextes) est claire : le contexte est l'alternance temporelle avec la nuit, pas l'hydrologie.",
              axe1_verset: "Le mot an-nahari complete la paire nuit-jour de l'alternance. Le jour est le complement de la nuit — ensemble ils forment un cycle complet. Le verset cite les deux termes pour montrer que le signe reside dans l'alternance elle-meme, pas dans la nuit ou le jour seuls. Le champ lexical progresse ensuite vers les navires.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Le jour est un signe parce qu'il revient avec regularite — cette constance temoigne d'un ordre divin. Le verset 165 montrera l'ingratitude de ceux qui prennent des associes malgre ces signes evidents.",
              axe3_sourate: "La racine n-h-r apparait dans la sourate al-Baqarah principalement au sens de « riviere/fleuve » (2:25, « des jardins sous lesquels coulent les rivieres »). En 2:164, le sens est celui du jour comme periode de lumiere — un usage distinct mais complementaire.",
              axe4_coherence: "La racine n-h-r au sens de jour apparait environ 57 fois dans le Coran. L'expression « ikhtilaf al-layli wa-n-nahar » est un refrain qui revient dans les passages cosmologiques. Le jour est le temps de la lumiere et de l'action — il alterne avec la nuit dans un cycle permanent.",
              axe5_frequence: "Pour la mission du khalifa, le jour est le temps de l'action. Le khalifa agit le jour et se recueille la nuit. L'alternance rappelle que la mission a un rythme — temps d'action et temps de reflexion. Le jour qui revient est une nouvelle occasion d'agir selon le mandat divin."
            },
            "Eau/Cours d'eau": {
              status: "nul",
              senses: ["riviere", "fleuve", "couler", "abondance"],
              proof_ctx: "Le sens de riviere est un sens atteste de n-h-r mais le contexte est l'alternance nuit-jour, pas l'hydrologie. Le mot est en paire avec al-layl (la nuit)."
            }
          }
        }
      },
      // flk pos=10
      {
        word_key: "flk", position: 10, sense_chosen: "navire",
        analysis_axes: {
          sense_chosen: "navire",
          concept_chosen: "Navigation/Vaisseau",
          concepts: {
            "Navigation/Vaisseau": {
              status: "retenu",
              senses: ["navire", "arche"],
              proof_ctx: "Le mot al-fulki est un nom singulier ou pluriel defini au genitif de la racine f-l-k. Le Lane's donne : navire, vaisseau, embarcation qui traverse la mer. Le fulk est un mot invariable (meme forme au singulier et au pluriel). Dans le verset, les navires voguent sur la mer avec ce qui profite aux gens — le commerce maritime est un signe de la generosite divine. La distinction avec « orbite/sphere celeste » (nul) est claire : le contexte est la navigation maritime.",
              axe1_verset: "Le mot al-fulki introduit le troisieme signe — les navires sur la mer. Le verset passe du cosmique (cieux-terre) et du temporel (nuit-jour) au maritime (navires-mer). Les navires sont un signe parce qu'ils permettent le commerce et le transport — Dieu a rendu la mer navigable et les navires possibles. Le complement « avec ce qui profite aux gens » montre la finalite utilitaire de ce signe.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Les navires sur la mer montrent que Dieu a soumis la mer aux hommes — un signe de Sa generosite et de Sa puissance. Le verset 165 montrera que certains prennent des egaux a Dieu malgre ces bienfaits.",
              axe3_sourate: "La racine f-l-k n'apparait qu'une seule fois dans la sourate al-Baqarah, ici en 2:164. Mais l'arche de Noe (un autre fulk) est un theme coranique important. Le navire est un signe de salut — Noe a ete sauve par le navire, et les hommes profitent du commerce maritime par la grace de Dieu.",
              axe4_coherence: "La racine f-l-k apparait environ 23 fois dans le Coran. En 14:32, « Il a soumis pour vous les navires afin qu'ils voguent sur la mer par Son ordre ». En 36:41-42, « un signe pour eux est que Nous avons porte leur descendance dans le navire charge ». Le navire est systematiquement presente comme un signe de la generosite et de la puissance divine.",
              axe5_frequence: "Pour la mission du khalifa, le navire est un outil de la mission. Le commerce maritime, les echanges entre les peuples, le voyage — tout cela sert la mission du khalifa qui doit gerer la terre. Le navire montre que Dieu a donne les moyens d'accomplir la mission — il ne reste qu'a les utiliser."
            },
            "Orbite/Rotation": {
              status: "nul",
              senses: ["orbite", "sphere celeste", "rotation"],
              proof_ctx: "Le sens d'orbite est un sens atteste de f-l-k mais le contexte est la navigation maritime — les navires qui voguent sur la mer. Le verbe tajri (couler/courir) confirme qu'il s'agit de navires."
            }
          }
        }
      },
      // jrw pos=13
      {
        word_key: "jrw", position: 13, sense_chosen: "couler",
        analysis_axes: {
          sense_chosen: "couler",
          concept_chosen: "Écoulement/Flux",
          concepts: {
            "Écoulement/Flux": {
              status: "retenu",
              senses: ["couler", "cours d'eau", "courir", "avoir cours (loi)"],
              proof_ctx: "Le verbe tajri est un inaccompli 3FS de la racine j-r-y. Le Lane's donne : couler, courir, avoir cours. L'inaccompli indique un mouvement continu et permanent — les navires courent sur la mer sans arret. Le verbe est au feminin singulier parce que le sujet al-fulk est traite grammaticalement comme feminin. Le sens de couler/courir s'applique aux navires comme aux cours d'eau — le navire « court » sur la mer. La distinction avec « tirer/traction » (nul) est claire : le verbe est intransitif ici.",
              axe1_verset: "Le verbe tajri qualifie le mouvement des navires sur la mer. L'inaccompli marque un mouvement continu — les navires ne cessent de voguer. Le champ lexical du verset (mer, profiter, gens) montre que ce mouvement a une finalite utilitaire — le commerce et le transport au profit des gens. Le verbe lie le navire a sa fonction : il court pour servir.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Les navires qui voguent sont un signe de la puissance divine qui a rendu la mer navigable. Le mouvement continu des navires montre un ordre maintenu par Dieu — la mer ne les engloutit pas, les vents les portent.",
              axe3_sourate: "La racine j-r-y apparait dans la sourate al-Baqarah principalement dans l'expression « des jardins sous lesquels coulent les rivieres » (2:25, 2:266). En 2:164, le verbe s'applique aux navires — le meme mouvement de flux qui anime les rivieres anime les navires sur la mer.",
              axe4_coherence: "La racine j-r-y apparait environ 63 fois dans le Coran. L'expression « al-fulk allati tajri fi-l-bahr » (les navires qui courent dans la mer) est presque identique en 2:164 et 22:65. Le Coran utilise le meme verbe pour les rivieres et les navires — tout ce qui coule est un signe du mouvement divin.",
              axe5_frequence: "Pour la mission du khalifa, le mouvement est un principe de la mission. Comme les navires courent sur la mer, le khalifa doit avancer dans sa mission sans s'arreter. Le flux continu est un modele — la mission ne s'arrete jamais, elle progresse comme les navires voguent."
            },
            "Traction": {
              status: "nul",
              senses: ["tirer"],
              proof_ctx: "Le sens de tirer est un usage transitif de j-r-y. Le verbe est intransitif ici — les navires courent, ils ne tirent rien."
            }
          }
        }
      },
      // bhr pos=14
      {
        word_key: "bhr", position: 14, sense_chosen: "mer",
        analysis_axes: {
          sense_chosen: "mer",
          concept_chosen: "Mer/Étendue",
          concepts: {
            "Mer/Étendue": {
              status: "retenu",
              senses: ["mer", "ocean", "fleuve", "vaste"],
              proof_ctx: "Le mot al-bahri est un nom masculin singulier defini au genitif de la racine b-h-r. Le Lane's donne : mer, grande etendue d'eau salee. La mer est le lieu ou naviguent les navires — elle est vaste, permanente et source de ressources. Le verset mentionne la mer comme lieu du commerce maritime au profit des gens. La mer est un signe parce qu'elle est a la fois utile et dangereuse — seul Dieu la rend navigable.",
              axe1_verset: "Le mot al-bahri est le lieu ou voguent les navires. La mer est le troisieme element du signe maritime (navires + courir + mer). Le champ lexical (profiter, gens) montre que la mer est un espace de bienfaits — le commerce, la peche, le transport. La mer est soumise a Dieu qui la rend navigable pour les hommes.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. La mer soumise est un signe de cette unicite — un seul Dieu rend la mer navigable et utile. Le verset 165 montrera l'ingratitude de ceux qui prennent des egaux malgre ces bienfaits.",
              axe3_sourate: "La racine b-h-r apparait dans la sourate al-Baqarah en 2:50 (la mer fendue pour les enfants d'Israel) et ici en 2:164. En 2:50, la mer est un instrument de salut et de chatiment. En 2:164, elle est un espace de bienfait et de commerce. La sourate montre les deux faces de la mer — salut et utilite.",
              axe4_coherence: "La racine b-h-r apparait environ 42 fois dans le Coran. En 14:32, 16:14, 22:65, la mer est mentionnee comme signe de la soumission de la nature a Dieu. Le Coran presente la mer comme un domaine que seul Dieu maitrise — les hommes y naviguent par Sa permission.",
              axe5_frequence: "Pour la mission du khalifa, la mer est un espace de la mission. Le khalifa doit gerer la terre et ses ressources, y compris les mers. La mer qui porte les navires montre que Dieu a donne les moyens de remplir la mission — l'espace terrestre et maritime est le terrain d'action."
            }
          }
        }
      },
      // nfa pos=17
      {
        word_key: "nfa", position: 17, sense_chosen: "etre utile",
        analysis_axes: {
          sense_chosen: "etre utile",
          concept_chosen: "Utilité/Profit",
          concepts: {
            "Utilité/Profit": {
              status: "retenu",
              senses: ["etre utile", "profiter", "avantage", "servir"],
              proof_ctx: "Le verbe yanfa'u est un inaccompli 3MS de la racine n-f-'. Le Lane's donne : etre utile, profiter, apporter un avantage. L'inaccompli indique que l'utilite est continue et permanente — ce qui est transporte profite aux gens de maniere constante. Le verbe est relatif a « ma » (ce qui) — ce qui profite aux gens. Le transport maritime est un bienfait divin qui sert les hommes.",
              axe1_verset: "Le verbe yanfa'u qualifie le contenu du transport maritime — ce qui profite aux gens. Le champ lexical (navires, mer, gens) montre que le signe reside dans la finalite utilitaire du commerce maritime. Dieu n'a pas cree la mer en vain — elle sert les hommes. L'utilite est la preuve de la sagesse divine : tout est cree avec un but.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. L'utilite du commerce maritime prouve cette unicite — un seul Dieu a organise un systeme ou la mer, les vents et les navires cooperent pour servir les gens. Le verset 165 montrera l'ingratitude face a ces bienfaits.",
              axe3_sourate: "La racine n-f-' apparait dans la sourate al-Baqarah en 2:102 (ce qui ne profite pas et nuit) et en 2:219 (peches et utilites). La sourate oppose l'utile au nuisible — en 2:164, l'utilite est un signe de la generosite divine.",
              axe4_coherence: "La racine n-f-' apparait environ 50 fois dans le Coran. En 10:18, « ce qui ne te profite ni ne te nuit ». Le Coran distingue ce qui profite de ce qui nuit — les signes de Dieu sont utiles a ceux qui raisonnent. L'utilite est un critere de verite dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, l'utilite est un critere de la mission. Le khalifa doit chercher ce qui profite aux gens — pas ce qui nuit. Le commerce, l'echange, le service sont des actes de mission. L'utilite relie la mission au bien commun."
            }
          }
        }
      },
      // nws pos=18
      {
        word_key: "nws", position: 18, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanité/Peuple",
          concepts: {
            "Humanité/Peuple": {
              status: "retenu",
              senses: ["gens", "etres humains", "peuple"],
              proof_ctx: "Le mot an-nasa est un nom masculin pluriel defini accusatif de la racine n-w-s. Le Lane's donne : gens, etres humains, peuple. An-nas designe l'ensemble des etres humains consideres collectivement. Dans le verset, les gens sont les beneficiaires du commerce maritime — ce qui profite aux gens. La distinction avec « voir de loin » (nul) est claire : le mot designe les personnes, pas un acte de perception.",
              axe1_verset: "Le mot an-nasa designe les beneficiaires du bienfait maritime. Le champ lexical (navires, mer, profiter) montre que les gens sont au centre du systeme des signes — les signes existent pour eux, pour ceux qui raisonnent. Les gens sont a la fois les beneficiaires et les destinataires de l'appel a la reflexion.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu pour tous. Le verset 164 montre que les bienfaits profitent aux gens — tous les gens. Le verset 165 montrera que parmi les gens, certains prennent des associes. La distinction est entre les gens qui raisonnent et ceux qui ne raisonnent pas.",
              axe3_sourate: "La racine n-w-s (an-nas) est une des racines les plus frequentes de la sourate al-Baqarah. En 2:8, « parmi les gens, il y a ceux qui disent ». En 2:13, « croyez comme ont cru les gens ». La sourate classe les gens en categories — croyants, hypocrites, ingrats. En 2:164, les gens sont les beneficiaires des bienfaits.",
              axe4_coherence: "Le mot an-nas apparait environ 241 fois dans le Coran. C'est le terme le plus courant pour designer l'humanite collectivement. La sourate an-Nas (114) est elle-meme nommee d'apres ce mot. En 2:164, les gens sont les destinataires de la generosite divine a travers le commerce maritime.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont l'objet de la mission. Le khalifa est place parmi les gens pour les servir et les guider. Ce qui profite aux gens est ce qui sert la mission. Le khalifa doit chercher l'utilite commune, pas l'interet particulier."
            },
            "Perception/Visibilité": {
              status: "nul",
              senses: ["voir de loin", "etre visible"],
              proof_ctx: "Le sens de perception est un sens premier lie a la racine n-w-s mais le mot an-nas au pluriel defini designe les gens, pas un acte de vision."
            }
          }
        }
      },
      // nzl pos=19
      {
        word_key: "nzl", position: 19, sense_chosen: "faire descendre",
        analysis_axes: {
          sense_chosen: "faire descendre",
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              senses: ["descendre", "faire descendre", "reveler", "envoyer d'en haut", "pluie qui descend"],
              proof_ctx: "Le verbe anzala est un accompli 3MS de la forme IV de la racine n-z-l. Le Lane's donne : faire descendre, envoyer d'en haut. La forme IV (af'ala) est causative — Dieu fait descendre l'eau du ciel. L'accompli marque que la descente est un fait accompli. Le complement « mina-s-sama'i min ma'in » (du ciel comme eau) precise la nature et la source de ce qui descend. La distinction avec « halte/sejour » (nul) est claire : le contexte est la descente de la pluie.",
              axe1_verset: "Le verbe anzala introduit le quatrieme signe — la pluie que Dieu fait descendre du ciel. Le champ lexical passe du maritime (navires-mer) au meteorologique (pluie-ciel). La descente de la pluie est un acte divin direct — le sujet est Allah. Cette descente produit des effets en chaine : l'eau fait revivre la terre, la terre produit des creatures. Le verset construit une chaine causale : Dieu → pluie → vie → creatures.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. La pluie que Dieu fait descendre prouve cette unicite — un seul Dieu envoie la pluie qui fait revivre la terre. Le verset 165 montrera l'ingratitude face a ce bienfait vital.",
              axe3_sourate: "La racine n-z-l est structurante dans la sourate al-Baqarah — elle designe principalement la revelation du Coran (2:4, 2:23, 2:41). En 2:164, le verbe s'applique a la pluie — Dieu fait descendre l'eau comme Il fait descendre la revelation. La sourate lie les deux descentes : la pluie physique et la revelation spirituelle.",
              axe4_coherence: "La racine n-z-l apparait environ 293 fois dans le Coran. Le schema « anzala mina-s-sama'i ma'an » (fait descendre du ciel une eau) apparait en 2:22, 2:164, 14:32, 16:10. C'est un refrain coranique qui lie la pluie a Dieu comme source. Le Coran presente la pluie comme un don divin, pas un phenomene naturel autonome.",
              axe5_frequence: "Pour la mission du khalifa, la descente de la pluie est un rappel que la vie depend de Dieu. Le khalifa ne produit pas la pluie — elle vient d'en haut. La mission est de gerer ce que Dieu donne, pas de produire l'impossible. La pluie rappelle la dependance du khalifa envers son Mandant."
            },
            "Halte/Séjour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "hote", "lieu de descente"],
              proof_ctx: "Le sens de halte est un sens atteste de n-z-l mais le contexte est la descente de la pluie, pas l'installation dans un lieu."
            }
          }
        }
      },
      // alh pos=20
      {
        word_key: "alh", position: 20, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif, sujet du verbe anzala. Le Lane's donne : Dieu, la divinite unique. Ici Allah est le sujet actif — c'est Lui qui fait descendre l'eau du ciel et qui fait revivre la terre. Le nom apparait une seule fois dans le verset mais Dieu est le sujet implicite de tous les signes enumeres. La distinction avec les sens nul (detresse, domination, adoration, refuge) est evidente : le mot est le nom propre de la divinite dans un contexte d'action creatrice.",
              axe1_verset: "Le nom Allahu est le sujet des verbes anzala (faire descendre) et ahya (faire revivre). Dieu est l'agent actif derriere les signes — Il fait descendre la pluie et redonne la vie a la terre. Le verset montre que les signes ne sont pas autonomes — ils pointent vers un Agent unique. Le champ lexical des signes (creation, alternance, navires, pluie, vie, creatures, vents, nuages) montre que Dieu est l'Auteur de tout.",
              axe2_voisins: "Le verset 163 declarait « votre Dieu est un Dieu unique ». Le verset 164 montre ce que ce Dieu unique fait — Il cree, Il alterne, Il fait naviguer, Il fait pleuvoir, Il redonne la vie. Le lien est direct : le Dieu unique est le Dieu actif dans la creation.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. En 2:164, Allah apparait comme l'Agent cosmique — Celui qui fait descendre et qui fait revivre. La sourate construit un portrait de Dieu par Ses actes, pas par des descriptions abstraites.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:164, Dieu est l'Agent de la pluie et de la revivification — deux actes qui montrent Sa puissance sur la vie et la mort. Le Coran lie systematiquement les phenomenes naturels a l'action divine.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le Mandant de la mission. C'est Lui qui fait descendre la pluie, qui redonne la vie — le khalifa n'est que le gerant. Reconnaitre Dieu comme Agent de tous les signes c'est accepter la source de la mission."
            }
          }
        }
      },
      // smw pos=21 (ciel — 2e occurrence, source de la pluie)
      {
        word_key: "smw", position: 21, sense_chosen: "ciel",
        analysis_axes: {
          sense_chosen: "ciel",
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["ciel", "toit", "nuage", "pluie", "herbage", "dos", "semelle superieure", "piece de tissu superieure", "celeste", "bounty"],
              proof_ctx: "Deuxieme occurrence de la racine s-m-w dans le verset — ici as-sama'i au genitif singulier dans l'expression « mina-s-sama'i » (du ciel). Le ciel est la source de la pluie — ce qui est au-dessus envoie l'eau vers le bas. Le Lane's confirme que le ciel comme source de pluie est un sens atteste. Memes analyses que pour la premiere occurrence, avec un role different : ici le ciel est la source, pas l'objet de la creation.",
              axe1_verset: "Le mot as-sama'i designe ici le ciel comme source de la pluie. La premiere occurrence (pos 3) designait les cieux comme objet de creation, celle-ci designe le ciel comme reservoire d'eau. Le verset montre le ciel sous deux aspects : oeuvre creee et source de bienfaits. La troisieme occurrence (pos 34) designera le ciel comme limite superieure de l'espace des nuages.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. La pluie qui vient du ciel est un signe de cette unicite — le ciel n'envoie pas la pluie de lui-meme, c'est Dieu qui la fait descendre. Le ciel est un instrument, pas un agent.",
              axe3_sourate: "En 2:22, « et fait descendre du ciel une eau par laquelle Il fait sortir des fruits pour votre subsistance ». Le verset 164 reprend exactement ce schema — la descente de la pluie du ciel est un refrain de la sourate. Le ciel est le reservoire divin.",
              axe4_coherence: "L'expression « mina-s-sama'i ma'an » (du ciel une eau) est un schema coranique recurrent. Le ciel n'est pas seulement la voute visible — il est la source de la pluie et des bienfaits. Le Coran lie systematiquement le ciel a la subsistance terrestre.",
              axe5_frequence: "Pour la mission du khalifa, le ciel comme source de pluie rappelle que les ressources viennent d'en haut. Le khalifa ne produit pas les ressources — il les gere. La pluie du ciel est un don du Mandant que le khalifa doit distribuer avec sagesse."
            }
          }
        }
      },
      // hyy pos=24
      {
        word_key: "hyy", position: 24, sense_chosen: "donner la vie",
        analysis_axes: {
          sense_chosen: "donner la vie",
          concept_chosen: "Vie/Vivant",
          concepts: {
            "Vie/Vivant": {
              status: "retenu",
              senses: ["vivre", "vie", "vivant", "donner la vie"],
              proof_ctx: "Le verbe ahya est un accompli 3MS de la forme IV de la racine h-y-y. Le Lane's donne : donner la vie, faire revivre, vivifier. La forme IV (af'ala) est causative — Dieu fait revivre la terre. L'accompli marque que la revivification est un fait acheve — chaque fois qu'il pleut, la terre morte revit. Le sujet implicite est Dieu mentionne juste avant. La distinction avec « saluer/pudeur » (nul) est claire : le contexte est la revivification de la terre.",
              axe1_verset: "Le verbe ahya est le resultat de la descente de la pluie — Dieu fait descendre l'eau, puis par elle Il fait revivre la terre. Le champ lexical (faire descendre, eau, terre, mort, repandre, creatures) construit la chaine causale complete : pluie → vie → creatures. La revivification de la terre est un miracle quotidien — la terre seche reverdit apres la pluie.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. La capacite de redonner la vie a ce qui est mort est une preuve de la puissance divine unique. Le verset 165 montrera l'ingratitude de ceux qui, malgre ce pouvoir de donner la vie, prennent des associes.",
              axe3_sourate: "La racine h-y-y apparait dans la sourate al-Baqarah en 2:28 (« vous etiez morts, Il vous a donne la vie ») et en 2:73 (la vache qui ressuscite le mort). La sourate lie la vie a Dieu comme source unique. En 2:164, la revivification de la terre est un signe de cette meme puissance.",
              axe4_coherence: "La racine h-y-y apparait environ 184 fois dans le Coran. Le schema « ahya-l-arda ba'da mawtiha » (fait revivre la terre apres sa mort) apparait en 2:164, 30:19, 30:50, 35:9, 57:17. C'est un refrain coranique qui sert d'argument pour la resurrection — si Dieu peut redonner la vie a la terre, Il peut ressusciter les morts.",
              axe5_frequence: "Pour la mission du khalifa, la revivification est un modele de la mission. Comme Dieu redonne la vie a la terre, le khalifa doit redonner la vie aux communautes, aux idees, aux projets. La mission n'est pas statique — elle est un acte de revivification permanent."
            },
            "Salutation/Pudeur": {
              status: "nul",
              senses: ["saluer", "pudeur"],
              proof_ctx: "Le sens de salutation est un sens atteste de h-y-y mais le contexte est la revivification de la terre, pas une salutation ou un acte de pudeur."
            }
          }
        }
      },
      // ard pos=25 (terre — 2e occurrence)
      {
        word_key: "ard", position: 25, sense_chosen: "terre",
        analysis_axes: {
          sense_chosen: "terre",
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays", "bas"],
              proof_ctx: "Deuxieme occurrence de la racine a-r-d dans le verset — ici al-arda a l'accusatif comme complement d'objet du verbe ahya. La terre est celle que Dieu fait revivre apres sa mort. Le Lane's donne : terre, sol, surface sur laquelle on vit. La terre ici est le receptacle de la vie — elle meurt (secheresse) et revit (pluie). Memes analyses que pour la premiere occurrence avec un role different : ici la terre est l'objet de la revivification.",
              axe1_verset: "Le mot al-arda est l'objet du verbe ahya — la terre que Dieu fait revivre. La premiere occurrence (pos 4) designait la terre comme objet de creation, celle-ci designe la terre comme receptacle de la mort et de la vie. Le verset montre la terre sous deux aspects : oeuvre creee et lieu de cycles de vie et de mort.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. La terre qui meurt et revit est un signe de cette unicite — seul Dieu a le pouvoir de redonner la vie a ce qui est mort.",
              axe3_sourate: "En 2:22, « et fait sortir par elle des fruits pour votre subsistance ». En 2:164, la terre est revivifiee par la pluie. La sourate utilise la terre comme temoin de la puissance divine — elle meurt et revit a chaque cycle de pluie.",
              axe4_coherence: "L'expression « ahya-l-arda ba'da mawtiha » est un refrain coranique. La terre qui revit apres sa mort est un argument pour la resurrection des corps — si la terre seche peut reverdir, les morts peuvent revivre.",
              axe5_frequence: "Pour la mission du khalifa, la terre qui revit apres sa mort montre que la mission n'est jamais perdue. Meme quand tout semble mort et sec, la pluie divine peut tout revivifier. Le khalifa ne doit pas desesperer — la revivification est toujours possible."
            }
          }
        }
      },
      // mwt pos=26
      {
        word_key: "mwt", position: 26, sense_chosen: "mort",
        analysis_axes: {
          sense_chosen: "mort",
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mourir", "mort", "tuer", "mortel", "terre morte"],
              proof_ctx: "Le mot mawtiha est un masdar de la racine m-w-t avec pronom suffixe 3FS (sa mort). Le Lane's donne : mourir, mort, cessation de la vie. La mort de la terre est une metaphore concrete — la terre seche, sans vegetation, sans eau, est « morte ». Le pronom suffixe « ha » renvoie a la terre (al-ard). Le sens de « terre morte » est un sens atteste dans le Lane's. La distinction avec « immobile » (nul) est claire : le contexte est la mort biologique metaphorique de la terre.",
              axe1_verset: "Le mot mawtiha qualifie l'etat de la terre avant la pluie — apres sa mort. Le verset construit un contraste : la terre est morte (seche, inerte), puis Dieu la fait revivre par la pluie. Ce contraste vie-mort est le coeur du quatrieme signe. Le champ lexical (faire revivre, mort, repandre, creatures) montre le cycle complet : mort → pluie → vie → creatures.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. La mort de la terre suivie de sa revivification prouve cette unicite — seul Dieu a le pouvoir sur la vie et la mort. Le verset 165 montrera l'ingratitude de ceux qui prennent des associes malgre ce pouvoir.",
              axe3_sourate: "La racine m-w-t est structurante dans la sourate al-Baqarah. En 2:28, « vous etiez morts, Il vous a donne la vie, puis Il vous fera mourir, puis Il vous redonnera la vie ». En 2:56, « Nous vous avons ressuscites apres votre mort ». La sourate lie la mort a la resurrection et la revivification.",
              axe4_coherence: "La racine m-w-t apparait environ 165 fois dans le Coran. Le schema « la terre apres sa mort » est un argument recurrent pour la resurrection. En 30:19, « Il fait sortir le vivant du mort ». Le Coran utilise la mort de la terre comme analogie de la mort humaine — si la terre revit, les hommes revivront.",
              axe5_frequence: "Pour la mission du khalifa, la mort n'est pas la fin. La terre morte revit — le khalifa doit voir dans la mort un passage, pas une conclusion. La mission peut traverser des periodes de « mort » (echec, secheresse) mais la pluie divine peut toujours la revivifier."
            },
            "Sens isolé/Immobile": {
              status: "nul",
              senses: ["immobile"],
              proof_ctx: "Le sens d'immobilite est un usage specifique de m-w-t mais le contexte est la mort metaphorique de la terre, pas l'immobilite."
            }
          }
        }
      },
      // bth pos=27
      {
        word_key: "bth", position: 27, sense_chosen: "disperser",
        analysis_axes: {
          sense_chosen: "disperser",
          concept_chosen: "Dispersion/Diffusion",
          concepts: {
            "Dispersion/Diffusion": {
              status: "retenu",
              senses: ["disperser", "repandre", "disseminer", "divulguer"],
              proof_ctx: "Le verbe baththa est un accompli 3MS de la racine b-th-th. Le Lane's donne : disperser, repandre dans toutes les directions, disseminer. L'accompli marque que la dispersion est un fait accompli — Dieu a repandu les creatures sur la terre. Le complement « kulli dabbatin » (toute creature) montre la totalite de la dispersion — toutes les especes sont repandues. La distinction avec « chagrin/confier sa peine » (nul) est claire : le contexte est la dispersion des creatures.",
              axe1_verset: "Le verbe baththa continue la chaine causale : Dieu fait descendre la pluie → la terre revit → Il y repand toute creature. La dispersion est multidirectionnelle — les creatures se repandent dans toutes les directions sur la terre revivifiee. Le champ lexical (toute, creature) montre l'exhaustivite de la dispersion — aucune espece n'est exclue.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. La dispersion de toutes les creatures prouve cette unicite — un seul Dieu a repandu la diversite sur la terre. La multiplicite des creatures pointe vers l'unicite du Createur.",
              axe3_sourate: "La racine b-th-th n'apparait qu'ici dans la sourate al-Baqarah. Le verbe est rare et specifique — il designe la dissemination totale des creatures sur la terre. La sourate utilise ce verbe pour montrer l'ampleur de l'acte divin.",
              axe4_coherence: "La racine b-th-th apparait environ 9 fois dans le Coran. En 42:29, « parmi Ses signes : la creation des cieux et de la terre et ce qu'Il y a repandu comme creatures ». Le Coran lie la dispersion des creatures a la creation — les creatures sont un signe de la puissance divine.",
              axe5_frequence: "Pour la mission du khalifa, la dispersion des creatures est le materiau de la mission. Le khalifa est charge de gerer toute creature — pas seulement les humains. La diversite des especes est un tresor confie au khalifa par le Createur."
            },
            "Affliction intérieure": {
              status: "nul",
              senses: ["chagrin", "confier sa peine"],
              proof_ctx: "Le sens de chagrin est un sens atteste de b-th-th mais le contexte est la dispersion des creatures, pas un etat emotionnel."
            }
          }
        }
      },
      // kll pos=28
      {
        word_key: "kll", position: 28, sense_chosen: "tout",
        analysis_axes: {
          sense_chosen: "tout",
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              senses: ["tout", "chaque", "totalite"],
              proof_ctx: "Le mot kulli est un nom masculin singulier au genitif de la racine k-l-l. Le Lane's donne : tout, chaque, totalite sans exception. Le mot kull en idafa avec dabbatin (creature) signifie « toute creature » — chaque espece sans exception. Le quantificateur universel montre que la dispersion est exhaustive. La distinction avec « emoussement/fatigue » (nul) est claire : le mot est un quantificateur, pas un etat de faiblesse.",
              axe1_verset: "Le mot kulli qualifie la totalite des creatures repandues — toute creature sans exception. Le champ lexical (repandre, creature) montre que la diversite des especes est un signe en soi. Le verset ne dit pas « quelques creatures » mais « toute creature » — l'exhaustivite est le signe de la puissance infinie du Createur.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. La totalite des creatures prouve cette unicite — un seul Dieu a cree toutes les especes. La multiplicite des creatures ne contredit pas l'unicite — elle la confirme.",
              axe3_sourate: "La racine k-l-l au sens de totalite apparait dans la sourate al-Baqarah en 2:29 (« Il a cree pour vous tout ce qui est sur la terre ») et en 2:31 (« Il enseigna a Adam tous les noms »). La sourate utilise kull pour montrer l'exhaustivite des actes divins.",
              axe4_coherence: "Le mot kull apparait environ 380 fois dans le Coran. L'expression « min kulli dabbatin » (de toute creature) apparait en 2:164, 24:45, 31:10. Le Coran utilise ce quantificateur pour montrer que la creation est sans exception — toute creature vient de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la totalite des creatures est l'etendue de la responsabilite. Le khalifa n'est pas responsable de quelques especes — il est responsable de toute creature. La totalite est un rappel de l'ampleur du mandat divin."
            },
            "Émoussement/Faiblesse": {
              status: "nul",
              senses: ["s'emousser", "etre fatigue"],
              proof_ctx: "Le sens d'emoussement est un sens atteste de k-l-l mais le mot kulli ici est le quantificateur universel, pas un etat de faiblesse."
            }
          }
        }
      },
      // dbb pos=29
      {
        word_key: "dbb", position: 29, sense_chosen: "creature",
        analysis_axes: {
          sense_chosen: "creature",
          concept_chosen: "Reptation/Mouvement lent",
          concepts: {
            "Reptation/Mouvement lent": {
              status: "retenu",
              senses: ["ramper", "fourmiller", "bete qui marche sur terre (dabba)", "se deplacer lentement"],
              proof_ctx: "Le mot dabbatin est un nom feminin singulier indefini au genitif de la racine d-b-b. Le Lane's donne : ramper, se deplacer au ras du sol, bete qui se deplace sur la terre. Le dabba est toute creature qui marche sur la terre — du plus petit insecte au plus grand animal. L'etymologie lie le mot au mouvement lent et au contact avec le sol. Le mot est indefini (dabbatin sans article) et precede de kull (toute) — toute creature qui se deplace sur la terre.",
              axe1_verset: "Le mot dabbatin designe toute creature terrestre — le complement de la dispersion (baththa). Dieu a repandu sur la terre toute creature — des insectes aux mammiferes. Le champ lexical (repandre, toute, creature) montre que la diversite des especes est un signe de la puissance creatrice. La creature est le resultat final de la chaine : pluie → terre revit → creatures.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. La diversite des creatures prouve cette unicite — un seul Createur a produit une infinite d'especes. Le verset 165 montrera l'ingratitude de ceux qui prennent des egaux malgre cette diversite.",
              axe3_sourate: "La racine d-b-b n'apparait qu'ici dans la sourate al-Baqarah. Le mot dabba est specifique — il designe toute creature terrestre. La sourate utilise ce mot pour montrer que la creation ne se limite pas aux humains — toute creature est un signe.",
              axe4_coherence: "La racine d-b-b apparait environ 18 fois dans le Coran. En 11:6, « Il n'est pas de dabba sur la terre dont la subsistance n'incombe a Dieu ». En 8:22, « les pires des dabbas aupres de Dieu sont les sourds et les muets qui ne raisonnent pas ». Le Coran utilise dabba pour designer toute creature vivante sur terre.",
              axe5_frequence: "Pour la mission du khalifa, les creatures sont l'objet de la gestion. Le khalifa est responsable de toute dabba — chaque creature terrestre est confiee a sa gestion. La diversite des especes est un tresor a preserver et a comprendre."
            }
          }
        }
      },
      // srf pos=30
      {
        word_key: "srf", position: 30, sense_chosen: "changer",
        analysis_axes: {
          sense_chosen: "changer",
          concept_chosen: "Détournement/Changement",
          concepts: {
            "Détournement/Changement": {
              status: "retenu",
              senses: ["detourner", "changer", "eloigner"],
              proof_ctx: "Le mot tasrifi est un masdar de la forme II de la racine s-r-f. Le Lane's donne : faire changer de direction, detourner, varier. La forme II intensifie l'action — le changement est actif et delibere. Le masdar designe l'acte de changer la direction des vents. Les vents changent de direction — c'est un phenomene meteorologique qui montre l'ordre divin. La distinction avec « depenser » (nul) est claire : le contexte est meteorologique.",
              axe1_verset: "Le mot tasrifi introduit le sixieme signe — le changement des vents. Apres les creatures terrestres, le verset passe au phenomene atmospherique. Les vents changent de direction, de force, de nature — ce changement est un signe de la puissance divine qui gouverne l'atmosphere. Le champ lexical (vents, nuages, assujettis) montre que l'atmosphere est un domaine soumis a Dieu.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Le changement des vents prouve cette unicite — un seul Dieu dirige les vents dans toutes les directions. Le verset 165 montrera l'ingratitude face a ces signes atmospheriques.",
              axe3_sourate: "La racine s-r-f apparait dans la sourate al-Baqarah ici seulement en 2:164. Le masdar tasrif est specifique au contexte meteorologique — le changement des vents est un signe unique dans la sourate.",
              axe4_coherence: "La racine s-r-f apparait environ 30 fois dans le Coran. L'expression « tasrif ar-riyah » (changement des vents) apparait en 2:164 et 45:5. Le Coran lie le changement des vents a la puissance divine — les vents sont des agents de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le changement est un principe de la mission. Comme les vents changent de direction, la mission peut prendre des directions inattendues. Le khalifa doit s'adapter au changement dirige par Dieu — pas le resister."
            },
            "Dépense/Usage": {
              status: "nul",
              senses: ["depenser"],
              proof_ctx: "Le sens de depense est un sens atteste de s-r-f mais le contexte est le changement des vents, pas une transaction financiere."
            }
          }
        }
      },
      // rwh pos=31
      {
        word_key: "rwh", position: 31, sense_chosen: "vent",
        analysis_axes: {
          sense_chosen: "vent",
          concept_chosen: "Souffle/Mouvement",
          concepts: {
            "Souffle/Mouvement": {
              status: "retenu",
              senses: ["vent"],
              proof_ctx: "Le mot ar-riyahi est un pluriel feminin defini au genitif de la racine r-w-h. Le Lane's donne : vent, souffle, air en mouvement. Les vents (riyah) au pluriel designent les differents types de vents — chauds, froids, doux, violents. Les vents sont les agents du changement climatique — ils portent la pluie, ils dissipent les nuages, ils fecondent les plantes. La distinction avec « esprit/ame » (retenu dans d'autres contextes) est claire : le contexte est meteorologique.",
              axe1_verset: "Le mot ar-riyahi est l'objet du changement (tasrif) — les vents dont la direction change. Le champ lexical (changement, vents, nuages) montre que l'atmosphere est un systeme ordonne par Dieu. Les vents sont les agents qui portent les nuages et apportent la pluie. Le sixieme signe est le changement des vents — leur variabilite est un signe de la sagesse divine.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Les vents diriges prouvent cette unicite — un seul Dieu envoie les vents dans toutes les directions. Le verset 165 montrera l'ingratitude face a ces signes.",
              axe3_sourate: "La racine r-w-h apparait dans la sourate al-Baqarah en 2:87 (« Nous l'avons soutenu par l'Esprit Saint ») au sens d'esprit. En 2:164, le sens est celui du vent — le souffle physique. La sourate utilise la meme racine pour deux realites : le souffle divin (esprit) et le souffle naturel (vent).",
              axe4_coherence: "La racine r-w-h au sens de vent apparait environ 29 fois dans le Coran. En 15:22, « Nous envoyons les vents fecondants ». En 25:48, « Il envoie les vents comme annonciateurs ». Le Coran presente les vents comme des messagers et des agents de la misericorde divine.",
              axe5_frequence: "Pour la mission du khalifa, les vents sont les agents du changement. Le khalifa doit lire les vents — comprendre les changements qui arrivent et s'y adapter. Les vents portent la pluie qui fait revivre — ils sont des instruments de la mission."
            },
            "Esprit/Souffle vital": {
              status: "nul",
              senses: ["esprit", "ame"],
              proof_ctx: "Le sens d'esprit est un sens atteste de r-w-h mais le mot ar-riyah au pluriel dans un contexte meteorologique designe les vents, pas l'esprit."
            },
            "Apaisement": {
              status: "nul",
              senses: ["repos"],
              proof_ctx: "Le sens de repos est un usage specifique de r-w-h hors sujet — le contexte est le changement des vents."
            }
          }
        }
      },
      // shb pos=32
      {
        word_key: "shb", position: 32, sense_chosen: "nuage",
        analysis_axes: {
          sense_chosen: "nuage",
          concept_chosen: "Compagnonnage/Association",
          concepts: {
            "Compagnonnage/Association": {
              status: "retenu",
              senses: ["accompagner", "compagnon", "associe", "ami"],
              proof_ctx: "Le mot as-sahabi est un nom collectif defini au genitif de la racine s-h-b. Le Lane's donne : accompagner, compagnon, celui qui marche avec. Le sahab (nuage) est etymologiquement « ce qui est tire, traine, accompagne » — les nuages accompagnent les vents, ils sont entraines par eux. Le lien entre « compagnon » et « nuage » reside dans l'idee d'accompagnement et de traction. Le nuage est le compagnon du vent. Le contexte est meteorologique — les nuages assujettis entre le ciel et la terre.",
              axe1_verset: "Le mot as-sahabi designe les nuages — le septieme signe avec leur assujettissement. Le champ lexical (vents, nuages, assujettis, ciel, terre) montre que les nuages sont un element du systeme atmospherique ordonne par Dieu. Les nuages accompagnent les vents et portent la pluie — ils sont le lien entre le ciel et la terre. Le verset se conclut par les nuages assujettis avant d'enoncer la conclusion (des signes pour un peuple qui raisonne).",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Les nuages assujettis prouvent cette unicite — les nuages ne se deplacent pas seuls, ils sont diriges par un Maitre unique. Le verset 165 montrera l'ingratitude de ceux qui prennent des associes.",
              axe3_sourate: "La racine s-h-b n'apparait qu'ici dans la sourate al-Baqarah au sens de nuage. La sourate utilise le mot pour montrer que les phenomenes meteorologiques sont des signes divins, pas des phenomenes autonomes.",
              axe4_coherence: "La racine s-h-b au sens de nuage apparait environ 9 fois dans le Coran. En 7:57, « Il envoie les vents comme annonciateurs, et quand ils portent un nuage lourd ». En 24:43, « puis il les rassemble puis les met en amas, et tu vois la pluie sortir de leurs interstices ». Le Coran decrit le cycle de la pluie avec precision.",
              axe5_frequence: "Pour la mission du khalifa, les nuages sont les porteurs de la pluie — les instruments du bienfait divin. Le khalifa doit reconnaitre que les bienfaits viennent du ciel, portes par des agents que Dieu a assujettis. Les nuages rappellent que le systeme divin fonctionne — le khalifa doit s'inserer dans ce systeme."
            }
          }
        }
      },
      // sxr pos=33
      {
        word_key: "sxr", position: 33, sense_chosen: "assujettir",
        analysis_axes: {
          sense_chosen: "assujettir",
          concept_chosen: "Assujettissement/Soumission",
          concepts: {
            "Assujettissement/Soumission": {
              status: "retenu",
              senses: ["asservir", "soumettre a son service"],
              proof_ctx: "Le mot al-musakhkhari est un participe passif de la forme II de la racine s-kh-r. Le Lane's donne : asservir, soumettre a son service, mettre a disposition. La forme II intensifie l'action — l'assujettissement est complet et delibere. Le participe passif indique que les nuages sont l'objet de l'assujettissement — ils sont soumis, pas soumetteurs. L'agent implicite est Dieu. La distinction avec « se moquer/ridiculiser » (nul) est claire : le contexte est l'assujettissement cosmique.",
              axe1_verset: "Le mot al-musakhkhari qualifie les nuages — ils sont assujettis entre le ciel et la terre. L'assujettissement est le dernier element de l'enumeration des signes. Il montre que rien dans la creation n'est autonome — tout est soumis a Dieu. Le champ lexical (nuages, assujettis, ciel, terre) montre que l'atmosphere elle-meme obeit a un ordre divin. Les nuages flottent entre ciel et terre non pas par hasard mais par assujettissement.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. L'assujettissement des nuages prouve cette unicite — les nuages obeissent a un Maitre unique. Le verset 165 montrera que certains prennent des egaux — mais les nuages n'ont qu'un seul Maitre.",
              axe3_sourate: "La racine s-kh-r n'apparait qu'ici dans la sourate al-Baqarah. Le participe musakhkhar est specifique — il designe ce qui est mis au service. La sourate utilise ce mot pour montrer que la creation est un service ordonne par Dieu.",
              axe4_coherence: "La racine s-kh-r apparait environ 15 fois dans le Coran. En 14:32-33, « Il a assujetti pour vous les navires, les rivieres, le soleil et la lune ». En 45:13, « Il a assujetti pour vous ce qui est dans les cieux et sur la terre ». Le Coran presente l'assujettissement comme un bienfait divin — tout est mis au service de l'homme.",
              axe5_frequence: "Pour la mission du khalifa, l'assujettissement est le cadre de la mission. Dieu a assujetti la creation au service de l'homme — le khalifa doit utiliser ces ressources assujetties avec sagesse et gratitude. L'assujettissement n'est pas une licence d'exploitation — c'est un pret de confiance."
            },
            "Moquerie/Dérision": {
              status: "nul",
              senses: ["se moquer", "ridiculiser", "tourner en derision"],
              proof_ctx: "Le sens de moquerie est un sens atteste de s-kh-r mais le contexte est l'assujettissement cosmique des nuages, pas un acte de derision."
            }
          }
        }
      },
      // smw pos=34 (ciel — 3e occurrence)
      {
        word_key: "smw", position: 34, sense_chosen: "ciel",
        analysis_axes: {
          sense_chosen: "ciel",
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["ciel", "toit", "nuage", "pluie", "herbage", "dos", "semelle superieure", "piece de tissu superieure", "celeste", "bounty"],
              proof_ctx: "Troisieme occurrence de la racine s-m-w dans le verset — ici as-sama'i au genitif singulier dans l'expression « bayna-s-sama'i wa-l-ard » (entre le ciel et la terre). Le ciel est la limite superieure de l'espace ou les nuages evoluent. Le Lane's confirme que le ciel comme voute englobante est le sens premier. Memes analyses que pour les occurrences precedentes avec un role different : ici le ciel est une borne spatiale.",
              axe1_verset: "Le mot as-sama'i delimite l'espace des nuages — entre le ciel et la terre. La premiere occurrence (pos 3) designait les cieux comme objet de creation, la deuxieme (pos 21) comme source de la pluie, cette troisieme designe le ciel comme limite superieure. Le verset utilise le ciel sous trois angles : creation, source, limite. Cette triple perspective montre que le ciel est un signe multidimensionnel.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Les nuages assujettis entre le ciel et la terre prouvent cette unicite — l'espace entre ciel et terre est un domaine ordonne par Dieu.",
              axe3_sourate: "La triple occurrence de samaw dans un seul verset est remarquable. La sourate al-Baqarah utilise le ciel comme reference permanente — en 2:19 (pluie du ciel), 2:22 (le ciel comme construction), 2:29 (les sept cieux). Le verset 164 condense tous ces usages.",
              axe4_coherence: "L'expression « bayna-s-sama'i wa-l-ard » (entre le ciel et la terre) apparait en 2:164 et dans d'autres passages pour designer l'espace atmospherique. Le Coran situe les nuages dans cet espace intermediaire — ils ne sont ni en haut ni en bas mais entre les deux.",
              axe5_frequence: "Pour la mission du khalifa, l'espace entre ciel et terre est le terrain de la mission. Le khalifa n'est ni un etre celeste ni une bete terrestre — il est entre les deux, comme les nuages. Sa mission se deploie dans cet espace intermediaire entre le divin et le terrestre."
            }
          }
        }
      },
      // ard pos=35 (terre — dernier)
      {
        word_key: "ard", position: 35, sense_chosen: "terre",
        analysis_axes: {
          sense_chosen: "terre",
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays", "bas"],
              proof_ctx: "Derniere occurrence de la racine a-r-d dans le verset — ici al-ardi au genitif dans l'expression « bayna-s-sama'i wa-l-ard » (entre le ciel et la terre). La terre est la limite inferieure de l'espace des nuages. Memes analyses que pour les occurrences precedentes. Le verset se conclut par cette paire ciel-terre qui encadre les nuages assujettis — le dernier signe avant la conclusion.",
              axe1_verset: "Le mot al-ardi ferme le cadre spatial des signes — entre le ciel et la terre. La premiere occurrence (pos 4) designait la terre comme objet de creation, la deuxieme (pos 25) comme receptacle de la vie. Cette troisieme designe la terre comme borne inferieure. Le verset encadre tout le systeme des signes entre le ciel et la terre — rien n'echappe a cet espace.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. L'espace ciel-terre est le cadre de l'unicite divine — tout ce qui existe entre ces deux bornes est l'oeuvre d'un seul Dieu.",
              axe3_sourate: "La terre apparait a nouveau comme borne de l'espace — en 2:29, Dieu a cree ce qui est sur la terre puis s'est tourne vers le ciel. La paire ciel-terre structure la cosmologie de la sourate.",
              axe4_coherence: "La paire ciel-terre est omnipresente dans le Coran — elle designe la totalite du cosmos. En 2:164, elle apparait au debut et a la fin de l'enumeration, encadrant tous les signes.",
              axe5_frequence: "Pour la mission du khalifa, la terre est la base de la mission. Le khalifa est entre le ciel et la terre — sa mission est terrestre mais sa source est celeste. La terre est le lieu concret ou la mission se realise."
            }
          }
        }
      },
      // ayn pos=36 (signes)
      {
        word_key: "ayn", position: 36, sense_chosen: "signe",
        analysis_axes: {
          sense_chosen: "signe",
          concept_chosen: "Lieu/Interrogation",
          concepts: {
            "Lieu/Interrogation": {
              status: "retenu",
              senses: ["ou", "en quel lieu"],
              proof_ctx: "Le mot la-ayatin est un nom feminin pluriel indefini au genitif avec la particule d'insistance la- de la racine a-y-y. Le Lane's donne : signe, marque, prodige, verset. Les ayat sont les signes qui pointent vers le Createur — chaque phenomene enumere dans le verset est un signe. Le pluriel indefini (ayatin sans article) marque l'abondance — il y a DES signes, pas UN signe. La particule la- renforce l'affirmation : il y a CERTES des signes. Le mot aya est fondamental dans le Coran — chaque verset est lui-meme une aya.",
              axe1_verset: "Le mot la-ayatin est la conclusion de l'enumeration — tous les phenomenes cites sont des signes. La creation des cieux et de la terre, l'alternance nuit-jour, les navires, la pluie, la revivification, les creatures, les vents, les nuages — tout cela forme un ensemble de signes. Le champ lexical du verset converge vers ce mot : tout est signe pour ceux qui raisonnent.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Le verset 164 fournit les signes de cette unicite. Le lien est direct : l'unicite est affirmee (v.163) puis prouvee par les signes (v.164). Le verset 165 montrera que certains ignorent ces signes.",
              axe3_sourate: "La racine a-y-y apparait frequemment dans la sourate al-Baqarah — en 2:39 (nier les signes), 2:61 (tuer les prophetes et nier les signes), 2:118 (montrez-nous un signe). La sourate insiste sur les signes comme preuves — les nier est un acte d'ingratitude.",
              axe4_coherence: "Le mot aya et ses derives apparaissent environ 382 fois dans le Coran. En 3:190, « dans la creation des cieux et de la terre et l'alternance de la nuit et du jour, il y a des signes pour les doues d'intelligence ». Le verset 2:164 est presque identique — les signes cosmiques sont un refrain coranique.",
              axe5_frequence: "Pour la mission du khalifa, les signes sont la boussole de la mission. Le khalifa doit lire les signes — dans la creation, dans le temps, dans les phenomenes naturels. Les signes guident vers le Createur et rappellent le mandat. Ignorer les signes c'est s'egarer de la mission."
            }
          }
        }
      },
      // qwm pos=37
      {
        word_key: "qwm", position: 37, sense_chosen: "peuple",
        analysis_axes: {
          sense_chosen: "peuple",
          concept_chosen: "Verticalité/Droiture",
          concepts: {
            "Verticalité/Droiture": {
              status: "retenu",
              senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger", "se tenir debout"],
              proof_ctx: "Le mot qawmin est un nom masculin singulier indefini au genitif de la racine q-w-m. Le Lane's donne : se lever, se dresser, se tenir debout. Le qawm (peuple) est etymologiquement « ceux qui se tiennent debout » — un peuple est un groupe qui se dresse ensemble. L'indefini (qawmin sans article) marque que les signes sont pour un peuple (quel qu'il soit) qui raisonne. La distinction avec « peuple/communaute » au sens de simple groupe est que le sens retenu (verticalite) est le fondement etymologique du concept de peuple dans la racine q-w-m.",
              axe1_verset: "Le mot qawmin designe les destinataires des signes — un peuple qui raisonne. Le verset ne dit pas « tous les gens » mais « un peuple qui raisonne » — la comprehension des signes requiert l'exercice de la raison. Le champ lexical de la conclusion (signes, peuple, raisonner) montre que les signes ne sont pas automatiquement compris — il faut raisonner pour les dechiffrer.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Les signes sont pour un peuple qui raisonne — pas pour ceux qui suivent aveuglement. Le verset 165 montrera que ceux qui prennent des associes n'ont pas raisonne face aux signes.",
              axe3_sourate: "La racine q-w-m apparait frequemment dans la sourate al-Baqarah — en 2:44 (la priere, qiyam), en 2:83 (accomplir la priere). Le peuple (qawm) apparait en 2:54 (ya qawmi, o mon peuple). La sourate utilise q-w-m pour designer a la fois le peuple et l'acte de se tenir debout — les deux sens sont lies.",
              axe4_coherence: "La racine q-w-m apparait environ 659 fois dans le Coran. L'expression « li-qawmin ya'qiluna » (pour un peuple qui raisonne) est un refrain coranique — en 2:164, 13:4, 16:12, 30:24. Le Coran reserve les signes a ceux qui raisonnent — l'exercice de la raison est une condition de la comprehension.",
              axe5_frequence: "Pour la mission du khalifa, le peuple qui raisonne est le peuple ideal de la mission. Le khalifa doit former un peuple qui se tient debout — qui raisonne et qui comprend les signes. La mission n'est pas d'imposer mais de faire raisonner. Un peuple qui raisonne est un peuple qui accomplit sa mission."
            },
            "Peuple/Communauté": {
              status: "nul",
              senses: ["peuple", "communaute", "tribu", "nation", "groupe"],
              proof_ctx: "Le sens de peuple/communaute est un sens derive de q-w-m — le peuple est etymologiquement ceux qui se tiennent debout ensemble. Le sens de verticalite est le fondement qui donne naissance au concept de peuple."
            },
            "Gestion/Administration": {
              status: "nul",
              senses: ["gerer", "administrer", "prendre en charge", "diriger", "veiller sur"],
              proof_ctx: "Le sens de gestion est un sens atteste de q-w-m mais le contexte est le peuple comme destinataire des signes, pas un acte de gestion."
            }
          }
        }
      },
      // eql pos=38
      {
        word_key: "eql", position: 38, sense_chosen: "raisonner",
        analysis_axes: {
          sense_chosen: "raisonner",
          concept_chosen: "Raison/Intelligence",
          concepts: {
            "Raison/Intelligence": {
              status: "retenu",
              senses: ["raison", "intelligence", "comprendre", "discernement"],
              proof_ctx: "Le verbe ya'qiluna est un inaccompli 3MP de la racine '-q-l. Le Lane's donne : raison, intelligence, lier, comprendre, discerner le vrai du faux. L'inaccompli marque que le raisonnement est un acte continu — ceux qui raisonnent le font de maniere permanente. Le verbe est a la 3e personne du pluriel masculin — il qualifie le peuple (qawm). La racine '-q-l lie la raison au concept de « lier » — raisonner c'est lier les choses entre elles par des rapports logiques. La distinction avec « lier/entraver » (nul) est que le contexte est intellectuel, pas physique.",
              axe1_verset: "Le verbe ya'qiluna conclut le verset — les signes sont pour un peuple qui raisonne. Le champ lexical de la conclusion (signes, peuple, raisonner) montre que la comprehension des signes requiert un effort intellectuel. Le verset ne dit pas « pour ceux qui voient » ou « pour ceux qui sentent » mais « pour ceux qui raisonnent » — la raison est le critere de la comprehension des signes divins.",
              axe2_voisins: "Le verset 163 affirmait l'unicite de Dieu. Le verset 164 conclut par la raison — raisonner est le moyen de passer des signes a la conviction de l'unicite. Le verset 165 montrera que ceux qui prennent des associes n'ont pas utilise leur raison.",
              axe3_sourate: "La racine '-q-l apparait dans la sourate al-Baqarah en 2:44 (« ne raisonnez-vous pas ? »), 2:73 (« peut-etre raisonnerez-vous »), 2:75 (« un groupe d'entre eux entendait la parole de Dieu puis la falsifiait apres l'avoir comprise »). La sourate appelle constamment a la raison — raisonner est un acte de foi.",
              axe4_coherence: "La racine '-q-l apparait environ 49 fois dans le Coran — toujours sous forme verbale, jamais nominale. Le Coran utilise la raison comme verbe — raisonner est un acte, pas un concept abstrait. L'expression « la'allakum ta'qiluna » (peut-etre raisonnerez-vous) est un refrain coranique. Le Coran invite a raisonner, pas a croire aveuglement.",
              axe5_frequence: "Pour la mission du khalifa, la raison est l'outil principal de la mission. Le khalifa raisonne — il observe les signes, il les comprend, il agit en consequence. La mission n'est pas un acte irrationnel mais un acte de raison fondee sur la comprehension des signes divins. Raisonner c'est accomplir la mission avec intelligence."
            },
            "Lien/Entrave": {
              status: "nul",
              senses: ["lier", "entraver"],
              proof_ctx: "Le sens de lier est le sens physique premier de '-q-l — lier un animal, le retenir. Le contexte est intellectuel — raisonner est l'acte de lier les idees entre elles. Le sens physique est hors sujet."
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

  const verseIds = [171];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 164 ===\n');
  await processVerse(164);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V164 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
