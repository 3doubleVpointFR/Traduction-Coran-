// Pipeline S3:V52 — Enrichissement + VWA + Traduction
// verse_id=345, VA_ID=706
// Arabic: فَلَمَّآ أَحَسَّ عِيسَىٰ مِنْهُمُ ٱلْكُفْرَ قَالَ مَنْ أَنصَارِىٓ إِلَى ٱللَّهِ ۖ قَالَ ٱلْحَوَارِيُّونَ نَحْنُ أَنصَارُ ٱللَّهِ ءَامَنَّا بِٱللَّهِ وَٱشْهَدْ بِأَنَّا مُسْلِمُونَ
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 345;
const VA_ID = 706;

// ═══════════════════════════════════════════════════════════════════
// ENRICHISSEMENT — ajouter les sens Lane's dans word_meanings
// ═══════════════════════════════════════════════════════════════════

async function enrichRoot(aid, label, newSenses) {
  console.log('\n--- Enrichir ' + label + ' (aid=' + aid + ') ---');
  const { data: existing } = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id', aid).order('display_order');
  console.log('Existant: ' + existing.length + ' sens');
  existing.forEach(s => console.log('  [' + s.concept + '] ' + s.sense));

  const maxOrder = Math.max(...existing.map(s => s.display_order), 0);
  const toInsert = newSenses.map((s, i) => ({ ...s, analysis_id: aid, display_order: maxOrder + 1 + i, meaning_type: 'etymology' }));
  const { error } = await db.from('word_meanings').insert(toInsert);
  if (error) { console.log('ERREUR insert ' + label + ':', error.message); return false; }
  console.log('Insert: ' + toInsert.length + ' sens OK -> ' + (existing.length + toInsert.length) + ' total');

  await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', aid);
  return true;
}

async function runEnrichments() {
  console.log('=== PART 1 — ENRICHISSEMENTS ===\n');

  // ─────────────────────────────────────────
  // 1. hss (aid=1282) — currently 4 senses, needs >=5
  // ─────────────────────────────────────────
  await enrichRoot(1282, 'hss (ح س س)', [
    {
      concept: 'Perception/Sensation', sense: "connaître par les sens",
      description: "Acquérir la connaissance d'une chose par l'un des cinq sens — le Lane's donne ahassa = « il a connu la chose par les sens »."
    },
    {
      concept: 'Compassion/Tendresse', sense: "avoir de la compassion",
      description: "État intérieur de tendresse et de douleur pour l'autre. Le Lane's donne hassa lahu = « il a eu de la compassion pour lui, il a été tendre envers lui ». La compassion reste chez celui qui la ressent — elle ne sort pas vers l'autre comme un acte, mais l'affecte intérieurement."
    },
    {
      concept: 'Compassion/Tendresse', sense: "se lamenter pour",
      description: "Exprimer sa douleur pour quelqu'un."
    },
    {
      concept: 'Perception/Sensation', sense: "chercher des nouvelles",
      description: "Le Lane's donne tahassasa (forme V) = chercher à savoir par les sens, écouter, enquêter sur un sujet dans un but bienveillant."
    },
    {
      concept: 'Son/Mouvement', sense: "bruit léger",
      description: "Le Lane's donne hiss = un son faible et doux, un bruit léger par lequel on perçoit la présence de quelque chose. Le son est la première chose que l'on perçoit — il précède la vue."
    },
    {
      concept: 'Son/Mouvement', sense: "mouvement",
      description: "Le Lane's donne hiss = mouvement. Le mouvement est perçu par les sens avant même d'être identifié."
    },
    {
      concept: 'Destruction/Éradication', sense: "tomber (dents, poils)",
      description: "Le Lane's donne inhassa (forme VII) = tomber, se détacher (dents qui tombent, poils qui chutent). La destruction progressive."
    }
  ]);

  // ─────────────────────────────────────────
  // 2. hwr (aid=1283) — currently 4 senses, needs >=5
  // ─────────────────────────────────────────
  await enrichRoot(1283, 'hwr (ح و ر)', [
    {
      concept: 'Blancheur/Beauté', sense: "blanchir",
      description: "Le Lane's donne hawwara (forme II) = blanchir des vêtements par le lavage. La blancheur obtenue par purification."
    },
    {
      concept: 'Dialogue/Débat', sense: "dialoguer",
      description: "Le Lane's donne hawara (forme III) = échanger des réponses, tenir un dialogue, débattre. Le dialogue est un aller-retour de paroles — chacun « retourne » sa réponse à l'autre. Le retour est au coeur de l'échange."
    },
    {
      concept: 'Retour/Conversion', sense: "répondre",
      description: "Le Lane's donne hawir = réponse. Répondre est un acte de retour — on retourne une parole à celui qui a parlé."
    },
    {
      concept: 'Pureté/Élection', sense: "purifié et éprouvé",
      description: "Le Lane's donne hawariyy = celui qui a été éprouvé et trouvé pur de tout défaut. La pureté est le résultat d'une épreuve — la personne a été testée et sa blancheur intérieure confirmée. C'est de ce sens que vient l'application aux compagnons de Jésus : ceux qui ont été éprouvés et trouvés purs dans leur engagement."
    },
    {
      concept: 'Pureté/Élection', sense: "compagnon dévoué",
      description: "Extension du sens « purifié et éprouvé » — le compagnon dévoué est celui qui a fait ses preuves dans l'engagement."
    },
    {
      concept: 'Sens isolé/Lieu', sense: "quartier",
      description: "Le Lane's donne hara = quartier, lieu d'habitation d'un peuple dont les maisons sont proches."
    },
    {
      concept: 'Sens isolé/Animal', sense: "petit de chameau",
      description: "Le Lane's donne huwar = petit de chamelle, du moment de sa naissance jusqu'au sevrage."
    },
    {
      concept: 'Sens isolé/Axe', sense: "pivot",
      description: "Le Lane's donne mihwar = axe/pivot autour duquel tourne la poulie. Ce qui fait tourner."
    }
  ]);

  // ─────────────────────────────────────────
  // 3. Daily phrases
  // ─────────────────────────────────────────
  console.log('\n=== DAILY PHRASES ===\n');

  const dailyPlan = [
    { key: 'hss', aid: 1282, sense: 'sentir', phrases: [
      { arabic: "أحسست بشيء غريب", phon: "ahsastu bi-shay' gharib", french: "J'ai senti quelque chose d'étrange" },
      { arabic: "حسّ لهم بالتعاطف", phon: "hassa lahum bi-t-ta'atuf", french: "Il a ressenti de la compassion pour eux" },
      { arabic: "ما أحسست بالوقت", phon: "ma ahsastu bi-l-waqt", french: "Je n'ai pas senti le temps passer" }
    ]},
    { key: 'hwr', aid: 1283, sense: 'purifié et éprouvé', phrases: [
      { arabic: "حاورته في الموضوع", phon: "hawartuhu fi al-mawdu'", french: "J'ai dialogué avec lui sur le sujet" },
      { arabic: "الحوار أفضل من الجدال", phon: "al-hiwar afdal min al-jidal", french: "Le dialogue vaut mieux que la dispute" },
      { arabic: "هو من حواريي المشروع", phon: "huwa min hawariyyi al-mashru'", french: "Il fait partie des compagnons dévoués du projet" }
    ]},
    { key: 'shd', aid: 2073, sense: 'témoigner', phrases: [
      { arabic: "أشهد أن هذا صحيح", phon: "ashhadu anna hadha sahih", french: "J'atteste que c'est vrai" },
      { arabic: "شهدت الحادثة بعيني", phon: "shahidtu al-hadithata bi-'ayni", french: "J'ai été témoin de l'incident de mes propres yeux" },
      { arabic: "اشهد على كلامي", phon: "ishhad 'ala kalami", french: "Sois témoin de ce que je dis" }
    ]}
  ];

  for (const dp of dailyPlan) {
    const { count } = await db.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', dp.aid);
    if (count > 0) {
      console.log(dp.key + ' (aid=' + dp.aid + '): ' + count + ' phrases existantes -> SKIP');
    } else {
      const rows = dp.phrases.map(p => ({ analysis_id: dp.aid, sense: dp.sense, arabic: p.arabic, phon: p.phon, french: p.french }));
      const { error: dpErr } = await db.from('word_daily').insert(rows);
      if (dpErr) console.log('ERREUR daily ' + dp.key + ':', dpErr.message);
      else console.log(dp.key + ' (aid=' + dp.aid + '): INSERT ' + rows.length + ' phrases OK');
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
// PART 2 — VWA ENTRIES (10 mots importants)
// ═══════════════════════════════════════════════════════════════════

async function runVWA() {
  console.log('\n=== PART 2 — VWA ENTRIES ===\n');

  // VWA 1: ahassa (hss) — position 2
  const { error: e1 } = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID,
    word_key: 'hss',
    position: 2,
    sense_chosen: 'sentir',
    reason: "Forme IV de h-s-s (ahassa), verbe accompli 3ème pers masc sing. La forme IV causative ici a le sens de « percevoir par les sens ». Jésus a SENTI le rejet venant d'eux — il l'a perçu par ses sens, pas par un raisonnement.",
    analysis_axes: {
      concept_chosen: "Perception/Sensation",
      concepts: {
        "Perception/Sensation": {
          status: "retenu",
          senses: ["sentir", "percevoir", "connaître par les sens", "chercher des nouvelles"],
          proof_ctx: "Le verbe ahassa signifie « percevoir par les sens ». Jésus a senti le rejet émanant des Enfants d'Israël — pas par la raison mais par la perception directe. Le champ lexical (rejet, dire, qui sont mes aides) montre que la perception déclenche une réaction immédiate. Le sens « Compassion/Tendresse » est un sens intérieur (avoir de la compassion) — ici le verbe est transitif avec un COD (al-kufra), ce qui demande la perception, pas la compassion."
        },
        "Compassion/Tendresse": {
          status: "nul",
          senses: ["avoir de la compassion", "se lamenter pour"],
          proof_ctx: "La compassion est un état intérieur qui ne prend pas de COD direct comme al-kufra."
        },
        "Destruction/Éradication": {
          status: "nul",
          senses: ["tuer", "éradiquer", "tomber (dents, poils)"],
          proof_ctx: "La destruction est hors contexte — Jésus ne détruit pas le rejet, il le perçoit."
        },
        "Son/Mouvement": {
          status: "nul",
          senses: ["bruit léger", "mouvement"],
          proof_ctx: "Le son et le mouvement sont des objets de perception, pas l'acte de percevoir lui-même."
        }
      }
    }
  });
  console.log('VWA hss:', e1 ? 'ERREUR: ' + e1.message : 'OK');

  // VWA 2: al-kufra (kfr) — position 5
  const { error: e2 } = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID,
    word_key: 'kfr',
    position: 5,
    sense_chosen: 'couvrir',
    reason: "Nom masculin défini accusatif (COD de ahassa). al-kufr est l'acte de couvrir — couvrir les signes, couvrir la vérité. Le texte ne dit pas « l'incroyance » mais « la couverture » — ils ont recouvert ce que Jésus leur montrait.",
    analysis_axes: {
      concept_chosen: "Couverture/Dissimulation",
      concepts: {
        "Couverture/Dissimulation": {
          status: "retenu",
          senses: ["couvrir", "cacher", "la nuit qui couvre"],
          proof_ctx: "Le sens premier de k-f-r est « couvrir ». D'après les sources étymologiques, le kafir est originellement le laboureur qui couvre la graine de terre, ou la nuit qui couvre le jour. al-kufr est l'acte de recouvrir — ici les Enfants d'Israël ont recouvert les signes que Jésus leur montrait. Le sens « Rejet/Ingratitude » (nier, rejeter) est une extension métaphorique de la couverture : rejeter un bienfait c'est le recouvrir comme s'il n'existait pas. Les deux sens sont proches mais l'étymologie part de la couverture physique. Le sens « rejet » est déjà une interprétation."
        },
        "Rejet/Ingratitude": {
          status: "probable",
          senses: ["nier", "être ingrat", "renier un bienfait", "rejeter", "mécréant"],
          proof_ctx: "Le rejet et l'ingratitude sont des extensions de la couverture. Rejeter quelque chose c'est le couvrir, le rendre invisible. Le sens est très proche mais « couvrir » est plus premier."
        },
        "Expiation/Réparation": {
          status: "nul",
          senses: ["expier", "effacer les péchés"],
          proof_ctx: "L'expiation est l'acte de couvrir les fautes — un sens positif de la même racine, hors contexte ici."
        }
      }
    }
  });
  console.log('VWA kfr:', e2 ? 'ERREUR: ' + e2.message : 'OK');

  // VWA 3: qala (qwl) — position 6
  const { error: e3 } = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID,
    word_key: 'qwl',
    position: 6,
    sense_chosen: 'dire',
    reason: "Verbe accompli 3ème pers masc sing. qala = il a dit. Verbe introducteur du discours direct de Jésus.",
    analysis_axes: {
      concept_chosen: "Parole/Énonciation",
      concepts: {
        "Parole/Énonciation": {
          status: "retenu",
          senses: ["dire", "parler", "parole", "discours", "affirmer"],
          proof_ctx: "Le sens « dire » est univoque pour le verbe qala introduisant un discours direct."
        },
        "Pensée/Avis": {
          status: "nul",
          senses: ["opinion", "avis", "doctrine"],
          proof_ctx: "L'opinion est un sens nominal — hors contexte pour un verbe narratif."
        }
      }
    }
  });
  console.log('VWA qwl-1:', e3 ? 'ERREUR: ' + e3.message : 'OK');

  // VWA 4: ansari (nsr) — position 8
  const { error: e4 } = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID,
    word_key: 'nsr',
    position: 8,
    sense_chosen: 'secourir',
    reason: "Nom au pluriel (af'al) en idafa avec le pronom -i (mes). ansar = ceux qui secourent, les auxiliaires. ansari ila Allahi = mes secoureurs vers Dieu — ceux qui m'aident dans ma mission vers Dieu.",
    analysis_axes: {
      concept_chosen: "Secours/Victoire",
      concepts: {
        "Secours/Victoire": {
          status: "retenu",
          senses: ["secourir", "aider", "victoire", "défendre"],
          proof_ctx: "Le mot ansar est le pluriel de nasir (celui qui secourt). Jésus demande : qui sont ceux qui me secourront dans ma mission vers Dieu ? Le sens de secours est premier — c'est l'aide active dans un moment de besoin. L'expression « ila Allahi » (vers Dieu) oriente le secours vers la mission divine, pas vers un combat militaire."
        },
        "Alliance/Soutien": {
          status: "probable",
          senses: ["partisan"],
          proof_ctx: "Le partisan est un sens dérivé du secours — le soutien actif. Proche mais moins dynamique que « secourir »."
        }
      }
    }
  });
  console.log('VWA nsr-1:', e4 ? 'ERREUR: ' + e4.message : 'OK');

  // VWA 5: Allahi (alh) — position 10
  const { error: e5 } = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID,
    word_key: 'alh',
    position: 10,
    sense_chosen: 'Dieu',
    reason: "Nom propre au génitif (après ila). ila Allahi = vers Dieu. Direction de la mission.",
    analysis_axes: {
      concept_chosen: "Divinité",
      concepts: {
        "Divinité": {
          status: "retenu",
          senses: ["Dieu", "divinité"],
          proof_ctx: "Allah est le nom propre de Dieu. Le sens est univoque dans ce contexte — direction de la mission de Jésus."
        }
      }
    }
  });
  console.log('VWA alh-1:', e5 ? 'ERREUR: ' + e5.message : 'OK');

  // VWA 6: al-hawariyyuna (hwr) — position 12
  const { error: e6 } = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID,
    word_key: 'hwr',
    position: 12,
    sense_chosen: 'purifié et éprouvé',
    reason: "Nom masculin pluriel défini au nominatif (sujet de qala). Les hawariyyun — d'après les sources étymologiques, le hawariyy est celui qui a été éprouvé et trouvé pur de tout défaut. L'article défini al- les identifie comme un groupe connu. La tradition a retenu « disciple » mais le sens étymologique est « celui qui a été purifié/éprouvé ».",
    analysis_axes: {
      concept_chosen: "Pureté/Élection",
      concepts: {
        "Pureté/Élection": {
          status: "retenu",
          senses: ["purifié et éprouvé", "compagnon dévoué"],
          proof_ctx: "Le hawariyy est étymologiquement celui qui a été éprouvé et trouvé pur. Le Lane's donne : « One who is freed and cleared from every vice, fault, or defect: one who has been tried, or proved, time after time, and found trustworthy ». La pureté intérieure (blancheur métaphorique) est obtenue par l'épreuve. C'est de ce sens que vient l'application aux compagnons de Jésus : ils se sont engagés volontairement et ont été trouvés fiables. Le sens « Blancheur/Beauté » est le fondement physique (blanchir, être blanc) d'où dérive la pureté intérieure. Le sens « Retour/Conversion » (revenir) est la racine étymologique de h-w-r mais ne convient pas pour un nom désignant des personnes dans ce contexte."
        },
        "Blancheur/Beauté": {
          status: "probable",
          senses: ["être blanc (intensément)", "houris", "blanchir"],
          proof_ctx: "La blancheur est le fondement physique de la racine h-w-r. Les hawariyyun pourraient être les blanchisseurs (ceux qui lavent et blanchissent les vêtements). Le Lane's cite cette explication. Mais le sens a évolué vers la pureté intérieure."
        },
        "Retour/Conversion": {
          status: "peu_probable",
          senses: ["revenir", "répondre"],
          proof_ctx: "Le retour est le sens premier de hara mais ne convient pas pour nommer un groupe de personnes ici."
        },
        "Dialogue/Débat": {
          status: "nul",
          senses: ["dialoguer"],
          proof_ctx: "Le dialogue est un sens verbal de la forme III — hors contexte pour un nom de groupe."
        }
      }
    }
  });
  console.log('VWA hwr:', e6 ? 'ERREUR: ' + e6.message : 'OK');

  // VWA 7: ansaru (nsr) — position 14
  const { error: e7 } = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID,
    word_key: 'nsr',
    position: 14,
    sense_chosen: 'secourir',
    reason: "Pluriel en idafa avec Allahi. ansaru Allahi = les secoureurs de Dieu. Les hawariyyun se déclarent secoureurs de Dieu — ils aident la cause divine.",
    analysis_axes: {
      concept_chosen: "Secours/Victoire",
      concepts: {
        "Secours/Victoire": {
          status: "retenu",
          senses: ["secourir", "aider", "victoire", "défendre"],
          proof_ctx: "Même analyse que le premier ansar (position 8). Les hawariyyun répondent en reprenant le mot de Jésus : ils sont les secoureurs de Dieu, ceux qui aident activement la cause divine."
        },
        "Alliance/Soutien": {
          status: "probable",
          senses: ["partisan"],
          proof_ctx: "Le soutien actif est proche mais « secourir » reste plus dynamique."
        }
      }
    }
  });
  console.log('VWA nsr-2:', e7 ? 'ERREUR: ' + e7.message : 'OK');

  // VWA 8: amanna (amn) — position 16
  const { error: e8 } = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID,
    word_key: 'amn',
    position: 16,
    sense_chosen: 'accorder la sécurité',
    reason: "Verbe forme IV accompli 1ère pers plur (amanna = nous avons accordé la confiance/sécurité). La forme IV de '-m-n est « rendre sûr, accorder la sécurité à ». amanna bi-Allahi = nous avons accordé notre confiance à Dieu. Le sens premier est la sécurité, pas la croyance.",
    analysis_axes: {
      concept_chosen: "Sécurité/Confiance",
      concepts: {
        "Sécurité/Confiance": {
          status: "retenu",
          senses: ["être en sécurité", "se sentir en sécurité", "faire confiance", "confier", "fidèle", "lieu sûr"],
          proof_ctx: "La racine '-m-n porte la notion de sécurité et de confiance. La forme IV (af'ala) est causative : « rendre sûr, accorder la sécurité ». amanna bi-Allahi signifie « nous avons accordé notre confiance à Dieu » — nous avons mis notre sécurité en Dieu. Le sens « Foi/Adhésion » (croire, avoir la foi) est une extension post-coranique où le mot a pris un sens théologique de « croyance religieuse ». Mais le sens étymologique premier est l'acte de mettre en sécurité, de faire confiance."
        },
        "Foi/Adhésion": {
          status: "probable",
          senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
          proof_ctx: "La foi comme adhésion est un sens dérivé de la confiance. Croire c'est accorder sa confiance à la vérité de quelque chose. Les deux sens sont proches mais l'étymologie part de la sécurité."
        },
        "Garantie/Protection": {
          status: "nul",
          senses: ["protéger", "accorder la sécurité"],
          proof_ctx: "La protection est le sens concret de la sécurité — ici le contexte est la relation avec Dieu, pas la protection physique."
        }
      }
    }
  });
  console.log('VWA amn:', e8 ? 'ERREUR: ' + e8.message : 'OK');

  // VWA 9: ishhad (shd) — position 18
  const { error: e9 } = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID,
    word_key: 'shd',
    position: 18,
    sense_chosen: 'témoigner',
    reason: "Impératif forme I (uf'ul) de sh-h-d + pronom complément implicite. ishhad = sois témoin / atteste. Les hawariyyun demandent à Jésus d'attester leur soumission.",
    analysis_axes: {
      concept_chosen: "Témoignage/Attestation",
      concepts: {
        "Témoignage/Attestation": {
          status: "retenu",
          senses: ["témoigner", "attester", "témoin"],
          proof_ctx: "Le verbe shahida signifie « être présent et voir, puis déclarer ce qu'on a vu ». L'impératif ishhad = sois témoin / atteste. Les compagnons demandent à Jésus d'être leur témoin — de confirmer et attester leur engagement envers Dieu. Le sens « Présence/Visibilité » est le fondement du témoignage (être présent = voir = pouvoir témoigner) mais l'impératif demande l'acte de déclaration, pas juste la présence."
        },
        "Présence/Visibilité": {
          status: "probable",
          senses: ["être présent", "assister"],
          proof_ctx: "Être présent est le fondement du témoignage. Mais l'impératif ishhad demande l'acte actif de témoigner, pas la simple présence."
        },
        "Sens isolé/Martyr": {
          status: "nul",
          senses: ["martyr"],
          proof_ctx: "Le martyr (shahid) est un sens dérivé — celui qui témoigne au prix de sa vie. Hors contexte ici."
        }
      }
    }
  });
  console.log('VWA shd:', e9 ? 'ERREUR: ' + e9.message : 'OK');

  // VWA 10: muslimuna (slm) — position 20
  const { error: e10 } = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID,
    word_key: 'slm',
    position: 20,
    sense_chosen: 'soumission',
    reason: "Participe actif forme IV (mufa''il/muf'il), pluriel masculin nominatif. muslimun = ceux qui se soumettent. La forme IV de s-l-m = aslama = remettre, livrer, soumettre. Le participe actif mu-slim = celui qui remet/soumet — celui qui se remet à Dieu volontairement.",
    analysis_axes: {
      concept_chosen: "Paix/Soumission",
      concepts: {
        "Paix/Soumission": {
          status: "retenu",
          senses: ["paix", "soumission", "islam", "salut"],
          proof_ctx: "La racine s-l-m porte la notion d'intégrité et de remise. La forme IV (aslama) signifie « remettre, livrer quelque chose ». Le participe actif muslim = celui qui remet/qui se livre volontairement. bi-anna muslimuna = que nous sommes de ceux qui se remettent (à Dieu). Le sens premier est la soumission volontaire — se remettre entièrement entre les mains de Dieu. Le sens « islam » comme religion institutionnelle est post-coranique — dans le texte, muslim est un participe actif qui décrit un état, pas l'appartenance à une religion organisée. Le sens « Intégrité/Santé » (sain et sauf) est le fondement physique de la racine — ce qui est salim est intact. Mais ici le contexte est la remise de soi à Dieu."
        },
        "Intégrité/Santé": {
          status: "peu_probable",
          senses: ["sain et sauf"],
          proof_ctx: "L'intégrité physique est le sens premier de s-l-m mais le contexte (engagement envers Dieu) demande le sens de soumission volontaire."
        }
      }
    }
  });
  console.log('VWA slm:', e10 ? 'ERREUR: ' + e10.message : 'OK');
}

// ═══════════════════════════════════════════════════════════════════
// PART 3-4 — TRADUCTION + EXPLICATION + SEGMENTS
// ═══════════════════════════════════════════════════════════════════

async function runTranslation() {
  console.log('\n=== PARTS 3-6 — TRADUCTION + SEGMENTS + VA UPDATE ===\n');

  const translationArab = "Puis, lorsque Jésus a senti la couverture venant d'eux, il a dit : « Qui sont mes secoureurs vers Dieu ? » Les éprouvés ont dit : « Nous sommes les secoureurs de Dieu. Nous avons mis notre confiance en Dieu, et atteste que nous sommes de ceux qui se remettent. »";

  const fullTranslation = "Puis, quand Jésus ressentit de l'incrédulité de leur part, il dit: « Qui sont mes alliés dans la voie d'Allah? » Les apôtres dirent: « Nous sommes les alliés d'Allah. Nous croyons en Allah. Et sois témoin que nous lui sommes soumis. »";

  const explanation = `§DEMARCHE§
Ce verset marque un tournant narratif. Après le discours de Jésus aux Enfants d'Israël (V49-V51) où il présentait ses miracles, confirmait la Torah et appelait à adorer Dieu, le texte passe au récit : Jésus perçoit le rejet et lance un appel à l'aide. Les éprouvés répondent en s'engageant.

**fa-lamma** (puis lorsque) est une particule temporelle composée de fa- (puis, conjonction de séquence) et lamma (lorsque, particule de temps). La combinaison fa-lamma introduit un basculement temporel — ce qui suit arrive APRÈS ce qui précède. En V49-V51, Jésus parlait ; en V52, le récit montre ce qui s'est passé ensuite. On traduit par « puis lorsque ».

**ahassa** (a senti) est un verbe à l'accompli, 3ème personne du masculin singulier, forme IV de la racine h-s-s. La forme IV (af'ala) est causative — « faire sentir » au sens de « éprouver une sensation ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le sens premier de h-s-s est « percevoir par les sens ». ahassa signifie « il a perçu, il a senti » — une perception directe et immédiate, pas un raisonnement. Jésus a SENTI le rejet venant d'eux par ses sens — il l'a perçu dans leurs attitudes, leurs gestes, leurs paroles. Le verbe est transitif ici avec al-kufra comme COD : il a senti la couverture. On traduit par « a senti ».

**'isa** (Jésus) est un nom propre indéclinable. C'est le sujet de ahassa. Le nom est mentionné explicitement alors que le contexte permettait un pronom — le texte nomme Jésus pour ancrer le récit.

**minhumu** (venant d'eux) est composé de la préposition min (de, venant de) et du pronom suffixe -humu (eux). Le pronom renvoie aux Enfants d'Israël mentionnés dans les versets précédents. La préposition min indique l'origine de la perception : c'est D'EUX que vient la couverture. On traduit par « venant d'eux ».

**al-kufra** (la couverture) est un nom masculin défini à l'accusatif (COD de ahassa) de la racine k-f-r. L'article défini al- indique que cette couverture est identifiée — c'est la couverture des signes que Jésus venait de leur montrer. D'après les sources étymologiques, le sens premier de k-f-r est « couvrir » — le kafir est originellement le laboureur qui couvre la graine de terre, ou la nuit qui couvre le jour. al-kufr est donc l'acte de recouvrir, de masquer. Ici les Enfants d'Israël ont recouvert les signes que Jésus leur montrait — ils ont mis un voile dessus, ils les ont rendus invisibles. Le sens « incroyance, incrédulité » est une extension métaphorique de cette couverture : rejeter un bienfait c'est le recouvrir comme s'il n'existait pas. On traduit par « la couverture ».

**qala** (il a dit) est un verbe accompli 3ème personne masculin singulier de la racine q-w-l. Verbe introducteur du discours direct de Jésus. On traduit par « il a dit ».

**man** (qui sont) est un pronom interrogatif indéclinable. Jésus pose une question directe : qui parmi vous ? On traduit par « qui sont ».

**ansari** (mes secoureurs) est un nom au pluriel (schème af'al) de la racine n-s-r, en idafa avec le pronom suffixe -i (mes). D'après les sources étymologiques, le sens premier de n-s-r est « secourir, aider quelqu'un dans un moment de besoin ». Le nasir est celui qui porte secours — l'ansar est le pluriel : ceux qui secourent. ansari = mes secoureurs. Le mot ansar est plus fort que « allié » — l'allié est lié par un pacte, le secoureur agit dans l'urgence. La construction ansari ila Allahi (mes secoureurs vers Dieu) oriente le secours vers la mission divine : qui m'aidera dans ma mission VERS Dieu ? On traduit par « mes secoureurs ».

**ila** (vers) est une préposition indiquant la direction, le but. ila Allahi = vers Dieu. On traduit par « vers ».

**Allahi** (Dieu) est le nom propre de la divinité au génitif (après ila). On traduit par « Dieu ».

**qala** (ont dit) est le même verbe qala mais ici il introduit le discours direct des éprouvés. Le verbe est au singulier (qala et non qalu) bien que le sujet soit pluriel (al-hawariyyuna) — c'est un usage courant en arabe où le verbe précédant un sujet pluriel peut rester au singulier. On traduit par « ont dit ».

**al-hawariyyuna** (les éprouvés) est un nom masculin pluriel défini au nominatif (sujet de qala) de la racine h-w-r. L'article défini al- identifie un groupe connu. D'après les sources étymologiques, le hawariyy est « celui qui a été éprouvé et trouvé pur de tout défaut ». Le Lane's donne : « celui qui a été testé à plusieurs reprises et trouvé digne de confiance ». La racine h-w-r porte le sens de blancheur — le hawariyy est celui dont la blancheur intérieure (la pureté) a été confirmée par l'épreuve. Ce n'est pas un titre honorifique donné d'avance mais le résultat d'un processus : ils ont été mis à l'épreuve et leur pureté a été vérifiée. La tradition a retenu « disciple » ou « apôtre » (du grec apostolos), mais le sens arabe est « celui qui a été purifié par l'épreuve ». On traduit par « les éprouvés ».

**nahnu** (nous sommes) est un pronom personnel indépendant 1ère personne du pluriel. Phrase nominale : nahnu ansaru Allahi = nous sommes les secoureurs de Dieu. On traduit par « nous sommes ».

**ansaru** (les secoureurs de) est le même mot ansar qu'en position 8, mais ici au nominatif (khabar de la phrase nominale) en idafa avec Allahi. Les éprouvés reprennent le mot de Jésus et l'affirment : nous sommes les secoureurs de Dieu. On traduit par « les secoureurs de ».

**Allahi** (Dieu) est le nom propre au génitif (en idafa avec ansar). ansaru Allahi = les secoureurs de Dieu. On traduit par « Dieu ».

**amanna** (nous avons mis notre confiance) est un verbe à l'accompli, 1ère personne du pluriel, forme IV de la racine '-m-n. La forme IV (af'ala) est causative : « rendre sûr, accorder la sécurité ». D'après les sources étymologiques, le sens premier de '-m-n est la sécurité — être en sécurité, se sentir en sûreté. amanna bi-Allahi = nous avons accordé notre confiance à Dieu, nous avons mis notre sécurité en Dieu. Le sens « croire » (avoir la foi) est une extension où le mot a pris un sens théologique de « croyance religieuse ». Mais le sens étymologique premier est l'acte de placer sa confiance, de se mettre en sécurité auprès de quelqu'un. On traduit par « nous avons mis notre confiance ».

**bi-Allahi** (en Dieu) est la préposition bi- (en, par) suivie du nom propre Allahi au génitif. amanna bi-Allahi = nous avons mis notre confiance EN Dieu. On traduit par « en Dieu ».

**wa-ishhad** (et atteste) est composé de wa- (et) et ishhad, impératif de la forme I de la racine sh-h-d. D'après les sources étymologiques, le sens premier de sh-h-d est « être présent et voir ». De cette présence découle la capacité de témoigner — déclarer ce qu'on a vu. L'impératif ishhad = sois témoin, atteste. Les éprouvés demandent à Jésus d'être leur témoin : qu'il atteste devant Dieu qu'ils se sont engagés. On traduit par « et atteste ».

**bi-anna** (que nous sommes) est composé de la préposition bi- (que) et du pronom anna (que, conjonction). bi-anna introduit le contenu de l'attestation demandée. On traduit par « que nous sommes ».

**muslimuna** (de ceux qui se remettent) est un participe actif de la forme IV de la racine s-l-m, pluriel masculin au nominatif (khabar de anna). D'après les sources étymologiques, le sens premier de s-l-m est l'intégrité — ce qui est salim est intact, entier. La forme IV (aslama) signifie « remettre, livrer quelque chose à quelqu'un ». Le participe actif muslim = celui qui remet, celui qui se livre volontairement. muslimuna = ceux qui se remettent (à Dieu). Le mot « muslim » dans le texte n'est pas un nom de religion mais un participe actif qui décrit un état : celui qui se remet volontairement entre les mains de Dieu. On traduit par « de ceux qui se remettent ».

§JUSTIFICATION§
**a senti** — Le sens retenu est « sentir » du champ « Perception/Sensation ». Le mot « senti » rend la perception directe et immédiate que ahassa exprime. L'alternative « ressenti » est acceptable mais ajoute une nuance émotionnelle que le verbe arabe ne porte pas nécessairement — ahassa est la perception brute par les sens. L'alternative « perçu » est plus intellectuel — « sentir » est plus immédiat et sensoriel.

**la couverture** — Le sens retenu est « couvrir » du champ « Couverture/Dissimulation ». Le mot « couverture » rend l'acte de recouvrir les signes. L'alternative « le rejet » est une interprétation qui saute l'étymologie — rejeter c'est déjà couvrir, mais « rejet » ne dit pas COMMENT on rejette. L'alternative « l'incrédulité » est encore plus éloignée de l'étymologie — c'est un état mental, pas un acte. « Couverture » est le sens premier et le plus fidèle.

**il a dit** — Le sens retenu est « dire » du champ « Parole/Énonciation ». Univoque.

**mes secoureurs** — Le sens retenu est « secourir » du champ « Secours/Victoire ». Le mot « secoureurs » rend l'aide active et urgente que ansar exprime. L'alternative « alliés » implique un pacte formel — le secoureur agit par urgence et par choix, pas par obligation contractuelle. L'alternative « partisans » est trop politique.

**Dieu** — Nom propre. Univoque.

**les éprouvés** — Le sens retenu est « purifié et éprouvé » du champ « Pureté/Élection ». Le mot « éprouvés » rend le processus de purification par l'épreuve que hawariyy exprime. L'alternative « disciples » est un emprunt au vocabulaire chrétien (du latin discipulus) qui ne rend pas le sens arabe. L'alternative « apôtres » vient du grec apostolos (envoyé) et n'a aucun rapport avec la racine h-w-r. « Éprouvés » est le seul mot qui rend l'idée d'une pureté vérifiée par l'épreuve.

**les secoureurs de** — Même justification que « mes secoureurs ».

**nous avons mis notre confiance** — Le sens retenu est « accorder la sécurité » du champ « Sécurité/Confiance ». La formule « mettre sa confiance en » rend l'acte de placer sa sécurité en Dieu. L'alternative « nous croyons » saute l'étymologie de '-m-n (sécurité) pour aller directement au sens théologique (foi). « Mettre sa confiance » est plus fidèle au sens premier.

**atteste** — Le sens retenu est « témoigner » du champ « Témoignage/Attestation ». Le mot « atteste » rend l'impératif ishhad — la demande de témoignage solennel. L'alternative « sois témoin » est acceptable mais « atteste » est plus actif — il demande une déclaration, pas juste une présence.

**de ceux qui se remettent** — Le sens retenu est « soumission » du champ « Paix/Soumission ». La formule « ceux qui se remettent » rend le participe actif muslim — celui qui se remet volontairement à Dieu. L'alternative « soumis » est acceptable mais passif — « se remettre » est un acte volontaire et actif, pas une soumission subie. L'alternative « musulmans » est anachronique — le mot muslim dans le texte décrit un état, pas une appartenance religieuse.

§CRITIQUE§
**couverture vs incrédulité** — Les traductions courantes donnent « incrédulité » ou « incroyance » pour al-kufr. Or le sens premier de k-f-r est « couvrir » — le kafir est le laboureur qui couvre la graine, la nuit qui couvre le jour. « L'incrédulité » est un état mental (ne pas croire), tandis que « la couverture » est un acte (recouvrir la vérité). Le changement est significatif : avec « incrédulité », les Enfants d'Israël n'arrivent pas à croire (problème intellectuel) ; avec « couverture », ils recouvrent activement les signes (acte volontaire de dissimulation). Le verbe ahassa (sentir) confirme cette lecture : on « sent » un acte en cours (la couverture), on ne « sent » pas un état mental (l'incrédulité).

**éprouvés vs apôtres/disciples** — Les traductions courantes donnent « apôtres » ou « disciples » pour al-hawariyyun. Or « apôtre » vient du grec apostolos (envoyé) et « disciple » du latin discipulus (élève) — aucun des deux n'a de rapport avec la racine arabe h-w-r. Le hawariyy est celui qui a été éprouvé et trouvé pur — la pureté obtenue par l'épreuve. « Éprouvés » rend ce processus de vérification que ni « apôtre » ni « disciple » ne contiennent. Le biais vient de l'influence du vocabulaire chrétien sur les traductions du texte arabe.

**secoureurs vs alliés** — Les traductions courantes donnent « alliés » pour ansar. Or n-s-r signifie « secourir, porter secours dans un moment de besoin ». L'allié est lié par un pacte — le secoureur agit dans l'urgence. La différence est notable : Jésus ne cherche pas des alliés politiques mais des personnes prêtes à l'aider activement dans sa mission vers Dieu. Le mot ansar sera repris plus tard pour désigner les habitants de Médine qui ont secouru le Prophète — le sens de secours actif est central.

**mis notre confiance vs croyons** — Les traductions courantes donnent « nous croyons en Dieu » pour amanna bi-Allahi. Or la racine '-m-n porte le sens premier de sécurité et de confiance — pas de croyance intellectuelle. « Nous avons mis notre confiance en Dieu » dit que les éprouvés placent leur sécurité en Dieu, tandis que « nous croyons en Dieu » réduit l'engagement à une adhésion intellectuelle. La confiance est un acte total (on remet sa sécurité), la croyance est un acte mental (on accepte comme vrai).

**ceux qui se remettent vs soumis** — Les traductions courantes donnent « soumis » pour muslimun. Or muslim est un participe actif de la forme IV (aslama = remettre), ce qui indique un acte volontaire et continu. « Soumis » est un participe passé passif — il décrit quelqu'un qui subit la soumission. « Ceux qui se remettent » est un participe actif réflexif — il décrit quelqu'un qui choisit activement de se remettre à Dieu. La différence est celle entre subir (soumis) et choisir (se remettre).`;

  // Segments d'affichage
  const segments = [
    { fr: "puis lorsque", phon: "fa-lammā", arabic: "فَلَمَّآ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: "a senti", phon: "aḥassa", arabic: "أَحَسَّ", word_key: "hss", is_particle: false, sense_retenu: "sentir", position: 2 },
    { fr: "Jésus", phon: "ʿīsā", arabic: "عِيسَىٰ", word_key: null, is_particle: false, sense_retenu: "Jésus (nom propre)", position: 3 },
    { fr: "venant d'eux", phon: "minhumu", arabic: "مِنْهُمُ", word_key: null, is_particle: true, sense_retenu: null, position: 4 },
    { fr: "la couverture", phon: "al-kufra", arabic: "ٱلْكُفْرَ", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 5 },
    { fr: "il a dit", phon: "qāla", arabic: "قَالَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 6 },
    { fr: "qui sont", phon: "man", arabic: "مَنْ", word_key: null, is_particle: true, sense_retenu: null, position: 7 },
    { fr: "mes secoureurs", phon: "anṣārī", arabic: "أَنصَارِىٓ", word_key: "nsr", is_particle: false, sense_retenu: "secourir", position: 8 },
    { fr: "vers", phon: "ilā", arabic: "إِلَى", word_key: null, is_particle: true, sense_retenu: null, position: 9 },
    { fr: "Dieu", phon: "Allāhi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 10 },
    { fr: "ont dit", phon: "qāla", arabic: "قَالَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 11 },
    { fr: "les éprouvés", phon: "al-ḥawāriyyūna", arabic: "ٱلْحَوَارِيُّونَ", word_key: "hwr", is_particle: false, sense_retenu: "purifié et éprouvé", position: 12 },
    { fr: "nous sommes", phon: "naḥnu", arabic: "نَحْنُ", word_key: null, is_particle: true, sense_retenu: null, position: 13 },
    { fr: "les secoureurs de", phon: "anṣāru", arabic: "أَنصَارُ", word_key: "nsr", is_particle: false, sense_retenu: "secourir", position: 14 },
    { fr: "Dieu", phon: "Allāhi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 15 },
    { fr: "nous avons mis notre confiance", phon: "āmannā", arabic: "ءَامَنَّا", word_key: "amn", is_particle: false, sense_retenu: "accorder la sécurité", position: 16 },
    { fr: "en Dieu", phon: "bi-Allāhi", arabic: "بِٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 17 },
    { fr: "et atteste", phon: "wa-ishhad", arabic: "وَٱشْهَدْ", word_key: "shd", is_particle: false, sense_retenu: "témoigner", position: 18 },
    { fr: "que nous sommes", phon: "bi-annā", arabic: "بِأَنَّا", word_key: null, is_particle: true, sense_retenu: null, position: 19 },
    { fr: "de ceux qui se remettent", phon: "muslimūna", arabic: "مُسْلِمُونَ", word_key: "slm", is_particle: false, sense_retenu: "soumission", position: 20 }
  ];

  // UPDATE verse_analyses (ghost entry exists)
  const { error: vaErr } = await db.from('verse_analyses').update({
    translation_arab: translationArab,
    translation_explanation: explanation,
    segments: segments,
    full_translation: fullTranslation
  }).eq('id', VA_ID);
  console.log('VA update:', vaErr ? 'ERREUR: ' + vaErr.message : 'OK');
}

// ═══════════════════════════════════════════════════════════════════
// VÉRIFICATION FINALE
// ═══════════════════════════════════════════════════════════════════

async function verify() {
  console.log('\n=== VÉRIFICATION FINALE ===\n');

  // 1. Check VA
  const { data: finalVA } = await db.from('verse_analyses').select('segments,translation_arab,full_translation,translation_explanation').eq('id', VA_ID).single();
  if (!finalVA) { console.log('ERREUR: VA id=' + VA_ID + ' non trouvé!'); return; }

  const impSegs = finalVA.segments.filter(s => !s.is_particle);
  const partSegs = finalVA.segments.filter(s => s.is_particle);
  console.log('Segments: ' + impSegs.length + ' importants, ' + partSegs.length + ' particules, ' + finalVA.segments.length + ' total');

  // 2. Check VWA
  const { data: finalVWA } = await db.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log('VWA: ' + finalVWA.length + ' entrées');
  finalVWA.forEach(w => console.log('  pos=' + w.position + ' ' + w.word_key + ' -> ' + w.sense_chosen));

  // 3. Check word_meanings counts
  for (const item of [{key: 'hss', aid: 1282}, {key: 'hwr', aid: 1283}]) {
    const { count } = await db.from('word_meanings').select('*', { count: 'exact', head: true }).eq('analysis_id', item.aid);
    console.log('word_meanings ' + item.key + ' (aid=' + item.aid + '): ' + count + ' sens');
  }

  // 4. Check daily phrases
  for (const item of [{key: 'hss', aid: 1282}, {key: 'hwr', aid: 1283}, {key: 'shd', aid: 2073}]) {
    const { count } = await db.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', item.aid);
    console.log('word_daily ' + item.key + ' (aid=' + item.aid + '): ' + count + ' phrases');
  }
}

// ═══════════════════════════════════════════════════════════════════
// RUN
// ═══════════════════════════════════════════════════════════════════

async function run() {
  console.log('═══════════════════════════════════════════');
  console.log('PIPELINE MAISON — Sourate 3, Verset 52');
  console.log('verse_id:', VERSE_ID, '| va_id:', VA_ID);
  console.log('═══════════════════════════════════════════');

  await runEnrichments();
  await runVWA();
  await runTranslation();
  await verify();

  console.log('\n═══════════════════════════════════════════');
  console.log('VERSET 3:52 — TERMINÉ');
  console.log('═══════════════════════════════════════════');
  console.log('  ahassa (hss) -> « Perception/Sensation » -> « a senti »');
  console.log('  al-kufra (kfr) -> « Couverture/Dissimulation » -> « la couverture »');
  console.log('  qala (qwl) -> « Parole/Énonciation » -> « il a dit »');
  console.log('  ansari (nsr) -> « Secours/Victoire » -> « mes secoureurs »');
  console.log('  Allahi (alh) -> « Divinité » -> « Dieu »');
  console.log('  al-hawariyyuna (hwr) -> « Pureté/Élection » -> « les éprouvés »');
  console.log('  ansaru (nsr) -> « Secours/Victoire » -> « les secoureurs de »');
  console.log('  amanna (amn) -> « Sécurité/Confiance » -> « nous avons mis notre confiance »');
  console.log('  ishhad (shd) -> « Témoignage/Attestation » -> « et atteste »');
  console.log('  muslimuna (slm) -> « Paix/Soumission » -> « de ceux qui se remettent »');
  console.log('\n  Traduction : "Puis, lorsque Jésus a senti la couverture venant d\'eux, il a dit : « Qui sont mes secoureurs vers Dieu ? » Les éprouvés ont dit : « Nous sommes les secoureurs de Dieu. Nous avons mis notre confiance en Dieu, et atteste que nous sommes de ceux qui se remettent. »"');
}

run().catch(console.error);
