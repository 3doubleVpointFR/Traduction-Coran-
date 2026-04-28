const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function fixVWA(vid, wk, pos, patch) {
  const { data } = await sb.from('verse_word_analyses')
    .select('id, analysis_axes').eq('verse_id', vid).eq('word_key', wk).eq('position', pos).single();
  if (!data) { console.log(`  SKIP ${wk}/p${pos} vid=${vid} — not found`); return; }
  const axes = { ...data.analysis_axes };
  if (patch.concepts) {
    axes.concepts = { ...data.analysis_axes.concepts };
    for (const [cn, cv] of Object.entries(patch.concepts)) {
      axes.concepts[cn] = { ...(axes.concepts[cn] || {}), ...cv };
    }
  }
  if (patch.sense_chosen) axes.sense_chosen = patch.sense_chosen;
  if (patch.concept_chosen) axes.concept_chosen = patch.concept_chosen;
  const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', data.id);
  console.log(error ? `  ERR ${wk}/p${pos}: ${error.message}` : `  OK ${wk}/p${pos}`);
}

async function deleteVWA(vid, wk, pos) {
  const { error } = await sb.from('verse_word_analyses')
    .delete().eq('verse_id', vid).eq('word_key', wk).eq('position', pos);
  console.log(error ? `  ERR delete ${wk}/p${pos}: ${error.message}` : `  OK deleted ${wk}/p${pos}`);
}

async function main() {
  console.log('=== FIX V161-170 ===\n');

  // ===== V161: kfr p=1 et p=5 — "Couverture/Dissimulation" probable sans axes =====
  console.log('--- V161: kfr "Couverture/Dissimulation" probable — ajout axes ---');

  const kfrCouvertureAxes = {
    "Couverture/Dissimulation": {
      axe1_verset: "Dans ce verset, la racine k-f-r apparait deux fois pour decrire ceux qui ont rejete la verite et sont morts dans cet etat. Le concept de couverture ou dissimulation est pertinent car la racine porte originellement le sens de couvrir, cacher. Ceux qui rejettent la guidance divine couvrent deliberement la verite qui leur a ete presentee. La dissimulation est le mecanisme par lequel ils se protegent de la verite qui les derangerait dans leurs habitudes et leurs certitudes etablies.",
      axe2_voisins: "Les versets voisins traitent de la malediction divine et de ses consequences eternelles. Le verset 160 parle de ceux qui cachent les preuves claires apres les avoir expliquees dans le Livre. Le lien avec la couverture est direct — cacher la verite est une forme de kufr. Le verset 162 annonce que la malediction reste sur eux pour toujours. La couverture de la verite entraine une exclusion permanente de la misericorde divine car le voile pose sur la verite ne peut plus etre leve.",
      axe3_sourate: "Dans Al-Baqarah, la racine k-f-r est omnipresente et constitue un theme central. Le concept de couverture apparait des le debut de la sourate avec la description des negateurs dont les coeurs sont scelles. La sourate presente le kufr comme un acte delibere de couvrir la verite que l'on connait, pas simplement comme une ignorance. Les gens du Livre qui dissimulent les versets sont une illustration parfaite de cette dimension de couverture active et intentionnelle.",
      axe4_coherence: "Dans l'ensemble du Coran, la racine k-f-r oscille entre couverture et ingratitude. Le concept de couverture est coherent avec l'usage coranique ou le kafir est celui qui couvre les signes de Dieu malgre leur evidence. Le Coran decrit souvent le processus de kufr comme un voilement progressif — d'abord on doute, puis on couvre, puis on nie ouvertement. La couverture est le stade intermediaire entre la reception de la verite et son rejet total.",
      axe5_frequence: "Pour la mission du khalifa, le concept de couverture pose un defi majeur de gouvernance. Le representant de Dieu sur terre doit lutter contre toutes les formes de dissimulation — la corruption cachee, les verites etouffees, les preuves occultees. Un gouvernant juste doit garantir la transparence et empecher que la verite soit couverte par les interets particuliers. La couverture est l'ennemie de la justice car elle empeche les decisions eclairees et corrompre le tissu social."
    }
  };

  await fixVWA(168, 'kfr', 1, { concepts: kfrCouvertureAxes });
  await fixVWA(168, 'kfr', 5, { concepts: kfrCouvertureAxes });

  // ===== V165: dhyy p=11 et p=18 — pronom relatif, supprimer les VWA =====
  console.log('\n--- V165: dhyy p=11 et p=18 — suppression VWA (pronom relatif) ---');
  await deleteVWA(172, 'dhyy', 11);
  await deleteVWA(172, 'dhyy', 18);

  // ===== V162: xld concept_chosen mismatch =====
  console.log('\n--- V162: xld concept_chosen fix ---');
  // Check what concepts exist
  const { data: xldData } = await sb.from('verse_word_analyses')
    .select('id, analysis_axes').eq('verse_id', 169).eq('word_key', 'xld').eq('position', 0).single();
  if (xldData) {
    const conceptNames = Object.keys(xldData.analysis_axes.concepts || {});
    console.log('  xld concepts:', conceptNames.join(', '));
    // Find the retenu concept
    let retenuName = null;
    for (const [cn, cd] of Object.entries(xldData.analysis_axes.concepts || {})) {
      if (cd.status === 'retenu') retenuName = cn;
    }
    if (retenuName && retenuName !== xldData.analysis_axes.concept_chosen) {
      console.log(`  Fixing concept_chosen: "${xldData.analysis_axes.concept_chosen}" -> "${retenuName}"`);
      await fixVWA(169, 'xld', 0, { concept_chosen: retenuName });
    } else if (!retenuName) {
      // Create the concept with the right name
      console.log('  No retenu found, setting Éternité/Permanence as retenu');
      const axes = { ...xldData.analysis_axes };
      // Check if Eternite/Permanence exists (without accent)
      const found = conceptNames.find(n => n.includes('ternit'));
      if (found) {
        axes.concept_chosen = found;
        await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', xldData.id);
        console.log(`  OK: concept_chosen set to "${found}"`);
      } else {
        console.log('  WARN: no eternite concept found, concepts are:', conceptNames);
      }
    }
  }

  console.log('\n=== FIX V161-170 TERMINE ===');
}
main().catch(console.error);
