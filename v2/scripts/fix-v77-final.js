const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 370;

  // === 1. Corriger l'anglais dans VWA xlq ===
  const r = await db.from('verse_word_analyses').select('analysis_axes').eq('verse_id', vid).eq('word_key', 'xlq').single();
  const ax = r.data.analysis_axes;
  ax.concepts['Part/Portion méritée'].proof_ctx = "Khalāq (خَلَاق, à distinguer du verbe خَلَقَ = créer) désigne une portion de bien méritée — d'après les sources étymologiques, « une portion complète et pleine de bien et de droiture ». La structure lā khalāqa lahum (lā al-nafy li-l-jins + accusatif) nie absolument toute portion pour eux dans la vie à venir. Lane's cite ce verset précisément comme exemple de khalāq. Ce sens est incompatible avec Création/Production (qui serait absurde : « aucune création pour eux ») ou Disposition/Caractère (qui ne peut pas être nié par cette construction).";
  await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('verse_id', vid).eq('word_key', 'xlq');
  console.log('VWA xlq : anglais traduit ✅');

  // === 2. Ajouter les 2 §CRITIQUE§ manquantes (la vie à venir, un tourment) ===
  const { data: va } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
  const expl = va.translation_explanation;
  const critStart = expl.indexOf('§CRITIQUE§');
  const before = expl.substring(0, critStart);

  // Ordre d'apparition dans translation_arab :
  // troquent (pos ~3) → engagement de Dieu (pos ~5-6) → prix infime (pos ~9-10) →
  // la vie à venir (pos ~16) → résurrection (pos ~23) → tourment (pos ~27)

  const newCritique = `§CRITIQUE§

**troquent vs « vendent »** : Hamidullah traduit yashtarūna par « vendent ». C'est une inversion de direction : la Forme VIII ishtarā signifie spécifiquement acquérir/acheter — non vendre. Ce sont eux qui obtiennent un prix infime en donnant le pacte. Certes, la racine sh-r-y désigne les deux faces de la transaction (acheter et vendre), mais la Forme VIII particularise le sens d'acquisition. Le sens global change : « ils vendent l'alliance » suggère qu'ils cèdent délibérément pour de l'argent (orientation commerciale explicite), alors que « ils troquent » rend l'échange inégal dans lequel ils perdent le précieux pour le dérisoire (orientation sur l'insensé de la transaction).

**l'engagement de Dieu vs « l'alliance d'Allah »** : Hamidullah rend ʿahd Allāh par « l'alliance d'Allah ». « Alliance » porte en français une forte charge biblique (Ancien Testament : alliance entre Dieu et son peuple élu) qui implique une symétrie cérémonielle entre deux parties. ʿAhd dans le Lane's désigne d'abord « an injunction, a charge, an obligation, a compact, a covenant, a promise » — le premier sens est l'engagement unilatéral imposé ou accepté, pas la structure bilatérale d'une alliance solennelle. « Engagement » préserve l'asymétrie du lien que Dieu établit avec l'humain et la dimension d'obligation personnelle qui peut être trahie.

**un prix infime vs « à vil prix »** : Hamidullah rend thamanan qalīlan par « à vil prix ». « Vil » porte un jugement qualitatif (bas, méprisable moralement), alors que qalīl désigne uniquement la petitesse quantitative (peu en quantité). La différence change la nature de la critique : « vil prix » suggère que le prix est moralement bas, tandis que le texte dit simplement que la quantité reçue est dérisoire face à ce qui est cédé. Le verset critique l'inégalité quantitative de l'échange, pas la nature morale du bien reçu.

**la vie à venir vs « l'au-delà »** : Hamidullah rend al-ākhirah par « l'au-delà ». « L'au-delà » est une expression française qui désigne spatialement ce qui se trouve de l'autre côté d'une frontière — une altérité topologique. Al-ākhirah, de la racine ʾ-kh-r (ce qui vient après, le dernier), est purement temporel : la suite de cette vie, ce qui succède. La différence : « l'au-delà » pose la vie après la mort comme un ailleurs séparé (logique spatiale dualiste), alors que « la vie à venir » la pose comme une continuation (logique temporelle étymologique). Le texte arabe ne franchit pas de frontière, il annonce une suite.

**la résurrection vs « la Résurrection »** : Hamidullah rend al-qiyāmah par « la Résurrection » (majuscule théologique). Cette lecture est défendable mais l'étymologie pure est « le fait de se lever » de la racine qāma — moment où tous se dressent, sans présupposer le contenu doctrinal chrétien de la Résurrection (retour à la vie corporelle d'un mort identifié). En français courant, « résurrection » minuscule avec article défini rend l'idée du Grand Lever sans charger le terme d'un contenu dogmatique absent de la racine arabe.

**un tourment vs « un châtiment »** : Hamidullah rend ʿadhābun par « un châtiment ». « Châtiment » inscrit la souffrance dans une logique juridico-morale : une peine infligée en réponse à une faute, avec une finalité corrective ou rétributive. ʿAdhāb désigne étymologiquement le fait de causer une souffrance, sans préciser le cadre juridique de la réponse à une faute — fait notable, la racine porte au sens premier l'idée paradoxale de « douceur/eau douce » (ʿadhb), et ʿadhāb est l'extension inverse. « Tourment » rend mieux la réalité brute de la souffrance éprouvée, sans présupposer la structure judiciaire. La différence change le registre : « châtiment » est juridique (punition méritée), « tourment » est phénoménologique (souffrance subie).`;

  const newExpl = before + newCritique;
  await db.from('verse_analyses').update({ translation_explanation: newExpl }).eq('verse_id', vid);
  console.log('§CRITIQUE§ reconstruit avec 6 entrées dans l\'ordre d\'apparition ✅');
  console.log('  1. troquent vs vendent');
  console.log('  2. l\'engagement de Dieu vs l\'alliance d\'Allah');
  console.log('  3. un prix infime vs à vil prix');
  console.log('  4. la vie à venir vs l\'au-delà');
  console.log('  5. la résurrection vs la Résurrection');
  console.log('  6. un tourment vs un châtiment');
}

run().catch(console.error);
