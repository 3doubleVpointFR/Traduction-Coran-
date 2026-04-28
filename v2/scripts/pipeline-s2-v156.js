const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 156
// verse_id=163, analysis_id=520
// "Ceux qui, quand un malheur les atteint, disent :
//  'Nous appartenons a Dieu et c'est vers Lui que
//  nous retournons.'"
// =====================================================

const verseData = {
  156: {
    verse_id: 163,
    analysis_id: 520,
    translation_arab: "Ceux qui, quand une epreuve les atteint, disent : nous sommes a Dieu et c'est vers Lui que nous retournons.",
    full_translation: "Ceux qui, lorsqu'un malheur les atteint, disent : Certes nous sommes a Allah, et c'est vers Lui que nous retournerons.",
    translation_explanation: `§DEMARCHE§
Le verset decrit la reaction des endurants face a l'epreuve. Le pronom relatif **alladhina** introduit la proposition relative qui qualifie les endurants du verset precedent (2:155). La particule temporelle **idha** (quand, lorsque) pose la condition temporelle : au moment ou l'epreuve survient. Le verbe **asabat-hum** est un accompli 3FS de la racine s-w-b avec pronom suffixe 3MP. Le Lane's donne : atteindre, toucher, frapper. L'accompli indique que l'evenement est acheve — l'epreuve les a effectivement atteints. Le pronom suffixe « hum » montre que l'epreuve les touche directement et personnellement. Le nom **musibatun** est un nom feminin singulier indefini de la meme racine s-w-b. Le Lane's donne : calamite, epreuve, ce qui atteint quelqu'un. Le nom est un participe actif feminin — c'est celle qui atteint, celle qui frappe. L'indefini (sans article) marque que n'importe quelle epreuve est visee — pas une epreuve specifique, mais toute epreuve qui survient. Le verbe **qalu** est un accompli 3MP de la racine q-w-l. Le Lane's donne : dire, prononcer, affirmer. L'accompli marque que la parole est prononcee — ils ont dit. Le pluriel montre que c'est une reaction collective et unanime. La particule **inna** (certes) ouvre la declaration avec emphase — ce qui suit est une affirmation solennelle. La preposition **li-llahi** (a Dieu, pour Dieu) marque l'appartenance — nous sommes a Dieu, nous Lui appartenons. Le participe actif pluriel **raji'una** est de la racine r-j-e. Le Lane's donne : retourner, revenir. Le participe actif indique un etat permanent ou une action en cours — ils sont ceux qui retournent, ceux qui sont en train de retourner. Ils affirment que leur destination finale est Dieu.

§JUSTIFICATION§
**atteint** — Le sens retenu est « atteindre ». Le verbe asabat-hum decrit l'epreuve qui les touche. L'alternative « viser juste » est ecartee car le contexte est celui d'une epreuve qui survient, pas d'un tireur qui vise une cible.

**epreuve** — Le sens retenu est « epreuve ». Le mot musibatun designe ce qui atteint quelqu'un — une calamite, un malheur. L'alternative « pluie abondante » est ecartee car le contexte est l'endurance face au malheur, pas la meteorologie.

**disent** — Le sens retenu est « dire ». Le verbe qalu decrit la parole prononcee par les endurants. L'alternative « opinion » est ecartee car le contexte est une declaration solennelle, pas un avis personnel.

**retournons** — Le sens retenu est « retourner ». Le participe raji'una affirme que leur destination finale est Dieu — ils retournent vers Lui. L'alternative « pluie » est ecartee car le contexte est le retour vers Dieu, pas la meteorologie.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere presque identique. La formule « inna li-llahi wa-inna ilayhi raji'una » est connue comme l'istirja' — la declaration de retour a Dieu face a l'epreuve. La seule difference notable entre les traductions est le choix entre « malheur », « calamite » et « epreuve » pour musiba. Nous retenons « epreuve » car ce mot est plus neutre et plus fidele au champ semantique de la racine s-w-b qui porte l'idee d'atteindre, pas necessairement de catastrophe. Une epreuve peut etre grande ou petite — c'est ce qui vous atteint.`,
    segments: [
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 0 },
      { fr: "quand", phon: "idha", arabic: "\u0625\u0650\u0630\u064e\u0627", is_particle: true, position: 1 },
      { fr: "les atteint", pos: "verbe", phon: "asabat-hum", arabic: "\u0623\u064e\u0635\u064e\u0640\u0628\u064e\u062a\u0652\u0647\u064f\u0645", word_key: "swb", is_particle: false, sense_retenu: "atteindre", position: 2 },
      { fr: "une epreuve", pos: "nom", phon: "musibatun", arabic: "\u0645\u064f\u0651\u0635\u0650\u064a\u0628\u064e\u0629\u064c", word_key: "swb", is_particle: false, sense_retenu: "epreuve", position: 3 },
      { fr: "disent", pos: "verbe", phon: "qalu", arabic: "\u0642\u064e\u0627\u0644\u064f\u0648\u0627\u06df", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 4 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e\u0627", is_particle: true, position: 5 },
      { fr: "a Dieu", phon: "li-llahi", arabic: "\u0644\u0650\u0644\u0651\u064e\u0647\u0650", is_particle: true, position: 6 },
      { fr: "retournons", pos: "nom", phon: "raji'una", arabic: "\u0631\u064e\u0640\u062c\u0650\u0639\u064f\u0648\u0646\u064e", word_key: "rja", is_particle: false, sense_retenu: "retourner", position: 7 }
    ],
    words: [
      // swb pos=2 — asabat-hum (verbe accompli 3FS + pronom)
      {
        word_key: "swb", position: 2, sense_chosen: "atteindre",
        analysis_axes: {
          sense_chosen: "atteindre",
          concept_chosen: "Atteinte/Affliction",
          concepts: {
            "Atteinte/Affliction": {
              status: "retenu",
              senses: ["frapper (calamite)", "atteindre", "toucher", "pluie abondante"],
              proof_ctx: "Le verbe asabat-hum est un accompli 3FS de la racine s-w-b avec pronom suffixe 3MP. Le Lane's donne : atteindre, toucher, frapper, viser et toucher le but. L'atteinte est directionnelle — l'epreuve part de sa cause et frappe celui qui la recoit. L'accompli indique que l'evenement est acheve — l'epreuve les a effectivement atteints. Le pronom suffixe « hum » montre que l'atteinte est directe et personnelle. La distinction avec le sens de « viser juste » (nul) est claire : le sujet est musibatun (epreuve), pas un archer ou un tireur.",
              axe1_verset: "Le verbe asabat-hum est le declencheur de la reaction des endurants. Le champ lexical du verset (epreuve, dire, retourner) montre une sequence : l'epreuve atteint → ils reagissent par la parole → ils affirment leur appartenance a Dieu. L'atteinte est le point de depart de tout le verset. Sans epreuve, pas de reaction, pas d'istirja'. Le verbe porte l'idee de contact direct — l'epreuve ne passe pas a cote, elle les touche.",
              axe2_voisins: "Le verset 155 annoncait les epreuves : « Nous vous eprouverons par la peur, la faim, la diminution des biens, des personnes et des fruits ». Le verset 156 montre la reaction face a ces epreuves annoncees. Le verset 157 donnera la recompense : les prieres et la misericorde de leur Seigneur. La sequence est : annonce de l'epreuve → reaction face a l'epreuve → recompense pour la bonne reaction.",
              axe3_sourate: "La racine s-w-b apparait plusieurs fois dans la sourate al-Baqarah dans le contexte des epreuves. En 2:124, Dieu eprouve Ibrahim. En 2:155, Dieu annonce les epreuves. La sourate montre que l'epreuve est un outil divin de selection — elle revele qui endure et qui flechit. L'atteinte de l'epreuve est le moment de verite.",
              axe4_coherence: "La racine s-w-b apparait environ 75 fois dans le Coran. Le mot musiba (epreuve/calamite) derive de cette racine et apparait dans plusieurs passages cles. En 3:165, « quand une epreuve vous atteignit ». En 4:62, « quand une epreuve les atteint ». Le Coran utilise asaba pour decrire ce qui touche l'homme sans qu'il puisse l'eviter — l'epreuve qui atteint est ineluctable.",
              axe5_frequence: "Pour la mission du khalifa, l'epreuve qui atteint est un test de la mission. Le khalifa sera necessairement atteint par des epreuves — la question n'est pas si l'epreuve viendra mais comment il reagira. L'atteinte est directe et personnelle — on ne peut pas deleguer sa propre epreuve. La mission exige d'endurer ce qui atteint."
            },
            "Justesse/Rectitude": {
              status: "nul",
              senses: ["etre juste", "viser juste"],
              proof_ctx: "Le sens de justesse est un sens rationnel de s-w-b — viser et atteindre le but avec precision. Le contexte est une epreuve qui atteint quelqu'un, pas un tireur qui vise une cible."
            },
            "Endurance": {
              status: "nul",
              senses: ["patience"],
              proof_ctx: "Le sens d'endurance est un sens derive de s-w-b. Le contexte est l'atteinte de l'epreuve, pas l'endurance elle-meme — l'endurance est la reaction, pas l'evenement."
            }
          }
        }
      },
      // swb pos=3 — musibatun (nom singulier indefini)
      {
        word_key: "swb", position: 3, sense_chosen: "epreuve",
        analysis_axes: {
          sense_chosen: "epreuve",
          concept_chosen: "Atteinte/Affliction",
          concepts: {
            "Atteinte/Affliction": {
              status: "retenu",
              senses: ["frapper (calamite)", "atteindre", "toucher", "pluie abondante"],
              proof_ctx: "Le nom musibatun est un participe actif feminin singulier indefini de la racine s-w-b. Le Lane's donne : calamite, epreuve, ce qui atteint quelqu'un, coup du sort. Le nom est morphologiquement un participe actif — musiba est « celle qui atteint », l'agent de l'atteinte. L'indefini (sans article) marque que toute epreuve est visee, pas une epreuve specifique. La distinction avec le sens de « justesse » (nul) est claire : le contexte decrit un malheur qui survient, pas une action precise.",
              axe1_verset: "Le nom musibatun est le sujet du verbe asabat-hum — c'est l'epreuve qui atteint. Le champ lexical (atteindre, dire, retourner) montre que l'epreuve est l'evenement declencheur. Le fait que musiba soit indefini donne au verset une portee universelle — il ne s'agit pas d'une epreuve particuliere mais de toute epreuve. Quelle que soit l'epreuve qui les atteint, leur reaction est la meme.",
              axe2_voisins: "Le verset 155 detaillait les formes d'epreuve : peur, faim, diminution des biens, des personnes et des fruits. Le verset 156 resume tout cela sous un seul mot : musiba — une epreuve. Le passage du detail (v155) au general (v156) montre que la reaction d'istirja' s'applique a toutes les epreuves sans distinction.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine s-w-b pour montrer que l'epreuve fait partie du plan divin. En 2:155, l'epreuve est annoncee comme certaine (la-nabluwannakum). En 2:156, l'epreuve est nommee musiba. La sourate enseigne que l'epreuve n'est pas un accident mais un element constitutif de la vie terrestre.",
              axe4_coherence: "Le mot musiba apparait environ 10 fois dans le Coran. En 4:79, « ce qui t'atteint de bien vient de Dieu, ce qui t'atteint de mal vient de toi-meme ». En 42:30, « tout malheur qui vous atteint est a cause de ce que vos mains ont acquis ». Le Coran montre que la musiba a des causes — elle n'est pas arbitraire. La reaction d'istirja' reconnait Dieu comme source et destination.",
              axe5_frequence: "Pour la mission du khalifa, l'epreuve est un outil de purification. La musiba revele la vraie nature de celui qui est eprouve — l'endurant dit « nous sommes a Dieu », le rebelle se plaint et proteste. Le khalifa doit voir l'epreuve non comme une punition mais comme un raffinement de sa mission. L'epreuve separe ceux qui sont sinceres de ceux qui font semblant."
            },
            "Justesse/Rectitude": {
              status: "nul",
              senses: ["etre juste", "viser juste"],
              proof_ctx: "Le sens de justesse est hors sujet — le mot musibatun designe une calamite, pas un acte de precision ou de droiture."
            },
            "Endurance": {
              status: "nul",
              senses: ["patience"],
              proof_ctx: "Le sens d'endurance est hors sujet — musibatun designe l'epreuve elle-meme, pas la capacite de l'endurer."
            }
          }
        }
      },
      // qwl pos=4 — qalu (accompli 3MP)
      {
        word_key: "qwl", position: 4, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qalu est un accompli 3MP de la racine q-w-l. Le Lane's donne : dire, parler, prononcer, affirmer. L'accompli indique que la parole a ete prononcee — c'est un acte acheve. Le pluriel (3MP) montre que c'est une parole collective — tous les endurants disent la meme chose. La distinction avec « opinion » (nul) est claire : le verbe decrit l'acte de prononcer des mots, pas un jugement interieur. La distinction avec « puissance » (nul) est evidente : le contexte est une declaration verbale.",
              axe1_verset: "Le verbe qalu introduit la declaration solennelle des endurants : « inna li-llahi wa-inna ilayhi raji'una ». Le champ lexical montre une sequence : epreuve → parole → affirmation d'appartenance. La parole est la reaction immediate a l'epreuve — face au malheur, la premiere chose qu'ils font est parler. Mais cette parole n'est pas une plainte ni une lamentation, c'est une affirmation de foi.",
              axe2_voisins: "Le verset 155 annoncait les epreuves sans decrire la reaction. Le verset 156 montre la reaction par la parole — ils disent. Le verset 157 donnera la consequence de cette parole : prieres et misericorde. La parole prononcee dans l'epreuve est le pivot entre l'epreuve et la recompense.",
              axe3_sourate: "La racine q-w-l est la racine la plus frequente de la sourate al-Baqarah. En 2:8, « il y a des gens qui disent : nous croyons ». En 2:11, « quand on leur dit : ne semez pas la corruption ». En 2:80, « ils disent : le feu ne nous touchera pas ». La sourate oppose les paroles sinceres aux paroles mensongeres. Le verset 156 presente une parole authentique — la parole de celui qui endure.",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran — c'est la racine la plus frequente. Le verbe qala introduit les declarations des croyants et des rebelles. Le Coran juge les gens par ce qu'ils disent autant que par ce qu'ils font. En 2:156, la parole des endurants est un acte de foi — dire « nous sommes a Dieu » face a l'epreuve est une affirmation de principe.",
              axe5_frequence: "Pour la mission du khalifa, la parole est un outil de la mission. Ce que le khalifa dit face a l'epreuve revele sa position. Dire « nous sommes a Dieu et vers Lui nous retournons » c'est reaffirmer la mission dans le moment le plus difficile. La parole juste au moment juste est un acte de courage — elle transforme l'epreuve en occasion de foi."
            },
            "Pens\u00e9e/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion est un etat interieur. Le verbe qalu decrit l'acte exterieur de prononcer des mots — ils disent a voix haute, ils ne pensent pas en silence."
            },
            "Sens isol\u00e9/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: "Le sens de puissance est un usage specifique de q-w-l. Le contexte est une declaration verbale, pas une manifestation de puissance."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: "Le sens de troupeau est hors sujet — le verbe qalu decrit l'acte de parler."
            }
          }
        }
      },
      // rja pos=7 — raji'una (participe actif pluriel)
      {
        word_key: "rja", position: 7, sense_chosen: "retourner",
        analysis_axes: {
          sense_chosen: "retourner",
          concept_chosen: "Retour/R\u00e9version",
          concepts: {
            "Retour/R\u00e9version": {
              status: "retenu",
              senses: ["retourner", "revenir", "renvoyer"],
              proof_ctx: "Le mot raji'una est un participe actif masculin pluriel de la racine r-j-e. Le Lane's donne : retourner, revenir, faire retour. Le participe actif indique un etat ou une action en cours — raji'una signifie « ceux qui retournent » ou « ceux qui sont en train de retourner ». Le pluriel s'accorde avec le sujet implicite « nous ». La preposition « ilayhi » (vers Lui) donne la direction du retour — c'est vers Dieu que se fait le retour. La distinction avec « pluie » (nul) est evidente : le contexte est un retour vers Dieu, pas un phenomene meteorologique.",
              axe1_verset: "Le mot raji'una ferme la declaration solennelle des endurants. La structure de la declaration est bipartite : « nous sommes a Dieu » (origine/appartenance) et « vers Lui nous retournons » (destination/finalite). Le champ lexical (atteindre, epreuve, dire, retourner) montre un mouvement circulaire : l'epreuve vient de Dieu, et le retour se fait vers Dieu. Le retour est la cloture du cercle — tout part de Dieu et tout revient a Dieu.",
              axe2_voisins: "Le verset 155 annoncait les epreuves comme un test. Le verset 156 montre la reaction par l'affirmation du retour. Le verset 157 donnera les prieres et la misericorde — la recompense du retour affirme. Les versets 155-157 forment un triptyque : epreuve → declaration de retour → recompense. Le retour est le pivot entre l'epreuve et la misericorde.",
              axe3_sourate: "La racine r-j-e apparait dans la sourate al-Baqarah dans des contextes de retour a Dieu. En 2:28, « c'est vers Lui que vous serez retournes ». En 2:46, « ceux qui pensent qu'ils rencontreront leur Seigneur et qu'ils retourneront vers Lui ». La sourate construit l'idee que le retour vers Dieu est la certitude fondamentale — toute la vie terrestre est un aller-retour.",
              axe4_coherence: "La racine r-j-e apparait environ 104 fois dans le Coran. L'expression « ilayhi raji'una » (vers Lui retournant) est un leitmotiv coranique. En 21:35, « toute ame goutera la mort et vers Nous vous serez retournes ». En 23:115, « pensez-vous que Nous vous avons crees sans but et que vous ne serez pas retournes vers Nous ? ». Le Coran affirme le retour comme une certitude — pas une possibilite.",
              axe5_frequence: "Pour la mission du khalifa, le retour vers Dieu est la finalite de la mission. Le khalifa est sur terre pour un temps limite — son sejour terrestre est temporaire, son retour vers Dieu est certain. Affirmer le retour face a l'epreuve c'est rappeler que la mission a une fin et que les comptes seront rendus. Le retour donne un sens a l'epreuve — elle n'est qu'un episode sur le chemin du retour."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est un usage physique de r-j-e. Le contexte est le retour vers Dieu, pas un phenomene meteorologique."
            },
            "Sens isol\u00e9/R\u00e9ponse": {
              status: "nul",
              senses: ["reponse"],
              proof_ctx: "Le sens de reponse est un usage specifique de r-j-e. Le contexte est le retour vers Dieu — le participe actif raji'una designe ceux qui retournent, pas ceux qui repondent."
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

  const verseIds = [163];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 156 ===\n');
  await processVerse(156);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V156 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
