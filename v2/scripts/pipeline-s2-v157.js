const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 157
// verse_id=164, analysis_id=523
// "Ceux-la, sur eux les prieres de leur Seigneur et une
//  misericorde. Et ceux-la sont les bien-guides."
// Conclusion de la section sur les endurants (153-157).
// =====================================================

const verseData = {
  157: {
    verse_id: 164,
    analysis_id: 523,
    translation_arab: "Ceux-la, sur eux les prieres de leur Seigneur et une misericorde. Et ceux-la sont les bien-guides.",
    full_translation: "Ceux-la, sur eux les benedictions de leur Seigneur, ainsi qu'une misericorde ; et ceux-la sont les bien-guides.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par le pronom demonstratif **ula'ika** (ceux-la) qui renvoie aux endurants decrits dans les versets 153-156. La preposition **'alayhim** (sur eux) introduit ce qui descend sur eux. Le nom **salawatun** est un pluriel indefini de la racine s-l-w. Le Lane's donne : prieres, benedictions, louanges. Le pluriel indefini (sans article) marque l'abondance — ce ne sont pas des benedictions specifiques mais des benedictions multiples et indefinies qui se deversent sur eux. Le complement **min rabbihim** (de leur Seigneur) rattache les benedictions a leur source — elles viennent du Seigneur, Celui qui eleve et entretient. Le nom **rabbihim** est de la racine r-b-b avec pronom suffixe 3MP. Le Lane's donne : seigneur, maitre, celui qui eleve, celui qui possede. Le Seigneur est ici la source des benedictions — Il est Celui qui prend soin de Ses serviteurs. Le pronom « leur » (him) marque la relation personnelle — c'est LEUR Seigneur, pas un seigneur anonyme. La conjonction **wa** (et) ajoute un deuxieme don. Le nom **rahmatun** est un singulier indefini de la racine r-h-m. Le Lane's donne : misericorde, compassion, tendresse. L'indefini marque que la misericorde est vaste et non delimitee. La distinction entre salawat et rahma est que les salawat sont des actes multiples (prieres, benedictions) tandis que la rahma est un etat englobant de tendresse et de compassion. Les deux ensemble couvrent l'acte et l'etat. Le pronom demonstratif **ula'ika** apparait une deuxieme fois pour relancer le propos — ceux-la (les memes) sont aussi les bien-guides. Le participe passif **al-muhtaduna** est un participe de la forme VIII de la racine h-d-y. Le Lane's donne : etre guide, suivre la bonne voie, se diriger soi-meme. La forme VIII (iftaʿala) indique que la guidance est a la fois recue et interioriee — ils ne sont pas seulement guides de l'exterieur, ils ont fait de la guidance leur etat interieur. L'article defini (al-) et le participe font d'eux les bien-guides par excellence — c'est leur identite, pas un etat passager.

§JUSTIFICATION§
**prieres** — Le sens retenu est « prier/benir ». Le mot salawatun au pluriel indefini designe les prieres et benedictions. L'alternative « lieu de priere » est ecartee car le contexte est ce qui descend SUR eux, pas un lieu physique. L'alternative « suivre de pres » est ecartee car le mot est un nom pluriel, pas un verbe d'action.

**Seigneur** — Le sens retenu est « seigneur/maitre ». Le mot rabbihim designe Celui qui eleve, possede et entretient. L'alternative « augmenter » est ecartee car le mot est un nom (rabb) avec pronom, pas un verbe. L'alternative « usure » est ecartee car le contexte est la relation de seigneurie entre Dieu et Ses serviteurs.

**misericorde** — Le sens retenu est « misericorde/compassion ». Le mot rahmatun est un singulier indefini qui designe la tendresse divine englobante. L'alternative « uterus » est ecartee car le contexte est spirituel, pas anatomique. L'alternative « pluie » est ecartee car le contexte n'est pas meteorologique.

**bien-guides** — Le sens retenu est « etre guide/suivre la voie ». Le participe al-muhtaduna de la forme VIII designe ceux qui ont interiorise la guidance. L'alternative « cadeau » est ecartee car le mot est un participe verbal, pas un nom d'objet. L'alternative « conduite » est ecartee car le participe designe l'etat de celui qui est guide, pas une maniere d'agir generale.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. Hamidullah donne « benedictions » la ou nous donnons « prieres ». Le mot salawat peut designer les deux — la priere est l'acte de se tourner vers quelqu'un, la benediction est le bien qui en decoule. Nous retenons « prieres » car c'est plus proche de l'etymologie de s-l-w qui porte d'abord le sens de priere et d'invocation. La difference entre « prieres de leur Seigneur » et « benedictions de leur Seigneur » ne change pas le sens fondamental — quand Dieu prie sur quelqu'un, c'est une benediction. Pour al-muhtaduna, les traductions courantes donnent « les bien-guides » ou « ceux qui sont sur la bonne voie ». La forme VIII insiste sur l'interiorisation de la guidance — ils sont guides ET ils se guident eux-memes. Cette nuance est souvent perdue dans les traductions qui ne distinguent pas les formes verbales.`,
    segments: [
      { fr: "ceux-la", phon: "ula'ika", arabic: "\u0623\u064f\u0648\u0644\u064e\u0640\u0670\u0626\u0650\u0643\u064e", is_particle: true, position: 0 },
      { fr: "sur eux", phon: "'alayhim", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652", is_particle: true, position: 1 },
      { fr: "des prieres", pos: "nom", phon: "salawatun", arabic: "\u0635\u064e\u0644\u064e\u0648\u064e\u0627\u062a\u064c", word_key: "slw", is_particle: false, sense_retenu: "prier", position: 2 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 3 },
      { fr: "leur Seigneur", pos: "nom", phon: "rabbihim", arabic: "\u0631\u064e\u0628\u0651\u0650\u0647\u0650\u0645\u0652", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 5 },
      { fr: "une misericorde", pos: "nom", phon: "rahmatun", arabic: "\u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064c", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 6 },
      { fr: "et ceux-la", phon: "wa-ula'ika", arabic: "\u0648\u064e\u0623\u064f\u0648\u0644\u064e\u0640\u0670\u0626\u0650\u0643\u064e", is_particle: true, position: 7 },
      { fr: "eux", phon: "humu", arabic: "\u0647\u064f\u0645\u064f", is_particle: true, position: 8 },
      { fr: "les bien-guides", pos: "nom", phon: "al-muhtaduna", arabic: "\u0671\u0644\u0652\u0645\u064f\u0647\u0652\u062a\u064e\u062f\u064f\u0648\u0646\u064e", word_key: "hdy", is_particle: false, sense_retenu: "etre guide", position: 9 }
    ],
    words: [
      // slw pos=3
      {
        word_key: "slw", position: 3, sense_chosen: "prier",
        analysis_axes: {
          sense_chosen: "prier",
          concept_chosen: "Prière/Invocation",
          concepts: {
            "Prière/Invocation": {
              status: "retenu",
              senses: ["prier", "priere rituelle", "invoquer", "benir", "lieu de priere"],
              proof_ctx: "Le mot salawatun est un nom feminin pluriel indefini de la racine s-l-w. Le Lane's donne : priere, invocation, benediction. Le pluriel indefini (sans article) marque l'abondance et la diversite des prieres — ce ne sont pas des prieres specifiques mais un flux continu de benedictions divines. Ici « salawatun min rabbihim » signifie que les prieres viennent de leur Seigneur et descendent sur les endurants. La distinction avec le sens de « suivre de pres » (nul) est claire : le contexte est la benediction divine, pas une action de poursuite. La distinction avec « lieu de priere » est que le mot est au pluriel indefini comme sujet de descente, pas comme lieu physique.",
              axe1_verset: "Le mot salawatun est le premier des deux dons enumeres dans le verset — les prieres de leur Seigneur ET une misericorde. Le champ lexical du verset tourne autour de la recompense des endurants : prieres, Seigneur, misericorde, bien-guides. Les salawat sont des actes multiples (pluriel) qui descendent sur eux (preposition 'alayhim). Le verset construit une accumulation : d'abord les prieres, puis la misericorde, puis le statut de bien-guides — chaque element ajoute une couche de recompense.",
              axe2_voisins: "Le verset 155 decrivait les epreuves : peur, faim, perte de biens, de vies et de fruits. Le verset 156 donnait la reponse des endurants : « nous sommes a Dieu et vers Lui nous retournons ». Le verset 157 est la recompense de cette endurance — les prieres divines repondent a la patience humaine. La progression est : epreuve → endurance → recompense divine.",
              axe3_sourate: "La racine s-l-w apparait dans la sourate al-Baqarah principalement dans le contexte de la priere rituelle (en 2:3, 2:43, 2:45, 2:83, 2:110, 2:153). En 2:157, le mot est au pluriel et designe les prieres/benedictions de Dieu SUR les endurants — un usage different de la priere rituelle des croyants VERS Dieu. La sourate montre les deux directions : les hommes prient vers Dieu, et Dieu prie sur les endurants.",
              axe4_coherence: "La racine s-l-w apparait environ 99 fois dans le Coran. L'expression « salawat min rabbihim » est unique a ce verset — Dieu qui « prie sur » Ses serviteurs est rare dans le Coran. En 33:43, « C'est Lui qui prie sur vous ainsi que Ses anges ». En 33:56, « Dieu et Ses anges prient sur le Prophete ». Les salawat de Dieu sont un honneur supreme — Dieu Se tourne vers Ses serviteurs avec bienveillance.",
              axe5_frequence: "Pour la mission du khalifa, les prieres de Dieu sont la recompense de l'endurance dans la mission. Le khalifa qui endure les epreuves sans se plaindre recoit les benedictions divines. Les salawat divines ne sont pas un acquis automatique — elles repondent a une attitude specifique : l'endurance patiente avec le retour vers Dieu. La mission exige l'endurance, et l'endurance attire les prieres divines."
            },
            "Proximité/Attachement": {
              status: "nul",
              senses: ["suivre de pres"],
              proof_ctx: "Le sens de proximite physique est un usage concret de s-l-w. Le contexte est la benediction divine, pas le fait de suivre quelqu'un de pres."
            },
            "Lieu/Géographie": {
              status: "nul",
              senses: ["milieu"],
              proof_ctx: "Le sens de lieu/milieu est un usage concret sans rapport avec le contexte de benediction divine sur les endurants."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["deuxieme dans une course"],
              proof_ctx: "Le sens de course est un usage concret sans rapport avec le contexte de benediction divine."
            }
          }
        }
      },
      // rbb pos=5
      {
        word_key: "rbb", position: 5, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le mot rabbihim est un nom masculin singulier genitif de la racine r-b-b avec pronom suffixe 3MP. Le Lane's donne : seigneur, maitre, celui qui eleve et entretient. Le rabb est celui qui possede et prend soin de ce qu'il possede — la seigneurie inclut la possession, l'education et le soin. Ici « rabbihim » avec le pronom « leur » marque la relation personnelle entre le Seigneur et Ses serviteurs endurants. La distinction avec le sens de « croissance » (probable) est que le mot est un nom de relation (rabb = seigneur), pas un verbe d'augmentation. La distinction avec « usure » (nul) est evidente : le contexte est la relation divine, pas la finance.",
              axe1_verset: "Le mot rabbihim situe la source des prieres — elles viennent de LEUR Seigneur. Le pronom possessif « leur » (him) cree une relation intime : ce n'est pas un seigneur anonyme mais Celui qui les a pris en charge. Le champ lexical (prieres, misericorde, bien-guides) montre que le Seigneur est la source de tous les bienfaits enumeres. Le verset presente le Seigneur comme Celui qui repond a l'endurance par la benediction.",
              axe2_voisins: "Le verset 152 disait « souvenez-vous de Moi, Je Me souviendrai de vous ». Le verset 153 invoquait « Dieu est avec les endurants ». Le verset 156 rappelait « nous sommes a Dieu ». Le verset 157 explicite la reponse du Seigneur — Il prie sur eux et les enveloppe de misericorde. La progression est : le serviteur endure et se tourne vers Dieu, le Seigneur repond par les benedictions.",
              axe3_sourate: "La racine r-b-b apparait frequemment dans la sourate al-Baqarah. En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:62, « ils auront leur recompense aupres de leur Seigneur ». En 2:157, le Seigneur est la source des benedictions sur les endurants. La sourate construit une relation entre le Seigneur et Ses serviteurs — guidance, recompense, benediction.",
              axe4_coherence: "La racine r-b-b apparait environ 975 fois dans le Coran. Le mot rabb est le nom divin le plus frequent apres Allah. Il designe la relation personnelle entre Dieu et Sa creation — Dieu eleve, entretient, possede et prend soin. En 2:157, le Seigneur est Celui qui repond a l'endurance par la priere et la misericorde — Il est le Seigneur bienveillant, pas le Seigneur distant.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est Celui qui a confie la mission et qui l'accompagne. Le khalifa n'est pas abandonne dans sa mission — son Seigneur prie sur lui et lui accorde Sa misericorde quand il endure. La relation de seigneurie est une relation de soin : le Seigneur eleve Son serviteur, le nourrit et le guide. Reconnaitre cette seigneurie est le fondement de la mission."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens de croissance est le sens etymologique premier de r-b-b — augmenter, faire grandir. Le rabb est etymologiquement « celui qui fait grandir ». Ici le mot est utilise comme nom de relation (Seigneur) et non comme verbe de croissance, mais le sens de croissance eclaire la seigneurie : le Seigneur est celui qui fait grandir ses serviteurs."
            },
            "Éducation/Accompagnement": {
              status: "nul",
              senses: ["elever un enfant", "eduquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education est un aspect de la seigneurie — le rabb eleve et eduque. Mais ici le mot est un nom de relation (leur Seigneur), pas un verbe d'education. Le sens est englobe dans la seigneurie."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette", "interet"],
              proof_ctx: "Le sens d'usure est hors sujet — le contexte est la relation de seigneurie entre Dieu et les endurants, pas une transaction financiere."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "Le sens d'essoufflement est un usage concret sans rapport avec le contexte de seigneurie divine."
            }
          }
        }
      },
      // rhm pos=6
      {
        word_key: "rhm", position: 6, sense_chosen: "misericorde",
        analysis_axes: {
          sense_chosen: "misericorde",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["misericorde", "pardon", "traiter avec compassion", "dire \"que Dieu te fasse misericorde\"", "se forcer a la compassion", "misericorde reciproque", "demander la misericorde", "le Compatissant", "plus misericordieux", "objet de misericorde", "traite avec beaucoup de compassion"],
              proof_ctx: "Le mot rahmatun est un nom feminin singulier indefini de la racine r-h-m. Le Lane's donne : misericorde, compassion, tendresse. La misericorde est un mouvement interieur de tendresse qui se dirige vers l'exterieur en actes de bienfaisance. L'indefini (sans article) marque que la misericorde est vaste et non delimitee — une misericorde sans bornes. La distinction entre la misericorde et les prieres (salawat) est que les prieres sont des actes multiples (pluriel) tandis que la misericorde est un etat englobant (singulier). La distinction avec le sens d'uterus (nul) est claire : le contexte est spirituel, pas anatomique.",
              axe1_verset: "Le mot rahmatun est le deuxieme don enumere dans le verset — apres les prieres, la misericorde. Le champ lexical (prieres, Seigneur, misericorde, bien-guides) construit une accumulation de recompenses. La misericorde est au singulier indefini alors que les prieres sont au pluriel — la misericorde est un don unique et englobant, tandis que les prieres sont des actes multiples. Le verset presente la misericorde comme l'enveloppe qui contient les prieres.",
              axe2_voisins: "Le verset 155 decrivait les epreuves — peur, faim, pertes. Le verset 156 montrait l'endurance — « nous sommes a Dieu ». Le verset 157 est la reponse divine : prieres ET misericorde. La misericorde repond a la souffrance — celui qui endure l'epreuve avec patience recoit la tendresse divine. La progression est : souffrance → patience → misericorde.",
              axe3_sourate: "La racine r-h-m est omnipresente dans la sourate al-Baqarah. Chaque verset commence par « Au nom de Dieu, le Tout Misericordieux, le Tres Misericordieux ». En 2:54, « Il est le Tres Misericordieux ». En 2:64, « sans la grace de Dieu et Sa misericorde ». En 2:143, « Dieu est Compatissant et Misericordieux ». La sourate revient constamment a la misericorde comme attribut divin central.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran. La misericorde est l'attribut divin le plus cite apres la divinite elle-meme. En 6:12, « Il S'est prescrit a Lui-meme la misericorde ». En 7:156, « Ma misericorde embrasse toute chose ». En 2:157, la misericorde est donnee specifiquement aux endurants — elle n'est pas automatique, elle repond a une attitude de patience et de retour vers Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la misericorde divine est le carburant de la mission. Le khalifa qui endure les difficultes recoit la misericorde — cette tendresse divine le soutient et le porte. La mission n'est pas un chemin solitaire : la misericorde accompagne celui qui endure. Le khalifa doit aussi etre misericordieux envers les autres — la misericorde recue doit etre redistribuee."
            },
            "Utérus/Reproduction": {
              status: "nul",
              senses: ["uterus", "vulve", "maladie de l'uterus", "uterus gonfle", "chamelle malade post-partum", "sortie de l'uterus"],
              proof_ctx: "Le sens d'uterus est le sens physique premier de r-h-m — l'organe maternel. Le contexte est la misericorde divine envers les endurants, pas l'anatomie."
            },
            "Parenté/Lien familial": {
              status: "nul",
              senses: ["lien de parente", "parents par les femmes", "parent interdit au mariage", "sentiment de parente", "connecte par parente"],
              proof_ctx: "Le sens de parente derive de l'uterus (la matrice commune). Le contexte est la misericorde divine, pas les liens familiaux."
            },
            "Provision/Bienfait matériel": {
              status: "nul",
              senses: ["subsistance", "pluie", "abondance", "prophetie"],
              proof_ctx: "Le sens de bienfait materiel est une manifestation concrete de la misericorde. Le contexte est la misericorde comme etat englobant, pas comme bienfait materiel specifique."
            }
          }
        }
      },
      // hdy pos=8 (al-muhtaduna)
      {
        word_key: "hdy", position: 8, sense_chosen: "etre guide",
        analysis_axes: {
          sense_chosen: "etre guide",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-meme"],
              proof_ctx: "Le mot al-muhtaduna est un participe actif pluriel defini de la forme VIII de la racine h-d-y. Le Lane's donne : etre guide, suivre la bonne voie, se diriger soi-meme. La forme VIII (iftaʿala) indique une action reflexive ou interioriee — ils ne sont pas seulement guides de l'exterieur (forme I), ils ont fait de la guidance leur propre mouvement interieur. L'article defini (al-) les identifie comme LES bien-guides par excellence. Le participe indique un etat permanent — ils sont guides de maniere continue. La distinction avec « cadeau » (nul) est claire : le mot est un participe verbal, pas un nom d'objet.",
              axe1_verset: "Le mot al-muhtaduna clot le verset comme un verdict final — ceux-la SONT les bien-guides. Le champ lexical du verset (prieres, Seigneur, misericorde) construit vers ce point culminant : les benedictions et la misericorde aboutissent a la guidance. Le demonstratif ula'ika repete une deuxieme fois avant al-muhtaduna cree un effet d'insistance — ceux-la, pas d'autres, sont les bien-guides. Le verset lie l'endurance a la guidance : endurer mene aux prieres, a la misericorde, et finalement a etre guide.",
              axe2_voisins: "Le verset 155 testait avec les epreuves. Le verset 156 montrait la bonne reponse. Le verset 157 donne le resultat : benedictions, misericorde, guidance. La progression des versets 153-157 forme un arc narratif complet : commandement d'endurer → description des epreuves → formule de l'endurance → recompense. La guidance est le point d'arrivee de cet arc.",
              axe3_sourate: "La racine h-d-y est fondatrice dans la sourate al-Baqarah. En 2:2, « une guidance pour les pieux ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur, et ceux-la sont les reussissants ». Le verset 157 fait echo au verset 5 — la meme structure (ula'ika + attribut positif) et la meme racine h-d-y. La sourate s'ouvre sur la guidance et y revient regulierement comme theme central.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. La forme VIII (ihtada) apparait environ 29 fois — elle designe systematiquement celui qui a interiorise la guidance. En 2:157, al-muhtaduna au pluriel defini designe le groupe des bien-guides. En 7:178, « celui que Dieu guide, c'est lui le bien-guide ». En 17:15, « celui qui se guide, se guide pour lui-meme ». La forme VIII montre que la guidance est a la fois un don divin et un choix personnel.",
              axe5_frequence: "Pour la mission du khalifa, etre guide est le but de la mission. Le khalifa n'est pas seulement un executant — il doit etre guide, c'est-a-dire avoir interiorise la guidance au point qu'elle devienne son etat permanent. La forme VIII montre que la guidance n'est pas passive — elle demande un effort d'interiorisation. Le khalifa doit endurer les epreuves, recevoir les benedictions, accueillir la misericorde, et devenir un bien-guide."
            },
            "Conduite/Comportement": {
              status: "nul",
              senses: ["conduite", "maniere d'agir", "comportement calme"],
              proof_ctx: "Le sens de conduite est un aspect general du comportement. Le mot est un participe de la forme VIII designant l'etat de celui qui est guide, pas une maniere d'agir en general."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande"],
              proof_ctx: "Le sens de cadeau est un usage concret de h-d-y (hadiyya = cadeau). Le contexte est la guidance spirituelle, pas un don materiel."
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

  const verseIds = [164];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 157 ===\n');
  await processVerse(157);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V157 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
