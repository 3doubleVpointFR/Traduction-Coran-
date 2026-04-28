const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 218
// verse_id=225, analysis_id=583
// "inna alladhina amanu wa-alladhina hajaru
//  wa-jahadu fi sabili Allahi
//  ula'ika yarjuna rahmata Allahi
//  wa-Allahu ghafurun rahimun"
// Les croyants qui ont emigre et lutte esperent la misericorde.
// =====================================================

const verseData = {
  218: {
    verse_id: 225,
    analysis_id: 583,
    translation_arab: "Ceux qui ont cru, emigre et lutte dans la voie de Dieu — ceux-la esperent la misericorde de Dieu. Dieu est couvrant-pardonnant, misericordieux.",
    full_translation: "Certes, ceux qui ont cru, emigre et lutte dans le sentier d'Allah, ceux-la esperent la misericorde d'Allah. Et Allah est Pardonneur et Misericordieux.",
    translation_explanation: `§DEMARCHE§
Le verset 218 est un verset de consolation et d'espoir apres la longueur du verset 217 sur les apostats et le feu. Apres avoir decrit ceux qui meurent en rejetant (217), le verset 218 decrit les trois caractéristiques de ceux qui esperent la misericorde divine : foi (amanu), emigration (hajaru), lutte (jahadu fi sabil Allah).

Le verbe **amanu** est un accompli 3MP de la racine a-m-n. Ils ont cru — acte de foi etabli.

Le verbe **hajaru** est un accompli 3MP de la racine h-j-r. Le Lane's donne : emigrer, se separer, quitter un lieu pour un autre. La hijra est l'emigration — quitter son lieu de residence pour suivre la guidance divine. Historiquement, la hijra de Muhammad de La Mecque a Medine est l'acte fondateur.

Le verbe **jahadu** est un accompli 3MP de la racine j-h-d (Form III). Le Lane's donne : faire effort, lutter, deployer tous ses efforts. Le jihad est l'effort total — s'investir de tout son etre dans la voie de Dieu. « Fi sabili Allahi » = dans la voie de Dieu, ce qui precise la direction de l'effort.

Le verbe **yarjuna** est un inaccompli 3MP de la racine r-j-w. Le Lane's donne : esperer, attendre avec esperance, avoir confiance dans l'eventualite. Le raja' est l'esperance — une attente positive avec confiance. L'inaccompli marque l'esperance comme continue — ils esperent constamment.

Le nom **rahmata** est un nom accusatif de la racine r-h-m. Le Lane's donne : misericorde, tendresse, compassion. La rahma est la misericorde divine — la tendresse compassionnelle de Dieu. « Rahmata Allahi » = la misericorde de Dieu.

L'adjectif **ghafurun** est un adjectif nominatif de la racine gh-f-r. Le Lane's donne : pardonner, couvrir, voiler les fautes. Le ghafur est Celui qui pardonne — qui couvre les fautes. La racine gh-f-r designe le pardon comme un acte de couverture — les fautes sont voilees, cachees, effacees.

L'adjectif **rahimun** est un adjectif nominatif de la racine r-h-m. Le Lane's donne : misericordieux, plein de tendresse. Al-Rahim est un des noms de Dieu — la misericorde comme attribut permanent.

§JUSTIFICATION§
**ont emigre** — « hajaru » est traduit par « ont emigre » car h-j-r designe le depart d'un lieu pour un autre. L'alternative « ont quitte » est moins precise — emigrer implique un mouvement vers un nouveau lieu pour une raison spirituelle ou politique.

**lutte** — « jahadu » est traduit par « lutte » car j-h-d designe l'effort total. L'alternative « combattu » (Hamidullah) est trop restrictive — le jihad n'est pas seulement le combat physique mais tout effort dans la voie de Dieu.

**esperent** — « yarjuna » est traduit par « esperent » car r-j-w designe l'esperance. L'alternative « attendent » serait moins precis — le raja' implique une esperance confiante, pas seulement une attente neutre.

**couvrant-pardonnant** — « ghafurun » est traduit par « couvrant-pardonnant » car le sens etymologique de gh-f-r est la couverture — voiler les fautes. L'alternative « Pardonneur » (Hamidullah) perd la dimension de couverture qui est au coeur du concept.

§CRITIQUE§
Hamidullah traduit « jahadu fi sabili Allahi » par « lutte dans le sentier d'Allah ». Le terme « sentier » pour sabil est acceptable mais un peu poetique — sabil est la voie ordinaire, le chemin. Mais la principale question est sur jahadu — Hamidullah traduit par « lutte » ce qui est correct. La dimension d'effort total (j-h-d = deployer tous ses efforts) est parfois reduite au seul combat physique dans les traductions classiques. Le verset 218 lie amanu (foi) + hajaru (emigration) + jahadu (effort) — les trois forment ensemble le profil du croyant engage, pas seulement le combattant.`,
    segments: [
      { fr: "Certes ceux qui ont cru", phon: "inna alladhina amanu", arabic: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟", is_particle: true, position: 0 },
      { fr: "et ont emigre", pos: "verbe", phon: "wa-alladhina hajaru", arabic: "وَٱلَّذِينَ هَاجَرُوا۟", word_key: "hjr", is_particle: false, sense_retenu: "migration/separation", position: 1 },
      { fr: "et ont lutte dans la voie de Dieu", pos: "verbe", phon: "wa-jahadu fi sabili Allahi", arabic: "وَجَـٰهَدُوا۟ فِى سَبِيلِ ٱللَّهِ", word_key: "jhd", is_particle: false, sense_retenu: "effort/lutte", position: 2 },
      { fr: "ceux-la esperent", pos: "verbe", phon: "ula'ika yarjuna", arabic: "أُو۟لَـٰٓئِكَ يَرْجُونَ", word_key: "rjw", is_particle: false, sense_retenu: "espoir/attente", position: 3 },
      { fr: "la misericorde de Dieu", pos: "nom", phon: "rahmata Allahi", arabic: "رَحْمَتَ ٱللَّهِ", word_key: "rhm", is_particle: false, sense_retenu: "misericorde/tendresse", position: 4 },
      { fr: "et Dieu est couvrant-pardonnant", pos: "adj", phon: "wa-Allahu ghafurun", arabic: "وَٱللَّهُ غَفُورٌ", word_key: "ghfr", is_particle: false, sense_retenu: "pardon/couverture", position: 5 },
      { fr: "misericordieux", pos: "adj", phon: "rahimun", arabic: "رَّحِيمٌ", word_key: "rhm", is_particle: false, sense_retenu: "misericorde/tendresse", position: 6 }
    ],
    vwa: [
      {
        word_key: "hjr",
        position: 1,
        sense_chosen: "migration/separation",
        analysis_axes: {
          sense_chosen: "migration/separation",
          concept_chosen: "Migration/Separation",
          concepts: {
            "Migration/Separation": {
              status: "retenu",
              senses: ["emigrer", "quitter", "se separer", "migration", "hijra"],
              proof_ctx: "Le verbe hajaru est un accompli 3MP de la racine h-j-r. Le Lane's donne : emigrer, quitter un lieu, se separer de, laisser derriere soi. Le hujr/hijra est la separation/emigration — quitter son lieu de confort pour suivre une mission spirituelle. L'accompli marque l'acte comme accompli — ils ont emigre (c'est fait, acquis).",
              axe1_verset: "L'emigration (hajaru) est la deuxieme caracteristique des croyants qui esperent la misericorde. Elle fait suite a la foi (amanu) et precede la lutte (jahadu). L'emigration est un acte de rupture concrete — quitter le confort pour la mission.",
              axe2_voisins: "Le verset 217 parlait de ceux qui ne cessent de combattre pour detourner les croyants de leur voie. Le verset 218 repond : ceux qui ont emigre (malgre les persecutions) et lutte esperent la misericorde.",
              axe3_sourate: "La racine h-j-r est presente dans la sourate al-Baqarah en 2:218. La hijra est un acte fondateur de la communaute — quitter son lieu pour Dieu est un des actes les plus significatifs de l'engagement.",
              axe4_coherence: "La racine h-j-r apparait environ 31 fois dans le Coran. La hijra (emigration) est un acte fondateur de l'Islam — Muhammad a emigre de La Mecque a Medine. La hijra de Muhammad est le point de depart du calendrier islamique.",
              axe5_frequence: "Pour le khalifa, l'emigration est un modele d'engagement sans compromis. Le khalifa doit etre pret a quitter le confort pour la mission — la hijra est un modele de priorite de la mission sur le confort personnel."
            }
          }
        }
      },
      {
        word_key: "jhd",
        position: 2,
        sense_chosen: "effort/lutte",
        analysis_axes: {
          sense_chosen: "effort/lutte",
          concept_chosen: "Effort/Lutte",
          concepts: {
            "Effort/Lutte": {
              status: "retenu",
              senses: ["faire effort", "lutter", "deployer tous ses efforts", "s'investir totalement"],
              proof_ctx: "Le verbe jahadu est un accompli 3MP de la racine j-h-d (Form III). Le Lane's donne : faire effort, deployer sa capacite maximale, lutter avec tout son etre. La Form III (jahada) implique une reciprocite ou un effort considerable. Le jihad est l'effort maximum dans une direction. « Fi sabili Allahi » = dans la voie de Dieu — l'effort est directionnel.",
              axe1_verset: "L'effort/lutte (jahadu) dans la voie de Dieu est la troisieme caracteristique. L'effort complète la foi et l'emigration — on croit, on quitte son confort, on s'investit totalement. Les trois forment un profil complet d'engagement.",
              axe2_voisins: "Le verset 215 parlait de la depense (infaq) comme forme d'action. Le verset 217 parlait du combat (qital). Le verset 218 parle de la lutte (jihad) — qui englobe toutes les formes d'effort dans la voie divine.",
              axe3_sourate: "La racine j-h-d est presente dans la sourate al-Baqarah en 2:218 principalement. La sourate al-Baqarah traite plus du combat (qital) que du jihad au sens large.",
              axe4_coherence: "La racine j-h-d apparait environ 41 fois dans le Coran. Le jihad au sens coranique couvre l'effort interieur (contre ses propres mauvaises tendances) et l'effort exterieur (defense, service). La dimension non-violente du jihad est aussi forte que la dimension martiale.",
              axe5_frequence: "Pour le khalifa, le jihad (effort total) est la disposition fondamentale. Le khalifa s'investit totalement dans sa mission — pas a mi-temps, pas confortablement. L'effort total (jihad) est la marque de l'engagement authentique."
            }
          }
        }
      },
      {
        word_key: "rjw",
        position: 3,
        sense_chosen: "espoir/attente",
        analysis_axes: {
          sense_chosen: "espoir/attente",
          concept_chosen: "Espoir/Attente",
          concepts: {
            "Espoir/Attente": {
              status: "retenu",
              senses: ["esperer", "attendre avec espoir", "avoir confiance", "esperance"],
              proof_ctx: "Le verbe yarjuna est un inaccompli 3MP de la racine r-j-w. Le Lane's donne : esperer, attendre avec esperance, avoir confiance dans l'eventualite bonne. Le raja' est l'esperance confiante — une attente positive qui s'appuie sur la confiance. L'inaccompli marque l'esperance comme continue.",
              axe1_verset: "L'esperance (yarjuna) de la misericorde est la posture de ceux qui ont cru, emigre et lutte. Ce n'est pas une certitude automatique mais une esperance confiante — les trois actes (foi, emigration, lutte) fondent l'esperance mais ne la garantissent pas mecaniquement.",
              axe2_voisins: "Le verset 214 parlait de l'attente du messager (quand le secours ?) — une attente dans la detresse. Le verset 218 parle de l'esperance (yarjuna) de ceux qui ont agi — une attente confiante apres l'effort.",
              axe3_sourate: "La racine r-j-w est presente dans la sourate al-Baqarah en 2:218, 228. L'esperance est la posture spirituelle des croyants engages — ils ont accompli leur part, ils esperent la recompense divine.",
              axe4_coherence: "La racine r-j-w apparait environ 29 fois dans le Coran. Le raja' (esperance) est distinct de la certainty (yaqin) — ce n'est pas une garantie mais une esperance fondee sur la confiance en Dieu.",
              axe5_frequence: "Pour le khalifa, l'esperance est la posture saine face a l'incertitude. Le khalifa accomplit sa mission et espere la misericorde divine — sans presomption (croire la recompense garantie) ni desespoir (croire qu'elle est impossible)."
            }
          }
        }
      },
      {
        word_key: "rhm",
        position: 4,
        sense_chosen: "misericorde/tendresse",
        analysis_axes: {
          sense_chosen: "misericorde/tendresse",
          concept_chosen: "Misericorde/Tendresse",
          concepts: {
            "Misericorde/Tendresse": {
              status: "retenu",
              senses: ["misericorde", "tendresse", "compassion", "grace divine"],
              proof_ctx: "Le nom rahmata est un nom accusatif de la racine r-h-m. Le Lane's donne : misericorde, tendresse, compassion, ce qui vient du coeur dans sa dimension de soin maternel. La rahma est la misericorde dans sa dimension de tendresse profonde — l'amour protecteur et bienfaisant. La racine r-h-m est aussi la racine du mot rahim (matrice) — la misericorde a une dimension maternelle, protectrice.",
              axe1_verset: "La misericorde de Dieu (rahmata Allahi) est ce qu'esperent ceux qui ont cru, emigre et lutte. C'est la recompense escomptee — non pas une recompense mecanique mais la misericorde divine, qui est au-dela du calcul.",
              axe2_voisins: "Le verset 217 montrait le chatiment des apostats (feu eternel). Le verset 218 montre l'esperance des engages (misericorde divine). Les deux horizons (chatiment et misericorde) encadrent les choix de la vie.",
              axe3_sourate: "La racine r-h-m est parmi les plus frequentes de la sourate al-Baqarah. Al-Rahman et Al-Rahim (les deux noms divins de la Basmala) viennent de cette racine. La sourate est encadree par la misericorde divine — elle commence par Bismi Allah al-Rahman al-Rahim.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran. Al-Rahman et Al-Rahim sont les deux attributs les plus frequents de Dieu dans le Coran. La misericorde est l'attribut premier de Dieu — avant la rigueur.",
              axe5_frequence: "Pour le khalifa, la misericorde divine est l'horizon qui donne sens a l'effort. La mission du khalifa est motivee par l'esperance de la misericorde divine — pour lui-meme et pour sa communaute."
            }
          }
        }
      },
      {
        word_key: "ghfr",
        position: 5,
        sense_chosen: "pardon/couverture",
        analysis_axes: {
          sense_chosen: "pardon/couverture",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["pardonner", "couvrir les fautes", "voiler", "effacer", "pardon"],
              proof_ctx: "L'adjectif ghafurun est un adjectif nominatif de la racine gh-f-r. Le Lane's donne : pardonner, couvrir, voiler les fautes. Le ghafur est l'attribut divin qui pardonne — en couvrant et voilant les fautes. La racine gh-f-r designe fondamentalement la couverture — comme le mighfar (casque) couvre la tete, le ghafur couvre les fautes.",
              axe1_verset: "L'attribut Ghafur (couvrant-pardonnant) clot le verset en affirmant que Dieu pardonne — les fautes des croyants, des emigres, des lutteurs sont couvertes par Dieu. Le pardon complète l'esperance — on espere la misericorde parce que Dieu est Ghafur Rahim.",
              axe2_voisins: "Le verset 217 parlait des oeuvres annulees (habitat a'maluhum) pour les apostats. Le verset 218 affirme que Dieu est Ghafur — les oeuvres des croyants ne sont pas annulees mais couvertes par le pardon divin.",
              axe3_sourate: "La formule « Ghafurun Rahimun » est une des formules d'attribution divine les plus frequentes de la sourate al-Baqarah. Elle clot de nombreux versets comme affirmation finale de la misericorde divine.",
              axe4_coherence: "La racine gh-f-r apparait environ 234 fois dans le Coran. Al-Ghafur est un des noms divins les plus frequents. La couverture (ghafr) des fautes est une promesse divine centrale.",
              axe5_frequence: "Pour le khalifa, la connaissance du Ghafur est une protection contre le desespoir. Le khalifa qui a fait des erreurs sait que Dieu couvre les fautes — il peut continuer sans etre ecrase par ses propres manquements."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[218];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V218)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position + ' → ' + word.sense_chosen);
  }

  console.log('\n✅ V218 TERMINE');
}
main().catch(console.error);
