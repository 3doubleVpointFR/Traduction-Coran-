/**
 * Pipeline maison V3 — Sourate 3, Verset 7
 *
 * Verset majeur : versets clairs (muḥkamāt) vs versets ambigus (mutashābihāt).
 *
 * 46 mots. Étape 2 : ajouts ciblés
 * - hkm + "fermement établi" dans Sagesse
 * - awl + "interprétation" dans Retour/Origine
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VID = 300;

async function addSense(word_key, concept, sense, proof) {
  const wa = await db.from('word_analyses').select('id').eq('word_key', word_key).single();
  const aid = wa.data.id;
  const exists = await db.from('word_meanings').select('id').eq('analysis_id', aid).eq('sense', sense).maybeSingle();
  if (exists.data) { console.log(`  ⊙ "${sense}" déjà présent pour ${word_key}`); return; }
  await db.from('word_meanings').insert({
    analysis_id: aid, concept, sense, status: 'retenu',
    proof_ctx: proof, meaning_type: 'etymology', description: '', display_order: 99
  });
  console.log(`  ✓ "${sense}" ajouté à ${word_key}/${concept}`);
}

const SEGMENTS = [
  { fr: "C'est Lui",         pos: 'PRON',  phon: 'huwa',           arabic: 'هُوَ',           position: 1,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'qui',               pos: 'REL',   phon: 'al-ladhī',       arabic: 'ٱلَّذِىٓ',       position: 2,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'faire descendre',   pos: 'V',     phon: 'anzala',         arabic: 'أَنزَلَ',        position: 3,  word_key: 'nzl', is_particle: false, sense_retenu: 'faire descendre' },
  { fr: 'sur toi',           pos: 'P',     phon: 'ʿalayka',        arabic: 'عَلَيْكَ',       position: 4,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'écriture révélée',  pos: 'N',     phon: 'al-kitāba',      arabic: 'ٱلْكِتَٰبَ',     position: 5,  word_key: 'ktb', is_particle: false, sense_retenu: 'écriture révélée' },
  { fr: 'parmi elle',        pos: 'P',     phon: 'minhu',          arabic: 'مِنْهُ',         position: 6,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'signe',             pos: 'N',     phon: 'āyātun',         arabic: 'ءَايَٰتٌ',       position: 7,  word_key: 'ayy', is_particle: false, sense_retenu: 'signe' },
  { fr: 'fermement établi',  pos: 'ADJ',   phon: 'muḥkamātun',     arabic: 'مُّحْكَمَٰتٌ',  position: 8,  word_key: 'hkm', is_particle: false, sense_retenu: 'fermement établi' },
  { fr: 'elles',             pos: 'PRON',  phon: 'hunna',          arabic: 'هُنَّ',          position: 9,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'source',            pos: 'N',     phon: 'ummu',           arabic: 'أُمُّ',          position: 10, word_key: 'amm', is_particle: false, sense_retenu: 'source' },
  { fr: 'écriture révélée',  pos: 'N',     phon: 'al-kitābi',      arabic: 'ٱلْكِتَٰبِ',     position: 11, word_key: 'ktb', is_particle: false, sense_retenu: 'écriture révélée' },
  { fr: 'autre',             pos: 'N',     phon: 'wa-ukharu',      arabic: 'وَأُخَرُ',       position: 12, word_key: 'akhr',is_particle: false, sense_retenu: 'autre' },
  { fr: 'semblable',         pos: 'ADJ',   phon: 'mutashābihātun', arabic: 'مُتَشَٰبِهَٰتٌ',position: 13, word_key: 'shbh',is_particle: false, sense_retenu: 'semblable' },
  { fr: 'quant à',           pos: 'EXL',   phon: 'fa-ammā',        arabic: 'فَأَمَّا',       position: 14, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'ceux qui',          pos: 'COND',  phon: 'al-ladhīna',     arabic: 'ٱلَّذِينَ',      position: 15, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'dans',              pos: 'P',     phon: 'fī',             arabic: 'فِى',            position: 16, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'coeur',             pos: 'N',     phon: 'qulūbihim',      arabic: 'قُلُوبِهِمْ',   position: 17, word_key: 'qlb', is_particle: false, sense_retenu: 'coeur' },
  { fr: 'dévier',            pos: 'N',     phon: 'zayghun',        arabic: 'زَيْغٌ',         position: 18, word_key: 'zygh',is_particle: false, sense_retenu: 'dévier' },
  { fr: 'suivre',            pos: 'V',     phon: 'fa-yattabiʿūna', arabic: 'فَيَتَّبِعُونَ',position: 19, word_key: 'tbe', is_particle: false, sense_retenu: 'suivre' },
  { fr: 'ce qui',            pos: 'REL',   phon: 'mā',             arabic: 'مَا',            position: 20, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'ressembler',        pos: 'V',     phon: 'tashābaha',      arabic: 'تَشَٰبَهَ',      position: 21, word_key: 'shbh',is_particle: false, sense_retenu: 'ressembler' },
  { fr: 'parmi elle',        pos: 'P',     phon: 'minhu',          arabic: 'مِنْهُ',         position: 22, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'chercher',          pos: 'N',     phon: 'ibtighāʾa',      arabic: 'ٱبْتِغَآءَ',    position: 23, word_key: 'bghy',is_particle: false, sense_retenu: 'chercher' },
  { fr: 'discorde',          pos: 'N',     phon: 'al-fitnati',     arabic: 'ٱلْفِتْنَةِ',   position: 24, word_key: 'ftn', is_particle: false, sense_retenu: 'discorde' },
  { fr: 'chercher',          pos: 'N',     phon: 'wa-btighāʾa',    arabic: 'وَٱبْتِغَآءَ',  position: 25, word_key: 'bghy',is_particle: false, sense_retenu: 'chercher' },
  { fr: 'interprétation',    pos: 'N',     phon: 'taʾwīlihi',      arabic: 'تَأْوِيلِهِۦ', position: 26, word_key: 'awl', is_particle: false, sense_retenu: 'interprétation' },
  { fr: 'et ne',             pos: 'NEG',   phon: 'wa-mā',          arabic: 'وَمَا',          position: 27, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'savoir',            pos: 'V',     phon: 'yaʿlamu',        arabic: 'يَعْلَمُ',       position: 28, word_key: 'elm', is_particle: false, sense_retenu: 'savoir' },
  { fr: 'interprétation',    pos: 'N',     phon: 'taʾwīlahu',      arabic: 'تَأْوِيلَهُۥٓ',position: 29, word_key: 'awl', is_particle: false, sense_retenu: 'interprétation' },
  { fr: 'sinon',             pos: 'RES',   phon: 'illā',           arabic: 'إِلَّا',         position: 30, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'Dieu',              pos: 'PN',    phon: 'allāhu',         arabic: 'ٱللَّهُ',        position: 31, word_key: 'alh', is_particle: false, sense_retenu: 'Dieu' },
  { fr: 'enraciné',          pos: 'N',     phon: 'wa-r-rāsikhūna', arabic: 'وَٱلرَّٰسِخُونَ',position:32, word_key: 'rsx', is_particle: false, sense_retenu: 'enraciné' },
  { fr: 'dans',              pos: 'P',     phon: 'fī',             arabic: 'فِى',            position: 33, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'savoir',            pos: 'N',     phon: 'al-ʿilmi',       arabic: 'ٱلْعِلْمِ',     position: 34, word_key: 'elm', is_particle: false, sense_retenu: 'savoir' },
  { fr: 'dire',              pos: 'V',     phon: 'yaqūlūna',       arabic: 'يَقُولُونَ',    position: 35, word_key: 'qwl', is_particle: false, sense_retenu: 'dire' },
  { fr: 'accorder confiance',pos: 'V',     phon: 'āmannā',         arabic: 'ءَامَنَّا',      position: 36, word_key: 'amn', is_particle: false, sense_retenu: 'accorder confiance' },
  { fr: 'à lui',             pos: 'PRON',  phon: 'bihi',           arabic: 'بِهِۦ',          position: 37, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'tout',              pos: 'N',     phon: 'kullun',         arabic: 'كُلٌّ',          position: 38, word_key: 'kll', is_particle: false, sense_retenu: 'tout' },
  { fr: 'de',                pos: 'P',     phon: 'min',            arabic: 'مِّنْ',          position: 39, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'auprès de',         pos: 'N',     phon: 'ʿindi',          arabic: 'عِندِ',          position: 40, word_key: 'end', is_particle: false, sense_retenu: 'auprès de' },
  { fr: 'Seigneur',          pos: 'N',     phon: 'rabbinā',        arabic: 'رَبِّنَا',      position: 41, word_key: 'rbb', is_particle: false, sense_retenu: 'Seigneur' },
  { fr: 'et ne',             pos: 'NEG',   phon: 'wa-mā',          arabic: 'وَمَا',          position: 42, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'se rappeler',       pos: 'V',     phon: 'yadhdhakkaru',   arabic: 'يَذَّكَّرُ',    position: 43, word_key: 'dhkr',is_particle: false, sense_retenu: 'se rappeler' },
  { fr: 'sinon',             pos: 'RES',   phon: 'illā',           arabic: 'إِلَّآ',         position: 44, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'détenteurs',        pos: 'N',     phon: 'ʾulū',           arabic: 'أُو۟لُوا۟',      position: 45, word_key: 'awl', is_particle: false, sense_retenu: 'détenteurs' },
  { fr: 'intelligence',      pos: 'N',     phon: 'al-albābi',      arabic: 'ٱلْأَلْبَٰبِ',  position: 46, word_key: 'lbb', is_particle: false, sense_retenu: 'intelligence' },
];

async function loadConcepts(word_key) {
  const wa = await db.from('word_analyses').select('id').eq('word_key', word_key).single();
  const wm = await db.from('word_meanings').select('concept, sense').eq('analysis_id', wa.data.id);
  const out = {};
  for (const m of wm.data || []) {
    if (!out[m.concept]) out[m.concept] = { senses: [], status: 'nul', proof_ctx: '' };
    out[m.concept].senses.push(m.sense);
  }
  return out;
}

function buildAxes(concepts, retenuName, senseChose, retenuProof, otherProofs = {}) {
  const out = {};
  for (const [name, body] of Object.entries(concepts)) {
    out[name] = {
      senses: body.senses,
      status: name === retenuName ? 'retenu' : (otherProofs[name] ? 'probable' : 'nul'),
      proof_ctx: name === retenuName ? retenuProof : (otherProofs[name] || 'Hors sujet pour ce verset.'),
    };
  }
  return { sense_chosen: senseChose, concept_chosen: retenuName, concepts: out };
}

const TRANSLATION_ARAB = "C'est Lui qui a fait descendre sur toi l'écriture. Il s'y trouve des signes fermement établis qui sont la source de l'écriture, et d'autres semblables. Quant à ceux dans le coeur desquels il y a une déviation, ils suivent ce qui s'apparente parmi elle en quête de la discorde et en quête de son interprétation. Et nul ne connaît son interprétation sinon Dieu. Et les enracinés dans le savoir disent : « Nous lui accordons confiance, tout vient d'auprès de notre Seigneur. » Et ne se rappellent que les détenteurs d'intelligence.";
const FULL_TRANSLATION = "C'est Lui qui a fait descendre sur toi le Livre : il s'y trouve des versets sans équivoque, qui sont la base du Livre, et d'autres versets qui peuvent prêter à d'interprétations diverses. Les gens, donc, qui ont au cœur une inclination vers l'égarement, mettent l'accent sur les versets à équivoque cherchant la dissension en essayant de leur trouver une interprétation, alors que nul n'en connaît l'interprétation, à part Allah. Mais ceux qui sont bien enracinés dans la science disent : « Nous y croyons : tout est de la part de notre Seigneur ! » Mais, seuls les doués d'intelligence s'en rappellent.";

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Après avoir affirmé la puissance et la sagesse divines (verset 6), le verset 7 décrit la nature de la révélation elle-même : l'écriture descendue contient deux sortes de signes — ceux qui sont fermement établis et clairs, qui forment la source de l'écriture, et ceux qui se ressemblent et peuvent prêter à plusieurs lectures. Le verset distingue alors deux attitudes : ceux qui ont une déviation au coeur cherchent les signes ambigus pour semer la discorde, tandis que ceux qui sont enracinés dans le savoir reconnaissent que tout vient de Dieu.

**anzala** (a fait descendre) est un verbe forme IV (action ponctuelle de descente) de la racine n-z-l. Même forme qu'aux versets 3 et 4 — la révélation descend depuis Dieu vers le destinataire.

**ʿalayka** (sur toi) — la préposition ʿalā + pronom -ka (« toi », masculin singulier). Le « toi » désigne le Prophète Muhammad — destinataire direct de la révélation.

**al-kitāba** (l'écriture révélée) est de la racine k-t-b. L'article al- particularise : LE texte révélé. On garde la dimension scripturaire (texte sacré) plutôt que matérielle (livre).

**āyātun muḥkamātun** (signes fermement établis) — āyāt est le pluriel indéfini de āya (signe, marque). Muḥkamāt est dérivé de la racine ḥ-k-m — la forme du mot (forme passive intensive) dit que ces signes ont été solidement fixés, rendus inébranlables. Le sens est « ce qui ne prête pas à équivoque, qui est clair et solidement établi ».

**hunna ummu l-kitābi** (elles sont la source de l'écriture) — hunna est le pronom « elles » (féminin pluriel) qui reprend les signes muḥkamāt. Ummu est de la racine ʾ-m-m qui a pour sens premier « mère, origine, fondement, source ». L'expression umm al-kitāb signifie littéralement « la mère de l'écriture » — l'origine et le fondement à partir desquels le reste prend sens.

**wa-ukharu mutashābihātun** (et d'autres semblables) — ukhar est le pluriel de ukhrā (autre), de la racine ʾ-kh-r. Mutashābihāt est dérivé de la racine sh-b-h qui veut dire « ressembler, être semblable ». La forme du mot (forme VI, action mutuelle) signifie « qui se ressemblent les uns les autres », « qui peuvent être pris pour autre chose ».

**fa-ammā l-ladhīna** (quant à ceux qui) — fa-ammā est une formule arabe qui introduit une distinction (« quant à... »). Al-ladhīna est le pronom relatif pluriel masculin (« ceux qui »).

**fī qulūbihim zayghun** (dans le coeur desquels il y a une déviation) — qulūb est le pluriel de qalb (coeur), de la racine q-l-b. Zayghun est de la racine z-y-gh qui veut dire « pencher, dévier de la droite voie ». Le mot désigne ici une inclination intérieure vers ce qui s'écarte de la vérité.

**fa-yattabiʿūna** (alors ils suivent) — fa- est une particule de conséquence, et yattabiʿūna est de la racine t-b-ʿ qui veut dire « suivre, marcher derrière, se conformer à ».

**mā tashābaha minhu** (ce qui s'apparente parmi elle) — mā est le pronom relatif (« ce qui »), tashābaha est le verbe de la même racine sh-b-h que mutashābihāt — « ce qui se ressemble, ce qui prête à confusion ».

**ibtighāʾa l-fitnati** (en quête de la discorde) — ibtighāʾa est de la racine b-gh-y qui veut dire « chercher, désirer ». La forme du mot (forme VIII, intensive et active) signifie « la quête active ». Al-fitna est de la racine f-t-n qui désigne la discorde, l'épreuve, la séduction (sens premier : faire fondre l'or au feu pour le purifier).

**wa-btighāʾa taʾwīlihi** (et en quête de son interprétation) — taʾwīl est de la racine ʾ-w-l qui veut dire « retourner à l'origine, ramener au point de départ ». La forme du mot (forme II, nom verbal) désigne l'acte de ramener un texte à son sens originel — l'interprétation au sens d'élucidation.

**wa-mā yaʿlamu taʾwīlahu illā llāhu** (et nul ne connaît son interprétation sinon Dieu) — yaʿlamu est de la racine ʿ-l-m (savoir, connaître). La construction wa-mā... illā est une négation-exception (« rien... sauf »). Seul Dieu connaît l'interprétation des signes ambigus.

**wa-r-rāsikhūna fī l-ʿilmi** (et les enracinés dans le savoir) — rāsikhūn est le pluriel actif de la racine r-s-kh qui veut dire « être ferme, enraciné, profondément ancré ». Al-ʿilm est de la racine ʿ-l-m. L'expression « les enracinés dans le savoir » désigne ceux qui ont une connaissance solide et profonde.

**yaqūlūna āmannā bihi** (ils disent : nous lui accordons confiance) — yaqūlūna est de la racine q-w-l (parler, dire). Āmannā est de la racine ʾ-m-n qui veut dire « être en sécurité, accorder sa confiance ». La forme du verbe est forme IV au passé pluriel : « nous avons accordé confiance ».

**kullun min ʿindi rabbinā** (tout vient d'auprès de notre Seigneur) — kullun est de la racine k-l-l qui désigne la totalité. ʿinda est de la racine ʿ-n-d qui marque la proximité, la présence (« auprès de, chez »). Rabb est de la racine r-b-b qui désigne le Seigneur — le maître protecteur et nourricier.

**wa-mā yadhdhakkaru illā ʾulū l-albābi** (et seuls se rappellent les détenteurs d'intelligence) — yadhdhakkaru est de la racine dh-k-r (rappeler, mémoriser). Forme V (réflexive) — se rappeler à soi-même. ʾUlū est de la racine ʾ-w-l qui désigne ici la possession (« les détenteurs de »). Al-albāb est le pluriel de lubb, de la racine l-b-b qui désigne le coeur de la chose, sa partie pure et essentielle — l'intelligence comme noyau de la pensée.

§JUSTIFICATION§

**l'écriture révélée** — Le sens retenu est « écriture révélée » de l'axe Livre/Écrit. Le mot conserve la dimension scripturaire de la révélation.

**signes** — Le sens retenu est « signe » de l'axe Signe/Marque. Le mot rend le sens premier de āya — quelque chose qui marque, qui pointe vers autre chose. L'alternative « versets » est écartée car elle fige le mot en unité textuelle uniquement.

**fermement établis** — Le sens retenu est « fermement établi » de l'axe Sagesse. Le mot rend le sens technique de muḥkamāt — ce qui a été solidement fixé. L'alternative « sans équivoque » (Hamidullah) est écartée car elle décrit un effet (l'absence d'ambiguïté) plutôt que la cause (la solidité).

**source** — Le sens retenu est « source » de l'axe Mère/Origine/Fondement. Le mot rend l'image arabe de umm (mère) comme origine. L'alternative « base » (Hamidullah) est écartée car elle suggère un fondement matériel, alors que umm évoque l'origine vivante.

**autre** — Le sens retenu est « autre » de l'axe Autre/Alternative. Mot direct et naturel.

**semblables** — Le sens retenu est « semblable » de l'axe Ressemblance/Similitude. Le mot rend mutashābihāt — qui se ressemblent les uns les autres, qui peuvent être pris pour autre chose. L'alternative « versets qui peuvent prêter à interprétations diverses » (Hamidullah) est écartée car c'est une glose explicative, pas une traduction.

**coeur** — Le sens retenu est « coeur » de l'axe Coeur/Centre. Mot direct.

**dévier** — Le sens retenu est « dévier » de l'axe Déviation/Égarement. Le mot rend le sens premier de zaygh — pencher, s'écarter de la droite voie. L'alternative « inclination vers l'égarement » (Hamidullah) est écartée car c'est une glose en plusieurs mots.

**suivre** — Le sens retenu est « suivre » de l'axe Suivi/Adhérence. Mot direct rendant le verbe yattabiʿu. L'alternative « mettre l'accent sur » (Hamidullah) est écartée car elle ajoute une nuance d'attention sélective qui n'est pas dans le verbe simple « suivre ».

**ressembler** — Le sens retenu est « ressembler » de l'axe Ressemblance/Similitude. Mot direct rendant tashābaha (verbe à action mutuelle).

**chercher** — Le sens retenu est « chercher » de l'axe Recherche/Quête. Mot direct rendant ibtighāʾ.

**discorde** — Le sens retenu est « discorde » de l'axe Désordre/Persécution. Le mot rend al-fitna comme acte de division. L'alternative « dissension » (Hamidullah) est correcte mais plus rare en français contemporain.

**interprétation** — Le sens retenu est « interprétation » de l'axe Retour/Origine. Le mot rend taʾwīl — l'acte de ramener un texte à son origine.

**savoir** — Le sens retenu est « savoir » de l'axe Savoir/Connaissance. Mot direct.

**Dieu** — Le sens retenu est « Dieu ». Nom français usuel pour la divinité unique.

**enracinés** — Le sens retenu est « enraciné » de l'axe Fermeté/Enracinement. Le mot rend rāsikh — celui qui est solidement ancré.

**dire** — Le sens retenu est « dire » de l'axe Parole/Énonciation. Mot direct.

**accorder confiance** — Le sens retenu est « accorder confiance » de l'axe Sécurité/Confiance. La racine ʾ-m-n désigne la sécurité-confiance comme acte d'octroyer activement sa fiabilité. L'alternative « croire » (Hamidullah) est écartée car elle réduit l'acte à une simple adhésion mentale, alors que āmana est l'acte de remettre activement sa confiance.

**tout** — Le sens retenu est « tout » de l'axe Totalité. Mot direct rendant kull.

**auprès de** — Le sens retenu est « auprès de » de l'axe Auprès/Proximité. Le mot rend ʿinda — la proximité (de la part de, du côté de).

**Seigneur** — Le sens retenu est « Seigneur » de l'axe Seigneurie. Mot direct rendant rabb.

**se rappeler** — Le sens retenu est « se rappeler » de l'axe Mémoire/Rappel. Le mot rend la forme réflexive yadhdhakkaru.

**détenteurs** — Le sens retenu est « détenteurs » de l'axe Famille/Appartenance de awl. Le mot rend ʾulū — ceux qui sont en possession de.

**intelligence** — Le sens retenu est « intelligence » de l'axe Intelligence/Essence de lbb. Le mot rend al-albāb — le pluriel de lubb (coeur, essence, intelligence pure).

§CRITIQUE§

**l'écriture vs « le Livre »** : Hamidullah utilise « le Livre » qui est plus matériel ; nous gardons « l'écriture » qui préserve la dimension scripturaire.

**signes fermement établis vs « versets sans équivoque »** : Hamidullah utilise « versets » qui fige le mot en unité textuelle, et « sans équivoque » qui décrit un effet (pas d'ambiguïté). « Signes fermement établis » garde le sens premier de āya (signe) et de muḥkamāt (solidement fixés).

**la source de l'écriture vs « la base du Livre »** : Hamidullah utilise « base » qui est matériel (un fondement architectural). Le mot arabe umm (mère) évoque l'origine vivante d'où tout prend sens. « Source » conserve cette image.

**d'autres semblables vs « d'autres versets qui peuvent prêter à interprétations diverses »** : Hamidullah remplace l'adjectif court mutashābihāt par une longue glose explicative. Le mot arabe est court et direct : « semblables » (qui se ressemblent les uns les autres). La paraphrase de Hamidullah est plus une exégèse qu'une traduction.

**il y a une déviation vs « une inclination vers l'égarement »** : Hamidullah étire « zaygh » en « inclination vers l'égarement ». Le mot arabe désigne directement l'acte de pencher de côté — « déviation » rend cela en un mot.

**ils suivent vs « mettent l'accent sur »** : Hamidullah remplace le verbe simple « suivre » (yattabiʿu) par la périphrase « mettre l'accent sur ». Le verbe arabe dit que ces gens marchent activement derrière les signes ambigus, pas qu'ils les soulignent intellectuellement.

**en quête de la discorde vs « cherchant la dissension »** : variations stylistiques équivalentes. La nuance entre fitna (discorde) et dissension est mineure.

**en quête de son interprétation vs « en essayant de leur trouver une interprétation »** : Hamidullah ajoute « essayant de leur trouver » qui est une paraphrase explicative. L'arabe utilise wa-btighāʾa taʾwīlihi — « et en quête de son interprétation » — direct et concis.

**Et nul ne connaît son interprétation sinon Dieu vs « alors que nul n'en connaît l'interprétation, à part Allah »** : Hamidullah utilise « alors que » comme conjonction concessive et « à part » au lieu de « sinon ». Notre traduction garde la structure simple de négation-exception (mā... illā = nul... sinon).

**Nous lui accordons confiance vs « Nous y croyons »** : Hamidullah rend āmannā par « croyons ». La racine ʾ-m-n désigne l'acte d'accorder sa confiance/sécurité — « croire » réduit cet acte à l'adhésion mentale, alors que āmana est l'acte volontaire de remettre sa confiance.

**les détenteurs d'intelligence vs « les doués d'intelligence »** : Hamidullah utilise « doués de » qui suggère une qualité innée (don). « Détenteurs de » conserve l'idée arabe de possession active (ʾulū = ceux qui détiennent), suggérant une responsabilité plutôt qu'un cadeau passif.`;

async function run() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  PIPELINE MAISON V3 — Sourate 3, Verset 7');
  console.log('═══════════════════════════════════════════════════\n');

  console.log('Étape 2 — ajouts ciblés');
  await addSense('hkm', 'Sagesse', 'fermement établi',
    "Forme passive intensive muḥkam de la racine ḥ-k-m. Désigne ce qui a été solidement fixé, rendu inébranlable — application au texte révélé qui ne prête pas à équivoque.");
  await addSense('awl', 'Retour/Origine', 'interprétation',
    "Forme nominale taʾwīl de la racine ʾ-w-l. Désigne l'acte de ramener un texte à son sens originel — élucidation du sens caché.");
  await addSense('awl', 'Famille/Appartenance', 'détenteurs',
    "Forme ʾulū employée dans des constructions comme ʾulū al-albāb (les détenteurs d'intelligence), ʾulū al-amr (les détenteurs de l'autorité). Désigne ceux qui sont en possession active de quelque chose.");

  console.log('\nÉtape 3 — VWA analysis_axes (29 mots avec racine)');

  const c = {
    nzl: await loadConcepts('nzl'), ktb: await loadConcepts('ktb'), ayy: await loadConcepts('ayy'),
    hkm: await loadConcepts('hkm'), amm: await loadConcepts('amm'), akhr: await loadConcepts('akhr'),
    shbh: await loadConcepts('shbh'), qlb: await loadConcepts('qlb'), zygh: await loadConcepts('zygh'),
    tbe: await loadConcepts('tbe'), bghy: await loadConcepts('bghy'), ftn: await loadConcepts('ftn'),
    awl: await loadConcepts('awl'), elm: await loadConcepts('elm'), alh: await loadConcepts('alh'),
    rsx: await loadConcepts('rsx'), qwl: await loadConcepts('qwl'), amn: await loadConcepts('amn'),
    kll: await loadConcepts('kll'), end: await loadConcepts('end'), rbb: await loadConcepts('rbb'),
    dhkr: await loadConcepts('dhkr'), lbb: await loadConcepts('lbb'),
  };

  const VWA_LIST = [
    [3,  'nzl', buildAxes(c.nzl, 'Descente/Révélation', 'faire descendre',
      "Verbe forme IV anzala : action ponctuelle de descente — la révélation descend depuis Dieu vers le Prophète.")],
    [5,  'ktb', buildAxes(c.ktb, 'Livre/Écrit', 'écriture révélée',
      "Article défini al- + ktb : LE texte révélé. Contexte de descente depuis Dieu confirme la dimension scripturaire.")],
    [7,  'ayy', buildAxes(c.ayy, 'Signe/Marque', 'signe',
      "Pluriel indéfini āyāt : les signes contenus dans la révélation. Sens premier de la racine — quelque chose qui marque et pointe.")],
    [8,  'hkm', buildAxes(c.hkm, 'Sagesse', 'fermement établi',
      "Forme passive muḥkam : ce qui a été rendu solide, fixé. La sagesse de la racine ici est mise en oeuvre dans la solidité du texte révélé.",
      { 'Jugement/Décision': "Concept dérivé. Ici le mot ne désigne pas l'acte de juger mais l'état de fixité du texte." })],
    [10, 'amm', buildAxes(c.amm, 'Mère/Origine/Fondement', 'source',
      "Construction ummu l-kitāb : la mère de l'écriture, l'origine d'où tout prend sens. Sens premier physique étendu à l'image de l'origine.")],
    [11, 'ktb', buildAxes(c.ktb, 'Livre/Écrit', 'écriture révélée',
      "Reprise de al-kitāb dans la construction umm al-kitāb.")],
    [12, 'akhr', buildAxes(c.akhr, 'Autre/Alternative', 'autre',
      "Pluriel ukhar : autres signes (mutashābihāt) en parallèle des muḥkamāt. Sens d'altérité directe.")],
    [13, 'shbh', buildAxes(c.shbh, 'Ressemblance/Similitude', 'semblable',
      "Forme VI mutashābihāt : qui se ressemblent les uns les autres, qui peuvent prêter à confusion.",
      { 'Ambiguïté/Doute': "Sens dérivé technique. Le sens premier de ressemblance suffit ici — le doute est une conséquence." })],
    [17, 'qlb', buildAxes(c.qlb, 'Coeur/Centre', 'coeur',
      "Pluriel défini qulūb : les coeurs comme sièges de l'intériorité. Le sens premier physique étendu au siège de la pensée et de la volonté.",
      { 'Retournement/Changement': "Sens premier physique de la racine. Ici le mot désigne l'organe-siège, pas l'acte de retourner." })],
    [18, 'zygh', buildAxes(c.zygh, 'Déviation/Égarement', 'dévier',
      "Nom indéfini zayghun : déviation comme inclination intérieure vers ce qui s'écarte de la vérité. Sens premier physique (pencher) étendu au moral.")],
    [19, 'tbe', buildAxes(c.tbe, 'Suivi/Adhérence', 'suivre',
      "Verbe forme VIII yattabiʿūna : ils suivent activement. Sens premier de marcher derrière, étendu à se conformer.")],
    [21, 'shbh', buildAxes(c.shbh, 'Ressemblance/Similitude', 'ressembler',
      "Verbe tashābaha forme VI : ce qui se ressemble mutuellement — sens verbal direct du nom mutashābihāt.")],
    [23, 'bghy', buildAxes(c.bghy, 'Recherche/Quête', 'chercher',
      "Forme VIII ibtighāʾ : la quête active. Sens « chercher activement » de la racine.",
      { 'Transgression/Injustice': "Sens dérivé négatif. Ici le contexte est de quête active, pas de transgression." })],
    [24, 'ftn', buildAxes(c.ftn, 'Désordre/Persécution', 'discorde',
      "Nom défini al-fitna : la discorde comme rupture sociale. Le sens premier (faire fondre l'or par le feu) s'étend ici à l'épreuve qui divise.",
      { 'Épreuve/Tentation': "Sens dérivé. Ici le contexte de quête active de la fitna par les déviants pointe vers la discorde sociale, pas une épreuve subie." })],
    [25, 'bghy', buildAxes(c.bghy, 'Recherche/Quête', 'chercher',
      "Reprise de ibtighāʾ pour le second objet (l'interprétation).")],
    [26, 'awl', buildAxes(c.awl, 'Retour/Origine', 'interprétation',
      "Nom verbal taʾwīl : acte de ramener un texte à son sens originel.",
      { 'Famille/Appartenance': "Sens dérivé (les détenteurs). Ici le mot désigne l'acte d'interpréter, pas la possession." })],
    [28, 'elm', buildAxes(c.elm, 'Savoir/Connaissance', 'savoir',
      "Verbe yaʿlamu : connaître par expérience ou apprentissage. Sens premier direct de la racine.")],
    [29, 'awl', buildAxes(c.awl, 'Retour/Origine', 'interprétation',
      "Reprise de taʾwīl. Seul Dieu connaît l'interprétation des signes ambigus.")],
    [31, 'alh', buildAxes(c.alh, 'Divinité', 'Dieu',
      "Nom propre Allāh : seul à connaître l'interprétation des signes ambigus.")],
    [32, 'rsx', buildAxes(c.rsx, 'Fermeté/Enracinement', 'enraciné',
      "Pluriel actif rāsikhūn : ceux qui sont solidement ancrés dans le savoir. Image de l'enracinement profond.")],
    [34, 'elm', buildAxes(c.elm, 'Savoir/Connaissance', 'savoir',
      "Nom défini al-ʿilm : le savoir comme corpus dans lequel les rāsikhūn sont enracinés.")],
    [35, 'qwl', buildAxes(c.qwl, 'Parole/Énonciation', 'dire',
      "Verbe yaqūlūna : ils disent. Sens premier direct de la racine.")],
    [36, 'amn', buildAxes(c.amn, 'Sécurité/Confiance', 'accorder confiance',
      "Verbe āmannā forme IV au passé pluriel : nous avons accordé notre confiance. Sens étymologique premier de la racine ʾ-m-n.")],
    [38, 'kll', buildAxes(c.kll, 'Totalité', 'tout',
      "Nom indéfini kullun : la totalité, sans exception. Tout vient de Dieu — ce qui est clair comme ce qui est ambigu.")],
    [40, 'end', buildAxes(c.end, 'Auprès/Proximité', 'auprès de',
      "Construction min ʿindi : provenance d'une proximité. Tout provient d'auprès de notre Seigneur.")],
    [41, 'rbb', buildAxes(c.rbb, 'Seigneurie', 'Seigneur',
      "Nom rabb avec suffixe possessif -nā : notre Seigneur. Sens premier de la racine — celui qui possède et nourrit.")],
    [43, 'dhkr', buildAxes(c.dhkr, 'Mémoire/Rappel', 'se rappeler',
      "Verbe forme V réflexive yadhdhakkaru : se rappeler à soi-même, faire revenir à la mémoire active.")],
    [45, 'awl', buildAxes(c.awl, 'Famille/Appartenance', 'détenteurs',
      "Forme ʾulū dans la construction ʾulū al-albāb : les détenteurs de l'intelligence.",
      { 'Retour/Origine': "Concept lié (l'interprétation). Ici le mot désigne la possession, pas l'acte d'interpréter." })],
    [46, 'lbb', buildAxes(c.lbb, 'Intelligence/Essence', 'intelligence',
      "Pluriel défini al-albāb : les intelligences pures. Sens premier physique (noyau, partie pure) étendu à l'intelligence comme partie essentielle de la pensée.")],
  ];

  for (const [pos, key, axes] of VWA_LIST) {
    const senseChose = axes.sense_chosen;
    const existing = await db.from('verse_word_analyses').select('id').eq('verse_id', VID).eq('position', pos).maybeSingle();
    if (existing.data) {
      await db.from('verse_word_analyses').update({ word_key: key, sense_chosen: senseChose, analysis_axes: axes }).eq('id', existing.data.id);
    } else {
      await db.from('verse_word_analyses').insert({ verse_id: VID, position: pos, word_key: key, sense_chosen: senseChose, analysis_axes: axes });
    }
    console.log(`  ✓ pos=${pos} ${key} → "${senseChose}"`);
  }

  console.log('\nÉtape 4 — verse_analyses');
  const existing = await db.from('verse_analyses').select('verse_id').eq('verse_id', VID).maybeSingle();
  if (existing.data) {
    await db.from('verse_analyses').update({
      translation_arab: TRANSLATION_ARAB, full_translation: FULL_TRANSLATION,
      segments: SEGMENTS, translation_explanation: TRANSLATION_EXPLANATION,
    }).eq('verse_id', VID);
  } else {
    await db.from('verse_analyses').insert({
      verse_id: VID, translation_arab: TRANSLATION_ARAB, full_translation: FULL_TRANSLATION,
      segments: SEGMENTS, translation_explanation: TRANSLATION_EXPLANATION,
    });
  }
  console.log('  ✓ verse_analyses mise à jour');

  console.log('\n═══════════════════════════════════════════════════');
  console.log('  VERSET 3:7 — TERMINÉ');
  console.log('═══════════════════════════════════════════════════');
}

run().catch(e => { console.error(e); process.exit(1); });
