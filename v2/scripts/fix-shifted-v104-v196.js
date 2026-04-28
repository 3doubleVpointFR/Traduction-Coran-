const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async () => {
  // ===== V104 (vid=111) — 12 segments =====
  {
    const vid = 111;
    const {data: va} = await db.from('verse_analyses').select('id, segments').eq('verse_id', vid).single();
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    const fixes = {
      1:  {fr: 'ô', is_particle: true},
      2:  {fr: 'ceux qui', is_particle: true},
      3:  {fr: 'ont cru'},
      4:  {fr: 'ne pas', is_particle: true},
      5:  {fr: 'dites'},
      6:  {fr: 'veille sur nous'},
      7:  {fr: 'et dites'},
      8:  {fr: 'regarde-nous'},
      9:  {fr: 'et écoutez'},
      10: {fr: 'et pour les ingrats'},
      11: {fr: 'rétribution'},
      12: {fr: 'douloureuse'},
    };
    for (const s of segs) {
      const f = fixes[s.position];
      if (f) { s.fr = f.fr; if (f.is_particle !== undefined) s.is_particle = f.is_particle; }
    }
    await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
    console.log('V104 fixed (12 segments)');
  }

  // ===== V107 (vid=114) — 17 segments =====
  {
    const vid = 114;
    const {data: va} = await db.from('verse_analyses').select('id, segments').eq('verse_id', vid).single();
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    const fixes = {
      1:  {fr: 'ne pas', is_particle: true},
      2:  {fr: 'sais-tu'},
      3:  {fr: 'que', is_particle: true},
      4:  {fr: 'Dieu'},
      5:  {fr: 'à Lui', is_particle: true},
      6:  {fr: 'le royaume'},
      7:  {fr: 'des cieux'},
      8:  {fr: 'et de la terre'},
      9:  {fr: 'et', is_particle: true},
      10: {fr: 'pour vous', is_particle: true},
      11: {fr: 'de', is_particle: true},
      12: {fr: 'en dehors de'},
      13: {fr: 'Dieu'},
      14: {fr: 'de', is_particle: true},
      15: {fr: 'protecteur'},
      16: {fr: 'et pas de', is_particle: true},
      17: {fr: 'secoureur'},
    };
    for (const s of segs) {
      const f = fixes[s.position];
      if (f) { s.fr = f.fr; if (f.is_particle !== undefined) s.is_particle = f.is_particle; }
    }
    await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
    console.log('V107 fixed (17 segments)');
  }

  // ===== V109 (vid=116) — 33 segments =====
  {
    const vid = 116;
    const {data: va} = await db.from('verse_analyses').select('id, segments').eq('verse_id', vid).single();
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    const fixes = {
      1:  {fr: 'a souhaité'},
      2:  {fr: 'beaucoup'},
      3:  {fr: 'de', is_particle: true},
      4:  {fr: 'gens du'},
      5:  {fr: 'Livre'},
      6:  {fr: 'si', is_particle: true},
      7:  {fr: 'vous rendre'},
      8:  {fr: 'de', is_particle: true},
      9:  {fr: 'après'},
      10: {fr: 'votre foi'},
      11: {fr: 'en ingrats'},
      12: {fr: 'par jalousie'},
      13: {fr: 'de', is_particle: true},
      14: {fr: 'auprès de'},
      15: {fr: 'eux-mêmes'},
      16: {fr: 'de', is_particle: true},
      17: {fr: 'après'},
      18: {fr: 'ce que', is_particle: true},
      19: {fr: 'est apparu clairement'},
      20: {fr: 'à eux', is_particle: true},
      21: {fr: 'la vérité'},
      22: {fr: 'alors pardonnez'},
      23: {fr: 'et détournez-vous'},
      24: {fr: "jusqu'à", is_particle: true},
      25: {fr: 'vienne'},
      26: {fr: 'Dieu'},
      27: {fr: 'avec Son commandement'},
      28: {fr: 'certes', is_particle: true},
      29: {fr: 'Dieu'},
      30: {fr: 'sur', is_particle: true},
      31: {fr: 'toute'},
      32: {fr: 'chose'},
      33: {fr: 'est capable'},
    };
    for (const s of segs) {
      const f = fixes[s.position];
      if (f) { s.fr = f.fr; if (f.is_particle !== undefined) s.is_particle = f.is_particle; }
    }
    await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
    console.log('V109 fixed (33 segments)');
  }

  // ===== V196 (vid=203) — 73 segments =====
  {
    const vid = 203;
    const {data: va} = await db.from('verse_analyses').select('id, segments').eq('verse_id', vid).single();
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    const fixes = {
      1:  {fr: 'et accomplissez'},
      2:  {fr: 'le pèlerinage'},
      3:  {fr: 'et la visite pieuse'},
      4:  {fr: 'pour Dieu'},
      5:  {fr: 'si', is_particle: true},
      6:  {fr: 'vous êtes empêchés'},
      7:  {fr: 'alors ce que', is_particle: true},
      8:  {fr: 'est aisé'},
      9:  {fr: 'de', is_particle: true},
      10: {fr: "l'offrande"},
      11: {fr: 'et ne pas', is_particle: true},
      12: {fr: 'rasez'},
      13: {fr: 'vos têtes'},
      14: {fr: "jusqu'à", is_particle: true},
      15: {fr: 'atteigne'},
      16: {fr: "l'offrande"},
      17: {fr: 'son lieu'},
      18: {fr: 'celui qui', is_particle: true},
      19: {fr: 'est'},
      20: {fr: 'parmi vous', is_particle: true},
      21: {fr: 'malade'},
      22: {fr: 'ou', is_particle: true},
      23: {fr: 'en lui', is_particle: true},
      24: {fr: 'une gêne'},
      25: {fr: 'de', is_particle: true},
      26: {fr: 'sa tête'},
      27: {fr: 'alors une rançon'},
      28: {fr: 'de', is_particle: true},
      29: {fr: 'jeûne'},
      30: {fr: 'ou', is_particle: true},
      31: {fr: 'aumône'},
      32: {fr: 'ou', is_particle: true},
      33: {fr: 'sacrifice'},
      34: {fr: 'lorsque', is_particle: true},
      35: {fr: 'vous êtes en sécurité'},
      36: {fr: 'celui qui', is_particle: true},
      37: {fr: 'a joui'},
      38: {fr: 'de la visite pieuse'},
      39: {fr: 'vers', is_particle: true},
      40: {fr: 'le pèlerinage'},
      41: {fr: 'alors ce que', is_particle: true},
      42: {fr: 'est aisé'},
      43: {fr: 'de', is_particle: true},
      44: {fr: "l'offrande"},
      45: {fr: 'celui qui', is_particle: true},
      46: {fr: 'ne pas', is_particle: true},
      47: {fr: 'trouve'},
      48: {fr: 'alors un jeûne'},
      49: {fr: 'trois'},
      50: {fr: 'jours'},
      51: {fr: 'dans', is_particle: true},
      52: {fr: 'le pèlerinage'},
      53: {fr: 'et sept'},
      54: {fr: 'lorsque', is_particle: true},
      55: {fr: 'vous revenez'},
      56: {fr: 'ceux-là', is_particle: true},
      57: {fr: 'dix'},
      58: {fr: 'complets'},
      59: {fr: 'cela', is_particle: true},
      60: {fr: 'pour celui dont', is_particle: true},
      61: {fr: 'ne pas', is_particle: true},
      62: {fr: 'est'},
      63: {fr: 'sa famille'},
      64: {fr: 'présente à'},
      65: {fr: 'la mosquée'},
      66: {fr: 'sacrée'},
      67: {fr: 'et prémunissez-vous'},
      68: {fr: 'envers Dieu'},
      69: {fr: 'et sachez'},
      70: {fr: 'que', is_particle: true},
      71: {fr: 'Dieu'},
      72: {fr: 'est sévère'},
      73: {fr: 'en conséquence'},
    };
    for (const s of segs) {
      const f = fixes[s.position];
      if (f) { s.fr = f.fr; if (f.is_particle !== undefined) s.is_particle = f.is_particle; }
    }
    await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
    console.log('V196 fixed (73 segments)');
  }

  console.log('\n=== 4 versets corrigés ===');
})();
