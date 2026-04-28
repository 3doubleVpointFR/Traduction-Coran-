// Pipeline S3:V42 — Étapes 3-4
// Verset: وَإِذْ قَالَتِ ٱلْمَلَـٰٓئِكَةُ يَـٰمَرْيَمُ إِنَّ ٱللَّهَ ٱصْطَفَىٰكِ وَطَهَّرَكِ وَٱصْطَفَىٰكِ عَلَىٰ نِسَآءِ ٱلْعَـٰلَمِينَ
// verse_id=335, VA_ID=694

const { createClient } = require('@supabase/supabase-js');
const sb = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const VERSE_ID = 335;
const VA_ID = 694;

async function main() {
  console.log('=== PIPELINE S3:V42 ===\n');

  // =====================================================
  // 1. PAS D'ENRICHISSEMENT NÉCESSAIRE
  // Toutes les racines ont ≥5 sens :
  //   qwl(307)=10, mlk(256)=19, alh(250)=16,
  //   sfw(923)=6, thr(402)=12, nsa(542)=9, elm(254)=22
  // =====================================================
  console.log('--- 1. Richesse des racines ---');
  const rootChecks = [
    { key: 'qwl', aid: 307 },
    { key: 'mlk', aid: 256 },
    { key: 'alh', aid: 250 },
    { key: 'sfw', aid: 923 },
    { key: 'thr', aid: 402 },
    { key: 'nsa', aid: 542 },
    { key: 'elm', aid: 254 }
  ];
  for (const r of rootChecks) {
    const { count } = await sb.from('word_meanings').select('*', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    console.log(`${r.key} (aid=${r.aid}): ${count} sens ${count >= 5 ? '✅' : '❌ SUSPECT'}`);
  }

  // =====================================================
  // 2. LIRE LES CONCEPTS EXACTS DEPUIS LA BDD
  // =====================================================
  console.log('\n--- 2. Concepts depuis BDD ---');
  const conceptsMap = {};
  for (const r of rootChecks) {
    const { data: meanings } = await sb.from('word_meanings').select('sense,concept').eq('analysis_id', r.aid).order('display_order');
    const concepts = {};
    meanings.forEach(m => {
      if (!concepts[m.concept]) concepts[m.concept] = [];
      concepts[m.concept].push(m.sense);
    });
    conceptsMap[r.key] = concepts;
    const cNames = Object.keys(concepts);
    console.log(`${r.key}: ${cNames.length} concepts → ${cNames.join(', ')}`);
  }

  // =====================================================
  // 3. CORRIGER LES SEGMENTS
  // - pos=4 (yā maryamu): type important → particle (nom propre, pas de racine)
  // - pos=11: key nsw → nsa (bonne racine pour نساء)
  // =====================================================
  console.log('\n--- 3. Fix segments ---');
  const { data: vaData } = await sb.from('verse_analyses').select('segments_step1').eq('id', VA_ID).single();
  const segs = vaData.segments_step1;

  // Fix pos=4: proper name → particle
  const seg4 = segs.find(s => s.position === 4);
  if (seg4) {
    seg4.type = 'particle';
    delete seg4.key;
    console.log('pos=4: type → particle (nom propre Maryam)');
  }

  // Fix pos=11: key nsw → nsa
  const seg11 = segs.find(s => s.position === 11);
  if (seg11) {
    seg11.key = 'nsa';
    seg11.root = 'ن س ء';
    console.log('pos=11: key nsw → nsa, root → ن س ء');
  }

  // Update segments_step1
  const { error: segErr } = await sb.from('verse_analyses').update({ segments_step1: segs }).eq('id', VA_ID);
  if (segErr) { console.log('ERREUR segments:', segErr.message); return; }
  console.log('Segments mis à jour');

  const important = segs.filter(s => s.type === 'important');
  const particles = segs.filter(s => s.type === 'particle');
  console.log(`Important: ${important.length} | Particle: ${particles.length} | Total: ${segs.length}`);

  // =====================================================
  // 4. VWA — 8 entries
  // =====================================================
  console.log('\n--- 4. VWA ---');

  // Supprimer les VWA existantes pour ce verset (s'il y en a)
  await sb.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);

  const vwaEntries = [
    // pos=2: qālatī → qwl(307) — dire
    {
      verse_id: VERSE_ID, word_key: 'qwl', root: 'ق و ل', position: 2,
      sense_chosen: 'dire',
      analysis_axes: {
        concept_chosen: "Parole/Énonciation",
        sense_chosen: "dire",
        concepts: {
          "Parole/Énonciation": {
            status: "retenu",
            senses: conceptsMap.qwl["Parole/Énonciation"],
            proof_ctx: "Le verbe accompli au féminin singulier exprime un acte de parole achevé — les messagers ont prononcé ces mots à Marie. C'est le seul sens compatible avec le contexte d'annonce directe."
          },
          "Pensée/Avis": {
            status: "peu_probable",
            senses: conceptsMap.qwl["Pensée/Avis"],
            proof_ctx: "Le contexte est une parole prononcée à haute voix, pas une opinion intérieure restée dans la pensée."
          },
          "Sens isolé/Puissance": {
            status: "nul",
            senses: conceptsMap.qwl["Sens isolé/Puissance"],
            proof_ctx: "Aucun rapport avec le contexte."
          },
          "Corps/Anatomie": {
            status: "nul",
            senses: conceptsMap.qwl["Corps/Anatomie"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=3: al-malā'ikatu → mlk(256) — messager
    {
      verse_id: VERSE_ID, word_key: 'mlk', root: 'م ل ك', position: 3,
      sense_chosen: 'messager',
      analysis_axes: {
        concept_chosen: "Ange/Messager",
        sense_chosen: "messager",
        concepts: {
          "Possession/Autorité": {
            status: "nul",
            senses: conceptsMap.mlk["Possession/Autorité"],
            proof_ctx: "Le contexte est une transmission de message, pas une relation de possession ou d'autorité."
          },
          "Royauté/Souveraineté": {
            status: "nul",
            senses: conceptsMap.mlk["Royauté/Souveraineté"],
            proof_ctx: "Les messagers ne règnent pas — ils transmettent une annonce à Marie."
          },
          "Ange/Messager": {
            status: "retenu",
            senses: conceptsMap.mlk["Ange/Messager"],
            proof_ctx: "Les malā'ika portent le message de Dieu à Marie. Le sens étymologique premier est messager — celui qui transmet. Contrairement à Possession et Royauté, le rôle ici est la transmission, pas la domination."
          },
          "Sens isolé/Pâte": {
            status: "nul",
            senses: conceptsMap.mlk["Sens isolé/Pâte"],
            proof_ctx: "Hors sujet."
          },
          "Sens isolé/Maîtriser": {
            status: "nul",
            senses: conceptsMap.mlk["Sens isolé/Maîtriser"],
            proof_ctx: "Hors sujet."
          },
          "Eau/Liquide": {
            status: "nul",
            senses: conceptsMap.mlk["Eau/Liquide"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=6: allāha → alh(250) — Dieu
    {
      verse_id: VERSE_ID, word_key: 'alh', root: 'ا ل ه', position: 6,
      sense_chosen: 'Dieu',
      analysis_axes: {
        concept_chosen: "Divinité",
        sense_chosen: "Dieu",
        concepts: {
          "Adoration/Dévotion": {
            status: "nul",
            senses: conceptsMap.alh["Adoration/Dévotion"],
            proof_ctx: "Le mot désigne la divinité elle-même, pas l'acte d'adoration."
          },
          "Divinité": {
            status: "retenu",
            senses: conceptsMap.alh["Divinité"],
            proof_ctx: "Allāh est le nom propre désignant la divinité — sujet de la phrase nominale après inna. Le sens Divinité est le seul applicable à ce nom propre en position de sujet."
          },
          "Détresse": {
            status: "nul",
            senses: conceptsMap.alh["Détresse"],
            proof_ctx: "Hors sujet."
          },
          "Refuge/Protection": {
            status: "nul",
            senses: conceptsMap.alh["Refuge/Protection"],
            proof_ctx: "Le contexte parle de la divinité elle-même, pas de chercher refuge."
          },
          "Domination": {
            status: "nul",
            senses: conceptsMap.alh["Domination"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=7: iṣṭafāki → sfw(923) — choisir (1ère occurrence)
    {
      verse_id: VERSE_ID, word_key: 'sfw', root: 'ص ف و', position: 7,
      sense_chosen: 'choisir',
      analysis_axes: {
        concept_chosen: "Élection/Choix",
        sense_chosen: "choisir",
        concepts: {
          "Pureté/Clarté": {
            status: "probable",
            senses: conceptsMap.sfw["Pureté/Clarté"],
            proof_ctx: "La racine porte la notion de pureté, mais la forme VIII oriente vers la sélection active. La pureté est un état passif, alors que la forme grammaticale exige une action accomplie dirigée vers Marie."
          },
          "Élection/Choix": {
            status: "retenu",
            senses: conceptsMap.sfw["Élection/Choix"],
            proof_ctx: "La forme VIII de ṣ-f-w signifie sélectionner le meilleur — trier pour ne garder que le plus pur. C'est un acte directionnel accompli de Dieu vers Marie. Contrairement à Pureté/Clarté qui est un état passif, l'Élection est un acte actif et dirigé."
          }
        }
      }
    },
    // pos=8: ṭahharaki → thr(402) — purifier
    {
      verse_id: VERSE_ID, word_key: 'thr', root: 'ط ه ر', position: 8,
      sense_chosen: 'purifier',
      analysis_axes: {
        concept_chosen: "Pureté/Purification",
        sense_chosen: "purifier",
        concepts: {
          "Pureté/Purification": {
            status: "retenu",
            senses: conceptsMap.thr["Pureté/Purification"],
            proof_ctx: "La forme II (causative intensive) de ṭ-h-r exprime le fait de rendre pur activement et en profondeur. C'est un acte accompli et dirigé de Dieu vers Marie. Contrairement à Chasteté/Vertu qui est un état permanent, la purification est un processus actif accompli. Contrairement à Pureté/Propreté qui est physique, la purification est une transformation profonde."
          },
          "Pureté/Propreté": {
            status: "probable",
            senses: conceptsMap.thr["Pureté/Propreté"],
            proof_ctx: "Le sens physique de propreté est cohérent avec la racine, mais le contexte est une action divine — la purification dépasse le simple nettoyage corporel."
          },
          "Ablution/Rituel": {
            status: "nul",
            senses: conceptsMap.thr["Ablution/Rituel"],
            proof_ctx: "Le contexte n'est pas rituel — il s'agit d'une purification divine directe."
          },
          "Chasteté/Vertu": {
            status: "probable",
            senses: conceptsMap.thr["Chasteté/Vertu"],
            proof_ctx: "La chasteté est pertinente dans le récit de Marie, mais c'est un état permanent, pas un acte accompli. La forme II causative exige une action de transformation active, pas un état."
          }
        }
      }
    },
    // pos=9: wa-ṣṭafāki → sfw(923) — choisir (2ème occurrence)
    {
      verse_id: VERSE_ID, word_key: 'sfw', root: 'ص ف و', position: 9,
      sense_chosen: 'choisir',
      analysis_axes: {
        concept_chosen: "Élection/Choix",
        sense_chosen: "choisir",
        concepts: {
          "Pureté/Clarté": {
            status: "probable",
            senses: conceptsMap.sfw["Pureté/Clarté"],
            proof_ctx: "La racine porte la notion de pureté, mais la forme VIII oriente vers la sélection active et comparative — choisir au-dessus de toutes les femmes."
          },
          "Élection/Choix": {
            status: "retenu",
            senses: conceptsMap.sfw["Élection/Choix"],
            proof_ctx: "Même forme VIII qu'en position 7, mais avec la précision ʿalā nisā'i l-ʿālamīn (au-dessus des femmes des mondes). Le choix est ici comparatif et superlatif — Marie est sélectionnée au-dessus de toutes."
          }
        }
      }
    },
    // pos=11: nisā'i → nsa(542) — femmes
    {
      verse_id: VERSE_ID, word_key: 'nsa', root: 'ن س ء', position: 11,
      sense_chosen: 'femmes',
      analysis_axes: {
        concept_chosen: "Féminin/Épouses",
        sense_chosen: "femmes",
        concepts: {
          "Féminin/Épouses": {
            status: "retenu",
            senses: conceptsMap.nsa["Féminin/Épouses"],
            proof_ctx: "Le mot nisā' est le pluriel désignant les femmes. En construction idafa avec al-ʿālamīn, il désigne toutes les femmes de toute la création — l'étendue du choix divin."
          },
          "Report/Délai": {
            status: "nul",
            senses: conceptsMap.nsa["Report/Délai"],
            proof_ctx: "Le contexte est une comparaison avec les femmes, pas un report ou un délai."
          },
          "Impulsion/Chasse": {
            status: "nul",
            senses: conceptsMap.nsa["Impulsion/Chasse"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },
    // pos=12: al-ʿālamīna → elm(254) — les mondes
    {
      verse_id: VERSE_ID, word_key: 'elm', root: 'ع ل م', position: 12,
      sense_chosen: 'les mondes',
      analysis_axes: {
        concept_chosen: "Monde/Création",
        sense_chosen: "les mondes",
        concepts: {
          "Savoir/Connaissance": {
            status: "nul",
            senses: conceptsMap.elm["Savoir/Connaissance"],
            proof_ctx: "Le contexte parle de l'étendue des créatures, pas de connaissance ou de savoir."
          },
          "Marque/Signe": {
            status: "nul",
            senses: conceptsMap.elm["Marque/Signe"],
            proof_ctx: "Hors sujet."
          },
          "Monde/Création": {
            status: "retenu",
            senses: conceptsMap.elm["Monde/Création"],
            proof_ctx: "Al-ʿālamīn est le pluriel défini désignant les mondes — la totalité de la création. Dans l'expression nisā'i l-ʿālamīn, il qualifie l'étendue universelle du choix de Marie."
          },
          "Sens isolé/Enseigner": {
            status: "nul",
            senses: conceptsMap.elm["Sens isolé/Enseigner"],
            proof_ctx: "Hors sujet."
          },
          "Lieu/Géographie": {
            status: "nul",
            senses: conceptsMap.elm["Lieu/Géographie"],
            proof_ctx: "Hors sujet."
          },
          "Sens isolé/Homonyme": {
            status: "nul",
            senses: conceptsMap.elm["Sens isolé/Homonyme"],
            proof_ctx: "Hors sujet."
          }
        }
      }
    }
  ];

  const { error: vwaErr } = await sb.from('verse_word_analyses').insert(vwaEntries);
  if (vwaErr) { console.log('ERREUR VWA:', vwaErr.message); return; }
  console.log(`VWA insert: ${vwaEntries.length} entries OK`);

  // =====================================================
  // 5. TRADUCTION
  // =====================================================
  console.log('\n--- 5. Translation ---');

  const translation_arab = `Et lorsque les messagers dirent : « Ô Marie, Dieu t'a choisie, t'a purifiée, et t'a choisie au-dessus des femmes des mondes. »`;

  const full_translation = `(Rappelle-toi) quand les Anges dirent : « Ô Marie, certes Allah t'a élue, t'a purifiée ; et t'a élue au-dessus des femmes des mondes. »`;

  const translation_explanation = `§DEMARCHE§
Ce verset fait suite au signe donné à Zacharie (verset 41). Le récit revient à une scène antérieure introduite par la particule temporelle **iḏ** (lorsque) : les messagers s'adressent directement à Marie — par le vocatif **yā** (ô) — pour lui annoncer que Dieu l'a choisie et purifiée, et l'a choisie au-dessus de toutes les femmes. La particule emphatique **inna** (certes) renforce la solennité de l'annonce, et la préposition **ʿalā** (au-dessus de) marque la supériorité du choix divin.

**qālatī** (dirent) est un verbe accompli (une forme qui dit que l'action est terminée, elle a eu lieu) à la 3ème personne du féminin singulier de la racine q-w-l. En arabe, les pluriels brisés de non-humains prennent l'accord au féminin singulier — c'est pourquoi le verbe est au singulier féminin malgré le sujet pluriel (les messagers). Le sens premier est « dire, prononcer une parole ». Le verbe accompli place la scène dans un temps révolu. On traduit par « dirent ».

**al-malā'ikatu** (les messagers) est un nom pluriel défini (avec l'article al-, qui indique des êtres connus et identifiés) de la racine m-l-k. Le mot malak désigne étymologiquement celui qui porte un message — un envoyé. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine m-l-k couvre la possession et la souveraineté, mais le mot malak/malā'ika se rapporte spécifiquement à la transmission de messages. On traduit par « les messagers ».

**allāha** (Dieu) est le nom propre de la divinité, à l'accusatif après la particule emphatique inna. La racine a-l-h porte le sens premier de « ce vers quoi on se tourne avec dévotion ». C'est le sujet de la phrase nominale introduite par inna. On traduit par « Dieu ».

**iṣṭafāki** (t'a choisie) est un verbe accompli à la 3ème personne du masculin singulier, forme VIII (une forme qui ajoute une nuance de sélection active pour soi-même) de la racine ṣ-f-w, avec le pronom suffixe -ki (toi, féminin). La racine ṣ-f-w porte le sens de pureté et de clarté — la forme VIII oriente ce sens vers l'acte de trier pour ne garder que le meilleur, le plus pur. Le verbe accompli indique que ce choix est achevé et définitif. C'est la première des trois actions annoncées aux messagers. On traduit par « t'a choisie ».

**ṭahharaki** (t'a purifiée) est un verbe accompli à la 3ème personne du masculin singulier, forme II (une forme intensive et causative qui signifie « faire l'action en profondeur ») de la racine ṭ-h-r, avec le pronom suffixe -ki. La racine ṭ-h-r porte le sens de l'absence de souillure. La forme II intensifie cette pureté — il ne s'agit pas d'un simple état de propreté mais d'une transformation active et profonde opérée par Dieu. C'est la deuxième action, intercalée entre les deux choix. On traduit par « t'a purifiée ».

**wa-ṣṭafāki** (et t'a choisie) est le même verbe qu'**iṣṭafāki** (position 7), précédé de la conjonction wa (et). La répétition du verbe iṣṭafā est significative dans la structure du verset : le premier choix (position 7) est absolu — « Dieu t'a choisie » sans comparaison — le second (position 9) est comparatif — il précise que ce choix place Marie au-dessus des femmes des mondes. La purification (ṭahhara) est intercalée entre les deux, structurant l'annonce en trois temps : choix absolu → purification → choix comparatif. On traduit par « et t'a choisie ».

**nisā'i** (les femmes) est un nom féminin pluriel de la racine n-s-' au génitif, en construction d'annexion (idafa — une structure où le premier nom est qualifié par le second : « les femmes DES mondes ») avec al-ʿālamīn. Le mot nisā' est le pluriel irrégulier désignant les femmes. On traduit par « les femmes ».

**al-ʿālamīna** (des mondes) est un nom masculin pluriel défini de la racine ʿ-l-m au génitif (en tant que deuxième terme de l'idafa). D'après les sources étymologiques, ʿālam désigne l'ensemble des créatures — tout ce qui existe. Le pluriel ʿālamīn élargit la portée à toutes les catégories de création. L'expression complète « au-dessus des femmes des mondes » dit que le choix de Marie dépasse toutes les femmes de toute la création. On traduit par « des mondes ».

§JUSTIFICATION§
**dirent** — Le sens retenu est « dire » de la racine q-w-l. Le mot « dirent » est choisi car c'est la forme la plus directe et courante en français pour exprimer une parole prononcée et achevée. L'alternative « parlèrent » est écartée car elle implique une conversation prolongée plutôt qu'une déclaration. L'alternative « affirmèrent » est écartée car elle ajoute une nuance d'insistance absente du texte.

**messagers** — Le sens retenu est « messager » de la racine m-l-k. Le mot « messagers » est choisi car il restitue la fonction étymologique de malak — celui qui porte et transmet un message. L'alternative « anges » est écartée car c'est un terme issu du vocabulaire chrétien (du grec angelos) qui ajoute des connotations (ailes, nature céleste, hiérarchie) absentes de l'étymologie arabe. L'alternative « message » est écartée car le texte désigne les porteurs, pas le contenu.

**Dieu** — Le sens retenu est « Dieu » de la racine a-l-h. Le mot « Dieu » est la traduction courante du nom propre allāh en français. L'alternative « divinité » est écartée car allāh est un nom propre, pas un concept abstrait.

**choisie** (position 7) — Le sens retenu est « choisir » de la racine ṣ-f-w. Le mot « choisie » est le terme le plus courant et naturel pour exprimer une sélection active. L'alternative « élue » est écartée car elle appartient au registre soutenu (élection formelle, distinction solennelle) — « choisie » est plus direct et quotidien. L'alternative « élu (safiy) » est un nom et ne convient pas à la forme verbale accomplie.

**purifiée** — Le sens retenu est « purifier » de la racine ṭ-h-r. Le mot « purifiée » est choisi car la forme II (causative intensive) exprime le fait de rendre pur activement et en profondeur. L'alternative « nettoyée » est écartée car trop physique et trivial pour une action divine. L'alternative « être pur » est écartée car c'est un état passif, pas l'action causative de la forme II.

**choisie** (position 9) — Même sens et mot que la position 7. La répétition dans le texte arabe est volontairement rendue par la répétition en français. L'alternative « distinguée » est écartée car elle appartient à un registre plus soutenu et ne correspond pas au sens premier de ṣ-f-w (pureté → sélection du meilleur).

**femmes** — Le sens retenu est « femmes » de la racine n-s-'. Le mot « femmes » est le terme le plus large et neutre désignant les êtres humains de sexe féminin. L'alternative « épouses » est écartée car elle restreint aux femmes mariées, ce qui n'est pas le propos du texte. L'alternative « genre féminin » est écartée car c'est une catégorie grammaticale, pas des personnes.

**mondes** — Le sens retenu est « les mondes » de la racine ʿ-l-m. Le mot « mondes » capture l'étendue de la création dans sa pluralité. L'alternative « univers » est écartée car il implique un seul espace unifié, alors que le pluriel ʿālamīn implique plusieurs mondes ou catégories de créatures. L'alternative « ensemble des créatures » est écartée car trop long et descriptif pour une traduction fluide.

§CRITIQUE§
**messagers vs anges** : Les traductions courantes donnent « anges » pour al-malā'ika. Ce mot vient du grec angelos, passé au latin angelus, puis au français « ange ». Il est devenu un terme du vocabulaire chrétien désignant des êtres célestes ailés avec une hiérarchie propre. En arabe, malak désigne étymologiquement celui qui porte un message — un envoyé. Notre traduction donne « messagers » car elle restitue la fonction étymologique sans les connotations ajoutées par la tradition chrétienne. Ce choix change la perspective du verset : au lieu de créatures surnaturelles définies par leur nature, ce sont des envoyés définis par leur fonction de transmission du message de Dieu.

**ajout de « (Rappelle-toi) »** : Les traductions courantes ajoutent « (Rappelle-toi) » ou « (Mentionne) » avant « quand les messagers dirent ». Ce mot n'existe pas dans le texte arabe — la particule iḏ signifie simplement « lorsque ». Cet ajout vient des exégèses qui lisent un verbe sous-entendu (uḏkur) avant iḏ. Cette lecture transforme la narration en injonction adressée au Prophète, ajoutant un destinataire et un impératif absents du texte. Notre traduction rend le texte tel qu'il est : « Et lorsque... ».`;

  // Segments d'affichage
  const displaySegments = [
    { fr: "Et lorsque", pos: "", phon: "wa-iḏ", arabic: "وَإِذْ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: "dirent", pos: "V", phon: "qālatī", arabic: "قَالَتِ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 2 },
    { fr: "les messagers", pos: "N", phon: "al-malā'ikatu", arabic: "ٱلْمَلَـٰٓئِكَةُ", word_key: "mlk", is_particle: false, sense_retenu: "messager", position: 3 },
    { fr: "ô Marie", pos: "", phon: "yā maryamu", arabic: "يَـٰمَرْيَمُ", word_key: null, is_particle: true, sense_retenu: null, position: 4 },
    { fr: "certes", pos: "", phon: "inna", arabic: "إِنَّ", word_key: null, is_particle: true, sense_retenu: null, position: 5 },
    { fr: "Dieu", pos: "N", phon: "allāha", arabic: "ٱللَّهَ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 6 },
    { fr: "t'a choisie", pos: "V", phon: "iṣṭafāki", arabic: "ٱصْطَفَىٰكِ", word_key: "sfw", is_particle: false, sense_retenu: "choisir", position: 7 },
    { fr: "t'a purifiée", pos: "V", phon: "ṭahharaki", arabic: "وَطَهَّرَكِ", word_key: "thr", is_particle: false, sense_retenu: "purifier", position: 8 },
    { fr: "et t'a choisie", pos: "V", phon: "wa-ṣṭafāki", arabic: "وَٱصْطَفَىٰكِ", word_key: "sfw", is_particle: false, sense_retenu: "choisir", position: 9 },
    { fr: "au-dessus de", pos: "", phon: "ʿalā", arabic: "عَلَىٰ", word_key: null, is_particle: true, sense_retenu: null, position: 10 },
    { fr: "les femmes", pos: "N", phon: "nisā'i", arabic: "نِسَآءِ", word_key: "nsa", is_particle: false, sense_retenu: "femmes", position: 11 },
    { fr: "des mondes", pos: "N", phon: "al-ʿālamīna", arabic: "ٱلْعَـٰلَمِينَ", word_key: "elm", is_particle: false, sense_retenu: "les mondes", position: 12 }
  ];

  const { error: transErr } = await sb.from('verse_analyses').update({
    translation_arab,
    full_translation,
    translation_explanation,
    segments: displaySegments
  }).eq('id', VA_ID);

  if (transErr) { console.log('ERREUR translation:', transErr.message); return; }
  console.log('Translation save: OK');

  // =====================================================
  // 6. DAILY PHRASES — TOUTES LES RACINES ONT DÉJÀ DES PHRASES
  // =====================================================
  console.log('\n--- 6. Daily phrases ---');
  for (const r of rootChecks) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', r.aid);
    console.log(`${r.key} (aid=${r.aid}): ${count} phrases → SKIP`);
  }
  console.log('Aucune phrase à insérer');

  // =====================================================
  // 7. VÉRIFICATION FINALE
  // =====================================================
  console.log('\n--- 7. Vérification finale ---');

  // Check segments
  const { data: finalVA } = await sb.from('verse_analyses').select('segments,translation_arab,full_translation,translation_explanation').eq('id', VA_ID).single();
  const impSegs = finalVA.segments.filter(s => !s.is_particle);
  const partSegs = finalVA.segments.filter(s => s.is_particle);
  console.log(`Segments: ${impSegs.length} important, ${partSegs.length} particle, ${finalVA.segments.length} total`);

  // Check VWA
  const { data: finalVWA } = await sb.from('verse_word_analyses').select('position,word_key,sense_chosen').eq('verse_id', VERSE_ID).order('position');
  console.log(`VWA: ${finalVWA.length} entries`);
  finalVWA.forEach(w => console.log(`  pos=${w.position} ${w.word_key} → ${w.sense_chosen}`));

  // Verify positions match
  const vwaPositions = finalVWA.map(w => w.position).sort((a, b) => a - b);
  const segPositions = impSegs.map(s => s.position).sort((a, b) => a - b);
  console.log(`Positions match: ${JSON.stringify(vwaPositions) === JSON.stringify(segPositions) ? 'OK' : 'MISMATCH!'}`);

  // Verify translation fields
  console.log(`full_translation: ${finalVA.full_translation ? 'OK' : 'MISSING!'}`);
  console.log(`translation: ${finalVA.translation_arab ? 'OK' : 'MISSING!'}`);
  console.log(`explanation: ${finalVA.translation_explanation ? 'OK (' + finalVA.translation_explanation.length + ' chars)' : 'MISSING!'}`);

  // Verify sense_retenu matches word_meanings
  for (const seg of impSegs) {
    const aid = rootChecks.find(r => r.key === seg.word_key)?.aid;
    if (aid) {
      const { data: meanings } = await sb.from('word_meanings').select('sense').eq('analysis_id', aid);
      const senses = meanings.map(m => m.sense);
      const match = senses.includes(seg.sense_retenu);
      if (!match) console.log(`  ⚠️ pos=${seg.position} sense_retenu="${seg.sense_retenu}" NOT in word_meanings!`);
    }
  }
  console.log('Sense_retenu verification: done');

  console.log('\n=== PIPELINE S3:V42 TERMINÉE ===');
  console.log(`\nVERSET 3:42 — TERMINÉ`);
  finalVWA.forEach(w => console.log(`  ${w.word_key} → sens "${w.sense_chosen}"`));
  console.log(`Traduction : "${finalVA.translation_arab}"`);
}

main().catch(e => console.error(e));
