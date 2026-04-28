// Step 3 — VWA insertion for verse_id=353 (3:60)
// 4 important words : al-ḥaqqu (hqq), rabbika (rbb), takun (kwn), al-mumtarīn (mry)

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const verse_id = 353;

const rows = [
  {
    verse_id, word_key: 'hqq', position: 1, sense_chosen: 'vérité', root: 'ح ق ق',
    reason: "Nom défini masculin singulier au nominatif, sujet d'une phrase nominale « al-ḥaqqu min rabbika ». L'article « al- » marque que la vérité est identifiée comme une réalité connue, et le prédicat « min rabbika » en donne l'origine. La forme définie nominatif est compatible avec un état objectif extérieur et permanent.",
    analysis_axes: {
      concept_chosen: "Vérité/Réalité",
      concepts: {
        "Vérité/Réalité": {
          status: "retenu",
          senses: ["vérité", "être vrai", "réalité", "droit"],
          proof_ctx: "Le sens retenu est « Vérité/Réalité », un état objectif de ce qui correspond au réel, extérieur et permanent. Le verset oppose ce sens à celui des « mumtarīn » (8ème mot), ceux qui doutent — l'axe du verset est épistémologique (vrai vs incertain), pas juridique. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ḥaqq est ce qui est conforme au réel, l'opposé du bāṭil. La distinction philosophique avec « Obligation/Nécessité » est que la vérité décrit ce qui EST, tandis que l'obligation décrit ce qui DOIT être fait — ici la phrase nominale affirme un état, pas un devoir."
        },
        "Obligation/Nécessité": {
          status: "probable",
          senses: ["devoir", "mériter", "être obligatoire"],
          proof_ctx: "Le sens d'obligation est attesté par les sources étymologiques mais moins ajusté au verset : la phrase « al-ḥaqqu min rabbika » suivie de « ne sois pas parmi ceux qui doutent » pose un axe de certitude, pas de devoir. Un devoir ne se confronte pas au doute, une vérité si."
        },
        "Sens isolé/Se": {
          status: "nul",
          senses: ["se réaliser"],
          proof_ctx: "Sens verbal isolé, incompatible avec la forme nominale définie du verset."
        },
        "Sens isolé/Vérifier": {
          status: "nul",
          senses: ["vérifier"],
          proof_ctx: "Sens verbal isolé, incompatible avec la forme nominale définie du verset."
        }
      }
    }
  },
  {
    verse_id, word_key: 'rbb', position: 3, sense_chosen: 'seigneur', root: 'ر ب ب',
    reason: "Nom masculin singulier au génitif en état construit (idafa) avec le suffixe 2MS « ka » (ton). L'idafa « rabbi-ka » exprime la relation personnelle d'appartenance : « ton Seigneur ». Le suffixe marque une relation directe et personnelle entre celui qui exerce l'autorité bienveillante et celui à qui on s'adresse (le Prophète).",
    analysis_axes: {
      concept_chosen: "Seigneurie/Autorité bienveillante",
      concepts: {
        "Seigneurie/Autorité bienveillante": {
          status: "retenu",
          senses: ["seigneur", "maître", "propriétaire", "celui qui élève", "celui qui entretient", "celui qui possède", "gouverner"],
          proof_ctx: "Le sens retenu est « Seigneurie/Autorité bienveillante », relation extérieure et permanente entre le maître et ce qui est sous sa responsabilité. La préposition « min » (de, en provenance de) introduit le Seigneur comme source de la vérité : la vérité vient d'une autorité souveraine, pas d'un processus naturel. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), rabb est celui qui possède, élève et gouverne. La distinction avec « Croissance/Augmentation » est que la seigneurie est une position d'autorité globale, tandis que la croissance est un processus physique — ici la vérité n'est pas « fait grandir », elle vient d'une autorité. La distinction avec « Éducation/Accompagnement » est que l'éducation est un acte méthodique de formation, alors que la seigneurie est la relation englobante dont l'éducation peut être un aspect."
        },
        "Croissance/Augmentation": {
          status: "peu_probable",
          senses: ["augmenter", "croître", "faire grandir", "nourrir", "développer"],
          proof_ctx: "La croissance est un processus physique graduel ; elle ne peut pas être la source d'une vérité. La préposition « min rabbika » active la relation d'autorité, pas le phénomène biologique."
        },
        "Éducation/Accompagnement": {
          status: "probable",
          senses: ["élever un enfant", "éduquer", "former", "accompagner la croissance"],
          proof_ctx: "L'éducation est un aspect de la seigneurie mais le verset ne décrit pas un acte éducatif : il affirme l'origine d'une vérité. Le sens est sous-jacent, pas activé."
        },
        "Commerce/Usure": {
          status: "nul",
          senses: ["usure", "augmentation de dette", "intérêt"],
          proof_ctx: "Sens technique hors sujet, appartenant au champ commercial."
        },
        "Souffle/Vent": {
          status: "nul",
          senses: ["essoufflement"],
          proof_ctx: "Sens physique hors sujet."
        },
        "Sens isolé/Fixer": { status: "nul", senses: ["fixer"], proof_ctx: "Sens rare et hors sujet." },
        "Sens isolé/Rassembler": { status: "nul", senses: ["rassembler"], proof_ctx: "Sens rare et hors sujet." },
        "Sens isolé/Groupe": { status: "nul", senses: ["groupe"], proof_ctx: "Sens rare et hors sujet." },
        "Sens isolé/Confiture": { status: "nul", senses: ["confiture"], proof_ctx: "Sens culinaire hors sujet." }
      }
    }
  },
  {
    verse_id, word_key: 'kwn', position: 6, sense_chosen: 'être (verbe incomplet)', root: 'ك و ن',
    reason: "Verbe inaccompli 2ème personne masculin singulier, forme I, précédé de la négation « lā » à valeur prohibitive (« ne sois pas »). Le « fa » conséquentiel précédant « lā » lie la prohibition à l'affirmation précédente (« la vérité vient de ton Seigneur, DONC ne sois pas… »). C'est un verbe d'être incomplet (kāna) qui prend un prédicat — ici « mina l-mumtarīn » (parmi ceux qui doutent).",
    analysis_axes: {
      concept_chosen: "Être/Existence",
      concepts: {
        "Être/Existence": {
          status: "retenu",
          senses: ["être (verbe incomplet)", "venir à l'existence"],
          proof_ctx: "Le sens retenu est « Être/Existence ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), kāna est le verbe d'attribution qui relie un sujet à un prédicat et exprime l'état de se trouver quelque part ou d'appartenir à un groupe. La structure « lā takun min [groupe] » est une formule coranique récurrente qui interdit d'appartenir à une catégorie. Le prédicat « mina l-mumtarīn » indique l'appartenance à la catégorie des doutants — c'est l'attribution que la prohibition vise."
        },
        "Humilité/Soumission": {
          status: "nul",
          senses: ["être humble soumis"],
          proof_ctx: "Sens isolé attaché à des constructions spécifiques, hors sujet ici."
        },
        "Lieu/État": {
          status: "nul",
          senses: ["lieu", "reste à ta place", "état condition", "motif raison", "devenir comme"],
          proof_ctx: "Sens dérivés physiques ou techniques, non activés par la construction « lā takun mina... »."
        }
      }
    }
  },
  {
    verse_id, word_key: 'mry', position: 8, sense_chosen: 'douter', root: 'م ر ي',
    reason: "Participe actif pluriel masculin défini au génitif de la forme VIII (ifta'ala → imtarā) de la racine m-r-y. La forme VIII a une valeur réflexive ou d'effort intérieur : imtarā signifie « stimuler en soi le doute ». Le participe actif pluriel désigne « ceux qui font activement le doute » — ceux qui cultivent l'incertitude en eux-mêmes. Le défini « al- » marque qu'il s'agit d'une catégorie identifiée, celle des doutants.",
    analysis_axes: {
      concept_chosen: "Doute/Contestation",
      concepts: {
        "Doute/Contestation": {
          status: "retenu",
          senses: ["douter"],
          proof_ctx: "Le sens retenu est « douter ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme VIII imtarā est attestée avec le sens « il a douté » (cité pour le verset coranique 43:61). Le doute est un état intérieur d'incertitude, opposé à la vérité affirmée au premier mot du verset (al-ḥaqqu). La forme active du participe signifie que les doutants entretiennent activement leur incertitude — ce n'est pas un doute passager mais une posture. La distinction avec « Dispute/Opposition obstinée » (forme III) est que la dispute est un acte verbal dirigé vers un interlocuteur, alors que le doute reste chez celui qui le ressent. Ici le verset précède la dispute du verset suivant (3:61 ḥājjaka) — l'ordre est d'abord le doute intérieur, puis la contestation extérieure."
        },
        "Dispute/Opposition obstinée": {
          status: "peu_probable",
          senses: ["disputer obstinément", "contredire"],
          proof_ctx: "Le sens de dispute correspond plutôt à la forme III (mārāhu) qu'à la forme VIII du verset. Le texte place d'abord le doute (3:60) avant la contestation ouverte (3:61), ce qui écarte le sens de dispute comme sens premier ici."
        },
        "Extraction/Tirer": {
          status: "nul",
          senses: ["tirer", "extraire"],
          proof_ctx: "Sens physique premier (le vent qui tire les nuages) non activé par le contexte épistémologique du verset."
        }
      }
    }
  }
];

async function run() {
  const { data, error } = await db.from('verse_word_analyses').insert(rows).select();
  if (error) { console.error(error); process.exit(1); }
  console.log(`VWA insérés : ${data.length}`);
  for (const r of data) console.log(`  id=${r.id} pos=${r.position} ${r.word_key} → ${r.sense_chosen}`);
}
run().catch(console.error);
