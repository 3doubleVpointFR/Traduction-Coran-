// Pipeline S3:V75 — verse_id=368, va_id=727
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 368;
const VA_ID = 727;

// ─── Étape 2 : Enrichissement ────────────────────────────────────────────────

// ady (aid=1208) : 4 senses → ajouter [Transmission/Acheminement] depuis Lane's broot=AdY
// Lane's Forme II أدّى : "he made it reach; he brought, conveyed, or delivered; syn. awṣalahu"
const ADY_NEW_SENSES = [
  { analysis_id: 1208, concept: 'Transmission/Acheminement', sense: 'apporter',       display_order: 5 },
  { analysis_id: 1208, concept: 'Transmission/Acheminement', sense: 'transmettre',    display_order: 6 },
  { analysis_id: 1208, concept: 'Transmission/Acheminement', sense: 'faire parvenir', display_order: 7 },
  { analysis_id: 1208, concept: 'Transmission/Acheminement', sense: 'acheminer',      display_order: 8 },
];

// dwm (aid=2486) : 4 senses → ajouter [Permanence] + [Rotation/Cercle] + [Pluie persistante]
// Lane's broot=dwm (33 entrées) : دام = last/endure; دوّم = birds circling; ديمة = persistent rain
const DWM_NEW_SENSES = [
  { analysis_id: 2486, concept: 'Permanence/Continuité',  sense: 'demeurer',           display_order: 5 },
  { analysis_id: 2486, concept: 'Permanence/Continuité',  sense: 'persister',           display_order: 6 },
  { analysis_id: 2486, concept: 'Rotation/Cercle',        sense: 'tourner en cercle',   display_order: 7 },
  { analysis_id: 2486, concept: 'Rotation/Cercle',        sense: 'tourbillonner',       display_order: 8 },
  { analysis_id: 2486, concept: 'Rotation/Cercle',        sense: 'tournoyer',           display_order: 9 },
  { analysis_id: 2486, concept: 'Pluie persistante',      sense: 'pluie persistante',   display_order: 10 },
  { analysis_id: 2486, concept: 'Pluie persistante',      sense: 'bruine continue',     display_order: 11 },
  { analysis_id: 2486, concept: 'Pluie persistante',      sense: 'pluie durable',       display_order: 12 },
];

// ─── Étape 3 : Segments mis à jour ──────────────────────────────────────────

const UPDATED_SEGMENTS = [
  { position:1,  phon:'wa',            fr:'et',              word_key:null,   is_particle:true  },
  { position:2,  phon:'min',           fr:'parmi',           word_key:null,   is_particle:true  },
  { position:3,  phon:'ahl',           fr:'gens de',         word_key:'ahl',  is_particle:false },
  { position:4,  phon:'al-kitābi',     fr:'livre',           word_key:'ktb',  is_particle:false },
  { position:5,  phon:'man',           fr:'qui',             word_key:null,   is_particle:true  },
  { position:6,  phon:'in',            fr:'si',              word_key:null,   is_particle:true  },
  { position:7,  phon:"ta'manhu",      fr:'confier',         word_key:'amn',  is_particle:false },
  { position:8,  phon:'bi',            fr:'avec',            word_key:null,   is_particle:true  },
  { position:9,  phon:'qintārin',      fr:'trésor',          word_key:'qntṛ', is_particle:false },
  { position:10, phon:"yu'addīhi",     fr:'restituer',       word_key:'ady',  is_particle:false },
  { position:11, phon:'ilayka',        fr:'vers toi',        word_key:null,   is_particle:true  },
  { position:12, phon:'wa',            fr:'et',              word_key:null,   is_particle:true  },
  { position:13, phon:'minhum',        fr:"d'entre eux",     word_key:null,   is_particle:true  },
  { position:14, phon:'man',           fr:'qui',             word_key:null,   is_particle:true  },
  { position:15, phon:'in',            fr:'si',              word_key:null,   is_particle:true  },
  { position:16, phon:"ta'manhu",      fr:'confier',         word_key:'amn',  is_particle:false },
  { position:17, phon:'bi',            fr:'avec',            word_key:null,   is_particle:true  },
  { position:18, phon:'dīnārin',       fr:'dinar',           word_key:null,   is_particle:true  },
  { position:19, phon:'lā',            fr:'ne pas',          word_key:null,   is_particle:true  },
  { position:20, phon:"yu'addīhi",     fr:'restituer',       word_key:'ady',  is_particle:false },
  { position:21, phon:'ilayka',        fr:'vers toi',        word_key:null,   is_particle:true  },
  { position:22, phon:'illā',          fr:'sauf',            word_key:null,   is_particle:true  },
  { position:23, phon:'mā',            fr:'tant que',        word_key:null,   is_particle:true  },
  { position:24, phon:'dumta',         fr:'demeurer',        word_key:'dm',   is_particle:false },
  { position:25, phon:'ʿalayhi',       fr:'sur lui',         word_key:null,   is_particle:true  },
  { position:26, phon:'qāʾiman',       fr:'se tenir debout', word_key:'qwm',  is_particle:false },
  { position:27, phon:'dhālika',       fr:'cela',            word_key:null,   is_particle:true  },
  { position:28, phon:'bi',            fr:'par',             word_key:null,   is_particle:true  },
  { position:29, phon:'annahum',       fr:"qu'ils",          word_key:null,   is_particle:true  },
  { position:30, phon:'qālū',          fr:'dire',            word_key:'qwl',  is_particle:false },
  { position:31, phon:'laysa',         fr:"il n'est pas",    word_key:null,   is_particle:true  },
  { position:32, phon:'ʿalaynā',       fr:'sur nous',        word_key:null,   is_particle:true  },
  { position:33, phon:'fī',            fr:'envers',          word_key:null,   is_particle:true  },
  { position:34, phon:'al-ummiyyina',  fr:'illettré',        word_key:'amm',  is_particle:false },
  { position:35, phon:'sabīlun',       fr:'voie',            word_key:'sbl',  is_particle:false },
  { position:36, phon:'wa',            fr:'et',              word_key:null,   is_particle:true  },
  { position:37, phon:'yaqūlūna',      fr:'dire',            word_key:'qwl',  is_particle:false },
  { position:38, phon:'ʿalā',          fr:'sur',             word_key:null,   is_particle:true  },
  { position:39, phon:'allāhi',        fr:'Dieu',            word_key:'alh',  is_particle:false },
  { position:40, phon:'al-kadhiba',    fr:'mensonge',        word_key:'kḏb',  is_particle:false },
  { position:41, phon:'wahum',         fr:'et eux',          word_key:null,   is_particle:true  },
  { position:42, phon:'yaʿlamūna',     fr:'savoir',          word_key:'elm',  is_particle:false },
];

// ─── VWA entries ─────────────────────────────────────────────────────────────

const VWA_ENTRIES = [
  {
    verse_id: VERSE_ID, position: 3, word_key: 'ahl', analysis_id: 736,
    sense_chosen: 'gens de', concept_chosen: 'Famille/Communauté',
    analysis_axes: JSON.stringify({
      grammatical: 'N masculin singulier génitif, état construit (idāfa) avec al-kitābi',
      semantique: 'désigne un groupe humain défini par une appartenance commune',
      contextuel: "formule coranique figée ahl al-kitāb = gens du Livre (Juifs et Chrétiens)",
      frequence: "ahl al-kitāb est la désignation coranique standard des communautés scripturaires",
      lanes: "ahl = people of, those belonging to, inhabitants, family (broot=Ahl)"
    })
  },
  {
    verse_id: VERSE_ID, position: 4, word_key: 'ktb', analysis_id: 275,
    sense_chosen: 'livre', concept_chosen: 'Livre/Écrit',
    analysis_axes: JSON.stringify({
      grammatical: 'N masculin singulier génitif défini (article incorporé dans phon al-kitābi)',
      semantique: "l'article défini particularise : ce n'est pas un livre quelconque mais le Livre révélé",
      contextuel: "al-kitāb avec article = l'Écriture révélée (Torah/Bible) dans le Coran",
      frequence: "al-kitāb = l'Écriture révélée est le sens dominant dans le Coran",
      lanes: "kataba = écrire ; al-Kitāb = the book, the written word, scripture (broot=ktb)"
    })
  },
  {
    verse_id: VERSE_ID, position: 7, word_key: 'amn', analysis_id: 287,
    sense_chosen: 'confier', concept_chosen: 'Sécurité/Confiance',
    analysis_axes: JSON.stringify({
      grammatical: 'V Forme I accompli 2ème sg. masc. + pronom suffixe 3ème sg. (taʾman + hu)',
      semantique: "amina bi- = confier quelque chose à quelqu'un en dépôt de confiance (amāna)",
      contextuel: "structure taʾmanhu bi-qinṭārin = si tu lui confies un trésor en dépôt",
      frequence: "amāna = dépôt de confiance, fiducie ; fréquent dans contexte contractuel",
      lanes: "amina = to be secure, to trust; Forme I + bi- = to entrust to someone (broot=Amn)"
    })
  },
  {
    verse_id: VERSE_ID, position: 9, word_key: 'qntṛ', analysis_id: 1291,
    sense_chosen: 'trésor', concept_chosen: 'Richesse/Abondance',
    analysis_axes: JSON.stringify({
      grammatical: 'N masculin singulier génitif indéfini, complément de bi-',
      semantique: "le qinṭār = grande mesure de richesse (talent d'or, grande somme)",
      contextuel: "opposé au dīnār (une seule pièce) : le qinṭār désigne l'abondance extrême",
      frequence: "qinṭār apparaît en 3:14 et 3:75 avec le sens de grande fortune",
      lanes: "qinṭār = a great quantity; a large weight of gold or silver (broot=qnTr)"
    })
  },
  {
    verse_id: VERSE_ID, position: 10, word_key: 'ady', analysis_id: 1208,
    sense_chosen: 'restituer', concept_chosen: 'Accomplissement/Restitution',
    analysis_axes: JSON.stringify({
      grammatical: 'V Forme II imparfait 3ème sg. masc. + pronom suffixe 3ème sg. (yuʾaddi + hi)',
      semantique: "Forme II addā = faire parvenir, remettre, restituer un dépôt",
      contextuel: "restitution d'un trésor confié en dépôt ; présuppose un acte antérieur de confiance",
      frequence: "addā al-amānata = restituer le dépôt, expression juridique fréquente",
      lanes: "addā Forme II = he made it reach; he brought, conveyed, or delivered it; syn. awṣalahu (broot=AdY)"
    })
  },
  {
    verse_id: VERSE_ID, position: 16, word_key: 'amn', analysis_id: 287,
    sense_chosen: 'confier', concept_chosen: 'Sécurité/Confiance',
    analysis_axes: JSON.stringify({
      grammatical: 'V Forme I accompli 2ème sg. masc. + pronom suffixe 3ème sg. (2ème occurrence)',
      semantique: "même acte de confier un dépôt, cette fois avec un dinar (petite somme)",
      contextuel: "contexte négatif : cet homme-là ne restituera pas même un dinar",
      frequence: "répétition rhétorique soulignant le contraste avec la première catégorie",
      lanes: "amina bi- = to entrust to someone (broot=Amn)"
    })
  },
  {
    verse_id: VERSE_ID, position: 20, word_key: 'ady', analysis_id: 1208,
    sense_chosen: 'restituer', concept_chosen: 'Accomplissement/Restitution',
    analysis_axes: JSON.stringify({
      grammatical: 'V Forme II imparfait 3ème sg. masc. + pronom suffixe 3ème sg. (2ème occurrence)',
      semantique: "même verbe de restitution, nié ici (lā yuʾaddīhi = ne le restitue pas)",
      contextuel: "la négation lā + imparfait = refus permanent de restitution du dépôt",
      frequence: "parallélisme rhétorique avec la 1ère occurrence (restitution vs non-restitution)",
      lanes: "addā Forme II = he delivered, conveyed (broot=AdY)"
    })
  },
  {
    verse_id: VERSE_ID, position: 24, word_key: 'dm', analysis_id: 2486,
    sense_chosen: 'demeurer', concept_chosen: 'Permanence/Continuité',
    analysis_axes: JSON.stringify({
      grammatical: 'V Forme I accompli 2ème sg. masc. (dumta = tu as duré/demeuré)',
      semantique: "dāma = durer, rester en place, persister ; ici : rester physiquement présent",
      contextuel: "mā dumta ʿalayhi qāʾiman = tant que tu demeures debout sur lui (surveillance constante)",
      frequence: "mā dāma = tant que (locution de durée conditionnelle) fréquente en arabe classique",
      lanes: "dāma = to last, continue, remain, endure; be permanent (broot=dwm, 33 entrées)"
    })
  },
  {
    verse_id: VERSE_ID, position: 26, word_key: 'qwm', analysis_id: 263,
    sense_chosen: 'se tenir debout', concept_chosen: 'Verticalité/Droiture',
    analysis_axes: JSON.stringify({
      grammatical: 'N verbal (participe actif) masculin singulier accusatif indéfini, fonction de hāl (complément de manière)',
      semantique: "qāʾim = celui qui se tient debout, qui est dressé ; hāl qualifiant la posture de surveillance",
      contextuel: "dumta ʿalayhi qāʾiman = tant que tu demeures debout sur lui = présence de surveillance permanente",
      frequence: "qāʾim = standing, present ; fréquent pour désigner une présence active",
      lanes: "qāma = to stand, rise; qāʾim = standing upright, present (broot=qwm)"
    })
  },
  {
    verse_id: VERSE_ID, position: 30, word_key: 'qwl', analysis_id: 307,
    sense_chosen: 'dire', concept_chosen: 'Parole/Énonciation',
    analysis_axes: JSON.stringify({
      grammatical: 'V Forme I accompli 3ème pl. masc. (qālū = ils ont dit)',
      semantique: "qāla = dire, prononcer des paroles ; ici introduit une citation directe",
      contextuel: "bi-annahum qālū = parce qu'ils ont dit (cause de leur comportement : leur doctrine revendiquée)",
      frequence: "qāla introduisant une citation directe : formule extrêmement fréquente dans le Coran",
      lanes: "qāla = to say, speak, pronounce (broot=qwl)"
    })
  },
  {
    verse_id: VERSE_ID, position: 34, word_key: 'amm', analysis_id: 785,
    sense_chosen: 'illettré', concept_chosen: 'État originel/Illettrisme',
    analysis_axes: JSON.stringify({
      grammatical: 'N adjectif masculin pluriel génitif défini (article incorporé dans al-ummiyyīna)',
      semantique: "al-ummiyyūna = ceux sans Écriture révélée, sans Torah, dans leur état originel",
      contextuel: "dans la bouche des gens du Livre, désigne les non-juifs exonérés de toute obligation contractuelle",
      frequence: "ummī = illettré / sans Écriture ; al-nabī al-ummī = le prophète illettré (7:157-158)",
      lanes: "ummī = one who has no revealed scripture; illiterate; gentile (broot=Amm)"
    })
  },
  {
    verse_id: VERSE_ID, position: 35, word_key: 'sbl', analysis_id: 743,
    sense_chosen: 'voie', concept_chosen: 'Voie/Direction',
    analysis_axes: JSON.stringify({
      grammatical: 'N masculin singulier nominatif indéfini, sujet de laysa (laysa ʿalaynā ... sabīlun)',
      semantique: "sabīl = voie, chemin ; ici idiomatiquement = voie de responsabilité / obligation",
      contextuel: "laysa ʿalaynā fī l-ummiyyīna sabīlun = formule juridico-éthique : aucune voie d'obligation envers eux",
      frequence: "laysa ʿalayhi sabīl = there is no way/responsibility over him : expression classique d'exonération",
      lanes: "sabīl = way, road, path; means, cause (broot=sbl)"
    })
  },
  {
    verse_id: VERSE_ID, position: 37, word_key: 'qwl', analysis_id: 307,
    sense_chosen: 'dire', concept_chosen: 'Parole/Énonciation',
    analysis_axes: JSON.stringify({
      grammatical: 'V Forme I imparfait 3ème pl. masc. (yaqūlūna = ils disent, ils profèrent)',
      semantique: "imparfait = acte habituel/continu : ils profèrent le mensonge de manière répétée",
      contextuel: "contraste avec qālū (accompli, citation passée) : yaqūlūna = pratique en cours",
      frequence: "yaqūlūna avec objet direct = ils profèrent, ils émettent (discours) ; fréquent",
      lanes: "qāla Forme I = to say, speak (broot=qwl)"
    })
  },
  {
    verse_id: VERSE_ID, position: 39, word_key: 'alh', analysis_id: 250,
    sense_chosen: 'Dieu', concept_chosen: 'Divinité',
    analysis_axes: JSON.stringify({
      grammatical: 'N propre génitif (après ʿalā = sur Dieu)',
      semantique: "Allāh = Dieu (convention de traduction : Dieu)",
      contextuel: "ils profèrent le mensonge sur Dieu = lui attribuent une doctrine mensongère",
      frequence: "Allāh = convention Dieu (CONVENTION_KEY)",
      lanes: "Allāh = God (broot=Alh)"
    })
  },
  {
    verse_id: VERSE_ID, position: 40, word_key: 'kḏb', analysis_id: 317,
    sense_chosen: 'mensonge', concept_chosen: 'Mensonge/Fausseté',
    analysis_axes: JSON.stringify({
      grammatical: 'N masculin singulier accusatif défini (article incorporé dans al-kadhiba), objet de yaqūlūna',
      semantique: "al-kadhib avec article = LE MENSONGE par excellence, la fausseté délibérée",
      contextuel: "ils attribuent à Dieu la légitimation de la tromperie envers les non-juifs = accusation grave",
      frequence: "kadhib = mensonge ; kadhaba ʿalā Allāhi = mentir sur Dieu : formule de condamnation",
      lanes: "kadhaba = to lie, tell a falsehood; kadhib = lie, falsehood (broot=kdb)"
    })
  },
  {
    verse_id: VERSE_ID, position: 42, word_key: 'elm', analysis_id: 254,
    sense_chosen: 'savoir', concept_chosen: 'Savoir/Connaissance',
    analysis_axes: JSON.stringify({
      grammatical: 'V Forme I imparfait 3ème pl. masc. (yaʿlamūna = ils savent)',
      semantique: "ʿalima = savoir avec certitude, connaître ; wa-hum yaʿlamūna = et ils le savent bien",
      contextuel: "clause de condamnation : le mensonge est proféré en toute connaissance de cause",
      frequence: "wa-hum yaʿlamūna = formule de clôture condamnatoire, fréquente dans Coran",
      lanes: "ʿalima = to know, be certain; ʿilm = knowledge, science (broot=Elm)"
    })
  },
];

// ─── word_daily pour dwm (0 phrases actuellement) ───────────────────────────

const DWM_DAILY = [
  {
    analysis_id: 2486,
    phrase_fr: "La paix intérieure dure pour celui qui s'en remet à la confiance en Dieu.",
    concept: 'Permanence/Continuité',
    source_ref: '3:75'
  },
  {
    analysis_id: 2486,
    phrase_fr: 'Les faucons tournaient en cercle au-dessus des plaines désertiques.',
    concept: 'Rotation/Cercle',
    source_ref: '3:75'
  },
  {
    analysis_id: 2486,
    phrase_fr: "La pluie persistante tomba sur les terres arides pendant plusieurs jours d'affilée.",
    concept: 'Pluie persistante',
    source_ref: '3:75'
  },
];

// ─── Traduction complète ──────────────────────────────────────────────────────

const TRANSLATION_ARAB = 'وَمِنْ أَهْلِ ٱلْكِتَٰبِ مَنْ إِن تَأْمَنْهُ بِقِنطَارٍ يُؤَدِّهِۦٓ إِلَيْكَ وَمِنْهُم مَّنْ إِن تَأْمَنْهُ بِدِينَارٍ لَّا يُؤَدِّهِۦٓ إِلَيْكَ إِلَّا مَا دُمْتَ عَلَيْهِ قَآئِمًا ذَٰلِكَ بِأَنَّهُمْ قَالُوا۟ لَيْسَ عَلَيْنَا فِى ٱلْأُمِّيِّينَ سَبِيلٌ وَيَقُولُونَ عَلَى ٱللَّهِ ٱلْكَذِبَ وَهُمْ يَعْلَمُونَ';

const FULL_TRANSLATION = `Et parmi les gens du Livre, il en est un qui, si tu lui confies un trésor, te le restitue. Et parmi eux, il en est un qui, si tu lui confies un dinar, ne te le restitue pas, à moins que tu ne demeures debout sur lui en permanence. C'est parce qu'ils ont dit : « il n'est pour nous aucune voie envers les illettrés. » Et ils profèrent sur Dieu le mensonge, tout en sachant.

§DEMARCHE§

**AHL (pos=3 — ahl — N, état construit masculin singulier génitif)**
La racine *ahl* recense en BDD 6 sens : [Famille/Communauté] : famille, gens de, peuple ; [Mérite/Aptitude] : digne de ; [Sens isolé/Accueillir] : accueillir, se marier. Construit avec *al-kitābi* en idāfa, *ahl* désigne ici les GENS APPARTENANT À UN GROUPE défini par l'Écriture. L'axe contextuel confirme : c'est la formule coranique figée *ahl al-kitāb* (gens du Livre) désignant Juifs et Chrétiens. → Concept retenu : **[FAMILLE/COMMUNAUTÉ]**, sens « **GENS DE** ».

**KITĀB (pos=4 — al-kitābi — N, masculin singulier génitif défini)**
La racine *ktb* présente 36 sens dont [Livre/Écrit] : livre, écriture révélée, registre, contrat écrit ; [Obligation/Décret] : prescrire, décret divin. L'article défini *al-* particularise : ce n'est pas un livre quelconque mais LE LIVRE RÉVÉLÉ (Torah ou Bible). L'axe fréquence confirme : *al-kitāb* avec article = l'Écriture révélée dans le Coran. → Concept retenu : **[LIVRE/ÉCRIT]**, sens « **LIVRE** ».

**AMN (pos=7 et pos=16 — taʾmanhu — V Forme I, accompli 2ème sg. masc. + pronom 3ème sg.)**
La racine *amn* offre 14 sens : [Sécurité/Confiance] : être en sécurité, faire confiance, **CONFIER**, fidèle ; [Foi/Adhésion] : croire, avoir la foi ; [Garantie/Protection] : protéger, accorder la sécurité. Le verbe *amina* Forme I avec *bi-* = confier quelque chose à quelqu'un en dépôt de confiance (amāna). L'axe grammatical (structure *taʾmanhu bi-qinṭārin / bi-dīnārin*) confirme l'acte de CONFIER UN BIEN EN DÉPÔT. → Concept retenu : **[SÉCURITÉ/CONFIANCE]**, sens « **CONFIER** ».

**QINṬĀR (pos=9 — qintārin — N, masculin singulier génitif indéfini)**
La racine *qntr* offre 8 sens : [Richesse/Abondance] : grande quantité, trésor, fortune, richesse immense, poids considérable ; [Construction/Pont] : pont, arche. L'axe sémantique : le qinṭār est une MESURE DE GRANDE RICHESSE (talents d'or, grande somme). Par opposition au dīnār (une seule pièce), le qinṭār désigne l'abondance extrême. → Concept retenu : **[RICHESSE/ABONDANCE]**, sens « **TRÉSOR** ».

**ADY (pos=10 et pos=20 — yuʾaddīhi — V Forme II, imparfait 3ème sg. masc. + pronom 3ème sg.)**
La racine *ady* a été enrichie via Lane's (broot=AdY, 8 entrées) : [Accomplissement/Restitution] : accomplir, remettre, payer, restituer un dépôt ; [Transmission/Acheminement] : apporter, transmettre, faire parvenir, acheminer. La Forme II *addā* = « il fit parvenir, il rendit, il livra » (Lane's : *he made it reach; he brought, conveyed, or delivered it; syn. awṣalahu*). Dans ce verset, il s'agit de RESTITUER un dépôt confié. → Concept retenu : **[ACCOMPLISSEMENT/RESTITUTION]**, sens « **RESTITUER** ».

**DWM (pos=24 — dumta — V Forme I, accompli 2ème sg. masc.)**
La racine *dwm* a été enrichie via Lane's (broot=dwm, 33 entrées) : [Permanence/Continuité] : durer, être permanent, continuer, toujours, demeurer, persister ; [Rotation/Cercle] : tourner en cercle, tourbillonner, tournoyer ; [Pluie persistante] : pluie persistante, bruine continue, pluie durable. La Forme I *dāma / dumta* = « tu as duré, tu es demeuré ». Dans le contexte *mā dumta ʿalayhi qāʾiman* = « tant que tu demeures debout sur lui », le sens est celui de LA PERMANENCE D'UNE PRÉSENCE DE SURVEILLANCE. → Concept retenu : **[PERMANENCE/CONTINUITÉ]**, sens « **DEMEURER** ».

**QWM (pos=26 — qāʾiman — N verbal masculin singulier accusatif indéfini, hāl)**
La racine *qwm* offre 28 sens dont [Verticalité/Droiture] : se lever, se dresser, droit, rectitude, redresser, corriger, **SE TENIR DEBOUT** ; [Peuple/Communauté] : peuple, nation, tribu ; [Gestion/Administration] : gérer, veiller sur. Ici *qāʾiman* est un hāl (complément de manière en accusatif) : il qualifie la posture physique de surveillance. L'axe grammatical (accusatif hāl + verbe *dāma*) confirme la POSTURE DE SURVEILLANCE PERMANENTE. → Concept retenu : **[VERTICALITÉ/DROITURE]**, sens « **SE TENIR DEBOUT** ».

**QWL (pos=30 — qālū — V Forme I, accompli 3ème pl. masc.)**
La racine *qwl* offre 10 sens dont [Parole/Énonciation] : dire, parler, parole, discours, affirmer ; [Pensée/Avis] : opinion, avis, doctrine. Le verbe *qāla* accompli 3ème pl. = « ils ont dit ». L'axe contextuel : *bi-annahum qālū* introduit la CITATION DIRECTE de leur doctrine revendiquée. → Concept retenu : **[PAROLE/ÉNONCIATION]**, sens « **DIRE** ».

**AMM (pos=34 — al-ummiyyīna — N, masculin pluriel génitif défini)**
La racine *amm* (aid=785, 23 sens) : [État originel/Illettrisme] : illettré, dans l'état originel ; [Communauté/Nation] : communauté, nation, peuple ; [Mère/Origine/Fondement] : mère, origine, fondement ; [Guide/Modèle] : guide, chef. Le terme *al-ummiyyīna* désigne ceux qui n'ont pas reçu l'Écriture : dans le contexte judéo-chrétien, les non-juifs sans Torah, SANS LIVRE RÉVÉLÉ. Lane's : *ummī* = one who has no revealed scripture, illiterate. → Concept retenu : **[ÉTAT ORIGINEL/ILLETTRISME]**, sens « **ILLETTRÉ** ».

**SBL (pos=35 — sabīlun — N, masculin singulier nominatif indéfini)**
La racine *sbl* offre 10 sens dont [Voie/Direction] : chemin, voie, route, moyen, cause ; [Pluie/Abondance] : pluie abondante. Ici *sabīlun* est le sujet de *laysa* : « il n'est aucune voie ». L'axe sémantique : l'expression *laysa ʿalaynā sabīlun* est une formule classique d'exonération signifiant « AUCUNE VOIE DE RESPONSABILITÉ pour nous ». → Concept retenu : **[VOIE/DIRECTION]**, sens « **VOIE** ».

**QWL (pos=37 — yaqūlūna — V Forme I, imparfait 3ème pl. masc.)**
Même racine *qwl*. L'imparfait exprime une action RÉPÉTÉE ou habituelle : ils profèrent le mensonge de manière continue et délibérée. L'axe sémantique distingue *qālū* (accompli, citation historique) de *yaqūlūna* (imparfait, acte courant et intentionnel). → Concept retenu : **[PAROLE/ÉNONCIATION]**, sens « **DIRE** ».

**KDB (pos=40 — al-kadhiba — N, masculin singulier accusatif défini)**
La racine *kdb* (aid=317, 7 sens) : [Mensonge/Fausseté] : mentir, mensonge, démentir, nier la vérité, accuser de mensonge, menteur ; [Sens isolé/Illusion] : illusion. Le terme *al-kadhib* avec article = LE MENSONGE par excellence. L'axe contextuel : ils attribuent à Dieu la légitimation de la tromperie envers les non-juifs — acte grave de FAUSSE ATTRIBUTION DIVINE. → Concept retenu : **[MENSONGE/FAUSSETÉ]**, sens « **MENSONGE** ».

**ELM (pos=42 — yaʿlamūna — V Forme I, imparfait 3ème pl. masc.)**
La racine *elm* offre 22 sens dont [Savoir/Connaissance] : savoir, connaître, être informé, certitude, savant, science. L'imparfait *yaʿlamūna* = « ils savent » (avec certitude). La formule *wa-hum yaʿlamūna* = clause de CONDAMNATION CONSCIENTE : ils agissent en connaissance de cause. → Concept retenu : **[SAVOIR/CONNAISSANCE]**, sens « **SAVOIR** ».

§JUSTIFICATION§

Le verset compare deux catégories parmi les gens du Livre : ceux qui restituent intégralement un dépôt quelle qu'en soit la valeur, et ceux qui ne le font que sous contrainte physique permanente. Le terme TRÉSOR (*qinṭārin*) désigne la valeur maximale, par opposition au DINAR (*dīnārin*, loanword d'origine latine, non analysé). La racine *dwm* qualifie la durée de la surveillance nécessaire (*tant que tu demeures*), et *qwm* exprime la posture physique de cette surveillance (*debout*). La racine *amm* révèle leur raisonnement : les illettrés (*ummiyyīna* = sans Écriture) ne méritent aucune voie d'obligation (*sabīl*) — doctrine que le verset dénonce explicitement comme mensonge (*kdb*) proféré sur Dieu en toute connaissance (*elm*).

§CRITIQUE§

- **TRÉSOR** (*qinṭārin*, pos=9) vs Hamidullah « quintal [de biens] » : le qinṭār est une unité de grand poids (talents d'or) ; « trésor » rend mieux le sens de richesse extrême ; « quintal » est plus littéral comme unité de poids.
- **RESTITUER** (*yuʾaddīhi*, pos=10 et 20) vs Hamidullah « rend/rendent » : Lane's Forme II *addā* = *he delivered, conveyed to the appointed place* ; « restituer » est plus précis pour un dépôt confié que « rendre ».
- **CONFIER** (*taʾmanhu*, pos=7 et 16) vs Hamidullah « confies » : même sens retenu, variante morphologique (infinitif vs conjugué).
- **DEMEURER** (*dumta*, pos=24) vs Hamidullah « sois constamment » : *dāma* = durer, persister dans une durée ; « demeurer » rend le sens verbal de la Forme I accompli vs l'adverbe « constamment ».
- **SE TENIR DEBOUT** (*qāʾiman*, pos=26) : Hamidullah intègre le sens dans « constamment sur eux » sans traduire *qāʾiman* séparément ; ici rendu explicitement comme hāl de manière.
- **ILLETTRÉ** (*al-ummiyyīna*, pos=34) vs Hamidullah « Gentils » : *ummī* = celui sans Écriture révélée ; « illettré » souligne l'aspect scriptural (pas de Torah), « Gentils » souligne l'aspect ethnico-religieux ; les deux sont valides.
- **VOIE** (*sabīlun*, pos=35) vs Hamidullah « obligation » : *sabīl* = chemin, voie ; l'expression *laysa ʿalaynā sabīlun* est idiomatiquement traduite « aucune obligation » par Hamidullah, ce qui correspond au sens final ; « voie » garde le sens littéral de chemin/responsabilité.
- **DIRE** (*qālū* pos=30, *yaqūlūna* pos=37) : sens littéral de *qwl* ; Hamidullah utilise aussi « disent » ; la distinction accompli/imparfait justifie la nuance « ont dit » vs « profèrent ».
- **SAVOIR** (*yaʿlamūna*, pos=42) vs Hamidullah « savent » : concordance de sens, variante morphologique (infinitif vs conjugué).`;

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function run() {
  console.log('=== Pipeline S3:V75 ===\n');

  // 1. Enrichissement word_meanings — ady
  console.log('--- Étape 2a : enrichissement ady ---');
  const { error: e1 } = await db.from('word_meanings').insert(ADY_NEW_SENSES);
  if (e1) console.error('ady insert error:', e1.message);
  else console.log('  ✓ 4 nouveaux sens ady insérés');

  // 2. Enrichissement word_meanings — dwm
  console.log('--- Étape 2b : enrichissement dwm ---');
  const { error: e2 } = await db.from('word_meanings').insert(DWM_NEW_SENSES);
  if (e2) console.error('dwm insert error:', e2.message);
  else console.log('  ✓ 8 nouveaux sens dwm insérés');

  // 3. word_daily pour dwm (0 phrases)
  console.log('--- Étape 2c : word_daily dwm ---');
  const { error: e3 } = await db.from('word_daily').insert(DWM_DAILY);
  if (e3) console.error('word_daily insert error:', e3.message);
  else console.log('  ✓ 3 phrases word_daily dwm insérées');

  // 4. VWA
  console.log('\n--- Étape 3 : VWA (16 entrées) ---');
  for (const vwa of VWA_ENTRIES) {
    const { error } = await db.from('verse_word_analyses').upsert(vwa, { onConflict: 'verse_id,position' });
    if (error) console.error(`  ✗ pos=${vwa.position} ${vwa.word_key}: ${error.message}`);
    else console.log(`  ✓ pos=${vwa.position} ${vwa.word_key} [${vwa.concept_chosen}] "${vwa.sense_chosen}"`);
  }

  // 5. Lecture segments actuels
  console.log('\n--- Étape 4 : mise à jour segments + traduction ---');
  const { data: vaData, error: eVA } = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  if (eVA) { console.error('verse_analyses read error:', eVA.message); return; }

  const existingSegs = vaData.segments || [];
  // Fusionner : conserver les champs existants, écraser word_key/fr/is_particle
  const mergedSegs = existingSegs.map(seg => {
    const pos = seg.position || seg.pos;
    const update = UPDATED_SEGMENTS.find(u => u.position === pos);
    if (!update) return seg;
    return { ...seg, ...update };
  });

  const { error: eUpd } = await db.from('verse_analyses').update({
    segments: mergedSegs,
    translation_arab: TRANSLATION_ARAB,
    full_translation: FULL_TRANSLATION,
  }).eq('id', VA_ID);

  if (eUpd) console.error('verse_analyses update error:', eUpd.message);
  else console.log('  ✓ segments, translation_arab et full_translation mis à jour');

  // 6. Vérification finale
  console.log('\n--- Vérification ---');
  const { count: vwaCount } = await db.from('verse_word_analyses').select('id', { count: 'exact', head: true }).eq('verse_id', VERSE_ID);
  console.log(`  VWA count pour verse_id=${VERSE_ID}: ${vwaCount}`);
  const { count: adySens } = await db.from('word_meanings').select('id', { count: 'exact', head: true }).eq('analysis_id', 1208);
  console.log(`  Sens ady (1208): ${adySens}`);
  const { count: dwmSens } = await db.from('word_meanings').select('id', { count: 'exact', head: true }).eq('analysis_id', 2486);
  console.log(`  Sens dwm (2486): ${dwmSens}`);
  const { count: dwmDaily } = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', 2486);
  console.log(`  word_daily dwm: ${dwmDaily}`);

  console.log('\n=== Pipeline S3:V75 terminé ===');
}

run().catch(console.error);
