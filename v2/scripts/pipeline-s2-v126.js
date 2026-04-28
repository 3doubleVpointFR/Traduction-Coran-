const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 126
// verse_id=133, analysis_id=492
// "Et quand Abraham dit: Seigneur, fais de ceci une cite
//  sure, et nourris ses habitants de fruits — ceux d'entre
//  eux qui ont cru en Dieu et au Jour dernier. Il dit: et
//  quiconque a couvert, Je lui accorderai jouissance peu,
//  puis Je le contraindrai vers le chatiment du Feu. Et
//  quelle mauvaise destination!"
// =====================================================

const verseData = {
  126: {
    verse_id: 133,
    analysis_id: 492,
    translation_arab: "Et quand Abraham dit : Seigneur, fais de ceci une cite sure, et nourris ses habitants de fruits — ceux d'entre eux qui ont cru en Dieu et au Jour dernier. Il dit : et quiconque a couvert, alors Je lui accorderai jouissance peu, puis Je le contraindrai vers le chatiment du Feu. Et quelle mauvaise destination !",
    full_translation: "Et quand Abraham dit : «Seigneur, fais de cette cite un lieu sur, et nourris de fruits ceux de ses habitants qui croient en Allah et au Jour dernier», le Seigneur dit : «Et quiconque n'y croit pas, alors Je lui concederai une courte jouissance puis Je le contraindrai au chatiment du Feu; et quelle mauvaise destination!»",
    translation_explanation: `§DEMARCHE§
Le verset rapporte une invocation d'Abraham adressee a son Seigneur, suivie de la reponse divine. Le verbe **qala** est un accompli 3MS de la racine q-w-l. Le Lane's donne : dire, enoncer, prononcer une parole. L'accompli marque un evenement passe — Abraham a dit cette parole. Le nom propre **Ibrahim** est un nom non arabe (hebraique) designe le patriarche. Le nom **rabbi** est un nom masculin singulier au genitif avec pronom suffixe 1S de la racine r-b-b. Le Lane's donne : seigneur, maitre, celui qui eleve et entretient. Le possessif « mon » (ya implicite) cree un lien intime entre Abraham et son Seigneur — il s'adresse a Celui qui l'eleve. Le verbe **ij'al** est un imperatif 2MS de la racine j-'-l. Le Lane's donne : faire, rendre, placer, etablir. L'imperatif est une demande — Abraham demande a son Seigneur de transformer quelque chose. Le demonstratif **hadha** est un pronom demonstratif masculin singulier. Le Lane's donne : ceci, celui-ci. Il designe un lieu present — Abraham pointe vers un endroit precis qu'il a devant lui. Le nom **baladan** est un nom masculin singulier indefini accusatif de la racine b-l-d. Le Lane's donne : pays, cite, contree. L'indefini marque que le lieu n'est pas encore une cite — Abraham demande qu'il le devienne. L'adjectif **aminan** est un participe actif masculin singulier indefini de la racine a-m-n. Le Lane's donne : sur, en securite, ou l'on se sent en securite. Le participe actif indique un etat permanent — la cite sera de maniere continue un lieu de securite. Le verbe **urzuq** est un imperatif 2MS de la racine r-z-q. Le Lane's donne : pourvoir, nourrir, accorder la subsistance. L'imperatif est une deuxieme demande — apres la securite, la subsistance. Le nom **ahlahu** est un nom masculin singulier accusatif de la racine a-h-l avec pronom suffixe 3MS. Le Lane's donne : famille, gens, habitants. Le pronom « hu » renvoie a la cite — les gens de cette cite. La preposition **mina** (de, parmi) introduit la matiere de la subsistance. Le nom **ath-thamarati** est un nom feminin pluriel defini au genitif de la racine th-m-r. Le Lane's donne : fruits, recoltes, produits. L'article defini marque les fruits en general — tous les fruits. Le pronom relatif **man** est un pronom relatif/conditionnel de la racine m-n-y. Il introduit une restriction — pas tous les habitants, mais ceux qui ont cru. Le verbe **amana** est un accompli 3MS de la racine a-m-n (forme IV). Le Lane's donne : croire, avoir la foi, adherer a la verite. L'accompli marque que la foi est un etat acquis. La preposition **minhum** (parmi eux) precise que la restriction porte sur une partie des habitants. La preposition **bi** (en, avec) introduit l'objet de la foi. Le nom **Allahi** est le nom propre de Dieu au genitif. Le nom **al-yawmi** est un nom masculin singulier defini au genitif de la racine y-w-m. Le Lane's donne : jour, journee, periode. L'article defini marque un jour specifique — LE Jour. Le nom **al-akhiri** est un adjectif masculin singulier defini au genitif de la racine a-kh-r. Le Lane's donne : dernier, ultime, final. L'article defini et le genitif montrent que c'est le Jour dernier — le Jour de la resurrection. Le deuxieme **qala** est un accompli 3MS — Dieu repond. Le pronom **man** (quiconque) introduit une condition. Le verbe **kafara** est un accompli 3MS de la racine k-f-r. Le Lane's donne : couvrir, cacher, recouvrir. Le sens premier est la couverture — celui qui couvre (la verite, les bienfaits). L'accompli marque un etat acheve. Le verbe **umattiuhu** est un inaccompli 1S de la forme II de la racine m-t-'. Le Lane's donne : faire jouir, accorder la jouissance, laisser profiter. L'inaccompli 1S avec pronom suffixe 3MS — « Je lui accorderai jouissance ». Le fa consequentiel lie la jouissance a la couverture. L'adjectif **qalilan** est un adjectif masculin singulier indefini accusatif de la racine q-l-l. Le Lane's donne : peu, faible, minime. L'indefini renforce la petitesse — un peu, une quantite derisoire. Le verbe **adtarruhu** est un inaccompli 1S de la forme VIII de la racine d-r-r. Le Lane's donne : contraindre, forcer, obliger. La forme VIII (ifta'ala) porte le sens de contrainte — forcer quelqu'un vers un endroit. L'inaccompli 1S avec pronom suffixe 3MS — « Je le contraindrai ». La preposition **ila** (vers) introduit la destination de la contrainte. Le nom **adhabi** est un nom masculin singulier au genitif en idafa de la racine '-dh-b. Le Lane's donne : chatiment, punition, tourment. Le chatiment est une consequence penible. Le nom **an-nari** est un nom feminin singulier defini au genitif de la racine n-w-r. Le Lane's donne : feu. Le Feu est le lieu du chatiment. Le verbe fige **bi'sa** est un verbe de blame de la racine b-'-s. Le Lane's donne : quel mauvais, combien mauvais. C'est un verbe de blame (fi'l dhamm) — il exprime le blame et la condamnation. Le nom **al-masiru** est un nom masculin singulier defini au nominatif de la racine s-y-r. Le Lane's donne : destination, aboutissement, lieu ou l'on finit. Le masir est l'endroit ou l'on aboutit apres un parcours — la destination finale.

§JUSTIFICATION§
**dit** — Le sens retenu est « dire ». Le verbe qala decrit l'acte de parole d'Abraham puis de Dieu. L'alternative « penser » est ecartee car le contexte est une invocation prononcee, pas une reflexion interieure.

**Abraham** — Nom propre non arabe, pas de choix de sens. Il designe le patriarche, pere des prophetes.

**Seigneur** — Le sens retenu est « seigneur ». Le mot rabbi designe Celui qui eleve et entretient. L'alternative « maitre » est ecartee car « Seigneur » preserve la dimension de celui qui eleve avec bienveillance, pas seulement celui qui commande.

**fais** — Le sens retenu est « faire/rendre ». Le verbe ij'al demande une transformation — rendre ceci une cite. L'alternative « placer » est ecartee car Abraham ne demande pas de placer quelque chose mais de transformer un lieu.

**ceci** — Demonstratif designant le lieu present. Abraham pointe vers un endroit precis.

**cite** — Le sens retenu est « cite/pays ». Le mot baladan designe un territoire habite. L'alternative « terre sterile » est ecartee car le contexte est une demande de prosperite et de securite.

**sure** — Le sens retenu est « securite ». Le mot aminan designe un lieu sur. L'alternative « croire » est ecartee car ici c'est la forme I participiale qui qualifie le lieu, pas la forme IV de la foi.

**nourris** — Le sens retenu est « pourvoir ». Le verbe urzuq demande l'approvisionnement. L'alternative « part » est ecartee car c'est l'acte de nourrir qui est demande.

**ses habitants** — Le sens retenu est « famille/gens ». Le mot ahlahu designe les gens de la cite. L'alternative « digne de » est ecartee car le contexte est les gens qui habitent.

**les fruits** — Le sens retenu est « fruits ». Le mot ath-thamarati designe les fruits et recoltes. Pas d'alternative a ecarter — le sens est univoque.

**ceux qui** — Pronom relatif man introduisant la restriction. C'est une particule grammaticale.

**a cru** — Le sens retenu est « croire/avoir la foi ». Le verbe amana (forme IV) designe l'adhesion a la verite. L'alternative « securite » est ecartee car la forme IV porte le sens de foi, pas de securite.

**d'entre eux** — Preposition + pronom, particule grammaticale.

**en Dieu** — Le sens retenu est « Dieu ». Le nom Allah designe la divinite. L'alternative « adorer » est ecartee car le mot est le nom propre.

**le Jour** — Le sens retenu est « jour ». Le mot al-yawmi designe une periode temporelle. L'alternative « evenement » est ecartee car le contexte est le Jour comme periode eschatologique.

**dernier** — Le sens retenu est « dernier ». Le mot al-akhiri qualifie le Jour comme ultime. L'alternative « retarder » est ecartee car le mot est un adjectif, pas un verbe.

**dit** — Deuxieme occurrence de qala — Dieu repond a Abraham. Meme analyse que la premiere occurrence.

**quiconque** — Pronom conditionnel man. Particule grammaticale.

**a couvert** — Le sens retenu est « couvrir ». Le verbe kafara designe l'acte de couvrir la verite ou les bienfaits. L'alternative « nier » est ecartee car le sens premier de k-f-r est couvrir, la negation etant une consequence de la couverture.

**Je lui accorderai jouissance** — Le sens retenu est « faire jouir ». Le verbe umattiuhu designe le fait d'accorder une jouissance temporaire. L'alternative « provision » est ecartee car ici c'est le plaisir temporel qui est accorde.

**peu** — Le sens retenu est « peu ». Le mot qalilan qualifie la jouissance comme derisoire. L'alternative « porter » est ecartee car le mot est un adjectif de quantite.

**Je le contraindrai** — Le sens retenu est « contraindre ». Le verbe adtarruhu designe la contrainte forcee. Le sens de nuisance est ecarte car la forme VIII porte specifiquement le sens de contrainte/obligation.

**chatiment** — Le sens retenu est « chatiment ». Le mot adhabi designe la punition. L'alternative « douceur » est ecartee car le contexte est punitif.

**le Feu** — Le sens retenu est « feu ». Le mot an-nari designe le Feu comme lieu de chatiment. L'alternative « lumiere » est ecartee car le contexte est le chatiment, pas l'eclairage.

**quelle mauvaise** — Le sens retenu est « malheur/blame ». Le verbe bi'sa exprime le blame absolu. Pas d'alternative a ecarter — le sens est univoque dans cette construction.

**destination** — Le sens retenu est « destination ». Le mot al-masiru designe le lieu ou l'on aboutit. L'alternative « devenir » est ecartee car le mot est un nom de lieu (masir = lieu du devenir), pas un verbe.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. Hamidullah traduit kafara par « n'y croit pas » ce qui est une interpretation — le texte dit kafara (a couvert), pas « lam yu'min » (n'a pas cru). Notre traduction garde le sens etymologique de la couverture. Pour le mot aminan, Hamidullah donne « lieu sur » ce qui est correct. Pour umattiuhu, Hamidullah donne « Je lui concederai une courte jouissance » ce qui est tres proche de notre « Je lui accorderai jouissance peu ». La difference principale est dans kafara : nous gardons « a couvert » (sens etymologique premier) la ou les traductions courantes donnent « mecreant » ou « ne croit pas ». Le verset oppose deux groupes : ceux qui ont cru (amana) et ceux qui ont couvert (kafara). L'opposition est plus parlante avec le sens etymologique : croire = adherer a la verite vs couvrir = dissimuler la verite.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "quand", phon: "idh", arabic: "\u0625\u0650\u0630\u0652", is_particle: true, position: 1 },
      { fr: "dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 2 },
      { fr: "Abraham", pos: "nom", phon: "ibrahimu", arabic: "\u0625\u0650\u0628\u0652\u0631\u064e\u0670\u0647\u0650\u06e7\u0645\u064f", word_key: "abr", is_particle: false, sense_retenu: "Abraham", position: 3 },
      { fr: "Seigneur", pos: "nom", phon: "rabbi", arabic: "\u0631\u064e\u0628\u0651\u0650", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 4 },
      { fr: "fais", pos: "verbe", phon: "ij'al", arabic: "\u0671\u062c\u0652\u0639\u064e\u0644\u0652", word_key: "jel", is_particle: false, sense_retenu: "faire", position: 5 },
      { fr: "ceci", pos: "nom", phon: "hadha", arabic: "\u0647\u064e\u0640\u0670\u0630\u064e\u0627", word_key: "hdh", is_particle: false, sense_retenu: "ceci", position: 6 },
      { fr: "une cite", pos: "nom", phon: "baladan", arabic: "\u0628\u064e\u0644\u064e\u062f\u064b\u0627", word_key: "bld", is_particle: false, sense_retenu: "cite", position: 7 },
      { fr: "sure", pos: "adjectif", phon: "aminan", arabic: "\u0621\u064e\u0627\u0645\u0650\u0646\u064b\u0627", word_key: "amn", is_particle: false, sense_retenu: "sur", position: 8 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 9 },
      { fr: "nourris", pos: "verbe", phon: "urzuq", arabic: "\u0671\u0631\u0652\u0632\u064f\u0642\u0652", word_key: "rzq", is_particle: false, sense_retenu: "pourvoir", position: 10 },
      { fr: "ses habitants", pos: "nom", phon: "ahlahu", arabic: "\u0623\u064e\u0647\u0652\u0644\u064e\u0647\u064f\u06e5", word_key: "ahl", is_particle: false, sense_retenu: "gens", position: 11 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 12 },
      { fr: "les fruits", pos: "nom", phon: "ath-thamarati", arabic: "\u0671\u0644\u062b\u0651\u064e\u0645\u064e\u0631\u064e\u0670\u062a\u0650", word_key: "thmr", is_particle: false, sense_retenu: "fruits", position: 13 },
      { fr: "ceux qui", phon: "man", arabic: "\u0645\u064e\u0646\u0652", is_particle: true, position: 14 },
      { fr: "a cru", pos: "verbe", phon: "amana", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u064e", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 15 },
      { fr: "d'entre eux", phon: "minhum", arabic: "\u0645\u0650\u0646\u0652\u0647\u064f\u0645", is_particle: true, position: 16 },
      { fr: "en", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 17 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 18 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 19 },
      { fr: "le Jour", pos: "nom", phon: "al-yawmi", arabic: "\u0671\u0644\u0652\u064a\u064e\u0648\u0652\u0645\u0650", word_key: "ywm", is_particle: false, sense_retenu: "jour", position: 20 },
      { fr: "dernier", pos: "nom", phon: "al-akhiri", arabic: "\u0671\u0644\u0652\u0640\u064e\u0654\u0627\u062e\u0650\u0631\u0650", word_key: "axr", is_particle: false, sense_retenu: "dernier", position: 21 },
      { fr: "Il dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 22 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 23 },
      { fr: "quiconque", phon: "man", arabic: "\u0645\u064e\u0646", is_particle: true, position: 24 },
      { fr: "a couvert", pos: "verbe", phon: "kafara", arabic: "\u0643\u064e\u0641\u064e\u0631\u064e", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 25 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 26 },
      { fr: "Je lui accorderai jouissance", pos: "verbe", phon: "umattiuhu", arabic: "\u0623\u064f\u0645\u064e\u062a\u0651\u0650\u0639\u064f\u0647\u064f\u06e5", word_key: "mta", is_particle: false, sense_retenu: "faire jouir", position: 27 },
      { fr: "peu", pos: "adjectif", phon: "qalilan", arabic: "\u0642\u064e\u0644\u0650\u064a\u0644\u064b\u0627", word_key: "qll", is_particle: false, sense_retenu: "peu", position: 28 },
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", is_particle: true, position: 29 },
      { fr: "Je le contraindrai", pos: "verbe", phon: "adtarruhu", arabic: "\u0623\u064e\u0636\u0652\u0637\u064e\u0631\u0651\u064f\u0647\u064f\u06e5\u0653", word_key: "drr", is_particle: false, sense_retenu: "contraindre", position: 30 },
      { fr: "vers", phon: "ila", arabic: "\u0625\u0650\u0644\u064e\u0649\u0670", is_particle: true, position: 31 },
      { fr: "le chatiment", pos: "nom", phon: "adhabi", arabic: "\u0639\u064e\u0630\u064e\u0627\u0628\u0650", word_key: "edb", is_particle: false, sense_retenu: "chatiment", position: 32 },
      { fr: "du Feu", pos: "nom", phon: "an-nari", arabic: "\u0671\u0644\u0646\u0651\u064e\u0627\u0631\u0650", word_key: "nwr", is_particle: false, sense_retenu: "feu", position: 33 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 34 },
      { fr: "quelle mauvaise", pos: "adjectif", phon: "bi'sa", arabic: "\u0628\u0650\u0626\u0652\u0633\u064e", word_key: "bas", is_particle: false, sense_retenu: "quel mauvais", position: 35 },
      { fr: "destination", pos: "nom", phon: "al-masiru", arabic: "\u0671\u0644\u0652\u0645\u064e\u0635\u0650\u064a\u0631\u064f", word_key: "syr", is_particle: false, sense_retenu: "destination", position: 36 }
    ],
    words: [
      // qwl pos=2
      {
        word_key: "qwl", position: 2, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qala est un accompli 3MS de la racine q-w-l. Le Lane's donne : dire, enoncer, prononcer une parole. L'accompli marque un evenement passe — Abraham a prononce cette invocation. Le contexte est une parole adressee a Dieu (rabbi, mon Seigneur). Le verbe qala introduit le discours direct — ce qui suit est la parole exacte d'Abraham. La distinction avec l'opinion (nul) est claire : il s'agit d'une parole prononcee, pas d'une reflexion interieure.",
              axe1_verset: "Le verbe qala ouvre et structure le verset en deux parties : la parole d'Abraham (qala Ibrahim) et la reponse de Dieu (qala). Le champ lexical du verset est celui de l'invocation et de la reponse — dire est l'acte fondateur de l'echange entre le serviteur et son Seigneur. Abraham dit une demande, Dieu dit une reponse. Le verset est un dialogue rapporte entre deux interlocuteurs de statuts differents.",
              axe2_voisins: "Le verset 124 rapportait un autre dialogue : « quand son Seigneur eprouva Abraham par des paroles ». Le verset 125 mentionnait la fondation de la Maison. Le verset 126 continue avec une nouvelle parole d'Abraham — une invocation pour la cite. Les versets 124-129 forment un ensemble de dialogues entre Abraham et son Seigneur, ou chaque parole marque une etape de la mission.",
              axe3_sourate: "La racine q-w-l est une des plus frequentes de la sourate al-Baqarah. Les versets 124-129 concentrent plusieurs occurrences de qala dans les dialogues d'Abraham. La sourate rapporte de nombreux dialogues entre Dieu et Ses serviteurs — chaque qala introduit un acte de parole qui fait avancer le recit.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. Le schema « wa-idh qala Ibrahim » (et quand Abraham dit) apparait en 2:126, 2:127, 2:128, 2:260, 14:35. Le Coran rapporte les paroles d'Abraham comme modeles d'invocation et de soumission. Chaque parole d'Abraham est une lecon pour la communaute.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'outil premier de la mission. Abraham parle a son Seigneur — il invoque, il demande, il soumet. Le khalifa doit utiliser la parole pour invoquer Dieu, transmettre la verite et demander les moyens de sa mission. La parole d'Abraham est un modele de la parole du khalifa."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion est hors sujet — le verbe qala introduit un discours direct prononce, pas une reflexion interieure."
            },
            "Sens isolé/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: "Le sens de puissance est hors sujet — le contexte est un acte de parole, pas une force."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: "Le sens de troupeau est hors sujet — le verbe qala est un verbe de parole."
            }
          }
        }
      },
      // rbb pos=4
      {
        word_key: "rbb", position: 4, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le mot rabbi est un nom masculin singulier au genitif avec pronom suffixe 1S de la racine r-b-b. Le Lane's donne : seigneur, maitre, celui qui eleve et entretient. Le Rabb est celui qui prend en charge l'elevation et l'entretien d'une creature — il la nourrit, la fait grandir, la guide. Le possessif « mon » (ya implicite) cree un lien intime entre Abraham et son Seigneur. Abraham s'adresse a Celui qui l'a eleve. La distinction avec la croissance (probable) est que le Seigneur est l'agent de la croissance, pas la croissance elle-meme.",
              axe1_verset: "Le mot rabbi ouvre l'invocation d'Abraham. Le champ lexical du verset (fais, cite, sure, nourris, fruits) montre qu'Abraham demande a son Seigneur de pourvoir — securite et subsistance. Le Seigneur est invoque dans Sa fonction de pourvoyeur et de protecteur. L'adresse « mon Seigneur » est intime — Abraham ne dit pas « Dieu » mais « celui qui m'eleve ». Le verset montre le Rabb dans Sa fonction nourriciere.",
              axe2_voisins: "Le verset 124 utilisait « rabbuhu » (son Seigneur) pour l'epreuve d'Abraham. Le verset 125 contenait la promesse de purifier la Maison. Le verset 126 montre Abraham s'adressant a son Seigneur pour demander securite et subsistance. La relation entre Abraham et son Rabb progresse : epreuve (124) → mission (125) → invocation (126).",
              axe3_sourate: "La racine r-b-b est une racine structurante de la sourate al-Baqarah. En 2:21, « adorez votre Seigneur ». En 2:30, « quand ton Seigneur dit aux anges ». En 2:124, « quand son Seigneur eprouva Abraham ». La sourate presente le Rabb comme Celui qui prend en charge toute la creation — Il cree, eprouve, guide et pourvoit.",
              axe4_coherence: "La racine r-b-b apparait environ 980 fois dans le Coran. Le mot Rabb est l'un des noms divins les plus frequents. L'invocation « rabbi » (mon Seigneur) est le mode d'adresse privilegie des prophetes — Abraham (2:126), Moussa (28:16), Nuh (71:26). Le Rabb est invoque dans les moments de besoin car Il est Celui qui eleve et pourvoit.",
              axe5_frequence: "Pour la mission du khalifa, le Rabb est le mandant de la mission. Le Seigneur est Celui qui eleve le khalifa et le prepare a sa mission. Abraham invoque son Seigneur pour les moyens de la mission — securite et subsistance. Le khalifa doit reconnaitre son Rabb comme source de tout ce dont il a besoin pour sa mission."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens de croissance est le sens premier de r-b-b — faire grandir, augmenter. La distinction philosophique avec la seigneurie est que la croissance est le processus (faire grandir) tandis que la seigneurie est le statut de celui qui fait grandir (le maitre qui eleve). Le mot rabbi designe le Seigneur comme agent de la croissance, pas la croissance elle-meme. Le contexte est une invocation — Abraham s'adresse a une personne (son Seigneur), pas a un processus.",
              axe1_verset: "Le mot rabbi pourrait theoriquement porter le sens de croissance — celui qui fait croitre. Mais le contexte est une invocation personnelle (« mon Seigneur ») suivie d'une demande. Abraham s'adresse a une personne, pas a un processus. Le sens de seigneur est plus coherent avec l'adresse vocative.",
              axe2_voisins: "Le verset 124 utilisait « rabbuhu » dans le contexte d'une epreuve. L'epreuve est un acte personnel d'un agent — pas un processus impersonnel. Le sens de seigneur est confirme par le contexte des versets voisins.",
              axe3_sourate: "La sourate al-Baqarah utilise Rabb principalement au sens de Seigneur personnel. En 2:21, « votre Seigneur ». En 2:30, « ton Seigneur ». Le sens de croissance apparait dans d'autres contextes (2:276, Dieu fait croitre les aumones).",
              axe4_coherence: "Le Coran utilise la racine r-b-b dans les deux sens selon le contexte. Quand le mot est au vocatif ou au possessif (rabbi, rabbuna), il designe le Seigneur. Quand il apparait sous forme verbale (rabba, yurbi), il designe la croissance.",
              axe5_frequence: "La croissance est un outil du Seigneur — mais dans ce verset, c'est le Seigneur comme personne qui est invoque, pas le processus de croissance."
            },
            "Éducation/Accompagnement": {
              status: "probable",
              senses: ["elever un enfant", "eduquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education est un sens important de r-b-b — elever, eduquer, former. La distinction philosophique avec la seigneurie est que l'education est l'action (elever) tandis que la seigneurie est le statut (celui qui eleve). Le mot rabbi designe la personne qui a ce statut. Le contexte est une invocation — Abraham s'adresse a la personne, pas a l'action.",
              axe1_verset: "Le mot rabbi pourrait porter le sens d'educateur — celui qui eleve. L'invocation « mon Seigneur, fais de ceci une cite sure » montre que le Rabb est invoque pour agir — pas pour eduquer dans ce contexte precis. Le sens de seigneur englobe la capacite d'eduquer mais ne s'y reduit pas.",
              axe2_voisins: "Le verset 124 montrait l'epreuve d'Abraham par son Seigneur — l'epreuve est une forme d'education. Le verset 129 demandera un envoye qui enseignera. Les versets voisins montrent la dimension educative du Rabb — mais le mot lui-meme designe la personne, pas l'acte d'eduquer.",
              axe3_sourate: "La sourate al-Baqarah presente le Rabb dans de multiples fonctions — createur, pourvoyeur, educateur. Le sens d'education est present en filigrane mais le mot Rabb designe la personne qui remplit toutes ces fonctions.",
              axe4_coherence: "Le Coran utilise la racine r-b-b au sens d'education dans certains contextes (26:18, « ne t'avons-nous pas eleve »). Mais quand le mot est rabbi/Rabb, c'est le titre de seigneurie qui domine.",
              axe5_frequence: "L'education est une dimension de la mission du Rabb — le Seigneur eleve et forme le khalifa. Mais dans ce verset, Abraham invoque le Rabb pour la securite et la subsistance."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette", "interet"],
              proof_ctx: "Le sens d'usure est hors sujet — le mot rabbi est un vocatif d'invocation, pas un terme commercial."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "Le sens d'essoufflement est hors sujet — le contexte est une invocation, pas une description physique."
            },
            "Sens isolé/Fixer": {
              status: "nul",
              senses: ["fixer"],
              proof_ctx: "Le sens de fixer est hors sujet — le mot rabbi designe le Seigneur."
            },
            "Sens isolé/Rassembler": {
              status: "nul",
              senses: ["rassembler"],
              proof_ctx: "Le sens de rassembler est hors sujet — le mot rabbi est un titre de seigneurie."
            },
            "Sens isolé/Groupe": {
              status: "nul",
              senses: ["groupe"],
              proof_ctx: "Le sens de groupe est hors sujet — le mot rabbi designe une personne, pas un collectif."
            },
            "Sens isolé/Confiture": {
              status: "nul",
              senses: ["confiture"],
              proof_ctx: "Le sens de confiture est hors sujet — le contexte est une invocation."
            }
          }
        }
      },
      // jel pos=5
      {
        word_key: "jel", position: 5, sense_chosen: "faire",
        analysis_axes: {
          sense_chosen: "faire",
          concept_chosen: "Action/Réalisation",
          concepts: {
            "Action/Réalisation": {
              status: "retenu",
              senses: ["faire", "rendre", "placer", "commencer a", "etablir", "creer"],
              proof_ctx: "Le verbe ij'al est un imperatif 2MS de la racine j-'-l. Le Lane's donne : faire, rendre, placer, etablir. L'imperatif est une demande — Abraham demande a son Seigneur de transformer un lieu en cite sure. Le verbe ja'ala avec deux complements (hadha + baladan) signifie « rendre ceci une cite ». C'est un verbe de transformation — le lieu n'est pas encore une cite, Abraham demande qu'il le devienne. La distinction avec la recompense (nul) est evidente : le contexte est une demande de transformation, pas une retribution.",
              axe1_verset: "Le verbe ij'al est la premiere demande d'Abraham. Le champ lexical (Seigneur, fais, cite, sure) montre une demande de transformation d'un lieu. Le verbe ij'al relie deux etats : l'etat actuel (ceci, un lieu quelconque) et l'etat souhaite (une cite sure). Abraham ne demande pas de creer ex nihilo mais de transformer. Le verset enchaine deux demandes : fais une cite sure (ij'al) puis nourris (urzuq).",
              axe2_voisins: "Le verset 125 mentionnait la Maison (al-Bayt) comme lieu de retour et de securite. Le verset 126 enchaine avec la demande de faire de ce lieu une cite sure. La progression est : la Maison est fondee (125) → Abraham demande que le lieu entier devienne une cite sure (126). Le verbe ij'al marque le passage de la Maison au territoire.",
              axe3_sourate: "La racine j-'-l apparait frequemment dans la sourate al-Baqarah. En 2:22, « Celui qui a fait pour vous la terre un lit ». En 2:143, « Nous avons fait de vous une communaute mediane ». La sourate utilise ja'ala pour les actes divins de mise en place — Dieu fait, etablit, dispose. Le verset 126 montre Abraham demandant a Dieu d'exercer cette fonction sur un lieu precis.",
              axe4_coherence: "La racine j-'-l apparait environ 340 fois dans le Coran. En 14:35, Abraham fait la meme demande : « rabbi ij'al hadha al-balada aminan » (Seigneur, fais de cette cite un lieu sur). La repetition dans deux sourates differentes montre l'importance de cette invocation. Le verbe ja'ala est le verbe de la transformation divine.",
              axe5_frequence: "Pour la mission du khalifa, le verbe ja'ala montre que Dieu transforme les realites. Le khalifa demande a Dieu de transformer son environnement — securite et subsistance. La demande de transformation est un acte de foi — Abraham reconnait que seul Dieu peut transformer un lieu en cite sure."
            },
            "Sens isolé/Récompense": {
              status: "nul",
              senses: ["recompense"],
              proof_ctx: "Le sens de recompense est hors sujet — le verbe ij'al est un imperatif de transformation, pas de retribution."
            }
          }
        }
      },
      // bld pos=7
      {
        word_key: "bld", position: 7, sense_chosen: "cite",
        analysis_axes: {
          sense_chosen: "cite",
          concept_chosen: "Territoire/Cité",
          concepts: {
            "Territoire/Cité": {
              status: "retenu",
              senses: ["pays", "cite", "contree"],
              proof_ctx: "Le nom baladan est un nom masculin singulier indefini accusatif de la racine b-l-d. Le Lane's donne : pays, cite, contree, terre habitee. Le balad est un territoire delimite ou vivent des gens. L'indefini (baladan sans article) marque que le lieu n'est pas encore reconnu comme cite — Abraham demande qu'il le devienne. Le verset 126 utilise baladan (indefini) alors que le verset 14:35 utilise al-balada (defini) — en 2:126, la cite n'existe pas encore, en 14:35, elle existe deja.",
              axe1_verset: "Le mot baladan est le complement du verbe ij'al — Abraham demande que ce lieu devienne une cite. Le champ lexical (fais, ceci, cite, sure) montre la transformation demandee. Le mot est indefini car la cite n'existe pas encore comme telle. Le verset associe cite et securite (aminan) — une cite n'est pas seulement un lieu habite mais un lieu sur.",
              axe2_voisins: "Le verset 125 mentionnait la Maison (al-Bayt). Le verset 126 elargit la demande de la Maison a la cite entiere. La progression est : purifier la Maison (125) → securiser la cite (126). Abraham pense a l'ensemble — la Maison est le centre, la cite est l'espace de vie.",
              axe3_sourate: "La racine b-l-d apparait dans la sourate al-Baqarah en 2:126. Le mot balad designe la Mecque — le lieu ou Abraham fonde la Maison. La sourate presente la Mecque comme un lieu choisi par Dieu et transforme par la demande d'Abraham.",
              axe4_coherence: "La racine b-l-d apparait environ 19 fois dans le Coran. En 14:35, « rabbi ij'al hadha al-balada aminan » — la meme demande avec l'article defini (la cite existe deja). En 90:1, « par cette cite » (la Mecque). Le Coran associe le mot balad a la Mecque dans les invocations d'Abraham.",
              axe5_frequence: "Pour la mission du khalifa, la cite est l'espace de la mission. Le khalifa a besoin d'un territoire sur pour accomplir sa mission. Abraham demande les conditions de base de la mission — un lieu habitable et securise. La cite est le cadre materiel de la mission spirituelle."
            }
          }
        }
      },
      // amn pos=8
      {
        word_key: "amn", position: 8, sense_chosen: "sur",
        analysis_axes: {
          sense_chosen: "sur",
          concept_chosen: "Sécurité/Confiance",
          concepts: {
            "Sécurité/Confiance": {
              status: "retenu",
              senses: ["etre en securite", "se sentir en securite", "faire confiance", "confier", "fidele", "lieu sur"],
              proof_ctx: "Le mot aminan est un participe actif masculin singulier indefini accusatif de la racine a-m-n. Le Lane's donne : sur, en securite, ou l'on se sent en securite. Le participe actif qualifie le lieu — la cite est elle-meme sure, elle procure la securite a ses habitants. L'indefini renforce le caractere qualitatif — Abraham demande que la cite soit fondamentalement sure, pas juste protegee ponctuellement. La distinction avec la foi (dans la meme racine) est claire : aminan (forme I) qualifie l'etat de securite du lieu, amana (forme IV) qualifie l'acte de croire des personnes.",
              axe1_verset: "Le mot aminan qualifie la cite demandee par Abraham. Le champ lexical (cite, sure, nourris, fruits) montre que la securite est la premiere condition de la vie — avant la subsistance, la securite. Le verset etablit une hierarchie des besoins : securite (aminan) puis nourriture (urzuq). Un lieu sur est un lieu ou l'on peut vivre, travailler, adorer.",
              axe2_voisins: "Le verset 125 mentionnait la Maison comme lieu de retour et de securite (amnan). Le verset 126 reprend le meme theme avec aminan — la securite s'etend de la Maison a la cite. La racine a-m-n lie les deux versets : la Maison est un lieu de securite (125), la cite doit l'etre aussi (126).",
              axe3_sourate: "La racine a-m-n apparait dans la sourate al-Baqarah sous ses deux sens principaux : securite (2:125, 2:126) et foi (2:3, 2:8, 2:13). La sourate distingue clairement les deux usages — la securite qualifie les lieux, la foi qualifie les personnes.",
              axe4_coherence: "En 14:35, Abraham fait la meme demande : « fais de cette cite un lieu sur ». En 27:89 et 28:57, le Sanctuaire est decrit comme un « lieu sur » (haram aminan). Le Coran associe la securite au Sanctuaire de la Mecque comme une constante — la securite est un attribut divin du lieu.",
              axe5_frequence: "Pour la mission du khalifa, la securite est une condition de la mission. Le khalifa ne peut accomplir sa mission dans un lieu dangereux. Abraham demande la securite comme prealable — sans securite, pas de subsistance, pas d'adoration, pas de mission. La securite est le fondement materiel de la mission spirituelle."
            },
            "Foi/Adhésion": {
              status: "probable",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "Le sens de foi est un sens majeur de a-m-n — croire, avoir la foi, adherer. La distinction philosophique avec la securite est que la foi est une adhesion interieure (croire en quelque chose) tandis que la securite est un etat exterieur (etre a l'abri du danger). Le mot aminan est un participe actif de la forme I qui qualifie le lieu — le lieu est sur. Ce n'est pas la forme IV (amana) qui qualifie la personne comme croyante. Le contexte est la qualification d'un lieu, pas d'une personne.",
              axe1_verset: "Le mot aminan pourrait theoriquement porter le sens de croyant — un lieu croyant. Mais cette lecture est artificielle. Le verset parle d'un lieu (baladan) qualifie par aminan — un lieu ne croit pas, un lieu est sur ou dangereux. Le sens de securite est le seul coherent pour qualifier un lieu.",
              axe2_voisins: "Le verset 125 utilisait amnan pour le lieu de securite. Le parallelisme confirme que le sens est la securite du lieu, pas la foi.",
              axe3_sourate: "La sourate utilise la forme IV (amana) pour la foi et la forme I participiale (amin) pour la securite. Les deux usages sont clairement distincts dans le texte.",
              axe4_coherence: "Le Coran utilise aminan pour qualifier les lieux (14:35, 28:57) et amana pour qualifier les personnes. La distinction est constante.",
              axe5_frequence: "La foi est un acte humain, la securite est un etat du lieu. Le khalifa a besoin des deux — la securite du lieu pour pratiquer sa foi."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["proteger", "accorder la securite"],
              proof_ctx: "Le sens de garantie est un sens derive — accorder la securite a quelqu'un. Le mot aminan qualifie le lieu comme etant sur, pas l'acte d'accorder la securite."
            },
            "Sens isolé/Amen": {
              status: "nul",
              senses: ["amen"],
              proof_ctx: "Le sens d'amen est hors sujet — le mot aminan qualifie un lieu, pas une formule de priere."
            }
          }
        }
      },
      // rzq pos=10
      {
        word_key: "rzq", position: 10, sense_chosen: "pourvoir",
        analysis_axes: {
          sense_chosen: "pourvoir",
          concept_chosen: "Subsistance/Provision",
          concepts: {
            "Subsistance/Provision": {
              status: "retenu",
              senses: ["pourvoir", "nourrir", "subsistance", "moyens de vivre", "part"],
              proof_ctx: "Le verbe urzuq est un imperatif 2MS de la racine r-z-q. Le Lane's donne : pourvoir, nourrir, accorder la subsistance. L'imperatif est une demande — Abraham demande a son Seigneur de nourrir les habitants. Le verbe razaqa est un acte de generosite divine — Dieu pourvoit a la subsistance de Ses creatures. Le complement est « ses habitants de fruits » — la subsistance prend la forme de fruits. La distinction avec la gratitude (nul) est claire : le contexte est l'acte de pourvoir, pas la reconnaissance.",
              axe1_verset: "Le verbe urzuq est la deuxieme demande d'Abraham apres la securite. Le champ lexical (nourris, habitants, fruits) montre une demande concrete — la subsistance materielle. Le verset etablit une hierarchie : securite (aminan) puis subsistance (urzuq). Abraham demande les deux conditions de base de la vie. La subsistance est liee aux fruits (thamarati) — les produits de la terre.",
              axe2_voisins: "Le verset 125 parlait de la purification de la Maison. Le verset 126 passe de la dimension spirituelle (purifier) a la dimension materielle (nourrir). Les versets 125-126 montrent que la mission d'Abraham englobe le spirituel et le materiel. Le verset 127 reviendra au spirituel avec la construction de la Maison.",
              axe3_sourate: "La racine r-z-q apparait dans la sourate al-Baqarah dans le contexte de la subsistance divine. En 2:3, « de ce que Nous leur avons attribue ils depensent ». En 2:22, « Il a fait descendre du ciel une eau par laquelle Il a fait sortir des fruits comme subsistance pour vous ». La sourate presente Dieu comme le Pourvoyeur supreme.",
              axe4_coherence: "La racine r-z-q apparait environ 123 fois dans le Coran. En 14:37, Abraham demande aussi la subsistance pour les habitants de la Mecque : « nourris-les de fruits ». La demande de subsistance est un theme recurrent des invocations d'Abraham. Le Coran montre que la subsistance est un don divin, pas une acquisition humaine.",
              axe5_frequence: "Pour la mission du khalifa, la subsistance est un moyen de la mission. Le khalifa a besoin de subsistance pour vivre et accomplir sa mission. Abraham demande la subsistance pour les habitants — pas pour lui seul mais pour la communaute. La mission du khalifa inclut de veiller a la subsistance de sa communaute."
            },
            "Sens isolé/Gratitude": {
              status: "nul",
              senses: ["gratitude pour la subsistance"],
              proof_ctx: "Le sens de gratitude est hors sujet — le verbe urzuq est un imperatif de provision, pas de reconnaissance."
            }
          }
        }
      },
      // ahl pos=11
      {
        word_key: "ahl", position: 11, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Famille/Communauté",
          concepts: {
            "Famille/Communauté": {
              status: "retenu",
              senses: ["famille", "gens de", "peuple"],
              proof_ctx: "Le nom ahlahu est un nom masculin singulier accusatif de la racine a-h-l avec pronom suffixe 3MS. Le Lane's donne : famille, gens, habitants, peuple. Le mot ahl designe les gens qui appartiennent a un lieu ou a un groupe. Le pronom « hu » renvoie a la cite (balad) — les habitants de cette cite. Le verset restreint ensuite la demande : « ceux d'entre eux qui ont cru ». L'ahl est le groupe entier, la restriction porte sur les croyants parmi eux. La distinction avec le merite (nul) est claire : le contexte est l'identite des habitants, pas leur merite.",
              axe1_verset: "Le mot ahlahu designe les beneficiaires de la subsistance. Le champ lexical (nourris, habitants, fruits) montre que la demande d'Abraham porte sur les gens du lieu. Le pronom « hu » lie les habitants a la cite — ils sont les gens de cette cite. Le verset restreint ensuite : pas tous les habitants mais ceux qui ont cru. Abraham pense d'abord aux habitants, puis precise sa demande.",
              axe2_voisins: "Le verset 125 mentionnait les gens qui circulent autour de la Maison. Le verset 126 parle des habitants de la cite. La progression est : les visiteurs (125) → les habitants (126). Abraham pense a la fois aux pelerins et aux residents permanents.",
              axe3_sourate: "La racine a-h-l apparait dans la sourate al-Baqarah dans l'expression « ahl al-kitab » (les gens du Livre) — 2:105, 2:109. Le mot ahl designe l'appartenance a un groupe — les gens du Livre, les gens de la cite. La sourate utilise ahl pour definir les communautes par leur rattachement.",
              axe4_coherence: "La racine a-h-l apparait environ 128 fois dans le Coran. En 14:37, Abraham parle des gens du lieu sacre. Le mot ahl lie les personnes a leur territoire ou a leur ecrit — les gens du Livre, les gens de la cite. Le Coran definit les communautes par leur rattachement a un lieu ou a un texte.",
              axe5_frequence: "Pour la mission du khalifa, les gens de la cite sont la communaute de la mission. Le khalifa est responsable de sa communaute — il doit veiller a sa securite et a sa subsistance. Abraham demande pour les gens de sa cite, pas pour lui seul. La mission est communautaire."
            },
            "Mérite/Aptitude": {
              status: "nul",
              senses: ["digne de"],
              proof_ctx: "Le sens de merite est hors sujet — le mot ahlahu designe les habitants de la cite, pas des gens dignes de quelque chose."
            }
          }
        }
      },
      // thmr pos=13
      {
        word_key: "thmr", position: 13, sense_chosen: "fruits",
        analysis_axes: {
          sense_chosen: "fruits",
          concept_chosen: "Fruit/Produit",
          concepts: {
            "Fruit/Produit": {
              status: "retenu",
              senses: ["fruit", "recolte", "richesse", "produire"],
              proof_ctx: "Le nom ath-thamarati est un nom feminin pluriel defini au genitif de la racine th-m-r. Le Lane's donne : fruits, recoltes, produits de la terre. L'article defini (al-) marque les fruits en general — tous les types de fruits. Le pluriel (thamarati) indique la diversite et l'abondance. La preposition « min » (de) introduit la matiere — nourris-les DE fruits. Le fruit est le produit de la terre que Dieu fait croitre — il represente la subsistance naturelle accordee par Dieu.",
              axe1_verset: "Le mot ath-thamarati precise la nature de la subsistance demandee par Abraham. Le champ lexical (nourris, habitants, fruits) montre une demande concrete. Les fruits representent la subsistance materielle — la nourriture. Le verset associe la subsistance a la securite (cite sure + fruits) comme les deux piliers de la vie.",
              axe2_voisins: "Le verset 125 parlait de la Maison comme lieu sacre. Le verset 126 passe au materiel — la nourriture. Le verset 22 de la sourate mentionnait les fruits comme subsistance divine : « Il a fait descendre du ciel une eau par laquelle Il a fait sortir des fruits comme subsistance ». La demande d'Abraham s'inscrit dans le schema coranique de la subsistance par les fruits.",
              axe3_sourate: "La racine th-m-r apparait dans la sourate al-Baqarah en 2:22 et 2:126. En 2:22, les fruits sont le resultat de la pluie divine. En 2:126, Abraham demande les fruits pour les habitants. La sourate presente les fruits comme un don de Dieu a travers la nature.",
              axe4_coherence: "La racine th-m-r apparait environ 24 fois dans le Coran. En 14:37, Abraham demande aussi les fruits pour les gens du lieu sacre. En 28:57, les gens de la Mecque recoivent les fruits de toute chose. Le Coran montre que la Mecque, malgre son aridite, recoit les fruits comme un don divin special.",
              axe5_frequence: "Pour la mission du khalifa, les fruits representent les moyens materiels de la mission. Le khalifa a besoin de subsistance pour vivre et servir. Abraham demande les fruits comme moyen concret de soutenir la communaute. Les fruits sont le produit de la generosite divine."
            }
          }
        }
      },
      // amn pos=15 (2eme occurrence — croire)
      {
        word_key: "amn", position: 15, sense_chosen: "croire",
        analysis_axes: {
          sense_chosen: "croire",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "Le verbe amana est un accompli 3MS de la racine a-m-n (forme IV). Le Lane's donne : croire, avoir la foi, adherer a la verite. La forme IV (af'ala) porte le sens de rendre sur — celui qui croit rend son coeur sur en l'ancrant dans la verite. L'accompli marque un etat acheve — la foi est acquise. Le verbe est precede du pronom relatif « man » (celui qui) et suivi de « bi-Allahi wa al-yawmi al-akhiri » (en Dieu et au Jour dernier). La distinction avec la securite (en pos 8) est claire : ici amana est la forme IV (croire), la-bas aminan etait un participe de la forme I (sur).",
              axe1_verset: "Le verbe amana introduce la restriction dans la demande d'Abraham. Il ne demande pas la subsistance pour tous les habitants mais pour ceux qui ont cru. Le champ lexical (cru, Dieu, Jour dernier) montre les objets de la foi — la foi en Dieu et au Jour dernier sont les deux piliers. Le verset oppose ensuite ceux qui ont cru (amana) et ceux qui ont couvert (kafara).",
              axe2_voisins: "Le verset 125 ne mentionnait pas la condition de la foi. Le verset 126 ajoute cette condition — la subsistance est liee a la foi. Mais la reponse divine (qala) elargit : meme celui qui a couvert recevra une jouissance courte. La restriction d'Abraham est corrigee par la generosite divine.",
              axe3_sourate: "La racine a-m-n au sens de foi est omnipresente dans la sourate al-Baqarah. En 2:3, « ceux qui croient au mystere ». En 2:8, « parmi les gens il y a ceux qui disent nous croyons en Dieu et au Jour dernier ». La foi en Dieu et au Jour dernier est le critere fondamental de la sourate.",
              axe4_coherence: "L'expression « amana bi-Allahi wa al-yawmi al-akhiri » (croire en Dieu et au Jour dernier) apparait environ 20 fois dans le Coran. Elle designe les deux piliers de la foi — le debut (Dieu comme source) et la fin (le Jour comme destination). Le Coran lie ces deux croyances comme un tout indivisible.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le fondement de la mission. Le khalifa croit en Dieu et au Jour dernier — cette foi oriente sa mission. Abraham restreint sa demande aux croyants — mais Dieu elargit, montrant que la generosite divine depasse les categories humaines."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["etre en securite", "se sentir en securite", "faire confiance", "confier", "fidele", "lieu sur"],
              proof_ctx: "Le sens de securite est un sens premier de a-m-n. La distinction philosophique avec la foi est que la securite est un etat physique (etre a l'abri) tandis que la foi est un etat spirituel (adherer a la verite). Le verbe amana (forme IV) porte le sens de la foi — rendre son coeur sur en l'ancrant dans la verite. Le contexte est « man amana minhum bi-Allahi » — celui qui a cru en Dieu. La preposition « bi » (en) confirme le sens de foi — on croit EN quelqu'un, on n'est pas en securite EN quelqu'un.",
              axe1_verset: "Le verbe amana pourrait theoriquement porter le sens de securite — se sentir en securite. Mais le complement « bi-Allahi wa al-yawmi al-akhiri » impose le sens de foi — on croit en Dieu, on ne se sent pas en securite en Dieu (cette formulation n'existe pas en arabe).",
              axe2_voisins: "Le verset 125 utilisait amnan pour la securite du lieu. Le verset 126 utilise aminan pour le lieu (securite) et amana pour les personnes (foi). Les deux sens coexistent dans les deux versets avec des formes differentes.",
              axe3_sourate: "La sourate utilise la forme IV (amana) systematiquement pour la foi — 2:3, 2:8, 2:13, 2:62, 2:126. La distinction formelle est constante.",
              axe4_coherence: "Le Coran distingue clairement les formes : amina (forme I) = etre en securite, amana (forme IV) = croire. Les deux formes partagent la meme racine mais le sens est determine par la forme verbale.",
              axe5_frequence: "La securite physique et la foi spirituelle sont les deux faces de la racine a-m-n. Le khalifa a besoin des deux pour sa mission."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["proteger", "accorder la securite"],
              proof_ctx: "Le sens de garantie est hors sujet — le verbe amana ici est la forme IV (croire), pas un acte de protection."
            },
            "Sens isolé/Amen": {
              status: "nul",
              senses: ["amen"],
              proof_ctx: "Le sens d'amen est hors sujet — le verbe amana est un accompli 3MS de la foi."
            }
          }
        }
      },
      // alh pos=18
      {
        word_key: "alh", position: 18, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif. Le Lane's donne : Dieu, la divinite unique. Ici Allah est l'objet de la foi — « ceux qui ont cru en Dieu ». Le nom est precede de la preposition « bi » (en) qui marque l'objet de la croyance. Croire en Dieu est le premier pilier de la foi.",
              axe1_verset: "Le nom Allahi est l'objet de la foi dans le verset. Le champ lexical (croire, Dieu, Jour dernier) montre les deux objets de la foi. Dieu est le premier objet — la source. Le Jour dernier est le second — la destination. Abraham restreint sa demande aux croyants en Dieu — ceux qui reconnaissent la source de la subsistance sont ceux qui la meritent selon Abraham.",
              axe2_voisins: "Le verset 125 ne mentionnait pas la foi en Dieu comme condition. Le verset 126 ajoute cette condition — mais la reponse divine l'elargit. Les versets 124-129 montrent la relation entre Abraham et Dieu — le nom Allah revient dans chaque verset de ce passage.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. La foi en Dieu (al-iman bi-Allah) est le theme central de la sourate — toute la sourate est un appel a croire en Dieu et a suivre Ses commandements.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. L'expression « amana bi-Allah » (croire en Dieu) est un refrain coranique. Le Coran presente la foi en Dieu comme la base de toute la religion — sans la foi en Dieu, rien n'a de sens.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. Croire en Dieu est le fondement de la mission du khalifa. Sans la foi en Dieu, la mission n'a pas de source ni de direction."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["adorer", "faire adorer", "se devouer au culte", "diviniser"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration. Le contexte est l'objet de la foi."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le sens de detresse est hors sujet — le mot est le nom propre Allah."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["chercher refuge", "proteger", "demeurer"],
              proof_ctx: "Le sens de refuge est hors sujet — le mot est le nom propre Allah dans un contexte de foi."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet — le mot est le nom propre Allah."
            }
          }
        }
      },
      // ywm pos=20
      {
        word_key: "ywm", position: 20, sense_chosen: "jour",
        analysis_axes: {
          sense_chosen: "jour",
          concept_chosen: "Temps/Période",
          concepts: {
            "Temps/Période": {
              status: "retenu",
              senses: ["jour", "journee", "temps", "periode"],
              proof_ctx: "Le nom al-yawmi est un nom masculin singulier defini au genitif de la racine y-w-m. Le Lane's donne : jour, journee, periode. L'article defini (al-) marque un jour specifique — LE Jour. Suivi de l'adjectif al-akhiri (dernier), il designe le Jour dernier — le jour de la resurrection et du jugement. Le yawm est une unite de temps — le Jour dernier est la derniere unite temporelle de l'existence.",
              axe1_verset: "Le mot al-yawmi forme avec al-akhiri l'expression « le Jour dernier ». Le champ lexical (croire, Dieu, Jour dernier) montre les deux objets de la foi. Le Jour dernier est le terme — la destination finale. Croire au Jour dernier c'est croire que les actes auront des consequences. Le verset oppose la jouissance temporaire (qalilan) et la destination finale (al-masiru) — le Jour dernier est le moment ou tout est revele.",
              axe2_voisins: "Le verset 123 mentionnait un « jour ou aucune ame ne pourra rien pour une autre ». Le verset 126 reprend le theme du Jour avec « le Jour dernier ». Les versets voisins construisent une tension entre le present (la cite, les fruits) et le futur (le Jour dernier, le chatiment).",
              axe3_sourate: "La racine y-w-m apparait frequemment dans la sourate al-Baqarah. En 2:8, « ils disent nous croyons en Dieu et au Jour dernier ». En 2:62, « quiconque a cru en Dieu et au Jour dernier ». L'expression « al-yawm al-akhir » est un refrain de la sourate qui definit la foi complete.",
              axe4_coherence: "La racine y-w-m apparait environ 475 fois dans le Coran. L'expression « al-yawm al-akhir » apparait environ 26 fois. Le Jour dernier est un pilier de la foi coranique — il represente le moment ou la verite se manifeste pleinement et ou chacun rend des comptes.",
              axe5_frequence: "Pour la mission du khalifa, le Jour dernier est l'horizon de la mission. Le khalifa travaille en sachant qu'un Jour viendra ou tout sera juge. Cette conscience du Jour dernier donne un sens d'urgence et de responsabilite a la mission."
            },
            "Événement/Moment marquant": {
              status: "nul",
              senses: ["evenement", "bataille", "jour de combat", "jour marquant"],
              proof_ctx: "Le sens d'evenement ponctuel est hors sujet — le Jour dernier n'est pas un evenement historique mais le terme de l'histoire."
            }
          }
        }
      },
      // axr pos=21
      {
        word_key: "axr", position: 21, sense_chosen: "dernier",
        analysis_axes: {
          sense_chosen: "dernier",
          concept_chosen: "Postériorité/Retard",
          concepts: {
            "Postériorité/Retard": {
              status: "retenu",
              senses: ["retarder", "reporter", "reculer", "apres", "dernier", "l'au-dela", "fin"],
              proof_ctx: "Le nom al-akhiri est un adjectif masculin singulier defini au genitif de la racine a-kh-r. Le Lane's donne : dernier, final, ultime, posterieur. L'adjectif qualifie le Jour (al-yawm) — le Jour dernier est le jour qui vient apres tous les autres, le terme de la sequence temporelle. L'article defini marque un jour specifique et connu — le Jour dernier par excellence. La distinction avec le retard est que le mot est ici un adjectif qualificatif, pas un verbe d'action.",
              axe1_verset: "Le mot al-akhiri qualifie le Jour — le dernier Jour. Le champ lexical (croire, Dieu, Jour dernier) montre que la foi a deux objets : l'origine (Dieu) et la fin (le Jour dernier). Le verset construit une perspective temporelle — la cite est dans le present, le Jour dernier est dans le futur. Abraham demande pour le present (cite sure, fruits) en pensant au futur (ceux qui croient au Jour dernier).",
              axe2_voisins: "Le verset 123 mentionnait un jour futur. Le verset 126 reprend ce theme avec le Jour dernier. La fin du verset mentionne le chatiment du Feu et la mauvaise destination — ces realites sont liees au Jour dernier. Les versets voisins construisent une tension entre le present terrestre et l'au-dela.",
              axe3_sourate: "La racine a-kh-r apparait dans la sourate al-Baqarah sous forme d'adjectif (al-akhir, le dernier) et de nom (al-akhira, l'au-dela). En 2:4, « et a l'au-dela ils sont certains ». En 2:86, « ceux qui ont achete la vie d'ici-bas au prix de l'au-dela ». La sourate oppose constamment ce monde (dunya) et l'au-dela (akhira).",
              axe4_coherence: "La racine a-kh-r apparait environ 250 fois dans le Coran. L'expression « al-yawm al-akhir » est un pilier de la foi. Le Coran presente le Jour dernier comme le moment de la verite absolue — tout ce qui etait cache sera revele, tout ce qui etait temporaire prendra fin.",
              axe5_frequence: "Pour la mission du khalifa, le Jour dernier est l'echeance de la mission. Le khalifa sait que sa mission a un terme — le Jour dernier est le moment ou la mission sera evaluee. Cette perspective donne urgence et serieux a chaque acte du khalifa."
            },
            "Sens isolé/Arrière": {
              status: "nul",
              senses: ["arriere"],
              proof_ctx: "Le sens spatial (arriere) est hors sujet — le mot al-akhiri qualifie le Jour comme dernier dans le temps, pas comme un lieu."
            },
            "Sens isolé/Derrière": {
              status: "nul",
              senses: ["derriere"],
              proof_ctx: "Le sens de derriere est hors sujet — le contexte est temporel (le dernier Jour), pas spatial."
            }
          }
        }
      },
      // qwl pos=22 (2eme occurrence — reponse divine)
      {
        word_key: "qwl", position: 22, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Deuxieme occurrence du verbe qala dans le verset — cette fois c'est Dieu qui parle. Le sujet implicite est Dieu (le Seigneur invoque par Abraham). L'accompli 3MS marque que la reponse divine a eu lieu. Le verbe qala introduit la reponse divine au discours d'Abraham. Memes analyses formelles que pour la premiere occurrence en position 2.",
              axe1_verset: "Le verbe qala marque le tournant du verset — la parole passe d'Abraham a Dieu. La reponse divine elargit la demande d'Abraham : Abraham demandait pour les croyants, Dieu repond en incluant aussi les non-croyants (mais avec une jouissance temporaire). Le champ lexical change : on passe de la demande (fais, nourris) a la decision divine (Je ferai jouir, Je contraindrai).",
              axe2_voisins: "Le verset 124 contenait aussi une reponse divine : « Il dit : Mon engagement n'inclut pas les injustes ». Le verset 126 reprend ce schema — la reponse divine apporte une nuance a la demande d'Abraham. Dans les deux cas, Dieu corrige ou complete la perspective d'Abraham.",
              axe3_sourate: "Les dialogues entre Dieu et Ses serviteurs sont un trait structurant de la sourate al-Baqarah. En 2:30, Dieu dit aux anges. En 2:31, Il dit encore. En 2:124, Il dit a Abraham. La sourate est riche en paroles divines qui orientent, corrigent et enseignent.",
              axe4_coherence: "Le Coran rapporte frequemment les paroles de Dieu par le verbe qala. Le schema « qala + reponse divine » est un mode narratif standard du Coran — Dieu repond a Ses serviteurs, corrige leurs perspectives et elargit leur vision.",
              axe5_frequence: "Pour la mission du khalifa, la parole de Dieu est la reference absolue. La reponse divine montre que Dieu corrige meme les prophetes — la mission du khalifa est soumise a la parole de Dieu, pas a sa propre comprehension."
            }
          }
        }
      },
      // kfr pos=25
      {
        word_key: "kfr", position: 25, sense_chosen: "couvrir",
        analysis_axes: {
          sense_chosen: "couvrir",
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le verbe kafara est un accompli 3MS de la racine k-f-r. Le Lane's donne : couvrir, cacher, recouvrir. Le sens premier de k-f-r est la couverture — le paysan (kafir) est celui qui couvre la graine de terre, la nuit (kafir) est celle qui couvre le jour. L'accompli marque un etat acheve — celui qui a couvert (la verite, les bienfaits). Le verbe est precede du pronom conditionnel « man » (quiconque) — quiconque a couvert. La distinction avec le rejet (probable) est que la couverture est le sens etymologique premier, le rejet en est une consequence.",
              axe1_verset: "Le verbe kafara oppose directement amana (croire) dans la structure du verset. Ceux qui ont cru (amana) vs quiconque a couvert (kafara). L'opposition est binaire : adherer a la verite vs la dissimuler. Le champ lexical qui suit (jouissance peu, contraindre, chatiment, Feu, mauvaise destination) montre les consequences de la couverture — une jouissance derisoire suivie d'une contrainte vers le chatiment.",
              axe2_voisins: "Le verset 124 mentionnait que l'engagement divin n'inclut pas les injustes. Le verset 126 precise : ceux qui ont couvert recevront une jouissance temporaire puis le chatiment. La progression montre que la couverture de la verite est un acte qui a des consequences temporelles (jouissance courte) et eschatologiques (chatiment du Feu).",
              axe3_sourate: "La racine k-f-r est l'une des plus frequentes de la sourate al-Baqarah. En 2:6, « ceux qui ont couvert, que tu les avertisses ou non ». En 2:26, « quant a ceux qui ont couvert ». La sourate oppose constamment ceux qui croient et ceux qui couvrent. La couverture est un acte delibere — couvrir la verite qu'on connait.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le verbe kafara au passe (kafaru) designe ceux qui ont activement recouvert la verite. Le Coran distingue l'ignorance (ne pas savoir) de la couverture (savoir et cacher). La couverture est un choix, pas un etat involontaire.",
              axe5_frequence: "Pour la mission du khalifa, la couverture est l'antithese de la mission. Le khalifa est charge de decouvrir et de manifester la verite. Couvrir la verite c'est trahir la mission fondamentale. Le verset montre que la couverture a des consequences — une jouissance temporaire suivie d'un chatiment permanent."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["nier", "etre ingrat", "renier un bienfait", "rejeter", "mecreant"],
              proof_ctx: "Le sens de rejet est un sens derive de la couverture — couvrir un bienfait c'est le nier, etre ingrat envers celui qui l'a donne. La distinction philosophique avec la couverture est que le rejet est la consequence (la reponse au bienfait) tandis que la couverture est l'acte (dissimuler). Le verbe kafara porte d'abord le sens de couvrir — le rejet decoule de la couverture. Le texte oppose amana (adherer) et kafara (couvrir) — la couverture est plus precise que le rejet car elle decrit le mecanisme : on ne rejette pas la verite sans d'abord la recouvrir.",
              axe1_verset: "Le verbe kafara pourrait porter le sens de rejeter — quiconque a rejete. Mais le sens de couvrir est plus precis car il decrit le mecanisme interieur : avant de rejeter, on couvre la verite. L'opposition avec amana (adherer, rendre son coeur sur) est plus parlante avec le sens de couvrir — adherer vs dissimuler.",
              axe2_voisins: "Le verset 121 parlait de ceux qui recitent le Livre. Le verset 126 montre l'alternative : adherer ou couvrir. Le sens de couverture est plus coherent avec le contexte — ceux qui couvrent la verite du Livre.",
              axe3_sourate: "La sourate utilise kafara dans des contextes ou la verite est connue puis cachee — 2:89, 2:102. Le sens de couverture deliberee est le fil rouge.",
              axe4_coherence: "Le Coran utilise kafara dans des contextes ou la verite etait accessible. En 2:89, ils connaissaient la verite puis la couvraient. Le mecanisme est toujours : connaitre → couvrir → rejeter.",
              axe5_frequence: "Le rejet est la consequence de la couverture. Le khalifa doit eviter les deux — ne pas couvrir la verite, ne pas la rejeter."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les peches"],
              proof_ctx: "Le sens d'expiation est hors sujet — le verbe kafara ici designe la couverture de la verite, pas l'effacement des peches."
            },
            "Sens isolé/Cultivateur": {
              status: "nul",
              senses: ["cultivateur"],
              proof_ctx: "Le sens de cultivateur (celui qui couvre la graine de terre) est hors sujet — le contexte est la couverture de la verite."
            },
            "Sens isolé/Goudron": {
              status: "nul",
              senses: ["goudron"],
              proof_ctx: "Le sens de goudron est hors sujet — le contexte est la couverture de la verite."
            },
            "Sens isolé/Village": {
              status: "nul",
              senses: ["village"],
              proof_ctx: "Le sens de village est hors sujet — le verbe kafara est un verbe d'action, pas un nom de lieu."
            }
          }
        }
      },
      // mta pos=27
      {
        word_key: "mta", position: 27, sense_chosen: "faire jouir",
        analysis_axes: {
          sense_chosen: "faire jouir",
          concept_chosen: "Jouissance/Provision",
          concepts: {
            "Jouissance/Provision": {
              status: "retenu",
              senses: ["jouissance", "biens", "provision"],
              proof_ctx: "Le verbe umattiuhu est un inaccompli 1S de la forme II de la racine m-t-'. Le Lane's donne : faire jouir, accorder la jouissance, laisser profiter. La forme II (fa''ala) intensifie l'action — faire jouir activement. L'inaccompli 1S indique que c'est Dieu qui parle — « Je lui accorderai jouissance ». Le pronom suffixe « hu » (lui) renvoie a celui qui a couvert. Le fa consequentiel lie cette jouissance a la couverture — c'est une consequence. La jouissance est qualifiee de « peu » (qalilan) — derisoire et temporaire. Le mata' est le plaisir de la vie basse — un usage temporaire, pas un don permanent.",
              axe1_verset: "Le verbe umattiuhu est la premiere action divine en reponse a la couverture. Le champ lexical (jouissance, peu, contraindre, chatiment) montre une sequence : jouissance temporaire → contrainte → chatiment. Dieu accorde une jouissance courte avant le chatiment — ce n'est pas un don mais un sursis. Le verset oppose la subsistance des croyants (fruits) et la jouissance des couvrants (peu).",
              axe2_voisins: "Le verset 124 disait que l'engagement divin n'inclut pas les injustes. Le verset 126 precise : les injustes (ceux qui couvrent) recevront une jouissance temporaire. La jouissance temporaire est un sursis, pas une recompense. Le verset 130 montrera qu'Abraham est choisi — la jouissance des couvrants est un contraste avec l'election d'Abraham.",
              axe3_sourate: "La racine m-t-' apparait dans la sourate al-Baqarah dans le contexte de la vie temporaire. En 2:36, « pour vous sur terre un sejour et une jouissance pour un temps ». En 2:241, « une provision convenable ». La sourate presente le mata' comme le confort temporel — utile mais temporaire.",
              axe4_coherence: "La racine m-t-' apparait environ 70 fois dans le Coran. En 3:185, « la vie d'ici-bas n'est qu'une jouissance trompeuse ». Le Coran presente la jouissance comme temporaire et trompeuse — elle donne l'illusion de permanence alors qu'elle est ephemere.",
              axe5_frequence: "Pour la mission du khalifa, la jouissance temporelle est un piege potentiel. Le khalifa doit distinguer la subsistance (rizq, don permanent) de la jouissance (mata', plaisir temporaire). La jouissance est un sursis accorde aux couvrants — le khalifa ne doit pas se laisser seduire par le mata' au detriment de sa mission."
            }
          }
        }
      },
      // qll pos=28
      {
        word_key: "qll", position: 28, sense_chosen: "peu",
        analysis_axes: {
          sense_chosen: "peu",
          concept_chosen: "Quantité/Rareté",
          concepts: {
            "Quantité/Rareté": {
              status: "retenu",
              senses: ["etre peu", "diminuer", "peu nombreux", "rare"],
              proof_ctx: "Le mot qalilan est un adjectif masculin singulier indefini accusatif de la racine q-l-l. Le Lane's donne : peu, faible, minime, derisoire. L'indefini renforce la petitesse — pas seulement peu, mais un peu indetermine et vague. Le mot qualifie la jouissance (umattiuhu) — la jouissance accordee est derisoire. Le contraste est avec l'eternite du chatiment qui suit (chatiment du Feu) — un peu de jouissance vs un chatiment sans fin.",
              axe1_verset: "Le mot qalilan qualifie la jouissance accordee aux couvrants. Le champ lexical (jouissance, peu, contraindre, chatiment, Feu) montre la disproportion : un peu de plaisir contre un chatiment immense. Le verset construit une opposition entre le derisoire (qalilan) et l'absolu (chatiment du Feu, mauvaise destination). Le peu rend la jouissance insignifiante comparee a ce qui suit.",
              axe2_voisins: "Le verset 41 avertissait : « ne vendez pas Mes signes pour un prix derisoire (thamanan qalilan) ». Le verset 126 reprend le theme du peu — la jouissance est derisoire comme le prix de la vente des signes. Les versets montrent que ce que les couvrants obtiennent est toujours peu comparee a ce qu'ils perdent.",
              axe3_sourate: "La racine q-l-l apparait dans la sourate al-Baqarah dans le contexte du peu. En 2:41, « un prix derisoire ». En 2:83, « sauf un petit nombre ». La sourate utilise qalil pour montrer la petitesse de ce que les gens choisissent a la place de la verite.",
              axe4_coherence: "La racine q-l-l apparait environ 76 fois dans le Coran. Le Coran utilise qalil pour qualifier la vie d'ici-bas comme courte et derisoire — en 9:38, « la jouissance de la vie d'ici-bas est peu par rapport a l'au-dela ». Le peu est relatif — peu par rapport a l'eternite.",
              axe5_frequence: "Pour la mission du khalifa, le peu est un avertissement. Ce que le monde offre est peu — le khalifa ne doit pas echanger la mission eternelle contre une jouissance temporaire et derisoire. Le peu rappelle que la vie d'ici-bas est courte."
            },
            "Sens isolé/Porter": {
              status: "nul",
              senses: ["porter"],
              proof_ctx: "Le sens de porter est hors sujet — le mot qalilan est un adjectif de quantite, pas un verbe d'action."
            }
          }
        }
      },
      // drr pos=30
      {
        word_key: "drr", position: 30, sense_chosen: "contraindre",
        analysis_axes: {
          sense_chosen: "contraindre",
          concept_chosen: "Nuisance/Mal",
          concepts: {
            "Nuisance/Mal": {
              status: "retenu",
              senses: ["nuire", "tort", "dommage"],
              proof_ctx: "Le verbe adtarruhu est un inaccompli 1S de la forme VIII de la racine d-r-r. Le Lane's donne : contraindre, forcer, obliger, pousser vers. La forme VIII (ifta'ala) porte le sens reflexif de la contrainte — on est force malgre soi. L'inaccompli 1S indique que c'est Dieu qui parle — « Je le contraindrai ». Le pronom suffixe « hu » (le) renvoie a celui qui a couvert. La preposition « ila » (vers) introduit la destination : le chatiment du Feu. La contrainte est un acte de justice — celui qui a couvert est contraint vers la consequence de son acte.",
              axe1_verset: "Le verbe adtarruhu est la deuxieme action divine apres la jouissance. Le champ lexical (contraindre, chatiment, Feu) montre la severite de la consequence. La sequence est : jouissance peu → contrainte → chatiment du Feu. La contrainte marque le passage de la jouissance au chatiment — il n'y a pas de transition douce, c'est une force qui pousse vers le chatiment.",
              axe2_voisins: "Le verset 124 disait que l'engagement divin n'inclut pas les injustes. Le verset 126 montre la consequence pour les injustes : contrainte vers le chatiment. Les versets voisins construisent une distinction nette entre les elus (Abraham, les croyants) et les exclus (les injustes, les couvrants).",
              axe3_sourate: "La racine d-r-r apparait dans la sourate al-Baqarah dans le contexte de la nuisance. En 2:231, « ne les retenez pas par nuisance ». En 2:282, « qu'aucun dommage ne soit fait au scribe ou au temoin ». La sourate utilise la racine d-r-r pour le tort cause deliberement. Le verset 126 montre que la contrainte divine est une reponse a la couverture deliberee.",
              axe4_coherence: "La racine d-r-r apparait environ 75 fois dans le Coran. La forme VIII (idtarra) apparait en 2:173, 6:119, 6:145 — dans le contexte de la necessite (celui qui est contraint par la necessite). Le verset 126 inverse le schema : c'est Dieu qui contraint le couvrant vers le chatiment. La contrainte est ici punitive, pas circonstancielle.",
              axe5_frequence: "Pour la mission du khalifa, la contrainte divine est un avertissement. Le khalifa qui couvre la verite sera contraint vers les consequences de ses actes. La contrainte montre que les choix ont des consequences inevitables — la mission du khalifa inclut d'avertir les gens de ces consequences."
            }
          }
        }
      },
      // edb pos=32
      {
        word_key: "edb", position: 32, sense_chosen: "chatiment",
        analysis_axes: {
          sense_chosen: "chatiment",
          concept_chosen: "Châtiment/Punition",
          concepts: {
            "Châtiment/Punition": {
              status: "retenu",
              senses: ["punir", "chatier", "tourmenter", "chatiment"],
              proof_ctx: "Le nom adhabi est un nom masculin singulier au genitif en idafa de la racine '-dh-b. Le Lane's donne : chatiment, punition, tourment. Le adhab est une consequence penible et douloureuse. L'idafa avec an-nari (du Feu) precise la nature du chatiment — c'est le chatiment par le Feu. Le chatiment est la consequence de la couverture — celui qui couvre la verite est contraint vers le chatiment. La distinction avec la douceur (nul) est radicale : le contexte est punitif.",
              axe1_verset: "Le mot adhabi est la destination de la contrainte. Le champ lexical (contraindre, chatiment, Feu) montre la fin du parcours du couvrant : jouissance temporaire → contrainte → chatiment du Feu. Le chatiment est le terme — la destination finale. Le verset oppose la subsistance des croyants (fruits permanents) et le chatiment des couvrants (Feu permanent).",
              axe2_voisins: "Le verset 104 mentionnait un chatiment douloureux. Le verset 114 parlait de l'humiliation dans ce monde et du chatiment immense dans l'au-dela. Le verset 126 precise que le chatiment est celui du Feu — pas une punition abstraite mais une realite concrete. Les versets voisins montrent que le chatiment est une constante pour ceux qui couvrent la verite.",
              axe3_sourate: "La racine '-dh-b est tres frequente dans la sourate al-Baqarah. En 2:7, « pour eux un chatiment immense ». En 2:85, « le chatiment le plus severe ». La sourate utilise adhab comme la consequence invariable de la couverture et de l'injustice.",
              axe4_coherence: "La racine '-dh-b apparait environ 373 fois dans le Coran. L'expression « adhab an-nar » (chatiment du Feu) est un refrain coranique. Le Coran associe le chatiment au Feu comme le lieu de la punition eternelle. Le chatiment n'est pas arbitraire — il est la consequence logique de la couverture.",
              axe5_frequence: "Pour la mission du khalifa, le chatiment est l'avertissement ultime. Le khalifa doit avertir les gens des consequences de la couverture. Le chatiment du Feu est le resultat de l'abandon de la mission — couvrir la verite mene au chatiment."
            },
            "Douceur": {
              status: "nul",
              senses: ["doux", "sucre", "eau douce", "agreable"],
              proof_ctx: "Le sens de douceur est le contraire exact du contexte — le verset parle de chatiment, pas d'agrement."
            },
            "Abstention": {
              status: "nul",
              senses: ["s'abstenir", "quitter"],
              proof_ctx: "Le sens d'abstention est hors sujet — le mot adhabi est un nom de chatiment, pas un verbe d'abstention."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["poussieres flottant sur l'eau"],
              proof_ctx: "Le sens de poussieres sur l'eau est hors sujet — le contexte est punitif."
            },
            "Végétation/Plante": {
              status: "nul",
              senses: ["arbre venimeux"],
              proof_ctx: "Le sens de vegetation est hors sujet — le contexte est le chatiment du Feu."
            }
          }
        }
      },
      // nwr pos=33
      {
        word_key: "nwr", position: 33, sense_chosen: "feu",
        analysis_axes: {
          sense_chosen: "feu",
          concept_chosen: "Lumière/Clarté",
          concepts: {
            "Lumière/Clarté": {
              status: "retenu",
              senses: ["lumiere", "eclairer", "feu", "guider par la lumiere"],
              proof_ctx: "Le nom an-nari est un nom feminin singulier defini au genitif de la racine n-w-r. Le Lane's donne : feu, flamme, lumiere. Le sens premier de n-w-r est la lumiere et le feu — le feu est une source de lumiere et de chaleur. L'article defini (an-) marque LE Feu connu — le Feu de l'au-dela, lieu de chatiment. Le genitif apres adhabi (chatiment DU Feu) precise la nature du chatiment. Le Feu est a la fois le lieu et le moyen du chatiment.",
              axe1_verset: "Le mot an-nari est le terme ultime de la sequence punitive. Le champ lexical (jouissance peu, contraindre, chatiment, Feu, mauvaise destination) culmine avec le Feu. Le Feu est le lieu ou aboutit celui qui a couvert — c'est la destination finale. Le verset oppose la cite sure (aminan) et le Feu (an-nar) — deux destinations opposees.",
              axe2_voisins: "Le verset 24 mentionnait « le Feu dont le combustible est les gens et les pierres ». Le verset 126 reprend le theme du Feu comme lieu de chatiment. Les versets voisins montrent que le Feu est une constante de l'avertissement coranique.",
              axe3_sourate: "La racine n-w-r apparait dans la sourate al-Baqarah sous ses deux sens : le feu (2:17, 2:24, 2:126) et la lumiere (2:17, 2:257). La sourate oppose le feu (destructeur) et la lumiere (guide). Le verset 126 utilise le sens de feu comme lieu de chatiment.",
              axe4_coherence: "Le mot an-nar apparait environ 145 fois dans le Coran. Le Feu est le lieu de chatiment par excellence. Le Coran le decrit comme permanent, douloureux et inevitable pour ceux qui couvrent la verite. L'expression « adhab an-nar » est un refrain coranique d'avertissement.",
              axe5_frequence: "Pour la mission du khalifa, le Feu est l'avertissement supreme. Le khalifa doit avertir les gens du Feu — c'est la destination de ceux qui abandonnent la mission. Le Feu motive la mission par la crainte des consequences de l'echec."
            },
            "Sens isolé/Fleur": {
              status: "nul",
              senses: ["fleur"],
              proof_ctx: "Le sens de fleur est hors sujet — le contexte est le chatiment par le Feu."
            },
            "Sens isolé/Fuir": {
              status: "nul",
              senses: ["fuir"],
              proof_ctx: "Le sens de fuir est hors sujet — le mot an-nari est un nom de lieu (le Feu), pas un verbe de fuite."
            }
          }
        }
      },
      // bas pos=35
      {
        word_key: "bas", position: 35, sense_chosen: "quel mauvais",
        analysis_axes: {
          sense_chosen: "quel mauvais",
          concept_chosen: "Puissance/Malheur",
          concepts: {
            "Puissance/Malheur": {
              status: "retenu",
              senses: ["force", "malheur", "chatiment"],
              proof_ctx: "Le verbe bi'sa est un verbe de blame (fi'l dhamm) de la racine b-'-s. Le Lane's donne : quel mauvais, combien mauvais, etre miserable. Le verbe bi'sa est une forme figee qui exprime le blame absolu — il condamne sans appel. La construction « bi'sa al-masiru » (quelle mauvaise destination) est une exclamation de condamnation. Le verbe de blame est un jugement definitif — il ne laisse pas de place a l'attenuation.",
              axe1_verset: "Le verbe bi'sa ferme le verset avec une exclamation de blame. Le champ lexical (chatiment, Feu, mauvaise, destination) montre le jugement final sur le parcours du couvrant. Le verset se termine par un verdict — la destination est mauvaise, le jugement est sans appel. Le blame est impersonnel — ce n'est pas Abraham qui blame mais le texte qui juge.",
              axe2_voisins: "Le verset 90 utilisait « bi'sa ma ishtaraw bihi anfusahum » (quel mauvais achat). Le verset 126 reprend le verbe de blame pour la destination. Les versets voisins montrent que le blame coranique porte sur les choix — le mauvais achat (90) et la mauvaise destination (126) sont les consequences de la couverture.",
              axe3_sourate: "La racine b-'-s apparait dans la sourate al-Baqarah dans le contexte du blame et de la puissance. En 2:90, bi'sa exprime le blame. En 2:177, le ba's designe la force dans l'adversite. La sourate utilise la racine pour le blame et la severite.",
              axe4_coherence: "Le verbe bi'sa apparait environ 28 fois dans le Coran. Il est toujours un jugement negatif absolu — « quel mauvais ». Le Coran utilise bi'sa pour condamner les choix des couvrants et des injustes. Le verbe de blame est un outil d'avertissement — il montre la gravite du mauvais choix.",
              axe5_frequence: "Pour la mission du khalifa, le blame coranique est un outil de discernement. Le khalifa doit reconnaitre ce qui est blame par le Coran et s'en eloigner. Le blame de la destination finale motive la mission — eviter la mauvaise destination en accomplissant la mission."
            }
          }
        }
      },
      // syr pos=36
      {
        word_key: "syr", position: 36, sense_chosen: "destination",
        analysis_axes: {
          sense_chosen: "destination",
          concept_chosen: "Devenir/Destination",
          concepts: {
            "Devenir/Destination": {
              status: "retenu",
              senses: ["devenir", "destination", "aboutir"],
              proof_ctx: "Le nom al-masiru est un nom masculin singulier defini au nominatif de la racine s-y-r. Le Lane's donne : destination, aboutissement, lieu ou l'on finit, devenir. Le masir est le nom de lieu (maf'il) de sara (devenir) — le lieu ou l'on aboutit apres un parcours. L'article defini (al-) marque LA destination par excellence — la destination finale de l'existence. Le verbe bi'sa (quel mauvais) qualifie cette destination comme une catastrophe — la pire destination possible.",
              axe1_verset: "Le mot al-masiru ferme le verset avec le jugement final. Le champ lexical (chatiment, Feu, mauvaise destination) montre l'aboutissement du parcours du couvrant. Le masir est le terme — le lieu ou l'on finit apres la jouissance temporaire et la contrainte. Le verset construit une trajectoire : jouissance → contrainte → chatiment → destination. Le masir est le point final de cette trajectoire descendante.",
              axe2_voisins: "Le verset 123 mentionnait un jour ou aucune compensation ne sera acceptee. Le verset 126 montre la destination finale — le Feu. Les versets voisins construisent une perspective eschatologique : le Jour du jugement (123) et la destination finale (126). Le masir est le lieu ou l'on aboutit le Jour dernier.",
              axe3_sourate: "La racine s-y-r apparait dans la sourate al-Baqarah en 2:126 et 2:285. En 2:285, « et vers Toi est la destination ». La sourate presente la destination finale comme le retour vers Dieu — le masir est le lieu du retour, que ce soit le Paradis ou le Feu.",
              axe4_coherence: "La racine s-y-r apparait environ 30 fois dans le Coran. L'expression « bi'sa al-masir » (quelle mauvaise destination) apparait en 2:126, 3:162, 8:36, 24:57. Le Coran utilise cette expression comme un refrain d'avertissement — la destination des couvrants est toujours qualifiee de mauvaise.",
              axe5_frequence: "Pour la mission du khalifa, la destination est l'horizon de la mission. Le khalifa sait ou il va — la destination finale depend de la fidelite a la mission. Une bonne mission mene a une bonne destination. Une mission abandonnee mene a une mauvaise destination. Le masir est le critere ultime du succes ou de l'echec de la mission."
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

  const verseIds = [133];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 126 ===\n');
  await processVerse(126);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V126 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
