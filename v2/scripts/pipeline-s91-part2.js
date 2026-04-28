// Pipeline Sourate 91 (Ash-Shams / Le Soleil) — Partie 2: Versets 6-10
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
// CONTEXTE SOURATE 91 (Ash-Shams / Le Soleil) — versets 6-10
// ================================================================
// Structure: 7 serments cosmiques (v1-7), inspiration (v8), constat (v9-10), recit de Thamud (v11-15)
// v5-7 = serments par les creations (ciel, terre, ame)
// v8 = l'inspiration du bien et du mal dans l'ame
// v9-10 = constat: purifier = reussir, corrompre = echouer
// Theme: L'ame humaine recoit le potentiel du bien et du mal

async function verse91_6() {
  console.log('\n=== VERSET 91:6 — وَٱلْأَرْضِ وَمَا طَحَىٰهَا ===');
  const verse_id = 6049;

  // ---- ARD (أرض) — id=324 — "terre" ----
  // Forme: al-ardi — nom defini genitif (serment par la terre)
  await upsertVWA(verse_id, 'ard', 'terre', {
    sense_chosen: "terre",
    concept_chosen: "Terre/Sol",
    concepts: {
      "Terre/Sol": {
        status: "retenu",
        senses: ["terre", "sol", "terrain", "pays", "monde d'en bas"],
        proof_ctx: "Le sens retenu est « Terre/Sol ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine hamza-r-d donne : la terre, le sol, le terrain, le pays, le monde d'en bas par opposition au ciel. Le mot al-ard est un nom defini au genitif, introduit par le waw du serment : « par la terre ». La terre dans cette racine designe la realite physique sur laquelle marchent les etres vivants — c'est le support materiel de la vie. Le serment par la terre fait suite au serment par le ciel (verset 5), formant une paire complementaire : le haut et le bas, le couvrant et le porte. Le Lane's precise que al-ard est l'oppose de as-sama (le ciel) et que ces deux mots forment une paire constante dans le Coran. Ce sens est le seul coherent dans un contexte de serment cosmique.",
        axe1_verset: "Le verset dit wal-ardi wa-ma tahaha — « par la terre et ce qui l'a etendue ». Le mot al-ard est l'objet du serment, suivi d'une reference a celui qui l'a etendue. Le champ lexical est celui de la creation physique : terre + extension. Le serment porte sur la terre en tant que realite physique, pas en tant que metaphore. Le complement wa-ma tahaha (et ce qui l'a etendue) renforce le sens physique — l'extension est une operation spatiale qui s'applique a un objet materiel. Le nom defini al-ard designe la terre unique et connue de tous, pas un sol quelconque.",
        axe2_voisins: "Le verset 5 jure par le ciel et ce qui l'a bati. Le verset 6 jure par la terre et ce qui l'a etendue. Le parallelisme est parfait : ciel/terre, bati/etendue. Les versets 1 a 7 forment une serie de serments par paires naturelles : soleil/lune (v1-2), jour/nuit (v3-4), ciel/terre (v5-6), puis l'ame seule (v7). La terre occupe la sixieme position dans cette serie ascendante qui culmine avec l'ame humaine. Chaque paire represente un contraste fondamental de la creation.",
        axe3_sourate: "La sourate 91 ouvre par sept serments cosmiques qui servent de preambule au message central (v9-10 : purifier l'ame = reussir, la corrompre = echouer). La terre fait partie de ces serments — elle est un temoin de la creation divine au meme titre que le soleil, la lune, le jour et la nuit. Le serment par la terre rappelle que la creation physique est ordonnee et structuree, ce qui prefigure l'idee que l'ame humaine est elle aussi structuree avec un potentiel de bien et de mal.",
        axe4_coherence: "Le Coran utilise al-ard dans des centaines de passages. La sourate 71:19 dit : « Dieu a fait pour vous la terre comme un tapis etendu ». La sourate 20:53 dit : « Celui qui a fait pour vous la terre comme un berceau ». La racine hamza-r-d dans le Coran designe systematiquement la terre physique dans sa materialite et sa fonction de support de vie. Le lien entre la terre et son extension (tahaha) est un theme recurrent qui souligne le caractere habitable de la terre.",
        axe5_frequence: "La terre est le lieu d'exercice de la mission du khalifa. C'est sur la terre que l'etre humain est place pour etablir la justice et empecher la corruption. Le serment par la terre rappelle que cette mission a un cadre physique concret — elle ne se deroule pas dans l'abstrait mais sur un sol reel, dans un monde materiel. La terre etendue est le terrain de jeu du khalifa, le lieu ou ses choix (purifier ou corrompre l'ame) se concretisent en actes."
      },
      "Sens isole/Rhume": {
        status: "nul",
        senses: ["rhume", "refroidissement"],
        proof_ctx: "Le Lane's mentionne un sens secondaire de ard lie au rhume ou au refroidissement. Ce sens physique obscur n'a aucun rapport avec un serment cosmique portant sur la creation. Le contexte de la sourate exclut totalement ce sens."
      },
      "Sens isole/Tremblement": {
        status: "nul",
        senses: ["trembler", "tremblement de terre"],
        proof_ctx: "Le Lane's donne des derives de la racine hamza-r-d lies au tremblement. Ce sens est possible pour certains derives mais le mot al-ard au genitif defini dans un serment designe la terre en tant qu'objet physique, pas un evenement sismique. Le contexte ne parle pas de tremblement."
      }
    }
  }, 1);

  // ---- THW (طحو) — id=2622 — "etendre" ----
  // Forme: tahaha — verbe accompli forme I + suffixe -ha (il/ce qui l'a etendue)
  await upsertVWA(verse_id, 'Thw', 'etendre', {
    sense_chosen: "etendre",
    concept_chosen: "Extension/Etalement",
    concepts: {
      "Extension/Etalement": {
        status: "retenu",
        senses: ["etendre", "etaler", "aplanir", "deployer"],
        proof_ctx: "Le sens retenu est « Extension/Etalement ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine t-h-w (ou t-h-y) donne : etendre, etaler, aplanir, deployer une surface. Le verbe tahaha est a la forme I accompli, troisieme personne du masculin singulier, avec le suffixe -ha (referant a al-ard) : « il l'a etendue / ce qui l'a etendue ». L'extension dans cette racine est un acte physique d'aplanissement — rendre une surface plate et habitable. Le Lane's precise que taha al-ard signifie « il a etendu la terre, il l'a deployee comme on deploie une surface plate ». C'est un synonyme de dahaha (sourate 79:30) qui designe la meme operation d'extension de la terre. Le sens d'extension est le seul qui s'applique naturellement a la terre comme complement.",
        axe1_verset: "Le verset dit wa-ma tahaha — « et ce qui l'a etendue ». Le verbe tahaha a pour objet la terre (al-ard, via le suffixe -ha). Le champ lexical est celui de la creation physique : terre + extension. L'extension est l'operation qui rend la terre habitable — sans extension, la terre serait un point ou une masse informe. Le verbe est a l'accompli, ce qui indique un acte acheve : la terre a ete etendue, c'est un fait accompli. La construction wa-ma (et ce qui) introduit l'agent de l'extension sans le nommer explicitement — le texte ne precise pas qui a etendu la terre.",
        axe2_voisins: "Le verset 5 disait wa-ma banaha — « et ce qui l'a bati » (le ciel). Le verset 6 dit wa-ma tahaha — « et ce qui l'a etendue » (la terre). Le parallelisme syntaxique est parfait : wa-ma + verbe accompli + suffixe -ha. Les deux verbes decrivent des actes de creation : batir le ciel et etendre la terre. Le verbe banaha (batir) implique une elevation verticale, tandis que tahaha (etendre) implique un deploiement horizontal. Les deux operations sont complementaires et forment l'espace habitable.",
        axe3_sourate: "L'extension de la terre fait partie de la serie de serments cosmiques (v1-7) qui introduisent le message central de la sourate. Chaque serment evoque un aspect de la creation ordonnee. L'extension de la terre illustre le fait que la creation n'est pas aleatoire mais planifiee — la terre a ete etendue pour etre habitable, comme le ciel a ete bati pour etre une voute protectrice. Cette idee de creation ordonnee prepare le terrain pour le verset 8 ou l'ame recevra l'inspiration du bien et du mal.",
        axe4_coherence: "Le Coran utilise plusieurs verbes pour decrire l'extension de la terre. La sourate 79:30 dit wal-arda ba'da dhalika dahaha — « et la terre apres cela Il l'a etendue (dahaha) ». La sourate 15:19 dit wal-arda madadnaha — « et la terre Nous l'avons etendue ». La sourate 50:7 dit wal-arda madadnaha — meme formulation. Le verbe tahaha dans la sourate 91 est un synonyme de dahaha et madadnaha — tous decrivent la meme operation d'extension et d'aplanissement de la surface terrestre. La repetition de ce theme a travers le Coran souligne l'importance de la terre comme espace amenage pour la vie.",
        axe5_frequence: "L'extension de la terre est un acte de preparation du terrain pour la mission du khalifa. La terre n'a pas ete laissee brute — elle a ete etendue, aplanie, rendue habitable. Cet amenagement prealable montre que la mission du khalifa est attendue et facilitee. L'etre humain n'est pas jete dans un chaos — il est place sur une terre preparee pour lui, ce qui renforce sa responsabilite. L'extension de la terre est un bienfait qui appelle une reponse : utiliser cette terre etendue pour le bien."
      },
      "Rejet/Repulsion": {
        status: "nul",
        senses: ["repousser", "rejeter", "eloigner"],
        proof_ctx: "Le Lane's mentionne un sens de repulsion pour certains derives de racines proches. Ce sens de repousser les gens ou eloigner quelque chose n'a aucun rapport avec la terre dans un contexte de serment cosmique. La construction tahaha avec le suffixe referant a la terre exclut le sens de rejet — on ne rejette pas la terre."
      }
    }
  }, 2);

  // ---- Mise a jour verse_analyses ----
  await sb.from('verse_analyses').update({
    translation_arab: "وَٱلْأَرْضِ وَمَا طَحَىٰهَا",
    full_translation: "par la terre et Celui qui l'a etalee",
    segments: [
      { fr: "Par la terre", pos: "nom", phon: "wal-ardi", arabic: "وَٱلْأَرْضِ", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 1 },
      { fr: "et ce qui", pos: "particule", phon: "wa-ma", arabic: "وَمَا", is_particle: true, position: 0 },
      { fr: "l'a etendue", pos: "verbe", phon: "tahaha", arabic: "طَحَىٰهَا", word_key: "Thw", is_particle: false, sense_retenu: "etendre", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient un serment (waw al-qasam) suivi de deux elements : al-ardi (la terre, nom defini au genitif de la racine hamza-r-d) et wa-ma tahaha (et ce qui l'a etendue, verbe accompli forme I de la racine t-h-w avec suffixe pronominal -ha referant a la terre). Le Lane's (Edward Lane, 1863) donne pour hamza-r-d : la terre, le sol, le terrain. Pour t-h-w : etendre, aplanir, deployer une surface. La construction wa-ma (et ce qui) introduit l'agent de l'extension sans le nommer — le texte ne dit pas explicitement qui a etendu la terre. Le parallelisme avec le verset 5 (was-sama'i wa-ma banaha) est syntaxiquement identique : serment + wa-ma + verbe accompli.

§JUSTIFICATION§
**terre** — Le sens retenu est « terre » pour al-ard. D'apres les sources etymologiques, la racine donne : terre, sol, terrain, pays. L'alternative « sol » est ecartee car trop restreint — al-ard est la terre entiere, pas un sol local. L'alternative « monde d'en bas » est une interpretation, pas une traduction directe du mot.

**etendre** — Le sens retenu est « etendre » pour tahaha. D'apres les sources etymologiques, la racine donne : etendre, etaler, aplanir. L'alternative « aplanir » est acceptable mais « etendre » est plus courant en francais et rend mieux l'idee de deploiement spatial. L'alternative « deployer » est trop technique pour du francais courant.

§CRITIQUE§
Hamidullah traduit : « par la terre et Celui qui l'a etalee ». Notre traduction donne « par la terre et ce qui l'a etendue ». La difference principale est que Hamidullah traduit ma par « Celui » (avec majuscule), ce qui identifie l'agent comme Dieu. Le texte arabe dit wa-ma (et ce qui), une formulation volontairement ouverte. Le choix de Hamidullah est une interpretation exegetique — le texte ne nomme pas l'agent. Pour le verbe, « etalee » et « etendue » sont des synonymes proches, aucune divergence de fond.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 91:6 — TERMINE');
  console.log('  ard → "terre" | Thw → "etendre"');
  console.log('  Traduction : "Par la terre et ce qui l\'a etendue"');
}

async function verse91_7() {
  console.log('\n=== VERSET 91:7 — وَنَفْسٍ وَمَا سَوَّىٰهَا ===');
  const verse_id = 6050;

  // ---- NFS (نفس) — id=298 — "ame" ----
  // Forme: nafsin — nom indefini genitif (serment, SANS al- = l'ame en general)
  await upsertVWA(verse_id, 'nfs', 'ame', {
    sense_chosen: "ame",
    concept_chosen: "Ame/Etre",
    concepts: {
      "Ame/Etre": {
        status: "retenu",
        senses: ["ame", "etre", "personne", "soi-meme", "essence"],
        proof_ctx: "Le sens retenu est « Ame/Etre ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine n-f-s donne : l'ame, l'etre, la personne, soi-meme, l'essence d'une chose. Le mot nafsin est un nom indefini au genitif, introduit par le waw du serment : « par une ame ». Le Lane's precise que nafs designe ce qui constitue la realite interieure d'un etre — son ame, son essence, ce qui fait qu'il est lui. L'absence de l'article defini (nafsin et non an-nafs) est significative : le serment porte sur l'ame en general, toute ame, pas une ame specifique. Le sens d'ame est retenu car il englobe a la fois la dimension interieure (conscience, volonte) et la dimension d'etre (personne complete). La distinction avec le sens « Souffle/Vie » est que le souffle est la force vitale qui anime le corps, tandis que l'ame est l'entite qui recoit l'inspiration du bien et du mal (v8). C'est l'ame qui est le sujet moral, pas le souffle.",
        axe1_verset: "Le verset dit wa-nafsin wa-ma sawwaha — « par une ame et ce qui l'a faconnee ». Le mot nafsin est l'objet du serment, suivi d'une reference a celui qui l'a faconnee. Le champ lexical est celui de la creation interieure : ame + faconnement. Apres les serments par des realites cosmiques exterieures (soleil, lune, jour, nuit, ciel, terre), le serment passe a une realite interieure — l'ame. Ce passage du cosmos a l'ame marque un tournant dans la serie des serments. L'ame est le dernier objet de serment avant le message central (v9-10), ce qui lui confere une position culminante.",
        axe2_voisins: "Les versets 5-6 juraient par le ciel et la terre — des realites physiques et visibles. Le verset 7 jure par l'ame — une realite interieure et invisible. Ce passage du visible a l'invisible est delibere : la serie des serments monte en abstraction. Le verset 8 enchainera avec l'inspiration du bien et du mal dans cette ame, et les versets 9-10 donneront le verdict. L'ame est donc le pivot de toute la sourate — elle est l'objet des serments et le sujet du message central.",
        axe3_sourate: "La sourate 91 est centree sur l'ame humaine et son potentiel de bien et de mal. Les serments cosmiques (v1-6) servent de preambule a l'introduction de l'ame (v7). Le faconnement de l'ame (v7) et l'inspiration du bien et du mal (v8) sont les deux actes preparatoires qui rendent possible le choix (v9-10). Le verset 7 est le moment ou la sourate passe du decor (cosmos) au sujet (ame). Sans l'ame, les serments cosmiques n'auraient pas de destinataire.",
        axe4_coherence: "Le Coran utilise nafs dans des centaines de passages avec des nuances variees. La sourate 89:27 dit : « O ame apaisee (ya ayyatuha an-nafsu al-mutma'inna) ». La sourate 12:53 dit : « l'ame est certes instigatrice du mal (an-nafsa la-ammaratun bis-su'i) ». La sourate 75:2 jure par « l'ame qui se blame (an-nafs al-lawwama) ». Le Coran presente l'ame comme une entite capable de differents etats : apaisee, instigatrice du mal, auto-critique. Le verset 91:7 s'inscrit dans cette vision — l'ame est faconnee avec un potentiel double que le verset 8 explicitera.",
        axe5_frequence: "L'ame est le siege de la mission du khalifa. C'est dans l'ame que se prennent les decisions de justice ou de corruption, de generosite ou d'avarice. Le serment par l'ame place la responsabilite individuelle au centre du message. Le khalifa n'est pas juge sur ses circonstances exterieures (cosmos, terre) mais sur l'etat de son ame — s'il la purifie (v9) ou s'il la corrompt (v10). L'ame indefinie (nafsin) universalise le message : chaque ame, sans exception, est concernee."
      },
      "Souffle/Vie": {
        status: "probable",
        senses: ["souffle", "respiration", "force vitale", "vie"],
        proof_ctx: "Le sens de « souffle » est le sens etymologique premier de la racine n-f-s. D'apres les sources etymologiques, la racine donne : souffler, exhaler, le souffle, la respiration. Le souffle est la force qui anime le corps — sans souffle, pas de vie. Ce sens est grammaticalement possible pour nafsin au genitif indefini. La distinction avec le sens retenu (ame) est profonde : le souffle est la force vitale physique, l'energie qui fait vivre le corps, tandis que l'ame est l'entite morale qui recoit l'inspiration et fait des choix. Le verset 8 dit que cette nafs recoit l'inspiration de la perversite et de la piete — cette capacite de recevoir une inspiration morale correspond davantage a l'ame qu'au souffle vital. Le souffle maintient la vie mais ne fait pas de choix moraux.",
        axe1_verset: "Le verset dit wa-nafsin wa-ma sawwaha — le mot nafsin est associe au faconnement (sawwaha). Le souffle peut etre faconne au sens de « proportionner la force vitale dans un corps ». Le champ lexical est physique : souffle + faconnement. Cependant, le verset 8 qui suit parle d'inspiration morale (perversite et piete), ce qui oriente vers une entite capable de moralite plutot qu'une simple force vitale. Le souffle est un support necessaire mais pas suffisant pour expliquer la reception de l'inspiration morale.",
        axe2_voisins: "Les versets precedents juraient par des realites physiques (ciel, terre). Le souffle s'inscrirait dans cette continuite physique. Cependant, le verset 7 marque un tournant — il passe du cosmique a l'intime. Le verset 8 enchaine avec l'inspiration du bien et du mal, ce qui requiert une entite morale, pas seulement vitale. Le souffle ne recoit pas d'inspiration morale — il anime le corps sans discernement entre le bien et le mal.",
        axe3_sourate: "La sourate culmine dans le verdict purifier/corrompre (v9-10). Le sujet de la purification et de la corruption doit etre une entite morale. Le souffle vital ne se purifie pas et ne se corrompt pas moralement — il est present ou absent. L'ame en revanche peut etre purifiee ou corrompue par les choix de la personne. Le sens de souffle ne porte pas le message central de la sourate.",
        axe4_coherence: "Le Coran n'utilise jamais nafs dans le sens exclusif de souffle physique quand le contexte est moral. Les passages ou nafs designe l'ame morale (89:27, 12:53, 75:2) sont bien plus nombreux que ceux ou il designerait le souffle seul. Le Coran a un mot specifique pour le souffle divin insuffle dans le corps : ruh (esprit). Le mot nafs dans un contexte de serment suivi d'inspiration morale pointe vers l'ame.",
        axe5_frequence: "Le souffle vital est necessaire a la vie du khalifa mais ne constitue pas sa mission. La mission du khalifa concerne l'ame — ses choix, ses actes, sa purification. Le souffle est un prealable biologique, pas un sujet moral. Le sens de souffle n'ajoute pas au theme de la responsabilite individuelle qui est le coeur de la sourate."
      },
      "Corps/Anatomie": {
        status: "nul",
        senses: ["corps", "anatomie", "constitution physique"],
        proof_ctx: "Le Lane's donne nafs dans le sens de « la personne physique, le corps ». Ce sens est marginal et ne s'applique pas dans un contexte de serment cosmique suivi d'inspiration morale. Le corps ne recoit pas d'inspiration de piete ou de perversite."
      },
      "Sens isole/Oeil": {
        status: "nul",
        senses: ["oeil", "mauvais oeil"],
        proof_ctx: "Le Lane's mentionne nafasa dans le sens de « jeter le mauvais oeil ». Ce sens derive est propre a certains verbes de la racine et n'a aucun rapport avec le nom nafsin dans un serment cosmique."
      },
      "Sens isole/Quantite": {
        status: "nul",
        senses: ["quantite", "peu"],
        proof_ctx: "Le Lane's mentionne nafs dans le sens de « une petite quantite de quelque chose ». Ce sens marginal est hors sujet dans un contexte de serment par l'ame et le faconnement."
      }
    }
  }, 1);

  // ---- SWY (سوي) — id=295 — "faconner" ----
  // Forme: sawwaha — verbe accompli forme II + suffixe -ha (il/ce qui l'a faconnee/proportionnee)
  await upsertVWA(verse_id, 'swy', 'faconner', {
    sense_chosen: "faconner",
    concept_chosen: "Achevement/Perfection",
    concepts: {
      "Achevement/Perfection": {
        status: "retenu",
        senses: ["achever", "parfaire", "faconner", "proportionner", "completer"],
        proof_ctx: "Le sens retenu est « Achevement/Perfection ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-w-y donne : etre egal, etre droit, etre complet, achever, parfaire, faconner, proportionner. La forme II sawwa signifie « faconner avec proportion, rendre complet et equilibre, achever en donnant la bonne forme ». Le verbe sawwaha est a la forme II accompli, troisieme personne du masculin singulier, avec le suffixe -ha (referant a nafs) : « il l'a faconnee / ce qui l'a faconnee ». La forme II (fa''ala) marque l'intensite et la completude de l'action — ce n'est pas un simple modelage mais un faconnement acheve et proportionnel. Le Lane's precise que taswiya designe l'acte de rendre quelque chose droit, equilibre et complet. La distinction avec le sens « Egalite/Equivalence » est que l'egalite decrit un rapport entre deux choses, tandis que l'achevement decrit l'etat final d'une chose unique amenee a sa perfection. Ici, c'est l'ame qui est faconnee — elle est amenee a un etat complet et equilibre, pas mise a egalite avec autre chose.",
        axe1_verset: "Le verset dit wa-ma sawwaha — « et ce qui l'a faconnee ». Le verbe sawwaha a pour objet l'ame (nafs, via le suffixe -ha). Le champ lexical est celui de la creation interieure achevee : ame + faconnement proportionne. Le faconnement de l'ame n'est pas un modelage arbitraire mais un achevement — l'ame est amenee a un etat complet avec des capacites equilibrees. Le verset 8 explicitera ce que contient ce faconnement : l'inspiration de la perversite et de la piete. Le faconnement inclut donc les deux potentiels — l'ame est complete parce qu'elle possede les deux directions.",
        axe2_voisins: "Le verset 5 disait wa-ma banaha (et ce qui l'a bati — le ciel). Le verset 6 disait wa-ma tahaha (et ce qui l'a etendue — la terre). Le verset 7 dit wa-ma sawwaha (et ce qui l'a faconnee — l'ame). Les trois verbes de creation forment une progression : batir (structure externe), etendre (deploiement spatial), faconner (equilibre interieur). Le faconnement de l'ame est l'operation la plus subtile des trois — elle ne porte pas sur la matiere mais sur l'essence interieure. Le verset 8 est la consequence directe de ce faconnement.",
        axe3_sourate: "Le faconnement de l'ame est l'acte fondateur qui rend possible tout le message de la sourate. Sans faconnement, l'ame n'aurait pas la capacite de recevoir l'inspiration (v8), et sans cette capacite, le choix entre purification et corruption (v9-10) serait impossible. Le faconnement est donc le prealable necessaire au libre arbitre moral. La sourate montre que l'ame n'est pas laissee a l'etat brut — elle est preparee, equipee, faconnee pour faire des choix.",
        axe4_coherence: "Le Coran utilise sawwa dans d'autres passages pour decrire le faconnement divin. La sourate 82:7 dit : « Celui qui t'a cree, puis faconne (sawwaka), puis proportionne (fa-'adalaka) ». La sourate 87:2 dit : « Celui qui a cree et faconne (sawwa) ». La sourate 32:9 dit : « puis Il l'a faconne (sawwahu) et a insuffle en lui de Son esprit ». Dans tous ces passages, sawwa designe un acte de creation acheve et proportionne — l'etre est amene a un etat complet et equilibre. Le verbe sawwa dans le Coran est toujours associe a l'idee de completude et de proportion.",
        axe5_frequence: "Le faconnement de l'ame est la dotation initiale du khalifa. L'etre humain ne commence pas a zero — il recoit une ame faconnee avec des capacites equilibrees. Cette dotation est a la fois un privilege et une responsabilite. Le faconnement implique que l'ame a tout ce qu'il faut pour reussir sa mission — le potentiel du bien et du mal est inscrit en elle. Le khalifa ne peut pas invoquer un defaut de fabrication pour justifier ses echecs — son ame a ete faconnee avec proportion."
      },
      "Egalite/Equivalence": {
        status: "probable",
        senses: ["egaliser", "rendre egal", "equilibrer", "equivaloir"],
        proof_ctx: "Le sens « egalite » est le sens premier de la racine s-w-y. D'apres les sources etymologiques, sawiya signifie « etre egal, etre a niveau, etre equivalent ». La forme II sawwa pourrait signifier « rendre l'ame egale, l'equilibrer entre ses tendances ». Ce sens est grammaticalement possible. La distinction avec le sens retenu est que l'egalite decrit un rapport de balance entre les deux potentiels (bien et mal) places dans l'ame, tandis que l'achevement decrit l'etat final d'une ame amenee a sa completude. Les deux sens ne sont pas contradictoires — ils eclairent des facettes differentes du meme acte. Cependant, le verbe sawwa dans les passages paralleles du Coran (82:7, 87:2, 32:9) est toujours traduit dans le sens de « faconner, achever, proportionner » et non dans le sens de « rendre egal ». Le contexte de creation favorise l'achevement sur l'egalisation.",
        axe1_verset: "Le verbe sawwaha avec le suffixe referant a l'ame pourrait signifier « ce qui l'a equilibree ». Le champ lexical accepte ce sens : ame + equilibre entre deux potentiels. Le verset 8 mentionne effectivement deux potentiels (perversite et piete), ce qui donnerait du poids a l'idee d'equilibre. Cependant, le verbe sawwa dans les constructions similaires du Coran designe le faconnement plutot que l'egalisation. La phrase « ce qui l'a egalisee » est moins naturelle en francais que « ce qui l'a faconnee ».",
        axe2_voisins: "Les versets 5-6 utilisent banaha (batir) et tahaha (etendre) — deux verbes de creation physique. Le verbe sawwa s'inscrit logiquement dans cette serie de verbes de creation, ce qui favorise le sens de « faconner ». Le sens d'egaliser serait moins coherent dans une serie de verbes decrivant des actes de creation. Neanmoins, l'idee que l'ame est equilibree entre deux potentiels est pertinente au vu du verset 8.",
        axe3_sourate: "La sourate oppose purification et corruption (v9-10). L'idee que l'ame est initialement equilibree entre les deux donnerait une base au choix moral. Le sens d'egalite renforcerait l'idee de libre arbitre — l'ame commence a zero, sans penchant naturel vers le bien ou le mal. Cependant, le mot « faconner » inclut deja cette idee de proportion et d'equilibre.",
        axe4_coherence: "Le Coran utilise istawa (forme VIII, etre droit, etre stable) dans d'autres contextes. La forme II sawwa est systematiquement utilisee dans le sens de faconner et proportionner plutot que dans le sens d'egaliser. La sourate 82:7 enchaine sawwaka fa-'adalaka (il t'a faconne puis proportionne) — les deux verbes distincts montrent que sawwa est le faconnement et 'adala est la proportionnalite.",
        axe5_frequence: "Le sens d'egalite donnerait a l'ame une neutralite morale initiale. Le khalifa commencerait avec une ame en equilibre parfait, ni penchee vers le bien ni vers le mal. Cette idee est philosophiquement interessante mais le Coran insiste davantage sur le faconnement (donner une forme) que sur l'egalisation (mettre a niveau). La mission du khalifa est d'utiliser une ame faconnee, pas de rester dans un equilibre statique."
      },
      "Sens isole/Se": {
        status: "nul",
        senses: ["soi-meme", "se"],
        proof_ctx: "Le Lane's mentionne sawa' dans le sens de « soi-meme, milieu ». Ce sens pronominal ne s'applique pas au verbe sawwaha dans ce contexte — le verbe a un objet direct (l'ame) et un agent (ce qui l'a faconnee). Le sens reflexif n'a pas de place dans cette construction."
      },
      "Lieu/Geographie": {
        status: "nul",
        senses: ["lieu egal", "terrain plat", "niveau"],
        proof_ctx: "Le Lane's mentionne sawa' dans le sens de terrain egal ou plat. Ce sens geographique ne s'applique pas a l'ame — on ne met pas une ame a niveau comme un terrain. Le contexte est celui du faconnement interieur, pas de la geographie."
      }
    }
  }, 2);

  // ---- Mise a jour verse_analyses ----
  await sb.from('verse_analyses').update({
    translation_arab: "وَنَفْسٍ وَمَا سَوَّىٰهَا",
    full_translation: "par l'ame et Celui qui l'a harmonieusement faconnee",
    segments: [
      { fr: "Par l'ame", pos: "nom", phon: "wa-nafsin", arabic: "وَنَفْسٍ", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 1 },
      { fr: "et ce qui", pos: "particule", phon: "wa-ma", arabic: "وَمَا", is_particle: true, position: 0 },
      { fr: "l'a faconnee", pos: "verbe", phon: "sawwaha", arabic: "سَوَّىٰهَا", word_key: "swy", is_particle: false, sense_retenu: "faconner", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient un serment (waw al-qasam) suivi de deux elements : nafsin (une ame, nom indefini au genitif de la racine n-f-s) et wa-ma sawwaha (et ce qui l'a faconnee, verbe accompli forme II de la racine s-w-y avec suffixe pronominal -ha referant a l'ame). Le Lane's (Edward Lane, 1863) donne pour n-f-s : l'ame, l'etre, la personne, le souffle. Pour s-w-y forme II : faconner avec proportion, achever, rendre complet et equilibre. Le mot nafsin est indefini (sans al-), ce qui signifie « une ame » au sens generique — toute ame, quelle qu'elle soit. La construction wa-ma (et ce qui) introduit l'agent du faconnement sans le nommer. Ce verset est le septieme et dernier serment, culminant apres le soleil, la lune, le jour, la nuit, le ciel et la terre. Le passage du cosmique a l'intime marque le tournant de la sourate.

§JUSTIFICATION§
**ame** — Le sens retenu est « ame » pour nafsin. D'apres les sources etymologiques, la racine donne : ame, etre, personne, souffle, soi-meme. L'alternative « souffle » est ecartee car le verset 8 mentionne l'inspiration de la perversite et de la piete — seule une entite morale (l'ame) peut recevoir une inspiration morale, pas une force vitale (le souffle). L'alternative « etre » est acceptable mais « ame » est plus precis pour designer l'entite interieure qui fait des choix moraux. L'alternative « personne » est trop physique — le serment porte sur la dimension interieure, pas sur le corps.

**faconner** — Le sens retenu est « faconner » pour sawwaha. D'apres les sources etymologiques, la forme II donne : faconner avec proportion, achever, rendre complet. L'alternative « egaliser » est ecartee car les passages paralleles du Coran (82:7, 87:2) utilisent sawwa dans le sens de faconner et non d'egaliser. L'alternative « proportionner » est acceptable mais « faconner » est plus courant en francais et englobe l'idee de proportion.

§CRITIQUE§
Hamidullah traduit : « par l'ame et Celui qui l'a harmonieusement faconnee ». Deux differences avec notre traduction. Premierement, Hamidullah ajoute « harmonieusement » qui n'est pas dans le texte arabe — le verbe sawwaha suffit a exprimer le faconnement proportionne. Cet ajout est une interpretation qui embellit le texte. Deuxiemement, Hamidullah traduit ma par « Celui » (avec majuscule), identifiant l'agent comme Dieu. Le texte dit wa-ma (et ce qui), sans nommer l'agent. Notre traduction preserve cette ouverture du texte.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 91:7 — TERMINE');
  console.log('  nfs → "ame" | swy → "faconner"');
  console.log('  Traduction : "Par l\'ame et ce qui l\'a faconnee"');
}

async function verse91_8() {
  console.log('\n=== VERSET 91:8 — فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَىٰهَا ===');
  const verse_id = 6051;

  // ---- LHM (لهم) — id=313 — "inspirer" ----
  // Forme: alhamaha — verbe accompli forme IV + suffixe -ha (il lui a inspire)
  await upsertVWA(verse_id, 'lhm', 'inspirer', {
    sense_chosen: "inspirer",
    concept_chosen: "Inspiration",
    concepts: {
      "Inspiration": {
        status: "retenu",
        senses: ["inspirer", "insuffler", "faire avaler", "reveler interieurement"],
        proof_ctx: "Le sens retenu est « Inspiration ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine l-h-m donne : avaler, engloutir, inspirer, insuffler une idee. La forme IV alhama signifie « inspirer quelqu'un, insuffler une connaissance interieure, reveler a l'esprit ». Le verbe alhamaha est a la forme IV accompli, troisieme personne du masculin singulier, avec le suffixe -ha (referant a nafs) : « il lui a inspire ». La forme IV (af'ala) marque la causalite — faire parvenir l'inspiration a l'ame. Le Lane's precise que ilham est une connaissance qui est jetee dans le coeur sans effort de la part de la personne — elle vient de l'exterieur et penetre l'interieur. L'inspiration est l'acte de deposer dans l'ame une connaissance innee, un sens moral qui n'a pas ete acquis par l'experience mais place la par la creation. La distinction avec le sens « Engloutissement » est radicale : l'engloutissement est un acte physique d'absorption (avaler de la nourriture), tandis que l'inspiration est un acte interieur de reception d'une connaissance. Les deux partagent l'idee de « faire entrer quelque chose dans quelque chose d'autre », mais l'un est physique et l'autre est spirituel.",
        axe1_verset: "Le verset dit fa-alhamaha fujuraha wa-taqwaha — « Il lui a inspire sa perversite et sa piete ». Le verbe alhamaha est au centre du verset avec deux complements : fujuraha (sa perversite) et taqwaha (sa piete). Le champ lexical est celui de la dotation morale interieure : inspirer + perversite + piete. Le fa- initial (donc, alors) relie l'inspiration au faconnement du verset 7 — le faconnement de l'ame inclut l'inspiration du bien et du mal. L'inspiration porte sur deux choses opposees, ce qui montre que l'ame est equipee des deux potentiels des sa creation.",
        axe2_voisins: "Le verset 7 decrivait le faconnement de l'ame. Le verset 8 precise le contenu de ce faconnement : l'inspiration de la perversite et de la piete. Le fa- (alors) marque la consequence — le faconnement aboutit a l'inspiration des deux potentiels. Les versets 9-10 tireront la conclusion : celui qui purifie cette ame reussit, celui qui la corrompt echoue. L'inspiration est donc le maillon central entre le faconnement (v7) et le choix (v9-10).",
        axe3_sourate: "L'inspiration du bien et du mal est le message central de la sourate. Tous les serments cosmiques (v1-7) convergent vers ce verset. La sourate affirme que l'ame humaine n'est pas neutre ni vide — elle est equipee des deux potentiels par l'inspiration. Ce n'est pas un choix exterieur qui s'impose a l'ame mais une connaissance interieure inscrite en elle. La sourate 91 est fondamentalement une sourate sur la nature morale innee de l'ame humaine.",
        axe4_coherence: "Le Coran utilise alhama dans un seul autre passage : la sourate 5:31, ou Dieu inspire au corbeau de gratter la terre pour montrer a l'un des fils d'Adam comment enterrer son frere. Dans ce passage, l'inspiration est un acte de revelation pratique — Dieu fait connaitre a l'animal une action a accomplir. Dans la sourate 91:8, l'inspiration est morale — Dieu fait connaitre a l'ame la realite du bien et du mal. Les deux passages partagent l'idee d'une connaissance deposee de l'exterieur sans effort du recepteur.",
        axe5_frequence: "L'inspiration est la dotation morale fondamentale du khalifa. L'etre humain ne decouvre pas le bien et le mal par tatonnement — il les connait de l'interieur parce qu'ils lui ont ete inspires. Cette connaissance innee est la base de la responsabilite morale. Le khalifa ne peut pas plaider l'ignorance — la perversite et la piete lui ont ete inspirees, il sait ce qu'est le bien et ce qu'est le mal. L'inspiration est donc a la fois un privilege (connaissance innee) et une charge (responsabilite de choisir)."
      },
      "Engloutissement": {
        status: "nul",
        senses: ["avaler", "engloutir", "devorer"],
        proof_ctx: "Le Lane's donne pour la forme I lahima : avaler, engloutir de la nourriture. Ce sens physique d'absorption alimentaire n'a aucun rapport avec l'ame et ses potentiels moraux. La forme IV alhama dans le Coran est exclusivement utilisee dans le sens d'inspiration interieure. La construction alhamaha fujuraha wa-taqwaha (il lui a inspire sa perversite et sa piete) exclut le sens d'engloutissement — on n'avale pas la perversite et la piete."
      }
    }
  }, 1);

  // ---- FJR (فجر) — id=587 — "perversite" ----
  // Forme: fujuraha — nom + possessif -ha (sa perversite/son eclatement dans le mal)
  await upsertVWA(verse_id, 'fjr', 'perversite', {
    sense_chosen: "perversite",
    concept_chosen: "Transgression",
    concepts: {
      "Transgression": {
        status: "retenu",
        senses: ["transgresser", "perversite", "debauche", "immoralite", "sortir des limites"],
        proof_ctx: "Le sens retenu est « Transgression ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine f-j-r donne : fendre, eclater, jaillir (sens physique premier), puis transgresser, etre immoral, sortir des limites, se livrer a la debauche. Le mot fujur est le nom verbal (masdar) de la forme I : la transgression, la perversite, l'immoralite. Le mot fujuraha est ce masdar avec le suffixe possessif -ha (sa, referant a l'ame) : « sa perversite ». Le Lane's precise que le fujur est l'eclatement hors des limites morales — le fajir est celui qui brise les barrieres de la decence et de la loi. La transgression dans cette racine est un mouvement centrifuge — elle sort de l'ame vers l'exterieur en brisant les limites. La distinction avec le sens « Eclatement » est que l'eclatement est l'acte physique de se fendre (une source qui jaillit, un barrage qui cede), tandis que la transgression est l'extension morale de ce meme mouvement (l'ame qui eclate hors de ses limites). Les deux partagent l'idee de rupture de limites, mais l'un est physique et l'autre est moral.",
        axe1_verset: "Le verset dit alhamaha fujuraha wa-taqwaha — « il lui a inspire sa perversite et sa piete ». Le mot fujuraha est le premier complement de l'inspiration, suivi de son oppose taqwaha. Le champ lexical est celui de la polarite morale : perversite (sortie des limites) vs piete (protection dans les limites). Le fujur est presente comme un potentiel inscrit dans l'ame, pas comme un acte deja commis. Le suffixe possessif -ha (sa) montre que la perversite appartient a l'ame — elle est une partie constitutive de l'ame, pas un element exterieur qui l'attaque.",
        axe2_voisins: "Le verset 7 parlait du faconnement de l'ame. Le verset 8 revele que ce faconnement inclut deux potentiels opposes dont le fujur (la transgression). Le verset 9 parlera de celui qui purifie cette ame — la purification consiste a maitriser le potentiel de transgression. Le verset 10 parlera de celui qui corrompt l'ame — la corruption consiste a laisser libre cours a la transgression. Le fujur est donc le danger interieur que l'ame doit gerer.",
        axe3_sourate: "La sourate oppose purification et corruption de l'ame. Le fujur est la matiere brute de la corruption — c'est le potentiel de transgression que l'ame doit maitriser. La sourate ne dit pas que le fujur est mauvais en soi (il est inspire par la creation), mais que le laisser dominer l'ame mene a l'echec. La presence du fujur dans l'ame est necessaire au libre arbitre — sans potentiel de mal, le choix du bien n'aurait aucun merite.",
        axe4_coherence: "Le Coran utilise fujur et fajir dans d'autres passages. La sourate 82:14 dit : « et les pervers (al-fujjar) seront dans un brasier ». La sourate 38:28 oppose les croyants et les pervers (al-fujjar). La sourate 75:5 dit : « l'etre humain veut persister dans sa transgression (li-yafjura) devant lui ». Dans tous ces passages, le fujur designe la transgression morale — l'acte de sortir deliberement des limites du bien. Le mot est systematiquement oppose au birr (piete, bonte) ou a la taqwa (piete protectrice).",
        axe5_frequence: "La transgression est l'echec du khalifa a respecter les limites de sa mission. Le khalifa recoit des limites (les regles morales, les lois divines) et la transgression consiste a les eclater. Le fujur est le mouvement centrifuge qui eloigne le khalifa de sa mission — il sort des limites, il brise les barrieres, il refuse le cadre. Le verset montre que ce potentiel est inscrit dans l'ame — le khalifa doit en etre conscient pour le maitriser."
      },
      "Eclatement": {
        status: "probable",
        senses: ["eclater", "fendre", "jaillir", "ouvrir"],
        proof_ctx: "Le sens d'eclatement est le sens etymologique premier de la racine f-j-r. D'apres les sources etymologiques, fajara signifie : fendre, eclater, faire jaillir. Le fajr (l'aube) est le moment ou la lumiere eclate hors de la nuit. Le fujur pourrait etre lu ici comme « son eclatement » — le potentiel qu'a l'ame d'eclater hors de ses limites. La distinction avec le sens retenu est subtile : l'eclatement decrit le mouvement physique de rupture (une source qui jaillit, un barrage qui cede), tandis que la transgression est la dimension morale de ce meme mouvement (l'ame qui eclate hors de ses limites ethiques). Dans le contexte du verset, les deux complements sont opposes (fujur vs taqwa), ce qui impose un sens moral et non physique. Le fujur est oppose a la taqwa (la protection dans les limites), ce qui confirme qu'il s'agit de transgression morale et non d'eclatement physique.",
        axe1_verset: "Le mot fujuraha est en opposition directe avec taqwaha. Cette opposition impose un sens moral. L'eclatement physique n'a pas de contraire logique qui serait la taqwa (protection/piete). La construction alhamaha fujuraha (il lui a inspire son eclatement) est possible mais moins naturelle que « il lui a inspire sa perversite ». Le champ lexical du verset est moral (ame, inspirer, piete), pas physique.",
        axe2_voisins: "Le verset 7 parle du faconnement de l'ame — un contexte interieur et moral. Le verset 9 parlera de purification de l'ame. L'eclatement physique ne s'inscrit pas dans cette progression interieure. Les versets voisins orientent vers le sens moral de la racine, pas vers le sens physique. L'eclatement serait un corps etranger dans une serie de versets entierement consacres a la nature morale de l'ame.",
        axe3_sourate: "La sourate traite de la purification et de la corruption de l'ame. L'eclatement physique n'est pas un theme de cette sourate. Le sens moral de transgression s'integre parfaitement dans le message global, tandis que l'eclatement resterait une metaphore necessitant une interpretation supplementaire.",
        axe4_coherence: "Le Coran utilise fajara dans le sens physique de jaillir (la sourate 54:12 : « et Nous avons fait jaillir (fajjarna) la terre en sources »). Mais quand le nom fujur est utilise, le sens est toujours moral. Le Coran distingue clairement les usages physiques (verbe forme II : faire jaillir) et moraux (nom fujur : transgression). Ici c'est le nom fujur, pas le verbe.",
        axe5_frequence: "L'eclatement physique ne parle pas de la mission du khalifa. La transgression morale, en revanche, est au coeur de la responsabilite du khalifa — il doit empecher la corruption (fujur) et promouvoir la justice. Le sens physique n'ajoute rien au theme de la responsabilite individuelle."
      },
      "Commencement/Lumiere": {
        status: "peu_probable",
        senses: ["aube", "commencement", "lumiere naissante"],
        proof_ctx: "Le sens de « commencement/lumiere » vient du mot fajr (l'aube) qui est le moment ou la lumiere eclate. Ce sens est lie a la racine f-j-r mais ne s'applique pas au mot fujur. Le Lane's distingue clairement fajr (l'aube) et fujur (la transgression). Le mot utilise dans le verset est fujuraha (sa perversite), pas fajraha (son aube). De plus, l'opposition fujur/taqwa dans le verset impose un sens moral — l'aube n'a pas de contraire logique qui serait la piete.",
        axe1_verset: "Le mot fujuraha est oppose a taqwaha dans le meme verset. L'aube n'a pas de contraire qui serait la piete. L'opposition lexicale exclut le sens de commencement/lumiere. La construction ne fonctionne pas : « il lui a inspire son aube et sa piete » est incoherent.",
        axe2_voisins: "Les versets 1-4 parlent effectivement du soleil, de la lune, du jour et de la nuit. Mais le verset 8 a quitte le registre cosmique pour le registre moral (inspiration de l'ame). Le sens d'aube serait un retour en arriere thematique qui briserait la progression de la sourate.",
        axe3_sourate: "La sourate distingue clairement la section cosmique (v1-6) de la section morale (v7-10). Le fujur au verset 8 appartient a la section morale. L'aube n'a pas de place dans cette section.",
        axe4_coherence: "Le Coran utilise fajr pour l'aube et fujur pour la transgression sans jamais les confondre. Les deux mots sont etymologiquement lies mais semantiquement distincts dans l'usage coranique.",
        axe5_frequence: "Le sens d'aube ne parle ni de la purification de l'ame ni de la mission du khalifa dans ce contexte."
      }
    }
  }, 2);

  // ---- WQY (وقي) — id=277 — "piete" ----
  // Forme: taqwaha — nom (masdar) + possessif -ha (sa piete/sa protection)
  await upsertVWA(verse_id, 'wqy', 'piete', {
    sense_chosen: "piete",
    concept_chosen: "Protection/Preservation",
    concepts: {
      "Protection/Preservation": {
        status: "retenu",
        senses: ["proteger", "preserver", "piete", "crainte pieuse", "prudence", "se premunir"],
        proof_ctx: "Le sens retenu est « Protection/Preservation ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine w-q-y donne : proteger, preserver, se premunir contre un danger, se garder de. Le mot taqwa est le masdar (nom verbal) : la protection, la preservation, la piete. Le mot taqwaha est ce masdar avec le suffixe possessif -ha (sa, referant a l'ame) : « sa piete ». Le Lane's precise que la taqwa est l'acte de se proteger contre ce qui peut nuire — c'est une attitude de vigilance et de prudence face au danger moral. La taqwa est l'oppose exact du fujur : le fujur eclate hors des limites, la taqwa se protege en restant dans les limites. Le Lane's donne ittaqa comme « il s'est protege, il a mis un bouclier entre lui et le danger ». La taqwa est un mouvement centripete — elle rassemble et protege, la ou le fujur disperse et transgresse. Le sens de « bouclier » est classe nul car il est trop physique et concret pour une realite morale inscrite dans l'ame.",
        axe1_verset: "Le verset dit alhamaha fujuraha wa-taqwaha — « il lui a inspire sa perversite et sa piete ». Le mot taqwaha est le deuxieme complement de l'inspiration, en opposition avec fujuraha. Le champ lexical est celui de la polarite morale : transgression (sortie des limites) vs piete (protection dans les limites). La taqwa est presentee comme un potentiel inscrit dans l'ame au meme titre que le fujur. Le wa- (et) qui relie les deux mots montre que les deux potentiels sont donnes simultanement — l'ame ne recoit pas d'abord le mal puis le bien, elle recoit les deux ensemble.",
        axe2_voisins: "Le verset 7 parlait du faconnement de l'ame. Le verset 8 precise que ce faconnement inclut la taqwa (la piete protectrice). Le verset 9 dira « a reussi celui qui l'a purifiee » — la purification est l'acte de cultiver la taqwa et de maitriser le fujur. La taqwa est donc le potentiel positif que le verset 9 invitera a developper. Le lien entre les versets est direct : inspiration de la taqwa (v8) → purification de l'ame par la taqwa (v9) → reussite (v9).",
        axe3_sourate: "La sourate oppose purification et corruption. La taqwa est la matiere premiere de la purification — c'est le potentiel de protection et de piete que l'ame doit cultiver pour reussir. Sans taqwa inspiree, la purification serait impossible. La sourate montre que la reussite n'est pas imposee de l'exterieur mais possible parce que l'ame a ete equipee du potentiel de taqwa des sa creation.",
        axe4_coherence: "Le Coran utilise taqwa dans des centaines de passages. La sourate 2:2 dit : « guidance pour les muttaqin (ceux qui ont la taqwa) ». La sourate 49:13 dit : « le plus noble d'entre vous aupres de Dieu est le plus pieux (atqakum) ». La taqwa est l'un des mots les plus importants du vocabulaire coranique — elle designe l'attitude fondamentale du croyant qui se protege du mal en restant conscient des limites morales. Dans la sourate 91:8, la taqwa est presentee comme un potentiel inne, pas comme une qualite acquise.",
        axe5_frequence: "La taqwa est l'outil principal du khalifa dans sa mission. Le khalifa qui a la taqwa se protege de la corruption, reste dans les limites de la justice et preserve l'ordre moral. La taqwa est la force centripete qui maintient le khalifa dans sa mission — elle est l'oppose du fujur qui l'en eloigne. Le verset montre que cette force protectrice est inscrite dans l'ame — le khalifa n'a pas a la chercher a l'exterieur, il la porte en lui."
      },
      "Sens isole/Bouclier": {
        status: "nul",
        senses: ["bouclier", "armure", "protection physique"],
        proof_ctx: "Le Lane's mentionne wiqaya dans le sens de bouclier ou protection physique. Ce sens concret de protection materielle n'est pas applicable a un potentiel moral inscrit dans l'ame. La taqwa dans le contexte du verset est une realite interieure, pas un objet physique. Le texte dit « sa piete » (taqwaha) avec un possessif referant a l'ame — un bouclier ne peut pas etre possede par une ame."
      }
    }
  }, 3);

  // ---- Mise a jour verse_analyses ----
  await sb.from('verse_analyses').update({
    translation_arab: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَىٰهَا",
    full_translation: "et lui a alors inspire son immoralite, de meme que sa piete",
    segments: [
      { fr: "Il lui a inspire", pos: "verbe", phon: "fa-alhamaha", arabic: "فَأَلْهَمَهَا", word_key: "lhm", is_particle: false, sense_retenu: "inspirer", position: 1 },
      { fr: "sa perversite", pos: "nom", phon: "fujuraha", arabic: "فُجُورَهَا", word_key: "fjr", is_particle: false, sense_retenu: "perversite", position: 2 },
      { fr: "et sa piete", pos: "nom", phon: "wa-taqwaha", arabic: "وَتَقْوَىٰهَا", word_key: "wqy", is_particle: false, sense_retenu: "piete", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient trois elements principaux : le verbe alhamaha (il lui a inspire, forme IV accompli de l-h-m avec suffixe -ha referant a l'ame du verset 7), le premier complement fujuraha (sa perversite, nom de la racine f-j-r avec possessif -ha), et le deuxieme complement taqwaha (sa piete, masdar de la racine w-q-y avec possessif -ha). Le fa- initial (alors, donc) relie l'inspiration au faconnement du verset 7 — c'est une consequence directe. Le Lane's (Edward Lane, 1863) donne pour la forme IV de l-h-m : inspirer, insuffler une connaissance interieure. Pour f-j-r : transgression, perversite, eclater hors des limites. Pour w-q-y : protection, piete, se premunir. Les deux complements sont coordonnes par wa- (et), montrant que les deux potentiels sont inspires simultanement. Les suffixes possessifs -ha montrent que la perversite et la piete appartiennent a l'ame — elles sont constitutives de sa nature.

§JUSTIFICATION§
**inspirer** — Le sens retenu est « inspirer » pour alhamaha. D'apres les sources etymologiques, la forme IV donne : inspirer, insuffler une connaissance interieure sans effort du recepteur. L'alternative « insuffler » est acceptable mais « inspirer » est plus courant en francais. L'alternative « reveler » est ecartee car la revelation (wahy) est un terme coranique specifique reserve a la communication prophetique, tandis que l'inspiration (ilham) est une connaissance innee deposee dans toute ame.

**perversite** — Le sens retenu est « perversite » pour fujuraha. D'apres les sources etymologiques, la racine donne : transgression, perversite, debauche, eclater hors des limites. L'alternative « transgression » est acceptable mais « perversite » est plus direct en francais et designe mieux un potentiel inscrit dans l'ame. L'alternative « immoralite » est celle de Hamidullah et est correcte, mais « perversite » est etymologiquement plus precis (l'idee d'eclater hors des limites).

**piete** — Le sens retenu est « piete » pour taqwaha. D'apres les sources etymologiques, la racine donne : protection, preservation, piete, crainte pieuse. L'alternative « crainte » est ecartee car la taqwa n'est pas une peur mais une attitude de vigilance protectrice. L'alternative « prudence » est trop faible — la taqwa est plus qu'une simple prudence, c'est une posture morale complete.

§CRITIQUE§
Hamidullah traduit : « et lui a alors inspire son immoralite, de meme que sa piete ». Deux points a noter. Premierement, « immoralite » pour fujur est correct mais masque le sens etymologique de la racine f-j-r (eclater hors des limites) — « perversite » ou « transgression » seraient plus proches de l'etymologie. Deuxiemement, « de meme que » pour wa- est une interpretation — le texte dit simplement « et » (wa-), ce qui est plus neutre. Hamidullah ajoute une nuance d'egalite entre les deux potentiels qui est certes presente dans le texte mais que le simple wa- ne souligne pas aussi fortement.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 91:8 — TERMINE');
  console.log('  lhm → "inspirer" | fjr → "perversite" | wqy → "piete"');
  console.log('  Traduction : "Il lui a inspire sa perversite et sa piete"');
}

async function verse91_9() {
  console.log('\n=== VERSET 91:9 — قَدْ أَفْلَحَ مَن زَكَّىٰهَا ===');
  const verse_id = 6052;

  // ---- FLH (فلح) — id=280 — "reussir" ----
  // Forme: aflaha — verbe accompli forme IV (il a reussi)
  await upsertVWA(verse_id, 'flh', 'reussir', {
    sense_chosen: "reussir",
    concept_chosen: "Reussite/Prosperite",
    concepts: {
      "Reussite/Prosperite": {
        status: "retenu",
        senses: ["reussir", "prosperer", "triompher", "etre heureux", "obtenir le salut"],
        proof_ctx: "Le sens retenu est « Reussite/Prosperite ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine f-l-h donne : fendre la terre (sens physique premier), puis reussir, prosperer, obtenir le bonheur durable, triompher. La forme IV aflaha signifie « il a reussi, il a obtenu la prosperite ». Le Lane's precise que le falah est la reussite durable qui mene au bonheur — ce n'est pas un succes ponctuel mais un etat permanent de prosperite. Le verbe aflaha est a la forme IV accompli, troisieme personne du masculin singulier, precede de la particule qad qui renforce l'affirmation : « certes il a reussi, il a deja reussi ». La forme IV (af'ala) marque l'entree dans l'etat de reussite. La distinction avec le sens « Fendre/Labourer » est que le labourage est l'acte physique de fendre la terre pour cultiver, tandis que la reussite est l'extension metaphorique de ce meme acte — celui qui laboure la terre recueille les fruits, celui qui travaille son ame recueille le succes. Les deux partagent l'idee d'effort suivi de recompense, mais l'un est agricole et l'autre est moral.",
        axe1_verset: "Le verset dit qad aflaha man zakkaha — « a reussi celui qui l'a purifiee ». Le verbe aflaha est le verdict principal de la sourate, precede de qad (certes, deja). Le champ lexical est celui de la recompense morale : reussir + purifier. La particule qad donne au verdict un caractere definitif et incontestable — ce n'est pas une possibilite mais une certitude. La reussite est directement liee a la purification de l'ame (zakkaha). Le man (celui qui) est indefini et generique — quiconque purifie son ame reussit, sans exception.",
        axe2_voisins: "Les versets 7-8 decrivaient la dotation de l'ame (faconnement + inspiration du bien et du mal). Le verset 9 tire la premiere conclusion positive : la reussite par la purification. Le verset 10 donnera la conclusion negative : l'echec par la corruption. Les deux versets 9-10 forment une paire de verdict qui est la reponse aux sept serments des versets 1-7. Toute la sourate converge vers ces deux versets — ils sont le message pour lequel le cosmos a ete pris a temoin.",
        axe3_sourate: "La sourate 91 commence par sept serments cosmiques et culmine dans le verdict des versets 9-10. Le verset 9 est la moitie positive du verdict : la reussite appartient a celui qui purifie son ame. Ce verdict est le message central de la sourate — tout le preambule cosmique sert a souligner l'importance de cette affirmation. La structure est celle d'un serment solennel : on jure par les plus grandes creations (soleil, lune, ciel, terre, ame) pour attester de la verite de ce qui suit (la reussite par la purification).",
        axe4_coherence: "Le Coran utilise aflaha dans d'autres passages importants. La sourate 23:1 ouvre par : « qad aflaha al-mu'minun (certes ont reussi les croyants) ». La sourate 87:14 dit : « qad aflaha man tazakka (certes a reussi celui qui s'est purifie) » — un parallele presque identique avec 91:9. La sourate 20:64 utilise aflaha pour la reussite dans un contexte de competition morale. La formule qad aflaha est une formule coranique recurrente qui annonce un verdict positif definitif. Le lien entre purification (tazakka/zakka) et reussite (aflaha) est un theme majeur du Coran.",
        axe5_frequence: "La reussite est l'aboutissement de la mission du khalifa. Le khalifa qui purifie son ame — qui cultive la taqwa et maitrise le fujur — atteint le falah, la prosperite durable. Cette reussite n'est pas materielle mais existentielle — c'est l'accomplissement de la finalite pour laquelle l'ame a ete creee et equipee. Le verset montre que la reussite n'est pas reservee a une elite mais ouverte a quiconque (man = celui qui) fait l'effort de purification."
      },
      "Fendre/Labourer": {
        status: "peu_probable",
        senses: ["fendre", "labourer", "cultiver la terre", "sillonner"],
        proof_ctx: "Le sens de « fendre la terre » est le sens etymologique premier de la racine f-l-h. D'apres les sources etymologiques, le fallah est le laboureur, celui qui fend la terre pour planter. Ce sens est l'origine metaphorique de la reussite — celui qui laboure recueille les fruits de son travail. Le sens est grammaticalement possible pour aflaha (forme IV : « il a fait labourer, il a cultive »). Cependant, la construction qad aflaha man zakkaha (a reussi celui qui l'a purifiee) exclut le sens physique de labourage. Le complement man zakkaha (celui qui l'a purifiee) porte sur l'ame, pas sur la terre. La phrase « a laboure celui qui a purifie l'ame » ne forme pas de sens coherent. Le labourage ne s'applique pas a la purification de l'ame.",
        axe1_verset: "Le complement man zakkaha (celui qui l'a purifiee) oriente vers un sens moral. Le labourage est un acte physique qui s'applique a la terre, pas a l'ame. La phrase « a laboure celui qui l'a purifiee » est incoherente. Le champ lexical du verset est moral (reussir, purifier), pas agricole.",
        axe2_voisins: "Les versets 7-8 parlaient de l'ame et de son inspiration morale. Le verset 9 est le verdict qui suit ces preparations morales. Le sens de labourage serait un changement radical de registre qui briserait la progression thematique de la sourate. Le passage du cosmique au moral puis au verdict est une progression naturelle — un retour a l'agriculture serait incongru.",
        axe3_sourate: "La sourate traite de la purification de l'ame et de ses consequences. Le labourage n'est pas un theme de cette sourate. Le sens physique n'a pas de place dans le verdict central.",
        axe4_coherence: "Le Coran utilise qad aflaha dans la sourate 23:1 et 87:14 avec un sens clairement moral de reussite, jamais de labourage. La formule est un verdict coranique standard dont le sens est etabli par l'usage.",
        axe5_frequence: "Le sens de labourage, bien que porteur d'une metaphore riche (cultiver son ame comme on cultive la terre), n'est pas le sens operant dans ce contexte. La reussite morale est directement liee a la mission du khalifa, pas le labourage physique."
      }
    }
  }, 1);

  // ---- ZKW (زكو) — id=504 — "purifier" ----
  // Forme: zakkaha — verbe accompli forme II + suffixe -ha (il l'a purifiee)
  await upsertVWA(verse_id, 'zkw', 'purifier', {
    sense_chosen: "purifier",
    concept_chosen: "Purification/Croissance",
    concepts: {
      "Purification/Croissance": {
        status: "retenu",
        senses: ["purifier", "croitre", "augmenter", "fructifier", "aumone purificatrice"],
        proof_ctx: "Le sens retenu est « Purification/Croissance ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine z-k-w donne : croitre, augmenter, se purifier, etre pur, donner la zakat (aumone purificatrice). Le Lane's precise que la zakah combine deux idees : la purification et la croissance — purifier quelque chose la fait croitre, et la croissance vient de la purification. La forme II zakka signifie « purifier activement, faire croitre par la purification ». Le verbe zakkaha est a la forme II accompli, troisieme personne du masculin singulier, avec le suffixe -ha (referant a l'ame) : « il l'a purifiee ». La forme II (fa''ala) marque l'intensite et la causalite — ce n'est pas une purification passive mais un effort actif et delibere. Le Lane's donne l'exemple de zakka nafsahu : il a purifie son ame, il l'a fait croitre en bonte. La purification de l'ame est l'acte de cultiver la taqwa (piete protectrice) et de maitriser le fujur (transgression) — c'est l'effort qui rend l'ame meilleure. Ce sens est unique dans cette racine — tous les derives convergent vers l'idee de purification qui produit la croissance.",
        axe1_verset: "Le verset dit man zakkaha — « celui qui l'a purifiee ». Le verbe zakkaha a pour objet l'ame (nafs, via le suffixe -ha qui renvoie au verset 7). Le champ lexical est celui du travail interieur : purifier l'ame. Le verbe est a la forme II qui marque l'effort actif — la purification n'est pas un evenement qui arrive tout seul, c'est un travail que la personne fait sur elle-meme. Le man (celui qui) est indefini — quiconque fait cet effort reussit. La purification est presentee comme la condition necessaire et suffisante de la reussite.",
        axe2_voisins: "Le verset 8 inspirait la perversite et la piete a l'ame. Le verset 9 montre que la reponse correcte a cette inspiration est la purification — cultiver la piete et maitriser la perversite. Le verset 10 montrera que la reponse inverse (corrompre l'ame) mene a l'echec. La purification est donc l'action qui transforme le potentiel positif (taqwa) en realite et neutralise le potentiel negatif (fujur). Le lien est direct : inspiration des deux potentiels (v8) → purification par le developpement du bon potentiel (v9).",
        axe3_sourate: "La purification de l'ame est le message central de la sourate 91. Tout converge vers ce verset : les serments cosmiques (v1-7) servent de temoins, le faconnement et l'inspiration (v7-8) servent de contexte, et le verdict (v9-10) est la conclusion. La purification est l'acte fondamental qui determine le destin de l'ame. La sourate ne dit pas comment purifier — elle dit que la purification mene a la reussite, et laisse les autres sourates detailler les methodes.",
        axe4_coherence: "Le Coran utilise zakka et ses derives dans de nombreux passages. La sourate 87:14 dit : « qad aflaha man tazakka (a reussi celui qui s'est purifie) » — un parallele presque identique avec 91:9 mais avec la forme V (tazakka = se purifier soi-meme) au lieu de la forme II (zakka = purifier activement). La sourate 80:3 utilise yazzakka (il se purifie). La sourate 2:129 parle de yuzakkihim (il les purifie). La racine z-k-w est un pilier du vocabulaire coranique lie a la purification morale et a la zakat (aumone qui purifie les biens).",
        axe5_frequence: "La purification de l'ame est la tache fondamentale du khalifa. L'etre humain recoit une ame faconnee avec deux potentiels (v7-8) et sa mission est de purifier cette ame — de developper le potentiel de piete et de maitriser le potentiel de transgression. La purification n'est pas un acte ponctuel mais un travail continu qui dure toute la vie. Le khalifa qui purifie son ame remplit sa mission et atteint la reussite durable (falah)."
      }
    }
  }, 2);

  // ---- Mise a jour verse_analyses ----
  await sb.from('verse_analyses').update({
    translation_arab: "قَدْ أَفْلَحَ مَن زَكَّىٰهَا",
    full_translation: "A reussi, certes, celui qui la purifie",
    segments: [
      { fr: "A reussi", pos: "verbe", phon: "qad aflaha", arabic: "قَدْ أَفْلَحَ", word_key: "flh", is_particle: false, sense_retenu: "reussir", position: 1 },
      { fr: "celui qui", pos: "particule", phon: "man", arabic: "مَن", is_particle: true, position: 0 },
      { fr: "l'a purifiee", pos: "verbe", phon: "zakkaha", arabic: "زَكَّىٰهَا", word_key: "zkw", is_particle: false, sense_retenu: "purifier", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient trois elements : la particule qad (certes, deja — renforce l'accompli) + le verbe aflaha (il a reussi, forme IV accompli de f-l-h), le pronom relatif man (celui qui), et le verbe zakkaha (il l'a purifiee, forme II accompli de z-k-w avec suffixe -ha referant a l'ame du verset 7). Le Lane's (Edward Lane, 1863) donne pour la forme IV de f-l-h : reussir, obtenir la prosperite durable. Pour la forme II de z-k-w : purifier activement, faire croitre par la purification. La particule qad devant un verbe a l'accompli marque la certitude et l'achevement — « certes il a reussi, c'est un fait etabli ». La construction qad aflaha man est une formule coranique recurrente de verdict solennel. Le suffixe -ha de zakkaha renvoie a nafsin (l'ame) du verset 7 — l'objet de la purification est l'ame evoquee dans le serment.

§JUSTIFICATION§
**reussir** — Le sens retenu est « reussir » pour aflaha. D'apres les sources etymologiques, la forme IV donne : reussir, obtenir la prosperite durable, triompher. L'alternative « prosperer » est acceptable mais « reussir » est plus direct et plus courant en francais. L'alternative « triompher » implique une competition avec un adversaire, ce qui n'est pas dans le texte — la purification n'est pas un combat contre quelqu'un mais un travail sur soi. L'alternative « obtenir le salut » est une interpretation religieuse — le texte dit reussir, pas « etre sauve ».

**purifier** — Le sens retenu est « purifier » pour zakkaha. D'apres les sources etymologiques, la forme II donne : purifier activement, faire croitre par la purification. L'alternative « faire croitre » est le sens second de la racine — la croissance est le resultat de la purification, pas l'acte lui-meme. L'alternative « donner l'aumone » est un sens derive (zakat) qui ne s'applique pas ici — le complement est l'ame, pas les biens.

§CRITIQUE§
Hamidullah traduit : « A reussi, certes, celui qui la purifie ». Notre traduction est quasi identique. Une nuance : Hamidullah traduit zakkaha par « purifie » (present) alors que le verbe arabe est a l'accompli (il l'a purifiee). Ce choix de Hamidullah donne un sens atemporel (quiconque purifie son ame reussit), ce qui est une lecture valide du texte. Notre traduction preserve l'accompli (« l'a purifiee ») pour rester au plus pres de la grammaire arabe, mais les deux approches sont defensibles.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 91:9 — TERMINE');
  console.log('  flh → "reussir" | zkw → "purifier"');
  console.log('  Traduction : "A reussi celui qui l\'a purifiee"');
}

async function verse91_10() {
  console.log('\n=== VERSET 91:10 — وَقَدْ خَابَ مَن دَسَّىٰهَا ===');
  const verse_id = 6053;

  // ---- XYB (خيب) — id=2623 — "echouer" ----
  // Forme: khaba — verbe accompli forme I (il a echoue)
  await upsertVWA(verse_id, 'xyb', 'echouer', {
    sense_chosen: "echouer",
    concept_chosen: "Echec/Deception",
    concepts: {
      "Echec/Deception": {
        status: "retenu",
        senses: ["echouer", "etre decu", "perdre son espoir", "rater", "etre frustre"],
        proof_ctx: "Le sens retenu est « Echec/Deception ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine kh-y-b donne : echouer, etre decu dans ses espoirs, ne pas obtenir ce qu'on cherchait, perdre, etre frustre. Le verbe khaba est a la forme I accompli, troisieme personne du masculin singulier : « il a echoue ». Le Lane's precise que le khayba est l'echec de celui qui esperait obtenir quelque chose et n'a rien recu — c'est une deception causee par la perte de l'esperance. Le kha'ib est celui qui repart les mains vides, qui n'atteint pas son but. L'echec dans cette racine n'est pas une simple erreur — c'est un echec existentiel, la non-realisation d'une finalite. Le parallele avec aflaha (v9) est parfait : aflaha = il a reussi / khaba = il a echoue. Les deux verbes forment une opposition totale. La distinction avec le sens « Perte/Privation » est que la perte designe ce qu'on a perdu (un objet, un bien), tandis que l'echec designe le fait de ne pas avoir atteint son objectif. L'echec est un etat existentiel, la perte est un evenement ponctuel.",
        axe1_verset: "Le verset dit wa-qad khaba man dassaha — « et a echoue celui qui l'a enfouie ». Le verbe khaba est le verdict negatif, precede de wa-qad (et certes). Le champ lexical est celui de la consequence morale : echouer + enfouir. Le wa- initial relie ce verset au precedent (v9) — les deux verdicts sont presentes comme une paire indissociable. La particule qad renforce l'accompli : l'echec est un fait etabli, pas une possibilite. Le man (celui qui) est indefini et generique — quiconque enfouit son ame echoue, sans exception.",
        axe2_voisins: "Le verset 9 disait « a reussi celui qui l'a purifiee ». Le verset 10 oppose : « et a echoue celui qui l'a enfouie ». Le contraste est terme a terme : reussir vs echouer, purifier vs enfouir. Les deux versets forment le verdict central de la sourate — la conclusion de tous les serments (v1-7) et de l'expose sur l'ame (v7-8). Les versets 11-15 passeront a un exemple historique (Thamud) qui illustrera concretement l'echec decrit au verset 10.",
        axe3_sourate: "L'echec est la moitie negative du verdict de la sourate 91. Si la purification mene a la reussite, la corruption (l'enfouissement de l'ame) mene a l'echec. La sourate ne dit pas que l'echec est une punition imposee de l'exterieur — il est la consequence naturelle du choix de corrompre l'ame. L'echec est inherent a la corruption, comme la reussite est inherente a la purification. Le recit de Thamud (v11-15) montrera un exemple collectif de cet echec.",
        axe4_coherence: "Le Coran utilise khaba dans d'autres passages. La sourate 20:61 dit : « quiconque invente un mensonge contre Dieu, il echouera (qad khaba) ». La sourate 20:111 dit : « et aura echoue celui qui porte une injustice (wa-qad khaba man hamala dhulman) ». La sourate 14:15 utilise khaba pour l'echec des oppresseurs. La construction wa-qad khaba man est une formule qui annonce un verdict negatif definitif. Le verbe khaba dans le Coran est toujours associe a un echec total et irremediable — ce n'est pas un echec partiel ou temporaire.",
        axe5_frequence: "L'echec est la consequence ultime de la trahison de la mission du khalifa. Le khalifa qui corrompt son ame — qui enfouit ses potentiels de bien sous les couches de transgression — echoue dans sa mission existentielle. Cet echec n'est pas materiel (on peut echouer spirituellement tout en etant riche et puissant) mais fondamental — c'est l'echec de la raison d'etre. Le verset montre que le destin de l'ame se decide par les choix de la personne, pas par les circonstances exterieures."
      },
      "Perte/Privation": {
        status: "probable",
        senses: ["perdre", "etre prive", "etre depossede", "manquer"],
        proof_ctx: "Le sens de « perte » est present dans la racine kh-y-b. D'apres les sources etymologiques, kha'ib peut designer celui qui a perdu ce qu'il possedait, celui qui est prive de ses biens ou de ses espoirs. La distinction avec le sens retenu (echec) est que la perte est un evenement ponctuel (on perd un objet, un bien, une opportunite) tandis que l'echec est un etat existentiel (on n'a pas atteint sa finalite). Dans le contexte du verset, l'objet de la corruption est l'ame — ce qui est en jeu n'est pas un bien materiel mais la destinee morale. Le sens d'echec rend mieux compte de cette dimension existentielle que le sens de perte. La privation suggere que quelque chose a ete enleve a la personne, alors que l'echec montre que c'est la personne elle-meme qui a manque son objectif par ses propres choix.",
        axe1_verset: "Le complement man dassaha (celui qui l'a enfouie) porte sur l'ame. La construction « a ete prive celui qui a enfoui son ame » est grammaticalement possible mais moins naturelle que « a echoue celui qui l'a enfouie ». La perte suppose un objet exterieur perdu, tandis que l'enfouissement de l'ame est un acte interieur reflexif. Le champ lexical penche vers l'echec existentiel plutot que vers la perte materielle.",
        axe2_voisins: "Le verset 9 utilise aflaha (reussir), pas « gagner » ou « posseder ». Le parallele impose que le verset 10 utilise l'oppose de la reussite, qui est l'echec, pas l'oppose du gain, qui serait la perte. La symetrie aflaha/khaba fonctionne mieux avec reussir/echouer qu'avec gagner/perdre.",
        axe3_sourate: "La sourate parle de la purification et de la corruption de l'ame. Le theme est existentiel et moral, pas materiel. La perte est un mot qui evoque le domaine materiel (perte de biens, de sante), tandis que l'echec evoque le domaine existentiel (echec de la mission, de la finalite). Le theme de la sourate favorise l'echec existentiel.",
        axe4_coherence: "Le Coran utilise khaba dans la sourate 20:111 avec le sens clairement existentiel d'echouer (celui qui porte l'injustice echoue). Le sens de perte materielle n'est pas le sens dominant de khaba dans le Coran — le mot khasira est plus souvent utilise pour la perte materielle. Khaba est reserve a l'echec moral et existentiel.",
        axe5_frequence: "Le sens de perte est moins adapte au theme de la mission du khalifa. Le khalifa ne perd pas quelque chose — il echoue a accomplir sa mission. La distinction est importante : la perte est passive (on subit), l'echec est la consequence d'un choix actif (enfouir l'ame)."
      }
    }
  }, 1);

  // ---- DSS (دسس) — id=2340 — "enfouir" ----
  // Forme: dassaha — verbe accompli forme I + suffixe -ha (il l'a enfouie/corrompue)
  await upsertVWA(verse_id, 'dss', 'enfouir', {
    sense_chosen: "enfouir",
    concept_chosen: "Dissimulation/Enterrement",
    concepts: {
      "Dissimulation/Enterrement": {
        status: "retenu",
        senses: ["enfouir", "enterrer", "dissimuler", "cacher", "enfoncer"],
        proof_ctx: "Le sens retenu est « Dissimulation/Enterrement ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine d-s-s donne : enfouir, enterrer, cacher dans le sol, dissimuler, enfoncer. Le verbe dassa signifie « il a enfoui, il a cache en enterrant ». Le Lane's precise que dassa al-shay'a signifie « il a enfoui la chose dans le sol pour la cacher ». Le verbe dassaha est a la forme I accompli, troisieme personne du masculin singulier, avec le suffixe -ha (referant a l'ame) : « il l'a enfouie ». L'enfouissement de l'ame est une image puissante : celui qui corrompt son ame la cache, l'enfouit sous les couches de transgression, de mensonge et de negligence. L'ame pure est recouverte et disparait sous les debris moraux. Le Lane's note que le mot dassaha est a l'origine dassasaha (forme I redoublee de la racine d-s-s), la troisieme lettre sin ayant ete transformee en ya pour alleger la prononciation. La distinction avec le sens « Corruption » est que l'enfouissement est l'acte physique de cacher/enterrer, tandis que la corruption est le resultat moral de cet acte. L'enfouissement est la cause, la corruption est l'effet. Le texte utilise le verbe d'action (enfouir), pas le resultat (corrompre).",
        axe1_verset: "Le verset dit man dassaha — « celui qui l'a enfouie ». Le verbe dassaha a pour objet l'ame (nafs, via le suffixe -ha). Le champ lexical est celui de la dissimulation : enfouir, cacher, enterrer. L'image est celle de l'ame enterree vivante sous les couches de transgression — elle est la, elle existe, mais elle est recouverte et invisible. Le contraste avec zakkaha (purifier, v9) est saisissant : purifier = faire croitre et resplendir l'ame, enfouir = la cacher et l'etouffer. L'acte d'enfouir implique une volonte deliberee — on n'enfouit pas par accident, on enfouit pour cacher.",
        axe2_voisins: "Le verset 9 disait zakkaha (il l'a purifiee). Le verset 10 oppose dassaha (il l'a enfouie). Le contraste est entre deux traitements opposes de l'ame : la faire croitre par la purification ou l'enterrer par la dissimulation. Les versets 7-8 avaient montre que l'ame est faconnee avec deux potentiels. Le verset 9 montre le traitement positif (cultiver le bien). Le verset 10 montre le traitement negatif (enterrer le bien sous le mal). Les versets 11-15 donneront un exemple historique de ceux qui ont enfoui leurs ames.",
        axe3_sourate: "L'enfouissement de l'ame est le contrepoint de la purification dans le message de la sourate. La sourate dit que l'ame est faconnee avec le potentiel du bien et du mal (v7-8), puis elle dit que la reponse correcte est la purification (v9) et la reponse incorrecte est l'enfouissement (v10). L'image de l'enfouissement est particulierement eloquente dans une sourate qui commence par le soleil — la lumiere eclaire et revele, tandis que l'enfouissement cache et obscurcit. Celui qui enfouit son ame agit contre la lumiere des serments.",
        axe4_coherence: "Le Coran utilise dassa dans la sourate 16:59 pour decrire l'enterrement des filles vivantes : « doit-il la garder malgre la honte ou l'enfouir dans la terre (yudussuhu fi at-turab) ? ». La meme racine d-s-s est utilisee pour l'enterrement physique d'un etre vivant. Le parallele avec 91:10 est frappant : enfouir l'ame vivante est un acte aussi destructeur qu'enfouir une fille vivante. Le Coran utilise la meme racine pour denoncer le meme type d'acte — la destruction par dissimulation.",
        axe5_frequence: "L'enfouissement de l'ame est l'echec le plus grave du khalifa. Au lieu de cultiver les potentiels que la creation a places en lui, il les enterre. L'enfouissement est pire que la simple transgression car il est systemique — ce n'est pas un acte ponctuel de desobeissance mais un processus continu de destruction interieure. Le khalifa qui enfouit son ame ne commet pas une seule erreur, il detruit progressivement sa capacite de faire le bien en la recouvrant couche apres couche."
      },
      "Corruption": {
        status: "probable",
        senses: ["corrompre", "deteriorer", "avilir", "degrader"],
        proof_ctx: "Le sens de « corruption » est une extension du sens d'enfouissement. D'apres les sources etymologiques, dassa nafsahu peut se traduire par « il a corrompu son ame, il l'a rendue vile ». Le Lane's note que dassa nafsahu signifie parfois « il a abaisse et avili son ame par le peche ». Ce sens est le resultat moral de l'enfouissement : quand on enfouit l'ame sous la transgression, elle se corrompt. La distinction avec le sens retenu est que l'enfouissement decrit l'acte concret (cacher, enterrer) tandis que la corruption decrit le resultat (l'ame est deterioree). Le texte coranique utilise le verbe d'action, pas le resultat — il dit « il l'a enfouie », pas « il l'a corrompue ». Le verbe dassa garde son sens premier d'enterrement et de dissimulation, meme quand le contexte est moral. L'enfouissement est plus precis et plus imagerie que la corruption, qui est un terme generique.",
        axe1_verset: "Le sens de corrompre est grammaticalement possible pour dassaha. La phrase « a echoue celui qui l'a corrompue » fonctionne en francais. Cependant, le sens de corruption perd l'image concrete de l'enfouissement que le texte arabe porte. Le verbe dassa est specifique — il evoque l'action de cacher dans le sol — tandis que « corrompre » est generique et pourrait s'appliquer a n'importe quelle forme de degradation. Le texte choisit un verbe precis pour une raison.",
        axe2_voisins: "Le contraste avec zakkaha (purifier) fonctionne aussi bien avec « corrompre » qu'avec « enfouir ». Cependant, le contraste purifier/enfouir est plus riche que purifier/corrompre car il oppose deux images concretes : faire croitre la lumiere vs enterrer dans l'obscurite. La sourate qui commence par le soleil (lumiere) gagne en coherence avec l'image de l'enfouissement (obscurite).",
        axe3_sourate: "La corruption est le theme general de la sourate (purifier vs corrompre l'ame). Cependant, le choix du verbe dassa (enfouir) plutot que afsada (corrompre) est delibere — le Coran choisit une image specifique d'enterrement pour decrire cette corruption. Utiliser « corrompre » comme traduction efface cette specificite.",
        axe4_coherence: "Le Coran utilise le verbe afsada pour la corruption en general et dassa pour l'enfouissement specifique. La sourate 91 choisit dassa, pas afsada — ce choix lexical doit etre respecte dans la traduction. La corruption est le sens derive, l'enfouissement est le sens premier du verbe utilise.",
        axe5_frequence: "Le sens de corruption est valide pour decrire l'echec du khalifa mais il est generique. L'enfouissement est plus precis et plus riche : il montre que le khalifa ne detruit pas son ame (elle existe toujours) mais la cache sous des couches de transgression. L'ame enfouie peut encore etre deterree — la corruption suggere une destruction irreversible que le texte n'affirme pas."
      }
    }
  }, 2);

  // ---- Mise a jour verse_analyses ----
  await sb.from('verse_analyses').update({
    translation_arab: "وَقَدْ خَابَ مَن دَسَّىٰهَا",
    full_translation: "Et est perdu, certes, celui qui la corrompt",
    segments: [
      { fr: "Et a echoue", pos: "verbe", phon: "wa-qad khaba", arabic: "وَقَدْ خَابَ", word_key: "xyb", is_particle: false, sense_retenu: "echouer", position: 1 },
      { fr: "celui qui", pos: "particule", phon: "man", arabic: "مَن", is_particle: true, position: 0 },
      { fr: "l'a enfouie", pos: "verbe", phon: "dassaha", arabic: "دَسَّىٰهَا", word_key: "dss", is_particle: false, sense_retenu: "enfouir", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient trois elements : wa-qad (et certes — wa- de coordination + qad de renforcement) + le verbe khaba (il a echoue, forme I accompli de kh-y-b), le pronom relatif man (celui qui), et le verbe dassaha (il l'a enfouie, forme I accompli de d-s-s avec suffixe -ha referant a l'ame du verset 7). Le Lane's (Edward Lane, 1863) donne pour kh-y-b : echouer, etre decu dans ses espoirs, ne pas obtenir ce qu'on cherchait. Pour d-s-s : enfouir, enterrer, dissimuler, cacher dans le sol. Le wa- initial coordonne ce verset avec le verset 9, formant une paire de verdicts opposes. La particule qad renforce l'accompli comme au verset 9 — l'echec est un fait etabli. Le suffixe -ha de dassaha renvoie a nafsin (l'ame) du verset 7. Le verbe dassa est a l'origine dassasa (racine trilittere d-s-s) dont la troisieme lettre a ete transformee en ya.

§JUSTIFICATION§
**echouer** — Le sens retenu est « echouer » pour khaba. D'apres les sources etymologiques, la racine donne : echouer, etre decu dans ses espoirs, rater. L'alternative « etre decu » est ecartee car la deception est un sentiment passif, tandis que l'echec est un resultat lie a un choix actif (enfouir l'ame). L'alternative « perdre » est ecartee car la perte evoque la privation d'un bien exterieur, alors que l'echec evoque le non-accomplissement d'une mission — ce qui correspond au theme de la sourate. L'alternative « etre frustre » est trop psychologique — le texte parle d'un echec existentiel, pas d'une frustration emotionnelle.

**enfouir** — Le sens retenu est « enfouir » pour dassaha. D'apres les sources etymologiques, la racine donne : enfouir, enterrer, dissimuler, cacher dans le sol. L'alternative « corrompre » est ecartee car elle efface l'image concrete d'enterrement que le verbe arabe porte — dassa signifie specifiquement cacher en enterrant, pas deteriorer en general. L'alternative « cacher » est trop neutre — « enfouir » implique un acte plus profond et plus destructeur que simplement cacher. L'alternative « enterrer » est acceptable mais « enfouir » est plus courant en francais pour un usage metaphorique.

§CRITIQUE§
Hamidullah traduit : « Et est perdu, certes, celui qui la corrompt ». Deux differences significatives. Premierement, « est perdu » pour khaba est une interpretation — le texte dit « a echoue », pas « est perdu ». Etre perdu suggere un etat passif et definitif, tandis qu'echouer est le resultat d'un choix. Ce glissement transforme la consequence d'un choix en etat subi, ce qui attenua la responsabilite individuelle. Deuxiemement, « corrompt » pour dassaha efface l'image concrete d'enfouissement que porte le verbe arabe. Le texte dit « enfouir » — cacher l'ame sous des couches de transgression — pas « corrompre » en general. L'image de l'enfouissement est specifique et deliberee : le Coran aurait pu utiliser afsada (corrompre) s'il avait voulu ce sens, mais il choisit dassa (enfouir) pour evoquer l'acte de cacher le bien sous le mal.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 91:10 — TERMINE');
  console.log('  xyb → "echouer" | dss → "enfouir"');
  console.log('  Traduction : "Et a echoue celui qui l\'a enfouie"');
}

// ================================================================
// DAILY PHRASES — racines qui n'ont pas encore de phrases quotidiennes
// ================================================================

async function dailyPhrases() {
  console.log('\n=== DAILY PHRASES ===');

  // THW (طحو) — id=2622 — etendre
  await insertDaily(2622, 'etendre', 'طَحَىٰ', 'taha', [
    "Elle a etendu la pate sur le plan de travail avant de la mettre au four.",
    "Le berger a etendu sa couverture sur le sol pour s'y installer.",
    "Ils ont etendu le terrain en deblayant les rochers qui le rendaient impraticable."
  ]);

  // LHM (لهم) — id=313 — inspirer
  await insertDaily(313, 'inspirer', 'أَلْهَمَ', 'alhama', [
    "Ce paysage m'a inspire une idee pour mon prochain tableau.",
    "Son courage a inspire toute l'equipe a ne pas abandonner.",
    "La musique l'a inspire et il a ecrit le texte d'une seule traite."
  ]);

  // XYB (خيب) — id=2623 — echouer
  await insertDaily(2623, 'echouer', 'خَابَ', 'khaba', [
    "Il a echoue a l'examen parce qu'il n'avait pas revise.",
    "Le projet a echoue faute de financement suffisant.",
    "Elle a echoue a convaincre ses parents mais n'a pas renonce."
  ]);

  // DSS (دسس) — id=2340 — enfouir
  await insertDaily(2340, 'enfouir', 'دَسَّ', 'dassa', [
    "Le chien a enfoui son os dans le jardin pour le retrouver plus tard.",
    "Elle a enfoui ses sentiments au fond d'elle au lieu d'en parler.",
    "Les enfants ont enfoui un tresor dans le sable de la plage."
  ]);

  console.log('DAILY PHRASES — TERMINE');
}

async function main() {
  console.log('=== PIPELINE SOURATE 91 (Ash-Shams) — PARTIE 2 (versets 6-10) ===\n');

  await verse91_6();
  await verse91_7();
  await verse91_8();
  await verse91_9();
  await verse91_10();
  await dailyPhrases();

  console.log('\n=== PARTIE 2 TERMINEE (versets 6-10) ===');
  console.log('Resume:');
  console.log('  v6: ard → "terre" | Thw → "etendre"');
  console.log('  v7: nfs → "ame" | swy → "faconner"');
  console.log('  v8: lhm → "inspirer" | fjr → "perversite" | wqy → "piete"');
  console.log('  v9: flh → "reussir" | zkw → "purifier"');
  console.log('  v10: xyb → "echouer" | dss → "enfouir"');
}

main().catch(console.error);
