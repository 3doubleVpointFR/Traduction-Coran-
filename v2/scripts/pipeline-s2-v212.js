const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 212
// verse_id=219, analysis_id=578
// "zuyyina lilladhina kafaru al-hayatu al-dunya
//  wa-yaskharuna mina alladhina amanu
//  wa-alladhina ittaqu fawqahum yawma al-qiyamati
//  wa-Allahu yarzuqu man yasha'u bighayri hisabin"
// La vie terrestre embellie pour les rejeteurs, la moquerie,
// les croyants au-dessus au jour du relevement, Dieu pourvoit sans compte.
// =====================================================

const verseData = {
  212: {
    verse_id: 219,
    analysis_id: 578,
    translation_arab: "La vie d'ici-bas a ete embellie pour ceux qui rejettent. Ils se moquent de ceux qui croient. Ceux qui se sont premunis seront au-dessus d'eux le Jour du Relevement. Dieu pourvoit qui Il veut sans compte.",
    full_translation: "On a enjolive la vie presente a ceux qui ne croient pas, et ils se moquent de ceux qui croient. Mais les pieux seront au-dessus d'eux, au Jour de la Resurrection. Et Allah accorde Ses bienfaits a qui Il veut, sans compter.",
    translation_explanation: `§DEMARCHE§
Le verset 212 est construit en quatre temps contrastants : 1) l'embellissement de la vie terrestre pour les rejeteurs, 2) leur moquerie envers les croyants, 3) le renversement eschatologique (les premunies seront au-dessus), 4) la liberte de Dieu de pourvoir sans compte. La structure rhetorique est celle de l'inversion — ce qui semble superieur (rejeteurs qui se moquent) sera inverse (croyants au-dessus).

Le verbe **zuyyina** est un accompli passif 3MS de la racine z-y-n (Form II). Le Lane's donne : orner, embellir, rendre beau, parer, decorer. Le passif « zuyyina » (a ete embellie) supprime l'agent — on ne dit pas qui a embellie la vie terrestre. Ce silence est delibere : le texte ne dit pas que Dieu a embellie la vie terrestre pour les rejeteurs, ni que Satan l'a fait — la responsabilite de la beautification est laissee suspendue. L'accompli marque l'etat comme accompli et present — la vie terrestre EST embellie (l'embellissement a eu lieu et perdure).

Le nom **al-hayatu** est un nom defini nominatif feminin de la racine h-y-w. Le Lane's donne : vie, animation, etant vivant, existence vivante. Le nominatif marque la vie comme le sujet du verbe passif — c'est elle qui est embellie. L'article al- definit la vie comme une realite connue — LA vie, celle que tout le monde connait.

L'adjectif **al-dunya** est un nom defini nominatif feminin de la racine d-n-w. Le Lane's donne : la plus proche, ce qui est le plus proche, le monde d'ici-bas (par opposition a l'au-dela). La dunya est fondamentalement « la plus proche » — la vie dans sa proximite immediate, le monde accessible et tangible. Elle s'oppose a l'akhira (l'au-dela, l'ultime). Le qualificatif d-n-w inscrit la vie dans une hierarchie spatiale et temporelle — la vie la plus proche n'est pas la vie ultime.

Le verbe **yaskharuna** est un inaccompli 3MP de la racine s-kh-r (Form I). Le Lane's donne : se moquer, railler, ridiculiser, tourner en derision, assujettir. L'inaccompli marque l'habitude ou la continuite — ils se moquent (habituellement, constamment). La moquerie est un acte de debasement de l'autre — ils considerent les croyants comme inferieurs et le manifestent par le rire derisoire.

Le verbe **ittaqu** est un accompli 3MP de la racine w-q-y (Form VIII). Le Lane's donne : se premunir, se garder, se proteger, craindre et se mettre a l'abri. L'ittaqa est l'acte de se mettre derriere un ecran protecteur — se premunir contre le mal, le peche, la faute. L'accompli marque l'etat comme acquis — ceux qui se sont premunies (ceux dont la taqwa est etablie). L'article relatif « alladhina » + accompli = ceux dont l'acte est accompli et etabli.

Le mot **fawqahum** est un adverbe de lieu de la racine f-w-q avec suffixe 3MP. Le Lane's donne : au-dessus, plus haut que, superiorite, ce qui depasse. Le suffixe « hum » = eux (les rejeteurs). Fawqahum = au-dessus d'eux. Cette superiorite est a la fois spatiale (physique, le Jour du Relevement) et qualitative (en rang, en valeur).

Le nom **yawma al-qiyamati** : yawm = jour, al-qiyama = de la racine q-w-m (se lever, se dresser). Le Lane's donne : la qiyama est le lever, le relevement, le fait de se dresser. Yawm al-qiyama = le Jour du Relevement — le jour ou les hommes se lèvent de leur tombes, le jour ou tout se dresse et se tient debout devant Dieu.

Le verbe **yarzuqu** est un inaccompli 3MS de la racine r-z-q. Le Lane's donne : pourvoir, nourrir, accorder des provisions, subvenir aux besoins. L'inaccompli marque la continuite et l'habitude — Dieu pourvoit (constamment, c'est son attribut). Le sujet est Dieu (Allahu).

Le verbe **yasha'u** est un inaccompli 3MS de la racine sh-y-'. Le Lane's donne : vouloir, desirer, avoir la volonte de. Dans le contexte divin, « man yasha'u » (qui Il veut) designe la liberte divine dans la distribution de la provision — Dieu choisit librement qui Il pourvoit. L'inaccompli marque la continuite de cette volonte.

Le nom **hisabin** est un nom indefini genitif de la racine h-s-b. Le Lane's donne : calcul, evaluation, compte rendu, comptabilite. « Bighayri hisabin » = sans compte, sans evaluation — la provision de Dieu ne suit pas un calcul restrictif. C'est l'abondance au-dela du comptage.

§JUSTIFICATION§
**a ete embellie** — Le passif « zuyyina » est traduit par « a ete embellie » car c'est un passif accompli. L'alternative active « on a embellie » est aussi valide mais moins precise — le passif preserve le silence sur l'agent, qui est intentionnel dans le texte.

**rejettent** — « kafaru » est traduit par « rejettent » plutot que « ne croient pas » (Hamidullah). La racine k-f-r designe le recouvrement et le rejet — c'est un acte actif de rejet/couverture, pas une simple absence de foi. L'alternative « increduless » est trop intellectuelle; « rejettent » souligne le cote actif.

**se premunissent** — « ittaqu » est traduit par « se premunissent » car la racine w-q-y designe la protection active. L'alternative « pieux » ou « craignant Dieu » est moins precise — la taqwa est d'abord un acte de se mettre a l'abri, de se proteger.

**Relevement** — « al-qiyama » est traduit par « Relevement » car la racine q-w-m signifie se lever, se dresser. L'alternative « Resurrection » (Hamidullah) introduit un concept theologique chretien qui n'est pas strictement dans la racine. « Relevement » est plus neutre et plus proche du sens etymologique.

**pourvoit** — « yarzuqu » est traduit par « pourvoit » car la racine r-z-q designe la provision de subsistance. L'alternative « accorde » (Hamidullah) est trop generale — le rizq est specifiquement la provision nourriciere, les ressources vitales.

**sans compte** — « bighayri hisabin » = sans calcul/compte. Traduit par « sans compte » qui renvoie a la fois au calcul quantitatif et au compte rendu, ce qui est plus riche que « sans compter » (Hamidullah).

§CRITIQUE§
Hamidullah traduit « zuyyina lilladhina kafaru al-hayatu al-dunya » par « on a enjolive la vie presente a ceux qui ne croient pas ». Plusieurs problemes : 1) « enjolive » est moins fort que « embellie » (zuyyina vient de zayan, la beaute ornementale, l'embellissement total). 2) « la vie presente » traduit al-dunya par la temporalite (presente) alors que le sens premier est la proximite spatiale (la plus proche). La dunya n'est pas seulement la vie d'aujourd'hui mais la vie de la proximite immediate — le monde tangible et accessible. Cette distinction compte pour comprendre le contraste avec l'akhira (l'ultime, l'au-dela).

Hamidullah traduit « alladhina ittaqu » par « les pieux ». Mais la taqwa n'est pas la piete au sens d'une vertu contemplative — c'est la protection active, le fait de se premunir contre les fautes. Traduire par « pieux » efface cette dimension d'action defensive et de prudence active. Les « premunies » seraient plus fideles.`,
    segments: [
      { fr: "A ete embellie", pos: "verbe", phon: "zuyyina", arabic: "زُيِّنَ", word_key: "zyn", is_particle: false, sense_retenu: "embellissement/ornementation", position: 0 },
      { fr: "pour ceux qui", phon: "lilladhina", arabic: "لِلَّذِينَ", is_particle: true, position: 1 },
      { fr: "rejettent", pos: "verbe", phon: "kafaru", arabic: "كَفَرُوا۟", word_key: "kfr", is_particle: false, sense_retenu: "rejet/ingratitude", position: 2 },
      { fr: "la vie", pos: "nom", phon: "al-hayatu", arabic: "ٱلْحَيَوٰةُ", word_key: "hyw", is_particle: false, sense_retenu: "vie/animation", position: 3 },
      { fr: "d'ici-bas", pos: "adj", phon: "al-dunya", arabic: "ٱلدُّنْيَا", word_key: "dnw", is_particle: false, sense_retenu: "proximite/monde d'ici-bas", position: 4 },
      { fr: "et ils se moquent", pos: "verbe", phon: "wa-yaskharuna", arabic: "وَيَسْخَرُونَ", word_key: "skhr", is_particle: false, sense_retenu: "moquerie/derision", position: 5 },
      { fr: "de ceux qui", phon: "mina alladhina", arabic: "مِنَ ٱلَّذِينَ", is_particle: true, position: 6 },
      { fr: "croient", pos: "verbe", phon: "amanu", arabic: "ءَامَنُوا۟", word_key: "amn", is_particle: false, sense_retenu: "foi/adhesion", position: 7 },
      { fr: "Et ceux qui", phon: "wa-alladhina", arabic: "وَٱلَّذِينَ", is_particle: true, position: 8 },
      { fr: "se sont premunies", pos: "verbe", phon: "ittaqu", arabic: "ٱتَّقَوْا۟", word_key: "wqy", is_particle: false, sense_retenu: "protection/preservation", position: 9 },
      { fr: "seront au-dessus d'eux", pos: "adv", phon: "fawqahum", arabic: "فَوْقَهُمْ", word_key: "fwq", is_particle: false, sense_retenu: "superiorite/dessus", position: 10 },
      { fr: "le Jour", phon: "yawma", arabic: "يَوْمَ", is_particle: true, position: 11 },
      { fr: "du Relevement", pos: "nom", phon: "al-qiyamati", arabic: "ٱلْقِيَـٰمَةِ", word_key: "qwm", is_particle: false, sense_retenu: "verticalite/relevement", position: 12 },
      { fr: "Et Dieu", phon: "wa-Allahu", arabic: "وَٱللَّهُ", is_particle: true, position: 13 },
      { fr: "pourvoit", pos: "verbe", phon: "yarzuqu", arabic: "يَرْزُقُ", word_key: "rzq", is_particle: false, sense_retenu: "subsistance/provision", position: 14 },
      { fr: "qui Il veut", pos: "verbe", phon: "man yasha'u", arabic: "مَن يَشَآءُ", word_key: "shy", is_particle: false, sense_retenu: "volonte", position: 15 },
      { fr: "sans compte", pos: "nom", phon: "bighayri hisabin", arabic: "بِغَيْرِ حِسَابٍ", word_key: "hsb", is_particle: false, sense_retenu: "calcul/evaluation", position: 16 }
    ],
    vwa: [
      {
        word_key: "zyn",
        position: 0,
        sense_chosen: "embellissement/ornementation",
        analysis_axes: {
          sense_chosen: "embellissement/ornementation",
          concept_chosen: "Beaute/Ornement",
          concepts: {
            "Beaute/Ornement": {
              status: "retenu",
              senses: ["orner", "embellir", "parer", "beautifier", "decorer"],
              proof_ctx: "Le verbe zuyyina est un accompli passif 3MS de la racine z-y-n (Form II). Le Lane's donne : orner, embellir, rendre beau, parer, decorer. La zina est la beaute ornementale — ce qui est ajoute pour rendre beau. Le passif supprime l'agent de l'embellissement — on ne sait pas qui a rendu la vie terrestre belle. Ce silence est intentionnel dans le texte. La Form II intensive exprime un embellissement complet et actif — pas juste beau, mais rendu beau par quelqu'un ou quelque chose.",
              axe1_verset: "L'embellissement de la vie terrestre est le point de depart du verset. Le champ lexical (rejettent, moquerie, croyants, au-dessus, relevement, provision) montre que l'embellissement est une illusion — la vie terrestre est rendue belle mais ce n'est pas la vraie superieure. Le passif renforce cette idee d'illusion — quelque chose a embelli la vie sans que le rejeteur soit conscient de la manipulation. L'embellissement cree une fausse perception de superiority chez les rejeteurs.",
              axe2_voisins: "Le verset 211 parlait du bienfait de Dieu (ni'ma) et de ceux qui le changent. Le verset 212 parle de l'embellissement de la vie terrestre — c'est peut-etre le resultat du changement du bienfait : quand on change le bienfait de Dieu, la vie terrestre devient embellissante et seduit. Le verset 2:221 utilisera la meme racine (zyn) pour dire que Dieu embellitt la foi dans les coeurs.",
              axe3_sourate: "La racine z-y-n apparait en 2:212 et en 2:221 dans la sourate al-Baqarah. En 2:212, la vie terrestre est embellie (pour les rejeteurs). En 2:221, Dieu embelliert la foi dans le coeur (pour les croyants). La sourate cree un contraste : deux embellissements opposes — celui de la tromperie (vie terrestre) et celui de la verite (foi). La beaute peut etre trompeuse ou authentique.",
              axe4_coherence: "La racine z-y-n apparait environ 46 fois dans le Coran. Le motif de l'embellissement de la vie terrestre pour les rejeteurs se retrouve en 6:122, 10:12, 13:33, 27:4, 40:37. Le Coran presente systematiquement cet embellissement comme un element de test et de tromperie — ce n'est pas Dieu qui embellie la vie terrestre pour les rejeteurs mais un processus de sedduction qui les eloigne de la verite.",
              axe5_frequence: "Pour la mission du khalifa, l'embellissement est un danger de distraction. La beaute de la vie terrestre seduit — le khalifa doit discerner entre la beaute authentique (celle qui conduit vers Dieu) et la beaute trompeuse (celle qui detourne de la mission). L'embellissement de la dunya est un voile qui empeche de voir la realite ultime."
            },
            "Seduction/Illusion": {
              status: "probable",
              senses: ["seduire", "tromper", "illusion", "faux-semblant"],
              proof_ctx: "Le sens de seduction/illusion est actif dans ce contexte par le passif et le contexte des rejeteurs. Ce n'est pas seulement une beaute neutre mais une beaute qui seduit et trompe — elle detourne du chemin de Dieu. Le Lane's ne donne pas specifiquement ce sens mais le contexte coranique l'active clairement.",
              axe1_verset: "La seduction est implicite dans le contexte : la vie embellie seduit les rejeteurs et les amene a se moquer des croyants. L'embellissement a un effet de distorsion de la perception.",
              axe2_voisins: "Les rejeteurs qui se moquent des croyants sont victimes de cette seduction — ils croient etre superieurs parce que la vie leur semble belle.",
              axe3_sourate: "La sourate al-Baqarah montre constamment le danger de la seduction par la vie terrestre — les Fils d'Israel ont ete seduits par leurs preferences (baqara, veau d'or). La seduction est un motif central.",
              axe4_coherence: "Le Coran utilise zuyyina avec une connotation de tromperie dans les passages sur la sedition (fitna) et l'eggarement.",
              axe5_frequence: "Le khalifa doit dejouer la seduction pour lui-meme et sa communaute — distinguer beaute authentique et seduction trompeuse."
            }
          }
        }
      },
      {
        word_key: "kfr",
        position: 2,
        sense_chosen: "rejet/ingratitude",
        analysis_axes: {
          sense_chosen: "rejet/ingratitude",
          concept_chosen: "Rejet/Ingratitude",
          concepts: {
            "Rejet/Ingratitude": {
              status: "retenu",
              senses: ["rejeter", "etre ingrat", "nier", "couvrir", "dissimuler"],
              proof_ctx: "Le verbe kafaru est un accompli 3MP de la racine k-f-r. Le Lane's donne : couvrir, dissimuler, nier, rejeter, etre ingrat. La racine k-f-r designe fondamentalement l'acte de couvrir — kufr est le recouvrement de la verite. Le kafir est celui qui couvre/rejette — la foi, les signes, la verite. L'accompli marque un etat acquis — ceux dont le rejet est etabli. La forme « kafaru » (ils ont rejete) designe un groupe identifie par son choix actif de rejet.",
              axe1_verset: "Le rejet (kafaru) est la condition des beneificiaires de l'embellissement. Ceux qui rejettent trouvent la vie terrestre belle — leur rejet les oriente vers le monde proche et tangible. La sequence kafaru → zuyyina (rejet → embellissement) peut etre lue comme : parce qu'ils rejettent, la vie leur semble belle (leur rejet produit une illusion de beaute). Le rejet est aussi la cause de la moquerie envers les croyants — ceux qui rejettent se moquent de ceux qui croient.",
              axe2_voisins: "Le verset 211 parlait de ceux qui changent le bienfait de Dieu. Le verset 212 identifie les rejeteurs comme ceux a qui la vie terrestre est embellie. La sequence montre que le changement du bienfait (211) est lie au rejet (212) — les rejeteurs sont ceux qui ont change le bienfait. Le verset 213 parlera d'une seule communaute qui s'est divisee — le rejet est la cause de la division.",
              axe3_sourate: "La racine k-f-r est une des racines les plus frequentes de la sourate al-Baqarah. Les kafirs sont les rejeteurs par excellence — ils sont opposes aux mu'minun (croyants). La sourate construit tout un systeme de contraste : kafir/mu'min, dunya/akhira, moquerie/superiorite. Le rejet produit des effets dans la vie presente (embellissement de la dunya) et dans l'au-dela (inferiorite).",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le kufr est toujours un acte delibere — couvrir ce qu'on sait, rejeter ce qui est clair. Le Coran distingue l'ignorance (jahl, qui peut etre involontaire) du kufr (qui est delibere). Les kafirs de 2:212 ne sont pas ignorants — ils ont vu les signes clairs (rappel du verset 211) et ont quand meme rejete.",
              axe5_frequence: "Pour la mission du khalifa, le rejet delibere est le danger supreme. Le khalifa doit distinguer les gens qui ne savent pas (educables) de ceux qui rejettent deliberement (kafirs). Sa mission est d'abord vers les premiers. Mais meme face au rejet, le khalifa ne doit pas reagir par la moquerie — c'est le comportement des kafirs envers les croyants, pas l'inverse."
            },
            "Couverture/Dissimulation": {
              status: "probable",
              senses: ["couvrir", "dissimuler", "voiler", "cacher"],
              proof_ctx: "Le sens etymologique de k-f-r est la couverture — le kaffar est le laboureur qui couvre les graines de terre. Le kafir couvre la verite. Ce sens est actif dans le contexte : les rejeteurs couvrent les signes clairs du verset 211.",
              axe1_verset: "La dissimulation est active : les rejeteurs de 2:212 ont vu les signes et les ont couverts — leur embellissement de la dunya est un voile sur la realite.",
              axe2_voisins: "La couverture des signes est le theme du verset 211 (changer le bienfait). Le verset 212 continue avec ceux qui dissimulent/couvrent.",
              axe3_sourate: "La sourate utilise k-f-r dans ses deux dimensions — rejet actif et couverture/dissimulation. Les deux sens sont complementaires.",
              axe4_coherence: "Le Coran utilise kufr pour la couverture deliberee de la verite — acte de dissimuler ce qu'on sait.",
              axe5_frequence: "Comprendre le kufr comme couverture aide le khalifa a identifier les formes subtiles de rejet — pas toujours le rejet frontal mais parfois la dissimulation des signes."
            }
          }
        }
      },
      {
        word_key: "hyw",
        position: 3,
        sense_chosen: "vie/animation",
        analysis_axes: {
          sense_chosen: "vie/animation",
          concept_chosen: "Vie/Animation",
          concepts: {
            "Vie/Animation": {
              status: "retenu",
              senses: ["vie", "animation", "etre vivant", "existence vivante", "vivifiant"],
              proof_ctx: "Le nom al-hayatu est un nom defini nominatif feminin de la racine h-y-w. Le Lane's donne : vie, animation, etat d'etre vivant, existence animee. La haya est l'etat de vie — ce qui anime, ce qui est en mouvement vital. Le nominatif fait de la hayat le sujet du passif zuyyina — c'est LA VIE qui est embellie. L'article al- definit : LA vie, pas une vie quelconque. La vie est ici consideree dans son integralite comme le sujet de l'embellissement.",
              axe1_verset: "La vie (hayat) est ce qui est embellie pour les rejeteurs. Le champ lexical (terrestre, moquerie, relevement, provision) montre que la vie embellissante est limitee — c'est la vie terrestre (al-dunya), pas la vie en general. La hayat est le cadre de l'experience humaine, et ceux qui rejettent l'ont embellissante et s'y attachent.",
              axe2_voisins: "La vie (hayat) sera mentionnee plusieurs fois dans la sourate comme enjeu central. Le contraste hayat/mawt (vie/mort) et dunya/akhira (ici-bas/au-dela) structure de nombreux versets. La vie terrestre (hayat al-dunya) est le registre dans lequel la moquerie et l'embellissement s'operent — le Jour du Relevement transcende ce registre.",
              axe3_sourate: "La racine h-y-w apparait frequemment dans la sourate al-Baqarah pour la vie terrestre (al-hayat al-dunya) et la mort (mawt). La sourate construit une dialectique vie/mort qui s'articule autour du choix spirituel — s'attacher a la vie terrestre ou se premunir pour l'au-dela.",
              axe4_coherence: "La racine h-y-w apparait environ 184 fois dans le Coran. L'expression « al-hayat al-dunya » (la vie d'ici-bas) apparait environ 70 fois — c'est une formule etablie pour designer le monde present. Le Coran ne condamne pas la vie elle-meme mais l'attachement exclusif a sa forme terrestre et proche.",
              axe5_frequence: "Pour la mission du khalifa, la vie est le cadre de la mission. Le khalifa agit dans la vie terrestre pour preparer a ce qui est au-dela. Il ne meprise pas la vie (hayat) mais ne s'y attache pas exclusivement — il la voit dans sa juste proportion."
            }
          }
        }
      },
      {
        word_key: "dnw",
        position: 4,
        sense_chosen: "proximite/monde d'ici-bas",
        analysis_axes: {
          sense_chosen: "proximite/monde d'ici-bas",
          concept_chosen: "Proximite/Monde d'ici-bas",
          concepts: {
            "Proximite/Monde d'ici-bas": {
              status: "retenu",
              senses: ["proximite", "le plus proche", "monde d'ici-bas", "ce qui est accessible"],
              proof_ctx: "Le mot al-dunya est un nom defini nominatif feminin de la racine d-n-w. Le Lane's donne : la plus proche (feminin de adna = plus proche), le monde d'ici-bas, la vie terrestre et immediate. La dunya est etymologiquement le superlatif feminin d'aqrab — la plus proche. Elle s'oppose a l'akhira (ce qui est apres, l'ultime). La dunya est le monde de la proximite immediate — tangible, accessible, present. L'article al- la definit : LA plus proche, LE monde d'ici-bas.",
              axe1_verset: "La dunya qualifie la hayat — c'est LA VIE D'ICI-BAS qui est embellie, pas la vie en general. Le contraste sous-jacent est dunya/akhira : la vie proche vs la vie ultime. Les rejeteurs sont seduits par ce qui est proche et ne voient pas ce qui est plus loin (au-dela). Le Jour du Relevement (akhira) est le moment ou la hierarchie dunya/akhira est renversee.",
              axe2_voisins: "Le verset 212 oppose la dunya (vie proche, embellie pour les rejeteurs) au yawm al-qiyama (le Jour du Relevement, ou les premunies seront au-dessus). La sequence dunya → akhira est le mouvement du verset — de la vie proche au Jour ultime.",
              axe3_sourate: "La racine d-n-w et le mot dunya sont tres frequents dans la sourate al-Baqarah. En 2:85, la retribution est dans la vie d'ici-bas (dunya) et le chatiment est dans l'au-dela (akhira). En 2:200, 201, 212, la dunya est le monde present par opposition a l'au-dela. La sourate construit systematiquement le contraste dunya/akhira comme enjeu central du choix spirituel.",
              axe4_coherence: "La racine d-n-w apparait environ 115 fois dans le Coran dans le sens de dunya. Le mot dunya est une des expressions les plus frequentes du Coran pour designer le monde present. L'etymologie (la plus proche) est toujours active — le monde d'ici-bas n'est pas mauvais en soi, mais il est a sa place : le plus proche, pas l'ultime.",
              axe5_frequence: "Pour la mission du khalifa, la dunya est le champ d'action mais pas la finalite. Le khalifa agit dans le monde proche (dunya) en vue du monde ultime (akhira). La confusion entre les deux (traiter la dunya comme si elle etait l'akhira, ou ignorer la dunya au nom de l'akhira) est a eviter dans les deux sens."
            }
          }
        }
      },
      {
        word_key: "skhr",
        position: 5,
        sense_chosen: "moquerie/derision",
        analysis_axes: {
          sense_chosen: "moquerie/derision",
          concept_chosen: "Moquerie/Derision",
          concepts: {
            "Moquerie/Derision": {
              status: "retenu",
              senses: ["se moquer", "railler", "ridiculiser", "tourner en derision"],
              proof_ctx: "Le verbe yaskharuna est un inaccompli 3MP de la racine s-kh-r (Form I). Le Lane's donne : se moquer de, railler, tourner en derision, ridiculiser. La moquerie est un acte social de debasement — on se moque pour marquer la superiorite de celui qui se moque sur celui qui est moque. L'inaccompli marque la continuite et l'habitude — ils se moquent constamment, c'est leur comportement habituel envers les croyants. La preposition « min » (de) avec yaskharuna = se moquer DE quelqu'un.",
              axe1_verset: "La moquerie (yaskharuna) est la consequence comportementale de l'embellissement (zuyyina). Parce que la vie terrestre leur semble belle et qu'ils s'y attachent, les rejeteurs voient les croyants comme des perdants qui renoncent aux plaisirs. Leur moquerie exprime cette perception de superiorite. Le contraste sera renverse : ceux qui se moquent (fawqahum = seront au-dessous au Jour du Relevement).",
              axe2_voisins: "Le verset 211 rappelait les signes clairs donnes aux Fils d'Israel. Le verset 212 montre le resultat de leur rejet : ils se moquent. La moquerie est la forme sociale du kufr — elle manifeste publiquement le mepris pour ceux qui croient. Le verset 213 parlera d'une communaute originellement unie qui s'est divisee — la moquerie est un acte de division.",
              axe3_sourate: "La racine s-kh-r apparait dans la sourate al-Baqarah principalement en 2:212. La moquerie est un motif recurrent dans le Coran comme signe de rejet — ceux qui se moquent des prophetes et des croyants (Noe, Abraham, Muhammad) se retrouvent dans une position inferieure.",
              axe4_coherence: "La racine s-kh-r apparait environ 22 fois dans le Coran. La moquerie des rejeteurs envers les croyants est un motif recurrent — en 9:65, 79, les hypocrites se moquent du Prophete. En 11:38, les gens de Noe se moquaient de lui. Le Coran presente systematiquement la moquerie comme un signe d'aveuglement et un precurseur du chatiment.",
              axe5_frequence: "Pour la mission du khalifa, la moquerie est une epreuve a subir avec dignite. Le khalifa sera moque — c'est un signe coranique que sa mission est juste. Il ne doit pas repliquer par la moquerie mais continuer sa mission. Le verset lui assure que ceux qui se moquent seront renverses au Jour du Relevement."
            },
            "Assujettissement": {
              status: "nul",
              senses: ["assujettir", "soumettre", "rendre disponible"],
              proof_ctx: "Le sens d'assujettissement est atteste pour la racine s-kh-r dans le Coran — en 7:24, 16:12, 45:13, le verbe sakhkhara (Form II) signifie assujettir, mettre au service. Mais ici le verbe est Form I (yaskharuna) avec la preposition min, ce qui designe specifiquement la moquerie. La construction « sakhira min » = se moquer DE, tandis que « sakhkhara » (Form II sans min) = assujettir. Le contexte (rejeteurs envers croyants) confirme le sens de moquerie."
            }
          }
        }
      },
      {
        word_key: "amn",
        position: 7,
        sense_chosen: "foi/adhesion",
        analysis_axes: {
          sense_chosen: "foi/adhesion",
          concept_chosen: "Foi/Adhesion",
          concepts: {
            "Foi/Adhesion": {
              status: "retenu",
              senses: ["croire", "adherer", "avoir confiance", "securite", "adhesion"],
              proof_ctx: "Le verbe amanu est un accompli 3MP de la racine a-m-n. Le Lane's donne : croire, avoir confiance, etre en securite, adherer, donner foi. L'iman est l'etat de foi et de confiance — s'en remettre a quelque chose de certain. L'accompli marque un etat acquis — ceux dont la foi est etablie. La forme amanu (ils ont cru) designe le groupe des croyants comme identifie par son acte de foi.",
              axe1_verset: "La foi (amanu) est la caracteristique des croyants qui sont moquees par les rejeteurs. La moquerie des kafirs envers les mu'minun montre que la foi est vue comme une faiblesse ou une naivete par ceux qui rejettent. Le verset renverse cette perception : ceux qui croient (et se premunissent) seront au-dessus au Jour du Relevement.",
              axe2_voisins: "Le verset 211 demandait aux Fils d'Israel de reconnaitre les signes. Le verset 212 oppose ceux qui rejettent (kafaru) et ceux qui croient (amanu). Cette opposition binaire est fondamentale dans la sourate — le choix de croire ou de rejeter structure toute l'experience humaine selon le Coran.",
              axe3_sourate: "La racine a-m-n est la plus frequente de la sourate al-Baqarah. Le couple kafaru/amanu (rejeteurs/croyants) structure la sourate depuis ses premiers versets (2:6-20). La foi est presentee comme une adhesion active — pas une simple opinion mais un engagement et une confiance totale.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. L'iman (foi) est le concept central de la relation entre l'homme et Dieu dans le Coran. La foi est toujours presentee comme un acte de confiance et d'adhesion — croire c'est faire confiance et s'en remettre.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le fondement. Le khalifa agit depuis la foi — sa mission est motivee par sa confiance en Dieu. Mais le verset 212 montre aussi que la foi expose a la moquerie — le khalifa doit etre prepare a etre moque et doit y repondre par la continuite de sa mission."
            },
            "Securite/Confiance": {
              status: "probable",
              senses: ["securite", "confiance", "assurance", "refuge"],
              proof_ctx: "Le sens de securite est le sens etymologique de a-m-n — l'aman est la securite, le refuge. La foi est aussi confiance — on croit parce qu'on fait confiance. Les deux sens (foi et securite) sont lies dans la racine.",
              axe1_verset: "La foi des croyants est aussi leur securite — malgre la moquerie, ils sont dans la securite de leur foi.",
              axe2_voisins: "La securite des croyants sera confirmee au Jour du Relevement — ils seront au-dessus.",
              axe3_sourate: "La sourate al-Baqarah utilise a-m-n dans les deux dimensions — foi et securite.",
              axe4_coherence: "Le Coran lie systematiquement iman (foi) et aman (securite) — croire c'est aussi se mettre en securite.",
              axe5_frequence: "Pour le khalifa, la foi comme securite est une protection contre les perturbations exterieures comme la moquerie."
            }
          }
        }
      },
      {
        word_key: "wqy",
        position: 9,
        sense_chosen: "protection/preservation",
        analysis_axes: {
          sense_chosen: "protection/preservation",
          concept_chosen: "Protection/Preservation",
          concepts: {
            "Protection/Preservation": {
              status: "retenu",
              senses: ["se premunir", "se proteger", "se garder", "se preserver", "craindre et se mettre a l'abri"],
              proof_ctx: "Le verbe ittaqu est un accompli 3MP de la racine w-q-y (Form VIII). Le Lane's donne : se premunir, se proteger, se garder, eviter en se mettant a l'abri. La Form VIII reflexive (ittaqa) exprime l'acte de se mettre soi-meme a l'abri, de se constituer une protection. La taqwa est cet etat de prevention active — se premunir contre les fautes, le mal, les consequences. L'accompli marque l'etat acquis — ceux dont la protection (taqwa) est etablie.",
              axe1_verset: "La premunition (taqwa) est ce qui definit le groupe superieur au Jour du Relevement. Ils ne sont pas definis par leurs richesses ou leur pouvoir terrestre mais par leur taqwa — leur protection active contre la faute. Ce sont eux qui seront au-dessus (fawqahum) au Jour du Relevement, pas les rejeteurs qui se moquent.",
              axe2_voisins: "Le verset 212 construit une hierarchie inversee : les rejeteurs (qui se moquent, qui ont la dunya embellie) sont en haut dans la vie terrestre, mais les premunies seront au-dessus au Jour du Relevement. La taqwa est le critere de la vraie superiorite — pas la richesse ou le statut social mais la premunition.",
              axe3_sourate: "La racine w-q-y et la taqwa sont centrales dans la sourate al-Baqarah. Des le verset 2:2, le Coran est defini comme guidance pour les muttaqin (premunies). En 2:177, 183, 197, etc., la taqwa est la condition et le resultat de la pieté active. La sourate construit la taqwa comme le critere de la vraie reussite — celui qui a la taqwa est sur le bon chemin.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. La taqwa est presentee comme la protection par excellence — se garder du mal, se premunir contre la faute, se mettre a l'abri des consequences de l'injustice. Le Coran utilise taqwa comme critere de rang : le plus noble est le plus premuni (49:13).",
              axe5_frequence: "Pour la mission du khalifa, la taqwa est la protection de la mission. Le khalifa qui se premunit (contre la corruption, l'injustice, l'orgueil) protege sa mission. La taqwa n'est pas une attitude passive de crainte mais une protection active — se constituer une armure contre ce qui detruit la mission."
            }
          }
        }
      },
      {
        word_key: "fwq",
        position: 10,
        sense_chosen: "superiorite/dessus",
        analysis_axes: {
          sense_chosen: "superiorite/dessus",
          concept_chosen: "Superiorite/Dessus",
          concepts: {
            "Superiorite/Dessus": {
              status: "retenu",
              senses: ["au-dessus", "superiorite", "ce qui depasse", "plus haut"],
              proof_ctx: "Le mot fawqahum est un adverbe de lieu de la racine f-w-q avec suffixe 3MP (eux). Le Lane's donne : au-dessus, plus haut que, ce qui depasse ou surpasse, superiorite en rang. « Fawqahum » = au-dessus d'eux. Cette superiorite est a la fois spatiale (position physique au Jour du Relevement) et qualitative (superiorite en rang et en valeur). Le suffixe « hum » reference les rejeteurs — les premunies seront au-dessus DES rejeteurs qui se moquaient d'eux.",
              axe1_verset: "La superiorite (fawqahum) est le renversement final du verset. Les rejeteurs qui se moquaient seront au-dessous, les premunies qui etaient moquees seront au-dessus. Le renversement eschatologique est le point central du verset — ce qui semble vrai dans la vie terrestre sera inverse au Jour du Relevement. La superiorite est temporellement situee : yawma al-qiyamati (le Jour du Relevement) — pas maintenant mais le jour J.",
              axe2_voisins: "Le verset 212 oppose dunya (vie proche, superiority apparente des rejeteurs) et yawm al-qiyama (Jour du Relevement, superiority reelle des premunies). Le fawq (dessus) est le signe de la victoire eschatologique des croyants. Ce motif du renversement final se retrouve dans de nombreux versets coraniques — les persecutes de l'histoire seront les victorieux de l'au-dela.",
              axe3_sourate: "La racine f-w-q apparait dans la sourate al-Baqarah en 2:19 (tonnerre au-dessus d'eux), 2:59 (envoi de quelque chose du ciel), 2:212 (superiority des premunies). La sourate utilise fawq pour la position de domination. En 2:212, fawqahum designe la superiority qualitative et eschatologique des premunies.",
              axe4_coherence: "La racine f-w-q apparait environ 116 fois dans le Coran. La superiorite par la taqwa (49:13 — le plus noble est le plus premuni) est un principe central. Le Coran renverse systematiquement les hierarchies terrestres au profit des hierarchies spirituelles — la taqwa, pas la richesse ou le pouvoir, donne la vraie superiorite.",
              axe5_frequence: "Pour la mission du khalifa, la superiority par la taqwa est un principe de gouvernance. Le khalifa qui administre sait que la vraie superiority n'est pas economique ou militaire mais spirituelle et ethique. La civilisation que le khalifa cherche a batir est une civilisation du fawq — une superiority par la vertu, pas par la domination."
            }
          }
        }
      },
      {
        word_key: "qwm",
        position: 12,
        sense_chosen: "verticalite/relevement",
        analysis_axes: {
          sense_chosen: "verticalite/relevement",
          concept_chosen: "Verticalite/Droiture",
          concepts: {
            "Verticalite/Droiture": {
              status: "retenu",
              senses: ["se lever", "se dresser", "relevement", "verticalite", "droiture"],
              proof_ctx: "Le nom al-qiyamati est un nom defini genitif de la racine q-w-m. Le Lane's donne : se lever, se dresser, se tenir debout, relever, etre vertical. La qiyama est l'acte de se lever/relever. Yawm al-qiyama = le Jour du Relevement — le jour ou les morts se levent de leurs tombes, ou tout se dresse devant Dieu. L'etymologie de verticality (debout, dresse) est centrale — le Jour ou tout est redresse, mis en position verticale devant le Juge.",
              axe1_verset: "Le Jour du Relevement (yawm al-qiyama) est le moment ou la hierarchie terrestre est renversee. Les premunies seront au-dessus. La verticalite du relevement (qiyama) cree une image de station debout devant le jugement — chacun se tient, expose, sans possibilite de fuite. Le Jour est une position verticale : on est debout, expose, juge.",
              axe2_voisins: "Le verset 212 utilise yawm al-qiyama comme l'horizon eschatologique du renversement. Les versets precedents (210, 211) preparaient cet horizon. Le Jour du Relevement est la realite qui donne sens a toute la sequence : attente (210), signes (211), rejet et moquerie (212) — et le renversement final (212, fin).",
              axe3_sourate: "La racine q-w-m et le mot al-qiyama sont frequents dans la sourate al-Baqarah. Yawm al-qiyama est un marqueur eschatologique recurrent. La sourate rappelle constamment que la vie terrestre a une fin et que le Jour du Relevement est l'horizon de reference pour tout jugement.",
              axe4_coherence: "La racine q-w-m apparait environ 658 fois dans le Coran — c'est l'une des racines les plus frequentes. La qiyama est le nom de la Sourate 75 et un concept fondamental du Coran. La verticalite du relevement est symbolique — debout = en position de jugement, de responsabilite, d'exposition totale.",
              axe5_frequence: "Pour la mission du khalifa, le Jour du Relevement est l'horizon de toute action. Le khalifa sait que ses actes seront juges ce Jour-la. Cette conscience de la verticalite finale (se lever devant Dieu) donne a la mission une gravite particuliere — chaque decision sera pesee debout, expose, devant le Juge."
            }
          }
        }
      },
      {
        word_key: "rzq",
        position: 14,
        sense_chosen: "subsistance/provision",
        analysis_axes: {
          sense_chosen: "subsistance/provision",
          concept_chosen: "Subsistance/Provision",
          concepts: {
            "Subsistance/Provision": {
              status: "retenu",
              senses: ["pourvoir", "subvenir", "nourrir", "accorder des provisions", "subsistance"],
              proof_ctx: "Le verbe yarzuqu est un inaccompli 3MS de la racine r-z-q. Le Lane's donne : pourvoir en subsistance, accorder des provisions (nourriture, richesse, tout ce qui maintient en vie), nourrir, subvenir aux besoins. Le rizq est la provision de subsistance — ce dont on a besoin pour vivre. L'inaccompli marque la continuite — Dieu POURVOIT constamment, c'est son attribut permanent. Le sujet est Dieu (Allahu).",
              axe1_verset: "La provision de Dieu (yarzuqu) conclut le verset comme attribut divin universel. Apres le tableau du rejet, de la moquerie et du renversement eschatologique, le verset se ferme sur la liberte divine de pourvoir. Cette conclusion rappelle que les richesses et provisions des rejeteurs ne sont pas les leurs — Dieu les accorde a qui Il veut. Le rizq des rejeteurs n'est pas une preuve de leur superiorite.",
              axe2_voisins: "Le verset 212 clot avec la provision divine « bighayri hisabin » (sans compte). Cette conclusion dialogue avec la provision divine accordee aux pieux — Dieu pourvoit sans limite ceux qu'Il veut. La provision sans compte s'oppose au calcul terrestre des rejeteurs qui se croient superieurs a cause de leurs richesses.",
              axe3_sourate: "La racine r-z-q est recurrente dans la sourate al-Baqarah. En 2:3, les croyants depensent de ce que Nous leur avons fourni (razaqnahum). En 2:172, 212, 254, etc. La sourate presente le rizq comme un don divin qui doit etre redistribue (infaq). Le yarzuqu de 2:212 rappelle que la provision vient de Dieu, pas du merite personnel.",
              axe4_coherence: "La racine r-z-q apparait environ 123 fois dans le Coran. Le Coran presente Dieu comme al-Razzaq (l'Abondamment Pourvoyant) — la provision est un attribut divin central. La provision divine est abondante et liberale — elle ne suit pas les criteres humains de merite ou de desertion.",
              axe5_frequence: "Pour la mission du khalifa, la provision est un don a redistribuer. Le khalifa gere les ressources (rizq) de la communaute non comme les siennes mais comme un depot divin. La provision sans compte (bighayri hisabin) est un modele de generosite — le khalifa doit pourvoir sa communaute avec liberalite, sans calcul restrictif."
            }
          }
        }
      },
      {
        word_key: "shy",
        position: 15,
        sense_chosen: "volonte",
        analysis_axes: {
          sense_chosen: "volonte",
          concept_chosen: "Volonte",
          concepts: {
            "Volonte": {
              status: "retenu",
              senses: ["vouloir", "desirer", "volonte", "intention", "libre choix"],
              proof_ctx: "Le verbe yasha'u est un inaccompli 3MS de la racine sh-y-'. Le Lane's donne : vouloir, desirer, avoir la volonte de. Dans les contextes divins, « man yasha'u » (qui Il veut) designe la liberte divine — Dieu choisit librement qui Il pourvoit. L'inaccompli marque la continuite — Dieu veut constamment, sa volonte est active et permanente. La racine sh-y-' designe la volonte comme acte interne de decision.",
              axe1_verset: "La volonte divine (yasha'u) module la provision — Dieu pourvoit QUI IL VEUT. Cette liberte divine contredit toute pretention des rejeteurs a une superiorite garantie — ils sont pourvus parce que Dieu le veut, pas parce qu'ils le meritent. La volonte divine est souveraine sur la distribution des ressources.",
              axe2_voisins: "La volonte divine contraste avec les calculs humains. Les rejeteurs peuvent calculer leurs merites terrestres — Dieu distribue selon sa volonte, pas leurs calculs. Le verset suivant (2:213) parlera de la mission des prophetes — envoyee par la volonte divine.",
              axe3_sourate: "L'expression « man yasha'u » (qui Il veut) est frequente dans la sourate al-Baqarah comme marqueur de la liberte divine. En 2:90, 105, 142, 212, 247, 261, etc. La sourate construit une theologie de la volonte divine souveraine — Dieu guide, accorde, refuse selon sa volonte.",
              axe4_coherence: "La racine sh-y-' apparait environ 240 fois dans le Coran dans les formules de volonte divine. La volonte de Dieu est presentee comme absolue et libre — elle ne depend pas des merites humains mais de la sagesse divine.",
              axe5_frequence: "Pour la mission du khalifa, la volonte divine est le fondement de la sovereignty. Le khalifa sait que sa mission lui a ete confiee par la volonte de Dieu, pas par ses propres merites. Cette conscience empeche l'orgueil et fonde l'humilite — je suis khalifa parce que Dieu l'a voulu."
            },
            "Chose/Etre": {
              status: "nul",
              senses: ["chose", "etant", "realite"],
              proof_ctx: "Le sens de chose/etant est present dans la racine sh-y-' (shay' = chose). Mais dans la formule « man yasha'u » (qui Il veut), c'est le verbe sha'a (vouloir) qui est actif, pas le nom shay' (chose). Le contexte grammatical (verbe avec sujet divin) confirme le sens de volonte."
            }
          }
        }
      },
      {
        word_key: "hsb",
        position: 16,
        sense_chosen: "calcul/evaluation",
        analysis_axes: {
          sense_chosen: "calcul/evaluation",
          concept_chosen: "Calcul/Evaluation",
          concepts: {
            "Calcul/Evaluation": {
              status: "retenu",
              senses: ["calcul", "evaluation", "compte", "comptabilite", "suffisance"],
              proof_ctx: "Le nom hisabin est un nom indefini genitif de la racine h-s-b. Le Lane's donne : calcul, evaluation, compte, comptabilite, ce qui suffit, consideration. La construction « bighayri hisabin » = sans calcul/compte. Le hisab est le processus d'evaluation quantitative — calculer, compter, mesurer. « Sans hisab » signifie que la provision n'est pas soumise a un calcul restrictif — elle depasse tout compte.",
              axe1_verset: "Le « sans compte » (bighayri hisabin) qualifie la provision divine — elle est au-dela du calcul. Le champ lexical (rejettent, moquerie, superiority, relevement, provision) montre que la provision sans compte s'oppose aux calculs terrestres des rejeteurs. Ceux qui se croient superieurs parce qu'ils ont des ressources calculees seront depassees par la provision divine qui echappe a tout calcul.",
              axe2_voisins: "Le verset 212 clot avec la provision sans compte. Ce motif sera repris en 2:261 (ceux qui depensent dans la voie de Dieu — leur recompense est multiplee sans compte). La provision divine sans compte est une promesse de generosite absolue qui transcende les logiques economiques humaines.",
              axe3_sourate: "La racine h-s-b apparait dans la sourate al-Baqarah en 2:202 (ceux dont la part calculee est bonne), en 2:212 et en 2:261 (sans compte). La sourate construit une dialectique entre le calcul humain (limite) et la provision divine (sans limite). Dieu accorde sans calculer — sa generosite n'est pas soumise aux contraintes arithmetiques humaines.",
              axe4_coherence: "La racine h-s-b apparait environ 109 fois dans le Coran. L'expression « bighayri hisabin » (sans compte) est une formule etablie pour exprimer l'abondance divine absolue. Le Coran utilise le hisab dans deux contextes : le calcul divin des actes (le Jour du Jugement — un hisab strict pour les actes) et l'absence de calcul dans la provision divine (l'abondance du don).",
              axe5_frequence: "Pour la mission du khalifa, la provision sans compte est un modele de generosite. Le khalifa ne doit pas compter ses dons a la communaute — il donne avec largesse, a l'image de la provision divine. La civilisation que le khalifa construit est une civilisation de l'abondance partagee, pas du calcul restrictif."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[212];

  // 1. Update verse_analyses
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V212)');

  // 2. Insert VWA
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

  console.log('\n✅ V212 TERMINE');
}
main().catch(console.error);
