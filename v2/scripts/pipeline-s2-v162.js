const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 162
// verse_id=169, analysis_id=526
// "Eternels en elle. Le chatiment ne leur sera pas allege
//  et il ne leur sera pas accorde de repit."
// Suite de V161 sur les nieurs.
// =====================================================

const verseData = {
  162: {
    verse_id: 169,
    analysis_id: 526,
    translation_arab: "Eternels en elle. Le chatiment ne leur sera pas allege et il ne leur sera pas accorde de repit.",
    full_translation: "Eternels en elle. Le chatiment ne leur sera pas allege et il ne leur sera pas accorde de repit.",
    translation_explanation: `§DEMARCHE§
Le verset decrit la consequence permanente pour les nieurs mentionnes au verset 161. Le participe actif **khalidina** est un pluriel masculin de la racine kh-l-d. Le Lane's donne : demeurer eternellement, rester indefiniment sans fin. Le participe actif marque un etat continu et permanent — ils demeurent eternellement dans cette malediction. La preposition **fiha** (en elle) renvoie a la malediction du verset 161. Le verbe **yukhaffafu** est un inaccompli passif 3MS de la forme II de la racine kh-f-f. Le Lane's donne : etre leger, alleger, diminuer un fardeau. La forme II (fa''ala) intensive signifie rendre leger, diminuer le poids. Le passif indique que le chatiment ne sera pas allege pour eux — la reduction ne leur sera pas appliquee. La negation **la** devant le verbe rend l'allegement impossible — il n'y aura aucune diminution. Le nom **al-'adhabu** est un nom masculin singulier defini nominatif de la racine '-dh-b. Le Lane's donne : chatiment, punition, tourment, souffrance infligee. L'article defini (al-) marque que c'est LE chatiment connu — celui qui a ete mentionne ou sous-entendu dans les versets precedents. Le nominatif indique que le chatiment est le sujet grammatical du verbe passif : c'est le chatiment qui n'est pas allege. Le verbe **yunzaruna** est un inaccompli passif 3MP de la racine n-z-r. Le Lane's donne : regarder, voir, contempler, considerer avec attention. A la forme I passive, le sens est « etre regarde avec compassion, se voir accorder un regard favorable, obtenir un repit ». Le passif indique que le regard compassionnel ne leur sera pas accorde — personne ne les regardera avec misericorde pour leur donner un delai. La negation **wa-la** (et ne pas) devant le verbe double la negation du verset : ni allegement ni regard favorable. Le pronom **hum** (eux) en fin de verset est un pronom independant 3MP qui renforce le sujet du verbe yunzaruna — ce sont eux specifiquement qui ne seront pas regardes.

§JUSTIFICATION§
**eternels** — Le sens retenu est « demeurer eternellement ». Le mot khalidina est un participe actif pluriel qui designe ceux qui demeurent pour toujours. L'alternative « pencher vers » (inclination) est ecartee car le contexte est la permanence dans la malediction, pas un mouvement interieur.

**alleger** — Le sens retenu est « alleger/diminuer un fardeau ». Le verbe yukhaffafu au passif signifie « etre allege ». Avec la negation, le chatiment ne sera pas allege — il restera a son intensite maximale. L'alternative « etre rapide » est ecartee car le contexte est la diminution d'un poids, pas la vitesse.

**le chatiment** — Le sens retenu est « chatiment/punition ». Le nom al-'adhabu designe la souffrance infligee comme correction. L'article defini marque le chatiment specifique reserve aux nieurs. L'alternative « doux/sucre » est ecartee car le contexte est la punition, pas la douceur.

**accorde de repit** — Le sens retenu est « regarder/contempler ». Le verbe yunzaruna au passif signifie « etre regarde avec compassion, obtenir un regard favorable ». La negation indique qu'aucun regard de misericorde ne leur sera accorde — pas de repit, pas de delai. L'alternative « attendre/delai » est ecartee car le sens premier de n-z-r est le regard, et le repit derive du regard compassionnel accorde a celui qui demande un delai.

§CRITIQUE§
Les traductions courantes rendent yunzaruna par « il ne leur sera pas accorde de repit » ou « ils n'obtiendront aucun delai ». Notre traduction conserve le meme sens final mais rattache le repit au regard : etre regarde avec compassion c'est obtenir un delai. La difference est subtile — les traductions courantes sautent directement au resultat (le repit) alors que le texte arabe passe par le moyen (le regard). Le sens global du verset reste identique dans toutes les traductions : permanence du chatiment, absence d'allegement, absence de repit.`,
    segments: [
      { fr: "eternels", pos: "adjectif", phon: "khalidina", arabic: "\u062e\u064e\u0640\u0644\u0650\u062f\u0650\u064a\u0646\u064e", word_key: "xld", is_particle: false, sense_retenu: "demeurer eternellement", position: 0 },
      { fr: "en elle", phon: "fiha", arabic: "\u0641\u0650\u064a\u0647\u064e\u0627", is_particle: true, position: 1 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 2 },
      { fr: "sera allege", pos: "verbe", phon: "yukhaffafu", arabic: "\u064a\u064f\u062e\u064e\u0641\u0651\u064e\u0641\u064f", word_key: "xff", is_particle: false, sense_retenu: "alleger", position: 3 },
      { fr: "le chatiment", pos: "nom", phon: "al-'adhabu", arabic: "\u0671\u0644\u0652\u0639\u064e\u0630\u064e\u0627\u0628\u064f", word_key: "edb", is_particle: false, sense_retenu: "chatiment", position: 4 },
      { fr: "et ne", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 5 },
      { fr: "leur sera accorde de repit", pos: "verbe", phon: "yunzaruna", arabic: "\u064a\u064f\u0646\u0638\u064e\u0631\u064f\u0648\u0646\u064e", word_key: "nzr", is_particle: false, sense_retenu: "regarder", position: 6 },
      { fr: "eux", phon: "hum", arabic: "\u0647\u064f\u0645\u0652", is_particle: true, position: 7 }
    ],
    words: [
      // xld pos=0
      {
        word_key: "xld", position: 0, sense_chosen: "demeurer eternellement",
        analysis_axes: {
          sense_chosen: "demeurer eternellement",
          concept_chosen: "Eternite/Permanence",
          concepts: {
            "Éternité/Permanence": {
              status: "retenu",
              senses: ["demeurer eternellement", "rester pour toujours"],
              proof_ctx: "Le mot khalidina est un participe actif pluriel masculin de la racine kh-l-d. Le Lane's donne : demeurer indefiniment, rester pour toujours dans un lieu ou un etat. Le participe actif marque un etat continu — ils sont dans l'etat permanent de demeurer. Le pluriel masculin s'accorde avec les nieurs mentionnes au verset 161. La preposition fiha (en elle) renvoie a la malediction. La distinction avec l'inclination (nul) est claire : le contexte est la permanence dans un etat, pas un mouvement interieur vers quelque chose.",
              axe1_verset: "Le mot khalidina ouvre le verset en affirmant la permanence. Le champ lexical du verset est la negation de tout espoir : eternels (pas de fin), pas d'allegement (pas de diminution), pas de repit (pas de regard compassionnel). Les trois elements se renforcent mutuellement — la permanence est totale car rien ne vient la briser. Le participe actif place l'eternite comme un etat deja installe, pas un evenement a venir.",
              axe2_voisins: "Le verset 161 a pose la malediction de Dieu, des anges et des gens. Le verset 162 enchaine immediatement avec la consequence : eternels en elle. Le verset 163 changera de sujet pour affirmer l'unicite de Dieu. Le mot khalidina fait le pont entre la cause (la malediction) et la consequence (la permanence) — il ferme la porte de la sortie.",
              axe3_sourate: "La racine kh-l-d apparait a plusieurs reprises dans la sourate al-Baqarah. En 2:25, les croyants sont khalidina dans les jardins. En 2:39 et 2:81, les nieurs sont khalidina dans le Feu. La sourate utilise le meme mot pour les deux destins — la permanence est commune, seul le lieu change. Le verset 162 s'inscrit dans cette symetrie.",
              axe4_coherence: "La racine kh-l-d apparait environ 87 fois dans le Coran. Le schema « khalidina fiha » (eternels en elle) est un refrain coranique qui accompagne les descriptions du paradis et de l'enfer. En 3:116, « ceux-la sont les gens du Feu, eternels en lui ». En 4:169, « eternels en lui a jamais ». Le Coran utilise ce refrain pour marquer l'irreversibilite du destin final.",
              axe5_frequence: "Pour la mission du khalifa, l'eternite est le rappel de l'enjeu ultime. La mission du khalifa n'est pas temporaire — ses consequences sont permanentes. Etre eternel dans la malediction est l'echec absolu de la mission. Le khalifa doit mesurer que ses choix ont des consequences qui depassent le temps terrestre."
            },
            "Inclination": {
              status: "nul",
              senses: ["pencher vers"],
              proof_ctx: "Le sens d'inclination est un mouvement interieur vers ce qui attire. Le contexte est la permanence dans la malediction, pas un penchant."
            }
          }
        }
      },
      // xff pos=3
      {
        word_key: "xff", position: 3, sense_chosen: "alleger",
        analysis_axes: {
          sense_chosen: "alleger",
          concept_chosen: "Légèreté/Allègement",
          concepts: {
            "Légèreté/Allègement": {
              status: "retenu",
              senses: ["etre leger", "alleger", "diminuer un fardeau"],
              proof_ctx: "Le verbe yukhaffafu est un inaccompli passif 3MS de la forme II de la racine kh-f-f. Le Lane's donne : etre leger, alleger, diminuer le poids. La forme II (takhfif) marque l'action de rendre leger — reduire le poids d'un fardeau. Le passif signifie que l'allegement ne sera pas applique au chatiment. La negation la devant le verbe rend l'allegement impossible. Le chatiment (al-'adhabu) est le sujet grammatical — c'est lui qui n'est pas allege. La distinction avec la vitesse (nul) est claire : le contexte est la diminution d'une charge, pas la rapidite d'un mouvement.",
              axe1_verset: "Le verbe yukhaffafu est le premier des deux verbes nies du verset — pas d'allegement, pas de repit. Le chatiment est le sujet de ce verbe passif. Le champ lexical (eternel, chatiment, pas d'allegement, pas de repit) construit une negation totale de tout espoir. L'allegement serait une diminution partielle — meme cette diminution est refusee. Le chatiment reste a son intensite maximale sans aucune reduction.",
              axe2_voisins: "Le verset 161 a etabli la malediction. Le verset 162 precise que cette malediction est non seulement permanente (khalidina) mais aussi sans attenuation (la yukhaffafu). Le verset 163 introduira l'unicite de Dieu — la transition montre que le Dieu unique est aussi celui qui maintient le chatiment sans allegement.",
              axe3_sourate: "La racine kh-f-f apparait en 2:178 dans le contexte de l'allegement accorde par Dieu dans la loi du talion — un allegement de la part du Seigneur. Le contraste est frappant : en 2:178 Dieu allege pour les croyants, en 2:162 Il refuse d'alleger pour les nieurs. L'allegement est un don divin reserve a ceux qui acceptent la guidance.",
              axe4_coherence: "La racine kh-f-f apparait environ 16 fois dans le Coran. En 35:18, « aucune ame chargee ne portera la charge d'une autre ». En 4:28, « Dieu veut alleger pour vous ». Le Coran montre que l'allegement est une misericorde divine — son absence dans le verset 162 marque le retrait de cette misericorde pour les nieurs.",
              axe5_frequence: "Pour la mission du khalifa, l'allegement est une grace accordee a ceux qui accomplissent la mission. Le khalifa qui rejette la guidance perd le droit a l'allegement. La lourdeur du chatiment non allege est proportionnelle a la gravite du rejet — rejeter la verite apres l'avoir connue est le poids le plus lourd."
            },
            "Vitesse/Empressement": {
              status: "nul",
              senses: ["etre rapide", "se hater"],
              proof_ctx: "Le sens de vitesse est lie a la legerete physique — ce qui est leger se deplace vite. Le contexte est la diminution d'un fardeau, pas la rapidite."
            }
          }
        }
      },
      // edb pos=4
      {
        word_key: "edb", position: 4, sense_chosen: "chatiment",
        analysis_axes: {
          sense_chosen: "chatiment",
          concept_chosen: "Châtiment/Punition",
          concepts: {
            "Châtiment/Punition": {
              status: "retenu",
              senses: ["punir", "chatier", "tourmenter", "chatiment"],
              proof_ctx: "Le nom al-'adhabu est un nom masculin singulier defini nominatif de la racine '-dh-b. Le Lane's donne : chatiment, tourment, punition corporelle ou morale. L'article defini (al-) marque que c'est LE chatiment connu — celui reserve aux nieurs. Le nominatif indique que le chatiment est le sujet du verbe passif yukhaffafu — c'est le chatiment qui n'est pas allege. La distinction avec la douceur (nul) est totale : la racine '-dh-b porte les deux sens opposes (doux/chatiment) mais le contexte de punition est sans ambiguite.",
              axe1_verset: "Le nom al-'adhabu est le pivot du verset — c'est l'objet central dont on dit qu'il ne sera pas allege. Le champ lexical (eternels, pas d'allegement, pas de repit) entoure le chatiment de trois negations : il est permanent, il n'est pas diminue, il n'est pas interrompu. Le chatiment est decrit non par ce qu'il est mais par ce qu'il ne subira pas — aucune modification, aucune attenuation.",
              axe2_voisins: "Le verset 161 a etabli la malediction. Le verset 162 precise la nature de cette malediction : un chatiment non allegeable. Le verset 165 parlera du chatiment severe au jour du jugement. Les versets 161-165 forment un ensemble sur les consequences du rejet — le chatiment en est la manifestation concrete.",
              axe3_sourate: "La racine '-dh-b est tres frequente dans la sourate al-Baqarah. En 2:7, un chatiment immense pour les nieurs. En 2:49, le chatiment de Pharaon. En 2:85, un chatiment plus severe au jour de la resurrection. La sourate utilise le chatiment comme consequence directe du rejet de la guidance — chaque rejet entraine un chatiment specifique.",
              axe4_coherence: "La racine '-dh-b apparait environ 373 fois dans le Coran. Le chatiment est lie a la justice divine — il n'est pas arbitraire mais proportionnel au rejet. En 40:46, « le chatiment le plus severe ». En 2:162, le chatiment est qualifie par son absence d'allegement plutot que par son intensite — ce qui le rend encore plus redoutable car il est decrit comme immuable.",
              axe5_frequence: "Pour la mission du khalifa, le chatiment est le rappel de la responsabilite. Le khalifa qui echoue dans sa mission par choix delibere fait face a un chatiment non allegeable. La mention du chatiment n'est pas une menace gratuite — c'est un avertissement proportionnel a l'enjeu de la mission."
            },
            "Douceur": {
              status: "nul",
              senses: ["doux", "sucre", "eau douce", "agreable"],
              proof_ctx: "Le sens de douceur est l'oppose du chatiment dans la meme racine. Le contexte est la punition permanente des nieurs, pas la douceur."
            },
            "Abstention": {
              status: "nul",
              senses: ["s'abstenir", "quitter"],
              proof_ctx: "Le sens d'abstention est un retrait volontaire. Le contexte est le chatiment inflige, pas l'abstention."
            }
          }
        }
      },
      // nzr pos=6
      {
        word_key: "nzr", position: 6, sense_chosen: "regarder",
        analysis_axes: {
          sense_chosen: "regarder",
          concept_chosen: "Regard/Contemplation",
          concepts: {
            "Regard/Contemplation": {
              status: "retenu",
              senses: ["regarder", "voir", "contempler", "considerer"],
              proof_ctx: "Le verbe yunzaruna est un inaccompli passif 3MP de la racine n-z-r. Le Lane's donne : regarder, voir, contempler, considerer avec attention. Au passif, le sens est « etre regarde avec compassion, se voir accorder un regard favorable » — ce qui aboutit au sens derive de « obtenir un repit, un delai ». La negation wa-la devant le verbe signifie qu'aucun regard compassionnel ne leur sera accorde. Le repit n'est pas un sens autonome de n-z-r — il derive du regard : quand on regarde quelqu'un avec compassion, on lui accorde un delai. La distinction avec l'attente (nul) est que le sens premier est le regard, pas l'attente.",
              axe1_verset: "Le verbe yunzaruna est le deuxieme verbe nie du verset — apres le refus d'allegement vient le refus du regard. Le champ lexical du verset construit une triple negation : eternels (pas de fin), pas d'allegement (pas de diminution), pas de regard (pas de compassion). Le regard est le dernier espoir — quand quelqu'un est chatie, il peut esperer qu'on le regarde avec compassion et qu'on lui accorde un delai. Ce dernier espoir est nie.",
              axe2_voisins: "Le verset 161 a etabli la malediction universelle (Dieu, anges, gens). Le verset 162 ferme toutes les portes : pas de sortie (eternels), pas de reduction (pas d'allegement), pas de sursis (pas de regard). Le verset 163 ouvrira sur l'unicite de Dieu — apres avoir decrit le sort des nieurs, le texte revient a la source de l'autorite qui impose ce sort.",
              axe3_sourate: "La racine n-z-r apparait dans la sourate al-Baqarah en 2:104 ou les croyants sont invites a ne pas dire « unzurna » (regarde-nous) mais « unzurna » (accorde-nous un delai). En 2:55, les Israelites ont dit « nous ne te croirons pas tant que nous ne verrons pas Dieu ouvertement ». La sourate montre que le regard est un acte de relation — regarder c'est reconnaitre, et etre regarde c'est etre reconnu.",
              axe4_coherence: "La racine n-z-r apparait environ 129 fois dans le Coran. L'expression « la hum yunzaruna » (il ne leur sera pas accorde de regard) apparait en 2:162, 3:88, 16:85. Le Coran utilise cette formule pour decrire l'absence totale de compassion envers les nieurs obstines. En 2:174, « Dieu ne leur parlera pas au jour de la resurrection et ne les regardera pas ». Le refus du regard est le degre ultime de la rupture.",
              axe5_frequence: "Pour la mission du khalifa, le regard de Dieu est la validation de la mission. Etre regarde par Dieu c'est etre reconnu dans sa mission. Ne pas etre regarde c'est etre ignore — la pire consequence pour celui qui avait une mission. Le khalifa qui rejette la guidance perd le regard divin et avec lui toute possibilite de repit ou de seconde chance."
            },
            "Attente": {
              status: "nul",
              senses: ["attendre", "delai"],
              proof_ctx: "Le sens d'attente est un derivatif du regard — attendre quelqu'un c'est le regarder venir. Le sens premier de n-z-r est le regard, pas l'attente. Le delai derive du regard compassionnel accorde."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  let okCount = 0, errCount = 0;

  for (const word of data.words) {
    const { error: insertErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes,
      model_used: 'claude-opus-4',
      prompt_version: 'v2-pipeline-maison'
    });

    if (insertErr) {
      console.error(`  ERREUR insertion vwa ${word.word_key}:`, insertErr.message);
      errCount++;
    } else {
      console.log(`  OK VWA ${word.word_key} pos=${word.position}`);
      okCount++;
    }
  }

  const { error: updateErr } = await supabase.from('verse_analyses').update({
    segments: data.segments,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    full_translation: data.full_translation
  }).eq('id', data.analysis_id);

  if (updateErr) {
    console.error(`  ERREUR update verse_analyses:`, updateErr.message);
    errCount++;
  } else {
    console.log(`  OK verse_analyses V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — ${okCount} OK, ${errCount} erreurs`);
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [169];
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', verseIds);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnee a synchroniser');
    return;
  }

  const processed = new Set();
  for (const vwa of vwas) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.concepts) continue;

    const key = vwa.word_key;
    if (processed.has(key)) continue;
    processed.add(key);

    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', key)
      .single();

    if (!wa) {
      console.log(`  ${key} non trouve dans word_analyses — skip`);
      continue;
    }

    for (const [conceptName, conceptData] of Object.entries(axes.concepts)) {
      const { error } = await supabase.from('word_meanings')
        .update({
          status: conceptData.status,
          proof_ctx: conceptData.proof_ctx || null,
          axe1_verset: conceptData.axe1_verset || null,
          axe2_voisins: conceptData.axe2_voisins || null,
          axe3_sourate: conceptData.axe3_sourate || null,
          axe4_coherence: conceptData.axe4_coherence || null,
          axe5_frequence: conceptData.axe5_frequence || null
        })
        .eq('analysis_id', wa.id)
        .eq('concept', conceptName);

      if (error) {
        console.error(`  ERREUR sync ${key}/${conceptName}:`, error.message);
      }
    }
    console.log(`  ${key} -> synced`);
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — VERSET 162 ===\n');
  await processVerse(162);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V162 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
