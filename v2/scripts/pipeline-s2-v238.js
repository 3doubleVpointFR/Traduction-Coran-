const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 - VERSET 238
// verse_id=245, analysis_id=601
// "hafizu 'ala al-salawati wa al-salati al-wusta
//  wa quumu lillahi qanitina"
// =====================================================

const verseData = {
  238: {
    verse_id: 245,
    analysis_id: 601,
    translation_arab: "Preservez les prieres et la priere mediane. Et tenez-vous devant Dieu en etat de devouement continu.",
    full_translation: "Observez avec soin les prieres et la priere du milieu [mediane]. Et tenez-vous debout devant Dieu avec devotion.",
    translation_explanation: "§DEMARCHE§\n" +
"Le verset 238 est une injonction sur la priere, insere dans un contexte legislatif sur le mariage et le divorce (v.221-242). Cet encart sur la salat au milieu des regles matrimoniales est delibere — il rappelle que la vie spirituelle ne doit pas etre suspendue meme dans les periodes de turbulence familiale. Le verset comporte deux imperatifs : hafizu (preservez, gardez) et quumu (tenez-vous debout, levez-vous), adresses a l'ensemble des croyants.\n" +
"\n" +
"La racine **hfz** (ha-fa-zal) signifie la preservation et la garde contre la perte ou la negligence. Le Lane's donne : hafiza = garder, preserver, surveiller, proteger de l'oubli — hafiz = gardien, celui qui preserve. Hafizu 'ala al-salawati = preservez les prieres (imperatif pluriel + 'ala = sur/envers). L'expression hafaza 'ala indique une attention soutenue et une vigilance active — pas juste accomplir, mais proteger de toute negligence.\n" +
"\n" +
"La racine **slw** (sad-lam-waw) signifie la priere rituelle et la connexion vers Dieu. Le Lane's donne : salla = prier, salat = priere rituelle (inclinations, prosternations, recitations). Al-salawat (pluriel de salat) = les prieres — les cinq prieres quotidiennes. La salat est le lien de connexion entre le croyant et Dieu — l'acte rituel d'orientation et d'adoration.\n" +
"\n" +
"La racine **wst** (waw-sad-ta) signifie le centre, le milieu et l'equilibre. Le Lane's donne : wasata = etre au milieu — wusta = la mediane, ce qui est au centre, l'intermediaire. Al-salat al-wusta = la priere du milieu/mediane. La wusta est ce qui est au centre de la serie — ni au debut ni a la fin, mais au coeur. Son identite exacte (priere du milieu de la journee = 'asr, ou de la nuit) est debattue par les savants.\n" +
"\n" +
"La racine **qwm** (qaf-waw-mim) signifie la verticalite, le lever et la droiture. Le Lane's donne : qama = se lever, se tenir debout — qumu = levez-vous, tenez-vous debout (imperatif pluriel). Quumu lillahi = tenez-vous debout devant Dieu (lillah = pour Dieu / devant Dieu). Le qiyam est la posture debout dans la priere — mais ici il couvre aussi l'attitude spirituelle de disponibilite et de presence.\n" +
"\n" +
"La racine **qnt** (qaf-nun-ta) signifie le devouement continu et la soumission persistante. Le Lane's donne : qanata = etre devotement soumis, persister dans la devotion — qanitun = ceux qui persistent dans la devotion (pluriel actif). Qanitina (accusatif pluriel) qualifie l'etat dans lequel les croyants doivent se tenir devant Dieu. Le qunut est la devotion durable et l'humilite active — pas un moment d'emotion mais un etat stable de soumission reverentielle.\n" +
"\n" +
"§JUSTIFICATION§\n" +
"**Preservez les prieres** — hafizu 'ala al-salawati : l'imperatif hafizu (preservez, gardez, de hfz) + 'ala (sur/envers) indique une vigilance active et continue sur les prieres. Le verbe hafaza 'ala implique non seulement d'accomplir mais de proteger, de surveiller — comme on surveille un tresor ou un depot confie. Les salawat (les prieres, pluriel de salat, de slw) sont les obligations quotidiennes.\n" +
"\n" +
"**et la priere mediane** — wa al-salati al-wusta : la salat al-wusta est mentionnee separement et en plus pour en souligner l'importance particuliere. Al-wusta (mediane, de wst) indique la priere centrale ou intermediaire. Les savants ont debattu son identite : 'asr selon le hadith le plus cite, mais aussi la priere du midi (zuhr) ou une priere nocturne. La mention separee en fait une priorite dans la priorite.\n" +
"\n" +
"**Et tenez-vous debout devant Dieu** — wa quumu lillahi : quumu (tenez-vous debout, imperatif 2MP de qwm) + lillahi (pour/devant Dieu) indique la posture du qiyam (station debout) dans la priere, mais aussi une disposition spirituelle generale — etre present, droit, disponible devant Dieu. Le qiyam (station debout) est la posture initiale de la priere, celle de la recitation.\n" +
"\n" +
"**avec devouement** — qanitina : qanitina (devotement soumis, accusatif pluriel de qanata) est la maniere dont les croyants doivent se tenir devant Dieu. Le qunut est l'etat de devotion persistante — la priere accomplie avec concentration (khushu'), humilite (khushu') et soumission stable. Quumu qanitina = tenez-vous debout en etant dans l'etat du qunut.\n" +
"\n" +
"**L'encart spirituel dans la legislation matrimoniale** : l'insertion de ce verset sur la priere au milieu des regulations sur le mariage et le divorce (v.221-242) est deliberee. Elle rappelle que les crises de la vie familiale (divorce, dot, differends) ne doivent pas faire negliger la priere. La priere (salat) est le lien permanent avec Dieu qui doit etre maintenu meme dans la tourmente — la hifz (preservation) de la salat est la condition de l'equilibre spirituel.\n" +
"\n" +
"§CRITIQUE§\n" +
"Hamidullah traduit 'hafizu' par 'observez avec soin'. La racine hfz signifie garder/preserver — 'observer avec soin' rend bien l'idee de vigilance active. On pourrait aussi traduire 'gardez jalousement' ou 'veillez sur' pour rendre le sense de preservation contre la perte et la negligence que contient hfz. 'Observez' est correct mais estompe la dimension de garde active.\n" +
"\n" +
"Hamidullah traduit 'al-wusta' par 'du milieu [mediane]'. Al-wusta (mediane, de wst = centre) est bien rendu par 'du milieu'. La precision '[mediane]' entre crochets indique qu'il s'agit d'une traduction interpretative. L'identite de cette priere reste debattue — Hamidullah choisit sagement de rester descriptif (du milieu) plutot que d'identifier ('asr ou zuhr).\n" +
"\n" +
"Hamidullah traduit 'qanitina' par 'avec devotion'. Le qunut (de qnt) est un etat de devotion continue et de soumission persistante — 'avec devotion' rend bien l'essentiel. Cependant, la dimension de persistance et de continuite (qunut comme etat stable, pas juste un sentiment momentane) est partiellement perdue. 'Dans un etat de devouement soutenu' serait plus precis mais moins fluide.",
    segments: [
      { fr: "Preservez les prieres", pos: "verbe", phon: "hafizu 'ala al-salawati", arabic: "حَافِظُوا۟ عَلَى ٱلصَّلَوَٰتِ", word_key: "hfz", is_particle: false, sense_retenu: "preservation/garde", position: 1 },
      { fr: "les prieres", pos: "nom", phon: "al-salawati", arabic: "ٱلصَّلَوَٰتِ", word_key: "slw", is_particle: false, sense_retenu: "priere/connexion", position: 2 },
      { fr: "et la priere mediane", pos: "nom", phon: "wa al-salati al-wusta", arabic: "وَٱلصَّلَوٰةِ ٱلْوُسْطَىٰ", word_key: "wst", is_particle: false, sense_retenu: "centre/mediane", position: 3 },
      { fr: "Et tenez-vous debout devant Dieu", pos: "verbe", phon: "wa quumu lillahi", arabic: "وَقُومُوا۟ لِلَّهِ", word_key: "qwm", is_particle: false, sense_retenu: "verticalite/droiture", position: 4 },
      { fr: "en etat de devouement continu", pos: "nom", phon: "qanitina", arabic: "قَانِتِينَ", word_key: "qnt", is_particle: false, sense_retenu: "devotion/soumission", position: 5 }
    ],
    vwa: [
      {
        word_key: "hfz",
        position: 1,
        sense_chosen: "Preservation/Garde",
        analysis_axes: {
          sense_chosen: "Preservation/Garde",
          concept_chosen: "Preservation/Garde",
          concepts: {
            "Preservation/Garde": {
              status: "retenu",
              senses: ["garder", "preserver", "proteger de l'oubli et de la negligence", "hafiza 'ala = surveiller/garder"],
              proof_ctx: "hafizu 'ala al-salawati wa al-salati al-wusta = preservez les prieres et la priere mediane",
              axe1_verset: "Hafizu (preservez, imperatif 2MP de hafaza) + 'ala (sur/envers) designe une vigilance active et soutenue sur les prieres. Le verbe hafaza 'ala implique non seulement d'accomplir un acte mais de le proteger de toute negligence, de le garder intact contre toute menace. L'imperatif s'adresse a la communaute entiere — obligation collective et individuelle.",
              axe2_voisins: "L'imperatif hafizu est le premier mot du verset, lui donnant une force d'injonction maximale. Il gouverne al-salawati (les prieres) et al-salati al-wusta (la priere mediane). La structure 'hafizu 'ala X wa X' souligne que la preservation s'applique a l'ensemble (salawat) et a une priere particuliere (wusta). La double mention intensifie l'obligation.",
              axe3_sourate: "Dans S2, hfz apparait principalement ici. Mais la racine est fondamentale dans le Coran : al-hafiz (le Gardien) comme Attribut divin (S11:57, S34:21), huffaz (ceux qui memorisent le Coran), al-hafizun (les gardiens de leur chasteté, S23:5). La hifz (preservation) est a la fois un attribut divin et une obligation humaine — notamment vis-a-vis de la priere et du Coran.",
              axe4_coherence: "Le sens Preservation/Garde est coherent avec le contexte du verset : insere dans une section sur le divorce et ses perturbations, le verset 238 rappelle que la priere doit etre 'preservee' meme dans les periodes difficiles. La hifz de la salat est une ancre spirituelle — ce qui doit etre maintenu quand tout le reste vacille. La coherence est entre la preservation de la priere et la preservation de l'equilibre spirituel.",
              axe5_frequence: "La racine hfz est frequente dans le Coran — hafiz/hafizun (gardien/s) apparait dans de nombreux versets. Al-Hafiz est un des Noms de Dieu (gardien de toute chose). La forme hafizu 'ala (preservez) est specifique aux obligations actives que le croyant doit surveiller. La frequence dans le contexte de la priere souligne l'importance de ne pas laisser la salat devenir un acte mecanique sans vigilance."
            }
          }
        }
      },
      {
        word_key: "slw",
        position: 3,
        sense_chosen: "Priere/Connexion",
        analysis_axes: {
          sense_chosen: "Priere/Connexion",
          concept_chosen: "Priere/Connexion",
          concepts: {
            "Priere/Connexion": {
              status: "retenu",
              senses: ["priere rituelle", "connexion vers Dieu", "inclinaison", "al-salawat = les prieres au pluriel"],
              proof_ctx: "hafizu 'ala al-salawati wa al-salati al-wusta = preservez les prieres et la priere mediane",
              axe1_verset: "Al-salawat (les prieres, pluriel de salat) designe l'ensemble des prieres rituelles quotidiennes. La salat est l'acte rituel de connexion entre le croyant et Dieu — inclinations, prosternations, recitations d'une precision codifiee. La mention du pluriel (salawat) couvre toutes les prieres obligatoires, puis al-salat al-wusta en singulier en isole une pour en souligner l'importance.",
              axe2_voisins: "La salat al-wusta (la priere mediane) est mentionnee separement apres al-salawat (toutes les prieres). La structure 'al-X wa al-X al-Y' (les prieres et la priere mediane) est une figure d'emphase — elle inclut d'abord tout puis isole l'element le plus important. La priere mediane (wusta) beneficie d'une double injonction.",
              axe3_sourate: "Dans S2, slw apparait regulierement : v.3 (ceux qui prient), v.43 (etablissez la priere), v.45 (cherchez de l'aide dans la patience et la priere), v.83 (etablissez la priere), v.110, v.177, v.238, v.239. La salat est l'une des obligations les plus souvent mentionnees dans S2 — elle est le deuxieme pilier de l'islam, apres la shahada.",
              axe4_coherence: "Le sens Priere/Connexion est coherent avec la structure du verset : la priere (salat) est la connexion rituelle a Dieu qui doit etre preservee (hfz) et accomplie avec devouement (qnt). La coherence est dans la logique : hifz (preservation) -> salat (connexion) -> qunut (devotion). Les trois elements forment un tout coherent sur la qualite de la priere.",
              axe5_frequence: "La racine slw est l'une des plus frequentes du Coran — salat apparait plus de 80 fois. La salat est le deuxieme pilier de l'islam et l'acte rituel le plus frequemment commande dans le Coran. La forme al-salawat (pluriel) est moins frequente que le singulier al-salat — elle signale l'ensemble des prieres prescrites (fajr, zuhr, 'asr, maghrib, 'isha)."
            }
          }
        }
      },
      {
        word_key: "wst",
        position: 5,
        sense_chosen: "Centre/Mediane",
        analysis_axes: {
          sense_chosen: "Centre/Mediane",
          concept_chosen: "Centre/Mediane",
          concepts: {
            "Centre/Mediane": {
              status: "retenu",
              senses: ["ce qui est au milieu", "le centre", "l'equilibre", "al-wusta = la mediane, la centrale"],
              proof_ctx: "al-salati al-wusta = la priere mediane/du milieu",
              axe1_verset: "Al-wusta (la mediane, adjectif feminin de awsat) qualifie al-salat — la priere qui est au centre. Al-wusta designe ce qui est equidistant des extremes, ce qui est au coeur. Quel que soit l'identification exacte de cette priere (debat savant non tranche), son caractere central est etabli par le terme wusta. Elle occupe une position de milieu parmi les prieres.",
              axe2_voisins: "Al-salat al-wusta est mentionnee apres al-salawat (l'ensemble) pour en souligner l'importance particuliere. La construction grammaticale (al-salawat wa al-salat al-wusta) suggere que la priere mediane est doublement injonctee — elle fait partie de l'ensemble et est en plus designee separement. Sa position mediane lui confere un role d'equilibre et de centralite.",
              axe3_sourate: "Dans S2, wst apparait uniquement ici dans le contexte de la priere. Mais la racine est importante ailleurs : v.143, la communaute musulmane est decrite comme 'ummat wasatan' (communaute mediane/equilibree). La wasatiyya (equilbire/moderaion) est une valeur coranique centrale — la wusta de la priere est coherente avec cette valeur de juste milieu.",
              axe4_coherence: "Le sens Centre/Mediane est coherent avec la structure coranique : dans S2:143, la communaute est 'wasata' (mediane/equilibree), et dans S2:238 la priere est 'wusta' (mediane). La centralite est un ideal coranique — ni extreme ni negligent. La priere mediane pourrait symboliser le point d'equilibre de la journee spirituelle.",
              axe5_frequence: "La racine wst (milieu/centre) est presente dans plusieurs versets coraniques importants. En S2:143, awsatan qualifie la communaute musulmane. En S68:28, awsatuhum (le plus sense d'entre eux, celui du juste milieu) designe la voix de la raison. La wusta comme ideal de juste milieu, d'equilibre et de centralite est un motif coranique coherent."
            }
          }
        }
      },
      {
        word_key: "qwm",
        position: 6,
        sense_chosen: "Verticalite/Droiture",
        analysis_axes: {
          sense_chosen: "Verticalite/Droiture",
          concept_chosen: "Verticalite/Droiture",
          concepts: {
            "Verticalite/Droiture": {
              status: "retenu",
              senses: ["se lever", "se tenir droit", "se dresser", "qumu = levez-vous, restez debout"],
              proof_ctx: "wa quumu lillahi qanitina = et tenez-vous debout devant Dieu en etant devotement soumis",
              axe1_verset: "Quumu (tenez-vous debout, imperatif 2MP de qama) est le deuxieme imperatif du verset apres hafizu. Lillahi (devant/pour Dieu) designe l'orientation de cette station debout — c'est une station devant la presence divine. Qanitina qualifie l'etat dans lequel on doit se tenir. Le qiyam (station debout) est la posture initiale de la priere, celle de la recitation de la Fatiha.",
              axe2_voisins: "Quumu lillahi est l'acte physique et spirituel de se dresser devant Dieu. L'expression lillahi (pour/devant Dieu) indique que le qiyam n'est pas une simple posture physique — c'est une disponibilite totale devant la presence divine. La conjonction wa qui relie hafizu et quumu indique que les deux imperatifs sont complementaires : preserver les prieres ET se tenir debout devant Dieu.",
              axe3_sourate: "Dans S2, qwm apparait dans de nombreux contextes : v.30 (Dieu va etablir/placer un vice-regent), v.150 (se tourner vers), v.179 (dans le qisas il y a la vie), v.238 (tenez-vous debout). La racine qwm couvre le fait de s'etablir, de se dresser, de se tenir. Dans le contexte de la priere, quumu lillahi designe le qiyam comme posture et comme disposition spirituelle.",
              axe4_coherence: "Le sens Verticalite/Droiture est coherent avec la priere islamique : le qiyam (station debout) est la premiere position de la priere. Se 'tenir debout devant Dieu' est une metaphore puissante de la relation humain-Dieu — se dresser, etre present, etre attentif. La coherence est dans la progression : hafizu (preservez) -> quumu (tenez-vous) -> qanitina (dans la devotion).",
              axe5_frequence: "La racine qwm est l'une des plus frequentes du Coran. Aqama al-salat (etablir la priere) est la formule la plus courante pour l'obligation priante. Qiyam al-layl (la station nocturne = priere nocturne) est une pratique spirituelle haute. La forme quumu (imperatif) dans le contexte de la priere est specifique a ce verset — elle souligne la dimension active et intentionnelle de la station."
            }
          }
        }
      },
      {
        word_key: "qnt",
        position: 8,
        sense_chosen: "Devotion/Soumission",
        analysis_axes: {
          sense_chosen: "Devotion/Soumission",
          concept_chosen: "Devotion/Soumission",
          concepts: {
            "Devotion/Soumission": {
              status: "retenu",
              senses: ["devouement continu", "soumission persistante", "humilite active", "qanitun = ceux qui persistent dans la devotion"],
              proof_ctx: "wa quumu lillahi qanitina = tenez-vous debout devant Dieu en etant dans l'etat du qunut",
              axe1_verset: "Qanitina (devotement soumis, accusatif pluriel de qanata) est la maniere dont les croyants doivent accomplir le quumu lillahi (station debout devant Dieu). Le qunut designe un etat de devotion stable, continue et persistante — ni momentanee ni superficielle. C'est l'attitude interieure de l'ame en priere : soumission, humilite, presence constante.",
              axe2_voisins: "Qanitina qualifie l'etat accompagnant quumu — c'est une circumstance de maniere. Se tenir debout devant Dieu en etant qanitina = avec le qunut actif. Le qunut est l'oppose de la negligence (lahw), de la distraction (ghafla) et de l'orgueil ('ujb). C'est la posture de l'ame qui se sait devant son Createur et s'y adapte par une soumission active.",
              axe3_sourate: "Dans S2, qnt apparait aussi en v.116 et v.117 (qunutan = en etat de devotion, tout ce qui est dans les cieux et la terre lui appartient, qunut). La racine qnt est associee aux prophetes et aux ames d'excellence : Maryam est qanitat (S66:12), Ibrahim est qanitun (S16:120). Le qunut est la marque des ames spirituellement avancees.",
              axe4_coherence: "Le sens Devotion/Soumission est coherent avec la finalite du verset : la priere ne se limite pas a un accomplissement mecanique — elle necessite le qunut (devotion active et persistante). La coherence est dans la progression du verset : hifz (preservation contre la negligence externe) + qunut (qualite interieure de la devotion). Les deux dimensions — externe (hifz) et interne (qunut) — sont indispensables.",
              axe5_frequence: "La racine qnt (qunut/qanitun) est associee aux grandes figures de la piete coranique : Maryam (qanitatan, S3:43), Ibrahim (qanitun, S16:120), les croyants excellents (qanitin, S33:35). Le qunut comme etat de devotion soutenue et d'humilite persistante est une vertu d'elite dans le Coran. Sa mention dans le contexte de la priere quotidienne democratise cet ideal — tous les croyants sont appeles a atteindre cet etat."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[238];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V238)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('V238 TERMINE');
}
main().catch(console.error);
