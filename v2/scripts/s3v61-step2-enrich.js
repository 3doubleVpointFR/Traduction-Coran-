// S3:V61 — Enrichissement des racines suspectes : bhl, len, nsw
// Aucune suppression. AJOUT UNIQUEMENT des sens manquants.
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const ENRICHMENTS = [
  // ─── bhl (ب ه ل) aid=1287 — actuel : 3 sens (Malédiction/Imprécation x2 + Sens isolé/Laisser) ───
  // Lane's atteste clairement :
  //   I.1  بَهَلَ النَّاقَةَ : laisser la chamelle sans ṣirār (sans entrave sur le pis)
  //   I.2  بَهَلَهُ : le laisser à son propre vouloir, à son propre jugement (libre)
  //   I.3  بَهْلٌ : acte de maudire (dérivé du premier sens via "abandonner au malheur")
  //   III  بَاهَلَهُ / مُبَاهَلَةٌ : se maudir mutuellement / imprécation mutuelle
  //        "I joined with him in imprecating the curse of God upon whichever of us did wrong" (JK)
  //   VIII اِبْتَهَلَ : tropicalement, s'humilier, s'adresser à Dieu avec supplication fervente (synonyme taḍarruʿ)
  //        strive/be earnest in prayer, sincere/without hypocrisy
  //   Nom بَهْلَةٌ / بُهْلَةٌ : malédiction (nom)
  //   بَاهِلٌ : chamelle sans entrave, libre de pâturer où elle veut
  //   بَهْلَلَةٌ : qualité d'éviter les choses basses + générosité/noblesse
  //   بُهْلُولٌ : homme noble, seigneur réunissant toutes les qualités
  //
  // Concepts retenus (4) :
  //   A. Liberté/Laisser libre (sens concret premier) — laisser la chamelle, laisser l'homme à son jugement
  //   B. Imprécation/Malédiction (sens dérivé de "abandonner au malheur")
  //   C. Supplication fervente/Humble invocation (forme VIII tropicale, taḍarruʿ)
  //   D. Noblesse/Générosité (sens nominal isolé : buhlūl, bahlala)
  //
  // IMPORTANT : ne pas toucher à l'existant. Les 3 sens actuels ('invoquer la malédiction', 'maudire mutuellement', 'laisser libre') sont conservés.
  {
    aid: 1287, word_key: 'bhl', root: 'ب ه ل',
    add: [
      {
        concept: 'Liberté/Laisser libre',
        sense: 'laisser la chamelle libre',
        description: "Sens concret premier de la racine selon Lane's (Bd in iii. 54) : laisser la chamelle sans ṣirār, le lien qui empêche son petit de téter — elle peut être traite par n'importe qui. La liberté décrite est un abandon : on lève la contrainte, la chose ou la personne est livrée à elle-même. C'est un acte directionnel qui sort du maître et supprime la tenue ou la protection.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Liberté/Laisser libre',
        sense: 'laisser à son propre jugement',
        description: "Extension du sens concret : laisser l'homme libre à sa propre volonté, à son propre jugement — ne plus le retenir, ne plus le restreindre. Comme la chamelle libérée de son entrave, la personne est abandonnée à elle-même.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Supplication fervente/Humble invocation',
        sense: 's\'humilier en invocation',
        description: "Sens de la forme VIII (ibtahala) attesté par Lane's (S, Msb, K, Jel) comme tropical (tafsīr) : s'abaisser, s'humilier devant Dieu, s'adresser à Lui avec une supplication fervente et sincère — synonyme de taḍarruʿ (se faire humble, se supplier). C'est un acte intérieur qui se manifeste par la parole : la personne descend volontairement de son rang pour reconnaître sa dépendance à Dieu. La forme VIII marque l'engagement personnel et soutenu du sujet dans cet abaissement.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Supplication fervente/Humble invocation',
        sense: 'supplier avec ardeur',
        description: "Synonyme : striver/être ardent dans la prière (JK, K). La supplication est sans hypocrisie — le suppliant se donne entièrement.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Noblesse/Générosité',
        sense: 'qualité de fuir les choses basses',
        description: "Sens nominal dérivé attesté par Lane's (JK) : bahlala = qualité de celui qui se retire des choses laides et qui est généreux/noble. C'est un état permanent de la personne, un trait de caractère. Le buhlūl (JK, K) est celui qui réunit toutes les bonnes qualités, un seigneur/prince noble. Ce sens est périphérique et isolé de l'usage coranique.",
        meaning_type: 'etymology'
      }
    ]
  },
  // ─── len (ل ع ن) aid=680 — actuel : 3 sens (Malédiction/Exclusion x3) ───
  // Les lexicographes classiques (Lane's partiel, Lisān al-ʿArab, Maqāyīs al-Lugha) donnent :
  //   laʿana : éloigner, expulser, repousser loin — c'est le sens étymologique premier
  //     (la laʿna de Dieu = éloignement de Sa miséricorde, repoussement)
  //   laʿana (verbe I) : vilipender, blâmer durement, injurier
  //   luʿna : nom fém. = éloignement/malédiction comme réalité permanente
  //   laʿīn : qui est éloigné/maudit (adjectif) — Lane's donne aussi "base part of palm raceme" (sens concret isolé)
  //   iltaʿana (VIII) : se maudir mutuellement
  //   talāʿana (VI) : se maudir mutuellement (cf. mulāʿana, procédure légale de désaveu de paternité)
  //
  // Concepts supplémentaires à ajouter :
  //   Éloignement/Expulsion (sens étymologique premier) — distinct de la malédiction comme simple injure
  //   Vilipende/Blâme (acte verbal de reproche violent)
  //   Sens isolé/Partie basse (sens concret de laʿīn = base d'une régime de palmier, Lane's)
  {
    aid: 680, word_key: 'len', root: 'ل ع ن',
    add: [
      {
        concept: 'Éloignement/Expulsion',
        sense: 'éloigner',
        description: "Sens étymologique premier de la racine selon les lexicographes classiques : mettre à distance, repousser au loin, chasser. L'éloignement décrit par laʿana est directionnel — il sort de celui qui éloigne et atteint celui qui est éloigné, qui se retrouve mis à l'écart. C'est un acte extérieur et permanent : ce qui est éloigné reste éloigné.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Éloignement/Expulsion',
        sense: 'repousser loin',
        description: "Synonyme proche : chasser au loin, rejeter. La laʿna de Dieu sur quelqu'un est d'abord cet éloignement de Sa miséricorde, cette mise hors de portée de Sa grâce.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Éloignement/Expulsion',
        sense: 'exclure',
        description: "Mettre hors d'un groupe, retirer la qualité d'appartenance. L'exclusion est la conséquence de l'éloignement quand il porte sur une communauté ou un statut.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Vilipende/Blâme',
        sense: 'vilipender',
        description: "Acte verbal de reprocher durement, de blâmer publiquement, d'injurier. Selon les sources étymologiques, laʿana en forme I désigne aussi l'acte de dire du mal de quelqu'un avec violence — c'est un acte de parole dirigé vers autrui, qui sort du locuteur et atteint celui qui est visé.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Vilipende/Blâme',
        sense: 'réprouver',
        description: "Désapprouver fortement et publiquement. La réprobation est un jugement exprimé qui éloigne moralement.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Sens isolé/Base de palmier',
        sense: 'partie basse du régime',
        description: "Sens physique isolé attesté par Lane's (TA in art. عهن) : laʿīn désigne la partie basse, inférieure, d'un régime de dattier. Ce sens concret n'a pas de lien direct avec l'usage coranique mais éclaire l'étymologie (ce qui est en bas, en dehors, à distance).",
        meaning_type: 'etymology'
      }
    ]
  },
  // ─── nsw (ن س و) aid=2198 — actuel : 2 sens (Oubli/Négligence) ───
  // Lane's sous nsw : النَّسَا = veine sciatique ; tanāsā (VI) = faire semblant d'avoir oublié ; nasā (n-s-ʾ) = reporter.
  // Mais la racine n-s-w / n-s-y porte aussi dans l'usage coranique le nom nisāʾ (نساء) = femmes,
  //   normalement rattaché à une racine distincte n-s-ʾ (reporter) ou à nasaʾa (retarder la menstrue).
  //   Les lexicographes classiques : nisāʾ est pluriel sans singulier direct du même radical
  //   (le singulier usuel est imraʾa, rattaché à m-r-ʾ), mais rattaché conventionnellement à n-s-w.
  // L'étymologie profonde est débattue (Lane's, Lisān) : soit de nisyān (oubli) par une logique
  //   sur la douceur/faiblesse de mémoire (sens que nous n'affirmons pas), soit d'une racine
  //   indépendante désignant le sexe féminin humain.
  // On AJOUTE donc :
  //   - concept Féminin/Épouses avec le sens nisāʾ (femmes) — le sens coranique dominant
  //   - concept Faiblesse/Oubli étendu (anatomique et moral) — nasā = veine, tanāsā = feindre d'oublier
  {
    aid: 2198, word_key: 'nsw', root: 'ن س و',
    add: [
      {
        concept: 'Féminin/Épouses',
        sense: 'femmes',
        description: "Pluriel nisāʾ (نِسَاء) désigne les êtres humains de sexe féminin, pris collectivement. C'est un nom collectif qui n'a pas de singulier direct du même radical en usage courant (le singulier est imraʾa, d'une autre racine). La réalité désignée est celle d'une moitié de l'humanité prise comme groupe : le féminin humain, permanent comme catégorie. Les sources étymologiques classiques rattachent ce nom à la racine n-s-w / n-s-y sans en donner une dérivation claire et unanime.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Féminin/Épouses',
        sense: 'épouses',
        description: "Par extension contextuelle, quand le nom est en idafa avec un pronom personnel (ex: nisāʾu-hum « leurs femmes »), il désigne les épouses ou les femmes du foyer rattachées à la personne désignée par le pronom.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Féminin/Épouses',
        sense: 'genre féminin',
        description: "Sens collectif abstrait : l'ensemble des femmes en tant que genre, par opposition au genre masculin (rijāl).",
        meaning_type: 'etymology'
      },
      {
        concept: 'Faiblesse/Oubli prolongé',
        sense: 'feindre d\'oublier',
        description: "Sens de la forme VI attesté par Lane's (S, KL, TA) : tanāsā = faire semblant d'avoir oublié, se contraindre à chasser une chose de l'esprit. C'est un acte intérieur volontaire, distinct de l'oubli pur — la personne sait mais choisit d'effacer. Synonyme proche de nasiya mais avec l'intention de ne plus se souvenir.",
        meaning_type: 'etymology'
      },
      {
        concept: 'Anatomie/Sciatique',
        sense: 'veine sciatique',
        description: "Sens anatomique isolé attesté par Lane's (IAth, TA, Ibn-Seenà) : al-nasā (النَّسَا) désigne la portion de veine dans la cuisse qui descend jusqu'au talon — ce que nous appelons aujourd'hui la veine ou le nerf sciatique. Sens concret premier distinct de l'usage de nisāʾ et de l'oubli.",
        meaning_type: 'etymology'
      }
    ]
  }
];

async function run() {
  for (const E of ENRICHMENTS) {
    console.log('\n=== ENRICH aid=' + E.aid + ' ' + E.word_key + ' (' + E.root + ') ===');

    // lecture existant
    const { data: existing } = await db.from('word_meanings').select('sense,concept').eq('analysis_id', E.aid);
    const existingSenses = new Set((existing || []).map(m => m.sense));
    const maxOrder = (existing || []).length;

    let order = maxOrder + 1;
    for (const entry of E.add) {
      if (existingSenses.has(entry.sense)) {
        console.log('  SKIP (existe) : ' + entry.sense);
        continue;
      }
      const row = {
        analysis_id: E.aid,
        concept: entry.concept,
        sense: entry.sense,
        status: 'neutral',
        description: entry.description,
        display_order: order++,
        meaning_type: entry.meaning_type || 'etymology',
        occ_count: 0,
        occ_refs: []
      };
      const { error } = await db.from('word_meanings').insert(row);
      if (error) {
        console.error('  ERR insert: ', error);
        throw error;
      }
      console.log('  + ' + entry.concept + ' / ' + entry.sense);
    }

    // bump analysis_step to etymology
    const { error: upErr } = await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', E.aid);
    if (upErr) { console.error('  ERR update step:', upErr); }
  }

  // fix bhl occurrences (0 → vrai chiffre). D'après corpus.quran.com la racine bhl apparaît 1 fois (3:61 nabtahil).
  console.log('\n=== Fix total_occurrences pour bhl (aid=1287) → 1 (1 occurrence QAC, 3:61) ===');
  await db.from('word_analyses').update({ total_occurrences: 1 }).eq('id', 1287);

  console.log('\n== Enrichissement terminé ==');
}
run().catch(e => { console.error(e); process.exit(1); });
