const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const NEW_EXPL = `§DEMARCHE§

Après les lettres mystérieuses du verset 1, le verset 2 ouvre la sourate par une affirmation centrale d'unicité divine : Dieu est nommé, l'absence d'autre divinité est posée, puis deux caractéristiques sont énoncées — le Vivant et le Subsistant. Ce verset introduit le thème de la grandeur de Dieu qui structurera toute la sourate Āl ʿImrān.

**allāhu** (Dieu) est un nom propre. Il vient en fait de deux mots collés : l'article défini al- (« le ») et le mot ilāh (« divinité ») — ce qui donne littéralement « la divinité », c'est-à-dire la divinité par excellence, le Dieu unique. C'est un nom commun devenu nom propre par usage.

**lā** (pas de) est un petit mot qui sert à nier. Ici il nie totalement ce qui suit : « il n'y a aucune divinité ». La construction arabe lā... illā... (pas de... sinon...) est une formule très courante en arabe qui veut dire « il n'existe rien qui... sauf ».

**ilāha** (divinité) est un nom commun de la même racine que le mot allāh juste avant. Il désigne la catégorie générale « divinité » — pas une divinité particulière. Le verset dit donc : il n'y a aucun être qu'on puisse considérer comme une divinité.

**illā** (sinon) est un petit mot qui veut dire « sauf, excepté ». Combiné avec lā juste avant, il forme la formule complète : « rien... sauf ». C'est la façon arabe de dire « il n'y a que Lui ».

**huwa** (Lui) est un pronom personnel qui désigne Dieu. Il vient juste après illā : c'est lui qui est exclu de la négation, lui seul est divinité.

**al-ḥayyu** (le Vivant) est un mot dérivé de la racine ḥ-y-y qui veut dire « vivre, vie ». Avec l'article défini al- (« le »), il désigne LE Vivant par excellence — celui dont la vie n'est pas reçue de quelqu'un d'autre mais lui appartient en propre. Le Lane's Lexicon donne pour cette racine : « être vivant, donner la vie, vie ».

**al-qayyūmu** (le Subsistant) est dérivé de la racine q-w-m qui veut dire « se tenir debout, se dresser, se maintenir ». La forme du mot (qayyūm) est une forme renforcée qui dit que l'action est faite tout le temps et avec force — donc « celui qui se maintient en permanence par lui-même, qui dure ». Le Lane's donne ce même sens : celui qui se tient, qui dure, qui subsiste de façon indépendante.

§JUSTIFICATION§

**Dieu** — Le sens retenu est « Dieu » de l'axe Divinité. Le mot « Dieu » est choisi car c'est le nom français qu'on utilise au quotidien pour parler de la divinité unique. L'alternative « divinité » est écartée car le mot ʾallāh ne désigne pas la catégorie en général, il désigne LA divinité unique en particulier.

**divinité** — Le sens retenu est « divinité » de l'axe Divinité. Le mot « divinité » est choisi car le verset parle de la catégorie générale, pas d'un être en particulier. L'alternative « dieu » avec minuscule est écartée pour éviter la confusion avec « Dieu » employé juste avant.

**vivant** — Le sens retenu est « vivant » de l'axe Vie/Vivant. Le mot « vivant » est choisi car il rend simplement et directement le sens du mot arabe ḥayy. L'alternative « celui qui vit » est écartée car plus longue sans apporter de précision. Avec l'article « le », ça donne « le Vivant » qui signifie « celui qui possède la vie en lui-même ».

**subsister** — Le sens retenu est « subsister » de l'axe Verticalité/Droiture. Le mot « subsister » est choisi car il rend le sens étymologique de la racine — « se tenir, se maintenir » — tout en sonnant naturel comme caractéristique divine en français. Le mot français « subsister » vient du latin sub-sistere qui veut dire « se tenir dessous, demeurer en place » — c'est exactement la même image que la racine arabe q-w-m. Pour la traduction du verset, on utilise « le Subsistant » qui est la forme nominale en français : celui qui subsiste. L'alternative « celui qui se tient debout » est écartée car trop concrète pour une caractéristique divine. L'alternative « Auto-suffisant » est écartée car elle dit autre chose (être complet en soi-même), alors que l'arabe dit « durer, se maintenir ».

§CRITIQUE§

**il n'y a de divinité que Lui vs « Pas de divinité à part Lui »** : Hamidullah écrit « Pas de divinité à part Lui » sans le verbe « il n'y a » — ça sonne plus comme une exclamation, presque un cri. L'arabe utilise une tournure fixe (lā... illā = rien... sauf) qui se rend naturellement en français par « il n'y a de... que ». Notre traduction garde le verbe pour rester dans un ton posé qui pose une affirmation, alors que Hamidullah enlève le verbe et glisse vers une exclamation.

**le Subsistant vs « Celui qui subsiste par Lui-même »** : Hamidullah utilise plusieurs mots pour traduire al-qayyūm — il dit « Celui qui subsiste par Lui-même » et garde le mot arabe entre guillemets (« al-Qayyum »). Notre traduction dit la même chose en un seul mot : « le Subsistant », c'est-à-dire celui qui subsiste. C'est plus court et plus direct, sans rajouter de mots qui ne sont pas dans le texte arabe. Ajouter « par Lui-même » est une explication, pas une traduction — et garder le mot arabe entre guillemets, c'est reconnaître que la traduction n'a pas trouvé le bon mot français. « Subsistant » est exactement ce qu'il faut.`;

(async () => {
  await db.from('verse_analyses').update({ translation_explanation: NEW_EXPL }).eq('verse_id', 295);
  console.log('✓ V3:2 translation_explanation simplifiée');

  // Nettoyer le jargon dans les proof_ctx VWA
  const { data: vwas } = await db.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 295);
  for (const v of vwas || []) {
    if (!v.analysis_axes?.concepts) continue;
    let changed = false;
    for (const c of Object.keys(v.analysis_axes.concepts)) {
      const ctx = v.analysis_axes.concepts[c].proof_ctx || '';
      let newCtx = ctx;
      newCtx = newCtx.replace(/forme intensive/g, 'forme renforcée');
      newCtx = newCtx.replace(/forme nominale agentive/g, 'forme du mot qui désigne celui qui agit');
      newCtx = newCtx.replace(/idiomatiquement/g, 'naturellement');
      newCtx = newCtx.replace(/\bcopule\b/g, 'verbe « être »');
      newCtx = newCtx.replace(/périphrase explicative/g, 'explication en plusieurs mots');
      newCtx = newCtx.replace(/\belliptique\b/g, 'sans verbe');
      newCtx = newCtx.replace(/Parallèle étymologique au latin sub-sistere/g, 'Parallèle au mot français « subsister » qui vient du latin (se tenir, demeurer)');
      newCtx = newCtx.replace(/\bagentive\b/g, '');
      newCtx = newCtx.replace(/\baccusatif\b/g, '');
      newCtx = newCtx.replace(/\bnominatif\b/g, '');
      newCtx = newCtx.replace(/\s{2,}/g, ' ').trim();
      if (newCtx !== ctx) {
        v.analysis_axes.concepts[c].proof_ctx = newCtx;
        changed = true;
      }
    }
    if (changed) await db.from('verse_word_analyses').update({ analysis_axes: v.analysis_axes }).eq('id', v.id);
  }
  console.log('✓ proof_ctx VWA nettoyés du jargon');
})();
