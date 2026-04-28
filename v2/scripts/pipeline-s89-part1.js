// Pipeline Sourate 89 (Al-Fajr / L'Aube) — Partie 1: Versets 1-5
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });
const sb = createClient(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

// ================================================================
// HELPERS
// ================================================================

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

async function upsertVA(verse_id, data) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    await sb.from('verse_analyses').update(data).eq('id', existing[0].id);
    console.log(`  Updated VA id=${existing[0].id}`);
  } else {
    const { data: created, error } = await sb.from('verse_analyses').insert({ verse_id, ...data }).select().single();
    if (error) console.log(`  Error VA:`, error.message);
    else console.log(`  Created VA id=${created.id}`);
  }
}

// ================================================================
// CONTEXTE SOURATE 89 (Al-Fajr / L'Aube)
// ================================================================
// Structure : serments cosmiques (v1-5), recit des civilisations
// detruites (v6-14 : Ad, Thamud, Pharaon), epreuve de l'homme (v15-20),
// jour de la retribution (v21-26), ame apaisee (v27-30).
// Theme : les civilisations passees ont ete detruites malgre leur puissance
// car elles ont transgresse. L'etre humain est eprouve par la richesse
// et la pauvrete. Le jour viendra ou chacun sera confronte a ses actes.
// Voisines : S88 (Al-Ghashiyah) avant, S90 (Al-Balad) apres.

// ================================================================
// VERSET 89:1 — وَٱلْفَجْرِ
// ================================================================
async function verse89_1() {
  console.log('\n=== VERSET 89:1 — وَٱلْفَجْرِ ===');
  const verse_id = 5994;

  // ---- FJR (فجر) — id=587 — "aube" ----
  // Forme: al-fajri = nom defini au genitif (serment par wa-)
  await upsertVWA(verse_id, 'fjr', 'aube', {
    sense_chosen: "aube",
    concept_chosen: "Commencement/Lumiere",
    concepts: {
      "Commencement/Lumiere": {
        status: "retenu",
        senses: ["aube", "aurore", "point du jour"],
        proof_ctx: "Le sens retenu est « Commencement/Lumiere ». Le Lane's (Edward Lane, 1863) donne pour fajr : la fente de la lumiere dans l'obscurite, l'aube, le moment ou la premiere lumiere dechire le voile de la nuit. Le mot al-fajri est un nom defini par al- au genitif apres la particule de serment wa-. L'aube est le premier element d'une serie de serments qui ouvrent la sourate. Le fajr designe specifiquement le moment de la rupture entre la nuit et le jour — la premiere lumiere qui perce l'horizon. La racine f-j-r porte l'idee d'un eclatement, d'une fissure par laquelle quelque chose jaillit (l'eau d'une source, la lumiere de la nuit). L'aube est donc une lumiere qui eclate, qui fend l'obscurite. Le serment par l'aube donne au propos qui suit (le recit des civilisations detruites) une dimension de renouveau et de verite qui eclate apres l'obscurite.",
        axe1_verset: "Le verset est reduit a un seul mot significatif : al-fajr (l'aube). La particule wa- introduit le serment. Le mot est au genitif defini — le serment porte sur l'aube en tant que phenomene connu et universel, pas sur une aube particuliere. Le champ lexical est celui de la lumiere naissante, du premier instant ou l'obscurite cede. Le verset est d'une brievete maximale — un seul mot apres wa- — ce qui donne au serment une force d'impact : pas de qualification, pas de precision, juste l'aube dans toute sa puissance. Cette concision est characteristique des ouvertures de serments coraniques dans les sourates courtes.",
        axe2_voisins: "Le verset 2 ajoute « et par dix nuits ». Le verset 3 ajoute « par le pair et l'impair ». Le verset 4 ajoute « par la nuit quand elle s'ecoule ». La serie des serments forme une progression temporelle : aube (v1) → nuits (v2) → pair/impair (v3) → nuit qui s'ecoule (v4). L'aube ouvre la serie comme le premier phenomene temporel — le debut du cycle. Les nuits du verset 2 sont un complement de l'aube : si l'aube est le debut du jour, les dix nuits sont l'autre face du temps. Le verset 5 conclut par la question rhetorique qui donne sens a tous ces serments.",
        axe3_sourate: "L'aube est le premier mot significatif de la sourate qui porte son nom (Al-Fajr). Ce nom n'est pas un hasard — l'aube est le theme fondateur de tout le discours qui suit. La sourate raconte ensuite la destruction de civilisations (Ad, Thamud, Pharaon) qui ont transgresse dans l'obscurite de leur orgueil. L'aube annonce que la verite finit toujours par eclater — les civilisations qui se croient eternelles dans leur nuit d'arrogance seront confrontees a la lumiere du jour de la retribution. Le nom Al-Fajr pour cette sourate signale que tout ce qui suit est une lumiere qui dechire les illusions.",
        axe4_coherence: "Le Coran utilise fajr dans plusieurs contextes : la priere de l'aube (al-fajr — 24:58), le moment ou le fil blanc se distingue du fil noir (2:187), et comme serment dans cette sourate. Dans tous les cas, le fajr est le moment de la rupture entre l'obscurite et la lumiere — un seuil. En 97:5, la nuit du destin dure « jusqu'au lever de l'aube » (hatta matla'i al-fajr) — l'aube est la limite temporelle. Le serment par l'aube dans la sourate 89 suit ce modele coranique : l'aube est un seuil, un moment de verite ou tout change.",
        axe5_frequence: "L'aube comme phenomene naturel rappelle que chaque jour recommence avec une lumiere nouvelle. Pour l'etre humain dans sa mission de civilisation, l'aube est le renouveau quotidien — la possibilite de recommencer apres la nuit. La sourate qui s'ouvre par l'aube et raconte la destruction de civilisations dit que meme apres la plus grande nuit (la transgression), une aube de verite finit par se lever. L'aube est l'affirmation que l'obscurite ne dure jamais — ni dans le cosmos, ni dans l'histoire des peuples."
      },
      "Eclatement": {
        status: "probable",
        senses: ["jaillir", "eclater", "fendre"],
        proof_ctx: "Le Lane's donne pour la racine f-j-r le sens premier d'eclater, fendre, faire jaillir. L'eau qui jaillit d'une source est un fajr — une fissure par laquelle un fluide perce. Ce sens est etymologiquement premier et sous-tend le sens d'aube (la lumiere qui eclate dans la nuit). Dans le contexte du serment, le sens d'eclatement est present en filigrane mais le mot al-fajr avec l'article defini designe conventionnellement l'aube comme moment du jour. Le sens d'eclatement n'est pas directement selectionne car le serment porte sur un phenomene temporel (l'aube) et non sur un acte physique (faire jaillir). Mais la dimension de rupture violente que porte la racine colore le sens de l'aube : ce n'est pas une lumiere douce qui arrive progressivement, c'est une lumiere qui ECLATE et FEND l'obscurite.",
        axe1_verset: "Le verset jure par al-fajr. Si on retient le sens d'eclatement, le serment porterait sur le phenomene physique de la rupture — quelque chose qui fend, qui perce. Le champ lexical serait celui de la violence naturelle plutot que de la lumiere matinale. Mais le mot al-fajr avec l'article al- est lexicalise en arabe comme « l'aube » — il faudrait un complement pour activer le sens d'eclatement (fajr al-ma' — le jaillissement de l'eau). L'absence de complement oriente vers le sens temporel.",
        axe2_voisins: "Les versets suivants parlent de nuits (v2), de pair/impair (v3), de la nuit qui s'ecoule (v4). Le champ lexical est temporel et cosmique, pas celui du jaillissement physique. L'eclatement ne s'integre pas naturellement dans cette serie de serments lies au temps. Cependant, la dimension de rupture reste pertinente comme nuance etymologique : l'aube est un eclatement de lumiere.",
        axe3_sourate: "La sourate parle ensuite de la destruction de civilisations — l'idee d'eclatement pourrait annoncer cette destruction. Mais le lien serait metaphorique et non grammatical. Le serment par l'eclatement ne s'articule pas aussi bien avec la question du verset 5 (un serment pour celui qui a une raison) qu'avec l'aube comme phenomene observable.",
        axe4_coherence: "Le Coran utilise la racine f-j-r dans le sens de faire jaillir (2:60 — fajjarna — Nous avons fait jaillir douze sources) et dans le sens d'aube (24:58). Les deux sens coexistent dans le Coran mais sont distingues par le contexte. Le serment par wa- suivi d'un nom defini oriente vers le sens reconnu de l'aube.",
        axe5_frequence: "L'eclatement comme phenomene naturel est present partout dans le monde — les sources jaillissent, les volcans eclatent, la lumiere perce la nuit. Pour l'etre humain, la dimension d'eclatement rappelle que la verite ne s'installe pas doucement — elle fait irruption. Mais ce sens reste secondaire par rapport au sens d'aube dans ce contexte precis de serment cosmique."
      },
      "Transgression": {
        status: "nul",
        senses: ["debauche", "transgression", "immoralite"],
        proof_ctx: "Le Lane's donne fajara dans le sens de transgresser, commettre la debauche. Ce sens moral derive de l'idee d'eclater les limites — celui qui transgresse est celui qui fend les barrieres morales. Mais le mot al-fajr avec l'article defini est lexicalise comme « l'aube » et non comme « la transgression ». On dit al-fujur pour la debauche, pas al-fajr. Le contexte du serment cosmique exclut un sens moral negatif — le Coran ne jure pas par la debauche."
      }
    }
  }, 1);

  await upsertVA(verse_id, {
    segments: [
      { fr: "Par l'aube", pos: "nom", phon: "wal-fajri", arabic: "\u0648\u064E\u0671\u0644\u0652\u0641\u064E\u062C\u0652\u0631\u0650", word_key: "fjr", is_particle: false, sense_retenu: "aube", position: 1, prefix_particle: "wa" }
    ],
    translation_arab: "Par l'aube",
    full_translation: "Par l'Aube!",
    translation_explanation: `§DEMARCHE§

Le verset est un serment introduit par la particule wa- (par) suivie d'un nom au genitif. Le mot al-fajri (l'aube) est un nom defini par al- au genitif — c'est l'unique objet du serment dans ce verset. Le Lane's (Edward Lane, 1863) donne pour fajr : la fente de la lumiere dans l'obscurite, l'aube, le moment ou la premiere lumiere dechire le voile de la nuit. La racine f-j-r porte l'idee d'un eclatement, d'une fissure — l'aube est litteralement la lumiere qui eclate dans la nuit. Le mot est defini par al- : c'est l'aube en tant que phenomene universel et connu, pas une aube particuliere.

Le verset ne contient qu'un seul mot significatif apres la particule de serment. Cette brievete maximale est un procede de solennite : pas de qualification, pas de precision, juste le phenomene brut dans toute sa puissance evocatrice.

§JUSTIFICATION§

**aube** — Le sens retenu est « Commencement/Lumiere ». Le mot « aube » est choisi car il designe en francais courant le moment precis ou la premiere lumiere apparait a l'horizon. Le Lane's confirme que al-fajr est le moment de la rupture entre la nuit et le jour. « Aurore » ecarte car il designe plutot la lumiere rose qui precede le lever du soleil — un moment legerement different. « Point du jour » ecarte car trop long et moins evocateur que « aube ». Le sens « eclatement » (jaillir, fendre) est etymologiquement present dans la racine mais al-fajr avec l'article defini est conventionnellement « l'aube » — le sens d'eclatement est retenu comme nuance etymologique, pas comme traduction directe.

§CRITIQUE§

Hamidullah traduit : « Par l'Aube ! ». La traduction est identique a la notre. Il n'y a pas de difficulte de traduction pour ce verset — al-fajr designe universellement l'aube et les traducteurs s'accordent sur ce point. La seule nuance que Hamidullah ne rend pas est la dimension d'eclatement que porte la racine f-j-r : l'aube n'est pas une lumiere douce mais une lumiere qui perce violemment l'obscurite. Cette nuance est perdue dans toutes les traductions car le mot « aube » en francais n'a pas cette connotation de rupture.`
  });

  console.log('VERSET 89:1 — TERMINE');
  console.log('  fjr -> "aube"');
  console.log('  Traduction : "Par l\'aube"');
}

// ================================================================
// VERSET 89:2 — وَلَيَالٍ عَشْرٍ
// ================================================================
async function verse89_2() {
  console.log('\n=== VERSET 89:2 — وَلَيَالٍ عَشْرٍ ===');
  const verse_id = 5995;

  // ---- LYL (ليل) — id=528 — "nuit" ----
  // Forme: layalin = nom pluriel indefini au genitif (serment par wa-)
  // layalin est le pluriel brise de laylah (nuit)
  await upsertVWA(verse_id, 'lyl', 'nuit', {
    sense_chosen: "nuit",
    concept_chosen: "Nuit/Obscurite",
    concepts: {
      "Nuit/Obscurite": {
        status: "retenu",
        senses: ["nuit", "obscurite", "tenebres"],
        proof_ctx: "Le sens retenu est « Nuit/Obscurite ». Le Lane's (Edward Lane, 1863) donne pour layl/laylah : la nuit, la periode d'obscurite entre le coucher et le lever du soleil. Le mot layalin est le pluriel brise de laylah, indefini au genitif apres la particule de serment wa-. Le pluriel indefini (layalin, pas al-layali) indique des nuits non specifiees dans leur identite mais determinees par le nombre qui suit ('ashrin — dix). Les nuits sont le complement temporel de l'aube du verset 1 : si l'aube est le debut du jour, les nuits sont l'autre face du temps. La racine l-y-l ne porte qu'un seul champ semantique — la nuit et l'obscurite — ce qui rend le choix direct et sans ambiguite.",
        axe1_verset: "Le verset dit « et par dix nuits ». Le mot layalin est qualifie par 'ashrin (dix) — ce ne sont pas des nuits quelconques mais un groupe precis de dix nuits. Le champ lexical est celui du temps nocturne compte et delimite. L'indefinition du nom (layalin, pas al-layali) combinee au nombre precis (dix) cree une tension : les nuits ne sont pas identifiees par un article mais sont definies par leur nombre. Le serment porte sur un bloc temporel — dix nuits — comme unite significative. La brievete du verset (deux mots) maintient la force de frappe des serments d'ouverture.",
        axe2_voisins: "Le verset 1 a jure par l'aube — le debut du jour. Le verset 2 jure par dix nuits — le temps nocturne. L'aube et les nuits forment une paire de contraste : lumiere/obscurite, singulier/pluriel, defini/indefini. Le verset 3 ajoutera le pair et l'impair — une categorisation numerique qui prolonge le decompte des dix nuits. Le verset 4 ajoutera la nuit quand elle s'ecoule — revenant au singulier de la nuit apres le pluriel du verset 2. La serie alterne entre jour et nuit, entre un et plusieurs.",
        axe3_sourate: "Les dix nuits s'inscrivent dans les serments d'ouverture qui precedent le recit des civilisations detruites (v6-14). Le nombre dix evoque une totalite ou une periode sacree — les commentateurs mentionnent les dix premieres nuits de Dhul-Hijjah ou les dix dernieres nuits de Ramadan. Quelle que soit l'identification precise, le serment par un nombre de nuits donne au propos une ancre temporelle concrete. La sourate qui parle de civilisations qui croyaient durer eternellement (Ad aux colonnes, Thamud qui taillent le roc) jure d'abord par des unites de temps — rappelant que le temps est mesure et fini.",
        axe4_coherence: "Le Coran utilise layl/laylah dans de nombreux contextes de serments et de recits. En 92:1, « par la nuit quand elle couvre ». En 93:2, « par la nuit quand elle s'etend ». En 97:1, « la nuit du destin ». La nuit dans le Coran est un signe cosmique lie a l'obscurite, au repos et au mystere. Le pluriel layalin avec un nombre (dix) est specifique a cette sourate — il donne une dimension quantitative au serment. Le Coran associe la nuit au recueillement et a la revelation, ce qui renforce la solennite du serment.",
        axe5_frequence: "Les nuits comptees rappellent que le temps de l'etre humain est mesure et limite. Les civilisations decrites plus loin dans la sourate (Ad, Thamud) ont cru que leur puissance durerait sans fin — les dix nuits du serment rappellent que le temps se compte, se mesure et finit. Pour l'etre humain dans sa mission de civilisation, les nuits comptees sont un rappel de la finitude du temps disponible pour agir."
      }
    }
  }, 1);

  // ---- ESHR (عشر) — id=589 — "dix" ----
  // Forme: 'ashrin = adjectif numeral indefini au genitif
  await upsertVWA(verse_id, 'eshr', 'dix', {
    sense_chosen: "dix",
    concept_chosen: "Nombre/Completude",
    concepts: {
      "Nombre/Completude": {
        status: "retenu",
        senses: ["dix", "dixieme", "decade"],
        proof_ctx: "Le sens retenu est « Nombre/Completude ». Le Lane's (Edward Lane, 1863) donne pour 'ashr : dix, le nombre cardinal. Le mot 'ashrin est un adjectif numeral au genitif qui qualifie layalin (nuits). Dix est un nombre de totalite dans la pensee semitique — il represente un cycle complet. Le nombre dix n'est pas arbitraire dans ce serment : il designe un bloc temporel significatif et complet. Distinction avec « Relation proche » (intimite, frequentation) : le Lane's donne 'ashira pour la tribu, le clan, les proches. Ce sens derive de la racine '-sh-r mais designe les relations humaines, pas un nombre. Le contexte du serment cosmique avec le mot layalin (nuits) impose le sens numerique — on ne dit pas « nuits d'intimite » dans un contexte de serment solennel.",
        axe1_verset: "Le verset dit « et par dix nuits ». Le mot 'ashrin qualifie layalin — il determine combien de nuits sont visees par le serment. Le champ lexical est celui du decompte temporel : nuits + dix = une periode precise. Le nombre dix apporte une precision qui contraste avec l'indefinition des nuits (layalin sans al-). Les nuits ne sont pas identifiees par leur nature mais par leur quantite. Ce choix de dix (pas sept, pas trois) evoque une completude — dix est le nombre de base du systeme decimal, un cycle entier.",
        axe2_voisins: "Le verset 1 a jure par l'aube (un phenomene singulier). Le verset 2 jure par dix nuits (un phenomene pluriel et compte). Le passage du singulier au pluriel, de l'indefini temporel (l'aube) au compte precis (dix nuits) montre une progression vers la precision. Le verset 3 ajoutera le pair et l'impair — une categorisation numerique qui prolonge cette precision arithmetique. La serie des serments passe de la lumiere (v1) au nombre (v2-3).",
        axe3_sourate: "Le nombre dix dans les serments d'ouverture precede le recit de civilisations qui ont ete detruites malgre leur grandeur. Les dix nuits evoquent une periodicite sacree — un temps mesure et delimite. La sourate rappelle que les civilisations (Ad, Thamud, Pharaon) avaient un temps limite malgre leur impression de puissance infinie. Le nombre dix est un rappel de la mesure du temps : tout a un debut et une fin, un nombre precis de nuits.",
        axe4_coherence: "Le Coran utilise le nombre dix dans plusieurs contextes : les dix nuits de cette sourate, les dix jours de la completude du miqat de Moussa (2:196 — « et completez les dix jours »), les dix serments de cette sourate selon certaines lectures. Le nombre dix est systematiquement lie a la completude dans le Coran. La racine '-sh-r apparait aussi dans 'ashirah (clan, tribu) mais c'est un autre emploi semantique sans rapport avec le contexte numerique de ce verset.",
        axe5_frequence: "Le nombre dix comme mesure du temps rappelle que les periodes significatives de la vie humaine sont comptees et delimitees. Pour l'etre humain dans sa mission de civilisation, chaque periode de temps (dix nuits, dix jours) est une opportunite mesuree d'agir. Les civilisations decrites plus loin dans la sourate ont gaspille leur temps — le serment par dix nuits rappelle que le temps est un capital fini et precieux."
      },
      "Relation proche": {
        status: "nul",
        senses: ["intimite", "frequentation", "relations proches"],
        proof_ctx: "Le Lane's donne 'ashira pour la tribu, le clan, les proches. Ce sens derive de la racine '-sh-r mais designe les relations humaines. Le mot 'ashrin dans ce verset est un adjectif numeral au genitif qui qualifie layalin (nuits) — le contexte impose le sens de nombre. On ne peut pas dire « nuits d'intimite » dans un contexte de serment cosmique solennel. Hors sujet."
      }
    }
  }, 2);

  await upsertVA(verse_id, {
    segments: [
      { fr: "et par dix", pos: "adjectif", phon: "'ashrin", arabic: "\u0639\u064E\u0634\u0652\u0631\u064D", word_key: "eshr", is_particle: false, sense_retenu: "dix", position: 2 },
      { fr: "nuits", pos: "nom", phon: "layalin", arabic: "\u0644\u064E\u064A\u064E\u0627\u0644\u064D", word_key: "lyl", is_particle: false, sense_retenu: "nuit", position: 1, prefix_particle: "wa" }
    ],
    translation_arab: "Et par dix nuits",
    full_translation: "et par les dix nuits!",
    translation_explanation: `§DEMARCHE§

Le verset est le second serment de la serie d'ouverture, introduit par la particule wa- (et par). Le mot layalin est le pluriel brise de laylah (nuit), indefini au genitif. L'indefinition est significative : les nuits ne portent pas l'article al- (les), ce qui laisse leur identite ouverte. Le Lane's (Edward Lane, 1863) donne pour layl : la nuit, la periode d'obscurite entre le coucher et le lever du soleil.

Le mot 'ashrin est un adjectif numeral au genitif qui qualifie layalin. Le nombre dix delimite le serment — ce ne sont pas des nuits en general mais un groupe precis de dix. Le Lane's confirme que 'ashr est le nombre cardinal dix. Le nombre dix evoque la completude dans la pensee semitique.

La structure « wa + nom indefini au genitif + adjectif numeral » est un serment par une periode temporelle precise mais non identifiee explicitement : dix nuits, mais lesquelles ? Le texte ne le dit pas — le serment porte sur le concept de dix nuits comme unite significative.

§JUSTIFICATION§

**nuits** — Le sens retenu est « Nuit/Obscurite ». Le mot « nuits » traduit layalin comme le pluriel de laylah. Aucune alternative credible — le mot designe exclusivement la nuit comme periode d'obscurite. Le pluriel brise (layalin au lieu de laylat) est la forme standard pour le pluriel de laylah.

**dix** — Le sens retenu est « Nombre/Completude ». Le mot « dix » traduit 'ashrin comme nombre cardinal. Le sens de « relation proche » (intimite, tribu) est exclu par le contexte numerique — le mot qualifie directement les nuits et ne peut etre qu'un nombre.

§CRITIQUE§

Hamidullah traduit : « et par les dix nuits ! ». La traduction de Hamidullah ajoute l'article defini « les » devant « dix nuits ». En arabe, layalin est indefini (pas al-layali). L'ajout de « les » en francais donne l'impression que les dix nuits sont identifiees et connues du lecteur, alors que le texte arabe laisse l'identification ouverte. Notre traduction « et par dix nuits » respecte l'indefinition de l'arabe. Cette nuance est importante car elle montre que le serment porte sur la grandeur du phenomene (dix nuits) plutot que sur l'identification de nuits specifiques.`
  });

  console.log('VERSET 89:2 — TERMINE');
  console.log('  lyl -> "nuit" | eshr -> "dix"');
  console.log('  Traduction : "Et par dix nuits"');
}

// ================================================================
// VERSET 89:3 — وَٱلشَّفْعِ وَٱلْوَتْرِ
// ================================================================
async function verse89_3() {
  console.log('\n=== VERSET 89:3 — وَٱلشَّفْعِ وَٱلْوَتْرِ ===');
  const verse_id = 5996;

  // ---- SHFE (شفع) — id=533 — "pair" ----
  // Forme: al-shaf'i = nom defini au genitif (serment par wa-)
  await upsertVWA(verse_id, 'shfe', 'pair', {
    sense_chosen: "pair",
    concept_chosen: "Parite/Couple",
    concepts: {
      "Parite/Couple": {
        status: "retenu",
        senses: ["pair", "double", "couple"],
        proof_ctx: "Le sens retenu est « Parite/Couple ». Le Lane's (Edward Lane, 1863) donne pour shaf' : le pair, le double, ce qui va par deux, le couple. Le mot al-shaf'i est un nom defini par al- au genitif apres la particule de serment wa-. Le shaf' designe tout ce qui existe en paire — deux elements qui se completent ou se correspondent. La racine sh-f-' porte l'idee fondamentale de la dualite, du doublement. Le serment par le pair (avec son contraire l'impair au meme verset) introduit une categorisation numerique et philosophique de la realite : tout ce qui existe est soit pair soit impair. Distinction avec « Intercession » (interceder, mediation) : le Lane's donne shafa'a pour l'intercession — demander en faveur de quelqu'un. L'intercession derive etymologiquement de l'idee de « doubler » — l'intercesseur double la voix du demandeur. Mais le contexte du serment par le pair oppose a l'impair impose le sens numerique. Le texte dit al-shaf' wa-al-watr (le pair et l'impair) — c'est une opposition binaire, pas un acte d'intercession.",
        axe1_verset: "Le verset dit « par le pair et l'impair ». Le mot al-shaf'i est mis en opposition avec al-watri (l'impair) dans le meme verset. Cette opposition pair/impair est la cle du verset — les deux mots se definissent mutuellement. Le champ lexical est celui de la classification numerique : pair + impair = la totalite des nombres. Le verset ne parle pas de choses specifiquement paires ou impaires mais de la categorisation elle-meme. La conjonction wa- (et) entre les deux termes les presente comme les deux faces complementaires d'une meme realite. La structure est symetrique : wa + al-shaf'i + wa + al-watri.",
        axe2_voisins: "Le verset 2 a jure par dix nuits — un nombre precis. Le verset 3 passe du nombre a la categorisation des nombres : pair et impair. C'est une montee en abstraction — du concret (dix nuits) vers le principe (pair/impair). Le verset 4 reviendra au concret avec la nuit qui s'ecoule. La serie des serments alterne entre le concret et l'abstrait, entre l'observable et le conceptuel. Le pair et l'impair sont le moment le plus abstrait de toute la serie de serments.",
        axe3_sourate: "Le pair et l'impair s'inscrivent dans les serments qui precedent le recit des civilisations detruites. La categorisation pair/impair evoque l'ordre mathematique de la creation — tout est organise selon des principes. Les civilisations decrites ensuite (Ad, Thamud, Pharaon) ont cru pouvoir echapper a cet ordre. Le serment par le pair et l'impair rappelle que la realite est structuree par des principes qui ne dependent pas de la volonte humaine — les nombres sont pairs ou impairs independamment de ce que les civilisations en pensent.",
        axe4_coherence: "Le Coran utilise la racine sh-f-' dans le sens d'intercession en plusieurs passages (2:255 — « qui peut interceder aupres de Lui sans Sa permission ? »). Mais l'usage de al-shaf' oppose a al-watr dans ce verset est specifique — c'est le sens numerique (pair vs impair) qui est active par l'opposition. Le Coran utilise les paires comme signe de la creation : « et de toute chose Nous avons cree une paire » (51:49). Le serment par le pair dans cette sourate s'inscrit dans cette logique coranique de la dualite comme principe createur.",
        axe5_frequence: "La parite comme principe mathematique rappelle que la realite est structuree par des lois qui depassent l'etre humain. Le khalifa vit dans un monde ou les choses vont par paires (homme/femme, jour/nuit, ciel/terre) — cette dualite est le tissu de la creation. Le serment par le pair rappelle que l'ordre du monde n'est pas arbitraire mais organise selon des principes fondamentaux que l'etre humain peut observer et comprendre."
      },
      "Intercession": {
        status: "peu_probable",
        senses: ["interceder", "mediation"],
        proof_ctx: "Le Lane's donne shafa'a pour l'intercession — l'acte de demander en faveur de quelqu'un, de doubler sa voix. Ce sens est present dans la racine et frequemment utilise dans le Coran (2:255, 20:109). Mais le contexte du verset oppose explicitement al-shaf' a al-watr (le pair et l'impair) — cette opposition binaire impose le sens numerique. Si le mot signifiait « intercession », il faudrait que al-watr signifie « absence d'intercession » ou quelque chose d'analogue, ce qui n'est pas atteste.",
        axe1_verset: "Le verset dit al-shaf' wa-al-watr. Si al-shaf' signifiait l'intercession, le wa- (et) suivi de al-watr (l'impair/le seul) creerait une opposition entre l'intercession et la solitude. Cette lecture est possible mais forcee — elle ne s'integre pas dans la serie de serments cosmiques et temporels des versets 1-4. Le champ lexical des versets voisins (aube, nuits, nuit qui s'ecoule) est temporel et cosmique, pas juridique ou intercessoire.",
        axe2_voisins: "Le verset 2 parle de dix nuits — un contexte numerique. Le verset 4 parle de la nuit qui s'ecoule — un contexte temporel. L'intercession ne s'integre pas naturellement dans cette serie de phenomenes cosmiques et temporels. Le sens numerique (pair) prolonge naturellement le decompte du verset 2 (dix nuits) tandis que l'intercession romprait la continuite thematique des serments.",
        axe3_sourate: "La sourate parle de civilisations detruites, pas d'intercession. Le theme de l'intercession est present dans d'autres sourates (20:109, 34:23) mais pas dans cette sourate qui traite de la justice historique. L'intercession ne s'inscrit pas dans le fil thematique de la sourate 89.",
        axe4_coherence: "Le Coran utilise frequemment la racine sh-f-' pour l'intercession mais jamais en opposition avec watr. L'opposition shaf'/watr est specifique a ce verset et active le sens numerique (pair vs impair). Les deux usages coraniques de la racine (intercession et parite) sont distincts par leur contexte.",
        axe5_frequence: "L'intercession comme acte social (demander en faveur d'autrui) est un acte de solidarite et de mediation. Mais dans ce contexte de serments cosmiques, le sens numerique est plus pertinent car il s'inscrit dans la serie de phenomenes naturels et mathematiques que le texte invoque comme temoins."
      }
    }
  }, 1);

  // ---- WTR (وتر) — id=2634 — "impair" ----
  // Forme: al-watri = nom defini au genitif (serment par wa-)
  await upsertVWA(verse_id, 'wtr', 'impair', {
    sense_chosen: "impair",
    concept_chosen: "Unite/Imparite",
    concepts: {
      "Unite/Imparite": {
        status: "retenu",
        senses: ["seul", "unique", "impair", "rendre impair", "priere impaire"],
        proof_ctx: "Le sens retenu est « Unite/Imparite ». Le Lane's (Edward Lane, 1863) donne pour watr : le nombre impair, ce qui est seul sans paire, l'unique. Le mot al-watri est un nom defini par al- au genitif apres la particule wa-. Le watr est l'oppose exact du shaf' — ce qui ne va pas par deux, ce qui est seul, unique, sans correspondant. La racine w-t-r porte l'idee fondamentale de l'unicite et de l'imparite. Le serment par l'impair (apres le pair) complete la categorisation universelle : tout nombre est soit pair soit impair, toute chose est soit double soit unique. Distinction avec « Corde/Tension » : le Lane's donne watar pour la corde d'arc. Ce sens physique (corde tendue, nerf) est un emploi distinct de la racine sans rapport avec le contexte numerique. Le texte oppose al-watr a al-shaf' — c'est une opposition pair/impair, pas corde/paire. Distinction avec « Succession/Intervalles » : le Lane's donne watara pour envoyer successivement avec des intervalles. Ce sens de succession est un emploi secondaire de la racine. Distinction avec « Perte/Vengeance de sang » : le Lane's donne witr/watr pour la perte d'un proche et la vengeance de sang. Ce sens derive de l'idee de « rendre quelqu'un seul » — priver quelqu'un de son pair. C'est un emploi figure de l'imparite applique au deuil. Le contexte du serment cosmique exclut ce sens.",
        axe1_verset: "Le verset dit « par le pair et l'impair ». Le mot al-watri est le second terme de l'opposition avec al-shaf'i. Les deux mots se definissent mutuellement — l'impair n'a de sens que par rapport au pair. Le champ lexical est celui de la classification numerique exhaustive : pair + impair = tout nombre possible. Le serment porte sur cette totalite categorique. Le watr occupe la seconde position dans la paire — il vient apres le shaf' comme l'un vient apres le deux, comme l'unique vient apres le double. L'ordre n'est pas arbitraire : le pair (le courant, le normal, la paire) est nomme avant l'impair (l'exceptionnel, le seul).",
        axe2_voisins: "Le verset 2 a jure par dix nuits (un nombre pair). Le verset 3 jure par le pair et l'impair — passant du nombre concret au principe numerique. Le verset 4 revient au concret avec la nuit qui s'ecoule. La serie de serments monte en abstraction avec le pair/impair puis redescend au phenomene observable. L'impair est le point d'abstraction maximale dans cette serie — le concept de l'unique, du non-double.",
        axe3_sourate: "L'impair dans les serments d'ouverture precede le recit des civilisations qui se croyaient uniques et invincibles. Ad « aux colonnes, dont la pareille n'avait pas ete creee dans le pays » (v7-8) — ils se croyaient sans pareil, uniques, impairs. Mais leur imparite pretendue n'a pas empeche leur destruction. Le serment par l'impair resonne avec le theme de l'unicite illusoire des puissants.",
        axe4_coherence: "Le Coran utilise la racine w-t-r dans d'autres contextes : en 47:35, « Il ne vous fera pas perdre vos oeuvres » (la yatirakum — ne vous privera pas, ne vous rendra pas seuls sans recompense). Le sens de « priver, rendre seul » est un emploi figure de l'imparite. La priere du witr (nombre impair de prosternations) est aussi liee a cette racine. Le Coran utilise l'imparite comme concept positif (l'unique, le seul) et negatif (priver, rendre orphelin). Dans ce verset, le sens est neutre et categorique : l'impair comme principe numerique.",
        axe5_frequence: "L'imparite comme principe mathematique rappelle que la realite n'est pas symetrique partout. Certaines choses sont seules, uniques, sans correspondant. Pour l'etre humain dans sa mission de civilisation, l'impair rappelle que l'unicite existe — chaque etre, chaque evenement est unique en son genre. Le serment par l'impair est un rappel que le monde ne se reduit pas aux paires et aux symetries."
      },
      "Corde/Tension": {
        status: "nul",
        senses: ["corde d'arc", "tendre la corde", "nerf tendu", "cloison du nez"],
        proof_ctx: "Le Lane's donne watar pour la corde d'arc et les nerfs tendus. Ce sens physique n'a aucun rapport avec le contexte du serment cosmique. Le texte oppose al-watr a al-shaf' (pair/impair) — c'est une opposition numerique, pas une description d'objet physique. La corde d'arc est hors sujet."
      },
      "Succession/Intervalles": {
        status: "nul",
        senses: ["successif avec intervalles", "envoyer successivement", "venir l'un apres l'autre"],
        proof_ctx: "Le Lane's donne watara dans le sens d'envoyer successivement avec des intervalles. Ce sens de succession temporelle pourrait s'integrer dans un contexte de serments mais l'opposition explicite avec al-shaf' (le pair) impose le sens numerique. La succession n'est pas le contraire du pair."
      },
      "Perte/Vengeance de sang": {
        status: "nul",
        senses: ["priver de ses proches", "vengeance de sang", "celui qui a perdu un proche sans reparation"],
        proof_ctx: "Le Lane's donne witr pour la perte d'un proche et la vengeance de sang. Ce sens derive de l'idee de rendre quelqu'un seul (sans sa paire). C'est un emploi figure de l'imparite applique au deuil et a la violence. Le contexte du serment cosmique exclut ce sens de vengeance et de deuil. Hors sujet."
      }
    }
  }, 2);

  await upsertVA(verse_id, {
    segments: [
      { fr: "Et par le pair", pos: "nom", phon: "wal-shaf'i", arabic: "\u0648\u064E\u0671\u0644\u0634\u0651\u064E\u0641\u0652\u0639\u0650", word_key: "shfe", is_particle: false, sense_retenu: "pair", position: 1, prefix_particle: "wa" },
      { fr: "et l'impair", pos: "nom", phon: "wal-watri", arabic: "\u0648\u064E\u0671\u0644\u0652\u0648\u064E\u062A\u0652\u0631\u0650", word_key: "wtr", is_particle: false, sense_retenu: "impair", position: 2, prefix_particle: "wa" }
    ],
    translation_arab: "Et par le pair et l'impair",
    full_translation: "par le pair et l'impair!",
    translation_explanation: `§DEMARCHE§

Le verset contient deux serments lies par la conjonction wa- (et). Le mot al-shaf'i (le pair) est un nom defini par al- au genitif apres la particule de serment wa-. Le Lane's (Edward Lane, 1863) donne pour shaf' : le pair, le double, ce qui va par deux. Le mot al-watri (l'impair) est un nom defini par al- au genitif apres la seconde particule wa-. Le Lane's donne pour watr : l'impair, ce qui est seul, unique, sans correspondant.

Les deux mots forment une opposition categorique exhaustive : tout nombre est soit pair soit impair, toute realite est soit double soit unique. Le serment porte sur cette categorisation universelle — non pas sur des choses specifiquement paires ou impaires, mais sur le principe meme de la parite et de l'imparite.

La structure est symetrique : wa- + al-shaf'i + wa- + al-watri. Les deux elements ont le meme statut grammatical (nom defini au genitif). L'article al- sur les deux mots montre que le pair et l'impair sont des concepts connus et universels — pas des notions nouvelles introduites ici.

§JUSTIFICATION§

**pair** — Le sens retenu est « Parite/Couple ». Le mot « pair » traduit al-shaf' dans son sens numerique et categorique. Le sens d'« intercession » (shafa'a) est ecarte car l'opposition avec al-watr (l'impair) impose le sens numerique. « Double » ecarte car il suggere un doublement ponctuel alors que le pair est un principe categorique. « Couple » acceptable mais « pair » est plus precis car il inclut toute quantite divisible par deux, pas seulement deux elements.

**impair** — Le sens retenu est « Unite/Imparite ». Le mot « impair » traduit al-watr dans son sens numerique. « Seul » ecarte car il a une connotation d'isolement emotionnel qui n'est pas dans le texte. « Unique » acceptable mais plus poetique que categorique — « impair » est le terme technique exact de l'opposition avec « pair ».

§CRITIQUE§

Hamidullah traduit : « par le pair et l'impair ! ». La traduction est identique a la notre. Les traducteurs s'accordent sur ce sens car l'opposition pair/impair est claire dans le texte. Aucune difficulte de traduction — le sens est direct et les equivalents francais sont exacts. Certains commentateurs proposent que le pair designe les creatures (creees par paires) et l'impair designe Dieu (unique). Cette interpretation est une exegese theologiques qui depasse le sens grammatical du texte — le texte dit simplement « le pair et l'impair » comme categories universelles.`
  });

  console.log('VERSET 89:3 — TERMINE');
  console.log('  shfe -> "pair" | wtr -> "impair"');
  console.log('  Traduction : "Et par le pair et l\'impair"');
}

// ================================================================
// VERSET 89:4 — وَٱلَّيْلِ إِذَا يَسْرِ
// ================================================================
async function verse89_4() {
  console.log('\n=== VERSET 89:4 — وَٱلَّيْلِ إِذَا يَسْرِ ===');
  const verse_id = 5997;

  // ---- LYL (ليل) — id=528 — "nuit" ----
  // Forme: al-layli = nom defini au genitif (serment par wa-)
  await upsertVWA(verse_id, 'lyl', 'nuit', {
    sense_chosen: "nuit",
    concept_chosen: "Nuit/Obscurite",
    concepts: {
      "Nuit/Obscurite": {
        status: "retenu",
        senses: ["nuit", "obscurite", "tenebres"],
        proof_ctx: "Le sens retenu est « Nuit/Obscurite ». Le Lane's (Edward Lane, 1863) donne pour layl : la nuit, la periode d'obscurite entre le coucher et le lever du soleil. Le mot al-layli est un nom defini par al- au genitif apres la particule de serment wa-. Contrairement au verset 2 ou le mot etait au pluriel indefini (layalin — des nuits), ici il est au singulier defini (al-layl — la nuit). Ce changement est significatif : le verset 2 parlait de dix nuits comptees, le verset 4 parle de LA nuit comme phenomene general. L'article defini al- donne au mot une dimension universelle — c'est la nuit en tant que phenomene cosmique, pas une nuit particuliere. Le mot est qualifie par la proposition temporelle « quand elle s'ecoule » (idha yasri), ce qui definit la nuit par son action propre.",
        axe1_verset: "Le verset dit « par la nuit quand elle s'ecoule ». Le mot al-layli est l'objet du serment, qualifie par la proposition temporelle idha yasri (quand elle s'ecoule/passe). Le champ lexical est celui du temps nocturne en mouvement — la nuit n'est pas statique, elle s'ecoule. Le serment ne porte pas sur la nuit en general mais sur la nuit en train de passer. Ce choix est important : la nuit qui s'ecoule est la nuit qui finit par ceder la place au jour. Le phenomene souligne est le passage, le mouvement, la transition — pas l'obscurite en soi mais l'obscurite qui se deplace et finit par partir.",
        axe2_voisins: "Le verset 1 a jure par l'aube — le debut du jour. Le verset 2 a jure par dix nuits. Le verset 3 a jure par le pair et l'impair. Le verset 4 revient a la nuit mais sous un angle different du verset 2 : la nuit en mouvement, en train de s'ecouler. Le verset 5 conclut par une question rhetorique. La serie des serments boucle : aube (v1) → nuits comptees (v2) → abstraction numerique (v3) → nuit en mouvement (v4). Le retour a la nuit en mouvement avant la conclusion (v5) cree un effet d'inclusion — l'aube du verset 1 et la nuit du verset 4 encadrent les serments.",
        axe3_sourate: "La nuit qui s'ecoule precede immediatement la question conclusive (v5) et le recit des civilisations detruites (v6-14). La nuit en mouvement prefigure le passage du temps qui emporte les civilisations — comme la nuit s'ecoule inexorablement, les empires passent et disparaissent. Ad, Thamud et Pharaon ont ete emportes par l'ecoulement du temps comme la nuit est emportee par l'aube. Le dernier serment avant la conclusion est un serment par le passage du temps.",
        axe4_coherence: "Le Coran jure par la nuit dans plusieurs sourates : en 92:1 « par la nuit quand elle couvre » (al-layli idha yaghsha), en 93:2 « par la nuit quand elle s'etend » (wal-layli idha saja). Chaque serment par la nuit qualifie la nuit par une action differente : couvrir (92:1), s'etendre (93:2), s'ecouler (89:4). Le choix du verbe yasri (s'ecouler) dans cette sourate est specifique — il souligne le mouvement de passage plutot que le couvrement ou l'etendue. Le Coran adapte la qualification de la nuit au theme de chaque sourate.",
        axe5_frequence: "La nuit qui s'ecoule rappelle que le temps ne s'arrete pas. Pour l'etre humain dans sa mission de civilisation, l'ecoulement de la nuit est un rappel quotidien que chaque moment passe et ne revient pas. Les civilisations decrites dans la suite de la sourate ont ignore cet ecoulement — elles se croyaient permanentes dans un monde ou tout s'ecoule. La nuit qui passe est le modele cosmique de la finitude."
      }
    }
  }, 1);

  // ---- SRY (سري) — id=523 — "s'ecouler" ----
  // Forme: yasri = verbe inaccompli forme I, 3eme personne masculin (il s'ecoule)
  // Note: le ya' final est supprime pour la rime (yasri au lieu de yasri:)
  await upsertVWA(verse_id, 'sry', "s'ecouler", {
    sense_chosen: "s'ecouler",
    concept_chosen: "Voyage nocturne",
    concepts: {
      "Voyage nocturne": {
        status: "retenu",
        senses: ["voyager de nuit", "marcher la nuit", "Isra"],
        proof_ctx: "Le sens retenu est « Voyage nocturne ». Le Lane's (Edward Lane, 1863) donne pour sara/yasri : voyager de nuit, marcher pendant la nuit, se deplacer dans l'obscurite. Le verbe yasri est un inaccompli forme I a la troisieme personne — il/elle voyage de nuit. Le sujet grammatical est al-layl (la nuit) du debut du verset — « la nuit quand elle voyage/s'ecoule ». L'application du verbe a la nuit elle-meme (et non a une personne qui voyage dans la nuit) cree une image : la nuit est personifiee comme une entite qui se deplace, qui traverse le temps et finit par s'en aller. Le sens de « voyager de nuit » applique a la nuit donne « s'ecouler » — la nuit voyage a travers le temps. Distinction avec « Ecoulement » (couler comme l'eau) : le Lane's donne aussi le sens de couler pour la racine s-r-y. Mais le verbe sara dans le sens de couler s'applique a l'eau, pas a la nuit. La nuit ne coule pas — elle se deplace, elle passe, elle s'ecoule au sens temporel. Distinction avec « Secret/Intimite » : le Lane's donne sarr/sirr pour le secret. Mais ce sens appartient a la racine s-r-r, pas s-r-y. Le verbe yasri est de la racine s-r-y (voyager de nuit), pas s-r-r (secret).",
        axe1_verset: "Le verset dit « par la nuit quand elle s'ecoule ». Le verbe yasri qualifie la nuit par son action propre — elle s'ecoule, elle passe, elle voyage a travers le temps. Le champ lexical est celui du mouvement temporel : la nuit en deplacement. La particule idha (quand) introduit la condition temporelle — le serment porte sur la nuit au moment precis ou elle s'ecoule, pas sur la nuit en general. L'inaccompli (yasri) montre une action en cours, repetee — la nuit s'ecoule chaque nuit, c'est un phenomene recurrent et continu. Le ya' final est supprime pour la rime (fasila), ce qui est une convention de la prose rimee coranique.",
        axe2_voisins: "Le verset 1 a jure par l'aube (le debut du jour). Le verset 4 jure par la nuit qui s'ecoule (la fin de la nuit). Aube et nuit qui s'ecoule sont deux moments complementaires du meme phenomene : la transition de l'obscurite a la lumiere. Le verset 2 avait compte les nuits (dix). Le verset 4 montre la nuit en mouvement — le passage du comptage statique au mouvement dynamique. Le verset 5 qui suit conclut la serie par une question : le passage de la nuit est le dernier serment avant la conclusion.",
        axe3_sourate: "La nuit qui s'ecoule est le dernier serment avant le recit des civilisations detruites. Ce dernier serment evoque le passage du temps — la nuit passe inexorablement comme les civilisations passent. Ad, Thamud et Pharaon ont ete emportes par le temps comme la nuit est emportee par l'aube. Le verbe yasri (s'ecouler/passer) annonce le theme du passage et de la disparition qui structure toute la suite de la sourate. Le dernier serment est un serment par l'impermanence.",
        axe4_coherence: "Le Coran utilise la racine s-r-y dans le recit du voyage nocturne (Isra) : en 17:1 « Gloire a Celui qui a fait voyager de nuit Son serviteur » (asra bi-'abdihi laylan). Le verbe asra (forme IV de s-r-y) designe le voyage nocturne comme acte divin. Le voyage nocturne est un deplacement dans l'obscurite avec une destination. Dans cette sourate, la nuit elle-meme « voyage » — elle se deplace a travers le temps vers l'aube. L'usage de la meme racine dans des contextes differents (l'Isra du Prophete et l'ecoulement de la nuit) cree un reseau semantique autour du deplacement nocturne.",
        axe5_frequence: "L'ecoulement de la nuit rappelle que le temps est en mouvement permanent. Pour l'etre humain dans sa mission de civilisation, la nuit qui s'ecoule est un rappel que chaque periode d'obscurite a une fin. Les civilisations decrites dans la sourate ont vecu dans la nuit de leur transgression — mais cette nuit s'est ecoulee et l'aube de la retribution est arrivee. Le verbe yasri donne a ce passage un caractere inexorable — la nuit ne choisit pas de s'ecouler, elle le fait par nature."
      },
      "Ecoulement": {
        status: "peu_probable",
        senses: ["couler", "ruisseler"],
        proof_ctx: "Le Lane's donne aussi le sens de couler pour des derives de la racine s-r-y. Mais le verbe sara dans le sens de couler s'applique a l'eau et aux liquides. La nuit ne coule pas materiellement — elle se deplace dans le temps. Le sens de « voyager de nuit » applique a la nuit elle-meme donne plus naturellement « s'ecouler » au sens temporel que « couler » au sens physique. Le sujet est la nuit, pas un liquide.",
        axe1_verset: "Le verset dit « la nuit quand elle s'ecoule ». Si on retenait le sens de couler physiquement, la nuit serait comparee a un liquide qui ruisselle. Cette image est possible mais inhabituelle — le Coran ne presente pas la nuit comme un liquide dans d'autres passages. Le sens de voyager de nuit applique a la nuit est plus naturel et plus conforme a l'usage arabe classique.",
        axe2_voisins: "Les versets voisins parlent de phenomenes cosmiques et temporels (aube, nuits, pair/impair). L'ecoulement liquide ne s'integre pas dans cette serie. Le voyage/passage temporel est plus coherent avec le champ lexical cosmique de la serie de serments.",
        axe3_sourate: "La sourate parle de civilisations qui passent et disparaissent — le sens de passage temporel (la nuit voyage et finit par partir) est plus pertinent que le sens d'ecoulement liquide pour annoncer le theme de la disparition des civilisations.",
        axe4_coherence: "Le Coran utilise la racine s-r-y principalement dans le sens de voyager de nuit (17:1). Le sens d'ecoulement liquide est plus rare et generalement lie a d'autres racines. Le sens de voyage nocturne est plus solidement atteste dans le Coran pour cette racine.",
        axe5_frequence: "L'ecoulement liquide est un phenomene observable mais qui ne s'applique pas naturellement a la nuit. Le passage temporel de la nuit est un phenomene quotidien que tout etre humain observe — il est plus universel et plus immediatement comprehensible."
      },
      "Secret/Intimite": {
        status: "nul",
        senses: ["secret", "intimite nocturne"],
        proof_ctx: "Le sens de secret (sirr) appartient a la racine s-r-r, pas a la racine s-r-y. Le verbe yasri dans ce verset vient de sara/yasri (voyager de nuit — racine s-r-y), pas de asarra (cacher — racine s-r-r). C'est une confusion de racines. Hors sujet."
      }
    }
  }, 2);

  await upsertVA(verse_id, {
    segments: [
      { fr: "Et par la nuit", pos: "nom", phon: "wal-layli", arabic: "\u0648\u064E\u0671\u0644\u0651\u064E\u064A\u0652\u0644\u0650", word_key: "lyl", is_particle: false, sense_retenu: "nuit", position: 1, prefix_particle: "wa" },
      { fr: "quand", phon: "idha", arabic: "\u0625\u0650\u0630\u064E\u0627", is_particle: true, position: 2 },
      { fr: "elle s'ecoule", pos: "verbe", phon: "yasri", arabic: "\u064A\u064E\u0633\u0652\u0631\u0650", word_key: "sry", is_particle: false, sense_retenu: "s'ecouler", position: 3 }
    ],
    translation_arab: "Et par la nuit quand elle s'ecoule",
    full_translation: "par la nuit quand elle s'ecoule!",
    translation_explanation: `§DEMARCHE§

Le verset est le quatrieme et dernier serment de la serie d'ouverture. Le mot al-layli (la nuit) est un nom defini par al- au genitif apres la particule de serment wa-. Le Lane's (Edward Lane, 1863) donne pour layl : la nuit, la periode d'obscurite. La particule idha (quand) introduit une proposition temporelle qui qualifie la nuit par son action.

Le verbe yasri est un inaccompli forme I de la racine s-r-y. Le Lane's donne pour sara : voyager de nuit, se deplacer dans l'obscurite. Applique a la nuit elle-meme (al-layl), le verbe cree une image de la nuit qui se deplace, qui passe, qui s'ecoule a travers le temps. L'inaccompli marque une action en cours et repetee — la nuit s'ecoule chaque nuit, c'est un phenomene recurrent. Le ya' final est supprime pour respecter la rime (fasila) de la sourate — c'est une convention de la prose rimee coranique, pas une modification du sens.

Le serment porte sur la nuit au moment precis ou elle passe — pas sur la nuit statique mais sur la nuit en mouvement. C'est le mouvement de passage qui est solennel, pas l'obscurite en soi.

§JUSTIFICATION§

**nuit** — Le sens retenu est « Nuit/Obscurite ». Le mot « nuit » traduit al-layl comme la periode d'obscurite. Aucune alternative — le mot designe exclusivement la nuit.

**s'ecoule** — Le sens retenu est « Voyage nocturne ». Le verbe « s'ecouler » traduit yasri comme le deplacement/passage de la nuit a travers le temps. « Passe » acceptable mais moins evocateur — « s'ecouler » rend l'idee de mouvement continu et inexorable que porte le verbe sara. « Coule » ecarte car trop physique (liquide) — la nuit ne coule pas materiellement. « Voyage » ecarte car il suggere un deplacement volontaire avec une destination, alors que la nuit s'ecoule naturellement sans intention.

§CRITIQUE§

Hamidullah traduit : « par la nuit quand elle s'ecoule ! ». La traduction est identique a la notre. Le verbe « s'ecouler » est le choix standard en francais pour rendre yasri applique a la nuit — il combine l'idee de mouvement temporel (le temps s'ecoule) et de passage (la nuit passe). Les traducteurs s'accordent sur ce choix car le verbe sara applique a la nuit produit naturellement le sens de « passer/s'ecouler » en contexte. La nuance du voyage nocturne (la racine s-r-y liee a l'Isra en 17:1) est perdue dans la traduction francaise — le mot « s'ecouler » ne porte pas la dimension de deplacement nocturne que porte la racine arabe.`
  });

  console.log('VERSET 89:4 — TERMINE');
  console.log('  lyl -> "nuit" | sry -> "s\'ecouler"');
  console.log('  Traduction : "Et par la nuit quand elle s\'ecoule"');
}

// ================================================================
// VERSET 89:5 — هَلْ فِى ذَٰلِكَ قَسَمٌ لِّذِى حِجْرٍ
// ================================================================
async function verse89_5() {
  console.log('\n=== VERSET 89:5 — هَلْ فِى ذَٰلِكَ قَسَمٌ لِّذِى حِجْرٍ ===');
  const verse_id = 5998;

  // ---- QSM (قسم) — id=1433 — "serment" ----
  // Forme: qasamun = nom indefini au nominatif (sujet de la phrase interrogative)
  await upsertVWA(verse_id, 'qsm', 'serment', {
    sense_chosen: "serment",
    concept_chosen: "Serment",
    concepts: {
      "Serment": {
        status: "retenu",
        senses: ["jurer", "serment", "prestation de serment"],
        proof_ctx: "Le sens retenu est « Serment ». Le Lane's (Edward Lane, 1863) donne pour qasam : le serment, l'acte de jurer. Le mot qasamun est un nom indefini au nominatif — c'est le sujet de la phrase interrogative. L'indefinition (qasamun, pas al-qasam) donne au serment une dimension d'intensite : un serment tellement grand qu'il depasse la definition. Le verset conclut la serie de quatre serments (v1-4) par une question rhetorique sur leur suffisance. Le qasam est l'acte de prendre a temoin — ici le texte demande si les temoins invoquers (l'aube, les dix nuits, le pair et l'impair, la nuit qui s'ecoule) constituent un serment suffisant. Distinction avec « Partage/Division » : le Lane's donne aussi qasama dans le sens de partager, diviser (qisma — part, portion). Ce sens de division est un emploi distinct de la racine q-s-m. Le contexte du verset est explicitement celui du serment (le verset conclut quatre serments) — le sens de partage est hors sujet.",
        axe1_verset: "Le verset dit « N'y a-t-il pas dans cela un serment pour celui qui a une raison ? ». Le mot qasamun est le pivot de la question rhetorique. Le champ lexical est celui du temoignage solennel : la question (hal — est-ce que), la reference aux serments precedents (dhalika — cela), le serment (qasamun), le destinataire (celui qui a une raison). Le verset ne fait pas un nouveau serment — il interroge la valeur des serments deja faits. La question rhetorique attend une reponse positive : oui, il y a bien un serment suffisant dans tout ce qui precede. Le mot qasamun est indefini, ce qui renforce la question : « y a-t-il UN serment (aussi grand soit-il) ? ».",
        axe2_voisins: "Les versets 1 a 4 sont les serments. Le verset 5 est la conclusion qui valide l'ensemble. Les versets 6 et suivants commenceront le propos principal de la sourate (le recit des civilisations detruites). Le verset 5 fait la charniere entre les serments (v1-4) et le message (v6-30). Il dit en substance : ces serments sont-ils suffisants pour convaincre une personne raisonnable ? La question rhetorique cree une pause avant le recit qui suit — le lecteur est invite a reflechir avant de recevoir le message.",
        axe3_sourate: "Le serment est le mode d'ouverture de cette sourate. Le verset 5 thematise explicitement ce mode — il ne se contente pas de jurer, il pose la question de la valeur du serment. Cette reflexivite est rare dans le Coran : la sourate commente sa propre methode d'argumentation. Le serment n'est pas un simple procede rhetorique — c'est un appel a la raison (hijr) du lecteur. La sourate dit : si tu as de la raison, ces serments te suffisent pour comprendre la gravite de ce qui suit.",
        axe4_coherence: "Le Coran utilise la racine q-s-m dans les deux sens : le serment (56:76 — « j'en jure par les positions des etoiles ») et le partage (15:44 — « elle a sept portes, a chaque porte une part assignee »). Le sens de serment est specifiquement active dans cette sourate par le contexte des quatre serments precedents. Le Coran commente rarement ses propres serments — le verset 5 est une reflexion metalinguistique sur la fonction du serment qui est rare et remarquable.",
        axe5_frequence: "Le serment comme acte de prise a temoin rappelle que la parole a un poids. Pour l'etre humain dans sa mission de civilisation, le serment est un acte de responsabilite — celui qui jure engage sa credibilite. Le verset demande si les temoins cosmiques (aube, nuits, pair/impair, nuit qui s'ecoule) sont assez grands pour constituer un serment valable. La reponse implicite est que oui — le cosmos entier temoigne de la verite du message qui suit."
      },
      "Partage/Division": {
        status: "nul",
        senses: ["partager", "diviser", "part"],
        proof_ctx: "Le Lane's donne qasama dans le sens de partager, distribuer en parts. Le contexte du verset est explicitement celui du serment — le mot qasamun apparait apres quatre serments (v1-4) et dans une question sur leur suffisance. Le sens de partage n'a aucun rapport avec ce contexte. Hors sujet."
      }
    }
  }, 4);

  // ---- HJR (حجر) — id=376 — "raison" ----
  // Forme: hijrin = nom indefini au genitif apres li-dhi (pour celui qui a)
  await upsertVWA(verse_id, 'hjr', 'raison', {
    sense_chosen: "raison",
    concept_chosen: "Interdit/Enclos",
    concepts: {
      "Interdit/Enclos": {
        status: "retenu",
        senses: ["interdit", "sanctuaire", "enclos", "protection"],
        proof_ctx: "Le sens retenu est « Interdit/Enclos ». Le Lane's (Edward Lane, 1863) donne pour hijr : l'interdit, l'enclos, ce qui est protege par une barriere. Le mot hijr designe fondamentalement une enceinte qui separe et protege — un espace clos, un sanctuaire, une zone interdite. Par extension, le hijr designe la raison humaine car la raison est ce qui « enclos » l'esprit — elle met des barrieres entre le vrai et le faux, entre le permissible et l'interdit. La raison est un hijr mental : une faculte qui delimite, protege et interdit. Le Lane's confirme explicitement cette extension : hijr designe l'intelligence car l'intelligence interdit (yahjuru) a son possesseur de faire ce qui est indigne. Le mot hijrin est indefini au genitif apres li-dhi (pour celui qui possede). L'expression dhi hijrin signifie « celui qui possede un enclos mental » — celui qui a une raison qui delimite le vrai du faux. Distinction avec « Pierre/Materiau » : le Lane's donne hajar pour la pierre, la roche. Ce sens physique n'est pas active dans cette construction — dhi hijrin (possesseur de hijr) ne signifie pas « possesseur de pierre ». Distinction avec « Migration/Separation » : le Lane's donne hajara pour emigrer, abandonner. Ce sens de deplacement ne s'applique pas — le verset parle de quelqu'un qui POSSEDE quelque chose, pas de quelqu'un qui part.",
        axe1_verset: "Le verset dit « un serment pour celui qui a une raison ». Le mot hijrin est le dernier mot significatif de la serie de serments — il designe le destinataire du serment. Le champ lexical est celui de la capacite intellectuelle : la question rhetorique (hal), le serment (qasamun), le destinataire raisonnable (dhi hijrin). Le verset dit que les serments cosmiques precedents sont destines a ceux qui ont la faculte de raisonner — ceux dont l'esprit est un enclos qui separe le vrai du faux. Le mot hijr comme « enclos mental » donne a la raison une dimension de protection : la raison protege son possesseur de l'erreur en creant des barrieres.",
        axe2_voisins: "Les versets 1-4 sont les serments cosmiques. Le verset 5 les destine a ceux qui ont une raison. Les versets 6-14 racontent l'histoire de ceux qui n'avaient PAS cette raison — Ad, Thamud et Pharaon ont transgresse malgre les signes. Le verset 5 fait la transition : apres les serments cosmiques, il identifie le destinataire (l'homme raisonnable) avant de montrer des exemples de ceux qui ont manque de raison. La raison (hijr) est le critere qui separe ceux qui comprennent les serments de ceux qui les ignorent.",
        axe3_sourate: "La raison est le critere central de la sourate. Le recit des civilisations detruites (v6-14) illustre l'absence de raison — des peuples qui avaient la puissance mais pas la sagesse de comprendre les signes. Le verset 5 pose la raison comme condition de comprehension avant de montrer son absence. La sourate entiere est un appel a la raison : les serments cosmiques sont les preuves, la raison est l'outil de comprehension, les recits sont les exemples negatifs.",
        axe4_coherence: "Le Coran utilise la racine h-j-r dans plusieurs sens : al-hijr comme region interdite (15:80 — les habitants d'al-Hijr/Thamud), hijr comme raison (89:5), hajar comme pierre (2:74). Le sens d'enclos/interdit est le fil commun — une zone delimitee et protegee. Dans cette sourate, hijr designe la faculte mentale qui delimite et protege. En 25:22, « et ils ont cree un hijr hajra » (une barriere interdite) — la notion de barriere protectrice est au coeur de la racine.",
        axe5_frequence: "La raison comme enclos mental est un outil fondamental pour l'etre humain dans sa mission de civilisation. Le hijr est la faculte qui permet de distinguer le vrai du faux, le juste de l'injuste — c'est l'outil par lequel l'etre humain comprend les signes et agit en consequence. Sans hijr, les serments cosmiques restent des phenomenes naturels sans signification. Avec hijr, ils deviennent des temoins de verites que l'etre humain peut saisir et appliquer."
      },
      "Pierre/Materiau": {
        status: "nul",
        senses: ["pierre", "roche"],
        proof_ctx: "Le Lane's donne hajar pour la pierre. L'expression dhi hijrin signifie « celui qui possede un hijr ». On ne dit pas « celui qui possede une pierre » dans un contexte de question rhetorique sur la suffisance de serments cosmiques. Le sens de pierre est physique et hors sujet dans cette construction grammaticale."
      },
      "Migration/Separation": {
        status: "nul",
        senses: ["emigrer", "abandonner"],
        proof_ctx: "Le Lane's donne hajara pour emigrer, quitter son pays. Le verset parle de quelqu'un qui POSSEDE quelque chose (dhi — possesseur de). On ne « possede » pas une emigration — on la fait. La construction grammaticale (dhi + nom) impose un objet possedable, ce que la migration n'est pas. Hors sujet."
      },
      "Sens isole/Giron": {
        status: "nul",
        senses: ["giron"],
        proof_ctx: "Le Lane's donne hijr dans le sens de giron (le creux des genoux). Ce sens anatomique n'a aucun rapport avec le contexte d'une question rhetorique sur les serments cosmiques. Hors sujet."
      }
    }
  }, 6);

  await upsertVA(verse_id, {
    segments: [
      { fr: "N'y a-t-il pas", phon: "hal", arabic: "\u0647\u064E\u0644\u0652", is_particle: true, position: 1 },
      { fr: "dans cela", phon: "fi dhalika", arabic: "\u0641\u0650\u0649 \u0630\u064E\u0670\u0644\u0650\u0643\u064E", is_particle: true, position: 2 },
      { fr: "un serment", pos: "nom", phon: "qasamun", arabic: "\u0642\u064E\u0633\u064E\u0645\u064C", word_key: "qsm", is_particle: false, sense_retenu: "serment", position: 4 },
      { fr: "pour celui qui a", phon: "li-dhi", arabic: "\u0644\u0650\u0651\u0630\u0650\u0649", is_particle: true, position: 5 },
      { fr: "une raison", pos: "nom", phon: "hijrin", arabic: "\u062D\u0650\u062C\u0652\u0631\u064D", word_key: "hjr", is_particle: false, sense_retenu: "raison", position: 6 }
    ],
    translation_arab: "N'y a-t-il pas dans cela un serment pour celui qui a une raison ?",
    full_translation: "N'est-ce pas la un serment, pour un doue d'intelligence?",
    translation_explanation: `§DEMARCHE§

Le verset est une question rhetorique qui conclut la serie de quatre serments (v1-4). La particule hal introduit une question qui attend une reponse positive — c'est l'equivalent de « n'est-ce pas vrai que... ». La preposition fi (dans) suivie du demonstratif dhalika (cela) renvoie a l'ensemble des serments precedents (l'aube, les dix nuits, le pair et l'impair, la nuit qui s'ecoule).

Le mot qasamun (un serment) est un nom indefini au nominatif — c'est le sujet de la phrase. Le Lane's (Edward Lane, 1863) donne pour qasam : le serment, l'acte de jurer. L'indefinition renforce la question : « y a-t-il UN serment (suffisant) dans tout cela ? ». Le qasam designe ici l'acte de prise a temoin — les phenomenes cosmiques invoquers sont-ils des temoins assez grands ?

La preposition li (pour) suivie de dhi (celui qui possede) + hijrin (une raison) identifie le destinataire du serment. Le Lane's donne pour hijr : l'enclos, l'interdit, et par extension la raison — car la raison est la faculte qui « enclos » l'esprit en creant des barrieres entre le vrai et le faux. L'expression dhi hijrin designe « celui qui possede un enclos mental » — celui qui a la capacite de raisonner et de distinguer.

La structure complete est : question rhetorique (hal) + reference aux serments (fi dhalika) + objet (qasamun) + destinataire (li-dhi hijrin). Le verset dit : tout ce qui precede (aube, nuits, pair/impair, nuit en mouvement) constitue bien un serment suffisant pour quiconque possede la faculte de raisonner.

§JUSTIFICATION§

**serment** — Le sens retenu est « Serment ». Le mot « serment » traduit qasamun comme l'acte de jurer et de prendre a temoin. Le sens de « partage » (qisma) est exclu par le contexte — le verset conclut explicitement une serie de serments. « Engagement » ecarte car trop faible — le qasam est un acte solennel de prise a temoin, pas un simple engagement.

**raison** — Le sens retenu est « Interdit/Enclos ». Le mot « raison » traduit hijrin comme l'enclos mental qui separe le vrai du faux. Le Lane's confirme que hijr designe l'intelligence car elle interdit a son possesseur les actes indignes. « Intelligence » acceptable mais « raison » est plus large — il inclut la capacite de juger, pas seulement la vivacite d'esprit. « Discernement » acceptable mais « raison » est plus courant en francais et plus immediatement comprehensible.

§CRITIQUE§

Hamidullah traduit : « N'est-ce pas la un serment, pour un doue d'intelligence ? ». La traduction de Hamidullah utilise « doue d'intelligence » pour dhi hijrin. Notre traduction utilise « celui qui a une raison ». Les deux formulations sont proches mais « raison » est prefere car il rend mieux l'idee d'enclos mental (hijr) — la raison est ce qui delimite et protege l'esprit, tandis que l'intelligence est une capacite plus generale. Hamidullah utilise aussi « N'est-ce pas la » pour hal fi dhalika, tandis que notre traduction utilise « N'y a-t-il pas dans cela » qui est plus litterale et plus proche de la structure arabe. La nuance est mineure — les deux traductions rendent fidelement le sens du verset.`
  });

  console.log('VERSET 89:5 — TERMINE');
  console.log('  qsm -> "serment" | hjr -> "raison"');
  console.log('  Traduction : "N\'y a-t-il pas dans cela un serment pour celui qui a une raison ?"');
}

// ================================================================
// MAIN — Execution sequentielle
// ================================================================
(async () => {
  console.log('=== PIPELINE SOURATE 89 (AL-FAJR) — PARTIE 1 (v1-5) ===\n');

  await verse89_1();
  await verse89_2();
  await verse89_3();
  await verse89_4();
  await verse89_5();

  console.log('\n=== PIPELINE TERMINEE — SOURATE 89 v1-5 ===');
  process.exit(0);
})();
