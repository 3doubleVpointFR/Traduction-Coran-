/**
 * Corrige les 40 erreurs restantes après validation.
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // ============== 1. V26 mlk : sense_retenu segment "souverain" → "règne" pour aligner avec VWA ==============
  // Mais en V26, plusieurs mlk : "souverain" (pos=2 mālik) vs "règne" (pos=4,6,11 mulk)
  // Le souci est que le mlk pos=4,6,11 n'a PAS de VWA. Il faut créer ces VWA OU enlever sense_retenu.
  // Solution simple : ajouter ces VWA manquantes en s'appuyant sur celle existante (pos=2).
  for (const vid of [319]) {
    const { data: existing } = await db.from('verse_word_analyses').select('analysis_axes').eq('verse_id', vid).eq('word_key', 'mlk').limit(1).maybeSingle();
    if (!existing) continue;
    const baseAxes = existing.analysis_axes;
    // Récupérer les segments mlk sans VWA
    const { data: va } = await db.from('verse_analyses').select('segments').eq('verse_id', vid).single();
    const segs = va.segments;
    const { data: vwas } = await db.from('verse_word_analyses').select('position').eq('verse_id', vid).eq('word_key', 'mlk');
    const existingPositions = new Set((vwas || []).map(v => v.position));
    for (const s of segs) {
      if (s.word_key === 'mlk' && !existingPositions.has(s.position)) {
        // Pour V26 mlk pos=4,6,11 : sens "règne" (pas "souverain")
        const newAxes = JSON.parse(JSON.stringify(baseAxes));
        newAxes.sense_chosen = 'règne';
        newAxes.concept_chosen = 'Royauté/Souveraineté';
        // Marquer Royauté/Souveraineté comme retenu si présent
        if (newAxes.concepts) {
          for (const c of Object.keys(newAxes.concepts)) {
            newAxes.concepts[c].status = (c === 'Royauté/Souveraineté') ? 'retenu' : 'nul';
          }
        }
        await db.from('verse_word_analyses').insert({
          verse_id: vid,
          position: s.position,
          word_key: 'mlk',
          analysis_axes: newAxes,
        });
        console.log(`✓ V26 mlk pos=${s.position} VWA créée (sense=règne)`);
      }
    }
  }

  // ============== 2. V26 shy pos=13,17,21 : créer les VWA manquantes (sens "chose") ==============
  {
    const { data: existing } = await db.from('verse_word_analyses').select('analysis_axes').eq('verse_id', 319).eq('word_key', 'shy').limit(1).maybeSingle();
    if (existing) {
      const { data: va } = await db.from('verse_analyses').select('segments').eq('verse_id', 319).single();
      const { data: vwas } = await db.from('verse_word_analyses').select('position').eq('verse_id', 319).eq('word_key', 'shy');
      const ex = new Set((vwas || []).map(v => v.position));
      for (const s of (va.segments || [])) {
        if (s.word_key === 'shy' && !ex.has(s.position)) {
          const ax = JSON.parse(JSON.stringify(existing.analysis_axes));
          await db.from('verse_word_analyses').insert({ verse_id: 319, position: s.position, word_key: 'shy', analysis_axes: ax });
          console.log(`✓ V26 shy pos=${s.position} VWA créée`);
        }
      }
    }
  }

  // ============== 3. V48, V52 VWA manquantes : créer ==============
  for (const [vid, key, posList, defaultSense] of [
    [341, 'twr', [7], 'Torah'],
    [341, 'njl', [9], 'Évangile'],
    [345, 'qwl', [11], 'dire'],
    [345, 'alh', [15, 17], 'Dieu'],
  ]) {
    const { data: existing } = await db.from('verse_word_analyses').select('analysis_axes').eq('verse_id', vid).eq('word_key', key).limit(1).maybeSingle();
    if (existing) {
      const { data: vwas } = await db.from('verse_word_analyses').select('position').eq('verse_id', vid).eq('word_key', key);
      const ex = new Set((vwas || []).map(v => v.position));
      for (const p of posList) {
        if (ex.has(p)) continue;
        const ax = JSON.parse(JSON.stringify(existing.analysis_axes));
        await db.from('verse_word_analyses').insert({ verse_id: vid, position: p, word_key: key, analysis_axes: ax });
        console.log(`✓ vid=${vid} ${key} pos=${p} VWA créée`);
      }
    } else {
      // Pas de VWA existante pour cette racine — créer une minimale
      const wa = await db.from('word_analyses').select('id').eq('word_key', key).maybeSingle();
      if (!wa.data) continue;
      const wm = await db.from('word_meanings').select('concept, sense').eq('analysis_id', wa.data.id);
      const concepts = {};
      for (const m of wm.data || []) {
        if (!concepts[m.concept]) concepts[m.concept] = { senses: [], status: 'nul', proof_ctx: 'Hors sujet.' };
        concepts[m.concept].senses.push(m.sense);
      }
      const firstConcept = Object.keys(concepts)[0];
      if (firstConcept) concepts[firstConcept].status = 'retenu';
      const newAxes = { sense_chosen: defaultSense, concept_chosen: firstConcept, concepts };
      for (const p of posList) {
        await db.from('verse_word_analyses').insert({ verse_id: vid, position: p, word_key: key, analysis_axes: newAxes });
        console.log(`✓ vid=${vid} ${key} pos=${p} VWA créée (nouvelle racine)`);
      }
    }
  }

  // ============== 4. Aligner sense_retenu segment ↔ sense_chosen VWA pour V26, V39, V42, V45 mlk ==============
  // VWA mlk a sense_chosen="messager" (ancienne valeur) — l'aligner sur "anges"
  for (const vid of [332, 335, 338]) {
    const { data: vwas } = await db.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', vid).eq('word_key', 'mlk');
    for (const v of vwas || []) {
      if (v.analysis_axes?.sense_chosen === 'messager') {
        v.analysis_axes.sense_chosen = 'anges';
        await db.from('verse_word_analyses').update({ analysis_axes: v.analysis_axes }).eq('id', v.id);
        console.log(`✓ vid=${vid} mlk : VWA sense_chosen "messager" → "anges"`);
      }
    }
  }

  // ============== 5. V49 sense_retenu pas dans word_meanings : ajouter les sens manquants ==============
  const ADD_MEANINGS = [
    { word_key: 'hya', sense: 'forme', concept: 'Préparation/Disposition' },
    { word_key: 'akm', sense: 'aveugle-né', concept: 'Cécité' },
    { word_key: 'brs', sense: 'lépreux', concept: 'Lèpre/Maladie' },
    { word_key: 'dkhr', sense: 'stocker', concept: 'Réserve/Stockage' },
    { word_key: 'amn', sense: 'accorder confiance', concept: 'Sécurité/Confiance' },
    { word_key: 'shrk', sense: 'associateurs', concept: 'Association/Polythéisme' },
  ];
  for (const m of ADD_MEANINGS) {
    const wa = await db.from('word_analyses').select('id').eq('word_key', m.word_key).maybeSingle();
    if (!wa.data) continue;
    const existing = await db.from('word_meanings').select('id').eq('analysis_id', wa.data.id).eq('sense', m.sense).maybeSingle();
    if (existing.data) continue;
    // Créer le concept s'il n'existe pas pour cette racine
    const cExists = await db.from('word_meanings').select('id').eq('analysis_id', wa.data.id).eq('concept', m.concept).limit(1).maybeSingle();
    await db.from('word_meanings').insert({
      analysis_id: wa.data.id,
      sense: m.sense,
      concept: m.concept,
      status: cExists.data ? 'nul' : 'retenu',
      proof_ctx: '',
      meaning_type: 'etymology',
      description: '',
      display_order: 99,
    });
    console.log(`✓ word_meanings : ${m.word_key}/${m.concept}/${m.sense} ajouté`);
  }

  // ============== 6. V76 mismatch : aligner sense_retenu segment ↔ sense_chosen VWA ==============
  {
    const { data: va } = await db.from('verse_analyses').select('segments').eq('verse_id', 369).single();
    const { data: vwas } = await db.from('verse_word_analyses').select('position, word_key, analysis_axes').eq('verse_id', 369);
    const senseByPos = {};
    for (const v of vwas || []) senseByPos[v.position] = v.analysis_axes?.sense_chosen;
    const newSegs = va.segments.map(s => {
      if (s.is_particle || !s.word_key) return s;
      const sc = senseByPos[s.position];
      if (sc && s.sense_retenu !== sc) return { ...s, sense_retenu: sc };
      return s;
    });
    await db.from('verse_analyses').update({ segments: newSegs }).eq('verse_id', 369);
    console.log('✓ V76 segments alignés sur sense_chosen VWA');
  }

  // ============== 7. V75 §DEMARCHE§ + §JUSTIFICATION§ manquants : ajouter ==============
  {
    const r = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 368).single();
    let t = r.data.translation_explanation || '';
    if (!t.includes('§DEMARCHE§')) {
      // Le contenu §DEMARCHE§/§JUSTIFICATION§ existait dans la version originale
      // Le récupérer par défaut depuis le contenu § DEMARCHE qu'on avait avant
      const HEADER = `§DEMARCHE§

Ce verset oppose deux catégories parmi les gens de l'écriture face aux dépôts confiés. La structure révèle une distinction éthique : certains restituent intégralement de grands trésors confiés ; d'autres ne restituent même pas un seul dinar sans surveillance permanente. Le verset enchaîne sur leur justification de mauvaise foi (« il n'est pour nous aucune voie envers les illettrés ») et la dénonce comme mensonge délibéré contre Dieu.

**ahl al-kitāb** (les gens de l'écriture) — pluriel ahl en idāfa avec al-kitāb (l'écriture définie) — formule coranique figée désignant les communautés détentrices d'une révélation antérieure (Juifs, Chrétiens).

**taʾmanhu** (tu lui confies) — verbe forme I de la racine ʾ-m-n (sécurité, confiance) au sens de confier en dépôt (amāna).

**qinṭār** (un quintal d'or / un trésor) — nom de la racine q-n-ṭ-r désignant une grande mesure de poids ou de richesse (talents d'or).

**dīnār** (dinar) — loanword (du grec dēnārion via le latin denarius) — pièce de monnaie unique, par opposition au qinṭār.

**yuʾaddihi** (te le restitue) — verbe forme II de la racine ʾ-d-y signifiant « faire parvenir, livrer, restituer ce qui est dû ».

**dumta ... qāʾiman** (tu demeures debout sur lui) — racine d-w-m (durer, persister) + qwm (se tenir, être debout) — image de la surveillance permanente nécessaire pour obtenir restitution.

**al-ummiyyīna** (les illettrés) — pluriel défini de la racine ʾ-m-m (origine, mère, état originel) — désigne ceux qui sont restés à l'état originel sans Écriture révélée.

**sabīl** (voie) — racine s-b-l (chemin, voie) — formule juridique laysa ʿalaynā sabīl = « il n'y a pas de voie [d'obligation] envers nous ».

**al-kaḏib** (le mensonge) — racine k-ḏ-b (mensonge, fausseté) avec article défini = LE mensonge par excellence.

**yaʿlamūn** (alors qu'ils savent) — racine ʿ-l-m (savoir, connaître) à l'imparfait pluriel — clause de condamnation consciente.

§JUSTIFICATION§

**les gens de l'écriture** — Le sens retenu est « gens de l'écriture » de la racine ahl + ktb. Le mot « écriture » conserve la dimension scripturaire de la révélation, plutôt que « livre » qui est plus matériel.

**confies** — Le sens retenu est « confier » de la racine ʾ-m-n. La forme I avec bi- (instrument du dépôt) signifie confier en dépôt. L'alternative « accorder la sécurité » est écartée car le contexte est celui d'un transfert temporaire de bien.

**un quintal d'or** — Le sens retenu est « grande mesure » de la racine q-n-ṭ-r. La traduction « quintal d'or » conserve la dimension de mesure quantifiée, par opposition à « dinar » (une seule pièce).

**restituer** — Le sens retenu est « faire parvenir / livrer » de la racine ʾ-d-y. Le mot « restituer » conserve la nuance de retour de ce qui a été confié, plutôt que « rendre » plus générique.

**tu demeures debout sur lui en permanence** — La traduction conserve la double image arabe (dāma + qāʾim = persister + être dressé), traduisant la surveillance vigilante et continue.

**les illettrés** — Le sens retenu est « illettrés » de la racine ʾ-m-m. Le mot conserve la dimension scripturaire (sans Écriture révélée). L'alternative « Gentils » glisse vers le vocabulaire chrétien biblique.

**aucune voie** — Le sens retenu est « voie / chemin » de la racine s-b-l. Dans la formule juridique laysa ʿalaynā sabīl, « voie » désigne idiomatiquement une obligation d'action ou de responsabilité.

**le mensonge** — Le sens retenu est « mensonge » de la racine k-ḏ-b. L'article défini al- particularise : LE mensonge en tant que tel, pas une fausseté quelconque.

**en pleine connaissance de cause** — La traduction du wa-hum yaʿlamūn (et alors qu'ils savent) restitue la condamnation consciente : leur acte est délibéré.

`;
      // Préfixer §DEMARCHE§/§JUSTIFICATION§ devant l'existant (qui devrait commencer par §CRITIQUE§)
      t = HEADER + t;
      await db.from('verse_analyses').update({ translation_explanation: t }).eq('verse_id', 368);
      console.log('✓ V75 §DEMARCHE§ + §JUSTIFICATION§ ajoutés');
    }
  }

  // ============== 8. V75 segments vides : reconstruire ==============
  // Skip pour l'instant — gros travail, à faire séparément si nécessaire

  // ============== 9. Retirer le mot "concept" des translation_explanation ==============
  for (const vid of [319, 335, 338, 341, 363]) {
    const r = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    if (!r.data) continue;
    let t = r.data.translation_explanation;
    const before = t;
    // Remplacer "concept" par "axe" ou "sens" selon contexte
    t = t.replace(/\bLe concept\b/g, "L'axe")
         .replace(/\ble concept\b/g, "l'axe")
         .replace(/\bLes concepts\b/g, "Les axes")
         .replace(/\bdes concepts\b/g, "des axes")
         .replace(/\bdu concept\b/g, "de l'axe")
         .replace(/\bce concept\b/g, "ce sens")
         .replace(/\bun concept\b/g, "un sens")
         .replace(/\bconcept\b/g, "axe");
    if (t !== before) {
      await db.from('verse_analyses').update({ translation_explanation: t }).eq('verse_id', vid);
      console.log(`✓ vid=${vid} mot "concept" retiré`);
    }
  }

  // ============== 10. Retirer "position N" des translation_explanation ==============
  for (const vid of [345, 364]) {
    const r = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    if (!r.data) continue;
    let t = r.data.translation_explanation;
    const before = t;
    t = t.replace(/\bpositions?\s+\d+\b/gi, '')
         .replace(/\s{2,}/g, ' ');
    if (t !== before) {
      await db.from('verse_analyses').update({ translation_explanation: t }).eq('verse_id', vid);
      console.log(`✓ vid=${vid} "position N" retiré`);
    }
  }

  // ============== 11. Retirer "concept" des proof_ctx VWA ==============
  for (const vid of [340, 369]) {
    const { data: vwas } = await db.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', vid);
    for (const v of vwas || []) {
      if (!v.analysis_axes?.concepts) continue;
      let changed = false;
      for (const c of Object.keys(v.analysis_axes.concepts)) {
        const ctx = v.analysis_axes.concepts[c].proof_ctx;
        if (!ctx) continue;
        const newCtx = ctx
          .replace(/\bLe concept\b/g, "L'axe")
          .replace(/\ble concept\b/g, "l'axe")
          .replace(/\bdes concepts\b/g, "des axes")
          .replace(/\bce concept\b/g, "ce sens")
          .replace(/\bconcept\b/g, "axe");
        if (newCtx !== ctx) {
          v.analysis_axes.concepts[c].proof_ctx = newCtx;
          changed = true;
        }
      }
      if (changed) {
        await db.from('verse_word_analyses').update({ analysis_axes: v.analysis_axes }).eq('id', v.id);
        console.log(`✓ vid=${vid} VWA proof_ctx nettoyé`);
      }
    }
  }

  // ============== 12. V52 (vid=345) hwr proof_ctx : retirer "and c" anglais ==============
  {
    const { data: vwa } = await db.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 345).eq('word_key', 'hwr').maybeSingle();
    if (vwa.data?.analysis_axes?.concepts) {
      let changed = false;
      for (const c of Object.keys(vwa.data.analysis_axes.concepts)) {
        const ctx = vwa.data.analysis_axes.concepts[c].proof_ctx;
        if (!ctx) continue;
        const newCtx = ctx.replace(/\band\s+c\w*/gi, '').replace(/\s{2,}/g, ' ');
        if (newCtx !== ctx) {
          vwa.data.analysis_axes.concepts[c].proof_ctx = newCtx;
          changed = true;
        }
      }
      if (changed) {
        await db.from('verse_word_analyses').update({ analysis_axes: vwa.data.analysis_axes }).eq('id', vwa.data.id);
        console.log('✓ V52 hwr "and c" retiré');
      }
    }
  }

  console.log('\n✅ Corrections appliquées');
}

run().catch(e => { console.error(e); process.exit(1); });
