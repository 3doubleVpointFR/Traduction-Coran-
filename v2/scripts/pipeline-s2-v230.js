const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 230
// verse_id=237, analysis_id=595
// "fa in tallaqaha fa la tahillu lahu min ba'du
//  hatta tankiha zawjan ghayrihi
//  fa in tallaqaha fa la junaha 'alayhima
//  an yatarajaa in zanna an yuqima hududa Allahi
//  wa tilka hududa Allahi yubayyinuha
//  li qawmin ya'lamuna"
// =====================================================

const verseData = {
  230: {
    verse_id: 237,
    analysis_id: 595,
    translation_arab: "S'il la repudie [une troisieme fois], elle ne lui sera plus licite jusqu'a ce qu'elle epouse un autre epoux. S'il [le second] la repudie, il n'y a pas d'inclinaison [vers la faute] sur eux deux de se reprendre, s'ils pensent pouvoir etablir les limites de Dieu. Voila les limites de Dieu — Il les clarifie pour un peuple qui sait.",
    full_translation: "Et si enfin il la répudie, alors elle ne lui sera plus licite jusqu'à ce qu'elle épouse un autre mari. S'il (le nouveau mari) la répudie, ce n'est alors pas un péché pour eux deux de se reprendre, si tous deux pensent pouvoir respecter les prescriptions d'Allah. Voilà les prescriptions d'Allah qu'Il expose aux gens qui savent.",
    translation_explanation: `§DEMARCHE§
Le verset 230 est la suite directe du verset 229 : apres le troisieme talaq (definitif), la femme ne peut revenir a son premier mari que si elle a epouse un autre homme (zawjan ghayrah) qui l'a lui-meme divorcee. C'est la regle du muhallil — le mariage intermediaire. Le verset conclut sur la declaration que ces regles sont les hudud Allah (limites de Dieu) qu'Il explique (yubayyinu) pour ceux qui savent.

Le verbe **tallaqaha** est un accompli 3MS de la racine t-l-q. Le Lane's donne : dissoudre le lien, liberer, repudier. Le talaq est la dissolution du lien conjugal — ici, le troisieme et definitif talaq apres les deux revocables du verset 229.

Le verbe **tahillu** est un inaccompli 3FS de la racine h-l-l. Le Lane's donne : etre licite, etre permis. « La tahillu lahu » = elle ne lui est plus licite — l'interdiction de remariage avec le premier mari est absolue jusqu'a l'accomplissement de la condition.

Le verbe **tankiha** est un inaccompli subjonctif 3FS de la racine n-k-h. Le Lane's donne : se marier, epouser, contracter un mariage. La nikah est le mariage — l'union conjugale formalisee. « Hatta tankiha zawjan ghayrihi » = jusqu'a ce qu'elle epouse un autre epoux.

Le nom **zawjan** est un accusatif de la racine z-w-j. Le Lane's donne : epoux, couple, paire, partenaire conjugal. Le zawj est le partenaire conjugal — l'epoux dans l'union. « Zawjan ghayrihi » = un autre epoux (autre que le premier mari).

Le nom **junaha** (la junaha) est de la racine j-n-h. Le Lane's donne : inclination vers ce qui est blamable, penchant vers la faute. « La junaha 'alayhima » = pas d'inclinaison vers la faute sur eux deux — l'acte de se reprendre est legitime.

Le verbe **yatarajaa** est un inaccompli dual subjonctif de la racine r-j-' (Form VI, tarajaa'a). Le Lane's donne : revenir, retourner ; Form VI = retour reciproque, retour l'un vers l'autre. « Yatarajaa » = qu'ils reviennent l'un vers l'autre — la reciprocite du retour.

Le verbe **zanna** est un accompli dual de la racine z-n-n. Le Lane's donne : supposer, penser, croire (avec un certain degre d'incertitude), conjecturer. « Zanna » au dual = ils pensent tous deux, ils supposent. « In zanna an yuqima hududa Allahi » = s'ils pensent pouvoir etablir les limites de Dieu.

Le verbe **yuqima** est un inaccompli dual subjonctif de la racine q-w-m (Form IV, aqama). Le Lane's donne : dresser, etablir, eriger verticalement. « Yuqima hududa Allahi » = etablir/dresser les limites de Dieu — les maintenir fermes et verticales.

Le nom **hududa** (hududa Allahi / hudidu Allahi) est un pluriel de la racine h-d-d. Le Lane's donne : limite, frontiere, borne. « Hududa Allahi » = les limites fixees par Dieu — les frontieres normatives du droit matrimonial.

Le verbe **yubayyinuha** est un inaccompli 3MS de la racine b-y-n (Form II, bayyina). Le Lane's donne : clarifier, rendre evident, expliquer, distinguer. La Form II intensive : rendre pleinement clair. « Yubayyinuha li qawmin ya'lamuna » = Il les clarifie pour un peuple qui sait.

Le nom **qawmin** est un genitif indefini de la racine q-w-m. Le Lane's donne : peuple, groupe humain, communaute, nation. Le qawm est la communaute humaine — un groupe uni par des liens communs.

Le verbe **ya'lamuna** est un inaccompli 3MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe. « Ya'lamuna » = qui savent — ceux qui ont la connaissance. La precision « pour ceux qui savent » distingue le destinataire privilegié de la revelation.

§JUSTIFICATION§
**S'il la repudie [pour la troisieme fois]** — tallaqaha est le troisieme talaq definitif apres les deux revocables du verset 229. Le « pour la troisieme fois » est implicite dans la structure narrative — le verset 229 a compte deux fois, le verset 230 est la suite logique.

**elle ne lui sera plus licite** — la tahillu lahu. La racine h-l-l (licite) est de nouveau employee — la femme triplement divorcee est haram (illicite) pour son premier mari. L'interdiction est juridique et absolue.

**jusqu'a ce qu'elle epouse un autre epoux** — hatta tankiha zawjan ghayrihi. La nikah (mariage) avec un autre zawj (epoux) est la condition. Le mariage intermediaire (muhallil) doit etre un vrai mariage (tankiha = she actually marries), pas une fiction juridique.

**pas d'inclinaison vers la faute de se reprendre** — la junaha 'alayhima an yatarajaa. La junaha (inclinaison vers la faute) est niee — le retour est legitime si la condition est remplie (mariage intermediaire reel + pensee de pouvoir etablir les limites). Cf. analyse de jnh en V229.

**s'ils pensent pouvoir etablir les limites** — in zanna an yuqima hududa Allahi. La zann (pensee/supposition) est plus souple que la certitude — « s'ils pensent, s'ils estiment probable » qu'ils pourront respecter les limites divines. Ce n'est pas une certitude exigee mais une estimation sincere.

**Il les clarifie** — yubayyinuha. La racine b-y-n (clarte/evidence) au Form II intensif : Dieu lui-meme explicite et clarifie ces regles. Le pronom féminin « ha » renvoie aux hudud (limites) — Il clarifie les limites pour ceux qui savent.

**pour un peuple qui sait** — li qawmin ya'lamuna. La specification du destinataire : ces regles s'adressent specifiquement a ceux qui ont la connaissance. La racine '-l-m (savoir) designe la connaissance active et profonde.

§CRITIQUE§
Hamidullah traduit « yubayyinuha li qawmin ya'lamuna » par « qu'Il expose aux gens qui savent ». Le verbe bayyina (Form II de b-y-n) signifie rendre pleinement clair, clarifier, expliciter — plus fort qu'« exposer ». Bayyina est l'action de rendre evident ce qui pourrait rester obscur. « Clarifie » est plus precis qu'« expose » qui suggere seulement une presentation.

Hamidullah traduit « zanna » par « penser » (« si tous deux pensent pouvoir respecter »). Le Lane's donne pour zanna : supposer, conjecturer, penser avec une certaine incertitude. La zann n'est pas la certitude ('ilm) — c'est une supposition fondee, une estimation probable. La traduction « pensent » est acceptable mais « estiment probable » serait plus precis. La sagesse juridique du verset est importante : on n'exige pas la certitude (impossible humainement) mais une estimation sincere.

Le mecanisme du muhallil (mariage intermediaire) dans ce verset a ete sujet a abus historiques — des hommes acceptant d'epouser temporairement une femme pour la « rendre licite » a son premier mari. Les juristes islamiques ont unanimement condamne ce mariage fictif (nikah al-muhallil) comme invalide. Le verset exige un vrai mariage (tankiha) et un vrai divorce (tallaqaha) — pas une fiction. La condition « in zanna an yuqima hududa Allahi » (s'ils pensent pouvoir etablir les limites) confirme que le retour ne peut se faire que si la relation peut etre saine.`,
    segments: [
      { fr: "S'il la repudie [pour la troisieme fois]", pos: "verbe", phon: "fa in tallaqaha", arabic: "فَإِن طَلَّقَهَا", word_key: "tlq", is_particle: false, sense_retenu: "separation/liberation", position: 0 },
      { fr: "elle ne lui sera plus licite", pos: "verbe", phon: "fa la tahillu lahu min ba'du", arabic: "فَلَا تَحِلُّ لَهُۥ مِنۢ بَعْدُ", word_key: "hll", is_particle: false, sense_retenu: "licite/permission", position: 1 },
      { fr: "jusqu'a ce qu'elle epouse [un autre]", pos: "verbe", phon: "hatta tankiha", arabic: "حَتَّىٰ تَنكِحَ", word_key: "nkh", is_particle: false, sense_retenu: "mariage/union", position: 2 },
      { fr: "un autre epoux", pos: "nom", phon: "zawjan ghayrihi", arabic: "زَوْجًا غَيْرَهُۥ", word_key: "zwj", is_particle: false, sense_retenu: "couple/union", position: 3 },
      { fr: "si [le second] la repudie", is_particle: true, phon: "fa in tallaqaha", arabic: "فَإِن طَلَّقَهَا", position: 4 },
      { fr: "pas d'inclinaison [vers la faute] a se reprendre", pos: "nom", phon: "fa la junaha 'alayhima an yatarajaa", arabic: "فَلَا جُنَاحَ عَلَيْهِمَآ أَن يَتَرَاجَعَآ", word_key: "jnh", is_particle: false, sense_retenu: "inclinaison/penchant", position: 5 },
      { fr: "s'ils pensent pouvoir etablir les limites", pos: "verbe", phon: "in zanna an yuqima hududa", arabic: "إِن ظَنَّآ أَن يُقِيمَا حُدُودَ", word_key: "znn", is_particle: false, sense_retenu: "pensee/supposition", position: 6 },
      { fr: "etablir les limites de Dieu", pos: "verbe", phon: "yuqima hududa Allahi", arabic: "يُقِيمَا حُدُودَ ٱللَّهِ", word_key: "qwm", is_particle: false, sense_retenu: "verticalite/droiture", position: 7 },
      { fr: "les limites de Dieu", pos: "nom", phon: "hududa Allahi", arabic: "حُدُودَ ٱللَّهِ", word_key: "hdd", is_particle: false, sense_retenu: "limite/frontiere", position: 8 },
      { fr: "Il les clarifie", pos: "verbe", phon: "yubayyinuha", arabic: "يُبَيِّنُهَا", word_key: "byn", is_particle: false, sense_retenu: "clarte/evidence", position: 9 },
      { fr: "pour un peuple qui sait", pos: "nom", phon: "li qawmin ya'lamuna", arabic: "لِقَوْمٍ يَعْلَمُونَ", word_key: "elm", is_particle: false, sense_retenu: "savoir/connaissance", position: 10 }
    ],
    vwa: [
      {
        word_key: "tlq",
        position: 0,
        sense_chosen: "separation/liberation",
        analysis_axes: {
          sense_chosen: "separation/liberation",
          concept_chosen: "Séparation/Libération",
          concepts: {
            "Séparation/Libération": {
              status: "retenu",
              senses: ["repudier", "divorcer", "liberer", "separation", "dissolution du lien"],
              proof_ctx: "Le verbe tallaqaha est un accompli 3MS de la racine t-l-q (Form II, tallaqa). Le Lane's donne pour t-l-q : relacher, liberer, dissoudre un lien, repudier. La Form II intensive : acte delibere et complet de repudiation. « Tallaqaha » = il la repudia. Le talaq est la dissolution formelle du lien conjugal — la femme est liberee (mutlaqa) du mariage.",
              axe1_verset: "Tallaqaha (il la repudia) dans le verset 230 est le troisieme talaq definitif — celui qui clot le cycle des deux talaq revocables du verset 229. Apres ce troisieme talaq, la femme devient definitvement separee : la licite (hll) est interrompue jusqu'a la condition du mariage intermediaire. La separation (t-l-q) est totale et ses effets sont irreversibles sans la condition.",
              axe2_voisins: "Le verset 229 comptait les deux talaq revocables (marratani). Le verset 230 est la suite : si malgre les deux talaq le mari repudie une troisieme fois (tallaqaha), les consequences sont plus lourdes. La progression 229→230 illustre l'escalade du droit du talaq vers ses consequences definitives.",
              axe3_sourate: "La racine t-l-q est centrale dans la section matrimoniale de al-Baqarah (2:226-237). Le talaq est le terme technique du divorce islamique — il structure tout ce passage.",
              axe4_coherence: "La racine t-l-q apparait environ 30 fois dans le Coran. Le sens de liberation/separation est constant. En contexte conjugal, le talaq est le terme juridique de la dissolution du mariage.",
              axe5_frequence: "Pour le khalifa, le talaq definitif (troisieme) est un mecanisme de protection de la femme contre l'abus de la revocabilite. Le droit de repudier est limite : deux fois revocables, la troisieme est irreversible sans mariage intermediaire — cela empeche de se servir du talaq comme outil de harcelement."
            }
          }
        }
      },
      {
        word_key: "hll",
        position: 1,
        sense_chosen: "licite/permission",
        analysis_axes: {
          sense_chosen: "licite/permission",
          concept_chosen: "Licéité/Permission",
          concepts: {
            "Licéité/Permission": {
              status: "retenu",
              senses: ["etre licite", "etre permis", "halal", "permission", "legalite"],
              proof_ctx: "Le verbe tahillu est un inaccompli 3FS de la racine h-l-l. Le Lane's donne : etre licite, etre permis, etre legal. « La tahillu lahu » = elle ne lui est plus licite (permise). La licite (hll) est la categorie juridique de ce qui est autorise. Sa negation cree une interdiction absolue : la femme est haram (illicite) pour le mari jusqu'a l'accomplissement de la condition.",
              axe1_verset: "La tahillu lahu (elle ne lui est plus licite) est la consequence juridique directe du troisieme talaq. L'interdiction est absolue — « la tahillu » sans nuance. La seule issue est la condition posee dans la suite : tankiha zawjan ghayrihi (epouse un autre). La licite sera retablie uniquement si cette condition est remplie.",
              axe2_voisins: "Le verset 229 utilisait la meme racine (la yahillu = il ne vous est pas licite de reprendre les biens). La licite/illiceite est le cadre juridique de tout le passage matrimonial. La double apparition de h-l-l (229 et 230) souligne que tout le droit du talaq est structure autour de la permission et de l'interdiction.",
              axe3_sourate: "La racine h-l-l est tres frequente dans al-Baqarah, notamment dans les sections juridiques. La paire halal/haram (licite/interdit) est la structure fondamentale de la loi divine.",
              axe4_coherence: "La racine h-l-l apparait environ 170 fois dans le Coran. La licite est l'une des categories juridiques fondamentales — ce que Dieu a rendu permis.",
              axe5_frequence: "Pour le khalifa, « la tahillu lahu » est une frontiere juridique infranchissable. Le remariage avec la femme triplement divorcee sans passer par le mariage intermediaire est strictement interdit — le khalifa applique cette interdiction sans exception."
            }
          }
        }
      },
      {
        word_key: "nkh",
        position: 2,
        sense_chosen: "mariage/union",
        analysis_axes: {
          sense_chosen: "mariage/union",
          concept_chosen: "Mariage/Union",
          concepts: {
            "Mariage/Union": {
              status: "retenu",
              senses: ["mariage", "epouser", "contracter un mariage", "union conjugale", "nikah"],
              proof_ctx: "Le verbe tankiha est un inaccompli subjonctif 3FS de la racine n-k-h. Le Lane's donne : se marier, epouser, contracter un mariage formel. La nikah est le mariage — le contrat d'union conjugale formalise et legitime. « Hatta tankiha zawjan ghayrihi » = jusqu'a ce qu'elle epouse un autre epoux. Le subjonctif (tankiha, pas tatazawwaj) specifie un acte accompli.",
              axe1_verset: "Tankiha (qu'elle epouse) est la condition de la licite retrouvee. Ce doit etre un vrai mariage (nikah) — pas une fiction. Les juristes islamiques ont precise que ce mariage doit etre consomme (juste une formalite administrative ne suffit pas) et que l'intention doit etre sincere (pas d'accord prealable de divorce).",
              axe2_voisins: "Le zawjan ghayrihi (autre epoux) complete la condition : c'est un autre homme, pas le meme premier mari. La nikah avec un autre est la rupture complete du cycle precedent.",
              axe3_sourate: "La racine n-k-h est presente dans al-Baqarah en 2:221, 230, 232, 235, 237. La nikah est le terme technique du mariage islamique — elle structure toute la section matrimoniale.",
              axe4_coherence: "La racine n-k-h apparait environ 23 fois dans le Coran. Le sens de mariage/union est constant et technique.",
              axe5_frequence: "Pour le khalifa, la nikah est le fondement du droit de la famille. La condition tankiha dans le verset 230 protege contre les abus du talaq revocable — le troisieme talaq a des consequences irreversibles qui incitent a la reflexion."
            }
          }
        }
      },
      {
        word_key: "zwj",
        position: 3,
        sense_chosen: "couple/union",
        analysis_axes: {
          sense_chosen: "couple/union",
          concept_chosen: "Couple/Union",
          concepts: {
            "Couple/Union": {
              status: "retenu",
              senses: ["epoux", "couple", "paire", "partenaire conjugal", "zawj"],
              proof_ctx: "Le nom zawjan est un accusatif de la racine z-w-j. Le Lane's donne : epoux, couple, paire, partenaire conjugal. Le zawj est fondamentalement la paire — ce qui va ensemble. En contexte conjugal, le zawj est l'epoux (masculin) ou l'epouse (feminin selon le contexte). « Zawjan ghayrihi » = un autre epoux, un autre partenaire conjugal.",
              axe1_verset: "Zawjan ghayrihi (un autre epoux) est la condition de la reunion : la femme triplement divorcee doit former une paire (zawj) avec un autre homme avant de pouvoir revenir au premier. L'image du couple (zawj = paire) est significative : un nouveau couple doit se former pour que l'ancien puisse se reformer.",
              axe2_voisins: "Le verset 221 parlait du mariage (la tankihu al-mushrikat). Le verset 230 utilise zawj pour l'autre epoux dans la condition du muhallil. Le zawj est toujours le partenaire dans l'union conjugale.",
              axe3_sourate: "La racine z-w-j est frequente dans al-Baqarah. Le zawj (couple/epoux) est le terme central de la section matrimoniale. La paire (z-w-j) est un concept cosmique dans le Coran — tout est cree en paires.",
              axe4_coherence: "La racine z-w-j apparait environ 80 fois dans le Coran. Le sens de paire/couple est constant — en contexte conjugal, le zawj est l'epoux.",
              axe5_frequence: "Pour le khalifa, la notion de zawj (couple/paire) est fondamentale pour la legislation du mariage. La condition du zawjan ghayrihi (autre epoux) dans le verset 230 implique une vraie union — un vrai couple, pas une fiction juridique."
            }
          }
        }
      },
      {
        word_key: "jnh",
        position: 5,
        sense_chosen: "inclinaison/penchant",
        analysis_axes: {
          sense_chosen: "inclinaison/penchant",
          concept_chosen: "Inclinaison/Penchant",
          concepts: {
            "Inclinaison/Penchant": {
              status: "retenu",
              senses: ["inclination", "penchant", "inclinaison vers la faute", "tendance blamable"],
              proof_ctx: "Le nom junaha est un accusatif de la racine j-n-h. Le Lane's donne : inclination vers ce qui est blamable, penchant vers la faute. « La junaha 'alayhima » = pas d'inclinaison vers la faute sur eux deux. La negation du junah valide l'acte : le retour des deux epoux apres le mariage intermediaire est pleinement legitime — aucun penchant vers la faute n'y est attache.",
              axe1_verset: "La junaha (inclinaison vers la faute) est niee pour le retour (yatarajaa) apres le mariage intermediaire. La condition — si le second mari a divorce et qu'ils pensent pouvoir etablir les limites — etant remplie, l'acte de se reprendre est net de toute faute morale ou juridique.",
              axe2_voisins: "En V229, la meme expression (la junaha 'alayhima) validait le khul' (divorce initie par la femme). En V230, elle valide le retour apres mariage intermediaire. La formule est recurrente dans la section matrimoniale pour valider des actes potentiellement problematiques.",
              axe3_sourate: "La racine j-n-h avec la negation (la junaha) est une formule juridique de legitimation dans les sections matrimoniale et sociale de al-Baqarah.",
              axe4_coherence: "La racine j-n-h apparait une vingtaine de fois dans le Coran. Le junah designe le penchant blamable — ni le peche accompli ni la simple recommandation, mais la tendance vers ce qui est reprochable.",
              axe5_frequence: "Pour le khalifa, « la junaha » est une declaration de legitimite juridique. Le retour des deux epoux apres le parcours du verset 229-230 est non seulement permis mais exempt de tout reproche — le legislateur divine le valide explicitement."
            }
          }
        }
      },
      {
        word_key: "znn",
        position: 6,
        sense_chosen: "pensee/supposition",
        analysis_axes: {
          sense_chosen: "pensee/supposition",
          concept_chosen: "Pensée/Supposition",
          concepts: {
            "Pensée/Supposition": {
              status: "retenu",
              senses: ["penser", "supposer", "estimer probable", "conjecture fondee", "zann"],
              proof_ctx: "Le verbe zanna est un accompli dual de la racine z-n-n. Le Lane's donne : penser, supposer, conjecturer (avec une certaine probabilite mais sans certitude absolue). La zann est distincte de la certitude ('ilm/yaqin) — c'est une estimation probable, une opinion fondee. « In zanna an yuqima hududa Allahi » = s'ils estiment probable de pouvoir etablir les limites de Dieu.",
              axe1_verset: "La zann (pensee/supposition) est la condition subjective du retour : les deux epoux doivent estimer qu'ils pourront etablir les limites divines. Le verset n'exige pas la certitude — impossible humainement — mais une evaluation sincere et fondee. C'est une condition psychologique et morale : le retour n'est permis que si les deux le pensent vraiment viable.",
              axe2_voisins: "Le verset 229 utilisait la crainte (yakhafa) comme condition du khul'. Le verset 230 utilise la pensee/supposition (zanna) comme condition du retour. Les deux emotions/cognitions (peur/pensee) encadrent les deux actes (khul'/retour). La peur est plus intense — pour le khul', la situation est urgente. La supposition suffit pour le retour — une estimation sincere.",
              axe3_sourate: "La racine z-n-n est presente dans al-Baqarah. La zann (supposition) est generalement moins valorisee que l'ilm (certitude) dans le Coran — mais ici, la zann est valorisee comme condition suffisante et realiste.",
              axe4_coherence: "La racine z-n-n apparait environ 70 fois dans le Coran. La zann est souvent utilisee negativement (penser sans fondement). Mais en 2:230, elle est utilisee positivement — une estimation fondee qui conditionne la legitimite de l'acte.",
              axe5_frequence: "Pour le khalifa, la distinction entre zann (supposition fondee) et 'ilm (certitude) est juridiquement importante. La loi divine applique une norme realiste : elle n'exige pas la certitude (inaccessible) mais une evaluation sincere. Le juge evalue la sincerite de la zann des epoux."
            }
          }
        }
      },
      {
        word_key: "qwm",
        position: 7,
        sense_chosen: "verticalite/droiture",
        analysis_axes: {
          sense_chosen: "verticalite/droiture",
          concept_chosen: "Verticalité/Droiture",
          concepts: {
            "Verticalité/Droiture": {
              status: "retenu",
              senses: ["dresser", "etablir", "eriger verticalement", "maintenir droit", "iqama"],
              proof_ctx: "Le verbe yuqima est un inaccompli dual subjonctif de la racine q-w-m (Form IV, aqama). Le Lane's donne pour aqama : dresser, eriger, etablir en verticalite, maintenir debout. « Yuqima hududa Allahi » = dresser/etablir les limites de Dieu. La meme forme que dans le verset 229 — la coherence lexicale souligne que les deux versets traitent du meme engagement fondamental.",
              axe1_verset: "Yuqima hududa Allahi dans le verset 230 reprend exactement la meme formule que dans le verset 229 (deux fois). C'est la condition reciproque : tant pour le khul' que pour le retour, la capacite d'etablir les limites divines est le critere. L'image de la verticalite est constante — les limites divines doivent etre dressees et maintenues debout.",
              axe2_voisins: "La formule yuqima hududa Allahi apparait en 2:229 (deux fois) et 2:230 (une fois) — trois occurrences en deux versets. Cette repetition est intentionnelle : elle marque que tout le dispositif du talaq et du retour tourne autour de la capacite a etablir les limites divines.",
              axe3_sourate: "La racine q-w-m avec aqama (Form IV) est utilisee systematiquement pour l'etablissement de choses fondamentales : la priere (aqimu al-salat), les limites (iqamat al-hudud), le temoignage. La verticalite est le concept central.",
              axe4_coherence: "La racine q-w-m apparait environ 640 fois dans le Coran. L'iqama (Form IV) designe systematiquement l'action de dresser/etablir fermement.",
              axe5_frequence: "Pour le khalifa, iqamat al-hudud est la responsabilite supreme — dresser et maintenir les limites divines dans la societe. Le verset 230 montre que cette responsabilite commence dans la cellule conjugale : chaque individu doit pouvoir eriger les limites divines dans sa propre vie."
            }
          }
        }
      },
      {
        word_key: "hdd",
        position: 8,
        sense_chosen: "limite/frontiere",
        analysis_axes: {
          sense_chosen: "limite/frontiere",
          concept_chosen: "Limite/Frontière",
          concepts: {
            "Limite/Frontière": {
              status: "retenu",
              senses: ["limite", "frontiere", "borne", "bord", "hadd"],
              proof_ctx: "Le nom hududa (hududa Allahi / hudidu Allahi) est pluriel de la racine h-d-d. Le Lane's donne : limite, frontiere, bord, borne — ce qui delimite et separe. « Hududa Allahi » = les limites fixees par Dieu. La hadd (pluriel hudud) est la frontiere normative qu'on ne doit pas depasser. En 2:230, hudud Allah se referent aux regles du mariage, du divorce et du retour.",
              axe1_verset: "Hududa Allahi apparait deux fois dans le verset 230 : « in zanna an yuqima hududa Allahi » (condition du retour) et « wa tilka hududa Allahi yubayyinuha » (conclusion : voila les limites que Dieu clarifie). La double apparition encadre la regle et son fondement — la regle est une limite, et Dieu explique ces limites.",
              axe2_voisins: "Dans le verset 229, hududa Allahi apparaissait trois fois. Dans le verset 230, deux fois. La repetition totale de cinq fois en deux versets consecutifs est frappante — elle exprime que le droit du talaq est entierement encadre par les hudud divins.",
              axe3_sourate: "La racine h-d-d est presente dans al-Baqarah en 2:187 et 2:229-230. Les hudud Allah sont les frontieres de la loi divine — transgressor les hudud est la faute supreme.",
              axe4_coherence: "La racine h-d-d apparait environ 60 fois dans le Coran. Les hudud Allah sont un concept juridique et ethique central.",
              axe5_frequence: "Pour le khalifa, les hudud Allah sont la constitution divine inviolable. En 2:230, la conclusion « tilka hududa Allahi yubayyinuha li qawmin ya'lamuna » signifie que ces regles ne sont pas arbitraires — elles sont des limites claires que Dieu lui-meme explicite pour ceux qui savent."
            }
          }
        }
      },
      {
        word_key: "byn",
        position: 9,
        sense_chosen: "clarte/evidence",
        analysis_axes: {
          sense_chosen: "clarte/evidence",
          concept_chosen: "Clarté/Évidence",
          concepts: {
            "Clarté/Évidence": {
              status: "retenu",
              senses: ["clarifier", "rendre evident", "expliquer", "expliciter", "bayyina"],
              proof_ctx: "Le verbe yubayyinuha est un inaccompli 3MS de la racine b-y-n (Form II, bayyina). Le Lane's donne pour bayyina : clarifier, rendre pleinement evident, distinguer clairement, expliquer. La Form II intensive : l'action de rendre parfaitement clair ce qui pourrait etre obscur. « Yubayyinuha » = Il les clarifie (les limites). Le pronom feminin « ha » renvoie aux hudud.",
              axe1_verset: "Yubayyinuha (Il les clarifie) — Dieu lui-meme prend en charge la clarification des regles complexes du talaq. Ce n'est pas une simple enumeration de lois : c'est une action divine de clarification, de mise en evidence. La conclusion du verset est donc epistemologique : ces regles viennent de Dieu et Il les rend claires — pour ceux qui savent.",
              axe2_voisins: "Le verset 229 concluait sur la prohibition de transgresser (la ta'taduha) et sur la definition des zalimun. Le verset 230 conclut sur la clarification divine (yubayyinuha) pour ceux qui savent. La progression est : interdiction → definition de la faute → clarification educative. Deux faces de la legislation : l'interdit et l'explication.",
              axe3_sourate: "La racine b-y-n est tres frequente dans al-Baqarah. La bayyina (preuve claire), le tabyin (clarification) et la Form II bayyana sont constamment utilises pour decrire la demarche de revelation — Dieu clarifie, distingue, explicite.",
              axe4_coherence: "La racine b-y-n apparait environ 520 fois dans le Coran — l'une des plus frequentes. La clarte/evidence est une valeur epistemologique centrale de la revelation — Dieu rend clair ce qui pourrait rester obscur.",
              axe5_frequence: "Pour le khalifa, yubayyinu (Il clarifie) signifie que les lois divines ne sont pas opaques ou arbitraires — elles peuvent etre connues, comprises et appliquees. Le khalifa est l'instrument humain de cette clarification dans la societe."
            },
            "Séparation/Distance": {
              status: "possible",
              senses: ["separer", "distinguer", "distancier"],
              proof_ctx: "La racine b-y-n designe aussi la separation, la distinction — ce qui est entre deux choses. Bayyina = rendre la separation/distinction claire.",
              axe1_verset: "Dans ce contexte, la clarification (bayyana) est le sens dominant — Dieu explique les regles, il ne les separe pas.",
              axe2_voisins: "Le sens de separation est present etymologiquement mais c'est la clarification/evidence qui prime dans yubayyinu li qawmin ya'lamuna.",
              axe3_sourate: "Dans les sections pedagogiques de al-Baqarah, b-y-n designe systematiquement la clarification divine.",
              axe4_coherence: "Les deux sens (clarte et separation) sont lies etymologiquement — ce qui est clair est aussi ce qui est distinct.",
              axe5_frequence: "Pour le khalifa, la distinction et la clarification sont les deux faces du meme geste legislatif."
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 10,
        sense_chosen: "savoir/connaissance",
        analysis_axes: {
          sense_chosen: "savoir/connaissance",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "connaissance", "'ilm"],
              proof_ctx: "Le verbe ya'lamuna est un inaccompli 3MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe avec certitude. L'ilm est le savoir — la connaissance certaine, opposee a la zann (supposition). « Li qawmin ya'lamuna » = pour un peuple qui sait. Le relatif ya'lamuna (qui savent) qualifie le destinataire de la clarification divine.",
              axe1_verset: "Ya'lamuna (qui savent) specifie le destinataire de la clarification des hudud : ceux qui ont la connaissance peuvent comprendre et appliquer ces regles complexes. La specification n'est pas exclusive (les autres sont exclus) mais qualitative : les regles s'adressent a ceux qui ont la capacite de comprendre — c'est une invitation a acquerir le savoir.",
              axe2_voisins: "Le verset 229 concluait sur la transgression et l'injustice. Le verset 230 conclut sur le savoir. La progression 229→230 : ne pas transgresser (229) → savoir pourquoi ne pas transgresser (230). Le savoir fonde l'observance.",
              axe3_sourate: "La racine '-l-m est omnipresente dans al-Baqarah. L'ilm (savoir/connaissance) est la valeur epistemologique supreme — Dieu est Al-'Alim (le Sachant), et les croyants sont invites a savoir.",
              axe4_coherence: "La racine '-l-m apparait environ 780 fois dans le Coran — l'une des plus frequentes. Le savoir est une valeur cardinale de l'Islam — 'Iqra' (lis/sais) est le premier mot revele.",
              axe5_frequence: "Pour le khalifa, « li qawmin ya'lamuna » est une exigence de competence juridique. Le khalifa et ses juristes doivent etre du nombre de ceux qui savent — la legislation complexe du talaq et du retour ne peut etre appliquee justement que par ceux qui en comprennent la logique divine."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[230];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V230)');

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

  console.log('\n✅ V230 TERMINE');
}
main().catch(console.error);
