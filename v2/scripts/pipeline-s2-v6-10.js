const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 6 À 10
// Étape 2 = SKIP (tous les concepts existent déjà)
// Étapes 3 + 4 complètes
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:6 — إِنَّ ٱلَّذِينَ كَفَرُوا۟ سَوَآءٌ عَلَيْهِمْ ءَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ
  // verse_id=13, analysis_id=372
  // =====================================================
  6: {
    verse_id: 13,
    analysis_id: 372,
    translation_arab: "En vérité, ceux qui ont recouvert — c'est égal pour eux que tu les aies avertis ou que tu ne les aies pas avertis — ils n'accordent pas sécurité.",
    full_translation: "[Quant aux] infidèles, il est égal pour eux que tu les avertisses ou que tu ne les avertisses pas : ils ne croiront pas.",
    translation_explanation: `§DEMARCHE§
Le verset ouvre la section sur les rejeteurs, après les versets 2-5 qui décrivaient les muttaqīn. La particule **inna** (en vérité) est emphatique — elle introduit une affirmation catégorique. Le pronom relatif **alladhīna** (ceux qui) est suivi du verbe **kafarū**, un accompli de forme I de la racine k-f-r. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), k-f-r signifie « couvrir, recouvrir, cacher ». Le kāfir est celui qui recouvre — il couvre quelque chose, il le dissimule. L'accompli indique que l'acte de recouvrir est achevé — ils ont recouvert et c'est fait. Le mot **sawāʾun** (égal) est un nom indéfini au nominatif de la racine s-w-y (être égal, être achevé). Il signifie « c'est égal, c'est la même chose ». La préposition **ʿalayhim** (sur eux, pour eux) indique que cette égalité s'applique à eux. Le verbe **andhartahum** est un accompli de forme IV de n-dh-r (avertir, mettre en garde), avec suffixe -hum (eux) et préfixe interrogatif hamza. La forme IV est causative : « faire parvenir un avertissement ». La construction **am lam tundhirhum** (ou que tu ne les avertisses pas) est le deuxième terme de l'alternative, avec lam + inaccompli apocopé (négation du passé). Le verbe **lā yuʾminūna** (ils n'accordent pas sécurité) clôt le verset — négation absolue du même verbe que les versets 3-4 (forme IV de a-m-n).

§JUSTIFICATION§
**recouvert** — Le sens retenu est « Couverture/Dissimulation ». Le mot « recouvert » traduit kafarū car la racine k-f-r a pour sens premier « couvrir, recouvrir » (Lane's donne « he covered, concealed, hid »). Le kāfir est le laboureur qui recouvre la graine de terre (Lane's le mentionne explicitement). L'alternative « mécru » n'existe pas en français courant. L'alternative « rejeté » est possible car le rejet est un sens dérivé de k-f-r, mais « recouvrir » est le sens premier — ils ont couvert quelque chose (la vérité, la direction, les signes) et l'ont dissimulé.

**égal** — Le sens retenu est « Égalité/Équivalence ». Le mot « égal » traduit sawāʾ — les deux options (avertir ou ne pas avertir) sont identiques pour eux.

**avertis** — Le sens retenu est « Avertissement/Mise en garde ». Le mot « avertis » traduit andharta — mettre en garde contre un danger. Le ndhr est un avertissement préventif, pas une punition.

**n'accordent pas sécurité** — Même sens qu'aux versets 3-4 (Sécurité/Confiance), mais nié par lā. Ils ne font pas l'acte d'accorder sécurité — la porte est fermée.

§CRITIQUE§
**recouvert vs infidèles** — Les traductions courantes donnent « les infidèles » ou « les mécréants ». Ces mots sont des termes religieux chrétiens qui transforment un verbe d'action (recouvrir) en un statut identitaire (infidèle = celui qui n'a pas la foi). La racine k-f-r ne parle pas de foi — elle parle de recouvrement. Le kāfir n'est pas « celui qui n'a pas la foi » mais « celui qui a recouvert ». La différence est fondamentale : l'infidélité est un état passif (ne pas avoir la foi), le recouvrement est un acte actif (couvrir quelque chose volontairement). Le texte décrit un acte, pas un statut.

**[Quant aux]** — L'ajout « quant aux » entre crochets est absent du texte arabe. Le texte dit directement « inna alladhīna kafarū » — en vérité ceux qui ont recouvert.`,
    segments: [
      { fr: "en vérité", phon: "inna", arabic: "إِنَّ", is_particle: true, position: 1 },
      { fr: "ceux qui", phon: "alladhīna", arabic: "ٱلَّذِينَ", is_particle: true, position: 2 },
      { fr: "ont recouvert", pos: "verbe", phon: "kafarū", arabic: "كَفَرُوا۟", word_key: "kfr", is_particle: false, sense_retenu: "recouvrir", position: 3 },
      { fr: "c'est égal", pos: "nom", phon: "sawāʾun", arabic: "سَوَآءٌ", word_key: "swy", is_particle: false, sense_retenu: "égalité", position: 4 },
      { fr: "pour eux", phon: "ʿalayhim", arabic: "عَلَيْهِمْ", is_particle: true, position: 5 },
      { fr: "que tu les aies avertis", pos: "verbe", phon: "a-andhartahum", arabic: "ءَأَنذَرْتَهُمْ", word_key: "ndh r", is_particle: false, sense_retenu: "avertir", position: 6 },
      { fr: "ou bien", phon: "am", arabic: "أَمْ", is_particle: true, position: 7 },
      { fr: "ne pas (passé)", phon: "lam", arabic: "لَمْ", is_particle: true, position: 8 },
      { fr: "tu ne les aies pas avertis", pos: "verbe", phon: "tundhirhum", arabic: "تُنذِرْهُمْ", word_key: "ndh r", is_particle: false, sense_retenu: "avertir", position: 9 },
      { fr: "ne pas", phon: "lā", arabic: "لَا", is_particle: true, position: 10 },
      { fr: "ils n'accordent pas sécurité", pos: "verbe", phon: "yuʾminūna", arabic: "يُؤْمِنُونَ", word_key: "amn", is_particle: false, sense_retenu: "accorder sécurité", position: 11 }
    ],
    words: [
      {
        word_key: "kfr",
        position: 3,
        sense_chosen: "recouvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              proof_ctx: "Le verbe kafarū est un accompli de forme I de k-f-r. D'après les sources étymologiques, k-f-r signifie « couvrir, recouvrir, cacher ». Le kāfir au sens premier est le laboureur qui recouvre la graine de terre, ou la nuit qui recouvre le jour. L'accompli indique un acte achevé — ils ont recouvert et c'est fini. Le verset enchaîne avec la conséquence : l'avertissement n'y change rien. La distinction avec « Rejet/Ingratitude » : le rejet est le refus de ce qu'on reçoit, le recouvrement est l'acte de cacher ce qui existe. Le texte dit qu'ils ont recouvert — pas qu'ils ont refusé. Ce qu'ils ont recouvert n'est pas nommé, mais le contexte (les versets 2-5 parlaient de l'écrit, de la direction, de la sécurité) suggère qu'ils ont couvert ces réalités. La distinction avec « Expiation/Réparation » : l'expiation (kaffāra) recouvre une faute pour l'effacer — c'est un sens dérivé positif du recouvrement, hors contexte ici.",
              axe1_verset: "Le champ lexical est celui de l'échec de la communication : égal (sawāʾ), avertir (ndhr), ne pas accorder sécurité (amn). Le recouvrement est la cause de cet échec — ceux qui ont recouvert ne reçoivent plus l'avertissement car ils ont couvert le canal de réception. L'image est cohérente : on recouvre pour ne plus voir, et une fois recouvert, l'avertissement ne passe plus.",
              axe2_voisins: "Les versets 2-5 décrivaient ceux qui reçoivent la direction. Le verset 6 pivote vers ceux qui ne la reçoivent pas — le recouvrement est l'acte qui les sépare des muttaqīn. Le verset 7 va décrire les conséquences physiques du recouvrement : le scellement des cœurs et de l'audition, le voilement de la vue.",
              axe3_sourate: "Al-Baqarah utilise la racine k-f-r tout au long de la sourate pour décrire ceux qui s'opposent à la direction. Le recouvrement est le thème négatif central de la sourate — il est le contraire de la préservation (taqwā).",
              axe4_coherence: "Le Coran utilise kafara plus de 500 fois. En 57:20, le Coran compare la vie d'ici-bas à une pluie dont la végétation plaît aux kuffār (laboureurs qui recouvrent la graine). Ce verset confirme que kāfir au sens premier est le laboureur qui recouvre — la métaphore est volontaire. En 76:3-4, le Coran dit « nous lui avons montré le chemin — soit reconnaissant (shākir), soit recouvrant (kafūr) » — le recouvrement est l'opposé de la reconnaissance.",
              axe5_frequence: "Pour la mission du khalifa, le recouvrement est l'obstacle principal. Celui qui recouvre la vérité, la direction ou les signes empêche la justice et la civilisation. Le khalifa doit découvrir (dé-couvrir, ôter la couverture) ce que les recouvrants ont caché."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              proof_ctx: "Le rejet est un sens dérivé de k-f-r — celui qui recouvre ce qu'il a reçu est ingrat (kufr al-niʿma). La distinction philosophique : le recouvrement est l'acte de cacher, le rejet est l'acte de refuser. On peut recouvrir sans rejeter (cacher par ignorance) et rejeter sans recouvrir (refuser ouvertement). Le texte utilise l'accompli (ils ont recouvert) ce qui pointe vers l'acte de cacher plutôt que l'acte de refuser.",
              axe1_verset: "Le rejet est compatible avec le champ lexical du verset : ceux qui rejettent ne répondent pas à l'avertissement. Mais le verset insiste sur l'inefficacité de l'avertissement (sawāʾ), ce qui pointe davantage vers un blocage de réception (recouvrement) qu'un acte de refus (rejet).",
              axe2_voisins: "Le verset 7 parle de scellement (xtm) des cœurs et d'un voile (ghishāwa) sur la vue — ces images sont celles du recouvrement (couvrir, voiler), pas du rejet (repousser). Le contexte soutient le sens de couverture.",
              axe3_sourate: "La sourate al-Baqarah distingue le recouvrement (kafara) de la désobéissance (ʿaṣā) et du rejet (radd). Chaque terme a sa nuance. Le kufr est spécifiquement le recouvrement.",
              axe4_coherence: "Le Coran utilise kafara dans des contextes où le rejet serait possible (rejet de Dieu, des signes). Mais le choix du mot kafara (recouvrir) plutôt que radda (rejeter) est délibéré — le texte veut l'image de la couverture.",
              axe5_frequence: "Le rejet empêche la mission du khalifa, mais le recouvrement est plus insidieux — il cache sans affronter ouvertement."
            },
            "Expiation/Réparation": {
              status: "nul",
              proof_ctx: "L'expiation (kaffāra) recouvre une faute pour l'effacer. Hors contexte — le verset parle de personnes qui ont recouvert la direction, pas de personnes qui expient une faute."
            }
          }
        }
      },
      {
        word_key: "swy",
        position: 4,
        sense_chosen: "égalité",
        analysis_axes: {
          concept_chosen: "Égalité/Équivalence",
          concepts: {
            "Égalité/Équivalence": {
              status: "retenu",
              proof_ctx: "Le mot sawāʾun est un nom indéfini au nominatif de s-w-y. D'après les sources étymologiques, s-w-y signifie « être égal, être au même niveau, être achevé ». La construction sawāʾun ʿalayhim signifie « c'est égal pour eux » — les deux options sont identiques à leurs yeux. L'égalité ici est négative : que l'avertissement vienne ou non, le résultat est le même. C'est l'expression de l'inefficacité totale de la communication.",
              axe1_verset: "Le champ lexical est l'échec de la communication. L'égalité est le symptôme de cet échec : tout est pareil pour eux, rien ne les atteint. Le mot sawāʾ est au centre du verset — il relie le recouvrement (cause) à l'absence de sécurité accordée (conséquence). La structure est : ils ont recouvert → tout est égal pour eux → l'avertissement ne change rien → ils n'accordent pas sécurité.",
              axe2_voisins: "Le verset 5 montrait la direction des muttaqīn. Le verset 6 montre l'indifférence des recouvrants. Le contraste est total : les uns sont sur une direction, les autres sont dans l'indifférence. Le verset 7 va aggraver : non seulement tout est égal pour eux, mais leurs cœurs sont scellés.",
              axe3_sourate: "L'indifférence des recouvrants est un thème récurrent d'al-Baqarah. La sourate montre que cette indifférence a des conséquences (v7 : scellement, voilement, conséquence majeure).",
              axe4_coherence: "Le Coran utilise sawāʾun ʿalayhim en 14:21 et 63:6 — à chaque fois pour exprimer l'indifférence totale des recouvrants face à l'avertissement. C'est une formule récurrente.",
              axe5_frequence: "Pour la mission du khalifa, l'indifférence est pire que l'opposition. Celui qui s'oppose peut être convaincu — celui pour qui tout est égal ne peut plus être atteint. Le recouvrement produit l'indifférence."
            }
          }
        }
      },
      {
        word_key: "ndh r",
        position: 6,
        sense_chosen: "avertir",
        analysis_axes: {
          concept_chosen: "Avertissement/Mise en garde",
          concepts: {
            "Avertissement/Mise en garde": {
              status: "retenu",
              proof_ctx: "Le verbe andhartahum est un accompli de forme IV de n-dh-r avec suffixe -hum. D'après les sources étymologiques, n-dh-r signifie « avertir d'un danger imminent, mettre en garde ». Le nadhīr est celui qui avertit — son rôle est préventif, pas punitif. Le verset utilise la construction interrogative (a-andhartahum am lam tundhirhum) pour exprimer l'alternative : que tu les avertisses ou non, c'est égal. L'avertissement est l'outil du prophète — le verset dit que cet outil est inefficace sur ces personnes.",
              axe1_verset: "Le champ lexical est l'échec de la communication. L'avertissement est l'acte de communication — il sort de l'avertisseur et devrait atteindre l'averti. Mais le recouvrement bloque la réception. L'avertissement est émis mais pas reçu — comme une lettre envoyée à une boîte scellée.",
              axe2_voisins: "Le verset 2 présentait l'écrit comme direction. Le verset 6 montre que pour certains, même l'avertissement direct (par le prophète) ne fonctionne pas. La direction de l'écrit et l'avertissement du prophète sont deux canaux — les deux échouent face au recouvrement.",
              axe3_sourate: "Al-Baqarah mentionne l'avertissement dans le contexte des prophètes envoyés aux peuples. Le nadhīr est un rôle prophétique central.",
              axe4_coherence: "Le Coran utilise andhara/yundhiru plus de 100 fois. En 36:10, « il est égal pour eux que tu les avertisses ou non — ils n'accordent pas sécurité ». Le verset 2:6 reprend exactement la même structure que 36:10.",
              axe5_frequence: "Pour la mission du khalifa, l'avertissement est un devoir même s'il échoue. Le verset ne dit pas d'arrêter d'avertir — il constate que certains ne répondront pas. Le khalifa avertit sans garantie de résultat."
            },
            "Voeu/Engagement": {
              status: "nul",
              proof_ctx: "Le vœu (nadhr) est un engagement solennel. Hors contexte — le verset parle d'avertissement, pas d'engagement."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:7 — خَتَمَ ٱللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ وَعَلَىٰٓ أَبْصَـٰرِهِمْ غِشَـٰوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ
  // verse_id=14, analysis_id=374
  // NOTE: word_key "ktm" dans les segments step1 est en fait "xtm" (خ ت م = sceller)
  // =====================================================
  7: {
    verse_id: 14,
    analysis_id: 374,
    translation_arab: "Dieu a scellé leurs centres et leur audition, et sur leur perception il y a un voilement, et pour eux il y a une conséquence considérable.",
    full_translation: "Allah a scellé leurs cœurs et leurs oreilles; et un voile épais leur couvre la vue; et pour eux il y a un grand châtiment.",
    translation_explanation: `§DEMARCHE§
Le verset décrit les conséquences physiques du recouvrement (verset 6). Le verbe **khatama** est un accompli de forme I de la racine kh-t-m (خ ت م), pas k-t-m (ك ت م). D'après les sources étymologiques, kh-t-m signifie « sceller, apposer un sceau, fermer définitivement ». Le sceau est ce qu'on met sur un document ou un récipient pour le fermer — une fois scellé, on ne peut plus ouvrir sans briser le sceau. Le sujet est **allāhu** (Dieu) — c'est Dieu qui a scellé, pas les recouvrants eux-mêmes. L'accompli indique un acte achevé. La préposition **ʿalā** (sur) avec **qulūbihim** (leurs centres/cœurs) indique la surface sur laquelle le sceau est apposé. Le mot **qulūb** (pluriel de qalb) vient de la racine q-l-b (retourner, changer). Le qalb est le centre de la personne — ce qui retourne, ce qui change, ce qui réagit. Le scellement du qalb signifie que ce centre ne peut plus retourner, ne peut plus changer — il est figé. Le même scellement s'applique à **samʿihim** (leur audition, singulier collectif de s-m-ʿ). L'audition est au singulier parce qu'elle est une faculté partagée — ils entendent la même chose. Le mot **ghishāwatun** (voilement) vient de la racine gh-sh-w (couvrir, voiler, recouvrir). C'est un voile qui couvre leurs **abṣārihim** (leurs perceptions visuelles, pluriel de baṣar de la racine b-ṣ-r). Le baṣar est la perception visuelle, pas l'œil physique (ʿayn). La construction **lahum ʿadhābun ʿaẓīmun** est une phrase nominale : « pour eux [il y a] une conséquence considérable ». Le mot **ʿadhāb** vient de la racine ʿ-dh-b qui a deux sens principaux : la douceur (eau douce, ʿadhb) et la conséquence douloureuse. Le mot **ʿaẓīm** vient de ʿ-ẓ-m (être grand, ossature, structure) — c'est ce qui est structurellement important, considérable.

§JUSTIFICATION§
**scellé** — Le sens retenu est « Sceau/Clôture ». Le mot « scellé » traduit khatama car la racine kh-t-m désigne l'acte d'apposer un sceau pour fermer définitivement. L'alternative « terminé » est un sens dérivé (la fin d'un récit = le dernier sceau) mais le contexte est le scellement des cœurs, pas la fin de quelque chose.

**centres** — Le sens retenu est « Coeur/Centre ». Le mot « centres » traduit qulūb car la racine q-l-b désigne le retournement et le centre. Le qalb est le centre de la personne — là où les changements se produisent. L'alternative « cœurs » est possible mais « centres » est plus fidèle à l'étymologie — le qalb n'est pas l'organe cardiaque mais le centre de gravité intellectuel et émotionnel.

**audition** — Le sens retenu est « Audition/Écoute ». Le mot « audition » traduit samʿ — la faculté d'entendre. L'alternative « oreilles » est écartée car samʿ est la faculté, pas l'organe.

**perception** — Le sens retenu est « Vision/Perception ». Le mot « perception » traduit abṣār — la faculté de voir et de comprendre ce qu'on voit. L'alternative « yeux » est écartée car baṣar est la perception, pas l'organe.

**voilement** — Le sens retenu est « Couverture/Voilement ». Le mot « voilement » traduit ghishāwa — un voile qui recouvre. L'écho avec kafara (recouvrir, v6) est remarquable : ceux qui recouvrent sont eux-mêmes recouverts.

**conséquence** — Le sens retenu est « Châtiment/Punition ». Le mot « conséquence » est choisi plutôt que « châtiment » car la racine ʿ-dh-b a un double sens (douceur et douleur). Le ʿadhāb est ce qui résulte des actes — une conséquence, pas une punition arbitraire. L'alternative « châtiment » ajoute l'idée d'un juge qui punit, alors que le texte décrit un résultat naturel du recouvrement.

**considérable** — Le sens retenu est « Grandeur/Importance ». Le mot « considérable » traduit ʿaẓīm — ce qui est structurellement grand, important. L'alternative « grand » est trop vague.

§CRITIQUE§
**centres vs cœurs** — Les traductions courantes donnent « cœurs ». Le qalb en arabe n'est pas le cœur au sens médical — c'est le centre de la personne. Traduire par « cœur » ajoute une connotation sentimentale (le cœur qui aime) absente de q-l-b qui parle de retournement et de centre.

**conséquence vs châtiment** — Les traductions courantes donnent « châtiment ». Ce choix vient de l'interprétation qui fait de Dieu un juge punitif. Mais le texte dit ʿadhāb — la racine ʿ-dh-b parle aussi de douceur (eau douce). Le ʿadhāb est la conséquence qui enlève la douceur de la vie — c'est un résultat, pas une punition. Le scellement des cœurs et le voilement de la vue ne sont pas des punitions arbitraires — ils sont les conséquences du recouvrement (kafara). On recouvre → on ne peut plus voir ni entendre → on subit la conséquence de cette cécité.`,
    segments: [
      { fr: "a scellé", pos: "verbe", phon: "khatama", arabic: "خَتَمَ", word_key: "xtm", is_particle: false, sense_retenu: "sceller", position: 1 },
      { fr: "Dieu", phon: "allāhu", arabic: "ٱللَّهُ", is_particle: true, position: 2 },
      { fr: "sur", phon: "ʿalā", arabic: "عَلَىٰ", is_particle: true, position: 3 },
      { fr: "leurs centres", pos: "nom", phon: "qulūbihim", arabic: "قُلُوبِهِمْ", word_key: "qlb", is_particle: false, sense_retenu: "centre", position: 4 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 5 },
      { fr: "sur", phon: "ʿalā", arabic: "عَلَىٰ", is_particle: true, position: 6 },
      { fr: "leur audition", pos: "nom", phon: "samʿihim", arabic: "سَمْعِهِمْ", word_key: "sme", is_particle: false, sense_retenu: "audition", position: 7 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 8 },
      { fr: "sur", phon: "ʿalā", arabic: "عَلَىٰٓ", is_particle: true, position: 9 },
      { fr: "leur perception", pos: "nom", phon: "abṣārihim", arabic: "أَبْصَـٰرِهِمْ", word_key: "bsr", is_particle: false, sense_retenu: "perception", position: 10 },
      { fr: "un voilement", pos: "nom", phon: "ghishāwatun", arabic: "غِشَـٰوَةٌ", word_key: "ghsh", is_particle: false, sense_retenu: "voilement", position: 11 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 12 },
      { fr: "pour eux", phon: "lahum", arabic: "لَهُمْ", is_particle: true, position: 13 },
      { fr: "une conséquence", pos: "nom", phon: "ʿadhābun", arabic: "عَذَابٌ", word_key: "edb", is_particle: false, sense_retenu: "conséquence", position: 14 },
      { fr: "considérable", pos: "adjectif", phon: "ʿaẓīmun", arabic: "عَظِيمٌ", word_key: "ezm", is_particle: false, sense_retenu: "considérable", position: 15 }
    ],
    words: [
      {
        word_key: "xtm", position: 1, sense_chosen: "sceller",
        analysis_axes: { concept_chosen: "Sceau/Clôture", concepts: {
          "Sceau/Clôture": { status: "retenu", proof_ctx: "Le verbe khatama est un accompli de forme I de kh-t-m. D'après les sources étymologiques, kh-t-m signifie « apposer un sceau, fermer définitivement ». Le sceau est un objet physique qui ferme un contenant ou authentifie un document. Le scellement est irréversible sans bris du sceau. Dieu scelle les cœurs et l'audition — ils ne peuvent plus s'ouvrir aux signes. Ce n'est pas une punition mais une conséquence : le recouvrement (v6) a conduit au scellement (v7).",
            axe1_verset: "Le champ lexical est celui de la fermeture et du blocage : sceller, voilement, conséquence. Le scellement est l'acte premier — il ferme les cœurs et l'audition. Le voilement (ghishāwa) complète sur la vue. Les trois facultés (centre, audition, perception) sont bloquées — la personne est coupée de toute réception.",
            axe2_voisins: "Le verset 6 disait que l'avertissement est inefficace. Le verset 7 en donne la raison physique : les cœurs sont scellés, l'audition est scellée, la vue est voilée. Le verset 8 va introduire un troisième groupe : ceux qui prétendent accorder sécurité mais ne le font pas.",
            axe3_sourate: "Le scellement est un thème de la sourate al-Baqarah — il revient en 2:88 (nos cœurs sont ghulf — enveloppés). Le thème du blocage de la réception est central dans la sourate.",
            axe4_coherence: "Le Coran utilise khatama en 6:46 (si Dieu scellait votre audition et votre vue) et en 36:65 (Nous scellons leurs bouches). Le scellement est toujours un acte divin qui ferme une faculté.",
            axe5_frequence: "Pour la mission du khalifa, le scellement est l'échec ultime — la personne ne peut plus recevoir la direction. Le khalifa doit agir avant le scellement, pendant que les facultés sont encore ouvertes."
          },
          "Marque/Empreinte": { status: "nul", proof_ctx: "L'empreinte (le sceau comme marque) est un sens dérivé. Le verset parle de fermeture (ʿalā qulūbihim = sur leurs cœurs), pas de marquage." }
        }}
      },
      {
        word_key: "qlb", position: 4, sense_chosen: "centre",
        analysis_axes: { concept_chosen: "Coeur/Centre", concepts: {
          "Coeur/Centre": { status: "retenu", proof_ctx: "Le mot qulūbihim est le pluriel de qalb avec suffixe -him. D'après les sources étymologiques, q-l-b signifie « retourner, inverser, changer ». Le qalb est le centre de la personne — ce qui retourne, ce qui change de direction, ce qui réagit aux stimuli. Le scellement du qalb signifie que ce centre est figé — il ne peut plus retourner (se repentir, changer d'avis, recevoir de nouvelles informations). La distinction avec « Retournement/Changement » : le retournement est l'action, le centre est le lieu où l'action se produit.",
            axe1_verset: "Les centres, l'audition et la perception sont les trois facultés scellées/voilées. Le centre est le premier mentionné — c'est le plus important car c'est là que les décisions se prennent. Sceller le centre, c'est bloquer la capacité de décision.",
            axe2_voisins: "Le verset 6 disait que l'avertissement est inefficace. Les centres scellés expliquent pourquoi — l'avertissement n'atteint plus le lieu de décision.",
            axe3_sourate: "Le qalb est mentionné tout au long d'al-Baqarah (2:10, 2:74, 2:88, 2:97, 2:118, 2:204, 2:225, 2:260, 2:283). C'est le lieu de la foi, du doute, de la dureté et de la certitude.",
            axe4_coherence: "Le Coran utilise qalb plus de 130 fois. En 22:46, « ce ne sont pas les yeux qui sont aveugles mais les cœurs dans les poitrines ». Le qalb est le centre réel de la perception — plus important que les yeux.",
            axe5_frequence: "Pour la mission du khalifa, le centre est le lieu de la conscience. Un centre scellé ne peut plus exercer la mission — il est coupé de sa responsabilité."
          },
          "Retournement/Changement": { status: "probable", proof_ctx: "Le retournement est le sens verbal de q-l-b. Le scellement empêche le retournement — les centres scellés ne peuvent plus « retourner » (changer, se repentir). Le sens est intégré dans le sens « centre » comme sa fonction principale. La distinction : le retournement est ce que le qalb FAIT, le centre est ce que le qalb EST.",
            axe1_verset: "Le retournement serait compatible : Dieu a scellé leur capacité de retournement. Mais le texte dit qulūbihim (leurs centres), pas taqallubihim (leur retournement). Le texte nomme le lieu, pas la fonction.",
            axe2_voisins: "Le contexte parle de blocage des facultés. Le retournement bloqué est un aspect du centre scellé.",
            axe3_sourate: "La sourate parle de centres endurcis (2:74), pas de retournements.",
            axe4_coherence: "Le Coran utilise qalb au sens de centre/cœur dans la quasi-totalité des cas.",
            axe5_frequence: "Le retournement est une capacité du centre. Sceller le centre inclut le blocage du retournement."
          }
        }}
      },
      {
        word_key: "sme", position: 7, sense_chosen: "audition",
        analysis_axes: { concept_chosen: "Audition/Écoute", concepts: {
          "Audition/Écoute": { status: "retenu", proof_ctx: "Le mot samʿihim est un nom au génitif avec suffixe -him. D'après les sources étymologiques, s-m-ʿ signifie « entendre, percevoir par l'ouïe, écouter ». Le samʿ est la faculté d'audition, pas l'oreille (udhun). Le texte dit que Dieu a scellé leur samʿ (singulier collectif) — une seule audition partagée est scellée. L'audition est au singulier car c'est une faculté unique même si les oreilles sont doubles.",
            axe1_verset: "L'audition est la deuxième faculté scellée après le centre. La progression est : centre (décision) → audition (réception). Le scellement va du plus profond (le centre) au plus extérieur (l'audition). La perception visuelle n'est pas scellée mais voilée (ghishāwa) — une nuance importante.",
            axe2_voisins: "Le verset 6 parlait de l'inefficacité de l'avertissement. L'audition scellée explique physiquement pourquoi l'avertissement verbal ne passe plus.", axe3_sourate: "L'audition est un thème récurrent dans al-Baqarah — le Coran est récité (audition) avant d'être lu (perception).", axe4_coherence: "Le Coran mentionne le samʿ souvent avant le baṣar (audition avant perception) — l'audition est la première voie de réception des signes.", axe5_frequence: "L'audition est le premier canal de la mission du khalifa — il reçoit la direction par l'écoute avant la lecture."
          }
        }}
      },
      {
        word_key: "bsr", position: 10, sense_chosen: "perception",
        analysis_axes: { concept_chosen: "Vision/Perception", concepts: {
          "Vision/Perception": { status: "retenu", proof_ctx: "Le mot abṣārihim est le pluriel de baṣar avec suffixe -him. D'après les sources étymologiques, b-ṣ-r signifie « voir, percevoir, comprendre visuellement ». Le baṣar est la perception visuelle — elle inclut la compréhension de ce qu'on voit, pas juste la réception de la lumière. Le pluriel (contrairement au singulier de samʿ) indique que chaque personne a sa propre perception — la vue est personnelle. La distinction avec « Corps/Anatomie » : les yeux (aʿyun) sont les organes physiques, les abṣār sont les perceptions.",
            axe1_verset: "La perception est la troisième faculté bloquée, mais par un voile (ghishāwa), pas par un sceau (khatm). La nuance est importante : le sceau est apposé de l'extérieur et ferme complètement, le voile couvre mais peut être soulevé. La perception a encore une chance — elle est voilée, pas scellée.",
            axe2_voisins: "Le verset 6 parlait d'indifférence. Le verset 7 détaille les blocages. La perception voilée est le dernier blocage mentionné avant la conséquence (ʿadhāb ʿaẓīm).", axe3_sourate: "La perception est un thème central d'al-Baqarah — les signes sont à voir (2:164, 2:219, 2:266).", axe4_coherence: "En 22:46, les cœurs sont plus importants que les yeux pour la perception. Le Coran hiérarchise : centre > audition > perception.", axe5_frequence: "Pour le khalifa, la perception est l'outil de lecture du monde — un khalifa voilé ne peut pas lire les signes."
          }
        }}
      },
      {
        word_key: "ghsh", position: 11, sense_chosen: "voilement",
        analysis_axes: { concept_chosen: "Couverture/Voilement", concepts: {
          "Couverture/Voilement": { status: "retenu", proof_ctx: "Le mot ghishāwatun est un nom féminin indéfini au nominatif de gh-sh-w. D'après les sources étymologiques, gh-sh-w signifie « couvrir entièrement, envelopper, voiler ». La ghishāwa est un voile qui couvre complètement — comme un tissu qui recouvre un objet. L'écho avec kafara (recouvrir, v6) est direct : ceux qui recouvrent (kafara) sont recouverts (ghishāwa). Le recouvrement qu'ils ont fait leur revient.",
            axe1_verset: "Le voilement est réservé à la perception visuelle — les cœurs et l'audition sont scellés (fermeture définitive), la vue est voilée (couverture qui pourrait être ôtée). Cette gradation est significative.",
            axe2_voisins: "Le voilement complète le tableau des blocages commencé par le scellement. Les trois facultés sont neutralisées : sceau (cœur, audition), voile (vue).", axe3_sourate: "Le voilement rappelle le recouvrement (kufr) du verset 6 — un écho thématique fort.", axe4_coherence: "Le Coran utilise ghashiya (couvrir) en 12:107, 88:1. Le voilement est un thème récurrent.", axe5_frequence: "Le voilement empêche la mission du khalifa de lire les signes du monde."
          }
        }}
      },
      {
        word_key: "edb", position: 14, sense_chosen: "conséquence",
        analysis_axes: { concept_chosen: "Châtiment/Punition", concepts: {
          "Châtiment/Punition": { status: "retenu", proof_ctx: "Le mot ʿadhābun est un nom indéfini au nominatif de ʿ-dh-b. D'après les sources étymologiques, ʿ-dh-b a une dualité remarquable : ʿadhb (eau douce) et ʿadhāb (ce qui ôte la douceur). Le ʿadhāb est la privation de douceur — la conséquence qui rend la vie amère. Ce n'est pas une punition arbitraire mais le résultat naturel de la perte de douceur. Le mot est traduit « conséquence » plutôt que « châtiment » car le châtiment implique un juge qui punit, alors que le ʿadhāb est ce qui arrive quand on perd la douceur de la vie. Les cœurs scellés et la vue voilée ne sont pas des punitions — ce sont des conséquences du recouvrement, et le ʿadhāb est la suite logique.",
            axe1_verset: "La conséquence clôt le verset comme le bilan final : scellement + voilement + conséquence considérable. La progression est causale : recouvrement → blocage des facultés → perte de douceur (ʿadhāb).",
            axe2_voisins: "Les versets 6-7 décrivent la situation des recouvrants. Le ʿadhāb est la conclusion de cette description — ce qui les attend.", axe3_sourate: "Le ʿadhāb revient fréquemment dans al-Baqarah comme conséquence des actes.", axe4_coherence: "Le Coran utilise ʿadhāb 322 fois. En 2:10, le même mot revient pour les hypocrites — alīm (douloureux) au lieu de ʿaẓīm (considérable).", axe5_frequence: "Pour le khalifa, la conséquence est le mécanisme de responsabilité — les actes ont des résultats."
          },
          "Douceur": { status: "nul", proof_ctx: "La douceur (ʿadhb, eau douce) est le sens opposé de la même racine. Le ʿadhāb est la privation de cette douceur — hors contexte directement." }
        }}
      },
      {
        word_key: "ezm", position: 15, sense_chosen: "considérable",
        analysis_axes: { concept_chosen: "Grandeur/Importance", concepts: {
          "Grandeur/Importance": { status: "retenu", proof_ctx: "Le mot ʿaẓīmun est un adjectif de ʿ-ẓ-m. D'après les sources étymologiques, ʿ-ẓ-m signifie « être grand par la structure, par l'ossature ». Le ʿaẓīm est ce qui est structurellement grand — pas juste grand en taille mais grand en importance, en poids, en impact. La distinction avec « Structure/Ossature » : l'ossature est le sens physique (les os du corps), la grandeur est le sens abstrait.",
            axe1_verset: "Le mot ʿaẓīm qualifie la conséquence (ʿadhāb) — c'est une conséquence CONSIDÉRABLE, pas mineure. L'adjectif amplifie le sérieux de la situation.",
            axe2_voisins: "Le verset 10 utilisera alīm (douloureux) pour qualifier le ʿadhāb des hypocrites. La distinction ʿaẓīm (considérable, v7) vs alīm (douloureux, v10) montre des nuances dans les conséquences.", axe3_sourate: "La grandeur est un thème de la sourate — la sourate elle-même est la plus grande du Coran.", axe4_coherence: "Le Coran utilise ʿaẓīm 104 fois. ʿadhāb ʿaẓīm est une expression récurrente.", axe5_frequence: "L'importance de la conséquence motive la mission du khalifa — les enjeux sont considérables."
          }
        }}
      }
    ]
  },

  // =====================================================
  // VERSET 2:8 — وَمِنَ ٱلنَّاسِ مَن يَقُولُ ءَامَنَّا بِٱللَّهِ وَبِٱلْيَوْمِ ٱلْـَٔاخِرِ وَمَا هُم بِمُؤْمِنِينَ
  // verse_id=15, analysis_id=375
  // =====================================================
  8: {
    verse_id: 15,
    analysis_id: 375,
    translation_arab: "Et parmi les gens, il y a celui qui dit : « Nous avons accordé sécurité à Dieu et au jour dernier » — alors qu'ils ne sont pas de ceux qui accordent sécurité.",
    full_translation: "Parmi les gens, il y a ceux qui disent : « Nous croyons en Allah et au Jour dernier ! » tandis qu'en fait, ils n'y croient pas.",
    translation_explanation: `§DEMARCHE§
Le verset introduit un troisième groupe : après les muttaqīn (v2-5) et les recouvrants (v6-7), voici ceux qui prétendent accorder sécurité mais ne le font pas. La construction **wa mina al-nāsi** (et parmi les gens) ouvre un nouveau sujet. Le mot **al-nās** (les gens) vient de la racine n-w-s (être visible, se mouvoir). Le pronom relatif **man** (celui qui) est suivi du verbe **yaqūlu** (il dit), inaccompli de q-w-l (parler, énoncer). Le discours rapporté **āmannā** (nous avons accordé sécurité) est un accompli de forme IV de a-m-n à la première personne du pluriel — ils prétendent avoir DÉJÀ accompli l'acte. L'objet est **billāhi** (à Dieu) et **bil-yawmi al-ākhiri** (au jour dernier). La conclusion **wa mā hum bi-muʾminīna** est une négation emphatique : la construction mā + pronom + bi + participe actif est une négation renforcée en arabe. Le mot **muʾminīna** est le participe actif de forme IV de a-m-n — « ceux qui accordent sécurité activement ». Le texte dit qu'ils ne SONT PAS des personnes qui accordent sécurité — ce n'est pas qu'ils ont échoué, c'est que leur identité ne correspond pas à leur prétention.

§JUSTIFICATION§
**les gens** — Le sens retenu est « Humanité/Peuple ». Le mot « gens » traduit al-nās — les êtres humains visibles, le peuple.

**dit** — Le sens retenu est « Parole/Énonciation ». Le mot « dit » traduit yaqūlu — énoncer un propos. L'inaccompli indique une habitude : il dit et redit.

**accordé sécurité** — Même sens retenu qu'aux versets 3-4 (Sécurité/Confiance). La forme est l'accompli (āmannā) — ils affirment avoir DÉJÀ fait l'acte.

§CRITIQUE§
**accordé sécurité vs cru** — Les traductions courantes donnent « nous croyons ». Même critique qu'au verset 3 : la forme IV est causative et active, pas un état intérieur passif. Les hypocrites DISENT avoir accordé sécurité — la fausseté porte sur l'acte, pas sur un sentiment intérieur. Si āmana signifiait « croire », la fausseté serait intérieure (ils mentent sur leur état d'esprit). Mais si āmana signifie « accorder sécurité », la fausseté est extérieure (ils prétendent avoir fait un acte qu'ils n'ont pas fait). Le verset suivant (v9) parlera de tromperie (khidāʿ) — ce qui confirme que le mensonge porte sur un acte, pas sur un sentiment.

**tandis qu'en fait** — L'ajout « en fait » dans la traduction Hamidullah est une interprétation. Le texte dit simplement « wa mā hum bi-muʾminīna » (et ils ne sont pas de ceux qui accordent sécurité).`,
    segments: [
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 1 },
      { fr: "parmi", phon: "mina", arabic: "مِنَ", is_particle: true, position: 2 },
      { fr: "les gens", pos: "nom", phon: "an-nāsi", arabic: "ٱلنَّاسِ", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 3 },
      { fr: "celui qui", phon: "man", arabic: "مَن", is_particle: true, position: 4 },
      { fr: "dit", pos: "verbe", phon: "yaqūlu", arabic: "يَقُولُ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 5 },
      { fr: "nous avons accordé sécurité", pos: "verbe", phon: "āmannā", arabic: "ءَامَنَّا", word_key: "amn", is_particle: false, sense_retenu: "accorder sécurité", position: 6 },
      { fr: "à", phon: "bi", arabic: "بِ", is_particle: true, position: 7 },
      { fr: "Dieu", pos: "nom", phon: "allāhi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 8 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 9 },
      { fr: "à", phon: "bi", arabic: "بِ", is_particle: true, position: 10 },
      { fr: "le jour", pos: "nom", phon: "al-yawmi", arabic: "ٱلْيَوْمِ", word_key: "ywm", is_particle: false, sense_retenu: "jour", position: 11 },
      { fr: "dernier", pos: "adjectif", phon: "al-ākhiri", arabic: "ٱلْـَٔاخِرِ", word_key: "axr", is_particle: false, sense_retenu: "dernier", position: 12 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 13 },
      { fr: "ils ne sont pas", phon: "mā hum", arabic: "مَا هُم", is_particle: true, position: 14 },
      { fr: "de ceux qui accordent sécurité", pos: "participe_actif", phon: "bi-muʾminīna", arabic: "بِمُؤْمِنِينَ", word_key: "amn", is_particle: false, sense_retenu: "accorder sécurité", position: 15 }
    ],
    words: [
      {
        word_key: "nws", position: 3, sense_chosen: "gens",
        analysis_axes: { concept_chosen: "Humanité/Peuple", concepts: {
          "Humanité/Peuple": { status: "retenu", proof_ctx: "Le mot al-nāsi est un nom défini au génitif de n-w-s. D'après les sources étymologiques, n-w-s/n-ā-s désigne les êtres humains en tant que groupe visible. L'article al- les rend définis : les gens connus, le peuple. Le verset situe les hypocrites « parmi les gens » — ils ne sont pas un groupe séparé, ils sont mélangés à la population. La distinction avec « Perception/Visibilité » : la perception est le sens verbal (voir), les gens est le sens nominal (les humains visibles).",
            axe1_verset: "Le champ lexical est celui de la tromperie sociale : parmi les gens → dire → prétendre → ne pas être. Les gens sont le milieu social dans lequel les hypocrites se cachent.",
            axe2_voisins: "Les versets 2-5 parlaient des muttaqīn, les versets 6-7 des recouvrants. Le verset 8 situe un troisième groupe parmi le peuple. Les gens sont le décor, les hypocrites sont les acteurs cachés.", axe3_sourate: "Al-Baqarah traite abondamment des gens (al-nās) et de leurs réactions face à la direction.", axe4_coherence: "Le Coran utilise al-nās 241 fois. La construction wa mina al-nāsi man... (et parmi les gens il y a celui qui...) revient en 2:200, 2:204, 2:207 — elle introduit toujours un profil spécifique.", axe5_frequence: "Les gens sont le terrain de la mission du khalifa — c'est parmi eux qu'il doit empêcher la corruption."
          }
        }}
      },
      {
        word_key: "qwl", position: 5, sense_chosen: "dire",
        analysis_axes: { concept_chosen: "Parole/Énonciation", concepts: {
          "Parole/Énonciation": { status: "retenu", proof_ctx: "Le verbe yaqūlu est un inaccompli de forme I de q-w-l. D'après les sources étymologiques, q-w-l signifie « prononcer des mots, énoncer un propos ». L'inaccompli indique une habitude : il dit et redit cette prétention. Le verbe introduit un discours direct (āmannā) — il sert de cadre à la citation. La parole est l'outil de la tromperie : l'hypocrite parle mais n'agit pas.",
            axe1_verset: "La parole est le véhicule de la tromperie : dire ≠ être. Le verset oppose le dire (yaqūlu) à l'être (mā hum bi-muʾminīna). Ceux qui DISENT accorder sécurité ne SONT PAS de ceux qui l'accordent.",
            axe2_voisins: "Le verset 9 va révéler l'intention derrière la parole : la tromperie (khidāʿ). La parole du verset 8 est l'outil, la tromperie du verset 9 est l'intention.", axe3_sourate: "La parole mensongère est un thème de la sourate al-Baqarah (2:80, 2:111, 2:135).", axe4_coherence: "Le Coran utilise qāla/yaqūlu plus de 1700 fois — c'est le verbe le plus fréquent du Coran. La parole est l'outil premier de l'être humain.", axe5_frequence: "La parole est l'outil du khalifa — mais aussi l'outil de sa corruption quand elle est mensongère."
          }
        }}
      }
    ]
  },

  // =====================================================
  // VERSET 2:9 — يُخَـٰدِعُونَ ٱللَّهَ وَٱلَّذِينَ ءَامَنُوا۟ وَمَا يَخْدَعُونَ إِلَّآ أَنفُسَهُمْ وَمَا يَشْعُرُونَ
  // verse_id=16, analysis_id=373
  // =====================================================
  9: {
    verse_id: 16,
    analysis_id: 373,
    translation_arab: "Ils tentent de tromper Dieu et ceux qui ont accordé sécurité, mais ils ne trompent que leurs propres êtres, et ils n'en ont pas conscience.",
    full_translation: "Ils cherchent à tromper Allah et les croyants; mais ils ne trompent qu'eux-mêmes, et ils ne s'en rendent pas compte.",
    translation_explanation: `§DEMARCHE§
Le verset révèle l'intention derrière la prétention du verset 8. Le verbe **yukhādiʿūna** est un inaccompli de forme III de kh-d-ʿ (tromper). La forme III implique la réciprocité ou la tentative — « ils tentent de tromper, ils rivalisent de tromperie ». L'objet direct est **allāha** (Dieu, à l'accusatif) et **alladhīna āmanū** (ceux qui ont accordé sécurité). Le verbe **āmanū** est l'accompli de forme IV de a-m-n — ceux qui ONT accordé sécurité (acte achevé). La construction **wa mā yakhdaʿūna illā anfusahum** est une exception restrictive : ils ne trompent PERSONNE sauf eux-mêmes. Le mot **anfusahum** (leurs êtres/âmes, pluriel de nafs avec suffixe -hum) de la racine n-f-s (souffle, être, âme). La nafs est l'être même de la personne. Le verbe **yashʿurūna** est un inaccompli de forme I de sh-ʿ-r (percevoir, avoir conscience). D'après les sources étymologiques, sh-ʿ-r signifie « percevoir par les sens fins, avoir conscience de quelque chose de subtil ». La négation mā yashʿurūna signifie « ils n'ont pas conscience » — la tromperie qu'ils se font à eux-mêmes échappe à leur propre perception.

§JUSTIFICATION§
**tentent de tromper** — Le sens retenu est « Tromperie/Ruse ». La forme III de kh-d-ʿ ajoute l'idée de tentative ou de réciprocité. Le mot « tromper » traduit le sens premier de kh-d-ʿ : faire croire à quelqu'un ce qui n'est pas.

**leurs propres êtres** — Le sens retenu est « Âme/Être ». L'expression « leurs propres êtres » traduit anfusahum — leurs nafs, ce qu'ils sont vraiment. L'alternative « eux-mêmes » est plus fluide en français courant mais « leurs propres êtres » est plus fidèle à n-f-s qui désigne l'être profond.

**n'en ont pas conscience** — Le sens retenu est « Perception/Conscience ». L'expression traduit mā yashʿurūna — ils ne perçoivent pas que la tromperie leur revient. Le shuʿūr est une perception fine, subtile — l'ironie est qu'ils croient être malins mais leur conscience fine est éteinte.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens pour ce verset. La nuance « tentent de tromper » (forme III) vs « trompent » est parfois perdue — certaines traductions simplifient en « ils trompent Dieu » sans la nuance de tentative.`,
    segments: [
      { fr: "ils tentent de tromper", pos: "verbe", phon: "yukhādiʿūna", arabic: "يُخَـٰدِعُونَ", word_key: "xde", is_particle: false, sense_retenu: "tromper", position: 1 },
      { fr: "Dieu", pos: "nom", phon: "allāha", arabic: "ٱللَّهَ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 2 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 3 },
      { fr: "ceux qui", phon: "alladhīna", arabic: "ٱلَّذِينَ", is_particle: true, position: 4 },
      { fr: "ont accordé sécurité", pos: "verbe", phon: "āmanū", arabic: "ءَامَنُوا۟", word_key: "amn", is_particle: false, sense_retenu: "accorder sécurité", position: 5 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 6 },
      { fr: "ils ne trompent pas", phon: "mā", arabic: "مَا", is_particle: true, position: 7 },
      { fr: "ils ne trompent", pos: "verbe", phon: "yakhdaʿūna", arabic: "يَخْدَعُونَ", word_key: "xde", is_particle: false, sense_retenu: "tromper", position: 8 },
      { fr: "sauf", phon: "illā", arabic: "إِلَّآ", is_particle: true, position: 9 },
      { fr: "leurs propres êtres", pos: "nom", phon: "anfusahum", arabic: "أَنفُسَهُمْ", word_key: "nfs", is_particle: false, sense_retenu: "être", position: 10 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 11 },
      { fr: "ils n'en ont pas", phon: "mā", arabic: "مَا", is_particle: true, position: 12 },
      { fr: "conscience", pos: "verbe", phon: "yashʿurūna", arabic: "يَشْعُرُونَ", word_key: "sher", is_particle: false, sense_retenu: "avoir conscience", position: 13 }
    ],
    words: [
      {
        word_key: "xde", position: 1, sense_chosen: "tromper",
        analysis_axes: { concept_chosen: "Tromperie/Ruse", concepts: {
          "Tromperie/Ruse": { status: "retenu", proof_ctx: "Le verbe yukhādiʿūna est un inaccompli de forme III de kh-d-ʿ. D'après les sources étymologiques, kh-d-ʿ signifie « tromper, faire croire ce qui n'est pas, cacher la vérité sous une apparence ». La forme III ajoute la réciprocité ou la tentative : ils essaient de rivaliser de tromperie avec Dieu et les croyants. L'inaccompli indique une habitude continue — ils tentent de tromper en permanence. La tromperie est le lien entre le verset 8 (dire sans être) et le verset 9 (l'intention derrière le dire).",
            axe1_verset: "Le champ lexical est la tromperie et ses conséquences : tenter de tromper → ne tromper que soi → ne pas en avoir conscience. La tromperie est présentée comme un boomerang — elle revient à son auteur. Le verset est structuré en trois temps : l'acte (tromper), le résultat (ne tromper que soi), le constat (inconscience).",
            axe2_voisins: "Le verset 8 montrait la prétention (dire sans être). Le verset 9 révèle l'intention (tromper). Le verset 10 donnera la conséquence (maladie dans le centre). La progression est : prétention → tromperie → maladie.",
            axe3_sourate: "La tromperie est un thème important d'al-Baqarah — les hypocrites sont ceux qui trompent par leur parole.", axe4_coherence: "Le Coran utilise khadaʿa en 4:142 (les hypocrites tentent de tromper Dieu mais Il les trompe). Le retournement de la tromperie est un thème coranique.", axe5_frequence: "La tromperie est l'ennemi de la mission du khalifa — elle mine la confiance sociale."
          }
        }}
      },
      {
        word_key: "nfs", position: 10, sense_chosen: "être",
        analysis_axes: { concept_chosen: "Âme/Être", concepts: {
          "Âme/Être": { status: "retenu", proof_ctx: "Le mot anfusahum est le pluriel de nafs avec suffixe -hum. D'après les sources étymologiques, n-f-s signifie « souffle, être, âme, soi-même ». La nafs est l'être profond de la personne — ce qu'elle est vraiment, pas son apparence. La construction illā anfusahum (sauf leurs propres êtres) signifie que la tromperie n'atteint personne sauf eux-mêmes. Le nafs trompé est le nafs qui se croit malin mais se détruit de l'intérieur.",
            axe1_verset: "L'être (nafs) est la victime de la tromperie : les trompeurs ne trompent que leur propre être. Le verset oppose l'intention (tromper Dieu et les croyants) au résultat (ne tromper que soi). L'être est le lieu où la tromperie se retourne.",
            axe2_voisins: "Le verset 10 parlera de maladie dans les centres (qulūb). La nafs trompée (v9) et le qalb malade (v10) sont deux facettes du même dommage intérieur.", axe3_sourate: "La nafs est un thème récurrent dans al-Baqarah (2:48, 2:233, 2:286).", axe4_coherence: "Le Coran utilise nafs 295 fois. En 2:286, « Dieu ne charge une nafs que de sa capacité ». La nafs est l'unité de responsabilité.", axe5_frequence: "L'être du khalifa est son outil — s'il le trompe, il trompe sa mission."
          }
        }}
      },
      {
        word_key: "sher", position: 13, sense_chosen: "avoir conscience",
        analysis_axes: { concept_chosen: "Perception/Conscience", concepts: {
          "Perception/Conscience": { status: "retenu", proof_ctx: "Le verbe yashʿurūna est un inaccompli de forme I de sh-ʿ-r. D'après les sources étymologiques, sh-ʿ-r signifie « percevoir par les sens fins, avoir conscience de quelque chose de subtil ». Le shuʿūr est la perception fine — celle qui détecte les nuances, les signes invisibles, les subtilités. La négation mā yashʿurūna est doublement ironique : ces gens qui se croient malins (trompeurs) n'ont même pas la perception fine de voir qu'ils se trompent eux-mêmes.",
            axe1_verset: "La conscience est l'ultime absence : ils trompent (acte), ne trompent que soi (résultat), n'en ont pas conscience (absence de perception). C'est le triple échec : l'acte échoue, le résultat se retourne, et ils ne le voient même pas.",
            axe2_voisins: "Le verset 7 parlait du voilement de la perception (ghishāwa ʿalā abṣārihim). Le verset 9 montre une autre forme de cécité : celle de la conscience fine (shuʿūr). Les recouvrants sont voilés de l'extérieur, les hypocrites sont aveugles de l'intérieur.", axe3_sourate: "La perception est un thème central de la sourate.", axe4_coherence: "Le Coran utilise mā yashʿurūna 13 fois, toujours pour décrire des personnes inconscientes de leur propre situation.", axe5_frequence: "La conscience est l'outil le plus fin du khalifa — sans elle, la mission échoue sans qu'il le sache."
          },
          "Cheveux/Poils": { status: "nul", proof_ctx: "Le sens physique de sh-ʿ-r (cheveux, poils) est hors contexte." },
          "Poésie/Expression": { status: "nul", proof_ctx: "Le sens « poésie » (shiʿr) est dérivé de la perception fine. Hors contexte." }
        }}
      }
    ]
  },

  // =====================================================
  // VERSET 2:10 — فِى قُلُوبِهِم مَّرَضٌ فَزَادَهُمُ ٱللَّهُ مَرَضًا وَلَهُمْ عَذَابٌ أَلِيمٌ بِمَا كَانُوا۟ يَكْذِبُونَ
  // verse_id=17, analysis_id=376
  // NOTE: word_key "zwd" should be "zyd" (ز ي د = augmenter) — zādahum = il leur a augmenté
  // =====================================================
  10: {
    verse_id: 17,
    analysis_id: 376,
    translation_arab: "Dans leurs centres il y a une maladie, alors Dieu leur a augmenté la maladie, et pour eux il y a une conséquence douloureuse pour ce qu'ils avaient l'habitude de mentir.",
    full_translation: "Il y a dans leurs cœurs une maladie (de doute et d'hypocrisie), et Allah laisse croître leur maladie. Ils auront un châtiment douloureux, pour avoir menti.",
    translation_explanation: `§DEMARCHE§
Le verset donne le diagnostic intérieur des hypocrites. La construction **fī qulūbihim** (dans leurs centres) place la maladie à l'intérieur. Le mot **maraḍun** (maladie) est un nom indéfini au nominatif de m-r-ḍ (être malade, être faible). D'après les sources étymologiques, m-r-ḍ désigne toute faiblesse ou défaut qui éloigne de l'état sain — que ce soit physique ou moral. La maladie est indéfinie (pas al-maraḍ) — c'est une maladie, pas LA maladie connue. La particule **fa** (alors, conséquemment) introduit la suite logique : puisqu'il y a une maladie, Dieu l'a augmentée. Le verbe **zādahum** est un accompli de forme I de z-y-d (augmenter, ajouter), avec suffixe -hum (eux). Le sujet est **allāhu** (Dieu). L'accompli indique un fait achevé — Dieu a déjà augmenté leur maladie. Le complément **maraḍan** (maladie, accusatif) est l'objet de l'augmentation. La construction **wa lahum ʿadhābun alīmun** est parallèle au verset 7 (wa lahum ʿadhābun ʿaẓīmun) mais avec l'adjectif **alīm** (douloureux) au lieu de ʿaẓīm (considérable). La racine ʾ-l-m signifie « douleur ». La conjonction **bimā** (pour ce que) introduit la cause. Le verbe **kānū** (ils étaient, accompli de k-w-n) avec **yakdhibūna** (ils mentent, inaccompli de k-dh-b) forme le passé d'habitude : « ils avaient l'habitude de mentir ». La racine k-dh-b signifie « mentir, dire le faux ». Le mensonge est la cause de la conséquence douloureuse.

§JUSTIFICATION§
**maladie** — Le sens retenu est « Maladie/Faiblesse ». Le mot « maladie » traduit maraḍ — tout état qui éloigne de la santé. La maladie ici est dans les centres (qulūb), pas dans les corps — c'est une maladie de la capacité de jugement, pas une infection physique.

**augmenté** — Le sens retenu est « Augmentation/Surplus ». Le mot « augmenté » traduit zāda — ajouter plus de la même chose. Dieu n'a pas créé la maladie — il a AUGMENTÉ une maladie déjà présente. La maladie était là avant (par le choix de l'hypocrite), Dieu l'a aggravée.

**douloureuse** — Le mot « douloureuse » traduit alīm de la racine ʾ-l-m (douleur). Par rapport au verset 7 qui disait ʿaẓīm (considérable), le verset 10 dit alīm (douloureuse) — la conséquence des hypocrites est décrite par sa douleur, celle des recouvrants par son ampleur.

**mentir** — Le sens retenu est « Mensonge/Fausseté ». Le mot « mentir » traduit yakdhibūna — dire ce qui ne correspond pas à la réalité. Le mensonge est la cause explicite de la conséquence : la construction bimā kānū yakdhibūna lie directement le mensonge habituel à la conséquence douloureuse.

§CRITIQUE§
**(de doute et d'hypocrisie)** — L'ajout entre parenthèses dans Hamidullah est une interprétation exégétique. Le texte dit « une maladie » sans préciser sa nature. La maladie n'est ni le doute (rayb) ni l'hypocrisie (nifāq) — c'est un terme médical (maraḍ) qui décrit un état de faiblesse. Le texte ne précise pas la nature de cette maladie — le faire serait ajouter au texte.

**laisse croître vs a augmenté** — Hamidullah traduit « laisse croître » qui implique une passivité de Dieu. Le texte dit fa-zādahum — Dieu a AUGMENTÉ (verbe actif, accompli). La distinction est importante : le texte ne dit pas que Dieu laisse faire, il dit que Dieu agit en augmentant. C'est plus direct et plus fort.`,
    segments: [
      { fr: "dans", phon: "fī", arabic: "فِى", is_particle: true, position: 1 },
      { fr: "leurs centres", pos: "nom", phon: "qulūbihim", arabic: "قُلُوبِهِمْ", word_key: "qlb", is_particle: false, sense_retenu: "centre", position: 2 },
      { fr: "une maladie", pos: "nom", phon: "maraḍun", arabic: "مَّرَضٌ", word_key: "mrd", is_particle: false, sense_retenu: "maladie", position: 3 },
      { fr: "alors", phon: "fa", arabic: "فَ", is_particle: true, position: 4 },
      { fr: "leur a augmenté", pos: "verbe", phon: "zādahum", arabic: "زَادَهُمْ", word_key: "zyd", is_particle: false, sense_retenu: "augmenter", position: 5 },
      { fr: "Dieu", pos: "nom", phon: "allāhu", arabic: "ٱللَّهُ", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 6 },
      { fr: "en maladie", pos: "nom", phon: "maraḍan", arabic: "مَرَضًا", word_key: "mrd", is_particle: false, sense_retenu: "maladie", position: 7 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 8 },
      { fr: "pour eux", phon: "lahum", arabic: "لَهُمْ", is_particle: true, position: 9 },
      { fr: "une conséquence", pos: "nom", phon: "ʿadhābun", arabic: "عَذَابٌ", word_key: "edb", is_particle: false, sense_retenu: "conséquence", position: 10 },
      { fr: "douloureuse", pos: "adjectif", phon: "alīmun", arabic: "أَلِيمٌ", word_key: "alm", is_particle: false, sense_retenu: "douloureux", position: 11 },
      { fr: "pour ce que", phon: "bimā", arabic: "بِمَا", is_particle: true, position: 12 },
      { fr: "ils avaient l'habitude de", pos: "verbe", phon: "kānū", arabic: "كَانُوا۟", word_key: "kwn", is_particle: false, sense_retenu: "être", position: 13 },
      { fr: "mentir", pos: "verbe", phon: "yakdhibūna", arabic: "يَكْذِبُونَ", word_key: "kdb", is_particle: false, sense_retenu: "mentir", position: 14 }
    ],
    words: [
      {
        word_key: "mrd", position: 3, sense_chosen: "maladie",
        analysis_axes: { concept_chosen: "Maladie/Faiblesse", concepts: {
          "Maladie/Faiblesse": { status: "retenu", proof_ctx: "Le mot maraḍun est un nom indéfini au nominatif de m-r-ḍ. D'après les sources étymologiques, m-r-ḍ signifie « être malade, être dans un état de faiblesse qui éloigne de la santé ». La maladie ici est dans les centres (qulūb) — c'est une maladie métaphorique qui affecte la capacité de jugement. Le texte ne précise pas la nature de la maladie — il dit simplement maraḍ (maladie), sans ajouter « de doute » ou « d'hypocrisie ». La maladie est indéfinie (pas al-maraḍ) — c'est une certaine maladie, pas la maladie en général.",
            axe1_verset: "Le champ lexical est médical : maladie → augmentation de la maladie → conséquence douloureuse. Le verset utilise le vocabulaire de la médecine pour décrire l'état intérieur des hypocrites. La maladie est dans les centres — là où les décisions se prennent. Un centre malade prend de mauvaises décisions.",
            axe2_voisins: "Le verset 9 parlait de tromperie et d'inconscience. Le verset 10 en donne le diagnostic : la maladie du centre. La tromperie n'est pas un choix libre — elle est le symptôme d'une maladie. Les hypocrites ne trompent pas par malice pure mais par maladie de leur centre.",
            axe3_sourate: "La maladie du centre revient en 2:10 et indirectement en 2:74 (les centres durcis comme la pierre). La sourate utilise le vocabulaire médical pour les cœurs malades.", axe4_coherence: "Le Coran utilise maraḍ fī qulūbihim en 5:52, 8:49, 9:125, 22:53, 24:50, 33:12, 33:32, 33:60, 47:20, 47:29, 74:31. C'est une expression récurrente qui décrit toujours les hypocrites ou les faibles de foi.", axe5_frequence: "La maladie du centre empêche la mission du khalifa. Un khalifa au centre malade ne peut pas juger correctement ni empêcher la corruption."
          }
        }}
      },
      {
        word_key: "zyd", position: 5, sense_chosen: "augmenter",
        analysis_axes: { concept_chosen: "Augmentation/Surplus", concepts: {
          "Augmentation/Surplus": { status: "retenu", proof_ctx: "Le verbe zādahum est un accompli de forme I de z-y-d, avec suffixe -hum. D'après les sources étymologiques, z-y-d signifie « ajouter, augmenter, accroître ». Le sujet est Dieu — c'est Dieu qui augmente la maladie. L'accompli indique que l'augmentation est un fait achevé. Le fa (alors, conséquemment) lie l'augmentation à la maladie préexistante : parce qu'il y a une maladie, Dieu l'a augmentée. C'est une aggravation, pas une création — la maladie était là avant, par le choix de l'hypocrite.",
            axe1_verset: "L'augmentation est le mécanisme d'aggravation : maladie → Dieu augmente → maladie augmentée. La spirale est descendante : le choix initial (hypocrisie) crée une maladie, l'augmentation divine l'aggrave, la conséquence douloureuse en résulte.",
            axe2_voisins: "Le verset 9 montrait l'inconscience des hypocrites. Le verset 10 montre que cette inconscience a un prix : la maladie augmente. L'inconscience empêche la guérison — si on ne sait pas qu'on est malade, on ne se soigne pas.", axe3_sourate: "L'augmentation de la maladie est un thème de la sourate — elle montre que le choix de l'hypocrisie n'est pas statique, il empire.", axe4_coherence: "Le Coran utilise zāda/yazīdu 59 fois. En 9:125, « elle leur a ajouté de la souillure à leur souillure ». L'augmentation du mal est un pattern coranique.", axe5_frequence: "L'augmentation montre que l'inaction face à la maladie aggrave la situation. Le khalifa doit agir avant que la maladie n'augmente."
          }
        }}
      },
      {
        word_key: "kdb", position: 14, sense_chosen: "mentir",
        analysis_axes: { concept_chosen: "Mensonge/Fausseté", concepts: {
          "Mensonge/Fausseté": { status: "retenu", proof_ctx: "Le verbe yakdhibūna est un inaccompli de forme I de k-dh-b. D'après les sources étymologiques, k-dh-b signifie « dire ce qui ne correspond pas à la réalité, mentir ». Le mensonge est l'écart entre la parole et la réalité. La construction bimā kānū yakdhibūna (pour ce qu'ils avaient l'habitude de mentir) lie le mensonge à la conséquence douloureuse par la causalité. Le kānū (ils étaient) + inaccompli (yakdhibūna) forme le passé d'habitude : ce n'est pas un mensonge ponctuel, c'est une habitude de mensonge.",
            axe1_verset: "Le mensonge est la cause de la conséquence douloureuse. Le verset est structuré en diagnostic (maladie) → aggravation (Dieu augmente) → pronostic (conséquence douloureuse) → étiologie (mensonge habituel). Le mensonge est la racine du mal.",
            axe2_voisins: "Le verset 8 montrait la prétention mensongère (dire āmannā sans l'être). Le verset 9 montrait la tromperie. Le verset 10 nomme la cause : le mensonge habituel (yakdhibūna en habitude). La progression est : prétention → tromperie → mensonge → maladie → conséquence.",
            axe3_sourate: "Le mensonge est un thème central de la section sur les hypocrites (2:8-20). La sourate va consacrer 13 versets à décrire ces menteurs.", axe4_coherence: "Le Coran utilise kadhaba/yakdhibu plus de 200 fois. Le mensonge est l'un des actes les plus condamnés dans le Coran — il est la racine de la corruption.", axe5_frequence: "Le mensonge est l'ennemi absolu de la mission du khalifa. Le khalifa est le garant de la vérité — le mensonge détruit les fondements de la civilisation."
          },
          "Accusation": { status: "nul", proof_ctx: "L'accusation fausse (takdhīb) est un sens dérivé de k-dh-b (accuser quelqu'un de mensonge). Le verset parle de mentir activement, pas d'accuser." }
        }}
      }
    ]
  }
};

// =====================================================
// TRAITEMENT DES VERSETS
// =====================================================
async function processVerse(verseNum) {
  const data = verseData[verseNum];
  if (!data) return;

  console.log(`\nVERSET 2:${verseNum} — TRAITEMENT`);

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
    } else {
      const ax = word.analysis_axes;
      console.log(`  ${word.word_key} (pos ${word.position}) → sens "${ax.concept_chosen}" → mot "${word.sense_chosen}"`);
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
  } else {
    console.log(`  Traduction : "${data.translation_arab}"`);
  }

  console.log(`VERSET 2:${verseNum} — TERMINÉ`);
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [13, 14, 15, 16, 17];
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', verseIds);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnée à synchroniser');
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

    if (!wa) continue;

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
    console.log(`  ${key} → synced`);
  }
}

// =====================================================
// WORD DAILY
// =====================================================
async function insertWordDaily() {
  console.log('\n=== WORD DAILY ===');

  const dailyData = [
    { word_key: 'kfr', sense: 'recouvrir', arabic: 'كُفْر', phon: 'kufr', phrases: [
      "La neige a recouvert toute la ville en une nuit.",
      "Il a recouvert la vérité avec des excuses pour ne pas être blâmé.",
      "Le lierre a recouvert le mur du jardin en quelques années."
    ]},
    { word_key: 'swy', sense: 'égal', arabic: 'سَوَاء', phon: 'sawāʾ', phrases: [
      "C'est égal pour moi, tu peux choisir n'importe quel restaurant.",
      "Tous les candidats sont égaux face à l'épreuve — mêmes conditions pour tous.",
      "Que je parte ou que je reste, c'est égal — le résultat sera le même."
    ]},
    { word_key: 'ndh r', sense: 'avertir', arabic: 'نَذْر', phon: 'nadhr', phrases: [
      "Je t'avertis : si tu continues à conduire comme ça, tu vas avoir un accident.",
      "Le médecin l'a averti que son taux de sucre était trop élevé.",
      "On nous a avertis de l'orage bien avant qu'il n'arrive."
    ]},
    { word_key: 'xtm', sense: 'sceller', arabic: 'خَتْم', phon: 'khatm', phrases: [
      "Il a scellé l'enveloppe avec de la cire avant de l'envoyer.",
      "Le contrat est scellé — on ne peut plus revenir en arrière.",
      "Elle a scellé la promesse avec une poignée de main ferme."
    ]},
    { word_key: 'qlb', sense: 'centre', arabic: 'قَلْب', phon: 'qalb', phrases: [
      "Le centre de la ville est toujours animé le samedi soir.",
      "Il faut aller au centre du problème pour trouver la solution.",
      "Le centre de sa personnalité, c'est sa générosité naturelle."
    ]},
    { word_key: 'sme', sense: 'audition', arabic: 'سَمْع', phon: 'samʿ', phrases: [
      "Son audition a baissé avec l'âge mais il entend encore bien.",
      "L'audition du témoin a duré deux heures au tribunal.",
      "Protège ton audition — ne mets pas le volume trop fort."
    ]},
    { word_key: 'bsr', sense: 'perception', arabic: 'بَصَر', phon: 'baṣar', phrases: [
      "Sa perception des couleurs est exceptionnelle — il voit des nuances que personne ne voit.",
      "La perception de la réalité change selon le point de vue.",
      "Il a une perception très fine des émotions des autres."
    ]},
    { word_key: 'ghsh', sense: 'voilement', arabic: 'غِشَاوَة', phon: 'ghishāwa', phrases: [
      "Un voilement de brume recouvrait la vallée au petit matin.",
      "Le voilement de la vérité finit toujours par se dissiper.",
      "Il y avait comme un voilement devant ses yeux à cause de la fatigue."
    ]},
    { word_key: 'edb', sense: 'conséquence', arabic: 'عَذَاب', phon: 'ʿadhāb', phrases: [
      "Chaque acte a sa conséquence — on ne peut pas y échapper.",
      "La conséquence de son mensonge a été la perte de confiance de ses amis.",
      "Les conséquences du réchauffement climatique se voient déjà."
    ]},
    { word_key: 'ezm', sense: 'considérable', arabic: 'عَظِيم', phon: 'ʿaẓīm', phrases: [
      "Le travail qu'elle a fourni est considérable — elle mérite une promotion.",
      "Les dégâts de la tempête ont été considérables dans tout le quartier.",
      "C'est un effort considérable que de pardonner quand on a été blessé."
    ]},
    { word_key: 'nws', sense: 'gens', arabic: 'نَاس', phon: 'nās', phrases: [
      "Les gens du quartier se sont mobilisés pour aider les sinistrés.",
      "Quand on écoute les gens, on apprend toujours quelque chose.",
      "Il y avait beaucoup de gens au marché ce matin."
    ]},
    { word_key: 'qwl', sense: 'dire', arabic: 'قَوْل', phon: 'qawl', phrases: [
      "Dire la vérité, c'est parfois difficile mais toujours nécessaire.",
      "Il a dit ce qu'il pensait sans détour ni diplomatie.",
      "On dit que la patience est la mère de toutes les vertus."
    ]},
    { word_key: 'xde', sense: 'tromper', arabic: 'خِدَاع', phon: 'khidāʿ', phrases: [
      "Tromper les gens pour son profit, c'est perdre sa dignité.",
      "Il a été trompé par un vendeur malhonnête sur internet.",
      "On ne peut pas tromper tout le monde tout le temps."
    ]},
    { word_key: 'nfs', sense: 'être', arabic: 'نَفْس', phon: 'nafs', phrases: [
      "Connais-toi toi-même — ton être profond est ta plus grande richesse.",
      "Prendre soin de son être intérieur est aussi important que son corps.",
      "Chaque être humain a ses forces et ses faiblesses."
    ]},
    { word_key: 'sher', sense: 'conscience', arabic: 'شُعُور', phon: 'shuʿūr', phrases: [
      "Il n'a même pas eu conscience de sa propre erreur.",
      "La conscience des enjeux est le premier pas vers la solution.",
      "Elle a une conscience aiguë de ce qui se passe autour d'elle."
    ]},
    { word_key: 'mrd', sense: 'maladie', arabic: 'مَرَض', phon: 'maraḍ', phrases: [
      "La maladie l'a affaibli mais pas découragé.",
      "La jalousie est une maladie qui ronge de l'intérieur.",
      "Il s'est remis de sa maladie plus vite que prévu."
    ]},
    { word_key: 'zyd', sense: 'augmenter', arabic: 'زِيَادَة', phon: 'ziyāda', phrases: [
      "Les prix ont augmenté de dix pour cent en un an.",
      "Augmenter ses connaissances, c'est investir dans son avenir.",
      "Le vent a augmenté d'intensité dans l'après-midi."
    ]},
    { word_key: 'kdb', sense: 'mentir', arabic: 'كَذِب', phon: 'kadhib', phrases: [
      "Mentir une fois suffit pour perdre la confiance de quelqu'un.",
      "Les enfants apprennent vite que mentir a des conséquences.",
      "Il ne sait pas mentir — son visage le trahit à chaque fois."
    ]}
  ];

  for (const d of dailyData) {
    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', d.word_key)
      .single();

    if (!wa) {
      console.error(`  ${d.word_key} non trouvé dans word_analyses`);
      continue;
    }

    for (const phrase of d.phrases) {
      await supabase.from('word_daily').insert({
        analysis_id: wa.id,
        sense: d.sense,
        arabic: d.arabic,
        phon: d.phon,
        french: phrase
      });
    }
    console.log(`  ${d.word_key} → 3 phrases`);
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 6 À 10 ===\n');
  console.log('[ÉTAPE 2] SKIP — tous les concepts existent déjà en base\n');

  for (let v = 6; v <= 10; v++) {
    await processVerse(v);
  }

  await syncWordMeanings();
  await insertWordDaily();

  console.log('\n=== PIPELINE V6-10 TERMINÉE ===');
}

main().catch(console.error);
