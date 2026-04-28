/**
 * Finalisation cohérente de la racine mlk pour le sens "ange" :
 *  1. Renomme concept "Ange/Annonce" → "Ange"
 *  2. Réécrit les proof_ctx des word_meanings (concept-level explanation)
 *  3. Réécrit les proof_ctx des VWA pour expliquer le choix "ange" vs "messager"
 *  4. Réécrit le §CRITIQUE§ de V45 (vid=338) pour défendre "anges"
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const OLD = 'Ange/Annonce';
const NEW = 'Ange';

// Texte étymologique réutilisable
const ETY_EXPLANATION =
  "Le mot malak (pluriel malāʾika) dérive vraisemblablement de la racine archaïque l-ʾ-k qui signifie « envoyer ». Le malak est donc étymologiquement un « envoyé ». Mais son référent dans l'arabe coranique est exclusivement une créature céleste — un être spirituel agent de Dieu — et non un humain en mission, ce dernier étant rendu par rasūl (racine r-s-l = envoyer). Pour préserver cette distinction sémantique essentielle entre l'envoyé humain (rasūl) et l'envoyé céleste (malak), on traduit malak par « ange ». Le mot français « ange » provient du grec angelos qui signifie aussi « messager » — la connotation étymologique est donc parallèle.";

async function run() {
  // ===== 1. Renommer concept =====
  const wa = await db.from('word_analyses').select('id').eq('word_key', 'mlk').single();
  const aid = wa.data.id;

  await db.from('word_meanings').update({ concept: NEW }).eq('analysis_id', aid).eq('concept', OLD);
  console.log(`✓ word_meanings : concept renommé "${OLD}" → "${NEW}"`);

  // ===== 2. Réécrire proof_ctx pour les sens du concept Ange dans word_meanings =====
  // (les 3 sens : ange / messager / message)
  const wms = await db.from('word_meanings').select('id, sense').eq('analysis_id', aid).eq('concept', NEW);
  for (const m of wms.data || []) {
    let txt;
    if (m.sense === 'ange') {
      txt = "Sens principal : créature céleste agente de Dieu. " + ETY_EXPLANATION;
    } else if (m.sense === 'messager') {
      txt = "Sens étymologique sous-jacent : le malak est l'« envoyé ». À ne pas confondre avec rasūl (messager humain). On préfère « ange » pour traduire en français afin de préserver la distinction.";
    } else if (m.sense === 'message') {
      txt = "Sens dérivé secondaire : ce que l'envoyé apporte. Peu attesté pour malak en tant que tel ; le contenu de l'envoi est plus souvent rendu par d'autres racines (n-b-ʾ pour la nouvelle, w-ḥ-y pour la révélation).";
    } else {
      continue;
    }
    await db.from('word_meanings').update({ proof_ctx: txt }).eq('id', m.id);
  }
  console.log(`✓ word_meanings : ${wms.data?.length || 0} proof_ctx réécrits`);

  // ===== 3. Réécrire proof_ctx dans les VWA mlk où le sens retenu est "ange" / "anges" =====
  const { data: vwas } = await db.from('verse_word_analyses')
    .select('id, verse_id, analysis_axes')
    .eq('word_key', 'mlk');
  for (const v of vwas) {
    const ax = v.analysis_axes;
    if (!ax) continue;
    if (ax.concepts && ax.concepts[NEW]) {
      const sense = ax.sense_chosen;
      if (sense === 'ange' || sense === 'anges') {
        ax.concepts[NEW].proof_ctx =
          `Le pluriel défini al-malāʾikatu désigne ici les anges — créatures célestes agentes de Dieu. ` + ETY_EXPLANATION;
        await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', v.id);
        console.log(`  ✓ VWA vid=${v.verse_id} proof_ctx réécrit`);
      }
    }
  }

  // ===== 4. V45 §CRITIQUE§ — réécrire le bloc "messagers vs Anges" en "anges vs messagers" =====
  const { data: va } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 338).single();
  let expl = va.translation_explanation || '';

  // Ancien bloc à remplacer (commence par "**messagers vs Anges**" jusqu'au prochain bloc **)
  const oldBlock = /\*\*messagers vs Anges\*\*[\s\S]*?(?=\n\n\*\*|$)/;
  const newBlock =
    `**anges vs « Anges » (Hamidullah)** : Hamidullah rend al-malāʾikatu par « les Anges ». La traduction est sémantiquement correcte mais on l'adopte ici en minuscule (« les anges ») pour deux raisons : (1) la majuscule chrétienne tend à figer le mot en concept dogmatique alors que le terme arabe est descriptif (créature céleste, agent de Dieu) ; (2) le malak partage avec le rasūl (humain envoyé) la dimension étymologique d'« envoi » (la racine l-ʾ-k signifie envoyer) — mais son référent reste exclusivement une créature céleste, distincte du messager humain. On garde « anges » plutôt que « messagers » pour préserver cette distinction structurante : les anges ne sont pas des humains en mission, ce sont des êtres spirituels agents de Dieu. Le grec angelos qui a donné « ange » en français porte précisément cette double dimension (créature + messager), miroir étymologique fidèle au malak arabe.`;

  if (oldBlock.test(expl)) {
    expl = expl.replace(oldBlock, newBlock);
    await db.from('verse_analyses').update({ translation_explanation: expl }).eq('verse_id', 338);
    console.log('✓ V45 §CRITIQUE§ : bloc "messagers vs Anges" réécrit en "anges vs Anges"');
  } else {
    console.log('⚠ V45 : bloc "messagers vs Anges" introuvable — peut-être déjà modifié');
  }

  console.log('\n✅ FINALISATION TERMINÉE');
}
run().catch(e => { console.error(e); process.exit(1); });
