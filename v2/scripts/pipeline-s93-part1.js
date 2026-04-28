// Pipeline Sourate 93 (Ad-Duha) — Partie 1: Versets 1-4
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    console.log(`  Updated VWA ${word_key} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  Error VWA ${word_key}:`, error.message);
    else console.log(`  Created VWA ${word_key} id=${data.id}`);
  }
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysis_id);
  if (count > 0) { console.log(`  Daily SKIP (${count} exist) for id=${analysis_id}`); return; }
  const rows = french.map(fr => ({ analysis_id, sense, arabic, phon, french: fr }));
  const { error } = await sb.from('word_daily').insert(rows);
  if (error) console.log(`  Daily ERROR:`, error.message);
  else console.log(`  Daily inserted ${rows.length} phrases for id=${analysis_id}`);
}

// ================================================================
// CONTEXTE SOURATE 93 (Ad-Duha / La Clarte du Matin)
// ================================================================
// Structure : 2 serments (v1-2), 1 negation rassurante (v3), 2 promesses (v4-5),
// 3 rappels de bienfaits (v6-8), 3 injonctions (v9-11).
// Theme : Dieu rassure le prophete qu'il ne l'a pas abandonne, rappelle les bienfaits
// passes et ordonne la gratitude et la bienveillance.
// Versets voisins : S92 (Al-Layl) et S94 (Ash-Sharh).
// NOTE: step1 a des mappings incorrects pour certaines racines.
// dhw → devrait etre dhuh (ض ح و), wde pour v3 → devrait etre wdae (و د ع).
// On utilise les word_keys de step1 pour la compatibilite UI.

async function verse93_1() {
  console.log('\n=== VERSET 93:1 — وَٱلضُّحَىٰ ===');
  const verse_id = 6080;

  // ---- DHW → en realite racine dhuh (ض ح و) — id=2138 — "clarte du matin" ----
  // Forme: ad-duha — nom defini par al- au genitif (serment par wa-)
  // Concepts reels (de dhuh 2138): Clarte/Apparition, Repas/Temps, Sacrifice, Lieu/Geographie
  await upsertVWA(verse_id, 'dhw', 'clarte du matin', {
    sense_chosen: "clarte du matin",
    concept_chosen: "Clarté/Apparition",
    concepts: {
      "Clarté/Apparition": {
        status: "retenu",
        senses: ["apparaitre au soleil", "etre expose au soleil", "matinee (duha)", "plein jour"],
        proof_ctx: "Le sens retenu est « Clarte/Apparition ». Le Lane's (Edward Lane, 1863) donne pour la racine d-h-w : etre expose au soleil, la clarte du jour apres le lever du soleil, le plein jour, la matinee (duha). Le mot ad-duha est un nom defini par al- au genitif apres la particule de serment wa- : « par la clarte du matin ». Le duha designe specifiquement la periode de la matinee quand le soleil est leve et sa lumiere est claire et vive — c'est le moment de la journee ou la lumiere est la plus nette, sans l'intensite du midi. Le Lane's donne dahwa : le moment ou le soleil est haut et sa lumiere est eclatante. Les concepts « Repas/Temps » (manger le matin) et « Sacrifice » (sacrifier une bete) sont nuls car le serment porte sur un moment lumineux, pas sur un repas ni sur un sacrifice. Le concept « Lieu/Geographie » (lieu expose) est nul car le mot designe un temps, pas un lieu.",
        axe1_verset: "Le verset dit wa-d-duha — « par la clarte du matin ». Le mot ad-duha est seul dans le verset, suivi du verset 2 qui dit « par la nuit quand elle couvre ». Le champ lexical oppose lumiere (duha) et obscurite (nuit). Le serment par la clarte du matin ouvre la sourate avec une image de lumiere — la lumiere du matin est le contraire de l'abandon et de la desolation. Le mot est defini par al- : c'est LA clarte du matin, pas une matinee quelconque.",
        axe2_voisins: "Le verset 2 oppose la nuit au matin : « par la clarte du matin et par la nuit quand elle couvre ». Les deux serments forment une paire : lumiere/obscurite, jour/nuit, presence/absence. Le verset 3 dit « ton seigneur ne t'a pas abandonne » — le matin (lumiere) symbolise la presence, la nuit (obscurite) le calme, pas l'absence.",
        axe3_sourate: "La sourate 93 est une sourate de reassurance. La clarte du matin ouvre le discours par une image positive — la lumiere est le cadre dans lequel la reassurance est donnee. Le theme de la sourate est : meme quand la nuit tombe (difficulte, silence), le matin revient (bienfaits, presence).",
        axe4_coherence: "Le Coran jure par des phenomenes naturels : le soleil (91:1), la nuit (92:1), l'aube (89:1). Le duha s'inscrit dans cette serie. Le Coran mentionne ad-duha aussi dans 7:98 (« les gens du village etaient en securite de notre chatiment pendant le duha ») et dans 20:59 (« le jour du duha »). Le duha est un moment de clarte, de visibilite et de securite.",
        axe5_frequence: "La clarte du matin represente la visibilite et la transparence — le khalifa a besoin de lumiere pour voir clairement sa mission et agir avec justice. Le serment par le duha affirme que la lumiere est donnee, que la clarte n'est pas retiree."
      },
      "Repas/Temps": {
        status: "nul",
        senses: ["manger le matin", "paitre le matin"],
        proof_ctx: "Le sens de repas du matin est hors sujet. Le serment porte sur la clarte du matin comme phenomene lumineux, pas sur l'acte de manger."
      },
      "Sacrifice": {
        status: "nul",
        senses: ["sacrifier une bete (udhiya)"],
        proof_ctx: "Le sens de sacrifice est hors sujet. Le mot ad-duha dans ce verset designe le moment de la journee, pas le sacrifice d'une bete."
      },
      "Lieu/Géographie": {
        status: "nul",
        senses: ["lieu expose au soleil"],
        proof_ctx: "Le sens de lieu expose est hors sujet. Le mot ad-duha designe un temps (la matinee), pas un lieu."
      }
    }
  }, 1);

  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلضُّحَىٰ",
    full_translation: "Par la clarté du matin !",
    segments: [
      { fr: "Par la clarte du matin", pos: "nom", phon: "wad-duha", arabic: "وَٱلضُّحَىٰ", word_key: "dhw", is_particle: false, sense_retenu: "matinee (duha)", position: 1, prefix_particle: "wa" }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient un serment introduit par la particule wa- (par). Le mot ad-duha est un nom defini par al- au genitif. Le Lane's (Edward Lane, 1863) donne pour la racine d-h-w : la clarte du jour apres le lever du soleil, la matinee, le moment ou le soleil est haut et sa lumiere est eclatante. Le duha est un moment precis de la journee — entre le lever du soleil et le midi, quand la lumiere est vive et claire. C'est le premier des deux serments qui ouvrent la sourate, le second etant la nuit (v2).

§JUSTIFICATION§
**clarte du matin** — Le sens retenu est « Clarte/Apparition ». L'expression « clarte du matin » est choisie car elle rend le sens precis du duha : la lumiere vive de la matinee. L'alternative « matinee » est trop vague — elle ne porte pas l'idee de lumiere. L'alternative « aurore » est ecartee car l'aurore (fajr) precede le duha — le duha est apres le lever du soleil, pas au moment du lever. L'alternative « plein jour » est ecartee car le duha est avant le midi.

§CRITIQUE§
Hamidullah traduit : « Par le Jour montant ! ». Notre traduction donne « par la clarte du matin ». La difference est que « jour montant » est une expression litteraire et vague, tandis que « clarte du matin » est plus concret et fidele au duha qui designe specifiquement la lumiere de la matinee. Le mot arabe ne dit pas « jour » (yawm/nahar) mais « duha » — un moment precis, pas le jour entier.`
  }).eq('verse_id', verse_id);

  await insertDaily(2138, 'clarte du matin', 'ضُحَى', 'duha', [
    "La clarte du matin illumine toute la piece.",
    "Je prefere travailler pendant la matinee, quand la lumiere est belle.",
    "Les enfants jouent dans le jardin en plein soleil du matin."
  ]);

  console.log('VERSET 93:1 — TERMINE');
  console.log('  dhw/dhuh (ض ح و) → sens "Clarte/Apparition" → mot francais "clarte du matin"');
  console.log('  Traduction : "Par la clarte du matin !"');
}

async function verse93_2() {
  console.log('\n=== VERSET 93:2 — وَٱلَّيْلِ إِذَا سَجَىٰ ===');
  const verse_id = 6081;

  // ---- LYL (ل ي ل) — id=528 — "nuit" ----
  await upsertVWA(verse_id, 'lyl', 'nuit', {
    sense_chosen: "nuit",
    concept_chosen: "Nuit/Obscurité",
    concepts: {
      "Nuit/Obscurité": {
        status: "retenu",
        senses: ["nuit", "obscurite", "tenebres"],
        proof_ctx: "Le sens retenu est « Nuit/Obscurite ». Le Lane's donne pour la racine l-y-l : la nuit, la periode d'obscurite, les tenebres. Le mot al-layli est defini par al- au genitif apres la particule de serment wa- : « par la nuit ». La nuit est le contraire du duha (clarte du matin) — les deux serments forment une paire d'opposes. La nuit ici est qualifiee par « quand elle couvre » (idha saja) — elle n'est pas mentionnee seule mais avec une action specifique. La racine ne porte qu'un seul regroupement semantique.",
        axe1_verset: "Le verset dit wa-l-layli idha saja — « par la nuit quand elle couvre ». Le mot al-layl est suivi d'une condition temporelle (idha + verbe). Le champ lexical est celui de l'obscurite et du calme : nuit + couvrir. La nuit n'est pas presentee comme menacante mais comme couvrante — elle enveloppe dans le calme et le repos.",
        axe2_voisins: "Le verset 1 jure par le duha (clarte), le verset 2 par la nuit. Les deux forment une paire : lumiere/obscurite. Le verset 3 dit « ton seigneur ne t'a pas abandonne » — la nuit n'est pas un abandon mais un moment de calme qui precede le retour de la lumiere.",
        axe3_sourate: "La nuit dans la sourate 93 n'est pas negative — c'est le calme qui precede les bienfaits. Le theme de la sourate est la reassurance : meme dans la nuit (silence, attente), le seigneur est present.",
        axe4_coherence: "Le Coran jure par la nuit dans d'autres sourates : « par la nuit quand elle enveloppe » (92:1), « par la nuit quand elle s'ecoule » (89:4). La nuit est un serment coranique recurrent — elle represente le calme, le repos et la reflexion, pas la menace.",
        axe5_frequence: "La nuit est le moment de repos et de reflexion du khalifa — sans la nuit, il n'y a pas de renouvellement. La mission de justice a besoin de pauses et de calme pour se regenerer."
      }
    }
  }, 1);

  // ---- SJW (س ج و) — id=2619 — "couvrir" ----
  // Forme: saja — verbe forme I accompli, 3eme pers. singulier (elle a couvert)
  await upsertVWA(verse_id, 'sjw', 'couvrir', {
    sense_chosen: "couvrir",
    concept_chosen: "Couverture/Calme",
    concepts: {
      "Couverture/Calme": {
        status: "retenu",
        senses: ["couvrir", "etre calme", "etre immobile", "etendre son obscurite"],
        proof_ctx: "Le sens retenu est « Couverture/Calme ». Le Lane's donne pour la racine s-j-w : couvrir, etre calme et immobile, la nuit a etendu son obscurite et s'est stabilisee. Le verbe saja est a la forme I accompli, 3eme personne du singulier feminin (la nuit est feminine en arabe) : « elle a couvert » ou « elle s'est calmee ». Le sens premier est la couverture — la nuit couvre la terre de son obscurite. Mais le Lane's ajoute l'idee de calme : saja al-laylu = la nuit s'est immobilisee dans son obscurite, elle est devenue calme et stable. Les deux dimensions (couverture et calme) sont presentes. Le concept « Obscurite/Nuit » (devenir sombre, nuit profonde) est probable mais moins precis car le verbe saja insiste sur l'ACTION de couvrir et de se calmer, pas sur l'ETAT d'obscurite. La distinction est entre le processus (couvrir → retenu) et le resultat (etre sombre → probable).",
        axe1_verset: "Le verset dit al-layli idha saja — « la nuit quand elle couvre ». Le verbe saja qualifie la nuit — il ne dit pas « quand elle est sombre » mais « quand elle couvre ». Le champ lexical est celui de l'enveloppement : nuit + couvrir. La couverture de la nuit est un geste protecteur — couvrir quelqu'un c'est le proteger, l'envelopper. Le serment par la nuit « couvrante » presente la nuit comme un voile protecteur, pas comme une menace.",
        axe2_voisins: "Le verset 1 jure par la lumiere (duha), le verset 2 par la nuit couvrante. Les deux moments sont presentes comme des bienfaits — la lumiere eclaire, la nuit couvre et calme. Le verset 3 rassure : Dieu n'a pas abandonne. La nuit couvrante n'est pas un abandon mais un moment de protection.",
        axe3_sourate: "La couverture de la nuit s'inscrit dans le theme de la reassurance. La sourate dit : meme quand la nuit couvre (quand la revelation semble s'arreter, quand le silence s'installe), ce n'est pas un abandon — c'est un calme qui precede un retour.",
        axe4_coherence: "Le Coran utilise des verbes differents pour qualifier la nuit : ghashiya (envelopper, 92:1), saja (couvrir/calmer, 93:2), as'asa (se retirer, 81:17). Chaque verbe donne une nuance differente — saja insiste sur le calme et la stabilite de l'obscurite, pas sur son intensite.",
        axe5_frequence: "La couverture calme de la nuit est le moment de renouvellement du khalifa. Le calme nocturne permet la reflexion et la preparation de l'action du lendemain."
      },
      "Obscurité/Nuit": {
        status: "probable",
        senses: ["devenir sombre", "nuit profonde"],
        proof_ctx: "Le sens de devenir sombre est probable. Le Lane's donne aussi saja dans le sens de l'obscurite qui s'installe. La distinction avec le sens retenu est la suivante : la couverture (Couverture/Calme) est un PROCESSUS actif — la nuit couvre, elle fait quelque chose. L'obscurite (Obscurite/Nuit) est un RESULTAT — la nuit est sombre. Le verbe saja dans ce contexte est conjugue a l'accompli (action achevee) apres idha (quand) — il decrit l'action de la nuit, pas son etat. Le processus (couvrir) est donc plus precis que le resultat (etre sombre).",
        axe1_verset: "Le verbe saja decrit l'action de la nuit — si le sens est « devenir sombre », le verset dit « quand elle est devenue sombre ». Le champ lexical serait alors nuit + obscurite, une redondance. Le sens de « couvrir » ajoute une dimension supplementaire (le calme, la protection) sans redondance.",
        axe2_voisins: "Le sens de devenir sombre n'ajoute rien au contraste lumiere/obscurite deja present entre les versets 1 et 2. Le sens de couvrir ajoute la dimension de protection et de calme.",
        axe3_sourate: "Le theme de la sourate est la reassurance — « devenir sombre » est neutre voire negatif, « couvrir » est protecteur.",
        axe4_coherence: "Le Coran utilise d'autres mots pour l'obscurite de la nuit (dhalama, ghashiya). Le choix de saja plutot que ces mots suggere que le texte vise le calme et la couverture, pas juste l'obscurite.",
        axe5_frequence: "L'obscurite seule n'apporte rien a la mission du khalifa. La couverture calme, en revanche, est un bienfait de repos."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلَّيْلِ إِذَا سَجَىٰ",
    full_translation: "et par la nuit quand elle couvre !",
    segments: [
      { fr: "et par la nuit", pos: "nom", phon: "wal-layli", arabic: "وَٱلَّيْلِ", word_key: "lyl", is_particle: false, sense_retenu: "nuit", position: 1, prefix_particle: "wa" },
      { fr: "quand", pos: "particule", phon: "idha", arabic: "إِذَا", is_particle: true, position: 0 },
      { fr: "elle couvre", pos: "verbe", phon: "saja", arabic: "سَجَىٰ", word_key: "sjw", is_particle: false, sense_retenu: "couvrir", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est le deuxieme serment : wa-l-layli idha saja — « par la nuit quand elle couvre ». La particule wa- introduit le serment. Le nom al-layli est defini par al- au genitif. Le Lane's (Edward Lane, 1863) donne pour layl : la nuit, la periode d'obscurite. La particule idha (quand) introduit une condition temporelle suivie du verbe accompli saja. Le verbe saja est la forme I accompli de la racine s-j-w, 3eme personne du singulier feminin (la nuit est feminine en arabe). Le Lane's donne pour saja : couvrir, etre calme et immobile, la nuit a etendu son obscurite et s'est stabilisee. Le verbe combine l'idee de couverture (envelopper de son obscurite) et de calme (s'immobiliser, devenir stable).

§JUSTIFICATION§
**nuit** — Le sens retenu est « Nuit/Obscurite ». Le mot « nuit » est le seul possible — aucune alternative.

**couvrir** — Le sens retenu est « Couverture/Calme ». Le mot « couvrir » est choisi car il capture l'action de la nuit selon le Lane's : la nuit etend son voile sur la terre. L'alternative « s'assombrir » est ecartee car elle est redondante avec « nuit » (la nuit est deja sombre). L'alternative « se calmer » est ecartee car elle ne rend pas la dimension de couverture physique. L'alternative « envelopper » est acceptable mais « couvrir » est plus courant en francais.

§CRITIQUE§
Hamidullah traduit : « et par la nuit quand elle couvre tout ! ». Notre traduction est quasiment identique sans le « tout » ajoute — le texte arabe ne dit pas « tout » (kull), il dit simplement saja (elle a couvert). L'ajout de « tout » est un ajout invisible qui amplifie le sens.`
  }).eq('verse_id', verse_id);

  await insertDaily(2619, 'couvrir', 'سَجَى', 'saja', [
    "La nuit a couvert la ville de son calme.",
    "Le silence a couvert la maison apres le depart des enfants.",
    "Une paix profonde couvrait la campagne."
  ]);

  console.log('VERSET 93:2 — TERMINE');
  console.log('  lyl (ل ي ل) → sens "Nuit/Obscurite" → mot francais "nuit"');
  console.log('  sjw (س ج و) → sens "Couverture/Calme" → mot francais "couvrir"');
  console.log('  Traduction : "et par la nuit quand elle couvre"');
}

async function verse93_3() {
  console.log('\n=== VERSET 93:3 — مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ ===');
  const verse_id = 6082;

  // ---- WDE → en realite racine wdae (و د ع) id=1799 — "abandonner" ----
  // Forme: wadda'aka — verbe forme II accompli, 3eme pers. sing. + suffixe -ka
  // Concept reel (de wdae 1799): Abandon/Depot
  await upsertVWA(verse_id, 'wde', 'abandonner', {
    sense_chosen: "abandonner",
    concept_chosen: "Abandon/Dépôt",
    concepts: {
      "Abandon/Dépôt": {
        status: "retenu",
        senses: ["laisser", "abandonner", "deposer"],
        proof_ctx: "Le sens retenu est « Abandon/Depot ». Le Lane's donne pour la racine w-d-' : laisser, abandonner, deposer, dire adieu, cesser. Le verbe wadda'aka est a la forme II accompli (intensif/frequentatif) avec le suffixe -ka (te) : « il t'a abandonne ». La forme II (fa''ala) ajoute l'intensite — wadda'a est plus fort que wada'a : abandonner completement, delaisser. Le verbe est precede de la particule de negation ma : « il ne t'a pas abandonne ». Le sens de « abandonner » est retenu car le contexte est celui d'une absence (le silence de la revelation) interpretee comme un abandon, que le texte nie.",
        axe1_verset: "Le verset dit ma wadda'aka rabbuka wa-ma qala — « ton seigneur ne t'a pas abandonne et n'a pas deteste ». Le verbe wadda'a est en parallele avec qala (detester) : les deux sont nies. Le champ lexical est celui de la negation de l'abandon : ne pas abandonner + ne pas detester. Les deux actions niees couvrent l'absence (abandonner) et le rejet (detester) — le seigneur n'a fait ni l'un ni l'autre.",
        axe2_voisins: "Les versets 1-2 juraient par le matin et la nuit. Le verset 3 donne le contenu du serment : ton seigneur ne t'a pas abandonne. Le serment par le matin qui revient apres la nuit illustre la promesse : comme le matin suit la nuit, la presence suit le silence. Le verset 4 ajoute une promesse positive : l'au-dela est meilleur que l'ici-bas.",
        axe3_sourate: "La negation de l'abandon est le coeur de la sourate. Tout le reste (bienfaits, injonctions) decoule de cette affirmation : tu n'es pas abandonne. La sourate est une reponse a l'angoisse du silence divin.",
        axe4_coherence: "Le Coran utilise wadda'a rarement — c'est un mot fort. Le Lane's donne wadda'a al-shay'a : il a abandonne completement la chose, il l'a laissee. La negation ma wadda'a est donc la negation d'un abandon total — c'est une reassurance maximale.",
        axe5_frequence: "Le khalifa peut connaitre des moments de silence et d'incertitude dans sa mission. Le verset affirme que ces moments ne sont pas des abandons — la mission continue meme quand la guidance semble absente."
      }
    }
  }, 1);

  // ---- RBB (ر ب ب) — id=253 — "seigneur" ----
  await upsertVWA(verse_id, 'rbb', 'seigneur', {
    sense_chosen: "seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["celui qui possede", "maitre", "gouverner", "proprietaire", "celui qui eleve", "celui qui entretient", "seigneur"],
        proof_ctx: "Le sens retenu est « Seigneurie/Autorite bienveillante ». Le mot rabbuka est au nominatif (sujet de wadda'a) avec le suffixe possessif -ka (ton) : « ton seigneur ». Le rabb est l'autorite bienveillante qui prend soin — l'utilisation de rabbuka (ton seigneur, personnel) plutot que Allah souligne la relation intime de soin et de bienveillance. Le seigneur qui ne t'a pas abandonne est celui qui prend soin de toi personnellement.",
        axe1_verset: "Le mot rabbuka est le sujet des deux verbes nies : ne t'a pas abandonne, n'a pas deteste. Le champ lexical est celui de la relation personnelle : ton seigneur (pas « Dieu » impersonnel). Le suffixe -ka cree une proximite intime.",
        axe2_voisins: "Le mot rabb apparait aussi au verset 5 (rabbuka yu'tika = ton seigneur te donnera) et au verset 11 (bi-ni'mati rabbika = le bienfait de ton seigneur). La triple mention de rabb dans la sourate souligne la relation personnelle entre le seigneur et le destinataire.",
        axe3_sourate: "Le seigneur est le personnage central de la sourate — c'est lui qui n'a pas abandonne (v3), qui donnera (v5), qui a accueilli l'orphelin (v6), guide l'egare (v7), enrichi le pauvre (v8). Tous les bienfaits viennent de lui.",
        axe4_coherence: "Le Coran utilise rabbuka (ton seigneur) dans de nombreuses sourates pour marquer la relation personnelle. C'est different de rabbuna (notre seigneur) qui est communautaire ou de rabb al-'alamina (seigneur des mondes) qui est universel.",
        axe5_frequence: "Le seigneur personnel (rabbuka) rappelle au khalifa que sa mission est soutenue par celui qui le connait personnellement et prend soin de lui."
      }
    }
  }, 2);

  // ---- QLY (ق ل ي) — id=1872 — "detester" ----
  // Forme: qala — verbe forme I accompli, 3eme pers. sing. (il a deteste)
  await upsertVWA(verse_id, 'qly', 'detester', {
    sense_chosen: "detester",
    concept_chosen: "Aversion/Rejet",
    concepts: {
      "Aversion/Rejet": {
        status: "retenu",
        senses: ["detester", "rejeter", "avoir de l'aversion"],
        proof_ctx: "Le sens retenu est « Aversion/Rejet ». Le Lane's donne pour la racine q-l-y dans le sens d'aversion : detester, hair, rejeter avec degout, avoir de l'aversion pour quelqu'un. Le verbe qala est a la forme I accompli, 3eme personne du singulier, precede de ma (negation) : « il n'a pas deteste ». Le sujet est rabbuka (ton seigneur) du debut du verset. Le sens de « detester » est retenu car le verbe est en parallele avec wadda'a (abandonner) — les deux forment une paire : ni abandon, ni detestation. Le concept « Rarete/Quantite infime » (peu, etre rare) est nul car le contexte est emotionnel (l'abandon et le rejet), pas quantitatif. Le concept « Cuisson/Transformation » (frire, griller) est nul car le verset ne parle pas de cuisine.",
        axe1_verset: "Le verset dit wa-ma qala — « et il n'a pas deteste ». Le verbe qala est le second verbe nie du verset, en parallele avec wadda'a. Le champ lexical est celui du rejet : abandonner + detester. Les deux actions niees couvrent deux dimensions du rejet : l'absence physique (abandonner) et le rejet emotionnel (detester). La negation des deux affirme une presence bienveillante complete.",
        axe2_voisins: "Le verset 3 nie deux rejets (abandon et detestation). Les versets 4-5 affirment des promesses positives (l'au-dela est meilleur, le seigneur donnera). La progression est : d'abord nier le negatif (v3), puis affirmer le positif (v4-5).",
        axe3_sourate: "La negation de la detestation complete la negation de l'abandon. La sourate rassure sur deux plans : le seigneur est present (pas d'abandon) et le seigneur est bienveillant (pas de detestation). Les deux conditions sont necessaires pour la reassurance complete.",
        axe4_coherence: "Le Coran utilise qala dans d'autres passages dans le sens d'aversion : le verbe est rare dans le Coran, ce qui souligne la gravite de l'accusation que le texte nie. Le fait que Dieu nie explicitement avoir deteste montre que cette crainte etait reelle et meritait une reponse directe.",
        axe5_frequence: "Le khalifa peut craindre d'etre rejete par son seigneur — le verset nie cette crainte. La mission de justice est exercee sous le regard bienveillant, pas sous la menace du rejet."
      },
      "Rareté/Quantité infime": {
        status: "nul",
        senses: ["peu", "etre rare", "diminuer"],
        proof_ctx: "Le sens de rarete est hors sujet. Le verset ne parle pas de quantite mais d'emotion — le parallele avec wadda'a (abandonner) confirme que qala est un acte emotionnel (detester), pas quantitatif (etre peu)."
      },
      "Cuisson/Transformation": {
        status: "nul",
        senses: ["frire", "griller"],
        proof_ctx: "Le sens de cuisson est hors sujet dans un verset qui parle de la relation entre le seigneur et le destinataire."
      }
    }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
    full_translation: "Ton Seigneur ne t'a ni abandonné, ni détesté.",
    segments: [
      { fr: "N'a pas", pos: "particule", phon: "ma", arabic: "مَا", is_particle: true, position: 0 },
      { fr: "abandonne", pos: "verbe", phon: "wadda'aka", arabic: "وَدَّعَكَ", word_key: "wde", is_particle: false, sense_retenu: "abandonner", position: 1 },
      { fr: "ton seigneur", pos: "nom", phon: "rabbuka", arabic: "رَبُّكَ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 2 },
      { fr: "et n'a pas", pos: "particule", phon: "wa-ma", arabic: "وَمَا", is_particle: true, position: 0 },
      { fr: "deteste", pos: "verbe", phon: "qala", arabic: "قَلَىٰ", word_key: "qly", is_particle: false, sense_retenu: "detester", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient deux phrases negatives en parallele : ma wadda'aka rabbuka wa-ma qala. La particule ma est la negation verbale : « ne ... pas ». Le verbe wadda'aka est la forme II (schema fa''ala, intensif) accompli de la racine w-d-' (laisser, abandonner), 3eme personne du singulier, avec le suffixe pronominal -ka (te). Le Lane's (Edward Lane, 1863) donne pour wadda'a (forme II) : abandonner completement, delaisser, dire adieu. La forme II intensifie — c'est un abandon total qui est nie. Le sujet est rabbuka (ton seigneur, nominatif + suffixe -ka). La seconde phrase wa-ma qala est la conjonction wa- (et) + negation ma + verbe qala (forme I accompli de q-l-y, 3eme personne). Le Lane's donne pour qala : detester, avoir de l'aversion, rejeter avec degout. Le sujet est le meme (ton seigneur). Les deux verbes sont en parallele : ni abandon, ni detestation.

§JUSTIFICATION§
**abandonner** — Le sens retenu est « Abandon/Depot ». Le mot « abandonner » est choisi car il rend l'intensite de la forme II wadda'a — c'est un delaissement total. L'alternative « laisser » est trop faible — on laisse ses cles, on abandonne quelqu'un. L'alternative « quitter » est ecartee car elle implique un deplacement physique.

**seigneur** — Le sens retenu est « Seigneurie/Autorite bienveillante ». Le mot « seigneur » est la traduction standard de rabb. Le suffixe -ka (ton) personalise la relation.

**detester** — Le sens retenu est « Aversion/Rejet ». Le mot « detester » est choisi car il rend l'aversion profonde que le Lane's decrit. L'alternative « rejeter » est ecartee car il est trop proche de « abandonner » (deja utilise dans le meme verset). L'alternative « hair » est trop violent pour du francais courant.

§CRITIQUE§
Hamidullah traduit : « Ton Seigneur ne t'a ni abandonne, ni deteste ». Notre traduction est identique. Aucun mot ne fait basculer le sens du verset.`
  }).eq('verse_id', verse_id);

  await insertDaily(1799, 'abandonner', 'وَدَّعَ', "wadda'a", [
    "Il a abandonne son ancien travail pour un nouveau depart.",
    "Elle n'a jamais abandonne ses amis dans la difficulte.",
    "Ne m'abandonne pas quand j'ai besoin de toi."
  ]);
  await insertDaily(1872, 'detester', 'قَلَى', 'qala', [
    "Je deteste quand on me ment.",
    "Elle deteste le mensonge plus que tout.",
    "Il ne faut pas detester les gens sans raison."
  ]);

  console.log('VERSET 93:3 — TERMINE');
  console.log('  wde/wdae (و د ع) → sens "Abandon/Depot" → mot francais "abandonner"');
  console.log('  rbb (ر ب ب) → sens "Seigneurie" → mot francais "seigneur"');
  console.log('  qly (ق ل ي) → sens "Aversion/Rejet" → mot francais "detester"');
  console.log('  Traduction : "Ton seigneur ne t\'a pas abandonne et n\'a pas deteste"');
}

async function verse93_4() {
  console.log('\n=== VERSET 93:4 — وَلَلْـَٔاخِرَةُ خَيْرٌ لَّكَ مِنَ ٱلْأُولَىٰ ===');
  const verse_id = 6083;

  // ---- AXR (أ خ ر) — id=292 — "l'au-dela" ----
  // Forme: al-akhiratu — nom defini, nominatif (sujet)
  await upsertVWA(verse_id, 'axr', "l'au-dela", {
    sense_chosen: "l'au-dela",
    concept_chosen: "Postériorité/Retard",
    concepts: {
      "Postériorité/Retard": {
        status: "retenu",
        senses: ["retarder", "reporter", "reculer", "apres", "dernier", "l'au-dela", "fin"],
        proof_ctx: "Le sens retenu est « Posteriorite/Retard ». Le Lane's donne pour la racine hamza-kh-r : etre posterieur, venir apres, retarder, la derniere chose, l'au-dela (al-akhira). Le mot al-akhiratu est le nom feminin defini au nominatif : « la derniere » ou « l'au-dela ». Dans le contexte du verset, al-akhira est oppose a al-ula (la premiere, l'ici-bas). La paire akhira/ula designe la vie future vs la vie presente. Le sens de « l'au-dela » est retenu car c'est le sens coranique standard de al-akhira quand elle est opposee a al-ula.",
        axe1_verset: "Le verset dit wa-la-l-akhiratu khayrun laka mina l-ula — « et certes l'au-dela est meilleur pour toi que l'ici-bas ». Le mot al-akhira est le sujet de la phrase nominale, oppose a al-ula (complement). Le champ lexical est celui de la comparaison temporelle : l'au-dela (futur) + meilleur + l'ici-bas (present). La promesse est que ce qui vient apres est meilleur que ce qui est maintenant.",
        axe2_voisins: "Le verset 3 niait l'abandon, le verset 4 affirme une promesse positive : l'avenir est meilleur. Le verset 5 precise cette promesse : le seigneur donnera et tu seras satisfait. La progression est : pas d'abandon (v3) → l'avenir est meilleur (v4) → tu recevras (v5).",
        axe3_sourate: "La promesse de l'au-dela meilleur est le premier des arguments positifs de la sourate. Apres la negation de l'abandon, le texte construit la confiance en affirmant que le futur sera meilleur.",
        axe4_coherence: "Le Coran oppose systematiquement al-akhira et ad-dunya : « la vie d'ici-bas n'est que jouissance ephemere, et l'au-dela est meilleure et plus durable » (87:16-17). Cette opposition est un theme coranique fondamental.",
        axe5_frequence: "Le khalifa agit dans le present mais sa mission est orientee vers l'avenir. La promesse que l'au-dela est meilleur donne un horizon a l'action — l'effort present n'est pas vain car le resultat futur est garanti."
      }
    }
  }, 1);

  // ---- XYR → en realite racine khyr (خ ي ر) id=727 — "meilleur" ----
  // Forme: khayrun — nom indefini au nominatif (predicat)
  await upsertVWA(verse_id, 'xyr', 'meilleur', {
    sense_chosen: "meilleur",
    concept_chosen: "Bien/Excellence",
    concepts: {
      "Bien/Excellence": {
        status: "retenu",
        senses: ["bien", "meilleur", "bonte"],
        proof_ctx: "Le sens retenu est « Bien/Excellence ». Le Lane's donne pour la racine kh-y-r : bien, bonte, excellence, meilleur (comparatif). Le mot khayrun est un nom au nominatif indefini — c'est le predicat de la phrase nominale : « [est] meilleur ». Khayrun est la forme elative (comparatif/superlatif) de khayr : « meilleur que ». Suivi de la preposition min (que) + al-ula (l'ici-bas), il forme la comparaison « meilleur que l'ici-bas ». La racine ne porte qu'un seul regroupement semantique dans la base.",
        axe1_verset: "Le verset dit al-akhiratu khayrun laka mina l-ula — « l'au-dela est meilleur pour toi que l'ici-bas ». Le mot khayr est au centre de la comparaison — c'est l'adjectif qui qualifie l'au-dela par rapport a l'ici-bas. Le champ lexical est celui de la superiorite : au-dela + meilleur + ici-bas. La comparaison est simple et directe.",
        axe2_voisins: "Le verset 3 niait le negatif, le verset 4 affirme le positif comparatif. Le verset 5 concretise : le seigneur donnera. La progression est de plus en plus concrete : pas d'abandon → meilleur avenir → tu recevras.",
        axe3_sourate: "Le mot « meilleur » est la cle de la promesse. La sourate ne promet pas que l'avenir sera bon — elle promet qu'il sera MEILLEUR que le present. C'est une comparaison, pas un absolu.",
        axe4_coherence: "Le Coran utilise khayr dans de nombreux contextes comparatifs. Le mot est l'un des plus frequents du Coran. La formule X khayrun min Y (X est meilleur que Y) est un schema coranique recurrent pour orienter les choix.",
        axe5_frequence: "Le khalifa qui sait que l'avenir est meilleur que le present agit avec confiance et patience. La comparaison donne une direction — l'effort present est justifie par la superiorite du resultat futur."
      }
    }
  }, 2);

  // ---- AWL (أ و ل) — id=337 — "premiere/ici-bas" ----
  // Forme: al-ula — nom feminin defini au genitif apres min (que)
  await upsertVWA(verse_id, 'awl', "l'ici-bas", {
    sense_chosen: "l'ici-bas",
    concept_chosen: "Retour/Origine",
    concepts: {
      "Retour/Origine": {
        status: "retenu",
        senses: ["aboutissement", "interpreter", "retourner", "faire retourner"],
        proof_ctx: "Le sens retenu est « Retour/Origine ». Le Lane's donne pour la racine hamza-w-l : premier, le debut, revenir, aboutir. Le mot al-ula est le feminin de al-awwal (le premier) defini au genitif apres min : « que la premiere ». Dans le contexte coranique, al-ula oppose a al-akhira designe « la premiere [vie] » = l'ici-bas, la vie presente. Le sens de « l'ici-bas » est retenu par convention coranique — al-ula = la vie premiere = l'ici-bas. Les concepts « Instrument/Outil » et « Gouvernance » sont nuls car le contexte est temporel (premiere vie vs derniere).",
        axe1_verset: "Le verset dit mina l-ula — « que la premiere ». Le mot al-ula est le terme de comparaison — l'ici-bas est ce a quoi l'au-dela est compare. Le champ lexical oppose la premiere (ula) et la derniere (akhira). La premiere vie est le present, la derniere est l'avenir.",
        axe2_voisins: "L'opposition ula/akhira du verset 4 est le fondement des promesses qui suivent. Le verset 5 concretise en disant que le seigneur donnera — cette donation est meilleure que ce que la vie presente offre.",
        axe3_sourate: "La vie premiere (ici-bas) est le lieu des epreuves rappelees aux versets 6-8 (orphelinat, egarement, pauvrete). L'au-dela est presente comme meilleure que ces epreuves.",
        axe4_coherence: "Le Coran oppose systematiquement la vie premiere (dunya/ula) et la derniere (akhira). Le mot ula (premiere) est moins frequent que dunya mais porte le meme sens dans ce contexte.",
        axe5_frequence: "Le khalifa vit dans la premiere vie mais travaille pour la derniere. L'ici-bas est le terrain de la mission, l'au-dela est la recompense."
      }
    }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "وَلَلْـَٔاخِرَةُ خَيْرٌ لَّكَ مِنَ ٱلْأُولَىٰ",
    full_translation: "Et certes, la vie dernière est meilleure pour toi que la vie première.",
    segments: [
      { fr: "Et certes", pos: "particule", phon: "wa-la", arabic: "وَلَلْ", is_particle: true, position: 0 },
      { fr: "l'au-dela", pos: "nom", phon: "al-akhiratu", arabic: "ءَاخِرَةُ", word_key: "axr", is_particle: false, sense_retenu: "l'au-dela", position: 1 },
      { fr: "est meilleur", pos: "nom", phon: "khayrun", arabic: "خَيْرٌ", word_key: "xyr", is_particle: false, sense_retenu: "meilleur", position: 2 },
      { fr: "pour toi", pos: "particule", phon: "laka", arabic: "لَّكَ", is_particle: true, position: 0 },
      { fr: "que", pos: "particule", phon: "mina", arabic: "مِنَ", is_particle: true, position: 0 },
      { fr: "l'ici-bas", pos: "nom", phon: "al-ula", arabic: "ٱلْأُولَىٰ", word_key: "awl", is_particle: false, sense_retenu: "retourner", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une phrase nominale affirmative : wa-la-l-akhiratu khayrun laka mina l-ula. La conjonction wa- (et) + la particule d'insistance la- (certes) ouvrent l'affirmation. Le mot al-akhiratu est un nom feminin defini (la derniere [vie]) au nominatif — c'est le sujet. Le Lane's (Edward Lane, 1863) donne pour akhir : dernier, posterieur, l'au-dela. Le mot khayrun est le predicat au nominatif indefini — c'est la forme elative (comparatif) de khayr : « meilleur ». Le Lane's donne pour khayr : bien, bonte, meilleur. La preposition laka (pour toi) indique le beneficiaire. La preposition mina (que, de) introduit le terme de comparaison : al-ula (la premiere [vie], l'ici-bas). Le Lane's donne pour awwal : premier, le debut. Al-ula est le feminin de awwal — « la premiere ». La construction est une comparaison simple : l'au-dela > l'ici-bas, pour toi.

§JUSTIFICATION§
**l'au-dela** — Le sens retenu est « Posteriorite/Retard ». L'expression « l'au-dela » est choisie car c'est la traduction conventionnelle de al-akhira en francais courant. L'alternative « la vie derniere » est plus litterale mais moins naturelle. L'alternative « l'apres » est trop vague.

**meilleur** — Le sens retenu est « Bien/Excellence ». Le mot « meilleur » est le seul possible pour rendre la forme elative khayrun min. Aucune alternative.

**l'ici-bas** — Le sens retenu est « Retour/Origine ». L'expression « l'ici-bas » est choisie car c'est le pendant conventionnel de « l'au-dela » en francais. L'alternative « la premiere [vie] » est plus litterale mais moins naturelle.

§CRITIQUE§
Hamidullah traduit : « La vie derniere t'est, certes, meilleure que la vie presente ». Notre traduction donne « l'au-dela est meilleur pour toi que l'ici-bas ». Les deux sont equivalentes. Le mot arabe al-ula dit « la premiere », pas « la presente » — la traduction de Hamidullah interprete « premiere » comme « presente », ce qui est correct en contexte mais s'eloigne du texte litteral.`
  }).eq('verse_id', verse_id);

  await insertDaily(727, 'meilleur', 'خَيْر', 'khayr', [
    "C'est le meilleur choix que tu pouvais faire.",
    "Elle cherche toujours le meilleur pour sa famille.",
    "Le meilleur est a venir, ne t'inquiete pas."
  ]);
  await insertDaily(337, 'premier', 'أُولَى', 'ula', [
    "C'est la premiere fois que je viens ici.",
    "Il a ete le premier a arriver ce matin.",
    "La premiere chose a faire, c'est de rester calme."
  ]);

  console.log('VERSET 93:4 — TERMINE');
  console.log('  axr (أ خ ر) → sens "Posteriorite/Retard" → mot francais "l\'au-dela"');
  console.log('  xyr/khyr (خ ي ر) → sens "Bien/Excellence" → mot francais "meilleur"');
  console.log('  awl (أ و ل) → sens "Retour/Origine" → mot francais "l\'ici-bas"');
  console.log('  Traduction : "Et certes l\'au-dela est meilleur pour toi que l\'ici-bas"');
}

async function main() {
  await verse93_1();
  await verse93_2();
  await verse93_3();
  await verse93_4();
  console.log('\n=== PARTIE 1 TERMINEE (versets 1-4) ===');
}

main().catch(console.error);
