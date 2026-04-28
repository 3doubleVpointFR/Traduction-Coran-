const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const verseId = 347;

  // Hamidullah translation
  const full_translation = "Et ils [les autres] rus\u00e8rent. Mais Allah rusa aussi et Allah est le meilleur des strateg\u00e8mes.";

  // Our etymological translation
  const translation_arab = "Et ils ont complot\u00e9, et Dieu a \u00e9tabli son stratag\u00e8me, et Dieu est le meilleur de ceux qui \u00e9tablissent des stratag\u00e8mes.";

  // Meditational
  const translation_meditational = "Quand les hommes complotent dans l\u2019ombre, Dieu d\u00e9ploie un plan qu\u2019ils ne per\u00e7oivent pas. Aucune ruse ne surpasse la sienne.";

  // Translation explanation
  const translation_explanation = `\u00a7DEMARCHE\u00a7

Ce verset conclut le passage sur la mission de J\u00e9sus aupr\u00e8s des Fils d\u2019Isra\u00ebl (V48-53). Apr\u00e8s que les \u00e9prouv\u00e9s ont d\u00e9clar\u00e9 leur soutien au messager (V53), le texte r\u00e9v\u00e8le que ceux qui ont rejet\u00e9 J\u00e9sus ont complot\u00e9 contre lui \u2014 et que Dieu a r\u00e9pondu par un stratag\u00e8me sup\u00e9rieur.

**Makar\u016b** (ils ont complot\u00e9) est un verbe \u00e0 l\u2019accompli (une forme qui dit que l\u2019action est achev\u00e9e, termin\u00e9e), troisi\u00e8me personne du pluriel. Le sujet \u00ab ils \u00bb renvoie \u00e0 ceux qui ont manifest\u00e9 le kufr (la couverture) dont J\u00e9sus a senti la pr\u00e9sence au verset 52. La racine m-k-r d\u00e9signe, d\u2019apr\u00e8s les sources \u00e9tymologiques (Lane\u2019s Arabic-English Lexicon, Edward Lane, 1863), l\u2019acte de planifier secr\u00e8tement une action pour atteindre quelqu\u2019un sans qu\u2019il sache d\u2019o\u00f9 elle vient. On traduit par \u00ab ils ont complot\u00e9 \u00bb.

**Makara** (il a \u00e9tabli un stratag\u00e8me) est le m\u00eame verbe \u00e0 l\u2019accompli, troisi\u00e8me personne du singulier. Le sujet est Dieu. Le texte utilise d\u00e9lib\u00e9r\u00e9ment le m\u00eame mot pour les deux actions \u2014 il met en miroir le complot humain et la r\u00e9ponse divine. D\u2019apr\u00e8s les sources \u00e9tymologiques, le makr peut \u00eatre bon ou mauvais selon la nature de son objet. On traduit par \u00ab il a \u00e9tabli son stratag\u00e8me \u00bb plut\u00f4t que \u00ab il a complot\u00e9 \u00bb car le mot stratag\u00e8me est plus neutre et d\u00e9signe le plan lui-m\u00eame sans la connotation exclusivement n\u00e9gative du complot.

**All\u0101hu** (Dieu) est le nom propre de la Divinit\u00e9, au nominatif (position de sujet). Il appara\u00eet deux fois dans le verset : comme sujet du verbe makara, puis comme sujet de la phrase nominale qui suit. Le texte insiste sur l\u2019identit\u00e9 de celui qui r\u00e9pond et sur celui dont la qualit\u00e9 est affirm\u00e9e.

**Khayru** (le meilleur de) est un nom au nominatif en position de pr\u00e9dicat. C\u2019est la construction de l\u2019\u00e9latif arabe (un outil grammatical qui exprime le superlatif) : khayru + g\u00e9nitif pluriel = \u00ab le meilleur de [tel groupe] \u00bb. Cette construction ne dit pas que Dieu est \u00ab bon \u00bb en g\u00e9n\u00e9ral \u2014 elle dit qu\u2019il est le meilleur dans une cat\u00e9gorie pr\u00e9cise. On traduit par \u00ab le meilleur de \u00bb.

**Al-m\u0101kir\u012bn** (ceux qui \u00e9tablissent des stratag\u00e8mes) est un participe actif (une forme qui d\u00e9signe celui qui fait l\u2019action activement et de mani\u00e8re continue), pluriel, d\u00e9fini par l\u2019article al-. Le mot d\u00e9signe la cat\u00e9gorie de tous ceux qui pratiquent le makr. La construction \u00ab khayru al-m\u0101kir\u012bn \u00bb englobe donc dans la m\u00eame cat\u00e9gorie les humains qui ont complot\u00e9 et Dieu qui a r\u00e9pondu \u2014 et elle affirme que Dieu en est le meilleur. On traduit par \u00ab ceux qui \u00e9tablissent des stratag\u00e8mes \u00bb.

\u00a7JUSTIFICATION\u00a7

**complot\u00e9** \u2014 Le sens retenu est \u00ab comploter \u00bb du sens Ruse/Stratag\u00e8me. Le mot \u00ab comploter \u00bb est choisi car il capture le caract\u00e8re secret et hostile de l\u2019action humaine : ce groupe agit dans l\u2019ombre contre J\u00e9sus. L\u2019alternative \u00ab ruser \u00bb est \u00e9cart\u00e9e car \u00ab ruser \u00bb est plus g\u00e9n\u00e9ral et peut \u00eatre anodin (\u00ab ruser au jeu \u00bb), alors que \u00ab comploter \u00bb implique toujours une action secr\u00e8te dirig\u00e9e contre quelqu\u2019un. L\u2019alternative \u00ab machiner \u00bb est \u00e9cart\u00e9e car c\u2019est du registre litt\u00e9raire.

**stratag\u00e8me** \u2014 Le sens retenu est \u00ab stratag\u00e8me \u00bb du sens Ruse/Stratag\u00e8me. Le mot \u00ab stratag\u00e8me \u00bb est choisi pour Dieu car il est plus neutre que \u00ab complot \u00bb \u2014 un stratag\u00e8me peut \u00eatre bon ou mauvais, il d\u00e9signe le plan lui-m\u00eame. L\u2019alternative \u00ab complot \u00bb est \u00e9cart\u00e9e car elle porte une connotation exclusivement n\u00e9gative. L\u2019alternative \u00ab plan secret \u00bb est \u00e9cart\u00e9e car elle est trop plate et ne rend pas la dimension strat\u00e9gique.

**Dieu** \u2014 Le sens retenu est \u00ab divinit\u00e9 \u00bb. Allah est le nom propre de la Divinit\u00e9, traduit par \u00ab Dieu \u00bb en fran\u00e7ais conform\u00e9ment \u00e0 la r\u00e8gle des noms propres.

**meilleur** \u2014 Le sens retenu est \u00ab meilleur \u00bb du sens Sup\u00e9riorit\u00e9. Le mot \u00ab meilleur \u00bb est choisi car il rend exactement l\u2019\u00e9latif arabe dans la construction khayru + g\u00e9nitif. L\u2019alternative \u00ab sup\u00e9rieur \u00bb est \u00e9cart\u00e9e car \u00ab sup\u00e9rieur \u00bb ne s\u2019utilise pas dans la construction \u00ab le sup\u00e9rieur de ceux qui... \u00bb en fran\u00e7ais courant.

**ceux qui \u00e9tablissent des stratag\u00e8mes** \u2014 Le sens retenu est \u00ab ruser \u00bb du sens Ruse/Stratag\u00e8me. Le participe actif d\u00e9signe ceux qui pratiquent le makr. On traduit par \u00ab ceux qui \u00e9tablissent des stratag\u00e8mes \u00bb plut\u00f4t que \u00ab ceux qui rusent \u00bb pour maintenir la coh\u00e9rence avec le choix de \u00ab stratag\u00e8me \u00bb pour Dieu et garder un mot qui englobe le makr bon et le makr mauvais.

\u00a7CRITIQUE\u00a7

**\u00ab complot\u00e9 \u00bb vs \u00ab rus\u00e8rent \u00bb** \u2014 Les traductions courantes donnent \u00ab ils rus\u00e8rent \u00bb. Notre traduction donne \u00ab ils ont complot\u00e9 \u00bb. La diff\u00e9rence est dans l\u2019intensit\u00e9 : \u00ab ruser \u00bb est plus g\u00e9n\u00e9ral (on peut ruser au jeu de cartes), \u00ab comploter \u00bb est plus pr\u00e9cis et rend le caract\u00e8re secret et hostile de l\u2019action contre J\u00e9sus. Les deux sont dans le champ de la racine m-k-r. Notre choix pr\u00e9cise le registre sans changer le sens global du verset.

**\u00ab \u00e9tabli son stratag\u00e8me \u00bb vs \u00ab rusa aussi \u00bb** \u2014 Les traductions courantes disent \u00ab Allah rusa aussi \u00bb. Notre traduction donne \u00ab Dieu a \u00e9tabli son stratag\u00e8me \u00bb. La diff\u00e9rence est dans le registre : \u00ab ruser \u00bb appliqu\u00e9 \u00e0 Dieu sonne n\u00e9gativement en fran\u00e7ais car \u00ab ruser \u00bb implique la tromperie. Le mot \u00ab stratag\u00e8me \u00bb est plus neutre et rend mieux le fait que le makr peut \u00eatre bon ou mauvais selon l\u2019agent et l\u2019objet, comme le pr\u00e9cise le Lane\u2019s. Ce n\u2019est pas une attenuation du texte \u2014 c\u2019est un choix de mot fran\u00e7ais qui pr\u00e9serve la neutralit\u00e9 que le mot arabe poss\u00e8de.

**\u00ab Dieu \u00bb vs \u00ab Allah \u00bb** \u2014 Les traductions courantes gardent \u00ab Allah \u00bb. Notre traduction donne \u00ab Dieu \u00bb. L\u2019arabe dit All\u0101h, qui est le nom propre de la Divinit\u00e9 en arabe. En fran\u00e7ais, le nom propre de la Divinit\u00e9 est \u00ab Dieu \u00bb. Garder \u00ab Allah \u00bb en fran\u00e7ais cr\u00e9e une fausse exoticit\u00e9 qui sugg\u00e8re qu\u2019il s\u2019agirait d\u2019une divinit\u00e9 diff\u00e9rente.

**\u00ab le meilleur de ceux qui \u00e9tablissent des stratag\u00e8mes \u00bb vs \u00ab le meilleur des stratag\u00e8mes \u00bb** \u2014 Certaines traductions rendent al-m\u0101kir\u012bn par \u00ab stratag\u00e8mes \u00bb (un nom) au lieu de \u00ab ceux qui \u00e9tablissent des stratag\u00e8mes \u00bb (un participe actif). Al-m\u0101kir\u012bn est grammaticalement un participe actif pluriel \u2014 il d\u00e9signe des personnes, pas des plans. \u00ab Le meilleur des stratag\u00e8mes \u00bb est grammaticalement incorrect par rapport \u00e0 l\u2019arabe. Notre traduction respecte la forme du participe actif.`;

  // Segments for display
  const segments = [
    {
      fr: "et",
      pos: "particule",
      phon: "wa",
      arabic: "\u0648\u064E",
      word_key: null,
      is_particle: true,
      sense_retenu: null,
      position: 1
    },
    {
      fr: "ils ont complot\u00e9",
      pos: "verbe",
      phon: "makar\u016b",
      arabic: "\u0645\u064E\u0643\u064E\u0631\u064F\u0648\u0627\u06E1",
      word_key: "mkr",
      is_particle: false,
      sense_retenu: "comploter",
      position: 2
    },
    {
      fr: "et",
      pos: "particule",
      phon: "wa",
      arabic: "\u0648\u064E",
      word_key: null,
      is_particle: true,
      sense_retenu: null,
      position: 3
    },
    {
      fr: "a \u00e9tabli son stratag\u00e8me",
      pos: "verbe",
      phon: "makara",
      arabic: "\u0645\u064E\u0643\u064E\u0631\u064E",
      word_key: "mkr",
      is_particle: false,
      sense_retenu: "stratag\u00e8me",
      position: 4
    },
    {
      fr: "Dieu",
      pos: "nom",
      phon: "all\u0101hu",
      arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u064F",
      word_key: "alh",
      is_particle: false,
      sense_retenu: "divinit\u00e9",
      position: 5
    },
    {
      fr: "et",
      pos: "particule",
      phon: "wa",
      arabic: "\u0648\u064E",
      word_key: null,
      is_particle: true,
      sense_retenu: null,
      position: 6
    },
    {
      fr: "Dieu",
      pos: "nom",
      phon: "all\u0101hu",
      arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u064F",
      word_key: "alh",
      is_particle: false,
      sense_retenu: "divinit\u00e9",
      position: 7
    },
    {
      fr: "le meilleur",
      pos: "nom",
      phon: "khayru",
      arabic: "\u062E\u064E\u064A\u0652\u0631\u064F",
      word_key: "khyr",
      is_particle: false,
      sense_retenu: "meilleur",
      position: 8
    },
    {
      fr: "de ceux qui \u00e9tablissent des stratag\u00e8mes",
      pos: "participe_actif",
      phon: "al-m\u0101kir\u012bn",
      arabic: "\u0671\u0644\u0652\u0645\u064E\u0640\u0670\u0643\u0650\u0631\u0650\u064A\u0646\u064E",
      word_key: "mkr",
      is_particle: false,
      sense_retenu: "ruser",
      position: 9
    }
  ];

  // Update verse_analyses
  const { error } = await db.from('verse_analyses').update({
    full_translation: full_translation,
    translation_arab: translation_arab,
    translation_meditational: translation_meditational,
    translation_explanation: translation_explanation,
    segments: segments
  }).eq('verse_id', verseId);

  if (error) {
    console.log('UPDATE ERROR:', JSON.stringify(error));
  } else {
    console.log('verse_analyses updated successfully for verse_id=' + verseId);
  }

  // Verify
  const { data: check } = await db.from('verse_analyses').select('full_translation, translation_arab').eq('verse_id', verseId).single();
  console.log('\nVerification:');
  console.log('Hamidullah:', check.full_translation);
  console.log('Notre:', check.translation_arab);

  // Add word_daily for mkr (3 phrases for the retained sense)
  const { data: existingDaily } = await db.from('word_daily').select('id').eq('analysis_id', 1281);
  if (existingDaily && existingDaily.length > 0) {
    console.log('\nword_daily for mkr: already exists, SKIP');
  } else {
    const phrases = [
      {
        analysis_id: 1281,
        phrase_fr: "Les enfants ont complot\u00e9 pour faire une surprise \u00e0 leur m\u00e8re.",
        phrase_ar: null,
        context: "complot positif - surprise"
      },
      {
        analysis_id: 1281,
        phrase_fr: "Ils ont \u00e9tabli un stratag\u00e8me pour remporter la comp\u00e9tition.",
        phrase_ar: null,
        context: "stratag\u00e8me neutre - comp\u00e9tition"
      },
      {
        analysis_id: 1281,
        phrase_fr: "Le ruseur croit toujours que personne ne voit ses plans.",
        phrase_ar: null,
        context: "ruse - illusion de secret"
      }
    ];
    const { error: dailyError } = await db.from('word_daily').insert(phrases);
    if (dailyError) {
      console.log('\nword_daily INSERT ERROR:', JSON.stringify(dailyError));
    } else {
      console.log('\nword_daily: 3 phrases added for mkr');
    }
  }

  // Final log
  console.log('\n=== VERSET 3:54 \u2014 TERMIN\u00c9 ===');
  console.log('  mkr (pos 2) \u2192 sens "comploter" \u2192 mot fran\u00e7ais "ils ont complot\u00e9"');
  console.log('  mkr (pos 4) \u2192 sens "stratag\u00e8me" \u2192 mot fran\u00e7ais "a \u00e9tabli son stratag\u00e8me"');
  console.log('  alh (pos 5) \u2192 sens "divinit\u00e9" \u2192 mot fran\u00e7ais "Dieu"');
  console.log('  alh (pos 7) \u2192 sens "divinit\u00e9" \u2192 mot fran\u00e7ais "Dieu"');
  console.log('  khyr (pos 8) \u2192 sens "meilleur" \u2192 mot fran\u00e7ais "le meilleur"');
  console.log('  mkr (pos 9) \u2192 sens "ruser" \u2192 mot fran\u00e7ais "de ceux qui \u00e9tablissent des stratag\u00e8mes"');
  console.log('  Traduction : "Et ils ont complot\u00e9, et Dieu a \u00e9tabli son stratag\u00e8me, et Dieu est le meilleur de ceux qui \u00e9tablissent des stratag\u00e8mes."');
}

run().catch(console.error);
