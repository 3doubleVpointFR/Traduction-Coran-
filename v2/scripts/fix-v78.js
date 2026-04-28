const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 371;

  // 1. Corriger le segment lwy : "qui tordent" → "qui tord" (cohérent avec translation_arab singulier)
  const { data: va } = await db.from('verse_analyses').select('segments, translation_explanation').eq('verse_id', vid).single();
  const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
  for (const s of segs) {
    if (s.word_key === 'lwy' && s.fr === 'qui tordent') {
      s.fr = 'qui tord';
    }
  }
  await db.from('verse_analyses').update({ segments: segs }).eq('verse_id', vid);
  console.log('Segment lwy fr corrigé : "qui tordent" → "qui tord" ✅');

  // 2. Ajouter une §CRITIQUE§ pour "auprès de" (end) — absent de Hamidullah qui dit "vient de"/"provient du"
  // + ajouter phrase du quotidien pour lwy (check 12)
  const expl = va.translation_explanation;

  // Reconstruire §CRITIQUE§ en ajoutant l'entrée "auprès de Dieu" dans l'ordre d'apparition
  // Ordre : un groupe qui tord (pos 3+4) → l'écriture (pos 6) → vous pensiez (pos 8) →
  //         auprès de (pos 17) → sur Dieu le mensonge (pos 23-27) → alors qu'eux savent (pos 28-29)
  const critStart = expl.indexOf('§CRITIQUE§');
  const before = expl.substring(0, critStart);

  const newCritique = `§CRITIQUE§

**un groupe qui tord leurs langues avec l'écriture vs « certains qui roulent leurs langues en lisant le Livre »** : Hamidullah rend yalwūna alsinatahum bi-l-kitāb par « roulent leurs langues en lisant le Livre ». Trois glissements se cumulent : (1) yalwūna est traduit par « roulent » alors que la racine l-w-y désigne l'acte de tordre/courber, non de rouler — « rouler la langue » est une expression française qui évoque le trille sonore, non la déformation intentionnelle d'un texte. Le texte arabe décrit un groupe qui tord, ou qui tordent selon la lecture du pluriel collectif, leurs langues pour altérer l'articulation du texte. (2) bi-l-kitāb (« avec l'écriture ») est rendu par « en lisant le Livre » — paraphrase qui ajoute l'acte de lecture absent du texte et transforme la préposition instrumentale en circonstance temporelle. (3) La torsion est présentée comme un geste vocal neutre, alors que le verset décrit un procédé de falsification articulatoire pour faire passer un propos pour un autre. Le sens global change : Hamidullah suggère une simple déclamation bruyante pendant la lecture, le texte arabe décrit une manipulation délibérée de la prononciation à fins trompeuses.

**l'écriture vs « le Livre »** : Hamidullah rend al-kitāb par « le Livre » (majuscule, singulier identifié). Nous traduisons par « l'écriture ». La racine k-t-b désigne le corpus scripturaire révélé comme catégorie textuelle, pas comme objet-livre physique identifié. « Le Livre » tend à matérialiser et singulariser l'objet (LE livre précis), alors que « l'écriture » garde l'idée du contenu révélé comme type de parole. Cohérent avec les choix V48-V77.

**vous pensiez vs « vous faire croire »** : Hamidullah rend li-taḥsabūhu par « pour vous faire croire ». La racine ḥ-s-b est celle du calcul/évaluation rationnelle, non de la croyance. « Croire » déplace vers le champ de la foi, alors que taḥsabū désigne l'estimation intellectuelle — le classement qu'un auditeur fait mentalement. La différence change la nature de l'acte trompeur : Hamidullah décrit une induction à la foi (registre religieux), le texte arabe décrit une induction à l'évaluation erronée (registre cognitif).

**auprès de Dieu vs « d'Allah »** : Hamidullah rend min ʿindi allāhi par « d'Allah », effaçant ʿindi. La racine ʿ-n-d désigne la proximité/présence auprès de quelqu'un — min ʿindi allāhi signifie littéralement « en provenance de la proximité de Dieu », c'est-à-dire qu'un propos émane directement de Lui comme de sa sphère propre. « D'Allah » seul efface cette nuance de provenance depuis la sphère divine et réduit la préposition composée à une simple origine. Le texte arabe souligne précisément ce que les faussaires revendiquent : que leur propos vient « de chez Dieu » — revendication que le verset dément immédiatement avec la même formulation (« et cela ne vient pas d'auprès de Dieu »). La répétition exacte de min ʿindi allāhi dans l'affirmation et la négation est une structure rhétorique que la traduction par « d'Allah » aplatit.

**sur Dieu le mensonge vs « des mensonges contre Allah »** : Hamidullah rend yaqūlūna ʿalā allāhi al-kadhiba par « disent sciemment des mensonges contre Allah ». Trois transformations : (1) yaqūlūna devient « disent sciemment », déplaçant le savoir (wa-hum yaʿlamūna, circonstancielle séparée à la fin) à l'intérieur du verbe — perte de la structure arabe où l'énonciation et le savoir sont deux propositions coordonnées. (2) al-kadhiba (singulier défini = LE mensonge spécifique) devient « des mensonges » (pluriel indéfini = mensonges en général) — perte de la référence précise à la doctrine mensongère venant d'être exposée. (3) ʿalā (sur, au sujet de) devient « contre » — ajout d'une charge d'hostilité absente du texte. Le texte arabe décrit un acte précis et conscient — dire UN propos précis au sujet de Dieu qui ne vient pas de Lui — que Hamidullah dissout en un comportement général hostile.

**alors qu'eux savent vs « sciemment »** : Comme noté ci-dessus, wa-hum yaʿlamūna est grammaticalement une proposition circonstancielle indépendante (ḥāl) — elle ne dit pas « ils disent en sachant », mais « ils disent [un propos], alors qu'eux savent [que c'est faux] ». La traduction adverbiale par « sciemment » coule les deux propositions en une seule, perdant le relief rhétorique du texte arabe qui sépare l'acte (yaqūlūna) de l'état cognitif (yaʿlamūna) pour mieux souligner la lucidité consciente du mensonge.`;

  const newExpl = before + newCritique;
  await db.from('verse_analyses').update({ translation_explanation: newExpl }).eq('verse_id', vid);
  console.log('§CRITIQUE§ étendu avec "auprès de Dieu" ✅ (6 entrées)');

  // 3. Ajouter phrase du quotidien pour lwy (check 12)
  // Trouver analysis_id de lwy
  const { data: wa } = await db.from('word_analyses').select('id').eq('root_key', 'lwy').single();
  if (wa) {
    const { data: existingDaily } = await db.from('word_daily').select('id').eq('analysis_id', wa.id);
    if (!existingDaily || existingDaily.length === 0) {
      await db.from('word_daily').insert([
        {
          analysis_id: wa.id,
          phrase_fr: "Il a tordu le fil de fer pour fermer le paquet.",
          phrase_phon: "",
          phrase_ar: "",
          explanation: "Usage concret de lawā : la torsion d'un objet linéaire pour lui donner une nouvelle forme fonctionnelle.",
          display_order: 1
        },
        {
          analysis_id: wa.id,
          phrase_fr: "Elle a tordu ses paroles pour que personne ne comprenne ce qu'elle voulait dire vraiment.",
          phrase_phon: "",
          phrase_ar: "",
          explanation: "Extension métaphorique (usage coranique) : tordre la parole pour falsifier ou travestir son sens.",
          display_order: 2
        },
        {
          analysis_id: wa.id,
          phrase_fr: "Le marin a tordu la corde plusieurs fois avant de nouer le voilier au quai.",
          phrase_phon: "",
          phrase_ar: "",
          explanation: "Autre usage concret : la torsion répétée comme préparation à une action (attacher, sécuriser).",
          display_order: 3
        }
      ]);
      console.log('word_daily lwy : 3 phrases quotidiennes ajoutées ✅');
    } else {
      console.log('word_daily lwy : déjà ' + existingDaily.length + ' phrases — skip');
    }
  }

  console.log('\nV78 corrections appliquées — relancer le validateur');
}

run().catch(console.error);
