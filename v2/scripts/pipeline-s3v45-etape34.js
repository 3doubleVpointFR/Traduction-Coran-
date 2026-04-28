// Pipeline S3:V45 — Étapes 2-3-4
// Verset: إِذْ قَالَتِ ٱلْمَلَٰٓئِكَةُ يَٰمَرْيَمُ إِنَّ ٱللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ ٱسْمُهُ ٱلْمَسِيحُ عِيسَى ٱبْنُ مَرْيَمَ وَجِيهًا فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ وَمِنَ ٱلْمُقَرَّبِينَ
// verse_id=338, VA_ID=696

const { createClient } = require('@supabase/supabase-js');
const sb = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const VERSE_ID = 338;
const VA_ID = 696;

async function main() {
  console.log('=== PIPELINE S3:V45 ===\n');

  // =====================================================
  // 1. ENRICHISSEMENT DES RACINES SUSPECTES
  // dnw (aid=656): 4 sens → enrichir (+9 sens, 3 nouveaux concepts)
  // =====================================================

  console.log('--- 1. Enrichir dnw (د ن و) ---');
  const { data: dnwExisting } = await sb.from('word_meanings').select('id').eq('analysis_id', 656);
  console.log('dnw existant: ' + dnwExisting.length + ' sens');

  const dnwNewSenses = [
    // Enrichir Proximité/Rapprochement (existant — ajouter 3 sous-sens)
    {
      analysis_id: 656, sense: "s'approcher peu à peu", concept: "Proximité/Rapprochement",
      description: "Se rapprocher graduellement, par petits pas. C'est un mouvement progressif et contrôlé, pas un bond soudain.",
      meaning_type: 'etymology', display_order: 5
    },
    {
      analysis_id: 656, sense: "s'approcher mutuellement", concept: "Proximité/Rapprochement",
      description: "Mouvement réciproque de deux entités qui convergent l'une vers l'autre.",
      meaning_type: 'etymology', display_order: 6
    },
    {
      analysis_id: 656, sense: "être sur le point de", concept: "Proximité/Rapprochement",
      description: "Proximité temporelle avec un événement imminent — être proche de l'accouchement, de l'aboutissement.",
      meaning_type: 'etymology', display_order: 7
    },
    // Concept: Parenté/Lien (nouveau)
    {
      analysis_id: 656, sense: "parenté", concept: "Parenté/Lien",
      description: "Proximité familiale — lien de sang entre deux personnes. La parenté est une forme de proximité permanente et non choisie. Le Lane's cite danāwa comme synonyme de qarāba (lien de parenté).",
      meaning_type: 'etymology', display_order: 8
    },
    {
      analysis_id: 656, sense: "parent proche", concept: "Parenté/Lien",
      description: "Membre de la famille en lien direct — cousin germain, oncle paternel.",
      meaning_type: 'etymology', display_order: 9
    },
    // Concept: Bassesse/Médiocrité (nouveau)
    {
      analysis_id: 656, sense: "poursuivre les choses basses", concept: "Bassesse/Médiocrité",
      description: "Rechercher ce qui est petit, mesquin, sans valeur. C'est un mouvement volontaire vers le bas — choisir la médiocrité. Le Lane's cite dannā fī l-umūr : il poursuivait les affaires petites et méprisables.",
      meaning_type: 'etymology', display_order: 10
    },
    {
      analysis_id: 656, sense: "être faible", concept: "Bassesse/Médiocrité",
      description: "État de faiblesse, d'impuissance — manquer de force.",
      meaning_type: 'etymology', display_order: 11
    },
    {
      analysis_id: 656, sense: "vivre une vie étroite", concept: "Bassesse/Médiocrité",
      description: "Passer de l'aisance à la difficulté — vivre dans la gêne après avoir connu l'abondance.",
      meaning_type: 'etymology', display_order: 12
    },
    // Concept: Abaissement/Couverture (nouveau)
    {
      analysis_id: 656, sense: "abaisser un vêtement", concept: "Abaissement/Couverture",
      description: "Faire descendre un tissu pour couvrir — laisser tomber un voile ou un rideau. C'est un mouvement descendant volontaire qui crée une séparation ou une protection. Le Lane's cite le verset coranique 33:59 : elles abaisseront sur elles une partie de leurs vêtements.",
      meaning_type: 'etymology', display_order: 13
    }
  ];

  const { error: dnwErr } = await sb.from('word_meanings').insert(dnwNewSenses);
  if (dnwErr) { console.log('ERREUR dnw:', dnwErr.message); return; }
  console.log('dnw insert: ' + dnwNewSenses.length + ' sens OK');
  await sb.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 656);

  // =====================================================
  // 2. VÉRIFIER RICHESSE APRÈS ENRICHISSEMENT
  // =====================================================
  console.log('\n--- Richesse des racines ---');
  const rootChecks = [
    { key: 'qwl', aid: 307 },
    { key: 'mlk', aid: 256 },
    { key: 'alh', aid: 250 },
    { key: 'bshr', aid: 392 },
    { key: 'klm', aid: 478 },
    { key: 'smw', aid: 249 },
    { key: 'msh', aid: 1271 },
    { key: 'bny', aid: 386 },
    { key: 'wjh', aid: 747 },
    { key: 'dnw', aid: 656 },
    { key: 'axr', aid: 292 },
    { key: 'qrb', aid: 467 }
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
  }

  // =====================================================
  // 3. CORRIGER LES SEGMENTS
  // =====================================================
  console.log('\n--- 3. Fix segments ---');
  const { data: vaData } = await sb.from('verse_analyses').select('segments_step1').eq('id', VA_ID).single();
  const segs = vaData.segments_step1;

  // pos=4: yā maryamu → particle (nom propre)
  const seg4 = segs.find(s => s.position === 4);
  if (seg4) { seg4.type = 'particle'; seg4.is_particle = true; console.log('pos=4: → particle (nom propre)'); }

  // pos=7: fix key from 'b' to 'bshr', fix root
  const seg7 = segs.find(s => s.position === 7);
  if (seg7) { seg7.key = 'bshr'; seg7.root = 'ب ش ر'; seg7.word_key = 'bshr'; console.log('pos=7: key b → bshr, root → ب ش ر'); }

  // pos=11: add key='msh', root='م س ح'
  const seg11 = segs.find(s => s.position === 11);
  if (seg11) { seg11.key = 'msh'; seg11.root = 'م س ح'; seg11.word_key = 'msh'; console.log('pos=11: key → msh, root → م س ح'); }

  // pos=12: ʿīsā → particle (nom propre)
  const seg12 = segs.find(s => s.position === 12);
  if (seg12) { seg12.type = 'particle'; seg12.is_particle = true; console.log('pos=12: → particle (nom propre)'); }

  // pos=14: maryama → particle (nom propre)
  const seg14 = segs.find(s => s.position === 14);
  if (seg14) { seg14.type = 'particle'; seg14.is_particle = true; console.log('pos=14: → particle (nom propre)'); }

  const { error: segErr } = await sb.from('verse_analyses').update({ segments_step1: segs }).eq('id', VA_ID);
  if (segErr) { console.log('ERREUR segments:', segErr.message); return; }
  console.log('Segments mis à jour');
  const important = segs.filter(s => s.type === 'important');
  const particles = segs.filter(s => s.type === 'particle');
  console.log(`Important: ${important.length} | Particle: ${particles.length} | Total: ${segs.length}`);

  // =====================================================
  // 4. VWA — 12 entries
  // =====================================================
  console.log('\n--- 4. VWA ---');
  await sb.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);

  const vwaEntries = [
    // pos=2: qālat → qwl(307) — dire
    {
      verse_id: VERSE_ID, word_key: 'qwl', root: 'ق و ل', position: 2,
      sense_chosen: 'dire',
      analysis_axes: {
        concept_chosen: "Parole/Énonciation",
        sense_chosen: "dire",
        concepts: {
          "Parole/Énonciation": {
            status: "retenu",
            senses: conceptsMap.qwl["Parole/Énonciation"],
            proof_ctx: "Le verbe qāla à l'accompli avec le sujet féminin (qālatī) introduit le discours direct des messagers à Marie. Le sens est la parole prononcée — un acte extérieur de communication. Aucune ambiguïté : les messagers parlent."
          },
          "Pensée/Avis": {
            status: "nul",
            senses: conceptsMap.qwl["Pensée/Avis"],
            proof_ctx: "Le contexte est un discours prononcé, pas un avis silencieux."
          },
          "Sens isolé/Puissance": {
            status: "nul",
            senses: conceptsMap.qwl["Sens isolé/Puissance"],
            proof_ctx: "Hors sujet."
          },
          "Corps/Anatomie": {
            status: "nul",
            senses: conceptsMap.qwl["Corps/Anatomie"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=3: al-malā'ikatu → mlk(256) — messager
    {
      verse_id: VERSE_ID, word_key: 'mlk', root: 'م ل ك', position: 3,
      sense_chosen: 'messager',
      analysis_axes: {
        concept_chosen: "Ange/Messager",
        sense_chosen: "messager",
        concepts: {
          "Ange/Messager": {
            status: "retenu",
            senses: conceptsMap.mlk["Ange/Messager"],
            proof_ctx: "Le nom pluriel al-malā'ikatu désigne les envoyés de Dieu. Le sens premier de la racine m-l-k est la possession et la maîtrise — le malak est celui que le maître envoie avec un message. Le contexte confirme : les malā'ika transmettent une annonce divine à Marie. Contrairement à Possession/Autorité, les malā'ika ici n'exercent pas de pouvoir — ils délivrent un message."
          },
          "Possession/Autorité": {
            status: "nul",
            senses: conceptsMap.mlk["Possession/Autorité"],
            proof_ctx: "Les messagers ne possèdent rien dans ce contexte — ils transmettent."
          },
          "Royauté/Souveraineté": {
            status: "nul",
            senses: conceptsMap.mlk["Royauté/Souveraineté"],
            proof_ctx: "Aucune royauté dans le contexte."
          },
          "Sens isolé/Pâte": {
            status: "nul",
            senses: conceptsMap.mlk["Sens isolé/Pâte"],
            proof_ctx: "Hors sujet."
          },
          "Sens isolé/Maîtriser": {
            status: "nul",
            senses: conceptsMap.mlk["Sens isolé/Maîtriser"],
            proof_ctx: "Hors sujet."
          },
          "Eau/Liquide": {
            status: "nul",
            senses: conceptsMap.mlk["Eau/Liquide"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=6: allāha → alh(250) — divinité
    {
      verse_id: VERSE_ID, word_key: 'alh', root: 'ا ل ه', position: 6,
      sense_chosen: 'divinité',
      analysis_axes: {
        concept_chosen: "Divinité",
        sense_chosen: "divinité",
        concepts: {
          "Divinité": {
            status: "retenu",
            senses: conceptsMap.alh["Divinité"],
            proof_ctx: "Le nom allāh est le nom propre de Dieu, issu de la racine '-l-h dont le sens premier est la divinité — ce qui est adoré et reconnu comme divin. Le nom est à l'accusatif après inna (particule d'emphase). Contrairement à Adoration qui décrit l'acte d'adorer, allāh ici est le sujet de l'annonce — c'est Dieu qui annonce."
          },
          "Adoration/Dévotion": {
            status: "probable",
            senses: conceptsMap.alh["Adoration/Dévotion"],
            proof_ctx: "L'adoration est l'acte dirigé vers la divinité, mais allāh ici est un nom propre, pas un verbe d'adoration."
          },
          "Détresse": {
            status: "nul",
            senses: conceptsMap.alh["Détresse"],
            proof_ctx: "Hors sujet."
          },
          "Refuge/Protection": {
            status: "nul",
            senses: conceptsMap.alh["Refuge/Protection"],
            proof_ctx: "Hors sujet."
          },
          "Domination": {
            status: "nul",
            senses: conceptsMap.alh["Domination"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=7: yubashshiruki → bshr(392) — annoncer une bonne nouvelle
    {
      verse_id: VERSE_ID, word_key: 'bshr', root: 'ب ش ر', position: 7,
      sense_chosen: 'annoncer une bonne nouvelle',
      analysis_axes: {
        concept_chosen: "Annonce/Réjouissance",
        sense_chosen: "annoncer une bonne nouvelle",
        concepts: {
          "Annonce/Réjouissance": {
            status: "retenu",
            senses: conceptsMap.bshr["Annonce/Réjouissance"],
            proof_ctx: "La forme II (bashshara) à l'inaccompli (yubashshiru) porte le sens intensif d'annoncer avec joie. Le sujet est Dieu (allāh), l'objet est Marie (-ki = toi féminin), et le contenu est introduit par bi (au sujet de). C'est un acte extérieur et directionnel — l'annonce sort de celui qui annonce et atteint celle qui la reçoit. Contrairement à Surface/Contact, le contexte est une communication verbale, pas un contact physique."
          },
          "Surface/Contact": {
            status: "nul",
            senses: conceptsMap.bshr["Surface/Contact"],
            proof_ctx: "Le sens de peau ou de contact physique est hors sujet — les messagers transmettent une parole."
          },
          "Corps/Anatomie": {
            status: "nul",
            senses: conceptsMap.bshr["Corps/Anatomie"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=8: bi-kalimatin → klm(478) — mot
    {
      verse_id: VERSE_ID, word_key: 'klm', root: 'ك ل م', position: 8,
      sense_chosen: 'mot',
      analysis_axes: {
        concept_chosen: "Parole/Discours",
        sense_chosen: "mot",
        concepts: {
          "Parole/Discours": {
            status: "retenu",
            senses: conceptsMap.klm["Parole/Discours"],
            proof_ctx: "Le nom féminin kalima (mot/parole) au génitif indéfini, précédé de bi (au sujet de), désigne ce qui est annoncé à Marie. Cette kalima est ensuite qualifiée avec un nom (al-masīḥ ʿīsā), un lignage (ibnu maryam), et des attributs (wajīh). Le texte utilise « mot » pour désigner une entité qui porte un nom — c'est le contenu de l'annonce divine. Contrairement à Blessure, aucun acte de violence dans le contexte."
          },
          "Blessure": {
            status: "nul",
            senses: conceptsMap.klm["Blessure"],
            proof_ctx: "Le contexte est une annonce joyeuse, pas une blessure."
          }
        }
      }
    },
    // pos=10: ismuhu → smw(249) — nom
    {
      verse_id: VERSE_ID, word_key: 'smw', root: 'س م و', position: 10,
      sense_chosen: 'nom',
      analysis_axes: {
        concept_chosen: "Nom/Identification",
        sense_chosen: "nom",
        concepts: {
          "Nom/Identification": {
            status: "retenu",
            senses: conceptsMap.smw["Nom/Identification"],
            proof_ctx: "Le nom ism avec le pronom possessif -hu (son) introduit l'identification de la kalima annoncée. Le sens est clairement « nom » — l'identité par laquelle cette entité sera connue. Contrairement à Hauteur/Élévation, le contexte est l'identification, pas la grandeur."
          },
          "Hauteur/Élévation": {
            status: "nul",
            senses: conceptsMap.smw["Hauteur/Élévation"],
            proof_ctx: "Le contexte est l'identification d'un nom, pas l'élévation."
          },
          "Ciel/Ce qui couvre": {
            status: "nul",
            senses: conceptsMap.smw["Ciel/Ce qui couvre"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=11: al-masīḥu → msh(1271) — oindre
    {
      verse_id: VERSE_ID, word_key: 'msh', root: 'م س ح', position: 11,
      sense_chosen: 'oindre',
      analysis_axes: {
        concept_chosen: "Essuyage/Onction",
        sense_chosen: "oindre",
        concepts: {
          "Essuyage/Onction": {
            status: "retenu",
            senses: conceptsMap.msh["Essuyage/Onction"],
            proof_ctx: "Le titre al-masīḥ est une forme faʿīl de la racine m-s-ḥ. Le sens premier de m-s-ḥ est passer la main sur, essuyer, oindre. La forme faʿīl peut être passive (celui qui est oint) ou active (celui qui essuie/guérit par le toucher). Le titre désigne étymologiquement « l'oint » — celui sur qui on a passé la main. Contrairement à Titre/Nom qui est une convention, le sens étymologique pur pointe vers l'onction physique."
          },
          "Titre/Nom": {
            status: "probable",
            senses: conceptsMap.msh["Titre/Nom"],
            proof_ctx: "Le titre « Messie » est une convention connue qui traduit al-masīḥ, mais c'est un usage dérivé — l'étymologie première est l'onction."
          },
          "Sens isolé/Voyager": {
            status: "nul",
            senses: conceptsMap.msh["Sens isolé/Voyager"],
            proof_ctx: "Le contexte est un titre personnel, pas un voyage."
          }
        }
      }
    },
    // pos=13: ibnu → bny(386) — fils
    {
      verse_id: VERSE_ID, word_key: 'bny', root: 'ب ن ي', position: 13,
      sense_chosen: 'fils',
      analysis_axes: {
        concept_chosen: "Filiation",
        sense_chosen: "fils",
        concepts: {
          "Filiation": {
            status: "retenu",
            senses: conceptsMap.bny["Filiation"],
            proof_ctx: "Le nom ibnu (fils) au nominatif, en apposition avec ʿīsā, établit la filiation : Jésus est fils de Marie. Le sens est la relation familiale directe — le lien biologique mère-fils. Contrairement à Construction, le contexte est la lignée, pas l'édification."
          },
          "Construction/Édification": {
            status: "nul",
            senses: conceptsMap.bny["Construction/Édification"],
            proof_ctx: "Le contexte est la filiation, pas la construction."
          }
        }
      }
    },
    // pos=15: wajīhan → wjh(747) — noble
    {
      verse_id: VERSE_ID, word_key: 'wjh', root: 'و ج ه', position: 15,
      sense_chosen: 'noble',
      analysis_axes: {
        concept_chosen: "Sens isolé/Noble",
        sense_chosen: "noble",
        concepts: {
          "Visage/Direction": {
            status: "probable",
            senses: conceptsMap.wjh["Visage/Direction"],
            proof_ctx: "Le visage est le sens physique premier de w-j-h, et wajīh en dérive métaphoriquement : avoir un visage = avoir de la considération. Mais ici le mot fonctionne comme adjectif de qualité (ḥāl), pas comme nom physique."
          },
          "Sens isolé/Noble": {
            status: "retenu",
            senses: conceptsMap.wjh["Sens isolé/Noble"],
            proof_ctx: "Le mot wajīh (forme faʿīl de w-j-h) à l'accusatif indéfini fonctionne comme un ḥāl (une forme qui décrit l'état de la personne) : il décrit la kalima (Jésus) comme éminent, ayant du poids et de la considération. L'accusatif wajīhan complété par fī l-dunyā wa-l-ākhira (dans l'ici-bas et l'au-delà) étend cette éminence aux deux mondes. Contrairement à Visage/Direction qui est physique, le sens ici est métaphorique : avoir de la face = être considéré."
          },
          "Sens isolé/Manière": {
            status: "nul",
            senses: conceptsMap.wjh["Sens isolé/Manière"],
            proof_ctx: "Le contexte décrit une qualité personnelle, pas une manière de faire."
          }
        }
      }
    },
    // pos=17: ad-dunyā → dnw(656) — ici-bas
    {
      verse_id: VERSE_ID, word_key: 'dnw', root: 'د ن و', position: 17,
      sense_chosen: 'ici-bas',
      analysis_axes: {
        concept_chosen: "Proximité/Rapprochement",
        sense_chosen: "ici-bas",
        concepts: {
          "Proximité/Rapprochement": {
            status: "retenu",
            senses: conceptsMap.dnw["Proximité/Rapprochement"],
            proof_ctx: "Le nom ad-dunyā est le superlatif féminin de adnā (le plus proche). Il désigne le monde présent — celui qui est le plus proche de nous, par opposition à al-ākhira (la dernière, l'au-delà). L'article al- identifie une réalité connue et définie. Le sens de proximité domine : ce monde est « le plus proche » dans le temps et l'espace. Contrairement à Bassesse/Médiocrité qui qualifie ce monde comme inférieur, le texte ici le nomme simplement comme un lieu où la kalima sera éminente."
          },
          "Parenté/Lien": {
            status: "nul",
            senses: conceptsMap.dnw["Parenté/Lien"],
            proof_ctx: "Le contexte désigne un lieu/temps, pas un lien de parenté."
          },
          "Bassesse/Médiocrité": {
            status: "peu_probable",
            senses: conceptsMap.dnw["Bassesse/Médiocrité"],
            proof_ctx: "La racine porte un sens de bassesse (le monde d'en bas), mais ici ad-dunyā est un nom propre pour ce monde, pas un jugement de valeur — le texte dit que Jésus y sera éminent."
          },
          "Abaissement/Couverture": {
            status: "nul",
            senses: conceptsMap.dnw["Abaissement/Couverture"],
            proof_ctx: "Le contexte n'est pas un geste d'abaissement de vêtement."
          }
        }
      }
    },
    // pos=18: wa-l-ākhirati → axr(292) — l'au-delà
    {
      verse_id: VERSE_ID, word_key: 'axr', root: 'ء خ ر', position: 18,
      sense_chosen: "l'au-delà",
      analysis_axes: {
        concept_chosen: "Postériorité/Retard",
        sense_chosen: "l'au-delà",
        concepts: {
          "Postériorité/Retard": {
            status: "retenu",
            senses: conceptsMap.axr["Postériorité/Retard"],
            proof_ctx: "Le nom al-ākhira est le participe actif féminin défini de '-kh-r (être dernier/postérieur). Il désigne la vie dernière — ce qui vient après la dunyā. La paire dunyā/ākhira (le plus proche / la dernière) structure la temporalité coranique : deux mondes successifs. Le sens de postériorité domine."
          },
          "Sens isolé/Arrière": {
            status: "nul",
            senses: conceptsMap.axr["Sens isolé/Arrière"],
            proof_ctx: "Sens physique spatial — hors sujet."
          },
          "Sens isolé/Derrière": {
            status: "nul",
            senses: conceptsMap.axr["Sens isolé/Derrière"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=20: al-muqarrabīna → qrb(467) — rapprocher
    {
      verse_id: VERSE_ID, word_key: 'qrb', root: 'ق ر ب', position: 20,
      sense_chosen: 'rapprocher',
      analysis_axes: {
        concept_chosen: "Proximité/Rapprochement",
        sense_chosen: "rapprocher",
        concepts: {
          "Proximité/Rapprochement": {
            status: "retenu",
            senses: conceptsMap.qrb["Proximité/Rapprochement"],
            proof_ctx: "Le participe passif de la forme II (muqarrab) au pluriel masculin défini désigne ceux qui sont activement rapprochés — pas ceux qui se rapprochent d'eux-mêmes, mais ceux qu'une force extérieure rapproche. La forme passive indique que cette proximité est accordée, pas acquise. Le texte dit que la kalima (Jésus) est « parmi les rapprochés » (min al-muqarrabīn) — il fait partie de cette catégorie. Contrairement à Offrande/Sacrifice, le contexte est la proximité avec Dieu, pas un sacrifice."
          },
          "Offrande/Sacrifice": {
            status: "nul",
            senses: conceptsMap.qrb["Offrande/Sacrifice"],
            proof_ctx: "Le contexte n'est pas le sacrifice mais la proximité accordée."
          },
          "Parenté": {
            status: "nul",
            senses: conceptsMap.qrb["Parenté"],
            proof_ctx: "La proximité ici n'est pas biologique mais relationnelle et spirituelle."
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

  const translation_arab = `Lorsque les messagers dirent : « Ô Marie, certes Dieu t'annonce la bonne nouvelle d'un mot venant de Lui, dont le nom est le Messie, Jésus fils de Marie, éminent dans l'ici-bas et l'au-delà, et parmi les rapprochés. »`;

  const full_translation = `(Rappelle-toi) quand les Anges dirent : « Ô Marie, voilà qu'Allah t'annonce une parole de Sa part : son nom sera « al-Masîh » « 'Issâ », fils de Marie, illustre ici-bas comme dans l'au-delà, et l'un des rapprochés d'Allah. »`;

  const translation_explanation = `§DEMARCHE§
Ce verset poursuit le récit de Marie commencé aux versets 42-43. Après les commandements de dévotion (verset 43), les messagers annoncent maintenant à Marie la nouvelle de la naissance d'un enfant. Ce verset est la première mention du nom de Jésus dans cette sourate. La particule **idh** (lorsque) replace la scène dans le passé et relie ce discours aux paroles précédentes des messagers.

**qālatī** (dirent) est un verbe à l'accompli (une forme qui indique un événement achevé) à la 3ème personne du féminin singulier de la racine q-w-l. En arabe, le pluriel brisé al-malā'ikatu prend un verbe au féminin singulier quand il précède le sujet — c'est une règle grammaticale, pas un singulier de sens. On traduit par « dirent ».

**al-malā'ikatu** (les messagers) est un nom pluriel défini (avec l'article al-) de la racine m-l-k au nominatif (sujet). Le sens premier de la racine m-l-k est « posséder, maîtriser ». Le malak (singulier) est étymologiquement « celui que le maître envoie » — un envoyé, un messager. Le pluriel malā'ika désigne les envoyés de Dieu qui transmettent Son message. On traduit par « les messagers ».

**allāha** (Dieu) est le nom propre de Dieu, issu de la racine '-l-h (divinité). Le nom est à l'accusatif car il suit la particule d'emphase **inna** (certes). Inna place l'accent sur ce qui suit : c'est bien Dieu qui annonce, pas les messagers de leur propre chef. On traduit par « Dieu ».

**yubashshiruki** (t'annonce la bonne nouvelle) est un verbe à l'inaccompli (une forme qui indique une action en cours) à la 3ème personne du masculin singulier de la racine b-sh-r, forme II (une forme intensive, qui renforce le sens), suivi du pronom suffixe -ki (toi, féminin). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme II de b-sh-r (bashshara) signifie « annoncer une bonne nouvelle qui réjouit le visage ». Le sens premier de la racine est la peau du visage — la bonne nouvelle fait rayonner le visage. On traduit par « t'annonce la bonne nouvelle ».

**kalimatin** (un mot) est un nom féminin singulier indéfini de la racine k-l-m au génitif, précédé de la préposition **bi** (au sujet de / par). Le sens premier est « mot, parole, énoncé ». Ici, cette kalima (mot) est qualifiée avec un nom (le Messie Jésus), un lignage (fils de Marie) et des attributs (éminent) — c'est une entité désignée par le terme « mot ». La préposition **min** (de/venant de) suivie du pronom -hu (Lui) indique l'origine divine de ce mot. On traduit par « un mot venant de Lui ».

**ismuhu** (son nom est) est un nom masculin de la racine s-m-w au nominatif, suivi du pronom possessif -hu (son). Le sens est « son nom » — l'identification de l'entité annoncée. Ce nom est donné immédiatement après : le Messie, Jésus fils de Marie. En arabe, la phrase nominale « ismuhu al-masīḥu » (son nom [est] le Messie) n'a pas de verbe « être » — le nominatif des deux termes suffit à créer la phrase. On traduit par « dont le nom est ».

**al-masīḥu** (le Messie) est un nom/titre défini de la racine m-s-ḥ au nominatif, en position de prédicat (attribut de ismuhu). D'après les sources étymologiques, le sens premier de m-s-ḥ est « passer la main sur, essuyer, oindre ». La forme faʿīl (masīḥ) peut être passive (celui qui est oint — sur qui on a passé la main) ou active (celui qui essuie, celui qui guérit par le toucher). Le titre « le Messie » est la traduction conventionnelle de al-masīḥ, qui signifie étymologiquement « l'oint ». On traduit par « le Messie ».

**ibnu** (fils) est un nom masculin de la racine b-n-y au nominatif, en apposition avec ʿīsā. Le sens est la filiation — le lien biologique entre mère et fils. La construction « ʿīsā ibnu maryama » (Jésus fils de Marie) identifie Jésus par sa mère, ce qui est remarquable car la convention arabe identifie par le père (ibnu fulān = fils d'untel). L'identification par la mère souligne l'absence de père dans la lignée de Jésus. On traduit par « fils de ».

**wajīhan** (éminent) est un adjectif de la racine w-j-h à l'accusatif indéfini, en position de ḥāl (une forme qui décrit l'état dans lequel se trouve la personne). Le sens premier de w-j-h est le visage, la face. La forme faʿīl (wajīh) signifie « celui qui a un visage » au sens figuré — celui qui a de la considération, du poids, de l'éminence. L'accusatif wajīhan est un état qui décrit la kalima annoncée : elle est éminente. Le complément **fī l-dunyā wa-l-ākhira** (dans l'ici-bas et l'au-delà) étend cette éminence aux deux mondes. On traduit par « éminent ».

**ad-dunyā** (l'ici-bas) est un nom féminin défini de la racine d-n-w. Le mot dunyā est le superlatif féminin de adnā (le plus proche / le plus bas). Le sens premier de la racine d-n-w est « être proche ». Le monde d'ici-bas est « le plus proche » — celui dans lequel nous vivons actuellement, par opposition à l'au-delà. On traduit par « l'ici-bas ».

**al-ākhirati** (l'au-delà) est un nom féminin défini de la racine '-kh-r au génitif (après fī), précédé de la conjonction wa (et). Le mot ākhira est le participe actif féminin de '-kh-r (être dernier, être postérieur). Il désigne la vie dernière — ce qui vient après la dunyā. La paire dunyā/ākhira structure la temporalité : le plus proche / la dernière. On traduit par « l'au-delà ».

**al-muqarrabīna** (les rapprochés) est un participe passif (une forme qui dit que la personne SUBIT l'action — elle est rapprochée par quelqu'un d'autre) de la forme II de la racine q-r-b, au pluriel masculin défini, au génitif (après min). Le sens premier de q-r-b est « être proche ». La forme II (qarraba) signifie « rapprocher, faire se rapprocher ». Le participe passif (muqarrab) désigne ceux qui sont rapprochés — pas ceux qui se rapprochent d'eux-mêmes, mais ceux qu'on rapproche activement. La préposition **min** (parmi) indique que la kalima fait partie de ce groupe. On traduit par « les rapprochés ».

§JUSTIFICATION§
**dirent** — Le sens retenu est « dire » de la racine q-w-l. Le mot « dirent » est choisi car il introduit le discours direct de manière neutre. L'alternative « parlèrent » est écartée car elle insiste sur l'acte de parler plutôt que sur le contenu du discours.

**les messagers** — Le sens retenu est « messager » de la racine m-l-k. Le mot « messagers » est choisi car le sens premier de malak est l'envoyé — celui qui porte un message au nom du maître. L'alternative « anges » est écartée car « ange » vient du grec angelos et porte dans le christianisme une connotation d'être ailé céleste que la racine arabe m-l-k ne contient pas.

**Dieu** — Le sens retenu est « divinité » de la racine '-l-h. Le mot « Dieu » est le rendu standard de allāh en français. L'alternative « Allah » (translitération) est écartée car le lecteur français comprend mieux « Dieu ».

**t'annonce la bonne nouvelle** — Le sens retenu est « annoncer une bonne nouvelle » de la racine b-sh-r, forme II. Le mot « annonce la bonne nouvelle » est choisi car la forme II intensive porte le sens de réjouissance — la racine lie l'annonce au visage qui rayonne (bashr = peau du visage). L'alternative « t'informe » est écartée car elle est neutre et perd la dimension de joie. L'alternative « t'évangélise » est écartée car c'est du vocabulaire chrétien.

**un mot** — Le sens retenu est « mot » de la racine k-l-m. Le mot « mot » est choisi car kalima désigne une unité de langage — une chose nommée. L'alternative « parole » est écartée car elle implique un discours étendu alors que kalima est plus concis — une entité désignée par un seul terme.

**son nom est** — Le sens retenu est « nom » de la racine s-m-w. Le mot « nom » est choisi car ism désigne l'identité par laquelle on reconnaît quelqu'un. Aucune alternative pertinente.

**le Messie** — Le sens retenu est « oindre » de la racine m-s-ḥ. Le mot « le Messie » est le rendu conventionnel du titre al-masīḥ, qui signifie étymologiquement « l'oint » ou « celui qui essuie/guérit ». L'alternative « l'oint » est possible mais moins claire pour le lecteur français courant. L'alternative « Christ » est écartée car c'est un calque du grec christos, vocabulaire chrétien.

**fils** — Le sens retenu est « fils » de la racine b-n-y. Le mot « fils » est choisi car ibnu désigne le lien de filiation biologique directe. Aucune alternative pertinente.

**éminent** — Le sens retenu est « noble » de la racine w-j-h. Le mot « éminent » est choisi car il capture le sens de wajīh : celui qui a de la considération, du poids dans la société. L'alternative « illustre » est écartée comme synonyme acceptable mais « éminent » est plus précis — il combine la considération sociale et la grandeur personnelle. L'alternative « noble » est possible mais renvoie à une noblesse de sang absente du contexte.

**l'ici-bas** — Le sens retenu est « ici-bas » de la racine d-n-w. Le mot « l'ici-bas » est choisi car ad-dunyā désigne le monde le plus proche — celui dans lequel nous vivons. L'alternative « ce monde-ci » est plus longue sans apporter de nuance.

**l'au-delà** — Le sens retenu est « l'au-delà » de la racine '-kh-r. Le mot « l'au-delà » est choisi car al-ākhira désigne la vie dernière, ce qui vient après. L'alternative « la vie future » est écartée car « future » implique un avenir terrestre, alors que l'ākhira est un autre plan d'existence.

**les rapprochés** — Le sens retenu est « rapprocher » de la racine q-r-b. Le mot « les rapprochés » est choisi car le participe passif de la forme II indique ceux qui sont activement rapprochés — cette proximité est accordée, pas acquise. L'alternative « les proches » est écartée car elle perd la dimension passive — le « proche » peut l'être de lui-même, le « rapproché » l'est par quelqu'un d'autre.

§CRITIQUE§
**messagers vs Anges** : les traductions courantes donnent « Anges » pour al-malā'ikatu. Le mot « ange » vient du grec angelos (messager) mais a acquis en français une connotation chrétienne d'être ailé céleste. La racine arabe m-l-k porte le sens de possession et de maîtrise — le malak est celui que le maître envoie. Le texte arabe ne décrit aucune caractéristique physique de ces envoyés. Notre traduction donne « messagers » car c'est le sens étymologique de la racine, sans l'imagerie ajoutée par la tradition chrétienne.

**un mot vs une parole** : les traductions courantes donnent « parole » pour kalima. La nuance est fine mais significative : « parole » implique un discours, un acte de communication étendu. « Mot » est plus précis — c'est une unité de langage, une chose nommée. Ici, la kalima est qualifiée avec un nom, un lignage et des attributs — elle désigne une entité, pas un discours. Notre traduction donne « mot » car le texte utilise kalima au singulier indéfini pour désigner quelque chose de nommable.

**ajouts invisibles** : les traductions courantes ajoutent « Rappelle-toi » au début du verset et « d'Allah » après « les rapprochés ». Le texte arabe dit idh (lorsque) sans injonction de se rappeler, et « min al-muqarrabīn » (parmi les rapprochés) sans préciser de qui. L'ajout « d'Allah » est une interprétation — le texte laisse ouverte la question de la source du rapprochement.

Les autres mots du verset (Dieu, bonne nouvelle, nom, Messie, fils, éminent, ici-bas, au-delà) sont traduits de manière similaire dans les traductions courantes.`;

  // Segments d'affichage
  const displaySegments = [
    { fr: "lorsque", pos: "", phon: "idh", arabic: "إِذْ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: "dirent", pos: "V", phon: "qālatī", arabic: "قَالَتِ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 2 },
    { fr: "les messagers :", pos: "N", phon: "al-malā'ikatu", arabic: "ٱلْمَلَٰٓئِكَةُ", word_key: "mlk", is_particle: false, sense_retenu: "messager", position: 3 },
    { fr: "ô Marie", pos: "", phon: "yā maryamu", arabic: "يَٰمَرْيَمُ", word_key: null, is_particle: true, sense_retenu: null, position: 4 },
    { fr: "certes", pos: "", phon: "inna", arabic: "إِنَّ", word_key: null, is_particle: true, sense_retenu: null, position: 5 },
    { fr: "Dieu", pos: "N", phon: "allāha", arabic: "ٱللَّهَ", word_key: "alh", is_particle: false, sense_retenu: "divinité", position: 6 },
    { fr: "t'annonce la bonne nouvelle", pos: "V", phon: "yubashshiruki", arabic: "يُبَشِّرُكِ", word_key: "bshr", is_particle: false, sense_retenu: "annoncer une bonne nouvelle", position: 7 },
    { fr: "d'un mot", pos: "N", phon: "bi-kalimatin", arabic: "بِكَلِمَةٍ", word_key: "klm", is_particle: false, sense_retenu: "mot", position: 8 },
    { fr: "venant de Lui", pos: "", phon: "minhu", arabic: "مِّنْهُ", word_key: null, is_particle: true, sense_retenu: null, position: 9 },
    { fr: "dont le nom est", pos: "N", phon: "ismuhu", arabic: "ٱسْمُهُ", word_key: "smw", is_particle: false, sense_retenu: "nom", position: 10 },
    { fr: "le Messie", pos: "N", phon: "al-masīḥu", arabic: "ٱلْمَسِيحُ", word_key: "msh", is_particle: false, sense_retenu: "oindre", position: 11 },
    { fr: "Jésus", pos: "", phon: "ʿīsā", arabic: "عِيسَى", word_key: null, is_particle: true, sense_retenu: null, position: 12 },
    { fr: "fils", pos: "N", phon: "ibnu", arabic: "ٱبْنُ", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 13 },
    { fr: "de Marie", pos: "", phon: "maryama", arabic: "مَرْيَمَ", word_key: null, is_particle: true, sense_retenu: null, position: 14 },
    { fr: "éminent", pos: "N", phon: "wajīhan", arabic: "وَجِيهًا", word_key: "wjh", is_particle: false, sense_retenu: "noble", position: 15 },
    { fr: "dans", pos: "", phon: "fī", arabic: "فِى", word_key: null, is_particle: true, sense_retenu: null, position: 16 },
    { fr: "l'ici-bas", pos: "N", phon: "ad-dunyā", arabic: "ٱلدُّنْيَا", word_key: "dnw", is_particle: false, sense_retenu: "ici-bas", position: 17 },
    { fr: "et l'au-delà", pos: "N", phon: "wa-l-ākhirati", arabic: "وَٱلْءَاخِرَةِ", word_key: "axr", is_particle: false, sense_retenu: "l'au-delà", position: 18 },
    { fr: "et parmi", pos: "", phon: "wa-mina", arabic: "وَمِنَ", word_key: null, is_particle: true, sense_retenu: null, position: 19 },
    { fr: "les rapprochés", pos: "N", phon: "al-muqarrabīna", arabic: "ٱلْمُقَرَّبِينَ", word_key: "qrb", is_particle: false, sense_retenu: "rapprocher", position: 20 }
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
  // dnw (aid=656): 0 phrases → INSERT 3
  // msh (aid=1271): 0 phrases → INSERT 3
  // Autres: déjà 3 → SKIP
  // =====================================================
  console.log('\n--- 6. Daily phrases ---');

  for (const r of rootChecks) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    if (count > 0) {
      console.log(`${r.key} (aid=${r.aid}): ${count} phrases → SKIP`);
    } else {
      console.log(`${r.key} (aid=${r.aid}): 0 phrases → INSERT`);
    }
  }

  // Insert daily phrases for dnw
  const dnwDailyPhrases = [
    {
      analysis_id: 656,
      sense: "ici-bas",
      arabic: "الدنيا",
      phon: "ad-dunyā",
      french: "Les choses de l'ici-bas ne durent pas éternellement."
    },
    {
      analysis_id: 656,
      sense: "être proche",
      arabic: "دنا",
      phon: "danā",
      french: "L'heure de la réunion s'est approchée."
    },
    {
      analysis_id: 656,
      sense: "approcher",
      arabic: "ادنو",
      phon: "adnū",
      french: "Je m'approche de la porte pour entendre."
    }
  ];

  const { error: dnwDailyErr } = await sb.from('word_daily').insert(dnwDailyPhrases);
  if (dnwDailyErr) { console.log('ERREUR daily dnw:', dnwDailyErr.message); return; }
  console.log('Daily insert: 3 phrases OK (dnw)');

  // Insert daily phrases for msh
  const mshDailyPhrases = [
    {
      analysis_id: 1271,
      sense: "essuyer",
      arabic: "مسح",
      phon: "masaḥa",
      french: "Il a essuyé la table après le repas."
    },
    {
      analysis_id: 1271,
      sense: "passer la main sur",
      arabic: "امسح",
      phon: "imsaḥ",
      french: "Passe la main sur ta tête pour te rafraîchir."
    },
    {
      analysis_id: 1271,
      sense: "oindre",
      arabic: "مسحه",
      phon: "masaḥahu",
      french: "On l'a oint d'huile pour la cérémonie."
    }
  ];

  const { error: mshDailyErr } = await sb.from('word_daily').insert(mshDailyPhrases);
  if (mshDailyErr) { console.log('ERREUR daily msh:', mshDailyErr.message); return; }
  console.log('Daily insert: 3 phrases OK (msh)');

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
  if (JSON.stringify(vwaPositions) !== JSON.stringify(segPositions)) {
    console.log('  VWA positions:', vwaPositions);
    console.log('  Seg positions:', segPositions);
  }

  console.log(`full_translation: ${finalVA.full_translation ? 'OK' : 'MISSING!'}`);
  console.log(`translation: ${finalVA.translation_arab ? 'OK' : 'MISSING!'}`);
  console.log(`explanation: ${finalVA.translation_explanation ? 'OK (' + finalVA.translation_explanation.length + ' chars)' : 'MISSING!'}`);

  // Verify sense_retenu matches word_meanings
  const aidMap = { qwl: 307, mlk: 256, alh: 250, bshr: 392, klm: 478, smw: 249, msh: 1271, bny: 386, wjh: 747, dnw: 656, axr: 292, qrb: 467 };
  for (const seg of impSegs) {
    const aid = aidMap[seg.word_key];
    if (aid) {
      const { data: meanings } = await sb.from('word_meanings').select('sense').eq('analysis_id', aid);
      const senses = meanings.map(m => m.sense);
      const match = senses.includes(seg.sense_retenu);
      if (!match) console.log(`  ⚠️ pos=${seg.position} sense_retenu="${seg.sense_retenu}" NOT in word_meanings!`);
    }
  }
  console.log('Sense_retenu verification: done');

  // Check for forbidden words
  const hasConceptWord = finalVA.translation_explanation.match(/\bconcept\b/gi);
  const hasPipelineWord = finalVA.translation_explanation.match(/\bpipeline\b/gi);
  if (hasConceptWord) console.log('⚠️ Mot "concept" trouvé dans translation_explanation!');
  if (hasPipelineWord) console.log('⚠️ Mot "pipeline" trouvé dans translation_explanation!');
  if (!hasConceptWord && !hasPipelineWord) console.log('Mots interdits: aucun trouvé ✅');

  console.log('\n=== PIPELINE S3:V45 TERMINÉE ===');
  console.log(`\nVERSET 3:45 — TERMINÉ`);
  finalVWA.forEach(w => console.log(`  ${w.word_key} → sens "${w.sense_chosen}"`));
  console.log(`Traduction : "${finalVA.translation_arab}"`);
}

main().catch(e => console.error(e));
