const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 114, 115, 116
// V114: verse_id=121, analysis_id=481
// V115: verse_id=122, analysis_id=479
// V116: verse_id=123, analysis_id=480
// =====================================================

const verseData = {
  114: {
    verse_id: 121,
    analysis_id: 481,
    translation_arab: "Et qui est plus injuste que celui qui a empeche les lieux de prosternation de Dieu qu'y soit mentionne Son nom, et qui s'est efforce a leur ruine? Ceux-la, il ne leur appartenait pas d'y entrer sauf apeures. A eux dans l'ici-bas une ignominie, et a eux dans l'au-dela un chatiment immense.",
    full_translation: "Qui est plus injuste que celui qui empeche que dans les mosquees d'Allah, on mentionne Son Nom, et qui s'efforce a les detruire? De tels gens ne devraient y entrer qu'apeures. Pour eux, ignominie ici-bas, et dans l'au-dela un enorme chatiment.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par une question rhetorique : « wa-man azlamu » — et qui est plus injuste ? La forme af'alu (elatif) de la racine z-l-m indique le superlatif absolu : personne n'est plus injuste que celui-la. Le pronom interrogatif « man » de la racine m-n-y pose la question sur l'identite. Le verbe « mana'a » est un accompli 3MS de la racine m-n-a'. Le Lane's donne : empecher, interdire, priver. L'accompli marque que l'interdiction a eu lieu — c'est un acte acheve. L'objet de l'interdiction est « masajida Allahi » — les lieux de prosternation de Dieu. Le mot masajid est un pluriel de masjid, nom de lieu de la racine s-j-d. Le Lane's donne : lieu ou l'on se prosterne. Le pluriel marque que l'interdiction est generalisee — pas un seul lieu mais tous les lieux de prosternation. L'idafa avec Allah rattache ces lieux a Dieu comme proprietaire. Le verbe passif « yudhkara » est un inaccompli passif 3MS de la racine dh-k-r. Le Lane's donne : mentionner, rappeler, se souvenir. Le passif indique que le nom de Dieu est mentionne — la mention est une action dirigee vers Dieu. L'inaccompli avec « an » forme un masdar mu'awwal — l'action empechee est que le nom de Dieu soit mentionne en continu. Le mot « ismuhu » est un nom singulier de la racine s-m-w avec pronom suffixe 3MS. Le Lane's donne : nom, designation. Le pronom « hu » renvoie a Dieu. Le verbe « sa'a » est un accompli 3MS de la racine s-'-y. Le Lane's donne : s'efforcer, marcher vers, travailler a. L'accompli marque que l'effort est acheve. Le nom « kharabiha » est un nom singulier de la racine kh-r-b avec pronom suffixe feminin. Le Lane's donne : ruine, destruction, etat de devastation. Le pronom feminin « ha » renvoie aux masajid (feminin pluriel). Le demonstratif « ula'ika » est un pronom demonstratif eloigne pluriel de la racine a-l-k. Le Lane's donne : ceux-la. Il designe les oppresseurs mentionnes. Le verbe « kana » est un accompli 3MS de la racine k-w-n. Le Lane's donne : etre. Avec la negation « ma », « ma kana lahum » signifie « il ne leur appartenait pas ». Le verbe « yadkhuluha » est un inaccompli 3MP de la racine d-kh-l avec pronom suffixe feminin. Le Lane's donne : entrer, penetrer. L'inaccompli avec « an » exprime la possibilite — ils ne devraient pas y entrer. Le mot « kha'ifina » est un participe actif pluriel accusatif de la racine kh-w-f. Le Lane's donne : craindre, avoir peur. Le participe actif designe un etat permanent — ils sont dans la crainte. L'exception « illa » (sauf) + participe actif signifie que s'ils entrent, ce sera seulement dans la peur. Le nom « khizyun » est un nom singulier indefini de la racine kh-z-y. Le Lane's donne : ignominie, honte, deshonneur. Le nom « al-dunya » est un nom feminin singulier defini de la racine d-n-w. Le Lane's donne : la plus proche, l'ici-bas. Le monde d'ici-bas est le monde le plus proche. Le nom « 'adhabun » est un nom singulier indefini de la racine '-dh-b. Le Lane's donne : chatiment, punition. Le mot « 'azimun » est un adjectif singulier indefini de la racine '-z-m. Le Lane's donne : immense, enorme, grandiose. L'indefini (sans article) renforce l'intensite — un chatiment immense sans limite definie. Le nom « al-akhirah » est un nom feminin singulier defini de la racine a-kh-r. Le Lane's donne : la derniere, l'au-dela. Le verset oppose la dunya (ici-bas) et l'akhirah (au-dela) — le chatiment est double.

§JUSTIFICATION§
**injuste** — Le sens retenu est « injustice/oppression ». Le mot azlamu est un elatif (superlatif) de la racine z-l-m. L'alternative « obscurite » est ecartee car le contexte est moral (injustice envers les lieux de culte), pas physique.

**empeche** — Le sens retenu est « empecher/interdire ». Le verbe mana'a designe l'acte d'interdiction active. L'alternative « proteger » (sens positif de la meme racine) est ecartee car le contexte est negatif — il s'agit d'empecher la mention du nom de Dieu.

**lieux de prosternation** — Le sens retenu est « lieu de prosternation ». Le mot masajid designe les endroits ou l'on se prosterne. L'alternative « mosquee » (sens moderne) est ecartee car le mot coranique est plus large — tout lieu ou l'on se prosterne pour Dieu.

**mentionne** — Le sens retenu est « mentionner/rappeler ». Le verbe yudhkara au passif designe la mention du nom de Dieu. L'alternative « male » (autre sens de dh-k-r) est ecartee car le contexte est la mention du nom, pas le genre.

**s'est efforce** — Le sens retenu est « s'efforcer ». Le verbe sa'a designe l'effort delibere et soutenu vers un objectif. L'alternative « marcher » est ecartee car le sens ici est figuratif — l'effort vers la destruction.

**ruine** — Le sens retenu est « ruine/destruction ». Le mot kharab designe l'etat de devastation. C'est le seul sens de cette racine — le choix est immediat.

**apeurés** — Le sens retenu est « craindre/avoir peur ». Le mot kha'ifin est un participe actif pluriel designant ceux qui sont dans la crainte. L'alternative « effrayer » (forme causative) est ecartee car le participe decrit l'etat interieur de peur, pas l'acte d'effrayer.

**ignominie** — Le sens retenu est « honte/humiliation ». Le mot khizy designe le deshonneur public. C'est le seul sens principal de cette racine.

**chatiment** — Le sens retenu est « chatiment/punition ». Le mot 'adhab designe la punition infligee. L'alternative « douceur » (autre sens de '-dh-b) est ecartee car le contexte est le chatiment des oppresseurs.

**immense** — Le sens retenu est « grandeur/importance ». Le mot 'azim qualifie le chatiment comme d'une ampleur extreme. L'alternative « os/squelette » est ecartee car le mot est un adjectif de grandeur.

§CRITIQUE§
Les traductions courantes rendent toutes « masajid » par « mosquees ». Notre choix de « lieux de prosternation » est plus fidele a la racine s-j-d qui porte le sens de prosternation, pas de batiment specifique. La notion de lieu de prosternation est plus large que la mosquee comme institution — tout endroit ou l'on se prosterne pour Dieu est un masjid. Cette precision n'est pas un detail : elle change la portee du verset. L'interdiction ne vise pas un batiment mais une fonction — la prosternation pour Dieu, ou qu'elle se pratique. Les traductions rendent « sa'a fi kharabiha » par « s'efforce a les detruire » — notre « s'est efforce a leur ruine » est plus proche de l'original car kharab est un nom d'etat (la ruine) et non un verbe d'action (detruire).`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "qui", pos: "nom", phon: "man", arabic: "\u0645\u064e\u0646", word_key: "mny", is_particle: false, sense_retenu: "qui", position: 1 },
      { fr: "plus injuste", pos: "adjectif", phon: "azlamu", arabic: "\u0623\u064e\u0638\u0652\u0644\u064e\u0645\u064f", word_key: "zlm", is_particle: false, sense_retenu: "injustice", position: 2 },
      { fr: "de qui", phon: "mimman", arabic: "\u0645\u0650\u0645\u0651\u064e\u0646", is_particle: true, position: 3 },
      { fr: "a empeche", pos: "verbe", phon: "mana'a", arabic: "\u0645\u064e\u0646\u064e\u0639\u064e", word_key: "mna", is_particle: false, sense_retenu: "empecher", position: 4 },
      { fr: "lieux de prosternation", pos: "nom", phon: "masajida", arabic: "\u0645\u064e\u0633\u064e\u0640\u0670\u062c\u0650\u062f\u064e", word_key: "sjd", is_particle: false, sense_retenu: "lieu de prosternation", position: 5 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 6 },
      { fr: "que", phon: "'an", arabic: "\u0623\u064e\u0646", is_particle: true, position: 7 },
      { fr: "soit mentionne", pos: "verbe", phon: "yudhkara", arabic: "\u064a\u064f\u0630\u0652\u0643\u064e\u0631\u064e", word_key: "dhkr", is_particle: false, sense_retenu: "mentionner", position: 8 },
      { fr: "dans elles", phon: "fiha", arabic: "\u0641\u0650\u064a\u0647\u064e\u0627", is_particle: true, position: 9 },
      { fr: "Son nom", pos: "nom", phon: "ismuhu", arabic: "\u0671\u0633\u0652\u0645\u064f\u0647\u064f\u06e5", word_key: "smw", is_particle: false, sense_retenu: "nom", position: 10 },
      { fr: "et s'est efforce", pos: "verbe", phon: "wa sa'a", arabic: "\u0648\u064e\u0633\u064e\u0639\u064e\u0649\u0670", word_key: "sey", is_particle: false, sense_retenu: "s'efforcer", position: 11 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 12 },
      { fr: "leur ruine", pos: "nom", phon: "kharabiha", arabic: "\u062e\u064e\u0631\u064e\u0627\u0628\u0650\u0647\u064e\u0627\u0653", word_key: "krb", is_particle: false, sense_retenu: "ruine", position: 13 },
      { fr: "ceux-la", pos: "nom", phon: "ula'ika", arabic: "\u0623\u064f\u0648\u06df\u0644\u064e\u0640\u0670\u0653\u0626\u0650\u0643\u064e", word_key: "alk", is_particle: false, sense_retenu: "ceux-la", position: 14 },
      { fr: "ne... pas", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 15 },
      { fr: "il etait", pos: "verbe", phon: "kana", arabic: "\u0643\u064e\u0627\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 16 },
      { fr: "pour eux", pos: "nom", phon: "lahum", arabic: "\u0644\u064e\u0647\u064f\u0645\u0652", word_key: "lhm", is_particle: false, sense_retenu: "pour eux", position: 17 },
      { fr: "que", phon: "'an", arabic: "\u0623\u064e\u0646", is_particle: true, position: 18 },
      { fr: "ils y entrent", pos: "verbe", phon: "yadkhuluha", arabic: "\u064a\u064e\u062f\u0652\u062e\u064f\u0644\u064f\u0648\u0647\u064e\u0627\u0653", word_key: "dxl", is_particle: false, sense_retenu: "entrer", position: 19 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 20 },
      { fr: "apeurés", pos: "participe_actif", phon: "kha'ifin", arabic: "\u062e\u064e\u0627\u0653\u0626\u0650\u0641\u0650\u064a\u0646\u064e", word_key: "khwf", is_particle: false, sense_retenu: "craindre", position: 21 },
      { fr: "a eux", pos: "nom", phon: "lahum", arabic: "\u0644\u064e\u0647\u064f\u0645\u0652", word_key: "lhm", is_particle: false, sense_retenu: "pour eux", position: 22 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 23 },
      { fr: "l'ici-bas", pos: "nom", phon: "ad-dunya", arabic: "\u0671\u0644\u062f\u0651\u064f\u0646\u0652\u064a\u064e\u0627", word_key: "dnw", is_particle: false, sense_retenu: "ici-bas", position: 24 },
      { fr: "une ignominie", pos: "nom", phon: "khizyun", arabic: "\u062e\u0650\u0632\u0652\u0649\u064c", word_key: "khzy", is_particle: false, sense_retenu: "ignominie", position: 25 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 26 },
      { fr: "a eux", pos: "nom", phon: "lahum", arabic: "\u0644\u064e\u0647\u064f\u0645\u0652", word_key: "lhm", is_particle: false, sense_retenu: "pour eux", position: 27 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 28 },
      { fr: "l'au-dela", pos: "nom", phon: "al-akhirah", arabic: "\u0671\u0644\u0652\u0640\u064e\u0654\u0627\u062e\u0650\u0631\u064e\u0629\u0650", word_key: "axr", is_particle: false, sense_retenu: "au-dela", position: 29 },
      { fr: "un chatiment", pos: "nom", phon: "'adhabun", arabic: "\u0639\u064e\u0630\u064e\u0627\u0628\u064c", word_key: "edb", is_particle: false, sense_retenu: "chatiment", position: 30 },
      { fr: "immense", pos: "adjectif", phon: "'azimun", arabic: "\u0639\u064e\u0638\u0650\u064a\u0645\u064c", word_key: "ezm", is_particle: false, sense_retenu: "immense", position: 31 }
    ],
    words: [
      // mny pos=1 — "man" = qui (pronom interrogatif/relatif)
      {
        word_key: "mny", position: 1, sense_chosen: "qui",
        analysis_axes: {
          sense_chosen: "qui",
          concept_chosen: "Désir/Espérance",
          concepts: {
            "Désir/Espérance": {
              status: "retenu",
              senses: ["souhaiter", "desirer", "esperer"],
              proof_ctx: "Le mot man est un pronom interrogatif/relatif qui sert a poser la question « qui ? ». Bien que la racine m-n-y porte les sens de desir et d'esperance dans le Lane's, le mot man dans l'usage coranique fonctionne comme un pronom fixe. Ici « wa-man azlamu » signifie « et qui est plus injuste ? ». La question rhetorique utilise man pour interroger sur l'identite — personne n'est plus injuste. Le concept de desir est retenu car c'est le seul concept non-nul disponible pour cette racine dans les donnees.",
              axe1_verset: "Le mot man ouvre la question rhetorique qui structure tout le verset. « Wa-man azlamu mimman » (et qui est plus injuste que celui qui) est une formule coranique classique. Le pronom interrogatif man sert a poser une question dont la reponse est : personne. Le champ lexical du verset (injustice, empecher, lieux de prosternation, ruine) montre que la question porte sur l'identite du plus grand oppresseur. Le verset repond implicitement : personne n'est plus injuste que celui qui empeche la mention du nom de Dieu.",
              axe2_voisins: "Le verset 113 parlait des disputes entre juifs et chretiens — chacun niant la legitimite de l'autre. Le verset 114 enchaine avec une question rhetorique sur l'injustice supreme : empecher la prosternation pour Dieu. Le verset 115 repondra que l'Est et l'Ouest appartiennent a Dieu. La question « qui est plus injuste ? » est un pivot entre les querelles sectaires et l'affirmation de l'universalite divine.",
              axe3_sourate: "La formule « wa-man azlamu » apparait plusieurs fois dans le Coran et dans la sourate al-Baqarah. Elle sert a designer le comble de l'injustice — le degre le plus eleve de transgression. La sourate al-Baqarah utilise cette formule pour montrer que certaines actions depassent toute mesure d'injustice. Empecher la prosternation pour Dieu est presente comme le sommet de l'injustice.",
              axe4_coherence: "Le pronom man dans la formule « man azlamu » apparait en 2:114, 6:21, 6:93, 6:144, 7:37, 10:17, 11:18, 18:57, 29:68, 32:22, 39:32, 61:7. Le Coran utilise cette question rhetorique pour designer differents sommets d'injustice : mentir sur Dieu, rejeter Ses signes, empecher Ses lieux de prosternation. Chaque occurrence de « man azlamu » pointe vers une forme specifique d'injustice supreme.",
              axe5_frequence: "Pour la mission du khalifa, la question « qui est plus injuste ? » rappelle que certaines actions sont intrinsequement les plus graves. Empecher la prosternation pour Dieu est le comble de l'injustice car cela bloque la connexion entre le khalifa et sa source. Le khalifa doit maintenir les lieux de prosternation ouverts — les fermer c'est detruire le lien entre l'humanite et Dieu."
            },
            "Semence": {
              status: "nul",
              senses: ["sperme"],
              proof_ctx: "Le sens de semence est hors sujet — le mot man est un pronom interrogatif, pas un nom designant une substance physique."
            }
          }
        }
      },
      // zlm pos=2
      {
        word_key: "zlm", position: 2, sense_chosen: "injustice",
        analysis_axes: {
          sense_chosen: "injustice",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["opprimer", "etre injuste", "injustice", "oppresseur"],
              proof_ctx: "Le mot azlamu est un elatif (superlatif) de la racine z-l-m. Le Lane's donne : etre injuste, opprimer, placer une chose hors de sa place. L'elatif af'alu indique le degre le plus eleve — le plus injuste. Ici la question rhetorique « wa-man azlamu » signifie que personne n'atteint ce degre d'injustice. La distinction avec l'obscurite (probable) est que le contexte est moral — l'acte d'empecher la prosternation — pas physique.",
              axe1_verset: "Le mot azlamu qualifie l'acte principal du verset — empecher la mention du nom de Dieu dans Ses lieux de prosternation. Le champ lexical (empecher, lieux de prosternation, ruine, chatiment) montre que l'injustice est definie comme l'obstruction du lien entre l'humain et Dieu. L'elatif (superlatif) indique que cette forme d'injustice est la pire de toutes. Le verset ne dit pas simplement « injuste » mais « le plus injuste » — c'est le sommet de la transgression.",
              axe2_voisins: "Le verset 113 montrait des groupes qui se nient mutuellement l'acces au paradis. Le verset 114 monte d'un cran : non seulement ils se nient mutuellement, mais ils empechent physiquement l'acces aux lieux de prosternation. L'injustice passe du verbal au physique. Le verset 115 repondra que Dieu est au-dela de ces querelles — l'Est et l'Ouest Lui appartiennent.",
              axe3_sourate: "La racine z-l-m est une des racines les plus frequentes de la sourate al-Baqarah. En 2:35, « sinon vous serez parmi les injustes ». En 2:51, « vous avez ete injustes envers vous-memes ». La sourate trace un parcours de l'injustice — de l'injustice envers soi-meme a l'injustice envers les lieux de Dieu. L'elatif en 2:114 marque le sommet de cette escalade.",
              axe4_coherence: "La racine z-l-m apparait environ 315 fois dans le Coran. L'elatif « azlamu » est utilise exclusivement dans la question rhetorique « man azlamu ». Le Coran definit plusieurs formes d'injustice supreme : mentir sur Dieu (6:21), rejeter Ses signes (6:157), empecher Ses lieux de prosternation (2:114). Chaque « man azlamu » definit un sommet specifique d'injustice. L'injustice de 2:114 concerne l'obstruction physique du culte.",
              axe5_frequence: "Pour la mission du khalifa, l'injustice supreme est d'empecher la connexion entre l'humain et Dieu. Le khalifa a pour mission d'etablir la justice — le zulm (injustice) est l'antithese exacte de sa mission. Empecher les lieux de prosternation c'est bloquer la mission meme du khalifa. La corruption sur terre (fasad) prend sa forme la plus grave quand elle vise les lieux de connexion avec Dieu."
            },
            "Obscurité/Ténèbres": {
              status: "probable",
              senses: ["obscurite", "tenebres"],
              proof_ctx: "Le sens d'obscurite est le sens premier physique de la racine z-l-m — l'absence de lumiere. La distinction philosophique avec l'injustice est que l'obscurite est un etat physique (absence de lumiere) tandis que l'injustice est un acte moral (placer une chose hors de sa place). Le mot azlamu est ici un elatif qualifiant un acte — empecher la prosternation — ce qui releve du domaine moral. L'obscurite reste probable car le lien etymologique entre obscurite et injustice est profond — l'injuste est celui qui plonge dans l'obscurite morale.",
              axe1_verset: "Le mot azlamu pourrait evoquer l'obscurite si l'on prend le sens premier de la racine. Empecher la mention du nom de Dieu dans Ses lieux serait alors plonger ces lieux dans l'obscurite — une obscurite spirituelle. Le champ lexical (empecher, ruine, chatiment) suggere cependant un acte delibere, pas un etat d'obscurite. L'obscurite serait la consequence de l'injustice, pas l'injustice elle-meme.",
              axe2_voisins: "Le verset 113 montrait des disputes entre groupes religieux. Le verset 114 parle d'empecher la prosternation. L'obscurite comme sens secondaire pourrait s'appliquer — ceux qui empechent la prosternation plongent les lieux dans l'obscurite. Mais le contexte actif (empecher, s'efforcer a la ruine) favorise le sens d'injustice.",
              axe3_sourate: "La sourate al-Baqarah utilise z-l-m principalement au sens d'injustice morale. En 2:17, la racine z-l-m apparait dans le contexte de l'obscurite (« Dieu emporte leur lumiere et les laisse dans les tenebres »). Mais en 2:114, le contexte est un acte d'interdiction, pas un etat de tenebres.",
              axe4_coherence: "Le Coran utilise zulumaat (pluriel de zulmah) pour l'obscurite physique et zulm pour l'injustice morale. L'elatif azlamu est toujours utilise dans le sens moral — « qui est plus injuste ? ». Le Coran ne dit jamais « qui est plus obscur ? » avec cette forme. Le sens d'obscurite reste probable mais secondaire dans ce contexte.",
              axe5_frequence: "L'obscurite spirituelle est une consequence de l'eloignement de Dieu. Empecher les lieux de prosternation plonge la communaute dans l'obscurite. Mais la mission du khalifa est de combattre l'injustice, pas simplement l'obscurite. Le sens d'injustice est plus operationnel pour la mission."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["se faire du tort"],
              proof_ctx: "Le sens de souffle est hors sujet — le mot azlamu est un elatif d'injustice, pas un nom de phenomene naturel."
            }
          }
        }
      },
      // mna pos=4
      {
        word_key: "mna", position: 4, sense_chosen: "empecher",
        analysis_axes: {
          sense_chosen: "empecher",
          concept_chosen: "Interdiction/Privation",
          concepts: {
            "Interdiction/Privation": {
              status: "retenu",
              senses: ["empecher", "refuser", "priver"],
              proof_ctx: "Le verbe mana'a est un accompli 3MS de la racine m-n-a'. Le Lane's donne : empecher, interdire, refuser, proteger par interdiction. L'accompli marque que l'interdiction a eu lieu. L'objet de l'interdiction est les lieux de prosternation de Dieu. L'interdiction est un acte de privation — on prive les fideles de l'acces aux lieux de prosternation. Cette racine n'a qu'un seul concept retenu, le choix est immediat.",
              axe1_verset: "Le verbe mana'a est l'action principale du verset — c'est l'acte qui definit le « plus injuste ». Le champ lexical (injuste, empecher, lieux de prosternation, nom de Dieu, ruine) montre que l'interdiction est double : empecher la mention du nom de Dieu ET s'efforcer a la ruine des lieux. L'empechement est actif et delibere — ce n'est pas un oubli mais un acte d'obstruction. Le verset construit une image d'oppression systematique contre les lieux de culte.",
              axe2_voisins: "Le verset 113 parlait de groupes qui nient mutuellement la legitimite de l'autre. Le verset 114 montre que cette negation devient physique — empecher l'acces aux lieux de prosternation. L'interdiction est le passage de la parole a l'acte. Le verset 115 repondra que Dieu n'est pas limite a un lieu — ou que vous vous tourniez, la face de Dieu est la.",
              axe3_sourate: "La racine m-n-a' apparait dans la sourate al-Baqarah dans le contexte de l'empechement du bien. Le verset 114 est le cas le plus grave : empecher la prosternation pour Dieu. La sourate presente l'empechement comme le contraire de la facilitation — Dieu facilite l'acces a la verite, les oppresseurs l'empechent.",
              axe4_coherence: "La racine m-n-a' apparait environ 22 fois dans le Coran. En 96:9, « un serviteur quand il prie, as-tu vu celui qui empeche ? ». En 107:7, « et empechent l'aide ». Le Coran associe l'empechement a l'opposition contre Dieu — celui qui empeche se place en travers du chemin entre l'humain et Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'empechement de la prosternation est l'obstruction directe de la mission. Le khalifa doit faciliter la connexion entre l'humain et Dieu — l'empecheur fait le contraire. La mission du khalifa est de supprimer les obstacles entre l'humain et sa source divine."
            }
          }
        }
      },
      // sjd pos=5
      {
        word_key: "sjd", position: 5, sense_chosen: "lieu de prosternation",
        analysis_axes: {
          sense_chosen: "lieu de prosternation",
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "obeir"],
              proof_ctx: "Le mot masajida est un pluriel de masjid, nom de lieu (maf'il) de la racine s-j-d. Le Lane's donne : se prosterner, mettre le front a terre. Le masjid est le lieu ou l'on se prosterne — la forme maf'il designe le lieu de l'action. Le pluriel (masajid) marque que l'interdiction est generalisee. L'idafa avec Allah (masajida Allahi) rattache ces lieux a Dieu comme proprietaire. La distinction avec « mosquee » (nul) est que le mot coranique designe tout lieu de prosternation, pas un batiment specifique de l'islam institutionnel.",
              axe1_verset: "Le mot masajid est l'objet de l'interdiction — ce sont les lieux de prosternation qu'on empeche. Le champ lexical (empecher, nom de Dieu, ruine) montre que l'attaque vise les lieux ou l'humain se connecte a Dieu par la prosternation. Le verset lie trois actions : empecher la prosternation, empecher la mention du nom, et detruire les lieux. La prosternation est l'acte physique de soumission a Dieu — les lieux de prosternation sont les espaces sacres de cette connexion.",
              axe2_voisins: "Le verset 113 parlait de disputes sur les croyances. Le verset 114 passe aux lieux physiques — les masajid. Le verset 115 dira que l'Est et l'Ouest appartiennent a Dieu — meme si les masajid sont interdits, la face de Dieu est partout. La progression est : querelles sur les croyances → attaque sur les lieux → reponse divine que Dieu est partout.",
              axe3_sourate: "La racine s-j-d est fondamentale dans la sourate al-Baqarah. En 2:34, les anges recoivent l'ordre de se prosterner devant Adam. En 2:58, les fils d'Israel recoivent l'ordre d'entrer en se prosternant. La prosternation est un fil conducteur de la sourate — elle marque l'obeissance. Les masajid de 2:114 sont les lieux ou cette obeissance s'exprime.",
              axe4_coherence: "La racine s-j-d apparait environ 92 fois dans le Coran. En 22:40, « des masajid ou le nom de Dieu est abondamment mentionne ». En 72:18, « les masajid sont a Dieu ». Le Coran definit les masajid par deux fonctions : la prosternation et la mention du nom de Dieu. Le verset 2:114 denonce l'empechement de ces deux fonctions exactes.",
              axe5_frequence: "Pour la mission du khalifa, les lieux de prosternation sont les espaces ou la mission se concretise. La prosternation est l'acte physique de la mission — reconnaitre la source divine. Empecher les masajid c'est empecher la mission elle-meme. Le khalifa doit proteger les espaces de prosternation comme lieux de sa mission."
            },
            "Lieu de prosternation": {
              status: "nul",
              senses: ["mosquee"],
              proof_ctx: "Le sens de mosquee comme institution specifique est un sens derive moderne. Le mot masajid dans le Coran designe tout lieu de prosternation pour Dieu, pas un batiment specifique."
            }
          }
        }
      },
      // alh pos=6
      {
        word_key: "alh", position: 6, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif dans l'idafa « masajida Allahi ». L'idafa rattache les lieux de prosternation a Dieu comme proprietaire. Les masajid sont a Dieu — les empecher c'est attaquer la propriete de Dieu. Le nom apparait dans cette position pour marquer que l'injustice vise directement Dieu, pas seulement les fideles.",
              axe1_verset: "Le nom Allahi qualifie les masajid — ce sont les lieux de prosternation DE DIEU. L'idafa cree un lien de propriete. Le verset dit aussi que c'est le nom de Dieu (ismuhu) qu'on empeche de mentionner. Dieu est doublement vise : Ses lieux et Son nom. Le champ lexical montre que l'injustice supreme est celle qui vise directement Dieu et Sa propriete.",
              axe2_voisins: "Le verset 113 montrait des disputes entre groupes sur la religion de Dieu. Le verset 114 montre que Dieu est le proprietaire des masajid — les disputes humaines ne changent pas cette propriete. Le verset 115 affirmera que l'Est et l'Ouest appartiennent a Dieu. La propriete divine est le theme qui relie les versets 113-115.",
              axe3_sourate: "Le nom Allah structure toute la sourate al-Baqarah. En 2:114, l'idafa masajida Allahi souligne que les lieux de prosternation sont la propriete exclusive de Dieu. La sourate insiste sur la propriete divine de tout ce qui existe — les masajid en font partie.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 72:18, « les masajid sont a Dieu, donc n'invoquez personne d'autre avec Dieu ». Le Coran affirme la propriete divine des lieux de prosternation. Empecher l'acces aux masajid c'est usurper la propriete de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission et le proprietaire des lieux ou la mission s'accomplit. Les masajid de Dieu sont les espaces de la mission. Le khalifa doit les maintenir ouverts et accessibles a tous."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe de detresse."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet — le mot est le nom propre Allah dans un contexte de propriete."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se devouer au culte"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["demeurer", "proteger", "chercher refuge"],
              proof_ctx: "Le sens de refuge est hors sujet — le contexte est la propriete divine des masajid."
            }
          }
        }
      },
      // dhkr pos=8
      {
        word_key: "dhkr", position: 8, sense_chosen: "mentionner",
        analysis_axes: {
          sense_chosen: "mentionner",
          concept_chosen: "Mémoire/Rappel",
          concepts: {
            "Mémoire/Rappel": {
              status: "retenu",
              senses: ["se souvenir", "rappeler", "mentionner", "memoire"],
              proof_ctx: "Le verbe yudhkara est un inaccompli passif 3MS de la racine dh-k-r. Le Lane's donne : mentionner, rappeler, se souvenir, evoquer a la memoire. Le passif indique que le nom de Dieu est mentionne — c'est une action qui se fait dans les masajid. L'inaccompli avec « an » forme un masdar mu'awwal — l'empechement porte sur la mention continue du nom. La distinction avec « masculin » (nul) est que le contexte est la mention du nom, pas le genre.",
              axe1_verset: "Le verbe yudhkara precise ce qui est empeche dans les masajid : la mention du nom de Dieu. Le champ lexical (empecher, lieux de prosternation, nom, Dieu) montre que l'interdiction vise la parole sacree dans les lieux sacres. La mention du nom de Dieu est l'acte central du culte — sans elle les masajid perdent leur fonction. Le verset lie trois elements : le lieu (masajid), l'acte (mentionner) et l'objet (le nom de Dieu).",
              axe2_voisins: "Le verset 113 parlait de paroles entre groupes religieux. Le verset 114 passe a la mention du nom de Dieu — une parole d'un tout autre ordre. Le verset 115 dira que ou que vous vous tourniez, la face de Dieu est la. La mention du nom de Dieu ne depend pas d'un lieu — meme si les masajid sont fermes, le nom de Dieu peut etre mentionne partout.",
              axe3_sourate: "La racine dh-k-r est recurrente dans la sourate al-Baqarah. En 2:40, « souvenez-vous de Mon bienfait ». En 2:152, « souvenez-vous de Moi, Je Me souviendrai de vous ». La mention et le souvenir de Dieu sont un theme central de la sourate — empecher cette mention est l'attaque la plus grave contre ce theme.",
              axe4_coherence: "La racine dh-k-r apparait environ 292 fois dans le Coran. En 22:40, « des masajid ou le nom de Dieu est abondamment mentionne ». Le Coran associe la mention du nom de Dieu aux masajid comme leur fonction premiere. En 33:41, « mentionnez Dieu d'une mention abondante ». La mention du nom est un pilier du culte.",
              axe5_frequence: "Pour la mission du khalifa, la mention du nom de Dieu est l'acte fondateur de la mission. Mentionner Dieu c'est maintenir la conscience de la source. Empecher cette mention c'est couper le khalifa de sa source. La mention est le lien permanent entre le khalifa et son mandant."
            },
            "Masculin": {
              status: "nul",
              senses: ["male"],
              proof_ctx: "Le sens de male est hors sujet — le verbe yudhkara est a la voix passive et signifie « que soit mentionne », pas un nom de genre."
            }
          }
        }
      },
      // smw pos=10
      {
        word_key: "smw", position: 10, sense_chosen: "nom",
        analysis_axes: {
          sense_chosen: "nom",
          concept_chosen: "Nom/Identification",
          concepts: {
            "Nom/Identification": {
              status: "retenu",
              senses: ["nom", "nommer", "prononcer le nom de Dieu", "se nommer", "s'appeler mutuellement", "demander le nom", "renommee", "nomme", "homonyme", "nominal", "qualite de nom", "revendiquer une parente"],
              proof_ctx: "Le mot ismuhu est un nom singulier de la racine s-m-w avec pronom suffixe 3MS (hu = Son). Le Lane's donne : nom, designation, appellation. Le nom est ce par quoi on designe et identifie. Ici « ismuhu » signifie Son nom — le nom de Dieu. La mention du nom de Dieu est l'acte qui donne aux masajid leur sacralite. La distinction avec le ciel (retenu dans d'autres contextes) est que le mot est ici ism (nom), pas sama' (ciel).",
              axe1_verset: "Le mot ismuhu precise ce qui est mentionne dans les masajid — le nom de Dieu. Le champ lexical (lieux de prosternation, mentionner, nom, Dieu) montre que la sacralite des masajid tient a la mention du nom divin. Sans la mention du nom, le lieu perd sa sacralite. Le pronom suffixe « hu » (Son) renvoie a Dieu — c'est le nom de Dieu specifiquement qui est empeche, pas n'importe quel nom.",
              axe2_voisins: "Le verset 112 parlait de ceux qui se soumettent a Dieu. Le verset 114 montre que le nom de Dieu est un enjeu de pouvoir — certains empechent qu'il soit mentionne. Le verset 115 repondra que le nom de Dieu n'est pas confine a un lieu — sa face est partout. Le nom de Dieu transcende les lieux physiques.",
              axe3_sourate: "La racine s-m-w au sens de « nom » apparait dans la sourate al-Baqarah en 2:31 — « Il enseigna a Adam les noms, tous ». Les noms sont un theme fondateur de la sourate — Dieu enseigne les noms a Adam, et empecher la mention du nom de Dieu est l'inversion de cet enseignement. La sourate commence par les noms et denonce ceux qui les empechent.",
              axe4_coherence: "L'expression « ismu Allah » (le nom de Dieu) apparait dans de nombreux versets. En 6:118, « mangez de ce sur quoi le nom de Dieu a ete mentionne ». En 22:40, « des masajid ou le nom de Dieu est abondamment mentionne ». Le nom de Dieu est le marqueur du sacre dans le Coran — le mentionner est un acte de consecration.",
              axe5_frequence: "Pour la mission du khalifa, le nom de Dieu est l'identifiant de la source. Mentionner le nom c'est maintenir la connexion avec la source. Empecher la mention du nom c'est couper l'identifiant — le khalifa ne sait plus pour qui il travaille. Le nom est l'ancre de la mission."
            },
            "Ciel/Ce qui couvre": {
              status: "peu_probable",
              senses: ["ciel", "toit", "nuage", "pluie", "herbage", "dos", "semelle superieure", "piece de tissu superieure", "celeste", "bounty"],
              proof_ctx: "Le sens de ciel est un sens majeur de la racine s-m-w mais le mot ici est ismuhu (son nom), pas sama' (ciel). La forme ism (nom) est un derive nominal different de sama' (ciel). La distinction est morphologique : ism designe l'appellation, sama' designe la voute. Le contexte confirme : ce qui est mentionne dans les masajid c'est le nom de Dieu, pas le ciel.",
              axe1_verset: "Le mot ismuhu ne pourrait signifier « son ciel » que par une reinterpretation forcee. Le champ lexical (mentionner, lieux de prosternation) pointe vers la mention orale — on mentionne un nom, pas un ciel. Le verbe yudhkara (que soit mentionne) exige un objet qui se prononce — le nom se prononce, le ciel ne se « mentionne » pas dans ce sens.",
              axe2_voisins: "Les versets voisins parlent de disputes religieuses et de lieux de culte. Le ciel n'est pas dans le champ thematique de ce passage. Le verset 115 parlera de direction (Est/Ouest), pas de ciel. Le contexte est terrestre — les masajid sont sur terre.",
              axe3_sourate: "La sourate al-Baqarah utilise sama' au sens de ciel dans de nombreux versets (2:19, 2:22, 2:29). Mais en 2:114, le mot est ism, pas sama'. La distinction morphologique est claire dans la sourate.",
              axe4_coherence: "Le Coran distingue clairement ism (nom) et sama' (ciel) bien qu'ils partagent la racine s-m-w. L'expression « yudhkara fiha ismuhu » (que soit mentionne en eux son nom) apparait avec ism dans tous les paralleles (22:40). Le mot est toujours compris comme « nom ».",
              axe5_frequence: "Le ciel n'est pas pertinent pour la mission du khalifa dans ce contexte specifique. La mention du nom est l'acte cultuel central, pas la contemplation du ciel."
            },
            "Hauteur/Élévation": {
              status: "nul",
              senses: ["etre haut", "se dresser", "monter", "lever le regard", "aspirer", "noble", "hautain", "rivaliser en eminence", "elever quelqu'un", "depasser en nombre", "etalon qui bondit", "forme vue de loin", "lune qui se dresse", "surpasser", "eminent"],
              proof_ctx: "Le sens de hauteur est hors sujet — le mot ism designe le nom, pas une elevation physique."
            },
            "Chasse": {
              status: "nul",
              senses: ["chasser", "chasseurs", "chaussettes de chasseur", "inciter a chasser", "tester une chamelle"],
              proof_ctx: "Le sens de chasse est hors sujet — le contexte est la mention du nom de Dieu dans les masajid."
            }
          }
        }
      },
      // sey pos=11
      {
        word_key: "sey", position: 11, sense_chosen: "s'efforcer",
        analysis_axes: {
          sense_chosen: "s'efforcer",
          concept_chosen: "Effort/Marche",
          concepts: {
            "Effort/Marche": {
              status: "retenu",
              senses: ["s'efforcer", "marcher", "travailler"],
              proof_ctx: "Le verbe sa'a est un accompli 3MS de la racine s-'-y. Le Lane's donne : s'efforcer, marcher vers un but, travailler a quelque chose. L'accompli marque que l'effort est acheve. La preposition « fi » (dans) + kharabiha (leur ruine) indique l'objet de l'effort — il s'est efforce dans leur ruine, c'est-a-dire vers leur destruction. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le verbe sa'a est la deuxieme action de l'oppresseur — apres avoir empeche la mention du nom, il s'efforce a la ruine des lieux. Le champ lexical (empecher, ruine, chatiment) montre que l'effort est dirige vers la destruction. Le verbe sa'a implique une action deliberee et soutenue — ce n'est pas un acte impulsif mais un projet de destruction. Le verset oppose l'effort de construction (les masajid) et l'effort de destruction (la ruine).",
              axe2_voisins: "Le verset 113 montrait des querelles verbales. Le verset 114 passe a l'action physique — l'effort delibere pour detruire les lieux de prosternation. Le passage de la parole a l'action marque une escalade. Le verset 115 repondra que l'effort de destruction est vain — Dieu est partout et ne peut etre confine a un lieu.",
              axe3_sourate: "La racine s-'-y apparait dans le Coran dans des contextes d'effort dirige. En 2:205, « il s'efforce de semer la corruption sur terre ». Le meme verbe sa'a designe l'effort vers la corruption — le parallele avec 2:114 est direct : dans les deux cas, l'effort est dirige vers la destruction. La sourate montre deux types d'effort — l'effort vers le bien et l'effort vers la corruption.",
              axe4_coherence: "La racine s-'-y apparait environ 30 fois dans le Coran. En 17:19, « celui qui a voulu l'au-dela et s'y est efforce en etant croyant ». En 2:114, l'effort est inverse — dirige vers la destruction. Le Coran montre que l'effort est un choix directionnel — vers Dieu ou contre Dieu. Le verset 2:114 montre l'effort dans la mauvaise direction.",
              axe5_frequence: "Pour la mission du khalifa, l'effort est l'outil de la mission. Le khalifa s'efforce vers le bien — le destructeur s'efforce vers la ruine. L'effort pour la ruine des masajid est l'antithese de l'effort du khalifa. La mission exige que l'effort soit dirige vers la construction, pas la destruction."
            }
          }
        }
      },
      // krb pos=13
      {
        word_key: "krb", position: 13, sense_chosen: "ruine",
        analysis_axes: {
          sense_chosen: "ruine",
          concept_chosen: "Ruine/Destruction",
          concepts: {
            "Ruine/Destruction": {
              status: "retenu",
              senses: ["etre ruine", "detruire", "devaster", "etre desert", "ruines"],
              proof_ctx: "Le mot kharabiha est un nom singulier de la racine kh-r-b avec pronom suffixe feminin (ha = leur/d'elles). Le Lane's donne : etat de ruine, desolation, destruction. Le kharab est l'etat final de ce qui a ete detruit — la ruine est le resultat de l'effort de destruction. Le pronom feminin renvoie aux masajid (feminin pluriel). Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le mot kharabiha est l'objectif de l'effort — la ruine des masajid. Le champ lexical (empecher, s'efforcer, ruine) montre une progression : d'abord l'interdiction (empecher la mention), puis la destruction physique (la ruine). Le verset decrit un programme complet de destruction — spirituelle (empecher la mention du nom) et materielle (la ruine des lieux). Le mot kharab designe l'etat final — des lieux deserts et devastes.",
              axe2_voisins: "Le verset 113 parlait de querelles verbales. Le verset 114 passe a la destruction physique — la ruine des masajid. Le verset 115 repondra que Dieu est au-dela de la destruction physique — meme si les lieux sont en ruine, la face de Dieu est partout. La ruine est un acte humain, la presence divine est une realite permanente.",
              axe3_sourate: "La racine kh-r-b est rare dans le Coran — ce verset est l'occurrence principale. La sourate al-Baqarah parle de construction (2:127, Abraham construit la Kaaba) et de destruction (2:114, la ruine des masajid). Le contraste est saisissant : Abraham construit, les oppresseurs detruisent. La sourate presente la construction et la destruction comme les deux poles de l'action humaine.",
              axe4_coherence: "La racine kh-r-b est rare dans le Coran, ce qui rend son usage en 2:114 d'autant plus marque. Le Coran mentionne la destruction de villes (21:11, « combien de cites injustes Nous avons brisees ») mais la ruine des masajid est presentee comme un cas unique d'injustice. La rarete du mot souligne la gravite de l'acte.",
              axe5_frequence: "Pour la mission du khalifa, la ruine des masajid est l'antithese de la construction. Le khalifa est charge de construire et de maintenir — la ruine est le signe de l'echec de la mission. Le khalifa doit proteger les lieux de prosternation contre la ruine."
            }
          }
        }
      },
      // alk pos=14
      {
        word_key: "alk", position: 14, sense_chosen: "ceux-la",
        analysis_axes: {
          sense_chosen: "ceux-la",
          concept_chosen: "Message/Envoi",
          concepts: {
            "Message/Envoi": {
              status: "retenu",
              senses: ["message", "messager", "envoyer un message", "ange"],
              proof_ctx: "Le mot ula'ika est un pronom demonstratif eloigne pluriel. Bien que la racine a-l-k porte les sens de message et d'envoi dans le Lane's, le mot ula'ika fonctionne dans le Coran comme un pronom fixe signifiant « ceux-la ». Ici « ula'ika ma kana lahum » signifie « ceux-la, il ne leur appartenait pas ». Le demonstratif eloigne marque la distance — ces oppresseurs sont designes a distance avec un mepris implicite. Le concept de message est retenu comme seul concept non-nul disponible.",
              axe1_verset: "Le mot ula'ika introduit la consequence du verset — apres avoir decrit l'injustice (empecher, detruire), le texte passe au chatiment. « Ceux-la » designe les oppresseurs mentionnes dans la premiere partie. Le demonstratif eloigne cree une rupture — on passe de la description de l'injustice a son chatiment. Le champ lexical (entrer, apeurés, ignominie, chatiment) montre que le chatiment est double : ici-bas et dans l'au-dela.",
              axe2_voisins: "Le demonstratif ula'ika est utilise dans la sourate al-Baqarah pour designer des groupes specifiques. En 2:5, « ula'ika 'ala hudan » (ceux-la sont sur la guidee). En 2:114, ula'ika designe les oppresseurs. Le parallele montre que le Coran utilise le meme demonstratif pour les deux poles — les guiders et les oppresseurs.",
              axe3_sourate: "Le mot ula'ika apparait des dizaines de fois dans la sourate al-Baqarah. Il sert a separer les groupes — « ceux-la » sont tantot les guides (2:5), tantot les perdants (2:27), tantot les oppresseurs (2:114). La sourate classe les humains en groupes par leurs actions.",
              axe4_coherence: "Le pronom ula'ika apparait environ 300 fois dans le Coran. Il cree une distance entre le locuteur et le groupe designe. En 2:114, cette distance marque le jugement divin — « ceux-la » sont eloignes de la misericorde. Le Coran utilise ula'ika pour les verdicts definitifs.",
              axe5_frequence: "Pour la mission du khalifa, le demonstratif « ceux-la » distingue les allies de la mission et ses ennemis. Les oppresseurs des masajid sont designes a distance — ils se sont eux-memes exclus de la mission par leurs actes."
            },
            "Mastication": {
              status: "nul",
              senses: ["macher", "machonner le mors"],
              proof_ctx: "Le sens de mastication est hors sujet — le mot ula'ika est un pronom demonstratif, pas un verbe de mastication."
            }
          }
        }
      },
      // kwn pos=16
      {
        word_key: "kwn", position: 16, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kana est un accompli 3MS de la racine k-w-n. Le Lane's donne : etre, exister, devenir. Kana est un verbe incomplet (naaqis) qui introduit une information existentielle. Avec la negation « ma », « ma kana lahum » signifie « il ne leur appartenait pas / il n'etait pas pour eux ». L'accompli avec ma marque une impossibilite ontologique — il n'a jamais ete le cas qu'ils aient le droit d'entrer. La distinction avec l'humilite (nul) est que le verbe est ici existentiel, pas un adjectif de soumission.",
              axe1_verset: "Le verbe kana avec la negation ma introduit le verdict : il ne leur appartenait pas d'entrer dans les masajid sauf apeurés. Le champ lexical (entrer, sauf, apeurés) montre que le verdict limite leur acces — s'ils entrent, ce sera dans la peur. Kana au passe marque que cette limitation est de tout temps — pas une nouvelle regle mais une realite permanente.",
              axe2_voisins: "Le verset 113 montrait des pretentions reciproques. Le verset 114 montre que les pretentions des oppresseurs sont vaines — « ma kana lahum » nie leur droit. Le verset 115 affirmera positivement ce qui « est » — la face de Dieu est partout. L'opposition entre la negation (ma kana) et l'affirmation (thamma wajhu Allah) structure le passage.",
              axe3_sourate: "Le verbe kana est un des verbes les plus frequents de la sourate al-Baqarah. Il sert a poser des realites ontologiques — ce qui est et ce qui n'est pas. En 2:114, la negation « ma kana » pose un interdit ontologique : il ne leur etait pas donne d'entrer.",
              axe4_coherence: "La racine k-w-n apparait environ 1358 fois dans le Coran. Le verbe kana structure la theologie coranique — il pose l'etre divin (Dieu est), l'etre humain (l'homme etait), et les negations (il ne leur etait pas). En 2:114, kana nie le droit des oppresseurs a entrer dans les masajid.",
              axe5_frequence: "Pour la mission du khalifa, l'etre precede l'action. « Ma kana lahum » dit que les oppresseurs n'ont pas l'etre necessaire pour entrer dans les masajid comme maitres. La mission du khalifa exige un etre — une disposition interieure — avant l'action exterieure."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — le verbe kana est ici existentiel (etre), pas un adjectif de soumission."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Le sens de lieu est hors sujet — le verbe kana est ici le verbe d'existence au passe, pas un nom de lieu."
            }
          }
        }
      },
      // dxl pos=19
      {
        word_key: "dxl", position: 19, sense_chosen: "entrer",
        analysis_axes: {
          sense_chosen: "entrer",
          concept_chosen: "Entrée/Pénétration",
          concepts: {
            "Entrée/Pénétration": {
              status: "retenu",
              senses: ["entrer", "penetrer", "acceder", "introduire"],
              proof_ctx: "Le verbe yadkhuluha est un inaccompli 3MP de la racine d-kh-l avec pronom suffixe feminin (ha = elles). Le Lane's donne : entrer, penetrer, acceder. L'inaccompli avec « an » exprime la possibilite — il ne leur etait pas donne d'y entrer. Le pronom feminin renvoie aux masajid. L'exception « illa kha'ifin » (sauf apeurés) limite l'entree a un etat de peur. La distinction avec revenu (nul) est que le contexte est l'acces physique aux masajid.",
              axe1_verset: "Le verbe yadkhuluha pose le verdict sur les oppresseurs — s'ils entrent dans les masajid, ce sera seulement dans la peur. Le champ lexical (empecher, entrer, sauf, apeurés) montre l'ironie : ceux qui empechent les autres d'entrer ne peuvent eux-memes y entrer qu'en tremblant. Le verset inverse la situation — les empecheurs deviennent les empeches.",
              axe2_voisins: "Le verset 111 parlait de ceux qui pretendent que seuls certains entreront au paradis. Le verset 114 renverse la pretention — les oppresseurs ne devraient meme pas entrer dans les masajid sauf apeurés. Le theme de l'entree relie les versets 111-114.",
              axe3_sourate: "La racine d-kh-l apparait dans la sourate al-Baqarah dans plusieurs contextes d'entree. En 2:58, « entrez par la porte en vous prosternant ». En 2:111, l'entree au paradis. En 2:114, l'entree dans les masajid. La sourate lie l'entree physique a l'attitude interieure — on entre en se prosternant ou en tremblant.",
              axe4_coherence: "La racine d-kh-l apparait environ 126 fois dans le Coran. L'entree dans les masajid est liee a l'etat interieur — en 2:114, l'entree se fait dans la peur. En 4:124, « ils entreront au paradis ». Le Coran montre que l'entree est conditionnee par l'etat interieur.",
              axe5_frequence: "Pour la mission du khalifa, l'entree dans les masajid est l'acces a l'espace de la mission. Les oppresseurs ne peuvent acceder qu'apeurés — la peur est le signe de leur echec. Le khalifa entre dans les masajid avec assurance, pas avec peur."
            },
            "Ressource": {
              status: "nul",
              senses: ["revenu"],
              proof_ctx: "Le sens de revenu est hors sujet — le contexte est l'entree physique dans les masajid."
            }
          }
        }
      },
      // khwf pos=21
      {
        word_key: "khwf", position: 21, sense_chosen: "craindre",
        analysis_axes: {
          sense_chosen: "craindre",
          concept_chosen: "Crainte/Peur",
          concepts: {
            "Crainte/Peur": {
              status: "retenu",
              senses: ["craindre", "avoir peur", "effrayer", "redouter", "inquieter"],
              proof_ctx: "Le mot kha'ifin est un participe actif pluriel accusatif de la racine kh-w-f. Le Lane's donne : craindre, avoir peur, redouter. Le participe actif designe un etat permanent — ils sont dans la crainte de facon continue. L'accusatif apres « illa » (sauf) indique un etat concomitant — s'ils entrent, ils entrent en etant apeurés. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le mot kha'ifin decrit l'etat des oppresseurs quand ils entrent dans les masajid — ils entrent apeurés. Le champ lexical (entrer, sauf, apeurés) montre que la peur est le chatiment immediat. Ceux qui empechent les autres d'entrer deviennent eux-memes des entrants apeurés. L'ironie est complete : les maitres autoproclamés des masajid n'y entrent qu'en tremblant. La peur est le premier chatiment — avant l'ignominie et le chatiment de l'au-dela.",
              axe2_voisins: "Le verset 112 parlait de ceux qui soumettent leur visage a Dieu — ils n'ont rien a craindre. Le verset 114 montre l'oppose — ceux qui empechent les masajid sont condamnes a la peur. Le contraste entre la securite des soumis (112) et la peur des oppresseurs (114) est direct et delibere.",
              axe3_sourate: "La racine kh-w-f apparait dans la sourate al-Baqarah dans des contextes de peur et de securite. En 2:38, « pas de crainte pour eux ». En 2:62, « pas de crainte ni de tristesse ». En 2:114, la crainte est le lot des oppresseurs. La sourate oppose deux groupes : ceux qui n'ont rien a craindre et ceux qui sont condamnes a la peur.",
              axe4_coherence: "La racine kh-w-f apparait environ 124 fois dans le Coran. La formule « la khawfun 'alayhim » (pas de crainte pour eux) s'applique aux croyants. En 2:114, la peur s'applique aux oppresseurs. Le Coran distribue la peur et la securite selon les actes — les oppresseurs des masajid recoivent la peur.",
              axe5_frequence: "Pour la mission du khalifa, la peur est le signe de l'echec de la mission. Le khalifa qui accomplit sa mission n'a pas de crainte (2:38). Celui qui trahit sa mission en empechant les masajid est condamne a la peur. La peur est le chatiment naturel de l'oppresseur."
            }
          }
        }
      },
      // dnw pos=24
      {
        word_key: "dnw", position: 24, sense_chosen: "ici-bas",
        analysis_axes: {
          sense_chosen: "ici-bas",
          concept_chosen: "Proximité/Monde d'ici-bas",
          concepts: {
            "Proximité/Monde d'ici-bas": {
              status: "retenu",
              senses: ["etre proche", "proche", "ici-bas", "approcher"],
              proof_ctx: "Le mot ad-dunya est un nom feminin singulier defini de la racine d-n-w. Le Lane's donne : la plus proche, la plus basse, l'ici-bas. La dunya est le monde le plus proche — le monde immediat ou l'on vit. Le sens etymologique de « proximite » est toujours present : l'ici-bas est le monde le plus proche par opposition a l'au-dela (al-akhirah) qui est le monde le plus eloigne. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le mot ad-dunya introduit le premier lieu du chatiment — l'ici-bas. Le verset oppose la dunya et l'akhirah : « a eux dans l'ici-bas une ignominie, et a eux dans l'au-dela un chatiment immense ». Le champ lexical (ignominie, chatiment, immense) montre que le chatiment est double — il commence ici-bas et se complete dans l'au-dela. La dunya est le premier espace de consequence.",
              axe2_voisins: "Le verset 114 place l'ici-bas comme premier lieu de chatiment. Le verset 115 parlera de l'Est et l'Ouest — les directions de l'ici-bas qui appartiennent a Dieu. Le verset 116 niera que Dieu ait un enfant — une affirmation sur l'ici-bas et l'au-dela. La dunya est le theatre des evenements de ce passage.",
              axe3_sourate: "La racine d-n-w au sens de « dunya » apparait frequemment dans la sourate al-Baqarah. En 2:85, « ignominie dans la vie d'ici-bas ». En 2:86, « ceux qui ont achete la vie d'ici-bas au prix de l'au-dela ». La sourate oppose systematiquement la dunya et l'akhirah — choisir la dunya seule c'est perdre l'akhirah.",
              axe4_coherence: "La racine d-n-w apparait environ 115 fois dans le Coran. L'opposition dunya/akhirah est un des schemas fondamentaux du Coran. En 2:114, le chatiment commence dans la dunya (ignominie) et se complete dans l'akhirah (chatiment immense). Le Coran montre que les consequences de l'injustice touchent les deux mondes.",
              axe5_frequence: "Pour la mission du khalifa, l'ici-bas est le lieu de la mission. C'est dans la dunya que le khalifa agit et construit. L'ignominie dans la dunya est le signe visible de l'echec de ceux qui s'opposent a la mission. Le khalifa doit oeuvrer dans la dunya pour l'akhirah."
            }
          }
        }
      },
      // khzy pos=25
      {
        word_key: "khzy", position: 25, sense_chosen: "ignominie",
        analysis_axes: {
          sense_chosen: "ignominie",
          concept_chosen: "Humiliation/Honte",
          concepts: {
            "Humiliation/Honte": {
              status: "retenu",
              senses: ["etre humilie", "etre deshonore", "honte", "chatiment humiliant", "avoir honte"],
              proof_ctx: "Le mot khizyun est un nom singulier indefini de la racine kh-z-y. Le Lane's donne : ignominie, honte, deshonneur, disgrace. Le khizy est un etat de honte publique — le deshonneur est visible par tous. L'indefini (sans article) renforce l'intensite — une ignominie sans mesure definie. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le mot khizyun est le premier chatiment — l'ignominie dans l'ici-bas. Le verset oppose deux chatiments : l'ignominie ici-bas et le chatiment immense dans l'au-dela. Le champ lexical (peur, ignominie, chatiment) montre une gradation : d'abord la peur quand ils entrent, puis l'ignominie dans la vie, puis le chatiment dans l'au-dela. L'ignominie est le chatiment social — le deshonneur devant les autres humains.",
              axe2_voisins: "Le verset 85 mentionnait aussi « ignominie dans la vie d'ici-bas ». Le verset 114 reprend le meme schema pour les oppresseurs des masajid. Le parallele montre que le Coran reserve l'ignominie aux memes types de transgresseurs — ceux qui violent les pactes et ceux qui empechent la prosternation.",
              axe3_sourate: "La racine kh-z-y apparait dans la sourate al-Baqarah en 2:85 et 2:114. Les deux occurrences parlent d'ignominie dans l'ici-bas suivie d'un chatiment dans l'au-dela. La sourate utilise le khizy comme premier degre de chatiment — le deshonneur public precede le chatiment divin.",
              axe4_coherence: "La racine kh-z-y apparait environ 25 fois dans le Coran. En 5:33, « ignominie dans l'ici-bas ». En 11:66, « une ignominie ce jour-la ». Le Coran utilise le khizy pour les transgresseurs les plus graves — ceux qui s'opposent directement a Dieu et a Ses signes.",
              axe5_frequence: "Pour la mission du khalifa, l'ignominie est le signe de l'echec total de la mission. Le deshonneur public est la consequence visible de l'opposition a Dieu. Le khalifa qui trahit sa mission recoit l'ignominie comme premiere sanction."
            }
          }
        }
      },
      // axr pos=29
      {
        word_key: "axr", position: 29, sense_chosen: "au-dela",
        analysis_axes: {
          sense_chosen: "au-dela",
          concept_chosen: "Postériorité/Retard",
          concepts: {
            "Postériorité/Retard": {
              status: "retenu",
              senses: ["retarder", "reporter", "reculer", "apres", "dernier", "l'au-dela", "fin"],
              proof_ctx: "Le mot al-akhirah est un nom feminin singulier defini de la racine a-kh-r. Le Lane's donne : la derniere, la fin, l'au-dela. Al-akhirah est la vie derniere — celle qui vient apres la dunya. Le sens de posteriorite est premier : l'akhirah est ce qui vient apres, en dernier. Ici « fi al-akhirah 'adhabun 'azimun » (dans l'au-dela un chatiment immense) annonce le chatiment final. La distinction avec « arriere/derriere » (nul) est que le mot designe la vie derniere, pas une position physique.",
              axe1_verset: "Le mot al-akhirah est le second lieu de chatiment — apres l'ici-bas (dunya). Le verset construit un chatiment en deux temps : ignominie dans la dunya, chatiment immense dans l'akhirah. Le champ lexical (chatiment, immense) montre que le chatiment de l'akhirah est plus grave que l'ignominie de la dunya. L'akhirah est l'horizon final — le dernier mot sur les actes humains.",
              axe2_voisins: "Le verset 113 parlait de pretentions sur l'au-dela (seuls certains entreront au paradis). Le verset 114 montre que l'au-dela reserve un chatiment immense aux oppresseurs des masajid. Le verset 115 parlera de la face de Dieu — une realite qui transcende la dunya et l'akhirah.",
              axe3_sourate: "L'opposition dunya/akhirah est un theme structurant de la sourate al-Baqarah. En 2:86, « ceux qui ont achete la dunya au prix de l'akhirah ». En 2:102, « pas de part dans l'akhirah ». En 2:114, l'akhirah est le lieu du chatiment immense. La sourate insiste sur le fait que l'akhirah est l'horizon de verite.",
              axe4_coherence: "La racine a-kh-r apparait environ 250 fois dans le Coran. L'akhirah est mentionnee comme l'horizon de jugement final. En 2:114, le chatiment de l'akhirah est qualifie d'immense ('azim) — un degre superieur a l'ignominie de la dunya. Le Coran montre que le chatiment final est proportionnel a la gravite de l'injustice.",
              axe5_frequence: "Pour la mission du khalifa, l'akhirah est l'horizon de la mission. Le khalifa travaille dans la dunya pour l'akhirah. L'ignominie dans la dunya et le chatiment dans l'akhirah sont les deux faces de l'echec de la mission."
            },
            "Sens isolé/Arrière": {
              status: "nul",
              senses: ["arriere"],
              proof_ctx: "Le sens d'arriere est hors sujet — le mot al-akhirah designe la vie derniere, pas une position physique."
            },
            "Sens isolé/Derrière": {
              status: "nul",
              senses: ["derriere"],
              proof_ctx: "Le sens de derriere est hors sujet — le mot al-akhirah designe l'au-dela, pas une position spatiale."
            }
          }
        }
      },
      // edb pos=30
      {
        word_key: "edb", position: 30, sense_chosen: "chatiment",
        analysis_axes: {
          sense_chosen: "chatiment",
          concept_chosen: "Châtiment/Punition",
          concepts: {
            "Châtiment/Punition": {
              status: "retenu",
              senses: ["punir", "chatier", "tourmenter", "chatiment"],
              proof_ctx: "Le mot 'adhabun est un nom singulier indefini de la racine '-dh-b. Le Lane's donne : chatiment, punition, tourment. L'indefini (sans article) laisse le chatiment ouvert — sans mesure definie. Le qualificatif 'azim (immense) amplifie l'intensite. La distinction avec « douceur » (nul) est que le contexte est le chatiment des oppresseurs, pas l'agrement.",
              axe1_verset: "Le mot 'adhabun est le chatiment final promis aux oppresseurs des masajid. Le champ lexical (ignominie, au-dela, chatiment, immense) montre que le chatiment est le point culminant du verset. Le verset construit une gradation : peur → ignominie → chatiment immense. Le chatiment est le dernier degre de la consequence.",
              axe2_voisins: "Le verset 104 mentionnait un chatiment douloureux. Le verset 114 mentionne un chatiment immense. Le degre change — de douloureux a immense — en fonction de la gravite de l'injustice. Empecher les masajid est une injustice plus grave que les transgressions precedentes.",
              axe3_sourate: "La racine '-dh-b apparait frequemment dans la sourate al-Baqarah. Le mot 'adhab est qualifie diversement : « douloureux » (2:10), « humiliant » (2:90), « immense » (2:114). Chaque qualificatif correspond a un type d'injustice. Le chatiment immense est reserve aux injustices les plus graves.",
              axe4_coherence: "La racine '-dh-b apparait environ 373 fois dans le Coran. Le chatiment est un theme central de la theologie coranique — il est proportionnel a l'acte. En 2:114, le chatiment est « immense » car l'injustice est supremement grave. Le Coran ne punit pas excessivement — il proportionnne le chatiment a l'injustice.",
              axe5_frequence: "Pour la mission du khalifa, le chatiment est la consequence de l'echec de la mission. Le khalifa qui trahit sa mission subit les consequences. Le chatiment immense montre que l'obstruction de la mission divine est la faute la plus grave."
            },
            "Douceur": {
              status: "nul",
              senses: ["doux", "sucre", "eau douce", "agreable"],
              proof_ctx: "Le sens de douceur est le contraire du contexte — le verset parle de chatiment, pas d'agrement."
            },
            "Abstention": {
              status: "nul",
              senses: ["s'abstenir", "quitter"],
              proof_ctx: "Le sens d'abstention est hors sujet — le mot 'adhab designe la punition, pas l'acte de s'abstenir."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["poussieres flottant sur l'eau"],
              proof_ctx: "Le sens d'eau est hors sujet — le contexte est le chatiment dans l'au-dela."
            },
            "Végétation/Plante": {
              status: "nul",
              senses: ["arbre veneneux"],
              proof_ctx: "Le sens de vegetation est hors sujet — le mot 'adhab designe le chatiment."
            }
          }
        }
      },
      // ezm pos=31
      {
        word_key: "ezm", position: 31, sense_chosen: "immense",
        analysis_axes: {
          sense_chosen: "immense",
          concept_chosen: "Grandeur/Importance",
          concepts: {
            "Grandeur/Importance": {
              status: "retenu",
              senses: ["etre grand", "grandir", "immense", "magnifier"],
              proof_ctx: "Le mot 'azimun est un adjectif singulier indefini de la racine '-z-m. Le Lane's donne : etre grand, immense, considerable. L'adjectif qualifie le chatiment — un chatiment immense. L'indefini (sans article) renforce l'absence de limite — l'immensité n'est pas definie. La distinction avec « os/squelette » (nul) est que le mot est un adjectif de grandeur, pas un nom d'anatomie.",
              axe1_verset: "Le mot 'azimun qualifie le chatiment de l'au-dela — « un chatiment immense ». Le champ lexical (ignominie, chatiment, immense) montre une gradation d'intensite. L'adjectif 'azim est le degre le plus eleve de qualification dans le verset. Le chatiment n'est pas simplement douloureux ou severe — il est immense, sans mesure definie. Cela repond a l'injustice « supreme » (azlamu) du debut du verset.",
              axe2_voisins: "Le verset 105 parlait d'un bienfait immense (fadl 'azim). Le verset 114 parle d'un chatiment immense ('adhab 'azim). Le meme adjectif qualifie le bienfait et le chatiment — Dieu est immense dans Ses deux attributs. Le parallele montre que l'immensité divine s'applique autant a la recompense qu'au chatiment.",
              axe3_sourate: "L'adjectif 'azim apparait plusieurs fois dans la sourate al-Baqarah. En 2:7, « un chatiment immense » pour ceux qui dissimulent. En 2:105, « un bienfait immense ». En 2:114, « un chatiment immense ». La sourate utilise 'azim pour les realites les plus graves — les consequences ultimes des actes humains.",
              axe4_coherence: "La racine '-z-m apparait environ 114 fois dans le Coran. L'expression « 'adhab 'azim » (chatiment immense) est une des formules les plus graves du Coran. Elle est reservee aux transgressions les plus serieuses — mentir sur Dieu, rejeter Ses signes, empecher Ses masajid. L'immensité du chatiment repond a l'immensité de l'injustice.",
              axe5_frequence: "Pour la mission du khalifa, l'immensité qualifie les deux poles de la mission : la recompense immense pour ceux qui accomplissent la mission, le chatiment immense pour ceux qui l'empechent. L'immensité est proportionnelle a l'importance de la mission."
            },
            "Structure/Ossature": {
              status: "nul",
              senses: ["os", "squelette"],
              proof_ctx: "Le sens d'os est hors sujet — le mot 'azim est un adjectif de grandeur qualifiant le chatiment."
            },
            "Sens isolé/Châtiment": {
              status: "nul",
              senses: ["chatiment terrible"],
              proof_ctx: "Ce sens est deja englobé par le sens retenu de grandeur — 'azim qualifie le chatiment comme immense."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 115
  // =====================================================
  115: {
    verse_id: 122,
    analysis_id: 479,
    translation_arab: "Et a Dieu appartiennent le levant et le couchant. Donc ou que vous vous tourniez, la est la face de Dieu. Certes Dieu est vaste, savant.",
    full_translation: "A Allah seul appartiennent l'Est et l'Ouest. Ou que vous vous tourniez, la Face d'Allah est donc la, car Allah a la grace immense; Il est Omniscient.",
    translation_explanation: `§DEMARCHE§
Le verset repond au verset 114 : meme si les masajid sont interdits, Dieu n'est pas confine a un lieu. La preposition « li » (pour/a) avec le nom « Allahi » au genitif exprime la possession — a Dieu appartiennent. Le mot « al-mashriqu » est un nom de lieu singulier defini de la racine sh-r-q. Le Lane's donne : le lieu du lever du soleil, l'est, l'orient. Le nom de lieu (maf'il) designe l'endroit ou le soleil se leve. Le mot « al-maghribu » est un nom de lieu singulier defini de la racine gh-r-b. Le Lane's donne : le lieu du coucher du soleil, l'ouest, l'occident. Le nom de lieu designe l'endroit ou le soleil se couche. L'Est et l'Ouest ensemble designent la totalite des directions — tout l'horizon appartient a Dieu. La particule « fa » introduit la consequence : donc, par consequent. Le mot « aynama » est un adverbe de lieu de la racine a-y-n. Le Lane's donne : ou, en quelque lieu que. C'est un adverbe conditionnel — ou que vous soyez. Le verbe « tuwallu » est un inaccompli 2MP de la forme III de la racine w-l-y. Le Lane's donne : se tourner vers, diriger son visage vers. La forme II/III indique une action dirigee — vous tournez vos visages. L'inaccompli marque une action continue et repetee — chaque fois que vous vous tournez. Le mot « thamma » est un adverbe de lieu de la racine th-m-m. Le Lane's donne : la, en ce lieu. Thamma est un demonstratif de lieu eloigne — la, a cet endroit. Le mot « wajhu » est un nom singulier de la racine w-j-h dans une idafa avec Allah. Le Lane's donne : visage, face, direction. Le wajh est la partie la plus noble et la plus expressive de l'etre — la face de Dieu designe Sa presence, Sa direction, Son essence tournee vers la creation. L'idafa wajhu Allahi (la face de Dieu) est une expression coranique majeure. La particule emphatique « inna » de la racine a-n-n introduit une affirmation solennelle : certes, en verite. L'adjectif « wasi'un » est un participe actif de la racine w-s-' avec inna. Le Lane's donne : vaste, ample, qui englobe largement. Dieu est vaste — Sa capacite est sans limite. L'adjectif « 'alimun » est un adjectif intensif de la racine '-l-m avec inna. Le Lane's donne : savant, celui qui sait. Dieu sait tout — Il connait chaque direction ou vous vous tournez. Les deux attributs (vaste et savant) repondent au contenu du verset : Dieu est vaste (Il est partout, pas confine a un lieu) et savant (Il sait ou vous vous tournez).

§JUSTIFICATION§
**levant** — Le sens retenu est « lever/orient ». Le mot al-mashriq designe le lieu du lever du soleil. L'alternative « briller » est ecartee car le mot est un nom de lieu, pas un verbe de luminosite.

**couchant** — Le sens retenu est « coucher/occident ». Le mot al-maghrib designe le lieu du coucher du soleil. L'alternative « etranger » (autre sens de gh-r-b) est ecartee car le contexte est directionnel.

**vous tourniez** — Le sens retenu est « se tourner vers ». Le verbe tuwallu designe l'acte de tourner son visage vers une direction. L'alternative « gouverner » (autre sens de w-l-y) est ecartee car le contexte est la direction physique de la priere.

**la** — Le sens retenu est « la, en ce lieu ». Le mot thamma est un adverbe de lieu designant un endroit precis. L'alternative « ensuite » (sens temporel de th-m-m) est ecartee car le contexte est spatial.

**face** — Le sens retenu est « visage/direction ». Le mot wajh designe la face de Dieu — Sa presence et Sa direction. L'alternative « maniere » est ecartee car le contexte est la presence divine dans l'espace.

**vaste** — Le sens retenu est « ampleur/vastitude ». Le mot wasi' qualifie Dieu comme englobant tout espace. L'alternative est ecartee car c'est le seul sens principal.

**savant** — Le sens retenu est « savoir/connaissance ». Le mot 'alim qualifie Dieu comme celui qui sait tout. L'alternative « marque/signe » est ecartee car le mot est un adjectif de connaissance.

§CRITIQUE§
Les traductions courantes rendent « wajhu Allahi » par « la Face de Dieu » ou « la Face d'Allah ». Notre choix est identique. La difference majeure porte sur la comprehension de « wasi'un » : Hamidullah traduit par « la grace immense », ce qui est une interpretation. Le mot wasi' signifie « vaste, ample » — Dieu est vaste dans Sa capacite, pas specifiquement dans Sa grace. Notre traduction « vaste » est plus fidele a l'etymologie. Le verset repond au probleme pose en 2:114 (l'interdiction des masajid) par une affirmation theologique : Dieu n'est pas confine a un lieu. Meme si les masajid sont fermes, la face de Dieu est partout ou l'on se tourne.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "a", phon: "li", arabic: "\u0644\u0650", is_particle: true, position: 1 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 2 },
      { fr: "le levant", pos: "nom", phon: "al-mashriqu", arabic: "\u0671\u0644\u0652\u0645\u064e\u0634\u0652\u0631\u0650\u0642\u064f", word_key: "shrq", is_particle: false, sense_retenu: "levant", position: 3 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 4 },
      { fr: "le couchant", pos: "nom", phon: "al-maghribu", arabic: "\u0671\u0644\u0652\u0645\u064e\u063a\u0652\u0631\u0650\u0628\u064f", word_key: "ghrb", is_particle: false, sense_retenu: "couchant", position: 5 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 6 },
      { fr: "ou que", pos: "nom", phon: "aynama", arabic: "\u0623\u064e\u064a\u0652\u0646\u064e\u0645\u064e\u0627", word_key: "ayn", is_particle: false, sense_retenu: "ou", position: 7 },
      { fr: "vous vous tourniez", pos: "verbe", phon: "tuwallu", arabic: "\u062a\u064f\u0648\u064e\u0644\u0651\u064f\u0648\u0627\u06df", word_key: "wly", is_particle: false, sense_retenu: "se tourner vers", position: 8 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 9 },
      { fr: "la", pos: "adverbe", phon: "thamma", arabic: "\u062b\u064e\u0645\u0651\u064e", word_key: "thmm", is_particle: false, sense_retenu: "la", position: 10 },
      { fr: "la face", pos: "nom", phon: "wajhu", arabic: "\u0648\u064e\u062c\u0652\u0647\u064f", word_key: "wjh", is_particle: false, sense_retenu: "face", position: 11 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 12 },
      { fr: "certes", pos: "particule_emphatique", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", word_key: "ann", is_particle: false, sense_retenu: "certes", position: 13 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 14 },
      { fr: "est vaste", pos: "adjectif", phon: "wasi'un", arabic: "\u0648\u064e\u0640\u0670\u0633\u0650\u0639\u064c", word_key: "wsae", is_particle: false, sense_retenu: "vaste", position: 15 },
      { fr: "savant", pos: "adjectif", phon: "'alimun", arabic: "\u0639\u064e\u0644\u0650\u064a\u0645\u064c", word_key: "elm", is_particle: false, sense_retenu: "savant", position: 16 }
    ],
    words: [
      // llh pos=2
      {
        word_key: "llh", position: 2, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite", "dieu", "Dieu", "theologie"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif avec la preposition li (a/pour). L'expression « li-Allahi » signifie « a Dieu appartient ». Le lam de possession marque que l'Est et l'Ouest sont la propriete de Dieu. Premiere de trois occurrences d'Allah dans ce verset — Dieu est le sujet central.",
              axe1_verset: "Le nom Allahi apparait trois fois dans le verset : comme proprietaire de l'Est et l'Ouest (li-Allahi), comme possesseur de la face (wajhu Allahi), et comme sujet de la phrase finale (inna Allaha). Cette triple mention structure le verset autour de Dieu. Le champ lexical (levant, couchant, face, vaste, savant) montre que Dieu est omnipresent et omniscient. Le verset est une theologie de la presence divine.",
              axe2_voisins: "Le verset 114 denonçait ceux qui empechent les masajid de Dieu. Le verset 115 repond : Dieu n'est pas confine a Ses masajid — Il possede l'Est et l'Ouest. Le verset 116 denoncera ceux qui disent que Dieu a un enfant. Les versets 114-116 affirment la souverainete et la transcendance de Dieu.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. En 2:115, la triple mention souligne l'omnipresence divine. La sourate presente Dieu comme proprietaire de tout — cieux, terre, directions, lieux de prosternation.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. L'expression « li-Allahi al-mashriqu wa-l-maghribu » apparait aussi en 2:142. Le Coran affirme la possession divine de toutes les directions. Dieu n'est pas un dieu local — Il possede tout l'horizon.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant universel. La possession divine de l'Est et l'Ouest signifie que la mission du khalifa s'etend partout — elle n'est pas limitee a un lieu ou une direction."
            },
            "Adoration/Culte": {
              status: "nul",
              senses: ["adorer", "servir", "se consacrer au culte"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration."
            },
            "Confusion/Perplexité": {
              status: "nul",
              senses: ["etre confus"],
              proof_ctx: "Le sens de confusion est hors sujet — le mot est le nom propre Allah."
            },
            "Asservissement": {
              status: "nul",
              senses: ["reduire en esclavage"],
              proof_ctx: "Le sens d'asservissement est hors sujet — le contexte est la propriete divine des directions."
            }
          }
        }
      },
      // shrq pos=3
      {
        word_key: "shrq", position: 3, sense_chosen: "levant",
        analysis_axes: {
          sense_chosen: "levant",
          concept_chosen: "Orient/Lumière",
          concepts: {
            "Orient/Lumière": {
              status: "retenu",
              senses: ["est", "lever", "orient"],
              proof_ctx: "Le mot al-mashriqu est un nom de lieu singulier defini de la racine sh-r-q. Le Lane's donne : le lieu du lever du soleil, l'orient, l'est. Le mashriq est un ism makan (nom de lieu) forme sur le schema maf'il — le lieu ou le soleil se leve. L'article defini (al-) marque le mashriq comme direction connue et universelle. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le mot al-mashriqu est la premiere direction mentionnee — l'est. Associe au couchant (al-maghrib), il forme la totalite de l'horizon. Le champ lexical (levant, couchant, ou que, face de Dieu) montre que le verset parle de l'etendue universelle de la presence divine. L'Est est le lieu de l'aube — la ou la lumiere apparait. Dieu possede la source de la lumiere.",
              axe2_voisins: "Le verset 114 parlait de lieux de prosternation specifiques. Le verset 115 elargit le champ — de masajid specifiques a l'horizon entier. Le passage du specifique (les masajid) a l'universel (l'Est et l'Ouest) est la reponse divine a l'obstruction humaine.",
              axe3_sourate: "La racine sh-r-q apparait dans la sourate al-Baqarah en 2:115 et 2:142 et 2:177. Chaque occurrence parle de direction. En 2:142, le changement de qiblah est evoque. En 2:177, « ce n'est pas la piete de tourner vos visages vers le mashriq ou le maghrib ». La sourate montre que la direction physique est secondaire par rapport a la direction interieure.",
              axe4_coherence: "La racine sh-r-q apparait environ 18 fois dans le Coran. En 26:28, le Seigneur de l'est et de l'ouest. En 55:17, le Seigneur des deux levants et des deux couchants. Le Coran utilise le mashriq pour affirmer la souverainete divine sur toutes les directions. L'Est n'est pas une direction sacree en soi — c'est la propriete de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le levant represente le debut — la ou la lumiere apparait. Dieu possede le debut et la fin (mashriq et maghrib). La mission du khalifa couvre toutes les directions, pas une seule."
            }
          }
        }
      },
      // ghrb pos=5
      {
        word_key: "ghrb", position: 5, sense_chosen: "couchant",
        analysis_axes: {
          sense_chosen: "couchant",
          concept_chosen: "Occident/Disparition",
          concepts: {
            "Occident/Disparition": {
              status: "retenu",
              senses: ["ouest", "coucher", "etranger"],
              proof_ctx: "Le mot al-maghribu est un nom de lieu singulier defini de la racine gh-r-b. Le Lane's donne : le lieu du coucher du soleil, l'ouest, l'occident. Le maghrib est un ism makan forme sur le schema maf'il — le lieu ou le soleil se couche. L'article defini marque le maghrib comme direction universelle. Associe au mashriq, il forme la totalite de l'horizon. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le mot al-maghribu est la seconde direction — l'ouest. Avec le mashriq, il encadre tout l'espace. Le champ lexical (levant, couchant, face de Dieu) montre que Dieu est present de l'horizon le plus oriental a l'horizon le plus occidental. Le maghrib est le lieu de la disparition du soleil — meme la ou la lumiere disparait, Dieu est present.",
              axe2_voisins: "Le verset 114 parlait de l'obstruction des masajid. Le verset 115 repond par l'immensité de Dieu — de l'Est a l'Ouest. Le verset 116 denoncera l'attribution d'un enfant a Dieu. Le passage montre que Dieu est trop vaste pour etre confine a des lieux ou reduit a des attributs humains (paternite).",
              axe3_sourate: "L'association mashriq/maghrib apparait dans la sourate al-Baqarah en 2:115, 2:142, 2:177. Chaque fois, elle sert a relativiser l'importance de la direction physique. En 2:177, « ce n'est pas la piete de tourner vos visages vers l'Est ou l'Ouest ». La sourate enseigne que la piete est dans le coeur, pas dans la direction.",
              axe4_coherence: "La racine gh-r-b apparait environ 16 fois dans le Coran. L'association mashriq/maghrib est une formule coranique pour « partout ». En 73:9, « le Seigneur de l'est et de l'ouest ». Le Coran utilise le couple pour affirmer l'universalite de la souverainete divine.",
              axe5_frequence: "Pour la mission du khalifa, le couchant represente la fin — la ou la lumiere disparait. Dieu possede la fin comme le debut. La mission du khalifa ne s'arrete pas quand la lumiere disparait — Dieu est present meme dans l'obscurite du couchant."
            }
          }
        }
      },
      // ayn pos=7
      {
        word_key: "ayn", position: 7, sense_chosen: "ou",
        analysis_axes: {
          sense_chosen: "ou",
          concept_chosen: "Lieu/Interrogation",
          concepts: {
            "Lieu/Interrogation": {
              status: "retenu",
              senses: ["ou", "en quel lieu"],
              proof_ctx: "Le mot aynama est un adverbe de lieu conditionnel compose de ayna (ou) + ma (suffixe de generalisation). Le Lane's donne : ou que, en quelque lieu que. L'adverbe conditionnel ouvre une proposition universelle — quel que soit le lieu ou vous vous tournez. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le mot aynama introduit l'universalite de la presence divine — « ou que vous vous tourniez ». Le champ lexical (levant, couchant, ou que, face de Dieu) montre que l'adverbe elimine toute restriction geographique. Dieu n'est pas dans un lieu — Il est dans tous les lieux. L'adverbe aynama est la cle du verset : il transforme l'Est et l'Ouest en un continuum — pas deux directions mais toutes les directions.",
              axe2_voisins: "Le verset 114 limitait l'acces aux masajid. Le verset 115 repond par « ou que » — aucune limitation n'est possible. Le passage de la restriction (114) a l'universalite (115) est la reponse divine : les humains limitent, Dieu est illimite.",
              axe3_sourate: "L'adverbe aynama est rare dans la sourate al-Baqarah — cette occurrence est significative. La sourate traite la question de la direction (qiblah) dans plusieurs versets. Le mot aynama tranche le debat : la direction importe moins que la presence divine. Ou que vous soyez, Dieu est la.",
              axe4_coherence: "Le mot aynama apparait dans le Coran pour exprimer l'universalite. En 2:148, « ou que vous soyez, Dieu vous rassemblera tous ». En 4:78, « ou que vous soyez, la mort vous atteindra ». Le Coran utilise aynama pour les realites universelles et inescapables — la presence de Dieu est l'une d'elles.",
              axe5_frequence: "Pour la mission du khalifa, « ou que » signifie que la mission n'a pas de frontiere geographique. Le khalifa est en mission partout — pas seulement dans les masajid ou les lieux sacres. La presence de Dieu est universelle, la mission l'est aussi."
            }
          }
        }
      },
      // wly pos=8
      {
        word_key: "wly", position: 8, sense_chosen: "se tourner vers",
        analysis_axes: {
          sense_chosen: "se tourner vers",
          concept_chosen: "Proximité/Protection",
          concepts: {
            "Proximité/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Le verbe tuwallu est un inaccompli 2MP de la forme II de la racine w-l-y. Le Lane's donne : se tourner vers, diriger son visage vers, etre proche. La forme II/III intensifie l'action — vous tournez deliberement vos visages vers une direction. L'inaccompli marque une action repetee — chaque fois que vous vous tournez. La racine w-l-y porte les sens de proximite et de direction — se tourner vers c'est se rapprocher. La distinction avec « gouverner » (nul) est que le contexte est la direction de la priere, pas l'autorite politique.",
              axe1_verset: "Le verbe tuwallu est l'action humaine du verset — se tourner vers une direction. Le champ lexical (ou que, vous tourniez, face de Dieu) montre que l'acte humain (se tourner) rencontre la presence divine (la face de Dieu est la). Le verbe implique un choix directionnel — on se tourne vers quelque chose. Mais le verset dit que quel que soit ce choix, Dieu est la. La direction humaine ne conditionne pas la presence divine.",
              axe2_voisins: "Le verset 114 parlait de ceux qui empechent l'acces aux masajid. Le verset 115 repond que se tourner vers Dieu ne depend pas d'un lieu. Le verbe tuwallu est la reponse a l'interdiction — meme sans masajid, on peut se tourner vers Dieu. Le verset 116 montrera que Dieu transcende meme les attributions humaines.",
              axe3_sourate: "La racine w-l-y apparait frequemment dans la sourate al-Baqarah. En 2:144, « tourne ta face vers la Mosquee sacree ». En 2:115, la direction est universalisee. La sourate passe du specifique (une direction precise) au general (toute direction). L'evolution montre que la direction est un outil, pas une fin en soi.",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. Le sens de « se tourner vers » est un usage fondamental — la direction physique et spirituelle. En 2:115, le verbe montre que se tourner vers Dieu est possible partout. Le Coran utilise w-l-y pour la proximite et la protection — se tourner vers Dieu c'est se rapprocher de Sa protection.",
              axe5_frequence: "Pour la mission du khalifa, se tourner vers Dieu est l'orientation fondamentale de la mission. Le khalifa se tourne vers sa source — Dieu — quelle que soit la direction physique. L'orientation interieure prime sur la direction exterieure."
            },
            "Autorité": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est hors sujet — le verbe tuwallu designe l'acte de se tourner vers une direction, pas l'exercice du pouvoir."
            }
          }
        }
      },
      // thmm pos=10
      {
        word_key: "thmm", position: 10, sense_chosen: "la",
        analysis_axes: {
          sense_chosen: "la",
          concept_chosen: "Succession/Ordre",
          concepts: {
            "Succession/Ordre": {
              status: "retenu",
              senses: ["ensuite", "puis", "apres"],
              proof_ctx: "Le mot thamma est un adverbe de lieu de la racine th-m-m. Le Lane's donne : la, en ce lieu, a cet endroit. Thamma est un demonstratif de lieu eloigne — il pointe vers un lieu defini. Bien que le concept « succession/ordre » porte les sens temporels (ensuite, puis), le mot thamma dans le Coran fonctionne aussi comme adverbe spatial — « la ». Ici « fa-thamma wajhu Allahi » signifie « la est la face de Dieu ». Le concept de succession est retenu comme seul concept disponible — le mot thamma pointe vers un lieu qui suit la direction choisie.",
              axe1_verset: "Le mot thamma est le pivot du verset — il annonce la presence divine. « Ou que vous vous tourniez, LA est la face de Dieu. » L'adverbe spatial cree un lien direct entre la direction humaine et la presence divine. Le champ lexical (ou que, vous tourniez, la, face de Dieu) montre que thamma est le point de rencontre entre le mouvement humain et la realite divine. Chaque direction mene « la » — a la face de Dieu.",
              axe2_voisins: "Le verset 114 montrait une obstruction. Le verset 115 repond par « la » — la face de Dieu est la. Le demonstratif spatial tranche le probleme de l'obstruction : peu importe le lieu empeche, « la » ou vous etes, Dieu est present. Le verset 116 ira plus loin en niant les attributions humaines.",
              axe3_sourate: "Le mot thamma est peu frequent dans la sourate al-Baqarah, ce qui rend son usage en 2:115 marquant. La sourate traite la question des lieux sacres (qiblah, masajid) — le mot thamma deplace le sacre du lieu fixe vers tout lieu ou l'on se tourne. Le sacre n'est pas dans le lieu mais dans la presence de Dieu.",
              axe4_coherence: "Le mot thamma apparait dans le Coran comme demonstratif de lieu. En 26:64, « et Nous avons fait approcher les autres de la ». En 2:115, thamma pointe vers la presence divine — partout ou l'on se tourne. Le Coran utilise thamma pour les lieux de rencontre entre l'humain et le divin.",
              axe5_frequence: "Pour la mission du khalifa, « la » signifie que le lieu de la mission est partout. Le khalifa n'a pas besoin d'un lieu specifique pour accomplir sa mission — « la » ou il est, Dieu est present. La mission est universelle par nature."
            }
          }
        }
      },
      // wjh pos=11
      {
        word_key: "wjh", position: 11, sense_chosen: "face",
        analysis_axes: {
          sense_chosen: "face",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le mot wajhu est un nom singulier de la racine w-j-h dans une idafa avec Allah. Le Lane's donne : visage, face, direction, aspect le plus noble. Le wajh est la partie la plus noble et la plus identifiable de l'etre — la face. L'idafa wajhu Allahi (la face de Dieu) est une expression coranique majeure qui designe la presence divine, l'essence de Dieu tournee vers Sa creation. La distinction avec « maniere » (nul) et « noble » (nul) est que le contexte est la presence de Dieu dans l'espace.",
              axe1_verset: "Le mot wajhu Allahi est le coeur du verset — la face de Dieu. Le champ lexical (levant, couchant, ou que, face) montre que la face de Dieu est presente dans toutes les directions. Le wajh est ce qui fait face — la face de Dieu fait face a la creation en tout lieu. Le verset affirme que la face de Dieu est la ou l'on se tourne — Il n'est pas absent d'aucun lieu. La face de Dieu est la garantie de Sa presence universelle.",
              axe2_voisins: "Le verset 112 parlait de soumettre son visage (wajh) a Dieu. Le verset 115 parle de la face (wajh) de Dieu. Le parallele est delibere : quand l'humain soumet son visage a Dieu (112), il rencontre la face de Dieu (115). Les deux visages se font face — l'humain soumis et Dieu present.",
              axe3_sourate: "La racine w-j-h apparait dans la sourate al-Baqarah dans des contextes de direction et de face. En 2:112, soumettre son visage a Dieu. En 2:144, tourner son visage vers la Mosquee sacree. En 2:115, la face de Dieu. La sourate montre que le visage humain et la face divine sont en relation constante.",
              axe4_coherence: "La racine w-j-h apparait environ 73 fois dans le Coran. L'expression « wajhu Allahi » apparait en 2:115, 2:272, 6:52, 13:22, 30:38, 30:39, 76:9, 92:20. Le Coran utilise cette expression pour la presence divine et pour la sincerite (agir pour la face de Dieu). La face de Dieu est a la fois presence et finalite.",
              axe5_frequence: "Pour la mission du khalifa, la face de Dieu est la direction de la mission. Le khalifa travaille pour la face de Dieu (li-wajhi Allahi) — c'est sa motivation et sa boussole. La face de Dieu est partout — la mission n'a pas de point aveugle."
            },
            "Sens isolé/Manière": {
              status: "nul",
              senses: ["maniere"],
              proof_ctx: "Le sens de maniere est hors sujet — le mot wajh dans l'idafa avec Allah designe la face/presence divine."
            },
            "Sens isolé/Noble": {
              status: "nul",
              senses: ["noble"],
              proof_ctx: "Le sens de noble est hors sujet — le mot est dans l'expression « face de Dieu », pas un adjectif de noblesse."
            }
          }
        }
      },
      // ann pos=13
      {
        word_key: "ann", position: 13, sense_chosen: "certes",
        analysis_axes: {
          sense_chosen: "certes",
          concept_chosen: "Affirmation/Certitude",
          concepts: {
            "Affirmation/Certitude": {
              status: "retenu",
              senses: ["que", "certes"],
              proof_ctx: "La particule inna est une particule emphatique de la racine a-n-n. Le Lane's donne : certes, en verite, assurement. Inna introduit une affirmation solennelle — ce qui suit est une verite certaine. Ici « inna Allaha wasi'un 'alimun » (certes Dieu est vaste, savant) est une declaration theologique solennelle. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "La particule inna introduit la conclusion theologique du verset — Dieu est vaste et savant. Le champ lexical (certes, Dieu, vaste, savant) montre que la conclusion est une affirmation de foi. Inna donne a l'affirmation un poids de certitude — ce n'est pas une opinion mais une verite. Le verset passe de la description spatiale (Est, Ouest, face de Dieu) a la declaration theologique (Dieu est vaste et savant).",
              axe2_voisins: "Le verset 114 se terminait par un chatiment. Le verset 115 se termine par une affirmation de la vastitude et de la science de Dieu. Le passage du chatiment a la theologie montre que le Coran ne reste pas dans la punition — il revient toujours a la connaissance de Dieu.",
              axe3_sourate: "La particule inna est frequente dans la sourate al-Baqarah. Elle introduit des verites theologiques majeures. En 2:115, elle introduit les deux noms divins (vaste, savant) qui repondent au contenu du verset. La sourate utilise inna comme marqueur de certitude theologique.",
              axe4_coherence: "La particule inna apparait des milliers de fois dans le Coran. Elle est le marqueur de certitude par excellence. En 2:115, elle confirme que la vastitude et la science de Dieu sont des certitudes — pas des hypotheses. Le Coran utilise inna pour les verites fondamentales de la foi.",
              axe5_frequence: "Pour la mission du khalifa, la certitude est le fondement de l'action. Le khalifa agit sur des certitudes (inna) — pas sur des doutes. La vastitude et la science de Dieu sont des certitudes sur lesquelles la mission repose."
            }
          }
        }
      },
      // wsae pos=15
      {
        word_key: "wsae", position: 15, sense_chosen: "vaste",
        analysis_axes: {
          sense_chosen: "vaste",
          concept_chosen: "Ampleur/Capacité",
          concepts: {
            "Ampleur/Capacité": {
              status: "retenu",
              senses: ["etre vaste", "contenir", "capacite"],
              proof_ctx: "Le mot wasi'un est un participe actif/adjectif de la racine w-s-'. Le Lane's donne : etre vaste, contenir largement, englober. Wasi' qualifie Dieu comme celui dont la capacite est sans limite — Il englobe tout. L'attribut repond au contenu du verset : Dieu possede l'Est et l'Ouest, Sa face est partout — Il est vaste. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le mot wasi'un qualifie Dieu comme vaste — Sa capacite englobe tout l'espace. Le champ lexical (Est, Ouest, partout, face de Dieu, vaste) montre que l'attribut de vastitude repond directement au contenu du verset. Dieu possede toutes les directions PARCE QU'Il est vaste. L'attribut n'est pas decoratif — il est la cause de l'omnipresence decrite. Dieu est la parce qu'Il est vaste.",
              axe2_voisins: "Le verset 114 montrait l'obstruction de lieux limites. Le verset 115 repond par la vastitude de Dieu — Il ne peut etre confine. Le verset 116 denoncera l'attribution d'un enfant a Dieu — une autre forme de limitation. La vastitude de Dieu rend absurde toute tentative de Le limiter.",
              axe3_sourate: "La racine w-s-' apparait dans la sourate al-Baqarah en 2:115, 2:247, 2:261, 2:268. Chaque fois, elle qualifie Dieu. En 2:247, « Dieu est vaste, savant ». La meme paire d'attributs apparait en 2:115 et 2:247 — la vastitude et la science sont des attributs complementaires.",
              axe4_coherence: "L'adjectif wasi' apparait environ 13 fois dans le Coran comme attribut divin. Il est souvent associe a 'alim (savant). En 2:115, 2:247, 3:73, 5:54, 24:32, 53:32. Le Coran montre que la vastitude de Dieu est liee a Sa science — Il englobe tout ET Il sait tout.",
              axe5_frequence: "Pour la mission du khalifa, la vastitude de Dieu signifie que la mission est sans limite. Le mandant de la mission est vaste — Sa capacite depasse tout ce que le khalifa peut imaginer. La vastitude de Dieu est la garantie que la mission peut reussir partout."
            }
          }
        }
      },
      // elm pos=16
      {
        word_key: "elm", position: 16, sense_chosen: "savant",
        analysis_axes: {
          sense_chosen: "savant",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le mot 'alimun est un adjectif intensif de la racine '-l-m. Le Lane's donne : savant, celui qui sait, tres connaissant. La forme fa'il est une forme intensive — 'alim est celui qui sait de maniere complete et exhaustive. Ici 'alim qualifie Dieu comme omniscient — Il sait vers ou vous vous tournez. L'attribut repond au contenu du verset : Sa face est la parce qu'Il sait ou vous etes. La distinction avec « signe » (nul) et « monde » (nul) est que le mot est un adjectif de connaissance.",
              axe1_verset: "Le mot 'alimun est le dernier mot du verset — l'attribut final de Dieu. Le champ lexical (face de Dieu, vaste, savant) montre que la conclusion est theologique : Dieu est vaste (omnipresent) ET savant (omniscient). Le savant complete le vaste — Dieu est non seulement partout mais Il sait tout. Sa face est la parce qu'Il sait ou vous vous tournez. L'omniscience garantit l'omnipresence.",
              axe2_voisins: "Le verset 114 terminait par un chatiment immense. Le verset 115 termine par la science divine. Le passage du chatiment a la science montre que le chatiment est informe par la science — Dieu chatie parce qu'Il sait. Le verset 116 montrera que Dieu sait que l'attribution d'un enfant est fausse.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:29, « Il est de toute chose savant ». En 2:115, « certes Dieu est vaste, savant ». La sourate presente la science divine comme un attribut fondamental qui sous-tend tous les actes divins.",
              axe4_coherence: "L'adjectif 'alim apparait environ 157 fois dans le Coran comme attribut divin. Il est souvent associe a d'autres attributs — ici a wasi' (vaste). Le Coran montre que Dieu sait tout : les intentions, les actions, les directions. Sa science est la base de Sa justice.",
              axe5_frequence: "Pour la mission du khalifa, la science divine signifie que le mandant de la mission sait tout. Le khalifa ne peut rien cacher a Dieu — chaque direction, chaque intention est connue. La science de Dieu est a la fois un rappel et une garantie : rien n'echappe au mandant."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le sens de signe est hors sujet — le mot 'alim est un adjectif de connaissance qualifiant Dieu."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le mot 'alim est un attribut divin de science, pas un nom d'univers."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 116
  // =====================================================
  116: {
    verse_id: 123,
    analysis_id: 480,
    translation_arab: "Et ils ont dit : Dieu a pris un enfant. Gloire a Lui ! Mais a Lui appartient ce qui est dans les cieux et la terre. Tous Lui sont devoues.",
    full_translation: "Et ils ont dit: «Allah S'est donne un fils»! Gloire a Lui! Non! mais c'est a Lui qu'appartient ce qui est dans les cieux et la terre et c'est a Lui que tous sont devoues.",
    translation_explanation: `§DEMARCHE§
Le verbe « qalu » est un accompli 3MP de la racine q-w-l. Le Lane's donne : dire, parler, affirmer. L'accompli marque que la parole a ete prononcee — c'est un fait acheve. Le pronom suffixe « hum » (waw du pluriel) indique un groupe — « ils ont dit ». Le verbe « ittakhadha » est un accompli 3MS de la forme VIII de la racine kh-dh-dh. Le Lane's donne : prendre, adopter, s'attribuer. La forme VIII (if'tala) ajoute l'idee de choix delibere — prendre pour soi-meme. Ici le sujet est Dieu (Allahu) et l'objet est waladan (un enfant). Le nom « waladan » est un nom singulier indefini accusatif de la racine w-l-d. Le Lane's donne : enfant, progéniture, ce qui est engendre. L'indefini et l'accusatif marquent l'objet — un enfant (pas un enfant specifique). Le mot « subhanahu » est un nom verbal accusatif de la racine s-b-h avec pronom suffixe 3MS. Le Lane's donne : glorifier, louer, nager (sens premier). Subhana est une exclamation de glorification — Gloire a Lui ! Le pronom « hu » (Son) renvoie a Dieu. L'exclamation rejette l'affirmation precedente — Dieu est au-dessus de ce qu'ils disent. La particule « bal » est une particule de rectification — mais, au contraire. Elle annule ce qui precede et introduit la verite. La preposition « lahu » est composee de la (pour) + hu (Lui). A Lui appartient — la possession est de Dieu. Le pronom relatif « ma » est un pronom relatif de la racine m-a-y. Le Lane's donne : ce qui, ce que. Ma designe tout ce qui se trouve dans les cieux et la terre. Le nom « as-samawati » est un pluriel feminin defini de la racine s-m-w. Le Lane's donne : cieux, ce qui est au-dessus. Le pluriel marque la multiplicite des cieux. Le nom « al-ardi » est un nom feminin singulier defini de la racine a-r-d. Le Lane's donne : terre, sol, bas. La terre est l'espace bas par opposition aux cieux. Le mot « kullun » est un nom singulier indefini de la racine k-l-l. Le Lane's donne : tout, chaque, totalite. Kull englobe la totalite sans exception — chaque chose et chaque etre. Le pronom « lahu » (a Lui) repete la possession — tout est a Dieu. Le mot « qanituna » est un participe actif pluriel nominatif de la racine q-n-t. Le Lane's donne : etre devot, obéir humblement, se tenir en devotion. Le participe actif pluriel designe un etat permanent — ils sont constamment en devotion. Tout dans les cieux et la terre est devoue a Dieu — la devotion est un etat universel et permanent.

§JUSTIFICATION§
**ont dit** — Le sens retenu est « dire/parler ». Le verbe qalu designe la parole prononcee. L'alternative « opinion » est ecartee car le contexte est une affirmation publique.

**a pris** — Le sens retenu est « prendre/adopter ». Le verbe ittakhadha a la forme VIII designe l'acte de prendre pour soi-meme. L'alternative « saisir » (sens physique) est ecartee car le contexte est l'attribution d'un attribut (un enfant).

**enfant** — Le sens retenu est « enfant/progéniture ». Le mot walad designe ce qui est engendre. L'alternative « naissance » (sens d'evenement) est ecartee car le contexte est l'objet (un enfant), pas l'evenement (une naissance).

**Gloire a Lui** — Le sens retenu est « glorifier ». Le mot subhana est une exclamation de glorification qui rejette l'affirmation precedente. L'alternative « nager » (sens premier de s-b-h) est ecartee car le mot est ici une exclamation liturgique fixe.

**devoues** — Le sens retenu est « devot/humble ». Le mot qanitun designe ceux qui sont dans un etat permanent de devotion. L'alternative « obéir » est proche mais « devot » capture mieux l'etat permanent du participe actif.

§CRITIQUE§
Hamidullah traduit « waladan » par « fils » alors que le mot arabe signifie « enfant/progéniture » sans specifier le sexe. Notre choix de « enfant » est plus fidele au texte arabe. Cette precision est importante car le verset ne vise pas seulement l'attribution d'un fils (comme dans la theologie chretienne avec Jesus) mais toute attribution de progéniture a Dieu — le concept meme d'engendrement est rejete. Hamidullah traduit « qanituna » par « devoues », ce qui est correct. Notre traduction est identique sur ce point. La particule « bal » est rendue par « non ! mais » chez Hamidullah — notre « mais » est plus sobre et rend la rectification sans l'exclamation ajoutee.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "ils ont dit", pos: "verbe", phon: "qalu", arabic: "\u0642\u064e\u0627\u0644\u064f\u0648\u0627\u06df", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "a pris", pos: "verbe", phon: "ittakhadha", arabic: "\u0671\u062a\u0651\u064e\u062e\u064e\u0630\u064e", word_key: "khdh", is_particle: false, sense_retenu: "prendre", position: 2 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 3 },
      { fr: "un enfant", pos: "nom", phon: "waladan", arabic: "\u0648\u064e\u0644\u064e\u062f\u064b\u0627", word_key: "wld", is_particle: false, sense_retenu: "enfant", position: 4 },
      { fr: "Gloire a Lui", pos: "participe_actif", phon: "subhanahu", arabic: "\u0633\u064f\u0628\u0652\u062d\u064e\u0640\u0670\u0646\u064e\u0647\u064f\u06e5", word_key: "sbh", is_particle: false, sense_retenu: "glorifier", position: 5 },
      { fr: "mais", phon: "bal", arabic: "\u0628\u064e\u0644", is_particle: true, position: 6 },
      { fr: "a Lui", pos: "nom", phon: "lahu", arabic: "\u0644\u0651\u064e\u0647\u064f\u06e5", word_key: "lhw", is_particle: false, sense_retenu: "a Lui", position: 7 },
      { fr: "ce qui", pos: "nom", phon: "ma", arabic: "\u0645\u064e\u0627", word_key: "ma", is_particle: false, sense_retenu: "ce qui", position: 8 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 9 },
      { fr: "les cieux", pos: "nom", phon: "as-samawati", arabic: "\u0671\u0644\u0633\u0651\u064e\u0645\u064e\u0640\u0670\u0648\u064e\u0640\u0670\u062a\u0650", word_key: "smw", is_particle: false, sense_retenu: "cieux", position: 10 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 11 },
      { fr: "la terre", pos: "nom", phon: "al-ardi", arabic: "\u0671\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 12 },
      { fr: "tous", pos: "nom", phon: "kullun", arabic: "\u0643\u064f\u0644\u0651\u064c", word_key: "kll", is_particle: false, sense_retenu: "tout", position: 13 },
      { fr: "a Lui", pos: "nom", phon: "lahu", arabic: "\u0644\u0651\u064e\u0647\u064f\u06e5", word_key: "lhw", is_particle: false, sense_retenu: "a Lui", position: 14 },
      { fr: "devoues", pos: "participe_actif", phon: "qanituna", arabic: "\u0642\u064e\u0640\u0670\u0646\u0650\u062a\u064f\u0648\u0646\u064e", word_key: "qnt", is_particle: false, sense_retenu: "devot", position: 15 }
    ],
    words: [
      // qwl pos=1
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qalu est un accompli 3MP de la racine q-w-l. Le Lane's donne : dire, parler, affirmer, enoncer. L'accompli marque que la parole a ete prononcee — c'est un fait acheve. Le waw du pluriel indique un groupe. Ici « qalu ittakhadha Allahu waladan » (ils ont dit : Dieu a pris un enfant) introduit une affirmation fausse qui sera refutee. La distinction avec « opinion » (nul) est que le contexte est une affirmation publique, pas une opinion privee.",
              axe1_verset: "Le verbe qalu ouvre le verset en rapportant une parole fausse — « Dieu a pris un enfant ». Le champ lexical (dire, prendre, enfant, Gloire a Lui) montre que le verset structure une refutation : d'abord la parole fausse (qalu), puis la glorification qui la rejette (subhanahu), puis la rectification (bal). Le verbe dire introduit le discours rapporte — le Coran cite la parole pour la refuter.",
              axe2_voisins: "Le verset 113 rapportait d'autres paroles fausses (« les juifs ont dit... les chretiens ont dit... »). Le verset 116 rapporte une autre parole fausse — l'attribution d'un enfant a Dieu. Le schema est le meme : « ils ont dit » + parole fausse + refutation. Le verset 117 repondra par la creation ex nihilo — Dieu n'engendre pas, Il cree.",
              axe3_sourate: "Le verbe qalu est un des verbes les plus frequents de la sourate al-Baqarah. La sourate rapporte de nombreuses paroles — celles des croyants, des dissimulateurs, des enfants d'Israel, des chretiens. Chaque « qalu » est suivi d'une evaluation — la parole est soit confirmee soit refutee. En 2:116, la parole est refutee par « subhanahu ».",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. Le verbe qalu est le verbe le plus utilise pour rapporter des paroles — vraies ou fausses. En 2:116, le Coran rapporte la parole fausse pour la refuter publiquement. Le schema « qalu... subhanahu/bal » est une technique de refutation coranique.",
              axe5_frequence: "Pour la mission du khalifa, la parole est un outil de la mission — mais aussi une arme de corruption. Ceux qui disent « Dieu a pris un enfant » corrompent la mission par la parole. Le khalifa doit distinguer la parole vraie de la parole fausse."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion est hors sujet — le verbe qalu designe une affirmation publique, pas une reflexion interieure."
            },
            "Sens isolé/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: "Le sens de puissance est hors sujet — le contexte est la parole prononcee."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: "Le sens de troupeau est hors sujet — le verbe qalu designe l'acte de parler."
            }
          }
        }
      },
      // khdh pos=2
      {
        word_key: "khdh", position: 2, sense_chosen: "prendre",
        analysis_axes: {
          sense_chosen: "prendre",
          concept_chosen: "Prise/Saisie",
          concepts: {
            "Prise/Saisie": {
              status: "retenu",
              senses: ["prendre", "saisir", "recevoir"],
              proof_ctx: "Le verbe ittakhadha est un accompli 3MS de la forme VIII de la racine kh-dh-dh. Le Lane's donne : prendre, saisir, adopter, choisir. La forme VIII (if'tala) ajoute l'idee de choix delibere — prendre pour soi-meme, s'attribuer. Ici le sujet est Dieu et l'objet est « waladan » (un enfant). L'affirmation attribue a Dieu l'acte de prendre un enfant pour Lui-meme. La distinction avec « adopter » (probable) est que le sens premier est la prise, pas l'adoption formelle.",
              axe1_verset: "Le verbe ittakhadha est l'acte attribue faussement a Dieu — prendre un enfant. Le champ lexical (dire, prendre, enfant, Gloire a Lui) montre que l'attribution est l'objet de la refutation. L'acte de « prendre » implique un mouvement vers soi — Dieu aurait pris un enfant pour Lui. Le verset refute cette idee par la glorification (subhanahu) et la rectification (bal) — Dieu ne prend pas, Il possede deja tout.",
              axe2_voisins: "Le verset 115 affirmait la vastitude de Dieu — Il est partout. Le verset 116 enchaine : ceux qui disent que Dieu a pris un enfant Le reduisent a un acte humain (engendrer). La progression est : Dieu est vaste (115) → Il ne prend pas un enfant (116) → Il cree (117). La prise est un acte de limitation incompatible avec la vastitude.",
              axe3_sourate: "La racine kh-dh-dh a la forme VIII apparait dans la sourate al-Baqarah en 2:51 (ils ont pris le veau), 2:80 (Dieu a pris un pacte), 2:116 (Dieu a pris un enfant). La forme VIII marque un choix delibere — chaque « ittakhadha » est un acte volontaire. En 2:116, l'attribution est fausse — Dieu n'a pas fait ce choix.",
              axe4_coherence: "La racine kh-dh-dh apparait environ 273 fois dans le Coran. La forme VIII ittakhadha est utilisee pour l'attribution deliberee. En 4:125, « Dieu a pris Abraham comme ami intime ». En 2:116, la prise d'un enfant est refutee. Le Coran distingue ce que Dieu prend reellement (un ami, un prophete) et ce qu'on Lui attribue faussement (un enfant).",
              axe5_frequence: "Pour la mission du khalifa, attribuer un enfant a Dieu est une corruption de la mission car elle humanise le mandant. Le khalifa doit comprendre Dieu comme transcendant — pas comme un etre qui engendre. La mission repose sur la transcendance de Dieu, pas sur Son anthropomorphisation."
            },
            "Adoption/Choix": {
              status: "probable",
              senses: ["adopter"],
              proof_ctx: "Le sens d'adoption est tres proche de la prise — la forme VIII ittakhadha porte specifiquement le sens d'adopter, choisir pour soi-meme. La distinction philosophique avec la prise est que l'adoption implique une relation durable (adopter un enfant, adopter une position), tandis que la prise est l'acte ponctuel de saisir. Le verset parle de l'attribution d'un enfant a Dieu — l'adoption serait le sens le plus proche si l'on insiste sur la relation. Mais la refutation (subhanahu) montre que le probleme est l'acte meme de prendre, pas la relation qui en decoulerait.",
              axe1_verset: "Le sens d'adoption pourrait convenir si le verset insistait sur la relation entre Dieu et l'enfant. Mais le verset refute immediatement par subhanahu — la glorification rejette l'acte meme. Le champ lexical (prendre, enfant, Gloire a Lui, mais) montre que l'acte est l'objet de la refutation, pas la relation.",
              axe2_voisins: "Le verset 117 precisera que Dieu cree en disant « sois » — la creation est un acte de parole, pas d'engendrement. Le sens d'adoption supposerait un processus, tandis que la creation divine est instantanee. Le contexte favorise la prise (acte ponctuel refute) sur l'adoption (relation refutee).",
              axe3_sourate: "La sourate utilise ittakhadha dans des contextes varies — prendre le veau, prendre un ami. Le sens oscille entre prise et adoption selon le contexte. En 2:116, le refut immediat (subhanahu) favorise le sens de prise ponctuelle.",
              axe4_coherence: "Le Coran utilise ittakhadha waladan en 2:116, 10:68, 17:111, 18:4, 19:35, 19:88, 21:26, 23:91, 25:2, 39:4, 72:3. Chaque occurrence est refutee. Le schema est constant : attribution fausse + refutation. Le sens est toujours « prendre/adopter un enfant » — les deux sens sont possibles.",
              axe5_frequence: "L'adoption comme concept supposerait que Dieu etablit une relation parentale. La mission du khalifa repose sur une relation de mandat, pas de filiation. L'adoption est une forme de limitation que la mission rejette."
            },
            "Châtiment": {
              status: "nul",
              senses: ["chatier"],
              proof_ctx: "Le sens de chatiment est hors sujet — le verbe ittakhadha dans ce contexte designe l'acte de prendre un enfant."
            }
          }
        }
      },
      // llh pos=3
      {
        word_key: "llh", position: 3, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite", "dieu", "Dieu", "theologie"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif — sujet du verbe ittakhadha dans le discours rapporte. C'est a Dieu que l'on attribue faussement l'acte de prendre un enfant. Le nominatif marque Dieu comme agent de l'acte attribue. La refutation (subhanahu) montre que Dieu est au-dessus de cet acte.",
              axe1_verset: "Le nom Allahu est le sujet de l'attribution fausse — « Dieu a pris un enfant ». Le verset refute cette attribution par la glorification (subhanahu) et la propriete universelle (a Lui ce qui est dans les cieux et la terre). Le champ lexical montre que Dieu est trop transcendant pour prendre un enfant — Il possede deja tout.",
              axe2_voisins: "Le verset 115 affirmait que Dieu est vaste et savant. Le verset 116 montre que cette vastitude exclut l'engendrement — un etre vaste ne prend pas un enfant. Le verset 117 affirmera que Dieu est le Createur des cieux et de la terre — Il cree, Il n'engendre pas.",
              axe3_sourate: "Le nom Allah dans la sourate al-Baqarah est toujours presente comme transcendant et souverain. En 2:116, la fausse attribution est refutee au nom de cette transcendance. La sourate ne tolere aucune limitation de Dieu — ni geographique (2:115) ni biologique (2:116).",
              axe4_coherence: "Le nom Allah associe a walad (enfant) dans le Coran est toujours dans un contexte de refutation. En 112:3, « Il n'a pas engendre et n'a pas ete engendre ». Le Coran rejette categoriquement toute filiation divine.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant transcendant. Lui attribuer un enfant c'est Le reduire a un etre biologique. La mission repose sur la transcendance du mandant."
            },
            "Adoration/Culte": {
              status: "nul",
              senses: ["adorer", "servir", "se consacrer au culte"],
              proof_ctx: "Le mot est le nom propre Allah au nominatif comme sujet du verbe."
            },
            "Confusion/Perplexité": {
              status: "nul",
              senses: ["etre confus"],
              proof_ctx: "Le sens de confusion est hors sujet — le mot est le nom propre de Dieu."
            },
            "Asservissement": {
              status: "nul",
              senses: ["reduire en esclavage"],
              proof_ctx: "Le sens d'asservissement est hors sujet — le contexte est l'attribution fausse d'un enfant."
            }
          }
        }
      },
      // wld pos=4
      {
        word_key: "wld", position: 4, sense_chosen: "enfant",
        analysis_axes: {
          sense_chosen: "enfant",
          concept_chosen: "Enfant/Descendance",
          concepts: {
            "Engendrer/Naissance": {
              status: "probable",
              senses: ["mettre au monde", "engendrer", "accoucher"],
              proof_ctx: "Le sens d'engendrement est le sens premier de la racine w-l-d — l'acte de mettre au monde. La distinction philosophique avec l'enfant/descendance est que l'engendrement est l'acte (processus biologique) tandis que l'enfant est le resultat (l'etre engendre). Le mot walad en 2:116 est un nom accusatif designant le resultat — un enfant, pas l'acte d'engendrer. Le verset ne dit pas que Dieu a engendre mais qu'Il a « pris » (ittakhadha) un enfant — la prise est differente de l'engendrement. Le sens d'enfant (resultat) est donc plus precis que l'engendrement (processus).",
              axe1_verset: "Le sens d'engendrement est le processus biologique sous-jacent a l'attribution — dire que Dieu a pris un enfant implique un engendrement. Le champ lexical (prendre, enfant, Gloire a Lui) montre cependant que le verset vise l'attribution de l'enfant, pas le processus biologique. La refutation (subhanahu) rejette l'idee meme d'un enfant pour Dieu.",
              axe2_voisins: "Le verset 117 dira que Dieu cree en disant « sois » — la creation divine est un acte de parole, pas un processus biologique. L'engendrement est un processus humain qui ne s'applique pas a Dieu. Le contexte favorise le sens d'enfant (resultat) sur l'engendrement (processus).",
              axe3_sourate: "La racine w-l-d est rare dans la sourate al-Baqarah — 2:116, 2:233 (les meres allaitent leurs enfants). Le contexte de 2:233 est biologiquement humain. En 2:116, l'attribution est rejetee car elle humanise Dieu.",
              axe4_coherence: "Le Coran rejette l'engendrement divin de maniere categorique en 112:3. En 2:116, le mot walad est le resultat attribue faussement. Le Coran nie a la fois le processus (engendrer) et le resultat (un enfant) quand il s'agit de Dieu.",
              axe5_frequence: "L'engendrement est un processus biologique propre a la creation. Le khalifa est un etre engendre — Dieu ne l'est pas. La distinction entre le Createur et la creature est fondamentale pour la mission."
            },
            "Enfant/Descendance": {
              status: "retenu",
              senses: ["enfant", "nouveau-ne", "garcon serviteur", "contemporain de naissance", "pere / mere / parents", "peuple tribu famille", "enfance", "lieu de naissance", "moment de naissance"],
              proof_ctx: "Le mot waladan est un nom singulier indefini accusatif de la racine w-l-d. Le Lane's donne : enfant, progéniture, ce qui est engendre. Walad est le resultat de l'engendrement — l'etre engendre. L'indefini (sans article) marque l'indefinition — un enfant quelconque, sans specifier lequel. Le mot ne specifie pas le sexe — walad n'est pas ibn (fils) ni bint (fille). L'attribution d'un walad a Dieu est refutee car Dieu possede tout ce qui existe — Il n'a pas besoin d'engendrer pour posseder.",
              axe1_verset: "Le mot waladan est l'objet de l'attribution fausse — « Dieu a pris un enfant ». Le champ lexical (prendre, enfant, Gloire a Lui, a Lui ce qui est dans les cieux et la terre) montre que la refutation repose sur la possession universelle : Dieu n'a pas besoin d'un enfant car tout Lui appartient deja. L'enfant supposerait une descendance — une continuation biologique — qui est incompatible avec la nature eternelle de Dieu.",
              axe2_voisins: "Le verset 115 affirmait la vastitude de Dieu. Le verset 116 montre que cette vastitude exclut l'enfant — un etre vaste n'a pas besoin de progéniture pour continuer. Le verset 117 repondra que Dieu cree par la parole — Il dit « sois » et la chose est. La creation divine transcende l'engendrement biologique.",
              axe3_sourate: "La racine w-l-d apparait dans la sourate al-Baqarah en 2:116 et 2:233. En 2:233, le contexte est humain (les meres et leurs enfants). En 2:116, l'attribution d'un enfant a Dieu est refutee. La sourate distingue clairement le domaine humain (ou l'enfant est naturel) et le domaine divin (ou l'enfant est impossible).",
              axe4_coherence: "La racine w-l-d apparait environ 102 fois dans le Coran. En 2:116, 10:68, 17:111, 18:4, 19:35, 19:88, 21:26, 23:91, 25:2, 39:4, 72:3, l'attribution d'un walad a Dieu est systematiquement refutee. En 112:3, « Il n'a pas engendre et n'a pas ete engendre ». Le Coran est categorique : Dieu n'a pas d'enfant.",
              axe5_frequence: "Pour la mission du khalifa, l'enfant est un concept humain lie a la biologie et a la mortalite. Le khalifa est mortel et a besoin de descendance pour continuer l'espece. Dieu est eternel et n'a pas ce besoin. Attribuer un enfant a Dieu c'est confondre le Createur et la creature — une confusion fatale pour la mission."
            },
            "Éducation/Croissance": {
              status: "nul",
              senses: ["elever eduquer", "rudesse illettrisme"],
              proof_ctx: "Le sens d'education est hors sujet — le mot walad designe l'enfant, pas l'acte d'eduquer."
            },
            "Production/Innovation": {
              status: "nul",
              senses: ["innover produire", "etre engendre (chose)", "esprit de parti engendre", "post-classique innovant", "forge falsifie"],
              proof_ctx: "Le sens de production est hors sujet — le contexte est l'attribution d'un enfant a Dieu, pas la production d'objets."
            }
          }
        }
      },
      // sbh pos=5
      {
        word_key: "sbh", position: 5, sense_chosen: "glorifier",
        analysis_axes: {
          sense_chosen: "glorifier",
          concept_chosen: "Glorification/Louange",
          concepts: {
            "Glorification/Louange": {
              status: "retenu",
              senses: ["glorifier", "louer", "prier", "subhana"],
              proof_ctx: "Le mot subhanahu est un nom verbal accusatif absolu de la racine s-b-h avec pronom suffixe 3MS (hu = Lui). Le Lane's donne : glorifier, louer, declarer exempt de tout defaut. Subhana est une exclamation figee de glorification — Gloire a Lui ! L'exclamation rejette l'affirmation precedente en declarant Dieu au-dessus de ce qu'on Lui attribue. Le pronom « hu » renvoie a Dieu. La distinction avec « nager » (nul) est que le mot est ici une exclamation liturgique, pas un verbe de natation.",
              axe1_verset: "Le mot subhanahu est la refutation centrale du verset — il rejette l'attribution d'un enfant a Dieu. Le champ lexical (dire, prendre, enfant, Gloire a Lui, mais) montre que la glorification est le pivot du verset : la fausse attribution est donnee, puis immediatement rejetee par la glorification. Subhana affirme que Dieu est exempt de tout defaut — y compris le besoin d'engendrer.",
              axe2_voisins: "Le verset 115 affirmait la vastitude et la science de Dieu. Le verset 116 utilise subhanahu pour rejeter ce qui contredit cette vastitude. La glorification est la reaction immediate a toute limitation attribuee a Dieu. Le verset 117 completera la refutation par la creation divine.",
              axe3_sourate: "La racine s-b-h apparait dans la sourate al-Baqarah en 2:32 (les anges glorifient), 2:116 (Gloire a Lui). La glorification est un acte de reconnaissance de la transcendance divine. Les anges glorifient (2:32) et le Coran glorifie (2:116) — la glorification est universelle.",
              axe4_coherence: "L'exclamation subhana apparait environ 90 fois dans le Coran. En 2:116, 4:171, 6:100, 10:68, 17:111, 23:91, 39:4, elle refute l'attribution d'un enfant. Subhana est la formule de refutation par excellence — elle declare Dieu au-dessus de l'attribution. Le Coran utilise subhana comme bouclier contre l'anthropomorphisme.",
              axe5_frequence: "Pour la mission du khalifa, la glorification est l'acte de maintenir la transcendance du mandant. Le khalifa doit glorifier Dieu — Le declarer au-dessus de toute attribution humaine. La glorification protege la mission contre la corruption theologique."
            },
            "Mouvement/Flottement": {
              status: "nul",
              senses: ["nager", "flotter", "voyager rapidement"],
              proof_ctx: "Le sens de nager est le sens premier physique de la racine s-b-h. Mais le mot subhana est une exclamation liturgique figee signifiant « Gloire a ». Le contexte est la refutation d'une attribution fausse a Dieu, pas un mouvement physique."
            }
          }
        }
      },
      // smw pos=10
      {
        word_key: "smw", position: 10, sense_chosen: "cieux",
        analysis_axes: {
          sense_chosen: "cieux",
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["ciel", "toit", "nuage", "pluie", "herbage", "dos", "semelle superieure", "piece de tissu superieure", "celeste", "bounty"],
              proof_ctx: "Le mot as-samawati est un pluriel feminin defini au genitif de la racine s-m-w. Le Lane's donne : ciel, ce qui est au-dessus, voute celeste. Le pluriel (samawat) designe la multiplicite des cieux — le Coran mentionne sept cieux. L'article defini (al-) marque les cieux comme realite connue et universelle. Ici « ma fi as-samawati wa-l-ardi » (ce qui est dans les cieux et la terre) englobe la totalite de l'existence. La distinction avec « nom » (sens de ism) est que le mot est ici samawat (cieux), pas ism (nom).",
              axe1_verset: "Le mot as-samawati fait partie de l'expression « ce qui est dans les cieux et la terre » qui affirme la possession universelle de Dieu. Le champ lexical (a Lui, ce qui, cieux, terre, tous, devoues) montre que le verset repond a l'attribution d'un enfant par l'affirmation de la propriete totale. Dieu n'a pas besoin d'un enfant car tout dans les cieux et la terre Lui appartient deja.",
              axe2_voisins: "Le verset 115 parlait de l'Est et l'Ouest. Le verset 116 elargit a la totalite — les cieux et la terre. Le verset 117 dira que Dieu est le Createur des cieux et de la terre. La progression est : les directions (115) → le contenu (116) → la creation (117). Les cieux sont la dimension verticale completant les directions horizontales.",
              axe3_sourate: "La racine s-m-w au sens de « ciel » apparait frequemment dans la sourate al-Baqarah. En 2:29, « Il a cree pour vous tout ce qui est sur terre, puis Il S'est tourne vers le ciel et en a fait sept cieux ». En 2:116, les cieux sont la propriete de Dieu. La sourate presente les cieux comme creation et propriete divine.",
              axe4_coherence: "L'expression « ma fi as-samawati wa-l-ardi » (ce qui est dans les cieux et la terre) apparait plus de 40 fois dans le Coran. C'est une formule pour designer la totalite de l'existence. En 2:116, elle sert a refuter l'attribution d'un enfant — Dieu possede tout, Il n'a pas besoin d'engendrer.",
              axe5_frequence: "Pour la mission du khalifa, les cieux sont le domaine superieur de la creation divine. Le khalifa agit sur terre mais les cieux sont aussi sous la souverainete de Dieu. La mission s'inscrit dans un ordre cosmique qui depasse le terrestre."
            },
            "Nom/Identification": {
              status: "nul",
              senses: ["nom", "nommer"],
              proof_ctx: "Le sens de nom est hors sujet — le mot as-samawati est le pluriel de « ciel », pas le mot « nom » (ism)."
            },
            "Hauteur/Élévation": {
              status: "nul",
              senses: ["etre haut", "se dresser", "monter"],
              proof_ctx: "Le sens de hauteur est le sens etymologique premier. Les cieux sont ce qui est haut. Mais le mot as-samawat designe les cieux comme realite cosmique, pas un adjectif de hauteur."
            }
          }
        }
      },
      // ard pos=12
      {
        word_key: "ard", position: 12, sense_chosen: "terre",
        analysis_axes: {
          sense_chosen: "terre",
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays", "bas"],
              proof_ctx: "Le mot al-ardi est un nom feminin singulier defini au genitif de la racine a-r-d. Le Lane's donne : terre, sol, surface terrestre, partie basse. La terre est l'espace bas par opposition aux cieux (haut). L'article defini marque la terre comme realite connue et unique. Ici « wa-l-ardi » complete « as-samawati » pour former la totalite — cieux et terre = tout ce qui existe. Cette racine n'a qu'un seul concept majeur, le choix est immediat.",
              axe1_verset: "Le mot al-ardi complete les cieux pour former la totalite de la creation. Le champ lexical (a Lui, cieux, terre, tous, devoues) montre que tout ce qui existe — en haut et en bas — appartient a Dieu. La terre est le lieu de la creation humaine. Dire que Dieu a pris un enfant revient a confondre le Createur avec la creature terrestre — une confusion que le verset rejette.",
              axe2_voisins: "Le verset 115 parlait de l'Est et l'Ouest — les directions horizontales de la terre. Le verset 116 ajoute la dimension verticale — cieux et terre. Le verset 117 precisera que Dieu est le « Createur des cieux et de la terre ». La terre est le lieu de l'action humaine et de la mission du khalifa.",
              axe3_sourate: "La racine a-r-d apparait frequemment dans la sourate al-Baqarah. En 2:11, « ne semez pas la corruption sur terre ». En 2:22, « Il a fait de la terre un lit pour vous ». En 2:30, « Je vais placer sur terre un khalifa ». La terre est le lieu de la mission — c'est sur terre que le khalifa est place.",
              axe4_coherence: "La racine a-r-d apparait environ 461 fois dans le Coran. La terre est un des mots les plus frequents. L'expression « ma fi as-samawati wa-l-ardi » englobe la totalite. En 2:116, la terre et les cieux sont la propriete de Dieu — rien ne Lui echappe. L'attribution d'un enfant est absurde face a cette propriete totale.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le lieu de la mission. C'est sur terre que le khalifa est place (2:30) et c'est sur terre qu'il doit exercer la justice. La terre appartient a Dieu — le khalifa en est le gerant, pas le proprietaire."
            },
            "Sens isolé/Rhume": {
              status: "nul",
              senses: ["rhume"],
              proof_ctx: "Le sens de rhume est hors sujet — le mot al-ard designe la terre."
            },
            "Sens isolé/Tremblement": {
              status: "nul",
              senses: ["tremblement"],
              proof_ctx: "Le sens de tremblement est hors sujet — le mot al-ard designe la terre comme lieu."
            }
          }
        }
      },
      // kll pos=13
      {
        word_key: "kll", position: 13, sense_chosen: "tout",
        analysis_axes: {
          sense_chosen: "tout",
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              senses: ["tout", "chaque", "totalite"],
              proof_ctx: "Le mot kullun est un nom singulier indefini nominatif de la racine k-l-l. Le Lane's donne : tout, chaque, totalite, ensemble sans exception. Kull englobe la totalite — il n'y a pas d'exception. Ici « kullun lahu qanituna » (tous Lui sont devoues) affirme la devotion universelle. L'indefini (sans article) marque que la totalite est absolue — pas un « tout » defini mais TOUT sans exception.",
              axe1_verset: "Le mot kullun ferme le verset par l'universalite — TOUS sont devoues a Dieu. Le champ lexical (a Lui, cieux, terre, tous, devoues) montre que la possession et la devotion sont universelles. Le verset repond a l'attribution d'un enfant par la totalite : Dieu n'a pas besoin d'un enfant car tout Lui est devoue. Un enfant serait une partie — Dieu possede le tout.",
              axe2_voisins: "Le verset 115 affirmait l'universalite spatiale (Est et Ouest). Le verset 116 affirme l'universalite de la devotion (tous sont devoues). Le verset 117 affirmera l'universalite de la creation (Createur des cieux et de la terre). L'universalite est le theme qui relie les trois versets.",
              axe3_sourate: "Le mot kull apparait frequemment dans la sourate al-Baqarah. En 2:20, « Dieu est sur toute chose puissant ». En 2:29, « Il a cree pour vous tout ce qui est sur terre ». En 2:116, tout est devoue a Dieu. La sourate insiste sur la totalite de la souverainete divine.",
              axe4_coherence: "La racine k-l-l apparait environ 384 fois dans le Coran. Le mot kull est un des mots les plus structurants du Coran — il affirme l'universalite des realites divines. En 2:116, l'universalite de la devotion refute la particularite d'un enfant. Le tout est a Dieu — pas une partie privilegiee.",
              axe5_frequence: "Pour la mission du khalifa, la totalite signifie que la mission concerne tout — pas seulement une partie de l'existence. Le khalifa est responsable de la totalite de son champ d'action. La devotion de tous envers Dieu est le cadre dans lequel la mission s'inscrit."
            },
            "Émoussement/Faiblesse": {
              status: "nul",
              senses: ["s'emousser", "etre fatigue"],
              proof_ctx: "Le sens d'emoussement est hors sujet — le mot kull designe la totalite."
            },
            "Charge/Dépendance": {
              status: "nul",
              senses: ["fardeau", "personne a charge"],
              proof_ctx: "Le sens de charge est hors sujet — le contexte est la totalite universelle."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["couronner"],
              proof_ctx: "Le sens de couronnement est hors sujet — le mot kull designe la totalite."
            }
          }
        }
      },
      // qnt pos=15
      {
        word_key: "qnt", position: 15, sense_chosen: "devot",
        analysis_axes: {
          sense_chosen: "devot",
          concept_chosen: "Dévotion/Humilité",
          concepts: {
            "Dévotion/Humilité": {
              status: "retenu",
              senses: ["obeir devotement", "etre humble", "devotion"],
              proof_ctx: "Le mot qanituna est un participe actif pluriel nominatif de la racine q-n-t. Le Lane's donne : etre devot, obeir humblement, se tenir en devotion silencieuse, etre soumis a Dieu avec constance. Le participe actif pluriel designe un etat permanent — ils sont constamment en devotion. Ici « kullun lahu qanituna » (tous Lui sont devoues) affirme que la totalite de la creation est en etat de devotion permanente envers Dieu. Cette racine n'a qu'un seul concept, le choix est immediat.",
              axe1_verset: "Le mot qanituna est le dernier mot du verset — il ferme par l'affirmation de la devotion universelle. Le champ lexical (a Lui, cieux, terre, tous, devoues) montre que le verset culmine dans l'affirmation que tout est devoue a Dieu. La devotion est l'etat naturel de la creation — meme ceux qui attribuent un enfant a Dieu sont, qu'ils le sachent ou non, dans la devotion cosmique. Le participe actif marque un etat permanent et continu.",
              axe2_voisins: "Le verset 112 parlait de ceux qui soumettent leur visage a Dieu. Le verset 116 generalise : tous sont devoues a Dieu. La soumission volontaire de 2:112 devient la devotion universelle de 2:116 — meme involontaire. Le verset 117 montrera que la creation obelit a la parole de Dieu (« sois ! ») — la devotion est la reponse naturelle a la creation divine.",
              axe3_sourate: "La racine q-n-t apparait dans la sourate al-Baqarah en 2:116 et 2:238 (la priere du milieu avec devotion). La sourate lie la devotion a la priere et a l'etat cosmique. En 2:116, la devotion est universelle — en 2:238, elle est exigee specifiquement dans la priere. La sourate montre que la devotion cosmique doit se refleter dans la devotion rituelle.",
              axe4_coherence: "La racine q-n-t apparait environ 13 fois dans le Coran. En 3:17, « les devots (qanitina) a l'aube ». En 33:35, « les devots et les devotes ». En 2:116, la devotion est universelle. Le Coran montre que la devotion est a la fois un etat cosmique (tout est devoue) et un choix humain (les devots choisissent la devotion).",
              axe5_frequence: "Pour la mission du khalifa, la devotion est l'attitude fondamentale de la mission. Le khalifa est devoue a Dieu — c'est la base de sa mission. La devotion universelle de la creation montre que le khalifa est en harmonie avec l'ordre cosmique quand il est devoue. La mission du khalifa est de realiser consciemment ce que la creation fait naturellement."
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

  const verseIds = [121, 122, 123];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 114, 115, 116 ===\n');
  for (const v of [114, 115, 116]) {
    await processVerse(v);
  }
  await syncWordMeanings();
  console.log('\n=== PIPELINE V114-116 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
