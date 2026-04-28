const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 158
// verse_id=165, analysis_id=524
// "Safa et Marwa sont parmi les rites de Dieu.
//  Quiconque fait le pelerinage a la Maison ou la visite
//  pieuse, nul peche pour lui de faire le tour entre elles.
//  Et quiconque fait le bien volontairement, Dieu est
//  reconnaissant et savant."
// =====================================================

const verseData = {
  158: {
    verse_id: 165,
    analysis_id: 524,
    translation_arab: "Safa et Marwa sont parmi les rites de Dieu. Quiconque fait le pelerinage a la Maison ou la visite pieuse, nul peche pour lui de faire le tour entre elles. Et quiconque fait le bien volontairement, Dieu est reconnaissant et savant.",
    full_translation: "As-Safa et Al-Marwa sont vraiment parmi les rites d'Allah. Donc, quiconque fait le pelerinage a la Maison ou fait la 'Umra ne commet pas de peche en faisant le va-et-vient entre elles. Et quiconque fait de son plein gre une bonne action, alors Allah est reconnaissant, omniscient.",
    translation_explanation: `§DEMARCHE§
Le verset commence par nommer deux lieux sacres : as-Safa et al-Marwa. Le mot **as-Safa** est un nom propre defini de la racine s-f-w. Le Lane's donne : etre pur, etre clair, etre limpide. Le Safa est une colline a La Mecque — son nom evoque la purete de la roche lisse. Le mot **al-Marwata** est un nom propre defini de la racine m-r-w. Le Lane's donne : pierre dure, silex, roche blanche. Marwa est l'autre colline du rituel — son nom evoque la solidite de la pierre. Les deux collines sont nommees ensemble comme une paire indissociable. Le mot **sha'a'iri** est un pluriel genitif de la racine sh-'-r. Le Lane's donne : rite, symbole, marque par laquelle on reconnait. Les sha'a'ir sont les rites visibles qui marquent l'adoration — ce par quoi on reconnait le culte de Dieu. Le mot est au pluriel car les rites sont multiples. Le genitif le rattache a Dieu (sha'a'iri Allahi) — ces rites appartiennent a Dieu, pas aux hommes. Le nom **Allahi** est le nom propre de la divinite au genitif, premiere occurrence dans le verset. Les rites sont les rites de Dieu — leur source est divine.

Le verbe **hajja** est un accompli 3MS de la racine h-j-j. Le Lane's donne : faire le pelerinage, se rendre a un lieu sacre, argumenter. L'accompli ici a valeur conditionnelle (quiconque fait le pelerinage). Le pelerinage est le voyage sacre vers la Maison de Dieu — le hajj est un des piliers de l'islam. Le nom **al-bayta** est un nom defini accusatif de la racine b-y-t. Le Lane's donne : maison, demeure, lieu ou l'on passe la nuit. L'article defini (al-) marque que c'est LA Maison par excellence — la Kaaba, la Maison de Dieu. L'accusatif indique que la Maison est le complement d'objet du pelerinage — on fait le pelerinage A la Maison. Le verbe **i'tamara** est un accompli 3MS de la forme VIII de la racine '-m-r. Le Lane's donne : faire la visite pieuse, la 'umra. La forme VIII (if'tala) indique un acte volontaire et personnel — celui qui fait la 'umra s'engage lui-meme dans cette visite. La 'umra est le petit pelerinage, moins contraint que le hajj mais tout aussi sacre.

Le mot **junaha** est un nom accusatif de la racine j-n-h. Le Lane's donne : peche, inclination vers le mal, penchant. Le junaḥ est ce vers quoi on penche quand on devie — c'est l'ecart par rapport a la droiture. Dans le contexte negatif (la junaha 'alayhi = nul peche sur lui), le verset leve un interdit presume. Le verbe **yattawwafa** est un inaccompli 3MS de la forme V de la racine t-w-f. Le Lane's donne : tourner autour, faire le tour, circumambuler. La forme V (tafa''ala) indique un effort delibere et repetitif — faire le tour n'est pas un passage unique mais un mouvement circulaire complet. L'inaccompli marque que l'action est en cours ou habituelle.

Le verbe **tatawwa'a** est un accompli 3MS de la forme V de la racine t-w-'. Le Lane's donne : faire volontairement, obeir de son plein gre. La forme V indique un effort personnel et delibere — celui qui fait le bien volontairement depasse l'obligation minimale. Le mot **khayran** est un nom accusatif indefini de la racine kh-y-r. Le Lane's donne : bien, ce qui est bon, meilleur. L'accusatif indefini indique un bien quelconque — tout acte de bien, sans restriction. Le nom **Allaha** est le nom propre de la divinite a l'accusatif, deuxieme occurrence dans le verset. Dieu est ici le sujet de la phrase nominale qui suit. Le mot **shakirun** est un participe actif nominatif indefini de la racine sh-k-r. Le Lane's donne : reconnaissant, qui remercie. Dieu est reconnaissant — Il reconnait le bien fait par Ses serviteurs et le retribue. Le mot **'alimun** est un adjectif nominatif indefini de la racine '-l-m. Le Lane's donne : savant, qui sait. Dieu est savant — rien ne Lui echappe, Il connait chaque acte de bien meme s'il est cache.

§JUSTIFICATION§
**Safa** — Le sens retenu est le nom propre du lieu sacre. Le Lane's donne aussi « purete » et « choix », mais ici le mot designe la colline de La Mecque — c'est un nom propre geographique.

**Marwa** — Le sens retenu est le nom propre du lieu sacre. Le Lane's donne aussi « pierre dure » et « silex », mais ici le mot designe la colline de La Mecque — c'est un nom propre geographique.

**rites** — Le sens retenu est « rites/symboles ». Le mot sha'a'ir designe les marques visibles du culte. L'alternative « sentir/percevoir » est ecartee car le mot est un pluriel nominal designant les rites, pas un verbe de perception.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite unique. Premiere occurrence comme possesseur des rites.

**pelerinage** — Le sens retenu est « pelerinage ». Le verbe hajja designe le voyage sacre vers la Maison. L'alternative « argumenter » est ecartee car le contexte est le culte, pas le debat.

**la Maison** — Le sens retenu est « maison/demeure ». Le mot al-bayt designe la Kaaba. L'alternative « passer la nuit » est ecartee car le mot est un nom defini, pas un verbe.

**visite pieuse** — Le sens retenu est « visite pieuse ('umra) ». La forme VIII i'tamara designe la visite volontaire au sanctuaire. L'alternative « vie/age » est ecartee car le verbe est a la forme VIII, specifique a la 'umra.

**peche** — Le sens retenu est « peche/penchant ». Le mot junah designe l'ecart par rapport a la droiture. L'alternative « aile » est ecartee car le contexte est la levee d'un interdit, pas l'anatomie.

**faire le tour** — Le sens retenu est « tourner autour ». Le verbe yattawwafa designe la circumambulation rituelle. C'est le tawaf — le mouvement circulaire autour du lieu sacre ou entre les deux collines.

**volontairement** — Le sens retenu est « faire volontairement ». La forme V tatawwa'a indique un acte delibere et libre. L'alternative « pouvoir/capacite » est ecartee car le contexte est le choix volontaire, pas la capacite.

**bien** — Le sens retenu est « bien ». Le mot khayran designe tout acte de bien. L'alternative « choisir » est ecartee car le mot est un nom, pas un verbe.

**Dieu** — Le sens retenu est « divinite ». Deuxieme occurrence — Dieu est ici le sujet de la phrase « Dieu est reconnaissant et savant ».

**reconnaissant** — Le sens retenu est « reconnaissant ». Le participe actif shakirun qualifie Dieu comme Celui qui reconnait le bien. L'alternative « recompenser » est ecartee car le mot est un participe actif, pas un verbe de retribution.

**savant** — Le sens retenu est « savant ». L'adjectif 'alimun qualifie Dieu comme Celui qui sait tout. L'alternative « signe/marque » est ecartee car le mot est un adjectif, pas un nom de signe.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. La principale difference porte sur le mot junah : Hamidullah traduit « il n'y a pas de peche » la ou nous donnons « nul peche pour lui ». Les deux formulations sont equivalentes. La structure « la junaha 'alayhi » est une formule coranique de levee d'interdit — elle ne condamne ni n'oblige, elle autorise. Les traductions traditionnelles rendent bien cette nuance.`,
    segments: [
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 0 },
      { fr: "Safa", pos: "nom", phon: "as-Safa", arabic: "\u0671\u0644\u0635\u0651\u064e\u0641\u064e\u0627", word_key: "sfw", is_particle: false, sense_retenu: "Safa", position: 1 },
      { fr: "et Marwa", pos: "nom", phon: "wa-l-Marwata", arabic: "\u0648\u064e\u0671\u0644\u0652\u0645\u064e\u0631\u0652\u0648\u064e\u0629\u064e", word_key: "mrw", is_particle: false, sense_retenu: "Marwa", position: 2 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 3 },
      { fr: "rites", pos: "nom", phon: "sha'a'iri", arabic: "\u0634\u064e\u0639\u064e\u0627\u0653\u0626\u0650\u0631\u0650", word_key: "sher", is_particle: false, sense_retenu: "rites", position: 4 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 5 },
      { fr: "quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646\u0652", is_particle: true, position: 6 },
      { fr: "fait le pelerinage", pos: "verbe", phon: "hajja", arabic: "\u062d\u064e\u062c\u0651\u064e", word_key: "hjj", is_particle: false, sense_retenu: "pelerinage", position: 7 },
      { fr: "la Maison", pos: "nom", phon: "al-bayta", arabic: "\u0671\u0644\u0652\u0628\u064e\u064a\u0652\u062a\u064e", word_key: "byt", is_particle: false, sense_retenu: "maison", position: 8 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064e\u0648\u0650", is_particle: true, position: 9 },
      { fr: "fait la visite pieuse", pos: "verbe", phon: "i'tamara", arabic: "\u0671\u0639\u0652\u062a\u064e\u0645\u064e\u0631\u064e", word_key: "emr", is_particle: false, sense_retenu: "visite pieuse", position: 10 },
      { fr: "nul", phon: "fa-la", arabic: "\u0641\u064e\u0644\u064e\u0627", is_particle: true, position: 11 },
      { fr: "peche", pos: "nom", phon: "junaha", arabic: "\u062c\u064f\u0646\u064e\u0627\u062d\u064e", word_key: "jnh", is_particle: false, sense_retenu: "peche", position: 12 },
      { fr: "sur lui", phon: "'alayhi", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650", is_particle: true, position: 13 },
      { fr: "de faire le tour", pos: "verbe", phon: "yattawwafa", arabic: "\u064a\u064e\u0637\u0651\u064e\u0648\u0651\u064e\u0641\u064e", word_key: "twf", is_particle: false, sense_retenu: "faire le tour", position: 14 },
      { fr: "entre elles", phon: "bi-hima", arabic: "\u0628\u0650\u0647\u0650\u0645\u064e\u0627", is_particle: true, position: 15 },
      { fr: "fait volontairement", pos: "verbe", phon: "tatawwa'a", arabic: "\u062a\u064e\u0637\u064e\u0648\u0651\u064e\u0639\u064e", word_key: "twe", is_particle: false, sense_retenu: "faire volontairement", position: 16 },
      { fr: "un bien", pos: "nom", phon: "khayran", arabic: "\u062e\u064e\u064a\u0652\u0631\u064b\u0627", word_key: "\u1e2byr", is_particle: false, sense_retenu: "bien", position: 17 },
      { fr: "alors", phon: "fa-inna", arabic: "\u0641\u064e\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 18 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 19 },
      { fr: "reconnaissant", pos: "adjectif", phon: "shakirun", arabic: "\u0634\u064e\u0627\u0643\u0650\u0631\u064c", word_key: "\u0161kr", is_particle: false, sense_retenu: "reconnaissant", position: 20 },
      { fr: "savant", pos: "adjectif", phon: "'alimun", arabic: "\u0639\u064e\u0644\u0650\u064a\u0645\u064c", word_key: "elm", is_particle: false, sense_retenu: "savant", position: 21 }
    ],
    words: [
      // sfw pos=1
      {
        word_key: "sfw", position: 1, sense_chosen: "Safa",
        analysis_axes: {
          sense_chosen: "Safa",
          concept_chosen: "Pureté/Clarté",
          concepts: {
            "Pureté/Clarté": {
              status: "retenu",
              senses: ["etre pur", "etre clair", "etre limpide"],
              proof_ctx: "Le mot as-Safa est un nom propre defini de la racine s-f-w. Le Lane's donne : etre pur, etre clair, etre limpide, pierres lisses et dures. Le Safa est l'une des deux collines du rituel du pelerinage a La Mecque. Le nom derive de la purete — la roche du Safa est lisse et pure, sans aspérites. Le Lane's precise que la safa'a est la pierre large et lisse, et que le pluriel est sufiyy. Le choix du concept Purete/Clarte couvre le champ semantique principal de cette racine.",
              axe1_verset: "Le mot as-Safa ouvre le verset en nommant le premier des deux lieux sacres. Le champ lexical du verset est celui du pelerinage et des rites (Safa, Marwa, rites, pelerinage, Maison, visite pieuse, faire le tour). Le Safa est le point de depart du sa'y (la course rituelle entre les deux collines). Le verset declare que ces deux lieux sont parmi les rites de Dieu — ils ne sont pas des lieux quelconques mais des marques du culte divin.",
              axe2_voisins: "Le verset 157 mentionnait les prieres et la misericorde de Dieu sur ceux qui endurent. Le verset 158 enchaine avec les rites concrets — apres la dimension spirituelle, le verset passe a la dimension rituelle. Le verset 159 parlera de ceux qui dissimulent les signes clairs. Le Safa comme rite visible contraste avec la dissimulation du verset suivant.",
              axe3_sourate: "La sourate al-Baqarah contient les fondements legislatifs du pelerinage. En 2:125, la Maison est un lieu de rassemblement et de securite. En 2:127, Ibrahim et Isma'il elevent les fondations de la Maison. Le verset 158 ajoute les collines du Safa et Marwa aux rites — la sourate construit progressivement le cadre complet du pelerinage.",
              axe4_coherence: "La racine s-f-w apparait environ 16 fois dans le Coran. En 37:153, « a-t-Il choisi (istafa) les filles plutot que les fils ? ». En 3:33, « Dieu a elu (istafa) Adam ». En 2:158, le Safa est le nom propre de la colline. Le Coran utilise cette racine pour la purete et le choix — le Safa est la colline pure, le lieu elu pour le rite.",
              axe5_frequence: "Pour la mission du khalifa, le Safa represente le point de depart de l'effort rituel. La course entre Safa et Marwa rappelle l'effort de Hajar cherchant de l'eau pour son fils. Le khalifa doit reconnaitre que les lieux sacres sont des signes de Dieu — ils rappellent les epreuves des predecesseurs et la reponse divine a leur effort."
            },
            "Élection/Choix": {
              status: "nul",
              senses: ["choisir", "elire", "elu (safiy)"],
              proof_ctx: "Le sens de choix/election est un sens derive de s-f-w — l'elu est le pur, celui qui est choisi parmi les autres. Le contexte est un nom propre geographique, pas un verbe de choix."
            }
          }
        }
      },
      // mrw pos=2
      {
        word_key: "mrw", position: 2, sense_chosen: "Marwa",
        analysis_axes: {
          sense_chosen: "Marwa",
          concept_chosen: "Nom propre/Lieu",
          concepts: {
            "Nom propre/Lieu": {
              status: "retenu",
              senses: ["Marwa (nom propre)"],
              proof_ctx: "Le mot al-Marwata est un nom propre defini accusatif de la racine m-r-w. Le Lane's donne : pierre dure et blanche, silex dont on tire le feu. Marwa est l'une des deux collines du rituel du pelerinage a La Mecque. Le nom derive de la durete de la pierre — la marwa est la roche resistante. Le Lane's precise que la marwa est une pierre a feu, ce qui lui donne un sens de productivite : de la pierre dure jaillit l'etincelle.",
              axe1_verset: "Le mot al-Marwata complete la paire sacree avec as-Safa. Le verset nomme les deux collines ensemble — elles sont indissociables dans le rite. Le champ lexical du pelerinage (rites, Maison, visite pieuse, tour) les englobe. Marwa est le point d'arrivee du sa'y — la course va du Safa vers Marwa puis retour. Les deux collines delimitent l'espace sacre du rite.",
              axe2_voisins: "Le verset 157 traitait de la patience et de la misericorde. Le verset 158 passe aux rites physiques — Marwa comme Safa est un lieu concret. Le verset 159 condamnera ceux qui cachent les signes. Marwa comme rite visible est l'oppose de la dissimulation — les rites de Dieu sont faits pour etre vus et pratiques.",
              axe3_sourate: "La sourate al-Baqarah place les rites du pelerinage dans le contexte de la legislation divine. En 2:196, le pelerinage et la visite pieuse sont prescrits pour Dieu. Le verset 158 precise que meme le sa'y entre Safa et Marwa fait partie des rites — la sourate ne laisse aucun rite dans l'ombre.",
              axe4_coherence: "La racine m-r-w n'apparait qu'une seule fois dans le Coran — en 2:158 pour le nom propre Marwa. Cette unicite souligne le caractere specifique et sacre de ce lieu. Le Coran ne mentionne Marwa que dans le contexte du rite — elle n'est pas un terme generique mais un nom propre exclusivement rituel.",
              axe5_frequence: "Pour la mission du khalifa, Marwa represente l'aboutissement de l'effort rituel. La course entre Safa et Marwa enseigne que le rite demande un effort physique et une perseverance. Le khalifa doit comprendre que la mission n'est pas seulement spirituelle — elle implique des actes concrets, visibles et repetitifs."
            },
            "Pierre/Solidité": {
              status: "nul",
              senses: ["pierre dure", "silex"],
              proof_ctx: "Le sens de pierre dure est l'etymologie du nom propre — la colline Marwa tire son nom de la durete de sa roche. Le contexte est le nom propre du lieu sacre, pas une description mineralogique."
            },
            "Sens isolé/Virilité": {
              status: "nul",
              senses: ["virilite"],
              proof_ctx: "Le sens de virilite est un sens derive marginal de m-r-w. Le contexte est un nom propre geographique, pas une qualite masculine."
            }
          }
        }
      },
      // sher pos=4
      {
        word_key: "sher", position: 4, sense_chosen: "rites",
        analysis_axes: {
          sense_chosen: "rites",
          concept_chosen: "Rituel/Culte",
          concepts: {
            "Rituel/Culte": {
              status: "retenu",
              senses: ["rite sacre"],
              proof_ctx: "Le mot sha'a'iri est un pluriel genitif de la racine sh-'-r. Le Lane's donne : rites, symboles du culte, marques par lesquelles on reconnait l'adoration de Dieu. Les sha'a'ir sont les actes visibles de devotion — ce qui marque exterieurement l'obeissance a Dieu. Le pluriel indique la multiplicite des rites. Le genitif le rattache a Dieu (sha'a'iri Allahi) — les rites appartiennent a Dieu et sont ordonnes par Lui. La distinction avec la perception (nul) est que le mot est un nom pluriel designant les rites, pas un verbe de sensation.",
              axe1_verset: "Le mot sha'a'iri est le pivot du verset — il qualifie Safa et Marwa comme faisant partie des rites de Dieu. Le champ lexical est entierement rituel (pelerinage, Maison, visite pieuse, faire le tour). Les sha'a'ir sont le cadre qui donne sens a tous les autres mots — c'est parce que Safa et Marwa sont des rites que le sa'y entre elles est licite.",
              axe2_voisins: "Le verset 157 parlait de la misericorde divine. Le verset 158 passe aux rites concrets — les sha'a'ir sont les marques visibles de cette relation a Dieu. Le verset 159 condamnera ceux qui dissimulent les signes. Les sha'a'ir (rites visibles) contrastent avec la dissimulation — les rites doivent etre pratiques ouvertement.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine sh-'-r dans plusieurs contextes. En 2:9, « ils ne sentent pas » (la yash'uruna). En 2:154, « mais vous ne sentez pas ». En 2:158, le mot passe du sens de perception au sens de rite — le rite est ce par quoi on « sent » la presence divine. La sourate lie perception et rituel.",
              axe4_coherence: "La racine sh-'-r dans le sens de rites apparait en 5:2 (sha'a'ira Allahi = les rites de Dieu) et en 22:32 (sha'a'ira Allahi = les rites de Dieu). Le Coran utilise le pluriel sha'a'ir pour designer l'ensemble des rites du pelerinage. En 22:36, les chameaux de sacrifice sont appeles sha'a'ir. Le mot couvre tous les actes rituels visibles qui marquent la devotion.",
              axe5_frequence: "Pour la mission du khalifa, les rites sont les actes concrets de la mission. Le khalifa ne peut pas se contenter d'une mission interieure — il doit pratiquer les rites visibles qui marquent son obeissance. Les sha'a'ir sont les signes exterieurs de la mission accomplie. Ne pas pratiquer les rites c'est rendre la mission invisible."
            },
            "Perception/Conscience": {
              status: "nul",
              senses: ["sentir", "savoir", "etre conscient de"],
              proof_ctx: "Le sens de perception est le sens verbal de la racine sh-'-r. Le contexte est un nom pluriel designant les rites sacres, pas un verbe de perception sensorielle."
            },
            "Cheveux/Poils": {
              status: "nul",
              senses: ["cheveux", "poils"],
              proof_ctx: "Le sens de cheveux est un sens concret de sh-'-r lie au corps. Le contexte est les rites du pelerinage, pas l'anatomie."
            },
            "Poésie/Expression": {
              status: "nul",
              senses: ["poesie", "poete"],
              proof_ctx: "Le sens de poesie est un sens derive de sh-'-r — le poete est celui qui sent et exprime. Le contexte est les rites sacres, pas l'expression poetique."
            }
          }
        }
      },
      // alh pos=5 (1ere occurrence)
      {
        word_key: "alh", position: 5, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif, premiere occurrence dans le verset. Le Lane's donne : Dieu, la divinite unique. Ici Allah est le possesseur des rites — sha'a'iri Allahi (les rites de Dieu). Les rites n'appartiennent pas aux hommes mais a Dieu — c'est Lui qui les a institues et c'est vers Lui qu'ils sont diriges. Le nom apparait deux fois dans le verset : ici comme possesseur des rites et en fin de verset comme Celui qui est reconnaissant et savant.",
              axe1_verset: "Le nom Allahi en premiere occurrence rattache les rites a leur source. Le verset dit « sha'a'iri Allahi » — les rites DE Dieu, pas les rites DES hommes. Le champ lexical (rites, pelerinage, Maison, visite pieuse) tourne autour du culte, et Dieu en est le centre. Tout le verset gravite autour de Dieu : les rites sont Ses rites, la Maison est Sa Maison, et en fin de verset Il est reconnaissant et savant.",
              axe2_voisins: "Le verset 157 mentionnait les prieres et la misericorde de Dieu. Le verset 158 precise que les rites appartiennent a Dieu — la misericorde se manifeste aussi dans l'institution des rites. Le verset 159 parlera de ceux qui dissimulent ce que Dieu a fait descendre — dissimuler les rites de Dieu est un acte contre Dieu Lui-meme.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il structure chaque passage legislatif — Dieu est la source de toute legislation. En 2:158, Dieu est le proprietaire des rites. En 2:196, le pelerinage est « pour Dieu ». La sourate montre que tout acte de culte a Dieu comme source et comme destinataire.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:158, la double occurrence souligne que Dieu est a la fois le legislateur (Il institue les rites) et le remunerateur (Il est reconnaissant et savant). Le Coran lie systematiquement l'institution du rite a sa retribution — Dieu ordonne et Dieu recompense.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. Les rites sont Ses rites — le khalifa ne les invente pas, il les recoit et les pratique. Reconnaitre que les rites appartiennent a Dieu c'est reconnaitre que la mission a une source superieure a la volonte humaine."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe de detresse. Le contexte est la possession des rites par Dieu."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet — le mot est le nom propre Allah dans un contexte de possession des rites."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se devouer au culte"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration. Le contexte est l'attribution des rites a Dieu."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["demeurer", "proteger", "chercher refuge"],
              proof_ctx: "Le sens de refuge est hors sujet — le contexte est la possession divine des rites."
            }
          }
        }
      },
      // hjj pos=7
      {
        word_key: "hjj", position: 7, sense_chosen: "pelerinage",
        analysis_axes: {
          sense_chosen: "pelerinage",
          concept_chosen: "Pèlerinage/Preuve",
          concepts: {
            "Pèlerinage/Preuve": {
              status: "retenu",
              senses: ["pelerinage", "argument", "preuve", "disputer"],
              proof_ctx: "Le verbe hajja est un accompli 3MS de la racine h-j-j. Le Lane's donne : faire le pelerinage, se rendre a un lieu sacre pour le visiter, aussi argumenter et prouver. Ici le verbe est dans le contexte du pelerinage a la Maison — hajja al-bayta signifie faire le pelerinage a la Maison sacree. Le Lane's precise que le hajj est un voyage vers un lieu sacre avec l'intention de l'adorer. L'accompli a ici valeur conditionnelle dans la construction « man hajja » (quiconque fait le pelerinage). Le sens de preuve/argument est un autre sens majeur de h-j-j mais ici le contexte est clairement rituel.",
              axe1_verset: "Le verbe hajja introduit la condition principale du verset — quiconque fait le pelerinage a la Maison. Le champ lexical (rites, Maison, visite pieuse, faire le tour) est entierement rituel. Le hajj est le grand pelerinage — il est le contexte dans lequel le sa'y entre Safa et Marwa prend son sens. Le verset lie le hajj au sa'y pour declarer que les deux sont des rites de Dieu.",
              axe2_voisins: "Le verset 157 parlait de la misericorde divine. Le verset 158 passe au cadre concret du pelerinage. Le verset 196 developpera les regles detaillees du hajj. Le verset 158 se situe dans une section de transition — des epreuves et de la patience vers les rites et les prescriptions.",
              axe3_sourate: "La racine h-j-j apparait dans la sourate al-Baqarah sous les deux sens. En 2:76, « pourquoi leur parlez-vous de cela pour qu'ils en fassent un argument (hujjatan) contre vous ? ». En 2:189, « ils t'interrogent sur les nouvelles lunes — dis : ce sont des reperes pour les gens et pour le pelerinage (al-hajj) ». En 2:196, « accomplissez le pelerinage (al-hajja) pour Dieu ». La sourate utilise les deux sens — preuve et pelerinage — montrant que la racine couvre a la fois le voyage sacre et la demonstration intellectuelle.",
              axe4_coherence: "La racine h-j-j apparait environ 35 fois dans le Coran. Le pelerinage est le cinquieme pilier de l'islam. En 3:97, « le pelerinage a la Maison est un devoir envers Dieu pour quiconque en a les moyens ». En 22:27, « appelle les gens au pelerinage — ils viendront vers toi a pied ». Le Coran fait du pelerinage un rassemblement universel — tous convergent vers le meme centre.",
              axe5_frequence: "Pour la mission du khalifa, le pelerinage est l'acte qui rassemble tous les porteurs de la mission au meme endroit. Le hajj est le moment ou le khalifa rejoint la communaute des croyants dans un rite commun. C'est l'acte le plus collectif de la mission — chacun fait le meme geste au meme lieu."
            }
          }
        }
      },
      // byt pos=8
      {
        word_key: "byt", position: 8, sense_chosen: "maison",
        analysis_axes: {
          sense_chosen: "maison",
          concept_chosen: "Demeure/Sanctuaire",
          concepts: {
            "Demeure/Sanctuaire": {
              status: "retenu",
              senses: ["maison", "demeure", "passer la nuit"],
              proof_ctx: "Le mot al-bayta est un nom defini accusatif de la racine b-y-t. Le Lane's donne : maison, demeure, lieu ou l'on passe la nuit. L'article defini (al-) marque que c'est LA Maison par excellence — la Kaaba a La Mecque. Le Lane's precise que le bayt est le lieu qui abrite la nuit, et que la Maison de Dieu (bayt Allah) est le sanctuaire sacre. L'accusatif indique que la Maison est le complement du verbe hajja — on fait le pelerinage A la Maison. La distinction avec « passer la nuit » est que le mot est un nom defini, pas un verbe.",
              axe1_verset: "Le mot al-bayta est l'objet du pelerinage — hajja al-bayta (fait le pelerinage a la Maison). Le champ lexical (rites, pelerinage, visite pieuse) situe la Maison comme le centre du culte. Le verset lie la Maison au sa'y entre Safa et Marwa — les deux rites sont geographiquement et spirituellement lies. La Maison est le centre, les collines sont les annexes.",
              axe2_voisins: "Le verset 125 declarait la Maison comme « lieu de rassemblement et de securite pour les gens ». Le verset 127 montrait Ibrahim et Isma'il elevant les fondations. Le verset 158 ajoute les rites du sa'y a ceux de la Maison — la Maison et ses alentours forment un espace sacre unifie.",
              axe3_sourate: "La racine b-y-t apparait dans la sourate al-Baqarah pour designer la Kaaba. En 2:125, « Nous fimes de la Maison un lieu de rassemblement ». En 2:127, « Ibrahim et Isma'il elevent les fondations de la Maison ». En 2:196, « accomplissez le hajj et la 'umra pour Dieu ». La sourate construit le statut de la Maison pierre par pierre — de sa fondation par Ibrahim a ses rites par les croyants.",
              axe4_coherence: "La racine b-y-t apparait environ 73 fois dans le Coran. En 3:96, « la premiere Maison placee pour les gens est celle de Bakka, benie et guidance pour les mondes ». En 22:26, « Nous installames pour Ibrahim le lieu de la Maison ». Le Coran presente la Maison comme le centre du monde sacre — le point vers lequel tous les rites convergent.",
              axe5_frequence: "Pour la mission du khalifa, la Maison est le lieu central de la mission. Le khalifa est celui qui represente Dieu sur terre — et la Maison est le lieu ou la terre rejoint le divin. Le pelerinage a la Maison est le moment ou le khalifa se presente devant son Mandant."
            }
          }
        }
      },
      // emr pos=10
      {
        word_key: "emr", position: 10, sense_chosen: "visite pieuse",
        analysis_axes: {
          sense_chosen: "visite pieuse",
          concept_chosen: "Vie/Durée",
          concepts: {
            "Vie/Durée": {
              status: "retenu",
              senses: ["vie", "age", "longevite"],
              proof_ctx: "Le verbe i'tamara est un accompli 3MS de la forme VIII de la racine '-m-r. Le Lane's donne : faire la 'umra, la visite pieuse au sanctuaire. La forme VIII (if'tala) indique un acte volontaire et personnel — celui qui fait la 'umra s'engage de sa propre initiative. La 'umra est etymologiquement liee a la vie ('umr) — visiter le sanctuaire c'est donner vie au lieu sacre par sa presence. Le Lane's precise que la 'umra est le petit pelerinage, moins contraint que le hajj mais accompli avec devotion. La distinction avec « peupler/construire » (nul) est que le verbe est a la forme VIII, specifique a la visite pieuse.",
              axe1_verset: "Le verbe i'tamara complete le hajj avec la 'umra — les deux formes de visite au sanctuaire. Le verset dit « man hajja al-bayta aw i'tamara » (quiconque fait le hajj ou la 'umra) — le « ou » montre que les deux cas autorisent le sa'y. Le champ lexical rituel (pelerinage, Maison, rites, faire le tour) englobe les deux types de visite.",
              axe2_voisins: "Le verset 196 developpera les regles de la 'umra : « accomplissez le hajj et la 'umra pour Dieu ». Le verset 158 pose le cadre general — la 'umra comme le hajj sont des occasions de pratiquer le sa'y. La 'umra est mentionnee comme alternative au hajj, ce qui montre sa legitimite propre.",
              axe3_sourate: "La racine '-m-r apparait dans la sourate al-Baqarah en 2:196 pour la 'umra. Le verset 158 est la premiere mention du concept de 'umra dans la sourate — il l'introduit comme une alternative licite au hajj pour la pratique du sa'y. La sourate place la 'umra dans le cadre legislatif du culte.",
              axe4_coherence: "La racine '-m-r dans le sens de 'umra apparait en 2:158 et 2:196. Le Coran ne multiplie pas les mentions de la 'umra — il la place dans le cadre legislatif du pelerinage. En 9:19, « celui qui peuple (ya'muru) les mosquees de Dieu » utilise la meme racine dans le sens de peupler — les deux sens (visiter et peupler) partagent l'idee de rendre un lieu vivant par sa presence.",
              axe5_frequence: "Pour la mission du khalifa, la 'umra est la visite volontaire au lieu sacre — elle n'est pas obligatoire comme le hajj mais elle est meritoire. Le khalifa peut accomplir sa mission au-dela du strict minimum. La 'umra represente l'effort supplementaire, le surplus volontaire que le khalifa apporte a sa mission."
            },
            "Habitation/Construction": {
              status: "nul",
              senses: ["peupler", "construire"],
              proof_ctx: "Le sens de peupler/construire est un autre sens de '-m-r — habiter un lieu et le faire vivre. Le verbe est a la forme VIII (i'tamara), specifique a la visite pieuse, pas a l'habitation."
            }
          }
        }
      },
      // jnh pos=12
      {
        word_key: "jnh", position: 12, sense_chosen: "peche",
        analysis_axes: {
          sense_chosen: "peche",
          concept_chosen: "Inclinaison/Penchant",
          concepts: {
            "Inclinaison/Penchant": {
              status: "retenu",
              senses: ["pencher", "incliner vers"],
              proof_ctx: "Le mot junaha est un nom accusatif de la racine j-n-h. Le Lane's donne : inclination, penchant vers le mal, peche, ce vers quoi on penche quand on devie de la droiture. Le junah est etymologiquement l'inclinaison — le peche est ce vers quoi on penche quand on quitte la ligne droite. Le Lane's precise que le junah est aussi l'aile (janah), car l'aile est ce qui penche d'un cote. Ici le mot est dans la negation « la junaha 'alayhi » (nul peche sur lui) — le verset leve un interdit presume en declarant qu'il n'y a pas de penchant coupable dans le sa'y.",
              axe1_verset: "Le mot junaha est le coeur de la permission coranique — « la junaha 'alayhi an yattawwafa bi-hima » (nul peche pour lui de faire le tour entre elles). Le verset repond a une preoccupation : certains pensaient que le sa'y entre Safa et Marwa etait un peche (car ce rite existait avant l'islam). Le Coran leve le doute — il n'y a pas d'inclinaison coupable dans ce rite car il fait partie des rites de Dieu.",
              axe2_voisins: "Le verset 157 parlait de la misericorde de Dieu. Le verset 158 leve un interdit presume — la misericorde se manifeste aussi dans le fait de rassurer les croyants. Le verset 159 condamnera ceux qui dissimulent. La levee du peche dans le verset 158 contraste avec la condamnation du verset suivant.",
              axe3_sourate: "La racine j-n-h apparait dans la sourate al-Baqarah dans des contextes de permission. En 2:229, « nul peche pour eux deux si elle se rachete ». En 2:233, « nul peche pour vous si vous confiez l'allaitement ». En 2:236, « nul peche pour vous si vous divorcez ». La formule « la junaha » est une formule legislative de permission — le Coran l'utilise pour lever des interdits presumes.",
              axe4_coherence: "La racine j-n-h apparait environ 20 fois dans le Coran. La formule « la junaha 'alayhi/alayhima/alaykum » est un idiome coranique de permission. En 4:101, « nul peche pour vous si vous raccourcissez la priere ». En 33:55, « nul peche pour elles ». Le Coran utilise cette formule pour rassurer — ce qui pourrait paraitre interdit ne l'est pas.",
              axe5_frequence: "Pour la mission du khalifa, la levee du peche montre que Dieu facilite la mission. Le khalifa n'a pas a craindre de pecher en pratiquant les rites que Dieu a institues. La mission est balisee par des permissions claires — Dieu ne laisse pas le khalifa dans le doute sur ce qui est permis ou interdit."
            },
            "Aile/Côté": {
              status: "nul",
              senses: ["aile", "cote"],
              proof_ctx: "Le sens d'aile est un sens concret de j-n-h — l'aile est ce qui penche lateralement. Le contexte est la levee d'un interdit, pas l'anatomie."
            }
          }
        }
      },
      // twf pos=14
      {
        word_key: "twf", position: 14, sense_chosen: "faire le tour",
        analysis_axes: {
          sense_chosen: "faire le tour",
          concept_chosen: "Circumambulation/Visite",
          concepts: {
            "Circumambulation/Visite": {
              status: "retenu",
              senses: ["tourner autour", "tawaf", "circuler"],
              proof_ctx: "Le verbe yattawwafa est un inaccompli 3MS de la forme V de la racine t-w-f. Le Lane's donne : tourner autour, faire le tour, circumambuler. La forme V (tafa''ala) indique un effort delibere et repetitif — le tawaf n'est pas un passage unique mais un mouvement circulaire complet et intentionnel. Le Lane's precise que le tawaf autour de la Kaaba est le rite de circumambulation. Ici le verbe est dans le contexte du sa'y entre Safa et Marwa — « yattawwafa bi-hima » (fait le tour entre elles deux). L'inaccompli marque que l'action est en cours ou habituelle.",
              axe1_verset: "Le verbe yattawwafa est l'action permise par le verset — c'est le sa'y entre Safa et Marwa qui est declare sans peche. Le champ lexical (rites, pelerinage, Maison) situe le tawaf dans le cadre du culte. Le verset leve le doute sur la licéite de cette circumambulation — elle fait partie des rites de Dieu.",
              axe2_voisins: "Le verset 125 mentionnait « purifiez Ma Maison pour ceux qui tournent autour » (li-t-ta'ifina). Le verset 158 utilise la meme racine pour le sa'y entre les collines. Les versets voisins montrent que le tawaf est un acte central du pelerinage — qu'il soit autour de la Maison ou entre les collines.",
              axe3_sourate: "La racine t-w-f apparait dans la sourate al-Baqarah en 2:125 et 2:158. En 2:125, le tawaf est autour de la Maison. En 2:158, il est entre Safa et Marwa. La sourate montre que le mouvement circulaire est un acte de devotion — tourner autour du centre sacre est un rite qui structure le pelerinage.",
              axe4_coherence: "La racine t-w-f apparait environ 30 fois dans le Coran. En 22:29, « qu'ils fassent le tawaf autour de la Maison antique ». En 52:24, « des ephèbes tourneront autour d'eux ». En 56:17, « des garcons tourneront parmi eux ». Le Coran utilise t-w-f pour le mouvement circulaire rituel et pour le service — tourner autour de quelqu'un c'est le servir.",
              axe5_frequence: "Pour la mission du khalifa, le tawaf est l'acte de graviter autour du centre sacre. Le khalifa est celui qui tourne autour de la verite — il ne s'en eloigne pas, il y revient constamment. Le mouvement circulaire du tawaf est un modele pour la mission : revenir sans cesse au centre, a la source, a Dieu."
            }
          }
        }
      },
      // twe pos=16
      {
        word_key: "twe", position: 16, sense_chosen: "faire volontairement",
        analysis_axes: {
          sense_chosen: "faire volontairement",
          concept_chosen: "Obéissance/Soumission volontaire",
          concepts: {
            "Obéissance/Soumission volontaire": {
              status: "retenu",
              senses: ["obeir", "se soumettre volontairement", "consentir"],
              proof_ctx: "Le verbe tatawwa'a est un accompli 3MS de la forme V de la racine t-w-'. Le Lane's donne : faire de son plein gre, obeir volontairement, consentir librement. La forme V (tafa''ala) indique un effort personnel et delibere — le tatawwu' est l'acte surérogatoire, ce qu'on fait au-dela de l'obligation. Le Lane's precise que le tatawwu' est l'inverse de la contrainte — c'est l'acte libre par excellence. Ici le verset dit « man tatawwa'a khayran » (quiconque fait le bien volontairement) — l'acte est libre, non contraint, et porte sur le bien.",
              axe1_verset: "Le verbe tatawwa'a introduit la deuxieme partie du verset — apres la permission du sa'y, le verset encourage le bien volontaire. Le champ lexical passe du rituel (rites, pelerinage) a l'ethique (bien, reconnaissant, savant). Le verset lie le rite au bien — pratiquer les rites c'est faire le bien, et Dieu reconnait le bien fait librement.",
              axe2_voisins: "Le verset 157 parlait de la patience face aux epreuves. Le verset 158 complete avec le bien volontaire — la patience est subie, le bien est choisi. Le verset 159 parlera de ceux qui dissimulent. Faire le bien volontairement contraste avec la dissimulation — la volonte libre s'oppose a la tromperie.",
              axe3_sourate: "La racine t-w-' apparait dans la sourate al-Baqarah dans le contexte de l'obeissance. En 2:184, « quiconque fait le bien volontairement (tatawwa'a), c'est meilleur pour lui ». Le verset 158 reprend la meme formule — la sourate insiste sur la valeur de l'acte surérogatoire, celui qui depasse le minimum requis.",
              axe4_coherence: "La racine t-w-' apparait environ 20 fois dans le Coran. En 3:83, « tout ce qui est dans les cieux et la terre se soumet (aslamat) de gre (taw'an) ou de force (karhan) ». En 41:11, « nous venons obeissantes (ta'i'ina) ». Le Coran oppose le gre (taw') a la force (karh) — l'obeissance volontaire est superieure a l'obeissance contrainte.",
              axe5_frequence: "Pour la mission du khalifa, le bien volontaire est le coeur de la mission. Le khalifa n'est pas contraint — il choisit librement d'accomplir sa mission. Le tatawwu' est le surplus de bien que le khalifa apporte au-dela de l'obligation stricte. C'est ce surplus qui distingue le khalifa accompli du khalifa negligent."
            },
            "Capacité/Pouvoir": {
              status: "nul",
              senses: ["etre capable", "pouvoir"],
              proof_ctx: "Le sens de capacite est un sens secondaire de t-w-'. Le verbe est a la forme V (tatawwa'a) qui specifie l'acte volontaire, pas la capacite."
            }
          }
        }
      },
      // ḫyr pos=17
      {
        word_key: "\u1e2byr", position: 17, sense_chosen: "bien",
        analysis_axes: {
          sense_chosen: "bien",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "meilleur", "bon"],
              proof_ctx: "Le mot khayran est un nom accusatif indefini de la racine kh-y-r. Le Lane's donne : bien, ce qui est bon, benefique, meilleur. Le khayr est l'oppose du sharr (mal) — c'est ce qui est conforme a l'ordre voulu par Dieu. Le Lane's precise que le khayr est ce dont tout le monde reconnait la valeur. L'accusatif indefini (khayran, sans article) indique un bien quelconque — tout acte de bien, sans restriction ni specification. Le verset dit « man tatawwa'a khayran » (quiconque fait un bien volontairement) — le bien est l'objet de l'acte volontaire.",
              axe1_verset: "Le mot khayran est l'objet du bien volontaire — tatawwa'a khayran (fait le bien volontairement). Le champ lexical passe du rituel a l'ethique — le bien englobe les rites et les depasse. Le verset montre que le bien volontaire est recompense par Dieu qui est reconnaissant et savant. Le bien est indéfini — tout acte de bien, pas seulement les rites.",
              axe2_voisins: "Le verset 157 parlait de la patience. Le verset 158 parle du bien volontaire. Le verset 159 condamnera ceux qui dissimulent le bien (les signes clairs). La sequence montre un contraste : faire le bien volontairement vs dissimuler le bien revele — les deux attitudes opposees face au bien.",
              axe3_sourate: "La racine kh-y-r est une racine majeure de la sourate al-Baqarah. En 2:105, « Dieu choisit de Sa misericorde qui Il veut ». En 2:110, « ce que vous faites de bien pour vous-memes, vous le retrouverez aupres de Dieu ». En 2:184, « quiconque fait le bien volontairement, c'est meilleur pour lui ». La sourate repete que le bien fait sera retrouve — Dieu ne perd pas le bien.",
              axe4_coherence: "La racine kh-y-r apparait environ 176 fois dans le Coran. Le khayr est un theme central — en 2:180, « s'il laisse du bien (khayran), le testament ». En 99:7, « quiconque fait un atome de bien le verra ». Le Coran promet que tout bien, meme minime, sera vu et retribue par Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le bien est l'objet meme de la mission. Le khalifa est charge de faire le bien sur terre — c'est sa raison d'etre. Le khayr indefini montre que tout bien compte — pas seulement les grands actes mais chaque geste positif. Le khalifa accompli est celui qui multiplie les biens volontaires."
            },
            "Choix/Préférence": {
              status: "nul",
              senses: ["choisir", "preferer"],
              proof_ctx: "Le sens de choix est un sens derive de kh-y-r — choisir c'est prendre le meilleur. Le contexte est le bien comme objet de l'acte volontaire, pas le choix entre options."
            }
          }
        }
      },
      // alh pos=19 (2e occurrence)
      {
        word_key: "alh", position: 19, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allaha est le nom propre de la divinite a l'accusatif, deuxieme occurrence dans le verset. Le Lane's donne : Dieu, la divinite unique. Ici Allah est le sujet de la phrase nominale « fa-inna Allaha shakirun 'alimun » (alors Dieu est reconnaissant, savant). Dieu passe du role de legislateur (les rites sont Ses rites) au role de remunerateur (Il reconnait le bien fait). La double occurrence structure le verset : debut — les rites de Dieu, fin — Dieu est reconnaissant.",
              axe1_verset: "Le nom Allah en deuxieme occurrence ferme le verset en qualifiant Dieu comme reconnaissant et savant. Le verset passe de la legislation (les rites, le pelerinage) a la retribution (Dieu reconnait le bien). Le champ lexical final (bien, reconnaissant, savant) montre que Dieu ne se contente pas d'ordonner — Il retribue celui qui obeit volontairement.",
              axe2_voisins: "Le verset 157 qualifiait Dieu par Ses prieres et Sa misericorde. Le verset 158 Le qualifie par Sa reconnaissance et Sa science. Le verset 159 Le montrera maudissant ceux qui dissimulent. Les trois versets presentent trois visages de Dieu : misericordieux, reconnaissant, et juste dans Sa condamnation.",
              axe3_sourate: "Le nom Allah clot de nombreux versets de la sourate al-Baqarah avec des attributs divins. En 2:115, « Dieu est vaste et savant ». En 2:127, « Tu es l'Audient, le Savant ». En 2:158, « Dieu est reconnaissant et savant ». La sourate conclut ses versets legislatifs par les attributs qui garantissent la justice de la legislation.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. La paire « shakirun 'alimun » (reconnaissant, savant) apparait en 2:158 et 4:147. La paire « shakurun halimun » (tres reconnaissant, clement) apparait en 35:30. Le Coran qualifie Dieu de reconnaissant pour montrer qu'Il ne perd pas le bien fait — Il le voit, le reconnait et le retribue.",
              axe5_frequence: "Pour la mission du khalifa, savoir que Dieu est reconnaissant et savant motive l'effort. Le khalifa sait que son bien volontaire ne sera pas perdu — Dieu le voit meme s'il est cache. La reconnaissance divine est le carburant de la mission — le khalifa agit parce qu'il sait que Dieu reconnait."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe de detresse. Le contexte est la qualification de Dieu comme reconnaissant et savant."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet — le mot est le nom propre Allah dans un contexte de retribution."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se devouer au culte"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration. Le contexte est la qualification divine."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["demeurer", "proteger", "chercher refuge"],
              proof_ctx: "Le sens de refuge est hors sujet — le contexte est la reconnaissance et la science divines."
            }
          }
        }
      },
      // škr pos=20
      {
        word_key: "\u0161kr", position: 20, sense_chosen: "reconnaissant",
        analysis_axes: {
          sense_chosen: "reconnaissant",
          concept_chosen: "Gratitude/Reconnaissance",
          concepts: {
            "Gratitude/Reconnaissance": {
              status: "retenu",
              senses: ["remercier", "gratitude", "reconnaissance", "louange"],
              proof_ctx: "Le mot shakirun est un participe actif nominatif indefini de la racine sh-k-r. Le Lane's donne : remercier, etre reconnaissant, louer pour un bienfait recu. Le shakir est celui qui reconnait le bienfait et le retribue. Le Lane's precise que le shukr est l'oppose du kufr (ingratitude) — etre reconnaissant c'est reconnaitre ce qu'on a recu. Ici Dieu est qualifie de shakir — Il reconnait le bien fait par Ses serviteurs. L'indefini (shakirun, sans article) a valeur de predication — Dieu EST reconnaissant par nature, pas seulement dans un cas particulier.",
              axe1_verset: "Le mot shakirun qualifie Dieu en fin de verset — « Allaha shakirun 'alimun » (Dieu est reconnaissant, savant). Le champ lexical final (bien, volontairement, reconnaissant, savant) forme un ensemble ethique : le bien volontaire est reconnu par Dieu. La reconnaissance divine est la reponse au bien humain — le verset garantit que le bien fait ne sera pas perdu.",
              axe2_voisins: "Le verset 157 qualifiait Dieu par la misericorde. Le verset 158 Le qualifie par la reconnaissance. Le verset 159 Le montrera maudissant. Les versets montrent que Dieu reagit en fonction des actes humains — misericordieux envers les patients, reconnaissant envers les bienfaisants, maudissant envers les dissimulateurs.",
              axe3_sourate: "La racine sh-k-r apparait dans la sourate al-Baqarah pour encourager la gratitude. En 2:152, « souvenez-vous de Moi et Je me souviendrai de vous — soyez reconnaissants (ushkuru) et ne soyez pas ingrats ». En 2:172, « soyez reconnaissants a Dieu ». La sourate insiste sur la gratitude comme reponse juste aux bienfaits divins. En 2:158, c'est Dieu Lui-meme qui est reconnaissant — la gratitude est une qualite partagee.",
              axe4_coherence: "La racine sh-k-r apparait environ 75 fois dans le Coran. L'attribut « shakir/shakur » pour Dieu apparait en 2:158, 4:147, 35:30, 42:23. Le Coran presente Dieu comme reconnaissant — Il ne perd pas le bien fait par Ses serviteurs. L'oppose est le kufr (ingratitude) — le kafir est celui qui nie les bienfaits recus.",
              axe5_frequence: "Pour la mission du khalifa, la reconnaissance divine est la garantie de la mission. Le khalifa sait que Dieu est reconnaissant — chaque acte de bien sera reconnu et retribue. Cette certitude motive l'effort constant — le khalifa ne travaille pas dans le vide mais sous le regard d'un Mandant reconnaissant."
            },
            "Rétribution": {
              status: "nul",
              senses: ["recompenser"],
              proof_ctx: "Le sens de retribution est un sens derive de sh-k-r — la reconnaissance mene a la recompense. Le mot est un participe actif (reconnaissant), pas un verbe de retribution."
            }
          }
        }
      },
      // elm pos=21
      {
        word_key: "elm", position: 21, sense_chosen: "savant",
        analysis_axes: {
          sense_chosen: "savant",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le mot 'alimun est un adjectif nominatif indefini de la racine '-l-m. Le Lane's donne : savant, qui sait, qui connait. Le 'alim est celui qui possede la science — la connaissance est un etat permanent chez celui qui sait. Le Lane's precise que la racine '-l-m porte le sens de marquer et de connaitre — savoir c'est marquer quelque chose dans l'esprit. Ici Dieu est qualifie de 'alim — Il sait tout, rien ne Lui echappe. L'indefini ('alimun, sans article) a valeur de predication absolue — Dieu EST savant par essence.",
              axe1_verset: "Le mot 'alimun clot le verset en qualifiant Dieu — « shakirun 'alimun » (reconnaissant, savant). Les deux attributs se completent : Dieu est reconnaissant (Il retribue le bien) ET savant (Il connait le bien meme s'il est cache). Le verset garantit que rien ne Lui echappe — le bien volontaire, meme discret, est connu de Dieu.",
              axe2_voisins: "Le verset 157 parlait de la misericorde. Le verset 158 clot par la science divine. Le verset 159 condamnera ceux qui dissimulent — la dissimulation est vaine devant un Dieu savant. La science divine rend la dissimulation absurde — comment cacher quelque chose a Celui qui sait tout ?",
              axe3_sourate: "La racine '-l-m est une des racines les plus frequentes de la sourate al-Baqarah. En 2:29, « Il est de toute chose savant ». En 2:32, « Tu es le Savant, le Sage ». En 2:115, « Dieu est vaste et savant ». La sourate qualifie Dieu de savant dans de nombreux contextes — la science divine est un attribut recurrent qui structure la sourate.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran — c'est une des racines les plus frequentes. L'attribut 'alim pour Dieu est un des attributs les plus recurrents — il apparait des centaines de fois. Le Coran insiste sur la science divine pour rassurer (Dieu connait le bien) et pour avertir (Dieu connait le mal). En 2:158, la science est associee a la reconnaissance — Dieu sait ET reconnait.",
              axe5_frequence: "Pour la mission du khalifa, la science divine est la garantie que la mission est vue. Le khalifa ne travaille pas dans l'ombre — Dieu est savant et connait chaque effort. Cette science est aussi un avertissement — rien n'echappe a Dieu, ni le bien ni le mal. Le khalifa agit en sachant qu'il est observe par Celui qui sait tout."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["levre fendue", "marquer", "signe", "drapeau", "montagne", "repere", "etendard"],
              proof_ctx: "Le sens de signe/marque est un sens secondaire de '-l-m lie aux reperes physiques. Le contexte est un attribut divin (savant), pas un signe visible."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["univers", "monde", "ensemble des creatures", "les mondes"],
              proof_ctx: "Le sens de monde est un sens nominal de '-l-m — le monde est ce par quoi on connait le Createur. Le contexte est un adjectif qualifiant Dieu, pas un nom designant l'univers."
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

  const verseIds = [165];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 158 ===\n');
  await processVerse(158);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V158 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
