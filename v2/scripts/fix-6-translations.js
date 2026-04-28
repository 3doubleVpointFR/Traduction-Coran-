const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// French translations based on VWA retained senses
// Rules: French courant, Allah -> Dieu, use retained senses
const TRANSLATIONS = {
  // V245 (verse_id=252)
  // Retained: qrd=Pret/Volontaire, hsn=Beaute/Excellence, def=Multiplication/Abondance, 
  // qbd=Resserrement/Contraction, bst=Deploiement/Largesse, rje=Retour/Eschatologie
  252: "Qui est celui qui prêtera à Dieu un prêt excellent, pour qu'Il le lui multiplie en abondance ? Dieu resserre et déploie, et c'est vers Lui que vous serez ramenés.",

  // V246 (verse_id=253)
  // Retained: mla=Notables/Prestige, nba=Prophetie/Annonce, beth=Envoi/Mission, 
  // mlk=Royaute/Souverainete, qtl=Combat/Jihad, wly=Defection/Reniement, zlm=Injustice/Oppression
  253: "N'as-tu pas vu les notables des fils d'Israël, après Moïse, quand ils dirent à un prophète parmi eux : « Envoie-nous un roi pour que nous combattions dans le chemin de Dieu. » Il dit : « Se pourrait-il que, si le combat vous était prescrit, vous refusiez de combattre ? » Ils dirent : « Pourquoi ne combattrions-nous pas dans le chemin de Dieu, alors que nous avons été chassés de nos demeures et séparés de nos enfants ? » Mais quand le combat leur fut prescrit, ils se détournèrent, sauf un petit nombre d'entre eux. Et Dieu connaît bien les injustes.",

  // V249 (verse_id=256)
  // Retained: fsl=Depart/MarcheArmee, blw=Epreuve/TestDivin, shrb=Boisson/Desobeissance,
  // tem=Gout/Sobriete, amn=Foi/Croyance, znn=Conviction/CertitudeAllah, ghlb=Victoire/Surpassement, sbr=Patience/Endurance
  256: "Quand Talout se mit en marche avec les troupes, il dit : « Dieu va vous éprouver par un fleuve : celui qui en boira ne sera pas des miens, et celui qui n'y goûtera pas sera des miens — sauf celui qui en prend une gorgée dans le creux de sa main. » La plupart d'entre eux en burent, sauf un petit nombre. Quand ils eurent traversé, lui et ceux qui avaient cru avec lui, ils dirent : « Nous n'avons pas de force aujourd'hui contre Jalout et ses troupes. » Ceux qui étaient convaincus de rencontrer Dieu dirent : « Combien de fois un petit groupe a vaincu un grand groupe, avec la permission de Dieu ! Et Dieu est avec ceux qui endurent. »",

  // V250 (verse_id=257)
  // Retained: brz=FaceAFace/CombatMilitaire, frg=Deversement/GraceDivine, sbr=Endurance/PatientsCombat,
  // thbt=Fermete/StabilitePosition, qdm=Pas/PositionCombat, nsr=Victoire/SecoursDecisif, kfr=Mecreance/Ingratitude
  257: "Et quand ils firent face à Jalout et à ses troupes, ils dirent : « Notre Seigneur, déverse sur nous l'endurance, affermis nos pas et accorde-nous la victoire sur le peuple qui refuse la vérité. »",

  // V251 (verse_id=258)
  // Retained: hzm=Deroute/VictoireDisperante, qtl=Meurtre/ActeDecisif, mlk=Royaute/SouveraineteAccordee,
  // hkm=Sagesse/GouvernanceDiscernante, dfe=Contrepoids/EquilibreDivin, fsd=Corruption/PourrissementTerre, fdl=Grace/BienfaitDivin
  258: "Ils les mirent en déroute avec la permission de Dieu, et Dawoud tua Jalout. Dieu lui accorda la royauté et la sagesse, et lui enseigna ce qu'Il voulut. Si Dieu ne repoussait pas les gens les uns par les autres, la terre serait corrompue. Mais Dieu est plein de grâce envers les mondes.",

  // V252 (verse_id=259)
  // Retained: ayy=Signes/VersetsReveles, tlw=Recitation/TransmissionSacree, hqq=Verite/RealiteFerme, rsl=Envoyes/MissionProphetique
  259: "Ce sont là les signes de Dieu que Nous te récitons en toute vérité. Et tu es bien parmi les envoyés."
};

async function main() {
  console.log('=== Updating translations ===\n');
  
  for (const [verseId, translation] of Object.entries(TRANSLATIONS)) {
    const vid = parseInt(verseId);
    console.log(`Updating verse_id=${vid} (V${vid - 7})...`);
    console.log(`  New: ${translation.substring(0, 100)}...`);
    
    const { error } = await supabase
      .from('verse_analyses')
      .update({ translation_arab: translation })
      .eq('verse_id', vid);
    
    if (error) {
      console.error(`  ERROR: ${JSON.stringify(error)}`);
    } else {
      console.log(`  OK`);
    }
  }

  // Verify
  console.log('\n=== VERIFICATION ===\n');
  const { data: updated } = await supabase
    .from('verse_analyses')
    .select('verse_id, translation_arab')
    .in('verse_id', [252, 253, 256, 257, 258, 259])
    .order('verse_id');
  
  for (const u of updated) {
    console.log(`verse_id=${u.verse_id} (V${u.verse_id - 7}): ${u.translation_arab.substring(0, 120)}...`);
  }
}

main().catch(console.error);
