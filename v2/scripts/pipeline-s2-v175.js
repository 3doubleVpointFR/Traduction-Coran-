const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 175
// verse_id=182, analysis_id=541
// "Ceux-la sont ceux qui ont achete l'egarement contre
//  la guidance et le chatiment contre le pardon. Comme
//  ils sont endurants face au Feu !"
// Commerce spirituel inverse : egarement au lieu de guidance
// =====================================================

const verseData = {
  175: {
    verse_id: 182,
    analysis_id: 541,
    translation_arab: "Ceux-la sont ceux qui ont achete l'egarement au prix de la guidance, et le chatiment au prix du pardon. Comme ils sont endurants face au Feu !",
    full_translation: "Ceux-la sont ceux qui ont achete l'egarement en echange de la bonne direction, et le chatiment en echange du pardon. Qu'est-ce qui leur fait supporter le Feu avec tant de patience !",
    translation_explanation: `§DEMARCHE§
Le verset conclut le passage sur ceux qui dissimulent ce que Dieu a revele dans le Livre, en les decrivant par une metaphore commerciale inversee : ils ont achete l'egarement au prix de la guidance. Le verbe **ishtaraw** est un accompli 3MP de la racine sh-r-y a la forme VIII. Le Lane's donne : acheter, acquerir par echange. La forme VIII (ishtara) est le fait d'acheter — l'agent est l'acheteur. L'image est celle d'un commerce ou l'on donne quelque chose de valeur (la guidance) pour obtenir quelque chose de moindre valeur (l'egarement). Le commerce est inverse par rapport a toute logique : on paie cher pour obtenir de la fausse monnaie. Le nom **ad-dalalata** est un nom feminin singulier accusatif de la racine d-l-l. Le Lane's donne : egarement, deviation, perte du bon chemin. La dalala est l'absence de guidance — c'est le fait de quitter le sentier droit pour se perdre. Le mot est a l'accusatif car c'est l'objet achete (le maf'ul bihi). Acheter l'egarement c'est choisir deliberement de se perdre. Le nom **al-huda** est un nom masculin singulier de la racine h-d-y. Le Lane's donne : guidance, direction, chemin droit. Le huda est la guidance divine — le chemin que Dieu montre. Il est ici le prix paye : ils ont donne la guidance pour obtenir l'egarement. La guidance est ce qu'ils possedaient (par la revelation) et qu'ils ont sacrifie. Le nom **al-'adhaba** est un nom masculin singulier accusatif de la racine '-dh-b. Le Lane's donne : chatiment, punition, tourment. Le 'adhab est la souffrance infligee comme consequence d'un acte. C'est le deuxieme objet achete — apres l'egarement, ils acquierent le chatiment. La progression est logique : l'egarement mene au chatiment. Le nom **al-maghfirati** est un nom feminin singulier genitif de la racine gh-f-r. Le Lane's donne : pardon, couverture des peches, remission. Le maghfira est l'acte de couvrir les peches — le pardon divin qui efface les fautes. C'est le deuxieme prix paye : ils ont donne le pardon divin pour obtenir le chatiment. La structure est symetrique : egarement contre guidance, chatiment contre pardon — deux echanges desavantageux. Le verbe **asbara** est un verbe exclamatif 3MS de la racine s-b-r a la forme IV. Le Lane's donne : etre patient, endurer, supporter. La forme IV (asbara) dans une phrase exclamative signifie « comme ils sont patients ! » — c'est une exclamation d'etonnement ironique. L'ironie est mordante : leur « patience » face au Feu n'est pas une vertu mais une folie — ils supportent le chatiment comme s'ils avaient choisi de l'endurer. Le pronom suffixe **-hum** renvoie a « ceux-la » (ula'ika) — ceux qui dissimulent la revelation. Le nom **an-nari** est un nom feminin singulier genitif de la racine n-w-r. Le Lane's donne : feu, flamme, combustion. Le nar est le Feu de l'enfer — le lieu du chatiment eternel. Le Lane's note que la racine n-w-r porte aussi le sens de lumiere (nur), mais le nar est le feu qui brule, pas la lumiere qui eclaire. Le verset se termine par cette image saisissante : des gens qui endurent le Feu avec « patience » — une patience absurde puisqu'ils auraient pu choisir le pardon.

§JUSTIFICATION§
**egarement** — Le sens retenu est « egarement/deviation ». Le nom ad-dalalata designe l'absence de guidance, le fait de quitter le bon chemin. L'alternative « perdition » est ecartee car « egarement » est plus courant en francais et preserve l'idee active de se perdre.

**guidance** — Le sens retenu est « guidance/direction ». Le nom al-huda designe le chemin montre par Dieu. L'alternative « cadeau » est ecartee car le contexte est la direction spirituelle, pas le don materiel.

**chatiment** — Le sens retenu est « chatiment/punition ». Le nom al-'adhaba designe la souffrance punitive. L'alternative « douceur » est ecartee car la racine '-dh-b porte le sens de tourment, pas de douceur — la confusion vient de la racine 'adhb (eau douce) qui est distincte de 'adhab (chatiment).

**pardon** — Le sens retenu est « pardon/couverture ». Le nom al-maghfirati designe l'acte divin de couvrir les peches. L'alternative « casque » est ecartee car le sens de « couvrir » dans gh-f-r est moral (couvrir les fautes), pas materiel (couvrir la tete).

**endurants** — Le sens retenu est « patience/endurance ». Le verbe asbara est dans une forme exclamative exprimant l'etonnement ironique. L'alternative « emprisonner » est ecartee car le verbe est a la forme IV exclamative, pas a la forme de contrainte.

**Feu** — Le sens retenu est « feu ». Le nom an-nari designe le Feu de l'enfer. L'alternative « lumiere » est ecartee car bien que la racine n-w-r porte aussi le sens de lumiere (nur), le mot nar designe specifiquement le feu qui brule.

§CRITIQUE§
Les traductions courantes rendent ce verset de facon similaire. La principale difficulte est le verbe exclamatif « asbara » que certains traduisent par « qu'est-ce qui leur fait endurer » (Hamidullah) et d'autres par « comme ils sont patients ». Notre traduction « comme ils sont endurants » preserve l'ironie de l'original — ce n'est pas une vraie patience mais une folie de supporter le chatiment quand on aurait pu avoir le pardon. Le mot « endurants » est prefere a « patients » car il souligne l'aspect physique de la souffrance face au Feu.`,
    segments: [
      { fr: "ceux-la sont ceux qui", phon: "ula'ika alladhina", arabic: "\u0623\u064f\u0648\u06df\u0644\u064e\u0670\u0653\u0626\u0650\u0643\u064e \u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 0 },
      { fr: "ont achete", pos: "verbe", phon: "ishtaraw", arabic: "\u0671\u0634\u0652\u062a\u064e\u0631\u064e\u0648\u06df\u0627\u06df", word_key: "shry", is_particle: false, sense_retenu: "acheter", position: 1 },
      { fr: "l'egarement", pos: "nom", phon: "ad-dalalata", arabic: "\u0671\u0644\u0636\u0651\u064e\u0644\u064e\u0670\u0644\u064e\u0629\u064e", word_key: "dll", is_particle: false, sense_retenu: "egarement", position: 2 },
      { fr: "au prix de", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 3 },
      { fr: "la guidance", pos: "nom", phon: "al-huda", arabic: "\u0671\u0644\u0652\u0647\u064f\u062f\u064e\u0649\u0670", word_key: "hdy", is_particle: false, sense_retenu: "guidance", position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 5 },
      { fr: "le chatiment", pos: "nom", phon: "al-'adhaba", arabic: "\u0671\u0644\u0652\u0639\u064e\u0630\u064e\u0627\u0628\u064e", word_key: "edb", is_particle: false, sense_retenu: "chatiment", position: 6 },
      { fr: "au prix de", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 7 },
      { fr: "le pardon", pos: "nom", phon: "al-maghfirati", arabic: "\u0671\u0644\u0652\u0645\u064e\u063a\u0652\u0641\u0650\u0631\u064e\u0629\u0650", word_key: "gfr", is_particle: false, sense_retenu: "pardon", position: 8 },
      { fr: "comme", phon: "fa-ma", arabic: "\u0641\u064e\u0645\u064e\u0627\u0653", is_particle: true, position: 9 },
      { fr: "ils sont endurants", pos: "verbe", phon: "asbara-hum", arabic: "\u0623\u064e\u0635\u0652\u0628\u064e\u0631\u064e\u0647\u064f\u0645\u0652", word_key: "sbr", is_particle: false, sense_retenu: "endurance", position: 10 },
      { fr: "face a", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 11 },
      { fr: "le Feu", pos: "nom", phon: "an-nari", arabic: "\u0671\u0644\u0646\u0651\u064e\u0627\u0631\u0650", word_key: "nwr", is_particle: false, sense_retenu: "feu", position: 12 }
    ],
    words: [
      // dll pos=4
      {
        word_key: "dll", position: 4, sense_chosen: "egarement",
        analysis_axes: {
          sense_chosen: "egarement",
          concept_chosen: "Égarement/Déviation",
          concepts: {
            "Égarement/Déviation": {
              status: "retenu",
              senses: ["égarement", "déviation", "perte du chemin", "erreur", "disparition"],
              proof_ctx: "Le nom ad-dalalata est un nom feminin singulier accusatif de la racine d-l-l. Le Lane's donne : egarement, deviation du droit chemin, etat de celui qui a quitte la voie droite. La dalala est l'oppose de la guidance (huda) — elle designe la perte du chemin, l'errance dans l'obscurite. Le mot est a l'accusatif car il est l'objet direct du verbe ishtaraw (acheter) — l'egarement est ce qu'ils ont acquis en echange de la guidance. L'image commerciale est saisissante : ils ont volontairement echange quelque chose de precieux contre quelque chose de nul.",
              axe1_verset: "Le nom ad-dalalata est le premier objet de la transaction inversee decrite dans le verset. Le champ lexical est construit sur une double opposition : egarement contre guidance, chatiment contre pardon. L'egarement est place en premier dans la transaction car c'est le choix fondamental — celui qui choisit l'egarement recevra le chatiment comme consequence naturelle. Le verset se termine par l'ironie de leur endurance face au Feu — consequence ultime de l'egarement choisi.",
              axe2_voisins: "Le verset 174 decrivait ceux qui dissimulent ce que Dieu a revele dans le Livre et qui l'echangent contre un prix derisoire. Le verset 175 tire la conclusion logique : ceux qui dissimulent la verite ont de fait « achete » l'egarement. Le verset 176 expliquera pourquoi ils meritent ce jugement. La progression est : dissimulation (174) → transaction inversee (175) → explication (176).",
              axe3_sourate: "La racine d-l-l apparait de nombreuses fois dans la sourate al-Baqarah. En 2:16, la meme metaphore commerciale est utilisee pour les hypocrites : « ceux qui ont achete l'egarement au prix de la guidance ». Le verset 2:175 reprend cette image presque mot pour mot, creant un echo delibere : les dissimulateurs de la verite sont comme les hypocrites du debut de la sourate. En 2:108, celui qui echange la foi contre la mecreance « s'est egare du droit chemin ».",
              axe4_coherence: "La racine d-l-l apparait environ 191 fois dans le Coran. Le schema « acheter l'egarement contre la guidance » est specifique aux versets 2:16 et 2:175. Le Coran oppose systematiquement dalala et huda comme les deux voies fondamentales. En 7:30, Dieu dit qu'un groupe a ete guide et qu'un autre a merite l'egarement. L'egarement coranique n'est pas accidentel mais choisi — c'est un acte delibere de refus de la guidance.",
              axe5_frequence: "Pour la mission du khalifa, l'egarement est l'anti-these de la mission. Le khalifa est celui qui suit la guidance — choisir l'egarement c'est renoncer a la mission. Le verset montre que l'egarement est un choix actif (acheter) et non une simple absence de connaissance. Le khalifa doit etre vigilant car l'egarement peut se presenter comme un commerce attractif, une transaction qui semble avantageuse mais qui est en realite ruineuse."
            },
            "Indication/Preuve": {
              status: "nul",
              senses: ["indication", "preuve", "démonstration"],
              proof_ctx: "Le sens d'indication est un sens secondaire de d-l-l — le dalil est celui qui guide, qui montre le chemin. Mais le mot ad-dalalata est le nom verbal de l'egarement, pas de l'indication. Le contexte oppose clairement dalala a huda."
            }
          }
        }
      },
      // hdy pos=5
      {
        word_key: "hdy", position: 5, sense_chosen: "guidance",
        analysis_axes: {
          sense_chosen: "guidance",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guidance", "direction", "chemin droit", "orientation", "conduite vers le bien"],
              proof_ctx: "Le nom al-huda est un nom masculin singulier de la racine h-d-y. Le Lane's donne : guidance, direction, le fait de montrer le bon chemin. Le huda est la guidance divine — le chemin que Dieu revele aux hommes par Ses livres et Ses messagers. Dans ce verset, al-huda est le prix paye dans la transaction inversee — ils avaient la guidance (par la revelation) et l'ont donnee en echange de l'egarement. La guidance est presentee comme un bien precieux que l'on peut perdre par un mauvais choix.",
              axe1_verset: "Le nom al-huda est le contrepoint de ad-dalalata dans la premiere partie de la transaction. Le verset construit deux paires opposees : egarement/guidance et chatiment/pardon. La guidance est le prix paye — ce qui montre qu'ils possedaient la guidance avant de la sacrifier. On ne peut acheter l'egarement qu'en donnant la guidance : le choix est binaire, on est dans l'un ou dans l'autre. Le verset culmine avec l'ironie du Feu — consequence ultime d'avoir abandonne la guidance.",
              axe2_voisins: "Le verset 174 mentionnait ceux qui dissimulent ce que Dieu a revele — la revelation est la guidance qu'ils avaient recue. Le verset 175 montre qu'en dissimulant la revelation, ils ont de fait echange la guidance contre l'egarement. Le verset 176 expliquera que cela vient du fait que Dieu a revele le Livre avec verite — la guidance etait disponible, ils l'ont refusee.",
              axe3_sourate: "La racine h-d-y est omni-presente dans la sourate al-Baqarah. Le premier mot apres les lettres isolees est « dhalika al-kitabu la rayba fihi hudan li-l-muttaqin » (2:2) — le Livre est guidance pour les pieux. En 2:38, la guidance est envoyee et ceux qui la suivent seront sauves. La sourate presente la guidance comme un fil conducteur : elle est offerte, acceptee par certains, refusee par d'autres. Le verset 2:175 decrit ceux qui la refusent.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. Le huda est un des concepts les plus centraux du texte coranique. En 2:185, le Coran est decrit comme « hudan li-l-nas » (guidance pour les gens). En 17:15, « celui qui se guide se guide pour lui-meme ». La guidance est toujours presentee comme un choix — Dieu la propose, l'homme l'accepte ou la refuse.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est le bien le plus precieux confie a l'humanite. Le khalifa est le depositaire de la guidance — celui qui la transmet aux autres. Le verset montre le danger de troquer la guidance contre l'egarement : c'est sacrifier sa mission pour un gain illusoire. La guidance est la boussole du khalifa — sans elle, il se perd et entraine les autres dans l'egarement."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice"],
              proof_ctx: "Le sens de cadeau/offrande est un sens concret de h-d-y — le hadiya est le cadeau qu'on offre. Le contexte est la guidance spirituelle, pas le don materiel. Le mot al-huda designe la direction divine, pas un present."
            }
          }
        }
      },
      // edb pos=6
      {
        word_key: "edb", position: 6, sense_chosen: "chatiment",
        analysis_axes: {
          sense_chosen: "chatiment",
          concept_chosen: "Châtiment/Punition",
          concepts: {
            "Châtiment/Punition": {
              status: "retenu",
              senses: ["châtiment", "punition", "tourment", "souffrance", "peine"],
              proof_ctx: "Le nom al-'adhaba est un nom masculin singulier accusatif de la racine '-dh-b. Le Lane's donne : chatiment, punition, tourment inflige comme sanction. Le 'adhab est la souffrance punitive — il n'est pas une souffrance aleatoire mais la consequence d'une transgression. Le mot est a l'accusatif car c'est le deuxieme objet achete dans la transaction inversee. Apres avoir achete l'egarement, ils acherent le chatiment — la progression est logique car l'egarement mene inevitablement au chatiment.",
              axe1_verset: "Le nom al-'adhaba est le deuxieme objet de la transaction inversee. Le verset construit une progression : l'egarement (choix intellectuel) mene au chatiment (consequence physique). Les deux paires se repondent symetriquement : egarement/guidance et chatiment/pardon. Le chatiment est le pendant negatif du pardon — celui qui refuse le pardon accepte de fait le chatiment. Le verset culmine avec le Feu (an-nar) qui est la forme ultime du chatiment.",
              axe2_voisins: "Le verset 174 mentionnait que ceux qui dissimulent « ne mangent dans leurs ventres que du feu ». Le chatiment de 2:175 fait echo a ce feu deja mentionne. Le verset 176 poursuivra en evoquant ceux qui « sont en dissension extreme » — le chatiment est la consequence de cette dissension. La sequence 174-175-176 construit une gradation : feu interieur → chatiment achete → dissension profonde.",
              axe3_sourate: "La racine '-dh-b apparait frequemment dans la sourate al-Baqarah. En 2:7, les mecreants auront « un chatiment immense ». En 2:49, le peuple de Pharaon infligeait un « mauvais chatiment ». En 2:85, ceux qui transgressent auront « le chatiment le plus severe au Jour de la Resurrection ». La sourate associe le chatiment a la transgression deliberee — celui qui savait et a refuse.",
              axe4_coherence: "La racine '-dh-b apparait environ 373 fois dans le Coran. Le chatiment est un theme central du discours coranique, toujours lie a la justice divine. En 3:188, ceux qui aiment etre loues sans raison auront un « chatiment douloureux ». Le chatiment coranique n'est jamais arbitraire — il est la consequence logique d'un choix. Le verset 2:175 le montre clairement : le chatiment est « achete » volontairement.",
              axe5_frequence: "Pour la mission du khalifa, le chatiment est l'avertissement supreme. Le khalifa doit comprendre que les consequences de ses choix sont proportionnelles a sa responsabilite. Le verset montre que le chatiment n'est pas impose de l'exterieur mais choisi par l'individu — acheter le chatiment c'est refuser activement le pardon. La mission du khalifa est de montrer que la voie du pardon est ouverte et que le chatiment n'est pas inevitable."
            },
            "Douceur/Fraîcheur": {
              status: "nul",
              senses: ["eau douce", "fraîcheur", "douceur"],
              proof_ctx: "Le sens de douceur vient de la racine '-dh-b dans le sens de 'adhb (eau douce) — mais le mot 'adhab (chatiment) est distinct. Le contexte est la punition, pas la douceur. La confusion vient de la proximite des deux formes."
            }
          }
        }
      },
      // gfr pos=7
      {
        word_key: "gfr", position: 7, sense_chosen: "pardon",
        analysis_axes: {
          sense_chosen: "pardon",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["pardon", "couverture des péchés", "rémission", "absolution", "effacement"],
              proof_ctx: "Le nom al-maghfirati est un nom feminin singulier genitif de la racine gh-f-r. Le Lane's donne : pardon, couverture des peches, acte de couvrir les fautes pour les effacer. Le maghfira est l'acte divin par excellence de misericorde — Dieu couvre les peches de Ses serviteurs et les efface. La racine gh-f-r porte l'idee de « couvrir » (le ghifar est le vetement qui couvre) — le pardon est une couverture qui cache les fautes. Le mot est au genitif car c'est le deuxieme prix paye dans la transaction : ils ont donne le pardon en echange du chatiment.",
              axe1_verset: "Le nom al-maghfirati est le pendant positif du chatiment dans la deuxieme paire de la transaction. Le verset construit une symetrie parfaite : egarement ↔ guidance, chatiment ↔ pardon. Le pardon est ce qu'ils avaient — la possibilite d'etre pardonnes par Dieu — et qu'ils ont sacrifie en echange du chatiment. L'ironie est double : non seulement ils ont perdu la guidance mais aussi le pardon. Le verset culmine avec le Feu — lieu ou il n'y a plus de pardon possible.",
              axe2_voisins: "Le verset 173 mentionnait que Dieu est « ghafurun rahim » (Pardonneur et Misericordieux) — le pardon etait disponible pour ceux qui mangeaient de la nourriture interdite par necessite. Le verset 175 montre ceux qui ont refuse ce pardon disponible. Le contraste entre 173 (pardon accessible) et 175 (pardon refuse) souligne la folie de leur choix.",
              axe3_sourate: "La racine gh-f-r apparait de nombreuses fois dans la sourate al-Baqarah. En 2:199, « Dieu est Pardonneur et Misericordieux ». En 2:218, « ceux qui emigrent et luttent dans le chemin de Dieu — ceux-la esperent la misericorde de Dieu, et Dieu est Pardonneur ». La sourate presente le pardon comme un attribut divin constant et accessible — ce qui rend d'autant plus grave le fait de le refuser.",
              axe4_coherence: "La racine gh-f-r apparait environ 234 fois dans le Coran. Le pardon est un des attributs les plus mentionnes de Dieu (al-Ghafur, al-Ghaffar). En 39:53, Dieu « pardonne tous les peches » — le pardon est total et sans limite. Le verset 2:175 montre l'aberration de refuser un pardon aussi genereux : c'est comme refuser un tresor gratuit pour acheter une punition couteuse.",
              axe5_frequence: "Pour la mission du khalifa, le pardon est le fondement de l'esperance. Le khalifa vit dans la certitude que le pardon divin est accessible et que chaque erreur peut etre reparee. Le verset montre que le refus du pardon est le pire des commerces — c'est la transaction la plus desavantageuse qui soit. La mission du khalifa est de rappeler que le pardon est toujours ouvert et que le chatiment n'est que la consequence du refus de ce pardon."
            },
            "Protection/Casque": {
              status: "nul",
              senses: ["casque", "armure", "protection matérielle"],
              proof_ctx: "Le sens de casque/protection materielle vient du sens concret de gh-f-r — le mighfar est le casque qui couvre la tete. Mais al-maghfira est le nom verbal qui designe l'acte de pardonner, pas un objet de protection. Le contexte est le pardon divin, pas l'equipement guerrier."
            }
          }
        }
      },
      // sbr pos=9
      {
        word_key: "sbr", position: 9, sense_chosen: "endurance",
        analysis_axes: {
          sense_chosen: "endurance",
          concept_chosen: "Patience/Endurance",
          concepts: {
            "Patience/Endurance": {
              status: "retenu",
              senses: ["patience", "endurance", "constance", "persévérance", "résistance"],
              proof_ctx: "Le verbe asbara-hum est une forme exclamative de la racine s-b-r a la forme IV. Le Lane's donne : etre patient, endurer, supporter avec constance. La forme IV (asbara) dans une construction exclamative (ma asbara-hum) signifie « comme ils sont patients / comme ils endurent ! ». L'exclamation est ironique — ce n'est pas un eloge de leur patience mais un etonnement devant leur folie. Ils « endurent » le Feu comme s'ils l'avaient choisi — et c'est exactement ce qu'ils ont fait en achetant le chatiment contre le pardon.",
              axe1_verset: "Le verbe asbara-hum clot le verset par une exclamation ironique. Le verset passe de la description (ils ont achete l'egarement, le chatiment) a l'exclamation (comme ils sont patients face au Feu). Le sabr est normalement une vertu dans le Coran — ici il est detourne ironiquement. Leur « endurance » face au Feu n'est pas un acte de courage mais de folie. L'ironie finale donne au verset sa force rhetorique — le lecteur est invite a s'etonner de la betise de ce commerce.",
              axe2_voisins: "Le verset 174 parlait de ceux qui mangent du feu dans leurs ventres — le Feu du verset 175 reprend cette image. Le verset 177 parlera du vrai sabr (patience) comme vertu des pieux. Le contraste entre le faux sabr de 175 (endurance ironique face au Feu) et le vrai sabr de 177 (patience dans l'adversite, la detresse et au moment du combat) est delibere.",
              axe3_sourate: "La racine s-b-r apparait plusieurs fois dans la sourate al-Baqarah. En 2:45, « cherchez secours dans la patience et la priere ». En 2:153, « Dieu est avec les patients ». En 2:155, « annonce la bonne nouvelle aux patients ». En 2:177, les vrais pieux sont « patients dans la detresse et au moment du combat ». Le verset 2:175 est le seul usage ironique du sabr dans la sourate — partout ailleurs, la patience est une vertu louee.",
              axe4_coherence: "La racine s-b-r apparait environ 103 fois dans le Coran. La patience est une des vertus les plus valorisees du Coran. En 3:200, « soyez patients, rivalisez de patience ». Le verset 2:175 est l'un des rares usages ironiques de la racine — l'exclamation « ma asbara-hum 'ala an-nar » detourne le sens positif du sabr pour montrer l'absurdite du choix de ceux qui preferent le chatiment au pardon.",
              axe5_frequence: "Pour la mission du khalifa, la patience est un outil essentiel mais elle doit etre bien orientee. Le verset montre qu'une patience mal placee est absurde — endurer le Feu alors qu'on aurait pu avoir le pardon est le comble de la folie. Le khalifa doit exercer la patience dans la bonne direction : patience dans l'obeissance, patience face aux epreuves, patience dans l'abstention du mal. La patience face au chatiment n'est pas du sabr mais de l'entêtement dans l'erreur."
            },
            "Lien/Attache": {
              status: "nul",
              senses: ["attacher", "lier", "emprisonner"],
              proof_ctx: "Le sens de lier/attacher est un sens secondaire de s-b-r — sabara peut signifier attacher, immobiliser. Mais dans le contexte exclamatif du verset, le sens est clairement celui de la patience/endurance ironique, pas de l'emprisonnement."
            }
          }
        }
      },
      // nwr pos=11
      {
        word_key: "nwr", position: 11, sense_chosen: "feu",
        analysis_axes: {
          sense_chosen: "feu",
          concept_chosen: "Lumière/Clarté",
          concepts: {
            "Lumière/Clarté": {
              status: "retenu",
              senses: ["lumière", "clarté", "éclairage", "feu", "flamme"],
              proof_ctx: "Le nom an-nari est un nom feminin singulier genitif de la racine n-w-r. Le Lane's donne pour nar : feu, flamme, combustion, chaleur ardente. La racine n-w-r porte deux champs semantiques : la lumiere (nur) et le feu (nar). Le feu est la manifestation visible et destructrice de l'energie lumineuse — il eclaire mais il brule aussi. Le mot an-nar dans le Coran designe specifiquement le Feu de l'enfer — le lieu du chatiment eternel. L'opposition nur/nar est fondamentale dans le Coran : la lumiere guide, le feu brule.",
              axe1_verset: "Le nom an-nari clot le verset comme destination finale de la transaction inversee. Le mouvement du verset est : acheter l'egarement → acheter le chatiment → endurer le Feu. Le Feu est l'aboutissement concret de leur mauvais commerce — c'est le lieu ou le chatiment achete se materialise. L'ironie finale porte sur le Feu : « comme ils sont patients face au Feu » — le Feu n'est pas un lieu ou l'on peut « etre patient » avec benefice, c'est un lieu de souffrance eternelle.",
              axe2_voisins: "Le verset 174 disait qu'ils « ne mangent dans leurs ventres que du feu ». Le Feu de 2:175 reprend cette image — le feu interieur (2:174) devient le Feu exterieur (2:175). Le verset 176 completera en disant que « Dieu a revele le Livre avec verite » — le Livre (lumiere/nur) est l'oppose du Feu (nar), les deux venant pourtant de la meme racine n-w-r.",
              axe3_sourate: "La racine n-w-r apparait dans la sourate al-Baqarah sous ses deux formes. En 2:17, la lumiere (nur) des hypocrites est emportee par Dieu. En 2:24, le Feu dont le combustible est les hommes et les pierres. En 2:167, les mecreants voudraient sortir du Feu. La sourate joue constamment sur l'opposition lumiere/feu : ceux qui refusent la lumiere de la guidance recevront le feu du chatiment.",
              axe4_coherence: "La racine n-w-r apparait environ 194 fois dans le Coran. Le Feu (an-nar) est mentionne plus de 140 fois comme lieu du chatiment. En 3:185, « quiconque est ecarte du Feu et introduit au Paradis a reussi ». Le Coran presente le Feu comme la consequence ultime du refus de la guidance — l'aboutissement logique de la transaction inversee decrite en 2:175.",
              axe5_frequence: "Pour la mission du khalifa, le Feu est l'avertissement qui donne son urgence a la mission. Le khalifa doit comprendre que le choix entre la guidance et l'egarement a des consequences eternelles. Le Feu n'est pas une menace abstraite mais la realite qui attend ceux qui refusent la mission. La racine n-w-r montre que la lumiere et le feu sont deux faces de la meme realite — le khalifa doit choisir la lumiere qui guide plutot que le feu qui detruit."
            },
            "Fleur/Floraison": {
              status: "nul",
              senses: ["fleur", "floraison", "épanouissement"],
              proof_ctx: "Le sens de fleur (nawra) est un sens secondaire de n-w-r — la fleur est ce qui eclaire le jardin. Mais an-nar dans le Coran est exclusivement le Feu de l'enfer. Le contexte du chatiment ne laisse aucune place au sens floral."
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

  const verseIds = [182];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 175 ===\n');
  await processVerse(175);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V175 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
