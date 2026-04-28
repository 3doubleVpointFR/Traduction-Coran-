// Pipeline S3:V43 — Étapes 2-3-4
// Verset: يَـٰمَرْيَمُ ٱقْنُتِى لِرَبِّكِ وَٱسْجُدِى وَٱرْكَعِى مَعَ ٱلرَّٰكِعِينَ
// verse_id=336, VA_ID=693

const { createClient } = require('@supabase/supabase-js');
const sb = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const VERSE_ID = 336;
const VA_ID = 693;

async function main() {
  console.log('=== PIPELINE S3:V43 ===\n');

  // =====================================================
  // 1. ENRICHISSEMENT DES RACINES SUSPECTES
  // sjd (aid=448): 5 sens → enrichir via Lane's (+9 sens)
  // rka (aid=505): 4 sens → enrichir via Lane's (+6 sens)
  // =====================================================

  // --- 1a. Enrichir sjd (س ج د) ---
  console.log('--- 1a. Enrichir sjd (س ج د) ---');
  const { data: sjdExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', 448);
  console.log('sjd existant: ' + sjdExisting.length + ' sens');

  const sjdNewSenses = [
    // Concept: Humilité/Soumission (nouveau)
    {
      analysis_id: 448, sense: "s'humilier", concept: "Humilité/Soumission",
      description: "État d'abaissement volontaire devant plus grand que soi. L'humilité descend du cœur et se manifeste dans le corps — elle est directionnelle vers le bas et vers l'autre. C'est un mouvement permanent de l'ego qui se réduit.",
      meaning_type: 'etymology', display_order: 6
    },
    {
      analysis_id: 448, sense: "baisser la tête", concept: "Humilité/Soumission",
      description: "Geste physique d'humilité — incliner la tête vers le bas en signe de soumission.",
      meaning_type: 'etymology', display_order: 7
    },
    {
      analysis_id: 448, sense: "se soumettre", concept: "Humilité/Soumission",
      description: "Accepter l'autorité d'un autre en s'abaissant volontairement.",
      meaning_type: 'etymology', display_order: 8
    },
    // Concept: Salut/Hommage (nouveau)
    {
      analysis_id: 448, sense: "saluer", concept: "Salut/Hommage",
      description: "Acte social de respect envers une personne. Le salut est extérieur et dirigé vers l'autre — il sort de celui qui salue et atteint celui qui est salué. C'est ponctuel et volontaire.",
      meaning_type: 'etymology', display_order: 9
    },
    {
      analysis_id: 448, sense: "rendre hommage", concept: "Salut/Hommage",
      description: "Marquer son respect par un geste ou une parole — acte dirigé vers l'autre.",
      meaning_type: 'etymology', display_order: 10
    },
    {
      analysis_id: 448, sense: "honorer", concept: "Salut/Hommage",
      description: "Reconnaître la valeur d'une personne par un acte de respect visible.",
      meaning_type: 'etymology', display_order: 11
    },
    // Concept: Inclinaison/Nature (nouveau)
    {
      analysis_id: 448, sense: "palmier qui s'incline sous les fruits", concept: "Inclinaison/Nature",
      description: "Mouvement naturel d'obéissance des êtres non-humains. L'inclinaison est physique et non volontaire — elle exprime la soumission naturelle de la création aux lois de l'existence.",
      meaning_type: 'etymology', display_order: 12
    },
    {
      analysis_id: 448, sense: "bateau qui s'incline sous le vent", concept: "Inclinaison/Nature",
      description: "Mouvement de courbure provoqué par une force extérieure — le vent penche le navire.",
      meaning_type: 'etymology', display_order: 13
    },
    // Concept: Sens isolé/Debout (nouveau)
    {
      analysis_id: 448, sense: "se tenir droit", concept: "Sens isolé/Debout",
      description: "Sens contraire attesté dans le dialecte de Teiyi. Position debout et droite — opposé à la prosternation.",
      meaning_type: 'etymology', display_order: 14
    }
  ];

  const { error: sjdErr } = await sb.from('word_meanings').insert(sjdNewSenses);
  if (sjdErr) { console.log('ERREUR sjd:', sjdErr.message); return; }
  console.log('sjd insert: ' + sjdNewSenses.length + ' sens OK');

  // Update analysis_step
  await sb.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 448);

  // --- 1b. Enrichir rka (ر ك ع) ---
  console.log('\n--- 1b. Enrichir rka (ر ك ع) ---');
  const { data: rkaExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', 505);
  console.log('rka existant: ' + rkaExisting.length + ' sens');

  const rkaNewSenses = [
    // Concept: Humilité/Abaissement (nouveau)
    {
      analysis_id: 505, sense: "s'humilier devant Dieu", concept: "Humilité/Abaissement",
      description: "État intérieur d'abaissement volontaire. L'humilité est un mouvement du cœur vers le bas — se reconnaître petit devant le Créateur. C'est une attitude continue, pas ponctuelle.",
      meaning_type: 'etymology', display_order: 5
    },
    {
      analysis_id: 505, sense: "s'abaisser", concept: "Humilité/Abaissement",
      description: "Réduire sa position volontairement, accepter d'être en-dessous.",
      meaning_type: 'etymology', display_order: 6
    },
    // Concept: Chute/Déchéance (nouveau)
    {
      analysis_id: 505, sense: "tomber sur le visage", concept: "Chute/Déchéance",
      description: "Mouvement descendant subi — chute physique vers l'avant. C'est involontaire et soudain, contrairement à l'inclination qui est volontaire et contrôlée.",
      meaning_type: 'etymology', display_order: 7
    },
    {
      analysis_id: 505, sense: "trébucher", concept: "Chute/Déchéance",
      description: "Perte d'équilibre menant à la chute — mouvement involontaire.",
      meaning_type: 'etymology', display_order: 8
    },
    {
      analysis_id: 505, sense: "devenir pauvre", concept: "Chute/Déchéance",
      description: "Abaissement social — passer de la richesse à la pauvreté. C'est une déchéance métaphorique, un mouvement descendant dans le statut.",
      meaning_type: 'etymology', display_order: 9
    },
    // Concept: Sens isolé/Vieillesse (nouveau)
    {
      analysis_id: 505, sense: "se courber par la vieillesse", concept: "Sens isolé/Vieillesse",
      description: "Courbure physique causée par l'âge — permanente et progressive. Le corps se penche vers l'avant sous l'effet du temps.",
      meaning_type: 'etymology', display_order: 10
    }
  ];

  const { error: rkaErr } = await sb.from('word_meanings').insert(rkaNewSenses);
  if (rkaErr) { console.log('ERREUR rka:', rkaErr.message); return; }
  console.log('rka insert: ' + rkaNewSenses.length + ' sens OK');

  // Update analysis_step
  await sb.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 505);

  // =====================================================
  // 2. VÉRIFIER RICHESSE APRÈS ENRICHISSEMENT
  // =====================================================
  console.log('\n--- Richesse après enrichissement ---');
  const rootChecks = [
    { key: 'qnt', aid: 753 },
    { key: 'rbb', aid: 253 },
    { key: 'sjd', aid: 448 },
    { key: 'rka', aid: 505 }
  ];
  const conceptsMap = {};
  for (const r of rootChecks) {
    const { data: meanings } = await sb.from('word_meanings').select('sense,concept,description').eq('analysis_id', r.aid).order('display_order');
    const concepts = {};
    meanings.forEach(m => {
      if (!concepts[m.concept]) concepts[m.concept] = [];
      concepts[m.concept].push(m.sense);
    });
    conceptsMap[r.key] = concepts;
    const cNames = Object.keys(concepts);
    console.log(`${r.key} (aid=${r.aid}): ${meanings.length} sens, ${cNames.length} concepts`);
    cNames.forEach(c => {
      console.log(`  ${c}(${concepts[c].length}): ${concepts[c].join(', ')}`);
    });
  }

  // =====================================================
  // 3. CORRIGER LES SEGMENTS
  // - pos=1 (maryam): type important → particle
  // - Assigner les keys manquantes à tous les segments
  // =====================================================
  console.log('\n--- 3. Fix segments ---');
  const { data: vaData } = await sb.from('verse_analyses').select('segments_step1').eq('id', VA_ID).single();
  const segs = vaData.segments_step1;

  // Fix pos=1: maryam → particle
  const seg1 = segs.find(s => s.position === 1);
  if (seg1) {
    seg1.type = 'particle';
    console.log('pos=1: type → particle (nom propre Maryam)');
  }

  // Assign keys
  const keyMap = { 2: 'qnt', 3: 'rbb', 4: 'sjd', 5: 'rka', 7: 'rka' };
  const rootMap = { 2: 'ق ن ت', 3: 'ر ب ب', 4: 'س ج د', 5: 'ر ك ع', 7: 'ر ك ع' };
  for (const [pos, key] of Object.entries(keyMap)) {
    const seg = segs.find(s => s.position === parseInt(pos));
    if (seg) {
      seg.key = key;
      seg.root = rootMap[pos];
      console.log(`pos=${pos}: key → ${key}`);
    }
  }

  const { error: segErr } = await sb.from('verse_analyses').update({ segments_step1: segs }).eq('id', VA_ID);
  if (segErr) { console.log('ERREUR segments:', segErr.message); return; }
  console.log('Segments mis à jour');

  const important = segs.filter(s => s.type === 'important');
  const particles = segs.filter(s => s.type === 'particle');
  console.log(`Important: ${important.length} | Particle: ${particles.length} | Total: ${segs.length}`);

  // =====================================================
  // 4. VWA — 5 entries
  // =====================================================
  console.log('\n--- 4. VWA ---');

  await sb.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);

  const vwaEntries = [
    // pos=2: uqnutī → qnt(753) — dévotion
    {
      verse_id: VERSE_ID, word_key: 'qnt', root: 'ق ن ت', position: 2,
      sense_chosen: 'dévotion',
      analysis_axes: {
        concept_chosen: "Dévotion/Humilité",
        sense_chosen: "dévotion",
        concepts: {
          "Dévotion/Humilité": {
            status: "retenu",
            senses: conceptsMap.qnt["Dévotion/Humilité"],
            proof_ctx: "L'impératif uqnutī ordonne un état de dévotion humble et prolongée envers Dieu. La préposition li (à/pour) devant rabbiki confirme que cette dévotion est dirigée vers le Seigneur. Contrairement à Silence/Soumission qui est passif, la dévotion est un engagement actif et continu."
          },
          "Silence/Soumission": {
            status: "probable",
            senses: conceptsMap.qnt["Silence/Soumission"],
            proof_ctx: "Le silence soumis est cohérent avec le contexte de dévotion, mais il capture une attitude passive — rester silencieux — plutôt que l'engagement actif que porte la racine q-n-t."
          },
          "Sens isolé/Frugalité": {
            status: "nul",
            senses: conceptsMap.qnt["Sens isolé/Frugalité"],
            proof_ctx: "Aucun rapport avec le contexte de commandement à Marie."
          }
        }
      }
    },
    // pos=3: rabbiki → rbb(253) — seigneur
    {
      verse_id: VERSE_ID, word_key: 'rbb', root: 'ر ب ب', position: 3,
      sense_chosen: 'seigneur',
      analysis_axes: {
        concept_chosen: "Seigneurie/Autorité bienveillante",
        sense_chosen: "seigneur",
        concepts: {
          "Croissance/Augmentation": {
            status: "nul",
            senses: conceptsMap.rbb["Croissance/Augmentation"],
            proof_ctx: "Le contexte n'est pas la croissance mais la relation d'autorité — rabb désigne ici celui qui commande la dévotion."
          },
          "Seigneurie/Autorité bienveillante": {
            status: "retenu",
            senses: conceptsMap.rbb["Seigneurie/Autorité bienveillante"],
            proof_ctx: "Rabbiki avec la préposition li désigne le destinataire de la dévotion — celui qui élève et accompagne Marie. L'autorité bienveillante est le seul sens compatible avec le commandement de dévotion. Contrairement à Éducation qui est un processus, la Seigneurie est une position relationnelle."
          },
          "Éducation/Accompagnement": {
            status: "probable",
            senses: conceptsMap.rbb["Éducation/Accompagnement"],
            proof_ctx: "L'éducation est liée à la racine r-b-b, mais le contexte est un commandement de dévotion — rabbiki désigne ici l'autorité, pas l'acte d'éduquer."
          },
          "Commerce/Usure": {
            status: "nul",
            senses: conceptsMap.rbb["Commerce/Usure"],
            proof_ctx: "Hors sujet."
          },
          "Souffle/Vent": {
            status: "nul",
            senses: conceptsMap.rbb["Souffle/Vent"],
            proof_ctx: "Hors sujet."
          },
          "Sens isolé/Fixer": {
            status: "nul",
            senses: conceptsMap.rbb["Sens isolé/Fixer"],
            proof_ctx: "Hors sujet."
          },
          "Sens isolé/Rassembler": {
            status: "nul",
            senses: conceptsMap.rbb["Sens isolé/Rassembler"],
            proof_ctx: "Hors sujet."
          },
          "Sens isolé/Groupe": {
            status: "nul",
            senses: conceptsMap.rbb["Sens isolé/Groupe"],
            proof_ctx: "Hors sujet."
          },
          "Sens isolé/Confiture": {
            status: "nul",
            senses: conceptsMap.rbb["Sens isolé/Confiture"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=4: usjudī → sjd(448) — se prosterner
    {
      verse_id: VERSE_ID, word_key: 'sjd', root: 'س ج د', position: 4,
      sense_chosen: 'se prosterner',
      analysis_axes: {
        concept_chosen: "Prosternation/Adoration",
        sense_chosen: "se prosterner",
        concepts: {
          "Prosternation/Adoration": {
            status: "retenu",
            senses: conceptsMap.sjd["Prosternation/Adoration"],
            proof_ctx: "L'impératif usjudī ordonne l'acte physique de prosternation — poser le front au sol. C'est un acte extérieur et directionnel vers le bas. Contrairement à Humilité/Soumission qui est un état intérieur, la prosternation est un geste physique spécifique commandé par l'impératif."
          },
          "Humilité/Soumission": {
            status: "probable",
            senses: conceptsMap.sjd["Humilité/Soumission"],
            proof_ctx: "L'humilité est un état intérieur qui accompagne la prosternation, mais l'impératif commande un acte physique précis, pas un état intérieur."
          },
          "Salut/Hommage": {
            status: "nul",
            senses: conceptsMap.sjd["Salut/Hommage"],
            proof_ctx: "Le contexte est la dévotion à Dieu, pas un salut social entre personnes."
          },
          "Inclinaison/Nature": {
            status: "nul",
            senses: conceptsMap.sjd["Inclinaison/Nature"],
            proof_ctx: "Le contexte est une action humaine commandée, pas un mouvement naturel."
          },
          "Lieu de prosternation": {
            status: "nul",
            senses: conceptsMap.sjd["Lieu de prosternation"],
            proof_ctx: "Le texte ordonne une action, pas un lieu."
          },
          "Sens isolé/Debout": {
            status: "nul",
            senses: conceptsMap.sjd["Sens isolé/Debout"],
            proof_ctx: "Sens dialectal contraire, hors sujet."
          }
        }
      }
    },
    // pos=5: irkaʿī → rka(505) — s'incliner
    {
      verse_id: VERSE_ID, word_key: 'rka', root: 'ر ك ع', position: 5,
      sense_chosen: "s'incliner",
      analysis_axes: {
        concept_chosen: "Inclination/Prière",
        sense_chosen: "s'incliner",
        concepts: {
          "Inclination/Prière": {
            status: "retenu",
            senses: conceptsMap.rka["Inclination/Prière"],
            proof_ctx: "L'impératif irkaʿī ordonne l'acte physique d'inclination — plier le corps vers l'avant. C'est un geste distinct de la prosternation (sujūd) : le corps se penche mais ne touche pas le sol. Contrairement à Humilité/Abaissement qui est un état intérieur, l'inclination est un geste concret commandé."
          },
          "Humilité/Abaissement": {
            status: "probable",
            senses: conceptsMap.rka["Humilité/Abaissement"],
            proof_ctx: "L'humilité accompagne l'inclination, mais l'impératif commande un geste physique précis, pas un état intérieur d'abaissement."
          },
          "Chute/Déchéance": {
            status: "nul",
            senses: conceptsMap.rka["Chute/Déchéance"],
            proof_ctx: "Le contexte est la dévotion volontaire, pas la chute involontaire ou la déchéance sociale."
          },
          "Sens isolé/Vieillesse": {
            status: "nul",
            senses: conceptsMap.rka["Sens isolé/Vieillesse"],
            proof_ctx: "La courbure par la vieillesse est involontaire — hors sujet pour un commandement divin."
          }
        }
      }
    },
    // pos=7: ar-rākiʿīna → rka(505) — s'incliner (participe actif pluriel)
    {
      verse_id: VERSE_ID, word_key: 'rka', root: 'ر ك ع', position: 7,
      sense_chosen: "s'incliner",
      analysis_axes: {
        concept_chosen: "Inclination/Prière",
        sense_chosen: "s'incliner",
        concepts: {
          "Inclination/Prière": {
            status: "retenu",
            senses: conceptsMap.rka["Inclination/Prière"],
            proof_ctx: "Le participe actif ar-rākiʿīna désigne ceux qui pratiquent l'inclination de manière continue et habituelle — ce sont des personnes définies par cet acte. La préposition maʿa (avec) ordonne à Marie de rejoindre ce groupe de pratiquants."
          },
          "Humilité/Abaissement": {
            status: "probable",
            senses: conceptsMap.rka["Humilité/Abaissement"],
            proof_ctx: "L'humilité est un état intérieur, mais le participe actif décrit une action visible et continue, pas un état passif."
          },
          "Chute/Déchéance": {
            status: "nul",
            senses: conceptsMap.rka["Chute/Déchéance"],
            proof_ctx: "Hors sujet — le participe actif décrit une pratique volontaire."
          },
          "Sens isolé/Vieillesse": {
            status: "nul",
            senses: conceptsMap.rka["Sens isolé/Vieillesse"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    }
  ];

  const { error: vwaErr } = await sb.from('verse_word_analyses').insert(vwaEntries);
  if (vwaErr) { console.log('ERREUR VWA:', vwaErr.message); return; }
  console.log(`VWA insert: ${vwaEntries.length} entries OK`);

  // =====================================================
  // 5. TRADUCTION
  // =====================================================
  console.log('\n--- 5. Translation ---');

  const translation_arab = `Ô Marie, dévoue-toi à ton Seigneur, prosterne-toi et incline-toi avec ceux qui s'inclinent.`;

  const full_translation = `Ô Marie, obéis à ton Seigneur, prosterne-toi, et incline-toi avec ceux qui s'inclinent.`;

  const translation_explanation = `§DEMARCHE§
Ce verset fait suite à l'annonce faite à Marie (verset 42) qu'elle a été choisie et purifiée par Dieu. Le texte passe maintenant aux commandements : les messagers ordonnent à Marie de se consacrer à son Seigneur par la dévotion, la prosternation et l'inclination avec ceux qui s'inclinent. La particule vocative **yā** (ô) maintient l'adresse directe à Marie commencée au verset précédent.

**uqnutī** (dévoue-toi) est un verbe à l'impératif (une forme qui donne un ordre) à la 2ème personne du féminin singulier de la racine q-n-t. Le sens premier est la dévotion humble et prolongée — obéir avec humilité et constance. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le qunūt implique l'obéissance dévotieuse, la prière prolongée et le silence soumis. L'impératif ordonne à Marie d'adopter cet état de dévotion continue. Le complément **li-rabbiki** (à ton Seigneur) indique vers qui cette dévotion est dirigée — la préposition li (à/pour) marque le destinataire. On traduit par « dévoue-toi ».

**rabbiki** (ton Seigneur) est un nom masculin de la racine r-b-b au génitif, précédé de la préposition li (à/pour) et suivi du pronom suffixe -ki (ton, féminin). La racine r-b-b porte le sens premier de « celui qui fait grandir, qui élève, qui accompagne la croissance ». En construction avec li, il désigne le destinataire de la dévotion ordonnée à Marie. Le pronom -ki (ton) établit une relation personnelle entre Marie et son Seigneur. On traduit par « ton Seigneur ».

**usjudī** (prosterne-toi) est un verbe à l'impératif à la 2ème personne du féminin singulier de la racine s-j-d, précédé de la conjonction wa (et). D'après les sources étymologiques, le sens premier de s-j-d est l'abaissement — baisser la tête et mettre le front au sol. C'est l'acte d'humilité physique le plus profond — le corps entier s'abaisse jusqu'au sol. L'impératif ordonne à Marie cet acte spécifique de prosternation. On traduit par « prosterne-toi ».

**irkaʿī** (incline-toi) est un verbe à l'impératif à la 2ème personne du féminin singulier de la racine r-k-ʿ, précédé de la conjonction wa (et). D'après les sources étymologiques, le sens premier de r-k-ʿ est se courber, s'incliner — plier le corps vers l'avant. C'est un geste moins profond que la prosternation : le corps se penche mais ne touche pas le sol. La structure du verset place la prosternation (sujūd) avant l'inclination (rukūʿ), ce qui est l'inverse de l'ordre habituel dans la prière rituelle — le texte ne suit pas l'ordre rituel mais liste deux formes distinctes d'adoration. On traduit par « incline-toi ».

**ar-rākiʿīna** (ceux qui s'inclinent) est un participe actif (une forme qui décrit ceux qui FONT l'action activement et de manière continue) au pluriel masculin défini (avec l'article al-) de la racine r-k-ʿ. Le participe actif indique des personnes qui pratiquent l'inclination comme état habituel — ce ne sont pas des gens qui se sont inclinés une fois mais des gens dont l'inclination est une pratique constante. L'article al- indique un groupe connu et identifié. La préposition **maʿa** (avec) ordonne à Marie de rejoindre ce groupe — de pratiquer sa dévotion non pas isolément mais au sein d'une communauté de croyants qui s'inclinent. On traduit par « ceux qui s'inclinent ».

§JUSTIFICATION§
**dévoue-toi** — Le sens retenu est « dévotion » de la racine q-n-t. Le mot « dévoue-toi » est choisi car il capture l'engagement profond et continu envers Dieu — au-delà de la simple obéissance ponctuelle. L'alternative « obéis » est écartée car la racine ṭ-w-ʿ existe en arabe pour l'obéissance simple — si le sens voulu était l'obéissance, c'est ce verbe qui aurait été utilisé. L'alternative « sois humble » est écartée car l'humilité seule ne capture pas la dimension active et dévotionnelle de q-n-t.

**ton Seigneur** — Le sens retenu est « seigneur » de la racine r-b-b. Le mot « Seigneur » est choisi car il capture l'autorité bienveillante — celui qui élève et accompagne. L'alternative « maître » est écartée car elle implique une relation de domination sans la nuance de soin. L'alternative « éducateur » est écartée car le contexte est un commandement de dévotion, pas d'éducation.

**prosterne-toi** — Le sens retenu est « se prosterner » de la racine s-j-d. Le mot « prosterne-toi » est choisi car il désigne l'acte physique précis de s'abaisser jusqu'au sol, le front touchant la terre. L'alternative « s'incliner » est écartée car l'inclination est un mouvement moins profond couvert par la racine r-k-ʿ — utiliser le même mot pour les deux racines effacerait la distinction. L'alternative « adorer » est écartée car c'est un état intérieur, pas un geste physique spécifique.

**incline-toi** — Le sens retenu est « s'incliner » de la racine r-k-ʿ. Le mot « incline-toi » est choisi car il désigne le mouvement de plier le corps vers l'avant sans toucher le sol — distinct de la prosternation. L'alternative « se courber » est écartée car elle insiste sur la déformation du corps plutôt que sur l'acte volontaire d'adoration. L'alternative « prie » est écartée car le texte liste des gestes spécifiques, pas la prière dans son ensemble.

**ceux qui s'inclinent** — Le sens retenu est « s'incliner » de la racine r-k-ʿ. Le participe actif ar-rākiʿīna est traduit par « ceux qui s'inclinent » — la formule « ceux qui + verbe » est la manière naturelle en français de rendre un participe actif pluriel. L'alternative « les inclinés » est écartée car le participe actif indique une action continue volontaire, pas un état résultant passif.

§CRITIQUE§
**dévoue-toi vs obéis** : Les traductions courantes donnent « obéis » pour uqnutī. Le verbe ṭāʿa (racine ṭ-w-ʿ) existe en arabe et signifie spécifiquement « obéir ». Si le sens voulu était la simple obéissance, c'est ce verbe qui aurait été employé. La racine q-n-t porte une nuance de dévotion humble et prolongée — un engagement continu de tout l'être envers Dieu, pas un acte ponctuel d'obéissance à un ordre. Notre traduction donne « dévoue-toi » car elle capture cette dimension de don de soi dans la durée. La différence change le ton du verset : « obéis » est un ordre d'autorité verticale, « dévoue-toi » est une invitation à l'engagement profond et volontaire.

Les autres mots du verset (prosterne-toi, incline-toi, ceux qui s'inclinent) sont traduits de manière similaire dans les traductions courantes et ne changent pas le sens global.`;

  // Segments d'affichage
  const displaySegments = [
    { fr: "ô Marie", pos: "", phon: "yā maryamu", arabic: "يَـٰمَرْيَمُ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: "dévoue-toi", pos: "V", phon: "uqnutī", arabic: "ٱقْنُتِى", word_key: "qnt", is_particle: false, sense_retenu: "dévotion", position: 2 },
    { fr: "à ton Seigneur", pos: "N", phon: "li-rabbiki", arabic: "لِرَبِّكِ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 3 },
    { fr: "prosterne-toi", pos: "V", phon: "usjudī", arabic: "وَٱسْجُدِى", word_key: "sjd", is_particle: false, sense_retenu: "se prosterner", position: 4 },
    { fr: "et incline-toi", pos: "V", phon: "irkaʿī", arabic: "وَٱرْكَعِى", word_key: "rka", is_particle: false, sense_retenu: "s'incliner", position: 5 },
    { fr: "avec", pos: "", phon: "maʿa", arabic: "مَعَ", word_key: null, is_particle: true, sense_retenu: null, position: 6 },
    { fr: "ceux qui s'inclinent", pos: "N", phon: "ar-rākiʿīna", arabic: "ٱلرَّٰكِعِينَ", word_key: "rka", is_particle: false, sense_retenu: "s'incliner", position: 7 }
  ];

  const { error: transErr } = await sb.from('verse_analyses').update({
    translation_arab,
    full_translation,
    translation_explanation,
    segments: displaySegments
  }).eq('id', VA_ID);

  if (transErr) { console.log('ERREUR translation:', transErr.message); return; }
  console.log('Translation save: OK');

  // =====================================================
  // 6. DAILY PHRASES
  // rka (aid=505): 0 phrases → INSERT 3
  // Autres: déjà 3 → SKIP
  // =====================================================
  console.log('\n--- 6. Daily phrases ---');

  const dailyChecks = [
    { key: 'qnt', aid: 753 },
    { key: 'rbb', aid: 253 },
    { key: 'sjd', aid: 448 },
    { key: 'rka', aid: 505 }
  ];

  for (const r of dailyChecks) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    if (count > 0) {
      console.log(`${r.key} (aid=${r.aid}): ${count} phrases → SKIP`);
    } else {
      console.log(`${r.key} (aid=${r.aid}): 0 phrases → INSERT`);
    }
  }

  // Insert daily phrases for rka only
  const rkaDailyPhrases = [
    {
      analysis_id: 505,
      sense: "s'incliner",
      arabic: "اركع",
      phon: "irkaʿ",
      french: "Incline-toi pour ramasser ce qui est tombé."
    },
    {
      analysis_id: 505,
      sense: "s'incliner",
      arabic: "ركع",
      phon: "rakaʿa",
      french: "Il s'est incliné pour saluer le public après le spectacle."
    },
    {
      analysis_id: 505,
      sense: "s'incliner",
      arabic: "الراكعين",
      phon: "ar-rākiʿīna",
      french: "Les gens qui s'inclinent montrent leur respect."
    }
  ];

  const { error: dailyErr } = await sb.from('word_daily').insert(rkaDailyPhrases);
  if (dailyErr) { console.log('ERREUR daily:', dailyErr.message); return; }
  console.log('Daily insert: 3 phrases OK (rka)');

  // =====================================================
  // 7. VÉRIFICATION FINALE
  // =====================================================
  console.log('\n--- 7. Vérification finale ---');

  const { data: finalVA } = await sb.from('verse_analyses').select('segments,translation_arab,full_translation,translation_explanation').eq('id', VA_ID).single();
  const impSegs = finalVA.segments.filter(s => !s.is_particle);
  const partSegs = finalVA.segments.filter(s => s.is_particle);
  console.log(`Segments: ${impSegs.length} important, ${partSegs.length} particle, ${finalVA.segments.length} total`);

  const { data: finalVWA } = await sb.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log(`VWA: ${finalVWA.length} entries`);
  finalVWA.forEach(w => console.log(`  pos=${w.position} ${w.word_key} → ${w.sense_chosen}`));

  const vwaPositions = finalVWA.map(w => w.position).sort((a, b) => a - b);
  const segPositions = impSegs.map(s => s.position).sort((a, b) => a - b);
  console.log(`Positions match: ${JSON.stringify(vwaPositions) === JSON.stringify(segPositions) ? 'OK' : 'MISMATCH!'}`);

  console.log(`full_translation: ${finalVA.full_translation ? 'OK' : 'MISSING!'}`);
  console.log(`translation: ${finalVA.translation_arab ? 'OK' : 'MISSING!'}`);
  console.log(`explanation: ${finalVA.translation_explanation ? 'OK (' + finalVA.translation_explanation.length + ' chars)' : 'MISSING!'}`);

  // Verify sense_retenu matches word_meanings
  for (const seg of impSegs) {
    const aid = rootChecks.find(r => r.key === seg.word_key)?.aid;
    if (aid) {
      const { data: meanings } = await sb.from('word_meanings').select('sense').eq('analysis_id', aid);
      const senses = meanings.map(m => m.sense);
      const match = senses.includes(seg.sense_retenu);
      if (!match) console.log(`  ⚠️ pos=${seg.position} sense_retenu="${seg.sense_retenu}" NOT in word_meanings!`);
    }
  }
  console.log('Sense_retenu verification: done');

  // Check for forbidden words
  const hasConceptWord = finalVA.translation_explanation.match(/concept/gi);
  const hasExegeseWord = finalVA.translation_explanation.match(/exégèse/gi);
  if (hasConceptWord) console.log('⚠️ Mot "concept" trouvé dans translation_explanation!');
  if (hasExegeseWord) console.log('⚠️ Mot "exégèse" trouvé dans translation_explanation!');
  if (!hasConceptWord && !hasExegeseWord) console.log('Mots interdits: aucun trouvé ✅');

  console.log('\n=== PIPELINE S3:V43 TERMINÉE ===');
  console.log(`\nVERSET 3:43 — TERMINÉ`);
  finalVWA.forEach(w => console.log(`  ${w.word_key} → sens "${w.sense_chosen}"`));
  console.log(`Traduction : "${finalVA.translation_arab}"`);
}

main().catch(e => console.error(e));
