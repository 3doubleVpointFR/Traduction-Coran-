const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 166
// verse_id=173, analysis_id=532
// "Quand ceux qui etaient suivis se desavoueront de ceux
//  qui les suivaient, et qu'ils verront le chatiment, et
//  que tous les liens entre eux seront coupes."
// Scene du Jour Dernier.
// =====================================================

const verseData = {
  166: {
    verse_id: 173,
    analysis_id: 532,
    translation_arab: "Quand ceux qui etaient suivis se desavoueront de ceux qui les suivaient, et qu'ils verront le chatiment, et que tous les liens entre eux seront coupes.",
    full_translation: "Quand les meneurs se desavoueront des suiveurs, et qu'ils verront le chatiment, et que tous les liens entre eux seront coupes.",
    translation_explanation: `§DEMARCHE§
Le verset decrit une scene du Jour Dernier : la rupture entre les meneurs et leurs suiveurs. Le verbe **tabarra'a** est un accompli 3MS de la forme V de la racine b-r-a. Le Lane's donne : se declarer innocent de, se desavouer, se demettre de toute responsabilite. La forme V (tafa''ala) porte le sens reflexif et intensif — le sujet se desavoue lui-meme activement. L'accompli dans un contexte futur (idh, quand) est un accompli de certitude — l'evenement est si certain qu'il est decrit comme deja acheve. Le sujet est « ceux qui etaient suivis » (alladhina uttubiʿu) — les meneurs, ceux que les gens prenaient comme guides. Le verbe passif **uttubiʿu** est un accompli passif 3MP de la forme VIII de la racine t-b-e. Le Lane's donne : etre suivi, avoir des partisans. Le passif indique que ces meneurs n'ont pas choisi d'etre suivis — ils ont ete pris comme modeles par d'autres. La preposition **mina** (de, d'avec) introduit l'objet du desaveu : ceux qui les suivaient. Le verbe **ittabaʿu** est un accompli 3MP de la forme VIII de la racine t-b-e. Le Lane's donne : suivre, prendre comme modele, imiter. La forme VIII (ifta'ala) porte le sens d'effort personnel — ils ont choisi activement de suivre. L'opposition entre le passif (uttubiʿu, ils ont ete suivis) et l'actif (ittabaʿu, ils ont suivi) montre la distinction entre les deux groupes : ceux qui recevaient le suivi passivement et ceux qui suivaient activement. Le verbe **raʾaw** est un accompli 3MP de la racine r-a-y. C'est une particule dans le contexte de ce decoupage — la vision du chatiment. Le nom **al-ʿadhaba** est un nom masculin singulier defini accusatif de la racine e-d-b. Le Lane's donne : chatiment, punition, supplice. Le chatiment est ce qui fait souffrir en reponse a une faute. L'article defini (al-) indique LE chatiment connu — celui du Jour Dernier. Le verbe **taqattaʿat** est un accompli 3FS de la forme V de la racine q-t-e. Le Lane's donne : se couper, se rompre mutuellement. La forme V porte le sens reflexif et intensif — les liens se coupent d'eux-memes, completement. Le feminin singulier (taqattaʿat) s'accorde avec le sujet feminin (al-asbabu). Le nom **al-asbabu** est un pluriel feminin defini nominatif de la racine s-b-b. Le Lane's donne : causes, liens, cordes, moyens. Les asbab sont ce qui relie — les liens de loyaute, les causes communes, les moyens de connexion entre les meneurs et les suiveurs. L'article defini (al-) indique LES liens connus — tous les liens qui existaient entre eux.

§JUSTIFICATION§
**se desavoueront** — Le sens retenu est « se desavouer ». Le verbe tabarra'a a la forme V porte le sens de se declarer innocent d'une association. L'alternative « creer » est ecartee car la forme V de b-r-a porte exclusivement le sens de desaveu, pas de creation. La creation releve de la forme I (bara'a au sens de creer).

**etaient suivis** — Le sens retenu est « etre suivi ». Le verbe passif uttubiʿu indique que ces personnes avaient des suiveurs. L'alternative « consequence » est ecartee car le mot est un verbe passif, pas un nom abstrait.

**suivaient** — Le sens retenu est « suivre ». Le verbe ittabaʿu indique que ces personnes suivaient activement les meneurs. L'alternative « consequence » est ecartee pour la meme raison — c'est un verbe actif de suivi.

**le chatiment** — Le sens retenu est « chatiment ». Le mot al-ʿadhab designe la souffrance infligee comme punition. L'alternative « douceur » est ecartee car le contexte est le Jour Dernier et la scene de terreur, pas de plaisir.

**se couperont** — Le sens retenu est « se couper ». Le verbe taqattaʿat a la forme V porte le sens de coupure mutuelle et intensive. L'alternative « decider » est ecartee car le sujet est « les liens » — des liens ne decident pas, ils se coupent.

**les liens** — Le sens retenu est « liens/causes ». Le mot al-asbab designe ce qui relie les gens entre eux — les liens de loyaute, les causes communes, les moyens de connexion. L'alternative « injurier » est ecartee car le mot est un nom pluriel, pas un verbe.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. Hamidullah donne « les meneurs desavoueront les suiveurs ». Notre traduction preserve la construction passive/active du texte original : « ceux qui etaient suivis » (passif) se desavouent de « ceux qui suivaient » (actif). Cette distinction est importante car elle montre que les meneurs n'ont pas choisi leur statut — c'est les suiveurs qui les ont choisis. Le Jour Dernier revele l'illusion de cette relation.`,
    segments: [
      { fr: "quand", phon: "idh", arabic: "\u0625\u0650\u0630\u0652", is_particle: true, position: 0 },
      { fr: "se desavoueront", pos: "verbe", phon: "tabarra'a", arabic: "\u062A\u064E\u0628\u064E\u0631\u0651\u064E\u0623\u064E", word_key: "bra", is_particle: false, sense_retenu: "se desavouer", position: 1 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E", is_particle: true, position: 2 },
      { fr: "etaient suivis", pos: "verbe", phon: "uttubiʿu", arabic: "\u0671\u062A\u0651\u064F\u0628\u0650\u0639\u064F\u0648\u0627\u06DF", word_key: "tbae", is_particle: false, sense_retenu: "etre suivi", position: 3 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0646\u064E", is_particle: true, position: 4 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E", is_particle: true, position: 5 },
      { fr: "suivaient", pos: "verbe", phon: "ittabaʿu", arabic: "\u0671\u062A\u0651\u064E\u0628\u064E\u0639\u064F\u0648\u0627\u06DF", word_key: "tbae", is_particle: false, sense_retenu: "suivre", position: 6 },
      { fr: "et qu'ils verront", phon: "wa-raʾaw", arabic: "\u0648\u064E\u0631\u064E\u0623\u064E\u0648\u0652\u0627\u06DF", is_particle: true, position: 7 },
      { fr: "le chatiment", pos: "nom", phon: "al-ʿadhaba", arabic: "\u0671\u0644\u0652\u0639\u064E\u0630\u064E\u0627\u0628\u064E", word_key: "edb", is_particle: false, sense_retenu: "chatiment", position: 8 },
      { fr: "et que se couperont", phon: "wa-taqattaʿat", arabic: "\u0648\u064E\u062A\u064E\u0642\u064E\u0637\u0651\u064E\u0639\u064E\u062A\u0652", word_key: "qte", is_particle: false, sense_retenu: "se couper", position: 9, pos: "verbe" },
      { fr: "entre eux", phon: "bihimu", arabic: "\u0628\u0650\u0647\u0650\u0645\u064F", is_particle: true, position: 10 },
      { fr: "les liens", pos: "nom", phon: "al-asbabu", arabic: "\u0671\u0644\u0652\u0623\u064E\u0633\u0652\u0628\u064E\u0627\u0628\u064F", word_key: "sbb", is_particle: false, sense_retenu: "liens", position: 11 }
    ],
    words: [
      // bra pos=1
      {
        word_key: "bra", position: 1, sense_chosen: "se desavouer",
        analysis_axes: {
          sense_chosen: "se desavouer",
          concept_chosen: "Innocence/Purete",
          concepts: {
            "Innocence/Purete": {
              status: "retenu",
              senses: ["etre innocent", "se desavouer"],
              proof_ctx: "Le verbe tabarra'a est un accompli 3MS de la forme V de la racine b-r-a. Le Lane's donne : se declarer innocent de, se desavouer, se demettre de toute responsabilite, se laver les mains de. La forme V (tafa''ala) porte le sens reflexif — le sujet agit sur lui-meme pour se separer d'une association. Le desaveu est un acte de rupture unilateral : celui qui se desavoue declare qu'il n'a plus rien a voir avec l'autre. Ici les meneurs se desavouent de leurs suiveurs — ils nient toute responsabilite dans l'egarement de ceux qui les suivaient. La distinction avec la creation (nul) est claire : la forme V de b-r-a porte le sens de desaveu, pas de creation.",
              axe1_verset: "Le verbe tabarra'a ouvre le verset en posant l'acte central : le desaveu. Le champ lexical du verset tourne autour de la rupture (se desavouer, se couper, liens) et de la consequence (chatiment). Les meneurs se desavouent — ils coupent le lien avec leurs suiveurs. Le desaveu est le premier acte de la scene : avant meme que les liens ne se coupent, les meneurs rejettent publiquement ceux qui les suivaient. L'ironie est que dans la vie terrestre ils acceptaient le suivi, mais le Jour Dernier ils le renient.",
              axe2_voisins: "Le verset 165 parlait de ceux qui prennent des egaux a Dieu et les aiment d'un amour egal. Le verset 166 montre la consequence de cet amour mal place — les meneurs adores se desavouent de leurs adorateurs. Le verset 167 montrera le souhait des suiveurs de revenir pour se desavouer a leur tour. La progression est : amour aveugle (165) → desaveu des meneurs (166) → regret des suiveurs (167).",
              axe3_sourate: "La racine b-r-a apparait dans la sourate al-Baqarah dans des contextes de creation (2:54, votre Createur al-Bari') et de desaveu. Le verset 166 utilise la forme V qui porte exclusivement le sens de desaveu. La sourate montre que le Createur (al-Bari') est aussi Celui devant qui les faux liens se rompent — la creation et le desaveu sont deux faces de la meme autorite divine.",
              axe4_coherence: "La racine b-r-a au sens de desaveu apparait en 9:1 (desaveu de la part de Dieu et de Son envoye), en 59:16 (le diable dit « je me desavoue de toi »), en 60:4 (Ibrahim se desavoue des polytheistes). Le desaveu est un acte recurrent le Jour Dernier — chaque fausse alliance se rompt. Le Coran montre que les liens non fondes sur Dieu sont voues au desaveu.",
              axe5_frequence: "Pour la mission du khalifa, le desaveu du Jour Dernier est un avertissement. Les liens construits sur autre chose que Dieu se rompront — les meneurs renieront leurs suiveurs. Le khalifa doit fonder ses alliances sur la verite, pas sur l'interet ou l'idolatrie. Le desaveu montre que toute autorite usurpee sera devoilee et reniee."
            },
            "Creation/Origination": {
              status: "nul",
              senses: ["creer", "faconner"],
              proof_ctx: "Le sens de creation releve de la forme I de b-r-a. Le verbe est ici a la forme V (tabarra'a) qui porte le sens de desaveu, pas de creation. Le contexte est la rupture entre meneurs et suiveurs, pas un acte de creation."
            }
          }
        }
      },
      // tbae pos=3 (uttubiʿu — etre suivi, passif)
      {
        word_key: "tbae", position: 3, sense_chosen: "etre suivi",
        analysis_axes: {
          sense_chosen: "etre suivi",
          concept_chosen: "Suite/Succession",
          concepts: {
            "Suite/Succession": {
              status: "retenu",
              senses: ["suivre", "poursuivre", "successeur", "partisan"],
              proof_ctx: "Le verbe uttubiʿu est un accompli passif 3MP de la forme VIII de la racine t-b-e. Le Lane's donne : etre suivi, avoir des partisans, avoir des gens qui marchent derriere soi. Le passif est significatif : ces personnes n'ont pas choisi d'etre suivies — elles ont ete prises comme modeles par d'autres. Le suivi est directionnel : les suiveurs vont vers les suivis. Ici le passif (uttubiʿu) s'oppose a l'actif (ittabaʿu) du meme verset pour distinguer les deux groupes. La distinction avec « consequence » (nul) est claire : le mot est un verbe passif de suivi, pas un nom abstrait.",
              axe1_verset: "Le verbe uttubiʿu qualifie les meneurs — « ceux qui etaient suivis ». Le passif montre qu'ils ont recu le suivi sans necessairement le meriter. Le champ lexical du verset (desaveu, suivi, chatiment, liens coupes) tourne autour de la fausse hierarchie qui se defait. Les « suivis » sont le premier groupe de la scene — ceux qui avaient le pouvoir et l'influence. Le verset revele que ce pouvoir etait une illusion qui se dissipe le Jour Dernier.",
              axe2_voisins: "Le verset 165 parlait de ceux qui prennent des egaux a Dieu — les « suivis » sont ces egaux, ces faux dieux qu'on adore. Le verset 166 les montre en train de fuir leur propre statut. Le verset 167 montrera que les suiveurs souhaitent un retour pour changer de conduite. La sequence montre que le statut de « suivi » etait un piege pour les deux parties.",
              axe3_sourate: "La racine t-b-e apparait dans la sourate al-Baqarah dans des contextes varies. En 2:38, « quiconque suit Ma guidee ». En 2:145, « si tu suis leurs passions ». En 2:166, le suivi est au passif pour designer les faux guides. La sourate oppose le suivi de la guidee divine (bon) au suivi des faux guides (mauvais).",
              axe4_coherence: "La racine t-b-e apparait environ 174 fois dans le Coran. L'opposition passif/actif (uttubiʿu/ittabaʿu) dans le meme verset est rare et significative. En 14:21, une scene identique : « les faibles diront aux orgueilleux : nous etions vos suiveurs ». Le Coran repete cette scene pour montrer que le suivi aveugle mene a la ruine des deux parties.",
              axe5_frequence: "Pour la mission du khalifa, etre « suivi » sans merite est un danger. Le khalifa doit fonder son autorite sur la verite, pas sur le charisme ou l'influence sociale. Le Jour Dernier, les faux guides se desavoueront de leurs suiveurs. Le khalifa doit etre un guide qui assume sa responsabilite, pas un « suivi » qui renie ses partisans."
            },
            "Resultat/Effet": {
              status: "nul",
              senses: ["consequence"],
              proof_ctx: "Le sens de consequence est un sens derive de t-b-e. Le contexte est le suivi passif (etre suivi par des partisans), pas une consequence abstraite."
            }
          }
        }
      },
      // tbae pos=6 (ittabaʿu — suivre, actif) — 2e VWA
      {
        word_key: "tbae", position: 6, sense_chosen: "suivre",
        analysis_axes: {
          sense_chosen: "suivre",
          concept_chosen: "Suite/Succession",
          concepts: {
            "Suite/Succession": {
              status: "retenu",
              senses: ["suivre", "poursuivre", "successeur", "partisan"],
              proof_ctx: "Le verbe ittabaʿu est un accompli 3MP de la forme VIII de la racine t-b-e. Le Lane's donne : suivre, prendre comme modele, imiter, marcher derriere. La forme VIII (ifta'ala) porte le sens d'effort personnel et de choix delibere — ils ont activement choisi de suivre. L'actif (ittabaʿu) s'oppose au passif (uttubiʿu) pour montrer que les suiveurs portent la responsabilite de leur choix. Ils n'ont pas ete forces — ils ont suivi de leur propre gre.",
              axe1_verset: "Le verbe ittabaʿu qualifie les suiveurs — « ceux qui suivaient ». L'actif montre que le suivi est un choix delibere. Le champ lexical du verset oppose les deux groupes : les « suivis » (passif, sans choix) et les « suiveurs » (actif, par choix). Le verset montre que les suiveurs sont responsables de leur egarement — ils ont choisi leurs guides. Le desaveu des meneurs revele que les suiveurs ont investi leur confiance dans des personnes qui ne la meritaient pas.",
              axe2_voisins: "Le verset 165 decrivait l'amour des suiveurs pour leurs faux dieux — un amour egal a l'amour de Dieu. Le verset 166 montre que cet amour etait unilateral — les meneurs ne partagent pas cet attachement et s'en desavouent. Le verset 167 montrera le souhait des suiveurs de revenir pour se desavouer a leur tour. Le suivi actif sans discernement mene au regret.",
              axe3_sourate: "En 2:170, les dissimulateurs disent « nous suivons ce sur quoi nous avons trouve nos peres ». En 2:145, « si tu suis leurs passions apres le savoir qui t'est venu ». La sourate al-Baqarah montre que le suivi actif peut etre bon (suivre la guidee de Dieu) ou mauvais (suivre les peres, les passions, les faux guides). Le verset 166 decrit les consequences du mauvais suivi.",
              axe4_coherence: "En 26:91-102, les egares diront « nous n'avions pas de raison — nous suivions les grands ». En 33:67, « nous avons obei a nos maitres et nos grands et ils nous ont egares ». Le Coran repete que le suivi aveugle des « grands » mene a la perdition. L'actif (ittabaʿu) souligne la responsabilite personnelle — personne ne sera excuse pour avoir suivi aveuglement.",
              axe5_frequence: "Pour la mission du khalifa, suivre activement doit etre un choix eclaire, pas aveugle. Le khalifa doit suivre la guidee divine, pas les leaders humains sans discernement. Le Jour Dernier revelera que le suivi aveugle etait une erreur. Le khalifa est responsable de ce qu'il choisit de suivre — il doit exercer son discernement."
            },
            "Resultat/Effet": {
              status: "nul",
              senses: ["consequence"],
              proof_ctx: "Le sens de consequence est hors sujet — le verbe ittabaʿu est un verbe actif de suivi, pas un nom de consequence."
            }
          }
        }
      },
      // edb pos=8
      {
        word_key: "edb", position: 8, sense_chosen: "chatiment",
        analysis_axes: {
          sense_chosen: "chatiment",
          concept_chosen: "Chatiment/Punition",
          concepts: {
            "Chatiment/Punition": {
              status: "retenu",
              senses: ["punir", "chatier", "tourmenter", "chatiment"],
              proof_ctx: "Le mot al-ʿadhaba est un nom masculin singulier defini accusatif de la racine e-d-b. Le Lane's donne : chatiment, punition, supplice, souffrance infligee. Le chatiment est un acte exterieur directionnel — il sort de celui qui punit et atteint celui qui est puni. L'article defini (al-) indique LE chatiment connu — le chatiment du Jour Dernier, celui dont le Coran parle depuis le debut. L'accusatif marque le complement d'objet de « verront » (raʾaw) — ils verront le chatiment de leurs propres yeux. La distinction avec la douceur (nul) est absolue : le contexte est une scene de terreur et de rupture, pas de plaisir.",
              axe1_verset: "Le mot al-ʿadhab est le declencheur de la panique — c'est en voyant le chatiment que les meneurs se desavouent et que les liens se coupent. Le champ lexical du verset (desaveu, chatiment, liens coupes) construit une scene de dissolution totale. Le chatiment est le revelateur de la verite — c'est face au chatiment que les fausses alliances s'effondrent. La vision du chatiment est le moment de verite ou chacun revele sa vraie nature.",
              axe2_voisins: "Le verset 165 parlait de l'amour excessif pour les faux dieux. Le verset 166 montre que cet amour ne resiste pas a la vue du chatiment. Le verset 167 montrera que les suiveurs souhaiteront revenir — « s'ils pouvaient revenir, ils se desavoueraient comme [les meneurs] se sont desavoues d'eux ». Le chatiment est le catalyseur du regret et du desaveu mutuel.",
              axe3_sourate: "La racine e-d-b apparait frequemment dans la sourate al-Baqarah. En 2:7, « pour eux un chatiment immense ». En 2:85, « le chatiment le plus dur ». En 2:114, « un chatiment dans l'au-dela ». La sourate utilise le chatiment comme avertissement recurrent — chaque passage de rejection est suivi d'une mention du chatiment.",
              axe4_coherence: "La racine e-d-b apparait environ 322 fois dans le Coran. Le chatiment est un des themes les plus presents — il fonctionne comme un avertissement pour ceux qui rejettent la verite. En 3:105, « un chatiment immense » pour ceux qui se divisent apres les preuves. Le Coran lie systematiquement le rejet de la verite au chatiment.",
              axe5_frequence: "Pour la mission du khalifa, le chatiment est la consequence de l'echec de la mission. Ceux qui suivent les faux guides au lieu de suivre la guidee divine verront le chatiment. Le khalifa doit avertir — montrer que le chatiment attend ceux qui persistent dans l'egarement. Le chatiment n'est pas une cruaute mais une justice — chacun recoit ce qu'il a choisi."
            },
            "Douceur": {
              status: "nul",
              senses: ["doux", "sucre", "eau douce", "agreable"],
              proof_ctx: "Le sens de douceur est l'oppose du chatiment. Le contexte est une scene de terreur du Jour Dernier — la douceur est totalement hors sujet."
            }
          }
        }
      },
      // qte pos=9
      {
        word_key: "qte", position: 9, sense_chosen: "se couper",
        analysis_axes: {
          sense_chosen: "se couper",
          concept_chosen: "Coupure/Separation",
          concepts: {
            "Coupure/Separation": {
              status: "retenu",
              senses: ["couper", "rompre", "interrompre", "traverser"],
              proof_ctx: "Le verbe taqattaʿat est un accompli 3FS de la forme V de la racine q-t-e. Le Lane's donne : se couper mutuellement, se rompre completement, etre tranche. La forme V (tafa''ala) porte le sens reflexif et intensif — les liens se coupent d'eux-memes, sans intervention exterieure. Le feminin singulier (taqattaʿat) s'accorde avec le sujet al-asbabu (les liens, feminin pluriel non humain). L'accompli de certitude decrit la coupure comme un fait acheve. La distinction avec « decider » (nul) est claire : le sujet est « les liens » — des liens ne decident pas, ils se coupent.",
              axe1_verset: "Le verbe taqattaʿat est l'acte final du verset — apres le desaveu et la vision du chatiment, les liens se coupent. Le champ lexical (desaveu, chatiment, coupure, liens) construit une progression de rupture : d'abord le desaveu verbal des meneurs, puis la vision du chatiment, puis la coupure complete de tous les liens. La forme V (reflexive) montre que les liens se coupent d'eux-memes — personne n'a besoin de les couper, ils se dissolvent face a la verite du Jour Dernier.",
              axe2_voisins: "Le verset 165 decrivait les liens d'amour avec les faux dieux. Le verset 166 montre que ces liens se coupent. Le verset 167 montrera le desir de retour — mais les liens coupes ne se recollent pas. La progression est : liens d'amour (165) → liens coupes (166) → souhait vain de retour (167). La coupure est irreversible.",
              axe3_sourate: "La racine q-t-e apparait dans la sourate al-Baqarah dans le contexte de la rupture des liens. En 2:27, « ceux qui rompent le pacte de Dieu apres l'avoir contracte et qui coupent ce que Dieu a ordonne de joindre ». En 2:166, les liens se coupent comme consequence du Jour Dernier. La sourate oppose la jonction (ce que Dieu ordonne de joindre) et la coupure (ce que les hommes rompent).",
              axe4_coherence: "La racine q-t-e apparait environ 63 fois dans le Coran. En 6:94, « vos liens entre vous sont coupes ». En 23:53, « ils ont coupe leur affaire entre eux en morceaux ». Le Coran utilise la coupure des liens comme image recurrente du Jour Dernier — toutes les fausses solidarites se dissolvent. Seul le lien avec Dieu reste.",
              axe5_frequence: "Pour la mission du khalifa, la coupure des liens est un avertissement. Les liens fondes sur autre chose que la verite divine se couperont le Jour Dernier. Le khalifa doit construire des liens durables — ceux fondes sur Dieu — et non des alliances d'interet qui se dissoudront. La coupure revele la qualite des liens : seuls les liens authentiques survivent."
            },
            "Decision": {
              status: "nul",
              senses: ["decider"],
              proof_ctx: "Le sens de decision est un derive de q-t-e (trancher une question). Le sujet est « les liens » (al-asbab) — des liens ne decident pas, ils se coupent. Le contexte est la rupture physique, pas une prise de decision."
            }
          }
        }
      },
      // sbb pos=11
      {
        word_key: "sbb", position: 11, sense_chosen: "liens",
        analysis_axes: {
          sense_chosen: "liens",
          concept_chosen: "Lien/Connexion",
          concepts: {
            "Lien/Connexion": {
              status: "retenu",
              senses: ["corde", "lien", "chemin"],
              proof_ctx: "Le mot al-asbabu est un pluriel feminin defini nominatif de la racine s-b-b. Le Lane's donne : corde, lien, moyen, cause, chemin, ce qui relie. Les asbab sont les liens qui connectent les personnes entre elles — liens de loyaute, d'interet, de dependance. L'article defini (al-) indique LES liens connus — tous les liens qui existaient entre les meneurs et les suiveurs. Le nominatif marque le sujet de taqattaʿat — ce sont les liens qui se coupent. La distinction avec la causalite (probable) est que le mot designe ici les liens concrets entre les personnes, pas la cause abstraite d'un evenement.",
              axe1_verset: "Le mot al-asbabu est le sujet du dernier verbe — les liens se coupent. Le champ lexical du verset (desaveu, suivi, chatiment, coupure) montre que les liens sont l'objet central de la dissolution. Les liens designent tout ce qui reliait les meneurs aux suiveurs : la loyaute, l'obeissance, l'admiration, la dependance. Le verset montre que tous ces liens — sans exception — se coupent. Le mot est au pluriel defini avec l'article al-, ce qui signifie TOUS les liens, pas seulement certains.",
              axe2_voisins: "Le verset 165 parlait de l'amour comme lien entre les suiveurs et leurs faux dieux. Le verset 166 nomme ces liens « asbab » et montre qu'ils se coupent. Le verset 167 montrera que cette coupure est definitive — les suiveurs ne peuvent pas revenir. Les asbab du verset 165 (amour, devotion) deviennent les asbab coupes du verset 166.",
              axe3_sourate: "La racine s-b-b apparait rarement dans la sourate al-Baqarah. En 2:166, les asbab sont les liens entre meneurs et suiveurs. La sourate utilise d'autres racines pour les liens (habl en d'autres contextes). L'usage de sabab ici souligne que les liens entre les humains — contrairement au lien avec Dieu — sont fragiles et temporaires.",
              axe4_coherence: "En 38:10, « qu'ils montent par les asbab (les cordes/les voies) du ciel ». En 40:36-37, Pharaon dit « construis-moi une tour pour que j'atteigne les asbab, les asbab des cieux ». Le Coran utilise sabab pour designer les moyens et les liens — des cordes qui permettent d'atteindre quelque chose. En 2:166, ces cordes se rompent — il n'y a plus de moyen de connexion entre les meneurs et les suiveurs.",
              axe5_frequence: "Pour la mission du khalifa, les liens (asbab) doivent etre fondes sur Dieu pour durer. Les liens fondes sur l'idolatrie, l'interet ou le suivisme aveugle se coupent le Jour Dernier. Le khalifa doit choisir ses liens avec discernement — seul le lien avec Dieu (habl Allah) est indestructible. Les asbab humains sont des moyens, pas des fins."
            },
            "Causalite/Moyen": {
              status: "probable",
              senses: ["cause", "moyen"],
              proof_ctx: "Le sens de cause/moyen est un sens majeur de s-b-b — le sabab est ce qui produit un effet. Dans le verset 166, le mot peut etre lu comme « les causes » (de leur alliance) ou « les liens » (entre eux). Les deux sens se recoupent — les liens sont les causes de leur association. Le sens de « liens » est prefere car le verbe taqattaʿat (se couper) s'applique mieux a des liens concrets qu'a des causes abstraites. On coupe un lien, on ne coupe pas une cause.",
              axe1_verset: "Si l'on lit al-asbab comme « les causes », le verset dit que toutes les causes de leur association se coupent. Cela fonctionne mais le verbe taqattaʿat (se couper physiquement) s'accorde mieux avec un objet concret (liens) qu'abstrait (causes).",
              axe2_voisins: "Les versets voisins parlent de liens affectifs (amour en 165, desaveu en 166, regret en 167). Le sens de « liens » est plus coherent avec le champ lexical que le sens de « causes ».",
              axe3_sourate: "Dans la sourate al-Baqarah, le contexte est la rupture des relations, pas la disparition des causes. Le sens de liens relationnels est plus pertinent.",
              axe4_coherence: "En 6:94, « vos liens entre vous sont coupes » utilise un vocabulaire similaire. Le sens de liens est confirme par les paralleles coraniques.",
              axe5_frequence: "Le khalifa doit comprendre que les causes profondes des fausses alliances (interet, peur, imitation) disparaissent le Jour Dernier. Les moyens (asbab) humains ne valent rien face a la verite divine."
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

  const verseIds = [173];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 166 ===\n');
  await processVerse(166);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V166 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
