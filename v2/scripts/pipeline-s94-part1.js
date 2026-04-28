// Pipeline Sourate 94 (Ash-Sharh / L'Ouverture) — Partie 1: Versets 1-4
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
// CONTEXTE SOURATE 94 (Ash-Sharh / L'Ouverture)
// ================================================================
// Structure : 4 bienfaits rappeles (v1-4), 2 affirmations identiques (v5-6),
// 2 injonctions (v7-8). Theme : rappel des bienfaits accordes au prophete
// (ouverture de la poitrine, decharge du fardeau, elevation de la mention)
// puis encouragement (avec la difficulte vient la facilite) et injonction
// de perseverer dans l'effort et de se tourner vers Dieu.
// Versets voisins : S93 (Ad-Duha) et S95 (At-Tin).

async function verse94_1() {
  console.log('\n=== VERSET 94:1 — أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ ===');
  const verse_id = 6091;

  // ---- SHRH (ش ر ح) — id=2063 — "ouvrir" ----
  // Forme: nashrahu — verbe forme I inaccompli majzum (apres lam de negation), 1ere pers. pluriel
  // alam nashrahu = "n'avons-nous pas ouvert"
  await upsertVWA(verse_id, 'shrh', 'ouvrir', {
    sense_chosen: "ouvrir",
    concept_chosen: "Ouverture/Expansion",
    concepts: {
      "Ouverture/Expansion": {
        status: "retenu",
        senses: ["ouvrir (la poitrine)", "expliquer", "elargir"],
        proof_ctx: "Le sens retenu est « Ouverture/Expansion ». Le Lane's (Edward Lane, 1863) donne pour la racine sh-r-h : ouvrir, elargir, etendre, exposer en detail, expliquer. Le verbe nashrahu est a la forme I inaccompli majzum (apres la particule de negation interrogative alam), premiere personne du pluriel : « n'avons-nous pas ouvert ? ». Le sens premier est l'ouverture physique — ouvrir ce qui est ferme, elargir ce qui est etroit. Le mot est suivi du complement sadraka (ta poitrine) — ouvrir la poitrine signifie elargir l'espace interieur, rendre la personne receptive et sereine. Le Lane's donne specifiquement sharaha sadrahu : il a ouvert sa poitrine, c'est-a-dire il l'a rendue spacieuse, il l'a elargie. Le sens d'explication est secondaire — sharaha signifie aussi exposer en detail, couper la viande en tranches fines, mais dans ce contexte l'objet (la poitrine) oriente vers l'ouverture et l'elargissement. Il n'y a pas d'autre concept a comparer — la racine ne porte qu'un seul regroupement semantique dans la base.",
        axe1_verset: "Le verset dit « n'avons-nous pas ouvert pour toi ta poitrine ? ». Le verbe nashrahu est suivi de la preposition laka (pour toi) et du complement sadraka (ta poitrine). Le champ lexical est celui de l'ouverture et de l'interiorite : ouvrir + pour toi + poitrine. L'ouverture de la poitrine implique un elargissement de l'espace interieur — la poitrine est le siege de la comprehension et de la serenite en arabe. L'ensemble du verset decrit un bienfait accorde : rendre l'espace interieur large et accueillant.",
        axe2_voisins: "Les versets 2-3 decrivent un deuxieme bienfait : la decharge du fardeau qui pesait sur le dos. Le verset 4 un troisieme : l'elevation de la mention. Les trois bienfaits forment une progression : ouverture interieure (v1) → allègement du poids (v2-3) → elevation publique (v4). L'ouverture de la poitrine est le premier bienfait, le plus intime — il concerne l'etat interieur avant les bienfaits exterieurs.",
        axe3_sourate: "La sourate 94 est structuree autour de trois bienfaits (v1-4), deux affirmations sur la facilite (v5-6), et deux injonctions (v7-8). L'ouverture de la poitrine ouvre la sourate comme le bienfait fondamental — sans cette ouverture interieure, les autres bienfaits (allegement, elevation) n'auraient pas de sens. Le theme de la sourate est l'encouragement par le rappel des bienfaits.",
        axe4_coherence: "Le Coran utilise sharaha as-sadr dans d'autres passages : « celui a qui Dieu a ouvert la poitrine pour la soumission » (39:22), « Seigneur, ouvre-moi ma poitrine » (20:25 — priere de Moise). L'ouverture de la poitrine est un theme coranique recurrent qui designe la receptivite, la serenite et la capacite a comprendre. Le Coran oppose la poitrine ouverte (spacieuse) a la poitrine serree (angoissee) : « celui dont la poitrine se serre » (6:125).",
        axe5_frequence: "L'ouverture de la poitrine est la condition premiere de la mission du khalifa — pour agir avec justice et lucidite, il faut d'abord etre intérieurement serein et receptif. Moise lui-meme demande cette ouverture avant de commencer sa mission (20:25). Le khalifa dont la poitrine est ouverte est capable de recevoir la verite et d'agir en consequence."
      }
    }
  }, 1);

  // ---- SDR (ص د ر) — id=1245 — "poitrine" ----
  // Forme: sadraka — nom au accusatif + suffixe possessif -ka (ta)
  await upsertVWA(verse_id, 'sdr', 'poitrine', {
    sense_chosen: "poitrine",
    concept_chosen: "Poitrine/Intériorité",
    concepts: {
      "Poitrine/Intériorité": {
        status: "retenu",
        senses: ["coeur (interieur)", "poitrine"],
        proof_ctx: "Le sens retenu est « Poitrine/Interiorite ». Le Lane's donne pour la racine s-d-r : la poitrine, la partie superieure et anterieure du corps, le siege de la conscience et des sentiments. Le mot sadraka est un nom a l'accusatif (complement direct de nashrahu) avec le suffixe possessif -ka (ta) : « ta poitrine ». Le sens de poitrine est retenu car c'est l'objet physique de l'ouverture — mais la poitrine en arabe designe aussi l'interiorite de la personne, le lieu ou reside la comprehension et les emotions. Le concept « Emission/Sortie » (sadara = emettre, sortir) et « Eau/Liquide » (source) sont nuls dans ce contexte car le verset parle clairement de l'espace interieur de la personne, pas de l'emission ni de l'eau.",
        axe1_verset: "Le verset dit nashrahu laka sadraka — « nous avons ouvert ta poitrine ». Le mot sadr est le complement direct du verbe ouvrir. Le champ lexical est celui du corps et de l'interiorite : ouvrir + poitrine. La poitrine est la partie du corps qui contient le coeur — en arabe, le sadr est le siege des pensees, des sentiments et de la comprehension. Ouvrir le sadr, c'est rendre la personne receptive et apaisee.",
        axe2_voisins: "Le verset 2 parle du fardeau (wizr) et le verset 3 du dos (zahr). La progression poitrine (v1) → dos (v3) couvre le corps entier : le devant (poitrine = interiorite) et le derriere (dos = ce qui porte les charges). Les bienfaits touchent la personne de l'interieur vers l'exterieur.",
        axe3_sourate: "La poitrine ouvre la sourate comme le premier lieu touche par le bienfait divin. La sourate traite de l'allegement et de l'encouragement — la poitrine sereine est le point de depart necessaire pour recevoir les autres bienfaits.",
        axe4_coherence: "Le Coran utilise sadr dans de nombreux contextes : « ce qui est dans les poitrines » (3:29) designe les pensees cachees, « la poitrine serree » (6:125) designe l'angoisse, « la poitrine spacieuse » (39:22) designe la serenite. Le sadr est toujours le siege de l'interiorite dans le Coran — jamais un simple organe physique sans dimension interieure.",
        axe5_frequence: "La poitrine du khalifa est le siege de sa conscience et de sa lucidite. Une poitrine ouverte permet au khalifa de recevoir la verite, de comprendre sa mission et d'agir avec serenite. La poitrine serree empeche l'action juste — l'ouverture est donc le prealable a toute mission."
      },
      "Émission/Sortie": {
        status: "nul",
        senses: ["emettre", "sortir"],
        proof_ctx: "Le sens d'emission (sadara = sortir, emettre) est hors sujet. Le verset parle d'ouvrir la poitrine, pas d'en faire sortir quelque chose. Le complement sadraka est l'objet de l'ouverture, pas la source d'une emission."
      },
      "Eau/Liquide": {
        status: "nul",
        senses: ["source (debut)"],
        proof_ctx: "Le sens de source (d'eau) est hors sujet. Le verset ne parle pas d'eau ni de source. Le mot sadr ici designe la poitrine comme espace interieur, pas un point d'origine."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
    full_translation: "N'avons-Nous pas ouvert pour toi ta poitrine ?",
    segments: [
      { fr: "N'avons-nous pas", pos: "particule", phon: "alam", arabic: "أَلَمْ", is_particle: true, position: 0 },
      { fr: "ouvert", pos: "verbe", phon: "nashrahu", arabic: "نَشْرَحْ", word_key: "shrh", is_particle: false, sense_retenu: "ouvrir (la poitrine)", position: 1 },
      { fr: "pour toi", pos: "particule", phon: "laka", arabic: "لَكَ", is_particle: true, position: 0 },
      { fr: "ta poitrine", pos: "nom", phon: "sadraka", arabic: "صَدْرَكَ", word_key: "sdr", is_particle: false, sense_retenu: "poitrine", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une question rhetorique negative qui attend une reponse affirmative : alam nashrahu laka sadraka — « n'avons-nous pas ouvert pour toi ta poitrine ? ». La particule alam est composee de la hamza interrogative (a-) et de la particule de negation lam qui met le verbe inaccompli au majzum (tronque). Cette construction alam + verbe inaccompli signifie « n'avons-nous pas fait ? » — la reponse attendue est « si, bien sur ». Le verbe nashrahu est la forme I inaccompli de la racine sh-r-h, premiere personne du pluriel (Nous). Le Lane's (Edward Lane, 1863) donne pour sharaha : ouvrir, elargir, etendre, exposer en detail. Le mot sadraka est un nom a l'accusatif (complement direct) avec le suffixe possessif -ka (ta poitrine). Le Lane's donne pour sadr : la poitrine, la partie superieure du corps, le siege de la conscience. La construction « ouvrir la poitrine » signifie elargir l'espace interieur de la personne, la rendre receptive et sereine.

§JUSTIFICATION§
**ouvrir** — Le sens retenu est « Ouverture/Expansion ». Le mot « ouvrir » est choisi car il capture le geste premier de la racine sh-r-h : ouvrir ce qui est ferme, elargir ce qui est etroit. L'alternative « expliquer » est ecartee car l'objet est la poitrine (on n'explique pas une poitrine). L'alternative « elargir » est acceptable mais « ouvrir » est plus courant en francais et plus concret — on dit « ouvrir son coeur » dans la vie quotidienne.

**poitrine** — Le sens retenu est « Poitrine/Interiorite ». Le mot « poitrine » est choisi car c'est le sens premier de sadr dans le Lane's. L'alternative « coeur » est ecartee car le Coran distingue sadr (poitrine, espace interieur general) de qalb (coeur, organe de la pensee) — les deux ne sont pas interchangeables. L'alternative « interieur » est trop vague.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens : « N'avons-Nous pas ouvert pour toi ta poitrine ? » (Hamidullah). Aucun mot ne fait basculer le sens du verset.`
  }).eq('verse_id', verse_id);

  // Daily phrases
  await insertDaily(2063, 'ouvrir', 'شَرَحَ', 'sharaha', [
    "Il m'a ouvert les yeux sur cette situation.",
    "Elle a ouvert le sujet avec beaucoup de delicatesse.",
    "Ce livre m'a ouvert l'esprit."
  ]);

  console.log('VERSET 94:1 — TERMINE');
  console.log('  shrh (ش ر ح) → sens "Ouverture/Expansion" → mot francais "ouvrir"');
  console.log('  sdr (ص د ر) → sens "Poitrine/Interiorite" → mot francais "poitrine"');
  console.log('  Traduction : "N\'avons-nous pas ouvert pour toi ta poitrine ?"');
}

async function verse94_2() {
  console.log('\n=== VERSET 94:2 — وَوَضَعْنَا عَنكَ وِزْرَكَ ===');
  const verse_id = 6092;

  // ---- WDE (و ض ع) — id=1262 — "deposer" ----
  // Forme: wada'na — verbe forme I accompli, 1ere pers. pluriel + preposition 'anka (de toi)
  await upsertVWA(verse_id, 'wde', 'deposer', {
    sense_chosen: "deposer",
    concept_chosen: "Dépôt/Placement",
    concepts: {
      "Dépôt/Placement": {
        status: "retenu",
        senses: ["poser", "accoucher", "etablir"],
        proof_ctx: "Le sens retenu est « Depot/Placement ». Le Lane's donne pour la racine w-d-' : poser, deposer, mettre quelque chose a terre, placer, etablir. Le verbe wada'na est la forme I accompli, premiere personne du pluriel : « nous avons pose ». Suivi de la preposition 'anka (de toi, loin de toi), le sens devient « nous avons depose loin de toi » = « nous t'avons decharge de ». Le geste est celui de prendre un objet lourd et de le poser par terre — deposer la charge. Le concept « Abaissement » (diminuer) est nul dans ce contexte car le verset ne parle pas de diminution mais de decharge d'un fardeau. La preposition 'an (de, loin de) confirme qu'il s'agit de retirer quelque chose, pas de le diminuer.",
        axe1_verset: "Le verset dit wada'na 'anka wizraka — « nous avons depose de toi ton fardeau ». Le verbe wada'na est suivi de la preposition 'anka (de toi) et du complement wizraka (ton fardeau). Le champ lexical est celui de l'allegement : deposer + de toi + fardeau. Le geste est concret — prendre une charge et la poser. La preposition 'an marque l'eloignement : le fardeau est retire, deplace loin de la personne.",
        axe2_voisins: "Le verset 1 parle d'ouverture de la poitrine — un bienfait interieur. Le verset 2 passe a l'allegement d'un poids — un bienfait physique. Le verset 3 precise que ce fardeau « pesait sur ton dos » (anqada zahraka). La progression est : ouverture (v1) → depot du fardeau (v2) → description du fardeau (v3) → elevation (v4). Le depot est le deuxieme bienfait, entre l'ouverture interieure et l'elevation publique.",
        axe3_sourate: "Le depot du fardeau s'inscrit dans le theme de l'encouragement. La sourate rappelle que les difficultes passees ont ete alleviees — le fardeau a ete depose. Ce bienfait prepare l'affirmation des versets 5-6 : avec la difficulte vient la facilite.",
        axe4_coherence: "Le Coran utilise wada'a dans d'autres contextes : « poser la guerre son fardeau » (47:4), « depose le fardeau de dessus les gens » (7:157). Le geste de deposer un fardeau est un theme coranique de liberation et d'allegement. Le verbe est associe a l'idee de retirer une contrainte ou une obligation pesante.",
        axe5_frequence: "Le depot du fardeau permet au khalifa de se consacrer a sa mission sans etre paralyse par le poids du passe. L'allegement est la condition de l'action future — celui dont le fardeau est depose peut se lever et agir."
      },
      "Abaissement": {
        status: "nul",
        senses: ["diminuer"],
        proof_ctx: "Le sens de diminution est hors sujet. Le verset ne parle pas de diminuer quelque chose mais de deposer un fardeau. La preposition 'an (de, loin de) confirme le retrait, pas la diminution."
      }
    }
  }, 1);

  // ---- WZR (و ز ر) — id=1749 — "fardeau" ----
  // Forme: wizraka — nom a l'accusatif + suffixe possessif -ka (ton)
  await upsertVWA(verse_id, 'wzr', 'fardeau', {
    sense_chosen: "fardeau",
    concept_chosen: "Charge/Péché",
    concepts: {
      "Charge/Péché": {
        status: "retenu",
        senses: ["fardeau", "peche", "poids"],
        proof_ctx: "Le sens retenu est « Charge/Peche ». Le Lane's donne pour la racine w-z-r : porter un fardeau, peche, charge, poids lourd. Le mot wizraka est un nom a l'accusatif avec le suffixe possessif -ka : « ton fardeau ». Le Lane's donne wizr comme le fardeau lourd, la charge difficile a porter — et par extension le peche (car le peche est un fardeau moral). Le sens de « fardeau » est retenu car le contexte du verset parle de deposer un poids (v2) qui pesait sur le dos (v3). Le mot wizr designe d'abord la charge physique, puis la charge morale. Le concept « Aide/Soutien » (wazir = ministre, celui qui porte le fardeau d'un autre) est nul ici car le verset parle du fardeau lui-meme, pas de celui qui aide a le porter.",
        axe1_verset: "Le verset dit wada'na 'anka wizraka — « nous avons depose de toi ton fardeau ». Le mot wizr est l'objet qui est depose. Le champ lexical est celui du poids et de l'allegement : deposer + fardeau. Le wizr est ce qui pese — un objet lourd, une charge qu'on porte sur le dos. Le verset 3 precise que ce fardeau pesait sur le dos, confirmant le sens physique de charge lourde.",
        axe2_voisins: "Le verset 1 ouvre la poitrine, le verset 2 depose le fardeau, le verset 3 precise que ce fardeau faisait plier le dos. Le wizr est donc decrit comme un poids si lourd qu'il faisait craquer le dos (anqada zahraka). La progression physique est claire : ouverture du devant (poitrine) + decharge de ce qui pesait sur le dos.",
        axe3_sourate: "Le fardeau est le deuxieme element des bienfaits rappeles. La sourate ne precise pas la nature de ce fardeau — le texte dit simplement « ton fardeau ». Le theme est l'allegement et l'encouragement, pas l'identification du contenu du fardeau.",
        axe4_coherence: "Le Coran utilise wizr dans d'autres passages : « aucune ame ne portera le wizr d'une autre » (6:164), « ils portent leurs fardeaux sur leurs dos » (6:31). Le wizr est toujours un poids lourd, une charge morale ou physique. Dans 6:31, le lien entre wizr et dos est explicite — comme dans les versets 94:2-3.",
        axe5_frequence: "Le fardeau depose permet au khalifa d'avancer. La mission de justice ne peut etre accomplie par celui qui ploie sous le poids — l'allegement est la liberation qui precede l'action. Le bienfait n'est pas un privilege mais une condition necessaire de la mission."
      },
      "Aide/Soutien": {
        status: "nul",
        senses: ["ministre"],
        proof_ctx: "Le sens de ministre (wazir = celui qui aide a porter) est hors sujet. Le verset parle du fardeau depose, pas d'un aide ou d'un soutien. Le mot wizr ici est la charge elle-meme."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَوَضَعْنَا عَنكَ وِزْرَكَ",
    full_translation: "et déposé de toi ton fardeau,",
    segments: [
      { fr: "et nous avons depose", pos: "verbe", phon: "wa-wada'na", arabic: "وَوَضَعْنَا", word_key: "wde", is_particle: false, sense_retenu: "poser", position: 1 },
      { fr: "de toi", pos: "particule", phon: "'anka", arabic: "عَنكَ", is_particle: true, position: 0 },
      { fr: "ton fardeau", pos: "nom", phon: "wizraka", arabic: "وِزْرَكَ", word_key: "wzr", is_particle: false, sense_retenu: "fardeau", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par la conjonction wa- (et) qui lie ce bienfait au precedent. Le verbe wada'na est la forme I accompli de la racine w-d-' (deposer, poser), premiere personne du pluriel (Nous). Le Lane's (Edward Lane, 1863) donne pour wada'a : poser par terre, deposer, mettre a sa place. La preposition 'anka (de toi, loin de toi) transforme « poser » en « deposer loin de toi » — c'est le geste de retirer une charge et de la poser par terre. Le nom wizraka est a l'accusatif (complement direct) avec le suffixe possessif -ka (ton). Le Lane's donne pour wizr : fardeau lourd, charge, poids — et par extension le peche (car le peche est un poids moral). Le mot designe ici la charge concrete qui pesait sur la personne.

§JUSTIFICATION§
**deposer** — Le sens retenu est « Depot/Placement ». Le mot « deposer » est choisi car il combine le geste de poser avec l'idee d'eloignement (preposition 'an). L'alternative « poser » est trop neutre — on pose un verre sur la table mais on depose un fardeau dont on se decharge. L'alternative « retirer » est ecartee car elle ne contient pas l'idee de placement au sol.

**fardeau** — Le sens retenu est « Charge/Peche ». Le mot « fardeau » est choisi car il designe une charge lourde et difficile a porter, ce que le verset 3 confirme (il faisait plier le dos). L'alternative « poids » est trop generique — un poids peut etre leger, un fardeau est par definition lourd. L'alternative « peche » est ecartee car le texte ne precise pas la nature de la charge — il dit simplement « ton fardeau ». Traduire par « peche » serait une interpretation.

§CRITIQUE§
Hamidullah traduit : « et depose ton fardeau ». Notre traduction est identique. Certaines traductions donnent « peche » au lieu de « fardeau » — ce choix vient de l'exegese qui identifie le wizr comme les peches du Prophete. Mais le texte dit wizr (fardeau/charge), pas dhanb (faute). Le Lane's donne d'abord le sens physique de charge lourde. Traduire par « peche » ajoute une interpretation absente du texte.`
  }).eq('verse_id', verse_id);

  // Daily phrases
  await insertDaily(1262, 'deposer', 'وَضَعَ', "wada'a", [
    "J'ai depose mes affaires a l'entree.",
    "Elle a depose sa candidature ce matin.",
    "Il a depose le bebe dans son berceau."
  ]);
  await insertDaily(1749, 'fardeau', 'وِزْر', "wizr", [
    "Ce travail est un vrai fardeau sur mes epaules.",
    "Elle porte le fardeau de toute la famille.",
    "Il s'est libere de ce fardeau apres des annees."
  ]);

  console.log('VERSET 94:2 — TERMINE');
  console.log('  wde (و ض ع) → sens "Depot/Placement" → mot francais "deposer"');
  console.log('  wzr (و ز ر) → sens "Charge/Peche" → mot francais "fardeau"');
  console.log('  Traduction : "et nous avons depose de toi ton fardeau"');
}

async function verse94_3() {
  console.log('\n=== VERSET 94:3 — ٱلَّذِىٓ أَنقَضَ ظَهْرَكَ ===');
  const verse_id = 6093;

  // ---- NQD (ن ق ض) — id=424 — "faire plier" ----
  // Forme: anqada — verbe forme IV accompli, 3eme pers. singulier
  // Forme IV ajoute le sens causatif : "faire rompre" ou "ecraser"
  await upsertVWA(verse_id, 'nqd', 'accabler', {
    sense_chosen: "accabler",
    concept_chosen: "Rupture/Annulation",
    concepts: {
      "Rupture/Annulation": {
        status: "retenu",
        senses: ["rompre", "annuler", "defaire", "trahir un pacte"],
        proof_ctx: "Le sens retenu est « Rupture/Annulation ». Le Lane's donne pour la racine n-q-d : rompre, casser, defaire, annuler un pacte, briser un engagement. Le verbe anqada est a la forme IV accompli (af'ala), 3eme personne du singulier. La forme IV ajoute une dimension causative : « faire rompre », « faire craquer ». Le sujet du verbe est le fardeau (wizr, v2) et le complement est zahraka (ton dos). Le sens est : le fardeau a fait rompre/craquer ton dos. Le Lane's donne specifiquement anqada az-zahra : il a fait craquer le dos sous le poids, il a accable le dos au point de le briser. Le sens de « accabler » est retenu car il capture l'idee de la rupture sous le poids sans aller jusqu'a la fracture physique — c'est une image de la pression extreme. Les autres sens de la racine (annuler un pacte, trahir) sont nuls ici car le sujet est un fardeau qui pese sur un dos, pas un engagement rompu.",
        axe1_verset: "Le verset dit alladhi anqada zahraka — « qui a accable ton dos ». Le pronom relatif alladhi renvoie au fardeau du verset 2 (wizraka). Le verbe anqada (forme IV, causatif) decrit l'effet du fardeau sur le dos. Le champ lexical est celui du poids et de la souffrance physique : fardeau + accabler/faire craquer + dos. L'image est celle d'un porteur dont le dos craque sous la charge — le bruit du craquement (naqd) evoque la pression extreme.",
        axe2_voisins: "Le verset 2 nomme le fardeau, le verset 3 decrit son effet. C'est une expansion poetique : au lieu de dire simplement « ton fardeau lourd », le texte dit « ton fardeau qui a fait craquer ton dos ». Le verset 4 passe a l'elevation — apres la description de la souffrance, le bienfait de la reconnaissance publique.",
        axe3_sourate: "Le verset 3 est une incise qui amplifie le bienfait du verset 2. En montrant a quel point le fardeau etait lourd (au point de faire craquer le dos), le texte magnifie le geste de l'avoir depose. Plus le fardeau etait ecrasant, plus sa decharge est un bienfait immense.",
        axe4_coherence: "Le Coran utilise naqada dans le contexte de la rupture des pactes : « ceux qui rompent l'engagement de Dieu apres l'avoir contracte » (2:27). Ici le sens est physique — le craquement sous le poids — mais la meme racine evoque l'idee de quelque chose qui cede sous la pression. Le lien semantique entre la rupture d'un pacte et le craquement d'un dos est la meme idee de cedation sous contrainte.",
        axe5_frequence: "Le khalifa porte des charges lourdes — responsabilites, epreuves, missions. Le verset decrit une charge si lourde qu'elle menace de briser celui qui la porte. Le bienfait de la decharge (v2) prend tout son sens quand on comprend la gravite de la charge (v3)."
      }
    }
  }, 1);

  // ---- ZHR (ظ ه ر) — id=668 — "dos" ----
  // Forme: zahraka — nom a l'accusatif + suffixe possessif -ka
  await upsertVWA(verse_id, 'zhr', 'dos', {
    sense_chosen: "dos",
    concept_chosen: "Manifestation/Dos",
    concepts: {
      "Manifestation/Dos": {
        status: "retenu",
        senses: ["apparaitre", "dos", "manifeste", "prevaloir"],
        proof_ctx: "Le sens retenu est « Manifestation/Dos ». Le Lane's donne pour la racine z-h-r : le dos, la partie superieure et exterieure, ce qui est apparent, manifeste, prevaloir. Le mot zahraka est un nom a l'accusatif avec le suffixe possessif -ka : « ton dos ». Le sens de « dos » est retenu car le mot est le complement direct de anqada (accabler) — c'est le dos physique qui porte la charge. Le dos (zahr) est la partie du corps qui porte les fardeaux — c'est le lieu anatomique de la charge. Les autres sens de la racine (apparaitre, manifeste, prevaloir) sont hors sujet car le contexte est physique : un fardeau qui accable le dos.",
        axe1_verset: "Le verset dit anqada zahraka — « a accable ton dos ». Le mot zahr est le complement direct du verbe accabler. Le champ lexical est physique : fardeau (v2) + accabler/faire craquer + dos. Le dos est la partie du corps qui porte les charges — le texte decrit la souffrance physique du porteur ecrase par le poids.",
        axe2_voisins: "Le verset 1 parlait de la poitrine (sadr, le devant) et le verset 3 du dos (zahr, l'arriere). Les deux faces du corps sont couvertes : l'interieur (poitrine = emotions, comprehension) et l'exterieur (dos = ce qui porte les charges). La progression poitrine → dos decrit la personne entiere, de l'intime au physique.",
        axe3_sourate: "Le dos accable est le point culminant de la souffrance avant l'allegement. La sourate utilise cette image pour maximiser le contraste entre la difficulte passee et la facilite a venir (v5-6).",
        axe4_coherence: "Le Coran utilise zahr dans le sens de dos en 6:31 : « ils portent leurs fardeaux sur leurs dos » — exactement le meme contexte qu'ici. Le lien entre wizr (fardeau) et zahr (dos) est une paire coranique recurrente. Le Coran utilise aussi zahara dans le sens d'apparaitre : « ce qui est apparent du peche » (6:120) — mais ce sens est hors sujet ici.",
        axe5_frequence: "Le dos du khalifa porte les responsabilites de sa mission. Le verset decrit le moment ou la charge devient insupportable — le dos craque. Le bienfait de la decharge (v2) est la reconnaissance que la mission ne doit pas ecraser celui qui la porte."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "ٱلَّذِىٓ أَنقَضَ ظَهْرَكَ",
    full_translation: "qui accablait ton dos ?",
    segments: [
      { fr: "qui", pos: "pronom relatif", phon: "alladhi", arabic: "ٱلَّذِىٓ", is_particle: true, position: 0 },
      { fr: "a accable", pos: "verbe", phon: "anqada", arabic: "أَنقَضَ", word_key: "nqd", is_particle: false, sense_retenu: "rompre", position: 1 },
      { fr: "ton dos", pos: "nom", phon: "zahraka", arabic: "ظَهْرَكَ", word_key: "zhr", is_particle: false, sense_retenu: "dos", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une proposition relative qui qualifie le fardeau du verset 2 : alladhi anqada zahraka — « qui a accable ton dos ». Le pronom relatif alladhi (qui) renvoie a wizraka (ton fardeau). Le verbe anqada est la forme IV (causative) accompli de la racine n-q-d, 3eme personne du singulier. La forme IV (schema af'ala) ajoute le sens causatif : non pas « il s'est rompu » mais « il a fait rompre, il a fait craquer ». Le Lane's (Edward Lane, 1863) donne pour anqada az-zahra : il a fait craquer le dos sous le poids, il l'a accable au point de le faire plier. Le mot zahraka est un nom a l'accusatif (complement direct) avec le suffixe -ka (ton). Le Lane's donne pour zahr : le dos, la partie superieure exterieure du corps.

§JUSTIFICATION§
**accabler** — Le sens retenu est « Rupture/Annulation ». Le mot « accabler » est choisi car il rend l'idee d'une pression extreme qui menace de briser, sans aller jusqu'a la fracture reelle. L'alternative « faire craquer » est plus litterale (la racine evoque le bruit du craquement) mais moins naturelle en francais courant — on dit « accable par le travail » mais pas « fait craquer par le travail ». L'alternative « rompre » est ecartee car elle implique une fracture effective, alors que le texte decrit une pression extreme, pas une blessure reelle.

**dos** — Le sens retenu est « Manifestation/Dos ». Le mot « dos » est choisi car c'est le sens physique premier et direct dans ce contexte. Aucune alternative ne se justifie — le texte parle bien du dos anatomique.

§CRITIQUE§
Hamidullah traduit : « qui accablait ton dos ». Notre traduction est identique. Aucun mot ne fait basculer le sens du verset.`
  }).eq('verse_id', verse_id);

  // Daily phrases
  await insertDaily(668, 'dos', 'ظَهْر', 'zahr', [
    "J'ai mal au dos depuis ce matin.",
    "Il m'a tourne le dos quand je lui ai parle.",
    "Porte ce sac sur ton dos, c'est plus facile."
  ]);

  console.log('VERSET 94:3 — TERMINE');
  console.log('  nqd (ن ق ض) → sens "Rupture/Annulation" → mot francais "accabler"');
  console.log('  zhr (ظ ه ر) → sens "Manifestation/Dos" → mot francais "dos"');
  console.log('  Traduction : "qui a accable ton dos"');
}

async function verse94_4() {
  console.log('\n=== VERSET 94:4 — وَرَفَعْنَا لَكَ ذِكْرَكَ ===');
  const verse_id = 6094;

  // ---- RFE (ر ف ع) — id=711 — "elever" ----
  // Forme: rafa'na — verbe forme I accompli, 1ere pers. pluriel
  await upsertVWA(verse_id, 'rfe', 'elever', {
    sense_chosen: "elever",
    concept_chosen: "Élévation/Exaltation",
    concepts: {
      "Élévation/Exaltation": {
        status: "retenu",
        senses: ["lever", "elever", "hausser", "exalter"],
        proof_ctx: "Le sens retenu est « Elevation/Exaltation ». Le Lane's donne pour la racine r-f-' : lever, elever, hausser, exalter, elever le rang de quelqu'un. Le verbe rafa'na est la forme I accompli, premiere personne du pluriel : « nous avons eleve ». Suivi de laka (pour toi) et de dhikraka (ta mention), le sens est « nous avons eleve pour toi ta mention ». L'elevation est un mouvement vers le haut — rendre quelque chose plus visible, plus reconnu, plus haut en dignite. Le concept « Suppression » (enlever) est nul car le verset parle d'elever, pas de retirer — la preposition laka (pour toi) confirme le bienfait positif.",
        axe1_verset: "Le verset dit rafa'na laka dhikraka — « nous avons eleve pour toi ta mention ». Le verbe rafa'na est suivi de la preposition laka (pour toi, a ton profit) et du complement dhikraka (ta mention). Le champ lexical est celui de l'honneur et de la reconnaissance : elever + pour toi + mention. L'elevation de la mention signifie rendre le nom celebre, reconnu, respecte — c'est un bienfait public, visible par tous.",
        axe2_voisins: "Le verset 1 parle de l'ouverture interieure (poitrine), les versets 2-3 de l'allegement du fardeau (physique), et le verset 4 de l'elevation publique (mention). La progression va de l'intime (poitrine) au physique (dos) au public (mention) — chaque bienfait est plus visible que le precedent. L'elevation de la mention est le troisieme et dernier bienfait rappele avant l'affirmation des versets 5-6.",
        axe3_sourate: "L'elevation de la mention est le sommet des bienfaits. Apres avoir ouvert l'interieur et allege le poids, le texte affirme que le nom du destinataire est eleve. La sourate passe ensuite a l'encouragement (v5-6) et a l'injonction (v7-8) — les bienfaits rappeles fondent la confiance en l'avenir.",
        axe4_coherence: "Le Coran utilise rafa'a dans de nombreux contextes : rafa'a as-samawata (il a eleve les cieux, 55:7), rafa'a ba'dahum darajatin (il a eleve certains en degres, 2:253). L'elevation est un acte divin frequent dans le Coran — elever les cieux, les montagnes, les rangs. Ici l'objet de l'elevation est la mention (dhikr), pas une realite physique.",
        axe5_frequence: "L'elevation de la mention reconnait publiquement la mission du khalifa. La reconnaissance n'est pas un privilege mais un outil — un nom eleve porte la parole plus loin et influence plus de gens. L'elevation sert la mission, pas l'ego."
      },
      "Suppression": {
        status: "nul",
        senses: ["enlever"],
        proof_ctx: "Le sens d'enlever est hors sujet. Le verset parle d'elever (mouvement vers le haut), pas de retirer (mouvement de disparition). La preposition laka (pour toi) confirme le bienfait positif."
      }
    }
  }, 1);

  // ---- DKR (ذ ك ر) — id=1688 — "mention" ----
  // Forme: dhikraka — nom a l'accusatif + suffixe possessif -ka
  await upsertVWA(verse_id, 'dkr', 'mention', {
    sense_chosen: "mention",
    concept_chosen: "Mention/Rappel",
    concepts: {
      "Mention/Rappel": {
        status: "retenu",
        senses: ["mentionner", "se souvenir"],
        proof_ctx: "Le sens retenu est « Mention/Rappel ». Le Lane's donne pour la racine dh-k-r : mentionner, citer le nom de, se souvenir, rappeler, commemorer. Le mot dhikraka est un nom a l'accusatif avec le suffixe possessif -ka : « ta mention ». Le dhikr est le fait d'etre mentionne, cite, rappele — c'est la renommee, la presence dans la memoire des gens. Le sens de « mention » est retenu car elever la mention signifie rendre le nom celebre et reconnu. Le concept « Masculin » (male) est nul car le verset ne parle pas de genre mais de renommee.",
        axe1_verset: "Le verset dit rafa'na laka dhikraka — « nous avons eleve ta mention ». Le mot dhikr est le complement direct de rafa'na (elever). Le champ lexical est celui de la reconnaissance publique : elever + mention. Le dhikr designe le fait d'etre nomme, rappele, cite — c'est la reputation et la memoire que les gens gardent de quelqu'un.",
        axe2_voisins: "Apres les bienfaits intimes (v1) et physiques (v2-3), l'elevation de la mention est le bienfait social. La mention elevee signifie que le nom est prononce avec respect et honneur dans la communaute et au-dela. Le verset 5 enchaine avec l'affirmation que la facilite accompagne la difficulte.",
        axe3_sourate: "La mention elevee est le dernier des trois bienfaits rappeles. Elle complete le tableau : serenite interieure (v1), allegement des charges (v2-3), reconnaissance publique (v4). Ces trois bienfaits couvrent toutes les dimensions de la personne — interieure, physique, sociale.",
        axe4_coherence: "Le Coran utilise dhikr dans de nombreux contextes : dhikr Allah (la mention de Dieu, 2:152), le Coran lui-meme est appele « le Rappel » (adh-dhikr, 15:9). Le dhikr est un mot central du Coran qui couvre la mention, le souvenir et le rappel. Ici, elever le dhikr d'une personne signifie rendre son nom memorable et respecte.",
        axe5_frequence: "La mention elevee du khalifa sert la mission de justice — un nom respecte porte plus de poids et d'influence. La reconnaissance publique n'est pas une fin en soi mais un moyen d'accomplir la mission plus efficacement."
      },
      "Masculin": {
        status: "nul",
        senses: ["male"],
        proof_ctx: "Le sens de masculin (dhakar = male) est hors sujet. Le verset parle de la mention et de la renommee, pas du genre. Le mot dhikr ici est le masdar (nom verbal) de dhakara (mentionner), pas le nom dhakar (male)."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَرَفَعْنَا لَكَ ذِكْرَكَ",
    full_translation: "et élevé pour toi ta renommée ?",
    segments: [
      { fr: "et nous avons eleve", pos: "verbe", phon: "wa-rafa'na", arabic: "وَرَفَعْنَا", word_key: "rfe", is_particle: false, sense_retenu: "elever", position: 1 },
      { fr: "pour toi", pos: "particule", phon: "laka", arabic: "لَكَ", is_particle: true, position: 0 },
      { fr: "ta mention", pos: "nom", phon: "dhikraka", arabic: "ذِكْرَكَ", word_key: "dkr", is_particle: false, sense_retenu: "mentionner", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par la conjonction wa- (et) qui lie ce troisieme bienfait aux precedents. Le verbe rafa'na est la forme I accompli de la racine r-f-' (lever, elever), premiere personne du pluriel (Nous). Le Lane's (Edward Lane, 1863) donne pour rafa'a : lever, elever, hausser, exalter. La preposition laka (pour toi, a ton profit) indique que l'elevation est un bienfait accorde. Le nom dhikraka est a l'accusatif (complement direct) avec le suffixe -ka (ta). Le Lane's donne pour dhikr : mention, souvenir, rappel, commemoration, renommee. La construction « elever la mention de quelqu'un » signifie rendre son nom celebre, le faire connaitre et respecter.

§JUSTIFICATION§
**elever** — Le sens retenu est « Elevation/Exaltation ». Le mot « elever » est choisi car il capture le mouvement vers le haut — rendre plus haut, plus visible, plus honorable. L'alternative « hausser » est trop physique (hausser le ton). L'alternative « exalter » est trop litteraire pour du francais courant.

**mention** — Le sens retenu est « Mention/Rappel ». Le mot « mention » est choisi car il est le equivalent exact du dhikr — le fait d'etre nomme, cite, rappele. L'alternative « souvenir » est ecartee car elle implique un evenement passe qu'on garde en memoire, alors que la mention est active et presente. L'alternative « renommee » est acceptable mais c'est un resultat — la mention est l'acte qui produit la renommee.

§CRITIQUE§
Hamidullah traduit : « et eleve pour toi ta renommee ». Notre traduction donne « ta mention » au lieu de « ta renommee ». Le mot arabe dhikr est le nom verbal de dhakara (mentionner) — il designe l'acte de mentionner, pas le resultat (la renommee). La nuance est que la mention est active et continue (les gens mentionnent ton nom) tandis que la renommee est un etat passif (tu es celebre). Le texte dit que Dieu a eleve ta mention — l'acte est dynamique, pas statique.`
  }).eq('verse_id', verse_id);

  // Daily phrases
  await insertDaily(711, 'elever', 'رَفَعَ', "rafa'a", [
    "Il a eleve la voix pour se faire entendre.",
    "Elle s'est elevee dans la societe par son travail.",
    "Ils ont eleve un mur pour proteger le jardin."
  ]);

  console.log('VERSET 94:4 — TERMINE');
  console.log('  rfe (ر ف ع) → sens "Elevation/Exaltation" → mot francais "elever"');
  console.log('  dkr (ذ ك ر) → sens "Mention/Rappel" → mot francais "mention"');
  console.log('  Traduction : "et nous avons eleve pour toi ta mention"');
}

async function main() {
  await verse94_1();
  await verse94_2();
  await verse94_3();
  await verse94_4();

  console.log('\n=== PARTIE 1 TERMINEE (versets 1-4) ===');
}

main().catch(console.error);
