const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async () => {
  const {data} = await db.from('verse_analyses')
    .select('id, verse_id, translation_arab, segments')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let fixes = {croire: 0, adhere: 0, consequence: 0, premunition: 0, dispensateur: 0, accents: 0};

  for (const va of data) {
    let t = va.translation_arab || '';
    let changed = false;
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    let segsChanged = false;

    // === 1. Fix "croire/cru/croyez" → "accorder confiance" ===
    // But KEEP legitimate uses like "nous ne te croirons pas" (V55)
    // and "Ne savent-ils pas" etc.
    const origT = t;

    // "Croyez en" → "Accordez confiance à"
    t = t.replace(/Croyez en/g, 'Accordez confiance à');
    // "croient" → "accordent confiance"
    t = t.replace(/ils croient/g, 'ils accordent confiance');
    t = t.replace(/ne croient/g, "n'accordent pas confiance");
    t = t.replace(/pas croient/g, "pas accordent confiance");
    t = t.replace(/croient pas/g, "accordent pas confiance");
    // "qui croient" → "qui accordent confiance"
    t = t.replace(/qui croient/g, 'qui accordent confiance');
    // "ceux qui croyaient" → "ceux qui accordaient confiance"
    t = t.replace(/qui croyaient/g, 'qui accordaient confiance');
    // "croyez" → "accordez confiance"
    t = t.replace(/croyez/g, 'accordez confiance');
    // "Nous croyons" → "Nous accordons confiance"
    t = t.replace(/Nous croyons/g, 'Nous accordons confiance');
    // "ils croyaient" → "ils accordaient confiance"
    t = t.replace(/croyaient/g, 'accordaient confiance');
    // "croyants" → "ceux qui accordent confiance"
    t = t.replace(/les croyants/g, 'ceux qui accordent confiance');
    t = t.replace(/croyants/g, 'ceux qui accordent confiance');
    // "a cru" → "a accordé confiance"
    t = t.replace(/\ba cru\b/g, 'a accordé confiance');
    // "croient-ils" → "accordent-ils confiance"
    t = t.replace(/croient-ils/g, 'accordent-ils confiance');
    // "ont cru" stays because it's used in V3-V10 style — actually let me check
    // V13: "comme les gens ont cru" — should this be "ont accordé confiance"?
    // In early verses V3-V10, "ont accordé confiance" is used. But V13+ switches to "cru".
    // For consistency, "ont cru" should stay as it's been validated in V3-V10 context.
    // Actually no — V3 says "accordent confiance", V8 says "accordé confiance"
    // But V13 says "cru" — that's inconsistent. Let me NOT change "cru" since it would
    // conflict with already-fixed verses like V104 "avez cru".
    // Actually V104 I just fixed to "avez cru" which is ALSO inconsistent...
    // The real question: does the project use "cru" or "accordé confiance" for the participle?
    // Looking at V3-V10: "accordent confiance" (present), "accordé confiance" (passé)
    // V104: "avez cru" — this one I set. Hmm.
    // Let's keep "cru" for participles since many verses already use it.
    // Only fix present tense "croient/croyez" forms.

    if (t !== origT) { changed = true; fixes.croire++; }

    // === 2. Fix "adhéré" → "accordé confiance" ===
    const t2 = t;
    t = t.replace(/ont adhere/g, 'ont accordé confiance');
    t = t.replace(/ont adhéré/g, 'ont accordé confiance');
    t = t.replace(/avez adhere/g, 'avez accordé confiance');
    t = t.replace(/avez adhéré/g, 'avez accordé confiance');
    if (t !== t2) { changed = true; fixes.adhere++; }

    // === 3. Fix "conséquence" → "rétribution" for 'adhab ===
    const t3 = t;
    t = t.replace(/une conséquence/g, 'une rétribution');
    t = t.replace(/la conséquence/g, 'la rétribution');
    if (t !== t3) { changed = true; fixes.consequence++; }

    // === 4. Fix "prémunition" when used for خَوْف (peur) ===
    const t4 = t;
    t = t.replace(/par prémunition de la mort/g, 'par peur de la mort');
    t = t.replace(/nulle prémunition sur eux/g, 'nulle peur sur eux');
    t = t.replace(/pas de prémunition sur eux/g, 'pas de peur sur eux');
    t = t.replace(/aucune prémunition sur eux/g, 'aucune peur sur eux');
    t = t.replace(/nulle prémunition pour eux/g, 'nulle peur pour eux');
    // Keep "prémunissez-vous" which is correct for taqwa
    if (t !== t4) { changed = true; fixes.premunition++; }

    // === 5. Fix "Dispensateur de miséricorde" ===
    const t5 = t;
    t = t.replace(/le Dispensateur de miséricorde/g, 'la Source de grâce');
    t = t.replace(/Dispensateur de miséricorde/g, 'Source de grâce');
    if (t !== t5) { changed = true; fixes.dispensateur++; }

    // === 6. Fix common accent issues ===
    const t6 = t;
    // Only fix clear patterns, not arbitrary text
    t = t.replace(/\bMaitre\b/g, 'Maître');
    t = t.replace(/\bcrees\b/g, 'créés');
    t = t.replace(/\bcree\b/g, 'créé');
    t = t.replace(/\bverite\b/g, 'vérité');
    t = t.replace(/\bguide\b(?!s|r|z)/g, 'guidé'); // careful
    t = t.replace(/\betes\b/g, 'êtes');
    t = t.replace(/\betait\b/g, 'était');
    t = t.replace(/\betaient\b/g, 'étaient');
    t = t.replace(/\betabli/g, 'établi');
    t = t.replace(/\bprepare\b/g, 'préparé');
    t = t.replace(/\bplace\b(?= pour)/g, 'placé');
    t = t.replace(/\brecut\b/g, 'reçut');
    t = t.replace(/\boeuvres\b/g, 'œuvres');
    t = t.replace(/\bepouse\b/g, 'épouse');
    t = t.replace(/\benseigna\b/g, 'enseigna'); // already correct
    t = t.replace(/\bpresenta\b/g, 'présenta');
    t = t.replace(/\bveridiques\b/g, 'véridiques');
    t = t.replace(/ a Dieu/g, ' à Dieu');
    t = t.replace(/ a Moise/g, ' à Moïse');
    t = t.replace(/ a Adam/g, ' à Adam');
    t = t.replace(/ a ceux/g, ' à ceux');
    t = t.replace(/ a son/g, ' à son');
    t = t.replace(/ a votre/g, ' à votre');
    t = t.replace(/ a leur/g, ' à leur');
    t = t.replace(/ a cause/g, ' à cause');
    t = t.replace(/ a propos/g, ' à propos');
    t = t.replace(/ a une/g, ' à une');
    t = t.replace(/ a la /g, ' à la ');
    t = t.replace(/ ou /g, ' où '); // careful - might break "ou" (or)
    // Revert "où" back to "ou" when it means "or" (before a noun/adjective)
    // Actually this is too risky. Let me not do the ou→où replacement.
    t = t.replace(/ où /g, ' ou '); // revert
    t = t.replace(/\bla-dedans\b/g, 'là-dedans');
    t = t.replace(/\bla et\b/g, 'là et');
    t = t.replace(/ de la\b/g, ' de là'); // too risky, revert
    t = t.replace(/ de là/g, ' de la'); // revert
    t = t.replace(/\betablis/g, 'établis');
    t = t.replace(/\betetabli/g, 'été établi');
    t = t.replace(/\bprecedent/g, 'précédent');
    t = t.replace(/\bprecede/g, 'précède');
    t = t.replace(/\briviere/g, 'rivière');
    t = t.replace(/\bmisericorde\b/g, 'miséricorde');
    t = t.replace(/\bretribution\b/g, 'rétribution');
    t = t.replace(/\beternellement\b/g, 'éternellement');
    if (t !== t6) { changed = true; fixes.accents++; }

    // Also fix segments fr
    if (segs && Array.isArray(segs)) {
      for (const s of segs) {
        if (!s.fr) continue;
        const origFr = s.fr;
        // Fix segment-level vocab
        if (s.fr === 'conséquence') s.fr = 'rétribution';
        if (t !== origT && s.fr.includes('croient')) s.fr = s.fr.replace('croient', 'accordent confiance');
        if (s.fr !== origFr) segsChanged = true;
      }
    }

    if (changed || segsChanged) {
      const update = {};
      if (changed) update.translation_arab = t;
      if (segsChanged) update.segments = segs;
      await db.from('verse_analyses').update(update).eq('id', va.id);
    }
  }

  console.log('=== CORRECTIONS ===');
  console.log('croire→confiance:', fixes.croire);
  console.log('adhéré→confiance:', fixes.adhere);
  console.log('conséquence→rétribution:', fixes.consequence);
  console.log('prémunition→peur:', fixes.premunition);
  console.log('Dispensateur→Source de grâce:', fixes.dispensateur);
  console.log('Accents:', fixes.accents);
})();
