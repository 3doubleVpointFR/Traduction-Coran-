// Pipeline S3:V63 — verse_id=356 — va_id=713
// Verset : فَإِن تَوَلَّوْا۟ فَإِنَّ ٱللَّهَ عَلِيمٌ بِٱلْمُفْسِدِينَ
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 356;
const VA_ID = 713;
const SURAH = 3, VERSE = 63;

// ─── SEGMENTS ÉTAPE 1 ────────────────────────────────────────────────────────
const SEGMENTS_STEP1 = [
  { phon: "إِن", type: "particle", arabic: "فَإِن", phonetic: "إِن", position: 1, is_particle: true, prefix_particle: "fa" },
  { pos: "verbe", phon: "تَوَلَّ", root: "و ل ي", type: "important", tense: "accompli", arabic: "تَوَلَّوْا۟", person: "3ème", grammar: { pos: "verbe", tense: "accompli", person: "3ème", suffix_pronoun: "3MP" }, phonetic: "تَوَلَّ", position: 2, word_key: "wly", verb_form: "V", is_particle: false, suffix_pronoun: "3MP" },
  { phon: "إِنَّ", type: "particle", arabic: "فَإِنَّ", phonetic: "إِنَّ", position: 3, is_particle: true, emphatic_inna: true, prefix_particle: "fa" },
  { pos: "nom", phon: "ٱللَّهَ", root: "ا ل ه", type: "important", arabic: "ٱللَّهَ", grammar: { pos: "nom" }, phonetic: "ٱللَّهَ", position: 4, word_key: "alh", is_particle: false },
  { pos: "nom", phon: "عَلِيمٌ۞", root: "ع ل م", type: "important", arabic: "عَلِيمٌ۞", gender: "masculin", number: "singulier", grammar: { pos: "nom", gender: "masculin", number: "singulier" }, phonetic: "عَلِيمٌ۞", position: 5, word_key: "elm", is_particle: false },
  { pos: "nom", phon: "مُفْسِدِينَ", root: "ف س د", type: "important", voice: "actif", arabic: "بِٱلْمُفْسِدِينَ", gender: "masculin", number: "pluriel", grammar: { pos: "nom", voice: "actif", gender: "masculin", number: "pluriel" }, definite: true, phonetic: "مُفْسِدِينَ", position: 6, word_key: "fsd", verb_form: "IV", is_particle: false, prefix_particle: "bi" }
];

// ─── TRADUCTION HAMIDULLAH ────────────────────────────────────────────────────
const FULL_TRANSLATION_HAMIDULLAH =
  "Et s'ils se détournent, alors certes Allah connaît bien les fauteurs de désordre.";

// ─── TRADUCTION ARABE (notre traduction) ─────────────────────────────────────
const TRANSLATION_ARAB =
  "Et s'ils se détournent, certes Dieu est omniscient des corrupteurs.";

// ─── TRADUCTION MÉDITATIONELLE ────────────────────────────────────────────────
const TRANSLATION_MEDITATIONAL = null;

// ─── SEGMENTS D'AFFICHAGE ────────────────────────────────────────────────────
// sense_retenu DOIT correspondre exactement à un sens dans word_meanings
// wly → "se détourner" ∈ Éloignement/Détournement ✅
// alh → "Dieu" ∈ Divinité ✅
// elm → "savant" ∈ Savoir/Connaissance ✅ (traduction FR = "omniscient")
// fsd → "corrupteur" ∈ Corruption/Désordre ✅
const SEGMENTS = [
  { fr: "et si",             pos: "",  phon: "fa-in",          arabic: "فَإِن",           position: 1, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: "ils se détournent", pos: "V", phon: "tawallawū",      arabic: "تَوَلَّوْا۟",      position: 2, word_key: "wly", is_particle: false, sense_retenu: "se détourner" },
  { fr: "certes",            pos: "",  phon: "fa-inna",         arabic: "فَإِنَّ",          position: 3, word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: "Dieu",              pos: "N", phon: "allāha",          arabic: "ٱللَّهَ",          position: 4, word_key: "alh", is_particle: false, sense_retenu: "Dieu" },
  { fr: "omniscient",        pos: "N", phon: "ʿalīmun",        arabic: "عَلِيمٌ۞",        position: 5, word_key: "elm", is_particle: false, sense_retenu: "savant" },
  { fr: "des corrupteurs",   pos: "N", phon: "bi-l-mufsidīna", arabic: "بِٱلْمُفْسِدِينَ", position: 6, word_key: "fsd", is_particle: false, sense_retenu: "corrupteur" }
];

// ─── DÉMARCHE + JUSTIFICATION + CRITIQUE ─────────────────────────────────────
const TRANSLATION_EXPLANATION = `§DEMARCHE§
Ce verset conclut la longue péricope sur Jésus dans la sourate Al-Imran (versets 33-63). Le verset précédent (V62) venait de poser la conclusion solennelle : ce récit est le récit vrai, il n'y a de divinité si ce n'est Dieu, et Dieu est le Puissant, le Sage. Le verset 63 ajoute la clause finale : si, après tout ce qui vient d'être exposé et après l'invitation à l'imprécation mutuelle (V61), ils choisissent encore de se détourner, Dieu est, par nature, omniscient de ceux qui causent la corruption.

**tawallawū** (ils se détournent) est un verbe à l'accompli à la 3ème personne du masculin pluriel (une forme qui désigne une action envisagée comme réalisée) de la racine w-l-y, à la forme V (une forme réflexive qui exprime l'action que le sujet accomplit sur lui-même, par opposition à la forme simple qui serait transitive). La particule fa-in (et si) qui précède place toute la première partie du verset dans une structure conditionnelle hypothétique. D'après le dictionnaire de Lane, la racine w-l-y couvre un champ sémantique allant de la proximité et la protection à l'éloignement et au détournement. La forme V (tawallā) exprime spécifiquement le fait de se retourner, de tourner le dos — l'action est accomplie par le sujet sur lui-même, sans objet extérieur exprimé. Le sujet sous-entendu désigne ceux qui, au cours des versets précédents, ont contesté le récit de Jésus et refusé l'invitation à l'imprécation mutuelle. On traduit par « ils se détournent ».

**allāha** (Dieu) est le nom propre à l'accusatif, ism inna dans la structure fa-inna allāha ʿalīmun. La particule fa- (alors) encode la conséquence de la condition. La particule inna (certes) est une particule d'emphase qui régit son sujet à l'accusatif — c'est pourquoi allāh prend la forme allāha ici. La structure inna + sujet (accusatif) + prédicat adjectival (nominatif) crée une phrase nominale emphatique qui affirme un état permanent, pas une action ponctuelle. Allāh = al-ilāh, la divinité par excellence. On traduit par « Dieu ».

**ʿalīmun** (omniscient) est un adjectif indéfini au nominatif de la racine ʿ-l-m, de la forme faʿīl (une forme intensive qui exprime que la qualité est absolue, permanente et constitutive de celui qui la porte — à distinguer des formes verbales qui expriment un acte accompli à un moment donné). C'est le prédicat nominal de la phrase inna allāha ʿalīmun : en disant que Dieu EST ʿalīm (et non pas qu'il SAIT ou qu'il a su), l'arabe affirme que le savoir est un attribut permanent appartenant à l'essence de Dieu, pas une action ponctuelle. D'après les sources étymologiques, la racine ʿ-l-m exprime le fait de savoir avec certitude, de connaître de façon assurée et définitive. La préposition bi qui suit (bi-l-mufsidīna) indique l'objet précis sur lequel porte cette connaissance absolue. On traduit par « omniscient » pour rendre l'intensité de la forme faʿīl.

**al-mufsidīna** (les corrupteurs) est un participe actif de la forme IV (une forme causative qui dit que le sujet FAIT QUE quelque chose se produit, que son action produit un effet sur l'extérieur) de la racine f-s-d, au pluriel masculin défini, au génitif après la préposition bi. D'après le dictionnaire de Lane, la forme I fasada exprime l'état d'être mauvais, corrompu, dégradé — c'est un état subi. La forme IV afsada exprime le fait de RENDRE quelque chose ou quelqu'un mauvais, corrompu — c'est une action causative tournée vers l'extérieur. Le participe actif al-mufsidīna désigne donc ceux qui font activement et continûment ce travail de corruption dans les autres et dans l'environnement social. L'article al- identifie cette catégorie comme connue et définie. On traduit par « les corrupteurs ».

§JUSTIFICATION§
**ils se détournent** — Le sens retenu est « se détourner » de la racine w-l-y. Le mot « se détournent » est choisi car la forme V (tawallā) exprime le réflexif de l'éloignement — la personne se retourne d'elle-même, tourne le dos. C'est le mot le plus naturel en français courant pour exprimer un refus actif et délibéré après avoir été présenté à une vérité. L'alternative « ils tournent le dos » est plus physique et concrète — possible mais moins fluide dans une phrase conditionnelle. L'alternative « ils s'éloignent » est trop passive : s'éloigner peut survenir par dérive ou indifférence, alors que se détourner implique un acte de rejet conscient, ce que la forme V de w-l-y rend précisément.

**Dieu** — Le sens retenu est « Dieu » du nom allāh. Le mot « Dieu » est choisi car notre traduction vise le français courant et allāh est lui-même une contraction de al-ilāh (la divinité) — « Dieu » rend le sens primaire. L'alternative « Allah » est écartée car c'est un emprunt qui n'appartient pas au lexique commun du français.

**omniscient** — Le sens retenu est « savant » de la racine ʿ-l-m, mais le mot choisi pour la traduction est « omniscient ». Le mot « omniscient » est choisi car la forme faʿīl (ʿalīm) exprime une qualité absolue et constitutive — pas simplement quelqu'un qui a du savoir, mais celui dont le savoir est total et permanent. « Omniscient » rend cette intensité bien mieux que le simple adjectif « savant ». L'alternative « savant » est écartée car elle décrit quelqu'un qui a accumulé du savoir, ce qui n'est pas l'idée de la forme faʿīl. L'alternative « qui connaît » ou « qui sait » est écartée car ces formulations sont verbales et ponctuelles, alors que ʿalīmun est un adjectif d'état permanent. L'alternative « tout-connaissant » est possible mais moins courante en français quotidien.

**les corrupteurs** — Le sens retenu est « corrupteur » de la racine f-s-d. Le mot « les corrupteurs » est choisi car al-mufsidīna est un participe actif de la forme IV — ceux qui causent activement et continûment la corruption. L'alternative « les fauteurs de désordre » est écartée car elle dilue le sens de fasād, qui exprime la corruption morale profonde et la dégradation de ce qui était sain, et le réduit à un simple trouble de l'ordre public. L'alternative « ceux qui répandent le mal » est trop vague. L'alternative « les malfaisants » est écartée car elle ne rend pas la nature causative de la forme IV (le mufsid FAIT QUE quelque chose se corrompt, pas seulement qu'il fait quelque chose de mal).

§CRITIQUE§
**omniscient vs connaît bien** : les traductions courantes rendent ʿalīmun par « sait », « connaît bien » ou « est bien informé ». Il y a ici deux différences à distinguer. La première est morphologique : la forme faʿīl (ʿalīm) exprime un attribut permanent et constitutif, pas un acte ponctuel — ramener ʿalīm à « connaît bien » transforme une qualité d'essence en une action momentanée. La seconde est grammaticale et structurelle : l'arabe dit inna allāha ʿalīmun — une phrase nominale où ʿalīmun est le prédicat adjectival qui affirme que l'omniscience est une réalité permanente de Dieu. Hamidullah écrit « Allah connaît bien » — une phrase verbale qui transforme cet attribut permanent en acte. La logique change : « Dieu EST omniscient des corrupteurs » dit que cette connaissance appartient à l'essence de Dieu et rend toute dissimulation absolument impossible ; « Dieu connaît bien les fauteurs » dit simplement qu'il est informé, ce qui est plus faible.

**les corrupteurs vs les fauteurs de désordre** : les traductions courantes rendent al-mufsidīna par « les fauteurs de désordre » ou « ceux qui font le mal ». Ce choix aplatit la racine f-s-d, qui exprime la corruption au sens profond — la dégradation morale de ce qui était sain. La forme IV (afsada → mufsid) est causative : le mufsid cause la corruption dans les autres et dans l'environnement social, il ne se contente pas de « faire du désordre ». « Fauteurs de désordre » ramène cela à un simple trouble de l'ordre public, plus superficiel. Notre traduction « corrupteurs » rend la profondeur morale de fasād et la nature causative de la forme IV.`;

// ─── VWA (4 entrées) ─────────────────────────────────────────────────────────
// Noms des concepts LITS depuis word_meanings en BDD — ne pas inventer
const VWA_ROWS = [
  {
    word_key: "wly",
    position: 2,
    sense_chosen: "se détourner",
    reason: "Tawallawū est la forme V accompli 3MP de w-l-y — forme réflexive sans objet exprimé dans la structure conditionnelle. Se détourner est le sens de l'éloignement réflexif.",
    analysis_axes: {
      sense_chosen: "se détourner",
      concept_chosen: "Éloignement/Détournement",
      concepts: {
        "Éloignement/Détournement": {
          status: "retenu",
          senses: ["se détourner", "s'éloigner", "tourner le dos", "fuir"],
          proof_ctx: "Tawallawū est la forme V accompli 3ème personne masculin pluriel de w-l-y — une forme réflexive qui exprime l'action que le sujet accomplit sur lui-même, sans objet extérieur exprimé. Dans la structure conditionnelle fa-in sans complément désignant un protecteur ou un allié, la forme dit que le sujet se retourne lui-même, tourne le dos. Le sens Proximité/Protection dans la forme V nécessiterait un complément désignant l'entité choisie comme walī — absent ici."
        },
        "Proximité/Protection": {
          status: "peu_probable",
          senses: ["proche", "ami", "protecteur", "allié", "tuteur", "patron", "héritier", "parent", "affranchi"],
          proof_ctx: "La forme V de w-l-y peut dans certains contextes coraniques exprimer le fait de prendre quelqu'un comme walī. Mais sans complément exprimé désignant cet allié, et dans une structure conditionnelle post-exposition de vérité, ce sens supposerait un objet que le texte ne contient pas."
        },
        "Autorité": {
          status: "nul",
          senses: ["gouverner", "administrer", "régir", "préfet", "prendre en charge", "maîtriser"],
          proof_ctx: "Gouverner ou administrer est hors sujet dans ce contexte de rejet conditionnel."
        },
        "Succession/Consécution": {
          status: "nul",
          senses: ["suivre", "être adjacent", "consécutif"],
          proof_ctx: "Hors sujet."
        },
        "Bienfaisance/Don": {
          status: "nul",
          senses: ["accorder un bienfait", "infliger"],
          proof_ctx: "Hors sujet."
        },
        "Droit/Mérite": {
          status: "nul",
          senses: ["être plus digne de", "avoir droit"],
          proof_ctx: "Hors sujet."
        }
      }
    }
  },
  {
    word_key: "alh",
    position: 4,
    sense_chosen: "Dieu",
    reason: "Allāha est le nom propre à l'accusatif (ism inna) dans fa-inna allāha ʿalīmun. Allāh = al-ilāh = la divinité par excellence.",
    analysis_axes: {
      sense_chosen: "Dieu",
      concept_chosen: "Divinité",
      concepts: {
        "Divinité": {
          status: "retenu",
          senses: ["divinité", "divinité (concept)", "Dieu", "théologie", "exclamation divine", "oui certes"],
          proof_ctx: "Allāha est le nom propre à l'accusatif, ism inna dans la structure fa-inna allāha ʿalīmun. Allāh = al-ilāh, la divinité par excellence. L'accusatif est exigé par la particule inna qui régit son sujet à l'accusatif. Il s'agit d'un nom d'entité (sujet de la phrase nominale), pas d'un acte ou d'une émotion."
        },
        "Adoration/Dévotion": {
          status: "nul",
          senses: ["adorer", "faire adorer", "se dévouer au culte", "diviniser"],
          proof_ctx: "Il s'agit d'un nom d'entité, pas d'un acte ou d'une dévotion."
        },
        "Détresse": {
          status: "nul",
          senses: ["être perplexe", "se lamenter"],
          proof_ctx: "Hors sujet."
        },
        "Refuge/Protection": {
          status: "nul",
          senses: ["chercher refuge", "protéger", "demeurer"],
          proof_ctx: "Hors sujet."
        },
        "Domination": {
          status: "nul",
          senses: ["asservir"],
          proof_ctx: "Hors sujet."
        }
      }
    }
  },
  {
    word_key: "elm",
    position: 5,
    sense_chosen: "savant",
    reason: "ʿAlīmun est un adjectif faʿīl de ʿ-l-m — qualité absolue et permanente. Prédicat nominal de inna allāha. Le mot français est 'omniscient' pour rendre l'intensité de la forme faʿīl.",
    analysis_axes: {
      sense_chosen: "savant",
      concept_chosen: "Savoir/Connaissance",
      concepts: {
        "Savoir/Connaissance": {
          status: "retenu",
          senses: ["savoir", "connaître", "être informé", "certitude", "savant", "science", "enseignement"],
          proof_ctx: "ʿAlīmun est un adjectif intensif de la forme faʿīl de ʿ-l-m — une forme qui exprime que la qualité de savoir est absolue, permanente et constitutive de celui qui la porte, pas un acte ponctuel. C'est le prédicat nominal de la phrase inna allāha ʿalīmun. Les autres groupes (Marque/Signe avec ʿalam = signe physique, Monde/Création avec ʿālam = monde) désignent des dérivés différents de la même racine — philosophiquement incompatibles avec ʿalīm qui nomme la faculté de savoir comme attribut."
        },
        "Marque/Signe": {
          status: "nul",
          senses: ["marquer", "signe", "drapeau", "montagne", "repère", "étendard", "lèvre fendue"],
          proof_ctx: "Le signe ou le repère est un sens de ʿalam (nom physique) — un dérivé différent de la racine ʿ-l-m, incompatible avec ʿalīm qui est un adjectif d'intensité de savoir."
        },
        "Monde/Création": {
          status: "nul",
          senses: ["monde", "les mondes", "ensemble des créatures", "univers"],
          proof_ctx: "ʿĀlam (les mondes, l'univers) est un autre dérivé de la même racine — hors sujet dans ce contexte."
        },
        "Lieu/Géographie": {
          status: "nul",
          senses: ["informer", "nommer"],
          proof_ctx: "Hors sujet."
        },
        "Sens isolé/Enseigner": {
          status: "nul",
          senses: ["enseigner"],
          proof_ctx: "Hors sujet."
        },
        "Sens isolé/Homonyme": {
          status: "nul",
          senses: ["homonyme"],
          proof_ctx: "Hors sujet."
        }
      }
    }
  },
  {
    word_key: "fsd",
    position: 6,
    sense_chosen: "corrupteur",
    reason: "Al-mufsidīna = Form IV participe actif pluriel défini de f-s-d. La forme IV (afsada) est causative : mufsid = celui qui CAUSE la corruption dans les autres.",
    analysis_axes: {
      sense_chosen: "corrupteur",
      concept_chosen: "Corruption/Désordre",
      concepts: {
        "Corruption/Désordre": {
          status: "retenu",
          senses: ["corrompre", "gâter", "désordre", "corrupteur", "corruption", "détériorer"],
          proof_ctx: "Al-mufsidīna est un participe actif de la forme IV (causative) de f-s-d, pluriel masculin défini au génitif après bi. La forme I fasada exprime l'état d'être corrompu (intransitif, état subi) ; la forme IV afsada exprime le fait de RENDRE corrompu (transitif causatif) — le mufsid est celui qui cause activement la corruption dans les autres et dans l'environnement social. Le participe actif pluriel désigne une catégorie d'agents qui font cela continûment."
        }
      }
    }
  }
];

async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V63 (verse_id=' + VERSE_ID + ')             ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // ─── ÉTAPE 2 — Vérification richesse des racines ──────────────────────────
  console.log('\n═══ ÉTAPE 2 — Vérification richesse des racines ═══');
  const rootsCheck = [
    { key: 'wly', pos: 2, name: 'tawallawū' },
    { key: 'alh', pos: 4, name: 'allāha' },
    { key: 'elm', pos: 5, name: 'ʿalīmun' },
    { key: 'fsd', pos: 6, name: 'al-mufsidīna' }
  ];
  for (const r of rootsCheck) {
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', r.key);
    if (!wa || !wa.length) { console.log('  [MANQUANT] ' + r.key + ' → créer l\'entrée !'); continue; }
    const { data: wm } = await db.from('word_meanings').select('id').eq('analysis_id', wa[0].id);
    const n = wm ? wm.length : 0;
    console.log('  pos=' + r.pos + ' ' + r.name + ' (' + r.key + ') : ' + n + ' sens ' + (n >= 6 ? '[OK]' : '[<6 ATTN]'));
  }

  // ─── ÉTAPES 1 & 4 — verse_analyses ───────────────────────────────────────
  console.log('\n═══ ÉTAPES 1 & 4 — verse_analyses ═══');
  const { data: existingVa } = await db.from('verse_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existingVa && existingVa.length) {
    const vaId = existingVa[0].id;
    console.log('Row existante va_id=' + vaId + ' → UPDATE');
    const { error: vaErr } = await db.from('verse_analyses').update({
      segments_step1: SEGMENTS_STEP1,
      full_translation: FULL_TRANSLATION_HAMIDULLAH,
      translation_arab: TRANSLATION_ARAB,
      translation_meditational: TRANSLATION_MEDITATIONAL,
      translation_explanation: TRANSLATION_EXPLANATION,
      segments: SEGMENTS,
      validated: true,
      model_used: 'claude-sonnet-4-6-pipeline-maison',
      prompt_version: 'v3'
    }).eq('id', vaId);
    if (vaErr) throw vaErr;
    console.log('  UPDATE OK (va_id=' + vaId + ')');
  } else {
    console.log('Row absente → INSERT');
    const { data: inserted, error: vaErr } = await db.from('verse_analyses').insert({
      verse_id: VERSE_ID,
      segments_step1: SEGMENTS_STEP1,
      full_translation: FULL_TRANSLATION_HAMIDULLAH,
      translation_arab: TRANSLATION_ARAB,
      translation_meditational: TRANSLATION_MEDITATIONAL,
      translation_explanation: TRANSLATION_EXPLANATION,
      segments: SEGMENTS,
      validated: true,
      model_used: 'claude-sonnet-4-6-pipeline-maison',
      prompt_version: 'v3'
    }).select('id').single();
    if (vaErr) throw vaErr;
    console.log('  INSERT OK va_id=' + inserted.id);
  }

  // ─── ÉTAPE 3 — VWA ────────────────────────────────────────────────────────
  console.log('\n═══ ÉTAPE 3 — VWA ═══');
  const { data: existingVwa } = await db.from('verse_word_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existingVwa && existingVwa.length) {
    await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
    console.log('Clean: ' + existingVwa.length + ' VWA supprimés.');
  }
  const vwaRows = VWA_ROWS.map(v => ({
    verse_id: VERSE_ID,
    word_key: v.word_key,
    position: v.position,
    sense_chosen: v.sense_chosen,
    reason: v.reason,
    analysis_axes: v.analysis_axes
  }));
  const { error: vwaErr } = await db.from('verse_word_analyses').insert(vwaRows);
  if (vwaErr) throw vwaErr;
  console.log('  Insérés : ' + vwaRows.length + ' VWA');
  VWA_ROWS.forEach(v => {
    console.log('  pos=' + v.position + ' [' + v.word_key + '] → sens "' + v.analysis_axes.concept_chosen + '" → mot "' + v.sense_chosen + '"');
  });

  // ─── word_daily (vérification skip) ──────────────────────────────────────
  console.log('\n═══ word_daily (vérification) ═══');
  for (const r of rootsCheck) {
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', r.key);
    if (!wa || !wa.length) continue;
    const { count } = await db.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', wa[0].id);
    console.log('  ' + r.key + ' (aid=' + wa[0].id + ') : ' + count + ' phrase(s) → ' + (count > 0 ? 'SKIP' : 'À FAIRE'));
  }

  // ─── RÉSUMÉ ───────────────────────────────────────────────────────────────
  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V63 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
  console.log('\nVERSET S3:63 — TERMINÉ');
  VWA_ROWS.forEach(v => {
    console.log('  ' + v.word_key + ' (pos=' + v.position + ') → sens "' + v.analysis_axes.concept_chosen + '" → mot français "' + v.sense_chosen + '"');
  });
  console.log('\n  Traduction : "' + TRANSLATION_ARAB + '"');
}

run().catch(e => { console.error('ERREUR PIPELINE :', e); process.exit(1); });
