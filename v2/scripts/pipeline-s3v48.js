const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const verseId = 341; // S3:V48
  const vaId = 699;

  // ═══════════════════════════════════════════
  // ÉTAPE 3 — VWA ENTRIES
  // ═══════════════════════════════════════════

  // VWA 1: yuʿallimuhu (elm) — position 2
  const { error: e1 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'elm',
    position: 2,
    sense_chosen: 'enseignement',
    reason: "Forme II (causative) de ʿ-l-m : faire savoir = enseigner. Inaccompli actif avec pronom suffixe hu et COD al-kitāba.",
    analysis_axes: {
      sense_chosen: "enseigne",
      concept_chosen: "Savoir/Connaissance",
      concepts: {
        "Savoir/Connaissance": {
          status: "retenu",
          senses: ["savoir", "connaître", "être informé", "certitude", "savant", "science", "enseignement"],
          proof_ctx: "La forme II de ʿ-l-m est le causatif de « savoir » — « faire savoir à quelqu'un » = « enseigner ». Le verset décrit ce que Dieu enseignera à Jésus : l'Écriture, la sagesse, la Torah et l'Évangile. Le sens « Marque/Signe » (marquer, repérer) désigne une trace visible posée sur une surface — un acte physique qui n'a rien à voir avec la transmission d'un savoir textuel."
        },
        "Marque/Signe": {
          status: "nul",
          senses: ["marquer", "signe", "drapeau", "montagne", "repère", "étendard", "lèvre fendue"],
          proof_ctx: "Marquer une surface n'est pas compatible avec le complément « le Livre et la Sagesse »."
        },
        "Monde/Création": {
          status: "nul",
          senses: ["monde", "les mondes", "ensemble des créatures", "univers"],
          proof_ctx: "Désigne l'ensemble des êtres créés — un nom, pas un acte. Incompatible avec un verbe à la forme II."
        },
        "Lieu/Géographie": {
          status: "nul",
          senses: ["informer", "nommer"],
          proof_ctx: "Informer est proche mais reste dans le champ du savoir. Le sens géographique est hors sujet."
        }
      }
    }
  });
  console.log('VWA elm:', e1 ? 'ERREUR: ' + e1.message : 'OK');

  // VWA 2: al-kitāba (ktb) — position 3
  const { error: e2 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'ktb',
    position: 3,
    sense_chosen: 'écriture révélée',
    reason: "al-kitāb avec article défini désigne l'Écriture révélée en général, distincte de la Torah et de l'Évangile nommés après.",
    analysis_axes: {
      sense_chosen: "l'Écriture",
      concept_chosen: "Livre/Écrit",
      concepts: {
        "Livre/Écrit": {
          status: "retenu",
          senses: ["livre", "écriture révélée", "registre", "contrat écrit", "contrat de mariage", "contrat d'affranchissement"],
          proof_ctx: "Le verset enseigne quatre choses à Jésus : l'Écriture, la sagesse, la Torah et l'Évangile. La Torah et l'Évangile étant nommés séparément, al-kitāb désigne ici l'Écriture au sens large — le texte révélé en tant que tel. Le sens « Écriture/Inscription » (l'acte d'écrire) est un processus, pas un objet enseignable dans cette construction."
        },
        "Écriture/Inscription": {
          status: "probable",
          senses: ["écrire", "dicter", "demander d'écrire", "écrire à quelqu'un", "s'inscrire", "copier un livre", "art de l'écriture", "scribe", "savant", "école", "enseignant", "vendeur de livres"],
          proof_ctx: "L'acte d'écrire (le processus) est le fondement étymologique du kitāb — ce qui a été écrit. Mais dans cette construction, al-kitāb est l'objet résultant (le texte), pas l'action."
        },
        "Obligation/Décret": {
          status: "peu_probable",
          senses: ["prescrire", "rendre obligatoire", "juger", "décret divin", "prédestination"],
          proof_ctx: "Le décret divin est un sens dérivé de k-t-b mais le contexte est celui de l'enseignement de textes, pas de la prescription d'obligations."
        },
        "Assemblage/Couture": {
          status: "nul",
          senses: ["rassembler", "coudre", "attacher", "fermer la vulve", "lier l'outre", "se ceindre", "collecter", "préparer les troupes", "armée"],
          proof_ctx: "Le sens physique de coudre et rassembler est hors contexte ici."
        }
      }
    }
  });
  console.log('VWA ktb:', e2 ? 'ERREUR: ' + e2.message : 'OK');

  // VWA 3: al-ḥikmata (hkm) — position 5
  const { error: e3 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'hkm',
    position: 5,
    sense_chosen: 'sagesse',
    reason: "al-ḥikma est la qualité d'être sage — la capacité de distinguer le juste du faux. Enseignée à côté de l'Écriture, elle complète le savoir textuel par le discernement.",
    analysis_axes: {
      sense_chosen: "la sagesse",
      concept_chosen: "Sagesse",
      concepts: {
        "Sagesse": {
          status: "retenu",
          senses: ["être sage", "sagesse"],
          proof_ctx: "al-ḥikma désigne la capacité de discernement — distinguer le juste du faux, le vrai du futile. Elle est enseignée à côté de l'Écriture : le texte donne le savoir, la sagesse donne le discernement pour l'appliquer. Le sens « Jugement/Décision » (juger, rendre une sentence) est un acte d'autorité ponctuel — la ḥikma est une qualité permanente, pas un acte isolé."
        },
        "Jugement/Décision": {
          status: "probable",
          senses: ["juger", "décider", "sentence"],
          proof_ctx: "Juger et décider partagent la racine ḥ-k-m. Mais al-ḥikma en tant que nom féminin en -a désigne la qualité (la sagesse), pas l'acte ponctuel de juger (al-ḥukm)."
        },
        "Autorité/Pouvoir": {
          status: "peu_probable",
          senses: ["gouverner"],
          proof_ctx: "Gouverner implique une position d'autorité — la ḥikma est une qualité intérieure, pas un poste."
        },
        "Sens isolé/Empêcher": {
          status: "nul",
          senses: ["empêcher"],
          proof_ctx: "Empêcher est le sens physique premier de ḥ-k-m (retenir un cheval par le mors) — hors contexte ici."
        }
      }
    }
  });
  console.log('VWA hkm:', e3 ? 'ERREUR: ' + e3.message : 'OK');

  // ═══════════════════════════════════════════
  // ÉTAPE 4 — TRADUCTION
  // ═══════════════════════════════════════════

  const translationArab = "Et Il lui enseigne l'Écriture et la sagesse, et la Torah et l'Évangile.";

  const fullTranslation = "Et (Dieu) lui enseignera le Livre, la Sagesse, la Thora et l'Évangile,";

  const explanation = `§DEMARCHE§
Ce verset poursuit l'annonce faite à Marie dans les versets 45-47 : après avoir décrit les qualités de Jésus (éminent, proche de Dieu, parlant au berceau et à l'âge adulte), le texte décrit maintenant ce que Dieu lui enseignera. Le verset énumère quatre objets d'enseignement : l'Écriture, la sagesse, la Torah et l'Évangile.

**yuʿallimuhu** (Il lui enseigne) est un verbe à l'inaccompli (une forme qui exprime l'action en cours ou à venir) à la 3ème personne du masculin singulier, forme II de la racine ʿ-l-m. La forme II est causative : elle transforme « savoir » en « faire savoir à quelqu'un » = « enseigner ». Le pronom suffixe **-hu** (lui) désigne Jésus, annoncé dans les versets précédents. L'inaccompli indique que cet enseignement est à venir — c'est une promesse, pas un fait accompli. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le sens premier de ʿ-l-m est « savoir, avoir connaissance de quelque chose ». On traduit par « Il lui enseigne ».

**al-kitāba** (l'Écriture) est un nom masculin défini à l'accusatif (complément d'objet direct de yuʿallimuhu) de la racine k-t-b. L'article défini **al-** indique qu'il s'agit d'une réalité connue et identifiée. D'après les sources étymologiques, le sens premier de k-t-b est « coudre, rassembler des parties » — le kitāb est ce qui a été rassemblé par l'écriture, le texte composé. La Torah et l'Évangile étant nommés séparément dans la suite du verset, al-kitāb désigne ici l'Écriture au sens large — le texte révélé en tant que tel. On traduit par « l'Écriture ».

**al-ḥikmata** (la sagesse) est un nom féminin défini à l'accusatif de la racine ḥ-k-m. Le mot ḥikma suit le schème faʿla qui désigne la qualité — c'est la qualité d'être ḥakīm (sage). D'après les sources étymologiques, le sens premier de ḥ-k-m est « empêcher, retenir » (retenir un cheval par le mors). De là vient le sens dérivé : la sagesse est ce qui retient la personne de l'erreur et du futile, la capacité de distinguer le juste du faux. Elle est mentionnée à côté de l'Écriture : le texte donne le savoir, la sagesse donne le discernement pour l'appliquer. On traduit par « la sagesse ».

**at-tawrāta** (la Torah) est un nom propre féminin défini à l'accusatif. C'est un emprunt à l'hébreu (Torah = « loi, enseignement ») qui désigne le texte révélé à Moïse. Ce n'est pas un dérivé de la racine arabe t-w-r. On traduit par « la Torah ».

**al-injīla** (l'Évangile) est un nom propre masculin défini à l'accusatif. C'est un emprunt au grec (euangelion = « bonne nouvelle ») qui désigne le texte révélé à Jésus. Ce n'est pas un dérivé de la racine arabe n-j-l. On traduit par « l'Évangile ».

§JUSTIFICATION§
**enseigne** — Le sens retenu est « Savoir/Connaissance ». Le mot « enseigne » est choisi car la forme II de ʿ-l-m est le causatif de « savoir » : faire savoir à quelqu'un. En français courant, « enseigner » est le mot naturel pour cet acte de transmission du savoir. L'alternative « instruit » est écartée car « instruire » implique un processus plus formel et institutionnel. L'alternative « apprend » (au sens de « il lui apprend ») est acceptable mais « enseigner » est plus précis pour la forme II causative.

**l'Écriture** — Le sens retenu est « Livre/Écrit ». Le mot « l'Écriture » est choisi car al-kitāb ici désigne le texte révélé en général, distinct de la Torah et de l'Évangile qui sont nommés séparément. L'alternative « le Livre » est acceptable mais moins précise dans un verset qui nomme ensuite deux livres spécifiques — « l'Écriture » évite la confusion. L'alternative « le registre » est écartée car elle évoque un document administratif.

**la sagesse** — Le sens retenu est « Sagesse ». Le mot « sagesse » est le seul mot français courant qui rend la qualité de discernement que ḥikma désigne. L'alternative « jugement » est écartée car elle désigne un acte ponctuel, pas une qualité permanente. L'alternative « la philosophie » est écartée car c'est un terme grec avec des connotations différentes.

**la Torah** — Nom propre d'emprunt hébreu. Pas d'alternative étymologique.

**l'Évangile** — Nom propre d'emprunt grec. Pas d'alternative étymologique.

§CRITIQUE§
**l'Écriture vs le Livre** : les traductions courantes donnent « le Livre » pour al-kitāb. Les deux sens sont proches et ne changent pas fondamentalement le sens du verset. Notre choix « l'Écriture » cherche à distinguer al-kitāb (le texte révélé en général) des deux livres spécifiques nommés ensuite (Torah et Évangile). Si al-kitāb signifie « le Livre » au sens d'un livre précis, il fait doublon avec la Torah et l'Évangile. « L'Écriture » lève cette ambiguïté.

Les traductions courantes donnent sensiblement le même sens pour les autres mots du verset. Les termes « enseigner », « sagesse », « Torah » et « Évangile » font consensus.`;

  // Segments d'affichage
  const segments = [
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: "Il lui enseigne", phon: "yuʿallimuhu", arabic: "يُعَلِّمُهُ", word_key: "elm", is_particle: false, sense_retenu: "enseignement", position: 2 },
    { fr: "l'Écriture", phon: "al-kitāba", arabic: "ٱلْكِتَـٰبَ", word_key: "ktb", is_particle: false, sense_retenu: "écriture révélée", position: 3 },
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 4 },
    { fr: "la sagesse", phon: "al-ḥikmata", arabic: "ٱلْحِكْمَةَ", word_key: "hkm", is_particle: false, sense_retenu: "sagesse", position: 5 },
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 6 },
    { fr: "la Torah", phon: "at-tawrāta", arabic: "ٱلتَّوْرَىٰةَ", word_key: "twr", is_particle: false, sense_retenu: "Torah (tawrāt)", position: 7 },
    { fr: "et", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 8 },
    { fr: "l'Évangile", phon: "al-injīla", arabic: "ٱلْإِنجِيلَ", word_key: "njl", is_particle: false, sense_retenu: "Évangile (injil)", position: 9 }
  ];

  // UPDATE verse_analyses (exists already as empty shell)
  const { error: vaErr } = await db.from('verse_analyses').update({
    translation_arab: translationArab,
    translation_explanation: explanation,
    segments: segments,
    full_translation: fullTranslation
  }).eq('id', vaId);
  console.log('VA update:', vaErr ? 'ERREUR: ' + vaErr.message : 'OK');

  // Check word_daily for elm, ktb, hkm
  for (const key of ['elm', 'ktb', 'hkm']) {
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', key).single();
    const { count } = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', wa.id);
    console.log('word_daily ' + key + ': ' + count + ' → ' + (count > 0 ? 'SKIP' : 'À CRÉER'));
  }

  console.log('\nVERSET 3:48 — TERMINÉ');
  console.log('  yuʿallimuhu (elm/ʿ-l-m) → sens "Savoir/Connaissance" → mot français "enseigne"');
  console.log('  al-kitāba (ktb/k-t-b) → sens "Livre/Écrit" → mot français "l\'Écriture"');
  console.log('  al-ḥikmata (hkm/ḥ-k-m) → sens "Sagesse" → mot français "la sagesse"');
  console.log('  at-tawrāta → nom propre → "la Torah"');
  console.log('  al-injīla → nom propre → "l\'Évangile"');
  console.log('  Traduction : "Et Il lui enseigne l\'Écriture et la sagesse, et la Torah et l\'Évangile."');
}

run().catch(console.error);
