const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // ===== 1. V64 ktb : corriger concept_chosen "Écriture/Inscription" → "Livre/Écrit" (cohérent avec V48) =====
  {
    const { data: vwa } = await db.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 357).eq('word_key', 'ktb').single();
    const axes = typeof vwa.analysis_axes === 'string' ? JSON.parse(vwa.analysis_axes) : vwa.analysis_axes;
    const newAxes = {
      sense_chosen: 'écriture révélée',
      concept_chosen: 'Livre/Écrit',
      concepts: {
        'Livre/Écrit': {
          status: 'retenu',
          senses: ['registre', 'livre', 'écriture révélée', 'contrat d\'affranchissement', 'contrat de mariage', 'contrat écrit'],
          proof_ctx: 'Dans ahl al-kitāb, al-kitāb désigne le texte révélé comme objet identifiable (article défini al-). La Torah et l\'Évangile sont des kutub (pluriel de kitāb). Le sens retenu « écriture révélée » rend cette identité d\'objet textuel sacré.'
        },
        'Écriture/Inscription': {
          status: 'peu_probable',
          senses: ['écrire', 'écrire à quelqu\'un', 'art de l\'écriture', 'scribe'],
          proof_ctx: 'Ce sens désigne l\'acte d\'écrire, pas le texte lui-même. Or al-kitāb est ici un nom (objet), pas un verbe d\'action.'
        },
        'Assemblage/Couture': {
          status: 'nul',
          senses: ['coudre', 'armée', 'rassembler'],
          proof_ctx: 'Sens physique premier, hors sujet dans un contexte de communauté scripturaire.'
        },
        'Obligation/Décret': {
          status: 'nul',
          senses: ['rendre obligatoire', 'juger', 'décret divin', 'prescrire'],
          proof_ctx: 'Extension juridique, hors sujet ici car al-kitāb est qualificatif d\'une communauté (ahl), pas d\'un décret.'
        }
      }
    };
    await db.from('verse_word_analyses').update({ sense_chosen: 'écriture révélée', analysis_axes: newAxes }).eq('id', vwa.id);
    console.log('V64 ktb : concept_chosen Écriture/Inscription → Livre/Écrit ; sense_chosen écriture → écriture révélée ✅');
  }

  // ===== 2. V65 ktb : convertir V2 → V3, concept_chosen Livre/Écrit + sense_chosen écriture révélée =====
  {
    const { data: vwa } = await db.from('verse_word_analyses').select('id').eq('verse_id', 358).eq('word_key', 'ktb').single();
    const newAxes = {
      sense_chosen: 'écriture révélée',
      concept_chosen: 'Livre/Écrit',
      concepts: {
        'Livre/Écrit': {
          status: 'retenu',
          senses: ['registre', 'livre', 'écriture révélée', 'contrat d\'affranchissement', 'contrat de mariage', 'contrat écrit'],
          proof_ctx: 'Dans ahl al-kitāb (gens de l\'Écriture), al-kitāb désigne le texte révélé comme objet identifiable. Torah et Évangile sont nommés juste après — ce sont précisément les kutub qu\'al-kitāb recouvre. Le sens « écriture révélée » rend cette identité d\'objet sacré.'
        },
        'Écriture/Inscription': {
          status: 'peu_probable',
          senses: ['écrire', 'écrire à quelqu\'un', 'art de l\'écriture', 'scribe'],
          proof_ctx: 'Ce sens désigne l\'acte d\'écrire, pas le texte. Or al-kitāb est ici un nom (objet), pas un verbe d\'action.'
        },
        'Assemblage/Couture': {
          status: 'nul',
          senses: ['coudre', 'armée', 'rassembler'],
          proof_ctx: 'Sens physique premier, hors sujet dans un contexte scripturaire.'
        },
        'Obligation/Décret': {
          status: 'nul',
          senses: ['rendre obligatoire', 'juger', 'décret divin', 'prescrire'],
          proof_ctx: 'Extension juridique, hors sujet ici.'
        }
      }
    };
    await db.from('verse_word_analyses').update({ sense_chosen: 'écriture révélée', analysis_axes: newAxes }).eq('id', vwa.id);
    console.log('V65 ktb : V2→V3 format, sense_chosen livre → écriture révélée, concept Livre/Écrit ✅');
  }

  // ===== 3. Fixer sense_retenu dans segments (V67 et V68) =====
  for (const vid of [360, 361]) {
    const vnum = vid - 293;
    const { data: va } = await db.from('verse_analyses').select('segments').eq('verse_id', vid).single();
    const { data: vwas } = await db.from('verse_word_analyses').select('position, sense_chosen').eq('verse_id', vid);
    const vwaMap = Object.fromEntries(vwas.map(v => [v.position, v.sense_chosen]));
    const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    const fixed = segs.map(s => ({
      ...s,
      sense_retenu: s.is_particle ? null : (vwaMap[s.position] || s.sense_retenu || null),
    }));
    await db.from('verse_analyses').update({ segments: fixed }).eq('verse_id', vid);
    const filled = fixed.filter(s => !s.is_particle && s.sense_retenu).length;
    const total = fixed.filter(s => !s.is_particle).length;
    console.log('V' + vnum + ': segments sense_retenu remplis ' + filled + '/' + total + ' ✅');
  }

  // ===== 4. V65 sense_retenu pour ktb dans segment (était "livre", mettre "écriture révélée") =====
  {
    const { data: va } = await db.from('verse_analyses').select('segments').eq('verse_id', 358).single();
    const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    const seg = segs.find(s => s.position === 2);
    if (seg) seg.sense_retenu = 'écriture révélée';
    await db.from('verse_analyses').update({ segments: segs }).eq('verse_id', 358);
    console.log('V65 segment pos=2 sense_retenu → écriture révélée ✅');
  }

  // ===== 5. V65 §CRITIQUE§ : ajouter "gens de l'Écriture vs gens du Livre" EN PREMIER =====
  {
    const { data: va } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 358).single();
    const expl = va.translation_explanation;
    const critStart = expl.indexOf('§CRITIQUE§');
    const before = expl.substring(0, critStart);
    const critAfter = expl.substring(critStart + '§CRITIQUE§'.length);

    const newEntry = `

**gens de l'Écriture vs gens du Livre** : Hamidullah traduit ahl al-kitāb par « gens du Livre ». En français contemporain, « Livre » évoque un ouvrage précis et matériel — ça suggère que les chrétiens et juifs se rapportent à UN livre (comme le Coran pour les musulmans). Or al-kitāb en arabe est un nom de catégorie qui désigne l'écriture révélée en général, sans se limiter à un ouvrage relié. Torah et Évangile sont deux textes distincts, et « l'Écriture » rend mieux cette dimension de catégorie textuelle sacrée — les « gens de l'Écriture » sont ceux qui ont reçu un texte révélé, sans supposer l'unicité d'un volume. Le choix d'« Écriture » reste cohérent avec V48 et V64 où al-kitāb a le même sens.`;

    // On veut insérer cette nouvelle entrée EN PREMIER (pos 1 du mot ahla est avant pos 4 argumentez-vous)
    // Structure : §CRITIQUE§\n\n[nouvelle entrée]\n\n[entrées existantes]
    const newExpl = before + '§CRITIQUE§' + newEntry + critAfter;
    await db.from('verse_analyses').update({ translation_explanation: newExpl }).eq('verse_id', 358);
    console.log('V65 §CRITIQUE§ : ajouté "gens de l\'Écriture vs gens du Livre" EN PREMIER ✅');
  }

  // Vérification finale
  console.log('\n=== VÉRIFICATION ===');
  for (const vid of [358, 359, 360, 361]) {
    const vnum = vid - 293;
    const { data: va } = await db.from('verse_analyses').select('segments').eq('verse_id', vid).single();
    const { data: vwas } = await db.from('verse_word_analyses').select('position, sense_chosen, analysis_axes').eq('verse_id', vid);
    const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    const nullCount = segs.filter(s => !s.is_particle && !s.sense_retenu).length;
    const oldFormatCount = vwas.filter(v => {
      const a = typeof v.analysis_axes === 'string' ? JSON.parse(v.analysis_axes) : v.analysis_axes;
      return !a.concepts;
    }).length;
    console.log('V' + vnum + ': segments sense_retenu null=' + nullCount + ', VWA anciens format V2=' + oldFormatCount);
  }
}
run().catch(console.error);
