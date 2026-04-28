// Pipeline Sourate 91 — Étape 2: Création racines manquantes (Thw, xyb, dmdm)
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config({ path: ".env.local" });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const MODEL = "claude-pipeline";
const PROMPT = "v6-step2-manual";

async function createRoot(wordKey, rootAr, rootPhon, totalOcc) {
  const { data: exist } = await sb.from("word_analyses").select("id").eq("word_key", wordKey).limit(1);
  if (exist && exist.length > 0) {
    console.log(`  ${wordKey} existe deja, id=${exist[0].id}`);
    return exist[0].id;
  }
  const { data, error } = await sb.from("word_analyses").insert({
    word_key: wordKey,
    root_ar: rootAr,
    root_phon: rootPhon,
    total_occurrences: totalOcc,
    analysis_step: "senses_done",
    model_used: MODEL,
    prompt_version: PROMPT
  }).select().single();
  if (error) { console.error("Error insert " + wordKey + ":", error.message); return null; }
  console.log(`  Cree ${wordKey} id=${data.id}`);
  return data.id;
}

async function insertMeanings(analysisId, meanings) {
  const { count } = await sb.from("word_meanings").select("*", { count: "exact", head: true })
    .eq("analysis_id", analysisId).not("concept", "is", null);
  if (count > 0) {
    console.log(`  Concepts existent deja (${count}) — SKIP`);
    return;
  }
  const { error } = await sb.from("word_meanings").insert(meanings);
  if (error) { console.error("Error insert meanings:", error.message); return; }
  console.log(`  ${meanings.length} concepts inseres`);
}

async function main() {
  // === 1. Racine Thw (ط ح و) — spread/extend ===
  console.log("=== Creation racine Thw (\u0637 \u062D \u0648) ===");
  const thwId = await createRoot("Thw", "\u0637 \u062D \u0648", "\u1E6Da\u1E25\u0101", 1);
  if (thwId) {
    await insertMeanings(thwId, [
      {
        analysis_id: thwId,
        concept: "Extension/\u00C9talement",
        sense: "\u00E9tendre",
        description: "Acte d\u2019\u00E9tendre une chose en surface. L\u2019extension sort de celui qui \u00E9tend et s\u2019applique \u00E0 ce qui est \u00E9tendu. C\u2019est directionnel, horizontal et r\u00E9sulte en une surface plane et large. Le Lane\u2019s (Edward Lane, 1863) donne : il a \u00E9tendu, \u00E9tal\u00E9, d\u00E9ploy\u00E9. L\u2019acte est analogue \u00E0 d-h-w (daha) \u2014 les deux racines d\u00E9crivent l\u2019aplanissement d\u2019une surface.",
        meaning_type: "etymology",
        display_order: 1
      },
      {
        analysis_id: thwId,
        concept: "Extension/\u00C9talement",
        sense: "\u00E9taler",
        description: "D\u00E9ployer une chose sur une surface.",
        meaning_type: "etymology",
        display_order: 2
      },
      {
        analysis_id: thwId,
        concept: "Extension/\u00C9talement",
        sense: "aplanir",
        description: "Rendre plat et uniforme.",
        meaning_type: "etymology",
        display_order: 3
      },
      {
        analysis_id: thwId,
        concept: "Rejet/R\u00E9pulsion",
        sense: "repousser",
        description: "Acte de repousser une chose ou une personne. Le Lane\u2019s donne : les gens se repoussent les uns les autres (yaTHa ba\u2019duhum ba\u2019dan). C\u2019est un mouvement de s\u00E9paration entre des personnes.",
        meaning_type: "etymology",
        display_order: 4
      },
      {
        analysis_id: thwId,
        concept: "Rejet/R\u00E9pulsion",
        sense: "\u00E9carter",
        description: "\u00C9loigner une chose de soi.",
        meaning_type: "etymology",
        display_order: 5
      }
    ]);
  }

  // === 2. Racine xyb (خ ي ب) — fail/disappoint ===
  console.log("=== Creation racine xyb (\u062E \u064A \u0628) ===");
  const xybId = await createRoot("xyb", "\u062E \u064A \u0628", "kh\u0101ba", 4);
  if (xybId) {
    await insertMeanings(xybId, [
      {
        analysis_id: xybId,
        concept: "\u00C9chec/D\u00E9ception",
        sense: "\u00E9chouer",
        description: "\u00C9tat de ne pas atteindre ce qu\u2019on cherchait. L\u2019\u00E9chec est un r\u00E9sultat n\u00E9gatif d\u2019un effort \u2014 il reste chez celui qui \u00E9choue, c\u2019est un \u00E9tat int\u00E9rieur de perte et de frustration. Le Lane\u2019s (Edward Lane, 1863) donne : il a \u00E9t\u00E9 d\u00E9\u00E7u de ne pas obtenir ce qu\u2019il d\u00E9sirait ou cherchait, il a \u00E9chou\u00E9, il n\u2019a pas atteint son but.",
        meaning_type: "etymology",
        display_order: 1
      },
      {
        analysis_id: xybId,
        concept: "\u00C9chec/D\u00E9ception",
        sense: "\u00EAtre d\u00E9\u00E7u",
        description: "Ne pas obtenir ce qu\u2019on esp\u00E9rait.",
        meaning_type: "etymology",
        display_order: 2
      },
      {
        analysis_id: xybId,
        concept: "\u00C9chec/D\u00E9ception",
        sense: "\u00EAtre frustr\u00E9",
        description: "\u00CAtre emp\u00Each\u00E9 d\u2019atteindre son but.",
        meaning_type: "etymology",
        display_order: 3
      },
      {
        analysis_id: xybId,
        concept: "Perte/Privation",
        sense: "subir une perte",
        description: "\u00C9tat d\u2019avoir perdu quelque chose de valeur. La perte est un appauvrissement. Le Lane\u2019s donne : il a subi une perte.",
        meaning_type: "etymology",
        display_order: 4
      },
      {
        analysis_id: xybId,
        concept: "Perte/Privation",
        sense: "perdre",
        description: "Ne plus avoir ce qu\u2019on avait.",
        meaning_type: "etymology",
        display_order: 5
      }
    ]);
  }

  // === 3. Racine dmdm (د م د م) — destroy/crush ===
  console.log("=== Creation racine dmdm (\u062F \u0645 \u062F \u0645) ===");
  const dmdmId = await createRoot("dmdm", "\u062F \u0645 \u062F \u0645", "damdama", 1);
  if (dmdmId) {
    await insertMeanings(dmdmId, [
      {
        analysis_id: dmdmId,
        concept: "Destruction/\u00C9crasement",
        sense: "d\u00E9truire",
        description: "Acte de r\u00E9duire \u00E0 n\u00E9ant, d\u2019\u00E9craser compl\u00E8tement. La destruction sort de celui qui d\u00E9truit et atteint ce qui est d\u00E9truit \u2014 c\u2019est directionnel, total et irr\u00E9versible. Le Lane\u2019s (Edward Lane, 1863) donne : il les a \u00E9cras\u00E9s et d\u00E9truits. Le Coran (91:14) utilise damdama \u2018alayhim rabbuhum : leur Seigneur les a d\u00E9truits. Le Lane\u2019s pr\u00E9cise : il a fait tomber le ch\u00E2timent sur eux de mani\u00E8re universelle et totale.",
        meaning_type: "etymology",
        display_order: 1
      },
      {
        analysis_id: dmdmId,
        concept: "Destruction/\u00C9crasement",
        sense: "\u00E9craser",
        description: "R\u00E9duire en pi\u00E8ces par la force.",
        meaning_type: "etymology",
        display_order: 2
      },
      {
        analysis_id: dmdmId,
        concept: "Destruction/\u00C9crasement",
        sense: "an\u00E9antir",
        description: "D\u00E9truire totalement et irr\u00E9versiblement.",
        meaning_type: "etymology",
        display_order: 3
      },
      {
        analysis_id: dmdmId,
        concept: "Col\u00E8re/M\u00E9contentement",
        sense: "se mettre en col\u00E8re",
        description: "\u00C9tat int\u00E9rieur d\u2019irritation intense dirig\u00E9 vers quelqu\u2019un. La col\u00E8re est une \u00E9motion qui reste chez celui qui la ressent mais peut se manifester par des actes. Le Lane\u2019s donne : il lui a parl\u00E9 avec col\u00E8re.",
        meaning_type: "etymology",
        display_order: 4
      },
      {
        analysis_id: dmdmId,
        concept: "Col\u00E8re/M\u00E9contentement",
        sense: "parler avec col\u00E8re",
        description: "S\u2019exprimer avec irritation.",
        meaning_type: "etymology",
        display_order: 5
      },
      {
        analysis_id: dmdmId,
        concept: "Tremblement/S\u00E9isme",
        sense: "faire trembler la terre",
        description: "Acte de provoquer un s\u00E9isme. Le Lane\u2019s cite l\u2019interpr\u00E9tation de Fr (al-Farra\u2019) : il a fait trembler la terre sous eux.",
        meaning_type: "etymology",
        display_order: 6
      }
    ]);
  }

  // === Resume ===
  console.log("\n=== RESUME ===");
  console.log("Thw id=" + thwId);
  console.log("xyb id=" + xybId);
  console.log("dmdm id=" + dmdmId);
}

main().catch(console.error);
